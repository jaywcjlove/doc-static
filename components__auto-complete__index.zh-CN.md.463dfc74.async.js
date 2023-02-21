"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8816],{11636:function(i,l,e){e.r(l);var p=e(2143),m=e(50250),_=e(59378),c=e(8910),v=e(74775),o=e(5937),Z=e(2068),h=e(74399),g=e(63942),A=e(16073),x=e(24628),f=e(19260),I=e(56140),a=e(5388),C=e(49545),E=e(6965),S=e(49706),O=e(95127),P=e(74418),D=e(73024),u=e(94065),r=e(67294),n=e(96923);function d(){var s=(0,u.eL)(),t=s.texts;return(0,n.tZ)(u.dY,null,(0,n.tZ)(r.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,t[1].value),(0,n.tZ)("li",null,t[2].value)),(0,n.tZ)("p",null,t[3].value),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,t[4].value,(0,n.tZ)("strong",null,t[5].value),t[6].value),(0,n.tZ)("li",null,t[7].value,(0,n.tZ)("strong",null,t[8].value),t[9].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(a.Z,{items:[{demo:{id:"components-auto-complete-demo-basic"},previewerProps:{title:"\u57FA\u672C\u4F7F\u7528",filename:"components/auto-complete/demo/basic.tsx",jsx:`import { AutoComplete } from 'antd';
import { useState } from 'react';
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const App = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };
  const onSelect = (data) => {
    console.log('onSelect', data);
  };
  const onChange = (data) => {
    setValue(data);
  };
  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
};
export default App;
`,description:"<p>\u57FA\u672C\u4F7F\u7528\uFF0C\u901A\u8FC7 <code>options</code> \u8BBE\u7F6E\u81EA\u52A8\u5B8C\u6210\u7684\u6570\u636E\u6E90\u3002</p>"}},{demo:{id:"components-auto-complete-demo-options"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u9009\u9879",filename:"components/auto-complete/demo/options.tsx",jsx:`import { AutoComplete } from 'antd';
import { useState } from 'react';
const App = () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    let res = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
        value,
        label: \`\${value}@\${domain}\`,
      }));
    }
    setOptions(res);
  };
  return (
    <AutoComplete
      style={{
        width: 200,
      }}
      onSearch={handleSearch}
      placeholder="input here"
      options={options}
    />
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u8FD4\u56DE\u81EA\u5B9A\u4E49\u7684 <code>Option</code> label</p>"}},{demo:{id:"components-auto-complete-demo-custom"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u8F93\u5165\u7EC4\u4EF6",filename:"components/auto-complete/demo/custom.tsx",jsx:`import { AutoComplete, Input } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;
const App = () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(
      !value
        ? []
        : [
            {
              value,
            },
            {
              value: value + value,
            },
            {
              value: value + value + value,
            },
          ],
    );
  };
  const handleKeyPress = (ev) => {
    console.log('handleKeyPress', ev);
  };
  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  return (
    <AutoComplete
      options={options}
      style={{
        width: 200,
      }}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <TextArea
        placeholder="input here"
        className="custom"
        style={{
          height: 50,
        }}
        onKeyPress={handleKeyPress}
      />
    </AutoComplete>
  );
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u8F93\u5165\u7EC4\u4EF6\u3002</p>"}},{demo:{id:"components-auto-complete-demo-non-case-sensitive"},previewerProps:{title:"\u4E0D\u533A\u5206\u5927\u5C0F\u5199",filename:"components/auto-complete/demo/non-case-sensitive.tsx",jsx:`import { AutoComplete } from 'antd';
const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
];
const App = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    placeholder="try to type \`b\`"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);
export default App;
`,description:"<p>\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684 AutoComplete</p>"}},{demo:{id:"components-auto-complete-demo-certain-category"},previewerProps:{title:"\u67E5\u8BE2\u6A21\u5F0F - \u786E\u5B9A\u7C7B\u76EE",filename:"components/auto-complete/demo/certain-category.tsx",jsx:`import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: 'right',
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);
const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});
const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: renderTitle('Solutions'),
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('AntDesign design language', 100000)],
  },
];
const App = () => (
  <AutoComplete
    popupClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    style={{
      width: 250,
    }}
    options={options}
  >
    <Input.Search size="large" placeholder="input here" />
  </AutoComplete>
);
export default App;
`,description:'<p><a href="https://ant.design/docs/spec/reaction#lookup-patterns">\u67E5\u8BE2\u6A21\u5F0F: \u786E\u5B9A\u7C7B\u76EE</a> \u793A\u4F8B\u3002</p>',style:`.certain-category-search-dropdown .ant-select-dropdown-menu-item-group-title {
  color: #666;
  font-weight: bold;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item-group {
  border-bottom: 1px solid #f6f6f6;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item {
  padding-left: 16px;
}

.certain-category-search-dropdown .ant-select-dropdown-menu-item.show-all {
  text-align: center;
  cursor: default;
}

.certain-category-search-dropdown .ant-select-dropdown-menu {
  max-height: 300px;
}`}},{demo:{id:"components-auto-complete-demo-uncertain-category"},previewerProps:{title:"\u67E5\u8BE2\u6A21\u5F0F - \u4E0D\u786E\u5B9A\u7C7B\u76EE",filename:"components/auto-complete/demo/uncertain-category.tsx",jsx:`import { AutoComplete, Input } from 'antd';
import { useState } from 'react';
const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = \`\${query}\${idx}\`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={\`https://s.taobao.com/search?q=\${query}\`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
const App = () => {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log('onSelect', value);
  };
  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: 300,
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};
export default App;
`,description:'<p><a href="https://ant.design/docs/spec/reaction#lookup-patterns">\u67E5\u8BE2\u6A21\u5F0F: \u4E0D\u786E\u5B9A\u7C7B\u76EE</a> \u793A\u4F8B\u3002</p>'}},{demo:{id:"components-auto-complete-demo-status"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u72B6\u6001",filename:"components/auto-complete/demo/status.tsx",jsx:`import { AutoComplete, Space } from 'antd';
import { useState } from 'react';
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const App = () => {
  const [options, setOptions] = useState([]);
  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <AutoComplete
        options={options}
        onSearch={onSearch}
        status="error"
        style={{
          width: 200,
        }}
      />
      <AutoComplete
        options={options}
        onSearch={onSearch}
        status="warning"
        style={{
          width: 200,
        }}
      />
    </Space>
  );
};
export default App;
`,description:"<p>\u4F7F\u7528 <code>status</code> \u4E3A AutoComplete \u6DFB\u52A0\u72B6\u6001\uFF0C\u53EF\u9009 <code>error</code> \u6216\u8005 <code>warning</code>\u3002</p>"}},{demo:{id:"components-auto-complete-demo-form-debug"},previewerProps:{debug:!0,title:"\u5728 Form \u4E2D Debug",filename:"components/auto-complete/demo/form-debug.tsx",jsx:`import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Button, Form, Input, TreeSelect } from 'antd';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const App = () => (
  <Form
    style={{
      margin: '0 auto',
    }}
    {...formItemLayout}
  >
    <Form.Item label="\u5355\u72EC AutoComplete">
      <AutoComplete />
    </Form.Item>
    <Form.Item label="\u5355\u72EC TreeSelect">
      <TreeSelect />
    </Form.Item>
    <Form.Item label="\u6DFB\u52A0 Input.Group \u6B63\u5E38">
      <Input.Group compact>
        <TreeSelect
          style={{
            width: '30%',
          }}
        />
        <AutoComplete />
      </Input.Group>
    </Form.Item>
    <Form.Item label="\u5305\u542B search \u56FE\u6807\u6B63\u5E38">
      <AutoComplete>
        <Input suffix={<SearchOutlined />} />
      </AutoComplete>
    </Form.Item>
    <Form.Item label="\u540C\u65F6\u6709 Input.Group \u548C\u56FE\u6807\u53D1\u751F\u79FB\u4F4D">
      <Input.Group compact>
        <TreeSelect
          style={{
            width: '30%',
          }}
        />
        <AutoComplete>
          <Input suffix={<SearchOutlined />} />
        </AutoComplete>
      </Input.Group>
    </Form.Item>
    <Form.Item label="\u540C\u65F6\u6709 Input.Group \u548C Search \u7EC4\u4EF6\u53D1\u751F\u79FB\u4F4D">
      <Input.Group compact>
        <TreeSelect
          style={{
            width: '30%',
          }}
        />
        <AutoComplete>
          <Input.Search />
        </AutoComplete>
      </Input.Group>
    </Form.Item>
    <Form.Item label="Input Group \u548C Button \u7ED3\u5408">
      <Input.Group compact>
        <TreeSelect
          style={{
            width: '20%',
          }}
        />
        <AutoComplete>
          <Input.Search />
        </AutoComplete>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
      </Input.Group>
    </Form.Item>
  </Form>
);
export default App;
`}},{demo:{id:"components-auto-complete-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/auto-complete/demo/render-panel.tsx",jsx:`import { AutoComplete, Space, Switch } from 'antd';
import React from 'react';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalAutoComplete } = AutoComplete;
const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Space
      direction="vertical"
      style={{
        display: 'flex',
      }}
    >
      <Switch checked={open} onChange={() => setOpen(!open)} />
      <InternalAutoComplete
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        open={open}
        options={[
          {
            label: 'Jack',
            value: 'jack',
          },
          {
            label: 'Lucy',
            value: 'lucy',
          },
          {
            label: 'Disabled',
            value: 'disabled',
          },
          {
            label: 'Bamboo',
            value: 'bamboo',
          },
        ]}
      />
    </Space>
  );
};
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[10].value),(0,n.tZ)("th",null,t[11].value),(0,n.tZ)("th",null,t[12].value),(0,n.tZ)("th",null,t[13].value),(0,n.tZ)("th",null,t[14].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null,t[33].value),(0,n.tZ)("td",null,t[34].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[35].value),(0,n.tZ)("td",null,t[36].value),(0,n.tZ)("td",null,t[37].value),(0,n.tZ)("td",null,t[38].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[39].value),(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[47].value),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[51].value),(0,n.tZ)("td",null,t[52].value),(0,n.tZ)("td",null,t[53].value),(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null,t[55].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[56].value),(0,n.tZ)("td",null,t[57].value,(0,n.tZ)("code",null,t[58].value),t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null,t[61].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[62].value),(0,n.tZ)("td",null,t[63].value,(0,n.tZ)("code",null,t[64].value),t[65].value,(0,n.tZ)("code",null,t[66].value),t[67].value,(0,n.tZ)("code",null,t[68].value),t[69].value),(0,n.tZ)("td",null,t[70].value),(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,t[73].value,(0,n.tZ)("a",{href:"https://codesandbox.io/s/4j168r7jw0"},t[74].value)),(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[77].value),(0,n.tZ)("td",null,t[78].value),(0,n.tZ)("td",null,t[79].value),(0,n.tZ)("td",null,t[80].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null,t[82].value),(0,n.tZ)("td",null,t[83].value),(0,n.tZ)("td",null,t[84].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[85].value),(0,n.tZ)("td",null,t[86].value),(0,n.tZ)("td",null,t[87].value),(0,n.tZ)("td",null,t[88].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[89].value),(0,n.tZ)("td",null,t[90].value),(0,n.tZ)("td",null,t[91].value),(0,n.tZ)("td",null,t[92].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[93].value),(0,n.tZ)("td",null,t[94].value),(0,n.tZ)("td",null,t[95].value),(0,n.tZ)("td",null,t[96].value),(0,n.tZ)("td",null,t[97].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[98].value),(0,n.tZ)("td",null,t[99].value),(0,n.tZ)("td",null,t[100].value),(0,n.tZ)("td",null,t[101].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[102].value),(0,n.tZ)("td",null,t[103].value),(0,n.tZ)("td",null,t[104].value),(0,n.tZ)("td",null,t[105].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[106].value),(0,n.tZ)("td",null,t[107].value),(0,n.tZ)("td",null,t[108].value),(0,n.tZ)("td",null,t[109].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[110].value),(0,n.tZ)("td",null,t[111].value),(0,n.tZ)("td",null,t[112].value),(0,n.tZ)("td",null,t[113].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[114].value),(0,n.tZ)("td",null,t[115].value),(0,n.tZ)("td",null,t[116].value),(0,n.tZ)("td",null,t[117].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[118].value),(0,n.tZ)("td",null,t[119].value),(0,n.tZ)("td",null,t[120].value),(0,n.tZ)("td",null,t[121].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[122].value),(0,n.tZ)("td",null,t[123].value),(0,n.tZ)("td",null,t[124].value),(0,n.tZ)("td",null,t[125].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[126].value),(0,n.tZ)("td",null,t[127].value),(0,n.tZ)("td",null,t[128].value),(0,n.tZ)("td",null,t[129].value),(0,n.tZ)("td",null,t[130].value)))),(0,n.tZ)("h2",{id:"\u65B9\u6CD5"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B9\u6CD5"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u65B9\u6CD5"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[131].value),(0,n.tZ)("th",null,t[132].value),(0,n.tZ)("th",null,t[133].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[134].value),(0,n.tZ)("td",null,t[135].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[136].value),(0,n.tZ)("td",null,t[137].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h2",{id:"faq"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,n.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,n.tZ)("h3",{id:"\u4E3A\u4F55\u53D7\u63A7\u72B6\u6001\u4E0B\u4F7F\u7528-onsearch-\u65E0\u6CD5\u8F93\u5165\u4E2D\u6587"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4F55\u53D7\u63A7\u72B6\u6001\u4E0B\u4F7F\u7528-onsearch-\u65E0\u6CD5\u8F93\u5165\u4E2D\u6587"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4E3A\u4F55\u53D7\u63A7\u72B6\u6001\u4E0B\u4F7F\u7528 onSearch \u65E0\u6CD5\u8F93\u5165\u4E2D\u6587\uFF1F"),(0,n.tZ)("p",null,t[138].value,(0,n.tZ)("code",null,t[139].value),t[140].value,(0,n.tZ)("code",null,t[141].value),t[142].value,(0,n.tZ)("code",null,t[143].value),t[144].value,(0,n.tZ)("code",null,t[145].value),t[146].value),(0,n.tZ)("p",null,t[147].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/18230"},t[148].value),t[149].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/17916"},t[150].value)))))}l.default=d}}]);
