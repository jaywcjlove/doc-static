(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{3128:function(a,b){a.exports={content:["section",["p","高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。"],["h2","何时使用"],["ul",["li",["p","用于创建一个实体或收集信息。"]],["li",["p","需要对输入的数据类型进行校验时。"]]]],meta:{category:"Components",subtitle:"表单",type:"数据录入",cols:1,title:"Form",cover:"https://gw.alipayobjects.com/zos/alicdn/ORmcdeaoO/Form.svg",filename:"components/form/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Form.Item",title:"Form.Item"},"Form.Item"]],["li",["a",{className:"bisheng-toc-h2",href:"#Form.List",title:"Form.List"},"Form.List"]],["li",["a",{className:"bisheng-toc-h2",href:"#operation",title:"operation"},"operation"]],["li",["a",{className:"bisheng-toc-h2",href:"#Form.Provider",title:"Form.Provider"},"Form.Provider"]],["li",["a",{className:"bisheng-toc-h2",href:"#从-v3-升级到-v4",title:"从 v3 升级到 v4"},"从 v3 升级到 v4"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["h3","Form"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","component"],["td","设置 Form 渲染元素，为 ",["code","false"]," 则不创建 DOM 节点"],["td","ComponentType ","|"," false"],["td","form"],["td"]],["tr",["td","colon"],["td","配置 Form.Item 的 ",["code","colon"]," 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效)"],["td","boolean"],["td","true"],["td"]],["tr",["td","fields"],["td","通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。查看",["a",{title:null,href:"#components-form-demo-global-state"},"示例"]],["td",["a",{title:null,href:"#FieldData"},"FieldData"],"[","]"],["td","-"],["td"]],["tr",["td","form"],["td","经 ",["code","Form.useForm()"]," 创建的 form 控制实例，不提供时会自动创建"],["td",["a",{title:null,href:"#FormInstance"},"FormInstance"]],["td","-"],["td"]],["tr",["td","hideRequiredMark"],["td","隐藏所有表单项的必选标记"],["td","boolean"],["td","false"],["td"]],["tr",["td","initialValues"],["td","表单默认值，只有初始化以及重置时生效"],["td","object"],["td","-"],["td"]],["tr",["td","labelAlign"],["td","label 标签的文本对齐方式"],["td",["code","left"]," ","|"," ",["code","right"]],["td",["code","right"]],["td"]],["tr",["td","labelCol"],["td","label 标签布局，同 ",["code","<Col>"]," 组件，设置 ",["code","span"]," ",["code","offset"]," 值，如 ",["code","{span: 3, offset: 12}"]," 或 ",["code","sm: {span: 3, offset: 12}"]],["td",["a",{title:null,href:"/components/grid/#Col"},"object"]],["td","-"],["td"]],["tr",["td","layout"],["td","表单布局"],["td",["code","horizontal"]," ","|"," ",["code","vertical"]," ","|"," ",["code","inline"]],["td",["code","horizontal"]],["td"]],["tr",["td","name"],["td","表单名称，会作为表单字段 ",["code","id"]," 前缀使用"],["td","string"],["td","-"],["td"]],["tr",["td","preserve"],["td","当字段被删除时保留字段值"],["td","boolean"],["td","true"],["td","4.4.0"]],["tr",["td","scrollToFirstError"],["td","提交失败自动滚动到第一个错误字段"],["td","boolean"],["td","false"],["td"]],["tr",["td","size"],["td","设置字段组件的尺寸（仅限 antd 组件）"],["td",["code","small"]," ","|"," ",["code","middle"]," ","|"," ",["code","large"]],["td","-"],["td"]],["tr",["td","validateMessages"],["td","验证提示模板，说明",["a",{title:null,href:"#validateMessages"},"见下"]],["td",["a",{title:null,href:"https://github.com/react-component/field-form/blob/master/src/utils/messages.ts"},"ValidateMessages"]],["td","-"],["td"]],["tr",["td","validateTrigger"],["td","统一设置字段校验规则"],["td","string ","|"," string[]"],["td",["code","onChange"]],["td","4.3.0"]],["tr",["td","wrapperCol"],["td","需要为输入控件设置布局样式时，使用该属性，用法同 labelCol"],["td",["a",{title:null,href:"/components/grid/#Col"},"object"]],["td","-"],["td"]],["tr",["td","onFinish"],["td","提交表单且数据验证成功后回调事件"],["td","function(values)"],["td","-"],["td"]],["tr",["td","onFinishFailed"],["td","提交表单且数据验证失败后回调事件"],["td","function({ values, errorFields, outOfDate })"],["td","-"],["td"]],["tr",["td","onFieldsChange"],["td","字段更新时触发回调事件"],["td","function(changedFields, allFields)"],["td","-"],["td"]],["tr",["td","onValuesChange"],["td","字段值更新时触发回调事件"],["td","function(changedValues, allValues)"],["td","-"],["td"]]]],["h3","validateMessages"],["p","Form 为验证提供了",["a",{title:null,href:"https://github.com/react-component/field-form/blob/master/src/utils/messages.ts"},"默认的错误提示信息"],"，你可以通过配置 ",["code","validateMessages"]," 属性，修改对应的提示模板。一种常见的使用方式，是配置国际化提示信息："],["pre",{lang:"jsx",highlighted:`<span class="token keyword">const</span> validateMessages <span class="token operator">=</span> <span class="token punctuation">{</span>
  required<span class="token punctuation">:</span> <span class="token string">"'\${name}' 是必选字段"</span><span class="token punctuation">,</span>
  <span class="token comment" spellcheck="true">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">validateMessages</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>validateMessages<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`},["code",`const validateMessages = {
  required: "'\${name}' 是必选字段",
  // ...
};

<Form validateMessages={validateMessages} />;`]],["p","此外，",["a",{title:null,href:"/components/config-provider/"},"ConfigProvider"]," 也提供了全局化配置方案，允许统一配置错误提示模板："],["pre",{lang:"jsx",highlighted:`<span class="token keyword">const</span> validateMessages <span class="token operator">=</span> <span class="token punctuation">{</span>
  required<span class="token punctuation">:</span> <span class="token string">"'\${name}' 是必选字段"</span><span class="token punctuation">,</span>
  <span class="token comment" spellcheck="true">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">form</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> validateMessages <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>`},["code",`const validateMessages = {
  required: "'\${name}' 是必选字段",
  // ...
};

<ConfigProvider form={{ validateMessages }}>
  <Form />
</ConfigProvider>;`]],["h2","Form.Item"],["p","表单字段组件，用于数据双向绑定、校验、布局等。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","colon"],["td","配合 ",["code","label"]," 属性使用，表示是否显示 ",["code","label"]," 后面的冒号"],["td","boolean"],["td","true"],["td"]],["tr",["td","dependencies"],["td","设置依赖字段，说明",["a",{title:null,href:"#dependencies"},"见下"]],["td",["a",{title:null,href:"#NamePath"},"NamePath"],"[]"],["td","-"],["td"]],["tr",["td","extra"],["td","额外的提示信息，和 ",["code","help"]," 类似，当需要错误信息和提示文案同时出现时，可以使用这个。"],["td","string ","|"," ReactNode"],["td","-"],["td"]],["tr",["td","getValueFromEvent"],["td","设置如何将 event 的值转换成字段值"],["td","(..args: any[]) => any"],["td","-"],["td"]],["tr",["td","getValueProps"],["td","为子元素添加额外的属性"],["td","(value: any) => any"],["td","-"],["td","4.2.0"]],["tr",["td","hasFeedback"],["td","配合 ",["code","validateStatus"]," 属性使用，展示校验状态图标，建议只配合 Input 组件使用"],["td","boolean"],["td","false"],["td"]],["tr",["td","help"],["td","提示信息，如不设置，则会根据校验规则自动生成"],["td","string ","|"," ReactNode"],["td","-"],["td"]],["tr",["td","htmlFor"],["td","设置子元素 label ",["code","htmlFor"]," 属性"],["td","string"],["td","-"],["td"]],["tr",["td","initialValue"],["td","设置子元素默认值，如果与 Form 的 ",["code","initialValues"]," 冲突则以 Form 为准"],["td","string"],["td","-"],["td","4.2.0"]],["tr",["td","noStyle"],["td","为 ",["code","true"]," 时不带样式，作为纯字段控件使用"],["td","boolean"],["td","false"],["td"]],["tr",["td","label"],["td",["code","label"]," 标签的文本"],["td","string ","|"," ReactNode"],["td","-"],["td"]],["tr",["td","labelAlign"],["td","标签文本对齐方式"],["td",["code","left"]," ","|"," ",["code","right"]],["td",["code","right"]],["td"]],["tr",["td","labelCol"],["td",["code","label"]," 标签布局，同 ",["code","<Col>"]," 组件，设置 ",["code","span"]," ",["code","offset"]," 值，如 ",["code","{span: 3, offset: 12}"]," 或 ",["code","sm: {span: 3, offset: 12}"],"。你可以通过 Form 的 ",["code","labelCol"]," 进行统一设置。当和 Form 同时设置时，以 Item 为准"],["td",["a",{title:null,href:"/components/grid/#Col"},"object"]],["td","-"],["td"]],["tr",["td","name"],["td","字段名，支持数组"],["td",["a",{title:null,href:"#NamePath"},"NamePath"]],["td","-"],["td"]],["tr",["td","preserve"],["td","当字段被删除时保留字段值"],["td","boolean"],["td","true"],["td","4.4.0"]],["tr",["td","normalize"],["td","组件获取值后进行转换，再放入 Form 中"],["td","(value, prevValue, prevValues) => any"],["td","-"],["td"]],["tr",["td","required"],["td","必填样式设置。如不设置，则会根据校验规则自动生成"],["td","boolean"],["td","false"],["td"]],["tr",["td","rules"],["td","校验规则，设置字段的校验逻辑。点击",["a",{title:null,href:"#components-form-demo-basic"},"此处"],"查看示例"],["td",["a",{title:null,href:"#Rule"},"Rule"],"[]"],["td","-"],["td"]],["tr",["td","shouldUpdate"],["td","自定义字段更新逻辑，说明",["a",{title:null,href:"#shouldUpdate"},"见下"]],["td","boolean ","|"," (prevValue, curValue) => boolean"],["td","false"],["td"]],["tr",["td","trigger"],["td","设置收集字段值变更的时机"],["td","string"],["td",["code","onChange"]],["td"]],["tr",["td","validateFirst"],["td","当某一规则校验不通过时，是否停止剩下的规则的校验。设置 ",["code","parallel"]," 时会并行校验"],["td","boolean ","|"," ",["code","parallel"]],["td","false"],["td",["code","parallel"],": 4.5.0"]],["tr",["td","validateStatus"],["td","校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'"],["td","string"],["td","-"],["td"]],["tr",["td","validateTrigger"],["td","设置字段校验的时机"],["td","string ","|"," string[]"],["td",["code","onChange"]],["td"]],["tr",["td","valuePropName"],["td","子节点的值的属性，如 Switch 的是 'checked'。该属性为 ",["code","getValueProps"]," 的封装，自定义 ",["code","getValueProps"]," 后会失效"],["td","string"],["td",["code","value"]],["td"]],["tr",["td","wrapperCol"],["td","需要为输入控件设置布局样式时，使用该属性，用法同 ",["code","labelCol"],"。你可以通过 Form 的 ",["code","wrapperCol"]," 进行统一设置。当和 Form 同时设置时，以 Item 为准"],["td",["a",{title:null,href:"/components/grid/#Col"},"object"]],["td","-"],["td"]],["tr",["td","hidden"],["td","是否隐藏字段（依然会收集和校验字段）"],["td","boolean"],["td","false"],["td"]]]],["p","被设置了 ",["code","name"]," 属性的 ",["code","Form.Item"]," 包装的控件，表单控件会自动添加 ",["code","value"],"（或 ",["code","valuePropName"]," 指定的其他属性） ",["code","onChange"],"（或 ",["code","trigger"]," 指定的其他属性），数据同步将被 Form 接管，这会导致以下结果："],["ol",["li",["p","你",["strong","不再需要也不应该"],"用 ",["code","onChange"]," 来做数据收集同步（你可以使用 Form 的 ",["code","onValuesChange"],"），但还是可以继续监听 ",["code","onChange"]," 事件。"]],["li",["p","你不能用控件的 ",["code","value"]," 或 ",["code","defaultValue"]," 等属性来设置表单域的值，默认值可以用 Form 里的 ",["code","initialValues"]," 来设置。注意 ",["code","initialValues"]," 不能被 ",["code","setState"]," 动态更新，你需要用 ",["code","setFieldsValue"]," 来更新。"]],["li",["p","你不应该用 ",["code","setState"],"，可以使用 ",["code","form.setFieldsValue"]," 来动态改变表单值。"]]],["h3","dependencies"],["p","当字段间存在依赖关系时使用。如果一个字段设置了 ",["code","dependencies"]," 属性。那么它所依赖的字段更新时，该字段将自动触发更新与校验。一种常见的场景，就是注册用户表单的“密码”与“确认密码”字段。“确认密码”校验依赖于“密码”字段，设置 ",["code","dependencies"]," 后，“密码”字段更新会重新触发“校验密码”的校验逻辑。你可以参考",["a",{title:null,href:"#components-form-demo-register"},"具体例子"],"。"],["p",["code","dependencies"]," 不应和 ",["code","shouldUpdate"]," 一起使用，因为这可能带来更新逻辑的混乱。"],["p","从 ",["code","4.5.0"]," 版本开始，",["code","dependencies"]," 支持使用 render props 类型 children 的 ",["code","Form.Item"],"。"],["h3","shouldUpdate"],["p","Form 通过增量更新方式，只更新被修改的字段相关组件以达到性能优化目的。大部分场景下，你只需要编写代码或者与 ",["a",{title:null,href:"#dependencies"},["code","dependencies"]]," 属性配合校验即可。而在某些特定场景，例如修改某个字段值后出现新的字段选项、或者纯粹希望表单任意变化都对某一个区域进行渲染。你可以通过 ",["code","shouldUpdate"]," 修改 Form.Item 的更新逻辑。"],["p","当 ",["code","shouldUpdate"]," 为 ",["code","true"]," 时，Form 的任意变化都会使该 Form.Item 重新渲染。这对于自定义渲染一些区域十分有帮助："],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">shouldUpdate</span><span class="token punctuation">></span></span>
  <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>form<span class="token punctuation">.</span><span class="token function">getFieldsValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>`},["code",`<Form.Item shouldUpdate>
  {() => {
    return <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>;
  }}
</Form.Item>`]],["p","你可以参考",["a",{title:null,href:"#components-form-demo-horizontal-login"},"示例"],"查看具体使用场景。"],["p","当 ",["code","shouldUpdate"]," 为方法时，表单的每次数值更新都会调用该方法，提供原先的值与当前的值以供你比较是否需要更新。这对于是否根据值来渲染额外字段十分有帮助："],["pre",{lang:"jsx",highlighted:`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">shouldUpdate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>prevValues<span class="token punctuation">,</span> curValues<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> prevValues<span class="token punctuation">.</span>additional <span class="token operator">!==</span> curValues<span class="token punctuation">.</span>additional<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form.Item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>other<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>`},["code",`<Form.Item shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}>
  {() => {
    return (
      <Form.Item name="other">
        <Input />
      </Form.Item>
    );
  }}
</Form.Item>`]],["p","你可以参考",["a",{title:null,href:"#components-form-demo-control-hooks"},"示例"],"查看具体使用场景。"],["h2","Form.List"],["p","为字段提供数组化管理。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","name"],["td","字段名，支持数组"],["td",["a",{title:null,href:"#NamePath"},"NamePath"]],["td","-"]],["tr",["td","children"],["td","渲染函数"],["td","(fields: Field[], operation: { add, remove, move }) => React.ReactNode"],["td","-"]]]],["pre",{lang:"tsx",highlighted:`<span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>List<span class="token operator">></span>
  {fields <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      {fields<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>field <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>field}<span class="token operator">></span>
          <span class="token operator">&lt;</span>Input <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span>}
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>}
  <span class="token number">1</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>List<span class="token operator">></span>`},["code",`<Form.List>
  {fields => (
    <div>
      {fields.map(field => (
        <Form.Item {...field}>
          <Input />
        </Form.Item>
      ))}
    </div>
  )}
  1
</Form.List>`]],["h2","operation"],["p","Form.List 渲染表单相关操作函数。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","add"],["td","新增表单项"],["td","(defaultValue?: any) => void"],["td","-"]],["tr",["td","remove"],["td","删除表单项"],["td","(index: number ","|"," number[]) => void"],["td","number[]: 4.5.0"]],["tr",["td","move"],["td","移动表单项"],["td","(from: number, to: number) => void"],["td","-"]]]],["h2","Form.Provider"],["p","提供表单间联动功能，其下设置 ",["code","name"]," 的 Form 更新时，会自动触发对应事件。查看",["a",{title:null,href:"#components-form-demo-form-context"},"示例"],"。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","onFormChange"],["td","子表单字段更新时触发"],["td","function(formName: string, info: { changedFields, forms })"],["td","-"]],["tr",["td","onFormFinish"],["td","子表单提交时触发"],["td","function(formName: string, info: { values, forms })"],["td","-"]]]],["pre",{lang:"jsx",highlighted:`<span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Provider
  onFormFinish<span class="token operator">=</span><span class="token punctuation">{</span>name <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">'form1'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment" spellcheck="true">// Do something...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Provider</span><span class="token punctuation">></span></span>`},["code",`<Form.Provider
  onFormFinish={name => {
    if (name === 'form1') {
      // Do something...
    }
  }}
>
  <Form name="form1">...</Form>
  <Form name="form2">...</Form>
</Form.Provider>`]],["h3","FormInstance"],["table",["thead",["tr",["th","名称"],["th","说明"],["th","类型"],["th","版本"]]],["tbody",["tr",["td","getFieldInstance"],["td","获取对应字段实例"],["td","(name: ",["a",{title:null,href:"#NamePath"},"NamePath"],") => any"],["td","4.4.0"]],["tr",["td","getFieldValue"],["td","获取对应字段名的值"],["td","(name: ",["a",{title:null,href:"#NamePath"},"NamePath"],") => any"],["td"]],["tr",["td","getFieldsValue"],["td","获取一组字段名对应的值，会按照对应结构返回"],["td","(nameList?: ",["a",{title:null,href:"#NamePath"},"NamePath"],"[], filterFunc?: (meta: { touched: boolean, validating: boolean }) => boolean) => any"],["td"]],["tr",["td","getFieldError"],["td","获取对应字段名的错误信息"],["td","(name: ",["a",{title:null,href:"#NamePath"},"NamePath"],") => string[]"],["td"]],["tr",["td","getFieldsError"],["td","获取一组字段名对应的错误信息，返回为数组形式"],["td","(nameList?: ",["a",{title:null,href:"#NamePath"},"NamePath"],"[]) => FieldError[]"],["td"]],["tr",["td","isFieldTouched"],["td","检查对应字段是否被用户操作过"],["td","(name: ",["a",{title:null,href:"#NamePath"},"NamePath"],") => boolean"],["td"]],["tr",["td","isFieldsTouched"],["td","检查一组字段是否被用户操作过，",["code","allTouched"]," 为 ",["code","true"]," 时检查是否所有字段都被操作过"],["td","(nameList?: ",["a",{title:null,href:"#NamePath"},"NamePath"],"[], allTouched?: boolean) => boolean"],["td"]],["tr",["td","isFieldValidating"],["td","检查一组字段是否正在校验"],["td","(name: ",["a",{title:null,href:"#NamePath"},"NamePath"],") => boolean"],["td"]],["tr",["td","resetFields"],["td","重置一组字段到 ",["code","initialValues"]],["td","(fields?: ",["a",{title:null,href:"#NamePath"},"NamePath"],"[]) => void"],["td"]],["tr",["td","scrollToField"],["td","滚动到对应字段位置"],["td","(name: ",["a",{title:null,href:"#NamePath"},"NamePath"],", options: [",["a",{title:null,href:"https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options"},"ScrollOptions"],"]) => void"],["td"]],["tr",["td","setFields"],["td","设置一组字段状态"],["td","(fields: ",["a",{title:null,href:"#FieldData"},"FieldData"],"[]) => void"],["td"]],["tr",["td","setFieldsValue"],["td","设置表单的值"],["td","(values) => void"],["td"]],["tr",["td","submit"],["td","提交表单，与点击 ",["code","submit"]," 按钮效果相同"],["td","() => void"],["td"]],["tr",["td","validateFields"],["td","触发表单验证"],["td","(nameList?: ",["a",{title:null,href:"#NamePath"},"NamePath"],"[]) => Promise"],["td"]]]],["h4","validateFields 返回示例"],["pre",{lang:"jsx",highlighted:`<span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>values <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token comment" spellcheck="true">/*
  values:
    {
      username: 'username',
      password: 'password',
    }
  */</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span>errorInfo <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token comment" spellcheck="true">/*
    errorInfo:
      {
        values: {
          username: 'username',
          password: 'password',
        },
        errorFields: [
          { password: ['username'], errors: ['Please input your Password!'] },
        ],
        outOfDate: false,
      }
    */</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`validateFields()
  .then(values => {
    /*
  values:
    {
      username: 'username',
      password: 'password',
    }
  */
  })
  .catch(errorInfo => {
    /*
    errorInfo:
      {
        values: {
          username: 'username',
          password: 'password',
        },
        errorFields: [
          { password: ['username'], errors: ['Please input your Password!'] },
        ],
        outOfDate: false,
      }
    */
  });`]],["h3","Interface"],["h4","NamePath"],["p",["code","string | number | (string | number)[]"]],["h4","FieldData"],["table",["thead",["tr",["th","名称"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","touched"],["td","是否被用户操作过"],["td","boolean"]],["tr",["td","validating"],["td","是否正在校验"],["td","boolean"]],["tr",["td","errors"],["td","错误信息"],["td","string[]"]],["tr",["td","name"],["td","字段名称"],["td",["a",{title:null,href:"#NamePath"},"NamePath"],"[]"]],["tr",["td","value"],["td","字段对应值"],["td","any"]]]],["h4","Rule"],["p","Rule 支持接收 object 进行配置，也支持 function 来动态获取 form 的数据："],["pre",{lang:"tsx",highlighted:'type Rule <span class="token operator">=</span> RuleConfig | <span class="token punctuation">(</span><span class="token punctuation">(</span>form<span class="token punctuation">:</span> FormInstance<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> RuleConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","type Rule = RuleConfig | ((form: FormInstance) => RuleConfig);"]],["table",["thead",["tr",["th","名称"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","enum"],["td","是否匹配枚举中的值"],["td","any[]"]],["tr",["td","len"],["td","string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度"],["td","number"]],["tr",["td","max"],["td","必须设置 ",["code","type"],"：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度"],["td","number"]],["tr",["td","message"],["td","错误信息，不设置时会通过",["a",{title:null,href:"#validateMessages"},"模板"],"自动生成"],["td","string"]],["tr",["td","min"],["td","必须设置 ",["code","type"],"：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度"],["td","number"]],["tr",["td","pattern"],["td","正则表达式匹配"],["td","RegExp"]],["tr",["td","required"],["td","是否为必选字段"],["td","boolean"]],["tr",["td","transform"],["td","将字段值转换成目标值后进行校验"],["td","(value) => any"]],["tr",["td","type"],["td","类型，常见有 ",["code","string"]," ","|",["code","number"]," ","|",["code","boolean"]," ","|",["code","url"]," ","|"," ",["code","email"],"。更多请参考",["a",{title:null,href:"https://github.com/yiminghe/async-validator#type"},"此处"]],["td","string"]],["tr",["td","validator"],["td","自定义校验，接收 Promise 作为返回值。",["a",{title:null,href:"#components-form-demo-register"},"示例"],"参考"],["td","(",["a",{title:null,href:"#Rule"},"rule"],", value) => Promise"]],["tr",["td","whitespace"],["td","如果字段仅包含空格则校验不通过"],["td","boolean"]],["tr",["td","validateTrigger"],["td","设置触发验证时机，必须是 Form.Item 的 ",["code","validateTrigger"]," 的子集"],["td","string ","|"," string[]"]]]],["h2","从 v3 升级到 v4"],["p","如果你是 antd v3 的用户，你可以参考",["a",{title:null,href:"/components/form/v3"},"迁移示例"],"。"],["style",`
.code-box-demo .ant-form:not(.ant-form-inline):not(.ant-form-vertical) {
  max-width: 600px;
}
.markdown.api-container table td:nth-of-type(4) {
  white-space: nowrap;
  word-wrap: break-word;
}
`],["h2","FAQ"],["h3","自定义 validator 没有效果"],["p","这是由于你的 ",["code","validator"]," 有错误导致 ",["code","callback"]," 没有执行到。你可以选择通过 ",["code","async"]," 返回一个 promise 或者使用 ",["code","try...catch"]," 进行错误捕获："],["pre",{lang:"jsx",highlighted:`validator<span class="token punctuation">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>rule<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Something wrong!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment" spellcheck="true">// or</span>

<span class="token function">validator</span><span class="token punctuation">(</span>rule<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Something wrong!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>`},["code",`validator: async (rule, value) => {
  throw new Error('Something wrong!');
}

// or

validator(rule, value, callback) => {
  try {
    throw new Error('Something wrong!');
  } catch (err) {
    callback(err);
  }
}`]],["h3","name 为数组时的转换规则？"],["p","当 ",["code","name"]," 为数组时，会按照顺序填充路径。当存在数字且 form store 中没有该字段时会自动转变成数组。因而如果需要数组为 key 时请使用 string 如：",["code","['1', 'name']"],"。"],["h3","为何在 Modal 中调用 form 控制台会报错？"],["blockquote",["p","Warning: Instance created by ",["code","useForm"]," is not connect to any Form element. Forget to pass ",["code","form"]," prop?"]],["p","这是因为你在调用 form 方法时，Modal 还未初始化导致 form 没有关联任何 Form 组件。你可以通过给 Modal 设置 ",["code","forceRender"]," 将其预渲染。示例点击",["a",{title:null,href:"https://codesandbox.io/s/antd-reproduction-template-ibu5c"},"此处"],"。"],["h3","为什么 Form.Item 下的子组件 ",["code","defaultValue"]," 不生效？"],["p","当你为 Form.Item 设置 ",["code","name"]," 属性后，子组件会转为受控模式。因而 ",["code","defaultValue"]," 不会生效。你需要在 Form 上通过 ",["code","initialValues"]," 设置默认值。"],["h3","为什么 ",["code","resetFields"]," 会重新 mount 组件？"],["p",["code","resetFields"]," 会重置整个 Field，因而其子组件也会重新 mount 从而消除自定义组件可能存在的副作用（例如异步数据、状态等等）。"],["h3","Form 的 initialValues 与 Item 的 initialValue 区别？"],["p","在大部分场景下，我们总是推荐优先使用 Form 的 ",["code","initialValues"],"。只有存在动态字段时你才应该使用 Item 的 ",["code","initialValue"],"。默认值遵循以下规则："],["ol",["li",["p","Form 的 ",["code","initialValues"]," 拥有最高优先级"]],["li",["p","Field 的 ",["code","initialValue"]," 次之 ","*",". 多个同 ",["code","name"]," Item 都设置 ",["code","initialValue"]," 时，则 Item 的 ",["code","initialValue"]," 不生效"]]],["h3","为什么字段设置 ",["code","rules"]," 后更改值 ",["code","onFieldsChange"]," 会触发三次？"],["p","字段除了本身的值变化外，校验也是其状态之一。因而在触发字段变化会经历以下几个阶段："],["ol",["li",["p","Trigger value change"]],["li",["p","Rule validating"]],["li",["p","Rule validated"]]],["p","在触发过程中，调用 ",["code","isFieldValidating"]," 会经历 ",["code","false"]," > ",["code","true"]," > ",["code","false"]," 的变化过程。"],["style",`
  .site-form-item-icon {
    color: rgba(0, 0, 0, 0.25);
  }
  [data-theme="dark"] .site-form-item-icon {
    color: rgba(255,255,255,.3);
  }
`]]}}}]);
