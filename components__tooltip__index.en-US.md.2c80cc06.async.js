"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7738],{88495:function(_,o,e){e.r(o);var p=e(2143),s=e(50250),m=e(59378),v=e(8910),Z=e(74775),u=e(5937),c=e(2068),h=e(74399),T=e(63942),g=e(16073),x=e(24628),B=e(19260),w=e(56140),i=e(5388),f=e(49545),P=e(6965),A=e(49706),E=e(95127),D=e(74418),b=e(73024),l=e(94065),a=e(67294),t=e(96923);function d(){var r=(0,l.eL)(),n=r.texts;return(0,t.tZ)(l.dY,null,(0,t.tZ)(a.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[1].value),(0,t.tZ)("li",null,n[2].value,(0,t.tZ)("code",null,n[3].value),n[4].value,(0,t.tZ)("code",null,n[5].value),n[6].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(i.Z,{items:[{demo:{id:"components-tooltip-demo-basic"},previewerProps:{title:"Basic",filename:"components/tooltip/demo/basic.tsx",jsx:`import { Tooltip } from 'antd';
const App = () => (
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);
export default App;
`,description:"<p>The simplest usage.</p>"}},{demo:{id:"components-tooltip-demo-placement"},previewerProps:{title:"Placement",filename:"components/tooltip/demo/placement.tsx",jsx:`import { Button, Tooltip } from 'antd';
const text = <span>prompt text</span>;
const buttonWidth = 70;
const App = () => (
  <div>
    <div
      style={{
        marginLeft: buttonWidth,
        whiteSpace: 'nowrap',
      }}
    >
      <Tooltip placement="topLeft" title={text}>
        <Button>TL</Button>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <Button>TR</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: buttonWidth,
        float: 'left',
      }}
    >
      <Tooltip placement="leftTop" title={text}>
        <Button>LT</Button>
      </Tooltip>
      <Tooltip placement="left" title={text}>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip placement="leftBottom" title={text}>
        <Button>LB</Button>
      </Tooltip>
    </div>
    <div
      style={{
        width: buttonWidth,
        marginLeft: buttonWidth * 4 + 24,
      }}
    >
      <Tooltip placement="rightTop" title={text}>
        <Button>RT</Button>
      </Tooltip>
      <Tooltip placement="right" title={text}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" title={text}>
        <Button>RB</Button>
      </Tooltip>
    </div>
    <div
      style={{
        marginLeft: buttonWidth,
        clear: 'both',
        whiteSpace: 'nowrap',
      }}
    >
      <Tooltip placement="bottomLeft" title={text}>
        <Button>BL</Button>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title={text}>
        <Button>BR</Button>
      </Tooltip>
    </div>
  </div>
);
export default App;
`,description:"<p>There are 12 placement options available.</p>",style:`#components-tooltip-demo-placement .ant-btn {
  margin-left: 0;
  margin-right: 8px;
  margin-bottom: 8px;
  width: 70px;
  text-align: center;
  padding: 0;
}
#components-tooltip-demo-placement .ant-btn {
  margin-left: 8px;
  margin-right: 0;
}`}},{demo:{id:"components-tooltip-demo-arrow"},previewerProps:{title:"Arrow",filename:"components/tooltip/demo/arrow.tsx",jsx:`import { Button, Divider, Segmented, Tooltip } from 'antd';
import { useMemo, useState } from 'react';
const text = <span>prompt text</span>;
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
        <Tooltip placement="topLeft" title={text} arrow={mergedArrow}>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text} arrow={mergedArrow}>
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text} arrow={mergedArrow}>
          <Button>TR</Button>
        </Tooltip>
      </div>
      <div
        style={{
          width: buttonWidth,
          float: 'left',
        }}
      >
        <Tooltip placement="leftTop" title={text} arrow={mergedArrow}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left" title={text} arrow={mergedArrow}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title={text} arrow={mergedArrow}>
          <Button>LB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          width: buttonWidth,
          marginLeft: buttonWidth * 4 + 24,
        }}
      >
        <Tooltip placement="rightTop" title={text} arrow={mergedArrow}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right" title={text} arrow={mergedArrow}>
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title={text} arrow={mergedArrow}>
          <Button>RB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: buttonWidth,
          clear: 'both',
          whiteSpace: 'nowrap',
        }}
      >
        <Tooltip placement="bottomLeft" title={text} arrow={mergedArrow}>
          <Button>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text} arrow={mergedArrow}>
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text} arrow={mergedArrow}>
          <Button>BR</Button>
        </Tooltip>
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
#components-tooltip-demo-arrow .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
}`}},{demo:{id:"components-tooltip-demo-auto-adjust-overflow"},previewerProps:{debug:!0,title:"Adjust placement automatically",filename:"components/tooltip/demo/auto-adjust-overflow.tsx",jsx:`import { Button, Tooltip } from 'antd';
const wrapStyles = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
};
const App = () => (
  <div style={wrapStyles}>
    <Tooltip
      placement="left"
      title="Prompt Text"
      getPopupContainer={(trigger) => trigger.parentElement}
    >
      <Button>Adjust automatically / \u81EA\u52A8\u8C03\u6574</Button>
    </Tooltip>
    <br />
    <Tooltip
      placement="left"
      title="Prompt Text"
      getPopupContainer={(trigger) => trigger.parentElement}
      autoAdjustOverflow={false}
    >
      <Button>Ignore / \u4E0D\u5904\u7406</Button>
    </Tooltip>
  </div>
);
export default App;
`,description:"<p>Adjust placement automatically when tooltip is invisible.</p>"}},{demo:{id:"components-tooltip-demo-destroy-tooltip-on-hide"},previewerProps:{debug:!0,title:"Destroy tooltip when hidden",filename:"components/tooltip/demo/destroy-tooltip-on-hide.tsx",jsx:`import { Tooltip } from 'antd';
const App = () => (
  <Tooltip
    destroyTooltipOnHide={{
      keepParent: false,
    }}
    title="prompt text"
  >
    <span>Tooltip will destroy when hidden.</span>
  </Tooltip>
);
export default App;
`,description:"<p>Setting <code>destroyTooltipOnHide</code> to control whether destroy dom node of tooltip when hidden.</p>"}},{demo:{id:"components-tooltip-demo-colorful"},previewerProps:{title:"Colorful Tooltip",filename:"components/tooltip/demo/colorful.tsx",jsx:`import { Button, Divider, Space, Tooltip } from 'antd';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
const App = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <Space wrap>
      {colors.map((color) => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
    <Divider orientation="left">Custom</Divider>
    <Space wrap>
      {customColors.map((color) => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
  </>
);
export default App;
`,description:"<p>We preset a series of colorful Tooltip styles for use in different situations.</p>"}},{demo:{id:"components-tooltip-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tooltip/demo/render-panel.tsx",jsx:`import { Tooltip } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTooltip } = Tooltip;
const App = () => (
  <>
    <InternalTooltip title="Hello, Pink Pure Panel!" color="pink" />
    <InternalTooltip title="Hello, Customize Color Pure Panel!" color="#f50" />
    <InternalTooltip
      title="Hello, Pure Panel!"
      placement="bottomLeft"
      style={{
        width: 200,
      }}
    />
  </>
);
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[7].value),(0,t.tZ)("th",null,n[8].value),(0,t.tZ)("th",null,n[9].value),(0,t.tZ)("th",null,n[10].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[11].value),(0,t.tZ)("td",null,n[12].value),(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null,n[14].value)))),(0,t.tZ)("h3",{id:"common-api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#common-api"},(0,t.tZ)("span",{className:"icon icon-link"})),"Common API"),(0,t.tZ)("p",null,n[15].value),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[16].value),(0,t.tZ)("th",null,n[17].value),(0,t.tZ)("th",null,n[18].value),(0,t.tZ)("th",null,n[19].value),(0,t.tZ)("th",null,n[20].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[21].value),(0,t.tZ)("td",null,n[22].value,(0,t.tZ)("a",{href:"https://github.com/react-component/tooltip"},n[23].value)),(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null,n[25].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[26].value),(0,t.tZ)("td",null,n[27].value),(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null,n[29].value),(0,t.tZ)("td",null,n[30].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[31].value),(0,t.tZ)("td",null,n[32].value),(0,t.tZ)("td",null,n[33].value),(0,t.tZ)("td",null,n[34].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[35].value),(0,t.tZ)("td",null,n[36].value),(0,t.tZ)("td",null,n[37].value),(0,t.tZ)("td",null,n[38].value),(0,t.tZ)("td",null,n[39].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,n[42].value),(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null,n[44].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null,n[46].value,(0,t.tZ)("code",null,n[47].value),n[48].value),(0,t.tZ)("td",null,n[49].value),(0,t.tZ)("td",null,n[50].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[51].value),(0,t.tZ)("td",null,n[52].value,(0,t.tZ)("code",null,n[53].value),n[54].value,(0,t.tZ)("code",null,n[55].value)),(0,t.tZ)("td",null,n[56].value),(0,t.tZ)("td",null,n[57].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[58].value),(0,t.tZ)("td",null,n[59].value),(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null,n[61].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[62].value),(0,t.tZ)("td",null,n[63].value),(0,t.tZ)("td",null,n[64].value),(0,t.tZ)("td",null,n[65].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[66].value),(0,t.tZ)("td",null,n[67].value),(0,t.tZ)("td",null,n[68].value),(0,t.tZ)("td",null,n[69].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[70].value),(0,t.tZ)("td",null,n[71].value),(0,t.tZ)("td",null,n[72].value),(0,t.tZ)("td",null,n[73].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[74].value),(0,t.tZ)("td",null,n[75].value),(0,t.tZ)("td",null,n[76].value),(0,t.tZ)("td",null,n[77].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[78].value),(0,t.tZ)("td",null,n[79].value,(0,t.tZ)("code",null,n[80].value),n[81].value,(0,t.tZ)("code",null,n[82].value),n[83].value,(0,t.tZ)("code",null,n[84].value),n[85].value,(0,t.tZ)("code",null,n[86].value),n[87].value,(0,t.tZ)("code",null,n[88].value),n[89].value,(0,t.tZ)("code",null,n[90].value),n[91].value,(0,t.tZ)("code",null,n[92].value),n[93].value,(0,t.tZ)("code",null,n[94].value),n[95].value,(0,t.tZ)("code",null,n[96].value),n[97].value,(0,t.tZ)("code",null,n[98].value),n[99].value,(0,t.tZ)("code",null,n[100].value),n[101].value,(0,t.tZ)("code",null,n[102].value)),(0,t.tZ)("td",null,n[103].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[104].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[105].value),(0,t.tZ)("td",null,n[106].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[107].value),n[108].value,(0,t.tZ)("code",null,n[109].value),n[110].value,(0,t.tZ)("code",null,n[111].value),n[112].value,(0,t.tZ)("code",null,n[113].value),n[114].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[115].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[116].value),(0,t.tZ)("td",null,n[117].value,(0,t.tZ)("code",null,n[118].value),n[119].value,(0,t.tZ)(l.rU,{to:"/docs/react/faq#why-open"},n[120].value),n[121].value),(0,t.tZ)("td",null,n[122].value),(0,t.tZ)("td",null,n[123].value),(0,t.tZ)("td",null,n[124].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[125].value),(0,t.tZ)("td",null,n[126].value,(0,t.tZ)("code",null,n[127].value),n[128].value),(0,t.tZ)("td",null,n[129].value),(0,t.tZ)("td",null,n[130].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[131].value),(0,t.tZ)("td",null,n[132].value),(0,t.tZ)("td",null,n[133].value),(0,t.tZ)("td",null,n[134].value),(0,t.tZ)("td",null,n[135].value)))),(0,t.tZ)("h2",{id:"note"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#note"},(0,t.tZ)("span",{className:"icon icon-link"})),"Note"),(0,t.tZ)("p",null,n[136].value,(0,t.tZ)("code",null,n[137].value),n[138].value,(0,t.tZ)("code",null,n[139].value),n[140].value,(0,t.tZ)("code",null,n[141].value),n[142].value,(0,t.tZ)("code",null,n[143].value),n[144].value,(0,t.tZ)("code",null,n[145].value),n[146].value))))}o.default=d}}]);
