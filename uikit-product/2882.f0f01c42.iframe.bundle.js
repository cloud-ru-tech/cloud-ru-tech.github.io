"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2882],{"./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js":((h,c,e)=>{e.d(c,{Qn:()=>i,SK:()=>p,_B:()=>u,dk:()=>m,xz:()=>s});const s={Primary:"primary",Neutral:"neutral",Destructive:"destructive"},m={Button:"button",Submit:"submit",Reset:"reset"},i={Blank:"_blank",Self:"_self",Parent:"_parent",Top:"_top"},p={Xs:"xs",S:"s",M:"m",L:"l"},u={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js":((h,c,e)=>{e.d(c,{A:()=>b});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),i=e.n(m),p=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),o=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),_;(function(t){t.LabelOnly="label-only",t.IconOnly="icon-only",t.IconBefore="icon-before",t.IconAfter="icon-after"})(_||(_={}));const P={[o.xz.Neutral]:"neutral",[o.xz.Primary]:"primary",[o.xz.Destructive]:"red"};var k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(k),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),D=e.n(O),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=e.n(L),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),W=e.n(R),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),F=e.n(N),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(X),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"),y={};y.styleTagTransform=K(),y.setAttributes=W(),y.insert=M().bind(null,"head"),y.domAPI=D(),y.insertStyleElement=F();var V=A()(S.A,y);const v=S.A&&S.A.locals?S.A.locals:void 0;var g=e("./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"),Z=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js");function C({label:t,icon:n,iconPosition:l}){return t&&n&&l===o._B.After?_.IconAfter:t&&n&&l===o._B.Before?_.IconBefore:t?_.LabelOnly:_.IconOnly}function U({counter:t,loading:n,disabled:l,counterForIcon:a,"data-test-id":d}){return typeof(t==null?void 0:t.value)=="number"&&!n&&!l?(0,s.jsx)("span",{"data-test-id":`${d!=null?d:"button"}__counter`,className:i()(a?v.counterForIcon:v.counterForLabel),children:(0,s.jsx)(g.p,Object.assign({},t))}):void 0}function Q({icon:t,iconClassName:n,loading:l,wrappedCounter:a}){if(l)return(0,s.jsx)("span",{"data-test-id":"loading-icon",className:n,children:(0,s.jsx)(Z.b,{size:"s"})});if(t)return(0,s.jsxs)("span",{"data-test-id":"icon",className:i()(n,{[v.iconWithCounter]:!!a}),children:[t,a]})}function Y({label:t,labelClassName:n,wrappedCounter:l}){return t?(0,s.jsxs)("span",{"data-test-id":"label",className:n,children:[t,l]}):void 0}function r({icon:t,label:n,iconPosition:l,iconClassName:a,labelClassName:d,loading:x,disabled:E,counter:T,"data-test-id":z}){const I=t&&(l===o._B.After||!n),j=U({counter:T,loading:x,disabled:E,counterForIcon:I,"data-test-id":z}),B=Q({icon:t,iconClassName:a,loading:x,wrappedCounter:I?j:void 0}),w=Y({label:n,labelClassName:d,wrappedCounter:I?void 0:j});switch(l){case o._B.Before:return(0,s.jsxs)(s.Fragment,{children:[B,w]});case o._B.After:default:return(0,s.jsxs)(s.Fragment,{children:[w,B]})}}var f=function(t,n){var l={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(l[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(t);d<a.length;d++)n.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(t,a[d])&&(l[a[d]]=t[a[d]]);return l};const b=(0,p.forwardRef)((t,n)=>{var{className:l,disabled:a,href:d,icon:x,iconClassName:E,iconPosition:T=o._B.After,label:z,labelClassName:I,loading:j,onClick:B,onKeyDown:w,onFocus:q,onBlur:ee,counter:te,size:se,target:ne=o.Qn.Blank,type:ae=o.dk.Button,appearance:oe=o.xz.Primary,tabIndex:re=0,fullWidth:le}=t,G=f(t,["className","disabled","href","icon","iconClassName","iconPosition","label","labelClassName","loading","onClick","onKeyDown","onFocus","onBlur","counter","size","target","type","appearance","tabIndex","fullWidth"]);const de=C({label:z,iconPosition:T,icon:x}),H=r({icon:x,iconClassName:E,iconPosition:T,label:z,labelClassName:I,loading:j,disabled:a,counter:te,"data-test-id":G["data-test-id"]}),ie=j||a?-1:re,ue=J=>{if(a||j){J.preventDefault();return}B&&B(J)},$=Object.assign(Object.assign({},(0,u.z7)(G)),{className:i()(v.button,l),"data-disabled":a||void 0,"aria-disabled":a||void 0,"data-loading":j||void 0,"data-size":se,"data-full-width":le||void 0,"data-appearance":P[oe],"data-variant":de,onClick:ue,onKeyDown:w,onFocus:q,onBlur:ee,tabIndex:ie});return d?(0,s.jsx)("a",Object.assign({role:"button",href:d,target:ne},$,{ref:n,children:H})):(0,s.jsx)("button",Object.assign({},$,{type:ae,ref:n,children:H}))})}),"./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js":((h,c,e)=>{e.d(c,{F:()=>m,a:()=>s});function s({counter:i}){return{counter:i}}function m({disabled:i,href:p,icon:u,label:o,loading:_,onClick:P,onFocus:k,onBlur:A,onKeyDown:O}){return{disabled:i,href:p,icon:u,label:o,loading:_,onClick:P,onKeyDown:O,onFocus:k,onBlur:A}}}),"./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js":((h,c,e)=>{e.d(c,{p:()=>Y});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),i=e.n(m),p=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const u={Primary:"primary",Neutral:"neutral",Red:"red"},o={Count:"count",CountPlus:"count-plus",CountK:"count-k"},_={S:"s",M:"m"},P={Accent:"accent",Decor:"decor"},k=10,A=1e3,O="K";var D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(D),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=e.n(M),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),N=e.n(W),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),X=e.n(F),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=e.n(K),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),V=e.n(y),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),g={};g.styleTagTransform=V(),g.setAttributes=X(),g.insert=N().bind(null,"head"),g.domAPI=R(),g.insertStyleElement=S();var Z=L()(v.A,g);const C=v.A&&v.A.locals?v.A.locals:void 0;function U({value:r,variant:f,plusLimit:b}){if(f===o.Count)return r;if(f===o.CountPlus)return r<b?r:(0,s.jsxs)(s.Fragment,{children:[b-1,(0,s.jsx)("span",{className:C.plus,children:"+"})]});if(f===o.CountK)return r<A?r:(0,s.jsxs)(s.Fragment,{children:[Math.round(r/A),(0,s.jsx)("span",{className:C.key,children:O})]})}var Q=function(r,f){var b={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&f.indexOf(t)<0&&(b[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(r);n<t.length;n++)f.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(r,t[n])&&(b[t[n]]=r[t[n]]);return b};function Y(r){var{value:f,appearance:b=u.Primary,variant:t=o.Count,size:n=_.S,plusLimit:l=k,color:a=P.Accent,className:d}=r,x=Q(r,["value","appearance","variant","size","plusLimit","color","className"]);const E=U({value:f,variant:t,plusLimit:l});return(0,s.jsx)("div",Object.assign({className:i()(C.counter,d)},(0,p.z7)(x),{"data-size":n,"data-variant":t,"data-appearance":b,"data-color":a,children:E}))}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css":((h,c,e)=>{e.d(c,{A:()=>o});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(i),u=p()(m());u.push([h.id,`.button--Ci4Su{
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
.button--Ci4Su[data-full-width]{
  flex-grow:1;
  flex-shrink:1;
  width:100%;
}
.button--Ci4Su > *{
  cursor:pointer;
}
.button--Ci4Su:disabled, .button--Ci4Su[data-disabled], .button--Ci4Su[data-loading]{
  cursor:not-allowed;
}
.button--Ci4Su:disabled > *, .button--Ci4Su[data-disabled] > *, .button--Ci4Su[data-loading] > *{
  cursor:not-allowed;
}

.iconWithCounter--mr9pl{
  position:relative;
}

.counterForLabel--QRwOw{
  margin-left:var(--dimension-theme-general-4px, 4px);
}

.counterForIcon--OonET{
  position:absolute;
  top:-8px;
  left:calc(100% - 8px);
}`,""]),u.locals={button:"button--Ci4Su",iconWithCounter:"iconWithCounter--mr9pl",counterForLabel:"counterForLabel--QRwOw",counterForIcon:"counterForIcon--OonET"};const o=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css":((h,c,e)=>{e.d(c,{A:()=>o});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(i),u=p()(m());u.push([h.id,`.counter--X66vA{
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
}`,""]),u.locals={counter:"counter--X66vA",plus:"plus--hs8PR",key:"key--zBbeI"};const o=u})}]);})();
