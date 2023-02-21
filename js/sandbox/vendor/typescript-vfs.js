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
            // @ts-ignore
            name: "vfs",
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
    const knownLibFilesForCompilerOptions = (compilerOptions, ts) => {
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
            "lib.es2020.sharedmemory.d.ts",
            "lib.es2020.intl.d.ts",
            "lib.es2021.d.ts",
            "lib.es2021.full.d.ts",
            "lib.es2021.promise.d.ts",
            "lib.es2021.string.d.ts",
            "lib.es2021.weakref.d.ts",
            "lib.esnext.d.ts",
            "lib.esnext.full.d.ts",
            "lib.esnext.intl.d.ts",
            "lib.esnext.promise.d.ts",
            "lib.esnext.string.d.ts",
            "lib.esnext.weakref.d.ts",
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
    exports.knownLibFilesForCompilerOptions = knownLibFilesForCompilerOptions;
    /**
     * Sets up a Map with lib contents by grabbing the necessary files from
     * the local copy of typescript via the file system.
     */
    const createDefaultMapFromNodeModules = (compilerOptions, ts, tsLibDirectory) => {
        const tsModule = ts || require("typescript");
        const path = requirePath();
        const fs = requireFS();
        const getLib = (name) => {
            const lib = tsLibDirectory || path.dirname(require.resolve("typescript"));
            return fs.readFileSync(path.join(lib, name), "utf8");
        };
        const libs = (0, exports.knownLibFilesForCompilerOptions)(compilerOptions, tsModule);
        const fsMap = new Map();
        libs.forEach(lib => {
            fsMap.set("/" + lib, getLib(lib));
        });
        return fsMap;
    };
    exports.createDefaultMapFromNodeModules = createDefaultMapFromNodeModules;
    /**
     * Adds recursively files from the FS into the map based on the folder
     */
    const addAllFilesFromFolder = (map, workingDir) => {
        const path = requirePath();
        const fs = requireFS();
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
    exports.addAllFilesFromFolder = addAllFilesFromFolder;
    /** Adds all files from node_modules/@types into the FS Map */
    const addFilesForTypesIntoFolder = (map) => (0, exports.addAllFilesFromFolder)(map, "node_modules/@types");
    exports.addFilesForTypesIntoFolder = addFilesForTypesIntoFolder;
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
    const createDefaultMapFromCDN = (options, version, cache, ts, lzstring, fetcher, storer) => {
        const fetchlike = fetcher || fetch;
        const fsMap = new Map();
        const files = (0, exports.knownLibFilesForCompilerOptions)(options, ts);
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
            const storelike = storer || localStorage;
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
    exports.createDefaultMapFromCDN = createDefaultMapFromCDN;
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
    function createFSBackedSystem(files, _projectRoot, ts, tsLibDirectory) {
        // We need to make an isolated folder for the tsconfig, but also need to be able to resolve the
        // existing node_modules structures going back through the history
        const root = _projectRoot + "/vfs";
        const path = requirePath();
        // The default System in TypeScript
        const nodeSys = ts.sys;
        const tsLib = tsLibDirectory !== null && tsLibDirectory !== void 0 ? tsLibDirectory : path.dirname(require.resolve("typescript"));
        return {
            // @ts-ignore
            name: "fs-vfs",
            root,
            args: [],
            createDirectory: () => notImplemented("createDirectory"),
            // TODO: could make a real file tree
            directoryExists: audit("directoryExists", directory => {
                return Array.from(files.keys()).some(path => path.startsWith(directory)) || nodeSys.directoryExists(directory);
            }),
            exit: nodeSys.exit,
            fileExists: audit("fileExists", fileName => {
                if (files.has(fileName))
                    return true;
                // Don't let other tsconfigs end up touching the vfs
                if (fileName.includes("tsconfig.json") || fileName.includes("tsconfig.json"))
                    return false;
                if (fileName.startsWith("/lib")) {
                    const tsLibName = `${tsLib}/${fileName.replace("/", "")}`;
                    return nodeSys.fileExists(tsLibName);
                }
                return nodeSys.fileExists(fileName);
            }),
            getCurrentDirectory: () => root,
            getDirectories: nodeSys.getDirectories,
            getExecutingFilePath: () => notImplemented("getExecutingFilePath"),
            readDirectory: audit("readDirectory", (...args) => {
                if (args[0] === "/") {
                    return Array.from(files.keys());
                }
                else {
                    return nodeSys.readDirectory(...args);
                }
            }),
            readFile: audit("readFile", fileName => {
                if (files.has(fileName))
                    return files.get(fileName);
                if (fileName.startsWith("/lib")) {
                    const tsLibName = `${tsLib}/${fileName.replace("/", "")}`;
                    const result = nodeSys.readFile(tsLibName);
                    if (!result) {
                        const libs = nodeSys.readDirectory(tsLib);
                        throw new Error(`TSVFS: A request was made for ${tsLibName} but there wasn't a file found in the file map. You likely have a mismatch in the compiler options for the CDN download vs the compiler program. Existing Libs: ${libs}.`);
                    }
                    return result;
                }
                return nodeSys.readFile(fileName);
            }),
            resolvePath: path => {
                if (files.has(path))
                    return path;
                return nodeSys.resolvePath(path);
            },
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
        const languageServiceHost = Object.assign(Object.assign({}, compilerHost), { getProjectVersion: () => projectVersion.toString(), getCompilationSettings: () => compilerOptions, getCustomTransformers: () => customTransformers, 
            // A couple weeks of 4.8 TypeScript nightlies had a bug where the Program's
            // list of files was just a reference to the array returned by this host method,
            // which means mutations by the host that ought to result in a new Program being
            // created were not detected, since the old list of files and the new list of files
            // were in fact a reference to the same underlying array. That was fixed in
            // https://github.com/microsoft/TypeScript/pull/49813, but since the twoslash runner
            // is used in bisecting for changes, it needs to guard against being busted in that
            // couple-week period, so we defensively make a slice here.
            getScriptFileNames: () => fileNames.slice(), getScriptSnapshot: fileName => {
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
    const requirePath = () => {
        return require(String.fromCharCode(112, 97, 116, 104));
    };
    const requireFS = () => {
        return require(String.fromCharCode(102, 115));
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXNjcmlwdC12ZnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zYW5kYm94L3NyYy92ZW5kb3IvdHlwZXNjcmlwdC12ZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQVFBLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQTtJQUMzQixJQUFJO1FBQ0YsZUFBZSxHQUFHLE9BQU8sWUFBWSxLQUFLLFdBQVcsQ0FBQTtLQUN0RDtJQUFDLE9BQU8sS0FBSyxFQUFFLEdBQUc7SUFFbkIsTUFBTSxVQUFVLEdBQUcsT0FBTyxPQUFPLEtBQUssV0FBVyxDQUFBO0lBQ2pELE1BQU0sV0FBVyxHQUFHLENBQUMsZUFBZSxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNHLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFjLEVBQUUsR0FBRyxlQUFzQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUE7SUFVOUY7Ozs7Ozs7OztPQVNHO0lBRUgsU0FBZ0Isa0NBQWtDLENBQ2hELEdBQVcsRUFDWCxTQUFtQixFQUNuQixFQUFNLEVBQ04sa0JBQW1DLEVBQUUsRUFDckMsa0JBQXVDO1FBRXZDLE1BQU0sa0JBQWtCLG1DQUFRLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxHQUFLLGVBQWUsQ0FBRSxDQUFBO1FBRWhGLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsR0FBRyxnQ0FBZ0MsQ0FDMUUsR0FBRyxFQUNILFNBQVMsRUFDVCxrQkFBa0IsRUFDbEIsRUFBRSxFQUNGLGtCQUFrQixDQUNuQixDQUFBO1FBQ0QsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFD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USxDQUFDLEVBQUU7Z0JBQzNCLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUE7WUFDMUMsQ0FBQyxFQUNELFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUyxHQUN6QixDQUFBO1FBT0QsTUFBTSxNQUFNLEdBQVc7WUFDckIsbUJBQW1CO1lBQ25CLFVBQVUsRUFBRSxVQUFVLENBQUMsRUFBRTtnQkFDdkIsY0FBYyxFQUFFLENBQUE7Z0JBQ2hCLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtnQkFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUM1QyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDcEM7Z0JBQ0QsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3hCLENBQUM7U0FDRixDQUFBO1FBQ0QsT0FBTyxNQUFNLENBQUE7SUFDZixDQUFDO0lBdkRELDRFQXVEQztJQUVELE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtRQUN2QixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUEwQixDQUFBO0lBQ2pGLENBQUMsQ0FBQTtJQUVELE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUNyQixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBd0IsQ0FBQTtJQUN0RSxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFN5c3RlbSA9IGltcG9ydChcInR5cGVzY3JpcHRcIikuU3lzdGVtXG50eXBlIENvbXBpbGVyT3B0aW9ucyA9IGltcG9ydChcInR5cGVzY3JpcHRcIikuQ29tcGlsZXJPcHRpb25zXG50eXBlIEN1c3RvbVRyYW5zZm9ybWVycyA9IGltcG9ydChcInR5cGVzY3JpcHRcIikuQ3VzdG9tVHJhbnNmb3JtZXJzXG50eXBlIExhbmd1YWdlU2VydmljZUhvc3QgPSBpbXBvcnQoXCJ0eXBlc2NyaXB0XCIpLkxhbmd1YWdlU2VydmljZUhvc3RcbnR5cGUgQ29tcGlsZXJIb3N0ID0gaW1wb3J0KFwidHlwZXNjcmlwdFwiKS5Db21waWxlckhvc3RcbnR5cGUgU291cmNlRmlsZSA9IGltcG9ydChcInR5cGVzY3JpcHRcIikuU291cmNlRmlsZVxudHlwZSBUUyA9IHR5cGVvZiBpbXBvcnQoXCJ0eXBlc2NyaXB0XCIpXG5cbmxldCBoYXNMb2NhbFN0b3JhZ2UgPSBmYWxzZVxudHJ5IHtcbiAgaGFzTG9jYWxTdG9yYWdlID0gdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gYHVuZGVmaW5lZGBcbn0gY2F0Y2ggKGVycm9yKSB7IH1cblxuY29uc3QgaGFzUHJvY2VzcyA9IHR5cGVvZiBwcm9jZXNzICE9PSBgdW5kZWZpbmVkYFxuY29uc3Qgc2hvdWxkRGVidWcgPSAoaGFzTG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiREVCVUdcIikpIHx8IChoYXNQcm9jZXNzICYmIHByb2Nlc3MuZW52LkRFQlVHKVxuY29uc3QgZGVidWdMb2cgPSBzaG91bGREZWJ1ZyA/IGNvbnNvbGUubG9nIDogKF9tZXNzYWdlPzogYW55LCAuLi5fb3B0aW9uYWxQYXJhbXM6IGFueVtdKSA9PiBcIlwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlydHVhbFR5cGVTY3JpcHRFbnZpcm9ubWVudCB7XG4gIHN5czogU3lzdGVtXG4gIGxhbmd1YWdlU2VydmljZTogaW1wb3J0KFwidHlwZXNjcmlwdFwiKS5MYW5ndWFnZVNlcnZpY2VcbiAgZ2V0U291cmNlRmlsZTogKGZpbGVOYW1lOiBzdHJpbmcpID0+IGltcG9ydChcInR5cGVzY3JpcHRcIikuU291cmNlRmlsZSB8IHVuZGVmaW5lZFxuICBjcmVhdGVGaWxlOiAoZmlsZU5hbWU6IHN0cmluZywgY29udGVudDogc3RyaW5nKSA9PiB2b2lkXG4gIHVwZGF0ZUZpbGU6IChmaWxlTmFtZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIHJlcGxhY2VUZXh0U3Bhbj86IGltcG9ydChcInR5cGVzY3JpcHRcIikuVGV4dFNwYW4pID0+IHZvaWRcbn1cblxuLyoqXG4gKiBNYWtlcyBhIHZpcnR1YWwgY29weSBvZiB0aGUgVHlwZVNjcmlwdCBlbnZpcm9ubWVudC4gVGhpcyBpcyB0aGUgbWFpbiBBUEkgeW91IHdhbnQgdG8gYmUgdXNpbmcgd2l0aFxuICogQHR5cGVzY3JpcHQvdmZzLiBBIGxvdCBvZiB0aGUgb3RoZXIgZXhwb3NlZCBmdW5jdGlvbnMgYXJlIHVzZWQgYnkgdGhpcyBmdW5jdGlvbiB0byBnZXQgc2V0IHVwLlxuICpcbiAqIEBwYXJhbSBzeXMgYW4gb2JqZWN0IHdoaWNoIGNvbmZvcm1zIHRvIHRoZSBUUyBTeXMgKGEgc2hpbSBvdmVyIHJlYWQvd3JpdGUgYWNjZXNzIHRvIHRoZSBmcylcbiAqIEBwYXJhbSByb290RmlsZXMgYSBsaXN0IG9mIGZpbGVzIHdoaWNoIGFyZSBjb25zaWRlcmVkIGluc2lkZSB0aGUgcHJvamVjdFxuICogQHBhcmFtIHRzIGEgY29weSBwZiB0aGUgVHlwZVNjcmlwdCBtb2R1bGVcbiAqIEBwYXJhbSBjb21waWxlck9wdGlvbnMgdGhlIG9wdGlvbnMgZm9yIHRoaXMgY29tcGlsZXIgcnVuXG4gKiBAcGFyYW0gY3VzdG9tVHJhbnNmb3JtZXJzIGN1c3RvbSB0cmFuc2Zvcm1lcnMgZm9yIHRoaXMgY29tcGlsZXIgcnVuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpcnR1YWxUeXBlU2NyaXB0RW52aXJvbm1lbnQoXG4gIHN5czogU3lzdGVtLFxuICByb290RmlsZXM6IHN0cmluZ1tdLFxuICB0czogVFMsXG4gIGNvbXBpbGVyT3B0aW9uczogQ29tcGlsZXJPcHRpb25zID0ge30sXG4gIGN1c3RvbVRyYW5zZm9ybWVycz86IEN1c3RvbVRyYW5zZm9ybWVyc1xuKTogVmlydHVhbFR5cGVTY3JpcHRFbnZpcm9ubWVudCB7XG4gIGNvbnN0IG1lcmdlZENvbXBpbGVyT3B0cyA9IHsgLi4uZGVmYXVsdENvbXBpbGVyT3B0aW9ucyh0cyksIC4uLmNvbXBpbGVyT3B0aW9ucyB9XG5cbiAgY29uc3QgeyBsYW5ndWFnZVNlcnZpY2VIb3N0LCB1cGRhdGVGaWxlIH0gPSBjcmVhdGVWaXJ0dWFsTGFuZ3VhZ2VTZXJ2aWNlSG9zdChcbiAgICBzeXMsXG4gICAgcm9vdEZpbGVzLFxuICAgIG1lcmdlZENvbXBpbGVyT3B0cyxcbiAgICB0cyxcbiAgICBjdXN0b21UcmFuc2Zvcm1lcnNcbiAgKVxuICBjb25zdCBsYW5ndWFnZVNlcnZpY2UgPSB0cy5jcmVhdGVMYW5ndWFnZVNlcnZpY2UobGFuZ3VhZ2VTZXJ2aWNlSG9zdClcbiAgY29uc3QgZGlhZ25vc3RpY3MgPSBsYW5ndWFnZVNlcnZpY2UuZ2V0Q29tcGlsZXJPcHRpb25zRGlhZ25vc3RpY3MoKVxuXG4gIGlmIChkaWFnbm9zdGljcy5sZW5ndGgpIHtcbiAgICBjb25zdCBjb21waWxlckhvc3QgPSBjcmVhdGVWaXJ0dWFsQ29tcGlsZXJIb3N0KHN5cywgY29tcGlsZXJPcHRpb25zLCB0cylcbiAgICB0aHJvdyBuZXcgRXJyb3IodHMuZm9ybWF0RGlhZ25vc3RpY3MoZGlhZ25vc3RpY3MsIGNvbXBpbGVySG9zdC5jb21waWxlckhvc3QpKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgbmFtZTogXCJ2ZnNcIixcbiAgICBzeXMsXG4gICAgbGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIGdldFNvdXJjZUZpbGU6IGZpbGVOYW1lID0+IGxhbmd1YWdlU2VydmljZS5nZXRQcm9ncmFtKCk/LmdldFNvdXJjZUZpbGUoZmlsZU5hbWUpLFxuXG4gICAgY3JlYXRlRmlsZTogKGZpbGVOYW1lLCBjb250ZW50KSA9PiB7XG4gICAgICB1cGRhdGVGaWxlKHRzLmNyZWF0ZVNvdXJjZUZpbGUoZmlsZU5hbWUsIGNvbnRlbnQsIG1lcmdlZENvbXBpbGVyT3B0cy50YXJnZXQhLCBmYWxzZSkpXG4gICAgfSxcbiAgICB1cGRhdGVGaWxlOiAoZmlsZU5hbWUsIGNvbnRlbnQsIG9wdFByZXZUZXh0U3BhbikgPT4ge1xuICAgICAgY29uc3QgcHJldlNvdXJjZUZpbGUgPSBsYW5ndWFnZVNlcnZpY2UuZ2V0UHJvZ3JhbSgpIS5nZXRTb3VyY2VGaWxlKGZpbGVOYW1lKVxuICAgICAgaWYgKCFwcmV2U291cmNlRmlsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaWQgbm90IGZpbmQgYSBzb3VyY2UgZmlsZSBmb3IgXCIgKyBmaWxlTmFtZSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByZXZGdWxsQ29udGVudHMgPSBwcmV2U291cmNlRmlsZS50ZXh0XG5cbiAgICAgIC8vIFRPRE86IFZhbGlkYXRlIGlmIHRoZSBkZWZhdWx0IHRleHQgc3BhbiBoYXMgYSBmZW5jZXBvc3QgZXJyb3I/XG4gICAgICBjb25zdCBwcmV2VGV4dFNwYW4gPSBvcHRQcmV2VGV4dFNwYW4gPz8gdHMuY3JlYXRlVGV4dFNwYW4oMCwgcHJldkZ1bGxDb250ZW50cy5sZW5ndGgpXG4gICAgICBjb25zdCBuZXdUZXh0ID1cbiAgICAgICAgcHJldkZ1bGxDb250ZW50cy5zbGljZSgwLCBwcmV2VGV4dFNwYW4uc3RhcnQpICtcbiAgICAgICAgY29udGVudCArXG4gICAgICAgIHByZXZGdWxsQ29udGVudHMuc2xpY2UocHJldlRleHRTcGFuLnN0YXJ0ICsgcHJldlRleHRTcGFuLmxlbmd0aClcbiAgICAgIGNvbnN0IG5ld1NvdXJjZUZpbGUgPSB0cy51cGRhdGVTb3VyY2VGaWxlKHByZXZTb3VyY2VGaWxlLCBuZXdUZXh0LCB7XG4gICAgICAgIHNwYW46IHByZXZUZXh0U3BhbixcbiAgICAgICAgbmV3TGVuZ3RoOiBjb250ZW50Lmxlbmd0aCxcbiAgICAgIH0pXG5cbiAgICAgIHVwZGF0ZUZpbGUobmV3U291cmNlRmlsZSlcbiAgICB9LFxuICB9XG59XG5cbi8qKlxuICogR3JhYiB0aGUgbGlzdCBvZiBsaWIgZmlsZXMgZm9yIGEgcGFydGljdWxhciB0YXJnZXQsIHdpbGwgcmV0dXJuIGEgYml0IG1vcmUgdGhhbiBuZWNlc3NhcnkgKGJ5IGluY2x1ZGluZ1xuICogdGhlIGRvbSkgYnV0IHRoYXQncyBPS1xuICpcbiAqIEBwYXJhbSB0YXJnZXQgVGhlIGNvbXBpbGVyIHNldHRpbmdzIHRhcmdldCBiYXNlbGluZVxuICogQHBhcmFtIHRzIEEgY29weSBvZiB0aGUgVHlwZVNjcmlwdCBtb2R1bGVcbiAqL1xuZXhwb3J0IGNvbnN0IGtub3duTGliRmlsZXNGb3JDb21waWxlck9wdGlvbnMgPSAoY29tcGlsZXJPcHRpb25zOiBDb21waWxlck9wdGlvbnMsIHRzOiBUUykgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBjb21waWxlck9wdGlvbnMudGFyZ2V0IHx8IHRzLlNjcmlwdFRhcmdldC5FUzVcbiAgY29uc3QgbGliID0gY29tcGlsZXJPcHRpb25zLmxpYiB8fCBbXVxuXG4gIGNvbnN0IGZpbGVzID0gW1xuICAgIFwibGliLmQudHNcIixcbiAgICBcImxpYi5kb20uZC50c1wiLFxuICAgIFwibGliLmRvbS5pdGVyYWJsZS5kLnRzXCIsXG4gICAgXCJsaWIud2Vid29ya2VyLmQudHNcIixcbiAgICBcImxpYi53ZWJ3b3JrZXIuaW1wb3J0c2NyaXB0cy5kLnRzXCIsXG4gICAgXCJsaWIuc2NyaXB0aG9zdC5kLnRzXCIsXG4gICAgXCJsaWIuZXM1LmQudHNcIixcbiAgICBcImxpYi5lczYuZC50c1wiLFxuICAgIFwibGliLmVzMjAxNS5jb2xsZWN0aW9uLmQudHNcIixcbiAgICBcImxpYi5lczIwMTUuY29yZS5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE1LmQudHNcIixcbiAgICBcImxpYi5lczIwMTUuZ2VuZXJhdG9yLmQudHNcIixcbiAgICBcImxpYi5lczIwMTUuaXRlcmFibGUuZC50c1wiLFxuICAgIFwibGliLmVzMjAxNS5wcm9taXNlLmQudHNcIixcbiAgICBcImxpYi5lczIwMTUucHJveHkuZC50c1wiLFxuICAgIFwibGliLmVzMjAxNS5yZWZsZWN0LmQudHNcIixcbiAgICBcImxpYi5lczIwMTUuc3ltYm9sLmQudHNcIixcbiAgICBcImxpYi5lczIwMTUuc3ltYm9sLndlbGxrbm93bi5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE2LmFycmF5LmluY2x1ZGUuZC50c1wiLFxuICAgIFwibGliLmVzMjAxNi5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE2LmZ1bGwuZC50c1wiLFxuICAgIFwibGliLmVzMjAxNy5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE3LmZ1bGwuZC50c1wiLFxuICAgIFwibGliLmVzMjAxNy5pbnRsLmQudHNcIixcbiAgICBcImxpYi5lczIwMTcub2JqZWN0LmQudHNcIixcbiAgICBcImxpYi5lczIwMTcuc2hhcmVkbWVtb3J5LmQudHNcIixcbiAgICBcImxpYi5lczIwMTcuc3RyaW5nLmQudHNcIixcbiAgICBcImxpYi5lczIwMTcudHlwZWRhcnJheXMuZC50c1wiLFxuICAgIFwibGliLmVzMjAxOC5hc3luY2dlbmVyYXRvci5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE4LmFzeW5jaXRlcmFibGUuZC50c1wiLFxuICAgIFwibGliLmVzMjAxOC5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE4LmZ1bGwuZC50c1wiLFxuICAgIFwibGliLmVzMjAxOC5pbnRsLmQudHNcIixcbiAgICBcImxpYi5lczIwMTgucHJvbWlzZS5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE4LnJlZ2V4cC5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDE5LmFycmF5LmQudHNcIixcbiAgICBcImxpYi5lczIwMTkuZC50c1wiLFxuICAgIFwibGliLmVzMjAxOS5mdWxsLmQudHNcIixcbiAgICBcImxpYi5lczIwMTkub2JqZWN0LmQudHNcIixcbiAgICBcImxpYi5lczIwMTkuc3RyaW5nLmQudHNcIixcbiAgICBcImxpYi5lczIwMTkuc3ltYm9sLmQudHNcIixcbiAgICBcImxpYi5lczIwMjAuZC50c1wiLFxuICAgIFwibGliLmVzMjAyMC5mdWxsLmQudHNcIixcbiAgICBcImxpYi5lczIwMjAuc3RyaW5nLmQudHNcIixcbiAgICBcImxpYi5lczIwMjAuc3ltYm9sLndlbGxrbm93bi5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDIwLmJpZ2ludC5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDIwLnByb21pc2UuZC50c1wiLFxuICAgIFwibGliLmVzMjAyMC5zaGFyZWRtZW1vcnkuZC50c1wiLFxuICAgIFwibGliLmVzMjAyMC5pbnRsLmQudHNcIixcbiAgICBcImxpYi5lczIwMjEuZC50c1wiLFxuICAgIFwibGliLmVzMjAyMS5mdWxsLmQudHNcIixcbiAgICBcImxpYi5lczIwMjEucHJvbWlzZS5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDIxLnN0cmluZy5kLnRzXCIsXG4gICAgXCJsaWIuZXMyMDIxLndlYWtyZWYuZC50c1wiLFxuICAgIFwibGliLmVzbmV4dC5kLnRzXCIsXG4gICAgXCJsaWIuZXNuZXh0LmZ1bGwuZC50c1wiLFxuICAgIFwibGliLmVzbmV4dC5pbnRsLmQudHNcIixcbiAgICBcImxpYi5lc25leHQucHJvbWlzZS5kLnRzXCIsXG4gICAgXCJsaWIuZXNuZXh0LnN0cmluZy5kLnRzXCIsXG4gICAgXCJsaWIuZXNuZXh0LndlYWtyZWYuZC50c1wiLFxuICBdXG5cbiAgY29uc3QgdGFyZ2V0VG9DdXQgPSB0cy5TY3JpcHRUYXJnZXRbdGFyZ2V0XVxuICBjb25zdCBtYXRjaGVzID0gZmlsZXMuZmlsdGVyKGYgPT4gZi5zdGFydHNXaXRoKGBsaWIuJHt0YXJnZXRUb0N1dC50b0xvd2VyQ2FzZSgpfWApKVxuICBjb25zdCB0YXJnZXRDdXRJbmRleCA9IGZpbGVzLmluZGV4T2YobWF0Y2hlcy5wb3AoKSEpXG5cbiAgY29uc3QgZ2V0TWF4ID0gKGFycmF5OiBudW1iZXJbXSkgPT5cbiAgICBhcnJheSAmJiBhcnJheS5sZW5ndGggPyBhcnJheS5yZWR1Y2UoKG1heCwgY3VycmVudCkgPT4gKGN1cnJlbnQgPiBtYXggPyBjdXJyZW50IDogbWF4KSkgOiB1bmRlZmluZWRcblxuICAvLyBGaW5kIHRoZSBpbmRleCBmb3IgZXZlcnl0aGluZyBpblxuICBjb25zdCBpbmRleGVzRm9yQ3V0dGluZyA9IGxpYi5tYXAobGliID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gZmlsZXMuZmlsdGVyKGYgPT4gZi5zdGFydHNXaXRoKGBsaWIuJHtsaWIudG9Mb3dlckNhc2UoKX1gKSlcbiAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgICBjb25zdCBjdXRJbmRleCA9IGZpbGVzLmluZGV4T2YobWF0Y2hlcy5wb3AoKSEpXG4gICAgcmV0dXJuIGN1dEluZGV4XG4gIH0pXG5cbiAgY29uc3QgbGliQ3V0SW5kZXggPSBnZXRNYXgoaW5kZXhlc0ZvckN1dHRpbmcpIHx8IDBcblxuICBjb25zdCBmaW5hbEN1dEluZGV4ID0gTWF0aC5tYXgodGFyZ2V0Q3V0SW5kZXgsIGxpYkN1dEluZGV4KVxuICByZXR1cm4gZmlsZXMuc2xpY2UoMCwgZmluYWxDdXRJbmRleCArIDEpXG59XG5cbi8qKlxuICogU2V0cyB1cCBhIE1hcCB3aXRoIGxpYiBjb250ZW50cyBieSBncmFiYmluZyB0aGUgbmVjZXNzYXJ5IGZpbGVzIGZyb21cbiAqIHRoZSBsb2NhbCBjb3B5IG9mIHR5cGVzY3JpcHQgdmlhIHRoZSBmaWxlIHN5c3RlbS5cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZURlZmF1bHRNYXBGcm9tTm9kZU1vZHVsZXMgPSAoY29tcGlsZXJPcHRpb25zOiBDb21waWxlck9wdGlvbnMsIHRzPzogdHlwZW9mIGltcG9ydChcInR5cGVzY3JpcHRcIiksIHRzTGliRGlyZWN0b3J5Pzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHRzTW9kdWxlID0gdHMgfHwgcmVxdWlyZShcInR5cGVzY3JpcHRcIilcbiAgY29uc3QgcGF0aCA9IHJlcXVpcmVQYXRoKClcbiAgY29uc3QgZnMgPSByZXF1aXJlRlMoKVxuXG4gIGNvbnN0IGdldExpYiA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBsaWIgPSB0c0xpYkRpcmVjdG9yeSB8fCBwYXRoLmRpcm5hbWUocmVxdWlyZS5yZXNvbHZlKFwidHlwZXNjcmlwdFwiKSlcbiAgICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihsaWIsIG5hbWUpLCBcInV0ZjhcIilcbiAgfVxuXG4gIGNvbnN0IGxpYnMgPSBrbm93bkxpYkZpbGVzRm9yQ29tcGlsZXJPcHRpb25zKGNvbXBpbGVyT3B0aW9ucywgdHNNb2R1bGUpXG4gIGNvbnN0IGZzTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuICBsaWJzLmZvckVhY2gobGliID0+IHtcbiAgICBmc01hcC5zZXQoXCIvXCIgKyBsaWIsIGdldExpYihsaWIpKVxuICB9KVxuICByZXR1cm4gZnNNYXBcbn1cblxuLyoqXG4gKiBBZGRzIHJlY3Vyc2l2ZWx5IGZpbGVzIGZyb20gdGhlIEZTIGludG8gdGhlIG1hcCBiYXNlZCBvbiB0aGUgZm9sZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBhZGRBbGxGaWxlc0Zyb21Gb2xkZXIgPSAobWFwOiBNYXA8c3RyaW5nLCBzdHJpbmc+LCB3b3JraW5nRGlyOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgY29uc3QgcGF0aCA9IHJlcXVpcmVQYXRoKClcbiAgY29uc3QgZnMgPSByZXF1aXJlRlMoKVxuXG4gIGNvbnN0IHdhbGsgPSBmdW5jdGlvbiAoZGlyOiBzdHJpbmcpIHtcbiAgICBsZXQgcmVzdWx0czogc3RyaW5nW10gPSBbXVxuICAgIGNvbnN0IGxpc3QgPSBmcy5yZWFkZGlyU3luYyhkaXIpXG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlOiBzdHJpbmcpIHtcbiAgICAgIGZpbGUgPSBwYXRoLmpvaW4oZGlyLCBmaWxlKVxuICAgICAgY29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGZpbGUpXG4gICAgICBpZiAoc3RhdCAmJiBzdGF0LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgLyogUmVjdXJzZSBpbnRvIGEgc3ViZGlyZWN0b3J5ICovXG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdCh3YWxrKGZpbGUpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogSXMgYSBmaWxlICovXG4gICAgICAgIHJlc3VsdHMucHVzaChmaWxlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIGNvbnN0IGFsbEZpbGVzID0gd2Fsayh3b3JraW5nRGlyKVxuXG4gIGFsbEZpbGVzLmZvckVhY2gobGliID0+IHtcbiAgICBjb25zdCBmc1BhdGggPSBcIi9ub2RlX21vZHVsZXMvQHR5cGVzXCIgKyBsaWIucmVwbGFjZSh3b3JraW5nRGlyLCBcIlwiKVxuICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMobGliLCBcInV0ZjhcIilcbiAgICBjb25zdCB2YWxpZEV4dGVuc2lvbnMgPSBbXCIudHNcIiwgXCIudHN4XCJdXG5cbiAgICBpZiAodmFsaWRFeHRlbnNpb25zLmluY2x1ZGVzKHBhdGguZXh0bmFtZShmc1BhdGgpKSkge1xuICAgICAgbWFwLnNldChmc1BhdGgsIGNvbnRlbnQpXG4gICAgfVxuICB9KVxufVxuXG4vKiogQWRkcyBhbGwgZmlsZXMgZnJvbSBub2RlX21vZHVsZXMvQHR5cGVzIGludG8gdGhlIEZTIE1hcCAqL1xuZXhwb3J0IGNvbnN0IGFkZEZpbGVzRm9yVHlwZXNJbnRvRm9sZGVyID0gKG1hcDogTWFwPHN0cmluZywgc3RyaW5nPikgPT5cbiAgYWRkQWxsRmlsZXNGcm9tRm9sZGVyKG1hcCwgXCJub2RlX21vZHVsZXMvQHR5cGVzXCIpXG5cbi8qKlxuICogQ3JlYXRlIGEgdmlydHVhbCBGUyBNYXAgd2l0aCB0aGUgbGliIGZpbGVzIGZyb20gYSBwYXJ0aWN1bGFyIFR5cGVTY3JpcHRcbiAqIHZlcnNpb24gYmFzZWQgb24gdGhlIHRhcmdldCwgQWx3YXlzIGluY2x1ZGVzIGRvbSBBVE0uXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgVGhlIGNvbXBpbGVyIHRhcmdldCwgd2hpY2ggZGljdGF0ZXMgdGhlIGxpYnMgdG8gc2V0IHVwXG4gKiBAcGFyYW0gdmVyc2lvbiB0aGUgdmVyc2lvbnMgb2YgVHlwZVNjcmlwdCB3aGljaCBhcmUgc3VwcG9ydGVkXG4gKiBAcGFyYW0gY2FjaGUgc2hvdWxkIHRoZSB2YWx1ZXMgYmUgc3RvcmVkIGluIGxvY2FsIHN0b3JhZ2VcbiAqIEBwYXJhbSB0cyBhIGNvcHkgb2YgdGhlIHR5cGVzY3JpcHQgaW1wb3J0XG4gKiBAcGFyYW0gbHpzdHJpbmcgYW4gb3B0aW9uYWwgY29weSBvZiB0aGUgbHotc3RyaW5nIGltcG9ydFxuICogQHBhcmFtIGZldGNoZXIgYW4gb3B0aW9uYWwgcmVwbGFjZW1lbnQgZm9yIHRoZSBnbG9iYWwgZmV0Y2ggZnVuY3Rpb24gKHRlc3RzIG1haW5seSlcbiAqIEBwYXJhbSBzdG9yZXIgYW4gb3B0aW9uYWwgcmVwbGFjZW1lbnQgZm9yIHRoZSBsb2NhbFN0b3JhZ2UgZ2xvYmFsICh0ZXN0cyBtYWlubHkpXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWZhdWx0TWFwRnJvbUNETiA9IChcbiAgb3B0aW9uczogQ29tcGlsZXJPcHRpb25zLFxuICB2ZXJzaW9uOiBzdHJpbmcsXG4gIGNhY2hlOiBib29sZWFuLFxuICB0czogVFMsXG4gIGx6c3RyaW5nPzogdHlwZW9mIGltcG9ydChcImx6LXN0cmluZ1wiKSxcbiAgZmV0Y2hlcj86IHR5cGVvZiBmZXRjaCxcbiAgc3RvcmVyPzogdHlwZW9mIGxvY2FsU3RvcmFnZVxuKSA9PiB7XG4gIGNvbnN0IGZldGNobGlrZSA9IGZldGNoZXIgfHwgZmV0Y2hcbiAgY29uc3QgZnNNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXG4gIGNvbnN0IGZpbGVzID0ga25vd25MaWJGaWxlc0ZvckNvbXBpbGVyT3B0aW9ucyhvcHRpb25zLCB0cylcbiAgY29uc3QgcHJlZml4ID0gYGh0dHBzOi8vdHlwZXNjcmlwdC5henVyZWVkZ2UubmV0L2Nkbi8ke3ZlcnNpb259L3R5cGVzY3JpcHQvbGliL2BcblxuICBmdW5jdGlvbiB6aXAoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbHpzdHJpbmcgPyBsenN0cmluZy5jb21wcmVzc1RvVVRGMTYoc3RyKSA6IHN0clxuICB9XG5cbiAgZnVuY3Rpb24gdW56aXAoc3RyOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbHpzdHJpbmcgPyBsenN0cmluZy5kZWNvbXByZXNzRnJvbVVURjE2KHN0cikgOiBzdHJcbiAgfVxuXG4gIC8vIE1hcCB0aGUga25vd24gbGlicyB0byBhIG5vZGUgZmV0Y2ggcHJvbWlzZSwgdGhlbiByZXR1cm4gdGhlIGNvbnRlbnRzXG4gIGZ1bmN0aW9uIHVuY2FjaGVkKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChmaWxlcy5tYXAobGliID0+IGZldGNobGlrZShwcmVmaXggKyBsaWIpLnRoZW4ocmVzcCA9PiByZXNwLnRleHQoKSkpKS50aGVuKGNvbnRlbnRzID0+IHtcbiAgICAgIGNvbnRlbnRzLmZvckVhY2goKHRleHQsIGluZGV4KSA9PiBmc01hcC5zZXQoXCIvXCIgKyBmaWxlc1tpbmRleF0sIHRleHQpKVxuICAgIH0pXG4gIH1cblxuICAvLyBBIGxvY2Fsc3RvcmFnZSBhbmQgbHp6aXAgYXdhcmUgdmVyc2lvbiBvZiB0aGUgbGliIGZpbGVzXG4gIGZ1bmN0aW9uIGNhY2hlZCgpIHtcbiAgICBjb25zdCBzdG9yZWxpa2UgPSBzdG9yZXIgfHwgbG9jYWxTdG9yYWdlXG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKVxuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgLy8gUmVtb3ZlIGFueXRoaW5nIHdoaWNoIGlzbid0IGZyb20gdGhpcyB2ZXJzaW9uXG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoXCJ0cy1saWItXCIpICYmICFrZXkuc3RhcnRzV2l0aChcInRzLWxpYi1cIiArIHZlcnNpb24pKSB7XG4gICAgICAgIHN0b3JlbGlrZS5yZW1vdmVJdGVtKGtleSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgZmlsZXMubWFwKGxpYiA9PiB7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gYHRzLWxpYi0ke3ZlcnNpb259LSR7bGlifWBcbiAgICAgICAgY29uc3QgY29udGVudCA9IHN0b3JlbGlrZS5nZXRJdGVtKGNhY2hlS2V5KVxuXG4gICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgIC8vIE1ha2UgdGhlIEFQSSBjYWxsIGFuZCBzdG9yZSB0aGUgdGV4dCBjb25jZW50IGluIHRoZSBjYWNoZVxuICAgICAgICAgIHJldHVybiBmZXRjaGxpa2UocHJlZml4ICsgbGliKVxuICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiByZXNwLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKHQgPT4ge1xuICAgICAgICAgICAgICBzdG9yZWxpa2Uuc2V0SXRlbShjYWNoZUtleSwgemlwKHQpKVxuICAgICAgICAgICAgICByZXR1cm4gdFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuemlwKGNvbnRlbnQpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICkudGhlbihjb250ZW50cyA9PiB7XG4gICAgICBjb250ZW50cy5mb3JFYWNoKCh0ZXh0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gXCIvXCIgKyBmaWxlc1tpbmRleF1cbiAgICAgICAgZnNNYXAuc2V0KG5hbWUsIHRleHQpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBmdW5jID0gY2FjaGUgPyBjYWNoZWQgOiB1bmNhY2hlZFxuICByZXR1cm4gZnVuYygpLnRoZW4oKCkgPT4gZnNNYXApXG59XG5cbmZ1bmN0aW9uIG5vdEltcGxlbWVudGVkKG1ldGhvZE5hbWU6IHN0cmluZyk6IGFueSB7XG4gIHRocm93IG5ldyBFcnJvcihgTWV0aG9kICcke21ldGhvZE5hbWV9JyBpcyBub3QgaW1wbGVtZW50ZWQuYClcbn1cblxuZnVuY3Rpb24gYXVkaXQ8QXJnc1QgZXh0ZW5kcyBhbnlbXSwgUmV0dXJuVD4oXG4gIG5hbWU6IHN0cmluZyxcbiAgZm46ICguLi5hcmdzOiBBcmdzVCkgPT4gUmV0dXJuVFxuKTogKC4uLmFyZ3M6IEFyZ3NUKSA9PiBSZXR1cm5UIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmVzID0gZm4oLi4uYXJncylcblxuICAgIGNvbnN0IHNtYWxscmVzID0gdHlwZW9mIHJlcyA9PT0gXCJzdHJpbmdcIiA/IHJlcy5zbGljZSgwLCA4MCkgKyBcIi4uLlwiIDogcmVzXG4gICAgZGVidWdMb2coXCI+IFwiICsgbmFtZSwgLi4uYXJncylcbiAgICBkZWJ1Z0xvZyhcIjwgXCIgKyBzbWFsbHJlcylcblxuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG4vKiogVGhlIGRlZmF1bHQgY29tcGlsZXIgb3B0aW9ucyBpZiBUeXBlU2NyaXB0IGNvdWxkIGV2ZXIgY2hhbmdlIHRoZSBjb21waWxlciBvcHRpb25zICovXG5jb25zdCBkZWZhdWx0Q29tcGlsZXJPcHRpb25zID0gKHRzOiB0eXBlb2YgaW1wb3J0KFwidHlwZXNjcmlwdFwiKSk6IENvbXBpbGVyT3B0aW9ucyA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4udHMuZ2V0RGVmYXVsdENvbXBpbGVyT3B0aW9ucygpLFxuICAgIGpzeDogdHMuSnN4RW1pdC5SZWFjdCxcbiAgICBzdHJpY3Q6IHRydWUsXG4gICAgZXNNb2R1bGVJbnRlcm9wOiB0cnVlLFxuICAgIG1vZHVsZTogdHMuTW9kdWxlS2luZC5FU05leHQsXG4gICAgc3VwcHJlc3NPdXRwdXRQYXRoQ2hlY2s6IHRydWUsXG4gICAgc2tpcExpYkNoZWNrOiB0cnVlLFxuICAgIHNraXBEZWZhdWx0TGliQ2hlY2s6IHRydWUsXG4gICAgbW9kdWxlUmVzb2x1dGlvbjogdHMuTW9kdWxlUmVzb2x1dGlvbktpbmQuTm9kZUpzLFxuICB9XG59XG5cbi8vIFwiL0RPTS5kLnRzXCIgPT4gXCIvbGliLmRvbS5kLnRzXCJcbmNvbnN0IGxpYml6ZSA9IChwYXRoOiBzdHJpbmcpID0+IHBhdGgucmVwbGFjZShcIi9cIiwgXCIvbGliLlwiKS50b0xvd2VyQ2FzZSgpXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpbi1tZW1vcnkgU3lzdGVtIG9iamVjdCB3aGljaCBjYW4gYmUgdXNlZCBpbiBhIFR5cGVTY3JpcHQgcHJvZ3JhbSwgdGhpc1xuICogaXMgd2hhdCBwcm92aWRlcyByZWFkL3dyaXRlIGFzcGVjdHMgb2YgdGhlIHZpcnR1YWwgZnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN5c3RlbShmaWxlczogTWFwPHN0cmluZywgc3RyaW5nPik6IFN5c3RlbSB7XG4gIHJldHVybiB7XG4gICAgYXJnczogW10sXG4gICAgY3JlYXRlRGlyZWN0b3J5OiAoKSA9PiBub3RJbXBsZW1lbnRlZChcImNyZWF0ZURpcmVjdG9yeVwiKSxcbiAgICAvLyBUT0RPOiBjb3VsZCBtYWtlIGEgcmVhbCBmaWxlIHRyZWVcbiAgICBkaXJlY3RvcnlFeGlzdHM6IGF1ZGl0KFwiZGlyZWN0b3J5RXhpc3RzXCIsIGRpcmVjdG9yeSA9PiB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShmaWxlcy5rZXlzKCkpLnNvbWUocGF0aCA9PiBwYXRoLnN0YXJ0c1dpdGgoZGlyZWN0b3J5KSlcbiAgICB9KSxcbiAgICBleGl0OiAoKSA9PiBub3RJbXBsZW1lbnRlZChcImV4aXRcIiksXG4gICAgZmlsZUV4aXN0czogYXVkaXQoXCJmaWxlRXhpc3RzXCIsIGZpbGVOYW1lID0+IGZpbGVzLmhhcyhmaWxlTmFtZSkgfHwgZmlsZXMuaGFzKGxpYml6ZShmaWxlTmFtZSkpKSxcbiAgICBnZXRDdXJyZW50RGlyZWN0b3J5OiAoKSA9PiBcIi9cIixcbiAgICBnZXREaXJlY3RvcmllczogKCkgPT4gW10sXG4gICAgZ2V0RXhlY3V0aW5nRmlsZVBhdGg6ICgpID0+IG5vdEltcGxlbWVudGVkKFwiZ2V0RXhlY3V0aW5nRmlsZVBhdGhcIiksXG4gICAgcmVhZERpcmVjdG9yeTogYXVkaXQoXCJyZWFkRGlyZWN0b3J5XCIsIGRpcmVjdG9yeSA9PiAoZGlyZWN0b3J5ID09PSBcIi9cIiA/IEFycmF5LmZyb20oZmlsZXMua2V5cygpKSA6IFtdKSksXG4gICAgcmVhZEZpbGU6IGF1ZGl0KFwicmVhZEZpbGVcIiwgZmlsZU5hbWUgPT4gZmlsZXMuZ2V0KGZpbGVOYW1lKSB8fCBmaWxlcy5nZXQobGliaXplKGZpbGVOYW1lKSkpLFxuICAgIHJlc29sdmVQYXRoOiBwYXRoID0+IHBhdGgsXG4gICAgbmV3TGluZTogXCJcXG5cIixcbiAgICB1c2VDYXNlU2Vuc2l0aXZlRmlsZU5hbWVzOiB0cnVlLFxuICAgIHdyaXRlOiAoKSA9PiBub3RJbXBsZW1lbnRlZChcIndyaXRlXCIpLFxuICAgIHdyaXRlRmlsZTogKGZpbGVOYW1lLCBjb250ZW50cykgPT4ge1xuICAgICAgZmlsZXMuc2V0KGZpbGVOYW1lLCBjb250ZW50cylcbiAgICB9LFxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZpbGUtc3lzdGVtIGJhY2tlZCBTeXN0ZW0gb2JqZWN0IHdoaWNoIGNhbiBiZSB1c2VkIGluIGEgVHlwZVNjcmlwdCBwcm9ncmFtLCB5b3UgcHJvdmlkZVxuICogYSBzZXQgb2YgdmlydHVhbCBmaWxlcyB3aGljaCBhcmUgcHJpb3JpdGlzZWQgb3ZlciB0aGUgRlMgdmVyc2lvbnMsIHRoZW4gYSBwYXRoIHRvIHRoZSByb290IG9mIHlvdXJcbiAqIHByb2plY3QgKGJhc2ljYWxseSB0aGUgZm9sZGVyIHlvdXIgbm9kZV9tb2R1bGVzIGxpdmVzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRlNCYWNrZWRTeXN0ZW0oZmlsZXM6IE1hcDxzdHJpbmcsIHN0cmluZz4sIF9wcm9qZWN0Um9vdDogc3RyaW5nLCB0czogVFMsIHRzTGliRGlyZWN0b3J5Pzogc3RyaW5nKTogU3lzdGVtIHtcbiAgLy8gV2UgbmVlZCB0byBtYWtlIGFuIGlzb2xhdGVkIGZvbGRlciBmb3IgdGhlIHRzY29uZmlnLCBidXQgYWxzbyBuZWVkIHRvIGJlIGFibGUgdG8gcmVzb2x2ZSB0aGVcbiAgLy8gZXhpc3Rpbmcgbm9kZV9tb2R1bGVzIHN0cnVjdHVyZXMgZ29pbmcgYmFjayB0aHJvdWdoIHRoZSBoaXN0b3J5XG4gIGNvbnN0IHJvb3QgPSBfcHJvamVjdFJvb3QgKyBcIi92ZnNcIlxuICBjb25zdCBwYXRoID0gcmVxdWlyZVBhdGgoKVxuXG4gIC8vIFRoZSBkZWZhdWx0IFN5c3RlbSBpbiBUeXBlU2NyaXB0XG4gIGNvbnN0IG5vZGVTeXMgPSB0cy5zeXNcbiAgY29uc3QgdHNMaWIgPSB0c0xpYkRpcmVjdG9yeSA/PyBwYXRoLmRpcm5hbWUocmVxdWlyZS5yZXNvbHZlKFwidHlwZXNjcmlwdFwiKSlcblxuICByZXR1cm4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBuYW1lOiBcImZzLXZmc1wiLFxuICAgIHJvb3QsXG4gICAgYXJnczogW10sXG4gICAgY3JlYXRlRGlyZWN0b3J5OiAoKSA9PiBub3RJbXBsZW1lbnRlZChcImNyZWF0ZURpcmVjdG9yeVwiKSxcbiAgICAvLyBUT0RPOiBjb3VsZCBtYWtlIGEgcmVhbCBmaWxlIHRyZWVcbiAgICBkaXJlY3RvcnlFeGlzdHM6IGF1ZGl0KFwiZGlyZWN0b3J5RXhpc3RzXCIsIGRpcmVjdG9yeSA9PiB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShmaWxlcy5rZXlzKCkpLnNvbWUocGF0aCA9PiBwYXRoLnN0YXJ0c1dpdGgoZGlyZWN0b3J5KSkgfHwgbm9kZVN5cy5kaXJlY3RvcnlFeGlzdHMoZGlyZWN0b3J5KVxuICAgIH0pLFxuICAgIGV4aXQ6IG5vZGVTeXMuZXhpdCxcbiAgICBmaWxlRXhpc3RzOiBhdWRpdChcImZpbGVFeGlzdHNcIiwgZmlsZU5hbWUgPT4ge1xuICAgICAgaWYgKGZpbGVzLmhhcyhmaWxlTmFtZSkpIHJldHVybiB0cnVlXG4gICAgICAvLyBEb24ndCBsZXQgb3RoZXIgdHNjb25maWdzIGVuZCB1cCB0b3VjaGluZyB0aGUgdmZzXG4gICAgICBpZiAoZmlsZU5hbWUuaW5jbHVkZXMoXCJ0c2NvbmZpZy5qc29uXCIpIHx8IGZpbGVOYW1lLmluY2x1ZGVzKFwidHNjb25maWcuanNvblwiKSkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoZmlsZU5hbWUuc3RhcnRzV2l0aChcIi9saWJcIikpIHtcbiAgICAgICAgY29uc3QgdHNMaWJOYW1lID0gYCR7dHNMaWJ9LyR7ZmlsZU5hbWUucmVwbGFjZShcIi9cIiwgXCJcIil9YFxuICAgICAgICByZXR1cm4gbm9kZVN5cy5maWxlRXhpc3RzKHRzTGliTmFtZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlU3lzLmZpbGVFeGlzdHMoZmlsZU5hbWUpXG4gICAgfSksXG4gICAgZ2V0Q3VycmVudERpcmVjdG9yeTogKCkgPT4gcm9vdCxcbiAgICBnZXREaXJlY3Rvcmllczogbm9kZVN5cy5nZXREaXJlY3RvcmllcyxcbiAgICBnZXRFeGVjdXRpbmdGaWxlUGF0aDogKCkgPT4gbm90SW1wbGVtZW50ZWQoXCJnZXRFeGVjdXRpbmdGaWxlUGF0aFwiKSxcbiAgICByZWFkRGlyZWN0b3J5OiBhdWRpdChcInJlYWREaXJlY3RvcnlcIiwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChhcmdzWzBdID09PSBcIi9cIikge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShmaWxlcy5rZXlzKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbm9kZVN5cy5yZWFkRGlyZWN0b3J5KC4uLmFyZ3MpXG4gICAgICB9XG4gICAgfSksXG4gICAgcmVhZEZpbGU6IGF1ZGl0KFwicmVhZEZpbGVcIiwgZmlsZU5hbWUgPT4ge1xuICAgICAgaWYgKGZpbGVzLmhhcyhmaWxlTmFtZSkpIHJldHVybiBmaWxlcy5nZXQoZmlsZU5hbWUpXG4gICAgICBpZiAoZmlsZU5hbWUuc3RhcnRzV2l0aChcIi9saWJcIikpIHtcbiAgICAgICAgY29uc3QgdHNMaWJOYW1lID0gYCR7dHNMaWJ9LyR7ZmlsZU5hbWUucmVwbGFjZShcIi9cIiwgXCJcIil9YFxuICAgICAgICBjb25zdCByZXN1bHQgPSBub2RlU3lzLnJlYWRGaWxlKHRzTGliTmFtZSlcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICBjb25zdCBsaWJzID0gbm9kZVN5cy5yZWFkRGlyZWN0b3J5KHRzTGliKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUU1ZGUzogQSByZXF1ZXN0IHdhcyBtYWRlIGZvciAke3RzTGliTmFtZX0gYnV0IHRoZXJlIHdhc24ndCBhIGZpbGUgZm91bmQgaW4gdGhlIGZpbGUgbWFwLiBZb3UgbGlrZWx5IGhhdmUgYSBtaXNtYXRjaCBpbiB0aGUgY29tcGlsZXIgb3B0aW9ucyBmb3IgdGhlIENETiBkb3dubG9hZCB2cyB0aGUgY29tcGlsZXIgcHJvZ3JhbS4gRXhpc3RpbmcgTGliczogJHtsaWJzfS5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlU3lzLnJlYWRGaWxlKGZpbGVOYW1lKVxuICAgIH0pLFxuICAgIHJlc29sdmVQYXRoOiBwYXRoID0+IHtcbiAgICAgIGlmIChmaWxlcy5oYXMocGF0aCkpIHJldHVybiBwYXRoXG4gICAgICByZXR1cm4gbm9kZVN5cy5yZXNvbHZlUGF0aChwYXRoKVxuICAgIH0sXG4gICAgbmV3TGluZTogXCJcXG5cIixcbiAgICB1c2VDYXNlU2Vuc2l0aXZlRmlsZU5hbWVzOiB0cnVlLFxuICAgIHdyaXRlOiAoKSA9PiBub3RJbXBsZW1lbnRlZChcIndyaXRlXCIpLFxuICAgIHdyaXRlRmlsZTogKGZpbGVOYW1lLCBjb250ZW50cykgPT4ge1xuICAgICAgZmlsZXMuc2V0KGZpbGVOYW1lLCBjb250ZW50cylcbiAgICB9LFxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpbi1tZW1vcnkgQ29tcGlsZXJIb3N0IC13aGljaCBpcyBlc3NlbnRpYWxseSBhbiBleHRyYSB3cmFwcGVyIHRvIFN5c3RlbVxuICogd2hpY2ggd29ya3Mgd2l0aCBUeXBlU2NyaXB0IG9iamVjdHMgLSByZXR1cm5zIGJvdGggYSBjb21waWxlciBob3N0LCBhbmQgYSB3YXkgdG8gYWRkIG5ldyBTb3VyY2VGaWxlXG4gKiBpbnN0YW5jZXMgdG8gdGhlIGluLW1lbW9yeSBmaWxlIHN5c3RlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpcnR1YWxDb21waWxlckhvc3Qoc3lzOiBTeXN0ZW0sIGNvbXBpbGVyT3B0aW9uczogQ29tcGlsZXJPcHRpb25zLCB0czogVFMpIHtcbiAgY29uc3Qgc291cmNlRmlsZXMgPSBuZXcgTWFwPHN0cmluZywgU291cmNlRmlsZT4oKVxuICBjb25zdCBzYXZlID0gKHNvdXJjZUZpbGU6IFNvdXJjZUZpbGUpID0+IHtcbiAgICBzb3VyY2VGaWxlcy5zZXQoc291cmNlRmlsZS5maWxlTmFtZSwgc291cmNlRmlsZSlcbiAgICByZXR1cm4gc291cmNlRmlsZVxuICB9XG5cbiAgdHlwZSBSZXR1cm4gPSB7XG4gICAgY29tcGlsZXJIb3N0OiBDb21waWxlckhvc3RcbiAgICB1cGRhdGVGaWxlOiAoc291cmNlRmlsZTogU291cmNlRmlsZSkgPT4gYm9vbGVhblxuICB9XG5cbiAgY29uc3Qgdkhvc3Q6IFJldHVybiA9IHtcbiAgICBjb21waWxlckhvc3Q6IHtcbiAgICAgIC4uLnN5cyxcbiAgICAgIGdldENhbm9uaWNhbEZpbGVOYW1lOiBmaWxlTmFtZSA9PiBmaWxlTmFtZSxcbiAgICAgIGdldERlZmF1bHRMaWJGaWxlTmFtZTogKCkgPT4gXCIvXCIgKyB0cy5nZXREZWZhdWx0TGliRmlsZU5hbWUoY29tcGlsZXJPcHRpb25zKSwgLy8gJy9saWIuZC50cycsXG4gICAgICAvLyBnZXREZWZhdWx0TGliTG9jYXRpb246ICgpID0+ICcvJyxcbiAgICAgIGdldERpcmVjdG9yaWVzOiAoKSA9PiBbXSxcbiAgICAgIGdldE5ld0xpbmU6ICgpID0+IHN5cy5uZXdMaW5lLFxuICAgICAgZ2V0U291cmNlRmlsZTogZmlsZU5hbWUgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHNvdXJjZUZpbGVzLmdldChmaWxlTmFtZSkgfHxcbiAgICAgICAgICBzYXZlKFxuICAgICAgICAgICAgdHMuY3JlYXRlU291cmNlRmlsZShcbiAgICAgICAgICAgICAgZmlsZU5hbWUsXG4gICAgICAgICAgICAgIHN5cy5yZWFkRmlsZShmaWxlTmFtZSkhLFxuICAgICAgICAgICAgICBjb21waWxlck9wdGlvbnMudGFyZ2V0IHx8IGRlZmF1bHRDb21waWxlck9wdGlvbnModHMpLnRhcmdldCEsXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgdXNlQ2FzZVNlbnNpdGl2ZUZpbGVOYW1lczogKCkgPT4gc3lzLnVzZUNhc2VTZW5zaXRpdmVGaWxlTmFtZXMsXG4gICAgfSxcbiAgICB1cGRhdGVGaWxlOiBzb3VyY2VGaWxlID0+IHtcbiAgICAgIGNvbnN0IGFscmVhZHlFeGlzdHMgPSBzb3VyY2VGaWxlcy5oYXMoc291cmNlRmlsZS5maWxlTmFtZSlcbiAgICAgIHN5cy53cml0ZUZpbGUoc291cmNlRmlsZS5maWxlTmFtZSwgc291cmNlRmlsZS50ZXh0KVxuICAgICAgc291cmNlRmlsZXMuc2V0KHNvdXJjZUZpbGUuZmlsZU5hbWUsIHNvdXJjZUZpbGUpXG4gICAgICByZXR1cm4gYWxyZWFkeUV4aXN0c1xuICAgIH0sXG4gIH1cbiAgcmV0dXJuIHZIb3N0XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3Qgd2hpY2ggY2FuIGhvc3QgYSBsYW5ndWFnZSBzZXJ2aWNlIGFnYWluc3QgdGhlIHZpcnR1YWwgZmlsZS1zeXN0ZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpcnR1YWxMYW5ndWFnZVNlcnZpY2VIb3N0KFxuICBzeXM6IFN5c3RlbSxcbiAgcm9vdEZpbGVzOiBzdHJpbmdbXSxcbiAgY29tcGlsZXJPcHRpb25zOiBDb21waWxlck9wdGlvbnMsXG4gIHRzOiBUUyxcbiAgY3VzdG9tVHJhbnNmb3JtZXJzPzogQ3VzdG9tVHJhbnNmb3JtZXJzXG4pIHtcbiAgY29uc3QgZmlsZU5hbWVzID0gWy4uLnJvb3RGaWxlc11cbiAgY29uc3QgeyBjb21waWxlckhvc3QsIHVwZGF0ZUZpbGUgfSA9IGNyZWF0ZVZpcnR1YWxDb21waWxlckhvc3Qoc3lzLCBjb21waWxlck9wdGlvbnMsIHRzKVxuICBjb25zdCBmaWxlVmVyc2lvbnMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpXG4gIGxldCBwcm9qZWN0VmVyc2lvbiA9IDBcbiAgY29uc3QgbGFuZ3VhZ2VTZXJ2aWNlSG9zdDogTGFuZ3VhZ2VTZXJ2aWNlSG9zdCA9IHtcbiAgICAuLi5jb21waWxlckhvc3QsXG4gICAgZ2V0UHJvamVjdFZlcnNpb246ICgpID0+IHByb2plY3RWZXJzaW9uLnRvU3RyaW5nKCksXG4gICAgZ2V0Q29tcGlsYXRpb25TZXR0aW5nczogKCkgPT4gY29tcGlsZXJPcHRpb25zLFxuICAgIGdldEN1c3RvbVRyYW5zZm9ybWVyczogKCkgPT4gY3VzdG9tVHJhbnNmb3JtZXJzLFxuICAgIC8vIEEgY291cGxlIHdlZWtzIG9mIDQuOCBUeXBlU2NyaXB0IG5pZ2h0bGllcyBoYWQgYSBidWcgd2hlcmUgdGhlIFByb2dyYW0nc1xuICAgIC8vIGxpc3Qgb2YgZmlsZXMgd2FzIGp1c3QgYSByZWZlcmVuY2UgdG8gdGhlIGFycmF5IHJldHVybmVkIGJ5IHRoaXMgaG9zdCBtZXRob2QsXG4gICAgLy8gd2hpY2ggbWVhbnMgbXV0YXRpb25zIGJ5IHRoZSBob3N0IHRoYXQgb3VnaHQgdG8gcmVzdWx0IGluIGEgbmV3IFByb2dyYW0gYmVpbmdcbiAgICAvLyBjcmVhdGVkIHdlcmUgbm90IGRldGVjdGVkLCBzaW5jZSB0aGUgb2xkIGxpc3Qgb2YgZmlsZXMgYW5kIHRoZSBuZXcgbGlzdCBvZiBmaWxlc1xuICAgIC8vIHdlcmUgaW4gZmFjdCBhIHJlZmVyZW5jZSB0byB0aGUgc2FtZSB1bmRlcmx5aW5nIGFycmF5LiBUaGF0IHdhcyBmaXhlZCBpblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9wdWxsLzQ5ODEzLCBidXQgc2luY2UgdGhlIHR3b3NsYXNoIHJ1bm5lclxuICAgIC8vIGlzIHVzZWQgaW4gYmlzZWN0aW5nIGZvciBjaGFuZ2VzLCBpdCBuZWVkcyB0byBndWFyZCBhZ2FpbnN0IGJlaW5nIGJ1c3RlZCBpbiB0aGF0XG4gICAgLy8gY291cGxlLXdlZWsgcGVyaW9kLCBzbyB3ZSBkZWZlbnNpdmVseSBtYWtlIGEgc2xpY2UgaGVyZS5cbiAgICBnZXRTY3JpcHRGaWxlTmFtZXM6ICgpID0+IGZpbGVOYW1lcy5zbGljZSgpLFxuICAgIGdldFNjcmlwdFNuYXBzaG90OiBmaWxlTmFtZSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50cyA9IHN5cy5yZWFkRmlsZShmaWxlTmFtZSlcbiAgICAgIGlmIChjb250ZW50cykge1xuICAgICAgICByZXR1cm4gdHMuU2NyaXB0U25hcHNob3QuZnJvbVN0cmluZyhjb250ZW50cylcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH0sXG4gICAgZ2V0U2NyaXB0VmVyc2lvbjogZmlsZU5hbWUgPT4ge1xuICAgICAgcmV0dXJuIGZpbGVWZXJzaW9ucy5nZXQoZmlsZU5hbWUpIHx8IFwiMFwiXG4gICAgfSxcbiAgICB3cml0ZUZpbGU6IHN5cy53cml0ZUZpbGUsXG4gIH1cblxuICB0eXBlIFJldHVybiA9IHtcbiAgICBsYW5ndWFnZVNlcnZpY2VIb3N0OiBMYW5ndWFnZVNlcnZpY2VIb3N0XG4gICAgdXBkYXRlRmlsZTogKHNvdXJjZUZpbGU6IGltcG9ydChcInR5cGVzY3JpcHRcIikuU291cmNlRmlsZSkgPT4gdm9pZFxuICB9XG5cbiAgY29uc3QgbHNIb3N0OiBSZXR1cm4gPSB7XG4gICAgbGFuZ3VhZ2VTZXJ2aWNlSG9zdCxcbiAgICB1cGRhdGVGaWxlOiBzb3VyY2VGaWxlID0+IHtcbiAgICAgIHByb2plY3RWZXJzaW9uKytcbiAgICAgIGZpbGVWZXJzaW9ucy5zZXQoc291cmNlRmlsZS5maWxlTmFtZSwgcHJvamVjdFZlcnNpb24udG9TdHJpbmcoKSlcbiAgICAgIGlmICghZmlsZU5hbWVzLmluY2x1ZGVzKHNvdXJjZUZpbGUuZmlsZU5hbWUpKSB7XG4gICAgICAgIGZpbGVOYW1lcy5wdXNoKHNvdXJjZUZpbGUuZmlsZU5hbWUpXG4gICAgICB9XG4gICAgICB1cGRhdGVGaWxlKHNvdXJjZUZpbGUpXG4gICAgfSxcbiAgfVxuICByZXR1cm4gbHNIb3N0XG59XG5cbmNvbnN0IHJlcXVpcmVQYXRoID0gKCkgPT4ge1xuICByZXR1cm4gcmVxdWlyZShTdHJpbmcuZnJvbUNoYXJDb2RlKDExMiwgOTcsIDExNiwgMTA0KSkgYXMgdHlwZW9mIGltcG9ydChcInBhdGhcIilcbn1cblxuY29uc3QgcmVxdWlyZUZTID0gKCkgPT4ge1xuICByZXR1cm4gcmVxdWlyZShTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMiwgMTE1KSkgYXMgdHlwZW9mIGltcG9ydChcImZzXCIpXG59XG4iXX0=