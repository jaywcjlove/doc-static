"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1185],{52243:function(c,a,t){t.r(a);var p=t(2143),Z=t(50250),h=t(59378),v=t(8910),o=t(74775),l=t(5937),_=t(2068),m=t(74399),y=t(63942),f=t(16073),x=t(24628),k=t(19260),g=t(56140),u=t(5388),D=t(49545),w=t(6965),E=t(49706),O=t(95127),K=t(74418),b=t(73024),d=t(94065),i=t(67294),n=t(96923);function r(){var s=(0,d.eL)(),e=s.texts;return(0,n.tZ)(d.dY,null,(0,n.tZ)(i.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,e[1].value,(0,n.tZ)("code",null,e[2].value),e[3].value,(0,n.tZ)("code",null,e[4].value),e[5].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(u.Z,{items:[{demo:{id:"components-tree-demo-basic"},previewerProps:{title:"Basic",filename:"components/tree/demo/basic.tsx",jsx:`import { Tree } from 'antd';
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: (
              <span
                style={{
                  color: '#1890ff',
                }}
              >
                sss
              </span>
            ),
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];
const App = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };
  return (
    <Tree
      checkable
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.</p>"}},{demo:{id:"components-tree-demo-basic-controlled"},previewerProps:{title:"Controlled Tree",filename:"components/tree/demo/basic-controlled.tsx",jsx:`import { Tree } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          {
            title: '0-0-0-0',
            key: '0-0-0-0',
          },
          {
            title: '0-0-0-1',
            key: '0-0-0-1',
          },
          {
            title: '0-0-0-2',
            key: '0-0-0-2',
          },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          {
            title: '0-0-1-0',
            key: '0-0-1-0',
          },
          {
            title: '0-0-1-1',
            key: '0-0-1-1',
          },
          {
            title: '0-0-1-2',
            key: '0-0-1-2',
          },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      {
        title: '0-1-0-0',
        key: '0-1-0-0',
      },
      {
        title: '0-1-0-1',
        key: '0-1-0-1',
      },
      {
        title: '0-1-0-2',
        key: '0-1-0-2',
      },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];
