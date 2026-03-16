"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7487],{"./node_modules/.pnpm/@snack-uikit+button@0.19.13_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js":((k,h,n)=>{n.d(h,{Qn:()=>p,SK:()=>v,_B:()=>_,dk:()=>m,xz:()=>a});const a={Primary:"primary",Neutral:"neutral",Destructive:"destructive"},m={Button:"button",Submit:"submit",Reset:"reset"},p={Blank:"_blank",Self:"_self",Parent:"_parent",Top:"_top"},v={Xs:"xs",S:"s",M:"m",L:"l"},_={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+button@0.19.13_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js":((k,h,n)=>{n.d(h,{A:()=>me});var a=n("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=n("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=n.n(m),v=n("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=n("./node_modules/.pnpm/@snack-uikit+utils@3.9.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),c=n("./node_modules/.pnpm/@snack-uikit+button@0.19.13_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),x;(function(e){e.LabelOnly="label-only",e.IconOnly="icon-only",e.IconBefore="icon-before",e.IconAfter="icon-after"})(x||(x={}));const f={[c.xz.Neutral]:"neutral",[c.xz.Primary]:"primary",[c.xz.Destructive]:"red"};var j=n("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=n.n(j),g=n("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=n.n(g),b=n("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),u=n.n(b),t=n("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),i=n.n(t),W=n("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),K=n.n(W),Y=n("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),N=n.n(Y),L=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.13_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"),E={};E.styleTagTransform=N(),E.setAttributes=i(),E.insert=u().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=K();var Ee=y()(L.A,E);const B=L.A&&L.A.locals?L.A.locals:void 0,J={Primary:"primary",Neutral:"neutral",Red:"red"},T={Count:"count",CountPlus:"count-plus",CountK:"count-k"},Q={S:"s",M:"m"},$={Accent:"accent",Decor:"decor"},q=10,U=1e3,ee="K";var F=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.7_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),P={};P.styleTagTransform=N(),P.setAttributes=i(),P.insert=u().bind(null,"head"),P.domAPI=o(),P.insertStyleElement=K();var Pe=y()(F.A,P);const X=F.A&&F.A.locals?F.A.locals:void 0;function te({value:e,variant:r,plusLimit:d}){if(r===T.Count)return e;if(r===T.CountPlus)return e<d?e:(0,a.jsxs)(a.Fragment,{children:[d-1,(0,a.jsx)("span",{className:X.plus,children:"+"})]});if(r===T.CountK)return e<U?e:(0,a.jsxs)(a.Fragment,{children:[Math.round(e/U),(0,a.jsx)("span",{className:X.key,children:ee})]})}var ne=function(e,r){var d={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(d[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(e);l<s.length;l++)r.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(d[s[l]]=e[s[l]]);return d};function se(e){var{value:r,appearance:d=J.Primary,variant:s=T.Count,size:l=Q.S,plusLimit:O=q,color:z=$.Accent,className:A}=e,I=ne(e,["value","appearance","variant","size","plusLimit","color","className"]);const S=te({value:r,variant:s,plusLimit:O});return(0,a.jsx)("div",Object.assign({className:p()(X.counter,A)},(0,_.z7)(I),{"data-size":l,"data-variant":s,"data-appearance":d,"data-color":z,children:S}))}const ae={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"};var D=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.6_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),M={};M.styleTagTransform=N(),M.setAttributes=i(),M.insert=u().bind(null,"head"),M.domAPI=o(),M.insertStyleElement=K();var Me=y()(D.A,M);const oe=D.A&&D.A.locals?D.A.locals:void 0;var re=function(e,r){var d={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(d[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(e);l<s.length;l++)r.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(d[s[l]]=e[s[l]]);return d};function de(e){var{size:r=ae.S,className:d}=e,s=re(e,["size","className"]);return(0,a.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:p()(oe.sun,d)},(0,_.z7)(s),{"data-size":r,children:[(0,a.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}function le({label:e,icon:r,iconPosition:d}){return e&&r&&d===c._B.After?x.IconAfter:e&&r&&d===c._B.Before?x.IconBefore:e?x.LabelOnly:x.IconOnly}function ie({counter:e,loading:r,disabled:d,counterForIcon:s,"data-test-id":l}){return typeof(e==null?void 0:e.value)=="number"&&!r&&!d?(0,a.jsx)("span",{"data-test-id":`${l!=null?l:"button"}__counter`,className:p()(s?B.counterForIcon:B.counterForLabel),children:(0,a.jsx)(se,Object.assign({},e))}):void 0}function ue({icon:e,iconClassName:r,loading:d,wrappedCounter:s}){if(d)return(0,a.jsx)("span",{"data-test-id":"loading-icon",className:r,children:(0,a.jsx)(de,{size:"s"})});if(e)return(0,a.jsxs)("span",{"data-test-id":"icon",className:p()(r,{[B.iconWithCounter]:!!s}),children:[e,s]})}function ce({label:e,labelClassName:r,wrappedCounter:d}){return e?(0,a.jsxs)("span",{"data-test-id":"label",className:r,children:[e,d]}):void 0}function _e({icon:e,label:r,iconPosition:d,iconClassName:s,labelClassName:l,loading:O,disabled:z,counter:A,"data-test-id":I}){const S=e&&(d===c._B.After||!r),w=ie({counter:A,loading:O,disabled:z,counterForIcon:S,"data-test-id":I}),C=ue({icon:e,iconClassName:s,loading:O,wrappedCounter:S?w:void 0}),R=ce({label:r,labelClassName:l,wrappedCounter:S?void 0:w});switch(d){case c._B.Before:return(0,a.jsxs)(a.Fragment,{children:[C,R]});case c._B.After:default:return(0,a.jsxs)(a.Fragment,{children:[R,C]})}}var pe=function(e,r){var d={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(d[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(e);l<s.length;l++)r.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(d[s[l]]=e[s[l]]);return d};const me=(0,v.forwardRef)((e,r)=>{var{className:d,disabled:s,href:l,icon:O,iconClassName:z,iconPosition:A=c._B.After,label:I,labelClassName:S,loading:w,onClick:C,onKeyDown:R,onFocus:fe,onBlur:be,counter:he,size:ve,target:ye=c.Qn.Blank,type:ge=c.dk.Button,appearance:xe=c.xz.Primary,tabIndex:ke=0,fullWidth:je}=e,Z=pe(e,["className","disabled","href","icon","iconClassName","iconPosition","label","labelClassName","loading","onClick","onKeyDown","onFocus","onBlur","counter","size","target","type","appearance","tabIndex","fullWidth"]);const Oe=le({label:I,iconPosition:A,icon:O}),G=_e({icon:O,iconClassName:z,iconPosition:A,label:I,labelClassName:S,loading:w,disabled:s,counter:he,"data-test-id":Z["data-test-id"]}),Se=w||s?-1:ke,we=H=>{if(s||w){H.preventDefault();return}C&&C(H)},V=Object.assign(Object.assign({},(0,_.z7)(Z)),{className:p()(B.button,d),"data-disabled":s||void 0,"aria-disabled":s||void 0,"data-loading":w||void 0,"data-size":ve,"data-full-width":je||void 0,"data-appearance":f[xe],"data-variant":Oe,onClick:we,onKeyDown:R,onFocus:fe,onBlur:be,tabIndex:Se});return l?(0,a.jsx)("a",Object.assign({role:"button",href:l,target:ye},V,{ref:r,children:G})):(0,a.jsx)("button",Object.assign({},V,{type:ge,ref:r,children:G}))})}),"./node_modules/.pnpm/@snack-uikit+button@0.19.13_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js":((k,h,n)=>{n.d(h,{F:()=>m,a:()=>a});function a({counter:p}){return{counter:p}}function m({disabled:p,href:v,icon:_,label:c,loading:x,onClick:f,onFocus:j,onBlur:y,onKeyDown:g}){return{disabled:p,href:v,icon:_,label:c,loading:x,onClick:f,onKeyDown:g,onFocus:j,onBlur:y}}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js":((k,h,n)=>{n.d(h,{A:()=>g});var a=n("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=n("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(o,b){var u={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&b.indexOf(t)<0&&(u[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(o);i<t.length;i++)b.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(o,t[i])&&(u[t[i]]=o[t[i]]);return u};const _=m.forwardRef((o,b)=>{var{size:u=24}=o,t=p(o,["size"]);t.width=void 0,t.height=void 0;const i="-kebab-s";return typeof u=="number"&&(t.style||(t.style={}),t.style.width=u+"px",t.style.height=u+"px"),(0,a.jsx)("svg",Object.assign({ref:b,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+i},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+i.substring(1)})}))});var c=function(o,b){var u={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&b.indexOf(t)<0&&(u[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(o);i<t.length;i++)b.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(o,t[i])&&(u[t[i]]=o[t[i]]);return u};const f=m.forwardRef((o,b)=>{var{size:u=24}=o,t=c(o,["size"]);t.width=void 0,t.height=void 0;const i="-kebab-xs";return typeof u=="number"&&(t.style||(t.style={}),t.style.width=u+"px",t.style.height=u+"px"),(0,a.jsx)("svg",Object.assign({ref:b,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+i},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+i.substring(1)})}))});var j=function(o,b){var u={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&b.indexOf(t)<0&&(u[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(o);i<t.length;i++)b.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(o,t[i])&&(u[t[i]]=o[t[i]]);return u};const g=(0,m.forwardRef)((o,b)=>{var{size:u=24}=o,t=j(o,["size"]);return Number(u)>=20?(0,a.jsx)(_,Object.assign({ref:b,size:u},t)):(0,a.jsx)(f,Object.assign({ref:b,size:u},t))})}),"./node_modules/.pnpm/@snack-uikit+utils@3.9.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((k,h,n)=>{n.d(h,{z7:()=>x});const a=/^data-test-/,m=/^(data|aria)-/;function p(f,j){return Object.keys(f).filter(y=>!y.match(j)).reduce((y,g)=>Object.assign(Object.assign({},y),{[g]:f[g]}),{})}function v(f,j){return Object.keys(f).reduce((y,g)=>(g.match(j)&&(y[g]=f[g]),y),{})}function _(f){return p(f,m)}function c(f){return v(f,a)}function x(f){return v(f,m)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.13_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css":((k,h,n)=>{n.d(h,{A:()=>c});var a=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=n.n(a),p=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=n.n(p),_=v()(m());_.push([k.id,`.button--k3xZM{
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
}`,""]),_.locals={button:"button--k3xZM",iconWithCounter:"iconWithCounter--ZM3e6",counterForLabel:"counterForLabel--Jz648",counterForIcon:"counterForIcon--WuZiV"};const c=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.7_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css":((k,h,n)=>{n.d(h,{A:()=>c});var a=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=n.n(a),p=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=n.n(p),_=v()(m());_.push([k.id,`.counter--vFwhF{
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
}`,""]),_.locals={counter:"counter--vFwhF",plus:"plus--tH1Ue",key:"key--taduX"};const c=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.6_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((k,h,n)=>{n.d(h,{A:()=>c});var a=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=n.n(a),p=n("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=n.n(p),_=v()(m());_.push([k.id,`.sun--dIEMM{
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
}`,""]),_.locals={sun:"sun--dIEMM","loading-wheel":"loading-wheel--XpGi3"};const c=_})}]);})();
