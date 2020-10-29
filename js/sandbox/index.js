var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./typeAcquisition", "./theme", "./compilerOptions", "./vendor/lzstring.min", "./releases", "./getInitialCode", "./twoslashSupport", "./vendor/typescript-vfs"], function (require, exports, typeAcquisition_1, theme_1, compilerOptions_1, lzstring_min_1, releases_1, getInitialCode_1, twoslashSupport_1, tsvfs) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTypeScriptSandbox = exports.defaultPlaygroundSettings = void 0;
    lzstring_min_1 = __importDefault(lzstring_min_1);
    tsvfs = __importStar(tsvfs);
    const languageType = (config) => (config.useJavaScript ? "javascript" : "typescript");
    // Basically android and monaco is pretty bad, this makes it less bad
    // See https://github.com/microsoft/pxt/pull/7099 for this, and the long
    // read is in https://github.com/microsoft/monaco-editor/issues/563
    const isAndroid = navigator && /android/i.test(navigator.userAgent);
    /** Default Monaco settings for playground */
    const sharedEditorOptions = {
        scrollBeyondLastLine: true,
        scrollBeyondLastColumn: 3,
        minimap: {
            enabled: false,
        },
        lightbulb: {
            enabled: true,
        },
        quickSuggestions: {
            other: !isAndroid,
            comments: !isAndroid,
            strings: !isAndroid,
        },
        acceptSuggestionOnCommitCharacter: !isAndroid,
        acceptSuggestionOnEnter: !isAndroid ? "on" : "off",
        accessibilitySupport: !isAndroid ? "on" : "off",
    };
    /** The default settings which we apply a partial over */
    function defaultPlaygroundSettings() {
        const config = {
            text: "",
            domID: "",
            compilerOptions: {},
            acquireTypes: true,
            useJavaScript: false,
            supportTwoslashCompilerOptions: false,
            logger: console,
        };
        return config;
    }
    exports.defaultPlaygroundSettings = defaultPlaygroundSettings;
    function defaultFilePath(config, compilerOptions, monaco) {
        const isJSX = compilerOptions.jsx !== monaco.languages.typescript.JsxEmit.None;
        const fileExt = config.useJavaScript ? "js" : "ts";
        const ext = isJSX ? fileExt + "x" : fileExt;
        return "input." + ext;
    }
    /** Creates a monaco file reference, basically a fancy path */
    function createFileUri(config, compilerOptions, monaco) {
        return monaco.Uri.file(defaultFilePath(config, compilerOptions, monaco));
    }
    /** Creates a sandbox editor, and returns a set of useful functions and the editor */
    const createTypeScriptSandbox = (partialConfig, monaco, ts) => {
        const config = Object.assign(Object.assign({}, defaultPlaygroundSettings()), partialConfig);
        if (!("domID" in config) && !("elementToAppend" in config))
            throw new Error("You did not provide a domID or elementToAppend");
        const defaultText = config.suppressAutomaticallyGettingDefaultText
            ? config.text
            : getInitialCode_1.getInitialCode(config.text, document.location);
        // Defaults
        const compilerDefaults = compilerOptions_1.getDefaultSandboxCompilerOptions(config, monaco);
        // Grab the compiler flags via the query params
        let compilerOptions;
        if (!config.suppressAutomaticallyGettingCompilerFlags) {
            const params = new URLSearchParams(location.search);
            let queryParamCompilerOptions = compilerOptions_1.getCompilerOptionsFromParams(compilerDefaults, params);
            if (Object.keys(queryParamCompilerOptions).length)
                config.logger.log("[Compiler] Found compiler options in query params: ", queryParamCompilerOptions);
            compilerOptions = Object.assign(Object.assign({}, compilerDefaults), queryParamCompilerOptions);
        }
        else {
            compilerOptions = compilerDefaults;
        }
        const language = languageType(config);
        const filePath = createFileUri(config, compilerOptions, monaco);
        const element = "domID" in config ? document.getElementById(config.domID) : config.elementToAppend;
        const model = monaco.editor.createModel(defaultText, language, filePath);
        monaco.editor.defineTheme("sandbox", theme_1.sandboxTheme);
        monaco.editor.defineTheme("sandbox-dark", theme_1.sandboxThemeDark);
        monaco.editor.setTheme("sandbox");
        const monacoSettings = Object.assign({ model }, sharedEditorOptions, config.monacoSettings || {});
        const editor = monaco.editor.create(element, monacoSettings);
        const getWorker = config.useJavaScript
            ? monaco.languages.typescript.getJavaScriptWorker
            : monaco.languages.typescript.getTypeScriptWorker;
        const defaults = config.useJavaScript
            ? monaco.languages.typescript.javascriptDefaults
            : monaco.languages.typescript.typescriptDefaults;
        defaults.setDiagnosticsOptions(Object.assign(Object.assign({}, defaults.getDiagnosticsOptions()), { noSemanticValidation: false, 
            // This is when tslib is not found
            diagnosticCodesToIgnore: [2354] }));
        // In the future it'd be good to add support for an 'add many files'
        const addLibraryToRuntime = (code, path) => {
            defaults.addExtraLib(code, path);
            const uri = monaco.Uri.file(path);
            if (monaco.editor.getModel(uri) === null) {
                monaco.editor.createModel(code, "javascript", uri);
            }
            config.logger.log(`[ATA] Adding ${path} to runtime`);
        };
        const getTwoSlashComplierOptions = twoslashSupport_1.extractTwoSlashComplierOptions(ts);
        // Then update it when the model changes, perhaps this could be a debounced plugin instead in the future?
        editor.onDidChangeModelContent(() => {
            const code = editor.getModel().getValue();
            if (config.supportTwoslashCompilerOptions) {
                const configOpts = getTwoSlashComplierOptions(code);
                updateCompilerSettings(configOpts);
            }
            if (config.acquireTypes) {
                typeAcquisition_1.detectNewImportsToAcquireTypeFor(code, addLibraryToRuntime, window.fetch.bind(window), config);
            }
        });
        config.logger.log("[Compiler] Set compiler options: ", compilerOptions);
        defaults.setCompilerOptions(compilerOptions);
        // Grab types last so that it logs in a logical way
        if (config.acquireTypes) {
            // Take the code from the editor right away
            const code = editor.getModel().getValue();
            typeAcquisition_1.detectNewImportsToAcquireTypeFor(code, addLibraryToRuntime, window.fetch.bind(window), config);
        }
        // To let clients plug into compiler settings changes
        let didUpdateCompilerSettings = (opts) => { };
        const updateCompilerSettings = (opts) => {
            const newKeys = Object.keys(opts);
            if (!newKeys.length)
                return;
            // Don't update a compiler setting if it's the same
            // as the current setting
            newKeys.forEach(key => {
                if (compilerOptions[key] == opts[key])
                    delete opts[key];
            });
            if (!Object.keys(opts).length)
                return;
            config.logger.log("[Compiler] Updating compiler options: ", opts);
            compilerOptions = Object.assign(Object.assign({}, compilerOptions), opts);
            defaults.setCompilerOptions(compilerOptions);
            didUpdateCompilerSettings(compilerOptions);
        };
        const updateCompilerSetting = (key, value) => {
            config.logger.log("[Compiler] Setting compiler options ", key, "to", value);
            compilerOptions[key] = value;
            defaults.setCompilerOptions(compilerOptions);
            didUpdateCompilerSettings(compilerOptions);
        };
        const setCompilerSettings = (opts) => {
            config.logger.log("[Compiler] Setting compiler options: ", opts);
            compilerOptions = opts;
            defaults.setCompilerOptions(compilerOptions);
            didUpdateCompilerSettings(compilerOptions);
        };
        const getCompilerOptions = () => {
            return compilerOptions;
        };
        const setDidUpdateCompilerSettings = (func) => {
            didUpdateCompilerSettings = func;
        };
        /** Gets the results of compiling your editor's code */
        const getEmitResult = () => __awaiter(void 0, void 0, void 0, function* () {
            const model = editor.getModel();
            const client = yield getWorkerProcess();
            return yield client.getEmitOutput(model.uri.toString());
        });
        /** Gets the JS  of compiling your editor's code */
        const getRunnableJS = () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield getEmitResult();
            const firstJS = result.outputFiles.find((o) => o.name.endsWith(".js") || o.name.endsWith(".jsx"));
            return (firstJS && firstJS.text) || "";
        });
        /** Gets the DTS for the JS/TS  of compiling your editor's code */
        const getDTSForCode = () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield getEmitResult();
            return result.outputFiles.find((o) => o.name.endsWith(".d.ts")).text;
        });
        const getWorkerProcess = () => __awaiter(void 0, void 0, void 0, function* () {
            const worker = yield getWorker();
            // @ts-ignore
            return yield worker(model.uri);
        });
        const getDomNode = () => editor.getDomNode();
        const getModel = () => editor.getModel();
        const getText = () => getModel().getValue();
        const setText = (text) => getModel().setValue(text);
        const setupTSVFS = () => __awaiter(void 0, void 0, void 0, function* () {
            const fsMap = yield tsvfs.createDefaultMapFromCDN(compilerOptions, ts.version, true, ts, lzstring_min_1.default);
            fsMap.set(filePath.path, getText());
            const system = tsvfs.createSystem(fsMap);
            const host = tsvfs.createVirtualCompilerHost(system, compilerOptions, ts);
            const program = ts.createProgram({
                rootNames: [...fsMap.keys()],
                options: compilerOptions,
                host: host.compilerHost,
            });
            return {
                program,
                system,
                host,
                fsMap,
            };
        });
        /**
         * Creates a TS Program, if you're doing anything complex
         * it's likely you want setupTSVFS instead and can pull program out from that
         *
         * Warning: Runs on the main thread
         */
        const createTSProgram = () => __awaiter(void 0, void 0, void 0, function* () {
            const tsvfs = yield setupTSVFS();
            return tsvfs.program;
        });
        const getAST = () => __awaiter(void 0, void 0, void 0, function* () {
            const program = yield createTSProgram();
            program.emit();
            return program.getSourceFile(filePath.path);
        });
        // Pass along the supported releases for the playground
        const supportedVersions = releases_1.supportedReleases;
        return {
            /** The same config you passed in */
            config,
            /** A list of TypeScript versions you can use with the TypeScript sandbox */
            supportedVersions,
            /** The monaco editor instance */
            editor,
            /** Either "typescript" or "javascript" depending on your config */
            language,
            /** The outer monaco module, the result of require("monaco-editor")  */
            monaco,
            /** Gets a monaco-typescript worker, this will give you access to a language server. Note: prefer this for language server work because it happens on a webworker . */
            getWorkerProcess,
            /** A copy of require("@typescript/vfs") this can be used to quickly set up an in-memory compiler runs for ASTs, or to get complex language server results (anything above has to be serialized when passed)*/
            tsvfs,
            /** Get all the different emitted files after TypeScript is run */
            getEmitResult,
            /** Gets just the JavaScript for your sandbox, will transpile if in TS only */
            getRunnableJS,
            /** Gets the DTS output of the main code in the editor */
            getDTSForCode,
            /** The monaco-editor dom node, used for showing/hiding the editor */
            getDomNode,
            /** The model is an object which monaco uses to keep track of text in the editor. Use this to directly modify the text in the editor */
            getModel,
            /** Gets the text of the main model, which is the text in the editor */
            getText,
            /** Shortcut for setting the model's text content which would update the editor */
            setText,
            /** Gets the AST of the current text in monaco - uses `createTSProgram`, so the performance caveat applies there too */
            getAST,
            /** The module you get from require("typescript") */
            ts,
            /** Create a new Program, a TypeScript data model which represents the entire project. As well as some of the
             * primitive objects you would normally need to do work with the files.
             *
             * The first time this is called it has to download all the DTS files which is needed for an exact compiler run. Which
             * at max is about 1.5MB - after that subsequent downloads of dts lib files come from localStorage.
             *
             * Try to use this sparingly as it can be computationally expensive, at the minimum you should be using the debounced setup.
             *
             * TODO: It would be good to create an easy way to have a single program instance which is updated for you
             * when the monaco model changes.
             */
            setupTSVFS,
            /** Uses the above call setupTSVFS, but only returns the program */
            createTSProgram,
            /** The Sandbox's default compiler options  */
            compilerDefaults,
            /** The Sandbox's current compiler options */
            getCompilerOptions,
            /** Replace the Sandbox's compiler options */
            setCompilerSettings,
            /** Overwrite the Sandbox's compiler options */
            updateCompilerSetting,
            /** Update a single compiler option in the SAndbox */
            updateCompilerSettings,
            /** A way to get callbacks when compiler settings have changed */
            setDidUpdateCompilerSettings,
            /** A copy of lzstring, which is used to archive/unarchive code */
            lzstring: lzstring_min_1.default,
            /** Returns compiler options found in the params of the current page */
            createURLQueryWithCompilerOptions: compilerOptions_1.createURLQueryWithCompilerOptions,
            /** Returns compiler options in the source code using twoslash notation */
            getTwoSlashComplierOptions,
            /** Gets to the current monaco-language, this is how you talk to the background webworkers */
            languageServiceDefaults: defaults,
            /** The path which represents the current file using the current compiler options */
            filepath: filePath.path,
        };
    };
    exports.createTypeScriptSandbox = createTypeScriptSandbox;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zYW5kYm94L3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0RBLE1BQU0sWUFBWSxHQUFHLENBQUMsTUFBd0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBRXZHLHFFQUFxRTtJQUNyRSx3RUFBd0U7SUFDeEUsbUVBQW1FO0lBQ25FLE1BQU0sU0FBUyxHQUFHLFNBQVMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUVuRSw2Q0FBNkM7SUFDN0MsTUFBTSxtQkFBbUIsR0FBa0Q7UUFDekUsb0JBQW9CLEVBQUUsSUFBSTtRQUMxQixzQkFBc0IsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sRUFBRTtZQUNQLE9BQU8sRUFBRSxLQUFLO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxPQUFPLEVBQUUsSUFBSTtTQUNkO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsS0FBSyxFQUFFLENBQUMsU0FBUztZQUNqQixRQUFRLEVBQUUsQ0FBQyxTQUFTO1lBQ3BCLE9BQU8sRUFBRSxDQUFDLFNBQVM7U0FDcEI7UUFDRCxpQ0FBaUMsRUFBRSxDQUFDLFNBQVM7UUFDN0MsdUJBQXVCLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSztRQUNsRCxvQkFBb0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO0tBQ2hELENBQUE7SUFFRCx5REFBeUQ7SUFDekQsU0FBZ0IseUJBQXlCO1FBQ3ZDLE1BQU0sTUFBTSxHQUFxQjtZQUMvQixJQUFJLEVBQUUsRUFBRTtZ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SUFDSCxDQUFDLENBQUE7SUF0UlksUUFBQSx1QkFBdUIsMkJBc1JuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRldGVjdE5ld0ltcG9ydHNUb0FjcXVpcmVUeXBlRm9yIH0gZnJvbSBcIi4vdHlwZUFjcXVpc2l0aW9uXCJcbmltcG9ydCB7IHNhbmRib3hUaGVtZSwgc2FuZGJveFRoZW1lRGFyayB9IGZyb20gXCIuL3RoZW1lXCJcbmltcG9ydCB7IFR5cGVTY3JpcHRXb3JrZXIgfSBmcm9tIFwiLi90c1dvcmtlclwiXG5pbXBvcnQge1xuICBnZXREZWZhdWx0U2FuZGJveENvbXBpbGVyT3B0aW9ucyxcbiAgZ2V0Q29tcGlsZXJPcHRpb25zRnJvbVBhcmFtcyxcbiAgY3JlYXRlVVJMUXVlcnlXaXRoQ29tcGlsZXJPcHRpb25zLFxufSBmcm9tIFwiLi9jb21waWxlck9wdGlvbnNcIlxuaW1wb3J0IGx6c3RyaW5nIGZyb20gXCIuL3ZlbmRvci9senN0cmluZy5taW5cIlxuaW1wb3J0IHsgc3VwcG9ydGVkUmVsZWFzZXMgfSBmcm9tIFwiLi9yZWxlYXNlc1wiXG5pbXBvcnQgeyBnZXRJbml0aWFsQ29kZSB9IGZyb20gXCIuL2dldEluaXRpYWxDb2RlXCJcbmltcG9ydCB7IGV4dHJhY3RUd29TbGFzaENvbXBsaWVyT3B0aW9ucyB9IGZyb20gXCIuL3R3b3NsYXNoU3VwcG9ydFwiXG5pbXBvcnQgKiBhcyB0c3ZmcyBmcm9tIFwiLi92ZW5kb3IvdHlwZXNjcmlwdC12ZnNcIlxuXG50eXBlIENvbXBpbGVyT3B0aW9ucyA9IGltcG9ydChcIm1vbmFjby1lZGl0b3JcIikubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuQ29tcGlsZXJPcHRpb25zXG50eXBlIE1vbmFjbyA9IHR5cGVvZiBpbXBvcnQoXCJtb25hY28tZWRpdG9yXCIpXG5cbi8qKlxuICogVGhlc2UgYXJlIHNldHRpbmdzIGZvciB0aGUgcGxheWdyb3VuZCB3aGljaCBhcmUgdGhlIGVxdWl2YWxlbnQgdG8gcHJvcHMgaW4gUmVhY3RcbiAqIGFueSBjaGFuZ2VzIHRvIGl0IHNob3VsZCByZXF1aXJlIGEgbmV3IHNldHVwIG9mIHRoZSBwbGF5Z3JvdW5kXG4gKi9cbmV4cG9ydCB0eXBlIFBsYXlncm91bmRDb25maWcgPSB7XG4gIC8qKiBUaGUgZGVmYXVsdCBzb3VyY2UgY29kZSBmb3IgdGhlIHBsYXlncm91bmQgKi9cbiAgdGV4dDogc3RyaW5nXG4gIC8qKiBTaG91bGQgaXQgcnVuIHRoZSB0cyBvciBqcyBJREUgc2VydmljZXMgKi9cbiAgdXNlSmF2YVNjcmlwdDogYm9vbGVhblxuICAvKiogQ29tcGlsZXIgb3B0aW9ucyB3aGljaCBhcmUgYXV0b21hdGljYWxseSBqdXN0IGZvcndhcmRlZCBvbiAqL1xuICBjb21waWxlck9wdGlvbnM6IENvbXBpbGVyT3B0aW9uc1xuICAvKiogT3B0aW9uYWwgbW9uYWNvIHNldHRpbmdzIG92ZXJyaWRlcyAqL1xuICBtb25hY29TZXR0aW5ncz86IGltcG9ydChcIm1vbmFjby1lZGl0b3JcIikuZWRpdG9yLklFZGl0b3JPcHRpb25zXG4gIC8qKiBBY3F1aXJlIHR5cGVzIHZpYSB0eXBlIGFjcXVpc2l0aW9uICovXG4gIGFjcXVpcmVUeXBlczogYm9vbGVhblxuICAvKiogU3VwcG9ydCB0d29zbGFzaCBjb21waWxlciBvcHRpb25zICovXG4gIHN1cHBvcnRUd29zbGFzaENvbXBpbGVyT3B0aW9uczogYm9vbGVhblxuICAvKiogR2V0IHRoZSB0ZXh0IHZpYSBxdWVyeSBwYXJhbXMgYW5kIGxvY2FsIHN0b3JhZ2UsIHVzZWZ1bCB3aGVuIHRoZSBlZGl0b3IgaXMgdGhlIG1haW4gZXhwZXJpZW5jZSAqL1xuICBzdXBwcmVzc0F1dG9tYXRpY2FsbHlHZXR0aW5nRGVmYXVsdFRleHQ/OiB0cnVlXG4gIC8qKiBTdXBwcmVzcyBzZXR0aW5nIGNvbXBpbGVyIG9wdGlvbnMgZnJvbSB0aGUgY29tcGlsZXIgZmxhZ3MgZnJvbSBxdWVyeSBwYXJhbXMgKi9cbiAgc3VwcHJlc3NBdXRvbWF0aWNhbGx5R2V0dGluZ0NvbXBpbGVyRmxhZ3M/OiB0cnVlXG4gIC8qKiBMb2dnaW5nIHN5c3RlbSAqL1xuICBsb2dnZXI6IHtcbiAgICBsb2c6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuICAgIGVycm9yOiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbiAgICBncm91cENvbGxhcHNlZDogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG4gICAgZ3JvdXBFbmQ6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuICB9XG59ICYgKFxuICB8IHsgLyoqIHRoZUlEIG9mIGEgZG9tIG5vZGUgdG8gYWRkIG1vbmFjbyB0byAqLyBkb21JRDogc3RyaW5nIH1cbiAgfCB7IC8qKiB0aGVJRCBvZiBhIGRvbSBub2RlIHRvIGFkZCBtb25hY28gdG8gKi8gZWxlbWVudFRvQXBwZW5kOiBIVE1MRWxlbWVudCB9XG4pXG5cbmNvbnN0IGxhbmd1YWdlVHlwZSA9IChjb25maWc6IFBsYXlncm91bmRDb25maWcpID0+IChjb25maWcudXNlSmF2YVNjcmlwdCA/IFwiamF2YXNjcmlwdFwiIDogXCJ0eXBlc2NyaXB0XCIpXG5cbi8vIEJhc2ljYWxseSBhbmRyb2lkIGFuZCBtb25hY28gaXMgcHJldHR5IGJhZCwgdGhpcyBtYWtlcyBpdCBsZXNzIGJhZFxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvcHh0L3B1bGwvNzA5OSBmb3IgdGhpcywgYW5kIHRoZSBsb25nXG4vLyByZWFkIGlzIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvbW9uYWNvLWVkaXRvci9pc3N1ZXMvNTYzXG5jb25zdCBpc0FuZHJvaWQgPSBuYXZpZ2F0b3IgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG5cbi8qKiBEZWZhdWx0IE1vbmFjbyBzZXR0aW5ncyBmb3IgcGxheWdyb3VuZCAqL1xuY29uc3Qgc2hhcmVkRWRpdG9yT3B0aW9uczogaW1wb3J0KFwibW9uYWNvLWVkaXRvclwiKS5lZGl0b3IuSUVkaXRvck9wdGlvbnMgPSB7XG4gIHNjcm9sbEJleW9uZExhc3RMaW5lOiB0cnVlLFxuICBzY3JvbGxCZXlvbmRMYXN0Q29sdW1uOiAzLFxuICBtaW5pbWFwOiB7XG4gICAgZW5hYmxlZDogZmFsc2UsXG4gIH0sXG4gIGxpZ2h0YnVsYjoge1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gIH0sXG4gIHF1aWNrU3VnZ2VzdGlvbnM6IHtcbiAgICBvdGhlcjogIWlzQW5kcm9pZCxcbiAgICBjb21tZW50czogIWlzQW5kcm9pZCxcbiAgICBzdHJpbmdzOiAhaXNBbmRyb2lkLFxuICB9LFxuICBhY2NlcHRTdWdnZXN0aW9uT25Db21taXRDaGFyYWN0ZXI6ICFpc0FuZHJvaWQsXG4gIGFjY2VwdFN1Z2dlc3Rpb25PbkVudGVyOiAhaXNBbmRyb2lkID8gXCJvblwiIDogXCJvZmZcIixcbiAgYWNjZXNzaWJpbGl0eVN1cHBvcnQ6ICFpc0FuZHJvaWQgPyBcIm9uXCIgOiBcIm9mZlwiLFxufVxuXG4vKiogVGhlIGRlZmF1bHQgc2V0dGluZ3Mgd2hpY2ggd2UgYXBwbHkgYSBwYXJ0aWFsIG92ZXIgKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UGxheWdyb3VuZFNldHRpbmdzKCkge1xuICBjb25zdCBjb25maWc6IFBsYXlncm91bmRDb25maWcgPSB7XG4gICAgdGV4dDogXCJcIixcbiAgICBkb21JRDogXCJcIixcbiAgICBjb21waWxlck9wdGlvbnM6IHt9LFxuICAgIGFjcXVpcmVUeXBlczogdHJ1ZSxcbiAgICB1c2VKYXZhU2NyaXB0OiBmYWxzZSxcbiAgICBzdXBwb3J0VHdvc2xhc2hDb21waWxlck9wdGlvbnM6IGZhbHNlLFxuICAgIGxvZ2dlcjogY29uc29sZSxcbiAgfVxuICByZXR1cm4gY29uZmlnXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRGaWxlUGF0aChjb25maWc6IFBsYXlncm91bmRDb25maWcsIGNvbXBpbGVyT3B0aW9uczogQ29tcGlsZXJPcHRpb25zLCBtb25hY286IE1vbmFjbykge1xuICBjb25zdCBpc0pTWCA9IGNvbXBpbGVyT3B0aW9ucy5qc3ggIT09IG1vbmFjby5sYW5ndWFnZXMudHlwZXNjcmlwdC5Kc3hFbWl0Lk5vbmVcbiAgY29uc3QgZmlsZUV4dCA9IGNvbmZpZy51c2VKYXZhU2NyaXB0ID8gXCJqc1wiIDogXCJ0c1wiXG4gIGNvbnN0IGV4dCA9IGlzSlNYID8gZmlsZUV4dCArIFwieFwiIDogZmlsZUV4dFxuICByZXR1cm4gXCJpbnB1dC5cIiArIGV4dFxufVxuXG4vKiogQ3JlYXRlcyBhIG1vbmFjbyBmaWxlIHJlZmVyZW5jZSwgYmFzaWNhbGx5IGEgZmFuY3kgcGF0aCAqL1xuZnVuY3Rpb24gY3JlYXRlRmlsZVVyaShjb25maWc6IFBsYXlncm91bmRDb25maWcsIGNvbXBpbGVyT3B0aW9uczogQ29tcGlsZXJPcHRpb25zLCBtb25hY286IE1vbmFjbykge1xuICByZXR1cm4gbW9uYWNvLlVyaS5maWxlKGRlZmF1bHRGaWxlUGF0aChjb25maWcsIGNvbXBpbGVyT3B0aW9ucywgbW9uYWNvKSlcbn1cblxuLyoqIENyZWF0ZXMgYSBzYW5kYm94IGVkaXRvciwgYW5kIHJldHVybnMgYSBzZXQgb2YgdXNlZnVsIGZ1bmN0aW9ucyBhbmQgdGhlIGVkaXRvciAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVR5cGVTY3JpcHRTYW5kYm94ID0gKFxuICBwYXJ0aWFsQ29uZmlnOiBQYXJ0aWFsPFBsYXlncm91bmRDb25maWc+LFxuICBtb25hY286IE1vbmFjbyxcbiAgdHM6IHR5cGVvZiBpbXBvcnQoXCJ0eXBlc2NyaXB0XCIpXG4pID0+IHtcbiAgY29uc3QgY29uZmlnID0geyAuLi5kZWZhdWx0UGxheWdyb3VuZFNldHRpbmdzKCksIC4uLnBhcnRpYWxDb25maWcgfVxuICBpZiAoIShcImRvbUlEXCIgaW4gY29uZmlnKSAmJiAhKFwiZWxlbWVudFRvQXBwZW5kXCIgaW4gY29uZmlnKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgZGlkIG5vdCBwcm92aWRlIGEgZG9tSUQgb3IgZWxlbWVudFRvQXBwZW5kXCIpXG5cbiAgY29uc3QgZGVmYXVsdFRleHQgPSBjb25maWcuc3VwcHJlc3NBdXRvbWF0aWNhbGx5R2V0dGluZ0RlZmF1bHRUZXh0XG4gICAgPyBjb25maWcudGV4dFxuICAgIDogZ2V0SW5pdGlhbENvZGUoY29uZmlnLnRleHQsIGRvY3VtZW50LmxvY2F0aW9uKVxuXG4gIC8vIERlZmF1bHRzXG4gIGNvbnN0IGNvbXBpbGVyRGVmYXVsdHMgPSBnZXREZWZhdWx0U2FuZGJveENvbXBpbGVyT3B0aW9ucyhjb25maWcsIG1vbmFjbylcblxuICAvLyBHcmFiIHRoZSBjb21waWxlciBmbGFncyB2aWEgdGhlIHF1ZXJ5IHBhcmFtc1xuICBsZXQgY29tcGlsZXJPcHRpb25zOiBDb21waWxlck9wdGlvbnNcbiAgaWYgKCFjb25maWcuc3VwcHJlc3NBdXRvbWF0aWNhbGx5R2V0dGluZ0NvbXBpbGVyRmxhZ3MpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcbiAgICBsZXQgcXVlcnlQYXJhbUNvbXBpbGVyT3B0aW9ucyA9IGdldENvbXBpbGVyT3B0aW9uc0Zyb21QYXJhbXMoY29tcGlsZXJEZWZhdWx0cywgcGFyYW1zKVxuICAgIGlmIChPYmplY3Qua2V5cyhxdWVyeVBhcmFtQ29tcGlsZXJPcHRpb25zKS5sZW5ndGgpXG4gICAgICBjb25maWcubG9nZ2VyLmxvZyhcIltDb21waWxlcl0gRm91bmQgY29tcGlsZXIgb3B0aW9ucyBpbiBxdWVyeSBwYXJhbXM6IFwiLCBxdWVyeVBhcmFtQ29tcGlsZXJPcHRpb25zKVxuICAgIGNvbXBpbGVyT3B0aW9ucyA9IHsgLi4uY29tcGlsZXJEZWZhdWx0cywgLi4ucXVlcnlQYXJhbUNvbXBpbGVyT3B0aW9ucyB9XG4gIH0gZWxzZSB7XG4gICAgY29tcGlsZXJPcHRpb25zID0gY29tcGlsZXJEZWZhdWx0c1xuICB9XG5cbiAgY29uc3QgbGFuZ3VhZ2UgPSBsYW5ndWFnZVR5cGUoY29uZmlnKVxuICBjb25zdCBmaWxlUGF0aCA9IGNyZWF0ZUZpbGVVcmkoY29uZmlnLCBjb21waWxlck9wdGlvbnMsIG1vbmFjbylcbiAgY29uc3QgZWxlbWVudCA9IFwiZG9tSURcIiBpbiBjb25maWcgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZG9tSUQpIDogKGNvbmZpZyBhcyBhbnkpLmVsZW1lbnRUb0FwcGVuZFxuXG4gIGNvbnN0IG1vZGVsID0gbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbChkZWZhdWx0VGV4dCwgbGFuZ3VhZ2UsIGZpbGVQYXRoKVxuICBtb25hY28uZWRpdG9yLmRlZmluZVRoZW1lKFwic2FuZGJveFwiLCBzYW5kYm94VGhlbWUpXG4gIG1vbmFjby5lZGl0b3IuZGVmaW5lVGhlbWUoXCJzYW5kYm94LWRhcmtcIiwgc2FuZGJveFRoZW1lRGFyaylcbiAgbW9uYWNvLmVkaXRvci5zZXRUaGVtZShcInNhbmRib3hcIilcblxuICBjb25zdCBtb25hY29TZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oeyBtb2RlbCB9LCBzaGFyZWRFZGl0b3JPcHRpb25zLCBjb25maWcubW9uYWNvU2V0dGluZ3MgfHwge30pXG4gIGNvbnN0IGVkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlKGVsZW1lbnQsIG1vbmFjb1NldHRpbmdzKVxuXG4gIGNvbnN0IGdldFdvcmtlciA9IGNvbmZpZy51c2VKYXZhU2NyaXB0XG4gICAgPyBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuZ2V0SmF2YVNjcmlwdFdvcmtlclxuICAgIDogbW9uYWNvLmxhbmd1YWdlcy50eXBlc2NyaXB0LmdldFR5cGVTY3JpcHRXb3JrZXJcblxuICBjb25zdCBkZWZhdWx0cyA9IGNvbmZpZy51c2VKYXZhU2NyaXB0XG4gICAgPyBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuamF2YXNjcmlwdERlZmF1bHRzXG4gICAgOiBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQudHlwZXNjcmlwdERlZmF1bHRzXG5cbiAgZGVmYXVsdHMuc2V0RGlhZ25vc3RpY3NPcHRpb25zKHtcbiAgICAuLi5kZWZhdWx0cy5nZXREaWFnbm9zdGljc09wdGlvbnMoKSxcbiAgICBub1NlbWFudGljVmFsaWRhdGlvbjogZmFsc2UsXG4gICAgLy8gVGhpcyBpcyB3aGVuIHRzbGliIGlzIG5vdCBmb3VuZFxuICAgIGRpYWdub3N0aWNDb2Rlc1RvSWdub3JlOiBbMjM1NF0sXG4gIH0pXG5cbiAgLy8gSW4gdGhlIGZ1dHVyZSBpdCdkIGJlIGdvb2QgdG8gYWRkIHN1cHBvcnQgZm9yIGFuICdhZGQgbWFueSBmaWxlcydcbiAgY29uc3QgYWRkTGlicmFyeVRvUnVudGltZSA9IChjb2RlOiBzdHJpbmcsIHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGRlZmF1bHRzLmFkZEV4dHJhTGliKGNvZGUsIHBhdGgpXG4gICAgY29uc3QgdXJpID0gbW9uYWNvLlVyaS5maWxlKHBhdGgpXG4gICAgaWYgKG1vbmFjby5lZGl0b3IuZ2V0TW9kZWwodXJpKSA9PT0gbnVsbCkge1xuICAgICAgbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbChjb2RlLCBcImphdmFzY3JpcHRcIiwgdXJpKVxuICAgIH1cbiAgICBjb25maWcubG9nZ2VyLmxvZyhgW0FUQV0gQWRkaW5nICR7cGF0aH0gdG8gcnVudGltZWApXG4gIH1cblxuICBjb25zdCBnZXRUd29TbGFzaENvbXBsaWVyT3B0aW9ucyA9IGV4dHJhY3RUd29TbGFzaENvbXBsaWVyT3B0aW9ucyh0cylcblxuICAvLyBUaGVuIHVwZGF0ZSBpdCB3aGVuIHRoZSBtb2RlbCBjaGFuZ2VzLCBwZXJoYXBzIHRoaXMgY291bGQgYmUgYSBkZWJvdW5jZWQgcGx1Z2luIGluc3RlYWQgaW4gdGhlIGZ1dHVyZT9cbiAgZWRpdG9yLm9uRGlkQ2hhbmdlTW9kZWxDb250ZW50KCgpID0+IHtcbiAgICBjb25zdCBjb2RlID0gZWRpdG9yLmdldE1vZGVsKCkhLmdldFZhbHVlKClcblxuICAgIGlmIChjb25maWcuc3VwcG9ydFR3b3NsYXNoQ29tcGlsZXJPcHRpb25zKSB7XG4gICAgICBjb25zdCBjb25maWdPcHRzID0gZ2V0VHdvU2xhc2hDb21wbGllck9wdGlvbnMoY29kZSlcbiAgICAgIHVwZGF0ZUNvbXBpbGVyU2V0dGluZ3MoY29uZmlnT3B0cylcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmFjcXVpcmVUeXBlcykge1xuICAgICAgZGV0ZWN0TmV3SW1wb3J0c1RvQWNxdWlyZVR5cGVGb3IoY29kZSwgYWRkTGlicmFyeVRvUnVudGltZSwgd2luZG93LmZldGNoLmJpbmQod2luZG93KSwgY29uZmlnKVxuICAgIH1cbiAgfSlcblxuICBjb25maWcubG9nZ2VyLmxvZyhcIltDb21waWxlcl0gU2V0IGNvbXBpbGVyIG9wdGlvbnM6IFwiLCBjb21waWxlck9wdGlvbnMpXG4gIGRlZmF1bHRzLnNldENvbXBpbGVyT3B0aW9ucyhjb21waWxlck9wdGlvbnMpXG5cbiAgLy8gR3JhYiB0eXBlcyBsYXN0IHNvIHRoYXQgaXQgbG9ncyBpbiBhIGxvZ2ljYWwgd2F5XG4gIGlmIChjb25maWcuYWNxdWlyZVR5cGVzKSB7XG4gICAgLy8gVGFrZSB0aGUgY29kZSBmcm9tIHRoZSBlZGl0b3IgcmlnaHQgYXdheVxuICAgIGNvbnN0IGNvZGUgPSBlZGl0b3IuZ2V0TW9kZWwoKSEuZ2V0VmFsdWUoKVxuICAgIGRldGVjdE5ld0ltcG9ydHNUb0FjcXVpcmVUeXBlRm9yKGNvZGUsIGFkZExpYnJhcnlUb1J1bnRpbWUsIHdpbmRvdy5mZXRjaC5iaW5kKHdpbmRvdyksIGNvbmZpZylcbiAgfVxuXG4gIC8vIFRvIGxldCBjbGllbnRzIHBsdWcgaW50byBjb21waWxlciBzZXR0aW5ncyBjaGFuZ2VzXG4gIGxldCBkaWRVcGRhdGVDb21waWxlclNldHRpbmdzID0gKG9wdHM6IENvbXBpbGVyT3B0aW9ucykgPT4ge31cblxuICBjb25zdCB1cGRhdGVDb21waWxlclNldHRpbmdzID0gKG9wdHM6IENvbXBpbGVyT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG5ld0tleXMgPSBPYmplY3Qua2V5cyhvcHRzKVxuICAgIGlmICghbmV3S2V5cy5sZW5ndGgpIHJldHVyblxuXG4gICAgLy8gRG9uJ3QgdXBkYXRlIGEgY29tcGlsZXIgc2V0dGluZyBpZiBpdCdzIHRoZSBzYW1lXG4gICAgLy8gYXMgdGhlIGN1cnJlbnQgc2V0dGluZ1xuICAgIG5ld0tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKGNvbXBpbGVyT3B0aW9uc1trZXldID09IG9wdHNba2V5XSkgZGVsZXRlIG9wdHNba2V5XVxuICAgIH0pXG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKG9wdHMpLmxlbmd0aCkgcmV0dXJuXG5cbiAgICBjb25maWcubG9nZ2VyLmxvZyhcIltDb21waWxlcl0gVXBkYXRpbmcgY29tcGlsZXIgb3B0aW9uczogXCIsIG9wdHMpXG5cbiAgICBjb21waWxlck9wdGlvbnMgPSB7IC4uLmNvbXBpbGVyT3B0aW9ucywgLi4ub3B0cyB9XG4gICAgZGVmYXVsdHMuc2V0Q29tcGlsZXJPcHRpb25zKGNvbXBpbGVyT3B0aW9ucylcbiAgICBkaWRVcGRhdGVDb21waWxlclNldHRpbmdzKGNvbXBpbGVyT3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZUNvbXBpbGVyU2V0dGluZyA9IChrZXk6IGtleW9mIENvbXBpbGVyT3B0aW9ucywgdmFsdWU6IGFueSkgPT4ge1xuICAgIGNvbmZpZy5sb2dnZXIubG9nKFwiW0NvbXBpbGVyXSBTZXR0aW5nIGNvbXBpbGVyIG9wdGlvbnMgXCIsIGtleSwgXCJ0b1wiLCB2YWx1ZSlcbiAgICBjb21waWxlck9wdGlvbnNba2V5XSA9IHZhbHVlXG4gICAgZGVmYXVsdHMuc2V0Q29tcGlsZXJPcHRpb25zKGNvbXBpbGVyT3B0aW9ucylcbiAgICBkaWRVcGRhdGVDb21waWxlclNldHRpbmdzKGNvbXBpbGVyT3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHNldENvbXBpbGVyU2V0dGluZ3MgPSAob3B0czogQ29tcGlsZXJPcHRpb25zKSA9PiB7XG4gICAgY29uZmlnLmxvZ2dlci5sb2coXCJbQ29tcGlsZXJdIFNldHRpbmcgY29tcGlsZXIgb3B0aW9uczogXCIsIG9wdHMpXG4gICAgY29tcGlsZXJPcHRpb25zID0gb3B0c1xuICAgIGRlZmF1bHRzLnNldENvbXBpbGVyT3B0aW9ucyhjb21waWxlck9wdGlvbnMpXG4gICAgZGlkVXBkYXRlQ29tcGlsZXJTZXR0aW5ncyhjb21waWxlck9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBnZXRDb21waWxlck9wdGlvbnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNvbXBpbGVyT3B0aW9uc1xuICB9XG5cbiAgY29uc3Qgc2V0RGlkVXBkYXRlQ29tcGlsZXJTZXR0aW5ncyA9IChmdW5jOiAob3B0czogQ29tcGlsZXJPcHRpb25zKSA9PiB2b2lkKSA9PiB7XG4gICAgZGlkVXBkYXRlQ29tcGlsZXJTZXR0aW5ncyA9IGZ1bmNcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSByZXN1bHRzIG9mIGNvbXBpbGluZyB5b3VyIGVkaXRvcidzIGNvZGUgKi9cbiAgY29uc3QgZ2V0RW1pdFJlc3VsdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtb2RlbCA9IGVkaXRvci5nZXRNb2RlbCgpIVxuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgZ2V0V29ya2VyUHJvY2VzcygpXG4gICAgcmV0dXJuIGF3YWl0IGNsaWVudC5nZXRFbWl0T3V0cHV0KG1vZGVsLnVyaS50b1N0cmluZygpKVxuICB9XG5cbiAgLyoqIEdldHMgdGhlIEpTICBvZiBjb21waWxpbmcgeW91ciBlZGl0b3IncyBjb2RlICovXG4gIGNvbnN0IGdldFJ1bm5hYmxlSlMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0RW1pdFJlc3VsdCgpXG4gICAgY29uc3QgZmlyc3RKUyA9IHJlc3VsdC5vdXRwdXRGaWxlcy5maW5kKChvOiBhbnkpID0+IG8ubmFtZS5lbmRzV2l0aChcIi5qc1wiKSB8fCBvLm5hbWUuZW5kc1dpdGgoXCIuanN4XCIpKVxuICAgIHJldHVybiAoZmlyc3RKUyAmJiBmaXJzdEpTLnRleHQpIHx8IFwiXCJcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBEVFMgZm9yIHRoZSBKUy9UUyAgb2YgY29tcGlsaW5nIHlvdXIgZWRpdG9yJ3MgY29kZSAqL1xuICBjb25zdCBnZXREVFNGb3JDb2RlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEVtaXRSZXN1bHQoKVxuICAgIHJldHVybiByZXN1bHQub3V0cHV0RmlsZXMuZmluZCgobzogYW55KSA9PiBvLm5hbWUuZW5kc1dpdGgoXCIuZC50c1wiKSkhLnRleHRcbiAgfVxuXG4gIGNvbnN0IGdldFdvcmtlclByb2Nlc3MgPSBhc3luYyAoKTogUHJvbWlzZTxUeXBlU2NyaXB0V29ya2VyPiA9PiB7XG4gICAgY29uc3Qgd29ya2VyID0gYXdhaXQgZ2V0V29ya2VyKClcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIGF3YWl0IHdvcmtlcihtb2RlbC51cmkpXG4gIH1cblxuICBjb25zdCBnZXREb21Ob2RlID0gKCkgPT4gZWRpdG9yLmdldERvbU5vZGUoKSFcbiAgY29uc3QgZ2V0TW9kZWwgPSAoKSA9PiBlZGl0b3IuZ2V0TW9kZWwoKSFcbiAgY29uc3QgZ2V0VGV4dCA9ICgpID0+IGdldE1vZGVsKCkuZ2V0VmFsdWUoKVxuICBjb25zdCBzZXRUZXh0ID0gKHRleHQ6IHN0cmluZykgPT4gZ2V0TW9kZWwoKS5zZXRWYWx1ZSh0ZXh0KVxuXG4gIGNvbnN0IHNldHVwVFNWRlMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZnNNYXAgPSBhd2FpdCB0c3Zmcy5jcmVhdGVEZWZhdWx0TWFwRnJvbUNETihjb21waWxlck9wdGlvbnMsIHRzLnZlcnNpb24sIHRydWUsIHRzLCBsenN0cmluZylcbiAgICBmc01hcC5zZXQoZmlsZVBhdGgucGF0aCwgZ2V0VGV4dCgpKVxuXG4gICAgY29uc3Qgc3lzdGVtID0gdHN2ZnMuY3JlYXRlU3lzdGVtKGZzTWFwKVxuICAgIGNvbnN0IGhvc3QgPSB0c3Zmcy5jcmVhdGVWaXJ0dWFsQ29tcGlsZXJIb3N0KHN5c3RlbSwgY29tcGlsZXJPcHRpb25zLCB0cylcblxuICAgIGNvbnN0IHByb2dyYW0gPSB0cy5jcmVhdGVQcm9ncmFtKHtcbiAgICAgIHJvb3ROYW1lczogWy4uLmZzTWFwLmtleXMoKV0sXG4gICAgICBvcHRpb25zOiBjb21waWxlck9wdGlvbnMsXG4gICAgICBob3N0OiBob3N0LmNvbXBpbGVySG9zdCxcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2dyYW0sXG4gICAgICBzeXN0ZW0sXG4gICAgICBob3N0LFxuICAgICAgZnNNYXAsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBUUyBQcm9ncmFtLCBpZiB5b3UncmUgZG9pbmcgYW55dGhpbmcgY29tcGxleFxuICAgKiBpdCdzIGxpa2VseSB5b3Ugd2FudCBzZXR1cFRTVkZTIGluc3RlYWQgYW5kIGNhbiBwdWxsIHByb2dyYW0gb3V0IGZyb20gdGhhdFxuICAgKlxuICAgKiBXYXJuaW5nOiBSdW5zIG9uIHRoZSBtYWluIHRocmVhZFxuICAgKi9cbiAgY29uc3QgY3JlYXRlVFNQcm9ncmFtID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRzdmZzID0gYXdhaXQgc2V0dXBUU1ZGUygpXG4gICAgcmV0dXJuIHRzdmZzLnByb2dyYW1cbiAgfVxuXG4gIGNvbnN0IGdldEFTVCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm9ncmFtID0gYXdhaXQgY3JlYXRlVFNQcm9ncmFtKClcbiAgICBwcm9ncmFtLmVtaXQoKVxuICAgIHJldHVybiBwcm9ncmFtLmdldFNvdXJjZUZpbGUoZmlsZVBhdGgucGF0aCkhXG4gIH1cblxuICAvLyBQYXNzIGFsb25nIHRoZSBzdXBwb3J0ZWQgcmVsZWFzZXMgZm9yIHRoZSBwbGF5Z3JvdW5kXG4gIGNvbnN0IHN1cHBvcnRlZFZlcnNpb25zID0gc3VwcG9ydGVkUmVsZWFzZXNcblxuICByZXR1cm4ge1xuICAgIC8qKiBUaGUgc2FtZSBjb25maWcgeW91IHBhc3NlZCBpbiAqL1xuICAgIGNvbmZpZyxcbiAgICAvKiogQSBsaXN0IG9mIFR5cGVTY3JpcHQgdmVyc2lvbnMgeW91IGNhbiB1c2Ugd2l0aCB0aGUgVHlwZVNjcmlwdCBzYW5kYm94ICovXG4gICAgc3VwcG9ydGVkVmVyc2lvbnMsXG4gICAgLyoqIFRoZSBtb25hY28gZWRpdG9yIGluc3RhbmNlICovXG4gICAgZWRpdG9yLFxuICAgIC8qKiBFaXRoZXIgXCJ0eXBlc2NyaXB0XCIgb3IgXCJqYXZhc2NyaXB0XCIgZGVwZW5kaW5nIG9uIHlvdXIgY29uZmlnICovXG4gICAgbGFuZ3VhZ2UsXG4gICAgLyoqIFRoZSBvdXRlciBtb25hY28gbW9kdWxlLCB0aGUgcmVzdWx0IG9mIHJlcXVpcmUoXCJtb25hY28tZWRpdG9yXCIpICAqL1xuICAgIG1vbmFjbyxcbiAgICAvKiogR2V0cyBhIG1vbmFjby10eXBlc2NyaXB0IHdvcmtlciwgdGhpcyB3aWxsIGdpdmUgeW91IGFjY2VzcyB0byBhIGxhbmd1YWdlIHNlcnZlci4gTm90ZTogcHJlZmVyIHRoaXMgZm9yIGxhbmd1YWdlIHNlcnZlciB3b3JrIGJlY2F1c2UgaXQgaGFwcGVucyBvbiBhIHdlYndvcmtlciAuICovXG4gICAgZ2V0V29ya2VyUHJvY2VzcyxcbiAgICAvKiogQSBjb3B5IG9mIHJlcXVpcmUoXCJAdHlwZXNjcmlwdC92ZnNcIikgdGhpcyBjYW4gYmUgdXNlZCB0byBxdWlja2x5IHNldCB1cCBhbiBpbi1tZW1vcnkgY29tcGlsZXIgcnVucyBmb3IgQVNUcywgb3IgdG8gZ2V0IGNvbXBsZXggbGFuZ3VhZ2Ugc2VydmVyIHJlc3VsdHMgKGFueXRoaW5nIGFib3ZlIGhhcyB0byBiZSBzZXJpYWxpemVkIHdoZW4gcGFzc2VkKSovXG4gICAgdHN2ZnMsXG4gICAgLyoqIEdldCBhbGwgdGhlIGRpZmZlcmVudCBlbWl0dGVkIGZpbGVzIGFmdGVyIFR5cGVTY3JpcHQgaXMgcnVuICovXG4gICAgZ2V0RW1pdFJlc3VsdCxcbiAgICAvKiogR2V0cyBqdXN0IHRoZSBKYXZhU2NyaXB0IGZvciB5b3VyIHNhbmRib3gsIHdpbGwgdHJhbnNwaWxlIGlmIGluIFRTIG9ubHkgKi9cbiAgICBnZXRSdW5uYWJsZUpTLFxuICAgIC8qKiBHZXRzIHRoZSBEVFMgb3V0cHV0IG9mIHRoZSBtYWluIGNvZGUgaW4gdGhlIGVkaXRvciAqL1xuICAgIGdldERUU0ZvckNvZGUsXG4gICAgLyoqIFRoZSBtb25hY28tZWRpdG9yIGRvbSBub2RlLCB1c2VkIGZvciBzaG93aW5nL2hpZGluZyB0aGUgZWRpdG9yICovXG4gICAgZ2V0RG9tTm9kZSxcbiAgICAvKiogVGhlIG1vZGVsIGlzIGFuIG9iamVjdCB3aGljaCBtb25hY28gdXNlcyB0byBrZWVwIHRyYWNrIG9mIHRleHQgaW4gdGhlIGVkaXRvci4gVXNlIHRoaXMgdG8gZGlyZWN0bHkgbW9kaWZ5IHRoZSB0ZXh0IGluIHRoZSBlZGl0b3IgKi9cbiAgICBnZXRNb2RlbCxcbiAgICAvKiogR2V0cyB0aGUgdGV4dCBvZiB0aGUgbWFpbiBtb2RlbCwgd2hpY2ggaXMgdGhlIHRleHQgaW4gdGhlIGVkaXRvciAqL1xuICAgIGdldFRleHQsXG4gICAgLyoqIFNob3J0Y3V0IGZvciBzZXR0aW5nIHRoZSBtb2RlbCdzIHRleHQgY29udGVudCB3aGljaCB3b3VsZCB1cGRhdGUgdGhlIGVkaXRvciAqL1xuICAgIHNldFRleHQsXG4gICAgLyoqIEdldHMgdGhlIEFTVCBvZiB0aGUgY3VycmVudCB0ZXh0IGluIG1vbmFjbyAtIHVzZXMgYGNyZWF0ZVRTUHJvZ3JhbWAsIHNvIHRoZSBwZXJmb3JtYW5jZSBjYXZlYXQgYXBwbGllcyB0aGVyZSB0b28gKi9cbiAgICBnZXRBU1QsXG4gICAgLyoqIFRoZSBtb2R1bGUgeW91IGdldCBmcm9tIHJlcXVpcmUoXCJ0eXBlc2NyaXB0XCIpICovXG4gICAgdHMsXG4gICAgLyoqIENyZWF0ZSBhIG5ldyBQcm9ncmFtLCBhIFR5cGVTY3JpcHQgZGF0YSBtb2RlbCB3aGljaCByZXByZXNlbnRzIHRoZSBlbnRpcmUgcHJvamVjdC4gQXMgd2VsbCBhcyBzb21lIG9mIHRoZVxuICAgICAqIHByaW1pdGl2ZSBvYmplY3RzIHlvdSB3b3VsZCBub3JtYWxseSBuZWVkIHRvIGRvIHdvcmsgd2l0aCB0aGUgZmlsZXMuXG4gICAgICpcbiAgICAgKiBUaGUgZmlyc3QgdGltZSB0aGlzIGlzIGNhbGxlZCBpdCBoYXMgdG8gZG93bmxvYWQgYWxsIHRoZSBEVFMgZmlsZXMgd2hpY2ggaXMgbmVlZGVkIGZvciBhbiBleGFjdCBjb21waWxlciBydW4uIFdoaWNoXG4gICAgICogYXQgbWF4IGlzIGFib3V0IDEuNU1CIC0gYWZ0ZXIgdGhhdCBzdWJzZXF1ZW50IGRvd25sb2FkcyBvZiBkdHMgbGliIGZpbGVzIGNvbWUgZnJvbSBsb2NhbFN0b3JhZ2UuXG4gICAgICpcbiAgICAgKiBUcnkgdG8gdXNlIHRoaXMgc3BhcmluZ2x5IGFzIGl0IGNhbiBiZSBjb21wdXRhdGlvbmFsbHkgZXhwZW5zaXZlLCBhdCB0aGUgbWluaW11bSB5b3Ugc2hvdWxkIGJlIHVzaW5nIHRoZSBkZWJvdW5jZWQgc2V0dXAuXG4gICAgICpcbiAgICAgKiBUT0RPOiBJdCB3b3VsZCBiZSBnb29kIHRvIGNyZWF0ZSBhbiBlYXN5IHdheSB0byBoYXZlIGEgc2luZ2xlIHByb2dyYW0gaW5zdGFuY2Ugd2hpY2ggaXMgdXBkYXRlZCBmb3IgeW91XG4gICAgICogd2hlbiB0aGUgbW9uYWNvIG1vZGVsIGNoYW5nZXMuXG4gICAgICovXG4gICAgc2V0dXBUU1ZGUyxcbiAgICAvKiogVXNlcyB0aGUgYWJvdmUgY2FsbCBzZXR1cFRTVkZTLCBidXQgb25seSByZXR1cm5zIHRoZSBwcm9ncmFtICovXG4gICAgY3JlYXRlVFNQcm9ncmFtLFxuICAgIC8qKiBUaGUgU2FuZGJveCdzIGRlZmF1bHQgY29tcGlsZXIgb3B0aW9ucyAgKi9cbiAgICBjb21waWxlckRlZmF1bHRzLFxuICAgIC8qKiBUaGUgU2FuZGJveCdzIGN1cnJlbnQgY29tcGlsZXIgb3B0aW9ucyAqL1xuICAgIGdldENvbXBpbGVyT3B0aW9ucyxcbiAgICAvKiogUmVwbGFjZSB0aGUgU2FuZGJveCdzIGNvbXBpbGVyIG9wdGlvbnMgKi9cbiAgICBzZXRDb21waWxlclNldHRpbmdzLFxuICAgIC8qKiBPdmVyd3JpdGUgdGhlIFNhbmRib3gncyBjb21waWxlciBvcHRpb25zICovXG4gICAgdXBkYXRlQ29tcGlsZXJTZXR0aW5nLFxuICAgIC8qKiBVcGRhdGUgYSBzaW5nbGUgY29tcGlsZXIgb3B0aW9uIGluIHRoZSBTQW5kYm94ICovXG4gICAgdXBkYXRlQ29tcGlsZXJTZXR0aW5ncyxcbiAgICAvKiogQSB3YXkgdG8gZ2V0IGNhbGxiYWNrcyB3aGVuIGNvbXBpbGVyIHNldHRpbmdzIGhhdmUgY2hhbmdlZCAqL1xuICAgIHNldERpZFVwZGF0ZUNvbXBpbGVyU2V0dGluZ3MsXG4gICAgLyoqIEEgY29weSBvZiBsenN0cmluZywgd2hpY2ggaXMgdXNlZCB0byBhcmNoaXZlL3VuYXJjaGl2ZSBjb2RlICovXG4gICAgbHpzdHJpbmcsXG4gICAgLyoqIFJldHVybnMgY29tcGlsZXIgb3B0aW9ucyBmb3VuZCBpbiB0aGUgcGFyYW1zIG9mIHRoZSBjdXJyZW50IHBhZ2UgKi9cbiAgICBjcmVhdGVVUkxRdWVyeVdpdGhDb21waWxlck9wdGlvbnMsXG4gICAgLyoqIFJldHVybnMgY29tcGlsZXIgb3B0aW9ucyBpbiB0aGUgc291cmNlIGNvZGUgdXNpbmcgdHdvc2xhc2ggbm90YXRpb24gKi9cbiAgICBnZXRUd29TbGFzaENvbXBsaWVyT3B0aW9ucyxcbiAgICAvKiogR2V0cyB0byB0aGUgY3VycmVudCBtb25hY28tbGFuZ3VhZ2UsIHRoaXMgaXMgaG93IHlvdSB0YWxrIHRvIHRoZSBiYWNrZ3JvdW5kIHdlYndvcmtlcnMgKi9cbiAgICBsYW5ndWFnZVNlcnZpY2VEZWZhdWx0czogZGVmYXVsdHMsXG4gICAgLyoqIFRoZSBwYXRoIHdoaWNoIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgZmlsZSB1c2luZyB0aGUgY3VycmVudCBjb21waWxlciBvcHRpb25zICovXG4gICAgZmlsZXBhdGg6IGZpbGVQYXRoLnBhdGgsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2FuZGJveCA9IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVR5cGVTY3JpcHRTYW5kYm94PlxuIl19