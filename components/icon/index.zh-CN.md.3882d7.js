(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{3134:function(c,g,b){c.exports={content:["section",["p","语义化的矢量图形。使用图标组件，你需要安装 ",["code","@ant-design/icons"]," 图标组件包："],["pre",{lang:"bash",highlighted:'<span class="token function">npm</span> <span class="token function">install</span> --save @ant-design/icons'},["code","npm install --save @ant-design/icons"]],["h2","设计师专属"],["p","安装 ",["a",{title:null,href:"https://kitchen.alipay.com"},"Kitchen Sketch 插件 💎"],"，就可以一键拖拽使用 Ant Design 和 Iconfont 的海量图标，还可以关联自有项目。"],["h2","图标列表"],function h(){var d=b(0),i=b(28),e=f(b(247));function f(a){return a&&a.__esModule?a:{default:a}}return d.createElement(e.default,null)}],meta:{category:"Components",subtitle:"图标",type:"通用",title:"Icon",toc:!1,cover:"https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg",filename:"components/icon/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#设计师专属",title:"设计师专属"},"设计师专属"]],["li",["a",{className:"bisheng-toc-h2",href:"#图标列表",title:"图标列表"},"图标列表"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","从 4.0 开始，antd 不再内置 Icon 组件，请使用独立的包 ",["code","@ant-design/icons"],"。"],["h3","通用图标"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","className"],["td","设置图标的样式名"],["td","string"],["td","-"],["td"]],["tr",["td","rotate"],["td","图标旋转角度（IE9 无效）"],["td","number"],["td","-"],["td"]],["tr",["td","spin"],["td","是否有旋转动画"],["td","boolean"],["td","false"],["td"]],["tr",["td","style"],["td","设置图标的样式，例如 ",["code","fontSize"]," 和 ",["code","color"]],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","twoToneColor"],["td","仅适用双色图标。设置双色图标的主要颜色"],["td","string (十六进制颜色)"],["td","-"],["td"]]]],["p","其中我们提供了三种主题的图标，不同主题的 Icon 组件名为图标名加主题做为后缀。"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> StarOutlined<span class="token punctuation">,</span> StarFilled<span class="token punctuation">,</span> StarTwoTone <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>StarOutlined</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>StarFilled</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>StarTwoTone</span> <span class="token attr-name">twoToneColor</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#eb2f96<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>`},["code",`import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

<StarOutlined />
<StarFilled />
<StarTwoTone twoToneColor="#eb2f96" />`]],["h3","自定义 Icon"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","component"],["td","控制如何渲染图标，通常是一个渲染根标签为 ",["code","<svg>"]," 的 React 组件"],["td","ComponentType<CustomIconComponentProps",">"],["td","-"],["td"]],["tr",["td","rotate"],["td","图标旋转角度（IE9 无效）"],["td","number"],["td","-"],["td"]],["tr",["td","spin"],["td","是否有旋转动画"],["td","boolean"],["td","false"],["td"]],["tr",["td","style"],["td","设置图标的样式，例如 ",["code","fontSize"]," 和 ",["code","color"]],["td","CSSProperties"],["td","-"],["td"]]]],["h3","关于 SVG 图标"],["p","在 ",["code","3.9.0"]," 之后，我们使用了 SVG 图标替换了原先的 font 图标，从而带来了以下优势："],["ul",["li",["p","完全离线化使用，不需要从 CDN 下载字体文件，图标不会因为网络问题呈现方块，也无需字体文件本地部署。"]],["li",["p","在低端设备上 SVG 有更好的清晰度。"]],["li",["p","支持多色图标。"]],["li",["p","对于内建图标的更换可以提供更多 API，而不需要进行样式覆盖。"]]],["p","更多讨论可参考：",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/10353"},"#10353"],"。"],["p","所有的图标都会以 ",["code","<svg>"]," 标签渲染，可以使用 ",["code","style"]," 和 ",["code","className"]," 设置图标的大小和单色图标的颜色。例如："],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> MessageOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MessageOutlined</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token string">'16px'</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">'#08c'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`},["code",`import { MessageOutlined } from '@ant-design/icons';

<MessageOutlined style={{ fontSize: '16px', color: '#08c' }} />;`]],["h3","双色图标主色"],["p","对于双色图标，可以通过使用 ",["code","getTwoToneColor()"]," 和 ",["code","setTwoToneColor(colorString)"]," 来全局设置图标主色。"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> getTwoToneColor<span class="token punctuation">,</span> setTwoToneColor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token function">setTwoToneColor</span><span class="token punctuation">(</span><span class="token string">'#eb2f96'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getTwoToneColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// #eb2f96</span>`},["code",`import { getTwoToneColor, setTwoToneColor } from '@ant-design/icons';

setTwoToneColor('#eb2f96');
getTwoToneColor(); // #eb2f96`]],["h3","自定义 font 图标"],["p","在 ",["code","3.9.0"]," 之后，我们提供了一个 ",["code","createFromIconfontCN"]," 方法，方便开发者调用在 ",["a",{title:null,href:"http://iconfont.cn/"},"iconfont.cn"]," 上自行管理的图标。"],["pre",{lang:"js",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> createFromIconfontCN <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> MyIcon <span class="token operator">=</span> <span class="token function">createFromIconfontCN</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  scriptUrl<span class="token punctuation">:</span> <span class="token string">'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'</span><span class="token punctuation">,</span> <span class="token operator">/</span><span class="token operator">/</span> 在 iconfont<span class="token punctuation">.</span>cn 上生成
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>MyIcon type<span class="token operator">=</span><span class="token string">"icon-example"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> mountedNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import { createFromIconfontCN } from '@ant-design/icons';

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // 在 iconfont.cn 上生成
});

