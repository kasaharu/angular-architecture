"use strict";(self.webpackChunkangular_architecture=self.webpackChunkangular_architecture||[]).push([[765],{5758:(P,b,i)=>{i.d(b,{E:()=>o});var y=i(3144),g=i(8505),v=i(262),I=i(9646),h=i(2504),c=i(6199);let o=(()=>{class l{constructor(u,f){this._http=u,this._messageService=f,this._heroesUrl="api/heroes",this.httpOptions={headers:new y.WM({"Content-Type":"application/json"})}}getHeroes(){return this._http.get(this._heroesUrl).pipe((0,g.b)(u=>this.log("fetched heroes")),(0,v.K)(this.handleError("getHeroes")))}getHero(u){return this._http.get(`${this._heroesUrl}/${u}`).pipe((0,g.b)(E=>this.log(`fetched hero id=${u}`)),(0,v.K)(this.handleError(`getHero id=${u}`)))}updateHero(u){return this._http.put(this._heroesUrl,u,this.httpOptions).pipe((0,g.b)(f=>this.log(`updated hero id=${u.id}`)),(0,v.K)(this.handleError("updateHero")))}addHero(u){return this._http.post(this._heroesUrl,u,this.httpOptions).pipe((0,g.b)(f=>this.log(`added hero w/ id=${f.id}`)),(0,v.K)(this.handleError("addHero")))}deleteHero(u){return this._http.delete(`${this._heroesUrl}/${u}`,this.httpOptions).pipe((0,g.b)(E=>this.log(`deleted hero id=${u}`)),(0,v.K)(this.handleError("deleteHero")))}searchHeroes(u){return u.trim()?this._http.get(`${this._heroesUrl}/?name=${u}`).pipe((0,g.b)(f=>this.log(`found heroes matching "${u}"`)),(0,v.K)(this.handleError("searchHeroes"))):(0,I.of)([])}log(u){this._messageService.add(`HeroService: ${u}`)}handleError(u){return f=>{throw console.error(f),new Error(`${u} failed: server returned code ${f.status} with body "${f.error}"`)}}}return l.\u0275fac=function(u){return new(u||l)(h.LFG(y.eN),h.LFG(c.e))},l.\u0275prov=h.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},3905:(P,b,i)=>{i.d(b,{z:()=>v});var y=i(6805),g=i(930);function v(I,h){const c="object"==typeof h;return new Promise((o,l)=>{const d=new g.Hp({next:u=>{o(u),d.unsubscribe()},error:l,complete:()=>{c?o(h.defaultValue):l(new y.K)}});I.subscribe(d)})}},1884:(P,b,i)=>{i.d(b,{x:()=>I});var y=i(4671),g=i(4482),v=i(5403);function I(c,o=y.y){return c=c??h,(0,g.e)((l,d)=>{let u,f=!0;l.subscribe((0,v.x)(d,E=>{const D=o(E);(f||!c(u,D))&&(f=!1,u=D,d.next(E))}))})}function h(c,o){return c===o}},4408:(P,b,i)=>{i.d(b,{o:()=>h});var y=i(727);class g extends y.w0{constructor(o,l){super()}schedule(o,l=0){return this}}const v={setInterval(c,o,...l){const{delegate:d}=v;return d?.setInterval?d.setInterval(c,o,...l):setInterval(c,o,...l)},clearInterval(c){const{delegate:o}=v;return(o?.clearInterval||clearInterval)(c)},delegate:void 0};var I=i(8737);class h extends g{constructor(o,l){super(o,l),this.scheduler=o,this.work=l,this.pending=!1}schedule(o,l=0){var d;if(this.closed)return this;this.state=o;const u=this.id,f=this.scheduler;return null!=u&&(this.id=this.recycleAsyncId(f,u,l)),this.pending=!0,this.delay=l,this.id=null!==(d=this.id)&&void 0!==d?d:this.requestAsyncId(f,this.id,l),this}requestAsyncId(o,l,d=0){return v.setInterval(o.flush.bind(o,this),d)}recycleAsyncId(o,l,d=0){if(null!=d&&this.delay===d&&!1===this.pending)return l;null!=l&&v.clearInterval(l)}execute(o,l){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const d=this._execute(o,l);if(d)return d;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,l){let u,d=!1;try{this.work(o)}catch(f){d=!0,u=f||new Error("Scheduled action threw falsy error")}if(d)return this.unsubscribe(),u}unsubscribe(){if(!this.closed){const{id:o,scheduler:l}=this,{actions:d}=l;this.work=this.state=this.scheduler=null,this.pending=!1,(0,I.P)(d,this),null!=o&&(this.id=this.recycleAsyncId(l,o,null)),this.delay=null,super.unsubscribe()}}}},7565:(P,b,i)=>{i.d(b,{v:()=>v});var y=i(6063);class g{constructor(h,c=g.now){this.schedulerActionCtor=h,this.now=c}schedule(h,c=0,o){return new this.schedulerActionCtor(this,h).schedule(o,c)}}g.now=y.l.now;class v extends g{constructor(h,c=g.now){super(h,c),this.actions=[],this._active=!1}flush(h){const{actions:c}=this;if(this._active)return void c.push(h);let o;this._active=!0;do{if(o=h.execute(h.state,h.delay))break}while(h=c.shift());if(this._active=!1,o){for(;h=c.shift();)h.unsubscribe();throw o}}}},6063:(P,b,i)=>{i.d(b,{l:()=>y});const y={now:()=>(y.delegate||Date).now(),delegate:void 0}},9942:(P,b,i)=>{i.d(b,{m1:()=>Ve});var y=i(9751),g=i(727),v=i(4408);let h,I=1;const c={};function o(r){return r in c&&(delete c[r],!0)}const l={setImmediate(r){const e=I++;return c[e]=!0,h||(h=Promise.resolve()),h.then(()=>o(e)&&r()),e},clearImmediate(r){o(r)}},{setImmediate:u,clearImmediate:f}=l,E={setImmediate(...r){const{delegate:e}=E;return(e?.setImmediate||u)(...r)},clearImmediate(r){const{delegate:e}=E;return(e?.clearImmediate||f)(r)},delegate:void 0};var _=i(7565);const L=new class oe extends _.v{flush(e){this._active=!0;const t=this._scheduled;this._scheduled=void 0;const{actions:n}=this;let s;e=e||n.shift();do{if(s=e.execute(e.state,e.delay))break}while((e=n[0])&&e.id===t&&n.shift());if(this._active=!1,s){for(;(e=n[0])&&e.id===t&&n.shift();)e.unsubscribe();throw s}}}(class D extends v.o{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}requestAsyncId(e,t,n=0){return null!==n&&n>0?super.requestAsyncId(e,t,n):(e.actions.push(this),e._scheduled||(e._scheduled=E.setImmediate(e.flush.bind(e,void 0))))}recycleAsyncId(e,t,n=0){var s;if(null!=n?n>0:this.delay>0)return super.recycleAsyncId(e,t,n);const{actions:a}=e;null!=t&&(null===(s=a[a.length-1])||void 0===s?void 0:s.id)!==t&&(E.clearImmediate(t),e._scheduled=void 0)}});var K=i(7579),ue=i(6063);class T extends K.x{constructor(e=1/0,t=1/0,n=ue.l){super(),this._bufferSize=e,this._windowTime=t,this._timestampProvider=n,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,e),this._windowTime=Math.max(1,t)}next(e){const{isStopped:t,_buffer:n,_infiniteTimeWindow:s,_timestampProvider:a,_windowTime:p}=this;t||(n.push(e),!s&&n.push(a.now()+p)),this._trimBuffer(),super.next(e)}_subscribe(e){this._throwIfClosed(),this._trimBuffer();const t=this._innerSubscribe(e),{_infiniteTimeWindow:n,_buffer:s}=this,a=s.slice();for(let p=0;p<a.length&&!e.closed;p+=n?1:2)e.next(a[p]);return this._checkFinalizedStatuses(e),t}_trimBuffer(){const{_bufferSize:e,_timestampProvider:t,_buffer:n,_infiniteTimeWindow:s}=this,a=(s?1:2)*e;if(e<1/0&&a<n.length&&n.splice(0,n.length-a),!s){const p=t.now();let S=0;for(let m=1;m<n.length&&n[m]<=p;m+=2)S=m;S&&n.splice(0,S+1)}}}var z=i(5191),B=i(9646);const G=new class ae extends _.v{}(class le extends v.o{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}schedule(e,t=0){return t>0?super.schedule(e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}execute(e,t){return t>0||this.closed?super.execute(e,t):this._execute(e,t)}requestAsyncId(e,t,n=0){return null!=n&&n>0||null==n&&this.delay>0?super.requestAsyncId(e,t,n):(e.flush(this),0)}});var ce=i(515),de=i(2843),he=i(7159),fe=i(9841),Q=i(4482),j=i(5403),X=i(8421),Y=i(5032);function M(r){return(0,Q.e)((e,t)=>{(0,X.Xf)(r).subscribe((0,j.x)(t,()=>t.complete(),Y.Z)),!t.closed&&e.subscribe(t)})}var pe=i(5363),Z=i(8505),ve=i(4671),ge=i(7669),J=i(4004),ye=i(262),Se=i(5698),be=i(1884),Ie=i(3099),w=i(2504);class Ae extends Error{constructor(e,t){super(function Pe(r,e){return`NG0${Math.abs(r)}${e?": "+e:""}`}(e,t)),this.code=e}}function se(r,e){const t=!e?.manualCleanup;t&&!e?.injector&&(0,w.gHi)(se);const n=t?e?.injector?.get(w.ktI)??(0,w.f3M)(w.ktI):null;let s;s=(0,w.tdS)(e?.requireSync?{kind:0}:{kind:1,value:e?.initialValue});const a=r.subscribe({next:p=>s.set({kind:1,value:p}),error:p=>s.set({kind:2,error:p})});return n?.onDestroy(a.unsubscribe.bind(a)),(0,w.Flj)(()=>{const p=s();switch(p.kind){case 1:return p.value;case 2:throw p.error;case 0:throw new Ae(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}function k(r){return"function"==typeof r.ngrxOnStoreInit}function F(r){return"function"==typeof r.ngrxOnStateInit}const je=new w.OlP("@ngrx/component-store Initial State");let Ve=(()=>{class r{constructor(t){this.destroySubject$=new T(1),this.destroy$=this.destroySubject$.asObservable(),this.stateSubject$=new T(1),this.isInitialized=!1,this.state$=this.select(n=>n),this.state=se(this.stateSubject$.pipe(M(this.destroy$)),{requireSync:!1,manualCleanup:!0}),this.\u0275hasProvider=!1,t&&this.initState(t),this.checkProviderForHooks()}ngOnDestroy(){this.stateSubject$.complete(),this.destroySubject$.next()}updater(t){return n=>{let a,s=!0;const S=((0,z.b)(n)?n:(0,B.of)(n)).pipe((0,pe.Q)(G),(0,Z.b)(()=>this.assertStateIsInitialized()),function me(...r){const e=(0,ge.jO)(r);return(0,Q.e)((t,n)=>{const s=r.length,a=new Array(s);let p=r.map(()=>!1),S=!1;for(let m=0;m<s;m++)(0,X.Xf)(r[m]).subscribe((0,j.x)(n,A=>{a[m]=A,!S&&!p[m]&&(p[m]=!0,(S=p.every(ve.y))&&(p=null))},Y.Z));t.subscribe((0,j.x)(n,m=>{if(S){const A=[m,...a];n.next(e?e(...A):A)}}))})}(this.stateSubject$),(0,J.U)(([m,A])=>t(A,m)),(0,Z.b)(m=>this.stateSubject$.next(m)),(0,ye.K)(m=>s?(a=m,ce.E):(0,de._)(m)),M(this.destroy$)).subscribe();if(a)throw a;return s=!1,S}}initState(t){(0,he.x)([t],G).subscribe(n=>{this.isInitialized=!0,this.stateSubject$.next(n)})}setState(t){"function"!=typeof t?this.initState(t):this.updater(t)()}patchState(t){const n="function"==typeof t?t(this.get()):t;this.updater((s,a)=>({...s,...a}))(n)}get(t){let n;return this.assertStateIsInitialized(),this.stateSubject$.pipe((0,Se.q)(1)).subscribe(s=>{n=t?t(s):s}),n}select(...t){const{observablesOrSelectorsObject:n,projector:s,config:a}=function Ue(r){const e=Array.from(r);let t={debounce:!1};if(function He(r){return typeof r.debounce<"u"}(e[e.length-1])&&(t={...t,...e.pop()}),1===e.length&&"function"!=typeof e[0])return{observablesOrSelectorsObject:e[0],projector:void 0,config:t};const n=e.pop();return{observablesOrSelectorsObject:e,projector:n,config:t}}(t);return(function We(r,e){return Array.isArray(r)&&0===r.length&&e}(n,s)?this.stateSubject$:(0,fe.a)(n)).pipe(a.debounce?function Te(){return r=>new y.y(e=>{let t,n;const s=new g.w0;return s.add(r.subscribe({complete:()=>{t&&e.next(n),e.complete()},error:a=>{e.error(a)},next:a=>{n=a,t||(t=L.schedule(()=>{e.next(n),t=void 0}),s.add(t))}})),s})}():r=>r,s?(0,J.U)(S=>n.length>0&&Array.isArray(S)?s(...S):s(S)):r=>r,(0,be.x)(),function Ee(r,e,t){let n,s=!1;return r&&"object"==typeof r?({bufferSize:n=1/0,windowTime:e=1/0,refCount:s=!1,scheduler:t}=r):n=r??1/0,(0,Ie.B)({connector:()=>new T(n,e,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:s})}({refCount:!0,bufferSize:1}),M(this.destroy$))}selectSignal(...t){const n=[...t],s=(A,N)=>A===N,a="object"==typeof n[t.length-1]?{equal:n.pop().equal||s}:{equal:s},p=n.pop(),S=n;return(0,w.Flj)(0===S.length?()=>p(this.state()):()=>{const A=S.map(N=>N());return p(...A)},a)}effect(t){const n=new K.x;return t(n).pipe(M(this.destroy$)).subscribe(),s=>((0,z.b)(s)?s:(0,B.of)(s)).pipe(M(this.destroy$)).subscribe(p=>{n.next(p)})}checkProviderForHooks(){L.schedule(()=>{if((0,w.X6Q)()&&(k(this)||F(this))&&!this.\u0275hasProvider){const t=[k(this)?"OnStoreInit":"",F(this)?"OnStateInit":""].filter(n=>n);console.warn(`@ngrx/component-store: ${this.constructor.name} has the ${t.join(" and ")} lifecycle hook(s) implemented without being provided using the provideComponentStore(${this.constructor.name}) function. To resolve this, provide the component store via provideComponentStore(${this.constructor.name})`)}})}assertStateIsInitialized(){if(!this.isInitialized)throw new Error(`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`)}}return r.\u0275fac=function(t){return new(t||r)(w.LFG(je,8))},r.\u0275prov=w.Yz7({token:r,factory:r.\u0275fac}),r})()},5861:(P,b,i)=>{function y(v,I,h,c,o,l,d){try{var u=v[l](d),f=u.value}catch(E){return void h(E)}u.done?I(f):Promise.resolve(f).then(c,o)}function g(v){return function(){var I=this,h=arguments;return new Promise(function(c,o){var l=v.apply(I,h);function d(f){y(l,c,o,d,u,"next",f)}function u(f){y(l,c,o,d,u,"throw",f)}d(void 0)})}}i.d(b,{Z:()=>g})}}]);