"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9237],{71323:function(s,l,t){t.r(l);var m=t(2143),p=t(50250),_=t(59378),c=t(8910),v=t(74775),u=t(5937),Z=t(2068),h=t(74399),b=t(63942),g=t(16073),f=t(24628),x=t(19260),I=t(56140),o=t(5388),C=t(49545),P=t(6965),E=t(49706),O=t(95127),w=t(74418),N=t(73024),a=t(94065),d=t(67294),n=t(96923);function r(){var i=(0,a.eL)(),e=i.texts;return(0,n.tZ)(a.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,e[1].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(o.Z,{items:[{demo:{id:"components-input-number-demo-basic"},previewerProps:{title:"Basic",filename:"components/input-number/demo/basic.tsx",jsx:`import { InputNumber } from 'antd';
const onChange = (value) => {
  console.log('changed', value);
};
const App = () => <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />;
export default App;
`,description:"<p>Numeric-only input box.</p>"}},{demo:{id:"components-input-number-demo-size"},previewerProps:{title:"Sizes",filename:"components/input-number/demo/size.tsx",jsx:`import { InputNumber, Space } from 'antd';
const onChange = (value) => {
  console.log('changed', value);
};
const App = () => (
  <Space>
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </Space>
);
export default App;
`,description:"<p>There are three sizes available to a numeric input box. By default, the size is <code>32px</code>. The two additional sizes are <code>large</code> and <code>small</code> which means <code>40px</code> and <code>24px</code>, respectively.</p>"}},{demo:{id:"components-input-number-demo-addon"},previewerProps:{title:"Pre / Post tab",filename:"components/input-number/demo/addon.tsx",jsx:`import { SettingOutlined } from '@ant-design/icons';
import { Cascader, InputNumber, Select, Space } from 'antd';
const { Option } = Select;
const selectBefore = (
  <Select
    defaultValue="add"
    style={{
      width: 60,
    }}
  >
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
  </Select>
);
const selectAfter = (
  <Select
    defaultValue="USD"
    style={{
      width: 60,
    }}
  >
    <Option value="USD">$</Option>
    <Option value="EUR">\u20AC</Option>
    <Option value="GBP">\xA3</Option>
    <Option value="CNY">\xA5</Option>
  </Select>
);
const App = () => (
  <Space direction="vertical">
    <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
    <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
    <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
    <InputNumber
      addonBefore={
        <Cascader
          placeholder="cascader"
          style={{
            width: 150,
          }}
        />
      }
      defaultValue={100}
    />
  </Space>
);
export default App;
`,description:"<p>Using pre &#x26; post tabs example.</p>"}},{demo:{id:"components-input-number-demo-disabled"},previewerProps:{title:"Disabled",filename:"components/input-number/demo/disabled.tsx",jsx:`import { Button, InputNumber } from 'antd';
import { useState } from 'react';
const App = () => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <InputNumber min={1} max={10} disabled={disabled} defaultValue={3} />
      <div
        style={{
          marginTop: 20,
        }}
      >
        <Button onClick={toggle} type="primary">
          Toggle disabled
        </Button>
      </div>
    </>
  );
};
export default App;
`,description:"<p>Click the button to toggle between available and disabled states.</p>"}},{demo:{id:"components-input-number-demo-digit"},previewerProps:{title:"High precision decimals",filename:"components/input-number/demo/digit.tsx",jsx:`import { InputNumber } from 'antd';
const onChange = (value) => {
  console.log('changed', value);
};
const App = () => (
  <InputNumber
    style={{
      width: 200,
    }}
    defaultValue="1"
    min="0"
    max="10"
    step="0.00000000000001"
    onChange={onChange}
    stringMode
  />
);
export default App;
`,description:"<p>Use <code>stringMode</code> to support high precision decimals support. <code>onChange</code> will return string value instead. You need polyfill of BigInt if browser not support.</p>"}},{demo:{id:"components-input-number-demo-formatter"},previewerProps:{title:"Formatter",filename:"components/input-number/demo/formatter.tsx",jsx:`import { InputNumber, Space } from 'antd';
const onChange = (value) => {
  console.log('changed', value);
};
const App = () => (
  <Space>
    <InputNumber
      defaultValue={1000}
      formatter={(value) => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}
      parser={(value) => value.replace(/\\$\\s?|(,*)/g, '')}
      onChange={onChange}
    />
    <InputNumber
      defaultValue={100}
      min={0}
      max={100}
      formatter={(value) => \`\${value}%\`}
      parser={(value) => value.replace('%', '')}
      onChange={onChange}
    />
  </Space>
);
export default App;
`,description:`<p>Display value within it's situation with <code>formatter</code>, and we usually use <code>parser</code> at the same time.</p>
<blockquote>
<p>Here is a Intl.NumberFormat InputNumber implementation: <a href="https://codesandbox.io/s/currency-wrapper-antd-input-3ynzo">https://codesandbox.io/s/currency-wrapper-antd-input-3ynzo</a></p>
</blockquote>`}},{demo:{id:"components-input-number-demo-keyboard"},previewerProps:{title:"Keyboard",filename:"components/input-number/demo/keyboard.tsx",jsx:`import { Checkbox, InputNumber, Space } from 'antd';
import { useState } from 'react';
const App = () => {
  const [keyboard, setKeyboard] = useState(true);
  return (
    <Space>
      <InputNumber min={1} max={10} keyboard={keyboard} defaultValue={3} />
      <Checkbox
        onChange={() => {
          setKeyboard(!keyboard);
        }}
        checked={keyboard}
      >
        Toggle keyboard
      </Checkbox>
    </Space>
  );
};
export default App;
`,description:"<p>Control keyboard behavior by <code>keyboard</code>.</p>"}},{demo:{id:"components-input-number-demo-borderless"},previewerProps:{title:"Borderless",filename:"components/input-number/demo/borderless.tsx",jsx:`import { InputNumber } from 'antd';
const App = () => <InputNumber min={1} max={10} defaultValue={3} bordered={false} />;
export default App;
`,description:"<p>No border.</p>"}},{demo:{id:"components-input-number-demo-out-of-range"},previewerProps:{title:"Out of range",filename:"components/input-number/demo/out-of-range.tsx",jsx:`import { Button, InputNumber, Space } from 'antd';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState('99');
  return (
    <Space>
      <InputNumber min={1} max={10} value={value} onChange={setValue} />
      <Button
        type="primary"
        onClick={() => {
          setValue(99);
        }}
      >
        Reset
      </Button>
    </Space>
  );
};
export default App;
`,description:"<p>Show warning style when <code>value</code> is out of range by control.</p>"}},{demo:{id:"components-input-number-demo-prefix"},previewerProps:{title:"Prefix",filename:"components/input-number/demo/prefix.tsx",jsx:`import { UserOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
const App = () => (
  <>
    <InputNumber
      prefix="\uFFE5"
      style={{
        width: '100%',
      }}
    />
    <br />
    <br />
    <InputNumber
      addonBefore={<UserOutlined />}
      prefix="\uFFE5"
      style={{
        width: '100%',
      }}
    />
    <br />
    <br />
    <InputNumber
      prefix="\uFFE5"
      disabled
      style={{
        width: '100%',
      }}
    />
  </>
);
export default App;
`,description:"<p>Add a prefix inside input.</p>"}},{demo:{id:"components-input-number-demo-status"},previewerProps:{title:"Status",filename:"components/input-number/demo/status.tsx",jsx:`import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import { InputNumber, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <InputNumber
      status="error"
      style={{
        width: '100%',
      }}
    />
    <InputNumber
      status="warning"
      style={{
        width: '100%',
      }}
    />
    <InputNumber
      status="error"
      style={{
        width: '100%',
      }}
      prefix={<ClockCircleOutlined />}
    />
    <InputNumber
      status="warning"
      style={{
        width: '100%',
      }}
      prefix={<ClockCircleOutlined />}
    />
  </Space>
);
export default App;
`,description:"<p>Add status to InputNumber with <code>status</code>, which could be <code>error</code> or <code>warning</code>.</p>"}},{demo:{id:"components-input-number-demo-controls"},previewerProps:{debug:!0,title:"Icon",filename:"components/input-number/demo/controls.tsx",jsx:`import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
const App = () => (
  <InputNumber
    controls={{
      upIcon: <ArrowUpOutlined />,
      downIcon: <ArrowDownOutlined />,
    }}
  />
);
export default App;
`,description:"<p>When you need to use a custom <code>Icon</code>, you can set the <code>Icon</code> component as the property value of <code>upIcon</code> and <code>downIcon</code>.</p>"}},{demo:{id:"components-input-number-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/input-number/demo/render-panel.tsx",jsx:`import { InputNumber } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalInputNumber } = InputNumber;
export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 16,
    }}
  >
    <InternalInputNumber
      style={{
        width: '100%',
      }}
    />
  </div>
);
`,description:"<p>Debug usage. Do not use in your production.</p>"}},{demo:{id:"components-input-number-demo-debug-token"},previewerProps:{debug:!0,title:"Override Component Style",filename:"components/input-number/demo/debug-token.tsx",jsx:`import { ConfigProvider, InputNumber, Space } from 'antd';
export default () => (
  <ConfigProvider
    theme={{
      components: {
        InputNumber: {
          handleWidth: 50,
        },
      },
    }}
  >
    <Space>
      <InputNumber />

      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              handleWidth: 25,
            },
          },
        }}
      >
        <InputNumber />
      </ConfigProvider>
    </Space>
  </ConfigProvider>
);
`}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[2].value),(0,n.tZ)("th",null,e[3].value),(0,n.tZ)("th",null,e[4].value),(0,n.tZ)("th",null,e[5].value),(0,n.tZ)("th",null,e[6].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[7].value),(0,n.tZ)("td",null,e[8].value),(0,n.tZ)("td",null,e[9].value),(0,n.tZ)("td",null,e[10].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null,e[19].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value,(0,n.tZ)("code",null,e[27].value),e[28].value),(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[32].value),(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,e[34].value),(0,n.tZ)("td",null,e[35].value),(0,n.tZ)("td",null,e[36].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[37].value),(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null,e[39].value),(0,n.tZ)("td",null,e[40].value),(0,n.tZ)("td",null,e[41].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null,e[43].value),(0,n.tZ)("td",null,e[44].value),(0,n.tZ)("td",null,e[45].value),(0,n.tZ)("td",null,e[46].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[47].value),(0,n.tZ)("td",null,e[48].value),(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null,e[50].value),(0,n.tZ)("td",null,e[51].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[52].value),(0,n.tZ)("td",null,e[53].value),(0,n.tZ)("td",null,e[54].value),(0,n.tZ)("td",null,e[55].value),(0,n.tZ)("td",null,e[56].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[57].value),(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null,e[59].value),(0,n.tZ)("td",null,(0,n.tZ)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"},e[60].value)),(0,n.tZ)("td",null,e[61].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[62].value),(0,n.tZ)("td",null,e[63].value),(0,n.tZ)("td",null,e[64].value),(0,n.tZ)("td",null,(0,n.tZ)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER"},e[65].value)),(0,n.tZ)("td",null,e[66].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[67].value),(0,n.tZ)("td",null,e[68].value),(0,n.tZ)("td",null,e[69].value),(0,n.tZ)("td",null,e[70].value),(0,n.tZ)("td",null,e[71].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[72].value),(0,n.tZ)("td",null,e[73].value,(0,n.tZ)("code",null,e[74].value),e[75].value,(0,n.tZ)("code",null,e[76].value)),(0,n.tZ)("td",null,e[77].value),(0,n.tZ)("td",null,e[78].value),(0,n.tZ)("td",null,e[79].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[80].value),(0,n.tZ)("td",null,e[81].value),(0,n.tZ)("td",null,e[82].value),(0,n.tZ)("td",null,e[83].value),(0,n.tZ)("td",null,e[84].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[85].value),(0,n.tZ)("td",null,e[86].value),(0,n.tZ)("td",null,e[87].value),(0,n.tZ)("td",null,e[88].value),(0,n.tZ)("td",null,e[89].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[90].value),(0,n.tZ)("td",null,e[91].value),(0,n.tZ)("td",null,e[92].value),(0,n.tZ)("td",null,e[93].value),(0,n.tZ)("td",null,e[94].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[95].value),(0,n.tZ)("td",null,e[96].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[97].value),e[98].value,(0,n.tZ)("code",null,e[99].value),e[100].value,(0,n.tZ)("code",null,e[101].value)),(0,n.tZ)("td",null,e[102].value),(0,n.tZ)("td",null,e[103].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[104].value),(0,n.tZ)("td",null,e[105].value),(0,n.tZ)("td",null,e[106].value),(0,n.tZ)("td",null,e[107].value),(0,n.tZ)("td",null,e[108].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[109].value),(0,n.tZ)("td",null,e[110].value,(0,n.tZ)("code",null,e[111].value)),(0,n.tZ)("td",null,e[112].value),(0,n.tZ)("td",null,e[113].value),(0,n.tZ)("td",null,e[114].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[115].value),(0,n.tZ)("td",null,e[116].value),(0,n.tZ)("td",null,e[117].value),(0,n.tZ)("td",null,e[118].value),(0,n.tZ)("td",null,e[119].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[120].value),(0,n.tZ)("td",null,e[121].value),(0,n.tZ)("td",null,e[122].value),(0,n.tZ)("td",null,e[123].value),(0,n.tZ)("td",null,e[124].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[125].value),(0,n.tZ)("td",null,e[126].value),(0,n.tZ)("td",null,e[127].value),(0,n.tZ)("td",null,e[128].value),(0,n.tZ)("td",null,e[129].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[130].value),(0,n.tZ)("td",null,e[131].value),(0,n.tZ)("td",null,e[132].value),(0,n.tZ)("td",null,e[133].value),(0,n.tZ)("td",null,e[134].value)))),(0,n.tZ)("h2",{id:"methods"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#methods"},(0,n.tZ)("span",{className:"icon icon-link"})),"Methods"),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[135].value),(0,n.tZ)("th",null,e[136].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[137].value),(0,n.tZ)("td",null,e[138].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[139].value),(0,n.tZ)("td",null,e[140].value)))),(0,n.tZ)("h2",{id:"notes"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#notes"},(0,n.tZ)("span",{className:"icon icon-link"})),"Notes"),(0,n.tZ)("p",null,e[141].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/21158"},e[142].value),e[143].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/17344"},e[144].value),e[145].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/9421"},e[146].value),e[147].value,(0,n.tZ)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#Using_number_inputs"},e[148].value),e[149].value,(0,n.tZ)("code",null,e[150].value),e[151].value,(0,n.tZ)("code",null,e[152].value),e[153].value),(0,n.tZ)("h2",{id:"faq"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,n.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,n.tZ)("h3",{id:"why-value-can-exceed-min-or-max-in-control"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#why-value-can-exceed-min-or-max-in-control"},(0,n.tZ)("span",{className:"icon icon-link"})),"Why ",(0,n.tZ)("code",null,e[154].value)," can exceed ",(0,n.tZ)("code",null,e[155].value)," or ",(0,n.tZ)("code",null,e[156].value)," in control?"),(0,n.tZ)("p",null,e[157].value),(0,n.tZ)("h3",{id:"why-dynamic-change-min-or-max-which-makes-value-out-of-range-will-not-trigger-onchange"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#why-dynamic-change-min-or-max-which-makes-value-out-of-range-will-not-trigger-onchange"},(0,n.tZ)("span",{className:"icon icon-link"})),"Why dynamic change ",(0,n.tZ)("code",null,e[158].value)," or ",(0,n.tZ)("code",null,e[159].value)," which makes ",(0,n.tZ)("code",null,e[160].value)," out of range will not trigger ",(0,n.tZ)("code",null,e[161].value),"?"),(0,n.tZ)("p",null,(0,n.tZ)("code",null,e[162].value),e[163].value))))}l.default=r}}]);
