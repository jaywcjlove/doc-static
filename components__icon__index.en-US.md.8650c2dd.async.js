"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7578],{18323:function(r,u,l){l.r(u);var Z=l(2143),v=l(50250),m=l(59378),p=l(8910),e=l(74775),o=l(5937),h=l(2068),f=l(74399),g=l(63942),E=l(16073),x=l(24628),I=l(19260),P=l(56140),i=l(5388),d=l(49545),M=l(6965),C=l(49706),O=l(95127),D=l(74418),T=l(73024),a=l(94065),_=l(67294),n=l(96923);function c(){var s=(0,a.eL)(),t=s.texts;return(0,n.tZ)(a.dY,null,(0,n.tZ)(_.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value,(0,n.tZ)("code",null,t[1].value),t[2].value),(0,n.tZ)(e.Z,{lang:"bash"},t[3].value),(0,n.tZ)("h2",{id:"list-of-icons"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#list-of-icons"},(0,n.tZ)("span",{className:"icon icon-link"})),"List of icons")),(0,n.tZ)(d.Z,null),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(i.Z,{items:[{demo:{id:"components-icon-demo-basic"},previewerProps:{title:"Basic",filename:"components/icon/demo/basic.tsx",jsx:`import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
const App = () => (
  <Space>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
  </Space>
);
export default App;
`,description:"<p>Import icons from <code>@ant-design/icons</code>, component name of icons with different theme is the icon name suffixed by the theme name. Specify the <code>spin</code> property to show spinning animation.</p>"}},{demo:{id:"components-icon-demo-two-tone"},previewerProps:{title:"Two-tone icon and colorful icon",filename:"components/icon/demo/two-tone.tsx",jsx:`import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Space } from 'antd';
const App = () => (
  <Space>
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </Space>
);
export default App;
`,description:"<p>You can set <code>twoToneColor</code> prop to specific primary color for two-tone icons.</p>"}},{demo:{id:"components-icon-demo-custom"},previewerProps:{title:"Custom Icon",filename:"components/icon/demo/custom.tsx",jsx:`import Icon, { HomeOutlined } from '@ant-design/icons';
import { Space } from 'antd';
const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);
const PandaSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
    />
  </svg>
);
const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;
const PandaIcon = (props) => <Icon component={PandaSvg} {...props} />;
const App = () => (
  <Space>
    <HeartIcon
      style={{
        color: 'hotpink',
      }}
    />
    <PandaIcon
      style={{
        fontSize: '32px',
      }}
    />
    <Icon component={HomeOutlined} />
    <HomeOutlined />
  </Space>
);
export default App;
`,description:"<p>Create a reusable React component by using <code>&#x3C;Icon component={...} /></code>. The property <code>component</code> takes a React component that renders to <code>svg</code> element.</p>"}},{demo:{id:"components-icon-demo-iconfont"},previewerProps:{title:"Use iconfont.cn",filename:"components/icon/demo/iconfont.tsx",jsx:`import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const App = () => (
  <Space>
    <IconFont type="icon-tuichu" />
    <IconFont type="icon-facebook" />
    <IconFont type="icon-twitter" />
  </Space>
);
export default App;
`,description:'<p>If you are using <a href="http://iconfont.cn/">iconfont.cn</a>, you can use the icons in your project gracefully.</p>'}},{demo:{id:"components-icon-demo-scripturl"},previewerProps:{title:"Multiple resources from iconfont.cn",filename:"components/icon/demo/scriptUrl.tsx",jsx:`import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';
const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js',
    // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

const App = () => (
  <Space>
    <IconFont type="icon-javascript" />
    <IconFont type="icon-java" />
    <IconFont type="icon-shoppingcart" />
    <IconFont type="icon-python" />
  </Space>
);
export default App;
`,description:'<p>You can use <code>scriptUrl</code> as an array after <code>@ant-design/icons@4.1.0</code>, manage icons in one <code>&#x3C;Icon /></code> from multiple <a href="http://iconfont.cn/">iconfont.cn</a> resources. If icon with a duplicate name in resources, it will overrided in array order.</p>'}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"common-icon"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#common-icon"},(0,n.tZ)("span",{className:"icon icon-link"})),"Common Icon"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value,(0,n.tZ)("code",null,t[23].value),t[24].value,(0,n.tZ)("code",null,t[25].value)),(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null)))),(0,n.tZ)("p",null,t[32].value),(0,n.tZ)(e.Z,{lang:"jsx"},t[33].value),(0,n.tZ)("h3",{id:"custom-icon"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#custom-icon"},(0,n.tZ)("span",{className:"icon icon-link"})),"Custom Icon"),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[34].value),(0,n.tZ)("th",null,t[35].value),(0,n.tZ)("th",null,t[36].value),(0,n.tZ)("th",null,t[37].value),(0,n.tZ)("th",null,t[38].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[39].value),(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null,t[45].value),(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[47].value),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[51].value),(0,n.tZ)("td",null,t[52].value,(0,n.tZ)("code",null,t[53].value),t[54].value,(0,n.tZ)("code",null,t[55].value)),(0,n.tZ)("td",null,t[56].value),(0,n.tZ)("td",null,t[57].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"about-svg-icons"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#about-svg-icons"},(0,n.tZ)("span",{className:"icon icon-link"})),"About SVG icons"),(0,n.tZ)("p",null,t[58].value,(0,n.tZ)("code",null,t[59].value),t[60].value),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,t[61].value),(0,n.tZ)("li",null,t[62].value),(0,n.tZ)("li",null,t[63].value),(0,n.tZ)("li",null,t[64].value)),(0,n.tZ)("p",null,t[65].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/10353"},t[66].value),t[67].value),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,t[68].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/12011"},t[69].value),t[70].value),(0,n.tZ)("p",null,t[71].value,(0,n.tZ)("a",{href:"https://github.com/Beven91/webpack-ant-icon-loader"},t[72].value),t[73].value)),(0,n.tZ)("p",null,t[74].value,(0,n.tZ)("code",null,t[75].value),t[76].value,(0,n.tZ)("code",null,t[77].value),t[78].value,(0,n.tZ)("code",null,t[79].value),t[80].value,(0,n.tZ)("code",null,t[81].value),t[82].value,(0,n.tZ)("code",null,t[83].value),t[84].value,(0,n.tZ)("code",null,t[85].value),t[86].value),(0,n.tZ)(e.Z,{lang:"jsx"},t[87].value),(0,n.tZ)("p",null,t[88].value,(0,n.tZ)("code",null,t[89].value),t[90].value,(0,n.tZ)("code",null,t[91].value),t[92].value,(0,n.tZ)("code",null,t[93].value),t[94].value),(0,n.tZ)(e.Z,{lang:"jsx"},t[95].value),(0,n.tZ)("h3",{id:"set-twotone-color"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#set-twotone-color"},(0,n.tZ)("span",{className:"icon icon-link"})),"Set TwoTone Color"),(0,n.tZ)("p",null,t[96].value,(0,n.tZ)("code",null,t[97].value),t[98].value,(0,n.tZ)("code",null,t[99].value),t[100].value),(0,n.tZ)(e.Z,{lang:"jsx"},t[101].value),(0,n.tZ)("h3",{id:"custom-font-icon"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#custom-font-icon"},(0,n.tZ)("span",{className:"icon icon-link"})),"Custom Font Icon"),(0,n.tZ)("p",null,t[102].value,(0,n.tZ)("code",null,t[103].value),t[104].value,(0,n.tZ)("a",{href:"http://iconfont.cn/"},t[105].value),t[106].value),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,t[107].value,(0,n.tZ)("a",{href:"http://iconfont.cn/"},t[108].value),t[109].value)),(0,n.tZ)(e.Z,{lang:"jsx"},t[110].value),(0,n.tZ)("p",null,t[111].value),(0,n.tZ)("p",null,t[112].value),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[113].value),(0,n.tZ)("th",null,t[114].value),(0,n.tZ)("th",null,t[115].value),(0,n.tZ)("th",null,t[116].value),(0,n.tZ)("th",null,t[117].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[118].value),(0,n.tZ)("td",null,t[119].value),(0,n.tZ)("td",null,t[120].value),(0,n.tZ)("td",null,t[121].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[122].value),(0,n.tZ)("td",null,t[123].value,(0,n.tZ)("a",{href:"http://iconfont.cn/"},t[124].value),t[125].value,(0,n.tZ)("code",null,t[126].value),t[127].value,(0,n.tZ)("code",null,t[128].value)),(0,n.tZ)("td",null,t[129].value),(0,n.tZ)("td",null,t[130].value),(0,n.tZ)("td",null)))),(0,n.tZ)("p",null,t[131].value,(0,n.tZ)("code",null,t[132].value),t[133].value),(0,n.tZ)("p",null,t[134].value,(0,n.tZ)("a",{href:"http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code"},t[135].value),t[136].value,(0,n.tZ)("code",null,t[137].value),t[138].value),(0,n.tZ)("h3",{id:"custom-svg-icon"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#custom-svg-icon"},(0,n.tZ)("span",{className:"icon icon-link"})),"Custom SVG Icon"),(0,n.tZ)("p",null,t[139].value,(0,n.tZ)("code",null,t[140].value),t[141].value,(0,n.tZ)("a",{href:"https://www.npmjs.com/package/@svgr/webpack"},(0,n.tZ)("code",null,t[142].value)),t[143].value,(0,n.tZ)("code",null,t[144].value),t[145].value,(0,n.tZ)("code",null,t[146].value),t[147].value,(0,n.tZ)("a",{href:"https://github.com/smooth-code/svgr#options"},t[148].value),t[149].value),(0,n.tZ)(e.Z,{lang:"js"},t[150].value),(0,n.tZ)(e.Z,{lang:"jsx"},t[151].value),(0,n.tZ)("p",null,t[152].value),(0,n.tZ)(o.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[153].value),(0,n.tZ)("th",null,t[154].value),(0,n.tZ)("th",null,t[155].value),(0,n.tZ)("th",null,t[156].value),(0,n.tZ)("th",null,t[157].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[158].value),(0,n.tZ)("td",null,t[159].value,(0,n.tZ)("code",null,t[160].value),t[161].value),(0,n.tZ)("td",null,t[162].value),(0,n.tZ)("td",null,t[163].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[164].value),(0,n.tZ)("td",null,t[165].value,(0,n.tZ)("code",null,t[166].value),t[167].value),(0,n.tZ)("td",null,t[168].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[169].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[170].value),(0,n.tZ)("td",null,t[171].value,(0,n.tZ)("code",null,t[172].value),t[173].value),(0,n.tZ)("td",null,t[174].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[175].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[176].value),(0,n.tZ)("td",null,t[177].value,(0,n.tZ)("code",null,t[178].value),t[179].value),(0,n.tZ)("td",null,t[180].value),(0,n.tZ)("td",null,t[181].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[182].value),(0,n.tZ)("td",null,t[183].value,(0,n.tZ)("code",null,t[184].value),t[185].value),(0,n.tZ)("td",null,t[186].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[187].value)),(0,n.tZ)("td",null)))))))}u.default=c}}]);
