"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1009],{83890:function(v,a,e){e.r(a);var i=e(2143),s=e(50250),_=e(59378),c=e(8910),p=e(74775),u=e(5937),m=e(2068),h=e(74399),f=e(63942),E=e(16073),g=e(24628),D=e(19260),x=e(56140),d=e(5388),C=e(49545),P=e(6965),w=e(49706),S=e(95127),T=e(74418),A=e(73024),n=e(94065),o=e(67294),t=e(96923);function r(){var Z=(0,n.eL)(),l=Z.texts;return(0,t.tZ)(n.dY,null,(0,t.tZ)(o.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,l[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("p",null,l[1].value),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(d.Z,{items:[{demo:{id:"components-tree-select-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/tree-select/demo/basic.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-tree-select-demo-multiple"},previewerProps:{title:"\u591A\u9009",filename:"components/tree-select/demo/multiple.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'my leaf',
          },
          {
            value: 'leaf2',
            title: 'your leaf',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                sss
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>\u591A\u9009\u7684\u6811\u9009\u62E9\u3002</p>"}},{demo:{id:"components-tree-select-demo-treedata"},previewerProps:{title:"\u4ECE\u6570\u636E\u76F4\u63A5\u751F\u6210",filename:"components/tree-select/demo/treeData.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      treeData={treeData}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
    />
  );
};
export default App;
`,description:"<p>\u4F7F\u7528 <code>treeData</code> \u628A JSON \u6570\u636E\u76F4\u63A5\u751F\u6210\u6811\u7ED3\u6784\u3002</p>"}},{demo:{id:"components-tree-select-demo-checkable"},previewerProps:{title:"\u53EF\u52FE\u9009",filename:"components/tree-select/demo/checkable.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const { SHOW_PARENT } = TreeSelect;
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState(['0-0-0']);
  const onChange = (newValue) => {
    console.log('onChange ', value);
    setValue(newValue);
  };
  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };
  return <TreeSelect {...tProps} />;
};
export default App;
`,description:"<p>\u4F7F\u7528\u52FE\u9009\u6846\u5B9E\u73B0\u591A\u9009\u529F\u80FD\u3002</p>"}},{demo:{id:"components-tree-select-demo-async"},previewerProps:{title:"\u5F02\u6B65\u52A0\u8F7D",filename:"components/tree-select/demo/async.tsx",jsx:`import { TreeSelect } from 'antd';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState();
  const [treeData, setTreeData] = useState([
    {
      id: 1,
      pId: 0,
      value: '1',
      title: 'Expand to load',
    },
    {
      id: 2,
      pId: 0,
      value: '2',
      title: 'Expand to load',
    },
    {
      id: 3,
      pId: 0,
      value: '3',
      title: 'Tree Node',
      isLeaf: true,
    },
  ]);
  const genTreeNode = (parentId, isLeaf = false) => {
    const random = Math.random().toString(36).substring(2, 6);
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? 'Tree Node' : 'Expand to load',
      isLeaf,
    };
  };
  const onLoadData = ({ id }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setTreeData(
          treeData.concat([genTreeNode(id, false), genTreeNode(id, true), genTreeNode(id, true)]),
        );
        resolve(undefined);
      }, 300);
    });
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      treeDataSimpleMode
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      onChange={onChange}
      loadData={onLoadData}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>\u5F02\u6B65\u52A0\u8F7D\u6811\u8282\u70B9\u3002</p>"}},{demo:{id:"components-tree-select-demo-treeline"},previewerProps:{title:"\u7EBF\u6027\u6837\u5F0F",filename:"components/tree-select/demo/treeLine.tsx",jsx:`import { Space, Switch, TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: 'sss',
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [treeLine, setTreeLine] = useState(true);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  return (
    <Space direction="vertical">
      <Switch
        checkedChildren="treeLine"
        unCheckedChildren="treeLine"
        checked={treeLine}
        onChange={() => setTreeLine(!treeLine)}
      />
      <Switch
        disabled={!treeLine}
        checkedChildren="showLeafIcon"
        unCheckedChildren="showLeafIcon"
        checked={showLeafIcon}
        onChange={() => setShowLeafIcon(!showLeafIcon)}
      />
      <TreeSelect
        treeLine={
          treeLine && {
            showLeafIcon,
          }
        }
        style={{
          width: 300,
        }}
        treeData={treeData}
      />
    </Space>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7 <code>treeLine</code> \u914D\u7F6E\u7EBF\u6027\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-tree-select-demo-placement"},previewerProps:{title:"\u5F39\u51FA\u4F4D\u7F6E",filename:"components/tree-select/demo/placement.tsx",jsx:`import { Radio, TreeSelect } from 'antd';
import { useState } from 'react';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />

      <TreeSelect
        showSearch
        dropdownStyle={{
          maxHeight: 400,
          overflow: 'auto',
          minWidth: 300,
        }}
        placeholder="Please select"
        dropdownMatchSelectWidth={false}
        placement={placement}
        allowClear
        treeDefaultExpandAll
        treeData={treeData}
      />
    </>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7 <code>placement</code> \u624B\u52A8\u6307\u5B9A\u5F39\u51FA\u7684\u4F4D\u7F6E\u3002</p>"}},{demo:{id:"components-tree-select-demo-status"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u72B6\u6001",filename:"components/tree-select/demo/status.tsx",jsx:`import { Space, TreeSelect } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <TreeSelect
      status="error"
      style={{
        width: '100%',
      }}
      placeholder="Error"
    />
    <TreeSelect
      status="warning"
      style={{
        width: '100%',
      }}
      multiple
      placeholder="Warning multiple"
    />
  </Space>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>status</code> \u4E3A TreeSelect \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 <code>error</code> \u6216\u8005 <code>warning</code>\u3002</p>"}},{demo:{id:"components-tree-select-demo-suffix"},previewerProps:{debug:!0,title:"\u540E\u7F00\u56FE\u6807",filename:"components/tree-select/demo/suffix.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { TreeSelect } from 'antd';
import { useState } from 'react';
const icon = <SmileOutlined />;
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'my leaf',
          },
          {
            value: 'leaf2',
            title: 'your leaf',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                sss
              </b>
            ),
          },
        ],
      },
    ],
  },
];
const App = () => {
  const [value, setValue] = useState();
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      suffixIcon={icon}
      style={{
        width: '100%',
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-tree-select-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tree-select/demo/render-panel.tsx",jsx:`import { TreeSelect } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTreeSelect } = TreeSelect;
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];
const App = () => (
  <InternalTreeSelect
    defaultValue="lucy"
    style={{
      width: '100%',
    }}
    treeData={treeData}
  />
);
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"tree-props"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tree-props"},(0,t.tZ)("span",{className:"icon icon-link"})),"Tree props"),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,l[2].value),(0,t.tZ)("th",null,l[3].value),(0,t.tZ)("th",null,l[4].value),(0,t.tZ)("th",null,l[5].value),(0,t.tZ)("th",null,l[6].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[7].value),(0,t.tZ)("td",null,l[8].value),(0,t.tZ)("td",null,l[9].value),(0,t.tZ)("td",null,l[10].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[11].value),(0,t.tZ)("td",null,l[12].value),(0,t.tZ)("td",null,l[13].value),(0,t.tZ)("td",null,l[14].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[15].value),(0,t.tZ)("td",null,l[16].value),(0,t.tZ)("td",null,l[17].value),(0,t.tZ)("td",null,l[18].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[19].value),(0,t.tZ)("td",null,l[20].value),(0,t.tZ)("td",null,l[21].value),(0,t.tZ)("td",null,l[22].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[23].value),(0,t.tZ)("td",null,l[24].value),(0,t.tZ)("td",null,l[25].value),(0,t.tZ)("td",null,l[26].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[27].value),(0,t.tZ)("td",null,l[28].value),(0,t.tZ)("td",null,l[29].value),(0,t.tZ)("td",null,l[30].value),(0,t.tZ)("td",null,l[31].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[32].value),(0,t.tZ)("td",null,l[33].value,(0,t.tZ)("code",null,l[34].value),l[35].value),(0,t.tZ)("td",null,l[36].value),(0,t.tZ)("td",null,l[37].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[38].value),(0,t.tZ)("td",null,l[39].value),(0,t.tZ)("td",null,l[40].value),(0,t.tZ)("td",null,l[41].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[42].value),(0,t.tZ)("td",null,l[43].value),(0,t.tZ)("td",null,l[44].value),(0,t.tZ)("td",null,l[45].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[46].value),(0,t.tZ)("td",null,l[47].value),(0,t.tZ)("td",null,l[48].value),(0,t.tZ)("td",null,l[49].value,(0,t.tZ)("code",null,l[50].value),l[51].value,(0,t.tZ)("code",null,l[52].value),l[53].value,(0,t.tZ)("code",null,l[54].value),l[55].value),(0,t.tZ)("td",null,l[56].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[57].value),(0,t.tZ)("td",null,l[58].value),(0,t.tZ)("td",null,l[59].value),(0,t.tZ)("td",null,l[60].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[61].value),(0,t.tZ)("td",null,l[62].value,(0,t.tZ)("a",{href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},l[63].value)),(0,t.tZ)("td",null,l[64].value),(0,t.tZ)("td",null,l[65].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[66].value),(0,t.tZ)("td",null,l[67].value,(0,t.tZ)("code",null,l[68].value),l[69].value),(0,t.tZ)("td",null,l[70].value),(0,t.tZ)("td",null,l[71].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[72].value),(0,t.tZ)("td",null,l[73].value),(0,t.tZ)("td",null,l[74].value),(0,t.tZ)("td",null,l[75].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[76].value),(0,t.tZ)("td",null,l[77].value),(0,t.tZ)("td",null,l[78].value),(0,t.tZ)("td",null,l[79].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[80].value),(0,t.tZ)("td",null,l[81].value),(0,t.tZ)("td",null,l[82].value,(0,t.tZ)("code",null,l[83].value)),(0,t.tZ)("td",null,l[84].value),(0,t.tZ)("td",null,l[85].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[86].value),(0,t.tZ)("td",null,l[87].value),(0,t.tZ)("td",null,l[88].value),(0,t.tZ)("td",null,l[89].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[90].value),(0,t.tZ)("td",null,l[91].value),(0,t.tZ)("td",null,l[92].value),(0,t.tZ)("td",null,l[93].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[94].value),(0,t.tZ)("td",null,l[95].value),(0,t.tZ)("td",null,l[96].value),(0,t.tZ)("td",null,l[97].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[98].value),(0,t.tZ)("td",null,l[99].value),(0,t.tZ)("td",null,l[100].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[101].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[102].value),(0,t.tZ)("td",null,l[103].value),(0,t.tZ)("td",null,l[104].value),(0,t.tZ)("td",null,l[105].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[106].value),(0,t.tZ)("td",null,l[107].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[108].value),l[109].value,(0,t.tZ)("code",null,l[110].value),l[111].value,(0,t.tZ)("code",null,l[112].value),l[113].value,(0,t.tZ)("code",null,l[114].value)),(0,t.tZ)("td",null,l[115].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[116].value),(0,t.tZ)("td",null,l[117].value,(0,t.tZ)("code",null,l[118].value),l[119].value),(0,t.tZ)("td",null,l[120].value),(0,t.tZ)("td",null,l[121].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[122].value),(0,t.tZ)("td",null,l[123].value,(0,t.tZ)("code",null,l[124].value),l[125].value,(0,t.tZ)("code",null,l[126].value)),(0,t.tZ)("td",null,l[127].value),(0,t.tZ)("td",null,l[128].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[129].value),(0,t.tZ)("td",null,l[130].value,(0,t.tZ)("code",null,l[131].value),l[132].value,(0,t.tZ)("code",null,l[133].value),l[134].value,(0,t.tZ)("code",null,l[135].value),l[136].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[137].value),l[138].value,(0,t.tZ)("code",null,l[139].value),l[140].value,(0,t.tZ)("code",null,l[141].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[142].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[143].value),(0,t.tZ)("td",null,l[144].value),(0,t.tZ)("td",null,l[145].value),(0,t.tZ)("td",null,l[146].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[147].value),(0,t.tZ)("td",null,l[148].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[149].value),l[150].value,(0,t.tZ)("code",null,l[151].value),l[152].value,(0,t.tZ)("code",null,l[153].value)),(0,t.tZ)("td",null,l[154].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[155].value),(0,t.tZ)("td",null,l[156].value),(0,t.tZ)("td",null,l[157].value),(0,t.tZ)("td",null,l[158].value),(0,t.tZ)("td",null,l[159].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[160].value),(0,t.tZ)("td",null,l[161].value,(0,t.tZ)("code",null,l[162].value),l[163].value),(0,t.tZ)("td",null,l[164].value),(0,t.tZ)("td",null,l[165].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[166].value),(0,t.tZ)("td",null,l[167].value),(0,t.tZ)("td",null,l[168].value),(0,t.tZ)("td",null,l[169].value),(0,t.tZ)("td",null,l[170].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[171].value),(0,t.tZ)("td",null,l[172].value),(0,t.tZ)("td",null,l[173].value),(0,t.tZ)("td",null,l[174].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[175].value),(0,t.tZ)("td",null,l[176].value),(0,t.tZ)("td",null,l[177].value),(0,t.tZ)("td",null,l[178].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[179].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[180].value),l[181].value,(0,t.tZ)("code",null,l[182].value),l[183].value),(0,t.tZ)("td",null,l[184].value),(0,t.tZ)("td",null,l[185].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[186].value),(0,t.tZ)("td",null,l[187].value),(0,t.tZ)("td",null,l[188].value),(0,t.tZ)("td",null,l[189].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[190].value),(0,t.tZ)("td",null,l[191].value,(0,t.tZ)("code",null,l[192].value),l[193].value),(0,t.tZ)("td",null,l[194].value),(0,t.tZ)("td",null,l[195].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[196].value),(0,t.tZ)("td",null,l[197].value),(0,t.tZ)("td",null,l[198].value),(0,t.tZ)("td",null,l[199].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[200].value),(0,t.tZ)("td",null,l[201].value),(0,t.tZ)("td",null,l[202].value),(0,t.tZ)("td",null,l[203].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[204].value),(0,t.tZ)("td",null,l[205].value,(0,t.tZ)("code",null,l[206].value),l[207].value,(0,t.tZ)("code",null,l[208].value)),(0,t.tZ)("td",null,l[209].value),(0,t.tZ)("td",null,l[210].value),(0,t.tZ)("td",null,l[211].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[212].value),(0,t.tZ)("td",null,l[213].value),(0,t.tZ)("td",null,l[214].value),(0,t.tZ)("td",null,l[215].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[216].value),(0,t.tZ)("td",null,l[217].value),(0,t.tZ)("td",null,l[218].value),(0,t.tZ)("td",null,l[219].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[220].value),(0,t.tZ)("td",null,l[221].value,(0,t.tZ)(n.rU,{to:"/components/tree-cn#components-tree-demo-line"},l[222].value)),(0,t.tZ)("td",null,l[223].value),(0,t.tZ)("td",null,l[224].value),(0,t.tZ)("td",null,l[225].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[226].value),(0,t.tZ)("td",null,l[227].value,(0,t.tZ)("code",null,l[228].value),l[229].value),(0,t.tZ)("td",null,l[230].value),(0,t.tZ)("td",null,l[231].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[232].value),(0,t.tZ)("td",null,l[233].value),(0,t.tZ)("td",null,l[234].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[235].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[236].value),(0,t.tZ)("td",null,l[237].value),(0,t.tZ)("td",null,l[238].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[239].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[240].value),(0,t.tZ)("td",null,l[241].value),(0,t.tZ)("td",null,l[242].value),(0,t.tZ)("td",null,l[243].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[244].value),(0,t.tZ)("td",null,l[245].value),(0,t.tZ)("td",null,l[246].value),(0,t.tZ)("td",null,l[247].value),(0,t.tZ)("td",null,l[248].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[249].value),(0,t.tZ)("td",null,l[250].value),(0,t.tZ)("td",null,l[251].value),(0,t.tZ)("td",null,l[252].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[253].value),(0,t.tZ)("td",null,l[254].value),(0,t.tZ)("td",null,l[255].value),(0,t.tZ)("td",null,l[256].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[257].value),(0,t.tZ)("td",null,l[258].value),(0,t.tZ)("td",null,l[259].value),(0,t.tZ)("td",null,l[260].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[261].value),(0,t.tZ)("td",null,l[262].value),(0,t.tZ)("td",null,l[263].value),(0,t.tZ)("td",null,l[264].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[265].value),(0,t.tZ)("td",null,l[266].value),(0,t.tZ)("td",null,l[267].value),(0,t.tZ)("td",null,l[268].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"tree-\u65B9\u6CD5"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tree-\u65B9\u6CD5"},(0,t.tZ)("span",{className:"icon icon-link"})),"Tree \u65B9\u6CD5"),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,l[269].value),(0,t.tZ)("th",null,l[270].value),(0,t.tZ)("th",null,l[271].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[272].value),(0,t.tZ)("td",null,l[273].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[274].value),(0,t.tZ)("td",null,l[275].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"treenode-props"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#treenode-props"},(0,t.tZ)("span",{className:"icon icon-link"})),"TreeNode props"),(0,t.tZ)("blockquote",null,(0,t.tZ)("p",null,l[276].value)),(0,t.tZ)(u.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,l[277].value),(0,t.tZ)("th",null,l[278].value),(0,t.tZ)("th",null,l[279].value),(0,t.tZ)("th",null,l[280].value),(0,t.tZ)("th",null,l[281].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[282].value),(0,t.tZ)("td",null,l[283].value),(0,t.tZ)("td",null,l[284].value),(0,t.tZ)("td",null,l[285].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[286].value),(0,t.tZ)("td",null,l[287].value),(0,t.tZ)("td",null,l[288].value),(0,t.tZ)("td",null,l[289].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[290].value),(0,t.tZ)("td",null,l[291].value),(0,t.tZ)("td",null,l[292].value),(0,t.tZ)("td",null,l[293].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[294].value),(0,t.tZ)("td",null,l[295].value),(0,t.tZ)("td",null,l[296].value),(0,t.tZ)("td",null,l[297].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[298].value),(0,t.tZ)("td",null,l[299].value),(0,t.tZ)("td",null,l[300].value),(0,t.tZ)("td",null,l[301].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[302].value),(0,t.tZ)("td",null,l[303].value),(0,t.tZ)("td",null,l[304].value),(0,t.tZ)("td",null,l[305].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[306].value),(0,t.tZ)("td",null,l[307].value),(0,t.tZ)("td",null,l[308].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[309].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[310].value),(0,t.tZ)("td",null,l[311].value),(0,t.tZ)("td",null,l[312].value),(0,t.tZ)("td",null,l[313].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h2",{id:"faq"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,t.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,t.tZ)("h3",{id:"onchange-\u65F6\u5982\u4F55\u83B7\u5F97\u7236\u8282\u70B9\u4FE1\u606F"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#onchange-\u65F6\u5982\u4F55\u83B7\u5F97\u7236\u8282\u70B9\u4FE1\u606F"},(0,t.tZ)("span",{className:"icon icon-link"})),"onChange \u65F6\u5982\u4F55\u83B7\u5F97\u7236\u8282\u70B9\u4FE1\u606F\uFF1F"),(0,t.tZ)("p",null,l[314].value,(0,t.tZ)("a",{href:"https://codesandbox.io/s/wk080nn81k"},l[315].value)),(0,t.tZ)("h3",{id:"\u81EA\u5B9A\u4E49-option-\u6837\u5F0F\u5BFC\u81F4\u6EDA\u52A8\u5F02\u5E38\u600E\u4E48\u529E"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u81EA\u5B9A\u4E49-option-\u6837\u5F0F\u5BFC\u81F4\u6EDA\u52A8\u5F02\u5E38\u600E\u4E48\u529E"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49 Option \u6837\u5F0F\u5BFC\u81F4\u6EDA\u52A8\u5F02\u5E38\u600E\u4E48\u529E\uFF1F"),(0,t.tZ)("p",null,l[316].value,(0,t.tZ)(n.rU,{to:"/components/select-cn"},l[317].value),l[318].value))))}a.default=r}}]);
