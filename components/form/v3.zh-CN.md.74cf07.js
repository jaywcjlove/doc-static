(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{892:function(n,s){n.exports={content:["article",["p","\u65B0\u7248\u672C Form \u5BF9\u4F7F\u7528\u65B9\u5F0F\u8FDB\u884C\u4E86\u7B80\u5316\uFF0C\u56E0\u800C\u5982\u679C\u4F60\u662F\u4ECE v3 \u8FC1\u79FB\u4E0A\u6765\u3002\u4F60\u53EF\u4EE5\u53C2\u8003\u672C\u6587\u505A\u8FC1\u79FB\u5DE5\u4F5C\u3002"],["h2","\u53BB\u9664 Form.create"],["p","v4 \u7684 Form \u4E0D\u518D\u9700\u8981\u901A\u8FC7 ",["code","Form.create()"]," \u521B\u5EFA\u4E0A\u4E0B\u6587\u3002Form \u7EC4\u4EF6\u73B0\u5728\u81EA\u5E26\u6570\u636E\u57DF\uFF0C\u56E0\u800C ",["code","getFieldDecorator"]," \u4E5F\u4E0D\u518D\u9700\u8981\uFF0C\u76F4\u63A5\u5199\u5165 Form.Item \u5373\u53EF\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
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

const WrappedDemo = Form.create()(Demo);`]],["p","\u6539\u6210\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
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
);`]],["p","\u7531\u4E8E\u79FB\u9664\u4E86 ",["code","Form.create()"],"\uFF0C\u539F\u672C\u7684 ",["code","onFieldsChange"]," \u7B49\u65B9\u6CD5\u79FB\u5165 Form \u4E2D\uFF0C\u901A\u8FC7 ",["code","fields"]," \u5BF9 Form \u8FDB\u884C\u63A7\u5236\u3002\u53C2\u8003",["a",{title:null,href:"/components/form/#components-form-demo-global-state"},"\u793A\u4F8B"],"\u3002"],["h2","\u8868\u5355\u63A7\u5236\u8C03\u6574"],["p","Form \u81EA\u5E26\u8868\u5355\u63A7\u5236\u5B9E\u4F53\uFF0C\u5982\u9700\u8981\u8C03\u7528 form \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",["code","Form.useForm()"]," \u521B\u5EFA Form \u5B9E\u4F53\u8FDB\u884C\u64CD\u4F5C\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
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

const WrappedDemo = Form.create()(Demo);`]],["p","\u6539\u6210\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
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
};`]],["p","\u5BF9\u4E8E class component\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",["code","ref"]," \u83B7\u5F97\u5B9E\u4F53\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
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
}`]],["p","\u7531\u4E8E Form.Item \u5185\u7F6E\u5B57\u6BB5\u7ED1\u5B9A\uFF0C\u5982\u679C\u9700\u8981\u4E0D\u5E26\u6837\u5F0F\u7684\u8868\u5355\u7ED1\u5B9A\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",["code","noStyle"]," \u5C5E\u6027\u79FB\u9664\u989D\u5916\u6837\u5F0F\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> form<span class="token punctuation">:</span> <span class="token punctuation">{</span> setFieldsValue <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">getFieldDecorator</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> WrappedDemo <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v3
const Demo = ({ form: { setFieldsValue } }) => {
  return <Form>{getFieldDecorator('username')(<Input />)}</Form>;
};

const WrappedDemo = Form.create()(Demo);`]],["p","\u6539\u6210\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
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
};`]],["h2","\u5B57\u6BB5\u8054\u52A8\u8C03\u6574"],["p","\u65B0\u7248 Form \u91C7\u7528\u589E\u91CF\u66F4\u65B0\u65B9\u5F0F\uFF0C\u4EC5\u4F1A\u66F4\u65B0\u9700\u8981\u66F4\u65B0\u7684\u5B57\u6BB5\u3002\u56E0\u800C\u5982\u679C\u6709\u5B57\u6BB5\u5173\u8054\u66F4\u65B0\uFF0C\u6216\u8005\u8DDF\u968F\u6574\u4E2A\u8868\u5355\u66F4\u65B0\u800C\u66F4\u65B0\u3002\u53EF\u4EE5\u4F7F\u7528 ",["a",{title:null,href:"/components/form/#dependencies"},["code","dependencies"]]," \u6216 ",["a",{title:null,href:"/components/form/#shouldUpdate"},["code","shouldUpdate"]],"\u3002"],["h2","onFinish \u66FF\u4EE3 onSubmit"],["p","\u5BF9\u4E8E\u8868\u5355\u6821\u9A8C\uFF0C\u8FC7\u53BB\u7248\u672C\u9700\u8981\u901A\u8FC7\u76D1\u542C ",["code","onSubmit"]," \u4E8B\u4EF6\u624B\u5DE5\u89E6\u53D1 ",["code","validateFields"],"\u3002\u65B0\u7248\u76F4\u63A5\u4F7F\u7528 ",["code","onFinish"]," \u4E8B\u4EF6\uFF0C\u8BE5\u4E8B\u4EF6\u4EC5\u5F53\u6821\u9A8C\u901A\u8FC7\u540E\u624D\u4F1A\u6267\u884C\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
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

const WrappedDemo = Form.create()(Demo);`]],["p","\u6539\u6210\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
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
};`]],["h2","scrollToField \u66FF\u4EE3 validateFieldsAndScroll"],["p","\u65B0\u7248\u63A8\u8350\u4F7F\u7528 ",["code","onFinish"]," \u8FDB\u884C\u6821\u9A8C\u540E\u63D0\u4EA4\u64CD\u4F5C\uFF0C\u56E0\u800C ",["code","validateFieldsAndScroll"]," \u62C6\u6210\u66F4\u72EC\u7ACB\u7684 ",["code","scrollToField"]," \u65B9\u6CD5\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
onSubmit <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  form<span class="token punctuation">.</span><span class="token function">validateFieldsAndScroll</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> values<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token comment" spellcheck="true">// Your logic</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`// antd v3
onSubmit = () => {
  form.validateFieldsAndScroll((error, values) => {
    // Your logic
  });
};`]],["p","\u6539\u6210\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
onFinishFailed <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> errorFields <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  form<span class="token punctuation">.</span><span class="token function">scrollToField</span><span class="token punctuation">(</span>errorFields<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`// antd v4
onFinishFailed = ({ errorFields }) => {
  form.scrollToField(errorFields[0].name);
};`]],["h2","\u521D\u59CB\u5316\u8C03\u6574"],["p","\u6B64\u5916\uFF0C\u6211\u4EEC\u5C06 ",["code","initialValue"]," \u4ECE\u5B57\u6BB5\u4E2D\u79FB\u5230 Form \u4E2D\u3002\u4EE5\u907F\u514D\u540C\u540D\u5B57\u6BB5\u8BBE\u7F6E ",["code","initialValue"]," \u7684\u51B2\u7A81\u95EE\u9898\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
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

const WrappedDemo = Form.create()(Demo);`]],["p","\u6539\u6210\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
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
);`]],["p","\u5728 v3 \u7248\u672C\u4E2D\uFF0C\u4FEE\u6539\u672A\u64CD\u4F5C\u7684\u5B57\u6BB5 ",["code","initialValue"]," \u4F1A\u540C\u6B65\u66F4\u65B0\u5B57\u6BB5\u503C\uFF0C\u8FD9\u662F\u4E00\u4E2A BUG\u3002\u4F46\u662F\u7531\u4E8E\u88AB\u957F\u671F\u4F5C\u4E3A\u4E00\u4E2A feature \u4F7F\u7528\uFF0C\u56E0\u800C\u6211\u4EEC\u4E00\u76F4\u6CA1\u6709\u4FEE\u590D\u3002\u5728 v4 \u4E2D\uFF0C\u8BE5 BUG \u5DF2\u88AB\u4FEE\u590D\u3002",["code","initialValue"]," \u53EA\u6709\u5728\u521D\u59CB\u5316\u4EE5\u53CA\u91CD\u7F6E\u8868\u5355\u65F6\u751F\u6548\u3002"],["h2","\u5D4C\u5957\u5B57\u6BB5\u8DEF\u5F84\u4F7F\u7528\u6570\u7EC4"],["p","\u8FC7\u53BB\u7248\u672C\u6211\u4EEC\u901A\u8FC7 ",["code","."]," \u4EE3\u8868\u5D4C\u5957\u8DEF\u5F84\uFF08\u8BF8\u5982 ",["code","user.name"]," \u6765\u4EE3\u8868 ",["code","{ user: { name: '' } }"],"\uFF09\u3002\u7136\u800C\u5728\u4E00\u4E9B\u540E\u53F0\u7CFB\u7EDF\u4E2D\uFF0C\u53D8\u91CF\u540D\u4E2D\u4E5F\u4F1A\u5E26\u4E0A ",["code","."],"\u3002\u8FD9\u9020\u6210\u7528\u6237\u9700\u8981\u989D\u5916\u7684\u4EE3\u7801\u8FDB\u884C\u8F6C\u5316\uFF0C\u56E0\u800C\u65B0\u7248\u4E2D\uFF0C\u5D4C\u5957\u8DEF\u5F84\u901A\u8FC7\u6570\u7EC4\u6765\u8868\u793A\u4EE5\u907F\u514D\u9519\u8BEF\u7684\u5904\u7406\u884C\u4E3A\uFF08\u5982 ",["code","['user', 'name']"],"\uFF09\u3002"],["p","\u4E5F\u56E0\u6B64\uFF0C\u8BF8\u5982 ",["code","getFieldsError"]," \u7B49\u65B9\u6CD5\u8FD4\u56DE\u7684\u8DEF\u5F84\u603B\u662F\u6570\u7EC4\u5F62\u5F0F\u4EE5\u4FBF\u4E8E\u7528\u6237\u5904\u7406\uFF1A"],["pre",{lang:"jsx",highlighted:`form<span class="token punctuation">.</span><span class="token function">getFieldsError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

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
*/`]],["p","\u5D4C\u5957\u5B57\u6BB5\u5B9A\u4E49\u7531\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Firstname<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">getFieldDecorator</span><span class="token punctuation">(</span><span class="token string">'user.0.firstname'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>`},["code",`// antd v3
<Form.Item label="Firstname">{getFieldDecorator('user.0.firstname', {})(<Input />)}</Form.Item>`]],["p","\u6539\u81F3\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'firstname'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Firstname<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>`},["code",`// antd v4
<Form.Item name={['user', 0, 'firstname']} label="Firstname">
  <Input />
</Form.Item>`]],["p","\u76F8\u4F3C\u7684\uFF0C",["code","setFieldsValue"]," \u7531\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>formRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">setFieldsValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">'user.0.firstname'</span><span class="token punctuation">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v3
this.formRef.current.setFieldsValue({
  'user.0.firstname': 'John',
});`]],["p","\u6539\u81F3\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
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
});`]],["h2","validateFields \u4E0D\u518D\u652F\u6301 callback"],["p",["code","validateFields"]," \u4F1A\u8FD4\u56DE Promise \u5BF9\u8C61\uFF0C\u56E0\u800C\u4F60\u53EF\u4EE5\u901A\u8FC7 ",["code","async/await"]," \u6216\u8005 ",["code","then/catch"]," \u6765\u6267\u884C\u5BF9\u5E94\u7684\u9519\u8BEF\u5904\u7406\u3002\u4E0D\u518D\u9700\u8981\u5224\u65AD ",["code","errors"]," \u662F\u5426\u4E3A\u7A7A\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v3</span>
<span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment" spellcheck="true">// Do something with value</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v3
validateFields((err, value) => {
  if (!err) {
    // Do something with value
  }
});`]],["p","\u6539\u6210\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// antd v4</span>
<span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>values <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token comment" spellcheck="true">// Do something with value</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// antd v4
validateFields().then(values => {
  // Do something with value
});`]]],meta:{title:"Form \u4ECE v3 \u5230 v4",skip:!0,filename:"components/form/v3.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u53BB\u9664-Form.create",title:"\u53BB\u9664 Form.create"},"\u53BB\u9664 Form.create"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u8868\u5355\u63A7\u5236\u8C03\u6574",title:"\u8868\u5355\u63A7\u5236\u8C03\u6574"},"\u8868\u5355\u63A7\u5236\u8C03\u6574"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5B57\u6BB5\u8054\u52A8\u8C03\u6574",title:"\u5B57\u6BB5\u8054\u52A8\u8C03\u6574"},"\u5B57\u6BB5\u8054\u52A8\u8C03\u6574"]],["li",["a",{className:"bisheng-toc-h2",href:"#onFinish-\u66FF\u4EE3-onSubmit",title:"onFinish \u66FF\u4EE3 onSubmit"},"onFinish \u66FF\u4EE3 onSubmit"]],["li",["a",{className:"bisheng-toc-h2",href:"#scrollToField-\u66FF\u4EE3-validateFieldsAndScroll",title:"scrollToField \u66FF\u4EE3 validateFieldsAndScroll"},"scrollToField \u66FF\u4EE3 validateFieldsAndScroll"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u521D\u59CB\u5316\u8C03\u6574",title:"\u521D\u59CB\u5316\u8C03\u6574"},"\u521D\u59CB\u5316\u8C03\u6574"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5D4C\u5957\u5B57\u6BB5\u8DEF\u5F84\u4F7F\u7528\u6570\u7EC4",title:"\u5D4C\u5957\u5B57\u6BB5\u8DEF\u5F84\u4F7F\u7528\u6570\u7EC4"},"\u5D4C\u5957\u5B57\u6BB5\u8DEF\u5F84\u4F7F\u7528\u6570\u7EC4"]],["li",["a",{className:"bisheng-toc-h2",href:"#validateFields-\u4E0D\u518D\u652F\u6301-callback",title:"validateFields \u4E0D\u518D\u652F\u6301 callback"},"validateFields \u4E0D\u518D\u652F\u6301 callback"]]]}}}]);
