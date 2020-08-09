define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createVirtualLanguageServiceHost = exports.createVirtualCompilerHost = exports.createFSBackedSystem = exports.createSystem = exports.createDefaultMapFromCDN = exports.addFilesForTypesIntoFolder = exports.addAllFilesFromFolder = exports.createDefaultMapFromNodeModules = exports.knownLibFilesForCompilerOptions = exports.createVirtualTypeScriptEnvironment = void 0;
    let hasLocalStorage = false;
    try {
        hasLocalStorage = typeof localStorage !== `undefined`;
    }
    catch (error) { }
    const hasProcess = typeof process !== `undefined`;
    const shouldDebug = (hasLocalStorage && localStorage.getItem("DEBUG")) || (hasProcess && process.env.DEBUG);
    const debugLog = shouldDebug ? console.log : (_message, ..._optionalParams) => "";
    /**
     * Makes a virtual copy of the TypeScript environment. This is the main API you want to be using with
     * @typescript/vfs. A lot of the other exposed functions are used by this function to get set up.
     *
     * @param sys an object which conforms to the TS Sys (a shim over read/write access to the fs)
     * @param rootFiles a list of files which are considered inside the project
     * @param ts a copy pf the TypeScript module
     * @param compilerOptions the options for this compiler run
     * @param customTransformers custom transformers for this compiler run
     */
    function createVirtualTypeScriptEnvironment(sys, rootFiles, ts, compilerOptions = {}, customTransformers) {
        const mergedCompilerOpts = Object.assign(Object.assign({}, defaultCompilerOptions(ts)), compilerOptions);
        const { languageServiceHost, updateFile } = createVirtualLanguageServiceHost(sys, rootFiles, mergedCompilerOpts, ts, customTransformers);
        const languageService = ts.createLanguageService(languageServiceHost);
        const diagnostics = languageService.getCompilerOptionsDiagnostics();
        if (diagnostics.length) {
            const compilerHost = createVirtualCompilerHost(sys, compilerOptions, ts);
            throw new Error(ts.formatDiagnostics(diagnostics, compilerHost.compilerHost));
        }
        return {
            sys,
            languageService,
            getSourceFile: fileName => { var _a; return (_a = languageService.getProgram()) === null || _a === void 0 ? void 0 : _a.getSourceFile(fileName); },
            createFile: (fileName, content) => {
                updateFile(ts.createSourceFile(fileName, content, mergedCompilerOpts.target, false));
            },
            updateFile: (fileName, content, optPrevTextSpan) => {
                const prevSourceFile = languageService.getProgram().getSourceFile(fileName);
                if (!prevSourceFile) {
                    throw new Error("Did not find a source file for " + fileName);
                }
                const prevFullContents = prevSourceFile.text;
                // TODO: Validate if the default text span has a fencepost error?
                const prevTextSpan = optPrevTextSpan !== null && optPrevTextSpan !== void 0 ? optPrevTextSpan : ts.createTextSpan(0, prevFullContents.length);
                const newText = prevFullContents.slice(0, prevTextSpan.start) +
                    content +
                    prevFullContents.slice(prevTextSpan.start + prevTextSpan.length);
                const newSourceFile = ts.updateSourceFile(prevSourceFile, newText, {
                    span: prevTextSpan,
                    newLength: content.length,
                });
                updateFile(newSourceFile);
            },
        };
    }
    exports.createVirtualTypeScriptEnvironment = createVirtualTypeScriptEnvironment;
    /**
     * Grab the list of lib files for a particular target, will return a bit more than necessary (by including
     * the dom) but that's OK
     *
     * @param target The compiler settings target baseline
     * @param ts A copy of the TypeScript module
     */
    exports.knownLibFilesForCompilerOptions = (compilerOptions, ts) => {
        const target = compilerOptions.target || ts.ScriptTarget.ES5;
        const lib = compilerOptions.lib || [];
        const files = [
            "lib.d.ts",
            "lib.dom.d.ts",
            "lib.dom.iterable.d.ts",
            "lib.webworker.d.ts",
            "lib.webworker.importscripts.d.ts",
            "lib.scripthost.d.ts",
            "lib.es5.d.ts",
            "lib.es6.d.ts",
            "lib.es2015.collection.d.ts",
            "lib.es2015.core.d.ts",
            "lib.es2015.d.ts",
            "lib.es2015.generator.d.ts",
            "lib.es2015.iterable.d.ts",
            "lib.es2015.promise.d.ts",
            "lib.es2015.proxy.d.ts",
            "lib.es2015.reflect.d.ts",
            "lib.es2015.symbol.d.ts",
            "lib.es2015.symbol.wellknown.d.ts",
            "lib.es2016.array.include.d.ts",
            "lib.es2016.d.ts",
            "lib.es2016.full.d.ts",
            "lib.es2017.d.ts",
            "lib.es2017.full.d.ts",
            "lib.es2017.intl.d.ts",
            "lib.es2017.object.d.ts",
            "lib.es2017.sharedmemory.d.ts",
            "lib.es2017.string.d.ts",
            "lib.es2017.typedarrays.d.ts",
            "lib.es2018.asyncgenerator.d.ts",
            "lib.es2018.asynciterable.d.ts",
            "lib.es2018.d.ts",
            "lib.es2018.full.d.ts",
            "lib.es2018.intl.d.ts",
            "lib.es2018.promise.d.ts",
            "lib.es2018.regexp.d.ts",
            "lib.es2019.array.d.ts",
            "lib.es2019.d.ts",
            "lib.es2019.full.d.ts",
            "lib.es2019.object.d.ts",
            "lib.es2019.string.d.ts",
            "lib.es2019.symbol.d.ts",
            "lib.es2020.d.ts",
            "lib.es2020.full.d.ts",
            "lib.es2020.string.d.ts",
            "lib.es2020.symbol.wellknown.d.ts",
            "lib.es2020.bigint.d.ts",
            "lib.es2020.promise.d.ts",
            "lib.es2020.intl.d.ts",
            "lib.esnext.array.d.ts",
            "lib.esnext.asynciterable.d.ts",
            "lib.esnext.bigint.d.ts",
            "lib.esnext.d.ts",
            "lib.esnext.full.d.ts",
            "lib.esnext.intl.d.ts",
            "lib.esnext.symbol.d.ts",
        ];
        const targetToCut = ts.ScriptTarget[target];
        const matches = files.filter(f => f.startsWith(`lib.${targetToCut.toLowerCase()}`));
        const targetCutIndex = files.indexOf(matches.pop());
        const getMax = (array) => array && array.length ? array.reduce((max, current) => (current > max ? current : max)) : undefined;
        // Find the index for everything in
        const indexesForCutting = lib.map(lib => {
            const matches = files.filter(f => f.startsWith(`lib.${lib.toLowerCase()}`));
            if (matches.length === 0)
                return 0;
            const cutIndex = files.indexOf(matches.pop());
            return cutIndex;
        });
        const libCutIndex = getMax(indexesForCutting) || 0;
        const finalCutIndex = Math.max(targetCutIndex, libCutIndex);
        return files.slice(0, finalCutIndex + 1);
    };
    /**
     * Sets up a Map with lib contents by grabbing the necessary files from
     * the local copy of typescript via the file system.
     */
    exports.createDefaultMapFromNodeModules = (compilerOptions, ts) => {
        const tsModule = ts || require("typescript");
        const path = require("path");
        const fs = require("fs");
        const getLib = (name) => {
            const lib = path.dirname(require.resolve("typescript"));
            return fs.readFileSync(path.join(lib, name), "utf8");
        };
        const libs = exports.knownLibFilesForCompilerOptions(compilerOptions, tsModule);
        const fsMap = new Map();
        libs.forEach(lib => {
            fsMap.set("/" + lib, getLib(lib));
        });
        return fsMap;
    };
    /**
     * Adds recursively files from the FS into the map based on the folder
     */
    exports.addAllFilesFromFolder = (map, workingDir) => {
        const path = require("path");
        const fs = require("fs");
        const walk = function (dir) {
            let results = [];
            const list = fs.readdirSync(dir);
            list.forEach(function (file) {
                file = path.join(dir, file);
                const stat = fs.statSync(file);
                if (stat && stat.isDirectory()) {
                    /* Recurse into a subdirectory */
                    results = results.concat(walk(file));
                }
                else {
                    /* Is a file */
                    results.push(file);
                }
            });
            return results;
        };
        const allFiles = walk(workingDir);
        allFiles.forEach(lib => {
            const fsPath = "/node_modules/@types" + lib.replace(workingDir, "");
            const content = fs.readFileSync(lib, "utf8");
            const validExtensions = [".ts", ".tsx"];
            if (validExtensions.includes(path.extname(fsPath))) {
                map.set(fsPath, content);
            }
        });
    };
    /** Adds all files from node_modules/@types into the FS Map */
    exports.addFilesForTypesIntoFolder = (map) => exports.addAllFilesFromFolder(map, "node_modules/@types");
    /**
     * Create a virtual FS Map with the lib files from a particular TypeScript
     * version based on the target, Always includes dom ATM.
     *
     * @param options The compiler target, which dictates the libs to set up
     * @param version the versions of TypeScript which are supported
     * @param cache should the values be stored in local storage
     * @param ts a copy of the typescript import
     * @param lzstring an optional copy of the lz-string import
     * @param fetcher an optional replacement for the global fetch function (tests mainly)
     * @param storer an optional replacement for the localStorage global (tests mainly)
     */
    exports.createDefaultMapFromCDN = (options, version, cache, ts, lzstring, fetcher, storer) => {
        const fetchlike = fetcher || fetch;
        const storelike = storer || localStorage;
        const fsMap = new Map();
        const files = exports.knownLibFilesForCompilerOptions(options, ts);
        const prefix = `https://typescript.azureedge.net/cdn/${version}/typescript/lib/`;
        function zip(str) {
            return lzstring ? lzstring.compressToUTF16(str) : str;
        }
        function unzip(str) {
            return lzstring ? lzstring.decompressFromUTF16(str) : str;
        }
        // Map the known libs to a node fetch promise, then return the contents
        function uncached() {
            return Promise.all(files.map(lib => fetchlike(prefix + lib).then(resp => resp.text()))).then(contents => {
                contents.forEach((text, index) => fsMap.set("/" + files[index], text));
            });
        }
        // A localstorage and lzzip aware version of the lib files
        function cached() {
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                // Remove anything which isn't from this version
                if (key.startsWith("ts-lib-") && !key.startsWith("ts-lib-" + version)) {
                    storelike.removeItem(key);
                }
            });
            return Promise.all(files.map(lib => {
                const cacheKey = `ts-lib-${version}-${lib}`;
                const content = storelike.getItem(cacheKey);
                if (!content) {
                    // Make the API call and store the text concent in the cache
                    return fetchlike(prefix + lib)
                        .then(resp => resp.text())
                        .then(t => {
                        storelike.setItem(cacheKey, zip(t));
                        return t;
                    });
                }
                else {
                    return Promise.resolve(unzip(content));
                }
            })).then(contents => {
                contents.forEach((text, index) => {
                    const name = "/" + files[index];
                    fsMap.set(name, text);
                });
            });
        }
        const func = cache ? cached : uncached;
        return func().then(() => fsMap);
    };
    // TODO: Add some kind of debug logger (needs to be compat with sandbox's deployment, not just via npm)
    function notImplemented(methodName) {
        throw new Error(`Method '${methodName}' is not implemented.`);
    }
    function audit(name, fn) {
        return (...args) => {
            const res = fn(...args);
            const smallres = typeof res === "string" ? res.slice(0, 80) + "..." : res;
            debugLog("> " + name, ...args);
            debugLog("< " + smallres);
            return res;
        };
    }
    /** The default compiler options if TypeScript could ever change the compiler options */
    const defaultCompilerOptions = (ts) => {
        return Object.assign(Object.assign({}, ts.getDefaultCompilerOptions()), { jsx: ts.JsxEmit.React, strict: true, esModuleInterop: true, module: ts.ModuleKind.ESNext, suppressOutputPathCheck: true, skipLibCheck: true, skipDefaultLibCheck: true, moduleResolution: ts.ModuleResolutionKind.NodeJs });
    };
    // "/DOM.d.ts" => "/lib.dom.d.ts"
    const libize = (path) => path.replace("/", "/lib.").toLowerCase();
    /**
     * Creates an in-memory System object which can be used in a TypeScript program, this
     * is what provides read/write aspects of the virtual fs
     */
    function createSystem(files) {
        return {
            args: [],
            createDirectory: () => notImplemented("createDirectory"),
            // TODO: could make a real file tree
            directoryExists: audit("directoryExists", directory => {
                return Array.from(files.keys()).some(path => path.startsWith(directory));
            }),
            exit: () => notImplemented("exit"),
            fileExists: audit("fileExists", fileName => files.has(fileName) || files.has(libize(fileName))),
            getCurrentDirectory: () => "/",
            getDirectories: () => [],
            getExecutingFilePath: () => notImplemented("getExecutingFilePath"),
            readDirectory: audit("readDirectory", directory => (directory === "/" ? Array.from(files.keys()) : [])),
            readFile: audit("readFile", fileName => files.get(fileName) || files.get(libize(fileName))),
            resolvePath: path => path,
            newLine: "\n",
            useCaseSensitiveFileNames: true,
            write: () => notImplemented("write"),
            writeFile: (fileName, contents) => {
                files.set(fileName, contents);
            },
        };
    }
    exports.createSystem = createSystem;
    /**
     * Creates a file-system backed System object which can be used in a TypeScript program, you provide
     * a set of virtual files which are prioritised over the FS versions, then a path to the root of your
     * project (basically the folder your node_modules lives)
     */
    function createFSBackedSystem(files, projectRoot) {
        const fs = require("fs");
        const path = require("path");
        return {
            args: [],
            createDirectory: () => notImplemented("createDirectory"),
            // TODO: could make a real file tree
            directoryExists: audit("directoryExists", directory => {
                return (Array.from(files.keys()).some(path => path.startsWith(directory)) ||
                    fs.existsSync(path.join(projectRoot, directory)));
            }),
            exit: () => notImplemented("exit"),
            fileExists: audit("fileExists", fileName => {
                if (files.has(fileName))
                    return true;
                const fsPath = path.join(projectRoot, fileName);
                const libPath = path.join(projectRoot, "node_modules", "typescript", "lib", fileName);
                for (const filepath of [fsPath, libPath]) {
                    if (fs.existsSync(filepath))
                        return true;
                }
                return false;
            }),
            getCurrentDirectory: () => "/",
            getDirectories: () => [],
            getExecutingFilePath: () => notImplemented("getExecutingFilePath"),
            readDirectory: audit("readDirectory", directory => (directory === "/" ? Array.from(files.keys()) : [])),
            readFile: audit("readFile", fileName => {
                if (files.has(fileName))
                    return files.get(fileName);
                const fsPath = path.join(projectRoot, fileName);
                const libPath = path.join(projectRoot, "node_modules", "typescript", "lib", fileName);
                for (const filepath of [fsPath, libPath]) {
                    if (fs.existsSync(filepath))
                        return fs.readFileSync(filepath, { encoding: "utf-8" });
                }
                return undefined;
            }),
            resolvePath: path => path,
            newLine: "\n",
            useCaseSensitiveFileNames: true,
            write: () => notImplemented("write"),
            writeFile: (fileName, contents) => {
                files.set(fileName, contents);
            },
        };
    }
    exports.createFSBackedSystem = createFSBackedSystem;
    /**
     * Creates an in-memory CompilerHost -which is essentially an extra wrapper to System
     * which works with TypeScript objects - returns both a compiler host, and a way to add new SourceFile
     * instances to the in-memory file system.
     */
    function createVirtualCompilerHost(sys, compilerOptions, ts) {
        const sourceFiles = new Map();
        const save = (sourceFile) => {
            sourceFiles.set(sourceFile.fileName, sourceFile);
            return sourceFile;
        };
        const vHost = {
            compilerHost: Object.assign(Object.assign({}, sys), { getCanonicalFileName: fileName => fileName, getDefaultLibFileName: () => "/" + ts.getDefaultLibFileName(compilerOptions), 
                // getDefaultLibLocation: () => '/',
                getDirectories: () => [], getNewLine: () => sys.newLine, getSourceFile: fileName => {
                    return (sourceFiles.get(fileName) ||
                        save(ts.createSourceFile(fileName, sys.readFile(fileName), compilerOptions.target || defaultCompilerOptions(ts).target, false)));
                }, useCaseSensitiveFileNames: () => sys.useCaseSensitiveFileNames }),
            updateFile: sourceFile => {
                const alreadyExists = sourceFiles.has(sourceFile.fileName);
                sys.writeFile(sourceFile.fileName, sourceFile.text);
                sourceFiles.set(sourceFile.fileName, sourceFile);
                return alreadyExists;
            },
        };
        return vHost;
    }
    exports.createVirtualCompilerHost = createVirtualCompilerHost;
    /**
     * Creates an object which can host a language service against the virtual file-system
     */
    function createVirtualLanguageServiceHost(sys, rootFiles, compilerOptions, ts, customTransformers) {
        const fileNames = [...rootFiles];
        const { compilerHost, updateFile } = createVirtualCompilerHost(sys, compilerOptions, ts);
        const fileVersions = new Map();
        let projectVersion = 0;
        const languageServiceHost = Object.assign(Object.assign({}, compilerHost), { getProjectVersion: () => projectVersion.toString(), getCompilationSettings: () => compilerOptions, getCustomTransformers: () => customTransformers, getScriptFileNames: () => fileNames, getScriptSnapshot: fileName => {
                const contents = sys.readFile(fileName);
                if (contents) {
                    return ts.ScriptSnapshot.fromString(contents);
                }
                return;
            }, getScriptVersion: fileName => {
                return fileVersions.get(fileName) || "0";
            }, writeFile: sys.writeFile });
        const lsHost = {
            languageServiceHost,
            updateFile: sourceFile => {
                projectVersion++;
                fileVersions.set(sourceFile.fileName, projectVersion.toString());
                if (!fileNames.includes(sourceFile.fileName)) {
                    fileNames.push(sourceFile.fileName);
                }
                updateFile(sourceFile);
            },
        };
        return lsHost;
    }
    exports.createVirtualLanguageServiceHost = createVirtualLanguageServiceHost;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC12ZnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zYW5kYm94L3NyYy92ZW5kb3IvdHlwZXNjcmlwdC12ZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQVFBLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQTtJQUMzQixJQUFJO1FBQ0YsZUFBZSxHQUFHLE9BQU8sWUFBWSxLQUFLLFdBQVcsQ0FBQTtLQUN0RDtJQUFDLE9BQU8sS0FBSyxFQUFFLEdBQUU7SUFFbEIsTUFBTSxVQUFVLEdBQUcsT0FBTyxPQUFPLEtBQUssV0FBVyxDQUFBO0lBQ2pELE1BQU0sV0FBVyxHQUFHLENBQUMsZUFBZSxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNHLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFjLEVBQUUsR0FBRyxlQUFzQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUE7SUFVOUY7Ozs7Ozs7OztPQVNHO0lBRUgsU0FBZ0Isa0NBQWtDLENBQ2hELEdBQVcsRUFDWCxTQUFtQixFQUNuQixFQUFNLEVBQ04sa0JBQW1DLEVBQUUsRUFDckMsa0JBQXVDO1FBRXZDLE1BQU0sa0JBQWtCLG1DQUFRLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxHQUFLLGVBQWUsQ0FBRSxDQUFBO1FBRWhGLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsR0FBRyxnQ0FBZ0MsQ0FDMUUsR0FBRyxFQUNILFNBQVMsRUFDVCxrQkFBa0IsRUFDbEIsRUFBRSxFQUNGLGtCQUFrQixDQUNuQixDQUFBO1FBQ0QsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDckUsTUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDLDZCQUE2QixFQUFFLENBQUE7UUFFbkUsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3RCLE1BQU0sWUFBWSxHQUFHLHlCQUF5QixDQUFDLEdBQUcsRUFBRSxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDeEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO1NBQzlFO1FBRUQsT0FBTztZQUNMLEdBQUc7WUFDSCxlQUFlO1lBQ2YsYUFBYSxFQUFFLFFBQVEsQ0FBQyxFQUFFLHdCQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsMENBQUUsYUFBYSxDQUFDLFFBQVEsSUFBQztZQUVoRixVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQ2hDLFVBQVUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxNQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtZQUN2RixDQUFDO1lBQ0QsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsRUFBRTtnQkFDakQsTUFBTSxjQUFjLEdBQUcsZUFBZSxDQUFDLFVBQVUsRUFBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDNUUsSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsR0FBRyxRQUFRLENBQUMsQ0FBQTtpQkFDOUQ7Z0JBQ0QsTUFBTSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFBO2dCQUU1QyxpRUFBaUU7Z0JBQ2pFLE1BQU0sWUFBWSxHQUFHLGVBQWUsYUFBZixlQUFlLGNBQWYsZUFBZSxHQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUNyRixNQUFNLE9BQU8sR0FDWCxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUM7b0JBQzdDLE9BQU87b0JBQ1AsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUNsRSxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRTtvQkFDakUsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTTtpQkFDMUIsQ0FBQyxDQUFBO2dCQUVGLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUMzQixDQUFDO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFyREQsZ0ZBcURDO0lBRUQ7Ozs7OztPQU1HO0lBQ1UsUUFBQSwrQkFBK0IsR0FBRyxDQUFDLGVBQWdDLEVBQUUsRUFBTSxFQUFFLEVBQUU7UUFDMUYsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQTtRQUM1RCxNQUFNLEdBQUcsR0FBRyxlQUFlLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQTtRQUVyQyxNQUFNLEtBQUssR0FBRztZQUNaLFVBQVU7WUFDVixjQUFjO1lBQ2QsdUJBQXVCO1lBQ3ZCLG9CQUFvQjtZQUNwQixrQ0FBa0M7WUFDbEMscUJBQXFCO1lBQ3JCLGNBQWM7WUFDZCxjQUFjO1lBQ2QsNEJBQTRCO1lBQzVCLHNCQUFzQjtZQUN0QixpQkFBaUI7WUFDakIsMkJBQTJCO1lBQzNCLDBCQUEwQjtZQUMxQix5QkFBeUI7WUFDekIsdUJBQXVCO1lBQ3ZCLHlCQUF5QjtZQUN6Qix3QkFBd0I7WUFDeEIsa0NBQWtDO1lBQ2xDLCtCQUErQjtZQUMvQixpQkFBaUI7WUFDakIsc0JBQXNCO1lBQ3RCLGlCQUFpQjtZQUNqQixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4Qiw4QkFBOEI7WUFDOUIsd0JBQXdCO1lBQ3hCLDZCQUE2QjtZQUM3QixnQ0FBZ0M7WUFDaEMsK0JBQStCO1lBQy9CLGlCQUFpQjtZQUNqQixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLHlCQUF5QjtZQUN6Qix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLGlCQUFpQjtZQUNqQixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsaUJBQWlCO1lBQ2pCLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsa0NBQWtDO1lBQ2xDLHdCQUF3QjtZQUN4Qix5QkFBeUI7WUFDekIsc0JBQXNCO1lBQ3RCLHVCQUF1QjtZQUN2QiwrQkFBK0I7WUFDL0Isd0JBQXdCO1lBQ3hCLGlCQUFpQjtZQUNqQixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLHdCQUF3QjtTQUN6QixDQUFBO1FBRUQsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMzQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNuRixNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUcsQ0FBQyxDQUFBO1FBRXBELE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBZSxFQUFFLEVBQUUsQ0FDakMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBO1FBRXJHLG1DQUFtQztRQUNuQyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDM0UsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsT0FBTyxDQUFDLENBQUE7WUFFbEMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFHLENBQUMsQ0FBQTtZQUM5QyxPQUFPLFFBQVEsQ0FBQTtRQUNqQixDQUFDLENBQUMsQ0FBQTtRQUVGLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUVsRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUMzRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUMxQyxDQUFDLENBQUE7SUFFRDs7O09BR0c7SUFDVSxRQUFBLCtCQUErQixHQUFHLENBQUMsZUFBZ0MsRUFBRSxFQUFnQyxFQUFFLEVBQUU7UUFDcEgsTUFBTSxRQUFRLEdBQUcsRUFBRSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDNUIsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRXhCLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDOUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7WUFDdkQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ3RELENBQUMsQ0FBQTtRQUVELE1BQU0sSUFBSSxHQUFHLHVDQUErQixDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUN2RSxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQTtRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNuQyxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQyxDQUFBO0lBRUQ7O09BRUc7SUFDVSxRQUFBLHFCQUFxQixHQUFHLENBQUMsR0FBd0IsRUFBRSxVQUFrQixFQUFRLEVBQUU7UUFDMUYsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzVCLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUV4QixNQUFNLElBQUksR0FBRyxVQUFVLEdBQVc7WUFDaEMsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFBO1lBQzFCLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQVk7Z0JBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDM0IsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDOUIsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO29CQUM5QixpQ0FBaUM7b0JBQ2pDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2lCQUNyQztxQkFBTTtvQkFDTCxlQUFlO29CQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQ25CO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFDRixPQUFPLE9BQU8sQ0FBQTtRQUNoQixDQUFDLENBQUE7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFakMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyQixNQUFNLE1BQU0sR0FBRyxzQkFBc0IsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUNuRSxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUM1QyxNQUFNLGVBQWUsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUV2QyxJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO2dCQUNsRCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFBO0lBRUQsOERBQThEO0lBQ2pELFFBQUEsMEJBQTBCLEdBQUcsQ0FBQyxHQUF3QixFQUFFLEVBQUUsQ0FDckUsNkJBQXFCLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDLENBQUE7SUFFbkQ7Ozs7Ozs7Ozs7O09BV0c7SUFDVSxRQUFBLHVCQUF1QixHQUFHLENBQ3JDLE9BQXdCLEVBQ3hCLE9BQWUsRUFDZixLQUFjLEVBQ2QsRUFBTSxFQUNOLFFBQXFDLEVBQ3JDLE9BQXNCLEVBQ3RCLE1BQTRCLEVBQzVCLEVBQUU7UUFDRixNQUFNLFNBQVMsR0FBRyxPQUFPLElBQUksS0FBSyxDQUFBO1FBQ2xDLE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxZQUFZLENBQUE7UUFDeEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUE7UUFDdkMsTUFBTSxLQUFLLEdBQUcsdUNBQStCLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzFELE1BQU0sTUFBTSxHQUFHLHdDQUF3QyxPQUFPLGtCQUFrQixDQUFBO1FBRWhGLFNBQVMsR0FBRyxDQUFDLEdBQVc7WUFDdEIsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtRQUN2RCxDQUFDO1FBRUQsU0FBUyxLQUFLLENBQUMsR0FBVztZQUN4QixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7UUFDM0QsQ0FBQztRQUVELHVFQUF1RTtRQUN2RSxTQUFTLFFBQVE7WUFDZixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDdEcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO1lBQ3hFLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUVELDBEQUEwRDtRQUMxRCxTQUFTLE1BQU07WUFDYixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLGdEQUFnRDtnQkFDaEQsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEVBQUU7b0JBQ3JFLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQzFCO1lBQ0gsQ0FBQyxDQUFDLENBQUE7WUFFRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2QsTUFBTSxRQUFRLEdBQUcsVUFBVSxPQUFPLElBQUksR0FBRyxFQUFFLENBQUE7Z0JBQzNDLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBRTNDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ1osNERBQTREO29CQUM1RCxPQUFPLFNBQVMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO3lCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7eUJBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDUixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDbkMsT0FBTyxDQUFDLENBQUE7b0JBQ1YsQ0FBQyxDQUFDLENBQUE7aUJBQ0w7cUJBQU07b0JBQ0wsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO2lCQUN2QztZQUNILENBQUMsQ0FBQyxDQUNILENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoQixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUMvQixNQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUMvQixLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDdkIsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBO1FBQ3RDLE9BQU8sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2pDLENBQUMsQ0FBQTtJQUVELHVHQUF1RztJQUV2RyxTQUFTLGNBQWMsQ0FBQyxVQUFrQjtRQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsVUFBVSx1QkFBdUIsQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFFRCxTQUFTLEtBQUssQ0FDWixJQUFZLEVBQ1osRUFBK0I7UUFFL0IsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUU7WUFDakIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUE7WUFFdkIsTUFBTSxRQUFRLEdBQUcsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQTtZQUN6RSxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBO1lBQzlCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUE7WUFFekIsT0FBTyxHQUFHLENBQUE7UUFDWixDQUFDLENBQUE7SUFDSCxDQUFDO0lBRUQsd0ZBQXdGO0lBQ3hGLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxFQUErQixFQUFtQixFQUFFO1FBQ2xGLHVDQUNLLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxLQUNqQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQ3JCLE1BQU0sRUFBRSxJQUFJLEVBQ1osZUFBZSxFQUFFLElBQUksRUFDckIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUM1Qix1QkFBdUIsRUFBRSxJQUFJLEVBQzdCLFlBQVksRUFBRSxJQUFJLEVBQ2xCLG1CQUFtQixFQUFFLElBQUksRUFDekIsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sSUFDakQ7SUFDSCxDQUFDLENBQUE7SUFFRCxpQ0FBaUM7SUFDakMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBRXpFOzs7T0FHRztJQUNILFNBQWdCLFlBQVksQ0FBQyxLQUEwQjtRQUNyRCxPQUFPO1lBQ0wsSUFBSSxFQUFFLEVBQUU7WUFDUixlQUFlLEVBQUUsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1lBQ3hELG9DQUFvQztZQUNwQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxFQUFFO2dCQUNwRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1lBQzFFLENBQUMsQ0FBQztZQUNGLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ2xDLFVBQVUsRUFBRSxLQUFLLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9GLG1CQUFtQixFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUc7WUFDOUIsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDeEIsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDO1lBQ2xFLGFBQWEsRUFBRSxLQUFLLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN2RyxRQUFRLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzRixXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJO1lBQ3pCLE9BQU8sRUFBRSxJQUFJO1lBQ2IseUJBQXlCLEVBQUUsSUFBSTtZQUMvQixLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztZQUNwQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQy9CLENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQXZCRCxvQ0F1QkM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBZ0Isb0JBQW9CLENBQUMsS0FBMEIsRUFBRSxXQUFtQjtRQUNsRixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTVCLE9BQU87WUFDTCxJQUFJLEVBQUUsRUFBRTtZQUNSLGVBQWUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUM7WUFDeEQsb0NBQW9DO1lBQ3BDLGVBQWUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLEVBQUU7Z0JBQ3BELE9BQU8sQ0FDTCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ2pFLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FDakQsQ0FBQTtZQUNILENBQUMsQ0FBQztZQUNGLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1lBQ2xDLFVBQVUsRUFBRSxLQUFLLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO29CQUFFLE9BQU8sSUFBSSxDQUFBO2dCQUVwQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQTtnQkFDL0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBRXJGLEtBQUssTUFBTSxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUU7b0JBQ3hDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQUUsT0FBTyxJQUFJLENBQUE7aUJBQ3pDO2dCQUNELE9BQU8sS0FBSyxDQUFBO1lBQ2QsQ0FBQyxDQUFDO1lBQ0YsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRztZQUM5QixjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUN4QixvQkFBb0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUM7WUFDbEUsYUFBYSxFQUFFLEtBQUssQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZHLFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO29CQUFFLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFFbkQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQy9DLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO2dCQUNyRixLQUFLLE1BQU0sUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFFO29CQUN4QyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO3dCQUFFLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtpQkFDckY7Z0JBRUQsT0FBTyxTQUFTLENBQUE7WUFDbEIsQ0FBQyxDQUFDO1lBQ0YsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSTtZQUN6QixPQUFPLEVBQUUsSUFBSTtZQUNiLHlCQUF5QixFQUFFLElBQUk7WUFDL0IsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDcEMsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFO2dCQUNoQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtZQUMvQixDQUFDO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFqREQsb0RBaURDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQWdCLHlCQUF5QixDQUFDLEdBQVcsRUFBRSxlQUFnQyxFQUFFLEVBQU07UUFDN0YsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUE7UUFDakQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxVQUFzQixFQUFFLEVBQUU7WUFDdEMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFBO1lBQ2hELE9BQU8sVUFBVSxDQUFBO1FBQ25CLENBQUMsQ0FBQTtRQU9ELE1BQU0sS0FBSyxHQUFXO1lBQ3BCLFlBQVksa0NBQ1AsR0FBRyxLQUNOLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUMxQyxxQkFBcUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQztnQkFDNUUsb0NBQW9DO2dCQUNwQyxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUN4QixVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFDN0IsYUFBYSxFQUFFLFFBQVEsQ0FBQyxFQUFFO29CQUN4QixPQUFPLENBQ0wsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7d0JBQ3pCLElBQUksQ0FDRixFQUFFLENBQUMsZ0JBQWdCLENBQ2pCLFFBQVEsRUFDUixHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBRSxFQUN2QixlQUFlLENBQUMsTUFBTSxJQUFJLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU8sRUFDNUQsS0FBSyxDQUNOLENBQ0YsQ0FDRixDQUFBO2dCQUNILENBQUMsRUFDRCx5QkFBeUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQy9EO1lBQ0QsVUFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFO2dCQUN2QixNQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDMUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDbkQsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFBO2dCQUNoRCxPQUFPLGFBQWEsQ0FBQTtZQUN0QixDQUFDO1NBQ0YsQ0FBQTtRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQTNDRCw4REEyQ0M7SUFFRDs7T0FFRztJQUNILFNBQWdCLGdDQUFnQyxDQUM5QyxHQUFXLEVBQ1gsU0FBbUIsRUFDbkIsZUFBZ0MsRUFDaEMsRUFBTSxFQUNOLGtCQUF1QztRQUV2QyxNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUE7UUFDaEMsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsR0FBRyx5QkFBeUIsQ0FBQyxHQUFHLEVBQUUsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3hGLE1BQU0sWUFBWSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFBO1FBQzlDLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQTtRQUN0QixNQUFNLG1CQUFtQixtQ0FDcEIsWUFBWSxLQUNmLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsRUFDbEQsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLENBQUMsZUFBZSxFQUM3QyxxQkFBcUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsRUFDL0Msa0JBQWtCLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUNuQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDNUIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDdkMsSUFBSSxRQUFRLEVBQUU7b0JBQ1osT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDOUM7Z0JBQ0QsT0FBTTtZQUNSLENBQUMsRUFDRCxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQTtZQUMxQyxDQUFDLEVBQ0QsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEdBQ3pCLENBQUE7UUFPRCxNQUFNLE1BQU0sR0FBVztZQUNyQixtQkFBbUI7WUFDbkIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxFQUFFO2dCQUN2QixjQUFjLEVBQUUsQ0FBQTtnQkFDaEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO2dCQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzVDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lCQUNwQztnQkFDRCxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDeEIsQ0FBQztTQUNGLENBQUE7UUFDRCxPQUFPLE1BQU0sQ0FBQTtJQUNmLENBQUM7SUEvQ0QsNEVBK0NDIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBTeXN0ZW0gPSBpbXBvcnQoXCJ0eXBlc2NyaXB0XCIpLlN5c3RlbVxudHlwZSBDb21waWxlck9wdGlvbnMgPSBpbXBvcnQoXCJ0eXBlc2NyaXB0XCIpLkNvbXBpbGVyT3B0aW9uc1xudHlwZSBDdXN0b21UcmFuc2Zvcm1lcnMgPSBpbXBvcnQoXCJ0eXBlc2NyaXB0XCIpLkN1c3RvbVRyYW5zZm9ybWVyc1xudHlwZSBMYW5ndWFnZVNlcnZpY2VIb3N0ID0gaW1wb3J0KFwidHlwZXNjcmlwdFwiKS5MYW5ndWFnZVNlcnZpY2VIb3N0XG50eXBlIENvbXBpbGVySG9zdCA9IGltcG9ydChcInR5cGVzY3JpcHRcIikuQ29tcGlsZXJIb3N0XG50eXBlIFNvdXJjZUZpbGUgPSBpbXBvcnQoXCJ0eXBlc2NyaXB0XCIpLlNvdXJjZUZpbGVcbnR5cGUgVFMgPSB0eXBlb2YgaW1wb3J0KFwidHlwZXNjcmlwdFwiKVxuXG5sZXQgaGFzTG9jYWxTdG9yYWdlID0gZmFsc2VcbnRyeSB7XG4gIGhhc0xvY2FsU3RvcmFnZSA9IHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09IGB1bmRlZmluZWRgXG59IGNhdGNoIChlcnJvcikge31cblxuY29uc3QgaGFzUHJvY2VzcyA9IHR5cGVvZiBwcm9jZXNzICE9PSBgdW5kZWZpbmVkYFxuY29uc3Qgc2hvdWxkRGVidWcgPSAoaGFzTG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiREVCVUdcIikpIHx8IChoYXNQcm9jZXNzICYmIHByb2Nlc3MuZW52LkRFQlVHKVxuY29uc3QgZGVidWdMb2cgPSBzaG91bGREZWJ1ZyA/IGNvbnNvbGUubG9nIDogKF9tZXNzYWdlPzogYW55LCAuLi5fb3B0aW9uYWxQYXJhbXM6IGFueVtdKSA9PiBcIlwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlydHVhbFR5cGVTY3JpcHRFbnZpcm9ubWVudCB7XG4gIHN5czogU3lzdGVtXG4gIGxhbmd1YWdlU2VydmljZTogaW1wb3J0KFwidHlwZXNjcmlwdFwiKS5MYW5ndWFnZVNlcnZpY2VcbiAgZ2V0U291cmNlRmlsZTogKGZpbGVOYW1lOiBzdHJpbmcpID0+IGltcG9ydChcInR5cGVzY3JpcHRcIikuU291cmNlRmlsZSB8IHVuZGVmaW5lZFxuICBjcmVhdGVGaWxlOiAoZmlsZU5hbWU6IHN0cmluZywgY29udGVudDogc3RyaW5nKSA9PiB2b2lkXG4gIHVwZGF0ZUZpbGU6IChmaWxlTmFtZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIHJlcGxhY2VUZXh0U3Bhbj86IGltcG9ydChcInR5cGVzY3JpcHRcIikuVGV4dFNwYW4pID0+IHZvaWRcbn1cblxuLyoqXG4gKiBNYWtlcyBhIHZpcnR1YWwgY29weSBvZiB0aGUgVHlwZVNjcmlwdCBlbnZpcm9ubWVudC4gVGhpcyBpcyB0aGUgbWFpbiBBUEkgeW91IHdhbnQgdG8gYmUgdXNpbmcgd2l0aFxuICogQHR5cGVzY3JpcHQvdmZzLiBBIGxvdCBvZiB0aGUgb3RoZXIgZXhwb3NlZCBmdW5jdGlvbnMgYXJlIHVzZWQgYnkgdGhpcyBmdW5jdGlvbiB0byBnZXQgc2V0IHVwLlxuICpcbiAqIEBwYXJhbSBzeXMgYW4gb2JqZWN0IHdoaWNoIGNvbmZvcm1zIHRvIHRoZSBUUyBTeXMgKGEgc2hpbSBvdmVyIHJlYWQvd3JpdGUgYWNjZXNzIHRvIHRoZSBmcylcbiAqIEBwYXJhbSByb290RmlsZXMgYSBsaXN0IG9mIGZpbGVzIHdoaWNoIGFyZSBjb25zaWRlcmVkIGluc2lkZSB0aGUgcHJvamVjdFxuICogQHBhcmFtIHRzIGEgY29weSBwZiB0aGUgVHlwZVNjcmlwdCBtb2R1bGVcbiAqIEBwYXJhbSBjb21waWxlck9wdGlvbnMgdGhlIG9wdGlvbnMgZm9yIHRoaXMgY29tcGlsZXIgcnVuXG4gKiBAcGFyYW0gY3VzdG9tVHJhbnNmb3JtZXJzIGN1c3RvbSB0cmFuc2Zvcm1lcnMgZm9yIHRoaXMgY29tcGlsZXIgcnVuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpcnR1YWxUeXBlU2NyaXB0RW52aXJvbm1lbnQoXG4gIHN5czogU3lzdGVtLFxuICByb290RmlsZXM6IHN0cmluZ1tdLFxuICB0czogVFMsXG4gIGNvbXBpbGVyT3B0aW9uczogQ29tcGlsZXJPcHRpb25zID0ge30sXG4gIGN1c3RvbVRyYW5zZm9ybWVycz86IEN1c3RvbVRyYW5zZm9ybWVyc1xuKTogVmlydHVhbFR5cGVTY3JpcHRFbnZpcm9ubWVudCB7XG4gIGNvbnN0IG1lcmdlZENvbXBpbGVyT3B0cyA9IHsgLi4uZGVmYXVsdENvbXBpbGVyT3B0aW9ucyh0cyksIC4uLmNvbXBpbGVyT3B0aW9ucyB9XG5cbiAgY29uc3QgeyBsYW5ndWFnZVNlcnZpY2VIb3N0LCB1cGRhdGVGaWxlIH0gPSBjcmVhdGVWaXJ0dWFsTGFuZ3VhZ2VTZXJ2aWNlSG9zdChcbiAgICBzeXMsXG4gICAgcm9vdEZpbGVzLFxuICAgIG1lcmdlZENvbXBpbGVyT3B0cyxcbiAgICB0cyxcbiAgICBjdXN0b21UcmFuc2Zvcm1lcnNcbiAgKVxuICBjb25zdCBsYW5ndWFnZVNlcnZpY2UgPSB0cy5jcmVhdGVMYW5ndWFnZVNlcnZpY2UobGFuZ3VhZ2VTZXJ2aWNlSG9zdClcbiAgY29uc3QgZGlhZ25vc3RpY3MgPSBsYW5ndWFnZVNlcnZpY2UuZ2V0Q29tcGlsZXJPcHRpb25zRGlhZ25vc3RpY3MoKVxuXG4gIGlmIChkaWFnbm9zdGljcy5sZW5ndGgpIHtcbiAgICBjb25zdCBjb21waWxlckhvc3QgPSBjcmVhdGVWaXJ0dWFsQ29tcGlsZXJIb3N0KHN5cywgY29tcGlsZXJPcHRpb25zLCB0cylcbiAgICB0aHJvdyBuZXcgRXJyb3IodHMuZm9ybWF0RGlhZ25vc3RpY3MoZGlhZ25vc3RpY3MsIGNvbXBpbGVySG9zdC5jb21waWxlckhvc3QpKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzeXMsXG4gICAgbGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIGdldFNvdXJjZUZpbGU6IGZpbGVOYW1lID0+IGxhbmd1YWdlU2VydmljZS5nZXRQcm9ncmFtKCk/LmdldFNvdXJjZUZpbGUoZmlsZU5hbWUpLFxuXG4gICAgY3JlYXRlRmlsZTogKGZpbGVOYW1lLCBjb250ZW50KSA9PiB7XG4gICAgICB1cGRhdGVGaWxlKHRzLmNyZWF0ZVNvdXJjZUZpbGUoZmlsZU5hbWUsIGNvbnRlbnQsIG1lcmdlZENvbXBpbGVyT3B0cy50YXJnZXQhLCBmYWxzZSkpXG4gICAgfSxcbiAgICB1cGRhdGVGaWxlOiAoZmlsZU5hbWUsIGNvbnRlbnQsIG9wdFByZXZUZXh0U3BhbikgPT4ge1xuICAgICAgY29uc3QgcHJldlNvdXJjZUZpbGUgPSBsYW5ndWFnZVNlcnZpY2UuZ2V0UHJvZ3JhbSgpIS5nZXRTb3VyY2VGaWxlKGZpbGVOYW1lKVxuICAgICAgaWYgKCFwcmV2U291cmNlRmlsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaWQgbm90IGZpbmQgYSBzb3VyY2UgZmlsZSBmb3IgXCIgKyBmaWxlTmFtZSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByZXZGdWxsQ29udGVudHMgPSBwcmV2U291cmNlRmlsZS50ZXh0XG5cbiAgICAgIC8vIFRPRE86IFZhbGlkYXRlIGlmIHRoZSBkZWZhdWx0IHRleHQgc3BhbiBoYXMgYSBmZW5jZXBvc3QgZXJyb3I/XG4gICAgICBjb25zdCBwcmV2VGV4dFNwYW4gPSBvcHRQcmV2VGV4dFNwYW4gPz8gdHMuY3JlYXRlVGV4dFNwYW4oMCwgcHJldkZ1bGxDb250ZW50cy5sZW5ndGgpXG4gICAgICBjb25zdCBuZXdUZXh0ID1cbiAgICAgICAgcHJldkZ1bGxDb250ZW50cy5zbGljZSgwLCBwcmV2VGV4dFNwYW4uc3RhcnQpICtcbiAgICAgICAgY29udGVudCArXG4gICAgICAgIHByZXZGdWxsQ29udGVudHMuc2xpY2UocHJldlRleHRTcGFuLnN0YXJ0ICsgcHJldlRleHRTcGFuLmxlbmd0aClcbiAgICAgIGNvbnN0IG5ld1NvdXJjZUZpbGUgPSB0cy51cGRhdGVTb3VyY2VGaWxlKHByZXZTb3VyY2VGaWxlLCBuZXdUZXh0LCB7XG4gICAgICAgIHNwYW46IHByZXZUZXh0U3BhbixcbiAgICAgICAgbmV3TGVuZ3RoOiBjb250ZW50Lmxlbmd0aCxcbiAgICAgIH0pXG5cbiAgICAgIHVwZGF0ZUZpbGUobmV3U291cmNlRmlsZSlcbiAgICB9LFxuICB9XG59XG5cbi8qKlxuICogR3JhYiB0aGUgbGlzdCBvZiBsaWIgZmlsZXMgZm9yIGEgcGFydGljdWxhciB0YXJnZXQsIHdpbGwgcmV0dXJuIGEgYml0IG1vcmUgdGhhbiBuZWNlc3NhcnkgKGJ5IGluY2x1ZGluZ1xuICogdGhlIGRvbSkgYnV0IHRoYXQncyBPS1xuICpcbiAqIEBwYXJhbSB0YXJnZXQgVGhlIGNvbXBpbGVyIHNldHRpbmdzIHRhcmdldCBiYXNlbGluZVxuICogQHBhcmFtIHRzIEEgY29weSBvZiB0aGUgVHlwZVNjcmlwdCBtb2R1bGVcbiAqL1xuZXhwb3J0IGNvbnN0IGtub3duTGliRmlsZXNGb3JDb21waWxlck9wdGlvbnMgPSAoY29tcGlsZXJPcHRpb25zOiBDb21waWxlck9wdGlvbnMsIHRzOiBUUykgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBjb21waWxlck9wdGlvbnMudGFyZ2V0IHx8IHRzLlNjcmlwdFRhcmdldC5FUzVcbiAgY29uc3QgbGliID0gY29tcGlsZXJPcHRpb25zLmxpYiB8fCBbXVxuXG4gIGNvbnN0IGZpbGVzID0gW1xuICAgIFwibGliLmQudHNcIixcbiAgICBcImxpYi5kb20uZC50c1wiLFxuICAgIFwibGliLmRvbS5pdGVyYWJsZS5kLnRzXCIsXG4gICAgXCJsaWIud2Vid29ya2VyLmQudHNcIixcbiAgICBcImxpYi53ZWJ3b3JrZXIuaW1wb3J0c2NyaXB0cy5kLnRzXCIsXG4gICAgXCJsaWIuc2NyaXB0aG9zdC5kLnRzXCIsXG4gICAgXCJsaWIuZXM1LmQudHNcIixcbiAgICBcImxpYi5lczYuZC50c1wiLFxuICAgIFwibGliLmVzMjAxNS5jb2xsZWN0aW9uLmQudHNcIixcbiAgICBcImxpYi5lczIwMTUuY29yZS5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE1LmQudHNcIixcbiAgICBcImxpYi5lczIwMTUuZ2VuZXJhdG9yLmQudHNcIixcbiAgICBcImxpYi5lczIwMTUuaXRlcmFibGUuZC50c1wiLFxuICAgIFwibGliLmVzMjAxNS5wcm9taXNlLmQudHNcIixcbiAgICBcImxpYi5lczIwMTUucHJveHkuZC50c1wiLFxuICAgIFwibGliLmVzMjAxNS5yZWZsZWN0LmQudHNcIixcbiAgICBcImxpYi5lczIwMTUuc3ltYm9sLmQudHNcIixcbiAgICBcImxpYi5lczIwMTUuc3ltYm9sLndlbGxrbm93bi5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE2LmFycmF5LmluY2x1ZGUuZC50c1wiLFxuICAgIFwibGliLmVzMjAxNi5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE2LmZ1bGwuZC50c1wiLFxuICAgIFwibGliLmVzMjAxNy5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE3LmZ1bGwuZC50c1wiLFxuICAgIFwibGliLmVzMjAxNy5pbnRsLmQudHNcIixcbiAgICBcImxpYi5lczIwMTcub2JqZWN0LmQudHNcIixcbiAgICBcImxpYi5lczIwMTcuc2hhcmVkbWVtb3J5LmQudHNcIixcbiAgICBcImxpYi5lczIwMTcuc3RyaW5nLmQudHNcIixcbiAgICBcImxpYi5lczIwMTcudHlwZWRhcnJheXMuZC50c1wiLFxuICAgIFwibGliLmVzMjAxOC5hc3luY2dlbmVyYXRvci5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE4LmFzeW5jaXRlcmFibGUuZC50c1wiLFxuICAgIFwibGliLmVzMjAxOC5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE4LmZ1bGwuZC50c1wiLFxuICAgIFwibGliLmVzMjAxOC5pbnRsLmQudHNcIixcbiAgICBcImxpYi5lczIwMTgucHJvbWlzZS5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE4LnJlZ2V4cC5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE5LmFycmF5LmQudHNcIixcbiAgICBcImxpYi5lczIwMTkuZC50c1wiLFxuICAgIFwibGliLmVzMjAxOS5mdWxsLmQudHNcIixcbiAgICBcImxpYi5lczIwMTkub2JqZWN0LmQudHNcIixcbiAgICBcImxpYi5lczIwMTkuc3RyaW5nLmQudHNcIixcbiAgICBcImxpYi5lczIwMTkuc3ltYm9sLmQudHNcIixcbiAgICBcImxpYi5lczIwMjAuZC50c1wiLFxuICAgIFwibGliLmVzMjAyMC5mdWxsLmQudHNcIixcbiAgICBcImxpYi5lczIwMjAuc3RyaW5nLmQudHNcIixcbiAgICBcImxpYi5lczIwMjAuc3ltYm9sLndlbGxrbm93bi5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDIwLmJpZ2ludC5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDIwLnByb21pc2UuZC50c1wiLFxuICAgIFwibGliLmVzMjAyMC5pbnRsLmQudHNcIixcbiAgICBcImxpYi5lc25leHQuYXJyYXkuZC50c1wiLFxuICAgIFwibGliLmVzbmV4dC5hc3luY2l0ZXJhYmxlLmQudHNcIixcbiAgICBcImxpYi5lc25leHQuYmlnaW50LmQudHNcIixcbiAgICBcImxpYi5lc25leHQuZC50c1wiLFxuICAgIFwibGliLmVzbmV4dC5mdWxsLmQudHNcIixcbiAgICBcImxpYi5lc25leHQuaW50bC5kLnRzXCIsXG4gICAgXCJsaWIuZXNuZXh0LnN5bWJvbC5kLnRzXCIsXG4gIF1cblxuICBjb25zdCB0YXJnZXRUb0N1dCA9IHRzLlNjcmlwdFRhcmdldFt0YXJnZXRdXG4gIGNvbnN0IG1hdGNoZXMgPSBmaWxlcy5maWx0ZXIoZiA9PiBmLnN0YXJ0c1dpdGgoYGxpYi4ke3RhcmdldFRvQ3V0LnRvTG93ZXJDYXNlKCl9YCkpXG4gIGNvbnN0IHRhcmdldEN1dEluZGV4ID0gZmlsZXMuaW5kZXhPZihtYXRjaGVzLnBvcCgpISlcblxuICBjb25zdCBnZXRNYXggPSAoYXJyYXk6IG51bWJlcltdKSA9PlxuICAgIGFycmF5ICYmIGFycmF5Lmxlbmd0aCA/IGFycmF5LnJlZHVjZSgobWF4LCBjdXJyZW50KSA9PiAoY3VycmVudCA+IG1heCA/IGN1cnJlbnQgOiBtYXgpKSA6IHVuZGVmaW5lZFxuXG4gIC8vIEZpbmQgdGhlIGluZGV4IGZvciBldmVyeXRoaW5nIGluXG4gIGNvbnN0IGluZGV4ZXNGb3JDdXR0aW5nID0gbGliLm1hcChsaWIgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBmaWxlcy5maWx0ZXIoZiA9PiBmLnN0YXJ0c1dpdGgoYGxpYi4ke2xpYi50b0xvd2VyQ2FzZSgpfWApKVxuICAgIGlmIChtYXRjaGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAgIGNvbnN0IGN1dEluZGV4ID0gZmlsZXMuaW5kZXhPZihtYXRjaGVzLnBvcCgpISlcbiAgICByZXR1cm4gY3V0SW5kZXhcbiAgfSlcblxuICBjb25zdCBsaWJDdXRJbmRleCA9IGdldE1heChpbmRleGVzRm9yQ3V0dGluZykgfHwgMFxuXG4gIGNvbnN0IGZpbmFsQ3V0SW5kZXggPSBNYXRoLm1heCh0YXJnZXRDdXRJbmRleCwgbGliQ3V0SW5kZXgpXG4gIHJldHVybiBmaWxlcy5zbGljZSgwLCBmaW5hbEN1dEluZGV4ICsgMSlcbn1cblxuLyoqXG4gKiBTZXRzIHVwIGEgTWFwIHdpdGggbGliIGNvbnRlbnRzIGJ5IGdyYWJiaW5nIHRoZSBuZWNlc3NhcnkgZmlsZXMgZnJvbVxuICogdGhlIGxvY2FsIGNvcHkgb2YgdHlwZXNjcmlwdCB2aWEgdGhlIGZpbGUgc3lzdGVtLlxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRGVmYXVsdE1hcEZyb21Ob2RlTW9kdWxlcyA9IChjb21waWxlck9wdGlvbnM6IENvbXBpbGVyT3B0aW9ucywgdHM/OiB0eXBlb2YgaW1wb3J0KFwidHlwZXNjcmlwdFwiKSkgPT4ge1xuICBjb25zdCB0c01vZHVsZSA9IHRzIHx8IHJlcXVpcmUoXCJ0eXBlc2NyaXB0XCIpXG4gIGNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKVxuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKVxuXG4gIGNvbnN0IGdldExpYiA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBsaWIgPSBwYXRoLmRpcm5hbWUocmVxdWlyZS5yZXNvbHZlKFwidHlwZXNjcmlwdFwiKSlcbiAgICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihsaWIsIG5hbWUpLCBcInV0ZjhcIilcbiAgfVxuXG4gIGNvbnN0IGxpYnMgPSBrbm93bkxpYkZpbGVzRm9yQ29tcGlsZXJPcHRpb25zKGNvbXBpbGVyT3B0aW9ucywgdHNNb2R1bGUpXG4gIGNvbnN0IGZzTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuICBsaWJzLmZvckVhY2gobGliID0+IHtcbiAgICBmc01hcC5zZXQoXCIvXCIgKyBsaWIsIGdldExpYihsaWIpKVxuICB9KVxuICByZXR1cm4gZnNNYXBcbn1cblxuLyoqXG4gKiBBZGRzIHJlY3Vyc2l2ZWx5IGZpbGVzIGZyb20gdGhlIEZTIGludG8gdGhlIG1hcCBiYXNlZCBvbiB0aGUgZm9sZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBhZGRBbGxGaWxlc0Zyb21Gb2xkZXIgPSAobWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+LCB3b3JraW5nRGlyOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpXG4gIGNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpXG5cbiAgY29uc3Qgd2FsayA9IGZ1bmN0aW9uIChkaXI6IHN0cmluZykge1xuICAgIGxldCByZXN1bHRzOiBzdHJpbmdbXSA9IFtdXG4gICAgY29uc3QgbGlzdCA9IGZzLnJlYWRkaXJTeW5jKGRpcilcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGZpbGU6IHN0cmluZykge1xuICAgICAgZmlsZSA9IHBhdGguam9pbihkaXIsIGZpbGUpXG4gICAgICBjb25zdCBzdGF0ID0gZnMuc3RhdFN5bmMoZmlsZSlcbiAgICAgIGlmIChzdGF0ICYmIHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAvKiBSZWN1cnNlIGludG8gYSBzdWJkaXJlY3RvcnkgKi9cbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KHdhbGsoZmlsZSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBJcyBhIGZpbGUgKi9cbiAgICAgICAgcmVzdWx0cy5wdXNoKGZpbGUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgY29uc3QgYWxsRmlsZXMgPSB3YWxrKHdvcmtpbmdEaXIpXG5cbiAgYWxsRmlsZXMuZm9yRWFjaChsaWIgPT4ge1xuICAgIGNvbnN0IGZzUGF0aCA9IFwiL25vZGVfbW9kdWxlcy9AdHlwZXNcIiArIGxpYi5yZXBsYWNlKHdvcmtpbmdEaXIsIFwiXCIpXG4gICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhsaWIsIFwidXRmOFwiKVxuICAgIGNvbnN0IHZhbGlkRXh0ZW5zaW9ucyA9IFtcIi50c1wiLCBcIi50c3hcIl1cblxuICAgIGlmICh2YWxpZEV4dGVuc2lvbnMuaW5jbHVkZXMocGF0aC5leHRuYW1lKGZzUGF0aCkpKSB7XG4gICAgICBtYXAuc2V0KGZzUGF0aCwgY29udGVudClcbiAgICB9XG4gIH0pXG59XG5cbi8qKiBBZGRzIGFsbCBmaWxlcyBmcm9tIG5vZGVfbW9kdWxlcy9AdHlwZXMgaW50byB0aGUgRlMgTWFwICovXG5leHBvcnQgY29uc3QgYWRkRmlsZXNGb3JUeXBlc0ludG9Gb2xkZXIgPSAobWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+KSA9PlxuICBhZGRBbGxGaWxlc0Zyb21Gb2xkZXIobWFwLCBcIm5vZGVfbW9kdWxlcy9AdHlwZXNcIilcblxuLyoqXG4gKiBDcmVhdGUgYSB2aXJ0dWFsIEZTIE1hcCB3aXRoIHRoZSBsaWIgZmlsZXMgZnJvbSBhIHBhcnRpY3VsYXIgVHlwZVNjcmlwdFxuICogdmVyc2lvbiBiYXNlZCBvbiB0aGUgdGFyZ2V0LCBBbHdheXMgaW5jbHVkZXMgZG9tIEFUTS5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyBUaGUgY29tcGlsZXIgdGFyZ2V0LCB3aGljaCBkaWN0YXRlcyB0aGUgbGlicyB0byBzZXQgdXBcbiAqIEBwYXJhbSB2ZXJzaW9uIHRoZSB2ZXJzaW9ucyBvZiBUeXBlU2NyaXB0IHdoaWNoIGFyZSBzdXBwb3J0ZWRcbiAqIEBwYXJhbSBjYWNoZSBzaG91bGQgdGhlIHZhbHVlcyBiZSBzdG9yZWQgaW4gbG9jYWwgc3RvcmFnZVxuICogQHBhcmFtIHRzIGEgY29weSBvZiB0aGUgdHlwZXNjcmlwdCBpbXBvcnRcbiAqIEBwYXJhbSBsenN0cmluZyBhbiBvcHRpb25hbCBjb3B5IG9mIHRoZSBsei1zdHJpbmcgaW1wb3J0XG4gKiBAcGFyYW0gZmV0Y2hlciBhbiBvcHRpb25hbCByZXBsYWNlbWVudCBmb3IgdGhlIGdsb2JhbCBmZXRjaCBmdW5jdGlvbiAodGVzdHMgbWFpbmx5KVxuICogQHBhcmFtIHN0b3JlciBhbiBvcHRpb25hbCByZXBsYWNlbWVudCBmb3IgdGhlIGxvY2FsU3RvcmFnZSBnbG9iYWwgKHRlc3RzIG1haW5seSlcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZURlZmF1bHRNYXBGcm9tQ0ROID0gKFxuICBvcHRpb25zOiBDb21waWxlck9wdGlvbnMsXG4gIHZlcnNpb246IHN0cmluZyxcbiAgY2FjaGU6IGJvb2xlYW4sXG4gIHRzOiBUUyxcbiAgbHpzdHJpbmc/OiB0eXBlb2YgaW1wb3J0KFwibHotc3RyaW5nXCIpLFxuICBmZXRjaGVyPzogdHlwZW9mIGZldGNoLFxuICBzdG9yZXI/OiB0eXBlb2YgbG9jYWxTdG9yYWdlXG4pID0+IHtcbiAgY29uc3QgZmV0Y2hsaWtlID0gZmV0Y2hlciB8fCBmZXRjaFxuICBjb25zdCBzdG9yZWxpa2UgPSBzdG9yZXIgfHwgbG9jYWxTdG9yYWdlXG4gIGNvbnN0IGZzTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuICBjb25zdCBmaWxlcyA9IGtub3duTGliRmlsZXNGb3JDb21waWxlck9wdGlvbnMob3B0aW9ucywgdHMpXG4gIGNvbnN0IHByZWZpeCA9IGBodHRwczovL3R5cGVzY3JpcHQuYXp1cmVlZGdlLm5ldC9jZG4vJHt2ZXJzaW9ufS90eXBlc2NyaXB0L2xpYi9gXG5cbiAgZnVuY3Rpb24gemlwKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGx6c3RyaW5nID8gbHpzdHJpbmcuY29tcHJlc3NUb1VURjE2KHN0cikgOiBzdHJcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuemlwKHN0cjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGx6c3RyaW5nID8gbHpzdHJpbmcuZGVjb21wcmVzc0Zyb21VVEYxNihzdHIpIDogc3RyXG4gIH1cblxuICAvLyBNYXAgdGhlIGtub3duIGxpYnMgdG8gYSBub2RlIGZldGNoIHByb21pc2UsIHRoZW4gcmV0dXJuIHRoZSBjb250ZW50c1xuICBmdW5jdGlvbiB1bmNhY2hlZCgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoZmlsZXMubWFwKGxpYiA9PiBmZXRjaGxpa2UocHJlZml4ICsgbGliKS50aGVuKHJlc3AgPT4gcmVzcC50ZXh0KCkpKSkudGhlbihjb250ZW50cyA9PiB7XG4gICAgICBjb250ZW50cy5mb3JFYWNoKCh0ZXh0LCBpbmRleCkgPT4gZnNNYXAuc2V0KFwiL1wiICsgZmlsZXNbaW5kZXhdLCB0ZXh0KSlcbiAgICB9KVxuICB9XG5cbiAgLy8gQSBsb2NhbHN0b3JhZ2UgYW5kIGx6emlwIGF3YXJlIHZlcnNpb24gb2YgdGhlIGxpYiBmaWxlc1xuICBmdW5jdGlvbiBjYWNoZWQoKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSlcbiAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIC8vIFJlbW92ZSBhbnl0aGluZyB3aGljaCBpc24ndCBmcm9tIHRoaXMgdmVyc2lvblxuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwidHMtbGliLVwiKSAmJiAha2V5LnN0YXJ0c1dpdGgoXCJ0cy1saWItXCIgKyB2ZXJzaW9uKSkge1xuICAgICAgICBzdG9yZWxpa2UucmVtb3ZlSXRlbShrZXkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgIGZpbGVzLm1hcChsaWIgPT4ge1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IGB0cy1saWItJHt2ZXJzaW9ufS0ke2xpYn1gXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzdG9yZWxpa2UuZ2V0SXRlbShjYWNoZUtleSlcblxuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAvLyBNYWtlIHRoZSBBUEkgY2FsbCBhbmQgc3RvcmUgdGhlIHRleHQgY29uY2VudCBpbiB0aGUgY2FjaGVcbiAgICAgICAgICByZXR1cm4gZmV0Y2hsaWtlKHByZWZpeCArIGxpYilcbiAgICAgICAgICAgIC50aGVuKHJlc3AgPT4gcmVzcC50ZXh0KCkpXG4gICAgICAgICAgICAudGhlbih0ID0+IHtcbiAgICAgICAgICAgICAgc3RvcmVsaWtlLnNldEl0ZW0oY2FjaGVLZXksIHppcCh0KSlcbiAgICAgICAgICAgICAgcmV0dXJuIHRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bnppcChjb250ZW50KSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApLnRoZW4oY29udGVudHMgPT4ge1xuICAgICAgY29udGVudHMuZm9yRWFjaCgodGV4dCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IFwiL1wiICsgZmlsZXNbaW5kZXhdXG4gICAgICAgIGZzTWFwLnNldChuYW1lLCB0ZXh0KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgZnVuYyA9IGNhY2hlID8gY2FjaGVkIDogdW5jYWNoZWRcbiAgcmV0dXJuIGZ1bmMoKS50aGVuKCgpID0+IGZzTWFwKVxufVxuXG4vLyBUT0RPOiBBZGQgc29tZSBraW5kIG9mIGRlYnVnIGxvZ2dlciAobmVlZHMgdG8gYmUgY29tcGF0IHdpdGggc2FuZGJveCdzIGRlcGxveW1lbnQsIG5vdCBqdXN0IHZpYSBucG0pXG5cbmZ1bmN0aW9uIG5vdEltcGxlbWVudGVkKG1ldGhvZE5hbWU6IHN0cmluZyk6IGFueSB7XG4gIHRocm93IG5ldyBFcnJvcihgTWV0aG9kICcke21ldGhvZE5hbWV9JyBpcyBub3QgaW1wbGVtZW50ZWQuYClcbn1cblxuZnVuY3Rpb24gYXVkaXQ8QXJnc1QgZXh0ZW5kcyBhbnlbXSwgUmV0dXJuVD4oXG4gIG5hbWU6IHN0cmluZyxcbiAgZm46ICguLi5hcmdzOiBBcmdzVCkgPT4gUmV0dXJuVFxuKTogKC4uLmFyZ3M6IEFyZ3NUKSA9PiBSZXR1cm5UIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmVzID0gZm4oLi4uYXJncylcblxuICAgIGNvbnN0IHNtYWxscmVzID0gdHlwZW9mIHJlcyA9PT0gXCJzdHJpbmdcIiA/IHJlcy5zbGljZSgwLCA4MCkgKyBcIi4uLlwiIDogcmVzXG4gICAgZGVidWdMb2coXCI+IFwiICsgbmFtZSwgLi4uYXJncylcbiAgICBkZWJ1Z0xvZyhcIjwgXCIgKyBzbWFsbHJlcylcblxuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG4vKiogVGhlIGRlZmF1bHQgY29tcGlsZXIgb3B0aW9ucyBpZiBUeXBlU2NyaXB0IGNvdWxkIGV2ZXIgY2hhbmdlIHRoZSBjb21waWxlciBvcHRpb25zICovXG5jb25zdCBkZWZhdWx0Q29tcGlsZXJPcHRpb25zID0gKHRzOiB0eXBlb2YgaW1wb3J0KFwidHlwZXNjcmlwdFwiKSk6IENvbXBpbGVyT3B0aW9ucyA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4udHMuZ2V0RGVmYXVsdENvbXBpbGVyT3B0aW9ucygpLFxuICAgIGpzeDogdHMuSnN4RW1pdC5SZWFjdCxcbiAgICBzdHJpY3Q6IHRydWUsXG4gICAgZXNNb2R1bGVJbnRlcm9wOiB0cnVlLFxuICAgIG1vZHVsZTogdHMuTW9kdWxlS2luZC5FU05leHQsXG4gICAgc3VwcHJlc3NPdXRwdXRQYXRoQ2hlY2s6IHRydWUsXG4gICAgc2tpcExpYkNoZWNrOiB0cnVlLFxuICAgIHNraXBEZWZhdWx0TGliQ2hlY2s6IHRydWUsXG4gICAgbW9kdWxlUmVzb2x1dGlvbjogdHMuTW9kdWxlUmVzb2x1dGlvbktpbmQuTm9kZUpzLFxuICB9XG59XG5cbi8vIFwiL0RPTS5kLnRzXCIgPT4gXCIvbGliLmRvbS5kLnRzXCJcbmNvbnN0IGxpYml6ZSA9IChwYXRoOiBzdHJpbmcpID0+IHBhdGgucmVwbGFjZShcIi9cIiwgXCIvbGliLlwiKS50b0xvd2VyQ2FzZSgpXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpbi1tZW1vcnkgU3lzdGVtIG9iamVjdCB3aGljaCBjYW4gYmUgdXNlZCBpbiBhIFR5cGVTY3JpcHQgcHJvZ3JhbSwgdGhpc1xuICogaXMgd2hhdCBwcm92aWRlcyByZWFkL3dyaXRlIGFzcGVjdHMgb2YgdGhlIHZpcnR1YWwgZnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN5c3RlbShmaWxlczogTWFwPHN0cmluZywgc3RyaW5nPik6IFN5c3RlbSB7XG4gIHJldHVybiB7XG4gICAgYXJnczogW10sXG4gICAgY3JlYXRlRGlyZWN0b3J5OiAoKSA9PiBub3RJbXBsZW1lbnRlZChcImNyZWF0ZURpcmVjdG9yeVwiKSxcbiAgICAvLyBUT0RPOiBjb3VsZCBtYWtlIGEgcmVhbCBmaWxlIHRyZWVcbiAgICBkaXJlY3RvcnlFeGlzdHM6IGF1ZGl0KFwiZGlyZWN0b3J5RXhpc3RzXCIsIGRpcmVjdG9yeSA9PiB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShmaWxlcy5rZXlzKCkpLnNvbWUocGF0aCA9PiBwYXRoLnN0YXJ0c1dpdGgoZGlyZWN0b3J5KSlcbiAgICB9KSxcbiAgICBleGl0OiAoKSA9PiBub3RJbXBsZW1lbnRlZChcImV4aXRcIiksXG4gICAgZmlsZUV4aXN0czogYXVkaXQoXCJmaWxlRXhpc3RzXCIsIGZpbGVOYW1lID0+IGZpbGVzLmhhcyhmaWxlTmFtZSkgfHwgZmlsZXMuaGFzKGxpYml6ZShmaWxlTmFtZSkpKSxcbiAgICBnZXRDdXJyZW50RGlyZWN0b3J5OiAoKSA9PiBcIi9cIixcbiAgICBnZXREaXJlY3RvcmllczogKCkgPT4gW10sXG4gICAgZ2V0RXhlY3V0aW5nRmlsZVBhdGg6ICgpID0+IG5vdEltcGxlbWVudGVkKFwiZ2V0RXhlY3V0aW5nRmlsZVBhdGhcIiksXG4gICAgcmVhZERpcmVjdG9yeTogYXVkaXQoXCJyZWFkRGlyZWN0b3J5XCIsIGRpcmVjdG9yeSA9PiAoZGlyZWN0b3J5ID09PSBcIi9cIiA/IEFycmF5LmZyb20oZmlsZXMua2V5cygpKSA6IFtdKSksXG4gICAgcmVhZEZpbGU6IGF1ZGl0KFwicmVhZEZpbGVcIiwgZmlsZU5hbWUgPT4gZmlsZXMuZ2V0KGZpbGVOYW1lKSB8fCBmaWxlcy5nZXQobGliaXplKGZpbGVOYW1lKSkpLFxuICAgIHJlc29sdmVQYXRoOiBwYXRoID0+IHBhdGgsXG4gICAgbmV3TGluZTogXCJcXG5cIixcbiAgICB1c2VDYXNlU2Vuc2l0aXZlRmlsZU5hbWVzOiB0cnVlLFxuICAgIHdyaXRlOiAoKSA9PiBub3RJbXBsZW1lbnRlZChcIndyaXRlXCIpLFxuICAgIHdyaXRlRmlsZTogKGZpbGVOYW1lLCBjb250ZW50cykgPT4ge1xuICAgICAgZmlsZXMuc2V0KGZpbGVOYW1lLCBjb250ZW50cylcbiAgICB9LFxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZpbGUtc3lzdGVtIGJhY2tlZCBTeXN0ZW0gb2JqZWN0IHdoaWNoIGNhbiBiZSB1c2VkIGluIGEgVHlwZVNjcmlwdCBwcm9ncmFtLCB5b3UgcHJvdmlkZVxuICogYSBzZXQgb2YgdmlydHVhbCBmaWxlcyB3aGljaCBhcmUgcHJpb3JpdGlzZWQgb3ZlciB0aGUgRlMgdmVyc2lvbnMsIHRoZW4gYSBwYXRoIHRvIHRoZSByb290IG9mIHlvdXJcbiAqIHByb2plY3QgKGJhc2ljYWxseSB0aGUgZm9sZGVyIHlvdXIgbm9kZV9tb2R1bGVzIGxpdmVzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRlNCYWNrZWRTeXN0ZW0oZmlsZXM6IE1hcDxzdHJpbmcsIHN0cmluZz4sIHByb2plY3RSb290OiBzdHJpbmcpOiBTeXN0ZW0ge1xuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKVxuICBjb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIilcblxuICByZXR1cm4ge1xuICAgIGFyZ3M6IFtdLFxuICAgIGNyZWF0ZURpcmVjdG9yeTogKCkgPT4gbm90SW1wbGVtZW50ZWQoXCJjcmVhdGVEaXJlY3RvcnlcIiksXG4gICAgLy8gVE9ETzogY291bGQgbWFrZSBhIHJlYWwgZmlsZSB0cmVlXG4gICAgZGlyZWN0b3J5RXhpc3RzOiBhdWRpdChcImRpcmVjdG9yeUV4aXN0c1wiLCBkaXJlY3RvcnkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgQXJyYXkuZnJvbShmaWxlcy5rZXlzKCkpLnNvbWUocGF0aCA9PiBwYXRoLnN0YXJ0c1dpdGgoZGlyZWN0b3J5KSkgfHxcbiAgICAgICAgZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4ocHJvamVjdFJvb3QsIGRpcmVjdG9yeSkpXG4gICAgICApXG4gICAgfSksXG4gICAgZXhpdDogKCkgPT4gbm90SW1wbGVtZW50ZWQoXCJleGl0XCIpLFxuICAgIGZpbGVFeGlzdHM6IGF1ZGl0KFwiZmlsZUV4aXN0c1wiLCBmaWxlTmFtZSA9PiB7XG4gICAgICBpZiAoZmlsZXMuaGFzKGZpbGVOYW1lKSkgcmV0dXJuIHRydWVcblxuICAgICAgY29uc3QgZnNQYXRoID0gcGF0aC5qb2luKHByb2plY3RSb290LCBmaWxlTmFtZSlcbiAgICAgIGNvbnN0IGxpYlBhdGggPSBwYXRoLmpvaW4ocHJvamVjdFJvb3QsIFwibm9kZV9tb2R1bGVzXCIsIFwidHlwZXNjcmlwdFwiLCBcImxpYlwiLCBmaWxlTmFtZSlcblxuICAgICAgZm9yIChjb25zdCBmaWxlcGF0aCBvZiBbZnNQYXRoLCBsaWJQYXRoXSkge1xuICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlcGF0aCkpIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KSxcbiAgICBnZXRDdXJyZW50RGlyZWN0b3J5OiAoKSA9PiBcIi9cIixcbiAgICBnZXREaXJlY3RvcmllczogKCkgPT4gW10sXG4gICAgZ2V0RXhlY3V0aW5nRmlsZVBhdGg6ICgpID0+IG5vdEltcGxlbWVudGVkKFwiZ2V0RXhlY3V0aW5nRmlsZVBhdGhcIiksXG4gICAgcmVhZERpcmVjdG9yeTogYXVkaXQoXCJyZWFkRGlyZWN0b3J5XCIsIGRpcmVjdG9yeSA9PiAoZGlyZWN0b3J5ID09PSBcIi9cIiA/IEFycmF5LmZyb20oZmlsZXMua2V5cygpKSA6IFtdKSksXG4gICAgcmVhZEZpbGU6IGF1ZGl0KFwicmVhZEZpbGVcIiwgZmlsZU5hbWUgPT4ge1xuICAgICAgaWYgKGZpbGVzLmhhcyhmaWxlTmFtZSkpIHJldHVybiBmaWxlcy5nZXQoZmlsZU5hbWUpXG5cbiAgICAgIGNvbnN0IGZzUGF0aCA9IHBhdGguam9pbihwcm9qZWN0Um9vdCwgZmlsZU5hbWUpXG4gICAgICBjb25zdCBsaWJQYXRoID0gcGF0aC5qb2luKHByb2plY3RSb290LCBcIm5vZGVfbW9kdWxlc1wiLCBcInR5cGVzY3JpcHRcIiwgXCJsaWJcIiwgZmlsZU5hbWUpXG4gICAgICBmb3IgKGNvbnN0IGZpbGVwYXRoIG9mIFtmc1BhdGgsIGxpYlBhdGhdKSB7XG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVwYXRoKSkgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhmaWxlcGF0aCwgeyBlbmNvZGluZzogXCJ1dGYtOFwiIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9KSxcbiAgICByZXNvbHZlUGF0aDogcGF0aCA9PiBwYXRoLFxuICAgIG5ld0xpbmU6IFwiXFxuXCIsXG4gICAgdXNlQ2FzZVNlbnNpdGl2ZUZpbGVOYW1lczogdHJ1ZSxcbiAgICB3cml0ZTogKCkgPT4gbm90SW1wbGVtZW50ZWQoXCJ3cml0ZVwiKSxcbiAgICB3cml0ZUZpbGU6IChmaWxlTmFtZSwgY29udGVudHMpID0+IHtcbiAgICAgIGZpbGVzLnNldChmaWxlTmFtZSwgY29udGVudHMpXG4gICAgfSxcbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaW4tbWVtb3J5IENvbXBpbGVySG9zdCAtd2hpY2ggaXMgZXNzZW50aWFsbHkgYW4gZXh0cmEgd3JhcHBlciB0byBTeXN0ZW1cbiAqIHdoaWNoIHdvcmtzIHdpdGggVHlwZVNjcmlwdCBvYmplY3RzIC0gcmV0dXJucyBib3RoIGEgY29tcGlsZXIgaG9zdCwgYW5kIGEgd2F5IHRvIGFkZCBuZXcgU291cmNlRmlsZVxuICogaW5zdGFuY2VzIHRvIHRoZSBpbi1tZW1vcnkgZmlsZSBzeXN0ZW0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaXJ0dWFsQ29tcGlsZXJIb3N0KHN5czogU3lzdGVtLCBjb21waWxlck9wdGlvbnM6IENvbXBpbGVyT3B0aW9ucywgdHM6IFRTKSB7XG4gIGNvbnN0IHNvdXJjZUZpbGVzID0gbmV3IE1hcDxzdHJpbmcsIFNvdXJjZUZpbGU+KClcbiAgY29uc3Qgc2F2ZSA9IChzb3VyY2VGaWxlOiBTb3VyY2VGaWxlKSA9PiB7XG4gICAgc291cmNlRmlsZXMuc2V0KHNvdXJjZUZpbGUuZmlsZU5hbWUsIHNvdXJjZUZpbGUpXG4gICAgcmV0dXJuIHNvdXJjZUZpbGVcbiAgfVxuXG4gIHR5cGUgUmV0dXJuID0ge1xuICAgIGNvbXBpbGVySG9zdDogQ29tcGlsZXJIb3N0XG4gICAgdXBkYXRlRmlsZTogKHNvdXJjZUZpbGU6IFNvdXJjZUZpbGUpID0+IGJvb2xlYW5cbiAgfVxuXG4gIGNvbnN0IHZIb3N0OiBSZXR1cm4gPSB7XG4gICAgY29tcGlsZXJIb3N0OiB7XG4gICAgICAuLi5zeXMsXG4gICAgICBnZXRDYW5vbmljYWxGaWxlTmFtZTogZmlsZU5hbWUgPT4gZmlsZU5hbWUsXG4gICAgICBnZXREZWZhdWx0TGliRmlsZU5hbWU6ICgpID0+IFwiL1wiICsgdHMuZ2V0RGVmYXVsdExpYkZpbGVOYW1lKGNvbXBpbGVyT3B0aW9ucyksIC8vICcvbGliLmQudHMnLFxuICAgICAgLy8gZ2V0RGVmYXVsdExpYkxvY2F0aW9uOiAoKSA9PiAnLycsXG4gICAgICBnZXREaXJlY3RvcmllczogKCkgPT4gW10sXG4gICAgICBnZXROZXdMaW5lOiAoKSA9PiBzeXMubmV3TGluZSxcbiAgICAgIGdldFNvdXJjZUZpbGU6IGZpbGVOYW1lID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBzb3VyY2VGaWxlcy5nZXQoZmlsZU5hbWUpIHx8XG4gICAgICAgICAgc2F2ZShcbiAgICAgICAgICAgIHRzLmNyZWF0ZVNvdXJjZUZpbGUoXG4gICAgICAgICAgICAgIGZpbGVOYW1lLFxuICAgICAgICAgICAgICBzeXMucmVhZEZpbGUoZmlsZU5hbWUpISxcbiAgICAgICAgICAgICAgY29tcGlsZXJPcHRpb25zLnRhcmdldCB8fCBkZWZhdWx0Q29tcGlsZXJPcHRpb25zKHRzKS50YXJnZXQhLFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIHVzZUNhc2VTZW5zaXRpdmVGaWxlTmFtZXM6ICgpID0+IHN5cy51c2VDYXNlU2Vuc2l0aXZlRmlsZU5hbWVzLFxuICAgIH0sXG4gICAgdXBkYXRlRmlsZTogc291cmNlRmlsZSA9PiB7XG4gICAgICBjb25zdCBhbHJlYWR5RXhpc3RzID0gc291cmNlRmlsZXMuaGFzKHNvdXJjZUZpbGUuZmlsZU5hbWUpXG4gICAgICBzeXMud3JpdGVGaWxlKHNvdXJjZUZpbGUuZmlsZU5hbWUsIHNvdXJjZUZpbGUudGV4dClcbiAgICAgIHNvdXJjZUZpbGVzLnNldChzb3VyY2VGaWxlLmZpbGVOYW1lLCBzb3VyY2VGaWxlKVxuICAgICAgcmV0dXJuIGFscmVhZHlFeGlzdHNcbiAgICB9LFxuICB9XG4gIHJldHVybiB2SG9zdFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHdoaWNoIGNhbiBob3N0IGEgbGFuZ3VhZ2Ugc2VydmljZSBhZ2FpbnN0IHRoZSB2aXJ0dWFsIGZpbGUtc3lzdGVtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaXJ0dWFsTGFuZ3VhZ2VTZXJ2aWNlSG9zdChcbiAgc3lzOiBTeXN0ZW0sXG4gIHJvb3RGaWxlczogc3RyaW5nW10sXG4gIGNvbXBpbGVyT3B0aW9uczogQ29tcGlsZXJPcHRpb25zLFxuICB0czogVFMsXG4gIGN1c3RvbVRyYW5zZm9ybWVycz86IEN1c3RvbVRyYW5zZm9ybWVyc1xuKSB7XG4gIGNvbnN0IGZpbGVOYW1lcyA9IFsuLi5yb290RmlsZXNdXG4gIGNvbnN0IHsgY29tcGlsZXJIb3N0LCB1cGRhdGVGaWxlIH0gPSBjcmVhdGVWaXJ0dWFsQ29tcGlsZXJIb3N0KHN5cywgY29tcGlsZXJPcHRpb25zLCB0cylcbiAgY29uc3QgZmlsZVZlcnNpb25zID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuICBsZXQgcHJvamVjdFZlcnNpb24gPSAwXG4gIGNvbnN0IGxhbmd1YWdlU2VydmljZUhvc3Q6IExhbmd1YWdlU2VydmljZUhvc3QgPSB7XG4gICAgLi4uY29tcGlsZXJIb3N0LFxuICAgIGdldFByb2plY3RWZXJzaW9uOiAoKSA9PiBwcm9qZWN0VmVyc2lvbi50b1N0cmluZygpLFxuICAgIGdldENvbXBpbGF0aW9uU2V0dGluZ3M6ICgpID0+IGNvbXBpbGVyT3B0aW9ucyxcbiAgICBnZXRDdXN0b21UcmFuc2Zvcm1lcnM6ICgpID0+IGN1c3RvbVRyYW5zZm9ybWVycyxcbiAgICBnZXRTY3JpcHRGaWxlTmFtZXM6ICgpID0+IGZpbGVOYW1lcyxcbiAgICBnZXRTY3JpcHRTbmFwc2hvdDogZmlsZU5hbWUgPT4ge1xuICAgICAgY29uc3QgY29udGVudHMgPSBzeXMucmVhZEZpbGUoZmlsZU5hbWUpXG4gICAgICBpZiAoY29udGVudHMpIHtcbiAgICAgICAgcmV0dXJuIHRzLlNjcmlwdFNuYXBzaG90LmZyb21TdHJpbmcoY29udGVudHMpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9LFxuICAgIGdldFNjcmlwdFZlcnNpb246IGZpbGVOYW1lID0+IHtcbiAgICAgIHJldHVybiBmaWxlVmVyc2lvbnMuZ2V0KGZpbGVOYW1lKSB8fCBcIjBcIlxuICAgIH0sXG4gICAgd3JpdGVGaWxlOiBzeXMud3JpdGVGaWxlLFxuICB9XG5cbiAgdHlwZSBSZXR1cm4gPSB7XG4gICAgbGFuZ3VhZ2VTZXJ2aWNlSG9zdDogTGFuZ3VhZ2VTZXJ2aWNlSG9zdFxuICAgIHVwZGF0ZUZpbGU6IChzb3VyY2VGaWxlOiBpbXBvcnQoXCJ0eXBlc2NyaXB0XCIpLlNvdXJjZUZpbGUpID0+IHZvaWRcbiAgfVxuXG4gIGNvbnN0IGxzSG9zdDogUmV0dXJuID0ge1xuICAgIGxhbmd1YWdlU2VydmljZUhvc3QsXG4gICAgdXBkYXRlRmlsZTogc291cmNlRmlsZSA9PiB7XG4gICAgICBwcm9qZWN0VmVyc2lvbisrXG4gICAgICBmaWxlVmVyc2lvbnMuc2V0KHNvdXJjZUZpbGUuZmlsZU5hbWUsIHByb2plY3RWZXJzaW9uLnRvU3RyaW5nKCkpXG4gICAgICBpZiAoIWZpbGVOYW1lcy5pbmNsdWRlcyhzb3VyY2VGaWxlLmZpbGVOYW1lKSkge1xuICAgICAgICBmaWxlTmFtZXMucHVzaChzb3VyY2VGaWxlLmZpbGVOYW1lKVxuICAgICAgfVxuICAgICAgdXBkYXRlRmlsZShzb3VyY2VGaWxlKVxuICAgIH0sXG4gIH1cbiAgcmV0dXJuIGxzSG9zdFxufVxuIl19