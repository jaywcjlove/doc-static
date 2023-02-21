"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7579],{38461:function(i,r,t){t.r(r);var p=t(2143),_=t(50250),c=t(59378),m=t(8910),v=t(74775),l=t(5937),Z=t(2068),P=t(74399),g=t(63942),h=t(16073),x=t(24628),f=t(19260),E=t(56140),s=t(5388),A=t(49545),O=t(6965),D=t(49706),M=t(95127),C=t(74418),w=t(73024),o=t(94065),u=t(67294),e=t(96923);function a(){var d=(0,o.eL)(),n=d.texts;return(0,e.tZ)(o.dY,null,(0,e.tZ)(u.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,e.tZ)("p",null,n[1].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n[2].value),(0,e.tZ)("li",null,n[3].value)),(0,e.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,e.tZ)(s.Z,{items:[{demo:{id:"components-progress-demo-line"},previewerProps:{title:"\u8FDB\u5EA6\u6761",filename:"components/progress/demo/line.tsx",jsx:`import { Progress } from 'antd';
const App = () => (
  <>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </>
);
export default App;
`,description:"<p>\u6807\u51C6\u7684\u8FDB\u5EA6\u6761\u3002</p>"}},{demo:{id:"components-progress-demo-circle"},previewerProps:{title:"\u8FDB\u5EA6\u5708",filename:"components/progress/demo/circle.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </Space>
);
export default App;
`,description:"<p>\u5708\u5F62\u7684\u8FDB\u5EA6\u3002</p>"}},{demo:{id:"components-progress-demo-line-mini"},previewerProps:{title:"\u5C0F\u578B\u8FDB\u5EA6\u6761",filename:"components/progress/demo/line-mini.tsx",jsx:`import { Progress } from 'antd';
const App = () => (
  <div
    style={{
      width: 170,
    }}
  >
    <Progress percent={30} size="small" />
    <Progress percent={50} size="small" status="active" />
    <Progress percent={70} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </div>
);
export default App;
`,description:"<p>\u9002\u5408\u653E\u5728\u8F83\u72ED\u7A84\u7684\u533A\u57DF\u5185\u3002</p>"}},{demo:{id:"components-progress-demo-circle-micro"},previewerProps:{title:"\u54CD\u5E94\u5F0F\u8FDB\u5EA6\u5708",filename:"components/progress/demo/circle-micro.tsx",jsx:`import { Progress } from 'antd';
const App = () => (
  <>
    <Progress
      type="circle"
      trailColor="#e6f4ff"
      percent={60}
      strokeWidth={20}
      width={14}
      format={(number) => \`\u8FDB\u884C\u4E2D\uFF0C\u5DF2\u5B8C\u6210\${number}%\`}
    />
    <span
      style={{
        marginLeft: 8,
      }}
    >
      \u4EE3\u7801\u53D1\u5E03
    </span>
  </>
);
export default App;
`,description:"<p>\u54CD\u5E94\u5F0F\u7684\u5708\u5F62\u8FDB\u5EA6\uFF0C\u5F53 <code>width</code> \u5C0F\u4E8E\u7B49\u4E8E 20 \u7684\u65F6\u5019\uFF0C\u8FDB\u5EA6\u4FE1\u606F\u5C06\u4E0D\u4F1A\u663E\u793A\u5728\u8FDB\u5EA6\u5708\u91CC\u9762\uFF0C\u800C\u662F\u4EE5 Tooltip \u7684\u5F62\u5F0F\u663E\u793A\u3002</p>"}},{demo:{id:"components-progress-demo-circle-mini"},previewerProps:{title:"\u5C0F\u578B\u8FDB\u5EA6\u5708",filename:"components/progress/demo/circle-mini.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Progress type="circle" percent={30} width={80} />
    <Progress type="circle" percent={70} width={80} status="exception" />
    <Progress type="circle" percent={100} width={80} />
  </Space>
);
export default App;
`,description:"<p>\u5C0F\u4E00\u53F7\u7684\u5708\u5F62\u8FDB\u5EA6\u3002</p>"}},{demo:{id:"components-progress-demo-circle-dynamic"},previewerProps:{title:"\u8FDB\u5EA6\u5708\u52A8\u6001\u5C55\u793A",filename:"components/progress/demo/circle-dynamic.tsx",jsx:`import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';
import { useState } from 'react';
const App = () => {
  const [percent, setPercent] = useState(0);
  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };
  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };
  return (
    <>
      <Progress
        type="circle"
        percent={percent}
        style={{
          marginRight: 8,
        }}
      />
      <Button.Group>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </>
  );
};
export default App;
`,description:"<p>\u4F1A\u52A8\u7684\u8FDB\u5EA6\u6761\u624D\u662F\u597D\u8FDB\u5EA6\u6761\u3002</p>"}},{demo:{id:"components-progress-demo-dynamic"},previewerProps:{title:"\u52A8\u6001\u5C55\u793A",filename:"components/progress/demo/dynamic.tsx",jsx:`import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';
import { useState } from 'react';
const App = () => {
  const [percent, setPercent] = useState(0);
  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };
  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };
  return (
    <>
      <Progress percent={percent} />
      <Button.Group>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Button.Group>
    </>
  );
};
export default App;
`,description:"<p>\u4F1A\u52A8\u7684\u8FDB\u5EA6\u6761\u624D\u662F\u597D\u8FDB\u5EA6\u6761\u3002</p>"}},{demo:{id:"components-progress-demo-format"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u6587\u5B57\u683C\u5F0F",filename:"components/progress/demo/format.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Progress type="circle" percent={75} format={(percent) => \`\${percent} Days\`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </Space>
);
export default App;
`,description:"<p><code>format</code> \u5C5E\u6027\u6307\u5B9A\u683C\u5F0F\u3002</p>"}},{demo:{id:"components-progress-demo-dashboard"},previewerProps:{title:"\u4EEA\u8868\u76D8",filename:"components/progress/demo/dashboard.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <Space wrap>
    <Progress type="dashboard" percent={75} />
    <Progress type="dashboard" percent={75} gapDegree={30} />
  </Space>
);
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>type=dashboard</code>\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u5B9E\u73B0\u4EEA\u8868\u76D8\u6837\u5F0F\u7684\u8FDB\u5EA6\u6761\u3002\u82E5\u60F3\u8981\u4FEE\u6539\u7F3A\u53E3\u7684\u89D2\u5EA6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E <code>gapDegree</code> \u4E3A\u4F60\u60F3\u8981\u7684\u503C\u3002</p>"}},{demo:{id:"components-progress-demo-segment"},previewerProps:{title:"\u5206\u6BB5\u8FDB\u5EA6\u6761",filename:"components/progress/demo/segment.tsx",jsx:`import { Progress, Space, Tooltip } from 'antd';
const App = () => (
  <>
    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress
        percent={60}
        success={{
          percent: 30,
        }}
      />
    </Tooltip>
    <Space wrap>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress
          percent={60}
          success={{
            percent: 30,
          }}
          type="circle"
        />
      </Tooltip>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress
          percent={60}
          success={{
            percent: 30,
          }}
          type="dashboard"
        />
      </Tooltip>
    </Space>
  </>
);
export default App;
`,description:'<p>\u6807\u51C6\u7684\u8FDB\u5EA6\u6761\u3002<code>type="circle|dashboard"</code> \u65F6\u4E0D\u652F\u6301\u5206\u6BB5\u989C\u8272\u3002</p>'}},{demo:{id:"components-progress-demo-linecap"},previewerProps:{title:"\u8FB9\u7F18\u5F62\u72B6",filename:"components/progress/demo/linecap.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <>
    <Progress strokeLinecap="butt" percent={75} />
    <Space wrap>
      <Progress strokeLinecap="butt" type="circle" percent={75} />
      <Progress strokeLinecap="butt" type="dashboard" percent={75} />
    </Space>
  </>
);
export default App;
`,description:'<p>\u901A\u8FC7\u8BBE\u5B9A <code>strokeLinecap="butt"</code> \u53EF\u4EE5\u8C03\u6574\u8FDB\u5EA6\u6761\u8FB9\u7F18\u7684\u5F62\u72B6\u4E3A\u65B9\u5F62\uFF0C\u8BE6\u89C1 <a href="https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap">stroke-linecap</a>\u3002</p>'}},{demo:{id:"components-progress-demo-gradient-line"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6E10\u53D8\u8272",filename:"components/progress/demo/gradient-line.tsx",jsx:`import { Progress, Space } from 'antd';
const App = () => (
  <>
    <Progress
      percent={99.9}
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
    />
    <Progress
      percent={99.9}
      status="active"
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
    />
    <Space wrap>
      <Progress
        type="circle"
        percent={90}
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
      <Progress
        type="circle"
        percent={100}
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
    </Space>
  </>
);
export default App;
`,description:"<p><code>linear-gradient</code> \u7684\u5C01\u88C5\u3002\u63A8\u8350\u53EA\u4F20\u4E24\u79CD\u989C\u8272\u3002</p>"}},{demo:{id:"components-progress-demo-steps"},previewerProps:{title:"\u6B65\u9AA4\u8FDB\u5EA6\u6761",filename:"components/progress/demo/steps.tsx",jsx:`import { green, red } from '@ant-design/colors';
import { Progress } from 'antd';
const App = () => (
  <>
    <Progress percent={50} steps={3} />
    <br />
    <Progress percent={30} steps={5} />
    <br />
    <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
    <br />
    <Progress percent={60} steps={5} strokeColor={[green[6], green[6], red[5]]} />
  </>
);
export default App;
`,description:"<p>\u5E26\u6B65\u9AA4\u7684\u8FDB\u5EA6\u6761\u3002</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("p",null,n[4].value),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[5].value),(0,e.tZ)("th",null,n[6].value),(0,e.tZ)("th",null,n[7].value),(0,e.tZ)("th",null,n[8].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[9].value),(0,e.tZ)("td",null,n[10].value),(0,e.tZ)("td",null,n[11].value),(0,e.tZ)("td",null,n[12].value,(0,e.tZ)("code",null,n[13].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[14].value),(0,e.tZ)("td",null,n[15].value),(0,e.tZ)("td",null,n[16].value),(0,e.tZ)("td",null,n[17].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[18].value),(0,e.tZ)("td",null,n[19].value),(0,e.tZ)("td",null,n[20].value),(0,e.tZ)("td",null,n[21].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[22].value),(0,e.tZ)("td",null,n[23].value,(0,e.tZ)("code",null,n[24].value),n[25].value,(0,e.tZ)("code",null,n[26].value),n[27].value,(0,e.tZ)("code",null,n[28].value),n[29].value,(0,e.tZ)("code",null,n[30].value),n[31].value),(0,e.tZ)("td",null,n[32].value),(0,e.tZ)("td",null,n[33].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[34].value),(0,e.tZ)("td",null,n[35].value),(0,e.tZ)("td",null,n[36].value),(0,e.tZ)("td",null,n[37].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[38].value),(0,e.tZ)("td",null,n[39].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[40].value),n[41].value,(0,e.tZ)("code",null,n[42].value),n[43].value,(0,e.tZ)("code",null,n[44].value),n[45].value,(0,e.tZ)("a",{href:"https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap"},n[46].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[47].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[48].value),(0,e.tZ)("td",null,n[49].value),(0,e.tZ)("td",null,n[50].value),(0,e.tZ)("td",null,n[51].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[52].value),(0,e.tZ)("td",null,n[53].value),(0,e.tZ)("td",null,n[54].value),(0,e.tZ)("td",null,n[55].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[56].value),(0,e.tZ)("td",null,n[57].value,(0,e.tZ)("code",null,n[58].value),n[59].value,(0,e.tZ)("code",null,n[60].value),n[61].value,(0,e.tZ)("code",null,n[62].value)),(0,e.tZ)("td",null,n[63].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[64].value))))),(0,e.tZ)("h3",{id:"typeline"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#typeline"},(0,e.tZ)("span",{className:"icon icon-link"})),(0,e.tZ)("code",null,n[65].value)),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[66].value),(0,e.tZ)("th",null,n[67].value),(0,e.tZ)("th",null,n[68].value),(0,e.tZ)("th",null,n[69].value),(0,e.tZ)("th",null,n[70].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[71].value),(0,e.tZ)("td",null,n[72].value),(0,e.tZ)("td",null,n[73].value),(0,e.tZ)("td",null,n[74].value),(0,e.tZ)("td",null,n[75].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[76].value),(0,e.tZ)("td",null,n[77].value,(0,e.tZ)("code",null,n[78].value),n[79].value),(0,e.tZ)("td",null,n[80].value),(0,e.tZ)("td",null,n[81].value),(0,e.tZ)("td",null,n[82].value,(0,e.tZ)("code",null,n[83].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[84].value),(0,e.tZ)("td",null,n[85].value),(0,e.tZ)("td",null,n[86].value),(0,e.tZ)("td",null,n[87].value),(0,e.tZ)("td",null,n[88].value)))),(0,e.tZ)("h3",{id:"typecircle"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#typecircle"},(0,e.tZ)("span",{className:"icon icon-link"})),(0,e.tZ)("code",null,n[89].value)),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[90].value),(0,e.tZ)("th",null,n[91].value),(0,e.tZ)("th",null,n[92].value),(0,e.tZ)("th",null,n[93].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[94].value),(0,e.tZ)("td",null,n[95].value),(0,e.tZ)("td",null,n[96].value),(0,e.tZ)("td",null,n[97].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[98].value),(0,e.tZ)("td",null,n[99].value),(0,e.tZ)("td",null,n[100].value),(0,e.tZ)("td",null,n[101].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[102].value),(0,e.tZ)("td",null,n[103].value),(0,e.tZ)("td",null,n[104].value),(0,e.tZ)("td",null,n[105].value)))),(0,e.tZ)("h3",{id:"typedashboard"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#typedashboard"},(0,e.tZ)("span",{className:"icon icon-link"})),(0,e.tZ)("code",null,n[106].value)),(0,e.tZ)(l.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[107].value),(0,e.tZ)("th",null,n[108].value),(0,e.tZ)("th",null,n[109].value),(0,e.tZ)("th",null,n[110].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[111].value),(0,e.tZ)("td",null,n[112].value),(0,e.tZ)("td",null,n[113].value),(0,e.tZ)("td",null,n[114].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[115].value),(0,e.tZ)("td",null,n[116].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[117].value),n[118].value,(0,e.tZ)("code",null,n[119].value),n[120].value,(0,e.tZ)("code",null,n[121].value),n[122].value,(0,e.tZ)("code",null,n[123].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[124].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[125].value),(0,e.tZ)("td",null,n[126].value),(0,e.tZ)("td",null,n[127].value),(0,e.tZ)("td",null,n[128].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[129].value),(0,e.tZ)("td",null,n[130].value),(0,e.tZ)("td",null,n[131].value),(0,e.tZ)("td",null,n[132].value)))))))}r.default=a}}]);
