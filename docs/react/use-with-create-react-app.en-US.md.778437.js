(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{3284:function(n,s){n.exports={content:["article",{},["h2","Install and Initialization"],["p","Before all start, you may need install ",["a",{title:null,href:"https://github.com/yarnpkg/yarn/"},"yarn"],"."],["pre",{lang:"bash",highlighted:`$ yarn create react-app antd-demo

<span class="token comment" spellcheck="true"># or</span>

$ npx create-react-app antd-demo`},["code",`$ yarn create react-app antd-demo

# or

$ npx create-react-app antd-demo`]],["p","The tool will create and initialize environment and dependencies automatically, please try config your proxy setting or use another npm registry if any network errors happen during it."],["p","Then we go inside ",["code","antd-demo"]," and start it."],["pre",{lang:"bash",highlighted:`$ <span class="token function">cd</span> antd-demo
$ yarn start`},["code",`$ cd antd-demo
$ yarn start`]],["p","Open the browser at ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"],'. It renders a header saying "Welcome to React" on the page.'],["h2","Import antd"],["p","Below is the default directory structure."],["pre",{lang:null,highlighted:`\u251C\u2500\u2500 README<span class="token punctuation">.</span>md
\u251C\u2500\u2500 package<span class="token punctuation">.</span>json
\u251C\u2500\u2500 public
\u2502   \u251C\u2500\u2500 favicon<span class="token punctuation">.</span>ico
\u2502   \u2514\u2500\u2500 index<span class="token punctuation">.</span>html
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 App<span class="token punctuation">.</span>css
\u2502   \u251C\u2500\u2500 App<span class="token punctuation">.</span>js
\u2502   \u251C\u2500\u2500 App<span class="token punctuation">.</span>test<span class="token punctuation">.</span>js
\u2502   \u251C\u2500\u2500 index<span class="token punctuation">.</span>css
\u2502   \u251C\u2500\u2500 index<span class="token punctuation">.</span>js
\u2502   \u2514\u2500\u2500 logo<span class="token punctuation">.</span>svg
\u2514\u2500\u2500 yarn<span class="token punctuation">.</span>lock`},["code",`\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 public
\u2502\xA0\xA0 \u251C\u2500\u2500 favicon.ico
\u2502\xA0\xA0 \u2514\u2500\u2500 index.html
\u251C\u2500\u2500 src
\u2502\xA0\xA0 \u251C\u2500\u2500 App.css
\u2502\xA0\xA0 \u251C\u2500\u2500 App.js
\u2502\xA0\xA0 \u251C\u2500\u2500 App.test.js
\u2502\xA0\xA0 \u251C\u2500\u2500 index.css
\u2502\xA0\xA0 \u251C\u2500\u2500 index.js
\u2502\xA0\xA0 \u2514\u2500\u2500 logo.svg
\u2514\u2500\u2500 yarn.lock`]],["p","Now we install ",["code","antd"]," from yarn or npm."],["pre",{lang:"bash",highlighted:"$ yarn add antd"},["code","$ yarn add antd"]],["p","Modify ",["code","src/App.js"],", import Button component from ",["code","antd"],"."],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./App.css'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`},["code",`import React from 'react';
import { Button } from 'antd';
import './App.css';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;`]],["p","Add ",["code","antd/dist/antd.css"]," at the top of ",["code","src/App.css"],"."],["pre",{lang:"css",highlighted:`<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~antd/dist/antd.css'</span><span class="token punctuation">;</span></span>`},["code","@import '~antd/dist/antd.css';"]],["p","Ok, you should now see a blue primary button displayed on the page. Next you can choose any components of ",["code","antd"]," to develop your application. Visit other workflows of ",["code","create-react-app"]," at its ",["a",{title:null,href:"https://create-react-app.dev/docs/getting-started"},"User Guide"],"."],["p","We are successfully running antd components now, go build your own application!"],["h2","Test with Jest"],["p",["code","create-react-app"]," comes with ",["code","jest"]," built in. Jest does not support ",["code","esm"]," modules, and Ant Design uses them. In order to test your Ant Design application with Jest you have to add the following to your ",["code","package.json"]," :"],["pre",{lang:"json",highlighted:`<span class="token property">"jest"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"transformIgnorePatterns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime<span class="token punctuation">)</span>.+(js|jsx<span class="token punctuation">)</span>$"
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>`},["code",`"jest": {
  "transformIgnorePatterns": [
    "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$"
  ]
}`]],["h2","Advanced Guides"],["p","In the real world, we usually have to modify default webpack config for custom needs such as themes. We can achieve that by using ",["a",{title:null,href:"https://github.com/gsoft-inc/craco"},"craco"]," which is one of create-react-app's custom config solutions."],["p","Install craco and modify the ",["code","scripts"]," field in ",["code","package.json"],"."],["pre",{lang:"bash",highlighted:"$ yarn add @craco/craco"},["code","$ yarn add @craco/craco"]],["pre",{lang:"diff",highlighted:`/* package.json */
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
};`]],["h3","Customize Theme"],["p","According to the ",["a",{title:null,href:"/docs/react/customize-theme"},"Customize Theme documentation"],", we need to modify less variables via loader like ",["a",{title:null,href:"https://github.com/webpack/less-loader"},"less-loader"],". We can use ",["a",{title:null,href:"https://github.com/DocSpring/craco-less"},"craco-less"]," to achieve that,"],["p","First we should modify ",["code","src/App.css"]," to ",["code","src/App.less"],", then import less file instead."],["pre",{lang:"diff",highlighted:`/* src/App.js */
<span class="token deleted">- import './App.css';</span>
<span class="token inserted">+ import './App.less';</span>`},["code",`/* src/App.js */
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
};`]],["p","By adding ",["code","modifyVars"]," option of ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," here, we should see a green button rendered on the page after rebooting the server now."],["p","We provide built-in dark theme and compact theme in antd, you can reference to ",["a",{title:null,href:"/docs/react/customize-theme#Use-dark-or-compact-theme"},"Use dark or compact theme"],"."],["blockquote",["p","You could also try ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"]," and ",["a",{title:null,href:"https://github.com/arackaf/customize-cra"},"customize-cra"]," to customize create-react-app webpack config like craco did."]],["h2","eject"],["p","You can also eject your application using ",["a",{title:null,href:"https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject"},"yarn run eject"]," for a custom setup of create-react-app, although you should dig into it by yourself."],["h2","Summary"],["p","Finally, we used antd with create-react-app successfully, the source code of this guide was pushed to ",["a",{title:null,href:"https://github.com/ant-design/create-react-app-antd"},"create-react-app-antd"]," which you could clone and use it directly."],["p","Next part, We will introduce how to use antd in ",["a",{title:null,href:"/docs/react/use-in-typescript"},"TypeScript"]," and ",["a",{title:null,href:"/docs/react/practical-projects"},"Umi"],", let's keep moving!"]],meta:{order:4,title:"Use in create-react-app",filename:"docs/react/use-with-create-react-app.en-US.md"},description:["section",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," is one of the best React application development tools. We are going to use ",["code","antd"]," within it and modify the webpack config for some customized needs."]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Install-and-Initialization",title:"Install and Initialization"},"Install and Initialization"]],["li",["a",{className:"bisheng-toc-h2",href:"#Import-antd",title:"Import antd"},"Import antd"]],["li",["a",{className:"bisheng-toc-h2",href:"#Test-with-Jest",title:"Test with Jest"},"Test with Jest"]],["li",["a",{className:"bisheng-toc-h2",href:"#Advanced-Guides",title:"Advanced Guides"},"Advanced Guides"]],["li",["a",{className:"bisheng-toc-h2",href:"#eject",title:"eject"},"eject"]],["li",["a",{className:"bisheng-toc-h2",href:"#Summary",title:"Summary"},"Summary"]]]}}}]);
