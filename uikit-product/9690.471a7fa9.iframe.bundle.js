"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9690],{"./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((S,y,e)=>{e.d(y,{e:()=>q});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(_),b=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const p={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},U={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=e.n(N),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=e.n(H),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),c=e.n(s),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),t=e.n(o),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=e.n(n),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Y=e.n(K),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.8.1_react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),L={};L.styleTagTransform=Y(),L.setAttributes=t(),L.insert=c().bind(null,"head"),L.domAPI=B(),L.insertStyleElement=D();var V=T()(w.A,L);const O=w.A&&w.A.locals?w.A.locals:void 0;var C=function(h,M){var P={};for(var a in h)Object.prototype.hasOwnProperty.call(h,a)&&M.indexOf(a)<0&&(P[a]=h[a]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(h);i<a.length;i++)M.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(h,a[i])&&(P[a[i]]=h[a[i]]);return P};function v(h){var{size:M=U.M,appearance:P=p.Primary,className:a}=h,i=C(h,["size","appearance","className"]);return(0,r.jsx)("div",Object.assign({className:m()(O.container,a)},(0,l.z7)(i),{"data-size":M,children:(0,r.jsx)("div",{className:O.indicator,"data-appearance":P})}))}const x={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},f={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},j={Round:"round",Square:"square"};var E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),R={};R.styleTagTransform=Y(),R.setAttributes=t(),R.insert=c().bind(null,"head"),R.domAPI=B(),R.insertStyleElement=D();var z=T()(E.A,R);const A=E.A&&E.A.locals?E.A.locals:void 0,k=" ",I=(h,M)=>{var P;const a=h.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!a||a.length<M)return a.toUpperCase();const i=a.split(k);let g=a;if(i.length>1){const d=i[0].charAt(0),u=(P=i[i.length-1])===null||P===void 0?void 0:P.charAt(0);g=`${d}${u}`.toUpperCase()}return g.slice(0,M).toUpperCase()};var W=function(h,M){var P={};for(var a in h)Object.prototype.hasOwnProperty.call(h,a)&&M.indexOf(a)<0&&(P[a]=h[a]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(h);i<a.length;i++)M.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(h,a[i])&&(P[a[i]]=h[a[i]]);return P};const J={[f.Xxs]:"xxs",[f.Xs]:"xs",[f.S]:"xs",[f.M]:"m",[f.L]:"m",[f.Xl]:"l",[f.Xxl]:"l"};function q(h){var{name:M,appearance:P=x.Red,size:a=f.S,shape:i=j.Round,indicator:g,showTwoSymbols:d,src:u,className:$}=h,G=W(h,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[Z,F]=(0,b.useState)(!1),Q=a!==f.Xxs&&d?2:1;return(0,b.useEffect)(()=>{F(!1)},[u]),(0,r.jsxs)("div",Object.assign({className:m()(A.avatar,$)},(0,l.z7)(G),{"data-size":a,"data-appearance":P,"data-shape":i,children:[u&&!Z?(0,r.jsx)("img",{"data-test-id":"image",className:A.image,src:u,onError:()=>F(!0),alt:""}):(0,r.jsx)("div",{"data-test-id":"abbreviation",children:I(M,Q)}),g&&(0,r.jsx)("div",{className:A.indicatorWrapper,children:(0,r.jsx)(v,{"data-test-id":"indicator",appearance:g,size:J[a]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js":((S,y,e)=>{e.d(y,{p:()=>R});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(_),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const l={Primary:"primary",Neutral:"neutral",Red:"red"},p={Count:"count",CountPlus:"count-plus",CountK:"count-k"},U={S:"s",M:"m"},N={Accent:"accent",Decor:"decor"},T=10,H=1e3,B="K";var s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(s),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),t=e.n(o),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=e.n(n),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Y=e.n(K),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),L=e.n(w),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),O=e.n(V),C=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),v={};v.styleTagTransform=O(),v.setAttributes=Y(),v.insert=D().bind(null,"head"),v.domAPI=t(),v.insertStyleElement=L();var x=c()(C.A,v);const f=C.A&&C.A.locals?C.A.locals:void 0;function j({value:z,variant:A,plusLimit:k}){if(A===p.Count)return z;if(A===p.CountPlus)return z<k?z:(0,r.jsxs)(r.Fragment,{children:[k-1,(0,r.jsx)("span",{className:f.plus,children:"+"})]});if(A===p.CountK)return z<H?z:(0,r.jsxs)(r.Fragment,{children:[Math.round(z/H),(0,r.jsx)("span",{className:f.key,children:B})]})}var E=function(z,A){var k={};for(var I in z)Object.prototype.hasOwnProperty.call(z,I)&&A.indexOf(I)<0&&(k[I]=z[I]);if(z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var W=0,I=Object.getOwnPropertySymbols(z);W<I.length;W++)A.indexOf(I[W])<0&&Object.prototype.propertyIsEnumerable.call(z,I[W])&&(k[I[W]]=z[I[W]]);return k};function R(z){var{value:A,appearance:k=l.Primary,variant:I=p.Count,size:W=U.S,plusLimit:J=T,color:q=N.Accent,className:h}=z,M=E(z,["value","appearance","variant","size","plusLimit","color","className"]);const P=j({value:A,variant:I,plusLimit:J});return(0,r.jsx)("div",Object.assign({className:m()(f.counter,h)},(0,b.z7)(M),{"data-size":W,"data-variant":I,"data-appearance":k,"data-color":q,children:P}))}}),"./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.3_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js":((S,y,e)=>{e.d(y,{I:()=>C});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(_),b=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const l={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},p={S:"s",M:"m",L:"l"};var U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(U),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),H=e.n(T),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),s=e.n(B),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=e.n(c),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),n=e.n(t),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(D),Y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.3_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/styles.module.css"),w={};w.styleTagTransform=K(),w.setAttributes=o(),w.insert=s().bind(null,"head"),w.domAPI=H(),w.insertStyleElement=n();var L=N()(Y.A,w);const V=Y.A&&Y.A.locals?Y.A.locals:void 0;var O=function(v,x){var f={};for(var j in v)Object.prototype.hasOwnProperty.call(v,j)&&x.indexOf(j)<0&&(f[j]=v[j]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,j=Object.getOwnPropertySymbols(v);E<j.length;E++)x.indexOf(j[E])<0&&Object.prototype.propertyIsEnumerable.call(v,j[E])&&(f[j[E]]=v[j[E]]);return f};function C(v){var{className:x,decor:f=!0,size:j=p.M,icon:E,appearance:R=l.Primary,shape:z="round"}=v,A=O(v,["className","decor","size","icon","appearance","shape"]);return(0,r.jsx)("div",Object.assign({className:m()(V.decor,x)},(0,b.z7)(A),{"data-size":j,"data-decor":f||void 0,"data-appearance":R,"data-shape":z,children:(0,r.jsx)(E,{"data-size":j,"data-appearance":R,className:V.icon})}))}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js":((S,y,e)=>{e.d(y,{A:()=>B});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=function(s,c){var o={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&c.indexOf(t)<0&&(o[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)c.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(o[t[n]]=s[t[n]]);return o};const l=_.forwardRef((s,c)=>{var{size:o=24}=s,t=m(s,["size"]);t.width=void 0,t.height=void 0;const n="-chevron-right-s";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,r.jsx)("svg",Object.assign({ref:c,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var p=function(s,c){var o={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&c.indexOf(t)<0&&(o[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)c.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(o[t[n]]=s[t[n]]);return o};const N=_.forwardRef((s,c)=>{var{size:o=24}=s,t=p(s,["size"]);t.width=void 0,t.height=void 0;const n="-chevron-right-xs";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,r.jsx)("svg",Object.assign({ref:c,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var T=function(s,c){var o={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&c.indexOf(t)<0&&(o[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)c.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(o[t[n]]=s[t[n]]);return o};const B=(0,_.forwardRef)((s,c)=>{var{size:o=24}=s,t=T(s,["size"]);return Number(o)>=20?(0,r.jsx)(l,Object.assign({ref:c,size:o},t)):(0,r.jsx)(N,Object.assign({ref:c,size:o},t))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/placeholder/index.js":((S,y,e)=>{e.d(y,{A:()=>B});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=function(s,c){var o={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&c.indexOf(t)<0&&(o[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)c.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(o[t[n]]=s[t[n]]);return o};const l=_.forwardRef((s,c)=>{var{size:o=24}=s,t=m(s,["size"]);t.width=void 0,t.height=void 0;const n="-placeholder-s";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,r.jsx)("svg",Object.assign({ref:c,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var p=function(s,c){var o={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&c.indexOf(t)<0&&(o[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)c.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(o[t[n]]=s[t[n]]);return o};const N=_.forwardRef((s,c)=>{var{size:o=24}=s,t=p(s,["size"]);t.width=void 0,t.height=void 0;const n="-placeholder-xs";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,r.jsx)("svg",Object.assign({ref:c,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var T=function(s,c){var o={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&c.indexOf(t)<0&&(o[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)c.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(o[t[n]]=s[t[n]]);return o};const B=(0,_.forwardRef)((s,c)=>{var{size:o=24}=s,t=T(s,["size"]);return Number(o)>=20?(0,r.jsx)(l,Object.assign({ref:c,size:o},t)):(0,r.jsx)(N,Object.assign({ref:c,size:o},t))})}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js":((S,y,e)=>{e.d(y,{m:()=>V});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),m=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const b=[m.El.Top,m.El.Right,m.El.Bottom,m.El.Left];var l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(l),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),N=e.n(U),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=e.n(T),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),s=e.n(B),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),o=e.n(c),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),n=e.n(t),D=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),K={};K.styleTagTransform=n(),K.setAttributes=s(),K.insert=H().bind(null,"head"),K.domAPI=N(),K.insertStyleElement=o();var Y=p()(D.A,K);const w=D.A&&D.A.locals?D.A.locals:void 0;var L=function(O,C){var v={};for(var x in O)Object.prototype.hasOwnProperty.call(O,x)&&C.indexOf(x)<0&&(v[x]=O[x]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,x=Object.getOwnPropertySymbols(O);f<x.length;f++)C.indexOf(x[f])<0&&Object.prototype.propertyIsEnumerable.call(O,x[f])&&(v[x[f]]=O[x[f]]);return v};function V(O){var{tip:C,trigger:v="hoverAndFocusVisible",placement:x="top",children:f,triggerRef:j,disableMaxWidth:E=!1}=O,R=L(O,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!f&&!j?null:(0,r.jsx)(_.Z,Object.assign({placement:x,popoverContent:(0,r.jsx)("div",{className:w.tooltipContainer,"data-disable-max-width":E,children:C}),trigger:v,triggerRef:j,arrowContainerClassName:w.tooltipArrowContainer,arrowElementClassName:w.tooltipArrowElement,hasArrow:!0,fallbackPlacements:b},R,{children:f}))}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((S,y,e)=>{e.d(y,{m:()=>P});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(_),b=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),l=e.n(b),p=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),U=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),N=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const T=a=>a?a.offsetHeight<a.scrollHeight||a.offsetWidth<a.scrollWidth:!1,H=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],B="...",s=({text:a,element:i,truncatedElement:g})=>{if(i&&g&&T(i)){const d=i.scrollWidth/a.length;let u=a;for(const{potentialDelimiterWidth:$,leftHalfDelta:G,rightHalfDelta:Z}of H){const F=Math.floor((i.offsetWidth/d-$)/2),Q=a.slice(0,F-G),X=a.slice(a.length-F+Z,a.length);if(u=`${Q}${B}${X}`,g.innerHTML=u,g.scrollWidth<=i.offsetWidth-1)break}return u}return a};var c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(c),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=e.n(t),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),K=e.n(D),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),w=e.n(Y),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),V=e.n(L),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(O),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),x={};x.styleTagTransform=C(),x.setAttributes=w(),x.insert=K().bind(null,"head"),x.domAPI=n(),x.insertStyleElement=V();var f=o()(v.A,x);const j=v.A&&v.A.locals?v.A.locals:void 0;var E=function(a,i){var g={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&i.indexOf(d)<0&&(g[d]=a[d]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,d=Object.getOwnPropertySymbols(a);u<d.length;u++)i.indexOf(d[u])<0&&Object.prototype.propertyIsEnumerable.call(a,d[u])&&(g[d[u]]=a[d[u]]);return g};function R(a){var{text:i,className:g,hideTooltip:d,placement:u}=a,$=E(a,["text","className","hideTooltip","placement"]);const[G,Z]=(0,p.useState)(!1),[F,Q]=(0,p.useState)(i),X=(0,p.useRef)(null),ee=(0,p.useRef)(null);(0,p.useEffect)(()=>{const te=l()(()=>{Q(s({element:X.current,truncatedElement:ee.current,text:i})),Z(T(X.current))},50);te();const se=new ResizeObserver(te);return X.current&&se.observe(X.current),()=>{se.disconnect()}},[G,i,d]);const ae=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{ref:X,className:j.fullText,children:i}),(0,r.jsx)("span",{ref:ee,className:j.truncatedText,"data-test-id":"truncated-text",children:F})]});return(0,r.jsx)("span",Object.assign({className:m()(j.wrapper,g)},(0,N.z7)($),{children:G&&!d?(0,r.jsx)(U.m,{tip:i,placement:u,hoverDelayOpen:500,triggerClassName:j.textContainer,children:ae}):ae}))}var z=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),k={};k.styleTagTransform=C(),k.setAttributes=w(),k.insert=K().bind(null,"head"),k.domAPI=n(),k.insertStyleElement=V();var I=o()(A.A,k);const W=A.A&&A.A.locals?A.A.locals:void 0;var J=function(a,i){var g={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&i.indexOf(d)<0&&(g[d]=a[d]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,d=Object.getOwnPropertySymbols(a);u<d.length;u++)i.indexOf(d[u])<0&&Object.prototype.propertyIsEnumerable.call(a,d[u])&&(g[d[u]]=a[d[u]]);return g};function q(a){var{text:i,className:g,hideTooltip:d,maxLines:u=1,placement:$}=a,G=J(a,["text","className","hideTooltip","maxLines","placement"]);const Z=(0,p.useRef)(null),[F,Q]=(0,p.useState)(!1),X=(0,p.useCallback)(()=>{Q(T(Z.current))},[]);(0,z.N)(()=>{Z.current&&X()},[i,X]),(0,p.useEffect)(()=>{const ae=l()(()=>{X()},50),te=new ResizeObserver(ae);return Z.current&&(X(),te.observe(Z.current)),()=>{te.disconnect()}},[F,d,X]);const ee=(0,r.jsx)("span",Object.assign({ref:Z,className:m()(u>1?W.text2AndMoreLines:W.text1Line,g,{[W.ellipsis]:!Z.current||F}),style:{"--max-lines":u}},(0,N.z7)(G),{children:i}));return F&&!d?(0,r.jsx)(U.m,{tip:i,placement:$,hoverDelayOpen:500,triggerClassName:W.tooltipTrigger,children:ee}):ee}const h={Middle:"middle",End:"end"};var M=function(a,i){var g={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&i.indexOf(d)<0&&(g[d]=a[d]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,d=Object.getOwnPropertySymbols(a);u<d.length;u++)i.indexOf(d[u])<0&&Object.prototype.propertyIsEnumerable.call(a,d[u])&&(g[d[u]]=a[d[u]]);return g};function P(a){var{variant:i=h.End}=a,g=M(a,["variant"]);switch(i){case h.Middle:return(0,r.jsx)(R,Object.assign({},g));case h.End:default:return(0,r.jsx)(q,Object.assign({},g))}}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((S,y,e)=>{e.d(y,{A:()=>p});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(r),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),l=b()(_());l.push([S.id,`.avatar--YNdDD{
  position:relative;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.avatar--YNdDD[data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.avatar--YNdDD[data-appearance=orange]{
  color:var(--sys-orange-text-main, #884c23);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.avatar--YNdDD[data-appearance=yellow]{
  color:var(--sys-yellow-text-main, #815f19);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.avatar--YNdDD[data-appearance=green]{
  color:var(--sys-green-text-main, #3d6035);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.avatar--YNdDD[data-appearance=blue]{
  color:var(--sys-blue-text-main, #2b537e);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.avatar--YNdDD[data-appearance=violet]{
  color:var(--sys-violet-text-main, #59446a);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.avatar--YNdDD[data-appearance=pink]{
  color:var(--sys-pink-text-main, #754158);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.avatar--YNdDD[data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.avatar--YNdDD[data-size=xxs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--YNdDD[data-size=xxs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxs, 8px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--YNdDD[data-size=xxs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxs, 4px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--YNdDD[data-size=xs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--YNdDD[data-size=xs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xs, 16px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--YNdDD[data-size=xs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xs, 4px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--YNdDD[data-size=s]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.avatar--YNdDD[data-size=s][data-shape=round]{
  border-radius:var(--radius-avatar-round-s, 24px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--YNdDD[data-size=s][data-shape=square]{
  border-radius:var(--radius-avatar-square-s, 4px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--YNdDD[data-size=m]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.avatar--YNdDD[data-size=m][data-shape=round]{
  border-radius:var(--radius-avatar-round-m, 24px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--YNdDD[data-size=m][data-shape=square]{
  border-radius:var(--radius-avatar-square-m, 8px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--YNdDD[data-size=l]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.avatar--YNdDD[data-size=l][data-shape=round]{
  border-radius:var(--radius-avatar-round-l, 32px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--YNdDD[data-size=l][data-shape=square]{
  border-radius:var(--radius-avatar-square-l, 16px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--YNdDD[data-size=xl]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.avatar--YNdDD[data-size=xl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xl, 48px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--YNdDD[data-size=xl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xl, 24px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--YNdDD[data-size=xxl]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.avatar--YNdDD[data-size=xxl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxl, 64px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}
.avatar--YNdDD[data-size=xxl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxl, 24px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}

.image--mirqR{
  width:100%;
  height:100%;
  -o-object-fit:cover;
     object-fit:cover;
  -o-object-position:center;
     object-position:center;
  border-radius:inherit;
}

.indicatorWrapper--Hh27C{
  position:absolute;
  right:0;
  bottom:0;
  display:inline-flex;
}`,""]),l.locals={avatar:"avatar--YNdDD",image:"image--mirqR",indicatorWrapper:"indicatorWrapper--Hh27C"};const p=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css":((S,y,e)=>{e.d(y,{A:()=>p});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(r),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),l=b()(_());l.push([S.id,`.counter--X66vA{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  border:0 solid transparent;
}
.counter--X66vA[data-color=accent][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=accent][data-appearance=neutral]{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-accent-default, #787b8a);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=accent][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
  background-color:var(--sys-red-accent-default, #cb3f3e);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=decor][data-appearance=primary]{
  color:var(--sys-primary-text-main, #1b5840);
  background-color:var(--sys-primary-decor-default, #caeadb);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=decor][data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=decor][data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-size=s]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
  border-radius:var(--radius-counter-s, 8px);
  height:var(--size-counter-s-height, 16px);
  min-width:var(--size-counter-s-minimal-width, 16px);
  padding-right:var(--space-counter-s, 2.5px);
  padding-left:var(--space-counter-s, 2.5px);
  border-width:var(--border-width-counter-single, 1.5px);
}
.counter--X66vA[data-size=s] .plus--hs8PR{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--X66vA[data-size=s] .key--zBbeI{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.counter--X66vA[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
  border-radius:var(--radius-counter-m, 16px);
  height:var(--size-counter-m-height, 24px);
  min-width:var(--size-counter-m-minimal-width, 24px);
  padding-right:var(--space-counter-m, 4.5px);
  padding-left:var(--space-counter-m, 4.5px);
  border-width:var(--border-width-counter-single, 1.5px);
}
.counter--X66vA[data-size=m] .plus--hs8PR{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--X66vA[data-size=m] .key--zBbeI{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}`,""]),l.locals={counter:"counter--X66vA",plus:"plus--hs8PR",key:"key--zBbeI"};const p=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.3_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/styles.module.css":((S,y,e)=>{e.d(y,{A:()=>p});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(r),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),l=b()(_());l.push([S.id,`.decor--pyZKn{
  overflow:hidden;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.decor--pyZKn[data-decor][data-appearance=primary]{
  color:var(--sys-primary-accent-default, #794ed3);
  background-color:var(--sys-primary-decor-default, #ebdefd);
}
.decor--pyZKn[data-decor][data-appearance=neutral]{
  color:var(--sys-neutral-accent-default, #787b8a);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.decor--pyZKn[data-decor][data-appearance=red]{
  color:var(--sys-red-accent-default, #cb3f3e);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.decor--pyZKn[data-decor][data-appearance=orange]{
  color:var(--sys-orange-accent-default, #fb8e42);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.decor--pyZKn[data-decor][data-appearance=yellow]{
  color:var(--sys-yellow-accent-default, #e2b134);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.decor--pyZKn[data-decor][data-appearance=green]{
  color:var(--sys-green-accent-default, #57b762);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.decor--pyZKn[data-decor][data-appearance=blue]{
  color:var(--sys-blue-accent-default, #5388d1);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.decor--pyZKn[data-decor][data-appearance=violet]{
  color:var(--sys-violet-accent-default, #aa6cc1);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.decor--pyZKn[data-decor][data-appearance=pink]{
  color:var(--sys-pink-accent-default, #d1668e);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.decor--pyZKn[data-size=s][data-shape=round]{
  width:var(--size-icon-predefined-container-s, 32px);
  height:var(--size-icon-predefined-container-s, 32px);
  border-radius:var(--radius-icon-predefined-decor-round-s, 16px);
}
.decor--pyZKn[data-size=s][data-shape=square]{
  width:var(--size-icon-predefined-container-s, 32px);
  height:var(--size-icon-predefined-container-s, 32px);
  border-radius:var(--radius-icon-predefined-decor-square-s, 8px);
}
.decor--pyZKn[data-size=m][data-shape=round]{
  width:var(--size-icon-predefined-container-m, 40px);
  height:var(--size-icon-predefined-container-m, 40px);
  border-radius:var(--radius-icon-predefined-decor-round-m, 24px);
}
.decor--pyZKn[data-size=m][data-shape=square]{
  width:var(--size-icon-predefined-container-m, 40px);
  height:var(--size-icon-predefined-container-m, 40px);
  border-radius:var(--radius-icon-predefined-decor-square-m, 12px);
}
.decor--pyZKn[data-size=l][data-shape=round]{
  width:var(--size-icon-predefined-container-l, 80px);
  height:var(--size-icon-predefined-container-l, 80px);
  border-radius:var(--radius-icon-predefined-decor-round-l, 40px);
}
.decor--pyZKn[data-size=l][data-shape=square]{
  width:var(--size-icon-predefined-container-l, 80px);
  height:var(--size-icon-predefined-container-l, 80px);
  border-radius:var(--radius-icon-predefined-decor-square-l, 20px);
}

.icon--Kt00e,
.icon--Kt00e svg{
  fill:currentColor;
}
.icon--Kt00e[data-appearance=primary]{
  color:var(--sys-primary-accent-default, #794ed3);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=neutral]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=red]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=orange]{
  color:var(--sys-orange-accent-default, #fb8e42);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=yellow]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=green]{
  color:var(--sys-green-accent-default, #57b762);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=blue]{
  color:var(--sys-blue-accent-default, #5388d1);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=violet]{
  color:var(--sys-violet-accent-default, #aa6cc1);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=pink]{
  color:var(--sys-pink-accent-default, #d1668e);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=yellow]{
  color:var(--sys-yellow-text-light, #d3a736);
}`,""]),l.locals={decor:"decor--pyZKn",icon:"icon--Kt00e"};const p=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.8.1_react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((S,y,e)=>{e.d(y,{A:()=>p});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(r),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),l=b()(_());l.push([S.id,`.container--r6DW8{
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.container--r6DW8[data-size=xxs]{
  width:var(--size-status-indicator-container-xxs, 4px);
  height:var(--size-status-indicator-container-xxs, 4px);
}
.container--r6DW8[data-size=xxs] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-xxs, 2px);
  border-width:var(--border-width-general-xxs, 0.5px);
  width:var(--size-status-indicator-xxs, 4px);
  height:var(--size-status-indicator-xxs, 4px);
}
.container--r6DW8[data-size=xs]{
  width:var(--size-status-indicator-container-xs, 8px);
  height:var(--size-status-indicator-container-xs, 8px);
}
.container--r6DW8[data-size=xs] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-xs, 4px);
  border-width:var(--border-width-general-s, 1.5px);
  width:var(--size-status-indicator-xs, 8px);
  height:var(--size-status-indicator-xs, 8px);
}
.container--r6DW8[data-size=s]{
  width:var(--size-status-indicator-container-s, 16px);
  height:var(--size-status-indicator-container-s, 16px);
}
.container--r6DW8[data-size=s] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-s, 8px);
  border-width:var(--border-width-general-m, 2px);
  width:var(--size-status-indicator-s, 12px);
  height:var(--size-status-indicator-s, 12px);
}
.container--r6DW8[data-size=m]{
  width:var(--size-status-indicator-container-m, 16px);
  height:var(--size-status-indicator-container-m, 16px);
}
.container--r6DW8[data-size=m] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-m, 8px);
  border-width:var(--border-width-general-l, 3px);
  width:var(--size-status-indicator-m, 16px);
  height:var(--size-status-indicator-m, 16px);
}
.container--r6DW8[data-size=l]{
  width:var(--size-status-indicator-container-l, 24px);
  height:var(--size-status-indicator-container-l, 24px);
}
.container--r6DW8[data-size=l] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-l, 16px);
  border-width:var(--border-width-general-xl, 4px);
  width:var(--size-status-indicator-l, 24px);
  height:var(--size-status-indicator-l, 24px);
}

.indicator--j3nCt{
  box-sizing:border-box;
  border:0 solid var(--sys-neutral-background1-level, #fdfdfd);
}
.indicator--j3nCt[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.indicator--j3nCt[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.indicator--j3nCt[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.indicator--j3nCt[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.indicator--j3nCt[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.indicator--j3nCt[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.indicator--j3nCt[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.indicator--j3nCt[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.indicator--j3nCt[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),l.locals={container:"container--r6DW8",indicator:"indicator--j3nCt"};const p=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((S,y,e)=>{e.d(y,{A:()=>p});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(r),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),l=b()(_());l.push([S.id,`.tooltipContainer--trugl{
  padding:var(--space-tooltip-padding-single, 16px);
  border-radius:var(--radius-tooltip-container, 24px);
  min-width:var(--size-tooltip-container-min-width, 60px);
  max-width:var(--size-tooltip-container-max-width, 416px);
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  overflow:hidden;
  box-sizing:border-box;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  word-wrap:break-word;
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.tooltipContainer--trugl[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--kKMnt{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 24px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 24px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--gHa3m{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),l.locals={tooltipContainer:"tooltipContainer--trugl",tooltipArrowContainer:"tooltipArrowContainer--kKMnt",tooltipArrowElement:"tooltipArrowElement--gHa3m"};const p=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((S,y,e)=>{e.d(y,{A:()=>p});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(r),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),l=b()(_());l.push([S.id,`.text1Line--HSvW2{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--iIP1I{
  text-overflow:ellipsis;
}

.text2AndMoreLines--wWakd{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--qFRDQ{
  display:grid;
}`,""]),l.locals={text1Line:"text1Line--HSvW2",ellipsis:"ellipsis--iIP1I",text2AndMoreLines:"text2AndMoreLines--wWakd",tooltipTrigger:"tooltipTrigger--qFRDQ"};const p=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((S,y,e)=>{e.d(y,{A:()=>p});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(r),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),l=b()(_());l.push([S.id,`.wrapper--VcndZ{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--KoQ_g{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--NMKzz{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--Ya_HS{
  display:inline-flex;
}`,""]),l.locals={wrapper:"wrapper--VcndZ",truncatedText:"truncatedText--KoQ_g",fullText:"fullText--NMKzz",textContainer:"textContainer--Ya_HS"};const p=l})}]);})();
