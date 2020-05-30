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
    exports.createExporter = (sandbox, monaco, ui) => {
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
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value;
            return input;
        }
        function createProjectForm(project) {
            const form = document.createElement('form');
            form.method = 'POST';
            form.setAttribute('style', 'display:none;');
            form.appendChild(createHiddenInput('project[title]', project.title));
            form.appendChild(createHiddenInput('project[description]', project.description));
            form.appendChild(createHiddenInput('project[template]', project.template));
            if (project.tags) {
                project.tags.forEach((tag) => {
                    form.appendChild(createHiddenInput('project[tags][]', tag));
                });
            }
            if (project.dependencies) {
                form.appendChild(createHiddenInput('project[dependencies]', JSON.stringify(project.dependencies)));
            }
            if (project.settings) {
                form.appendChild(createHiddenInput('project[settings]', JSON.stringify(project.settings)));
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
                title: 'Playground Export - ',
                description: '123',
                template: 'typescript',
                files: {
                    'index.ts': sandbox.getText(),
                    'tsconfig.json': stringifiedCompilerOptions,
                },
                dependencies: {
                    typescript: typescriptVersion,
                },
            };
            const form = createProjectForm(project);
            form.action = 'https://stackblitz.com/run?view=editor';
            // https://github.com/stackblitz/core/blob/master/sdk/src/helpers.ts#L9
            // + buildProjectQuery(options);
            form.target = '_blank';
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
                'package.json': {
                    content: {
                        name: 'TypeScript Playground Export',
                        version: '0.0.0',
                        description: 'TypeScript playground exported Sandbox',
                        dependencies: {
                            typescript: typescriptVersion,
                        },
                    },
                },
                'index.ts': {
                    content: sandbox.getText(),
                },
                'tsconfig.json': {
                    content: stringifiedCompilerOptions,
                },
            };
            // Using the v1 get API
            const parameters = sandbox.lzstring
                .compressToBase64(JSON.stringify({ files }))
                .replace(/\+/g, '-') // Convert '+' to '-'
                .replace(/\//g, '_') // Convert '/' to '_'
                .replace(/=+$/, ''); // Remove ending '='
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
            return '```' + ext + '\n' + code + '\n```\n';
        }
        function makeMarkdown() {
            return __awaiter(this, void 0, void 0, function* () {
                const query = sandbox.createURLQueryWithCompilerOptions(sandbox);
                const fullURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}${query}`;
                const jsSection = sandbox.config.useJavaScript
                    ? ''
                    : `
<details><summary><b>Output</b></summary>

${codify(yield sandbox.getRunnableJS(), 'ts')}

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
${codify(sandbox.getText(), 'ts')}

${jsSection}

<details><summary><b>Compiler Options</b></summary>

${codify(stringifiedCompilerOptions, 'json')}

</details>

**Playground Link:** [Provided](${fullURL})
      `;
            });
        }
        function reportIssue() {
            return __awaiter(this, void 0, void 0, function* () {
                const body = yield makeMarkdown();
                if (body.length < 4000) {
                    window.open('https://github.com/Microsoft/TypeScript/issues/new?body=' + encodeURIComponent(body));
                }
                else {
                    ui.showModal(body, "Issue too long to post automatically. Copy this text, then click 'Create New Issue' to begin.", {
                        'Create New Issue': 'https://github.com/Microsoft/TypeScript/issues/new',
                    });
                }
            });
        }
        function copyAsMarkdownIssue() {
            return __awaiter(this, void 0, void 0, function* () {
                const markdown = yield makeMarkdown();
                ui.showModal(markdown, 'Markdown code');
            });
        }
        function copyForChat() {
            const query = sandbox.createURLQueryWithCompilerOptions(sandbox);
            const fullURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}${query}`;
            const chat = `[Playground Link](${fullURL})`;
            ui.showModal(chat, 'Markdown for chat');
        }
        function copyForChatWithPreview() {
            const query = sandbox.createURLQueryWithCompilerOptions(sandbox);
            const fullURL = `${document.location.protocol}//${document.location.host}${document.location.pathname}${query}`;
            const ts = sandbox.getText();
            const preview = ts.length > 200 ? ts.substring(0, 200) + '...' : ts.substring(0, 200);
            const code = '```\n' + preview + '\n```\n';
            const chat = `${code}\n[Playground Link](${fullURL})`;
            ui.showModal(chat, 'Markdown code');
        }
        return {
            openProjectInStackBlitz,
            openProjectInCodeSandbox,
            reportIssue,
            copyAsMarkdownIssue,
            copyForChat,
            copyForChatWithPreview,
            openInTSAST,
        };
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wbGF5Z3JvdW5kL3NyYy9leHBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLYSxRQUFBLGNBQWMsR0FBRyxDQUFDLE9BQWdCLEVBQUUsTUFBc0MsRUFBRSxFQUFNLEVBQUUsRUFBRTtRQUNqRyxTQUFTLG1CQUFtQixDQUFDLE1BQVc7WUFDdEMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDekQsQ0FBQztRQUVELFNBQVMsY0FBYyxDQUFDLE1BQVc7WUFDakMsSUFBSSxNQUFNLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDdkQsT0FBTyxTQUFTLENBQUE7YUFDakI7WUFDRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwRCxDQUFDO1FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxNQUFXO1lBQ3BDLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBQzFELE9BQU8sU0FBUyxDQUFBO2FBQ2pCO1lBQ0QsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkQsQ0FBQztRQUVELDZEQUE2RDtRQUM3RCx1Q0FBdUM7UUFDdkMsTUFBTSw0QkFBNEIsR0FBb0I7WUFDcEQsZUFBZSxFQUFFLEtBQUs7WUFDdEIsZ0JBQWdCLEVBQUUsS0FBSztZQUN2QixNQUFNLEVBQUUsS0FBSztZQUNiLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsNEJBQTRCLEVBQUUsS0FBSztZQUNuQyxtQkFBbUIsRUFBRSxLQUFL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bSAnLi9jcmVhdGVVSSdcblxudHlwZSBTYW5kYm94ID0gaW1wb3J0KCd0eXBlc2NyaXB0LXNhbmRib3gnKS5TYW5kYm94XG50eXBlIENvbXBpbGVyT3B0aW9ucyA9IGltcG9ydCgnbW9uYWNvLWVkaXRvcicpLmxhbmd1YWdlcy50eXBlc2NyaXB0LkNvbXBpbGVyT3B0aW9uc1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRXhwb3J0ZXIgPSAoc2FuZGJveDogU2FuZGJveCwgbW9uYWNvOiB0eXBlb2YgaW1wb3J0KCdtb25hY28tZWRpdG9yJyksIHVpOiBVSSkgPT4ge1xuICBmdW5jdGlvbiBnZXRTY3JpcHRUYXJnZXRUZXh0KG9wdGlvbjogYW55KSB7XG4gICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMudHlwZXNjcmlwdC5TY3JpcHRUYXJnZXRbb3B0aW9uXVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SnN4RW1pdFRleHQob3B0aW9uOiBhbnkpIHtcbiAgICBpZiAob3B0aW9uID09PSBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuSnN4RW1pdC5Ob25lKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQuSnN4RW1pdFtvcHRpb25dXG4gIH1cblxuICBmdW5jdGlvbiBnZXRNb2R1bGVLaW5kVGV4dChvcHRpb246IGFueSkge1xuICAgIGlmIChvcHRpb24gPT09IG1vbmFjby5sYW5ndWFnZXMudHlwZXNjcmlwdC5Nb2R1bGVLaW5kLk5vbmUpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMudHlwZXNjcmlwdC5Nb2R1bGVLaW5kW29wdGlvbl1cbiAgfVxuXG4gIC8vIFRoZXNlIGFyZSB0aGUgY29tcGlsZXIncyBkZWZhdWx0cywgYW5kIHdlIHdhbnQgYSBkaWZmIGZyb21cbiAgLy8gdGhlc2UgYmVmb3JlIHB1dHRpbmcgaXQgaW4gdGhlIGlzc3VlXG4gIGNvbnN0IGRlZmF1bHRDb21waWxlck9wdGlvbnNGb3JUU0M6IENvbXBpbGVyT3B0aW9ucyA9IHtcbiAgICBlc01vZHVsZUludGVyb3A6IGZhbHNlLFxuICAgIHN0cmljdE51bGxDaGVja3M6IGZhbHNlLFxuICAgIHN0cmljdDogZmFsc2UsXG4gICAgc3RyaWN0RnVuY3Rpb25UeXBlczogZmFsc2UsXG4gICAgc3RyaWN0UHJvcGVydHlJbml0aWFsaXphdGlvbjogZmFsc2UsXG4gICAgc3RyaWN0QmluZENhbGxBcHBseTogZmFsc2UsXG4gICAgbm9JbXBsaWNpdEFueTogZmFsc2UsXG4gICAgbm9JbXBsaWNpdFRoaXM6IGZhbHNlLFxuICAgIG5vSW1wbGljaXRSZXR1cm5zOiBmYWxzZSxcbiAgICBjaGVja0pzOiBmYWxzZSxcbiAgICBhbGxvd0pzOiBmYWxzZSxcbiAgICBleHBlcmltZW50YWxEZWNvcmF0b3JzOiBmYWxzZSxcbiAgICBlbWl0RGVjb3JhdG9yTWV0YWRhdGE6IGZhbHNlLFxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFsaWRDb21waWxlck9wdGlvbnMob3B0aW9uczogQ29tcGlsZXJPcHRpb25zKSB7XG4gICAgY29uc3QgeyB0YXJnZXQ6IHRhcmdldE9wdGlvbiwganN4OiBqc3hPcHRpb24sIG1vZHVsZTogbW9kdWxlT3B0aW9uLCAuLi5yZXN0T3B0aW9ucyB9ID0gb3B0aW9uc1xuXG4gICAgY29uc3QgdGFyZ2V0VGV4dCA9IGdldFNjcmlwdFRhcmdldFRleHQodGFyZ2V0T3B0aW9uKVxuICAgIGNvbnN0IGpzeFRleHQgPSBnZXRKc3hFbWl0VGV4dChqc3hPcHRpb24pXG4gICAgY29uc3QgbW9kdWxlVGV4dCA9IGdldE1vZHVsZUtpbmRUZXh0KG1vZHVsZU9wdGlvbilcblxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAuLi5yZXN0T3B0aW9ucyxcbiAgICAgIC4uLih0YXJnZXRUZXh0ICYmIHsgdGFyZ2V0OiB0YXJnZXRUZXh0IH0pLFxuICAgICAgLi4uKGpzeFRleHQgJiYgeyBqc3g6IGpzeFRleHQgfSksXG4gICAgICAuLi4obW9kdWxlVGV4dCAmJiB7IG1vZHVsZTogbW9kdWxlVGV4dCB9KSxcbiAgICB9XG5cbiAgICBjb25zdCBkaWZmRnJvbVRTQ0RlZmF1bHRzID0gT2JqZWN0LmVudHJpZXMob3B0cykucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKChvcHRzIGFzIGFueSlba2V5XSAmJiB2YWx1ZSAhPSBkZWZhdWx0Q29tcGlsZXJPcHRpb25zRm9yVFNDW2tleV0pIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBhY2Nba2V5XSA9IG9wdHNba2V5XVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSwge30pXG5cbiAgICByZXR1cm4gZGlmZkZyb21UU0NEZWZhdWx0c1xuICB9XG5cbiAgLy8gQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3N0YWNrYmxpdHovY29yZS9ibG9iL21hc3Rlci9zZGsvc3JjL2dlbmVyYXRlLnRzXG4gIGZ1bmN0aW9uIGNyZWF0ZUhpZGRlbklucHV0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGlucHV0LnR5cGUgPSAnaGlkZGVuJ1xuICAgIGlucHV0Lm5hbWUgPSBuYW1lXG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZVxuICAgIHJldHVybiBpbnB1dFxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0ocHJvamVjdDogYW55KSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuXG4gICAgZm9ybS5tZXRob2QgPSAnUE9TVCdcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTpub25lOycpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUhpZGRlbklucHV0KCdwcm9qZWN0W3RpdGxlXScsIHByb2plY3QudGl0bGUpKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSGlkZGVuSW5wdXQoJ3Byb2plY3RbZGVzY3JpcHRpb25dJywgcHJvamVjdC5kZXNjcmlwdGlvbikpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVIaWRkZW5JbnB1dCgncHJvamVjdFt0ZW1wbGF0ZV0nLCBwcm9qZWN0LnRlbXBsYXRlKSlcblxuICAgIGlmIChwcm9qZWN0LnRhZ3MpIHtcbiAgICAgIHByb2plY3QudGFncy5mb3JFYWNoKCh0YWc6IHN0cmluZykgPT4ge1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUhpZGRlbklucHV0KCdwcm9qZWN0W3RhZ3NdW10nLCB0YWcpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdC5kZXBlbmRlbmNpZXMpIHtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSGlkZGVuSW5wdXQoJ3Byb2plY3RbZGVwZW5kZW5jaWVzXScsIEpTT04uc3RyaW5naWZ5KHByb2plY3QuZGVwZW5kZW5jaWVzKSkpXG4gICAgfVxuXG4gICAgaWYgKHByb2plY3Quc2V0dGluZ3MpIHtcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSGlkZGVuSW5wdXQoJ3Byb2plY3Rbc2V0dGluZ3NdJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdC5zZXR0aW5ncykpKVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHByb2plY3QuZmlsZXMpLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUhpZGRlbklucHV0KGBwcm9qZWN0W2ZpbGVzXVske3BhdGh9XWAsIHByb2plY3QuZmlsZXNbcGF0aF0pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgY29uc3QgdHlwZXNjcmlwdFZlcnNpb24gPSBzYW5kYm94LnRzLnZlcnNpb25cbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIGNvbnN0IHN0cmluZ2lmaWVkQ29tcGlsZXJPcHRpb25zID0gSlNPTi5zdHJpbmdpZnkoeyBjb21waWxlck9wdGlvbnM6IGdldFZhbGlkQ29tcGlsZXJPcHRpb25zKHNhbmRib3guZ2V0Q29tcGlsZXJPcHRpb25zKCkpIH0sIG51bGwsICcgICcpXG5cbiAgLy8gVE9ETzogcHVsbCBkZXBzXG4gIGZ1bmN0aW9uIG9wZW5Qcm9qZWN0SW5TdGFja0JsaXR6KCkge1xuICAgIGNvbnN0IHByb2plY3QgPSB7XG4gICAgICB0aXRsZTogJ1BsYXlncm91bmQgRXhwb3J0IC0gJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnMTIzJyxcbiAgICAgIHRlbXBsYXRlOiAndHlwZXNjcmlwdCcsXG4gICAgICBmaWxlczoge1xuICAgICAgICAnaW5kZXgudHMnOiBzYW5kYm94LmdldFRleHQoKSxcbiAgICAgICAgJ3RzY29uZmlnLmpzb24nOiBzdHJpbmdpZmllZENvbXBpbGVyT3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICBkZXBlbmRlbmNpZXM6IHtcbiAgICAgICAgdHlwZXNjcmlwdDogdHlwZXNjcmlwdFZlcnNpb24sXG4gICAgICB9LFxuICAgIH1cbiAgICBjb25zdCBmb3JtID0gY3JlYXRlUHJvamVjdEZvcm0ocHJvamVjdClcbiAgICBmb3JtLmFjdGlvbiA9ICdodHRwczovL3N0YWNrYmxpdHouY29tL3J1bj92aWV3PWVkaXRvcidcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3RhY2tibGl0ei9jb3JlL2Jsb2IvbWFzdGVyL3Nkay9zcmMvaGVscGVycy50cyNMOVxuICAgIC8vICsgYnVpbGRQcm9qZWN0UXVlcnkob3B0aW9ucyk7XG4gICAgZm9ybS50YXJnZXQgPSAnX2JsYW5rJ1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKVxuICAgIGZvcm0uc3VibWl0KClcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGZvcm0pXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuSW5UU0FTVCgpIHtcbiAgICBjb25zdCBoYXNoID0gYCNjb2RlLyR7c2FuZGJveC5senN0cmluZy5jb21wcmVzc1RvRW5jb2RlZFVSSUNvbXBvbmVudChzYW5kYm94LmdldFRleHQoKSl9YFxuICAgIGRvY3VtZW50LmxvY2F0aW9uLmFzc2lnbihgaHR0cHM6Ly90cy1hc3Qtdmlld2VyLmNvbS8ke2hhc2h9YClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5Qcm9qZWN0SW5Db2RlU2FuZGJveCgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHtcbiAgICAgICdwYWNrYWdlLmpzb24nOiB7XG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICBuYW1lOiAnVHlwZVNjcmlwdCBQbGF5Z3JvdW5kIEV4cG9ydCcsXG4gICAgICAgICAgdmVyc2lvbjogJzAuMC4wJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1R5cGVTY3JpcHQgcGxheWdyb3VuZCBleHBvcnRlZCBTYW5kYm94JyxcbiAgICAgICAgICBkZXBlbmRlbmNpZXM6IHtcbiAgICAgICAgICAgIHR5cGVzY3JpcHQ6IHR5cGVzY3JpcHRWZXJzaW9uLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJ2luZGV4LnRzJzoge1xuICAgICAgICBjb250ZW50OiBzYW5kYm94LmdldFRleHQoKSxcbiAgICAgIH0sXG4gICAgICAndHNjb25maWcuanNvbic6IHtcbiAgICAgICAgY29udGVudDogc3RyaW5naWZpZWRDb21waWxlck9wdGlvbnMsXG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIFVzaW5nIHRoZSB2MSBnZXQgQVBJXG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHNhbmRib3gubHpzdHJpbmdcbiAgICAgIC5jb21wcmVzc1RvQmFzZTY0KEpTT04uc3RyaW5naWZ5KHsgZmlsZXMgfSkpXG4gICAgICAucmVwbGFjZSgvXFwrL2csICctJykgLy8gQ29udmVydCAnKycgdG8gJy0nXG4gICAgICAucmVwbGFjZSgvXFwvL2csICdfJykgLy8gQ29udmVydCAnLycgdG8gJ18nXG4gICAgICAucmVwbGFjZSgvPSskLywgJycpIC8vIFJlbW92ZSBlbmRpbmcgJz0nXG5cbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9hcGkvdjEvc2FuZGJveGVzL2RlZmluZT92aWV3PWVkaXRvciZwYXJhbWV0ZXJzPSR7cGFyYW1ldGVyc31gXG4gICAgZG9jdW1lbnQubG9jYXRpb24uYXNzaWduKHVybClcblxuICAgIC8vIEFsdGVybmF0aXZlIHVzaW5nIHRoZSBodHRwIFVSTCBBUEksIHdoaWNoIHVzZXMgUE9TVC4gVGhpcyBoYXMgdGhlIHRyYWRlLW9mZiB3aGVyZVxuICAgIC8vIHRoZSBhc3luYyBuYXR1cmUgb2YgdGhlIGNhbGwgbWVhbnMgdGhhdCB0aGUgcmVkaXJlY3QgYXQgdGhlIGVuZCB0cmlnZ2Vyc1xuICAgIC8vIHBvcHVwIHNlY3VyaXR5IG1lY2hhbmlzbXMgaW4gYnJvd3NlcnMgYmVjYXVzZSB0aGUgZnVuY3Rpb24gaXNuJ3QgYmxlc3NlZCBhc1xuICAgIC8vIGJlaW5nIGEgZGlyZWN0IHJlc3VsdCBvZiBhIHVzZXIgYWN0aW9uLlxuXG4gICAgLy8gZmV0Y2goXCJodHRwczovL2NvZGVzYW5kYm94LmlvL2FwaS92MS9zYW5kYm94ZXMvZGVmaW5lP2pzb249MVwiLCB7XG4gICAgLy8gICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmaWxlcyB9KSxcbiAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAvLyAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICAgIC8vIC50aGVuKHggPT4geC5qc29uKCkpXG4gICAgLy8gLnRoZW4oZGF0YSA9PiB7XG4gICAgLy8gICB3aW5kb3cub3BlbignaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zLycgKyBkYXRhLnNhbmRib3hfaWQsICdfYmxhbmsnKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvZGlmeShjb2RlOiBzdHJpbmcsIGV4dDogc3RyaW5nKSB7XG4gICAgcmV0dXJuICdgYGAnICsgZXh0ICsgJ1xcbicgKyBjb2RlICsgJ1xcbmBgYFxcbidcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG1ha2VNYXJrZG93bigpIHtcbiAgICBjb25zdCBxdWVyeSA9IHNhbmRib3guY3JlYXRlVVJMUXVlcnlXaXRoQ29tcGlsZXJPcHRpb25zKHNhbmRib3gpXG4gICAgY29uc3QgZnVsbFVSTCA9IGAke2RvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sfS8vJHtkb2N1bWVudC5sb2NhdGlvbi5ob3N0fSR7ZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWV9JHtxdWVyeX1gXG4gICAgY29uc3QganNTZWN0aW9uID0gc2FuZGJveC5jb25maWcudXNlSmF2YVNjcmlwdFxuICAgICAgPyAnJ1xuICAgICAgOiBgXG48ZGV0YWlscz48c3VtbWFyeT48Yj5PdXRwdXQ8L2I+PC9zdW1tYXJ5PlxuXG4ke2NvZGlmeShhd2FpdCBzYW5kYm94LmdldFJ1bm5hYmxlSlMoKSwgJ3RzJyl9XG5cbjwvZGV0YWlscz5cbmBcblxuICAgIHJldHVybiBgXG48IS0tIPCfmqggU1RPUCDwn5qoIPCdl6bwnZen8J2XovCdl6Mg8J+aqCDwnZG68J2Ru/CdkbbwnZG3IPCfmqhcblxuSGFsZiBvZiBhbGwgaXNzdWVzIGZpbGVkIGhlcmUgYXJlIGR1cGxpY2F0ZXMsIGFuc3dlcmVkIGluIHRoZSBGQVEsIG9yIG5vdCBhcHByb3ByaWF0ZSBmb3IgdGhlIGJ1ZyB0cmFja2VyLiBFdmVuIGlmIHlvdSB0aGluayB5b3UndmUgZm91bmQgYSAqYnVnKiwgcGxlYXNlIHJlYWQgdGhlIEZBUSBmaXJzdCwgZXNwZWNpYWxseSB0aGUgQ29tbW9uIFwiQnVnc1wiIFRoYXQgQXJlbid0IEJ1Z3Mgc2VjdGlvbiFcblxuUGxlYXNlIGhlbHAgdXMgYnkgZG9pbmcgdGhlIGZvbGxvd2luZyBzdGVwcyBiZWZvcmUgbG9nZ2luZyBhbiBpc3N1ZTpcbiAgKiBTZWFyY2g6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9zZWFyY2g/dHlwZT1Jc3N1ZXNcbiAgKiBSZWFkIHRoZSBGQVE6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC93aWtpL0ZBUVxuXG5QbGVhc2UgZmlsbCBpbiB0aGUgKmVudGlyZSogdGVtcGxhdGUgYmVsb3cuXG4tLT5cblxuKipUeXBlU2NyaXB0IFZlcnNpb246KiogICR7dHlwZXNjcmlwdFZlcnNpb259XG5cbjwhLS0gU2VhcmNoIHRlcm1zIHlvdSB0cmllZCBiZWZvcmUgbG9nZ2luZyB0aGlzIChzbyBvdGhlcnMgY2FuIGZpbmQgdGhpcyBpc3N1ZSBtb3JlIGVhc2lseSkgLS0+XG4qKlNlYXJjaCBUZXJtczoqKlxuXG4qKkV4cGVjdGVkIGJlaGF2aW9yOioqXG5cbioqQWN0dWFsIGJlaGF2aW9yOioqXG5cbjwhLS0gRGlkIHlvdSBmaW5kIG90aGVyIGJ1Z3MgdGhhdCBsb29rZWQgc2ltaWxhcj8gLS0+XG4qKlJlbGF0ZWQgSXNzdWVzOioqXG5cbioqQ29kZSoqXG4ke2NvZGlmeShzYW5kYm94LmdldFRleHQoKSwgJ3RzJyl9XG5cbiR7anNTZWN0aW9ufVxuXG48ZGV0YWlscz48c3VtbWFyeT48Yj5Db21waWxlciBPcHRpb25zPC9iPjwvc3VtbWFyeT5cblxuJHtjb2RpZnkoc3RyaW5naWZpZWRDb21waWxlck9wdGlvbnMsICdqc29uJyl9XG5cbjwvZGV0YWlscz5cblxuKipQbGF5Z3JvdW5kIExpbms6KiogW1Byb3ZpZGVkXSgke2Z1bGxVUkx9KVxuICAgICAgYFxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcmVwb3J0SXNzdWUoKSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IG1ha2VNYXJrZG93bigpXG4gICAgaWYgKGJvZHkubGVuZ3RoIDwgNDAwMCkge1xuICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvbmV3P2JvZHk9JyArIGVuY29kZVVSSUNvbXBvbmVudChib2R5KSlcbiAgICB9IGVsc2Uge1xuICAgICAgdWkuc2hvd01vZGFsKFxuICAgICAgICBib2R5LFxuICAgICAgICBcIklzc3VlIHRvbyBsb25nIHRvIHBvc3QgYXV0b21hdGljYWxseS4gQ29weSB0aGlzIHRleHQsIHRoZW4gY2xpY2sgJ0NyZWF0ZSBOZXcgSXNzdWUnIHRvIGJlZ2luLlwiLFxuICAgICAgICB7XG4gICAgICAgICAgJ0NyZWF0ZSBOZXcgSXNzdWUnOiAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy9uZXcnLFxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY29weUFzTWFya2Rvd25Jc3N1ZSgpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IGF3YWl0IG1ha2VNYXJrZG93bigpXG4gICAgdWkuc2hvd01vZGFsKG1hcmtkb3duLCAnTWFya2Rvd24gY29kZScpXG4gIH1cblxuICBmdW5jdGlvbiBjb3B5Rm9yQ2hhdCgpIHtcbiAgICBjb25zdCBxdWVyeSA9IHNhbmRib3guY3JlYXRlVVJMUXVlcnlXaXRoQ29tcGlsZXJPcHRpb25zKHNhbmRib3gpXG4gICAgY29uc3QgZnVsbFVSTCA9IGAke2RvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sfS8vJHtkb2N1bWVudC5sb2NhdGlvbi5ob3N0fSR7ZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWV9JHtxdWVyeX1gXG4gICAgY29uc3QgY2hhdCA9IGBbUGxheWdyb3VuZCBMaW5rXSgke2Z1bGxVUkx9KWBcbiAgICB1aS5zaG93TW9kYWwoY2hhdCwgJ01hcmtkb3duIGZvciBjaGF0JylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvcHlGb3JDaGF0V2l0aFByZXZpZXcoKSB7XG4gICAgY29uc3QgcXVlcnkgPSBzYW5kYm94LmNyZWF0ZVVSTFF1ZXJ5V2l0aENvbXBpbGVyT3B0aW9ucyhzYW5kYm94KVxuICAgIGNvbnN0IGZ1bGxVUkwgPSBgJHtkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbH0vLyR7ZG9jdW1lbnQubG9jYXRpb24uaG9zdH0ke2RvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lfSR7cXVlcnl9YFxuXG4gICAgY29uc3QgdHMgPSBzYW5kYm94LmdldFRleHQoKVxuICAgIGNvbnN0IHByZXZpZXcgPSB0cy5sZW5ndGggPiAyMDAgPyB0cy5zdWJzdHJpbmcoMCwgMjAwKSArICcuLi4nIDogdHMuc3Vic3RyaW5nKDAsIDIwMClcblxuICAgIGNvbnN0IGNvZGUgPSAnYGBgXFxuJyArIHByZXZpZXcgKyAnXFxuYGBgXFxuJ1xuICAgIGNvbnN0IGNoYXQgPSBgJHtjb2RlfVxcbltQbGF5Z3JvdW5kIExpbmtdKCR7ZnVsbFVSTH0pYFxuICAgIHVpLnNob3dNb2RhbChjaGF0LCAnTWFya2Rvd24gY29kZScpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9wZW5Qcm9qZWN0SW5TdGFja0JsaXR6LFxuICAgIG9wZW5Qcm9qZWN0SW5Db2RlU2FuZGJveCxcbiAgICByZXBvcnRJc3N1ZSxcbiAgICBjb3B5QXNNYXJrZG93bklzc3VlLFxuICAgIGNvcHlGb3JDaGF0LFxuICAgIGNvcHlGb3JDaGF0V2l0aFByZXZpZXcsXG4gICAgb3BlbkluVFNBU1QsXG4gIH1cbn1cbiJdfQ==