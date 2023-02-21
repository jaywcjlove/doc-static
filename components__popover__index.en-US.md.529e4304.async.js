"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4904],{69720:function(_,r,e){e.r(r);var s=e(2143),c=e(50250),m=e(59378),u=e(8910),v=e(74775),i=e(5937),h=e(2068),g=e(74399),P=e(63942),B=e(16073),x=e(24628),w=e(19260),f=e(56140),l=e(5388),C=e(49545),A=e(6965),E=e(49706),T=e(95127),O=e(74418),D=e(73024),o=e(94065),p=e(67294),n=e(96923);function a(){var d=(0,o.eL)(),t=d.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(p.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("p",null,t[2].value,(0,n.tZ)("code",null,t[3].value),t[4].value,(0,n.tZ)("code",null,t[5].value),t[6].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(l.Z,{items:[{demo:{id:"components-popover-demo-basic"},previewerProps:{title:"Basic",filename:"components/popover/demo/basic.tsx",jsx:`import { Button, Popover } from 'antd';
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const App = () => (
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>
);
export default App;
`,description:"<p>The most basic example. The size of the floating layer depends on the contents region.</p>",style:`.ant-popover-content p {
  margin: 0;
}`}},{demo:{id:"components-popover-demo-triggertype"},previewerProps:{title:"Three ways to trigger",filename:"components/popover/demo/triggerType.tsx",jsx:`import { Button, Popover, Space } from 'antd';
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const App = () => (
  <Space wrap>
    <Popover content={content} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </Space>
);
export default App;
`,description:"<p>Mouse to click, focus and move in.</p>"}},{demo:{id:"components-popover-demo-placement"},previewerProps:{title:"Placement",filename:"components/popover/demo/placement.tsx",jsx:`import { Button, Popover } from 'antd';
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const buttonWidth = 70;
const App = () => (
  <div>
    <div
      style={{
        marginLeft: buttonWidth,
        whiteSpace: 'nowrap',
      }}
    >
      <Popover placement="topLeft" title={text} content={content} trigger="click">
        <Button>TL</Button>
      </Popover>
      <Popover placement="top" title={text} content={content} trigger="click">
        <Button>Top</Button>
      </Popover>
      <Popover placement="topRight" title={text} content={content} trigger="click">
        <Button>TR</Button>
      </Popover>
    </div>
    <div
      style={{
        width: buttonWidth,
        float: 'left',
      }}
    >
      <Popover placement="leftTop" title={text} content={content} trigger="click">
        <Button>LT</Button>
      </Popover>
      <Popover placement="left" title={text} content={content} trigger="click">
        <Button>Left</Button>
      </Popover>
      <Popover placement="leftBottom" title={text} content={content} trigger="click">
        <Button>LB</Button>
      </Popover>
    </div>
    <div
      style={{
        width: buttonWidth,
        marginLeft: buttonWidth * 4 + 24,
      }}
    >
      <Popover placement="rightTop" title={text} content={content} trigger="click">
        <Button>RT</Button>
      </Popover>
      <Popover placement="right" title={text} content={content} trigger="click">
        <Button>Right</Button>
      </Popover>
      <Popover placement="rightBottom" title={text} content={content} trigger="click">
        <Button>RB</Button>
      </Popover>
    </div>
    <div
      style={{
        marginLeft: buttonWidth,
        clear: 'both',
        whiteSpace: 'nowrap',
      }}
    >
      <Popover placement="bottomLeft" title={text} content={content} trigger="click">
        <Button>BL</Button>
      </Popover>
      <Popover placement="bottom" title={text} content={content} trigger="click">
        <Button>Bottom</Button>
      </Popover>
      <Popover placement="bottomRight" title={text} content={content} trigger="click">
        <Button>BR</Button>
      </Popover>
    </div>
  </div>
);
export default App;
`,description:"<p>There are 12 <code>placement</code> options available.</p>",style:`#components-popover-demo-placement .ant-btn {
  margin-left: 0;
  margin-right: 8px;
  margin-bottom: 8px;
  width: 70px;
  text-align: center;
  padding: 0;
}
#components-popover-demo-placement .ant-btn {
  margin-left: 8px;
  margin-right: 0;
}`}},{demo:{id:"components-popover-demo-arrow"},previewerProps:{title:"Arrow",filename:"components/popover/demo/arrow.tsx",jsx:`import { Button, Divider, Popover, Segmented } from 'antd';
import { useMemo, useState } from 'react';
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const buttonWidth = 70;
const App = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [arrowAtCenter, setArrowAtCenter] = useState(false);
  const mergedArrow = useMemo(() => {
    if (arrowAtCenter)
      return {
        arrowPointAtCenter: true,
      };
    return showArrow;
  }, [showArrow, arrowAtCenter]);
  return (
    <div className="demo">
      <Segmented
        options={['Show', 'Hide', 'Center']}
        onChange={(val) => {
          setShowArrow(val !== 'Hide');
          setArrowAtCenter(val === 'Center');
        }}
      />
      <Divider orientation="center">Content</Divider>
      <div
        style={{
          marginLeft: buttonWidth,
          whiteSpace: 'nowrap',
        }}
      >
        <Popover placement="topLeft" title={text} content={content} arrow={mergedArrow}>
          <Button>TL</Button>
        </Popover>
        <Popover placement="top" title={text} content={content} arrow={mergedArrow}>
          <Button>Top</Button>
        </Popover>
        <Popover placement="topRight" title={text} content={content} arrow={mergedArrow}>
          <Button>TR</Button>
        </Popover>
      </div>
      <div
        style={{
          width: buttonWidth,
          float: 'left',
        }}
      >
        <Popover placement="leftTop" title={text} content={content} arrow={mergedArrow}>
          <Button>LT</Button>
        </Popover>
        <Popover placement="left" title={text} content={content} arrow={mergedArrow}>
          <Button>Left</Button>
        </Popover>
        <Popover placement="leftBottom" title={text} content={content} arrow={mergedArrow}>
          <Button>LB</Button>
        </Popover>
      </div>
      <div
        style={{
          width: buttonWidth,
          marginLeft: buttonWidth * 4 + 24,
        }}
      >
        <Popover placement="rightTop" title={text} content={content} arrow={mergedArrow}>
          <Button>RT</Button>
        </Popover>
        <Popover placement="right" title={text} content={content} arrow={mergedArrow}>
          <Button>Right</Button>
        </Popover>
        <Popover placement="rightBottom" title={text} content={content} arrow={mergedArrow}>
          <Button>RB</Button>
        </Popover>
      </div>
      <div
        style={{
          marginLeft: buttonWidth,
          clear: 'both',
          whiteSpace: 'nowrap',
        }}
      >
        <Popover placement="bottomLeft" title={text} content={content} arrow={mergedArrow}>
          <Button>BL</Button>
        </Popover>
        <Popover placement="bottom" title={text} content={content} arrow={mergedArrow}>
          <Button>Bottom</Button>
        </Popover>
        <Popover placement="bottomRight" title={text} content={content} arrow={mergedArrow}>
          <Button>BR</Button>
        </Popover>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>Hide arrow by <code>arrow</code>.</p>",style:`.code-box-demo .demo {
  overflow: auto;
}
.code-box-demo .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.code-box-demo .ant-btn-rtl {
  margin-right: 0;
  margin-left: 8px;
  margin-bottom: 8px;
}
#components-popover-demo-arrow .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
}`}},{demo:{id:"components-popover-demo-control"},previewerProps:{title:"Controlling the close of the dialog",filename:"components/popover/demo/control.tsx",jsx:`import { Button, Popover } from 'antd';
import { useState } from 'react';
const App = () => {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={<a onClick={hide}>Close</a>}
      title="Title"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button type="primary">Click me</Button>
    </Popover>
  );
};
export default App;
`,description:"<p>Use <code>open</code> prop to control the display of the card.</p>"}},{demo:{id:"components-popover-demo-hover-with-click"},previewerProps:{title:"Hover with click popover",filename:"components/popover/demo/hover-with-click.tsx",jsx:`import { Button, Popover } from 'antd';
import { useState } from 'react';
const App = () => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hide = () => {
    setClicked(false);
    setHovered(false);
  };
  const handleHoverChange = (open) => {
    setHovered(open);
    setClicked(false);
  };
  const handleClickChange = (open) => {
    setHovered(false);
    setClicked(open);
  };
  const hoverContent = <div>This is hover content.</div>;
  const clickContent = <div>This is click content.</div>;
  return (
    <Popover
      style={{
        width: 500,
      }}
      content={hoverContent}
      title="Hover title"
      trigger="hover"
      open={hovered}
      onOpenChange={handleHoverChange}
    >
      <Popover
        content={
          <div>
            {clickContent}
            <a onClick={hide}>Close</a>
          </div>
        }
        title="Click title"
        trigger="click"
        open={clicked}
        onOpenChange={handleClickChange}
      >
        <Button>Hover and click / \u60AC\u505C\u5E76\u5355\u51FB</Button>
      </Popover>
    </Popover>
  );
};
export default App;
`,description:"<p>The following example shows how to create a popover which can be hovered and clicked.</p>"}},{demo:{id:"components-popover-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/popover/demo/render-panel.tsx",jsx:`import { Popover } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopover } = Popover;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const App = () => (
  <>
    <InternalPopover content={content} title="Title" />
    <InternalPopover
      content={content}
      title="Title"
      placement="bottomLeft"
      style={{
        width: 250,
      }}
    />
  </>
);
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}},{demo:{id:"components-popover-demo-wireframe"},previewerProps:{debug:!0,title:"Wireframe",filename:"components/popover/demo/wireframe.tsx",jsx:`import { ConfigProvider, Popover } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopover } = Popover;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const App = () => (
  <ConfigProvider
    theme={{
      token: {
        wireframe: true,
      },
    }}
  >
    <InternalPopover content={content} title="Title" />
    <InternalPopover
      content={content}
      title="Title"
      placement="bottomLeft"
      style={{
        width: 250,
      }}
    />
  </ConfigProvider>
);
export default App;
`,description:"<p>Wireframe style.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(i.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value),(0,n.tZ)("th",null,t[9].value),(0,n.tZ)("th",null,t[10].value),(0,n.tZ)("th",null,t[11].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null)))),(0,n.tZ)("p",null,t[20].value,(0,n.tZ)(o.rU,{to:"/components/tooltip/#api"},t[21].value),t[22].value),(0,n.tZ)("h2",{id:"note"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#note"},(0,n.tZ)("span",{className:"icon icon-link"})),"Note"),(0,n.tZ)("p",null,t[23].value,(0,n.tZ)("code",null,t[24].value),t[25].value,(0,n.tZ)("code",null,t[26].value),t[27].value,(0,n.tZ)("code",null,t[28].value),t[29].value,(0,n.tZ)("code",null,t[30].value),t[31].value,(0,n.tZ)("code",null,t[32].value),t[33].value))))}r.default=a}}]);
