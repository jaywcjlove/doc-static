(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{3197:function(s,n){s.exports={content:["article",["p","Ant Design allows you to customize our design tokens to satisfy UI diversity from business or brand requirements, including primary color, border radius, border color, etc."],["p",["img",{title:null,src:"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",alt:"customized themes"}]],["h2","Ant Design Less variables"],["p","We are using ",["a",{title:null,href:"http://lesscss.org/"},"Less"]," as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs."],["p","There are some major variables below, all less variables could be found in ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"Default Variables"],"."],["pre",{lang:"less",highlighted:`<span class="token variable">@primary-color<span class="token punctuation">:</span></span> <span class="token hexcode">#1890ff</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// primary color for all components</span>
<span class="token variable">@link-color<span class="token punctuation">:</span></span> <span class="token hexcode">#1890ff</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// link color</span>
<span class="token variable">@success-color<span class="token punctuation">:</span></span> <span class="token hexcode">#52c41a</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// success state color</span>
<span class="token variable">@warning-color<span class="token punctuation">:</span></span> <span class="token hexcode">#faad14</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// warning state color</span>
<span class="token variable">@error-color<span class="token punctuation">:</span></span> <span class="token hexcode">#f5222d</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// error state color</span>
<span class="token variable">@font-size-base<span class="token punctuation">:</span></span> <span class="token number">14</span>px<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// major text font size</span>
<span class="token variable">@heading-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.85</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// heading text color</span>
<span class="token variable">@text-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.65</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// major text color</span>
<span class="token variable">@text-color-secondary<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.45</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// secondary text color</span>
<span class="token variable">@disabled-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// disable state color</span>
<span class="token variable">@border-radius-base<span class="token punctuation">:</span></span> <span class="token number">2</span>px<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// major border radius</span>
<span class="token variable">@border-color-base<span class="token punctuation">:</span></span> <span class="token hexcode">#d9d9d9</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// major border color</span>
<span class="token variable">@box-shadow-base<span class="token punctuation">:</span></span> <span class="token number">0</span> <span class="token number">3</span>px <span class="token number">6</span>px <span class="token operator">-</span><span class="token number">4</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token number">6</span>px <span class="token number">16</span>px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.08</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token number">0</span> <span class="token number">9</span>px <span class="token number">28</span>px <span class="token number">8</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// major shadow for layers</span>`},["code",`@primary-color: #1890ff; // primary color for all components
@link-color: #1890ff; // link color
@success-color: #52c41a; // success state color
@warning-color: #faad14; // warning state color
@error-color: #f5222d; // error state color
@font-size-base: 14px; // major text font size
@heading-color: rgba(0, 0, 0, 0.85); // heading text color
@text-color: rgba(0, 0, 0, 0.65); // major text color
@text-color-secondary: rgba(0, 0, 0, 0.45); // secondary text color
@disabled-color: rgba(0, 0, 0, 0.25); // disable state color
@border-radius-base: 2px; // major border radius
@border-color-base: #d9d9d9; // major border color
@box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05); // major shadow for layers`]],["p","Please report an issue if the existing list of variables is not enough for you."],["h2","How to do it"],["p","We will use ",["a",{title:null,href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"},"modifyVars"]," provided by less.js to override the default values of the variables, You can use this ",["a",{title:null,href:"https://github.com/ant-design/create-react-app-antd"},"example"]," as a live playground. We now introduce some popular way to do it depends on different workflow."],["h3","Customize in webpack"],["p","We take a typical ",["code","webpack.config.js"]," file as example to customize its ",["a",{title:null,href:"https://github.com/webpack-contrib/less-loader"},"less-loader"]," options."],["pre",{lang:"diff",highlighted:`// webpack.config.js
module.exports = {
  rules: [{
    test: /\\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
<span class="token inserted">+     options: {</span>
<span class="token inserted">+       lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly</span>
<span class="token inserted">+         modifyVars: {</span>
<span class="token inserted">+           'primary-color': '#1DA57A',</span>
<span class="token inserted">+           'link-color': '#1DA57A',</span>
<span class="token inserted">+           'border-radius-base': '2px',</span>
<span class="token inserted">+         },</span>
<span class="token inserted">+         javascriptEnabled: true,</span>
<span class="token inserted">+       },</span>
<span class="token inserted">+     },</span>
    }],
    // ...other rules
  }],
  // ...other config
}`},["code",`// webpack.config.js
module.exports = {
  rules: [{
    test: /\\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
+     options: {
+       lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
+         modifyVars: {
+           'primary-color': '#1DA57A',
+           'link-color': '#1DA57A',
+           'border-radius-base': '2px',
+         },
+         javascriptEnabled: true,
+       },
+     },
    }],
    // ...other rules
  }],
  // ...other config
}`]],["p","Note:"],["ol",["li",["p","Don't exclude ",["code","node_modules/antd"]," when using less-loader."]],["li",["p",["code","lessOptions"]," usage is supported at ",["a",{title:null,href:"https://github.com/webpack-contrib/less-loader/releases/tag/v6.0.0"},"less-loader@6.0.0"],"."]]],["h3","Customize in Umi"],["p","You can easily use ",["a",{title:null,href:"https://umijs.org/config/#theme"},"theme"]," field in ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/56e648ec14bdb9f6724169fd64830447e224ccb1/config/config.js#L45"},"config/config.js"]," (Umi) file of your project root directory if you are using ",["a",{title:null,href:"http://umijs.org/"},"Umi"],", which could be an object or a javascript file path."],["pre",{lang:"js",highlighted:`<span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
  <span class="token string">"primary-color"</span><span class="token punctuation">:</span> <span class="token string">"#1DA57A"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>`},["code",`"theme": {
  "primary-color": "#1DA57A",
},`]],["p","Or just ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/b7e7983661eb5e53dc807452e9653e93e74276d4/.webpackrc.js#L18"},"a javascript file path"],":"],["pre",{lang:"js",highlighted:'<span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token string">"./theme.js"</span><span class="token punctuation">,</span>'},["code",'"theme": "./theme.js",']],["h3","Customize in create-react-app"],["p","Follow ",["a",{title:null,href:"/docs/react/use-with-create-react-app"},"Use in create-react-app"],"."],["h3","Customize in less file"],["p","Another approach to customize theme is creating a ",["code","less"]," file within variables to override ",["code","antd.less"],"."],["pre",{lang:"css",highlighted:`<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~antd/lib/style/themes/default.less'</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~antd/dist/antd.less'</span><span class="token punctuation">;</span></span> // Import Ant Design styles by less entry
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'your-theme-file.less'</span><span class="token punctuation">;</span></span> // variables to override above`},["code",`@import '~antd/lib/style/themes/default.less';
@import '~antd/dist/antd.less'; // Import Ant Design styles by less entry
@import 'your-theme-file.less'; // variables to override above`]],["p","Note: This way will load the styles of all components, regardless of your demand, which cause ",["code","style"]," option of ",["code","babel-plugin-import"]," not working."],["h2","How to avoid modifying global styles?"],["p","Currently ant-design is designed as a whole experience and modify global styles (eg ",["code","body"]," etc). If you need to integrate ant-design as a part of an existing website, it's likely you want to prevent ant-design to override global styles."],["p","While there's no canonical way to do it, you can take one of the following paths :"],["h3","Configure webpack to load an alternate less file and scope global styles"],["p","It's possible to configure webpack to load an alternate less file:"],["pre",{lang:"ts",highlighted:`<span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>NormalModuleReplacementPlugin</span><span class="token punctuation">(</span> <span class="token regex">/node_modules\\/antd\\/lib\\/style\\/index\\.less/</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>rootDir<span class="token punctuation">,</span> <span class="token string">'src/myStylesReplacement.less'</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>

