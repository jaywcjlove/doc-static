function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{fPy6:function(t,n,e){"use strict";e.r(n),e.d(n,"ContributorListModule",(function(){return P}));var r,c=e("ofXK"),o=e("NFeN"),i=e("fXoL"),s=e("lJxs"),a=e("qZ0a"),u=e("jn67"),b=e("tk/3"),f=u.a+"contributors.json",p=["Angular","Collaborators","GDE"],l=((r=function(){function t(n){_classCallCheck(this,t),this.http=n,this.contributors=this.getContributors()}return _createClass(t,[{key:"getContributors",value:function(){var t=this.http.get(f).pipe(Object(s.a)((function(t){var n={};return Object.keys(t).forEach((function(e){var r=t[e];r.groups.forEach((function(t){(n[t]||(n[t]=[])).push(r)}))})),n})),Object(s.a)((function(t){return Object.keys(t).map((function(n){var e=p.indexOf(n);return{name:n,order:-1===e?p.length:e,contributors:t[n].sort(d)}})).sort(k)})),Object(a.a)());return t.connect(),t}}]),t}()).\u0275fac=function(t){return new(t||r)(i.Xb(b.a))},r.\u0275prov=i.Kb({token:r,factory:r.\u0275fac}),r);function d(t,n){return t.name.toUpperCase()>n.name.toUpperCase()?1:-1}function k(t,n){return t.order===n.order?t.name>n.name?1:-1:t.order>n.order?1:-1}var v=e("/lUL");function g(t,n){1&t&&(i.Tb(0,"a",7),i.Bc(1," View Bio "),i.Sb())}function m(t,n){if(1&t){var e=i.Ub();i.Tb(0,"a",8),i.bc("click",(function(t){return i.tc(e),t.stopPropagation()})),i.Pb(1,"mat-icon",9),i.Sb()}if(2&t){var r=i.fc();i.mc("href","https://twitter.com/",r.person.twitter,"",i.vc)}}function h(t,n){if(1&t){var e=i.Ub();i.Tb(0,"a",8),i.bc("click",(function(t){return i.tc(e),t.stopPropagation()})),i.Tb(1,"mat-icon",10),i.Bc(2,"link"),i.Sb(),i.Sb()}if(2&t){var r=i.fc();i.lc("href",r.person.website,i.vc)}}function C(t,n){if(1&t){var e=i.Ub();i.Tb(0,"div",11),i.bc("click",(function(){i.tc(e);var t=i.fc();return t.flipCard(t.person)}))("keyup.enter",(function(){i.tc(e);var t=i.fc();return t.flipCard(t.person)})),i.Tb(1,"h3"),i.Bc(2),i.Sb(),i.Tb(3,"p",12),i.Bc(4),i.Sb(),i.Sb()}if(2&t){var r=i.fc();i.Ab(2),i.Cc(r.person.name),i.Ab(2),i.Cc(r.person.bio)}}var y,w=function(t){return{flipped:t}},S=((y=function(){function t(){_classCallCheck(this,t),this.noPicture="_no-one.png",this.pictureBase=u.a+"images/bios/"}return _createClass(t,[{key:"flipCard",value:function(t){t.isFlipped=!t.isFlipped}}]),t}()).\u0275fac=function(t){return new(t||y)},y.\u0275cmp=i.Ib({type:y,selectors:[["aio-contributor"]],inputs:{person:"person"},decls:10,vars:10,consts:[[1,"contributor-card",3,"ngClass"],[1,"card-front",3,"click","keyup.enter"],[1,"contributor-image"],[1,"contributor-info"],["mat-button","","class","info-item",4,"ngIf"],["mat-icon-button","","class","info-item icon","target","_blank",3,"href","click",4,"ngIf"],["class","card-back",3,"click","keyup.enter",4,"ngIf"],["mat-button","",1,"info-item"],["mat-icon-button","","target","_blank",1,"info-item","icon",3,"href","click"],["svgIcon","logos:twitter"],[1,"link-icon"],[1,"card-back",3,"click","keyup.enter"],[1,"contributor-bio"]],template:function(t,n){1&t&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.bc("click",(function(){return n.flipCard(n.person)}))("keyup.enter",(function(){return n.flipCard(n.person)})),i.Tb(2,"h3"),i.Bc(3),i.Sb(),i.Tb(4,"div",2),i.Tb(5,"div",3),i.Ac(6,g,2,0,"a",4),i.Ac(7,m,2,1,"a",5),i.Ac(8,h,3,1,"a",5),i.Sb(),i.Sb(),i.Sb(),i.Ac(9,C,5,2,"div",6),i.Sb()),2&t&&(i.kc("ngClass",i.nc(8,w,n.person.isFlipped)),i.Ab(3),i.Cc(n.person.name),i.Ab(1),i.zc("background-image","url("+n.pictureBase+(n.person.picture||n.noPicture)+")",i.Hb),i.Ab(2),i.kc("ngIf",n.person.bio),i.Ab(1),i.kc("ngIf",n.person.twitter),i.Ab(1),i.kc("ngIf",n.person.website),i.Ab(1),i.kc("ngIf",n.person.isFlipped))},directives:[c.i,c.k,o.a],encapsulation:2}),y);function A(t,n){if(1&t){var e=i.Ub();i.Tb(0,"a",3),i.bc("click",(function(){i.tc(e);var t=n.$implicit;return i.fc().selectGroup(t)}))("keyup.enter",(function(){i.tc(e);var t=n.$implicit;return i.fc().selectGroup(t)})),i.Bc(1),i.Sb()}if(2&t){var r=n.$implicit,c=i.fc();i.Eb("selected",r==c.selectedGroup.name),i.Ab(1),i.Cc(r)}}function T(t,n){1&t&&i.Pb(0,"aio-contributor",7),2&t&&i.kc("person",n.$implicit)}function _(t,n){if(1&t&&(i.Tb(0,"section",4),i.Tb(1,"div",5),i.Ac(2,T,1,1,"aio-contributor",6),i.Sb(),i.Sb()),2&t){var e=i.fc();i.Ab(2),i.kc("ngForOf",e.selectedGroup.contributors)}}var O,I,F=((I=function(){function t(n,e){_classCallCheck(this,t),this.contributorService=n,this.locationService=e}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this,n=this.locationService.search().group||"";this.contributorService.contributors.subscribe((function(e){t.groups=e,t.groupNames=e.map((function(t){return t.name})),t.selectGroup(n)}))}},{key:"selectGroup",value:function(t){t=t.toLowerCase(),this.selectedGroup=this.groups.find((function(n){return n.name.toLowerCase()===t}))||this.groups[0],this.locationService.setSearch("",{group:this.selectedGroup.name})}}]),t}()).\u0275fac=function(t){return new(t||I)(i.Ob(l),i.Ob(v.a))},I.\u0275cmp=i.Ib({type:I,selectors:[["aio-contributor-list"]],decls:3,vars:2,consts:[[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click","keyup.enter",4,"ngFor","ngForOf"],["class","grid-fluid",4,"ngIf"],[1,"button","mat-button","filter-button",3,"click","keyup.enter"],[1,"grid-fluid"],[1,"contributor-group"],[3,"person",4,"ngFor","ngForOf"],[3,"person"]],template:function(t,n){1&t&&(i.Tb(0,"div",0),i.Ac(1,A,2,3,"a",1),i.Sb(),i.Ac(2,_,3,1,"section",2)),2&t&&(i.Ab(1),i.kc("ngForOf",n.groupNames),i.Ab(1),i.kc("ngIf",n.selectedGroup))},directives:[c.j,c.k,S],encapsulation:2}),I),P=((O=function t(){_classCallCheck(this,t),this.customElementComponent=F}).\u0275mod=i.Mb({type:O}),O.\u0275inj=i.Lb({factory:function(t){return new(t||O)},providers:[l],imports:[[c.c,o.b]]}),O)}}]);
//# sourceMappingURL=contributor-contributor-list-module-es5.1ac09921a9d867defd7d.js.map