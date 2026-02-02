"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[8334],{"./node_modules/.pnpm/@snack-uikit+button@0.19.13_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js":((h,p,n)=>{n.d(p,{Qn:()=>i,SK:()=>_,_B:()=>l,dk:()=>c,xz:()=>s});const s={Primary:"primary",Neutral:"neutral",Destructive:"destructive"},c={Button:"button",Submit:"submit",Reset:"reset"},i={Blank:"_blank",Self:"_self",Parent:"_parent",Top:"_top"},_={Xs:"xs",S:"s",M:"m",L:"l"},l={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+button@0.19.13_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js":((h,p,n)=>{n.d(p,{A:()=>me});var s=n("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=n("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),i=n.n(c),_=n("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=n("./node_modules/.pnpm/@snack-uikit+utils@3.9.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),d=n("./node_modules/.pnpm/@snack-uikit+button@0.19.13_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),f;(function(e){e.LabelOnly="label-only",e.IconOnly="icon-only",e.IconBefore="icon-before",e.IconAfter="icon-after"})(f||(f={}));const u={[d.xz.Neutral]:"neutral",[d.xz.Primary]:"primary",[d.xz.Destructive]:"red"};var v=n("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=n.n(v),b=n("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),T=n.n(b),G=n("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),B=n.n(G),V=n("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=n.n(V),H=n("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=n.n(H),Y=n("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=n.n(Y),O=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.13_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"),k={};k.styleTagTransform=W(),k.setAttributes=F(),k.insert=B().bind(null,"head"),k.domAPI=T(),k.insertStyleElement=D();var Se=m()(O.A,k);const w=O.A&&O.A.locals?O.A.locals:void 0,J={Primary:"primary",Neutral:"neutral",Red:"red"},I={Count:"count",CountPlus:"count-plus",CountK:"count-k"},Q={S:"s",M:"m"},$={Accent:"accent",Decor:"decor"},q=10,N=1e3,ee="K";var L=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.7_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),j={};j.styleTagTransform=W(),j.setAttributes=F(),j.insert=B().bind(null,"head"),j.domAPI=T(),j.insertStyleElement=D();var Ae=m()(L.A,j);const R=L.A&&L.A.locals?L.A.locals:void 0;function te({value:e,variant:a,plusLimit:o}){if(a===I.Count)return e;if(a===I.CountPlus)return e<o?e:(0,s.jsxs)(s.Fragment,{children:[o-1,(0,s.jsx)("span",{className:R.plus,children:"+"})]});if(a===I.CountK)return e<N?e:(0,s.jsxs)(s.Fragment,{children:[Math.round(e/N),(0,s.jsx)("span",{className:R.key,children:ee})]})}var ne=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};function se(e){var{value:a,appearance:o=J.Primary,variant:t=I.Count,size:r=Q.S,plusLimit:y=q,color:S=$.Accent,className:M}=e,P=ne(e,["value","appearance","variant","size","plusLimit","color","className"]);const g=te({value:a,variant:t,plusLimit:y});return(0,s.jsx)("div",Object.assign({className:i()(R.counter,M)},(0,l.z7)(P),{"data-size":r,"data-variant":t,"data-appearance":o,"data-color":S,children:g}))}const ae={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"};var z=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.6_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),E={};E.styleTagTransform=W(),E.setAttributes=F(),E.insert=B().bind(null,"head"),E.domAPI=T(),E.insertStyleElement=D();var Oe=m()(z.A,E);const oe=z.A&&z.A.locals?z.A.locals:void 0;var re=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};function de(e){var{size:a=ae.S,className:o}=e,t=re(e,["size","className"]);return(0,s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:i()(oe.sun,o)},(0,l.z7)(t),{"data-size":a,children:[(0,s.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}function le({label:e,icon:a,iconPosition:o}){return e&&a&&o===d._B.After?f.IconAfter:e&&a&&o===d._B.Before?f.IconBefore:e?f.LabelOnly:f.IconOnly}function ie({counter:e,loading:a,disabled:o,counterForIcon:t,"data-test-id":r}){return typeof(e==null?void 0:e.value)=="number"&&!a&&!o?(0,s.jsx)("span",{"data-test-id":`${r!=null?r:"button"}__counter`,className:i()(t?w.counterForIcon:w.counterForLabel),children:(0,s.jsx)(se,Object.assign({},e))}):void 0}function ue({icon:e,iconClassName:a,loading:o,wrappedCounter:t}){if(o)return(0,s.jsx)("span",{"data-test-id":"loading-icon",className:a,children:(0,s.jsx)(de,{size:"s"})});if(e)return(0,s.jsxs)("span",{"data-test-id":"icon",className:i()(a,{[w.iconWithCounter]:!!t}),children:[e,t]})}function ce({label:e,labelClassName:a,wrappedCounter:o}){return e?(0,s.jsxs)("span",{"data-test-id":"label",className:a,children:[e,o]}):void 0}function _e({icon:e,label:a,iconPosition:o,iconClassName:t,labelClassName:r,loading:y,disabled:S,counter:M,"data-test-id":P}){const g=e&&(o===d._B.After||!a),x=ie({counter:M,loading:y,disabled:S,counterForIcon:g,"data-test-id":P}),A=ue({icon:e,iconClassName:t,loading:y,wrappedCounter:g?x:void 0}),C=ce({label:a,labelClassName:r,wrappedCounter:g?void 0:x});switch(o){case d._B.Before:return(0,s.jsxs)(s.Fragment,{children:[A,C]});case d._B.After:default:return(0,s.jsxs)(s.Fragment,{children:[C,A]})}}var pe=function(e,a){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const me=(0,_.forwardRef)((e,a)=>{var{className:o,disabled:t,href:r,icon:y,iconClassName:S,iconPosition:M=d._B.After,label:P,labelClassName:g,loading:x,onClick:A,onKeyDown:C,onFocus:fe,onBlur:be,counter:he,size:ve,target:ye=d.Qn.Blank,type:ge=d.dk.Button,appearance:xe=d.xz.Primary,tabIndex:ke=0,fullWidth:je}=e,K=pe(e,["className","disabled","href","icon","iconClassName","iconPosition","label","labelClassName","loading","onClick","onKeyDown","onFocus","onBlur","counter","size","target","type","appearance","tabIndex","fullWidth"]);const Ee=le({label:P,iconPosition:M,icon:y}),U=_e({icon:y,iconClassName:S,iconPosition:M,label:P,labelClassName:g,loading:x,disabled:t,counter:he,"data-test-id":K["data-test-id"]}),Me=x||t?-1:ke,Pe=Z=>{if(t||x){Z.preventDefault();return}A&&A(Z)},X=Object.assign(Object.assign({},(0,l.z7)(K)),{className:i()(w.button,o),"data-disabled":t||void 0,"aria-disabled":t||void 0,"data-loading":x||void 0,"data-size":ve,"data-full-width":je||void 0,"data-appearance":u[xe],"data-variant":Ee,onClick:Pe,onKeyDown:C,onFocus:fe,onBlur:be,tabIndex:Me});return r?(0,s.jsx)("a",Object.assign({role:"button",href:r,target:ye},X,{ref:a,children:U})):(0,s.jsx)("button",Object.assign({},X,{type:ge,ref:a,children:U}))})}),"./node_modules/.pnpm/@snack-uikit+button@0.19.13_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js":((h,p,n)=>{n.d(p,{F:()=>c,a:()=>s});function s({counter:i}){return{counter:i}}function c({disabled:i,href:_,icon:l,label:d,loading:f,onClick:u,onFocus:v,onBlur:m,onKeyDown:b}){return{disabled:i,href:_,icon:l,label:d,loading:f,onClick:u,onKeyDown:b,onFocus:v,onBlur:m}}}),"./node_modules/.pnpm/@snack-uikit+utils@3.9.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((h,p,n)=>{n.d(p,{z7:()=>f});const s=/^data-test-/,c=/^(data|aria)-/;function i(u,v){return Object.keys(u).filter(m=>!m.match(v)).reduce((m,b)=>Object.assign(Object.assign({},m),{[b]:u[b]}),{})}function _(u,v){return Object.keys(u).reduce((m,b)=>(b.match(v)&&(m[b]=u[b]),m),{})}function l(u){return i(u,c)}function d(u){return _(u,s)}function f(u){return _(u,c)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.13_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css":((h,p,n)=>{n.d(p,{A:()=>d});var s=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=n.n(s),i=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=n.n(i),l=_()(c());l.push([h.id,`.button--k3xZM{
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
.button--k3xZM[data-full-width]{
  flex-grow:1;
  flex-shrink:1;
  width:100%;
}
.button--k3xZM > *{
  cursor:pointer;
}
.button--k3xZM:disabled, .button--k3xZM[data-disabled], .button--k3xZM[data-loading]{
  cursor:not-allowed;
}
.button--k3xZM:disabled > *, .button--k3xZM[data-disabled] > *, .button--k3xZM[data-loading] > *{
  cursor:not-allowed;
}

.iconWithCounter--ZM3e6{
  position:relative;
}

.counterForLabel--Jz648{
  margin-left:var(--dimension-theme-general-4px, 4px);
}

.counterForIcon--WuZiV{
  position:absolute;
  top:-8px;
  left:calc(100% - 8px);
}`,""]),l.locals={button:"button--k3xZM",iconWithCounter:"iconWithCounter--ZM3e6",counterForLabel:"counterForLabel--Jz648",counterForIcon:"counterForIcon--WuZiV"};const d=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.7_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css":((h,p,n)=>{n.d(p,{A:()=>d});var s=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=n.n(s),i=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=n.n(i),l=_()(c());l.push([h.id,`.counter--vFwhF{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  border:0 solid transparent;
}
.counter--vFwhF[data-color=accent][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fdfbff);
  background-color:var(--sys-primary-accent-default, #794ed3);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--vFwhF[data-color=accent][data-appearance=neutral]{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-accent-default, #787b8a);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--vFwhF[data-color=accent][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
  background-color:var(--sys-red-accent-default, #cb3f3e);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--vFwhF[data-color=decor][data-appearance=primary]{
  color:var(--sys-primary-text-main, #382a62);
  background-color:var(--sys-primary-decor-default, #ebdefd);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--vFwhF[data-color=decor][data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--vFwhF[data-color=decor][data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--vFwhF[data-size=s]{
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
.counter--vFwhF[data-size=s] .plus--tH1Ue{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--vFwhF[data-size=s] .key--taduX{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.counter--vFwhF[data-size=m]{
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
.counter--vFwhF[data-size=m] .plus--tH1Ue{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--vFwhF[data-size=m] .key--taduX{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}`,""]),l.locals={counter:"counter--vFwhF",plus:"plus--tH1Ue",key:"key--taduX"};const d=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.6_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((h,p,n)=>{n.d(p,{A:()=>d});var s=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=n.n(s),i=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=n.n(i),l=_()(c());l.push([h.id,`.sun--dIEMM{
  pointer-events:none;
  fill:currentColor;
}
.sun--dIEMM[data-size=xs]{
  width:var(--size-loader-loader-xs, 16px);
  height:var(--size-loader-loader-xs, 16px);
}
.sun--dIEMM[data-size=s]{
  width:var(--size-loader-loader-s, 24px);
  height:var(--size-loader-loader-s, 24px);
}
.sun--dIEMM[data-size=m]{
  width:var(--size-loader-loader-m, 48px);
  height:var(--size-loader-loader-m, 48px);
}
.sun--dIEMM[data-size=l]{
  width:var(--size-loader-loader-l, 72px);
  height:var(--size-loader-loader-l, 72px);
}
.sun--dIEMM > path{
  stroke:currentColor;
  animation-name:loading-wheel--XpGi3;
  animation-timing-function:linear;
  animation-iteration-count:infinite;
}
.sun--dIEMM > path:nth-child(1){
  animation-duration:1000ms;
  animation-delay:-125ms;
}
.sun--dIEMM > path:nth-child(2){
  animation-duration:1000ms;
  animation-delay:-250ms;
}
.sun--dIEMM > path:nth-child(3){
  animation-duration:1000ms;
  animation-delay:-375ms;
}
.sun--dIEMM > path:nth-child(4){
  animation-duration:1000ms;
  animation-delay:-500ms;
}
.sun--dIEMM > path:nth-child(5){
  animation-duration:1000ms;
  animation-delay:-625ms;
}
.sun--dIEMM > path:nth-child(6){
  animation-duration:1000ms;
  animation-delay:-750ms;
}
.sun--dIEMM > path:nth-child(7){
  animation-duration:1000ms;
  animation-delay:-875ms;
}
.sun--dIEMM > path:nth-child(8){
  animation-duration:1000ms;
  animation-delay:-1000ms;
}

@keyframes loading-wheel--XpGi3{
  0%{
    opacity:1;
  }
  90%{
    opacity:0.125;
  }
  100%{
    opacity:1;
  }
}`,""]),l.locals={sun:"sun--dIEMM","loading-wheel":"loading-wheel--XpGi3"};const d=l})}]);})();
