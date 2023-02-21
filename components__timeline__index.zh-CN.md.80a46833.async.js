"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2079],{49225:function(m,i,t){t.r(i);var c=t(2143),p=t(50250),v=t(59378),h=t(8910),u=t(74775),o=t(5937),a=t(2068),Z=t(74399),g=t(63942),E=t(16073),C=t(24628),x=t(19260),P=t(56140),d=t(5388),T=t(49545),f=t(6965),D=t(49706),O=t(95127),M=t(74418),A=t(73024),l=t(94065),r=t(67294),n=t(96923);function _(){var s=(0,l.eL)(),e=s.texts;return(0,n.tZ)(l.dY,null,(0,n.tZ)(r.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[1].value),(0,n.tZ)("li",null,e[2].value))),(0,n.tZ)(a.Z,{message:"5.2.0\u7248\u672C\u4E4B\u540E\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u66F4\u7B80\u5355\u7684\u7528\u6CD5 <Timeline items={[...]} /> \u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u4F7F\u60A8\u80FD\u5728\u5E94\u7528\u4E2D\u7F16\u5199\u66F4\u7B80\u5355\u7684\u4EE3\u7801\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u6211\u4EEC\u5F03\u7528\u4E86\u65E7\u7684\u7528\u6CD5\uFF0C\u5E76\u4E14\u5C06\u5728\u4E0B\u4E00\u4E2A major \u7248\u672C\u4E2D\u5220\u9664\u5B83\u3002"}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)(u.Z,{lang:"jsx"},e[3].value),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(d.Z,{items:[{demo:{id:"components-timeline-demo-basic"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/timeline/demo/basic.tsx",jsx:`import { Timeline } from 'antd';
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
`,description:"<p>\u57FA\u672C\u7684\u65F6\u95F4\u8F74\u3002</p>"}},{demo:{id:"components-timeline-demo-color"},previewerProps:{title:"\u5706\u5708\u989C\u8272",filename:"components/timeline/demo/color.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
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
`,description:"<p>\u5706\u5708\u989C\u8272\uFF0C\u7EFF\u8272\u7528\u4E8E\u5DF2\u5B8C\u6210\u3001\u6210\u529F\u72B6\u6001\uFF0C\u7EA2\u8272\u8868\u793A\u544A\u8B66\u6216\u9519\u8BEF\u72B6\u6001\uFF0C\u84DD\u8272\u53EF\u8868\u793A\u6B63\u5728\u8FDB\u884C\u6216\u5176\u4ED6\u9ED8\u8BA4\u72B6\u6001\uFF0C\u7070\u8272\u8868\u793A\u672A\u5B8C\u6210\u6216\u5931\u6548\u72B6\u6001\u3002</p>"}},{demo:{id:"components-timeline-demo-pending"},previewerProps:{title:"\u6700\u540E\u4E00\u4E2A\u53CA\u6392\u5E8F",filename:"components/timeline/demo/pending.tsx",jsx:`import { Button, Timeline } from 'antd';
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
`,description:"<p>\u5F53\u4EFB\u52A1\u72B6\u6001\u6B63\u5728\u53D1\u751F\uFF0C\u8FD8\u5728\u8BB0\u5F55\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u7528\u5E7D\u7075\u8282\u70B9\u6765\u8868\u793A\u5F53\u524D\u7684\u65F6\u95F4\u8282\u70B9\uFF0C\u5F53 pending \u4E3A\u771F\u503C\u65F6\u5C55\u793A\u5E7D\u7075\u8282\u70B9\uFF0C\u5982\u679C pending \u662F React \u5143\u7D20\u53EF\u7528\u4E8E\u5B9A\u5236\u8BE5\u8282\u70B9\u5185\u5BB9\uFF0C\u540C\u65F6 pendingDot \u5C06\u53EF\u4EE5\u7528\u4E8E\u5B9A\u5236\u5176\u8F74\u70B9\u3002reverse \u5C5E\u6027\u7528\u4E8E\u63A7\u5236\u8282\u70B9\u6392\u5E8F\uFF0C\u4E3A false \u65F6\u6309\u6B63\u5E8F\u6392\u5217\uFF0C\u4E3A true \u65F6\u6309\u5012\u5E8F\u6392\u5217\u3002</p>"}},{demo:{id:"components-timeline-demo-alternate"},previewerProps:{title:"\u4EA4\u66FF\u5C55\u73B0",filename:"components/timeline/demo/alternate.tsx",jsx:`import { ClockCircleOutlined } from '@ant-design/icons';
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
`,description:"<p>\u5185\u5BB9\u5728\u65F6\u95F4\u8F74\u4E24\u4FA7\u8F6E\u6D41\u51FA\u73B0\u3002</p>"}},{demo:{id:"components-timeline-demo-custom"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u65F6\u95F4\u8F74\u70B9",filename:"components/timeline/demo/custom.tsx",jsx:`import { ClockCircleOutlined } from '@ant-design/icons';
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
`,description:"<p>\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u56FE\u6807\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5143\u7D20\u3002</p>",style:`.timeline-clock-icon {
  font-size: 16px;
}`}},{demo:{id:"components-timeline-demo-right"},previewerProps:{title:"\u53F3\u4FA7\u65F6\u95F4\u8F74\u70B9",filename:"components/timeline/demo/right.tsx",jsx:`import { ClockCircleOutlined } from '@ant-design/icons';
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
`,description:"<p>\u65F6\u95F4\u8F74\u70B9\u53EF\u4EE5\u5728\u5185\u5BB9\u7684\u53F3\u8FB9\u3002</p>"}},{demo:{id:"components-timeline-demo-label"},previewerProps:{title:"\u6807\u7B7E",filename:"components/timeline/demo/label.tsx",jsx:`import { Radio, Timeline } from 'antd';
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
`,description:"<p>\u4F7F\u7528 <code>label</code> \u6807\u7B7E\u5355\u72EC\u5C55\u793A\u65F6\u95F4\u3002</p>"}},{demo:{id:"components-timeline-demo-wireframe"},previewerProps:{debug:!0,title:"\u7EBF\u6846\u98CE\u683C",filename:"components/timeline/demo/wireframe.tsx",jsx:`import { ConfigProvider, Timeline } from 'antd';
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
`,description:"<p>\u7EBF\u6846\u98CE\u683C\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"timeline"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#timeline"},(0,n.tZ)("span",{className:"icon icon-link"})),"Timeline"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[4].value),(0,n.tZ)("th",null,e[5].value),(0,n.tZ)("th",null,e[6].value),(0,n.tZ)("th",null,e[7].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[8].value),(0,n.tZ)("td",null,e[9].value,(0,n.tZ)("code",null,e[10].value),e[11].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[12].value),e[13].value,(0,n.tZ)("code",null,e[14].value),e[15].value,(0,n.tZ)("code",null,e[16].value)),(0,n.tZ)("td",null,e[17].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null,e[25].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null,e[29].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"#Items"},e[32].value),e[33].value),(0,n.tZ)("td",null,e[34].value)))),(0,n.tZ)("h3",{id:"items"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#items"},(0,n.tZ)("span",{className:"icon icon-link"})),"Items"),(0,n.tZ)("p",null,e[35].value),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[36].value),(0,n.tZ)("th",null,e[37].value),(0,n.tZ)("th",null,e[38].value),(0,n.tZ)("th",null,e[39].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[40].value),(0,n.tZ)("td",null,e[41].value,(0,n.tZ)("code",null,e[42].value),e[43].value,(0,n.tZ)("code",null,e[44].value),e[45].value,(0,n.tZ)("code",null,e[46].value),e[47].value,(0,n.tZ)("code",null,e[48].value),e[49].value),(0,n.tZ)("td",null,e[50].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[51].value))),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[52].value),(0,n.tZ)("td",null,e[53].value),(0,n.tZ)("td",null,e[54].value),(0,n.tZ)("td",null,e[55].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[56].value),(0,n.tZ)("td",null,e[57].value),(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null,e[59].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[60].value),(0,n.tZ)("td",null,e[61].value),(0,n.tZ)("td",null,e[62].value),(0,n.tZ)("td",null,e[63].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[64].value),(0,n.tZ)("td",null,e[65].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[66].value),e[67].value,(0,n.tZ)("code",null,e[68].value)),(0,n.tZ)("td",null,e[69].value)))))))}i.default=_}}]);
