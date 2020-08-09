(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{3214:function(a,b){a.exports={content:["section",["p","展示行列数据。"],["h2","设计师专属"],["p","安装 ",["a",{title:null,href:"https://kitchen.alipay.com/"},"Kitchen Sketch 插件 💎"],"，两步就可以自动生成 Ant Design 表格组件。"],["h2","何时使用"],["ul",["li",["p","当有大量结构化的数据需要展现时；"]],["li",["p","当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。"]]],["h2","如何使用"],["p","指定表格的数据源 ",["code","dataSource"]," 为一个数组。"],["pre",{lang:"jsx",highlighted:`<span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    name<span class="token punctuation">:</span> <span class="token string">'胡彦斌'</span><span class="token punctuation">,</span>
    age<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
    address<span class="token punctuation">:</span> <span class="token string">'西湖区湖底公园1号'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    name<span class="token punctuation">:</span> <span class="token string">'胡彦祖'</span><span class="token punctuation">,</span>
    age<span class="token punctuation">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
    address<span class="token punctuation">:</span> <span class="token string">'西湖区湖底公园1号'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'年龄'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'住址'</span><span class="token punctuation">,</span>
    dataIndex<span class="token punctuation">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'address'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`},["code",`const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

<Table dataSource={dataSource} columns={columns} />;`]]],meta:{category:"Components",cols:1,type:"数据展示",title:"Table",subtitle:"表格",cover:"https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg",filename:"components/table/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#设计师专属",title:"设计师专属"},"设计师专属"]],["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#如何使用",title:"如何使用"},"如何使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#在-TypeScript-中使用",title:"在 TypeScript 中使用"},"在 TypeScript 中使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#注意",title:"注意"},"注意"]],["li",["a",{className:"bisheng-toc-h2",href:"#从-v3-升级到-v4",title:"从 v3 升级到 v4"},"从 v3 升级到 v4"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["p","另外我们封装了 ",["a",{title:null,href:"https://protable.ant.design/"},"ProTable"],"，在 ",["code","antd"]," Table 之上扩展了更多便捷易用的功能，内置搜索、筛选、刷新等常用表格行为，并为多种类型数据展示提供了内置格式化，欢迎尝试使用。"],["h3","Table"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","tableLayout"],["td","表格元素的 ",["a",{title:null,href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout"},"table-layout"]," 属性，设为 ",["code","fixed"]," 表示内容不会影响列的布局"],["td","- ","|"," ",["code","auto"]," ","|"," ",["code","fixed"]],["td","无",["hr"],"固定表头/列或使用了 ",["code","column.ellipsis"]," 时，默认值为 ",["code","fixed"]]],["tr",["td","bordered"],["td","是否展示外边框和列边框"],["td","boolean"],["td","false"]],["tr",["td","columns"],["td","表格列的配置描述，具体项见下表"],["td",["a",{title:null,href:"#Column"},"ColumnsType"],"[","]"],["td","-"]],["tr",["td","components"],["td","覆盖默认的 table 元素"],["td",["a",{title:null,href:"https://git.io/fANxz"},"TableComponents"]],["td","-"]],["tr",["td","dataSource"],["td","数据数组"],["td","object","[","]"],["td","-"]],["tr",["td","expandable"],["td","配置展开属性"],["td",["a",{title:null,href:"#expandable"},"expandable"]],["td","-"]],["tr",["td","footer"],["td","表格尾部"],["td","function(currentPageData)"],["td","-"]],["tr",["td","loading"],["td","页面是否加载中"],["td","boolean ","|"," ",["a",{title:null,href:"/components/spin/#API"},"object"]," (",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/4544#issuecomment-271533135"},"更多"],")"],["td","false"]],["tr",["td","locale"],["td","默认文案设置，目前包括排序、过滤、空数据文案"],["td","object"],["td","filterConfirm: ",["code","确定"]," ",["br"]," filterReset: ",["code","重置"]," ",["br"]," emptyText: ",["code","暂无数据"]," ",["br"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/4ad1ccac277782d7ed14f7e5d02d6346aae0db67/components/locale/default.tsx#L19"},"默认值"]]],["tr",["td","pagination"],["td","分页器，参考",["a",{title:null,href:"#pagination"},"配置项"],"或 ",["a",{title:null,href:"/components/pagination/"},"pagination"]," 文档，设为 false 时不展示和进行分页"],["td","object"],["td","-"]],["tr",["td","rowClassName"],["td","表格行的类名"],["td","function(record, index): string"],["td","-"]],["tr",["td","rowKey"],["td","表格行 key 的取值，可以是字符串或一个函数"],["td","string ","|"," function(record): string"],["td",["code","key"]]],["tr",["td","rowSelection"],["td","表格行是否可选择，",["a",{title:null,href:"#rowSelection"},"配置项"]],["td","object"],["td","-"]],["tr",["td","scroll"],["td","表格是否可滚动，也可以指定滚动区域的宽、高，",["a",{title:null,href:"#scroll"},"配置项"]],["td","object"],["td","-"]],["tr",["td","showHeader"],["td","是否显示表头"],["td","boolean"],["td","true"]],["tr",["td","size"],["td","表格大小"],["td",["code","default"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td","default"]],["tr",["td","summary"],["td","总结栏"],["td","(currentData) => ReactNode"],["td","-"]],["tr",["td","title"],["td","表格标题"],["td","function(currentPageData)"],["td","-"]],["tr",["td","onChange"],["td","分页、排序、筛选变化时触发"],["td","function(pagination, filters, sorter, extra: { currentDataSource: [], action: ",["code","paginate"]," ","|"," ",["code","sort"]," ","|"," ",["code","filter"]," })"],["td","-"]],["tr",["td","onHeaderRow"],["td","设置头部行属性"],["td","function(column, index)"],["td","-"]],["tr",["td","onRow"],["td","设置行属性"],["td","function(record, index)"],["td","-"]],["tr",["td","getPopupContainer"],["td","设置表格内各类浮层的渲染节点，如筛选菜单"],["td","(triggerNode) => HTMLElement"],["td","() => TableHtmlElement"]],["tr",["td","sortDirections"],["td","支持的排序方式，取值为 ",["code","ascend"]," ",["code","descend"]],["td","Array"],["td","[",["code","ascend"],", ",["code","descend"],"]"]],["tr",["td","showSorterTooltip"],["td","表头是否显示下一次排序的 tooltip 提示"],["td","boolean"],["td","true"]]]],["h4","onRow 用法"],["p","适用于 ",["code","onRow"]," ",["code","onHeaderRow"]," ",["code","onCell"]," ",["code","onHeaderCell"],"。"],["pre",{lang:"jsx",highlighted:`<span class="token operator">&lt;</span>Table
  onRow<span class="token operator">=</span><span class="token punctuation">{</span>record <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      onClick<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 点击行</span>
      onDoubleClick<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      onContextMenu<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      onMouseEnter<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 鼠标移入行</span>
      onMouseLeave<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
  onHeaderRow<span class="token operator">=</span><span class="token punctuation">{</span>column <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      onClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// 点击表头行</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">></span>`},["code",`<Table
  onRow={record => {
    return {
      onClick: event => {}, // 点击行
      onDoubleClick: event => {},
      onContextMenu: event => {},
      onMouseEnter: event => {}, // 鼠标移入行
      onMouseLeave: event => {},
    };
  }}
  onHeaderRow={column => {
    return {
      onClick: () => {}, // 点击表头行
    };
  }}
/>`]],["h3","Column"],["p","列描述数据对象，是 columns 中的一项，Column 使用相同的 API。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","align"],["td","设置列的对齐方式"],["td",["code","left"]," ","|"," ",["code","right"]," ","|"," ",["code","center"]],["td",["code","left"]],["td"]],["tr",["td","ellipsis"],["td","超过宽度将自动省略，暂不支持和排序筛选一起使用。",["br"],"设置为 ",["code","true"]," 或 ",["code","{ showTitle?: boolean }"]," 时，表格布局将变成 ",["code",'tableLayout="fixed"'],"。"],["td","boolean ","|"," { showTitle?: boolean }"],["td","false"],["td","showTitle: 4.3.0"]],["tr",["td","className"],["td","列样式类名"],["td","string"],["td","-"],["td"]],["tr",["td","colSpan"],["td","表头列合并,设置为 0 时，不渲染"],["td","number"],["td","-"],["td"]],["tr",["td","dataIndex"],["td","列数据在数据项中对应的路径，支持通过数组查询嵌套路径"],["td","string ","|"," string","[","]"],["td","-"],["td"]],["tr",["td","defaultFilteredValue"],["td","默认筛选值"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","defaultSortOrder"],["td","默认排序顺序"],["td",["code","ascend"]," ","|"," ",["code","descend"]],["td","-"],["td"]],["tr",["td","filterDropdown"],["td","可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互"],["td","ReactNode ","|"," (props: ",["a",{title:null,href:"https://git.io/fjP5h"},"FilterDropdownProps"],") => ReactNode"],["td","-"],["td"]],["tr",["td","filterDropdownVisible"],["td","用于控制自定义筛选菜单是否可见"],["td","boolean"],["td","-"],["td"]],["tr",["td","filtered"],["td","标识数据是否经过过滤，筛选图标会高亮"],["td","boolean"],["td","false"],["td"]],["tr",["td","filteredValue"],["td","筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","filterIcon"],["td","自定义 filter 图标。"],["td","ReactNode ","|"," (filtered: boolean) => ReactNode"],["td","false"],["td"]],["tr",["td","filterMultiple"],["td","是否多选"],["td","boolean"],["td","true"],["td"]],["tr",["td","filters"],["td","表头的筛选菜单项"],["td","object","[","]"],["td","-"],["td"]],["tr",["td","fixed"],["td","（IE 下无效）列是否固定，可选 true (等效于 left) ",["code","left"]," ",["code","right"]],["td","boolean ","|"," string"],["td","false"],["td"]],["tr",["td","key"],["td","React 需要的 key，如果已经设置了唯一的 ",["code","dataIndex"],"，可以忽略这个属性"],["td","string"],["td","-"],["td"]],["tr",["td","render"],["td","生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格",["a",{title:null,href:"#components-table-demo-colspan-rowspan"},"行/列合并"]],["td","function(text, record, index) {}"],["td","-"],["td"]],["tr",["td","responsive"],["td","响应式 breakpoint 配置列表。未设置则始终可见。"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/015109b42b85c63146371b4e32b883cf97b088e8/components/_util/responsiveObserve.ts#L1"},"Breakpoint"],"[","]"],["td","-"],["td","4.2.0"]],["tr",["td","shouldCellUpdate"],["td","自定义单元格渲染时机"],["td","(record, prevRecord) => boolean"],["td","-"],["td","4.3.0"]],["tr",["td","sorter"],["td","排序函数，本地排序使用一个函数(参考 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"Array.sort"]," 的 compareFunction)，需要服务端排序可设为 true"],["td","function ","|"," boolean"],["td","-"],["td"]],["tr",["td","sortOrder"],["td","排序的受控属性，外界可用此控制列的排序，可设置为 ",["code","ascend"]," ",["code","descend"]," false"],["td","boolean ","|"," string"],["td","-"],["td"]],["tr",["td","sortDirections"],["td","支持的排序方式，覆盖",["code","Table"],"中",["code","sortDirections"],"， 取值为 ",["code","ascend"]," ",["code","descend"]],["td","Array"],["td","[",["code","ascend"],", ",["code","descend"],"]"],["td"]],["tr",["td","title"],["td","列头显示文字（函数用法 ",["code","3.10.0"]," 后支持）"],["td","ReactNode ","|"," ({ sortOrder, sortColumn, filters }) => ReactNode"],["td","-"],["td"]],["tr",["td","width"],["td","列宽度（",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241"},"指定了也不生效？"],"）"],["td","string ","|"," number"],["td","-"],["td"]],["tr",["td","onCell"],["td","设置单元格属性"],["td","function(record, rowIndex)"],["td","-"],["td"]],["tr",["td","onFilter"],["td","本地模式下，确定筛选的运行函数"],["td","function"],["td","-"],["td"]],["tr",["td","onFilterDropdownVisibleChange"],["td","自定义筛选菜单可见变化时调用"],["td","function(visible) {}"],["td","-"],["td"]],["tr",["td","onHeaderCell"],["td","设置头部单元格属性"],["td","function(column)"],["td","-"],["td"]],["tr",["td","showSorterTooltip"],["td","表头显示下一次排序的 tooltip 提示, 覆盖 table 中",["code","showSorterTooltip"]],["td","boolean"],["td","true"],["td"]]]],["h3","ColumnGroup"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","title"],["td","列头显示文字"],["td","string ","|"," ReactNode"],["td","-"]]]],["h3","pagination"],["p","分页的配置项。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","position"],["td","指定分页显示的位置， 取值为",["code","topLeft"]," ","|"," ",["code","topCenter"]," ","|"," ",["code","topRight"]," ","|",["code","bottomLeft"]," ","|"," ",["code","bottomCenter"]," ","|"," ",["code","bottomRight"]],["td","Array"],["td","[",["code","bottomRight"],"]"]]]],["p","更多配置项，请查看 ",["a",{title:null,href:"/components/pagination/"},["code","Pagination"]],"。"],["h3","expandable"],["p","展开功能的配置。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","childrenColumnName"],["td","指定树形结构的列名"],["td","string","[","]"],["td","children"]],["tr",["td","defaultExpandAllRows"],["td","初始时，是否展开所有行"],["td","boolean"],["td","false"]],["tr",["td","defaultExpandedRowKeys"],["td","默认展开的行"],["td","string","[","]"],["td","-"]],["tr",["td","expandIcon"],["td","自定义展开图标，参考",["a",{title:null,href:"https://codesandbox.io/s/fervent-bird-nuzpr"},"示例"]],["td","function(props): ReactNode"],["td","-"]],["tr",["td","expandIconColumnIndex"],["td","自定义展开按钮的列顺序，",["code","-1"]," 时不展示"],["td","number"],["td","-"]],["tr",["td","expandedRowKeys"],["td","展开的行，控制属性"],["td","string","[","]"],["td","-"]],["tr",["td","expandedRowRender"],["td","额外的展开行"],["td","function(record, index, indent, expanded): ReactNode"],["td","-"]],["tr",["td","expandRowByClick"],["td","通过点击行来展开子行"],["td","boolean"],["td","false"]],["tr",["td","indentSize"],["td","展示树形数据时，每层缩进的宽度，以 px 为单位"],["td","number"],["td","15"]],["tr",["td","rowExpandable"],["td","设置是否允许行展开"],["td","(record) => boolean"],["td","-"]],["tr",["td","onExpand"],["td","点击展开图标时触发"],["td","function(expanded, record)"],["td","-"]],["tr",["td","onExpandedRowsChange"],["td","展开的行变化时触发"],["td","function(expandedRows)"],["td","-"]]]],["h3","rowSelection"],["p","选择功能的配置。"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","checkStrictly"],["td","checkable 状态下节点选择完全受控（父子数据选中状态不再关联）"],["td","boolean"],["td","true"],["td","4.4.0"]],["tr",["td","columnWidth"],["td","自定义列表选择框宽度"],["td","string ","|"," number"],["td",["code","60px"]],["td"]],["tr",["td","columnTitle"],["td","自定义列表选择框标题"],["td","string ","|"," ReactNode"],["td","-"],["td"]],["tr",["td","fixed"],["td","把选择框列固定在左边"],["td","boolean"],["td","-"],["td"]],["tr",["td","getCheckboxProps"],["td","选择框的默认属性配置"],["td","function(record)"],["td","-"],["td"]],["tr",["td","hideSelectAll"],["td","隐藏全选勾选框与自定义选择项"],["td","boolean"],["td","false"],["td","4.3.0"]],["tr",["td","preserveSelectedRowKeys"],["td","当数据被删除时仍然保留选项的 ",["code","key"]],["td","boolean"],["td","-"],["td","4.4.0"]],["tr",["td","renderCell"],["td","渲染勾选框，用法与 Column 的 ",["code","render"]," 相同"],["td","function(checked, record, index, originNode) {}"],["td","-"],["td","4.1.0"]],["tr",["td","selectedRowKeys"],["td","指定选中项的 key 数组，需要和 onChange 进行配合"],["td","string","[","] ","|"," number[]"],["td","[","]"],["td"]],["tr",["td","selections"],["td","自定义选择项 ",["a",{title:null,href:"#selection"},"配置项"],", 设为 ",["code","true"]," 时使用默认选择项"],["td","object","[","] ","|"," boolean"],["td","true"],["td"]],["tr",["td","type"],["td","多选/单选，",["code","checkbox"]," or ",["code","radio"]],["td","string"],["td",["code","checkbox"]],["td"]],["tr",["td","onChange"],["td","选中项发生变化时的回调"],["td","function(selectedRowKeys, selectedRows)"],["td","-"],["td"]],["tr",["td","onSelect"],["td","用户手动选择/取消选择某行的回调"],["td","function(record, selected, selectedRows, nativeEvent)"],["td","-"],["td"]],["tr",["td","onSelectAll"],["td","用户手动选择/取消选择所有行的回调"],["td","function(selected, selectedRows, changeRows)"],["td","-"],["td"]],["tr",["td","onSelectInvert"],["td","用户手动选择反选的回调"],["td","function(selectedRowKeys)"],["td","-"],["td"]]]],["h3","scroll"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","x"],["td","设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 ",["a",{title:null,href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content"},"'max-content'"]],["td","number ","|"," true"],["td","-"]],["tr",["td","y"],["td","设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值"],["td","number"],["td","-"]],["tr",["td","scrollToFirstRowOnChange"],["td","当分页、排序、筛选变化后是否滚动到表格顶部"],["td","boolean"],["td","-"]]]],["h3","selection"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","key"],["td","React 需要的 key，建议设置"],["td","string"],["td","-"]],["tr",["td","text"],["td","选择项显示的文字"],["td","string ","|"," ReactNode"],["td","-"]],["tr",["td","onSelect"],["td","选择项点击回调"],["td","function(changeableRowKeys)"],["td","-"]]]],["h2","在 TypeScript 中使用"],["pre",{lang:"tsx",highlighted:`import { Table } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { ColumnsType } from <span class="token string">'antd/es/table'</span><span class="token comment" spellcheck="true">;</span>

interface User {
  key<span class="token punctuation">:</span> number<span class="token comment" spellcheck="true">;</span>
  name<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> columns<span class="token punctuation">:</span> ColumnsType<span class="token operator">&lt;</span>User<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>{
  key<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
  title<span class="token punctuation">:</span> <span class="token string">'Name'</span><span class="token punctuation">,</span>
  dataIndex<span class="token punctuation">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>
}<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> data<span class="token punctuation">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>{
  key<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  name<span class="token punctuation">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span>
}<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>Table<span class="token operator">&lt;</span>User<span class="token operator">></span> columns<span class="token operator">=</span>{columns} dataSource<span class="token operator">=</span>{data} <span class="token operator">/</span><span class="token operator">></span>
  
    <span class="token operator">/</span><span class="token operator">*</span> 使用 JSX 风格的 API <span class="token operator">*</span><span class="token operator">/</span>
    <span class="token operator">&lt;</span>Table<span class="token operator">&lt;</span>User<span class="token operator">></span> dataSource<span class="token operator">=</span>{data}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Table<span class="token punctuation">.</span>Column<span class="token operator">&lt;</span>User<span class="token operator">></span> key<span class="token operator">=</span><span class="token string">"name"</span> title<span class="token operator">=</span><span class="token string">"Name"</span> dataIndex<span class="token operator">=</span><span class="token string">"name"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Table<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>`},["code",`import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface User {
  key: number;
  name: string;
}

const columns: ColumnsType<User> = [{
  key: 'name',
  title: 'Name',
  dataIndex: 'name',
}];

const data: User[] = [{
  key: 0,
  name: 'Jack',
}];

export default () => (
  <>
    <Table<User> columns={columns} dataSource={data} />
  
    /* 使用 JSX 风格的 API */
    <Table<User> dataSource={data}>
      <Table.Column<User> key="name" title="Name" dataIndex="name" />
    </Table>
  </>
);`]],["p","TypeScript 里使用 Table 的 ",["a",{title:null,href:"https://codesandbox.io/s/serene-platform-0jo5t"},"CodeSandbox 实例"],"。"],["h2","注意"],["p","按照 ",["a",{title:null,href:"https://zh-hans.reactjs.org/docs/lists-and-keys.html#keys"},"React 的规范"],"，所有的数组组件必须绑定 ",["code","key"],"。在 Table 中，",["code","dataSource"]," 和 ",["code","columns"]," 里的数据值都需要指定 ",["code","key"]," 值。对于 ",["code","dataSource"]," 默认将每列数据的 ",["code","key"]," 属性作为唯一的标识。"],["p",["img",{title:null,src:"https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png",alt:"控制台警告"}]],["p","如果 ",["code","dataSource[i].key"]," 没有提供，你应该使用 ",["code","rowKey"]," 来指定 ",["code","dataSource"]," 的主键，如下所示。若没有指定，控制台会出现以上的提示，表格组件也会出现各类奇怪的错误。"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// 比如你的数据主键是 uid</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">rowKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token comment" spellcheck="true">// 或</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">rowKey</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>record <span class="token operator">=</span><span class="token operator">></span> record<span class="token punctuation">.</span>uid<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`},["code",`// 比如你的数据主键是 uid
return <Table rowKey="uid" />;
// 或
return <Table rowKey={record => record.uid} />;`]],["h2","从 v3 升级到 v4"],["p","Table 移除了在 v3 中废弃的 ",["code","onRowClick"],"、",["code","onRowDoubleClick"],"、",["code","onRowMouseEnter"],"、",["code","onRowMouseLeave"]," 等方法。如果你使用的 api 为文档中列举的 api，那你不用担心会丢失功能。"],["p","此外，比较重大的改动为 ",["code","dataIndex"]," 从支持路径嵌套如 ",["code","user.age"]," 改成了数组路径如 ",["code","['user', 'age']"],"。以解决过去属性名带 ",["code","."]," 需要额外的数据转化问题。"],["h2","FAQ"],["h3","如何在没有数据或只有一页数据时隐藏分页栏"],["p","你可以设置 ",["code","pagination"]," 的 ",["code","hideOnSinglePage"]," 属性为 ",["code","true"],"。"],["h3","表格过滤时会回到第一页？"],["p","前端过滤时通常条目总数会减少，从而导致总页数小于筛选前的当前页数，为了防止当前页面没有数据，我们默认会返回第一页。"],["p","如果你在使用远程分页，很可能需要保持当前页面，你可以参照这个 ",["a",{title:null,href:"https://codesandbox.io/s/yuanchengjiazaishuju-ant-design-demo-7y2uf"},"受控例子"]," 控制当前页面不变。"],["h3","表格分页为何会出现 size 切换器？"],["p","自 ",["code","4.1.0"]," 起，Pagination 在 ",["code","total"]," 大于 50 条时会默认显示 size 切换器以提升用户交互体验。如果你不需要该功能，可以通过设置 ",["code","showSizeChanger"]," 为 ",["code","false"]," 来关闭。"],["h3","为什么 更新 state 会导致全表渲染？"],["p","由于 ",["code","columns"]," 支持 ",["code","render"]," 方法，因而 Table 无法知道哪些单元会受到影响。你可以通过 ",["code","column.shouldCellUpdate"]," 来控制单元格的渲染。"]]}}}]);
