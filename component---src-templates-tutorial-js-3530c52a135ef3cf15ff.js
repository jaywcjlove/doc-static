(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"63Y8":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"pageQuery",(function(){return l}));var a=n("icko"),r=(n("q1tI"),n("Zttt")),c=n("QQGI"),i=n("xVeM"),l="3936292719";t.default=function(t){var n=t.data,l=t.location;return e.createElement(r.a,{location:l},e.createElement(a.a,{enableScrollSync:!0,createLink:c.d,location:l,markdownRemark:n.markdownRemark,sectionList:i.c,titlePostfix:" – React"}))}}.call(this,n("iMUK"))},"6FTn":function(e,t,n){"use strict";n("5l6m");var a=n("a8M0");t.a=function(e){return null==e?null:a.b+"/"+e.replace(/^\//,"")}},C0IN:function(e,t,n){"use strict";(function(e){n("q1tI");var a=function(t,n){return t.push(e.createElement("span",{key:t.length+"-"+n},n))};t.a=function(e,t){if(e.length<=1)return e.map(t);var n=[];return e.forEach((function(r,c){c===e.length-1?(a(n,2===e.length?" and ":", and "),n.push(t(r,c))):c>0?(a(n,", "),n.push(t(r,c))):n.push(t(r,c))})),n}}).call(this,n("iMUK"))},IeeO:function(e,t,n){"use strict";(function(e){n("iMmK"),n("UsjJ"),n("5l6m");var a=n("aAma"),r=n("6HPj"),c=n("Wbzz"),i=n("17x9"),l=n.n(i),o=(n("q1tI"),n("zDcZ")),s=function(t){var n,c=t.next,i=t.prev,l=t.location;return e.createElement("div",{css:{background:o.a.dark,color:o.a.white,paddingTop:50,paddingBottom:50}},e.createElement(a.a,null,e.createElement(r.a,{type:"ul",halign:"space-between",css:(n={},n[o.c.between("small","medium")]={paddingRight:240},n[o.c.between("large","largerSidebar")]={paddingRight:280},n[o.c.between("largerSidebar","sidebarFixed",!0)]={paddingRight:380},n)},e.createElement(r.a,{basis:"50%",type:"li"},i&&e.createElement("div",null,e.createElement(d,null,"上一篇"),e.createElement("div",{css:{paddingTop:10}},e.createElement(u,{location:l,to:i.id+".html"},i.title)))),c&&e.createElement(r.a,{halign:"flex-end",basis:"50%",type:"li",css:{textAlign:"right"}},e.createElement("div",null,e.createElement(d,null,"下一篇"),e.createElement("div",{css:{paddingTop:10}},e.createElement(u,{location:l,to:c.id+".html"},c.title)))))))};s.propTypes={next:l.a.shape({id:l.a.string.isRequired,title:l.a.string.isRequired}),prev:l.a.shape({id:l.a.string.isRequired,title:l.a.string.isRequired})},t.a=s;var u=function(t){var n,a=t.children,r=t.to,i=t.location,l=i&&i.pathname.replace(/\/[^/]+\.html/,"/"+r)||r;return e.createElement(c.Link,{css:(n={display:"inline",borderColor:o.a.subtle,transition:"border-color 0.2s ease",fontSize:30,borderBottomWidth:1,borderBottomStyle:"solid"},n[o.c.lessThan("large")]={fontSize:24},n[o.c.size("xsmall")]={fontSize:16},n[":hover"]={borderColor:o.a.white},n),to:l},a)},d=function(t){var n=t.children;return e.createElement("div",{css:Object.assign({color:o.a.brand},o.b.small)},n)}}).call(this,n("iMUK"))},JM9Q:function(e,t,n){"use strict";var a=n("ZS3K"),r=n("KaJK");a({target:"String",proto:!0,forced:n("Wvaq")("link")},{link:function(e){return r(this,"a","href",e)}})},Kfvu:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.OutboundLink=o,t.trackCustomEvent=function(e){var t=e.category,n=e.action,a=e.label,r=e.value,c=e.nonInteraction,i=void 0!==c&&c,l=e.transport,o=e.hitCallback,s=e.callbackTimeout,u=void 0===s?1e3:s;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:n,eventLabel:a,eventValue:r,nonInteraction:i,transport:l};o&&"function"==typeof o&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,a=function(){n||(n=!0,e())};return setTimeout(a,t),a}(o,u)),window.ga("send","event",d)}};var r=a(n("pVnL")),c=a(n("8OQS")),i=a(n("q1tI")),l=a(n("17x9"));function o(e){var t=e.eventCategory,n=e.eventAction,a=e.eventLabel,l=e.eventValue,o=(0,c.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return i.default.createElement("a",(0,r.default)({},o,{onClick:function(r){"function"==typeof e.onClick&&e.onClick(r);var c=!0;return(0!==r.button||r.altKey||r.ctrlKey||r.metaKey||r.shiftKey||r.defaultPrevented)&&(c=!1),e.target&&"_self"!==e.target.toLowerCase()&&(c=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:a||e.href,eventValue:l,transport:c?"beacon":"",hitCallback:function(){c&&(document.location=e.href)}}):c&&(document.location=e.href),!1}}))}o.propTypes={href:l.default.string,target:l.default.string,eventCategory:l.default.string,eventAction:l.default.string,eventLabel:l.default.string,eventValue:l.default.number,onClick:l.default.func}},Qw6N:function(e,t,n){"use strict";var a=n("ZlxW");t.a=a.a},SjXs:function(e,t,n){"use strict";(function(e){n("VSsl"),n("JM9Q"),n("Z7m2"),n("5l6m");var a=n("aAma"),r=n("6HPj"),c=n("XGt2"),i=n("tYS4"),l=(n("q1tI"),n("8E9e")),o=n("Gjfi"),s=n("Qw6N"),u=n("UIfT"),d=n("C0IN"),m=n("zDcZ"),f=n("6FTn"),h=function(e,t){if(!t)return null;var n=e.map((function(e){return e.items})),a=[].concat.apply([],n),r=t.replace(".html","");return a.find((function(e){return e.id===r}))};t.a=function(t){var n,v=t.authors,p=void 0===v?[]:v,g=t.createLink,b=t.date,k=t.enableScrollSync,E=t.ogDescription,w=t.location,y=t.markdownRemark,L=t.sectionList,S=t.titlePostfix,x=void 0===S?"":S,C=p.length>0,T=y.frontmatter.title||"",I=h(L,y.frontmatter.prev),j=h(L,y.frontmatter.next);return e.createElement(r.a,{direction:"column",grow:"1",shrink:"0",halign:"stretch",css:{width:"100%",flex:"1 0 auto",position:"relative",zIndex:0,"& h1, & h2, & h3, & h4, & h5, & h6":(n={scrollMarginTop:"var(--banner-height-normal)"},n[m.c.lessThan("small")]={scrollMarginTop:"var(--banner-height-small)"},n)}},e.createElement(o.a,{ogDescription:E,ogType:"article",canonicalUrl:Object(f.a)(y.fields.slug),title:""+T+x}),e.createElement("div",{css:{flex:"1 0 auto"}},e.createElement(a.a,null,e.createElement("div",{css:m.d.articleLayout.container},e.createElement(r.a,{type:"article",direction:"column",grow:"1",halign:"stretch"},e.createElement(c.a,{title:T}),(b||C)&&e.createElement("div",{css:{marginTop:15}},b," ",C&&e.createElement("span",{css:{lineHeight:1.75}},"by"," ",Object(d.a)(p,(function(t){return e.createElement("a",{css:m.d.link,href:t.frontmatter.url,key:t.frontmatter.name},t.frontmatter.name)})))),e.createElement("div",{css:m.d.articleLayout.content},e.createElement("div",{css:[m.d.markdown],dangerouslySetInnerHTML:{__html:y.html}}),y.fields.path&&e.createElement("div",{css:{marginTop:80}},e.createElement("span",{css:{whiteSpace:"nowrap",paddingBottom:"1em",marginRight:"36px",display:"inline-block",color:m.a.subtle}},e.createElement(s.a,null)),e.createElement("a",{css:m.d.articleLayout.editLink,href:"https://github.com/reactjs/zh-hans.reactjs.org/tree/master/"+y.fields.path},"编辑此页面")))),e.createElement("div",{css:m.d.articleLayout.sidebar},e.createElement(l.a,{enableScrollSync:k,createLink:g,defaultActiveSection:Object(u.a)(w.pathname,L),location:w,sectionList:L}))))),(j||I)&&e.createElement(i.a,{location:w,next:j,prev:I}))}}).call(this,n("iMUK"))},VSsl:function(e,t,n){var a=n("IvzW"),r=n("jekk").f,c=Function.prototype,i=c.toString,l=/^\s*function ([^ (]*)/;a&&!("name"in c)&&r(c,"name",{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(e){return""}}})},ZlxW:function(e,t,n){"use strict";(function(e){var a=n("q1tI"),r=n("Kfvu"),c=n("zDcZ");t.a=function(){var t=Object(a.useState)(!1),n=t[0],i=t[1];return n?"Thanks for letting us know!":e.createElement("span",null,"Is this page useful?",e.createElement("button",{css:[c.d.articleLayout.feedbackButton,{marginLeft:"6px"}],"aria-label":"Yes",onClick:function(e){e.preventDefault(),Object(r.trackCustomEvent)({category:"Feedback Button",action:"feedback",label:window.location.pathname,value:1}),i(!0)}},e.createElement("svg",{css:{transform:"translateY(0.1em)"},focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76"},e.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"}))),e.createElement("button",{css:[c.d.articleLayout.feedbackButton,{marginLeft:"3px"}],"aria-label":"No",onClick:function(e){e.preventDefault(),Object(r.trackCustomEvent)({category:"Feedback Button",action:"feedback",label:window.location.pathname,value:0}),i(!0)}},e.createElement("svg",{css:{transform:"scale(-1, -1) translateY(-.6em)"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76"},e.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"}))))}}).call(this,n("iMUK"))},icko:function(e,t,n){"use strict";var a=n("SjXs");t.a=a.a},tYS4:function(e,t,n){"use strict";var a=n("IeeO");t.a=a.a}}]);
//# sourceMappingURL=component---src-templates-tutorial-js-3530c52a135ef3cf15ff.js.map