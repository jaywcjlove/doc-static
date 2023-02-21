"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6518],{41603:function(_,o,t){t.r(o);var m=t(2143),c=t(50250),p=t(59378),Z=t(8910),a=t(74775),s=t(5937),v=t(2068),g=t(74399),h=t(63942),x=t(16073),f=t(24628),P=t(19260),E=t(56140),u=t(5388),A=t(49545),D=t(6965),M=t(49706),y=t(95127),C=t(74418),B=t(73024),l=t(94065),d=t(67294),e=t(96923);function i(){var r=(0,l.eL)(),n=r.texts;return(0,e.tZ)(l.dY,null,(0,e.tZ)(d.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n[1].value),(0,e.tZ)("li",null,n[2].value)),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(u.Z,{items:[{demo:{id:"components-message-demo-hooks"},previewerProps:{title:"Hooks usage (recommended)",filename:"components/message/demo/hooks.tsx",jsx:`import { Button, message } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </>
  );
};
export default App;
`,description:"<p>Use <code>message.useMessage</code> to get <code>contextHolder</code> with context accessible issue. Please note that, we recommend to use top level registration instead of <code>message</code> static method, because static method cannot consume context, and ConfigProvider data will not work.</p>"}},{demo:{id:"components-message-demo-other"},previewerProps:{title:"Other types of message",filename:"components/message/demo/other.tsx",jsx:`import { Button, message, Space } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
    </>
  );
};
export default App;
`,description:"<p>Messages of success, error and warning types.</p>"}},{demo:{id:"components-message-demo-duration"},previewerProps:{title:"Customize duration",filename:"components/message/demo/duration.tsx",jsx:`import { Button, message } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message for success, and it will disappear in 10 seconds',
      duration: 10,
    });
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized display duration</Button>
    </>
  );
};
export default App;
`,description:"<p>Customize message display duration from default <code>3s</code> to <code>10s</code>.</p>"}},{demo:{id:"components-message-demo-loading"},previewerProps:{title:"Message with loading indicator",filename:"components/message/demo/loading.tsx",jsx:`import { Button, message } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });
    // Dismiss manually and asynchronously
    setTimeout(messageApi.destroy, 2500);
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Display a loading indicator</Button>
    </>
  );
};
export default App;
`,description:"<p>Display a global loading indicator, which is dismissed by itself asynchronously.</p>"}},{demo:{id:"components-message-demo-thenable"},previewerProps:{title:"Promise interface",filename:"components/message/demo/thenable.tsx",jsx:`import { Button, message } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi
      .open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 2.5,
      })
      .then(() => message.success('Loading finished', 2.5))
      .then(() => message.info('Loading finished', 2.5));
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Display sequential messages</Button>
    </>
  );
};
export default App;
`,description:"<p><code>message</code> provides a promise interface for <code>onClose</code>. The above example will display a new message when the old message is about to close.</p>"}},{demo:{id:"components-message-demo-custom-style"},previewerProps:{title:"Customized style",filename:"components/message/demo/custom-style.tsx",jsx:`import { Button, message } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message with custom className and style',
      className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized style</Button>
    </>
  );
};
export default App;
`,description:"<p>The <code>style</code> and <code>className</code> are available to customize Message.</p>"}},{demo:{id:"components-message-demo-update"},previewerProps:{title:"Update Message Content",filename:"components/message/demo/update.tsx",jsx:`import { Button, message } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Loaded!',
        duration: 2,
      });
    }, 1000);
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openMessage}>
        Open the message box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>Update message content with unique <code>key</code>.</p>"}},{demo:{id:"components-message-demo-info"},previewerProps:{title:"Normal prompt",filename:"components/message/demo/info.tsx",jsx:`import { Button, message } from 'antd';
