import{r as Ne,j as g,L as yi}from"./index-yO2fnI_U.js";import{A as bi}from"./activity-BuPHIhcX.js";import{c as Vi}from"./createLucideIcon--UbIbcTq.js";import{A as Fr}from"./arrow-right-CdLxB45S.js";import{D as Lr,S as Ir}from"./server-iRNlPEQR.js";import{S as Vr,a as Br,R as Wr,Z as Ur,M as Yr,F as Gr}from"./zap-Bu0DD6by.js";import{F as Xr}from"./flask-conical-D3AzuNIp.js";import{C as qr}from"./compass-DWyEnJ5M.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=Vi("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=Vi("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);function xe(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function Bi(c,e){c.prototype=Object.create(e.prototype),c.prototype.constructor=c,c.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var se={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ct={duration:.5,overwrite:!1,delay:0},ei,X,z,ue=1e8,A=1/ue,Vt=Math.PI*2,Hr=Vt/4,Kr=0,Wi=Math.sqrt,Qr=Math.cos,Zr=Math.sin,G=function(e){return typeof e=="string"},L=function(e){return typeof e=="function"},be=function(e){return typeof e=="number"},ti=function(e){return typeof e>"u"},me=function(e){return typeof e=="object"},K=function(e){return e!==!1},ii=function(){return typeof window<"u"},xt=function(e){return L(e)||G(e)},Ui=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$=Array.isArray,Jr=/random\([^)]+\)/g,en=/,\s*/g,wi=/(?:-?\.?\d|\.)+/gi,Yi=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ge=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zt=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gi=/[+-]=-?[.\d]+/,tn=/[^,'"\[\]\s]+/gi,rn=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,R,de,Bt,ri,ae={},wt={},Xi,qi=function(e){return(wt=Ke(e,ae))&&ee},ni=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ut=function(e,t){return!t&&console.warn(e)},$i=function(e,t){return e&&(ae[e]=t)&&wt&&(wt[e]=t)||ae},ft=function(){return 0},nn={suppressEvents:!0,isStart:!0,kill:!1},yt={suppressEvents:!0,kill:!1},sn={suppressEvents:!0},si={},Se=[],Wt={},Hi,te={},Nt={},Ti=30,bt=[],ai="",oi=function(e){var t=e[0],i,r;if(me(t)||L(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=bt.length;r--&&!bt[r].targetTest(t););i=bt[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new gr(e[r],i)))||e.splice(r,1);return e},Le=function(e){return e._gsap||oi(fe(e))[0]._gsap},Ki=function(e,t,i){return(i=e[t])&&L(i)?e[t]():ti(i)&&e.getAttribute&&e.getAttribute(t)||i},Q=function(e,t){return(e=e.split(",")).forEach(t)||e},B=function(e){return Math.round(e*1e5)/1e5||0},N=function(e){return Math.round(e*1e7)/1e7||0},qe=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},an=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Tt=function(){var e=Se.length,t=Se.slice(0),i,r;for(Wt={},Se.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},li=function(e){return!!(e._initted||e._startAt||e.add)},Qi=function(e,t,i,r){Se.length&&!X&&Tt(),e.render(t,i,!!(X&&t<0&&li(e))),Se.length&&!X&&Tt()},Zi=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(tn).length<2?t:G(e)?e.trim():e},Ji=function(e){return e},oe=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},on=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ke=function(e,t){for(var i in t)e[i]=t[i];return e},ki=function c(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=me(t[i])?c(e[i]||(e[i]={}),t[i]):t[i]);return e},kt=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},at=function(e){var t=e.parent||R,i=e.keyframes?on($(e.keyframes)):oe;if(K(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},ln=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},er=function(e,t,i,r,n){var s=e[r],a;if(n)for(a=t[n];s&&s[n]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=s,t.parent=t._dp=e,t},Mt=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var n=t._prev,s=t._next;n?n._next=s:e[i]===t&&(e[i]=s),s?s._prev=n:e[r]===t&&(e[r]=n),t._next=t._prev=t.parent=null},Ce=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ie=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},cn=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ut=function(e,t,i,r){return e._startAt&&(X?e._startAt.revert(yt):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},un=function c(e){return!e||e._ts&&c(e.parent)},Si=function(e){return e._repeat?Qe(e._tTime,e=e.duration()+e._rDelay)*e:0},Qe=function(e,t){var i=Math.floor(e=N(e/t));return e&&i===e?i-1:i},St=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},At=function(e){return e._end=N(e._start+(e._tDur/Math.abs(e._ts||e._rts||A)||0))},Dt=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=N(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),At(e),i._dirty||Ie(i,e)),e},tr=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=St(e.rawTime(),t),(!t._dur||gt(0,t.totalDuration(),i)-t._tTime>A)&&t.render(i,!0)),Ie(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-A}},pe=function(e,t,i,r){return t.parent&&Ce(t),t._start=N((be(i)?i:i||e!==R?ce(e,i,t):e._time)+t._delay),t._end=N(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),er(e,t,"_first","_last",e._sort?"_start":0),Yt(t)||(e._recent=t),r||tr(e,t),e._ts<0&&Dt(e,e._tTime),e},ir=function(e,t){return(ae.ScrollTrigger||ni("scrollTrigger",t))&&ae.ScrollTrigger.create(t,e)},rr=function(e,t,i,r,n){if(ui(e,t,n),!e._initted)return 1;if(!i&&e._pt&&!X&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Hi!==ie.frame)return Se.push(e),e._lazy=[n,r],1},fn=function c(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||c(t))},Yt=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hn=function(e,t,i,r){var n=e.ratio,s=t<0||!t&&(!e._start&&fn(e)&&!(!e._initted&&Yt(e))||(e._ts<0||e._dp._ts<0)&&!Yt(e))?0:1,a=e._rDelay,o=0,l,u,d;if(a&&e._repeat&&(o=gt(0,e._tDur,t),u=Qe(o,a),e._yoyo&&u&1&&(s=1-s),u!==Qe(e._tTime,a)&&(n=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==n||X||r||e._zTime===A||!t&&e._zTime){if(!e._initted&&rr(e,t,r,i,o))return;for(d=e._zTime,e._zTime=t||(i?A:0),i||(i=t&&!d),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=o,l=e._pt;l;)l.r(s,l.d),l=l._next;t<0&&Ut(e,t,i,!0),e._onUpdate&&!i&&re(e,"onUpdate"),o&&e._repeat&&!i&&e.parent&&re(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Ce(e,1),!i&&!X&&(re(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dn=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ze=function(e,t,i,r){var n=e._repeat,s=N(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=n?n<0?1e10:N(s*(n+1)+e._rDelay*n):s,a>0&&!r&&Dt(e,e._tTime=e._tDur*a),e.parent&&At(e),i||Ie(e.parent,e),e},Oi=function(e){return e instanceof H?Ie(e):Ze(e,e._dur)},pn={_start:0,endTime:ft,totalDuration:ft},ce=function c(e,t,i){var r=e.labels,n=e._recent||pn,s=e.duration()>=ue?n.endTime(!1):e._dur,a,o,l;return G(t)&&(isNaN(t)||t in r)?(o=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),o==="<"||o===">"?(a>=0&&(t=t.replace(/=/,"")),(o==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?n:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=s),r[t]):(o=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&i&&(o=o/100*($(i)?i[0]:i).totalDuration()),a>1?c(e,t.substr(0,a-1),i)+o:s+o)):t==null?s:+t},ot=function(e,t,i){var r=be(t[1]),n=(r?2:1)+(e<2?0:1),s=t[n],a,o;if(r&&(s.duration=t[1]),s.parent=i,e){for(a=s,o=i;o&&!("immediateRender"in a);)a=o.vars.defaults||{},o=K(o.vars.inherit)&&o.parent;s.immediateRender=K(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[n-1]}return new W(t[0],s,t[n+1])},Ae=function(e,t){return e||e===0?t(e):t},gt=function(e,t,i){return i<e?e:i>t?t:i},q=function(e,t){return!G(e)||!(t=rn.exec(e))?"":t[1]},_n=function(e,t,i){return Ae(i,function(r){return gt(e,t,r)})},Gt=[].slice,nr=function(e,t){return e&&me(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&me(e[0]))&&!e.nodeType&&e!==de},mn=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var n;return G(r)&&!t||nr(r,1)?(n=i).push.apply(n,fe(r)):i.push(r)})||i},fe=function(e,t,i){return z&&!t&&z.selector?z.selector(e):G(e)&&!i&&(Bt||!Je())?Gt.call((t||ri).querySelectorAll(e),0):$(e)?mn(e,i):nr(e)?Gt.call(e,0):e?[e]:[]},Xt=function(e){return e=fe(e)[0]||ut("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return fe(t,i.querySelectorAll?i:i===e?ut("Invalid scope")||ri.createElement("div"):e)}},sr=function(e){return e.sort(function(){return .5-Math.random()})},ar=function(e){if(L(e))return e;var t=me(e)?e:{each:e},i=Ve(t.ease),r=t.from||0,n=parseFloat(t.base)||0,s={},a=r>0&&r<1,o=isNaN(r)||a,l=t.axis,u=r,d=r;return G(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&o&&(u=r[0],d=r[1]),function(p,h,_){var f=(_||t).length,m=s[f],x,b,v,w,y,O,T,S,k;if(!m){if(k=t.grid==="auto"?0:(t.grid||[1,ue])[1],!k){for(T=-ue;T<(T=_[k++].getBoundingClientRect().left)&&k<f;);k<f&&k--}for(m=s[f]=[],x=o?Math.min(k,f)*u-.5:r%k,b=k===ue?0:o?f*d/k-.5:r/k|0,T=0,S=ue,O=0;O<f;O++)v=O%k-x,w=b-(O/k|0),m[O]=y=l?Math.abs(l==="y"?w:v):Wi(v*v+w*w),y>T&&(T=y),y<S&&(S=y);r==="random"&&sr(m),m.max=T-S,m.min=S,m.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(k>f?f-1:l?l==="y"?f/k:k:Math.max(k,f/k))||0)*(r==="edges"?-1:1),m.b=f<0?n-f:n,m.u=q(t.amount||t.each)||0,i=i&&f<0?Mn(i):i}return f=(m[p]-m.min)/m.max||0,N(m.b+(i?i(f):f)*m.v)+m.u}},qt=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=N(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(be(i)?0:q(i))}},or=function(e,t){var i=$(e),r,n;return!i&&me(e)&&(r=i=e.radius||ue,e.values?(e=fe(e.values),(n=!be(e[0]))&&(r*=r)):e=qt(e.increment)),Ae(t,i?L(e)?function(s){return n=e(s),Math.abs(n-s)<=r?n:s}:function(s){for(var a=parseFloat(n?s.x:s),o=parseFloat(n?s.y:0),l=ue,u=0,d=e.length,p,h;d--;)n?(p=e[d].x-a,h=e[d].y-o,p=p*p+h*h):p=Math.abs(e[d]-a),p<l&&(l=p,u=d);return u=!r||l<=r?e[u]:s,n||u===s||be(s)?u:u+q(s)}:qt(e))},lr=function(e,t,i,r){return Ae($(e)?!t:i===!0?!!(i=0):!r,function(){return $(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},gn=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(n,s){return s(n)},r)}},xn=function(e,t){return function(i){return e(parseFloat(i))+(t||q(i))}},yn=function(e,t,i){return ur(e,t,0,1,i)},cr=function(e,t,i){return Ae(i,function(r){return e[~~t(r)]})},bn=function c(e,t,i){var r=t-e;return $(e)?cr(e,c(0,e.length),t):Ae(i,function(n){return(r+(n-e)%r)%r+e})},vn=function c(e,t,i){var r=t-e,n=r*2;return $(e)?cr(e,c(0,e.length-1),t):Ae(i,function(s){return s=(n+(s-e)%n)%n||0,e+(s>r?n-s:s)})},ht=function(e){return e.replace(Jr,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(en);return lr(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},ur=function(e,t,i,r,n){var s=t-e,a=r-i;return Ae(n,function(o){return i+((o-e)/s*a||0)})},wn=function c(e,t,i,r){var n=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!n){var s=G(e),a={},o,l,u,d,p;if(i===!0&&(r=1)&&(i=null),s)e={p:e},t={p:t};else if($(e)&&!$(t)){for(u=[],d=e.length,p=d-2,l=1;l<d;l++)u.push(c(e[l-1],e[l]));d--,n=function(_){_*=d;var f=Math.min(p,~~_);return u[f](_-f)},i=t}else r||(e=Ke($(e)?[]:{},e));if(!u){for(o in t)ci.call(a,e,o,"get",t[o]);n=function(_){return di(_,a)||(s?e.p:e)}}}return Ae(i,n)},Ci=function(e,t,i){var r=e.labels,n=ue,s,a,o;for(s in r)a=r[s]-t,a<0==!!i&&a&&n>(a=Math.abs(a))&&(o=s,n=a);return o},re=function(e,t,i){var r=e.vars,n=r[t],s=z,a=e._ctx,o,l,u;if(n)return o=r[t+"Params"],l=r.callbackScope||e,i&&Se.length&&Tt(),a&&(z=a),u=o?n.apply(l,o):n.call(l),z=s,u},nt=function(e){return Ce(e),e.scrollTrigger&&e.scrollTrigger.kill(!!X),e.progress()<1&&re(e,"onInterrupt"),e},Xe,fr=[],hr=function(e){if(e)if(e=!e.name&&e.default||e,ii()||e.headless){var t=e.name,i=L(e),r=t&&!i&&e.init?function(){this._props=[]}:e,n={init:ft,render:di,add:ci,kill:In,modifier:Ln,rawVars:0},s={targetTest:0,get:0,getSetter:hi,aliases:{},register:0};if(Je(),e!==r){if(te[t])return;oe(r,oe(kt(e,n),s)),Ke(r.prototype,Ke(n,kt(e,s))),te[r.prop=t]=r,e.targetTest&&(bt.push(r),si[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$i(t,r),e.register&&e.register(ee,r,Z)}else fr.push(e)},M=255,st={aqua:[0,M,M],lime:[0,M,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,M],navy:[0,0,128],white:[M,M,M],olive:[128,128,0],yellow:[M,M,0],orange:[M,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[M,0,0],pink:[M,192,203],cyan:[0,M,M],transparent:[M,M,M,0]},Rt=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*M+.5|0},dr=function(e,t,i){var r=e?be(e)?[e>>16,e>>8&M,e&M]:0:st.black,n,s,a,o,l,u,d,p,h,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),st[e])r=st[e];else if(e.charAt(0)==="#"){if(e.length<6&&(n=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+n+n+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&M,r&M,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&M,e&M]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(wi),!t)o=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(l+1):u+l-u*l,n=u*2-s,r.length>3&&(r[3]*=1),r[0]=Rt(o+1/3,n,s),r[1]=Rt(o,n,s),r[2]=Rt(o-1/3,n,s);else if(~e.indexOf("="))return r=e.match(Yi),i&&r.length<4&&(r[3]=1),r}else r=e.match(wi)||st.transparent;r=r.map(Number)}return t&&!_&&(n=r[0]/M,s=r[1]/M,a=r[2]/M,d=Math.max(n,s,a),p=Math.min(n,s,a),u=(d+p)/2,d===p?o=l=0:(h=d-p,l=u>.5?h/(2-d-p):h/(d+p),o=d===n?(s-a)/h+(s<a?6:0):d===s?(a-n)/h+2:(n-s)/h+4,o*=60),r[0]=~~(o+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},pr=function(e){var t=[],i=[],r=-1;return e.split(Oe).forEach(function(n){var s=n.match(Ge)||[];t.push.apply(t,s),i.push(r+=s.length+1)}),t.c=i,t},Pi=function(e,t,i){var r="",n=(e+r).match(Oe),s=t?"hsla(":"rgba(",a=0,o,l,u,d;if(!n)return e;if(n=n.map(function(p){return(p=dr(p,t,1))&&s+(t?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),i&&(u=pr(e),o=i.c,o.join(r)!==u.c.join(r)))for(l=e.replace(Oe,"1").split(Ge),d=l.length-1;a<d;a++)r+=l[a]+(~o.indexOf(a)?n.shift()||s+"0,0,0,0)":(u.length?u:n.length?n:i).shift());if(!l)for(l=e.split(Oe),d=l.length-1;a<d;a++)r+=l[a]+n[a];return r+l[d]},Oe=function(){var c="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in st)c+="|"+e+"\\b";return new RegExp(c+")","gi")}(),Tn=/hsl[a]?\(/,_r=function(e){var t=e.join(" "),i;if(Oe.lastIndex=0,Oe.test(t))return i=Tn.test(t),e[1]=Pi(e[1],i),e[0]=Pi(e[0],i,pr(e[1])),!0},dt,ie=function(){var c=Date.now,e=500,t=33,i=c(),r=i,n=1e3/240,s=n,a=[],o,l,u,d,p,h,_=function f(m){var x=c()-r,b=m===!0,v,w,y,O;if((x>e||x<0)&&(i+=x-t),r+=x,y=r-i,v=y-s,(v>0||b)&&(O=++d.frame,p=y-d.time*1e3,d.time=y=y/1e3,s+=v+(v>=n?4:n-v),w=1),b||(o=l(f)),w)for(h=0;h<a.length;h++)a[h](y,p,O,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return p/(1e3/(m||60))},wake:function(){Xi&&(!Bt&&ii()&&(de=Bt=window,ri=de.document||{},ae.gsap=ee,(de.gsapVersions||(de.gsapVersions=[])).push(ee.version),qi(wt||de.GreenSockGlobals||!de.gsap&&de||{}),fr.forEach(hr)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,o&&d.sleep(),l=u||function(m){return setTimeout(m,s-d.time*1e3+1|0)},dt=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(o),dt=0,l=ft},lagSmoothing:function(m,x){e=m||1/0,t=Math.min(x||33,e)},fps:function(m){n=1e3/(m||240),s=d.time*1e3+n},add:function(m,x,b){var v=x?function(w,y,O,T){m(w,y,O,T),d.remove(v)}:m;return d.remove(m),a[b?"unshift":"push"](v),Je(),v},remove:function(m,x){~(x=a.indexOf(m))&&a.splice(x,1)&&h>=x&&h--},_listeners:a},d}(),Je=function(){return!dt&&ie.wake()},P={},kn=/^[\d.\-M][\d.\-,\s]/,Sn=/["']/g,On=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],n=1,s=i.length,a,o,l;n<s;n++)o=i[n],a=n!==s-1?o.lastIndexOf(","):o.length,l=o.substr(0,a),t[r]=isNaN(l)?l.replace(Sn,"").trim():+l,r=o.substr(a+1).trim();return t},Cn=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Pn=function(e){var t=(e+"").split("("),i=P[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[On(t[1])]:Cn(e).split(",").map(Zi)):P._CE&&kn.test(e)?P._CE("",e):i},Mn=function(e){return function(t){return 1-e(1-t)}},Ve=function(e,t){return e&&(L(e)?e:P[e]||Pn(e))||t},We=function(e,t,i,r){i===void 0&&(i=function(o){return 1-t(1-o)}),r===void 0&&(r=function(o){return o<.5?t(o*2)/2:1-t((1-o)*2)/2});var n={easeIn:t,easeOut:i,easeInOut:r},s;return Q(e,function(a){P[a]=ae[a]=n,P[s=a.toLowerCase()]=i;for(var o in n)P[s+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=P[a+"."+o]=n[o]}),n},mr=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},jt=function c(e,t,i){var r=t>=1?t:1,n=(i||(e?.3:.45))/(t<1?t:1),s=n/Vt*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Zr((u-s)*n)+1},o=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:mr(a);return n=Vt/n,o.config=function(l,u){return c(e,l,u)},o},Et=function c(e,t){t===void 0&&(t=1.70158);var i=function(s){return s?--s*s*((t+1)*s+t)+1:0},r=e==="out"?i:e==="in"?function(n){return 1-i(1-n)}:mr(i);return r.config=function(n){return c(e,n)},r};Q("Linear,Quad,Cubic,Quart,Quint,Strong",function(c,e){var t=e<5?e+1:e;We(c+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});P.Linear.easeNone=P.none=P.Linear.easeIn;We("Elastic",jt("in"),jt("out"),jt());(function(c,e){var t=1/e,i=2*t,r=2.5*t,n=function(a){return a<t?c*a*a:a<i?c*Math.pow(a-1.5/e,2)+.75:a<r?c*(a-=2.25/e)*a+.9375:c*Math.pow(a-2.625/e,2)+.984375};We("Bounce",function(s){return 1-n(1-s)},n)})(7.5625,2.75);We("Expo",function(c){return Math.pow(2,10*(c-1))*c+c*c*c*c*c*c*(1-c)});We("Circ",function(c){return-(Wi(1-c*c)-1)});We("Sine",function(c){return c===1?1:-Qr(c*Hr)+1});We("Back",Et("in"),Et("out"),Et());P.SteppedEase=P.steps=ae.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),n=t?1:0,s=1-A;return function(a){return((r*gt(0,s,a)|0)+n)*i}}};ct.ease=P["quad.out"];Q("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(c){return ai+=c+","+c+"Params,"});var gr=function(e,t){this.id=Kr++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ki,this.set=t?t.getSetter:hi},pt=function(){function c(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ze(this,+t.duration,1,1),this.data=t.data,z&&(this._ctx=z,z.data.push(this)),dt||ie.wake()}var e=c.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ze(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Je(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Dt(this,i),!n._dp||n.parent||tr(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&pe(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===A||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Qi(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Si(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Si(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*n,r):this._repeat?Qe(this._tTime,n)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-A?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?St(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-A?0:this._rts,this.totalTime(gt(-Math.abs(this._delay),this.totalDuration(),n),r!==!1),At(this),cn(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Je(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==A&&(this._tTime-=A)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=N(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&pe(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(K(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?St(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=sn);var r=X;return X=i,li(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),X=r,this},e.globalTime=function(i){for(var r=this,n=arguments.length?i:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):n},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Oi(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Oi(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ce(this,i),K(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,K(r)),this._dur||(this._zTime=-A),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-A:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-A,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,n;return!!(!i||this._ts&&this._initted&&i.isActive()&&(n=i.rawTime(!0))>=r&&n<this.endTime(!0)-A)},e.eventCallback=function(i,r,n){var s=this.vars;return arguments.length>1?(r?(s[i]=r,n&&(s[i+"Params"]=n),i==="onUpdate"&&(this._onUpdate=r)):delete s[i],this):s[i]},e.then=function(i){var r=this,n=r._prom;return new Promise(function(s){var a=L(i)?i:Ji,o=function(){var u=r.then;r.then=null,n&&n(),L(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),s(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){nt(this)},c}();oe(pt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-A,_prom:0,_ps:!1,_rts:1});var H=function(c){Bi(e,c);function e(i,r){var n;return i===void 0&&(i={}),n=c.call(this,i)||this,n.labels={},n.smoothChildTiming=!!i.smoothChildTiming,n.autoRemoveChildren=!!i.autoRemoveChildren,n._sort=K(i.sortChildren),R&&pe(i.parent||R,xe(n),r),i.reversed&&n.reverse(),i.paused&&n.paused(!0),i.scrollTrigger&&ir(xe(n),i.scrollTrigger),n}var t=e.prototype;return t.to=function(r,n,s){return ot(0,arguments,this),this},t.from=function(r,n,s){return ot(1,arguments,this),this},t.fromTo=function(r,n,s,a){return ot(2,arguments,this),this},t.set=function(r,n,s){return n.duration=0,n.parent=this,at(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new W(r,n,ce(this,s),1),this},t.call=function(r,n,s){return pe(this,W.delayedCall(0,r,n),s)},t.staggerTo=function(r,n,s,a,o,l,u){return s.duration=n,s.stagger=s.stagger||a,s.onComplete=l,s.onCompleteParams=u,s.parent=this,new W(r,s,ce(this,o)),this},t.staggerFrom=function(r,n,s,a,o,l,u){return s.runBackwards=1,at(s).immediateRender=K(s.immediateRender),this.staggerTo(r,n,s,a,o,l,u)},t.staggerFromTo=function(r,n,s,a,o,l,u,d){return a.startAt=s,at(a).immediateRender=K(a.immediateRender),this.staggerTo(r,n,a,o,l,u,d)},t.render=function(r,n,s){var a=this._time,o=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:N(r),d=this._zTime<0!=r<0&&(this._initted||!l),p,h,_,f,m,x,b,v,w,y,O,T;if(this!==R&&u>o&&r>=0&&(u=o),u!==this._tTime||s||d){if(a!==this._time&&l&&(u+=this._time-a,r+=this._time-a),p=u,w=this._start,v=this._ts,x=!v,d&&(l||(a=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(O=this._yoyo,m=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,n,s);if(p=N(u%m),u===o?(f=this._repeat,p=l):(y=N(u/m),f=~~y,f&&f===y&&(p=l,f--),p>l&&(p=l)),y=Qe(this._tTime,m),!a&&this._tTime&&y!==f&&this._tTime-y*m-this._dur<=0&&(y=f),O&&f&1&&(p=l-p,T=1),f!==y&&!this._lock){var S=O&&y&1,k=S===(O&&f&1);if(f<y&&(S=!S),a=S?0:u%l?l:u,this._lock=1,this.render(a||(T?0:N(f*m)),n,!l)._lock=0,this._tTime=u,!n&&this.parent&&re(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,y=f),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,o=this._tDur,k&&(this._lock=2,a=S?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!x)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=dn(this,N(a),N(p)),b&&(u-=p-(p=b._start))),this._tTime=u,this._time=p,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&l&&!n&&!y&&(re(this,"onStart"),this._tTime!==u))return this;if(p>=a&&r>=0)for(h=this._first;h;){if(_=h._next,(h._act||p>=h._start)&&h._ts&&b!==h){if(h.parent!==this)return this.render(r,n,s);if(h.render(h._ts>0?(p-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(p-h._start)*h._ts,n,s),p!==this._time||!this._ts&&!x){b=0,_&&(u+=this._zTime=-A);break}}h=_}else{h=this._last;for(var C=r<0?r:p;h;){if(_=h._prev,(h._act||C<=h._end)&&h._ts&&b!==h){if(h.parent!==this)return this.render(r,n,s);if(h.render(h._ts>0?(C-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(C-h._start)*h._ts,n,s||X&&li(h)),p!==this._time||!this._ts&&!x){b=0,_&&(u+=this._zTime=C?-A:A);break}}h=_}}if(b&&!n&&(this.pause(),b.render(p>=a?0:-A)._zTime=p>=a?1:-1,this._ts))return this._start=w,At(this),this.render(r,n,s);this._onUpdate&&!n&&re(this,"onUpdate",!0),(u===o&&this._tTime>=this.totalDuration()||!u&&a)&&(w===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===o&&this._ts>0||!u&&this._ts<0)&&Ce(this,1),!n&&!(r<0&&!a)&&(u||a||!o)&&(re(this,u===o&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<o&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,n){var s=this;if(be(n)||(n=ce(this,n,r)),!(r instanceof pt)){if($(r))return r.forEach(function(a){return s.add(a,n)}),this;if(G(r))return this.addLabel(r,n);if(L(r))r=W.delayedCall(0,r);else return this}return this!==r?pe(this,r,n):this},t.getChildren=function(r,n,s,a){r===void 0&&(r=!0),n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=-ue);for(var o=[],l=this._first;l;)l._start>=a&&(l instanceof W?n&&o.push(l):(s&&o.push(l),r&&o.push.apply(o,l.getChildren(!0,n,s)))),l=l._next;return o},t.getById=function(r){for(var n=this.getChildren(1,1,1),s=n.length;s--;)if(n[s].vars.id===r)return n[s]},t.remove=function(r){return G(r)?this.removeLabel(r):L(r)?this.killTweensOf(r):(r.parent===this&&Mt(this,r),r===this._recent&&(this._recent=this._last),Ie(this))},t.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=N(ie.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),c.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},t.addLabel=function(r,n){return this.labels[r]=ce(this,n),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,n,s){var a=W.delayedCall(0,n||ft,s);return a.data="isPause",this._hasPause=1,pe(this,a,ce(this,r))},t.removePause=function(r){var n=this._first;for(r=ce(this,r);n;)n._start===r&&n.data==="isPause"&&Ce(n),n=n._next},t.killTweensOf=function(r,n,s){for(var a=this.getTweensOf(r,s),o=a.length;o--;)we!==a[o]&&a[o].kill(r,n);return this},t.getTweensOf=function(r,n){for(var s=[],a=fe(r),o=this._first,l=be(n),u;o;)o instanceof W?an(o._targets,a)&&(l?(!we||o._initted&&o._ts)&&o.globalTime(0)<=n&&o.globalTime(o.totalDuration())>n:!n||o.isActive())&&s.push(o):(u=o.getTweensOf(a,n)).length&&s.push.apply(s,u),o=o._next;return s},t.tweenTo=function(r,n){n=n||{};var s=this,a=ce(s,r),o=n,l=o.startAt,u=o.onStart,d=o.onStartParams,p=o.immediateRender,h,_=W.to(s,oe({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:n.duration||Math.abs((a-(l&&"time"in l?l.time:s._time))/s.timeScale())||A,onStart:function(){if(s.pause(),!h){var m=n.duration||Math.abs((a-(l&&"time"in l?l.time:s._time))/s.timeScale());_._dur!==m&&Ze(_,m,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},n));return p?_.render(0):_},t.tweenFromTo=function(r,n,s){return this.tweenTo(n,oe({startAt:{time:ce(this,r)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Ci(this,ce(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Ci(this,ce(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+A)},t.shiftChildren=function(r,n,s){s===void 0&&(s=0);var a=this._first,o=this.labels,l;for(r=N(r);a;)a._start>=s&&(a._start+=r,a._end+=r),a=a._next;if(n)for(l in o)o[l]>=s&&(o[l]+=r);return Ie(this)},t.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return c.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,s;n;)s=n._next,this.remove(n),n=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ie(this)},t.totalDuration=function(r){var n=0,s=this,a=s._last,o=ue,l,u,d;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(d=s.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>o&&s._sort&&a._ts&&!s._lock?(s._lock=1,pe(s,a,u-a._delay,1)._lock=0):o=u,u<0&&a._ts&&(n-=u,(!d&&!s._dp||d&&d.smoothChildTiming)&&(s._start+=N(u/s._ts),s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),o=0),a._end>n&&a._ts&&(n=a._end),a=l;Ze(s,s===R&&s._time>n?s._time:n,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(R._ts&&(Qi(R,St(r,R)),Hi=ie.frame),ie.frame>=Ti){Ti+=se.autoSleep||120;var n=R._first;if((!n||!n._ts)&&se.autoSleep&&ie._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||ie.sleep()}}},e}(pt);oe(H.prototype,{_lock:0,_hasPause:0,_forcing:0});var An=function(e,t,i,r,n,s,a){var o=new Z(this._pt,e,t,0,1,Tr,null,n),l=0,u=0,d,p,h,_,f,m,x,b;for(o.b=i,o.e=r,i+="",r+="",(x=~r.indexOf("random("))&&(r=ht(r)),s&&(b=[i,r],s(b,e,t),i=b[0],r=b[1]),p=i.match(zt)||[];d=zt.exec(r);)_=d[0],f=r.substring(l,d.index),h?h=(h+1)%5:f.substr(-5)==="rgba("&&(h=1),_!==p[u++]&&(m=parseFloat(p[u-1])||0,o._pt={_next:o._pt,p:f||u===1?f:",",s:m,c:_.charAt(1)==="="?qe(m,_)-m:parseFloat(_)-m,m:h&&h<4?Math.round:0},l=zt.lastIndex);return o.c=l<r.length?r.substring(l,r.length):"",o.fp=a,(Gi.test(r)||x)&&(o.e=0),this._pt=o,o},ci=function(e,t,i,r,n,s,a,o,l,u){L(r)&&(r=r(n||0,e,s));var d=e[t],p=i!=="get"?i:L(d)?l?e[t.indexOf("set")||!L(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():d,h=L(d)?l?jn:vr:fi,_;if(G(r)&&(~r.indexOf("random(")&&(r=ht(r)),r.charAt(1)==="="&&(_=qe(p,r)+(q(p)||0),(_||_===0)&&(r=_))),!u||p!==r||$t)return!isNaN(p*r)&&r!==""?(_=new Z(this._pt,e,t,+p||0,r-(p||0),typeof d=="boolean"?Fn:wr,0,h),l&&(_.fp=l),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&ni(t,r),An.call(this,e,t,p,r,h,o||se.stringFilter,l))},Dn=function(e,t,i,r,n){if(L(e)&&(e=lt(e,n,t,i,r)),!me(e)||e.style&&e.nodeType||$(e)||Ui(e))return G(e)?lt(e,n,t,i,r):e;var s={},a;for(a in e)s[a]=lt(e[a],n,t,i,r);return s},xr=function(e,t,i,r,n,s){var a,o,l,u;if(te[e]&&(a=new te[e]).init(n,a.rawVars?t[e]:Dn(t[e],r,n,s,i),i,r,s)!==!1&&(i._pt=o=new Z(i._pt,n,e,0,1,a.render,a,0,a.priority),i!==Xe))for(l=i._ptLookup[i._targets.indexOf(n)],u=a._props.length;u--;)l[a._props[u]]=o;return a},we,$t,ui=function c(e,t,i){var r=e.vars,n=r.ease,s=r.startAt,a=r.immediateRender,o=r.lazy,l=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,p=r.keyframes,h=r.autoRevert,_=e._dur,f=e._startAt,m=e._targets,x=e.parent,b=x&&x.data==="nested"?x.vars.targets:m,v=e._overwrite==="auto"&&!ei,w=e.timeline,y=r.easeReverse||d,O,T,S,k,C,I,E,D,F,Y,U,V,le;if(w&&(!p||!n)&&(n="none"),e._ease=Ve(n,ct.ease),e._rEase=y&&(Ve(y)||e._ease),e._from=!w&&!!r.runBackwards,e._from&&(e.ratio=1),!w||p&&!r.stagger){if(D=m[0]?Le(m[0]).harness:0,V=D&&r[D.prop],O=kt(r,si),f&&(f._zTime<0&&f.progress(1),t<0&&u&&a&&!h?f.render(-1,!0):f.revert(u&&_?yt:nn),f._lazy=0),s){if(Ce(e._startAt=W.set(m,oe({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!f&&K(o),startAt:null,delay:0,onUpdate:l&&function(){return re(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(X||!a&&!h)&&e._startAt.revert(yt),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!f){if(t&&(a=!1),S=oe({overwrite:!1,data:"isFromStart",lazy:a&&!f&&K(o),immediateRender:a,stagger:0,parent:x},O),V&&(S[D.prop]=V),Ce(e._startAt=W.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(X?e._startAt.revert(yt):e._startAt.render(-1,!0)),e._zTime=t,!a)c(e._startAt,A,A);else if(!t)return}for(e._pt=e._ptCache=0,o=_&&K(o)||o&&!_,T=0;T<m.length;T++){if(C=m[T],E=C._gsap||oi(m)[T]._gsap,e._ptLookup[T]=Y={},Wt[E.id]&&Se.length&&Tt(),U=b===m?T:b.indexOf(C),D&&(F=new D).init(C,V||O,e,U,b)!==!1&&(e._pt=k=new Z(e._pt,C,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(Ue){Y[Ue]=k}),F.priority&&(I=1)),!D||V)for(S in O)te[S]&&(F=xr(S,O,e,U,C,b))?F.priority&&(I=1):Y[S]=k=ci.call(e,C,S,"get",O[S],U,b,0,r.stringFilter);e._op&&e._op[T]&&e.kill(C,e._op[T]),v&&e._pt&&(we=e,R.killTweensOf(C,Y,e.globalTime(t)),le=!e.parent,we=0),e._pt&&o&&(Wt[E.id]=1)}I&&kr(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!le,p&&t<=0&&w.render(ue,!0,!0)},zn=function(e,t,i,r,n,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,p,h;if(!l)for(l=e._ptCache[t]=[],p=e._ptLookup,h=e._targets.length;h--;){if(u=p[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return $t=1,e.vars[t]="+=0",ui(e,a),$t=0,o?ut(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(u)}for(h=l.length;h--;)d=l[h],u=d._pt||d,u.s=(r||r===0)&&!n?r:u.s+(r||0)+s*u.c,u.c=i-u.s,d.e&&(d.e=B(i)+q(d.e)),d.b&&(d.b=u.s+q(d.b))},Nn=function(e,t){var i=e[0]?Le(e[0]).harness:0,r=i&&i.aliases,n,s,a,o;if(!r)return t;n=Ke({},t);for(s in r)if(s in n)for(o=r[s].split(","),a=o.length;a--;)n[o[a]]=n[s];return n},Rn=function(e,t,i,r){var n=t.ease||r||"power1.inOut",s,a;if($(t))a=i[e]||(i[e]=[]),t.forEach(function(o,l){return a.push({t:l/(t.length-1)*100,v:o,e:n})});else for(s in t)a=i[s]||(i[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:n})},lt=function(e,t,i,r,n){return L(e)?e.call(t,i,r,n):G(e)&&~e.indexOf("random(")?ht(e):e},yr=ai+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",br={};Q(yr+",id,stagger,delay,duration,paused,scrollTrigger",function(c){return br[c]=1});var W=function(c){Bi(e,c);function e(i,r,n,s){var a;typeof r=="number"&&(n.duration=r,r=n,n=null),a=c.call(this,s?r:at(r))||this;var o=a.vars,l=o.duration,u=o.delay,d=o.immediateRender,p=o.stagger,h=o.overwrite,_=o.keyframes,f=o.defaults,m=o.scrollTrigger,x=r.parent||R,b=($(i)||Ui(i)?be(i[0]):"length"in r)?[i]:fe(i),v,w,y,O,T,S,k,C;if(a._targets=b.length?oi(b):ut("GSAP target "+i+" not found. https://gsap.com",!se.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,_||p||xt(l)||xt(u)){r=a.vars;var I=r.easeReverse||r.yoyoEase;if(v=a.timeline=new H({data:"nested",defaults:f||{},targets:x&&x.data==="nested"?x.vars.targets:b}),v.kill(),v.parent=v._dp=xe(a),v._start=0,p||xt(l)||xt(u)){if(O=b.length,k=p&&ar(p),me(p))for(T in p)~yr.indexOf(T)&&(C||(C={}),C[T]=p[T]);for(w=0;w<O;w++)y=kt(r,br),y.stagger=0,I&&(y.easeReverse=I),C&&Ke(y,C),S=b[w],y.duration=+lt(l,xe(a),w,S,b),y.delay=(+lt(u,xe(a),w,S,b)||0)-a._delay,!p&&O===1&&y.delay&&(a._delay=u=y.delay,a._start+=u,y.delay=0),v.to(S,y,k?k(w,S,b):0),v._ease=P.none;v.duration()?l=u=0:a.timeline=0}else if(_){at(oe(v.vars.defaults,{ease:"none"})),v._ease=Ve(_.ease||r.ease||"none");var E=0,D,F,Y;if($(_))_.forEach(function(U){return v.to(b,U,">")}),v.duration();else{y={};for(T in _)T==="ease"||T==="easeEach"||Rn(T,_[T],y,_.easeEach);for(T in y)for(D=y[T].sort(function(U,V){return U.t-V.t}),E=0,w=0;w<D.length;w++)F=D[w],Y={ease:F.e,duration:(F.t-(w?D[w-1].t:0))/100*l},Y[T]=F.v,v.to(b,Y,E),E+=Y.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||a.duration(l=v.duration())}else a.timeline=0;return h===!0&&!ei&&(we=xe(a),R.killTweensOf(b),we=0),pe(x,xe(a),n),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!l&&!_&&a._start===N(x._time)&&K(d)&&un(xe(a))&&x.data!=="nested")&&(a._tTime=-A,a.render(Math.max(0,-u)||0)),m&&ir(xe(a),m),a}var t=e.prototype;return t.render=function(r,n,s){var a=this._time,o=this._tDur,l=this._dur,u=r<0,d=r>o-A&&!u?o:r<A?0:r,p,h,_,f,m,x,b,v;if(!l)hn(this,r,n,s);else if(d!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(p=d,v=this.timeline,this._repeat){if(f=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+r,n,s);if(p=N(d%f),d===o?(_=this._repeat,p=l):(m=N(d/f),_=~~m,_&&_===m?(p=l,_--):p>l&&(p=l)),x=this._yoyo&&_&1,x&&(p=l-p),m=Qe(this._tTime,f),p===a&&!s&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!x&&!this._lock&&p!==f&&this._initted&&(this._lock=s=1,this.render(N(f*_),!0).invalidate()._lock=0)}if(!this._initted){if(rr(this,u?r:p,s,n,d))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(r,n,s)}if(this._rEase){var w=p<a;if(w!==this._inv){var y=w?a:l-a;this._inv=w,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=y?(w?-1:1)/y:0,this._invScale=w?-this.ratio:1-this.ratio,this._invEase=w?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((p-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(p/l);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!n&&!m&&(re(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(b,h.d),h=h._next;v&&v.render(r<0?r:v._dur*v._ease(p/this._dur),n,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(u&&Ut(this,r,n,s),re(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!n&&this.parent&&re(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Ut(this,r,!0,!0),(r||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ce(this,1),!n&&!(u&&!a)&&(d||a||x)&&(re(this,d===o?"onComplete":"onReverseComplete",!0),this._prom&&!(d<o&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),c.prototype.invalidate.call(this,r)},t.resetTo=function(r,n,s,a,o){dt||ie.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ui(this,l),u=this._ease(l/this._dur),zn(this,r,n,s,a,u,l,o)?this.resetTo(r,n,s,a,1):(Dt(this,0),this.parent||er(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?nt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!X),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,we&&we.vars.overwrite!==!0)._first||nt(this),this.parent&&s!==this.timeline.totalDuration()&&Ze(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,o=r?fe(r):a,l=this._ptLookup,u=this._pt,d,p,h,_,f,m,x;if((!n||n==="all")&&ln(a,o))return n==="all"&&(this._pt=0),nt(this);for(d=this._op=this._op||[],n!=="all"&&(G(n)&&(f={},Q(n,function(b){return f[b]=1}),n=f),n=Nn(a,n)),x=a.length;x--;)if(~o.indexOf(a[x])){p=l[x],n==="all"?(d[x]=n,_=p,h={}):(h=d[x]=d[x]||{},_=n);for(f in _)m=p&&p[f],m&&((!("kill"in m.d)||m.d.kill(f)===!0)&&Mt(this,m,"_pt"),delete p[f]),h!=="all"&&(h[f]=1)}return this._initted&&!this._pt&&u&&nt(this),this},e.to=function(r,n){return new e(r,n,arguments[2])},e.from=function(r,n){return ot(1,arguments)},e.delayedCall=function(r,n,s,a){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(r,n,s){return ot(2,arguments)},e.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(r,n)},e.killTweensOf=function(r,n,s){return R.killTweensOf(r,n,s)},e}(pt);oe(W.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Q("staggerTo,staggerFrom,staggerFromTo",function(c){W[c]=function(){var e=new H,t=Gt.call(arguments,0);return t.splice(c==="staggerFromTo"?5:4,0,0),e[c].apply(e,t)}});var fi=function(e,t,i){return e[t]=i},vr=function(e,t,i){return e[t](i)},jn=function(e,t,i,r){return e[t](r.fp,i)},En=function(e,t,i){return e.setAttribute(t,i)},hi=function(e,t){return L(e[t])?vr:ti(e[t])&&e.setAttribute?En:fi},wr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Fn=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Tr=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},di=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Ln=function(e,t,i,r){for(var n=this._pt,s;n;)s=n._next,n.p===r&&n.modifier(e,t,i),n=s},In=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Mt(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Vn=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},kr=function(e){for(var t=e._pt,i,r,n,s;t;){for(i=t._next,r=n;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:s)?t._prev._next=t:n=t,(t._next=r)?r._prev=t:s=t,t=i}e._pt=n},Z=function(){function c(t,i,r,n,s,a,o,l,u){this.t=i,this.s=n,this.c=s,this.p=r,this.r=a||wr,this.d=o||this,this.set=l||fi,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=c.prototype;return e.modifier=function(i,r,n){this.mSet=this.mSet||this.set,this.set=Vn,this.m=i,this.mt=n,this.tween=r},c}();Q(ai+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(c){return si[c]=1});ae.TweenMax=ae.TweenLite=W;ae.TimelineLite=ae.TimelineMax=H;R=new H({sortChildren:!1,defaults:ct,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});se.stringFilter=_r;var Be=[],vt={},Bn=[],Mi=0,Wn=0,Ft=function(e){return(vt[e]||Bn).map(function(t){return t()})},Ht=function(){var e=Date.now(),t=[];e-Mi>2&&(Ft("matchMediaInit"),Be.forEach(function(i){var r=i.queries,n=i.conditions,s,a,o,l;for(a in r)s=de.matchMedia(r[a]).matches,s&&(o=1),s!==n[a]&&(n[a]=s,l=1);l&&(i.revert(),o&&t.push(i))}),Ft("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Mi=e,Ft("matchMedia"))},Sr=function(){function c(t,i){this.selector=i&&Xt(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Wn++,t&&this.add(t)}var e=c.prototype;return e.add=function(i,r,n){L(i)&&(n=r,r=i,i=L);var s=this,a=function(){var l=z,u=s.selector,d;return l&&l!==s&&l.data.push(s),n&&(s.selector=Xt(n)),z=s,d=r.apply(s,arguments),L(d)&&s._r.push(d),z=l,s.selector=u,s.isReverted=!1,d};return s.last=a,i===L?a(s,function(o){return s.add(null,o)}):i?s[i]=a:a},e.ignore=function(i){var r=z;z=null,i(this),z=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof c?i.push.apply(i,r.getTweens()):r instanceof W&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var n=this;if(i?function(){for(var a=n.getTweens(),o=n.data.length,l;o--;)l=n.data[o],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),o=n.data.length;o--;)l=n.data[o],l instanceof H?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof W)&&l.revert&&l.revert(i);n._r.forEach(function(u){return u(i,n)}),n.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var s=Be.length;s--;)Be[s].id===this.id&&Be.splice(s,1)},e.revert=function(i){this.kill(i||{})},c}(),Un=function(){function c(t){this.contexts=[],this.scope=t,z&&z.data.push(this)}var e=c.prototype;return e.add=function(i,r,n){me(i)||(i={matches:i});var s=new Sr(0,n||this.scope),a=s.conditions={},o,l,u;z&&!s.selector&&(s.selector=z.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=i;for(l in i)l==="all"?u=1:(o=de.matchMedia(i[l]),o&&(Be.indexOf(s)<0&&Be.push(s),(a[l]=o.matches)&&(u=1),o.addListener?o.addListener(Ht):o.addEventListener("change",Ht)));return u&&r(s,function(d){return s.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},c}(),Ot={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return hr(r)})},timeline:function(e){return new H(e)},getTweensOf:function(e,t){return R.getTweensOf(e,t)},getProperty:function(e,t,i,r){G(e)&&(e=fe(e)[0]);var n=Le(e||{}).get,s=i?Ji:Zi;return i==="native"&&(i=""),e&&(t?s((te[t]&&te[t].get||n)(e,t,i,r)):function(a,o,l){return s((te[a]&&te[a].get||n)(e,a,o,l))})},quickSetter:function(e,t,i){if(e=fe(e),e.length>1){var r=e.map(function(u){return ee.quickSetter(u,t,i)}),n=r.length;return function(u){for(var d=n;d--;)r[d](u)}}e=e[0]||{};var s=te[t],a=Le(e),o=a.harness&&(a.harness.aliases||{})[t]||t,l=s?function(u){var d=new s;Xe._pt=0,d.init(e,i?u+i:u,Xe,0,[e]),d.render(1,d),Xe._pt&&di(1,Xe)}:a.set(e,o);return s?l:function(u){return l(e,o,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,n=ee.to(e,oe((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),s=function(o,l,u){return n.resetTo(t,o,l,u)};return s.tween=n,s},isTweening:function(e){return R.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ve(e.ease,ct.ease)),ki(ct,e||{})},config:function(e){return ki(se,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,n=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!te[a]&&!ae[a]&&ut(t+" effect requires "+a+" plugin.")}),Nt[t]=function(a,o,l){return i(fe(a),oe(o||{},n),l)},s&&(H.prototype[t]=function(a,o,l){return this.add(Nt[t](a,me(o)?o:(l=o)&&{},this),l)})},registerEase:function(e,t){P[e]=Ve(t)},parseEase:function(e,t){return arguments.length?Ve(e,t):P},getById:function(e){return R.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new H(e),r,n;for(i.smoothChildTiming=K(e.smoothChildTiming),R.remove(i),i._dp=0,i._time=i._tTime=R._time,r=R._first;r;)n=r._next,(t||!(!r._dur&&r instanceof W&&r.vars.onComplete===r._targets[0]))&&pe(i,r,r._start-r._delay),r=n;return pe(R,i,0),i},context:function(e,t){return e?new Sr(e,t):z},matchMedia:function(e){return new Un(e)},matchMediaRefresh:function(){return Be.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Ht()},addEventListener:function(e,t){var i=vt[e]||(vt[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=vt[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:bn,wrapYoyo:vn,distribute:ar,random:lr,snap:or,normalize:yn,getUnit:q,clamp:_n,splitColor:dr,toArray:fe,selector:Xt,mapRange:ur,pipe:gn,unitize:xn,interpolate:wn,shuffle:sr},install:qi,effects:Nt,ticker:ie,updateRoot:H.updateRoot,plugins:te,globalTimeline:R,core:{PropTween:Z,globals:$i,Tween:W,Timeline:H,Animation:pt,getCache:Le,_removeLinkedListItem:Mt,reverting:function(){return X},context:function(e){return e&&z&&(z.data.push(e),e._ctx=z),z},suppressOverwrites:function(e){return ei=e}}};Q("to,from,fromTo,delayedCall,set,killTweensOf",function(c){return Ot[c]=W[c]});ie.add(H.updateRoot);Xe=Ot.to({},{duration:0});var Yn=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Gn=function(e,t){var i=e._targets,r,n,s;for(r in t)for(n=i.length;n--;)s=e._ptLookup[n][r],s&&(s=s.d)&&(s._pt&&(s=Yn(s,r)),s&&s.modifier&&s.modifier(t[r],e,i[n],r))},Lt=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,n,s){s._onInit=function(a){var o,l;if(G(n)&&(o={},Q(n,function(u){return o[u]=1}),n=o),t){o={};for(l in n)o[l]=t(n[l]);n=o}Gn(a,n)}}}},ee=Ot.registerPlugin({name:"attr",init:function(e,t,i,r,n){var s,a,o;this.tween=i;for(s in t)o=e.getAttribute(s)||"",a=this.add(e,"setAttribute",(o||0)+"",t[s],r,n,0,0,s),a.op=s,a.b=o,this._props.push(s)},render:function(e,t){for(var i=t._pt;i;)X?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Lt("roundProps",qt),Lt("modifiers"),Lt("snap",or))||Ot;W.version=H.version=ee.version="3.15.0";Xi=1;ii()&&Je();P.Power0;P.Power1;P.Power2;P.Power3;P.Power4;P.Linear;P.Quad;P.Cubic;P.Quart;P.Quint;P.Strong;P.Elastic;P.Back;P.SteppedEase;P.Bounce;P.Sine;P.Expo;P.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ai,Te,$e,pi,Fe,Di,_i,Xn=function(){return typeof window<"u"},ve={},Ee=180/Math.PI,He=Math.PI/180,Ye=Math.atan2,zi=1e8,mi=/([A-Z])/g,qn=/(left|right|width|margin|padding|x)/i,$n=/[\s,\(]\S/,_e={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kt=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hn=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Kn=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Qn=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Zn=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Or=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cr=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Jn=function(e,t,i){return e.style[t]=i},es=function(e,t,i){return e.style.setProperty(t,i)},ts=function(e,t,i){return e._gsap[t]=i},is=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},rs=function(e,t,i,r,n){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(n,s)},ns=function(e,t,i,r,n){var s=e._gsap;s[t]=i,s.renderTransform(n,s)},j="transform",J=j+"Origin",ss=function c(e,t){var i=this,r=this.target,n=r.style,s=r._gsap;if(e in ve&&n){if(this.tfm=this.tfm||{},e!=="transform")e=_e[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=ye(r,a)}):this.tfm[e]=s.x?s[e]:ye(r,e),e===J&&(this.tfm.zOrigin=s.zOrigin);else return _e.transform.split(",").forEach(function(a){return c.call(i,a,t)});if(this.props.indexOf(j)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(J,t,"")),e=j}(n||t)&&this.props.push(e,t,n[e])},Pr=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},as=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,n,s;for(n=0;n<e.length;n+=3)e[n+1]?e[n+1]===2?t[e[n]](e[n+2]):t[e[n]]=e[n+2]:e[n+2]?i[e[n]]=e[n+2]:i.removeProperty(e[n].substr(0,2)==="--"?e[n]:e[n].replace(mi,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),n=_i(),(!n||!n.isStart)&&!i[j]&&(Pr(i),r.zOrigin&&i[J]&&(i[J]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Mr=function(e,t){var i={target:e,props:[],revert:as,save:ss};return e._gsap||ee.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Ar,Qt=function(e,t){var i=Te.createElementNS?Te.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Te.createElement(e);return i&&i.style?i:Te.createElement(e)},ne=function c(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(mi,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&c(e,et(t)||t,1)||""},Ni="O,Moz,ms,Ms,Webkit".split(","),et=function(e,t,i){var r=t||Fe,n=r.style,s=5;if(e in n&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Ni[s]+e in n););return s<0?null:(s===3?"ms":s>=0?Ni[s]:"")+e},Zt=function(){Xn()&&window.document&&(Ai=window,Te=Ai.document,$e=Te.documentElement,Fe=Qt("div")||{style:{}},Qt("div"),j=et(j),J=j+"Origin",Fe.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ar=!!et("perspective"),_i=ee.core.reverting,pi=1)},Ri=function(e){var t=e.ownerSVGElement,i=Qt("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),n;r.style.display="block",i.appendChild(r),$e.appendChild(i);try{n=r.getBBox()}catch{}return i.removeChild(r),$e.removeChild(i),n},ji=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Dr=function(e){var t,i;try{t=e.getBBox()}catch{t=Ri(e),i=1}return t&&(t.width||t.height)||i||(t=Ri(e)),t&&!t.width&&!t.x&&!t.y?{x:+ji(e,["x","cx","x1"])||0,y:+ji(e,["y","cy","y1"])||0,width:0,height:0}:t},zr=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dr(e))},Pe=function(e,t){if(t){var i=e.style,r;t in ve&&t!==J&&(t=j),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(mi,"-$1").toLowerCase())):i.removeAttribute(t)}},ke=function(e,t,i,r,n,s){var a=new Z(e._pt,t,i,0,1,s?Cr:Or);return e._pt=a,a.b=r,a.e=n,e._props.push(i),a},Ei={deg:1,rad:1,turn:1},os={grid:1,flex:1},Me=function c(e,t,i,r){var n=parseFloat(i)||0,s=(i+"").trim().substr((n+"").length)||"px",a=Fe.style,o=qn.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(o?"Width":"Height"),d=100,p=r==="px",h=r==="%",_,f,m,x;if(r===s||!n||Ei[r]||Ei[s])return n;if(s!=="px"&&!p&&(n=c(e,t,i,"px")),x=e.getCTM&&zr(e),(h||s==="%")&&(ve[t]||~t.indexOf("adius")))return _=x?e.getBBox()[o?"width":"height"]:e[u],B(h?n/_*d:n/100*_);if(a[o?"width":"height"]=d+(p?s:r),f=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,x&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===Te||!f.appendChild)&&(f=Te.body),m=f._gsap,m&&h&&m.width&&o&&m.time===ie.time&&!m.uncache)return B(n/m.width*d);if(h&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=d+r,_=e[u],b?e.style[t]=b:Pe(e,t)}else(h||s==="%")&&!os[ne(f,"display")]&&(a.position=ne(e,"position")),f===e&&(a.position="static"),f.appendChild(Fe),_=Fe[u],f.removeChild(Fe),a.position="absolute";return o&&h&&(m=Le(f),m.time=ie.time,m.width=f[u]),B(p?_*n/d:_&&n?d/_*n:0)},ye=function(e,t,i,r){var n;return pi||Zt(),t in _e&&t!=="transform"&&(t=_e[t],~t.indexOf(",")&&(t=t.split(",")[0])),ve[t]&&t!=="transform"?(n=mt(e,r),n=t!=="transformOrigin"?n[t]:n.svg?n.origin:Pt(ne(e,J))+" "+n.zOrigin+"px"):(n=e.style[t],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=Ct[t]&&Ct[t](e,t,i)||ne(e,t)||Ki(e,t)||(t==="opacity"?1:0))),i&&!~(n+"").trim().indexOf(" ")?Me(e,t,n,i)+i:n},ls=function(e,t,i,r){if(!i||i==="none"){var n=et(t,e,1),s=n&&ne(e,n,1);s&&s!==i?(t=n,i=s):t==="borderColor"&&(i=ne(e,"borderTopColor"))}var a=new Z(this._pt,e.style,t,0,1,Tr),o=0,l=0,u,d,p,h,_,f,m,x,b,v,w,y;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=ne(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(f=e.style[t],e.style[t]=r,r=ne(e,t)||r,f?e.style[t]=f:Pe(e,t)),u=[i,r],_r(u),i=u[0],r=u[1],p=i.match(Ge)||[],y=r.match(Ge)||[],y.length){for(;d=Ge.exec(r);)m=d[0],b=r.substring(o,d.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(f=p[l++]||"")&&(h=parseFloat(f)||0,w=f.substr((h+"").length),m.charAt(1)==="="&&(m=qe(h,m)+w),x=parseFloat(m),v=m.substr((x+"").length),o=Ge.lastIndex-v.length,v||(v=v||se.units[t]||w,o===r.length&&(r+=v,a.e+=v)),w!==v&&(h=Me(e,t,f,v)||0),a._pt={_next:a._pt,p:b||l===1?b:",",s:h,c:x-h,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=o<r.length?r.substring(o,r.length):""}else a.r=t==="display"&&r==="none"?Cr:Or;return Gi.test(r)&&(a.e=0),this._pt=a,a},Fi={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cs=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Fi[i]||i,t[1]=Fi[r]||r,t.join(" ")},us=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,n=t.u,s=i._gsap,a,o,l;if(n==="all"||n===!0)r.cssText="",o=1;else for(n=n.split(","),l=n.length;--l>-1;)a=n[l],ve[a]&&(o=1,a=a==="transformOrigin"?J:j),Pe(i,a);o&&(Pe(i,j),s&&(s.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",mt(i,1),s.uncache=1,Pr(r)))}},Ct={clearProps:function(e,t,i,r,n){if(n.data!=="isFromStart"){var s=e._pt=new Z(e._pt,t,i,0,0,us);return s.u=r,s.pr=-10,s.tween=n,e._props.push(i),1}}},_t=[1,0,0,1,0,0],Nr={},Rr=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Li=function(e){var t=ne(e,j);return Rr(t)?_t:t.substr(7).match(Yi).map(B)},gi=function(e,t){var i=e._gsap||Le(e),r=e.style,n=Li(e),s,a,o,l;return i.svg&&e.getAttribute("transform")?(o=e.transform.baseVal.consolidate().matrix,n=[o.a,o.b,o.c,o.d,o.e,o.f],n.join(",")==="1,0,0,1,0,0"?_t:n):(n===_t&&!e.offsetParent&&e!==$e&&!i.svg&&(o=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,a=e.nextElementSibling,$e.appendChild(e)),n=Li(e),o?r.display=o:Pe(e,"display"),l&&(a?s.insertBefore(e,a):s?s.appendChild(e):$e.removeChild(e))),t&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},Jt=function(e,t,i,r,n,s){var a=e._gsap,o=n||gi(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,p=a.yOffset||0,h=o[0],_=o[1],f=o[2],m=o[3],x=o[4],b=o[5],v=t.split(" "),w=parseFloat(v[0])||0,y=parseFloat(v[1])||0,O,T,S,k;i?o!==_t&&(T=h*m-_*f)&&(S=w*(m/T)+y*(-f/T)+(f*b-m*x)/T,k=w*(-_/T)+y*(h/T)-(h*b-_*x)/T,w=S,y=k):(O=Dr(e),w=O.x+(~v[0].indexOf("%")?w/100*O.width:w),y=O.y+(~(v[1]||v[0]).indexOf("%")?y/100*O.height:y)),r||r!==!1&&a.smooth?(x=w-l,b=y-u,a.xOffset=d+(x*h+b*f)-x,a.yOffset=p+(x*_+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=w,a.yOrigin=y,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[J]="0px 0px",s&&(ke(s,a,"xOrigin",l,w),ke(s,a,"yOrigin",u,y),ke(s,a,"xOffset",d,a.xOffset),ke(s,a,"yOffset",p,a.yOffset)),e.setAttribute("data-svg-origin",w+" "+y)},mt=function(e,t){var i=e._gsap||new gr(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,n=i.scaleX<0,s="px",a="deg",o=getComputedStyle(e),l=ne(e,J)||"0",u,d,p,h,_,f,m,x,b,v,w,y,O,T,S,k,C,I,E,D,F,Y,U,V,le,Ue,tt,it,De,xi,ge,ze;return u=d=p=f=m=x=b=v=w=0,h=_=1,i.svg=!!(e.getCTM&&zr(e)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(r[j]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[j]!=="none"?o[j]:"")),r.scale=r.rotate=r.translate="none"),T=gi(e,i.svg),i.svg&&(i.uncache?(le=e.getBBox(),l=i.xOrigin-le.x+"px "+(i.yOrigin-le.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Jt(e,V||l,!!V||i.originIsAbsolute,i.smooth!==!1,T)),y=i.xOrigin||0,O=i.yOrigin||0,T!==_t&&(I=T[0],E=T[1],D=T[2],F=T[3],u=Y=T[4],d=U=T[5],T.length===6?(h=Math.sqrt(I*I+E*E),_=Math.sqrt(F*F+D*D),f=I||E?Ye(E,I)*Ee:0,b=D||F?Ye(D,F)*Ee+f:0,b&&(_*=Math.abs(Math.cos(b*He))),i.svg&&(u-=y-(y*I+O*D),d-=O-(y*E+O*F))):(ze=T[6],xi=T[7],tt=T[8],it=T[9],De=T[10],ge=T[11],u=T[12],d=T[13],p=T[14],S=Ye(ze,De),m=S*Ee,S&&(k=Math.cos(-S),C=Math.sin(-S),V=Y*k+tt*C,le=U*k+it*C,Ue=ze*k+De*C,tt=Y*-C+tt*k,it=U*-C+it*k,De=ze*-C+De*k,ge=xi*-C+ge*k,Y=V,U=le,ze=Ue),S=Ye(-D,De),x=S*Ee,S&&(k=Math.cos(-S),C=Math.sin(-S),V=I*k-tt*C,le=E*k-it*C,Ue=D*k-De*C,ge=F*C+ge*k,I=V,E=le,D=Ue),S=Ye(E,I),f=S*Ee,S&&(k=Math.cos(S),C=Math.sin(S),V=I*k+E*C,le=Y*k+U*C,E=E*k-I*C,U=U*k-Y*C,I=V,Y=le),m&&Math.abs(m)+Math.abs(f)>359.9&&(m=f=0,x=180-x),h=B(Math.sqrt(I*I+E*E+D*D)),_=B(Math.sqrt(U*U+ze*ze)),S=Ye(Y,U),b=Math.abs(S)>2e-4?S*Ee:0,w=ge?1/(ge<0?-ge:ge):0),i.svg&&(V=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Rr(ne(e,j)),V&&e.setAttribute("transform",V))),Math.abs(b)>90&&Math.abs(b)<270&&(n?(h*=-1,b+=f<=0?180:-180,f+=f<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=p+s,i.scaleX=B(h),i.scaleY=B(_),i.rotation=B(f)+a,i.rotationX=B(m)+a,i.rotationY=B(x)+a,i.skewX=b+a,i.skewY=v+a,i.transformPerspective=w+s,(i.zOrigin=parseFloat(l.split(" ")[2])||!t&&i.zOrigin||0)&&(r[J]=Pt(l)),i.xOffset=i.yOffset=0,i.force3D=se.force3D,i.renderTransform=i.svg?hs:Ar?jr:fs,i.uncache=0,i},Pt=function(e){return(e=e.split(" "))[0]+" "+e[1]},It=function(e,t,i){var r=q(t);return B(parseFloat(t)+parseFloat(Me(e,"x",i+"px",r)))+r},fs=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jr(e,t)},Re="0deg",rt="0px",je=") ",jr=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,s=i.x,a=i.y,o=i.z,l=i.rotation,u=i.rotationY,d=i.rotationX,p=i.skewX,h=i.skewY,_=i.scaleX,f=i.scaleY,m=i.transformPerspective,x=i.force3D,b=i.target,v=i.zOrigin,w="",y=x==="auto"&&e&&e!==1||x===!0;if(v&&(d!==Re||u!==Re)){var O=parseFloat(u)*He,T=Math.sin(O),S=Math.cos(O),k;O=parseFloat(d)*He,k=Math.cos(O),s=It(b,s,T*k*-v),a=It(b,a,-Math.sin(O)*-v),o=It(b,o,S*k*-v+v)}m!==rt&&(w+="perspective("+m+je),(r||n)&&(w+="translate("+r+"%, "+n+"%) "),(y||s!==rt||a!==rt||o!==rt)&&(w+=o!==rt||y?"translate3d("+s+", "+a+", "+o+") ":"translate("+s+", "+a+je),l!==Re&&(w+="rotate("+l+je),u!==Re&&(w+="rotateY("+u+je),d!==Re&&(w+="rotateX("+d+je),(p!==Re||h!==Re)&&(w+="skew("+p+", "+h+je),(_!==1||f!==1)&&(w+="scale("+_+", "+f+je),b.style[j]=w||"translate(0, 0)"},hs=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,s=i.x,a=i.y,o=i.rotation,l=i.skewX,u=i.skewY,d=i.scaleX,p=i.scaleY,h=i.target,_=i.xOrigin,f=i.yOrigin,m=i.xOffset,x=i.yOffset,b=i.forceCSS,v=parseFloat(s),w=parseFloat(a),y,O,T,S,k;o=parseFloat(o),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,o+=u),o||l?(o*=He,l*=He,y=Math.cos(o)*d,O=Math.sin(o)*d,T=Math.sin(o-l)*-p,S=Math.cos(o-l)*p,l&&(u*=He,k=Math.tan(l-u),k=Math.sqrt(1+k*k),T*=k,S*=k,u&&(k=Math.tan(u),k=Math.sqrt(1+k*k),y*=k,O*=k)),y=B(y),O=B(O),T=B(T),S=B(S)):(y=d,S=p,O=T=0),(v&&!~(s+"").indexOf("px")||w&&!~(a+"").indexOf("px"))&&(v=Me(h,"x",s,"px"),w=Me(h,"y",a,"px")),(_||f||m||x)&&(v=B(v+_-(_*y+f*T)+m),w=B(w+f-(_*O+f*S)+x)),(r||n)&&(k=h.getBBox(),v=B(v+r/100*k.width),w=B(w+n/100*k.height)),k="matrix("+y+","+O+","+T+","+S+","+v+","+w+")",h.setAttribute("transform",k),b&&(h.style[j]=k)},ds=function(e,t,i,r,n){var s=360,a=G(n),o=parseFloat(n)*(a&&~n.indexOf("rad")?Ee:1),l=o-r,u=r+l+"deg",d,p;return a&&(d=n.split("_")[1],d==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-s)),d==="cw"&&l<0?l=(l+s*zi)%s-~~(l/s)*s:d==="ccw"&&l>0&&(l=(l-s*zi)%s-~~(l/s)*s)),e._pt=p=new Z(e._pt,t,i,r,l,Hn),p.e=u,p.u="deg",e._props.push(i),p},Ii=function(e,t){for(var i in t)e[i]=t[i];return e},ps=function(e,t,i){var r=Ii({},i._gsap),n="perspective,force3D,transformOrigin,svgOrigin",s=i.style,a,o,l,u,d,p,h,_;r.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),s[j]=t,a=mt(i,1),Pe(i,j),i.setAttribute("transform",l)):(l=getComputedStyle(i)[j],s[j]=t,a=mt(i,1),s[j]=l);for(o in ve)l=r[o],u=a[o],l!==u&&n.indexOf(o)<0&&(h=q(l),_=q(u),d=h!==_?Me(i,o,l,_):parseFloat(l),p=parseFloat(u),e._pt=new Z(e._pt,a,o,d,p-d,Kt),e._pt.u=_||0,e._props.push(o));Ii(a,r)};Q("padding,margin,Width,Radius",function(c,e){var t="Top",i="Right",r="Bottom",n="Left",s=(e<3?[t,i,r,n]:[t+n,t+i,r+i,r+n]).map(function(a){return e<2?c+a:"border"+a+c});Ct[e>1?"border"+c:c]=function(a,o,l,u,d){var p,h;if(arguments.length<4)return p=s.map(function(_){return ye(a,_,l)}),h=p.join(" "),h.split(p[0]).length===5?p[0]:h;p=(u+"").split(" "),h={},s.forEach(function(_,f){return h[_]=p[f]=p[f]||p[(f-1)/2|0]}),a.init(o,h,d)}});var Er={name:"css",register:Zt,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,n){var s=this._props,a=e.style,o=i.vars.startAt,l,u,d,p,h,_,f,m,x,b,v,w,y,O,T,S,k;pi||Zt(),this.styles=this.styles||Mr(e),S=this.styles.props,this.tween=i;for(f in t)if(f!=="autoRound"&&(u=t[f],!(te[f]&&xr(f,t,i,r,e,n)))){if(h=typeof u,_=Ct[f],h==="function"&&(u=u.call(i,r,e,n),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ht(u)),_)_(this,e,f,u,i)&&(T=1);else if(f.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",Oe.lastIndex=0,Oe.test(l)||(m=q(l),x=q(u),x?m!==x&&(l=Me(e,f,l,x)+x):m&&(u+=m)),this.add(a,"setProperty",l,u,r,n,0,0,f),s.push(f),S.push(f,0,a[f]);else if(h!=="undefined"){if(o&&f in o?(l=typeof o[f]=="function"?o[f].call(i,r,e,n):o[f],G(l)&&~l.indexOf("random(")&&(l=ht(l)),q(l+"")||l==="auto"||(l+=se.units[f]||q(ye(e,f))||""),(l+"").charAt(1)==="="&&(l=ye(e,f))):l=ye(e,f),p=parseFloat(l),b=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),f in _e&&(f==="autoAlpha"&&(p===1&&ye(e,"visibility")==="hidden"&&d&&(p=0),S.push("visibility",0,a.visibility),ke(this,a,"visibility",p?"inherit":"hidden",d?"inherit":"hidden",!d)),f!=="scale"&&f!=="transform"&&(f=_e[f],~f.indexOf(",")&&(f=f.split(",")[0]))),v=f in ve,v){if(this.styles.save(f),k=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=ne(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=u,u=ne(e,"perspective"),C?e.style.perspective=C:Pe(e,"perspective")}d=parseFloat(u)}if(w||(y=e._gsap,y.renderTransform&&!t.parseTransform||mt(e,t.parseTransform),O=t.smoothOrigin!==!1&&y.smooth,w=this._pt=new Z(this._pt,a,j,0,1,y.renderTransform,y,0,-1),w.dep=1),f==="scale")this._pt=new Z(this._pt,y,"scaleY",y.scaleY,(b?qe(y.scaleY,b+d):d)-y.scaleY||0,Kt),this._pt.u=0,s.push("scaleY",f),f+="X";else if(f==="transformOrigin"){S.push(J,0,a[J]),u=cs(u),y.svg?Jt(e,u,0,O,0,this):(x=parseFloat(u.split(" ")[2])||0,x!==y.zOrigin&&ke(this,y,"zOrigin",y.zOrigin,x),ke(this,a,f,Pt(l),Pt(u)));continue}else if(f==="svgOrigin"){Jt(e,u,1,O,0,this);continue}else if(f in Nr){ds(this,y,f,p,b?qe(p,b+u):u);continue}else if(f==="smoothOrigin"){ke(this,y,"smooth",y.smooth,u);continue}else if(f==="force3D"){y[f]=u;continue}else if(f==="transform"){ps(this,u,e);continue}}else f in a||(f=et(f)||f);if(v||(d||d===0)&&(p||p===0)&&!$n.test(u)&&f in a)m=(l+"").substr((p+"").length),d||(d=0),x=q(u)||(f in se.units?se.units[f]:m),m!==x&&(p=Me(e,f,l,x)),this._pt=new Z(this._pt,v?y:a,f,p,(b?qe(p,b+d):d)-p,!v&&(x==="px"||f==="zIndex")&&t.autoRound!==!1?Zn:Kt),this._pt.u=x||0,v&&k!==u?(this._pt.b=l,this._pt.e=k,this._pt.r=Qn):m!==x&&x!=="%"&&(this._pt.b=l,this._pt.r=Kn);else if(f in a)ls.call(this,e,f,l,b?b+u:u);else if(f in e)this.add(e,f,l||e[f],b?b+u:u,r,n);else if(f!=="parseTransform"){ni(f,u);continue}v||(f in a?S.push(f,0,a[f]):typeof e[f]=="function"?S.push(f,2,e[f]()):S.push(f,1,l||e[f])),s.push(f)}}T&&kr(this)},render:function(e,t){if(t.tween._time||!_i())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ye,aliases:_e,getSetter:function(e,t,i){var r=_e[t];return r&&r.indexOf(",")<0&&(t=r),t in ve&&t!==J&&(e._gsap.x||ye(e,"x"))?i&&Di===i?t==="scale"?is:ts:(Di=i||{})&&(t==="scale"?rs:ns):e.style&&!ti(e.style[t])?Jn:~t.indexOf("-")?es:hi(e,t)},core:{_removeProperty:Pe,_getMatrix:gi}};ee.utils.checkPrefix=et;ee.core.getStyleSaver=Mr;(function(c,e,t,i){var r=Q(c+","+e+","+t,function(n){ve[n]=1});Q(e,function(n){se.units[n]="deg",Nr[n]=1}),_e[r[13]]=c+","+e,Q(i,function(n){var s=n.split(":");_e[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Q("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(c){se.units[c]="px"});ee.registerPlugin(Er);var he=ee.registerPlugin(Er)||ee;he.core.Tween;function Ts(){const[c,e]=Ne.useState("scada --status"),[t,i]=Ne.useState([{text:"$ scada --status",type:"command"},{text:"=======================================================",type:"system"},{text:"SYSTEM: Wastewater Matrix Core Telemetry Engine v2.4.0",type:"system"},{text:"STATUS: ACTIVE & MONITORING (50/50 Transceivers nominal)",type:"success"},{text:"-------------------------------------------------------",type:"system"},{text:"[OK] Trie Chemical Indexer: 47 reagents loaded in O(k) prefix tree",type:"success"},{text:"[OK] Valve Control Stack: LIFO ledger active (0 pending undos)",type:"success"},{text:"[OK] Station Risk Heap: Max-Heap priority sort operational",type:"success"},{text:"[OK] Dijkstra Flow Router: Gravity slopes calculated nominal",type:"success"}]),[r,n]=Ne.useState(!1),s=h=>{r||(n(!0),e(h),setTimeout(()=>{let _=[];switch(h){case"scada --status":_=[{text:"$ scada --status",type:"command"},{text:"SYSTEM: Wastewater Matrix Core Telemetry Engine v2.4.0",type:"system"},{text:"STATUS: ACTIVE (50/50 Transceivers nominal)",type:"success"},{text:"[OK] Trie Chemical Indexer: 47 reagents operational",type:"success"},{text:"[OK] Valve Control Stack: LIFO ledger active",type:"success"},{text:"[OK] Dijkstra Flow Router: Slope paths normal",type:"success"}];break;case"scada --trie-match":_=[{text:'$ scada --trie-match "Chlor"',type:"command"},{text:'Trie Tree search initialized for key prefix: "Chlor"',type:"system"},{text:'└─ Match Found [O(k)]: "Chlorine Dioxide" (ID: CHEM-021)',type:"success"},{text:'└─ Match Found [O(k)]: "Chloramine-T" (ID: CHEM-044)',type:"success"},{text:'└─ Match Found [O(k)]: "Chlorine Gas" (ID: CHEM-012)',type:"success"},{text:"Query Latency: 0.04 ms. Search space: 47 chemicals.",type:"info"}];break;case"scada --valve-undo":_=[{text:"$ scada --valve-undo --verbose",type:"command"},{text:"LIFO Transaction Stack Trace:",type:"system"},{text:"[Stack Frame 3] Action: SET_FLOW | Valve: V-07 | Val: CLOSED",type:"info"},{text:"[Stack Frame 2] Action: SET_FLOW | Valve: V-12 | Val: 45%",type:"info"},{text:"[Stack Frame 1] Action: SET_FLOW | Valve: V-02 | Val: OPEN",type:"info"},{text:"Executing POP command on Stack Head...",type:"system"},{text:">> REVERTED V-07 back to OPEN. System state synchronized.",type:"success"}];break;case"scada --dijkstra":_=[{text:"$ scada --dijkstra --optimize",type:"command"},{text:"Dijkstra Routing algorithm initialized for Gravity Flow...",type:"system"},{text:"Source Node: Pump_Station_04 (Alt: 104m) -> Discharge (Alt: 90m)",type:"info"},{text:"Analyzing 12 conduits and 10 drainage intersections...",type:"info"},{text:"└─ Route Found: PS_04 -> JCT_08 -> CHM_02 -> DS_01",type:"success"},{text:"└─ Total Slope Loss: 14m (Optimal gravity vector, Pumps bypassed)",type:"success"},{text:"Telemetry confirmed: route status OPERATIONAL.",type:"success"}];break;default:_=[{text:`$ ${h} - Command unrecognized.`,type:"error"}]}i(_),n(!1)},450))},[a,o]=Ne.useState(null),[l,u]=Ne.useState([{id:"PS1",name:"Pump Station 1",x:80,y:70,status:"nominal",desc:"Primary influent pump. Flow rate: 1,420 L/s."},{id:"FLT",name:"Filter Bed Beta",x:200,y:70,status:"nominal",desc:"Granular carbon filtering system. Backwash cycle OK."},{id:"BAL",name:"Chem Balancer",x:320,y:70,status:"nominal",desc:"Greedy dosing agent applying compatible reagents."},{id:"DSC",name:"Main Discharge",x:440,y:70,status:"nominal",desc:"Clean effluent outfall. Flow rate matches influent."}]),d=h=>{o(h),u(_=>_.map(f=>{if(f.id===h){const m=f.status==="nominal"?"warning":f.status==="warning"?"critical":"nominal";let x=f.desc;return m==="nominal"?x=`${f.name.split(" (")[0]} operating under normal parameters.`:m==="warning"?x=`⚠️ Jitter detected at ${f.name.split(" (")[0]}. Telemetry signal unstable.`:x=`🚨 CRITICAL ALERT at ${f.name.split(" (")[0]}. Pressure threshold exceeded!`,{...f,status:m,desc:x}}return f}))};Ne.useEffect(()=>{const h=setInterval(()=>{const _=Math.floor(Math.random()*l.length);l[_],u(f=>f.map((m,x)=>x===_&&m.status==="nominal"&&a!==m.id?{...m,status:"warning",desc:`${m.name} reporting minor telemetry jitter.`}:x===_&&m.status==="warning"&&a!==m.id?{...m,status:"nominal",desc:`${m.name} returned to nominal state.`}:m))},12e3);return()=>clearInterval(h)},[l,a]),Ne.useEffect(()=>{const h=he.context(()=>{he.from(".landing-nav",{y:-80,opacity:0,duration:.8,ease:"power3.out"}),he.timeline({defaults:{ease:"power4.out"}}).from(".version-badge",{y:30,opacity:0,duration:.8,delay:.2}).from(".hero-title",{y:40,opacity:0,duration:1},"-=0.5").from(".hero-subtitle",{y:30,opacity:0,duration:.8},"-=0.7").from(".hero-ctas",{y:20,opacity:0,duration:.6},"-=0.6"),he.from(".premium-terminal",{x:-120,opacity:0,duration:1.2,ease:"power3.out",delay:.4}),he.from(".live-telemetry-panel",{x:120,opacity:0,duration:1.2,ease:"power3.out",delay:.4}),he.from(".metric-item",{y:30,opacity:0,stagger:.12,duration:.8,ease:"power3.out",delay:.7}),he.from(".landing-feature-card",{y:50,opacity:0,stagger:.08,duration:.8,ease:"power3.out",delay:.9}),he.to(".ambient-glow-1",{x:"random(-60, 60)",y:"random(-60, 60)",duration:18,repeat:-1,yoyo:!0,ease:"sine.inOut"}),he.to(".ambient-glow-2",{x:"random(-80, 80)",y:"random(-80, 80)",duration:22,repeat:-1,yoyo:!0,ease:"sine.inOut"}),he.from(".arch-pill",{scale:.9,opacity:0,stagger:.1,duration:.6,ease:"power2.out",delay:1.1})});return()=>h.revert()},[]);const p=[{title:"Trie Prefix Search",desc:"Instant O(k) prefix tree matching for indexing chemicals, materials, and pipeline assets. Search finishes in microseconds regardless of database size.",icon:g.jsx(Vr,{size:20}),color:"#0284c7",bg:"rgba(2, 132, 199, 0.06)"},{title:"LIFO Valve Undo Stack",desc:"Saves complete valve configuration changes into a transaction stack ledger. Roll back unwanted valve configurations instantly with zero risk of state loss.",icon:g.jsx(Br,{size:20}),color:"#d97706",bg:"rgba(217, 119, 6, 0.06)"},{title:"FIFO Lab Assay Queue",desc:"Maintains strict sequence for laboratory fluid testing. Prevents critical samples from being delayed by processing them in exact collection order.",icon:g.jsx(Xr,{size:20}),color:"#dc2626",bg:"rgba(220, 38, 38, 0.06)"},{title:"HashMap Diagnostics",desc:"Instant O(1) key registry verification to check telemetry health of all 50 transceivers. Flags packet drops and hardware faults instantly.",icon:g.jsx(Wr,{size:20}),color:"#16a34a",bg:"rgba(22, 163, 74, 0.06)"},{title:"Risk Sort Algorithm",desc:"Max-Heap priority sort simulation to rank overflow risks across station levels. Dynamically re-sorts grid coordinates to dispatch ground crews to high-risk areas first.",icon:g.jsx(Ur,{size:20}),color:"#4f46e5",bg:"rgba(79, 70, 229, 0.06)"},{title:"Topological SVG Map",desc:"Interactive vector rendering of underground piping layouts. Tracks real-time grid path connections and flow directions on an interactive digital canvas.",icon:g.jsx(Yr,{size:20}),color:"#0891b2",bg:"rgba(8, 145, 178, 0.06)"},{title:"Gravity Flow Dijkstra",desc:"BFS and Dijkstra slope routing algorithms to calculate optimal drainage vectors. Maximizes gravity flows to reduce municipal pump station power dependencies.",icon:g.jsx(qr,{size:20}),color:"#2563eb",bg:"rgba(37, 99, 235, 0.06)"},{title:"Greedy Feed Balancer",desc:"Real-time compatibility matching agent. Fits available dosing reagents to active mixing chambers to neutralize pH values in seconds.",icon:g.jsx(Gr,{size:20}),color:"#ea580c",bg:"rgba(234, 88, 12, 0.06)"}];return g.jsxs("div",{className:"landing-viewport",children:[g.jsx("style",{children:`
        .landing-viewport {
          background-color: #f8fafc;
          color: #0f172a;
          font-family: 'Inter', system-ui, sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
          position: relative;
        }

        /* Ambient background decorations */
        .ambient-glow-1 {
          position: absolute;
          top: -10%;
          left: 15%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(2, 132, 199, 0.04) 50%, transparent 100%);
          z-index: 0;
          pointer-events: none;
        }

        .ambient-glow-2 {
          position: absolute;
          top: 35%;
          right: -10%;
          width: 45vw;
          height: 45vw;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, rgba(79, 70, 229, 0.03) 60%, transparent 100%);
          z-index: 0;
          pointer-events: none;
        }

        /* Glassmorphic Nav */
        .landing-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 6%;
          background-color: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          font-size: 15px;
          color: #0f172a;
          letter-spacing: -0.01em;
        }

        .logo-icon-container {
          background: linear-gradient(135deg, #0284c7 0%, #4f46e5 100%);
          color: #ffffff;
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(2, 132, 199, 0.15);
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-link-item {
          font-size: 13.5px;
          font-weight: 600;
          color: #475569;
          transition: color 0.2s ease;
        }

        .nav-link-item:hover {
          color: #0284c7;
        }

        .btn-nav-action {
          background: #0f172a;
          color: #ffffff;
          font-weight: 700;
          font-size: 12.5px;
          padding: 9px 18px;
          border-radius: 6px;
          transition: all 0.2s ease;
          border: 1px solid #0f172a;
        }

        .btn-nav-action:hover {
          background-color: #1e293b;
          border-color: #1e293b;
          color: #ffffff;
        }

        /* Hero Section */
        .hero-section {
          padding: 80px 6% 60px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .version-badge {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #e2e8f0;
          color: #334155;
          font-size: 11px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 9999px;
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
          margin-bottom: 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }

        .hero-title {
          font-size: 54px;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.03em;
          max-width: 850px;
          color: #0f172a;
          margin-bottom: 24px;
          text-transform: none;
        }

        .hero-title span {
          background: linear-gradient(135deg, #0284c7 0%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 17px;
          color: #475569;
          max-width: 700px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 40px;
        }

        .btn-primary-landing {
          background: linear-gradient(135deg, #0284c7 0%, #4f46e5 100%);
          color: #ffffff;
          font-weight: 700;
          font-size: 13.5px;
          padding: 15px 32px;
          border-radius: 8px;
          box-shadow: 0 10px 25px -5px rgba(2, 132, 199, 0.25);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.25s ease;
          border: none;
        }

        .btn-primary-landing:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px -4px rgba(2, 132, 199, 0.35);
          color: #ffffff;
        }

        .btn-secondary-landing {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-weight: 700;
          font-size: 13.5px;
          padding: 15px 32px;
          border-radius: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .btn-secondary-landing:hover {
          background-color: #f8fafc;
          border-color: #cbd5e1;
        }

        /* Showcase Split Layout */
        .showcase-split-container {
          width: 88%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 32px;
          margin: 0 auto 100px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 992px) {
          .showcase-split-container {
            grid-template-columns: 1fr;
            width: 92%;
          }
        }

        /* Interactive Terminal Card */
        .premium-terminal {
          background-color: #090e1a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          height: 380px;
        }

        .terminal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          background-color: #111827;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .window-dots {
          display: flex;
          gap: 8px;
        }

        .dot-control {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-close { background-color: #ef4444; }
        .dot-minimize { background-color: #f59e0b; }
        .dot-maximize { background-color: #10b981; }

        .terminal-title-text {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #94a3b8;
          font-weight: 500;
        }

        .terminal-shell-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          color: #4ade80;
          background: rgba(74, 222, 128, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .terminal-actions-bar {
          display: flex;
          gap: 8px;
          padding: 10px 16px;
          background-color: #0f172a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          overflow-x: auto;
          white-space: nowrap;
        }

        .terminal-action-btn {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          background: #1e293b;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .terminal-action-btn:hover {
          color: #ffffff;
          background: #334155;
        }

        .terminal-action-btn.active {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.1);
          border-color: rgba(56, 189, 248, 0.2);
        }

        .terminal-body {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          font-family: var(--font-mono);
          font-size: 11.5px;
          line-height: 1.6;
        }

        .terminal-text-line {
          margin-bottom: 6px;
        }

        .term-type-command { color: #38bdf8; font-weight: bold; }
        .term-type-system { color: #64748b; }
        .term-type-success { color: #4ade80; }
        .term-type-info { color: #a5f3fc; }
        .term-type-error { color: #f87171; }

        /* Interactive SVG telemetry component */
        .live-telemetry-panel {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 380px;
        }

        .telemetry-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .telemetry-title {
          font-size: 13.5px;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #0f172a;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .svg-canvas-wrapper {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .svg-node-btn {
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .svg-node-btn:hover {
          transform: scale(1.08);
        }

        .telemetry-node-info-box {
          background: #f1f5f9;
          border-radius: 8px;
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
        }

        .node-info-header {
          font-size: 11px;
          font-weight: 800;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }

        .node-info-body {
          font-size: 12px;
          color: #475569;
          margin: 0;
        }

        /* Metrics grid */
        .metrics-banner {
          background-color: #ffffff;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          padding: 60px 8%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          text-align: center;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.01);
          margin-bottom: 80px;
        }

        @media (max-width: 768px) {
          .metrics-banner {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        .metric-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .metric-val {
          font-size: 38px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, #0284c7 0%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .metric-lbl {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Features Section */
        .features-section {
          padding: 80px 6% 100px;
          background-color: #f8fafc;
          position: relative;
          z-index: 1;
        }

        .features-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .features-title {
          font-size: 34px;
          font-weight: 900;
          margin-bottom: 16px;
          color: #0f172a;
          letter-spacing: -0.02em;
          text-transform: none;
        }

        .features-subtitle {
          font-size: 15px;
          color: #64748b;
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1200px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 680px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        .landing-feature-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 28px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.01);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }

        .landing-feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.06);
          border-color: #cbd5e1;
        }

        .feature-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .feature-card-title {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
          text-transform: none;
        }

        .feature-card-desc {
          font-size: 12.5px;
          color: #475569;
          line-height: 1.55;
          margin: 0;
        }

        /* Architectural specs section */
        .arch-section {
          padding: 100px 6%;
          background-color: #ffffff;
          border-top: 1px solid #e2e8f0;
          position: relative;
          z-index: 1;
        }

        .arch-container {
          display: flex;
          gap: 80px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 992px) {
          .arch-container {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }
        }

        .arch-left {
          flex: 1.2;
        }

        .arch-right {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          width: 100%;
        }

        .arch-pill {
          display: flex;
          align-items: center;
          gap: 14px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.01);
          transition: border-color 0.2s;
        }

        .arch-pill:hover {
          border-color: #0284c7;
        }

        .arch-pill-icon {
          color: #0284c7;
          flex-shrink: 0;
        }

        .arch-pill-text {
          font-size: 12.5px;
          font-weight: 700;
          color: #334155;
          font-family: var(--font-mono);
        }

        /* Footer */
        .landing-footer {
          background-color: #ffffff;
          border-top: 1px solid #e2e8f0;
          padding: 50px 6%;
          text-align: center;
          font-size: 13px;
          color: #64748b;
          margin-top: auto;
          position: relative;
          z-index: 1;
        }
      `}),g.jsx("div",{className:"ambient-glow-1"}),g.jsx("div",{className:"ambient-glow-2"}),g.jsxs("header",{className:"landing-nav",children:[g.jsxs("div",{className:"logo-section",children:[g.jsx("div",{className:"logo-icon-container",children:g.jsx(bi,{size:18})}),g.jsx("span",{style:{fontSize:"16px",fontWeight:900},children:"WASTEWATER MATRIX"})]}),g.jsxs("nav",{className:"nav-links",children:[g.jsx("span",{className:"nav-link-item",style:{cursor:"pointer"},children:"Spec Sheet"}),g.jsx("span",{className:"nav-link-item",style:{cursor:"pointer"},children:"API Registry"}),g.jsx("span",{className:"nav-link-item",style:{cursor:"pointer"},children:"Support"}),g.jsx(yi,{to:"/console",className:"btn-nav-action",children:"Enter SCADA"})]})]}),g.jsxs("section",{className:"hero-section",children:[g.jsxs("div",{className:"version-badge",children:[g.jsx(vi,{size:13,style:{color:"#0284c7"}}),g.jsx("span",{children:"SCADA MATRIX COMPLIANCE RELEASE V2.4"})]}),g.jsxs("h1",{className:"hero-title",children:["Municipal Wastewater Telemetry, ",g.jsx("br",{}),g.jsx("span",{children:"Reimagined for Grid Operations."})]}),g.jsx("p",{className:"hero-subtitle",children:"An enterprise-grade telemetry dashboard engineered with strict algorithmic data structures. Fast prefix searching, FIFO laboratory scheduling, LIFO stack rollback logs, and Dijkstra gravity pathrouting."}),g.jsxs("div",{className:"hero-ctas",children:[g.jsxs(yi,{to:"/console",className:"btn-primary-landing",children:["Launch SCADA Console ",g.jsx(Fr,{size:15})]}),g.jsx("button",{className:"btn-secondary-landing",onClick:()=>alert("Wastewater Matrix API schemas and SCADA spec sheets are integrated directly inside the console technical dashboard."),children:"Technical Documentation"})]})]}),g.jsxs("div",{className:"showcase-split-container",children:[g.jsxs("div",{className:"premium-terminal",children:[g.jsxs("div",{className:"terminal-header",children:[g.jsxs("div",{className:"window-dots",children:[g.jsx("div",{className:"dot-control dot-close"}),g.jsx("div",{className:"dot-control dot-minimize"}),g.jsx("div",{className:"dot-control dot-maximize"})]}),g.jsx("span",{className:"terminal-title-text",children:"scada-engine@wastewater-matrix:~"}),g.jsx("span",{className:"terminal-shell-tag",children:"zsh"})]}),g.jsxs("div",{className:"terminal-actions-bar",children:[g.jsx("button",{className:`terminal-action-btn ${c==="scada --status"?"active":""}`,onClick:()=>s("scada --status"),children:"scada --status"}),g.jsx("button",{className:`terminal-action-btn ${c==="scada --trie-match"?"active":""}`,onClick:()=>s("scada --trie-match"),children:"scada --trie-match"}),g.jsx("button",{className:`terminal-action-btn ${c==="scada --valve-undo"?"active":""}`,onClick:()=>s("scada --valve-undo"),children:"scada --valve-undo"}),g.jsx("button",{className:`terminal-action-btn ${c==="scada --dijkstra"?"active":""}`,onClick:()=>s("scada --dijkstra"),children:"scada --dijkstra"})]}),g.jsx("div",{className:"terminal-body",children:r?g.jsx("div",{style:{color:"#94a3b8",fontStyle:"italic"},children:"Compiling telemetry buffers..."}):t.map((h,_)=>g.jsx("div",{className:`terminal-text-line term-type-${h.type}`,children:h.text},_))})]}),g.jsxs("div",{className:"live-telemetry-panel",children:[g.jsxs("div",{className:"telemetry-header",children:[g.jsxs("h3",{className:"telemetry-title",children:[g.jsx(bi,{size:16,style:{color:"#0284c7"}}),"Live Interactive Grid Mimic"]}),g.jsx("span",{style:{fontSize:"10px",fontFamily:"var(--font-mono)",background:"rgba(22, 163, 74, 0.08)",color:"#16a34a",padding:"3px 8px",borderRadius:"4px",fontWeight:"bold"},children:"● LIVE SIMULATION"})]}),g.jsxs("div",{className:"svg-canvas-wrapper",children:[g.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 520 160",style:{maxWidth:"480px"},children:[g.jsx("line",{x1:"80",y1:"70",x2:"200",y2:"70",stroke:"#cbd5e1",strokeWidth:"6",strokeLinecap:"round"}),g.jsx("line",{x1:"80",y1:"70",x2:"200",y2:"70",stroke:"#38bdf8",strokeWidth:"4",strokeDasharray:"10 15",strokeLinecap:"round",style:{animation:"flow-slide 8s linear infinite"}}),g.jsx("line",{x1:"200",y1:"70",x2:"320",y2:"70",stroke:"#cbd5e1",strokeWidth:"6",strokeLinecap:"round"}),g.jsx("line",{x1:"200",y1:"70",x2:"320",y2:"70",stroke:l[1].status==="critical"?"#ef4444":"#38bdf8",strokeWidth:"4",strokeDasharray:"10 15",strokeLinecap:"round",style:{animation:"flow-slide 6s linear infinite"}}),g.jsx("line",{x1:"320",y1:"70",x2:"440",y2:"70",stroke:"#cbd5e1",strokeWidth:"6",strokeLinecap:"round"}),g.jsx("line",{x1:"320",y1:"70",x2:"440",y2:"70",stroke:l[2].status==="critical"?"#ef4444":"#38bdf8",strokeWidth:"4",strokeDasharray:"10 15",strokeLinecap:"round",style:{animation:"flow-slide 7s linear infinite"}}),l.map(h=>{const _=a===h.id;let f="#10b981";return h.status==="warning"&&(f="#f59e0b"),h.status==="critical"&&(f="#ef4444"),g.jsxs("g",{className:"svg-node-btn",onClick:()=>d(h.id),children:[_&&g.jsx("circle",{cx:h.x,cy:h.y,r:"22",fill:"none",stroke:f,strokeWidth:"2",opacity:"0.6",style:{transformOrigin:`${h.x}px ${h.y}px`},children:g.jsx("animate",{attributeName:"r",values:"16;24;16",dur:"2s",repeatCount:"indefinite"})}),g.jsx("circle",{cx:h.x,cy:h.y,r:"16",fill:"#ffffff",stroke:f,strokeWidth:"4"}),g.jsx("circle",{cx:h.x,cy:h.y,r:"6",fill:f}),g.jsx("text",{x:h.x,y:h.y-24,textAnchor:"middle",fill:"#334155",fontSize:"9",fontWeight:"bold",fontFamily:"var(--font-mono)",children:h.id})]},h.id)})]}),g.jsx("style",{children:`
              @keyframes flow-slide {
                to { stroke-dashoffset: -100; }
              }
            `})]}),g.jsxs("div",{className:"telemetry-node-info-box",children:[g.jsx("div",{className:"node-info-header",children:a?`NODE DETAILS: ${a}`:"Interactive System Mimic"}),g.jsx("p",{className:"node-info-body",children:a?l.find(h=>h.id===a).desc:"Click any node bubble (PS1, FLT, BAL, DSC) to cycle alarm states and simulate grid telemetry changes."})]})]})]}),g.jsxs("section",{className:"metrics-banner",children:[g.jsxs("div",{className:"metric-item",children:[g.jsx("span",{className:"metric-val",children:"2,847 L/s"}),g.jsx("span",{className:"metric-lbl",children:"Discharge Outflow"})]}),g.jsxs("div",{className:"metric-item",children:[g.jsx("span",{className:"metric-val",children:"99.99%"}),g.jsx("span",{className:"metric-lbl",children:"Signal Reliability"})]}),g.jsxs("div",{className:"metric-item",children:[g.jsx("span",{className:"metric-val",children:"O(1) Hash"}),g.jsx("span",{className:"metric-lbl",children:"Telemetry Latency"})]}),g.jsxs("div",{className:"metric-item",children:[g.jsx("span",{className:"metric-val",children:"< 0.6s"}),g.jsx("span",{className:"metric-lbl",children:"Average LCP Load"})]})]}),g.jsxs("section",{className:"features-section",children:[g.jsxs("div",{className:"features-header",children:[g.jsx("h2",{className:"features-title",children:"Grid Operations & Data Infrastructure"}),g.jsx("p",{className:"features-subtitle",children:"A wastewater telemetry dashboard designed around strict algorithmic data structures for maximum efficiency, speed, and grid safety."})]}),g.jsx("div",{className:"features-grid",children:p.map((h,_)=>g.jsxs("div",{className:"landing-feature-card",children:[g.jsx("div",{className:"feature-icon-wrapper",style:{backgroundColor:h.bg,color:h.color},children:h.icon}),g.jsx("h4",{className:"feature-card-title",children:h.title}),g.jsx("p",{className:"feature-card-desc",children:h.desc})]},_))})]}),g.jsx("section",{className:"arch-section",children:g.jsxs("div",{className:"arch-container",children:[g.jsxs("div",{className:"arch-left",children:[g.jsx("h2",{className:"features-title",style:{textAlign:"left",marginBottom:"20px"},children:"Engineered for High-Frequency Telemetry"}),g.jsx("p",{className:"hero-subtitle",style:{textAlign:"left",fontSize:"15px",marginBottom:0,lineHeight:"1.6"},children:"Wastewater Matrix compiles with a clean, light-theme CSS setup. By using pure CSS custom variables and avoiding bloated utility frameworks, SCADA render cycles achieve sub-millisecond redraw latency. This keeps layout shifts (CLS) to zero even while displaying real-time high-throughput fluid flow telemetry."})]}),g.jsxs("div",{className:"arch-right",children:[g.jsxs("div",{className:"arch-pill",children:[g.jsx(Lr,{size:18,className:"arch-pill-icon"}),g.jsx("span",{className:"arch-pill-text",children:"O(1) Diagnostic HashMaps"})]}),g.jsxs("div",{className:"arch-pill",children:[g.jsx($r,{size:18,className:"arch-pill-icon"}),g.jsx("span",{className:"arch-pill-text",children:"Prefix Trie Indexes"})]}),g.jsxs("div",{className:"arch-pill",children:[g.jsx(Ir,{size:18,className:"arch-pill-icon"}),g.jsx("span",{className:"arch-pill-text",children:"React Nested Layouts"})]}),g.jsxs("div",{className:"arch-pill",children:[g.jsx(vi,{size:18,className:"arch-pill-icon"}),g.jsx("span",{className:"arch-pill-text",children:"LIFO Transaction stacks"})]})]})]})}),g.jsx("footer",{className:"landing-footer",children:g.jsxs("div",{children:["© ",new Date().getFullYear()," Wastewater Matrix Corporation. All rights reserved. Municipal Grid Operations & SCADA Telemetry Systems."]})})]})}export{Ts as default};
