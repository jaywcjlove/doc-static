define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createURLQueryWithCompilerOptions = exports.getCompilerOptionsFromParams = exports.getDefaultSandboxCompilerOptions = void 0;
    /**
     * These are the defaults, but they also act as the list of all compiler options
     * which are parsed in the query params.
     */
    function getDefaultSandboxCompilerOptions(config, monaco) {
        const settings = {
            noImplicitAny: true,
            strictNullChecks: !config.useJavaScript,
            strictFunctionTypes: true,
            strictPropertyInitialization: true,
            strictBindCallApply: true,
            noImplicitThis: true,
            noImplicitReturns: true,
            // 3.7 off, 3.8 on I think
            useDefineForClassFields: false,
            alwaysStrict: true,
            allowUnreachableCode: false,
            allowUnusedLabels: false,
            downlevelIteration: false,
            noEmitHelpers: false,
            noLib: false,
            noStrictGenericChecks: false,
            noUnusedLocals: false,
            noUnusedParameters: false,
            esModuleInterop: true,
            preserveConstEnums: false,
            removeComments: false,
            skipLibCheck: false,
            checkJs: config.useJavaScript,
            allowJs: config.useJavaScript,
            declaration: true,
            importHelpers: false,
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            target: monaco.languages.typescript.ScriptTarget.ES2017,
            jsx: monaco.languages.typescript.JsxEmit.React,
            module: monaco.languages.typescript.ModuleKind.ESNext,
        };
        return settings;
    }
    exports.getDefaultSandboxCompilerOptions = getDefaultSandboxCompilerOptions;
    /**
     * Loop through all of the entries in the existing compiler options then compare them with the
     * query params and return an object which is the changed settings via the query params
     */
    exports.getCompilerOptionsFromParams = (options, params) => {
        const urlDefaults = Object.entries(options).reduce((acc, [key, value]) => {
            if (params.has(key)) {
                const urlValue = params.get(key);
                if (urlValue === "true") {
                    acc[key] = true;
                }
                else if (urlValue === "false") {
                    acc[key] = false;
                }
                else if (!isNaN(parseInt(urlValue, 10))) {
                    acc[key] = parseInt(urlValue, 10);
                }
            }
            return acc;
        }, {});
        return urlDefaults;
    };
    // Can't set sandbox to be the right type because the param would contain this function
    /** Gets a query string representation (hash + queries) */
    exports.createURLQueryWithCompilerOptions = (sandbox, paramOverrides) => {
        const compilerOptions = sandbox.getCompilerOptions();
        const compilerDefaults = sandbox.compilerDefaults;
        const diff = Object.entries(compilerOptions).reduce((acc, [key, value]) => {
            if (value !== compilerDefaults[key]) {
                // @ts-ignore
                acc[key] = compilerOptions[key];
            }
            return acc;
        }, {});
        // The text of the TS/JS as the hash
        const hash = `code/${sandbox.lzstring.compressToEncodedURIComponent(sandbox.getText())}`;
        let urlParams = Object.assign({}, diff);
        for (const param of ["lib", "ts"]) {
            const params = new URLSearchParams(location.search);
            if (params.has(param)) {
                // Special case the nightly where it uses the TS version to hardcode
                // the nightly build
                if (param === "ts" && (params.get(param) === "Nightly" || params.get(param) === "next")) {
                    urlParams["ts"] = sandbox.ts.version;
                }
                else {
                    urlParams["ts"] = params.get(param);
                }
            }
        }
        // Support sending the selection
        const s = sandbox.editor.getSelection();
        // TODO: when it's full
        if ((s && s.selectionStartLineNumber !== s.positionLineNumber) ||
            (s && s.selectionStartColumn !== s.positionColumn)) {
            urlParams["ssl"] = s.selectionStartLineNumber;
            urlParams["ssc"] = s.selectionStartColumn;
            urlParams["pln"] = s.positionLineNumber;
            urlParams["pc"] = s.positionColumn;
        }
        else {
            urlParams["ssl"] = undefined;
            urlParams["ssc"] = undefined;
            urlParams["pln"] = undefined;
            urlParams["pc"] = undefined;
        }
        if (sandbox.config.useJavaScript)
            urlParams["useJavaScript"] = true;
        if (paramOverrides) {
            urlParams = Object.assign(Object.assign({}, urlParams), paramOverrides);
        }
        if (Object.keys(urlParams).length > 0) {
            const queryString = Object.entries(urlParams)
                .filter(([_k, v]) => v !== undefined)
                .filter(([_k, v]) => v !== null)
                .map(([key, value]) => {
                return `${key}=${encodeURIComponent(value)}`;
            })
                .join("&");
            return `?${queryString}#${hash}`;
        }
        else {
            return `#${hash}`;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZXJPcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc2FuZGJveC9zcmMvY29tcGlsZXJPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFLQTs7O09BR0c7SUFDSCxTQUFnQixnQ0FBZ0MsQ0FBQyxNQUF3QixFQUFFLE1BQWM7UUFDdkYsTUFBTSxRQUFRLEdBQW9CO1lBQ2hDLGFBQWEsRUFBRSxJQUFJO1lBQ25CLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDLGFBQWE7WUFDdkMsbUJBQW1CLEVBQUUsSUFBSTtZQUN6Qiw0QkFBNEIsRUFBRSxJQUFJO1lBQ2xDLG1CQUFtQixFQUFFLElBQUk7WUFDekIsY0FBYyxFQUFFLElBQUk7WUFDcEIsaUJBQWlCLEVBQUUsSUFBSTtZQUV2QiwwQkFBMEI7WUFDMUIsdUJBQXVCLEVBQUUsS0FBSztZQUU5QixZQUFZLEVBQUUsSUFBSTtZQUNsQixvQkFBb0IsRUFBRSxLQUFLO1lBQzNCLGlCQUFpQixFQUFFLEtBQUs7WUFFeEIsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixhQUFhLEVBQUUsS0FBSztZQUNwQixLQUFLLEVBQUUsS0FBSztZQUNaLHFCQUFxQixFQUFFLEtBQUs7WUFDNUIsY0FBYyxFQUFFLEtBQUs7WUFDckIsa0JBQWtCLEVBQUUsS0FBSztZQUV6QixlQUFlLEVBQUUsSUFBSTtZQUNyQixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFlBQVksRUFBRSxLQUFLO1lBRW5CLE9BQU8sRUFBRSxNQUFNLENBQUMsYUFBYTtZQUM3QixPQUFPLEVBQUUsTUFBTSxDQUFDLGFBQWE7WUFDN0IsV0FBVyxFQUFFLElBQUk7WUFFakIsYUFBYSxFQUFFLEtBQUs7WUFFcEIsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixxQkFBcUIsRUFBRSxJQUFJO1lBQzNCLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxD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QVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxJQUFJLENBQUE7UUFFbkUsSUFBSSxjQUFjLEVBQUU7WUFDbEIsU0FBUyxtQ0FBUSxTQUFTLEdBQUssY0FBYyxDQUFFLENBQUE7U0FDaEQ7UUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztpQkFDMUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUM7aUJBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDO2lCQUMvQixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO2dCQUNwQixPQUFPLEdBQUcsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEtBQWUsQ0FBQyxFQUFFLENBQUE7WUFDeEQsQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUVaLE9BQU8sSUFBSSxXQUFXLElBQUksSUFBSSxFQUFFLENBQUE7U0FDakM7YUFBTTtZQUNMLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQTtTQUNsQjtJQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXlncm91bmRDb25maWcgfSBmcm9tIFwiLlwiXG5cbnR5cGUgQ29tcGlsZXJPcHRpb25zID0gaW1wb3J0KFwibW9uYWNvLWVkaXRvclwiKS5sYW5ndWFnZXMudHlwZXNjcmlwdC5Db21waWxlck9wdGlvbnNcbnR5cGUgTW9uYWNvID0gdHlwZW9mIGltcG9ydChcIm1vbmFjby1lZGl0b3JcIilcblxuLyoqXG4gKiBUaGVzZSBhcmUgdGhlIGRlZmF1bHRzLCBidXQgdGhleSBhbHNvIGFjdCBhcyB0aGUgbGlzdCBvZiBhbGwgY29tcGlsZXIgb3B0aW9uc1xuICogd2hpY2ggYXJlIHBhcnNlZCBpbiB0aGUgcXVlcnkgcGFyYW1zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFNhbmRib3hDb21waWxlck9wdGlvbnMoY29uZmlnOiBQbGF5Z3JvdW5kQ29uZmlnLCBtb25hY286IE1vbmFjbykge1xuICBjb25zdCBzZXR0aW5nczogQ29tcGlsZXJPcHRpb25zID0ge1xuICAgIG5vSW1wbGljaXRBbnk6IHRydWUsXG4gICAgc3RyaWN0TnVsbENoZWNrczogIWNvbmZpZy51c2VKYXZhU2NyaXB0LFxuICAgIHN0cmljdEZ1bmN0aW9uVHlwZXM6IHRydWUsXG4gICAgc3RyaWN0UHJvcGVydHlJbml0aWFsaXphdGlvbjogdHJ1ZSxcbiAgICBzdHJpY3RCaW5kQ2FsbEFwcGx5OiB0cnVlLFxuICAgIG5vSW1wbGljaXRUaGlzOiB0cnVlLFxuICAgIG5vSW1wbGljaXRSZXR1cm5zOiB0cnVlLFxuXG4gICAgLy8gMy43IG9mZiwgMy44IG9uIEkgdGhpbmtcbiAgICB1c2VEZWZpbmVGb3JDbGFzc0ZpZWxkczogZmFsc2UsXG5cbiAgICBhbHdheXNTdHJpY3Q6IHRydWUsXG4gICAgYWxsb3dVbnJlYWNoYWJsZUNvZGU6IGZhbHNlLFxuICAgIGFsbG93VW51c2VkTGFiZWxzOiBmYWxzZSxcblxuICAgIGRvd25sZXZlbEl0ZXJhdGlvbjogZmFsc2UsXG4gICAgbm9FbWl0SGVscGVyczogZmFsc2UsXG4gICAgbm9MaWI6IGZhbHNlLFxuICAgIG5vU3RyaWN0R2VuZXJpY0NoZWNrczogZmFsc2UsXG4gICAgbm9VbnVzZWRMb2NhbHM6IGZhbHNlLFxuICAgIG5vVW51c2VkUGFyYW1ldGVyczogZmFsc2UsXG5cbiAgICBlc01vZHVsZUludGVyb3A6IHRydWUsXG4gICAgcHJlc2VydmVDb25zdEVudW1zOiBmYWxzZSxcbiAgICByZW1vdmVDb21tZW50czogZmFsc2UsXG4gICAgc2tpcExpYkNoZWNrOiBmYWxzZSxcblxuICAgIGNoZWNrSnM6IGNvbmZpZy51c2VKYXZhU2NyaXB0LFxuICAgIGFsbG93SnM6IGNvbmZpZy51c2VKYXZhU2NyaXB0LFxuICAgIGRlY2xhcmF0aW9uOiB0cnVlLFxuXG4gICAgaW1wb3J0SGVscGVyczogZmFsc2UsXG5cbiAgICBleHBlcmltZW50YWxEZWNvcmF0b3JzOiB0cnVlLFxuICAgIGVtaXREZWNvcmF0b3JNZXRhZGF0YTogdHJ1ZSxcbiAgICBtb2R1bGVSZXNvbHV0aW9uOiBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuTW9kdWxlUmVzb2x1dGlvbktpbmQuTm9kZUpzLFxuXG4gICAgdGFyZ2V0OiBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuU2NyaXB0VGFyZ2V0LkVTMjAxNyxcbiAgICBqc3g6IG1vbmFjby5sYW5ndWFnZXMudHlwZXNjcmlwdC5Kc3hFbWl0LlJlYWN0LFxuICAgIG1vZHVsZTogbW9uYWNvLmxhbmd1YWdlcy50eXBlc2NyaXB0Lk1vZHVsZUtpbmQuRVNOZXh0LFxuICB9XG5cbiAgcmV0dXJuIHNldHRpbmdzXG59XG5cbi8qKlxuICogTG9vcCB0aHJvdWdoIGFsbCBvZiB0aGUgZW50cmllcyBpbiB0aGUgZXhpc3RpbmcgY29tcGlsZXIgb3B0aW9ucyB0aGVuIGNvbXBhcmUgdGhlbSB3aXRoIHRoZVxuICogcXVlcnkgcGFyYW1zIGFuZCByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGlzIHRoZSBjaGFuZ2VkIHNldHRpbmdzIHZpYSB0aGUgcXVlcnkgcGFyYW1zXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb21waWxlck9wdGlvbnNGcm9tUGFyYW1zID0gKG9wdGlvbnM6IENvbXBpbGVyT3B0aW9ucywgcGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMpOiBDb21waWxlck9wdGlvbnMgPT4ge1xuICBjb25zdCB1cmxEZWZhdWx0cyA9IE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLnJlZHVjZSgoYWNjOiBhbnksIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChwYXJhbXMuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IHVybFZhbHVlID0gcGFyYW1zLmdldChrZXkpIVxuXG4gICAgICBpZiAodXJsVmFsdWUgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgIGFjY1trZXldID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmICh1cmxWYWx1ZSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIGFjY1trZXldID0gZmFsc2VcbiAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKHBhcnNlSW50KHVybFZhbHVlLCAxMCkpKSB7XG4gICAgICAgIGFjY1trZXldID0gcGFyc2VJbnQodXJsVmFsdWUsIDEwKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSwge30pXG5cbiAgcmV0dXJuIHVybERlZmF1bHRzXG59XG5cbi8vIENhbid0IHNldCBzYW5kYm94IHRvIGJlIHRoZSByaWdodCB0eXBlIGJlY2F1c2UgdGhlIHBhcmFtIHdvdWxkIGNvbnRhaW4gdGhpcyBmdW5jdGlvblxuXG4vKiogR2V0cyBhIHF1ZXJ5IHN0cmluZyByZXByZXNlbnRhdGlvbiAoaGFzaCArIHF1ZXJpZXMpICovXG5leHBvcnQgY29uc3QgY3JlYXRlVVJMUXVlcnlXaXRoQ29tcGlsZXJPcHRpb25zID0gKHNhbmRib3g6IGFueSwgcGFyYW1PdmVycmlkZXM/OiBhbnkpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBjb21waWxlck9wdGlvbnMgPSBzYW5kYm94LmdldENvbXBpbGVyT3B0aW9ucygpXG4gIGNvbnN0IGNvbXBpbGVyRGVmYXVsdHMgPSBzYW5kYm94LmNvbXBpbGVyRGVmYXVsdHNcbiAgY29uc3QgZGlmZiA9IE9iamVjdC5lbnRyaWVzKGNvbXBpbGVyT3B0aW9ucykucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmICh2YWx1ZSAhPT0gY29tcGlsZXJEZWZhdWx0c1trZXldKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBhY2Nba2V5XSA9IGNvbXBpbGVyT3B0aW9uc1trZXldXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSlcblxuICAvLyBUaGUgdGV4dCBvZiB0aGUgVFMvSlMgYXMgdGhlIGhhc2hcbiAgY29uc3QgaGFzaCA9IGBjb2RlLyR7c2FuZGJveC5senN0cmluZy5jb21wcmVzc1RvRW5jb2RlZFVSSUNvbXBvbmVudChzYW5kYm94LmdldFRleHQoKSl9YFxuXG4gIGxldCB1cmxQYXJhbXM6IGFueSA9IE9iamVjdC5hc3NpZ24oe30sIGRpZmYpXG4gIGZvciAoY29uc3QgcGFyYW0gb2YgW1wibGliXCIsIFwidHNcIl0pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcbiAgICBpZiAocGFyYW1zLmhhcyhwYXJhbSkpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZSB0aGUgbmlnaHRseSB3aGVyZSBpdCB1c2VzIHRoZSBUUyB2ZXJzaW9uIHRvIGhhcmRjb2RlXG4gICAgICAvLyB0aGUgbmlnaHRseSBidWlsZFxuICAgICAgaWYgKHBhcmFtID09PSBcInRzXCIgJiYgKHBhcmFtcy5nZXQocGFyYW0pID09PSBcIk5pZ2h0bHlcIiB8fCBwYXJhbXMuZ2V0KHBhcmFtKSA9PT0gXCJuZXh0XCIpKSB7XG4gICAgICAgIHVybFBhcmFtc1tcInRzXCJdID0gc2FuZGJveC50cy52ZXJzaW9uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmxQYXJhbXNbXCJ0c1wiXSA9IHBhcmFtcy5nZXQocGFyYW0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3VwcG9ydCBzZW5kaW5nIHRoZSBzZWxlY3Rpb25cbiAgY29uc3QgcyA9IHNhbmRib3guZWRpdG9yLmdldFNlbGVjdGlvbigpXG4gIC8vIFRPRE86IHdoZW4gaXQncyBmdWxsXG4gIGlmIChcbiAgICAocyAmJiBzLnNlbGVjdGlvblN0YXJ0TGluZU51bWJlciAhPT0gcy5wb3NpdGlvbkxpbmVOdW1iZXIpIHx8XG4gICAgKHMgJiYgcy5zZWxlY3Rpb25TdGFydENvbHVtbiAhPT0gcy5wb3NpdGlvbkNvbHVtbilcbiAgKSB7XG4gICAgdXJsUGFyYW1zW1wic3NsXCJdID0gcy5zZWxlY3Rpb25TdGFydExpbmVOdW1iZXJcbiAgICB1cmxQYXJhbXNbXCJzc2NcIl0gPSBzLnNlbGVjdGlvblN0YXJ0Q29sdW1uXG4gICAgdXJsUGFyYW1zW1wicGxuXCJdID0gcy5wb3NpdGlvbkxpbmVOdW1iZXJcbiAgICB1cmxQYXJhbXNbXCJwY1wiXSA9IHMucG9zaXRpb25Db2x1bW5cbiAgfSBlbHNlIHtcbiAgICB1cmxQYXJhbXNbXCJzc2xcIl0gPSB1bmRlZmluZWRcbiAgICB1cmxQYXJhbXNbXCJzc2NcIl0gPSB1bmRlZmluZWRcbiAgICB1cmxQYXJhbXNbXCJwbG5cIl0gPSB1bmRlZmluZWRcbiAgICB1cmxQYXJhbXNbXCJwY1wiXSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKHNhbmRib3guY29uZmlnLnVzZUphdmFTY3JpcHQpIHVybFBhcmFtc1tcInVzZUphdmFTY3JpcHRcIl0gPSB0cnVlXG5cbiAgaWYgKHBhcmFtT3ZlcnJpZGVzKSB7XG4gICAgdXJsUGFyYW1zID0geyAuLi51cmxQYXJhbXMsIC4uLnBhcmFtT3ZlcnJpZGVzIH1cbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyh1cmxQYXJhbXMpLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5lbnRyaWVzKHVybFBhcmFtcylcbiAgICAgIC5maWx0ZXIoKFtfaywgdl0pID0+IHYgIT09IHVuZGVmaW5lZClcbiAgICAgIC5maWx0ZXIoKFtfaywgdl0pID0+IHYgIT09IG51bGwpXG4gICAgICAubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgcmV0dXJuIGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKX1gXG4gICAgICB9KVxuICAgICAgLmpvaW4oXCImXCIpXG5cbiAgICByZXR1cm4gYD8ke3F1ZXJ5U3RyaW5nfSMke2hhc2h9YFxuICB9IGVsc2Uge1xuICAgIHJldHVybiBgIyR7aGFzaH1gXG4gIH1cbn1cbiJdfQ==