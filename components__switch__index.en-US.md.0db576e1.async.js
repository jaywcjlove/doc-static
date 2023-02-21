"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9675],{96707:function(o,l,e){e.r(l);var r=e(2143),m=e(50250),h=e(59378),c=e(8910),Z=e(74775),_=e(5937),v=e(2068),p=e(74399),E=e(63942),g=e(16073),P=e(24628),x=e(19260),C=e(56140),a=e(5388),D=e(49545),M=e(6965),O=e(49706),w=e(95127),f=e(74418),A=e(73024),d=e(94065),i=e(67294),t=e(96923);function u(){var s=(0,d.eL)(),n=s.texts;return(0,t.tZ)(d.dY,null,(0,t.tZ)(i.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[1].value),(0,t.tZ)("li",null,n[2].value,(0,t.tZ)("code",null,n[3].value),n[4].value,(0,t.tZ)("code",null,n[5].value),n[6].value,(0,t.tZ)("code",null,n[7].value),n[8].value,(0,t.tZ)("code",null,n[9].value),n[10].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(a.Z,{items:[{demo:{id:"components-switch-demo-basic"},previewerProps:{title:"Basic",filename:"components/switch/demo/basic.tsx",jsx:`import { Switch } from 'antd';
const onChange = (checked) => {
  console.log(\`switch to \${checked}\`);
};
const App = () => <Switch defaultChecked onChange={onChange} />;
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-switch-demo-disabled"},previewerProps:{title:"Disabled",filename:"components/switch/demo/disabled.tsx",jsx:`import { Button, Space, Switch } from 'antd';
import { useState } from 'react';
const App = () => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <Space direction="vertical">
      <Switch disabled={disabled} defaultChecked />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </Space>
  );
};
export default App;
`,description:"<p>Disabled state of <code>Switch</code>.</p>"}},{demo:{id:"components-switch-demo-text"},previewerProps:{title:"Text & icon",filename:"components/switch/demo/text.tsx",jsx:`import { CheckOutlined } from '@ant-design/icons';
import { Space, Switch } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Switch checkedChildren="\u5F00\u542F" unCheckedChildren="\u5173\u95ED" defaultChecked />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </Space>
);
export default App;
`,description:"<p>With text and icon.</p>"}},{demo:{id:"components-switch-demo-size"},previewerProps:{title:"Two sizes",filename:"components/switch/demo/size.tsx",jsx:`import { Switch } from 'antd';
const App = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
);
export default App;
`,description:'<p><code>size="small"</code> represents a small sized switch.</p>'}},{demo:{id:"components-switch-demo-loading"},previewerProps:{title:"Loading",filename:"components/switch/demo/loading.tsx",jsx:`import { Switch } from 'antd';
const App = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
);
export default App;
`,description:"<p>Mark a pending state of switch.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(_.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[11].value),(0,t.tZ)("th",null,n[12].value),(0,t.tZ)("th",null,n[13].value),(0,t.tZ)("th",null,n[14].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[15].value),(0,t.tZ)("td",null,n[16].value),(0,t.tZ)("td",null,n[17].value),(0,t.tZ)("td",null,n[18].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[19].value),(0,t.tZ)("td",null,n[20].value),(0,t.tZ)("td",null,n[21].value),(0,t.tZ)("td",null,n[22].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[23].value),(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null,n[25].value),(0,t.tZ)("td",null,n[26].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[27].value),(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null,n[29].value),(0,t.tZ)("td",null,n[30].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[31].value),(0,t.tZ)("td",null,n[32].value),(0,t.tZ)("td",null,n[33].value),(0,t.tZ)("td",null,n[34].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[35].value),(0,t.tZ)("td",null,n[36].value),(0,t.tZ)("td",null,n[37].value),(0,t.tZ)("td",null,n[38].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[39].value),(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,n[42].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null,n[44].value,(0,t.tZ)("code",null,n[45].value),n[46].value,(0,t.tZ)("code",null,n[47].value)),(0,t.tZ)("td",null,n[48].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[49].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[50].value),(0,t.tZ)("td",null,n[51].value),(0,t.tZ)("td",null,n[52].value),(0,t.tZ)("td",null,n[53].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[54].value),(0,t.tZ)("td",null,n[55].value),(0,t.tZ)("td",null,n[56].value),(0,t.tZ)("td",null,n[57].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[58].value),(0,t.tZ)("td",null,n[59].value),(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null,n[61].value)))),(0,t.tZ)("h2",{id:"methods"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#methods"},(0,t.tZ)("span",{className:"icon icon-link"})),"Methods"),(0,t.tZ)(_.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[62].value),(0,t.tZ)("th",null,n[63].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[64].value),(0,t.tZ)("td",null,n[65].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[66].value),(0,t.tZ)("td",null,n[67].value)))))))}l.default=u}}]);
