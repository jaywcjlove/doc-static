"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[4783],{56722:function(d,o,t){t.r(o);var c=t(2143),_=t(50250),p=t(59378),m=t(8910),g=t(74775),l=t(5937),v=t(2068),Z=t(74399),h=t(63942),x=t(16073),A=t(24628),E=t(19260),f=t(56140),s=t(5388),D=t(49545),w=t(6965),I=t(49706),y=t(95127),P=t(74418),T=t(73024),r=t(94065),i=t(67294),n=t(96923);function a(){var u=(0,r.eL)(),e=u.texts;return(0,n.tZ)(r.dY,null,(0,n.tZ)(i.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[1].value),(0,n.tZ)("li",null,e[2].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(s.Z,{items:[{demo:{id:"components-alert-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/alert/demo/basic.tsx",jsx:`import { Alert } from 'antd';
const App = () => <Alert message="Success Text" type="success" />;
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u9002\u7528\u4E8E\u7B80\u77ED\u7684\u8B66\u544A\u63D0\u793A\u3002</p>"}},{demo:{id:"components-alert-demo-style"},previewerProps:{title:"\u56DB\u79CD\u6837\u5F0F",filename:"components/alert/demo/style.tsx",jsx:`import { Alert, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert message="Success Text" type="success" />
    <Alert message="Info Text" type="info" />
    <Alert message="Warning Text" type="warning" />
    <Alert message="Error Text" type="error" />
  </Space>
);
export default App;
`,description:"<p>\u5171\u6709\u56DB\u79CD\u6837\u5F0F <code>success</code>\u3001<code>info</code>\u3001<code>warning</code>\u3001<code>error</code>\u3002</p>"}},{demo:{id:"components-alert-demo-closable"},previewerProps:{title:"\u53EF\u5173\u95ED\u7684\u8B66\u544A\u63D0\u793A",filename:"components/alert/demo/closable.tsx",jsx:`import { Alert, Space } from 'antd';
const onClose = (e) => {
  console.log(e, 'I was closed.');
};
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      onClose={onClose}
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
      onClose={onClose}
    />
  </Space>
);
export default App;
`,description:"<p>\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u70B9\u51FB\u53EF\u5173\u95ED\u8B66\u544A\u63D0\u793A\u3002</p>"}},{demo:{id:"components-alert-demo-description"},previewerProps:{title:"\u542B\u6709\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD",filename:"components/alert/demo/description.tsx",jsx:`import { Alert, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert
      message="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
    />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
    />
    <Alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
    />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
    />
  </Space>
);
export default App;
`,description:"<p>\u542B\u6709\u8F85\u52A9\u6027\u6587\u5B57\u4ECB\u7ECD\u7684\u8B66\u544A\u63D0\u793A\u3002</p>"}},{demo:{id:"components-alert-demo-icon"},previewerProps:{title:"\u56FE\u6807",filename:"components/alert/demo/icon.tsx",jsx:`import { Alert, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert message="Success Tips" type="success" showIcon />
    <Alert message="Informational Notes" type="info" showIcon />
    <Alert message="Warning" type="warning" showIcon closable />
    <Alert message="Error" type="error" showIcon />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
    />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </Space>
);
export default App;
`,description:"<p>\u53EF\u53E3\u7684\u56FE\u6807\u8BA9\u4FE1\u606F\u7C7B\u578B\u66F4\u52A0\u9192\u76EE\u3002</p>"}},{demo:{id:"components-alert-demo-close-text"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u5173\u95ED",filename:"components/alert/demo/close-text.tsx",jsx:`import { Alert } from 'antd';
const App = () => <Alert message="Info Text" type="info" closeText="Close Now" />;
export default App;
`,description:"<p>\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5173\u95ED\uFF0C\u81EA\u5B9A\u4E49\u7684\u6587\u5B57\u4F1A\u66FF\u6362\u539F\u5148\u7684\u5173\u95ED <code>Icon</code>\u3002</p>"}},{demo:{id:"components-alert-demo-banner"},previewerProps:{iframe:"250",title:"\u9876\u90E8\u516C\u544A",filename:"components/alert/demo/banner.tsx",jsx:`import { Alert, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert message="Warning text" banner />
    <Alert
      message="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <Alert showIcon={false} message="Warning text without icon" banner />
    <Alert type="error" message="Error text" banner />
  </Space>
);
export default App;
`,description:"<p>\u9875\u9762\u9876\u90E8\u901A\u544A\u5F62\u5F0F\uFF0C\u9ED8\u8BA4\u6709\u56FE\u6807\u4E14 <code>type</code> \u4E3A 'warning'\u3002</p>"}},{demo:{id:"components-alert-demo-loop-banner"},previewerProps:{title:"\u8F6E\u64AD\u7684\u516C\u544A",filename:"components/alert/demo/loop-banner.tsx",jsx:`import { Alert } from 'antd';
import React from 'react';
import Marquee from 'react-fast-marquee';
const App = () => (
  <Alert
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
    }
  />
);
export default App;
`,description:'<p>\u914D\u5408 <a href="https://npmjs.com/package/react-text-loop-next">react-text-loop-next</a> \u6216 <a href="https://npmjs.com/package/react-fast-marquee">react-fast-marquee</a> \u5B9E\u73B0\u6D88\u606F\u8F6E\u64AD\u901A\u77E5\u680F\u3002</p>'}},{demo:{id:"components-alert-demo-smooth-closed"},previewerProps:{title:"\u5E73\u6ED1\u5730\u5378\u8F7D",filename:"components/alert/demo/smooth-closed.tsx",jsx:`import { Alert, Space, Switch } from 'antd';
import { useState } from 'react';
const App = () => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      {visible && (
        <Alert message="Alert Message Text" type="success" closable afterClose={handleClose} />
      )}
      <p>click the close button to see the effect</p>
      <Switch onChange={setVisible} checked={visible} disabled={visible} />
    </Space>
  );
};
export default App;
`,description:"<p>\u5E73\u6ED1\u3001\u81EA\u7136\u7684\u5378\u8F7D\u63D0\u793A\u3002</p>"}},{demo:{id:"components-alert-demo-error-boundary"},previewerProps:{title:"React \u9519\u8BEF\u5904\u7406",filename:"components/alert/demo/error-boundary.tsx",jsx:`import { Alert, Button } from 'antd';
import { useState } from 'react';
const { ErrorBoundary } = Alert;
const ThrowError = () => {
  const [error, setError] = useState();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };
  if (error) {
    throw error;
  }
  return (
    <Button danger onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};
