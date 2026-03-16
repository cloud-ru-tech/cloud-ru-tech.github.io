"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3421],{"./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js":((_,c,e)=>{e.d(c,{m:()=>w});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=e.n(u),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),g=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),b=e("./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),E=e("./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),I=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),T=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),P=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),O=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(C),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=e.n(F),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),x=e.n(M),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Y=e.n(y),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n(A),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),m=e.n(N),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),v={};v.styleTagTransform=m(),v.setAttributes=Y(),v.insert=x().bind(null,"head"),v.domAPI=B(),v.insertStyleElement=R();var f=L()(h.A,v);const n=h.A&&h.A.locals?h.A.locals:void 0;function W(t){var o;let i,s;switch(t.validationState){case b.sv.Success:i=I.A,s=!0;break;case b.sv.Error:i=T.A,s=!0;break;case b.sv.Warning:i=P.A,s=!0;break;case b.sv.Default:default:i=O.A,s=!1;break}return((o=t.showHintIcon)!==null&&o!==void 0?o:s)?(0,a.jsx)(i,{size:16,"data-validation":t.validationState,className:n.hintIcon}):null}function z({length:t,hint:o,size:i,validationState:s=b.sv.Default,showHintIcon:r}){const D=!o&&t,k=t&&t.max&&t.current>t.max,S=(0,d.useMemo)(()=>W({validationState:s,showHintIcon:r}),[r,s]);return!o&&!t?null:(0,a.jsxs)("span",{className:n.footer,"data-reverse":D||void 0,"data-size":i,children:[o&&(0,a.jsxs)("span",{className:n.hintLayout,children:[S&&(0,a.jsx)("span",{className:n.hintIconContainer,"data-size":i,children:S}),(0,a.jsx)("span",{className:n.hint,"data-validation":s,"data-test-id":"field-decorator__hint",children:o})]}),t&&(0,a.jsxs)("span",{"data-test-id":"field-decorator__counter",className:n.counterLimit,children:[(0,a.jsx)("span",{"data-validation":s,"data-limit-exceeded":k||void 0,className:n.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:t.current}),(0,a.jsxs)("span",{"data-validation":s,"data-limit-exceeded":k||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",t.max]})]})]})}var j=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),U=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.10_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),K=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function V({label:t="",labelTooltip:o,caption:i,labelFor:s,size:r,required:D=!1,labelTooltipPlacement:k="top"}){return(0,a.jsxs)("span",{className:n.header,"data-size":r,children:[t&&(0,a.jsxs)("span",{className:n.labelLayout,children:[(0,a.jsx)("label",{className:n.label,htmlFor:s,"data-test-id":"field-decorator__label",children:(0,a.jsx)(K.m,{text:t})}),D&&(0,a.jsx)("span",{className:n.required,"data-test-id":"field-decorator__required-sign",children:"*"}),o&&(0,a.jsx)(U.m,{tip:o,placement:k,"data-test-id":"field-decorator__label-tooltip",triggerClassName:n.labelTooltipTrigger,children:(0,a.jsx)(j.A,{size:16,className:n.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),i&&(0,a.jsx)("span",{className:n.caption,children:i})]})}var H=function(t,o){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(i[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)o.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(i[s[r]]=t[s[r]]);return i};const w=(0,d.forwardRef)((t,o)=>{var{children:i,className:s,label:r,labelTooltip:D,required:k,labelFor:S,caption:Q,length:X,hint:$,disabled:q,readonly:ee,showHintIcon:ae,labelTooltipPlacement:te,size:Z=p.SK.S,error:G,validationState:se=b.sv.Default}=t,ne=H(t,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const J=!q&&!ee,ie=(0,E.t)({validationState:se,error:G});return(0,a.jsxs)("div",Object.assign({className:l()(n.decorator,s)},(0,g.z7)(ne),{"data-size":Z,ref:o,children:[r&&(0,a.jsx)(V,{labelTooltipPlacement:te,required:k,label:r,labelTooltip:D,labelFor:S,caption:Q,size:Z}),i,(0,a.jsx)(z,{length:J?X:void 0,hint:G||$,showHintIcon:ae,size:Z,validationState:J?ie:b.sv.Default})]}))})}),"./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js":((_,c,e)=>{e.d(c,{aJ:()=>u,sv:()=>a});const a={Default:"default",Error:"error",Warning:"warning",Success:"success"},u={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},l={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js":((_,c,e)=>{e.d(c,{V:()=>N});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=e.n(u),d=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),p=e("./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(g),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=e.n(E),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),P=e.n(T),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),C=e.n(O),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),F=e.n(L),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=e.n(B),x=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"),y={};y.styleTagTransform=M(),y.setAttributes=C(),y.insert=P().bind(null,"head"),y.domAPI=I(),y.insertStyleElement=F();var Y=b()(x.A,y);const A=x.A&&x.A.locals?x.A.locals:void 0;var R=function(m,h){var v={};for(var f in m)Object.prototype.hasOwnProperty.call(m,f)&&h.indexOf(f)<0&&(v[f]=m[f]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,f=Object.getOwnPropertySymbols(m);n<f.length;n++)h.indexOf(f[n])<0&&Object.prototype.propertyIsEnumerable.call(m,f[n])&&(v[f[n]]=m[f[n]]);return v};function N(m){var{className:h,children:v,size:f,validationState:n,variant:W,disabled:z,readonly:j,focused:U,disableFocus:K,selectable:V,style:H,prefix:w,postfix:t,inputRef:o}=m,i=R(m,["className","children","size","validationState","variant","disabled","readonly","focused","disableFocus","selectable","style","prefix","postfix","inputRef"]);const s=()=>{var r;z||(r=o.current)===null||r===void 0||r.focus()};return(0,a.jsxs)("div",Object.assign({className:l()(h,A.container),style:H,"data-size":f,"data-validation":z||j?p.sv.Default:n,"data-variant":W,"data-disabled":z||void 0,"data-readonly":j||void 0,"data-focused":U||void 0,"data-disable-focus":K||void 0,"data-selectable":V||void 0,"data-test-id":"field-container-private",onClick:s,role:"textbox",tabIndex:-1},(0,d.z7)(i),{children:[w&&(0,a.jsx)("span",{className:A.prefix,"data-test-id":"field-container-private__prefix-icon",children:w}),v,t&&(0,a.jsx)("span",{className:A.postfix,children:t})]}))}}),"./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js":((_,c,e)=>{e.d(c,{I:()=>u});var a=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function u({value:l,onChange:d,defaultValue:p}){return(0,a.iC)(l,p,g=>{const b=typeof g=="function"?g(l):g;d==null||d(b)})}}),"./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js":((_,c,e)=>{e.d(c,{t:()=>u});var a=e("./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function u({validationState:l,error:d}){return d?a.sv.Error:l!=null?l:a.sv.Default}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css":((_,c,e)=>{e.d(c,{A:()=>g});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(l),p=d()(u());p.push([_.id,`.decorator--hxpfh{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  width:100%;
  min-width:0;
}
.decorator--hxpfh[data-size=s]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--hxpfh[data-size=m]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--hxpfh[data-size=l]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}

.header--i62LH{
  display:flex;
  gap:var(--dimension-050m, 4px);
  box-sizing:border-box;
  color:var(--sys-neutral-text-support, #6d707f);
}
.header--i62LH[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--i62LH[data-size=s] .caption--iPG_o{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--i62LH[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--i62LH[data-size=m] .caption--iPG_o{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--i62LH[data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--i62LH[data-size=l] .caption--iPG_o{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.labelLayout--nckL9{
  gap:var(--space-fields-label-gap, 2px);
  display:inline-flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.label--mhBK_{
  display:grid;
  color:var(--sys-neutral-text-support, #6d707f);
}

.required--XQehp{
  color:var(--sys-neutral-text-support, #6d707f);
}

.footer--aGJeW{
  gap:var(--space-fields-hint-container-gap, 16px);
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
}
.footer--aGJeW[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.footer--aGJeW[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--aGJeW[data-size=l]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--aGJeW[data-reverse]{
  justify-content:flex-end;
}

.hintLayout--_0L3J{
  gap:var(--space-fields-hint-gap, 2px);
  display:inline-flex;
  align-items:flex-start;
}

.hintIconContainer--zzd0m{
  display:flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.hintIconContainer--zzd0m[data-size=s]{
  width:var(--size-fields-hint-icon-container-s, 16px);
  height:var(--size-fields-hint-icon-container-s, 16px);
}
.hintIconContainer--zzd0m[data-size=m]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}
.hintIconContainer--zzd0m[data-size=l]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}

.hint--Qzi1k{
  display:grid;
  flex-grow:1;
  word-break:break-word;
}
.hint--Qzi1k[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.hint--Qzi1k[data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.hint--Qzi1k[data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.hint--Qzi1k[data-validation=success]{
  color:var(--sys-green-text-main, #3d6035);
}

.icon--zap3a{
  flex-shrink:0;
  box-sizing:content-box;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.hintIcon--jsSYW{
  flex-shrink:0;
  box-sizing:content-box;
}
.hintIcon--jsSYW[data-validation=default]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.hintIcon--jsSYW[data-validation=error]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.hintIcon--jsSYW[data-validation=warning]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.hintIcon--jsSYW[data-validation=success]{
  color:var(--sys-green-accent-default, #57b762);
}

.counterLimit--qUZhZ > span[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.counterLimit--qUZhZ > span[data-limit-exceeded], .counterLimit--qUZhZ > span[data-validation=error]{
  color:var(--sys-red-text-light, #e7756a);
}
.counterLimit--qUZhZ > span[data-validation=warning]{
  color:var(--sys-yellow-text-light, #d3a736);
}
.counterLimit--qUZhZ > span[data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.counterCurrentValue--jE0w8[data-limit-exceeded][data-validation=default]{
  color:var(--sys-neutral-text-main, #41424e);
}
.counterCurrentValue--jE0w8[data-limit-exceeded][data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.counterCurrentValue--jE0w8[data-limit-exceeded][data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.counterCurrentValue--jE0w8[data-limit-exceeded][data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.labelTooltipTrigger--lUF2R{
  cursor:pointer;
  display:flex;
  align-items:center;
  height:100%;
}`,""]),p.locals={decorator:"decorator--hxpfh",header:"header--i62LH",caption:"caption--iPG_o",labelLayout:"labelLayout--nckL9",label:"label--mhBK_",required:"required--XQehp",footer:"footer--aGJeW",hintLayout:"hintLayout--_0L3J",hintIconContainer:"hintIconContainer--zzd0m",hint:"hint--Qzi1k",icon:"icon--zap3a",hintIcon:"hintIcon--jsSYW",counterLimit:"counterLimit--qUZhZ",counterCurrentValue:"counterCurrentValue--jE0w8",labelTooltipTrigger:"labelTooltipTrigger--lUF2R"};const g=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.52.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css":((_,c,e)=>{e.d(c,{A:()=>g});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(l),p=d()(u());p.push([_.id,`.container--kDA42[data-validation=default]{
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--kDA42[data-validation=default]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-decor-hovered, #b3deca);
}
.container--kDA42[data-validation=default]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--kDA42[data-validation=default]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-accent-default, #389f74);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}
.container--kDA42[data-validation=error]{
  background-color:var(--sys-red-background1-level, #fef6f3);
  border-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--kDA42[data-validation=error]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-decor-hovered, #fac1b3);
}
.container--kDA42[data-validation=error]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--kDA42[data-validation=error]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-accent-default, #cb3f3e);
  outline-color:var(--sys-red-decor-activated, #fbab99);
}
.container--kDA42[data-validation=warning]{
  background-color:var(--sys-yellow-background1-level, #fcfbef);
  border-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.container--kDA42[data-validation=warning]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.container--kDA42[data-validation=warning]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--kDA42[data-validation=warning]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-accent-default, #e2b134);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
}
.container--kDA42[data-validation=success]{
  background-color:var(--sys-green-background1-level, #f6fdf3);
  border-color:var(--sys-green-decor-default, #d2ead0);
}
.container--kDA42[data-validation=success]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.container--kDA42[data-validation=success]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--kDA42[data-validation=success]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-accent-default, #57b762);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
}
.container--kDA42{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-sizing:border-box;
  border-style:solid;
}
.container--kDA42[data-size=s]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--kDA42[data-size=s],
.container--kDA42[data-size=s] input,
.container--kDA42[data-size=s] select,
.container--kDA42[data-size=s] textarea,
.container--kDA42[data-size=s] span{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.container--kDA42[data-size=s][data-variant=single-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--kDA42[data-size=s][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-button, 0px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--kDA42[data-size=s][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-button, 0px);
  height:var(--size-fields-s, 32px);
}
.container--kDA42[data-size=s][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-s-top, 7px);
  padding-bottom:var(--space-fields-multi-line-container-s-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-s-left, 7px);
  padding-right:var(--space-fields-multi-line-container-s-right, 2px);
}
.container--kDA42[data-size=m]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--kDA42[data-size=m],
.container--kDA42[data-size=m] input,
.container--kDA42[data-size=m] select,
.container--kDA42[data-size=m] textarea,
.container--kDA42[data-size=m] span{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.container--kDA42[data-size=m][data-variant=single-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--kDA42[data-size=m][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-button, 0px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--kDA42[data-size=m][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-button, 0px);
  height:var(--size-fields-m, 40px);
}
.container--kDA42[data-size=m][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-m-top, 9px);
  padding-bottom:var(--space-fields-multi-line-container-m-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-m-left, 9px);
  padding-right:var(--space-fields-multi-line-container-m-right, 2px);
}
.container--kDA42[data-size=l]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--kDA42[data-size=l],
.container--kDA42[data-size=l] input,
.container--kDA42[data-size=l] select,
.container--kDA42[data-size=l] textarea,
.container--kDA42[data-size=l] span{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.container--kDA42[data-size=l][data-variant=single-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--kDA42[data-size=l][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-button, 0px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--kDA42[data-size=l][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-button, 0px);
  height:var(--size-fields-l, 48px);
}
.container--kDA42[data-size=l][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-l-top, 11px);
  padding-bottom:var(--space-fields-multi-line-container-l-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-l-left, 11px);
  padding-right:var(--space-fields-multi-line-container-l-right, 2px);
}
.container--kDA42[data-selectable],
.container--kDA42[data-selectable] input,
.container--kDA42[data-selectable] select,
.container--kDA42[data-selectable] textarea,
.container--kDA42[data-selectable] span{
  cursor:pointer;
}
.container--kDA42[data-readonly],
.container--kDA42[data-readonly] input,
.container--kDA42[data-readonly] select,
.container--kDA42[data-readonly] textarea,
.container--kDA42[data-readonly] span{
  cursor:default;
}
.container--kDA42[data-readonly], .container--kDA42[data-readonly]:hover{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.container--kDA42[data-readonly]:not([data-disable-focus]):focus-within, .container--kDA42[data-readonly]:not([data-disable-focus])[data-focused]{
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}
.container--kDA42[data-disabled],
.container--kDA42[data-disabled] input,
.container--kDA42[data-disabled] select,
.container--kDA42[data-disabled] textarea,
.container--kDA42[data-disabled] span{
  cursor:not-allowed;
  background-color:var(--sys-neutral-background, #eeeff3);
}
.container--kDA42[data-disabled], .container--kDA42[data-disabled]:focus-within, .container--kDA42[data-disabled][data-focused], .container--kDA42[data-disabled]:hover{
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}

.prefix--KYNpE{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

[data-size=s] .prefix--KYNpE, [data-size=s] .postfix--Mh9Mv{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  align-items:center;
}

[data-size=m] .prefix--KYNpE, [data-size=m] .postfix--Mh9Mv{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  align-items:center;
}

[data-size=l] .prefix--KYNpE, [data-size=l] .postfix--Mh9Mv{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  align-items:center;
}`,""]),p.locals={container:"container--kDA42",prefix:"prefix--KYNpE",postfix:"postfix--Mh9Mv"};const g=p})}]);})();
