"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6176],{63005:function(i,l,e){e.r(l);var _=e(2143),c=e(50250),Z=e(59378),p=e(8910),v=e(74775),u=e(5937),m=e(2068),f=e(74399),h=e(63942),g=e(16073),E=e(24628),O=e(19260),P=e(56140),a=e(5388),B=e(49545),x=e(6965),D=e(49706),T=e(95127),C=e(74418),M=e(73024),o=e(94065),r=e(67294),n=e(96923);function d(){var s=(0,o.eL)(),t=s.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(r.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value,(0,n.tZ)("code",null,t[1].value),t[2].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,t[3].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(a.Z,{items:[{demo:{id:"components-tour-demo-basic"},previewerProps:{title:"Basic",filename:"components/tour/demo/basic.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-tour-demo-non-modal"},previewerProps:{title:"Non-modal",filename:"components/tour/demo/non-modal.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin non-modal Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} mask={false} type="primary" steps={steps} />
    </>
  );
};
export default App;
`,description:'<p>Use <code>mask={false}</code> to make Tour non-modal. At the meantime it is recommended to use with <code>type="primary"</code> to emphasize the guide itself.</p>'}},{demo:{id:"components-tour-demo-placement"},previewerProps:{title:"Placement",filename:"components/tour/demo/placement.tsx",jsx:`import { Button, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Center',
      description: 'Displayed in the center of screen.',
      target: null,
    },
    {
      title: 'Right',
      description: 'On the right of target.',
      placement: 'right',
      target: () => ref.current,
    },
    {
      title: 'Top',
      description: 'On the top of target.',
      placement: 'top',
      target: () => ref.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        Begin Tour
      </Button>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>Change the placement of the guide relative to the target, there are 12 placements available. When <code>target={null}</code> the guide will show in the center.</p>"}},{demo:{id:"components-tour-demo-mask"},previewerProps:{title:"custom mask style",filename:"components/tour/demo/mask.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
      mask: {
        style: {
          boxShadow: 'inset 0 0 15px #fff',
        },
        color: 'rgba(40, 0, 255, .4)',
      },
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
      mask: false,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        mask={{
          style: {
            boxShadow: 'inset 0 0 15px #333',
          },
          color: 'rgba(80, 255, 255, .4)',
        }}
      />
    </>
  );
};
export default App;
`,description:"<p>custom mask style.</p>"}},{demo:{id:"components-tour-demo-indicator"},previewerProps:{title:"custom indicator",filename:"components/tour/demo/indicator.tsx",jsx:`import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import { useRef, useState } from 'react';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
    </>
  );
};
export default App;
`,description:"<p>Custom indicator.</p>"}},{demo:{id:"components-tour-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tour/demo/render-panel.tsx",jsx:`import { Tour } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Tour;
export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 16,
      background: 'rgba(50,0,0,0.65)',
      padding: 8,
    }}
  >
    <InternalPanel title="Hello World!" description="Hello World?!" />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      cover={
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      }
      current={5}
      total={7}
    />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      type="primary"
      current={4}
      total={5}
    />
  </div>
);
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"tour"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tour"},(0,n.tZ)("span",{className:"icon icon-link"})),"Tour"),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[11].value),t[12].value,(0,n.tZ)("code",null,t[13].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[14].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[17].value),t[18].value,(0,n.tZ)("code",null,t[19].value),t[20].value,(0,n.tZ)("code",null,t[21].value),t[22].value,(0,n.tZ)("code",null,t[23].value),t[24].value,(0,n.tZ)("code",null,t[25].value),t[26].value,(0,n.tZ)("code",null,t[27].value),t[28].value,(0,n.tZ)("code",null,t[29].value),t[30].value,(0,n.tZ)("code",null,t[31].value),t[32].value,(0,n.tZ)("code",null,t[33].value),t[34].value,(0,n.tZ)("code",null,t[35].value),t[36].value,(0,n.tZ)("code",null,t[37].value),t[38].value,(0,n.tZ)("code",null,t[39].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[40].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[43].value)),(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[47].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[48].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[51].value),t[52].value,(0,n.tZ)("code",null,t[53].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[54].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[55].value),(0,n.tZ)("td",null,t[56].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[57].value)),(0,n.tZ)("td",null,t[58].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[61].value)),(0,n.tZ)("td",null,t[62].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[63].value),(0,n.tZ)("td",null,t[64].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[65].value)),(0,n.tZ)("td",null,t[66].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[67].value),(0,n.tZ)("td",null,t[68].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[69].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[70].value)),(0,n.tZ)("td",null,t[71].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,t[73].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[74].value)),(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null,t[76].value)))),(0,n.tZ)("h3",{id:"tourstep"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tourstep"},(0,n.tZ)("span",{className:"icon icon-link"})),"TourStep"),(0,n.tZ)(u.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[77].value),(0,n.tZ)("th",null,t[78].value),(0,n.tZ)("th",null,t[79].value),(0,n.tZ)("th",null,t[80].value),(0,n.tZ)("th",null,t[81].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[82].value),(0,n.tZ)("td",null,t[83].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[84].value),t[85].value,(0,n.tZ)("code",null,t[86].value)),(0,n.tZ)("td",null,t[87].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[88].value),(0,n.tZ)("td",null,t[89].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[90].value),t[91].value,(0,n.tZ)("code",null,t[92].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[93].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[94].value),(0,n.tZ)("td",null,t[95].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[96].value)),(0,n.tZ)("td",null,t[97].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[98].value),(0,n.tZ)("td",null,t[99].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[100].value)),(0,n.tZ)("td",null,t[101].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[102].value),(0,n.tZ)("td",null,t[103].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[104].value)),(0,n.tZ)("td",null,t[105].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[106].value),(0,n.tZ)("td",null,t[107].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[108].value),t[109].value,(0,n.tZ)("code",null,t[110].value),t[111].value,(0,n.tZ)("code",null,t[112].value),t[113].value,(0,n.tZ)("code",null,t[114].value),t[115].value,(0,n.tZ)("code",null,t[116].value),t[117].value,(0,n.tZ)("code",null,t[118].value),t[119].value,(0,n.tZ)("code",null,t[120].value),t[121].value,(0,n.tZ)("code",null,t[122].value),t[123].value,(0,n.tZ)("code",null,t[124].value),t[125].value,(0,n.tZ)("code",null,t[126].value),t[127].value,(0,n.tZ)("code",null,t[128].value),t[129].value,(0,n.tZ)("code",null,t[130].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[131].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[132].value),(0,n.tZ)("td",null,t[133].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[134].value)),(0,n.tZ)("td",null,t[135].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[136].value),(0,n.tZ)("td",null,t[137].value,(0,n.tZ)("code",null,t[138].value),t[139].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[140].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[141].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[142].value),(0,n.tZ)("td",null,t[143].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[144].value),t[145].value,(0,n.tZ)("code",null,t[146].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[147].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[148].value),(0,n.tZ)("td",null,t[149].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[150].value)),(0,n.tZ)("td",null,t[151].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[152].value),(0,n.tZ)("td",null,t[153].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[154].value)),(0,n.tZ)("td",null,t[155].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[156].value),(0,n.tZ)("td",null,t[157].value,(0,n.tZ)("code",null,t[158].value),t[159].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[160].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[161].value)),(0,n.tZ)("td",null,t[162].value)))))))}l.default=d}}]);
