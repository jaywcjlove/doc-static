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
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
    /** Default Monaco settings for playground */
    const sharedEditorOptions = {
        automaticLayout: true,
        scrollBeyondLastLine: true,
        scrollBeyondLastColumn: 3,
        minimap: {
            enabled: false,
        },
        lightbulb: {
            enabled: true,
        },
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
    exports.createTypeScriptSandbox = (partialConfig, monaco, ts) => {
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
        // In the future it'd be good to add support for an 'add many files'
        const addLibraryToRuntime = (code, path) => {
            defaults.addExtraLib(code, path);
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
            config.logger.log("[Compiler] Updating compiler options: ", opts);
            compilerOptions = Object.assign(Object.assign({}, opts), compilerOptions);
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
            if (config.useJavaScript) {
                return getText();
            }
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zYW5kYm94L3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0RBLE1BQU0sWUFBWSxHQUFHLENBQUMsTUFBd0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBRXZHLDZDQUE2QztJQUM3QyxNQUFNLG1CQUFtQixHQUFrRDtRQUN6RSxlQUFlLEVBQUUsSUFBSTtRQUNyQixvQkFBb0IsRUFBRSxJQUFJO1FBQzFCLHNCQUFzQixFQUFFLENBQUM7UUFDekIsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLEtBQUs7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNULE9BQU8sRUFBRSxJQUFJO1NBQ2Q7S0FDRixDQUFBO0lBRUQseURBQXlEO0lBQ3pELFNBQWdCLHlCQUF5QjtRQUN2QyxNQUFNLE1BQU0sR0FBcUI7WUFDL0IsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULGVBQWUsRUFBRSxFQUFFO1lBQ25CLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLDhCQUE4QixFQUFFLEtBQUs7WUFDckMsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQTtRQUNELE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQztJQVhELDhEQVdDO0lBRUQsU0FBUyxlQUFlLENBQUMsTUFBd0IsRUFBRSxlQUFnQyxFQUFFLE1BQWM7UUFDakcsTUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBO1FBQzlFLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FB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TSxpQkFBaUIsR0FBRyw0QkFBaUIsQ0FBQTtRQUUzQyxPQUFPO1lBQ0wsb0NBQW9DO1lBQ3BDLE1BQU07WUFDTiw0RUFBNEU7WUFDNUUsaUJBQWlCO1lBQ2pCLGlDQUFpQztZQUNqQyxNQUFNO1lBQ04sbUVBQW1FO1lBQ25FLFFBQVE7WUFDUix1RUFBdUU7WUFDdkUsTUFBTTtZQUNOLHNLQUFzSztZQUN0SyxnQkFBZ0I7WUFDaEIsOE1BQThNO1lBQzlNLEtBQUs7WUFDTCxrRUFBa0U7WUFDbEUsYUFBYTtZQUNiLDhFQUE4RTtZQUM5RSxhQUFhO1lBQ2IseURBQXlEO1lBQ3pELGFBQWE7WUFDYixxRUFBcUU7WUFDckUsVUFBVTtZQUNWLHVJQUF1STtZQUN2SSxRQUFRO1lBQ1IsdUVBQXVFO1lBQ3ZFLE9BQU87WUFDUCxrRkFBa0Y7WUFDbEYsT0FBTztZQUNQLHVIQUF1SDtZQUN2SCxNQUFNO1lBQ04sb0RBQW9EO1lBQ3BELEVBQUU7WUFDRjs7Ozs7Ozs7OztlQVVHO1lBQ0gsVUFBVTtZQUNWLG1FQUFtRTtZQUNuRSxlQUFlO1lBQ2YsOENBQThDO1lBQzlDLGdCQUFnQjtZQUNoQiw2Q0FBNkM7WUFDN0Msa0JBQWtCO1lBQ2xCLDZDQUE2QztZQUM3QyxtQkFBbUI7WUFDbkIsK0NBQStDO1lBQy9DLHFCQUFxQjtZQUNyQixxREFBcUQ7WUFDckQsc0JBQXNCO1lBQ3RCLGlFQUFpRTtZQUNqRSw0QkFBNEI7WUFDNUIsa0VBQWtFO1lBQ2xFLFFBQVEsRUFBUixzQkFBUTtZQUNSLHVFQUF1RTtZQUN2RSxpQ0FBaUMsRUFBakMsbURBQWlDO1lBQ2pDLDBFQUEwRTtZQUMxRSwwQkFBMEI7WUFDMUIsNkZBQTZGO1lBQzdGLHVCQUF1QixFQUFFLFFBQVE7WUFDakMsb0ZBQW9GO1lBQ3BGLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtTQUN4QixDQUFBO0lBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGV0ZWN0TmV3SW1wb3J0c1RvQWNxdWlyZVR5cGVGb3IgfSBmcm9tIFwiLi90eXBlQWNxdWlzaXRpb25cIlxuaW1wb3J0IHsgc2FuZGJveFRoZW1lLCBzYW5kYm94VGhlbWVEYXJrIH0gZnJvbSBcIi4vdGhlbWVcIlxuaW1wb3J0IHsgVHlwZVNjcmlwdFdvcmtlciB9IGZyb20gXCIuL3RzV29ya2VyXCJcbmltcG9ydCB7XG4gIGdldERlZmF1bHRTYW5kYm94Q29tcGlsZXJPcHRpb25zLFxuICBnZXRDb21waWxlck9wdGlvbnNGcm9tUGFyYW1zLFxuICBjcmVhdGVVUkxRdWVyeVdpdGhDb21waWxlck9wdGlvbnMsXG59IGZyb20gXCIuL2NvbXBpbGVyT3B0aW9uc1wiXG5pbXBvcnQgbHpzdHJpbmcgZnJvbSBcIi4vdmVuZG9yL2x6c3RyaW5nLm1pblwiXG5pbXBvcnQgeyBzdXBwb3J0ZWRSZWxlYXNlcyB9IGZyb20gXCIuL3JlbGVhc2VzXCJcbmltcG9ydCB7IGdldEluaXRpYWxDb2RlIH0gZnJvbSBcIi4vZ2V0SW5pdGlhbENvZGVcIlxuaW1wb3J0IHsgZXh0cmFjdFR3b1NsYXNoQ29tcGxpZXJPcHRpb25zIH0gZnJvbSBcIi4vdHdvc2xhc2hTdXBwb3J0XCJcbmltcG9ydCAqIGFzIHRzdmZzIGZyb20gXCIuL3ZlbmRvci90eXBlc2NyaXB0LXZmc1wiXG5cbnR5cGUgQ29tcGlsZXJPcHRpb25zID0gaW1wb3J0KFwibW9uYWNvLWVkaXRvclwiKS5sYW5ndWFnZXMudHlwZXNjcmlwdC5Db21waWxlck9wdGlvbnNcbnR5cGUgTW9uYWNvID0gdHlwZW9mIGltcG9ydChcIm1vbmFjby1lZGl0b3JcIilcblxuLyoqXG4gKiBUaGVzZSBhcmUgc2V0dGluZ3MgZm9yIHRoZSBwbGF5Z3JvdW5kIHdoaWNoIGFyZSB0aGUgZXF1aXZhbGVudCB0byBwcm9wcyBpbiBSZWFjdFxuICogYW55IGNoYW5nZXMgdG8gaXQgc2hvdWxkIHJlcXVpcmUgYSBuZXcgc2V0dXAgb2YgdGhlIHBsYXlncm91bmRcbiAqL1xuZXhwb3J0IHR5cGUgUGxheWdyb3VuZENvbmZpZyA9IHtcbiAgLyoqIFRoZSBkZWZhdWx0IHNvdXJjZSBjb2RlIGZvciB0aGUgcGxheWdyb3VuZCAqL1xuICB0ZXh0OiBzdHJpbmdcbiAgLyoqIFNob3VsZCBpdCBydW4gdGhlIHRzIG9yIGpzIElERSBzZXJ2aWNlcyAqL1xuICB1c2VKYXZhU2NyaXB0OiBib29sZWFuXG4gIC8qKiBDb21waWxlciBvcHRpb25zIHdoaWNoIGFyZSBhdXRvbWF0aWNhbGx5IGp1c3QgZm9yd2FyZGVkIG9uICovXG4gIGNvbXBpbGVyT3B0aW9uczogQ29tcGlsZXJPcHRpb25zXG4gIC8qKiBPcHRpb25hbCBtb25hY28gc2V0dGluZ3Mgb3ZlcnJpZGVzICovXG4gIG1vbmFjb1NldHRpbmdzPzogaW1wb3J0KFwibW9uYWNvLWVkaXRvclwiKS5lZGl0b3IuSUVkaXRvck9wdGlvbnNcbiAgLyoqIEFjcXVpcmUgdHlwZXMgdmlhIHR5cGUgYWNxdWlzaXRpb24gKi9cbiAgYWNxdWlyZVR5cGVzOiBib29sZWFuXG4gIC8qKiBTdXBwb3J0IHR3b3NsYXNoIGNvbXBpbGVyIG9wdGlvbnMgKi9cbiAgc3VwcG9ydFR3b3NsYXNoQ29tcGlsZXJPcHRpb25zOiBib29sZWFuXG4gIC8qKiBHZXQgdGhlIHRleHQgdmlhIHF1ZXJ5IHBhcmFtcyBhbmQgbG9jYWwgc3RvcmFnZSwgdXNlZnVsIHdoZW4gdGhlIGVkaXRvciBpcyB0aGUgbWFpbiBleHBlcmllbmNlICovXG4gIHN1cHByZXNzQXV0b21hdGljYWxseUdldHRpbmdEZWZhdWx0VGV4dD86IHRydWVcbiAgLyoqIFN1cHByZXNzIHNldHRpbmcgY29tcGlsZXIgb3B0aW9ucyBmcm9tIHRoZSBjb21waWxlciBmbGFncyBmcm9tIHF1ZXJ5IHBhcmFtcyAqL1xuICBzdXBwcmVzc0F1dG9tYXRpY2FsbHlHZXR0aW5nQ29tcGlsZXJGbGFncz86IHRydWVcbiAgLyoqIExvZ2dpbmcgc3lzdGVtICovXG4gIGxvZ2dlcjoge1xuICAgIGxvZzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG4gICAgZXJyb3I6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZFxuICAgIGdyb3VwQ29sbGFwc2VkOiAoLi4uYXJnczogYW55W10pID0+IHZvaWRcbiAgICBncm91cEVuZDogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkXG4gIH1cbn0gJiAoXG4gIHwgeyAvKiogdGhlSUQgb2YgYSBkb20gbm9kZSB0byBhZGQgbW9uYWNvIHRvICovIGRvbUlEOiBzdHJpbmcgfVxuICB8IHsgLyoqIHRoZUlEIG9mIGEgZG9tIG5vZGUgdG8gYWRkIG1vbmFjbyB0byAqLyBlbGVtZW50VG9BcHBlbmQ6IEhUTUxFbGVtZW50IH1cbilcblxuY29uc3QgbGFuZ3VhZ2VUeXBlID0gKGNvbmZpZzogUGxheWdyb3VuZENvbmZpZykgPT4gKGNvbmZpZy51c2VKYXZhU2NyaXB0ID8gXCJqYXZhc2NyaXB0XCIgOiBcInR5cGVzY3JpcHRcIilcblxuLyoqIERlZmF1bHQgTW9uYWNvIHNldHRpbmdzIGZvciBwbGF5Z3JvdW5kICovXG5jb25zdCBzaGFyZWRFZGl0b3JPcHRpb25zOiBpbXBvcnQoXCJtb25hY28tZWRpdG9yXCIpLmVkaXRvci5JRWRpdG9yT3B0aW9ucyA9IHtcbiAgYXV0b21hdGljTGF5b3V0OiB0cnVlLFxuICBzY3JvbGxCZXlvbmRMYXN0TGluZTogdHJ1ZSxcbiAgc2Nyb2xsQmV5b25kTGFzdENvbHVtbjogMyxcbiAgbWluaW1hcDoge1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICB9LFxuICBsaWdodGJ1bGI6IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICB9LFxufVxuXG4vKiogVGhlIGRlZmF1bHQgc2V0dGluZ3Mgd2hpY2ggd2UgYXBwbHkgYSBwYXJ0aWFsIG92ZXIgKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UGxheWdyb3VuZFNldHRpbmdzKCkge1xuICBjb25zdCBjb25maWc6IFBsYXlncm91bmRDb25maWcgPSB7XG4gICAgdGV4dDogXCJcIixcbiAgICBkb21JRDogXCJcIixcbiAgICBjb21waWxlck9wdGlvbnM6IHt9LFxuICAgIGFjcXVpcmVUeXBlczogdHJ1ZSxcbiAgICB1c2VKYXZhU2NyaXB0OiBmYWxzZSxcbiAgICBzdXBwb3J0VHdvc2xhc2hDb21waWxlck9wdGlvbnM6IGZhbHNlLFxuICAgIGxvZ2dlcjogY29uc29sZSxcbiAgfVxuICByZXR1cm4gY29uZmlnXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRGaWxlUGF0aChjb25maWc6IFBsYXlncm91bmRDb25maWcsIGNvbXBpbGVyT3B0aW9uczogQ29tcGlsZXJPcHRpb25zLCBtb25hY286IE1vbmFjbykge1xuICBjb25zdCBpc0pTWCA9IGNvbXBpbGVyT3B0aW9ucy5qc3ggIT09IG1vbmFjby5sYW5ndWFnZXMudHlwZXNjcmlwdC5Kc3hFbWl0Lk5vbmVcbiAgY29uc3QgZmlsZUV4dCA9IGNvbmZpZy51c2VKYXZhU2NyaXB0ID8gXCJqc1wiIDogXCJ0c1wiXG4gIGNvbnN0IGV4dCA9IGlzSlNYID8gZmlsZUV4dCArIFwieFwiIDogZmlsZUV4dFxuICByZXR1cm4gXCJpbnB1dC5cIiArIGV4dFxufVxuXG4vKiogQ3JlYXRlcyBhIG1vbmFjbyBmaWxlIHJlZmVyZW5jZSwgYmFzaWNhbGx5IGEgZmFuY3kgcGF0aCAqL1xuZnVuY3Rpb24gY3JlYXRlRmlsZVVyaShjb25maWc6IFBsYXlncm91bmRDb25maWcsIGNvbXBpbGVyT3B0aW9uczogQ29tcGlsZXJPcHRpb25zLCBtb25hY286IE1vbmFjbykge1xuICByZXR1cm4gbW9uYWNvLlVyaS5maWxlKGRlZmF1bHRGaWxlUGF0aChjb25maWcsIGNvbXBpbGVyT3B0aW9ucywgbW9uYWNvKSlcbn1cblxuLyoqIENyZWF0ZXMgYSBzYW5kYm94IGVkaXRvciwgYW5kIHJldHVybnMgYSBzZXQgb2YgdXNlZnVsIGZ1bmN0aW9ucyBhbmQgdGhlIGVkaXRvciAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVR5cGVTY3JpcHRTYW5kYm94ID0gKFxuICBwYXJ0aWFsQ29uZmlnOiBQYXJ0aWFsPFBsYXlncm91bmRDb25maWc+LFxuICBtb25hY286IE1vbmFjbyxcbiAgdHM6IHR5cGVvZiBpbXBvcnQoXCJ0eXBlc2NyaXB0XCIpXG4pID0+IHtcbiAgY29uc3QgY29uZmlnID0geyAuLi5kZWZhdWx0UGxheWdyb3VuZFNldHRpbmdzKCksIC4uLnBhcnRpYWxDb25maWcgfVxuICBpZiAoIShcImRvbUlEXCIgaW4gY29uZmlnKSAmJiAhKFwiZWxlbWVudFRvQXBwZW5kXCIgaW4gY29uZmlnKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgZGlkIG5vdCBwcm92aWRlIGEgZG9tSUQgb3IgZWxlbWVudFRvQXBwZW5kXCIpXG5cbiAgY29uc3QgZGVmYXVsdFRleHQgPSBjb25maWcuc3VwcHJlc3NBdXRvbWF0aWNhbGx5R2V0dGluZ0RlZmF1bHRUZXh0XG4gICAgPyBjb25maWcudGV4dFxuICAgIDogZ2V0SW5pdGlhbENvZGUoY29uZmlnLnRleHQsIGRvY3VtZW50LmxvY2F0aW9uKVxuXG4gIC8vIERlZmF1bHRzXG4gIGNvbnN0IGNvbXBpbGVyRGVmYXVsdHMgPSBnZXREZWZhdWx0U2FuZGJveENvbXBpbGVyT3B0aW9ucyhjb25maWcsIG1vbmFjbylcblxuICAvLyBHcmFiIHRoZSBjb21waWxlciBmbGFncyB2aWEgdGhlIHF1ZXJ5IHBhcmFtc1xuICBsZXQgY29tcGlsZXJPcHRpb25zOiBDb21waWxlck9wdGlvbnNcbiAgaWYgKCFjb25maWcuc3VwcHJlc3NBdXRvbWF0aWNhbGx5R2V0dGluZ0NvbXBpbGVyRmxhZ3MpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcbiAgICBsZXQgcXVlcnlQYXJhbUNvbXBpbGVyT3B0aW9ucyA9IGdldENvbXBpbGVyT3B0aW9uc0Zyb21QYXJhbXMoY29tcGlsZXJEZWZhdWx0cywgcGFyYW1zKVxuICAgIGlmIChPYmplY3Qua2V5cyhxdWVyeVBhcmFtQ29tcGlsZXJPcHRpb25zKS5sZW5ndGgpXG4gICAgICBjb25maWcubG9nZ2VyLmxvZyhcIltDb21waWxlcl0gRm91bmQgY29tcGlsZXIgb3B0aW9ucyBpbiBxdWVyeSBwYXJhbXM6IFwiLCBxdWVyeVBhcmFtQ29tcGlsZXJPcHRpb25zKVxuICAgIGNvbXBpbGVyT3B0aW9ucyA9IHsgLi4uY29tcGlsZXJEZWZhdWx0cywgLi4ucXVlcnlQYXJhbUNvbXBpbGVyT3B0aW9ucyB9XG4gIH0gZWxzZSB7XG4gICAgY29tcGlsZXJPcHRpb25zID0gY29tcGlsZXJEZWZhdWx0c1xuICB9XG5cbiAgY29uc3QgbGFuZ3VhZ2UgPSBsYW5ndWFnZVR5cGUoY29uZmlnKVxuICBjb25zdCBmaWxlUGF0aCA9IGNyZWF0ZUZpbGVVcmkoY29uZmlnLCBjb21waWxlck9wdGlvbnMsIG1vbmFjbylcbiAgY29uc3QgZWxlbWVudCA9IFwiZG9tSURcIiBpbiBjb25maWcgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZG9tSUQpIDogKGNvbmZpZyBhcyBhbnkpLmVsZW1lbnRUb0FwcGVuZFxuXG4gIGNvbnN0IG1vZGVsID0gbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbChkZWZhdWx0VGV4dCwgbGFuZ3VhZ2UsIGZpbGVQYXRoKVxuICBtb25hY28uZWRpdG9yLmRlZmluZVRoZW1lKFwic2FuZGJveFwiLCBzYW5kYm94VGhlbWUpXG4gIG1vbmFjby5lZGl0b3IuZGVmaW5lVGhlbWUoXCJzYW5kYm94LWRhcmtcIiwgc2FuZGJveFRoZW1lRGFyaylcbiAgbW9uYWNvLmVkaXRvci5zZXRUaGVtZShcInNhbmRib3hcIilcblxuICBjb25zdCBtb25hY29TZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oeyBtb2RlbCB9LCBzaGFyZWRFZGl0b3JPcHRpb25zLCBjb25maWcubW9uYWNvU2V0dGluZ3MgfHwge30pXG4gIGNvbnN0IGVkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlKGVsZW1lbnQsIG1vbmFjb1NldHRpbmdzKVxuXG4gIGNvbnN0IGdldFdvcmtlciA9IGNvbmZpZy51c2VKYXZhU2NyaXB0XG4gICAgPyBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuZ2V0SmF2YVNjcmlwdFdvcmtlclxuICAgIDogbW9uYWNvLmxhbmd1YWdlcy50eXBlc2NyaXB0LmdldFR5cGVTY3JpcHRXb3JrZXJcblxuICBjb25zdCBkZWZhdWx0cyA9IGNvbmZpZy51c2VKYXZhU2NyaXB0XG4gICAgPyBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuamF2YXNjcmlwdERlZmF1bHRzXG4gICAgOiBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQudHlwZXNjcmlwdERlZmF1bHRzXG5cbiAgLy8gSW4gdGhlIGZ1dHVyZSBpdCdkIGJlIGdvb2QgdG8gYWRkIHN1cHBvcnQgZm9yIGFuICdhZGQgbWFueSBmaWxlcydcbiAgY29uc3QgYWRkTGlicmFyeVRvUnVudGltZSA9IChjb2RlOiBzdHJpbmcsIHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGRlZmF1bHRzLmFkZEV4dHJhTGliKGNvZGUsIHBhdGgpXG4gICAgY29uZmlnLmxvZ2dlci5sb2coYFtBVEFdIEFkZGluZyAke3BhdGh9IHRvIHJ1bnRpbWVgKVxuICB9XG5cbiAgY29uc3QgZ2V0VHdvU2xhc2hDb21wbGllck9wdGlvbnMgPSBleHRyYWN0VHdvU2xhc2hDb21wbGllck9wdGlvbnModHMpXG5cbiAgLy8gVGhlbiB1cGRhdGUgaXQgd2hlbiB0aGUgbW9kZWwgY2hhbmdlcywgcGVyaGFwcyB0aGlzIGNvdWxkIGJlIGEgZGVib3VuY2VkIHBsdWdpbiBpbnN0ZWFkIGluIHRoZSBmdXR1cmU/XG4gIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PiB7XG4gICAgY29uc3QgY29kZSA9IGVkaXRvci5nZXRNb2RlbCgpIS5nZXRWYWx1ZSgpXG4gICAgaWYgKGNvbmZpZy5zdXBwb3J0VHdvc2xhc2hDb21waWxlck9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGNvbmZpZ09wdHMgPSBnZXRUd29TbGFzaENvbXBsaWVyT3B0aW9ucyhjb2RlKVxuICAgICAgdXBkYXRlQ29tcGlsZXJTZXR0aW5ncyhjb25maWdPcHRzKVxuICAgIH1cblxuICAgIGlmIChjb25maWcuYWNxdWlyZVR5cGVzKSB7XG4gICAgICBkZXRlY3ROZXdJbXBvcnRzVG9BY3F1aXJlVHlwZUZvcihjb2RlLCBhZGRMaWJyYXJ5VG9SdW50aW1lLCB3aW5kb3cuZmV0Y2guYmluZCh3aW5kb3cpLCBjb25maWcpXG4gICAgfVxuICB9KVxuXG4gIGNvbmZpZy5sb2dnZXIubG9nKFwiW0NvbXBpbGVyXSBTZXQgY29tcGlsZXIgb3B0aW9uczogXCIsIGNvbXBpbGVyT3B0aW9ucylcbiAgZGVmYXVsdHMuc2V0Q29tcGlsZXJPcHRpb25zKGNvbXBpbGVyT3B0aW9ucylcblxuICAvLyBHcmFiIHR5cGVzIGxhc3Qgc28gdGhhdCBpdCBsb2dzIGluIGEgbG9naWNhbCB3YXlcbiAgaWYgKGNvbmZpZy5hY3F1aXJlVHlwZXMpIHtcbiAgICAvLyBUYWtlIHRoZSBjb2RlIGZyb20gdGhlIGVkaXRvciByaWdodCBhd2F5XG4gICAgY29uc3QgY29kZSA9IGVkaXRvci5nZXRNb2RlbCgpIS5nZXRWYWx1ZSgpXG4gICAgZGV0ZWN0TmV3SW1wb3J0c1RvQWNxdWlyZVR5cGVGb3IoY29kZSwgYWRkTGlicmFyeVRvUnVudGltZSwgd2luZG93LmZldGNoLmJpbmQod2luZG93KSwgY29uZmlnKVxuICB9XG5cbiAgLy8gVG8gbGV0IGNsaWVudHMgcGx1ZyBpbnRvIGNvbXBpbGVyIHNldHRpbmdzIGNoYW5nZXNcbiAgbGV0IGRpZFVwZGF0ZUNvbXBpbGVyU2V0dGluZ3MgPSAob3B0czogQ29tcGlsZXJPcHRpb25zKSA9PiB7fVxuXG4gIGNvbnN0IHVwZGF0ZUNvbXBpbGVyU2V0dGluZ3MgPSAob3B0czogQ29tcGlsZXJPcHRpb25zKSA9PiB7XG4gICAgY29uZmlnLmxvZ2dlci5sb2coXCJbQ29tcGlsZXJdIFVwZGF0aW5nIGNvbXBpbGVyIG9wdGlvbnM6IFwiLCBvcHRzKVxuICAgIGNvbXBpbGVyT3B0aW9ucyA9IHsgLi4ub3B0cywgLi4uY29tcGlsZXJPcHRpb25zIH1cbiAgICBkZWZhdWx0cy5zZXRDb21waWxlck9wdGlvbnMoY29tcGlsZXJPcHRpb25zKVxuICAgIGRpZFVwZGF0ZUNvbXBpbGVyU2V0dGluZ3MoY29tcGlsZXJPcHRpb25zKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlQ29tcGlsZXJTZXR0aW5nID0gKGtleToga2V5b2YgQ29tcGlsZXJPcHRpb25zLCB2YWx1ZTogYW55KSA9PiB7XG4gICAgY29uZmlnLmxvZ2dlci5sb2coXCJbQ29tcGlsZXJdIFNldHRpbmcgY29tcGlsZXIgb3B0aW9ucyBcIiwga2V5LCBcInRvXCIsIHZhbHVlKVxuICAgIGNvbXBpbGVyT3B0aW9uc1trZXldID0gdmFsdWVcbiAgICBkZWZhdWx0cy5zZXRDb21waWxlck9wdGlvbnMoY29tcGlsZXJPcHRpb25zKVxuICAgIGRpZFVwZGF0ZUNvbXBpbGVyU2V0dGluZ3MoY29tcGlsZXJPcHRpb25zKVxuICB9XG5cbiAgY29uc3Qgc2V0Q29tcGlsZXJTZXR0aW5ncyA9IChvcHRzOiBDb21waWxlck9wdGlvbnMpID0+IHtcbiAgICBjb25maWcubG9nZ2VyLmxvZyhcIltDb21waWxlcl0gU2V0dGluZyBjb21waWxlciBvcHRpb25zOiBcIiwgb3B0cylcbiAgICBjb21waWxlck9wdGlvbnMgPSBvcHRzXG4gICAgZGVmYXVsdHMuc2V0Q29tcGlsZXJPcHRpb25zKGNvbXBpbGVyT3B0aW9ucylcbiAgICBkaWRVcGRhdGVDb21waWxlclNldHRpbmdzKGNvbXBpbGVyT3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IGdldENvbXBpbGVyT3B0aW9ucyA9ICgpID0+IHtcbiAgICByZXR1cm4gY29tcGlsZXJPcHRpb25zXG4gIH1cblxuICBjb25zdCBzZXREaWRVcGRhdGVDb21waWxlclNldHRpbmdzID0gKGZ1bmM6IChvcHRzOiBDb21waWxlck9wdGlvbnMpID0+IHZvaWQpID0+IHtcbiAgICBkaWRVcGRhdGVDb21waWxlclNldHRpbmdzID0gZnVuY1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIHJlc3VsdHMgb2YgY29tcGlsaW5nIHlvdXIgZWRpdG9yJ3MgY29kZSAqL1xuICBjb25zdCBnZXRFbWl0UmVzdWx0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1vZGVsID0gZWRpdG9yLmdldE1vZGVsKCkhXG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBnZXRXb3JrZXJQcm9jZXNzKClcbiAgICByZXR1cm4gYXdhaXQgY2xpZW50LmdldEVtaXRPdXRwdXQobW9kZWwudXJpLnRvU3RyaW5nKCkpXG4gIH1cblxuICAvKiogR2V0cyB0aGUgSlMgIG9mIGNvbXBpbGluZyB5b3VyIGVkaXRvcidzIGNvZGUgKi9cbiAgY29uc3QgZ2V0UnVubmFibGVKUyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoY29uZmlnLnVzZUphdmFTY3JpcHQpIHtcbiAgICAgIHJldHVybiBnZXRUZXh0KClcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRFbWl0UmVzdWx0KClcbiAgICBjb25zdCBmaXJzdEpTID0gcmVzdWx0Lm91dHB1dEZpbGVzLmZpbmQoKG86IGFueSkgPT4gby5uYW1lLmVuZHNXaXRoKFwiLmpzXCIpIHx8IG8ubmFtZS5lbmRzV2l0aChcIi5qc3hcIikpXG4gICAgcmV0dXJuIChmaXJzdEpTICYmIGZpcnN0SlMudGV4dCkgfHwgXCJcIlxuICB9XG5cbiAgLyoqIEdldHMgdGhlIERUUyBmb3IgdGhlIEpTL1RTICBvZiBjb21waWxpbmcgeW91ciBlZGl0b3IncyBjb2RlICovXG4gIGNvbnN0IGdldERUU0ZvckNvZGUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0RW1pdFJlc3VsdCgpXG4gICAgcmV0dXJuIHJlc3VsdC5vdXRwdXRGaWxlcy5maW5kKChvOiBhbnkpID0+IG8ubmFtZS5lbmRzV2l0aChcIi5kLnRzXCIpKSEudGV4dFxuICB9XG5cbiAgY29uc3QgZ2V0V29ya2VyUHJvY2VzcyA9IGFzeW5jICgpOiBQcm9taXNlPFR5cGVTY3JpcHRXb3JrZXI+ID0+IHtcbiAgICBjb25zdCB3b3JrZXIgPSBhd2FpdCBnZXRXb3JrZXIoKVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gYXdhaXQgd29ya2VyKG1vZGVsLnVyaSlcbiAgfVxuXG4gIGNvbnN0IGdldERvbU5vZGUgPSAoKSA9PiBlZGl0b3IuZ2V0RG9tTm9kZSgpIVxuICBjb25zdCBnZXRNb2RlbCA9ICgpID0+IGVkaXRvci5nZXRNb2RlbCgpIVxuICBjb25zdCBnZXRUZXh0ID0gKCkgPT4gZ2V0TW9kZWwoKS5nZXRWYWx1ZSgpXG4gIGNvbnN0IHNldFRleHQgPSAodGV4dDogc3RyaW5nKSA9PiBnZXRNb2RlbCgpLnNldFZhbHVlKHRleHQpXG5cbiAgY29uc3Qgc2V0dXBUU1ZGUyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBmc01hcCA9IGF3YWl0IHRzdmZzLmNyZWF0ZURlZmF1bHRNYXBGcm9tQ0ROKGNvbXBpbGVyT3B0aW9ucywgdHMudmVyc2lvbiwgdHJ1ZSwgdHMsIGx6c3RyaW5nKVxuICAgIGZzTWFwLnNldChmaWxlUGF0aC5wYXRoLCBnZXRUZXh0KCkpXG5cbiAgICBjb25zdCBzeXN0ZW0gPSB0c3Zmcy5jcmVhdGVTeXN0ZW0oZnNNYXApXG4gICAgY29uc3QgaG9zdCA9IHRzdmZzLmNyZWF0ZVZpcnR1YWxDb21waWxlckhvc3Qoc3lzdGVtLCBjb21waWxlck9wdGlvbnMsIHRzKVxuXG4gICAgY29uc3QgcHJvZ3JhbSA9IHRzLmNyZWF0ZVByb2dyYW0oe1xuICAgICAgcm9vdE5hbWVzOiBbLi4uZnNNYXAua2V5cygpXSxcbiAgICAgIG9wdGlvbnM6IGNvbXBpbGVyT3B0aW9ucyxcbiAgICAgIGhvc3Q6IGhvc3QuY29tcGlsZXJIb3N0LFxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvZ3JhbSxcbiAgICAgIHN5c3RlbSxcbiAgICAgIGhvc3QsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBUUyBQcm9ncmFtLCBpZiB5b3UncmUgZG9pbmcgYW55dGhpbmcgY29tcGxleFxuICAgKiBpdCdzIGxpa2VseSB5b3Ugd2FudCBzZXR1cFRTVkZTIGluc3RlYWQgYW5kIGNhbiBwdWxsIHByb2dyYW0gb3V0IGZyb20gdGhhdFxuICAgKlxuICAgKiBXYXJuaW5nOiBSdW5zIG9uIHRoZSBtYWluIHRocmVhZFxuICAgKi9cbiAgY29uc3QgY3JlYXRlVFNQcm9ncmFtID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRzdmZzID0gYXdhaXQgc2V0dXBUU1ZGUygpXG4gICAgcmV0dXJuIHRzdmZzLnByb2dyYW1cbiAgfVxuXG4gIGNvbnN0IGdldEFTVCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm9ncmFtID0gYXdhaXQgY3JlYXRlVFNQcm9ncmFtKClcbiAgICBwcm9ncmFtLmVtaXQoKVxuICAgIHJldHVybiBwcm9ncmFtLmdldFNvdXJjZUZpbGUoZmlsZVBhdGgucGF0aCkhXG4gIH1cblxuICAvLyBQYXNzIGFsb25nIHRoZSBzdXBwb3J0ZWQgcmVsZWFzZXMgZm9yIHRoZSBwbGF5Z3JvdW5kXG4gIGNvbnN0IHN1cHBvcnRlZFZlcnNpb25zID0gc3VwcG9ydGVkUmVsZWFzZXNcblxuICByZXR1cm4ge1xuICAgIC8qKiBUaGUgc2FtZSBjb25maWcgeW91IHBhc3NlZCBpbiAqL1xuICAgIGNvbmZpZyxcbiAgICAvKiogQSBsaXN0IG9mIFR5cGVTY3JpcHQgdmVyc2lvbnMgeW91IGNhbiB1c2Ugd2l0aCB0aGUgVHlwZVNjcmlwdCBzYW5kYm94ICovXG4gICAgc3VwcG9ydGVkVmVyc2lvbnMsXG4gICAgLyoqIFRoZSBtb25hY28gZWRpdG9yIGluc3RhbmNlICovXG4gICAgZWRpdG9yLFxuICAgIC8qKiBFaXRoZXIgXCJ0eXBlc2NyaXB0XCIgb3IgXCJqYXZhc2NyaXB0XCIgZGVwZW5kaW5nIG9uIHlvdXIgY29uZmlnICovXG4gICAgbGFuZ3VhZ2UsXG4gICAgLyoqIFRoZSBvdXRlciBtb25hY28gbW9kdWxlLCB0aGUgcmVzdWx0IG9mIHJlcXVpcmUoXCJtb25hY28tZWRpdG9yXCIpICAqL1xuICAgIG1vbmFjbyxcbiAgICAvKiogR2V0cyBhIG1vbmFjby10eXBlc2NyaXB0IHdvcmtlciwgdGhpcyB3aWxsIGdpdmUgeW91IGFjY2VzcyB0byBhIGxhbmd1YWdlIHNlcnZlci4gTm90ZTogcHJlZmVyIHRoaXMgZm9yIGxhbmd1YWdlIHNlcnZlciB3b3JrIGJlY2F1c2UgaXQgaGFwcGVucyBvbiBhIHdlYndvcmtlciAuICovXG4gICAgZ2V0V29ya2VyUHJvY2VzcyxcbiAgICAvKiogQSBjb3B5IG9mIHJlcXVpcmUoXCJAdHlwZXNjcmlwdC92ZnNcIikgdGhpcyBjYW4gYmUgdXNlZCB0byBxdWlja2x5IHNldCB1cCBhbiBpbi1tZW1vcnkgY29tcGlsZXIgcnVucyBmb3IgQVNUcywgb3IgdG8gZ2V0IGNvbXBsZXggbGFuZ3VhZ2Ugc2VydmVyIHJlc3VsdHMgKGFueXRoaW5nIGFib3ZlIGhhcyB0byBiZSBzZXJpYWxpemVkIHdoZW4gcGFzc2VkKSovXG4gICAgdHN2ZnMsXG4gICAgLyoqIEdldCBhbGwgdGhlIGRpZmZlcmVudCBlbWl0dGVkIGZpbGVzIGFmdGVyIFR5cGVTY3JpcHQgaXMgcnVuICovXG4gICAgZ2V0RW1pdFJlc3VsdCxcbiAgICAvKiogR2V0cyBqdXN0IHRoZSBKYXZhU2NyaXB0IGZvciB5b3VyIHNhbmRib3gsIHdpbGwgdHJhbnNwaWxlIGlmIGluIFRTIG9ubHkgKi9cbiAgICBnZXRSdW5uYWJsZUpTLFxuICAgIC8qKiBHZXRzIHRoZSBEVFMgb3V0cHV0IG9mIHRoZSBtYWluIGNvZGUgaW4gdGhlIGVkaXRvciAqL1xuICAgIGdldERUU0ZvckNvZGUsXG4gICAgLyoqIFRoZSBtb25hY28tZWRpdG9yIGRvbSBub2RlLCB1c2VkIGZvciBzaG93aW5nL2hpZGluZyB0aGUgZWRpdG9yICovXG4gICAgZ2V0RG9tTm9kZSxcbiAgICAvKiogVGhlIG1vZGVsIGlzIGFuIG9iamVjdCB3aGljaCBtb25hY28gdXNlcyB0byBrZWVwIHRyYWNrIG9mIHRleHQgaW4gdGhlIGVkaXRvci4gVXNlIHRoaXMgdG8gZGlyZWN0bHkgbW9kaWZ5IHRoZSB0ZXh0IGluIHRoZSBlZGl0b3IgKi9cbiAgICBnZXRNb2RlbCxcbiAgICAvKiogR2V0cyB0aGUgdGV4dCBvZiB0aGUgbWFpbiBtb2RlbCwgd2hpY2ggaXMgdGhlIHRleHQgaW4gdGhlIGVkaXRvciAqL1xuICAgIGdldFRleHQsXG4gICAgLyoqIFNob3J0Y3V0IGZvciBzZXR0aW5nIHRoZSBtb2RlbCdzIHRleHQgY29udGVudCB3aGljaCB3b3VsZCB1cGRhdGUgdGhlIGVkaXRvciAqL1xuICAgIHNldFRleHQsXG4gICAgLyoqIEdldHMgdGhlIEFTVCBvZiB0aGUgY3VycmVudCB0ZXh0IGluIG1vbmFjbyAtIHVzZXMgYGNyZWF0ZVRTUHJvZ3JhbWAsIHNvIHRoZSBwZXJmb3JtYW5jZSBjYXZlYXQgYXBwbGllcyB0aGVyZSB0b28gKi9cbiAgICBnZXRBU1QsXG4gICAgLyoqIFRoZSBtb2R1bGUgeW91IGdldCBmcm9tIHJlcXVpcmUoXCJ0eXBlc2NyaXB0XCIpICovXG4gICAgdHMsXG4gICAgLyoqIENyZWF0ZSBhIG5ldyBQcm9ncmFtLCBhIFR5cGVTY3JpcHQgZGF0YSBtb2RlbCB3aGljaCByZXByZXNlbnRzIHRoZSBlbnRpcmUgcHJvamVjdC4gQXMgd2VsbCBhcyBzb21lIG9mIHRoZVxuICAgICAqIHByaW1pdGl2ZSBvYmplY3RzIHlvdSB3b3VsZCBub3JtYWxseSBuZWVkIHRvIGRvIHdvcmsgd2l0aCB0aGUgZmlsZXMuXG4gICAgICpcbiAgICAgKiBUaGUgZmlyc3QgdGltZSB0aGlzIGlzIGNhbGxlZCBpdCBoYXMgdG8gZG93bmxvYWQgYWxsIHRoZSBEVFMgZmlsZXMgd2hpY2ggaXMgbmVlZGVkIGZvciBhbiBleGFjdCBjb21waWxlciBydW4uIFdoaWNoXG4gICAgICogYXQgbWF4IGlzIGFib3V0IDEuNU1CIC0gYWZ0ZXIgdGhhdCBzdWJzZXF1ZW50IGRvd25sb2FkcyBvZiBkdHMgbGliIGZpbGVzIGNvbWUgZnJvbSBsb2NhbFN0b3JhZ2UuXG4gICAgICpcbiAgICAgKiBUcnkgdG8gdXNlIHRoaXMgc3BhcmluZ2x5IGFzIGl0IGNhbiBiZSBjb21wdXRhdGlvbmFsbHkgZXhwZW5zaXZlLCBhdCB0aGUgbWluaW11bSB5b3Ugc2hvdWxkIGJlIHVzaW5nIHRoZSBkZWJvdW5jZWQgc2V0dXAuXG4gICAgICpcbiAgICAgKiBUT0RPOiBJdCB3b3VsZCBiZSBnb29kIHRvIGNyZWF0ZSBhbiBlYXN5IHdheSB0byBoYXZlIGEgc2luZ2xlIHByb2dyYW0gaW5zdGFuY2Ugd2hpY2ggaXMgdXBkYXRlZCBmb3IgeW91XG4gICAgICogd2hlbiB0aGUgbW9uYWNvIG1vZGVsIGNoYW5nZXMuXG4gICAgICovXG4gICAgc2V0dXBUU1ZGUyxcbiAgICAvKiogVXNlcyB0aGUgYWJvdmUgY2FsbCBzZXR1cFRTVkZTLCBidXQgb25seSByZXR1cm5zIHRoZSBwcm9ncmFtICovXG4gICAgY3JlYXRlVFNQcm9ncmFtLFxuICAgIC8qKiBUaGUgU2FuZGJveCdzIGRlZmF1bHQgY29tcGlsZXIgb3B0aW9ucyAgKi9cbiAgICBjb21waWxlckRlZmF1bHRzLFxuICAgIC8qKiBUaGUgU2FuZGJveCdzIGN1cnJlbnQgY29tcGlsZXIgb3B0aW9ucyAqL1xuICAgIGdldENvbXBpbGVyT3B0aW9ucyxcbiAgICAvKiogUmVwbGFjZSB0aGUgU2FuZGJveCdzIGNvbXBpbGVyIG9wdGlvbnMgKi9cbiAgICBzZXRDb21waWxlclNldHRpbmdzLFxuICAgIC8qKiBPdmVyd3JpdGUgdGhlIFNhbmRib3gncyBjb21waWxlciBvcHRpb25zICovXG4gICAgdXBkYXRlQ29tcGlsZXJTZXR0aW5nLFxuICAgIC8qKiBVcGRhdGUgYSBzaW5nbGUgY29tcGlsZXIgb3B0aW9uIGluIHRoZSBTQW5kYm94ICovXG4gICAgdXBkYXRlQ29tcGlsZXJTZXR0aW5ncyxcbiAgICAvKiogQSB3YXkgdG8gZ2V0IGNhbGxiYWNrcyB3aGVuIGNvbXBpbGVyIHNldHRpbmdzIGhhdmUgY2hhbmdlZCAqL1xuICAgIHNldERpZFVwZGF0ZUNvbXBpbGVyU2V0dGluZ3MsXG4gICAgLyoqIEEgY29weSBvZiBsenN0cmluZywgd2hpY2ggaXMgdXNlZCB0byBhcmNoaXZlL3VuYXJjaGl2ZSBjb2RlICovXG4gICAgbHpzdHJpbmcsXG4gICAgLyoqIFJldHVybnMgY29tcGlsZXIgb3B0aW9ucyBmb3VuZCBpbiB0aGUgcGFyYW1zIG9mIHRoZSBjdXJyZW50IHBhZ2UgKi9cbiAgICBjcmVhdGVVUkxRdWVyeVdpdGhDb21waWxlck9wdGlvbnMsXG4gICAgLyoqIFJldHVybnMgY29tcGlsZXIgb3B0aW9ucyBpbiB0aGUgc291cmNlIGNvZGUgdXNpbmcgdHdvc2xhc2ggbm90YXRpb24gKi9cbiAgICBnZXRUd29TbGFzaENvbXBsaWVyT3B0aW9ucyxcbiAgICAvKiogR2V0cyB0byB0aGUgY3VycmVudCBtb25hY28tbGFuZ3VhZ2UsIHRoaXMgaXMgaG93IHlvdSB0YWxrIHRvIHRoZSBiYWNrZ3JvdW5kIHdlYndvcmtlcnMgKi9cbiAgICBsYW5ndWFnZVNlcnZpY2VEZWZhdWx0czogZGVmYXVsdHMsXG4gICAgLyoqIFRoZSBwYXRoIHdoaWNoIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgZmlsZSB1c2luZyB0aGUgY3VycmVudCBjb21waWxlciBvcHRpb25zICovXG4gICAgZmlsZXBhdGg6IGZpbGVQYXRoLnBhdGgsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU2FuZGJveCA9IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVR5cGVTY3JpcHRTYW5kYm94PlxuIl19