const App = () => (
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>
);
export default App;
`,description:'<p>\u53CB\u597D\u7684 <a href="https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html">React \u9519\u8BEF\u5904\u7406</a> \u5305\u88F9\u7EC4\u4EF6\u3002</p>'}},{demo:{id:"components-alert-demo-custom-icon"},previewerProps:{debug:!0,title:"\u81EA\u5B9A\u4E49\u56FE\u6807",filename:"components/alert/demo/custom-icon.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { Alert, Space } from 'antd';
const icon = <SmileOutlined />;
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert icon={icon} message="showIcon = false" type="success" />
    <Alert icon={icon} message="Success Tips" type="success" showIcon />
    <Alert icon={icon} message="Informational Notes" type="info" showIcon />
    <Alert icon={icon} message="Warning" type="warning" showIcon />
    <Alert icon={icon} message="Error" type="error" showIcon />
    <Alert
      icon={icon}
      message="Success Tips"
      description="Detailed description and advices about successful copywriting."
      type="success"
      showIcon
    />
    <Alert
      icon={icon}
      message="Informational Notes"
      description="Additional description and informations about copywriting."
      type="info"
      showIcon
    />
    <Alert
      icon={icon}
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <Alert
      icon={icon}
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </Space>
);
export default App;
`,description:"<p>\u53EF\u53E3\u7684\u56FE\u6807\u8BA9\u4FE1\u606F\u7C7B\u578B\u66F4\u52A0\u9192\u76EE\u3002</p>"}},{demo:{id:"components-alert-demo-action"},previewerProps:{title:"\u64CD\u4F5C",filename:"components/alert/demo/action.tsx",jsx:`import { Alert, Button, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert
      message="Success Tips"
      type="success"
      showIcon
      action={
        <Button size="small" type="text">
          UNDO
        </Button>
      }
      closable
    />
    <Alert
      message="Error Text"
      showIcon
      description="Error Description Error Description Error Description Error Description"
      type="error"
      action={
        <Button size="small" danger>
          Detail
        </Button>
      }
    />
    <Alert
      message="Warning Text"
      type="warning"
      action={
        <Space>
          <Button size="small" type="ghost">
            Done
          </Button>
        </Space>
      }
      closable
    />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
      action={
        <Space direction="vertical">
          <Button size="small" type="primary">
            Accept
          </Button>
          <Button size="small" danger type="ghost">
            Decline
          </Button>
        </Space>
      }
      closable
    />
  </Space>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u5728\u53F3\u4E0A\u89D2\u81EA\u5B9A\u4E49\u64CD\u4F5C\u9879\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[3].value),(0,n.tZ)("th",null,e[4].value),(0,n.tZ)("th",null,e[5].value),(0,n.tZ)("th",null,e[6].value),(0,n.tZ)("th",null,e[7].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[8].value),(0,n.tZ)("td",null,e[9].value),(0,n.tZ)("td",null,e[10].value),(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null,e[12].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[32].value)),(0,n.tZ)("td",null,e[33].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[34].value),(0,n.tZ)("td",null,e[35].value),(0,n.tZ)("td",null,e[36].value),(0,n.tZ)("td",null,e[37].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null,e[39].value,(0,n.tZ)("code",null,e[40].value),e[41].value),(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null,e[43].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[44].value),(0,n.tZ)("td",null,e[45].value),(0,n.tZ)("td",null,e[46].value),(0,n.tZ)("td",null,e[47].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[48].value),(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null,e[50].value),(0,n.tZ)("td",null,e[51].value,(0,n.tZ)("code",null,e[52].value),e[53].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[54].value),(0,n.tZ)("td",null,e[55].value,(0,n.tZ)("code",null,e[56].value),e[57].value,(0,n.tZ)("code",null,e[58].value),e[59].value,(0,n.tZ)("code",null,e[60].value),e[61].value,(0,n.tZ)("code",null,e[62].value)),(0,n.tZ)("td",null,e[63].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[64].value),e[65].value,(0,n.tZ)("code",null,e[66].value),e[67].value,(0,n.tZ)("code",null,e[68].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[69].value),(0,n.tZ)("td",null,e[70].value),(0,n.tZ)("td",null,e[71].value),(0,n.tZ)("td",null,e[72].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"alerterrorboundary"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#alerterrorboundary"},(0,n.tZ)("span",{className:"icon icon-link"})),"Alert.ErrorBoundary"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[73].value),(0,n.tZ)("th",null,e[74].value),(0,n.tZ)("th",null,e[75].value),(0,n.tZ)("th",null,e[76].value),(0,n.tZ)("th",null,e[77].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[78].value),(0,n.tZ)("td",null,e[79].value),(0,n.tZ)("td",null,e[80].value),(0,n.tZ)("td",null,e[81].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[82].value),(0,n.tZ)("td",null,e[83].value),(0,n.tZ)("td",null,e[84].value),(0,n.tZ)("td",null,e[85].value),(0,n.tZ)("td",null)))))))}o.default=a}}]);
