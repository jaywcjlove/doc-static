import{r as e,b as a,o as r,c as i,d as t,e as s,t as l,a as p}from"./app.8d30a6c9.js";const n=s("h1",{id:"releases",tabindex:"-1"},[t("版本发布 "),s("a",{class:"header-anchor",href:"#releases","aria-hidden":"true"},"#")],-1),c={key:0},d={key:1},h=p("",24),o=JSON.parse('{"title":"版本发布","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"发布周期","slug":"release-cycle","link":"#release-cycle","children":[]},{"level":2,"title":"语义化版本控制的特殊情况","slug":"semantic-versioning-edge-cases","link":"#semantic-versioning-edge-cases","children":[{"level":3,"title":"TypeScript 类型声明","slug":"typescript-definitions","link":"#typescript-definitions","children":[]},{"level":3,"title":"编译后的代码和旧版运行时之间的兼容性","slug":"compiled-code-compatibility-with-older-runtime","link":"#compiled-code-compatibility-with-older-runtime","children":[]}]},{"level":2,"title":"预发布版本","slug":"pre-releases","link":"#pre-releases","children":[]},{"level":2,"title":"废弃的特性","slug":"deprecations","link":"#deprecations","children":[]},{"level":2,"title":"RFC","slug":"rfcs","link":"#rfcs","children":[]},{"level":2,"title":"试验性特性","slug":"experimental-features","link":"#experimental-features","children":[]}],"relativePath":"about/releases.md"}'),u=Object.assign({name:"about/releases.md"},{setup(p){let o=e();return a((async()=>{const e=await fetch("https://api.github.com/repos/vuejs/core/releases?per_page=1");o.value=(await e.json())[0].name})),(e,a)=>(r(),i("div",null,[n,o.value?(r(),i("p",c,[t(" 当前 Vue 的最新稳定版本是 "),s("strong",null,l(o.value),1),t("。 ")])):(r(),i("p",d," 正在检测最新版本…… ")),h]))}});export{o as __pageData,u as default};
