"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6274],{43078:function(p,l,t){t.r(l);var m=t(2143),s=t(50250),c=t(59378),_=t(8910),w=t(74775),r=t(5937),v=t(2068),g=t(74399),Z=t(63942),h=t(16073),D=t(24628),b=t(19260),f=t(56140),d=t(5388),B=t(49545),k=t(6965),y=t(49706),O=t(95127),E=t(74418),x=t(73024),o=t(94065),a=t(67294),n=t(96923);function u(){var i=(0,o.eL)(),e=i.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(a.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,e[1].value),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[2].value),(0,n.tZ)("li",null,e[3].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(d.Z,{items:[{demo:{id:"components-dropdown-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/dropdown/demo/basic.tsx",jsx:`import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];
const App = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u4E0B\u62C9\u83DC\u5355\u3002</p>"}},{demo:{id:"components-dropdown-demo-placement"},previewerProps:{title:"\u5F39\u51FA\u4F4D\u7F6E",filename:"components/dropdown/demo/placement.tsx",jsx:`import { Button, Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];
const App = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button>bottomLeft</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button>bottom</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
      >
        <Button>bottomRight</Button>
      </Dropdown>
    </Space>
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="topLeft"
      >
        <Button>topLeft</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="top"
      >
        <Button>top</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="topRight"
      >
        <Button>topRight</Button>
      </Dropdown>
    </Space>
  </Space>
);
export default App;
`,description:"<p>\u652F\u6301 6 \u4E2A\u5F39\u51FA\u4F4D\u7F6E\u3002</p>"}},{demo:{id:"components-dropdown-demo-arrow"},previewerProps:{title:"\u7BAD\u5934",filename:"components/dropdown/demo/arrow.tsx",jsx:`import { Button, Dropdown } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];
const App = () => (
  <>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow
    >
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      arrow
    >
      <Button>bottom</Button>
    </Dropdown>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
    >
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown
      menu={{
        items,
      }}
      placement="topLeft"
      arrow
    >
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown
      menu={{
        items,
      }}
      placement="top"
      arrow
    >
      <Button>top</Button>
    </Dropdown>
    <Dropdown
      menu={{
        items,
      }}
      placement="topRight"
      arrow
    >
      <Button>topRight</Button>
    </Dropdown>
  </>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u5C55\u793A\u4E00\u4E2A\u7BAD\u5934\u3002</p>",style:`#components-dropdown-demo-arrow .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.ant-row-rtl #components-dropdown-demo-arrow .ant-btn {
  margin-right: 0;
  margin-bottom: 8px;
  margin-left: 8px;
}`}},{demo:{id:"components-dropdown-demo-item"},previewerProps:{title:"\u5176\u4ED6\u5143\u7D20",filename:"components/dropdown/demo/item.tsx",jsx:`import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item\uFF08disabled\uFF09',
    key: '3',
    disabled: true,
  },
];
const App = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default App;
`,description:"<p>\u5206\u5272\u7EBF\u548C\u4E0D\u53EF\u7528\u83DC\u5355\u9879\u3002</p>"}},{demo:{id:"components-dropdown-demo-arrow-center"},previewerProps:{title:"\u7BAD\u5934\u6307\u5411",filename:"components/dropdown/demo/arrow-center.tsx",jsx:`import { Button, Dropdown } from 'antd';
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];
const App = () => (
  <>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Button>bottom</Button>
    </Dropdown>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown
      menu={{
        items,
      }}
      placement="topLeft"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown
      menu={{
        items,
      }}
      placement="top"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Button>top</Button>
    </Dropdown>
    <Dropdown
      menu={{
        items,
      }}
      placement="topRight"
      arrow={{
        pointAtCenter: true,
      }}
    >
      <Button>topRight</Button>
    </Dropdown>
  </>
);
export default App;
`,description:"<p>\u8BBE\u7F6E <code>arrow</code> \u4E3A <code>{ pointAtCenter: true }</code> \u540E\uFF0C\u7BAD\u5934\u5C06\u6307\u5411\u76EE\u6807\u5143\u7D20\u7684\u4E2D\u5FC3\u3002</p>",style:`#components-dropdown-demo-arrow-center .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.ant-row-rtl #components-dropdown-demo-arrow-center .ant-btn {
  margin-right: 0;
  margin-bottom: 8px;
  margin-left: 8px;
}`}},{demo:{id:"components-dropdown-demo-trigger"},previewerProps:{title:"\u89E6\u53D1\u65B9\u5F0F",filename:"components/dropdown/demo/trigger.tsx",jsx:`import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
const App = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Click me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default App;
`,description:"<p>\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u89E6\u53D1\u3002</p>"}},{demo:{id:"components-dropdown-demo-event"},previewerProps:{title:"\u89E6\u53D1\u4E8B\u4EF6",filename:"components/dropdown/demo/event.tsx",jsx:`import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
const onClick = ({ key }) => {
  message.info(\`Click on item \${key}\`);
};
const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
const App = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me, Click menu item
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default App;
`,description:"<p>\u70B9\u51FB\u83DC\u5355\u9879\u540E\u4F1A\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u76F8\u5E94\u7684\u83DC\u5355\u9879 key \u8FDB\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\u3002</p>"}},{demo:{id:"components-dropdown-demo-dropdown-button"},previewerProps:{title:"\u5E26\u4E0B\u62C9\u6846\u7684\u6309\u94AE",filename:"components/dropdown/demo/dropdown-button.tsx",jsx:`import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const App = () => (
  <Space wrap>
    <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button menu={menuProps} onClick={handleButtonClick} disabled>
      Dropdown
    </Dropdown.Button>
    <Dropdown.Button
      menu={menuProps}
      buttonsRender={([leftButton, rightButton]) => [
        <Tooltip title="tooltip" key="leftButton">
          {leftButton}
        </Tooltip>,
        React.cloneElement(rightButton, {
          loading: true,
        }),
      ]}
    >
      With Tooltip
    </Dropdown.Button>
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
    <Dropdown.Button menu={menuProps} onClick={handleButtonClick} danger>
      Danger
    </Dropdown.Button>
  </Space>
);
export default App;
`,description:"<p>\u5DE6\u8FB9\u662F\u6309\u94AE\uFF0C\u53F3\u8FB9\u662F\u989D\u5916\u7684\u76F8\u5173\u529F\u80FD\u83DC\u5355\u3002\u53EF\u8BBE\u7F6E <code>icon</code> \u5C5E\u6027\u6765\u4FEE\u6539\u53F3\u8FB9\u7684\u56FE\u6807\u3002</p>"}},{demo:{id:"components-dropdown-demo-custom-dropdown"},previewerProps:{title:"\u6269\u5C55\u83DC\u5355",filename:"components/dropdown/demo/custom-dropdown.tsx",jsx:`import { DownOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Space, theme } from 'antd';
import React from 'react';
const { useToken } = theme;
const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
];
const App = () => {
  const { token } = useToken();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: 'none',
  };
  return (
    <Dropdown
      menu={{
        items,
      }}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          {React.cloneElement(menu, {
            style: menuStyle,
          })}
          <Divider
            style={{
              margin: 0,
            }}
          />
          <Space
            style={{
              padding: 8,
            }}
          >
            <Button type="primary">Click me!</Button>
          </Space>
        </div>
      )}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
export default App;
`,description:"<p>\u4F7F\u7528 <code>dropdownRender</code> \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002\u5982\u679C\u4F60\u5E76\u4E0D\u9700\u8981 Menu \u5185\u5BB9\uFF0C\u8BF7\u76F4\u63A5\u4F7F\u7528 Popover \u7EC4\u4EF6\u3002</p>"}},{demo:{id:"components-dropdown-demo-sub-menu"},previewerProps:{title:"\u591A\u7EA7\u83DC\u5355",filename:"components/dropdown/demo/sub-menu.tsx",jsx:`import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    key: '1',
    type: 'group',
    label: 'Group title',
    children: [
      {
        key: '1-1',
        label: '1st menu item',
      },
      {
        key: '1-2',
        label: '2nd menu item',
      },
    ],
  },
  {
    key: '2',
    label: 'sub menu',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: 'disabled sub menu',
    disabled: true,
    children: [
      {
        key: '3-1',
        label: '5d menu item',
      },
      {
        key: '3-2',
        label: '6th menu item',
      },
    ],
  },
];
const App = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Cascading menu
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default App;
`,description:"<p>\u4F20\u5165\u7684\u83DC\u5355\u91CC\u6709\u591A\u4E2A\u5C42\u7EA7\u3002</p>"}},{demo:{id:"components-dropdown-demo-overlay-open"},previewerProps:{title:"\u83DC\u5355\u9690\u85CF\u65B9\u5F0F",filename:"components/dropdown/demo/overlay-open.tsx",jsx:`import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useState } from 'react';
const App = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const items = [
    {
      label: 'Clicking me will not close the menu.',
      key: '1',
    },
    {
      label: 'Clicking me will not close the menu also.',
      key: '2',
    },
    {
      label: 'Clicking me will close the menu.',
      key: '3',
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
export default App;
`,description:"<p>\u9ED8\u8BA4\u662F\u70B9\u51FB\u5173\u95ED\u83DC\u5355\uFF0C\u53EF\u4EE5\u5173\u95ED\u6B64\u529F\u80FD\u3002</p>"}},{demo:{id:"components-dropdown-demo-context-menu"},previewerProps:{title:"\u53F3\u952E\u83DC\u5355",filename:"components/dropdown/demo/context-menu.tsx",jsx:`import { Dropdown, theme } from 'antd';
const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
const App = () => {
  const {
    token: { colorBgLayout, colorTextTertiary },
  } = theme.useToken();
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['contextMenu']}
    >
      <div
        style={{
          color: colorTextTertiary,
          background: colorBgLayout,
          height: 200,
          textAlign: 'center',
          lineHeight: '200px',
        }}
      >
        Right Click on here
      </div>
    </Dropdown>
  );
};
export default App;
`,description:"<p>\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u9F20\u6807\u53F3\u952E\u89E6\u53D1\u3002</p>"}},{demo:{id:"components-dropdown-demo-loading"},previewerProps:{title:"\u52A0\u8F7D\u4E2D\u72B6\u6001",filename:"components/dropdown/demo/loading.tsx",jsx:`import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useState } from 'react';
const items = [
  {
    label: 'Submit and continue',
    key: '1',
  },
];
const App = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((state) => {
      const newLoadings = [...state];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((state) => {
        const newLoadings = [...state];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <Space direction="vertical">
      <Dropdown.Button
        type="primary"
        loading
        menu={{
          items,
        }}
      >
        Submit
      </Dropdown.Button>
      <Dropdown.Button
        type="primary"
        size="small"
        loading
        menu={{
          items,
        }}
      >
        Submit
      </Dropdown.Button>
      <Dropdown.Button
        type="primary"
        loading={loadings[0]}
        menu={{
          items,
        }}
        onClick={() => enterLoading(0)}
      >
        Submit
      </Dropdown.Button>
      <Dropdown.Button
        icon={<DownOutlined />}
        loading={loadings[1]}
        menu={{
          items,
        }}
        onClick={() => enterLoading(1)}
      >
        Submit
      </Dropdown.Button>
    </Space>
  );
};
export default App;
`,description:"<p>\u6DFB\u52A0 <code>loading</code> \u5C5E\u6027\u5373\u53EF\u8BA9\u6309\u94AE\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF0C\u6700\u540E\u4E24\u4E2A\u6309\u94AE\u6F14\u793A\u70B9\u51FB\u540E\u8FDB\u5165\u52A0\u8F7D\u72B6\u6001\u3002</p>"}},{demo:{id:"components-dropdown-demo-selectable"},previewerProps:{title:"\u83DC\u5355\u53EF\u9009\u9009\u62E9",filename:"components/dropdown/demo/selectable.tsx",jsx:`import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
const items = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
];
const App = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['3'],
    }}
  >
    <Typography.Link>
      <Space>
        Selectable
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);
export default App;
`,description:"<p>\u6DFB\u52A0 <code>menu</code> \u4E2D\u7684 <code>selectable</code> \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u9009\u62E9\u80FD\u529B\u3002</p>"}},{demo:{id:"components-dropdown-demo-menu-full"},previewerProps:{debug:!0,title:"Menu \u5B8C\u6574\u6837\u5F0F",filename:"components/dropdown/demo/menu-full.tsx",jsx:`import { DownOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    'Item Group',
    'group',
    null,
    [getItem('Option 0', '01'), getItem('Option 0', '02')],
    'group',
  ),
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  // Not crash
  null,
];
const App = () => (
  <Dropdown
    menu={{
      items,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover to check menu style
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default App;
`,description:`<p>\u6B64\u6F14\u793A\u9700\u8981\u6CE8\u610F\u53BB\u6389 Reset \u6837\u5F0F\u540E\u67E5\u770B Dropdown \u5185 Menu \u7684\u6837\u5F0F\u662F\u5426\u6B63\u5E38\u3002</p>
<p><a href="https://github.com/ant-design/ant-design/pull/19150">#19150</a></p>`}},{demo:{id:"components-dropdown-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/dropdown/demo/render-panel.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalDropdown } = Dropdown;
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: '4',
        danger: true,
        label: 'a danger item',
      },
    ]}
  />
);
const App = () => <InternalDropdown overlay={menu} />;
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("p",null,e[4].value),(0,n.tZ)(r.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[5].value),(0,n.tZ)("th",null,e[6].value),(0,n.tZ)("th",null,e[7].value),(0,n.tZ)("th",null,e[8].value),(0,n.tZ)("th",null,e[9].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[10].value),(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null,e[23].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[32].value),(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,e[34].value),(0,n.tZ)("td",null,e[35].value),(0,n.tZ)("td",null,e[36].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[37].value),(0,n.tZ)("td",null,e[38].value,(0,n.tZ)("a",{href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},e[39].value)),(0,n.tZ)("td",null,e[40].value),(0,n.tZ)("td",null,e[41].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null,e[43].value),(0,n.tZ)("td",null,(0,n.tZ)(o.rU,{to:"/components/menu-cn#api"},e[44].value)),(0,n.tZ)("td",null,e[45].value),(0,n.tZ)("td",null,e[46].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[47].value),(0,n.tZ)("td",null,e[48].value),(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null,e[50].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[51].value),(0,n.tZ)("td",null,e[52].value),(0,n.tZ)("td",null,e[53].value),(0,n.tZ)("td",null,e[54].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[55].value),(0,n.tZ)("td",null,e[56].value,(0,n.tZ)("code",null,e[57].value),e[58].value,(0,n.tZ)("code",null,e[59].value),e[60].value,(0,n.tZ)("code",null,e[61].value),e[62].value,(0,n.tZ)("code",null,e[63].value),e[64].value,(0,n.tZ)("code",null,e[65].value),e[66].value,(0,n.tZ)("code",null,e[67].value)),(0,n.tZ)("td",null,e[68].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[69].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[70].value),(0,n.tZ)("td",null,e[71].value),(0,n.tZ)("td",null,e[72].value,(0,n.tZ)("code",null,e[73].value),e[74].value,(0,n.tZ)("code",null,e[75].value),e[76].value,(0,n.tZ)("code",null,e[77].value),e[78].value),(0,n.tZ)("td",null,e[79].value,(0,n.tZ)("code",null,e[80].value),e[81].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[82].value),(0,n.tZ)("td",null,e[83].value,(0,n.tZ)("code",null,e[84].value),e[85].value,(0,n.tZ)(o.rU,{to:"/docs/react/faq#%E5%BC%B9%E5%B1%82%E7%B1%BB%E7%BB%84%E4%BB%B6%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%BB%9F%E4%B8%80%E8%87%B3-open-%E5%B1%9E%E6%80%A7"},e[86].value),e[87].value),(0,n.tZ)("td",null,e[88].value),(0,n.tZ)("td",null,e[89].value),(0,n.tZ)("td",null,e[90].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[91].value),(0,n.tZ)("td",null,e[92].value,(0,n.tZ)("code",null,e[93].value),e[94].value,(0,n.tZ)(o.rU,{to:"/docs/react/faq#%E5%BC%B9%E5%B1%82%E7%B1%BB%E7%BB%84%E4%BB%B6%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%BB%9F%E4%B8%80%E8%87%B3-open-%E5%B1%9E%E6%80%A7"},e[95].value),e[96].value),(0,n.tZ)("td",null,e[97].value),(0,n.tZ)("td",null,e[98].value),(0,n.tZ)("td",null,e[99].value)))),(0,n.tZ)("h3",{id:"dropdownbutton"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#dropdownbutton"},(0,n.tZ)("span",{className:"icon icon-link"})),"Dropdown.Button"),(0,n.tZ)("p",null,e[100].value),(0,n.tZ)(r.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[101].value),(0,n.tZ)("th",null,e[102].value),(0,n.tZ)("th",null,e[103].value),(0,n.tZ)("th",null,e[104].value),(0,n.tZ)("th",null,e[105].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[106].value),(0,n.tZ)("td",null,e[107].value),(0,n.tZ)("td",null,e[108].value),(0,n.tZ)("td",null,e[109].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[110].value),(0,n.tZ)("td",null,e[111].value),(0,n.tZ)("td",null,e[112].value),(0,n.tZ)("td",null,e[113].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[114].value),(0,n.tZ)("td",null,e[115].value),(0,n.tZ)("td",null,e[116].value),(0,n.tZ)("td",null,e[117].value),(0,n.tZ)("td",null,e[118].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[119].value),(0,n.tZ)("td",null,e[120].value),(0,n.tZ)("td",null,e[121].value),(0,n.tZ)("td",null,e[122].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[123].value),(0,n.tZ)("td",null,e[124].value,(0,n.tZ)(o.rU,{to:"/components/button-cn#api"},e[125].value),e[126].value),(0,n.tZ)("td",null,e[127].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[128].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[129].value),(0,n.tZ)("td",null,e[130].value,(0,n.tZ)(o.rU,{to:"/components/button-cn#api"},e[131].value),e[132].value),(0,n.tZ)("td",null,e[133].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[134].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[135].value),(0,n.tZ)("td",null,e[136].value,(0,n.tZ)(o.rU,{to:"/components/button-cn#api"},e[137].value),e[138].value),(0,n.tZ)("td",null,e[139].value),(0,n.tZ)("td",null,e[140].value),(0,n.tZ)("td",null)))))))}l.default=u}}]);