#antd <span class="token punctuation">{</span> @<span class="token keyword">import</span> <span class="token string">'~antd/lib/style/core/index.less'</span><span class="token punctuation">;</span> @<span class="token keyword">import</span> <span class="token string">'~antd/lib/style/themes/default.less'</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>`},["code",`new webpack.NormalModuleReplacementPlugin( /node_modules\\/antd\\/lib\\/style\\/index\\.less/, path.resolve(rootDir, 'src/myStylesReplacement.less') )

#antd { @import '~antd/lib/style/core/index.less'; @import '~antd/lib/style/themes/default.less'; }`]],["p",'Where the src/myStylesReplacement.less file loads the same files as the index.less file, but loads them within the scope of a top-level selector : the result is that all of the "global" styles are being applied with the #antd scope.'],["h3","Use a postcss processor to scope all styles"],["p","See an example of usage with gulp and ",["a",{title:null,href:"https://github.com/dbtedman/postcss-prefixwrap"},"postcss-prefixwrap"]," : ",["a",{title:null,href:"https://gist.github.com/sbusch/a90eafaf5a5b61c6d6172da6ff76ddaa"},"https://gist.github.com/sbusch/a90eafaf5a5b61c6d6172da6ff76ddaa"]],["h2","Not working?"],["p","You must import styles as less format. A common mistake would be importing multiple copied of styles that some of them are css format to override the less styles."],["ul",["li",["p","If you import styles by specifying the ",["code","style"]," option of ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],", change it from ",["code","'css'"]," to ",["code","true"],", which will import the ",["code","less"]," version of antd."]],["li",["p","If you import styles from ",["code","'antd/dist/antd.css'"],", change it to ",["code","antd/dist/antd.less"],"."]]],["h2","Official Themes \u{1F308}"],["p","We have some official themes, try them out and give us some feedback!"],["ul",["li",["p","\u{1F311} Dark Theme (supported in 4.0.0+)"]],["li",["p","\u{1F4E6} Compact Theme (supported in 4.1.0+)"]],["li",["p","\u2601\uFE0F ",["a",{title:null,href:"https://github.com/ant-design/ant-design-aliyun-theme"},"Aliyun Console Theme (Beta)"]]]],["h3","Use dark or compact theme"],["p",["img",{title:null,src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*mYU9R4YFxscAAAAAAAAAAABkARQnAQ",alt:null}]],["p","Method 1: using Umi 3"],["p","If you're using ",["a",{title:null,href:"http://umijs.org/zh/"},"Umi 3"],", which only need two steps:"],["ol",["li",["p","Install ",["code","@umijs/plugin-antd"]," plugin;"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> i @umijs/plugin-antd -D'},["code","$ npm i @umijs/plugin-antd -D"]]],["li",["p","set ",["code","dark"]," or ",["code","compact"]," to ",["code","true"],"."],["pre",{lang:"js",highlighted:`<span class="token comment" spellcheck="true">// .umirc.ts or config/config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  antd<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    dark<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// active dark theme</span>
    compact<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// active compact theme</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>`},["code",`// .umirc.ts or config/config.ts
