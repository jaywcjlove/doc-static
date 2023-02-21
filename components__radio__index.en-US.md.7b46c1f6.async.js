"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1214],{26372:function(s,o,t){t.r(o);var _=t(2143),p=t(50250),v=t(59378),m=t(8910),R=t(74775),a=t(5937),h=t(2068),g=t(74399),c=t(63942),Z=t(16073),B=t(24628),b=t(19260),f=t(56140),d=t(5388),C=t(49545),x=t(6965),P=t(49706),E=t(95127),A=t(74418),D=t(73024),l=t(94065),u=t(67294),n=t(96923);function i(){var r=(0,l.eL)(),e=r.texts;return(0,n.tZ)(l.dY,null,(0,n.tZ)(u.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[1].value),(0,n.tZ)("li",null,e[2].value)),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(d.Z,{items:[{demo:{id:"components-radio-demo-basic"},previewerProps:{title:"Basic",filename:"components/radio/demo/basic.tsx",jsx:`import { Radio } from 'antd';
const App = () => <Radio>Radio</Radio>;
export default App;
`,description:"<p>The simplest use.</p>"}},{demo:{id:"components-radio-demo-disabled"},previewerProps:{title:"disabled",filename:"components/radio/demo/disabled.tsx",jsx:`import { Button, Radio } from 'antd';
import { useState } from 'react';
const App = () => {
  const [disabled, setDisabled] = useState(true);
  const toggleDisabled = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <Radio defaultChecked={false} disabled={disabled}>
        Disabled
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        Disabled
      </Radio>
      <br />
      <Button
        type="primary"
        onClick={toggleDisabled}
        style={{
          marginTop: 16,
        }}
      >
        Toggle disabled
      </Button>
    </>
  );
};
export default App;
`,description:"<p>Radio unavailable.</p>"}},{demo:{id:"components-radio-demo-radiogroup"},previewerProps:{title:"Radio Group",filename:"components/radio/demo/radiogroup.tsx",jsx:`import { Radio } from 'antd';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
};
export default App;
`,description:"<p>A group of radio components.</p>"}},{demo:{id:"components-radio-demo-radiogroup-more"},previewerProps:{title:"Vertical Radio.Group",filename:"components/radio/demo/radiogroup-more.tsx",jsx:`import { Input, Radio, Space } from 'antd';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
        <Radio value={4}>
          More...
          {value === 4 ? (
            <Input
              style={{
                width: 100,
                marginLeft: 10,
              }}
            />
          ) : null}
        </Radio>
      </Space>
    </Radio.Group>
  );
};
export default App;
`,description:"<p>Vertical Radio.Group, with more radios.</p>"}},{demo:{id:"components-radio-demo-radiogroup-options"},previewerProps:{title:"Radio.Group group - optional",filename:"components/radio/demo/radiogroup-options.tsx",jsx:`import { Radio } from 'antd';
import { useState } from 'react';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
  },
];
const optionsWithDisabled = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Pear',
    value: 'Pear',
  },
  {
    label: 'Orange',
    value: 'Orange',
    disabled: true,
  },
];
const App = () => {
  const [value1, setValue1] = useState('Apple');
  const [value2, setValue2] = useState('Apple');
  const [value3, setValue3] = useState('Apple');
  const [value4, setValue4] = useState('Apple');
  const onChange1 = ({ target: { value } }) => {
    console.log('radio1 checked', value);
    setValue1(value);
  };
  const onChange2 = ({ target: { value } }) => {
    console.log('radio2 checked', value);
    setValue2(value);
  };
  const onChange3 = ({ target: { value } }) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };
  const onChange4 = ({ target: { value } }) => {
    console.log('radio4 checked', value);
    setValue4(value);
  };
  return (
    <>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <br />
      <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
      <br />
      <br />
      <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
      <br />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};
