(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{3079:function(a,b){a.exports={content:["section",["p","显示当前页面在系统层级结构中的位置，并能向上返回。"],["h2","何时使用"],["ul",["li",["p","当系统拥有超过两级以上的层级结构时；"]],["li",["p","当需要告知用户『你在哪里』时；"]],["li",["p","当需要向上导航的功能时。"]]]],meta:{category:"Components",subtitle:"面包屑",type:"导航",title:"Breadcrumb",cover:"https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg",filename:"components/breadcrumb/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Breadcrumb"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","itemRender"],["td","自定义链接函数，和 react-router 配置使用"],["td","(route, params, routes, paths) => ReactNode"],["td","-"],["td"]],["tr",["td","params"],["td","路由的参数"],["td","object"],["td","-"],["td"]],["tr",["td","routes"],["td","router 的路由栈信息"],["td",["a",{title:null,href:"#routes"},"routes","[","]"]],["td","-"],["td"]],["tr",["td","separator"],["td","分隔符自定义"],["td","string ","|"," ReactNode"],["td",["code","/"]],["td"]]]],["h3","Breadcrumb.Item"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","dropdownProps"],["td","弹出下拉菜单的自定义配置"],["td",["a",{title:null,href:"/components/dropdown"},"Dropdown"]],["td","-"],["td"]],["tr",["td","href"],["td","链接的目的地"],["td","string"],["td","-"],["td"]],["tr",["td","overlay"],["td","下拉菜单的内容"],["td",["a",{title:null,href:"/components/menu"},"Menu"]," ","|"," () => Menu"],["td","-"],["td"]],["tr",["td","onClick"],["td","单击事件"],["td","(e:MouseEvent) => void"],["td","-"],["td"]]]],["h3","Breadcrumb.Separator"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","children"],["td","要显示的分隔符"],["td","string ","|"," ReactNode"],["td",["code","/"]],["td"]]]],["blockquote",["p","注意：在使用 ",["code","Breadcrumb.Separator"]," 时，其父组件的分隔符必须设置为 ",["code",'separator=""'],"，否则会出现父组件默认的分隔符。"]],["h3","routes"],["pre",{lang:"ts",highlighted:`<span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
  path<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  breadcrumbName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  children<span class="token punctuation">:</span> <span class="token keyword">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    path<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
    breadcrumbName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`},["code",`interface Route {
  path: string;
  breadcrumbName: string;
  children: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}`]],["h3","和 browserHistory 配合"],["p","和 react-router 一起使用时，默认生成的 url 路径是带有 ",["code","#"]," 的，如果和 browserHistory 一起使用的话，你可以使用 ",["code","itemRender"]," 属性定义面包屑链接。"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token punctuation">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
    breadcrumbName<span class="token punctuation">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token punctuation">:</span> <span class="token string">'first'</span><span class="token punctuation">,</span>
    breadcrumbName<span class="token punctuation">:</span> <span class="token string">'first'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token punctuation">:</span> <span class="token string">'/general'</span><span class="token punctuation">,</span>
        breadcrumbName<span class="token punctuation">:</span> <span class="token string">'General'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token punctuation">:</span> <span class="token string">'/layout'</span><span class="token punctuation">,</span>
        breadcrumbName<span class="token punctuation">:</span> <span class="token string">'Layout'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token punctuation">:</span> <span class="token string">'/navigation'</span><span class="token punctuation">,</span>
        breadcrumbName<span class="token punctuation">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token punctuation">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
    breadcrumbName<span class="token punctuation">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">itemRender</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> params<span class="token punctuation">,</span> routes<span class="token punctuation">,</span> paths<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> last <span class="token operator">=</span> routes<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span> <span class="token operator">===</span> routes<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> last <span class="token operator">?</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>breadcrumbName<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>paths<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>breadcrumbName<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span> <span class="token attr-name">itemRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>itemRender<span class="token punctuation">}</span></span> <span class="token attr-name">routes</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>routes<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`},["code",`import { Link } from 'react-router';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'home',
  },
  {
    path: 'first',
    breadcrumbName: 'first',
    children: [
      {
        path: '/general',
        breadcrumbName: 'General',
      },
      {
        path: '/layout',
        breadcrumbName: 'Layout',
      },
      {
        path: '/navigation',
        breadcrumbName: 'Navigation',
      },
    ],
  },
  {
    path: 'second',
    breadcrumbName: 'second',
  },
];

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  );
}

return <Breadcrumb itemRender={itemRender} routes={routes} />;`]]]}}}]);
