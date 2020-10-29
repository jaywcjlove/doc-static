(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{3274:function(e,n){e.exports={content:["article",["p","This document will help you upgrade from antd ",["code","3.x"]," version to antd ",["code","4.x"]," version. If you are using ",["code","2.x"]," or older version, please refer to the previous ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/2adf8ced24da7b3cb46a3475854a83d76a98c536/CHANGELOG.en-US.md#300"},"upgrade document"]," to 3.x."],["h2","Upgrade preparation"],["ol",["li",["p","Please upgrade to the latest version of 3.x first, and remove / modify related APIs according to the console warning message."]],["li",["p","Upgrade project React 16.12.0 or above."],["ul",["li",["p","If you are still using React 15, please refer to ",["a",{title:null,href:"https://reactjs.org/blog/2017/09/26/react-v16.0.html#breaking-changes"},"React 16 Upgrade Documentation"],"."]],["li",["p","For the remaining React 16 obsolete lifecycle APIs, please refer to ",["a",{title:null,href:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"},"Migration Guide"],"."]]]]],["h2","Incompatible changes in v4"],["h3","Design specification"],["ul",["li",["p","Line height changes from ",["code","1.5"],"(",["code","21px"],") to ",["code","1.5715"],"(",["code","22px"],")."]],["li",["p","Basic rounded corner adjustment, changed from ",["code","4px"]," to ",["code","2px"],"."]],["li",["p","Exchanged Selected and Hovered color."]],["li",["p","Global shadow optimization, adjusted to three layers of shadows to distinguish control hierarchies."]],["li",["p","Icon in the bubble confirmation box has been changed from a question mark to an exclamation mark."]],["li",["p","The color of selected components is changed to ",["code","@blue-1: #E6F7FF"],", and the corresponding hover color is changed to ",["code","@gray-2: #FAFAFA"],"."]],["li",["p","The color of the error was adjusted from ",["code","@red-5: #F5222D"]," to",["code","@red-5: #FF4D4F"],"."]],["li",["p","The color brightness of the dividing line has been reduced from ",["code","#E8E8E8"]," to",["code","#F0F0F0"],"."]],["li",["p","DatePicker interactive redo, range selection can now select start and end time separately."]],["li",["p","Table change default background color from transparent to white."]],["li",["p","Smaller Tabs bar width."]],["li",["p","New Tabs interaction and dom structure is changed in ",["code","4.3.0"],"."]]],["h3","Compatibility"],["ul",["li",["p","The minimum supported version of IE is IE 11."]],["li",["p","The minimum supported version of React is React 16.9, and some components have started to refactor using hooks."],["ul",["li",["p","Internal using ",["code","useMemo"]," for performance, do not use mutable data as props."]]]]],["h4","Remove deprecated API"],["ul",["li",["p","LocaleProvider has been removed, please use ",["code","ConfigProvider"]," instead."]],["li",["p","Mention removed, use ",["code","Mentions"]," instead."]],["li",["p","Removed the ",["code","iconType"]," property of Alert. Please use ",["code","icon"]," instead."]],["li",["p","Removed the ",["code","iconType"]," attribute of Modal.xxx. Please use ",["code","icon"]," instead."]],["li",["p","Removed the Form.create method, ",["code","form"]," is now available in ",["code","Form.useForm"],"."]],["li",["p","Removed the ",["code","id"]," attribute of Form.Item. Please use ",["code","htmlFor"]," instead."]],["li",["p","The ",["code","setContentRef"]," property of Typography has been removed, please use ",["code","ref"]," instead."]],["li",["p","Removed the ",["code","allowEmpty"]," property of TimePicker, please use ",["code","allowClear"]," instead."]],["li",["p","Removed ",["code","AfterClose"]," attribute of Tag, please use ",["code","OnClose"]," instead."]],["li",["p","Removed the ",["code","noHovering"]," property of Card, please use ",["code","hoverable"]," instead."]],["li",["p","Removed the ",["code","vertical"]," property of Carousel. Please use ",["code","dotPosition"]," instead."]],["li",["p","Removed ",["code","wrapClassName"]," property of Drawer, please use ",["code","className"]," instead."]],["li",["p","Removed the ",["code","autosize"]," property of TextArea. Please use ",["code","autoSize"]," instead."]],["li",["p","Removed the ",["code","offset"]," attribute of Affix. Please use ",["code","offsetTop"]," instead."]],["li",["p","Removed the ",["code","onSearchChange"]," property of Transfer. Please use ",["code","onSearch"]," instead."]],["li",["p","Removed the ",["code","body"]," attribute of Transfer. Please use ",["code","children"]," instead."]],["li",["p","Removed the ",["code","lazy"]," attribute of Transfer, which did not really optimize the effect."]],["li",["p","Removed ",["code","combobox"]," mode, please use ",["code","AutoComplete"]," instead."]],["li",["p","Removed the ",["code","rowSelection.hideDefaultSelections"]," property of Table, please use ",["code","SELECTION_ALL"]," and ",["code","SELECTION_INVERT"]," in ",["code","rowSelection.selections"]," instead, ",["a",{title:null,href:"/components/table/#components-table-demo-row-selection-custom"},"Custom Selection"],"."]],["li",["p","Deprecated Button.Group, please use ",["code","Space"]," instead."]]],["h4","Icon upgrade"],["p","In ",["code","antd @ 3.9.0"],", we introduced the svg icon (",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/10353"},"Why use the svg icon?"],"). The icon API using the string name cannot be loaded on demand, so the svg icon file is fully introduced, which greatly increases the size of the packaged product. In 4.0, we adjusted the icon usage API to support tree shaking, reducing the default package size of antd by about 150 KB (Gzipped)."],["p","Legacy Icon usage will be discarded:"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import { Icon, Button } from 'antd';

const Demo = () => (
  <div>
    <Icon type="smile" />
    <Button icon="smile" />
  </div>
);`]],["p","It will be imported on demand in v4:"],["pre",{lang:"diff",highlighted:`  import { Button } from 'antd';

  // tree-shaking supported
<span class="token deleted">- import { Icon } from 'antd';</span>
<span class="token inserted">+ import { SmileOutlined } from '@ant-design/icons';</span>

  const Demo = () => (
      &lt;div>
<span class="token deleted">-       &lt;Icon type="smile" /></span>
<span class="token inserted">+       &lt;SmileOutlined /></span>
      &lt;Button icon={&lt;SmileOutlined />} />
    &lt;/div>
  );

  // or directly import
  import SmileOutlined from '@ant-design/icons/SmileOutlined';`},["code",`  import { Button } from 'antd';

  // tree-shaking supported
- import { Icon } from 'antd';
+ import { SmileOutlined } from '@ant-design/icons';

  const Demo = () => (
      <div>
-       <Icon type="smile" />
+       <SmileOutlined />
      <Button icon={<SmileOutlined />} />
    </div>
  );

  // or directly import
  import SmileOutlined from '@ant-design/icons/SmileOutlined';`]],["p","You will still be able to continue using the compatibility pack:"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/compatible'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`import { Button } from 'antd';
import { Icon } from '@ant-design/compatible';

const Demo = () => (
  <div>
    <Icon type="smile" />
    <Button icon="smile" />
  </div>
);`]],["h4","Component refactoring"],["ul",["li",["p","Form rewrite."],["ul",["li",["p","No need to use ",["code","Form.create"],"."]],["li",["p","Nest fields definition changes from ",["code","'xxx.yyy'"]," to ",["code","['xxx', 'yyy']"],"."]],["li",["p","See ",["a",{title:null,href:"/components/form/v3"},"here"]," for migration documentation."]]]],["li",["p","DatePicker rewrite"],["ul",["li",["p","Provide the ",["code","picker"]," property for selector switching."]],["li",["p","Range selection can now select start and end times individually."]],["li",["p",["code","onPanelChange"]," will also trigger when panel value changed."]],["li",["p",["a",{title:null,href:"/components/date-picker/#components-date-picker-demo-date-render"},"Date cell className of Custom style demo"]," changed from ",["code","ant-calendar-date"]," to ",["code","ant-picker-cell-inner"],"."]]]],["li",["p","Tree, Select, TreeSelect, AutoComplete rewrite"],["ul",["li",["p","use virtual scrolling."]],["li",["p",["code","onBlur"]," no longer trigger value change and return React origin ",["code","event"]," object instead."]],["li",["p","AutoComplete no longer support ",["code","optionLabelProp"],". Please set Option ",["code","value"]," directly."]],["li",["p","AutoComplete options definition align with Select. Please use ",["code","options"]," instead of ",["code","dataSource"],"."]],["li",["p","Select remove ",["code","dropdownMenuStyle"]," prop."]],["li",["p","Use ",["code","listHeight"]," to config popup height instead of ",["code","dropdownStyle"],"."]],["li",["p",["code","filterOption"]," return origin data with second params instead. No need to use ",["code","option.props.children"]," for matching."]],["li",["p","Tree, TreeSelect will display ",["code","label"]," when ",["code","title"]," and ",["code","label"]," are both set. The adjustment is for aligning behavior with ",["code","labelInValue"],". ",["a",{title:null,href:"https://codesandbox.io/s/keen-curran-d3qnp"},"New behavior"]," (show 'label' on first node). ",["a",{title:null,href:"https://codesandbox.io/s/muddy-darkness-57lb3"},"Old behavior"]," (show 'title' on first node)."]]]],["li",["p","The Grid component uses flex layout."]],["li",["p","Button's ",["code","danger"]," is now treated as a property instead of a button type."]],["li",["p","Input, Select set ",["code","value"]," to ",["code","undefined"]," is uncontrolled mode now."]],["li",["p","Table rewrite."],["ul",["li",["p","will keep at least one column even if ",["code","columns"]," is empty."]],["li",["p","Nest ",["code","dataIndex"]," definition changes from ",["code","'xxx.yyy'"]," to ",["code","['xxx', 'yyy']"],"."]]]],["li",["p","Pagination will default set ",["code","showSizeChanger"]," to ",["code","true"]," since ",["code","4.1.0"],". This change also applied on Table component."]],["li",["p","Tabs rewrite. (",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/24552"},"4.3.0"],")"],["ul",["li",["p","Dom structrue is changed, please check style if you override tabs css."]],["li",["p",["code","onPrevClick"]," \u548C ",["code","onNextClick"]," would be not working anymore since we improve tabs scroll behavior."]]]]],["pre",{lang:"diff",highlighted:`<span class="token deleted">&lt;Table</span>
  columns={[
    {
      title: 'Age',
<span class="token deleted">-     dataIndex: 'user.age',</span>
<span class="token inserted">+     dataIndex: ['user', 'age'],</span>
    },
  ]}
/>`},["code",`<Table
  columns={[
    {
      title: 'Age',
-     dataIndex: 'user.age',
+     dataIndex: ['user', 'age'],
    },
  ]}
/>`]],["h2","Start upgrading"],["p","You can manually check the code one by one against the above list for modification. In addition, we also provide a codemod cli tool ",["a",{title:null,href:"https://github.com/ant-design/codemod-v4"},"@ant-design/codemod-v4"]," To help you quickly upgrade to v4."],["p","Before running codemod cli, please submit your local code changes."],["pre",{lang:"shell",highlighted:`# Run directly through npx
npx <span class="token operator">-</span>p <span class="token variable">@ant</span><span class="token operator">-</span>design<span class="token operator">/</span>codemod<span class="token operator">-</span>v4 antd4<span class="token operator">-</span>codemod src

# <span class="token operator">Or</span> <span class="token keyword">global</span> installation
# Use npm
npm i <span class="token operator">-</span>g <span class="token variable">@ant</span><span class="token operator">-</span>design<span class="token operator">/</span>codemod<span class="token operator">-</span>v4
# Use yarn
yarn <span class="token keyword">global</span> add <span class="token variable">@ant</span><span class="token operator">-</span>design<span class="token operator">/</span>codemod<span class="token operator">-</span>v4

# Execute
antd4<span class="token operator">-</span>codemod src`},["code",`# Run directly through npx
npx -p @ant-design/codemod-v4 antd4-codemod src

# Or global installation
# Use npm
npm i -g @ant-design/codemod-v4
# Use yarn
yarn global add @ant-design/codemod-v4

# Execute
antd4-codemod src`]],["p",["img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*QdcbQoLC-cQAAAAAAAAAAABkARQnAQ",alt:"codemod running",width:"720"}]],["p","For parts that cannot be modified automatically, codemod will prompt on the command line, and it is recommended to modify them manually as prompted. After modification, you can run the above command repeatedly to check."],["p",["img",{src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*KQwWSrPirlUAAAAAAAAAAABkARQnAQ",alt:"contains an invalid icon",width:"720"}]],["blockquote",["p","Note that codemod cannot cover all scenarios, and it is recommended to check for incompatible changes one by one."]],["h3","Migration tool modification details"],["p",["code","@ant-design/codemod-v4"]," will help you migrate to antd v4. Obsolete components will be kept running through @ant-design/compatible. Generally, you don't need to migrate manually. The following sections detail the overall migration and changes."],["h4","Import the obsolete Form and Mention components via @ant-design/compatible package"],["pre",{lang:"diff",highlighted:`<span class="token deleted">- import { Form, Input, Button, Mention } from 'antd';</span>
<span class="token inserted">+ import { Form, Mention } from '@ant-design/compatible';</span>
<span class="token inserted">+ import '@ant-design/compatible/assets/index.css';</span>
<span class="token inserted">+ import { Input, Button } from 'antd';</span>

  ReactDOM.render( (
    &lt;div>
      &lt;Form>
        {getFieldDecorator('username')(&lt;Input />)}
        &lt;Button>Submit&lt;/Button>
      &lt;/Form>
      &lt;Mention
        style={{ width: '100%' }}
        onChange={onChange}
        defaultValue={toContentState('@afc163')}
        defaultSuggestions={['afc163', 'benjycui']}
        onSelect={onSelect}
      />
    &lt;/div>
  );`},["code",`- import { Form, Input, Button, Mention } from 'antd';
+ import { Form, Mention } from '@ant-design/compatible';
+ import '@ant-design/compatible/assets/index.css';
+ import { Input, Button } from 'antd';

  ReactDOM.render( (
    <div>
      <Form>
        {getFieldDecorator('username')(<Input />)}
        <Button>Submit</Button>
      </Form>
      <Mention
        style={{ width: '100%' }}
        onChange={onChange}
        defaultValue={toContentState('@afc163')}
        defaultSuggestions={['afc163', 'benjycui']}
        onSelect={onSelect}
      />
    </div>
  );`]],["blockquote",["p",["strong","Note:"]," Old Form imported from ",["code","@ ant-design / compatible"]," has change the class name from ",["code",".ant-form"]," to ",["code",".ant-legacy-form"],". Need to be modified accordingly if override the style."]],["h4","Replace component's string icon prop with the new ",["code","@ant-design/icons"]],["pre",{lang:"diff",highlighted:`  import { Avatar, Button, Result } from 'antd';
<span class="token inserted">+ import { QuestionOutlined, UserOutlined } from '@ant-design/icons';</span>

  ReactDOM.render(
    &lt;div>
<span class="token deleted">-     &lt;Button type="primary" shape="circle" icon="search" /></span>
<span class="token inserted">+     &lt;Button type="primary" shape="circle" icon={SearchOutlined} /></span>
<span class="token deleted">-     &lt;Avatar shape="square" icon="user" /></span>
<span class="token inserted">+     &lt;Avatar shape="square" icon={UserOutlined} /></span>
      &lt;Result
<span class="token deleted">-       icon="question"</span>
<span class="token inserted">+       icon={&lt;QuestionOutlined />}</span>
        title="Great, we have done all the operations!"
        extra={&lt;Button type="primary">Next&lt;/Button>}
      />
    &lt;/div>,
    mountNode,
  );`},["code",`  import { Avatar, Button, Result } from 'antd';
+ import { QuestionOutlined, UserOutlined } from '@ant-design/icons';

  ReactDOM.render(
    <div>
-     <Button type="primary" shape="circle" icon="search" />
+     <Button type="primary" shape="circle" icon={SearchOutlined} />
-     <Avatar shape="square" icon="user" />
+     <Avatar shape="square" icon={UserOutlined} />
      <Result
-       icon="question"
+       icon={<QuestionOutlined />}
        title="Great, we have done all the operations!"
        extra={<Button type="primary">Next</Button>}
      />
    </div>,
    mountNode,
  );`]],["h4","Replace v3 Icon with ",["code","@ant-design/icons"]],["pre",{lang:"diff",highlighted:`<span class="token deleted">- import { Icon, Input } from 'antd';</span>
<span class="token inserted">+ import { Input } from 'antd';</span>
<span class="token inserted">+ import Icon, { CodeFilled, SmileOutlined, SmileTwoTone } from '@ant-design/icons';</span>

  const HeartSvg = () => (
    &lt;svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      &lt;path d="M923 plapla..." />
    &lt;/svg>
  );

  const HeartIcon = props => &lt;Icon component={HeartSvg} {...props} />;

  ReactDOM.render(
    &lt;div>
<span class="token deleted">-     &lt;Icon type="code" theme="filled" /></span>
<span class="token inserted">+     &lt;CodeFilled /></span>
<span class="token deleted">-     &lt;Icon type="smile" theme="twoTone" twoToneColor="#eb2f96" /></span>
<span class="token inserted">+     &lt;SmileTwoTone twoToneColor="#eb2f96" /></span>
<span class="token deleted">-     &lt;Icon type="code" theme={props.fill ? 'filled' : 'outlined'} /></span>
<span class="token inserted">+     &lt;LegacyIcon type="code" theme={props.fill ? 'filled' : 'outlined'} /></span>
      &lt;HeartIcon />
      &lt;Icon viewBox="0 0 24 24">
        &lt;title>Cool Home&lt;/title>
        &lt;path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      &lt;/Icon>
      &lt;Input suffix={&lt;SmileOutlined />} />
    &lt;/div>,
    mountNode,
  );`},["code",`- import { Icon, Input } from 'antd';
+ import { Input } from 'antd';
+ import Icon, { CodeFilled, SmileOutlined, SmileTwoTone } from '@ant-design/icons';

  const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 plapla..." />
    </svg>
  );

  const HeartIcon = props => <Icon component={HeartSvg} {...props} />;

  ReactDOM.render(
    <div>
-     <Icon type="code" theme="filled" />
+     <CodeFilled />
-     <Icon type="smile" theme="twoTone" twoToneColor="#eb2f96" />
+     <SmileTwoTone twoToneColor="#eb2f96" />
-     <Icon type="code" theme={props.fill ? 'filled' : 'outlined'} />
+     <LegacyIcon type="code" theme={props.fill ? 'filled' : 'outlined'} />
      <HeartIcon />
      <Icon viewBox="0 0 24 24">
        <title>Cool Home</title>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </Icon>
      <Input suffix={<SmileOutlined />} />
    </div>,
    mountNode,
  );`]],["h4","Replace v3 LocaleProvider with v4 ConfigProvider"],["pre",{lang:"diff",highlighted:`<span class="token deleted">- import { LocaleProvider } from 'antd';</span>
<span class="token inserted">+ import { ConfigProvider } from 'antd';</span>

  ReactDOM.render(
<span class="token deleted">-   &lt;LocaleProvider {...yourConfig}></span>
<span class="token inserted">+   &lt;ConfigProvider {...yourConfig}></span>
      &lt;Main />
<span class="token deleted">-   &lt;/LocaleProvider></span>
<span class="token inserted">+   &lt;/ConfigProvider></span>
    mountNode,
  );`},["code",`- import { LocaleProvider } from 'antd';
+ import { ConfigProvider } from 'antd';

  ReactDOM.render(
-   <LocaleProvider {...yourConfig}>
+   <ConfigProvider {...yourConfig}>
      <Main />
-   </LocaleProvider>
+   </ConfigProvider>
    mountNode,
  );`]],["h4","Replace ",["code","Modal.method()"]," icon string with ",["code","@ant-design/icons"]],["pre",{lang:"diff",highlighted:`  import { Modal } from 'antd';
<span class="token inserted">+ import { AntDesignOutlined } from '@ant-design/icons';</span>

  Modal.confirm({
<span class="token deleted">-  icon: 'ant-design',</span>
<span class="token inserted">+  icon: &lt;AntDesignOutlined />,</span>
   title: 'Do you Want to delete these items?',
   content: 'Some descriptions',
   onOk() {
     console.log('OK');
   },
   onCancel() {
     console.log('Cancel');
   },
 });`},["code",`  import { Modal } from 'antd';
+ import { AntDesignOutlined } from '@ant-design/icons';

  Modal.confirm({
-  icon: 'ant-design',
+  icon: <AntDesignOutlined />,
   title: 'Do you Want to delete these items?',
   content: 'Some descriptions',
   onOk() {
     console.log('OK');
   },
   onCancel() {
     console.log('Cancel');
   },
 });`]],["h2","Encounter problems"],["p","v4 made a lot of detailed improvements and refactoring. We collected all known incompatible changes and related impacts as much as possible, but there may be some scenarios we have not considered. If you encounter problems during the upgrade, please go to ",["a",{title:null,href:"http://new-issue.ant.design/"},"GitHub issues"]," and ",["a",{title:null,href:"https://github.com/ant-design/codemod-v4/issues"},"codemod Issues"]," for feedback. We will respond and improve this document as soon as possible."]],meta:{order:8,title:"V3 to V4",filename:"docs/react/migration-v4.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Upgrade-preparation",title:"Upgrade preparation"},"Upgrade preparation"]],["li",["a",{className:"bisheng-toc-h2",href:"#Incompatible-changes-in-v4",title:"Incompatible changes in v4"},"Incompatible changes in v4"]],["li",["a",{className:"bisheng-toc-h2",href:"#Start-upgrading",title:"Start upgrading"},"Start upgrading"]],["li",["a",{className:"bisheng-toc-h2",href:"#Encounter-problems",title:"Encounter problems"},"Encounter problems"]]]}}}]);