export default App;
`,description:"<p>Render radios by configuring <code>options</code>. Radio type can also be set through the <code>optionType</code> parameter.</p>"}},{demo:{id:"components-radio-demo-radiobutton"},previewerProps:{title:"radio style",filename:"components/radio/demo/radiobutton.tsx",jsx:`import { Radio } from 'antd';
const onChange = (e) => {
  console.log(\`radio checked:\${e.target.value}\`);
};
const App = () => (
  <>
    <Radio.Group onChange={onChange} defaultValue="a">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group
      onChange={onChange}
      defaultValue="a"
      style={{
        marginTop: 16,
      }}
    >
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b" disabled>
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group
      disabled
      onChange={onChange}
      defaultValue="a"
      style={{
        marginTop: 16,
      }}
    >
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </>
);
export default App;
`,description:"<p>The combination of radio button style.</p>"}},{demo:{id:"components-radio-demo-radiogroup-with-name"},previewerProps:{title:"Radio.Group with name",filename:"components/radio/demo/radiogroup-with-name.tsx",jsx:`import { Radio } from 'antd';
const App = () => (
  <Radio.Group name="radiogroup" defaultValue={1}>
    <Radio value={1}>A</Radio>
    <Radio value={2}>B</Radio>
    <Radio value={3}>C</Radio>
    <Radio value={4}>D</Radio>
  </Radio.Group>
);
export default App;
`,description:'<p>Passing the <code>name</code> property to all <code>input[type="radio"]</code> that are in the same Radio.Group. It is usually used to let the browser see your Radio.Group as a real "group" and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same Radio.Group.</p>'}},{demo:{id:"components-radio-demo-size"},previewerProps:{title:"Size",filename:"components/radio/demo/size.tsx",jsx:`import { Radio } from 'antd';
const App = () => (
  <>
    <Radio.Group defaultValue="a" size="large">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group
      defaultValue="a"
      style={{
        marginTop: 16,
      }}
    >
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group
      defaultValue="a"
      size="small"
      style={{
        marginTop: 16,
      }}
    >
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </>
);
export default App;
`,description:"<p>There are three sizes available: large, medium, and small. It can coordinate with input box.</p>"}},{demo:{id:"components-radio-demo-radiobutton-solid"},previewerProps:{title:"Solid radio button",filename:"components/radio/demo/radiobutton-solid.tsx",jsx:`import { Radio } from 'antd';
const App = () => (
  <>
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group
      defaultValue="c"
      buttonStyle="solid"
      style={{
        marginTop: 16,
      }}
    >
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b" disabled>
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </>
);
export default App;
`,description:"<p>Solid radio button style.</p>"}},{demo:{id:"components-radio-demo-badge"},previewerProps:{debug:!0,title:"Badge style",filename:"components/radio/demo/badge.tsx",jsx:`import { Badge, Radio } from 'antd';
const App = () => (
  <Radio.Group buttonStyle="solid">
    <Badge count={1}>
      <Radio.Button value={1}>Click Me</Radio.Button>
    </Badge>
    <Badge count={2}>
      <Radio.Button value={2}>Not Me</Radio.Button>
    </Badge>
  </Radio.Group>
);
export default App;
`,description:"<p>Test Badge style.</p>"}},{demo:{id:"components-radio-demo-wireframe"},previewerProps:{debug:!0,title:"Wireframe",filename:"components/radio/demo/wireframe.tsx",jsx:`import { ConfigProvider, Radio } from 'antd';
const App = () => (
  <ConfigProvider
    theme={{
      token: {
        wireframe: true,
      },
    }}
  >
    <Radio.Group value={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
    <br />
    <Radio.Group value={1} disabled>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  </ConfigProvider>
);
export default App;
`,description:"<p>Wireframe style.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"radioradiobutton"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#radioradiobutton"},(0,n.tZ)("span",{className:"icon icon-link"})),"Radio/Radio.Button"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[3].value),(0,n.tZ)("th",null,e[4].value),(0,n.tZ)("th",null,e[5].value),(0,n.tZ)("th",null,e[6].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[7].value),(0,n.tZ)("td",null,e[8].value),(0,n.tZ)("td",null,e[9].value),(0,n.tZ)("td",null,e[10].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null,e[14].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,e[22].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value)))),(0,n.tZ)("h3",{id:"radiogroup"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#radiogroup"},(0,n.tZ)("span",{className:"icon icon-link"})),"RadioGroup"),(0,n.tZ)("p",null,e[27].value,(0,n.tZ)("code",null,e[28].value),e[29].value),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[30].value),(0,n.tZ)("th",null,e[31].value),(0,n.tZ)("th",null,e[32].value),(0,n.tZ)("th",null,e[33].value),(0,n.tZ)("th",null,e[34].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[35].value),(0,n.tZ)("td",null,e[36].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[37].value),e[38].value,(0,n.tZ)("code",null,e[39].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[40].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[41].value),(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null,e[43].value),(0,n.tZ)("td",null,e[44].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[45].value),(0,n.tZ)("td",null,e[46].value),(0,n.tZ)("td",null,e[47].value),(0,n.tZ)("td",null,e[48].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null,e[50].value,(0,n.tZ)("code",null,e[51].value),e[52].value,(0,n.tZ)("code",null,e[53].value),e[54].value),(0,n.tZ)("td",null,e[55].value),(0,n.tZ)("td",null,e[56].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[57].value),(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null,e[59].value),(0,n.tZ)("td",null,e[60].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[61].value),(0,n.tZ)("td",null,e[62].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[63].value),e[64].value,(0,n.tZ)("code",null,e[65].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[66].value)),(0,n.tZ)("td",null,e[67].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[68].value),(0,n.tZ)("td",null,e[69].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[70].value),e[71].value,(0,n.tZ)("code",null,e[72].value),e[73].value,(0,n.tZ)("code",null,e[74].value)),(0,n.tZ)("td",null,e[75].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[76].value),(0,n.tZ)("td",null,e[77].value),(0,n.tZ)("td",null,e[78].value),(0,n.tZ)("td",null,e[79].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[80].value),(0,n.tZ)("td",null,e[81].value),(0,n.tZ)("td",null,e[82].value),(0,n.tZ)("td",null,e[83].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h2",{id:"methods"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#methods"},(0,n.tZ)("span",{className:"icon icon-link"})),"Methods"),(0,n.tZ)("h3",{id:"radio"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#radio"},(0,n.tZ)("span",{className:"icon icon-link"})),"Radio"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[84].value),(0,n.tZ)("th",null,e[85].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[86].value),(0,n.tZ)("td",null,e[87].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[88].value),(0,n.tZ)("td",null,e[89].value)))))))}o.default=i}}]);
