"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3890],{"./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"(j,_,e){e.d(_,{Qn:()=>r,SK:()=>f,_B:()=>l,dk:()=>p,xz:()=>t});const t={Primary:"primary",Neutral:"neutral",Destructive:"destructive"},p={Button:"button",Submit:"submit",Reset:"reset"},r={Blank:"_blank",Self:"_self",Parent:"_parent",Top:"_top"},f={Xs:"xs",S:"s",M:"m",L:"l"},l={Before:"before",After:"after"}},"./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js"(j,_,e){e.d(_,{A:()=>P});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(p),f=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),n=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),b;(function(s){s.LabelOnly="label-only",s.IconOnly="icon-only",s.IconBefore="icon-before",s.IconAfter="icon-after"})(b||(b={}));const E={[n.xz.Neutral]:"neutral",[n.xz.Primary]:"primary",[n.xz.Destructive]:"red"};var M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(M),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),z=e.n(T),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),w=e.n(W),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n(L),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),H=e.n(N),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=e.n(A),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"),v={};v.styleTagTransform=x(),v.setAttributes=R(),v.insert=w().bind(null,"head"),v.domAPI=z(),v.insertStyleElement=H();var U=S()(I.A,v);const g=I.A&&I.A.locals?I.A.locals:void 0;var d=e("./node_modules/.pnpm/@snack-uikit+counter@0.8.11_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"),k=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.10_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js");function h({label:s,icon:o,iconPosition:u}){return s&&o&&u===n._B.After?b.IconAfter:s&&o&&u===n._B.Before?b.IconBefore:s?b.LabelOnly:b.IconOnly}function m({counter:s,loading:o,disabled:u,counterForIcon:a,"data-test-id":c}){return typeof(s==null?void 0:s.value)=="number"&&!o&&!u?(0,t.jsx)("span",{"data-test-id":`${c!=null?c:"button"}__counter`,className:r()(a?g.counterForIcon:g.counterForLabel),children:(0,t.jsx)(d.p,Object.assign({},s))}):void 0}function y({icon:s,iconClassName:o,loading:u,wrappedCounter:a}){if(u)return(0,t.jsx)("span",{"data-test-id":"loading-icon",className:o,children:(0,t.jsx)(k.b,{size:"s"})});if(s)return(0,t.jsxs)("span",{"data-test-id":"icon",className:r()(o,{[g.iconWithCounter]:!!a}),children:[s,a]})}function C({label:s,labelClassName:o,wrappedCounter:u}){return s?(0,t.jsxs)("span",{"data-test-id":"label",className:o,children:[s,u]}):void 0}function i({icon:s,label:o,iconPosition:u,iconClassName:a,labelClassName:c,loading:B,disabled:F,counter:X,"data-test-id":Z}){const K=s&&(u===n._B.After||!o),D=m({counter:X,loading:B,disabled:F,counterForIcon:K,"data-test-id":Z}),Y=y({icon:s,iconClassName:a,loading:B,wrappedCounter:K?D:void 0}),G=C({label:o,labelClassName:c,wrappedCounter:K?void 0:D});switch(u){case n._B.Before:return(0,t.jsxs)(t.Fragment,{children:[Y,G]});case n._B.After:default:return(0,t.jsxs)(t.Fragment,{children:[G,Y]})}}var O=function(s,o){var u={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&o.indexOf(a)<0&&(u[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(s);c<a.length;c++)o.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(s,a[c])&&(u[a[c]]=s[a[c]]);return u};const P=(0,f.forwardRef)((s,o)=>{var{className:u,disabled:a,href:c,icon:B,iconClassName:F,iconPosition:X=n._B.After,label:Z,labelClassName:K,loading:D,onClick:Y,onKeyDown:G,onFocus:q,onBlur:ee,counter:se,size:te,target:ne=n.Qn.Blank,type:oe=n.dk.Button,appearance:ae=n.xz.Primary,tabIndex:le=0,fullWidth:re}=s,V=O(s,["className","disabled","href","icon","iconClassName","iconPosition","label","labelClassName","loading","onClick","onKeyDown","onFocus","onBlur","counter","size","target","type","appearance","tabIndex","fullWidth"]);const de=h({label:Z,iconPosition:X,icon:B}),Q=i({icon:B,iconClassName:F,iconPosition:X,label:Z,labelClassName:K,loading:D,disabled:a,counter:se,"data-test-id":V["data-test-id"]}),ie=D||a?-1:le,ue=J=>{if(a||D){J.preventDefault();return}Y&&Y(J)},$=Object.assign(Object.assign({},(0,l.z7)(V)),{className:r()(g.button,u),"data-disabled":a||void 0,"aria-disabled":a||void 0,"data-loading":D||void 0,"data-size":te,"data-full-width":re||void 0,"data-appearance":E[ae],"data-variant":de,onClick:ue,onKeyDown:G,onFocus:q,onBlur:ee,tabIndex:ie});return c?(0,t.jsx)("a",Object.assign({role:"button",href:c,target:ne},$,{ref:o,children:Q})):(0,t.jsx)("button",Object.assign({},$,{type:oe,ref:o,children:Q}))})},"./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js"(j,_,e){e.d(_,{F:()=>p,a:()=>t});function t({counter:r}){return{counter:r}}function p({disabled:r,href:f,icon:l,label:n,loading:b,onClick:E,onFocus:M,onBlur:S,onKeyDown:T}){return{disabled:r,href:f,icon:l,label:n,loading:b,onClick:E,onKeyDown:T,onFocus:M,onBlur:S}}},"./node_modules/.pnpm/@snack-uikit+counter@0.8.11_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"(j,_,e){e.d(_,{p:()=>C});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(p),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const l={Primary:"primary",Neutral:"neutral",Red:"red"},n={Count:"count",CountPlus:"count-plus",CountK:"count-k"},b={S:"s",M:"m"},E={Accent:"accent",Decor:"decor"},M=10,S=1e3,T="K";var z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=e.n(z),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),L=e.n(w),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),N=e.n(R),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=e.n(H),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=e.n(x),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),U=e.n(v),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.11_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),d={};d.styleTagTransform=U(),d.setAttributes=A(),d.insert=N().bind(null,"head"),d.domAPI=L(),d.insertStyleElement=I();var k=W()(g.A,d);const h=g.A&&g.A.locals?g.A.locals:void 0;function m({value:i,variant:O,plusLimit:P}){if(O===n.Count)return i;if(O===n.CountPlus)return i<P?i:(0,t.jsxs)(t.Fragment,{children:[P-1,(0,t.jsx)("span",{className:h.plus,children:"+"})]});if(O===n.CountK)return i<S?i:(0,t.jsxs)(t.Fragment,{children:[Math.round(i/S),(0,t.jsx)("span",{className:h.key,children:T})]})}var y=function(i,O){var P={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&O.indexOf(s)<0&&(P[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)O.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(P[s[o]]=i[s[o]]);return P};function C(i){var{value:O,appearance:P=l.Primary,variant:s=n.Count,size:o=b.S,plusLimit:u=M,color:a=E.Accent,className:c}=i,B=y(i,["value","appearance","variant","size","plusLimit","color","className"]);const F=m({value:O,variant:s,plusLimit:u});return(0,t.jsx)("div",Object.assign({className:r()(h.counter,c)},(0,f.z7)(B),{"data-size":o,"data-variant":s,"data-appearance":P,"data-color":a,children:F}))}},"./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"(j,_,e){e.d(_,{c:()=>g});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(p),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const l={Horizontal:"horizontal",Vertical:"vertical"},n={Light:"light",Regular:"regular"};var b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(b),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),S=e.n(M),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),z=e.n(T),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),w=e.n(W),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n(L),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),H=e.n(N),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),x={};x.styleTagTransform=H(),x.setAttributes=w(),x.insert=z().bind(null,"head"),x.domAPI=S(),x.insertStyleElement=R();var I=E()(A.A,x);const v=A.A&&A.A.locals?A.A.locals:void 0;var U=function(d,k){var h={};for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&k.indexOf(m)<0&&(h[m]=d[m]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,m=Object.getOwnPropertySymbols(d);y<m.length;y++)k.indexOf(m[y])<0&&Object.prototype.propertyIsEnumerable.call(d,m[y])&&(h[m[y]]=d[m[y]]);return h};function g(d){var{className:k,orientation:h=l.Horizontal,weight:m=n.Regular}=d,y=U(d,["className","orientation","weight"]);const C=Object.assign(Object.assign({},(0,f.z7)(y)),{"data-weight":m});return h===l.Horizontal?(0,t.jsx)("hr",Object.assign({className:r()(v.horizontal,k)},C)):(0,t.jsx)("div",Object.assign({className:r()(v.vertical,k)},C))}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"(j,_,e){e.d(_,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(r),l=f()(p());l.push([j.id,`.button--OfyWy{
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
}`,""]),l.locals={button:"button--OfyWy",iconWithCounter:"iconWithCounter--ZWvHT",counterForLabel:"counterForLabel--fxilP",counterForIcon:"counterForIcon--HLmeW"};const n=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.11_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"(j,_,e){e.d(_,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(r),l=f()(p());l.push([j.id,`.counter--MMOHY{
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
}`,""]),l.locals={counter:"counter--MMOHY",plus:"plus--BHl8e",key:"key--GZHMp"};const n=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"(j,_,e){e.d(_,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(r),l=f()(p());l.push([j.id,`.horizontal--wM2qX{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  width:100%;
}
.horizontal--wM2qX[data-weight=regular]{
  height:1px;
}
.horizontal--wM2qX[data-weight=light]{
  height:0.5px;
}

.vertical--PdYDD{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  height:100%;
}
.vertical--PdYDD[data-weight=regular]{
  width:1px;
}
.vertical--PdYDD[data-weight=light]{
  width:0.5px;
}`,""]),l.locals={horizontal:"horizontal--wM2qX",vertical:"vertical--PdYDD"};const n=l}}]);})();
