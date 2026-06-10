"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9682],{"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"(y,c,e){e.d(c,{m:()=>I});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=e.n(u),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),g=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),b=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),T=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),G=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),A=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),P=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),E=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(M),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=e.n(O),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),x=e.n(D),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),X=e.n(h),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n(z),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),m=e.n(F),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),v={};v.styleTagTransform=m(),v.setAttributes=X(),v.insert=x().bind(null,"head"),v.domAPI=B(),v.insertStyleElement=R();var f=C()(_.A,v);const n=_.A&&_.A.locals?_.A.locals:void 0;function L(t){var o;let i,s;switch(t.validationState){case b.sv.Success:i=G.A,s=!0;break;case b.sv.Error:i=A.A,s=!0;break;case b.sv.Warning:i=P.A,s=!0;break;case b.sv.Default:default:i=E.A,s=!1;break}return((o=t.showHintIcon)!==null&&o!==void 0?o:s)?(0,a.jsx)(i,{size:16,"data-validation":t.validationState,className:n.hintIcon}):null}function S({length:t,hint:o,size:i,validationState:s=b.sv.Default,showHintIcon:r}){const j=!o&&t,k=t&&t.max&&t.current>t.max,J=(0,d.useMemo)(()=>L({validationState:s,showHintIcon:r}),[r,s]);return!o&&!t?null:(0,a.jsxs)("span",{className:n.footer,"data-reverse":j||void 0,"data-size":i,children:[o&&(0,a.jsxs)("span",{className:n.hintLayout,children:[J&&(0,a.jsx)("span",{className:n.hintIconContainer,"data-size":i,children:J}),(0,a.jsx)("span",{className:n.hint,"data-validation":s,"data-test-id":"field-decorator__hint",children:o})]}),t&&(0,a.jsxs)("span",{"data-test-id":"field-decorator__counter",className:n.counterLimit,children:[(0,a.jsx)("span",{"data-validation":s,"data-limit-exceeded":k||void 0,className:n.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:t.current}),(0,a.jsxs)("span",{"data-validation":s,"data-limit-exceeded":k||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",t.max]})]})]})}var w=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),N=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),W=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function V({label:t="",labelTooltip:o,caption:i,labelFor:s,size:r,required:j=!1,labelTooltipPlacement:k="top"}){return(0,a.jsxs)("span",{className:n.header,"data-size":r,children:[t&&(0,a.jsxs)("span",{className:n.labelLayout,children:[(0,a.jsx)("label",{className:n.label,htmlFor:s,"data-test-id":"field-decorator__label",children:(0,a.jsx)(W.m,{text:t})}),j&&(0,a.jsx)("span",{className:n.required,"data-test-id":"field-decorator__required-sign",children:"*"}),o&&(0,a.jsx)(N.m,{tip:o,placement:k,"data-test-id":"field-decorator__label-tooltip",triggerClassName:n.labelTooltipTrigger,children:(0,a.jsx)(w.A,{size:16,className:n.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),i&&(0,a.jsx)("span",{className:n.caption,children:i})]})}var U=function(t,o){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(i[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)o.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(i[s[r]]=t[s[r]]);return i};const I=(0,d.forwardRef)((t,o)=>{var{children:i,className:s,label:r,labelTooltip:j,required:k,labelFor:J,caption:Y,length:Q,hint:$,disabled:q,readonly:ee,showHintIcon:ae,labelTooltipPlacement:te,size:K=p.SK.S,error:H,validationState:se=b.sv.Default}=t,ne=U(t,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const Z=!q&&!ee,ie=(0,T.t)({validationState:se,error:H});return(0,a.jsxs)("div",Object.assign({className:l()(n.decorator,s)},(0,g.z7)(ne),{"data-size":K,ref:o,children:[r&&(0,a.jsx)(V,{labelTooltipPlacement:te,required:k,label:r,labelTooltip:j,labelFor:J,caption:Y,size:K}),i,(0,a.jsx)(S,{length:Z?Q:void 0,hint:H||$,showHintIcon:ae,size:K,validationState:Z?ie:b.sv.Default})]}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"(y,c,e){e.d(c,{aJ:()=>u,sv:()=>a});const a={Default:"default",Error:"error",Warning:"warning",Success:"success"},u={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},l=null},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"(y,c,e){e.d(c,{V:()=>F});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=e.n(u),d=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),p=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(g),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),G=e.n(T),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),P=e.n(A),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(E),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),O=e.n(C),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=e.n(B),x=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"),h={};h.styleTagTransform=D(),h.setAttributes=M(),h.insert=P().bind(null,"head"),h.domAPI=G(),h.insertStyleElement=O();var X=b()(x.A,h);const z=x.A&&x.A.locals?x.A.locals:void 0;var R=function(m,_){var v={};for(var f in m)Object.prototype.hasOwnProperty.call(m,f)&&_.indexOf(f)<0&&(v[f]=m[f]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,f=Object.getOwnPropertySymbols(m);n<f.length;n++)_.indexOf(f[n])<0&&Object.prototype.propertyIsEnumerable.call(m,f[n])&&(v[f[n]]=m[f[n]]);return v};function F(m){var{className:_,children:v,size:f,validationState:n,variant:L,disabled:S,readonly:w,focused:N,disableFocus:W,selectable:V,style:U,prefix:I,postfix:t,inputRef:o}=m,i=R(m,["className","children","size","validationState","variant","disabled","readonly","focused","disableFocus","selectable","style","prefix","postfix","inputRef"]);const s=()=>{var r;S||(r=o.current)===null||r===void 0||r.focus()};return(0,a.jsxs)("div",Object.assign({className:l()(_,z.container),style:U,"data-size":f,"data-validation":S||w?p.sv.Default:n,"data-variant":L,"data-disabled":S||void 0,"data-readonly":w||void 0,"data-focused":N||void 0,"data-disable-focus":W||void 0,"data-selectable":V||void 0,"data-test-id":"field-container-private",onClick:s,role:"textbox",tabIndex:-1},(0,d.z7)(i),{children:[I&&(0,a.jsx)("span",{className:z.prefix,"data-test-id":"field-container-private__prefix-icon",children:I}),v,t&&(0,a.jsx)("span",{className:z.postfix,children:t})]}))}},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"(y,c,e){e.d(c,{I:()=>u});var a=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function u({value:l,onChange:d,defaultValue:p}){return(0,a.iC)(l,p,g=>{const b=typeof g=="function"?g(l):g;d==null||d(b)})}},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"(y,c,e){e.d(c,{t:()=>u});var a=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function u({validationState:l,error:d}){return d?a.sv.Error:l!=null?l:a.sv.Default}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"(y,c,e){e.d(c,{A:()=>g});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(l),p=d()(u());p.push([y.id,`.decorator--w1uHQ{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  width:100%;
  min-width:0;
}
.decorator--w1uHQ[data-size=s]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--w1uHQ[data-size=m]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--w1uHQ[data-size=l]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}

.header--MMmBW{
  display:flex;
  gap:var(--dimension-050m, 4px);
  box-sizing:border-box;
  color:var(--sys-neutral-text-support, #6d707f);
}
.header--MMmBW[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--MMmBW[data-size=s] .caption--RgTxc{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--MMmBW[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--MMmBW[data-size=m] .caption--RgTxc{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--MMmBW[data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--MMmBW[data-size=l] .caption--RgTxc{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.labelLayout--HfSuZ{
  gap:var(--space-fields-label-gap, 2px);
  display:inline-flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.label--oCjkn{
  display:grid;
  color:var(--sys-neutral-text-support, #6d707f);
}

.required--KNRpk{
  color:var(--sys-neutral-text-support, #6d707f);
}

.footer--z2ES_{
  gap:var(--space-fields-hint-container-gap, 16px);
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
}
.footer--z2ES_[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.footer--z2ES_[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--z2ES_[data-size=l]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--z2ES_[data-reverse]{
  justify-content:flex-end;
}

.hintLayout--x8KS1{
  gap:var(--space-fields-hint-gap, 2px);
  display:inline-flex;
  align-items:flex-start;
}

.hintIconContainer--g9Zz8{
  display:flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.hintIconContainer--g9Zz8[data-size=s]{
  width:var(--size-fields-hint-icon-container-s, 16px);
  height:var(--size-fields-hint-icon-container-s, 16px);
}
.hintIconContainer--g9Zz8[data-size=m]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}
.hintIconContainer--g9Zz8[data-size=l]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}

.hint--sSf9n{
  display:grid;
  flex-grow:1;
  word-break:break-word;
}
.hint--sSf9n[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.hint--sSf9n[data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.hint--sSf9n[data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.hint--sSf9n[data-validation=success]{
  color:var(--sys-green-text-main, #3d6035);
}

.icon--NM7j3{
  flex-shrink:0;
  box-sizing:content-box;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.hintIcon--yXISs{
  flex-shrink:0;
  box-sizing:content-box;
}
.hintIcon--yXISs[data-validation=default]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.hintIcon--yXISs[data-validation=error]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.hintIcon--yXISs[data-validation=warning]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.hintIcon--yXISs[data-validation=success]{
  color:var(--sys-green-accent-default, #57b762);
}

.counterLimit--nVIYP > span[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.counterLimit--nVIYP > span[data-limit-exceeded], .counterLimit--nVIYP > span[data-validation=error]{
  color:var(--sys-red-text-light, #e7756a);
}
.counterLimit--nVIYP > span[data-validation=warning]{
  color:var(--sys-yellow-text-light, #d3a736);
}
.counterLimit--nVIYP > span[data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.counterCurrentValue--klvnU[data-limit-exceeded][data-validation=default]{
  color:var(--sys-neutral-text-main, #41424e);
}
.counterCurrentValue--klvnU[data-limit-exceeded][data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.counterCurrentValue--klvnU[data-limit-exceeded][data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.counterCurrentValue--klvnU[data-limit-exceeded][data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.labelTooltipTrigger--WCXVg{
  cursor:pointer;
  display:flex;
  align-items:center;
  height:100%;
}`,""]),p.locals={decorator:"decorator--w1uHQ",header:"header--MMmBW",caption:"caption--RgTxc",labelLayout:"labelLayout--HfSuZ",label:"label--oCjkn",required:"required--KNRpk",footer:"footer--z2ES_",hintLayout:"hintLayout--x8KS1",hintIconContainer:"hintIconContainer--g9Zz8",hint:"hint--sSf9n",icon:"icon--NM7j3",hintIcon:"hintIcon--yXISs",counterLimit:"counterLimit--nVIYP",counterCurrentValue:"counterCurrentValue--klvnU",labelTooltipTrigger:"labelTooltipTrigger--WCXVg"};const g=p},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"(y,c,e){e.d(c,{A:()=>g});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(l),p=d()(u());p.push([y.id,`.container--G13Ju[data-validation=default]{
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--G13Ju[data-validation=default]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-decor-hovered, #b3deca);
}
.container--G13Ju[data-validation=default]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--G13Ju[data-validation=default]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-accent-default, #389f74);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}
.container--G13Ju[data-validation=error]{
  background-color:var(--sys-red-background1-level, #fef6f3);
  border-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--G13Ju[data-validation=error]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-decor-hovered, #fac1b3);
}
.container--G13Ju[data-validation=error]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--G13Ju[data-validation=error]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-accent-default, #cb3f3e);
  outline-color:var(--sys-red-decor-activated, #fbab99);
}
.container--G13Ju[data-validation=warning]{
  background-color:var(--sys-yellow-background1-level, #fcfbef);
  border-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.container--G13Ju[data-validation=warning]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.container--G13Ju[data-validation=warning]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--G13Ju[data-validation=warning]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-accent-default, #e2b134);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
}
.container--G13Ju[data-validation=success]{
  background-color:var(--sys-green-background1-level, #f6fdf3);
  border-color:var(--sys-green-decor-default, #d2ead0);
}
.container--G13Ju[data-validation=success]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.container--G13Ju[data-validation=success]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--G13Ju[data-validation=success]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-accent-default, #57b762);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
}
.container--G13Ju{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-sizing:border-box;
  border-style:solid;
}
.container--G13Ju[data-size=s]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--G13Ju[data-size=s],
.container--G13Ju[data-size=s] input,
.container--G13Ju[data-size=s] select,
.container--G13Ju[data-size=s] textarea,
.container--G13Ju[data-size=s] span{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.container--G13Ju[data-size=s][data-variant=single-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--G13Ju[data-size=s][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-button, 0px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--G13Ju[data-size=s][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-button, 0px);
  height:var(--size-fields-s, 32px);
}
.container--G13Ju[data-size=s][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-s-top, 7px);
  padding-bottom:var(--space-fields-multi-line-container-s-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-s-left, 7px);
  padding-right:var(--space-fields-multi-line-container-s-right, 2px);
}
.container--G13Ju[data-size=m]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--G13Ju[data-size=m],
.container--G13Ju[data-size=m] input,
.container--G13Ju[data-size=m] select,
.container--G13Ju[data-size=m] textarea,
.container--G13Ju[data-size=m] span{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.container--G13Ju[data-size=m][data-variant=single-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--G13Ju[data-size=m][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-button, 0px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--G13Ju[data-size=m][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-button, 0px);
  height:var(--size-fields-m, 40px);
}
.container--G13Ju[data-size=m][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-m-top, 9px);
  padding-bottom:var(--space-fields-multi-line-container-m-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-m-left, 9px);
  padding-right:var(--space-fields-multi-line-container-m-right, 2px);
}
.container--G13Ju[data-size=l]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--G13Ju[data-size=l],
.container--G13Ju[data-size=l] input,
.container--G13Ju[data-size=l] select,
.container--G13Ju[data-size=l] textarea,
.container--G13Ju[data-size=l] span{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.container--G13Ju[data-size=l][data-variant=single-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--G13Ju[data-size=l][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-button, 0px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--G13Ju[data-size=l][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-button, 0px);
  height:var(--size-fields-l, 48px);
}
.container--G13Ju[data-size=l][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-l-top, 11px);
  padding-bottom:var(--space-fields-multi-line-container-l-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-l-left, 11px);
  padding-right:var(--space-fields-multi-line-container-l-right, 2px);
}
.container--G13Ju[data-selectable],
.container--G13Ju[data-selectable] input,
.container--G13Ju[data-selectable] select,
.container--G13Ju[data-selectable] textarea,
.container--G13Ju[data-selectable] span{
  cursor:pointer;
}
.container--G13Ju[data-readonly],
.container--G13Ju[data-readonly] input,
.container--G13Ju[data-readonly] select,
.container--G13Ju[data-readonly] textarea,
.container--G13Ju[data-readonly] span{
  cursor:default;
}
.container--G13Ju[data-readonly], .container--G13Ju[data-readonly]:hover{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.container--G13Ju[data-readonly]:not([data-disable-focus]):focus-within, .container--G13Ju[data-readonly]:not([data-disable-focus])[data-focused]{
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}
.container--G13Ju[data-disabled],
.container--G13Ju[data-disabled] input,
.container--G13Ju[data-disabled] select,
.container--G13Ju[data-disabled] textarea,
.container--G13Ju[data-disabled] span{
  cursor:not-allowed;
  background-color:var(--sys-neutral-background, #eeeff3);
}
.container--G13Ju[data-disabled], .container--G13Ju[data-disabled]:focus-within, .container--G13Ju[data-disabled][data-focused], .container--G13Ju[data-disabled]:hover{
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}

.prefix--grn7X{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

[data-size=s] .prefix--grn7X, [data-size=s] .postfix--BMmTM{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  align-items:center;
}

[data-size=m] .prefix--grn7X, [data-size=m] .postfix--BMmTM{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  align-items:center;
}

[data-size=l] .prefix--grn7X, [data-size=l] .postfix--BMmTM{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  align-items:center;
}`,""]),p.locals={container:"container--G13Ju",prefix:"prefix--grn7X",postfix:"postfix--BMmTM"};const g=p}}]);})();
