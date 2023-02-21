"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7610],{91264:function(_,o,e){e.r(o);var s=e(2143),h=e(50250),c=e(59378),p=e(8910),m=e(74775),a=e(5937),v=e(2068),Z=e(74399),f=e(63942),g=e(16073),P=e(24628),A=e(19260),k=e(56140),r=e(5388),E=e(49545),x=e(6965),C=e(49706),O=e(95127),D=e(74418),y=e(73024),l=e(94065),i=e(67294),n=e(96923);function d(){var u=(0,l.eL)(),t=u.texts;return(0,n.tZ)(l.dY,null,(0,n.tZ)(i.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,t[2].value),(0,n.tZ)("p",null,t[3].value,(0,n.tZ)("code",null,t[4].value),t[5].value,(0,n.tZ)("code",null,t[6].value),t[7].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(r.Z,{items:[{demo:{id:"components-anchor-demo-basic"},previewerProps:{iframe:"200",title:"\u57FA\u672C",filename:"components/anchor/demo/basic.tsx",jsx:`import { Anchor, Col, Row } from 'antd';
const App = () => (
  <Row>
    <Col span={16}>
      <div
        id="part-1"
        style={{
          height: '100vh',
          background: 'rgba(255,0,0,0.02)',
        }}
      />
      <div
        id="part-2"
        style={{
          height: '100vh',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-3"
        style={{
          height: '100vh',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
    </Col>
    <Col span={8}>
      <Anchor
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </Col>
  </Row>
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-anchor-demo-horizontal"},previewerProps:{iframe:"200",title:"\u6A2A\u5411 Anchor",filename:"components/anchor/demo/horizontal.tsx",jsx:`import { Anchor } from 'antd';
const App = () => (
  <>
    <div
      style={{
        padding: '20px',
      }}
    >
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
          {
            key: 'part-4',
            href: '#part-4',
            title: 'Part 4',
          },
          {
            key: 'part-5',
            href: '#part-5',
            title: 'Part 5',
          },
          {
            key: 'part-6',
            href: '#part-6',
            title: 'Part 6',
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-1"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-2"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
      <div
        id="part-3"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#FFFBE9',
        }}
      />
      <div
        id="part-4"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#F4EAD5',
        }}
      />
      <div
        id="part-5"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#DAE2B6',
        }}
      />
      <div
        id="part-6"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#CCD6A6',
        }}
      />
    </div>
  </>
);
export default App;
`,description:"<p>\u6A2A\u5411 Anchor\u3002</p>"}},{demo:{id:"components-anchor-demo-static"},previewerProps:{title:"\u9759\u6001\u4F4D\u7F6E",filename:"components/anchor/demo/static.tsx",jsx:`import { Anchor } from 'antd';
const App = () => (
  <Anchor
    affix={false}
    items={[
      {
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);
export default App;
`,description:"<p>\u4E0D\u6D6E\u52A8\uFF0C\u72B6\u6001\u4E0D\u968F\u9875\u9762\u6EDA\u52A8\u53D8\u5316\u3002</p>"}},{demo:{id:"components-anchor-demo-onclick"},previewerProps:{title:"\u81EA\u5B9A\u4E49 onClick \u4E8B\u4EF6",filename:"components/anchor/demo/onClick.tsx",jsx:`import { Anchor } from 'antd';
const handleClick = (e, link) => {
  e.preventDefault();
  console.log(link);
};
const App = () => (
  <Anchor
    affix={false}
    onClick={handleClick}
    items={[
      {
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);
export default App;
`,description:"<p>\u70B9\u51FB\u951A\u70B9\u4E0D\u8BB0\u5F55\u5386\u53F2\u3002</p>"}},{demo:{id:"components-anchor-demo-customizehighlight"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u951A\u70B9\u9AD8\u4EAE",filename:"components/anchor/demo/customizeHighlight.tsx",jsx:`import { Anchor } from 'antd';
const getCurrentAnchor = () => '#components-anchor-demo-static';
const App = () => (
  <Anchor
    affix={false}
    getCurrentAnchor={getCurrentAnchor}
    items={[
      {
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u951A\u70B9\u9AD8\u4EAE\u3002</p>"}},{demo:{id:"components-anchor-demo-targetoffset"},previewerProps:{iframe:"200",title:"\u8BBE\u7F6E\u951A\u70B9\u6EDA\u52A8\u504F\u79FB\u91CF",filename:"components/anchor/demo/targetOffset.tsx",jsx:`import { Anchor, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
const App = () => {
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState();
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);
  return (
    <div>
      <Row>
        <Col span={18}>
          <div
            id="part-1"
            style={{
              height: '100vh',
              background: 'rgba(255,0,0,0.02)',
              marginTop: '30vh',
            }}
          >
            Part 1
          </div>
          <div
            id="part-2"
            style={{
              height: '100vh',
              background: 'rgba(0,255,0,0.02)',
            }}
          >
            Part 2
          </div>
          <div
            id="part-3"
            style={{
              height: '100vh',
              background: 'rgba(0,0,255,0.02)',
            }}
          >
            Part 3
          </div>
        </Col>
        <Col span={6}>
          <Anchor
            targetOffset={targetOffset}
            items={[
              {
                key: 'part-1',
                href: '#part-1',
                title: 'Part 1',
              },
              {
                key: 'part-2',
                href: '#part-2',
                title: 'Part 2',
              },
              {
                key: 'part-3',
                href: '#part-3',
                title: 'Part 3',
              },
            ]}
          />
        </Col>
      </Row>

      <div
        style={{
          height: '30vh',
          background: 'rgba(0,0,0,0.85)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '75%',
          color: '#FFF',
        }}
        ref={topRef}
      >
        <div>Fixed Top Block</div>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>\u951A\u70B9\u76EE\u6807\u6EDA\u52A8\u5230\u5C4F\u5E55\u6B63\u4E2D\u95F4\u3002</p>"}},{demo:{id:"components-anchor-demo-onchange"},previewerProps:{title:"\u76D1\u542C\u951A\u70B9\u94FE\u63A5\u6539\u53D8",filename:"components/anchor/demo/onChange.tsx",jsx:`import { Anchor } from 'antd';
const onChange = (link) => {
  console.log('Anchor:OnChange', link);
};
const App = () => (
  <Anchor
    affix={false}
    onChange={onChange}
    items={[
      {
        key: '1',
        href: '#components-anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#components-anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);
export default App;
`,description:"<p>\u76D1\u542C\u951A\u70B9\u94FE\u63A5\u6539\u53D8</p>"}},{demo:{id:"components-anchor-demo-legacy-anchor"},previewerProps:{debug:!0,title:"\u5E9F\u5F03\u7684 JSX \u793A\u4F8B",filename:"components/anchor/demo/legacy-anchor.tsx",jsx:`import { Anchor } from 'antd';
const { Link } = Anchor;
const App = () => (
  <Anchor affix={false}>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#api" title="API">
      <Link href="#anchor-props" title="Anchor Props" />
      <Link href="#link-props" title="Link Props" />
    </Link>
  </Anchor>
);
export default App;
`,description:"<p>\u8C03\u8BD5\u4F7F\u7528</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"anchor-props"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#anchor-props"},(0,n.tZ)("span",{className:"icon icon-link"})),"Anchor Props"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[8].value),(0,n.tZ)("th",null,t[9].value),(0,n.tZ)("th",null,t[10].value),(0,n.tZ)("th",null,t[11].value),(0,n.tZ)("th",null,t[12].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[33].value),t[34].value),(0,n.tZ)("td",null,t[35].value),(0,n.tZ)("td",null,t[36].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[37].value),(0,n.tZ)("td",null,t[38].value,(0,n.tZ)(l.rU,{to:"#components-anchor-demo-targetoffset"},t[39].value)),(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[47].value),t[48].value),(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[51].value),(0,n.tZ)("td",null,t[52].value),(0,n.tZ)("td",null,t[53].value,(0,n.tZ)(l.rU,{to:"#anchoritem"},t[54].value)),(0,n.tZ)("td",null,t[55].value),(0,n.tZ)("td",null,t[56].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[57].value),(0,n.tZ)("td",null,t[58].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[59].value),t[60].value,(0,n.tZ)("code",null,t[61].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[62].value)),(0,n.tZ)("td",null,t[63].value)))),(0,n.tZ)("h3",{id:"anchoritem"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#anchoritem"},(0,n.tZ)("span",{className:"icon icon-link"})),"AnchorItem"),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[64].value),(0,n.tZ)("th",null,t[65].value),(0,n.tZ)("th",null,t[66].value),(0,n.tZ)("th",null,t[67].value),(0,n.tZ)("th",null,t[68].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[69].value),(0,n.tZ)("td",null,t[70].value),(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[73].value),(0,n.tZ)("td",null,t[74].value),(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[77].value),(0,n.tZ)("td",null,t[78].value),(0,n.tZ)("td",null,t[79].value),(0,n.tZ)("td",null,t[80].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null,t[82].value),(0,n.tZ)("td",null,t[83].value),(0,n.tZ)("td",null,t[84].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[85].value),(0,n.tZ)("td",null,t[86].value,(0,n.tZ)("code",null,t[87].value)),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"#anchoritem"},t[88].value),t[89].value),(0,n.tZ)("td",null,t[90].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"link-props"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#link-props"},(0,n.tZ)("span",{className:"icon icon-link"})),"Link Props"),(0,n.tZ)("p",null,t[91].value),(0,n.tZ)(a.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[92].value),(0,n.tZ)("th",null,t[93].value),(0,n.tZ)("th",null,t[94].value),(0,n.tZ)("th",null,t[95].value),(0,n.tZ)("th",null,t[96].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[97].value),(0,n.tZ)("td",null,t[98].value),(0,n.tZ)("td",null,t[99].value),(0,n.tZ)("td",null,t[100].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[101].value),(0,n.tZ)("td",null,t[102].value),(0,n.tZ)("td",null,t[103].value),(0,n.tZ)("td",null,t[104].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[105].value),(0,n.tZ)("td",null,t[106].value),(0,n.tZ)("td",null,t[107].value),(0,n.tZ)("td",null,t[108].value),(0,n.tZ)("td",null)))))))}o.default=d}}]);
