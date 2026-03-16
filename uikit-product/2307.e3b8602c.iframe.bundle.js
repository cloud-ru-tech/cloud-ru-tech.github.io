"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2307],{"./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js":((z,O,i)=>{i.d(O,{Qn:()=>b,SK:()=>S,_B:()=>u,dk:()=>x,xz:()=>f});const f={Primary:"primary",Neutral:"neutral",Destructive:"destructive"},x={Button:"button",Submit:"submit",Reset:"reset"},b={Blank:"_blank",Self:"_self",Parent:"_parent",Top:"_top"},S={Xs:"xs",S:"s",M:"m",L:"l"},u={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js":((z,O,i)=>{i.d(O,{A:()=>_});var f=i("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=i("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),b=i.n(x),S=i("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=i("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),l=i("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),o;(function(c){c.LabelOnly="label-only",c.IconOnly="icon-only",c.IconBefore="icon-before",c.IconAfter="icon-after"})(o||(o={}));const p={[l.xz.Neutral]:"neutral",[l.xz.Primary]:"primary",[l.xz.Destructive]:"red"};var B=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=i.n(B),I=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=i.n(I),F=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),K=i.n(F),U=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Y=i.n(U),Z=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),G=i.n(Z),V=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Q=i.n(V),M=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"),L={};L.styleTagTransform=Q(),L.setAttributes=Y(),L.insert=K().bind(null,"head"),L.domAPI=W(),L.insertStyleElement=G();var ee=s()(M.A,L);const w=M.A&&M.A.locals?M.A.locals:void 0;var P=i("./node_modules/.pnpm/@snack-uikit+counter@0.8.11_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"),te=i("./node_modules/.pnpm/@snack-uikit+loaders@0.9.10_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js");function E({label:c,icon:g,iconPosition:h}){return c&&g&&h===l._B.After?o.IconAfter:c&&g&&h===l._B.Before?o.IconBefore:c?o.LabelOnly:o.IconOnly}function $({counter:c,loading:g,disabled:h,counterForIcon:y,"data-test-id":v}){return typeof(c==null?void 0:c.value)=="number"&&!g&&!h?(0,f.jsx)("span",{"data-test-id":`${v!=null?v:"button"}__counter`,className:b()(y?w.counterForIcon:w.counterForLabel),children:(0,f.jsx)(P.p,Object.assign({},c))}):void 0}function J({icon:c,iconClassName:g,loading:h,wrappedCounter:y}){if(h)return(0,f.jsx)("span",{"data-test-id":"loading-icon",className:g,children:(0,f.jsx)(te.b,{size:"s"})});if(c)return(0,f.jsxs)("span",{"data-test-id":"icon",className:b()(g,{[w.iconWithCounter]:!!y}),children:[c,y]})}function q({label:c,labelClassName:g,wrappedCounter:h}){return c?(0,f.jsxs)("span",{"data-test-id":"label",className:g,children:[c,h]}):void 0}function m({icon:c,label:g,iconPosition:h,iconClassName:y,labelClassName:v,loading:k,disabled:T,counter:A,"data-test-id":H}){const C=c&&(h===l._B.After||!g),N=$({counter:A,loading:k,disabled:T,counterForIcon:C,"data-test-id":H}),D=J({icon:c,iconClassName:y,loading:k,wrappedCounter:C?N:void 0}),X=q({label:g,labelClassName:v,wrappedCounter:C?void 0:N});switch(h){case l._B.Before:return(0,f.jsxs)(f.Fragment,{children:[D,X]});case l._B.After:default:return(0,f.jsxs)(f.Fragment,{children:[X,D]})}}var j=function(c,g){var h={};for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&g.indexOf(y)<0&&(h[y]=c[y]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,y=Object.getOwnPropertySymbols(c);v<y.length;v++)g.indexOf(y[v])<0&&Object.prototype.propertyIsEnumerable.call(c,y[v])&&(h[y[v]]=c[y[v]]);return h};const _=(0,S.forwardRef)((c,g)=>{var{className:h,disabled:y,href:v,icon:k,iconClassName:T,iconPosition:A=l._B.After,label:H,labelClassName:C,loading:N,onClick:D,onKeyDown:X,onFocus:ie,onBlur:se,counter:pe,size:de,target:ce=l.Qn.Blank,type:fe=l.dk.Button,appearance:ge=l.xz.Primary,tabIndex:ye=0,fullWidth:ue}=c,ae=j(c,["className","disabled","href","icon","iconClassName","iconPosition","label","labelClassName","loading","onClick","onKeyDown","onFocus","onBlur","counter","size","target","type","appearance","tabIndex","fullWidth"]);const me=E({label:H,iconPosition:A,icon:k}),ne=m({icon:k,iconClassName:T,iconPosition:A,label:H,labelClassName:C,loading:N,disabled:y,counter:pe,"data-test-id":ae["data-test-id"]}),he=N||y?-1:ye,be=le=>{if(y||N){le.preventDefault();return}D&&D(le)},re=Object.assign(Object.assign({},(0,u.z7)(ae)),{className:b()(w.button,h),"data-disabled":y||void 0,"aria-disabled":y||void 0,"data-loading":N||void 0,"data-size":de,"data-full-width":ue||void 0,"data-appearance":p[ge],"data-variant":me,onClick:be,onKeyDown:X,onFocus:ie,onBlur:se,tabIndex:he});return v?(0,f.jsx)("a",Object.assign({role:"button",href:v,target:ce},re,{ref:g,children:ne})):(0,f.jsx)("button",Object.assign({},re,{type:fe,ref:g,children:ne}))})}),"./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js":((z,O,i)=>{i.d(O,{F:()=>x,a:()=>f});function f({counter:b}){return{counter:b}}function x({disabled:b,href:S,icon:u,label:l,loading:o,onClick:p,onFocus:B,onBlur:s,onKeyDown:I}){return{disabled:b,href:S,icon:u,label:l,loading:o,onClick:p,onKeyDown:I,onFocus:B,onBlur:s}}}),"./node_modules/.pnpm/@snack-uikit+counter@0.8.11_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js":((z,O,i)=>{i.d(O,{p:()=>q});var f=i("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=i("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),b=i.n(x),S=i("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const u={Primary:"primary",Neutral:"neutral",Red:"red"},l={Count:"count",CountPlus:"count-plus",CountK:"count-k"},o={S:"s",M:"m"},p={Accent:"accent",Decor:"decor"},B=10,s=1e3,I="K";var W=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),F=i.n(W),K=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),U=i.n(K),Y=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Z=i.n(Y),G=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),V=i.n(G),Q=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=i.n(Q),L=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),ee=i.n(L),w=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.11_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),P={};P.styleTagTransform=ee(),P.setAttributes=V(),P.insert=Z().bind(null,"head"),P.domAPI=U(),P.insertStyleElement=M();var te=F()(w.A,P);const E=w.A&&w.A.locals?w.A.locals:void 0;function $({value:m,variant:j,plusLimit:_}){if(j===l.Count)return m;if(j===l.CountPlus)return m<_?m:(0,f.jsxs)(f.Fragment,{children:[_-1,(0,f.jsx)("span",{className:E.plus,children:"+"})]});if(j===l.CountK)return m<s?m:(0,f.jsxs)(f.Fragment,{children:[Math.round(m/s),(0,f.jsx)("span",{className:E.key,children:I})]})}var J=function(m,j){var _={};for(var c in m)Object.prototype.hasOwnProperty.call(m,c)&&j.indexOf(c)<0&&(_[c]=m[c]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,c=Object.getOwnPropertySymbols(m);g<c.length;g++)j.indexOf(c[g])<0&&Object.prototype.propertyIsEnumerable.call(m,c[g])&&(_[c[g]]=m[c[g]]);return _};function q(m){var{value:j,appearance:_=u.Primary,variant:c=l.Count,size:g=o.S,plusLimit:h=B,color:y=p.Accent,className:v}=m,k=J(m,["value","appearance","variant","size","plusLimit","color","className"]);const T=$({value:j,variant:c,plusLimit:h});return(0,f.jsx)("div",Object.assign({className:b()(E.counter,v)},(0,S.z7)(k),{"data-size":g,"data-variant":c,"data-appearance":_,"data-color":y,children:T}))}}),"./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js":((z,O,i)=>{i.d(O,{o:()=>d});var f=i("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),x=i.n(f),b=i("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=i("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");function u(t,r){for(const n in r)t[n]=r[n];return t}const l={Sans:"sans",Light:"light",Link:"link",Mono:"mono",CrossedOut:"crossed-out"},o={Display:"display",Headline:"headline",Title:"title",Label:"label",Body:"body"},p={L:"l",M:"m",S:"s"},B={span:"span",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",div:"div",label:"label",p:"p"};var s=i("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),I=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function W(t){var{className:r,children:n,tag:e}=t,a=I(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Body,size:p.L,tag:e,className:r,children:n}))}var F=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function K(t){var{className:r,children:n,tag:e}=t,a=F(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Body,size:p.M,tag:e,className:r,children:n}))}var U=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Y(t){var{className:r,children:n,tag:e}=t,a=U(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Body,size:p.S,tag:e,className:r,children:n}))}var Z=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function G(t){var{className:r,children:n,tag:e}=t,a=Z(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Display,size:p.L,tag:e,className:r,children:n}))}var V=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Q(t){var{className:r,children:n,tag:e}=t,a=V(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Display,size:p.M,tag:e,className:r,children:n}))}var M=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function L(t){var{className:r,children:n,tag:e}=t,a=M(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Display,size:p.S,tag:e,className:r,children:n}))}var ee=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function w(t){var{className:r,children:n,tag:e}=t,a=ee(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Headline,size:p.L,tag:e,className:r,children:n}))}var P=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function te(t){var{className:r,children:n,tag:e}=t,a=P(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Headline,size:p.M,tag:e,className:r,children:n}))}var E=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function $(t){var{className:r,children:n,tag:e}=t,a=E(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Headline,size:p.S,tag:e,className:r,children:n}))}var J=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function q(t){var{className:r,children:n,tag:e}=t,a=J(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Label,size:p.L,tag:e,className:r,children:n}))}var m=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function j(t){var{className:r,children:n,tag:e}=t,a=m(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Label,size:p.M,tag:e,className:r,children:n}))}var _=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function c(t){var{className:r,children:n,tag:e}=t,a=_(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Label,size:p.S,tag:e,className:r,children:n}))}var g=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function h(t){var{className:r,children:n,tag:e}=t,a=g(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Title,size:p.L,tag:e,className:r,children:n}))}var y=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function v(t){var{className:r,children:n,tag:e}=t,a=y(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Title,size:p.M,tag:e,className:r,children:n}))}var k=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function T(t){var{className:r,children:n,tag:e}=t,a=k(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.CrossedOut,purpose:o.Title,size:p.S,tag:e,className:r,children:n}))}var A=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function H(t){var{className:r,children:n,tag:e}=t,a=A(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Body,size:p.L,tag:e,className:r,children:n}))}var C=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function N(t){var{className:r,children:n,tag:e}=t,a=C(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Body,size:p.M,tag:e,className:r,children:n}))}var D=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function X(t){var{className:r,children:n,tag:e}=t,a=D(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Body,size:p.S,tag:e,className:r,children:n}))}var ie=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function se(t){var{className:r,children:n,tag:e}=t,a=ie(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Display,size:p.L,tag:e,className:r,children:n}))}var pe=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function de(t){var{className:r,children:n,tag:e}=t,a=pe(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Display,size:p.M,tag:e,className:r,children:n}))}var ce=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function fe(t){var{className:r,children:n,tag:e}=t,a=ce(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Display,size:p.S,tag:e,className:r,children:n}))}var ge=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function ye(t){var{className:r,children:n,tag:e}=t,a=ge(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Headline,size:p.L,tag:e,className:r,children:n}))}var ue=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function ae(t){var{className:r,children:n,tag:e}=t,a=ue(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Headline,size:p.M,tag:e,className:r,children:n}))}var me=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function ne(t){var{className:r,children:n,tag:e}=t,a=me(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Headline,size:p.S,tag:e,className:r,children:n}))}var he=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function be(t){var{className:r,children:n,tag:e}=t,a=he(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Label,size:p.L,tag:e,className:r,children:n}))}var re=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function le(t){var{className:r,children:n,tag:e}=t,a=re(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Label,size:p.M,tag:e,className:r,children:n}))}var ve=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Oe(t){var{className:r,children:n,tag:e}=t,a=ve(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Label,size:p.S,tag:e,className:r,children:n}))}var xe=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Se(t){var{className:r,children:n,tag:e}=t,a=xe(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Title,size:p.L,tag:e,className:r,children:n}))}var je=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function _e(t){var{className:r,children:n,tag:e}=t,a=je(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Title,size:p.M,tag:e,className:r,children:n}))}var we=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function ze(t){var{className:r,children:n,tag:e}=t,a=we(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Light,purpose:o.Title,size:p.S,tag:e,className:r,children:n}))}var Le=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Pe(t){var{className:r,children:n,tag:e}=t,a=Le(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Body,size:p.L,tag:e,className:r,children:n}))}var ke=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Ne(t){var{className:r,children:n,tag:e}=t,a=ke(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Body,size:p.M,tag:e,className:r,children:n}))}var Me=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Be(t){var{className:r,children:n,tag:e}=t,a=Me(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Body,size:p.S,tag:e,className:r,children:n}))}var Ie=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Ee(t){var{className:r,children:n,tag:e}=t,a=Ie(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Display,size:p.L,tag:e,className:r,children:n}))}var Te=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Ce(t){var{className:r,children:n,tag:e}=t,a=Te(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Display,size:p.M,tag:e,className:r,children:n}))}var De=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Ae(t){var{className:r,children:n,tag:e}=t,a=De(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Display,size:p.S,tag:e,className:r,children:n}))}var He=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Xe(t){var{className:r,children:n,tag:e}=t,a=He(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Headline,size:p.L,tag:e,className:r,children:n}))}var Re=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function We(t){var{className:r,children:n,tag:e}=t,a=Re(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Headline,size:p.M,tag:e,className:r,children:n}))}var Fe=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Ke(t){var{className:r,children:n,tag:e}=t,a=Fe(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Headline,size:p.S,tag:e,className:r,children:n}))}var Ue=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Ye(t){var{className:r,children:n,tag:e}=t,a=Ue(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Label,size:p.L,tag:e,className:r,children:n}))}var Ze=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Ge(t){var{className:r,children:n,tag:e}=t,a=Ze(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Label,size:p.M,tag:e,className:r,children:n}))}var Ve=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Qe(t){var{className:r,children:n,tag:e}=t,a=Ve(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Label,size:p.S,tag:e,className:r,children:n}))}var $e=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Je(t){var{className:r,children:n,tag:e}=t,a=$e(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Title,size:p.L,tag:e,className:r,children:n}))}var qe=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function et(t){var{className:r,children:n,tag:e}=t,a=qe(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Title,size:p.M,tag:e,className:r,children:n}))}var tt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function at(t){var{className:r,children:n,tag:e}=t,a=tt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Link,purpose:o.Title,size:p.S,tag:e,className:r,children:n}))}var nt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function rt(t){var{className:r,children:n,tag:e}=t,a=nt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Body,size:p.L,tag:e,className:r,children:n}))}var lt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function ot(t){var{className:r,children:n,tag:e}=t,a=lt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Body,size:p.M,tag:e,className:r,children:n}))}var it=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function st(t){var{className:r,children:n,tag:e}=t,a=it(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Body,size:p.S,tag:e,className:r,children:n}))}var pt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function dt(t){var{className:r,children:n,tag:e}=t,a=pt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Display,size:p.L,tag:e,className:r,children:n}))}var ct=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function ft(t){var{className:r,children:n,tag:e}=t,a=ct(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Display,size:p.M,tag:e,className:r,children:n}))}var gt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function yt(t){var{className:r,children:n,tag:e}=t,a=gt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Display,size:p.S,tag:e,className:r,children:n}))}var ut=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function mt(t){var{className:r,children:n,tag:e}=t,a=ut(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Headline,size:p.L,tag:e,className:r,children:n}))}var ht=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function bt(t){var{className:r,children:n,tag:e}=t,a=ht(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Headline,size:p.M,tag:e,className:r,children:n}))}var vt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Ot(t){var{className:r,children:n,tag:e}=t,a=vt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Headline,size:p.S,tag:e,className:r,children:n}))}var xt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function St(t){var{className:r,children:n,tag:e}=t,a=xt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Label,size:p.L,tag:e,className:r,children:n}))}var jt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function _t(t){var{className:r,children:n,tag:e}=t,a=jt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Label,size:p.M,tag:e,className:r,children:n}))}var wt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function zt(t){var{className:r,children:n,tag:e}=t,a=wt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Label,size:p.S,tag:e,className:r,children:n}))}var Lt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Pt(t){var{className:r,children:n,tag:e}=t,a=Lt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Title,size:p.L,tag:e,className:r,children:n}))}var kt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Nt(t){var{className:r,children:n,tag:e}=t,a=kt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Title,size:p.M,tag:e,className:r,children:n}))}var Mt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Bt(t){var{className:r,children:n,tag:e}=t,a=Mt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Mono,purpose:o.Title,size:p.S,tag:e,className:r,children:n}))}var It=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Et(t){var{className:r,children:n,tag:e}=t,a=It(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Body,size:p.L,tag:e,className:r,children:n}))}var Tt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Ct(t){var{className:r,children:n,tag:e}=t,a=Tt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Body,size:p.M,tag:e,className:r,children:n}))}var Dt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function At(t){var{className:r,children:n,tag:e}=t,a=Dt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Body,size:p.S,tag:e,className:r,children:n}))}var Ht=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Xt(t){var{className:r,children:n,tag:e}=t,a=Ht(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Display,size:p.L,tag:e,className:r,children:n}))}var Rt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Wt(t){var{className:r,children:n,tag:e}=t,a=Rt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Display,size:p.M,tag:e,className:r,children:n}))}var Ft=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Kt(t){var{className:r,children:n,tag:e}=t,a=Ft(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Display,size:p.S,tag:e,className:r,children:n}))}var Ut=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Yt(t){var{className:r,children:n,tag:e}=t,a=Ut(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Headline,size:p.L,tag:e,className:r,children:n}))}var Zt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Gt(t){var{className:r,children:n,tag:e}=t,a=Zt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Headline,size:p.M,tag:e,className:r,children:n}))}var Vt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Qt(t){var{className:r,children:n,tag:e}=t,a=Vt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Headline,size:p.S,tag:e,className:r,children:n}))}var $t=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function Jt(t){var{className:r,children:n,tag:e}=t,a=$t(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Label,size:p.L,tag:e,className:r,children:n}))}var qt=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function ea(t){var{className:r,children:n,tag:e}=t,a=qt(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Label,size:p.M,tag:e,className:r,children:n}))}var ta=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function aa(t){var{className:r,children:n,tag:e}=t,a=ta(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Label,size:p.S,tag:e,className:r,children:n}))}var na=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function ra(t){var{className:r,children:n,tag:e}=t,a=na(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Title,size:p.L,tag:e,className:r,children:n}))}var la=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function oa(t){var{className:r,children:n,tag:e}=t,a=la(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Title,size:p.M,tag:e,className:r,children:n}))}var ia=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function sa(t){var{className:r,children:n,tag:e}=t,a=ia(t,["className","children","tag"]);return(0,s.jsx)(d,Object.assign({},a,{family:l.Sans,purpose:o.Title,size:p.S,tag:e,className:r,children:n}))}const pa={CrossedOutBodyL:W,CrossedOutBodyM:K,CrossedOutBodyS:Y,CrossedOutDisplayL:G,CrossedOutDisplayM:Q,CrossedOutDisplayS:L,CrossedOutHeadlineL:w,CrossedOutHeadlineM:te,CrossedOutHeadlineS:$,CrossedOutLabelL:q,CrossedOutLabelM:j,CrossedOutLabelS:c,CrossedOutTitleL:h,CrossedOutTitleM:v,CrossedOutTitleS:T,LightBodyL:H,LightBodyM:N,LightBodyS:X,LightDisplayL:se,LightDisplayM:de,LightDisplayS:fe,LightHeadlineL:ye,LightHeadlineM:ae,LightHeadlineS:ne,LightLabelL:be,LightLabelM:le,LightLabelS:Oe,LightTitleL:Se,LightTitleM:_e,LightTitleS:ze,LinkBodyL:Pe,LinkBodyM:Ne,LinkBodyS:Be,LinkDisplayL:Ee,LinkDisplayM:Ce,LinkDisplayS:Ae,LinkHeadlineL:Xe,LinkHeadlineM:We,LinkHeadlineS:Ke,LinkLabelL:Ye,LinkLabelM:Ge,LinkLabelS:Qe,LinkTitleL:Je,LinkTitleM:et,LinkTitleS:at,MonoBodyL:rt,MonoBodyM:ot,MonoBodyS:st,MonoDisplayL:dt,MonoDisplayM:ft,MonoDisplayS:yt,MonoHeadlineL:mt,MonoHeadlineM:bt,MonoHeadlineS:Ot,MonoLabelL:St,MonoLabelM:_t,MonoLabelS:zt,MonoTitleL:Pt,MonoTitleM:Nt,MonoTitleS:Bt,SansBodyL:Et,SansBodyM:Ct,SansBodyS:At,SansDisplayL:Xt,SansDisplayM:Wt,SansDisplayS:Kt,SansHeadlineL:Yt,SansHeadlineM:Gt,SansHeadlineS:Qt,SansLabelL:Jt,SansLabelM:ea,SansLabelS:aa,SansTitleL:ra,SansTitleM:oa,SansTitleS:sa};var da=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ca=i.n(da),fa=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),ga=i.n(fa),ya=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),ua=i.n(ya),ma=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),ha=i.n(ma),ba=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),va=i.n(ba),Oa=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),xa=i.n(Oa),oe=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/styles.module.css"),R={};R.styleTagTransform=xa(),R.setAttributes=ha(),R.insert=ua().bind(null,"head"),R.domAPI=ga(),R.insertStyleElement=va();var Pa=ca()(oe.A,R);const Sa=oe.A&&oe.A.locals?oe.A.locals:void 0;var ja=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};function _a(t){var{tag:r=B.span,className:n,children:e,family:a,purpose:wa,size:za}=t,La=ja(t,["tag","className","children","family","purpose","size"]);return(0,b.createElement)(r,Object.assign(Object.assign({className:x()(Sa.typography,n)},(0,S.z7)(La)),{"data-family":a,"data-purpose":wa,"data-size":za}),e)}const d=u(_a,pa)}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css":((z,O,i)=>{i.d(O,{A:()=>l});var f=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=i.n(f),b=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),S=i.n(b),u=S()(x());u.push([z.id,`.button--OfyWy{
  cursor:pointer;
  position:relative;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  min-width:-moz-max-content;
  min-width:max-content;
  margin:0;
  padding:0;
  color:transparent;
  text-decoration:none;
  text-transform:none;
  background-color:transparent;
  border:0 solid transparent;
  outline:0;
  outline-offset:0;
}
.button--OfyWy[data-full-width]{
  flex-grow:1;
  flex-shrink:1;
  width:100%;
}
.button--OfyWy > *{
  cursor:pointer;
}
.button--OfyWy:disabled, .button--OfyWy[data-disabled], .button--OfyWy[data-loading]{
  cursor:not-allowed;
}
.button--OfyWy:disabled > *, .button--OfyWy[data-disabled] > *, .button--OfyWy[data-loading] > *{
  cursor:not-allowed;
}

