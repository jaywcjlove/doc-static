"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6812],{6783:function(m,i,t){t.r(i);var c=t(2143),p=t(50250),v=t(59378),h=t(8910),a=t(74775),o=t(5937),d=t(2068),g=t(74399),Z=t(63942),C=t(16073),E=t(24628),f=t(19260),x=t(56140),r=t(5388),T=t(49545),P=t(6965),O=t(49706),b=t(95127),M=t(74418),D=t(73024),l=t(94065),s=t(67294),e=t(96923);function _(){var u=(0,l.eL)(),n=u.texts;return(0,e.tZ)(l.dY,null,(0,e.tZ)(s.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n[1].value),(0,e.tZ)("li",null,n[2].value))),(0,e.tZ)(d.Z,{message:"After version 5.2.0, we provide a simpler usage <Timeline items={[...]} /> with better performance and potential of writing simpler code style in your applications. Meanwhile, we deprecated the old usage in browser console, we will remove it in antd 6.0."}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)(a.Z,{lang:"jsx"},n[3].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(r.Z,{items:[{demo:{id:"components-timeline-demo-basic"},previewerProps:{title:"Basic",filename:"components/timeline/demo/basic.tsx",jsx:`import { Timeline } from 'antd';
const App = () => (
  <Timeline
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
);
export default App;
`,description:"<p>Basic timeline.</p>"}},{demo:{id:"components-timeline-demo-color"},previewerProps:{title:"Color",filename:"components/timeline/demo/color.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
const App = () => (
  <Timeline
    items={[
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'red',
        children: (
          <>
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </>
        ),
      },
      {
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: '#00CCFF',
        dot: <SmileOutlined />,
        children: <p>Custom color testing</p>,
      },
    ]}
  />
);
export default App;
`,description:"<p>Set the color of circles. <code>green</code> means completed or success status, <code>red</code> means warning or error, and <code>blue</code> means ongoing or other default status, <code>gray</code> for unfinished or disabled status.</p>"}},{demo:{id:"components-timeline-demo-pending"},previewerProps:{title:"Last node and Reversing",filename:"components/timeline/demo/pending.tsx",jsx:`import { Button, Timeline } from 'antd';
import { useState } from 'react';
const App = () => {
  const [reverse, setReverse] = useState(false);
  const handleClick = () => {
    setReverse(!reverse);
  };
  return (
    <div>
      <Timeline
        pending="Recording..."
        reverse={reverse}
        items={[
          {
            children: 'Create a services site 2015-09-01',
          },
          {
            children: 'Solve initial network problems 2015-09-01',
          },
          {
            children: 'Technical testing 2015-09-01',
          },
        ]}
      />
      <Button
        type="primary"
        style={{
          marginTop: 16,
        }}
        onClick={handleClick}
      >
        Toggle Reverse
      </Button>
    </div>
  );
};
export default App;
`,description:"<p>When the timeline is incomplete and ongoing, put a ghost node at last. Set <code>pending</code> as truthy value to enable displaying pending item. You can customize the pending content by passing a React Element. Meanwhile, <code>pendingDot={a React Element}</code> is used to customize the dot of the pending item. <code>reverse={true}</code> is used for reversing nodes.</p>"}},{demo:{id:"components-timeline-demo-alternate"},previewerProps:{title:"Alternate",filename:"components/timeline/demo/alternate.tsx",jsx:`import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
const App = () => (
  <Timeline
    mode="alternate"
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
        color: 'green',
      },
      {
        dot: (
          <ClockCircleOutlined
            style={{
              fontSize: '16px',
            }}
          />
        ),
        children: \`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\`,
      },
      {
        color: 'red',
        children: 'Network problems being solved 2015-09-01',
      },
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        dot: (
          <ClockCircleOutlined
            style={{
              fontSize: '16px',
            }}
          />
        ),
        children: 'Technical testing 2015-09-01',
      },
    ]}
  />
);
export default App;
`,description:"<p>Alternate timeline.</p>"}},{demo:{id:"components-timeline-demo-custom"},previewerProps:{title:"Custom",filename:"components/timeline/demo/custom.tsx",jsx:`import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
const App = () => (
  <Timeline
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
        color: 'red',
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
);
export default App;
`,description:"<p>Set a node as an icon or other custom element.</p>",style:`.timeline-clock-icon {
  font-size: 16px;
}`}},{demo:{id:"components-timeline-demo-right"},previewerProps:{title:"Right alternate",filename:"components/timeline/demo/right.tsx",jsx:`import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
const App = () => (
  <Timeline
    mode="right"
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        dot: (
          <ClockCircleOutlined
            style={{
              fontSize: '16px',
            }}
          />
        ),
        color: 'red',
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
);
export default App;
`,description:"<p>Right alternate timeline.</p>"}},{demo:{id:"components-timeline-demo-label"},previewerProps:{title:"Label",filename:"components/timeline/demo/label.tsx",jsx:`import { Radio, Timeline } from 'antd';
import { useState } from 'react';
const App = () => {
  const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline
        mode={mode}
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>Use <code>label</code> show time alone.</p>"}},{demo:{id:"components-timeline-demo-wireframe"},previewerProps:{debug:!0,title:"Wireframe",filename:"components/timeline/demo/wireframe.tsx",jsx:`import { ConfigProvider, Timeline } from 'antd';
const App = () => (
  <ConfigProvider
    theme={{
      token: {
        wireframe: true,
      },
    }}
  >
    <Timeline
      items={[
        {
          children: 'Create a services site 2015-09-01',
        },
        {
          children: 'Solve initial network problems 2015-09-01',
        },
        {
          children: 'Technical testing 2015-09-01',
        },
        {
          children: 'Network problems being solved 2015-09-01',
        },
      ]}
    />
  </ConfigProvider>
);
export default App;
`,description:"<p>Wireframe.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("h3",{id:"timeline"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#timeline"},(0,e.tZ)("span",{className:"icon icon-link"})),"Timeline"),(0,e.tZ)(o.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[4].value),(0,e.tZ)("th",null,n[5].value),(0,e.tZ)("th",null,n[6].value),(0,e.tZ)("th",null,n[7].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[8].value),(0,e.tZ)("td",null,n[9].value,(0,e.tZ)("code",null,n[10].value),n[11].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[12].value),n[13].value,(0,e.tZ)("code",null,n[14].value),n[15].value,(0,e.tZ)("code",null,n[16].value)),(0,e.tZ)("td",null,n[17].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[18].value),(0,e.tZ)("td",null,n[19].value),(0,e.tZ)("td",null,n[20].value),(0,e.tZ)("td",null,n[21].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[22].value),(0,e.tZ)("td",null,n[23].value),(0,e.tZ)("td",null,n[24].value),(0,e.tZ)("td",null,n[25].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[26].value),(0,e.tZ)("td",null,n[27].value),(0,e.tZ)("td",null,n[28].value),(0,e.tZ)("td",null,n[29].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[30].value),(0,e.tZ)("td",null,n[31].value),(0,e.tZ)("td",null,(0,e.tZ)(l.rU,{to:"#Items"},n[32].value),n[33].value),(0,e.tZ)("td",null,n[34].value)))),(0,e.tZ)("h3",{id:"items"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#items"},(0,e.tZ)("span",{className:"icon icon-link"})),"Items"),(0,e.tZ)("p",null,n[35].value),(0,e.tZ)(o.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[36].value),(0,e.tZ)("th",null,n[37].value),(0,e.tZ)("th",null,n[38].value),(0,e.tZ)("th",null,n[39].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[40].value),(0,e.tZ)("td",null,n[41].value,(0,e.tZ)("code",null,n[42].value),n[43].value,(0,e.tZ)("code",null,n[44].value),n[45].value,(0,e.tZ)("code",null,n[46].value),n[47].value,(0,e.tZ)("code",null,n[48].value),n[49].value),(0,e.tZ)("td",null,n[50].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[51].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[52].value),(0,e.tZ)("td",null,n[53].value),(0,e.tZ)("td",null,n[54].value),(0,e.tZ)("td",null,n[55].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[56].value),(0,e.tZ)("td",null,n[57].value),(0,e.tZ)("td",null,n[58].value),(0,e.tZ)("td",null,n[59].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[60].value),(0,e.tZ)("td",null,n[61].value),(0,e.tZ)("td",null,n[62].value),(0,e.tZ)("td",null,n[63].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[64].value),(0,e.tZ)("td",null,n[65].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[66].value),n[67].value,(0,e.tZ)("code",null,n[68].value)),(0,e.tZ)("td",null,n[69].value)))))))}i.default=_}}]);
