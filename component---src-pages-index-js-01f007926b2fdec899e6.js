(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{193:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"pageQuery",function(){return T});var n,r=a(7),o=a.n(r),i=a(280),s=a(198),c=a(205),l=a(282),d=a(2),m=a.n(d),u=a(0),p=a(200),g=a(203),h=a(40),f=a(342),b=a(211),v=a(199),E=a(343),x=a.n(E),y=function(t){function a(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).state={babelLoaded:!1},e}o()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=this;Object(f.a)(v.a).then(function(){e.setState({babelLoaded:!0})},function(e){console.error("Babel failed to load.")})},n.render=function(){var t,a,n,r,o,d,m=this.state.babelLoaded,u=this.props,f=u.data,v=u.location,E=f.codeExamples,y=f.examples,T=f.marketing,S=E.edges.reduce(function(e,t){var a=t.node;return e[a.mdAbsolutePath]=a,e},{});return e.createElement(g.a,{location:v},e.createElement(p.a,{title:"React – 用于构建用户界面的 JavaScript 库",canonicalUrl:Object(b.a)("/")}),e.createElement("div",{css:{width:"100%"}},e.createElement("header",{css:{backgroundColor:h.a.dark,color:h.a.white}},e.createElement("div",{css:(t={paddingTop:45,paddingBottom:10},t[h.c.greaterThan("small")]={paddingTop:60,paddingBottom:70},t[h.c.greaterThan("xlarge")]={paddingTop:95,paddingBottom:85,maxWidth:1500,marginLeft:"auto",marginRight:"auto",position:"relative","::before":{content:" ",position:"absolute",top:0,left:0,bottom:0,right:0,backgroundImage:"url("+x.a+")",backgroundRepeat:"no-repeat",backgroundPosition:"100% 100px",backgroundSize:"50% auto",opacity:.05}},t)},e.createElement("div",{css:{position:"relative"}},e.createElement(s.a,null,e.createElement("h1",{css:(a={color:h.a.brand,textAlign:"center",margin:0,fontSize:45,letterSpacing:"0.01em"},a[h.c.size("xsmall")]={fontSize:30},a[h.c.greaterThan("xlarge")]={fontSize:60},a)},"React"),e.createElement("p",{css:(n={paddingTop:15,textAlign:"center",fontSize:24,letterSpacing:"0.01em",fontWeight:200},n[h.c.size("xsmall")]={fontSize:16,maxWidth:"12em",marginLeft:"auto",marginRight:"auto"},n[h.c.greaterThan("xlarge")]={paddingTop:20,fontSize:30},n)},"用于构建用户界面的 JavaScript 库"),e.createElement(c.a,{valign:"center",halign:"center",css:(r={paddingTop:40,flexWrap:"wrap",justifyContent:"center"},r[h.c.greaterThan("xlarge")]={paddingTop:65},r)},e.createElement(w,null,e.createElement(i.a,{to:"/docs/getting-started.html",type:"primary"},"快速开始")),e.createElement(w,null,e.createElement(i.a,{to:"/tutorial/tutorial.html",type:"secondary"},"入门教程"))))))),e.createElement(s.a,null,e.createElement("div",{css:h.d.markdown},e.createElement("section",{css:[k,(o={},o[h.c.lessThan("medium")]={marginTop:0,marginBottom:0,overflowX:"auto",paddingTop:30,WebkitOverflowScrolling:"touch",position:"relative",maskImage:"linear-gradient(to right, transparent, white 10px, white 90%, transparent)"},o)]},e.createElement("div",{css:(d={display:"flex",flexDirection:"row"},d[h.c.lessThan("medium")]={display:"block",whiteSpace:"nowrap"},d)},T.edges.map(function(t,a){var n,r,o,i=t.node;return e.createElement("div",{key:a,css:(r={display:"flex",flexDirection:"column",flex:"0 1 33%",marginLeft:40,"&:first-of-type":(n={marginLeft:0},n[h.c.lessThan("medium")]={marginLeft:10},n)},r[h.c.lessThan("medium")]={display:"inline-block",verticalAlign:"top",marginLeft:0,whiteSpace:"normal",width:"75%",marginRight:20,paddingBottom:40,"&:first-of-type":{marginTop:0}},r)},e.createElement("h3",{css:[_,{"&&":(o={color:h.a.subtle,paddingTop:0,fontWeight:300,fontSize:20},o[h.c.greaterThan("xlarge")]={fontSize:24},o)}]},i.frontmatter.title),e.createElement("div",{dangerouslySetInnerHTML:{__html:i.html}}))}))),e.createElement("hr",{css:{height:1,marginBottom:-1,border:"none",borderBottom:"1 solid "+h.a.divider}}),e.createElement("section",{css:k},e.createElement("div",{id:"examples"},y.edges.map(function(t,a){var n=t.node,r=S[n.fileAbsolutePath];return e.createElement(l.a,{key:a,id:r.id,code:r.code,containerNodeID:n.frontmatter.domid,loaded:m},e.createElement("h3",{css:_},n.frontmatter.title),e.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))}))))),e.createElement("section",{css:{background:h.a.dark,color:h.a.white,paddingTop:45,paddingBottom:25}},e.createElement(s.a,null,e.createElement(c.a,{valign:"center",halign:"center",css:{flexWrap:"wrap",justifyContent:"center"}},e.createElement(w,null,e.createElement(i.a,{to:"/docs/getting-started.html",type:"primary"},"快速开始")),e.createElement(w,null,e.createElement(i.a,{to:"/tutorial/tutorial.html",type:"secondary"},"入门教程")))))))},a}(u.Component);y.propTypes={data:m.a.shape({examples:m.a.object.isRequired,marketing:m.a.object.isRequired}).isRequired};var w=function(t){var a,n,r,o=t.children;t.primary;return e.createElement("div",{css:(r={},r[h.c.between("small","large")]={paddingLeft:20},r[h.c.greaterThan("xlarge")]={paddingLeft:40},r["&:first-child"]=(a={textAlign:"right",paddingRight:7,paddingLeft:7},a[h.c.lessThan("small")]={marginBottom:10},a),r["&:nth-child(2)"]=(n={paddingRight:7,paddingLeft:7},n[h.c.greaterThan("small")]={paddingLeft:15},n[h.c.lessThan("small")]={marginBottom:10},n),r)},o)},T="611389708";t.default=y;var k=((n={marginTop:20,marginBottom:15})[h.c.greaterThan("medium")]={marginTop:60,marginBottom:65},n),_={"&&":{marginBottom:20}}}.call(this,a(58))},200:function(e,t,a){"use strict";var n=a(204);t.a=n.a},201:function(e,t){e.exports=[{name:"English",translated_name:"English",code:"en",status:2},{name:"Arabic",translated_name:"العربية",code:"ar",status:2},{name:"Azerbaijani",translated_name:"Azərbaycanca",code:"az",status:2},{name:"Bulgarian",translated_name:"Български",code:"bg",status:1},{name:"Bengali",translated_name:"বাংলা",code:"bn",status:1},{name:"Catalan",translated_name:"Català",code:"ca",status:1},{name:"German",translated_name:"Deutsch",code:"de",status:1},{name:"Greek",translated_name:"Ελληνικά",code:"el",status:1},{name:"Spanish",translated_name:"Español",code:"es",status:2},{name:"Persian",translated_name:"فارسی",code:"fa",status:0},{name:"French",translated_name:"Français",code:"fr",status:2},{name:"Gujarati",translated_name:"ગુજરાતી",code:"gu",status:0},{name:"Hebrew",translated_name:"עברית",code:"he",status:1},{name:"Hindi",translated_name:"हिन्दी",code:"hi",status:0},{name:"Haitian Creole",translated_name:"Kreyòl ayisyen",code:"ht",status:0},{name:"Hungarian",translated_name:"magyar",code:"hu",status:0},{name:"Armenian",translated_name:"Հայերեն",code:"hy",status:0},{name:"Indonesian",translated_name:"Bahasa Indonesia",code:"id",status:1},{name:"Italian",translated_name:"Italiano",code:"it",status:2},{name:"Japanese",translated_name:"日本語",code:"ja",status:2},{name:"Georgian",translated_name:"ქართული",code:"ka",status:0},{name:"Central Khmer",translated_name:"ភាសាខ្មែរ",code:"km",status:0},{name:"Kannada",translated_name:"ಕನ್ನಡ",code:"kn",status:0},{name:"Korean",translated_name:"한국어",code:"ko",status:2},{name:"Kurdish",translated_name:"کوردی‎",code:"ku",status:0},{name:"Lithuanian",translated_name:"Lietuvių kalba",code:"lt",status:0},{name:"Malayalam",translated_name:"മലയാളം",code:"ml",status:0},{name:"Mongolian",translated_name:"Монгол хэл",code:"mn",status:2},{name:"Nepali",translated_name:"नेपाली",code:"ne",status:0},{name:"Dutch",translated_name:"Nederlands",code:"nl",status:0},{name:"Polish",translated_name:"Polski",code:"pl",status:2},{name:"Portuguese (Brazil)",translated_name:"Português do Brasil",code:"pt-br",status:2},{name:"Portuguese (Portugal)",translated_name:"Português europeu",code:"pt-pt",status:0},{name:"Romanian",translated_name:"Română",code:"ro",status:0},{name:"Russian",translated_name:"Русский",code:"ru",status:2},{name:"Sinhala",translated_name:"සිංහල",code:"si",status:0},{name:"Swedish",translated_name:"Svenska",code:"sv",status:0},{name:"Tamil",translated_name:"தமிழ்",code:"ta",status:0},{name:"Telugu",translated_name:"తెలుగు",code:"te",status:0},{name:"Thai",translated_name:"ไทย",code:"th",status:0},{name:"Tagalog",translated_name:"Wikang Tagalog",code:"tl",status:0},{name:"Turkish",translated_name:"Türkçe",code:"tr",status:2},{name:"Ukrainian",translated_name:"Українська",code:"uk",status:2},{name:"Urdu",translated_name:"اردو",code:"ur",status:0},{name:"Uzbek",translated_name:"Oʻzbekcha",code:"uz",status:0},{name:"Vietnamese",translated_name:"Tiếng Việt",code:"vi",status:1},{name:"Simplified Chinese",translated_name:"简体中文",code:"zh-hans",status:2},{name:"Traditional Chinese",translated_name:"繁體中文",code:"zh-hant",status:2}]},204:function(e,t,a){"use strict";(function(e){a(28);var n=a(218),r=a.n(n),o=(a(0),a(199)),i=a(201),s=a.n(i).a.filter(function(e){return 2==e.status});t.a=function(t){var a=t.title,n=t.ogDescription,i=t.canonicalUrl;return e.createElement(r.a,{title:a},e.createElement("meta",{property:"og:title",content:a}),e.createElement("meta",{property:"og:type",content:"website"}),i&&e.createElement("meta",{property:"og:url",content:i}),e.createElement("meta",{property:"og:image",content:"/logo-og.png"}),e.createElement("meta",{property:"og:description",content:n||"A JavaScript library for building user interfaces"}),e.createElement("meta",{property:"fb:app_id",content:"623268441017527"}),i&&e.createElement("link",{rel:"canonical",href:i}),i&&e.createElement("link",{rel:"alternate",href:function(e){return e.replace(o.b,"https://reactjs.org")}(i),hreflang:"x-default"}),i&&function(t){return s.map(function(a){return e.createElement("link",{key:a.code,rel:"alternate",hreflang:a.code,href:t.replace(o.b,"https://"+("en"===a.code?"":a.code+".")+"reactjs.org")})})}(i))}}).call(this,a(58))},211:function(e,t,a){"use strict";a(28);var n=a(199);t.a=function(e){return null==e?null:n.b+"/"+e.replace(/^\//,"")}},280:function(e,t,a){"use strict";var n=a(281);t.a=n.a},281:function(e,t,a){"use strict";(function(e){a(29);var n,r,o=a(88),i=a.n(o),s=a(41),c=(a(0),a(40)),l=function(t){var a=t.cssProps,n=void 0===a?{}:a;return e.createElement("svg",{css:n,height:"12",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 4.53657 8.69699"},e.createElement("path",{d:"\n        M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,\n        0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,\n        0,0,1,.18254,8.697Z\n      ",fill:"currentColor"}))},d=((n={display:"inline-block",fontSize:16})[c.c.greaterThan("xlarge")]={fontSize:20},n),m=((r={backgroundColor:c.a.brand,color:c.a.black,padding:"10px 25px",whiteSpace:"nowrap",transition:"background-color 0.2s ease-out"})[c.c.greaterThan("xlarge")]={paddingTop:15,paddingBottom:15},r[":hover"]={backgroundColor:c.a.white},r),u={color:c.a.brand,transition:"color 0.2s ease-out",":hover":{color:c.a.white}};t.a=function(t){var a,n=t.children,r=t.type,o=i()(t,["children","type"]);switch(r){case"primary":a=m;break;case"secondary":a=u}return e.createElement(s.Link,Object.assign({},o,{css:[d,a]}),n,"secondary"===r&&e.createElement(l,{cssProps:{marginLeft:10}}))}}).call(this,a(58))},282:function(e,t,a){"use strict";var n=a(283);t.a=n.a},283:function(e,t,a){"use strict";(function(e){var n=a(7),r=a.n(n),o=a(0),i=a(2),s=a.n(i),c=a(40),l=a(284),d=function(t){function a(){return t.apply(this,arguments)||this}return r()(a,t),a.prototype.render=function(){var t,a,n,r=this.props,o=r.children,i=r.code,s=r.id,d=r.containerNodeID,m=r.loaded;return e.createElement("div",{id:s,css:(t={marginTop:40,"&:first-child":{marginTop:0},"& .react-live":{width:"100%"}},t[c.c.greaterThan("xlarge")]={display:"flex",flexDirection:"row",marginTop:80},t[c.c.lessThan("large")]={display:"block"},t)},o&&e.createElement("div",{css:(n={flex:"0 0 33%"},n[c.c.lessThan("xlarge")]={marginBottom:20},n["& h3"]={color:c.a.dark,maxWidth:"11em",paddingTop:0},n["& p"]=(a={marginTop:15,marginRight:40,lineHeight:1.7},a[c.c.greaterThan("xlarge")]={marginTop:25},a),n)},o),m?e.createElement(l.a,{code:i,containerNodeID:d}):e.createElement("h4",null,"正在加载代码示例..."))},a}(o.Component);d.propTypes={children:s.a.node,code:s.a.string.isRequired,loaded:s.a.bool.isRequired},t.a=d}).call(this,a(58))},284:function(e,t,a){"use strict";(function(e){var n=a(7),r=a.n(n),o=(a(28),a(0)),i=a.n(o),s=a(37),c=a.n(s),l=a(285),d=a.n(l),m=a(337),u=a(40),p=a(226),g=function(t){function a(e,a){var n;return(n=t.call(this,e,a)||this)._onChange=function(e){n.setState(function(t){return n._updateState(e,t.showJSX)})},n.state=n._updateState(e.code),n.state.showJSX=!0,n}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){this._render()},n.componentDidUpdate=function(e,t){t.compiled!==this.state.compiled&&this._render()},n.UNSAFE_componentWillReceiveProps=function(e){this.props.code!==e.code&&this.setState(this._updateState(e.code))},n.render=function(){var t,a,n,r,o,i,s=this,c=this.props.containerNodeID,l=this.state,d=l.compiledES6,g=l.code,h=l.error,f=l.showBabelErrorMessage,b=l.showJSX;return f?i=e.createElement("span",null,"Babel 加载失败。",e.createElement("br",null),e.createElement("br",null),"这可能是广告拦截器导致的。如果你正在使用此类插件， 建议将 reactjs.org 加入白名单，以保证代码示例能够正常工作。"):null!=h&&(i=h.message),e.createElement(m.b,{code:b?g:d,mountStylesheet:!1},e.createElement("div",{css:(t={},t[u.c.greaterThan("medium")]={display:"flex",alignItems:"stretch",flexDirection:"row"},t[u.c.lessThan("small")]={display:"block"},t)},e.createElement("div",{css:(a={flex:"0 0 70%",overflow:"hidden",borderRadius:"10px 0 0 10px"},a[u.c.lessThan("medium")]={borderRadius:"10px 10px 0 0"},a)},e.createElement("div",{css:{padding:"0px 10px",background:u.a.darker,color:u.a.white}},e.createElement(p.a,{onDark:!0},"Live JSX Editor",e.createElement("label",{css:{fontSize:14,float:"right",cursor:"pointer"}},e.createElement("input",{checked:this.state.showJSX,onChange:function(e){return s.setState({showJSX:e.target.checked})},type:"checkbox"})," ","JSX?"))),e.createElement("div",{css:(n={height:"100%",width:"100%",borderRadius:"0",maxHeight:"340px !important",marginTop:"0 !important",marginLeft:"0 !important",paddingLeft:"0 !important",marginRight:"0 !important",paddingRight:"0 !important",marginBottom:"0 !important",paddingBottom:"20px !important"},n[u.c.lessThan("medium")]={marginBottom:"0 !important"},n["& pre.prism-code[contenteditable]"]={outline:0,overflow:"auto",marginRight:"0 !important",marginBottom:"0 !important"},n),className:"gatsby-highlight"},e.createElement(m.a,{ignoreTabKey:!0,onChange:this._onChange}))),h&&e.createElement("div",{css:(r={flex:"0 0 30%",overflow:"hidden",border:"1px solid "+u.a.error,borderRadius:"0 10px 10px 0",fontSize:12,lineHeight:1.5},r[u.c.lessThan("medium")]={borderRadius:"0 0 10px 10px"},r)},e.createElement("div",{css:{padding:"0px 10px",background:u.a.error,color:u.a.white}},e.createElement(p.a,{cssProps:{color:u.a.white}},"Error")),e.createElement("pre",{css:{whiteSpace:"pre-wrap",wordBreak:"break-word",color:u.a.error,padding:10}},i)),!h&&e.createElement("div",{css:(o={flex:"0 0 30%",overflow:"hidden",border:"1px solid "+u.a.divider,borderRadius:"0 10px 10px 0"},o[u.c.lessThan("medium")]={borderRadius:"0 0 10px 10px"},o)},e.createElement("div",{css:{padding:"0 10px",backgroundColor:u.a.divider}},e.createElement(p.a,null,"Result")),e.createElement("div",{id:c,css:{padding:10,maxHeight:"340px !important",overflow:"auto","& input":{width:"100%",display:"block",border:"1px solid #ccc",padding:5},"& button":{marginTop:10,padding:"5px 10px"},"& label":{display:"block",marginTop:10},"& textarea":{width:"100%",height:60,padding:5}}}))))},n._render=function(){var e=this.state.compiled;try{new Function("React","ReactDOM","Remarkable",e)(i.a,c.a,d.a)}catch(e){console.error(e),this.setState({compiled:null,error:e})}},n._updateState=function(e,t){void 0===t&&(t=!0);try{var a={compiled:function(e){return Babel.transform(e,{presets:["es2015","react"]}).code}(e),error:null};return t?(a.code=e,a.compiledES6=function(e){return Babel.transform(e,{presets:["react"]}).code}(e).replace(/\\u([\dA-F]{4})/gi,function(e,t){return String.fromCharCode(parseInt(t,16))})):a.compiledES6=e,a}catch(e){return console.error(e),{compiled:null,error:e,showBabelErrorMessage:!window.Babel}}},a}(o.Component);t.a=g}).call(this,a(58))},342:function(e,t,a){"use strict";a(29),a(43);t.a=function(e){return new Promise(function(t,a){return document.head.appendChild(Object.assign(document.createElement("script"),{async:!0,src:e,onload:t,onerror:a}))})}},343:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjZmZmIi8+CiAgPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-index-js-01f007926b2fdec899e6.js.map