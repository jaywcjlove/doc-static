"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5413],{7041:function(u,l,e){e.r(l);var c=e(2143),m=e(50250),p=e(59378),b=e(8910),_=e(74775),o=e(5937),v=e(2068),h=e(74399),Z=e(63942),f=e(16073),g=e(24628),y=e(19260),T=e(56140),i=e(5388),x=e(49545),P=e(6965),C=e(49706),A=e(95127),k=e(74418),S=e(73024),a=e(94065),s=e(67294),n=e(96923);function d(){var r=(0,a.eL)(),t=r.texts;return(0,n.tZ)(a.dY,null,(0,n.tZ)(s.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h3",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,t[2].value),(0,n.tZ)("li",null,t[3].value),(0,n.tZ)("li",null,(0,n.tZ)(a.rU,{to:"/components/radio/#components-radio-demo-radiobutton"},t[4].value),t[5].value)),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(i.Z,{items:[{demo:{id:"components-tabs-demo-basic"},previewerProps:{title:"Basic",filename:"components/tabs/demo/basic.tsx",jsx:`import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: \`Tab 1\`,
    children: \`Content of Tab Pane 1\`,
  },
  {
    key: '2',
    label: \`Tab 2\`,
    children: \`Content of Tab Pane 2\`,
  },
  {
    key: '3',
    label: \`Tab 3\`,
    children: \`Content of Tab Pane 3\`,
  },
];
const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default App;
`,description:"<p>Default activate first tab.</p>"}},{demo:{id:"components-tabs-demo-disabled"},previewerProps:{title:"Disabled",filename:"components/tabs/demo/disabled.tsx",jsx:`import { Tabs } from 'antd';
const App = () => (
  <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'Tab 1',
        key: '1',
        children: 'Tab 1',
      },
      {
        label: 'Tab 2',
        key: '2',
        children: 'Tab 2',
        disabled: true,
      },
      {
        label: 'Tab 3',
        key: '3',
        children: 'Tab 3',
      },
    ]}
  />
);
export default App;
`,description:"<p>Disabled a tab.</p>"}},{demo:{id:"components-tabs-demo-centered"},previewerProps:{title:"Centered",filename:"components/tabs/demo/centered.tsx",jsx:`import { Tabs } from 'antd';
const App = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: \`Tab \${id}\`,
        key: id,
        children: \`Content of Tab Pane \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>Centered tabs.</p>"}},{demo:{id:"components-tabs-demo-icon"},previewerProps:{title:"Icon",filename:"components/tabs/demo/icon.tsx",jsx:`import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
const App = () => (
  <Tabs
    defaultActiveKey="2"
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);
      return {
        label: (
          <span>
            <Icon />
            Tab {id}
          </span>
        ),
        key: id,
        children: \`Tab \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>The Tab with Icon.</p>"}},{demo:{id:"components-tabs-demo-slide"},previewerProps:{title:"Slide",filename:"components/tabs/demo/slide.tsx",jsx:`import { Radio, Tabs } from 'antd';
import { useState } from 'react';
const App = () => {
  const [mode, setMode] = useState('top');
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <div>
      <Radio.Group
        onChange={handleModeChange}
        value={mode}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="top">Horizontal</Radio.Button>
        <Radio.Button value="left">Vertical</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        tabPosition={mode}
        style={{
          height: 220,
        }}
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label: \`Tab-\${id}\`,
            key: id,
            disabled: i === 28,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
    </div>
  );
};
export default App;
`,description:"<p>In order to fit in more tabs, they can slide left and right (or up and down).</p>"}},{demo:{id:"components-tabs-demo-extra"},previewerProps:{title:"Extra content",filename:"components/tabs/demo/extra.tsx",jsx:`import { Button, Checkbox, Divider, Tabs } from 'antd';
import { useMemo, useState } from 'react';
const CheckboxGroup = Checkbox.Group;
const operations = <Button>Extra Action</Button>;
const OperationsSlot = {
  left: <Button className="tabs-extra-demo-button">Left Extra Action</Button>,
  right: <Button>Right Extra Action</Button>,
};
const options = ['left', 'right'];
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: \`Tab \${id}\`,
    key: id,
    children: \`Content of tab \${id}\`,
  };
});
const App = () => {
  const [position, setPosition] = useState(['left', 'right']);
  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      (acc, direction) => ({
        ...acc,
        [direction]: OperationsSlot[direction],
      }),
      {},
    );
  }, [position]);
  return (
    <>
      <Tabs tabBarExtraContent={operations} items={items} />
      <br />
      <br />
      <br />
      <div>You can also specify its direction or both side</div>
      <Divider />
      <CheckboxGroup
        options={options}
        value={position}
        onChange={(value) => {
          setPosition(value);
        }}
      />
      <br />
      <br />
      <Tabs tabBarExtraContent={slot} items={items} />
    </>
  );
};
export default App;
`,description:"<p>You can add extra actions to the right or left or even both side of Tabs.</p>",style:`.tabs-extra-demo-button {
  margin-right: 16px;
}

.ant-row-rtl .tabs-extra-demo-button {
  margin-right: 0;
  margin-left: 16px;
}`}},{demo:{id:"components-tabs-demo-size"},previewerProps:{title:"Size",filename:"components/tabs/demo/size.tsx",jsx:`import { Radio, Tabs } from 'antd';
import { useState } from 'react';
const App = () => {
  const [size, setSize] = useState('small');
  const onChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div>
      <Radio.Group
        value={size}
        onChange={onChange}
        style={{
          marginBottom: 16,
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Tabs
        defaultActiveKey="1"
        size={size}
        style={{
          marginBottom: 32,
        }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of tab \${id}\`,
          };
        })}
      />
      <Tabs
        defaultActiveKey="1"
        type="card"
        size={size}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Card Tab \${id}\`,
            key: id,
            children: \`Content of card tab \${id}\`,
          };
        })}
      />
    </div>
  );
};
export default App;
`,description:"<p>Large size tabs are usually used in page header, and small size could be used in Modal.</p>"}},{demo:{id:"components-tabs-demo-position"},previewerProps:{title:"Position",filename:"components/tabs/demo/position.tsx",jsx:`import { Radio, Space, Tabs } from 'antd';
import { useState } from 'react';
const App = () => {
  const [tabPosition, setTabPosition] = useState('left');
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <>
      <Space
        style={{
          marginBottom: 24,
        }}
      >
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: \`Tab \${id}\`,
            key: id,
            children: \`Content of Tab \${id}\`,
          };
        })}
      />
    </>
  );
};
export default App;
`,description:"<p>Tab's position: left, right, top or bottom. Will auto switch to <code>top</code> in mobile.</p>"}},{demo:{id:"components-tabs-demo-card"},previewerProps:{title:"Card type tab",filename:"components/tabs/demo/card.tsx",jsx:`import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const App = () => (
  <Tabs
    onChange={onChange}
    type="card"
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: \`Tab \${id}\`,
        key: id,
        children: \`Content of Tab Pane \${id}\`,
      };
    })}
  />
);
export default App;
`,description:"<p>Another type of Tabs, which doesn't support vertical mode.</p>"}},{demo:{id:"components-tabs-demo-editable-card"},previewerProps:{title:"Add & close tab",filename:"components/tabs/demo/editable-card.tsx",jsx:`import { Tabs } from 'antd';
import { useRef, useState } from 'react';
const initialItems = [
  {
    label: 'Tab 1',
    children: 'Content of Tab 1',
    key: '1',
  },
  {
    label: 'Tab 2',
    children: 'Content of Tab 2',
    key: '2',
  },
  {
    label: 'Tab 3',
    children: 'Content of Tab 3',
    key: '3',
    closable: false,
  },
];
const App = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = \`newTab\${newTabIndex.current++}\`;
    const newPanes = [...items];
    newPanes.push({
      label: 'New Tab',
      children: 'Content of new Tab',
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <Tabs
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
};
export default App;
`,description:"<p>Only card type Tabs support adding &#x26; closable. +Use <code>closable={false}</code> to disable close.</p>"}},{demo:{id:"components-tabs-demo-card-top"},previewerProps:{compact:!0,background:"grey",debug:!0,title:"Container of card type Tab",filename:"components/tabs/demo/card-top.tsx",jsx:`import { css } from '@emotion/css';
import { Tabs, theme } from 'antd';
const useStyle = () => {
  const { token } = theme.useToken();
  const antdTabsCls = '.ant-tabs';
  return css\`
    \${antdTabsCls}\${antdTabsCls}-card {
      \${antdTabsCls}-content {
        padding: \${token.padding}px;
        background: \${token.colorBgContainer};
      }

      \${antdTabsCls}-nav {
        margin: 0;

        \${antdTabsCls}-nav-wrap > \${antdTabsCls}-nav-list > \${antdTabsCls}-tab {
          background: transparent;
          border-color: transparent;

          &-active {
            background: \${token.colorBgContainer};
            border-color: \${token.colorBorderBg};
          }
        }

        &::before {
          display: none;
        }
      }
    }
  \`;
};
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: \`Tab Title \${id}\`,
    key: id,
    children: (
      <>
        <p>Content of Tab Pane {id}</p>
        <p>Content of Tab Pane {id}</p>
        <p>Content of Tab Pane {id}</p>
      </>
    ),
  };
});
const App = () => {
  const style = useStyle();
  return (
    <div className={style}>
      <Tabs type="card" items={items} />
    </div>
  );
};
export default App;
`,description:"<p>Should be used at the top of container, needs to override styles.</p>"}},{demo:{id:"components-tabs-demo-custom-add-trigger"},previewerProps:{title:"Customized trigger of new tab",filename:"components/tabs/demo/custom-add-trigger.tsx",jsx:`import { Button, Tabs } from 'antd';
import { useRef, useState } from 'react';
const defaultPanes = new Array(2).fill(null).map((_, index) => {
  const id = String(index + 1);
  return {
    label: \`Tab \${id}\`,
    children: \`Content of Tab Pane \${index + 1}\`,
    key: id,
  };
});
const App = () => {
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [items, setItems] = useState(defaultPanes);
  const newTabIndex = useRef(0);
  const onChange = (key) => {
    setActiveKey(key);
  };
  const add = () => {
    const newActiveKey = \`newTab\${newTabIndex.current++}\`;
    setItems([
      ...items,
      {
        label: 'New Tab',
        children: 'New Tab Pane',
        key: newActiveKey,
      },
    ]);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setItems(newPanes);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={add}>ADD</Button>
      </div>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        items={items}
      />
    </div>
  );
};
export default App;
`,description:"<p>Hide default plus icon, and bind event for customized trigger.</p>"}},{demo:{id:"components-tabs-demo-custom-tab-bar"},previewerProps:{title:"Customized bar of tab",filename:"components/tabs/demo/custom-tab-bar.tsx",jsx:`import { Tabs, theme } from 'antd';
import StickyBox from 'react-sticky-box';
const items = new Array(3).fill(null).map((_, i) => {
  const id = String(i + 1);
  return {
    label: \`Tab \${id}\`,
    key: id,
    children: \`Content of Tab Pane \${id}\`,
    style:
      i === 0
        ? {
            height: 200,
          }
        : undefined,
  };
});
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const renderTabBar = (props, DefaultTabBar) => (
    <StickyBox
      offsetTop={0}
      offsetBottom={20}
      style={{
        zIndex: 1,
      }}
    >
      <DefaultTabBar
        {...props}
        style={{
          background: colorBgContainer,
        }}
      />
    </StickyBox>
  );
  return <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />;
};
export default App;
`,description:'<p>Use <a href="https://www.npmjs.com/package/react-stickynode">react-sticky-box</a> and <code>renderTabBar</code>.</p>'}},{demo:{id:"components-tabs-demo-custom-tab-bar-node"},previewerProps:{title:"Draggable Tabs",filename:"components/tabs/demo/custom-tab-bar-node.tsx",jsx:`import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { css } from '@emotion/css';
import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
const DraggableTabNode = ({ className, onActiveBarTransform, ...props }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isSorting } = useSortable({
    id: props['data-node-key'],
  });
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'move',
  };
  useEffect(() => {
    if (!isSorting) {
      onActiveBarTransform('');
    } else if (className?.includes('ant-tabs-tab-active')) {
      onActiveBarTransform(css\`
        .ant-tabs-ink-bar {
          transform: \${CSS.Transform.toString(transform)};
          transition: \${transition} !important;
        }
      \`);
    }
  }, [className, isSorting, transform]);
  return React.cloneElement(props.children, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  });
};
const App = () => {
  const [items, setItems] = useState([
    {
      key: '1',
      label: \`Tab 1\`,
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: \`Tab 2\`,
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: \`Tab 3\`,
      children: 'Content of Tab Pane 3',
    },
  ]);
  const [className, setClassName] = useState('');
  const sensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };
  return (
    <Tabs
      className={className}
      items={items}
      renderTabBar={(tabBarProps, DefaultTabBar) => (
        <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
          <SortableContext items={items.map((i) => i.key)} strategy={horizontalListSortingStrategy}>
            <DefaultTabBar {...tabBarProps}>
              {(node) => (
                <DraggableTabNode
                  {...node.props}
                  key={node.key}
                  onActiveBarTransform={setClassName}
                >
                  {node}
                </DraggableTabNode>
              )}
            </DefaultTabBar>
          </SortableContext>
        </DndContext>
      )}
    />
  );
};
export default App;
`,description:'<p>Use <a href="https://github.com/clauderic/dnd-kit">dnd-kit</a> to make tabs draggable.</p>'}},{demo:{id:"components-tabs-demo-animated"},previewerProps:{debug:!0,title:"Animated",filename:"components/tabs/demo/animated.tsx",jsx:`import { Space, Switch, Tabs } from 'antd';
import React from 'react';
const App = () => {
  const [inkBar, setInkBar] = React.useState(true);
  const [tabPane, setTabPane] = React.useState(true);
  return (
    <>
      <Space>
        <Switch
          checkedChildren="inkBar"
          unCheckedChildren="inkBar"
          checked={inkBar}
          onChange={() => setInkBar(!inkBar)}
        />
        <Switch
          checkedChildren="tabPane"
          unCheckedChildren="tabPane"
          checked={tabPane}
          onChange={() => setTabPane(!tabPane)}
        />
      </Space>

      <Tabs
        animated={{
          inkBar,
          tabPane,
        }}
        items={[
          {
            label: \`Bamboo\`,
            key: '1',
            children: \`Hello Bamboo!\`,
            style: {
              height: 200,
              boxShadow: '0 0 3px rgba(255, 0, 0, 0.5)',
            },
          },
          {
            label: \`Little\`,
            key: '2',
            children: \`Hi Little!\`,
            style: {
              height: 300,
              boxShadow: '0 0 3px rgba(0, 255, 0, 0.5)',
            },
          },
          {
            label: \`Light\`,
            key: '3',
            children: \`Welcome Light!\`,
            style: {
              height: 100,
              boxShadow: '0 0 3px rgba(0, 0, 255, 0.5)',
            },
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>Animated of Tab Pane.</p>"}},{demo:{id:"components-tabs-demo-nest"},previewerProps:{debug:!0,title:"Nest",filename:"components/tabs/demo/nest.tsx",jsx:`import { Select, Tabs } from 'antd';
import { useState } from 'react';
const { Option } = Select;
const positionList = ['left', 'right', 'top', 'bottom'];
const App = () => {
  const [parentPos, setParentPos] = useState(undefined);
  const [childPos, setChildPos] = useState(undefined);
  const [parentType, setParentType] = useState(undefined);
  const [childType, setChildType] = useState(undefined);
  return (
    <div>
      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setParentPos(val);
        }}
      >
        {positionList.map((pos) => (
          <Option key={pos} value={pos}>
            Parent - {pos}
          </Option>
        ))}
      </Select>

      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setChildPos(val);
        }}
      >
        {positionList.map((pos) => (
          <Option key={pos} value={pos}>
            Child - {pos}
          </Option>
        ))}
      </Select>

      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setParentType(val);
        }}
      >
        <Option value="line">Parent - line</Option>
        <Option value="card">Parent - card</Option>
        <Option value="editable-card">Parent - card edit</Option>
      </Select>

      <Select
        style={{
          width: 200,
        }}
        onChange={(val) => {
          setChildType(val);
        }}
      >
        <Option value="line">Child - line</Option>
        <Option value="card">Child - card</Option>
        <Option value="editable-card">Parent - card edit</Option>
      </Select>

      <Tabs
        defaultActiveKey="1"
        tabPosition={parentPos}
        type={parentType}
        items={[
          {
            label: 'Tab 1',
            key: '1',
            children: (
              <Tabs
                defaultActiveKey="1"
                tabPosition={childPos}
                type={childType}
                style={{
                  height: 300,
                }}
                items={new Array(20).fill(null).map((_, index) => {
                  const key = String(index);
                  return {
                    label: \`Tab \${key}\`,
                    key,
                    children: \`TTTT \${key}\`,
                  };
                })}
              />
            ),
          },
          {
            label: 'Tab 2',
            key: '2',
            children: 'Content of Tab Pane 2',
          },
        ]}
      />
    </div>
  );
};
export default App;
`,description:"<p>Default activate first tab.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"tabs"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tabs"},(0,n.tZ)("span",{className:"icon icon-link"})),"Tabs"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value),(0,n.tZ)("th",null,t[9].value),(0,n.tZ)("th",null,t[10].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null,t[21].value,(0,n.tZ)("code",null,t[22].value)),(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,t[31].value,(0,n.tZ)("code",null,t[32].value),t[33].value),(0,n.tZ)("td",null,t[34].value),(0,n.tZ)("td",null,t[35].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[36].value),(0,n.tZ)("td",null,t[37].value,(0,n.tZ)("code",null,t[38].value)),(0,n.tZ)("td",null,t[39].value),(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,(0,n.tZ)(a.rU,{to:"#tabitemtype"},t[43].value)),(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null,t[45].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null,t[47].value),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[51].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[52].value),t[53].value),(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null,t[55].value),(0,n.tZ)("td",null,t[56].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[57].value),(0,n.tZ)("td",null,t[58].value),(0,n.tZ)("td",null,t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[61].value),(0,n.tZ)("td",null,t[62].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[63].value),t[64].value,(0,n.tZ)("code",null,t[65].value),t[66].value,(0,n.tZ)("code",null,t[67].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[68].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[69].value),(0,n.tZ)("td",null,t[70].value),(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,t[73].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[74].value),(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null,t[77].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[78].value),(0,n.tZ)("td",null,t[79].value),(0,n.tZ)("td",null,t[80].value),(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[82].value),(0,n.tZ)("td",null,t[83].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[84].value),t[85].value,(0,n.tZ)("code",null,t[86].value),t[87].value,(0,n.tZ)("code",null,t[88].value),t[89].value,(0,n.tZ)("code",null,t[90].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[91].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[92].value),(0,n.tZ)("td",null,t[93].value),(0,n.tZ)("td",null,t[94].value),(0,n.tZ)("td",null,t[95].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[96].value),(0,n.tZ)("td",null,t[97].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[98].value),t[99].value,(0,n.tZ)("code",null,t[100].value),t[101].value,(0,n.tZ)("code",null,t[102].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[103].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[104].value),(0,n.tZ)("td",null,t[105].value),(0,n.tZ)("td",null,t[106].value),(0,n.tZ)("td",null,t[107].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[108].value),(0,n.tZ)("td",null,t[109].value,(0,n.tZ)("code",null,t[110].value)),(0,n.tZ)("td",null,t[111].value),(0,n.tZ)("td",null,t[112].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[113].value),(0,n.tZ)("td",null,t[114].value),(0,n.tZ)("td",null,t[115].value),(0,n.tZ)("td",null,t[116].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[117].value),(0,n.tZ)("td",null,t[118].value),(0,n.tZ)("td",null,t[119].value,(0,n.tZ)("code",null,t[120].value),t[121].value,(0,n.tZ)("code",null,t[122].value),t[123].value,(0,n.tZ)("code",null,t[124].value),t[125].value,(0,n.tZ)("code",null,t[126].value),t[127].value),(0,n.tZ)("td",null,t[128].value),(0,n.tZ)("td",null,t[129].value)))),(0,n.tZ)("p",null,t[130].value,(0,n.tZ)("a",{href:"https://github.com/react-component/tabs#tabs"},t[131].value)),(0,n.tZ)("h3",{id:"tabitemtype"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tabitemtype"},(0,n.tZ)("span",{className:"icon icon-link"})),"TabItemType"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[132].value),(0,n.tZ)("th",null,t[133].value),(0,n.tZ)("th",null,t[134].value),(0,n.tZ)("th",null,t[135].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[136].value),(0,n.tZ)("td",null,t[137].value,(0,n.tZ)("code",null,t[138].value)),(0,n.tZ)("td",null,t[139].value),(0,n.tZ)("td",null,t[140].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[141].value),(0,n.tZ)("td",null,t[142].value),(0,n.tZ)("td",null,t[143].value),(0,n.tZ)("td",null,t[144].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[145].value),(0,n.tZ)("td",null,t[146].value),(0,n.tZ)("td",null,t[147].value),(0,n.tZ)("td",null,t[148].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[149].value),(0,n.tZ)("td",null,t[150].value),(0,n.tZ)("td",null,t[151].value),(0,n.tZ)("td",null,t[152].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[153].value),(0,n.tZ)("td",null,t[154].value),(0,n.tZ)("td",null,t[155].value),(0,n.tZ)("td",null,t[156].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[157].value),(0,n.tZ)("td",null,t[158].value),(0,n.tZ)("td",null,t[159].value),(0,n.tZ)("td",null,t[160].value)))))))}l.default=d}}]);
