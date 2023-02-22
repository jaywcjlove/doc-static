import{_ as e,C as r,o as t,c as l,j as a,a as i}from"./app.8d30a6c9.js";const o=JSON.parse('{"title":"工具链","description":"","frontmatter":{},"headers":[{"level":2,"title":"在线尝试","slug":"try-it-online","link":"#try-it-online","children":[]},{"level":2,"title":"项目脚手架","slug":"project-scaffolding","link":"#project-scaffolding","children":[{"level":3,"title":"Vite","slug":"vite","link":"#vite","children":[]},{"level":3,"title":"Vue CLI","slug":"vue-cli","link":"#vue-cli","children":[]},{"level":3,"title":"浏览器内模板编译注意事项","slug":"note-on-in-browser-template-compilation","link":"#note-on-in-browser-template-compilation","children":[]}]},{"level":2,"title":"IDE 支持","slug":"ide-support","link":"#ide-support","children":[]},{"level":2,"title":"浏览器开发者插件","slug":"browser-devtools","link":"#browser-devtools","children":[]},{"level":2,"title":"TypeScript","slug":"typescript","link":"#typescript","children":[]},{"level":2,"title":"测试","slug":"testing","link":"#testing","children":[]},{"level":2,"title":"代码规范","slug":"linting","link":"#linting","children":[]},{"level":2,"title":"格式化","slug":"formatting","link":"#formatting","children":[]},{"level":2,"title":"SFC 自定义块集成","slug":"sfc-custom-block-integrations","link":"#sfc-custom-block-integrations","children":[]},{"level":2,"title":"底层库","slug":"lower-level-packages","link":"#lower-level-packages","children":[{"level":3,"title":"@vue/compiler-sfc","slug":"vue-compiler-sfc","link":"#vue-compiler-sfc","children":[]},{"level":3,"title":"@vitejs/plugin-vue","slug":"vitejs-plugin-vue","link":"#vitejs-plugin-vue","children":[]},{"level":3,"title":"vue-loader","slug":"vue-loader","link":"#vue-loader","children":[]}]},{"level":2,"title":"其他在线演练场","slug":"other-online-playgrounds","link":"#other-online-playgrounds","children":[]}],"relativePath":"guide/scaling-up/tooling.md"}'),n={name:"guide/scaling-up/tooling.md"},s=i('<h1 id="tooling" tabindex="-1">工具链 <a class="header-anchor" href="#tooling" aria-hidden="true">#</a></h1><h2 id="try-it-online" tabindex="-1">在线尝试 <a class="header-anchor" href="#try-it-online" aria-hidden="true">#</a></h2><p>你不需要在机器上安装任何东西，也可以尝试基于单文件组件的 Vue 开发体验。我们提供了一个在线的演练场，可以在浏览器中访问：</p><ul><li><a href="https://sfc.vuejs.org" target="_blank" rel="noreferrer">Vue SFC 演练场</a><ul><li>自动随着 Vue 仓库最新的提交更新</li><li>支持检查编译输出的结果</li></ul></li><li><a href="https://vite.new/vue" target="_blank" rel="noreferrer">StackBlitz 中的 Vue + Vite</a><ul><li>类似 IDE 的环境，但实际是在浏览器中运行 Vite 开发服务器</li><li>和本地开发效果更接近</li></ul></li></ul><p>在报告 Bug 时，我们也建议使用这些在线演练场来提供最小化重现。</p><h2 id="project-scaffolding" tabindex="-1">项目脚手架 <a class="header-anchor" href="#project-scaffolding" aria-hidden="true">#</a></h2><h3 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h3><p><a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">Vite</a> 是一个轻量级的、速度极快的构建工具，对 Vue SFC 提供第一优先级支持。作者是尤雨溪，同时也是 Vue 的作者！</p><p>要使用 Vite 来创建一个 Vue 项目，非常简单：</p><div class="language-sh"><pre><code><span class="line"><span style="color:var(--vt-c-green);">$</span> <span style="color:#A6ACCD;">npm init vue@latest</span></span></code></pre></div><p>这个命令会安装和执行 <a href="https://github.com/vuejs/create-vue" target="_blank" rel="noreferrer">create-vue</a>，它是 Vue 提供的官方脚手架工具。跟随命令行的提示继续操作即可。</p><ul><li>要学习更多关于 Vite 的知识，请查看 <a href="https://cn.vitejs.dev" target="_blank" rel="noreferrer">Vite 官方文档</a>。</li><li>若要了解如何为一个 Vite 项目配置 Vue 相关的特殊行为，比如向 Vue 编译器传递相关选项，请查看 <a href="https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#readme" target="_blank" rel="noreferrer">@vitejs/plugin-vue</a> 的文档。</li></ul><p>上面提到的两种在线演练场也支持将文件作为一个 Vite 项目下载。</p><h3 id="vue-cli" tabindex="-1">Vue CLI <a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a></h3><p><a href="https://cli.vuejs.org/zh/" target="_blank" rel="noreferrer">Vue CLI</a> 是官方提供的基于 Webpack 的 Vue 工具链，它现在处于维护模式。我们建议使用 Vite 开始新的项目，除非你依赖特定的 Webpack 的特性。在大多数情况下，Vite 将提供更优秀的开发体验。</p><p>关于从 Vue CLI 迁移到 Vite 的资源：</p><ul><li><a href="https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/" target="_blank" rel="noreferrer">VueSchool.io 的 Vue CLI -&gt; Vite 迁移指南</a></li><li><a href="https://github.com/vitejs/awesome-vite#vue-cli" target="_blank" rel="noreferrer">迁移支持工具 / 插件</a></li></ul><h3 id="note-on-in-browser-template-compilation" tabindex="-1">浏览器内模板编译注意事项 <a class="header-anchor" href="#note-on-in-browser-template-compilation" aria-hidden="true">#</a></h3><p>当以无构建步骤方式使用 Vue 时，组件模板要么是写在页面的 HTML 中，或者是内联的 JavaScript 字符串。在这些场景中，为了执行动态模板编译，Vue 需要将模板编译器运行在浏览器中。相对的，如果我们使用了构建步骤，由于提前编译了模板，那么就无须再在浏览器中运行了。为了减小打包出的客户端代码体积，Vue 提供了<a href="https://unpkg.com/browse/vue@3/dist/" target="_blank" rel="noreferrer">多种格式的“构建文件”</a>以适配不同场景下的优化需求。</p><ul><li><p>前缀为 <code>vue.runtime.*</code> 的文件是<strong>只包含运行时的版本</strong>：不包含编译器，当使用这个版本时，所有的模板都必须由构建步骤预先编译。</p></li><li><p>名称中不包含 <code>.runtime</code> 的文件则是<strong>完全版</strong>：即包含了编译器，并支持在浏览器中直接编译模板。然而，体积也会因此增长大约 14kb。</p></li></ul><p>默认的工具链中都会使用仅含运行时的版本，因为所有 SFC 中的模板都已经被预编译了。如果因为某些原因，在有构建步骤时，你仍需要浏览器内的模板编译，你可以更改构建工具配置，将 <code>vue</code> 改为相应的版本 <code>vue/dist/vue.esm-bundler.js</code>。</p><p>如果你需要一种更轻量级，不依赖构建步骤的替代方案，也可以看看 <a href="https://github.com/vuejs/petite-vue" target="_blank" rel="noreferrer">petite-vue</a>。</p><h2 id="ide-support" tabindex="-1">IDE 支持 <a class="header-anchor" href="#ide-support" aria-hidden="true">#</a></h2><ul><li><p>推荐使用的 IDE 是 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a>，配合 <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noreferrer">Volar</a> 插件。Volar 提供了语法高亮、TypeScript 支持，以及模板内表达式与组件 props 的智能提示。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Volar 取代了我们之前为 Vue 2 提供的官方 VSCode 扩展 <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noreferrer">Vetur</a>。如果你之前已经安装了 Vetur，请确保在 Vue 3 的项目中禁用它。</p></div></li><li><p><a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noreferrer">WebStorm</a> 同样也为 Vue 的单文件组件提供了很好的内置支持。</p></li><li><p>其他支持<a href="https://microsoft.github.io/language-server-protocol/" target="_blank" rel="noreferrer">语言服务协议</a> (LSP) 的 IDE 也可以通过 LSP 享受到 Volar 所提供的核心功能：</p><ul><li><p>Sublime Text 通过 <a href="https://github.com/sublimelsp/LSP-volar" target="_blank" rel="noreferrer">LSP-Volar</a> 支持。</p></li><li><p>vim / Neovim 通过 <a href="https://github.com/yaegassy/coc-volar" target="_blank" rel="noreferrer">coc-volar</a> 支持。</p></li><li><p>emacs 通过 <a href="https://emacs-lsp.github.io/lsp-mode/page/lsp-volar/" target="_blank" rel="noreferrer">lsp-mode</a> 支持。</p></li></ul></li></ul><h2 id="browser-devtools" tabindex="-1">浏览器开发者插件 <a class="header-anchor" href="#browser-devtools" aria-hidden="true">#</a></h2>',25),u=i('<p>Vue 的浏览器开发者插件使我们可以浏览一个 Vue 应用的组件树，查看各个组件的状态，追踪状态管理的事件，还可以进行组件性能分析。</p><p><img src="https://raw.githubusercontent.com/vuejs/devtools/main/media/screenshot-shadow.png" alt="devtools 截图"></p><ul><li><a href="https://devtools.vuejs.org/" target="_blank" rel="noreferrer">文档</a></li><li><a href="https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd" target="_blank" rel="noreferrer">Chrome 插件商店页</a></li><li><a href="https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/" target="_blank" rel="noreferrer">Firefox 所属插件页</a></li><li><a href="https://devtools.vuejs.org/guide/installation.html#standalone" target="_blank" rel="noreferrer">独立的 Electron 应用所属插件</a></li></ul><h2 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h2><p>具体细节请参考章节：<a href="/guide/typescript/overview.html">配合 TypeScript 使用 Vue</a>。</p><ul><li><p><a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noreferrer">Volar</a> 插件能够为 <code>&lt;script lang=&quot;ts&quot;&gt;</code> 块提供类型检查，也能对模板内表达式和组件之间 props 提供自动补全和类型验证。</p></li><li><p>使用 <a href="https://github.com/johnsoncodehk/volar/tree/master/vue-language-tools/vue-tsc" target="_blank" rel="noreferrer"><code>vue-tsc</code></a> 可以在命令行中执行相同的类型检查，通常用来生成单文件组件的 <code>d.ts</code> 文件。</p></li></ul><h2 id="testing" tabindex="-1">测试 <a class="header-anchor" href="#testing" aria-hidden="true">#</a></h2><p>具体细节请参考章节：<a href="/guide/scaling-up/testing.html">测试指南</a>。</p><ul><li><p><a href="https://www.cypress.io/" target="_blank" rel="noreferrer">Cypress</a> 推荐用于 E2E 测试。也可以通过 <a href="https://docs.cypress.io/guides/component-testing/introduction" target="_blank" rel="noreferrer">Cypress 组件测试运行器</a>来给 Vue SFC 作单文件组件测试。</p></li><li><p><a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a> 是一个追求更快运行速度的测试运行器，由 Vue / Vite 团队成员开发。主要针对基于 Vite 的应用设计，可以为组件提供即时响应的测试反馈。</p></li><li><p><a href="https://jestjs.io/" target="_blank" rel="noreferrer">Jest</a> 可以通过 <a href="https://github.com/sodatea/vite-jest" target="_blank" rel="noreferrer">vite-jest</a> 配合 Vite 使用。不过只推荐在你已经有一套基于 Jest 的测试集、且想要迁移到基于 Vite 的开发配置时使用，因为 Vitest 也能够提供类似的功能，且后者与 Vite 的集成更方便高效。</p></li></ul><h2 id="linting" tabindex="-1">代码规范 <a class="header-anchor" href="#linting" aria-hidden="true">#</a></h2><p>Vue 团队维护着 <a href="https://github.com/vuejs/eslint-plugin-vue" target="_blank" rel="noreferrer">eslint-plugin-vue</a> 项目，它是一个 <a href="https://eslint.org/" target="_blank" rel="noreferrer">ESLint</a> 插件，会提供 SFC 相关规则的定义。</p><p>之前使用 Vue CLI 的用户可能习惯于通过 webpack loader 来配置规范检查器。然而，若基于 Vite 构建，我们一般推荐：</p><ol><li><p><code>npm install -D eslint eslint-plugin-vue</code>，然后遵照 <code>eslint-plugin-vue</code> 的<a href="https://eslint.vuejs.org/user-guide/#usage" target="_blank" rel="noreferrer">指引</a>进行配置。</p></li><li><p>启用 ESLint IDE 插件，比如 <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noreferrer">ESLint for VSCode</a>，然后你就可以在开发时获得规范检查器的反馈。这同时也避免了启动开发服务器时不必要的规范检查。</p></li><li><p>将 ESLint 格式检查作为一个生产构建的步骤，保证你可以在最终打包时获得完整的规范检查反馈。</p></li><li><p>(可选) 启用类似 <a href="https://github.com/okonet/lint-staged" target="_blank" rel="noreferrer">lint-staged</a> 一类的工具在 git commit 提交时自动执行规范检查。</p></li></ol><h2 id="formatting" tabindex="-1">格式化 <a class="header-anchor" href="#formatting" aria-hidden="true">#</a></h2><ul><li><p><a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noreferrer">Volar</a> VSCode 插件为 Vue SFC 提供了开箱即用的格式化功能。</p></li><li><p>除此之外，<a href="https://prettier.io/" target="_blank" rel="noreferrer">Prettier</a> 也提供了内置的 Vue SFC 格式化支持。</p></li></ul><h2 id="sfc-custom-block-integrations" tabindex="-1">SFC 自定义块集成 <a class="header-anchor" href="#sfc-custom-block-integrations" aria-hidden="true">#</a></h2><p>自定义块被编译成导入到同一 Vue 文件的不同请求查询。这取决于底层构建工具如何处理这类导入请求。</p><ul><li><p>如果使用 Vite，需使用一个自定义 Vite 插件将自定义块转换为可执行的 JavaScript 代码。<a href="https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-transforming-custom-blocks" target="_blank" rel="noreferrer">示例</a>。</p></li><li><p>如果使用 Vue CLI 或只是 webpack，需要使用一个 loader 来配置如何转换匹配到的自定义块。<a href="https://vue-loader.vuejs.org/zh/guide/custom-blocks.html" target="_blank" rel="noreferrer">示例</a>。</p></li></ul><h2 id="lower-level-packages" tabindex="-1">底层库 <a class="header-anchor" href="#lower-level-packages" aria-hidden="true">#</a></h2><h3 id="vue-compiler-sfc" tabindex="-1"><code>@vue/compiler-sfc</code> <a class="header-anchor" href="#vue-compiler-sfc" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/vuejs/core/tree/main/packages/compiler-sfc" target="_blank" rel="noreferrer">文档</a></li></ul><p>这个包是 Vue 核心 monorepo 的一部分，并始终和 <code>vue</code> 主包版本号保持一致。它已经成为 <code>vue</code> 主包的一个依赖并代理到了 <code>vue/compiler-sfc</code> 目录下，因此你无需单独安装它。</p><p>这个包本身提供了处理 Vue SFC 的底层的功能，并只适用于需要支持 Vue SFC 相关工具链的开发者。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请始终选择通过 <code>vue/compiler-sfc</code> 的深度导入来使用这个包，因为这样可以确保其与 Vue 运行时版本同步。</p></div><h3 id="vitejs-plugin-vue" tabindex="-1"><code>@vitejs/plugin-vue</code> <a class="header-anchor" href="#vitejs-plugin-vue" aria-hidden="true">#</a></h3><ul><li><a href="https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue" target="_blank" rel="noreferrer">文档</a></li></ul><p>为 Vite 提供 Vue SFC 支持的官方插件。</p><h3 id="vue-loader" tabindex="-1"><code>vue-loader</code> <a class="header-anchor" href="#vue-loader" aria-hidden="true">#</a></h3><ul><li><a href="https://vue-loader.vuejs.org/zh/" target="_blank" rel="noreferrer">文档</a></li></ul><p>为 webpack 提供 Vue SFC 支持的官方 loader。如果你正在使用 Vue CLI，也可以看看<a href="https://cli.vuejs.org/zh/guide/webpack.html#%E4%BF%AE%E6%94%B9-loader-%E9%80%89%E9%A1%B9" target="_blank" rel="noreferrer">如何在 Vue CLI 中更改 <code>vue-loader</code> 选项的文档</a>。</p><h2 id="other-online-playgrounds" tabindex="-1">其他在线演练场 <a class="header-anchor" href="#other-online-playgrounds" aria-hidden="true">#</a></h2><ul><li><a href="https://play.vueuse.org" target="_blank" rel="noreferrer">VueUse Playground</a></li><li><a href="https://replit.com/@templates/VueJS-with-Vite" target="_blank" rel="noreferrer">Vue + Vite on Repl.it</a></li><li><a href="https://codesandbox.io/s/vue-3" target="_blank" rel="noreferrer">Vue on CodeSandbox</a></li><li><a href="https://codepen.io/pen/editor/vue" target="_blank" rel="noreferrer">Vue on Codepen</a></li><li><a href="https://components.studio/create/vue3" target="_blank" rel="noreferrer">Vue on Components.studio</a></li><li><a href="https://webcomponents.dev/create/cevue" target="_blank" rel="noreferrer">Vue on WebComponents.dev</a></li></ul>',32);const p=e(n,[["render",function(e,i,o,n,p,h){const c=r("VueSchoolLink");return t(),l("div",null,[s,a(c,{href:"https://vueschool.io/lessons/using-vue-dev-tools-with-vuejs-3",title:"开发者工具 - 免费 Vue.js 课程"}),u])}]]);export{o as __pageData,p as default};
