(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{3265:function(s,n){s.exports={content:["article",["p","Ant Design \u8BBE\u8BA1\u89C4\u8303\u548C\u6280\u672F\u4E0A\u652F\u6301\u7075\u6D3B\u7684\u6837\u5F0F\u5B9A\u5236\uFF0C\u4EE5\u6EE1\u8DB3\u4E1A\u52A1\u548C\u54C1\u724C\u4E0A\u591A\u6837\u5316\u7684\u89C6\u89C9\u9700\u6C42\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u5168\u5C40\u6837\u5F0F\uFF08\u4E3B\u8272\u3001\u5706\u89D2\u3001\u8FB9\u6846\uFF09\u548C\u6307\u5B9A\u7EC4\u4EF6\u7684\u89C6\u89C9\u5B9A\u5236\u3002"],["p",["img",{title:null,src:"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",alt:"\u4E00\u4E9B\u914D\u7F6E\u597D\u7684\u4E3B\u9898"}]],["h2","Ant Design \u7684\u6837\u5F0F\u53D8\u91CF"],["p","antd \u7684\u6837\u5F0F\u4F7F\u7528\u4E86 ",["a",{title:null,href:"http://lesscss.org/"},"Less"]," \u4F5C\u4E3A\u5F00\u53D1\u8BED\u8A00\uFF0C\u5E76\u5B9A\u4E49\u4E86\u4E00\u7CFB\u5217\u5168\u5C40/\u7EC4\u4EF6\u7684\u6837\u5F0F\u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u8FDB\u884C\u76F8\u5E94\u8C03\u6574\u3002"],["p","\u4EE5\u4E0B\u662F\u4E00\u4E9B\u6700\u5E38\u7528\u7684\u901A\u7528\u53D8\u91CF\uFF0C\u6240\u6709\u6837\u5F0F\u53D8\u91CF\u53EF\u4EE5\u5728 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"\u8FD9\u91CC"]," \u627E\u5230\u3002"],["pre",{lang:"less",highlighted:`<span class="token variable">@primary-color<span class="token punctuation">:</span></span> <span class="token hexcode">#1890ff</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u5168\u5C40\u4E3B\u8272</span>
<span class="token variable">@link-color<span class="token punctuation">:</span></span> <span class="token hexcode">#1890ff</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u94FE\u63A5\u8272</span>
<span class="token variable">@success-color<span class="token punctuation">:</span></span> <span class="token hexcode">#52c41a</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u6210\u529F\u8272</span>
<span class="token variable">@warning-color<span class="token punctuation">:</span></span> <span class="token hexcode">#faad14</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u8B66\u544A\u8272</span>
<span class="token variable">@error-color<span class="token punctuation">:</span></span> <span class="token hexcode">#f5222d</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u9519\u8BEF\u8272</span>
<span class="token variable">@font-size-base<span class="token punctuation">:</span></span> <span class="token number">14</span>px<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u4E3B\u5B57\u53F7</span>
<span class="token variable">@heading-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.85</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u6807\u9898\u8272</span>
<span class="token variable">@text-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.65</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u4E3B\u6587\u672C\u8272</span>
<span class="token variable">@text-color-secondary<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.45</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u6B21\u6587\u672C\u8272</span>
<span class="token variable">@disabled-color<span class="token punctuation">:</span></span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u5931\u6548\u8272</span>
<span class="token variable">@border-radius-base<span class="token punctuation">:</span></span> <span class="token number">2</span>px<span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u7EC4\u4EF6/\u6D6E\u5C42\u5706\u89D2</span>
<span class="token variable">@border-color-base<span class="token punctuation">:</span></span> <span class="token hexcode">#d9d9d9</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u8FB9\u6846\u8272</span>
<span class="token variable">@box-shadow-base<span class="token punctuation">:</span></span> <span class="token number">0</span> <span class="token number">3</span>px <span class="token number">6</span>px <span class="token operator">-</span><span class="token number">4</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.12</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token number">6</span>px <span class="token number">16</span>px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.08</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token number">0</span> <span class="token number">9</span>px <span class="token number">28</span>px <span class="token number">8</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u6D6E\u5C42\u9634\u5F71</span>`},["code",`@primary-color: #1890ff; // \u5168\u5C40\u4E3B\u8272
@link-color: #1890ff; // \u94FE\u63A5\u8272
@success-color: #52c41a; // \u6210\u529F\u8272
@warning-color: #faad14; // \u8B66\u544A\u8272
@error-color: #f5222d; // \u9519\u8BEF\u8272
@font-size-base: 14px; // \u4E3B\u5B57\u53F7
@heading-color: rgba(0, 0, 0, 0.85); // \u6807\u9898\u8272
@text-color: rgba(0, 0, 0, 0.65); // \u4E3B\u6587\u672C\u8272
@text-color-secondary: rgba(0, 0, 0, 0.45); // \u6B21\u6587\u672C\u8272
@disabled-color: rgba(0, 0, 0, 0.25); // \u5931\u6548\u8272
@border-radius-base: 2px; // \u7EC4\u4EF6/\u6D6E\u5C42\u5706\u89D2
@border-color-base: #d9d9d9; // \u8FB9\u6846\u8272
@box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05); // \u6D6E\u5C42\u9634\u5F71`]],["p","\u5982\u679C\u4EE5\u4E0A\u53D8\u91CF\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u5B9A\u5236\u9700\u6C42\uFF0C\u53EF\u4EE5\u7ED9\u6211\u4EEC\u63D0 issue\u3002"],["h2","\u5B9A\u5236\u65B9\u5F0F"],["p","\u539F\u7406\u4E0A\u662F\u4F7F\u7528 less \u63D0\u4F9B\u7684 ",["a",{title:null,href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"},"modifyVars"]," \u7684\u65B9\u5F0F\u8FDB\u884C\u8986\u76D6\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728\u672C\u5730\u8FD0\u884C ",["a",{title:null,href:"https://github.com/ant-design/create-react-app-antd"},"\u4F8B\u5B50"]," \u67E5\u770B\u5B9A\u5236\u6548\u679C\u3002\u4E0B\u9762\u5C06\u9488\u5BF9\u4E0D\u540C\u7684\u573A\u666F\u63D0\u4F9B\u4E00\u4E9B\u5E38\u7528\u7684\u5B9A\u5236\u65B9\u5F0F\u3002"],["h3","\u5728 webpack \u4E2D\u5B9A\u5236\u4E3B\u9898"],["p","\u6211\u4EEC\u4EE5 webpack@4 \u4E3A\u4F8B\u8FDB\u884C\u8BF4\u660E\uFF0C\u4EE5\u4E0B\u662F\u4E00\u4E2A ",["code","webpack.config.js"]," \u7684\u5178\u578B\u4F8B\u5B50\uFF0C\u5BF9 ",["a",{title:null,href:"https://github.com/webpack-contrib/less-loader"},"less-loader"]," \u7684 options \u5C5E\u6027\u8FDB\u884C\u76F8\u5E94\u914D\u7F6E\u3002"],["pre",{lang:"diff",highlighted:`// webpack.config.js
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
<span class="token inserted">+       lessOptions: { // \u5982\u679C\u4F7F\u7528less-loader@5\uFF0C\u8BF7\u79FB\u9664 lessOptions \u8FD9\u4E00\u7EA7\u76F4\u63A5\u914D\u7F6E\u9009\u9879\u3002</span>
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
+       lessOptions: { // \u5982\u679C\u4F7F\u7528less-loader@5\uFF0C\u8BF7\u79FB\u9664 lessOptions \u8FD9\u4E00\u7EA7\u76F4\u63A5\u914D\u7F6E\u9009\u9879\u3002
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
}`]],["p","\u6CE8\u610F\uFF1A"],["ol",["li",["p","less-loader \u7684\u5904\u7406\u8303\u56F4\u4E0D\u8981\u8FC7\u6EE4\u6389 ",["code","node_modules"]," \u4E0B\u7684 antd \u5305\u3002"]],["li",["p",["code","lessOptions"]," \u7684\u914D\u7F6E\u5199\u6CD5\u5728 ",["a",{title:null,href:"https://github.com/webpack-contrib/less-loader/releases/tag/v6.0.0"},"less-loader@6.0.0"]," \u91CC\u652F\u6301\u3002"]]],["h3","\u5728 Umi \u91CC\u914D\u7F6E\u4E3B\u9898"],["p","\u5982\u679C\u4F60\u5728\u4F7F\u7528 ",["a",{title:null,href:"http://umijs.org/zh/"},"Umi"],"\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u5728\u9879\u76EE\u6839\u76EE\u5F55\u7684 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/56e648ec14bdb9f6724169fd64830447e224ccb1/config/config.js#L45"},"config/config.js"],"\uFF08Umi\uFF09\u6587\u4EF6\u4E2D ",["a",{title:null,href:"https://umijs.org/zh/config/#theme"},"theme"]," \u5B57\u6BB5\u8FDB\u884C\u4E3B\u9898\u914D\u7F6E\u3002",["code","theme"]," \u53EF\u4EE5\u914D\u7F6E\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u6216\u6587\u4EF6\u8DEF\u5F84\u3002"],["pre",{lang:"js",highlighted:`<span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
  <span class="token string">"primary-color"</span><span class="token punctuation">:</span> <span class="token string">"#1DA57A"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>`},["code",`"theme": {
  "primary-color": "#1DA57A",
},`]],["p","\u6216\u8005 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/b7e7983661eb5e53dc807452e9653e93e74276d4/.webpackrc.js#L18"},"\u4E00\u4E2A js \u6587\u4EF6"],"\uFF1A"],["pre",{lang:"js",highlighted:'<span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token string">"./theme.js"</span><span class="token punctuation">,</span>'},["code",'"theme": "./theme.js",']],["h3","\u5728 create-react-app \u4E2D\u5B9A\u5236\u4E3B\u9898"],["p","\u53C2\u8003 ",["a",{title:null,href:"/docs/react/use-with-create-react-app"},"\u5728 create-react-app \u4E2D\u4F7F\u7528"]," \u8FDB\u884C\u914D\u7F6E\u5373\u53EF\u3002"],["h3","\u914D\u7F6E less \u53D8\u91CF\u6587\u4EF6"],["p","\u53E6\u5916\u4E00\u79CD\u65B9\u5F0F\u662F\u5EFA\u7ACB\u4E00\u4E2A\u5355\u72EC\u7684 ",["code","less"]," \u53D8\u91CF\u6587\u4EF6\uFF0C\u5F15\u5165\u8FD9\u4E2A\u6587\u4EF6\u8986\u76D6 ",["code","antd.less"]," \u91CC\u7684\u53D8\u91CF\u3002"],["pre",{lang:"css",highlighted:`<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~antd/lib/style/themes/default.less'</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~antd/dist/antd.less'</span><span class="token punctuation">;</span></span> // \u5F15\u5165\u5B98\u65B9\u63D0\u4F9B\u7684 less \u6837\u5F0F\u5165\u53E3\u6587\u4EF6
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'your-theme-file.less'</span><span class="token punctuation">;</span></span> // \u7528\u4E8E\u8986\u76D6\u4E0A\u9762\u5B9A\u4E49\u7684\u53D8\u91CF`},["code",`@import '~antd/lib/style/themes/default.less';
@import '~antd/dist/antd.less'; // \u5F15\u5165\u5B98\u65B9\u63D0\u4F9B\u7684 less \u6837\u5F0F\u5165\u53E3\u6587\u4EF6
@import 'your-theme-file.less'; // \u7528\u4E8E\u8986\u76D6\u4E0A\u9762\u5B9A\u4E49\u7684\u53D8\u91CF`]],["p","\u6CE8\u610F\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5DF2\u7ECF\u8F7D\u5165\u4E86\u6240\u6709\u7EC4\u4EF6\u7684\u6837\u5F0F\uFF0C\u4E0D\u9700\u8981\u4E5F\u65E0\u6CD5\u548C\u6309\u9700\u52A0\u8F7D\u63D2\u4EF6 ",["code","babel-plugin-import"]," \u7684 ",["code","style"]," \u5C5E\u6027\u4E00\u8D77\u4F7F\u7528\u3002"],["h2","\u6CA1\u6709\u751F\u6548\uFF1F"],["p","\u6CE8\u610F\u6837\u5F0F\u5FC5\u987B\u52A0\u8F7D less \u683C\u5F0F\uFF0C\u4E00\u4E2A\u5E38\u89C1\u7684\u95EE\u9898\u5C31\u662F\u5F15\u5165\u4E86\u591A\u4EFD\u6837\u5F0F\uFF0Cless \u7684\u6837\u5F0F\u88AB css \u7684\u6837\u5F0F\u8986\u76D6\u4E86\u3002"],["ul",["li",["p","\u5982\u679C\u4F60\u5728\u4F7F\u7528 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," \u7684 ",["code","style"]," \u914D\u7F6E\u6765\u5F15\u5165\u6837\u5F0F\uFF0C\u9700\u8981\u5C06\u914D\u7F6E\u503C\u4ECE ",["code","'css'"]," \u6539\u4E3A ",["code","true"],"\uFF0C\u8FD9\u6837\u4F1A\u5F15\u5165 less \u6587\u4EF6\u3002"]],["li",["p","\u5982\u679C\u4F60\u662F\u901A\u8FC7 ",["code","'antd/dist/antd.css'"]," \u5F15\u5165\u6837\u5F0F\u7684\uFF0C\u6539\u4E3A ",["code","antd/dist/antd.less"],"\u3002"]]],["h2","\u5B98\u65B9\u4E3B\u9898 \u{1F308}"],["p","\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5B98\u65B9\u4E3B\u9898\uFF0C\u6B22\u8FCE\u5728\u9879\u76EE\u4E2D\u8BD5\u7528\uFF0C\u5E76\u4E14\u7ED9\u6211\u4EEC\u63D0\u4F9B\u53CD\u9988\u3002"],["ul",["li",["p","\u{1F311} \u6697\u9ED1\u4E3B\u9898\uFF084.0.0+ \u652F\u6301\uFF09"]],["li",["p","\u{1F4E6} \u7D27\u51D1\u4E3B\u9898\uFF084.1.0+ \u652F\u6301\uFF09"]],["li",["p","\u2601\uFE0F ",["a",{title:null,href:"https://github.com/ant-design/ant-design-aliyun-theme"},"\u963F\u91CC\u4E91\u63A7\u5236\u53F0\u4E3B\u9898\uFF08Beta\uFF09"]]]],["h3","\u4F7F\u7528\u6697\u9ED1\u4E3B\u9898\u548C\u7D27\u51D1\u4E3B\u9898"],["p",["img",{title:null,src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*mYU9R4YFxscAAAAAAAAAAABkARQnAQ",alt:null}]],["p","\u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 Umi 3"],["p","\u5982\u679C\u4F60\u5728\u4F7F\u7528 ",["a",{title:null,href:"http://umijs.org/zh/"},"Umi 3"],"\uFF0C\u4EC5\u9700\u4E24\u6B65\uFF1A"],["ol",["li",["p","\u5B89\u88C5 ",["code","@umijs/plugin-antd"]," \u63D2\u4EF6;"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> i @umijs/plugin-antd -D'},["code","$ npm i @umijs/plugin-antd -D"]]],["li",["p","\u914D\u7F6E ",["code","dark"]," \u548C ",["code","compact"],"\u3002"],["pre",{lang:"js",highlighted:`<span class="token comment" spellcheck="true">// .umirc.ts or config/config.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  antd<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    dark<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u5F00\u542F\u6697\u8272\u4E3B\u9898</span>
    compact<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// \u5F00\u542F\u7D27\u51D1\u4E3B\u9898</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>`},["code",`// .umirc.ts or config/config.ts
export default {
  antd: {
    dark: true, // \u5F00\u542F\u6697\u8272\u4E3B\u9898
    compact: true, // \u5F00\u542F\u7D27\u51D1\u4E3B\u9898
  },
},`]]]],["p","\u65B9\u5F0F\u4E8C\uFF1A\u662F\u5728\u6837\u5F0F\u6587\u4EF6\u5168\u91CF\u5F15\u5165 ",["a",{title:null,href:"https://unpkg.com/browse/antd@4.x/dist/antd.dark.less"},"antd.dark.less"]," \u6216 ",["a",{title:null,href:"https://unpkg.com/browse/antd@4.x/dist/antd.compact.less"},"antd.compact.less"],"\u3002"],["pre",{lang:"less",highlighted:`<span class="token variable">@import</span> <span class="token string">'~antd/dist/antd.dark.less'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u5F15\u5165\u5B98\u65B9\u63D0\u4F9B\u7684\u6697\u8272 less \u6837\u5F0F\u5165\u53E3\u6587\u4EF6</span>
<span class="token variable">@import</span> <span class="token string">'~antd/dist/antd.compact.less'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u5F15\u5165\u5B98\u65B9\u63D0\u4F9B\u7684\u7D27\u51D1 less \u6837\u5F0F\u5165\u53E3\u6587\u4EF6</span>`},["code",`@import '~antd/dist/antd.dark.less'; // \u5F15\u5165\u5B98\u65B9\u63D0\u4F9B\u7684\u6697\u8272 less \u6837\u5F0F\u5165\u53E3\u6587\u4EF6
@import '~antd/dist/antd.compact.less'; // \u5F15\u5165\u5B98\u65B9\u63D0\u4F9B\u7684\u7D27\u51D1 less \u6837\u5F0F\u5165\u53E3\u6587\u4EF6`]],["p","\u5982\u679C\u9879\u76EE\u4E0D\u4F7F\u7528 Less\uFF0C\u53EF\u5728 CSS \u6587\u4EF6\u4E2D\u5168\u91CF\u5F15\u5165 ",["a",{title:null,href:"https://unpkg.com/browse/antd@4.x/dist/antd.dark.css"},"antd.dark.css"]," \u6216 ",["a",{title:null,href:"https://unpkg.com/browse/antd@4.x/dist/antd.compact.css"},"antd.compact.css"],"\u3002"],["pre",{lang:"css",highlighted:`<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~antd/dist/antd.dark.css'</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'~antd/dist/antd.compact.css'</span><span class="token punctuation">;</span></span>`},["code",`@import '~antd/dist/antd.dark.css';
@import '~antd/dist/antd.compact.css';`]],["blockquote",["p","\u6CE8\u610F\u8FD9\u79CD\u65B9\u5F0F\u4E0B\u4F60\u4E0D\u9700\u8981\u518D\u5F15\u5165 ",["code","antd/dist/antd.less"]," \u6216 ",["code","antd/dist/antd.css"]," \u4E86\uFF0C\u53EF\u4EE5\u5B89\u5168\u79FB\u9664\u6389\u3002\u4E5F\u4E0D\u9700\u8981\u5F00\u542F babel-plugin-import \u7684 ",["code","style"]," \u914D\u7F6E\u3002\u901A\u8FC7\u6B64\u65B9\u5F0F\u4E0D\u80FD\u540C\u65F6\u914D\u7F6E\u4E24\u79CD\u53CA\u4EE5\u4E0A\u4E3B\u9898\u3002"]],["p","\u65B9\u5F0F\u4E09\uFF1A\u662F\u7528\u5728 ",["code","webpack.config.js"]," \u4F7F\u7528 ",["a",{title:null,href:"https://github.com/webpack-contrib/less-loader"},"less-loader"]," \u6309\u9700\u5F15\u5165\uFF1A"],["pre",{lang:"diff",highlighted:`const { getThemeVariables } = require('antd/dist/theme');

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
<span class="token inserted">+       lessOptions: { // \u5982\u679C\u4F7F\u7528less-loader@5\uFF0C\u8BF7\u79FB\u9664 lessOptions \u8FD9\u4E00\u7EA7\u76F4\u63A5\u914D\u7F6E\u9009\u9879\u3002</span>
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
+       lessOptions: { // \u5982\u679C\u4F7F\u7528less-loader@5\uFF0C\u8BF7\u79FB\u9664 lessOptions \u8FD9\u4E00\u7EA7\u76F4\u63A5\u914D\u7F6E\u9009\u9879\u3002
+         modifyVars: getThemeVariables({
+           dark: true, // \u5F00\u542F\u6697\u9ED1\u6A21\u5F0F
+           compact: true, // \u5F00\u542F\u7D27\u51D1\u6A21\u5F0F
+         }),
+         javascriptEnabled: true,
+       },
+     },
    }],
  }],
};`]],["h2","\u793E\u533A\u6559\u7A0B"],["ul",["li",["p",["a",{title:null,href:"https://intoli.com/blog/antd-scss-theme-plugin/"},"Using Ant Design in Sass-Styled Webpack Projects with ",["code","antd-scss-theme-plugin"]]]],["li",["p",["a",{title:null,href:"https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f"},"How to Customize Ant Design with React & Webpack\u2026 the Missing Guide"]]],["li",["p",["a",{title:null,href:"https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7"},"Theming Ant Design with Sass and Webpack"]]],["li",["p",["a",{title:null,href:"https://medium.com/@mzohaib.qc/using-sass-scss-with-react-app-create-react-app-d03072083ef8"},"Using Sass/Scss with React App (create-react-app)"]]],["li",["p",["a",{title:null,href:"https://medium.com/@mzohaib.qc/ant-design-dynamic-runtime-theme-1f9a1a030ba0"},"Dynamic Theming in Browser using Ant Design"]]],["li",["p",["a",{title:null,href:"https://www.npmjs.com/package/@emeks/antd-custom-theme-generator"},"Zero config custom theme generator"]]]]],meta:{order:7,title:"\u5B9A\u5236\u4E3B\u9898",filename:"docs/react/customize-theme.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Ant-Design-\u7684\u6837\u5F0F\u53D8\u91CF",title:"Ant Design \u7684\u6837\u5F0F\u53D8\u91CF"},"Ant Design \u7684\u6837\u5F0F\u53D8\u91CF"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5B9A\u5236\u65B9\u5F0F",title:"\u5B9A\u5236\u65B9\u5F0F"},"\u5B9A\u5236\u65B9\u5F0F"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6CA1\u6709\u751F\u6548\uFF1F",title:"\u6CA1\u6709\u751F\u6548\uFF1F"},"\u6CA1\u6709\u751F\u6548\uFF1F"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5B98\u65B9\u4E3B\u9898-\u{1F308}",title:"\u5B98\u65B9\u4E3B\u9898 \u{1F308}"},"\u5B98\u65B9\u4E3B\u9898 \u{1F308}"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u793E\u533A\u6559\u7A0B",title:"\u793E\u533A\u6559\u7A0B"},"\u793E\u533A\u6559\u7A0B"]]]}}}]);
