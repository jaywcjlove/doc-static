(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{3106:function(a,b){a.exports={content:["section",["p","为组件提供统一的全局化配置。"],["h2","使用"],["p","ConfigProvider 使用 React 的 ",["a",{title:null,href:"https://facebook.github.io/react/docs/context.html"},"context"]," 特性，只需在应用外围包裹一次即可全局生效。"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// ...</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>rtl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import { ConfigProvider } from 'antd';

// ...

export default () => (
  <ConfigProvider direction="rtl">
    <App />
  </ConfigProvider>
);`]],["h3","Content Security Policy"],["p","部分组件为了支持波纹效果，使用了动态样式。如果开启了 Content Security Policy (CSP)，你可以通过 ",["code","csp"]," 属性来进行配置："],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">csp</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> nonce<span class="token punctuation">:</span> <span class="token string">'YourNonceCode'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>My Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span>`},["code",`<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>
  <Button>My Button</Button>
</ConfigProvider>`]]],meta:{category:"Components",subtitle:"全局化配置",cols:1,type:"其他",title:"ConfigProvider",cover:"https://gw.alipayobjects.com/zos/alicdn/kegYxl1wj/ConfigProvider.svg",filename:"components/config-provider/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#使用",title:"使用"},"使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","autoInsertSpaceInButton"],["td","设置为 ",["code","false"]," 时，移除按钮中 2 个汉字之间的空格"],["td","boolean"],["td","true"],["td"]],["tr",["td","componentSize"],["td","设置 antd 组件大小"],["td",["code","small"]," ","|"," ",["code","middle"]," ","|"," ",["code","large"]],["td","-"],["td"]],["tr",["td","csp"],["td","设置 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"Content Security Policy"]," 配置"],["td","{ nonce: string }"],["td","-"],["td"]],["tr",["td","form"],["td","设置 Form 组件的通用属性"],["td","{ validateMessages?: ",["a",{title:null,href:"/components/form/#validateMessages"},"ValidateMessages"]," }"],["td","-"],["td"]],["tr",["td","input"],["td","设置 Input 组件的通用属性"],["td","{ autoComplete?: string }"],["td","-"],["td","4.2.0"]],["tr",["td","renderEmpty"],["td","自定义组件空状态。参考 ",["a",{title:null,href:"/components/empty/"},"空状态"]],["td","function(componentName: string): ReactNode"],["td","-"],["td"]],["tr",["td","getPopupContainer"],["td","弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。"],["td","function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","getTargetContainer"],["td","配置 Affix、Anchor 滚动监听容器。"],["td","() => HTMLElement"],["td","() => window"],["td","4.2.0"]],["tr",["td","locale"],["td","语言包配置，语言包可到 ",["a",{title:null,href:"http://unpkg.com/antd/es/locale/"},"antd/es/locale"]," 目录下寻找"],["td","object"],["td","-"],["td"]],["tr",["td","prefixCls"],["td","设置统一样式前缀。",["code","注意：这将不会应用由 antd 提供的默认样式"]],["td","string"],["td",["code","ant"]],["td"]],["tr",["td","pageHeader"],["td","统一设置 PageHeader 的 ghost，参考 ",["a",{title:null,href:"/components/page-header"},"PageHeader"]],["td","{ ghost: boolean }"],["td","true"],["td"]],["tr",["td","direction"],["td","设置文本展示方向。 ",["a",{title:null,href:"#components-config-provider-demo-direction"},"示例"]],["td",["code","ltr"]," ","|"," ",["code","rtl"]],["td",["code","ltr"]],["td"]],["tr",["td","space"],["td","设置 Space 的 ",["code","size"],"，参考 ",["a",{title:null,href:"/components/space"},"Space"]],["td","{ size: ",["code","small"]," ","|"," ",["code","middle"]," ","|"," ",["code","large"]," ","|"," ",["code","number"]," }"],["td","-"],["td","4.1.0"]],["tr",["td","virtual"],["td","设置 ",["code","false"]," 时关闭虚拟滚动"],["td","boolean"],["td","-"],["td","4.3.0"]],["tr",["td","dropdownMatchSelectWidth"],["td","下拉菜单和选择器同宽。默认将设置 ",["code","min-width"],"，当值小于选择框宽度时会被忽略。",["code","false"]," 时会关闭虚拟滚动"],["td","boolean ","|"," number"],["td","-"],["td","4.3.0"]]]],["h2","FAQ"],["h4","如何增加一个新的语言包？"],["p","参考",["a",{title:null,href:"/docs/react/i18n#%E5%A2%9E%E5%8A%A0%E8%AF%AD%E8%A8%80%E5%8C%85"},"《增加语言包》"],"。"],["h4","为什么我使用了 ConfigProvider ",["code","locale"],"，时间类组件的国际化还有问题？"],["p","请检查是否正确设置了 moment 语言包，或者是否有两个版本的 moment 共存。"],["pre",{lang:"js",highlighted:`<span class="token keyword">import</span> <span class="token string">'moment/locale/zh-cn'</span><span class="token punctuation">;</span>
moment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'zh-cn'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import 'moment/locale/zh-cn';
moment.locale('zh-cn');`]],["h4","配置 ",["code","getPopupContainer"]," 导致 Modal 报错？"],["p","相关 issue：",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/19974"},"https://github.com/ant-design/ant-design/issues/19974"]],["p","当如下全局设置 ",["code","getPopupContainer"]," 为触发节点的 parentNode 时，由于 Modal 的用法不存在 ",["code","triggerNode"],"，这样会导致 ",["code","triggerNode is undefined"]," 的报错，需要增加一个",["a",{title:null,href:"https://github.com/afc163/feedback-antd/commit/3e4d1ad1bc1a38460dc3bf3c56517f737fe7d44a"},"判断条件"],"。"],["pre",{lang:"diff",highlighted:` &lt;ConfigProvider
<span class="token deleted">-  getPopupContainer={triggerNode => triggerNode.parentNode}</span>
<span class="token inserted">+  getPopupContainer={node => {</span>
<span class="token inserted">+    if (node) {</span>
<span class="token inserted">+      return node.parentNode;</span>
<span class="token inserted">+    }</span>
<span class="token inserted">+    return document.body;</span>
<span class="token inserted">+  }}</span>
 >
   &lt;App />
 &lt;/ConfigProvider>`},["code",` <ConfigProvider
-  getPopupContainer={triggerNode => triggerNode.parentNode}
+  getPopupContainer={node => {
+    if (node) {
+      return node.parentNode;
+    }
+    return document.body;
+  }}
 >
   <App />
 </ConfigProvider>`]]]}}}]);
