(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{3260:function(a,b){a.exports={content:["article",["p","在真实项目开发中，你可能会需要 Redux 或者 MobX 这样的数据流方案，Ant Design React 作为一个 UI 库，可以和任何 React 生态圈内的数据流方案以及应用框架搭配使用。我们基于业务场景的场景，推出了可插拔的企业级应用框架 umi，推荐你在项目中使用。"],["p",["a",{title:null,href:"http://umijs.org/"},"umi"]," 则是一个可插拔的企业级 react 应用框架。umi 以路由为基础的，支持",["a",{title:null,href:"https://umijs.org/zh/guide/router.html"},"类 next.js 的约定式路由"],"，以及各种进阶的路由功能，并以此进行功能扩展，比如",["a",{title:null,href:"https://umijs.org/zh/plugin/umi-plugin-react.html#dynamicimport"},"支持路由级的按需加载"],"。然后配以完善的",["a",{title:null,href:"https://umijs.org/zh/plugin/"},"插件体系"],"，覆盖从源码到构建产物的每个生命周期，支持各种功能扩展和业务需求，同时提供 ",["a",{title:null,href:"https://umijs.org/zh/guide/umi-ui.html"},"Umi UI"]," 通过可视化辅助编程（VAP）提高开发体验和研发效率。"],["blockquote",["p","你可能也会对 ",["a",{title:null,href:"https://pro.ant.design/"},"Ant Design Pro"]," 感兴趣，这是一个基于 umi、dva 和 ant design 的开箱即用的中台前端/设计解决方案。"]],["p","本文会引导你使用 Umi、dva 和 antd 从 0 开始创建一个简单应用。"],["h2","安装 Umi"],["p","推荐使用 yarn 创建 Umi 脚手架，执行以下命令。"],["pre",{lang:"bash",highlighted:`$ <span class="token function">mkdir</span> myapp <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> myapp
$ yarn create umi
$ yarn`},["code",`$ mkdir myapp && cd myapp
$ yarn create umi
$ yarn`]],["blockquote",["p","如果你使用 npm，可执行 ",["code","npx create-umi"],"，效果一致。"]],["h2","安装插件集"],["p","执行以下命令，安装插件集（包括 antd、dva、国际化等常用插件）："],["pre",{lang:"bash",highlighted:`<span class="token comment" spellcheck="true"># 或 npm i @umijs/preset-react -D</span>
$ yarn add @umijs/preset-react -D`},["code",`# 或 npm i @umijs/preset-react -D
$ yarn add @umijs/preset-react -D`]],["blockquote",["p","插件默认使用 ",["code",'"antd": "^4.0.0"'],"，如果要使用固定版本的 antd，你可以在项目里安装额外的 antd 依赖，",["code","package.json"]," 里声明的 antd 依赖会被优先使用。"]],["h2","新建路由"],["p","我们要写个应用来先显示产品列表。首先第一步是创建路由，路由可以想象成是组成应用的不同页面。"],["p","然后通过命令创建 ",["code","/products"]," 路由，"],["pre",{lang:"bash",highlighted:`$ npx umi g page products --typescript

Write: src/pages/products.tsx
Write: src/pages/products.css`},["code",`$ npx umi g page products --typescript

Write: src/pages/products.tsx
Write: src/pages/products.css`]],["p","在 ",["code",".umirc.ts"]," 中配置路由，如果有国际化需要，可以配置 ",["code","locale"]," 开启 antd 国际化："],["pre",{lang:"diff",highlighted:`import { defineConfig } from 'umi';

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
});`]],["p","运行 ",["code","yarn start"]," 然后在浏览器里打开 ",["a",{title:null,href:"http://localhost:8000/products"},"http://localhost:8000/products"],"，你应该能看到对应的页面。"],["h2","编写 UI Component"],["p","随着应用的发展，你会需要在多个页面分享 UI 元素 (或在一个页面使用多次)，在 umi 里你可以把这部分抽成 component 。"],["p","我们来编写一个 ",["code","ProductList"]," component，这样就能在不同的地方显示产品列表了。"],["p","然后新建 ",["code","src/components/ProductList.tsx"]," 文件："],["pre",{lang:"tsx",highlighted:`import { Table<span class="token punctuation">,</span> Popconfirm<span class="token punctuation">,</span> Button } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

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

export default ProductList;`]],["h2","简单数据流方案"],["p",["code","@umijs/plugin-model"]," 是一种基于 hooks 范式的简单数据流方案，可以在一定情况下替代 dva 来进行中台的全局数据流。我们约定在 ",["code","src/models"],"目录下的文件为项目定义的 model 文件。每个文件需要默认导出一个 function，该 function 定义了一个 Hook，不符合规范的文件我们会过滤掉。"],["p","文件名则对应最终 model 的 name，你可以通过插件提供的 API 来消费 model 中的数据。"],["p","我们以一个简单的表格作为示例。首先需要新建文件 ",["code","src/models/useProductList.ts"],"。"],["pre",{lang:"tsx",highlighted:`import { useRequest } from <span class="token string">'umi'</span><span class="token comment" spellcheck="true">;</span>
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
}`]],["p","编辑 ",["code","src/pages/products.tsx"],"，替换为以下内容："],["pre",{lang:"tsx",highlighted:`import { useModel } from <span class="token string">'umi'</span><span class="token comment" spellcheck="true">;</span>
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

export default Products;`]],["p","执行启动命令："],["pre",{lang:"bash",highlighted:"$ yarn start"},["code","$ yarn start"]],["p","访问 ",["a",{title:null,href:"http://localhost:8000/"},"http://localhost:8000"],"，应该能看到以下效果："],["p",["img",{src:"https://gw.alipayobjects.com/zos/antfincdn/dPsy4tFHN3/umi.gif"}]],["h2","ProLayout"],["p","一个标准的中后台页面，一般都需要一个布局，这个布局很多时候都是高度雷同的，ProLayout 封装了常用的菜单，面包屑，页头等功能，提供了一个不依赖的框架且开箱即用的高级布局组件。"],["p","并且支持 ",["code","side"],", ",["code","mix"],", ",["code","top"]," 三种模式，更是内置了菜单选中，菜单生成面包屑，自动设置页面标题的逻辑。可以帮助你快速的开始一个项目。"],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/antfincdn/gXkuc%26RmT7/64038246-E2BF-4840-8898-5AF531897A44.png",alt:"site"}]],["p","使用方式也是极为简单，只需要进行几个简单的设置。"],["pre",{lang:"tsx",highlighted:`import { Button } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
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
);`]],["p","点击这里",["a",{title:null,href:"https://prolayout.ant.design/getting-started"},"快速开始"],"。"],["h2","ProTable"],["p","一个中后台页面中很多数据都不需要跨页面共享，models 在一些时候也是不需要的。"],["pre",{lang:"tsx",highlighted:`import ProTable from <span class="token string">'@ant-design/pro-table'</span><span class="token comment" spellcheck="true">;</span>
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
      headerTitle<span class="token operator">=</span><span class="token string">"查询表格"</span>
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
      headerTitle="查询表格"
      actionRef={actionRef}
      rowKey="name"
      request={(params, sorter, filter) => queryProductList({ ...params, sorter, filter })}
      columns={columns}
    />
  );
};`]],["p","ProTable 提供了预设逻辑来处理 loading，分页 和搜索表单，可以大大减少代码量，点击这里",["a",{title:null,href:"https://protable.ant.design/getting-started"},"快速开始"],"。"],["h2","构建应用"],["p","完成开发并且在开发环境验证之后，就需要部署给我们的用户了，执行以下命令："],["pre",{lang:"bash",highlighted:"$ yarn build"},["code","$ yarn build"]],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/antfincdn/Zd3f%242NdOK/b911d244-f1a5-4d61-adc5-3710cd86cd1b.png",alt:"build"}]],["p","构建会打包所有的资源，包含 JavaScript, CSS, web fonts, images, html 等。你可以在 ",["code","dist/"]," 目录下找到这些文件。"],["h2","下一步"],["p","我们已经完成了一个简单应用，你可能还有很多疑问，比如："],["ul",["li",["p","如何统一处理出错？"]],["li",["p","如何处理更多路由，比如动态路由，嵌套路由，权限路由等？"]],["li",["p","如何 mock 数据？"]],["li",["p","如何部署？"]],["li",["p","等等"]]],["p","你可以："],["ul",["li",["p","访问 ",["a",{title:null,href:"https://umijs.org/"},"umi 官网"],"和 ",["a",{title:null,href:"https://dvajs.com/"},"dva 官网"]]],["li",["p","理解 ",["a",{title:null,href:"https://umijs.org/zh/guide/router.html"},"umi 的路由"]]],["li",["p","理解 ",["a",{title:null,href:"https://umijs.org/zh/guide/deploy.html"},"如何部署 umi 应用"]]],["li",["p","开箱即用的脚手架 ",["a",{title:null,href:"https://pro.ant.design"},"Ant Design Pro"]]],["li",["p","高级布局 ",["a",{title:null,href:"https://prolayout.ant.design"},"ProLayout"]]],["li",["p","高级表格 ",["a",{title:null,href:"https://protable.ant.design"},"ProTable"]]]]],meta:{order:3,title:"项目实战",filename:"docs/react/practical-projects.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#安装-Umi",title:"安装 Umi"},"安装 Umi"]],["li",["a",{className:"bisheng-toc-h2",href:"#安装插件集",title:"安装插件集"},"安装插件集"]],["li",["a",{className:"bisheng-toc-h2",href:"#新建路由",title:"新建路由"},"新建路由"]],["li",["a",{className:"bisheng-toc-h2",href:"#编写-UI-Component",title:"编写 UI Component"},"编写 UI Component"]],["li",["a",{className:"bisheng-toc-h2",href:"#简单数据流方案",title:"简单数据流方案"},"简单数据流方案"]],["li",["a",{className:"bisheng-toc-h2",href:"#ProLayout",title:"ProLayout"},"ProLayout"]],["li",["a",{className:"bisheng-toc-h2",href:"#ProTable",title:"ProTable"},"ProTable"]],["li",["a",{className:"bisheng-toc-h2",href:"#构建应用",title:"构建应用"},"构建应用"]],["li",["a",{className:"bisheng-toc-h2",href:"#下一步",title:"下一步"},"下一步"]]]}}}]);