export default {
  antd: {
    dark: true, // active dark theme
    compact: true, // active compact theme
  },
},`]]]],["p","Method 2: Import ",["a",{title:null,href:"https://unpkg.com/browse/antd@4.x/dist/antd.dark.less"},"antd/dist/antd.dark.less"]," or ",["a",{title:null,href:"https://unpkg.com/browse/antd@4.x/dist/antd.compact.less"},"antd/dist/antd.compact.less"]," in the style file:"],["pre",{lang:"less",highlighted:`<span class="token variable">@import</span> <span class="token string">'~antd/dist/antd.dark.less'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Introduce the official dark less style entry file</span>
<span class="token variable">@import</span> <span class="token string">'~antd/dist/antd.compact.less'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// Introduce the official compact less style entry file</span>`},["code",`@import '~antd/dist/antd.dark.less'; // Introduce the official dark less style entry file
@import '~antd/dist/antd.compact.less'; // Introduce the official compact less style entry file`]],["p","If the project does not use Less, you can import ",["a",{title:null,href:"https://unpkg.com/browse/antd@4.x/dist/antd.dark.css"},"antd.dark.css"]," or ",["a",{title:null,href:"https://unpkg.com/browse/antd@4.x/dist/antd.compact.css"},"antd/dist/antd.compact.css"]," in the CSS file:"],["pre",{lang:"css",highlighted:`<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~antd/dist/antd.dark.css'</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~antd/dist/antd.compact.css'</span><span class="token punctuation">;</span></span>`},["code",`@import '~antd/dist/antd.dark.css';
@import '~antd/dist/antd.compact.css';`]],["blockquote",["p","Note that you don't need to import ",["code","antd/dist/antd.less"]," or ",["code","antd/dist/antd.css"]," anymore, please remove it, and remove babel-plugin-import ",["code","style"]," config too. You can't enable two or more theme at the same time by this method."]],["p","Method 3: using ",["a",{title:null,href:"https://github.com/webpack-contrib/less-loader"},"less-loader"]," in ",["code","webpack.config.js"]," to introduce as needed:"],["pre",{lang:"diff",highlighted:`const { getThemeVariables } = require('antd/dist/theme');

