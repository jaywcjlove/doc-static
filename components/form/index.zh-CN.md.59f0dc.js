(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1573:function(n,t){n.exports={content:["section",["p","具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。"],["h2","何时使用"],["ul",["li",["p","用于创建一个实体或收集信息。"]],["li",["p","需要对输入的数据类型进行校验时。"]]],["h2","表单"],["p","我们为 ",["code","form"]," 提供了以下三种排列方式："],["ul",["li",["p","水平排列：标签和表单控件水平排列；（默认）"]],["li",["p","垂直排列：标签和表单控件上下垂直排列；"]],["li",["p","行内排列：表单项水平行内排列。"]]],["h2","表单域"],["p","表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。"],["p","这里我们封装了表单域 ",["code","<Form.Item />"]," 。"],["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form.Item</span><span class="token punctuation">></span></span>'},["code","<Form.Item {...props}>{children}</Form.Item>"]]],meta:{category:"Components",subtitle:"表单",type:"数据录入",cols:1,title:"Form",filename:"components/form/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#表单",title:"表单"},"表单"]],["li",["a",{className:"bisheng-toc-h2",href:"#表单域",title:"表单域"},"表单域"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#在-TypeScript-中使用",title:"在 TypeScript 中使用"},"在 TypeScript 中使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["h3","Form"],["p",["strong","更多示例参考 ",["a",{title:null,href:"http://react-component.github.io/form/"},"rc-form"]],"。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","form"],["td","经 ",["code","Form.create()"]," 包装过的组件会自带 ",["code","this.props.form"]," 属性"],["td","object"],["td","-"],["td"]],["tr",["td","hideRequiredMark"],["td","隐藏所有表单项的必选标记"],["td","Boolean"],["td","false"],["td"]],["tr",["td","labelAlign"],["td","label 标签的文本对齐方式"],["td","'left' ","|"," 'right'"],["td","'right'"],["td","3.15.0"]],["tr",["td","labelCol"],["td","（3.14.0 新增，之前的版本只能设置到 FormItem 上。）label 标签布局，同 ",["code","<Col>"]," 组件，设置 ",["code","span"]," ",["code","offset"]," 值，如 ",["code","{span: 3, offset: 12}"]," 或 ",["code","sm: {span: 3, offset: 12}"]],["td",["a",{title:null,href:"https://ant.design/components/grid/#Col"},"object"]],["td"],["td","3.14.0"]],["tr",["td","layout"],["td","表单布局"],["td","'horizontal'","|","'vertical'","|","'inline'"],["td","'horizontal'"],["td"]],["tr",["td","onSubmit"],["td","数据验证成功后回调事件"],["td","Function(e:Event)"],["td"],["td"]],["tr",["td","wrapperCol"],["td","（3.14.0 新增，之前的版本只能设置到 FormItem 上。）需要为输入控件设置布局样式时，使用该属性，用法同 labelCol"],["td",["a",{title:null,href:"https://ant.design/components/grid-cn/#Col"},"object"]],["td"],["td","3.14.0"]],["tr",["td","colon"],["td","配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效)"],["td","boolean"],["td","true"],["td","3.15.0"]]]],["h3","Form.create(options)"],["p","使用方式如下："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">class</span> <span class="token class-name">CustomizedForm</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\nCustomizedForm <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>CustomizedForm<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","class CustomizedForm extends React.Component {}\n\nCustomizedForm = Form.create({})(CustomizedForm);"]],["p",["code","options"]," 的配置项如下。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","版本"]]],["tbody",["tr",["td","mapPropsToFields"],["td","把父组件的属性映射到表单项上（如：把 Redux store 中的值读出），需要对返回值中的表单域数据用 ",["a",{title:null,href:"#Form.createFormField"},["code","Form.createFormField"]]," 标记，注意表单项将变成受控组件, error 等也需要一并手动传入"],["td","(props) => ({ ","[","fieldName","]",": FormField { value } })"],["td"]],["tr",["td","name"],["td","设置表单域内字段 id 的前缀"],["td","-"],["td","3.12.0"]],["tr",["td","validateMessages"],["td","默认校验信息，可用于把默认错误信息改为中文等，格式与 ",["a",{title:null,href:"https://github.com/yiminghe/async-validator/blob/master/src/messages.js"},"newMessages"]," 返回值一致"],["td","Object { ","[","nested.path]: String }"],["td"]],["tr",["td","onFieldsChange"],["td","当 ",["code","Form.Item"]," 子节点的值（包括 error）发生改变时触发，可以把对应的值转存到 Redux store"],["td","Function(props, changedFields, allFields)"],["td"]],["tr",["td","onValuesChange"],["td","任一表单域的值发生改变时的回调"],["td","(props, changedValues, allValues) => void"],["td"]]]],["p","经过 ",["code","Form.create"]," 之后如果要拿到 ",["code","ref"],"，可以使用 ",["code","rc-form"]," 提供的 ",["code","wrappedComponentRef"],"，",["a",{title:null,href:"https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140"},"详细内容可以查看这里"],"。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">class</span> <span class="token class-name">CustomizedForm</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// use wrappedComponentRef</span>\n<span class="token keyword">const</span> EnhancedForm <span class="token operator">=</span>  Form<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>CustomizedForm<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>EnhancedForm</span> <span class="token attr-name">wrappedComponentRef</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>form <span class="token operator">=</span> form<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>form <span class="token comment" spellcheck="true">// => The instance of CustomizedForm</span>'},["code","class CustomizedForm extends React.Component { ... }\n\n// use wrappedComponentRef\nconst EnhancedForm =  Form.create()(CustomizedForm);\n<EnhancedForm wrappedComponentRef={(form) => this.form = form} />\nthis.form // => The instance of CustomizedForm"]],["p","经过 ",["code","Form.create"]," 包装的组件将会自带 ",["code","this.props.form"]," 属性，",["code","this.props.form"]," 提供的 API 如下："],["blockquote",["p","注意：使用 ",["code","getFieldsValue"]," ",["code","getFieldValue"]," ",["code","setFieldsValue"]," 等时，应确保对应的 field 已经用 ",["code","getFieldDecorator"]," 注册过了。"]],["table",["thead",["tr",["th","方法"],["th","说明"],["th","类型"],["th","版本"]]],["tbody",["tr",["td","getFieldDecorator"],["td","用于和表单进行双向绑定，详见下方描述"],["td"],["td"]],["tr",["td","getFieldError"],["td","获取某个输入控件的 Error"],["td","Function(name)"],["td"]],["tr",["td","getFieldsError"],["td","获取一组输入控件的 Error ，如不传入参数，则获取全部组件的 Error"],["td","Function(","[","names: string","[","]])"],["td"]],["tr",["td","getFieldsValue"],["td","获取一组输入控件的值，如不传入参数，则获取全部组件的值"],["td","Function(","[","fieldNames: string","[","]])"],["td"]],["tr",["td","getFieldValue"],["td","获取一个输入控件的值"],["td","Function(fieldName: string)"],["td"]],["tr",["td","isFieldsTouched"],["td","判断是否任一输入控件经历过 ",["code","getFieldDecorator"]," 的值收集时机 ",["code","options.trigger"]],["td","(names?: string","[","]) => boolean"],["td"]],["tr",["td","isFieldTouched"],["td","判断一个输入控件是否经历过 ",["code","getFieldDecorator"]," 的值收集时机 ",["code","options.trigger"]],["td","(name: string) => boolean"],["td"]],["tr",["td","isFieldValidating"],["td","判断一个输入控件是否在校验状态"],["td","Function(name)"],["td"]],["tr",["td","resetFields"],["td","重置一组输入控件的值（为 ",["code","initialValue"],"）与状态，如不传入参数，则重置所有组件"],["td","Function(","[","names: string","[","]])"],["td"]],["tr",["td","setFields"],["td","设置一组输入控件的值与错误状态：",["a",{title:null,href:"https://github.com/react-component/form/blob/3b9959b57ab30b41d8890ff30c79a7e7c383cad3/examples/server-validate.js#L74-L79"},"代码"]],["td","({",["br"]," "," ","[","fieldName","]",": {value: any, errors: ","[","Error","]"," }",["br"],"}) => void"],["td"]],["tr",["td","setFieldsValue"],["td","设置一组输入控件的值（注意：不要在 ",["code","componentWillReceiveProps"]," 内使用，否则会导致死循环，",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/2985"},"原因"],"）"],["td","(",["br"]," "," ","{ ","[","fieldName","]",":"," value },",["br"]," "," ","callback: Function",["br"],") => void"],["td"]],["tr",["td","validateFields"],["td","校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件"],["td","(",["br"]," "," ","[","fieldNames: string","[","]],",["br"]," "," ","[","options: object","]",",",["br"]," "," ","callback(errors, values)",["br"],") => void"],["td"]],["tr",["td","validateFieldsAndScroll"],["td","与 ",["code","validateFields"]," 相似，但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围"],["td","参考 ",["code","validateFields"]],["td"]]]],["h3","validateFields/validateFieldsAndScroll"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">{</span>\n  form<span class="token punctuation">:</span> <span class="token punctuation">{</span> validateFields <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n<span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">(</span>errors<span class="token punctuation">,</span> values<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'field1\'</span><span class="token punctuation">,</span> <span class="token string">\'field2\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>errors<span class="token punctuation">,</span> values<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">validateFields</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'field1\'</span><span class="token punctuation">,</span> <span class="token string">\'field2\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token punctuation">(</span>errors<span class="token punctuation">,</span> values<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","const {\n  form: { validateFields },\n} = this.props;\nvalidateFields((errors, values) => {\n  // ...\n});\nvalidateFields(['field1', 'field2'], (errors, values) => {\n  // ...\n});\nvalidateFields(['field1', 'field2'], options, (errors, values) => {\n  // ...\n});"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","options.first"],["td","若为 true，则每一表单域的都会在碰到第一个失败了的校验规则后停止校验"],["td","boolean"],["td","false"],["td","3.9.3"]],["tr",["td","options.firstFields"],["td","指定表单域会在碰到第一个失败了的校验规则后停止校验"],["td","String","[","]"],["td","[","]"],["td","3.9.3"]],["tr",["td","options.force"],["td","对已经校验过的表单域，在 validateTrigger 再次被触发时是否再次校验"],["td","boolean"],["td","false"],["td","3.9.3"]],["tr",["td","options.scroll"],["td","定义 validateFieldsAndScroll 的滚动行为，详细配置见 ",["a",{title:null,href:"https://github.com/yiminghe/dom-scroll-into-view#function-parameter"},"dom-scroll-into-view config"]],["td","Object"],["td","{}"],["td","3.9.3"]]]],["h4","validateFields 的 callback 参数示例"],["ul",["li",["p",["code","errors"],":"],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n  <span class="token string">"username"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"errors"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"Please input your username!"</span><span class="token punctuation">,</span>\n        <span class="token string">"field"</span><span class="token punctuation">:</span> <span class="token string">"username"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">"password"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"errors"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"Please input your Password!"</span><span class="token punctuation">,</span>\n        <span class="token string">"field"</span><span class="token punctuation">:</span> <span class="token string">"password"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code",'{\n  "username": {\n    "errors": [\n      {\n        "message": "Please input your username!",\n        "field": "username"\n      }\n    ]\n  },\n  "password": {\n    "errors": [\n      {\n        "message": "Please input your Password!",\n        "field": "password"\n      }\n    ]\n  }\n}']]],["li",["p",["code","values"],":"],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n  <span class="token string">"username"</span><span class="token punctuation">:</span> <span class="token string">"username"</span><span class="token punctuation">,</span>\n  <span class="token string">"password"</span><span class="token punctuation">:</span> <span class="token string">"password"</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code",'{\n  "username": "username",\n  "password": "password",\n}']]]],["h3","Form.createFormField"],["p","用于标记 ",["code","mapPropsToFields"]," 返回的表单域数据，",["a",{title:null,href:"#components-form-demo-global-state"},"例子"],"。"],["h3","this.props.form.getFieldDecorator(id, options)"],["p","经过 ",["code","getFieldDecorator"]," 包装的控件，表单控件会自动添加 ",["code","value"],"（或 ",["code","valuePropName"]," 指定的其他属性） ",["code","onChange"],"（或 ",["code","trigger"]," 指定的其他属性），数据同步将被 Form 接管，这会导致以下结果："],["ol",["li",["p","你",["strong","不再需要也不应该"],"用 ",["code","onChange"]," 来做同步，但还是可以继续监听 ",["code","onChange"]," 等事件。"]],["li",["p","你不能用控件的 ",["code","value"]," ",["code","defaultValue"]," 等属性来设置表单域的值，默认值可以用 ",["code","getFieldDecorator"]," 里的 ",["code","initialValue"],"。"]],["li",["p","你不应该用 ",["code","setState"],"，可以使用 ",["code","this.props.form.setFieldsValue"]," 来动态改变表单值。"]]],["h4","特别注意"],["p","如果使用的是 ",["code","react@<15.3.0"],"，则 ",["code","getFieldDecorator"]," 调用不能位于纯函数组件中: ",["a",{title:null,href:"https://github.com/facebook/react/pull/6534"},"https://github.com/facebook/react/pull/6534"]],["h4","getFieldDecorator(id, options) 参数"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","id"],["td","必填输入控件唯一标志。支持嵌套式的",["a",{title:null,href:"https://github.com/react-component/form/pull/48"},"写法"],"。"],["td","string"],["td"],["td"]],["tr",["td","options.getValueFromEvent"],["td","可以把 onChange 的参数（如 event）转化为控件的值"],["td","function(..args)"],["td",["a",{title:null,href:"https://github.com/react-component/form#option-object"},"reference"]],["td"]],["tr",["td","options.initialValue"],["td","子节点的初始值，类型、可选值均由子节点决定(",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/4093"},"注意：由于内部校验时使用 ",["code","==="]," 判断是否变化，建议使用变量缓存所需设置的值而非直接使用字面量"],")"],["td"],["td"],["td"]],["tr",["td","options.normalize"],["td","转换默认的 value 给控件，",["a",{title:null,href:"https://codepen.io/afc163/pen/JJVXzG?editors=001"},"一个选择全部的例子"]],["td","function(value, prevValue, allValues): any"],["td","-"],["td"]],["tr",["td","options.preserve"],["td","即便字段不再使用，也保留该字段的值"],["td","boolean"],["td","-"],["td","3.12.0"]],["tr",["td","options.rules"],["td","校验规则，参考下方文档"],["td","object","[","]"],["td"],["td"]],["tr",["td","options.trigger"],["td","收集子节点的值的时机"],["td","string"],["td","'onChange'"],["td"]],["tr",["td","options.validateFirst"],["td","当某一规则校验不通过时，是否停止剩下的规则的校验"],["td","boolean"],["td","false"],["td"]],["tr",["td","options.validateTrigger"],["td","校验子节点值的时机"],["td","string","|","string","[","]"],["td","'onChange'"],["td"]],["tr",["td","options.valuePropName"],["td","子节点的值的属性，如 Switch 的是 'checked'"],["td","string"],["td","'value'"],["td"]]]],["p","更多参数请查看 ",["a",{title:null,href:"https://github.com/react-component/form#option-object"},"rc-form option"],"。"],["h3","Form.Item"],["p","注意：一个 Form.Item 建议只放一个被 getFieldDecorator 装饰过的 child，当有多个被装饰过的 child 时，",["code","help"]," ",["code","required"]," ",["code","validateStatus"]," 无法自动生成。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","colon"],["td","配合 label 属性使用，表示是否显示 label 后面的冒号"],["td","boolean"],["td","true"],["td"]],["tr",["td","extra"],["td","额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。"],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","hasFeedback"],["td","配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用"],["td","boolean"],["td","false"],["td"]],["tr",["td","help"],["td","提示信息，如不设置，则会根据校验规则自动生成"],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","htmlFor"],["td","设置子元素 label ",["code","htmlFor"]," 属性"],["td","string"],["td"],["td","3.17.0"]],["tr",["td","label"],["td","label 标签的文本"],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","labelCol"],["td","label 标签布局，同 ",["code","<Col>"]," 组件，设置 ",["code","span"]," ",["code","offset"]," 值，如 ",["code","{span: 3, offset: 12}"]," 或 ",["code","sm: {span: 3, offset: 12}"],"。在 3.14.0 之后，你可以通过 Form 的 labelCol 进行统一设置。当和 Form 同时设置时，以 FormItem 为准。"],["td",["a",{title:null,href:"https://ant.design/components/grid/#Col"},"object"]],["td"],["td"]],["tr",["td","labelAlign"],["td","标签文本对齐方式"],["td","'left' ","|"," 'right'"],["td","'right'"],["td","3.15.0"]],["tr",["td","required"],["td","是否必填，如不设置，则会根据校验规则自动生成"],["td","boolean"],["td","false"],["td"]],["tr",["td","validateStatus"],["td","校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'"],["td","string"],["td"],["td"]],["tr",["td","wrapperCol"],["td","需要为输入控件设置布局样式时，使用该属性，用法同 labelCol。在 3.14.0 之后，你可以通过 Form 的 wrapperCol 进行统一设置。当和 Form 同时设置时，以 FormItem 为准。"],["td",["a",{title:null,href:"https://ant.design/components/grid/#Col"},"object"]],["td"],["td"]]]],["h3","校验规则"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","enum"],["td","枚举类型"],["td","string"],["td","-"],["td"]],["tr",["td","len"],["td","字段长度"],["td","number"],["td","-"],["td"]],["tr",["td","max"],["td","最大长度"],["td","number"],["td","-"],["td"]],["tr",["td","message"],["td","校验文案"],["td","string","|","ReactNode"],["td","-"],["td"]],["tr",["td","min"],["td","最小长度"],["td","number"],["td","-"],["td"]],["tr",["td","pattern"],["td","正则表达式校验"],["td","RegExp"],["td","-"],["td"]],["tr",["td","required"],["td","是否必选"],["td","boolean"],["td",["code","false"]],["td"]],["tr",["td","transform"],["td","校验前转换字段值"],["td","function(value) => transformedValue:any"],["td","-"],["td"]],["tr",["td","type"],["td","内建校验类型，",["a",{title:null,href:"https://github.com/yiminghe/async-validator#type"},"可选项"]],["td","string"],["td","'string'"],["td"]],["tr",["td","validator"],["td","自定义校验（注意，",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/5155"},"callback 必须被调用"],"）"],["td","function(rule, value, callback)"],["td","-"],["td"]],["tr",["td","whitespace"],["td","必选时，空格是否会被视为错误"],["td","boolean"],["td",["code","false"]],["td"]]]],["p","更多高级用法可研究 ",["a",{title:null,href:"https://github.com/yiminghe/async-validator"},"async-validator"],"。"],["h2","在 TypeScript 中使用"],["pre",{lang:"tsx",highlighted:'import { Form } from <span class="token string">\'antd\'</span><span class="token comment" spellcheck="true">;</span>\nimport { FormComponentProps } from <span class="token string">\'antd/es/form\'</span><span class="token comment" spellcheck="true">;</span>\n\ninterface UserFormProps extends FormComponentProps {\n  age<span class="token punctuation">:</span> number<span class="token comment" spellcheck="true">;</span>\n  name<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>\n}\n\nclass UserForm extends React<span class="token punctuation">.</span>Component<span class="token operator">&lt;</span>UserFormProps<span class="token punctuation">,</span> any<span class="token operator">></span> {\n  <span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n}\n\n<span class="token keyword">const</span> App <span class="token operator">=</span> Form<span class="token punctuation">.</span>create<span class="token operator">&lt;</span>UserFormProps<span class="token operator">></span><span class="token punctuation">(</span>{\n  <span class="token operator">/</span><span class="token operator">/</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n}<span class="token punctuation">)</span><span class="token punctuation">(</span>UserForm<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","import { Form } from 'antd';\nimport { FormComponentProps } from 'antd/es/form';\n\ninterface UserFormProps extends FormComponentProps {\n  age: number;\n  name: string;\n}\n\nclass UserForm extends React.Component<UserFormProps, any> {\n  // ...\n}\n\nconst App = Form.create<UserFormProps>({\n  // ...\n})(UserForm);"]],["style","\n.code-box-demo .ant-form:not(.ant-form-inline):not(.ant-form-vertical) {\n  max-width: 600px;\n}\n.markdown.api-container table td:last-child {\n  white-space: nowrap;\n  word-wrap: break-word;\n}\n"],["h2","FAQ"],["h3","自定义 validator 没有效果"],["p","这是由于你的 ",["code","validator"]," 有错误导致 ",["code","callback"]," 没有执行到。你可以选择通过 ",["code","async"]," 返回一个 promise 或者使用 ",["code","try...catch"]," 进行错误捕获："],["pre",{lang:"jsx",highlighted:'validator<span class="token punctuation">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>rule<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Something wrong!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// or</span>\n\n<span class="token function">validator</span><span class="token punctuation">(</span>rule<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Something wrong!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">callback</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","validator: async (rule, value) => {\n  throw new Error('Something wrong!');\n}\n\n// or\n\nvalidator(rule, value, callback) => {\n  try {\n    throw new Error('Something wrong!');\n  } catch (err) {\n    callback(err);\n  }\n}"]],["h3","如何在函数组件中拿到 form 实例？"],["p","你需要通过 ",["code","forwardRef"]," 和 ",["code","useImperativeHandle"]," 的组合使用来实现在函数组件中正确拿到 form 实例："],["pre",{lang:"tsx",highlighted:'import React<span class="token punctuation">,</span> { forwardRef<span class="token punctuation">,</span> useImperativeHandle } from <span class="token string">\'react\'</span><span class="token comment" spellcheck="true">;</span>\nimport Form<span class="token punctuation">,</span> { FormComponentProps } from <span class="token string">\'antd/lib/form/Form\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token keyword">const</span> FCForm <span class="token operator">=</span> forwardRef<span class="token operator">&lt;</span>FormComponentProps<span class="token punctuation">,</span> FCFormProps<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span>{ form<span class="token punctuation">,</span> onSubmit }<span class="token punctuation">,</span> ref<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  <span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{\n    form<span class="token punctuation">,</span>\n  }<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  `<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>the rest of your form`<span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n<span class="token keyword">const</span> EnhancedFCForm <span class="token operator">=</span> Form<span class="token punctuation">.</span>create<span class="token operator">&lt;</span>FCFormProps<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>FCForm<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","import React, { forwardRef, useImperativeHandle } from 'react';\nimport Form, { FormComponentProps } from 'antd/lib/form/Form';\n\nconst FCForm = forwardRef<FormComponentProps, FCFormProps>(({ form, onSubmit }, ref) => {\n  useImperativeHandle(ref, () => ({\n    form,\n  }));\n  `...the rest of your form`;\n});\nconst EnhancedFCForm = Form.create<FCFormProps>()(FCForm);"]],["p","使用表单组件可以写成这样："],["pre",{lang:"tsx",highlighted:'<span class="token keyword">const</span> TestForm <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  <span class="token keyword">const</span> formRef <span class="token operator">=</span> createRef<span class="token operator">&lt;</span>Ref<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  return <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>EnhancedFCForm\n      onSubmit<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>formRef<span class="token punctuation">.</span>current!<span class="token punctuation">.</span>form<span class="token punctuation">.</span><span class="token function">getFieldValue</span><span class="token punctuation">(</span><span class="token string">\'name\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>}\n      wrappedComponentRef<span class="token operator">=</span>{formRef}\n    <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token comment" spellcheck="true">;</span>'},["code","const TestForm = () => {\n  const formRef = createRef<Ref>();\n  return (\n    <EnhancedFCForm\n      onSubmit={() => console.log(formRef.current!.form.getFieldValue('name'))}\n      wrappedComponentRef={formRef}\n    />\n  );\n};"]],["p","在线示例："],["p",["a",{title:null,href:"https://codesandbox.io/s/wrappedcomponentref-in-function-component-fj43c?fontsize=14&hidenavigation=1&theme=dark"},["img",{title:null,src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wrappedComponentRef-in-function-component"}]]]]}}}]);