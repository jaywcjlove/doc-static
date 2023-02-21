"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9015],{16164:function(c,i,t){t.r(i);var m=t(2143),p=t(50250),u=t(59378),_=t(8910),f=t(74775),l=t(5937),h=t(2068),P=t(74399),v=t(63942),x=t(16073),Z=t(24628),g=t(19260),C=t(56140),r=t(5388),O=t(49545),T=t(6965),E=t(49706),B=t(95127),D=t(74418),A=t(73024),o=t(94065),s=t(67294),n=t(96923);function a(){var d=(0,o.eL)(),e=d.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(s.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,e[1].value),(0,n.tZ)("p",null,e[2].value,(0,n.tZ)("code",null,e[3].value),e[4].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(r.Z,{items:[{demo:{id:"components-popconfirm-demo-basic"},previewerProps:{title:"Basic",filename:"components/popconfirm/demo/basic.tsx",jsx:`import { message, Popconfirm } from 'antd';
const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};
const App = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Popconfirm>
);
export default App;
`,description:`<p>The basic example supports the title and description props of confirmation.</p>
<blockquote>
<p><code>description</code> is supported in version <code>5.1.0</code>.</p>
</blockquote>`}},{demo:{id:"components-popconfirm-demo-locale"},previewerProps:{title:"Locale text",filename:"components/popconfirm/demo/locale.tsx",jsx:`import { Popconfirm } from 'antd';
const App = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Popconfirm>
);
export default App;
`,description:"<p>Set <code>okText</code> and <code>cancelText</code> props to customize the button's labels.</p>"}},{demo:{id:"components-popconfirm-demo-placement"},previewerProps:{title:"Placement",filename:"components/popconfirm/demo/placement.tsx",jsx:`import { Button, message, Popconfirm } from 'antd';
const text = 'Are you sure to delete this task?';
const description = 'Delete the task';
const confirm = () => {
  message.info('Clicked on Yes.');
};
const App = () => (
  <>
    <div
      style={{
        marginLeft: 70,
        whiteSpace: 'nowrap',
      }}
    >
      <Popconfirm
        placement="topLeft"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>TL</Button>
      </Popconfirm>
      <Popconfirm
        placement="top"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm
        placement="topRight"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>TR</Button>
      </Popconfirm>
    </div>
    <div
      style={{
        width: 70,
        float: 'left',
      }}
    >
      <Popconfirm
        placement="leftTop"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>LT</Button>
      </Popconfirm>
      <Popconfirm
        placement="left"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm
        placement="leftBottom"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>LB</Button>
      </Popconfirm>
    </div>
    <div
      style={{
        width: 70,
        marginLeft: 304,
      }}
    >
      <Popconfirm
        placement="rightTop"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>RT</Button>
      </Popconfirm>
      <Popconfirm
        placement="right"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Right</Button>
      </Popconfirm>
      <Popconfirm
        placement="rightBottom"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>RB</Button>
      </Popconfirm>
    </div>
    <div
      style={{
        marginLeft: 70,
        clear: 'both',
        whiteSpace: 'nowrap',
      }}
    >
      <Popconfirm
        placement="bottomLeft"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>BL</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottom"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm
        placement="bottomRight"
        title={text}
        description={description}
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button>BR</Button>
      </Popconfirm>
    </div>
  </>
);
export default App;
`,description:"<p>There are 12 <code>placement</code> options available. Use <code>arrowPointAtCenter</code> if you want the arrow to point at the center of target.</p>",style:`#components-popconfirm-demo-placement .ant-btn {
  margin-left: 0;
  margin-right: 8px;
  margin-bottom: 8px;
  width: 70px;
  text-align: center;
  padding: 0;
}
#components-popconfirm-demo-placement .ant-btn-rtl {
  margin-left: 8px;
  margin-right: 0;
}`}},{demo:{id:"components-popconfirm-demo-dynamic-trigger"},previewerProps:{title:"Conditional trigger",filename:"components/popconfirm/demo/dynamic-trigger.tsx",jsx:`import { message, Popconfirm, Switch } from 'antd';
import { useState } from 'react';
const App = () => {
  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState(true);
  const changeCondition = (checked) => {
    setCondition(checked);
  };
  const confirm = () => {
    setOpen(false);
    message.success('Next step.');
  };
  const cancel = () => {
    setOpen(false);
    message.error('Click on cancel.');
  };
  const handleOpenChange = (newOpen) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(condition);
    if (condition) {
      confirm(); // next step
    } else {
      setOpen(newOpen);
    }
  };
  return (
    <div>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        open={open}
        onOpenChange={handleOpenChange}
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">Delete a task</a>
      </Popconfirm>
      <br />
      <br />
      Whether directly execute\uFF1A
      <Switch defaultChecked onChange={changeCondition} />
    </div>
  );
};
export default App;
`,description:"<p>Make it pop up under some conditions.</p>"}},{demo:{id:"components-popconfirm-demo-icon"},previewerProps:{title:"Customize icon",filename:"components/popconfirm/demo/icon.tsx",jsx:`import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
const App = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    icon={
      <QuestionCircleOutlined
        style={{
          color: 'red',
        }}
      />
    }
  >
    <a href="#">Delete</a>
  </Popconfirm>
);
export default App;
`,description:"<p>Set <code>icon</code> props to customize the icon.</p>"}},{demo:{id:"components-popconfirm-demo-async"},previewerProps:{title:"Asynchronously close",filename:"components/popconfirm/demo/async.tsx",jsx:`import { Button, Popconfirm } from 'antd';
import { useState } from 'react';
const App = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <Popconfirm
      title="Title"
      description="Open Popconfirm with async logic"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{
        loading: confirmLoading,
      }}
      onCancel={handleCancel}
    >
      <Button type="primary" onClick={showPopconfirm}>
        Open Popconfirm with async logic
      </Button>
    </Popconfirm>
  );
};
export default App;
`,description:"<p>Asynchronously close a popconfirm when a the OK button is pressed. For example, you can use this pattern when you submit a form.</p>"}},{demo:{id:"components-popconfirm-demo-promise"},previewerProps:{title:"Asynchronously close on Promise",filename:"components/popconfirm/demo/promise.tsx",jsx:`import { Button, Popconfirm } from 'antd';
const App = () => {
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });
  return (
    <Popconfirm
      title="Title"
      description="Open Popconfirm with Promise"
      onConfirm={confirm}
      onOpenChange={() => console.log('open change')}
    >
      <Button type="primary">Open Popconfirm with Promise</Button>
    </Popconfirm>
  );
};
export default App;
`,description:"<p>Asynchronously close a popconfirm when the OK button is pressed. For example, you can use this pattern when you submit a form.</p>"}},{demo:{id:"components-popconfirm-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/popconfirm/demo/render-panel.tsx",jsx:`import { Popconfirm } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopconfirm } = Popconfirm;
const App = () => (
  <>
    <InternalPopconfirm title="Are you OK?" description="Does this look good?" />
    <InternalPopconfirm
      title="Are you OK?"
      description="Does this look good?"
      placement="bottomRight"
      style={{
        width: 250,
      }}
    />
  </>
);
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}},{demo:{id:"components-popconfirm-demo-wireframe"},previewerProps:{debug:!0,title:"Wireframe",filename:"components/popconfirm/demo/wireframe.tsx",jsx:`import { ConfigProvider, Popconfirm } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopconfirm } = Popconfirm;
const App = () => (
  <ConfigProvider
    theme={{
      token: {
        wireframe: true,
      },
    }}
  >
    <InternalPopconfirm title="Are you OK?" />
    <InternalPopconfirm
      title="Are you OK?"
      placement="bottomRight"
      style={{
        width: 250,
      }}
    />
  </ConfigProvider>
);
export default App;
`,description:"<p>Wireframe style.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[5].value),(0,n.tZ)("th",null,e[6].value),(0,n.tZ)("th",null,e[7].value),(0,n.tZ)("th",null,e[8].value),(0,n.tZ)("th",null,e[9].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[10].value),(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null,(0,n.tZ)(o.rU,{to:"/components/button/#api"},e[12].value)),(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[17].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null,(0,n.tZ)(o.rU,{to:"/components/button/#api"},e[28].value)),(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,e[32].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[33].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[34].value),(0,n.tZ)("td",null,e[35].value,(0,n.tZ)("code",null,e[36].value),e[37].value),(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[39].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[40].value),(0,n.tZ)("td",null,e[41].value),(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null,e[43].value),(0,n.tZ)("td",null,e[44].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[45].value),(0,n.tZ)("td",null,e[46].value),(0,n.tZ)("td",null,e[47].value),(0,n.tZ)("td",null,e[48].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null,e[50].value),(0,n.tZ)("td",null,e[51].value),(0,n.tZ)("td",null,e[52].value),(0,n.tZ)("td",null,e[53].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[54].value),(0,n.tZ)("td",null,e[55].value),(0,n.tZ)("td",null,e[56].value),(0,n.tZ)("td",null,e[57].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null,e[59].value),(0,n.tZ)("td",null,e[60].value),(0,n.tZ)("td",null,e[61].value),(0,n.tZ)("td",null)))),(0,n.tZ)("p",null,e[62].value,(0,n.tZ)(o.rU,{to:"/components/tooltip/#api"},e[63].value),e[64].value),(0,n.tZ)("h2",{id:"note"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#note"},(0,n.tZ)("span",{className:"icon icon-link"})),"Note"),(0,n.tZ)("p",null,e[65].value,(0,n.tZ)("code",null,e[66].value),e[67].value,(0,n.tZ)("code",null,e[68].value),e[69].value,(0,n.tZ)("code",null,e[70].value),e[71].value,(0,n.tZ)("code",null,e[72].value),e[73].value,(0,n.tZ)("code",null,e[74].value),e[75].value))))}i.default=a}}]);