.iconWithCounter--ZWvHT{
  position:relative;
}

.counterForLabel--fxilP{
  margin-left:var(--dimension-theme-general-4px, 4px);
}

.counterForIcon--HLmeW{
  position:absolute;
  top:-8px;
  left:calc(100% - 8px);
}`,""]),u.locals={button:"button--OfyWy",iconWithCounter:"iconWithCounter--ZWvHT",counterForLabel:"counterForLabel--fxilP",counterForIcon:"counterForIcon--HLmeW"};const l=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.11_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css":((z,O,i)=>{i.d(O,{A:()=>l});var f=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=i.n(f),b=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),S=i.n(b),u=S()(x());u.push([z.id,`.counter--MMOHY{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  border:0 solid transparent;
}
.counter--MMOHY[data-color=accent][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--MMOHY[data-color=accent][data-appearance=neutral]{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-accent-default, #787b8a);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--MMOHY[data-color=accent][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
  background-color:var(--sys-red-accent-default, #cb3f3e);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--MMOHY[data-color=decor][data-appearance=primary]{
  color:var(--sys-primary-text-main, #1b5840);
  background-color:var(--sys-primary-decor-default, #caeadb);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--MMOHY[data-color=decor][data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--MMOHY[data-color=decor][data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--MMOHY[data-size=s]{
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
.counter--MMOHY[data-size=s] .plus--BHl8e{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--MMOHY[data-size=s] .key--GZHMp{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.counter--MMOHY[data-size=m]{
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
.counter--MMOHY[data-size=m] .plus--BHl8e{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--MMOHY[data-size=m] .key--GZHMp{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}`,""]),u.locals={counter:"counter--MMOHY",plus:"plus--BHl8e",key:"key--GZHMp"};const l=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/styles.module.css":((z,O,i)=>{i.d(O,{A:()=>l});var f=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=i.n(f),b=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),S=i.n(b),u=S()(x());u.push([z.id,`.typography--mbpXe{
  box-sizing:border-box;
  max-width:100%;
  margin:0;
  padding:0;
  overflow-wrap:break-word;
}
.typography--mbpXe[data-family=sans][data-purpose=display][data-size=s]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.typography--mbpXe[data-family=sans][data-purpose=display][data-size=m]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.typography--mbpXe[data-family=sans][data-purpose=display][data-size=l]{
  font-family:var(--sans-display-l-font-family, SB Sans Interface);
  font-weight:var(--sans-display-l-font-weight, Bold);
  line-height:var(--sans-display-l-line-height, 72px);
  font-size:var(--sans-display-l-font-size, 56px);
  letter-spacing:var(--sans-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-l-paragraph-spacing, 30.8px);
}
.typography--mbpXe[data-family=sans][data-purpose=headline][data-size=s]{
  font-family:var(--sans-headline-s-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-s-font-weight, Semibold);
  line-height:var(--sans-headline-s-line-height, 32px);
  font-size:var(--sans-headline-s-font-size, 24px);
  letter-spacing:var(--sans-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-s-paragraph-spacing, 13.2px);
}
.typography--mbpXe[data-family=sans][data-purpose=headline][data-size=m]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.typography--mbpXe[data-family=sans][data-purpose=headline][data-size=l]{
  font-family:var(--sans-headline-l-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-l-font-weight, Semibold);
  line-height:var(--sans-headline-l-line-height, 40px);
  font-size:var(--sans-headline-l-font-size, 32px);
  letter-spacing:var(--sans-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-l-paragraph-spacing, 17.6px);
}
.typography--mbpXe[data-family=sans][data-purpose=title][data-size=s]{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
}
.typography--mbpXe[data-family=sans][data-purpose=title][data-size=m]{
  font-family:var(--sans-title-m-font-family, SB Sans Interface);
  font-weight:var(--sans-title-m-font-weight, Semibold);
  line-height:var(--sans-title-m-line-height, 24px);
  font-size:var(--sans-title-m-font-size, 16px);
  letter-spacing:var(--sans-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);
}
.typography--mbpXe[data-family=sans][data-purpose=title][data-size=l]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.typography--mbpXe[data-family=sans][data-purpose=label][data-size=s]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.typography--mbpXe[data-family=sans][data-purpose=label][data-size=m]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.typography--mbpXe[data-family=sans][data-purpose=label][data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.typography--mbpXe[data-family=sans][data-purpose=body][data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.typography--mbpXe[data-family=sans][data-purpose=body][data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.typography--mbpXe[data-family=sans][data-purpose=body][data-size=l]{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.typography--mbpXe[data-family=light][data-purpose=display][data-size=s]{
  font-family:var(--light-display-s-font-family, SB Sans Interface);
  font-weight:var(--light-display-s-font-weight, Regular);
  line-height:var(--light-display-s-line-height, 48px);
  font-size:var(--light-display-s-font-size, 40px);
  letter-spacing:var(--light-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--light-display-s-paragraph-spacing, 22px);
}
.typography--mbpXe[data-family=light][data-purpose=display][data-size=m]{
  font-family:var(--light-display-m-font-family, SB Sans Interface);
  font-weight:var(--light-display-m-font-weight, Regular);
  line-height:var(--light-display-m-line-height, 60px);
  font-size:var(--light-display-m-font-size, 48px);
  letter-spacing:var(--light-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--light-display-m-paragraph-spacing, 26.4px);
}
.typography--mbpXe[data-family=light][data-purpose=display][data-size=l]{
  font-family:var(--light-display-l-font-family, SB Sans Interface);
  font-weight:var(--light-display-l-font-weight, Regular);
  line-height:var(--light-display-l-line-height, 72px);
  font-size:var(--light-display-l-font-size, 56px);
  letter-spacing:var(--light-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--light-display-l-paragraph-spacing, 30.8px);
}
.typography--mbpXe[data-family=light][data-purpose=headline][data-size=s]{
  font-family:var(--light-headline-s-font-family, SB Sans Interface);
  font-weight:var(--light-headline-s-font-weight, Regular);
  line-height:var(--light-headline-s-line-height, 32px);
  font-size:var(--light-headline-s-font-size, 24px);
  letter-spacing:var(--light-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--light-headline-s-paragraph-spacing, 13.2px);
}
.typography--mbpXe[data-family=light][data-purpose=headline][data-size=m]{
  font-family:var(--light-headline-m-font-family, SB Sans Interface);
  font-weight:var(--light-headline-m-font-weight, Regular);
  line-height:var(--light-headline-m-line-height, 36px);
  font-size:var(--light-headline-m-font-size, 28px);
  letter-spacing:var(--light-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--light-headline-m-paragraph-spacing, 15.4px);
}
.typography--mbpXe[data-family=light][data-purpose=headline][data-size=l]{
  font-family:var(--light-headline-l-font-family, SB Sans Interface);
  font-weight:var(--light-headline-l-font-weight, Regular);
  line-height:var(--light-headline-l-line-height, 40px);
  font-size:var(--light-headline-l-font-size, 32px);
  letter-spacing:var(--light-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--light-headline-l-paragraph-spacing, 17.6px);
}
.typography--mbpXe[data-family=light][data-purpose=title][data-size=s]{
  font-family:var(--light-title-s-font-family, SB Sans Interface);
  font-weight:var(--light-title-s-font-weight, Regular);
  line-height:var(--light-title-s-line-height, 20px);
  font-size:var(--light-title-s-font-size, 14px);
  letter-spacing:var(--light-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-s-paragraph-spacing, 7.7px);
}
.typography--mbpXe[data-family=light][data-purpose=title][data-size=m]{
  font-family:var(--light-title-m-font-family, SB Sans Interface);
  font-weight:var(--light-title-m-font-weight, Regular);
  line-height:var(--light-title-m-line-height, 24px);
  font-size:var(--light-title-m-font-size, 16px);
  letter-spacing:var(--light-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-m-paragraph-spacing, 8.8px);
}
.typography--mbpXe[data-family=light][data-purpose=title][data-size=l]{
  font-family:var(--light-title-l-font-family, SB Sans Interface);
  font-weight:var(--light-title-l-font-weight, Regular);
  line-height:var(--light-title-l-line-height, 28px);
  font-size:var(--light-title-l-font-size, 20px);
  letter-spacing:var(--light-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-l-paragraph-spacing, 11px);
}
.typography--mbpXe[data-family=light][data-purpose=label][data-size=s]{
  font-family:var(--light-label-s-font-family, SB Sans Interface);
  font-weight:var(--light-label-s-font-weight, Regular);
  line-height:var(--light-label-s-line-height, 14px);
  font-size:var(--light-label-s-font-size, 11px);
  letter-spacing:var(--light-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-s-paragraph-spacing, 6.05px);
}
.typography--mbpXe[data-family=light][data-purpose=label][data-size=m]{
  font-family:var(--light-label-m-font-family, SB Sans Interface);
  font-weight:var(--light-label-m-font-weight, Regular);
  line-height:var(--light-label-m-line-height, 16px);
  font-size:var(--light-label-m-font-size, 12px);
  letter-spacing:var(--light-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-m-paragraph-spacing, 6.6px);
}
.typography--mbpXe[data-family=light][data-purpose=label][data-size=l]{
  font-family:var(--light-label-l-font-family, SB Sans Interface);
  font-weight:var(--light-label-l-font-weight, Regular);
  line-height:var(--light-label-l-line-height, 20px);
  font-size:var(--light-label-l-font-size, 14px);
  letter-spacing:var(--light-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-l-paragraph-spacing, 7.7px);
}
.typography--mbpXe[data-family=light][data-purpose=body][data-size=s]{
  font-family:var(--light-body-s-font-family, SB Sans Interface);
  font-weight:var(--light-body-s-font-weight, Light);
  line-height:var(--light-body-s-line-height, 16px);
  font-size:var(--light-body-s-font-size, 12px);
  letter-spacing:var(--light-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--light-body-s-paragraph-spacing, 6.6px);
}
.typography--mbpXe[data-family=light][data-purpose=body][data-size=m]{
  font-family:var(--light-body-m-font-family, SB Sans Interface);
  font-weight:var(--light-body-m-font-weight, Light);
  line-height:var(--light-body-m-line-height, 20px);
  font-size:var(--light-body-m-font-size, 14px);
  letter-spacing:var(--light-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--light-body-m-paragraph-spacing, 7.7px);
}
.typography--mbpXe[data-family=light][data-purpose=body][data-size=l]{
  font-family:var(--light-body-l-font-family, SB Sans Interface);
  font-weight:var(--light-body-l-font-weight, Light);
  line-height:var(--light-body-l-line-height, 24px);
  font-size:var(--light-body-l-font-size, 16px);
  letter-spacing:var(--light-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--light-body-l-paragraph-spacing, 8.8px);
}
.typography--mbpXe[data-family=link][data-purpose=display][data-size=s]{
  font-family:var(--link-display-s-font-family, SB Sans Interface);
  font-weight:var(--link-display-s-font-weight, Semibold);
  line-height:var(--link-display-s-line-height, 48px);
  font-size:var(--link-display-s-font-size, 40px);
  letter-spacing:var(--link-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-s-paragraph-spacing, 22px);
  -webkit-text-decoration:var(--link-display-s-text-decoration, underline);
          text-decoration:var(--link-display-s-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=display][data-size=m]{
  font-family:var(--link-display-m-font-family, SB Sans Interface);
  font-weight:var(--link-display-m-font-weight, Semibold);
  line-height:var(--link-display-m-line-height, 60px);
  font-size:var(--link-display-m-font-size, 48px);
  letter-spacing:var(--link-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-m-paragraph-spacing, 26.4px);
  -webkit-text-decoration:var(--link-display-m-text-decoration, underline);
          text-decoration:var(--link-display-m-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=display][data-size=l]{
  font-family:var(--link-display-l-font-family, SB Sans Interface);
  font-weight:var(--link-display-l-font-weight, Bold);
  line-height:var(--link-display-l-line-height, 72px);
  font-size:var(--link-display-l-font-size, 56px);
  letter-spacing:var(--link-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-l-paragraph-spacing, 30.8px);
  -webkit-text-decoration:var(--link-display-l-text-decoration, underline);
          text-decoration:var(--link-display-l-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=headline][data-size=s]{
  font-family:var(--link-headline-s-font-family, SB Sans Interface);
  font-weight:var(--link-headline-s-font-weight, Semibold);
  line-height:var(--link-headline-s-line-height, 32px);
  font-size:var(--link-headline-s-font-size, 24px);
  letter-spacing:var(--link-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-s-paragraph-spacing, 13.2px);
  -webkit-text-decoration:var(--link-headline-s-text-decoration, underline);
          text-decoration:var(--link-headline-s-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=headline][data-size=m]{
  font-family:var(--link-headline-m-font-family, SB Sans Interface);
  font-weight:var(--link-headline-m-font-weight, Semibold);
  line-height:var(--link-headline-m-line-height, 36px);
  font-size:var(--link-headline-m-font-size, 28px);
  letter-spacing:var(--link-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-m-paragraph-spacing, 15.4px);
  -webkit-text-decoration:var(--link-headline-m-text-decoration, underline);
          text-decoration:var(--link-headline-m-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=headline][data-size=l]{
  font-family:var(--link-headline-l-font-family, SB Sans Interface);
  font-weight:var(--link-headline-l-font-weight, Semibold);
  line-height:var(--link-headline-l-line-height, 40px);
  font-size:var(--link-headline-l-font-size, 32px);
  letter-spacing:var(--link-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-l-paragraph-spacing, 17.6px);
  -webkit-text-decoration:var(--link-headline-l-text-decoration, underline);
          text-decoration:var(--link-headline-l-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=title][data-size=s]{
  font-family:var(--link-title-s-font-family, SB Sans Interface);
  font-weight:var(--link-title-s-font-weight, Semibold);
  line-height:var(--link-title-s-line-height, 20px);
  font-size:var(--link-title-s-font-size, 14px);
  letter-spacing:var(--link-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-s-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-title-s-text-decoration, underline);
          text-decoration:var(--link-title-s-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=title][data-size=m]{
  font-family:var(--link-title-m-font-family, SB Sans Interface);
  font-weight:var(--link-title-m-font-weight, Semibold);
  line-height:var(--link-title-m-line-height, 24px);
  font-size:var(--link-title-m-font-size, 16px);
  letter-spacing:var(--link-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-m-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-title-m-text-decoration, underline);
          text-decoration:var(--link-title-m-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=title][data-size=l]{
  font-family:var(--link-title-l-font-family, SB Sans Interface);
  font-weight:var(--link-title-l-font-weight, Semibold);
  line-height:var(--link-title-l-line-height, 28px);
  font-size:var(--link-title-l-font-size, 20px);
  letter-spacing:var(--link-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-l-paragraph-spacing, 11px);
  -webkit-text-decoration:var(--link-title-l-text-decoration, underline);
          text-decoration:var(--link-title-l-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=label][data-size=s]{
  font-family:var(--link-label-s-font-family, SB Sans Interface);
  font-weight:var(--link-label-s-font-weight, Semibold);
  line-height:var(--link-label-s-line-height, 14px);
  font-size:var(--link-label-s-font-size, 11px);
  letter-spacing:var(--link-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-s-paragraph-spacing, 6.05px);
  -webkit-text-decoration:var(--link-label-s-text-decoration, underline);
          text-decoration:var(--link-label-s-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=label][data-size=m]{
  font-family:var(--link-label-m-font-family, SB Sans Interface);
  font-weight:var(--link-label-m-font-weight, Semibold);
  line-height:var(--link-label-m-line-height, 16px);
  font-size:var(--link-label-m-font-size, 12px);
  letter-spacing:var(--link-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-m-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-label-m-text-decoration, underline);
          text-decoration:var(--link-label-m-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=label][data-size=l]{
  font-family:var(--link-label-l-font-family, SB Sans Interface);
  font-weight:var(--link-label-l-font-weight, Semibold);
  line-height:var(--link-label-l-line-height, 20px);
  font-size:var(--link-label-l-font-size, 14px);
  letter-spacing:var(--link-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-l-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-label-l-text-decoration, underline);
          text-decoration:var(--link-label-l-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=body][data-size=s]{
  font-family:var(--link-body-s-font-family, SB Sans Interface);
  font-weight:var(--link-body-s-font-weight, Regular);
  line-height:var(--link-body-s-line-height, 16px);
  font-size:var(--link-body-s-font-size, 12px);
  letter-spacing:var(--link-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-s-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-body-s-text-decoration, underline);
          text-decoration:var(--link-body-s-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=body][data-size=m]{
  font-family:var(--link-body-m-font-family, SB Sans Interface);
  font-weight:var(--link-body-m-font-weight, Regular);
  line-height:var(--link-body-m-line-height, 20px);
  font-size:var(--link-body-m-font-size, 14px);
  letter-spacing:var(--link-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-m-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-body-m-text-decoration, underline);
          text-decoration:var(--link-body-m-text-decoration, underline);
}
.typography--mbpXe[data-family=link][data-purpose=body][data-size=l]{
  font-family:var(--link-body-l-font-family, SB Sans Interface);
  font-weight:var(--link-body-l-font-weight, Regular);
  line-height:var(--link-body-l-line-height, 24px);
  font-size:var(--link-body-l-font-size, 16px);
  letter-spacing:var(--link-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-l-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-body-l-text-decoration, underline);
          text-decoration:var(--link-body-l-text-decoration, underline);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=display][data-size=s]{
  font-family:var(--crossed-out-display-s-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-display-s-font-weight, Semibold);
  line-height:var(--crossed-out-display-s-line-height, 48px);
  font-size:var(--crossed-out-display-s-font-size, 40px);
  letter-spacing:var(--crossed-out-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--crossed-out-display-s-paragraph-spacing, 22px);
  -webkit-text-decoration:var(--crossed-out-display-s-text-decoration, line-through);
          text-decoration:var(--crossed-out-display-s-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=display][data-size=m]{
  font-family:var(--crossed-out-display-m-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-display-m-font-weight, Semibold);
  line-height:var(--crossed-out-display-m-line-height, 60px);
  font-size:var(--crossed-out-display-m-font-size, 48px);
  letter-spacing:var(--crossed-out-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--crossed-out-display-m-paragraph-spacing, 26.4px);
  -webkit-text-decoration:var(--crossed-out-display-m-text-decoration, line-through);
          text-decoration:var(--crossed-out-display-m-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=display][data-size=l]{
  font-family:var(--crossed-out-display-l-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-display-l-font-weight, Bold);
  line-height:var(--crossed-out-display-l-line-height, 72px);
  font-size:var(--crossed-out-display-l-font-size, 56px);
  letter-spacing:var(--crossed-out-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--crossed-out-display-l-paragraph-spacing, 30.8px);
  -webkit-text-decoration:var(--crossed-out-display-l-text-decoration, line-through);
          text-decoration:var(--crossed-out-display-l-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=headline][data-size=s]{
  font-family:var(--crossed-out-headline-s-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-headline-s-font-weight, Semibold);
  line-height:var(--crossed-out-headline-s-line-height, 32px);
  font-size:var(--crossed-out-headline-s-font-size, 24px);
  letter-spacing:var(--crossed-out-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--crossed-out-headline-s-paragraph-spacing, 13.2px);
  -webkit-text-decoration:var(--crossed-out-headline-s-text-decoration, line-through);
          text-decoration:var(--crossed-out-headline-s-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=headline][data-size=m]{
  font-family:var(--crossed-out-headline-m-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-headline-m-font-weight, Semibold);
  line-height:var(--crossed-out-headline-m-line-height, 36px);
  font-size:var(--crossed-out-headline-m-font-size, 28px);
  letter-spacing:var(--crossed-out-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--crossed-out-headline-m-paragraph-spacing, 15.4px);
  -webkit-text-decoration:var(--crossed-out-headline-m-text-decoration, line-through);
          text-decoration:var(--crossed-out-headline-m-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=headline][data-size=l]{
  font-family:var(--crossed-out-headline-l-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-headline-l-font-weight, Semibold);
  line-height:var(--crossed-out-headline-l-line-height, 40px);
  font-size:var(--crossed-out-headline-l-font-size, 32px);
  letter-spacing:var(--crossed-out-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--crossed-out-headline-l-paragraph-spacing, 17.6px);
  -webkit-text-decoration:var(--crossed-out-headline-l-text-decoration, line-through);
          text-decoration:var(--crossed-out-headline-l-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=title][data-size=s]{
  font-family:var(--crossed-out-title-s-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-title-s-font-weight, Semibold);
  line-height:var(--crossed-out-title-s-line-height, 20px);
  font-size:var(--crossed-out-title-s-font-size, 14px);
  letter-spacing:var(--crossed-out-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--crossed-out-title-s-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--crossed-out-title-s-text-decoration, line-through);
          text-decoration:var(--crossed-out-title-s-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=title][data-size=m]{
  font-family:var(--crossed-out-title-m-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-title-m-font-weight, Semibold);
  line-height:var(--crossed-out-title-m-line-height, 24px);
  font-size:var(--crossed-out-title-m-font-size, 16px);
  letter-spacing:var(--crossed-out-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--crossed-out-title-m-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--crossed-out-title-m-text-decoration, line-through);
          text-decoration:var(--crossed-out-title-m-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=title][data-size=l]{
  font-family:var(--crossed-out-title-l-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-title-l-font-weight, Semibold);
  line-height:var(--crossed-out-title-l-line-height, 28px);
  font-size:var(--crossed-out-title-l-font-size, 20px);
  letter-spacing:var(--crossed-out-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--crossed-out-title-l-paragraph-spacing, 11px);
  -webkit-text-decoration:var(--crossed-out-title-l-text-decoration, line-through);
          text-decoration:var(--crossed-out-title-l-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=label][data-size=s]{
  font-family:var(--crossed-out-label-s-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-label-s-font-weight, Semibold);
  line-height:var(--crossed-out-label-s-line-height, 14px);
  font-size:var(--crossed-out-label-s-font-size, 11px);
  letter-spacing:var(--crossed-out-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--crossed-out-label-s-paragraph-spacing, 6.05px);
  -webkit-text-decoration:var(--crossed-out-label-s-text-decoration, line-through);
          text-decoration:var(--crossed-out-label-s-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=label][data-size=m]{
  font-family:var(--crossed-out-label-m-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-label-m-font-weight, Semibold);
  line-height:var(--crossed-out-label-m-line-height, 16px);
  font-size:var(--crossed-out-label-m-font-size, 12px);
  letter-spacing:var(--crossed-out-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--crossed-out-label-m-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--crossed-out-label-m-text-decoration, line-through);
          text-decoration:var(--crossed-out-label-m-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=label][data-size=l]{
  font-family:var(--crossed-out-label-l-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-label-l-font-weight, Semibold);
  line-height:var(--crossed-out-label-l-line-height, 20px);
  font-size:var(--crossed-out-label-l-font-size, 14px);
  letter-spacing:var(--crossed-out-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--crossed-out-label-l-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--crossed-out-label-l-text-decoration, line-through);
          text-decoration:var(--crossed-out-label-l-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=body][data-size=s]{
  font-family:var(--crossed-out-body-s-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-body-s-font-weight, Regular);
  line-height:var(--crossed-out-body-s-line-height, 16px);
  font-size:var(--crossed-out-body-s-font-size, 12px);
  letter-spacing:var(--crossed-out-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--crossed-out-body-s-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--crossed-out-body-s-text-decoration, line-through);
          text-decoration:var(--crossed-out-body-s-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=body][data-size=m]{
  font-family:var(--crossed-out-body-m-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-body-m-font-weight, Regular);
  line-height:var(--crossed-out-body-m-line-height, 20px);
  font-size:var(--crossed-out-body-m-font-size, 14px);
  letter-spacing:var(--crossed-out-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--crossed-out-body-m-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--crossed-out-body-m-text-decoration, line-through);
          text-decoration:var(--crossed-out-body-m-text-decoration, line-through);
}
.typography--mbpXe[data-family=crossed-out][data-purpose=body][data-size=l]{
  font-family:var(--crossed-out-body-l-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-body-l-font-weight, Regular);
  line-height:var(--crossed-out-body-l-line-height, 24px);
  font-size:var(--crossed-out-body-l-font-size, 16px);
  letter-spacing:var(--crossed-out-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--crossed-out-body-l-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--crossed-out-body-l-text-decoration, line-through);
          text-decoration:var(--crossed-out-body-l-text-decoration, line-through);
}
.typography--mbpXe[data-family=mono][data-purpose=display][data-size=s]{
  font-family:var(--mono-display-s-font-family, SB Sans Text Mono);
  font-weight:var(--mono-display-s-font-weight, Bold);
  line-height:var(--mono-display-s-line-height, 48px);
  font-size:var(--mono-display-s-font-size, 40px);
  letter-spacing:var(--mono-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--mono-display-s-paragraph-spacing, 22px);
}
.typography--mbpXe[data-family=mono][data-purpose=display][data-size=m]{
  font-family:var(--mono-display-m-font-family, SB Sans Text Mono);
  font-weight:var(--mono-display-m-font-weight, Bold);
  line-height:var(--mono-display-m-line-height, 60px);
  font-size:var(--mono-display-m-font-size, 48px);
  letter-spacing:var(--mono-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--mono-display-m-paragraph-spacing, 26.4px);
}
.typography--mbpXe[data-family=mono][data-purpose=display][data-size=l]{
  font-family:var(--mono-display-l-font-family, SB Sans Text Mono);
  font-weight:var(--mono-display-l-font-weight, Bold);
  line-height:var(--mono-display-l-line-height, 72px);
  font-size:var(--mono-display-l-font-size, 56px);
  letter-spacing:var(--mono-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--mono-display-l-paragraph-spacing, 30.8px);
}
.typography--mbpXe[data-family=mono][data-purpose=headline][data-size=s]{
  font-family:var(--mono-headline-s-font-family, SB Sans Text Mono);
  font-weight:var(--mono-headline-s-font-weight, Bold);
  line-height:var(--mono-headline-s-line-height, 32px);
  font-size:var(--mono-headline-s-font-size, 24px);
  letter-spacing:var(--mono-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--mono-headline-s-paragraph-spacing, 13.2px);
}
.typography--mbpXe[data-family=mono][data-purpose=headline][data-size=m]{
  font-family:var(--mono-headline-m-font-family, SB Sans Text Mono);
  font-weight:var(--mono-headline-m-font-weight, Bold);
  line-height:var(--mono-headline-m-line-height, 36px);
  font-size:var(--mono-headline-m-font-size, 28px);
  letter-spacing:var(--mono-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--mono-headline-m-paragraph-spacing, 15.4px);
}
.typography--mbpXe[data-family=mono][data-purpose=headline][data-size=l]{
  font-family:var(--mono-headline-l-font-family, SB Sans Text Mono);
  font-weight:var(--mono-headline-l-font-weight, Bold);
  line-height:var(--mono-headline-l-line-height, 40px);
  font-size:var(--mono-headline-l-font-size, 32px);
  letter-spacing:var(--mono-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--mono-headline-l-paragraph-spacing, 17.6px);
}
.typography--mbpXe[data-family=mono][data-purpose=title][data-size=s]{
  font-family:var(--mono-title-s-font-family, SB Sans Text Mono);
  font-weight:var(--mono-title-s-font-weight, Regular);
  line-height:var(--mono-title-s-line-height, 20px);
  font-size:var(--mono-title-s-font-size, 14px);
  letter-spacing:var(--mono-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--mono-title-s-paragraph-spacing, 7.7px);
}
.typography--mbpXe[data-family=mono][data-purpose=title][data-size=m]{
  font-family:var(--mono-title-m-font-family, SB Sans Text Mono);
  font-weight:var(--mono-title-m-font-weight, Regular);
  line-height:var(--mono-title-m-line-height, 24px);
  font-size:var(--mono-title-m-font-size, 16px);
  letter-spacing:var(--mono-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--mono-title-m-paragraph-spacing, 8.8px);
}
.typography--mbpXe[data-family=mono][data-purpose=title][data-size=l]{
  font-family:var(--mono-title-l-font-family, SB Sans Text Mono);
  font-weight:var(--mono-title-l-font-weight, Regular);
  line-height:var(--mono-title-l-line-height, 28px);
  font-size:var(--mono-title-l-font-size, 20px);
  letter-spacing:var(--mono-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--mono-title-l-paragraph-spacing, 11px);
}
.typography--mbpXe[data-family=mono][data-purpose=label][data-size=s]{
  font-family:var(--mono-label-s-font-family, SB Sans Text Mono);
  font-weight:var(--mono-label-s-font-weight, Bold);
  line-height:var(--mono-label-s-line-height, 14px);
  font-size:var(--mono-label-s-font-size, 11px);
  letter-spacing:var(--mono-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--mono-label-s-paragraph-spacing, 6.05px);
}
.typography--mbpXe[data-family=mono][data-purpose=label][data-size=m]{
  font-family:var(--mono-label-m-font-family, SB Sans Text Mono);
  font-weight:var(--mono-label-m-font-weight, Bold);
  line-height:var(--mono-label-m-line-height, 16px);
  font-size:var(--mono-label-m-font-size, 12px);
  letter-spacing:var(--mono-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--mono-label-m-paragraph-spacing, 6.6px);
}
.typography--mbpXe[data-family=mono][data-purpose=label][data-size=l]{
  font-family:var(--mono-label-l-font-family, SB Sans Text Mono);
  font-weight:var(--mono-label-l-font-weight, Bold);
  line-height:var(--mono-label-l-line-height, 20px);
  font-size:var(--mono-label-l-font-size, 14px);
  letter-spacing:var(--mono-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--mono-label-l-paragraph-spacing, 7.7px);
}
.typography--mbpXe[data-family=mono][data-purpose=body][data-size=s]{
  font-family:var(--mono-body-s-font-family, SB Sans Text Mono);
  font-weight:var(--mono-body-s-font-weight, Regular);
  line-height:var(--mono-body-s-line-height, 16px);
  font-size:var(--mono-body-s-font-size, 12px);
  letter-spacing:var(--mono-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--mono-body-s-paragraph-spacing, 6.6px);
}
.typography--mbpXe[data-family=mono][data-purpose=body][data-size=m]{
  font-family:var(--mono-body-m-font-family, SB Sans Text Mono);
  font-weight:var(--mono-body-m-font-weight, Regular);
  line-height:var(--mono-body-m-line-height, 20px);
  font-size:var(--mono-body-m-font-size, 14px);
  letter-spacing:var(--mono-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--mono-body-m-paragraph-spacing, 7.7px);
}
.typography--mbpXe[data-family=mono][data-purpose=body][data-size=l]{
  font-family:var(--mono-body-l-font-family, SB Sans Text Mono);
  font-weight:var(--mono-body-l-font-weight, Regular);
  line-height:var(--mono-body-l-line-height, 24px);
  font-size:var(--mono-body-l-font-size, 16px);
  letter-spacing:var(--mono-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--mono-body-l-paragraph-spacing, 8.8px);
}`,""]),u.locals={typography:"typography--mbpXe"};const l=u})}]);})();
