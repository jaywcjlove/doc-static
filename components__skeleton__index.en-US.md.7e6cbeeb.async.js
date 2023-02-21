"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1527],{31257:function(r,o,e){e.r(o);var _=e(2143),c=e(50250),v=e(59378),m=e(8910),p=e(74775),l=e(5937),Z=e(2068),h=e(74399),g=e(63942),k=e(16073),S=e(24628),x=e(19260),E=e(56140),u=e(5388),f=e(49545),P=e(6965),A=e(49706),B=e(95127),I=e(74418),b=e(73024),a=e(94065),i=e(67294),t=e(96923);function d(){var s=(0,a.eL)(),n=s.texts;return(0,t.tZ)(a.dY,null,(0,t.tZ)(i.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[1].value),(0,t.tZ)("li",null,n[2].value),(0,t.tZ)("li",null,n[3].value),(0,t.tZ)("li",null,n[4].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(u.Z,{items:[{demo:{id:"components-skeleton-demo-basic"},previewerProps:{title:"Basic",filename:"components/skeleton/demo/basic.tsx",jsx:`import { Skeleton } from 'antd';
const App = () => <Skeleton />;
export default App;
`,description:"<p>Simplest Skeleton usage.</p>"}},{demo:{id:"components-skeleton-demo-complex"},previewerProps:{title:"Complex combination",filename:"components/skeleton/demo/complex.tsx",jsx:`import { Skeleton } from 'antd';
const App = () => (
  <Skeleton
    avatar
    paragraph={{
      rows: 4,
    }}
  />
);
export default App;
`,description:"<p>Complex combination with avatar and multiple paragraphs.</p>"}},{demo:{id:"components-skeleton-demo-active"},previewerProps:{title:"Active Animation",filename:"components/skeleton/demo/active.tsx",jsx:`import { Skeleton } from 'antd';
const App = () => <Skeleton active />;
export default App;
`,description:"<p>Display active animation.</p>"}},{demo:{id:"components-skeleton-demo-element"},previewerProps:{title:"Button/Avatar/Input/Image/Node",filename:"components/skeleton/demo/element.tsx",jsx:`import { DotChartOutlined } from '@ant-design/icons';
import { Divider, Form, Radio, Skeleton, Space, Switch } from 'antd';
import { useState } from 'react';
const App = () => {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState('default');
  const [buttonShape, setButtonShape] = useState('default');
  const [avatarShape, setAvatarShape] = useState('circle');
  const handleActiveChange = (checked) => {
    setActive(checked);
  };
  const handleBlockChange = (checked) => {
    setBlock(checked);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleShapeButton = (e) => {
    setButtonShape(e.target.value);
  };
  const handleAvatarShape = (e) => {
    setAvatarShape(e.target.value);
  };
  return (
    <>
      <Space>
        <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
        <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
        <Skeleton.Input active={active} size={size} />
      </Space>
      <br />
      <br />
      <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
      <br />
      <br />
      <Skeleton.Input active={active} size={size} block={block} />
      <br />
      <br />
      <Space>
        <Skeleton.Image active={active} />
        <Skeleton.Node active={active}>
          <DotChartOutlined
            style={{
              fontSize: 40,
              color: '#bfbfbf',
            }}
          />
        </Skeleton.Node>
      </Space>
      <Divider />
      <Form
        layout="inline"
        style={{
          margin: '16px 0',
        }}
      >
        <Space size={16} wrap>
          <Form.Item label="Active">
            <Switch checked={active} onChange={handleActiveChange} />
          </Form.Item>
          <Form.Item label="Button and Input Block">
            <Switch checked={block} onChange={handleBlockChange} />
          </Form.Item>
          <Form.Item label="Size">
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Button Shape">
            <Radio.Group value={buttonShape} onChange={handleShapeButton}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="square">Square</Radio.Button>
              <Radio.Button value="round">Round</Radio.Button>
              <Radio.Button value="circle">Circle</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Avatar Shape">
            <Radio.Group value={avatarShape} onChange={handleAvatarShape}>
              <Radio.Button value="square">Square</Radio.Button>
              <Radio.Button value="circle">Circle</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Space>
      </Form>
    </>
  );
};
export default App;
`,description:"<p>Skeleton Button, Avatar, Input, Image and Node.</p>"}},{demo:{id:"components-skeleton-demo-children"},previewerProps:{title:"Contains sub component",filename:"components/skeleton/demo/children.tsx",jsx:`import { Button, Skeleton, Space } from 'antd';
import { useState } from 'react';
const App = () => {
  const [loading, setLoading] = useState(false);
  const showSkeleton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={16}
    >
      <Skeleton loading={loading}>
        <h4
          style={{
            marginBottom: 16,
          }}
        >
          Ant Design, a design language
        </h4>
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      </Skeleton>
      <Button onClick={showSkeleton} disabled={loading}>
        Show Skeleton
      </Button>
    </Space>
  );
};
export default App;
`,description:"<p>Skeleton contains sub component.</p>"}},{demo:{id:"components-skeleton-demo-list"},previewerProps:{title:"List",filename:"components/skeleton/demo/list.tsx",jsx:`import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Skeleton, Switch } from 'antd';
import React, { useState } from 'react';
const listData = Array.from({
  length: 3,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: \`ant design part \${i + 1}\`,
  avatar: 'https://joesch.moe/api/v1/random',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <>
    {React.createElement(icon, {
      style: {
        marginRight: 8,
      },
    })}
    {text}
  </>
);
const App = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <>
      <Switch
        checked={!loading}
        onChange={onChange}
        style={{
          marginBottom: 16,
        }}
      />
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={
              !loading
                ? [
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                  ]
                : undefined
            }
            extra={
              !loading && (
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              )
            }
          >
            <Skeleton loading={loading} active avatar>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};
export default App;
`,description:"<p>Use skeleton in list component.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"skeleton"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeleton"},(0,t.tZ)("span",{className:"icon icon-link"})),"Skeleton"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[5].value),(0,t.tZ)("th",null,n[6].value),(0,t.tZ)("th",null,n[7].value),(0,t.tZ)("th",null,n[8].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[9].value),(0,t.tZ)("td",null,n[10].value),(0,t.tZ)("td",null,n[11].value),(0,t.tZ)("td",null,n[12].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null,n[14].value),(0,t.tZ)("td",null,n[15].value,(0,t.tZ)(a.rU,{to:"#skeletonavatarprops"},n[16].value)),(0,t.tZ)("td",null,n[17].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[18].value),(0,t.tZ)("td",null,n[19].value),(0,t.tZ)("td",null,n[20].value),(0,t.tZ)("td",null,n[21].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[22].value),(0,t.tZ)("td",null,n[23].value),(0,t.tZ)("td",null,n[24].value,(0,t.tZ)(a.rU,{to:"#skeletonparagraphprops"},n[25].value)),(0,t.tZ)("td",null,n[26].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[27].value),(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null,n[29].value),(0,t.tZ)("td",null,n[30].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[31].value),(0,t.tZ)("td",null,n[32].value),(0,t.tZ)("td",null,n[33].value,(0,t.tZ)(a.rU,{to:"#skeletontitleprops"},n[34].value)),(0,t.tZ)("td",null,n[35].value)))),(0,t.tZ)("h3",{id:"skeletonavatarprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletonavatarprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonAvatarProps"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[36].value),(0,t.tZ)("th",null,n[37].value),(0,t.tZ)("th",null,n[38].value),(0,t.tZ)("th",null,n[39].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,n[42].value),(0,t.tZ)("td",null,n[43].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[44].value),(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[46].value),n[47].value,(0,t.tZ)("code",null,n[48].value)),(0,t.tZ)("td",null,n[49].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[50].value),(0,t.tZ)("td",null,n[51].value),(0,t.tZ)("td",null,n[52].value,(0,t.tZ)("code",null,n[53].value),n[54].value,(0,t.tZ)("code",null,n[55].value),n[56].value,(0,t.tZ)("code",null,n[57].value)),(0,t.tZ)("td",null,n[58].value)))),(0,t.tZ)("h3",{id:"skeletontitleprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletontitleprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonTitleProps"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[59].value),(0,t.tZ)("th",null,n[60].value),(0,t.tZ)("th",null,n[61].value),(0,t.tZ)("th",null,n[62].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[63].value),(0,t.tZ)("td",null,n[64].value),(0,t.tZ)("td",null,n[65].value),(0,t.tZ)("td",null,n[66].value)))),(0,t.tZ)("h3",{id:"skeletonparagraphprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletonparagraphprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonParagraphProps"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[67].value),(0,t.tZ)("th",null,n[68].value),(0,t.tZ)("th",null,n[69].value),(0,t.tZ)("th",null,n[70].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[71].value),(0,t.tZ)("td",null,n[72].value),(0,t.tZ)("td",null,n[73].value),(0,t.tZ)("td",null,n[74].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[75].value),(0,t.tZ)("td",null,n[76].value),(0,t.tZ)("td",null,n[77].value),(0,t.tZ)("td",null,n[78].value)))),(0,t.tZ)("h3",{id:"skeletonbuttonprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletonbuttonprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonButtonProps"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[79].value),(0,t.tZ)("th",null,n[80].value),(0,t.tZ)("th",null,n[81].value),(0,t.tZ)("th",null,n[82].value),(0,t.tZ)("th",null,n[83].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[84].value),(0,t.tZ)("td",null,n[85].value),(0,t.tZ)("td",null,n[86].value),(0,t.tZ)("td",null,n[87].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[88].value),(0,t.tZ)("td",null,n[89].value),(0,t.tZ)("td",null,n[90].value),(0,t.tZ)("td",null,n[91].value),(0,t.tZ)("td",null,n[92].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[93].value),(0,t.tZ)("td",null,n[94].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[95].value),n[96].value,(0,t.tZ)("code",null,n[97].value),n[98].value,(0,t.tZ)("code",null,n[99].value),n[100].value,(0,t.tZ)("code",null,n[101].value)),(0,t.tZ)("td",null,n[102].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[103].value),(0,t.tZ)("td",null,n[104].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[105].value),n[106].value,(0,t.tZ)("code",null,n[107].value),n[108].value,(0,t.tZ)("code",null,n[109].value)),(0,t.tZ)("td",null,n[110].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"skeletoninputprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletoninputprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonInputProps"),(0,t.tZ)(l.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[111].value),(0,t.tZ)("th",null,n[112].value),(0,t.tZ)("th",null,n[113].value),(0,t.tZ)("th",null,n[114].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[115].value),(0,t.tZ)("td",null,n[116].value),(0,t.tZ)("td",null,n[117].value),(0,t.tZ)("td",null,n[118].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[119].value),(0,t.tZ)("td",null,n[120].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[121].value),n[122].value,(0,t.tZ)("code",null,n[123].value),n[124].value,(0,t.tZ)("code",null,n[125].value)),(0,t.tZ)("td",null,n[126].value)))))))}o.default=d}}]);
