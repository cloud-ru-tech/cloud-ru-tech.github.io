"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9943],{"./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/Status.js":((S,u,e)=>{e.d(u,{n:()=>y});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),v=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(v),b=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),d=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),i=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const M={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},R={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(W),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),X=e.n(Z),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),B=e.n(V),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=e.n(F),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(K),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),O=e.n(C),N=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),E={};E.styleTagTransform=O(),E.setAttributes=L(),E.insert=B().bind(null,"head"),E.domAPI=X(),E.insertStyleElement=z();var $=A()(N.A,E);const G=N.A&&N.A.locals?N.A.locals:void 0;var m=function(p,D){var h={};for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&D.indexOf(c)<0&&(h[c]=p[c]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(p);n<c.length;n++)D.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(p,c[n])&&(h[c[n]]=p[c[n]]);return h};function f(p){var{size:D=R.M,appearance:h=M.Primary,className:c}=p,n=m(p,["size","appearance","className"]);return(0,r.jsx)("div",Object.assign({className:_()(G.container,c)},(0,i.z7)(n),{"data-size":D,children:(0,r.jsx)("div",{className:G.indicator,"data-appearance":h})}))}const T={Xs:"xs",S:"s"},g={[T.Xs]:R.Xs,[T.S]:R.S},P={[T.Xs]:"xxs",[T.S]:"xs"};var H=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/styles.module.css"),x={};x.styleTagTransform=O(),x.setAttributes=L(),x.insert=B().bind(null,"head"),x.domAPI=X(),x.insertStyleElement=z();var U=A()(H.A,x);const j=H.A&&H.A.locals?H.A.locals:void 0;var k=function(p,D){var h={};for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&D.indexOf(c)<0&&(h[c]=p[c]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(p);n<c.length;n++)D.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(p,c[n])&&(h[c[n]]=p[c[n]]);return h};function y(p){var{label:D,size:h=T.Xs,appearance:c=M.Primary,hasBackground:n,loading:a,className:o}=p,t=k(p,["label","size","appearance","hasBackground","loading","className"]);return(0,r.jsxs)("div",Object.assign({className:_()(j.container,o)},(0,i.z7)(t),{"data-size":h,"data-has-background":n||void 0,"data-appearance":a?M.Neutral:c,children:[a?(0,r.jsx)(b.y,{size:P[h]}):(0,r.jsx)(f,{appearance:c,size:g[h]}),(0,r.jsx)(d.m,{text:D,maxLines:1,className:j.label,"data-test-id":"status__title","data-size":h})]}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/Status.js":((S,u,e)=>{e.d(u,{n:()=>H});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),v=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(v),b=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),d=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),i=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),M=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js"),R=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js"),W=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js");const A={Xs:"xs",S:"s"},Z={[A.Xs]:W.S.Xs,[A.S]:W.S.S},X={[A.Xs]:"xxs",[A.S]:"xs"};var V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),B=e.n(V),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),L=e.n(F),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),z=e.n(K),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),O=e.n(C),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n(N),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),G=e.n($),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/styles.module.css"),f={};f.styleTagTransform=G(),f.setAttributes=O(),f.insert=z().bind(null,"head"),f.domAPI=L(),f.insertStyleElement=E();var T=B()(m.A,f);const g=m.A&&m.A.locals?m.A.locals:void 0;var P=function(x,U){var j={};for(var k in x)Object.prototype.hasOwnProperty.call(x,k)&&U.indexOf(k)<0&&(j[k]=x[k]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,k=Object.getOwnPropertySymbols(x);y<k.length;y++)U.indexOf(k[y])<0&&Object.prototype.propertyIsEnumerable.call(x,k[y])&&(j[k[y]]=x[k[y]]);return j};function H(x){var{label:U,size:j=A.Xs,appearance:k=M.x.Primary,hasBackground:y,loading:p,className:D}=x,h=P(x,["label","size","appearance","hasBackground","loading","className"]);return(0,r.jsxs)("div",Object.assign({className:_()(g.container,D)},(0,i.z7)(h),{"data-size":j,"data-has-background":y||void 0,"data-appearance":p?M.x.Neutral:k,children:[p?(0,r.jsx)(b.y,{size:X[j]}):(0,r.jsx)(R.k,{appearance:k,size:Z[j]}),(0,r.jsx)(d.m,{text:U,maxLines:1,className:g.label,"data-test-id":"status__title","data-size":j})]}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js":((S,u,e)=>{e.d(u,{k:()=>G});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),v=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(v),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),d=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js"),i=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js"),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(M),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(W),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),X=e.n(Z),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=e.n(V),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),L=e.n(F),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),z=e.n(K),C=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),O={};O.styleTagTransform=z(),O.setAttributes=B(),O.insert=X().bind(null,"head"),O.domAPI=A(),O.insertStyleElement=L();var N=R()(C.A,O);const E=C.A&&C.A.locals?C.A.locals:void 0;var $=function(m,f){var T={};for(var g in m)Object.prototype.hasOwnProperty.call(m,g)&&f.indexOf(g)<0&&(T[g]=m[g]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,g=Object.getOwnPropertySymbols(m);P<g.length;P++)f.indexOf(g[P])<0&&Object.prototype.propertyIsEnumerable.call(m,g[P])&&(T[g[P]]=m[g[P]]);return T};function G(m){var{size:f=i.S.M,appearance:T=d.x.Primary,className:g}=m,P=$(m,["size","appearance","className"]);return(0,r.jsx)("div",Object.assign({className:_()(E.container,g)},(0,b.z7)(P),{"data-size":f,children:(0,r.jsx)("div",{className:E.indicator,"data-appearance":T})}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js":((S,u,e)=>{e.d(u,{S:()=>r});const r={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js":((S,u,e)=>{e.d(u,{x:()=>r});const r={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js":((S,u,e)=>{e.d(u,{o:()=>c});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),v=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(v),b=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=function(n,a){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(n);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(n,t[s])&&(o[t[s]]=n[t[s]]);return o};const R=d.forwardRef((n,a)=>{var{size:o=24}=n,t=i(n,["size"]);t.width=void 0,t.height=void 0;const s="-question-s";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,r.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},t,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var W=function(n,a){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(n);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(n,t[s])&&(o[t[s]]=n[t[s]]);return o};const Z=d.forwardRef((n,a)=>{var{size:o=24}=n,t=W(n,["size"]);t.width=void 0,t.height=void 0;const s="-question-xs";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,r.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},t,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var X=function(n,a){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(n);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(n,t[s])&&(o[t[s]]=n[t[s]]);return o};const B=(0,d.forwardRef)((n,a)=>{var{size:o=24}=n,t=X(n,["size"]);return Number(o)>=20?(0,r.jsx)(R,Object.assign({ref:a,size:o},t)):(0,r.jsx)(Z,Object.assign({ref:a,size:o},t))});var F=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),L=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),K=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const z={S:"s",Xs:"xs"},C={[z.Xs]:16,[z.S]:24},O={Hover:"hover",Click:"click"},N={[O.Hover]:K.tr.HoverAndFocusVisible,[O.Click]:K.tr.ClickAndFocusVisible};var E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),$=e.n(E),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=e.n(G),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(f),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),P=e.n(g),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(H),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),j=e.n(U),k=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),y={};y.styleTagTransform=j(),y.setAttributes=P(),y.insert=T().bind(null,"head"),y.domAPI=m(),y.insertStyleElement=x();var p=$()(k.A,y);const D=k.A&&k.A.locals?k.A.locals:void 0;var h=function(n,a){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(n);s<t.length;s++)a.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(n,t[s])&&(o[t[s]]=n[t[s]]);return o};function c(n){var{size:a=z.Xs,trigger:o=O.Hover,tooltipClassname:t,className:s,open:l,onOpenChange:Y,tabIndex:q=0,triggerSupportProps:J={}}=n,w=h(n,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[Q,ee]=(0,b.iC)(l,!1,Y);return(0,r.jsx)(L.m,Object.assign({},w,{className:t,open:Q,onOpenChange:ee,trigger:N[o],children:({getReferenceProps:I,ref:te})=>(0,r.jsx)("span",Object.assign({},I(),(0,F.z7)(J),{ref:te,"data-size":a,"data-opened":Q,"data-trigger":o,className:_()(D.questionTooltip,s),role:"button",tabIndex:q,children:(0,r.jsx)(B,{size:C[a]})}))}))}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((S,u,e)=>{e.d(u,{m:()=>n});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),v=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(v),b=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),d=e.n(b),i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),M=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),R=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const W=a=>a?a.offsetHeight<a.scrollHeight||a.offsetWidth<a.scrollWidth:!1,A=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],Z="...",X=({text:a,element:o,truncatedElement:t})=>{if(o&&t&&W(o)){const s=o.scrollWidth/a.length;let l=a;for(const{potentialDelimiterWidth:Y,leftHalfDelta:q,rightHalfDelta:J}of A){const w=Math.floor((o.offsetWidth/s-Y)/2),Q=a.slice(0,w-q),ee=a.slice(a.length-w+J,a.length);if(l=`${Q}${Z}${ee}`,t.innerText=l,t.scrollWidth<=o.offsetWidth-1)break}return l}return a};var V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),B=e.n(V),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),L=e.n(F),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),z=e.n(K),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),O=e.n(C),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n(N),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),G=e.n($),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),f={};f.styleTagTransform=G(),f.setAttributes=O(),f.insert=z().bind(null,"head"),f.domAPI=L(),f.insertStyleElement=E();var T=B()(m.A,f);const g=m.A&&m.A.locals?m.A.locals:void 0;var P=function(a,o){var t={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&o.indexOf(s)<0&&(t[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(a);l<s.length;l++)o.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(a,s[l])&&(t[s[l]]=a[s[l]]);return t};function H(a){var{text:o,className:t,tooltipClassName:s,hideTooltip:l,placement:Y}=a,q=P(a,["text","className","tooltipClassName","hideTooltip","placement"]);const[J,w]=(0,i.useState)(!1),[Q,ee]=(0,i.useState)(o),I=(0,i.useRef)(null),te=(0,i.useRef)(null);(0,i.useEffect)(()=>{const se=d()(()=>{ee(X({element:I.current,truncatedElement:te.current,text:o})),w(W(I.current))},50);se();const ne=new ResizeObserver(se);return I.current&&ne.observe(I.current),()=>{ne.disconnect()}},[J,o,l]);const ae=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{ref:I,className:g.fullText,"data-test-id":"full-text",children:o}),(0,r.jsx)("span",{ref:te,className:g.truncatedText,"data-test-id":"truncated-text",children:Q})]});return(0,r.jsx)("span",Object.assign({className:_()(g.wrapper,t)},(0,R.z7)(q),{children:J&&!l?(0,r.jsx)(M.m,{tip:o,placement:Y,hoverDelayOpen:500,triggerClassName:g.textContainer,className:s,children:ae}):ae}))}var x=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),U=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),j={};j.styleTagTransform=G(),j.setAttributes=O(),j.insert=z().bind(null,"head"),j.domAPI=L(),j.insertStyleElement=E();var k=B()(U.A,j);const y=U.A&&U.A.locals?U.A.locals:void 0;var p=function(a,o){var t={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&o.indexOf(s)<0&&(t[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(a);l<s.length;l++)o.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(a,s[l])&&(t[s[l]]=a[s[l]]);return t};function D(a){var{text:o,className:t,tooltipClassName:s,hideTooltip:l,maxLines:Y=1,placement:q}=a,J=p(a,["text","className","tooltipClassName","hideTooltip","maxLines","placement"]);const w=(0,i.useRef)(null),[Q,ee]=(0,i.useState)(!1),I=(0,i.useCallback)(()=>{ee(W(w.current))},[]);(0,x.N)(()=>{w.current&&I()},[o,I]),(0,i.useEffect)(()=>{const ae=d()(()=>{I()},50),se=new ResizeObserver(ae);return w.current&&(I(),se.observe(w.current)),()=>{se.disconnect()}},[Q,l,I]);const te=(0,r.jsx)("span",Object.assign({ref:w,className:_()(Y>1?y.text2AndMoreLines:y.text1Line,t,{[y.ellipsis]:!w.current||Q}),style:{"--max-lines":Y}},(0,R.z7)(J),{children:o}));return Q&&!l?(0,r.jsx)(M.m,{tip:o,placement:q,hoverDelayOpen:500,className:s,triggerClassName:y.tooltipTrigger,children:te}):te}const h={Middle:"middle",End:"end"};var c=function(a,o){var t={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&o.indexOf(s)<0&&(t[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(a);l<s.length;l++)o.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(a,s[l])&&(t[s[l]]=a[s[l]]);return t};function n(a){var{variant:o=h.End}=a,t=c(a,["variant"]);switch(o){case h.Middle:return(0,r.jsx)(H,Object.assign({},t));case h.End:default:return(0,r.jsx)(D,Object.assign({},t))}}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/styles.module.css":((S,u,e)=>{e.d(u,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(r),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),d=b()(v());d.push([S.id,`.container--PUoD0{
  display:inline-flex;
  align-items:center;
  max-width:100%;
}
.container--PUoD0[data-has-background][data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.container--PUoD0[data-has-background][data-appearance=primary] .label--vpuah{
  color:var(--sys-primary-text-support, #358561);
}
.container--PUoD0[data-has-background][data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--PUoD0[data-has-background][data-appearance=neutral] .label--vpuah{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--PUoD0[data-has-background][data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--PUoD0[data-has-background][data-appearance=red] .label--vpuah{
  color:var(--sys-red-text-support, #ae514c);
}
.container--PUoD0[data-has-background][data-appearance=orange]{
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.container--PUoD0[data-has-background][data-appearance=orange] .label--vpuah{
  color:var(--sys-orange-text-support, #bb733e);
}
.container--PUoD0[data-has-background][data-appearance=blue]{
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.container--PUoD0[data-has-background][data-appearance=blue] .label--vpuah{
  color:var(--sys-blue-text-support, #4877b0);
}
.container--PUoD0[data-has-background][data-appearance=violet]{
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.container--PUoD0[data-has-background][data-appearance=violet] .label--vpuah{
  color:var(--sys-violet-text-support, #8c639b);
}
.container--PUoD0[data-has-background][data-appearance=pink]{
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.container--PUoD0[data-has-background][data-appearance=pink] .label--vpuah{
  color:var(--sys-pink-text-support, #ae5e80);
}
.container--PUoD0[data-has-background][data-appearance=yellow]{
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.container--PUoD0[data-has-background][data-appearance=yellow] .label--vpuah{
  color:var(--sys-yellow-text-support, #b78c32);
}
.container--PUoD0[data-has-background][data-appearance=green]{
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.container--PUoD0[data-has-background][data-appearance=green] .label--vpuah{
  color:var(--sys-green-text-support, #55915a);
}
.container--PUoD0[data-has-background][data-size=xs]{
  height:var(--size-status-background-container-xs, 16px);
  padding-right:var(--spacing-status-background-container-padding-right-xs, 4px);
  padding-left:var(--spacing-status-background-container-padding-left-xs, 4px);
  gap:var(--spacing-status-container-gap-single, 2px);
  border-radius:var(--radius-status-xs, 2px);
}
.container--PUoD0[data-has-background][data-size=s]{
  height:var(--size-status-background-container-s, 24px);
  padding-right:var(--spacing-status-background-container-padding-right-s, 8px);
  padding-left:var(--spacing-status-background-container-padding-left-s, 4px);
  gap:var(--spacing-status-container-gap-single, 2px);
  border-radius:var(--radius-status-s, 4px);
}
.container--PUoD0[data-size=xs]{
  gap:var(--spacing-status-container-gap-single, 2px);
}
.container--PUoD0[data-size=xs] .label--vpuah{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.container--PUoD0[data-size=s]{
  gap:var(--spacing-status-container-gap-single, 2px);
}
.container--PUoD0[data-size=s] .label--vpuah{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}

.label--vpuah{
  color:var(--sys-neutral-text-support, #6d707f);
}`,""]),d.locals={container:"container--PUoD0",label:"label--vpuah"};const i=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((S,u,e)=>{e.d(u,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(r),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),d=b()(v());d.push([S.id,`.container--WkeRy{
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.container--WkeRy[data-size=xxs]{
  width:var(--size-status-indicator-container-xxs, 4px);
  height:var(--size-status-indicator-container-xxs, 4px);
}
.container--WkeRy[data-size=xxs] .indicator--ew8wz{
  border-radius:var(--radius-status-indicator-xxs, 2px);
  border-width:var(--border-width-general-xxs, 0.5px);
  width:var(--size-status-indicator-xxs, 4px);
  height:var(--size-status-indicator-xxs, 4px);
}
.container--WkeRy[data-size=xs]{
  width:var(--size-status-indicator-container-xs, 8px);
  height:var(--size-status-indicator-container-xs, 8px);
}
.container--WkeRy[data-size=xs] .indicator--ew8wz{
  border-radius:var(--radius-status-indicator-xs, 4px);
  border-width:var(--border-width-general-s, 1.5px);
  width:var(--size-status-indicator-xs, 8px);
  height:var(--size-status-indicator-xs, 8px);
}
.container--WkeRy[data-size=s]{
  width:var(--size-status-indicator-container-s, 16px);
  height:var(--size-status-indicator-container-s, 16px);
}
.container--WkeRy[data-size=s] .indicator--ew8wz{
  border-radius:var(--radius-status-indicator-s, 8px);
  border-width:var(--border-width-general-m, 2px);
  width:var(--size-status-indicator-s, 12px);
  height:var(--size-status-indicator-s, 12px);
}
.container--WkeRy[data-size=m]{
  width:var(--size-status-indicator-container-m, 16px);
  height:var(--size-status-indicator-container-m, 16px);
}
.container--WkeRy[data-size=m] .indicator--ew8wz{
  border-radius:var(--radius-status-indicator-m, 8px);
  border-width:var(--border-width-general-l, 3px);
  width:var(--size-status-indicator-m, 16px);
  height:var(--size-status-indicator-m, 16px);
}
.container--WkeRy[data-size=l]{
  width:var(--size-status-indicator-container-l, 24px);
  height:var(--size-status-indicator-container-l, 24px);
}
.container--WkeRy[data-size=l] .indicator--ew8wz{
  border-radius:var(--radius-status-indicator-l, 16px);
  border-width:var(--border-width-general-xl, 4px);
  width:var(--size-status-indicator-l, 24px);
  height:var(--size-status-indicator-l, 24px);
}

.indicator--ew8wz{
  box-sizing:border-box;
  border:0 solid var(--sys-neutral-background1-level, #fdfdfd);
}
.indicator--ew8wz[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.indicator--ew8wz[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.indicator--ew8wz[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.indicator--ew8wz[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.indicator--ew8wz[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.indicator--ew8wz[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.indicator--ew8wz[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.indicator--ew8wz[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.indicator--ew8wz[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),d.locals={container:"container--WkeRy",indicator:"indicator--ew8wz"};const i=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/styles.module.css":((S,u,e)=>{e.d(u,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(r),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),d=b()(v());d.push([S.id,`.container--Giqgp{
  display:inline-flex;
  align-items:center;
  max-width:100%;
}
.container--Giqgp[data-has-background][data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.container--Giqgp[data-has-background][data-appearance=primary] .label--vasBc{
  color:var(--sys-primary-text-support, #358561);
}
.container--Giqgp[data-has-background][data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--Giqgp[data-has-background][data-appearance=neutral] .label--vasBc{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--Giqgp[data-has-background][data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--Giqgp[data-has-background][data-appearance=red] .label--vasBc{
  color:var(--sys-red-text-support, #ae514c);
}
.container--Giqgp[data-has-background][data-appearance=orange]{
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.container--Giqgp[data-has-background][data-appearance=orange] .label--vasBc{
  color:var(--sys-orange-text-support, #bb733e);
}
.container--Giqgp[data-has-background][data-appearance=blue]{
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.container--Giqgp[data-has-background][data-appearance=blue] .label--vasBc{
  color:var(--sys-blue-text-support, #4877b0);
}
.container--Giqgp[data-has-background][data-appearance=violet]{
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.container--Giqgp[data-has-background][data-appearance=violet] .label--vasBc{
  color:var(--sys-violet-text-support, #8c639b);
}
.container--Giqgp[data-has-background][data-appearance=pink]{
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.container--Giqgp[data-has-background][data-appearance=pink] .label--vasBc{
  color:var(--sys-pink-text-support, #ae5e80);
}
.container--Giqgp[data-has-background][data-appearance=yellow]{
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.container--Giqgp[data-has-background][data-appearance=yellow] .label--vasBc{
  color:var(--sys-yellow-text-support, #b78c32);
}
.container--Giqgp[data-has-background][data-appearance=green]{
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.container--Giqgp[data-has-background][data-appearance=green] .label--vasBc{
  color:var(--sys-green-text-support, #55915a);
}
.container--Giqgp[data-has-background][data-size=xs]{
  height:var(--size-status-background-container-xs, 16px);
  padding-right:var(--spacing-status-background-container-padding-right-xs, 4px);
  padding-left:var(--spacing-status-background-container-padding-left-xs, 4px);
  gap:var(--spacing-status-container-gap-single, 2px);
  border-radius:var(--radius-status-xs, 2px);
}
.container--Giqgp[data-has-background][data-size=s]{
  height:var(--size-status-background-container-s, 24px);
  padding-right:var(--spacing-status-background-container-padding-right-s, 8px);
  padding-left:var(--spacing-status-background-container-padding-left-s, 4px);
  gap:var(--spacing-status-container-gap-single, 2px);
  border-radius:var(--radius-status-s, 4px);
}
.container--Giqgp[data-size=xs]{
  gap:var(--spacing-status-container-gap-single, 2px);
}
.container--Giqgp[data-size=xs] .label--vasBc{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.container--Giqgp[data-size=s]{
  gap:var(--spacing-status-container-gap-single, 2px);
}
.container--Giqgp[data-size=s] .label--vasBc{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}

.label--vasBc{
  color:var(--sys-neutral-text-support, #6d707f);
}`,""]),d.locals={container:"container--Giqgp",label:"label--vasBc"};const i=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((S,u,e)=>{e.d(u,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(r),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),d=b()(v());d.push([S.id,`.container--GmOEt{
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.container--GmOEt[data-size=xxs]{
  width:var(--size-status-indicator-container-xxs, 4px);
  height:var(--size-status-indicator-container-xxs, 4px);
}
.container--GmOEt[data-size=xxs] .indicator--usUD9{
  border-radius:var(--radius-status-indicator-xxs, 2px);
  border-width:var(--border-width-general-xxs, 0.5px);
  width:var(--size-status-indicator-xxs, 4px);
  height:var(--size-status-indicator-xxs, 4px);
}
.container--GmOEt[data-size=xs]{
  width:var(--size-status-indicator-container-xs, 8px);
  height:var(--size-status-indicator-container-xs, 8px);
}
.container--GmOEt[data-size=xs] .indicator--usUD9{
  border-radius:var(--radius-status-indicator-xs, 4px);
  border-width:var(--border-width-general-s, 1.5px);
  width:var(--size-status-indicator-xs, 8px);
  height:var(--size-status-indicator-xs, 8px);
}
.container--GmOEt[data-size=s]{
  width:var(--size-status-indicator-container-s, 16px);
  height:var(--size-status-indicator-container-s, 16px);
}
.container--GmOEt[data-size=s] .indicator--usUD9{
  border-radius:var(--radius-status-indicator-s, 8px);
  border-width:var(--border-width-general-m, 2px);
  width:var(--size-status-indicator-s, 12px);
  height:var(--size-status-indicator-s, 12px);
}
.container--GmOEt[data-size=m]{
  width:var(--size-status-indicator-container-m, 16px);
  height:var(--size-status-indicator-container-m, 16px);
}
.container--GmOEt[data-size=m] .indicator--usUD9{
  border-radius:var(--radius-status-indicator-m, 8px);
  border-width:var(--border-width-general-l, 3px);
  width:var(--size-status-indicator-m, 16px);
  height:var(--size-status-indicator-m, 16px);
}
.container--GmOEt[data-size=l]{
  width:var(--size-status-indicator-container-l, 24px);
  height:var(--size-status-indicator-container-l, 24px);
}
.container--GmOEt[data-size=l] .indicator--usUD9{
  border-radius:var(--radius-status-indicator-l, 16px);
  border-width:var(--border-width-general-xl, 4px);
  width:var(--size-status-indicator-l, 24px);
  height:var(--size-status-indicator-l, 24px);
}

.indicator--usUD9{
  box-sizing:border-box;
  border:0 solid var(--sys-neutral-background1-level, #fdfdfd);
}
.indicator--usUD9[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.indicator--usUD9[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.indicator--usUD9[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.indicator--usUD9[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.indicator--usUD9[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.indicator--usUD9[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.indicator--usUD9[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.indicator--usUD9[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.indicator--usUD9[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),d.locals={container:"container--GmOEt",indicator:"indicator--usUD9"};const i=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css":((S,u,e)=>{e.d(u,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(r),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),d=b()(v());d.push([S.id,`.questionTooltip--DxuzD{
  cursor:pointer;
  display:inline-flex;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background:none;
  border:0;
}
.questionTooltip--DxuzD:hover{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.questionTooltip--DxuzD:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.questionTooltip--DxuzD[data-trigger=click][data-opened=true]{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--DxuzD[data-trigger=click]:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--DxuzD[data-trigger=click]:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--DxuzD[data-trigger=click]:focus-visible{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--DxuzD[data-size=xs] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.questionTooltip--DxuzD[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}`,""]),d.locals={questionTooltip:"questionTooltip--DxuzD"};const i=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((S,u,e)=>{e.d(u,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(r),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),d=b()(v());d.push([S.id,`.text1Line--mTWX0{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--I9bny{
  text-overflow:ellipsis;
}

.text2AndMoreLines--NgqBb{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--ZD73L{
  display:grid;
}`,""]),d.locals={text1Line:"text1Line--mTWX0",ellipsis:"ellipsis--I9bny",text2AndMoreLines:"text2AndMoreLines--NgqBb",tooltipTrigger:"tooltipTrigger--ZD73L"};const i=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((S,u,e)=>{e.d(u,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(r),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),d=b()(v());d.push([S.id,`.wrapper--O7epi{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--ewHRV{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--o7Tur{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--tTWtT{
  display:inline-flex;
}`,""]),d.locals={wrapper:"wrapper--O7epi",truncatedText:"truncatedText--ewHRV",fullText:"fullText--o7Tur",textContainer:"textContainer--tTWtT"};const i=d})}]);})();
