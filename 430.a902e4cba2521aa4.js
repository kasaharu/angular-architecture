"use strict";(self.webpackChunkangular_architecture=self.webpackChunkangular_architecture||[]).push([[430],{9430:(y,h,i)=>{i.r(h),i.d(h,{default:()=>H});var p=i(6895),e=i(8274),g=i(870);function m(t,c){if(1&t){const o=e.EpF();e.TgZ(0,"li")(1,"a",6)(2,"span",7),e._uU(3),e.qZA(),e._uU(4),e.qZA(),e.TgZ(5,"button",8),e.NdJ("click",function(){const s=e.CHM(o).$implicit,a=e.oxw();return e.KtG(a.onClickDeleteButton(s))}),e._uU(6,"x"),e.qZA()()}if(2&t){const o=c.$implicit;e.xp6(1),e.MGl("routerLink","/detail/",o.id,""),e.xp6(2),e.Oqu(o.id),e.xp6(1),e.hij(" ",o.name," ")}}let f=(()=>{class t{constructor(){this.heroes=null,this.heroAdded=new e.vpe,this.heroDeleted=new e.vpe}onClickAddButton(o){this.heroAdded.emit(o)}onClickDeleteButton(o){this.heroDeleted.emit(o)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-ly-heroes"]],inputs:{heroes:"heroes"},outputs:{heroAdded:"heroAdded",heroDeleted:"heroDeleted"},standalone:!0,features:[e.jDz],decls:11,vars:1,consts:[["for","new-hero"],["id","new-hero"],["heroName",""],["type","button",1,"add-button",3,"click"],[1,"heroes"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"badge"],["type","button","title","delte hero",1,"delete",3,"click"]],template:function(o,n){if(1&o){const r=e.EpF();e.TgZ(0,"h2"),e._uU(1,"My Heroes"),e.qZA(),e.TgZ(2,"div")(3,"label",0),e._uU(4,"Hero name: "),e.qZA(),e._UZ(5,"input",1,2),e.TgZ(7,"button",3),e.NdJ("click",function(){e.CHM(r);const a=e.MAs(6);return e.KtG(n.onClickAddButton(a.value))}),e._uU(8,"Add hero"),e.qZA()(),e.TgZ(9,"ul",4),e.YNc(10,m,7,3,"li",5),e.qZA()}2&o&&(e.xp6(10),e.Q6J("ngForOf",n.heroes))},dependencies:[p.sg,g.rH],styles:[".heroes[_ngcontent-%COMP%]{margin:0 0 2em;list-style-type:none;padding:0;width:15em}input[_ngcontent-%COMP%]{display:block;width:100%;padding:.5rem;margin:1rem 0;box-sizing:border-box}.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;cursor:pointer}.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{left:.1em}.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#333;text-decoration:none;background-color:#eee;margin:.5em;padding:.3em 0;height:1.6em;border-radius:4px;display:block;width:100%}.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#2c3a41;background-color:#e6e6e6}.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{background-color:#525252;color:#fafafa}.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{display:inline-block;font-size:small;color:#fff;padding:.8em .7em 0;background-color:#405061;line-height:1em;position:relative;left:-1px;top:-4px;height:1.8em;min-width:16px;text-align:right;margin-right:.8em;border-radius:4px 0 0 4px}.add-button[_ngcontent-%COMP%]{padding:.5rem 1.5rem;font-size:1rem;margin-bottom:2rem}.add-button[_ngcontent-%COMP%]:hover{color:#fff;background-color:#42545c}button.delete[_ngcontent-%COMP%]{position:absolute;left:210px;top:5px;background-color:#fff;color:#525252;font-size:1.1rem;margin:0;padding:1px 10px 3px}button.delete[_ngcontent-%COMP%]:hover{background-color:#525252;color:#fff}"]}),t})();var d=i(5861),_=i(1843),l=i(3905),C=i(5758);let u=(()=>{class t extends _.m1{constructor(o){super({heroes:[]}),this._heroService=o,this.heroes$=this.select(n=>n.heroes),this.setHeroes=this.updater((n,r)=>({...n,heroes:r}))}getHeroes(){var o=this;return(0,d.Z)(function*(){const n=yield(0,l.z)(o._heroService.getHeroes());o.setHeroes(n)})()}addHero(o){var n=this;return(0,d.Z)(function*(){if(!(o=o.trim()))return;const r=yield(0,l.z)(n._heroService.addHero({name:o})),s=yield(0,l.z)(n.heroes$);n.setHeroes(s.concat(r))})()}deleteHero(o){var n=this;return(0,d.Z)(function*(){yield(0,l.z)(n._heroService.deleteHero(o.id));const r=yield(0,l.z)(n.heroes$);n.setHeroes(r.filter(s=>s!==o))})()}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(C.E))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})(),H=(()=>{class t{constructor(o){this._componentStore=o,this.heroes$=this._componentStore.heroes$}ngOnInit(){this.getHeroes()}getHeroes(){this._componentStore.getHeroes()}addHero(o){this._componentStore.addHero(o)}deleteHero(o){this._componentStore.deleteHero(o)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(u))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[e._Bn([u]),e.jDz],decls:2,vars:3,consts:[[3,"heroes","heroAdded","heroDeleted"]],template:function(o,n){1&o&&(e.TgZ(0,"app-ly-heroes",0),e.NdJ("heroAdded",function(s){return n.addHero(s)})("heroDeleted",function(s){return n.deleteHero(s)}),e.ALo(1,"async"),e.qZA()),2&o&&e.Q6J("heroes",e.lcZ(1,1,n.heroes$))},dependencies:[p.Ov,f],encapsulation:2}),t})()}}]);