// webpack.config.js
module.exports = {
  rules: [{
    test: /\\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
<span class="token inserted">+     options: {</span>
<span class="token inserted">+       lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly</span>
<span class="token inserted">+         modifyVars: getThemeVariables({</span>
<span class="token inserted">+           dark: true, // \u5F00\u542F\u6697\u9ED1\u6A21\u5F0F</span>
<span class="token inserted">+           compact: true, // \u5F00\u542F\u7D27\u51D1\u6A21\u5F0F</span>
<span class="token inserted">+         }),</span>
<span class="token inserted">+         javascriptEnabled: true,</span>
<span class="token inserted">+       },</span>
<span class="token inserted">+     },</span>
    }],
  }],
};`},["code",`const { getThemeVariables } = require('antd/dist/theme');

// webpack.config.js
module.exports = {
  rules: [{
    test: /\\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
+     options: {
+       lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
+         modifyVars: getThemeVariables({
+           dark: true, // \u5F00\u542F\u6697\u9ED1\u6A21\u5F0F
+           compact: true, // \u5F00\u542F\u7D27\u51D1\u6A21\u5F0F
+         }),
+         javascriptEnabled: true,
+       },
+     },
    }],
  }],
};`]],["h2","Related Articles"],["ul",["li",["p",["a",{title:null,href:"https://intoli.com/blog/antd-scss-theme-plugin/"},"Using Ant Design in Sass-Styled Webpack Projects with ",["code","antd-scss-theme-plugin"]]]],["li",["p",["a",{title:null,href:"https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f"},"How to Customize Ant Design with React & Webpack\u2026 the Missing Guide"]]],["li",["p",["a",{title:null,href:"https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7"},"Theming Ant Design with Sass and Webpack"]]],["li",["p",["a",{title:null,href:"https://medium.com/@mzohaib.qc/using-sass-scss-with-react-app-create-react-app-d03072083ef8"},"Using Sass/Scss with React App (create-react-app)"]]],["li",["p",["a",{title:null,href:"https://medium.com/@mzohaib.qc/ant-design-dynamic-runtime-theme-1f9a1a030ba0"},"Dynamic Theming in Browser using Ant Design"]]],["li",["p",["a",{title:null,href:"https://www.npmjs.com/package/@emeks/antd-custom-theme-generator"},"Zero config custom theme generator"]]]]],meta:{order:7,title:"Customize Theme",filename:"docs/react/customize-theme.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Ant-Design-Less-variables",title:"Ant Design Less variables"},"Ant Design Less variables"]],["li",["a",{className:"bisheng-toc-h2",href:"#How-to-do-it",title:"How to do it"},"How to do it"]],["li",["a",{className:"bisheng-toc-h2",href:"#How-to-avoid-modifying-global-styles?",title:"How to avoid modifying global styles?"},"How to avoid modifying global styles?"]],["li",["a",{className:"bisheng-toc-h2",href:"#Not-working?",title:"Not working?"},"Not working?"]],["li",["a",{className:"bisheng-toc-h2",href:"#Official-Themes-\u{1F308}",title:"Official Themes \u{1F308}"},"Official Themes \u{1F308}"]],["li",["a",{className:"bisheng-toc-h2",href:"#Related-Articles",title:"Related Articles"},"Related Articles"]]]}}}]);
