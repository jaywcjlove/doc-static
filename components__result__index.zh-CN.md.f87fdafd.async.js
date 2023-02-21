"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1735],{61638:function(a,o,e){e.r(o);var d=e(2143),m=e(50250),p=e(59378),c=e(8910),h=e(74775),l=e(5937),v=e(2068),E=e(74399),x=e(63942),g=e(16073),P=e(24628),Z=e(19260),B=e(56140),s=e(5388),O=e(49545),f=e(6965),A=e(49706),D=e(95127),C=e(74418),M=e(73024),_=e(94065),u=e(67294),n=e(96923);function i(){var r=(0,_.eL)(),t=r.texts;return(0,n.tZ)(_.dY,null,(0,n.tZ)(u.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(s.Z,{items:[{demo:{id:"components-result-demo-success"},previewerProps:{title:"Success",filename:"components/result/demo/success.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
);
export default App;
`,description:"<p>\u6210\u529F\u7684\u7ED3\u679C\u3002</p>"}},{demo:{id:"components-result-demo-info"},previewerProps:{title:"Info",filename:"components/result/demo/info.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);
export default App;
`,description:"<p>\u5C55\u793A\u5904\u7406\u7ED3\u679C\u3002</p>"}},{demo:{id:"components-result-demo-warning"},previewerProps:{title:"Warning",filename:"components/result/demo/warning.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);
export default App;
`,description:"<p>\u8B66\u544A\u7C7B\u578B\u7684\u7ED3\u679C\u3002</p>"}},{demo:{id:"components-result-demo-403"},previewerProps:{title:"403",filename:"components/result/demo/403.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
`,description:"<p>\u4F60\u6CA1\u6709\u6B64\u9875\u9762\u7684\u8BBF\u95EE\u6743\u9650\u3002</p>"}},{demo:{id:"components-result-demo-404"},previewerProps:{title:"404",filename:"components/result/demo/404.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
`,description:"<p>\u6B64\u9875\u9762\u672A\u627E\u5230\u3002</p>"}},{demo:{id:"components-result-demo-500"},previewerProps:{title:"500",filename:"components/result/demo/500.tsx",jsx:`import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
`,description:"<p>\u670D\u52A1\u5668\u53D1\u751F\u4E86\u9519\u8BEF\u3002</p>"}},{demo:{id:"components-result-demo-error"},previewerProps:{title:"Error",filename:"components/result/demo/error.tsx",jsx:`import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';
const { Paragraph, Text } = Typography;
const App = () => (
  <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted has the following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
        frozen. <a>Thaw immediately &gt;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
        eligible to apply. <a>Apply Unlock &gt;</a>
      </Paragraph>
    </div>
  </Result>
);
export default App;
`,description:"<p>\u590D\u6742\u7684\u9519\u8BEF\u53CD\u9988\u3002</p>",style:`.site-result-demo-error-icon {
  color: red;
}`}},{demo:{id:"components-result-demo-customicon"},previewerProps:{title:"\u81EA\u5B9A\u4E49 icon",filename:"components/result/demo/customIcon.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';
const App = () => (
  <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />
);
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49 icon\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[2].value),(0,n.tZ)("th",null,t[3].value),(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[6].value),(0,n.tZ)("td",null,t[7].value),(0,n.tZ)("td",null,t[8].value),(0,n.tZ)("td",null,t[9].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[16].value),t[17].value,(0,n.tZ)("code",null,t[18].value),t[19].value,(0,n.tZ)("code",null,t[20].value),t[21].value,(0,n.tZ)("code",null,t[22].value),t[23].value,(0,n.tZ)("code",null,t[24].value),t[25].value,(0,n.tZ)("code",null,t[26].value),t[27].value,(0,n.tZ)("code",null,t[28].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[29].value))),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null,t[33].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[34].value),(0,n.tZ)("td",null,t[35].value),(0,n.tZ)("td",null,t[36].value),(0,n.tZ)("td",null,t[37].value)))))))}o.default=i}}]);
