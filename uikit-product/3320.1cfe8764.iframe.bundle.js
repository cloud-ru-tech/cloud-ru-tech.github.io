"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3320],{"./node_modules/.pnpm/@snack-uikit+button@0.19.15_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js":((h,m,e)=>{e.d(m,{Qn:()=>r,SK:()=>f,_B:()=>l,dk:()=>_,xz:()=>t});const t={Primary:"primary",Neutral:"neutral",Destructive:"destructive"},_={Button:"button",Submit:"submit",Reset:"reset"},r={Blank:"_blank",Self:"_self",Parent:"_parent",Top:"_top"},f={Xs:"xs",S:"s",M:"m",L:"l"},l={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+button@0.19.15_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js":((h,m,e)=>{e.d(m,{A:()=>k});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(_),f=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),n=e("./node_modules/.pnpm/@snack-uikit+button@0.19.15_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),y;(function(s){s.LabelOnly="label-only",s.IconOnly="icon-only",s.IconBefore="icon-before",s.IconAfter="icon-after"})(y||(y={}));const P={[n.xz.Neutral]:"neutral",[n.xz.Primary]:"primary",[n.xz.Destructive]:"red"};var z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(z),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(T),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),L=e.n(C),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),D=e.n(B),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n(W),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(v),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.15_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"),g={};g.styleTagTransform=K(),g.setAttributes=D(),g.insert=L().bind(null,"head"),g.domAPI=w(),g.insertStyleElement=E();var X=S()(A.A,g);const d=A.A&&A.A.locals?A.A.locals:void 0;var b=e("./node_modules/.pnpm/@snack-uikit+counter@0.8.9_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"),O=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js");function c({label:s,icon:o,iconPosition:u}){return s&&o&&u===n._B.After?y.IconAfter:s&&o&&u===n._B.Before?y.IconBefore:s?y.LabelOnly:y.IconOnly}function x({counter:s,loading:o,disabled:u,counterForIcon:a,"data-test-id":p}){return typeof(s==null?void 0:s.value)=="number"&&!o&&!u?(0,t.jsx)("span",{"data-test-id":`${p!=null?p:"button"}__counter`,className:r()(a?d.counterForIcon:d.counterForLabel),children:(0,t.jsx)(b.p,Object.assign({},s))}):void 0}function H({icon:s,iconClassName:o,loading:u,wrappedCounter:a}){if(u)return(0,t.jsx)("span",{"data-test-id":"loading-icon",className:o,children:(0,t.jsx)(O.b,{size:"s"})});if(s)return(0,t.jsxs)("span",{"data-test-id":"icon",className:r()(o,{[d.iconWithCounter]:!!a}),children:[s,a]})}function V({label:s,labelClassName:o,wrappedCounter:u}){return s?(0,t.jsxs)("span",{"data-test-id":"label",className:o,children:[s,u]}):void 0}function i({icon:s,label:o,iconPosition:u,iconClassName:a,labelClassName:p,loading:I,disabled:R,counter:U,"data-test-id":Y}){const N=s&&(u===n._B.After||!o),M=x({counter:U,loading:I,disabled:R,counterForIcon:N,"data-test-id":Y}),F=H({icon:s,iconClassName:a,loading:I,wrappedCounter:N?M:void 0}),G=V({label:o,labelClassName:p,wrappedCounter:N?void 0:M});switch(u){case n._B.Before:return(0,t.jsxs)(t.Fragment,{children:[F,G]});case n._B.After:default:return(0,t.jsxs)(t.Fragment,{children:[G,F]})}}var j=function(s,o){var u={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&o.indexOf(a)<0&&(u[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,a=Object.getOwnPropertySymbols(s);p<a.length;p++)o.indexOf(a[p])<0&&Object.prototype.propertyIsEnumerable.call(s,a[p])&&(u[a[p]]=s[a[p]]);return u};const k=(0,f.forwardRef)((s,o)=>{var{className:u,disabled:a,href:p,icon:I,iconClassName:R,iconPosition:U=n._B.After,label:Y,labelClassName:N,loading:M,onClick:F,onKeyDown:G,onFocus:q,onBlur:ee,counter:se,size:te,target:ne=n.Qn.Blank,type:oe=n.dk.Button,appearance:ae=n.xz.Primary,tabIndex:le=0,fullWidth:de}=s,Z=j(s,["className","disabled","href","icon","iconClassName","iconPosition","label","labelClassName","loading","onClick","onKeyDown","onFocus","onBlur","counter","size","target","type","appearance","tabIndex","fullWidth"]);const re=c({label:Y,iconPosition:U,icon:I}),Q=i({icon:I,iconClassName:R,iconPosition:U,label:Y,labelClassName:N,loading:M,disabled:a,counter:se,"data-test-id":Z["data-test-id"]}),ie=M||a?-1:le,ue=J=>{if(a||M){J.preventDefault();return}F&&F(J)},$=Object.assign(Object.assign({},(0,l.z7)(Z)),{className:r()(d.button,u),"data-disabled":a||void 0,"aria-disabled":a||void 0,"data-loading":M||void 0,"data-size":te,"data-full-width":de||void 0,"data-appearance":P[ae],"data-variant":re,onClick:ue,onKeyDown:G,onFocus:q,onBlur:ee,tabIndex:ie});return p?(0,t.jsx)("a",Object.assign({role:"button",href:p,target:ne},$,{ref:o,children:Q})):(0,t.jsx)("button",Object.assign({},$,{type:oe,ref:o,children:Q}))})}),"./node_modules/.pnpm/@snack-uikit+button@0.19.15_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js":((h,m,e)=>{e.d(m,{F:()=>_,a:()=>t});function t({counter:r}){return{counter:r}}function _({disabled:r,href:f,icon:l,label:n,loading:y,onClick:P,onFocus:z,onBlur:S,onKeyDown:T}){return{disabled:r,href:f,icon:l,label:n,loading:y,onClick:P,onKeyDown:T,onFocus:z,onBlur:S}}}),"./node_modules/.pnpm/@snack-uikit+counter@0.8.9_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js":((h,m,e)=>{e.d(m,{p:()=>V});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(_),f=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const l={Primary:"primary",Neutral:"neutral",Red:"red"},n={Count:"count",CountPlus:"count-plus",CountK:"count-k"},y={S:"s",M:"m"},P={Accent:"accent",Decor:"decor"},z=10,S=1e3,T="K";var w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(w),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=e.n(L),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),W=e.n(D),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),v=e.n(E),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),A=e.n(K),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),X=e.n(g),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.9_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),b={};b.styleTagTransform=X(),b.setAttributes=v(),b.insert=W().bind(null,"head"),b.domAPI=B(),b.insertStyleElement=A();var O=C()(d.A,b);const c=d.A&&d.A.locals?d.A.locals:void 0;function x({value:i,variant:j,plusLimit:k}){if(j===n.Count)return i;if(j===n.CountPlus)return i<k?i:(0,t.jsxs)(t.Fragment,{children:[k-1,(0,t.jsx)("span",{className:c.plus,children:"+"})]});if(j===n.CountK)return i<S?i:(0,t.jsxs)(t.Fragment,{children:[Math.round(i/S),(0,t.jsx)("span",{className:c.key,children:T})]})}var H=function(i,j){var k={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&j.indexOf(s)<0&&(k[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)j.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(k[s[o]]=i[s[o]]);return k};function V(i){var{value:j,appearance:k=l.Primary,variant:s=n.Count,size:o=y.S,plusLimit:u=z,color:a=P.Accent,className:p}=i,I=H(i,["value","appearance","variant","size","plusLimit","color","className"]);const R=x({value:j,variant:s,plusLimit:u});return(0,t.jsx)("div",Object.assign({className:r()(c.counter,p)},(0,f.z7)(I),{"data-size":o,"data-variant":s,"data-appearance":k,"data-color":a,children:R}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js":((h,m,e)=>{e.d(m,{b:()=>X});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(_),f=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),l=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(n),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),z=e.n(P),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(S),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),C=e.n(w),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(L),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=e.n(D),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),v={};v.styleTagTransform=W(),v.setAttributes=C(),v.insert=T().bind(null,"head"),v.domAPI=z(),v.insertStyleElement=B();var K=y()(E.A,v);const A=E.A&&E.A.locals?E.A.locals:void 0;var g=function(d,b){var O={};for(var c in d)Object.prototype.hasOwnProperty.call(d,c)&&b.indexOf(c)<0&&(O[c]=d[c]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,c=Object.getOwnPropertySymbols(d);x<c.length;x++)b.indexOf(c[x])<0&&Object.prototype.propertyIsEnumerable.call(d,c[x])&&(O[c[x]]=d[c[x]]);return O};function X(d){var{size:b=l.K.S,className:O}=d,c=g(d,["size","className"]);return(0,t.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:r()(A.sun,O)},(0,f.z7)(c),{"data-size":b,children:[(0,t.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js":((h,m,e)=>{e.d(m,{K:()=>t});const t={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.15_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css":((h,m,e)=>{e.d(m,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(r),l=f()(_());l.push([h.id,`.button--xhX1s{
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
.button--xhX1s[data-full-width]{
  flex-grow:1;
  flex-shrink:1;
  width:100%;
}
.button--xhX1s > *{
  cursor:pointer;
}
.button--xhX1s:disabled, .button--xhX1s[data-disabled], .button--xhX1s[data-loading]{
  cursor:not-allowed;
}
.button--xhX1s:disabled > *, .button--xhX1s[data-disabled] > *, .button--xhX1s[data-loading] > *{
  cursor:not-allowed;
}

.iconWithCounter--jYFsu{
  position:relative;
}

.counterForLabel--ZGEHT{
  margin-left:var(--dimension-theme-general-4px, 4px);
}

.counterForIcon--GYsC_{
  position:absolute;
  top:-8px;
  left:calc(100% - 8px);
}`,""]),l.locals={button:"button--xhX1s",iconWithCounter:"iconWithCounter--jYFsu",counterForLabel:"counterForLabel--ZGEHT",counterForIcon:"counterForIcon--GYsC_"};const n=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.9_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css":((h,m,e)=>{e.d(m,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(r),l=f()(_());l.push([h.id,`.counter--qeEnz{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  border:0 solid transparent;
}
.counter--qeEnz[data-color=accent][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fdfbff);
  background-color:var(--sys-primary-accent-default, #794ed3);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--qeEnz[data-color=accent][data-appearance=neutral]{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-accent-default, #787b8a);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--qeEnz[data-color=accent][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
  background-color:var(--sys-red-accent-default, #cb3f3e);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--qeEnz[data-color=decor][data-appearance=primary]{
  color:var(--sys-primary-text-main, #382a62);
  background-color:var(--sys-primary-decor-default, #ebdefd);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--qeEnz[data-color=decor][data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--qeEnz[data-color=decor][data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--qeEnz[data-size=s]{
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
.counter--qeEnz[data-size=s] .plus--x7hgH{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--qeEnz[data-size=s] .key--Rv51g{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.counter--qeEnz[data-size=m]{
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
.counter--qeEnz[data-size=m] .plus--x7hgH{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--qeEnz[data-size=m] .key--Rv51g{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}`,""]),l.locals={counter:"counter--qeEnz",plus:"plus--x7hgH",key:"key--Rv51g"};const n=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((h,m,e)=>{e.d(m,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(r),l=f()(_());l.push([h.id,`.sun--Mw8Oo{
  pointer-events:none;
  fill:currentColor;
}
.sun--Mw8Oo[data-size=xs]{
  width:var(--size-loader-loader-xs, 16px);
  height:var(--size-loader-loader-xs, 16px);
}
.sun--Mw8Oo[data-size=s]{
  width:var(--size-loader-loader-s, 24px);
  height:var(--size-loader-loader-s, 24px);
}
.sun--Mw8Oo[data-size=m]{
  width:var(--size-loader-loader-m, 48px);
  height:var(--size-loader-loader-m, 48px);
}
.sun--Mw8Oo[data-size=l]{
  width:var(--size-loader-loader-l, 72px);
  height:var(--size-loader-loader-l, 72px);
}
.sun--Mw8Oo > path{
  stroke:currentColor;
  animation-name:loading-wheel--wXeN0;
  animation-timing-function:linear;
  animation-iteration-count:infinite;
}
.sun--Mw8Oo > path:nth-child(1){
  animation-duration:1000ms;
  animation-delay:-125ms;
}
.sun--Mw8Oo > path:nth-child(2){
  animation-duration:1000ms;
  animation-delay:-250ms;
}
.sun--Mw8Oo > path:nth-child(3){
  animation-duration:1000ms;
  animation-delay:-375ms;
}
.sun--Mw8Oo > path:nth-child(4){
  animation-duration:1000ms;
  animation-delay:-500ms;
}
.sun--Mw8Oo > path:nth-child(5){
  animation-duration:1000ms;
  animation-delay:-625ms;
}
.sun--Mw8Oo > path:nth-child(6){
  animation-duration:1000ms;
  animation-delay:-750ms;
}
.sun--Mw8Oo > path:nth-child(7){
  animation-duration:1000ms;
  animation-delay:-875ms;
}
.sun--Mw8Oo > path:nth-child(8){
  animation-duration:1000ms;
  animation-delay:-1000ms;
}

@keyframes loading-wheel--wXeN0{
  0%{
    opacity:1;
  }
  90%{
    opacity:0.125;
  }
  100%{
    opacity:1;
  }
}`,""]),l.locals={sun:"sun--Mw8Oo","loading-wheel":"loading-wheel--wXeN0"};const n=l})}]);})();
