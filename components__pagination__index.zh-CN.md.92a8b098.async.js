"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6299],{21713:function(s,l,e){e.r(l);var m=e(2143),p=e(50250),Z=e(59378),v=e(8910),o=e(74775),u=e(5937),g=e(2068),h=e(74399),P=e(63942),c=e(16073),E=e(24628),x=e(19260),C=e(56140),i=e(5388),f=e(49545),A=e(6965),D=e(49706),M=e(95127),O=e(74418),w=e(73024),a=e(94065),d=e(67294),n=e(96923);function _(){var r=(0,a.eL)(),t=r.texts;return(0,n.tZ)(a.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,t[1].value),(0,n.tZ)("li",null,t[2].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(i.Z,{items:[{demo:{id:"components-pagination-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/pagination/demo/basic.tsx",jsx:`import { Pagination } from 'antd';
const App = () => <Pagination defaultCurrent={1} total={50} />;
export default App;
`,description:"<p>\u57FA\u7840\u5206\u9875\u3002</p>"}},{demo:{id:"components-pagination-demo-more"},previewerProps:{title:"\u66F4\u591A",filename:"components/pagination/demo/more.tsx",jsx:`import { Pagination } from 'antd';
const App = () => <Pagination defaultCurrent={6} total={500} />;
export default App;
`,description:"<p>\u66F4\u591A\u5206\u9875\u3002</p>"}},{demo:{id:"components-pagination-demo-changer"},previewerProps:{title:"\u6539\u53D8",filename:"components/pagination/demo/changer.tsx",jsx:`import { Pagination } from 'antd';
const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};
const App = () => (
  <>
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    <br />
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
      disabled
    />
  </>
);
export default App;
`,description:"<p>\u6539\u53D8\u6BCF\u9875\u663E\u793A\u6761\u76EE\u6570\u3002</p>"}},{demo:{id:"components-pagination-demo-jump"},previewerProps:{title:"\u8DF3\u8F6C",filename:"components/pagination/demo/jump.tsx",jsx:`import { Pagination } from 'antd';
const onChange = (pageNumber) => {
  console.log('Page: ', pageNumber);
};
const App = () => (
  <>
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    <br />
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
  </>
);
export default App;
`,description:"<p>\u5FEB\u901F\u8DF3\u8F6C\u5230\u67D0\u4E00\u9875\u3002</p>"}},{demo:{id:"components-pagination-demo-mini"},previewerProps:{title:"\u8FF7\u4F60",filename:"components/pagination/demo/mini.tsx",jsx:`import { Pagination } from 'antd';
const showTotal = (total) => \`Total \${total} items\`;
const App = () => (
  <>
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
    <Pagination
      size="small"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
  </>
);
export default App;
`,description:"<p>\u8FF7\u4F60\u7248\u672C\u3002</p>",style:`#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}`}},{demo:{id:"components-pagination-demo-simple"},previewerProps:{title:"\u7B80\u6D01",filename:"components/pagination/demo/simple.tsx",jsx:`import { Pagination } from 'antd';
const App = () => (
  <>
    <Pagination simple defaultCurrent={2} total={50} />
    <br />
    <Pagination disabled simple defaultCurrent={2} total={50} />
  </>
);
export default App;
`,description:"<p>\u7B80\u5355\u7684\u7FFB\u9875\u3002</p>"}},{demo:{id:"components-pagination-demo-controlled"},previewerProps:{title:"\u53D7\u63A7",filename:"components/pagination/demo/controlled.tsx",jsx:`import { Pagination } from 'antd';
import { useState } from 'react';
const App = () => {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return <Pagination current={current} onChange={onChange} total={50} />;
};
export default App;
`,description:"<p>\u53D7\u63A7\u5236\u7684\u9875\u7801\u3002</p>"}},{demo:{id:"components-pagination-demo-total"},previewerProps:{title:"\u603B\u6570",filename:"components/pagination/demo/total.tsx",jsx:`import { Pagination } from 'antd';
const App = () => (
  <>
    <Pagination
      total={85}
      showTotal={(total) => \`Total \${total} items\`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
  </>
);
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>showTotal</code> \u5C55\u793A\u603B\u5171\u6709\u591A\u5C11\u6570\u636E\u3002</p>"}},{demo:{id:"components-pagination-demo-all"},previewerProps:{title:"\u5168\u90E8\u5C55\u793A",filename:"components/pagination/demo/all.tsx",jsx:`import { Pagination } from 'antd';
const App = () => (
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => \`Total \${total} items\`}
  />
);
export default App;
`,description:"<p>\u5C55\u793A\u6240\u6709\u914D\u7F6E\u9009\u9879\u3002</p>"}},{demo:{id:"components-pagination-demo-itemrender"},previewerProps:{title:"\u4E0A\u4E00\u6B65\u548C\u4E0B\u4E00\u6B65",filename:"components/pagination/demo/itemRender.tsx",jsx:`import { Pagination } from 'antd';
const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};
const App = () => <Pagination total={500} itemRender={itemRender} />;
export default App;
`,description:"<p>\u4FEE\u6539\u4E0A\u4E00\u6B65\u548C\u4E0B\u4E00\u6B65\u4E3A\u6587\u5B57\u94FE\u63A5\u3002</p>"}},{demo:{id:"components-pagination-demo-wireframe"},previewerProps:{debug:!0,title:"\u7EBF\u6846\u98CE\u683C",filename:"components/pagination/demo/wireframe.tsx",jsx:`import { ConfigProvider, Pagination } from 'antd';
const App = () => (
  <ConfigProvider
    theme={{
      token: {
        wireframe: true,
      },
    }}
  >
    <Pagination showSizeChanger defaultCurrent={3} total={500} />
    <br />
    <Pagination showSizeChanger defaultCurrent={3} total={500} disabled />
  </ConfigProvider>
);
export default App;
`,description:"<p>\u7EBF\u6846\u5316\u6837\u5F0F\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(o.Z,{lang:"jsx"},t[3].value),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[33].value),(0,n.tZ)("td",null,t[34].value),(0,n.tZ)("td",null,t[35].value),(0,n.tZ)("td",null,t[36].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[37].value),(0,n.tZ)("td",null,t[38].value),(0,n.tZ)("td",null,t[39].value),(0,n.tZ)("td",null,t[40].value,(0,n.tZ)("code",null,t[41].value),t[42].value,(0,n.tZ)("code",null,t[43].value),t[44].value,(0,n.tZ)("code",null,t[45].value),t[46].value,(0,n.tZ)("code",null,t[47].value),t[48].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value),(0,n.tZ)("td",null,t[51].value),(0,n.tZ)("td",null,t[52].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[53].value),(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null,t[55].value),(0,n.tZ)("td",null,t[56].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[57].value),(0,n.tZ)("td",null,t[58].value),(0,n.tZ)("td",null,t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[61].value),(0,n.tZ)("td",null,t[62].value,(0,n.tZ)("code",null,t[63].value),t[64].value,(0,n.tZ)("code",null,t[65].value),t[66].value),(0,n.tZ)("td",null,t[67].value),(0,n.tZ)("td",null,t[68].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[69].value),(0,n.tZ)("td",null,t[70].value),(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[73].value),(0,n.tZ)("td",null,t[74].value),(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[77].value),(0,n.tZ)("td",null,t[78].value),(0,n.tZ)("td",null,t[79].value),(0,n.tZ)("td",null,t[80].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null,t[82].value,(0,n.tZ)("code",null,t[83].value),t[84].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[85].value),t[86].value,(0,n.tZ)("code",null,t[87].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[88].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[89].value),(0,n.tZ)("td",null,t[90].value),(0,n.tZ)("td",null,t[91].value),(0,n.tZ)("td",null,t[92].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[93].value),(0,n.tZ)("td",null,t[94].value,(0,n.tZ)("code",null,t[95].value),t[96].value),(0,n.tZ)("td",null,t[97].value),(0,n.tZ)("td",null,t[98].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[99].value),(0,n.tZ)("td",null,t[100].value),(0,n.tZ)("td",null,t[101].value),(0,n.tZ)("td",null,t[102].value),(0,n.tZ)("td",null)))))))}l.default=_}}]);
