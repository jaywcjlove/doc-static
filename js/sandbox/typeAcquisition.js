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
define(["require", "exports", "./vendor/lzstring.min"], function (require, exports, lzstring_min_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.detectNewImportsToAcquireTypeFor = exports.acquiredTypeDefs = void 0;
    lzstring_min_1 = __importDefault(lzstring_min_1);
    const globalishObj = typeof globalThis !== "undefined" ? globalThis : window || {};
    globalishObj.typeDefinitions = {};
    /**
     * Type Defs we've already got, and nulls when something has failed.
     * This is to make sure that it doesn't infinite loop.
     */
    exports.acquiredTypeDefs = globalishObj.typeDefinitions;
    const moduleJSONURL = (name) => 
    // prettier-ignore
    `https://ofcncog2cu-dsn.algolia.net/1/indexes/npm-search/${encodeURIComponent(name)}?attributes=types&x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.27.1&x-algolia-application-id=OFCNCOG2CU&x-algolia-api-key=f54e21fa3a2a0160595bb058179bfb1e`;
    const unpkgURL = (name, path) => `https://www.unpkg.com/${encodeURIComponent(name)}/${encodeURIComponent(path)}`;
    const packageJSONURL = (name) => unpkgURL(name, "package.json");
    const errorMsg = (msg, response, config) => {
        config.logger.error(`${msg} - will not try again in this session`, response.status, response.statusText, response);
    };
    /**
     * Grab any import/requires from inside the code and make a list of
     * its dependencies
     */
    const parseFileForModuleReferences = (sourceCode) => {
        // https://regex101.com/r/Jxa3KX/4
        const requirePattern = /(const|let|var)(.|\n)*? require\(('|")(.*)('|")\);?$/gm;
        // this handle ths 'from' imports  https://regex101.com/r/hdEpzO/4
        const es6Pattern = /(import|export)((?!from)(?!require)(.|\n))*?(from|require\()\s?('|")(.*)('|")\)?;?$/gm;
        // https://regex101.com/r/hdEpzO/6
        const es6ImportOnly = /import\s?('|")(.*)('|")\)?;?/gm;
        const foundModules = new Set();
        var match;
        while ((match = es6Pattern.exec(sourceCode)) !== null) {
            if (match[6])
                foundModules.add(match[6]);
        }
        while ((match = requirePattern.exec(sourceCode)) !== null) {
            if (match[5])
                foundModules.add(match[5]);
        }
        while ((match = es6ImportOnly.exec(sourceCode)) !== null) {
            if (match[2])
                foundModules.add(match[2]);
        }
        return Array.from(foundModules);
    };
    /** Converts some of the known global imports to node so that we grab the right info */
    const mapModuleNameToModule = (name) => {
        // in node repl:
        // > require("module").builtinModules
        const builtInNodeMods = [
            "assert",
            "async_hooks",
            "base",
            "buffer",
            "child_process",
            "cluster",
            "console",
            "constants",
            "crypto",
            "dgram",
            "dns",
            "domain",
            "events",
            "fs",
            "globals",
            "http",
            "http2",
            "https",
            "index",
            "inspector",
            "module",
            "net",
            "os",
            "path",
            "perf_hooks",
            "process",
            "punycode",
            "querystring",
            "readline",
            "repl",
            "stream",
            "string_decoder",
            "timers",
            "tls",
            "trace_events",
            "tty",
            "url",
            "util",
            "v8",
            "vm",
            "worker_threads",
            "zlib",
        ];
        if (builtInNodeMods.includes(name)) {
            return "node";
        }
        return name;
    };
    //** A really dumb version of path.resolve */
    const mapRelativePath = (moduleDeclaration, currentPath) => {
        // https://stackoverflow.com/questions/14780350/convert-relative-path-to-absolute-using-javascript
        function absolute(base, relative) {
            if (!base)
                return relative;
            const stack = base.split("/");
            const parts = relative.split("/");
            stack.pop(); // remove current file name (or empty string)
            for (var i = 0; i < parts.length; i++) {
                if (parts[i] == ".")
                    continue;
                if (parts[i] == "..")
                    stack.pop();
                else
                    stack.push(parts[i]);
            }
            return stack.join("/");
        }
        return absolute(currentPath, moduleDeclaration);
    };
    const convertToModuleReferenceID = (outerModule, moduleDeclaration, currentPath) => {
        const modIsScopedPackageOnly = moduleDeclaration.indexOf("@") === 0 && moduleDeclaration.split("/").length === 2;
        const modIsPackageOnly = moduleDeclaration.indexOf("@") === -1 && moduleDeclaration.split("/").length === 1;
        const isPackageRootImport = modIsPackageOnly || modIsScopedPackageOnly;
        if (isPackageRootImport) {
            return moduleDeclaration;
        }
        else {
            return `${outerModule}-${mapRelativePath(moduleDeclaration, currentPath)}`;
        }
    };
    /**
     * Takes an initial module and the path for the root of the typings and grab it and start grabbing its
     * dependencies then add those the to runtime.
     */
    const addModuleToRuntime = (mod, path, config) => __awaiter(void 0, void 0, void 0, function* () {
        const isDeno = path && path.indexOf("https://") === 0;
        const dtsFileURL = isDeno ? path : unpkgURL(mod, path);
        const content = yield getCachedDTSString(config, dtsFileURL);
        if (!content) {
            return errorMsg(`Could not get root d.ts file for the module '${mod}' at ${path}`, {}, config);
        }
        // Now look and grab dependent modules where you need the
        yield getDependenciesForModule(content, mod, path, config);
        if (isDeno) {
            const wrapped = `declare module "${path}" { ${content} }`;
            config.addLibraryToRuntime(wrapped, path);
        }
        else {
            const typelessModule = mod.split("@types/").slice(-1);
            const wrapped = `declare module "${typelessModule}" { ${content} }`;
            config.addLibraryToRuntime(wrapped, `node_modules/${mod}/${path}`);
        }
    });
    /**
     * Takes a module import, then uses both the algolia API and the the package.json to derive
     * the root type def path.
     *
     * @param {string} packageName
     * @returns {Promise<{ mod: string, path: string, packageJSON: any }>}
     */
    const getModuleAndRootDefTypePath = (packageName, config) => __awaiter(void 0, void 0, void 0, function* () {
        const url = moduleJSONURL(packageName);
        const response = yield config.fetcher(url);
        if (!response.ok) {
            return errorMsg(`Could not get Algolia JSON for the module '${packageName}'`, response, config);
        }
        const responseJSON = yield response.json();
        if (!responseJSON) {
            return errorMsg(`Could the Algolia JSON was un-parsable for the module '${packageName}'`, response, config);
        }
        if (!responseJSON.types) {
            return config.logger.log(`There were no types for '${packageName}' - will not try again in this session`);
        }
        if (!responseJSON.types.ts) {
            return config.logger.log(`There were no types for '${packageName}' - will not try again in this session`);
        }
        exports.acquiredTypeDefs[packageName] = responseJSON;
        if (responseJSON.types.ts === "included") {
            const modPackageURL = packageJSONURL(packageName);
            const response = yield config.fetcher(modPackageURL);
            if (!response.ok) {
                return errorMsg(`Could not get Package JSON for the module '${packageName}'`, response, config);
            }
            const responseJSON = yield response.json();
            if (!responseJSON) {
                return errorMsg(`Could not get Package JSON for the module '${packageName}'`, response, config);
            }
            config.addLibraryToRuntime(JSON.stringify(responseJSON, null, "  "), `node_modules/${packageName}/package.json`);
            // Get the path of the root d.ts file
            // non-inferred route
            let rootTypePath = responseJSON.typing || responseJSON.typings || responseJSON.types;
            // package main is custom
            if (!rootTypePath && typeof responseJSON.main === "string" && responseJSON.main.indexOf(".js") > 0) {
                rootTypePath = responseJSON.main.replace(/js$/, "d.ts");
            }
            // Final fallback, to have got here it must have passed in algolia
            if (!rootTypePath) {
                rootTypePath = "index.d.ts";
            }
            return { mod: packageName, path: rootTypePath, packageJSON: responseJSON };
        }
        else if (responseJSON.types.ts === "definitely-typed") {
            return { mod: responseJSON.types.definitelyTyped, path: "index.d.ts", packageJSON: responseJSON };
        }
        else {
            throw "This shouldn't happen";
        }
    });
    const getCachedDTSString = (config, url) => __awaiter(void 0, void 0, void 0, function* () {
        const cached = localStorage.getItem(url);
        if (cached) {
            const [dateString, text] = cached.split("-=-^-=-");
            const cachedDate = new Date(dateString);
            const now = new Date();
            const cacheTimeout = 604800000; // 1 week
            // const cacheTimeout = 60000 // 1 min
            if (now.getTime() - cachedDate.getTime() < cacheTimeout) {
                return lzstring_min_1.default.decompressFromUTF16(text);
            }
            else {
                config.logger.log("Skipping cache for ", url);
            }
        }
        const response = yield config.fetcher(url);
        if (!response.ok) {
            return errorMsg(`Could not get DTS response for the module at ${url}`, response, config);
        }
        // TODO: handle checking for a resolve to index.d.ts whens someone imports the folder
        let content = yield response.text();
        if (!content) {
            return errorMsg(`Could not get text for DTS response at ${url}`, response, config);
        }
        const now = new Date();
        const cacheContent = `${now.toISOString()}-=-^-=-${lzstring_min_1.default.compressToUTF16(content)}`;
        localStorage.setItem(url, cacheContent);
        return content;
    });
    const getReferenceDependencies = (sourceCode, mod, path, config) => __awaiter(void 0, void 0, void 0, function* () {
        var match;
        if (sourceCode.indexOf("reference path") > 0) {
            // https://regex101.com/r/DaOegw/1
            const referencePathExtractionPattern = /<reference path="(.*)" \/>/gm;
            while ((match = referencePathExtractionPattern.exec(sourceCode)) !== null) {
                const relativePath = match[1];
                if (relativePath) {
                    let newPath = mapRelativePath(relativePath, path);
                    if (newPath) {
                        const dtsRefURL = unpkgURL(mod, newPath);
                        const dtsReferenceResponseText = yield getCachedDTSString(config, dtsRefURL);
                        if (!dtsReferenceResponseText) {
                            return errorMsg(`Could not get root d.ts file for the module '${mod}' at ${path}`, {}, config);
                        }
                        yield getDependenciesForModule(dtsReferenceResponseText, mod, newPath, config);
                        const representationalPath = `node_modules/${mod}/${newPath}`;
                        config.addLibraryToRuntime(dtsReferenceResponseText, representationalPath);
                    }
                }
            }
        }
    });
    /**
     * Pseudo in-browser type acquisition tool, uses a
     */
    const detectNewImportsToAcquireTypeFor = (sourceCode, userAddLibraryToRuntime, fetcher = fetch, playgroundConfig) => __awaiter(void 0, void 0, void 0, function* () {
        // Wrap the runtime func with our own side-effect for visibility
        const addLibraryToRuntime = (code, path) => {
            globalishObj.typeDefinitions[path] = code;
            userAddLibraryToRuntime(code, path);
        };
        // Basically start the recursion with an undefined module
        const config = { sourceCode, addLibraryToRuntime, fetcher, logger: playgroundConfig.logger };
        const results = getDependenciesForModule(sourceCode, undefined, "playground.ts", config);
        return results;
    });
    exports.detectNewImportsToAcquireTypeFor = detectNewImportsToAcquireTypeFor;
    /**
     * Looks at a JS/DTS file and recurses through all the dependencies.
     * It avoids
     */
    const getDependenciesForModule = (sourceCode, moduleName, path, config) => {
        // Get all the import/requires for the file
        const filteredModulesToLookAt = parseFileForModuleReferences(sourceCode);
        filteredModulesToLookAt.forEach((name) => __awaiter(void 0, void 0, void 0, function* () {
            // Support grabbing the hard-coded node modules if needed
            const moduleToDownload = mapModuleNameToModule(name);
            if (!moduleName && moduleToDownload.startsWith(".")) {
                return config.logger.log("[ATA] Can't resolve relative dependencies from the playground root");
            }
            const moduleID = convertToModuleReferenceID(moduleName, moduleToDownload, moduleName);
            if (exports.acquiredTypeDefs[moduleID] || exports.acquiredTypeDefs[moduleID] === null) {
                return;
            }
            config.logger.log(`[ATA] Looking at ${moduleToDownload}`);
            const modIsScopedPackageOnly = moduleToDownload.indexOf("@") === 0 && moduleToDownload.split("/").length === 2;
            const modIsPackageOnly = moduleToDownload.indexOf("@") === -1 && moduleToDownload.split("/").length === 1;
            const isPackageRootImport = modIsPackageOnly || modIsScopedPackageOnly;
            const isDenoModule = moduleToDownload.indexOf("https://") === 0;
            if (isPackageRootImport) {
                // So it doesn't run twice for a package
                exports.acquiredTypeDefs[moduleID] = null;
                // E.g. import danger from "danger"
                const packageDef = yield getModuleAndRootDefTypePath(moduleToDownload, config);
                if (packageDef) {
                    exports.acquiredTypeDefs[moduleID] = packageDef.packageJSON;
                    yield addModuleToRuntime(packageDef.mod, packageDef.path, config);
                }
            }
            else if (isDenoModule) {
                // E.g. import { serve } from "https://deno.land/std@v0.12/http/server.ts";
                yield addModuleToRuntime(moduleToDownload, moduleToDownload, config);
            }
            else {
                // E.g. import {Component} from "./MyThing"
                if (!moduleToDownload || !path)
                    throw `No outer module or path for a relative import: ${moduleToDownload}`;
                const absolutePathForModule = mapRelativePath(moduleToDownload, path);
                // So it doesn't run twice for a package
                exports.acquiredTypeDefs[moduleID] = null;
                const resolvedFilepath = absolutePathForModule.endsWith(".ts")
                    ? absolutePathForModule
                    : absolutePathForModule + ".d.ts";
                yield addModuleToRuntime(moduleName, resolvedFilepath, config);
            }
        }));
        // Also support the
        getReferenceDependencies(sourceCode, moduleName, path, config);
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZUFjcXVpc2l0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc2FuZGJveC9zcmMvdHlwZUFjcXVpc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR0EsTUFBTSxZQUFZLEdBQVEsT0FBTyxVQUFVLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUE7SUFDdkYsWUFBWSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUE7SUFFakM7OztPQUdHO0lBQ1UsUUFBQSxnQkFBZ0IsR0FBc0MsWUFBWSxDQUFDLGVBQWUsQ0FBQTtJQUkvRixNQUFNLGFBQWEsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQ3JDLGtCQUFrQjtJQUNsQiwyREFBMkQsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlMQUFpTCxDQUFBO0lBRXRRLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxFQUFFLENBQzlDLHlCQUF5QixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFBO0lBRWpGLE1BQU0sY0FBYyxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFBO0lBRXZFLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBVyxFQUFFLFFBQWEsRUFBRSxNQUFpQixFQUFFLEVBQUU7UUFDakUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLHVDQUF1QyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUNwSCxDQUFDLENBQUE7SUFFRDs7O09BR0c7SUFDSCxNQUFNLDRCQUE0QixHQUFHLENBQUMsVUFBa0IsRUFBRSxFQUFFO1FBQzFELGtD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b250ZW50IjpbImltcG9ydCB7IFBsYXlncm91bmRDb25maWcgfSBmcm9tIFwiLi9cIlxuaW1wb3J0IGx6c3RyaW5nIGZyb20gXCIuL3ZlbmRvci9senN0cmluZy5taW5cIlxuXG5jb25zdCBnbG9iYWxpc2hPYmo6IGFueSA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHdpbmRvdyB8fCB7fVxuZ2xvYmFsaXNoT2JqLnR5cGVEZWZpbml0aW9ucyA9IHt9XG5cbi8qKlxuICogVHlwZSBEZWZzIHdlJ3ZlIGFscmVhZHkgZ290LCBhbmQgbnVsbHMgd2hlbiBzb21ldGhpbmcgaGFzIGZhaWxlZC5cbiAqIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHRoYXQgaXQgZG9lc24ndCBpbmZpbml0ZSBsb29wLlxuICovXG5leHBvcnQgY29uc3QgYWNxdWlyZWRUeXBlRGVmczogeyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIHwgbnVsbCB9ID0gZ2xvYmFsaXNoT2JqLnR5cGVEZWZpbml0aW9uc1xuXG5leHBvcnQgdHlwZSBBZGRMaWJUb1J1bnRpbWVGdW5jID0gKGNvZGU6IHN0cmluZywgcGF0aDogc3RyaW5nKSA9PiB2b2lkXG5cbmNvbnN0IG1vZHVsZUpTT05VUkwgPSAobmFtZTogc3RyaW5nKSA9PlxuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgYGh0dHBzOi8vb2ZjbmNvZzJjdS1kc24uYWxnb2xpYS5uZXQvMS9pbmRleGVzL25wbS1zZWFyY2gvJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9P2F0dHJpYnV0ZXM9dHlwZXMmeC1hbGdvbGlhLWFnZW50PUFsZ29saWElMjBmb3IlMjB2YW5pbGxhJTIwSmF2YVNjcmlwdCUyMChsaXRlKSUyMDMuMjcuMSZ4LWFsZ29saWEtYXBwbGljYXRpb24taWQ9T0ZDTkNPRzJDVSZ4LWFsZ29saWEtYXBpLWtleT1mNTRlMjFmYTNhMmEwMTYwNTk1YmIwNTgxNzliZmIxZWBcblxuY29uc3QgdW5wa2dVUkwgPSAobmFtZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcpID0+XG4gIGBodHRwczovL3d3dy51bnBrZy5jb20vJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhdGgpfWBcblxuY29uc3QgcGFja2FnZUpTT05VUkwgPSAobmFtZTogc3RyaW5nKSA9PiB1bnBrZ1VSTChuYW1lLCBcInBhY2thZ2UuanNvblwiKVxuXG5jb25zdCBlcnJvck1zZyA9IChtc2c6IHN0cmluZywgcmVzcG9uc2U6IGFueSwgY29uZmlnOiBBVEFDb25maWcpID0+IHtcbiAgY29uZmlnLmxvZ2dlci5lcnJvcihgJHttc2d9IC0gd2lsbCBub3QgdHJ5IGFnYWluIGluIHRoaXMgc2Vzc2lvbmAsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCwgcmVzcG9uc2UpXG59XG5cbi8qKlxuICogR3JhYiBhbnkgaW1wb3J0L3JlcXVpcmVzIGZyb20gaW5zaWRlIHRoZSBjb2RlIGFuZCBtYWtlIGEgbGlzdCBvZlxuICogaXRzIGRlcGVuZGVuY2llc1xuICovXG5jb25zdCBwYXJzZUZpbGVGb3JNb2R1bGVSZWZlcmVuY2VzID0gKHNvdXJjZUNvZGU6IHN0cmluZykgPT4ge1xuICAvLyBodHRwczovL3JlZ2V4MTAxLmNvbS9yL0p4YTNLWC80XG4gIGNvbnN0IHJlcXVpcmVQYXR0ZXJuID0gLyhjb25zdHxsZXR8dmFyKSgufFxcbikqPyByZXF1aXJlXFwoKCd8XCIpKC4qKSgnfFwiKVxcKTs/JC9nbVxuICAvLyB0aGlzIGhhbmRsZSB0aHMgJ2Zyb20nIGltcG9ydHMgIGh0dHBzOi8vcmVnZXgxMDEuY29tL3IvaGRFcHpPLzRcbiAgY29uc3QgZXM2UGF0dGVybiA9IC8oaW1wb3J0fGV4cG9ydCkoKD8hZnJvbSkoPyFyZXF1aXJlKSgufFxcbikpKj8oZnJvbXxyZXF1aXJlXFwoKVxccz8oJ3xcIikoLiopKCd8XCIpXFwpPzs/JC9nbVxuICAvLyBodHRwczovL3JlZ2V4MTAxLmNvbS9yL2hkRXB6Ty82XG4gIGNvbnN0IGVzNkltcG9ydE9ubHkgPSAvaW1wb3J0XFxzPygnfFwiKSguKikoJ3xcIilcXCk/Oz8vZ21cblxuICBjb25zdCBmb3VuZE1vZHVsZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICB2YXIgbWF0Y2hcblxuICB3aGlsZSAoKG1hdGNoID0gZXM2UGF0dGVybi5leGVjKHNvdXJjZUNvZGUpKSAhPT0gbnVsbCkge1xuICAgIGlmIChtYXRjaFs2XSkgZm91bmRNb2R1bGVzLmFkZChtYXRjaFs2XSlcbiAgfVxuXG4gIHdoaWxlICgobWF0Y2ggPSByZXF1aXJlUGF0dGVybi5leGVjKHNvdXJjZUNvZGUpKSAhPT0gbnVsbCkge1xuICAgIGlmIChtYXRjaFs1XSkgZm91bmRNb2R1bGVzLmFkZChtYXRjaFs1XSlcbiAgfVxuXG4gIHdoaWxlICgobWF0Y2ggPSBlczZJbXBvcnRPbmx5LmV4ZWMoc291cmNlQ29kZSkpICE9PSBudWxsKSB7XG4gICAgaWYgKG1hdGNoWzJdKSBmb3VuZE1vZHVsZXMuYWRkKG1hdGNoWzJdKVxuICB9XG5cbiAgcmV0dXJuIEFycmF5LmZyb20oZm91bmRNb2R1bGVzKVxufVxuXG4vKiogQ29udmVydHMgc29tZSBvZiB0aGUga25vd24gZ2xvYmFsIGltcG9ydHMgdG8gbm9kZSBzbyB0aGF0IHdlIGdyYWIgdGhlIHJpZ2h0IGluZm8gKi9cbmNvbnN0IG1hcE1vZHVsZU5hbWVUb01vZHVsZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgLy8gaW4gbm9kZSByZXBsOlxuICAvLyA+IHJlcXVpcmUoXCJtb2R1bGVcIikuYnVpbHRpbk1vZHVsZXNcbiAgY29uc3QgYnVpbHRJbk5vZGVNb2RzID0gW1xuICAgIFwiYXNzZXJ0XCIsXG4gICAgXCJhc3luY19ob29rc1wiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwiYnVmZmVyXCIsXG4gICAgXCJjaGlsZF9wcm9jZXNzXCIsXG4gICAgXCJjbHVzdGVyXCIsXG4gICAgXCJjb25zb2xlXCIsXG4gICAgXCJjb25zdGFudHNcIixcbiAgICBcImNyeXB0b1wiLFxuICAgIFwiZGdyYW1cIixcbiAgICBcImRuc1wiLFxuICAgIFwiZG9tYWluXCIsXG4gICAgXCJldmVudHNcIixcbiAgICBcImZzXCIsXG4gICAgXCJnbG9iYWxzXCIsXG4gICAgXCJodHRwXCIsXG4gICAgXCJodHRwMlwiLFxuICAgIFwiaHR0cHNcIixcbiAgICBcImluZGV4XCIsXG4gICAgXCJpbnNwZWN0b3JcIixcbiAgICBcIm1vZHVsZVwiLFxuICAgIFwibmV0XCIsXG4gICAgXCJvc1wiLFxuICAgIFwicGF0aFwiLFxuICAgIFwicGVyZl9ob29rc1wiLFxuICAgIFwicHJvY2Vzc1wiLFxuICAgIFwicHVueWNvZGVcIixcbiAgICBcInF1ZXJ5c3RyaW5nXCIsXG4gICAgXCJyZWFkbGluZVwiLFxuICAgIFwicmVwbFwiLFxuICAgIFwic3RyZWFtXCIsXG4gICAgXCJzdHJpbmdfZGVjb2RlclwiLFxuICAgIFwidGltZXJzXCIsXG4gICAgXCJ0bHNcIixcbiAgICBcInRyYWNlX2V2ZW50c1wiLFxuICAgIFwidHR5XCIsXG4gICAgXCJ1cmxcIixcbiAgICBcInV0aWxcIixcbiAgICBcInY4XCIsXG4gICAgXCJ2bVwiLFxuICAgIFwid29ya2VyX3RocmVhZHNcIixcbiAgICBcInpsaWJcIixcbiAgXVxuXG4gIGlmIChidWlsdEluTm9kZU1vZHMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICByZXR1cm4gXCJub2RlXCJcbiAgfVxuICByZXR1cm4gbmFtZVxufVxuXG4vLyoqIEEgcmVhbGx5IGR1bWIgdmVyc2lvbiBvZiBwYXRoLnJlc29sdmUgKi9cbmNvbnN0IG1hcFJlbGF0aXZlUGF0aCA9IChtb2R1bGVEZWNsYXJhdGlvbjogc3RyaW5nLCBjdXJyZW50UGF0aDogc3RyaW5nKSA9PiB7XG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0NzgwMzUwL2NvbnZlcnQtcmVsYXRpdmUtcGF0aC10by1hYnNvbHV0ZS11c2luZy1qYXZhc2NyaXB0XG4gIGZ1bmN0aW9uIGFic29sdXRlKGJhc2U6IHN0cmluZywgcmVsYXRpdmU6IHN0cmluZykge1xuICAgIGlmICghYmFzZSkgcmV0dXJuIHJlbGF0aXZlXG5cbiAgICBjb25zdCBzdGFjayA9IGJhc2Uuc3BsaXQoXCIvXCIpXG4gICAgY29uc3QgcGFydHMgPSByZWxhdGl2ZS5zcGxpdChcIi9cIilcbiAgICBzdGFjay5wb3AoKSAvLyByZW1vdmUgY3VycmVudCBmaWxlIG5hbWUgKG9yIGVtcHR5IHN0cmluZylcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwYXJ0c1tpXSA9PSBcIi5cIikgY29udGludWVcbiAgICAgIGlmIChwYXJ0c1tpXSA9PSBcIi4uXCIpIHN0YWNrLnBvcCgpXG4gICAgICBlbHNlIHN0YWNrLnB1c2gocGFydHNbaV0pXG4gICAgfVxuICAgIHJldHVybiBzdGFjay5qb2luKFwiL1wiKVxuICB9XG5cbiAgcmV0dXJuIGFic29sdXRlKGN1cnJlbnRQYXRoLCBtb2R1bGVEZWNsYXJhdGlvbilcbn1cblxuY29uc3QgY29udmVydFRvTW9kdWxlUmVmZXJlbmNlSUQgPSAob3V0ZXJNb2R1bGU6IHN0cmluZywgbW9kdWxlRGVjbGFyYXRpb246IHN0cmluZywgY3VycmVudFBhdGg6IHN0cmluZykgPT4ge1xuICBjb25zdCBtb2RJc1Njb3BlZFBhY2thZ2VPbmx5ID0gbW9kdWxlRGVjbGFyYXRpb24uaW5kZXhPZihcIkBcIikgPT09IDAgJiYgbW9kdWxlRGVjbGFyYXRpb24uc3BsaXQoXCIvXCIpLmxlbmd0aCA9PT0gMlxuICBjb25zdCBtb2RJc1BhY2thZ2VPbmx5ID0gbW9kdWxlRGVjbGFyYXRpb24uaW5kZXhPZihcIkBcIikgPT09IC0xICYmIG1vZHVsZURlY2xhcmF0aW9uLnNwbGl0KFwiL1wiKS5sZW5ndGggPT09IDFcbiAgY29uc3QgaXNQYWNrYWdlUm9vdEltcG9ydCA9IG1vZElzUGFja2FnZU9ubHkgfHwgbW9kSXNTY29wZWRQYWNrYWdlT25seVxuXG4gIGlmIChpc1BhY2thZ2VSb290SW1wb3J0KSB7XG4gICAgcmV0dXJuIG1vZHVsZURlY2xhcmF0aW9uXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke291dGVyTW9kdWxlfS0ke21hcFJlbGF0aXZlUGF0aChtb2R1bGVEZWNsYXJhdGlvbiwgY3VycmVudFBhdGgpfWBcbiAgfVxufVxuXG4vKipcbiAqIFRha2VzIGFuIGluaXRpYWwgbW9kdWxlIGFuZCB0aGUgcGF0aCBmb3IgdGhlIHJvb3Qgb2YgdGhlIHR5cGluZ3MgYW5kIGdyYWIgaXQgYW5kIHN0YXJ0IGdyYWJiaW5nIGl0c1xuICogZGVwZW5kZW5jaWVzIHRoZW4gYWRkIHRob3NlIHRoZSB0byBydW50aW1lLlxuICovXG5jb25zdCBhZGRNb2R1bGVUb1J1bnRpbWUgPSBhc3luYyAobW9kOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgY29uZmlnOiBBVEFDb25maWcpID0+IHtcbiAgY29uc3QgaXNEZW5vID0gcGF0aCAmJiBwYXRoLmluZGV4T2YoXCJodHRwczovL1wiKSA9PT0gMFxuXG4gIGNvbnN0IGR0c0ZpbGVVUkwgPSBpc0Rlbm8gPyBwYXRoIDogdW5wa2dVUkwobW9kLCBwYXRoKVxuXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRDYWNoZWREVFNTdHJpbmcoY29uZmlnLCBkdHNGaWxlVVJMKVxuICBpZiAoIWNvbnRlbnQpIHtcbiAgICByZXR1cm4gZXJyb3JNc2coYENvdWxkIG5vdCBnZXQgcm9vdCBkLnRzIGZpbGUgZm9yIHRoZSBtb2R1bGUgJyR7bW9kfScgYXQgJHtwYXRofWAsIHt9LCBjb25maWcpXG4gIH1cblxuICAvLyBOb3cgbG9vayBhbmQgZ3JhYiBkZXBlbmRlbnQgbW9kdWxlcyB3aGVyZSB5b3UgbmVlZCB0aGVcbiAgYXdhaXQgZ2V0RGVwZW5kZW5jaWVzRm9yTW9kdWxlKGNvbnRlbnQsIG1vZCwgcGF0aCwgY29uZmlnKVxuXG4gIGlmIChpc0Rlbm8pIHtcbiAgICBjb25zdCB3cmFwcGVkID0gYGRlY2xhcmUgbW9kdWxlIFwiJHtwYXRofVwiIHsgJHtjb250ZW50fSB9YFxuICAgIGNvbmZpZy5hZGRMaWJyYXJ5VG9SdW50aW1lKHdyYXBwZWQsIHBhdGgpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZWxlc3NNb2R1bGUgPSBtb2Quc3BsaXQoXCJAdHlwZXMvXCIpLnNsaWNlKC0xKVxuICAgIGNvbnN0IHdyYXBwZWQgPSBgZGVjbGFyZSBtb2R1bGUgXCIke3R5cGVsZXNzTW9kdWxlfVwiIHsgJHtjb250ZW50fSB9YFxuICAgIGNvbmZpZy5hZGRMaWJyYXJ5VG9SdW50aW1lKHdyYXBwZWQsIGBub2RlX21vZHVsZXMvJHttb2R9LyR7cGF0aH1gKVxuICB9XG59XG5cbi8qKlxuICogVGFrZXMgYSBtb2R1bGUgaW1wb3J0LCB0aGVuIHVzZXMgYm90aCB0aGUgYWxnb2xpYSBBUEkgYW5kIHRoZSB0aGUgcGFja2FnZS5qc29uIHRvIGRlcml2ZVxuICogdGhlIHJvb3QgdHlwZSBkZWYgcGF0aC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFja2FnZU5hbWVcbiAqIEByZXR1cm5zIHtQcm9taXNlPHsgbW9kOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcGFja2FnZUpTT046IGFueSB9Pn1cbiAqL1xuY29uc3QgZ2V0TW9kdWxlQW5kUm9vdERlZlR5cGVQYXRoID0gYXN5bmMgKHBhY2thZ2VOYW1lOiBzdHJpbmcsIGNvbmZpZzogQVRBQ29uZmlnKSA9PiB7XG4gIGNvbnN0IHVybCA9IG1vZHVsZUpTT05VUkwocGFja2FnZU5hbWUpXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25maWcuZmV0Y2hlcih1cmwpXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gZXJyb3JNc2coYENvdWxkIG5vdCBnZXQgQWxnb2xpYSBKU09OIGZvciB0aGUgbW9kdWxlICcke3BhY2thZ2VOYW1lfSdgLCByZXNwb25zZSwgY29uZmlnKVxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2VKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIGlmICghcmVzcG9uc2VKU09OKSB7XG4gICAgcmV0dXJuIGVycm9yTXNnKGBDb3VsZCB0aGUgQWxnb2xpYSBKU09OIHdhcyB1bi1wYXJzYWJsZSBmb3IgdGhlIG1vZHVsZSAnJHtwYWNrYWdlTmFtZX0nYCwgcmVzcG9uc2UsIGNvbmZpZylcbiAgfVxuXG4gIGlmICghcmVzcG9uc2VKU09OLnR5cGVzKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5sb2dnZXIubG9nKGBUaGVyZSB3ZXJlIG5vIHR5cGVzIGZvciAnJHtwYWNrYWdlTmFtZX0nIC0gd2lsbCBub3QgdHJ5IGFnYWluIGluIHRoaXMgc2Vzc2lvbmApXG4gIH1cbiAgaWYgKCFyZXNwb25zZUpTT04udHlwZXMudHMpIHtcbiAgICByZXR1cm4gY29uZmlnLmxvZ2dlci5sb2coYFRoZXJlIHdlcmUgbm8gdHlwZXMgZm9yICcke3BhY2thZ2VOYW1lfScgLSB3aWxsIG5vdCB0cnkgYWdhaW4gaW4gdGhpcyBzZXNzaW9uYClcbiAgfVxuXG4gIGFjcXVpcmVkVHlwZURlZnNbcGFja2FnZU5hbWVdID0gcmVzcG9uc2VKU09OXG5cbiAgaWYgKHJlc3BvbnNlSlNPTi50eXBlcy50cyA9PT0gXCJpbmNsdWRlZFwiKSB7XG4gICAgY29uc3QgbW9kUGFja2FnZVVSTCA9IHBhY2thZ2VKU09OVVJMKHBhY2thZ2VOYW1lKVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25maWcuZmV0Y2hlcihtb2RQYWNrYWdlVVJMKVxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiBlcnJvck1zZyhgQ291bGQgbm90IGdldCBQYWNrYWdlIEpTT04gZm9yIHRoZSBtb2R1bGUgJyR7cGFja2FnZU5hbWV9J2AsIHJlc3BvbnNlLCBjb25maWcpXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2VKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgaWYgKCFyZXNwb25zZUpTT04pIHtcbiAgICAgIHJldHVybiBlcnJvck1zZyhgQ291bGQgbm90IGdldCBQYWNrYWdlIEpTT04gZm9yIHRoZSBtb2R1bGUgJyR7cGFja2FnZU5hbWV9J2AsIHJlc3BvbnNlLCBjb25maWcpXG4gICAgfVxuXG4gICAgY29uZmlnLmFkZExpYnJhcnlUb1J1bnRpbWUoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VKU09OLCBudWxsLCBcIiAgXCIpLCBgbm9kZV9tb2R1bGVzLyR7cGFja2FnZU5hbWV9L3BhY2thZ2UuanNvbmApXG5cbiAgICAvLyBHZXQgdGhlIHBhdGggb2YgdGhlIHJvb3QgZC50cyBmaWxlXG5cbiAgICAvLyBub24taW5mZXJyZWQgcm91dGVcbiAgICBsZXQgcm9vdFR5cGVQYXRoID0gcmVzcG9uc2VKU09OLnR5cGluZyB8fCByZXNwb25zZUpTT04udHlwaW5ncyB8fCByZXNwb25zZUpTT04udHlwZXNcblxuICAgIC8vIHBhY2thZ2UgbWFpbiBpcyBjdXN0b21cbiAgICBpZiAoIXJvb3RUeXBlUGF0aCAmJiB0eXBlb2YgcmVzcG9uc2VKU09OLm1haW4gPT09IFwic3RyaW5nXCIgJiYgcmVzcG9uc2VKU09OLm1haW4uaW5kZXhPZihcIi5qc1wiKSA+IDApIHtcbiAgICAgIHJvb3RUeXBlUGF0aCA9IHJlc3BvbnNlSlNPTi5tYWluLnJlcGxhY2UoL2pzJC8sIFwiZC50c1wiKVxuICAgIH1cblxuICAgIC8vIEZpbmFsIGZhbGxiYWNrLCB0byBoYXZlIGdvdCBoZXJlIGl0IG11c3QgaGF2ZSBwYXNzZWQgaW4gYWxnb2xpYVxuICAgIGlmICghcm9vdFR5cGVQYXRoKSB7XG4gICAgICByb290VHlwZVBhdGggPSBcImluZGV4LmQudHNcIlxuICAgIH1cblxuICAgIHJldHVybiB7IG1vZDogcGFja2FnZU5hbWUsIHBhdGg6IHJvb3RUeXBlUGF0aCwgcGFja2FnZUpTT046IHJlc3BvbnNlSlNPTiB9XG4gIH0gZWxzZSBpZiAocmVzcG9uc2VKU09OLnR5cGVzLnRzID09PSBcImRlZmluaXRlbHktdHlwZWRcIikge1xuICAgIHJldHVybiB7IG1vZDogcmVzcG9uc2VKU09OLnR5cGVzLmRlZmluaXRlbHlUeXBlZCwgcGF0aDogXCJpbmRleC5kLnRzXCIsIHBhY2thZ2VKU09OOiByZXNwb25zZUpTT04gfVxuICB9IGVsc2Uge1xuICAgIHRocm93IFwiVGhpcyBzaG91bGRuJ3QgaGFwcGVuXCJcbiAgfVxufVxuXG5jb25zdCBnZXRDYWNoZWREVFNTdHJpbmcgPSBhc3luYyAoY29uZmlnOiBBVEFDb25maWcsIHVybDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGNhY2hlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHVybClcbiAgaWYgKGNhY2hlZCkge1xuICAgIGNvbnN0IFtkYXRlU3RyaW5nLCB0ZXh0XSA9IGNhY2hlZC5zcGxpdChcIi09LV4tPS1cIilcbiAgICBjb25zdCBjYWNoZWREYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZylcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG5cbiAgICBjb25zdCBjYWNoZVRpbWVvdXQgPSA2MDQ4MDAwMDAgLy8gMSB3ZWVrXG4gICAgLy8gY29uc3QgY2FjaGVUaW1lb3V0ID0gNjAwMDAgLy8gMSBtaW5cblxuICAgIGlmIChub3cuZ2V0VGltZSgpIC0gY2FjaGVkRGF0ZS5nZXRUaW1lKCkgPCBjYWNoZVRpbWVvdXQpIHtcbiAgICAgIHJldHVybiBsenN0cmluZy5kZWNvbXByZXNzRnJvbVVURjE2KHRleHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZy5sb2dnZXIubG9nKFwiU2tpcHBpbmcgY2FjaGUgZm9yIFwiLCB1cmwpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25maWcuZmV0Y2hlcih1cmwpXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICByZXR1cm4gZXJyb3JNc2coYENvdWxkIG5vdCBnZXQgRFRTIHJlc3BvbnNlIGZvciB0aGUgbW9kdWxlIGF0ICR7dXJsfWAsIHJlc3BvbnNlLCBjb25maWcpXG4gIH1cblxuICAvLyBUT0RPOiBoYW5kbGUgY2hlY2tpbmcgZm9yIGEgcmVzb2x2ZSB0byBpbmRleC5kLnRzIHdoZW5zIHNvbWVvbmUgaW1wb3J0cyB0aGUgZm9sZGVyXG4gIGxldCBjb250ZW50ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXG4gIGlmICghY29udGVudCkge1xuICAgIHJldHVybiBlcnJvck1zZyhgQ291bGQgbm90IGdldCB0ZXh0IGZvciBEVFMgcmVzcG9uc2UgYXQgJHt1cmx9YCwgcmVzcG9uc2UsIGNvbmZpZylcbiAgfVxuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcbiAgY29uc3QgY2FjaGVDb250ZW50ID0gYCR7bm93LnRvSVNPU3RyaW5nKCl9LT0tXi09LSR7bHpzdHJpbmcuY29tcHJlc3NUb1VURjE2KGNvbnRlbnQpfWBcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odXJsLCBjYWNoZUNvbnRlbnQpXG4gIHJldHVybiBjb250ZW50XG59XG5cbmNvbnN0IGdldFJlZmVyZW5jZURlcGVuZGVuY2llcyA9IGFzeW5jIChzb3VyY2VDb2RlOiBzdHJpbmcsIG1vZDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGNvbmZpZzogQVRBQ29uZmlnKSA9PiB7XG4gIHZhciBtYXRjaFxuICBpZiAoc291cmNlQ29kZS5pbmRleE9mKFwicmVmZXJlbmNlIHBhdGhcIikgPiAwKSB7XG4gICAgLy8gaHR0cHM6Ly9yZWdleDEwMS5jb20vci9EYU9lZ3cvMVxuICAgIGNvbnN0IHJlZmVyZW5jZVBhdGhFeHRyYWN0aW9uUGF0dGVybiA9IC88cmVmZXJlbmNlIHBhdGg9XCIoLiopXCIgXFwvPi9nbVxuICAgIHdoaWxlICgobWF0Y2ggPSByZWZlcmVuY2VQYXRoRXh0cmFjdGlvblBhdHRlcm4uZXhlYyhzb3VyY2VDb2RlKSkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IG1hdGNoWzFdXG4gICAgICBpZiAocmVsYXRpdmVQYXRoKSB7XG4gICAgICAgIGxldCBuZXdQYXRoID0gbWFwUmVsYXRpdmVQYXRoKHJlbGF0aXZlUGF0aCwgcGF0aClcbiAgICAgICAgaWYgKG5ld1BhdGgpIHtcbiAgICAgICAgICBjb25zdCBkdHNSZWZVUkwgPSB1bnBrZ1VSTChtb2QsIG5ld1BhdGgpXG5cbiAgICAgICAgICBjb25zdCBkdHNSZWZlcmVuY2VSZXNwb25zZVRleHQgPSBhd2FpdCBnZXRDYWNoZWREVFNTdHJpbmcoY29uZmlnLCBkdHNSZWZVUkwpXG4gICAgICAgICAgaWYgKCFkdHNSZWZlcmVuY2VSZXNwb25zZVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvck1zZyhgQ291bGQgbm90IGdldCByb290IGQudHMgZmlsZSBmb3IgdGhlIG1vZHVsZSAnJHttb2R9JyBhdCAke3BhdGh9YCwge30sIGNvbmZpZylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhd2FpdCBnZXREZXBlbmRlbmNpZXNGb3JNb2R1bGUoZHRzUmVmZXJlbmNlUmVzcG9uc2VUZXh0LCBtb2QsIG5ld1BhdGgsIGNvbmZpZylcbiAgICAgICAgICBjb25zdCByZXByZXNlbnRhdGlvbmFsUGF0aCA9IGBub2RlX21vZHVsZXMvJHttb2R9LyR7bmV3UGF0aH1gXG4gICAgICAgICAgY29uZmlnLmFkZExpYnJhcnlUb1J1bnRpbWUoZHRzUmVmZXJlbmNlUmVzcG9uc2VUZXh0LCByZXByZXNlbnRhdGlvbmFsUGF0aClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pbnRlcmZhY2UgQVRBQ29uZmlnIHtcbiAgc291cmNlQ29kZTogc3RyaW5nXG4gIGFkZExpYnJhcnlUb1J1bnRpbWU6IEFkZExpYlRvUnVudGltZUZ1bmNcbiAgZmV0Y2hlcjogdHlwZW9mIGZldGNoXG4gIGxvZ2dlcjogUGxheWdyb3VuZENvbmZpZ1tcImxvZ2dlclwiXVxufVxuXG4vKipcbiAqIFBzZXVkbyBpbi1icm93c2VyIHR5cGUgYWNxdWlzaXRpb24gdG9vbCwgdXNlcyBhXG4gKi9cbmV4cG9ydCBjb25zdCBkZXRlY3ROZXdJbXBvcnRzVG9BY3F1aXJlVHlwZUZvciA9IGFzeW5jIChcbiAgc291cmNlQ29kZTogc3RyaW5nLFxuICB1c2VyQWRkTGlicmFyeVRvUnVudGltZTogQWRkTGliVG9SdW50aW1lRnVuYyxcbiAgZmV0Y2hlciA9IGZldGNoLFxuICBwbGF5Z3JvdW5kQ29uZmlnOiBQbGF5Z3JvdW5kQ29uZmlnXG4pID0+IHtcbiAgLy8gV3JhcCB0aGUgcnVudGltZSBmdW5jIHdpdGggb3VyIG93biBzaWRlLWVmZmVjdCBmb3IgdmlzaWJpbGl0eVxuICBjb25zdCBhZGRMaWJyYXJ5VG9SdW50aW1lID0gKGNvZGU6IHN0cmluZywgcGF0aDogc3RyaW5nKSA9PiB7XG4gICAgZ2xvYmFsaXNoT2JqLnR5cGVEZWZpbml0aW9uc1twYXRoXSA9IGNvZGVcbiAgICB1c2VyQWRkTGlicmFyeVRvUnVudGltZShjb2RlLCBwYXRoKVxuICB9XG5cbiAgLy8gQmFzaWNhbGx5IHN0YXJ0IHRoZSByZWN1cnNpb24gd2l0aCBhbiB1bmRlZmluZWQgbW9kdWxlXG4gIGNvbnN0IGNvbmZpZzogQVRBQ29uZmlnID0geyBzb3VyY2VDb2RlLCBhZGRMaWJyYXJ5VG9SdW50aW1lLCBmZXRjaGVyLCBsb2dnZXI6IHBsYXlncm91bmRDb25maWcubG9nZ2VyIH1cbiAgY29uc3QgcmVzdWx0cyA9IGdldERlcGVuZGVuY2llc0Zvck1vZHVsZShzb3VyY2VDb2RlLCB1bmRlZmluZWQsIFwicGxheWdyb3VuZC50c1wiLCBjb25maWcpXG4gIHJldHVybiByZXN1bHRzXG59XG5cbi8qKlxuICogTG9va3MgYXQgYSBKUy9EVFMgZmlsZSBhbmQgcmVjdXJzZXMgdGhyb3VnaCBhbGwgdGhlIGRlcGVuZGVuY2llcy5cbiAqIEl0IGF2b2lkc1xuICovXG5jb25zdCBnZXREZXBlbmRlbmNpZXNGb3JNb2R1bGUgPSAoXG4gIHNvdXJjZUNvZGU6IHN0cmluZyxcbiAgbW9kdWxlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBwYXRoOiBzdHJpbmcsXG4gIGNvbmZpZzogQVRBQ29uZmlnXG4pID0+IHtcbiAgLy8gR2V0IGFsbCB0aGUgaW1wb3J0L3JlcXVpcmVzIGZvciB0aGUgZmlsZVxuICBjb25zdCBmaWx0ZXJlZE1vZHVsZXNUb0xvb2tBdCA9IHBhcnNlRmlsZUZvck1vZHVsZVJlZmVyZW5jZXMoc291cmNlQ29kZSlcbiAgZmlsdGVyZWRNb2R1bGVzVG9Mb29rQXQuZm9yRWFjaChhc3luYyBuYW1lID0+IHtcbiAgICAvLyBTdXBwb3J0IGdyYWJiaW5nIHRoZSBoYXJkLWNvZGVkIG5vZGUgbW9kdWxlcyBpZiBuZWVkZWRcbiAgICBjb25zdCBtb2R1bGVUb0Rvd25sb2FkID0gbWFwTW9kdWxlTmFtZVRvTW9kdWxlKG5hbWUpXG5cbiAgICBpZiAoIW1vZHVsZU5hbWUgJiYgbW9kdWxlVG9Eb3dubG9hZC5zdGFydHNXaXRoKFwiLlwiKSkge1xuICAgICAgcmV0dXJuIGNvbmZpZy5sb2dnZXIubG9nKFwiW0FUQV0gQ2FuJ3QgcmVzb2x2ZSByZWxhdGl2ZSBkZXBlbmRlbmNpZXMgZnJvbSB0aGUgcGxheWdyb3VuZCByb290XCIpXG4gICAgfVxuXG4gICAgY29uc3QgbW9kdWxlSUQgPSBjb252ZXJ0VG9Nb2R1bGVSZWZlcmVuY2VJRChtb2R1bGVOYW1lISwgbW9kdWxlVG9Eb3dubG9hZCwgbW9kdWxlTmFtZSEpXG4gICAgaWYgKGFjcXVpcmVkVHlwZURlZnNbbW9kdWxlSURdIHx8IGFjcXVpcmVkVHlwZURlZnNbbW9kdWxlSURdID09PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25maWcubG9nZ2VyLmxvZyhgW0FUQV0gTG9va2luZyBhdCAke21vZHVsZVRvRG93bmxvYWR9YClcblxuICAgIGNvbnN0IG1vZElzU2NvcGVkUGFja2FnZU9ubHkgPSBtb2R1bGVUb0Rvd25sb2FkLmluZGV4T2YoXCJAXCIpID09PSAwICYmIG1vZHVsZVRvRG93bmxvYWQuc3BsaXQoXCIvXCIpLmxlbmd0aCA9PT0gMlxuICAgIGNvbnN0IG1vZElzUGFja2FnZU9ubHkgPSBtb2R1bGVUb0Rvd25sb2FkLmluZGV4T2YoXCJAXCIpID09PSAtMSAmJiBtb2R1bGVUb0Rvd25sb2FkLnNwbGl0KFwiL1wiKS5sZW5ndGggPT09IDFcbiAgICBjb25zdCBpc1BhY2thZ2VSb290SW1wb3J0ID0gbW9kSXNQYWNrYWdlT25seSB8fCBtb2RJc1Njb3BlZFBhY2thZ2VPbmx5XG4gICAgY29uc3QgaXNEZW5vTW9kdWxlID0gbW9kdWxlVG9Eb3dubG9hZC5pbmRleE9mKFwiaHR0cHM6Ly9cIikgPT09IDBcblxuICAgIGlmIChpc1BhY2thZ2VSb290SW1wb3J0KSB7XG4gICAgICAvLyBTbyBpdCBkb2Vzbid0IHJ1biB0d2ljZSBmb3IgYSBwYWNrYWdlXG4gICAgICBhY3F1aXJlZFR5cGVEZWZzW21vZHVsZUlEXSA9IG51bGxcblxuICAgICAgLy8gRS5nLiBpbXBvcnQgZGFuZ2VyIGZyb20gXCJkYW5nZXJcIlxuICAgICAgY29uc3QgcGFja2FnZURlZiA9IGF3YWl0IGdldE1vZHVsZUFuZFJvb3REZWZUeXBlUGF0aChtb2R1bGVUb0Rvd25sb2FkLCBjb25maWcpXG5cbiAgICAgIGlmIChwYWNrYWdlRGVmKSB7XG4gICAgICAgIGFjcXVpcmVkVHlwZURlZnNbbW9kdWxlSURdID0gcGFja2FnZURlZi5wYWNrYWdlSlNPTlxuICAgICAgICBhd2FpdCBhZGRNb2R1bGVUb1J1bnRpbWUocGFja2FnZURlZi5tb2QsIHBhY2thZ2VEZWYucGF0aCwgY29uZmlnKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNEZW5vTW9kdWxlKSB7XG4gICAgICAvLyBFLmcuIGltcG9ydCB7IHNlcnZlIH0gZnJvbSBcImh0dHBzOi8vZGVuby5sYW5kL3N0ZEB2MC4xMi9odHRwL3NlcnZlci50c1wiO1xuICAgICAgYXdhaXQgYWRkTW9kdWxlVG9SdW50aW1lKG1vZHVsZVRvRG93bmxvYWQsIG1vZHVsZVRvRG93bmxvYWQsIGNvbmZpZylcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRS5nLiBpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIi4vTXlUaGluZ1wiXG4gICAgICBpZiAoIW1vZHVsZVRvRG93bmxvYWQgfHwgIXBhdGgpIHRocm93IGBObyBvdXRlciBtb2R1bGUgb3IgcGF0aCBmb3IgYSByZWxhdGl2ZSBpbXBvcnQ6ICR7bW9kdWxlVG9Eb3dubG9hZH1gXG5cbiAgICAgIGNvbnN0IGFic29sdXRlUGF0aEZvck1vZHVsZSA9IG1hcFJlbGF0aXZlUGF0aChtb2R1bGVUb0Rvd25sb2FkLCBwYXRoKVxuXG4gICAgICAvLyBTbyBpdCBkb2Vzbid0IHJ1biB0d2ljZSBmb3IgYSBwYWNrYWdlXG4gICAgICBhY3F1aXJlZFR5cGVEZWZzW21vZHVsZUlEXSA9IG51bGxcblxuICAgICAgY29uc3QgcmVzb2x2ZWRGaWxlcGF0aCA9IGFic29sdXRlUGF0aEZvck1vZHVsZS5lbmRzV2l0aChcIi50c1wiKVxuICAgICAgICA/IGFic29sdXRlUGF0aEZvck1vZHVsZVxuICAgICAgICA6IGFic29sdXRlUGF0aEZvck1vZHVsZSArIFwiLmQudHNcIlxuXG4gICAgICBhd2FpdCBhZGRNb2R1bGVUb1J1bnRpbWUobW9kdWxlTmFtZSEsIHJlc29sdmVkRmlsZXBhdGgsIGNvbmZpZylcbiAgICB9XG4gIH0pXG5cbiAgLy8gQWxzbyBzdXBwb3J0IHRoZVxuICBnZXRSZWZlcmVuY2VEZXBlbmRlbmNpZXMoc291cmNlQ29kZSwgbW9kdWxlTmFtZSEsIHBhdGghLCBjb25maWcpXG59XG4iXX0=