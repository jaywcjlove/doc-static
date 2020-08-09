(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{3265:function(a,b){a.exports={content:["article",{},["h2","Install and Initialization"],["p","Ensure your system has installed latest version of ",["a",{title:null,href:"https://yarnpkg.com"},"yarn"]," or ",["a",{title:null,href:"https://www.npmjs.com/"},"npm"],"."],["p","Create a new ",["a",{title:null,href:"https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript"},"cra-template-typescript"]," project named ",["code","antd-demo-ts"]," using yarn."],["pre",{lang:"bash",highlighted:`$ yarn create react-app antd-demo-ts --template typescript

<span class="token comment" spellcheck="true"># or</span>

npx create-react-app my-app --template typescript`},["code",`$ yarn create react-app antd-demo-ts --template typescript

# or

npx create-react-app my-app --template typescript`]],["p","If you are using npm (we will use yarn in the following instructions, it's ok to replace yarn with npm)"],["pre",{lang:"bash",highlighted:"$ npx create-react-app antd-demo-ts --typescript"},["code","$ npx create-react-app antd-demo-ts --typescript"]],["p","Then we go inside ",["code","antd-demo-ts"]," and start it."],["pre",{lang:"bash",highlighted:`$ <span class="token function">cd</span> antd-demo-ts
$ yarn start`},["code",`$ cd antd-demo-ts
$ yarn start`]],["p","Open browser at ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"],', it renders a header saying "Welcome to React" on the page.'],["h2","Import antd"],["pre",{lang:"bash",highlighted:"$ yarn add antd"},["code","$ yarn add antd"]],["p","Modify ",["code","src/App.tsx"],", import Button component from ",["code","antd"],"."],["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { FC } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
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

export default App;`]],["p","Add ",["code","antd/dist/antd.css"]," at the top of ",["code","src/App.css"],"."],["pre",{lang:"css",highlighted:`<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~antd/dist/antd.css'</span><span class="token punctuation">;</span></span>`},["code","@import '~antd/dist/antd.css';"]],["p","Ok, reboot with ",["code","yarn start"],", you should now see a blue primary button displayed on the page. Next you can choose any components of ",["code","antd"]," to develop your application. Visit other workflows of ",["code","create-react-app"]," at it's ",["a",{title:null,href:"https://create-react-app.dev/docs/getting-started#creating-a-typescript-app"},"User Guide"],"."],["p",["code","antd"]," is written in TypeScript with complete definitions, try out and enjoy the property suggestion and typing check."],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/antfincdn/26L5vPoLug/8d7da796-175e-40af-8eea-e7031ba09f9f.png",alt:null}]],["blockquote",["p","Don't install ",["code","@types/antd"],"."]],["h2","Advanced Guides"],["p","In the real world, we usually have to modify default webpack config for custom needs such as themes. We can achieve that by using ",["a",{title:null,href:"https://github.com/gsoft-inc/craco"},"craco"]," which is one of create-react-app's custom config solutions."],["p","Install craco and modify the ",["code","scripts"]," field in ",["code","package.json"],"."],["pre",{lang:"bash",highlighted:"$ yarn add @craco/craco"},["code","$ yarn add @craco/craco"]],["pre",{lang:"diff",highlighted:`/* package.json */
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
}`]],["p","Then create a ",["code","craco.config.js"]," at root directory of your project for further overriding."],["pre",{lang:"js",highlighted:`<span class="token comment" spellcheck="true">/* craco.config.js */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment" spellcheck="true">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`/* craco.config.js */
module.exports = {
  // ...
};`]],["h3","Customize Theme"],["p","According to the ",["a",{title:null,href:"/docs/react/customize-theme"},"Customize Theme documentation"],", we need to modify less variables via loader like ",["a",{title:null,href:"https://github.com/webpack/less-loader"},"less-loader"],". We can use ",["a",{title:null,href:"https://github.com/DocSpring/craco-less"},"craco-less"]," to achieve that,"],["p","First we should modify ",["code","src/App.css"]," to ",["code","src/App.less"],", then import less file instead."],["pre",{lang:"diff",highlighted:`/* src/App.ts */
<span class="token deleted">- import './App.css';</span>
<span class="token inserted">+ import './App.less';</span>`},["code",`/* src/App.ts */
- import './App.css';
+ import './App.less';`]],["pre",{lang:"diff",highlighted:`/* src/App.less */
<span class="token deleted">- @import '~antd/dist/antd.css';</span>
<span class="token inserted">+ @import '~antd/dist/antd.less';</span>`},["code",`/* src/App.less */
- @import '~antd/dist/antd.css';
+ @import '~antd/dist/antd.less';`]],["p","Then install ",["code","craco-less"]," and modify ",["code","craco.config.js"]," like below."],["pre",{lang:"bash",highlighted:"$ yarn add craco-less"},["code","$ yarn add craco-less"]],["pre",{lang:"js",highlighted:`<span class="token keyword">const</span> CracoLessPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'craco-less'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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
};`]],["p","By adding ",["code","modifyVars"]," option of ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," here, we should see a green button rendered on the page after rebooting the server now."],["p","We provide built-in dark theme and compact theme in antd, you can reference to ",["a",{title:null,href:"/docs/react/customize-theme#Use-dark-or-compact-theme"},"Use dark or compact theme"],"."],["blockquote",["p","You could also try ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-scripts-rewired"]," and ",["a",{title:null,href:"https://github.com/arackaf/customize-cra"},"customize-cra"]," to customize create-react-app webpack config like craco did."]],["h2","Alternative ways"],["p","Follow manual in ",["a",{title:null,href:"https://create-react-app.dev/docs/adding-typescript"},"Adding TypeScript"]," to setup TypeScript development environment if you already create a project by ",["a",{title:null,href:"/docs/react/use-with-create-react-app"},"Use in create-react-app"],"."],["ul",["li",["p",["a",{title:null,href:"https://github.com/SZzzzz/react-scripts-ts-antd"},"Create React apps (with Typescript and antd) with no build configuration"]]],["li",["p",["a",{title:null,href:"https://github.com/lwd-technology/react-app-rewire-typescript"},"react-app-rewire-typescript"]]],["li",["p",["a",{title:null,href:"https://github.com/Brooooooklyn/ts-import-plugin"},"ts-import-plugin"]]],["li",["p",["a",{title:null,href:"https://vincenttunru.com/migrate-create-react-app-typescript-to-create-react-app/"},"Migrating from create-react-app-typescript to Create React App"]]]]],meta:{order:5,title:"Use in TypeScript",filename:"docs/react/use-in-typescript.en-US.md"},description:["section",["p","Let's create a TypeScript project by using ",["code","create-react-app"],", then import ",["code","antd"]," step by step."],["blockquote",["p","We build ",["code","antd"]," based on latest stable version of TypeScript (",["code",">=3.8.4"],"), please make sure your project dependency matches it."]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Install-and-Initialization",title:"Install and Initialization"},"Install and Initialization"]],["li",["a",{className:"bisheng-toc-h2",href:"#Import-antd",title:"Import antd"},"Import antd"]],["li",["a",{className:"bisheng-toc-h2",href:"#Advanced-Guides",title:"Advanced Guides"},"Advanced Guides"]],["li",["a",{className:"bisheng-toc-h2",href:"#Alternative-ways",title:"Alternative ways"},"Alternative ways"]]]}}}]);
