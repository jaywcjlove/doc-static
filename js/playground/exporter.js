var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createExporter = void 0;
    const createExporter = (sandbox, monaco, ui) => {
        function getScriptTargetText(option) {
            return monaco.languages.typescript.ScriptTarget[option];
        }
        function getJsxEmitText(option) {
            if (option === monaco.languages.typescript.JsxEmit.None) {
                return undefined;
            }
            return monaco.languages.typescript.JsxEmit[option];
        }
        function getModuleKindText(option) {
            if (option === monaco.languages.typescript.ModuleKind.None) {
                return undefined;
            }
            return monaco.languages.typescript.ModuleKind[option];
        }
        // These are the compiler's defaults, and we want a diff from
        // these before putting it in the issue
        const defaultCompilerOptionsForTSC = {
            esModuleInterop: false,
            strictNullChecks: false,
            strict: false,
            strictFunctionTypes: false,
            strictPropertyInitialization: false,
            strictBindCallApply: false,
            noImplicitAny: false,
            noImplicitThis: false,
            noImplicitReturns: false,
            checkJs: false,
            allowJs: false,
            experimentalDecorators: false,
            emitDecoratorMetadata: false,
        };
        function getValidCompilerOptions(options) {
            const { target: targetOption, jsx: jsxOption, module: moduleOption } = options, restOptions = __rest(options, ["target", "jsx", "module"]);
            const targetText = getScriptTargetText(targetOption);
            const jsxText = getJsxEmitText(jsxOption);
            const moduleText = getModuleKindText(moduleOption);
            const opts = Object.assign(Object.assign(Object.assign(Object.assign({}, restOptions), (targetText && { target: targetText })), (jsxText && { jsx: jsxText })), (moduleText && { module: moduleText }));
            const diffFromTSCDefaults = Object.entries(opts).reduce((acc, [key, value]) => {
                if (opts[key] && value != defaultCompilerOptionsForTSC[key]) {
                    // @ts-ignore
                    acc[key] = opts[key];
                }
                return acc;
            }, {});
            return diffFromTSCDefaults;
        }
        // Based on https://github.com/stackblitz/core/blob/master/sdk/src/generate.ts
        function createHiddenInput(name, value) {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            input.value = value;
            return input;
        }
        function createProjectForm(project) {
            const form = document.createElement("form");
            form.method = "POST";
            form.setAttribute("style", "display:none;");
            form.appendChild(createHiddenInput("project[title]", project.title));
            form.appendChild(createHiddenInput("project[description]", project.description));
            form.appendChild(createHiddenInput("project[template]", project.template));
            if (project.tags) {
                project.tags.forEach((tag) => {
                    form.appendChild(createHiddenInput("project[tags][]", tag));
                });
            }
            if (project.dependencies) {
                form.appendChild(createHiddenInput("project[dependencies]", JSON.stringify(project.dependencies)));
            }
            if (project.settings) {
                form.appendChild(createHiddenInput("project[settings]", JSON.stringify(project.settings)));
            }
            Object.keys(project.files).forEach(path => {
                form.appendChild(createHiddenInput(`project[files][${path}]`, project.files[path]));
            });
            return form;
        }
        const typescriptVersion = sandbox.ts.version;
        // prettier-ignore
        const stringifiedCompilerOptions = JSON.stringify({ compilerOptions: getValidCompilerOptions(sandbox.getCompilerOptions()) }, null, '  ');
        // TODO: pull deps
        function openProjectInStackBlitz() {
            const project = {
                title: "Playground Export - ",
                description: "123",
                template: "typescript",
                files: {
                    "index.ts": sandbox.getText(),
                    "tsconfig.json": stringifiedCompilerOptions,
                },
                dependencies: {
                    typescript: typescriptVersion,
                },
            };
            const form = createProjectForm(project);
            form.action = "https://stackblitz.com/run?view=editor";
            // https://github.com/stackblitz/core/blob/master/sdk/src/helpers.ts#L9
            // + buildProjectQuery(options);
            form.target = "_blank";
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
        }
        function openInTSAST() {
            const hash = `#code/${sandbox.lzstring.compressToEncodedURIComponent(sandbox.getText())}`;
            document.location.assign(`https://ts-ast-viewer.com/${hash}`);
        }
        function openProjectInCodeSandbox() {
            const files = {
                "package.json": {
                    content: {
                        name: "TypeScript Playground Export",
                        version: "0.0.0",
                        description: "TypeScript playground exported Sandbox",
                        dependencies: {
                            typescript: typescriptVersion,
                        },
                    },
                },
                "index.ts": {
                    content: sandbox.getText(),
                },
                "tsconfig.json": {
                    content: stringifiedCompilerOptions,
                },
            };
            // Using the v1 get API
            const parameters = sandbox.lzstring
                .compressToBase64(JSON.stringify({ files }))
                .replace(/\+/g, "-") // Convert '+' to '-'
                .replace(/\//g, "_") // Convert '/' to '_'
                .replace(/=+$/, ""); // Remove ending '='
            const url = `https://codesandbox.io/api/v1/sandboxes/define?view=editor&parameters=${parameters}`;
            document.location.assign(url);
            // Alternative using the http URL API, which uses POST. This has the trade-off where
            // the async nature of the call means that the redirect at the end triggers
            // popup security mechanisms in browsers because the function isn't blessed as
            // being a direct result of a user action.
            // fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
            //   method: "POST",
            //   body: JSON.stringify({ files }),
            //   headers: {
            //     Accept: "application/json",
            //     "Content-Type": "application/json"
            //   }
            // })
            // .then(x => x.json())
            // .then(data => {
            //   window.open('https://codesandbox.io/s/' + data.sandbox_id, '_blank');
            // });
        }
        function codify(code, ext) {
            return "```" + ext + "\n" + code + "\n```\n";
        }
        function makeMarkdown() {
            return __awaiter(this, void 0, void 0, function* () {
                const query = sandbox.createURLQueryWithCompilerOptions(sandbox);
                const fullURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}${query}`;
                const jsSection = sandbox.config.useJavaScript
                    ? ""
                    : `
<details><summary><b>Output</b></summary>

${codify(yield sandbox.getRunnableJS(), "ts")}

</details>
`;
                return `
<!-- 🚨 STOP 🚨 𝗦𝗧𝗢𝗣 🚨 𝑺𝑻𝑶𝑷 🚨

Half of all issues filed here are duplicates, answered in the FAQ, or not appropriate for the bug tracker. Even if you think you've found a *bug*, please read the FAQ first, especially the Common "Bugs" That Aren't Bugs section!

Please help us by doing the following steps before logging an issue:
  * Search: https://github.com/Microsoft/TypeScript/search?type=Issues
  * Read the FAQ: https://github.com/Microsoft/TypeScript/wiki/FAQ

Please fill in the *entire* template below.
-->

**TypeScript Version:**  ${typescriptVersion}

<!-- Search terms you tried before logging this (so others can find this issue more easily) -->
**Search Terms:**

**Expected behavior:**

**Actual behavior:**

<!-- Did you find other bugs that looked similar? -->
**Related Issues:**

**Code**
${codify(sandbox.getText(), "ts")}

${jsSection}

<details><summary><b>Compiler Options</b></summary>

${codify(stringifiedCompilerOptions, "json")}

</details>

**Playground Link:** [Provided](${fullURL})
      `;
            });
        }
        function reportIssue() {
            return __awaiter(this, void 0, void 0, function* () {
                const body = yield makeMarkdown();
                if (body.length < 4000) {
                    window.open("https://github.com/Microsoft/TypeScript/issues/new?body=" + encodeURIComponent(body));
                }
                else {
                    ui.showModal(body, document.getElementById("exports-dropdown"), "Issue too long to post automatically. Copy this text, then click 'Create New Issue' to begin.", {
                        "Create New Issue": "https://github.com/Microsoft/TypeScript/issues/new",
                    });
                    // document.querySelector("#popover-modal pre") && (document.querySelector("#popover-modal pre") as any).focus()
                }
                return false;
            });
        }
        function copyAsMarkdownIssue() {
            return __awaiter(this, void 0, void 0, function* () {
                const markdown = yield makeMarkdown();
                ui.showModal(markdown, document.getElementById("exports-dropdown"), "Markdown Version of Playgrund Code for GitHub Issue");
                return false;
            });
        }
        function copyForChat() {
            const query = sandbox.createURLQueryWithCompilerOptions(sandbox);
            const fullURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}${query}`;
            const chat = `[Playground Link](${fullURL})`;
            ui.showModal(chat, document.getElementById("exports-dropdown"), "Markdown for chat");
            return false;
        }
        function copyForChatWithPreview() {
            const query = sandbox.createURLQueryWithCompilerOptions(sandbox);
            const fullURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}${query}`;
            const ts = sandbox.getText();
            const preview = ts.length > 200 ? ts.substring(0, 200) + "..." : ts.substring(0, 200);
            const code = "```\n" + preview + "\n```\n";
            const chat = `${code}\n[Playground Link](${fullURL})`;
            ui.showModal(chat, document.getElementById("exports-dropdown"), "Markdown code");
            return false;
        }
        function exportAsTweet() {
            const query = sandbox.createURLQueryWithCompilerOptions(sandbox);
            const fullURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}${query}`;
            document.location.assign(`http://www.twitter.com/share?url=${fullURL}`);
        }
        return {
            openProjectInStackBlitz,
            openProjectInCodeSandbox,
            reportIssue,
            copyAsMarkdownIssue,
            copyForChat,
            copyForChatWithPreview,
            openInTSAST,
            exportAsTweet,
        };
    };
    exports.createExporter = createExporter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wbGF5Z3JvdW5kL3NyYy9leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLTyxNQUFNLGNBQWMsR0FBRyxDQUFDLE9BQWdCLEVBQUUsTUFBc0MsRUFBRSxFQUFNLEVBQUUsRUFBRTtRQUNqRyxTQUFTLG1CQUFtQixDQUFDLE1BQVc7WUFDdEMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDekQsQ0FBQztRQUVELFNBQVMsY0FBYyxDQUFDLE1BQVc7WUFDakMsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDdkQsT0FBTyxTQUFTLENBQUE7YUFDakI7WUFDRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwRCxDQUFDO1FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxNQUFXO1lBQ3BDLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBQzFELE9BQU8sU0FBUyxDQUFBO2FBQ2pCO1lBQ0QsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkQsQ0FBQztRQUVELDZEQUE2RDtRQUM3RCx1Q0FBdUM7UUFDdkMsTUFBTSw0QkFBNEIsR0FBb0I7WUFDcEQsZUFBZSxFQUFFLEtBQUs7WUFDdEIsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixNQUFNLEVBQUUsS0FBSztZQUNiLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsNEJBQTRCLEVBQUUsS0FBSztZQUNuQyxtQkFBbUIsRUFBRSxLQUFL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LElBQUksRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFFLEVBQUUsZUFBZSxDQUFDLENBQUE7WUFDakYsT0FBTyxLQUFLLENBQUE7UUFDZCxDQUFDO1FBRUQsU0FBUyxhQUFhO1lBQ3BCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNoRSxNQUFNLE9BQU8sR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUssRUFBRSxDQUFBO1lBRS9HLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLG9DQUFvQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQ3pFLENBQUM7UUFFRCxPQUFPO1lBQ0wsdUJBQXVCO1lBQ3ZCLHdCQUF3QjtZQUN4QixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxzQkFBc0I7WUFDdEIsV0FBVztZQUNYLGFBQWE7U0FDZCxDQUFBO0lBQ0gsQ0FBQyxDQUFBO0lBcFRZLFFBQUEsY0FBYyxrQkFvVDFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9jcmVhdGVVSVwiXG5cbnR5cGUgU2FuZGJveCA9IGltcG9ydChcInR5cGVzY3JpcHQtc2FuZGJveFwiKS5TYW5kYm94XG50eXBlIENvbXBpbGVyT3B0aW9ucyA9IGltcG9ydChcIm1vbmFjby1lZGl0b3JcIikubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuQ29tcGlsZXJPcHRpb25zXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFeHBvcnRlciA9IChzYW5kYm94OiBTYW5kYm94LCBtb25hY286IHR5cGVvZiBpbXBvcnQoXCJtb25hY28tZWRpdG9yXCIpLCB1aTogVUkpID0+IHtcbiAgZnVuY3Rpb24gZ2V0U2NyaXB0VGFyZ2V0VGV4dChvcHRpb246IGFueSkge1xuICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuU2NyaXB0VGFyZ2V0W29wdGlvbl1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEpzeEVtaXRUZXh0KG9wdGlvbjogYW55KSB7XG4gICAgaWYgKG9wdGlvbiA9PT0gbW9uYWNvLmxhbmd1YWdlcy50eXBlc2NyaXB0LkpzeEVtaXQuTm9uZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgICByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy50eXBlc2NyaXB0LkpzeEVtaXRbb3B0aW9uXVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TW9kdWxlS2luZFRleHQob3B0aW9uOiBhbnkpIHtcbiAgICBpZiAob3B0aW9uID09PSBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuTW9kdWxlS2luZC5Ob25lKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuTW9kdWxlS2luZFtvcHRpb25dXG4gIH1cblxuICAvLyBUaGVzZSBhcmUgdGhlIGNvbXBpbGVyJ3MgZGVmYXVsdHMsIGFuZCB3ZSB3YW50IGEgZGlmZiBmcm9tXG4gIC8vIHRoZXNlIGJlZm9yZSBwdXR0aW5nIGl0IGluIHRoZSBpc3N1ZVxuICBjb25zdCBkZWZhdWx0Q29tcGlsZXJPcHRpb25zRm9yVFNDOiBDb21waWxlck9wdGlvbnMgPSB7XG4gICAgZXNNb2R1bGVJbnRlcm9wOiBmYWxzZSxcbiAgICBzdHJpY3ROdWxsQ2hlY2tzOiBmYWxzZSxcbiAgICBzdHJpY3Q6IGZhbHNlLFxuICAgIHN0cmljdEZ1bmN0aW9uVHlwZXM6IGZhbHNlLFxuICAgIHN0cmljdFByb3BlcnR5SW5pdGlhbGl6YXRpb246IGZhbHNlLFxuICAgIHN0cmljdEJpbmRDYWxsQXBwbHk6IGZhbHNlLFxuICAgIG5vSW1wbGljaXRBbnk6IGZhbHNlLFxuICAgIG5vSW1wbGljaXRUaGlzOiBmYWxzZSxcbiAgICBub0ltcGxpY2l0UmV0dXJuczogZmFsc2UsXG4gICAgY2hlY2tKczogZmFsc2UsXG4gICAgYWxsb3dKczogZmFsc2UsXG4gICAgZXhwZXJpbWVudGFsRGVjb3JhdG9yczogZmFsc2UsXG4gICAgZW1pdERlY29yYXRvck1ldGFkYXRhOiBmYWxzZSxcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZhbGlkQ29tcGlsZXJPcHRpb25zKG9wdGlvbnM6IENvbXBpbGVyT3B0aW9ucykge1xuICAgIGNvbnN0IHsgdGFyZ2V0OiB0YXJnZXRPcHRpb24sIGpzeDoganN4T3B0aW9uLCBtb2R1bGU6IG1vZHVsZU9wdGlvbiwgLi4ucmVzdE9wdGlvbnMgfSA9IG9wdGlvbnNcblxuICAgIGNvbnN0IHRhcmdldFRleHQgPSBnZXRTY3JpcHRUYXJnZXRUZXh0KHRhcmdldE9wdGlvbilcbiAgICBjb25zdCBqc3hUZXh0ID0gZ2V0SnN4RW1pdFRleHQoanN4T3B0aW9uKVxuICAgIGNvbnN0IG1vZHVsZVRleHQgPSBnZXRNb2R1bGVLaW5kVGV4dChtb2R1bGVPcHRpb24pXG5cbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgLi4ucmVzdE9wdGlvbnMsXG4gICAgICAuLi4odGFyZ2V0VGV4dCAmJiB7IHRhcmdldDogdGFyZ2V0VGV4dCB9KSxcbiAgICAgIC4uLihqc3hUZXh0ICYmIHsganN4OiBqc3hUZXh0IH0pLFxuICAgICAgLi4uKG1vZHVsZVRleHQgJiYgeyBtb2R1bGU6IG1vZHVsZVRleHQgfSksXG4gICAgfVxuXG4gICAgY29uc3QgZGlmZkZyb21UU0NEZWZhdWx0cyA9IE9iamVjdC5lbnRyaWVzKG9wdHMpLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmICgob3B0cyBhcyBhbnkpW2tleV0gJiYgdmFsdWUgIT0gZGVmYXVsdENvbXBpbGVyT3B0aW9uc0ZvclRTQ1trZXldKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgYWNjW2tleV0gPSBvcHRzW2tleV1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIHt9KVxuXG4gICAgcmV0dXJuIGRpZmZGcm9tVFNDRGVmYXVsdHNcbiAgfVxuXG4gIC8vIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9zdGFja2JsaXR6L2NvcmUvYmxvYi9tYXN0ZXIvc2RrL3NyYy9nZW5lcmF0ZS50c1xuICBmdW5jdGlvbiBjcmVhdGVIaWRkZW5JbnB1dChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGlucHV0LnR5cGUgPSBcImhpZGRlblwiXG4gICAgaW5wdXQubmFtZSA9IG5hbWVcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybShwcm9qZWN0OiBhbnkpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcblxuICAgIGZvcm0ubWV0aG9kID0gXCJQT1NUXCJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpub25lO1wiKVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVIaWRkZW5JbnB1dChcInByb2plY3RbdGl0bGVdXCIsIHByb2plY3QudGl0bGUpKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSGlkZGVuSW5wdXQoXCJwcm9qZWN0W2Rlc2NyaXB0aW9uXVwiLCBwcm9qZWN0LmRlc2NyaXB0aW9uKSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUhpZGRlbklucHV0KFwicHJvamVjdFt0ZW1wbGF0ZV1cIiwgcHJvamVjdC50ZW1wbGF0ZSkpXG5cbiAgICBpZiAocHJvamVjdC50YWdzKSB7XG4gICAgICBwcm9qZWN0LnRhZ3MuZm9yRWFjaCgodGFnOiBzdHJpbmcpID0+IHtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVIaWRkZW5JbnB1dChcInByb2plY3RbdGFnc11bXVwiLCB0YWcpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdC5kZXBlbmRlbmNpZXMpIHtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSGlkZGVuSW5wdXQoXCJwcm9qZWN0W2RlcGVuZGVuY2llc11cIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdC5kZXBlbmRlbmNpZXMpKSlcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdC5zZXR0aW5ncykge1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVIaWRkZW5JbnB1dChcInByb2plY3Rbc2V0dGluZ3NdXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3Quc2V0dGluZ3MpKSlcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhwcm9qZWN0LmZpbGVzKS5mb3JFYWNoKHBhdGggPT4ge1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVIaWRkZW5JbnB1dChgcHJvamVjdFtmaWxlc11bJHtwYXRofV1gLCBwcm9qZWN0LmZpbGVzW3BhdGhdKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGNvbnN0IHR5cGVzY3JpcHRWZXJzaW9uID0gc2FuZGJveC50cy52ZXJzaW9uXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBjb25zdCBzdHJpbmdpZmllZENvbXBpbGVyT3B0aW9ucyA9IEpTT04uc3RyaW5naWZ5KHsgY29tcGlsZXJPcHRpb25zOiBnZXRWYWxpZENvbXBpbGVyT3B0aW9ucyhzYW5kYm94LmdldENvbXBpbGVyT3B0aW9ucygpKSB9LCBudWxsLCAnICAnKVxuXG4gIC8vIFRPRE86IHB1bGwgZGVwc1xuICBmdW5jdGlvbiBvcGVuUHJvamVjdEluU3RhY2tCbGl0eigpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0ge1xuICAgICAgdGl0bGU6IFwiUGxheWdyb3VuZCBFeHBvcnQgLSBcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIjEyM1wiLFxuICAgICAgdGVtcGxhdGU6IFwidHlwZXNjcmlwdFwiLFxuICAgICAgZmlsZXM6IHtcbiAgICAgICAgXCJpbmRleC50c1wiOiBzYW5kYm94LmdldFRleHQoKSxcbiAgICAgICAgXCJ0c2NvbmZpZy5qc29uXCI6IHN0cmluZ2lmaWVkQ29tcGlsZXJPcHRpb25zLFxuICAgICAgfSxcbiAgICAgIGRlcGVuZGVuY2llczoge1xuICAgICAgICB0eXBlc2NyaXB0OiB0eXBlc2NyaXB0VmVyc2lvbixcbiAgICAgIH0sXG4gICAgfVxuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVQcm9qZWN0Rm9ybShwcm9qZWN0KVxuICAgIGZvcm0uYWN0aW9uID0gXCJodHRwczovL3N0YWNrYmxpdHouY29tL3J1bj92aWV3PWVkaXRvclwiXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N0YWNrYmxpdHovY29yZS9ibG9iL21hc3Rlci9zZGsvc3JjL2hlbHBlcnMudHMjTDlcbiAgICAvLyArIGJ1aWxkUHJvamVjdFF1ZXJ5KG9wdGlvbnMpO1xuICAgIGZvcm0udGFyZ2V0ID0gXCJfYmxhbmtcIlxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKVxuICAgIGZvcm0uc3VibWl0KClcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm0pXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuSW5UU0FTVCgpIHtcbiAgICBjb25zdCBoYXNoID0gYCNjb2RlLyR7c2FuZGJveC5senN0cmluZy5jb21wcmVzc1RvRW5jb2RlZFVSSUNvbXBvbmVudChzYW5kYm94LmdldFRleHQoKSl9YFxuICAgIGRvY3VtZW50LmxvY2F0aW9uLmFzc2lnbihgaHR0cHM6Ly90cy1hc3Qtdmlld2VyLmNvbS8ke2hhc2h9YClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5Qcm9qZWN0SW5Db2RlU2FuZGJveCgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHtcbiAgICAgIFwicGFja2FnZS5qc29uXCI6IHtcbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgIG5hbWU6IFwiVHlwZVNjcmlwdCBQbGF5Z3JvdW5kIEV4cG9ydFwiLFxuICAgICAgICAgIHZlcnNpb246IFwiMC4wLjBcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUeXBlU2NyaXB0IHBsYXlncm91bmQgZXhwb3J0ZWQgU2FuZGJveFwiLFxuICAgICAgICAgIGRlcGVuZGVuY2llczoge1xuICAgICAgICAgICAgdHlwZXNjcmlwdDogdHlwZXNjcmlwdFZlcnNpb24sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBcImluZGV4LnRzXCI6IHtcbiAgICAgICAgY29udGVudDogc2FuZGJveC5nZXRUZXh0KCksXG4gICAgICB9LFxuICAgICAgXCJ0c2NvbmZpZy5qc29uXCI6IHtcbiAgICAgICAgY29udGVudDogc3RyaW5naWZpZWRDb21waWxlck9wdGlvbnMsXG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIFVzaW5nIHRoZSB2MSBnZXQgQVBJXG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHNhbmRib3gubHpzdHJpbmdcbiAgICAgIC5jb21wcmVzc1RvQmFzZTY0KEpTT04uc3RyaW5naWZ5KHsgZmlsZXMgfSkpXG4gICAgICAucmVwbGFjZSgvXFwrL2csIFwiLVwiKSAvLyBDb252ZXJ0ICcrJyB0byAnLSdcbiAgICAgIC5yZXBsYWNlKC9cXC8vZywgXCJfXCIpIC8vIENvbnZlcnQgJy8nIHRvICdfJ1xuICAgICAgLnJlcGxhY2UoLz0rJC8sIFwiXCIpIC8vIFJlbW92ZSBlbmRpbmcgJz0nXG5cbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9hcGkvdjEvc2FuZGJveGVzL2RlZmluZT92aWV3PWVkaXRvciZwYXJhbWV0ZXJzPSR7cGFyYW1ldGVyc31gXG4gICAgZG9jdW1lbnQubG9jYXRpb24uYXNzaWduKHVybClcblxuICAgIC8vIEFsdGVybmF0aXZlIHVzaW5nIHRoZSBodHRwIFVSTCBBUEksIHdoaWNoIHVzZXMgUE9TVC4gVGhpcyBoYXMgdGhlIHRyYWRlLW9mZiB3aGVyZVxuICAgIC8vIHRoZSBhc3luYyBuYXR1cmUgb2YgdGhlIGNhbGwgbWVhbnMgdGhhdCB0aGUgcmVkaXJlY3QgYXQgdGhlIGVuZCB0cmlnZ2Vyc1xuICAgIC8vIHBvcHVwIHNlY3VyaXR5IG1lY2hhbmlzbXMgaW4gYnJvd3NlcnMgYmVjYXVzZSB0aGUgZnVuY3Rpb24gaXNuJ3QgYmxlc3NlZCBhc1xuICAgIC8vIGJlaW5nIGEgZGlyZWN0IHJlc3VsdCBvZiBhIHVzZXIgYWN0aW9uLlxuXG4gICAgLy8gZmV0Y2goXCJodHRwczovL2NvZGVzYW5kYm94LmlvL2FwaS92MS9zYW5kYm94ZXMvZGVmaW5lP2pzb249MVwiLCB7XG4gICAgLy8gICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmaWxlcyB9KSxcbiAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAvLyAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIC8vIC50aGVuKHggPT4geC5qc29uKCkpXG4gICAgLy8gLnRoZW4oZGF0YSA9PiB7XG4gICAgLy8gICB3aW5kb3cub3BlbignaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zLycgKyBkYXRhLnNhbmRib3hfaWQsICdfYmxhbmsnKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvZGlmeShjb2RlOiBzdHJpbmcsIGV4dDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFwiYGBgXCIgKyBleHQgKyBcIlxcblwiICsgY29kZSArIFwiXFxuYGBgXFxuXCJcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG1ha2VNYXJrZG93bigpIHtcbiAgICBjb25zdCBxdWVyeSA9IHNhbmRib3guY3JlYXRlVVJMUXVlcnlXaXRoQ29tcGlsZXJPcHRpb25zKHNhbmRib3gpXG4gICAgY29uc3QgZnVsbFVSTCA9IGAke2RvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sfS8vJHtkb2N1bWVudC5sb2NhdGlvbi5ob3N0fSR7ZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWV9JHtxdWVyeX1gXG4gICAgY29uc3QganNTZWN0aW9uID0gc2FuZGJveC5jb25maWcudXNlSmF2YVNjcmlwdFxuICAgICAgPyBcIlwiXG4gICAgICA6IGBcbjxkZXRhaWxzPjxzdW1tYXJ5PjxiPk91dHB1dDwvYj48L3N1bW1hcnk+XG5cbiR7Y29kaWZ5KGF3YWl0IHNhbmRib3guZ2V0UnVubmFibGVKUygpLCBcInRzXCIpfVxuXG48L2RldGFpbHM+XG5gXG5cbiAgICByZXR1cm4gYFxuPCEtLSDwn5qoIFNUT1Ag8J+aqCDwnZem8J2Xp/Cdl6LwnZejIPCfmqgg8J2RuvCdkbvwnZG28J2RtyDwn5qoXG5cbkhhbGYgb2YgYWxsIGlzc3VlcyBmaWxlZCBoZXJlIGFyZSBkdXBsaWNhdGVzLCBhbnN3ZXJlZCBpbiB0aGUgRkFRLCBvciBub3QgYXBwcm9wcmlhdGUgZm9yIHRoZSBidWcgdHJhY2tlci4gRXZlbiBpZiB5b3UgdGhpbmsgeW91J3ZlIGZvdW5kIGEgKmJ1ZyosIHBsZWFzZSByZWFkIHRoZSBGQVEgZmlyc3QsIGVzcGVjaWFsbHkgdGhlIENvbW1vbiBcIkJ1Z3NcIiBUaGF0IEFyZW4ndCBCdWdzIHNlY3Rpb24hXG5cblBsZWFzZSBoZWxwIHVzIGJ5IGRvaW5nIHRoZSBmb2xsb3dpbmcgc3RlcHMgYmVmb3JlIGxvZ2dpbmcgYW4gaXNzdWU6XG4gICogU2VhcmNoOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvc2VhcmNoP3R5cGU9SXNzdWVzXG4gICogUmVhZCB0aGUgRkFROiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvd2lraS9GQVFcblxuUGxlYXNlIGZpbGwgaW4gdGhlICplbnRpcmUqIHRlbXBsYXRlIGJlbG93LlxuLS0+XG5cbioqVHlwZVNjcmlwdCBWZXJzaW9uOioqICAke3R5cGVzY3JpcHRWZXJzaW9ufVxuXG48IS0tIFNlYXJjaCB0ZXJtcyB5b3UgdHJpZWQgYmVmb3JlIGxvZ2dpbmcgdGhpcyAoc28gb3RoZXJzIGNhbiBmaW5kIHRoaXMgaXNzdWUgbW9yZSBlYXNpbHkpIC0tPlxuKipTZWFyY2ggVGVybXM6KipcblxuKipFeHBlY3RlZCBiZWhhdmlvcjoqKlxuXG4qKkFjdHVhbCBiZWhhdmlvcjoqKlxuXG48IS0tIERpZCB5b3UgZmluZCBvdGhlciBidWdzIHRoYXQgbG9va2VkIHNpbWlsYXI/IC0tPlxuKipSZWxhdGVkIElzc3VlczoqKlxuXG4qKkNvZGUqKlxuJHtjb2RpZnkoc2FuZGJveC5nZXRUZXh0KCksIFwidHNcIil9XG5cbiR7anNTZWN0aW9ufVxuXG48ZGV0YWlscz48c3VtbWFyeT48Yj5Db21waWxlciBPcHRpb25zPC9iPjwvc3VtbWFyeT5cblxuJHtjb2RpZnkoc3RyaW5naWZpZWRDb21waWxlck9wdGlvbnMsIFwianNvblwiKX1cblxuPC9kZXRhaWxzPlxuXG4qKlBsYXlncm91bmQgTGluazoqKiBbUHJvdmlkZWRdKCR7ZnVsbFVSTH0pXG4gICAgICBgXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiByZXBvcnRJc3N1ZSgpIHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgbWFrZU1hcmtkb3duKClcbiAgICBpZiAoYm9keS5sZW5ndGggPCA0MDAwKSB7XG4gICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvbmV3P2JvZHk9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoYm9keSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHVpLnNob3dNb2RhbChcbiAgICAgICAgYm9keSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBvcnRzLWRyb3Bkb3duXCIpISxcbiAgICAgICAgXCJJc3N1ZSB0b28gbG9uZyB0byBwb3N0IGF1dG9tYXRpY2FsbHkuIENvcHkgdGhpcyB0ZXh0LCB0aGVuIGNsaWNrICdDcmVhdGUgTmV3IElzc3VlJyB0byBiZWdpbi5cIixcbiAgICAgICAge1xuICAgICAgICAgIFwiQ3JlYXRlIE5ldyBJc3N1ZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvbmV3XCIsXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wb3Zlci1tb2RhbCBwcmVcIikgJiYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wb3Zlci1tb2RhbCBwcmVcIikgYXMgYW55KS5mb2N1cygpXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY29weUFzTWFya2Rvd25Jc3N1ZSgpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IGF3YWl0IG1ha2VNYXJrZG93bigpXG4gICAgdWkuc2hvd01vZGFsKFxuICAgICAgbWFya2Rvd24sXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cG9ydHMtZHJvcGRvd25cIikhLFxuICAgICAgXCJNYXJrZG93biBWZXJzaW9uIG9mIFBsYXlncnVuZCBDb2RlIGZvciBHaXRIdWIgSXNzdWVcIlxuICAgIClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvcHlGb3JDaGF0KCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2FuZGJveC5jcmVhdGVVUkxRdWVyeVdpdGhDb21waWxlck9wdGlvbnMoc2FuZGJveClcbiAgICBjb25zdCBmdWxsVVJMID0gYCR7ZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2x9Ly8ke2RvY3VtZW50LmxvY2F0aW9uLmhvc3R9JHtkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZX0ke3F1ZXJ5fWBcbiAgICBjb25zdCBjaGF0ID0gYFtQbGF5Z3JvdW5kIExpbmtdKCR7ZnVsbFVSTH0pYFxuICAgIHVpLnNob3dNb2RhbChjaGF0LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cG9ydHMtZHJvcGRvd25cIikhLCBcIk1hcmtkb3duIGZvciBjaGF0XCIpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBjb3B5Rm9yQ2hhdFdpdGhQcmV2aWV3KCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2FuZGJveC5jcmVhdGVVUkxRdWVyeVdpdGhDb21waWxlck9wdGlvbnMoc2FuZGJveClcbiAgICBjb25zdCBmdWxsVVJMID0gYCR7ZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2x9Ly8ke2RvY3VtZW50LmxvY2F0aW9uLmhvc3R9JHtkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZX0ke3F1ZXJ5fWBcblxuICAgIGNvbnN0IHRzID0gc2FuZGJveC5nZXRUZXh0KClcbiAgICBjb25zdCBwcmV2aWV3ID0gdHMubGVuZ3RoID4gMjAwID8gdHMuc3Vic3RyaW5nKDAsIDIwMCkgKyBcIi4uLlwiIDogdHMuc3Vic3RyaW5nKDAsIDIwMClcblxuICAgIGNvbnN0IGNvZGUgPSBcImBgYFxcblwiICsgcHJldmlldyArIFwiXFxuYGBgXFxuXCJcbiAgICBjb25zdCBjaGF0ID0gYCR7Y29kZX1cXG5bUGxheWdyb3VuZCBMaW5rXSgke2Z1bGxVUkx9KWBcbiAgICB1aS5zaG93TW9kYWwoY2hhdCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBvcnRzLWRyb3Bkb3duXCIpISwgXCJNYXJrZG93biBjb2RlXCIpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBleHBvcnRBc1R3ZWV0KCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2FuZGJveC5jcmVhdGVVUkxRdWVyeVdpdGhDb21waWxlck9wdGlvbnMoc2FuZGJveClcbiAgICBjb25zdCBmdWxsVVJMID0gYCR7ZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2x9Ly8ke2RvY3VtZW50LmxvY2F0aW9uLmhvc3R9JHtkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZX0ke3F1ZXJ5fWBcblxuICAgIGRvY3VtZW50LmxvY2F0aW9uLmFzc2lnbihgaHR0cDovL3d3dy50d2l0dGVyLmNvbS9zaGFyZT91cmw9JHtmdWxsVVJMfWApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9wZW5Qcm9qZWN0SW5TdGFja0JsaXR6LFxuICAgIG9wZW5Qcm9qZWN0SW5Db2RlU2FuZGJveCxcbiAgICByZXBvcnRJc3N1ZSxcbiAgICBjb3B5QXNNYXJrZG93bklzc3VlLFxuICAgIGNvcHlGb3JDaGF0LFxuICAgIGNvcHlGb3JDaGF0V2l0aFByZXZpZXcsXG4gICAgb3BlbkluVFNBU1QsXG4gICAgZXhwb3J0QXNUd2VldCxcbiAgfVxufVxuIl19