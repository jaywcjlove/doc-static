"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[453],{72047:function(r,_,e){e.r(_);var u=e(2143),p=e(50250),h=e(59378),c=e(8910),s=e(74775),l=e(5937),E=e(2068),g=e(74399),v=e(63942),P=e(16073),x=e(24628),Z=e(19260),y=e(56140),d=e(5388),D=e(49545),f=e(6965),C=e(49706),M=e(95127),O=e(74418),I=e(73024),i=e(94065),o=e(67294),n=e(96923);function a(){var m=(0,i.eL)(),t=m.texts;return(0,n.tZ)(i.dY,null,(0,n.tZ)(o.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,t[1].value),(0,n.tZ)("li",null,t[2].value)),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(d.Z,{items:[{demo:{id:"components-empty-demo-basic"},previewerProps:{title:"Basic",filename:"components/empty/demo/basic.tsx",jsx:`import { Empty } from 'antd';
const App = () => <Empty />;
export default App;
`,description:"<p>Simplest Usage.</p>"}},{demo:{id:"components-empty-demo-simple"},previewerProps:{title:"Chose image",filename:"components/empty/demo/simple.tsx",jsx:`import { Empty } from 'antd';
const App = () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
export default App;
`,description:"<p>You can choose another style of <code>image</code> by setting image to <code>Empty.PRESENTED_IMAGE_SIMPLE</code>.</p>"}},{demo:{id:"components-empty-demo-customize"},previewerProps:{title:"Customize",filename:"components/empty/demo/customize.tsx",jsx:`import { Button, Empty } from 'antd';
const App = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
);
export default App;
`,description:"<p>Customize image source, image size, description and extra content.</p>"}},{demo:{id:"components-empty-demo-config-provider"},previewerProps:{title:"ConfigProvider",filename:"components/empty/demo/config-provider.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import {
  Cascader,
  ConfigProvider,
  Divider,
  List,
  Select,
  Space,
  Switch,
  Table,
  Transfer,
  TreeSelect,
} from 'antd';
import { useState } from 'react';
const customizeRenderEmpty = () => (
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <SmileOutlined
      style={{
        fontSize: 20,
      }}
    />
    <p>Data Not Found</p>
  </div>
);
const style = {
  width: 200,
};
const App = () => {
  const [customize, setCustomize] = useState(false);
  return (
    <>
      <Switch
        unCheckedChildren="default"
        checkedChildren="customize"
        checked={customize}
        onChange={setCustomize}
      />
      <Divider />
      <ConfigProvider renderEmpty={customize ? customizeRenderEmpty : undefined}>
        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}
        >
          <h4>Select</h4>
          <Select style={style} />
          <h4>TreeSelect</h4>
          <TreeSelect style={style} treeData={[]} />
          <h4>Cascader</h4>
          <Cascader style={style} options={[]} showSearch />
          <h4>Transfer</h4>
          <Transfer />
          <h4>Table</h4>
          <Table
            style={{
              marginTop: 8,
            }}
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
              },
            ]}
          />
          <h4>List</h4>
          <List />
        </Space>
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>Use ConfigProvider set global Empty style.</p>"}},{demo:{id:"components-empty-demo-description"},previewerProps:{title:"No description",filename:"components/empty/demo/description.tsx",jsx:`import { Empty } from 'antd';
const App = () => <Empty description={false} />;
export default App;
`,description:"<p>Simplest Usage with no description.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(s.Z,{lang:"jsx"},t[3].value),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[16].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h2",{id:"built-in-images"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#built-in-images"},(0,n.tZ)("span",{className:"icon icon-link"})),"Built-in images"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,(0,n.tZ)("p",null,t[21].value),(0,n.tZ)("div",{className:"site-empty-buildIn-img site-empty-buildIn-simple"},(0,n.tZ)("div",null))),(0,n.tZ)("li",null,(0,n.tZ)("p",null,t[22].value),(0,n.tZ)("div",{className:"site-empty-buildIn-img site-empty-buildIn-default"}))),(0,n.tZ)("style",{dangerouslySetInnerHTML:{__html:`
  .site-empty-buildIn-img {
    background-repeat: no-repeat;
    background-size: contain;
  }
  .site-empty-buildIn-simple {
    width: 55px;
    height: 35px;
    background-image: url("https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png");
  }
  .site-empty-buildIn-default {
    width: 121px;
    height: 116px;
    background-image: url("https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png");
  }
`}}))))}_.default=a}}]);
