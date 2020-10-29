(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{3276:function(n,s){n.exports={content:["article",["p","In real project development, you may need data flow solutions such as Redux or MobX. Ant Design React is a UI library that can be used with data flow solutions and application frameworks in any React ecosystem. Based on the business scenario, we launched a pluggable enterprise-level application framework umi, which is recommended for use in the project."],["p","And ",["a",{title:null,href:"http://umijs.org/"},"umi"]," is a routing-based framework that supports ",["a",{title:null,href:"https://umijs.org/guide/router.html"},"next.js-like conventional routing"]," and various advanced routing functions, such as ",["a",{title:null,href:"https://umijs.org/en/plugin/umi-plugin-react.html#dynamicimport"},"routing-level on-demand loading"],". With a complete ",["a",{title:null,href:"https://umijs.org/plugin/"},"plugin system"]," that covers every life cycle from source code to build product, umi is able to support various functional extensions and business needs; meanwhile ",["a",{title:null,href:"https://umijs.org/guide/umi-ui.html"},"Umi UI"]," is provided to enhance the development experience and development efficiency through Visual Aided Programming (VAP)."],["blockquote",["p","You may also be interested in ",["a",{title:null,href:"https://pro.ant.design/"},"Ant Design Pro"],", an Out-of-box UI solution for enterprise applications based on umi, dva and ant design."]],["p","This article will guide you to create a simple application from zero using Umi, dva and antd."],["h2","Install Umi"],["p","It is recommended to use yarn to create an application and execute the following command."],["pre",{lang:"bash",highlighted:`$ <span class="token function">mkdir</span> myapp <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> myapp
$ yarn create umi
$ yarn`},["code",`$ mkdir myapp && cd myapp
$ yarn create umi
$ yarn`]],["blockquote",["p","If you use npm, you can execute ",["code","npx create-umi"]," with the same effect."]],["h2","Install presets"],["p","Execute the following command, install presets(including the antd, dva, locale plugins):"],["pre",{lang:"bash",highlighted:`<span class="token comment" spellcheck="true"># \u6216 npm i @umijs/preset-react -D</span>
$ yarn add @umijs/preset-react -D`},["code",`# \u6216 npm i @umijs/preset-react -D
$ yarn add @umijs/preset-react -D`]],["blockquote",["p","And if you want to use a fixed version of antd, you can install additional antd dependency in your project, and the antd dependencies declared in package.json will be used first."]],["h2","Create Routes"],["p","We need to write an application displaying the list of products. The first step is to create a route."],["p","If you don't have npx, you need to install it first to execute the commands under node_modules."],["pre",{lang:"bash",highlighted:"$ yarn global add npx"},["code","$ yarn global add npx"]],["p","Then create a ",["code","/products"]," route,"],["pre",{lang:"bash",highlighted:`$ npx umi g page products --typescript

Write: src/pages/products.tsx
Write: src/pages/products.css`},["code",`$ npx umi g page products --typescript

Write: src/pages/products.tsx
Write: src/pages/products.css`]],["p","In ",["code",".umirc.ts"]," configured in routing, if there is need to internationalization, can configure ",["code","locale"]," enable antd internationalization:"],["pre",{lang:"diff",highlighted:`import { defineConfig } from 'umi';

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
});`]],["p","run ",["code","yarn start"]," then open ",["a",{title:null,href:"http://localhost:8000/products"},"http://localhost:8000/products"]," in your browser and you should see the corresponding page."],["h2","Write UI Components"],["p","As your application grows and you notice you are sharing UI elements between multiple pages (or using them multiple times on the same page), in umi it's called reusable components."],["p","Let's create a ",["code","ProductList"]," component that we can use in multiple places to show a list of products."],["p","Create ",["code","src/components/ProductList.tsx"]," by typing:"],["pre",{lang:"js",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Table<span class="token punctuation">,</span> Popconfirm<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ProductList <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> onDelete<span class="token punctuation">,</span> products <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
      dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token string">'Actions'</span><span class="token punctuation">,</span>
      render<span class="token punctuation">:</span> <span class="token punctuation">(</span>text<span class="token punctuation">,</span> record<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>Popconfirm title<span class="token operator">=</span><span class="token string">"Delete?"</span> onConfirm<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">onDelete</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>Button<span class="token operator">></span>Delete<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Popconfirm<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Table dataSource<span class="token operator">=</span><span class="token punctuation">{</span>products<span class="token punctuation">}</span> columns<span class="token operator">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ProductList<span class="token punctuation">;</span>`},["code",`import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
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

export default ProductList;`]],["h2","Simple data management solution"],["p",["code","@umijs/plugin-model"]," is a simple data flow scheme based on the hooks paradigm, which can replace dva to perform global data flow in the middle stage under certain circumstances. We agree that the files in the ",["code","src/models"]," directory are the model files defined by the project. Each file needs to export a function by default, the function defines a hook, and files that do not meet the specifications will be filtered out."],["p","The file name corresponds to the name of the final model, and you can consume the data in the model through the API provided by the plug-in."],["p","Let's take a simple table as an example. First you need to create a new file ",["code","src/models/useProductList.ts"],"."],["pre",{lang:"tsx",highlighted:`import { useRequest } from <span class="token string">'umi'</span><span class="token comment" spellcheck="true">;</span>
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
}`]],["p","Edit ",["code","src/pages/products.tsx"]," and replace with the following:"],["pre",{lang:"tsx",highlighted:`import { useModel } from <span class="token string">'umi'</span><span class="token comment" spellcheck="true">;</span>
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

export default Products;`]],["p","Refresh your browser, you should see the following result:"],["p",["img",{src:"https://gw.alipayobjects.com/zos/antfincdn/dPsy4tFHN3/umi.gif"}]],["h2","ProLayout"],["p","A standard mid-to-back page generally requires a layout. This layout is often highly similar. ProLayout encapsulates commonly used menus, breadcrumbs, page headers and other functions, provides an independent framework and works out of the box Advanced layout components."],["p","And supports three modes of ",["code","side"],", ",["code","mix"],", and ",["code","top"],", and it also has built-in menu selection, the menu generates breadcrumbs, and automatically sets the logic of the page title. Can help you start a project quickly."],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/antfincdn/gXkuc%26RmT7/64038246-E2BF-4840-8898-5AF531897A44.png",alt:"site"}]],["p","The method of use is also extremely simple, requiring only a few simple settings."],["pre",{lang:"tsx",highlighted:`import { Button } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
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
);`]],["p","Click here ",["a",{title:null,href:"https://prolayout.ant.design/getting-started"},"Quick Start"],"."],["h2","ProTable"],["p","Many data in an admin page does not need to be shared across pages, and models are sometimes not needed."],["pre",{lang:"tsx",highlighted:`import ProTable from <span class="token string">'@ant-design/pro-table'</span><span class="token comment" spellcheck="true">;</span>
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
      headerTitle<span class="token operator">=</span><span class="token string">"Query Table"</span>
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
      headerTitle="Query Table"
      actionRef={actionRef}
      rowKey="name"
      request={(params, sorter, filter) => queryProductList({ ...params, sorter, filter })}
      columns={columns}
    />
  );
};`]],["p","ProTable provides preset logic to handle loading, pagination and search forms, which can greatly reduce the amount of code, click here ",["a",{title:null,href:"https://protable.ant.design/getting-started"},"Quick Start"],"."],["h2","Build"],["p","Now that we've written our application and verified that it works in development, it's time to get it ready for deployment to our users. To do so, execute the following command:"],["pre",{lang:"bash",highlighted:"$ yarn build"},["code","$ yarn build"]],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/antfincdn/Zd3f%242NdOK/b911d244-f1a5-4d61-adc5-3710cd86cd1b.png",alt:null}]],["p","The ",["code","build"]," command packages up all of the assets that make up your application \u2014\u2014 JavaScript, templates, CSS, web fonts, images, and more. Then you can find these files in the ",["code","dist/"]," directory."],["h2","What's Next"],["p","We have completed a simple application, but you may still have lots of questions, such as:"],["ul",["li",["p","How to handle onError globally and locally?"]],["li",["p","How to handle routes?"]],["li",["p","How to mock data?"]],["li",["p","How to deploy?"]],["li",["p","ant so on..."]]],["p","You can:"],["ul",["li",["p","Visit ",["a",{title:null,href:"https://umijs.org/"},"umi official website"]," and ",["a",{title:null,href:"https://dvajs.com/"},"dva official website"]]],["li",["p","Know ",["a",{title:null,href:"https://umijs.org/zh/guide/router.html"},"the umi routes"]]],["li",["p","Know ",["a",{title:null,href:"https://umijs.org/zh/guide/deploy.html"},"how to deploy umi application"]]],["li",["p","Scaffolding out of the box ",["a",{title:null,href:"https://pro.ant.design"},"Ant Design Pro"]]],["li",["p","Advanced Layout ",["a",{title:null,href:"https://prolayout.ant.design"},"ProLayout"]]],["li",["p","Advanced Table ",["a",{title:null,href:"https://protable.ant.design"},"ProTable"]]]]],meta:{order:3,title:"Real project with umi",filename:"docs/react/practical-projects.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Install-Umi",title:"Install Umi"},"Install Umi"]],["li",["a",{className:"bisheng-toc-h2",href:"#Install-presets",title:"Install presets"},"Install presets"]],["li",["a",{className:"bisheng-toc-h2",href:"#Create-Routes",title:"Create Routes"},"Create Routes"]],["li",["a",{className:"bisheng-toc-h2",href:"#Write-UI-Components",title:"Write UI Components"},"Write UI Components"]],["li",["a",{className:"bisheng-toc-h2",href:"#Simple-data-management-solution",title:"Simple data management solution"},"Simple data management solution"]],["li",["a",{className:"bisheng-toc-h2",href:"#ProLayout",title:"ProLayout"},"ProLayout"]],["li",["a",{className:"bisheng-toc-h2",href:"#ProTable",title:"ProTable"},"ProTable"]],["li",["a",{className:"bisheng-toc-h2",href:"#Build",title:"Build"},"Build"]],["li",["a",{className:"bisheng-toc-h2",href:"#What's-Next",title:"What's Next"},"What's Next"]]]}}}]);
