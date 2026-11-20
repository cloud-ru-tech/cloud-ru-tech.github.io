"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[0],{"./node_modules/.pnpm/@snack-uikit+scroll@1.0.1_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"(io,qt,W){W.d(qt,{O:()=>Pn});var to=W("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),oo=W("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Pt=W.n(oo),eo=W("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),wt=W.n(eo),so=W("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),So=W.n(so),jo=W("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Mo=W.n(jo),fe=W("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),he=W.n(fe),pr=W("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),me=W.n(pr),No=W("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/overlayscrollbars@2.17.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),uo={};uo.styleTagTransform=me(),uo.setAttributes=Mo(),uo.insert=So().bind(null,"head"),uo.domAPI=wt(),uo.insertStyleElement=he();var $n=Pt()(No.A,uo);const Un=No.A&&No.A.locals?No.A.locals:void 0;var Lo=W("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@1.0.1_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"),po={};po.styleTagTransform=me(),po.setAttributes=Mo(),po.insert=So().bind(null,"head"),po.domAPI=wt(),po.insertStyleElement=he();var Yn=Pt()(Lo.A,po);const Bn=Lo.A&&Lo.A.locals?Lo.A.locals:void 0;var br=W("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),vr=W.n(br);/*!
 * OverlayScrollbars
 * Version: 2.17.1
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */const _t=(t,o)=>{const{o:e,i:s,u:r}=t;let n=e,l;const d=(a,u)=>{const _=n,h=a,p=u||(s?!s(_,h):_!==h);return(p||r)&&(n=h,l=_),[n,p,l]};return[o?a=>d(o(n,l),a):d,a=>[n,!!a,l]]},ft=typeof window!="undefined"&&typeof HTMLElement!="undefined"&&!!window.document?window:{},Po=Math.max,fr=Math.min,_e=Math.round,Ft=Math.abs,ts=Math.sign,ye=ft.cancelAnimationFrame,Ro=ft.requestAnimationFrame,os=ft.setTimeout,es=ft.clearTimeout,ko=t=>typeof ft[t]!="undefined"?ft[t]:void 0,hr=ko("MutationObserver"),ss=ko("IntersectionObserver"),bo=ko("ResizeObserver"),rs=ko("WeakRef"),To=ko("ScrollTimeline"),ge=t=>t===void 0,Ho=t=>t===null,Vt=t=>typeof t=="number",vo=t=>typeof t=="string",$o=t=>typeof t=="boolean",xt=t=>typeof t=="function",zt=t=>Array.isArray(t),Uo=t=>typeof t=="object"&&!zt(t)&&!Ho(t),we=t=>{const o=!!t&&t.length,e=Vt(o)&&o>-1&&o%1==0;return zt(t)||!xt(t)&&e?o>0&&Uo(t)?o-1 in t:!0:!1},Eo=t=>!!t&&t.constructor===Object,Oo=t=>t instanceof HTMLElement,Yo=t=>t instanceof Element,ns=()=>performance.now(),Fn=(t,o,e,s,r)=>{let n=0;const l=ns(),d=Po(0,e),c=i=>{const a=ns(),_=a-l>=d,h=i?1:1-(Po(0,l+d-a)/d||0),p=(o-t)*(xt(r)?r(h,h*d,0,1,d):h)+t,g=_||h===1;s(p,h,g),n=g?0:Ro((()=>c()))};return c(),i=>{ye(n),i&&c(i)}};function tt(t,o){if(we(t))for(let e=0;e<t.length&&o(t[e],e,t)!==!1;e++);else t&&tt(Object.keys(t),(e=>o(t[e],e,t)));return t}const ls=(t,o)=>t.indexOf(o)>=0,Xt=(t,o)=>t.concat(o),rt=(t,o,e)=>(!vo(o)&&we(o)?Array.prototype.push.apply(t,o):t.push(o),t),Zt=t=>Array.from(t||[]),Bo=t=>zt(t)?t:!vo(t)&&we(t)?Zt(t):[t],Wo=t=>!!t&&!t.length,Fo=t=>Zt(new Set(t)),pt=(t,o,e)=>{tt(t,r=>r?r.apply(void 0,o||[]):!0),e||(t.length=0)},cs="paddingTop",as="paddingRight",is="paddingLeft",ds="paddingBottom",us="marginLeft",ps="marginRight",bs="marginBottom",xe="overflowX",ze="overflowY",Vo="width",Xo="height",Rt="visible",Tt="hidden",ro="scroll",mr=t=>{const o=String(t||"");return o?o[0].toUpperCase()+o.slice(1):""},Zo=(t,o,e,s)=>{if(t&&o){let r=!0;return tt(e,(n=>{const l=t[n],d=o[n];l!==d&&(r=!1)})),r}return!1},vs=(t,o)=>Zo(t,o,["w","h"]),Ko=(t,o)=>Zo(t,o,["x","y"]),_r=(t,o)=>Zo(t,o,["t","r","b","l"]),j=(t,...o)=>t.bind(0,...o),Kt=t=>{let o;const e=t?os:Ro,s=t?es:ye;return[r=>{s(o),o=e((()=>r()),xt(t)?t():t)},()=>s(o)]},fs=t=>{const o=xt(t)?t():t;if(Vt(o)){const e=o?os:Ro,s=o?es:ye;return r=>{const n=e((()=>r()),o);return()=>{s(n)}}}return o&&o._},hs=(t,o)=>{const{p:e,v:s,S:r,m:n}=o||{};let l,d,c,i;const a=()=>{d&&d(),l&&l(),i=d=l=c=void 0},u=function(y){a(),t.apply(this,y)},_=g=>n&&c?n(c,g):g,h=()=>{d&&c&&u(_(c)||c)},p=function(){const y=Zt(arguments),O=fs(e);if(O){const L=typeof r=="function"?r():r,Y=fs(s),R=_(y)||y,f=u.bind(0,R);d&&d(),L&&!i?(f(),i=!0,d=O((()=>i=void 0))):(d=O(f),Y&&!l&&(l=Y(h))),c=R}else u(y)};return p.O=h,p.C=a,p},ms=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),ht=t=>t?Object.keys(t):[],Z=(t,o,e,s,r,n,l)=>{const d=[o,e,s,r,n,l];return(typeof t!="object"||Ho(t))&&!xt(t)&&(t={}),tt(d,(c=>{tt(c,((i,a)=>{const u=c[a];if(t===u)return!0;const _=zt(u);if(u&&Eo(u)){const h=t[a];let p=h;_&&!zt(h)?p=[]:!_&&!Eo(h)&&(p={}),t[a]=Z(p,u)}else t[a]=_?u.slice():u}))})),t},_s=(t,o)=>tt(Z({},t),((e,s,r)=>{e===void 0?delete r[s]:e&&Eo(e)&&(r[s]=_s(e))})),Se=t=>!ht(t).length,fo=()=>{},ys=(t,o,e)=>Po(t,fr(o,e)),no=t=>Fo((zt(t)?t:(t||"").split(" ")).filter((o=>o))),Me=(t,o)=>t&&t.getAttribute(o),gs=(t,o)=>t&&t.hasAttribute(o),Ht=(t,o,e)=>{tt(no(o),(s=>{t&&t.setAttribute(s,String(e||""))}))},It=(t,o)=>{tt(no(o),(e=>t&&t.removeAttribute(e)))},Qo=(t,o)=>{const e=no(Me(t,o)),s=j(Ht,t,o),r=(n,l)=>{const d=new Set(e);return tt(no(n),(c=>{d[l](c)})),Zt(d).join(" ")};return{$:n=>s(r(n,"delete")),H:n=>s(r(n,"add")),D:n=>{const l=no(n);return l.reduce(((d,c)=>d&&e.includes(c)),l.length>0)}}},ws=(t,o,e)=>(Qo(t,o).$(e),j(ke,t,o,e)),ke=(t,o,e)=>(Qo(t,o).H(e),j(ws,t,o,e)),Go=(t,o,e,s)=>(s?ke:ws)(t,o,e),Te=(t,o,e)=>Qo(t,o).D(e),xs=t=>Qo(t,"class"),zs=(t,o)=>{xs(t).$(o)},Ee=(t,o)=>(xs(t).H(o),j(zs,t,o)),Ss=(t,o)=>{const e=o?Yo(o)&&o:document;return e?Zt(e.querySelectorAll(t)):[]},yr=(t,o)=>{const e=o?Yo(o)&&o:document;return e&&e.querySelector(t)},Oe=(t,o)=>Yo(t)&&t.matches(o),Ms=t=>Oe(t,"body"),Ae=t=>t?Zt(t.childNodes):[],Ao=t=>t&&t.parentElement,ho=(t,o)=>Yo(t)&&t.closest(o),Ie=t=>document.activeElement,gr=(t,o,e)=>{const s=ho(t,o),r=t&&yr(e,s),n=ho(r,o)===s;return s&&r?s===t||r===t||n&&ho(ho(t,e),o)!==s:!1},mo=t=>{tt(Bo(t),(o=>{const e=Ao(o);o&&e&&e.removeChild(o)}))},mt=(t,o)=>j(mo,t&&o&&tt(Bo(o),(e=>{e&&t.appendChild(e)})));let ks;const wr=()=>ks,xr=t=>{ks=t},_o=t=>{const o=document.createElement("div");return Ht(o,"class",t),o},Ts=t=>{const o=_o(),e=wr(),s=t.trim();return o.innerHTML=e?e.createHTML(s):s,tt(Ae(o),(r=>mo(r)))},Es=(t,o)=>t.getPropertyValue(o)||t[o]||"",Os=t=>{const o=t||0;return isFinite(o)?o:0},Jo=t=>Os(parseFloat(t||"")),Ce=t=>Math.round(t*1e4)/1e4,As=t=>`${Ce(Os(t))}px`;function lo(t,o){t&&o&&tt(o,((e,s)=>{try{const r=t.style,n=Ho(e)||$o(e)?"":Vt(e)?As(e):e;s.indexOf("--")===0?r.setProperty(s,n):r[s]=n}catch(r){}}))}function Ct(t,o,e){const s=vo(o);let r=s?"":{};if(t){const n=ft.getComputedStyle(t,e)||t.style;r=s?Es(n,o):Zt(o).reduce(((l,d)=>(l[d]=Es(n,d),l)),r)}return r}const Is=(t,o,e)=>{const s=o?`${o}-`:"",r=e?`-${e}`:"",n=`${s}top${r}`,l=`${s}right${r}`,d=`${s}bottom${r}`,c=`${s}left${r}`,i=Ct(t,[n,l,d,c]);return{t:Jo(i[n]),r:Jo(i[l]),b:Jo(i[d]),l:Jo(i[c])}},De=(t,o)=>`translate${Uo(t)?`(${t.x},${t.y})`:`${o?"X":"Y"}(${t})`}`,zr=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),Sr={w:0,h:0},qo=(t,o)=>o?{w:o[`${t}Width`],h:o[`${t}Height`]}:Sr,Mr=t=>qo("inner",t||ft),yo=j(qo,"offset"),Cs=j(qo,"client"),te=j(qo,"scroll"),je=t=>{const o=parseFloat(Ct(t,Vo))||0,e=parseFloat(Ct(t,Xo))||0;return{w:o-_e(o),h:e-_e(e)}},Ne=t=>t.getBoundingClientRect(),kr=t=>!!t&&zr(t),Le=t=>!!(t&&(t[Xo]||t[Vo])),Ds=(t,o)=>{const e=Le(t);return!Le(o)&&e},js=(t,o,e,s)=>{tt(no(o),(r=>{t&&t.removeEventListener(r,e,s)}))},st=(t,o,e,s)=>{var r;const n=(r=s&&s.I)!=null?r:!0,l=s&&s.k||!1,d=s&&s.A||!1,c={passive:n,capture:l};return j(pt,no(o).map((i=>{const a=d?u=>{js(t,i,a,l),e&&e(u)}:e;return t&&t.addEventListener(i,a,c),j(js,t,i,a,l)})))},Ns=t=>t.stopPropagation(),Pe=t=>t.preventDefault(),Ls=t=>Ns(t)||Pe(t),Re=t=>j(pt,Bo(t).map((o=>st(o,"focusin focusout focus blur",(e=>Ls(e)),{k:!0,I:!1})))),Dt=(t,o)=>{const{x:e,y:s}=Vt(o)?{x:o,y:o}:o||{};Vt(e)&&(t.scrollLeft=e),Vt(s)&&(t.scrollTop=s)},yt=t=>({x:t.scrollLeft,y:t.scrollTop}),Ps=()=>({T:{x:0,y:0},M:{x:0,y:0}}),Tr=(t,o)=>{const{T:e,M:s}=t,{w:r,h:n}=o,l=(u,_,h)=>{let p=ts(u)*h,g=ts(_)*h;if(p===g){const y=Ft(u),O=Ft(_);g=y>O?0:g,p=y<O?0:p}return p=p===g?0:p,[p+0,g+0]},[d,c]=l(e.x,s.x,r),[i,a]=l(e.y,s.y,n);return{T:{x:d,y:i},M:{x:c,y:a}}},He=({T:t,M:o})=>{const e=(s,r)=>s===0&&s<=r;return{x:e(t.x,o.x),y:e(t.y,o.y)}},Rs=({T:t,M:o},e)=>{const s=(r,n,l)=>ys(0,1,(r-l)/(r-n)||0);return{x:s(t.x,o.x,e.x),y:s(t.y,o.y,e.y)}},oe=t=>{t&&t.focus&&t.focus({preventScroll:!0,focusVisible:!1})},Hs=(t,o)=>{tt(Bo(o),t)},$e=t=>{const o=new Map,e=(n,l)=>{if(n){const d=o.get(n);Hs((c=>{d&&d[c?"delete":"clear"](c)}),l)}else o.forEach((d=>{d.clear()})),o.clear()},s=(n,l)=>{if(vo(n)){const i=o.get(n)||new Set;return o.set(n,i),Hs((a=>{xt(a)&&i.add(a)}),l),j(e,n,l)}$o(l)&&l&&e();const d=ht(n),c=[];return tt(d,(i=>{const a=n[i];a&&rt(c,s(i,a))})),j(pt,c)},r=(n,l)=>{tt(Zt(o.get(n)),(d=>{l&&!Wo(l)?d.apply(0,l):d()}))};return s(t||{}),[s,e,r]},$s={},Us={},Er=t=>{tt(t,(o=>tt(o,((e,s)=>{$s[s]=o[s]}))))},Ys=(t,o,e)=>ht(t).map((s=>{const{static:r,instance:n}=t[s],[l,d,c]=e||[],i=e?n:r;if(i){const a=e?i(l,d,o):i(o);return(c||Us)[s]=a}})),Or=(t,o)=>t[o],go=t=>Or(Us,t),Ar="__osOptionsValidationPlugin",wo="data-overlayscrollbars",ee="os-environment",se=`${ee}-scrollbar-hidden`,Ue=`${wo}-initialize`,re="noClipping",Bs=`${wo}-body`,Qt=wo,Ir="host",$t=`${wo}-viewport`,Cr=xe,Dr=ze,jr="arrange",Ws="measuring",Nr="scrolling",Fs="scrollbarHidden",Lr="noContent",Pr="noScrollbars",Rr="contentOverflow",Ye=`${wo}-padding`,Vs=`${wo}-content`,Be="os-size-observer",Hr=`${Be}-appear`,$r=`${Be}-listener`,Vn=null,Xn=null,Zn=null,Ur="os-trinsic-observer",Yr="os-theme-none",gt="os-scrollbar",Br=`${gt}-rtl`,Wr=`${gt}-horizontal`,Fr=`${gt}-vertical`,Xs=`${gt}-track`,We=`${gt}-handle`,Vr=`${gt}-visible`,Xr=`${gt}-cornerless`,Zs=`${gt}-interaction`,Ks=`${gt}-unusable`,Fe=`${gt}-auto-hide`,Zr=`${Fe}-hidden`,Qs=`${gt}-wheel`,Kr=`${Xs}-interactive`,Qr=`${We}-interactive`,Gr="__osSizeObserverPlugin",Kn=null,Jr=(t,o)=>{const{R:e}=o,[s,r]=t("showNativeOverlaidScrollbars");return[s&&e.x&&e.y,r]},xo=t=>t.indexOf(Rt)===0,qr=t=>t.replace(`${Rt}-`,""),Ve=(t,o)=>{if(t==="auto")return o?ro:Tt;const e=t||Tt;return[Tt,ro,Rt].includes(e)?e:Tt},tn=(t,o)=>{const{overflowX:e,overflowY:s}=Ct(t,[xe,ze]);return{x:Ve(e,o.x),y:Ve(s,o.y)}},Gs=(t,o)=>`${o?Cr:Dr}${mr(t)}`,Xe="__osScrollbarsHidingPlugin",Qn=null,on="__osClickScrollPlugin",Gn=null,Js=t=>JSON.stringify(t,((o,e)=>{if(xt(e))throw 0;return e})),qs=(t,o)=>t?`${o}`.split(".").reduce(((e,s)=>e&&ms(e,s)?e[s]:void 0),t):void 0,en=[0,33],tr=[33,99],or=[222,666,!0],sn={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:{mutation:en,resize:null,event:tr,env:or},attributes:null,ignoreMutation:null,flowDirectionStyles:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},er=(t,o)=>{const e={},s=Xt(ht(o),ht(t));return tt(s,(r=>{const n=t[r],l=o[r];if(Uo(n)&&Uo(l))Z(e[r]={},er(n,l)),Se(e[r])&&delete e[r];else if(ms(o,r)&&l!==n){let d=!0;if(zt(n)||zt(l))try{Js(n)===Js(l)&&(d=!1)}catch(c){}d&&(e[r]=l)}})),e},Ze=(t,o,e)=>s=>[qs(t,s),e||qs(o,s)!==void 0];let sr;const rn=()=>sr,nn=t=>{sr=t};let Ke;const ln=()=>{const t=(f,H,M)=>{mt(document.body,f),mt(document.body,f);const x=Cs(f),E=yo(f),w=je(H);return M&&mo(f),{x:E.h-x.h+w.h,y:E.w-x.w+w.w}},o=f=>{let H=!1;const M=Ee(f,se);try{H=Ct(f,"scrollbar-width")==="none"||Ct(f,"display","::-webkit-scrollbar")==="none"}catch(x){}return M(),H},e=f=>{const H=()=>f.ownerDocument.activeElement,M=H(),x=Re([f,M]);lo(f,{visibility:"visible"}),oe(f);const E=H()===f;return lo(f,{visibility:""}),f.blur(),Oo(M)&&M.focus(),x(),E},s=`.${ee}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${ee} div{width:200%;height:200%;margin:10px 0}.${se}{scrollbar-width:none!important}@supports not (scrollbar-width:none){.${se}::-webkit-scrollbar,.${se}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}}`,n=Ts(`<div class="${ee}"><div></div><style>${s}</style></div>`)[0],l=n.firstChild,d=n.lastChild,c=rn();c&&(d.nonce=c);const[i,,a]=$e(),[u,_]=_t({o:t(n,l),i:Ko},j(t,n,l,!0)),[h]=_(),p=o(n),g=e(n),y={x:h.x===0,y:h.y===0},O={elements:{host:null,padding:!p,viewport:f=>p&&Ms(f)&&f,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},L=Z({},sn),Y=j(Z,{},L),A=j(Z,{},O),R={N:h,R:y,U:p,G:g,K:!!To,Z:j(i,"r"),tt:A,nt:f=>Z(O,f)&&A(),ot:Y,st:f=>Z(L,f)&&Y(),et:Z({},O),ct:Z({},L)};if(It(n,"style"),mo(n),st(ft,"resize",(()=>{a("r",[])})),xt(ft.matchMedia)&&!p&&(!y.x||!y.y)){const f=H=>{const M=ft.matchMedia(`(resolution: ${ft.devicePixelRatio}dppx)`);st(M,"change",(()=>{H(),f(H)}),{A:!0})};f((()=>{const[H,M]=u();Z(R.N,H),a("r",[M])}))}return R},jt=()=>(Ke||(Ke=ln()),Ke),cn=t=>rs?new rs(t):{deref:()=>t},an=(t,o,e)=>st(t,o,(s=>e(s))),dn=(t,o,e)=>{const s=new WeakMap,r=new Set,n=c=>{const i=s.get(c);i&&(s.delete(c),r.delete(i[0]),pt(Object.values(i[1])))},l=()=>{r.forEach((c=>{const i=c.deref();i&&n(i)})),r.clear()},d=c=>{e&&(r.forEach((i=>{i.deref()||r.delete(i)})),tt(e,(i=>{const[a,u]=i||[],_=u&&a?(c||Ss)(a,t):[];tt(_,(h=>{if(!t.contains(h)){n(h);return}let p=s.get(h);p||(p=[cn(h),Object.create(null)],s.set(h,p),r.add(p[0]));const g=p[1];g[u]||(g[u]=an(h,u,o))}))})))};return d(),[l,d]},rr=(t,o,e,s)=>{let r=!1;const{rt:n,it:l,lt:d,ut:c,ft:i,_t:a}=s||{},[u,_]=dn(t,(()=>r&&e(!0)),d),h=n||[],p=l||[],g=Xt(h,p),y=(L,Y)=>{if(!Wo(Y)){const A=i||fo,R=a||fo,f=[],H=[];let M=!1,x=!1;if(tt(Y,(E=>{const{attributeName:w,target:T,type:B,oldValue:k,addedNodes:N,removedNodes:X}=E,K=B==="attributes",q=B==="childList",G=t===T,Q=K&&w,P=Q&&Me(T,w||""),I=vo(P)?P:null,b=Q&&k!==I,S=ls(p,w)&&b;if(o&&(q||!G)){const C=K&&b,v=C&&c&&Oe(T,c),z=(v?!A(T,w,k,I):!K||C)&&!R(E,!!v,t,s);tt(N,(D=>rt(f,D))),tt(X,(D=>rt(f,D))),x=x||z}!o&&G&&b&&!A(T,w,k,I)&&(rt(H,w),M=M||S)})),_((E=>Fo(f).reduce(((w,T)=>(rt(w,Ss(E,T)),Oe(T,E)?rt(w,T):w)),[]))),o)return!L&&x&&e(!1),[!1];if(!Wo(H)||M){const E=[Fo(H),M];return L||e.apply(0,E),E}}},O=new hr(j(y,!1));return[()=>(O.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:g,subtree:o,childList:o,characterData:o}),r=!0,()=>{r&&(u(),O.disconnect(),r=!1)}),()=>{if(r)return y(!0,O.takeRecords())}]};let co=null;const nr=(t,o,e)=>{const{dt:s}=e||{},r=go(Gr),[n]=_t({o:!1,u:!0});return()=>{const l=[],c=Ts(`<div class="${Be}"><div class="${$r}"></div></div>`)[0],i=c.firstChild,a=u=>{const _=zt(u)&&!Wo(u);let h=!1,p=!1;if(_){const g=u[0],[y,,O]=n(g.contentRect),L=Le(y);p=Ds(y,O),h=!p&&!L}else p=u===!0;h||o({vt:!0,dt:p})};if(bo){if(!$o(co)){const p=new bo(fo);p.observe(t,{get box(){co=!0}}),co=co||!1,p.disconnect()}const u=hs(a,{p:0,v:0}),_=p=>u(p),h=new bo(_);if(h.observe(co?t:i),rt(l,[()=>{h.disconnect(),u.C()},!co&&mt(t,c)]),co){const p=new bo(_);p.observe(t,{box:"border-box"}),rt(l,(()=>p.disconnect()))}}else if(r){const[u,_]=r(i,a,s);rt(l,Xt([Ee(c,Hr),st(c,"animationstart",u),mt(t,c)],_))}else return fo;return j(pt,l)}},un=(t,o)=>{let e;const s=c=>c.h===0||c.isIntersecting||c.intersectionRatio>0,r=_o(Ur),[n]=_t({o:!1}),l=(c,i)=>{if(c){const a=n(s(c)),[,u]=a;return u&&!i&&o(a)&&[a]}},d=(c,i)=>l(i.pop(),c);return[()=>{const c=[];if(ss)e=new ss(j(d,!1),{root:t}),e.observe(r),rt(c,(()=>{e.disconnect()}));else{const i=()=>{const a=yo(r);l(a)};rt(c,nr(r,i)()),i()}return j(pt,rt(c,mt(t,r)))},()=>e&&d(!0,e.takeRecords())]},pn=(t,o,e,s)=>{let r,n,l,d,c,i,a,u;const _=`[${Qt}]`,h=`[${$t}]`,p=["id","class","style","open","wrap","cols","rows"],{gt:g,ht:y,P:O,bt:L,yt:Y,L:A,wt:R,St:f,Ot:H,Ct:M}=t,x=m=>Ct(m,"direction")==="rtl",E=()=>{let m,z,D;const $=hs(s,{p:()=>m,v:()=>z,S:()=>D,m(V,J){const[lt]=V,[ct]=J;return[Xt(ht(lt),ht(ct)).reduce(((U,nt)=>(U[nt]=lt[nt]||ct[nt],U)),{})]}}),F=(V,J)=>{if(zt(J)){const[lt,ct,U]=J;m=lt,z=ct,D=U}else Vt(J)?(m=J,z=!1,D=!1):(m=!1,z=!1,D=!1);$(V)};return F.O=$.O,F.C=$.C,F},w={$t:!1,B:x(g)},T=jt(),B=go(Xe),[k]=_t({i:vs,o:{w:0,h:0}},(()=>{const m=B&&B.V(t,o,w,T,e).W,D=!(R&&A)&&Te(y,Qt,re),$=!A&&f(jr),F=$&&yt(L),V=F&&M(),J=H(Ws,D),lt=$&&m&&m(),ct=te(O),U=je(O);return lt&&lt(),Dt(L,F),V&&V(),D&&J(),{w:ct.w+U.w,h:ct.h+U.h}})),N=E(),X=m=>{const z=x(g);Z(m,{xt:u!==z}),Z(w,{B:z}),u=z},K=(m,z)=>{const[D,$]=m,F={Ht:$};return Z(w,{$t:D}),z||s(F),F},q=({vt:m,dt:z})=>{const D=z?s:N,$={vt:m||z,dt:z};X($),D($,n)},G=(m,z)=>{const[,D]=k(),$={Et:D};return X($),D&&!z&&N($,m?l:r),$},Q=(m,z,D)=>{const $={Dt:z};return X($),z&&!D&&N($,r),$},[P,I]=Y?un(y,K):[],b=!A&&nr(y,q,{dt:!0}),[S,C]=rr(y,!1,Q,{it:p,rt:p}),v=A&&bo&&new bo((m=>{const z=m[m.length-1].contentRect;q({vt:!0,dt:Ds(z,a)}),a=z}));return[()=>{v&&v.observe(y);const m=b&&b(),z=P&&P(),D=S(),$=T.Z((F=>{const[,V]=k();N({zt:F,Et:V,vt:R},d)}));return()=>{v&&v.disconnect(),m&&m(),z&&z(),i&&i(),D(),$(),N.C()}},({It:m,kt:z,At:D})=>{const $={},[F]=m("update.ignoreMutation"),[V,J]=m("update.attributes"),[lt,ct]=m("update.elementEvents"),[U,nt]=m("update.debounce"),it=ct||J,ot=z||D,dt=bt=>xt(F)&&!!F(bt);if(it){c&&c(),i&&i();const[bt,ut]=rr(Y||O,!0,G,{rt:Xt(p,V||[]),lt,ut:_,_t:(vt,Et)=>{const{target:Ot,attributeName:Nt}=vt;return(!Et&&Nt&&!A?gr(Ot,_,h):!1)||!!ho(Ot,`.${gt}`)||dt(vt)}});i=bt(),c=ut}if(nt&&(N.O(),zt(U)||Vt(U)?(r=U,n=!1,l=tr,d=or):Eo(U)?(r=U.mutation,n=U.resize,l=U.event,d=U.env):(r=!1,n=!1,l=!1,d=!1)),ot){const bt=C(),ut=I&&I(),vt=c&&c();bt&&Z($,Q(bt[0],bt[1],ot)),ut&&Z($,K(ut[0],ot)),vt&&Z($,G(vt[0],ot))}return X($),$},w]},lr=(t,o)=>xt(o)?o.apply(0,t):o,bn=(t,o,e,s)=>{const r=ge(s)?e:s;return lr(t,r)||o.apply(0,t)},cr=(t,o,e,s)=>{const r=ge(s)?e:s,n=lr(t,r);return!!n&&(Oo(n)?n:o.apply(0,t))},vn=(t,o)=>{const{nativeScrollbarsOverlaid:e,body:s}=o||{},{R:r,U:n,tt:l}=jt(),{nativeScrollbarsOverlaid:d,body:c}=l().cancel,i=e!=null?e:d,a=ge(s)?c:s,u=(r.x||r.y)&&i,_=t&&(Ho(a)?!n:a);return!!u||!!_},fn=(t,o,e,s)=>{const r="--os-viewport-percent",n="--os-scroll-percent",l="--os-scroll-direction",{tt:d}=jt(),{scrollbars:c}=d(),{slot:i}=c,{gt:a,ht:u,P:_,Tt:h,bt:p,wt:g,L:y}=o,{scrollbars:O}=h?{}:t,{slot:L}=O||{},Y=[],A=[],R=[],f=cr([a,u,_],(()=>y&&g?a:u),i,L),H=P=>{if(To){let I=null,b=[];const S=new To({source:p,axis:P}),C=()=>{I&&I.cancel(),I=null};return{Vt:m=>{const{Mt:z}=e,D=He(z)[P],$=P==="x",F=[De(0,$),De(`calc(-100% + 100cq${$?"w":"h"})`,$)],V=D?F:F.reverse();return b[0]===V[0]&&b[1]===V[1]||(b=V,C(),I=m.Rt.animate({transform:V},{timeline:S,fill:"both"})),C}}}},M={x:H("x"),y:H("y")},x=()=>{const{Lt:P,Pt:I}=e,b=(S,C)=>ys(0,1,S/(S+C)||0);return{x:b(I.x,P.x),y:b(I.y,P.y)}},E=(P,I,b)=>{const S=b?Ee:zs;tt(P,(C=>{S(C.Ut,I)}))},w=(P,I)=>{tt(P,(b=>{const[S,C]=I(b);lo(S,C)}))},T=(P,I,b)=>{const S=$o(b),C=S?b:!0,v=S?!b:!0;C&&E(A,P,I),v&&E(R,P,I)},B=()=>{const P=x(),I=b=>S=>[S.Ut,{[r]:Ce(b)+""}];w(A,I(P.x)),w(R,I(P.y))},k=()=>{if(!To){const{Mt:P}=e,I=Rs(P,yt(p)),b=S=>C=>[C.Ut,{[n]:Ce(S)+""}];w(A,b(I.x)),w(R,b(I.y))}},N=()=>{const{Mt:P}=e,I=He(P),b=S=>C=>[C.Ut,{[l]:S?"0":"1"}];w(A,b(I.x)),w(R,b(I.y)),To&&(A.forEach(M.x.Vt),R.forEach(M.y.Vt))},X=()=>{if(y&&!g){const{Lt:P,Mt:I}=e,b=He(I),S=Rs(I,yt(p)),C=v=>{const{Ut:m}=v,z=Ao(m)===_&&m,D=($,F,V)=>{const J=F*$;return As(V?J:-J)};return[z,z&&{transform:De({x:D(S.x,P.x,b.x),y:D(S.y,P.y,b.y)})}]};w(A,C),w(R,C)}},K=P=>{const I=P?"x":"y",S=_o(`${gt} ${P?Wr:Fr}`),C=_o(Xs),v=_o(We),m={Ut:S,Nt:C,Rt:v},z=M[I];return rt(P?A:R,m),rt(Y,[mt(S,C),mt(C,v),j(mo,S),z&&z.Vt(m),s(m,T,P)]),m},q=j(K,!0),G=j(K,!1),Q=()=>(mt(f,A[0].Ut),mt(f,R[0].Ut),j(pt,Y));return q(),G(),[{qt:B,jt:k,Bt:N,Ft:X,Xt:T,Yt:{Wt:A,Jt:q,Gt:j(w,A)},Kt:{Wt:R,Jt:G,Gt:j(w,R)}},Q]},hn=(t,o,e,s,r)=>(n,l,d)=>{const{ht:c,P:i,L:a,bt:u,Qt:_,Ct:h}=o,{Ut:p,Nt:g,Rt:y}=n,[O,L]=Kt(333),[Y,A]=Kt(444),[R,f]=Kt(150),[H,M]=Kt(25),x=[],E=()=>{f(),pt(x)},w=k=>{xt(u.scrollBy)&&u.scrollBy({behavior:"smooth",left:k.x,top:k.y})},T=()=>{const k="pointerup pointercancel lostpointercapture",N=`client${d?"X":"Y"}`,X=d?Vo:Xo,K=d?"left":"top",q=d?"w":"h",G=d?"x":"y",Q=[],P=st(g,"pointerdown",s((I=>{const b=ho(I.target,`.${We}`)===y,S=b?y:g,C=t.scrollbars,v=C[b?"dragScroll":"clickScroll"],{button:m,isPrimary:z,pointerType:D}=I,{pointers:$}=C;if(m===0&&z&&v&&($||[]).includes(D)){pt(Q),A();const V=!b&&(I.shiftKey||v==="instant"),J=j(Ne,y),lt=j(Ne,g),ct=(at,Mt)=>(at||J())[K]-(Mt||lt())[K],U=_e(Ne(u)[X])/yo(u)[q]||1,nt=yt(u)[G],it=at=>{Dt(u,{[G]:nt+at})},ot=at=>{const{Lt:Mt}=e,kt=yo(g)[q]-yo(y)[q],Jt=1/U*at/kt;it(Jt*Mt[G])},dt=I[N],bt=J(),ut=lt(),vt=bt[X],Et=ct(bt,ut)+vt/2,Nt=dt-ut[K]-Et,Ut=b?0:Nt,ao=at=>{pt(Bt),S.releasePointerCapture(at.pointerId)},Gt=b||V,Yt=h(),Lt=j(pt,[st(_,k,ao),st(_,"selectstart",(at=>Pe(at)),{I:!1}),st(g,k,ao),Gt&&st(g,"pointermove",(at=>ot(Ut+at[N]-dt)))]),Bt=[Lt,Gt&&(()=>{const at=yt(u);Yt();const Mt=yt(u),kt={x:Mt.x-at.x,y:Mt.y-at.y};(Ft(kt.x)>3||Ft(kt.y)>3)&&(h(),Dt(u,at),w(kt),Y(Yt))})];if(rt(Q,Lt),S.setPointerCapture(I.pointerId),V)ot(Nt);else if(!b){const at=go(on);if(at){const{Pt:Mt}=e,kt=at(it,ot,j(ct),Nt,Mt[G],v,!!d,(Jt=>{Jt?Yt():rt(Bt,Yt)}));rt(Bt,kt),rt(Q,j(kt,!0))}}}})));return j(pt,[P,j(pt,Q)])};let B=!0;return j(pt,[st(y,"pointermove pointerleave",s(r)),st(p,"pointerenter",s((()=>{l(Zs,!0)}))),st(p,"pointerleave pointercancel",s((()=>{l(Zs,!1)}))),st(p,"wheel",s((k=>{const{deltaX:N,deltaY:X,deltaMode:K}=k;B&&K===0&&Ao(p)===c&&w({x:N,y:X}),B=!1,l(Qs,!0),O((()=>{B=!0,l(Qs)})),Pe(k)})),{I:!1,k:!0}),!a&&st(p,"mousedown",s((()=>{const k=Ie();(gs(k,$t)||gs(k,Qt)||k===document.body)&&H(j(oe,i))}))),st(p,"pointerdown",(()=>{E();const k=st(_,"click",(X=>{E(),Ls(X)}),{A:!0,k:!0,I:!1}),N=st(_,"pointerup pointercancel",(()=>{N(),R(E)}),{k:!0,I:!0});rt(x,[k,N])}),{k:!0,I:!0}),E,T(),L,A,M])},mn=(t,o,e,s,r,n,l)=>{let d,c,i,a,u,_=fo,h=0;const p=["mouse","pen"],g=v=>m=>{e.Zt||v(m)},y=v=>p.includes(v.pointerType),[O,L]=Kt(),[Y,A]=Kt(100),[R,f]=Kt(50),[H,M]=Kt((()=>h)),[x,E]=fn(t,n,r,hn(o,n,r,g,(v=>y(v)&&Q()))),{ht:w,tn:T,wt:B}=n,{Xt:k,qt:N,jt:X,Bt:K,Ft:q}=x,G=(v,m)=>{M();const z=D=>{e.Zt||k(Zr,D)};if(v)z();else{const D=i?!d:!0;h>0&&!m?H(j(z,D)):z(D)}},Q=()=>{(i?!d:!a)&&(G(!0),Y((()=>{G(!1)})))},P=v=>{y(v)&&(d=!0,!e.Zt&&i&&G(!0))},I=v=>{y(v)&&(d=!1,!e.Zt&&i&&G(!1))},b=v=>{k(Fe,v,!0),k(Fe,v,!1)},S=[M,A,f,L,()=>_(),st(w,"pointerover",P,{A:!0}),st(w,"pointerenter",P),st(w,"pointerleave",I),st(w,"pointermove",g((v=>{y(v)&&c&&Q()}))),st(T,"scroll",g((v=>{O((()=>{X(),Q()})),l(v),q()})))],C=go(Xe);return[()=>j(pt,rt(S,E())),({It:v,At:m,nn:z,sn:D})=>{const{en:$,cn:F,rn:V,ln:J}=D||{},{xt:lt,dt:ct}=z||{},{B:U}=s,{R:nt,U:it}=jt(),{an:ot,X:dt}=r,[bt,ut]=v("showNativeOverlaidScrollbars"),[vt,Et]=v("scrollbars.theme"),[Ot,Nt]=v("scrollbars.visibility"),[Ut,ao]=v("scrollbars.autoHide"),[Gt,Yt]=v("scrollbars.autoHideSuspend"),[Lt]=v("scrollbars.autoHideDelay"),[Bt,at]=v("scrollbars.dragScroll"),[Mt,kt]=v("scrollbars.clickScroll"),[Jt,At]=v("overflow"),Io=ct&&!m,Ge=$||F||J||lt||m,Co=V||Nt||At,Je=bt&&nt.x&&nt.y,ce=!it&&!C,qe=Je||ce,ae=(Do,Wt,ie)=>{const de=Do.includes(ro)&&(Ot===Rt||Ot==="auto"&&Wt===ro);return k(Vr,de,ie),de};if(h=Lt,(ut||ce)&&k(Yr,qe),Et&&(k(u),k(vt,!0),u=vt),(Yt||Io)&&(b(!Gt),Io&&Gt&&(dt.x||dt.y?(_(),R((()=>{_=st(T,ro,g(j(b,!0)),{A:!0})}))):b(!0))),ao&&(c=Ut==="move",i=Ut==="leave",a=Ut==="never",G(a,!0)),at&&k(Qr,Bt),kt&&k(Kr,!!Mt),Co){const Do=ae(Jt.x,ot.x,!0),Wt=ae(Jt.y,ot.y,!1);k(Xr,!(Do&&Wt))}Ge&&(X(),N(),q(),J&&K(),k(Ks,!dt.x,!0),k(Ks,!dt.y,!1),k(Br,U&&!B))},{},x]},_n=t=>{const o=jt(),{tt:e,G:s,U:r}=o,{elements:n}=e(),{padding:l,viewport:d,content:c}=n,i=Oo(t),a=i?{}:t,{elements:u}=a,{padding:_,viewport:h,content:p}=u||{},g=i?t:a.target,y=Ms(g),O=g.ownerDocument,L=O.documentElement,Y=()=>O.defaultView||ft,A=j(bn,[g]),R=j(cr,[g]),f=j(_o,""),H=j(A,f,d),M=j(R,f,c),x=U=>{const nt=yo(U),it=te(U),ot=Ct(U,xe),dt=Ct(U,ze);return it.w-nt.w>0&&!xo(ot)||it.h-nt.h>0&&!xo(dt)},E=H(h),w=E===g,T=w&&y,B=!w&&M(p),k=!w&&E===B,N=T?L:E,X=T?N:g,K=!w&&R(f,l,_),q=!k&&B,G=[q,N,K,X].map((U=>Oo(U)&&!Ao(U)&&U)),Q=U=>U&&ls(G,U),P=!Q(N)&&x(N)?N:g,I=T?L:N,S={gt:g,ht:X,P:N,un:K,yt:q,bt:I,tn:T?O:N,fn:y?L:P,Qt:O,wt:y,Tt:i,L:w,_n:Y,St:U=>Te(N,$t,U),Ot:(U,nt)=>Go(N,$t,U,nt),Ct:()=>Go(I,$t,Nr,!0)},{gt:C,ht:v,un:m,P:z,yt:D}=S,$=[D,z,m,v,C],F=[()=>{It(v,[Qt,Ue]),It(C,Ue),y&&It(L,[Ue,Qt])}];let V=Ae($.find((U=>U&&!Q(U))));const J=T?C:D||z,lt=j(pt,F);return[S,()=>{const U=Y(),nt=Ie(),it=ut=>{mt(Ao(ut),Ae(ut)),mo(ut)},ot="tabindex",dt=Me(z,ot),bt=Re(Xt($,[nt]));return Ht(v,Qt,w?"":Ir),Ht(m,Ye,""),Ht(z,$t,""),Ht(D,Vs,""),w||((dt||!s)&&Ht(z,ot,dt||"-1"),y&&Ht(L,Bs,"")),mt(J,V),mt(v,m),mt(m||v,!w&&z),mt(z,D),rt(F,[bt,()=>{const ut=Ie(),vt=Q(z),Et=vt&&ut===z?C:ut,Ot=Re(Xt($,[Et]));It(m,Ye),It(D,Vs),It(z,$t),y&&It(L,Bs),dt?Ht(z,ot,dt):It(z,ot),Q(D)&&it(D),vt&&it(z),Q(m)&&it(m),oe(Et),Ot()}]),r&&!w&&(ke(z,$t,Fs),rt(F,j(It,z,$t))),oe(!w&&y&&nt===C&&U.top===U?z:nt),bt(),V=0,lt},lt]},yn=({yt:t})=>({nn:o,dn:e,At:s})=>{const{Ht:r}=o||{},{$t:n}=e;t&&(r||s)&&lo(t,{[Xo]:n&&"100%"})},gn=({ht:t,un:o,P:e,L:s},r)=>{const[n,l]=_t({i:_r,o:Is()},j(Is,t,"padding",""));return({It:d,nn:c,dn:i,At:a})=>{let[u,_]=l(a);const{U:h}=jt(),{vt:p,Et:g,xt:y}=c||{},{B:O}=i,[L,Y]=d("paddingAbsolute");(p||_||(a||g))&&([u,_]=n(a));const R=!s&&(Y||y||_);if(R){const f=!L||!o&&!h,H=u.r+u.l,M=u.t+u.b,x={[ps]:f&&!O?-H:0,[bs]:f?-M:0,[us]:f&&O?-H:0,top:f?-u.t:0,right:f?O?-u.r:"auto":0,left:f?O?"auto":-u.l:0,[Vo]:f&&`calc(100% + ${H}px)`},E={[cs]:f?u.t:0,[as]:f?u.r:0,[ds]:f?u.b:0,[is]:f?u.l:0};lo(o||e,x),lo(e,E),Z(r,{un:u,pn:!f,F:o?E:Z({},x,E)})}return{vn:R}}},wn=(t,o)=>{const e=jt(),{ht:s,un:r,P:n,L:l,tn:d,bt:c,wt:i,Ot:a,_n:u}=t,{U:_}=e,h=i&&l,p=j(Po,0),g={display:()=>!1,direction:b=>b!=="ltr",flexDirection:b=>b.endsWith("-reverse"),writingMode:b=>b!=="horizontal-tb"},y=ht(g),O={i:vs,o:{w:0,h:0}},L={i:Ko,o:{}},Y=b=>{a(Ws,!h&&b)},A=()=>Ct(n,y),R=(b,S)=>{const C=!ht(b).length,v=S?!0:y.some((it=>{const ot=b[it];return vo(ot)&&g[it](ot)}));if(C||!v||!kr(n))return{T:{x:0,y:0},M:{x:1,y:1}};Y(!0);const m=yt(c),z=st(d,ro,(it=>{const ot=yt(c);it.isTrusted&&ot.x===m.x&&ot.y===m.y&&Ns(it)}),{k:!0,A:!0}),D=a(Lr,!0);Dt(c,{x:0,y:0});const $=a(Rr,!0),F=yt(c),V=te(c);Dt(c,{x:V.w,y:V.h});const J=yt(c),lt={x:J.x-F.x,y:J.y-F.y};Dt(c,{x:-V.w,y:-V.h});const ct=yt(c),U={x:ct.x-F.x,y:ct.y-F.y},nt={x:Ft(lt.x)>=Ft(U.x)?J.x:ct.x,y:Ft(lt.y)>=Ft(U.y)?J.y:ct.y};return D(),$(),Dt(c,m),Ro((()=>z())),{T:F,M:nt}},f=(b,S)=>{const C=ft.devicePixelRatio%1!==0?1:0,v={w:p(b.w-S.w),h:p(b.h-S.h)};return{w:v.w>C?v.w:0,h:v.h>C?v.h:0}},H=(b,S)=>{const C=(v,m,z,D)=>{const $=v===Rt?Tt:qr(v),F=xo(v),V=xo(z);return!m&&!D?Tt:F&&V?Rt:F?m&&D?$:m?Rt:Tt:m?$:V&&D?Rt:Tt};return{x:C(S.x,b.x,S.y,b.y),y:C(S.y,b.y,S.x,b.x)}},M=b=>{const S=v=>[Rt,Tt,ro].map((m=>Gs(Ve(m),v))),C=S(!0).concat(S()).join(" ");a(C),a(ht(b).map((v=>Gs(b[v],v==="x"))).join(" "),!0)},[x,E]=_t(O,j(je,n)),[w,T]=_t(O,j(te,n)),[B,k]=_t(O),[N]=_t(L),[X,K]=_t(O),[q]=_t(L),[G]=_t({i:(b,S)=>Zo(b,S,Fo(Xt(ht(b),ht(S)))),o:{}}),[Q,P]=_t({i:(b,S)=>Ko(b.T,S.T)&&Ko(b.M,S.M),o:Ps()}),I=go(Xe);return({It:b,nn:S,dn:C,At:v},{vn:m})=>{const{vt:z,Dt:D,Et:$,xt:F,dt:V,zt:J}=S||{},lt=I&&I.V(t,o,C,e,b),{Y:ct,W:U,J:nt}=lt||{},[it,ot]=Jr(b,e),[dt,bt]=b("overflow"),ut=xo(dt.x),vt=xo(dt.y),Et=z||m||$||F||J||ot;let Ot=E(v),Nt=T(v),Ut=k(v),ao=K(v);if(ot&&_&&a(Fs,!it),Et){Te(s,Qt,re)&&Y(!0);const Rn=l?a(Pr,!0):fo,dr=U&&U(),[ue]=Ot=x(v),[pe]=Nt=w(v),be=Cs(n),ve=h&&Mr(u()),Hn={w:p(pe.w+ue.w),h:p(pe.h+ue.h)},ur={w:p((ve?ve.w:be.w+p(be.w-pe.w))+ue.w),h:p((ve?ve.h:be.h+p(be.h-pe.h))+ue.h)};Rn(),dr&&dr(),ao=X(ur),Ut=B(f(Hn,ur),v)}const[Gt,Yt]=ao,[Lt,Bt]=Ut,[at,Mt]=Nt,[kt,Jt]=Ot,[At]=N({x:Lt.w>0,y:Lt.h>0}),Io=ut&&vt&&(At.x||At.y)||ut&&At.x&&!At.y||vt&&At.y&&!At.x,Ge=m||F||J||Jt||Mt||Yt||Bt||bt||ot||Et||D&&h,[Co]=b("update.flowDirectionStyles"),[Je,ce]=G(Co?Co(n)||{}:A(),v),qe=F||V||ce||v,[ae,Do]=qe?Q(R(Je,!!Co),v):P();let Wt=H(At,dt);Y(!1),Ge&&(M(Wt),Wt=tn(n,At),nt&&ct&&(ct(Wt,at,kt),lo(n,nt(Wt))));const[ie,de]=q(Wt);return Go(s,Qt,re,Io),Go(r,Ye,re,Io),Z(o,{an:ie,Pt:{x:Gt.w,y:Gt.h},Lt:{x:Lt.w,y:Lt.h},X:At,Mt:Tr(ae,Lt)}),{rn:de,en:Yt,cn:Bt,ln:Do||Bt}}},xn=t=>{const[o,e,s]=_n(t),r={un:{t:0,r:0,b:0,l:0},pn:!1,F:{[ps]:0,[bs]:0,[us]:0,[cs]:0,[as]:0,[ds]:0,[is]:0},Pt:{x:0,y:0},Lt:{x:0,y:0},an:{x:Tt,y:Tt},X:{x:!1,y:!1},Mt:Ps()},{gt:n,bt:l,L:d,Ct:c}=o,{U:i,R:a}=jt(),u=!i&&(a.x||a.y),_=[yn(o),gn(o,r),wn(o,r)];return[e,h=>{const p={},y=u&&yt(l),O=y&&c();return tt(_,(L=>{Z(p,L(h,p)||{})})),Dt(l,y),O&&O(),d||Dt(n,0),p},r,o,s]},zn=(t,o,e,s)=>{let r=!1;const n={Zt:!1,gn:!1},l=Ze(o,{}),[d,c,i,a,u]=xn(t),[_,h,p]=pn(a,i,l,(A=>{Y({},A)})),[g,y,,O]=mn(t,o,n,p,i,a,s),L=A=>ht(A).some((R=>!!A[R])),Y=(A,R)=>{const{Zt:f,gn:H}=n;if(H||f&&r)return!1;const{hn:M,At:x,kt:E}=A,w=M||{},T=!!x||!r,B={It:Ze(o,w,T),hn:w,At:T},k=R||h(Z({},B,{kt:E})),N=c(Z({},B,{dn:p,nn:k}));y(Z({},B,{nn:k,sn:N}));const X=L(k),K=L(N),q=X||K||!Se(w)||T;return r=!0,q&&e(A,{nn:k,sn:N}),q};return[()=>{const{fn:A,bt:R,Ct:f}=a,H=yt(A),M=[_(),d(),g(),()=>{n.gn=!0}],x=f();return Dt(R,H),x(),j(pt,M)},Y,A=>{const R=n.Zt;n.Zt=A,!A&&R!==A&&Y({At:!0,kt:!0})},()=>{y({It:Ze(o,{},!1),hn:{},At:!1})},()=>({bn:n,yn:p,wn:i}),{Sn:a,mn:O},u]},Qe=new WeakMap,Sn=(t,o)=>{Qe.set(t,o)},Mn=t=>{Qe.delete(t)},ar=t=>Qe.get(t),St=(t,o,e)=>{const{ot:s}=jt(),r=Oo(t),n=r?t:t.target,l=ar(n);if(o&&!l){const d=[],c={},i=T=>{const B=_s(T),k=go(Ar);return k?k(B,!0):B},a=Z({},s(),i(o)),[u,_,h]=$e(),[p,g,y]=$e(e),O=(T,B)=>{y(T,B),h(T,B)},[L,Y,A,R,f,H,M]=zn(t,a,(({hn:T,At:B},{nn:k,sn:N})=>{const{vt:X,xt:K,Ht:q,Et:G,Dt:Q,dt:P}=k,{en:I,cn:b,rn:S,ln:C}=N;O("updated",[w,{updateHints:{sizeChanged:!!X,directionChanged:!!K,heightIntrinsicChanged:!!q,overflowEdgeChanged:!!I,overflowAmountChanged:!!b,overflowStyleChanged:!!S,scrollCoordinatesChanged:!!C,contentMutation:!!G,hostMutation:!!Q,appear:!!P},changedOptions:T||{},force:!!B}])}),(T=>O("scroll",[w,T]))),x=T=>{const{bn:B}=f(),{gn:k}=B;k||(Mn(n),pt(d),O("destroyed",[w,T]),_(),g())},w={options(T,B){if(T){const k=B?s():{},N=er(a,Z(k,i(T)));Se(N)||(Z(a,N),Y({hn:N}))}return Z({},a)},on:p,off:(T,B)=>{T&&B&&g(T,B)},state(){const{bn:T,yn:B,wn:k}=f(),{gn:N,Zt:X}=T,{B:K}=B,{Pt:q,Lt:G,an:Q,X:P,un:I,pn:b,Mt:S}=k;return Z({},{overflowEdge:q,overflowAmount:G,overflowStyle:Q,hasOverflow:P,scrollCoordinates:{start:S.T,end:S.M},padding:I,paddingAbsolute:b,directionRTL:K,sleeping:X,destroyed:N})},elements(){const{gt:T,ht:B,un:k,P:N,yt:X,bt:K,tn:q}=H.Sn,{Yt:G,Kt:Q}=H.mn,P=b=>{const{Rt:S,Nt:C,Ut:v}=b;return{scrollbar:v,track:C,handle:S}},I=b=>{const{Wt:S,Jt:C}=b,v=P(S[0]);return Z({},v,{clone:()=>{const m=P(C());return R(),m}})};return Z({},{target:T,host:B,padding:k||N,viewport:N,content:X||N,scrollOffsetElement:K,scrollEventElement:q,scrollbarHorizontal:I(G),scrollbarVertical:I(Q)})},update:T=>Y({At:T,kt:!0}),destroy:j(x,!1),sleep:A,plugin:T=>c[ht(T)[0]]};return rt(d,[M]),Sn(n,w),Ys($s,St,[w,u,c]),vn(H.Sn.wt,!r&&t.cancel)?(x(!0),w):(rt(d,L()),O("initialized",[w]),w.update(),w)}return l};St.plugin=t=>{const o=zt(t),e=o?t:[t],s=e.map((r=>Ys(r,St)[0]));return Er(e),o?s:s[0]},St.valid=t=>{const o=t&&t.elements,e=xt(o)&&o();return Eo(e)&&!!ar(e.target)},St.env=()=>{const{N:t,R:o,U:e,K:s,G:r,et:n,ct:l,tt:d,nt:c,ot:i,st:a}=jt();return Z({},{scrollbarsSize:t,scrollbarsOverlaid:o,scrollbarsHiding:e,scrollTimeline:s,focusableScrollers:r,staticDefaultInitialization:n,staticDefaultOptions:l,getDefaultInitialization:d,setDefaultInitialization:c,getDefaultOptions:i,setDefaultOptions:a})},St.nonce=nn,St.trustedTypePolicy=xr;var et=W("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const kn=()=>{if(typeof window>"u"){const i=()=>{};return[i,i]}let t,o;const e=window,s=typeof e.requestIdleCallback=="function",r=e.requestAnimationFrame,n=e.cancelAnimationFrame,l=s?e.requestIdleCallback:r,d=s?e.cancelIdleCallback:n,c=()=>{d(t),n(o)};return[(i,a)=>{c(),t=l(s?()=>{c(),o=r(i)}:i,typeof a=="object"?a:{timeout:2233})},c]},Tn=t=>{const{options:o,events:e,defer:s}=t||{},[r,n]=(0,et.useMemo)(kn,[]),l=(0,et.useRef)(null),d=(0,et.useRef)(s),c=(0,et.useRef)(o),i=(0,et.useRef)(e);return(0,et.useEffect)(()=>{d.current=s},[s]),(0,et.useEffect)(()=>{const{current:a}=l;c.current=o,St.valid(a)&&a.options(o||{},!0)},[o]),(0,et.useEffect)(()=>{const{current:a}=l;i.current=e,St.valid(a)&&a.on(e||{},!0)},[e]),(0,et.useEffect)(()=>()=>{var a;n(),(a=l.current)==null||a.destroy()},[]),(0,et.useMemo)(()=>[a=>{const u=l.current;if(St.valid(u))return;const _=d.current,h=()=>l.current=St(a,c.current||{},i.current||{});_?r(h,_):h()},()=>l.current],[])},En=(t,o)=>{const{element:e="div",options:s,events:r,defer:n,children:l,...d}=t,c=e,i=(0,et.useRef)(null),a=(0,et.useRef)(null),[u,_]=Tn({options:s,events:r,defer:n});return(0,et.useEffect)(()=>{const{current:h}=i,{current:p}=a;if(!h)return;const g=h;return u(e==="body"?{target:g,cancel:{body:null}}:{target:g,elements:{viewport:p,content:p}}),()=>{var y;return(y=_())==null?void 0:y.destroy()}},[u,_,e]),(0,et.useImperativeHandle)(o,()=>({osInstance:_,getElement:()=>i.current}),[_]),et.createElement(c,{"data-overlayscrollbars-initialize":"",ref:i,...d},e==="body"?l:et.createElement("div",{"data-overlayscrollbars-contents":"",ref:a},l))},On=(0,et.forwardRef)(En);var An=W("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");const In={S:"s",M:"m"},Cn={Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"},Dn={None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"},ne={Bottom:"bottom",Right:"right"},jn=100,ir=2;var le=W("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@1.0.1_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"),zo={};zo.styleTagTransform=me(),zo.setAttributes=Mo(),zo.insert=So().bind(null,"head"),zo.domAPI=wt(),zo.insertStyleElement=he();var Jn=Pt()(le.A,zo);const Nn=le.A&&le.A.locals?le.A.locals:void 0;var Ln=function(t,o){var e={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(e[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)o.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(e[s[r]]=t[s[r]]);return e};const qn=St.nonce,Pn=(0,et.forwardRef)(function(o,e){var{children:s,className:r,onScroll:n,onInitialized:l,size:d=In.M,resize:c=Dn.None,clickScrolling:i=!0,barHideStrategy:a=Cn.Leave,autoscrollTo:u,paddingAbsolute:_,untouchableScrollbars:h=!1}=o,p=Ln(o,["children","className","onScroll","onInitialized","size","resize","clickScrolling","barHideStrategy","autoscrollTo","paddingAbsolute","untouchableScrollbars"]);const g=(0,et.useRef)(null),[y,O]=(0,et.useState)(!1),L=(0,et.useCallback)((M=g.current)=>M==null?void 0:M.osInstance(),[g]);(0,et.useImperativeHandle)(e,()=>{var M,x,E;return(E=(x=(M=g.current)===null||M===void 0?void 0:M.osInstance())===null||x===void 0?void 0:x.elements().viewport)!==null&&E!==void 0?E:null});const Y=(0,et.useRef)({scrolledToBottom:!1,scrolledToRight:!1}),A=(0,et.useCallback)(M=>{const x=L(M);if(x){const{viewport:E}=x.elements(),w=E.scrollHeight-(E.offsetHeight+E.scrollTop),T=E.scrollWidth-(E.offsetWidth+E.scrollLeft),B=E.scrollHeight>E.offsetHeight,k=E.scrollWidth>E.offsetWidth;Y.current.scrolledToBottom=w<ir||!B,Y.current.scrolledToRight=T<ir||!k}},[L]);(0,An.N)(()=>{if(!u){l==null||l();return}const M=L();if(M&&y){A();const{content:x}=M.elements();u===ne.Bottom&&x.scroll(0,x.scrollHeight),u===ne.Right&&x.scroll(x.scrollWidth,0)}l==null||l()},[L,y,A]);const R=(0,et.useCallback)(()=>{O(!0)},[]),f=(0,et.useCallback)(M=>{n==null||n(M),u&&A()},[n,A]),H=(0,et.useCallback)(()=>{var M;if(!u)return;const x=(M=L())===null||M===void 0?void 0:M.elements();x!=null&&x.content&&(Y.current.scrolledToBottom&&u===ne.Bottom&&(x==null||x.content.scroll(0,x==null?void 0:x.content.scrollHeight)),Y.current.scrolledToRight&&u===ne.Right&&(x==null||x.content.scroll(x==null?void 0:x.content.scrollWidth,0)))},[L,u]);return(0,to.jsx)(On,Object.assign({},p,{ref:g,"data-size":d,"data-untouchable-scrollbars":h||void 0,className:vr()(r,Nn.scroll,"osThemeSnack"),style:{resize:c},options:{paddingAbsolute:_,scrollbars:{autoHide:a,autoHideDelay:jn,clickScroll:i}},events:{initialized:R,scroll:(M,x)=>{f(x)},updated:H},children:u?y&&s:s}))})},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@1.0.1_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"(io,qt,W){W.d(qt,{A:()=>fe});var to=W("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),oo=W.n(to),Pt=W("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),eo=W.n(Pt),wt=W("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/getUrl.js"),so=W.n(wt),So=new URL(W("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),W.b),jo=eo()(oo()),Mo=so()(So);jo.push([io.id,`@charset "UTF-8";
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
  --bg-icon-mask:url(${Mo});
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
}`,""]);const fe=jo},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@1.0.1_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"(io,qt,W){W.d(qt,{A:()=>so});var to=W("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),oo=W.n(to),Pt=W("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),eo=W.n(Pt),wt=eo()(oo());wt.push([io.id,`.scroll--rwVET{
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
}`,""]),wt.locals={scroll:"scroll--rwVET"};const so=wt},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/overlayscrollbars@2.17.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"(io,qt,W){W.d(qt,{A:()=>so});var to=W("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),oo=W.n(to),Pt=W("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),eo=W.n(Pt),wt=eo()(oo());wt.push([io.id,`/*! 
 * OverlayScrollbars
 * Version: 2.17.1
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
/**
 * body element
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
  flex: auto;
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

/**
 * wrapper elements overflow:
 */
[data-overlayscrollbars~=host],
[data-overlayscrollbars-padding] {
  overflow: hidden !important;
}

[data-overlayscrollbars~=host][data-overlayscrollbars~=noClipping],
[data-overlayscrollbars-padding~=noClipping] {
  overflow: visible !important;
}

/**
 * viewport overflow:
 */
[data-overlayscrollbars-viewport] {
  --os-viewport-overflow-x: hidden;
  --os-viewport-overflow-y: hidden;
  overflow-x: var(--os-viewport-overflow-x);
  overflow-y: var(--os-viewport-overflow-y);
}

[data-overlayscrollbars-viewport~=overflowXVisible] {
  --os-viewport-overflow-x: visible;
}

[data-overlayscrollbars-viewport~=overflowXHidden] {
  --os-viewport-overflow-x: hidden;
}

[data-overlayscrollbars-viewport~=overflowXScroll] {
  --os-viewport-overflow-x: scroll;
}

[data-overlayscrollbars-viewport~=overflowYVisible] {
  --os-viewport-overflow-y: visible;
}

[data-overlayscrollbars-viewport~=overflowYHidden] {
  --os-viewport-overflow-y: hidden;
}

[data-overlayscrollbars-viewport~=overflowYScroll] {
  --os-viewport-overflow-y: scroll;
}

[data-overlayscrollbars-viewport~=overflowImportant] {
  overflow-x: var(--os-viewport-overflow-x) !important;
  overflow-y: var(--os-viewport-overflow-y) !important;
}

/**
 * viewport state modifiers:
 */
[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId) {
  font-size: 0 !important;
  line-height: 0 !important;
}

[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId)::before,
[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId)::after,
[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId) > *:not(#osFakeId) {
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

[data-overlayscrollbars-viewport~=noContent][data-overlayscrollbars-viewport~=contentOverflow]:not(#osFakeId)::after {
  content: "";
  display: block !important;
  min-width: 200% !important;
  min-height: 200% !important;
  margin: 0 !important;
  clip: auto !important;
}

[data-overlayscrollbars-viewport~=measuring],
[data-overlayscrollbars-viewport~=scrolling] {
  scroll-behavior: auto !important;
  scroll-snap-type: none !important;
}

[data-overlayscrollbars-viewport~=measuring][data-overlayscrollbars-viewport~=overflowXVisible] {
  overflow-x: hidden !important;
}

[data-overlayscrollbars-viewport~=measuring][data-overlayscrollbars-viewport~=overflowYVisible] {
  overflow-y: hidden !important;
}

[data-overlayscrollbars-viewport~=noScrollbars]:not(#osFakeId) > .os-scrollbar,
[data-overlayscrollbars-viewport~=measuring]:not(#osFakeId) > .os-scrollbar {
  display: none !important;
}

/**
 * content element:
 */
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
@property --os-scroll-direction {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
@property --os-scroll-percent-directional {
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
}

[data-overlayscrollbars-initialize]:not([data-overlayscrollbars-viewport]),
[data-overlayscrollbars-viewport~=scrollbarHidden],
html[data-overlayscrollbars-viewport~=scrollbarHidden] > body {
  scrollbar-width: none !important;
}

@supports not (scrollbar-width: none) {
  [data-overlayscrollbars-initialize]:not([data-overlayscrollbars-viewport])::-webkit-scrollbar,
  [data-overlayscrollbars-initialize]:not([data-overlayscrollbars-viewport])::-webkit-scrollbar-corner,
  [data-overlayscrollbars-viewport~=scrollbarHidden]::-webkit-scrollbar,
  [data-overlayscrollbars-viewport~=scrollbarHidden]::-webkit-scrollbar-corner,
  html[data-overlayscrollbars-viewport~=scrollbarHidden] > body::-webkit-scrollbar,
  html[data-overlayscrollbars-viewport~=scrollbarHidden] > body::-webkit-scrollbar-corner {
    -webkit-appearance: none !important;
            appearance: none !important;
    display: none !important;
    width: 0 !important;
    height: 0 !important;
  }
}
[data-overlayscrollbars-initialize]:not([data-overlayscrollbars]):not(html):not(body) {
  overflow: auto;
}`,""]);const so=wt}}]);})();
