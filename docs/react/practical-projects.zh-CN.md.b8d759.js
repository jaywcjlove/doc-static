(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{3277:function(n,s){n.exports={content:["article",["p","\u5728\u771F\u5B9E\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u4F60\u53EF\u80FD\u4F1A\u9700\u8981 Redux \u6216\u8005 MobX \u8FD9\u6837\u7684\u6570\u636E\u6D41\u65B9\u6848\uFF0CAnt Design React \u4F5C\u4E3A\u4E00\u4E2A UI \u5E93\uFF0C\u53EF\u4EE5\u548C\u4EFB\u4F55 React \u751F\u6001\u5708\u5185\u7684\u6570\u636E\u6D41\u65B9\u6848\u4EE5\u53CA\u5E94\u7528\u6846\u67B6\u642D\u914D\u4F7F\u7528\u3002\u6211\u4EEC\u57FA\u4E8E\u4E1A\u52A1\u573A\u666F\u7684\u573A\u666F\uFF0C\u63A8\u51FA\u4E86\u53EF\u63D2\u62D4\u7684\u4F01\u4E1A\u7EA7\u5E94\u7528\u6846\u67B6 umi\uFF0C\u63A8\u8350\u4F60\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u3002"],["p",["a",{title:null,href:"http://umijs.org/"},"umi"]," \u5219\u662F\u4E00\u4E2A\u53EF\u63D2\u62D4\u7684\u4F01\u4E1A\u7EA7 react \u5E94\u7528\u6846\u67B6\u3002umi \u4EE5\u8DEF\u7531\u4E3A\u57FA\u7840\u7684\uFF0C\u652F\u6301",["a",{title:null,href:"https://umijs.org/zh/guide/router.html"},"\u7C7B next.js \u7684\u7EA6\u5B9A\u5F0F\u8DEF\u7531"],"\uFF0C\u4EE5\u53CA\u5404\u79CD\u8FDB\u9636\u7684\u8DEF\u7531\u529F\u80FD\uFF0C\u5E76\u4EE5\u6B64\u8FDB\u884C\u529F\u80FD\u6269\u5C55\uFF0C\u6BD4\u5982",["a",{title:null,href:"https://umijs.org/zh/plugin/umi-plugin-react.html#dynamicimport"},"\u652F\u6301\u8DEF\u7531\u7EA7\u7684\u6309\u9700\u52A0\u8F7D"],"\u3002\u7136\u540E\u914D\u4EE5\u5B8C\u5584\u7684",["a",{title:null,href:"https://umijs.org/zh/plugin/"},"\u63D2\u4EF6\u4F53\u7CFB"],"\uFF0C\u8986\u76D6\u4ECE\u6E90\u7801\u5230\u6784\u5EFA\u4EA7\u7269\u7684\u6BCF\u4E2A\u751F\u547D\u5468\u671F\uFF0C\u652F\u6301\u5404\u79CD\u529F\u80FD\u6269\u5C55\u548C\u4E1A\u52A1\u9700\u6C42\uFF0C\u540C\u65F6\u63D0\u4F9B ",["a",{title:null,href:"https://umijs.org/zh/guide/umi-ui.html"},"Umi UI"]," \u901A\u8FC7\u53EF\u89C6\u5316\u8F85\u52A9\u7F16\u7A0B\uFF08VAP\uFF09\u63D0\u9AD8\u5F00\u53D1\u4F53\u9A8C\u548C\u7814\u53D1\u6548\u7387\u3002"],["blockquote",["p","\u4F60\u53EF\u80FD\u4E5F\u4F1A\u5BF9 ",["a",{title:null,href:"https://pro.ant.design/"},"Ant Design Pro"]," \u611F\u5174\u8DA3\uFF0C\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E umi\u3001dva \u548C ant design \u7684\u5F00\u7BB1\u5373\u7528\u7684\u4E2D\u53F0\u524D\u7AEF/\u8BBE\u8BA1\u89E3\u51B3\u65B9\u6848\u3002"]],["p","\u672C\u6587\u4F1A\u5F15\u5BFC\u4F60\u4F7F\u7528 Umi\u3001dva \u548C antd \u4ECE 0 \u5F00\u59CB\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u5E94\u7528\u3002"],["h2","\u5B89\u88C5 Umi"],["p","\u63A8\u8350\u4F7F\u7528 yarn \u521B\u5EFA Umi \u811A\u624B\u67B6\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u3002"],["pre",{lang:"bash",highlighted:`$ <span class="token function">mkdir</span> myapp <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> myapp
$ yarn create umi
$ yarn`},["code",`$ mkdir myapp && cd myapp
$ yarn create umi
$ yarn`]],["blockquote",["p","\u5982\u679C\u4F60\u4F7F\u7528 npm\uFF0C\u53EF\u6267\u884C ",["code","npx create-umi"],"\uFF0C\u6548\u679C\u4E00\u81F4\u3002"]],["h2","\u5B89\u88C5\u63D2\u4EF6\u96C6"],["p","\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5B89\u88C5\u63D2\u4EF6\u96C6\uFF08\u5305\u62EC antd\u3001dva\u3001\u56FD\u9645\u5316\u7B49\u5E38\u7528\u63D2\u4EF6\uFF09\uFF1A"],["pre",{lang:"bash",highlighted:`<span class="token comment" spellcheck="true"># \u6216 npm i @umijs/preset-react -D</span>
$ yarn add @umijs/preset-react -D`},["code",`# \u6216 npm i @umijs/preset-react -D
$ yarn add @umijs/preset-react -D`]],["blockquote",["p","\u63D2\u4EF6\u9ED8\u8BA4\u4F7F\u7528 ",["code",'"antd": "^4.0.0"'],"\uFF0C\u5982\u679C\u8981\u4F7F\u7528\u56FA\u5B9A\u7248\u672C\u7684 antd\uFF0C\u4F60\u53EF\u4EE5\u5728\u9879\u76EE\u91CC\u5B89\u88C5\u989D\u5916\u7684 antd \u4F9D\u8D56\uFF0C",["code","package.json"]," \u91CC\u58F0\u660E\u7684 antd \u4F9D\u8D56\u4F1A\u88AB\u4F18\u5148\u4F7F\u7528\u3002"]],["h2","\u65B0\u5EFA\u8DEF\u7531"],["p","\u6211\u4EEC\u8981\u5199\u4E2A\u5E94\u7528\u6765\u5148\u663E\u793A\u4EA7\u54C1\u5217\u8868\u3002\u9996\u5148\u7B2C\u4E00\u6B65\u662F\u521B\u5EFA\u8DEF\u7531\uFF0C\u8DEF\u7531\u53EF\u4EE5\u60F3\u8C61\u6210\u662F\u7EC4\u6210\u5E94\u7528\u7684\u4E0D\u540C\u9875\u9762\u3002"],["p","\u7136\u540E\u901A\u8FC7\u547D\u4EE4\u521B\u5EFA ",["code","/products"]," \u8DEF\u7531\uFF0C"],["pre",{lang:"bash",highlighted:`$ npx umi g page products --typescript

Write: src/pages/products.tsx
Write: src/pages/products.css`},["code",`$ npx umi g page products --typescript

Write: src/pages/products.tsx
Write: src/pages/products.css`]],["p","\u5728 ",["code",".umirc.ts"]," \u4E2D\u914D\u7F6E\u8DEF\u7531\uFF0C\u5982\u679C\u6709\u56FD\u9645\u5316\u9700\u8981\uFF0C\u53EF\u4EE5\u914D\u7F6E ",["code","locale"]," \u5F00\u542F antd \u56FD\u9645\u5316\uFF1A"],["pre",{lang:"diff",highlighted:`import { defineConfig } from 'umi';

export default defineConfig({
<span class="token inserted">+ locale: { antd: true },</span>
  routes: [
    { path: '/', component: '@/pages/index' },
<span class="token inserted">+   { path: '/products', component: '@/pages/products' },</span>
  ],
});`},["code",`import { defineConfig } from 'umi';

export default defineConfig({
+ locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/index' },
+   { path: '/products', component: '@/pages/products' },
  ],
});`]],["p","\u8FD0\u884C ",["code","yarn start"]," \u7136\u540E\u5728\u6D4F\u89C8\u5668\u91CC\u6253\u5F00 ",["a",{title:null,href:"http://localhost:8000/products"},"http://localhost:8000/products"],"\uFF0C\u4F60\u5E94\u8BE5\u80FD\u770B\u5230\u5BF9\u5E94\u7684\u9875\u9762\u3002"],["h2","\u7F16\u5199 UI Component"],["p","\u968F\u7740\u5E94\u7528\u7684\u53D1\u5C55\uFF0C\u4F60\u4F1A\u9700\u8981\u5728\u591A\u4E2A\u9875\u9762\u5206\u4EAB UI \u5143\u7D20 (\u6216\u5728\u4E00\u4E2A\u9875\u9762\u4F7F\u7528\u591A\u6B21)\uFF0C\u5728 umi \u91CC\u4F60\u53EF\u4EE5\u628A\u8FD9\u90E8\u5206\u62BD\u6210 component \u3002"],["p","\u6211\u4EEC\u6765\u7F16\u5199\u4E00\u4E2A ",["code","ProductList"]," component\uFF0C\u8FD9\u6837\u5C31\u80FD\u5728\u4E0D\u540C\u7684\u5730\u65B9\u663E\u793A\u4EA7\u54C1\u5217\u8868\u4E86\u3002"],["p","\u7136\u540E\u65B0\u5EFA ",["code","src/components/ProductList.tsx"]," \u6587\u4EF6\uFF1A"],["pre",{lang:"tsx",highlighted:`import { Table<span class="token punctuation">,</span> Popconfirm<span class="token punctuation">,</span> Button } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> ProductList<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC<span class="token operator">&lt;</span>{ products<span class="token punctuation">:</span> { name<span class="token punctuation">:</span> string }<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">; onDelete: (id: string) => void }> = ({</span>
  onDelete<span class="token punctuation">,</span>
  products<span class="token punctuation">,</span>
}<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
    {
      title<span class="token punctuation">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
      dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    }<span class="token punctuation">,</span>
    {
      title<span class="token punctuation">:</span> <span class="token string">'Actions'</span><span class="token punctuation">,</span>
      render<span class="token punctuation">:</span> <span class="token punctuation">(</span>text<span class="token punctuation">,</span> record<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        return <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>Popconfirm title<span class="token operator">=</span><span class="token string">"Delete?"</span> onConfirm<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">onDelete</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span>id<span class="token punctuation">)</span>}<span class="token operator">></span>
            <span class="token operator">&lt;</span>Button<span class="token operator">></span>Delete<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Popconfirm<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">,</span>
    }<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
  return <span class="token operator">&lt;</span>Table dataSource<span class="token operator">=</span>{products} columns<span class="token operator">=</span>{columns} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> ProductList<span class="token comment" spellcheck="true">;</span>`},["code",`import { Table, Popconfirm, Button } from 'antd';

const ProductList: React.FC<{ products: { name: string }[]; onDelete: (id: string) => void }> = ({
  onDelete,
  products,
}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

export default ProductList;`]],["h2","\u7B80\u5355\u6570\u636E\u6D41\u65B9\u6848"],["p",["code","@umijs/plugin-model"]," \u662F\u4E00\u79CD\u57FA\u4E8E hooks \u8303\u5F0F\u7684\u7B80\u5355\u6570\u636E\u6D41\u65B9\u6848\uFF0C\u53EF\u4EE5\u5728\u4E00\u5B9A\u60C5\u51B5\u4E0B\u66FF\u4EE3 dva \u6765\u8FDB\u884C\u4E2D\u53F0\u7684\u5168\u5C40\u6570\u636E\u6D41\u3002\u6211\u4EEC\u7EA6\u5B9A\u5728 ",["code","src/models"],"\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u4E3A\u9879\u76EE\u5B9A\u4E49\u7684 model \u6587\u4EF6\u3002\u6BCF\u4E2A\u6587\u4EF6\u9700\u8981\u9ED8\u8BA4\u5BFC\u51FA\u4E00\u4E2A function\uFF0C\u8BE5 function \u5B9A\u4E49\u4E86\u4E00\u4E2A Hook\uFF0C\u4E0D\u7B26\u5408\u89C4\u8303\u7684\u6587\u4EF6\u6211\u4EEC\u4F1A\u8FC7\u6EE4\u6389\u3002"],["p","\u6587\u4EF6\u540D\u5219\u5BF9\u5E94\u6700\u7EC8 model \u7684 name\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u63D0\u4F9B\u7684 API \u6765\u6D88\u8D39 model \u4E2D\u7684\u6570\u636E\u3002"],["p","\u6211\u4EEC\u4EE5\u4E00\u4E2A\u7B80\u5355\u7684\u8868\u683C\u4F5C\u4E3A\u793A\u4F8B\u3002\u9996\u5148\u9700\u8981\u65B0\u5EFA\u6587\u4EF6 ",["code","src/models/useProductList.ts"],"\u3002"],["pre",{lang:"tsx",highlighted:`import { useRequest } from <span class="token string">'umi'</span><span class="token comment" spellcheck="true">;</span>
import { queryProductList } from <span class="token string">'@/services/product'</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> function <span class="token function">useProductList</span><span class="token punctuation">(</span>params<span class="token punctuation">:</span> { pageSize<span class="token punctuation">:</span> number<span class="token comment" spellcheck="true">; current: number }) {</span>
  <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">queryUserList</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> deleteProducts <span class="token operator">=</span> async <span class="token punctuation">(</span>id<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    try {
      await <span class="token function">removeProducts</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      msg<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    } catch <span class="token punctuation">(</span>error<span class="token punctuation">)</span> {
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'fail'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }<span class="token comment" spellcheck="true">;</span>

  return {
    dataSource<span class="token punctuation">:</span> msg<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
    reload<span class="token punctuation">:</span> msg<span class="token punctuation">.</span>run<span class="token punctuation">,</span>
    loading<span class="token punctuation">:</span> msg<span class="token punctuation">.</span>loading<span class="token punctuation">,</span>
    deleteProducts<span class="token punctuation">,</span>
  }<span class="token comment" spellcheck="true">;</span>
}`},["code",`import { useRequest } from 'umi';
import { queryProductList } from '@/services/product';

export default function useProductList(params: { pageSize: number; current: number }) {
  const msg = useRequest(() => queryUserList(params));

  const deleteProducts = async (id: string) => {
    try {
      await removeProducts(id);
      message.success('success');
      msg.run();
    } catch (error) {
      message.error('fail');
    }
  };

  return {
    dataSource: msg.data,
    reload: msg.run,
    loading: msg.loading,
    deleteProducts,
  };
}`]],["p","\u7F16\u8F91 ",["code","src/pages/products.tsx"],"\uFF0C\u66FF\u6362\u4E3A\u4EE5\u4E0B\u5185\u5BB9\uFF1A"],["pre",{lang:"tsx",highlighted:`import { useModel } from <span class="token string">'umi'</span><span class="token comment" spellcheck="true">;</span>
import ProductList from <span class="token string">'@/components/ProductList'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> Products <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> { dataSource<span class="token punctuation">,</span> reload<span class="token punctuation">,</span> deleteProducts } <span class="token operator">=</span> <span class="token function">useModel</span><span class="token punctuation">(</span><span class="token string">'useProductList'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>reload<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
      <span class="token operator">&lt;</span>ProductList onDelete<span class="token operator">=</span>{deleteProducts} products<span class="token operator">=</span>{dataSource} <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> Products<span class="token comment" spellcheck="true">;</span>`},["code",`import { useModel } from 'umi';
import ProductList from '@/components/ProductList';

const Products = () => {
  const { dataSource, reload, deleteProducts } = useModel('useProductList');
  return (
    <div>
      <a onClick={() => reload()}>reload</a>
      <ProductList onDelete={deleteProducts} products={dataSource} />
    </div>
  );
};

export default Products;`]],["p","\u6267\u884C\u542F\u52A8\u547D\u4EE4\uFF1A"],["pre",{lang:"bash",highlighted:"$ yarn start"},["code","$ yarn start"]],["p","\u8BBF\u95EE ",["a",{title:null,href:"http://localhost:8000/"},"http://localhost:8000"],"\uFF0C\u5E94\u8BE5\u80FD\u770B\u5230\u4EE5\u4E0B\u6548\u679C\uFF1A"],["p",["img",{src:"https://gw.alipayobjects.com/zos/antfincdn/dPsy4tFHN3/umi.gif"}]],["h2","ProLayout"],["p","\u4E00\u4E2A\u6807\u51C6\u7684\u4E2D\u540E\u53F0\u9875\u9762\uFF0C\u4E00\u822C\u90FD\u9700\u8981\u4E00\u4E2A\u5E03\u5C40\uFF0C\u8FD9\u4E2A\u5E03\u5C40\u5F88\u591A\u65F6\u5019\u90FD\u662F\u9AD8\u5EA6\u96F7\u540C\u7684\uFF0CProLayout \u5C01\u88C5\u4E86\u5E38\u7528\u7684\u83DC\u5355\uFF0C\u9762\u5305\u5C51\uFF0C\u9875\u5934\u7B49\u529F\u80FD\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u4E0D\u4F9D\u8D56\u7684\u6846\u67B6\u4E14\u5F00\u7BB1\u5373\u7528\u7684\u9AD8\u7EA7\u5E03\u5C40\u7EC4\u4EF6\u3002"],["p","\u5E76\u4E14\u652F\u6301 ",["code","side"],", ",["code","mix"],", ",["code","top"]," \u4E09\u79CD\u6A21\u5F0F\uFF0C\u66F4\u662F\u5185\u7F6E\u4E86\u83DC\u5355\u9009\u4E2D\uFF0C\u83DC\u5355\u751F\u6210\u9762\u5305\u5C51\uFF0C\u81EA\u52A8\u8BBE\u7F6E\u9875\u9762\u6807\u9898\u7684\u903B\u8F91\u3002\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5FEB\u901F\u7684\u5F00\u59CB\u4E00\u4E2A\u9879\u76EE\u3002"],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/antfincdn/gXkuc%26RmT7/64038246-E2BF-4840-8898-5AF531897A44.png",alt:"site"}]],["p","\u4F7F\u7528\u65B9\u5F0F\u4E5F\u662F\u6781\u4E3A\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u8FDB\u884C\u51E0\u4E2A\u7B80\u5355\u7684\u8BBE\u7F6E\u3002"],["pre",{lang:"tsx",highlighted:`import { Button } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import ProLayout<span class="token punctuation">,</span> { PageContainer } from <span class="token string">'@ant-design/pro-layout'</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>ProLayout<span class="token operator">></span>
    <span class="token operator">&lt;</span>PageContainer
      extra<span class="token operator">=</span>{<span class="token punctuation">[</span>
        <span class="token operator">&lt;</span>Button key<span class="token operator">=</span><span class="token string">"3"</span><span class="token operator">></span>Operating<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">,</span>
        <span class="token operator">&lt;</span>Button key<span class="token operator">=</span><span class="token string">"2"</span><span class="token operator">></span>Operating<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">,</span>
        <span class="token operator">&lt;</span>Button key<span class="token operator">=</span><span class="token string">"1"</span> type<span class="token operator">=</span><span class="token string">"primary"</span><span class="token operator">></span>
          Main Operating
        <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
      footer<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token operator">&lt;</span>Button<span class="token operator">></span>reset<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span><span class="token operator">></span>submit<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">]</span>}
    <span class="token operator">></span>
      {children}
    <span class="token operator">&lt;</span><span class="token operator">/</span>PageContainer<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ProLayout<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>`},["code",`import { Button } from 'antd';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';

export default (
  <ProLayout>
    <PageContainer
      extra={[
        <Button key="3">Operating</Button>,
        <Button key="2">Operating</Button>,
        <Button key="1" type="primary">
          Main Operating
        </Button>,
      ]}
      footer={[<Button>reset</Button>, <Button type="primary">submit</Button>]}
    >
      {children}
    </PageContainer>
  </ProLayout>
);`]],["p","\u70B9\u51FB\u8FD9\u91CC",["a",{title:null,href:"https://prolayout.ant.design/getting-started"},"\u5FEB\u901F\u5F00\u59CB"],"\u3002"],["h2","ProTable"],["p","\u4E00\u4E2A\u4E2D\u540E\u53F0\u9875\u9762\u4E2D\u5F88\u591A\u6570\u636E\u90FD\u4E0D\u9700\u8981\u8DE8\u9875\u9762\u5171\u4EAB\uFF0Cmodels \u5728\u4E00\u4E9B\u65F6\u5019\u4E5F\u662F\u4E0D\u9700\u8981\u7684\u3002"],["pre",{lang:"tsx",highlighted:`import ProTable from <span class="token string">'@ant-design/pro-table'</span><span class="token comment" spellcheck="true">;</span>
import { Popconfirm<span class="token punctuation">,</span> Button } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { queryProductList } from <span class="token string">'@/services/product'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> Products <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> actionRef <span class="token operator">=</span> useRef<span class="token operator">&lt;</span>ActionType<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> deleteProducts <span class="token operator">=</span> async <span class="token punctuation">(</span>id<span class="token punctuation">:</span> string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    try {
      await <span class="token function">removeProducts</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      actionRef<span class="token punctuation">.</span>current<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    } catch <span class="token punctuation">(</span>error<span class="token punctuation">)</span> {
      message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'fail'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
    {
      title<span class="token punctuation">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
      dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    }<span class="token punctuation">,</span>
    {
      title<span class="token punctuation">:</span> <span class="token string">'Actions'</span><span class="token punctuation">,</span>
      render<span class="token punctuation">:</span> <span class="token punctuation">(</span>text<span class="token punctuation">,</span> record<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        return <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>Popconfirm title<span class="token operator">=</span><span class="token string">"Delete?"</span> onConfirm<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">onDelete</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span>id<span class="token punctuation">)</span>}<span class="token operator">></span>
            <span class="token operator">&lt;</span>Button<span class="token operator">></span>Delete<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Popconfirm<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">,</span>
    }<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ProTable<span class="token operator">&lt;</span>{ name<span class="token punctuation">:</span> string }<span class="token operator">></span>
      headerTitle<span class="token operator">=</span><span class="token string">"\u67E5\u8BE2\u8868\u683C"</span>
      actionRef<span class="token operator">=</span>{actionRef}
      rowKey<span class="token operator">=</span><span class="token string">"name"</span>
      request<span class="token operator">=</span>{<span class="token punctuation">(</span>params<span class="token punctuation">,</span> sorter<span class="token punctuation">,</span> filter<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">queryProductList</span><span class="token punctuation">(</span>{ <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>params<span class="token punctuation">,</span> sorter<span class="token punctuation">,</span> filter }<span class="token punctuation">)</span>}
      columns<span class="token operator">=</span>{columns}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>`},["code",`import ProTable from '@ant-design/pro-table';
import { Popconfirm, Button } from 'antd';
import { queryProductList } from '@/services/product';

const Products = () => {
  const actionRef = useRef<ActionType>();

  const deleteProducts = async (id: string) => {
    try {
      await removeProducts(id);
      message.success('success');
      actionRef.current?.reload();
    } catch (error) {
      message.error('fail');
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <ProTable<{ name: string }>
      headerTitle="\u67E5\u8BE2\u8868\u683C"
      actionRef={actionRef}
      rowKey="name"
      request={(params, sorter, filter) => queryProductList({ ...params, sorter, filter })}
      columns={columns}
    />
  );
};`]],["p","ProTable \u63D0\u4F9B\u4E86\u9884\u8BBE\u903B\u8F91\u6765\u5904\u7406 loading\uFF0C\u5206\u9875 \u548C\u641C\u7D22\u8868\u5355\uFF0C\u53EF\u4EE5\u5927\u5927\u51CF\u5C11\u4EE3\u7801\u91CF\uFF0C\u70B9\u51FB\u8FD9\u91CC",["a",{title:null,href:"https://protable.ant.design/getting-started"},"\u5FEB\u901F\u5F00\u59CB"],"\u3002"],["h2","\u6784\u5EFA\u5E94\u7528"],["p","\u5B8C\u6210\u5F00\u53D1\u5E76\u4E14\u5728\u5F00\u53D1\u73AF\u5883\u9A8C\u8BC1\u4E4B\u540E\uFF0C\u5C31\u9700\u8981\u90E8\u7F72\u7ED9\u6211\u4EEC\u7684\u7528\u6237\u4E86\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A"],["pre",{lang:"bash",highlighted:"$ yarn build"},["code","$ yarn build"]],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/antfincdn/Zd3f%242NdOK/b911d244-f1a5-4d61-adc5-3710cd86cd1b.png",alt:"build"}]],["p","\u6784\u5EFA\u4F1A\u6253\u5305\u6240\u6709\u7684\u8D44\u6E90\uFF0C\u5305\u542B JavaScript, CSS, web fonts, images, html \u7B49\u3002\u4F60\u53EF\u4EE5\u5728 ",["code","dist/"]," \u76EE\u5F55\u4E0B\u627E\u5230\u8FD9\u4E9B\u6587\u4EF6\u3002"],["h2","\u4E0B\u4E00\u6B65"],["p","\u6211\u4EEC\u5DF2\u7ECF\u5B8C\u6210\u4E86\u4E00\u4E2A\u7B80\u5355\u5E94\u7528\uFF0C\u4F60\u53EF\u80FD\u8FD8\u6709\u5F88\u591A\u7591\u95EE\uFF0C\u6BD4\u5982\uFF1A"],["ul",["li",["p","\u5982\u4F55\u7EDF\u4E00\u5904\u7406\u51FA\u9519\uFF1F"]],["li",["p","\u5982\u4F55\u5904\u7406\u66F4\u591A\u8DEF\u7531\uFF0C\u6BD4\u5982\u52A8\u6001\u8DEF\u7531\uFF0C\u5D4C\u5957\u8DEF\u7531\uFF0C\u6743\u9650\u8DEF\u7531\u7B49\uFF1F"]],["li",["p","\u5982\u4F55 mock \u6570\u636E\uFF1F"]],["li",["p","\u5982\u4F55\u90E8\u7F72\uFF1F"]],["li",["p","\u7B49\u7B49"]]],["p","\u4F60\u53EF\u4EE5\uFF1A"],["ul",["li",["p","\u8BBF\u95EE ",["a",{title:null,href:"https://umijs.org/"},"umi \u5B98\u7F51"],"\u548C ",["a",{title:null,href:"https://dvajs.com/"},"dva \u5B98\u7F51"]]],["li",["p","\u7406\u89E3 ",["a",{title:null,href:"https://umijs.org/zh/guide/router.html"},"umi \u7684\u8DEF\u7531"]]],["li",["p","\u7406\u89E3 ",["a",{title:null,href:"https://umijs.org/zh/guide/deploy.html"},"\u5982\u4F55\u90E8\u7F72 umi \u5E94\u7528"]]],["li",["p","\u5F00\u7BB1\u5373\u7528\u7684\u811A\u624B\u67B6 ",["a",{title:null,href:"https://pro.ant.design"},"Ant Design Pro"]]],["li",["p","\u9AD8\u7EA7\u5E03\u5C40 ",["a",{title:null,href:"https://prolayout.ant.design"},"ProLayout"]]],["li",["p","\u9AD8\u7EA7\u8868\u683C ",["a",{title:null,href:"https://protable.ant.design"},"ProTable"]]]]],meta:{order:3,title:"\u9879\u76EE\u5B9E\u6218",filename:"docs/react/practical-projects.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u5B89\u88C5-Umi",title:"\u5B89\u88C5 Umi"},"\u5B89\u88C5 Umi"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5B89\u88C5\u63D2\u4EF6\u96C6",title:"\u5B89\u88C5\u63D2\u4EF6\u96C6"},"\u5B89\u88C5\u63D2\u4EF6\u96C6"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u65B0\u5EFA\u8DEF\u7531",title:"\u65B0\u5EFA\u8DEF\u7531"},"\u65B0\u5EFA\u8DEF\u7531"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7F16\u5199-UI-Component",title:"\u7F16\u5199 UI Component"},"\u7F16\u5199 UI Component"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7B80\u5355\u6570\u636E\u6D41\u65B9\u6848",title:"\u7B80\u5355\u6570\u636E\u6D41\u65B9\u6848"},"\u7B80\u5355\u6570\u636E\u6D41\u65B9\u6848"]],["li",["a",{className:"bisheng-toc-h2",href:"#ProLayout",title:"ProLayout"},"ProLayout"]],["li",["a",{className:"bisheng-toc-h2",href:"#ProTable",title:"ProTable"},"ProTable"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6784\u5EFA\u5E94\u7528",title:"\u6784\u5EFA\u5E94\u7528"},"\u6784\u5EFA\u5E94\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4E0B\u4E00\u6B65",title:"\u4E0B\u4E00\u6B65"},"\u4E0B\u4E00\u6B65"]]]}}}]);
