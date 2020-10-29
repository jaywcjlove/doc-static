(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{3093:function(n,a){n.exports={content:["section",["p","\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["ul",["li",["p","\u5F53\u7CFB\u7EDF\u62E5\u6709\u8D85\u8FC7\u4E24\u7EA7\u4EE5\u4E0A\u7684\u5C42\u7EA7\u7ED3\u6784\u65F6\uFF1B"]],["li",["p","\u5F53\u9700\u8981\u544A\u77E5\u7528\u6237\u300E\u4F60\u5728\u54EA\u91CC\u300F\u65F6\uFF1B"]],["li",["p","\u5F53\u9700\u8981\u5411\u4E0A\u5BFC\u822A\u7684\u529F\u80FD\u65F6\u3002"]]]],meta:{category:"Components",subtitle:"\u9762\u5305\u5C51",type:"\u5BFC\u822A",title:"Breadcrumb",cover:"https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg",filename:"components/breadcrumb/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Breadcrumb"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","itemRender"],["td","\u81EA\u5B9A\u4E49\u94FE\u63A5\u51FD\u6570\uFF0C\u548C react-router \u914D\u7F6E\u4F7F\u7528"],["td","(route, params, routes, paths) => ReactNode"],["td","-"],["td"]],["tr",["td","params"],["td","\u8DEF\u7531\u7684\u53C2\u6570"],["td","object"],["td","-"],["td"]],["tr",["td","routes"],["td","router \u7684\u8DEF\u7531\u6808\u4FE1\u606F"],["td",["a",{title:null,href:"#routes"},"routes","[","]"]],["td","-"],["td"]],["tr",["td","separator"],["td","\u5206\u9694\u7B26\u81EA\u5B9A\u4E49"],["td","ReactNode"],["td",["code","/"]],["td"]]]],["h3","Breadcrumb.Item"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","dropdownProps"],["td","\u5F39\u51FA\u4E0B\u62C9\u83DC\u5355\u7684\u81EA\u5B9A\u4E49\u914D\u7F6E"],["td",["a",{title:null,href:"/components/dropdown"},"Dropdown"]],["td","-"],["td"]],["tr",["td","href"],["td","\u94FE\u63A5\u7684\u76EE\u7684\u5730"],["td","string"],["td","-"],["td"]],["tr",["td","overlay"],["td","\u4E0B\u62C9\u83DC\u5355\u7684\u5185\u5BB9"],["td",["a",{title:null,href:"/components/menu"},"Menu"]," ","|"," () => Menu"],["td","-"],["td"]],["tr",["td","onClick"],["td","\u5355\u51FB\u4E8B\u4EF6"],["td","(e:MouseEvent) => void"],["td","-"],["td"]]]],["h3","Breadcrumb.Separator"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","children"],["td","\u8981\u663E\u793A\u7684\u5206\u9694\u7B26"],["td","ReactNode"],["td",["code","/"]],["td"]]]],["blockquote",["p","\u6CE8\u610F\uFF1A\u5728\u4F7F\u7528 ",["code","Breadcrumb.Separator"]," \u65F6\uFF0C\u5176\u7236\u7EC4\u4EF6\u7684\u5206\u9694\u7B26\u5FC5\u987B\u8BBE\u7F6E\u4E3A ",["code",'separator=""'],"\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u7236\u7EC4\u4EF6\u9ED8\u8BA4\u7684\u5206\u9694\u7B26\u3002"]],["h3","routes"],["pre",{lang:"ts",highlighted:`<span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
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
}`]],["h3","\u548C browserHistory \u914D\u5408"],["p","\u548C react-router \u4E00\u8D77\u4F7F\u7528\u65F6\uFF0C\u9ED8\u8BA4\u751F\u6210\u7684 url \u8DEF\u5F84\u662F\u5E26\u6709 ",["code","#"]," \u7684\uFF0C\u5982\u679C\u548C browserHistory \u4E00\u8D77\u4F7F\u7528\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",["code","itemRender"]," \u5C5E\u6027\u5B9A\u4E49\u9762\u5305\u5C51\u94FE\u63A5\u3002"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router'</span><span class="token punctuation">;</span>

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
