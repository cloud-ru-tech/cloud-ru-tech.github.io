"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[8739],{"./node_modules/.pnpm/@snack-uikit+fields@0.51.14_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js":((g,m,e)=>{e.d(m,{m:()=>G});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),c=e.n(p),_=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.5_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),h=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),v=e("./node_modules/.pnpm/@snack-uikit+fields@0.51.14_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),E=e("./node_modules/.pnpm/@snack-uikit+fields@0.51.14_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),O=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),D=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),C=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),w=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(R),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=e.n(F),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),N=e.n(M),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),j=e.n(U),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),ne=e.n(y),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),V=e.n(W),k=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.51.14_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),i={};i.styleTagTransform=V(),i.setAttributes=j(),i.insert=N().bind(null,"head"),i.domAPI=B(),i.insertStyleElement=ne();var A=L()(k.A,i);const n=k.A&&k.A.locals?k.A.locals:void 0;function d(a){var o;let l,s;switch(a.validationState){case v.sv.Success:l=O.A,s=!0;break;case v.sv.Error:l=D.A,s=!0;break;case v.sv.Warning:l=C.A,s=!0;break;case v.sv.Default:default:l=w.A,s=!1;break}return((o=a.showHintIcon)!==null&&o!==void 0?o:s)?(0,t.jsx)(l,{size:16,"data-validation":a.validationState,className:n.hintIcon}):null}function u({length:a,hint:o,size:l,validationState:s=v.sv.Default,showHintIcon:r}){const x=!o&&a,b=a&&a.max&&a.current>a.max,P=(0,_.useMemo)(()=>d({validationState:s,showHintIcon:r}),[r,s]);return!o&&!a?null:(0,t.jsxs)("span",{className:n.footer,"data-reverse":x||void 0,"data-size":l,children:[o&&(0,t.jsxs)("span",{className:n.hintLayout,children:[P&&(0,t.jsx)("span",{className:n.hintIconContainer,"data-size":l,children:P}),(0,t.jsx)("span",{className:n.hint,"data-validation":s,"data-test-id":"field-decorator__hint",children:o})]}),a&&(0,t.jsxs)("span",{"data-test-id":"field-decorator__counter",className:n.counterLimit,children:[(0,t.jsx)("span",{"data-validation":s,"data-limit-exceeded":b||void 0,className:n.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:a.current}),(0,t.jsxs)("span",{"data-validation":s,"data-limit-exceeded":b||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",a.max]})]})]})}var K=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),Z=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),Y=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function X({label:a="",labelTooltip:o,caption:l,labelFor:s,size:r,required:x=!1,labelTooltipPlacement:b="top"}){return(0,t.jsxs)("span",{className:n.header,"data-size":r,children:[a&&(0,t.jsxs)("span",{className:n.labelLayout,children:[(0,t.jsx)("label",{className:n.label,htmlFor:s,"data-test-id":"field-decorator__label",children:(0,t.jsx)(Y.m,{text:a})}),x&&(0,t.jsx)("span",{className:n.required,"data-test-id":"field-decorator__required-sign",children:"*"}),o&&(0,t.jsx)(Z.m,{tip:o,placement:b,"data-test-id":"field-decorator__label-tooltip",triggerClassName:n.labelTooltipTrigger,children:(0,t.jsx)(K.A,{size:16,className:n.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),l&&(0,t.jsx)("span",{className:n.caption,children:l})]})}var H=function(a,o){var l={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&o.indexOf(s)<0&&(l[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(a);r<s.length;r++)o.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(a,s[r])&&(l[s[r]]=a[s[r]]);return l};const G=(0,_.forwardRef)((a,o)=>{var{children:l,className:s,label:r,labelTooltip:x,required:b,labelFor:P,caption:J,length:Q,hint:$,disabled:q,readonly:ee,showHintIcon:te,labelTooltipPlacement:ae,size:T=f.SK.S,error:z,validationState:se=v.sv.Default}=a,S=H(a,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const I=!q&&!ee,oe=(0,E.t)({validationState:se,error:z});return(0,t.jsxs)("div",Object.assign({className:c()(n.decorator,s)},(0,h.z7)(S),{"data-size":T,ref:o,children:[r&&(0,t.jsx)(X,{labelTooltipPlacement:ae,required:b,label:r,labelTooltip:x,labelFor:P,caption:J,size:T}),l,(0,t.jsx)(u,{length:I?Q:void 0,hint:z||$,showHintIcon:te,size:T,validationState:I?oe:v.sv.Default})]}))})}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.14_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js":((g,m,e)=>{e.d(m,{aJ:()=>p,sv:()=>t});const t={Default:"default",Error:"error",Warning:"warning",Success:"success"},p={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},c={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.14_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js":((g,m,e)=>{e.d(m,{t:()=>p});var t=e("./node_modules/.pnpm/@snack-uikit+fields@0.51.14_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function p({validationState:c,error:_}){return _?t.sv.Error:c!=null?c:t.sv.Default}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.5_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js":((g,m,e)=>{e.d(m,{K:()=>k});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),c=e.n(p),_=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const h={Text:"text",Password:"password",Number:"number",Tel:"tel",Email:"email",Url:"url"},v={Text:"text",Decimal:"decimal",Numeric:"numeric",Tel:"tel",Search:"search",Email:"email",Url:"url",None:"none"};var E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=e.n(E),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),C=e.n(D),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),R=e.n(w),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=e.n(L),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=e.n(B),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),U=e.n(N),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.5_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"),y={};y.styleTagTransform=U(),y.setAttributes=F(),y.insert=R().bind(null,"head"),y.domAPI=C(),y.insertStyleElement=M();var ne=O()(j.A,y);const W=j.A&&j.A.locals?j.A.locals:void 0;var V=function(i,A){var n={};for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&A.indexOf(d)<0&&(n[d]=i[d]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,d=Object.getOwnPropertySymbols(i);u<d.length;u++)A.indexOf(d[u])<0&&Object.prototype.propertyIsEnumerable.call(i,d[u])&&(n[d[u]]=i[d[u]]);return n};const k=(0,_.forwardRef)((i,A)=>{var{name:n,value:d="",onChange:u,placeholder:K,id:Z,className:Y,type:X=h.Text,inputMode:H=v.Text,disabled:G=!1,readonly:a=!1,autoComplete:o=!1,autoFocus:l=!1,maxLength:s,min:r,max:x,step:b,onFocus:P,onBlur:J,onKeyDown:Q,onPaste:$,tabIndex:q=0,onClick:ee,onMouseDown:te,spellCheck:ae,pattern:T}=i,z=V(i,["name","value","onChange","placeholder","id","className","type","inputMode","disabled","readonly","autoComplete","autoFocus","maxLength","min","max","step","onFocus","onBlur","onKeyDown","onPaste","tabIndex","onClick","onMouseDown","spellCheck","pattern"]);const se=I=>{u==null||u(I.target.value,I)};let S;switch(o){case!0:S="on";break;case!1:S="off";break;default:S=o;break}return(0,t.jsx)("input",Object.assign({name:n,maxLength:s,id:Z,className:c()(Y,W.inputPrivate),autoComplete:S,ref:A,value:d,onChange:se,placeholder:K,type:X,inputMode:H,disabled:G,readOnly:a,onFocus:P,onBlur:J,onKeyDown:Q,onPaste:$,tabIndex:q,onClick:ee,onMouseDown:te,min:r,max:x,step:b,spellCheck:ae,title:"",pattern:T,autoFocus:l},(0,f.z7)(z)))})}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.51.14_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css":((g,m,e)=>{e.d(m,{A:()=>h});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(t),c=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=e.n(c),f=_()(p());f.push([g.id,`.decorator--T0aUa{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  width:100%;
  min-width:0;
}
.decorator--T0aUa[data-size=s]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--T0aUa[data-size=m]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--T0aUa[data-size=l]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}

.header--O39bo{
  display:flex;
  gap:var(--dimension-050m, 4px);
  box-sizing:border-box;
  color:var(--sys-neutral-text-support, #6d707f);
}
.header--O39bo[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--O39bo[data-size=s] .caption--Uz5ty{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--O39bo[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--O39bo[data-size=m] .caption--Uz5ty{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--O39bo[data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--O39bo[data-size=l] .caption--Uz5ty{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.labelLayout--OpX3F{
  gap:var(--space-fields-label-gap, 2px);
  display:inline-flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.label--NGG4S{
  display:grid;
  color:var(--sys-neutral-text-support, #6d707f);
}

.required--WP77t{
  color:var(--sys-neutral-text-support, #6d707f);
}

.footer--C4jj3{
  gap:var(--space-fields-hint-container-gap, 16px);
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
}
.footer--C4jj3[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.footer--C4jj3[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--C4jj3[data-size=l]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--C4jj3[data-reverse]{
  justify-content:flex-end;
}

.hintLayout--DzXVA{
  gap:var(--space-fields-hint-gap, 2px);
  display:inline-flex;
  align-items:flex-start;
}

.hintIconContainer--Afa6j{
  display:flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.hintIconContainer--Afa6j[data-size=s]{
  width:var(--size-fields-hint-icon-container-s, 16px);
  height:var(--size-fields-hint-icon-container-s, 16px);
}
.hintIconContainer--Afa6j[data-size=m]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}
.hintIconContainer--Afa6j[data-size=l]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}

.hint--cEjqA{
  display:grid;
  flex-grow:1;
  word-break:break-word;
}
.hint--cEjqA[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.hint--cEjqA[data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.hint--cEjqA[data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.hint--cEjqA[data-validation=success]{
  color:var(--sys-green-text-main, #3d6035);
}

.icon--FY_4z{
  flex-shrink:0;
  box-sizing:content-box;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.hintIcon--btbDt{
  flex-shrink:0;
  box-sizing:content-box;
}
.hintIcon--btbDt[data-validation=default]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.hintIcon--btbDt[data-validation=error]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.hintIcon--btbDt[data-validation=warning]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.hintIcon--btbDt[data-validation=success]{
  color:var(--sys-green-accent-default, #57b762);
}

.counterLimit--OdUeP > span[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.counterLimit--OdUeP > span[data-limit-exceeded], .counterLimit--OdUeP > span[data-validation=error]{
  color:var(--sys-red-text-light, #e7756a);
}
.counterLimit--OdUeP > span[data-validation=warning]{
  color:var(--sys-yellow-text-light, #d3a736);
}
.counterLimit--OdUeP > span[data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.counterCurrentValue--Y9bP9[data-limit-exceeded][data-validation=default]{
  color:var(--sys-neutral-text-main, #41424e);
}
.counterCurrentValue--Y9bP9[data-limit-exceeded][data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.counterCurrentValue--Y9bP9[data-limit-exceeded][data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.counterCurrentValue--Y9bP9[data-limit-exceeded][data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.labelTooltipTrigger--fEEaY{
  cursor:pointer;
  display:flex;
  align-items:center;
  height:100%;
}`,""]),f.locals={decorator:"decorator--T0aUa",header:"header--O39bo",caption:"caption--Uz5ty",labelLayout:"labelLayout--OpX3F",label:"label--NGG4S",required:"required--WP77t",footer:"footer--C4jj3",hintLayout:"hintLayout--DzXVA",hintIconContainer:"hintIconContainer--Afa6j",hint:"hint--cEjqA",icon:"icon--FY_4z",hintIcon:"hintIcon--btbDt",counterLimit:"counterLimit--OdUeP",counterCurrentValue:"counterCurrentValue--Y9bP9",labelTooltipTrigger:"labelTooltipTrigger--fEEaY"};const h=f}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.5_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css":((g,m,e)=>{e.d(m,{A:()=>h});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(t),c=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=e.n(c),f=_()(p());f.push([g.id,`.inputPrivate--jR2Zp{
  box-sizing:border-box;
  width:100%;
  max-width:100%;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-main, #41424e);
  text-overflow:ellipsis;
  background-color:transparent;
  border:none;
  border-radius:0;
  outline:0;
}
.inputPrivate--jR2Zp::-moz-placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--jR2Zp::placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--jR2Zp:-moz-read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.inputPrivate--jR2Zp:read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.inputPrivate--jR2Zp:-moz-placeholder-shown{
  text-overflow:ellipsis;
}
.inputPrivate--jR2Zp:placeholder-shown{
  text-overflow:ellipsis;
}
.inputPrivate--jR2Zp[disabled]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--jR2Zp[type=number]{
  -moz-appearance:textfield;
}
.inputPrivate--jR2Zp[type=number]::-webkit-outer-spin-button, .inputPrivate--jR2Zp[type=number]::-webkit-inner-spin-button{
  margin:0;
  -webkit-appearance:none;
}`,""]),f.locals={inputPrivate:"inputPrivate--jR2Zp"};const h=f})}]);})();
