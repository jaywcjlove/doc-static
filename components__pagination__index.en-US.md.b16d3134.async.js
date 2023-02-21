"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4507],{9884:function(s,l,e){e.r(l);var m=e(2143),p=e(50250),Z=e(59378),v=e(8910),o=e(74775),i=e(5937),g=e(2068),h=e(74399),P=e(63942),c=e(16073),x=e(24628),C=e(19260),f=e(56140),u=e(5388),E=e(49545),M=e(6965),A=e(49706),w=e(95127),D=e(74418),O=e(73024),a=e(94065),d=e(67294),n=e(96923);function _(){var r=(0,a.eL)(),t=r.texts;return(0,n.tZ)(a.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value,(0,n.tZ)("code",null,t[1].value),t[2].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,t[3].value),(0,n.tZ)("li",null,t[4].value)),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(u.Z,{items:[{demo:{id:"components-pagination-demo-basic"},previewerProps:{title:"Basic",filename:"components/pagination/demo/basic.tsx",jsx:`import { Pagination } from 'antd';
const App = () => <Pagination defaultCurrent={1} total={50} />;
export default App;
`,description:"<p>Basic pagination.</p>"}},{demo:{id:"components-pagination-demo-more"},previewerProps:{title:"More",filename:"components/pagination/demo/more.tsx",jsx:`import { Pagination } from 'antd';
const App = () => <Pagination defaultCurrent={6} total={500} />;
export default App;
`,description:"<p>More pages.</p>"}},{demo:{id:"components-pagination-demo-changer"},previewerProps:{title:"Changer",filename:"components/pagination/demo/changer.tsx",jsx:`import { Pagination } from 'antd';
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
`,description:"<p>Change <code>pageSize</code>.</p>"}},{demo:{id:"components-pagination-demo-jump"},previewerProps:{title:"Jumper",filename:"components/pagination/demo/jump.tsx",jsx:`import { Pagination } from 'antd';
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
`,description:"<p>Jump to a page directly.</p>"}},{demo:{id:"components-pagination-demo-mini"},previewerProps:{title:"Mini size",filename:"components/pagination/demo/mini.tsx",jsx:`import { Pagination } from 'antd';
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
`,description:"<p>Mini size pagination.</p>",style:`#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}`}},{demo:{id:"components-pagination-demo-simple"},previewerProps:{title:"Simple mode",filename:"components/pagination/demo/simple.tsx",jsx:`import { Pagination } from 'antd';
const App = () => (
  <>
    <Pagination simple defaultCurrent={2} total={50} />
    <br />
    <Pagination disabled simple defaultCurrent={2} total={50} />
  </>
);
export default App;
`,description:"<p>Simple mode.</p>"}},{demo:{id:"components-pagination-demo-controlled"},previewerProps:{title:"Controlled",filename:"components/pagination/demo/controlled.tsx",jsx:`import { Pagination } from 'antd';
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
`,description:"<p>Controlled page number.</p>"}},{demo:{id:"components-pagination-demo-total"},previewerProps:{title:"Total number",filename:"components/pagination/demo/total.tsx",jsx:`import { Pagination } from 'antd';
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
`,description:"<p>You can show the total number of data by setting <code>showTotal</code>.</p>"}},{demo:{id:"components-pagination-demo-all"},previewerProps:{title:"Show All",filename:"components/pagination/demo/all.tsx",jsx:`import { Pagination } from 'antd';
const App = () => (
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => \`Total \${total} items\`}
  />
);
export default App;
`,description:"<p>Show all configured prop.</p>"}},{demo:{id:"components-pagination-demo-itemrender"},previewerProps:{title:"Prev and next",filename:"components/pagination/demo/itemRender.tsx",jsx:`import { Pagination } from 'antd';
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
`,description:"<p>Use text link for prev and next button.</p>"}},{demo:{id:"components-pagination-demo-wireframe"},previewerProps:{debug:!0,title:"Wireframe",filename:"components/pagination/demo/wireframe.tsx",jsx:`import { ConfigProvider, Pagination } from 'antd';
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
`,description:"<p>Wireframe style.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(o.Z,{lang:"jsx"},t[5].value),(0,n.tZ)(i.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value),(0,n.tZ)("th",null,t[9].value),(0,n.tZ)("th",null,t[10].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null,t[33].value),(0,n.tZ)("td",null,t[34].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[35].value),(0,n.tZ)("td",null,t[36].value),(0,n.tZ)("td",null,t[37].value),(0,n.tZ)("td",null,t[38].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[39].value),(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value,(0,n.tZ)("code",null,t[43].value),t[44].value,(0,n.tZ)("code",null,t[45].value),t[46].value,(0,n.tZ)("code",null,t[47].value),t[48].value,(0,n.tZ)("code",null,t[49].value),t[50].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[51].value),(0,n.tZ)("td",null,t[52].value,(0,n.tZ)("code",null,t[53].value),t[54].value,(0,n.tZ)("code",null,t[55].value),t[56].value),(0,n.tZ)("td",null,t[57].value),(0,n.tZ)("td",null,t[58].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null,t[61].value),(0,n.tZ)("td",null,t[62].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[63].value),(0,n.tZ)("td",null,t[64].value),(0,n.tZ)("td",null,t[65].value),(0,n.tZ)("td",null,t[66].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[67].value),(0,n.tZ)("td",null,t[68].value,(0,n.tZ)("code",null,t[69].value),t[70].value,(0,n.tZ)("code",null,t[71].value)),(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,t[73].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[74].value),(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null,t[77].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[78].value),(0,n.tZ)("td",null,t[79].value),(0,n.tZ)("td",null,t[80].value),(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[82].value),(0,n.tZ)("td",null,t[83].value),(0,n.tZ)("td",null,t[84].value),(0,n.tZ)("td",null,t[85].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[86].value),(0,n.tZ)("td",null,t[87].value,(0,n.tZ)("code",null,t[88].value),t[89].value,(0,n.tZ)("code",null,t[90].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[91].value),t[92].value,(0,n.tZ)("code",null,t[93].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[94].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[95].value),(0,n.tZ)("td",null,t[96].value),(0,n.tZ)("td",null,t[97].value),(0,n.tZ)("td",null,t[98].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[99].value),(0,n.tZ)("td",null,t[100].value,(0,n.tZ)("code",null,t[101].value),t[102].value),(0,n.tZ)("td",null,t[103].value),(0,n.tZ)("td",null,t[104].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[105].value),(0,n.tZ)("td",null,t[106].value,(0,n.tZ)("code",null,t[107].value),t[108].value),(0,n.tZ)("td",null,t[109].value),(0,n.tZ)("td",null,t[110].value),(0,n.tZ)("td",null)))))))}l.default=_}}]);