const App = () => {
  const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-0-1']);
  const [checkedKeys, setCheckedKeys] = useState(['0-0-0']);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = (expandedKeysValue) => {
    console.log('onExpand', expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };
  const onCheck = (checkedKeysValue) => {
    console.log('onCheck', checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };
  const onSelect = (selectedKeysValue, info) => {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeysValue);
  };
  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>Controlled mode lets parent nodes reflect the status of child nodes more intelligently.</p>"}},{demo:{id:"components-tree-demo-draggable"},previewerProps:{title:"draggable",filename:"components/tree/demo/draggable.tsx",jsx:`import { Tree } from 'antd';
import { useState } from 'react';
const x = 3;
const y = 2;
const z = 1;
const defaultData = [];
const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || defaultData;
  const children = [];
  for (let i = 0; i < x; i++) {
    const key = \`\${preKey}-\${i}\`;
    tns.push({
      title: key,
      key,
    });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);
const App = () => {
  const [gData, setGData] = useState(defaultData);
  const [expandedKeys] = useState(['0-0', '0-0-0', '0-0-0-0']);
  const onDragEnter = (info) => {
    console.log(info);
    // expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E
    // setExpandedKeys(info.expandedKeys)
  };

  const onDrop = (info) => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    const data = [...gData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
        item.children.unshift(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 &&
      // Has children
      info.node.props.expanded &&
      // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
        item.children.unshift(dragObj);
        // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      });
    } else {
      let ar = [];
      let i;
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }
    setGData(data);
  };
  return (
    <Tree
      className="draggable-tree"
      defaultExpandedKeys={expandedKeys}
      draggable
      blockNode
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      treeData={gData}
    />
  );
};
export default App;
`,description:"<p>Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.</p>"}},{demo:{id:"components-tree-demo-dynamic"},previewerProps:{title:"load data asynchronously",filename:"components/tree/demo/dynamic.tsx",jsx:`import { Tree } from 'antd';
import { useState } from 'react';
const initTreeData = [
  {
    title: 'Expand to load',
    key: '0',
  },
  {
    title: 'Expand to load',
    key: '1',
  },
  {
    title: 'Tree Node',
    key: '2',
    isLeaf: true,
  },
];

// It's just a simple demo. You can use tree map to optimize update perf.
const updateTreeData = (list, key, children) =>
  list.map((node) => {
    if (node.key === key) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });
const App = () => {
  const [treeData, setTreeData] = useState(initTreeData);
  const onLoadData = ({ key, children }) =>
    new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }
      setTimeout(() => {
        setTreeData((origin) =>
          updateTreeData(origin, key, [
            {
              title: 'Child Node',
              key: \`\${key}-0\`,
            },
            {
              title: 'Child Node',
              key: \`\${key}-1\`,
            },
          ]),
        );
        resolve();
      }, 1000);
    });
  return <Tree loadData={onLoadData} treeData={treeData} />;
};
export default App;
`,description:"<p>To load data asynchronously when click to expand a treeNode.</p>"}},{demo:{id:"components-tree-demo-search"},previewerProps:{title:"Searchable",filename:"components/tree/demo/search.tsx",jsx:`import { Input, Tree } from 'antd';
import { useMemo, useState } from 'react';
const { Search } = Input;
const x = 3;
const y = 2;
const z = 1;
const defaultData = [];
const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || defaultData;
  const children = [];
  for (let i = 0; i < x; i++) {
    const key = \`\${preKey}-\${i}\`;
    tns.push({
      title: key,
      key,
    });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);
const dataList = [];
const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const { key } = node;
    dataList.push({
      key,
      title: key,
    });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(defaultData);
const getParentKey = (key, tree) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};
const App = () => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = (newExpandedKeys) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };
  const onChange = (e) => {
    const { value } = e.target;
    const newExpandedKeys = dataList
      .map((item) => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, defaultData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
    setExpandedKeys(newExpandedKeys);
    setSearchValue(value);
    setAutoExpandParent(true);
  };
  const treeData = useMemo(() => {
    const loop = (data) =>
      data.map((item) => {
        const strTitle = item.title;
        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className="site-tree-search-value">{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{strTitle}</span>
          );
        if (item.children) {
          return {
            title,
            key: item.key,
            children: loop(item.children),
          };
        }
        return {
          title,
          key: item.key,
        };
      });
    return loop(defaultData);
  }, [searchValue]);
  return (
    <div>
      <Search
        style={{
          marginBottom: 8,
        }}
        placeholder="Search"
        onChange={onChange}
      />
      <Tree
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={treeData}
      />
    </div>
  );
};
export default App;
`,description:"<p>Searchable Tree.</p>",style:`.site-tree-search-value {
  color: #f50;
}`}},{demo:{id:"components-tree-demo-line"},previewerProps:{title:"Tree with line",filename:"components/tree/demo/line.tsx",jsx:`import { CarryOutOutlined, CheckOutlined, FormOutlined } from '@ant-design/icons';
import { Select, Switch, Tree } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            icon: <CarryOutOutlined />,
          },
          {
            title: (
              <>
                <div>multiple line title</div>
                <div>multiple line title</div>
              </>
            ),
            key: '0-0-0-1',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'leaf',
            key: '0-0-0-2',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'leaf',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />,
            switcherIcon: <FormOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: 'parent 2',
    key: '0-1',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'parent 2-0',
        key: '0-1-0',
        icon: <CarryOutOutlined />,
        children: [
          {
            title: 'leaf',
            key: '0-1-0-0',
            icon: <CarryOutOutlined />,
          },
          {
            title: 'leaf',
            key: '0-1-0-1',
            icon: <CarryOutOutlined />,
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  const handleLeafIconChange = (value) => {
    if (value === 'custom') {
      return setShowLeafIcon(<CheckOutlined />);
    }
    if (value === 'true') {
      return setShowLeafIcon(true);
    }
    return setShowLeafIcon(false);
  };
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        showLine: <Switch checked={!!showLine} onChange={setShowLine} />
        <br />
        <br />
        showIcon: <Switch checked={showIcon} onChange={setShowIcon} />
        <br />
        <br />
        showLeafIcon:{' '}
        <Select defaultValue="true" onChange={handleLeafIconChange}>
          <Select.Option value="true">True</Select.Option>
          <Select.Option value="false">False</Select.Option>
          <Select.Option value="custom">Custom icon</Select.Option>
        </Select>
      </div>
      <Tree
        showLine={
          showLine
            ? {
                showLeafIcon,
              }
            : false
        }
        showIcon={showIcon}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};
export default App;
`,description:"<p>Tree with connected line between nodes, turn on by <code>showLine</code>, customize the preseted icon by <code>switcherIcon</code>.</p>"}},{demo:{id:"components-tree-demo-customized-icon"},previewerProps:{title:"Customize Icon",filename:"components/tree/demo/customized-icon.tsx",jsx:`import { DownOutlined, FrownFilled, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    icon: <SmileOutlined />,
    children: [
      {
        title: 'leaf',
        key: '0-0-0',
        icon: <MehOutlined />,
      },
      {
        title: 'leaf',
        key: '0-0-1',
        icon: ({ selected }) => (selected ? <FrownFilled /> : <FrownOutlined />),
      },
    ],
  },
];
const App = () => (
  <Tree
    showIcon
    defaultExpandAll
    defaultSelectedKeys={['0-0-0']}
    switcherIcon={<DownOutlined />}
    treeData={treeData}
  />
);
export default App;
`,description:"<p>You can customize icons for different nodes.</p>"}},{demo:{id:"components-tree-demo-directory"},previewerProps:{title:"directory",filename:"components/tree/demo/directory.tsx",jsx:`import { Tree } from 'antd';
const { DirectoryTree } = Tree;
const treeData = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      {
        title: 'leaf 0-0',
        key: '0-0-0',
        isLeaf: true,
      },
      {
        title: 'leaf 0-1',
        key: '0-0-1',
        isLeaf: true,
      },
    ],
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      {
        title: 'leaf 1-0',
        key: '0-1-0',
        isLeaf: true,
      },
      {
        title: 'leaf 1-1',
        key: '0-1-1',
        isLeaf: true,
      },
    ],
  },
];
const App = () => {
  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };
  const onExpand = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };
  return (
    <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>Built-in directory tree. <code>multiple</code> support <code>ctrl(Windows)</code> / <code>command(Mac)</code> selection.</p>"}},{demo:{id:"components-tree-demo-switcher-icon"},previewerProps:{title:"Customize collapse/expand icon",filename:"components/tree/demo/switcher-icon.tsx",jsx:`import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
          {
            title: 'leaf',
            key: '0-0-0-2',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: 'leaf',
            key: '0-0-1-0',
          },
        ],
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',
        children: [
          {
            title: 'leaf',
            key: '0-0-2-0',
          },
          {
            title: 'leaf',
            key: '0-0-2-1',
          },
        ],
      },
    ],
  },
];
const App = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  return (
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={['0-0-0']}
      onSelect={onSelect}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>customize collapse/expand icon of tree node</p>"}},{demo:{id:"components-tree-demo-virtual-scroll"},previewerProps:{title:"Virtual scroll",filename:"components/tree/demo/virtual-scroll.tsx",jsx:`import { Tree } from 'antd';
const dig = (path = '0', level = 3) => {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = \`\${path}-\${i}\`;
    const treeNode = {
      title: key,
      key,
    };
    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }
    list.push(treeNode);
  }
  return list;
};
const treeData = dig();
const App = () => <Tree treeData={treeData} height={233} defaultExpandAll />;
export default App;
`,description:"<p>Use virtual list through <code>height</code> prop.</p>"}},{demo:{id:"components-tree-demo-drag-debug"},previewerProps:{debug:!0,title:"Drag Debug",filename:"components/tree/demo/drag-debug.tsx",jsx:`/* eslint-disable @typescript-eslint/no-shadow */
import { CarryOutOutlined } from '@ant-design/icons';
import { Switch, Tree } from 'antd';
import React from 'react';
const x = 3;
const y = 2;
const z = 1;
const data = [];
const generateData = (_level, preKey = '0', tns = data) => {
  const children = [];
  for (let i = 0; i < x; i++) {
    const key = \`\${preKey}-\${i}\`;
    tns.push({
      title: key,
      key,
      icon: <CarryOutOutlined />,
    });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);
const App = () => {
  const [gData, setGData] = React.useState(data);
  const [showLine, setShowLine] = React.useState(true);
  const [showIcon, setShowIcon] = React.useState(true);
  const [showLeafIcon, setShowLeafIcon] = React.useState(true);
  const [expandedKeys, setExpandedKeys] = React.useState(['0-0', '0-0-0', '0-0-0-0']);
  const onDragEnter = (info) => {
    console.log(info);
    // expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E
    setExpandedKeys(info.expandedKeys);
  };
  const onDrop = (info) => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    const data = [...gData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5C3E\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
        item.children.push(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 &&
      // Has children
      info.node.props.expanded &&
      // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
        item.children.unshift(dragObj);
      });
    } else {
      let ar;
      let i;
      loop(data, dropKey, (_, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }
    setGData(data);
  };
  const innerSetShowLine = (showLine) => {
    if (showLine) {
      if (showLeafIcon) {
        setShowLine({
          showLeafIcon: true,
        });
      } else {
        setShowLine(true);
      }
    } else {
      setShowLine(false);
    }
  };
  const innerSetShowLeafIcon = (showLeafIcon) => {
    setShowLeafIcon(showLeafIcon);
    setShowLine({
      showLeafIcon,
    });
  };
  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        showLine: <Switch checked={showLine} onChange={innerSetShowLine} />
        <br />
        <br />
        showIcon: <Switch checked={showIcon} onChange={() => setShowIcon(showIcon)} />
        <br />
        <br />
        showLeafIcon: <Switch checked={showLeafIcon} onChange={innerSetShowLeafIcon} />
      </div>
      <Tree
        showLine={showLine}
        showIcon={showIcon}
        className="draggable-tree"
        defaultExpandedKeys={expandedKeys}
        draggable
        blockNode
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        treeData={gData}
      />
    </>
  );
};
export default App;
`}},{demo:{id:"components-tree-demo-big-data"},previewerProps:{debug:!0,title:"Big data",filename:"components/tree/demo/big-data.tsx",jsx:`import { Tree } from 'antd';
const treeData = [];
for (let i = 0; i < 100; i += 1) {
  const children = [];
  for (let j = 0; j < 100; j += 1) {
    children.push({
      title: \`child \${i}-\${j}\`,
      key: \`l-\${i}-\${j}\`,
    });
  }
  treeData.push({
    title: \`parent \${i}\`,
    key: \`l-\${i}\`,
    children,
  });
}
const App = () => <Tree defaultExpandAll height={400} treeData={treeData} />;
export default App;
`,description:"<p>Plenty of tree nodes.</p>"}},{demo:{id:"components-tree-demo-block-node"},previewerProps:{title:"Block Node",filename:"components/tree/demo/block-node.tsx",jsx:`import { Tree } from 'antd';
const treeData = [
  {
    title: 'parent',
    key: '0',
    children: [
      {
        title: 'child 1',
        key: '0-0',
        disabled: true,
      },
      {
        title: 'child 2',
        key: '0-1',
        disableCheckbox: true,
      },
    ],
  },
];
const App = () => (
  <Tree checkable defaultSelectedKeys={['0-1']} defaultExpandAll treeData={treeData} blockNode />
);
export default App;
`}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"tree-props"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tree-props"},(0,n.tZ)("span",{className:"icon icon-link"})),"Tree props"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[6].value),(0,n.tZ)("th",null,e[7].value),(0,n.tZ)("th",null,e[8].value),(0,n.tZ)("th",null,e[9].value),(0,n.tZ)("th",null,e[10].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null,e[28].value,(0,n.tZ)("code",null,e[29].value),e[30].value,(0,n.tZ)("code",null,e[31].value),e[32].value,(0,n.tZ)("code",null,e[33].value),e[34].value,(0,n.tZ)("code",null,e[35].value),e[36].value),(0,n.tZ)("td",null,e[37].value),(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[39].value),(0,n.tZ)("td",null,e[40].value),(0,n.tZ)("td",null,e[41].value),(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[43].value),(0,n.tZ)("td",null,e[44].value),(0,n.tZ)("td",null,e[45].value),(0,n.tZ)("td",null,e[46].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[47].value),(0,n.tZ)("td",null,e[48].value),(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null,e[50].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[51].value),(0,n.tZ)("td",null,e[52].value),(0,n.tZ)("td",null,e[53].value),(0,n.tZ)("td",null,e[54].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[55].value),(0,n.tZ)("td",null,e[56].value),(0,n.tZ)("td",null,e[57].value),(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[59].value),(0,n.tZ)("td",null,e[60].value),(0,n.tZ)("td",null,e[61].value),(0,n.tZ)("td",null,e[62].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[63].value),(0,n.tZ)("td",null,e[64].value),(0,n.tZ)("td",null,e[65].value),(0,n.tZ)("td",null,e[66].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[67].value),(0,n.tZ)("td",null,e[68].value,(0,n.tZ)("code",null,e[69].value),e[70].value),(0,n.tZ)("td",null,e[71].value),(0,n.tZ)("td",null,e[72].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[73].value),e[74].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[75].value),(0,n.tZ)("td",null,e[76].value),(0,n.tZ)("td",null,e[77].value),(0,n.tZ)("td",null,e[78].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[79].value),(0,n.tZ)("td",null,e[80].value),(0,n.tZ)("td",null,e[81].value),(0,n.tZ)("td",null,e[82].value,(0,n.tZ)("code",null,e[83].value),e[84].value,(0,n.tZ)("code",null,e[85].value),e[86].value,(0,n.tZ)("code",null,e[87].value),e[88].value),(0,n.tZ)("td",null,e[89].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[90].value),(0,n.tZ)("td",null,e[91].value,(0,n.tZ)("code",null,e[92].value),e[93].value),(0,n.tZ)("td",null,e[94].value),(0,n.tZ)("td",null,e[95].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[96].value),(0,n.tZ)("td",null,e[97].value),(0,n.tZ)("td",null,e[98].value),(0,n.tZ)("td",null,e[99].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[100].value),(0,n.tZ)("td",null,e[101].value),(0,n.tZ)("td",null,e[102].value),(0,n.tZ)("td",null,e[103].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[104].value),(0,n.tZ)("td",null,e[105].value),(0,n.tZ)("td",null,e[106].value),(0,n.tZ)("td",null,e[107].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[108].value),(0,n.tZ)("td",null,e[109].value,(0,n.tZ)("code",null,e[110].value)),(0,n.tZ)("td",null,e[111].value),(0,n.tZ)("td",null,e[112].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[113].value),(0,n.tZ)("td",null,e[114].value),(0,n.tZ)("td",null,e[115].value),(0,n.tZ)("td",null,e[116].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[117].value),(0,n.tZ)("td",null,e[118].value),(0,n.tZ)("td",null,e[119].value),(0,n.tZ)("td",null,e[120].value),(0,n.tZ)("td",null,e[121].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[122].value),(0,n.tZ)("td",null,e[123].value),(0,n.tZ)("td",null,e[124].value),(0,n.tZ)("td",null,e[125].value),(0,n.tZ)("td",null,e[126].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[127].value),(0,n.tZ)("td",null,e[128].value),(0,n.tZ)("td",null,e[129].value),(0,n.tZ)("td",null,e[130].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[131].value),(0,n.tZ)("td",null,e[132].value),(0,n.tZ)("td",null,e[133].value),(0,n.tZ)("td",null,e[134].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[135].value),(0,n.tZ)("td",null,e[136].value),(0,n.tZ)("td",null,e[137].value),(0,n.tZ)("td",null,e[138].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[139].value),(0,n.tZ)("td",null,e[140].value),(0,n.tZ)("td",null,e[141].value),(0,n.tZ)("td",null,e[142].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[143].value),(0,n.tZ)("td",null,e[144].value),(0,n.tZ)("td",null,e[145].value),(0,n.tZ)("td",null,e[146].value),(0,n.tZ)("td",null,e[147].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[148].value),(0,n.tZ)("td",null,e[149].value),(0,n.tZ)("td",null,e[150].value),(0,n.tZ)("td",null,e[151].value),(0,n.tZ)("td",null,e[152].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[153].value),(0,n.tZ)("td",null,e[154].value),(0,n.tZ)("td",null,e[155].value),(0,n.tZ)("td",null,e[156].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[157].value),(0,n.tZ)("td",null,e[158].value),(0,n.tZ)("td",null,e[159].value),(0,n.tZ)("td",null,e[160].value),(0,n.tZ)("td",null,e[161].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[162].value),(0,n.tZ)("td",null,e[163].value),(0,n.tZ)("td",null,e[164].value),(0,n.tZ)("td",null,e[165].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[166].value),(0,n.tZ)("td",null,e[167].value),(0,n.tZ)("td",null,e[168].value),(0,n.tZ)("td",null,e[169].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[170].value),(0,n.tZ)("td",null,e[171].value),(0,n.tZ)("td",null,e[172].value),(0,n.tZ)("td",null,e[173].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[174].value),(0,n.tZ)("td",null,e[175].value),(0,n.tZ)("td",null,e[176].value),(0,n.tZ)("td",null,e[177].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[178].value),(0,n.tZ)("td",null,e[179].value),(0,n.tZ)("td",null,e[180].value),(0,n.tZ)("td",null,e[181].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[182].value),(0,n.tZ)("td",null,e[183].value),(0,n.tZ)("td",null,e[184].value),(0,n.tZ)("td",null,e[185].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[186].value),(0,n.tZ)("td",null,e[187].value),(0,n.tZ)("td",null,e[188].value),(0,n.tZ)("td",null,e[189].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[190].value),(0,n.tZ)("td",null,e[191].value),(0,n.tZ)("td",null,e[192].value),(0,n.tZ)("td",null,e[193].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[194].value),(0,n.tZ)("td",null,e[195].value),(0,n.tZ)("td",null,e[196].value),(0,n.tZ)("td",null,e[197].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[198].value),(0,n.tZ)("td",null,e[199].value),(0,n.tZ)("td",null,e[200].value),(0,n.tZ)("td",null,e[201].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[202].value),(0,n.tZ)("td",null,e[203].value),(0,n.tZ)("td",null,e[204].value),(0,n.tZ)("td",null,e[205].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"treenode-props"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#treenode-props"},(0,n.tZ)("span",{className:"icon icon-link"})),"TreeNode props"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[206].value),(0,n.tZ)("th",null,e[207].value),(0,n.tZ)("th",null,e[208].value),(0,n.tZ)("th",null,e[209].value),(0,n.tZ)("th",null))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[210].value),(0,n.tZ)("td",null,e[211].value),(0,n.tZ)("td",null,e[212].value),(0,n.tZ)("td",null,e[213].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[214].value),(0,n.tZ)("td",null,e[215].value),(0,n.tZ)("td",null,e[216].value),(0,n.tZ)("td",null,e[217].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[218].value),(0,n.tZ)("td",null,e[219].value),(0,n.tZ)("td",null,e[220].value),(0,n.tZ)("td",null,e[221].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[222].value),(0,n.tZ)("td",null,e[223].value),(0,n.tZ)("td",null,e[224].value),(0,n.tZ)("td",null,e[225].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[226].value),(0,n.tZ)("td",null,e[227].value,(0,n.tZ)("code",null,e[228].value),e[229].value,(0,n.tZ)("code",null,e[230].value),e[231].value),(0,n.tZ)("td",null,e[232].value),(0,n.tZ)("td",null,e[233].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[234].value),(0,n.tZ)("td",null,e[235].value),(0,n.tZ)("td",null,e[236].value),(0,n.tZ)("td",null,e[237].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[238].value),(0,n.tZ)("td",null,e[239].value),(0,n.tZ)("td",null,e[240].value),(0,n.tZ)("td",null,e[241].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[242].value),(0,n.tZ)("td",null,e[243].value),(0,n.tZ)("td",null,e[244].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[245].value)),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"directorytree-props"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#directorytree-props"},(0,n.tZ)("span",{className:"icon icon-link"})),"DirectoryTree props"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[246].value),(0,n.tZ)("th",null,e[247].value),(0,n.tZ)("th",null,e[248].value),(0,n.tZ)("th",null,e[249].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[250].value),(0,n.tZ)("td",null,e[251].value,(0,n.tZ)("code",null,e[252].value),e[253].value,(0,n.tZ)("code",null,e[254].value)),(0,n.tZ)("td",null,e[255].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[256].value))))),(0,n.tZ)("h2",{id:"note"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#note"},(0,n.tZ)("span",{className:"icon icon-link"})),"Note"),(0,n.tZ)("p",null,e[257].value,(0,n.tZ)("code",null,e[258].value),e[259].value,(0,n.tZ)("code",null,e[260].value),e[261].value,(0,n.tZ)("code",null,e[262].value),e[263].value,(0,n.tZ)("strong",null,e[264].value),e[265].value),(0,n.tZ)(o.Z,{lang:"jsx"},e[266].value),(0,n.tZ)("h3",{id:"tree-methods"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tree-methods"},(0,n.tZ)("span",{className:"icon icon-link"})),"Tree Methods"),(0,n.tZ)(l.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[267].value),(0,n.tZ)("th",null,e[268].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[269].value),(0,n.tZ)("td",null,e[270].value)))),(0,n.tZ)("h2",{id:"faq"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,n.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,n.tZ)("h3",{id:"how-to-hide-file-icon-when-use-showline"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-hide-file-icon-when-use-showline"},(0,n.tZ)("span",{className:"icon icon-link"})),"How to hide file icon when use showLine?"),(0,n.tZ)("p",null,e[271].value,(0,n.tZ)("a",{href:"https://codesandbox.io/s/883vo47xp8"},e[272].value)),(0,n.tZ)("h3",{id:"why-defaultexpandall-not-working-on-ajax-data"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#why-defaultexpandall-not-working-on-ajax-data"},(0,n.tZ)("span",{className:"icon icon-link"})),"Why defaultExpandAll not working on ajax data?"),(0,n.tZ)("p",null,(0,n.tZ)("code",null,e[273].value),e[274].value,(0,n.tZ)("code",null,e[275].value),e[276].value,(0,n.tZ)("code",null,e[277].value),e[278].value),(0,n.tZ)("h3",{id:"virtual-scroll-limitation"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#virtual-scroll-limitation"},(0,n.tZ)("span",{className:"icon icon-link"})),"Virtual scroll limitation"),(0,n.tZ)("p",null,e[279].value,(0,n.tZ)("code",null,e[280].value),e[281].value),(0,n.tZ)("h3",{id:"what-does-disabled-node-work-logic-in-the-tree"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#what-does-disabled-node-work-logic-in-the-tree"},(0,n.tZ)("span",{className:"icon icon-link"})),"What does ",(0,n.tZ)("code",null,e[282].value)," node work logic in the tree?"),(0,n.tZ)("p",null,e[283].value,(0,n.tZ)("code",null,e[284].value),e[285].value,(0,n.tZ)("code",null,e[286].value),e[287].value,(0,n.tZ)("code",null,e[288].value),e[289].value,(0,n.tZ)("code",null,e[290].value),e[291].value),(0,n.tZ)("p",null,e[292].value,(0,n.tZ)("code",null,e[293].value),e[294].value,(0,n.tZ)("code",null,e[295].value),e[296].value))))}a.default=r}}]);
