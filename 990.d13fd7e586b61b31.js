"use strict";(self.webpackChunkangular_architecture=self.webpackChunkangular_architecture||[]).push([[990],{6990:(wn,se,l)=>{l.r(se),l.d(se,{default:()=>On});var v=l(4755),o=l(2504),pt=l(188),mt=l(9751),gt=l(4742),_t=l(8421),yt=l(7669),vt=l(5403),Ct=l(3268),Vt=l(1810),Dt=l(4004);let ae=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),g=(()=>{class n extends ae{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),bt={provide:h,useExisting:(0,o.Gpc)(()=>E),multi:!0},Et=new o.OlP("CompositionEventMode");let E=(()=>{class n extends ae{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ft(){const n=(0,v.q)()?(0,v.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Et,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([bt]),o.qOj]}),n})();const u=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators");function ye(n){return null!=n}function ve(n){return(0,o.QGY)(n)?(0,pt.D)(n):n}function Ce(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Ve(n,t){return t.map(e=>e(n))}function Ae(n){return n.map(t=>function St(n){return!n.validate}(t)?t:e=>t.validate(e))}function P(n){return null!=n?function De(n){if(!n)return null;const t=n.filter(ye);return 0==t.length?null:function(e){return Ce(Ve(e,t))}}(Ae(n)):null}function R(n){return null!=n?function Me(n){if(!n)return null;const t=n.filter(ye);return 0==t.length?null:function(e){return function At(...n){const t=(0,yt.jO)(n),{args:e,keys:r}=(0,gt.D)(n),i=new mt.y(s=>{const{length:a}=e;if(!a)return void s.complete();const c=new Array(a);let y=a,A=a;for(let I=0;I<a;I++){let ie=!1;(0,_t.Xf)(e[I]).subscribe((0,vt.x)(s,Sn=>{ie||(ie=!0,A--),c[I]=Sn},()=>y--,void 0,()=>{(!y||!ie)&&(A||s.next(r?(0,Vt.n)(r,c):c),s.complete())}))}});return t?i.pipe((0,Ct.Z)(t)):i}(Ve(e,t).map(ve)).pipe((0,Dt.U)(Ce))}}(Ae(n)):null}function be(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function U(n){return n?Array.isArray(n)?n:[n]:[]}function S(n,t){return Array.isArray(n)?n.includes(t):n===t}function Oe(n,t){const e=U(t);return U(n).forEach(i=>{S(e,i)||e.push(i)}),e}function Se(n,t){return U(t).filter(e=>!S(n,e))}class we{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=P(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=R(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class d extends we{get formDirective(){return null}get path(){return null}}class m extends we{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Ne{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Ge=(()=>{class n extends Ne{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})();const D="VALID",N="INVALID",C="PENDING",M="DISABLED";function G(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class Te{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===N}get pending(){return this.status==C}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Oe(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Oe(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Se(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Se(t,this._rawAsyncValidators))}hasValidator(t){return S(this._rawValidators,t)}hasAsyncValidator(t){return S(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=C,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=D,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===C)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const e=ve(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?N:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(N)?N:D}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){G(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function xt(n){return Array.isArray(n)?P(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Ht(n){return Array.isArray(n)?R(n):n||null}(this._rawAsyncValidators)}}const V=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>B}),B="always";function b(n,t,e=B){(function W(n,t){const e=function Fe(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(be(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function Ee(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(be(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();T(t._rawValidators,i),T(t._rawAsyncValidators,i)})(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function It(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&ke(n,t)})}(n,t),function Rt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Pt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&ke(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function kt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function T(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ke(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Re(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function Ue(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const je=class extends Te{constructor(t=null,e,r){super(function q(n){return(G(n)?n.validators:n)||null}(e),function Y(n,t){return(G(t)?t.asyncValidators:n)||null}(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),G(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=Ue(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Re(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Re(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){Ue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},zt={provide:m,useExisting:(0,o.Gpc)(()=>X)},Ye=(()=>Promise.resolve())();let X=(()=>{class n extends m{constructor(e,r,i,s,a,c){super(),this._changeDetectorRef=a,this.callSetDisabledState=c,this.control=new je,this._registered=!1,this.name="",this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function J(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===E?e=s:function Lt(n){return Object.getPrototypeOf(n.constructor)===g}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function Z(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){b(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){Ye.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=0!==r&&(0,o.D6c)(r);Ye.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?function x(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(d,9),o.Y36(u,10),o.Y36(p,10),o.Y36(h,10),o.Y36(o.sBO,8),o.Y36(V,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([zt]),o.qOj,o.TTD]}),n})(),We=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),Cn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[We]}),n})(),An=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:V,useValue:e.callSetDisabledState??B}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Cn]}),n})();function Dn(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"div")(1,"h2"),o._uU(2),o.ALo(3,"uppercase"),o.qZA(),o.TgZ(4,"div")(5,"span"),o._uU(6,"id: "),o.qZA(),o._uU(7),o.qZA(),o.TgZ(8,"div")(9,"span"),o._uU(10,"name: "),o.qZA(),o._uU(11),o.qZA(),o.TgZ(12,"div")(13,"label",2),o._uU(14,"Hero name: "),o.qZA(),o.TgZ(15,"input",3),o.NdJ("ngModelChange",function(i){o.CHM(e);const s=o.oxw();return o.KtG(s.hero.name=i)}),o.qZA()()()}if(2&n){const e=o.oxw();o.xp6(2),o.hij("",o.lcZ(3,4,e.hero.name)," Details"),o.xp6(5),o.Oqu(e.hero.id),o.xp6(4),o.Oqu(e.hero.name),o.xp6(4),o.Q6J("ngModel",e.hero.name)}}let Mn=(()=>{class n{constructor(e){this._location=e,this.hero=null,this.saveButtonClicked=new o.vpe}goBack(){this._location.back()}save(){this.hero&&(this.saveButtonClicked.emit(this.hero),this.goBack())}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(v.Ye))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-ly-hero-detail"]],inputs:{hero:"hero"},outputs:{saveButtonClicked:"saveButtonClicked"},standalone:!0,features:[o.jDz],decls:5,vars:1,consts:[[4,"ngIf"],["type","button",3,"click"],["for","name"],["id","name","placeholder","name",3,"ngModel","ngModelChange"]],template:function(e,r){1&e&&(o.YNc(0,Dn,16,6,"div",0),o.TgZ(1,"button",1),o.NdJ("click",function(){return r.goBack()}),o._uU(2,"go back"),o.qZA(),o.TgZ(3,"button",1),o.NdJ("click",function(){return r.save()}),o._uU(4,"save"),o.qZA()),2&e&&o.Q6J("ngIf",r.hero)},dependencies:[v.O5,v.gd,An,E,Ge,X]}),n})();var ct=l(5861),bn=l(213),ht=l(3905),Fn=l(5758);let ft=(()=>{class n extends bn.m1{constructor(e){super({hero:null}),this._heroService=e,this.hero$=this.select(r=>r.hero),this.setHero=this.updater((r,i)=>({...r,hero:i}))}getHero(e){var r=this;return(0,ct.Z)(function*(){const i=yield(0,ht.z)(r._heroService.getHero(e));r.setHero(i)})()}updateHero(e){var r=this;return(0,ct.Z)(function*(){yield(0,ht.z)(r._heroService.updateHero(e)),r.setHero(e)})()}}return n.\u0275fac=function(e){return new(e||n)(o.LFG(Fn.E))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})();var En=l(9159);const On=[{path:":id",component:(()=>{class n{constructor(e,r){this._route=e,this._componentStore=r,this.hero$=this._componentStore.hero$}ngOnInit(){const e=Number(this._route.snapshot.paramMap.get("id"));this._componentStore.getHero(e)}updateHero(e){this._componentStore.updateHero(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(En.gz),o.Y36(ft))},n.\u0275cmp=o.Xpm({type:n,selectors:[["ng-component"]],standalone:!0,features:[o._Bn([ft]),o.jDz],decls:2,vars:3,consts:[[3,"hero","saveButtonClicked"]],template:function(e,r){1&e&&(o.TgZ(0,"app-ly-hero-detail",0),o.NdJ("saveButtonClicked",function(s){return r.updateHero(s)}),o.ALo(1,"async"),o.qZA()),2&e&&o.Q6J("hero",o.lcZ(1,1,r.hero$))},dependencies:[v.Ov,Mn],encapsulation:2}),n})()}]}}]);