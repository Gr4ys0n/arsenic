this.document={currentScript:{src:this.location.href}},function(){"use strict";var Kv=Object.defineProperty,Vv=(r,e,t)=>e in r?Kv(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,er=(r,e,t)=>(Vv(r,typeof e!="symbol"?e+"":e,t),t),El=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)},U=(r,e,t)=>(El(r,e,"read from private field"),t?t.call(r):e.get(r)),Ct=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},ct=(r,e,t,i)=>(El(r,e,"write to private field"),e.set(r,t),t),Dl=(r,e,t,i)=>({set _(n){ct(r,e,n)},get _(){return U(r,e,i)}}),rt=(r,e,t)=>(El(r,e,"access private method"),t),Og,io,Gi,mi,Ni,zi,no,Br,Ci,fr,_t,dt,ei,Bi,Xr,Qr,Yi,xr,Xi,ji,Ei,Ji,As,ti,DA,yl,qs,Hn,yA,Di,Il,Lg,_s,so,IA,hn,On,un,Ln,MA,Ml,Rg,ao,PA,oo,QA,jt,Wt,xA,Pl,$s,Ao;class Wv{constructor(){this.functions=new Map}getInitializer(){const e=this.functions;return function(){const t={};for(let[i,n]of e.entries())t[i]=function(...s){const a=n.transferrables?n.transferrables(...s):[];this.worker.postMessage({type:i,args:s},a)};return t}}}class Zv{constructor(){this.registrations=new Map}getOrCreateMetadata(e){return this.registrations.has(e)||this.registrations.set(e,new Wv),this.registrations.get(e)}get(e){const t=this.registrations.get(e);return t||console.error("Didn't work for class, ",e),t}}const Fg=new Zv;function ar(r){return function(e,t){const i=e.constructor;Fg.getOrCreateMetadata(i).functions.set(t,r||{})}}function qv(r){const e=Fg.getOrCreateMetadata(r).getInitializer();class t{constructor(n){this.worker=n,Object.assign(this,e())}}return t}function _v(r){r.Handles=qv(r)}const kg=new Map;function $v(r,e){self.postMessage({hostFunction:r,args:e})}function cs(r,e){if(kg.has(e))throw console.log(r),new Error("`key` is already taken for `name`, "+e);kg.set(e,r);function t(...i){$v(e,i||[])}return t}var Ql=function(r,e){return Ql=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Ql(r,e)};function ls(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ql(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function xl(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function bl(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),n,s=[],a;try{for(;(e===void 0||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(o){a={error:o}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(a)throw a.error}}return s}function Sl(r,e,t){if(arguments.length===2)for(var i=0,n=e.length,s;i<n;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return r.concat(s||Array.prototype.slice.call(e))}function Ki(r){return typeof r=="function"}function Tl(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Hl=Tl(function(r){return function(e){r(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(t,i){return i+1+") "+t.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Ol(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var bA=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,n,s;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var o=xl(a),A=o.next();!A.done;A=o.next()){var c=A.value;c.remove(this)}}catch(w){e={error:w}}finally{try{A&&!A.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}else a.remove(this);var l=this.initialTeardown;if(Ki(l))try{l()}catch(w){s=w instanceof Hl?w.errors:[w]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var u=xl(h),g=u.next();!g.done;g=u.next()){var p=g.value;try{Ng(p)}catch(w){s=s??[],w instanceof Hl?s=Sl(Sl([],bl(s)),bl(w.errors)):s.push(w)}}}catch(w){i={error:w}}finally{try{g&&!g.done&&(n=u.return)&&n.call(u)}finally{if(i)throw i.error}}}if(s)throw new Hl(s)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)Ng(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Ol(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&Ol(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),Ug=bA.EMPTY;function Gg(r){return r instanceof bA||r&&"closed"in r&&Ki(r.remove)&&Ki(r.add)&&Ki(r.unsubscribe)}function Ng(r){Ki(r)?r():r.unsubscribe()}var zg={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},em={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,Sl([r,e],bl(t)))},clearTimeout:function(r){return clearTimeout(r)},delegate:void 0};function tm(r){em.setTimeout(function(){throw r})}function Yg(){}function SA(r){r()}var Ll=function(r){ls(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,Gg(t)&&t.add(i)):i.destination=sm,i}return e.create=function(t,i,n){return new TA(t,i,n)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(bA),rm=Function.prototype.bind;function Rl(r,e){return rm.call(r,e)}var im=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){HA(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){HA(i)}else HA(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){HA(t)}},r}(),TA=function(r){ls(e,r);function e(t,i,n){var s=r.call(this)||this,a;if(Ki(t)||!t)a={next:t??void 0,error:i??void 0,complete:n??void 0};else{var o;s&&zg.useDeprecatedNextContext?(o=Object.create(t),o.unsubscribe=function(){return s.unsubscribe()},a={next:t.next&&Rl(t.next,o),error:t.error&&Rl(t.error,o),complete:t.complete&&Rl(t.complete,o)}):a=t}return s.destination=new im(a),s}return e}(Ll);function HA(r){tm(r)}function nm(r){throw r}var sm={closed:!0,next:Yg,error:nm,complete:Yg},am=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function om(r){return r}function Am(r){return r.length===0?om:r.length===1?r[0]:function(e){return r.reduce(function(t,i){return i(t)},e)}}var Xg=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var n=this,s=lm(e)?e:new TA(e,t,i);return SA(function(){var a=n,o=a.operator,A=a.source;s.add(o?o.call(s,A):A?n._subscribe(s):n._trySubscribe(s))}),s},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=jg(t),new t(function(n,s){var a=new TA({next:function(o){try{e(o)}catch(A){s(A),a.unsubscribe()}},error:s,complete:n});i.subscribe(a)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[am]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Am(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=jg(e),new e(function(i,n){var s;t.subscribe(function(a){return s=a},function(a){return n(a)},function(){return i(s)})})},r.create=function(e){return new r(e)},r}();function jg(r){var e;return(e=r??zg.Promise)!==null&&e!==void 0?e:Promise}function cm(r){return r&&Ki(r.next)&&Ki(r.error)&&Ki(r.complete)}function lm(r){return r&&r instanceof Ll||cm(r)&&Gg(r)}function hm(r){return Ki(r==null?void 0:r.lift)}function um(r){return function(e){if(hm(e))return e.lift(function(t){try{return r(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function gm(r,e,t,i,n){return new fm(r,e,t,i,n)}var fm=function(r){ls(e,r);function e(t,i,n,s,a,o){var A=r.call(this,t)||this;return A.onFinalize=a,A.shouldUnsubscribe=o,A._next=i?function(c){try{i(c)}catch(l){t.error(l)}}:r.prototype._next,A._error=s?function(c){try{s(c)}catch(l){t.error(l)}finally{this.unsubscribe()}}:r.prototype._error,A._complete=n?function(){try{n()}catch(c){t.error(c)}finally{this.unsubscribe()}}:r.prototype._complete,A}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;r.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(Ll),dm=Tl(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),hs=function(r){ls(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new Jg(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new dm},e.prototype.next=function(t){var i=this;SA(function(){var n,s;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var a=xl(i.currentObservers),o=a.next();!o.done;o=a.next()){var A=o.value;A.next(t)}}catch(c){n={error:c}}finally{try{o&&!o.done&&(s=a.return)&&s.call(a)}finally{if(n)throw n.error}}}})},e.prototype.error=function(t){var i=this;SA(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var n=i.observers;n.length;)n.shift().error(t)}})},e.prototype.complete=function(){var t=this;SA(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,n=this,s=n.hasError,a=n.isStopped,o=n.observers;return s||a?Ug:(this.currentObservers=null,o.push(t),new bA(function(){i.currentObservers=null,Ol(o,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,n=i.hasError,s=i.thrownError,a=i.isStopped;n?t.error(s):a&&t.complete()},e.prototype.asObservable=function(){var t=new Xg;return t.source=this,t},e.create=function(t,i){return new Jg(t,i)},e}(Xg),Jg=function(r){ls(e,r);function e(t,i){var n=r.call(this)||this;return n.destination=t,n.source=i,n}return e.prototype.next=function(t){var i,n;(n=(i=this.destination)===null||i===void 0?void 0:i.next)===null||n===void 0||n.call(i,t)},e.prototype.error=function(t){var i,n;(n=(i=this.destination)===null||i===void 0?void 0:i.error)===null||n===void 0||n.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,n;return(n=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&n!==void 0?n:Ug},e}(hs),Kg=function(r){ls(e,r);function e(t){var i=r.call(this)||this;return i._value=t,i}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var i=r.prototype._subscribe.call(this,t);return!i.closed&&t.next(this._value),i},e.prototype.getValue=function(){var t=this,i=t.hasError,n=t.thrownError,s=t._value;if(i)throw n;return this._throwIfClosed(),s},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(hs),Vg={now:function(){return(Vg.delegate||Date).now()},delegate:void 0},co=function(r){ls(e,r);function e(t,i,n){t===void 0&&(t=1/0),i===void 0&&(i=1/0),n===void 0&&(n=Vg);var s=r.call(this)||this;return s._bufferSize=t,s._windowTime=i,s._timestampProvider=n,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=i===1/0,s._bufferSize=Math.max(1,t),s._windowTime=Math.max(1,i),s}return e.prototype.next=function(t){var i=this,n=i.isStopped,s=i._buffer,a=i._infiniteTimeWindow,o=i._timestampProvider,A=i._windowTime;n||(s.push(t),!a&&s.push(o.now()+A)),this._trimBuffer(),r.prototype.next.call(this,t)},e.prototype._subscribe=function(t){this._throwIfClosed(),this._trimBuffer();for(var i=this._innerSubscribe(t),n=this,s=n._infiniteTimeWindow,a=n._buffer,o=a.slice(),A=0;A<o.length&&!t.closed;A+=s?1:2)t.next(o[A]);return this._checkFinalizedStatuses(t),i},e.prototype._trimBuffer=function(){var t=this,i=t._bufferSize,n=t._timestampProvider,s=t._buffer,a=t._infiniteTimeWindow,o=(a?1:2)*i;if(i<1/0&&o<s.length&&s.splice(0,s.length-o),!a){for(var A=n.now(),c=0,l=1;l<s.length&&s[l]<=A;l+=2)c=l;c&&s.splice(0,c+1)}},e}(hs),pm=Tl(function(r){return function(){r(this),this.name="EmptyError",this.message="no elements in sequence"}});function ea(r,e){return new Promise(function(t,i){var n=new TA({next:function(s){t(s),n.unsubscribe()},error:i,complete:function(){i(new pm)}});r.subscribe(n)})}function Wg(r,e){return um(function(t,i){var n=0;t.subscribe(gm(i,function(s){return r.call(e,s,n++)&&i.next(s)}))})}async function wm(r){const e=new r;e.initialize&&await e.initialize(),postMessage({readyMessage:!0}),onmessageerror=t=>{console.error(t)},onmessage=Qy(e)}/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const ta="169",vm=0,Zg=1,mm=2,qg=1,Cm=2,gn=3,Vi=0,dr=1,jr=2,ri=0,ra=1,_g=2,$g=3,ef=4,Bm=5,us=100,Em=101,Dm=102,ym=103,Im=104,Mm=200,Pm=201,Qm=202,xm=203,Fl=204,kl=205,bm=206,Sm=207,Tm=208,Hm=209,Om=210,Lm=211,Rm=212,Fm=213,km=214,Ul=0,Gl=1,Nl=2,ia=3,zl=4,Yl=5,Xl=6,jl=7,tf=0,Um=1,Gm=2,Rn=0,Nm=1,zm=2,Ym=3,Xm=4,jm=5,Jm=6,Km=7,rf=300,na=301,sa=302,Jl=303,Kl=304,OA=306,Vl=1e3,gs=1001,Wl=1002,ii=1003,Vm=1004,LA=1005,br=1006,Zl=1007,fs=1008,Fr=1009,nf=1010,sf=1011,lo=1012,ql=1013,Fn=1014,Wi=1015,aa=1016,_l=1017,$l=1018,ds=1020,af=35902,of=1021,Af=1022,bi=1023,cf=1024,lf=1025,oa=1026,ps=1027,eh=1028,th=1029,hf=1030,rh=1031,ih=1033,RA=33776,FA=33777,kA=33778,UA=33779,nh=35840,sh=35841,ah=35842,oh=35843,Ah=36196,ch=37492,lh=37496,hh=37808,uh=37809,gh=37810,fh=37811,dh=37812,ph=37813,wh=37814,vh=37815,mh=37816,Ch=37817,Bh=37818,Eh=37819,Dh=37820,yh=37821,GA=36492,Ih=36494,Mh=36495,uf=36283,Ph=36284,Qh=36285,xh=36286,ho=3200,bh=3201,Wm=0,Zm=1,Zi="",Yt="srgb",qi="srgb-linear",Sh="display-p3",NA="display-p3-linear",zA="linear",Zt="srgb",YA="rec709",XA="p3",Aa=7680,gf=519,qm=512,_m=513,$m=514,ff=515,eC=516,tC=517,rC=518,iC=519,df=35044,nC=35048,pf="300 es",fn=2e3,jA=2001;class dn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}}const kr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Th=Math.PI/180,Hh=180/Math.PI;function uo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kr[r&255]+kr[r>>8&255]+kr[r>>16&255]+kr[r>>24&255]+"-"+kr[e&255]+kr[e>>8&255]+"-"+kr[e>>16&15|64]+kr[e>>24&255]+"-"+kr[t&63|128]+kr[t>>8&255]+"-"+kr[t>>16&255]+kr[t>>24&255]+kr[i&255]+kr[i>>8&255]+kr[i>>16&255]+kr[i>>24&255]).toLowerCase()}function ni(r,e,t){return Math.max(e,Math.min(t,r))}function sC(r,e){return(r%e+e)%e}function Oh(r,e,t){return(1-t)*r+t*e}function go(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function si(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ni(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,i,n,s,a,o,A,c){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,A,c)}set(e,t,i,n,s,a,o,A,c){const l=this.elements;return l[0]=e,l[1]=n,l[2]=o,l[3]=t,l[4]=s,l[5]=A,l[6]=i,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],A=i[6],c=i[1],l=i[4],h=i[7],u=i[2],g=i[5],p=i[8],w=n[0],f=n[3],d=n[6],D=n[1],m=n[4],C=n[7],S=n[2],P=n[5],I=n[8];return s[0]=a*w+o*D+A*S,s[3]=a*f+o*m+A*P,s[6]=a*d+o*C+A*I,s[1]=c*w+l*D+h*S,s[4]=c*f+l*m+h*P,s[7]=c*d+l*C+h*I,s[2]=u*w+g*D+p*S,s[5]=u*f+g*m+p*P,s[8]=u*d+g*C+p*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],A=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-i*s*l+i*o*A+n*s*c-n*a*A}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],A=e[6],c=e[7],l=e[8],h=l*a-o*c,u=o*A-l*s,g=c*s-a*A,p=t*h+i*u+n*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/p;return e[0]=h*w,e[1]=(n*c-l*i)*w,e[2]=(o*i-n*a)*w,e[3]=u*w,e[4]=(l*t-n*A)*w,e[5]=(n*s-o*t)*w,e[6]=g*w,e[7]=(i*A-c*t)*w,e[8]=(a*t-i*s)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const A=Math.cos(s),c=Math.sin(s);return this.set(i*A,i*c,-i*(A*a+c*o)+a+e,-n*c,n*A,-n*(-c*a+A*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lh.makeScale(e,t)),this}rotate(e){return this.premultiply(Lh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lh=new mt;function wf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function JA(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function aC(){const r=JA("canvas");return r.style.display="block",r}const vf={};function KA(r){r in vf||(vf[r]=!0,console.warn(r))}function oC(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function AC(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cC(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mf=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cf=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fo={[qi]:{transfer:zA,primaries:YA,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Yt]:{transfer:Zt,primaries:YA,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[NA]:{transfer:zA,primaries:XA,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Cf),fromReference:r=>r.applyMatrix3(mf)},[Sh]:{transfer:Zt,primaries:XA,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Cf),fromReference:r=>r.applyMatrix3(mf).convertLinearToSRGB()}},lC=new Set([qi,NA]),Ht={enabled:!0,_workingColorSpace:qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!lC.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=fo[e].toReference,n=fo[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return fo[r].primaries},getTransfer:function(r){return r===Zi?zA:fo[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(fo[e].luminanceCoefficients)}};function ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rh(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let la;class hC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{la===void 0&&(la=JA("canvas")),la.width=e.width,la.height=e.height;const i=la.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=la}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=JA("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=ca(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ca(t[i]/255)*255):t[i]=ca(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uC=0;class Bf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uC++}),this.uuid=uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Fh(n[a].image)):s.push(Fh(n[a]))}else s=Fh(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Fh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hC.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gC=0;class pr extends dn{constructor(e=pr.DEFAULT_IMAGE,t=pr.DEFAULT_MAPPING,i=gs,n=gs,s=br,a=fs,o=bi,A=Fr,c=pr.DEFAULT_ANISOTROPY,l=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gC++}),this.uuid=uo(),this.name="",this.source=new Bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=A,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vl:e.x=e.x-Math.floor(e.x);break;case gs:e.x=e.x<0?0:1;break;case Wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vl:e.y=e.y-Math.floor(e.y);break;case gs:e.y=e.y<0?0:1;break;case Wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pr.DEFAULT_IMAGE=null,pr.DEFAULT_MAPPING=rf,pr.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,i=0,n=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const a=e.elements,o=a[0],A=a[4],c=a[8],l=a[1],h=a[5],u=a[9],g=a[2],p=a[6],w=a[10];if(Math.abs(A-l)<.01&&Math.abs(c-g)<.01&&Math.abs(u-p)<.01){if(Math.abs(A+l)<.1&&Math.abs(c+g)<.1&&Math.abs(u+p)<.1&&Math.abs(o+h+w-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const d=(o+1)/2,D=(h+1)/2,m=(w+1)/2,C=(A+l)/4,S=(c+g)/4,P=(u+p)/4;return d>D&&d>m?d<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(d),n=C/i,s=S/i):D>m?D<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(D),i=C/n,s=P/n):m<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(m),i=S/s,n=P/s),this.set(i,n,s,t),this}let f=Math.sqrt((p-u)*(p-u)+(c-g)*(c-g)+(l-A)*(l-A));return Math.abs(f)<.001&&(f=1),this.x=(p-u)/f,this.y=(c-g)/f,this.z=(l-A)/f,this.w=Math.acos((o+h+w-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fC extends dn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:br,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new pr(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends fC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ef extends pr{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ii,this.minFilter=ii,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dC extends pr{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ii,this.minFilter=ii,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class po{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let A=i[n+0],c=i[n+1],l=i[n+2],h=i[n+3];const u=s[a+0],g=s[a+1],p=s[a+2],w=s[a+3];if(o===0){e[t+0]=A,e[t+1]=c,e[t+2]=l,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=g,e[t+2]=p,e[t+3]=w;return}if(h!==w||A!==u||c!==g||l!==p){let f=1-o;const d=A*u+c*g+l*p+h*w,D=d>=0?1:-1,m=1-d*d;if(m>Number.EPSILON){const S=Math.sqrt(m),P=Math.atan2(S,d*D);f=Math.sin(f*P)/S,o=Math.sin(o*P)/S}const C=o*D;if(A=A*f+u*C,c=c*f+g*C,l=l*f+p*C,h=h*f+w*C,f===1-o){const S=1/Math.sqrt(A*A+c*c+l*l+h*h);A*=S,c*=S,l*=S,h*=S}}e[t]=A,e[t+1]=c,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],A=i[n+1],c=i[n+2],l=i[n+3],h=s[a],u=s[a+1],g=s[a+2],p=s[a+3];return e[t]=o*p+l*h+A*g-c*u,e[t+1]=A*p+l*u+c*h-o*g,e[t+2]=c*p+l*g+o*u-A*h,e[t+3]=l*p-o*h-A*u-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,A=Math.sin,c=o(i/2),l=o(n/2),h=o(s/2),u=A(i/2),g=A(n/2),p=A(s/2);switch(a){case"XYZ":this._x=u*l*h+c*g*p,this._y=c*g*h-u*l*p,this._z=c*l*p+u*g*h,this._w=c*l*h-u*g*p;break;case"YXZ":this._x=u*l*h+c*g*p,this._y=c*g*h-u*l*p,this._z=c*l*p-u*g*h,this._w=c*l*h+u*g*p;break;case"ZXY":this._x=u*l*h-c*g*p,this._y=c*g*h+u*l*p,this._z=c*l*p+u*g*h,this._w=c*l*h-u*g*p;break;case"ZYX":this._x=u*l*h-c*g*p,this._y=c*g*h+u*l*p,this._z=c*l*p-u*g*h,this._w=c*l*h+u*g*p;break;case"YZX":this._x=u*l*h+c*g*p,this._y=c*g*h+u*l*p,this._z=c*l*p-u*g*h,this._w=c*l*h-u*g*p;break;case"XZY":this._x=u*l*h-c*g*p,this._y=c*g*h-u*l*p,this._z=c*l*p+u*g*h,this._w=c*l*h+u*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],A=t[9],c=t[2],l=t[6],h=t[10],u=i+o+h;if(u>0){const g=.5/Math.sqrt(u+1);this._w=.25/g,this._x=(l-A)*g,this._y=(s-c)*g,this._z=(a-n)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(l-A)/g,this._x=.25*g,this._y=(n+a)/g,this._z=(s+c)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-c)/g,this._x=(n+a)/g,this._y=.25*g,this._z=(A+l)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-n)/g,this._x=(s+c)/g,this._y=(A+l)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ni(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,A=t._y,c=t._z,l=t._w;return this._x=i*l+a*o+n*c-s*A,this._y=n*l+a*A+s*o-i*c,this._z=s*l+a*c+i*A-n*o,this._w=a*l-i*o-n*A-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const A=1-o*o;if(A<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*i+t*this._x,this._y=g*n+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const c=Math.sqrt(A),l=Math.atan2(c,o),h=Math.sin((1-t)*l)/c,u=Math.sin(t*l)/c;return this._w=a*h+this._w*u,this._x=i*h+this._x*u,this._y=n*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Df.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,A=e.w,c=2*(a*n-o*i),l=2*(o*t-s*n),h=2*(s*i-a*t);return this.x=t+A*c+a*h-o*l,this.y=i+A*l+o*c-s*h,this.z=n+A*h+s*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,A=t.z;return this.x=n*A-s*o,this.y=s*a-i*A,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kh.copy(this).projectOnVector(e),this.sub(kh)}reflect(e){return this.sub(kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ni(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kh=new V,Df=new po;class pn{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),VA.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),VA.copy(i.boundingBox)),VA.applyMatrix4(e.matrixWorld),this.union(VA)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),WA.subVectors(this.max,wo),ha.subVectors(e.a,wo),ua.subVectors(e.b,wo),ga.subVectors(e.c,wo),kn.subVectors(ua,ha),Un.subVectors(ga,ua),ws.subVectors(ha,ga);let t=[0,-kn.z,kn.y,0,-Un.z,Un.y,0,-ws.z,ws.y,kn.z,0,-kn.x,Un.z,0,-Un.x,ws.z,0,-ws.x,-kn.y,kn.x,0,-Un.y,Un.x,0,-ws.y,ws.x,0];return!Uh(t,ha,ua,ga,WA)||(t=[1,0,0,0,1,0,0,0,1],!Uh(t,ha,ua,ga,WA))?!1:(ZA.crossVectors(kn,Un),t=[ZA.x,ZA.y,ZA.z],Uh(t,ha,ua,ga,WA))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new V,new V,new V,new V,new V,new V,new V,new V],Si=new V,VA=new pn,ha=new V,ua=new V,ga=new V,kn=new V,Un=new V,ws=new V,wo=new V,WA=new V,ZA=new V,vs=new V;function Uh(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){vs.fromArray(r,s);const o=n.x*Math.abs(vs.x)+n.y*Math.abs(vs.y)+n.z*Math.abs(vs.z),A=e.dot(vs),c=t.dot(vs),l=i.dot(vs);if(Math.max(-Math.max(A,c,l),Math.min(A,c,l))>o)return!1}return!0}const pC=new pn,vo=new V,Gh=new V;class yi{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):pC.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const t=vo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(vo,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(Gh)),this.expandByPoint(vo.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new V,Nh=new V,qA=new V,Gn=new V,zh=new V,_A=new V,Yh=new V;class Xh{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Nh.copy(e).add(t).multiplyScalar(.5),qA.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Nh);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qA),o=Gn.dot(this.direction),A=-Gn.dot(qA),c=Gn.lengthSq(),l=Math.abs(1-a*a);let h,u,g,p;if(l>0)if(h=a*A-o,u=a*o-A,p=s*l,h>=0)if(u>=-p)if(u<=p){const w=1/l;h*=w,u*=w,g=h*(h+a*u+2*o)+u*(a*h+u+2*A)+c}else u=s,h=Math.max(0,-(a*u+o)),g=-h*h+u*(u+2*A)+c;else u=-s,h=Math.max(0,-(a*u+o)),g=-h*h+u*(u+2*A)+c;else u<=-p?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-A),s),g=-h*h+u*(u+2*A)+c):u<=p?(h=0,u=Math.min(Math.max(-s,-A),s),g=u*(u+2*A)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-A),s),g=-h*h+u*(u+2*A)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),g=-h*h+u*(u+2*A)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Nh).addScaledVector(qA,u),g}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const i=vn.dot(this.direction),n=vn.dot(vn)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,A=i+a;return A<0?null:o<0?this.at(A,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,A;const c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),l>=0?(s=(e.min.y-u.y)*l,a=(e.max.y-u.y)*l):(s=(e.max.y-u.y)*l,a=(e.min.y-u.y)*l),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),h>=0?(o=(e.min.z-u.z)*h,A=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,A=(e.min.z-u.z)*h),i>A||o>n)||((o>i||i!==i)&&(i=o),(A<n||n!==n)&&(n=A),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,i,n,s){zh.subVectors(t,e),_A.subVectors(i,e),Yh.crossVectors(zh,_A);let a=this.direction.dot(Yh),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const A=o*this.direction.dot(_A.crossVectors(Gn,_A));if(A<0)return null;const c=o*this.direction.dot(zh.cross(Gn));if(c<0||A+c>a)return null;const l=-o*Gn.dot(Yh);return l<0?null:this.at(l/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,i,n,s,a,o,A,c,l,h,u,g,p,w,f){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,A,c,l,h,u,g,p,w,f)}set(e,t,i,n,s,a,o,A,c,l,h,u,g,p,w,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=n,d[1]=s,d[5]=a,d[9]=o,d[13]=A,d[2]=c,d[6]=l,d[10]=h,d[14]=u,d[3]=g,d[7]=p,d[11]=w,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/fa.setFromMatrixColumn(e,0).length(),s=1/fa.setFromMatrixColumn(e,1).length(),a=1/fa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),A=Math.cos(n),c=Math.sin(n),l=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*l,g=a*h,p=o*l,w=o*h;t[0]=A*l,t[4]=-A*h,t[8]=c,t[1]=g+p*c,t[5]=u-w*c,t[9]=-o*A,t[2]=w-u*c,t[6]=p+g*c,t[10]=a*A}else if(e.order==="YXZ"){const u=A*l,g=A*h,p=c*l,w=c*h;t[0]=u+w*o,t[4]=p*o-g,t[8]=a*c,t[1]=a*h,t[5]=a*l,t[9]=-o,t[2]=g*o-p,t[6]=w+u*o,t[10]=a*A}else if(e.order==="ZXY"){const u=A*l,g=A*h,p=c*l,w=c*h;t[0]=u-w*o,t[4]=-a*h,t[8]=p+g*o,t[1]=g+p*o,t[5]=a*l,t[9]=w-u*o,t[2]=-a*c,t[6]=o,t[10]=a*A}else if(e.order==="ZYX"){const u=a*l,g=a*h,p=o*l,w=o*h;t[0]=A*l,t[4]=p*c-g,t[8]=u*c+w,t[1]=A*h,t[5]=w*c+u,t[9]=g*c-p,t[2]=-c,t[6]=o*A,t[10]=a*A}else if(e.order==="YZX"){const u=a*A,g=a*c,p=o*A,w=o*c;t[0]=A*l,t[4]=w-u*h,t[8]=p*h+g,t[1]=h,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=g*h+p,t[10]=u-w*h}else if(e.order==="XZY"){const u=a*A,g=a*c,p=o*A,w=o*c;t[0]=A*l,t[4]=-h,t[8]=c*l,t[1]=u*h+w,t[5]=a*l,t[9]=g*h-p,t[2]=p*h-g,t[6]=o*l,t[10]=w*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wC,e,vC)}lookAt(e,t,i){const n=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Nn.crossVectors(i,gi),Nn.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Nn.crossVectors(i,gi)),Nn.normalize(),$A.crossVectors(gi,Nn),n[0]=Nn.x,n[4]=$A.x,n[8]=gi.x,n[1]=Nn.y,n[5]=$A.y,n[9]=gi.y,n[2]=Nn.z,n[6]=$A.z,n[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],A=i[8],c=i[12],l=i[1],h=i[5],u=i[9],g=i[13],p=i[2],w=i[6],f=i[10],d=i[14],D=i[3],m=i[7],C=i[11],S=i[15],P=n[0],I=n[4],O=n[8],z=n[12],v=n[1],M=n[5],H=n[9],y=n[13],x=n[2],R=n[6],T=n[10],F=n[14],X=n[3],J=n[7],K=n[11],L=n[15];return s[0]=a*P+o*v+A*x+c*X,s[4]=a*I+o*M+A*R+c*J,s[8]=a*O+o*H+A*T+c*K,s[12]=a*z+o*y+A*F+c*L,s[1]=l*P+h*v+u*x+g*X,s[5]=l*I+h*M+u*R+g*J,s[9]=l*O+h*H+u*T+g*K,s[13]=l*z+h*y+u*F+g*L,s[2]=p*P+w*v+f*x+d*X,s[6]=p*I+w*M+f*R+d*J,s[10]=p*O+w*H+f*T+d*K,s[14]=p*z+w*y+f*F+d*L,s[3]=D*P+m*v+C*x+S*X,s[7]=D*I+m*M+C*R+S*J,s[11]=D*O+m*H+C*T+S*K,s[15]=D*z+m*y+C*F+S*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],A=e[9],c=e[13],l=e[2],h=e[6],u=e[10],g=e[14],p=e[3],w=e[7],f=e[11],d=e[15];return p*(+s*A*h-n*c*h-s*o*u+i*c*u+n*o*g-i*A*g)+w*(+t*A*g-t*c*u+s*a*u-n*a*g+n*c*l-s*A*l)+f*(+t*c*h-t*o*g-s*a*h+i*a*g+s*o*l-i*c*l)+d*(-n*o*l-t*A*h+t*o*u+n*a*h-i*a*u+i*A*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],A=e[6],c=e[7],l=e[8],h=e[9],u=e[10],g=e[11],p=e[12],w=e[13],f=e[14],d=e[15],D=h*f*c-w*u*c+w*A*g-o*f*g-h*A*d+o*u*d,m=p*u*c-l*f*c-p*A*g+a*f*g+l*A*d-a*u*d,C=l*w*c-p*h*c+p*o*g-a*w*g-l*o*d+a*h*d,S=p*h*A-l*w*A-p*o*u+a*w*u+l*o*f-a*h*f,P=t*D+i*m+n*C+s*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=D*I,e[1]=(w*u*s-h*f*s-w*n*g+i*f*g+h*n*d-i*u*d)*I,e[2]=(o*f*s-w*A*s+w*n*c-i*f*c-o*n*d+i*A*d)*I,e[3]=(h*A*s-o*u*s-h*n*c+i*u*c+o*n*g-i*A*g)*I,e[4]=m*I,e[5]=(l*f*s-p*u*s+p*n*g-t*f*g-l*n*d+t*u*d)*I,e[6]=(p*A*s-a*f*s-p*n*c+t*f*c+a*n*d-t*A*d)*I,e[7]=(a*u*s-l*A*s+l*n*c-t*u*c-a*n*g+t*A*g)*I,e[8]=C*I,e[9]=(p*h*s-l*w*s-p*i*g+t*w*g+l*i*d-t*h*d)*I,e[10]=(a*w*s-p*o*s+p*i*c-t*w*c-a*i*d+t*o*d)*I,e[11]=(l*o*s-a*h*s-l*i*c+t*h*c+a*i*g-t*o*g)*I,e[12]=S*I,e[13]=(l*w*n-p*h*n+p*i*u-t*w*u-l*i*f+t*h*f)*I,e[14]=(p*o*n-a*w*n-p*i*A+t*w*A+a*i*f-t*o*f)*I,e[15]=(a*h*n-l*o*n+l*i*A-t*h*A-a*i*u+t*o*u)*I,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,A=e.z,c=s*a,l=s*o;return this.set(c*a+i,c*o-n*A,c*A+n*o,0,c*o+n*A,l*o+i,l*A-n*a,0,c*A-n*o,l*A+n*a,s*A*A+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,A=t._w,c=s+s,l=a+a,h=o+o,u=s*c,g=s*l,p=s*h,w=a*l,f=a*h,d=o*h,D=A*c,m=A*l,C=A*h,S=i.x,P=i.y,I=i.z;return n[0]=(1-(w+d))*S,n[1]=(g+C)*S,n[2]=(p-m)*S,n[3]=0,n[4]=(g-C)*P,n[5]=(1-(u+d))*P,n[6]=(f+D)*P,n[7]=0,n[8]=(p+m)*I,n[9]=(f-D)*I,n[10]=(1-(u+w))*I,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=fa.set(n[0],n[1],n[2]).length();const a=fa.set(n[4],n[5],n[6]).length(),o=fa.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Ti.copy(this);const A=1/s,c=1/a,l=1/o;return Ti.elements[0]*=A,Ti.elements[1]*=A,Ti.elements[2]*=A,Ti.elements[4]*=c,Ti.elements[5]*=c,Ti.elements[6]*=c,Ti.elements[8]*=l,Ti.elements[9]*=l,Ti.elements[10]*=l,t.setFromRotationMatrix(Ti),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=fn){const A=this.elements,c=2*s/(t-e),l=2*s/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n);let g,p;if(o===fn)g=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===jA)g=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return A[0]=c,A[4]=0,A[8]=h,A[12]=0,A[1]=0,A[5]=l,A[9]=u,A[13]=0,A[2]=0,A[6]=0,A[10]=g,A[14]=p,A[3]=0,A[7]=0,A[11]=-1,A[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=fn){const A=this.elements,c=1/(t-e),l=1/(i-n),h=1/(a-s),u=(t+e)*c,g=(i+n)*l;let p,w;if(o===fn)p=(a+s)*h,w=-2*h;else if(o===jA)p=s*h,w=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return A[0]=2*c,A[4]=0,A[8]=0,A[12]=-u,A[1]=0,A[5]=2*l,A[9]=0,A[13]=-g,A[2]=0,A[6]=0,A[10]=w,A[14]=-p,A[3]=0,A[7]=0,A[11]=0,A[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fa=new V,Ti=new Ut,wC=new V(0,0,0),vC=new V(1,1,1),Nn=new V,$A=new V,gi=new V,yf=new Ut,If=new po;class mn{constructor(e=0,t=0,i=0,n=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],A=n[1],c=n[5],l=n[9],h=n[2],u=n[6],g=n[10];switch(t){case"XYZ":this._y=Math.asin(ni(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ni(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(A,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ni(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(A,s));break;case"ZYX":this._y=Math.asin(-ni(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(A,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ni(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-ni(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-l,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return If.setFromEuler(this),this.setFromQuaternion(If,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mC=0;const Mf=new V,da=new po,Cn=new Ut,ec=new V,mo=new V,CC=new V,BC=new po,Pf=new V(1,0,0),Qf=new V(0,1,0),xf=new V(0,0,1),bf={type:"added"},EC={type:"removed"},pa={type:"childadded",child:null},Jh={type:"childremoved",child:null};class Ur extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mC++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ur.DEFAULT_UP.clone();const e=new V,t=new mn,i=new po,n=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ut},normalMatrix:{value:new mt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Ur.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(Pf,e)}rotateY(e){return this.rotateOnAxis(Qf,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return Mf.copy(e).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pf,e)}translateY(e){return this.translateOnAxis(Qf,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ec.copy(e):ec.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(mo,ec,this.up):Cn.lookAt(ec,mo,this.up),this.quaternion.setFromRotationMatrix(Cn),n&&(Cn.extractRotation(n.matrixWorld),da.setFromRotationMatrix(Cn),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bf),pa.child=e,this.dispatchEvent(pa),pa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(EC),Jh.child=e,this.dispatchEvent(Jh),Jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bf),pa.child=e,this.dispatchEvent(pa),pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,CC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,BC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,A){return o[A.uuid]===void 0&&(o[A.uuid]=A.toJSON(e)),A.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const A=o.shapes;if(Array.isArray(A))for(let c=0,l=A.length;c<l;c++){const h=A[c];s(e.shapes,h)}else s(e.shapes,A)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let A=0,c=this.material.length;A<c;A++)o.push(s(e.materials,this.material[A]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const A=this.animations[o];n.animations.push(s(e.animations,A))}}if(t){const o=a(e.geometries),A=a(e.materials),c=a(e.textures),l=a(e.images),h=a(e.shapes),u=a(e.skeletons),g=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),A.length>0&&(i.materials=A),c.length>0&&(i.textures=c),l.length>0&&(i.images=l),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),g.length>0&&(i.animations=g),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){const A=[];for(const c in o){const l=o[c];delete l.metadata,A.push(l)}return A}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Ur.DEFAULT_UP=new V(0,1,0),Ur.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new V,Bn=new V,Kh=new V,En=new V,wa=new V,va=new V,Sf=new V,Vh=new V,Wh=new V,Zh=new V,qh=new qt,_h=new qt,$h=new qt;class Oi{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Hi.subVectors(e,t),n.cross(Hi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Hi.subVectors(n,t),Bn.subVectors(i,t),Kh.subVectors(e,t);const a=Hi.dot(Hi),o=Hi.dot(Bn),A=Hi.dot(Kh),c=Bn.dot(Bn),l=Bn.dot(Kh),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,g=(c*A-o*l)*u,p=(a*l-o*A)*u;return s.set(1-g-p,p,g)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,n,s,a,o,A){return this.getBarycoord(e,t,i,n,En)===null?(A.x=0,A.y=0,"z"in A&&(A.z=0),"w"in A&&(A.w=0),null):(A.setScalar(0),A.addScaledVector(s,En.x),A.addScaledVector(a,En.y),A.addScaledVector(o,En.z),A)}static getInterpolatedAttribute(e,t,i,n,s,a){return qh.setScalar(0),_h.setScalar(0),$h.setScalar(0),qh.fromBufferAttribute(e,t),_h.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(qh,s.x),a.addScaledVector(_h,s.y),a.addScaledVector($h,s.z),a}static isFrontFacing(e,t,i,n){return Hi.subVectors(i,t),Bn.subVectors(e,t),Hi.cross(Bn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),Hi.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return Oi.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;wa.subVectors(n,i),va.subVectors(s,i),Vh.subVectors(e,i);const A=wa.dot(Vh),c=va.dot(Vh);if(A<=0&&c<=0)return t.copy(i);Wh.subVectors(e,n);const l=wa.dot(Wh),h=va.dot(Wh);if(l>=0&&h<=l)return t.copy(n);const u=A*h-l*c;if(u<=0&&A>=0&&l<=0)return a=A/(A-l),t.copy(i).addScaledVector(wa,a);Zh.subVectors(e,s);const g=wa.dot(Zh),p=va.dot(Zh);if(p>=0&&g<=p)return t.copy(s);const w=g*c-A*p;if(w<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(va,o);const f=l*p-g*h;if(f<=0&&h-l>=0&&g-p>=0)return Sf.subVectors(s,n),o=(h-l)/(h-l+(g-p)),t.copy(n).addScaledVector(Sf,o);const d=1/(f+w+u);return a=w*d,o=u*d,t.copy(i).addScaledVector(wa,a).addScaledVector(va,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},tc={h:0,s:0,l:0};function eu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ht.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ht.workingColorSpace){if(e=sC(e,1),t=ni(t,0,1),i=ni(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=eu(a,s,e+1/3),this.g=eu(a,s,e),this.b=eu(a,s,e-1/3)}return Ht.toWorkingColorSpace(this,n),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=Tf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=Rh(e.r),this.g=Rh(e.g),this.b=Rh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Ht.fromWorkingColorSpace(Gr.copy(this),e),Math.round(ni(Gr.r*255,0,255))*65536+Math.round(ni(Gr.g*255,0,255))*256+Math.round(ni(Gr.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Gr.copy(this),t);const i=Gr.r,n=Gr.g,s=Gr.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let A,c;const l=(o+a)/2;if(o===a)A=0,c=0;else{const h=a-o;switch(c=l<=.5?h/(a+o):h/(2-a-o),a){case i:A=(n-s)/h+(n<s?6:0);break;case n:A=(s-i)/h+2;break;case s:A=(i-n)/h+4;break}A/=6}return e.h=A,e.s=c,e.l=l,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Gr.copy(this),t),e.r=Gr.r,e.g=Gr.g,e.b=Gr.b,e}getStyle(e=Yt){Ht.fromWorkingColorSpace(Gr.copy(this),e);const t=Gr.r,i=Gr.g,n=Gr.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(tc);const i=Oh(zn.h,tc.h,t),n=Oh(zn.s,tc.s,t),s=Oh(zn.l,tc.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gr=new ot;ot.NAMES=Tf;let DC=0;class ms extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DC++}),this.uuid=uo(),this.name="",this.type="Material",this.blending=ra,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=kl,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==kl&&(i.blendDst=this.blendDst),this.blendEquation!==us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Aa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Aa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Aa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const A=s[o];delete A.metadata,a.push(A)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yn extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hr=new V,rc=new at;class Kr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=df,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rc.fromBufferAttribute(this,t),rc.applyMatrix3(e),this.setXY(t,rc.x,rc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=go(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=go(t,this.array)),t}setX(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=go(t,this.array)),t}setY(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=go(t,this.array)),t}setW(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),i=si(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),i=si(i,this.array),n=si(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),i=si(i,this.array),n=si(n,this.array),s=si(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==df&&(e.usage=this.usage),e}}class Hf extends Kr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Of extends Kr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ir extends Kr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yC=0;const Ii=new Ut,tu=new Ur,ma=new V,fi=new pn,Co=new pn,Er=new V;class Nr extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yC++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wf(e)?Of:Hf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new mt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,i){return Ii.makeTranslation(e,t,i),this.applyMatrix4(Ii),this}scale(e,t,i){return Ii.makeScale(e,t,i),this.applyMatrix4(Ii),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ir(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(Er.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Er),Er.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Er)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Co.setFromBufferAttribute(o),this.morphTargetsRelative?(Er.addVectors(fi.min,Co.min),fi.expandByPoint(Er),Er.addVectors(fi.max,Co.max),fi.expandByPoint(Er)):(fi.expandByPoint(Co.min),fi.expandByPoint(Co.max))}fi.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Er.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Er));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],A=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)Er.fromBufferAttribute(o,c),A&&(ma.fromBufferAttribute(e,c),Er.add(ma)),n=Math.max(n,i.distanceToSquared(Er))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kr(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],A=[];for(let O=0;O<i.count;O++)o[O]=new V,A[O]=new V;const c=new V,l=new V,h=new V,u=new at,g=new at,p=new at,w=new V,f=new V;function d(O,z,v){c.fromBufferAttribute(i,O),l.fromBufferAttribute(i,z),h.fromBufferAttribute(i,v),u.fromBufferAttribute(s,O),g.fromBufferAttribute(s,z),p.fromBufferAttribute(s,v),l.sub(c),h.sub(c),g.sub(u),p.sub(u);const M=1/(g.x*p.y-p.x*g.y);isFinite(M)&&(w.copy(l).multiplyScalar(p.y).addScaledVector(h,-g.y).multiplyScalar(M),f.copy(h).multiplyScalar(g.x).addScaledVector(l,-p.x).multiplyScalar(M),o[O].add(w),o[z].add(w),o[v].add(w),A[O].add(f),A[z].add(f),A[v].add(f))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let O=0,z=D.length;O<z;++O){const v=D[O],M=v.start,H=v.count;for(let y=M,x=M+H;y<x;y+=3)d(e.getX(y+0),e.getX(y+1),e.getX(y+2))}const m=new V,C=new V,S=new V,P=new V;function I(O){S.fromBufferAttribute(n,O),P.copy(S);const z=o[O];m.copy(z),m.sub(S.multiplyScalar(S.dot(z))).normalize(),C.crossVectors(P,z);const v=C.dot(A[O])<0?-1:1;a.setXYZW(O,m.x,m.y,m.z,v)}for(let O=0,z=D.length;O<z;++O){const v=D[O],M=v.start,H=v.count;for(let y=M,x=M+H;y<x;y+=3)I(e.getX(y+0)),I(e.getX(y+1)),I(e.getX(y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,g=i.count;u<g;u++)i.setXYZ(u,0,0,0);const n=new V,s=new V,a=new V,o=new V,A=new V,c=new V,l=new V,h=new V;if(e)for(let u=0,g=e.count;u<g;u+=3){const p=e.getX(u+0),w=e.getX(u+1),f=e.getX(u+2);n.fromBufferAttribute(t,p),s.fromBufferAttribute(t,w),a.fromBufferAttribute(t,f),l.subVectors(a,s),h.subVectors(n,s),l.cross(h),o.fromBufferAttribute(i,p),A.fromBufferAttribute(i,w),c.fromBufferAttribute(i,f),o.add(l),A.add(l),c.add(l),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(w,A.x,A.y,A.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,g=t.count;u<g;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),l.subVectors(a,s),h.subVectors(n,s),l.cross(h),i.setXYZ(u+0,l.x,l.y,l.z),i.setXYZ(u+1,l.x,l.y,l.z),i.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Er.fromBufferAttribute(e,t),Er.normalize(),e.setXYZ(t,Er.x,Er.y,Er.z)}toNonIndexed(){function e(o,A){const c=o.array,l=o.itemSize,h=o.normalized,u=new c.constructor(A.length*l);let g=0,p=0;for(let w=0,f=A.length;w<f;w++){o.isInterleavedBufferAttribute?g=A[w]*o.data.stride+o.offset:g=A[w]*l;for(let d=0;d<l;d++)u[p++]=c[g++]}return new Kr(u,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nr,i=this.index.array,n=this.attributes;for(const o in n){const A=n[o],c=e(A,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const A=[],c=s[o];for(let l=0,h=c.length;l<h;l++){const u=c[l],g=e(u,i);A.push(g)}t.morphAttributes[o]=A}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,A=a.length;o<A;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const A=this.parameters;for(const c in A)A[c]!==void 0&&(e[c]=A[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const A in i){const c=i[A];e.data.attributes[A]=c.toJSON(e.data)}const n={};let s=!1;for(const A in this.morphAttributes){const c=this.morphAttributes[A],l=[];for(let h=0,u=c.length;h<u;h++){const g=c[h];l.push(g.toJSON(e.data))}l.length>0&&(n[A]=l,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const l=n[c];this.setAttribute(c,l.clone(t))}const s=e.morphAttributes;for(const c in s){const l=[],h=s[c];for(let u=0,g=h.length;u<g;u++)l.push(h[u].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,l=a.length;c<l;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const A=e.boundingSphere;return A!==null&&(this.boundingSphere=A.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lf=new Ut,Cs=new Xh,ic=new yi,Rf=new V,nc=new V,sc=new V,ac=new V,ru=new V,oc=new V,Ff=new V,Ac=new V;class nr extends Ur{constructor(e=new Nr,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){oc.set(0,0,0);for(let A=0,c=s.length;A<c;A++){const l=o[A],h=s[A];l!==0&&(ru.fromBufferAttribute(h,e),a?oc.addScaledVector(ru,l):oc.addScaledVector(ru.sub(t),l))}t.add(oc)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(s),Cs.copy(e.ray).recast(e.near),!(ic.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(ic,Rf)===null||Cs.origin.distanceToSquared(Rf)>(e.far-e.near)**2))&&(Lf.copy(s).invert(),Cs.copy(e.ray).applyMatrix4(Lf),!(i.boundingBox!==null&&Cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,i){let n;const s=this.geometry,a=this.material,o=s.index,A=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,h=s.attributes.normal,u=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,w=u.length;p<w;p++){const f=u[p],d=a[f.materialIndex],D=Math.max(f.start,g.start),m=Math.min(o.count,Math.min(f.start+f.count,g.start+g.count));for(let C=D,S=m;C<S;C+=3){const P=o.getX(C),I=o.getX(C+1),O=o.getX(C+2);n=cc(this,d,e,i,c,l,h,P,I,O),n&&(n.faceIndex=Math.floor(C/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const p=Math.max(0,g.start),w=Math.min(o.count,g.start+g.count);for(let f=p,d=w;f<d;f+=3){const D=o.getX(f),m=o.getX(f+1),C=o.getX(f+2);n=cc(this,a,e,i,c,l,h,D,m,C),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(A!==void 0)if(Array.isArray(a))for(let p=0,w=u.length;p<w;p++){const f=u[p],d=a[f.materialIndex],D=Math.max(f.start,g.start),m=Math.min(A.count,Math.min(f.start+f.count,g.start+g.count));for(let C=D,S=m;C<S;C+=3){const P=C,I=C+1,O=C+2;n=cc(this,d,e,i,c,l,h,P,I,O),n&&(n.faceIndex=Math.floor(C/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const p=Math.max(0,g.start),w=Math.min(A.count,g.start+g.count);for(let f=p,d=w;f<d;f+=3){const D=f,m=f+1,C=f+2;n=cc(this,a,e,i,c,l,h,D,m,C),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}}function IC(r,e,t,i,n,s,a,o){let A;if(e.side===dr?A=i.intersectTriangle(a,s,n,!0,o):A=i.intersectTriangle(n,s,a,e.side===Vi,o),A===null)return null;Ac.copy(o),Ac.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ac);return c<t.near||c>t.far?null:{distance:c,point:Ac.clone(),object:r}}function cc(r,e,t,i,n,s,a,o,A,c){r.getVertexPosition(o,nc),r.getVertexPosition(A,sc),r.getVertexPosition(c,ac);const l=IC(r,e,t,i,nc,sc,ac,Ff);if(l){const h=new V;Oi.getBarycoord(Ff,nc,sc,ac,h),n&&(l.uv=Oi.getInterpolatedAttribute(n,o,A,c,h,new at)),s&&(l.uv1=Oi.getInterpolatedAttribute(s,o,A,c,h,new at)),a&&(l.normal=Oi.getInterpolatedAttribute(a,o,A,c,h,new V),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const u={a:o,b:A,c,normal:new V,materialIndex:0};Oi.getNormal(nc,sc,ac,u.normal),l.face=u,l.barycoord=h}return l}class Dn extends Nr{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const A=[],c=[],l=[],h=[];let u=0,g=0;p("z","y","x",-1,-1,i,t,e,a,s,0),p("z","y","x",1,-1,i,t,-e,a,s,1),p("x","z","y",1,1,e,i,t,n,a,2),p("x","z","y",1,-1,e,i,-t,n,a,3),p("x","y","z",1,-1,e,t,i,n,s,4),p("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(A),this.setAttribute("position",new ir(c,3)),this.setAttribute("normal",new ir(l,3)),this.setAttribute("uv",new ir(h,2));function p(w,f,d,D,m,C,S,P,I,O,z){const v=C/I,M=S/O,H=C/2,y=S/2,x=P/2,R=I+1,T=O+1;let F=0,X=0;const J=new V;for(let K=0;K<T;K++){const L=K*M-y;for(let j=0;j<R;j++){const se=j*v-H;J[w]=se*D,J[f]=L*m,J[d]=x,c.push(J.x,J.y,J.z),J[w]=0,J[f]=0,J[d]=P>0?1:-1,l.push(J.x,J.y,J.z),h.push(j/I),h.push(1-K/O),F+=1}}for(let K=0;K<O;K++)for(let L=0;L<I;L++){const j=u+L+R*K,se=u+L+R*(K+1),k=u+(L+1)+R*(K+1),N=u+(L+1)+R*K;A.push(j,se,N),A.push(se,k,N),X+=6}o.addGroup(g,X,z),g+=X,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ca(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Vr(r){const e={};for(let t=0;t<r.length;t++){const i=Ca(r[t]);for(const n in i)e[n]=i[n]}return e}function MC(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function kf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const iu={clone:Ca,merge:Vr};var PC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PC,this.fragmentShader=QC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ca(e.uniforms),this.uniformsGroups=MC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nu extends Ur{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new V,Uf=new at,Gf=new at;class di extends nu{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(Th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Uf,Gf),t.subVectors(Gf,Uf)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Th*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const A=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/A,t-=a.offsetY*i/c,n*=a.width/A,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ba=-90,Ea=1;class xC extends Ur{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new di(Ba,Ea,e,t);n.layers=this.layers,this.add(n);const s=new di(Ba,Ea,e,t);s.layers=this.layers,this.add(s);const a=new di(Ba,Ea,e,t);a.layers=this.layers,this.add(a);const o=new di(Ba,Ea,e,t);o.layers=this.layers,this.add(o);const A=new di(Ba,Ea,e,t);A.layers=this.layers,this.add(A);const c=new di(Ba,Ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,A]=t;for(const c of t)this.remove(c);if(e===fn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),A.up.set(0,1,0),A.lookAt(0,0,-1);else if(e===jA)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),A.up.set(0,-1,0),A.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,A,c,l]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,A),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,n),e.render(t,l),e.setRenderTarget(h,u,g),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Nf extends pr{constructor(e,t,i,n,s,a,o,A,c,l){e=e!==void 0?e:[],t=t!==void 0?t:na,super(e,t,i,n,s,a,o,A,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bC extends Jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Nf(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:br}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Dn(5,5,5),s=new Dr({name:"CubemapFromEquirect",uniforms:Ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dr,blending:ri});s.uniforms.tEquirect.value=t;const a=new nr(n,s),o=t.minFilter;return t.minFilter===fs&&(t.minFilter=br),new xC(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}const su=new V,SC=new V,TC=new mt;class yn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=su.subVectors(i,t).cross(SC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(su),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||TC.getNormalMatrix(e),n=this.coplanarPoint(su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new yi,lc=new V;class hc{constructor(e=new yn,t=new yn,i=new yn,n=new yn,s=new yn,a=new yn){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fn){const i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],A=n[3],c=n[4],l=n[5],h=n[6],u=n[7],g=n[8],p=n[9],w=n[10],f=n[11],d=n[12],D=n[13],m=n[14],C=n[15];if(i[0].setComponents(A-s,u-c,f-g,C-d).normalize(),i[1].setComponents(A+s,u+c,f+g,C+d).normalize(),i[2].setComponents(A+a,u+l,f+p,C+D).normalize(),i[3].setComponents(A-a,u-l,f-p,C-D).normalize(),i[4].setComponents(A-o,u-h,f-w,C-m).normalize(),t===fn)i[5].setComponents(A+o,u+h,f+w,C+m).normalize();else if(t===jA)i[5].setComponents(o,h,w,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){return Bs.center.set(0,0,0),Bs.radius=.7071067811865476,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(lc.x=n.normal.x>0?e.max.x:e.min.x,lc.y=n.normal.y>0?e.max.y:e.min.y,lc.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zf(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function HC(r){const e=new WeakMap;function t(o,A){const c=o.array,l=o.usage,h=c.byteLength,u=r.createBuffer();r.bindBuffer(A,u),r.bufferData(A,c,l),o.onUploadCallback();let g;if(c instanceof Float32Array)g=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=r.SHORT;else if(c instanceof Uint32Array)g=r.UNSIGNED_INT;else if(c instanceof Int32Array)g=r.INT;else if(c instanceof Int8Array)g=r.BYTE;else if(c instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,A,c){const l=A.array,h=A.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,l);else{h.sort((g,p)=>g.start-p.start);let u=0;for(let g=1;g<h.length;g++){const p=h[u],w=h[g];w.start<=p.start+p.count+1?p.count=Math.max(p.count,w.start+w.count-p.start):(++u,h[u]=w)}h.length=u+1;for(let g=0,p=h.length;g<p;g++){const w=h[g];r.bufferSubData(c,w.start*l.BYTES_PER_ELEMENT,l,w.start,w.count)}A.clearUpdateRanges()}A.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const A=e.get(o);A&&(r.deleteBuffer(A.buffer),e.delete(o))}function a(o,A){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,A));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,A),c.version=o.version}}return{get:n,remove:s,update:a}}class Es extends Nr{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),A=Math.floor(n),c=o+1,l=A+1,h=e/o,u=t/A,g=[],p=[],w=[],f=[];for(let d=0;d<l;d++){const D=d*u-a;for(let m=0;m<c;m++){const C=m*h-s;p.push(C,-D,0),w.push(0,0,1),f.push(m/o),f.push(1-d/A)}}for(let d=0;d<A;d++)for(let D=0;D<o;D++){const m=D+c*d,C=D+c*(d+1),S=D+1+c*(d+1),P=D+1+c*d;g.push(m,C,P),g.push(C,S,P)}this.setIndex(g),this.setAttribute("position",new ir(p,3)),this.setAttribute("normal",new ir(w,3)),this.setAttribute("uv",new ir(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}var OC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,KC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ZC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_C=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$C=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eB=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tB=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rB=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iB=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nB=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sB=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aB=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oB=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AB=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cB=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lB="gl_FragColor = linearToOutputTexel( gl_FragColor );",hB=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uB=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gB=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fB=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dB=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pB=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wB=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vB=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mB=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CB=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BB=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EB=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DB=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yB=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IB=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MB=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PB=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QB=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xB=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bB=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SB=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TB=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HB=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OB=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LB=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RB=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FB=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kB=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UB=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GB=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NB=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zB=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YB=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XB=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jB=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JB=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KB=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VB=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WB=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZB=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qB=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_B=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$B=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ME=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_E=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wt={alphahash_fragment:OC,alphahash_pars_fragment:LC,alphamap_fragment:RC,alphamap_pars_fragment:FC,alphatest_fragment:kC,alphatest_pars_fragment:UC,aomap_fragment:GC,aomap_pars_fragment:NC,batching_pars_vertex:zC,batching_vertex:YC,begin_vertex:XC,beginnormal_vertex:jC,bsdfs:JC,iridescence_fragment:KC,bumpmap_pars_fragment:VC,clipping_planes_fragment:WC,clipping_planes_pars_fragment:ZC,clipping_planes_pars_vertex:qC,clipping_planes_vertex:_C,color_fragment:$C,color_pars_fragment:eB,color_pars_vertex:tB,color_vertex:rB,common:iB,cube_uv_reflection_fragment:nB,defaultnormal_vertex:sB,displacementmap_pars_vertex:aB,displacementmap_vertex:oB,emissivemap_fragment:AB,emissivemap_pars_fragment:cB,colorspace_fragment:lB,colorspace_pars_fragment:hB,envmap_fragment:uB,envmap_common_pars_fragment:gB,envmap_pars_fragment:fB,envmap_pars_vertex:dB,envmap_physical_pars_fragment:MB,envmap_vertex:pB,fog_vertex:wB,fog_pars_vertex:vB,fog_fragment:mB,fog_pars_fragment:CB,gradientmap_pars_fragment:BB,lightmap_pars_fragment:EB,lights_lambert_fragment:DB,lights_lambert_pars_fragment:yB,lights_pars_begin:IB,lights_toon_fragment:PB,lights_toon_pars_fragment:QB,lights_phong_fragment:xB,lights_phong_pars_fragment:bB,lights_physical_fragment:SB,lights_physical_pars_fragment:TB,lights_fragment_begin:HB,lights_fragment_maps:OB,lights_fragment_end:LB,logdepthbuf_fragment:RB,logdepthbuf_pars_fragment:FB,logdepthbuf_pars_vertex:kB,logdepthbuf_vertex:UB,map_fragment:GB,map_pars_fragment:NB,map_particle_fragment:zB,map_particle_pars_fragment:YB,metalnessmap_fragment:XB,metalnessmap_pars_fragment:jB,morphinstance_vertex:JB,morphcolor_vertex:KB,morphnormal_vertex:VB,morphtarget_pars_vertex:WB,morphtarget_vertex:ZB,normal_fragment_begin:qB,normal_fragment_maps:_B,normal_pars_fragment:$B,normal_pars_vertex:eE,normal_vertex:tE,normalmap_pars_fragment:rE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:sE,iridescence_pars_fragment:aE,opaque_fragment:oE,packing:AE,premultiplied_alpha_fragment:cE,project_vertex:lE,dithering_fragment:hE,dithering_pars_fragment:uE,roughnessmap_fragment:gE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:pE,shadowmap_vertex:wE,shadowmask_pars_fragment:vE,skinbase_vertex:mE,skinning_pars_vertex:CE,skinning_vertex:BE,skinnormal_vertex:EE,specularmap_fragment:DE,specularmap_pars_fragment:yE,tonemapping_fragment:IE,tonemapping_pars_fragment:ME,transmission_fragment:PE,transmission_pars_fragment:QE,uv_pars_fragment:xE,uv_pars_vertex:bE,uv_vertex:SE,worldpos_vertex:TE,background_vert:HE,background_frag:OE,backgroundCube_vert:LE,backgroundCube_frag:RE,cube_vert:FE,cube_frag:kE,depth_vert:UE,depth_frag:GE,distanceRGBA_vert:NE,distanceRGBA_frag:zE,equirect_vert:YE,equirect_frag:XE,linedashed_vert:jE,linedashed_frag:JE,meshbasic_vert:KE,meshbasic_frag:VE,meshlambert_vert:WE,meshlambert_frag:ZE,meshmatcap_vert:qE,meshmatcap_frag:_E,meshnormal_vert:$E,meshnormal_frag:eD,meshphong_vert:tD,meshphong_frag:rD,meshphysical_vert:iD,meshphysical_frag:nD,meshtoon_vert:sD,meshtoon_frag:aD,points_vert:oD,points_frag:AD,shadow_vert:cD,shadow_frag:lD,sprite_vert:hD,sprite_frag:uD},Ne={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Li={basic:{uniforms:Vr([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Vr([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ot(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Vr([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Vr([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Vr([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new ot(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Vr([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Vr([Ne.points,Ne.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Vr([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Vr([Ne.common,Ne.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Vr([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Vr([Ne.sprite,Ne.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:Vr([Ne.common,Ne.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:Vr([Ne.lights,Ne.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Li.physical={uniforms:Vr([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const uc={r:0,b:0,g:0},Ds=new mn,gD=new Ut;function fD(r,e,t,i,n,s,a){const o=new ot(0);let A=s===!0?0:1,c,l,h=null,u=0,g=null;function p(D){let m=D.isScene===!0?D.background:null;return m&&m.isTexture&&(m=(D.backgroundBlurriness>0?t:e).get(m)),m}function w(D){let m=!1;const C=p(D);C===null?d(o,A):C&&C.isColor&&(d(C,1),m=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||m)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(D,m){const C=p(m);C&&(C.isCubeTexture||C.mapping===OA)?(l===void 0&&(l=new nr(new Dn(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Ca(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Ds.copy(m.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),l.material.uniforms.envMap.value=C,l.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(gD.makeRotationFromEuler(Ds)),l.material.toneMapped=Ht.getTransfer(C.colorSpace)!==Zt,(h!==C||u!==C.version||g!==r.toneMapping)&&(l.material.needsUpdate=!0,h=C,u=C.version,g=r.toneMapping),l.layers.enableAll(),D.unshift(l,l.geometry,l.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new nr(new Es(2,2),new Dr({name:"BackgroundMaterial",uniforms:Ca(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(C.colorSpace)!==Zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||u!==C.version||g!==r.toneMapping)&&(c.material.needsUpdate=!0,h=C,u=C.version,g=r.toneMapping),c.layers.enableAll(),D.unshift(c,c.geometry,c.material,0,0,null))}function d(D,m){D.getRGB(uc,kf(r)),i.buffers.color.setClear(uc.r,uc.g,uc.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(D,m=1){o.set(D),A=m,d(o,A)},getClearAlpha:function(){return A},setClearAlpha:function(D){A=D,d(o,A)},render:w,addToRenderList:f}}function dD(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,a=!1;function o(v,M,H,y,x){let R=!1;const T=h(y,H,M);s!==T&&(s=T,c(s.object)),R=g(v,y,H,x),R&&p(v,y,H,x),x!==null&&e.update(x,r.ELEMENT_ARRAY_BUFFER),(R||a)&&(a=!1,C(v,M,H,y),x!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(x).buffer))}function A(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function l(v){return r.deleteVertexArray(v)}function h(v,M,H){const y=H.wireframe===!0;let x=i[v.id];x===void 0&&(x={},i[v.id]=x);let R=x[M.id];R===void 0&&(R={},x[M.id]=R);let T=R[y];return T===void 0&&(T=u(A()),R[y]=T),T}function u(v){const M=[],H=[],y=[];for(let x=0;x<t;x++)M[x]=0,H[x]=0,y[x]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:H,attributeDivisors:y,object:v,attributes:{},index:null}}function g(v,M,H,y){const x=s.attributes,R=M.attributes;let T=0;const F=H.getAttributes();for(const X in F)if(F[X].location>=0){const J=x[X];let K=R[X];if(K===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),J===void 0||J.attribute!==K||K&&J.data!==K.data)return!0;T++}return s.attributesNum!==T||s.index!==y}function p(v,M,H,y){const x={},R=M.attributes;let T=0;const F=H.getAttributes();for(const X in F)if(F[X].location>=0){let J=R[X];J===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(J=v.instanceColor));const K={};K.attribute=J,J&&J.data&&(K.data=J.data),x[X]=K,T++}s.attributes=x,s.attributesNum=T,s.index=y}function w(){const v=s.newAttributes;for(let M=0,H=v.length;M<H;M++)v[M]=0}function f(v){d(v,0)}function d(v,M){const H=s.newAttributes,y=s.enabledAttributes,x=s.attributeDivisors;H[v]=1,y[v]===0&&(r.enableVertexAttribArray(v),y[v]=1),x[v]!==M&&(r.vertexAttribDivisor(v,M),x[v]=M)}function D(){const v=s.newAttributes,M=s.enabledAttributes;for(let H=0,y=M.length;H<y;H++)M[H]!==v[H]&&(r.disableVertexAttribArray(H),M[H]=0)}function m(v,M,H,y,x,R,T){T===!0?r.vertexAttribIPointer(v,M,H,x,R):r.vertexAttribPointer(v,M,H,y,x,R)}function C(v,M,H,y){w();const x=y.attributes,R=H.getAttributes(),T=M.defaultAttributeValues;for(const F in R){const X=R[F];if(X.location>=0){let J=x[F];if(J===void 0&&(F==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),F==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const K=J.normalized,L=J.itemSize,j=e.get(J);if(j===void 0)continue;const se=j.buffer,k=j.type,N=j.bytesPerElement,oe=k===r.INT||k===r.UNSIGNED_INT||J.gpuType===ql;if(J.isInterleavedBufferAttribute){const ee=J.data,ue=ee.stride,pe=J.offset;if(ee.isInstancedInterleavedBuffer){for(let xe=0;xe<X.locationSize;xe++)d(X.location+xe,ee.meshPerAttribute);v.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let xe=0;xe<X.locationSize;xe++)f(X.location+xe);r.bindBuffer(r.ARRAY_BUFFER,se);for(let xe=0;xe<X.locationSize;xe++)m(X.location+xe,L/X.locationSize,k,K,ue*N,(pe+L/X.locationSize*xe)*N,oe)}else{if(J.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)d(X.location+ee,J.meshPerAttribute);v.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ee=0;ee<X.locationSize;ee++)f(X.location+ee);r.bindBuffer(r.ARRAY_BUFFER,se);for(let ee=0;ee<X.locationSize;ee++)m(X.location+ee,L/X.locationSize,k,K,L*N,L/X.locationSize*ee*N,oe)}}else if(T!==void 0){const K=T[F];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(X.location,K);break;case 3:r.vertexAttrib3fv(X.location,K);break;case 4:r.vertexAttrib4fv(X.location,K);break;default:r.vertexAttrib1fv(X.location,K)}}}}D()}function S(){O();for(const v in i){const M=i[v];for(const H in M){const y=M[H];for(const x in y)l(y[x].object),delete y[x];delete M[H]}delete i[v]}}function P(v){if(i[v.id]===void 0)return;const M=i[v.id];for(const H in M){const y=M[H];for(const x in y)l(y[x].object),delete y[x];delete M[H]}delete i[v.id]}function I(v){for(const M in i){const H=i[M];if(H[v.id]===void 0)continue;const y=H[v.id];for(const x in y)l(y[x].object),delete y[x];delete H[v.id]}}function O(){z(),a=!0,s!==n&&(s=n,c(s.object))}function z(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:O,resetDefaultState:z,dispose:S,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:f,disableUnusedAttributes:D}}function pD(r,e,t){let i;function n(c){i=c}function s(c,l){r.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(r.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let g=0;g<h;g++)u+=l[g];t.update(u,i,1)}function A(c,l,h,u){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)a(c[p],l[p],u[p]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,l,0,u,0,h);let p=0;for(let w=0;w<h;w++)p+=l[w];for(let w=0;w<u.length;w++)t.update(p,i,u[w])}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=A}function wD(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(I){return!(I!==bi&&i.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const O=I===aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Fr&&i.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Wi&&!O)}function A(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const l=A(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const I=e.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const g=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,P=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:A,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:g,maxVertexTextures:p,maxTextureSize:w,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:D,maxVaryings:m,maxFragmentUniforms:C,vertexTextures:S,maxSamples:P}}function vD(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new yn,o=new mt,A={value:null,needsUpdate:!1};this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const g=h.length!==0||u||i!==0||n;return n=u,i=h.length,g},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,g){const p=h.clippingPlanes,w=h.clipIntersection,f=h.clipShadows,d=r.get(h);if(!n||p===null||p.length===0||s&&!f)s?l(null):c();else{const D=s?0:i,m=D*4;let C=d.clippingState||null;A.value=C,C=l(p,u,m,g);for(let S=0;S!==m;++S)C[S]=t[S];d.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function c(){A.value!==t&&(A.value=t,A.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function l(h,u,g,p){const w=h!==null?h.length:0;let f=null;if(w!==0){if(f=A.value,p!==!0||f===null){const d=g+w*4,D=u.matrixWorldInverse;o.getNormalMatrix(D),(f===null||f.length<d)&&(f=new Float32Array(d));for(let m=0,C=g;m!==w;++m,C+=4)a.copy(h[m]).applyMatrix4(D,o),a.normal.toArray(f,C),f[C+3]=a.constant}A.value=f,A.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,f}}function mD(r){let e=new WeakMap;function t(a,o){return o===Jl?a.mapping=na:o===Kl&&(a.mapping=sa),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Jl||o===Kl)if(e.has(a)){const A=e.get(a).texture;return t(A,a.mapping)}else{const A=a.image;if(A&&A.height>0){const c=new bC(A.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const A=e.get(o);A!==void 0&&(e.delete(o),A.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class CD extends nu{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,A=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=l*this.view.offsetY,A=o-l*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,A,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Da=4,Yf=[.125,.215,.35,.446,.526,.582],ys=20,au=new CD,Xf=new ot;let ou=null,Au=0,cu=0,lu=!1;const Is=(1+Math.sqrt(5))/2,ya=1/Is,jf=[new V(-Is,ya,0),new V(Is,ya,0),new V(-ya,0,Is),new V(ya,0,Is),new V(0,Is,-ya),new V(0,Is,ya),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Jf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){ou=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,Au,cu),this._renderer.xr.enabled=lu,e.scissorTest=!1,gc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===na||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:br,minFilter:br,generateMipmaps:!1,type:aa,format:bi,colorSpace:qi,depthBuffer:!1},n=Kf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BD(s)),this._blurMaterial=ED(s,e,t)}return n}_compileMaterial(e){const t=new nr(this._lodPlanes[0],e);this._renderer.compile(t,au)}_sceneToCubeUV(e,t,i,n){const s=new di(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],A=this._renderer,c=A.autoClear,l=A.toneMapping;A.getClearColor(Xf),A.toneMapping=Rn,A.autoClear=!1;const h=new Yn({name:"PMREM.Background",side:dr,depthWrite:!1,depthTest:!1}),u=new nr(new Dn,h);let g=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,g=!0):(h.color.copy(Xf),g=!0);for(let w=0;w<6;w++){const f=w%3;f===0?(s.up.set(0,a[w],0),s.lookAt(o[w],0,0)):f===1?(s.up.set(0,0,a[w]),s.lookAt(0,o[w],0)):(s.up.set(0,a[w],0),s.lookAt(0,0,o[w]));const d=this._cubeSize;gc(n,f*d,w>2?d:0,d,d),A.setRenderTarget(n),g&&A.render(u,s),A.render(e,s)}u.geometry.dispose(),u.material.dispose(),A.toneMapping=l,A.autoClear=c,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===na||e.mapping===sa;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vf());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new nr(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const A=this._cubeSize;gc(t,0,0,3*A,2*A),i.setRenderTarget(t),i.render(a,au)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jf[(n-s-1)%jf.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const A=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,h=new nr(this._lodPlanes[n],c),u=c.uniforms,g=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ys-1),w=s/p,f=isFinite(s)?1+Math.floor(l*w):ys;f>ys&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ys}`);const d=[];let D=0;for(let I=0;I<ys;++I){const O=I/w,z=Math.exp(-O*O/2);d.push(z),I===0?D+=z:I<f&&(D+=2*z)}for(let I=0;I<d.length;I++)d[I]=d[I]/D;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:m}=this;u.dTheta.value=p,u.mipInt.value=m-i;const C=this._sizeLods[n],S=3*C*(n>m-Da?n-m+Da:0),P=4*(this._cubeSize-C);gc(t,S,P,3*C,2*C),A.setRenderTarget(t),A.render(h,au)}}function BD(r){const e=[],t=[],i=[];let n=r;const s=r-Da+1+Yf.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);t.push(o);let A=1/o;a>r-Da?A=Yf[a-r+Da-1]:a===0&&(A=0),i.push(A);const c=1/(o-2),l=-c,h=1+c,u=[l,l,h,l,h,h,l,l,h,h,l,h],g=6,p=6,w=3,f=2,d=1,D=new Float32Array(w*p*g),m=new Float32Array(f*p*g),C=new Float32Array(d*p*g);for(let P=0;P<g;P++){const I=P%3*2/3-1,O=P>2?0:-1,z=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];D.set(z,w*p*P),m.set(u,f*p*P);const v=[P,P,P,P,P,P];C.set(v,d*p*P)}const S=new Nr;S.setAttribute("position",new Kr(D,w)),S.setAttribute("uv",new Kr(m,f)),S.setAttribute("faceIndex",new Kr(C,d)),e.push(S),n>Da&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kf(r,e,t){const i=new Jr(r,e,t);return i.texture.mapping=OA,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gc(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function ED(r,e,t){const i=new Float32Array(ys),n=new V(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Vf(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Wf(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function hu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DD(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const A=o.mapping,c=A===Jl||A===Kl,l=A===na||A===sa;if(c||l){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Jf(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const g=o.image;return c&&g&&g.height>0||l&&g&&n(g)?(t===null&&(t=new Jf(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function n(o){let A=0;const c=6;for(let l=0;l<c;l++)o[l]!==void 0&&A++;return A===c}function s(o){const A=o.target;A.removeEventListener("dispose",s);const c=e.get(A);c!==void 0&&(e.delete(A),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function yD(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&KA("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function ID(r,e,t,i){const n={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);for(const p in u.morphAttributes){const w=u.morphAttributes[p];for(let f=0,d=w.length;f<d;f++)e.remove(w[f])}u.removeEventListener("dispose",a),delete n[u.id];const g=s.get(u);g&&(e.remove(g),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,t.memory.geometries++),u}function A(h){const u=h.attributes;for(const p in u)e.update(u[p],r.ARRAY_BUFFER);const g=h.morphAttributes;for(const p in g){const w=g[p];for(let f=0,d=w.length;f<d;f++)e.update(w[f],r.ARRAY_BUFFER)}}function c(h){const u=[],g=h.index,p=h.attributes.position;let w=0;if(g!==null){const D=g.array;w=g.version;for(let m=0,C=D.length;m<C;m+=3){const S=D[m+0],P=D[m+1],I=D[m+2];u.push(S,P,P,I,I,S)}}else if(p!==void 0){const D=p.array;w=p.version;for(let m=0,C=D.length/3-1;m<C;m+=3){const S=m+0,P=m+1,I=m+2;u.push(S,P,P,I,I,S)}}else return;const f=new(wf(u)?Of:Hf)(u,1);f.version=w;const d=s.get(h);d&&e.remove(d),s.set(h,f)}function l(h){const u=s.get(h);if(u){const g=h.index;g!==null&&u.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:A,getWireframeAttribute:l}}function MD(r,e,t){let i;function n(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function A(u,g){r.drawElements(i,g,s,u*a),t.update(g,i,1)}function c(u,g,p){p!==0&&(r.drawElementsInstanced(i,g,s,u*a,p),t.update(g,i,p))}function l(u,g,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,u,0,p);let w=0;for(let f=0;f<p;f++)w+=g[f];t.update(w,i,1)}function h(u,g,p,w){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<u.length;d++)c(u[d]/a,g[d],w[d]);else{f.multiDrawElementsInstancedWEBGL(i,g,0,s,u,0,w,0,p);let d=0;for(let D=0;D<p;D++)d+=g[D];for(let D=0;D<w.length;D++)t.update(d,i,w[D])}}this.setMode=n,this.setIndex=o,this.render=A,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function PD(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function QD(r,e,t){const i=new WeakMap,n=new qt;function s(a,o,A){const c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=l!==void 0?l.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let g=function(){O.dispose(),i.delete(o),o.removeEventListener("dispose",g)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,w=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],D=o.morphAttributes.normal||[],m=o.morphAttributes.color||[];let C=0;p===!0&&(C=1),w===!0&&(C=2),f===!0&&(C=3);let S=o.attributes.position.count*C,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*P*4*h),O=new Ef(I,S,P,h);O.type=Wi,O.needsUpdate=!0;const z=C*4;for(let v=0;v<h;v++){const M=d[v],H=D[v],y=m[v],x=S*P*4*v;for(let R=0;R<M.count;R++){const T=R*z;p===!0&&(n.fromBufferAttribute(M,R),I[x+T+0]=n.x,I[x+T+1]=n.y,I[x+T+2]=n.z,I[x+T+3]=0),w===!0&&(n.fromBufferAttribute(H,R),I[x+T+4]=n.x,I[x+T+5]=n.y,I[x+T+6]=n.z,I[x+T+7]=0),f===!0&&(n.fromBufferAttribute(y,R),I[x+T+8]=n.x,I[x+T+9]=n.y,I[x+T+10]=n.z,I[x+T+11]=y.itemSize===4?n.w:1)}}u={count:h,texture:O,size:new at(S,P)},i.set(o,u),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)A.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let w=0;w<c.length;w++)g+=c[w];const p=o.morphTargetsRelative?1:1-g;A.getUniforms().setValue(r,"morphTargetBaseInfluence",p),A.getUniforms().setValue(r,"morphTargetInfluences",c)}A.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),A.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function xD(r,e,t,i){let n=new WeakMap;function s(A){const c=i.render.frame,l=A.geometry,h=e.get(A,l);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),A.isInstancedMesh&&(A.hasEventListener("dispose",o)===!1&&A.addEventListener("dispose",o),n.get(A)!==c&&(t.update(A.instanceMatrix,r.ARRAY_BUFFER),A.instanceColor!==null&&t.update(A.instanceColor,r.ARRAY_BUFFER),n.set(A,c))),A.isSkinnedMesh){const u=A.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return h}function a(){n=new WeakMap}function o(A){const c=A.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class uu extends pr{constructor(e,t,i,n,s,a,o,A,c,l=oa){if(l!==oa&&l!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===oa&&(i=Fn),i===void 0&&l===ps&&(i=ds),super(null,n,s,a,o,A,l,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ii,this.minFilter=A!==void 0?A:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zf=new pr,qf=new uu(1,1),_f=new Ef,$f=new dC,ed=new Nf,td=[],rd=[],id=new Float32Array(16),nd=new Float32Array(9),sd=new Float32Array(4);function Ia(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=td[n];if(s===void 0&&(s=new Float32Array(n),td[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function wr(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function vr(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function fc(r,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function bD(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function SD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wr(t,e))return;r.uniform2fv(this.addr,e),vr(t,e)}}function TD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wr(t,e))return;r.uniform3fv(this.addr,e),vr(t,e)}}function HD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wr(t,e))return;r.uniform4fv(this.addr,e),vr(t,e)}}function OD(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(wr(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vr(t,e)}else{if(wr(t,i))return;sd.set(i),r.uniformMatrix2fv(this.addr,!1,sd),vr(t,i)}}function LD(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(wr(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vr(t,e)}else{if(wr(t,i))return;nd.set(i),r.uniformMatrix3fv(this.addr,!1,nd),vr(t,i)}}function RD(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(wr(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vr(t,e)}else{if(wr(t,i))return;id.set(i),r.uniformMatrix4fv(this.addr,!1,id),vr(t,i)}}function FD(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function kD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wr(t,e))return;r.uniform2iv(this.addr,e),vr(t,e)}}function UD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wr(t,e))return;r.uniform3iv(this.addr,e),vr(t,e)}}function GD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wr(t,e))return;r.uniform4iv(this.addr,e),vr(t,e)}}function ND(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function zD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wr(t,e))return;r.uniform2uiv(this.addr,e),vr(t,e)}}function YD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wr(t,e))return;r.uniform3uiv(this.addr,e),vr(t,e)}}function XD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wr(t,e))return;r.uniform4uiv(this.addr,e),vr(t,e)}}function jD(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(qf.compareFunction=ff,s=qf):s=Zf,t.setTexture2D(e||s,n)}function JD(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||$f,n)}function KD(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ed,n)}function VD(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||_f,n)}function WD(r){switch(r){case 5126:return bD;case 35664:return SD;case 35665:return TD;case 35666:return HD;case 35674:return OD;case 35675:return LD;case 35676:return RD;case 5124:case 35670:return FD;case 35667:case 35671:return kD;case 35668:case 35672:return UD;case 35669:case 35673:return GD;case 5125:return ND;case 36294:return zD;case 36295:return YD;case 36296:return XD;case 35678:case 36198:case 36298:case 36306:case 35682:return jD;case 35679:case 36299:case 36307:return JD;case 35680:case 36300:case 36308:case 36293:return KD;case 36289:case 36303:case 36311:case 36292:return VD}}function ZD(r,e){r.uniform1fv(this.addr,e)}function qD(r,e){const t=Ia(e,this.size,2);r.uniform2fv(this.addr,t)}function _D(r,e){const t=Ia(e,this.size,3);r.uniform3fv(this.addr,t)}function $D(r,e){const t=Ia(e,this.size,4);r.uniform4fv(this.addr,t)}function e0(r,e){const t=Ia(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function t0(r,e){const t=Ia(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function r0(r,e){const t=Ia(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function i0(r,e){r.uniform1iv(this.addr,e)}function n0(r,e){r.uniform2iv(this.addr,e)}function s0(r,e){r.uniform3iv(this.addr,e)}function a0(r,e){r.uniform4iv(this.addr,e)}function o0(r,e){r.uniform1uiv(this.addr,e)}function A0(r,e){r.uniform2uiv(this.addr,e)}function c0(r,e){r.uniform3uiv(this.addr,e)}function l0(r,e){r.uniform4uiv(this.addr,e)}function h0(r,e,t){const i=this.cache,n=e.length,s=fc(t,n);wr(i,s)||(r.uniform1iv(this.addr,s),vr(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Zf,s[a])}function u0(r,e,t){const i=this.cache,n=e.length,s=fc(t,n);wr(i,s)||(r.uniform1iv(this.addr,s),vr(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||$f,s[a])}function g0(r,e,t){const i=this.cache,n=e.length,s=fc(t,n);wr(i,s)||(r.uniform1iv(this.addr,s),vr(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||ed,s[a])}function f0(r,e,t){const i=this.cache,n=e.length,s=fc(t,n);wr(i,s)||(r.uniform1iv(this.addr,s),vr(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||_f,s[a])}function d0(r){switch(r){case 5126:return ZD;case 35664:return qD;case 35665:return _D;case 35666:return $D;case 35674:return e0;case 35675:return t0;case 35676:return r0;case 5124:case 35670:return i0;case 35667:case 35671:return n0;case 35668:case 35672:return s0;case 35669:case 35673:return a0;case 5125:return o0;case 36294:return A0;case 36295:return c0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return f0}}class p0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=WD(t.type)}}class w0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d0(t.type)}}class v0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const gu=/(\w+)(\])?(\[|\.)?/g;function ad(r,e){r.seq.push(e),r.map[e.id]=e}function m0(r,e,t){const i=r.name,n=i.length;for(gu.lastIndex=0;;){const s=gu.exec(i),a=gu.lastIndex;let o=s[1];const A=s[2]==="]",c=s[3];if(A&&(o=o|0),c===void 0||c==="["&&a+2===n){ad(t,c===void 0?new p0(o,r,e):new w0(o,r,e));break}else{let l=t.map[o];l===void 0&&(l=new v0(o),ad(t,l)),t=l}}}class dc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);m0(s,a,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],A=i[o.id];A.needsUpdate!==!1&&o.setValue(e,A.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function od(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const C0=37297;let B0=0;function E0(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function D0(r){const e=Ht.getPrimaries(Ht.workingColorSpace),t=Ht.getPrimaries(r);let i;switch(e===t?i="":e===XA&&t===YA?i="LinearDisplayP3ToLinearSRGB":e===YA&&t===XA&&(i="LinearSRGBToLinearDisplayP3"),r){case qi:case NA:return[i,"LinearTransferOETF"];case Yt:case Sh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Ad(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+E0(r.getShaderSource(e),a)}else return n}function y0(r,e){const t=D0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function I0(r,e){let t;switch(e){case Nm:t="Linear";break;case zm:t="Reinhard";break;case Ym:t="Cineon";break;case Xm:t="ACESFilmic";break;case Jm:t="AgX";break;case Km:t="Neutral";break;case jm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pc=new V;function M0(){Ht.getLuminanceCoefficients(pc);const r=pc.x.toFixed(4),e=pc.y.toFixed(4),t=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Q0(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function x0(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Bo(r){return r!==""}function cd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ld(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(r){return r.replace(b0,T0)}const S0=new Map;function T0(r,e){let t=wt[e];if(t===void 0){const i=S0.get(e);if(i!==void 0)t=wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fu(t)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(r){return r.replace(H0,O0)}function O0(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function ud(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function R0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case na:case sa:e="ENVMAP_TYPE_CUBE";break;case OA:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case sa:e="ENVMAP_MODE_REFRACTION";break}return e}function k0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tf:e="ENVMAP_BLENDING_MULTIPLY";break;case Um:e="ENVMAP_BLENDING_MIX";break;case Gm:e="ENVMAP_BLENDING_ADD";break}return e}function U0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function G0(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const A=L0(t),c=R0(t),l=F0(t),h=k0(t),u=U0(t),g=P0(t),p=Q0(s),w=n.createProgram();let f,d,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bo).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bo).join(`
`),d.length>0&&(d+=`
`)):(f=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),d=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?wt.tonemapping_pars_fragment:"",t.toneMapping!==Rn?I0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,y0("linearToOutputTexel",t.outputColorSpace),M0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),a=fu(a),a=cd(a,t),a=ld(a,t),o=fu(o),o=cd(o,t),o=ld(o,t),a=hd(a),o=hd(o),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,f=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",t.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const m=D+f+a,C=D+d+o,S=od(n,n.VERTEX_SHADER,m),P=od(n,n.FRAGMENT_SHADER,C);n.attachShader(w,S),n.attachShader(w,P),t.index0AttributeName!==void 0?n.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(w,0,"position"),n.linkProgram(w);function I(M){if(r.debug.checkShaderErrors){const H=n.getProgramInfoLog(w).trim(),y=n.getShaderInfoLog(S).trim(),x=n.getShaderInfoLog(P).trim();let R=!0,T=!0;if(n.getProgramParameter(w,n.LINK_STATUS)===!1)if(R=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,w,S,P);else{const F=Ad(n,S,"vertex"),X=Ad(n,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(w,n.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+H+`
`+F+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(y===""||x==="")&&(T=!1);T&&(M.diagnostics={runnable:R,programLog:H,vertexShader:{log:y,prefix:f},fragmentShader:{log:x,prefix:d}})}n.deleteShader(S),n.deleteShader(P),O=new dc(n,w),z=x0(n,w)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let z;this.getAttributes=function(){return z===void 0&&I(this),z};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(w,C0)),v},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B0++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=S,this.fragmentShader=P,this}let N0=0;class z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Y0(e),t.set(e,i)),i}}class Y0{constructor(e){this.id=N0++,this.code=e,this.usedTimes=0}}function X0(r,e,t,i,n,s,a){const o=new jh,A=new z0,c=new Set,l=[],h=n.logarithmicDepthBuffer,u=n.reverseDepthBuffer,g=n.vertexTextures;let p=n.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function d(v,M,H,y,x){const R=y.fog,T=x.geometry,F=v.isMeshStandardMaterial?y.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||F),J=X&&X.mapping===OA?X.image.height:null,K=w[v.type];v.precision!==null&&(p=n.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const L=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,j=L!==void 0?L.length:0;let se=0;T.morphAttributes.position!==void 0&&(se=1),T.morphAttributes.normal!==void 0&&(se=2),T.morphAttributes.color!==void 0&&(se=3);let k,N,oe,ee;if(K){const bt=Li[K];k=bt.vertexShader,N=bt.fragmentShader}else k=v.vertexShader,N=v.fragmentShader,A.update(v),oe=A.getVertexShaderID(v),ee=A.getFragmentShaderID(v);const ue=r.getRenderTarget(),pe=x.isInstancedMesh===!0,xe=x.isBatchedMesh===!0,Ie=!!v.map,de=!!v.matcap,G=!!X,_e=!!v.aoMap,Se=!!v.lightMap,Te=!!v.bumpMap,be=!!v.normalMap,Be=!!v.displacementMap,Qe=!!v.emissiveMap,Q=!!v.metalnessMap,B=!!v.roughnessMap,Z=v.anisotropy>0,te=v.clearcoat>0,Ae=v.dispersion>0,ie=v.iridescence>0,we=v.sheen>0,Ee=v.transmission>0,fe=Z&&!!v.anisotropyMap,ke=te&&!!v.clearcoatMap,De=te&&!!v.clearcoatNormalMap,Re=te&&!!v.clearcoatRoughnessMap,Fe=ie&&!!v.iridescenceMap,Je=ie&&!!v.iridescenceThicknessMap,me=we&&!!v.sheenColorMap,Ue=we&&!!v.sheenRoughnessMap,je=!!v.specularMap,nt=!!v.specularColorMap,W=!!v.specularIntensityMap,Ce=Ee&&!!v.transmissionMap,ne=Ee&&!!v.thicknessMap,Me=!!v.gradientMap,Pe=!!v.alphaMap,ye=v.alphaTest>0,ht=!!v.alphaHash,pt=!!v.extensions;let $e=Rn;v.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&($e=r.toneMapping);const Ze={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:k,fragmentShader:N,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:xe,batchingColor:xe&&x._colorsTexture!==null,instancing:pe,instancingColor:pe&&x.instanceColor!==null,instancingMorph:pe&&x.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:qi,alphaToCoverage:!!v.alphaToCoverage,map:Ie,matcap:de,envMap:G,envMapMode:G&&X.mapping,envMapCubeUVHeight:J,aoMap:_e,lightMap:Se,bumpMap:Te,normalMap:be,displacementMap:g&&Be,emissiveMap:Qe,normalMapObjectSpace:be&&v.normalMapType===Zm,normalMapTangentSpace:be&&v.normalMapType===Wm,metalnessMap:Q,roughnessMap:B,anisotropy:Z,anisotropyMap:fe,clearcoat:te,clearcoatMap:ke,clearcoatNormalMap:De,clearcoatRoughnessMap:Re,dispersion:Ae,iridescence:ie,iridescenceMap:Fe,iridescenceThicknessMap:Je,sheen:we,sheenColorMap:me,sheenRoughnessMap:Ue,specularMap:je,specularColorMap:nt,specularIntensityMap:W,transmission:Ee,transmissionMap:Ce,thicknessMap:ne,gradientMap:Me,opaque:v.transparent===!1&&v.blending===ra&&v.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ye,alphaHash:ht,combine:v.combine,mapUv:Ie&&f(v.map.channel),aoMapUv:_e&&f(v.aoMap.channel),lightMapUv:Se&&f(v.lightMap.channel),bumpMapUv:Te&&f(v.bumpMap.channel),normalMapUv:be&&f(v.normalMap.channel),displacementMapUv:Be&&f(v.displacementMap.channel),emissiveMapUv:Qe&&f(v.emissiveMap.channel),metalnessMapUv:Q&&f(v.metalnessMap.channel),roughnessMapUv:B&&f(v.roughnessMap.channel),anisotropyMapUv:fe&&f(v.anisotropyMap.channel),clearcoatMapUv:ke&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:De&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&f(v.sheenRoughnessMap.channel),specularMapUv:je&&f(v.specularMap.channel),specularColorMapUv:nt&&f(v.specularColorMap.channel),specularIntensityMapUv:W&&f(v.specularIntensityMap.channel),transmissionMapUv:Ce&&f(v.transmissionMap.channel),thicknessMapUv:ne&&f(v.thicknessMap.channel),alphaMapUv:Pe&&f(v.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(be||Z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!T.attributes.uv&&(Ie||Pe),fog:!!R,useFog:v.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:u,skinning:x.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ie&&v.map.isVideoTexture===!0&&Ht.getTransfer(v.map.colorSpace)===Zt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===jr,flipSided:v.side===dr,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&v.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function D(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const H in v.defines)M.push(H),M.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(m(M,v),C(M,v),M.push(r.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function m(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function C(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),v.push(o.mask)}function S(v){const M=w[v.type];let H;if(M){const y=Li[M];H=iu.clone(y.uniforms)}else H=v.uniforms;return H}function P(v,M){let H;for(let y=0,x=l.length;y<x;y++){const R=l[y];if(R.cacheKey===M){H=R,++H.usedTimes;break}}return H===void 0&&(H=new G0(r,M,v,s),l.push(H)),H}function I(v){if(--v.usedTimes===0){const M=l.indexOf(v);l[M]=l[l.length-1],l.pop(),v.destroy()}}function O(v){A.remove(v)}function z(){A.dispose()}return{getParameters:d,getProgramCacheKey:D,getUniforms:S,acquireProgram:P,releaseProgram:I,releaseShaderCache:O,programs:l,dispose:z}}function j0(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,A){r.get(a)[o]=A}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function J0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function gd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function fd(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(h,u,g,p,w,f){let d=r[e];return d===void 0?(d={id:h.id,object:h,geometry:u,material:g,groupOrder:p,renderOrder:h.renderOrder,z:w,group:f},r[e]=d):(d.id=h.id,d.object=h,d.geometry=u,d.material=g,d.groupOrder=p,d.renderOrder=h.renderOrder,d.z=w,d.group=f),e++,d}function o(h,u,g,p,w,f){const d=a(h,u,g,p,w,f);g.transmission>0?i.push(d):g.transparent===!0?n.push(d):t.push(d)}function A(h,u,g,p,w,f){const d=a(h,u,g,p,w,f);g.transmission>0?i.unshift(d):g.transparent===!0?n.unshift(d):t.unshift(d)}function c(h,u){t.length>1&&t.sort(h||J0),i.length>1&&i.sort(u||gd),n.length>1&&n.sort(u||gd)}function l(){for(let h=e,u=r.length;h<u;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:A,finish:l,sort:c}}function K0(){let r=new WeakMap;function e(i,n){const s=r.get(i);let a;return s===void 0?(a=new fd,r.set(i,[a])):n>=s.length?(a=new fd,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function V0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ot};break;case"SpotLight":t={position:new V,direction:new V,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function W0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Z0=0;function q0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _0(r){const e=new V0,t=W0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const n=new V,s=new Ut,a=new Ut;function o(c){let l=0,h=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,p=0,w=0,f=0,d=0,D=0,m=0,C=0,S=0,P=0,I=0;c.sort(q0);for(let z=0,v=c.length;z<v;z++){const M=c[z],H=M.color,y=M.intensity,x=M.distance,R=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)l+=H.r*y,h+=H.g*y,u+=H.b*y;else if(M.isLightProbe){for(let T=0;T<9;T++)i.probe[T].addScaledVector(M.sh.coefficients[T],y);I++}else if(M.isDirectionalLight){const T=e.get(M);if(T.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const F=M.shadow,X=t.get(M);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,i.directionalShadow[g]=X,i.directionalShadowMap[g]=R,i.directionalShadowMatrix[g]=M.shadow.matrix,D++}i.directional[g]=T,g++}else if(M.isSpotLight){const T=e.get(M);T.position.setFromMatrixPosition(M.matrixWorld),T.color.copy(H).multiplyScalar(y),T.distance=x,T.coneCos=Math.cos(M.angle),T.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),T.decay=M.decay,i.spot[w]=T;const F=M.shadow;if(M.map&&(i.spotLightMap[S]=M.map,S++,F.updateMatrices(M),M.castShadow&&P++),i.spotLightMatrix[w]=F.matrix,M.castShadow){const X=t.get(M);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,i.spotShadow[w]=X,i.spotShadowMap[w]=R,C++}w++}else if(M.isRectAreaLight){const T=e.get(M);T.color.copy(H).multiplyScalar(y),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),i.rectArea[f]=T,f++}else if(M.isPointLight){const T=e.get(M);if(T.color.copy(M.color).multiplyScalar(M.intensity),T.distance=M.distance,T.decay=M.decay,M.castShadow){const F=M.shadow,X=t.get(M);X.shadowIntensity=F.intensity,X.shadowBias=F.bias,X.shadowNormalBias=F.normalBias,X.shadowRadius=F.radius,X.shadowMapSize=F.mapSize,X.shadowCameraNear=F.camera.near,X.shadowCameraFar=F.camera.far,i.pointShadow[p]=X,i.pointShadowMap[p]=R,i.pointShadowMatrix[p]=M.shadow.matrix,m++}i.point[p]=T,p++}else if(M.isHemisphereLight){const T=e.get(M);T.skyColor.copy(M.color).multiplyScalar(y),T.groundColor.copy(M.groundColor).multiplyScalar(y),i.hemi[d]=T,d++}}f>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=h,i.ambient[2]=u;const O=i.hash;(O.directionalLength!==g||O.pointLength!==p||O.spotLength!==w||O.rectAreaLength!==f||O.hemiLength!==d||O.numDirectionalShadows!==D||O.numPointShadows!==m||O.numSpotShadows!==C||O.numSpotMaps!==S||O.numLightProbes!==I)&&(i.directional.length=g,i.spot.length=w,i.rectArea.length=f,i.point.length=p,i.hemi.length=d,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=C+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,O.directionalLength=g,O.pointLength=p,O.spotLength=w,O.rectAreaLength=f,O.hemiLength=d,O.numDirectionalShadows=D,O.numPointShadows=m,O.numSpotShadows=C,O.numSpotMaps=S,O.numLightProbes=I,i.version=Z0++)}function A(c,l){let h=0,u=0,g=0,p=0,w=0;const f=l.matrixWorldInverse;for(let d=0,D=c.length;d<D;d++){const m=c[d];if(m.isDirectionalLight){const C=i.directional[h];C.direction.setFromMatrixPosition(m.matrixWorld),n.setFromMatrixPosition(m.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(f),h++}else if(m.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(m.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(m.matrixWorld),n.setFromMatrixPosition(m.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(f),g++}else if(m.isRectAreaLight){const C=i.rectArea[p];C.position.setFromMatrixPosition(m.matrixWorld),C.position.applyMatrix4(f),a.identity(),s.copy(m.matrixWorld),s.premultiply(f),a.extractRotation(s),C.halfWidth.set(m.width*.5,0,0),C.halfHeight.set(0,m.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),p++}else if(m.isPointLight){const C=i.point[u];C.position.setFromMatrixPosition(m.matrixWorld),C.position.applyMatrix4(f),u++}else if(m.isHemisphereLight){const C=i.hemi[w];C.direction.setFromMatrixPosition(m.matrixWorld),C.direction.transformDirection(f),w++}}}return{setup:o,setupView:A,state:i}}function dd(r){const e=new _0(r),t=[],i=[];function n(l){c.camera=l,t.length=0,i.length=0}function s(l){t.push(l)}function a(l){i.push(l)}function o(){e.setup(t)}function A(l){e.setupView(t,l)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:A,pushLight:s,pushShadow:a}}function $0(r){let e=new WeakMap;function t(n,s=0){const a=e.get(n);let o;return a===void 0?(o=new dd(r),e.set(n,[o])):s>=a.length?(o=new dd(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class du extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ho,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pu extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ty=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ry(r,e,t){let i=new hc;const n=new at,s=new at,a=new qt,o=new du({depthPacking:bh}),A=new pu,c={},l=t.maxTextureSize,h={[Vi]:dr,[dr]:Vi,[jr]:jr},u=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:ey,fragmentShader:ty}),g=u.clone();g.defines.HORIZONTAL_PASS=1;const p=new Nr;p.setAttribute("position",new Kr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new nr(p,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qg;let d=this.type;this.render=function(P,I,O){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const z=r.getRenderTarget(),v=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),H=r.state;H.setBlending(ri),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const y=d!==gn&&this.type===gn,x=d===gn&&this.type!==gn;for(let R=0,T=P.length;R<T;R++){const F=P[R],X=F.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);const J=X.getFrameExtents();if(n.multiply(J),s.copy(X.mapSize),(n.x>l||n.y>l)&&(n.x>l&&(s.x=Math.floor(l/J.x),n.x=s.x*J.x,X.mapSize.x=s.x),n.y>l&&(s.y=Math.floor(l/J.y),n.y=s.y*J.y,X.mapSize.y=s.y)),X.map===null||y===!0||x===!0){const L=this.type!==gn?{minFilter:ii,magFilter:ii}:{};X.map!==null&&X.map.dispose(),X.map=new Jr(n.x,n.y,L),X.map.texture.name=F.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const K=X.getViewportCount();for(let L=0;L<K;L++){const j=X.getViewport(L);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),H.viewport(a),X.updateMatrices(F,L),i=X.getFrustum(),C(I,O,X.camera,F,this.type)}X.isPointLightShadow!==!0&&this.type===gn&&D(X,O),X.needsUpdate=!1}d=this.type,f.needsUpdate=!1,r.setRenderTarget(z,v,M)};function D(P,I){const O=e.update(w);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Jr(n.x,n.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(I,null,O,u,w,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(I,null,O,g,w,null)}function m(P,I,O,z){let v=null;const M=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(M!==void 0)v=M;else if(v=O.isPointLight===!0?A:o,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const H=v.uuid,y=I.uuid;let x=c[H];x===void 0&&(x={},c[H]=x);let R=x[y];R===void 0&&(R=v.clone(),x[y]=R,I.addEventListener("dispose",S)),v=R}if(v.visible=I.visible,v.wireframe=I.wireframe,z===gn?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:h[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const H=r.properties.get(v);H.light=O}return v}function C(P,I,O,z,v){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===gn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const H=e.update(P),y=P.material;if(Array.isArray(y)){const x=H.groups;for(let R=0,T=x.length;R<T;R++){const F=x[R],X=y[F.materialIndex];if(X&&X.visible){const J=m(P,X,z,v);P.onBeforeShadow(r,P,I,O,H,J,F),r.renderBufferDirect(O,null,H,J,P,F),P.onAfterShadow(r,P,I,O,H,J,F)}}}else if(y.visible){const x=m(P,y,z,v);P.onBeforeShadow(r,P,I,O,H,x,null),r.renderBufferDirect(O,null,H,x,P,null),P.onAfterShadow(r,P,I,O,H,x,null)}}const M=P.children;for(let H=0,y=M.length;H<y;H++)C(M[H],I,O,z,v)}function S(P){P.target.removeEventListener("dispose",S);for(const I in c){const O=c[I],z=P.target.uuid;z in O&&(O[z].dispose(),delete O[z])}}}const iy={[Ul]:Gl,[Nl]:Xl,[zl]:jl,[ia]:Yl,[Gl]:Ul,[Xl]:Nl,[jl]:zl,[Yl]:ia};function ny(r){function e(){let W=!1;const Ce=new qt;let ne=null;const Me=new qt(0,0,0,0);return{setMask:function(Pe){ne!==Pe&&!W&&(r.colorMask(Pe,Pe,Pe,Pe),ne=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,ye,ht,pt,$e){$e===!0&&(Pe*=pt,ye*=pt,ht*=pt),Ce.set(Pe,ye,ht,pt),Me.equals(Ce)===!1&&(r.clearColor(Pe,ye,ht,pt),Me.copy(Ce))},reset:function(){W=!1,ne=null,Me.set(-1,0,0,0)}}}function t(){let W=!1,Ce=!1,ne=null,Me=null,Pe=null;return{setReversed:function(ye){Ce=ye},setTest:function(ye){ye?oe(r.DEPTH_TEST):ee(r.DEPTH_TEST)},setMask:function(ye){ne!==ye&&!W&&(r.depthMask(ye),ne=ye)},setFunc:function(ye){if(Ce&&(ye=iy[ye]),Me!==ye){switch(ye){case Ul:r.depthFunc(r.NEVER);break;case Gl:r.depthFunc(r.ALWAYS);break;case Nl:r.depthFunc(r.LESS);break;case ia:r.depthFunc(r.LEQUAL);break;case zl:r.depthFunc(r.EQUAL);break;case Yl:r.depthFunc(r.GEQUAL);break;case Xl:r.depthFunc(r.GREATER);break;case jl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=ye}},setLocked:function(ye){W=ye},setClear:function(ye){Pe!==ye&&(r.clearDepth(ye),Pe=ye)},reset:function(){W=!1,ne=null,Me=null,Pe=null}}}function i(){let W=!1,Ce=null,ne=null,Me=null,Pe=null,ye=null,ht=null,pt=null,$e=null;return{setTest:function(Ze){W||(Ze?oe(r.STENCIL_TEST):ee(r.STENCIL_TEST))},setMask:function(Ze){Ce!==Ze&&!W&&(r.stencilMask(Ze),Ce=Ze)},setFunc:function(Ze,bt,Nt){(ne!==Ze||Me!==bt||Pe!==Nt)&&(r.stencilFunc(Ze,bt,Nt),ne=Ze,Me=bt,Pe=Nt)},setOp:function(Ze,bt,Nt){(ye!==Ze||ht!==bt||pt!==Nt)&&(r.stencilOp(Ze,bt,Nt),ye=Ze,ht=bt,pt=Nt)},setLocked:function(Ze){W=Ze},setClear:function(Ze){$e!==Ze&&(r.clearStencil(Ze),$e=Ze)},reset:function(){W=!1,Ce=null,ne=null,Me=null,Pe=null,ye=null,ht=null,pt=null,$e=null}}}const n=new e,s=new t,a=new i,o=new WeakMap,A=new WeakMap;let c={},l={},h=new WeakMap,u=[],g=null,p=!1,w=null,f=null,d=null,D=null,m=null,C=null,S=null,P=new ot(0,0,0),I=0,O=!1,z=null,v=null,M=null,H=null,y=null;const x=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let R=!1,T=0;const F=r.getParameter(r.VERSION);F.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(F)[1]),R=T>=1):F.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),R=T>=2);let X=null,J={};const K=r.getParameter(r.SCISSOR_BOX),L=r.getParameter(r.VIEWPORT),j=new qt().fromArray(K),se=new qt().fromArray(L);function k(W,Ce,ne,Me){const Pe=new Uint8Array(4),ye=r.createTexture();r.bindTexture(W,ye),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<ne;ht++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,Pe):r.texImage2D(Ce+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pe);return ye}const N={};N[r.TEXTURE_2D]=k(r.TEXTURE_2D,r.TEXTURE_2D,1),N[r.TEXTURE_CUBE_MAP]=k(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[r.TEXTURE_2D_ARRAY]=k(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),N[r.TEXTURE_3D]=k(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),oe(r.DEPTH_TEST),s.setFunc(ia),Se(!1),Te(Zg),oe(r.CULL_FACE),G(ri);function oe(W){c[W]!==!0&&(r.enable(W),c[W]=!0)}function ee(W){c[W]!==!1&&(r.disable(W),c[W]=!1)}function ue(W,Ce){return l[W]!==Ce?(r.bindFramebuffer(W,Ce),l[W]=Ce,W===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=Ce),W===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function pe(W,Ce){let ne=u,Me=!1;if(W){ne=h.get(Ce),ne===void 0&&(ne=[],h.set(Ce,ne));const Pe=W.textures;if(ne.length!==Pe.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let ye=0,ht=Pe.length;ye<ht;ye++)ne[ye]=r.COLOR_ATTACHMENT0+ye;ne.length=Pe.length,Me=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,Me=!0);Me&&r.drawBuffers(ne)}function xe(W){return g!==W?(r.useProgram(W),g=W,!0):!1}const Ie={[us]:r.FUNC_ADD,[Em]:r.FUNC_SUBTRACT,[Dm]:r.FUNC_REVERSE_SUBTRACT};Ie[ym]=r.MIN,Ie[Im]=r.MAX;const de={[Mm]:r.ZERO,[Pm]:r.ONE,[Qm]:r.SRC_COLOR,[Fl]:r.SRC_ALPHA,[Om]:r.SRC_ALPHA_SATURATE,[Tm]:r.DST_COLOR,[bm]:r.DST_ALPHA,[xm]:r.ONE_MINUS_SRC_COLOR,[kl]:r.ONE_MINUS_SRC_ALPHA,[Hm]:r.ONE_MINUS_DST_COLOR,[Sm]:r.ONE_MINUS_DST_ALPHA,[Lm]:r.CONSTANT_COLOR,[Rm]:r.ONE_MINUS_CONSTANT_COLOR,[Fm]:r.CONSTANT_ALPHA,[km]:r.ONE_MINUS_CONSTANT_ALPHA};function G(W,Ce,ne,Me,Pe,ye,ht,pt,$e,Ze){if(W===ri){p===!0&&(ee(r.BLEND),p=!1);return}if(p===!1&&(oe(r.BLEND),p=!0),W!==Bm){if(W!==w||Ze!==O){if((f!==us||m!==us)&&(r.blendEquation(r.FUNC_ADD),f=us,m=us),Ze)switch(W){case ra:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _g:r.blendFunc(r.ONE,r.ONE);break;case $g:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ef:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ra:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _g:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $g:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ef:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}d=null,D=null,C=null,S=null,P.set(0,0,0),I=0,w=W,O=Ze}return}Pe=Pe||Ce,ye=ye||ne,ht=ht||Me,(Ce!==f||Pe!==m)&&(r.blendEquationSeparate(Ie[Ce],Ie[Pe]),f=Ce,m=Pe),(ne!==d||Me!==D||ye!==C||ht!==S)&&(r.blendFuncSeparate(de[ne],de[Me],de[ye],de[ht]),d=ne,D=Me,C=ye,S=ht),(pt.equals(P)===!1||$e!==I)&&(r.blendColor(pt.r,pt.g,pt.b,$e),P.copy(pt),I=$e),w=W,O=!1}function _e(W,Ce){W.side===jr?ee(r.CULL_FACE):oe(r.CULL_FACE);let ne=W.side===dr;Ce&&(ne=!ne),Se(ne),W.blending===ra&&W.transparent===!1?G(ri):G(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),s.setFunc(W.depthFunc),s.setTest(W.depthTest),s.setMask(W.depthWrite),n.setMask(W.colorWrite);const Me=W.stencilWrite;a.setTest(Me),Me&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Be(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Se(W){z!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),z=W)}function Te(W){W!==vm?(oe(r.CULL_FACE),W!==v&&(W===Zg?r.cullFace(r.BACK):W===mm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ee(r.CULL_FACE),v=W}function be(W){W!==M&&(R&&r.lineWidth(W),M=W)}function Be(W,Ce,ne){W?(oe(r.POLYGON_OFFSET_FILL),(H!==Ce||y!==ne)&&(r.polygonOffset(Ce,ne),H=Ce,y=ne)):ee(r.POLYGON_OFFSET_FILL)}function Qe(W){W?oe(r.SCISSOR_TEST):ee(r.SCISSOR_TEST)}function Q(W){W===void 0&&(W=r.TEXTURE0+x-1),X!==W&&(r.activeTexture(W),X=W)}function B(W,Ce,ne){ne===void 0&&(X===null?ne=r.TEXTURE0+x-1:ne=X);let Me=J[ne];Me===void 0&&(Me={type:void 0,texture:void 0},J[ne]=Me),(Me.type!==W||Me.texture!==Ce)&&(X!==ne&&(r.activeTexture(ne),X=ne),r.bindTexture(W,Ce||N[W]),Me.type=W,Me.texture=Ce)}function Z(){const W=J[X];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function te(){try{r.compressedTexImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{r.compressedTexImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ie(){try{r.texSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{r.texSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{r.texStorage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function De(){try{r.texStorage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{r.texImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{r.texImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(W){j.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),j.copy(W))}function me(W){se.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),se.copy(W))}function Ue(W,Ce){let ne=A.get(Ce);ne===void 0&&(ne=new WeakMap,A.set(Ce,ne));let Me=ne.get(W);Me===void 0&&(Me=r.getUniformBlockIndex(Ce,W.name),ne.set(W,Me))}function je(W,Ce){const ne=A.get(Ce).get(W);o.get(Ce)!==ne&&(r.uniformBlockBinding(Ce,ne,W.__bindingPointIndex),o.set(Ce,ne))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},X=null,J={},l={},h=new WeakMap,u=[],g=null,p=!1,w=null,f=null,d=null,D=null,m=null,C=null,S=null,P=new ot(0,0,0),I=0,O=!1,z=null,v=null,M=null,H=null,y=null,j.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}return{buffers:{color:n,depth:s,stencil:a},enable:oe,disable:ee,bindFramebuffer:ue,drawBuffers:pe,useProgram:xe,setBlending:G,setMaterial:_e,setFlipSided:Se,setCullFace:Te,setLineWidth:be,setPolygonOffset:Be,setScissorTest:Qe,activeTexture:Q,bindTexture:B,unbindTexture:Z,compressedTexImage2D:te,compressedTexImage3D:Ae,texImage2D:Re,texImage3D:Fe,updateUBOMapping:Ue,uniformBlockBinding:je,texStorage2D:ke,texStorage3D:De,texSubImage2D:ie,texSubImage3D:we,compressedTexSubImage2D:Ee,compressedTexSubImage3D:fe,scissor:Je,viewport:me,reset:nt}}function pd(r,e,t,i){const n=sy(i);switch(t){case of:return r*e;case cf:return r*e;case lf:return r*e*2;case eh:return r*e/n.components*n.byteLength;case th:return r*e/n.components*n.byteLength;case hf:return r*e*2/n.components*n.byteLength;case rh:return r*e*2/n.components*n.byteLength;case Af:return r*e*3/n.components*n.byteLength;case bi:return r*e*4/n.components*n.byteLength;case ih:return r*e*4/n.components*n.byteLength;case RA:case FA:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kA:case UA:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sh:case oh:return Math.max(r,16)*Math.max(e,8)/4;case nh:case ah:return Math.max(r,8)*Math.max(e,8)/2;case Ah:case ch:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case fh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case dh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case mh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case yh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case GA:case Ih:case Mh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case uf:case Ph:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qh:case xh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sy(r){switch(r){case Fr:case nf:return{byteLength:1,components:1};case lo:case sf:case aa:return{byteLength:2,components:1};case _l:case $l:return{byteLength:2,components:4};case Fn:case ql:case Wi:return{byteLength:4,components:1};case af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function ay(r,e,t,i,n,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,l=new WeakMap;let h;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(Q,B){return g?new OffscreenCanvas(Q,B):JA("canvas")}function w(Q,B,Z){let te=1;const Ae=Qe(Q);if((Ae.width>Z||Ae.height>Z)&&(te=Z/Math.max(Ae.width,Ae.height)),te<1)if(typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap||typeof VideoFrame<"u"&&Q instanceof VideoFrame){const ie=Math.floor(te*Ae.width),we=Math.floor(te*Ae.height);h===void 0&&(h=p(ie,we));const Ee=B?p(ie,we):h;return Ee.width=ie,Ee.height=we,Ee.getContext("2d").drawImage(Q,0,0,ie,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ae.width+"x"+Ae.height+") to ("+ie+"x"+we+")."),Ee}else return"data"in Q&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ae.width+"x"+Ae.height+")."),Q;return Q}function f(Q){return Q.generateMipmaps&&Q.minFilter!==ii&&Q.minFilter!==br}function d(Q){r.generateMipmap(Q)}function D(Q,B,Z,te,Ae=!1){if(Q!==null){if(r[Q]!==void 0)return r[Q];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Q+"'")}let ie=B;if(B===r.RED&&(Z===r.FLOAT&&(ie=r.R32F),Z===r.HALF_FLOAT&&(ie=r.R16F),Z===r.UNSIGNED_BYTE&&(ie=r.R8)),B===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ie=r.R8UI),Z===r.UNSIGNED_SHORT&&(ie=r.R16UI),Z===r.UNSIGNED_INT&&(ie=r.R32UI),Z===r.BYTE&&(ie=r.R8I),Z===r.SHORT&&(ie=r.R16I),Z===r.INT&&(ie=r.R32I)),B===r.RG&&(Z===r.FLOAT&&(ie=r.RG32F),Z===r.HALF_FLOAT&&(ie=r.RG16F),Z===r.UNSIGNED_BYTE&&(ie=r.RG8)),B===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ie=r.RG8UI),Z===r.UNSIGNED_SHORT&&(ie=r.RG16UI),Z===r.UNSIGNED_INT&&(ie=r.RG32UI),Z===r.BYTE&&(ie=r.RG8I),Z===r.SHORT&&(ie=r.RG16I),Z===r.INT&&(ie=r.RG32I)),B===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ie=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(ie=r.RGB16UI),Z===r.UNSIGNED_INT&&(ie=r.RGB32UI),Z===r.BYTE&&(ie=r.RGB8I),Z===r.SHORT&&(ie=r.RGB16I),Z===r.INT&&(ie=r.RGB32I)),B===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ie=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(ie=r.RGBA16UI),Z===r.UNSIGNED_INT&&(ie=r.RGBA32UI),Z===r.BYTE&&(ie=r.RGBA8I),Z===r.SHORT&&(ie=r.RGBA16I),Z===r.INT&&(ie=r.RGBA32I)),B===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(ie=r.RGB9_E5),B===r.RGBA){const we=Ae?zA:Ht.getTransfer(te);Z===r.FLOAT&&(ie=r.RGBA32F),Z===r.HALF_FLOAT&&(ie=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(ie=we===Zt?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function m(Q,B){let Z;return Q?B===null||B===Fn||B===ds?Z=r.DEPTH24_STENCIL8:B===Wi?Z=r.DEPTH32F_STENCIL8:B===lo&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):B===null||B===Fn||B===ds?Z=r.DEPTH_COMPONENT24:B===Wi?Z=r.DEPTH_COMPONENT32F:B===lo&&(Z=r.DEPTH_COMPONENT16),Z}function C(Q,B){return f(Q)===!0||Q.isFramebufferTexture&&Q.minFilter!==ii&&Q.minFilter!==br?Math.log2(Math.max(B.width,B.height))+1:Q.mipmaps!==void 0&&Q.mipmaps.length>0?Q.mipmaps.length:Q.isCompressedTexture&&Array.isArray(Q.image)?B.mipmaps.length:1}function S(Q){const B=Q.target;B.removeEventListener("dispose",S),I(B),B.isVideoTexture&&l.delete(B)}function P(Q){const B=Q.target;B.removeEventListener("dispose",P),z(B)}function I(Q){const B=i.get(Q);if(B.__webglInit===void 0)return;const Z=Q.source,te=u.get(Z);if(te){const Ae=te[B.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&O(Q),Object.keys(te).length===0&&u.delete(Z)}i.remove(Q)}function O(Q){const B=i.get(Q);r.deleteTexture(B.__webglTexture);const Z=Q.source,te=u.get(Z);delete te[B.__cacheKey],a.memory.textures--}function z(Q){const B=i.get(Q);if(Q.depthTexture&&Q.depthTexture.dispose(),Q.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(B.__webglFramebuffer[te]))for(let Ae=0;Ae<B.__webglFramebuffer[te].length;Ae++)r.deleteFramebuffer(B.__webglFramebuffer[te][Ae]);else r.deleteFramebuffer(B.__webglFramebuffer[te]);B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[te])}else{if(Array.isArray(B.__webglFramebuffer))for(let te=0;te<B.__webglFramebuffer.length;te++)r.deleteFramebuffer(B.__webglFramebuffer[te]);else r.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let te=0;te<B.__webglColorRenderbuffer.length;te++)B.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[te]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}const Z=Q.textures;for(let te=0,Ae=Z.length;te<Ae;te++){const ie=i.get(Z[te]);ie.__webglTexture&&(r.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(Z[te])}i.remove(Q)}let v=0;function M(){v=0}function H(){const Q=v;return Q>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+Q+" texture units while this GPU supports only "+n.maxTextures),v+=1,Q}function y(Q){const B=[];return B.push(Q.wrapS),B.push(Q.wrapT),B.push(Q.wrapR||0),B.push(Q.magFilter),B.push(Q.minFilter),B.push(Q.anisotropy),B.push(Q.internalFormat),B.push(Q.format),B.push(Q.type),B.push(Q.generateMipmaps),B.push(Q.premultiplyAlpha),B.push(Q.flipY),B.push(Q.unpackAlignment),B.push(Q.colorSpace),B.join()}function x(Q,B){const Z=i.get(Q);if(Q.isVideoTexture&&be(Q),Q.isRenderTargetTexture===!1&&Q.version>0&&Z.__version!==Q.version){const te=Q.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(Z,Q,B);return}}t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+B)}function R(Q,B){const Z=i.get(Q);if(Q.version>0&&Z.__version!==Q.version){se(Z,Q,B);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+B)}function T(Q,B){const Z=i.get(Q);if(Q.version>0&&Z.__version!==Q.version){se(Z,Q,B);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+B)}function F(Q,B){const Z=i.get(Q);if(Q.version>0&&Z.__version!==Q.version){k(Z,Q,B);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+B)}const X={[Vl]:r.REPEAT,[gs]:r.CLAMP_TO_EDGE,[Wl]:r.MIRRORED_REPEAT},J={[ii]:r.NEAREST,[Vm]:r.NEAREST_MIPMAP_NEAREST,[LA]:r.NEAREST_MIPMAP_LINEAR,[br]:r.LINEAR,[Zl]:r.LINEAR_MIPMAP_NEAREST,[fs]:r.LINEAR_MIPMAP_LINEAR},K={[qm]:r.NEVER,[iC]:r.ALWAYS,[_m]:r.LESS,[ff]:r.LEQUAL,[$m]:r.EQUAL,[rC]:r.GEQUAL,[eC]:r.GREATER,[tC]:r.NOTEQUAL};function L(Q,B){if(B.type===Wi&&e.has("OES_texture_float_linear")===!1&&(B.magFilter===br||B.magFilter===Zl||B.magFilter===LA||B.magFilter===fs||B.minFilter===br||B.minFilter===Zl||B.minFilter===LA||B.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(Q,r.TEXTURE_WRAP_S,X[B.wrapS]),r.texParameteri(Q,r.TEXTURE_WRAP_T,X[B.wrapT]),(Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY)&&r.texParameteri(Q,r.TEXTURE_WRAP_R,X[B.wrapR]),r.texParameteri(Q,r.TEXTURE_MAG_FILTER,J[B.magFilter]),r.texParameteri(Q,r.TEXTURE_MIN_FILTER,J[B.minFilter]),B.compareFunction&&(r.texParameteri(Q,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(Q,r.TEXTURE_COMPARE_FUNC,K[B.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(B.magFilter===ii||B.minFilter!==LA&&B.minFilter!==fs||B.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(B.anisotropy>1||i.get(B).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(Q,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,n.getMaxAnisotropy())),i.get(B).__currentAnisotropy=B.anisotropy}}}function j(Q,B){let Z=!1;Q.__webglInit===void 0&&(Q.__webglInit=!0,B.addEventListener("dispose",S));const te=B.source;let Ae=u.get(te);Ae===void 0&&(Ae={},u.set(te,Ae));const ie=y(B);if(ie!==Q.__cacheKey){Ae[ie]===void 0&&(Ae[ie]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),Ae[ie].usedTimes++;const we=Ae[Q.__cacheKey];we!==void 0&&(Ae[Q.__cacheKey].usedTimes--,we.usedTimes===0&&O(B)),Q.__cacheKey=ie,Q.__webglTexture=Ae[ie].texture}return Z}function se(Q,B,Z){let te=r.TEXTURE_2D;(B.isDataArrayTexture||B.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),B.isData3DTexture&&(te=r.TEXTURE_3D);const Ae=j(Q,B),ie=B.source;t.bindTexture(te,Q.__webglTexture,r.TEXTURE0+Z);const we=i.get(ie);if(ie.version!==we.__version||Ae===!0){t.activeTexture(r.TEXTURE0+Z);const Ee=Ht.getPrimaries(Ht.workingColorSpace),fe=B.colorSpace===Zi?null:Ht.getPrimaries(B.colorSpace),ke=B.colorSpace===Zi||Ee===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,B.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,B.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let De=w(B.image,!1,n.maxTextureSize);De=Be(B,De);const Re=s.convert(B.format,B.colorSpace),Fe=s.convert(B.type);let Je=D(B.internalFormat,Re,Fe,B.colorSpace,B.isVideoTexture);L(te,B);let me;const Ue=B.mipmaps,je=B.isVideoTexture!==!0,nt=we.__version===void 0||Ae===!0,W=ie.dataReady,Ce=C(B,De);if(B.isDepthTexture)Je=m(B.format===ps,B.type),nt&&(je?t.texStorage2D(r.TEXTURE_2D,1,Je,De.width,De.height):t.texImage2D(r.TEXTURE_2D,0,Je,De.width,De.height,0,Re,Fe,null));else if(B.isDataTexture)if(Ue.length>0){je&&nt&&t.texStorage2D(r.TEXTURE_2D,Ce,Je,Ue[0].width,Ue[0].height);for(let ne=0,Me=Ue.length;ne<Me;ne++)me=Ue[ne],je?W&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,me.width,me.height,Re,Fe,me.data):t.texImage2D(r.TEXTURE_2D,ne,Je,me.width,me.height,0,Re,Fe,me.data);B.generateMipmaps=!1}else je?(nt&&t.texStorage2D(r.TEXTURE_2D,Ce,Je,De.width,De.height),W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,De.width,De.height,Re,Fe,De.data)):t.texImage2D(r.TEXTURE_2D,0,Je,De.width,De.height,0,Re,Fe,De.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){je&&nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Je,Ue[0].width,Ue[0].height,De.depth);for(let ne=0,Me=Ue.length;ne<Me;ne++)if(me=Ue[ne],B.format!==bi)if(Re!==null)if(je){if(W)if(B.layerUpdates.size>0){const Pe=pd(me.width,me.height,B.format,B.type);for(const ye of B.layerUpdates){const ht=me.data.subarray(ye*Pe/me.data.BYTES_PER_ELEMENT,(ye+1)*Pe/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,ye,me.width,me.height,1,Re,ht,0,0)}B.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,De.depth,Re,me.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Je,me.width,me.height,De.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,De.depth,Re,Fe,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Je,me.width,me.height,De.depth,0,Re,Fe,me.data)}else{je&&nt&&t.texStorage2D(r.TEXTURE_2D,Ce,Je,Ue[0].width,Ue[0].height);for(let ne=0,Me=Ue.length;ne<Me;ne++)me=Ue[ne],B.format!==bi?Re!==null?je?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,me.width,me.height,Re,me.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Je,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?W&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,me.width,me.height,Re,Fe,me.data):t.texImage2D(r.TEXTURE_2D,ne,Je,me.width,me.height,0,Re,Fe,me.data)}else if(B.isDataArrayTexture)if(je){if(nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,Je,De.width,De.height,De.depth),W)if(B.layerUpdates.size>0){const ne=pd(De.width,De.height,B.format,B.type);for(const Me of B.layerUpdates){const Pe=De.data.subarray(Me*ne/De.data.BYTES_PER_ELEMENT,(Me+1)*ne/De.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Me,De.width,De.height,1,Re,Fe,Pe)}B.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,De.width,De.height,De.depth,Re,Fe,De.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Je,De.width,De.height,De.depth,0,Re,Fe,De.data);else if(B.isData3DTexture)je?(nt&&t.texStorage3D(r.TEXTURE_3D,Ce,Je,De.width,De.height,De.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,De.width,De.height,De.depth,Re,Fe,De.data)):t.texImage3D(r.TEXTURE_3D,0,Je,De.width,De.height,De.depth,0,Re,Fe,De.data);else if(B.isFramebufferTexture){if(nt)if(je)t.texStorage2D(r.TEXTURE_2D,Ce,Je,De.width,De.height);else{let ne=De.width,Me=De.height;for(let Pe=0;Pe<Ce;Pe++)t.texImage2D(r.TEXTURE_2D,Pe,Je,ne,Me,0,Re,Fe,null),ne>>=1,Me>>=1}}else if(Ue.length>0){if(je&&nt){const ne=Qe(Ue[0]);t.texStorage2D(r.TEXTURE_2D,Ce,Je,ne.width,ne.height)}for(let ne=0,Me=Ue.length;ne<Me;ne++)me=Ue[ne],je?W&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,Re,Fe,me):t.texImage2D(r.TEXTURE_2D,ne,Je,Re,Fe,me);B.generateMipmaps=!1}else if(je){if(nt){const ne=Qe(De);t.texStorage2D(r.TEXTURE_2D,Ce,Je,ne.width,ne.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,Fe,De)}else t.texImage2D(r.TEXTURE_2D,0,Je,Re,Fe,De);f(B)&&d(te),we.__version=ie.version,B.onUpdate&&B.onUpdate(B)}Q.__version=B.version}function k(Q,B,Z){if(B.image.length!==6)return;const te=j(Q,B),Ae=B.source;t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+Z);const ie=i.get(Ae);if(Ae.version!==ie.__version||te===!0){t.activeTexture(r.TEXTURE0+Z);const we=Ht.getPrimaries(Ht.workingColorSpace),Ee=B.colorSpace===Zi?null:Ht.getPrimaries(B.colorSpace),fe=B.colorSpace===Zi||we===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,B.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,B.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ke=B.isCompressedTexture||B.image[0].isCompressedTexture,De=B.image[0]&&B.image[0].isDataTexture,Re=[];for(let Me=0;Me<6;Me++)!ke&&!De?Re[Me]=w(B.image[Me],!0,n.maxCubemapSize):Re[Me]=De?B.image[Me].image:B.image[Me],Re[Me]=Be(B,Re[Me]);const Fe=Re[0],Je=s.convert(B.format,B.colorSpace),me=s.convert(B.type),Ue=D(B.internalFormat,Je,me,B.colorSpace),je=B.isVideoTexture!==!0,nt=ie.__version===void 0||te===!0,W=Ae.dataReady;let Ce=C(B,Fe);L(r.TEXTURE_CUBE_MAP,B);let ne;if(ke){je&&nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,Ue,Fe.width,Fe.height);for(let Me=0;Me<6;Me++){ne=Re[Me].mipmaps;for(let Pe=0;Pe<ne.length;Pe++){const ye=ne[Pe];B.format!==bi?Je!==null?je?W&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe,0,0,ye.width,ye.height,Je,ye.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe,0,0,ye.width,ye.height,Je,me,ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe,Ue,ye.width,ye.height,0,Je,me,ye.data)}}}else{if(ne=B.mipmaps,je&&nt){ne.length>0&&Ce++;const Me=Qe(Re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,Ue,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(De){je?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Re[Me].width,Re[Me].height,Je,me,Re[Me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Ue,Re[Me].width,Re[Me].height,0,Je,me,Re[Me].data);for(let Pe=0;Pe<ne.length;Pe++){const ye=ne[Pe].image[Me].image;je?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe+1,0,0,ye.width,ye.height,Je,me,ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe+1,Ue,ye.width,ye.height,0,Je,me,ye.data)}}else{je?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Je,me,Re[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Ue,Je,me,Re[Me]);for(let Pe=0;Pe<ne.length;Pe++){const ye=ne[Pe];je?W&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe+1,0,0,Je,me,ye.image[Me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Pe+1,Ue,Je,me,ye.image[Me])}}}f(B)&&d(r.TEXTURE_CUBE_MAP),ie.__version=Ae.version,B.onUpdate&&B.onUpdate(B)}Q.__version=B.version}function N(Q,B,Z,te,Ae,ie){const we=s.convert(Z.format,Z.colorSpace),Ee=s.convert(Z.type),fe=D(Z.internalFormat,we,Ee,Z.colorSpace);if(!i.get(B).__hasExternalTextures){const ke=Math.max(1,B.width>>ie),De=Math.max(1,B.height>>ie);Ae===r.TEXTURE_3D||Ae===r.TEXTURE_2D_ARRAY?t.texImage3D(Ae,ie,fe,ke,De,B.depth,0,we,Ee,null):t.texImage2D(Ae,ie,fe,ke,De,0,we,Ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,Q),Te(B)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Ae,i.get(Z).__webglTexture,0,Se(B)):(Ae===r.TEXTURE_2D||Ae>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,Ae,i.get(Z).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(Q,B,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,Q),B.depthBuffer){const te=B.depthTexture,Ae=te&&te.isDepthTexture?te.type:null,ie=m(B.stencilBuffer,Ae),we=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=Se(B);Te(B)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,ie,B.width,B.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,ie,B.width,B.height):r.renderbufferStorage(r.RENDERBUFFER,ie,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,Q)}else{const te=B.textures;for(let Ae=0;Ae<te.length;Ae++){const ie=te[Ae],we=s.convert(ie.format,ie.colorSpace),Ee=s.convert(ie.type),fe=D(ie.internalFormat,we,Ee,ie.colorSpace),ke=Se(B);Z&&Te(B)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,fe,B.width,B.height):Te(B)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke,fe,B.width,B.height):r.renderbufferStorage(r.RENDERBUFFER,fe,B.width,B.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ee(Q,B){if(B&&B.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,Q),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(B.depthTexture).__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)&&(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),x(B.depthTexture,0);const Z=i.get(B.depthTexture).__webglTexture,te=Se(B);if(B.depthTexture.format===oa)Te(B)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(B.depthTexture.format===ps)Te(B)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ue(Q){const B=i.get(Q),Z=Q.isWebGLCubeRenderTarget===!0;if(B.__boundDepthTexture!==Q.depthTexture){const te=Q.depthTexture;if(B.__depthDisposeCallback&&B.__depthDisposeCallback(),te){const Ae=()=>{delete B.__boundDepthTexture,delete B.__depthDisposeCallback,te.removeEventListener("dispose",Ae)};te.addEventListener("dispose",Ae),B.__depthDisposeCallback=Ae}B.__boundDepthTexture=te}if(Q.depthTexture&&!B.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ee(B.__webglFramebuffer,Q)}else if(Z){B.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(r.FRAMEBUFFER,B.__webglFramebuffer[te]),B.__webglDepthbuffer[te]===void 0)B.__webglDepthbuffer[te]=r.createRenderbuffer(),oe(B.__webglDepthbuffer[te],Q,!1);else{const Ae=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ie=B.__webglDepthbuffer[te];r.bindRenderbuffer(r.RENDERBUFFER,ie),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ae,r.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,B.__webglFramebuffer),B.__webglDepthbuffer===void 0)B.__webglDepthbuffer=r.createRenderbuffer(),oe(B.__webglDepthbuffer,Q,!1);else{const te=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=B.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Ae)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(Q,B,Z){const te=i.get(Q);B!==void 0&&N(te.__webglFramebuffer,Q,Q.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&ue(Q)}function xe(Q){const B=Q.texture,Z=i.get(Q),te=i.get(B);Q.addEventListener("dispose",P);const Ae=Q.textures,ie=Q.isWebGLCubeRenderTarget===!0,we=Ae.length>1;if(we||(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=B.version,a.memory.textures++),ie){Z.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(B.mipmaps&&B.mipmaps.length>0){Z.__webglFramebuffer[Ee]=[];for(let fe=0;fe<B.mipmaps.length;fe++)Z.__webglFramebuffer[Ee][fe]=r.createFramebuffer()}else Z.__webglFramebuffer[Ee]=r.createFramebuffer()}else{if(B.mipmaps&&B.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ee=0;Ee<B.mipmaps.length;Ee++)Z.__webglFramebuffer[Ee]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(we)for(let Ee=0,fe=Ae.length;Ee<fe;Ee++){const ke=i.get(Ae[Ee]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),a.memory.textures++)}if(Q.samples>0&&Te(Q)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ee=0;Ee<Ae.length;Ee++){const fe=Ae[Ee];Z.__webglColorRenderbuffer[Ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee]);const ke=s.convert(fe.format,fe.colorSpace),De=s.convert(fe.type),Re=D(fe.internalFormat,ke,De,fe.colorSpace,Q.isXRRenderTarget===!0),Fe=Se(Q);r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Re,Q.width,Q.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),Q.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),oe(Z.__webglDepthRenderbuffer,Q,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),L(r.TEXTURE_CUBE_MAP,B);for(let Ee=0;Ee<6;Ee++)if(B.mipmaps&&B.mipmaps.length>0)for(let fe=0;fe<B.mipmaps.length;fe++)N(Z.__webglFramebuffer[Ee][fe],Q,B,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,fe);else N(Z.__webglFramebuffer[Ee],Q,B,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);f(B)&&d(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let Ee=0,fe=Ae.length;Ee<fe;Ee++){const ke=Ae[Ee],De=i.get(ke);t.bindTexture(r.TEXTURE_2D,De.__webglTexture),L(r.TEXTURE_2D,ke),N(Z.__webglFramebuffer,Q,ke,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,0),f(ke)&&d(r.TEXTURE_2D)}t.unbindTexture()}else{let Ee=r.TEXTURE_2D;if((Q.isWebGL3DRenderTarget||Q.isWebGLArrayRenderTarget)&&(Ee=Q.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ee,te.__webglTexture),L(Ee,B),B.mipmaps&&B.mipmaps.length>0)for(let fe=0;fe<B.mipmaps.length;fe++)N(Z.__webglFramebuffer[fe],Q,B,r.COLOR_ATTACHMENT0,Ee,fe);else N(Z.__webglFramebuffer,Q,B,r.COLOR_ATTACHMENT0,Ee,0);f(B)&&d(Ee),t.unbindTexture()}Q.depthBuffer&&ue(Q)}function Ie(Q){const B=Q.textures;for(let Z=0,te=B.length;Z<te;Z++){const Ae=B[Z];if(f(Ae)){const ie=Q.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,we=i.get(Ae).__webglTexture;t.bindTexture(ie,we),d(ie),t.unbindTexture()}}}const de=[],G=[];function _e(Q){if(Q.samples>0){if(Te(Q)===!1){const B=Q.textures,Z=Q.width,te=Q.height;let Ae=r.COLOR_BUFFER_BIT;const ie=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=i.get(Q),Ee=B.length>1;if(Ee)for(let fe=0;fe<B.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let fe=0;fe<B.length;fe++){if(Q.resolveDepthBuffer&&(Q.depthBuffer&&(Ae|=r.DEPTH_BUFFER_BIT),Q.stencilBuffer&&Q.resolveStencilBuffer&&(Ae|=r.STENCIL_BUFFER_BIT)),Ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[fe]);const ke=i.get(B[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ke,0)}r.blitFramebuffer(0,0,Z,te,0,0,Z,te,Ae,r.NEAREST),A===!0&&(de.length=0,G.length=0,de.push(r.COLOR_ATTACHMENT0+fe),Q.depthBuffer&&Q.resolveDepthBuffer===!1&&(de.push(ie),G.push(ie),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,G)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ee)for(let fe=0;fe<B.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,we.__webglColorRenderbuffer[fe]);const ke=i.get(B[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(Q.depthBuffer&&Q.resolveDepthBuffer===!1&&A){const B=Q.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[B])}}}function Se(Q){return Math.min(n.maxSamples,Q.samples)}function Te(Q){const B=i.get(Q);return Q.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function be(Q){const B=a.render.frame;l.get(Q)!==B&&(l.set(Q,B),Q.update())}function Be(Q,B){const Z=Q.colorSpace,te=Q.format,Ae=Q.type;return Q.isCompressedTexture===!0||Q.isVideoTexture===!0||Z!==qi&&Z!==Zi&&(Ht.getTransfer(Z)===Zt?(te!==bi||Ae!==Fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),B}function Qe(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement?(c.width=Q.naturalWidth||Q.width,c.height=Q.naturalHeight||Q.height):typeof VideoFrame<"u"&&Q instanceof VideoFrame?(c.width=Q.displayWidth,c.height=Q.displayHeight):(c.width=Q.width,c.height=Q.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=M,this.setTexture2D=x,this.setTexture2DArray=R,this.setTexture3D=T,this.setTextureCube=F,this.rebindTextures=pe,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=N,this.useMultisampledRTT=Te}function oy(r,e){function t(i,n=Zi){let s;const a=Ht.getTransfer(n);if(i===Fr)return r.UNSIGNED_BYTE;if(i===_l)return r.UNSIGNED_SHORT_4_4_4_4;if(i===$l)return r.UNSIGNED_SHORT_5_5_5_1;if(i===af)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===nf)return r.BYTE;if(i===sf)return r.SHORT;if(i===lo)return r.UNSIGNED_SHORT;if(i===ql)return r.INT;if(i===Fn)return r.UNSIGNED_INT;if(i===Wi)return r.FLOAT;if(i===aa)return r.HALF_FLOAT;if(i===of)return r.ALPHA;if(i===Af)return r.RGB;if(i===bi)return r.RGBA;if(i===cf)return r.LUMINANCE;if(i===lf)return r.LUMINANCE_ALPHA;if(i===oa)return r.DEPTH_COMPONENT;if(i===ps)return r.DEPTH_STENCIL;if(i===eh)return r.RED;if(i===th)return r.RED_INTEGER;if(i===hf)return r.RG;if(i===rh)return r.RG_INTEGER;if(i===ih)return r.RGBA_INTEGER;if(i===RA||i===FA||i===kA||i===UA)if(a===Zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===RA)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===FA)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kA)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===UA)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===RA)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===FA)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kA)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===UA)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nh||i===sh||i===ah||i===oh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ah||i===ch||i===lh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ah||i===ch)return a===Zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hh||i===uh||i===gh||i===fh||i===dh||i===ph||i===wh||i===vh||i===mh||i===Ch||i===Bh||i===Eh||i===Dh||i===yh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ph)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ch)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yh)return a===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===GA||i===Ih||i===Mh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===GA)return a===Zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ih)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uf||i===Ph||i===Qh||i===xh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===GA)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ph)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ds?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class Ay extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wc extends Ur{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cy={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,A=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const w of e.hand.values()){const f=t.getJointPose(w,i),d=this._getHandJoint(c,w);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=l.position.distanceTo(h.position),g=.02,p=.005;c.inputState.pinching&&u>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else A!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(A.matrix.fromArray(s.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,s.linearVelocity?(A.hasLinearVelocity=!0,A.linearVelocity.copy(s.linearVelocity)):A.hasLinearVelocity=!1,s.angularVelocity?(A.hasAngularVelocity=!0,A.angularVelocity.copy(s.angularVelocity)):A.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cy)))}return o!==null&&(o.visible=n!==null),A!==null&&(A.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new pr,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Dr({vertexShader:ly,fragmentShader:hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nr(new Es(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gy extends dn{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",A=1,c=null,l=null,h=null,u=null,g=null,p=null;const w=new uy,f=t.getContextAttributes();let d=null,D=null;const m=[],C=[],S=new at;let P=null;const I=new di;I.layers.enable(1),I.viewport=new qt;const O=new di;O.layers.enable(2),O.viewport=new qt;const z=[I,O],v=new Ay;v.layers.enable(1),v.layers.enable(2);let M=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let N=m[k];return N===void 0&&(N=new wu,m[k]=N),N.getTargetRaySpace()},this.getControllerGrip=function(k){let N=m[k];return N===void 0&&(N=new wu,m[k]=N),N.getGripSpace()},this.getHand=function(k){let N=m[k];return N===void 0&&(N=new wu,m[k]=N),N.getHandSpace()};function y(k){const N=C.indexOf(k.inputSource);if(N===-1)return;const oe=m[N];oe!==void 0&&(oe.update(k.inputSource,k.frame,c||a),oe.dispatchEvent({type:k.type,data:k.inputSource}))}function x(){n.removeEventListener("select",y),n.removeEventListener("selectstart",y),n.removeEventListener("selectend",y),n.removeEventListener("squeeze",y),n.removeEventListener("squeezestart",y),n.removeEventListener("squeezeend",y),n.removeEventListener("end",x),n.removeEventListener("inputsourceschange",R);for(let k=0;k<m.length;k++){const N=C[k];N!==null&&(C[k]=null,m[k].disconnect(N))}M=null,H=null,w.reset(),e.setRenderTarget(d),g=null,u=null,h=null,n=null,D=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:g},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(k){if(n=k,n!==null){if(d=e.getRenderTarget(),n.addEventListener("select",y),n.addEventListener("selectstart",y),n.addEventListener("selectend",y),n.addEventListener("squeeze",y),n.addEventListener("squeezestart",y),n.addEventListener("squeezeend",y),n.addEventListener("end",x),n.addEventListener("inputsourceschange",R),f.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(S),n.renderState.layers===void 0){const N={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(n,t,N),n.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),D=new Jr(g.framebufferWidth,g.framebufferHeight,{format:bi,type:Fr,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let N=null,oe=null,ee=null;f.depth&&(ee=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=f.stencil?ps:oa,oe=f.stencil?ds:Fn);const ue={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};h=new XRWebGLBinding(n,t),u=h.createProjectionLayer(ue),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),D=new Jr(u.textureWidth,u.textureHeight,{format:bi,type:Fr,depthTexture:new uu(u.textureWidth,u.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(A),c=null,a=await n.requestReferenceSpace(o),se.setContext(n),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function R(k){for(let N=0;N<k.removed.length;N++){const oe=k.removed[N],ee=C.indexOf(oe);ee>=0&&(C[ee]=null,m[ee].disconnect(oe))}for(let N=0;N<k.added.length;N++){const oe=k.added[N];let ee=C.indexOf(oe);if(ee===-1){for(let pe=0;pe<m.length;pe++)if(pe>=C.length){C.push(oe),ee=pe;break}else if(C[pe]===null){C[pe]=oe,ee=pe;break}if(ee===-1)break}const ue=m[ee];ue&&ue.connect(oe)}}const T=new V,F=new V;function X(k,N,oe){T.setFromMatrixPosition(N.matrixWorld),F.setFromMatrixPosition(oe.matrixWorld);const ee=T.distanceTo(F),ue=N.projectionMatrix.elements,pe=oe.projectionMatrix.elements,xe=ue[14]/(ue[10]-1),Ie=ue[14]/(ue[10]+1),de=(ue[9]+1)/ue[5],G=(ue[9]-1)/ue[5],_e=(ue[8]-1)/ue[0],Se=(pe[8]+1)/pe[0],Te=xe*_e,be=xe*Se,Be=ee/(-_e+Se),Qe=Be*-_e;if(N.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Qe),k.translateZ(Be),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),ue[10]===-1)k.projectionMatrix.copy(N.projectionMatrix),k.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{const Q=xe+Be,B=Ie+Be,Z=Te-Qe,te=be+(ee-Qe),Ae=de*Ie/B*Q,ie=G*Ie/B*Q;k.projectionMatrix.makePerspective(Z,te,Ae,ie,Q,B),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function J(k,N){N===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(N.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(n===null)return;let N=k.near,oe=k.far;w.texture!==null&&(w.depthNear>0&&(N=w.depthNear),w.depthFar>0&&(oe=w.depthFar)),v.near=O.near=I.near=N,v.far=O.far=I.far=oe,(M!==v.near||H!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),M=v.near,H=v.far);const ee=k.parent,ue=v.cameras;J(v,ee);for(let pe=0;pe<ue.length;pe++)J(ue[pe],ee);ue.length===2?X(v,I,O):v.projectionMatrix.copy(I.projectionMatrix),K(k,v,ee)};function K(k,N,oe){oe===null?k.matrix.copy(N.matrixWorld):(k.matrix.copy(oe.matrixWorld),k.matrix.invert(),k.matrix.multiply(N.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(N.projectionMatrix),k.projectionMatrixInverse.copy(N.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Hh*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&g===null))return A},this.setFoveation=function(k){A=k,u!==null&&(u.fixedFoveation=k),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=k)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(v)};let L=null;function j(k,N){if(l=N.getViewerPose(c||a),p=N,l!==null){const oe=l.views;g!==null&&(e.setRenderTargetFramebuffer(D,g.framebuffer),e.setRenderTarget(D));let ee=!1;oe.length!==v.cameras.length&&(v.cameras.length=0,ee=!0);for(let pe=0;pe<oe.length;pe++){const xe=oe[pe];let Ie=null;if(g!==null)Ie=g.getViewport(xe);else{const G=h.getViewSubImage(u,xe);Ie=G.viewport,pe===0&&(e.setRenderTargetTextures(D,G.colorTexture,u.ignoreDepthValues?void 0:G.depthStencilTexture),e.setRenderTarget(D))}let de=z[pe];de===void 0&&(de=new di,de.layers.enable(pe),de.viewport=new qt,z[pe]=de),de.matrix.fromArray(xe.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(xe.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),pe===0&&(v.matrix.copy(de.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ee===!0&&v.cameras.push(de)}const ue=n.enabledFeatures;if(ue&&ue.includes("depth-sensing")){const pe=h.getDepthInformation(oe[0]);pe&&pe.isValid&&pe.texture&&w.init(e,pe,n.renderState)}}for(let oe=0;oe<m.length;oe++){const ee=C[oe],ue=m[oe];ee!==null&&ue!==void 0&&ue.update(ee,N,c||a)}L&&L(k,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),p=null}const se=new zf;se.setAnimationLoop(j),this.setAnimationLoop=function(k){L=k},this.dispose=function(){}}}const Ms=new mn,fy=new Ut;function dy(r,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function i(f,d){d.color.getRGB(f.fogColor.value,kf(r)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function n(f,d,D,m,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(f,d):d.isMeshToonMaterial?(s(f,d),h(f,d)):d.isMeshPhongMaterial?(s(f,d),l(f,d)):d.isMeshStandardMaterial?(s(f,d),u(f,d),d.isMeshPhysicalMaterial&&g(f,d,C)):d.isMeshMatcapMaterial?(s(f,d),p(f,d)):d.isMeshDepthMaterial?s(f,d):d.isMeshDistanceMaterial?(s(f,d),w(f,d)):d.isMeshNormalMaterial?s(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?A(f,d,D,m):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===dr&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===dr&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const D=e.get(d),m=D.envMap,C=D.envMapRotation;m&&(f.envMap.value=m,Ms.copy(C),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),f.envMapRotation.value.setFromMatrix4(fy.makeRotationFromEuler(Ms)),f.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function A(f,d,D,m){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*D,f.scale.value=m*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function h(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function g(f,d,D){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dr&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=D.texture,f.transmissionSamplerSize.value.set(D.width,D.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function p(f,d){d.matcap&&(f.matcap.value=d.matcap)}function w(f,d){const D=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(D.matrixWorld),f.nearDistance.value=D.shadow.camera.near,f.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function py(r,e,t,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function A(D,m){const C=m.program;i.uniformBlockBinding(D,C)}function c(D,m){let C=n[D.id];C===void 0&&(p(D),C=l(D),n[D.id]=C,D.addEventListener("dispose",f));const S=m.program;i.updateUBOMapping(D,S);const P=e.render.frame;s[D.id]!==P&&(u(D),s[D.id]=P)}function l(D){const m=h();D.__bindingPointIndex=m;const C=r.createBuffer(),S=D.__size,P=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,S,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,m,C),C}function h(){for(let D=0;D<o;D++)if(a.indexOf(D)===-1)return a.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(D){const m=n[D.id],C=D.uniforms,S=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,m);for(let P=0,I=C.length;P<I;P++){const O=Array.isArray(C[P])?C[P]:[C[P]];for(let z=0,v=O.length;z<v;z++){const M=O[z];if(g(M,P,z,S)===!0){const H=M.__offset,y=Array.isArray(M.value)?M.value:[M.value];let x=0;for(let R=0;R<y.length;R++){const T=y[R],F=w(T);typeof T=="number"||typeof T=="boolean"?(M.__data[0]=T,r.bufferSubData(r.UNIFORM_BUFFER,H+x,M.__data)):T.isMatrix3?(M.__data[0]=T.elements[0],M.__data[1]=T.elements[1],M.__data[2]=T.elements[2],M.__data[3]=0,M.__data[4]=T.elements[3],M.__data[5]=T.elements[4],M.__data[6]=T.elements[5],M.__data[7]=0,M.__data[8]=T.elements[6],M.__data[9]=T.elements[7],M.__data[10]=T.elements[8],M.__data[11]=0):(T.toArray(M.__data,x),x+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,M.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(D,m,C,S){const P=D.value,I=m+"_"+C;if(S[I]===void 0)return typeof P=="number"||typeof P=="boolean"?S[I]=P:S[I]=P.clone(),!0;{const O=S[I];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return S[I]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function p(D){const m=D.uniforms;let C=0;const S=16;for(let I=0,O=m.length;I<O;I++){const z=Array.isArray(m[I])?m[I]:[m[I]];for(let v=0,M=z.length;v<M;v++){const H=z[v],y=Array.isArray(H.value)?H.value:[H.value];for(let x=0,R=y.length;x<R;x++){const T=y[x],F=w(T),X=C%S,J=X%F.boundary,K=X+J;C+=J,K!==0&&S-K<F.storage&&(C+=S-K),H.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=C,C+=F.storage}}}const P=C%S;return P>0&&(C+=S-P),D.__size=C,D.__cache={},this}function w(D){const m={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(m.boundary=4,m.storage=4):D.isVector2?(m.boundary=8,m.storage=8):D.isVector3||D.isColor?(m.boundary=16,m.storage=12):D.isVector4?(m.boundary=16,m.storage=16):D.isMatrix3?(m.boundary=48,m.storage=48):D.isMatrix4?(m.boundary=64,m.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),m}function f(D){const m=D.target;m.removeEventListener("dispose",f);const C=a.indexOf(m.__bindingPointIndex);a.splice(C,1),r.deleteBuffer(n[m.id]),delete n[m.id],delete s[m.id]}function d(){for(const D in n)r.deleteBuffer(n[D]);a=[],n={},s={}}return{bind:A,update:c,dispose:d}}class wy{constructor(e={}){const{canvas:t=aC(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:A=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const g=new Uint32Array(4),p=new Int32Array(4);let w=null,f=null;const d=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=Rn,this.toneMappingExposure=1;const m=this;let C=!1,S=0,P=0,I=null,O=-1,z=null;const v=new qt,M=new qt;let H=null;const y=new ot(0);let x=0,R=t.width,T=t.height,F=1,X=null,J=null;const K=new qt(0,0,R,T),L=new qt(0,0,R,T);let j=!1;const se=new hc;let k=!1,N=!1;const oe=new Ut,ee=new Ut,ue=new V,pe=new qt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function de(){return I===null?F:1}let G=i;function _e(b,$){return t.getContext(b,$)}try{const b={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:A,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ta}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",ye,!1),G===null){const $="webgl2";if(G=_e($,b),G===null)throw _e($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Se,Te,be,Be,Qe,Q,B,Z,te,Ae,ie,we,Ee,fe,ke,De,Re,Fe,Je,me,Ue,je,nt,W;function Ce(){Se=new yD(G),Se.init(),je=new oy(G,Se),Te=new wD(G,Se,e,je),be=new ny(G),Te.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),Be=new PD(G),Qe=new j0,Q=new ay(G,Se,be,Qe,Te,je,Be),B=new mD(m),Z=new DD(m),te=new HC(G),nt=new dD(G,te),Ae=new ID(G,te,Be,nt),ie=new xD(G,Ae,te,Be),Je=new QD(G,Te,Q),De=new vD(Qe),we=new X0(m,B,Z,Se,Te,nt,De),Ee=new dy(m,Qe),fe=new K0,ke=new $0(Se),Fe=new fD(m,B,Z,be,ie,u,A),Re=new ry(m,ie,Te),W=new py(G,Be,Te,be),me=new pD(G,Se,Be),Ue=new MD(G,Se,Be),Be.programs=we.programs,m.capabilities=Te,m.extensions=Se,m.properties=Qe,m.renderLists=fe,m.shadowMap=Re,m.state=be,m.info=Be}Ce();const ne=new gy(m,G);this.xr=ne,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=Se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(b){b!==void 0&&(F=b,this.setSize(R,T,!1))},this.getSize=function(b){return b.set(R,T)},this.setSize=function(b,$,le=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=b,T=$,t.width=Math.floor(b*F),t.height=Math.floor($*F),le===!0&&(t.style.width=b+"px",t.style.height=$+"px"),this.setViewport(0,0,b,$)},this.getDrawingBufferSize=function(b){return b.set(R*F,T*F).floor()},this.setDrawingBufferSize=function(b,$,le){R=b,T=$,F=le,t.width=Math.floor(b*le),t.height=Math.floor($*le),this.setViewport(0,0,b,$)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,$,le,he){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,$,le,he),be.viewport(v.copy(K).multiplyScalar(F).round())},this.getScissor=function(b){return b.copy(L)},this.setScissor=function(b,$,le,he){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,$,le,he),be.scissor(M.copy(L).multiplyScalar(F).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(b){be.setScissorTest(j=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){J=b},this.getClearColor=function(b){return b.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(b=!0,$=!0,le=!0){let he=0;if(b){let q=!1;if(I!==null){const He=I.texture.format;q=He===ih||He===rh||He===th}if(q){const He=I.texture.type,Ye=He===Fr||He===Fn||He===lo||He===ds||He===_l||He===$l,ve=Fe.getClearColor(),Ke=Fe.getClearAlpha(),At=ve.r,tt=ve.g,it=ve.b;Ye?(g[0]=At,g[1]=tt,g[2]=it,g[3]=Ke,G.clearBufferuiv(G.COLOR,0,g)):(p[0]=At,p[1]=tt,p[2]=it,p[3]=Ke,G.clearBufferiv(G.COLOR,0,p))}else he|=G.COLOR_BUFFER_BIT}$&&(he|=G.DEPTH_BUFFER_BIT,G.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),le&&(he|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),fe.dispose(),ke.dispose(),Qe.dispose(),B.dispose(),Z.dispose(),ie.dispose(),nt.dispose(),W.dispose(),we.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Rt),ne.removeEventListener("sessionend",Yr),Mr.stop()};function Me(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=Be.autoReset,$=Re.enabled,le=Re.autoUpdate,he=Re.needsUpdate,q=Re.type;Ce(),Be.autoReset=b,Re.enabled=$,Re.autoUpdate=le,Re.needsUpdate=he,Re.type=q}function ye(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ht(b){const $=b.target;$.removeEventListener("dispose",ht),pt($)}function pt(b){$e(b),Qe.remove(b)}function $e(b){const $=Qe.get(b).programs;$!==void 0&&($.forEach(function(le){we.releaseProgram(le)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,$,le,he,q,He){$===null&&($=xe);const Ye=q.isMesh&&q.matrixWorld.determinant()<0,ve=Ys(b,$,le,he,q);be.setMaterial(he,Ye);let Ke=le.index,At=1;if(he.wireframe===!0){if(Ke=Ae.getWireframeAttribute(le),Ke===void 0)return;At=2}const tt=le.drawRange,it=le.attributes.position;let yt=tt.start*At,Ot=(tt.start+tt.count)*At;He!==null&&(yt=Math.max(yt,He.start*At),Ot=Math.min(Ot,(He.start+He.count)*At)),Ke!==null?(yt=Math.max(yt,0),Ot=Math.min(Ot,Ke.count)):it!=null&&(yt=Math.max(yt,0),Ot=Math.min(Ot,it.count));const Ft=Ot-yt;if(Ft<0||Ft===1/0)return;nt.setup(q,he,ve,le,Ke);let Xt,Lt=me;if(Ke!==null&&(Xt=te.get(Ke),Lt=Ue,Lt.setIndex(Xt)),q.isMesh)he.wireframe===!0?(be.setLineWidth(he.wireframeLinewidth*de()),Lt.setMode(G.LINES)):Lt.setMode(G.TRIANGLES);else if(q.isLine){let We=he.linewidth;We===void 0&&(We=1),be.setLineWidth(We*de()),q.isLineSegments?Lt.setMode(G.LINES):q.isLineLoop?Lt.setMode(G.LINE_LOOP):Lt.setMode(G.LINE_STRIP)}else q.isPoints?Lt.setMode(G.POINTS):q.isSprite&&Lt.setMode(G.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Lt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Lt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const We=q._multiDrawStarts,lr=q._multiDrawCounts,li=q._multiDrawCount,Or=Ke?te.get(Ke).bytesPerElement:1,hi=Qe.get(he).currentProgram.getUniforms();for(let Cr=0;Cr<li;Cr++)hi.setValue(G,"_gl_DrawID",Cr),Lt.render(We[Cr]/Or,lr[Cr])}else if(q.isInstancedMesh)Lt.renderInstances(yt,Ft,q.count);else if(le.isInstancedBufferGeometry){const We=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,lr=Math.min(le.instanceCount,We);Lt.renderInstances(yt,Ft,lr)}else Lt.render(yt,Ft)};function Ze(b,$,le){b.transparent===!0&&b.side===jr&&b.forceSinglePass===!1?(b.side=dr,b.needsUpdate=!0,Pr(b,$,le),b.side=Vi,b.needsUpdate=!0,Pr(b,$,le),b.side=jr):Pr(b,$,le)}this.compile=function(b,$,le=null){le===null&&(le=b),f=ke.get(le),f.init($),D.push(f),le.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),b!==le&&b.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(f.pushLight(q),q.castShadow&&f.pushShadow(q))}),f.setupLights();const he=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const He=q.material;if(He)if(Array.isArray(He))for(let Ye=0;Ye<He.length;Ye++){const ve=He[Ye];Ze(ve,le,q),he.add(ve)}else Ze(He,le,q),he.add(He)}),D.pop(),f=null,he},this.compileAsync=function(b,$,le=null){const he=this.compile(b,$,le);return new Promise(q=>{function He(){if(he.forEach(function(Ye){Qe.get(Ye).currentProgram.isReady()&&he.delete(Ye)}),he.size===0){q(b);return}setTimeout(He,10)}Se.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let bt=null;function Nt(b){bt&&bt(b)}function Rt(){Mr.stop()}function Yr(){Mr.start()}const Mr=new zf;Mr.setAnimationLoop(Nt),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(b){bt=b,ne.setAnimationLoop(b),b===null?Mr.stop():Mr.start()},ne.addEventListener("sessionstart",Rt),ne.addEventListener("sessionend",Yr),this.render=function(b,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera($),$=ne.getCamera()),b.isScene===!0&&b.onBeforeRender(m,b,$,I),f=ke.get(b,D.length),f.init($),D.push(f),ee.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),se.setFromProjectionMatrix(ee),N=this.localClippingEnabled,k=De.init(this.clippingPlanes,N),w=fe.get(b,d.length),w.init(),d.push(w),ne.enabled===!0&&ne.isPresenting===!0){const He=m.xr.getDepthSensingMesh();He!==null&&$r(He,$,-1/0,m.sortObjects)}$r(b,$,0,m.sortObjects),w.finish(),m.sortObjects===!0&&w.sort(X,J),Ie=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ie&&Fe.addToRenderList(w,b),this.info.render.frame++,k===!0&&De.beginShadows();const le=f.state.shadowsArray;Re.render(le,b,$),k===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const he=w.opaque,q=w.transmissive;if(f.setupLights(),$.isArrayCamera){const He=$.cameras;if(q.length>0)for(let Ye=0,ve=He.length;Ye<ve;Ye++){const Ke=He[Ye];wi(he,q,b,Ke)}Ie&&Fe.render(b);for(let Ye=0,ve=He.length;Ye<ve;Ye++){const Ke=He[Ye];Ai(w,b,Ke,Ke.viewport)}}else q.length>0&&wi(he,q,b,$),Ie&&Fe.render(b),Ai(w,b,$);I!==null&&(Q.updateMultisampleRenderTarget(I),Q.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(m,b,$),nt.resetDefaultState(),O=-1,z=null,D.pop(),D.length>0?(f=D[D.length-1],k===!0&&De.setGlobalState(m.clippingPlanes,f.state.camera)):f=null,d.pop(),d.length>0?w=d[d.length-1]:w=null};function $r(b,$,le,he){if(b.visible===!1)return;if(b.layers.test($.layers)){if(b.isGroup)le=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update($);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||se.intersectsSprite(b)){he&&pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const He=ie.update(b),Ye=b.material;Ye.visible&&w.push(b,He,Ye,le,pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||se.intersectsObject(b))){const He=ie.update(b),Ye=b.material;if(he&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),pe.copy(b.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),pe.copy(He.boundingSphere.center)),pe.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Ye)){const ve=He.groups;for(let Ke=0,At=ve.length;Ke<At;Ke++){const tt=ve[Ke],it=Ye[tt.materialIndex];it&&it.visible&&w.push(b,He,it,le,pe.z,tt)}}else Ye.visible&&w.push(b,He,Ye,le,pe.z,null)}}const q=b.children;for(let He=0,Ye=q.length;He<Ye;He++)$r(q[He],$,le,he)}function Ai(b,$,le,he){const q=b.opaque,He=b.transmissive,Ye=b.transparent;f.setupLightsView(le),k===!0&&De.setGlobalState(m.clippingPlanes,le),he&&be.viewport(v.copy(he)),q.length>0&&ci(q,$,le),He.length>0&&ci(He,$,le),Ye.length>0&&ci(Ye,$,le),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function wi(b,$,le,he){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[he.id]===void 0&&(f.state.transmissionRenderTarget[he.id]=new Jr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?aa:Fr,minFilter:fs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));const q=f.state.transmissionRenderTarget[he.id],He=he.viewport||v;q.setSize(He.z,He.w);const Ye=m.getRenderTarget();m.setRenderTarget(q),m.getClearColor(y),x=m.getClearAlpha(),x<1&&m.setClearColor(16777215,.5),m.clear(),Ie&&Fe.render(le);const ve=m.toneMapping;m.toneMapping=Rn;const Ke=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),f.setupLightsView(he),k===!0&&De.setGlobalState(m.clippingPlanes,he),ci(b,le,he),Q.updateMultisampleRenderTarget(q),Q.updateRenderTargetMipmap(q),Se.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let tt=0,it=$.length;tt<it;tt++){const yt=$[tt],Ot=yt.object,Ft=yt.geometry,Xt=yt.material,Lt=yt.group;if(Xt.side===jr&&Ot.layers.test(he.layers)){const We=Xt.side;Xt.side=dr,Xt.needsUpdate=!0,mr(Ot,le,he,Ft,Xt,Lt),Xt.side=We,Xt.needsUpdate=!0,At=!0}}At===!0&&(Q.updateMultisampleRenderTarget(q),Q.updateRenderTargetMipmap(q))}m.setRenderTarget(Ye),m.setClearColor(y,x),Ke!==void 0&&(he.viewport=Ke),m.toneMapping=ve}function ci(b,$,le){const he=$.isScene===!0?$.overrideMaterial:null;for(let q=0,He=b.length;q<He;q++){const Ye=b[q],ve=Ye.object,Ke=Ye.geometry,At=he===null?Ye.material:he,tt=Ye.group;ve.layers.test(le.layers)&&mr(ve,$,le,Ke,At,tt)}}function mr(b,$,le,he,q,He){b.onBeforeRender(m,$,le,he,q,He),b.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(m,$,le,he,b,He),q.transparent===!0&&q.side===jr&&q.forceSinglePass===!1?(q.side=dr,q.needsUpdate=!0,m.renderBufferDirect(le,$,he,q,b,He),q.side=Vi,q.needsUpdate=!0,m.renderBufferDirect(le,$,he,q,b,He),q.side=jr):m.renderBufferDirect(le,$,he,q,b,He),b.onAfterRender(m,$,le,he,q,He)}function Pr(b,$,le){$.isScene!==!0&&($=xe);const he=Qe.get(b),q=f.state.lights,He=f.state.shadowsArray,Ye=q.state.version,ve=we.getParameters(b,q.state,He,$,le),Ke=we.getProgramCacheKey(ve);let At=he.programs;he.environment=b.isMeshStandardMaterial?$.environment:null,he.fog=$.fog,he.envMap=(b.isMeshStandardMaterial?Z:B).get(b.envMap||he.environment),he.envMapRotation=he.environment!==null&&b.envMap===null?$.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",ht),At=new Map,he.programs=At);let tt=At.get(Ke);if(tt!==void 0){if(he.currentProgram===tt&&he.lightsStateVersion===Ye)return cr(b,ve),tt}else ve.uniforms=we.getUniforms(b),b.onBeforeCompile(ve,m),tt=we.acquireProgram(ve,Ke),At.set(Ke,tt),he.uniforms=ve.uniforms;const it=he.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(it.clippingPlanes=De.uniform),cr(b,ve),he.needsLights=qa(b),he.lightsStateVersion=Ye,he.needsLights&&(it.ambientLightColor.value=q.state.ambient,it.lightProbe.value=q.state.probe,it.directionalLights.value=q.state.directional,it.directionalLightShadows.value=q.state.directionalShadow,it.spotLights.value=q.state.spot,it.spotLightShadows.value=q.state.spotShadow,it.rectAreaLights.value=q.state.rectArea,it.ltc_1.value=q.state.rectAreaLTC1,it.ltc_2.value=q.state.rectAreaLTC2,it.pointLights.value=q.state.point,it.pointLightShadows.value=q.state.pointShadow,it.hemisphereLights.value=q.state.hemi,it.directionalShadowMap.value=q.state.directionalShadowMap,it.directionalShadowMatrix.value=q.state.directionalShadowMatrix,it.spotShadowMap.value=q.state.spotShadowMap,it.spotLightMatrix.value=q.state.spotLightMatrix,it.spotLightMap.value=q.state.spotLightMap,it.pointShadowMap.value=q.state.pointShadowMap,it.pointShadowMatrix.value=q.state.pointShadowMatrix),he.currentProgram=tt,he.uniformsList=null,tt}function ss(b){if(b.uniformsList===null){const $=b.currentProgram.getUniforms();b.uniformsList=dc.seqWithValue($.seq,b.uniforms)}return b.uniformsList}function cr(b,$){const le=Qe.get(b);le.outputColorSpace=$.outputColorSpace,le.batching=$.batching,le.batchingColor=$.batchingColor,le.instancing=$.instancing,le.instancingColor=$.instancingColor,le.instancingMorph=$.instancingMorph,le.skinning=$.skinning,le.morphTargets=$.morphTargets,le.morphNormals=$.morphNormals,le.morphColors=$.morphColors,le.morphTargetsCount=$.morphTargetsCount,le.numClippingPlanes=$.numClippingPlanes,le.numIntersection=$.numClipIntersection,le.vertexAlphas=$.vertexAlphas,le.vertexTangents=$.vertexTangents,le.toneMapping=$.toneMapping}function Ys(b,$,le,he,q){$.isScene!==!0&&($=xe),Q.resetTextureUnits();const He=$.fog,Ye=he.isMeshStandardMaterial?$.environment:null,ve=I===null?m.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:qi,Ke=(he.isMeshStandardMaterial?Z:B).get(he.envMap||Ye),At=he.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,tt=!!le.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),it=!!le.morphAttributes.position,yt=!!le.morphAttributes.normal,Ot=!!le.morphAttributes.color;let Ft=Rn;he.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ft=m.toneMapping);const Xt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Lt=Xt!==void 0?Xt.length:0,We=Qe.get(he),lr=f.state.lights;if(k===!0&&(N===!0||b!==z)){const zt=b===z&&he.id===O;De.setState(he,b,zt)}let li=!1;he.version===We.__version?(We.needsLights&&We.lightsStateVersion!==lr.state.version||We.outputColorSpace!==ve||q.isBatchedMesh&&We.batching===!1||!q.isBatchedMesh&&We.batching===!0||q.isBatchedMesh&&We.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&We.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&We.instancing===!1||!q.isInstancedMesh&&We.instancing===!0||q.isSkinnedMesh&&We.skinning===!1||!q.isSkinnedMesh&&We.skinning===!0||q.isInstancedMesh&&We.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&We.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&We.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&We.instancingMorph===!1&&q.morphTexture!==null||We.envMap!==Ke||he.fog===!0&&We.fog!==He||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==De.numPlanes||We.numIntersection!==De.numIntersection)||We.vertexAlphas!==At||We.vertexTangents!==tt||We.morphTargets!==it||We.morphNormals!==yt||We.morphColors!==Ot||We.toneMapping!==Ft||We.morphTargetsCount!==Lt)&&(li=!0):(li=!0,We.__version=he.version);let Or=We.currentProgram;li===!0&&(Or=Pr(he,$,q));let hi=!1,Cr=!1,ui=!1;const kt=Or.getUniforms(),Lr=We.uniforms;if(be.useProgram(Or.program)&&(hi=!0,Cr=!0,ui=!0),he.id!==O&&(O=he.id,Cr=!0),hi||z!==b){Te.reverseDepthBuffer?(oe.copy(b.projectionMatrix),AC(oe),cC(oe),kt.setValue(G,"projectionMatrix",oe)):kt.setValue(G,"projectionMatrix",b.projectionMatrix),kt.setValue(G,"viewMatrix",b.matrixWorldInverse);const zt=kt.map.cameraPosition;zt!==void 0&&zt.setValue(G,ue.setFromMatrixPosition(b.matrixWorld)),Te.logarithmicDepthBuffer&&kt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&kt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),z!==b&&(z=b,Cr=!0,ui=!0)}if(q.isSkinnedMesh){kt.setOptional(G,q,"bindMatrix"),kt.setOptional(G,q,"bindMatrixInverse");const zt=q.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),kt.setValue(G,"boneTexture",zt.boneTexture,Q))}q.isBatchedMesh&&(kt.setOptional(G,q,"batchingTexture"),kt.setValue(G,"batchingTexture",q._matricesTexture,Q),kt.setOptional(G,q,"batchingIdTexture"),kt.setValue(G,"batchingIdTexture",q._indirectTexture,Q),kt.setOptional(G,q,"batchingColorTexture"),q._colorsTexture!==null&&kt.setValue(G,"batchingColorTexture",q._colorsTexture,Q));const Ui=le.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&Je.update(q,le,Or),(Cr||We.receiveShadow!==q.receiveShadow)&&(We.receiveShadow=q.receiveShadow,kt.setValue(G,"receiveShadow",q.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(Lr.envMap.value=Ke,Lr.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),he.isMeshStandardMaterial&&he.envMap===null&&$.environment!==null&&(Lr.envMapIntensity.value=$.environmentIntensity),Cr&&(kt.setValue(G,"toneMappingExposure",m.toneMappingExposure),We.needsLights&&uA(Lr,ui),He&&he.fog===!0&&Ee.refreshFogUniforms(Lr,He),Ee.refreshMaterialUniforms(Lr,he,F,T,f.state.transmissionRenderTarget[b.id]),dc.upload(G,ss(We),Lr,Q)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(dc.upload(G,ss(We),Lr,Q),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&kt.setValue(G,"center",q.center),kt.setValue(G,"modelViewMatrix",q.modelViewMatrix),kt.setValue(G,"normalMatrix",q.normalMatrix),kt.setValue(G,"modelMatrix",q.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const zt=he.uniformsGroups;for(let Xs=0,Qn=zt.length;Xs<Qn;Xs++){const on=zt[Xs];W.update(on,Or),W.bind(on,Or)}}return Or}function uA(b,$){b.ambientLightColor.needsUpdate=$,b.lightProbe.needsUpdate=$,b.directionalLights.needsUpdate=$,b.directionalLightShadows.needsUpdate=$,b.pointLights.needsUpdate=$,b.pointLightShadows.needsUpdate=$,b.spotLights.needsUpdate=$,b.spotLightShadows.needsUpdate=$,b.rectAreaLights.needsUpdate=$,b.hemisphereLights.needsUpdate=$}function qa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,$,le){Qe.get(b.texture).__webglTexture=$,Qe.get(b.depthTexture).__webglTexture=le;const he=Qe.get(b);he.__hasExternalTextures=!0,he.__autoAllocateDepthBuffer=le===void 0,he.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),he.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,$){const le=Qe.get(b);le.__webglFramebuffer=$,le.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(b,$=0,le=0){I=b,S=$,P=le;let he=!0,q=null,He=!1,Ye=!1;if(b){const ve=Qe.get(b);if(ve.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(G.FRAMEBUFFER,null),he=!1;else if(ve.__webglFramebuffer===void 0)Q.setupRenderTarget(b);else if(ve.__hasExternalTextures)Q.rebindTextures(b,Qe.get(b.texture).__webglTexture,Qe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const tt=b.depthTexture;if(ve.__boundDepthTexture!==tt){if(tt!==null&&Qe.has(tt)&&(b.width!==tt.image.width||b.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(b)}}const Ke=b.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ye=!0);const At=Qe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(At[$])?q=At[$][le]:q=At[$],He=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?q=Qe.get(b).__webglMultisampledFramebuffer:Array.isArray(At)?q=At[le]:q=At,v.copy(b.viewport),M.copy(b.scissor),H=b.scissorTest}else v.copy(K).multiplyScalar(F).floor(),M.copy(L).multiplyScalar(F).floor(),H=j;if(be.bindFramebuffer(G.FRAMEBUFFER,q)&&he&&be.drawBuffers(b,q),be.viewport(v),be.scissor(M),be.setScissorTest(H),He){const ve=Qe.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve.__webglTexture,le)}else if(Ye){const ve=Qe.get(b.texture),Ke=$||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ve.__webglTexture,le||0,Ke)}O=-1},this.readRenderTargetPixels=function(b,$,le,he,q,He,Ye){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Qe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ye!==void 0&&(ve=ve[Ye]),ve){be.bindFramebuffer(G.FRAMEBUFFER,ve);try{const Ke=b.texture,At=Ke.format,tt=Ke.type;if(!Te.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=b.width-he&&le>=0&&le<=b.height-q&&G.readPixels($,le,he,q,je.convert(At),je.convert(tt),He)}finally{const Ke=I!==null?Qe.get(I).__webglFramebuffer:null;be.bindFramebuffer(G.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(b,$,le,he,q,He,Ye){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Qe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ye!==void 0&&(ve=ve[Ye]),ve){const Ke=b.texture,At=Ke.format,tt=Ke.type;if(!Te.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=b.width-he&&le>=0&&le<=b.height-q){be.bindFramebuffer(G.FRAMEBUFFER,ve);const it=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,it),G.bufferData(G.PIXEL_PACK_BUFFER,He.byteLength,G.STREAM_READ),G.readPixels($,le,he,q,je.convert(At),je.convert(tt),0);const yt=I!==null?Qe.get(I).__webglFramebuffer:null;be.bindFramebuffer(G.FRAMEBUFFER,yt);const Ot=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await oC(G,Ot,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,it),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,He),G.deleteBuffer(it),G.deleteSync(Ot),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,$=null,le=0){b.isTexture!==!0&&(KA("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1]);const he=Math.pow(2,-le),q=Math.floor(b.image.width*he),He=Math.floor(b.image.height*he),Ye=$!==null?$.x:0,ve=$!==null?$.y:0;Q.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,Ye,ve,q,He),be.unbindTexture()},this.copyTextureToTexture=function(b,$,le=null,he=null,q=0){b.isTexture!==!0&&(KA("WebGLRenderer: copyTextureToTexture function signature has changed."),he=arguments[0]||null,b=arguments[1],$=arguments[2],q=arguments[3]||0,le=null);let He,Ye,ve,Ke,At,tt;le!==null?(He=le.max.x-le.min.x,Ye=le.max.y-le.min.y,ve=le.min.x,Ke=le.min.y):(He=b.image.width,Ye=b.image.height,ve=0,Ke=0),he!==null?(At=he.x,tt=he.y):(At=0,tt=0);const it=je.convert($.format),yt=je.convert($.type);Q.setTexture2D($,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);const Ot=G.getParameter(G.UNPACK_ROW_LENGTH),Ft=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Xt=G.getParameter(G.UNPACK_SKIP_PIXELS),Lt=G.getParameter(G.UNPACK_SKIP_ROWS),We=G.getParameter(G.UNPACK_SKIP_IMAGES),lr=b.isCompressedTexture?b.mipmaps[q]:b.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,lr.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,lr.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ve),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ke),b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,q,At,tt,He,Ye,it,yt,lr.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,q,At,tt,lr.width,lr.height,it,lr.data):G.texSubImage2D(G.TEXTURE_2D,q,At,tt,He,Ye,it,yt,lr),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ot),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ft),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Xt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Lt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,We),q===0&&$.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(b,$,le=null,he=null,q=0){b.isTexture!==!0&&(KA("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,he=arguments[1]||null,b=arguments[2],$=arguments[3],q=arguments[4]||0);let He,Ye,ve,Ke,At,tt,it,yt,Ot;const Ft=b.isCompressedTexture?b.mipmaps[q]:b.image;le!==null?(He=le.max.x-le.min.x,Ye=le.max.y-le.min.y,ve=le.max.z-le.min.z,Ke=le.min.x,At=le.min.y,tt=le.min.z):(He=Ft.width,Ye=Ft.height,ve=Ft.depth,Ke=0,At=0,tt=0),he!==null?(it=he.x,yt=he.y,Ot=he.z):(it=0,yt=0,Ot=0);const Xt=je.convert($.format),Lt=je.convert($.type);let We;if($.isData3DTexture)Q.setTexture3D($,0),We=G.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)Q.setTexture2DArray($,0),We=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);const lr=G.getParameter(G.UNPACK_ROW_LENGTH),li=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Or=G.getParameter(G.UNPACK_SKIP_PIXELS),hi=G.getParameter(G.UNPACK_SKIP_ROWS),Cr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ft.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ft.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ke),G.pixelStorei(G.UNPACK_SKIP_ROWS,At),G.pixelStorei(G.UNPACK_SKIP_IMAGES,tt),b.isDataTexture||b.isData3DTexture?G.texSubImage3D(We,q,it,yt,Ot,He,Ye,ve,Xt,Lt,Ft.data):$.isCompressedArrayTexture?G.compressedTexSubImage3D(We,q,it,yt,Ot,He,Ye,ve,Xt,Ft.data):G.texSubImage3D(We,q,it,yt,Ot,He,Ye,ve,Xt,Lt,Ft),G.pixelStorei(G.UNPACK_ROW_LENGTH,lr),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,li),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Or),G.pixelStorei(G.UNPACK_SKIP_ROWS,hi),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Cr),q===0&&$.generateMipmaps&&G.generateMipmap(We),be.unbindTexture()},this.initRenderTarget=function(b){Qe.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),be.unbindTexture()},this.resetState=function(){S=0,P=0,I=null,be.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sh?"display-p3":"srgb",t.unpackColorSpace=Ht.workingColorSpace===NA?"display-p3":"srgb"}}class vu extends Ur{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vy extends pr{constructor(e=null,t=1,i=1,n,s,a,o,A,c=ii,l=ii,h,u){super(null,a,o,A,c,l,n,s,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends Kr{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ma=new Ut,wd=new Ut,mc=[],vd=new pn,my=new Ut,Eo=new nr,Do=new yi;class md extends nr{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,my)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ma),vd.copy(e.boundingBox).applyMatrix4(Ma),this.boundingBox.union(vd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ma),Do.copy(e.boundingSphere).applyMatrix4(Ma),this.boundingSphere.union(Do)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(i),e.ray.intersectsSphere(Do)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Ma),wd.multiplyMatrices(i,Ma),Eo.matrixWorld=wd,Eo.raycast(e,mc);for(let a=0,o=mc.length;a<o;a++){const A=mc[a];A.instanceId=s,A.object=this,t.push(A)}mc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new vy(new Float32Array(n*this.count),n,this.count,eh,Wi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,A=n*e;s[A]=o,s.set(i,A+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Cd extends ms{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new V,Bc=new V,Bd=new Ut,yo=new Xh,Ec=new yi,mu=new V,Ed=new V;class Cy extends Ur{constructor(e=new Nr,t=new Cd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Cc.fromBufferAttribute(t,n-1),Bc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Cc.distanceTo(Bc);e.setAttribute("lineDistance",new ir(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(n),Ec.radius+=s,e.ray.intersectsSphere(Ec)===!1)return;Bd.copy(n).invert(),yo.copy(e.ray).applyMatrix4(Bd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),A=o*o,c=this.isLineSegments?2:1,l=i.index,h=i.attributes.position;if(l!==null){const u=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let p=u,w=g-1;p<w;p+=c){const f=l.getX(p),d=l.getX(p+1),D=Dc(this,e,yo,A,f,d);D&&t.push(D)}if(this.isLineLoop){const p=l.getX(g-1),w=l.getX(u),f=Dc(this,e,yo,A,p,w);f&&t.push(f)}}else{const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let p=u,w=g-1;p<w;p+=c){const f=Dc(this,e,yo,A,p,p+1);f&&t.push(f)}if(this.isLineLoop){const p=Dc(this,e,yo,A,g-1,u);p&&t.push(p)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function Dc(r,e,t,i,n,s){const a=r.geometry.attributes.position;if(Cc.fromBufferAttribute(a,n),Bc.fromBufferAttribute(a,s),t.distanceSqToSegment(Cc,Bc,mu,Ed)>i)return;mu.applyMatrix4(r.matrixWorld);const o=e.ray.origin.distanceTo(mu);if(!(o<e.near||o>e.far))return{distance:o,point:Ed.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}class By extends pr{constructor(e,t,i,n,s,a,o,A,c){super(e,t,i,n,s,a,o,A,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yc extends Nr{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],a=[],o=[],A=[],c=new V,l=new at;a.push(0,0,0),o.push(0,0,1),A.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const g=i+h/t*n;c.x=e*Math.cos(g),c.y=e*Math.sin(g),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,A.push(l.x,l.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ir(a,3)),this.setAttribute("normal",new ir(o,3)),this.setAttribute("uv",new ir(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Cu extends Nr{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,A=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:A};const c=this;n=Math.floor(n),s=Math.floor(s);const l=[],h=[],u=[],g=[];let p=0;const w=[],f=i/2;let d=0;D(),a===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(l),this.setAttribute("position",new ir(h,3)),this.setAttribute("normal",new ir(u,3)),this.setAttribute("uv",new ir(g,2));function D(){const C=new V,S=new V;let P=0;const I=(t-e)/i;for(let O=0;O<=s;O++){const z=[],v=O/s,M=v*(t-e)+e;for(let H=0;H<=n;H++){const y=H/n,x=y*A+o,R=Math.sin(x),T=Math.cos(x);S.x=M*R,S.y=-v*i+f,S.z=M*T,h.push(S.x,S.y,S.z),C.set(R,I,T).normalize(),u.push(C.x,C.y,C.z),g.push(y,1-v),z.push(p++)}w.push(z)}for(let O=0;O<n;O++)for(let z=0;z<s;z++){const v=w[z][O],M=w[z+1][O],H=w[z+1][O+1],y=w[z][O+1];e>0&&(l.push(v,M,y),P+=3),t>0&&(l.push(M,H,y),P+=3)}c.addGroup(d,P,0),d+=P}function m(C){const S=p,P=new at,I=new V;let O=0;const z=C===!0?e:t,v=C===!0?1:-1;for(let H=1;H<=n;H++)h.push(0,f*v,0),u.push(0,v,0),g.push(.5,.5),p++;const M=p;for(let H=0;H<=n;H++){const y=H/n*A+o,x=Math.cos(y),R=Math.sin(y);I.x=z*R,I.y=f*v,I.z=z*x,h.push(I.x,I.y,I.z),u.push(0,v,0),P.x=x*.5+.5,P.y=R*.5*v+.5,g.push(P.x,P.y),p++}for(let H=0;H<n;H++){const y=S+H,x=M+H;C===!0?l.push(x,x+1,y):l.push(x+1,x,y),O+=3}c.addGroup(d,O,C===!0?1:2),d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ps extends Nr{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const A=Math.min(a+o,Math.PI);let c=0;const l=[],h=new V,u=new V,g=[],p=[],w=[],f=[];for(let d=0;d<=i;d++){const D=[],m=d/i;let C=0;d===0&&a===0?C=.5/t:d===i&&A===Math.PI&&(C=-.5/t);for(let S=0;S<=t;S++){const P=S/t;h.x=-e*Math.cos(n+P*s)*Math.sin(a+m*o),h.y=e*Math.cos(a+m*o),h.z=e*Math.sin(n+P*s)*Math.sin(a+m*o),p.push(h.x,h.y,h.z),u.copy(h).normalize(),w.push(u.x,u.y,u.z),f.push(P+C,1-m),D.push(c++)}l.push(D)}for(let d=0;d<i;d++)for(let D=0;D<t;D++){const m=l[d][D+1],C=l[d][D],S=l[d+1][D],P=l[d+1][D+1];(d!==0||a>0)&&g.push(m,C,P),(d!==i-1||A<Math.PI)&&g.push(C,S,P)}this.setIndex(g),this.setAttribute("position",new ir(p,3)),this.setAttribute("normal",new ir(w,3)),this.setAttribute("uv",new ir(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ic extends Nr{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],A=[],c=[],l=new V,h=new V,u=new V;for(let g=0;g<=i;g++)for(let p=0;p<=n;p++){const w=p/n*s,f=g/i*Math.PI*2;h.x=(e+t*Math.cos(f))*Math.cos(w),h.y=(e+t*Math.cos(f))*Math.sin(w),h.z=t*Math.sin(f),o.push(h.x,h.y,h.z),l.x=e*Math.cos(w),l.y=e*Math.sin(w),u.subVectors(h,l).normalize(),A.push(u.x,u.y,u.z),c.push(p/n),c.push(g/i)}for(let g=1;g<=i;g++)for(let p=1;p<=n;p++){const w=(n+1)*g+p-1,f=(n+1)*(g-1)+p-1,d=(n+1)*(g-1)+p,D=(n+1)*g+p;a.push(w,f,D),a.push(f,d,D)}this.setIndex(a),this.setAttribute("position",new ir(o,3)),this.setAttribute("normal",new ir(A,3)),this.setAttribute("uv",new ir(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}const Mc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ey{constructor(e,t,i){const n=this;let s=!1,a=0,o=0,A;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(l){o++,s===!1&&n.onStart!==void 0&&n.onStart(l,a,o),s=!0},this.itemEnd=function(l){a++,n.onProgress!==void 0&&n.onProgress(l,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(l){n.onError!==void 0&&n.onError(l)},this.resolveURL=function(l){return A?A(l):l},this.setURLModifier=function(l){return A=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){const h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,u=c.length;h<u;h+=2){const g=c[h],p=c[h+1];if(g.global&&(g.lastIndex=0),g.test(l))return p}return null}}}const Dy=new Ey;class Dd{constructor(e){this.manager=e!==void 0?e:Dy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Dd.DEFAULT_MATERIAL_NAME="__DEFAULT";class yy extends Nr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Iy extends Dd{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Mc.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const A=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mc.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Mc.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Mc.add(e,A),s.manager.itemStart(e)}}class My{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yd(){return performance.now()}class xt{constructor(e){this.value=e}clone(){return new xt(this.value.clone===void 0?this.value:this.value.clone())}}const Id=new Ut;class Md{constructor(e,t,i=0,n=1/0){this.ray=new Xh(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new jh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Id.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Id),this}intersectObject(e,t=!0,i=[]){return Bu(e,this,i,t),i.sort(Pd),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Bu(e[n],this,i,t);return i.sort(Pd),i}}function Pd(r,e){return r.distance-e.distance}function Bu(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Bu(s[a],e,t,!0)}}const Qd=new V;let Pc,Eu;class Py extends Ur{constructor(e=new V(0,0,1),t=new V(0,0,0),i=1,n=16776960,s=i*.2,a=s*.2){super(),this.type="ArrowHelper",Pc===void 0&&(Pc=new Nr,Pc.setAttribute("position",new ir([0,0,0,0,1,0],3)),Eu=new Cu(0,.5,1,5,1),Eu.translate(0,-.5,0)),this.position.copy(t),this.line=new Cy(Pc,new Cd({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new nr(Eu,new Yn({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Qd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Qd,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);function Qy(r){return function(e){const t=e.data;r[t.type](...t.args)}}const xd=()=>location.hostname==="localhost"||location.hostname==="127.0.0.1"||location.hostname==="yeti.local";class xy{constructor(e){this.initializer=e,this.underlying=new Map}getOrCreate(e){const t=this.underlying.get(e);if(t!==void 0)return t;const i=this.initializer();return this.underlying.set(e,i),i}}const bd=r=>{r=1831565813+(r|=0)|0;let e=Math.imul(r^r>>>15,1|r);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296};class by{constructor(e){this.dictionaries=void 0,this.length=void 0,this.separator=void 0,this.style=void 0,this.seed=void 0;const{length:t,separator:i,dictionaries:n,style:s,seed:a}=e;this.dictionaries=n,this.separator=i,this.length=t,this.style=s,this.seed=a}generate(){if(!this.dictionaries)throw new Error('Cannot find any dictionary. Please provide at least one, or leave the "dictionary" field empty in the config object');if(this.length<=0)throw new Error("Invalid length provided");if(this.length>this.dictionaries.length)throw new Error(`The length cannot be bigger than the number of dictionaries.
Length provided: ${this.length}. Number of dictionaries provided: ${this.dictionaries.length}`);let e=this.seed;return this.dictionaries.slice(0,this.length).reduce((t,i)=>{let n;e?(n=(a=>{if(typeof a=="string"){const o=a.split("").map(c=>c.charCodeAt(0)).reduce((c,l)=>c+l,1),A=Math.floor(Number(o));return bd(A)}return bd(a)})(e),e=4294967296*n):n=Math.random();let s=i[Math.floor(n*i.length)]||"";if(this.style==="lowerCase")s=s.toLowerCase();else if(this.style==="capital"){const[a,...o]=s.split("");s=a.toUpperCase()+o.join("")}else this.style==="upperCase"&&(s=s.toUpperCase());return t?`${t}${this.separator}${s}`:`${s}`},"")}}const Sd={separator:"_",dictionaries:[]},Sy=r=>{const e=[...r&&r.dictionaries||Sd.dictionaries],t={...Sd,...r,length:r&&r.length||e.length,dictionaries:e};if(!r||!r.dictionaries||!r.dictionaries.length)throw new Error('A "dictionaries" array must be provided. This is a breaking change introduced starting from Unique Name Generator v4. Read more about the breaking change here: https://github.com/andreasonny83/unique-names-generator#migration-guide');return new by(t).generate()};var Ty=["able","above","absent","absolute","abstract","abundant","academic","acceptable","accepted","accessible","accurate","accused","active","actual","acute","added","additional","adequate","adjacent","administrative","adorable","advanced","adverse","advisory","aesthetic","afraid","aggregate","aggressive","agreeable","agreed","agricultural","alert","alive","alleged","allied","alone","alright","alternative","amateur","amazing","ambitious","amused","ancient","angry","annoyed","annual","anonymous","anxious","appalling","apparent","applicable","appropriate","arbitrary","architectural","armed","arrogant","artificial","artistic","ashamed","asleep","assistant","associated","atomic","attractive","automatic","autonomous","available","average","awake","aware","awful","awkward","back","bad","balanced","bare","basic","beautiful","beneficial","better","bewildered","big","binding","biological","bitter","bizarre","blank","blind","blonde","bloody","blushing","boiling","bold","bored","boring","bottom","brainy","brave","breakable","breezy","brief","bright","brilliant","broad","broken","bumpy","burning","busy","calm","capable","capitalist","careful","casual","causal","cautious","central","certain","changing","characteristic","charming","cheap","cheerful","chemical","chief","chilly","chosen","christian","chronic","chubby","circular","civic","civil","civilian","classic","classical","clean","clear","clever","clinical","close","closed","cloudy","clumsy","coastal","cognitive","coherent","cold","collective","colonial","colorful","colossal","coloured","colourful","combative","combined","comfortable","coming","commercial","common","communist","compact","comparable","comparative","compatible","competent","competitive","complete","complex","complicated","comprehensive","compulsory","conceptual","concerned","concrete","condemned","confident","confidential","confused","conscious","conservation","conservative","considerable","consistent","constant","constitutional","contemporary","content","continental","continued","continuing","continuous","controlled","controversial","convenient","conventional","convinced","convincing","cooing","cool","cooperative","corporate","correct","corresponding","costly","courageous","crazy","creative","creepy","criminal","critical","crooked","crowded","crucial","crude","cruel","cuddly","cultural","curious","curly","current","curved","cute","daily","damaged","damp","dangerous","dark","dead","deaf","deafening","dear","decent","decisive","deep","defeated","defensive","defiant","definite","deliberate","delicate","delicious","delighted","delightful","democratic","dependent","depressed","desirable","desperate","detailed","determined","developed","developing","devoted","different","difficult","digital","diplomatic","direct","dirty","disabled","disappointed","disastrous","disciplinary","disgusted","distant","distinct","distinctive","distinguished","disturbed","disturbing","diverse","divine","dizzy","domestic","dominant","double","doubtful","drab","dramatic","dreadful","driving","drunk","dry","dual","due","dull","dusty","dutch","dying","dynamic","eager","early","eastern","easy","economic","educational","eerie","effective","efficient","elaborate","elated","elderly","eldest","electoral","electric","electrical","electronic","elegant","eligible","embarrassed","embarrassing","emotional","empirical","empty","enchanting","encouraging","endless","energetic","enormous","enthusiastic","entire","entitled","envious","environmental","equal","equivalent","essential","established","estimated","ethical","ethnic","eventual","everyday","evident","evil","evolutionary","exact","excellent","exceptional","excess","excessive","excited","exciting","exclusive","existing","exotic","expected","expensive","experienced","experimental","explicit","extended","extensive","external","extra","extraordinary","extreme","exuberant","faint","fair","faithful","familiar","famous","fancy","fantastic","far","fascinating","fashionable","fast","fat","fatal","favourable","favourite","federal","fellow","female","feminist","few","fierce","filthy","final","financial","fine","firm","fiscal","fit","fixed","flaky","flat","flexible","fluffy","fluttering","flying","following","fond","foolish","foreign","formal","formidable","forthcoming","fortunate","forward","fragile","frail","frantic","free","frequent","fresh","friendly","frightened","front","frozen","full","fun","functional","fundamental","funny","furious","future","fuzzy","gastric","gay","general","generous","genetic","gentle","genuine","geographical","giant","gigantic","given","glad","glamorous","gleaming","global","glorious","golden","good","gorgeous","gothic","governing","graceful","gradual","grand","grateful","greasy","great","grieving","grim","gross","grotesque","growing","grubby","grumpy","guilty","handicapped","handsome","happy","hard","harsh","head","healthy","heavy","helpful","helpless","hidden","high","hilarious","hissing","historic","historical","hollow","holy","homeless","homely","hon","honest","horizontal","horrible","hostile","hot","huge","human","hungry","hurt","hushed","husky","icy","ideal","identical","ideological","ill","illegal","imaginative","immediate","immense","imperial","implicit","important","impossible","impressed","impressive","improved","inadequate","inappropriate","inc","inclined","increased","increasing","incredible","independent","indirect","individual","industrial","inevitable","influential","informal","inherent","initial","injured","inland","inner","innocent","innovative","inquisitive","instant","institutional","insufficient","intact","integral","integrated","intellectual","intelligent","intense","intensive","interested","interesting","interim","interior","intermediate","internal","international","intimate","invisible","involved","irrelevant","isolated","itchy","jealous","jittery","joint","jolly","joyous","judicial","juicy","junior","just","keen","key","kind","known","labour","large","late","latin","lazy","leading","left","legal","legislative","legitimate","lengthy","lesser","level","lexical","liable","liberal","light","like","likely","limited","linear","linguistic","liquid","literary","little","live","lively","living","local","logical","lonely","long","loose","lost","loud","lovely","low","loyal","ltd","lucky","mad","magic","magnetic","magnificent","main","major","male","mammoth","managerial","managing","manual","many","marginal","marine","marked","married","marvellous","marxist","mass","massive","mathematical","mature","maximum","mean","meaningful","mechanical","medical","medieval","melodic","melted","mental","mere","metropolitan","mid","middle","mighty","mild","military","miniature","minimal","minimum","ministerial","minor","miserable","misleading","missing","misty","mixed","moaning","mobile","moderate","modern","modest","molecular","monetary","monthly","moral","motionless","muddy","multiple","mushy","musical","mute","mutual","mysterious","naked","narrow","nasty","national","native","natural","naughty","naval","near","nearby","neat","necessary","negative","neighbouring","nervous","net","neutral","new","nice","noble","noisy","normal","northern","nosy","notable","novel","nuclear","numerous","nursing","nutritious","nutty","obedient","objective","obliged","obnoxious","obvious","occasional","occupational","odd","official","ok","okay","old","olympic","only","open","operational","opposite","optimistic","oral","ordinary","organic","organisational","original","orthodox","other","outdoor","outer","outrageous","outside","outstanding","overall","overseas","overwhelming","painful","pale","panicky","parallel","parental","parliamentary","partial","particular","passing","passive","past","patient","payable","peaceful","peculiar","perfect","permanent","persistent","personal","petite","philosophical","physical","plain","planned","plastic","pleasant","pleased","poised","polite","political","poor","popular","positive","possible","potential","powerful","practical","precious","precise","preferred","pregnant","preliminary","premier","prepared","present","presidential","pretty","previous","prickly","primary","prime","primitive","principal","printed","prior","private","probable","productive","professional","profitable","profound","progressive","prominent","promising","proper","proposed","prospective","protective","protestant","proud","provincial","psychiatric","psychological","public","puny","pure","purring","puzzled","quaint","qualified","quarrelsome","querulous","quick","quickest","quiet","quintessential","quixotic","racial","radical","rainy","random","rapid","rare","raspy","rational","ratty","raw","ready","real","realistic","rear","reasonable","recent","reduced","redundant","regional","registered","regular","regulatory","related","relative","relaxed","relevant","reliable","relieved","religious","reluctant","remaining","remarkable","remote","renewed","representative","repulsive","required","resident","residential","resonant","respectable","respective","responsible","resulting","retail","retired","revolutionary","rich","ridiculous","right","rigid","ripe","rising","rival","roasted","robust","rolling","romantic","rotten","rough","round","royal","rubber","rude","ruling","running","rural","sacred","sad","safe","salty","satisfactory","satisfied","scared","scary","scattered","scientific","scornful","scrawny","screeching","secondary","secret","secure","select","selected","selective","selfish","semantic","senior","sensible","sensitive","separate","serious","severe","sexual","shaggy","shaky","shallow","shared","sharp","sheer","shiny","shivering","shocked","short","shrill","shy","sick","significant","silent","silky","silly","similar","simple","single","skilled","skinny","sleepy","slight","slim","slimy","slippery","slow","small","smart","smiling","smoggy","smooth","social","socialist","soft","solar","sole","solid","sophisticated","sore","sorry","sound","sour","southern","soviet","spare","sparkling","spatial","special","specific","specified","spectacular","spicy","spiritual","splendid","spontaneous","sporting","spotless","spotty","square","squealing","stable","stale","standard","static","statistical","statutory","steady","steep","sticky","stiff","still","stingy","stormy","straight","straightforward","strange","strategic","strict","striking","striped","strong","structural","stuck","stupid","subjective","subsequent","substantial","subtle","successful","successive","sudden","sufficient","suitable","sunny","super","superb","superior","supporting","supposed","supreme","sure","surprised","surprising","surrounding","surviving","suspicious","sweet","swift","symbolic","sympathetic","systematic","tall","tame","tart","tasteless","tasty","technical","technological","teenage","temporary","tender","tense","terrible","territorial","testy","then","theoretical","thick","thin","thirsty","thorough","thoughtful","thoughtless","thundering","tight","tiny","tired","top","tory","total","tough","toxic","traditional","tragic","tremendous","tricky","tropical","troubled","typical","ugliest","ugly","ultimate","unable","unacceptable","unaware","uncertain","unchanged","uncomfortable","unconscious","underground","underlying","unemployed","uneven","unexpected","unfair","unfortunate","unhappy","uniform","uninterested","unique","united","universal","unknown","unlikely","unnecessary","unpleasant","unsightly","unusual","unwilling","upper","upset","uptight","urban","urgent","used","useful","useless","usual","vague","valid","valuable","variable","varied","various","varying","vast","verbal","vertical","very","vicarious","vicious","victorious","violent","visible","visiting","visual","vital","vitreous","vivacious","vivid","vocal","vocational","voiceless","voluminous","voluntary","vulnerable","wandering","warm","wasteful","watery","weak","wealthy","weary","wee","weekly","weird","welcome","well","western","wet","whispering","whole","wicked","wide","widespread","wild","wilful","willing","willowy","wily","wise","wispy","wittering","witty","wonderful","wooden","working","worldwide","worried","worrying","worthwhile","worthy","written","wrong","xenacious","xenial","xenogeneic","xenophobic","xeric","xerothermic","yabbering","yammering","yappiest","yappy","yawning","yearling","yearning","yeasty","yelling","yelping","yielding","yodelling","young","youngest","youthful","ytterbic","yucky","yummy","zany","zealous","zeroth","zestful","zesty","zippy","zonal","zoophagous","zygomorphic","zygotic"],Hy=["aardvark","aardwolf","albatross","alligator","alpaca","amphibian","anaconda","angelfish","anglerfish","ant","anteater","antelope","antlion","ape","aphid","armadillo","asp","baboon","badger","bandicoot","barnacle","barracuda","basilisk","bass","bat","bear","beaver","bedbug","bee","beetle","bird","bison","blackbird","boa","boar","bobcat","bobolink","bonobo","booby","bovid","bug","butterfly","buzzard","camel","canid","canidae","capybara","cardinal","caribou","carp","cat","caterpillar","catfish","catshark","cattle","centipede","cephalopod","chameleon","cheetah","chickadee","chicken","chimpanzee","chinchilla","chipmunk","cicada","clam","clownfish","cobra","cockroach","cod","condor","constrictor","coral","cougar","cow","coyote","crab","crane","crawdad","crayfish","cricket","crocodile","crow","cuckoo","damselfly","deer","dingo","dinosaur","dog","dolphin","donkey","dormouse","dove","dragon","dragonfly","duck","eagle","earthworm","earwig","echidna","eel","egret","elephant","elk","emu","ermine","falcon","felidae","ferret","finch","firefly","fish","flamingo","flea","fly","flyingfish","fowl","fox","frog","galliform","gamefowl","gayal","gazelle","gecko","gerbil","gibbon","giraffe","goat","goldfish","goose","gopher","gorilla","grasshopper","grouse","guan","guanaco","guineafowl","gull","guppy","haddock","halibut","hamster","hare","harrier","hawk","hedgehog","heron","herring","hippopotamus","hookworm","hornet","horse","hoverfly","hummingbird","hyena","iguana","impala","jackal","jaguar","jay","jellyfish","junglefowl","kangaroo","kingfisher","kite","kiwi","koala","koi","krill","ladybug","lamprey","landfowl","lark","leech","lemming","lemur","leopard","leopon","limpet","lion","lizard","llama","lobster","locust","loon","louse","lungfish","lynx","macaw","mackerel","magpie","mammal","manatee","mandrill","marlin","marmoset","marmot","marsupial","marten","mastodon","meadowlark","meerkat","mink","minnow","mite","mockingbird","mole","mollusk","mongoose","monkey","moose","mosquito","moth","mouse","mule","muskox","narwhal","newt","nightingale","ocelot","octopus","opossum","orangutan","orca","ostrich","otter","owl","ox","panda","panther","parakeet","parrot","parrotfish","partridge","peacock","peafowl","pelican","penguin","perch","pheasant","pig","pigeon","pike","pinniped","piranha","planarian","platypus","pony","porcupine","porpoise","possum","prawn","primate","ptarmigan","puffin","puma","python","quail","quelea","quokka","rabbit","raccoon","rat","rattlesnake","raven","reindeer","reptile","rhinoceros","roadrunner","rodent","rook","rooster","roundworm","sailfish","salamander","salmon","sawfish","scallop","scorpion","seahorse","shark","sheep","shrew","shrimp","silkworm","silverfish","skink","skunk","sloth","slug","smelt","snail","snake","snipe","sole","sparrow","spider","spoonbill","squid","squirrel","starfish","stingray","stoat","stork","sturgeon","swallow","swan","swift","swordfish","swordtail","tahr","takin","tapir","tarantula","tarsier","termite","tern","thrush","tick","tiger","tiglon","toad","tortoise","toucan","trout","tuna","turkey","turtle","tyrannosaurus","unicorn","urial","vicuna","viper","vole","vulture","wallaby","walrus","warbler","wasp","weasel","whale","whippet","whitefish","wildcat","wildebeest","wildfowl","wolf","wolverine","wombat","woodpecker","worm","wren","xerinae","yak","zebra"],Oy=["Afghanistan","\xC5land Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua & Barbuda","Argentina","Armenia","Aruba","Ascension Island","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Indian Ocean Territory","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Canary Islands","Cape Verde","Caribbean Netherlands","Cayman Islands","Central African Republic","Ceuta & Melilla","Chad","Chile","China","Christmas Island","Cocos Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","C\xF4te d'Ivoire","Croatia","Cuba","Cura\xE7ao","Cyprus","Czechia","Denmark","Diego Garcia","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Eurozone","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong SAR China","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau SAR China","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","North Korea","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territories","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","R\xE9union","Romania","Russia","Rwanda","Samoa","San Marino","S\xE3o Tom\xE9 & Pr\xEDncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia & South Sandwich Islands","South Korea","South Sudan","Spain","Sri Lanka","St. Barth\xE9lemy","St. Helena","St. Kitts & Nevis","St. Lucia","St. Martin","St. Pierre & Miquelon","St. Vincent & Grenadines","Sudan","Suriname","Svalbard & Jan Mayen","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad & Tobago","Tristan da Cunha","Tunisia","Turkey","Turkmenistan","Turks & Caicos Islands","Tuvalu","U.S. Outlying Islands","U.S. Virgin Islands","Uganda","Ukraine","United Arab Emirates","United Kingdom","United Nations","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Wallis & Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],Ly=["Ackbar","Adi Gallia","Anakin Skywalker","Arvel Crynyd","Ayla Secura","Bail Prestor Organa","Barriss Offee","Ben Quadinaros","Beru Whitesun lars","Bib Fortuna","Biggs Darklighter","Boba Fett","Bossk","C-3PO","Chewbacca","Cliegg Lars","Cord\xE9","Darth Maul","Darth Vader","Dexter Jettster","Dooku","Dorm\xE9","Dud Bolt","Eeth Koth","Finis Valorum","Gasgano","Greedo","Gregar Typho","Grievous","Han Solo","IG-88","Jabba Desilijic Tiure","Jango Fett","Jar Jar Binks","Jek Tono Porkins","Jocasta Nu","Ki-Adi-Mundi","Kit Fisto","Lama Su","Lando Calrissian","Leia Organa","Lobot","Luke Skywalker","Luminara Unduli","Mace Windu","Mas Amedda","Mon Mothma","Nien Nunb","Nute Gunray","Obi-Wan Kenobi","Owen Lars","Padm\xE9 Amidala","Palpatine","Plo Koon","Poggle the Lesser","Quarsh Panaka","Qui-Gon Jinn","R2-D2","R4-P17","R5-D4","Ratts Tyerel","Raymus Antilles","Ric Oli\xE9","Roos Tarpals","Rugor Nass","Saesee Tiin","San Hill","Sebulba","Shaak Ti","Shmi Skywalker","Sly Moore","Tarfful","Taun We","Tion Medon","Wat Tambor","Watto","Wedge Antilles","Wicket Systri Warrick","Wilhuff Tarkin","Yarael Poof","Yoda","Zam Wesell"];const Ry=new Set(["communist"]);Ty.filter(r=>!Ry.has(r.toLowerCase()));const Fy=["Grayzog","Circe","Bavmorda","Willow","Elphaba","Haggard","Gandly","Gilroy","Endora","Glinda","Jadis","Kotake","Kronos","Zeus","Medusa","Samantha","Tia","Paige","Oceanus","prometheus","Paige","Prue","4gottenvoid","Puppet Pals","Funkish101","Pink9870","Kevvy-Kev","Minerva","Margarita","Winifred","Ursula","Alatar","Albus","Atlantes","Bloise","Gwydion","Jareth","Merlin","Ommin","Osiris","Pallando","Puck","Dragthun","Sirius","Vir","Abaris","Cornelius","Londo","Saul","Ellie","Shakur","Ra","Bast","Set","Ptah","Anubis","Hathor","Sekhmet","Nephthys","Horus","Thoth","Chongli","DaboGong","Pixiu","Jiangshi","Itzamna","Chaac","Yum Kaax","HunabKu","Ix Chel","Kinich Ahau","Ek Chuaj","Kukulkan","Faegan","Brisingr"],ky=["brocollini","Don't kill me pls","Gunthor the gr8","719","l33t","y33t","Y33t sucks lol","team?","random noob","Luke's monstrocity","Die noobs","slandor","pink9870","funkish101","puppet pals","liite","ook ape","ook monki","Fenkenstrain","07scape","20 November"],Uy=["Arkantos","Ajax","Folgstag","guardian","Kastor","Krios","Agamemnon","Athena","Brokk","Chiron","circe","Eitri","Gargarensis","Greta Forkbeard","Kamos","Kemsyt","niordsir","odysseus","osiris","son of osiris","poseidon","reginleif","setna","skult","theris","cerberus","gaia","general melagius","prometheus","servant of kronos","ymir","kronos"],Gy=[...Hy,...Ly,...Oy,...ky,...Fy,...Uy],Ny={dictionaries:[Gy]};function zy(){return Sy(Ny)}function Yy(r){return new Promise((e,t)=>setTimeout(t,r))}function Du(r,e){return Promise.race([r,Yy(e)])}var Xy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yu(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var jy={exports:{}};(function(r,e){(function(t,i){r.exports=i()})(Xy,function(){var t=function(){function i(g){return a.appendChild(g.dom),g}function n(g){for(var p=0;p<a.children.length;p++)a.children[p].style.display=p===g?"block":"none";s=g}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(g){g.preventDefault(),n(++s%a.children.length)},!1);var o=(performance||Date).now(),A=o,c=0,l=i(new t.Panel("FPS","#0ff","#002")),h=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=i(new t.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:a,addPanel:i,showPanel:n,begin:function(){o=(performance||Date).now()},end:function(){c++;var g=(performance||Date).now();if(h.update(g-o,200),g>A+1e3&&(l.update(1e3*c/(g-A),100),A=g,c=0,u)){var p=performance.memory;u.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return g},update:function(){o=this.end()},domElement:a,setMode:n}};return t.Panel=function(i,n,s){var a=1/0,o=0,A=Math.round,c=A(window.devicePixelRatio||1),l=80*c,h=48*c,u=3*c,g=2*c,p=3*c,w=15*c,f=74*c,d=30*c,D=document.createElement("canvas");D.width=l,D.height=h,D.style.cssText="width:80px;height:48px";var m=D.getContext("2d");return m.font="bold "+9*c+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=s,m.fillRect(0,0,l,h),m.fillStyle=n,m.fillText(i,u,g),m.fillRect(p,w,f,d),m.fillStyle=s,m.globalAlpha=.9,m.fillRect(p,w,f,d),{dom:D,update:function(C,S){a=Math.min(a,C),o=Math.max(o,C),m.fillStyle=s,m.globalAlpha=1,m.fillRect(0,0,l,w),m.fillStyle=n,m.fillText(A(C)+" "+i+" ("+A(a)+"-"+A(o)+")",u,g),m.drawImage(D,p+c,w,f-c,d,p,w,f-c,d),m.fillRect(p+f-c,w,c,d),m.fillStyle=s,m.globalAlpha=.9,m.fillRect(p+f-c,w,c,A((1-C/S)*d))}}},t})})(jy);const Jy=cs(function(r,e,t){}),Td=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Iu(r){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){const s=wt[n];return s?Iu(s):i}return r.replace(e,t)}const Sr=[];for(let r=0;r<256;r++)Sr[r]=(r<16?"0":"")+r.toString(16);function Ky(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sr[r&255]+Sr[r>>8&255]+Sr[r>>16&255]+Sr[r>>24&255]+"-"+Sr[e&255]+Sr[e>>8&255]+"-"+Sr[e>>16&15|64]+Sr[e>>24&255]+"-"+Sr[t&63|128]+Sr[t>>8&255]+"-"+Sr[t>>16&255]+Sr[t>>24&255]+Sr[i&255]+Sr[i>>8&255]+Sr[i>>16&255]+Sr[i>>24&255]).toUpperCase()}const Qs=Object.assign||function(){const r=arguments[0];for(let e=1,t=arguments.length;e<t;e++){const i=arguments[e];if(i)for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r[n]=i[n])}return r},Vy=Date.now(),Hd=new WeakMap,Od=new Map;let Wy=1e10;function Mu(r,e){const t=$y(e);let i=Hd.get(r);if(i||Hd.set(r,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,s=function(c,l){r.onBeforeCompile.call(this,c,l);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let u=Od[h];if(!u){const g=Zy(this,c,e,t);u=Od[h]=g}c.vertexShader=u.vertexShader,c.fragmentShader=u.fragmentShader,Qs(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Vy}}),this[n]&&this[n](c)},a=function(){return o(e.chained?r:r.clone())},o=function(c){const l=Object.create(c,A);return Object.defineProperty(l,"baseMaterial",{value:r}),Object.defineProperty(l,"id",{value:Wy++}),l.uuid=Ky(),l.uniforms=Qs({},c.uniforms,e.uniforms),l.defines=Qs({},c.defines,e.defines),l.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",l.extensions=Qs({},c.extensions,e.extensions),l._listeners=void 0,l},A={constructor:{value:a},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return r.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return s},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return r.copy.call(this,c),!r.isShaderMaterial&&!r.isDerivedMaterial&&(Qs(this.extensions,c.extensions),Qs(this.defines,c.defines),Qs(this.uniforms,iu.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new r.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Mu(r.isDerivedMaterial?r.getDepthMaterial():new du({depthPacking:bh}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Mu(r.isDerivedMaterial?r.getDistanceMaterial():new pu,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:l}=this;c&&c.dispose(),l&&l.dispose(),r.dispose.call(this)}}};return i[t]=a,new a}function Zy(r,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:s,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:A,fragmentDefs:c,fragmentMainIntro:l,fragmentMainOutro:h,fragmentColorTransform:u,customRewriter:g,timeUniform:p}=i;if(s=s||"",a=a||"",o=o||"",c=c||"",l=l||"",h=h||"",(A||g)&&(e=Iu(e)),(u||g)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Iu(t)),g){const w=g({vertexShader:e,fragmentShader:t});e=w.vertexShader,t=w.fragmentShader}if(u){const w=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,f=>(w.push(f),"")),h=`${u}
${w.join(`
`)}
${h}`}if(p){const w=`
uniform float ${p};
`;s=w+s,c=w+c}return A&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,s=`${s}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${A}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(w,f,d,D)=>/\battribute\s+vec[23]\s+$/.test(D.substr(0,d))?f:`troika_${f}_${n}`),r.map&&r.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Ld(e,n,s,a,o),t=Ld(t,n,c,l,h),{vertexShader:e,fragmentShader:t}}function Ld(r,e,t,i,n){return(i||n||t)&&(r=r.replace(Td,`
${t}
void troikaOrigMain${e}() {`),r+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),r}function qy(r,e){return r==="uniforms"?void 0:typeof e=="function"?e.toString():e}let _y=0;const Rd=new Map;function $y(r){const e=JSON.stringify(r,qy);let t=Rd.get(e);return t==null&&Rd.set(e,t=++_y),t}function Fd(r){const e=/\buniform\s+(int|float|vec[234]|mat[34])\s+([A-Za-z_][\w]*)/g,t=Object.create(null);let i;for(;(i=e.exec(r))!==null;)t[i[2]]=i[1];return t}function eI(r){let e=[],t="";const i=Mu(r,{chained:!0,customRewriter({vertexShader:s,fragmentShader:a}){const o=[],A=[],c=[],l=Fd(s),h=Fd(a);return e.forEach(u=>{const g=l[u],p=h[u],w=g||p;if(w){const f=new RegExp(`\\buniform\\s+${w}\\s+${u}\\s*;`,"g"),d=new RegExp(`\\b${u}\\b`,"g"),D=`troika_attr_${u}`,m=`troika_vary_${u}`;if(o.push(`attribute ${w} ${D};`),g&&(s=s.replace(f,""),s=s.replace(d,D)),p){a=a.replace(f,""),a=a.replace(d,m);const C=`varying ${p} ${m};`;o.push(C),c.push(C),A.push(`${m} = ${D};`)}}}),s=`${o.join(`
`)}
${s.replace(Td,`
$&
${A.join(`
`)}`)}`,c.length&&(a=`${c.join(`
`)}
${a}`),{vertexShader:s,fragmentShader:a}}});i.setUniformNames=function(s){e=s||[];const a=e.sort().join("|");a!==t&&(t=a,this.needsUpdate=!0)};const n=i.customProgramCacheKey();return i.customProgramCacheKey=function(){return n+"|"+t},i.isInstancedUniformsMaterial=!0,i}const tI={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function rI(r){const e=tI[r.type];return e?Li[e]:r}class kd extends md{constructor(e,t,i){if(super(e,t,i),this._maxCount=i,this._instancedUniformNames=[],t instanceof Dr)for(let[n,s]of Object.entries(t.uniforms))this.setUniformAt(n,0,s)}get geometry(){let e=this._derivedGeometry;const t=this._baseGeometry;return(!e||e.baseGeometry!==t)&&(e=this._derivedGeometry=Object.create(t),e.baseGeometry=t,e.attributes=Object.create(t.attributes),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),e}set geometry(e){this._baseGeometry=e}get material(){let e=this._derivedMaterial;const t=this._baseMaterial;return(!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=eI(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),e.setUniformNames(this._instancedUniformNames),e}set material(e){if(Array.isArray(e))throw new Error("InstancedUniformsMesh does not support multiple materials");for(;e&&e.isInstancedUniformsMaterial;)e=e.baseMaterial;this._baseMaterial=e}get customDepthMaterial(){return this.material.getDepthMaterial()}get customDistanceMaterial(){return this.material.getDistanceMaterial()}setUniformAt(e,t,i){const n=this.geometry.attributes,s=`troika_attr_${e}`;let a=n[s];if(!a){const o=iI(this._baseMaterial,e),A=nI(o);if(a=new vc(new Float32Array(A*this._maxCount),A),n[s]=a,o!==null)for(let c=0;c<this._maxCount;c++)Ud(a,c,o);this._instancedUniformNames=[...this._instancedUniformNames,e]}Ud(a,t,i),a.needsUpdate=!0}unsetUniform(e){this.geometry.deleteAttribute(`troika_attr_${e}`),this._instancedUniformNames=this._instancedUniformNames.filter(t=>t!==e)}}function Ud(r,e,t){const i=r.itemSize;i===1?r.setX(e,t):i===2?r.setXY(e,t.x,t.y):i===3?t.isColor?r.setXYZ(e,t.r,t.g,t.b):r.setXYZ(e,t.x,t.y,t.z):i===4?r.setXYZW(e,t.x,t.y,t.z,t.w):t.toArray?t.toArray(r.array,e*i):r.set(t,e*i)}function iI(r,e){let t=r.uniforms;return t&&t[e]||(t=rI(r).uniforms,t&&t[e])?t[e].value:null}function nI(r){return r==null?0:typeof r=="number"?1:r.isVector2?2:r.isVector3||r.isColor?3:r.isVector4||r.isQuaternion?4:r.elements?r.elements.length:Array.isArray(r)?r.length:0}class sI extends Ur{constructor(e,t){super(),this.pointerId=e,this.manager=t,this.active=!0,this.uniformsSet=new Map}destroy(){this.manager.free(this)}write(){this.updateMatrix(),this.manager.underlying.setMatrixAt(this.pointerId,this.matrix),this.manager.underlying.instanceMatrix.needsUpdate=!0}setUniform(e,t){if(!(this.manager.underlying instanceof kd))throw new Error("this.manager.underlying should be an `InstancedUniformsMesh` if you want to set uniforms for an instance, but got manager.underlying: "+typeof this.manager.underlying);this.uniformsSet.set(e,t),this.manager.underlying.setUniformAt(e,this.pointerId,t),this.manager.underlying.instanceMatrix.needsUpdate=!0}}let Qc=[];function aI(){for(let r of Qc)r.tick()}class jn{constructor(e,t,i,n){this.geometry=e,this.material=t,this.scene=i,this.instancePointer=0,this.instanceDummys=[],this.pool=[],this.tick=()=>{this.autoUpdate&&this.writeToUnderlying()},this._createInstance=A=>new sI(A,this);const{maxInstances:s,perInstanceUniforms:a}=n||{};this.autoUpdate=(n==null?void 0:n.autoUpdate)===void 0?!0:n.autoUpdate,this.maxInstances=s||1,this.perInstanceUniforms=a||!1,this.underlying=this._createInstancedMesh(this.maxInstances),this.underlying.count=0,Qc.push(this),i.add(this.underlying);const o=this.getInstance();o.position.set(1/0,1/0,1/0),o.destroy()}_createInstancedMesh(e){let t;if(this.perInstanceUniforms){t=new kd(this.geometry,this.material,e);for(let i=0;i<this.instanceDummys.length;i++)for(let[n,s]of this.instanceDummys[i].uniformsSet.entries())t.setUniformAt(n,i,s)}else t=new md(this.geometry,this.material,e);return t.instanceMatrix.setUsage(nC),t.frustumCulled=!1,t}unmount(){Qc=Qc.filter(e=>e!==this),this.scene.remove(this.underlying)}writeToUnderlying(){for(let e=0;e<this.instanceDummys.length;e++){const t=this.instanceDummys[e];t.updateMatrix(),this.underlying.setMatrixAt(e,t.matrix)}this.underlying.instanceMatrix.needsUpdate=!0}doubleCapacity(){const e=Math.ceil(this.maxInstances*1.4),t=this._createInstancedMesh(e);this.scene.remove(this.underlying),this.underlying=t,this.scene.add(this.underlying),this.maxInstances=e,this.writeToUnderlying()}getInstance(){if(this.pool.length>1){const t=this.pool.pop();return t.active=!0,t}if(this.instancePointer>=this.maxInstances&&this.doubleCapacity(),this.instancePointer<this.instanceDummys.length)return this.instanceDummys[this.instancePointer++];const e=this._createInstance(this.instancePointer);return this.instanceDummys.push(e),this.underlying.count=this.instanceDummys.length,e.position.set(1/0,1/0,1/0),e.updateMatrix(),this.underlying.setMatrixAt(this.instancePointer,e.matrix),this.instancePointer++,e}free(e){if(!e.active)throw new Error("You can only free an instance once, but instance was freed multiple times.");e.position.set(1/0,1/0,1/0),e.write(),this.pool.push(e)}}var oI=`uniform vec3 color;
uniform float brightness;
varying vec2 vUv;
varying vec3 vNormal;
uniform float alpha;

vec3 ambientLight(vec3 lightColor, float intensity) {
    return lightColor*intensity;
}
vec3 directionalLight(vec3 lightColor, float lightIntensity, vec3 normal, vec3 lightPosition) {
    vec3 lightDirection = normalize(lightPosition);
    float shading = dot(normal, lightDirection);
    shading = max(0.0, shading);
    // return lightColor * lightIntensity;
    return lightColor * lightIntensity * shading;
}
void main() {
    vec3 light = vec3(0.0);
    light += ambientLight(vec3(1.0), 0.75);
    light += directionalLight(vec3(1.0), 0.85, vNormal, vec3(-1000.0, 1000.0, 1000.0));
    light = clamp(light, 0.0, 1.0);
    vec3 lightColor = color * light;
    
    // gl_FragColor = vec4(vNormal.xyz, 1.0);
    gl_FragColor = vec4(lightColor.x*brightness, lightColor.y*brightness, lightColor.z*brightness, alpha);
    #include <colorspace_fragment>
}`,AI=`varying vec2 vUv;
varying vec3 vNormal;

void main() {
    vUv = uv;

    vec4 mvPosition = vec4( position, 1.0 );
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0);

    #ifdef USE_INSTANCING
    	mvPosition = instanceMatrix * mvPosition;
        modelNormal = instanceMatrix * modelNormal;
    #endif

    vec4 modelPosition = modelViewMatrix * mvPosition;
    gl_Position = projectionMatrix * modelPosition;

    vNormal = modelNormal.xyz;
}`;const xs=r=>new Dr({uniforms:{color:new xt(new ot(44543)),brightness:new xt(1),alpha:new xt(1)},vertexShader:AI,fragmentShader:oI,...r||{}});var cI=`varying vec2 vUv;
uniform float width;
uniform vec3 color;

#define PI 3.141592653589793
  
  // Helper vector. If you're doing anything that involves regular triangles or hexagons, the
  // 30-60-90 triangle will be involved in some way, which has sides of 1, sqrt(3) and 2.
  const vec2 s = vec2(1, 1.7320508);
  
  // hex(uv)
  // getHex(uv)
  // -------------
  // These very very helpful functions are by Gary Warne. I hope to understand it one day, but for now it's a black box :)
  // 
  // -------------
  float hex(in vec2 p){

      p = abs(p);

      return max(dot(p, s), p.x);

  }
  vec4 getHex(vec2 p){

      vec4 hC = floor(vec4(p, p - vec2(.5, 1))/s.xyxy) + .5;

      vec4 h = vec4(p - hC.xy*s, p - (hC.zw + .5)*s);

      return dot(h.xy, h.xy)<dot(h.zw, h.zw) ? vec4(h.xy, hC.xy) : vec4(h.zw, hC.zw + vec2(.5, 1));

  }
  
  // vec3 hexColour(vec2 id) {
  //   float ani_length = 2.;
  //   float pause_length = 1.;
    
  //   float time_offset = id.y;
    
  //   // float t = (u_time / ani_length + time_offset);
  //   // t = u_time / ani_length;
    
  //   // float time_id_offset = floor(t);
  //   // float time_id_offset_next = floor(t + 1.);
  //   float col_id = floor(h.x * divisor);
  //   float col_id_next = floor(h.x * divisor );
    
  //   // vec3 colour = getColour(col_id);
  //   // vec3 next_colour = getColour(col_id_next);
    
  //   // t = mod(t, 1.);
  //   // return easeOutSine(t, colour, next_colour, 1.);
    
    
  //   // float intermix = mod(t, 1.);
  //   // return mix(colour, next_colour, intermix);
  // }

  // vec3 hexColour(vec2 id) {
  //   float ani_length = 2.;
  //   float divisor = 5.0;
  //   float col_id = floor(id.x * divisor);
  //   float col_id_next = floor(id.x * divisor );
  //   return vec3(col_id, col_id_next, 0.0)
  // }


  void main() {
    vec2 vUvScaled = vUv  * width / 5.0;
    vec4 hex_uv = getHex(vUvScaled);
    // float iso = hex(hex_uv.xy);

    // float edges = 1.0-step(iso, 0.95);
    // iso = smoothstep( 0.25, 0.9, iso);
    // vec2 id = hex_uv.zw;
    
    // vec3 colour = hexColour(id);
    // colour -= smoothstep(.49, .5, iso);

    vec3 hexColor = clamp(hex_uv.xyz, 0.0, 1.0);
    float gray = dot(hexColor, vec3(0.2126, 0.7152, 0.0722));
    // gray = clamp(gray,)
    hexColor = vec3(gray);
    // color = mix(vec3(0.0), color, 0.05);
    gl_FragColor = vec4( color * hexColor, 1.0);
  }`,lI=`varying vec2 vUv;

void main() {
    vUv = uv;

    vec4 mvPosition = vec4( position, 1.0 );
    #ifdef USE_INSTANCING
    	mvPosition = instanceMatrix * mvPosition;
    #endif

    vec4 modelPosition = modelViewMatrix * mvPosition;
    gl_Position = projectionMatrix * modelPosition;
}`;const hI=()=>new Dr({uniforms:{color:{value:new ot(2501936)},width:new xt(100)},vertexShader:lI,fragmentShader:cI});/**
* postprocessing v6.35.4 build Fri Apr 26 2024
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2024 Raoul van Rüschen
* @license Zlib
*/var Pu=1/1e3,uI=1e3,gI=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(r){typeof document<"u"&&document.hidden!==void 0&&(r?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=r)}get delta(){return this._delta*Pu}get fixedDelta(){return this._fixedDelta*Pu}set fixedDelta(r){this._fixedDelta=r*uI}get elapsed(){return this._elapsed*Pu}update(r){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(r!==void 0?r:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(r){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},fI=new nu,Jn=null;function dI(){if(Jn===null){const r=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);Jn=new Nr,Jn.setAttribute!==void 0?(Jn.setAttribute("position",new Kr(r,3)),Jn.setAttribute("uv",new Kr(e,2))):(Jn.addAttribute("position",new Kr(r,3)),Jn.addAttribute("uv",new Kr(e,2)))}return Jn}var _i=class jv{constructor(e="Pass",t=new vu,i=fI){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new nr(dI(),e),t.frustumCulled=!1,this.scene===null&&(this.scene=new vu),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=ho){}render(e,t,i,n,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Jr||t instanceof ms||t instanceof pr||t instanceof jv)&&this[e].dispose()}}},pI=class extends _i{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(r,e,t,i,n){const s=r.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},wI=Number(ta.replace(/\D+/g,""));function Io(r){return wI<154?r.replace("colorspace_fragment","encodings_fragment"):r}var vI=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,Gd="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Nd=class extends Dr{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new xt(null),opacity:new xt(1)},blending:ri,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:vI,vertexShader:Gd}),this.fragmentShader=Io(this.fragmentShader)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}getOpacity(r){return this.uniforms.opacity.value}setOpacity(r){this.uniforms.opacity.value=r}},mI=class extends _i{constructor(r,e=!0){super("CopyPass"),this.fullscreenMaterial=new Nd,this.needsSwap=!1,this.renderTarget=r,r===void 0&&(this.renderTarget=new Jr(1,1,{minFilter:br,magFilter:br,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(r){this.autoResize=r}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(r){this.autoResize=r}render(r,e,t,i,n){this.fullscreenMaterial.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){this.autoResize&&this.renderTarget.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Fr?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":r!==null&&r.outputColorSpace===Yt&&(this.renderTarget.texture.colorSpace=Yt))}},zd=new ot,Yd=class extends _i{constructor(r=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=r,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(r,e,t){this.color=r,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(r){this.overrideClearColor=r}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(r){this.overrideClearAlpha=r}render(r,e,t,i,n){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=r.getClearAlpha(),A=s!==null,c=a>=0;A?(r.getClearColor(zd),r.setClearColor(s,c?a:o)):c&&r.setClearAlpha(a),r.setRenderTarget(this.renderToScreen?null:e),r.clear(this.color,this.depth,this.stencil),A?r.setClearColor(zd,o):c&&r.setClearAlpha(o)}},CI=class extends _i{constructor(r,e){super("MaskPass",r,e),this.needsSwap=!1,this.clearPass=new Yd(!1,!1,!0),this.inverse=!1}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get inverted(){return this.inverse}set inverted(r){this.inverse=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(r){this.inverted=r}render(r,e,t,i,n){const s=r.getContext(),a=r.state.buffers,o=this.scene,A=this.camera,c=this.clearPass,l=this.inverted?0:1,h=1-l;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,l,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(r,null):(c.render(r,e),c.render(r,t))),this.renderToScreen?(r.setRenderTarget(null),r.render(o,A)):(r.setRenderTarget(e),r.render(o,A),r.setRenderTarget(t),r.render(o,A)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},BI=class{constructor(r=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:n}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,n,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new mI,this.depthTexture=null,this.passes=[],this.timer=new gI,this.autoRenderToScreen=!0,this.setRenderer(r)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(r){const e=this.inputBuffer,t=this.multisampling;t>0&&r>0?(this.inputBuffer.samples=r,this.outputBuffer.samples=r,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==r&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,r),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(r){if(this.renderer=r,r!==null){const e=r.getSize(new at),t=r.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Fr&&r.outputColorSpace===Yt&&(this.inputBuffer.texture.colorSpace=Yt,this.outputBuffer.texture.colorSpace=Yt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),r.autoClear=!1,this.setSize(e.width,e.height);for(const n of this.passes)n.initialize(r,t,i)}}replaceRenderer(r,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(r),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(r.domElement)),t}createDepthTexture(){const r=this.depthTexture=new uu;return this.inputBuffer.depthTexture=r,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(r.format=ps,r.type=ds):r.type=Fn,r}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const r of this.passes)r.setDepthTexture(null)}}createBuffer(r,e,t,i){const n=this.renderer,s=n===null?new at:n.getDrawingBufferSize(new at),a={minFilter:br,magFilter:br,stencilBuffer:e,depthBuffer:r,type:t},o=new Jr(s.width,s.height,a);return i>0&&(o.ignoreDepthForMultisampleCopy=!1,o.samples=i),t===Fr&&n!==null&&n.outputColorSpace===Yt&&(o.texture.colorSpace=Yt),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(r){for(const e of this.passes)e.mainScene=r}setMainCamera(r){for(const e of this.passes)e.mainCamera=r}addPass(r,e){const t=this.passes,i=this.renderer,n=i.getDrawingBufferSize(new at),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(r.setRenderer(i),r.setSize(n.width,n.height),r.initialize(i,s,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),r.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,r):t.push(r),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),r.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(r of t)r.setDepthTexture(o)}else r.setDepthTexture(this.depthTexture)}removePass(r){const e=this.passes,t=e.indexOf(r);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const i=(n,s)=>n||s.needsDepthTexture;e.reduce(i,!1)||(r.getDepthTexture()===this.depthTexture&&r.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(r.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const r=this.passes;this.deleteDepthTexture(),r.length>0&&(this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!1),this.passes=[])}render(r){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,n=this.outputBuffer,s=!1,a,o,A;r===void 0&&(this.timer.update(),r=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(e,i,n,r,s),c.needsSwap&&(s&&(t.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,i,n,r,s),o.setFunc(a.EQUAL,1,4294967295)),A=i,i=n,n=A),c instanceof CI?s=!0:c instanceof pI&&(s=!1))}setSize(r,e,t){const i=this.renderer,n=i.getSize(new at);(r===void 0||e===void 0)&&(r=n.width,e=n.height),(n.width!==r||n.height!==e)&&i.setSize(r,e,t);const s=i.getDrawingBufferSize(new at);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const r of this.passes)r.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},bs={NONE:0,DEPTH:1,CONVOLUTION:2},Tt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},EI=class{constructor(){this.shaderParts=new Map([[Tt.FRAGMENT_HEAD,null],[Tt.FRAGMENT_MAIN_UV,null],[Tt.FRAGMENT_MAIN_IMAGE,null],[Tt.VERTEX_HEAD,null],[Tt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=bs.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=qi}},Qu=!1,Xd=class{constructor(r=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(r),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case jr:t=this.materialsFlatShadedDoubleSide;break;case dr:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case jr:t=this.materialsDoubleSide;break;case dr:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(r){if(!(r instanceof Dr))return r.clone();const e=r.uniforms,t=new Map;for(const n in e){const s=e[n].value;s.isRenderTargetTexture&&(e[n].value=null,t.set(n,s))}const i=r.clone();for(const n of t)e[n[0]].value=n[1],i.uniforms[n[0]].value=n[1];return i}setMaterial(r){if(this.disposeMaterials(),this.material=r,r!==null){const e=this.materials=[this.cloneMaterial(r),this.cloneMaterial(r),this.cloneMaterial(r)];for(const t of e)t.uniforms=Object.assign({},r.uniforms),t.side=Vi;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.side=dr,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.side=jr,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i.side=dr,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},r.uniforms),i.flatShading=!0,i.side=jr,i})}}render(r,e,t){const i=r.shadowMap.enabled;if(r.shadowMap.enabled=!1,Qu){const n=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),r.render(e,t);for(const s of n)s[0].material=s[1];this.meshCount!==n.size&&n.clear()}else{const n=e.overrideMaterial;e.overrideMaterial=this.material,r.render(e,t),e.overrideMaterial=n}r.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const r=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of r)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Qu}static set workaroundEnabled(r){Qu=r}},Kn=-1,$i=class extends dn{constructor(r,e=Kn,t=Kn,i=1){super(),this.resizable=r,this.baseSize=new at(1,1),this.preferredSize=new at(e,t),this.target=this.preferredSize,this.s=i,this.effectiveSize=new at,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const r=this.baseSize,e=this.preferredSize,t=this.effectiveSize,i=this.scale;e.width!==Kn?t.width=e.width:e.height!==Kn?t.width=Math.round(e.height*(r.width/Math.max(r.height,1))):t.width=Math.round(r.width*i),e.height!==Kn?t.height=e.height:e.width!==Kn?t.height=Math.round(e.width/Math.max(r.width/Math.max(r.height,1),1)):t.height=Math.round(r.height*i)}get width(){return this.effectiveSize.width}set width(r){this.preferredWidth=r}get height(){return this.effectiveSize.height}set height(r){this.preferredHeight=r}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(r){this.s!==r&&(this.s=r,this.preferredSize.setScalar(Kn),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(r){this.scale=r}get baseWidth(){return this.baseSize.width}set baseWidth(r){this.baseSize.width!==r&&(this.baseSize.width=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(r){this.baseWidth=r}get baseHeight(){return this.baseSize.height}set baseHeight(r){this.baseSize.height!==r&&(this.baseSize.height=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(r){this.baseHeight=r}setBaseSize(r,e){(this.baseSize.width!==r||this.baseSize.height!==e)&&(this.baseSize.set(r,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(r){this.preferredSize.width!==r&&(this.preferredSize.width=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(r){this.preferredWidth=r}get preferredHeight(){return this.preferredSize.height}set preferredHeight(r){this.preferredSize.height!==r&&(this.preferredSize.height=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(r){this.preferredHeight=r}setPreferredSize(r,e){(this.preferredSize.width!==r||this.preferredSize.height!==e)&&(this.preferredSize.set(r,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(r){this.s=r.scale,this.baseSize.set(r.baseWidth,r.baseHeight),this.preferredSize.set(r.preferredWidth,r.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Kn}},It={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},DI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",yI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",II="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",MI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",PI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",QI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",xI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",bI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",SI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",TI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",HI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",OI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",LI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",RI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",FI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",kI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",UI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",GI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",NI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",zI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",YI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",XI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",jI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",JI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",KI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",VI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",WI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",ZI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",qI="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",_I="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",$I="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",eM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",tM=new Map([[It.ADD,DI],[It.ALPHA,yI],[It.AVERAGE,II],[It.COLOR,MI],[It.COLOR_BURN,PI],[It.COLOR_DODGE,QI],[It.DARKEN,xI],[It.DIFFERENCE,bI],[It.DIVIDE,SI],[It.DST,null],[It.EXCLUSION,TI],[It.HARD_LIGHT,HI],[It.HARD_MIX,OI],[It.HUE,LI],[It.INVERT,RI],[It.INVERT_RGB,FI],[It.LIGHTEN,kI],[It.LINEAR_BURN,UI],[It.LINEAR_DODGE,GI],[It.LINEAR_LIGHT,NI],[It.LUMINOSITY,zI],[It.MULTIPLY,YI],[It.NEGATION,XI],[It.NORMAL,jI],[It.OVERLAY,JI],[It.PIN_LIGHT,KI],[It.REFLECT,VI],[It.SATURATION,WI],[It.SCREEN,ZI],[It.SOFT_LIGHT,qI],[It.SRC,_I],[It.SUBTRACT,$I],[It.VIVID_LIGHT,eM]]),rM=class extends dn{constructor(r,e=1){super(),this._blendFunction=r,this.opacity=new xt(e)}getOpacity(){return this.opacity.value}setOpacity(r){this.opacity.value=r}get blendFunction(){return this._blendFunction}set blendFunction(r){this._blendFunction=r,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(r){this.blendFunction=r}getShaderCode(){return tM.get(this.blendFunction)}},xu={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},iM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,nM="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",sM=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],aM=class extends Dr{constructor(r=new qt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new xt(null),texelSize:new xt(new qt),scale:new xt(1),kernel:new xt(0)},blending:ri,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:iM,vertexShader:nM}),this.fragmentShader=Io(this.fragmentShader),this.setTexelSize(r.x,r.y),this.kernelSize=xu.MEDIUM}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.inputBuffer=r}get kernelSequence(){return sM[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(r){this.uniforms.scale.value=r}getScale(){return this.uniforms.scale.value}setScale(r){this.uniforms.scale.value=r}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(r){this.uniforms.kernel.value=r}setKernel(r){this.kernel=r}setTexelSize(r,e){this.uniforms.texelSize.value.set(r,e,r*.5,e*.5)}setSize(r,e){const t=1/r,i=1/e;this.uniforms.texelSize.value.set(t,i,t*.5,i*.5)}},oM=class extends _i{constructor({kernelSize:r=xu.MEDIUM,resolutionScale:e=.5,width:t=$i.AUTO_SIZE,height:i=$i.AUTO_SIZE,resolutionX:n=t,resolutionY:s=i}={}){super("KawaseBlurPass"),this.renderTargetA=new Jr(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new $i(this,n,s,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new aM,this._blurMaterial.kernelSize=r,this.copyMaterial=new Nd}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(r){this._blurMaterial=r}get dithering(){return this.copyMaterial.dithering}set dithering(r){this.copyMaterial.dithering=r}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(r){this.blurMaterial.kernelSize=r}get width(){return this.resolution.width}set width(r){this.resolution.preferredWidth=r}get height(){return this.resolution.height}set height(r){this.resolution.preferredHeight=r}get scale(){return this.blurMaterial.scale}set scale(r){this.blurMaterial.scale=r}getScale(){return this.blurMaterial.scale}setScale(r){this.blurMaterial.scale=r}getKernelSize(){return this.kernelSize}setKernelSize(r){this.kernelSize=r}getResolutionScale(){return this.resolution.scale}setResolutionScale(r){this.resolution.scale=r}render(r,e,t,i,n){const s=this.scene,a=this.camera,o=this.renderTargetA,A=this.renderTargetB,c=this.blurMaterial,l=c.kernelSequence;let h=e;this.fullscreenMaterial=c;for(let u=0,g=l.length;u<g;++u){const p=u&1?A:o;c.kernel=l[u],c.inputBuffer=h.texture,r.setRenderTarget(p),r.render(s,a),h=p}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,r.setRenderTarget(this.renderToScreen?null:t),r.render(s,a)}setSize(r,e){const t=this.resolution;t.setBaseSize(r,e);const i=t.width,n=t.height;this.renderTargetA.setSize(i,n),this.renderTargetB.setSize(i,n),this.blurMaterial.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Fr?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):r!==null&&r.outputColorSpace===Yt&&(this.renderTargetA.texture.colorSpace=Yt,this.renderTargetB.texture.colorSpace=Yt))}static get AUTO_SIZE(){return $i.AUTO_SIZE}},AM=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l)*l;
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);
#else
gl_FragColor=vec4(l);
#endif
}`,cM=class extends Dr{constructor(r=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:ta.replace(/\D+/g,"")},uniforms:{inputBuffer:new xt(null),threshold:new xt(0),smoothing:new xt(1),range:new xt(null)},blending:ri,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:AM,vertexShader:Gd}),this.colorOutput=r,this.luminanceRange=e}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get threshold(){return this.uniforms.threshold.value}set threshold(r){this.smoothing>0||r>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=r}getThreshold(){return this.threshold}setThreshold(r){this.threshold=r}get smoothing(){return this.uniforms.smoothing.value}set smoothing(r){this.threshold>0||r>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=r}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(r){this.smoothing=r}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(r){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(r){r?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(r){return this.colorOutput}setColorOutputEnabled(r){this.colorOutput=r}get useRange(){return this.luminanceRange!==null}set useRange(r){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(r){r!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=r,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(r){this.luminanceRange=r}},lM=class extends _i{constructor({renderTarget:r,luminanceRange:e,colorOutput:t,resolutionScale:i=1,width:n=$i.AUTO_SIZE,height:s=$i.AUTO_SIZE,resolutionX:a=n,resolutionY:o=s}={}){super("LuminancePass"),this.fullscreenMaterial=new cM(t,e),this.needsSwap=!1,this.renderTarget=r,this.renderTarget===void 0&&(this.renderTarget=new Jr(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const A=this.resolution=new $i(this,a,o,i);A.addEventListener("change",c=>this.setSize(A.baseWidth,A.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(r,e,t,i,n){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){const t=this.resolution;t.setBaseSize(r,e),this.renderTarget.setSize(t.width,t.height)}initialize(r,e,t){t!==void 0&&t!==Fr&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},hM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,uM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",gM=class extends Dr{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new xt(null),texelSize:new xt(new at)},blending:ri,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:hM,vertexShader:uM}),this.fragmentShader=Io(this.fragmentShader)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},fM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,dM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",pM=class extends Dr{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new xt(null),supportBuffer:new xt(null),texelSize:new xt(new at),radius:new xt(.85)},blending:ri,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:fM,vertexShader:dM}),this.fragmentShader=Io(this.fragmentShader)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}set supportBuffer(r){this.uniforms.supportBuffer.value=r}get radius(){return this.uniforms.radius.value}set radius(r){this.uniforms.radius.value=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},wM=class extends _i{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Jr(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new gM,this.upsamplingMaterial=new pM,this.resolution=new at}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(r){if(this.levels!==r){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<r;++t){const i=e.clone();i.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let t=1,i=r-1;t<i;++t){const n=e.clone();n.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(n)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(r){this.upsamplingMaterial.radius=r}render(r,e,t,i,n){const{scene:s,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:A}=this,{downsamplingMipmaps:c,upsamplingMipmaps:l}=this;let h=e;this.fullscreenMaterial=o;for(let u=0,g=c.length;u<g;++u){const p=c[u];o.setSize(h.width,h.height),o.inputBuffer=h.texture,r.setRenderTarget(p),r.render(s,a),h=p}this.fullscreenMaterial=A;for(let u=l.length-1;u>=0;--u){const g=l[u];A.setSize(h.width,h.height),A.inputBuffer=h.texture,A.supportBuffer=c[u].texture,r.setRenderTarget(g),r.render(s,a),h=g}}setSize(r,e){const t=this.resolution;t.set(r,e);let i=t.width,n=t.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)i=Math.round(i*.5),n=Math.round(n*.5),this.downsamplingMipmaps[s].setSize(i,n),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(i,n)}initialize(r,e,t){if(t!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const n of i)n.texture.type=t;if(t!==Fr)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(r!==null&&r.outputColorSpace===Yt)for(const n of i)n.texture.colorSpace=Yt}}dispose(){super.dispose();for(const r of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))r.dispose()}},vM=class extends dn{constructor(r,e,{attributes:t=bs.NONE,blendFunction:i=It.NORMAL,defines:n=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=r,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=n,this.uniforms=s,this.extensions=a,this.blendMode=new rM(i),this.blendMode.addEventListener("change",A=>this.setChanged()),this._inputColorSpace=qi,this._outputColorSpace=Zi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(r){this._inputColorSpace=r,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(r){this._outputColorSpace=r,this.setChanged()}set mainScene(r){}set mainCamera(r){}getName(){return this.name}setRenderer(r){this.renderer=r}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(r){this.attributes=r,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(r){this.fragmentShader=r,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(r){this.vertexShader=r,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(r,e=ho){}update(r,e,t){}setSize(r,e){}initialize(r,e,t){}dispose(){for(const r of Object.keys(this)){const e=this[r];(e instanceof Jr||e instanceof ms||e instanceof pr||e instanceof _i)&&this[r].dispose()}}},mM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,CM=class extends vM{constructor({blendFunction:r=It.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:i=!1,intensity:n=1,radius:s=.85,levels:a=8,kernelSize:o=xu.LARGE,resolutionScale:A=.5,width:c=$i.AUTO_SIZE,height:l=$i.AUTO_SIZE,resolutionX:h=c,resolutionY:u=l}={}){super("BloomEffect",mM,{blendFunction:r,uniforms:new Map([["map",new xt(null)],["intensity",new xt(n)]])}),this.renderTarget=new Jr(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new oM({kernelSize:o}),this.luminancePass=new lM({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new wM,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const g=this.resolution=new $i(this,h,u,A);g.addEventListener("change",p=>this.setSize(g.baseWidth,g.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(r){this.resolution.preferredWidth=r}get height(){return this.resolution.height}set height(r){this.resolution.preferredHeight=r}get dithering(){return this.blurPass.dithering}set dithering(r){this.blurPass.dithering=r}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(r){this.blurPass.kernelSize=r}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(r){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(r){this.uniforms.get("intensity").value=r}getIntensity(){return this.intensity}setIntensity(r){this.intensity=r}getResolutionScale(){return this.resolution.scale}setResolutionScale(r){this.resolution.scale=r}update(r,e,t){const i=this.renderTarget,n=this.luminancePass;n.enabled?(n.render(r,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(r,n.renderTarget):this.blurPass.render(r,n.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(r,e):this.blurPass.render(r,e,i)}setSize(r,e){const t=this.resolution;t.setBaseSize(r,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(r,e),this.mipmapBlurPass.setSize(r,e)}initialize(r,e,t){this.blurPass.initialize(r,e,t),this.luminancePass.initialize(r,e,t),this.mipmapBlurPass.initialize(r,e,t),t!==void 0&&(this.renderTarget.texture.type=t,r!==null&&r.outputColorSpace===Yt&&(this.renderTarget.texture.colorSpace=Yt))}},BM=class extends _i{constructor(r,e,t=null){super("RenderPass",r,e),this.needsSwap=!1,this.clearPass=new Yd,this.overrideMaterialManager=t===null?null:new Xd(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get renderToScreen(){return super.renderToScreen}set renderToScreen(r){super.renderToScreen=r,this.clearPass.renderToScreen=r}get overrideMaterial(){const r=this.overrideMaterialManager;return r!==null?r.material:null}set overrideMaterial(r){const e=this.overrideMaterialManager;r!==null?e!==null?e.setMaterial(r):this.overrideMaterialManager=new Xd(r):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(r){this.overrideMaterial=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getSelection(){return this.selection}setSelection(r){this.selection=r}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(r){this.ignoreBackground=r}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(r){this.skipShadowMapUpdate=r}getClearPass(){return this.clearPass}render(r,e,t,i,n){const s=this.scene,a=this.camera,o=this.selection,A=a.layers.mask,c=s.background,l=r.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(r.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(r,e),r.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(r,s,a):r.render(s,a),a.layers.mask=A,s.background=c,r.shadowMap.autoUpdate=l}},EM=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,DM="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",yM=class extends Dr{constructor(r,e,t,i,n=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:ta.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new xt(null),depthBuffer:new xt(null),resolution:new xt(new at),texelSize:new xt(new at),cameraNear:new xt(.3),cameraFar:new xt(1e3),aspect:new xt(1),time:new xt(0)},blending:ri,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:n}),r&&this.setShaderParts(r),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){this.uniforms.depthBuffer.value=r}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}setDepthBuffer(r,e=ho){this.depthBuffer=r,this.depthPacking=e}setShaderData(r){this.setShaderParts(r.shaderParts),this.setDefines(r.defines),this.setUniforms(r.uniforms),this.setExtensions(r.extensions)}setShaderParts(r){return this.fragmentShader=EM.replace(Tt.FRAGMENT_HEAD,r.get(Tt.FRAGMENT_HEAD)||"").replace(Tt.FRAGMENT_MAIN_UV,r.get(Tt.FRAGMENT_MAIN_UV)||"").replace(Tt.FRAGMENT_MAIN_IMAGE,r.get(Tt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=DM.replace(Tt.VERTEX_HEAD,r.get(Tt.VERTEX_HEAD)||"").replace(Tt.VERTEX_MAIN_SUPPORT,r.get(Tt.VERTEX_MAIN_SUPPORT)||""),this.fragmentShader=Io(this.fragmentShader),this.needsUpdate=!0,this}setDefines(r){for(const e of r.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(r){for(const e of r.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(r){this.extensions={};for(const e of r)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(r){this.encodeOutput!==r&&(r?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(r){return this.encodeOutput}setOutputEncodingEnabled(r){this.encodeOutput=r}get time(){return this.uniforms.time.value}set time(r){this.uniforms.time.value=r}setDeltaTime(r){this.uniforms.time.value+=r}adoptCameraSettings(r){this.copyCameraSettings(r)}copyCameraSettings(r){r&&(this.uniforms.cameraNear.value=r.near,this.uniforms.cameraFar.value=r.far,r instanceof di?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(r,e){const t=this.uniforms;t.resolution.value.set(r,e),t.texelSize.value.set(1/r,1/e),t.aspect.value=r/e}static get Section(){return Tt}};function jd(r,e,t){for(const i of e){const n="$1"+r+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(s,n))}}function IM(r,e,t){let i=e.getFragmentShader(),n=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&t.attributes&bs.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,A=t.shaderParts;let c=A.get(Tt.FRAGMENT_HEAD)||"",l=A.get(Tt.FRAGMENT_MAIN_UV)||"",h=A.get(Tt.FRAGMENT_MAIN_IMAGE)||"",u=A.get(Tt.VERTEX_HEAD)||"",g=A.get(Tt.VERTEX_MAIN_SUPPORT)||"";const p=new Set,w=new Set;if(a&&(l+=`	${r}MainUv(UV);
`,t.uvTransformation=!0),n!==null&&/mainSupport/.test(n)){const D=/mainSupport *\([\w\s]*?uv\s*?\)/.test(n);g+=`	${r}MainSupport(`,g+=D?`vUv);
`:`);
`;for(const m of n.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const C of m[1].split(/\s*,\s*/))t.varyings.add(C),p.add(C),w.add(C);for(const m of n.matchAll(o))w.add(m[1])}for(const D of i.matchAll(o))w.add(D[1]);for(const D of e.defines.keys())w.add(D.replace(/\([\w\s,]*\)/g,""));for(const D of e.uniforms.keys())w.add(D);w.delete("while"),w.delete("for"),w.delete("if"),e.uniforms.forEach((D,m)=>t.uniforms.set(r+m.charAt(0).toUpperCase()+m.slice(1),D)),e.defines.forEach((D,m)=>t.defines.set(r+m.charAt(0).toUpperCase()+m.slice(1),D));const f=new Map([["fragment",i],["vertex",n]]);jd(r,w,t.defines),jd(r,w,f),i=f.get("fragment"),n=f.get("vertex");const d=e.blendMode;if(t.blendModes.set(d.blendFunction,d),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===Yt?`color0 = LinearTosRGB(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Zi?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const D=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${r}MainImage(color0, UV, `,t.attributes&bs.DEPTH&&D.test(i)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;const m=r+"BlendOpacity";t.uniforms.set(m,d.opacity),h+=`color0 = blend${d.blendFunction}(color0, color1, ${m});

	`,c+=`uniform float ${m};

`}if(c+=i+`
`,n!==null&&(u+=n+`
`),A.set(Tt.FRAGMENT_HEAD,c),A.set(Tt.FRAGMENT_MAIN_UV,l),A.set(Tt.FRAGMENT_MAIN_IMAGE,h),A.set(Tt.VERTEX_HEAD,u),A.set(Tt.VERTEX_MAIN_SUPPORT,g),e.extensions!==null)for(const D of e.extensions)t.extensions.add(D)}}var MM=class extends _i{constructor(r,...e){super("EffectPass"),this.fullscreenMaterial=new yM(null,null,null,r),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(r){for(const e of this.effects)e.mainScene=r}set mainCamera(r){this.fullscreenMaterial.copyCameraSettings(r);for(const e of this.effects)e.mainCamera=r}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(r){this.fullscreenMaterial.encodeOutput=r}get dithering(){return this.fullscreenMaterial.dithering}set dithering(r){const e=this.fullscreenMaterial;e.dithering=r,e.needsUpdate=!0}setEffects(r){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=r.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const r=new EI;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===It.DST)r.attributes|=a.getAttributes()&bs.DEPTH;else{if(r.attributes&a.getAttributes()&bs.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);IM("e"+e++,a,r)}let t=r.shaderParts.get(Tt.FRAGMENT_HEAD),i=r.shaderParts.get(Tt.FRAGMENT_MAIN_IMAGE),n=r.shaderParts.get(Tt.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of r.blendModes.values())t+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;r.attributes&bs.DEPTH?(r.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,r.colorSpace===Yt&&(i+=`color0 = sRGBToLinear(color0);
	`),r.uvTransformation?(n=`vec2 transformedUv = vUv;
`+n,r.defines.set("UV","transformedUv")):r.defines.set("UV","vUv"),r.shaderParts.set(Tt.FRAGMENT_HEAD,t),r.shaderParts.set(Tt.FRAGMENT_MAIN_IMAGE,i),r.shaderParts.set(Tt.FRAGMENT_MAIN_UV,n);for(const[a,o]of r.shaderParts)o!==null&&r.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(r)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(r,e=ho){this.fullscreenMaterial.depthBuffer=r,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(r,e)}render(r,e,t,i,n){for(const s of this.effects)s.update(r,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,r.setRenderTarget(this.renderToScreen?null:t),r.render(this.scene,this.camera)}}setSize(r,e){this.fullscreenMaterial.setSize(r,e);for(const t of this.effects)t.setSize(r,e)}initialize(r,e,t){this.renderer=r;for(const i of this.effects)i.initialize(r,e,t);this.updateMaterial(),t!==void 0&&t!==Fr&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const r of this.effects)r.removeEventListener("change",this.listener),r.dispose()}handleEvent(r){switch(r.type){case"change":this.recompile();break}}};const bu=new Map;let Su=!1;function PM(r){Su=!0;let e=r.split("&");for(var t=0;t<e.length;t++){var i=e[t].split("=");const n=decodeURIComponent(i[0]);if(i.length>1){const s=decodeURIComponent(i[1]);bu.set(n,s)}else bu.set(n,"")}}function QM(r){if(Su||PM(self.location.search.substring(1)),!Su)throw new Error("Called `getParam()` before invoking `parseParams()`.  Please call `parseParams()` before calling `getParam()`.");return bu.get(r)}const Jd=new Iy;Jd.setOptions({imageOrientation:"flipY"});async function xM(r){const e=await Jd.loadAsync(r),t=new By(e);return t.colorSpace=Yt,t}class bM{constructor(e){this.spec=e,this.loaded=new co(1),this._loadAllImages()}waitUntilLoaded(){return ea(this.loaded)}async _loadAllImages(){const e={},t=Object.keys(this.spec);for(let n of t){const s=this.spec[n];e[n]=xM(s)}let i={};for(let n of t)if(i[n]=await e[n],this.textures&&this.textures[n])throw new Error("`load()` was called twice.  textures already populated, yet we are trying to load again.");this.textures=i,this.loaded.next()}}function SM(r,e){if(e==null)throw console.trace("Received a object undefined for the cullBoundaries"),new Error("Received a object undefined for the cullBoundaries");return e instanceof yi?r.intersectsSphere(e):r.intersectsBox(e)}class TM{constructor(e,t){this.game=e,this.camera=t,this.withGraphics=this.game.with("graphics"),this.frustrum=new hc,this.hidden=new Map,this.withGraphics.onEntityAdded.subscribe(i=>this.hidden.set(i.graphics,!0)),this.withGraphics.onEntityRemoved.subscribe(i=>{this.hidden.delete(i.graphics)})}get numEntities(){return this.withGraphics.size}get numVisible(){return this.withGraphics.size-this.hidden.size}updateFrustrum(){this.frustrum.setFromProjectionMatrix(new Ut().multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse))}cull(){this.updateFrustrum(),this.cullNormal()}cullNormal(){for(let e of this.withGraphics)this.doCull(e)}doCull(e){const t=e.graphics,i=t.cullBoundaries;SM(this.frustrum,i)?this.hidden.has(t)&&(t.show(),this.hidden.delete(t)):this.hidden.has(t)||(t.hide(),this.hidden.set(t,!0))}}const ur=new vu,HM=.175,OM=3,LM=.5,Tu=2.5;function RM(r){const e=Tu,t=Math.max(Math.sqrt(r)+1,Tu),i=20,n=Math.min(r,i)/i;return e*(1-n)+t*n}class FM{constructor(e){this.graphicsSystem=e,this.current_angle=Math.PI,this.baseZoom=1.5,this.current_zoom=Tu,this.current_custom_zoom=1.75,this.lookAtTarget=new V}setAngle(e){this.current_angle=e}getAngle(){return this.current_angle}getOffset(){return new V(Math.sin(this.current_angle)*10,20,Math.cos(this.current_angle)*10).multiplyScalar(this.baseZoom)}setZoom(e){this.current_zoom=e}handleZoom(e){var t;const i=(t=e.graphics)==null?void 0:t.radius;if(!i)return;const n=RM(i);this.setZoom(n)}getZoom(){return this.current_zoom*this.mobilePortraitSupportScale()}getTotalZoom(){return this.getZoom()*this.getCustomZoom()}setCustomZoom(e){e=Math.min(e,OM),e=Math.max(e,LM),this.current_custom_zoom=e}getCustomZoom(){return this.current_custom_zoom}mobilePortraitSupportScale(){return this.graphicsSystem.width<600&&this.graphicsSystem.height>this.graphicsSystem.width?Math.max(this.graphicsSystem.height/this.graphicsSystem.width,2):1}followTarget(e){const t=this.graphicsSystem.camera,i=this.getOffset().multiplyScalar(this.getTotalZoom()),n=new V(e.x+i.x,e.y+i.y,e.z+i.z),s=new V().lerpVectors(t.position,n,.3);this.lookAtTarget=new V().lerpVectors(this.lookAtTarget,e,.3),t.position.copy(s),t.lookAt(this.lookAtTarget)}sizeToNotClipUnder(e){return(.225+(e||0))*this.getTotalZoom()+HM}snapTo(e){const t=this.getOffset().multiplyScalar(this.getTotalZoom()),i=new V(e.x+t.x,e.y+t.y,e.z+t.z);this.graphicsSystem.camera.position.copy(i),this.lookAtTarget.copy(e),this.graphicsSystem.camera.lookAt(this.lookAtTarget)}}class kM{constructor(e,t,i,n,s,a){this.game=e,this.canvas=t,this.canvasId=i,this.cameraHandler=new FM(this),this.rotationState={left:!1,right:!1},this.start=Date.now(),this.frames=0,this.Y_OFFSET=.175,this.renderer=new wy({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.width=n,this.height=s,this.renderer.setSize(n,s,!1),this.renderer.setPixelRatio(Math.min(a,2)),this.renderer.setClearColor(new ot(0)),this.camera=new di(50,n/s,.1,1e4),this.composer=new BI(this.renderer,{frameBufferType:aa});const o=new BM(ur,this.camera);this.composer.addPass(o),this.composer.addPass(new MM(this.camera,new CM({luminanceThreshold:1,intensity:.5}))),ur.add(this.camera),this.cullingSystem=new TM(this.game,this.camera)}snapToMe(){const e=this.game.meManager.me;e&&this.cameraHandler.snapTo(e.position)}sizeToNotClipUnder(e){return(.275+(e||0))*this.cameraHandler.getTotalZoom()+this.Y_OFFSET}tick(){if(this.game.meManager.me&&(this.cameraHandler.followTarget(this.game.meManager.me.position),this.cameraHandler.handleZoom(this.game.meManager.me)),this.rotationState.left&&this.cameraHandler.setAngle(this.cameraHandler.getAngle()+.03),this.rotationState.right&&this.cameraHandler.setAngle(this.cameraHandler.getAngle()-.03),(this.rotationState.left||this.rotationState.right)&&this.game.aimManager.refreshAimAngle(),this.cullingSystem.cull(),aI(),this.renderer.getContext().isContextLost())return;this.composer.render(),this.frames++;const e=this.frames*1e3/(Date.now()-this.start);Jy(e,this.renderer.info.render.calls,this.renderer.info.render.triangles)}resize(e,t){this.width=e,this.height=t,this.camera.aspect=e/t,this.composer.setSize(e,t,!1),this.camera.updateProjectionMatrix()}}var Qt;(function(r){r.assertEqual=n=>n;function e(n){}r.assertIs=e;function t(n){throw new Error}r.assertNever=t,r.arrayToEnum=n=>{const s={};for(const a of n)s[a]=a;return s},r.getValidEnumValues=n=>{const s=r.objectKeys(n).filter(o=>typeof n[n[o]]!="number"),a={};for(const o of s)a[o]=n[o];return r.objectValues(a)},r.objectValues=n=>r.objectKeys(n).map(function(s){return n[s]}),r.objectKeys=typeof Object.keys=="function"?n=>Object.keys(n):n=>{const s=[];for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&s.push(a);return s},r.find=(n,s)=>{for(const a of n)if(s(a))return a},r.isInteger=typeof Number.isInteger=="function"?n=>Number.isInteger(n):n=>typeof n=="number"&&isFinite(n)&&Math.floor(n)===n;function i(n,s=" | "){return n.map(a=>typeof a=="string"?`'${a}'`:a).join(s)}r.joinValues=i,r.jsonStringifyReplacer=(n,s)=>typeof s=="bigint"?s.toString():s})(Qt||(Qt={}));var Hu;(function(r){r.mergeShapes=(e,t)=>({...e,...t})})(Hu||(Hu={}));const Xe=Qt.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Vn=r=>{switch(typeof r){case"undefined":return Xe.undefined;case"string":return Xe.string;case"number":return isNaN(r)?Xe.nan:Xe.number;case"boolean":return Xe.boolean;case"function":return Xe.function;case"bigint":return Xe.bigint;case"symbol":return Xe.symbol;case"object":return Array.isArray(r)?Xe.array:r===null?Xe.null:r.then&&typeof r.then=="function"&&r.catch&&typeof r.catch=="function"?Xe.promise:typeof Map<"u"&&r instanceof Map?Xe.map:typeof Set<"u"&&r instanceof Set?Xe.set:typeof Date<"u"&&r instanceof Date?Xe.date:Xe.object;default:return Xe.unknown}},Oe=Qt.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),UM=r=>JSON.stringify(r,null,2).replace(/"([^"]+)":/g,"$1:");class pi extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(s){return s.message},i={_errors:[]},n=s=>{for(const a of s.issues)if(a.code==="invalid_union")a.unionErrors.map(n);else if(a.code==="invalid_return_type")n(a.returnTypeError);else if(a.code==="invalid_arguments")n(a.argumentsError);else if(a.path.length===0)i._errors.push(t(a));else{let o=i,A=0;for(;A<a.path.length;){const c=a.path[A];A===a.path.length-1?(o[c]=o[c]||{_errors:[]},o[c]._errors.push(t(a))):o[c]=o[c]||{_errors:[]},o=o[c],A++}}};return n(this),i}static assert(e){if(!(e instanceof pi))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,Qt.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},i=[];for(const n of this.issues)n.path.length>0?(t[n.path[0]]=t[n.path[0]]||[],t[n.path[0]].push(e(n))):i.push(e(n));return{formErrors:i,fieldErrors:t}}get formErrors(){return this.flatten()}}pi.create=r=>new pi(r);const Pa=(r,e)=>{let t;switch(r.code){case Oe.invalid_type:r.received===Xe.undefined?t="Required":t=`Expected ${r.expected}, received ${r.received}`;break;case Oe.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(r.expected,Qt.jsonStringifyReplacer)}`;break;case Oe.unrecognized_keys:t=`Unrecognized key(s) in object: ${Qt.joinValues(r.keys,", ")}`;break;case Oe.invalid_union:t="Invalid input";break;case Oe.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${Qt.joinValues(r.options)}`;break;case Oe.invalid_enum_value:t=`Invalid enum value. Expected ${Qt.joinValues(r.options)}, received '${r.received}'`;break;case Oe.invalid_arguments:t="Invalid function arguments";break;case Oe.invalid_return_type:t="Invalid function return type";break;case Oe.invalid_date:t="Invalid date";break;case Oe.invalid_string:typeof r.validation=="object"?"includes"in r.validation?(t=`Invalid input: must include "${r.validation.includes}"`,typeof r.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${r.validation.position}`)):"startsWith"in r.validation?t=`Invalid input: must start with "${r.validation.startsWith}"`:"endsWith"in r.validation?t=`Invalid input: must end with "${r.validation.endsWith}"`:Qt.assertNever(r.validation):r.validation!=="regex"?t=`Invalid ${r.validation}`:t="Invalid";break;case Oe.too_small:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at least":"more than"} ${r.minimum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at least":"over"} ${r.minimum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${r.minimum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(r.minimum))}`:t="Invalid input";break;case Oe.too_big:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at most":"less than"} ${r.maximum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at most":"under"} ${r.maximum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="bigint"?t=`BigInt must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly":r.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(r.maximum))}`:t="Invalid input";break;case Oe.custom:t="Invalid input";break;case Oe.invalid_intersection_types:t="Intersection results could not be merged";break;case Oe.not_multiple_of:t=`Number must be a multiple of ${r.multipleOf}`;break;case Oe.not_finite:t="Number must be finite";break;default:t=e.defaultError,Qt.assertNever(r)}return{message:t}};let Kd=Pa;function GM(r){Kd=r}function xc(){return Kd}const bc=r=>{const{data:e,path:t,errorMaps:i,issueData:n}=r,s=[...t,...n.path||[]],a={...n,path:s};if(n.message!==void 0)return{...n,path:s,message:n.message};let o="";const A=i.filter(c=>!!c).slice().reverse();for(const c of A)o=c(a,{data:e,defaultError:o}).message;return{...n,path:s,message:o}},NM=[];function ze(r,e){const t=xc(),i=bc({issueData:e,data:r.data,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,t,t===Pa?void 0:Pa].filter(n=>!!n)});r.common.issues.push(i)}class zr{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const i=[];for(const n of t){if(n.status==="aborted")return gt;n.status==="dirty"&&e.dirty(),i.push(n.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,t){const i=[];for(const n of t){const s=await n.key,a=await n.value;i.push({key:s,value:a})}return zr.mergeObjectSync(e,i)}static mergeObjectSync(e,t){const i={};for(const n of t){const{key:s,value:a}=n;if(s.status==="aborted"||a.status==="aborted")return gt;s.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof a.value<"u"||n.alwaysSet)&&(i[s.value]=a.value)}return{status:e.value,value:i}}}const gt=Object.freeze({status:"aborted"}),Sc=r=>({status:"dirty",value:r}),Wr=r=>({status:"valid",value:r}),Ou=r=>r.status==="aborted",Lu=r=>r.status==="dirty",Mo=r=>r.status==="valid",Po=r=>typeof Promise<"u"&&r instanceof Promise;function Tc(r,e,t,i){if(typeof e=="function"?r!==e||!i:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(r)}function Vd(r,e,t,i,n){if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(r,t),t}var et;(function(r){r.errToObj=e=>typeof e=="string"?{message:e}:e||{},r.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(et||(et={}));var Qo,xo;class en{constructor(e,t,i,n){this._cachedPath=[],this.parent=e,this.data=t,this._path=i,this._key=n}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Wd=(r,e)=>{if(Mo(e))return{success:!0,data:e.value};if(!r.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new pi(r.common.issues);return this._error=t,this._error}}};function vt(r){if(!r)return{};const{errorMap:e,invalid_type_error:t,required_error:i,description:n}=r;if(e&&(t||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:n}:{errorMap:(s,a)=>{var o,A;const{message:c}=r;return s.code==="invalid_enum_value"?{message:c??a.defaultError}:typeof a.data>"u"?{message:(o=c??i)!==null&&o!==void 0?o:a.defaultError}:s.code!=="invalid_type"?{message:a.defaultError}:{message:(A=c??t)!==null&&A!==void 0?A:a.defaultError}},description:n}}class Bt{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Vn(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Vn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new zr,ctx:{common:e.parent.common,data:e.data,parsedType:Vn(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Po(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const i=this.safeParse(e,t);if(i.success)return i.data;throw i.error}safeParse(e,t){var i;const n={common:{issues:[],async:(i=t==null?void 0:t.async)!==null&&i!==void 0?i:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Vn(e)},s=this._parseSync({data:e,path:n.path,parent:n});return Wd(n,s)}async parseAsync(e,t){const i=await this.safeParseAsync(e,t);if(i.success)return i.data;throw i.error}async safeParseAsync(e,t){const i={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Vn(e)},n=this._parse({data:e,path:i.path,parent:i}),s=await(Po(n)?n:Promise.resolve(n));return Wd(i,s)}refine(e,t){const i=n=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(n):t;return this._refinement((n,s)=>{const a=e(n),o=()=>s.addIssue({code:Oe.custom,...i(n)});return typeof Promise<"u"&&a instanceof Promise?a.then(A=>A?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,t){return this._refinement((i,n)=>e(i)?!0:(n.addIssue(typeof t=="function"?t(i,n):t),!1))}_refinement(e){return new ki({schema:this,typeName:lt.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return rn.create(this,this._def)}nullable(){return $n.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Fi.create(this,this._def)}promise(){return Sa.create(this,this._def)}or(e){return Ho.create([this,e],this._def)}and(e){return Oo.create(this,e,this._def)}transform(e){return new ki({...vt(this._def),schema:this,typeName:lt.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Uo({...vt(this._def),innerType:this,defaultValue:t,typeName:lt.ZodDefault})}brand(){return new ku({typeName:lt.ZodBranded,type:this,...vt(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Go({...vt(this._def),innerType:this,catchValue:t,typeName:lt.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return No.create(this,e)}readonly(){return zo.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const zM=/^c[^\s-]{8,}$/i,YM=/^[0-9a-z]+$/,XM=/^[0-9A-HJKMNP-TV-Z]{26}$/,jM=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,JM=/^[a-z0-9_-]{21}$/i,KM=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,VM=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,WM="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Ru;const ZM=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,qM=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,_M=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Zd="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",$M=new RegExp(`^${Zd}$`);function qd(r){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return r.precision?e=`${e}\\.\\d{${r.precision}}`:r.precision==null&&(e=`${e}(\\.\\d+)?`),e}function eP(r){return new RegExp(`^${qd(r)}$`)}function _d(r){let e=`${Zd}T${qd(r)}`;const t=[];return t.push(r.local?"Z?":"Z"),r.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function tP(r,e){return!!((e==="v4"||!e)&&ZM.test(r)||(e==="v6"||!e)&&qM.test(r))}class Ri extends Bt{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==Xe.string){const n=this._getOrReturnCtx(e);return ze(n,{code:Oe.invalid_type,expected:Xe.string,received:n.parsedType}),gt}const t=new zr;let i;for(const n of this._def.checks)if(n.kind==="min")e.data.length<n.value&&(i=this._getOrReturnCtx(e,i),ze(i,{code:Oe.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),t.dirty());else if(n.kind==="max")e.data.length>n.value&&(i=this._getOrReturnCtx(e,i),ze(i,{code:Oe.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!1,message:n.message}),t.dirty());else if(n.kind==="length"){const s=e.data.length>n.value,a=e.data.length<n.value;(s||a)&&(i=this._getOrReturnCtx(e,i),s?ze(i,{code:Oe.too_big,maximum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}):a&&ze(i,{code:Oe.too_small,minimum:n.value,type:"string",inclusive:!0,exact:!0,message:n.message}),t.dirty())}else if(n.kind==="email")VM.test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{validation:"email",code:Oe.invalid_string,message:n.message}),t.dirty());else if(n.kind==="emoji")Ru||(Ru=new RegExp(WM,"u")),Ru.test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{validation:"emoji",code:Oe.invalid_string,message:n.message}),t.dirty());else if(n.kind==="uuid")jM.test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{validation:"uuid",code:Oe.invalid_string,message:n.message}),t.dirty());else if(n.kind==="nanoid")JM.test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{validation:"nanoid",code:Oe.invalid_string,message:n.message}),t.dirty());else if(n.kind==="cuid")zM.test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{validation:"cuid",code:Oe.invalid_string,message:n.message}),t.dirty());else if(n.kind==="cuid2")YM.test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{validation:"cuid2",code:Oe.invalid_string,message:n.message}),t.dirty());else if(n.kind==="ulid")XM.test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{validation:"ulid",code:Oe.invalid_string,message:n.message}),t.dirty());else if(n.kind==="url")try{new URL(e.data)}catch{i=this._getOrReturnCtx(e,i),ze(i,{validation:"url",code:Oe.invalid_string,message:n.message}),t.dirty()}else n.kind==="regex"?(n.regex.lastIndex=0,n.regex.test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{validation:"regex",code:Oe.invalid_string,message:n.message}),t.dirty())):n.kind==="trim"?e.data=e.data.trim():n.kind==="includes"?e.data.includes(n.value,n.position)||(i=this._getOrReturnCtx(e,i),ze(i,{code:Oe.invalid_string,validation:{includes:n.value,position:n.position},message:n.message}),t.dirty()):n.kind==="toLowerCase"?e.data=e.data.toLowerCase():n.kind==="toUpperCase"?e.data=e.data.toUpperCase():n.kind==="startsWith"?e.data.startsWith(n.value)||(i=this._getOrReturnCtx(e,i),ze(i,{code:Oe.invalid_string,validation:{startsWith:n.value},message:n.message}),t.dirty()):n.kind==="endsWith"?e.data.endsWith(n.value)||(i=this._getOrReturnCtx(e,i),ze(i,{code:Oe.invalid_string,validation:{endsWith:n.value},message:n.message}),t.dirty()):n.kind==="datetime"?_d(n).test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{code:Oe.invalid_string,validation:"datetime",message:n.message}),t.dirty()):n.kind==="date"?$M.test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{code:Oe.invalid_string,validation:"date",message:n.message}),t.dirty()):n.kind==="time"?eP(n).test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{code:Oe.invalid_string,validation:"time",message:n.message}),t.dirty()):n.kind==="duration"?KM.test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{validation:"duration",code:Oe.invalid_string,message:n.message}),t.dirty()):n.kind==="ip"?tP(e.data,n.version)||(i=this._getOrReturnCtx(e,i),ze(i,{validation:"ip",code:Oe.invalid_string,message:n.message}),t.dirty()):n.kind==="base64"?_M.test(e.data)||(i=this._getOrReturnCtx(e,i),ze(i,{validation:"base64",code:Oe.invalid_string,message:n.message}),t.dirty()):Qt.assertNever(n);return{status:t.value,value:e.data}}_regex(e,t,i){return this.refinement(n=>e.test(n),{validation:t,code:Oe.invalid_string,...et.errToObj(i)})}_addCheck(e){return new Ri({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...et.errToObj(e)})}url(e){return this._addCheck({kind:"url",...et.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...et.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...et.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...et.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...et.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...et.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...et.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...et.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...et.errToObj(e)})}datetime(e){var t,i;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,local:(i=e==null?void 0:e.local)!==null&&i!==void 0?i:!1,...et.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...et.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...et.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...et.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...et.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...et.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...et.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...et.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...et.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...et.errToObj(t)})}nonempty(e){return this.min(1,et.errToObj(e))}trim(){return new Ri({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Ri({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Ri({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Ri.create=r=>{var e;return new Ri({checks:[],typeName:lt.ZodString,coerce:(e=r==null?void 0:r.coerce)!==null&&e!==void 0?e:!1,...vt(r)})};function rP(r,e){const t=(r.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,n=t>i?t:i,s=parseInt(r.toFixed(n).replace(".","")),a=parseInt(e.toFixed(n).replace(".",""));return s%a/Math.pow(10,n)}class Wn extends Bt{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==Xe.number){const n=this._getOrReturnCtx(e);return ze(n,{code:Oe.invalid_type,expected:Xe.number,received:n.parsedType}),gt}let t;const i=new zr;for(const n of this._def.checks)n.kind==="int"?Qt.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),ze(t,{code:Oe.invalid_type,expected:"integer",received:"float",message:n.message}),i.dirty()):n.kind==="min"?(n.inclusive?e.data<n.value:e.data<=n.value)&&(t=this._getOrReturnCtx(e,t),ze(t,{code:Oe.too_small,minimum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),i.dirty()):n.kind==="max"?(n.inclusive?e.data>n.value:e.data>=n.value)&&(t=this._getOrReturnCtx(e,t),ze(t,{code:Oe.too_big,maximum:n.value,type:"number",inclusive:n.inclusive,exact:!1,message:n.message}),i.dirty()):n.kind==="multipleOf"?rP(e.data,n.value)!==0&&(t=this._getOrReturnCtx(e,t),ze(t,{code:Oe.not_multiple_of,multipleOf:n.value,message:n.message}),i.dirty()):n.kind==="finite"?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),ze(t,{code:Oe.not_finite,message:n.message}),i.dirty()):Qt.assertNever(n);return{status:i.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,et.toString(t))}gt(e,t){return this.setLimit("min",e,!1,et.toString(t))}lte(e,t){return this.setLimit("max",e,!0,et.toString(t))}lt(e,t){return this.setLimit("max",e,!1,et.toString(t))}setLimit(e,t,i,n){return new Wn({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:et.toString(n)}]})}_addCheck(e){return new Wn({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:et.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:et.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:et.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:et.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:et.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:et.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:et.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:et.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:et.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Qt.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(t===null||i.value>t)&&(t=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Wn.create=r=>new Wn({checks:[],typeName:lt.ZodNumber,coerce:(r==null?void 0:r.coerce)||!1,...vt(r)});class Zn extends Bt{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==Xe.bigint){const n=this._getOrReturnCtx(e);return ze(n,{code:Oe.invalid_type,expected:Xe.bigint,received:n.parsedType}),gt}let t;const i=new zr;for(const n of this._def.checks)n.kind==="min"?(n.inclusive?e.data<n.value:e.data<=n.value)&&(t=this._getOrReturnCtx(e,t),ze(t,{code:Oe.too_small,type:"bigint",minimum:n.value,inclusive:n.inclusive,message:n.message}),i.dirty()):n.kind==="max"?(n.inclusive?e.data>n.value:e.data>=n.value)&&(t=this._getOrReturnCtx(e,t),ze(t,{code:Oe.too_big,type:"bigint",maximum:n.value,inclusive:n.inclusive,message:n.message}),i.dirty()):n.kind==="multipleOf"?e.data%n.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),ze(t,{code:Oe.not_multiple_of,multipleOf:n.value,message:n.message}),i.dirty()):Qt.assertNever(n);return{status:i.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,et.toString(t))}gt(e,t){return this.setLimit("min",e,!1,et.toString(t))}lte(e,t){return this.setLimit("max",e,!0,et.toString(t))}lt(e,t){return this.setLimit("max",e,!1,et.toString(t))}setLimit(e,t,i,n){return new Zn({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:et.toString(n)}]})}_addCheck(e){return new Zn({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:et.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:et.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:et.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:et.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:et.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Zn.create=r=>{var e;return new Zn({checks:[],typeName:lt.ZodBigInt,coerce:(e=r==null?void 0:r.coerce)!==null&&e!==void 0?e:!1,...vt(r)})};class bo extends Bt{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==Xe.boolean){const t=this._getOrReturnCtx(e);return ze(t,{code:Oe.invalid_type,expected:Xe.boolean,received:t.parsedType}),gt}return Wr(e.data)}}bo.create=r=>new bo({typeName:lt.ZodBoolean,coerce:(r==null?void 0:r.coerce)||!1,...vt(r)});class Ss extends Bt{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==Xe.date){const n=this._getOrReturnCtx(e);return ze(n,{code:Oe.invalid_type,expected:Xe.date,received:n.parsedType}),gt}if(isNaN(e.data.getTime())){const n=this._getOrReturnCtx(e);return ze(n,{code:Oe.invalid_date}),gt}const t=new zr;let i;for(const n of this._def.checks)n.kind==="min"?e.data.getTime()<n.value&&(i=this._getOrReturnCtx(e,i),ze(i,{code:Oe.too_small,message:n.message,inclusive:!0,exact:!1,minimum:n.value,type:"date"}),t.dirty()):n.kind==="max"?e.data.getTime()>n.value&&(i=this._getOrReturnCtx(e,i),ze(i,{code:Oe.too_big,message:n.message,inclusive:!0,exact:!1,maximum:n.value,type:"date"}),t.dirty()):Qt.assertNever(n);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Ss({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:et.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:et.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}Ss.create=r=>new Ss({checks:[],coerce:(r==null?void 0:r.coerce)||!1,typeName:lt.ZodDate,...vt(r)});class Hc extends Bt{_parse(e){if(this._getType(e)!==Xe.symbol){const t=this._getOrReturnCtx(e);return ze(t,{code:Oe.invalid_type,expected:Xe.symbol,received:t.parsedType}),gt}return Wr(e.data)}}Hc.create=r=>new Hc({typeName:lt.ZodSymbol,...vt(r)});class So extends Bt{_parse(e){if(this._getType(e)!==Xe.undefined){const t=this._getOrReturnCtx(e);return ze(t,{code:Oe.invalid_type,expected:Xe.undefined,received:t.parsedType}),gt}return Wr(e.data)}}So.create=r=>new So({typeName:lt.ZodUndefined,...vt(r)});class To extends Bt{_parse(e){if(this._getType(e)!==Xe.null){const t=this._getOrReturnCtx(e);return ze(t,{code:Oe.invalid_type,expected:Xe.null,received:t.parsedType}),gt}return Wr(e.data)}}To.create=r=>new To({typeName:lt.ZodNull,...vt(r)});class Qa extends Bt{constructor(){super(...arguments),this._any=!0}_parse(e){return Wr(e.data)}}Qa.create=r=>new Qa({typeName:lt.ZodAny,...vt(r)});class Ts extends Bt{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Wr(e.data)}}Ts.create=r=>new Ts({typeName:lt.ZodUnknown,...vt(r)});class In extends Bt{_parse(e){const t=this._getOrReturnCtx(e);return ze(t,{code:Oe.invalid_type,expected:Xe.never,received:t.parsedType}),gt}}In.create=r=>new In({typeName:lt.ZodNever,...vt(r)});class Oc extends Bt{_parse(e){if(this._getType(e)!==Xe.undefined){const t=this._getOrReturnCtx(e);return ze(t,{code:Oe.invalid_type,expected:Xe.void,received:t.parsedType}),gt}return Wr(e.data)}}Oc.create=r=>new Oc({typeName:lt.ZodVoid,...vt(r)});class Fi extends Bt{_parse(e){const{ctx:t,status:i}=this._processInputParams(e),n=this._def;if(t.parsedType!==Xe.array)return ze(t,{code:Oe.invalid_type,expected:Xe.array,received:t.parsedType}),gt;if(n.exactLength!==null){const a=t.data.length>n.exactLength.value,o=t.data.length<n.exactLength.value;(a||o)&&(ze(t,{code:a?Oe.too_big:Oe.too_small,minimum:o?n.exactLength.value:void 0,maximum:a?n.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:n.exactLength.message}),i.dirty())}if(n.minLength!==null&&t.data.length<n.minLength.value&&(ze(t,{code:Oe.too_small,minimum:n.minLength.value,type:"array",inclusive:!0,exact:!1,message:n.minLength.message}),i.dirty()),n.maxLength!==null&&t.data.length>n.maxLength.value&&(ze(t,{code:Oe.too_big,maximum:n.maxLength.value,type:"array",inclusive:!0,exact:!1,message:n.maxLength.message}),i.dirty()),t.common.async)return Promise.all([...t.data].map((a,o)=>n.type._parseAsync(new en(t,a,t.path,o)))).then(a=>zr.mergeArray(i,a));const s=[...t.data].map((a,o)=>n.type._parseSync(new en(t,a,t.path,o)));return zr.mergeArray(i,s)}get element(){return this._def.type}min(e,t){return new Fi({...this._def,minLength:{value:e,message:et.toString(t)}})}max(e,t){return new Fi({...this._def,maxLength:{value:e,message:et.toString(t)}})}length(e,t){return new Fi({...this._def,exactLength:{value:e,message:et.toString(t)}})}nonempty(e){return this.min(1,e)}}Fi.create=(r,e)=>new Fi({type:r,minLength:null,maxLength:null,exactLength:null,typeName:lt.ZodArray,...vt(e)});function xa(r){if(r instanceof tr){const e={};for(const t in r.shape){const i=r.shape[t];e[t]=rn.create(xa(i))}return new tr({...r._def,shape:()=>e})}else return r instanceof Fi?new Fi({...r._def,type:xa(r.element)}):r instanceof rn?rn.create(xa(r.unwrap())):r instanceof $n?$n.create(xa(r.unwrap())):r instanceof tn?tn.create(r.items.map(e=>xa(e))):r}class tr extends Bt{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=Qt.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==Xe.object){const A=this._getOrReturnCtx(e);return ze(A,{code:Oe.invalid_type,expected:Xe.object,received:A.parsedType}),gt}const{status:t,ctx:i}=this._processInputParams(e),{shape:n,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof In&&this._def.unknownKeys==="strip"))for(const A in i.data)s.includes(A)||a.push(A);const o=[];for(const A of s){const c=n[A],l=i.data[A];o.push({key:{status:"valid",value:A},value:c._parse(new en(i,l,i.path,A)),alwaysSet:A in i.data})}if(this._def.catchall instanceof In){const A=this._def.unknownKeys;if(A==="passthrough")for(const c of a)o.push({key:{status:"valid",value:c},value:{status:"valid",value:i.data[c]}});else if(A==="strict")a.length>0&&(ze(i,{code:Oe.unrecognized_keys,keys:a}),t.dirty());else if(A!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const A=this._def.catchall;for(const c of a){const l=i.data[c];o.push({key:{status:"valid",value:c},value:A._parse(new en(i,l,i.path,c)),alwaysSet:c in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const A=[];for(const c of o){const l=await c.key,h=await c.value;A.push({key:l,value:h,alwaysSet:c.alwaysSet})}return A}).then(A=>zr.mergeObjectSync(t,A)):zr.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(e){return et.errToObj,new tr({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,i)=>{var n,s,a,o;const A=(a=(s=(n=this._def).errorMap)===null||s===void 0?void 0:s.call(n,t,i).message)!==null&&a!==void 0?a:i.defaultError;return t.code==="unrecognized_keys"?{message:(o=et.errToObj(e).message)!==null&&o!==void 0?o:A}:{message:A}}}:{}})}strip(){return new tr({...this._def,unknownKeys:"strip"})}passthrough(){return new tr({...this._def,unknownKeys:"passthrough"})}extend(e){return new tr({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new tr({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:lt.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new tr({...this._def,catchall:e})}pick(e){const t={};return Qt.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(t[i]=this.shape[i])}),new tr({...this._def,shape:()=>t})}omit(e){const t={};return Qt.objectKeys(this.shape).forEach(i=>{e[i]||(t[i]=this.shape[i])}),new tr({...this._def,shape:()=>t})}deepPartial(){return xa(this)}partial(e){const t={};return Qt.objectKeys(this.shape).forEach(i=>{const n=this.shape[i];e&&!e[i]?t[i]=n:t[i]=n.optional()}),new tr({...this._def,shape:()=>t})}required(e){const t={};return Qt.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])t[i]=this.shape[i];else{let n=this.shape[i];for(;n instanceof rn;)n=n._def.innerType;t[i]=n}}),new tr({...this._def,shape:()=>t})}keyof(){return $d(Qt.objectKeys(this.shape))}}tr.create=(r,e)=>new tr({shape:()=>r,unknownKeys:"strip",catchall:In.create(),typeName:lt.ZodObject,...vt(e)}),tr.strictCreate=(r,e)=>new tr({shape:()=>r,unknownKeys:"strict",catchall:In.create(),typeName:lt.ZodObject,...vt(e)}),tr.lazycreate=(r,e)=>new tr({shape:r,unknownKeys:"strip",catchall:In.create(),typeName:lt.ZodObject,...vt(e)});class Ho extends Bt{_parse(e){const{ctx:t}=this._processInputParams(e),i=this._def.options;function n(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(o=>new pi(o.ctx.common.issues));return ze(t,{code:Oe.invalid_union,unionErrors:a}),gt}if(t.common.async)return Promise.all(i.map(async s=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await s._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(n);{let s;const a=[];for(const A of i){const c={...t,common:{...t.common,issues:[]},parent:null},l=A._parseSync({data:t.data,path:t.path,parent:c});if(l.status==="valid")return l;l.status==="dirty"&&!s&&(s={result:l,ctx:c}),c.common.issues.length&&a.push(c.common.issues)}if(s)return t.common.issues.push(...s.ctx.common.issues),s.result;const o=a.map(A=>new pi(A));return ze(t,{code:Oe.invalid_union,unionErrors:o}),gt}}get options(){return this._def.options}}Ho.create=(r,e)=>new Ho({options:r,typeName:lt.ZodUnion,...vt(e)});const qn=r=>r instanceof Ro?qn(r.schema):r instanceof ki?qn(r.innerType()):r instanceof Fo?[r.value]:r instanceof _n?r.options:r instanceof ko?Qt.objectValues(r.enum):r instanceof Uo?qn(r._def.innerType):r instanceof So?[void 0]:r instanceof To?[null]:r instanceof rn?[void 0,...qn(r.unwrap())]:r instanceof $n?[null,...qn(r.unwrap())]:r instanceof ku||r instanceof zo?qn(r.unwrap()):r instanceof Go?qn(r._def.innerType):[];class Lc extends Bt{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Xe.object)return ze(t,{code:Oe.invalid_type,expected:Xe.object,received:t.parsedType}),gt;const i=this.discriminator,n=t.data[i],s=this.optionsMap.get(n);return s?t.common.async?s._parseAsync({data:t.data,path:t.path,parent:t}):s._parseSync({data:t.data,path:t.path,parent:t}):(ze(t,{code:Oe.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),gt)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,i){const n=new Map;for(const s of t){const a=qn(s.shape[e]);if(!a.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of a){if(n.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);n.set(o,s)}}return new Lc({typeName:lt.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:n,...vt(i)})}}function Fu(r,e){const t=Vn(r),i=Vn(e);if(r===e)return{valid:!0,data:r};if(t===Xe.object&&i===Xe.object){const n=Qt.objectKeys(e),s=Qt.objectKeys(r).filter(o=>n.indexOf(o)!==-1),a={...r,...e};for(const o of s){const A=Fu(r[o],e[o]);if(!A.valid)return{valid:!1};a[o]=A.data}return{valid:!0,data:a}}else if(t===Xe.array&&i===Xe.array){if(r.length!==e.length)return{valid:!1};const n=[];for(let s=0;s<r.length;s++){const a=r[s],o=e[s],A=Fu(a,o);if(!A.valid)return{valid:!1};n.push(A.data)}return{valid:!0,data:n}}else return t===Xe.date&&i===Xe.date&&+r==+e?{valid:!0,data:r}:{valid:!1}}class Oo extends Bt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e),n=(s,a)=>{if(Ou(s)||Ou(a))return gt;const o=Fu(s.value,a.value);return o.valid?((Lu(s)||Lu(a))&&t.dirty(),{status:t.value,value:o.data}):(ze(i,{code:Oe.invalid_intersection_types}),gt)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([s,a])=>n(s,a)):n(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}Oo.create=(r,e,t)=>new Oo({left:r,right:e,typeName:lt.ZodIntersection,...vt(t)});class tn extends Bt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Xe.array)return ze(i,{code:Oe.invalid_type,expected:Xe.array,received:i.parsedType}),gt;if(i.data.length<this._def.items.length)return ze(i,{code:Oe.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),gt;!this._def.rest&&i.data.length>this._def.items.length&&(ze(i,{code:Oe.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const n=[...i.data].map((s,a)=>{const o=this._def.items[a]||this._def.rest;return o?o._parse(new en(i,s,i.path,a)):null}).filter(s=>!!s);return i.common.async?Promise.all(n).then(s=>zr.mergeArray(t,s)):zr.mergeArray(t,n)}get items(){return this._def.items}rest(e){return new tn({...this._def,rest:e})}}tn.create=(r,e)=>{if(!Array.isArray(r))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new tn({items:r,typeName:lt.ZodTuple,rest:null,...vt(e)})};class Lo extends Bt{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Xe.object)return ze(i,{code:Oe.invalid_type,expected:Xe.object,received:i.parsedType}),gt;const n=[],s=this._def.keyType,a=this._def.valueType;for(const o in i.data)n.push({key:s._parse(new en(i,o,i.path,o)),value:a._parse(new en(i,i.data[o],i.path,o)),alwaysSet:o in i.data});return i.common.async?zr.mergeObjectAsync(t,n):zr.mergeObjectSync(t,n)}get element(){return this._def.valueType}static create(e,t,i){return t instanceof Bt?new Lo({keyType:e,valueType:t,typeName:lt.ZodRecord,...vt(i)}):new Lo({keyType:Ri.create(),valueType:e,typeName:lt.ZodRecord,...vt(t)})}}class Rc extends Bt{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Xe.map)return ze(i,{code:Oe.invalid_type,expected:Xe.map,received:i.parsedType}),gt;const n=this._def.keyType,s=this._def.valueType,a=[...i.data.entries()].map(([o,A],c)=>({key:n._parse(new en(i,o,i.path,[c,"key"])),value:s._parse(new en(i,A,i.path,[c,"value"]))}));if(i.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const A of a){const c=await A.key,l=await A.value;if(c.status==="aborted"||l.status==="aborted")return gt;(c.status==="dirty"||l.status==="dirty")&&t.dirty(),o.set(c.value,l.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const A of a){const c=A.key,l=A.value;if(c.status==="aborted"||l.status==="aborted")return gt;(c.status==="dirty"||l.status==="dirty")&&t.dirty(),o.set(c.value,l.value)}return{status:t.value,value:o}}}}Rc.create=(r,e,t)=>new Rc({valueType:e,keyType:r,typeName:lt.ZodMap,...vt(t)});class Hs extends Bt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Xe.set)return ze(i,{code:Oe.invalid_type,expected:Xe.set,received:i.parsedType}),gt;const n=this._def;n.minSize!==null&&i.data.size<n.minSize.value&&(ze(i,{code:Oe.too_small,minimum:n.minSize.value,type:"set",inclusive:!0,exact:!1,message:n.minSize.message}),t.dirty()),n.maxSize!==null&&i.data.size>n.maxSize.value&&(ze(i,{code:Oe.too_big,maximum:n.maxSize.value,type:"set",inclusive:!0,exact:!1,message:n.maxSize.message}),t.dirty());const s=this._def.valueType;function a(A){const c=new Set;for(const l of A){if(l.status==="aborted")return gt;l.status==="dirty"&&t.dirty(),c.add(l.value)}return{status:t.value,value:c}}const o=[...i.data.values()].map((A,c)=>s._parse(new en(i,A,i.path,c)));return i.common.async?Promise.all(o).then(A=>a(A)):a(o)}min(e,t){return new Hs({...this._def,minSize:{value:e,message:et.toString(t)}})}max(e,t){return new Hs({...this._def,maxSize:{value:e,message:et.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Hs.create=(r,e)=>new Hs({valueType:r,minSize:null,maxSize:null,typeName:lt.ZodSet,...vt(e)});class ba extends Bt{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Xe.function)return ze(t,{code:Oe.invalid_type,expected:Xe.function,received:t.parsedType}),gt;function i(o,A){return bc({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,xc(),Pa].filter(c=>!!c),issueData:{code:Oe.invalid_arguments,argumentsError:A}})}function n(o,A){return bc({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,xc(),Pa].filter(c=>!!c),issueData:{code:Oe.invalid_return_type,returnTypeError:A}})}const s={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof Sa){const o=this;return Wr(async function(...A){const c=new pi([]),l=await o._def.args.parseAsync(A,s).catch(u=>{throw c.addIssue(i(A,u)),c}),h=await Reflect.apply(a,this,l);return await o._def.returns._def.type.parseAsync(h,s).catch(u=>{throw c.addIssue(n(h,u)),c})})}else{const o=this;return Wr(function(...A){const c=o._def.args.safeParse(A,s);if(!c.success)throw new pi([i(A,c.error)]);const l=Reflect.apply(a,this,c.data),h=o._def.returns.safeParse(l,s);if(!h.success)throw new pi([n(l,h.error)]);return h.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new ba({...this._def,args:tn.create(e).rest(Ts.create())})}returns(e){return new ba({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,i){return new ba({args:e||tn.create([]).rest(Ts.create()),returns:t||Ts.create(),typeName:lt.ZodFunction,...vt(i)})}}class Ro extends Bt{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Ro.create=(r,e)=>new Ro({getter:r,typeName:lt.ZodLazy,...vt(e)});class Fo extends Bt{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return ze(t,{received:t.data,code:Oe.invalid_literal,expected:this._def.value}),gt}return{status:"valid",value:e.data}}get value(){return this._def.value}}Fo.create=(r,e)=>new Fo({value:r,typeName:lt.ZodLiteral,...vt(e)});function $d(r,e){return new _n({values:r,typeName:lt.ZodEnum,...vt(e)})}class _n extends Bt{constructor(){super(...arguments),Qo.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),i=this._def.values;return ze(t,{expected:Qt.joinValues(i),received:t.parsedType,code:Oe.invalid_type}),gt}if(Tc(this,Qo)||Vd(this,Qo,new Set(this._def.values)),!Tc(this,Qo).has(e.data)){const t=this._getOrReturnCtx(e),i=this._def.values;return ze(t,{received:t.data,code:Oe.invalid_enum_value,options:i}),gt}return Wr(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return _n.create(e,{...this._def,...t})}exclude(e,t=this._def){return _n.create(this.options.filter(i=>!e.includes(i)),{...this._def,...t})}}Qo=new WeakMap,_n.create=$d;class ko extends Bt{constructor(){super(...arguments),xo.set(this,void 0)}_parse(e){const t=Qt.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==Xe.string&&i.parsedType!==Xe.number){const n=Qt.objectValues(t);return ze(i,{expected:Qt.joinValues(n),received:i.parsedType,code:Oe.invalid_type}),gt}if(Tc(this,xo)||Vd(this,xo,new Set(Qt.getValidEnumValues(this._def.values))),!Tc(this,xo).has(e.data)){const n=Qt.objectValues(t);return ze(i,{received:i.data,code:Oe.invalid_enum_value,options:n}),gt}return Wr(e.data)}get enum(){return this._def.values}}xo=new WeakMap,ko.create=(r,e)=>new ko({values:r,typeName:lt.ZodNativeEnum,...vt(e)});class Sa extends Bt{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Xe.promise&&t.common.async===!1)return ze(t,{code:Oe.invalid_type,expected:Xe.promise,received:t.parsedType}),gt;const i=t.parsedType===Xe.promise?t.data:Promise.resolve(t.data);return Wr(i.then(n=>this._def.type.parseAsync(n,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Sa.create=(r,e)=>new Sa({type:r,typeName:lt.ZodPromise,...vt(e)});class ki extends Bt{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===lt.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:i}=this._processInputParams(e),n=this._def.effect||null,s={addIssue:a=>{ze(i,a),a.fatal?t.abort():t.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),n.type==="preprocess"){const a=n.transform(i.data,s);if(i.common.async)return Promise.resolve(a).then(async o=>{if(t.value==="aborted")return gt;const A=await this._def.schema._parseAsync({data:o,path:i.path,parent:i});return A.status==="aborted"?gt:A.status==="dirty"||t.value==="dirty"?Sc(A.value):A});{if(t.value==="aborted")return gt;const o=this._def.schema._parseSync({data:a,path:i.path,parent:i});return o.status==="aborted"?gt:o.status==="dirty"||t.value==="dirty"?Sc(o.value):o}}if(n.type==="refinement"){const a=o=>{const A=n.refinement(o,s);if(i.common.async)return Promise.resolve(A);if(A instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(i.common.async===!1){const o=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?gt:(o.status==="dirty"&&t.dirty(),a(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(o=>o.status==="aborted"?gt:(o.status==="dirty"&&t.dirty(),a(o.value).then(()=>({status:t.value,value:o.value}))))}if(n.type==="transform")if(i.common.async===!1){const a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Mo(a))return a;const o=n.transform(a.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>Mo(a)?Promise.resolve(n.transform(a.value,s)).then(o=>({status:t.value,value:o})):a);Qt.assertNever(n)}}ki.create=(r,e,t)=>new ki({schema:r,typeName:lt.ZodEffects,effect:e,...vt(t)}),ki.createWithPreprocess=(r,e,t)=>new ki({schema:e,effect:{type:"preprocess",transform:r},typeName:lt.ZodEffects,...vt(t)});class rn extends Bt{_parse(e){return this._getType(e)===Xe.undefined?Wr(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}rn.create=(r,e)=>new rn({innerType:r,typeName:lt.ZodOptional,...vt(e)});class $n extends Bt{_parse(e){return this._getType(e)===Xe.null?Wr(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}$n.create=(r,e)=>new $n({innerType:r,typeName:lt.ZodNullable,...vt(e)});class Uo extends Bt{_parse(e){const{ctx:t}=this._processInputParams(e);let i=t.data;return t.parsedType===Xe.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Uo.create=(r,e)=>new Uo({innerType:r,typeName:lt.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...vt(e)});class Go extends Bt{_parse(e){const{ctx:t}=this._processInputParams(e),i={...t,common:{...t.common,issues:[]}},n=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Po(n)?n.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new pi(i.common.issues)},input:i.data})})):{status:"valid",value:n.status==="valid"?n.value:this._def.catchValue({get error(){return new pi(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Go.create=(r,e)=>new Go({innerType:r,typeName:lt.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...vt(e)});class Fc extends Bt{_parse(e){if(this._getType(e)!==Xe.nan){const t=this._getOrReturnCtx(e);return ze(t,{code:Oe.invalid_type,expected:Xe.nan,received:t.parsedType}),gt}return{status:"valid",value:e.data}}}Fc.create=r=>new Fc({typeName:lt.ZodNaN,...vt(r)});const iP=Symbol("zod_brand");class ku extends Bt{_parse(e){const{ctx:t}=this._processInputParams(e),i=t.data;return this._def.type._parse({data:i,path:t.path,parent:t})}unwrap(){return this._def.type}}class No extends Bt{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const n=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return n.status==="aborted"?gt:n.status==="dirty"?(t.dirty(),Sc(n.value)):this._def.out._parseAsync({data:n.value,path:i.path,parent:i})})();{const n=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return n.status==="aborted"?gt:n.status==="dirty"?(t.dirty(),{status:"dirty",value:n.value}):this._def.out._parseSync({data:n.value,path:i.path,parent:i})}}static create(e,t){return new No({in:e,out:t,typeName:lt.ZodPipeline})}}class zo extends Bt{_parse(e){const t=this._def.innerType._parse(e),i=n=>(Mo(n)&&(n.value=Object.freeze(n.value)),n);return Po(t)?t.then(n=>i(n)):i(t)}unwrap(){return this._def.innerType}}zo.create=(r,e)=>new zo({innerType:r,typeName:lt.ZodReadonly,...vt(e)});function ep(r,e={},t){return r?Qa.create().superRefine((i,n)=>{var s,a;if(!r(i)){const o=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,A=(a=(s=o.fatal)!==null&&s!==void 0?s:t)!==null&&a!==void 0?a:!0,c=typeof o=="string"?{message:o}:o;n.addIssue({code:"custom",...c,fatal:A})}}):Qa.create()}const nP={object:tr.lazycreate};var lt;(function(r){r.ZodString="ZodString",r.ZodNumber="ZodNumber",r.ZodNaN="ZodNaN",r.ZodBigInt="ZodBigInt",r.ZodBoolean="ZodBoolean",r.ZodDate="ZodDate",r.ZodSymbol="ZodSymbol",r.ZodUndefined="ZodUndefined",r.ZodNull="ZodNull",r.ZodAny="ZodAny",r.ZodUnknown="ZodUnknown",r.ZodNever="ZodNever",r.ZodVoid="ZodVoid",r.ZodArray="ZodArray",r.ZodObject="ZodObject",r.ZodUnion="ZodUnion",r.ZodDiscriminatedUnion="ZodDiscriminatedUnion",r.ZodIntersection="ZodIntersection",r.ZodTuple="ZodTuple",r.ZodRecord="ZodRecord",r.ZodMap="ZodMap",r.ZodSet="ZodSet",r.ZodFunction="ZodFunction",r.ZodLazy="ZodLazy",r.ZodLiteral="ZodLiteral",r.ZodEnum="ZodEnum",r.ZodEffects="ZodEffects",r.ZodNativeEnum="ZodNativeEnum",r.ZodOptional="ZodOptional",r.ZodNullable="ZodNullable",r.ZodDefault="ZodDefault",r.ZodCatch="ZodCatch",r.ZodPromise="ZodPromise",r.ZodBranded="ZodBranded",r.ZodPipeline="ZodPipeline",r.ZodReadonly="ZodReadonly"})(lt||(lt={}));const sP=(r,e={message:`Input not instance of ${r.name}`})=>ep(t=>t instanceof r,e),tp=Ri.create,rp=Wn.create,aP=Fc.create,oP=Zn.create,ip=bo.create,AP=Ss.create,cP=Hc.create,lP=So.create,hP=To.create,uP=Qa.create,gP=Ts.create,fP=In.create,dP=Oc.create,pP=Fi.create,wP=tr.create,vP=tr.strictCreate,mP=Ho.create,CP=Lc.create,BP=Oo.create,EP=tn.create,DP=Lo.create,yP=Rc.create,IP=Hs.create,MP=ba.create,PP=Ro.create,QP=Fo.create,xP=_n.create,bP=ko.create,SP=Sa.create,np=ki.create,TP=rn.create,HP=$n.create,OP=ki.createWithPreprocess,LP=No.create;var qe=Object.freeze({__proto__:null,defaultErrorMap:Pa,setErrorMap:GM,getErrorMap:xc,makeIssue:bc,EMPTY_PATH:NM,addIssueToContext:ze,ParseStatus:zr,INVALID:gt,DIRTY:Sc,OK:Wr,isAborted:Ou,isDirty:Lu,isValid:Mo,isAsync:Po,get util(){return Qt},get objectUtil(){return Hu},ZodParsedType:Xe,getParsedType:Vn,ZodType:Bt,datetimeRegex:_d,ZodString:Ri,ZodNumber:Wn,ZodBigInt:Zn,ZodBoolean:bo,ZodDate:Ss,ZodSymbol:Hc,ZodUndefined:So,ZodNull:To,ZodAny:Qa,ZodUnknown:Ts,ZodNever:In,ZodVoid:Oc,ZodArray:Fi,ZodObject:tr,ZodUnion:Ho,ZodDiscriminatedUnion:Lc,ZodIntersection:Oo,ZodTuple:tn,ZodRecord:Lo,ZodMap:Rc,ZodSet:Hs,ZodFunction:ba,ZodLazy:Ro,ZodLiteral:Fo,ZodEnum:_n,ZodNativeEnum:ko,ZodPromise:Sa,ZodEffects:ki,ZodTransformer:ki,ZodOptional:rn,ZodNullable:$n,ZodDefault:Uo,ZodCatch:Go,ZodNaN:Fc,BRAND:iP,ZodBranded:ku,ZodPipeline:No,ZodReadonly:zo,custom:ep,Schema:Bt,ZodSchema:Bt,late:nP,get ZodFirstPartyTypeKind(){return lt},coerce:{string:r=>Ri.create({...r,coerce:!0}),number:r=>Wn.create({...r,coerce:!0}),boolean:r=>bo.create({...r,coerce:!0}),bigint:r=>Zn.create({...r,coerce:!0}),date:r=>Ss.create({...r,coerce:!0})},any:uP,array:pP,bigint:oP,boolean:ip,date:AP,discriminatedUnion:CP,effect:np,enum:xP,function:MP,instanceof:sP,intersection:BP,lazy:PP,literal:QP,map:yP,nan:aP,nativeEnum:bP,never:fP,null:hP,nullable:HP,number:rp,object:wP,oboolean:()=>ip().optional(),onumber:()=>rp().optional(),optional:TP,ostring:()=>tp().optional(),pipeline:LP,preprocess:OP,promise:SP,record:DP,set:IP,strictObject:vP,string:tp,symbol:cP,transformer:np,tuple:EP,undefined:lP,union:mP,unknown:gP,void:dP,NEVER:gt,ZodIssueCode:Oe,quotelessJson:UM,ZodError:pi});const RP=["none","alien","crying","heart","bat","moon","coffee","dark_moon","lightning","panther","monkey","crab","snowman","doge"],kc=qe.enum(RP);qe.object({name:qe.string(),mass:qe.number(),skin:kc});const Uc=1,Os=150,sp=qe.object({row:qe.number(),column:qe.number()});class Uu{constructor(){this.activeBuckets=new Map}size(){let e=0;for(let t of this.activeBuckets.values())e+=t.size;return e}getOrCreateRow(e){const t=this.activeBuckets.get(e);if(t)return t;const i=new Set;return this.activeBuckets.set(e,i),i}iterBuckets(){const e=[];for(let t of this.activeBuckets.keys()){const i=this.activeBuckets.get(t);for(let n of i.values())e.push({row:t,column:n})}return e}add(e,t){this.getOrCreateRow(e).add(t)}has(e,t){const i=this.activeBuckets.get(e);return i?i.has(t):!1}remove(e,t){const i=this.activeBuckets.get(e);i&&i.delete(t)}}var ap={exports:{}},Gu={};Object.defineProperty(Gu,"__esModule",{value:!0});function Nu(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}function FP(r){if(Array.isArray(r))return Nu(r)}function kP(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function op(r,e){if(r){if(typeof r=="string")return Nu(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Nu(r,e)}}function UP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GP(r){return FP(r)||kP(r)||op(r)||UP()}function NP(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=op(r))||e){t&&(r=t);var i=0,n=function(){};return{s:n,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(A){throw A},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,a=!1,o;return{s:function(){t=t.call(r)},n:function(){var A=t.next();return s=A.done,A},e:function(A){a=!0,o=A},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(a)throw o}}}}function zP(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function YP(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Ap(r){var e=YP(r,"string");return typeof e=="symbol"?e:String(e)}function XP(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,Ap(i.key),i)}}function jP(r,e,t){return e&&XP(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function JP(r,e,t){return e=Ap(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var KP=function(){function r(){zP(this,r),JP(this,"subscribers",new Set)}return jP(r,[{key:"onSubscribe",get:function(){return this._onSubscribe||(this._onSubscribe=new r),this._onSubscribe}},{key:"onUnsubscribe",get:function(){return this._onUnsubscribe||(this._onUnsubscribe=new r),this._onUnsubscribe}},{key:"subscribe",value:function(e){var t,i=this;return this.subscribers.add(e),(t=this._onSubscribe)===null||t===void 0||t.emit(e),function(){return i.unsubscribe(e)}}},{key:"unsubscribe",value:function(e){var t;this.subscribers.delete(e),(t=this._onUnsubscribe)===null||t===void 0||t.emit(e)}},{key:"clear",value:function(){if(this._onUnsubscribe){var e=NP(this.subscribers),t;try{for(e.s();!(t=e.n()).done;){var i=t.value;this._onUnsubscribe.emit(i)}}catch(n){e.e(n)}finally{e.f()}}this.subscribers.clear()}},{key:"emit",value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];this.subscribers.forEach(function(n){return n.apply(void 0,t)})}},{key:"emitAsync",value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return Promise.all(GP(this.subscribers).map(function(n){return n.apply(void 0,t)}))}}]),r}();Gu.Event=KP,ap.exports=Gu;var cp=ap.exports;function lp(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}function VP(r,e){if(r){if(typeof r=="string")return lp(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return lp(r,e)}}function WP(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=VP(r))||e){t&&(r=t);var i=0,n=function(){};return{s:n,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(A){throw A},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,a=!1,o;return{s:function(){t=t.call(r)},n:function(){var A=t.next();return s=A.done,A},e:function(A){a=!0,o=A},f:function(){try{!s&&t.return!=null&&t.return()}finally{if(a)throw o}}}}function ZP(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function qP(r,e){if(typeof r!="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var i=t.call(r,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function hp(r){var e=qP(r,"string");return typeof e=="symbol"?e:String(e)}function _P(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,hp(i.key),i)}}function $P(r,e,t){return e&&_P(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function Gc(r,e,t){return e=hp(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var up;up=Symbol.iterator;var gp=function(){function r(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];ZP(this,r),Gc(this,"_version",0),Gc(this,"onEntityAdded",new cp.Event),Gc(this,"onEntityRemoved",new cp.Event),Gc(this,"entityPositions",new Map),this._entities=e,this.add=this.add.bind(this),this.remove=this.remove.bind(this);for(var t=0;t<e.length;t++)this.entityPositions.set(e[t],t)}return $P(r,[{key:"version",get:function(){return this._version}},{key:"entities",get:function(){return this._entities}},{key:up,value:function(){var e=this,t=this._entities.length,i={value:void 0,done:!1};return{next:function(){return i.value=e._entities[--t],i.done=t<0,i}}}},{key:"size",get:function(){return this.entities.length}},{key:"first",get:function(){return this.entities[0]}},{key:"has",value:function(e){return this.entityPositions.has(e)}},{key:"add",value:function(e){return e&&!this.has(e)&&(this.entities.push(e),this.entityPositions.set(e,this.entities.length-1),this._version++,this.onEntityAdded.emit(e)),e}},{key:"remove",value:function(e){if(this.has(e)){this.onEntityRemoved.emit(e);var t=this.entityPositions.get(e);this.entityPositions.delete(e);var i=this.entities[this.entities.length-1];i!==e&&(this.entities[t]=i,this.entityPositions.set(i,t)),this.entities.pop(),this._version++}return e}},{key:"clear",value:function(){var e=WP(this),t;try{for(e.s();!(t=e.n()).done;){var i=t.value;this.remove(i)}}catch(n){e.e(n)}finally{e.f()}}}]),r}(),fp=new WeakMap,dp=0,eQ=function(r){var e=fp.get(r);return e!==void 0?e:(fp.set(r,dp),dp++)};function tQ(){var r=new Array;function e(n){r.push(n)}function t(){r.length=0}function i(){r.forEach(function(n){return n()}),t()}return e.clear=t,e.flush=i,e}function zu(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}function rQ(r){if(Array.isArray(r))return zu(r)}function iQ(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function pp(r,e){if(r){if(typeof r=="string")return zu(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return zu(r,e)}}function nQ(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yo(r){return rQ(r)||iQ(r)||pp(r)||nQ()}function Ls(r){return Ls=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ls(r)}function sQ(r,e){for(;!Object.prototype.hasOwnProperty.call(r,e)&&(r=Ls(r),r!==null););return r}function Xo(){return typeof Reflect<"u"&&Reflect.get?Xo=Reflect.get.bind():Xo=function(r,e,t){var i=sQ(r,e);if(i){var n=Object.getOwnPropertyDescriptor(i,e);return n.get?n.get.call(arguments.length<3?r:t):n.value}},Xo.apply(this,arguments)}function Yu(r,e){var t=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=pp(r))||e){t&&(r=t);var i=0,n=function(){};return{s:n,n:function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}},e:function(A){throw A},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.

troikaDefine(
`+s+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(A){console.error(A)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var s=n.data,a=s.messageId,o=s.action,A=s.data;try{o==="registerModule"&&e(A,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(A,function(c,l){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},l||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function A4(r){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=r.dependencies,i=r.init;t=Array.isArray(t)?t.map(function(s){return s&&s._getInitResult?s._getInitResult():s}):[];var n=Promise.all(t).then(function(s){return i.apply(null,s)});return e._getInitResult=function(){return n},n},e}var Hw=function(){var r=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),r=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Hw=function(){return r},r},c4=0,l4=0,hg=!1,oA=Object.create(null),AA=Object.create(null),ug=Object.create(null);function Ya(r){if((!r||typeof r.init!="function")&&!hg)throw new Error("requires `options.init` function");var e=r.dependencies,t=r.init,i=r.getTransferables,n=r.workerId;if(!Hw())return A4(r);n==null&&(n="#default");var s="workerModule"+ ++c4,a=r.name||s,o=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(hg=!0,c=Ya({workerId:n,name:"<"+a+"> function dependency: "+c.name,init:`function(){return (
`+tl(c)+`
)}`}),hg=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function A(){for(var c=[],l=arguments.length;l--;)c[l]=arguments[l];if(!o){o=Ow(n,"registerModule",A.workerModuleData);var h=function(){o=null,AA[n].delete(h)};(AA[n]||(AA[n]=new Set)).add(h)}return o.then(function(u){var g=u.isCallable;if(g)return Ow(n,"callModule",{id:s,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return A.workerModuleData={isWorkerModule:!0,id:s,name:a,dependencies:e,init:tl(t),getTransferables:i&&tl(i)},A}function h4(r){AA[r]&&AA[r].forEach(function(e){e()}),oA[r]&&(oA[r].terminate(),delete oA[r])}function tl(r){var e=r.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function u4(r){var e=oA[r];if(!e){var t=tl(o4);e=oA[r]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+r.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,s=n.messageId,a=ug[s];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete ug[s],a(n)}}return e}function Ow(r,e,t){return new Promise(function(i,n){var s=++l4;ug[s]=function(a){a.success?i(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},u4(r).postMessage({messageId:s,action:e,data:t})})}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function g4(){return typeof window>"u"&&(self.window=self),function(r){var e={parse:function(n){var s=e._bin,a=new Uint8Array(n);if(s.readASCII(a,0,4)=="ttcf"){var o=4;s.readUshort(a,o),o+=2,s.readUshort(a,o),o+=2;var A=s.readUint(a,o);o+=4;for(var c=[],l=0;l<A;l++){var h=s.readUint(a,o);o+=4,c.push(e._readFont(a,h))}return c}return[e._readFont(a,0)]},_readFont:function(n,s){var a=e._bin,o=s;a.readFixed(n,s),s+=4;var A=a.readUshort(n,s);s+=2,a.readUshort(n,s),s+=2,a.readUshort(n,s),s+=2,a.readUshort(n,s),s+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],l={_data:n,_offset:o},h={},u=0;u<A;u++){var g=a.readASCII(n,s,4);s+=4,a.readUint(n,s),s+=4;var p=a.readUint(n,s);s+=4;var w=a.readUint(n,s);s+=4,h[g]={offset:p,length:w}}for(u=0;u<c.length;u++){var f=c[u];h[f]&&(l[f.trim()]=e[f.trim()].parse(n,h[f].offset,h[f].length,l))}return l},_tabOffset:function(n,s,a){for(var o=e._bin,A=o.readUshort(n,a+4),c=a+12,l=0;l<A;l++){var h=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var u=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,h==s)return u}return 0}};e._bin={readFixed:function(n,s){return(n[s]<<8|n[s+1])+(n[s+2]<<8|n[s+3])/65540},readF2dot14:function(n,s){return e._bin.readShort(n,s)/16384},readInt:function(n,s){return e._bin._view(n).getInt32(s)},readInt8:function(n,s){return e._bin._view(n).getInt8(s)},readShort:function(n,s){return e._bin._view(n).getInt16(s)},readUshort:function(n,s){return e._bin._view(n).getUint16(s)},readUshorts:function(n,s,a){for(var o=[],A=0;A<a;A++)o.push(e._bin.readUshort(n,s+2*A));return o},readUint:function(n,s){return e._bin._view(n).getUint32(s)},readUint64:function(n,s){return 4294967296*e._bin.readUint(n,s)+e._bin.readUint(n,s+4)},readASCII:function(n,s,a){for(var o="",A=0;A<a;A++)o+=String.fromCharCode(n[s+A]);return o},readUnicode:function(n,s,a){for(var o="",A=0;A<a;A++){var c=n[s++]<<8|n[s++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,s,a){var o=e._bin._tdec;return o&&s==0&&a==n.length?o.decode(n):e._bin.readASCII(n,s,a)},readBytes:function(n,s,a){for(var o=[],A=0;A<a;A++)o.push(n[s+A]);return o},readASCIIArray:function(n,s,a){for(var o=[],A=0;A<a;A++)o.push(String.fromCharCode(n[s+A]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,s,a,o,A){var c=e._bin,l={},h=s;c.readFixed(n,s),s+=4;var u=c.readUshort(n,s);s+=2;var g=c.readUshort(n,s);s+=2;var p=c.readUshort(n,s);return s+=2,l.scriptList=e._lctf.readScriptList(n,h+u),l.featureList=e._lctf.readFeatureList(n,h+g),l.lookupList=e._lctf.readLookupList(n,h+p,A),l},e._lctf.readLookupList=function(n,s,a){var o=e._bin,A=s,c=[],l=o.readUshort(n,s);s+=2;for(var h=0;h<l;h++){var u=o.readUshort(n,s);s+=2;var g=e._lctf.readLookupTable(n,A+u,a);c.push(g)}return c},e._lctf.readLookupTable=function(n,s,a){var o=e._bin,A=s,c={tabs:[]};c.ltype=o.readUshort(n,s),s+=2,c.flag=o.readUshort(n,s),s+=2;var l=o.readUshort(n,s);s+=2;for(var h=c.ltype,u=0;u<l;u++){var g=o.readUshort(n,s);s+=2;var p=a(n,h,A+g,c);c.tabs.push(p)}return c},e._lctf.numOfOnes=function(n){for(var s=0,a=0;a<32;a++)n>>>a&1&&s++;return s},e._lctf.readClassDef=function(n,s){var a=e._bin,o=[],A=a.readUshort(n,s);if(s+=2,A==1){var c=a.readUshort(n,s);s+=2;var l=a.readUshort(n,s);s+=2;for(var h=0;h<l;h++)o.push(c+h),o.push(c+h),o.push(a.readUshort(n,s)),s+=2}if(A==2){var u=a.readUshort(n,s);for(s+=2,h=0;h<u;h++)o.push(a.readUshort(n,s)),s+=2,o.push(a.readUshort(n,s)),s+=2,o.push(a.readUshort(n,s)),s+=2}return o},e._lctf.getInterval=function(n,s){for(var a=0;a<n.length;a+=3){var o=n[a],A=n[a+1];if(n[a+2],o<=s&&s<=A)return a}return-1},e._lctf.readCoverage=function(n,s){var a=e._bin,o={};o.fmt=a.readUshort(n,s),s+=2;var A=a.readUshort(n,s);return s+=2,o.fmt==1&&(o.tab=a.readUshorts(n,s,A)),o.fmt==2&&(o.tab=a.readUshorts(n,s,3*A)),o},e._lctf.coverageIndex=function(n,s){var a=n.tab;if(n.fmt==1)return a.indexOf(s);if(n.fmt==2){var o=e._lctf.getInterval(a,s);if(o!=-1)return a[o+2]+(s-a[o])}return-1},e._lctf.readFeatureList=function(n,s){var a=e._bin,o=s,A=[],c=a.readUshort(n,s);s+=2;for(var l=0;l<c;l++){var h=a.readASCII(n,s,4);s+=4;var u=a.readUshort(n,s);s+=2;var g=e._lctf.readFeatureTable(n,o+u);g.tag=h.trim(),A.push(g)}return A},e._lctf.readFeatureTable=function(n,s){var a=e._bin,o=s,A={},c=a.readUshort(n,s);s+=2,c>0&&(A.featureParams=o+c);var l=a.readUshort(n,s);s+=2,A.tab=[];for(var h=0;h<l;h++)A.tab.push(a.readUshort(n,s+2*h));return A},e._lctf.readScriptList=function(n,s){var a=e._bin,o=s,A={},c=a.readUshort(n,s);s+=2;for(var l=0;l<c;l++){var h=a.readASCII(n,s,4);s+=4;var u=a.readUshort(n,s);s+=2,A[h.trim()]=e._lctf.readScriptTable(n,o+u)}return A},e._lctf.readScriptTable=function(n,s){var a=e._bin,o=s,A={},c=a.readUshort(n,s);s+=2,c>0&&(A.default=e._lctf.readLangSysTable(n,o+c));var l=a.readUshort(n,s);s+=2;for(var h=0;h<l;h++){var u=a.readASCII(n,s,4);s+=4;var g=a.readUshort(n,s);s+=2,A[u.trim()]=e._lctf.readLangSysTable(n,o+g)}return A},e._lctf.readLangSysTable=function(n,s){var a=e._bin,o={};a.readUshort(n,s),s+=2,o.reqFeature=a.readUshort(n,s),s+=2;var A=a.readUshort(n,s);return s+=2,o.features=a.readUshorts(n,s,A),o},e.CFF={},e.CFF.parse=function(n,s,a){var o=e._bin;(n=new Uint8Array(n.buffer,s,a))[s=0],n[++s],n[++s],n[++s],s++;var A=[];s=e.CFF.readIndex(n,s,A);for(var c=[],l=0;l<A.length-1;l++)c.push(o.readASCII(n,s+A[l],A[l+1]-A[l]));s+=A[A.length-1];var h=[];s=e.CFF.readIndex(n,s,h);var u=[];for(l=0;l<h.length-1;l++)u.push(e.CFF.readDict(n,s+h[l],s+h[l+1]));s+=h[h.length-1];var g=u[0],p=[];s=e.CFF.readIndex(n,s,p);var w=[];for(l=0;l<p.length-1;l++)w.push(o.readASCII(n,s+p[l],p[l+1]-p[l]));if(s+=p[p.length-1],e.CFF.readSubrs(n,s,g),g.CharStrings){s=g.CharStrings,p=[],s=e.CFF.readIndex(n,s,p);var f=[];for(l=0;l<p.length-1;l++)f.push(o.readBytes(n,s+p[l],p[l+1]-p[l]));g.CharStrings=f}if(g.ROS){s=g.FDArray;var d=[];for(s=e.CFF.readIndex(n,s,d),g.FDArray=[],l=0;l<d.length-1;l++){var D=e.CFF.readDict(n,s+d[l],s+d[l+1]);e.CFF._readFDict(n,D,w),g.FDArray.push(D)}s+=d[d.length-1],s=g.FDSelect,g.FDSelect=[];var m=n[s];if(s++,m!=3)throw m;var C=o.readUshort(n,s);for(s+=2,l=0;l<C+1;l++)g.FDSelect.push(o.readUshort(n,s),n[s+2]),s+=3}return g.Encoding&&(g.Encoding=e.CFF.readEncoding(n,g.Encoding,g.CharStrings.length)),g.charset&&(g.charset=e.CFF.readCharset(n,g.charset,g.CharStrings.length)),e.CFF._readFDict(n,g,w),g},e.CFF._readFDict=function(n,s,a){var o;for(var A in s.Private&&(o=s.Private[1],s.Private=e.CFF.readDict(n,o,o+s.Private[0]),s.Private.Subrs&&e.CFF.readSubrs(n,o+s.Private.Subrs,s.Private)),s)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(A)!=-1&&(s[A]=a[s[A]-426+35])},e.CFF.readSubrs=function(n,s,a){var o=e._bin,A=[];s=e.CFF.readIndex(n,s,A);var c,l=A.length;c=l<1240?107:l<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var h=0;h<A.length-1;h++)a.Subrs.push(o.readBytes(n,s+A[h],A[h+1]-A[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,s){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==s)return a;return-1},e.CFF.glyphBySE=function(n,s){return s<0||s>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[s])},e.CFF.readEncoding=function(n,s,a){e._bin;var o=[".notdef"],A=n[s];if(s++,A!=0)throw"error: unknown encoding format: "+A;var c=n[s];s++;for(var l=0;l<c;l++)o.push(n[s+l]);return o},e.CFF.readCharset=function(n,s,a){var o=e._bin,A=[".notdef"],c=n[s];if(s++,c==0)for(var l=0;l<a;l++){var h=o.readUshort(n,s);s+=2,A.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;A.length<a;){h=o.readUshort(n,s),s+=2;var u=0;for(c==1?(u=n[s],s++):(u=o.readUshort(n,s),s+=2),l=0;l<=u;l++)A.push(h),h++}}return A},e.CFF.readIndex=function(n,s,a){var o=e._bin,A=o.readUshort(n,s)+1,c=n[s+=2];if(s++,c==1)for(var l=0;l<A;l++)a.push(n[s+l]);else if(c==2)for(l=0;l<A;l++)a.push(o.readUshort(n,s+2*l));else if(c==3)for(l=0;l<A;l++)a.push(16777215&o.readUint(n,s+3*l-1));else if(A!=1)throw"unsupported offset size: "+c+", count: "+A;return(s+=A*c)-1},e.CFF.getCharString=function(n,s,a){var o=e._bin,A=n[s],c=n[s+1];n[s+2],n[s+3],n[s+4];var l=1,h=null,u=null;A<=20&&(h=A,l=1),A==12&&(h=100*A+c,l=2),21<=A&&A<=27&&(h=A,l=1),A==28&&(u=o.readShort(n,s+1),l=3),29<=A&&A<=31&&(h=A,l=1),32<=A&&A<=246&&(u=A-139,l=1),247<=A&&A<=250&&(u=256*(A-247)+c+108,l=2),251<=A&&A<=254&&(u=256*-(A-251)-c-108,l=2),A==255&&(u=o.readInt(n,s+1)/65535,l=5),a.val=u??"o"+h,a.size=l},e.CFF.readCharString=function(n,s,a){for(var o=s+a,A=e._bin,c=[];s<o;){var l=n[s],h=n[s+1];n[s+2],n[s+3],n[s+4];var u=1,g=null,p=null;l<=20&&(g=l,u=1),l==12&&(g=100*l+h,u=2),l!=19&&l!=20||(g=l,u=2),21<=l&&l<=27&&(g=l,u=1),l==28&&(p=A.readShort(n,s+1),u=3),29<=l&&l<=31&&(g=l,u=1),32<=l&&l<=246&&(p=l-139,u=1),247<=l&&l<=250&&(p=256*(l-247)+h+108,u=2),251<=l&&l<=254&&(p=256*-(l-251)-h-108,u=2),l==255&&(p=A.readInt(n,s+1)/65535,u=5),c.push(p??"o"+g),s+=u}return c},e.CFF.readDict=function(n,s,a){for(var o=e._bin,A={},c=[];s<a;){var l=n[s],h=n[s+1];n[s+2],n[s+3],n[s+4];var u=1,g=null,p=null;if(l==28&&(p=o.readShort(n,s+1),u=3),l==29&&(p=o.readInt(n,s+1),u=5),32<=l&&l<=246&&(p=l-139,u=1),247<=l&&l<=250&&(p=256*(l-247)+h+108,u=2),251<=l&&l<=254&&(p=256*-(l-251)-h-108,u=2),l==255)throw p=o.readInt(n,s+1)/65535,u=5,"unknown number";if(l==30){var w=[];for(u=1;;){var f=n[s+u];u++;var d=f>>4,D=15&f;if(d!=15&&w.push(d),D!=15&&w.push(D),D==15)break}for(var m="",C=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],S=0;S<w.length;S++)m+=C[w[S]];p=parseFloat(m)}l<=21&&(g=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][l],u=1,l==12&&(g=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],u=2)),g!=null?(A[g]=c.length==1?c[0]:c,c=[]):c.push(p),s+=u}return A},e.cmap={},e.cmap.parse=function(n,s,a){n=new Uint8Array(n.buffer,s,a),s=0;var o=e._bin,A={};o.readUshort(n,s),s+=2;var c=o.readUshort(n,s);s+=2;var l=[];A.tables=[];for(var h=0;h<c;h++){var u=o.readUshort(n,s);s+=2;var g=o.readUshort(n,s);s+=2;var p=o.readUint(n,s);s+=4;var w="p"+u+"e"+g,f=l.indexOf(p);if(f==-1){var d;f=A.tables.length,l.push(p);var D=o.readUshort(n,p);D==0?d=e.cmap.parse0(n,p):D==4?d=e.cmap.parse4(n,p):D==6?d=e.cmap.parse6(n,p):D==12?d=e.cmap.parse12(n,p):console.debug("unknown format: "+D,u,g,p),A.tables.push(d)}if(A[w]!=null)throw"multiple tables for one platform+encoding";A[w]=f}return A},e.cmap.parse0=function(n,s){var a=e._bin,o={};o.format=a.readUshort(n,s),s+=2;var A=a.readUshort(n,s);s+=2,a.readUshort(n,s),s+=2,o.map=[];for(var c=0;c<A-6;c++)o.map.push(n[s+c]);return o},e.cmap.parse4=function(n,s){var a=e._bin,o=s,A={};A.format=a.readUshort(n,s),s+=2;var c=a.readUshort(n,s);s+=2,a.readUshort(n,s),s+=2;var l=a.readUshort(n,s);s+=2;var h=l/2;A.searchRange=a.readUshort(n,s),s+=2,A.entrySelector=a.readUshort(n,s),s+=2,A.rangeShift=a.readUshort(n,s),s+=2,A.endCount=a.readUshorts(n,s,h),s+=2*h,s+=2,A.startCount=a.readUshorts(n,s,h),s+=2*h,A.idDelta=[];for(var u=0;u<h;u++)A.idDelta.push(a.readShort(n,s)),s+=2;for(A.idRangeOffset=a.readUshorts(n,s,h),s+=2*h,A.glyphIdArray=[];s<o+c;)A.glyphIdArray.push(a.readUshort(n,s)),s+=2;return A},e.cmap.parse6=function(n,s){var a=e._bin,o={};o.format=a.readUshort(n,s),s+=2,a.readUshort(n,s),s+=2,a.readUshort(n,s),s+=2,o.firstCode=a.readUshort(n,s),s+=2;var A=a.readUshort(n,s);s+=2,o.glyphIdArray=[];for(var c=0;c<A;c++)o.glyphIdArray.push(a.readUshort(n,s)),s+=2;return o},e.cmap.parse12=function(n,s){var a=e._bin,o={};o.format=a.readUshort(n,s),s+=2,s+=2,a.readUint(n,s),s+=4,a.readUint(n,s),s+=4;var A=a.readUint(n,s);s+=4,o.groups=[];for(var c=0;c<A;c++){var l=s+12*c,h=a.readUint(n,l+0),u=a.readUint(n,l+4),g=a.readUint(n,l+8);o.groups.push([h,u,g])}return o},e.glyf={},e.glyf.parse=function(n,s,a,o){for(var A=[],c=0;c<o.maxp.numGlyphs;c++)A.push(null);return A},e.glyf._parseGlyf=function(n,s){var a=e._bin,o=n._data,A=e._tabOffset(o,"glyf",n._offset)+n.loca[s];if(n.loca[s]==n.loca[s+1])return null;var c={};if(c.noc=a.readShort(o,A),A+=2,c.xMin=a.readShort(o,A),A+=2,c.yMin=a.readShort(o,A),A+=2,c.xMax=a.readShort(o,A),A+=2,c.yMax=a.readShort(o,A),A+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var l=0;l<c.noc;l++)c.endPts.push(a.readUshort(o,A)),A+=2;var h=a.readUshort(o,A);if(A+=2,o.length-A<h)return null;c.instructions=a.readBytes(o,A,h),A+=h;var u=c.endPts[c.noc-1]+1;for(c.flags=[],l=0;l<u;l++){var g=o[A];if(A++,c.flags.push(g),(8&g)!=0){var p=o[A];A++;for(var w=0;w<p;w++)c.flags.push(g),l++}}for(c.xs=[],l=0;l<u;l++){var f=(2&c.flags[l])!=0,d=(16&c.flags[l])!=0;f?(c.xs.push(d?o[A]:-o[A]),A++):d?c.xs.push(0):(c.xs.push(a.readShort(o,A)),A+=2)}for(c.ys=[],l=0;l<u;l++)f=(4&c.flags[l])!=0,d=(32&c.flags[l])!=0,f?(c.ys.push(d?o[A]:-o[A]),A++):d?c.ys.push(0):(c.ys.push(a.readShort(o,A)),A+=2);var D=0,m=0;for(l=0;l<u;l++)D+=c.xs[l],m+=c.ys[l],c.xs[l]=D,c.ys[l]=m}else{var C;c.parts=[];do{C=a.readUshort(o,A),A+=2;var S={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(S),S.glyphIndex=a.readUshort(o,A),A+=2,1&C){var P=a.readShort(o,A);A+=2;var I=a.readShort(o,A);A+=2}else P=a.readInt8(o,A),A++,I=a.readInt8(o,A),A++;2&C?(S.m.tx=P,S.m.ty=I):(S.p1=P,S.p2=I),8&C?(S.m.a=S.m.d=a.readF2dot14(o,A),A+=2):64&C?(S.m.a=a.readF2dot14(o,A),A+=2,S.m.d=a.readF2dot14(o,A),A+=2):128&C&&(S.m.a=a.readF2dot14(o,A),A+=2,S.m.b=a.readF2dot14(o,A),A+=2,S.m.c=a.readF2dot14(o,A),A+=2,S.m.d=a.readF2dot14(o,A),A+=2)}while(32&C);if(256&C){var O=a.readUshort(o,A);for(A+=2,c.instr=[],l=0;l<O;l++)c.instr.push(o[A]),A++}}return c},e.GDEF={},e.GDEF.parse=function(n,s,a,o){var A=s;s+=4;var c=e._bin.readUshort(n,s);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,A+c)}},e.GPOS={},e.GPOS.parse=function(n,s,a,o){return e._lctf.parse(n,s,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,s,a,o){var A=e._bin,c=a,l={};if(l.fmt=A.readUshort(n,a),a+=2,s==1||s==2||s==3||s==7||s==8&&l.fmt<=2){var h=A.readUshort(n,a);a+=2,l.coverage=e._lctf.readCoverage(n,h+c)}if(s==1&&l.fmt==1){var u=A.readUshort(n,a);a+=2,u!=0&&(l.pos=e.GPOS.readValueRecord(n,a,u))}else if(s==2&&l.fmt>=1&&l.fmt<=2){u=A.readUshort(n,a),a+=2;var g=A.readUshort(n,a);a+=2;var p=e._lctf.numOfOnes(u),w=e._lctf.numOfOnes(g);if(l.fmt==1){l.pairsets=[];var f=A.readUshort(n,a);a+=2;for(var d=0;d<f;d++){var D=c+A.readUshort(n,a);a+=2;var m=A.readUshort(n,D);D+=2;for(var C=[],S=0;S<m;S++){var P=A.readUshort(n,D);D+=2,u!=0&&(H=e.GPOS.readValueRecord(n,D,u),D+=2*p),g!=0&&(y=e.GPOS.readValueRecord(n,D,g),D+=2*w),C.push({gid2:P,val1:H,val2:y})}l.pairsets.push(C)}}if(l.fmt==2){var I=A.readUshort(n,a);a+=2;var O=A.readUshort(n,a);a+=2;var z=A.readUshort(n,a);a+=2;var v=A.readUshort(n,a);for(a+=2,l.classDef1=e._lctf.readClassDef(n,c+I),l.classDef2=e._lctf.readClassDef(n,c+O),l.matrix=[],d=0;d<z;d++){var M=[];for(S=0;S<v;S++){var H=null,y=null;u!=0&&(H=e.GPOS.readValueRecord(n,a,u),a+=2*p),g!=0&&(y=e.GPOS.readValueRecord(n,a,g),a+=2*w),M.push({val1:H,val2:y})}l.matrix.push(M)}}}else if(s==4&&l.fmt==1)l.markCoverage=e._lctf.readCoverage(n,A.readUshort(n,a)+c),l.baseCoverage=e._lctf.readCoverage(n,A.readUshort(n,a+2)+c),l.markClassCount=A.readUshort(n,a+4),l.markArray=e.GPOS.readMarkArray(n,A.readUshort(n,a+6)+c),l.baseArray=e.GPOS.readBaseArray(n,A.readUshort(n,a+8)+c,l.markClassCount);else if(s==6&&l.fmt==1)l.mark1Coverage=e._lctf.readCoverage(n,A.readUshort(n,a)+c),l.mark2Coverage=e._lctf.readCoverage(n,A.readUshort(n,a+2)+c),l.markClassCount=A.readUshort(n,a+4),l.mark1Array=e.GPOS.readMarkArray(n,A.readUshort(n,a+6)+c),l.mark2Array=e.GPOS.readBaseArray(n,A.readUshort(n,a+8)+c,l.markClassCount);else{if(s==9&&l.fmt==1){var x=A.readUshort(n,a);a+=2;var R=A.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=x;else if(o.ltype!=x)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+R)}console.debug("unsupported GPOS table LookupType",s,"format",l.fmt)}return l},e.GPOS.readValueRecord=function(n,s,a){var o=e._bin,A=[];return A.push(1&a?o.readShort(n,s):0),s+=1&a?2:0,A.push(2&a?o.readShort(n,s):0),s+=2&a?2:0,A.push(4&a?o.readShort(n,s):0),s+=4&a?2:0,A.push(8&a?o.readShort(n,s):0),s+=8&a?2:0,A},e.GPOS.readBaseArray=function(n,s,a){var o=e._bin,A=[],c=s,l=o.readUshort(n,s);s+=2;for(var h=0;h<l;h++){for(var u=[],g=0;g<a;g++)u.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,s))),s+=2;A.push(u)}return A},e.GPOS.readMarkArray=function(n,s){var a=e._bin,o=[],A=s,c=a.readUshort(n,s);s+=2;for(var l=0;l<c;l++){var h=e.GPOS.readAnchorRecord(n,a.readUshort(n,s+2)+A);h.markClass=a.readUshort(n,s),o.push(h),s+=4}return o},e.GPOS.readAnchorRecord=function(n,s){var a=e._bin,o={};return o.fmt=a.readUshort(n,s),o.x=a.readShort(n,s+2),o.y=a.readShort(n,s+4),o},e.GSUB={},e.GSUB.parse=function(n,s,a,o){return e._lctf.parse(n,s,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,s,a,o){var A=e._bin,c=a,l={};if(l.fmt=A.readUshort(n,a),a+=2,s!=1&&s!=2&&s!=4&&s!=5&&s!=6)return null;if(s==1||s==2||s==4||s==5&&l.fmt<=2||s==6&&l.fmt<=2){var h=A.readUshort(n,a);a+=2,l.coverage=e._lctf.readCoverage(n,c+h)}if(s==1&&l.fmt>=1&&l.fmt<=2){if(l.fmt==1)l.delta=A.readShort(n,a),a+=2;else if(l.fmt==2){var u=A.readUshort(n,a);a+=2,l.newg=A.readUshorts(n,a,u),a+=2*l.newg.length}}else if(s==2&&l.fmt==1){u=A.readUshort(n,a),a+=2,l.seqs=[];for(var g=0;g<u;g++){var p=A.readUshort(n,a)+c;a+=2;var w=A.readUshort(n,p);l.seqs.push(A.readUshorts(n,p+2,w))}}else if(s==4)for(l.vals=[],u=A.readUshort(n,a),a+=2,g=0;g<u;g++){var f=A.readUshort(n,a);a+=2,l.vals.push(e.GSUB.readLigatureSet(n,c+f))}else if(s==5&&l.fmt==2){if(l.fmt==2){var d=A.readUshort(n,a);a+=2,l.cDef=e._lctf.readClassDef(n,c+d),l.scset=[];var D=A.readUshort(n,a);for(a+=2,g=0;g<D;g++){var m=A.readUshort(n,a);a+=2,l.scset.push(m==0?null:e.GSUB.readSubClassSet(n,c+m))}}}else if(s==6&&l.fmt==3){if(l.fmt==3){for(g=0;g<3;g++){u=A.readUshort(n,a),a+=2;for(var C=[],S=0;S<u;S++)C.push(e._lctf.readCoverage(n,c+A.readUshort(n,a+2*S)));a+=2*u,g==0&&(l.backCvg=C),g==1&&(l.inptCvg=C),g==2&&(l.ahedCvg=C)}u=A.readUshort(n,a),a+=2,l.lookupRec=e.GSUB.readSubstLookupRecords(n,a,u)}}else{if(s==7&&l.fmt==1){var P=A.readUshort(n,a);a+=2;var I=A.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=P;else if(o.ltype!=P)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+I)}console.debug("unsupported GSUB table LookupType",s,"format",l.fmt)}return l},e.GSUB.readSubClassSet=function(n,s){var a=e._bin.readUshort,o=s,A=[],c=a(n,s);s+=2;for(var l=0;l<c;l++){var h=a(n,s);s+=2,A.push(e.GSUB.readSubClassRule(n,o+h))}return A},e.GSUB.readSubClassRule=function(n,s){var a=e._bin.readUshort,o={},A=a(n,s),c=a(n,s+=2);s+=2,o.input=[];for(var l=0;l<A-1;l++)o.input.push(a(n,s)),s+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,s,c),o},e.GSUB.readSubstLookupRecords=function(n,s,a){for(var o=e._bin.readUshort,A=[],c=0;c<a;c++)A.push(o(n,s),o(n,s+2)),s+=4;return A},e.GSUB.readChainSubClassSet=function(n,s){var a=e._bin,o=s,A=[],c=a.readUshort(n,s);s+=2;for(var l=0;l<c;l++){var h=a.readUshort(n,s);s+=2,A.push(e.GSUB.readChainSubClassRule(n,o+h))}return A},e.GSUB.readChainSubClassRule=function(n,s){for(var a=e._bin,o={},A=["backtrack","input","lookahead"],c=0;c<A.length;c++){var l=a.readUshort(n,s);s+=2,c==1&&l--,o[A[c]]=a.readUshorts(n,s,l),s+=2*o[A[c]].length}return l=a.readUshort(n,s),s+=2,o.subst=a.readUshorts(n,s,2*l),s+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,s){var a=e._bin,o=s,A=[],c=a.readUshort(n,s);s+=2;for(var l=0;l<c;l++){var h=a.readUshort(n,s);s+=2,A.push(e.GSUB.readLigature(n,o+h))}return A},e.GSUB.readLigature=function(n,s){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,s),s+=2;var A=a.readUshort(n,s);s+=2;for(var c=0;c<A-1;c++)o.chain.push(a.readUshort(n,s)),s+=2;return o},e.head={},e.head.parse=function(n,s,a){var o=e._bin,A={};return o.readFixed(n,s),s+=4,A.fontRevision=o.readFixed(n,s),s+=4,o.readUint(n,s),s+=4,o.readUint(n,s),s+=4,A.flags=o.readUshort(n,s),s+=2,A.unitsPerEm=o.readUshort(n,s),s+=2,A.created=o.readUint64(n,s),s+=8,A.modified=o.readUint64(n,s),s+=8,A.xMin=o.readShort(n,s),s+=2,A.yMin=o.readShort(n,s),s+=2,A.xMax=o.readShort(n,s),s+=2,A.yMax=o.readShort(n,s),s+=2,A.macStyle=o.readUshort(n,s),s+=2,A.lowestRecPPEM=o.readUshort(n,s),s+=2,A.fontDirectionHint=o.readShort(n,s),s+=2,A.indexToLocFormat=o.readShort(n,s),s+=2,A.glyphDataFormat=o.readShort(n,s),s+=2,A},e.hhea={},e.hhea.parse=function(n,s,a){var o=e._bin,A={};return o.readFixed(n,s),s+=4,A.ascender=o.readShort(n,s),s+=2,A.descender=o.readShort(n,s),s+=2,A.lineGap=o.readShort(n,s),s+=2,A.advanceWidthMax=o.readUshort(n,s),s+=2,A.minLeftSideBearing=o.readShort(n,s),s+=2,A.minRightSideBearing=o.readShort(n,s),s+=2,A.xMaxExtent=o.readShort(n,s),s+=2,A.caretSlopeRise=o.readShort(n,s),s+=2,A.caretSlopeRun=o.readShort(n,s),s+=2,A.caretOffset=o.readShort(n,s),s+=2,s+=8,A.metricDataFormat=o.readShort(n,s),s+=2,A.numberOfHMetrics=o.readUshort(n,s),s+=2,A},e.hmtx={},e.hmtx.parse=function(n,s,a,o){for(var A=e._bin,c={aWidth:[],lsBearing:[]},l=0,h=0,u=0;u<o.maxp.numGlyphs;u++)u<o.hhea.numberOfHMetrics&&(l=A.readUshort(n,s),s+=2,h=A.readShort(n,s),s+=2),c.aWidth.push(l),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,s,a,o){var A=e._bin,c=A.readUshort(n,s);if(s+=2,c==1)return e.kern.parseV1(n,s-2,a,o);var l=A.readUshort(n,s);s+=2;for(var h={glyph1:[],rval:[]},u=0;u<l;u++){s+=2,a=A.readUshort(n,s),s+=2;var g=A.readUshort(n,s);s+=2;var p=g>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;s=e.kern.readFormat0(n,s,h)}return h},e.kern.parseV1=function(n,s,a,o){var A=e._bin;A.readFixed(n,s),s+=4;var c=A.readUint(n,s);s+=4;for(var l={glyph1:[],rval:[]},h=0;h<c;h++){A.readUint(n,s),s+=4;var u=A.readUshort(n,s);s+=2,A.readUshort(n,s),s+=2;var g=u>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;s=e.kern.readFormat0(n,s,l)}return l},e.kern.readFormat0=function(n,s,a){var o=e._bin,A=-1,c=o.readUshort(n,s);s+=2,o.readUshort(n,s),s+=2,o.readUshort(n,s),s+=2,o.readUshort(n,s),s+=2;for(var l=0;l<c;l++){var h=o.readUshort(n,s);s+=2;var u=o.readUshort(n,s);s+=2;var g=o.readShort(n,s);s+=2,h!=A&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var p=a.rval[a.rval.length-1];p.glyph2.push(u),p.vals.push(g),A=h}return s},e.loca={},e.loca.parse=function(n,s,a,o){var A=e._bin,c=[],l=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(l==0)for(var u=0;u<h;u++)c.push(A.readUshort(n,s+(u<<1))<<1);if(l==1)for(u=0;u<h;u++)c.push(A.readUint(n,s+(u<<2)));return c},e.maxp={},e.maxp.parse=function(n,s,a){var o=e._bin,A={},c=o.readUint(n,s);return s+=4,A.numGlyphs=o.readUshort(n,s),s+=2,c==65536&&(A.maxPoints=o.readUshort(n,s),s+=2,A.maxContours=o.readUshort(n,s),s+=2,A.maxCompositePoints=o.readUshort(n,s),s+=2,A.maxCompositeContours=o.readUshort(n,s),s+=2,A.maxZones=o.readUshort(n,s),s+=2,A.maxTwilightPoints=o.readUshort(n,s),s+=2,A.maxStorage=o.readUshort(n,s),s+=2,A.maxFunctionDefs=o.readUshort(n,s),s+=2,A.maxInstructionDefs=o.readUshort(n,s),s+=2,A.maxStackElements=o.readUshort(n,s),s+=2,A.maxSizeOfInstructions=o.readUshort(n,s),s+=2,A.maxComponentElements=o.readUshort(n,s),s+=2,A.maxComponentDepth=o.readUshort(n,s),s+=2),A},e.name={},e.name.parse=function(n,s,a){var o=e._bin,A={};o.readUshort(n,s),s+=2;var c=o.readUshort(n,s);s+=2,o.readUshort(n,s);for(var l,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],u=s+=2,g=0;g<c;g++){var p=o.readUshort(n,s);s+=2;var w=o.readUshort(n,s);s+=2;var f=o.readUshort(n,s);s+=2;var d=o.readUshort(n,s);s+=2;var D=o.readUshort(n,s);s+=2;var m=o.readUshort(n,s);s+=2;var C,S=h[d],P=u+12*c+m;if(p==0)C=o.readUnicode(n,P,D/2);else if(p==3&&w==0)C=o.readUnicode(n,P,D/2);else if(w==0)C=o.readASCII(n,P,D);else if(w==1)C=o.readUnicode(n,P,D/2);else if(w==3)C=o.readUnicode(n,P,D/2);else{if(p!=1)throw"unknown encoding "+w+", platformID: "+p;C=o.readASCII(n,P,D),console.debug("reading unknown MAC encoding "+w+" as ASCII")}var I="p"+p+","+f.toString(16);A[I]==null&&(A[I]={}),A[I][S!==void 0?S:d]=C,A[I]._lang=f}for(var O in A)if(A[O].postScriptName!=null&&A[O]._lang==1033)return A[O];for(var O in A)if(A[O].postScriptName!=null&&A[O]._lang==0)return A[O];for(var O in A)if(A[O].postScriptName!=null&&A[O]._lang==3084)return A[O];for(var O in A)if(A[O].postScriptName!=null)return A[O];for(var O in A){l=O;break}return console.debug("returning name table with languageID "+A[l]._lang),A[l]},e["OS/2"]={},e["OS/2"].parse=function(n,s,a){var o=e._bin.readUshort(n,s);s+=2;var A={};if(o==0)e["OS/2"].version0(n,s,A);else if(o==1)e["OS/2"].version1(n,s,A);else if(o==2||o==3||o==4)e["OS/2"].version2(n,s,A);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,s,A)}return A},e["OS/2"].version0=function(n,s,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,s),s+=2,a.usWeightClass=o.readUshort(n,s),s+=2,a.usWidthClass=o.readUshort(n,s),s+=2,a.fsType=o.readUshort(n,s),s+=2,a.ySubscriptXSize=o.readShort(n,s),s+=2,a.ySubscriptYSize=o.readShort(n,s),s+=2,a.ySubscriptXOffset=o.readShort(n,s),s+=2,a.ySubscriptYOffset=o.readShort(n,s),s+=2,a.ySuperscriptXSize=o.readShort(n,s),s+=2,a.ySuperscriptYSize=o.readShort(n,s),s+=2,a.ySuperscriptXOffset=o.readShort(n,s),s+=2,a.ySuperscriptYOffset=o.readShort(n,s),s+=2,a.yStrikeoutSize=o.readShort(n,s),s+=2,a.yStrikeoutPosition=o.readShort(n,s),s+=2,a.sFamilyClass=o.readShort(n,s),s+=2,a.panose=o.readBytes(n,s,10),s+=10,a.ulUnicodeRange1=o.readUint(n,s),s+=4,a.ulUnicodeRange2=o.readUint(n,s),s+=4,a.ulUnicodeRange3=o.readUint(n,s),s+=4,a.ulUnicodeRange4=o.readUint(n,s),s+=4,a.achVendID=[o.readInt8(n,s),o.readInt8(n,s+1),o.readInt8(n,s+2),o.readInt8(n,s+3)],s+=4,a.fsSelection=o.readUshort(n,s),s+=2,a.usFirstCharIndex=o.readUshort(n,s),s+=2,a.usLastCharIndex=o.readUshort(n,s),s+=2,a.sTypoAscender=o.readShort(n,s),s+=2,a.sTypoDescender=o.readShort(n,s),s+=2,a.sTypoLineGap=o.readShort(n,s),s+=2,a.usWinAscent=o.readUshort(n,s),s+=2,a.usWinDescent=o.readUshort(n,s),s+=2},e["OS/2"].version1=function(n,s,a){var o=e._bin;return s=e["OS/2"].version0(n,s,a),a.ulCodePageRange1=o.readUint(n,s),s+=4,a.ulCodePageRange2=o.readUint(n,s),s+=4},e["OS/2"].version2=function(n,s,a){var o=e._bin;return s=e["OS/2"].version1(n,s,a),a.sxHeight=o.readShort(n,s),s+=2,a.sCapHeight=o.readShort(n,s),s+=2,a.usDefault=o.readUshort(n,s),s+=2,a.usBreak=o.readUshort(n,s),s+=2,a.usMaxContext=o.readUshort(n,s),s+=2},e["OS/2"].version5=function(n,s,a){var o=e._bin;return s=e["OS/2"].version2(n,s,a),a.usLowerOpticalPointSize=o.readUshort(n,s),s+=2,a.usUpperOpticalPointSize=o.readUshort(n,s),s+=2},e.post={},e.post.parse=function(n,s,a){var o=e._bin,A={};return A.version=o.readFixed(n,s),s+=4,A.italicAngle=o.readFixed(n,s),s+=4,A.underlinePosition=o.readShort(n,s),s+=2,A.underlineThickness=o.readShort(n,s),s+=2,A},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,s){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var A=a.tables[o];if(A.format==0)return s>=A.map.length?0:A.map[s];if(A.format==4){for(var c=-1,l=0;l<A.endCount.length;l++)if(s<=A.endCount[l]){c=l;break}return c==-1||A.startCount[c]>s?0:65535&(A.idRangeOffset[c]!=0?A.glyphIdArray[s-A.startCount[c]+(A.idRangeOffset[c]>>1)-(A.idRangeOffset.length-c)]:s+A.idDelta[c])}if(A.format==12){if(s>A.groups[A.groups.length-1][1])return 0;for(l=0;l<A.groups.length;l++){var h=A.groups[l];if(h[0]<=s&&s<=h[1])return h[2]+(s-h[0])}return 0}throw"unknown cmap table format "+A.format},e.U.glyphToPath=function(n,s){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[s]){var o=n.SVG.entries[s];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[s]=o),o)}if(n.CFF){var A={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,l=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=s;)h+=2;l=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[s],A,c,l,a)}else n.glyf&&e.U._drawGlyf(s,n,a);return a},e.U._drawGlyf=function(n,s,a){var o=s.glyf[n];o==null&&(o=s.glyf[n]=e.glyf._parseGlyf(s,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,s,a))},e.U._simpleGlyph=function(n,s){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,A=n.endPts[a],c=o;c<=A;c++){var l=c==o?A:c-1,h=c==A?o:c+1,u=1&n.flags[c],g=1&n.flags[l],p=1&n.flags[h],w=n.xs[c],f=n.ys[c];if(c==o)if(u){if(!g){e.U.P.moveTo(s,w,f);continue}e.U.P.moveTo(s,n.xs[l],n.ys[l])}else g?e.U.P.moveTo(s,n.xs[l],n.ys[l]):e.U.P.moveTo(s,(n.xs[l]+w)/2,(n.ys[l]+f)/2);u?g&&e.U.P.lineTo(s,w,f):p?e.U.P.qcurveTo(s,w,f,n.xs[h],n.ys[h]):e.U.P.qcurveTo(s,w,f,(w+n.xs[h])/2,(f+n.ys[h])/2)}e.U.P.closePath(s)}},e.U._compoGlyph=function(n,s,a){for(var o=0;o<n.parts.length;o++){var A={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,s,A);for(var l=c.m,h=0;h<A.crds.length;h+=2){var u=A.crds[h],g=A.crds[h+1];a.crds.push(u*l.a+g*l.b+l.tx),a.crds.push(u*l.c+g*l.d+l.ty)}for(h=0;h<A.cmds.length;h++)a.cmds.push(A.cmds[h])}},e.U._getGlyphClass=function(n,s){var a=e._lctf.getInterval(s,n);return a==-1?0:s[a+2]},e.U._applySubs=function(n,s,a,o){for(var A=n.length-s-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var l,h=a.tabs[c];if(!h.coverage||(l=e._lctf.coverageIndex(h.coverage,n[s]))!=-1){if(a.ltype==1)n[s],h.fmt==1?n[s]=n[s]+h.delta:n[s]=h.newg[l];else if(a.ltype==4)for(var u=h.vals[l],g=0;g<u.length;g++){var p=u[g],w=p.chain.length;if(!(w>A)){for(var f=!0,d=0,D=0;D<w;D++){for(;n[s+d+(1+D)]==-1;)d++;p.chain[D]!=n[s+d+(1+D)]&&(f=!1)}if(f){for(n[s]=p.nglyph,D=0;D<w+d;D++)n[s+D+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var m=e._lctf.getInterval(h.cDef,n[s]),C=h.cDef[m+2],S=h.scset[C],P=0;P<S.length;P++){var I=S[P],O=I.input;if(!(O.length>A)){for(f=!0,D=0;D<O.length;D++){var z=e._lctf.getInterval(h.cDef,n[s+1+D]);if(m==-1&&h.cDef[z+2]!=O[D]){f=!1;break}}if(f){var v=I.substLookupRecords;for(g=0;g<v.length;g+=2)v[g],v[g+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,s-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,s)||!e.U._glsCovered(n,h.ahedCvg,s+h.inptCvg.length))continue;var M=h.lookupRec;for(P=0;P<M.length;P+=2){m=M[P];var H=o[M[P+1]];e.U._applySubs(n,s+m,H,o)}}}}},e.U._glsCovered=function(n,s,a){for(var o=0;o<s.length;o++)if(e._lctf.coverageIndex(s[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,s,a){for(var o={cmds:[],crds:[]},A=0,c=0;c<s.length;c++){var l=s[c];if(l!=-1){for(var h=c<s.length-1&&s[c+1]!=-1?s[c+1]:0,u=e.U.glyphToPath(n,l),g=0;g<u.crds.length;g+=2)o.crds.push(u.crds[g]+A),o.crds.push(u.crds[g+1]);for(a&&o.cmds.push(a),g=0;g<u.cmds.length;g++)o.cmds.push(u.cmds[g]);a&&o.cmds.push("X"),A+=n.hmtx.aWidth[l],c<s.length-1&&(A+=e.U.getPairAdjustment(n,l,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,s,a){n.cmds.push("M"),n.crds.push(s,a)},e.U.P.lineTo=function(n,s,a){n.cmds.push("L"),n.crds.push(s,a)},e.U.P.curveTo=function(n,s,a,o,A,c,l){n.cmds.push("C"),n.crds.push(s,a,o,A,c,l)},e.U.P.qcurveTo=function(n,s,a,o,A){n.cmds.push("Q"),n.crds.push(s,a,o,A)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,s,a,o,A){for(var c=s.stack,l=s.nStems,h=s.haveWidth,u=s.width,g=s.open,p=0,w=s.x,f=s.y,d=0,D=0,m=0,C=0,S=0,P=0,I=0,O=0,z=0,v=0,M={val:0,size:0};p<n.length;){e.CFF.getCharString(n,p,M);var H=M.val;if(p+=M.size,H=="o1"||H=="o18")c.length%2!=0&&!h&&(u=c.shift()+o.nominalWidthX),l+=c.length>>1,c.length=0,h=!0;else if(H=="o3"||H=="o23")c.length%2!=0&&!h&&(u=c.shift()+o.nominalWidthX),l+=c.length>>1,c.length=0,h=!0;else if(H=="o4")c.length>1&&!h&&(u=c.shift()+o.nominalWidthX,h=!0),g&&e.U.P.closePath(A),f+=c.pop(),e.U.P.moveTo(A,w,f),g=!0;else if(H=="o5")for(;c.length>0;)w+=c.shift(),f+=c.shift(),e.U.P.lineTo(A,w,f);else if(H=="o6"||H=="o7")for(var y=c.length,x=H=="o6",R=0;R<y;R++){var T=c.shift();x?w+=T:f+=T,x=!x,e.U.P.lineTo(A,w,f)}else if(H=="o8"||H=="o24"){y=c.length;for(var F=0;F+6<=y;)d=w+c.shift(),D=f+c.shift(),m=d+c.shift(),C=D+c.shift(),w=m+c.shift(),f=C+c.shift(),e.U.P.curveTo(A,d,D,m,C,w,f),F+=6;H=="o24"&&(w+=c.shift(),f+=c.shift(),e.U.P.lineTo(A,w,f))}else{if(H=="o11")break;if(H=="o1234"||H=="o1235"||H=="o1236"||H=="o1237")H=="o1234"&&(D=f,m=(d=w+c.shift())+c.shift(),v=C=D+c.shift(),P=C,O=f,w=(I=(S=(z=m+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(A,d,D,m,C,z,v),e.U.P.curveTo(A,S,P,I,O,w,f)),H=="o1235"&&(d=w+c.shift(),D=f+c.shift(),m=d+c.shift(),C=D+c.shift(),z=m+c.shift(),v=C+c.shift(),S=z+c.shift(),P=v+c.shift(),I=S+c.shift(),O=P+c.shift(),w=I+c.shift(),f=O+c.shift(),c.shift(),e.U.P.curveTo(A,d,D,m,C,z,v),e.U.P.curveTo(A,S,P,I,O,w,f)),H=="o1236"&&(d=w+c.shift(),D=f+c.shift(),m=d+c.shift(),v=C=D+c.shift(),P=C,I=(S=(z=m+c.shift())+c.shift())+c.shift(),O=P+c.shift(),w=I+c.shift(),e.U.P.curveTo(A,d,D,m,C,z,v),e.U.P.curveTo(A,S,P,I,O,w,f)),H=="o1237"&&(d=w+c.shift(),D=f+c.shift(),m=d+c.shift(),C=D+c.shift(),z=m+c.shift(),v=C+c.shift(),S=z+c.shift(),P=v+c.shift(),I=S+c.shift(),O=P+c.shift(),Math.abs(I-w)>Math.abs(O-f)?w=I+c.shift():f=O+c.shift(),e.U.P.curveTo(A,d,D,m,C,z,v),e.U.P.curveTo(A,S,P,I,O,w,f));else if(H=="o14"){if(c.length>0&&!h&&(u=c.shift()+a.nominalWidthX,h=!0),c.length==4){var X=c.shift(),J=c.shift(),K=c.shift(),L=c.shift(),j=e.CFF.glyphBySE(a,K),se=e.CFF.glyphBySE(a,L);e.U._drawCFF(a.CharStrings[j],s,a,o,A),s.x=X,s.y=J,e.U._drawCFF(a.CharStrings[se],s,a,o,A)}g&&(e.U.P.closePath(A),g=!1)}else if(H=="o19"||H=="o20")c.length%2!=0&&!h&&(u=c.shift()+o.nominalWidthX),l+=c.length>>1,c.length=0,h=!0,p+=l+7>>3;else if(H=="o21")c.length>2&&!h&&(u=c.shift()+o.nominalWidthX,h=!0),f+=c.pop(),w+=c.pop(),g&&e.U.P.closePath(A),e.U.P.moveTo(A,w,f),g=!0;else if(H=="o22")c.length>1&&!h&&(u=c.shift()+o.nominalWidthX,h=!0),w+=c.pop(),g&&e.U.P.closePath(A),e.U.P.moveTo(A,w,f),g=!0;else if(H=="o25"){for(;c.length>6;)w+=c.shift(),f+=c.shift(),e.U.P.lineTo(A,w,f);d=w+c.shift(),D=f+c.shift(),m=d+c.shift(),C=D+c.shift(),w=m+c.shift(),f=C+c.shift(),e.U.P.curveTo(A,d,D,m,C,w,f)}else if(H=="o26")for(c.length%2&&(w+=c.shift());c.length>0;)d=w,D=f+c.shift(),w=m=d+c.shift(),f=(C=D+c.shift())+c.shift(),e.U.P.curveTo(A,d,D,m,C,w,f);else if(H=="o27")for(c.length%2&&(f+=c.shift());c.length>0;)D=f,m=(d=w+c.shift())+c.shift(),C=D+c.shift(),w=m+c.shift(),f=C,e.U.P.curveTo(A,d,D,m,C,w,f);else if(H=="o10"||H=="o29"){var k=H=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var N=c.pop(),oe=k.Subrs[N+k.Bias];s.x=w,s.y=f,s.nStems=l,s.haveWidth=h,s.width=u,s.open=g,e.U._drawCFF(oe,s,a,o,A),w=s.x,f=s.y,l=s.nStems,h=s.haveWidth,u=s.width,g=s.open}}else if(H=="o30"||H=="o31"){var ee=c.length,ue=(F=0,H=="o31");for(F+=ee-(y=-3&ee);F<y;)ue?(D=f,m=(d=w+c.shift())+c.shift(),f=(C=D+c.shift())+c.shift(),y-F==5?(w=m+c.shift(),F++):w=m,ue=!1):(d=w,D=f+c.shift(),m=d+c.shift(),C=D+c.shift(),w=m+c.shift(),y-F==5?(f=C+c.shift(),F++):f=C,ue=!0),e.U.P.curveTo(A,d,D,m,C,w,f),F+=4}else{if((H+"").charAt(0)=="o")throw console.debug("Unknown operation: "+H,n),H;c.push(H)}}}s.x=w,s.y=f,s.nStems=l,s.haveWidth=h,s.width=u,s.open=g};var t=e,i={Typr:t};return r.Typr=t,r.default=i,Object.defineProperty(r,"__esModule",{value:!0}),r}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function f4(){return function(r){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),s=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(H,y){for(var x=new t(31),R=0;R<31;++R)x[R]=y+=1<<H[R-1];var T=new i(x[30]);for(R=1;R<30;++R)for(var F=x[R];F<x[R+1];++F)T[F]=F-x[R]<<5|R;return[x,T]},A=o(n,2),c=A[0],l=A[1];c[28]=258,l[258]=28;for(var h=o(s,0)[0],u=new t(32768),g=0;g<32768;++g){var p=(43690&g)>>>1|(21845&g)<<1;p=(61680&(p=(52428&p)>>>2|(13107&p)<<2))>>>4|(3855&p)<<4,u[g]=((65280&p)>>>8|(255&p)<<8)>>>1}var w=function(H,y,x){for(var R=H.length,T=0,F=new t(y);T<R;++T)++F[H[T]-1];var X,J=new t(y);for(T=0;T<y;++T)J[T]=J[T-1]+F[T-1]<<1;{X=new t(1<<y);var K=15-y;for(T=0;T<R;++T)if(H[T])for(var L=T<<4|H[T],j=y-H[T],se=J[H[T]-1]++<<j,k=se|(1<<j)-1;se<=k;++se)X[u[se]>>>K]=L}return X},f=new e(288);for(g=0;g<144;++g)f[g]=8;for(g=144;g<256;++g)f[g]=9;for(g=256;g<280;++g)f[g]=7;for(g=280;g<288;++g)f[g]=8;var d=new e(32);for(g=0;g<32;++g)d[g]=5;var D=w(f,9),m=w(d,5),C=function(H){for(var y=H[0],x=1;x<H.length;++x)H[x]>y&&(y=H[x]);return y},S=function(H,y,x){var R=y/8|0;return(H[R]|H[R+1]<<8)>>(7&y)&x},P=function(H,y){var x=y/8|0;return(H[x]|H[x+1]<<8|H[x+2]<<16)>>(7&y)},I=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],O=function(H,y,x){var R=new Error(y||I[H]);if(R.code=H,Error.captureStackTrace&&Error.captureStackTrace(R,O),!x)throw R;return R},z=function(H,y,x){var R=H.length;if(!R||x&&!x.l&&R<5)return y||new e(0);var T=!y||x,F=!x||x.i;x||(x={}),y||(y=new e(3*R));var X,J=function(Ue){var je=y.length;if(Ue>je){var nt=new e(Math.max(2*je,Ue));nt.set(y),y=nt}},K=x.f||0,L=x.p||0,j=x.b||0,se=x.l,k=x.d,N=x.m,oe=x.n,ee=8*R;do{if(!se){x.f=K=S(H,L,1);var ue=S(H,L+1,3);if(L+=3,!ue){var pe=H[(Q=((X=L)/8|0)+(7&X&&1)+4)-4]|H[Q-3]<<8,xe=Q+pe;if(xe>R){F&&O(0);break}T&&J(j+pe),y.set(H.subarray(Q,xe),j),x.b=j+=pe,x.p=L=8*xe;continue}if(ue==1)se=D,k=m,N=9,oe=5;else if(ue==2){var Ie=S(H,L,31)+257,de=S(H,L+10,15)+4,G=Ie+S(H,L+5,31)+1;L+=14;for(var _e=new e(G),Se=new e(19),Te=0;Te<de;++Te)Se[a[Te]]=S(H,L+3*Te,7);L+=3*de;var be=C(Se),Be=(1<<be)-1,Qe=w(Se,be);for(Te=0;Te<G;){var Q,B=Qe[S(H,L,Be)];if(L+=15&B,(Q=B>>>4)<16)_e[Te++]=Q;else{var Z=0,te=0;for(Q==16?(te=3+S(H,L,3),L+=2,Z=_e[Te-1]):Q==17?(te=3+S(H,L,7),L+=3):Q==18&&(te=11+S(H,L,127),L+=7);te--;)_e[Te++]=Z}}var Ae=_e.subarray(0,Ie),ie=_e.subarray(Ie);N=C(Ae),oe=C(ie),se=w(Ae,N),k=w(ie,oe)}else O(1);if(L>ee){F&&O(0);break}}T&&J(j+131072);for(var we=(1<<N)-1,Ee=(1<<oe)-1,fe=L;;fe=L){var ke=(Z=se[P(H,L)&we])>>>4;if((L+=15&Z)>ee){F&&O(0);break}if(Z||O(2),ke<256)y[j++]=ke;else{if(ke==256){fe=L,se=null;break}var De=ke-254;if(ke>264){var Re=n[Te=ke-257];De=S(H,L,(1<<Re)-1)+c[Te],L+=Re}var Fe=k[P(H,L)&Ee],Je=Fe>>>4;if(Fe||O(3),L+=15&Fe,ie=h[Je],Je>3&&(Re=s[Je],ie+=P(H,L)&(1<<Re)-1,L+=Re),L>ee){F&&O(0);break}T&&J(j+131072);for(var me=j+De;j<me;j+=4)y[j]=y[j-ie],y[j+1]=y[j+1-ie],y[j+2]=y[j+2-ie],y[j+3]=y[j+3-ie];j=me}}x.l=se,x.p=fe,x.b=j,se&&(K=1,x.m=N,x.d=k,x.n=oe)}while(!K);return j==y.length?y:function(Ue,je,nt){(nt==null||nt>Ue.length)&&(nt=Ue.length);var W=new(Ue instanceof t?t:Ue instanceof i?i:e)(nt-je);return W.set(Ue.subarray(je,nt)),W}(y,0,j)},v=new e(0),M=typeof TextDecoder<"u"&&new TextDecoder;try{M.decode(v,{stream:!0})}catch{}return r.convert_streams=function(H){var y=new DataView(H),x=0;function R(){var Ie=y.getUint16(x);return x+=2,Ie}function T(){var Ie=y.getUint32(x);return x+=4,Ie}function F(Ie){pe.setUint16(xe,Ie),xe+=2}function X(Ie){pe.setUint32(xe,Ie),xe+=4}for(var J={signature:T(),flavor:T(),length:T(),numTables:R(),reserved:R(),totalSfntSize:T(),majorVersion:R(),minorVersion:R(),metaOffset:T(),metaLength:T(),metaOrigLength:T(),privOffset:T(),privLength:T()},K=0;Math.pow(2,K)<=J.numTables;)K++;K--;for(var L=16*Math.pow(2,K),j=16*J.numTables-L,se=12,k=[],N=0;N<J.numTables;N++)k.push({tag:T(),offset:T(),compLength:T(),origLength:T(),origChecksum:T()}),se+=16;var oe,ee=new Uint8Array(12+16*k.length+k.reduce(function(Ie,de){return Ie+de.origLength+4},0)),ue=ee.buffer,pe=new DataView(ue),xe=0;return X(J.flavor),F(J.numTables),F(L),F(K),F(j),k.forEach(function(Ie){X(Ie.tag),X(Ie.origChecksum),X(se),X(Ie.origLength),Ie.outOffset=se,(se+=Ie.origLength)%4!=0&&(se+=4-se%4)}),k.forEach(function(Ie){var de,G=H.slice(Ie.offset,Ie.offset+Ie.compLength);if(Ie.compLength!=Ie.origLength){var _e=new Uint8Array(Ie.origLength);de=new Uint8Array(G,2),z(de,_e)}else _e=new Uint8Array(G);ee.set(_e,Ie.outOffset);var Se=0;(se=Ie.outOffset+Ie.origLength)%4!=0&&(Se=4-se%4),ee.set(new Uint8Array(Se).buffer,Ie.outOffset+Ie.origLength),oe=se+Se}),ue.slice(0,oe)},Object.defineProperty(r,"__esModule",{value:!0}),r}({}).convert_streams}function d4(r,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,s=2,a=4,o=8,A=16,c=32;let l;function h(I){if(!l){const O={R:s,L:n,D:a,C:A,U:c,T:o};l=new Map;for(let z in i){let v=0;i[z].split(",").forEach(M=>{let[H,y]=M.split("+");H=parseInt(H,36),y=y?parseInt(y,36):0,l.set(v+=H,O[z]);for(let x=y;x--;)l.set(++v,O[z])})}}return l.get(I)||c}const u=1,g=2,p=3,w=4,f=[null,"isol","init","fina","medi"];function d(I){const O=new Uint8Array(I.length);let z=c,v=u,M=-1;for(let H=0;H<I.length;H++){const y=I.codePointAt(H);let x=h(y)|0,R=u;x&o||(z&(n|a|A)?x&(s|a|A)?(R=p,(v===u||v===p)&&O[M]++):x&(n|c)&&(v===g||v===w)&&O[M]--:z&(s|c)&&(v===g||v===w)&&O[M]--,v=O[H]=R,z=x,M=H,y>65535&&H++)}return O}function D(I,O){const z=[];for(let M=0;M<O.length;M++){const H=O.codePointAt(M);H>65535&&M++,z.push(r.U.codeToGlyph(I,H))}const v=I.GSUB;if(v){const{lookupList:M,featureList:H}=v;let y;const x=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,R=[];H.forEach(T=>{if(x.test(T.tag))for(let F=0;F<T.tab.length;F++){if(R[T.tab[F]])continue;R[T.tab[F]]=!0;const X=M[T.tab[F]],J=/^(isol|init|fina|medi)$/.test(T.tag);J&&!y&&(y=d(O));for(let K=0;K<z.length;K++)(!y||!J||f[y[K]]===T.tag)&&r.U._applySubs(z,K,X,M)}})}return z}function m(I,O){const z=new Int16Array(O.length*3);let v=0;for(;v<O.length;v++){const x=O[v];if(x===-1)continue;z[v*3+2]=I.hmtx.aWidth[x];const R=I.GPOS;if(R){const T=R.lookupList;for(let F=0;F<T.length;F++){const X=T[F];for(let J=0;J<X.tabs.length;J++){const K=X.tabs[J];if(X.ltype===1){if(r._lctf.coverageIndex(K.coverage,x)!==-1&&K.pos){y(K.pos,v);break}}else if(X.ltype===2){let L=null,j=M();if(j!==-1){const se=r._lctf.coverageIndex(K.coverage,O[j]);if(se!==-1){if(K.fmt===1){const k=K.pairsets[se];for(let N=0;N<k.length;N++)k[N].gid2===x&&(L=k[N])}else if(K.fmt===2){const k=r.U._getGlyphClass(O[j],K.classDef1),N=r.U._getGlyphClass(x,K.classDef2);L=K.matrix[k][N]}if(L){L.val1&&y(L.val1,j),L.val2&&y(L.val2,v);break}}}}else if(X.ltype===4){const L=r._lctf.coverageIndex(K.markCoverage,x);if(L!==-1){const j=M(H),se=j===-1?-1:r._lctf.coverageIndex(K.baseCoverage,O[j]);if(se!==-1){const k=K.markArray[L],N=K.baseArray[se][k.markClass];z[v*3]=N.x-k.x+z[j*3]-z[j*3+2],z[v*3+1]=N.y-k.y+z[j*3+1];break}}}else if(X.ltype===6){const L=r._lctf.coverageIndex(K.mark1Coverage,x);if(L!==-1){const j=M();if(j!==-1){const se=O[j];if(C(I,se)===3){const k=r._lctf.coverageIndex(K.mark2Coverage,se);if(k!==-1){const N=K.mark1Array[L],oe=K.mark2Array[k][N.markClass];z[v*3]=oe.x-N.x+z[j*3]-z[j*3+2],z[v*3+1]=oe.y-N.y+z[j*3+1];break}}}}}}}}else if(I.kern&&!I.cff){const T=M();if(T!==-1){const F=I.kern.glyph1.indexOf(O[T]);if(F!==-1){const X=I.kern.rval[F].glyph2.indexOf(x);X!==-1&&(z[T*3+2]+=I.kern.rval[F].vals[X])}}}}return z;function M(x){for(let R=v-1;R>=0;R--)if(O[R]!==-1&&(!x||x(O[R])))return R;return-1}function H(x){return C(I,x)===1}function y(x,R){for(let T=0;T<3;T++)z[R*3+T]+=x[T]||0}}function C(I,O){const z=I.GDEF&&I.GDEF.glyphClassDef;return z?r.U._getGlyphClass(O,z):0}function S(...I){for(let O=0;O<I.length;O++)if(typeof I[O]=="number")return I[O]}function P(I){const O=Object.create(null),z=I["OS/2"],v=I.hhea,M=I.head.unitsPerEm,H=S(z&&z.sTypoAscender,v&&v.ascender,M),y={unitsPerEm:M,ascender:H,descender:S(z&&z.sTypoDescender,v&&v.descender,0),capHeight:S(z&&z.sCapHeight,H),xHeight:S(z&&z.sxHeight,H),lineGap:S(z&&z.sTypoLineGap,v&&v.lineGap),supportsCodePoint(x){return r.U.codeToGlyph(I,x)>0},forEachGlyph(x,R,T,F){let X=0;const J=1/y.unitsPerEm*R,K=D(I,x);let L=0;const j=m(I,K);return K.forEach((se,k)=>{if(se!==-1){let N=O[se];if(!N){const{cmds:oe,crds:ee}=r.U.glyphToPath(I,se);let ue="",pe=0;for(let _e=0,Se=oe.length;_e<Se;_e++){const Te=t[oe[_e]];ue+=oe[_e];for(let be=1;be<=Te;be++)ue+=(be>1?",":"")+ee[pe++]}let xe,Ie,de,G;if(ee.length){xe=Ie=1/0,de=G=-1/0;for(let _e=0,Se=ee.length;_e<Se;_e+=2){let Te=ee[_e],be=ee[_e+1];Te<xe&&(xe=Te),be<Ie&&(Ie=be),Te>de&&(de=Te),be>G&&(G=be)}}else xe=de=Ie=G=0;N=O[se]={index:se,advanceWidth:I.hmtx.aWidth[se],xMin:xe,yMin:Ie,xMax:de,yMax:G,path:ue}}F.call(null,N,X+j[k*3]*J,j[k*3+1]*J,L),X+=j[k*3+2]*J,T&&(X+=T*R)}L+=x.codePointAt(L)>65535?2:1}),X}};return y}return function(I){const O=new Uint8Array(I,0,4),z=r._bin.readASCII(O,0,4);if(z==="wOFF")I=e(I);else if(z==="wOF2")throw new Error("woff2 fonts not supported");return P(r.parse(I)[0])}}const p4=Ya({name:"Typr Font Parser",dependencies:[g4,f4,d4],init(r,e,t){const i=r(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function w4(){return function(r){var e=function(){this.buckets=new Map};e.prototype.add=function(m){var C=m>>5;this.buckets.set(C,(this.buckets.get(C)||0)|1<<(31&m))},e.prototype.has=function(m){var C=this.buckets.get(m>>5);return C!==void 0&&(C&1<<(31&m))!=0},e.prototype.serialize=function(){var m=[];return this.buckets.forEach(function(C,S){m.push((+S).toString(36)+":"+C.toString(36))}),m.join(",")},e.prototype.deserialize=function(m){var C=this;this.buckets.clear(),m.split(",").forEach(function(S){var P=S.split(":");C.buckets.set(parseInt(P[0],36),parseInt(P[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function s(m){var C=function(P){return P&n}(m).toString(16),S=function(P){return(P&n)+t-1}(m).toString(16);return"codepoint-index/plane"+(m>>16)+"/"+C+"-"+S+".json"}function a(m,C){var S=m&i,P=C.codePointAt(S/6|0);return((P=(P||48)-48)&1<<S%6)!=0}function o(m,C){var S;(S=m,S.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(P){return P.split("-").map(function(I){return parseInt(I.trim(),16)})})).forEach(function(P){var I=P[0],O=P[1];O===void 0&&(O=I),C(I,O)})}function A(m,C){o(m,function(S,P){for(var I=S;I<=P;I++)C(I)})}var c={},l={},h=new WeakMap,u="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function g(m){var C=h.get(m);return C||(C=new e,A(m.ranges,function(S){return C.add(S)}),h.set(m,C)),C}var p,w=new Map;function f(m,C,S){return m[C]?C:m[S]?S:function(P){for(var I in P)return I}(m)}function d(m,C){var S=C;if(!m.includes(S)){S=1/0;for(var P=0;P<m.length;P++)Math.abs(m[P]-C)<Math.abs(S-C)&&(S=m[P])}return S}function D(m){return p||(p=new Set,A("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(C){p.add(C)})),p.has(m)}return r.CodePointSet=e,r.clearCache=function(){c={},l={}},r.getFontsForString=function(m,C){C===void 0&&(C={});var S,P=C.lang;P===void 0&&(P=new RegExp("\\p{Script=Hangul}","u").test(S=m)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(S)?"ja":"en");var I=C.category;I===void 0&&(I="sans-serif");var O=C.style;O===void 0&&(O="normal");var z=C.weight;z===void 0&&(z=400);var v=(C.dataUrl||u).replace(/\/$/g,""),M=new Map,H=new Uint8Array(m.length),y={},x={},R=new Array(m.length),T=new Map,F=!1;function X(L){var j=w.get(L);return j||(j=fetch(v+"/"+L).then(function(se){if(!se.ok)throw new Error(se.statusText);return se.json().then(function(k){if(!Array.isArray(k)||k[0]!==1)throw new Error("Incorrect schema version; need 1, got "+k[0]);return k[1]})}).catch(function(se){if(v!==u)return F||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+v+'", trying default CDN. '+se.message),F=!0),v=u,w.delete(L),X(L);throw se}),w.set(L,j)),j}for(var J=function(L){var j=m.codePointAt(L),se=s(j);R[L]=se,c[se]||T.has(se)||T.set(se,X(se).then(function(k){c[se]=k})),j>65535&&(L++,K=L)},K=0;K<m.length;K++)J(K);return Promise.all(T.values()).then(function(){T.clear();for(var L=function(se){var k=m.codePointAt(se),N=null,oe=c[R[se]],ee=void 0;for(var ue in oe){var pe=x[ue];if(pe===void 0&&(pe=x[ue]=new RegExp(ue).test(P||"en")),pe){for(var xe in ee=ue,oe[ue])if(a(k,oe[ue][xe])){N=xe;break}break}}if(!N){e:for(var Ie in oe)if(Ie!==ee){for(var de in oe[Ie])if(a(k,oe[Ie][de])){N=de;break e}}}N||(console.debug("No font coverage for U+"+k.toString(16)),N="latin"),R[se]=N,l[N]||T.has(N)||T.set(N,X("font-meta/"+N+".json").then(function(G){l[N]=G})),k>65535&&(se++,j=se)},j=0;j<m.length;j++)L(j);return Promise.all(T.values())}).then(function(){for(var L,j=null,se=0;se<m.length;se++){var k=m.codePointAt(se);if(j&&(D(k)||g(j).has(k)))H[se]=H[se-1];else{j=l[R[se]];var N=y[j.id];if(!N){var oe=j.typeforms,ee=f(oe,I,"sans-serif"),ue=f(oe[ee],O,"normal"),pe=d((L=oe[ee])===null||L===void 0?void 0:L[ue],z);N=y[j.id]=v+"/font-files/"+j.id+"/"+ee+"."+ue+"."+pe+".woff"}var xe=M.get(N);xe==null&&(xe=M.size,M.set(N,xe)),H[se]=xe}k>65535&&(se++,H[se]=H[se-1])}return{fontUrls:Array.from(M.keys()),chars:H}})},Object.defineProperty(r,"__esModule",{value:!0}),r}({})}function v4(r,e){const t=Object.create(null),i=Object.create(null);function n(a,o){const A=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)A(new Error(c.statusText));else if(c.status>0)try{const l=r(c.response);l.src=a,o(l)}catch(l){A(l)}},c.onerror=A,c.send()}catch(c){A(c)}}function s(a,o){let A=t[a];A?o(A):i[a]?i[a].push(o):(i[a]=[o],n(a,c=>{c.src=a,t[a]=c,i[a].forEach(l=>l(c)),delete i[a]}))}return function(a,o,{lang:A,fonts:c=[],style:l="normal",weight:h="normal",unicodeFontsURL:u}={}){const g=new Uint8Array(a.length),p=[];a.length||D();const w=new Map,f=[];if(l!=="italic"&&(l="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(C=>!C.lang||C.lang.test(A)).reverse(),c.length){let C=0;(function S(P=0){for(let I=P,O=a.length;I<O;I++){const z=a.codePointAt(I);if(C===1&&p[g[I-1]].supportsCodePoint(z)||/\s/.test(a[I]))g[I]=g[I-1],C===2&&(f[f.length-1][1]=I);else for(let v=g[I],M=c.length;v<=M;v++)if(v===M){const H=C===2?f[f.length-1]:f[f.length]=[I,I];H[1]=I,C=2}else{g[I]=v;const{src:H,unicodeRange:y}=c[v];if(!y||m(z,y)){const x=t[H];if(!x){s(H,()=>{S(I)});return}if(x.supportsCodePoint(z)){let R=w.get(x);typeof R!="number"&&(R=p.length,p.push(x),w.set(x,R)),g[I]=R,C=1;break}}}z>65535&&I+1<O&&(g[I+1]=g[I],I++,C===2&&(f[f.length-1][1]=I))}d()})()}else f.push([0,a.length-1]),d();function d(){if(f.length){const C=f.map(S=>a.substring(S[0],S[1]+1)).join(`
`);e.getFontsForString(C,{lang:A||void 0,style:l,weight:h,dataUrl:u}).then(({fontUrls:S,chars:P})=>{const I=p.length;let O=0;f.forEach(v=>{for(let M=0,H=v[1]-v[0];M<=H;M++)g[v[0]+M]=P[O++]+I;O++});let z=0;S.forEach((v,M)=>{s(v,H=>{p[M+I]=H,++z===S.length&&D()})})})}else D()}function D(){o({chars:g,fonts:p})}function m(C,S){for(let P=0;P<S.length;P++){const[I,O=I]=S[P];if(I<=C&&C<=O)return!0}return!1}}}const m4=Ya({name:"FontResolver",dependencies:[v4,p4,w4],init(r,e,t){return r(e,t())}});function C4(r,e){const t=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",n=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:g,lang:p,fonts:w,style:f,weight:d,preResolvedFonts:D,unicodeFontsURL:m},C){const S=({chars:P,fonts:I})=>{let O,z;const v=[];for(let M=0;M<P.length;M++)P[M]!==z?(z=P[M],v.push(O={start:M,end:M,fontObj:I[P[M]]})):O.end=M;C(v)};D?S(D):r(g,S,{lang:p,fonts:w,style:f,weight:d,unicodeFontsURL:m})}function a({text:g="",font:p,lang:w,sdfGlyphSize:f=64,fontSize:d=400,fontWeight:D=1,fontStyle:m="normal",letterSpacing:C=0,lineHeight:S="normal",maxWidth:P=1/0,direction:I,textAlign:O="left",textIndent:z=0,whiteSpace:v="normal",overflowWrap:M="normal",anchorX:H=0,anchorY:y=0,metricsOnly:x=!1,unicodeFontsURL:R,preResolvedFonts:T=null,includeCaretPositions:F=!1,chunkedBoundsSize:X=8192,colorRanges:J=null},K){const L=l(),j={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),d=+d,C=+C,P=+P,S=S||"normal",z=+z,s({text:g,lang:w,style:m,weight:D,fonts:typeof p=="string"?[{src:p}]:p,unicodeFontsURL:R,preResolvedFonts:T},se=>{j.fontLoad=l()-L;const k=isFinite(P);let N=null,oe=null,ee=null,ue=null,pe=null,xe=null,Ie=null,de=null,G=0,_e=0,Se=v!=="nowrap";const Te=new Map,be=l();let Be=z,Qe=0,Q=new h;const B=[Q];se.forEach(we=>{const{fontObj:Ee}=we,{ascender:fe,descender:ke,unitsPerEm:De,lineGap:Re,capHeight:Fe,xHeight:Je}=Ee;let me=Te.get(Ee);if(!me){const Ce=d/De,ne=S==="normal"?(fe-ke+Re)*Ce:S*d,Me=(ne-(fe-ke)*Ce)/2,Pe=Math.min(ne,(fe-ke)*Ce),ye=(fe+ke)/2*Ce+Pe/2;me={index:Te.size,src:Ee.src,fontObj:Ee,fontSizeMult:Ce,unitsPerEm:De,ascender:fe*Ce,descender:ke*Ce,capHeight:Fe*Ce,xHeight:Je*Ce,lineHeight:ne,baseline:-Me-fe*Ce,caretTop:ye,caretBottom:ye-Pe},Te.set(Ee,me)}const{fontSizeMult:Ue}=me,je=g.slice(we.start,we.end+1);let nt,W;Ee.forEachGlyph(je,d,C,(Ce,ne,Me,Pe)=>{ne+=Qe,Pe+=we.start,nt=ne,W=Ce;const ye=g.charAt(Pe),ht=Ce.advanceWidth*Ue,pt=Q.count;let $e;if("isEmpty"in Ce||(Ce.isWhitespace=!!ye&&new RegExp(i).test(ye),Ce.canBreakAfter=!!ye&&n.test(ye),Ce.isEmpty=Ce.xMin===Ce.xMax||Ce.yMin===Ce.yMax||t.test(ye)),!Ce.isWhitespace&&!Ce.isEmpty&&_e++,Se&&k&&!Ce.isWhitespace&&ne+ht+Be>P&&pt){if(Q.glyphAt(pt-1).glyphObj.canBreakAfter)$e=new h,Be=-ne;else for(let bt=pt;bt--;)if(bt===0&&M==="break-word"){$e=new h,Be=-ne;break}else if(Q.glyphAt(bt).glyphObj.canBreakAfter){$e=Q.splitAt(bt+1);const Nt=$e.glyphAt(0).x;Be-=Nt;for(let Rt=$e.count;Rt--;)$e.glyphAt(Rt).x-=Nt;break}$e&&(Q.isSoftWrapped=!0,Q=$e,B.push(Q),G=P)}let Ze=Q.glyphAt(Q.count);Ze.glyphObj=Ce,Ze.x=ne+Be,Ze.y=Me,Ze.width=ht,Ze.charIndex=Pe,Ze.fontData=me,ye===`
`&&(Q=new h,B.push(Q),Be=-(ne+ht+C*d)+z)}),Qe=nt+W.advanceWidth*Ue+C*d});let Z=0;B.forEach(we=>{let Ee=!0;for(let fe=we.count;fe--;){const ke=we.glyphAt(fe);Ee&&!ke.glyphObj.isWhitespace&&(we.width=ke.x+ke.width,we.width>G&&(G=we.width),Ee=!1);let{lineHeight:De,capHeight:Re,xHeight:Fe,baseline:Je}=ke.fontData;De>we.lineHeight&&(we.lineHeight=De);const me=Je-we.baseline;me<0&&(we.baseline+=me,we.cap+=me,we.ex+=me),we.cap=Math.max(we.cap,we.baseline+Re),we.ex=Math.max(we.ex,we.baseline+Fe)}we.baseline-=Z,we.cap-=Z,we.ex-=Z,Z+=we.lineHeight});let te=0,Ae=0;if(H&&(typeof H=="number"?te=-H:typeof H=="string"&&(te=-G*(H==="left"?0:H==="center"?.5:H==="right"?1:A(H)))),y&&(typeof y=="number"?Ae=-y:typeof y=="string"&&(Ae=y==="top"?0:y==="top-baseline"?-B[0].baseline:y==="top-cap"?-B[0].cap:y==="top-ex"?-B[0].ex:y==="middle"?Z/2:y==="bottom"?Z:y==="bottom-baseline"?-B[B.length-1].baseline:A(y)*Z)),!x){const we=e.getEmbeddingLevels(g,I);N=new Uint16Array(_e),oe=new Uint8Array(_e),ee=new Float32Array(_e*2),ue={},Ie=[1/0,1/0,-1/0,-1/0],de=[],F&&(xe=new Float32Array(g.length*4)),J&&(pe=new Uint8Array(_e*3));let Ee=0,fe=-1,ke=-1,De,Re;if(B.forEach((Fe,Je)=>{let{count:me,width:Ue}=Fe;if(me>0){let je=0;for(let Pe=me;Pe--&&Fe.glyphAt(Pe).glyphObj.isWhitespace;)je++;let nt=0,W=0;if(O==="center")nt=(G-Ue)/2;else if(O==="right")nt=G-Ue;else if(O==="justify"&&Fe.isSoftWrapped){let Pe=0;for(let ye=me-je;ye--;)Fe.glyphAt(ye).glyphObj.isWhitespace&&Pe++;W=(G-Ue)/Pe}if(W||nt){let Pe=0;for(let ye=0;ye<me;ye++){let ht=Fe.glyphAt(ye);const pt=ht.glyphObj;ht.x+=nt+Pe,W!==0&&pt.isWhitespace&&ye<me-je&&(Pe+=W,ht.width+=W)}}const Ce=e.getReorderSegments(g,we,Fe.glyphAt(0).charIndex,Fe.glyphAt(Fe.count-1).charIndex);for(let Pe=0;Pe<Ce.length;Pe++){const[ye,ht]=Ce[Pe];let pt=1/0,$e=-1/0;for(let Ze=0;Ze<me;Ze++)if(Fe.glyphAt(Ze).charIndex>=ye){let bt=Ze,Nt=Ze;for(;Nt<me;Nt++){let Rt=Fe.glyphAt(Nt);if(Rt.charIndex>ht)break;Nt<me-je&&(pt=Math.min(pt,Rt.x),$e=Math.max($e,Rt.x+Rt.width))}for(let Rt=bt;Rt<Nt;Rt++){const Yr=Fe.glyphAt(Rt);Yr.x=$e-(Yr.x+Yr.width-pt)}break}}let ne;const Me=Pe=>ne=Pe;for(let Pe=0;Pe<me;Pe++){const ye=Fe.glyphAt(Pe);ne=ye.glyphObj;const ht=ne.index,pt=we.levels[ye.charIndex]&1;if(pt){const $e=e.getMirroredCharacter(g[ye.charIndex]);$e&&ye.fontData.fontObj.forEachGlyph($e,0,0,Me)}if(F){const{charIndex:$e,fontData:Ze}=ye,bt=ye.x+te,Nt=ye.x+ye.width+te;xe[$e*4]=pt?Nt:bt,xe[$e*4+1]=pt?bt:Nt,xe[$e*4+2]=Fe.baseline+Ze.caretBottom+Ae,xe[$e*4+3]=Fe.baseline+Ze.caretTop+Ae;const Rt=$e-fe;Rt>1&&c(xe,fe,Rt),fe=$e}if(J){const{charIndex:$e}=ye;for(;$e>ke;)ke++,J.hasOwnProperty(ke)&&(Re=J[ke])}if(!ne.isWhitespace&&!ne.isEmpty){const $e=Ee++,{fontSizeMult:Ze,src:bt,index:Nt}=ye.fontData,Rt=ue[bt]||(ue[bt]={});Rt[ht]||(Rt[ht]={path:ne.path,pathBounds:[ne.xMin,ne.yMin,ne.xMax,ne.yMax]});const Yr=ye.x+te,Mr=ye.y+Fe.baseline+Ae;ee[$e*2]=Yr,ee[$e*2+1]=Mr;const $r=Yr+ne.xMin*Ze,Ai=Mr+ne.yMin*Ze,wi=Yr+ne.xMax*Ze,ci=Mr+ne.yMax*Ze;$r<Ie[0]&&(Ie[0]=$r),Ai<Ie[1]&&(Ie[1]=Ai),wi>Ie[2]&&(Ie[2]=wi),ci>Ie[3]&&(Ie[3]=ci),$e%X===0&&(De={start:$e,end:$e,rect:[1/0,1/0,-1/0,-1/0]},de.push(De)),De.end++;const mr=De.rect;if($r<mr[0]&&(mr[0]=$r),Ai<mr[1]&&(mr[1]=Ai),wi>mr[2]&&(mr[2]=wi),ci>mr[3]&&(mr[3]=ci),N[$e]=ht,oe[$e]=Nt,J){const Pr=$e*3;pe[Pr]=Re>>16&255,pe[Pr+1]=Re>>8&255,pe[Pr+2]=Re&255}}}}}),xe){const Fe=g.length-fe;Fe>1&&c(xe,fe,Fe)}}const ie=[];Te.forEach(({index:we,src:Ee,unitsPerEm:fe,ascender:ke,descender:De,lineHeight:Re,capHeight:Fe,xHeight:Je})=>{ie[we]={src:Ee,unitsPerEm:fe,ascender:ke,descender:De,lineHeight:Re,capHeight:Fe,xHeight:Je}}),j.typesetting=l()-be,K({glyphIds:N,glyphFontIndices:oe,glyphPositions:ee,glyphData:ue,fontData:ie,caretPositions:xe,glyphColors:pe,chunkedBounds:de,fontSize:d,topBaseline:Ae+B[0].baseline,blockBounds:[te,Ae-Z,te+G,Ae],visibleBounds:Ie,timings:j})})}function o(g,p){a({...g,metricsOnly:!0},w=>{const[f,d,D,m]=w.blockBounds;p({width:D-f,height:m-d})})}function A(g){let p=g.match(/^([\d.]+)%$/),w=p?parseFloat(p[1]):NaN;return isNaN(w)?0:w/100}function c(g,p,w){const f=g[p*4],d=g[p*4+1],D=g[p*4+2],m=g[p*4+3],C=(d-f)/w;for(let S=0;S<w;S++){const P=(p+S)*4;g[P]=f+C*S,g[P+1]=f+C*(S+1),g[P+2]=D,g[P+3]=m}}function l(){return(self.performance||Date).now()}function h(){this.data=[]}const u=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/u.length)},glyphAt(g){let p=h.flyweight;return p.data=this.data,p.index=g,p},splitAt(g){let p=new h;return p.data=this.data.splice(g*u.length),p}},h.flyweight=u.reduce((g,p,w,f)=>(Object.defineProperty(g,p,{get(){return this.data[this.index*u.length+w]},set(d){this.data[this.index*u.length+w]=d}}),g),{data:null,index:0}),{typeset:a,measure:o}}function Lw(){var r=function(e){function t(J,K,L,j,se,k,N,oe){var ee=1-N;oe.x=ee*ee*J+2*ee*N*L+N*N*se,oe.y=ee*ee*K+2*ee*N*j+N*N*k}function i(J,K,L,j,se,k,N,oe,ee,ue){var pe=1-ee;ue.x=pe*pe*pe*J+3*pe*pe*ee*L+3*pe*ee*ee*se+ee*ee*ee*N,ue.y=pe*pe*pe*K+3*pe*pe*ee*j+3*pe*ee*ee*k+ee*ee*ee*oe}function n(J,K){for(var L=/([MLQCZ])([^MLQCZ]*)/g,j,se,k,N,oe;j=L.exec(J);){var ee=j[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ue){return parseFloat(ue)});switch(j[1]){case"M":N=se=ee[0],oe=k=ee[1];break;case"L":(ee[0]!==N||ee[1]!==oe)&&K("L",N,oe,N=ee[0],oe=ee[1]);break;case"Q":{K("Q",N,oe,N=ee[2],oe=ee[3],ee[0],ee[1]);break}case"C":{K("C",N,oe,N=ee[4],oe=ee[5],ee[0],ee[1],ee[2],ee[3]);break}case"Z":(N!==se||oe!==k)&&K("L",N,oe,se,k);break}}}function s(J,K,L){L===void 0&&(L=16);var j={x:0,y:0};n(J,function(se,k,N,oe,ee,ue,pe,xe,Ie){switch(se){case"L":K(k,N,oe,ee);break;case"Q":{for(var de=k,G=N,_e=1;_e<L;_e++)t(k,N,ue,pe,oe,ee,_e/(L-1),j),K(de,G,j.x,j.y),de=j.x,G=j.y;break}case"C":{for(var Se=k,Te=N,be=1;be<L;be++)i(k,N,ue,pe,xe,Ie,oe,ee,be/(L-1),j),K(Se,Te,j.x,j.y),Se=j.x,Te=j.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",A=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function l(J,K){var L=J.getContext?J.getContext("webgl",c):J,j=A.get(L);if(!j){let pe=function(Se){var Te=k[Se];if(!Te&&(Te=k[Se]=L.getExtension(Se),!Te))throw new Error(Se+" not supported");return Te},xe=function(Se,Te){var be=L.createShader(Te);return L.shaderSource(be,Se),L.compileShader(be),be},Ie=function(Se,Te,be,Be){if(!N[Se]){var Qe={},Q={},B=L.createProgram();L.attachShader(B,xe(Te,L.VERTEX_SHADER)),L.attachShader(B,xe(be,L.FRAGMENT_SHADER)),L.linkProgram(B),N[Se]={program:B,transaction:function(Z){L.useProgram(B),Z({setUniform:function(te,Ae){for(var ie=[],we=arguments.length-2;we-- >0;)ie[we]=arguments[we+2];var Ee=Q[Ae]||(Q[Ae]=L.getUniformLocation(B,Ae));L["uniform"+te].apply(L,[Ee].concat(ie))},setAttribute:function(te,Ae,ie,we,Ee){var fe=Qe[te];fe||(fe=Qe[te]={buf:L.createBuffer(),loc:L.getAttribLocation(B,te),data:null}),L.bindBuffer(L.ARRAY_BUFFER,fe.buf),L.vertexAttribPointer(fe.loc,Ae,L.FLOAT,!1,0,0),L.enableVertexAttribArray(fe.loc),se?L.vertexAttribDivisor(fe.loc,we):pe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(fe.loc,we),Ee!==fe.data&&(L.bufferData(L.ARRAY_BUFFER,Ee,ie),fe.data=Ee)}})}}}N[Se].transaction(Be)},de=function(Se,Te){ee++;try{L.activeTexture(L.TEXTURE0+ee);var be=oe[Se];be||(be=oe[Se]=L.createTexture(),L.bindTexture(L.TEXTURE_2D,be),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MIN_FILTER,L.NEAREST),L.texParameteri(L.TEXTURE_2D,L.TEXTURE_MAG_FILTER,L.NEAREST)),L.bindTexture(L.TEXTURE_2D,be),Te(be,ee)}finally{ee--}},G=function(Se,Te,be){var Be=L.createFramebuffer();ue.push(Be),L.bindFramebuffer(L.FRAMEBUFFER,Be),L.activeTexture(L.TEXTURE0+Te),L.bindTexture(L.TEXTURE_2D,Se),L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se,0);try{be(Be)}finally{L.deleteFramebuffer(Be),L.bindFramebuffer(L.FRAMEBUFFER,ue[--ue.length-1]||null)}},_e=function(){k={},N={},oe={},ee=-1,ue.length=0};var se=typeof WebGL2RenderingContext<"u"&&L instanceof WebGL2RenderingContext,k={},N={},oe={},ee=-1,ue=[];L.canvas.addEventListener("webglcontextlost",function(Se){_e(),Se.preventDefault()},!1),A.set(L,j={gl:L,isWebGL2:se,getExtension:pe,withProgram:Ie,withTexture:de,withTextureFramebuffer:G,handleContextLoss:_e})}K(j)}function h(J,K,L,j,se,k,N,oe){N===void 0&&(N=15),oe===void 0&&(oe=null),l(J,function(ee){var ue=ee.gl,pe=ee.withProgram,xe=ee.withTexture;xe("copy",function(Ie,de){ue.texImage2D(ue.TEXTURE_2D,0,ue.RGBA,se,k,0,ue.RGBA,ue.UNSIGNED_BYTE,K),pe("copy",a,o,function(G){var _e=G.setUniform,Se=G.setAttribute;Se("aUV",2,ue.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),_e("1i","image",de),ue.bindFramebuffer(ue.FRAMEBUFFER,oe||null),ue.disable(ue.BLEND),ue.colorMask(N&8,N&4,N&2,N&1),ue.viewport(L,j,se,k),ue.scissor(L,j,se,k),ue.drawArrays(ue.TRIANGLES,0,3)})})})}function u(J,K,L){var j=J.width,se=J.height;l(J,function(k){var N=k.gl,oe=new Uint8Array(j*se*4);N.readPixels(0,0,j,se,N.RGBA,N.UNSIGNED_BYTE,oe),J.width=K,J.height=L,h(N,oe,0,0,j,se)})}var g=Object.freeze({__proto__:null,withWebGLContext:l,renderImageData:h,resizeWebGLCanvasWithoutClearing:u});function p(J,K,L,j,se,k){k===void 0&&(k=1);var N=new Uint8Array(J*K),oe=j[2]-j[0],ee=j[3]-j[1],ue=[];s(L,function(Se,Te,be,Be){ue.push({x1:Se,y1:Te,x2:be,y2:Be,minX:Math.min(Se,be),minY:Math.min(Te,Be),maxX:Math.max(Se,be),maxY:Math.max(Te,Be)})}),ue.sort(function(Se,Te){return Se.maxX-Te.maxX});for(var pe=0;pe<J;pe++)for(var xe=0;xe<K;xe++){var Ie=G(j[0]+oe*(pe+.5)/J,j[1]+ee*(xe+.5)/K),de=Math.pow(1-Math.abs(Ie)/se,k)/2;Ie<0&&(de=1-de),de=Math.max(0,Math.min(255,Math.round(de*255))),N[xe*J+pe]=de}return N;function G(Se,Te){for(var be=1/0,Be=1/0,Qe=ue.length;Qe--;){var Q=ue[Qe];if(Q.maxX+Be<=Se)break;if(Se+Be>Q.minX&&Te-Be<Q.maxY&&Te+Be>Q.minY){var B=d(Se,Te,Q.x1,Q.y1,Q.x2,Q.y2);B<be&&(be=B,Be=Math.sqrt(be))}}return _e(Se,Te)&&(Be=-Be),Be}function _e(Se,Te){for(var be=0,Be=ue.length;Be--;){var Qe=ue[Be];if(Qe.maxX<=Se)break;var Q=Qe.y1>Te!=Qe.y2>Te&&Se<(Qe.x2-Qe.x1)*(Te-Qe.y1)/(Qe.y2-Qe.y1)+Qe.x1;Q&&(be+=Qe.y1<Qe.y2?1:-1)}return be!==0}}function w(J,K,L,j,se,k,N,oe,ee,ue){k===void 0&&(k=1),oe===void 0&&(oe=0),ee===void 0&&(ee=0),ue===void 0&&(ue=0),f(J,K,L,j,se,k,N,null,oe,ee,ue)}function f(J,K,L,j,se,k,N,oe,ee,ue,pe){k===void 0&&(k=1),ee===void 0&&(ee=0),ue===void 0&&(ue=0),pe===void 0&&(pe=0);for(var xe=p(J,K,L,j,se,k),Ie=new Uint8Array(xe.length*4),de=0;de<xe.length;de++)Ie[de*4+pe]=xe[de];h(N,Ie,ee,ue,J,K,1<<3-pe,oe)}function d(J,K,L,j,se,k){var N=se-L,oe=k-j,ee=N*N+oe*oe,ue=ee?Math.max(0,Math.min(1,((J-L)*N+(K-j)*oe)/ee)):0,pe=J-(L+ue*N),xe=K-(j+ue*oe);return pe*pe+xe*xe}var D=Object.freeze({__proto__:null,generate:p,generateIntoCanvas:w,generateIntoFramebuffer:f}),m="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",C="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",S="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",P=new Float32Array([0,0,2,0,0,2]),I=null,O=!1,z={},v=new WeakMap;function M(J){if(!O&&!R(J))throw new Error("WebGL generation not supported")}function H(J,K,L,j,se,k,N){if(k===void 0&&(k=1),N===void 0&&(N=null),!N&&(N=I,!N)){var oe=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!oe)throw new Error("OffscreenCanvas or DOM canvas not supported");N=I=oe.getContext("webgl",{depth:!1})}M(N);var ee=new Uint8Array(J*K*4);l(N,function(Ie){var de=Ie.gl,G=Ie.withTexture,_e=Ie.withTextureFramebuffer;G("readable",function(Se,Te){de.texImage2D(de.TEXTURE_2D,0,de.RGBA,J,K,0,de.RGBA,de.UNSIGNED_BYTE,null),_e(Se,Te,function(be){x(J,K,L,j,se,k,de,be,0,0,0),de.readPixels(0,0,J,K,de.RGBA,de.UNSIGNED_BYTE,ee)})})});for(var ue=new Uint8Array(J*K),pe=0,xe=0;pe<ee.length;pe+=4)ue[xe++]=ee[pe];return ue}function y(J,K,L,j,se,k,N,oe,ee,ue){k===void 0&&(k=1),oe===void 0&&(oe=0),ee===void 0&&(ee=0),ue===void 0&&(ue=0),x(J,K,L,j,se,k,N,null,oe,ee,ue)}function x(J,K,L,j,se,k,N,oe,ee,ue,pe){k===void 0&&(k=1),ee===void 0&&(ee=0),ue===void 0&&(ue=0),pe===void 0&&(pe=0),M(N);var xe=[];s(L,function(Ie,de,G,_e){xe.push(Ie,de,G,_e)}),xe=new Float32Array(xe),l(N,function(Ie){var de=Ie.gl,G=Ie.isWebGL2,_e=Ie.getExtension,Se=Ie.withProgram,Te=Ie.withTexture,be=Ie.withTextureFramebuffer,Be=Ie.handleContextLoss;if(Te("rawDistances",function(Qe,Q){(J!==Qe._lastWidth||K!==Qe._lastHeight)&&de.texImage2D(de.TEXTURE_2D,0,de.RGBA,Qe._lastWidth=J,Qe._lastHeight=K,0,de.RGBA,de.UNSIGNED_BYTE,null),Se("main",m,C,function(B){var Z=B.setAttribute,te=B.setUniform,Ae=!G&&_e("ANGLE_instanced_arrays"),ie=!G&&_e("EXT_blend_minmax");Z("aUV",2,de.STATIC_DRAW,0,P),Z("aLineSegment",4,de.DYNAMIC_DRAW,1,xe),te.apply(void 0,["4f","uGlyphBounds"].concat(j)),te("1f","uMaxDistance",se),te("1f","uExponent",k),be(Qe,Q,function(we){de.enable(de.BLEND),de.colorMask(!0,!0,!0,!0),de.viewport(0,0,J,K),de.scissor(0,0,J,K),de.blendFunc(de.ONE,de.ONE),de.blendEquationSeparate(de.FUNC_ADD,G?de.MAX:ie.MAX_EXT),de.clear(de.COLOR_BUFFER_BIT),G?de.drawArraysInstanced(de.TRIANGLES,0,3,xe.length/4):Ae.drawArraysInstancedANGLE(de.TRIANGLES,0,3,xe.length/4)})}),Se("post",a,S,function(B){B.setAttribute("aUV",2,de.STATIC_DRAW,0,P),B.setUniform("1i","tex",Q),de.bindFramebuffer(de.FRAMEBUFFER,oe),de.disable(de.BLEND),de.colorMask(pe===0,pe===1,pe===2,pe===3),de.viewport(ee,ue,J,K),de.scissor(ee,ue,J,K),de.drawArrays(de.TRIANGLES,0,3)})}),de.isContextLost())throw Be(),new Error("webgl context lost")})}function R(J){var K=!J||J===I?z:J.canvas||J,L=v.get(K);if(L===void 0){O=!0;var j=null;try{var se=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],k=H(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,J);L=k&&se.length===k.length&&k.every(function(N,oe){return N===se[oe]}),L||(j="bad trial run results",console.info(se,k))}catch(N){L=!1,j=N.message}j&&console.warn("WebGL SDF generation not supported:",j),O=!1,v.set(K,L)}return L}var T=Object.freeze({__proto__:null,generate:H,generateIntoCanvas:y,generateIntoFramebuffer:x,isSupported:R});function F(J,K,L,j,se,k){se===void 0&&(se=Math.max(j[2]-j[0],j[3]-j[1])/2),k===void 0&&(k=1);try{return H.apply(T,arguments)}catch(N){return console.info("WebGL SDF generation failed, falling back to JS",N),p.apply(D,arguments)}}function X(J,K,L,j,se,k,N,oe,ee,ue){se===void 0&&(se=Math.max(j[2]-j[0],j[3]-j[1])/2),k===void 0&&(k=1),oe===void 0&&(oe=0),ee===void 0&&(ee=0),ue===void 0&&(ue=0);try{return y.apply(T,arguments)}catch(pe){return console.info("WebGL SDF generation failed, falling back to JS",pe),w.apply(D,arguments)}}return e.forEachPathCommand=n,e.generate=F,e.generateIntoCanvas=X,e.javascript=D,e.pathToLineSegments=s,e.webgl=T,e.webglUtils=g,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return r}const Gs=()=>(self.performance||Date).now(),rl=Lw();let Rw;function B4(r,e,t,i,n,s,a,o,A,c,l=!0){return l?D4(r,e,t,i,n,s,a,o,A,c).then(null,h=>(Rw||(console.warn("WebGL SDF generation failed, falling back to JS",h),Rw=!0),Uw(r,e,t,i,n,s,a,o,A,c))):Uw(r,e,t,i,n,s,a,o,A,c)}const il=[],E4=5;let gg=0;function Fw(){const r=Gs();for(;il.length&&Gs()-r<E4;)il.shift()();gg=il.length?setTimeout(Fw,0):0}const D4=(...r)=>new Promise((e,t)=>{il.push(()=>{const i=Gs();try{rl.webgl.generateIntoCanvas(...r),e({timing:Gs()-i})}catch(n){t(n)}}),gg||(gg=setTimeout(Fw,0))}),y4=4,I4=2e3,kw={};let M4=0;function Uw(r,e,t,i,n,s,a,o,A,c){const l="TroikaTextSDFGenerator_JS_"+M4++%y4;let h=kw[l];return h||(h=kw[l]={workerModule:Ya({name:l,workerId:l,dependencies:[Lw,Gs],init(u,g){const p=u().javascript.generate;return function(...w){const f=g();return{textureData:p(...w),timing:g()-f}}},getTransferables(u){return[u.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(r,e,t,i,n,s).then(({textureData:u,timing:g})=>{const p=Gs(),w=new Uint8Array(u.length*4);for(let f=0;f<u.length;f++)w[f*4+c]=u[f];return rl.webglUtils.renderImageData(a,w,o,A,r,e,1<<3-c),g+=Gs()-p,--h.requests===0&&(h.idleTimer=setTimeout(()=>{h4(l)},I4)),{timing:g}})}function P4(r){r._warm||(rl.webgl.isSupported(r),r._warm=!0)}const Q4=rl.webglUtils.resizeWebGLCanvasWithoutClearing;function x4(){var r=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(Be,Qe){i[Be]=1<<Qe+1,n[i[Be]]=Be}),Object.freeze(i);var s=i.LRI|i.RLI|i.FSI,a=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,A=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|s|i.PDI|A,l=null;function h(){if(!l){l=new Map;var Be=function(Q){if(t.hasOwnProperty(Q)){var B=0;t[Q].split(",").forEach(function(Z){var te=Z.split("+"),Ae=te[0],ie=te[1];Ae=parseInt(Ae,36),ie=ie?parseInt(ie,36):0,l.set(B+=Ae,i[Q]);for(var we=0;we<ie;we++)l.set(++B,i[Q])})}};for(var Qe in t)Be(Qe)}}function u(Be){return h(),l.get(Be.codePointAt(0))||i.L}function g(Be){return n[u(Be)]}var p={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function w(Be,Qe){var Q=36,B=0,Z=new Map,te=Qe&&new Map,Ae;return Be.split(",").forEach(function ie(we){if(we.indexOf("+")!==-1)for(var Ee=+we;Ee--;)ie(Ae);else{Ae=we;var fe=we.split(">"),ke=fe[0],De=fe[1];ke=String.fromCodePoint(B+=parseInt(ke,Q)),De=String.fromCodePoint(B+=parseInt(De,Q)),Z.set(ke,De),Qe&&te.set(De,ke)}}),{map:Z,reverseMap:te}}var f,d,D;function m(){if(!f){var Be=w(p.pairs,!0),Qe=Be.map,Q=Be.reverseMap;f=Qe,d=Q,D=w(p.canonical,!1).map}}function C(Be){return m(),f.get(Be)||null}function S(Be){return m(),d.get(Be)||null}function P(Be){return m(),D.get(Be)||null}var I=i.L,O=i.R,z=i.EN,v=i.ES,M=i.ET,H=i.AN,y=i.CS,x=i.B,R=i.S,T=i.ON,F=i.BN,X=i.NSM,J=i.AL,K=i.LRO,L=i.RLO,j=i.LRE,se=i.RLE,k=i.PDF,N=i.LRI,oe=i.RLI,ee=i.FSI,ue=i.PDI;function pe(Be,Qe){for(var Q=125,B=new Uint32Array(Be.length),Z=0;Z<Be.length;Z++)B[Z]=u(Be[Z]);var te=new Map;function Ae(ut,Et){var Dt=B[ut];B[ut]=Et,te.set(Dt,te.get(Dt)-1),Dt&o&&te.set(o,te.get(o)-1),te.set(Et,(te.get(Et)||0)+1),Et&o&&te.set(o,(te.get(o)||0)+1)}for(var ie=new Uint8Array(Be.length),we=new Map,Ee=[],fe=null,ke=0;ke<Be.length;ke++)fe||Ee.push(fe={start:ke,end:Be.length-1,level:Qe==="rtl"?1:Qe==="ltr"?0:Ve(ke,!1)}),B[ke]&x&&(fe.end=ke,fe=null);for(var De=se|j|L|K|s|ue|k|x,Re=function(ut){return ut+(ut&1?1:2)},Fe=function(ut){return ut+(ut&1?2:1)},Je=0;Je<Ee.length;Je++){fe=Ee[Je];var me=[{_level:fe.level,_override:0,_isolate:0}],Ue=void 0,je=0,nt=0,W=0;te.clear();for(var Ce=fe.start;Ce<=fe.end;Ce++){var ne=B[Ce];if(Ue=me[me.length-1],te.set(ne,(te.get(ne)||0)+1),ne&o&&te.set(o,(te.get(o)||0)+1),ne&De)if(ne&(se|j)){ie[Ce]=Ue._level;var Me=(ne===se?Fe:Re)(Ue._level);Me<=Q&&!je&&!nt?me.push({_level:Me,_override:0,_isolate:0}):je||nt++}else if(ne&(L|K)){ie[Ce]=Ue._level;var Pe=(ne===L?Fe:Re)(Ue._level);Pe<=Q&&!je&&!nt?me.push({_level:Pe,_override:ne&L?O:I,_isolate:0}):je||nt++}else if(ne&s){ne&ee&&(ne=Ve(Ce+1,!0)===1?oe:N),ie[Ce]=Ue._level,Ue._override&&Ae(Ce,Ue._override);var ye=(ne===oe?Fe:Re)(Ue._level);ye<=Q&&je===0&&nt===0?(W++,me.push({_level:ye,_override:0,_isolate:1,_isolInitIndex:Ce})):je++}else if(ne&ue){if(je>0)je--;else if(W>0){for(nt=0;!me[me.length-1]._isolate;)me.pop();var ht=me[me.length-1]._isolInitIndex;ht!=null&&(we.set(ht,Ce),we.set(Ce,ht)),me.pop(),W--}Ue=me[me.length-1],ie[Ce]=Ue._level,Ue._override&&Ae(Ce,Ue._override)}else ne&k?(je===0&&(nt>0?nt--:!Ue._isolate&&me.length>1&&(me.pop(),Ue=me[me.length-1])),ie[Ce]=Ue._level):ne&x&&(ie[Ce]=fe.level);else ie[Ce]=Ue._level,Ue._override&&ne!==F&&Ae(Ce,Ue._override)}for(var pt=[],$e=null,Ze=fe.start;Ze<=fe.end;Ze++){var bt=B[Ze];if(!(bt&A)){var Nt=ie[Ze],Rt=bt&s,Yr=bt===ue;$e&&Nt===$e._level?($e._end=Ze,$e._endsWithIsolInit=Rt):pt.push($e={_start:Ze,_end:Ze,_level:Nt,_startsWithPDI:Yr,_endsWithIsolInit:Rt})}}for(var Mr=[],$r=0;$r<pt.length;$r++){var Ai=pt[$r];if(!Ai._startsWithPDI||Ai._startsWithPDI&&!we.has(Ai._start)){for(var wi=[$e=Ai],ci=void 0;$e&&$e._endsWithIsolInit&&(ci=we.get($e._end))!=null;)for(var mr=$r+1;mr<pt.length;mr++)if(pt[mr]._start===ci){wi.push($e=pt[mr]);break}for(var Pr=[],ss=0;ss<wi.length;ss++)for(var cr=wi[ss],Ys=cr._start;Ys<=cr._end;Ys++)Pr.push(Ys);for(var uA=ie[Pr[0]],qa=fe.level,b=Pr[0]-1;b>=0;b--)if(!(B[b]&A)){qa=ie[b];break}var $=Pr[Pr.length-1],le=ie[$],he=fe.level;if(!(B[$]&s)){for(var q=$+1;q<=fe.end;q++)if(!(B[q]&A)){he=ie[q];break}}Mr.push({_seqIndices:Pr,_sosType:Math.max(qa,uA)%2?O:I,_eosType:Math.max(he,le)%2?O:I})}}for(var He=0;He<Mr.length;He++){var Ye=Mr[He],ve=Ye._seqIndices,Ke=Ye._sosType,At=Ye._eosType,tt=ie[ve[0]]&1?O:I;if(te.get(X))for(var it=0;it<ve.length;it++){var yt=ve[it];if(B[yt]&X){for(var Ot=Ke,Ft=it-1;Ft>=0;Ft--)if(!(B[ve[Ft]]&A)){Ot=B[ve[Ft]];break}Ae(yt,Ot&(s|ue)?T:Ot)}}if(te.get(z))for(var Xt=0;Xt<ve.length;Xt++){var Lt=ve[Xt];if(B[Lt]&z)for(var We=Xt-1;We>=-1;We--){var lr=We===-1?Ke:B[ve[We]];if(lr&a){lr===J&&Ae(Lt,H);break}}}if(te.get(J))for(var li=0;li<ve.length;li++){var Or=ve[li];B[Or]&J&&Ae(Or,O)}if(te.get(v)||te.get(y))for(var hi=1;hi<ve.length-1;hi++){var Cr=ve[hi];if(B[Cr]&(v|y)){for(var ui=0,kt=0,Lr=hi-1;Lr>=0&&(ui=B[ve[Lr]],!!(ui&A));Lr--);for(var Ui=hi+1;Ui<ve.length&&(kt=B[ve[Ui]],!!(kt&A));Ui++);ui===kt&&(B[Cr]===v?ui===z:ui&(z|H))&&Ae(Cr,ui)}}if(te.get(z))for(var zt=0;zt<ve.length;zt++){var Xs=ve[zt];if(B[Xs]&z){for(var Qn=zt-1;Qn>=0&&B[ve[Qn]]&(M|A);Qn--)Ae(ve[Qn],z);for(zt++;zt<ve.length&&B[ve[zt]]&(M|A|z);zt++)B[ve[zt]]!==z&&Ae(ve[zt],z)}}if(te.get(M)||te.get(v)||te.get(y))for(var on=0;on<ve.length;on++){var pl=ve[on];if(B[pl]&(M|v|y)){Ae(pl,T);for(var xn=on-1;xn>=0&&B[ve[xn]]&A;xn--)Ae(ve[xn],T);for(var js=on+1;js<ve.length&&B[ve[js]]&A;js++)Ae(ve[js],T)}}if(te.get(z))for(var _a=0,Js=Ke;_a<ve.length;_a++){var wl=ve[_a],An=B[wl];An&z?Js===I&&Ae(wl,I):An&a&&(Js=An)}if(te.get(o)){var bn=O|z|H,gA=bn|I,$a=[];{for(var as=[],Sn=0;Sn<ve.length;Sn++)if(B[ve[Sn]]&o){var Ks=Be[ve[Sn]],fA=void 0;if(C(Ks)!==null)if(as.length<63)as.push({char:Ks,seqIndex:Sn});else break;else if((fA=S(Ks))!==null)for(var os=as.length-1;os>=0;os--){var eo=as[os].char;if(eo===fA||eo===S(P(Ks))||C(P(eo))===Ks){$a.push([as[os].seqIndex,Sn]),as.length=os;break}}}$a.sort(function(ut,Et){return ut[0]-Et[0]})}for(var dA=0;dA<$a.length;dA++){for(var pA=$a[dA],Vs=pA[0],wA=pA[1],vl=!1,vi=0,to=Vs+1;to<wA;to++){var Ws=ve[to];if(B[Ws]&gA){vl=!0;var ml=B[Ws]&bn?O:I;if(ml===tt){vi=ml;break}}}if(vl&&!vi){vi=Ke;for(var cn=Vs-1;cn>=0;cn--){var vA=ve[cn];if(B[vA]&gA){var mA=B[vA]&bn?O:I;mA!==tt?vi=mA:vi=tt;break}}}if(vi){if(B[ve[Vs]]=B[ve[wA]]=vi,vi!==tt){for(var ln=Vs+1;ln<ve.length;ln++)if(!(B[ve[ln]]&A)){u(Be[ve[ln]])&X&&(B[ve[ln]]=vi);break}}if(vi!==tt){for(var Tn=wA+1;Tn<ve.length;Tn++)if(!(B[ve[Tn]]&A)){u(Be[ve[Tn]])&X&&(B[ve[Tn]]=vi);break}}}}for(var xi=0;xi<ve.length;xi++)if(B[ve[xi]]&o){for(var ro=xi,CA=xi,BA=Ke,Zs=xi-1;Zs>=0;Zs--)if(B[ve[Zs]]&A)ro=Zs;else{BA=B[ve[Zs]]&bn?O:I;break}for(var Cl=At,E=xi+1;E<ve.length;E++)if(B[ve[E]]&(o|A))CA=E;else{Cl=B[ve[E]]&bn?O:I;break}for(var Y=ro;Y<=CA;Y++)B[ve[Y]]=BA===Cl?BA:tt;xi=CA}}}for(var ae=fe.start;ae<=fe.end;ae++){var ge=ie[ae],Le=B[ae];if(ge&1?Le&(I|z|H)&&ie[ae]++:Le&O?ie[ae]++:Le&(H|z)&&(ie[ae]+=2),Le&A&&(ie[ae]=ae===0?fe.level:ie[ae-1]),ae===fe.end||u(Be[ae])&(R|x))for(var st=ae;st>=0&&u(Be[st])&c;st--)ie[st]=fe.level}}return{levels:ie,paragraphs:Ee};function Ve(ut,Et){for(var Dt=ut;Dt<Be.length;Dt++){var St=B[Dt];if(St&(O|J))return 1;if(St&(x|I)||Et&&St===ue)return 0;if(St&s){var Vt=ft(Dt);Dt=Vt===-1?Be.length:Vt}}return 0}function ft(ut){for(var Et=1,Dt=ut+1;Dt<Be.length;Dt++){var St=B[Dt];if(St&x)break;if(St&ue){if(--Et===0)return Dt}else St&s&&Et++}return-1}}var xe="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",Ie;function de(){if(!Ie){var Be=w(xe,!0),Qe=Be.map,Q=Be.reverseMap;Q.forEach(function(B,Z){Qe.set(Z,B)}),Ie=Qe}}function G(Be){return de(),Ie.get(Be)||null}function _e(Be,Qe,Q,B){var Z=Be.length;Q=Math.max(0,Q==null?0:+Q),B=Math.min(Z-1,B==null?Z-1:+B);for(var te=new Map,Ae=Q;Ae<=B;Ae++)if(Qe[Ae]&1){var ie=G(Be[Ae]);ie!==null&&te.set(Ae,ie)}return te}function Se(Be,Qe,Q,B){var Z=Be.length;Q=Math.max(0,Q==null?0:+Q),B=Math.min(Z-1,B==null?Z-1:+B);var te=[];return Qe.paragraphs.forEach(function(Ae){var ie=Math.max(Q,Ae.start),we=Math.min(B,Ae.end);if(ie<we){for(var Ee=Qe.levels.slice(ie,we+1),fe=we;fe>=ie&&u(Be[fe])&c;fe--)Ee[fe]=Ae.level;for(var ke=Ae.level,De=1/0,Re=0;Re<Ee.length;Re++){var Fe=Ee[Re];Fe>ke&&(ke=Fe),Fe<De&&(De=Fe|1)}for(var Je=ke;Je>=De;Je--)for(var me=0;me<Ee.length;me++)if(Ee[me]>=Je){for(var Ue=me;me+1<Ee.length&&Ee[me+1]>=Je;)me++;me>Ue&&te.push([Ue+ie,me+ie])}}}),te}function Te(Be,Qe,Q,B){var Z=be(Be,Qe,Q,B),te=[].concat(Be);return Z.forEach(function(Ae,ie){te[ie]=(Qe.levels[Ae]&1?G(Be[Ae]):null)||Be[Ae]}),te.join("")}function be(Be,Qe,Q,B){for(var Z=Se(Be,Qe,Q,B),te=[],Ae=0;Ae<Be.length;Ae++)te[Ae]=Ae;return Z.forEach(function(ie){for(var we=ie[0],Ee=ie[1],fe=te.slice(we,Ee+1),ke=fe.length;ke--;)te[Ee-ke]=fe[ke]}),te}return e.closingToOpeningBracket=S,e.getBidiCharType=u,e.getBidiCharTypeName=g,e.getCanonicalBracket=P,e.getEmbeddingLevels=pe,e.getMirroredCharacter=G,e.getMirroredCharactersMap=_e,e.getReorderSegments=Se,e.getReorderedIndices=be,e.getReorderedString=Te,e.openingToClosingBracket=C,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return r}const Xa={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},b4=new ot;function ja(){return(self.performance||Date).now()}const Gw=Object.create(null);function S4(r,e){r=H4({},r);const t=ja(),{defaultFontURL:i}=Xa,n=[];if(i&&n.push({label:"default",src:zw(i)}),r.font&&n.push({label:"user",src:zw(r.font)}),r.font=n,r.text=""+r.text,r.sdfGlyphSize=r.sdfGlyphSize||Xa.sdfGlyphSize,r.unicodeFontsURL=r.unicodeFontsURL||Xa.unicodeFontsURL,r.colorRanges!=null){let u={};for(let g in r.colorRanges)if(r.colorRanges.hasOwnProperty(g)){let p=r.colorRanges[g];typeof p!="number"&&(p=b4.set(p).getHex()),u[g]=p}r.colorRanges=u}Object.freeze(r);const{textureWidth:s,sdfExponent:a}=Xa,{sdfGlyphSize:o}=r,A=s/o*4;let c=Gw[o];if(!c){const u=new OffscreenCanvas(s,o*256/A);u.width=s,u.height=o*256/A,c=Gw[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:u,sdfTexture:new pr(u,void 0,void 0,void 0,br,br),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,T4(c)}const{sdfTexture:l,sdfCanvas:h}=c;L4(r).then(u=>{const{glyphIds:g,glyphFontIndices:p,fontData:w,glyphPositions:f,fontSize:d,timings:D}=u,m=[],C=new Float32Array(g.length*4);let S=0,P=0;const I=ja(),O=w.map(y=>{let x=c.glyphsByFont.get(y.src);return x||c.glyphsByFont.set(y.src,x=new Map),x});g.forEach((y,x)=>{const R=p[x],{src:T,unitsPerEm:F}=w[R];let X=O[R].get(y);if(!X){const{path:se,pathBounds:k}=u.glyphData[T][y],N=Math.max(k[2]-k[0],k[3]-k[1])/o*(Xa.sdfMargin*o+.5),oe=c.glyphCount++,ee=[k[0]-N,k[1]-N,k[2]+N,k[3]+N];O[R].set(y,X={path:se,atlasIndex:oe,sdfViewBox:ee}),m.push(X)}const{sdfViewBox:J}=X,K=f[P++],L=f[P++],j=d/F;C[S++]=K+J[0]*j,C[S++]=L+J[1]*j,C[S++]=K+J[2]*j,C[S++]=L+J[3]*j,g[x]=X.atlasIndex}),D.quads=(D.quads||0)+(ja()-I);const z=ja();D.sdf={};const v=h.height,M=Math.ceil(c.glyphCount/A),H=Math.pow(2,Math.ceil(Math.log2(M*o)));H>v&&(console.info(`Increasing SDF texture size ${v}->${H}`),Q4(h,s,H),l.dispose()),Promise.all(m.map(y=>Nw(y,c,r.gpuAccelerateSDF).then(({timing:x})=>{D.sdf[y.atlasIndex]=x}))).then(()=>{m.length&&!c.contextLost&&(Yw(c),l.needsUpdate=!0),D.sdfTotal=ja()-z,D.total=ja()-t,e(Object.freeze({parameters:r,sdfTexture:l,sdfGlyphSize:o,sdfExponent:a,glyphBounds:C,glyphAtlasIndices:g,glyphColors:u.glyphColors,caretPositions:u.caretPositions,chunkedBounds:u.chunkedBounds,ascender:u.ascender,descender:u.descender,lineHeight:u.lineHeight,capHeight:u.capHeight,xHeight:u.xHeight,topBaseline:u.topBaseline,blockBounds:u.blockBounds,visibleBounds:u.visibleBounds,timings:u.timings}))})}),Promise.resolve().then(()=>{c.contextLost||P4(h)})}function Nw({path:r,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:s},a){if(s)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:A}=Xa,c=Math.max(t[2]-t[0],t[3]-t[1]),l=Math.floor(e/4),h=l%(o/i)*i,u=Math.floor(l/(o/i))*i,g=e%4;return B4(i,i,r,t,c,A,n,h,u,g,a)}function T4(r){const e=r.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),r.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),r.contextLost=!1;const i=[];r.glyphsByFont.forEach(n=>{n.forEach(s=>{i.push(Nw(s,r,!0))})}),Promise.all(i).then(()=>{Yw(r),r.sdfTexture.needsUpdate=!0})})}function H4(r,e){for(let t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r}let nl;function zw(r){return nl||(nl=typeof document>"u"?{}:document.createElement("a")),nl.href=r,nl.href}function Yw(r){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=r,{width:i,height:n}=e,s=r.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==i*n*4)&&(a=new Uint8Array(i*n*4),t.image={width:i,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),s.readPixels(0,0,i,n,s.RGBA,s.UNSIGNED_BYTE,a)}}const O4=Ya({name:"Typesetter",dependencies:[C4,m4,x4],init(r,e,t){return r(e,t())}}),L4=Ya({name:"Typesetter",dependencies:[O4],init(r){return function(e){return new Promise(t=>{r.typeset(e,t)})}},getTransferables(r){const e=[];for(let t in r)r[t]&&r[t].buffer&&e.push(r[t].buffer);return e}}),Xw={};function R4(r){let e=Xw[r];if(!e){const t=new Es(1,1,r,r),i=t.clone(),n=t.attributes,s=i.attributes,a=new Nr,o=n.uv.count;for(let A=0;A<o;A++)s.position.array[A*3]*=-1,s.normal.array[A*3+2]*=-1;["position","normal","uv"].forEach(A=>{a.setAttribute(A,new ir([...n[A].array,...s[A].array],n[A].itemSize))}),a.setIndex([...t.index.array,...i.index.array.map(A=>A+o)]),a.translate(.5,.5,0),e=Xw[r]=a}return e}const F4="aTroikaGlyphBounds",jw="aTroikaGlyphIndex",k4="aTroikaGlyphColor";class U4 extends yy{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new yi,this.boundingBox=new pn}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===dr?t/2:0,e===jr?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=R4(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,s){fg(this,F4,e,4),fg(this,jw,t,1),fg(this,k4,s,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:s,min:a,max:o,sin:A,cos:c}=Math,l=n/2,h=n*2,u=Math.abs(t),g=e[0]/u,p=e[2]/u,w=s((g+l)/h)!==s((p+l)/h)?-u:a(A(g)*u,A(p)*u),f=s((g-l)/h)!==s((p-l)/h)?u:o(A(g)*u,A(p)*u),d=s((g+n)/h)!==s((p+n)/h)?u*2:o(u-c(g)*u,u-c(p)*u);i.min.set(w,e[1],t<0?-d:0),i.max.set(f,e[3],t<0?0:d)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(jw).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let s=i[n].rect;if(s[1]<e.w&&s[3]>e.y&&s[0]<e.z&&s[2]>e.x)break}this.instanceCount=t}}function fg(r,e,t,i){const n=r.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(r.setAttribute(e,new vc(t,i)),delete r._maxInstanceCount,r.dispose()):n&&r.deleteAttribute(e)}const Jw=/\bvoid\s+main\s*\(\s*\)\s*{/g;function dg(r){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let s=wt[n];return s?dg(s):i}return r.replace(e,t)}const Tr=[];for(let r=0;r<256;r++)Tr[r]=(r<16?"0":"")+r.toString(16);function G4(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tr[r&255]+Tr[r>>8&255]+Tr[r>>16&255]+Tr[r>>24&255]+"-"+Tr[e&255]+Tr[e>>8&255]+"-"+Tr[e>>16&15|64]+Tr[e>>24&255]+"-"+Tr[t&63|128]+Tr[t>>8&255]+"-"+Tr[t>>16&255]+Tr[t>>24&255]+Tr[i&255]+Tr[i>>8&255]+Tr[i>>16&255]+Tr[i>>24&255]).toUpperCase()}const Ns=Object.assign||function(){let r=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r[n]=i[n])}return r},N4=Date.now(),Kw=new WeakMap,Vw=new Map;let z4=1e10;function pg(r,e){const t=J4(e);let i=Kw.get(r);if(i||Kw.set(r,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,s=function(c,l){r.onBeforeCompile.call(this,c,l);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let u=Vw[h];if(!u){const g=Y4(this,c,e,t);u=Vw[h]=g}c.vertexShader=u.vertexShader,c.fragmentShader=u.fragmentShader,Ns(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-N4}}),this[n]&&this[n](c)},a=function(){return o(e.chained?r:r.clone())},o=function(c){const l=Object.create(c,A);return Object.defineProperty(l,"baseMaterial",{value:r}),Object.defineProperty(l,"id",{value:z4++}),l.uuid=G4(),l.uniforms=Ns({},c.uniforms,e.uniforms),l.defines=Ns({},c.defines,e.defines),l.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",l.extensions=Ns({},c.extensions,e.extensions),l._listeners=void 0,l},A={constructor:{value:a},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return r.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return s},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return r.copy.call(this,c),!r.isShaderMaterial&&!r.isDerivedMaterial&&(Ns(this.extensions,c.extensions),Ns(this.defines,c.defines),Ns(this.uniforms,iu.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new r.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=pg(r.isDerivedMaterial?r.getDepthMaterial():new du({depthPacking:bh}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=pg(r.isDerivedMaterial?r.getDistanceMaterial():new pu,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:l}=this;c&&c.dispose(),l&&l.dispose(),r.dispose.call(this)}}};return i[t]=a,new a}function Y4(r,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:s,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:A,fragmentDefs:c,fragmentMainIntro:l,fragmentMainOutro:h,fragmentColorTransform:u,customRewriter:g,timeUniform:p}=i;if(s=s||"",a=a||"",o=o||"",c=c||"",l=l||"",h=h||"",(A||g)&&(e=dg(e)),(u||g)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=dg(t)),g){let w=g({vertexShader:e,fragmentShader:t});e=w.vertexShader,t=w.fragmentShader}if(u){let w=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,f=>(w.push(f),"")),h=`${u}
${w.join(`
`)}
${h}`}if(p){const w=`
uniform float ${p};
`;s=w+s,c=w+c}return A&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,s=`${s}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${A}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(w,f,d,D)=>/\battribute\s+vec[23]\s+$/.test(D.substr(0,d))?f:`troika_${f}_${n}`),r.map&&r.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Ww(e,n,s,a,o),t=Ww(t,n,c,l,h),{vertexShader:e,fragmentShader:t}}function Ww(r,e,t,i,n){return(i||n||t)&&(r=r.replace(Jw,`
${t}
void troikaOrigMain${e}() {`),r+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),r}function X4(r,e){return r==="uniforms"?void 0:typeof e=="function"?e.toString():e}let j4=0;const Zw=new Map;function J4(r){const e=JSON.stringify(r,X4);let t=Zw.get(e);return t==null&&Zw.set(e,t=++j4),t}const K4=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,V4=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,W4=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Z4=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function q4(r){const e=pg(r,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new at},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new qt(0,0,0,0)},uTroikaClipRect:{value:new qt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new at},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new ot},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new mt},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:K4,vertexTransform:V4,fragmentDefs:W4,fragmentColorTransform:Z4,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Jw,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const wg=new Yn({color:16777215,side:jr,transparent:!0}),qw=8421504,_w=new Ut,sl=new V,vg=new V,cA=[],_4=new V,mg="+x+y";function $w(r){return Array.isArray(r)?r[0]:r}let ev=()=>{const r=new nr(new Es(1,1),wg);return ev=()=>r,r},tv=()=>{const r=new nr(new Es(1,1,32,1),wg);return tv=()=>r,r};const $4={type:"syncstart"},e1={type:"synccomplete"},rv=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],t1=rv.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class iv extends nr{constructor(){const e=new U4;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=qw,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=mg,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent($4),S4({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(e1),e&&e()})))}onBeforeRender(e,t,i,n,s,a){this.sync(),s.isTroikaTextMaterial&&this._prepareForRender(s),s._hadOwnSide=s.hasOwnProperty("side"),this.geometry.setSide(s._actualSide=s.side),s.side=Vi}onAfterRender(e,t,i,n,s,a){s._hadOwnSide?s.side=s._actualSide:delete s.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=wg.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=q4(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return $w(this.material).getDepthMaterial()}get customDistanceMaterial(){return $w(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:A}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(A),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,l=0,h=0,u,g,p,w=0,f=0;if(t){let{outlineWidth:D,outlineOffsetX:m,outlineOffsetY:C,outlineBlur:S,outlineOpacity:P}=this;c=this._parsePercent(D)||0,l=Math.max(0,this._parsePercent(S)||0),u=P,w=this._parsePercent(m)||0,f=this._parsePercent(C)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(p=this.strokeColor,i.uTroikaStrokeColor.value.set(p??qw),g=this.strokeOpacity,g==null&&(g=1)),u=this.fillOpacity;i.uTroikaDistanceOffset.value=c,i.uTroikaPositionOffset.value.set(w,f),i.uTroikaBlurRadius.value=l,i.uTroikaStrokeWidth.value=h,i.uTroikaStrokeOpacity.value=g,i.uTroikaFillOpacity.value=u??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let d=this.clipRect;if(d&&Array.isArray(d)&&d.length===4)i.uTroikaClipRect.value.fromArray(d);else{const D=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(A[0]-D,A[1]-D,A[2]+D,A[3]+D)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const s=t?this.outlineColor||0:this.color;if(s==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new ot;(s!==o._input||typeof s=="object")&&o.set(o._input=s)}let a=this.orientation||mg;if(a!==e._orientation){let o=i.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let A=a!==mg&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(A){let[,c,l,h,u]=A;sl.set(0,0,0)[l]=c==="-"?1:-1,vg.set(0,0,0)[u]=h==="-"?-1:1,_w.lookAt(_4,sl.cross(vg),vg),o.setFromMatrix4(_w)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new at){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new at){return sl.copy(e),this.localPositionToTextCoords(this.worldToLocal(sl),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const s=i.blockBounds,a=n?tv():ev(),o=a.geometry,{position:A,uv:c}=o.attributes;for(let l=0;l<c.count;l++){let h=s[0]+c.getX(l)*(s[2]-s[0]);const u=s[1]+c.getY(l)*(s[3]-s[1]);let g=0;n&&(g=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),A.setXYZ(l,h,u,g)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,cA.length=0,a.raycast(e,cA);for(let l=0;l<cA.length;l++)cA[l].object=this,t.push(cA[l])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,t1.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}rv.forEach(r=>{const e="_private_"+r;Object.defineProperty(iv.prototype,r,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});const r1=.1,i1=new Ic(.9,r1).rotateX(-Math.PI/2),nv=new yc(.85,16).rotateX(-Math.PI/2),sv=xs();sv.uniforms.color.value=new ot(16720418);const n1=new V,s1=new Dn(.25,.25,xp),a1=new jn(s1,xs(),ur,{perInstanceUniforms:!0}),o1=new jn(new Dn(1,.1,1),sv,ur,{perInstanceUniforms:!0}),A1=new jn(i1,xs(),ur,{perInstanceUniforms:!0});class c1{constructor(e){this.graphics=e,this.circle=A1.getInstance(),this.cannon=a1.getInstance(),this.healthBar=o1.getInstance(),this.name=this.createText(),ur.add(this.name),this.graphics.parent.skin!=="none"&&(this.disk=new nr(nv,lg(this.graphics.parent.skin)),ur.add(this.disk)),this.syncToGraphics()}radius(){return this.graphics.radius}syncToGraphics(){this.syncPlayerToGraphics(),this.syncPlayerHudToGraphics()}syncCannon(){this.cannon.setUniform("color",this.graphics.color),this.cannon.setUniform("brightness",this.graphics.circleBrightness()),this.cannon.rotation.y=this.graphics.rotation;const e=this.radius()+.2;let t=n1;t=t.copy(this.graphics.position),t=t.add(new V(Math.sin(this.graphics.rotation)*e,0,Math.cos(this.graphics.rotation)*e)),this.cannon.scale.set(this.radius(),this.radius()/2,Math.max(this.radius()/2,1)),this.cannon.position.copy(t),this.cannon.write()}syncPlayerToGraphics(){this.circle.setUniform("color",this.graphics.color),this.circle.setUniform("brightness",this.graphics.circleBrightness()),this.circle.scale.setScalar(this.graphics.radius),this.circle.position.copy(this.graphics.position),this.circle.rotation.y=this.graphics.rotation,this.circle.write(),this.syncCannon(),this.disk&&(this.disk.position.copy(this.graphics.position),this.disk.position.y+=.5,this.disk.scale.set(this.graphics.radius*.75,1,this.graphics.radius*.75),this.disk.rotation.y=this.graphics.rotation)}getTotalZoom(){var e;return((e=this.graphics.parent.game.graphicsManager)==null?void 0:e.cameraHandler.getTotalZoom())||1}syncHealthBar(){const e=xp+Math.min(5.5,this.radius()/4);this.healthBar.position.copy(this.graphics.position),this.healthBar.position.z+=-(e+this.graphics.radius);const t=this.radius()/4,i=Math.max(t/4,.65);this.healthBar.scale.set(t*8*this.graphics.percentRemainingLerped,1,i),this.healthBar.setUniform("color",this.graphics.healthbarColor),this.healthBar.setUniform("brightness",.9)}syncTextPosition(){const e=Math.min(this.graphics.radius/4,this.getTotalZoom()),t=Math.round(e*100)/100,i=Math.max(e/4,.65);this.name.position.copy(this.healthBar.position),this.name.position.z-=i+.25;const n=this.name.fontSize;t!==n&&(this.name.fontSize=t,this.name.sync())}syncPlayerHudToGraphics(){this.syncHealthBar(),this.syncTextPosition()}createText(){const e=new iv;return e.frustumCulled=!1,e.text=this.graphics.parent.name.toUpperCase(),e.fontSize=1,e.rotateX(Math.PI/2),e.scale.set(-1,1,1),e.color=16777215,e.anchorX="center",e.anchorY="top",e.material.opacity=.5,e.sync(),e}destroy(){this.circle.destroy(),this.cannon.destroy(),this.healthBar.destroy(),this.disk&&ur.remove(this.disk),ur.remove(this.name),this.name.dispose()}}class l1{constructor(e){this.parent=e,this.smoothedPosition=e.position.clone(),this.position=e.position.clone()}physicsTicks(e){const t=this.smoothedPosition.clone().sub(this.parent.position),i=Math.max(2*(this.parent.getSpeed()/this.parent.friction),this.parent.velocity.length())*e,n=t.clampLength(-i,i);this.smoothedPosition.sub(n),this.position.lerpVectors(this.position,this.smoothedPosition,.25)}forceSync(){this.smoothedPosition.copy(this.parent.position),this.position.copy(this.parent.position)}}const av=new ot(16720418),h1=new ot(16764108),u1=new ot(14480383),ov=new ot,g1=.75;class f1{constructor(e){this.parent=e,this.cullBoundaries=new yi,this.smoothedPlayerPosition=new l1(this.parent),this.children=[],this.healthbarColor=av.clone(),this.hitGlowTarget=0,this.percentRemainingLerped=1,this.position=this.parent.position.clone(),this.radius=0,this.rotation=e.aimAngle,this.rawColor=new ot(e.color),this.color=this.rawColor.clone(),this.tick()}get lerpRate(){return this.parent.isMe?1:.25}addChildTick(e){return this.children.push(e),e}forceSync(){this.smoothedPlayerPosition.forceSync()}show(){if(this.instances)throw new Error;this.instances=new c1(this)}hide(){if(!this.instances)throw new Error;this.instances.destroy(),this.instances=void 0}updateCullBoundaries(){this.cullBoundaries.set(this.parent.position,this.parent.radius)}updateSmoothedPosition(e){if(this.parent.isMe){this.position.copy(this.parent.position),this.position.y+=this.sizeToNotClipUnder();return}this.smoothedPlayerPosition.physicsTicks(e),this.position.copy(this.smoothedPlayerPosition.position),this.position.y+=this.sizeToNotClipUnder()}physicsTick(e){this.updateSmoothedPosition(e),this.updateCullBoundaries()}sizeToNotClipUnder(){var e;return((e=this.parent.game.graphicsManager)==null?void 0:e.sizeToNotClipUnder())||0}updateColor(){const e=Math.min(1,1.5*Math.sqrt(1-this.parent.frostStrength()));this.color.lerpColors(this.rawColor,u1,e)}circleBrightness(){const e=this.parent.shootManager.chargePercent();return e==0?1:1+e*5}updateHealthbarColor(){ov.lerpColors(av,h1,this.hitGlowTarget),this.healthbarColor.lerpColors(this.healthbarColor,ov,.35)}addHitGlow(e){this.hitGlowTarget=Math.max(this.hitGlowTarget+e,0)}updateHealthbarWidth(){let e=1-Math.min(this.parent.damageTaken,this.parent.health())/this.parent.health();this.percentRemainingLerped=Yc(this.percentRemainingLerped,e,.175)}tick(){if(!this.parent.destroyed){this.updateColor(),this.updateHealthbarColor(),this.updateHealthbarWidth(),this.hitGlowTarget*=g1,this.radius=Yc(this.radius,this.parent.radius,.1),this.rotation=EQ(this.rotation,this.parent.aimAngle,this.lerpRate);for(let e of this.children)e.tick();if(isNaN(this.rotation)||isNaN(this.parent.aimAngle))throw console.error("A NaN was found, this.rotation and this.parent.aimAngle",this.rotation,this.parent.aimAngle),new Error("A NaN was found.");this.instances&&(this.position.y=this.sizeToNotClipUnder(),this.crownTick(),this.instances.syncToGraphics())}}crownTick(){if(!this.parent.isKing){this.removeCrown();return}this.crown||(this.crown=new nr(nv,lg("crown")),ur.add(this.crown));const e=Math.max(this.radius/5,10),t=this.position.clone().add(new V(0,0,this.parent.radius+e+5));this.crown.position.copy(t),this.crown.scale.set(e,e,-e)}removeCrown(){this.crown&&(ur.remove(this.crown),this.crown=void 0)}destroy(){var e;this.removeCrown(),(e=this.instances)==null||e.destroy()}}class d1{constructor(e,t,i){this.game=e,this.player=t,this.controlledGraphics=i,this.dRadius=.025,this.id=Zu("")}physicsTick(e){var t;this.controlledGraphics.percentRemainingLerped=0,this.controlledGraphics.radius=this.controlledGraphics.radius*.82**e,this.controlledGraphics.radius=Zr(this.controlledGraphics.radius,this.dRadius*e),(t=this.controlledGraphics.instances)==null||t.syncToGraphics(),this.controlledGraphics.radius<=0&&this.game.remove(this.id)}destroy(){this.controlledGraphics.destroy()}}class zs extends ai{constructor(e){super(e),this.isKing=!1,this.isMe=!1,this.graphics=new f1(this),this.game=e.game}getSpeed(){return super.getSpeed()}onCorrection(){this.graphics.forceSync()}takeDamage(e,t){super.takeDamage(e,t),this.addHitGlow(e)}addHitGlow(e){const t=this.health()*bp;e>t&&this.graphics.addHitGlow(1)}static from(e,t){const i=new zs({game:e,id:t.id,moonRadians:t.moonRadians,color:t.color,damageTaken:t.damageTaken,mass:t.mass,name:t.name,skin:t.skin,special:t.special,aimAngle:t.aimAngle,direction:Mn(t.direction),acceleration:Mn(t.acceleration),position:Mn(t.position),velocity:Mn(t.velocity)});return i.animationLerpedRadius=t.animationLerpedRadius,i.graphics.radius=t.animationLerpedRadius,i}onCollision(e){this.isMe&&e instanceof ai,super.onCollision(e)}onStatePatch(e){this.isMe||(this.aimAngle=e.aimAngle,this.direction.copy(e.direction),this.velocity.copy(e.velocity),this.position.copy(e.position))}physicsTick(e){super.physicsTick(e),this.graphics.physicsTick(e)}handoffGraphics(){return this.graphics.removeCrown(),this.graphics}tick(){this.graphics.tick()}destroy(){const e=this.handoffGraphics();e&&this.game.add(new d1(this.game,this,e)),super.destroy()}}const Cg=new Map;function Av(r){if(r==="normal")throw new Error("Invalid use of getDiskInstanceForTexture");if(Cg.has(r))return Cg.get(r).getInstance();const e=new jn(new yc(1,16).rotateX(-Math.PI/2).rotateY(Math.PI),lg(r),ur);return Cg.set(r,e),e.getInstance()}class lA{constructor(e,t){this.parent=e,this.rotationPerTick=0,this.instance=Av(e.parent.renderMode),this.rotationPerTick=t||0,this.instance.rotation.set(0,this.parent.parent.renderRotationY,0)}get bullet(){return this.parent.parent}tick(){this.instance.position.copy(this.parent.position),this.instance.scale.set(this.bullet.radius,this.bullet.radius,this.bullet.radius),this.instance.rotation.y+=this.rotationPerTick}destroy(){this.instance.destroy()}}const p1=new jn(new Ps(1,16,16),xs(),ur,{perInstanceUniforms:!0});class w1{constructor(e){this.parent=e,this.instance=p1.getInstance()}color(){return new ot(this.bullet.color)}get bullet(){return this.parent.parent}tick(){this.instance.position.copy(this.parent.position),this.instance.scale.set(this.bullet.radius,this.bullet.radius,this.bullet.radius),this.instance.setUniform("color",this.color()),this.instance.setUniform("brightness",this.bullet.brightness)}destroy(){this.instance.destroy()}}function v1(r){if(r.parent.renderMode==="normal")return new w1(r);if(r.parent.renderMode==="snowflake")return new lA(r);if(r.parent.renderMode==="heart")return new lA(r);if(r.parent.renderMode==="tear")return new lA(r);if(r.parent.renderMode==="lightning")return new lA(r);if(r.parent.renderMode==="crab-rave"){const e=new lA(r,Math.random()*.15);return e.instance.rotation.y=Math.random()*2*Math.PI,e}throw new Error}class m1{constructor(e){this.parent=e,this.cullBoundaries=new yi,this.lerpRate=1,this.position=e.position.clone(),this.updateCullBoundaries()}setupInstance(){this.graphics=v1(this),this.tick()}updateCullBoundaries(){this.cullBoundaries.set(this.parent.position,this.parent.radius)}destroyInstance(){var e;(e=this.graphics)==null||e.destroy(),this.graphics=void 0}hide(){if(!this.graphics)throw new Error("show() called twice without hide");this.destroyInstance()}tick(){var e,t;this.position.lerpVectors(this.position,this.parent.position,this.lerpRate),this.position.y=(((e=this.parent.game.graphicsManager)==null?void 0:e.sizeToNotClipUnder())||0)+this.parent.radius,this.cullBoundaries.set(this.parent.position,this.parent.radius),(t=this.graphics)==null||t.tick()}destroy(){this.destroyInstance()}show(){if(this.graphics)throw new Error("show() called twice without hide");this.setupInstance()}}class al extends rA{constructor(e){super(e),this.graphics=new m1(this),this.game=e.game}tick(){this.graphics.tick()}static from(e,t){return new al({enableFrost:t.enableFrost,game:e,brightness:t.brightness,acceleration:Mn(t.acceleration),position:Mn(t.position),velocity:Mn(t.velocity),renderMode:t.renderMode,color:t.color,damage:t.damage,friction:t.friction,id:t.id,lagCorrectionUid:t.lagCorrectionUid,lifetimeTicks:t.lifetimeTicks,parentId:t.parentId,radius:t.radius,renderRotationY:t.renderRotationY})}destroy(){this.graphics.destroy(),super.destroy()}}const C1=new Ps(1,6,6),B1=new jn(C1,xs(),ur,{perInstanceUniforms:!0,autoUpdate:!1});class E1{constructor(e){this.parent=e,this.cullBoundaries=new yi;const t=new V(this.parent.position.x,this.parent.position.y,this.parent.position.z);this.cullBoundaries.set(t,this.parent.radius)}resize(){this.instance&&(this.instance.scale.set(this.parent.radius,this.parent.radius,this.parent.radius),this.instance.write())}show(){if(this.instance)throw new Error;this.setupInstance()}hide(){if(!this.instance)throw new Error;this.destroyInstance()}destroyInstance(){var e;(e=this.instance)==null||e.destroy(),this.instance=void 0}setupInstance(){if(this.instance)throw new Error;this.instance=B1.getInstance(),this.syncInstance(),this.instance.setUniform("color",new ot(this.parent.color)),this.instance.setUniform("brightness",1),this.instance.write()}syncInstance(){var e;this.instance&&(this.instance.position.x=this.parent.position.x,this.instance.position.y=(((e=this.parent.game.graphicsManager)==null?void 0:e.sizeToNotClipUnder())||0)+this.parent.radius,this.instance.position.z=this.parent.position.z,this.instance.scale.set(this.parent.radius,this.parent.radius,this.parent.radius),this.instance.write())}destroy(){this.destroyInstance()}}class D1{constructor(e,t,i,n){this.game=e,this.handedOffGraphics=t,this.moveToId=i,this.id=this.handedOffGraphics.parent.id+"-d",this.energy=0,this.destroyed=!1,this.energy=n}physicsTick(e){if(this.destroyed)return;const t=this.game.get(this.moveToId);if(!(t instanceof zs)){this.teardown();return}this.energy+=e/15;const i=Math.sqrt(this.energy),n=this.handedOffGraphics.parent.position,s=t.position.clone().sub(n),a=s.length();s.normalize();const o=s.multiplyScalar(i*e).clampLength(0,a);n.add(o),this.handedOffGraphics.syncInstance(),n.distanceTo(t.position)<t.radius&&this.teardown()}teardown(){this.game.remove(this.id)}destroy(){this.destroyed=!0,this.handedOffGraphics.destroy()}}class Bg extends Na{constructor(e){super(e),this.game=e.game,this.graphics=new E1(this)}static from(e,t){return new Bg({game:e,initialSlideVelocity:t.initialSlideVelocity,position:Mn(t.position),color:t.color,id:t.id,parentId:t.parentId,mass:t.mass})}updatePosition(){super.updatePosition(),this.graphics.syncInstance()}destroy(){var e;const t=((e=this.vacuum)==null?void 0:e.energy)||0;if(super.destroy(),this.consumedBy){this.game.add(new D1(this.game,this.graphics,this.consumedBy,t));return}this.graphics.destroy()}}const y1=new ot(16777215),I1=new Ic(.9,.03,6,24).rotateX(-Math.PI/2),M1=new jn(I1,xs(),ur,{perInstanceUniforms:!0});class P1{constructor(e){this.moon=e,this.lerpRate=1,this.targetPosition=new V,this.instance=Av(e.moonSprite),this.ring=M1.getInstance(),this.baseColor=new ot(e.player.color),this.ring.setUniform("color",this.baseColor),this.ring.setUniform("brightness",1),this.targetPosition.copy(e.player.position),this.instance.position.copy(this.targetPosition),this.ring.position.copy(this.targetPosition)}get game(){return this.moon.game}sync(){var e;const t=((e=this.game.graphicsManager)==null?void 0:e.sizeToNotClipUnder(.1))||0,i=this.moon.player,n=-i.position.x+i.graphics.position.x,s=-i.position.z+i.graphics.position.z;this.targetPosition.set(this.moon.position.x+n,t,this.moon.position.z+s),this.instance.position.lerpVectors(this.instance.position,this.targetPosition,this.lerpRate),this.instance.scale.set(.75*this.moon.radius,1,.75*this.moon.radius),this.ring.position.lerpVectors(this.ring.position,this.targetPosition,this.lerpRate),this.ring.scale.set(this.moon.radius,this.moon.radius,this.moon.radius),this.ring.setUniform("color",new ot().lerpColors(this.baseColor,y1,Math.min(this.moon.glow,1))),this.ring.setUniform("brightness",1+this.moon.glow)}destroy(){this.instance.destroy(),this.ring.destroy()}}class Q1{constructor(e){this.moon=e,this.id=this.moon.id+"-graphics",this.cullBoundaries=new yi}show(){if(this.graphics)throw new Error("Bad!");this.graphics=new P1(this.moon)}hide(){this.graphics.destroy(),this.graphics=void 0}tick(){var e;this.moon.syncPosition(),this.cullBoundaries.set(this.moon.position,this.moon.radius),(e=this.graphics)==null||e.sync()}destroy(){var e;(e=this.graphics)==null||e.destroy()}}class Eg extends tw{constructor(){super(...arguments),this.graphics=new Q1(this)}tick(){this.graphics.tick()}destroy(){this.graphics.destroy()}static from(e,t){const i=e.get(t.playerId);if(!(!i||!(i instanceof ai)))return new Eg({radians:t.radians,player:i,moonSprite:t.moonSprite,id:t.id,orbitRadius:t.orbitRadius})}}class x1{constructor(e){this.game=e,this.game.connectionManager.state$.subscribe(()=>{const t=this.game.connectionManager.state;if(t.type==="connected"){this.setupNewRoom(t.room);return}this.teardownRoom()})}clientEntityFromEntity(e){if(!e.id)throw new Error("You should never received an entity from the server with no ID, but got "+JSON.stringify(e,void 0,2));if(e.isPlayer)return zs.from(this.game,e);if(e.isBullet)return al.from(this.game,e);if(e.isFood)return Bg.from(this.game,e);if(e.isMoon){const t=e;return Eg.from(this.game,t)}throw new Error("Invalid case")}skipAddEntity(e){const t=this.game.meManager.me;return!t||e.parentId!==t.id||e.lagCorrectionUid==-1?!1:e.lagCorrectionUid<=t.shootManager.lastNetworkUniqueId}handleAdd(e){if(this.skipAddEntity(e))return;const t=this.clientEntityFromEntity(e);t&&this.game.add(t)}handleRemove(e){this.game.remove(e)}setupNewRoom(e){this.room&&this.teardownRoom(),this.room=e,Sx(this.game,e,{}),this.room.on("patch",t=>{for(let i of t.players){const n=this.game.get(i.id);n instanceof zs&&n.onStatePatch(i)}}),this.room.on("add",t=>{this.handleAdd(t)}),this.room.on("remove",t=>{this.handleRemove(t.id)}),this.room.on("metadata_num_players",t=>{this.game.metadataSystem.handleNumberPlayersPatch(t)}),this.room.on("metadata_remove",t=>{this.game.metadataSystem.handleMetadataRemove(t)}),this.room.on("metadata_patch",t=>{this.game.metadataSystem.handlePlayerPatch(t)})}teardownRoom(){var e;(e=this.room)==null||e.close(),this.room=void 0,this.game.clear(),this.room=void 0}}class b1{constructor(e){this.game=e,this.players=this.game.with("isPlayer"),this.me$=new Kg(void 0),this.lastRawDirection=new V}setMe(e){var t;e.isMe=!0,this._me=e,(t=this.game.graphicsManager)==null||t.cameraHandler.snapTo(e.position),this.me$.next(e),this.game.pauseManager.ensurePlaying()}get me(){return this._me}reportPosition(){const e=this.me;e&&e.reportPositionRPC.call(e.position,this.getCameraAwareDirection())}getCameraAwareDirection(){var e;const t=(e=this.game.graphicsManager)==null?void 0:e.camera;if(!t)return new V;const i=this.lastRawDirection.clone().applyQuaternion(t.quaternion);return i.y=0,i.normalize()}handleMove(e){this.lastRawDirection.x=e.x,this.lastRawDirection.y=0,this.lastRawDirection.z=e.y;const t=this.me;t&&t.moveRPC.call(t.position,this.getCameraAwareDirection())}stopMove(){this.lastRawDirection.x=0,this.lastRawDirection.y=0,this.lastRawDirection.z=0;const e=this.me;e&&e.stopMoveRPC.call(e.position)}waitForMe(){return ea(this.me$.pipe(Wg(e=>e!==void 0)))}unsetMe(){this._me&&this.game.pauseManager.ensurePaused(),this._me=void 0}tick(){var e;if(!this.game.room)return;const t=this.game.room.id;for(let i of this.players)i.id===t&&((e=this._me)==null?void 0:e.id)!==i.id&&this.setMe(i)}}let S1="ws://"+self.location.hostname+":2567",T1="http://"+self.location.hostname+":2567";const cv="wss://useast.bulletz.io";function H1(){const r=[{wsUrl:cv,icon:"us",name:"US - East Coast",httpUrl:cv.replace("ws","http"),id:"nyc"}],e={wsUrl:S1,icon:"usCa",name:"DEV - localhost",httpUrl:T1,id:"local"};return xd()?[e]:r}const Dg=H1(),O1=function(r){const e=new Array(r.length);let t=0;return new Promise((i,n)=>{r.forEach((s,a)=>{Promise.resolve(s).then(i).catch(o=>{e[a]=o,t=t+1,t===r.length&&n(e)})})})};async function L1(){let r=[];const e=Date.now();for(let t=0;t<Dg.length;t++){const i=Dg[t],n=fetch(Dg[t].httpUrl+"/ping").then(()=>i).then(s=>(console.log(i.id,"resolved after",Date.now()-e,"ms"),s)).catch(s=>{throw console.error("Server ",i.id,"failed the ping check.","URL was",i.httpUrl),s});r.push(n)}return O1(r)}class R1{constructor(e){this.promise=e,this.cancelled=!1,this.onCompleteCallbacks=[],this.onErrorCallbacks=[],this.promise.then(t=>this.handleCompletion(t)).catch(t=>this.handleError(t))}handleCompletion(e){if(!this.cancelled)for(let t of this.onCompleteCallbacks)t(e)}onComplete(e){return this.onCompleteCallbacks.push(e),this}onError(e){return this.onErrorCallbacks.push(e),this}handleError(e){if(!this.cancelled)for(let t of this.onErrorCallbacks)t(e)}cancel(){this.cancelled=!0}}class F1{constructor(e,t,i,n,s){this.id=e,this.websocket=t,this.encode=i,this.decode=n,this.websocketConstructor=s,this.disconnected=!1,this.handlers=new Map,this._errorHandlers=[],this._closeHandlers=[];const a=this;this.websocket.onmessage=function(o){try{const A=n(o.data),c=a.handlers.get(A.topic);if(!c){console.log("[YetiRoom] yeti room had no handler for topic "+A.topic);return}c(A.data)}catch(A){a.handleError(A)}},this.websocket.onerror=o=>{this.handleError(o)},this.websocket.onclose=()=>{this._handleClose()}}encodeWithLog(e){try{return this.encode(e)}catch(t){throw console.error("Error encoding message... ",e),console.error(t),t}}isClosed(){return this.websocket.readyState===(this.websocketConstructor||WebSocket).CLOSED}send(e,t){this.disconnected&&console.warn("Cannot send a message when websocket is closed.  Attempted to send "+e);const i=this.encodeWithLog({topic:e,data:t});return this.isClosed()?(this.handleError("Websocket already closed."),0):(this.websocket.send(i),i.byteLength)}on(e,t){if(this.handlers.get(e))throw new Error("failed to register handler due to existing handler on message type "+e);this.handlers.set(e,t)}handleError(e){for(let t of this._errorHandlers)t(e);console.error("Closing websocket due to error",e)}close(){this.disconnected||(this.disconnected=!0,this.websocket.close(),this._handleClose())}onError(e){this._errorHandlers.push(e)}onClose(e){this._closeHandlers.push(e)}_handleClose(){this.disconnected=!0;for(let e of this._closeHandlers)e();this._closeHandlers=[]}}qe.object({topic:qe.string(),data:qe.any()});const k1=qe.object({id:qe.number()});function U1(r,e,t,i){i=i||WebSocket;const n=new i(r);return n.binaryType="arraybuffer",new Promise((s,a)=>{n.onerror=o=>{a(o)},n.onmessage=o=>{try{const A=k1.parse(JSON.parse(o.data)),c=new F1(A.id,n,e,t,i);s(c)}catch(A){console.error(A),a(A)}}})}const lv={type:"zero"};class G1{constructor(){this.state=lv,this.state$=new Kg(lv),this.websocketErrors$=new hs}setState(e){const t=this.state;t.type==="connecting"&&t.cancel(),t.type==="connected"&&t.disconnect(),t.type==="searching"&&t.cancel(),this.state=e,this.state$.next(e)}startConnectionIfNeeded(){(this.state.type==="error"||this.state.type==="zero")&&(this.lastSelectedServer?this.selectServer(this.lastSelectedServer):this.search())}waitForTerminationState(){const e=new Set(["error","connected"]),t=this.state$.pipe(Wg(i=>e.has(i.type)));return ea(t)}search(){this.state.type!=="searching"&&(console.log("[ConnectionManager] starting search phase."),this.setState(this.searchState()))}searchState(){const e=new R1(L1()).onComplete(t=>{console.log("[ConnectionManager] Request resolved."),this.setState(this.connectingState(t))}).onError(t=>{this.setState(this.errorState(t))});return{cancel:()=>{e.cancel()},type:"searching"}}zero(){this.setState({type:"zero"})}selectServer(e){this.lastSelectedServer=e,this.state.type==="searching"&&this.state.cancel(),!(this.state.type==="connected"&&this.state.server.id===e.id)&&(this.state.type==="connecting"&&this.state.server.id===e.id||(console.log("[ConnectionManager] chose server ",e.name),this.setState(this.connectingState(e))))}connectedState(e,t){return console.log("[ConnectionManager] in connected state for server ",t.name),e.onError(i=>{this.websocketErrors$.next(i),e.close(),this.setState(this.errorState("Websocket send failed."))}),{room:e,server:t,disconnect:()=>this.destroyRoom(e),type:"connected"}}error(e){console.error(e),this.setState(this.errorState(e))}errorState(e){return{error:e,type:"error"}}connectingState(e){let t=!1;return console.log("[ConnectionManager] Entering connecting state to server ",e.wsUrl),U1(e.wsUrl,zb,Yb).then(i=>{t||this.setState(this.connectedState(i,e))}).catch(i=>{if(console.error(i),t){console.log("The result was cancelled.");return}this.setState(this.errorState(i))}),{type:"connecting",cancel:()=>{t=!0},server:e}}destroyRoom(e){e.close()}}var N1={BASE_URL:"./",MODE:"production",DEV:!0,PROD:!1,SSR:!1};const hv=r=>{let e;const t=new Set,i=(o,A)=>{const c=typeof o=="function"?o(e):o;if(!Object.is(c,e)){const l=e;e=A??(typeof c!="object"||c===null)?c:Object.assign({},e,c),t.forEach(h=>h(e,l))}},n=()=>e,s={setState:i,getState:n,getInitialState:()=>a,subscribe:o=>(t.add(o),()=>t.delete(o)),destroy:()=>{(N1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},a=e=r(i,n,s);return s},z1=r=>r?hv(r):hv;var uv={exports:{}},ol={exports:{}};ol.exports,function(r,e){/**
* @license React
* react.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,Le),"default"in Le||F(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,Le),Le.default}else throw E._result}function wi(E){var Y={_status:Rt,_result:E},ae={$$typeof:p,_payload:Y,_init:Ai};{var ge,Le;Object.defineProperties(ae,{defaultProps:{configurable:!0,get:function(){return ge},set:function(st){F("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),ge=st,Object.defineProperty(ae,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return Le},set:function(st){F("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),Le=st,Object.defineProperty(ae,"propTypes",{enumerable:!0})}}})}return ae}function ci(E){E!=null&&E.$$typeof===g?F("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof E!="function"?F("forwardRef requires a render function but was given %s.",E===null?"null":typeof E):E.length!==0&&E.length!==2&&F("forwardRef render functions accept exactly two parameters: props and ref. %s",E.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),E!=null&&(E.defaultProps!=null||E.propTypes!=null)&&F("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var Y={$$typeof:l,render:E};{var ae;Object.defineProperty(Y,"displayName",{enumerable:!1,configurable:!0,get:function(){return ae},set:function(ge){ae=ge,!E.name&&!E.displayName&&(E.displayName=ge)}})}return Y}var mr;mr=Symbol.for("react.module.reference");function Pr(E){return!!(typeof E=="string"||typeof E=="function"||E===s||E===o||x||E===a||E===h||E===u||y||E===w||v||M||H||typeof E=="object"&&E!==null&&(E.$$typeof===p||E.$$typeof===g||E.$$typeof===A||E.$$typeof===c||E.$$typeof===l||E.$$typeof===mr||E.getModuleId!==void 0))}function ss(E,Y){Pr(E)||F("memo: The first argument must be a component. Instead received: %s",E===null?"null":typeof E);var ae={$$typeof:g,type:E,compare:Y===void 0?null:Y};{var ge;Object.defineProperty(ae,"displayName",{enumerable:!1,configurable:!0,get:function(){return ge},set:function(Le){ge=Le,!E.name&&!E.displayName&&(E.displayName=Le)}})}return ae}function cr(){var E=m.current;return E===null&&F(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),E}function Ys(E){var Y=cr();if(E._context!==void 0){var ae=E._context;ae.Consumer===E?F("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):ae.Provider===E&&F("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return Y.useContext(E)}function uA(E){var Y=cr();return Y.useState(E)}function qa(E,Y,ae){var ge=cr();return ge.useReducer(E,Y,ae)}function b(E){var Y=cr();return Y.useRef(E)}function $(E,Y){var ae=cr();return ae.useEffect(E,Y)}function le(E,Y){var ae=cr();return ae.useInsertionEffect(E,Y)}function he(E,Y){var ae=cr();return ae.useLayoutEffect(E,Y)}function q(E,Y){var ae=cr();return ae.useCallback(E,Y)}function He(E,Y){var ae=cr();return ae.useMemo(E,Y)}function Ye(E,Y,ae){var ge=cr();return ge.useImperativeHandle(E,Y,ae)}function ve(E,Y){{var ae=cr();return ae.useDebugValue(E,Y)}}function Ke(){var E=cr();return E.useTransition()}function At(E){var Y=cr();return Y.useDeferredValue(E)}function tt(){var E=cr();return E.useId()}function it(E,Y,ae){var ge=cr();return ge.useSyncExternalStore(E,Y,ae)}var yt=0,Ot,Ft,Xt,Lt,We,lr,li;function Or(){}Or.__reactDisabledLog=!0;function hi(){{if(yt===0){Ot=console.log,Ft=console.info,Xt=console.warn,Lt=console.error,We=console.group,lr=console.groupCollapsed,li=console.groupEnd;var E={configurable:!0,enumerable:!0,value:Or,writable:!0};Object.defineProperties(console,{info:E,log:E,warn:E,error:E,group:E,groupCollapsed:E,groupEnd:E})}yt++}}function Cr(){{if(yt--,yt===0){var E={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:j({},E,{value:Ot}),info:j({},E,{value:Ft}),warn:j({},E,{value:Xt}),error:j({},E,{value:Lt}),group:j({},E,{value:We}),groupCollapsed:j({},E,{value:lr}),groupEnd:j({},E,{value:li})})}yt<0&&F("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ui=R.ReactCurrentDispatcher,kt;function Lr(E,Y,ae){{if(kt===void 0)try{throw Error()}catch(Le){var ge=Le.stack.trim().match(/\n( *(at )?)/);kt=ge&&ge[1]||""}return`
`+kt+E}}var Ui=!1,zt;{var Xs=typeof WeakMap=="function"?WeakMap:Map;zt=new Xs}function Qn(E,Y){if(!E||Ui)return"";{var ae=zt.get(E);if(ae!==void 0)return ae}var ge;Ui=!0;var Le=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var st;st=ui.current,ui.current=null,hi();try{if(Y){var Ve=function(){throw Error()};if(Object.defineProperty(Ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ve,[])}catch(Rr){ge=Rr}Reflect.construct(E,[],Ve)}else{try{Ve.call()}catch(Rr){ge=Rr}E.call(Ve.prototype)}}else{try{throw Error()}catch(Rr){ge=Rr}E()}}catch(Rr){if(Rr&&ge&&typeof Rr.stack=="string"){for(var ft=Rr.stack.split(`
`),ut=ge.stack.split(`
`),Et=ft.length-1,Dt=ut.length-1;Et>=1&&Dt>=0&&ft[Et]!==ut[Dt];)Dt--;for(;Et>=1&&Dt>=0;Et--,Dt--)if(ft[Et]!==ut[Dt]){if(Et!==1||Dt!==1)do if(Et--,Dt--,Dt<0||ft[Et]!==ut[Dt]){var St=`
`+ft[Et].replace(" at new "," at ");return E.displayName&&St.includes("<anonymous>")&&(St=St.replace("<anonymous>",E.displayName)),typeof E=="function"&&zt.set(E,St),St}while(Et>=1&&Dt>=0);break}}}finally{Ui=!1,ui.current=st,Cr(),Error.prepareStackTrace=Le}var Vt=E?E.displayName||E.name:"",gr=Vt?Lr(Vt):"";return typeof E=="function"&&zt.set(E,gr),gr}function on(E,Y,ae){return Qn(E,!1)}function pl(E){var Y=E.prototype;return!!(Y&&Y.isReactComponent)}function xn(E,Y,ae){if(E==null)return"";if(typeof E=="function")return Qn(E,pl(E));if(typeof E=="string")return Lr(E);switch(E){case h:return Lr("Suspense");case u:return Lr("SuspenseList")}if(typeof E=="object")switch(E.$$typeof){case l:return on(E.render);case g:return xn(E.type,Y,ae);case p:{var ge=E,Le=ge._payload,st=ge._init;try{return xn(st(Le),Y,ae)}catch{}}}return""}var js={},_a=R.ReactDebugCurrentFrame;function Js(E){if(E){var Y=E._owner,ae=xn(E.type,E._source,Y?Y.type:null);_a.setExtraStackFrame(ae)}else _a.setExtraStackFrame(null)}function wl(E,Y,ae,ge,Le){{var st=Function.call.bind(B);for(var Ve in E)if(st(E,Ve)){var ft=void 0;try{if(typeof E[Ve]!="function"){var ut=Error((ge||"React class")+": "+ae+" type `"+Ve+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof E[Ve]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw ut.name="Invariant Violation",ut}ft=E[Ve](Y,Ve,ge,ae,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Et){ft=Et}ft&&!(ft instanceof Error)&&(Js(Le),F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",ge||"React class",ae,Ve,typeof ft),Js(null)),ft instanceof Error&&!(ft.message in js)&&(js[ft.message]=!0,Js(Le),F("Failed %s type: %s",ae,ft.message),Js(null))}}}function An(E){if(E){var Y=E._owner,ae=xn(E.type,E._source,Y?Y.type:null);z(ae)}else z(null)}var bn;bn=!1;function gA(){if(P.current){var E=Q(P.current.type);if(E)return`

Check the render method of \``+E+"`."}return""}function $a(E){if(E!==void 0){var Y=E.fileName.replace(/^.*[\\\/]/,""),ae=E.lineNumber;return`

Check your code at `+Y+":"+ae+"."}return""}function as(E){return E!=null?$a(E.__source):""}var Sn={};function Ks(E){var Y=gA();if(!Y){var ae=typeof E=="string"?E:E.displayName||E.name;ae&&(Y=`

* @license React
* use-sync-external-store-shim.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
* @license React
* use-sync-external-store-shim/with-selector.development.js
*
*