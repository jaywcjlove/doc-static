"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["src_app_custom-elements_resource_resource-list_module_ts"],{4994:(U,p,i)=>{i.r(p),i.d(p,{ResourceListModule:()=>u});var d=i(4666),t=i(2560),f=i(635),h=i(4),C=i(6403),v=i(8987);const b=C.bL+"resources.json";class c{constructor(o){this.http=o,this.categories=this.getCategories()}getCategories(){const o=this.http.get(b).pipe((0,f.U)(e=>function y(s){return Object.keys(s).map(o=>{const e=s[o];return{id:l(o),title:o,order:e.order,subCategories:Z(e.subCategories,o)}}).sort(g)}(e)),(0,h.C)());return o.connect(),o}static#t=this.\u0275fac=function(e){return new(e||c)(t.LFG(v.eN))};static#e=this.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac})}function Z(s,o){return Object.keys(s).map(e=>{const r=s[e];return{id:l(e),title:e,order:r.order,resources:x(r.resources,e,o)}}).sort(g)}function x(s,o,e){return Object.keys(s).map(r=>{const n=s[r];return n.category=e,n.subCategory=o,n.id=l(r),n}).sort(m)}function g(s,o){return s.order===o.order?m(s,o):s.order>o.order?1:-1}function m(s,o){return s.title.toUpperCase()>o.title.toUpperCase()?1:-1}function l(s){return s.toLowerCase().replace(/\s+/g,"-")}var F=i(5370);function O(s,o){if(1&s){const e=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){const k=t.CHM(e).$implicit,A=t.oxw();return t.KtG(A.selectCategory(k.id))}),t._uU(1),t.qZA()}if(2&s){const e=o.$implicit,r=t.oxw();t.ekj("selected",e.id==r.selectedCategory.id),t.xp6(1),t.Oqu(e.title)}}function T(s,o){if(1&s&&(t.TgZ(0,"div")(1,"div",7)(2,"a",8)(3,"h3",9),t._uU(4),t.qZA(),t.TgZ(5,"h3",10),t._uU(6),t.qZA(),t.TgZ(7,"p",11),t._uU(8),t.qZA(),t.TgZ(9,"p",12),t._uU(10),t.qZA()()()()),2&s){const e=o.$implicit;t.xp6(2),t.Q6J("href",e.url,t.LSH),t.xp6(2),t.Oqu(e.titleCn||e.title),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(e.descCn||e.desc||"\u65e0\u63cf\u8ff0"),t.xp6(2),t.Oqu(e.desc||"No Description")}}function L(s,o){if(1&s&&(t.TgZ(0,"div")(1,"h2",6),t._uU(2),t.qZA(),t.YNc(3,T,11,5,"div",4),t.qZA()),2&s){const e=o.$implicit;t.xp6(1),t.s9C("id",e.id),t.xp6(1),t.Oqu(e.title),t.xp6(1),t.Q6J("ngForOf",e.resources)}}class a{constructor(o,e){this.resourceService=o,this.locationService=e}ngOnInit(){const o=this.locationService.search().category||"";this.resourceService.categories.subscribe(e=>{this.categories=e,this.selectCategory(o)})}selectCategory(o){o=o.toLowerCase(),this.selectedCategory=this.categories.find(e=>e.id.toLowerCase()===o)||this.categories[0],this.locationService.setSearch("",{category:this.selectedCategory.id})}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(c),t.Y36(F.a))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["aio-resource-list"]],decls:5,vars:2,consts:[[1,"center-layout"],[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click",4,"ngFor","ngForOf"],[1,"showcase"],[4,"ngFor","ngForOf"],[1,"button","mat-button","filter-button",3,"click"],[1,"subcategory-title",3,"id"],[1,"resource-item"],["rel","noopener","target","_blank",1,"resource-row-link",3,"href"],["translation-result","on",1,"resource-name"],["translation-origin","off",1,"resource-name"],["translation-result","on",1,"resource-description"],["translation-origin","off",1,"resource-description"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,O,2,3,"button",2),t.qZA(),t.TgZ(3,"div",3),t.YNc(4,L,4,3,"div",4),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngForOf",r.categories),t.xp6(2),t.Q6J("ngForOf",null==r.selectedCategory?null:r.selectedCategory.subCategories))},dependencies:[d.sg],encapsulation:2})}class u{constructor(){this.customElementComponent=a}static#t=this.\u0275fac=function(e){return new(e||u)};static#e=this.\u0275mod=t.oAB({type:u});static#o=this.\u0275inj=t.cJS({providers:[c],imports:[d.ez]})}}}]);
//# sourceMappingURL=src_app_custom-elements_resource_resource-list_module_ts.f0a67f1f2bb3732b.js.map