const info = () => {
  message.info('This is a normal message');
};
const App = () => (
  <Button type="primary" onClick={info}>
    Display normal message
  </Button>
);
export default App;
`,description:"<p>Normal message for information.</p>"}},{demo:{id:"components-message-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/message/demo/render-panel.tsx",jsx:`import { message } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = message;
export default () => <InternalPanel content="Hello World!" type="error" />;
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("p",null,n[3].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[4].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[5].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[6].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[7].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[8].value))),(0,e.tZ)(s.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[9].value),(0,e.tZ)("th",null,n[10].value),(0,e.tZ)("th",null,n[11].value),(0,e.tZ)("th",null,n[12].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[13].value),(0,e.tZ)("td",null,n[14].value),(0,e.tZ)("td",null,n[15].value),(0,e.tZ)("td",null,n[16].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[17].value),(0,e.tZ)("td",null,n[18].value),(0,e.tZ)("td",null,n[19].value),(0,e.tZ)("td",null,n[20].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[21].value),(0,e.tZ)("td",null,n[22].value),(0,e.tZ)("td",null,n[23].value),(0,e.tZ)("td",null,n[24].value)))),(0,e.tZ)("p",null,(0,e.tZ)("code",null,n[25].value),n[26].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[27].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[28].value))),(0,e.tZ)("p",null,n[29].value,(0,e.tZ)("code",null,n[30].value),n[31].value,(0,e.tZ)("code",null,n[32].value),n[33].value,(0,e.tZ)("code",null,n[34].value),n[35].value),(0,e.tZ)("p",null,n[36].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[37].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[38].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[39].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[40].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[41].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[42].value))),(0,e.tZ)("p",null,n[43].value),(0,e.tZ)(s.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[44].value),(0,e.tZ)("th",null,n[45].value),(0,e.tZ)("th",null,n[46].value),(0,e.tZ)("th",null,n[47].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[48].value),(0,e.tZ)("td",null,n[49].value),(0,e.tZ)("td",null,n[50].value),(0,e.tZ)("td",null,n[51].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[52].value),(0,e.tZ)("td",null,n[53].value),(0,e.tZ)("td",null,n[54].value),(0,e.tZ)("td",null,n[55].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[56].value),(0,e.tZ)("td",null,n[57].value),(0,e.tZ)("td",null,n[58].value),(0,e.tZ)("td",null,n[59].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[60].value),(0,e.tZ)("td",null,n[61].value),(0,e.tZ)("td",null,n[62].value),(0,e.tZ)("td",null,n[63].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[64].value),(0,e.tZ)("td",null,n[65].value),(0,e.tZ)("td",null,n[66].value),(0,e.tZ)("td",null,n[67].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[68].value),(0,e.tZ)("td",null,n[69].value),(0,e.tZ)("td",null,(0,e.tZ)("a",{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794"},n[70].value)),(0,e.tZ)("td",null,n[71].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[72].value),(0,e.tZ)("td",null,n[73].value),(0,e.tZ)("td",null,n[74].value),(0,e.tZ)("td",null,n[75].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[76].value),(0,e.tZ)("td",null,n[77].value),(0,e.tZ)("td",null,n[78].value),(0,e.tZ)("td",null,n[79].value)))),(0,e.tZ)("h3",{id:"global-static-methods"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#global-static-methods"},(0,e.tZ)("span",{className:"icon icon-link"})),"Global static methods"),(0,e.tZ)("p",null,n[80].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[81].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,n[82].value))),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n[83].value,(0,e.tZ)("code",null,n[84].value),n[85].value)),(0,e.tZ)("h4",{id:"messageconfig"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#messageconfig"},(0,e.tZ)("span",{className:"icon icon-link"})),"message.config"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n[86].value,(0,e.tZ)("code",null,n[87].value),n[88].value),(0,e.tZ)("p",null,n[89].value)),(0,e.tZ)(a.Z,{lang:"js"},n[90].value),(0,e.tZ)(s.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[91].value),(0,e.tZ)("th",null,n[92].value),(0,e.tZ)("th",null,n[93].value),(0,e.tZ)("th",null,n[94].value),(0,e.tZ)("th",null,n[95].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[96].value),(0,e.tZ)("td",null,n[97].value),(0,e.tZ)("td",null,n[98].value),(0,e.tZ)("td",null,n[99].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[100].value),(0,e.tZ)("td",null,n[101].value),(0,e.tZ)("td",null,n[102].value),(0,e.tZ)("td",null,n[103].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[104].value),(0,e.tZ)("td",null,n[105].value),(0,e.tZ)("td",null,n[106].value),(0,e.tZ)("td",null,n[107].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[108].value),(0,e.tZ)("td",null,n[109].value),(0,e.tZ)("td",null,n[110].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[111].value)),(0,e.tZ)("td",null,n[112].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[113].value),(0,e.tZ)("td",null,n[114].value),(0,e.tZ)("td",null,n[115].value),(0,e.tZ)("td",null,n[116].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[117].value),(0,e.tZ)("td",null,n[118].value),(0,e.tZ)("td",null,n[119].value),(0,e.tZ)("td",null,n[120].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("h3",{id:"why-i-can-not-access-context-redux-configprovider-localeprefixclstheme-in-message"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#why-i-can-not-access-context-redux-configprovider-localeprefixclstheme-in-message"},(0,e.tZ)("span",{className:"icon icon-link"})),"Why I can not access context, redux, ConfigProvider ",(0,e.tZ)("code",null,n[121].value)," in message?"),(0,e.tZ)("p",null,n[122].value,(0,e.tZ)("code",null,n[123].value),n[124].value),(0,e.tZ)("p",null,n[125].value,(0,e.tZ)("code",null,n[126].value),n[127].value,(0,e.tZ)("code",null,n[128].value),n[129].value,(0,e.tZ)("code",null,n[130].value),n[131].value),(0,e.tZ)(a.Z,{lang:"tsx"},n[132].value),(0,e.tZ)("p",null,(0,e.tZ)("strong",null,n[133].value),n[134].value,(0,e.tZ)("code",null,n[135].value),n[136].value),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,(0,e.tZ)(l.rU,{to:"/components/app"},n[137].value),n[138].value,(0,e.tZ)("code",null,n[139].value),n[140].value)),(0,e.tZ)("h3",{id:"how-to-set-static-methods-prefixcls-"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-set-static-methods-prefixcls-"},(0,e.tZ)("span",{className:"icon icon-link"})),"How to set static methods prefixCls \uFF1F"),(0,e.tZ)("p",null,n[141].value,(0,e.tZ)(l.rU,{to:"/components/config-provider#configproviderconfig-4130"},(0,e.tZ)("code",null,n[142].value))))))}o.default=i}}]);
