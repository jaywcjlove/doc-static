(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{m7ka:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),c=n("jn67"),o=n("fXoL");function s(t,e){const n="string"==typeof e?e:e.find(e=>t.hasOwnProperty(e.toLowerCase()));return void 0===n?void 0:t[n.toLowerCase()]}function a(t,e=!1){return void 0===t?e:"false"!==t.trim()}const r=["content"];function l(t,e){if(1&t&&(o.Vb(0,"p"),o.Gc(1," \u4f60\u8fd8\u53ef\u4ee5 "),o.Vb(2,"a",8),o.Gc(3,"\u4e0b\u8f7d\u8fd9\u4e2a\u4f8b\u5b50"),o.Tb(),o.Gc(4,"\u3002 "),o.Tb()),2&t){const t=o.hc(2);o.Ab(2),o.mc("href",t.zip,o.xc)}}function b(t,e){if(1&t&&(o.Vb(0,"span"),o.Vb(1,"div",5),o.Qb(2,"aio-embedded-stackblitz",6),o.Tb(),o.Ec(3,l,5,1,"p",7),o.Tb()),2&t){const t=o.hc();o.Ab(1),o.nc("title",t.title),o.Ab(1),o.mc("src",t.stackblitz),o.Ab(1),o.mc("ngIf",t.enableDownload)}}function f(t,e){if(1&t&&(o.Vb(0,"span"),o.Vb(1,"a",9),o.Gc(2),o.Tb(),o.Tb()),2&t){const t=o.hc();o.Ab(1),o.nc("title",t.title),o.mc("href",t.zip,o.xc),o.Ab(1),o.Hc(t.title)}}function m(t,e){if(1&t&&(o.Vb(0,"span"),o.Gc(1," / "),o.Vb(2,"a",8),o.Gc(3,"\u4e0b\u8f7d\u8303\u4f8b"),o.Tb(),o.Tb()),2&t){const t=o.hc(2);o.Ab(2),o.mc("href",t.zip,o.xc)}}function d(t,e){if(1&t&&(o.Vb(0,"span"),o.Vb(1,"a",10),o.Gc(2),o.Tb(),o.Ec(3,m,4,1,"span",7),o.Tb()),2&t){const t=o.hc();o.Ab(1),o.nc("title",t.title),o.mc("href",t.stackblitz,o.xc),o.Ab(1),o.Hc(t.title),o.Ab(1),o.mc("ngIf",t.enableDownload)}}const u=["*"],h=["iframe"],p=c.a+"live-examples/",w=c.a+"zips/";let g=(()=>{class t{constructor(t,e){const n=function(t){const e=t instanceof o.k?t.nativeElement.attributes:t.attributes,n={};for(const i of e)n[i.name.toLowerCase()]=i.value;return n}(t),i=this.getExampleDir(n,e.path(!1)),c=this.getStackblitzName(n);this.mode=this.getMode(n),this.enableDownload=this.getEnableDownload(n),this.stackblitz=this.getStackblitz(i,c,"embedded"===this.mode),this.zip=this.getZip(i,c),this.title=this.getTitle(n)}ngAfterContentInit(){const t=this.content.nativeElement.textContent.trim();t&&(this.title=t)}getEnableDownload(t){return!a(s(t,"noDownload"))}getExampleDir(t,e){let n=s(t,"name");if(!n){const t=e.match(/[^/?#]+(?=\/?(?:\?|#|$))/);n=t?t[0]:"index"}return n.trim()}getMode(t){const e=a(s(t,"downloadOnly")),n=a(s(t,"embedded"));return e?"downloadOnly":n?"embedded":"default"}getStackblitz(t,e,n){return`${p}${t}/${e}stackblitz.html${n?"?ctl=1":""}`}getStackblitzName(t){const e=(s(t,"stackblitz")||"").trim();return e&&`${e}.`}getTitle(t){return(s(t,"title")||"\u5728\u7ebf\u4f8b\u5b50").trim()}getZip(t,e){const n=t.split("/")[0];return`${w}${t}/${e}${n}.zip`}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(o.k),o.Pb(i.g))},t.\u0275cmp=o.Jb({type:t,selectors:[["live-example"]],viewQuery:function(t,e){var n;1&t&&o.Ac(r,!0),2&t&&o.rc(n=o.ec())&&(e.content=n.first)},ngContentSelectors:u,decls:7,vars:3,consts:[[2,"display","none"],["content",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"title"],[3,"src"],[4,"ngIf"],["download","","title","\u4e0b\u8f7d\u8303\u4f8b",3,"href"],["download","",3,"href","title"],["target","_blank",3,"href","title"]],template:function(t,e){1&t&&(o.lc(),o.Vb(0,"span",0,1),o.kc(2),o.Tb(),o.Vb(3,"span",2),o.Ec(4,b,4,3,"span",3),o.Ec(5,f,3,3,"span",3),o.Ec(6,d,4,4,"span",4),o.Tb()),2&t&&(o.Ab(3),o.mc("ngSwitch",e.mode),o.Ab(1),o.mc("ngSwitchCase","embedded"),o.Ab(1),o.mc("ngSwitchCase","downloadOnly"))},directives:function(){return[i.m,i.n,i.o,k,i.k]},encapsulation:2}),t})(),k=(()=>{class t{ngAfterViewInit(){this.iframe&&(this.iframe.nativeElement.src=this.src)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Jb({type:t,selectors:[["aio-embedded-stackblitz"]],viewQuery:function(t,e){var n;1&t&&o.Ac(h,!0),2&t&&o.rc(n=o.ec())&&(e.iframe=n.first)},inputs:{src:"src"},decls:2,vars:0,consts:[["frameborder","0","width","100%","height","100%"],["iframe",""]],template:function(t,e){1&t&&o.Qb(0,"iframe",0,1)},styles:["iframe[_ngcontent-%COMP%] { min-height: 400px; }"]}),t})();n.d(e,"LiveExampleModule",(function(){return v}));let v=(()=>{class t{constructor(){this.customElementComponent=g}}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})()}}]);
//# sourceMappingURL=live-example-live-example-module-es2015.d3d902296803c96504d3.js.map