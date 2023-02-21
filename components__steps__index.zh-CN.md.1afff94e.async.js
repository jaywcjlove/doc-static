"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6573],{64982:function(d,l,e){e.r(l);var p=e(2143),c=e(50250),m=e(59378),_=e(8910),v=e(74775),s=e(5937),Z=e(2068),h=e(74399),g=e(63942),S=e(16073),P=e(24628),f=e(19260),x=e(56140),o=e(5388),T=e(49545),C=e(6965),A=e(49706),E=e(95127),D=e(74418),I=e(73024),i=e(94065),r=e(67294),n=e(96923);function u(){var a=(0,i.eL)(),t=a.texts;return(0,n.tZ)(i.dY,null,(0,n.tZ)(r.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(o.Z,{items:[{demo:{id:"components-steps-demo-simple"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/steps/demo/simple.tsx",jsx:`import { Steps } from 'antd';
const description = 'This is a description.';
const App = () => (
  <Steps
    current={1}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u7B80\u5355\u7684\u6B65\u9AA4\u6761\u3002</p>"}},{demo:{id:"components-steps-demo-small-size"},previewerProps:{title:"\u8FF7\u4F60\u7248",filename:"components/steps/demo/small-size.tsx",jsx:`import { Steps } from 'antd';
const App = () => (
  <Steps
    size="small"
    current={1}
    items={[
      {
        title: 'Finished',
      },
      {
        title: 'In Progress',
      },
      {
        title: 'Waiting',
      },
    ]}
  />
);
export default App;
`,description:'<p>\u8FF7\u4F60\u7248\u7684\u6B65\u9AA4\u6761\uFF0C\u901A\u8FC7\u8BBE\u7F6E <code>&#x3C;Steps size="small"></code> \u542F\u7528.</p>'}},{demo:{id:"components-steps-demo-icon"},previewerProps:{title:"\u5E26\u56FE\u6807\u7684\u6B65\u9AA4\u6761",filename:"components/steps/demo/icon.tsx",jsx:`import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
const App = () => (
  <Steps
    items={[
      {
        title: 'Login',
        status: 'finish',
        icon: <UserOutlined />,
      },
      {
        title: 'Verification',
        status: 'finish',
        icon: <SolutionOutlined />,
      },
      {
        title: 'Pay',
        status: 'process',
        icon: <LoadingOutlined />,
      },
      {
        title: 'Done',
        status: 'wait',
        icon: <SmileOutlined />,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>items</code> \u7684 <code>icon</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u542F\u7528\u81EA\u5B9A\u4E49\u56FE\u6807\u3002</p>"}},{demo:{id:"components-steps-demo-step-next"},previewerProps:{title:"\u6B65\u9AA4\u5207\u6362",filename:"components/steps/demo/step-next.tsx",jsx:`import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];
const App = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: \`1px dashed \${token.colorBorder}\`,
    marginTop: 16,
  };
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default App;
`,description:"<p>\u901A\u5E38\u914D\u5408\u5185\u5BB9\u53CA\u6309\u94AE\u4F7F\u7528\uFF0C\u8868\u793A\u4E00\u4E2A\u6D41\u7A0B\u7684\u5904\u7406\u8FDB\u5EA6\u3002</p>"}},{demo:{id:"components-steps-demo-vertical"},previewerProps:{title:"\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761",filename:"components/steps/demo/vertical.tsx",jsx:`import { Steps } from 'antd';
const description = 'This is a description.';
const App = () => (
  <Steps
    direction="vertical"
    current={1}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u7B80\u5355\u7684\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761\u3002</p>"}},{demo:{id:"components-steps-demo-vertical-small"},previewerProps:{title:"\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761",filename:"components/steps/demo/vertical-small.tsx",jsx:`import { Steps } from 'antd';
const description = 'This is a description.';
const App = () => (
  <Steps
    direction="vertical"
    size="small"
    current={1}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u7B80\u5355\u7684\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761\u3002</p>"}},{demo:{id:"components-steps-demo-error"},previewerProps:{title:"\u6B65\u9AA4\u8FD0\u884C\u9519\u8BEF",filename:"components/steps/demo/error.tsx",jsx:`import { Steps } from 'antd';
const description = 'This is a description';
const App = () => (
  <Steps
    current={1}
    status="error"
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Process',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u4F7F\u7528 Steps \u7684 <code>status</code> \u5C5E\u6027\u6765\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\u3002</p>"}},{demo:{id:"components-steps-demo-progress-dot"},previewerProps:{title:"\u70B9\u72B6\u6B65\u9AA4\u6761",filename:"components/steps/demo/progress-dot.tsx",jsx:`import { Divider, Steps } from 'antd';
const App = () => (
  <>
    <Steps
      progressDot
      current={1}
      items={[
        {
          title: 'Finished',
          description: 'This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
    <Divider />
    <Steps
      progressDot
      current={1}
      direction="vertical"
      items={[
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
  </>
);
export default App;
`,description:"<p>\u5305\u542B\u6B65\u9AA4\u70B9\u7684\u8FDB\u5EA6\u6761\u3002</p>"}},{demo:{id:"components-steps-demo-customized-progress-dot"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u70B9\u72B6\u6B65\u9AA4\u6761",filename:"components/steps/demo/customized-progress-dot.tsx",jsx:`import { Popover, Steps } from 'antd';
const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const description = 'You can hover on the dot.';
const App = () => (
  <Steps
    current={1}
    progressDot={customDot}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u4E3A\u70B9\u72B6\u6B65\u9AA4\u6761\u589E\u52A0\u81EA\u5B9A\u4E49\u5C55\u793A\u3002</p>"}},{demo:{id:"components-steps-demo-progress-dot-small"},previewerProps:{debug:!0,title:"\u8FF7\u4F60\u7248\u70B9\u72B6\u6B65\u9AA4\u6761",filename:"components/steps/demo/progress-dot-small.tsx",jsx:`import { Divider, Steps } from 'antd';
const App = () => (
  <>
    <Steps
      progressDot
      current={1}
      size="small"
      items={[
        {
          title: 'Finished',
          description: 'This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
    <Divider />
    <Steps
      progressDot
      current={1}
      direction="vertical"
      size="small"
      items={[
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
  </>
);
export default App;
`,description:"<p>\u5305\u542B\u6B65\u9AA4\u70B9\u7684\u8FDB\u5EA6\u6761\u3002</p>"}},{demo:{id:"components-steps-demo-clickable"},previewerProps:{title:"\u53EF\u70B9\u51FB",filename:"components/steps/demo/clickable.tsx",jsx:`import { Divider, Steps } from 'antd';
import { useState } from 'react';
const App = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };
  const description = 'This is a description.';
  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Step 1',
            description,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />

      <Divider />

      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        items={[
          {
            title: 'Step 1',
            description,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>\u8BBE\u7F6E <code>onChange</code> \u540E\uFF0CSteps \u53D8\u4E3A\u53EF\u70B9\u51FB\u72B6\u6001\u3002</p>"}},{demo:{id:"components-steps-demo-nav"},previewerProps:{title:"\u5BFC\u822A\u6B65\u9AA4",filename:"components/steps/demo/nav.tsx",jsx:`import { Steps } from 'antd';
import { useState } from 'react';
const App = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  return (
    <>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            title: 'Step 1',
            subTitle: '00:00:05',
            status: 'finish',
            description: 'This is a description.',
          },
          {
            title: 'Step 2',
            subTitle: '00:01:02',
            status: 'process',
            description: 'This is a description.',
          },
          {
            title: 'Step 3',
            subTitle: 'waiting for longlong time',
            status: 'wait',
            description: 'This is a description.',
          },
        ]}
      />
      <Steps
        type="navigation"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            status: 'finish',
            title: 'Step 1',
          },
          {
            status: 'process',
            title: 'Step 2',
          },
          {
            status: 'wait',
            title: 'Step 3',
          },
          {
            status: 'wait',
            title: 'Step 4',
          },
        ]}
      />
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            status: 'finish',
            title: 'finish 1',
          },
          {
            status: 'finish',
            title: 'finish 2',
          },
          {
            status: 'process',
            title: 'current process',
          },
          {
            status: 'wait',
            title: 'wait',
            disabled: true,
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>\u5BFC\u822A\u7C7B\u578B\u7684\u6B65\u9AA4\u6761\u3002</p>"}},{demo:{id:"components-steps-demo-progress"},previewerProps:{title:"\u5E26\u6709\u8FDB\u5EA6\u7684\u6B65\u9AA4",filename:"components/steps/demo/progress.tsx",jsx:`import { Steps } from 'antd';
const description = 'This is a description.';
const App = () => (
  <Steps
    current={1}
    percent={60}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        subTitle: 'Left 00:00:08',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u5E26\u6709\u8FDB\u5EA6\u7684\u6B65\u9AA4\u3002</p>"}},{demo:{id:"components-steps-demo-label-placement"},previewerProps:{title:"\u6807\u7B7E\u653E\u7F6E\u4F4D\u7F6E",filename:"components/steps/demo/label-placement.tsx",jsx:`import { Steps } from 'antd';
const description = 'This is a description.';
const items = [
  {
    title: 'Finished',
    description,
  },
  {
    title: 'In Progress',
    description,
  },
  {
    title: 'Waiting',
    description,
  },
];
const App = () => (
  <>
    <Steps current={1} labelPlacement="vertical" items={items} />
    <br />
    <Steps current={1} percent={60} labelPlacement="vertical" items={items} />
    <br />
    <Steps current={1} size="small" labelPlacement="vertical" items={items} />
  </>
);
export default App;
`,description:"<p>\u4FEE\u6539\u6807\u7B7E\u653E\u7F6E\u4F4D\u7F6E\u4E3A <code>vertical</code>\u3002</p>"}},{demo:{id:"components-steps-demo-progress-debug"},previewerProps:{debug:!0,title:"Progress Debug",filename:"components/steps/demo/progress-debug.tsx",jsx:`import { Button, Space, Steps } from 'antd';
import { useState } from 'react';
const App = () => {
  const [percent, setPercentage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [status, setStatus] = useState('process');
  const description = 'This is a description.';
  const items = [
    {
      title: 'Finished',
      description,
    },
    {
      title: 'In Progress',
      subTitle: 'Left 00:00:08',
      description,
    },
    {
      title: 'Waiting',
      description,
    },
  ];
  return (
    <>
      <Space.Compact block>
        <Button onClick={() => setPercentage(undefined)}>Percentage to undefined</Button>
        <Button onClick={() => setPercentage((prev) => ((prev ?? 0) + 10) % 100)}>
          Percentage +
        </Button>
        <Button onClick={() => setCurrent((prev) => (prev + 1) % 3)}>Current +</Button>
        <Button onClick={() => setStatus('wait')}>Status Wait</Button>
        <Button onClick={() => setStatus('process')}>Status Process</Button>
        <Button onClick={() => setStatus('finish')}>Status Finish</Button>
        <Button onClick={() => setStatus('error')}>Status Error</Button>
      </Space.Compact>
      <br />
      <Steps current={current} percent={percent} status={status} items={items} />
      <Steps current={current} percent={percent} status={status} size="small" items={items} />
      <Steps
        current={current}
        percent={percent}
        status={status}
        direction="vertical"
        items={items}
      />
      <Steps
        current={current}
        percent={percent}
        status={status}
        size="small"
        direction="vertical"
        items={items}
      />
    </>
  );
};
export default App;
`,description:"<p>Buggy!</p>"}},{demo:{id:"components-steps-demo-steps-in-steps"},previewerProps:{debug:!0,title:"Steps \u5D4C\u5957 Steps",filename:"components/steps/demo/steps-in-steps.tsx",jsx:`import { Card, Radio, Steps } from 'antd';
import { useState } from 'react';
const App = () => {
  const [size, setSize] = useState('default');
  const description = 'This is a description.';
  const horizontalSteps = (
    <Card>
      <Steps
        size={size}
        items={[
          {
            title: 'Finished',
            description,
          },
          {
            title: 'In Progress',
            description,
          },
          {
            title: 'Waiting',
            description,
          },
        ]}
      />
    </Card>
  );
  return (
    <>
      <Radio.Group
        style={{
          marginBottom: 16,
        }}
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <Radio value="small">Small</Radio>
        <Radio value="default">Default</Radio>
      </Radio.Group>
      <Steps
        size={size}
        direction="vertical"
        items={[
          {
            title: 'Finished',
            description: horizontalSteps,
          },
          {
            title: 'In Progress',
            description,
          },
          {
            title: 'Waiting',
            description,
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>\u6D4B\u8BD5 Steps \u5D4C\u5957 Steps \u7684\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-steps-demo-inline"},previewerProps:{title:"\u5185\u8054\u6B65\u9AA4",filename:"components/steps/demo/inline.tsx",jsx:`import { Avatar, List, Steps } from 'antd';
const data = [
  {
    title: 'Ant Design Title 1',
    current: 0,
  },
  {
    title: 'Ant Design Title 2',
    current: 1,
    status: 'error',
  },
  {
    title: 'Ant Design Title 3',
    current: 2,
  },
  {
    title: 'Ant Design Title 4',
    current: 1,
  },
];
const items = [
  {
    title: 'Step 1',
    description: 'This is a Step 1.',
  },
  {
    title: 'Step 2',
    description: 'This is a Step 2.',
  },
  {
    title: 'Step 3',
    description: 'This is a Step 3.',
  },
];
const App = () => (
  <div>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          <Steps
            style={{
              marginTop: 8,
            }}
            type="inline"
            current={item.current}
            status={item.status}
            items={items}
          />
        </List.Item>
      )}
    />
  </div>
);
export default App;
`,description:"<p>\u5185\u8054\u7C7B\u578B\u7684\u6B65\u9AA4\u6761\uFF0C\u9002\u7528\u4E8E\u5217\u8868\u5185\u5BB9\u573A\u666F\u4E2D\u5C55\u793A\u5BF9\u8C61\u6240\u5728\u6D41\u7A0B\u3001\u5F53\u524D\u72B6\u6001\u7684\u60C5\u51B5\u3002</p>"}},{demo:{id:"components-steps-demo-wireframe"},previewerProps:{debug:!0,title:"\u7EBF\u6846\u98CE\u683C",filename:"components/steps/demo/wireframe.tsx",jsx:`import { ConfigProvider, Steps } from 'antd';
const description = 'This is a description.';
const App = () => (
  <ConfigProvider
    theme={{
      token: {
        wireframe: true,
      },
    }}
  >
    <Steps
      current={1}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
          subTitle: 'Left 00:00:08',
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
  </ConfigProvider>
);
export default App;
`,description:"<p>\u7EBF\u6846\u98CE\u683C\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"steps"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#steps"},(0,n.tZ)("span",{className:"icon icon-link"})),"Steps"),(0,n.tZ)("p",null,t[2].value),(0,n.tZ)(s.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[3].value),(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[8].value),(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value,(0,n.tZ)("code",null,t[14].value),t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value,(0,n.tZ)("code",null,t[20].value),t[21].value,(0,n.tZ)("code",null,t[22].value),t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[25].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,t[31].value,(0,n.tZ)("code",null,t[32].value),t[33].value),(0,n.tZ)("td",null,t[34].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[35].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[36].value),(0,n.tZ)("td",null,t[37].value,(0,n.tZ)("code",null,t[38].value),t[39].value),(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null,t[44].value,(0,n.tZ)("code",null,t[45].value)),(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null,t[47].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null,t[49].value,(0,n.tZ)("code",null,t[50].value),t[51].value),(0,n.tZ)("td",null,t[52].value),(0,n.tZ)("td",null,t[53].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null,t[55].value,(0,n.tZ)("code",null,t[56].value),t[57].value,(0,n.tZ)("code",null,t[58].value),t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[61].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[62].value),(0,n.tZ)("td",null,t[63].value,(0,n.tZ)("code",null,t[64].value),t[65].value,(0,n.tZ)("code",null,t[66].value),t[67].value,(0,n.tZ)("code",null,t[68].value),t[69].value,(0,n.tZ)("code",null,t[70].value)),(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[72].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[73].value),(0,n.tZ)("td",null,t[74].value,(0,n.tZ)("code",null,t[75].value),t[76].value,(0,n.tZ)("code",null,t[77].value),t[78].value,(0,n.tZ)("code",null,t[79].value)),(0,n.tZ)("td",null,t[80].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[81].value)),(0,n.tZ)("td",null,t[82].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[83].value),(0,n.tZ)("td",null,t[84].value),(0,n.tZ)("td",null,t[85].value),(0,n.tZ)("td",null,t[86].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[87].value),(0,n.tZ)("td",null,t[88].value),(0,n.tZ)("td",null,(0,n.tZ)(i.rU,{to:"#stepitem"},t[89].value)),(0,n.tZ)("td",null,t[90].value),(0,n.tZ)("td",null,t[91].value)))),(0,n.tZ)("h3",{id:"typeinline"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#typeinline"},(0,n.tZ)("span",{className:"icon icon-link"})),(0,n.tZ)("code",null,t[92].value)),(0,n.tZ)(s.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[93].value),(0,n.tZ)("th",null,t[94].value),(0,n.tZ)("th",null,t[95].value),(0,n.tZ)("th",null,t[96].value),(0,n.tZ)("th",null,t[97].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[98].value),(0,n.tZ)("td",null,t[99].value),(0,n.tZ)("td",null,t[100].value),(0,n.tZ)("td",null,t[101].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[102].value),(0,n.tZ)("td",null,t[103].value,(0,n.tZ)("code",null,t[104].value),t[105].value),(0,n.tZ)("td",null,t[106].value),(0,n.tZ)("td",null,t[107].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[108].value),(0,n.tZ)("td",null,t[109].value),(0,n.tZ)("td",null,t[110].value),(0,n.tZ)("td",null,t[111].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[112].value),(0,n.tZ)("td",null,t[113].value,(0,n.tZ)("code",null,t[114].value),t[115].value,(0,n.tZ)("code",null,t[116].value),t[117].value,(0,n.tZ)("code",null,t[118].value),t[119].value,(0,n.tZ)("code",null,t[120].value)),(0,n.tZ)("td",null,t[121].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[122].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[123].value),(0,n.tZ)("td",null,t[124].value),(0,n.tZ)("td",null,t[125].value),(0,n.tZ)("td",null,t[126].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[127].value),(0,n.tZ)("td",null,t[128].value,(0,n.tZ)("code",null,t[129].value),t[130].value,(0,n.tZ)("code",null,t[131].value)),(0,n.tZ)("td",null,(0,n.tZ)(i.rU,{to:"#stepitem"},t[132].value)),(0,n.tZ)("td",null,t[133].value),(0,n.tZ)("td",null,t[134].value)))),(0,n.tZ)("h3",{id:"stepitem"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#stepitem"},(0,n.tZ)("span",{className:"icon icon-link"})),"StepItem"),(0,n.tZ)("p",null,t[135].value),(0,n.tZ)(s.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[136].value),(0,n.tZ)("th",null,t[137].value),(0,n.tZ)("th",null,t[138].value),(0,n.tZ)("th",null,t[139].value),(0,n.tZ)("th",null,t[140].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[141].value),(0,n.tZ)("td",null,t[142].value),(0,n.tZ)("td",null,t[143].value),(0,n.tZ)("td",null,t[144].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[145].value),(0,n.tZ)("td",null,t[146].value),(0,n.tZ)("td",null,t[147].value),(0,n.tZ)("td",null,t[148].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[149].value),(0,n.tZ)("td",null,t[150].value),(0,n.tZ)("td",null,t[151].value),(0,n.tZ)("td",null,t[152].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[153].value),(0,n.tZ)("td",null,t[154].value,(0,n.tZ)("code",null,t[155].value),t[156].value,(0,n.tZ)("code",null,t[157].value),t[158].value,(0,n.tZ)("code",null,t[159].value),t[160].value,(0,n.tZ)("code",null,t[161].value),t[162].value,(0,n.tZ)("code",null,t[163].value)),(0,n.tZ)("td",null,t[164].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[165].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[166].value),(0,n.tZ)("td",null,t[167].value),(0,n.tZ)("td",null,t[168].value),(0,n.tZ)("td",null,t[169].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[170].value),(0,n.tZ)("td",null,t[171].value),(0,n.tZ)("td",null,t[172].value),(0,n.tZ)("td",null,t[173].value),(0,n.tZ)("td",null)))))))}l.default=u}}]);
