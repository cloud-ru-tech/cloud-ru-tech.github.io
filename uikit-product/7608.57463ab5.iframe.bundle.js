"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7608],{"./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"(h,u,e){e.d(u,{Qn:()=>i,SK:()=>m,_B:()=>c,dk:()=>p,xz:()=>t});const t={Primary:"primary",Neutral:"neutral",Destructive:"destructive"},p={Button:"button",Submit:"submit",Reset:"reset"},i={Blank:"_blank",Self:"_self",Parent:"_parent",Top:"_top"},m={Xs:"xs",S:"s",M:"m",L:"l"},c={Before:"before",After:"after"}},"./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js"(h,u,e){e.d(u,{A:()=>b});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),i=e.n(p),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),o=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),_;(function(s){s.LabelOnly="label-only",s.IconOnly="icon-only",s.IconBefore="icon-before",s.IconAfter="icon-after"})(_||(_={}));const k={[o.xz.Neutral]:"neutral",[o.xz.Primary]:"primary",[o.xz.Destructive]:"red"};var P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=e.n(P),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=e.n(A),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),w=e.n(D),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),H=e.n(L),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n(N),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(F),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"),v={};v.styleTagTransform=K(),v.setAttributes=H(),v.insert=w().bind(null,"head"),v.domAPI=W(),v.insertStyleElement=R();var X=O()(S.A,v);const y=S.A&&S.A.locals?S.A.locals:void 0;var g=e("./node_modules/.pnpm/@snack-uikit+counter@0.8.11_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"),G=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.10_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js");function M({label:s,icon:n,iconPosition:r}){return s&&n&&r===o._B.After?_.IconAfter:s&&n&&r===o._B.Before?_.IconBefore:s?_.LabelOnly:_.IconOnly}function Y({counter:s,loading:n,disabled:r,counterForIcon:a,"data-test-id":d}){return typeof(s==null?void 0:s.value)=="number"&&!n&&!r?(0,t.jsx)("span",{"data-test-id":`${d!=null?d:"button"}__counter`,className:i()(a?y.counterForIcon:y.counterForLabel),children:(0,t.jsx)(g.p,Object.assign({},s))}):void 0}function U({icon:s,iconClassName:n,loading:r,wrappedCounter:a}){if(r)return(0,t.jsx)("span",{"data-test-id":"loading-icon",className:n,children:(0,t.jsx)(G.b,{size:"s"})});if(s)return(0,t.jsxs)("span",{"data-test-id":"icon",className:i()(n,{[y.iconWithCounter]:!!a}),children:[s,a]})}function Z({label:s,labelClassName:n,wrappedCounter:r}){return s?(0,t.jsxs)("span",{"data-test-id":"label",className:n,children:[s,r]}):void 0}function l({icon:s,label:n,iconPosition:r,iconClassName:a,labelClassName:d,loading:x,disabled:E,counter:T,"data-test-id":C}){const I=s&&(r===o._B.After||!n),j=Y({counter:T,loading:x,disabled:E,counterForIcon:I,"data-test-id":C}),B=U({icon:s,iconClassName:a,loading:x,wrappedCounter:I?j:void 0}),z=Z({label:n,labelClassName:d,wrappedCounter:I?void 0:j});switch(r){case o._B.Before:return(0,t.jsxs)(t.Fragment,{children:[B,z]});case o._B.After:default:return(0,t.jsxs)(t.Fragment,{children:[z,B]})}}var f=function(s,n){var r={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&n.indexOf(a)<0&&(r[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(s);d<a.length;d++)n.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(s,a[d])&&(r[a[d]]=s[a[d]]);return r};const b=(0,m.forwardRef)((s,n)=>{var{className:r,disabled:a,href:d,icon:x,iconClassName:E,iconPosition:T=o._B.After,label:C,labelClassName:I,loading:j,onClick:B,onKeyDown:z,onFocus:q,onBlur:ee,counter:se,size:te,target:ne=o.Qn.Blank,type:ae=o.dk.Button,appearance:oe=o.xz.Primary,tabIndex:le=0,fullWidth:re}=s,Q=f(s,["className","disabled","href","icon","iconClassName","iconPosition","label","labelClassName","loading","onClick","onKeyDown","onFocus","onBlur","counter","size","target","type","appearance","tabIndex","fullWidth"]);const de=M({label:C,iconPosition:T,icon:x}),V=l({icon:x,iconClassName:E,iconPosition:T,label:C,labelClassName:I,loading:j,disabled:a,counter:se,"data-test-id":Q["data-test-id"]}),ie=j||a?-1:le,ce=J=>{if(a||j){J.preventDefault();return}B&&B(J)},$=Object.assign(Object.assign({},(0,c.z7)(Q)),{className:i()(y.button,r),"data-disabled":a||void 0,"aria-disabled":a||void 0,"data-loading":j||void 0,"data-size":te,"data-full-width":re||void 0,"data-appearance":k[oe],"data-variant":de,onClick:ce,onKeyDown:z,onFocus:q,onBlur:ee,tabIndex:ie});return d?(0,t.jsx)("a",Object.assign({role:"button",href:d,target:ne},$,{ref:n,children:V})):(0,t.jsx)("button",Object.assign({},$,{type:ae,ref:n,children:V}))})},"./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js"(h,u,e){e.d(u,{F:()=>p,a:()=>t});function t({counter:i}){return{counter:i}}function p({disabled:i,href:m,icon:c,label:o,loading:_,onClick:k,onFocus:P,onBlur:O,onKeyDown:A}){return{disabled:i,href:m,icon:c,label:o,loading:_,onClick:k,onKeyDown:A,onFocus:P,onBlur:O}}},"./node_modules/.pnpm/@snack-uikit+counter@0.8.11_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"(h,u,e){e.d(u,{p:()=>Z});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),i=e.n(p),m=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const c={Primary:"primary",Neutral:"neutral",Red:"red"},o={Count:"count",CountPlus:"count-plus",CountK:"count-k"},_={S:"s",M:"m"},k={Accent:"accent",Decor:"decor"},P=10,O=1e3,A="K";var W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(W),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),L=e.n(w),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),N=e.n(H),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=e.n(R),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=e.n(K),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),X=e.n(v),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.11_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),g={};g.styleTagTransform=X(),g.setAttributes=F(),g.insert=N().bind(null,"head"),g.domAPI=L(),g.insertStyleElement=S();var G=D()(y.A,g);const M=y.A&&y.A.locals?y.A.locals:void 0;function Y({value:l,variant:f,plusLimit:b}){if(f===o.Count)return l;if(f===o.CountPlus)return l<b?l:(0,t.jsxs)(t.Fragment,{children:[b-1,(0,t.jsx)("span",{className:M.plus,children:"+"})]});if(f===o.CountK)return l<O?l:(0,t.jsxs)(t.Fragment,{children:[Math.round(l/O),(0,t.jsx)("span",{className:M.key,children:A})]})}var U=function(l,f){var b={};for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&f.indexOf(s)<0&&(b[s]=l[s]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(l);n<s.length;n++)f.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(l,s[n])&&(b[s[n]]=l[s[n]]);return b};function Z(l){var{value:f,appearance:b=c.Primary,variant:s=o.Count,size:n=_.S,plusLimit:r=P,color:a=k.Accent,className:d}=l,x=U(l,["value","appearance","variant","size","plusLimit","color","className"]);const E=Y({value:f,variant:s,plusLimit:r});return(0,t.jsx)("div",Object.assign({className:i()(M.counter,d)},(0,m.z7)(x),{"data-size":n,"data-variant":s,"data-appearance":b,"data-color":a,children:E}))}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"(h,u,e){e.d(u,{A:()=>o});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(t),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(i),c=m()(p());c.push([h.id,`.button--OfyWy{
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
}`,""]),c.locals={button:"button--OfyWy",iconWithCounter:"iconWithCounter--ZWvHT",counterForLabel:"counterForLabel--fxilP",counterForIcon:"counterForIcon--HLmeW"};const o=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.11_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"(h,u,e){e.d(u,{A:()=>o});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(t),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(i),c=m()(p());c.push([h.id,`.counter--MMOHY{
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
}`,""]),c.locals={counter:"counter--MMOHY",plus:"plus--BHl8e",key:"key--GZHMp"};const o=c}}]);})();
