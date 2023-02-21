"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2599],{65741:function(u,i,t){t.r(i);var c=t(2143),m=t(50250),p=t(59378),_=t(8910),D=t(74775),s=t(5937),I=t(2068),v=t(74399),b=t(63942),Z=t(16073),g=t(24628),h=t(19260),f=t(56140),o=t(5388),P=t(49545),E=t(6965),x=t(49706),R=t(95127),C=t(74418),M=t(73024),l=t(94065),a=t(67294),e=t(96923);function r(){var d=(0,l.eL)(),n=d.texts;return(0,e.tZ)(l.dY,null,(0,e.tZ)(a.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,n[1].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(o.Z,{items:[{demo:{id:"components-descriptions-demo-basic"},previewerProps:{title:"Basic",filename:"components/descriptions/demo/basic.tsx",jsx:`import { Descriptions } from 'antd';
const App = () => (
  <Descriptions title="User Info">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
);
export default App;
`,description:"<p>Simplest Usage.</p>"}},{demo:{id:"components-descriptions-demo-border"},previewerProps:{title:"border",filename:"components/descriptions/demo/border.tsx",jsx:`import { Badge, Descriptions } from 'antd';
const App = () => (
  <Descriptions title="User Info" bordered>
    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
      <br />
    </Descriptions.Item>
  </Descriptions>
);
export default App;
`,description:"<p>Descriptions with border and background color.</p>"}},{demo:{id:"components-descriptions-demo-text"},previewerProps:{debug:!0,title:"border",filename:"components/descriptions/demo/text.tsx",jsx:`import { Badge, Descriptions, Table } from 'antd';
const dataSource = [
  {
    key: '1',
    name: '\u80E1\u5F66\u658C',
    age: 32,
    address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
  },
  {
    key: '2',
    name: '\u80E1\u5F66\u7956',
    age: 42,
    address: '\u897F\u6E56\u533A\u6E56\u5E95\u516C\u56ED1\u53F7',
  },
];
const columns = [
  {
    title: '\u59D3\u540D',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '\u5E74\u9F84',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '\u4F4F\u5740',
    dataIndex: 'address',
    key: 'address',
  },
];
const App = () => (
  <Descriptions title="User Info" column={2}>
    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    <Descriptions.Item
      label={
        <div
          style={{
            display: 'flex',
          }}
        >
          Billing Mode
        </div>
      }
    >
      Prepaid
    </Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
      <br />
    </Descriptions.Item>
    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
    <Descriptions.Item label="Config Info">
      <Table size="small" pagination={false} dataSource={dataSource} columns={columns} />
    </Descriptions.Item>
  </Descriptions>
);
export default App;
`,description:"<p>Descriptions with border and background color.</p>"}},{demo:{id:"components-descriptions-demo-size"},previewerProps:{title:"Custom size",filename:"components/descriptions/demo/size.tsx",jsx:`import { Button, Descriptions, Radio } from 'antd';
import { useState } from 'react';
const App = () => {
  const [size, setSize] = useState('default');
  const onChange = (e) => {
    console.log('size checked', e.target.value);
    setSize(e.target.value);
  };
  return (
    <div>
      <Radio.Group onChange={onChange} value={size}>
        <Radio value="default">default</Radio>
        <Radio value="middle">middle</Radio>
        <Radio value="small">small</Radio>
      </Radio.Group>
      <br />
      <br />
      <Descriptions
        bordered
        title="Custom Size"
        size={size}
        extra={<Button type="primary">Edit</Button>}
      >
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official">$60.00</Descriptions.Item>
        <Descriptions.Item label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1
          <br />
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <Descriptions title="Custom Size" size={size} extra={<Button type="primary">Edit</Button>}>
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official">$60.00</Descriptions.Item>
      </Descriptions>
    </div>
  );
};
export default App;
`,description:"<p>Custom sizes to fit in a variety of containers.</p>"}},{demo:{id:"components-descriptions-demo-responsive"},previewerProps:{title:"responsive",filename:"components/descriptions/demo/responsive.tsx",jsx:`import { Descriptions } from 'antd';
const App = () => (
  <div>
    <Descriptions
      title="Responsive Descriptions"
      bordered
      column={{
        xxl: 4,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1,
      }}
    >
      <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
      <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
      <Descriptions.Item label="time">18:00:00</Descriptions.Item>
      <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
      <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
      <Descriptions.Item label="Official">$60.00</Descriptions.Item>
      <Descriptions.Item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
      </Descriptions.Item>
    </Descriptions>
  </div>
);
export default App;
`,description:"<p>Responsive configuration enables perfect presentation on small screen devices.</p>"}},{demo:{id:"components-descriptions-demo-vertical"},previewerProps:{title:"Vertical",filename:"components/descriptions/demo/vertical.tsx",jsx:`import { Descriptions } from 'antd';
const App = () => (
  <Descriptions title="User Info" layout="vertical">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Address" span={2}>
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
  </Descriptions>
);
export default App;
`,description:"<p>Simplest Usage.</p>"}},{demo:{id:"components-descriptions-demo-vertical-border"},previewerProps:{title:"Vertical border",filename:"components/descriptions/demo/vertical-border.tsx",jsx:`import { Badge, Descriptions } from 'antd';
const App = () => (
  <Descriptions title="User Info" layout="vertical" bordered>
    <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
    <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
    <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Usage Time" span={2}>
      2019-04-24 18:00:00
    </Descriptions.Item>
    <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item>
    <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
    <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
    <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
    <Descriptions.Item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
      <br />
    </Descriptions.Item>
  </Descriptions>
);
export default App;
`,description:"<p>Descriptions with border and background color.</p>"}},{demo:{id:"components-descriptions-demo-style"},previewerProps:{debug:!0,title:"Customize label & wrapper style",filename:"components/descriptions/demo/style.tsx",jsx:`import { Descriptions, Divider, Radio, Switch } from 'antd';
import { useState } from 'react';
const labelStyle = {
  background: 'red',
};
const contentStyle = {
  background: 'green',
};
const App = () => {
  const [border, setBorder] = useState(true);
  const [layout, setLayout] = useState('horizontal');
  return (
    <>
      <Switch
        checkedChildren="Border"
        unCheckedChildren="No Border"
        checked={border}
        onChange={(e) => setBorder(e)}
      />
      <Divider />
      <Radio.Group onChange={(e) => setLayout(e.target.value)} value={layout}>
        <Radio value="horizontal">horizontal</Radio>
        <Radio value="vertical">vertical</Radio>
      </Radio.Group>
      <Divider />
      <Descriptions title="User Info" bordered={border} layout={layout}>
        <Descriptions.Item label="Product" labelStyle={labelStyle} contentStyle={contentStyle}>
          Cloud Database
        </Descriptions.Item>
        <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
        <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Descriptions
        title="Root style"
        labelStyle={labelStyle}
        contentStyle={contentStyle}
        bordered={border}
        layout={layout}
      >
        <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
        <Descriptions.Item
          label="Automatic Renewal"
          labelStyle={{
            color: 'orange',
          }}
          contentStyle={{
            color: 'blue',
          }}
        >
          YES
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
export default App;
`,description:"<p>Customize label &#x26; wrapper style</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("h3",{id:"descriptions"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#descriptions"},(0,e.tZ)("span",{className:"icon icon-link"})),"Descriptions"),(0,e.tZ)(s.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[2].value),(0,e.tZ)("th",null,n[3].value),(0,e.tZ)("th",null,n[4].value),(0,e.tZ)("th",null,n[5].value),(0,e.tZ)("th",null,n[6].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[7].value),(0,e.tZ)("td",null,n[8].value),(0,e.tZ)("td",null,n[9].value),(0,e.tZ)("td",null,n[10].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[11].value),(0,e.tZ)("td",null,n[12].value,(0,e.tZ)("code",null,n[13].value),n[14].value),(0,e.tZ)("td",null,n[15].value),(0,e.tZ)("td",null,n[16].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[17].value),(0,e.tZ)("td",null,n[18].value,(0,e.tZ)("code",null,n[19].value),n[20].value,(0,e.tZ)("code",null,n[21].value),n[22].value,(0,e.tZ)("code",null,n[23].value),n[24].value),(0,e.tZ)("td",null,n[25].value),(0,e.tZ)("td",null,n[26].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[27].value),(0,e.tZ)("td",null,n[28].value),(0,e.tZ)("td",null,n[29].value),(0,e.tZ)("td",null,n[30].value),(0,e.tZ)("td",null,n[31].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[32].value),(0,e.tZ)("td",null,n[33].value),(0,e.tZ)("td",null,n[34].value),(0,e.tZ)("td",null,n[35].value),(0,e.tZ)("td",null,n[36].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[37].value),(0,e.tZ)("td",null,n[38].value),(0,e.tZ)("td",null,n[39].value),(0,e.tZ)("td",null,n[40].value),(0,e.tZ)("td",null,n[41].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[42].value),(0,e.tZ)("td",null,n[43].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[44].value),n[45].value,(0,e.tZ)("code",null,n[46].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[47].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[48].value),(0,e.tZ)("td",null,n[49].value,(0,e.tZ)("code",null,n[50].value),n[51].value,(0,e.tZ)("code",null,n[52].value),n[53].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[54].value),n[55].value,(0,e.tZ)("code",null,n[56].value),n[57].value,(0,e.tZ)("code",null,n[58].value)),(0,e.tZ)("td",null,n[59].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[60].value),(0,e.tZ)("td",null,n[61].value),(0,e.tZ)("td",null,n[62].value),(0,e.tZ)("td",null,n[63].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h3",{id:"descriptionitem"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#descriptionitem"},(0,e.tZ)("span",{className:"icon icon-link"})),"DescriptionItem"),(0,e.tZ)(s.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[64].value),(0,e.tZ)("th",null,n[65].value),(0,e.tZ)("th",null,n[66].value),(0,e.tZ)("th",null,n[67].value),(0,e.tZ)("th",null,n[68].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[69].value),(0,e.tZ)("td",null,n[70].value),(0,e.tZ)("td",null,n[71].value),(0,e.tZ)("td",null,n[72].value),(0,e.tZ)("td",null,n[73].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[74].value),(0,e.tZ)("td",null,n[75].value),(0,e.tZ)("td",null,n[76].value),(0,e.tZ)("td",null,n[77].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[78].value),(0,e.tZ)("td",null,n[79].value),(0,e.tZ)("td",null,n[80].value),(0,e.tZ)("td",null,n[81].value),(0,e.tZ)("td",null,n[82].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[83].value),(0,e.tZ)("td",null,n[84].value),(0,e.tZ)("td",null,n[85].value),(0,e.tZ)("td",null,n[86].value),(0,e.tZ)("td",null)))),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n[87].value,(0,e.tZ)("code",null,n[88].value),n[89].value,(0,e.tZ)("code",null,n[90].value),n[91].value,(0,e.tZ)("code",null,n[92].value),n[93].value)))))}i.default=r}}]);
