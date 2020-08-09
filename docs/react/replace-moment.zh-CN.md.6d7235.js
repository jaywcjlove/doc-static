(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{3264:function(a,b){a.exports={content:["article",["h2","如何在 DatePicker 中使用自定义日期库（如 dayjs ）？"],["p","考虑到包的大小，你可以用自定义日期库替换 Moment。在这里我们提供了两种方式来实现替换:"],["h3","自定义组件"],["p","第一种方法是使用 ",["code","generatePicker"],"（或 ",["code","generateCalendar"],"）辅助创建 Picker 组件。"],["p","我们先初始化一个 ",["code","create-react-app"]," 的 antd demo，你可以参考 ",["a",{title:null,href:"/docs/react/use-in-typescript"},"在 TypeScript 中使用"]," 进行构建，也可以直接从这里开始",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/commit/47fec964e36d48bd15760f8f5abcb9655c259aa6"},"init antd"]],["h4","DatePicker.tsx"],["p","新建 ",["code","src/components/DatePicker.tsx"],"。"],["p","编写如下代码:"],["pre",{lang:"tsx",highlighted:`import { Dayjs } from <span class="token string">'dayjs'</span><span class="token comment" spellcheck="true">;</span>
import dayjsGenerateConfig from <span class="token string">'rc-picker/lib/generate/dayjs'</span><span class="token comment" spellcheck="true">;</span>
import generatePicker from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token string">'antd/es/date-picker/style/index'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">(</span>dayjsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export default DatePicker;`]],["h4","TimePicker.tsx"],["p","新建 ",["code","src/components/TimePicker.tsx"],"。"],["p","编写如下代码:"],["pre",{lang:"tsx",highlighted:`import { Dayjs } from <span class="token string">'dayjs'</span><span class="token comment" spellcheck="true">;</span>
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

export default TimePicker;`]],["h4","Calendar.tsx"],["p","新建 ",["code","src/components/Calendar.tsx"],"。"],["p","编写如下代码:"],["pre",{lang:"tsx",highlighted:`import { Dayjs } from <span class="token string">'dayjs'</span><span class="token comment" spellcheck="true">;</span>
import dayjsGenerateConfig from <span class="token string">'rc-picker/lib/generate/dayjs'</span><span class="token comment" spellcheck="true">;</span>
import generateCalendar from <span class="token string">'antd/es/calendar/generateCalendar'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token string">'antd/es/calendar/style'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> Calendar <span class="token operator">=</span> generateCalendar<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">(</span>dayjsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> Calendar<span class="token comment" spellcheck="true">;</span>`},["code",`import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/es/calendar/generateCalendar';
import 'antd/es/calendar/style';

const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig);

export default Calendar;`]],["h4","导出自定义组件"],["p","新建 ",["code","src/components/index.tsx"],"。"],["p","编写如下代码:"],["pre",{lang:"tsx",highlighted:`export { <span class="token keyword">default</span> as DatePicker } from <span class="token string">'./DatePicker'</span><span class="token comment" spellcheck="true">;</span>
export { <span class="token keyword">default</span> as Calendar } from <span class="token string">'./Calendar'</span><span class="token comment" spellcheck="true">;</span>
export { <span class="token keyword">default</span> as TimePicker } from <span class="token string">'./TimePicker'</span><span class="token comment" spellcheck="true">;</span>`},["code",`export { default as DatePicker } from './DatePicker';
export { default as Calendar } from './Calendar';
export { default as TimePicker } from './TimePicker';`]],["h4","使用自定义组件"],["p","修改 ",["code","src/App.tsx"],"，引入 ",["code","dayjs"]," 和自定义的组件。"],["pre",{lang:"diff",highlighted:`<span class="token deleted">- import { DatePicker, Calendar } from 'antd';</span>
<span class="token deleted">- import format from 'moment';</span>

<span class="token inserted">+ import { DatePicker, TimePicker, Calendar } from './components';</span>
<span class="token inserted">+ import format from 'dayjs';</span>`},["code",`- import { DatePicker, Calendar } from 'antd';
- import format from 'moment';

+ import { DatePicker, TimePicker, Calendar } from './components';
+ import format from 'dayjs';`]],["p","如果按照上述步骤无法正确运行的话，你可以参考",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/tree/master/antd-ts"},"antd4-generate-picker/antd-ts"],"。"],["p","如果你需要 JavaScript 代码，你可以参考 ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/tree/master/antd-demo"},"antd4-generate-picker/antd-demo"],"。"],["p","如果你熟悉 ",["a",{title:null,href:"https://umijs.org/"},"umi"],"，你可以参考 ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-use-dayjs-replace-moment"},"antd4-use-dayjs-replace-moment"],"。"],["h3","Webpack 配置替换"],["p","我们还提供另一种实现方式。使用 ",["code","antd-dayjs-webpack-plugin"]," 插件，无需对现有代码做任何修改直接替换成 ",["code","Day.js"],"。请参考 ",["a",{title:null,href:"https://github.com/ant-design/antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"],"。"],["h2","使用 date-fns"],["p",["code","date-fns"]," 目前支持和 dayjs 类似的自定义组件方法，区别在于使用的参数类型不同，在 antd 4.5.0 以上版本提供支持。"],["p","做一个简单的例子："],["h3","DatePicker.tsx"],["p","新建 ",["code","src/components/DatePicker.tsx"],"。"],["p","编写如下代码:"],["pre",{lang:"tsx",highlighted:`import dateFnsGenerateConfig from <span class="token string">'rc-picker/lib/generate/dateFns'</span><span class="token comment" spellcheck="true">;</span>
import generatePicker from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token string">'antd/es/date-picker/style/index'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Date<span class="token operator">></span><span class="token punctuation">(</span>dateFnsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

export default DatePicker;`]]],meta:{order:7.1,title:"替换 Moment.js",filename:"docs/react/replace-moment.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#如何在-DatePicker-中使用自定义日期库（如-dayjs-）？",title:"如何在 DatePicker 中使用自定义日期库（如 dayjs ）？"},"如何在 DatePicker 中使用自定义日期库（如 dayjs ）？"]],["li",["a",{className:"bisheng-toc-h2",href:"#使用-date-fns",title:"使用 date-fns"},"使用 date-fns"]]]}}}]);
