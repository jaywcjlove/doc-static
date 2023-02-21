"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2443],{66047:function(l,i,e){e.r(i);var u=e(2143),r=e(50250),m=e(59378),h=e(8910),t=e(74775),g=e(5937),c=e(2068),E=e(74399),P=e(63942),M=e(16073),x=e(24628),D=e(19260),O=e(56140),v=e(5388),Z=e(49545),p=e(6965),C=e(49706),f=e(95127),I=e(74418),A=e(73024),s=e(94065),a=e(67294),n=e(96923);function o(){var d=(0,s.eL)(),_=d.texts;return(0,n.tZ)(s.dY,null,(0,n.tZ)(a.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,_[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,_[1].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(s.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"basic",filename:"components/app/demo/basic.tsx",jsx:`import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>Static method for <code>message</code>, <code>notification</code>, <code>modal</code>.</p>"}}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"how-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"How to use"),(0,n.tZ)("h3",{id:"basic-usage"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage"},(0,n.tZ)("span",{className:"icon icon-link"})),"Basic usage"),(0,n.tZ)("p",null,_[2].value,(0,n.tZ)("code",null,_[3].value),_[4].value),(0,n.tZ)(t.Z,{lang:"tsx"},_[5].value),(0,n.tZ)("p",null,_[6].value),(0,n.tZ)("h3",{id:"sequence-with-configprovider"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-with-configprovider"},(0,n.tZ)("span",{className:"icon icon-link"})),"Sequence with ConfigProvider"),(0,n.tZ)("p",null,_[7].value,(0,n.tZ)("code",null,_[8].value),_[9].value),(0,n.tZ)(t.Z,{lang:"tsx"},_[10].value),(0,n.tZ)("h3",{id:"embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,n.tZ)("span",{className:"icon icon-link"})),"Embedded usage scenarios (if not necessary, try not to do nesting)"),(0,n.tZ)(t.Z,{lang:"tsx"},_[11].value),(0,n.tZ)("h3",{id:"global-scene-redux-scene"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#global-scene-redux-scene"},(0,n.tZ)("span",{className:"icon icon-link"})),"Global scene (redux scene)"),(0,n.tZ)(t.Z,{lang:"tsx"},_[12].value),(0,n.tZ)(t.Z,{lang:"tsx"},_[13].value))))}i.default=o}}]);
