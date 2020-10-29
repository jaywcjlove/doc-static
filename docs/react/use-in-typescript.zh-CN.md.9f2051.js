(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{3283:function(s,t){s.exports={content:["article",{},["h2","\u5B89\u88C5\u548C\u521D\u59CB\u5316"],["p","\u8BF7\u786E\u4FDD\u7535\u8111\u4E0A\u5DF2\u7ECF\u5B89\u88C5\u4E86\u6700\u65B0\u7248\u7684 ",["a",{title:null,href:"https://yarnpkg.com"},"yarn"]," \u6216\u8005 ",["a",{title:null,href:"https://www.npmjs.com/"},"npm"],"\u3002"],["p","\u4F7F\u7528 yarn \u521B\u5EFA ",["a",{title:null,href:"https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript"},"cra-template-typescript"]," \u9879\u76EE\u3002"],["pre",{lang:"bash",highlighted:"$ yarn create react-app antd-demo-ts --template typescript"},["code","$ yarn create react-app antd-demo-ts --template typescript"]],["p","\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F npm\uFF08\u63A5\u4E0B\u6765\u6211\u4EEC\u90FD\u4F1A\u7528 yarn \u4F5C\u4E3A\u4F8B\u5B50\uFF0C\u5982\u679C\u4F60\u4E60\u60EF\u7528 npm \u4E5F\u6CA1\u95EE\u9898\uFF09\u3002"],["pre",{lang:"bash",highlighted:"$ npx create-react-app antd-demo-ts --typescript"},["code","$ npx create-react-app antd-demo-ts --typescript"]],["p","\u7136\u540E\u6211\u4EEC\u8FDB\u5165\u9879\u76EE\u5E76\u542F\u52A8\u3002"],["pre",{lang:"bash",highlighted:`$ <span class="token function">cd</span> antd-demo-ts
$ yarn start`},["code",`$ cd antd-demo-ts
$ yarn start`]],["p","\u6B64\u65F6\u6D4F\u89C8\u5668\u4F1A\u8BBF\u95EE ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"]," \uFF0C\u770B\u5230 ",["code","Welcome to React"]," \u7684\u754C\u9762\u5C31\u7B97\u6210\u529F\u4E86\u3002"],["h2","\u5F15\u5165 antd"],["pre",{lang:"bash",highlighted:"$ yarn add antd"},["code","$ yarn add antd"]],["p","\u4FEE\u6539 ",["code","src/App.tsx"],"\uFF0C\u5F15\u5165 antd \u7684\u6309\u94AE\u7EC4\u4EF6\u3002"],["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { FC } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
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

export default App;`]],["p","\u4FEE\u6539 ",["code","src/App.css"],"\uFF0C\u5728\u6587\u4EF6\u9876\u90E8\u5F15\u5165 antd \u7684\u6837\u5F0F\u3002"],["pre",{lang:"css",highlighted:`<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~antd/dist/antd.css'</span><span class="token punctuation">;</span></span>`},["code","@import '~antd/dist/antd.css';"]],["p","\u91CD\u65B0\u542F\u52A8 ",["code","yarn start"],"\uFF0C\u73B0\u5728\u4F60\u5E94\u8BE5\u80FD\u770B\u5230\u9875\u9762\u4E0A\u5DF2\u7ECF\u6709\u4E86 antd \u7684\u84DD\u8272\u6309\u94AE\u7EC4\u4EF6\uFF0C\u63A5\u4E0B\u6765\u5C31\u53EF\u4EE5\u7EE7\u7EED\u9009\u7528\u5176\u4ED6\u7EC4\u4EF6\u5F00\u53D1\u5E94\u7528\u4E86\u3002\u5176\u4ED6\u5F00\u53D1\u6D41\u7A0B\u4F60\u53EF\u4EE5\u53C2\u8003 create-react-app \u7684",["a",{title:null,href:"https://create-react-app.dev/docs/getting-started#creating-a-typescript-app"},"\u5B98\u65B9\u6587\u6863"],"\u3002"],["p",["code","antd"]," \u4F7F\u7528 TypeScript \u4E66\u5199\u5E76\u63D0\u4F9B\u4E86\u5B8C\u6574\u7684\u5B9A\u4E49\uFF0C\u4F60\u53EF\u4EE5\u4EAB\u53D7\u7EC4\u4EF6\u5C5E\u6027\u8F93\u5165\u5EFA\u8BAE\u548C\u5B9A\u4E49\u68C0\u67E5\u7684\u529F\u80FD\u3002"],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/antfincdn/26L5vPoLug/8d7da796-175e-40af-8eea-e7031ba09f9f.png",alt:null}]],["blockquote",["p","\u6CE8\u610F\u4E0D\u8981\u5B89\u88C5 ",["code","@types/antd"],"\u3002"]],["h2","\u9AD8\u7EA7\u914D\u7F6E"],["p","\u8FD9\u4E2A\u4F8B\u5B50\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u8FD8\u6709\u4E00\u4E9B\u4F18\u5316\u7684\u7A7A\u95F4\uFF0C\u6BD4\u5982\u65E0\u6CD5\u8FDB\u884C\u4E3B\u9898\u914D\u7F6E\u3002"],["p","\u6B64\u65F6\u6211\u4EEC\u9700\u8981\u5BF9 create-react-app \u7684\u9ED8\u8BA4\u914D\u7F6E\u8FDB\u884C\u81EA\u5B9A\u4E49\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 ",["a",{title:null,href:"https://github.com/gsoft-inc/craco"},"craco"]," \uFF08\u4E00\u4E2A\u5BF9 create-react-app \u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E\u7684\u793E\u533A\u89E3\u51B3\u65B9\u6848\uFF09\u3002"],["p","\u73B0\u5728\u6211\u4EEC\u5B89\u88C5 craco \u5E76\u4FEE\u6539 ",["code","package.json"]," \u91CC\u7684 ",["code","scripts"]," \u5C5E\u6027\u3002"],["pre",{lang:"bash",highlighted:"$ yarn add @craco/craco"},["code","$ yarn add @craco/craco"]],["pre",{lang:"diff",highlighted:`/* package.json */
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
}`]],["p","\u7136\u540E\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2A ",["code","craco.config.js"]," \u7528\u4E8E\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\u3002"],["pre",{lang:"js",highlighted:`<span class="token comment" spellcheck="true">/* craco.config.js */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment" spellcheck="true">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`/* craco.config.js */
module.exports = {
  // ...
};`]],["h3","\u81EA\u5B9A\u4E49\u4E3B\u9898"],["p","\u6309\u7167 ",["a",{title:null,href:"/docs/react/customize-theme"},"\u914D\u7F6E\u4E3B\u9898"]," \u7684\u8981\u6C42\uFF0C\u81EA\u5B9A\u4E49\u4E3B\u9898\u9700\u8981\u7528\u5230\u7C7B\u4F3C ",["a",{title:null,href:"https://github.com/webpack-contrib/less-loader/"},"less-loader"]," \u63D0\u4F9B\u7684 less \u53D8\u91CF\u8986\u76D6\u529F\u80FD\u3002\u6211\u4EEC\u53EF\u4EE5\u5F15\u5165 ",["a",{title:null,href:"https://github.com/DocSpring/craco-less"},"craco-less"]," \u6765\u5E2E\u52A9\u52A0\u8F7D less \u6837\u5F0F\u548C\u4FEE\u6539\u53D8\u91CF\u3002"],["p","\u9996\u5148\u628A ",["code","src/App.css"]," \u6587\u4EF6\u4FEE\u6539\u4E3A ",["code","src/App.less"],"\uFF0C\u7136\u540E\u4FEE\u6539\u6837\u5F0F\u5F15\u7528\u4E3A less \u6587\u4EF6\u3002"],["pre",{lang:"diff",highlighted:`/* src/App.ts */
<span class="token deleted">- import './App.css';</span>
<span class="token inserted">+ import './App.less';</span>`},["code",`/* src/App.ts */
- import './App.css';
+ import './App.less';`]],["pre",{lang:"diff",highlighted:`/* src/App.less */
<span class="token deleted">- @import '~antd/dist/antd.css';</span>
<span class="token inserted">+ @import '~antd/dist/antd.less';</span>`},["code",`/* src/App.less */
- @import '~antd/dist/antd.css';
+ @import '~antd/dist/antd.less';`]],["p","\u7136\u540E\u5B89\u88C5 ",["code","craco-less"]," \u5E76\u4FEE\u6539 ",["code","craco.config.js"]," \u6587\u4EF6\u5982\u4E0B\u3002"],["pre",{lang:"bash",highlighted:"$ yarn add craco-less"},["code","$ yarn add craco-less"]],["pre",{lang:"js",highlighted:`<span class="token keyword">const</span> CracoLessPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'craco-less'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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
};`]],["p","\u8FD9\u91CC\u5229\u7528\u4E86 ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," \u7684 ",["code","modifyVars"]," \u6765\u8FDB\u884C\u4E3B\u9898\u914D\u7F6E\uFF0C\u53D8\u91CF\u548C\u5176\u4ED6\u914D\u7F6E\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003 ",["a",{title:null,href:"/docs/react/customize-theme"},"\u914D\u7F6E\u4E3B\u9898"]," \u6587\u6863\u3002\u4FEE\u6539\u540E\u91CD\u542F ",["code","yarn start"],"\uFF0C\u5982\u679C\u770B\u5230\u4E00\u4E2A\u7EFF\u8272\u7684\u6309\u94AE\u5C31\u8BF4\u660E\u914D\u7F6E\u6210\u529F\u4E86\u3002"],["p","antd \u5185\u5EFA\u4E86\u6DF1\u8272\u4E3B\u9898\u548C\u7D27\u51D1\u4E3B\u9898\uFF0C\u4F60\u53EF\u4EE5\u53C2\u7167 ",["a",{title:null,href:"/docs/react/customize-theme#\u4F7F\u7528\u6697\u8272\u4E3B\u9898\u548C\u7D27\u51D1\u4E3B\u9898"},"\u4F7F\u7528\u6697\u8272\u4E3B\u9898\u548C\u7D27\u51D1\u4E3B\u9898"]," \u8FDB\u884C\u63A5\u5165\u3002"],["blockquote",["p","\u540C\u6837\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"]," \u548C ",["a",{title:null,href:"https://github.com/arackaf/customize-cra"},"customize-cra"]," \u6765\u81EA\u5B9A\u4E49 create-react-app \u7684 webpack \u914D\u7F6E\u3002"]],["h2","\u5176\u4ED6\u65B9\u6848"],["p","\u5982\u679C\u4F60\u5DF2\u7ECF\u6309\u7167 ",["a",{title:null,href:"/docs/react/use-with-create-react-app"},"\u5728 create-react-app \u4E2D\u4F7F\u7528"]," \u521D\u59CB\u5316\u4E86\u73AF\u5883\uFF0C\u53EF\u4EE5\u53C2\u8003\u5B98\u65B9\u6587\u6863\u91CC\u7684 ",["a",{title:null,href:"https://create-react-app.dev/docs/adding-typescript"},"Adding TypeScript"]," \u914D\u7F6E TypeScript \u5F00\u53D1\u73AF\u5883\u3002"],["ul",["li",["p",["a",{title:null,href:"https://github.com/SZzzzz/react-scripts-ts-antd"},"Create React apps (with Typescript and antd) with no build configuration"]]],["li",["p",["a",{title:null,href:"https://github.com/lwd-technology/react-app-rewire-typescript"},"react-app-rewire-typescript"]]],["li",["p",["a",{title:null,href:"https://github.com/Brooooooklyn/ts-import-plugin"},"ts-import-plugin"]]],["li",["p",["a",{title:null,href:"https://vincenttunru.com/migrate-create-react-app-typescript-to-create-react-app/"},"Migrating from create-react-app-typescript to Create React App"]]]]],meta:{order:5,title:"\u5728 TypeScript \u4E2D\u4F7F\u7528",filename:"docs/react/use-in-typescript.zh-CN.md"},description:["section",["p","\u4F7F\u7528 ",["code","create-react-app"]," \u4E00\u6B65\u6B65\u5730\u521B\u5EFA\u4E00\u4E2A TypeScript \u9879\u76EE\uFF0C\u5E76\u5F15\u5165 antd\u3002"],["blockquote",["p",["code","antd"]," \u57FA\u4E8E\u6700\u65B0\u7A33\u5B9A\u7248\u672C\u7684 TypeScript\uFF08",["code",">=3.8.4"],"\uFF09\uFF0C\u8BF7\u786E\u4FDD\u9879\u76EE\u4E2D\u4F7F\u7528\u5339\u914D\u7684\u7248\u672C\u3002"]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5B89\u88C5\u548C\u521D\u59CB\u5316",title:"\u5B89\u88C5\u548C\u521D\u59CB\u5316"},"\u5B89\u88C5\u548C\u521D\u59CB\u5316"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5F15\u5165-antd",title:"\u5F15\u5165 antd"},"\u5F15\u5165 antd"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u9AD8\u7EA7\u914D\u7F6E",title:"\u9AD8\u7EA7\u914D\u7F6E"},"\u9AD8\u7EA7\u914D\u7F6E"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5176\u4ED6\u65B9\u6848",title:"\u5176\u4ED6\u65B9\u6848"},"\u5176\u4ED6\u65B9\u6848"]]]}}}]);
