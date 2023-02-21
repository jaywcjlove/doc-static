"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8059],{38966:function(r,i,e){e.r(i);var m=e(2143),c=e(50250),p=e(59378),v=e(8910),_=e(74775),a=e(5937),Z=e(2068),g=e(74399),h=e(63942),f=e(16073),L=e(24628),D=e(19260),x=e(56140),o=e(5388),I=e(49545),A=e(6965),E=e(49706),T=e(95127),P=e(74418),M=e(73024),l=e(94065),d=e(67294),t=e(96923);function s(){var u=(0,l.eL)(),n=u.texts;return(0,t.tZ)(l.dY,null,(0,t.tZ)(d.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("p",null,n[1].value),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(o.Z,{items:[{demo:{id:"components-list-demo-simple"},previewerProps:{title:"Simple list",filename:"components/list/demo/simple.tsx",jsx:`import { Divider, List, Typography } from 'antd';
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const App = () => (
  <>
    <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <Divider orientation="left">Small Size</Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    <Divider orientation="left">Large Size</Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </>
);
export default App;
`,description:`<p>Ant Design supports a default list size as well as a large and small size.</p>
<p>If a large or small list is desired, set the size property to either large or small respectively. Omit the size property for a list with the default size.</p>
<p>Customizing the header and footer of list by setting <code>header</code> and <code>footer</code> property.</p>`}},{demo:{id:"components-list-demo-basic"},previewerProps:{title:"Basic list",filename:"components/list/demo/basic.tsx",jsx:`import { Avatar, List } from 'antd';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const App = () => (
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
      </List.Item>
    )}
  />
);
export default App;
`,description:"<p>Basic list.</p>"}},{demo:{id:"components-list-demo-loadmore"},previewerProps:{title:"Load more",filename:"components/list/demo/loadmore.tsx",jsx:`import { Avatar, Button, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;
const App = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        })),
      ),
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name?.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default App;
`,description:"<p>Load more list with <code>loadMore</code> property.</p>",style:`.demo-loadmore-list {
  min-height: 350px;
}`}},{demo:{id:"components-list-demo-vertical"},previewerProps:{title:"Vertical",filename:"components/list/demo/vertical.tsx",jsx:`import { Avatar, List, Space } from 'antd';
import React from 'react';
const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: \`ant design part \${i}\`,
  avatar: 'https://joesch.moe/api/v1/random',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const App = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
export default App;
`,description:"<p>Set the <code>itemLayout</code> property to <code>vertical</code> to create a vertical list.</p>"}},{demo:{id:"components-list-demo-pagination"},previewerProps:{title:"Pagination Settings",filename:"components/list/demo/pagination.tsx",jsx:`import { Avatar, List, Radio, Space } from 'antd';
import { useState } from 'react';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const positionOptions = ['top', 'bottom', 'both'];
const alignOptions = ['start', 'center', 'end'];
const App = () => {
  const [position, setPosition] = useState('bottom');
  const [align, setAlign] = useState('center');
  return (
    <>
      <Space
        direction="vertical"
        style={{
          marginBottom: '20px',
        }}
        size="middle"
      >
        <Space>
          <span>Pagination Position:</span>
          <Radio.Group
            optionType="button"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          >
            {positionOptions.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Space>
        <Space>
          <span>Pagination Align:</span>
          <Radio.Group
            optionType="button"
            value={align}
            onChange={(e) => {
              setAlign(e.target.value);
            }}
          >
            {alignOptions.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Space>
      </Space>
      <List
        pagination={{
          position,
          align,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </>
  );
};
export default App;
`,description:"<p>List pagination can be used and set through the <code>pagination</code> property.</p>"}},{demo:{id:"components-list-demo-grid"},previewerProps:{title:"Grid",filename:"components/list/demo/grid.tsx",jsx:`import { Card, List } from 'antd';
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
const App = () => (
  <List
    grid={{
      gutter: 16,
      column: 4,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
);
export default App;
`,description:"<p>Create a grid layout by setting the <code>grid</code> property of List.</p>"}},{demo:{id:"components-list-demo-grid-test"},previewerProps:{debug:!0,title:"Test Grid",filename:"components/list/demo/grid-test.tsx",jsx:`import { Card, List } from 'antd';
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
const ListItem = () => (
  <List.Item>
    <Card title="title">Card content</Card>
  </List.Item>
);
const App = () => (
  <>
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
    />
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={data}
      renderItem={() => <ListItem />}
    />
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={data}
      renderItem={() => (
        <>
          <ListItem />
          <div />
        </>
      )}
    />
  </>
);
export default App;
`,description:"<p>Test List <code>grid</code> for some edge cases.</p>"}},{demo:{id:"components-list-demo-responsive"},previewerProps:{title:"Responsive grid list",filename:"components/list/demo/responsive.tsx",jsx:`import { Card, List } from 'antd';
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
const App = () => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
);
export default App;
`,description:'<p>Responsive grid list. The size property the is as same as <a href="/components/grid/#col">Layout Grid</a>.</p>'}},{demo:{id:"components-list-demo-infinite-load"},previewerProps:{title:"Scrolling loaded",filename:"components/list/demo/infinite-load.tsx",jsx:`import { Avatar, Divider, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more \u{1F910}</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default App;
`,description:'<p>The example of infinite load with <a href="https://github.com/ankeetmaini/react-infinite-scroll-component">react-infinite-scroll-component</a>.</p>'}},{demo:{id:"components-list-demo-virtual-list"},previewerProps:{title:"virtual list",filename:"components/list/demo/virtual-list.tsx",jsx:`import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import { useEffect, useState } from 'react';
const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;
const App = () => {
  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(\`\${body.results.length} more items loaded!\`);
      });
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };
  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
export default App;
`,description:'<p>An example of infinite &#x26; virtualized list via using <a href="https://github.com/react-component/virtual-list">rc-virtual-list</a>.</p>'}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"list"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#list"},(0,t.tZ)("span",{className:"icon icon-link"})),"List"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[2].value),(0,t.tZ)("th",null,n[3].value),(0,t.tZ)("th",null,n[4].value),(0,t.tZ)("th",null,n[5].value),(0,t.tZ)("th",null,n[6].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[7].value),(0,t.tZ)("td",null,n[8].value),(0,t.tZ)("td",null,n[9].value),(0,t.tZ)("td",null,n[10].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[11].value),(0,t.tZ)("td",null,n[12].value),(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null,n[14].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[15].value),(0,t.tZ)("td",null,n[16].value),(0,t.tZ)("td",null,n[17].value),(0,t.tZ)("td",null,n[18].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[19].value),(0,t.tZ)("td",null,n[20].value),(0,t.tZ)("td",null,(0,t.tZ)(l.rU,{to:"#list-grid-props"},n[21].value)),(0,t.tZ)("td",null,n[22].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[23].value),(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null,n[25].value),(0,t.tZ)("td",null,n[26].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[27].value),(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[29].value),n[30].value,(0,t.tZ)("code",null,n[31].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[32].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[33].value),(0,t.tZ)("td",null,n[34].value),(0,t.tZ)("td",null,n[35].value,(0,t.tZ)(l.rU,{to:"/components/spin/#api"},n[36].value),n[37].value,(0,t.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/8659"},n[38].value),n[39].value),(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,n[42].value),(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null,n[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null,n[46].value),(0,t.tZ)("td",null,n[47].value),(0,t.tZ)("td",null,n[48].value,(0,t.tZ)("code",null,n[49].value),n[50].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[51].value),(0,t.tZ)("td",null,n[52].value,(0,t.tZ)(l.rU,{to:"/components/pagination/"},n[53].value),n[54].value),(0,t.tZ)("td",null,n[55].value),(0,t.tZ)("td",null,n[56].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[57].value),(0,t.tZ)("td",null,n[58].value,(0,t.tZ)("code",null,n[59].value)),(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null,n[61].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[62].value),(0,t.tZ)("td",null,n[63].value,(0,t.tZ)("code",null,n[64].value),n[65].value,(0,t.tZ)("code",null,n[66].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[67].value),n[68].value,(0,t.tZ)("code",null,n[69].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[70].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[71].value),(0,t.tZ)("td",null,n[72].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[73].value),n[74].value,(0,t.tZ)("code",null,n[75].value),n[76].value,(0,t.tZ)("code",null,n[77].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[78].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[79].value),(0,t.tZ)("td",null,n[80].value),(0,t.tZ)("td",null,n[81].value),(0,t.tZ)("td",null,n[82].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"pagination"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#pagination"},(0,t.tZ)("span",{className:"icon icon-link"})),"pagination"),(0,t.tZ)("p",null,n[83].value),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[84].value),(0,t.tZ)("th",null,n[85].value),(0,t.tZ)("th",null,n[86].value),(0,t.tZ)("th",null,n[87].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[88].value),(0,t.tZ)("td",null,n[89].value,(0,t.tZ)("code",null,n[90].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[91].value),n[92].value,(0,t.tZ)("code",null,n[93].value),n[94].value,(0,t.tZ)("code",null,n[95].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[96].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[97].value),(0,t.tZ)("td",null,n[98].value,(0,t.tZ)("code",null,n[99].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[100].value),n[101].value,(0,t.tZ)("code",null,n[102].value),n[103].value,(0,t.tZ)("code",null,n[104].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[105].value))))),(0,t.tZ)("p",null,n[106].value,(0,t.tZ)(l.rU,{to:"/components/pagination/"},(0,t.tZ)("code",null,n[107].value)),n[108].value),(0,t.tZ)("h3",{id:"list-grid-props"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#list-grid-props"},(0,t.tZ)("span",{className:"icon icon-link"})),"List grid props"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[109].value),(0,t.tZ)("th",null,n[110].value),(0,t.tZ)("th",null,n[111].value),(0,t.tZ)("th",null,n[112].value),(0,t.tZ)("th",null,n[113].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[114].value),(0,t.tZ)("td",null,n[115].value),(0,t.tZ)("td",null,n[116].value),(0,t.tZ)("td",null,n[117].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[118].value),(0,t.tZ)("td",null,n[119].value),(0,t.tZ)("td",null,n[120].value),(0,t.tZ)("td",null,n[121].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[122].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[123].value),n[124].value),(0,t.tZ)("td",null,n[125].value),(0,t.tZ)("td",null,n[126].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[127].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[128].value),n[129].value),(0,t.tZ)("td",null,n[130].value),(0,t.tZ)("td",null,n[131].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[132].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[133].value),n[134].value),(0,t.tZ)("td",null,n[135].value),(0,t.tZ)("td",null,n[136].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[137].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[138].value),n[139].value),(0,t.tZ)("td",null,n[140].value),(0,t.tZ)("td",null,n[141].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[142].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[143].value),n[144].value),(0,t.tZ)("td",null,n[145].value),(0,t.tZ)("td",null,n[146].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[147].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[148].value),n[149].value),(0,t.tZ)("td",null,n[150].value),(0,t.tZ)("td",null,n[151].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"listitem"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#listitem"},(0,t.tZ)("span",{className:"icon icon-link"})),"List.Item"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[152].value),(0,t.tZ)("th",null,n[153].value),(0,t.tZ)("th",null,n[154].value),(0,t.tZ)("th",null,n[155].value),(0,t.tZ)("th",null,n[156].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[157].value),(0,t.tZ)("td",null,n[158].value,(0,t.tZ)("code",null,n[159].value),n[160].value,(0,t.tZ)("code",null,n[161].value),n[162].value),(0,t.tZ)("td",null,n[163].value),(0,t.tZ)("td",null,n[164].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[165].value),(0,t.tZ)("td",null,n[166].value,(0,t.tZ)("code",null,n[167].value),n[168].value,(0,t.tZ)("code",null,n[169].value),n[170].value),(0,t.tZ)("td",null,n[171].value),(0,t.tZ)("td",null,n[172].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"listitemmeta"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#listitemmeta"},(0,t.tZ)("span",{className:"icon icon-link"})),"List.Item.Meta"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[173].value),(0,t.tZ)("th",null,n[174].value),(0,t.tZ)("th",null,n[175].value),(0,t.tZ)("th",null,n[176].value),(0,t.tZ)("th",null,n[177].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[178].value),(0,t.tZ)("td",null,n[179].value),(0,t.tZ)("td",null,n[180].value),(0,t.tZ)("td",null,n[181].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[182].value),(0,t.tZ)("td",null,n[183].value),(0,t.tZ)("td",null,n[184].value),(0,t.tZ)("td",null,n[185].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[186].value),(0,t.tZ)("td",null,n[187].value),(0,t.tZ)("td",null,n[188].value),(0,t.tZ)("td",null,n[189].value),(0,t.tZ)("td",null)))))))}i.default=s}}]);
