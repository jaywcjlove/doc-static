"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9664],{16984:function(_,a,e){e.r(a);var s=e(2143),m=e(50250),c=e(59378),h=e(8910),v=e(74775),o=e(5937),Z=e(2068),p=e(74399),g=e(63942),f=e(16073),A=e(24628),P=e(19260),E=e(56140),r=e(5388),I=e(49545),x=e(6965),b=e(49706),k=e(95127),y=e(74418),D=e(73024),l=e(94065),u=e(67294),n=e(96923);function i(){var d=(0,l.eL)(),t=d.texts;return(0,n.tZ)(l.dY,null,(0,n.tZ)(u.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,t[1].value),(0,n.tZ)("li",null,t[2].value)),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(r.Z,{items:[{demo:{id:"components-watermark-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/watermark/demo/basic.tsx",jsx:`import { Watermark } from 'antd';
const App = () => (
  <Watermark content="Ant Design">
    <div
      style={{
        height: 500,
      }}
    />
  </Watermark>
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-watermark-demo-multi-line"},previewerProps:{title:"\u591A\u884C\u6C34\u5370",filename:"components/watermark/demo/multi-line.tsx",jsx:`import { Watermark } from 'antd';
const App = () => (
  <Watermark content={['Ant Design', 'Happy Working']}>
    <div
      style={{
        height: 500,
      }}
    />
  </Watermark>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>content</code> \u8BBE\u7F6E \u5B57\u7B26\u4E32\u6570\u7EC4 \u6307\u5B9A\u591A\u884C\u6587\u5B57\u6C34\u5370\u5185\u5BB9\u3002</p>"}},{demo:{id:"components-watermark-demo-image"},previewerProps:{title:"\u56FE\u7247\u6C34\u5370",filename:"components/watermark/demo/image.tsx",jsx:`import { Watermark } from 'antd';
const App = () => (
  <Watermark
    height={30}
    width={130}
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
  >
    <div
      style={{
        height: 500,
      }}
    />
  </Watermark>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>image</code> \u6307\u5B9A\u56FE\u7247\u5730\u5740\u3002\u4E3A\u4FDD\u8BC1\u56FE\u7247\u9AD8\u6E05\u4E14\u4E0D\u88AB\u62C9\u4F38\uFF0C\u8BF7\u8BBE\u7F6E width \u548C height, \u5E76\u4E0A\u4F20\u81F3\u5C11\u4E24\u500D\u7684\u5BBD\u9AD8\u7684 logo \u56FE\u7247\u5730\u5740\u3002</p>"}},{demo:{id:"components-watermark-demo-custom"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u914D\u7F6E",filename:"components/watermark/demo/custom.tsx",jsx:`import { Form, Input, InputNumber, Popover, Slider, Space, Typography, Watermark } from 'antd';
import { useMemo, useState } from 'react';
import { SketchPicker } from 'react-color';
const { Paragraph } = Typography;
const ColorPicker = ({ value, onChange }) => {
  const switchStyle = {
    padding: 4,
    background: '#fff',
    borderRadius: 2,
    border: '1px solid #dedede',
    display: 'inline-block',
    cursor: 'pointer',
  };
  const colorStyle = {
    width: 36,
    height: 14,
    borderRadius: 2,
    background: \`rgba(\${value?.r}, \${value?.g}, \${value?.b}, \${value?.a})\`,
  };
  return (
    <Popover
      trigger="click"
      placement="bottomLeft"
      overlayInnerStyle={{
        padding: 0,
      }}
      content={<SketchPicker color={value} onChange={(color) => onChange?.(color.rgb)} />}
    >
      <div style={switchStyle}>
        <div style={colorStyle} />
      </div>
    </Popover>
  );
};
const App = () => {
  const [form] = Form.useForm();
  const [config, setConfig] = useState({
    content: 'Ant Design',
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 0.15,
    },
    fontSize: 16,
    zIndex: 11,
    rotate: -22,
    gap: [100, 100],
    offset: undefined,
  });
  const { content, color, fontSize, zIndex, rotate, gap, offset } = config;
  const watermarkProps = useMemo(
    () => ({
      content,
      font: {
        color: \`rgba(\${color.r},\${color.g},\${color.b},\${color.a})\`,
        fontSize,
      },
      zIndex,
      rotate,
      gap,
      offset,
    }),
    [config],
  );
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Watermark {...watermarkProps}>
        <Typography>
          <Paragraph>
            The light-speed iteration of the digital world makes products more complex. However,
            human consciousness and attention resources are limited. Facing this design
            contradiction, the pursuit of natural interaction will be the consistent direction of
            Ant Design.
          </Paragraph>
          <Paragraph>
            Natural user cognition: According to cognitive psychology, about 80% of external
            information is obtained through visual channels. The most important visual elements in
            the interface design, including layout, colors, illustrations, icons, etc., should fully
            absorb the laws of nature, thereby reducing the user&apos;s cognitive cost and bringing
            authentic and smooth feelings. In some scenarios, opportunely adding other sensory
            channels such as hearing, touch can create a richer and more natural product experience.
          </Paragraph>
          <Paragraph>
            Natural user behavior: In the interaction with the system, the designer should fully
            understand the relationship between users, system roles, and task objectives, and also
            contextually organize system functions and services. At the same time, a series of
            methods such as behavior analysis, artificial intelligence and sensors could be applied
            to assist users to make effective decisions and reduce extra operations of users, to
            save users&apos; mental and physical resources and make human-computer interaction more
            natural.
          </Paragraph>
        </Typography>
        <img
          style={{
            zIndex: 10,
            width: '100%',
            maxWidth: 800,
            position: 'relative',
          }}
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ"
          alt="\u793A\u4F8B\u56FE\u7247"
        />
      </Watermark>
      <Form
        style={{
          width: 280,
          flexShrink: 0,
          borderLeft: '1px solid #eee',
          paddingLeft: 20,
          marginLeft: 20,
        }}
        form={form}
        layout="vertical"
        initialValues={config}
        onValuesChange={(_, values) => {
          setConfig(values);
        }}
      >
        <Form.Item name="content" label="Content">
          <Input placeholder="\u8BF7\u8F93\u5165" />
        </Form.Item>
        <Form.Item name="color" label="Color">
          <ColorPicker />
        </Form.Item>
        <Form.Item name="fontSize" label="FontSize">
          <Slider step={1} min={0} max={100} />
        </Form.Item>
        <Form.Item name="zIndex" label="zIndex">
          <Slider step={1} min={0} max={100} />
        </Form.Item>
        <Form.Item name="rotate" label="Rotate">
          <Slider step={1} min={-180} max={180} />
        </Form.Item>
        <Form.Item
          label="Gap"
          style={{
            marginBottom: 0,
          }}
        >
          <Space
            style={{
              display: 'flex',
            }}
            align="baseline"
          >
            <Form.Item name={['gap', 0]}>
              <InputNumber
                placeholder="gapX"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            <Form.Item name={['gap', 1]}>
              <InputNumber
                placeholder="gapY"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item
          label="Offset"
          style={{
            marginBottom: 0,
          }}
        >
          <Space
            style={{
              display: 'flex',
            }}
            align="baseline"
          >
            <Form.Item name={['offset', 0]}>
              <InputNumber
                placeholder="offsetLeft"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            <Form.Item name={['offset', 1]}>
              <InputNumber
                placeholder="offsetTop"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7\u81EA\u5B9A\u4E49\u53C2\u6570\u914D\u7F6E\u9884\u89C8\u6C34\u5370\u6548\u679C\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"watermark"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#watermark"},(0,n.tZ)("span",{className:"icon icon-link"})),"Watermark"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[3].value),(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[8].value),(0,n.tZ)("td",null,t[9].value,(0,n.tZ)("code",null,t[10].value),t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value,(0,n.tZ)("code",null,t[16].value),t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null,t[21].value,(0,n.tZ)("code",null,t[22].value)),(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[33].value),(0,n.tZ)("td",null,t[34].value),(0,n.tZ)("td",null,t[35].value),(0,n.tZ)("td",null,t[36].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[37].value),(0,n.tZ)("td",null,t[38].value),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"#font"},t[39].value)),(0,n.tZ)("td",null,(0,n.tZ)(l.rU,{to:"#font"},t[40].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null,t[46].value,(0,n.tZ)("code",null,t[47].value)),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"font"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#font"},(0,n.tZ)("span",{className:"icon icon-link"})),"Font"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[50].value),(0,n.tZ)("th",null,t[51].value),(0,n.tZ)("th",null,t[52].value),(0,n.tZ)("th",null,t[53].value),(0,n.tZ)("th",null,t[54].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[55].value),(0,n.tZ)("td",null,t[56].value),(0,n.tZ)("td",null,t[57].value),(0,n.tZ)("td",null,t[58].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null,t[61].value),(0,n.tZ)("td",null,t[62].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[63].value),(0,n.tZ)("td",null,t[64].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[65].value),t[66].value,(0,n.tZ)("code",null,t[67].value),t[68].value,(0,n.tZ)("code",null,t[69].value),t[70].value),(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,t[73].value),(0,n.tZ)("td",null,t[74].value),(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null,t[77].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[78].value),t[79].value,(0,n.tZ)("code",null,t[80].value),t[81].value,(0,n.tZ)("code",null,t[82].value),t[83].value,(0,n.tZ)("code",null,t[84].value)),(0,n.tZ)("td",null,t[85].value),(0,n.tZ)("td",null)))))))}a.default=i}}]);
