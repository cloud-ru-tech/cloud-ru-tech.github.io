"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[511],{"./node_modules/.pnpm/@snack-uikit+fields@1.0.2_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"(L,m,e){e.d(m,{V:()=>N});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),i=e.n(d),f=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),r=e("./node_modules/.pnpm/@snack-uikit+fields@1.0.2_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(l),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),T=e.n(C),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=e.n(I),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=e.n(R),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),W=e.n(V),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(F),Q=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@1.0.2_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"),b={};b.styleTagTransform=K(),b.setAttributes=B(),b.insert=D().bind(null,"head"),b.domAPI=T(),b.insertStyleElement=W();var H=j()(Q.A,b);const _=Q.A&&Q.A.locals?Q.A.locals:void 0;var g=function(c,z){var h={};for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&z.indexOf(n)<0&&(h[n]=c[n]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(c);a<n.length;a++)z.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(c,n[a])&&(h[n[a]]=c[n[a]]);return h};function N(c){var{className:z,children:h,size:n,validationState:a,variant:u,disabled:p,readonly:s,focused:o,disableFocus:P,selectable:k,style:y,prefix:v,postfix:x,inputRef:M}=c,w=g(c,["className","children","size","validationState","variant","disabled","readonly","focused","disableFocus","selectable","style","prefix","postfix","inputRef"]);const A=()=>{var E;p||(E=M.current)===null||E===void 0||E.focus()};return(0,t.jsxs)("div",Object.assign({className:i()(z,_.container),style:y,"data-size":n,"data-validation":p||s?r.sv.Default:a,"data-variant":u,"data-disabled":p||void 0,"data-readonly":s||void 0,"data-focused":o||void 0,"data-disable-focus":P||void 0,"data-selectable":k||void 0,"data-test-id":"field-container-private",onClick:A,role:"textbox",tabIndex:-1},(0,f.z7)(w),{children:[v&&(0,t.jsx)("span",{className:_.prefix,"data-test-id":"field-container-private__prefix-icon",children:v}),h,x&&(0,t.jsx)("span",{className:_.postfix,children:x})]}))}},"./node_modules/.pnpm/@snack-uikit+fields@1.0.2_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"(L,m,e){e.d(m,{x:()=>n});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+input-private@5.0.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),f=e("./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js"),r=e.n(f),l=e("./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),j=e("./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/copy/index.js");function C({size:a,isChecked:u}){switch(a){case i.Vp.S:return u?(0,t.jsx)(l.A,{size:16}):(0,t.jsx)(j.A,{size:16});case i.Vp.M:default:return u?(0,t.jsx)(l.A,{size:24}):(0,t.jsx)(j.A,{size:24})}}var T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(T),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=e.n(D),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),V=e.n(B),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=e.n(W),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Q=e.n(K),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),H=e.n(b),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@1.0.2_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonCopyValue/styles.module.css"),g={};g.styleTagTransform=H(),g.setAttributes=F(),g.insert=V().bind(null,"head"),g.domAPI=R(),g.insertStyleElement=Q();var N=I()(_.A,g);const c=_.A&&_.A.locals?_.A.locals:void 0,z=(0,d.forwardRef)(({size:a,valueToCopy:u,tabIndex:p=-1,onKeyDown:s,onClick:o,onValueRequest:P,disabled:k},y)=>{const[v,x]=(0,d.useState)(!1),M=(0,d.useRef)(),w=()=>x(!1),A=(S,U)=>{const O=U||u;O&&r()(O,{format:"text/plain"}),x(!0),clearTimeout(M.current),M.current=setTimeout(w,2e3),o==null||o(S)},E=S=>{S.stopPropagation(),P?P().then(({success:U,value:O})=>{U&&A(S,O)}):A(S)};return(0,d.useEffect)(()=>()=>{w(),clearTimeout(M.current)},[]),(0,t.jsx)("button",{className:c.buttonCopyValue,"data-size":a,"data-disabled":k||void 0,onClick:E,"data-test-id":"button-copy-value",ref:y,onKeyDown:s,tabIndex:p,type:"button",disabled:k,children:C({size:a,isChecked:v})})});var h=function(a,u){var p={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&u.indexOf(s)<0&&(p[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(a);o<s.length;o++)u.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(a,s[o])&&(p[s[o]]=a[s[o]]);return p};function n({copyButtonRef:a,showCopyButton:u,size:p,valueToCopy:s,onValueRequest:o,onCopyButtonClick:P,disabled:k,prefix:y="",postfix:v=""}){return(0,d.useMemo)(()=>({id:"copy",active:!0,ref:a,show:u,render:x=>{var{key:M}=x,w=h(x,["key"]);return(0,t.jsx)(z,Object.assign({},w,{size:i._h[p],valueToCopy:(y!=null?y:"")+s+(v!=null?v:""),onValueRequest:o,onClick:P,disabled:k}),M)}}),[a,u,p,y,s,v,o,P,k])}},"./node_modules/.pnpm/@snack-uikit+fields@1.0.2_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"(L,m,e){e.d(m,{I:()=>d});var t=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function d({value:i,onChange:f,defaultValue:r}){return(0,t.iC)(i,r,l=>{const j=typeof l=="function"?l(i):l;f==null||f(j)})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@1.0.2_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonCopyValue/styles.module.css"(L,m,e){e.d(m,{A:()=>l});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(i),r=f()(d());r.push([L.id,`.buttonCopyValue--LHlav{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonCopyValue--LHlav[data-size=s]{
  width:var(--size-fields-buttons-s, 16px);
  height:var(--size-fields-buttons-s, 16px);
  border-radius:var(--radius-fields-buttons-s, 8px);
}
.buttonCopyValue--LHlav[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.buttonCopyValue--LHlav[data-size=m]{
  width:var(--size-fields-buttons-m, 24px);
  height:var(--size-fields-buttons-m, 24px);
  border-radius:var(--radius-fields-buttons-m, 12px);
}
.buttonCopyValue--LHlav[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonCopyValue--LHlav:hover{
  cursor:pointer;
  color:var(--sys-neutral-text-support, #6d707f);
}
.buttonCopyValue--LHlav:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-support, #6d707f);
  outline-color:var(--sys-available-complementary, #1c1c24);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonCopyValue--LHlav:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.buttonCopyValue--LHlav[data-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),r.locals={buttonCopyValue:"buttonCopyValue--LHlav"};const l=r},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@1.0.2_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"(L,m,e){e.d(m,{A:()=>l});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(i),r=f()(d());r.push([L.id,`.container--MQaPL[data-validation=default]{
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--MQaPL[data-validation=default]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-decor-hovered, #b3deca);
}
.container--MQaPL[data-validation=default]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--MQaPL[data-validation=default]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-accent-default, #389f74);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}
.container--MQaPL[data-validation=error]{
  background-color:var(--sys-red-background1-level, #fef6f3);
  border-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--MQaPL[data-validation=error]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-decor-hovered, #fac1b3);
}
.container--MQaPL[data-validation=error]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--MQaPL[data-validation=error]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-accent-default, #cb3f3e);
  outline-color:var(--sys-red-decor-activated, #fbab99);
}
.container--MQaPL[data-validation=warning]{
  background-color:var(--sys-yellow-background1-level, #fcfbef);
  border-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.container--MQaPL[data-validation=warning]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.container--MQaPL[data-validation=warning]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--MQaPL[data-validation=warning]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-accent-default, #e2b134);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
}
.container--MQaPL[data-validation=success]{
  background-color:var(--sys-green-background1-level, #f6fdf3);
  border-color:var(--sys-green-decor-default, #d2ead0);
}
.container--MQaPL[data-validation=success]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.container--MQaPL[data-validation=success]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--MQaPL[data-validation=success]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-accent-default, #57b762);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
}
.container--MQaPL{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-sizing:border-box;
  border-style:solid;
}
.container--MQaPL[data-size=s]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--MQaPL[data-size=s],
.container--MQaPL[data-size=s] input,
.container--MQaPL[data-size=s] select,
.container--MQaPL[data-size=s] textarea,
.container--MQaPL[data-size=s] span{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.container--MQaPL[data-size=s][data-variant=single-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--MQaPL[data-size=s][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-button, 0px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--MQaPL[data-size=s][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-button, 0px);
  height:var(--size-fields-s, 32px);
}
.container--MQaPL[data-size=s][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-s-top, 7px);
  padding-bottom:var(--space-fields-multi-line-container-s-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-s-left, 7px);
  padding-right:var(--space-fields-multi-line-container-s-right, 2px);
}
.container--MQaPL[data-size=m]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--MQaPL[data-size=m],
.container--MQaPL[data-size=m] input,
.container--MQaPL[data-size=m] select,
.container--MQaPL[data-size=m] textarea,
.container--MQaPL[data-size=m] span{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.container--MQaPL[data-size=m][data-variant=single-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--MQaPL[data-size=m][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-button, 0px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--MQaPL[data-size=m][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-button, 0px);
  height:var(--size-fields-m, 40px);
}
.container--MQaPL[data-size=m][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-m-top, 9px);
  padding-bottom:var(--space-fields-multi-line-container-m-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-m-left, 9px);
  padding-right:var(--space-fields-multi-line-container-m-right, 2px);
}
.container--MQaPL[data-size=l]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--MQaPL[data-size=l],
.container--MQaPL[data-size=l] input,
.container--MQaPL[data-size=l] select,
.container--MQaPL[data-size=l] textarea,
.container--MQaPL[data-size=l] span{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.container--MQaPL[data-size=l][data-variant=single-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--MQaPL[data-size=l][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-button, 0px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--MQaPL[data-size=l][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-button, 0px);
  height:var(--size-fields-l, 48px);
}
.container--MQaPL[data-size=l][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-l-top, 11px);
  padding-bottom:var(--space-fields-multi-line-container-l-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-l-left, 11px);
  padding-right:var(--space-fields-multi-line-container-l-right, 2px);
}
.container--MQaPL[data-selectable],
.container--MQaPL[data-selectable] input,
.container--MQaPL[data-selectable] select,
.container--MQaPL[data-selectable] textarea,
.container--MQaPL[data-selectable] span{
  cursor:pointer;
}
.container--MQaPL[data-readonly],
.container--MQaPL[data-readonly] input,
.container--MQaPL[data-readonly] select,
.container--MQaPL[data-readonly] textarea,
.container--MQaPL[data-readonly] span{
  cursor:default;
}
.container--MQaPL[data-readonly], .container--MQaPL[data-readonly]:hover{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.container--MQaPL[data-readonly]:not([data-disable-focus]):focus-within, .container--MQaPL[data-readonly]:not([data-disable-focus])[data-focused]{
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}
.container--MQaPL[data-disabled],
.container--MQaPL[data-disabled] input,
.container--MQaPL[data-disabled] select,
.container--MQaPL[data-disabled] textarea,
.container--MQaPL[data-disabled] span{
  cursor:not-allowed;
  background-color:var(--sys-neutral-background, #eeeff3);
}
.container--MQaPL[data-disabled], .container--MQaPL[data-disabled]:focus-within, .container--MQaPL[data-disabled][data-focused], .container--MQaPL[data-disabled]:hover{
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}

.prefix--POREx{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

[data-size=s] .prefix--POREx, [data-size=s] .postfix--Q8rEi{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  align-items:center;
}

[data-size=m] .prefix--POREx, [data-size=m] .postfix--Q8rEi{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  align-items:center;
}

[data-size=l] .prefix--POREx, [data-size=l] .postfix--Q8rEi{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  align-items:center;
}`,""]),r.locals={container:"container--MQaPL",prefix:"prefix--POREx",postfix:"postfix--Q8rEi"};const l=r}}]);})();
