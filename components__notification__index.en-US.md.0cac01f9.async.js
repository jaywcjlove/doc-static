"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8466],{78957:function(r,l,e){e.r(l);var p=e(2143),_=e(50250),m=e(59378),v=e(8910),i=e(74775),a=e(5937),f=e(2068),Z=e(74399),h=e(63942),x=e(16073),g=e(24628),B=e(19260),y=e(56140),u=e(5388),O=e(49545),C=e(6965),P=e(49706),E=e(95127),D=e(74418),N=e(73024),o=e(94065),d=e(67294),t=e(96923);function c(){var s=(0,o.eL)(),n=s.texts;return(0,t.tZ)(o.dY,null,(0,t.tZ)(d.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("p",null,n[1].value),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[2].value),(0,t.tZ)("li",null,n[3].value),(0,t.tZ)("li",null,n[4].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(u.Z,{items:[{demo:{id:"components-notification-demo-hooks"},previewerProps:{title:"Hooks usage (recommended)",filename:"components/notification/demo/hooks.tsx",jsx:`import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';
import React, { useMemo } from 'react';
const Context = React.createContext({
  name: 'Default',
});
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: \`Notification \${placement}\`,
      description: <Context.Consumer>{({ name }) => \`Hello, \${name}!\`}</Context.Consumer>,
      placement,
    });
  };
  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    [],
  );
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={() => openNotification('topLeft')}>
          <RadiusUpleftOutlined />
          topLeft
        </Button>
        <Button type="primary" onClick={() => openNotification('topRight')}>
          <RadiusUprightOutlined />
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button type="primary" onClick={() => openNotification('bottomLeft')}>
          <RadiusBottomleftOutlined />
          bottomLeft
        </Button>
        <Button type="primary" onClick={() => openNotification('bottomRight')}>
          <RadiusBottomrightOutlined />
          bottomRight
        </Button>
      </Space>
    </Context.Provider>
  );
};
export default App;
`,description:"<p>Use <code>notification.useNotification</code> to get <code>contextHolder</code> with context accessible issue. Please note that, we recommend to use top level registration instead of <code>notification</code> static method, because static method cannot consume context, and ConfigProvider data will not work.</p>"}},{demo:{id:"components-notification-demo-basic"},previewerProps:{title:"Basic",filename:"components/notification/demo/basic.tsx",jsx:`import { Button, notification } from 'antd';
const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
const App = () => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);
export default App;
`,description:"<p>The simplest usage that close the notification box after 4.5s.</p>"}},{demo:{id:"components-notification-demo-duration"},previewerProps:{title:"Duration after which the notification box is closed",filename:"components/notification/demo/duration.tsx",jsx:`import { Button, notification } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 0,
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p><code>Duration</code> can be used to specify how long the notification stays open. After the duration time elapses, the notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0, the notification box will never close automatically.</p>"}},{demo:{id:"components-notification-demo-with-icon"},previewerProps:{title:"Notification with icon",filename:"components/notification/demo/with-icon.tsx",jsx:`import { Button, notification, Space } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
        <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
        <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      </Space>
    </>
  );
};
export default App;
`,description:"<p>A notification box with a icon at the left side.</p>"}},{demo:{id:"components-notification-demo-with-btn"},previewerProps:{title:"Custom close button",filename:"components/notification/demo/with-btn.tsx",jsx:`import { Button, notification, Space } from 'antd';
const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    const key = \`open\${Date.now()}\`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          Destroy All
        </Button>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          Confirm
        </Button>
      </Space>
    );
    api.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>To customize the style or font of the close button.</p>"}},{demo:{id:"components-notification-demo-custom-icon"},previewerProps:{title:"Customized Icon",filename:"components/notification/demo/custom-icon.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: (
        <SmileOutlined
          style={{
            color: '#108ee9',
          }}
        />
      ),
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>The icon can be customized to any react node.</p>"}},{demo:{id:"components-notification-demo-placement"},previewerProps:{title:"Placement",filename:"components/notification/demo/placement.tsx",jsx:`import {
  BorderBottomOutlined,
  BorderTopOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: \`Notification \${placement}\`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={() => openNotification('top')} icon={<BorderTopOutlined />}>
          top
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottom')}
          icon={<BorderBottomOutlined />}
        >
          bottom
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('topLeft')}
          icon={<RadiusUpleftOutlined />}
        >
          topLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('topRight')}
          icon={<RadiusUprightOutlined />}
        >
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('bottomLeft')}
          icon={<RadiusBottomleftOutlined />}
        >
          bottomLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottomRight')}
          icon={<RadiusBottomrightOutlined />}
        >
          bottomRight
        </Button>
      </Space>
    </>
  );
};
export default App;
`,description:"<p>A notification box can appear from the <code>topRight</code>, <code>bottomRight</code>, <code>bottomLeft</code> or <code>topLeft</code> of the viewport via <code>placement</code>.</p>"}},{demo:{id:"components-notification-demo-custom-style"},previewerProps:{title:"Customized style",filename:"components/notification/demo/custom-style.tsx",jsx:`import { Button, notification } from 'antd';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>The style and className are available to customize Notification.</p>"}},{demo:{id:"components-notification-demo-update"},previewerProps:{title:"Update Message Content",filename:"components/notification/demo/update.tsx",jsx:`import { Button, notification } from 'antd';
const key = 'updatable';
const App = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      key,
      message: 'Notification Title',
      description: 'description.',
    });
    setTimeout(() => {
      api.open({
        key,
        message: 'New Title',
        description: 'New description.',
      });
    }, 1000);
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>Update content with unique key.</p>"}},{demo:{id:"components-notification-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/notification/demo/render-panel.tsx",jsx:`import { Button, notification } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = notification;
export default () => (
  <InternalPanel
    message="Hello World!"
    description="Hello World?"
    type="success"
    btn={
      <Button type="primary" size="small">
        My Button
      </Button>
    }
  />
);
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,(0,t.tZ)("code",null,n[5].value)),(0,t.tZ)("li",null,(0,t.tZ)("code",null,n[6].value)),(0,t.tZ)("li",null,(0,t.tZ)("code",null,n[7].value)),(0,t.tZ)("li",null,(0,t.tZ)("code",null,n[8].value)),(0,t.tZ)("li",null,(0,t.tZ)("code",null,n[9].value)),(0,t.tZ)("li",null,(0,t.tZ)("code",null,n[10].value))),(0,t.tZ)("p",null,n[11].value),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[12].value),(0,t.tZ)("th",null,n[13].value),(0,t.tZ)("th",null,n[14].value),(0,t.tZ)("th",null,n[15].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[16].value),(0,t.tZ)("td",null,n[17].value,(0,t.tZ)("code",null,n[18].value),n[19].value,(0,t.tZ)("code",null,n[20].value),n[21].value,(0,t.tZ)("code",null,n[22].value),n[23].value),(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null,n[25].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[26].value),(0,t.tZ)("td",null,n[27].value),(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null,n[29].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[30].value),(0,t.tZ)("td",null,n[31].value),(0,t.tZ)("td",null,n[32].value),(0,t.tZ)("td",null,n[33].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[34].value),(0,t.tZ)("td",null,n[35].value),(0,t.tZ)("td",null,n[36].value),(0,t.tZ)("td",null,n[37].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[38].value),(0,t.tZ)("td",null,n[39].value),(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null,n[41].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[42].value),(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null,n[44].value),(0,t.tZ)("td",null,n[45].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[46].value),(0,t.tZ)("td",null,n[47].value),(0,t.tZ)("td",null,n[48].value),(0,t.tZ)("td",null,n[49].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[50].value),(0,t.tZ)("td",null,n[51].value),(0,t.tZ)("td",null,n[52].value),(0,t.tZ)("td",null,n[53].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[54].value),(0,t.tZ)("td",null,n[55].value),(0,t.tZ)("td",null,n[56].value),(0,t.tZ)("td",null,n[57].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[58].value),(0,t.tZ)("td",null,n[59].value),(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null,n[61].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[62].value),(0,t.tZ)("td",null,n[63].value,(0,t.tZ)("code",null,n[64].value),n[65].value,(0,t.tZ)("code",null,n[66].value),n[67].value,(0,t.tZ)("code",null,n[68].value),n[69].value,(0,t.tZ)("code",null,n[70].value)),(0,t.tZ)("td",null,n[71].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[72].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[73].value),(0,t.tZ)("td",null,n[74].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794"},n[75].value)),(0,t.tZ)("td",null,n[76].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[77].value),(0,t.tZ)("td",null,n[78].value,(0,t.tZ)("code",null,n[79].value),n[80].value,(0,t.tZ)("code",null,n[81].value),n[82].value,(0,t.tZ)("code",null,n[83].value),n[84].value),(0,t.tZ)("td",null,n[85].value),(0,t.tZ)("td",null,n[86].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[87].value),(0,t.tZ)("td",null,n[88].value),(0,t.tZ)("td",null,n[89].value),(0,t.tZ)("td",null,n[90].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[91].value),(0,t.tZ)("td",null,n[92].value),(0,t.tZ)("td",null,n[93].value),(0,t.tZ)("td",null,n[94].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[95].value),(0,t.tZ)("td",null,n[96].value),(0,t.tZ)("td",null,n[97].value),(0,t.tZ)("td",null,n[98].value,(0,t.tZ)("code",null,n[99].value),n[100].value,(0,t.tZ)("code",null,n[101].value),n[102].value,(0,t.tZ)("code",null,n[103].value),n[104].value,(0,t.tZ)("code",null,n[105].value),n[106].value,(0,t.tZ)("code",null,n[107].value),n[108].value,(0,t.tZ)("code",null,n[109].value),n[110].value,(0,t.tZ)("a",{href:"https://github.com/microsoft/TypeScript/issues/28960"},n[111].value),n[112].value)))),(0,t.tZ)("p",null,(0,t.tZ)("code",null,n[113].value),n[114].value,(0,t.tZ)("code",null,n[115].value),n[116].value),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,(0,t.tZ)("p",null,(0,t.tZ)("code",null,n[117].value)),(0,t.tZ)("blockquote",null,(0,t.tZ)("p",null,n[118].value,(0,t.tZ)("code",null,n[119].value),n[120].value),(0,t.tZ)("p",null,n[121].value)))),(0,t.tZ)(i.Z,{lang:"js"},n[122].value),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[123].value),(0,t.tZ)("th",null,n[124].value),(0,t.tZ)("th",null,n[125].value),(0,t.tZ)("th",null,n[126].value),(0,t.tZ)("th",null,n[127].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[128].value),(0,t.tZ)("td",null,n[129].value,(0,t.tZ)("code",null,n[130].value),n[131].value,(0,t.tZ)("code",null,n[132].value),n[133].value,(0,t.tZ)("code",null,n[134].value),n[135].value),(0,t.tZ)("td",null,n[136].value),(0,t.tZ)("td",null,n[137].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[138].value),(0,t.tZ)("td",null,n[139].value),(0,t.tZ)("td",null,n[140].value),(0,t.tZ)("td",null,n[141].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[142].value),(0,t.tZ)("td",null,n[143].value),(0,t.tZ)("td",null,n[144].value),(0,t.tZ)("td",null,n[145].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[146].value),(0,t.tZ)("td",null,n[147].value),(0,t.tZ)("td",null,n[148].value),(0,t.tZ)("td",null,n[149].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[150].value),(0,t.tZ)("td",null,n[151].value,(0,t.tZ)("code",null,n[152].value),n[153].value,(0,t.tZ)("code",null,n[154].value),n[155].value,(0,t.tZ)("code",null,n[156].value),n[157].value,(0,t.tZ)("code",null,n[158].value)),(0,t.tZ)("td",null,n[159].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[160].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[161].value),(0,t.tZ)("td",null,n[162].value),(0,t.tZ)("td",null,n[163].value),(0,t.tZ)("td",null,n[164].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[165].value),(0,t.tZ)("td",null,n[166].value,(0,t.tZ)("code",null,n[167].value),n[168].value,(0,t.tZ)("code",null,n[169].value),n[170].value,(0,t.tZ)("code",null,n[171].value),n[172].value),(0,t.tZ)("td",null,n[173].value),(0,t.tZ)("td",null,n[174].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[175].value),(0,t.tZ)("td",null,n[176].value),(0,t.tZ)("td",null,n[177].value),(0,t.tZ)("td",null,n[178].value),(0,t.tZ)("td",null,n[179].value)))),(0,t.tZ)("h2",{id:"faq"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,t.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,t.tZ)("h3",{id:"why-i-can-not-access-context-redux-configprovider-localeprefixclstheme-in-notification"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#why-i-can-not-access-context-redux-configprovider-localeprefixclstheme-in-notification"},(0,t.tZ)("span",{className:"icon icon-link"})),"Why I can not access context, redux, ConfigProvider ",(0,t.tZ)("code",null,n[180].value)," in notification?"),(0,t.tZ)("p",null,n[181].value,(0,t.tZ)("code",null,n[182].value),n[183].value),(0,t.tZ)("p",null,n[184].value,(0,t.tZ)("code",null,n[185].value),n[186].value,(0,t.tZ)("code",null,n[187].value),n[188].value,(0,t.tZ)("code",null,n[189].value),n[190].value),(0,t.tZ)(i.Z,{lang:"tsx"},n[191].value),(0,t.tZ)("p",null,(0,t.tZ)("strong",null,n[192].value),n[193].value,(0,t.tZ)("code",null,n[194].value),n[195].value),(0,t.tZ)("blockquote",null,(0,t.tZ)("p",null,(0,t.tZ)(o.rU,{to:"/components/app"},n[196].value),n[197].value,(0,t.tZ)("code",null,n[198].value),n[199].value)),(0,t.tZ)("h3",{id:"how-to-set-static-methods-prefixcls-"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-set-static-methods-prefixcls-"},(0,t.tZ)("span",{className:"icon icon-link"})),"How to set static methods prefixCls \uFF1F"),(0,t.tZ)("p",null,n[200].value,(0,t.tZ)(o.rU,{to:"/components/config-provider#configproviderconfig-4130"},(0,t.tZ)("code",null,n[201].value))))))}l.default=c}}]);
