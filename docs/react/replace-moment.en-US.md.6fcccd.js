(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{3280:function(e,n){e.exports={content:["article",["p","You might want to replace Moment.js with another date library (now support ",["a",{title:null,href:"https://day.js.org"},"dayjs"]," and ",["a",{title:null,href:"https://date-fns.org"},"date-fns"],") to reduce bundle size. We provide two ways to customize:"],["h2","Custom component"],["p","The first way is use ",["code","generatePicker"]," (or ",["code","generateCalendar"],") helps to create Picker components."],["p","First, we initialize an antd demo with ",["code","create-react-app"],". You can refer to ",["a",{title:null,href:"/docs/react/use-in-typescript"},"Use in TypeScript"],", or you can start directly here ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/commit/47fec964e36d48bd15760f8f5abcb9655c259aa6"},"init antd"]],["h3","DatePicker.tsx"],["p","Create ",["code","src/components/DatePicker.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:`import { Dayjs } from <span class="token string">'dayjs'</span><span class="token comment" spellcheck="true">;</span>
import dayjsGenerateConfig from <span class="token string">'rc-picker/lib/generate/dayjs'</span><span class="token comment" spellcheck="true">;</span>
import generatePicker from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token string">'antd/es/date-picker/style/index'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">(</span>dayjsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export default DatePicker;`]],["h3","TimePicker.tsx"],["p","Create ",["code","src/components/TimePicker.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:`import { Dayjs } from <span class="token string">'dayjs'</span><span class="token comment" spellcheck="true">;</span>
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

export default TimePicker;`]],["h3","Calendar.tsx"],["p","Create ",["code","src/components/Calendar.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:`import { Dayjs } from <span class="token string">'dayjs'</span><span class="token comment" spellcheck="true">;</span>
import dayjsGenerateConfig from <span class="token string">'rc-picker/lib/generate/dayjs'</span><span class="token comment" spellcheck="true">;</span>
import generateCalendar from <span class="token string">'antd/es/calendar/generateCalendar'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token string">'antd/es/calendar/style'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> Calendar <span class="token operator">=</span> generateCalendar<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">(</span>dayjsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> Calendar<span class="token comment" spellcheck="true">;</span>`},["code",`import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/es/calendar/generateCalendar';
import 'antd/es/calendar/style';

const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig);

export default Calendar;`]],["h3","Export Custom component"],["p","Create ",["code","src/components/index.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:`export { <span class="token keyword">default</span> as DatePicker } from <span class="token string">'./DatePicker'</span><span class="token comment" spellcheck="true">;</span>
export { <span class="token keyword">default</span> as Calendar } from <span class="token string">'./Calendar'</span><span class="token comment" spellcheck="true">;</span>
export { <span class="token keyword">default</span> as TimePicker } from <span class="token string">'./TimePicker'</span><span class="token comment" spellcheck="true">;</span>`},["code",`export { default as DatePicker } from './DatePicker';
export { default as Calendar } from './Calendar';
export { default as TimePicker } from './TimePicker';`]],["h3","Use Custom component"],["p","Modify ",["code","src/App.tsx"],",import ",["code","dayjs"]," and custom component."],["pre",{lang:"diff",highlighted:`<span class="token deleted">- import { DatePicker, Calendar } from 'antd';</span>
<span class="token deleted">- import format from 'moment';</span>

<span class="token inserted">+ import { DatePicker, TimePicker, Calendar } from './components';</span>
<span class="token inserted">+ import format from 'dayjs';</span>`},["code",`- import { DatePicker, Calendar } from 'antd';
- import format from 'moment';

+ import { DatePicker, TimePicker, Calendar } from './components';
+ import format from 'dayjs';`]],["p","If the above steps do not work correctly, you can refer to ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/tree/master/antd-ts"},"antd4-generate-picker/antd-ts"],"."],["p","If you need JavaScript code, you can refer to ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/tree/master/antd-demo"},"antd4-generate-picker/antd-demo"],"."],["p","If you use ",["a",{title:null,href:"https://umijs.org/"},"umi"],", you can reference ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-use-dayjs-replace-moment"},"antd4-use-dayjs-replace-moment"],"."],["h2","antd-dayjs-webpack-plugin"],["p","We also provide another implementation, which we provide with ",["code","antd-dayjs-webpack-plugin"],", replacing ",["code","momentjs"]," with ",["code","Day.js"]," directly without changing a line of existing code. More info can be found at ",["a",{title:null,href:"https://github.com/ant-design/antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"],"."],["pre",{lang:"js",highlighted:`<span class="token comment" spellcheck="true">// webpack-config.js</span>
<span class="token keyword">import</span> AntdDayjsWebpackPlugin <span class="token keyword">from</span> <span class="token string">'antd-dayjs-webpack-plugin'</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment" spellcheck="true">// ...</span>
  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">AntdDayjsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`// webpack-config.js
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

module.exports = {
  // ...
  plugins: [new AntdDayjsWebpackPlugin()],
};`]],["h2","Use date-fns"],["p",["a",{title:null,href:"https://date-fns.org/"},"date-fns"]," currently supports custom component methods similar to ",["code","dayjs"],". The difference is that the parameter types used are different. Support is provided in antd 4.5.0 and above."],["p","For Example:"],["h3","DatePicker.tsx"],["p","Create ",["code","src/components/DatePicker.tsx"],"."],["p","Code as follows:"],["pre",{lang:"tsx",highlighted:`import dateFnsGenerateConfig from <span class="token string">'rc-picker/lib/generate/dateFns'</span><span class="token comment" spellcheck="true">;</span>
import generatePicker from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token string">'antd/es/date-picker/style/index'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Date<span class="token operator">></span><span class="token punctuation">(</span>dateFnsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

export default DatePicker;`]]],meta:{order:7.1,title:"Replace Moment.js",filename:"docs/react/replace-moment.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Custom-component",title:"Custom component"},"Custom component"]],["li",["a",{className:"bisheng-toc-h2",href:"#antd-dayjs-webpack-plugin",title:"antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"]],["li",["a",{className:"bisheng-toc-h2",href:"#Use-date-fns",title:"Use date-fns"},"Use date-fns"]]]}}}]);