ReactDOM.render(<MyIcon type="icon-example" />, mountedNode);`]],["p","其本质上是创建了一个使用 ",["code","<use>"]," 标签来渲染图标的组件。"],["p","options 的配置项如下："],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","extraCommonProps"],["td","给所有的 ",["code","svg"]," 图标 ",["code","<Icon />"]," 组件设置额外的属性"],["td","{ ","[","key: string]: any }"],["td","{}"],["td"]],["tr",["td","scriptUrl"],["td",["a",{title:null,href:"http://iconfont.cn/"},"iconfont.cn"]," 项目在线生成的 js 地址，",["code","@ant-design/icons@4.1.0"]," 之后支持 ",["code","string[]"]," 类型"],["td","string ","|"," string[]"],["td","-"],["td"]]]],["p","在 ",["code","scriptUrl"]," 都设置有效的情况下，组件在渲染前会自动引入 ",["a",{title:null,href:"http://iconfont.cn/"},"iconfont.cn"]," 项目中的图标符号集，无需手动引入。"],["p","见 ",["a",{title:null,href:"http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code"},"iconfont.cn 使用帮助"]," 查看如何生成 js 地址。"],["h3","自定义 SVG 图标"],["p","如果使用 ",["code","webpack"],"，可以通过配置 ",["a",{title:null,href:"https://www.npmjs.com/package/@svgr/webpack"},"@svgr/webpack"]," 来将 ",["code","svg"]," 图标作为 ",["code","React"]," 组件导入。",["code","@svgr/webpack"]," 的 ",["code","options"]," 选项请参阅 ",["a",{title:null,href:"https://github.com/smooth-code/svgr#options"},"svgr 文档"],"。"],["pre",{lang:"js",highlighted:`<span class="token comment" spellcheck="true">// webpack.config.js</span>
<span class="token punctuation">{</span>
  test<span class="token punctuation">:</span> <span class="token regex">/\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/</span><span class="token punctuation">,</span>
  use<span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      loader<span class="token punctuation">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      loader<span class="token punctuation">:</span> <span class="token string">'@svgr/webpack'</span><span class="token punctuation">,</span>
      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>
        babel<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>`},["code",`// webpack.config.js
{
  test: /\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/,
  use: [
    {
      loader: 'babel-loader',
    },
    {
      loader: '@svgr/webpack',
      options: {
        babel: false,
        icon: true,
      },
    },
  ],
}`]],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> Icon <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MessageSvg <span class="token keyword">from</span> <span class="token string">'path/to/message.svg'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// path to your '*.svg' file.</span>
<span class="token comment" spellcheck="true">// in create-react-app:</span>
<span class="token comment" spellcheck="true">// import { ReactComponent as MessageSvg } from 'path/to/message.svg';</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>MessageSvg<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import Icon from '@ant-design/icons';
import MessageSvg from 'path/to/message.svg'; // path to your '*.svg' file.
// in create-react-app:
// import { ReactComponent as MessageSvg } from 'path/to/message.svg';

ReactDOM.render(<Icon component={MessageSvg} />, mountNode);`]],["p",["code","Icon"]," 中的 ",["code","component"]," 组件的接受的属性如下："],["table",["thead",["tr",["th","字段"],["th","说明"],["th","类型"],["th","只读值"],["th","版本"]]],["tbody",["tr",["td","className"],["td","计算后的 ",["code","svg"]," 类名"],["td","string"],["td","-"],["td"]],["tr",["td","fill"],["td",["code","svg"]," 元素填充的颜色"],["td","string"],["td",["code","currentColor"]],["td"]],["tr",["td","height"],["td",["code","svg"]," 元素高度"],["td","string ","|"," number"],["td",["code","1em"]],["td"]],["tr",["td","style"],["td","计算后的 ",["code","svg"]," 元素样式"],["td","CSSProperties"],["td","-"],["td"]],["tr",["td","width"],["td",["code","svg"]," 元素宽度"],["td","string ","|"," number"],["td",["code","1em"]],["td"]]]]]}}}]);
