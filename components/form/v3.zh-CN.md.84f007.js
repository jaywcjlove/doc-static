(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{877:function(a,b){a.exports={content:["article",["p","新版本 Form 对使用方式进行了简化，因而如果你是从 v3 迁移上来。你可以参考本文做迁移工作。"],["h2","去除 Form.create"],["p","v4 的 Form 不再需要通过 ",["code","Form.create()"]," 创建上下文。Form 组件现在自带数据域，因而 ",["code","getFieldDecorator"]," 也不再需要，直接写入 Form.Item 即可："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> form<span class="token punctuation">:</span> <span class="token punctuation">{</span> getFieldDecorator <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span><span class="token function">getFieldDecorator</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> WrappedDemo <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v3
const Demo = ({ form: { getFieldDecorator } }) => (
  <Form>
    <Form.Item>
      {getFieldDecorator('username', {
        rules: [{ required: true }],
      })(<Input />)}
    </Form.Item>
  </Form>
);

const WrappedDemo = Form.create()(Demo);`]],["p","改成："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v4
const Demo = () => (
  <Form>
    <Form.Item name="username" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
  </Form>
);`]],["p","由于移除了 ",["code","Form.create()"],"，原本的 ",["code","onFieldsChange"]," 等方法移入 Form 中，通过 ",["code","fields"]," 对 Form 进行控制。参考",["a",{title:null,href:"/components/form/#components-form-demo-global-state"},"示例"],"。"],["h2","表单控制调整"],["p","Form 自带表单控制实体，如需要调用 form 方法，可以通过 ",["code","Form.useForm()"]," 创建 Form 实体进行操作："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> form<span class="token punctuation">:</span> <span class="token punctuation">{</span> setFieldsValue <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token function">setFieldsValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      username<span class="token punctuation">:</span> <span class="token string">'Bamboo'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span><span class="token punctuation">></span></span>
        <span class="token punctuation">{</span><span class="token function">getFieldDecorator</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> WrappedDemo <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v3
const Demo = ({ form: { setFieldsValue } }) => {
  React.useEffect(() => {
    setFieldsValue({
      username: 'Bamboo',
    });
  }, []);

  return (
    <Form>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true }],
        })(<Input />)}
      </Form.Item>
    </Form>
  );
};

const WrappedDemo = Form.create()(Demo);`]],["p","改成："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    form<span class="token punctuation">.</span><span class="token function">setFieldsValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      username<span class="token punctuation">:</span> <span class="token string">'Bamboo'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>form<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`// antd v4
const Demo = () => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue({
      username: 'Bamboo',
    });
  }, []);

  return (
    <Form form={form}>
      <Form.Item name="username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </Form>
  );
};`]],["p","对于 class component，也可以通过 ",["code","ref"]," 获得实体："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  formRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>formRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">setFieldsValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      username<span class="token punctuation">:</span> <span class="token string">'Bamboo'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>formRef<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`},["code",`// antd v4
class Demo extends React.Component {
  formRef = React.createRef();

  componentDidMount() {
    this.formRef.current.setFieldsValue({
      username: 'Bamboo',
    });
  }

  render() {
    return (
      <Form ref={this.formRef}>
        <Form.Item name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    );
  }
}`]],["p","由于 Form.Item 内置字段绑定，如果需要不带样式的表单绑定，可以使用 ",["code","noStyle"]," 属性移除额外样式："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> form<span class="token punctuation">:</span> <span class="token punctuation">{</span> setFieldsValue <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">getFieldDecorator</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> WrappedDemo <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v3
const Demo = ({ form: { setFieldsValue } }) => {
  return <Form>{getFieldDecorator('username')(<Input />)}</Form>;
};

const WrappedDemo = Form.create()(Demo);`]],["p","改成："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">noStyle</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`// antd v4
const Demo = () => {
  return (
    <Form>
      <Form.Item name="username" noStyle>
        <Input />
      </Form.Item>
    </Form>
  );
};`]],["h2","字段联动调整"],["p","新版 Form 采用增量更新方式，仅会更新需要更新的字段。因而如果有字段关联更新，或者跟随整个表单更新而更新。可以使用 ",["a",{title:null,href:"/components/form/#dependencies"},["code","dependencies"]]," 或 ",["a",{title:null,href:"/components/form/#shouldUpdate"},["code","shouldUpdate"]],"。"],["h2","onFinish 替代 onSubmit"],["p","对于表单校验，过去版本需要通过监听 ",["code","onSubmit"]," 事件手工触发 ",["code","validateFields"],"。新版直接使用 ",["code","onFinish"]," 事件，该事件仅当校验通过后才会执行："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> form<span class="token punctuation">:</span> <span class="token punctuation">{</span> getFieldDecorator<span class="token punctuation">,</span> validateFields <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> onSubmit <span class="token operator">=</span> e <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> values<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Received values of form: '</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onSubmit<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span><span class="token punctuation">></span></span>
        <span class="token punctuation">{</span><span class="token function">getFieldDecorator</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> WrappedDemo <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v3
const Demo = ({ form: { getFieldDecorator, validateFields } }) => {
  const onSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true }],
        })(<Input />)}
      </Form.Item>
    </Form>
  );
};

const WrappedDemo = Form.create()(Demo);`]],["p","改成："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> onFinish <span class="token operator">=</span> values <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Received values of form: '</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">onFinish</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onFinish<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`// antd v4
const Demo = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </Form>
  );
};`]],["h2","scrollToField 替代 validateFieldsAndScroll"],["p","新版推荐使用 ",["code","onFinish"]," 进行校验后提交操作，因而 ",["code","validateFieldsAndScroll"]," 拆成更独立的 ",["code","scrollToField"]," 方法："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
onSubmit <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  form<span class="token punctuation">.</span><span class="token function">validateFieldsAndScroll</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> values<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token comment" spellcheck="true">// Your logic</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`// antd v3
onSubmit = () => {
  form.validateFieldsAndScroll((error, values) => {
    // Your logic
  });
};`]],["p","改成："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
onFinishFailed <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> errorFields <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  form<span class="token punctuation">.</span><span class="token function">scrollToField</span><span class="token punctuation">(</span>errorFields<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`// antd v4
onFinishFailed = ({ errorFields }) => {
  form.scrollToField(errorFields[0].name);
};`]],["h2","初始化调整"],["p","此外，我们将 ",["code","initialValue"]," 从字段中移到 Form 中。以避免同名字段设置 ",["code","initialValue"]," 的冲突问题："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> form<span class="token punctuation">:</span> <span class="token punctuation">{</span> getFieldDecorator <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span><span class="token function">getFieldDecorator</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        rules<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        initialValue<span class="token punctuation">:</span> <span class="token string">'Bamboo'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> WrappedDemo <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v3
const Demo = ({ form: { getFieldDecorator } }) => (
  <Form>
    <Form.Item>
      {getFieldDecorator('username', {
        rules: [{ required: true }],
        initialValue: 'Bamboo',
      })(<Input />)}
    </Form.Item>
  </Form>
);

const WrappedDemo = Form.create()(Demo);`]],["p","改成："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">initialValues</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> username<span class="token punctuation">:</span> <span class="token string">'Bamboo'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">rules</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v4
const Demo = () => (
  <Form initialValues={{ username: 'Bamboo' }}>
    <Form.Item name="username" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
  </Form>
);`]],["p","在 v3 版本中，修改未操作的字段 ",["code","initialValue"]," 会同步更新字段值，这是一个 BUG。但是由于被长期作为一个 feature 使用，因而我们一直没有修复。在 v4 中，该 BUG 已被修复。",["code","initialValue"]," 只有在初始化以及重置表单时生效。"],["h2","嵌套字段路径使用数组"],["p","过去版本我们通过 ",["code","."]," 代表嵌套路径（诸如 ",["code","user.name"]," 来代表 ",["code","{ user: { name: '' } }"],"）。然而在一些后台系统中，变量名中也会带上 ",["code","."],"。这造成用户需要额外的代码进行转化，因而新版中，嵌套路径通过数组来表示以避免错误的处理行为（如 ",["code","['user', 'name']"],"）。"],["p","也因此，诸如 ",["code","getFieldsError"]," 等方法返回的路径总是数组形式以便于用户处理："],["pre",{lang:"jsx",highlighted:`form<span class="token punctuation">.</span><span class="token function">getFieldsError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">/*
[
  { name: ['user', 'name'], errors: [] },
  { name: ['user', 'age'], errors: ['Some error message'] },
]
*/</span>`},["code",`form.getFieldsError();

/*
[
  { name: ['user', 'name'], errors: [] },
  { name: ['user', 'age'], errors: ['Some error message'] },
]
*/`]],["p","嵌套字段定义由："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Firstname<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">getFieldDecorator</span><span class="token punctuation">(</span><span class="token string">'user.0.firstname'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>`},["code",`// antd v3
<Form.Item label="Firstname">{getFieldDecorator('user.0.firstname', {})(<Input />)}</Form.Item>`]],["p","改至："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'firstname'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Firstname<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>`},["code",`// antd v4
<Form.Item name={['user', 0, 'firstname']} label="Firstname">
  <Input />
</Form.Item>`]],["p","相似的，",["code","setFieldsValue"]," 由："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>formRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">setFieldsValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">'user.0.firstname'</span><span class="token punctuation">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v3
this.formRef.current.setFieldsValue({
  'user.0.firstname': 'John',
});`]],["p","改至："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>formRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">setFieldsValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  user<span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      firstname<span class="token punctuation">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v4
this.formRef.current.setFieldsValue({
  user: [
    {
      firstname: 'John',
    },
  ],
});`]],["h2","validateFields 不再支持 callback"],["p",["code","validateFields"]," 会返回 Promise 对象，因而你可以通过 ",["code","async/await"]," 或者 ",["code","then/catch"]," 来执行对应的错误处理。不再需要判断 ",["code","errors"]," 是否为空："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
<span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment" spellcheck="true">// Do something with value</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v3
validateFields((err, value) => {
  if (!err) {
    // Do something with value
  }
});`]],["p","改成："],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
<span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>values <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token comment" spellcheck="true">// Do something with value</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v4
validateFields().then(values => {
  // Do something with value
});`]]],meta:{title:"从 v3 到 v4",skip:!0,filename:"components/form/v3.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#去除-Form.create",title:"去除 Form.create"},"去除 Form.create"]],["li",["a",{className:"bisheng-toc-h2",href:"#表单控制调整",title:"表单控制调整"},"表单控制调整"]],["li",["a",{className:"bisheng-toc-h2",href:"#字段联动调整",title:"字段联动调整"},"字段联动调整"]],["li",["a",{className:"bisheng-toc-h2",href:"#onFinish-替代-onSubmit",title:"onFinish 替代 onSubmit"},"onFinish 替代 onSubmit"]],["li",["a",{className:"bisheng-toc-h2",href:"#scrollToField-替代-validateFieldsAndScroll",title:"scrollToField 替代 validateFieldsAndScroll"},"scrollToField 替代 validateFieldsAndScroll"]],["li",["a",{className:"bisheng-toc-h2",href:"#初始化调整",title:"初始化调整"},"初始化调整"]],["li",["a",{className:"bisheng-toc-h2",href:"#嵌套字段路径使用数组",title:"嵌套字段路径使用数组"},"嵌套字段路径使用数组"]],["li",["a",{className:"bisheng-toc-h2",href:"#validateFields-不再支持-callback",title:"validateFields 不再支持 callback"},"validateFields 不再支持 callback"]]]}}}]);
