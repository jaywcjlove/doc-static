"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7519],{34875:function(u,o,t){t.r(o);var m=t(2143),c=t(50250),p=t(59378),v=t(8910),g=t(74775),a=t(5937),d=t(2068),h=t(74399),Z=t(63942),f=t(16073),C=t(24628),E=t(19260),P=t(56140),i=t(5388),x=t(49545),R=t(6965),D=t(49706),M=t(95127),O=t(74418),A=t(73024),l=t(94065),s=t(67294),e=t(96923);function _(){var r=(0,l.eL)(),n=r.texts;return(0,e.tZ)(l.dY,null,(0,e.tZ)(s.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value,(0,e.tZ)("code",null,n[1].value),n[2].value)),(0,e.tZ)(d.Z,{message:"If the QR code cannot be scanned for identification, it may be because the link address is too long, which leads to too dense pixels. You can configure the QR code to be larger through `size`, or shorten the link through short link services."}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,n[3].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(i.Z,{items:[{demo:{id:"components-qrcode-demo-base"},previewerProps:{title:"base",filename:"components/qrcode/demo/base.tsx",jsx:`import { QRCode } from 'antd';
const App = () => <QRCode value="https://ant.design/" />;
export default App;
`,description:"<p>Basic Usage.</p>"}},{demo:{id:"components-qrcode-demo-icon"},previewerProps:{title:"With Icon",filename:"components/qrcode/demo/icon.tsx",jsx:`import { QRCode } from 'antd';
const App = () => (
  <QRCode
    errorLevel="H"
    value="https://ant.design/"
    icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
  />
);
export default App;
`,description:"<p>QRCode with Icon.</p>"}},{demo:{id:"components-qrcode-demo-status"},previewerProps:{title:"other status",filename:"components/qrcode/demo/status.tsx",jsx:`import { QRCode, Space } from 'antd';
const App = () => (
  <Space wrap>
    <QRCode value="https://ant.design/" status="loading" />
    <QRCode value="https://ant.design/" status="expired" onRefresh={() => console.log('refresh')} />
  </Space>
);
export default App;
`,description:"<p>The status can be controlled by the value <code>status</code>.</p>"}},{demo:{id:"components-qrcode-demo-customsize"},previewerProps:{title:"Custom Size",filename:"components/qrcode/demo/customSize.tsx",jsx:`import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, QRCode } from 'antd';
import { useState } from 'react';
const App = () => {
  const [size, setSize] = useState(160);
  const increase = () => {
    setSize((prevSize) => {
      const newSize = prevSize + 10;
      if (newSize > 300) {
        return 300;
      }
      return newSize;
    });
  };
  const decline = () => {
    setSize((prevSize) => {
      const newSize = prevSize - 10;
      if (newSize < 48) {
        return 48;
      }
      return newSize;
    });
  };
  return (
    <>
      <Button.Group
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={decline} disabled={size <= 48} icon={<MinusOutlined />}>
          Smaller
        </Button>
        <Button onClick={increase} disabled={size >= 300} icon={<PlusOutlined />}>
          Larger
        </Button>
      </Button.Group>
      <QRCode
        errorLevel="H"
        size={size}
        iconSize={size / 4}
        value="https://ant.design/"
        icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
    </>
  );
};
export default App;
`,description:"<p>Custom Size.</p>"}},{demo:{id:"components-qrcode-demo-customcolor"},previewerProps:{title:"Custom Color",filename:"components/qrcode/demo/customColor.tsx",jsx:`import { QRCode, Space, theme } from 'antd';
const { useToken } = theme;
const App = () => {
  const { token } = useToken();
  return (
    <Space>
      <QRCode
        value="https://ant.design/"
        color={token.colorSuccessText}
        style={{
          marginBottom: 16,
          backgroundColor: token.colorBgLayout,
        }}
      />
      <QRCode
        value="https://ant.design/"
        color={token.colorInfoText}
        style={{
          marginBottom: 16,
          backgroundColor: token.colorBgLayout,
        }}
      />
    </Space>
  );
};
export default App;
`,description:"<p>Custom Color.</p>"}},{demo:{id:"components-qrcode-demo-download"},previewerProps:{title:"Download QRCode",filename:"components/qrcode/demo/download.tsx",jsx:`import { Button, QRCode } from 'antd';
const downloadQRCode = () => {
  const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.download = 'QRCode.png';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
const App = () => (
  <div id="myqrcode">
    <QRCode
      value="https://ant.design/"
      style={{
        marginBottom: 16,
      }}
    />
    <Button type="primary" onClick={downloadQRCode}>
      Download
    </Button>
  </div>
);
export default App;
`,description:"<p>A way to download QRCode.</p>"}},{demo:{id:"components-qrcode-demo-errorlevel"},previewerProps:{title:"Error Level",filename:"components/qrcode/demo/errorlevel.tsx",jsx:`import { QRCode, Segmented } from 'antd';
import { useState } from 'react';
const App = () => {
  const [level, setLevel] = useState('L');
  return (
    <>
      <QRCode
        style={{
          marginBottom: 16,
        }}
        errorLevel={level}
        value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Segmented options={['L', 'M', 'Q', 'H']} value={level} onChange={setLevel} />
    </>
  );
};
export default App;
`,description:"<p>set Error Level.</p>"}},{demo:{id:"components-qrcode-demo-popover"},previewerProps:{title:"Advanced Usage",filename:"components/qrcode/demo/Popover.tsx",jsx:`import { Popover, QRCode } from 'antd';
const src = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
const App = () => (
  <Popover
    overlayInnerStyle={{
      padding: 0,
    }}
    content={<QRCode value={src} bordered={false} />}
  >
    <img width={100} height={100} src={src} alt="icon" />
  </Popover>
);
export default App;
`,description:"<p>With Popover.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n[4].value,(0,e.tZ)("code",null,n[5].value))),(0,e.tZ)(a.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",{align:"left"},n[6].value),(0,e.tZ)("th",{align:"left"},n[7].value),(0,e.tZ)("th",{align:"left"},n[8].value),(0,e.tZ)("th",{align:"left"},n[9].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},n[10].value),(0,e.tZ)("td",{align:"left"},n[11].value),(0,e.tZ)("td",{align:"left"},n[12].value),(0,e.tZ)("td",{align:"left"},n[13].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},n[14].value),(0,e.tZ)("td",{align:"left"},n[15].value),(0,e.tZ)("td",{align:"left"},n[16].value),(0,e.tZ)("td",{align:"left"},n[17].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},n[18].value),(0,e.tZ)("td",{align:"left"},n[19].value),(0,e.tZ)("td",{align:"left"},n[20].value),(0,e.tZ)("td",{align:"left"},n[21].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},n[22].value),(0,e.tZ)("td",{align:"left"},n[23].value),(0,e.tZ)("td",{align:"left"},n[24].value),(0,e.tZ)("td",{align:"left"},n[25].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},n[26].value),(0,e.tZ)("td",{align:"left"},n[27].value),(0,e.tZ)("td",{align:"left"},n[28].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,n[29].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},n[30].value),(0,e.tZ)("td",{align:"left"},n[31].value),(0,e.tZ)("td",{align:"left"},n[32].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,n[33].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},n[34].value),(0,e.tZ)("td",{align:"left"},n[35].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,n[36].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,n[37].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},n[38].value),(0,e.tZ)("td",{align:"left"},n[39].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,n[40].value)),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,n[41].value))),(0,e.tZ)("tr",null,(0,e.tZ)("td",{align:"left"},n[42].value),(0,e.tZ)("td",{align:"left"},n[43].value),(0,e.tZ)("td",{align:"left"},(0,e.tZ)("code",null,n[44].value)),(0,e.tZ)("td",{align:"left"},n[45].value)))),(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("h3",{id:"about-qrcode-errorlevel"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#about-qrcode-errorlevel"},(0,e.tZ)("span",{className:"icon icon-link"})),"About QRCode ErrorLevel"),(0,e.tZ)("p",null,n[46].value),(0,e.tZ)("p",null,n[47].value,(0,e.tZ)("code",null,n[48].value),n[49].value,(0,e.tZ)("code",null,n[50].value),n[51].value,(0,e.tZ)("code",null,n[52].value),n[53].value,(0,e.tZ)("code",null,n[54].value),n[55].value,(0,e.tZ)("code",null,n[56].value),n[57].value,(0,e.tZ)("code",null,n[58].value),n[59].value,(0,e.tZ)("code",null,n[60].value),n[61].value,(0,e.tZ)("code",null,n[62].value),n[63].value),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n[64].value,(0,e.tZ)("a",{href:"https://www.qrcode.com/en/about/error_correction.html"},n[65].value))))))}o.default=_}}]);
