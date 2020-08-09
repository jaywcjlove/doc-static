(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{3266:function(a,b){a.exports={content:["article",{},["h2","安装和初始化"],["p","请确保电脑上已经安装了最新版的 ",["a",{title:null,href:"https://yarnpkg.com"},"yarn"]," 或者 ",["a",{title:null,href:"https://www.npmjs.com/"},"npm"],"。"],["p","使用 yarn 创建 ",["a",{title:null,href:"https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript"},"cra-template-typescript"]," 项目。"],["pre",{lang:"bash",highlighted:"$ yarn create react-app antd-demo-ts --template typescript"},["code","$ yarn create react-app antd-demo-ts --template typescript"]],["p","如果你使用的是 npm（接下来我们都会用 yarn 作为例子，如果你习惯用 npm 也没问题）。"],["pre",{lang:"bash",highlighted:"$ npx create-react-app antd-demo-ts --typescript"},["code","$ npx create-react-app antd-demo-ts --typescript"]],["p","然后我们进入项目并启动。"],["pre",{lang:"bash",highlighted:`$ <span class="token function">cd</span> antd-demo-ts
$ yarn start`},["code",`$ cd antd-demo-ts
$ yarn start`]],["p","此时浏览器会访问 ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"]," ，看到 ",["code","Welcome to React"]," 的界面就算成功了。"],["h2","引入 antd"],["pre",{lang:"bash",highlighted:"$ yarn add antd"},["code","$ yarn add antd"]],["p","修改 ",["code","src/App.tsx"],"，引入 antd 的按钮组件。"],["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { FC } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Button } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token string">'./App.css'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span><span class="token operator">></span>Button<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`},["code",`import React, { FC } from 'react';
import { Button } from 'antd';
import './App.css';

const App: FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;`]],["p","修改 ",["code","src/App.css"],"，在文件顶部引入 antd 的样式。"],["pre",{lang:"css",highlighted:`<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~antd/dist/antd.css'</span><span class="token punctuation">;</span></span>`},["code","@import '~antd/dist/antd.css';"]],["p","重新启动 ",["code","yarn start"],"，现在你应该能看到页面上已经有了 antd 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的",["a",{title:null,href:"https://create-react-app.dev/docs/getting-started#creating-a-typescript-app"},"官方文档"],"。"],["p",["code","antd"]," 使用 TypeScript 书写并提供了完整的定义，你可以享受组件属性输入建议和定义检查的功能。"],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/antfincdn/26L5vPoLug/8d7da796-175e-40af-8eea-e7031ba09f9f.png",alt:null}]],["blockquote",["p","注意不要安装 ",["code","@types/antd"],"。"]],["h2","高级配置"],["p","这个例子在实际开发中还有一些优化的空间，比如无法进行主题配置。"],["p","此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 ",["a",{title:null,href:"https://github.com/gsoft-inc/craco"},"craco"]," （一个对 create-react-app 进行自定义配置的社区解决方案）。"],["p","现在我们安装 craco 并修改 ",["code","package.json"]," 里的 ",["code","scripts"]," 属性。"],["pre",{lang:"bash",highlighted:"$ yarn add @craco/craco"},["code","$ yarn add @craco/craco"]],["pre",{lang:"diff",highlighted:`/* package.json */
"scripts": {
<span class="token deleted">-   "start": "react-scripts start",</span>
<span class="token deleted">-   "build": "react-scripts build",</span>
<span class="token deleted">-   "test": "react-scripts test",</span>
<span class="token inserted">+   "start": "craco start",</span>
<span class="token inserted">+   "build": "craco build",</span>
<span class="token inserted">+   "test": "craco test",</span>
}`},["code",`/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}`]],["p","然后在项目根目录创建一个 ",["code","craco.config.js"]," 用于修改默认配置。"],["pre",{lang:"js",highlighted:`<span class="token comment" spellcheck="true">/* craco.config.js */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment" spellcheck="true">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`/* craco.config.js */
module.exports = {
  // ...
};`]],["h3","自定义主题"],["p","按照 ",["a",{title:null,href:"/docs/react/customize-theme"},"配置主题"]," 的要求，自定义主题需要用到类似 ",["a",{title:null,href:"https://github.com/webpack-contrib/less-loader/"},"less-loader"]," 提供的 less 变量覆盖功能。我们可以引入 ",["a",{title:null,href:"https://github.com/DocSpring/craco-less"},"craco-less"]," 来帮助加载 less 样式和修改变量。"],["p","首先把 ",["code","src/App.css"]," 文件修改为 ",["code","src/App.less"],"，然后修改样式引用为 less 文件。"],["pre",{lang:"diff",highlighted:`/* src/App.ts */
<span class="token deleted">- import './App.css';</span>
<span class="token inserted">+ import './App.less';</span>`},["code",`/* src/App.ts */
- import './App.css';
+ import './App.less';`]],["pre",{lang:"diff",highlighted:`/* src/App.less */
<span class="token deleted">- @import '~antd/dist/antd.css';</span>
<span class="token inserted">+ @import '~antd/dist/antd.less';</span>`},["code",`/* src/App.less */
- @import '~antd/dist/antd.css';
+ @import '~antd/dist/antd.less';`]],["p","然后安装 ",["code","craco-less"]," 并修改 ",["code","craco.config.js"]," 文件如下。"],["pre",{lang:"bash",highlighted:"$ yarn add craco-less"},["code","$ yarn add craco-less"]],["pre",{lang:"js",highlighted:`<span class="token keyword">const</span> CracoLessPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'craco-less'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      plugin<span class="token punctuation">:</span> CracoLessPlugin<span class="token punctuation">,</span>
      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        lessLoaderOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>
          lessOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>
            modifyVars<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token string">'@primary-color'</span><span class="token punctuation">:</span> <span class="token string">'#1DA57A'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            javascriptEnabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};`]],["p","这里利用了 ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," 的 ",["code","modifyVars"]," 来进行主题配置，变量和其他配置方式可以参考 ",["a",{title:null,href:"/docs/react/customize-theme"},"配置主题"]," 文档。修改后重启 ",["code","yarn start"],"，如果看到一个绿色的按钮就说明配置成功了。"],["p","antd 内建了深色主题和紧凑主题，你可以参照 ",["a",{title:null,href:"/docs/react/customize-theme#使用暗色主题和紧凑主题"},"使用暗色主题和紧凑主题"]," 进行接入。"],["blockquote",["p","同样，你可以使用 ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-scripts-rewired"]," 和 ",["a",{title:null,href:"https://github.com/arackaf/customize-cra"},"customize-cra"]," 来自定义 create-react-app 的 webpack 配置。"]],["h2","其他方案"],["p","如果你已经按照 ",["a",{title:null,href:"/docs/react/use-with-create-react-app"},"在 create-react-app 中使用"]," 初始化了环境，可以参考官方文档里的 ",["a",{title:null,href:"https://create-react-app.dev/docs/adding-typescript"},"Adding TypeScript"]," 配置 TypeScript 开发环境。"],["ul",["li",["p",["a",{title:null,href:"https://github.com/SZzzzz/react-scripts-ts-antd"},"Create React apps (with Typescript and antd) with no build configuration"]]],["li",["p",["a",{title:null,href:"https://github.com/lwd-technology/react-app-rewire-typescript"},"react-app-rewire-typescript"]]],["li",["p",["a",{title:null,href:"https://github.com/Brooooooklyn/ts-import-plugin"},"ts-import-plugin"]]],["li",["p",["a",{title:null,href:"https://vincenttunru.com/migrate-create-react-app-typescript-to-create-react-app/"},"Migrating from create-react-app-typescript to Create React App"]]]]],meta:{order:5,title:"在 TypeScript 中使用",filename:"docs/react/use-in-typescript.zh-CN.md"},description:["section",["p","使用 ",["code","create-react-app"]," 一步步地创建一个 TypeScript 项目，并引入 antd。"],["blockquote",["p",["code","antd"]," 基于最新稳定版本的 TypeScript（",["code",">=3.8.4"],"），请确保项目中使用匹配的版本。"]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#安装和初始化",title:"安装和初始化"},"安装和初始化"]],["li",["a",{className:"bisheng-toc-h2",href:"#引入-antd",title:"引入 antd"},"引入 antd"]],["li",["a",{className:"bisheng-toc-h2",href:"#高级配置",title:"高级配置"},"高级配置"]],["li",["a",{className:"bisheng-toc-h2",href:"#其他方案",title:"其他方案"},"其他方案"]]]}}}]);
