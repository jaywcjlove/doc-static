(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{WoO9:function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=u("9Z1F"),r=u("67Y/"),o=u("jn67").a+"announcements.json",a=function(){function n(n,l){this.http=n,this.logger=l}return n.prototype.ngOnInit=function(){var n=this;this.http.get(o).pipe(Object(t.a)(function(l){return n.logger.error(new Error(o+" request failed: "+l.message)),[]}),Object(r.a)(function(l){return n.findCurrentAnnouncement(l)}),Object(t.a)(function(l){return n.logger.error(new Error(o+" contains invalid data: "+l.message)),[]})).subscribe(function(l){return n.announcement=l})},n.prototype.findCurrentAnnouncement=function(n){return n.filter(function(n){return new Date(n.startDate).valueOf()<Date.now()}).filter(function(n){return new Date(n.endDate).valueOf()>Date.now()})[0]},n}(),c=function(){return function(){this.customElementComponent=a}}(),i=u("Ip0R"),b=u("t/Na"),f=u("vHPH"),s=e.pb({encapsulation:2,styles:[],data:{}});function m(n){return e.Hb(0,[(n()(),e.rb(0,0,null,null,5,"div",[["class","homepage-container"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,4,"div",[["class","announcement-bar"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),e.rb(3,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"a",[["class","button"]],[[8,"href",4]],null,null,null,null)),(n()(),e.Fb(-1,null,["Learn More"]))],null,function(n,l){var u=l.component;n(l,2,0,u.announcement.imageUrl),n(l,3,0,u.announcement.message),n(l,4,0,u.announcement.linkUrl)})}function y(n){return e.Hb(0,[(n()(),e.ib(16777216,null,null,1,null,m)),e.qb(1,16384,null,0,i.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.announcement)},null)}function p(n){return e.Hb(0,[(n()(),e.rb(0,0,null,null,1,"aio-announcement-bar",[],null,null,null,y,s)),e.qb(1,114688,null,0,a,[b.c,f.a],null,null)],function(n,l){n(l,1,0)},null)}var g=e.nb("aio-announcement-bar",a,p,{},{},[]),d=u("PCNd");u.d(l,"AnnouncementBarModuleNgFactory",function(){return h});var h=e.ob(c,[],function(n){return e.xb([e.yb(512,e.j,e.db,[[8,[g]],[3,e.j],e.y]),e.yb(4608,i.m,i.l,[e.v,[2,i.x]]),e.yb(4608,b.h,b.n,[i.d,e.C,b.l]),e.yb(4608,b.o,b.o,[b.h,b.m]),e.yb(5120,b.a,function(n){return[n]},[b.o]),e.yb(4608,b.k,b.k,[]),e.yb(6144,b.i,null,[b.k]),e.yb(4608,b.g,b.g,[b.i]),e.yb(6144,b.b,null,[b.g]),e.yb(4608,b.f,b.j,[b.b,e.r]),e.yb(4608,b.c,b.c,[b.f]),e.yb(1073742336,i.c,i.c,[]),e.yb(1073742336,d.a,d.a,[]),e.yb(1073742336,b.e,b.e,[]),e.yb(1073742336,b.d,b.d,[]),e.yb(1073742336,c,c,[]),e.yb(256,b.l,"XSRF-TOKEN",[]),e.yb(256,b.m,"X-XSRF-TOKEN",[])])})}}]);
//# sourceMappingURL=announcement-bar-announcement-bar-module-ngfactory.ebb081a9a1f2e27991d8.js.map