(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{3281:function(e,n){e.exports={content:["article",["p","\u4F60\u53EF\u4EE5\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\uFF08",["a",{title:null,href:"https://day.js.org"},"day.js"],"\u3001",["a",{title:null,href:"https://date-fns.org"},"date-fns"],"\uFF09\u66FF\u6362 Moment \u4EE5\u4F18\u5316\u6253\u5305\u5927\u5C0F\u3002\u5728\u8FD9\u91CC\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E24\u79CD\u65B9\u5F0F\u6765\u5B9E\u73B0\u66FF\u6362:"],["h2","\u81EA\u5B9A\u4E49\u7EC4\u4EF6"],["p","\u7B2C\u4E00\u79CD\u65B9\u6CD5\u662F\u4F7F\u7528 ",["code","generatePicker"],"\uFF08\u6216 ",["code","generateCalendar"],"\uFF09\u8F85\u52A9\u521B\u5EFA Picker \u7EC4\u4EF6\u3002"],["p","\u6211\u4EEC\u5148\u521D\u59CB\u5316\u4E00\u4E2A ",["code","create-react-app"]," \u7684 antd demo\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003 ",["a",{title:null,href:"/docs/react/use-in-typescript"},"\u5728 TypeScript \u4E2D\u4F7F\u7528"]," \u8FDB\u884C\u6784\u5EFA\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4ECE\u8FD9\u91CC\u5F00\u59CB",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/commit/47fec964e36d48bd15760f8f5abcb9655c259aa6"},"init antd"]],["h3","DatePicker.tsx"],["p","\u65B0\u5EFA ",["code","src/components/DatePicker.tsx"],"\u3002"],["p","\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"],["pre",{lang:"tsx",highlighted:`import { Dayjs } from <span class="token string">'dayjs'</span><span class="token comment" spellcheck="true">;</span>
import dayjsGenerateConfig from <span class="token string">'rc-picker/lib/generate/dayjs'</span><span class="token comment" spellcheck="true">;</span>
import generatePicker from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token string">'antd/es/date-picker/style/index'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">(</span>dayjsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export default DatePicker;`]],["h3","TimePicker.tsx"],["p","\u65B0\u5EFA ",["code","src/components/TimePicker.tsx"],"\u3002"],["p","\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"],["pre",{lang:"tsx",highlighted:`import { Dayjs } from <span class="token string">'dayjs'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token operator">*</span> as React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import DatePicker from <span class="token string">'./DatePicker'</span><span class="token comment" spellcheck="true">;</span>
import { PickerTimeProps } from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>
import { Omit } from <span class="token string">'antd/es/_util/type'</span><span class="token comment" spellcheck="true">;</span>

export interface TimePickerProps extends Omit<span class="token operator">&lt;</span>PickerTimeProps<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">,</span> <span class="token string">'picker'</span><span class="token operator">></span> {}

<span class="token keyword">const</span> TimePicker <span class="token operator">=</span> React<span class="token punctuation">.</span>forwardRef<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> TimePickerProps<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> ref<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  return <span class="token operator">&lt;</span>DatePicker {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>props} picker<span class="token operator">=</span><span class="token string">"time"</span> mode<span class="token operator">=</span>{undefined} ref<span class="token operator">=</span>{ref} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>
}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

TimePicker<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token string">'TimePicker'</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> TimePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import { Dayjs } from 'dayjs';
import * as React from 'react';
import DatePicker from './DatePicker';
import { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import { Omit } from 'antd/es/_util/type';

export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;`]],["h3","Calendar.tsx"],["p","\u65B0\u5EFA ",["code","src/components/Calendar.tsx"],"\u3002"],["p","\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"],["pre",{lang:"tsx",highlighted:`import { Dayjs } from <span class="token string">'dayjs'</span><span class="token comment" spellcheck="true">;</span>
import dayjsGenerateConfig from <span class="token string">'rc-picker/lib/generate/dayjs'</span><span class="token comment" spellcheck="true">;</span>
import generateCalendar from <span class="token string">'antd/es/calendar/generateCalendar'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token string">'antd/es/calendar/style'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> Calendar <span class="token operator">=</span> generateCalendar<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">(</span>dayjsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> Calendar<span class="token comment" spellcheck="true">;</span>`},["code",`import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/es/calendar/generateCalendar';
import 'antd/es/calendar/style';

const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig);

export default Calendar;`]],["h4","\u5BFC\u51FA\u81EA\u5B9A\u4E49\u7EC4\u4EF6"],["p","\u65B0\u5EFA ",["code","src/components/index.tsx"],"\u3002"],["p","\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"],["pre",{lang:"tsx",highlighted:`export { <span class="token keyword">default</span> as DatePicker } from <span class="token string">'./DatePicker'</span><span class="token comment" spellcheck="true">;</span>
export { <span class="token keyword">default</span> as Calendar } from <span class="token string">'./Calendar'</span><span class="token comment" spellcheck="true">;</span>
export { <span class="token keyword">default</span> as TimePicker } from <span class="token string">'./TimePicker'</span><span class="token comment" spellcheck="true">;</span>`},["code",`export { default as DatePicker } from './DatePicker';
export { default as Calendar } from './Calendar';
export { default as TimePicker } from './TimePicker';`]],["h3","\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"],["p","\u4FEE\u6539 ",["code","src/App.tsx"],"\uFF0C\u5F15\u5165 ",["code","dayjs"]," \u548C\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u3002"],["pre",{lang:"diff",highlighted:`<span class="token deleted">- import { DatePicker, Calendar } from 'antd';</span>
<span class="token deleted">- import format from 'moment';</span>

<span class="token inserted">+ import { DatePicker, TimePicker, Calendar } from './components';</span>
<span class="token inserted">+ import format from 'dayjs';</span>`},["code",`- import { DatePicker, Calendar } from 'antd';
- import format from 'moment';

+ import { DatePicker, TimePicker, Calendar } from './components';
+ import format from 'dayjs';`]],["p","\u5982\u679C\u6309\u7167\u4E0A\u8FF0\u6B65\u9AA4\u65E0\u6CD5\u6B63\u786E\u8FD0\u884C\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/tree/master/antd-ts"},"antd4-generate-picker/antd-ts"],"\u3002"],["p","\u5982\u679C\u4F60\u9700\u8981 JavaScript \u4EE3\u7801\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003 ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/tree/master/antd-demo"},"antd4-generate-picker/antd-demo"],"\u3002"],["p","\u5982\u679C\u4F60\u719F\u6089 ",["a",{title:null,href:"https://umijs.org/"},"umi"],"\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003 ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-use-dayjs-replace-moment"},"antd4-use-dayjs-replace-moment"],"\u3002"],["h2","antd-dayjs-webpack-plugin"],["p","\u6211\u4EEC\u8FD8\u63D0\u4F9B\u53E6\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002\u4F7F\u7528 ",["code","antd-dayjs-webpack-plugin"]," \u63D2\u4EF6\uFF0C\u65E0\u9700\u5BF9\u73B0\u6709\u4EE3\u7801\u505A\u4EFB\u4F55\u4FEE\u6539\u76F4\u63A5\u66FF\u6362\u6210 ",["code","Day.js"],"\u3002\u8BF7\u53C2\u8003 ",["a",{title:null,href:"https://github.com/ant-design/antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"],"\u3002"],["pre",{lang:"js",highlighted:`<span class="token comment" spellcheck="true">// webpack-config.js</span>
<span class="token keyword">import</span> AntdDayjsWebpackPlugin <span class="token keyword">from</span> <span class="token string">'antd-dayjs-webpack-plugin'</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment" spellcheck="true">// ...</span>
  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">AntdDayjsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`// webpack-config.js
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

module.exports = {
  // ...
  plugins: [new AntdDayjsWebpackPlugin()],
};`]],["h2","\u4F7F\u7528 date-fns"],["p",["a",{title:null,href:"https://date-fns.org/"},"date-fns"]," \u76EE\u524D\u652F\u6301\u548C dayjs \u7C7B\u4F3C\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65B9\u6CD5\uFF0C\u533A\u522B\u5728\u4E8E\u4F7F\u7528\u7684\u53C2\u6570\u7C7B\u578B\u4E0D\u540C\uFF0C\u5728 antd 4.5.0 \u4EE5\u4E0A\u7248\u672C\u63D0\u4F9B\u652F\u6301\u3002"],["p","\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A"],["h3","DatePicker.tsx"],["p","\u65B0\u5EFA ",["code","src/components/DatePicker.tsx"],"\u3002"],["p","\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"],["pre",{lang:"tsx",highlighted:`import dateFnsGenerateConfig from <span class="token string">'rc-picker/lib/generate/dateFns'</span><span class="token comment" spellcheck="true">;</span>
import generatePicker from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token string">'antd/es/date-picker/style/index'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Date<span class="token operator">></span><span class="token punctuation">(</span>dateFnsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

export default DatePicker;`]]],meta:{order:7.1,title:"\u66FF\u6362 Moment.js",filename:"docs/react/replace-moment.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6",title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"]],["li",["a",{className:"bisheng-toc-h2",href:"#antd-dayjs-webpack-plugin",title:"antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4F7F\u7528-date-fns",title:"\u4F7F\u7528 date-fns"},"\u4F7F\u7528 date-fns"]]]}}}]);
