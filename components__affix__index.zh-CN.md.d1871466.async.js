"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8273],{3165:function(r,_,e){e.r(_);var m=e(2143),f=e(50250),p=e(59378),x=e(8910),i=e(74775),o=e(5937),v=e(2068),h=e(74399),E=e(63942),g=e(16073),c=e(24628),Z=e(19260),A=e(56140),a=e(5388),D=e(49545),B=e(6965),P=e(49706),M=e(95127),O=e(74418),C=e(73024),u=e(94065),l=e(67294),n=e(96923);function d(){var s=(0,u.eL)(),t=s.texts;return(0,n.tZ)(u.dY,null,(0,n.tZ)(l.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("p",null,t[2].value),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(a.Z,{items:[{demo:{id:"components-affix-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/affix/demo/basic.tsx",jsx:`import { Affix, Button } from 'antd';
import { useState } from 'react';
const App = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </>
  );
};
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-affix-demo-on-change"},previewerProps:{title:"\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03",filename:"components/affix/demo/on-change.tsx",jsx:`import { Affix, Button } from 'antd';
const App = () => (
  <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u83B7\u5F97\u662F\u5426\u56FA\u5B9A\u7684\u72B6\u6001\u3002</p>"}},{demo:{id:"components-affix-demo-target"},previewerProps:{title:"\u6EDA\u52A8\u5BB9\u5668",filename:"components/affix/demo/target.tsx",jsx:`import { Affix, Button } from 'antd';
import { useState } from 'react';
const App = () => {
  const [container, setContainer] = useState(null);
  return (
    <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>\u7528 <code>target</code> \u8BBE\u7F6E <code>Affix</code> \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u9ED8\u8BA4\u4E3A <code>window</code>\u3002</p>",style:`#components-affix-demo-target .scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}`}},{demo:{id:"components-affix-demo-debug"},previewerProps:{debug:!0,title:"\u8C03\u6574\u6D4F\u89C8\u5668\u5927\u5C0F\uFF0C\u89C2\u5BDF Affix \u5BB9\u5668\u662F\u5426\u53D1\u751F\u53D8\u5316\u3002\u8DDF\u968F\u53D8\u5316\u4E3A\u6B63\u5E38\u3002#17678",filename:"components/affix/demo/debug.tsx",jsx:`import { Affix, Button } from 'antd';
import { useState } from 'react';
const App = () => {
  const [top, setTop] = useState(10);
  return (
    <div
      style={{
        height: 10000,
      }}
    >
      <div>Top</div>
      <Affix offsetTop={top}>
        <div
          style={{
            background: 'red',
          }}
        >
          <Button type="primary" onClick={() => setTop(top + 10)}>
            Affix top
          </Button>
        </div>
      </Affix>
      <div>Bottom</div>
    </div>
  );
};
export default App;
`,description:"<p>DEBUG</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[3].value),(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[7].value),(0,n.tZ)("td",null,t[8].value),(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value,(0,n.tZ)("code",null,t[17].value),t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value)))),(0,n.tZ)("p",null,(0,n.tZ)("strong",null,t[25].value),(0,n.tZ)("code",null,t[26].value),t[27].value,(0,n.tZ)("code",null,t[28].value),t[29].value),(0,n.tZ)(i.Z,{lang:"jsx"},t[30].value),(0,n.tZ)("h2",{id:"faq"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,n.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,n.tZ)("h3",{id:"affix-\u4F7F\u7528-target-\u7ED1\u5B9A\u5BB9\u5668\u65F6\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#affix-\u4F7F\u7528-target-\u7ED1\u5B9A\u5BB9\u5668\u65F6\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916"},(0,n.tZ)("span",{className:"icon icon-link"})),"Affix \u4F7F\u7528 ",(0,n.tZ)("code",null,t[31].value)," \u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002"),(0,n.tZ)("p",null,t[32].value,(0,n.tZ)("a",{href:"https://codesandbox.io/s/2xyj5zr85p"},t[33].value)),(0,n.tZ)("p",null,t[34].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/3938"},t[35].value),t[36].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/5642"},t[37].value),t[38].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/16120"},t[39].value)),(0,n.tZ)("h3",{id:"affix-\u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6-\u5143\u7D20-left-\u4F4D\u7F6E\u4E0D\u6B63\u786E"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#affix-\u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6-\u5143\u7D20-left-\u4F4D\u7F6E\u4E0D\u6B63\u786E"},(0,n.tZ)("span",{className:"icon icon-link"})),"Affix \u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6\uFF0C \u5143\u7D20 ",(0,n.tZ)("code",null,t[40].value)," \u4F4D\u7F6E\u4E0D\u6B63\u786E\u3002"),(0,n.tZ)("p",null,t[41].value,(0,n.tZ)("code",null,t[42].value),t[43].value),(0,n.tZ)("p",null,t[44].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/29108"},t[45].value)))))}_.default=d}}]);
