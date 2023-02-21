"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2990],{46012:function(_,r,e){e.r(r);var s=e(2143),u=e(50250),c=e(59378),m=e(8910),v=e(74775),i=e(5937),g=e(2068),P=e(74399),h=e(63942),B=e(16073),x=e(24628),C=e(19260),f=e(56140),l=e(5388),w=e(49545),E=e(6965),A=e(49706),O=e(95127),T=e(74418),D=e(73024),o=e(94065),p=e(67294),n=e(96923);function a(){var d=(0,o.eL)(),t=d.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(p.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("p",null,t[2].value,(0,n.tZ)("code",null,t[3].value),t[4].value),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(l.Z,{items:[{demo:{id:"components-popover-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/popover/demo/basic.tsx",jsx:`import { Button, Popover } from 'antd';
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
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u6D6E\u5C42\u7684\u5927\u5C0F\u7531\u5185\u5BB9\u533A\u57DF\u51B3\u5B9A\u3002</p>",style:`.ant-popover-content p {
  margin: 0;
}`}},{demo:{id:"components-popover-demo-triggertype"},previewerProps:{title:"\u4E09\u79CD\u89E6\u53D1\u65B9\u5F0F",filename:"components/popover/demo/triggerType.tsx",jsx:`import { Button, Popover, Space } from 'antd';
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
`,description:"<p>\u9F20\u6807\u79FB\u5165\u3001\u805A\u96C6\u3001\u70B9\u51FB\u3002</p>"}},{demo:{id:"components-popover-demo-placement"},previewerProps:{title:"\u4F4D\u7F6E",filename:"components/popover/demo/placement.tsx",jsx:`import { Button, Popover } from 'antd';
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
`,description:"<p>\u4F4D\u7F6E\u6709\u5341\u4E8C\u4E2A\u65B9\u5411\u3002</p>",style:`#components-popover-demo-placement .ant-btn {
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
}`}},{demo:{id:"components-popover-demo-arrow"},previewerProps:{title:"\u7BAD\u5934\u5C55\u793A",filename:"components/popover/demo/arrow.tsx",jsx:`import { Button, Divider, Popover, Segmented } from 'antd';
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
`,description:"<p>\u901A\u8FC7 <code>arrow</code> \u5C5E\u6027\u9690\u85CF\u7BAD\u5934\u3002</p>",style:`.code-box-demo .demo {
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
}`}},{demo:{id:"components-popover-demo-control"},previewerProps:{title:"\u4ECE\u6D6E\u5C42\u5185\u5173\u95ED",filename:"components/popover/demo/control.tsx",jsx:`import { Button, Popover } from 'antd';
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
`,description:"<p>\u4F7F\u7528 <code>open</code> \u5C5E\u6027\u63A7\u5236\u6D6E\u5C42\u663E\u793A\u3002</p>"}},{demo:{id:"components-popover-demo-hover-with-click"},previewerProps:{title:"\u60AC\u505C\u70B9\u51FB\u5F39\u51FA\u7A97\u53E3",filename:"components/popover/demo/hover-with-click.tsx",jsx:`import { Button, Popover } from 'antd';
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
`,description:"<p>\u4EE5\u4E0B\u793A\u4F8B\u663E\u793A\u5982\u4F55\u521B\u5EFA\u53EF\u60AC\u505C\u548C\u5355\u51FB\u7684\u5F39\u51FA\u7A97\u53E3\u3002</p>"}},{demo:{id:"components-popover-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/popover/demo/render-panel.tsx",jsx:`import { Popover } from 'antd';
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
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-popover-demo-wireframe"},previewerProps:{debug:!0,title:"\u7EBF\u6846\u98CE\u683C",filename:"components/popover/demo/wireframe.tsx",jsx:`import { ConfigProvider, Popover } from 'antd';
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
`,description:"<p>\u7EBF\u6846\u6837\u5F0F\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(i.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value),(0,n.tZ)("th",null,t[9].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null)))),(0,n.tZ)("p",null,t[18].value,(0,n.tZ)(o.rU,{to:"/components/tooltip-cn/#api"},t[19].value),t[20].value),(0,n.tZ)("h2",{id:"\u6CE8\u610F"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6CE8\u610F"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u6CE8\u610F"),(0,n.tZ)("p",null,t[21].value,(0,n.tZ)("code",null,t[22].value),t[23].value,(0,n.tZ)("code",null,t[24].value),t[25].value,(0,n.tZ)("code",null,t[26].value),t[27].value,(0,n.tZ)("code",null,t[28].value),t[29].value,(0,n.tZ)("code",null,t[30].value),t[31].value))))}r.default=a}}]);
