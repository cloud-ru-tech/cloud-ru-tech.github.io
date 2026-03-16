"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5310],{"./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js":((Kt,$t,$)=>{$.d($t,{O:()=>_n});var Ht=$("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),Ut=$("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Ot=$.n(Ut),Yt=$("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),wt=$.n(Yt),Bt=$("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),co=$.n(Bt),go=$("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),ao=$.n(go),le=$("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),ce=$.n(le),or=$("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),ae=$.n(or),wo=$("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),Qt={};Qt.styleTagTransform=ae(),Qt.setAttributes=ao(),Qt.insert=co().bind(null,"head"),Qt.domAPI=wt(),Qt.insertStyleElement=ce();var xn=Ot()(wo.A,Qt);const Sn=wo.A&&wo.A.locals?wo.A.locals:void 0;var zo=$("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"),Xt={};Xt.styleTagTransform=ae(),Xt.setAttributes=ao(),Xt.insert=co().bind(null,"head"),Xt.domAPI=wt(),Xt.insertStyleElement=ce();var Mn=Ot()(zo.A,Xt);const kn=zo.A&&zo.A.locals?zo.A.locals:void 0;var er=$("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),sr=$.n(er);/*!
 * OverlayScrollbars
 * Version: 2.11.1
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */const ft=(t,o)=>{const{o:e,i:s,u:r}=t;let n=e,l;const i=(c,b)=>{const m=n,g=c,u=b||(s?!s(m,g):m!==g);return(u||r)&&(n=g,l=m),[n,u,l]};return[o?c=>i(o(n,l),c):i,c=>[n,!!c,l]]},pt=typeof window!="undefined"&&typeof HTMLElement!="undefined"&&!!window.document?window:{},xo=Math.max,rr=Math.min,ie=Math.round,So=Math.abs,Fe=Math.sign,de=pt.cancelAnimationFrame,Mo=pt.requestAnimationFrame,ko=pt.setTimeout,ue=pt.clearTimeout,To=t=>typeof pt[t]!="undefined"?pt[t]:void 0,nr=To("MutationObserver"),Ve=To("IntersectionObserver"),Gt=To("ResizeObserver"),io=To("ScrollTimeline"),be=t=>t===void 0,Eo=t=>t===null,St=t=>typeof t=="number",uo=t=>typeof t=="string",Ao=t=>typeof t=="boolean",mt=t=>typeof t=="function",Mt=t=>Array.isArray(t),Oo=t=>typeof t=="object"&&!Mt(t)&&!Eo(t),pe=t=>{const o=!!t&&t.length,e=St(o)&&o>-1&&o%1==0;return Mt(t)||!mt(t)&&e?o>0&&Oo(t)?o-1 in t:!0:!1},Do=t=>!!t&&t.constructor===Object,Io=t=>t instanceof HTMLElement,Co=t=>t instanceof Element,Ze=()=>performance.now(),En=(t,o,e,s,r)=>{let n=0;const l=Ze(),i=xo(0,e),a=d=>{const c=Ze(),m=c-l>=i,g=d?1:1-(xo(0,l+i-c)/i||0),u=(o-t)*(mt(r)?r(g,g*i,0,1,i):g)+t,y=m||g===1;s&&s(u,g,y),n=y?0:Mo((()=>a()))};return a(),d=>{de(n),d&&a(d)}};function Q(t,o){if(pe(t))for(let e=0;e<t.length&&o(t[e],e,t)!==!1;e++);else t&&Q(Object.keys(t),(e=>o(t[e],e,t)));return t}const Ke=(t,o)=>t.indexOf(o)>=0,bo=(t,o)=>t.concat(o),et=(t,o,e)=>(!uo(o)&&pe(o)?Array.prototype.push.apply(t,o):t.push(o),t),jt=t=>Array.from(t||[]),ve=t=>Mt(t)?t:!uo(t)&&pe(t)?jt(t):[t],he=t=>!!t&&!t.length,fe=t=>jt(new Set(t)),_t=(t,o,e)=>{Q(t,r=>r?r.apply(void 0,o||[]):!0),e||(t.length=0)},Qe="paddingTop",Xe="paddingRight",Ge="paddingLeft",Je="paddingBottom",qe="marginLeft",ts="marginRight",os="marginBottom",es="overflowX",ss="overflowY",jo="width",No="height",Nt="visible",Wt="hidden",Jt="scroll",lr=t=>{const o=String(t||"");return o?o[0].toUpperCase()+o.slice(1):""},Po=(t,o,e,s)=>{if(t&&o){let r=!0;return Q(e,(n=>{const l=t[n],i=o[n];l!==i&&(r=!1)})),r}return!1},rs=(t,o)=>Po(t,o,["w","h"]),Lo=(t,o)=>Po(t,o,["x","y"]),cr=(t,o)=>Po(t,o,["t","r","b","l"]),Pt=()=>{},P=(t,...o)=>t.bind(0,...o),qt=t=>{let o;const e=t?ko:Mo,s=t?ue:de;return[r=>{s(o),o=e((()=>r()),mt(t)?t():t)},()=>s(o)]},Ro=(t,o)=>{const{_:e,p:s,v:r,S:n}=o||{};let l,i,a,d,c=Pt;const b=function(A){c(),ue(l),d=l=i=void 0,c=Pt,t.apply(this,A)},m=y=>n&&i?n(i,y):y,g=()=>{c!==Pt&&b(m(a)||a)},u=function(){const A=jt(arguments),x=mt(e)?e():e;if(St(x)&&x>=0){const R=mt(s)?s():s,_=St(R)&&R>=0,T=x>0?ko:Mo,O=x>0?ue:de,S=m(A)||A,f=b.bind(0,S);let h;c(),r&&!d?(f(),d=!0,h=T((()=>d=void 0),x)):(h=T(f,x),_&&!l&&(l=ko(g,R))),c=()=>O(h),i=a=S}else b(A)};return u.m=g,u},ns=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),xt=t=>t?Object.keys(t):[],Z=(t,o,e,s,r,n,l)=>{const i=[o,e,s,r,n,l];return(typeof t!="object"||Eo(t))&&!mt(t)&&(t={}),Q(i,(a=>{Q(a,((d,c)=>{const b=a[c];if(t===b)return!0;const m=Mt(b);if(b&&Do(b)){const g=t[c];let u=g;m&&!Mt(g)?u=[]:!m&&!Do(g)&&(u={}),t[c]=Z(u,b)}else t[c]=m?b.slice():b}))})),t},ls=(t,o)=>Q(Z({},t),((e,s,r)=>{e===void 0?delete r[s]:e&&Do(e)&&(r[s]=ls(e))})),me=t=>!xt(t).length,cs=(t,o,e)=>xo(t,rr(o,e)),Ft=t=>fe((Mt(t)?t:(t||"").split(" ")).filter((o=>o))),_e=(t,o)=>t&&t.getAttribute(o),as=(t,o)=>t&&t.hasAttribute(o),Dt=(t,o,e)=>{Q(Ft(o),(s=>{t&&t.setAttribute(s,String(e||""))}))},kt=(t,o)=>{Q(Ft(o),(e=>t&&t.removeAttribute(e)))},$o=(t,o)=>{const e=Ft(_e(t,o)),s=P(Dt,t,o),r=(n,l)=>{const i=new Set(e);return Q(Ft(n),(a=>{i[l](a)})),jt(i).join(" ")};return{O:n=>s(r(n,"delete")),$:n=>s(r(n,"add")),C:n=>{const l=Ft(n);return l.reduce(((i,a)=>i&&e.includes(a)),l.length>0)}}},is=(t,o,e)=>($o(t,o).O(e),P(ye,t,o,e)),ye=(t,o,e)=>($o(t,o).$(e),P(is,t,o,e)),Ho=(t,o,e,s)=>(s?ye:is)(t,o,e),ge=(t,o,e)=>$o(t,o).C(e),ds=t=>$o(t,"class"),us=(t,o)=>{ds(t).O(o)},we=(t,o)=>(ds(t).$(o),P(us,t,o)),bs=(t,o)=>{const e=o?Co(o)&&o:document;return e?jt(e.querySelectorAll(t)):[]},ar=(t,o)=>{const e=o?Co(o)&&o:document;return e&&e.querySelector(t)},ze=(t,o)=>Co(t)&&t.matches(o),ps=t=>ze(t,"body"),xe=t=>t?jt(t.childNodes):[],po=t=>t&&t.parentElement,to=(t,o)=>Co(t)&&t.closest(o),Se=t=>document.activeElement,ir=(t,o,e)=>{const s=to(t,o),r=t&&ar(e,s),n=to(r,o)===s;return s&&r?s===t||r===t||n&&to(to(t,e),o)!==s:!1},oo=t=>{Q(ve(t),(o=>{const e=po(o);o&&e&&e.removeChild(o)}))},vt=(t,o)=>P(oo,t&&o&&Q(ve(o),(e=>{e&&t.appendChild(e)})));let vs;const dr=()=>vs,ur=t=>{vs=t},eo=t=>{const o=document.createElement("div");return Dt(o,"class",t),o},hs=t=>{const o=eo(),e=dr(),s=t.trim();return o.innerHTML=e?e.createHTML(s):s,Q(xe(o),(r=>oo(r)))},fs=(t,o)=>t.getPropertyValue(o)||t[o]||"",ms=t=>{const o=t||0;return isFinite(o)?o:0},Uo=t=>ms(parseFloat(t||"")),Me=t=>Math.round(t*1e4)/1e4,_s=t=>`${Me(ms(t))}px`;function vo(t,o){t&&o&&Q(o,((e,s)=>{try{const r=t.style,n=Eo(e)||Ao(e)?"":St(e)?_s(e):e;s.indexOf("--")===0?r.setProperty(s,n):r[s]=n}catch(r){}}))}function It(t,o,e){const s=uo(o);let r=s?"":{};if(t){const n=pt.getComputedStyle(t,e)||t.style;r=s?fs(n,o):jt(o).reduce(((l,i)=>(l[i]=fs(n,i),l)),r)}return r}const ys=(t,o,e)=>{const s=o?`${o}-`:"",r=e?`-${e}`:"",n=`${s}top${r}`,l=`${s}right${r}`,i=`${s}bottom${r}`,a=`${s}left${r}`,d=It(t,[n,l,i,a]);return{t:Uo(d[n]),r:Uo(d[l]),b:Uo(d[i]),l:Uo(d[a])}},ke=(t,o)=>`translate${Oo(t)?`(${t.x},${t.y})`:`${o?"X":"Y"}(${t})`}`,br=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),pr={w:0,h:0},Yo=(t,o)=>o?{w:o[`${t}Width`],h:o[`${t}Height`]}:pr,vr=t=>Yo("inner",t||pt),so=P(Yo,"offset"),gs=P(Yo,"client"),Bo=P(Yo,"scroll"),Te=t=>{const o=parseFloat(It(t,jo))||0,e=parseFloat(It(t,No))||0;return{w:o-ie(o),h:e-ie(e)}},Ee=t=>t.getBoundingClientRect(),hr=t=>!!t&&br(t),Ae=t=>!!(t&&(t[No]||t[jo])),ws=(t,o)=>{const e=Ae(t);return!Ae(o)&&e},zs=(t,o,e,s)=>{Q(Ft(o),(r=>{t&&t.removeEventListener(r,e,s)}))},tt=(t,o,e,s)=>{var r;const n=(r=s&&s.H)!=null?r:!0,l=s&&s.I||!1,i=s&&s.A||!1,a={passive:n,capture:l};return P(_t,Ft(o).map((d=>{const c=i?b=>{zs(t,d,c,l),e&&e(b)}:e;return t&&t.addEventListener(d,c,a),P(zs,t,d,c,l)})))},xs=t=>t.stopPropagation(),Oe=t=>t.preventDefault(),Ss=t=>xs(t)||Oe(t),Tt=(t,o)=>{const{x:e,y:s}=St(o)?{x:o,y:o}:o||{};St(e)&&(t.scrollLeft=e),St(s)&&(t.scrollTop=s)},yt=t=>({x:t.scrollLeft,y:t.scrollTop}),Ms=()=>({D:{x:0,y:0},M:{x:0,y:0}}),fr=(t,o)=>{const{D:e,M:s}=t,{w:r,h:n}=o,l=(b,m,g)=>{let u=Fe(b)*g,y=Fe(m)*g;if(u===y){const A=So(b),x=So(m);y=A>x?0:y,u=A<x?0:u}return u=u===y?0:u,[u+0,y+0]},[i,a]=l(e.x,s.x,r),[d,c]=l(e.y,s.y,n);return{D:{x:i,y:d},M:{x:a,y:c}}},De=({D:t,M:o})=>{const e=(s,r)=>s===0&&s<=r;return{x:e(t.x,o.x),y:e(t.y,o.y)}},ks=({D:t,M:o},e)=>{const s=(r,n,l)=>cs(0,1,(r-l)/(r-n)||0);return{x:s(t.x,o.x,e.x),y:s(t.y,o.y,e.y)}},Ie=t=>{t&&t.focus&&t.focus({preventScroll:!0})},Ts=(t,o)=>{Q(ve(o),t)},Ce=t=>{const o=new Map,e=(n,l)=>{if(n){const i=o.get(n);Ts((a=>{i&&i[a?"delete":"clear"](a)}),l)}else o.forEach((i=>{i.clear()})),o.clear()},s=(n,l)=>{if(uo(n)){const d=o.get(n)||new Set;return o.set(n,d),Ts((c=>{mt(c)&&d.add(c)}),l),P(e,n,l)}Ao(l)&&l&&e();const i=xt(n),a=[];return Q(i,(d=>{const c=n[d];c&&et(a,s(d,c))})),P(_t,a)},r=(n,l)=>{Q(jt(o.get(n)),(i=>{l&&!he(l)?i.apply(0,l):i()}))};return s(t||{}),[s,e,r]},Es={},As={},mr=t=>{Q(t,(o=>Q(o,((e,s)=>{Es[s]=o[s]}))))},Os=(t,o,e)=>xt(t).map((s=>{const{static:r,instance:n}=t[s],[l,i,a]=e||[],d=e?n:r;if(d){const c=e?d(l,i,o):d(o);return(a||As)[s]=c}})),ho=t=>As[t],_r="__osOptionsValidationPlugin",ro="data-overlayscrollbars",Wo="os-environment",Fo=`${Wo}-scrollbar-hidden`,je=`${ro}-initialize`,Vo="noClipping",Ds=`${ro}-body`,Lt=ro,yr="host",Ct=`${ro}-viewport`,gr=es,wr=ss,zr="arrange",Is="measuring",xr="scrolling",Cs="scrollbarHidden",Sr="noContent",Ne=`${ro}-padding`,js=`${ro}-content`,Pe="os-size-observer",Mr=`${Pe}-appear`,kr=`${Pe}-listener`,An=null,On=null,Dn=null,Tr="os-trinsic-observer",Er="os-theme-none",gt="os-scrollbar",Ar=`${gt}-rtl`,Or=`${gt}-horizontal`,Dr=`${gt}-vertical`,Ns=`${gt}-track`,Le=`${gt}-handle`,Ir=`${gt}-visible`,Cr=`${gt}-cornerless`,Ps=`${gt}-interaction`,Ls=`${gt}-unusable`,Re=`${gt}-auto-hide`,Rs=`${Re}-hidden`,$s=`${gt}-wheel`,jr=`${Ns}-interactive`,Nr=`${Le}-interactive`,Pr="__osSizeObserverPlugin",In=null,Lr=(t,o)=>{const{T:e}=o,[s,r]=t("showNativeOverlaidScrollbars");return[s&&e.x&&e.y,r]},no=t=>t.indexOf(Nt)===0,Rr=(t,o)=>{const e=(r,n,l,i)=>{const a=r===Nt?Wt:r.replace(`${Nt}-`,""),d=no(r),c=no(l);return!n&&!i?Wt:d&&c?Nt:d?n&&i?a:n?Nt:Wt:n?a:c&&i?Nt:Wt},s={x:e(o.x,t.x,o.y,t.y),y:e(o.y,t.y,o.x,t.x)};return{k:s,R:{x:s.x===Jt,y:s.y===Jt}}},Hs="__osScrollbarsHidingPlugin",Cn=null,$r="__osClickScrollPlugin",jn=null,Us=t=>JSON.stringify(t,((o,e)=>{if(mt(e))throw 0;return e})),Ys=(t,o)=>t?`${o}`.split(".").reduce(((e,s)=>e&&ns(e,s)?e[s]:void 0),t):void 0,Hr={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Bs=(t,o)=>{const e={},s=bo(xt(o),xt(t));return Q(s,(r=>{const n=t[r],l=o[r];if(Oo(n)&&Oo(l))Z(e[r]={},Bs(n,l)),me(e[r])&&delete e[r];else if(ns(o,r)&&l!==n){let i=!0;if(Mt(n)||Mt(l))try{Us(n)===Us(l)&&(i=!1)}catch(a){}i&&(e[r]=l)}})),e},Ws=(t,o,e)=>s=>[Ys(t,s),e||Ys(o,s)!==void 0];let Fs;const Ur=()=>Fs,Yr=t=>{Fs=t};let $e;const Br=()=>{const t=(_,T,O)=>{vt(document.body,_),vt(document.body,_);const j=gs(_),S=so(_),f=Te(T);return O&&oo(_),{x:S.h-j.h+f.h,y:S.w-j.w+f.w}},o=_=>{let T=!1;const O=we(_,Fo);try{T=It(_,"scrollbar-width")==="none"||It(_,"display","::-webkit-scrollbar")==="none"}catch(j){}return O(),T},e=`.${Wo}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${Wo} div{width:200%;height:200%;margin:10px 0}.${Fo}{scrollbar-width:none!important}.${Fo}::-webkit-scrollbar,.${Fo}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`,r=hs(`<div class="${Wo}"><div></div><style>${e}</style></div>`)[0],n=r.firstChild,l=r.lastChild,i=Ur();i&&(l.nonce=i);const[a,,d]=Ce(),[c,b]=ft({o:t(r,n),i:Lo},P(t,r,n,!0)),[m]=b(),g=o(r),u={x:m.x===0,y:m.y===0},y={elements:{host:null,padding:!g,viewport:_=>g&&ps(_)&&_,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},A=Z({},Hr),x=P(Z,{},A),I=P(Z,{},y),R={N:m,T:u,P:g,G:!!io,K:P(a,"r"),Z:I,tt:_=>Z(y,_)&&I(),nt:x,ot:_=>Z(A,_)&&x(),st:Z({},y),et:Z({},A)};if(kt(r,"style"),oo(r),tt(pt,"resize",(()=>{d("r",[])})),mt(pt.matchMedia)&&!g&&(!u.x||!u.y)){const _=T=>{const O=pt.matchMedia(`(resolution: ${pt.devicePixelRatio}dppx)`);tt(O,"change",(()=>{T(),_(T)}),{A:!0})};_((()=>{const[T,O]=c();Z(R.N,T),d("r",[O])}))}return R},Et=()=>($e||($e=Br()),$e),Wr=(t,o,e)=>{let s=!1;const r=e?new WeakMap:!1,n=()=>{s=!0},l=i=>{if(r&&e){const a=e.map((d=>{const[c,b]=d||[];return[b&&c?(i||bs)(c,t):[],b]}));Q(a,(d=>Q(d[0],(c=>{const b=d[1],m=r.get(c)||[];if(t.contains(c)&&b){const u=tt(c,b,(y=>{s?(u(),r.delete(c)):o(y)}));r.set(c,et(m,u))}else _t(m),r.delete(c)}))))}};return l(),[n,l]},Vs=(t,o,e,s)=>{let r=!1;const{ct:n,rt:l,lt:i,it:a,ut:d,ft:c}=s||{},b=Ro((()=>r&&e(!0)),{_:33,p:99}),[m,g]=Wr(t,b,i),u=n||[],y=l||[],A=bo(u,y),x=(R,_)=>{if(!he(_)){const T=d||Pt,O=c||Pt,j=[],S=[];let f=!1,h=!1;if(Q(_,(M=>{const{attributeName:z,target:L,type:H,oldValue:F,addedNodes:V,removedNodes:B}=M,X=H==="attributes",W=H==="childList",st=t===L,N=X&&z,p=N&&_e(L,z||""),w=uo(p)?p:null,k=N&&F!==w,v=Ke(y,z)&&k;if(o&&(W||!st)){const D=X&&k,E=D&&a&&ze(L,a),U=(E?!T(L,z,F,w):!X||D)&&!O(M,!!E,t,s);Q(V,(K=>et(j,K))),Q(B,(K=>et(j,K))),h=h||U}!o&&st&&k&&!T(L,z,F,w)&&(et(S,z),f=f||v)})),g((M=>fe(j).reduce(((z,L)=>(et(z,bs(M,L)),ze(L,M)?et(z,L):z)),[]))),o)return!R&&h&&e(!1),[!1];if(!he(S)||f){const M=[fe(S),f];return R||e.apply(0,M),M}}},I=new nr(P(x,!1));return[()=>(I.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:A,subtree:o,childList:o,characterData:o}),r=!0,()=>{r&&(m(),I.disconnect(),r=!1)}),()=>{if(r)return b.m(),x(!0,I.takeRecords())}]};let Vt=null;const Zs=(t,o,e)=>{const{_t:s}=e||{},r=ho(Pr),[n]=ft({o:!1,u:!0});return()=>{const l=[],a=hs(`<div class="${Pe}"><div class="${kr}"></div></div>`)[0],d=a.firstChild,c=b=>{const m=b instanceof ResizeObserverEntry;let g=!1,u=!1;if(m){const[y,,A]=n(b.contentRect),x=Ae(y);u=ws(y,A),g=!u&&!x}else u=b===!0;g||o({dt:!0,_t:u})};if(Gt){if(!Ao(Vt)){const u=new Gt(Pt);u.observe(t,{get box(){Vt=!0}}),Vt=Vt||!1,u.disconnect()}const b=Ro(c,{_:0,p:0}),m=u=>b(u.pop()),g=new Gt(m);if(g.observe(Vt?t:d),et(l,[()=>g.disconnect(),!Vt&&vt(t,a)]),Vt){const u=new Gt(m);u.observe(t,{box:"border-box"}),et(l,(()=>u.disconnect()))}}else if(r){const[b,m]=r(d,c,s);et(l,bo([we(a,Mr),tt(a,"animationstart",b),vt(t,a)],m))}else return Pt;return P(_t,l)}},Fr=(t,o)=>{let e;const s=a=>a.h===0||a.isIntersecting||a.intersectionRatio>0,r=eo(Tr),[n]=ft({o:!1}),l=(a,d)=>{if(a){const c=n(s(a)),[,b]=c;return b&&!d&&o(c)&&[c]}},i=(a,d)=>l(d.pop(),a);return[()=>{const a=[];if(Ve)e=new Ve(P(i,!1),{root:t}),e.observe(r),et(a,(()=>{e.disconnect()}));else{const d=()=>{const c=so(r);l(c)};et(a,Zs(r,d)()),d()}return P(_t,et(a,vt(t,r)))},()=>e&&i(!0,e.takeRecords())]},Vr=(t,o,e,s)=>{let r,n,l,i,a,d;const c=`[${Lt}]`,b=`[${Ct}]`,m=["id","class","style","open","wrap","cols","rows"],{vt:g,ht:u,U:y,gt:A,bt:x,L:I,wt:R,yt:_,St:T,Ot:O}=t,j=v=>It(v,"direction")==="rtl",S={$t:!1,F:j(g)},f=Et(),h=ho(Hs),[M]=ft({i:rs,o:{w:0,h:0}},(()=>{const v=h&&h.V(t,o,S,f,e).W,E=!(R&&I)&&ge(u,Lt,Vo),C=!I&&_(zr),U=C&&yt(A),K=U&&O(),ot=T(Is,E),J=C&&v&&v()[0],ut=Bo(y),Y=Te(y);return J&&J(),Tt(A,U),K&&K(),E&&ot(),{w:ut.w+Y.w,h:ut.h+Y.h}})),z=Ro(s,{_:()=>r,p:()=>n,S(v,D){const[E]=v,[C]=D;return[bo(xt(E),xt(C)).reduce(((U,K)=>(U[K]=E[K]||C[K],U)),{})]}}),L=v=>{const D=j(g);Z(v,{Ct:d!==D}),Z(S,{F:D}),d=D},H=(v,D)=>{const[E,C]=v,U={xt:C};return Z(S,{$t:E}),D||s(U),U},F=({dt:v,_t:D})=>{const C=!(v&&!D)&&f.P?z:s,U={dt:v||D,_t:D};L(U),C(U)},V=(v,D)=>{const[,E]=M(),C={Ht:E};return L(C),E&&!D&&(v?s:z)(C),C},B=(v,D,E)=>{const C={Et:D};return L(C),D&&!E&&z(C),C},[X,W]=x?Fr(u,H):[],st=!I&&Zs(u,F,{_t:!0}),[N,p]=Vs(u,!1,B,{rt:m,ct:m}),w=I&&Gt&&new Gt((v=>{const D=v[v.length-1].contentRect;F({dt:!0,_t:ws(D,a)}),a=D})),k=Ro((()=>{const[,v]=M();s({Ht:v})}),{_:222,v:!0});return[()=>{w&&w.observe(u);const v=st&&st(),D=X&&X(),E=N(),C=f.K((U=>{U?z({zt:U}):k()}));return()=>{w&&w.disconnect(),v&&v(),D&&D(),i&&i(),E(),C()}},({It:v,At:D,Dt:E})=>{const C={},[U]=v("update.ignoreMutation"),[K,ot]=v("update.attributes"),[J,ut]=v("update.elementEvents"),[Y,ct]=v("update.debounce"),ht=ut||ot,at=D||E,it=nt=>mt(U)&&U(nt);if(ht){l&&l(),i&&i();const[nt,lt]=Vs(x||y,!0,V,{ct:bo(m,K||[]),lt:J,it:c,ft:(rt,q)=>{const{target:dt,attributeName:bt}=rt;return(!q&&bt&&!I?ir(dt,c,b):!1)||!!to(dt,`.${gt}`)||!!it(rt)}});i=nt(),l=lt}if(ct)if(z.m(),Mt(Y)){const nt=Y[0],lt=Y[1];r=St(nt)&&nt,n=St(lt)&&lt}else St(Y)?(r=Y,n=!1):(r=!1,n=!1);if(at){const nt=p(),lt=W&&W(),rt=l&&l();nt&&Z(C,B(nt[0],nt[1],at)),lt&&Z(C,H(lt[0],at)),rt&&Z(C,V(rt[0],at))}return L(C),C},S]},Ks=(t,o)=>mt(o)?o.apply(0,t):o,Zr=(t,o,e,s)=>{const r=be(s)?e:s;return Ks(t,r)||o.apply(0,t)},Qs=(t,o,e,s)=>{const r=be(s)?e:s,n=Ks(t,r);return!!n&&(Io(n)?n:o.apply(0,t))},Kr=(t,o)=>{const{nativeScrollbarsOverlaid:e,body:s}=o||{},{T:r,P:n,Z:l}=Et(),{nativeScrollbarsOverlaid:i,body:a}=l().cancel,d=e!=null?e:i,c=be(s)?a:s,b=(r.x||r.y)&&d,m=t&&(Eo(c)?!n:c);return!!b||!!m},Qr=(t,o,e,s)=>{const r="--os-viewport-percent",n="--os-scroll-percent",l="--os-scroll-direction",{Z:i}=Et(),{scrollbars:a}=i(),{slot:d}=a,{vt:c,ht:b,U:m,Mt:g,gt:u,wt:y,L:A}=o,{scrollbars:x}=g?{}:t,{slot:I}=x||{},R=[],_=[],T=[],O=Qs([c,b,m],(()=>A&&y?c:b),d,I),j=N=>{if(io){let p=null,w=[];const k=new io({source:u,axis:N}),v=()=>{p&&p.cancel(),p=null};return{Rt:E=>{const{Tt:C}=e,U=De(C)[N],K=N==="x",ot=[ke(0,K),ke(`calc(100cq${K?"w":"h"} + -100%)`,K)],J=U?ot:ot.reverse();return w[0]===J[0]&&w[1]===J[1]||(v(),w=J,p=E.kt.animate({clear:["left"],transform:J},{timeline:k})),v}}}},S={x:j("x"),y:j("y")},f=()=>{const{Vt:N,Lt:p}=e,w=(k,v)=>cs(0,1,k/(k+v)||0);return{x:w(p.x,N.x),y:w(p.y,N.y)}},h=(N,p,w)=>{const k=w?we:us;Q(N,(v=>{k(v.Ut,p)}))},M=(N,p)=>{Q(N,(w=>{const[k,v]=p(w);vo(k,v)}))},z=(N,p,w)=>{const k=Ao(w),v=k?w:!0,D=k?!w:!0;v&&h(_,N,p),D&&h(T,N,p)},L=()=>{const N=f(),p=w=>k=>[k.Ut,{[r]:Me(w)+""}];M(_,p(N.x)),M(T,p(N.y))},H=()=>{if(!io){const{Tt:N}=e,p=ks(N,yt(u)),w=k=>v=>[v.Ut,{[n]:Me(k)+""}];M(_,w(p.x)),M(T,w(p.y))}},F=()=>{const{Tt:N}=e,p=De(N),w=k=>v=>[v.Ut,{[l]:k?"0":"1"}];M(_,w(p.x)),M(T,w(p.y)),io&&(_.forEach(S.x.Rt),T.forEach(S.y.Rt))},V=()=>{if(A&&!y){const{Vt:N,Tt:p}=e,w=De(p),k=ks(p,yt(u)),v=D=>{const{Ut:E}=D,C=po(E)===m&&E,U=(K,ot,J)=>{const ut=ot*K;return _s(J?ut:-ut)};return[C,C&&{transform:ke({x:U(k.x,N.x,w.x),y:U(k.y,N.y,w.y)})}]};M(_,v),M(T,v)}},B=N=>{const p=N?"x":"y",k=eo(`${gt} ${N?Or:Dr}`),v=eo(Ns),D=eo(Le),E={Ut:k,Pt:v,kt:D},C=S[p];return et(N?_:T,E),et(R,[vt(k,v),vt(v,D),P(oo,k),C&&C.Rt(E),s(E,z,N)]),E},X=P(B,!0),W=P(B,!1),st=()=>(vt(O,_[0].Ut),vt(O,T[0].Ut),P(_t,R));return X(),W(),[{Nt:L,qt:H,Bt:F,Ft:V,jt:z,Xt:{Yt:_,Wt:X,Jt:P(M,_)},Gt:{Yt:T,Wt:W,Jt:P(M,T)}},st]},Xr=(t,o,e,s)=>(r,n,l)=>{const{ht:i,U:a,L:d,gt:c,Kt:b,Ot:m}=o,{Ut:g,Pt:u,kt:y}=r,[A,x]=qt(333),[I,R]=qt(444),_=j=>{mt(c.scrollBy)&&c.scrollBy({behavior:"smooth",left:j.x,top:j.y})},T=()=>{const j="pointerup pointercancel lostpointercapture",S=`client${l?"X":"Y"}`,f=l?jo:No,h=l?"left":"top",M=l?"w":"h",z=l?"x":"y",L=(F,V)=>B=>{const{Vt:X}=e,W=so(u)[M]-so(y)[M],N=V*B/W*X[z];Tt(c,{[z]:F+N})},H=[];return tt(u,"pointerdown",(F=>{const V=to(F.target,`.${Le}`)===y,B=V?y:u,X=t.scrollbars,W=X[V?"dragScroll":"clickScroll"],{button:st,isPrimary:N,pointerType:p}=F,{pointers:w}=X;if(st===0&&N&&W&&(w||[]).includes(p)){_t(H),R();const v=!V&&(F.shiftKey||W==="instant"),D=P(Ee,y),E=P(Ee,u),C=(q,dt)=>(q||D())[h]-(dt||E())[h],U=ie(Ee(c)[f])/so(c)[M]||1,K=L(yt(c)[z],1/U),ot=F[S],J=D(),ut=E(),Y=J[f],ct=C(J,ut)+Y/2,ht=ot-ut[h],at=V?0:ht-ct,it=q=>{_t(rt),B.releasePointerCapture(q.pointerId)},nt=V||v,lt=m(),rt=[tt(b,j,it),tt(b,"selectstart",(q=>Oe(q)),{H:!1}),tt(u,j,it),nt&&tt(u,"pointermove",(q=>K(at+(q[S]-ot)))),nt&&(()=>{const q=yt(c);lt();const dt=yt(c),bt={x:dt.x-q.x,y:dt.y-q.y};(So(bt.x)>3||So(bt.y)>3)&&(m(),Tt(c,q),_(bt),I(lt))})];if(B.setPointerCapture(F.pointerId),v)K(at);else if(!V){const q=ho($r);if(q){const dt=q(K,at,Y,(bt=>{bt?lt():et(rt,lt)}));et(rt,dt),et(H,P(dt,!0))}}}}))};let O=!0;return P(_t,[tt(y,"pointermove pointerleave",s),tt(g,"pointerenter",(()=>{n(Ps,!0)})),tt(g,"pointerleave pointercancel",(()=>{n(Ps,!1)})),!d&&tt(g,"mousedown",(()=>{const j=Se();(as(j,Ct)||as(j,Lt)||j===document.body)&&ko(P(Ie,a),25)})),tt(g,"wheel",(j=>{const{deltaX:S,deltaY:f,deltaMode:h}=j;O&&h===0&&po(g)===i&&_({x:S,y:f}),O=!1,n($s,!0),A((()=>{O=!0,n($s)})),Oe(j)}),{H:!1,I:!0}),tt(g,"pointerdown",P(tt,b,"click",Ss,{A:!0,I:!0,H:!1}),{I:!0}),T(),x,R])},Gr=(t,o,e,s,r,n)=>{let l,i,a,d,c,b=Pt,m=0;const g=["mouse","pen"],u=p=>g.includes(p.pointerType),[y,A]=qt(),[x,I]=qt(100),[R,_]=qt(100),[T,O]=qt((()=>m)),[j,S]=Qr(t,r,s,Xr(o,r,s,(p=>u(p)&&X()))),{ht:f,Qt:h,wt:M}=r,{jt:z,Nt:L,qt:H,Bt:F,Ft:V}=j,B=(p,w)=>{if(O(),p)z(Rs);else{const k=P(z,Rs,!0);m>0&&!w?T(k):k()}},X=()=>{(a?!l:!d)&&(B(!0),x((()=>{B(!1)})))},W=p=>{z(Re,p,!0),z(Re,p,!1)},st=p=>{u(p)&&(l=a,a&&B(!0))},N=[O,I,_,A,()=>b(),tt(f,"pointerover",st,{A:!0}),tt(f,"pointerenter",st),tt(f,"pointerleave",(p=>{u(p)&&(l=!1,a&&B(!1))})),tt(f,"pointermove",(p=>{u(p)&&i&&X()})),tt(h,"scroll",(p=>{y((()=>{H(),X()})),n(p),V()}))];return[()=>P(_t,et(N,S())),({It:p,Dt:w,Zt:k,tn:v})=>{const{nn:D,sn:E,en:C,cn:U}=v||{},{Ct:K,_t:ot}=k||{},{F:J}=e,{T:ut}=Et(),{k:Y,rn:ct}=s,[ht,at]=p("showNativeOverlaidScrollbars"),[it,nt]=p("scrollbars.theme"),[lt,rt]=p("scrollbars.visibility"),[q,dt]=p("scrollbars.autoHide"),[bt,fo]=p("scrollbars.autoHideSuspend"),[Qo]=p("scrollbars.autoHideDelay"),[Xo,Go]=p("scrollbars.dragScroll"),[Zt,mo]=p("scrollbars.clickScroll"),[Jo,Ue]=p("overflow"),Ye=ot&&!w,Be=ct.x||ct.y,At=D||E||U||K||w,We=C||rt||Ue,qo=ht&&ut.x&&ut.y,te=(Rt,_o,yo)=>{const oe=Rt.includes(Jt)&&(lt===Nt||lt==="auto"&&_o===Jt);return z(Ir,oe,yo),oe};if(m=Qo,Ye&&(bt&&Be?(W(!1),b(),R((()=>{b=tt(h,"scroll",P(W,!0),{A:!0})}))):W(!0)),at&&z(Er,qo),nt&&(z(c),z(it,!0),c=it),fo&&!bt&&W(!0),dt&&(i=q==="move",a=q==="leave",d=q==="never",B(d,!0)),Go&&z(Nr,Xo),mo&&z(jr,!!Zt),We){const Rt=te(Jo.x,Y.x,!0),_o=te(Jo.y,Y.y,!1);z(Cr,!(Rt&&_o))}At&&(H(),L(),V(),U&&F(),z(Ls,!ct.x,!0),z(Ls,!ct.y,!1),z(Ar,J&&!M))},{},j]},Jr=t=>{const o=Et(),{Z:e,P:s}=o,{elements:r}=e(),{padding:n,viewport:l,content:i}=r,a=Io(t),d=a?{}:t,{elements:c}=d,{padding:b,viewport:m,content:g}=c||{},u=a?t:d.target,y=ps(u),A=u.ownerDocument,x=A.documentElement,I=()=>A.defaultView||pt,R=P(Zr,[u]),_=P(Qs,[u]),T=P(eo,""),O=P(R,T,l),j=P(_,T,i),S=Y=>{const ct=so(Y),ht=Bo(Y),at=It(Y,es),it=It(Y,ss);return ht.w-ct.w>0&&!no(at)||ht.h-ct.h>0&&!no(it)},f=O(m),h=f===u,M=h&&y,z=!h&&j(g),L=!h&&f===z,H=M?x:f,F=M?H:u,V=!h&&_(T,n,b),B=!L&&z,X=[B,H,V,F].map((Y=>Io(Y)&&!po(Y)&&Y)),W=Y=>Y&&Ke(X,Y),st=!W(H)&&S(H)?H:u,N=M?x:H,w={vt:u,ht:F,U:H,ln:V,bt:B,gt:N,Qt:M?A:H,an:y?x:st,Kt:A,wt:y,Mt:a,L:h,un:I,yt:Y=>ge(H,Ct,Y),St:(Y,ct)=>Ho(H,Ct,Y,ct),Ot:()=>Ho(N,Ct,xr,!0)},{vt:k,ht:v,ln:D,U:E,bt:C}=w,U=[()=>{kt(v,[Lt,je]),kt(k,je),y&&kt(x,[je,Lt])}];let K=xe([C,E,D,v,k].find((Y=>Y&&!W(Y))));const ot=M?k:C||E,J=P(_t,U);return[w,()=>{const Y=I(),ct=Se(),ht=rt=>{vt(po(rt),xe(rt)),oo(rt)},at=rt=>tt(rt,"focusin focusout focus blur",Ss,{I:!0,H:!1}),it="tabindex",nt=_e(E,it),lt=at(ct);return Dt(v,Lt,h?"":yr),Dt(D,Ne,""),Dt(E,Ct,""),Dt(C,js,""),h||(Dt(E,it,nt||"-1"),y&&Dt(x,Ds,"")),vt(ot,K),vt(v,D),vt(D||v,!h&&E),vt(E,C),et(U,[lt,()=>{const rt=Se(),q=W(E),dt=q&&rt===E?k:rt,bt=at(dt);kt(D,Ne),kt(C,js),kt(E,Ct),y&&kt(x,Ds),nt?Dt(E,it,nt):kt(E,it),W(C)&&ht(C),q&&ht(E),W(D)&&ht(D),Ie(dt),bt()}]),s&&!h&&(ye(E,Ct,Cs),et(U,P(kt,E,Ct))),Ie(!h&&y&&ct===k&&Y.top===Y?E:ct),lt(),K=0,J},J]},qr=({bt:t})=>({Zt:o,fn:e,Dt:s})=>{const{xt:r}=o||{},{$t:n}=e;t&&(r||s)&&vo(t,{[No]:n&&"100%"})},tn=({ht:t,ln:o,U:e,L:s},r)=>{const[n,l]=ft({i:cr,o:ys()},P(ys,t,"padding",""));return({It:i,Zt:a,fn:d,Dt:c})=>{let[b,m]=l(c);const{P:g}=Et(),{dt:u,Ht:y,Ct:A}=a||{},{F:x}=d,[I,R]=i("paddingAbsolute");(u||m||(c||y))&&([b,m]=n(c));const T=!s&&(R||A||m);if(T){const O=!I||!o&&!g,j=b.r+b.l,S=b.t+b.b,f={[ts]:O&&!x?-j:0,[os]:O?-S:0,[qe]:O&&x?-j:0,top:O?-b.t:0,right:O?x?-b.r:"auto":0,left:O?x?"auto":-b.l:0,[jo]:O&&`calc(100% + ${j}px)`},h={[Qe]:O?b.t:0,[Xe]:O?b.r:0,[Je]:O?b.b:0,[Ge]:O?b.l:0};vo(o||e,f),vo(e,h),Z(r,{ln:b,_n:!O,j:o?h:Z({},f,h)})}return{dn:T}}},on=(t,o)=>{const e=Et(),{ht:s,ln:r,U:n,L:l,Qt:i,gt:a,wt:d,St:c,un:b}=t,{P:m}=e,g=d&&l,u=P(xo,0),y={display:()=>!1,direction:p=>p!=="ltr",flexDirection:p=>p.endsWith("-reverse"),writingMode:p=>p!=="horizontal-tb"},A=xt(y),x={i:rs,o:{w:0,h:0}},I={i:Lo,o:{}},R=p=>{c(Is,!g&&p)},_=p=>{if(!A.some((ot=>{const J=p[ot];return J&&y[ot](J)})))return{D:{x:0,y:0},M:{x:1,y:1}};R(!0);const k=yt(a),v=c(Sr,!0),D=tt(i,Jt,(ot=>{const J=yt(a);ot.isTrusted&&J.x===k.x&&J.y===k.y&&xs(ot)}),{I:!0,A:!0});Tt(a,{x:0,y:0}),v();const E=yt(a),C=Bo(a);Tt(a,{x:C.w,y:C.h});const U=yt(a);Tt(a,{x:U.x-E.x<1&&-C.w,y:U.y-E.y<1&&-C.h});const K=yt(a);return Tt(a,k),Mo((()=>D())),{D:E,M:K}},T=(p,w)=>{const k=pt.devicePixelRatio%1!==0?1:0,v={w:u(p.w-w.w),h:u(p.h-w.h)};return{w:v.w>k?v.w:0,h:v.h>k?v.h:0}},[O,j]=ft(x,P(Te,n)),[S,f]=ft(x,P(Bo,n)),[h,M]=ft(x),[z]=ft(I),[L,H]=ft(x),[F]=ft(I),[V]=ft({i:(p,w)=>Po(p,w,A),o:{}},(()=>hr(n)?It(n,A):{})),[B,X]=ft({i:(p,w)=>Lo(p.D,w.D)&&Lo(p.M,w.M),o:Ms()}),W=ho(Hs),st=(p,w)=>`${w?gr:wr}${lr(p)}`,N=p=>{const w=v=>[Nt,Wt,Jt].map((D=>st(D,v))),k=w(!0).concat(w()).join(" ");c(k),c(xt(p).map((v=>st(p[v],v==="x"))).join(" "),!0)};return({It:p,Zt:w,fn:k,Dt:v},{dn:D})=>{const{dt:E,Ht:C,Ct:U,_t:K,zt:ot}=w||{},J=W&&W.V(t,o,k,e,p),{Y:ut,W:Y,J:ct}=J||{},[ht,at]=Lr(p,e),[it,nt]=p("overflow"),lt=no(it.x),rt=no(it.y),q=E||D||C||U||ot||at;let dt=j(v),bt=f(v),fo=M(v),Qo=H(v);if(at&&m&&c(Cs,!ht),q){ge(s,Lt,Vo)&&R(!0);const[qs]=Y?Y():[],[ee]=dt=O(v),[se]=bt=S(v),re=gs(n),ne=g&&vr(b()),zn={w:u(se.w+ee.w),h:u(se.h+ee.h)},tr={w:u((ne?ne.w:re.w+u(re.w-se.w))+ee.w),h:u((ne?ne.h:re.h+u(re.h-se.h))+ee.h)};qs&&qs(),Qo=L(tr),fo=h(T(zn,tr),v)}const[Xo,Go]=Qo,[Zt,mo]=fo,[Jo,Ue]=bt,[Ye,Be]=dt,[At,We]=z({x:Zt.w>0,y:Zt.h>0}),qo=lt&&rt&&(At.x||At.y)||lt&&At.x&&!At.y||rt&&At.y&&!At.x,te=D||U||ot||Be||Ue||Go||mo||nt||at||q,Rt=Rr(At,it),[_o,yo]=F(Rt.k),[oe,yn]=V(v),Js=U||K||yn||We||v,[gn,wn]=Js?B(_(oe),v):X();return te&&(yo&&N(Rt.k),ct&&ut&&vo(n,ct(Rt,k,ut(Rt,Jo,Ye)))),R(!1),Ho(s,Lt,Vo,qo),Ho(r,Ne,Vo,qo),Z(o,{k:_o,Lt:{x:Xo.w,y:Xo.h},Vt:{x:Zt.w,y:Zt.h},rn:At,Tt:fr(gn,Zt)}),{en:yo,nn:Go,sn:mo,cn:wn||mo,pn:Js}}},en=t=>{const[o,e,s]=Jr(t),r={ln:{t:0,r:0,b:0,l:0},_n:!1,j:{[ts]:0,[os]:0,[qe]:0,[Qe]:0,[Xe]:0,[Je]:0,[Ge]:0},Lt:{x:0,y:0},Vt:{x:0,y:0},k:{x:Wt,y:Wt},rn:{x:!1,y:!1},Tt:Ms()},{vt:n,gt:l,L:i,Ot:a}=o,{P:d,T:c}=Et(),b=!d&&(c.x||c.y),m=[qr(o),tn(o,r),on(o,r)];return[e,g=>{const u={},A=b&&yt(l),x=A&&a();return Q(m,(I=>{Z(u,I(g,u)||{})})),Tt(l,A),x&&x(),i||Tt(n,0),u},r,o,s]},sn=(t,o,e,s,r)=>{let n=!1;const l=Ws(o,{}),[i,a,d,c,b]=en(t),[m,g,u]=Vr(c,d,l,(_=>{R({},_)})),[y,A,,x]=Gr(t,o,u,d,c,r),I=_=>xt(_).some((T=>!!_[T])),R=(_,T)=>{if(e())return!1;const{vn:O,Dt:j,At:S,hn:f}=_,h=O||{},M=!!j||!n,z={It:Ws(o,h,M),vn:h,Dt:M};if(f)return A(z),!1;const L=T||g(Z({},z,{At:S})),H=a(Z({},z,{fn:u,Zt:L}));A(Z({},z,{Zt:L,tn:H}));const F=I(L),V=I(H),B=F||V||!me(h)||M;return n=!0,B&&s(_,{Zt:L,tn:H}),B};return[()=>{const{an:_,gt:T,Ot:O}=c,j=yt(_),S=[m(),i(),y()],f=O();return Tt(T,j),f(),P(_t,S)},R,()=>({gn:u,bn:d}),{wn:c,yn:x},b]},He=new WeakMap,rn=(t,o)=>{He.set(t,o)},nn=t=>{He.delete(t)},Xs=t=>He.get(t),zt=(t,o,e)=>{const{nt:s}=Et(),r=Io(t),n=r?t:t.target,l=Xs(n);if(o&&!l){let i=!1;const a=[],d={},c=h=>{const M=ls(h),z=ho(_r);return z?z(M,!0):M},b=Z({},s(),c(o)),[m,g,u]=Ce(),[y,A,x]=Ce(e),I=(h,M)=>{x(h,M),u(h,M)},[R,_,T,O,j]=sn(t,b,(()=>i),(({vn:h,Dt:M},{Zt:z,tn:L})=>{const{dt:H,Ct:F,xt:V,Ht:B,Et:X,_t:W}=z,{nn:st,sn:N,en:p,cn:w}=L;I("updated",[f,{updateHints:{sizeChanged:!!H,directionChanged:!!F,heightIntrinsicChanged:!!V,overflowEdgeChanged:!!st,overflowAmountChanged:!!N,overflowStyleChanged:!!p,scrollCoordinatesChanged:!!w,contentMutation:!!B,hostMutation:!!X,appear:!!W},changedOptions:h||{},force:!!M}])}),(h=>I("scroll",[f,h]))),S=h=>{nn(n),_t(a),i=!0,I("destroyed",[f,h]),g(),A()},f={options(h,M){if(h){const z=M?s():{},L=Bs(b,Z(z,c(h)));me(L)||(Z(b,L),_({vn:L}))}return Z({},b)},on:y,off:(h,M)=>{h&&M&&A(h,M)},state(){const{gn:h,bn:M}=T(),{F:z}=h,{Lt:L,Vt:H,k:F,rn:V,ln:B,_n:X,Tt:W}=M;return Z({},{overflowEdge:L,overflowAmount:H,overflowStyle:F,hasOverflow:V,scrollCoordinates:{start:W.D,end:W.M},padding:B,paddingAbsolute:X,directionRTL:z,destroyed:i})},elements(){const{vt:h,ht:M,ln:z,U:L,bt:H,gt:F,Qt:V}=O.wn,{Xt:B,Gt:X}=O.yn,W=N=>{const{kt:p,Pt:w,Ut:k}=N;return{scrollbar:k,track:w,handle:p}},st=N=>{const{Yt:p,Wt:w}=N,k=W(p[0]);return Z({},k,{clone:()=>{const v=W(w());return _({hn:!0}),v}})};return Z({},{target:h,host:M,padding:z||L,viewport:L,content:H||L,scrollOffsetElement:F,scrollEventElement:V,scrollbarHorizontal:st(B),scrollbarVertical:st(X)})},update:h=>_({Dt:h,At:!0}),destroy:P(S,!1),plugin:h=>d[xt(h)[0]]};return et(a,[j]),rn(n,f),Os(Es,zt,[f,m,d]),Kr(O.wn.wt,!r&&t.cancel)?(S(!0),f):(et(a,R()),I("initialized",[f]),f.update(),f)}return l};zt.plugin=t=>{const o=Mt(t),e=o?t:[t],s=e.map((r=>Os(r,zt)[0]));return mr(e),o?s:s[0]},zt.valid=t=>{const o=t&&t.elements,e=mt(o)&&o();return Do(e)&&!!Xs(e.target)},zt.env=()=>{const{N:t,T:o,P:e,G:s,st:r,et:n,Z:l,tt:i,nt:a,ot:d}=Et();return Z({},{scrollbarsSize:t,scrollbarsOverlaid:o,scrollbarsHiding:e,scrollTimeline:s,staticDefaultInitialization:r,staticDefaultOptions:n,getDefaultInitialization:l,setDefaultInitialization:i,getDefaultOptions:a,setDefaultOptions:d})},zt.nonce=Yr,zt.trustedTypePolicy=ur;var G=$("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const ln=()=>{if(typeof window>"u"){const d=()=>{};return[d,d]}let t,o;const e=window,s=typeof e.requestIdleCallback=="function",r=e.requestAnimationFrame,n=e.cancelAnimationFrame,l=s?e.requestIdleCallback:r,i=s?e.cancelIdleCallback:n,a=()=>{i(t),n(o)};return[(d,c)=>{a(),t=l(s?()=>{a(),o=r(d)}:d,typeof c=="object"?c:{timeout:2233})},a]},cn=t=>{const{options:o,events:e,defer:s}=t||{},[r,n]=(0,G.useMemo)(ln,[]),l=(0,G.useRef)(null),i=(0,G.useRef)(s),a=(0,G.useRef)(o),d=(0,G.useRef)(e);return(0,G.useEffect)(()=>{i.current=s},[s]),(0,G.useEffect)(()=>{const{current:c}=l;a.current=o,zt.valid(c)&&c.options(o||{},!0)},[o]),(0,G.useEffect)(()=>{const{current:c}=l;d.current=e,zt.valid(c)&&c.on(e||{},!0)},[e]),(0,G.useEffect)(()=>()=>{var c;n(),(c=l.current)==null||c.destroy()},[]),(0,G.useMemo)(()=>[c=>{const b=l.current;if(zt.valid(b))return;const m=i.current,g=a.current||{},u=d.current||{},y=()=>l.current=zt(c,g,u);m?r(y,m):y()},()=>l.current],[])},an=(t,o)=>{const{element:e="div",options:s,events:r,defer:n,children:l,...i}=t,a=e,d=(0,G.useRef)(null),c=(0,G.useRef)(null),[b,m]=cn({options:s,events:r,defer:n});return(0,G.useEffect)(()=>{const{current:g}=d,{current:u}=c;if(!g)return;const y=g;return b(e==="body"?{target:y,cancel:{body:null}}:{target:y,elements:{viewport:u,content:u}}),()=>{var A;return(A=m())==null?void 0:A.destroy()}},[b,e]),(0,G.useImperativeHandle)(o,()=>({osInstance:m,getElement:()=>d.current}),[]),G.createElement(a,{"data-overlayscrollbars-initialize":"",ref:d,...i},e==="body"?l:G.createElement("div",{"data-overlayscrollbars-contents":"",ref:c},l))},dn=(0,G.forwardRef)(an);var un=$("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");const bn={S:"s",M:"m"},pn={Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"},vn={None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"},Zo={Bottom:"bottom",Right:"right"},hn=100,Gs=2;var Ko=$("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"),lo={};lo.styleTagTransform=ae(),lo.setAttributes=ao(),lo.insert=co().bind(null,"head"),lo.domAPI=wt(),lo.insertStyleElement=ce();var Nn=Ot()(Ko.A,lo);const fn=Ko.A&&Ko.A.locals?Ko.A.locals:void 0;var mn=function(t,o){var e={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(e[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)o.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(e[s[r]]=t[s[r]]);return e};const Pn=zt.nonce,_n=(0,G.forwardRef)(function(o,e){var{children:s,className:r,onScroll:n,onInitialized:l,size:i=bn.M,resize:a=vn.None,clickScrolling:d=!0,barHideStrategy:c=pn.Leave,autoscrollTo:b,paddingAbsolute:m,untouchableScrollbars:g=!1}=o,u=mn(o,["children","className","onScroll","onInitialized","size","resize","clickScrolling","barHideStrategy","autoscrollTo","paddingAbsolute","untouchableScrollbars"]);const y=(0,G.useRef)(null),[A,x]=(0,G.useState)(!1),I=(0,G.useCallback)((S=y.current)=>S==null?void 0:S.osInstance(),[y]);(0,G.useImperativeHandle)(e,()=>{var S,f,h;return(h=(f=(S=y.current)===null||S===void 0?void 0:S.osInstance())===null||f===void 0?void 0:f.elements().viewport)!==null&&h!==void 0?h:null});const R=(0,G.useRef)({scrolledToBottom:!1,scrolledToRight:!1}),_=(0,G.useCallback)(S=>{const f=I(S);if(f){const{viewport:h}=f.elements(),M=h.scrollHeight-(h.offsetHeight+h.scrollTop),z=h.scrollWidth-(h.offsetWidth+h.scrollLeft),L=h.scrollHeight>h.offsetHeight,H=h.scrollWidth>h.offsetWidth;R.current.scrolledToBottom=M<Gs||!L,R.current.scrolledToRight=z<Gs||!H}},[I]);(0,un.N)(()=>{if(!b){l==null||l();return}const S=I();if(S&&A){_();const{content:f}=S.elements();b===Zo.Bottom&&f.scroll(0,f.scrollHeight),b===Zo.Right&&f.scroll(f.scrollWidth,0)}l==null||l()},[I,A,_]);const T=(0,G.useCallback)(()=>{x(!0)},[]),O=(0,G.useCallback)(S=>{n==null||n(S),b&&_()},[n,_]),j=(0,G.useCallback)(()=>{var S;if(!b)return;const f=(S=I())===null||S===void 0?void 0:S.elements();f!=null&&f.content&&(R.current.scrolledToBottom&&b===Zo.Bottom&&(f==null||f.content.scroll(0,f==null?void 0:f.content.scrollHeight)),R.current.scrolledToRight&&b===Zo.Right&&(f==null||f.content.scroll(f==null?void 0:f.content.scrollWidth,0)))},[I,b]);return(0,Ht.jsx)(dn,Object.assign({},u,{ref:y,"data-size":i,"data-untouchable-scrollbars":g||void 0,className:sr()(r,fn.scroll,"osThemeSnack"),style:{resize:a},options:{paddingAbsolute:m,scrollbars:{autoHide:c,autoHideDelay:hn,clickScroll:d}},events:{initialized:T,scroll:(S,f)=>{O(f)},updated:j},children:b?A&&s:s}))})}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css":((Kt,$t,$)=>{$.d($t,{A:()=>le});var Ht=$("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),Ut=$.n(Ht),Ot=$("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),Yt=$.n(Ot),wt=$("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/getUrl.js"),Bt=$.n(wt),co=new URL($("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),$.b),go=Yt()(Ut()),ao=Bt()(co);go.push([Kt.id,`@charset "UTF-8";
.osThemeSnack .os-scrollbar{
  padding:0;
}

.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical > .os-scrollbar-track{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  pointer-events:none;
}

.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal > .os-scrollbar-track{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  pointer-events:none;
}

.osThemeSnack[data-size=s] > .os-scrollbar-vertical{
  width:var(--size-scroll-track-s, 8px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=s] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  width:var(--size-scroll-slider-s, 4px);
  border-radius:var(--radius-scroll-slider-s, 2px);
}

.osThemeSnack[data-size=s] > .os-scrollbar-horizontal{
  height:var(--size-scroll-track-s, 8px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=s] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  height:var(--size-scroll-slider-s, 4px);
  border-radius:var(--radius-scroll-slider-s, 2px);
}

.osThemeSnack[data-size=s].os-host-resize-disabled > .os-scrollbar-horizontal{
  right:var(--size-scroll-track-s, 8px);
}

.osThemeSnack[data-size=s].os-host-resize-disabled.os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-track-s, 8px);
}

.osThemeSnack[data-size=s].os-host-resize-disabled > .os-scrollbar-vertical{
  bottom:var(--size-scroll-track-s, 8px);
}

.osThemeSnack[data-size=s] > .os-scrollbar-horizontal{
  right:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=s].os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=s] > .os-scrollbar-vertical{
  bottom:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-vertical{
  width:var(--size-scroll-track-m, 16px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=m] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  width:var(--size-scroll-slider-m, 6px);
  border-radius:var(--radius-scroll-slider-m, 4px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-horizontal{
  height:var(--size-scroll-track-m, 16px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=m] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  height:var(--size-scroll-slider-m, 6px);
  border-radius:var(--radius-scroll-slider-m, 4px);
}

.osThemeSnack[data-size=m].os-host-resize-disabled > .os-scrollbar-horizontal{
  right:var(--size-scroll-track-m, 16px);
}

.osThemeSnack[data-size=m].os-host-resize-disabled.os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-track-m, 16px);
}

.osThemeSnack[data-size=m].os-host-resize-disabled > .os-scrollbar-vertical{
  bottom:var(--size-scroll-track-m, 16px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-horizontal{
  right:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=m].os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-vertical{
  bottom:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  opacity:var(--opacity-a032, 0.32);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle.active, .osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle:hover{
  opacity:var(--opacity-a064, 0.64);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}

.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  opacity:var(--opacity-a032, 0.32);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle.active, .osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle:hover{
  opacity:var(--opacity-a064, 0.64);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}

.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  left:50%;
  translate:-50%;
}
.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle::before{
  right:-12px;
  left:-12px;
}

.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  top:50%;
  translate:0 -50%;
}
.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle::before{
  top:-12px;
  bottom:-12px;
}

.osThemeSnack > .os-scrollbar-corner{
  --bg-icon-mask:url(${ao});
  width:var(--size-scroll-button-resize, 16px);
  height:var(--size-scroll-button-resize, 16px);
  z-index:0;
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
  background-image:unset;
  -webkit-mask-image:var(--bg-icon-mask);
  mask-image:var(--bg-icon-mask);
}
.osThemeSnack > .os-scrollbar-corner:hover{
  background-color:var(--sys-neutral-text-support, #6d707f);
}

.os-dragging .osThemeSnack > .os-scrollbar-corner:hover{
  background-color:var(--sys-primary-accent-default, #389f74);
}

.osThemeSnack.os-host-resize-disabled > .os-scrollbar-corner{
  display:none;
}`,""]);const le=go}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css":((Kt,$t,$)=>{$.d($t,{A:()=>Bt});var Ht=$("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),Ut=$.n(Ht),Ot=$("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),Yt=$.n(Ot),wt=Yt()(Ut());wt.push([Kt.id,`.scroll--F6lqE{
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
}`,""]),wt.locals={scroll:"scroll--F6lqE"};const Bt=wt}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css":((Kt,$t,$)=>{$.d($t,{A:()=>Bt});var Ht=$("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),Ut=$.n(Ht),Ot=$("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),Yt=$.n(Ot),wt=Yt()(Ut());wt.push([Kt.id,`/*! 
 * OverlayScrollbars
 * Version: 2.11.1
 * 
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 * 
 * Released under the MIT license.
 */
.os-size-observer,
.os-size-observer-listener {
  scroll-behavior: auto !important;
  direction: inherit;
  pointer-events: none;
  overflow: hidden;
  visibility: hidden;
  box-sizing: border-box;
}

.os-size-observer,
.os-size-observer-listener,
.os-size-observer-listener-item,
.os-size-observer-listener-item-final {
  writing-mode: horizontal-tb;
  position: absolute;
  left: 0;
  top: 0;
}

.os-size-observer {
  z-index: -1;
  contain: strict;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: inherit;
  border: inherit;
  box-sizing: inherit;
  margin: -133px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale(0.1);
}
.os-size-observer::before {
  content: "";
  flex: none;
  box-sizing: inherit;
  padding: 10px;
  width: 10px;
  height: 10px;
}

.os-size-observer-appear {
  animation: os-size-observer-appear-animation 1ms forwards;
}

.os-size-observer-listener {
  box-sizing: border-box;
  position: relative;
  flex: auto;
  padding: inherit;
  border: inherit;
  margin: -133px;
  transform: scale(calc(1 / 0.1));
}
.os-size-observer-listener.ltr {
  margin-right: -266px;
  margin-left: 0;
}
.os-size-observer-listener.rtl {
  margin-left: -266px;
  margin-right: 0;
}
.os-size-observer-listener:empty::before {
  content: "";
  width: 100%;
  height: 100%;
}
.os-size-observer-listener:empty::before, .os-size-observer-listener > .os-size-observer-listener-item {
  display: block;
  position: relative;
  padding: inherit;
  border: inherit;
  box-sizing: content-box;
  flex: auto;
}

.os-size-observer-listener-scroll {
  box-sizing: border-box;
  display: flex;
}

.os-size-observer-listener-item {
  right: 0;
  bottom: 0;
  overflow: hidden;
  direction: ltr;
  flex: none;
}

.os-size-observer-listener-item-final {
  transition: none;
}

@keyframes os-size-observer-appear-animation {
  from {
    cursor: auto;
  }
  to {
    cursor: none;
  }
}
.os-trinsic-observer {
  flex: none;
  box-sizing: border-box;
  position: relative;
  max-width: 0px;
  max-height: 1px;
  padding: 0;
  margin: 0;
  border: none;
  overflow: hidden;
  z-index: -1;
  height: 0;
  top: calc(100% + 1px);
  contain: strict;
}
.os-trinsic-observer:not(:empty) {
  height: calc(100% + 1px);
  top: -1px;
}
.os-trinsic-observer:not(:empty) > .os-size-observer {
  width: 1000%;
  height: 1000%;
  min-height: 1px;
  min-width: 1px;
}

/**
 * hide native scrollbars
 * changes to this styles need to be reflected in the environment styles to correctly detect scrollbar hiding
 */
[data-overlayscrollbars-initialize],
[data-overlayscrollbars-viewport~=scrollbarHidden] {
  scrollbar-width: none !important;
}

[data-overlayscrollbars-initialize]::-webkit-scrollbar,
[data-overlayscrollbars-initialize]::-webkit-scrollbar-corner,
[data-overlayscrollbars-viewport~=scrollbarHidden]::-webkit-scrollbar,
[data-overlayscrollbars-viewport~=scrollbarHidden]::-webkit-scrollbar-corner {
  -webkit-appearance: none !important;
          appearance: none !important;
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}

/**
 * elements wont suddenly clip after initialization is done
 */
[data-overlayscrollbars-initialize]:not([data-overlayscrollbars]):not(html):not(body) {
  overflow: auto;
}

/**
 * applied to body 
 */
html[data-overlayscrollbars-body] {
  overflow: hidden;
}

html[data-overlayscrollbars-body],
html[data-overlayscrollbars-body] > body {
  width: 100%;
  height: 100%;
  margin: 0;
}

html[data-overlayscrollbars-body] > body {
  overflow: visible;
  margin: 0;
}

/**
 * structure setup 
 */
[data-overlayscrollbars] {
  position: relative;
}

[data-overlayscrollbars~=host],
[data-overlayscrollbars-padding] {
  display: flex;
  align-items: stretch !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  scroll-behavior: auto !important;
}

[data-overlayscrollbars-padding],
[data-overlayscrollbars-viewport]:not([data-overlayscrollbars]) {
  box-sizing: inherit;
  position: relative;
  flex: auto !important;
  height: auto;
  width: 100%;
  min-width: 0;
  padding: 0;
  margin: 0;
  border: none;
  z-index: 0;
}

[data-overlayscrollbars-viewport]:not([data-overlayscrollbars]) {
  --os-vaw: 0;
  --os-vah: 0;
  outline: none;
}
[data-overlayscrollbars-viewport]:not([data-overlayscrollbars]):focus {
  outline: none;
}
[data-overlayscrollbars-viewport][data-overlayscrollbars-viewport~=arrange]::before {
  content: "";
  position: absolute;
  pointer-events: none;
  z-index: -1;
  min-width: 1px;
  min-height: 1px;
  width: var(--os-vaw);
  height: var(--os-vah);
}

[data-overlayscrollbars],
[data-overlayscrollbars-padding],
[data-overlayscrollbars-viewport] {
  overflow: hidden !important;
}

[data-overlayscrollbars~=noClipping],
[data-overlayscrollbars-padding~=noClipping] {
  overflow: visible !important;
}

[data-overlayscrollbars-viewport~=measuring] {
  overflow: hidden !important;
  scroll-behavior: auto !important;
  scroll-snap-type: none !important;
}

[data-overlayscrollbars-viewport~=overflowXVisible]:not([data-overlayscrollbars-viewport~=measuring]) {
  overflow-x: visible !important;
}

[data-overlayscrollbars-viewport~=overflowXHidden] {
  overflow-x: hidden !important;
}

[data-overlayscrollbars-viewport~=overflowXScroll] {
  overflow-x: scroll !important;
}

[data-overlayscrollbars-viewport~=overflowYVisible]:not([data-overlayscrollbars-viewport~=measuring]) {
  overflow-y: visible !important;
}

[data-overlayscrollbars-viewport~=overflowYHidden] {
  overflow-y: hidden !important;
}

[data-overlayscrollbars-viewport~=overflowYScroll] {
  overflow-y: scroll !important;
}

[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId) {
  font-size: 0 !important;
  line-height: 0 !important;
}

[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId)::before,
[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId)::after,
[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId) > * {
  display: none !important;
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border-width: 0 !important;
}

[data-overlayscrollbars-viewport~=scrolling] {
  scroll-behavior: auto !important;
  scroll-snap-type: none !important;
}

[data-overlayscrollbars-content] {
  box-sizing: inherit;
}

/**
 * Display contents to bridge any flickering during deferred initialization.
 */
[data-overlayscrollbars-contents]:not(#osFakeId):not([data-overlayscrollbars-padding]):not([data-overlayscrollbars-viewport]):not([data-overlayscrollbars-content]) {
  display: contents;
}

/**
 * optional & experimental grid mode
 */
[data-overlayscrollbars-grid],
[data-overlayscrollbars-grid] [data-overlayscrollbars-padding] {
  display: grid;
  grid-template: 1fr/1fr;
}

[data-overlayscrollbars-grid] > [data-overlayscrollbars-padding],
[data-overlayscrollbars-grid] > [data-overlayscrollbars-viewport],
[data-overlayscrollbars-grid] > [data-overlayscrollbars-padding] > [data-overlayscrollbars-viewport] {
  height: auto !important;
  width: auto !important;
}

@property --os-scroll-percent {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
@property --os-viewport-percent {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
.os-scrollbar {
  --os-viewport-percent: 0;
  --os-scroll-percent: 0;
  --os-scroll-direction: 0;
  --os-scroll-percent-directional: calc(
    var(--os-scroll-percent) - (var(--os-scroll-percent) + (1 - var(--os-scroll-percent)) * -1) *
      var(--os-scroll-direction)
  );
}

.os-scrollbar {
  contain: size layout;
  contain: size layout style;
  transition: opacity 0.15s, visibility 0.15s, top 0.15s, right 0.15s, bottom 0.15s, left 0.15s;
  pointer-events: none;
  position: absolute;
  opacity: 0;
  visibility: hidden;
}

body > .os-scrollbar {
  position: fixed;
  z-index: 99999;
}

.os-scrollbar-transitionless {
  transition: none !important;
}

.os-scrollbar-track {
  position: relative;
  padding: 0 !important;
  border: none !important;
}

.os-scrollbar-handle {
  position: absolute;
}

.os-scrollbar-track,
.os-scrollbar-handle {
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.os-scrollbar.os-scrollbar-track-interactive .os-scrollbar-track,
.os-scrollbar.os-scrollbar-handle-interactive .os-scrollbar-handle {
  pointer-events: auto;
  touch-action: none;
}

.os-scrollbar-horizontal {
  bottom: 0;
  left: 0;
}

.os-scrollbar-vertical {
  top: 0;
  right: 0;
}

.os-scrollbar-rtl.os-scrollbar-horizontal {
  right: 0;
}

.os-scrollbar-rtl.os-scrollbar-vertical {
  right: auto;
  left: 0;
}

.os-scrollbar-visible {
  opacity: 1;
  visibility: visible;
}

.os-scrollbar-auto-hide.os-scrollbar-auto-hide-hidden {
  opacity: 0;
  visibility: hidden;
}

.os-scrollbar-interaction.os-scrollbar-visible {
  opacity: 1;
  visibility: visible;
}

.os-scrollbar-unusable,
.os-scrollbar-unusable *,
.os-scrollbar-wheel,
.os-scrollbar-wheel * {
  pointer-events: none !important;
}

.os-scrollbar-unusable .os-scrollbar-handle {
  opacity: 0 !important;
  transition: none !important;
}

.os-scrollbar-horizontal .os-scrollbar-handle {
  bottom: 0;
  left: calc(var(--os-scroll-percent-directional) * 100%);
  transform: translateX(calc(var(--os-scroll-percent-directional) * -100%));
  width: calc(var(--os-viewport-percent) * 100%);
}

.os-scrollbar-vertical .os-scrollbar-handle {
  right: 0;
  top: calc(var(--os-scroll-percent-directional) * 100%);
  transform: translateY(calc(var(--os-scroll-percent-directional) * -100%));
  height: calc(var(--os-viewport-percent) * 100%);
}

@supports (container-type: size) {
  .os-scrollbar-track {
    container-type: size;
  }
  .os-scrollbar-horizontal .os-scrollbar-handle {
    left: auto;
    transform: translateX(calc(var(--os-scroll-percent-directional) * 100cqw + var(--os-scroll-percent-directional) * -100%));
  }
  .os-scrollbar-vertical .os-scrollbar-handle {
    top: auto;
    transform: translateY(calc(var(--os-scroll-percent-directional) * 100cqh + var(--os-scroll-percent-directional) * -100%));
  }
  .os-scrollbar-rtl.os-scrollbar-horizontal .os-scrollbar-handle {
    right: auto;
    left: 0;
  }
}
.os-scrollbar-rtl.os-scrollbar-vertical .os-scrollbar-handle {
  right: auto;
  left: 0;
}

.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless,
.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless.os-scrollbar-rtl {
  left: 0;
  right: 0;
}

.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless,
.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless.os-scrollbar-rtl {
  top: 0;
  bottom: 0;
}

@media print {
  .os-scrollbar {
    display: none;
  }
}
.os-scrollbar {
  --os-size: 0;
  --os-padding-perpendicular: 0;
  --os-padding-axis: 0;
  --os-track-border-radius: 0;
  --os-track-bg: none;
  --os-track-bg-hover: none;
  --os-track-bg-active: none;
  --os-track-border: none;
  --os-track-border-hover: none;
  --os-track-border-active: none;
  --os-handle-border-radius: 0;
  --os-handle-bg: none;
  --os-handle-bg-hover: none;
  --os-handle-bg-active: none;
  --os-handle-border: none;
  --os-handle-border-hover: none;
  --os-handle-border-active: none;
  --os-handle-min-size: 33px;
  --os-handle-max-size: none;
  --os-handle-perpendicular-size: 100%;
  --os-handle-perpendicular-size-hover: 100%;
  --os-handle-perpendicular-size-active: 100%;
  --os-handle-interactive-area-offset: 0;
}

.os-scrollbar-track {
  border: var(--os-track-border);
  border-radius: var(--os-track-border-radius);
  background: var(--os-track-bg);
  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s;
}
.os-scrollbar-track:hover {
  border: var(--os-track-border-hover);
  background: var(--os-track-bg-hover);
}
.os-scrollbar-track:active {
  border: var(--os-track-border-active);
  background: var(--os-track-bg-active);
}

.os-scrollbar-handle {
  border: var(--os-handle-border);
  border-radius: var(--os-handle-border-radius);
  background: var(--os-handle-bg);
}
.os-scrollbar-handle:hover {
  border: var(--os-handle-border-hover);
  background: var(--os-handle-bg-hover);
}
.os-scrollbar-handle:active {
  border: var(--os-handle-border-active);
  background: var(--os-handle-bg-active);
}

.os-scrollbar-track:before,
.os-scrollbar-handle:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: block;
}

.os-scrollbar-horizontal {
  padding: var(--os-padding-perpendicular) var(--os-padding-axis);
  right: var(--os-size);
  height: var(--os-size);
}
.os-scrollbar-horizontal.os-scrollbar-rtl {
  left: var(--os-size);
  right: 0;
}
.os-scrollbar-horizontal .os-scrollbar-track:before {
  top: calc(var(--os-padding-perpendicular) * -1);
  bottom: calc(var(--os-padding-perpendicular) * -1);
}
.os-scrollbar-horizontal .os-scrollbar-handle {
  min-width: var(--os-handle-min-size);
  max-width: var(--os-handle-max-size);
  height: var(--os-handle-perpendicular-size);
  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s, height 0.15s;
}
.os-scrollbar-horizontal .os-scrollbar-handle:before {
  top: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);
  bottom: calc(var(--os-padding-perpendicular) * -1);
}
.os-scrollbar-horizontal:hover .os-scrollbar-handle {
  height: var(--os-handle-perpendicular-size-hover);
}
.os-scrollbar-horizontal:active .os-scrollbar-handle {
  height: var(--os-handle-perpendicular-size-active);
}

.os-scrollbar-vertical {
  padding: var(--os-padding-axis) var(--os-padding-perpendicular);
  bottom: var(--os-size);
  width: var(--os-size);
}
.os-scrollbar-vertical .os-scrollbar-track:before {
  left: calc(var(--os-padding-perpendicular) * -1);
  right: calc(var(--os-padding-perpendicular) * -1);
}
.os-scrollbar-vertical .os-scrollbar-handle {
  min-height: var(--os-handle-min-size);
  max-height: var(--os-handle-max-size);
  width: var(--os-handle-perpendicular-size);
  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s, width 0.15s;
}
.os-scrollbar-vertical .os-scrollbar-handle:before {
  left: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);
  right: calc(var(--os-padding-perpendicular) * -1);
}
.os-scrollbar-vertical.os-scrollbar-rtl .os-scrollbar-handle:before {
  right: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);
  left: calc(var(--os-padding-perpendicular) * -1);
}
.os-scrollbar-vertical:hover .os-scrollbar-handle {
  width: var(--os-handle-perpendicular-size-hover);
}
.os-scrollbar-vertical:active .os-scrollbar-handle {
  width: var(--os-handle-perpendicular-size-active);
}

/* NONE THEME: */
[data-overlayscrollbars-viewport~=measuring] > .os-scrollbar,
.os-theme-none.os-scrollbar {
  display: none !important;
}

/* DARK & LIGHT THEME: */
.os-theme-dark,
.os-theme-light {
  box-sizing: border-box;
  --os-size: 10px;
  --os-padding-perpendicular: 2px;
  --os-padding-axis: 2px;
  --os-track-border-radius: 10px;
  --os-handle-interactive-area-offset: 4px;
  --os-handle-border-radius: 10px;
}

.os-theme-dark {
  --os-handle-bg: rgba(0, 0, 0, 0.44);
  --os-handle-bg-hover: rgba(0, 0, 0, 0.55);
  --os-handle-bg-active: rgba(0, 0, 0, 0.66);
}

.os-theme-light {
  --os-handle-bg: rgba(255, 255, 255, 0.44);
  --os-handle-bg-hover: rgba(255, 255, 255, 0.55);
  --os-handle-bg-active: rgba(255, 255, 255, 0.66);
}`,""]);const Bt=wt})}]);})();
