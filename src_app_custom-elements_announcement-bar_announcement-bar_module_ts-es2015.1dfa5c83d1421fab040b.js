(self.webpackChunkangular_cn=self.webpackChunkangular_cn||[]).push([["src_app_custom-elements_announcement-bar_announcement-bar_module_ts"],{126:function(n,e,t){"use strict";t.r(e),t.d(e,{AnnouncementBarModule:function(){return g}});var r=t(1116),a=t(2693),o=t(5425),c=t(7727),s=t(9996),u=t(1374),i=t(5366),m=t(9474);function l(n,e){if(1&n&&(i.TgZ(0,"div",1),i.TgZ(1,"div",2),i._UZ(2,"img",3),i._UZ(3,"p",4),i.TgZ(4,"a",5),i._uU(5,"Learn More"),i.qZA(),i.qZA(),i.qZA()),2&n){const n=i.oxw();i.xp6(2),i.Q6J("src",n.announcement.imageUrl,i.LSH),i.xp6(1),i.Q6J("innerHTML",n.announcement.message,i.oJD),i.xp6(1),i.Q6J("href",n.announcement.linkUrl,i.LSH)}}const p=u.bL+"announcements.json";let f=(()=>{class n{constructor(n,e){this.http=n,this.logger=e}ngOnInit(){this.http.get(p).pipe((0,c.K)(n=>(this.logger.error(new Error(`${p} request failed: ${n.message}`)),[])),(0,s.U)(n=>this.findCurrentAnnouncement(n)),(0,c.K)(n=>(this.logger.error(new Error(`${p} contains invalid data: ${n.message}`)),[]))).subscribe(n=>this.announcement=n)}findCurrentAnnouncement(n){return n.filter(n=>new Date(n.startDate).valueOf()<Date.now()).filter(n=>new Date(n.endDate).valueOf()>Date.now())[0]}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(a.eN),i.Y36(m.Y))},n.\u0275cmp=i.Xpm({type:n,selectors:[["aio-announcement-bar"]],decls:1,vars:1,consts:[["class","homepage-container",4,"ngIf"],[1,"homepage-container"],[1,"announcement-bar"],["alt","",3,"src"],[3,"innerHTML"],[1,"button",3,"href"]],template:function(n,e){1&n&&i.YNc(0,l,6,3,"div",0),2&n&&i.Q6J("ngIf",e.announcement)},directives:[r.O5],encapsulation:2}),n})(),g=(()=>{class n{constructor(){this.customElementComponent=f}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[r.ez,o.m,a.JF]]}),n})()}}]);
//# sourceMappingURL=src_app_custom-elements_announcement-bar_announcement-bar_module_ts-es2015.1dfa5c83d1421fab040b.js.map