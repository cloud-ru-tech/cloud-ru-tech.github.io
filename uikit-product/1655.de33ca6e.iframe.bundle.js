"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[1655],{"./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"(g,c,s){s.d(c,{m:()=>q});var o=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=s.n(u),d=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=s("./node_modules/.pnpm/@snack-uikit+input-private@4.8.10_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),b=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),p=s("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),S=s("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),w=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),z=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),O=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),I=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),T=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=s.n(T),E=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),L=s.n(E),P=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),C=s.n(P),B=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=s.n(B),D=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=s.n(D),R=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=s.n(R),v=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),f={};f.styleTagTransform=W(),f.setAttributes=F(),f.insert=C().bind(null,"head"),f.domAPI=L(),f.insertStyleElement=N();var ce=A()(v.A,f);const l=v.A&&v.A.locals?v.A.locals:void 0;function M(t){var i;let a,e;switch(t.validationState){case p.sv.Success:a=w.A,e=!0;break;case p.sv.Error:a=z.A,e=!0;break;case p.sv.Warning:a=O.A,e=!0;break;case p.sv.Default:default:a=I.A,e=!1;break}return((i=t.showHintIcon)!==null&&i!==void 0?i:e)?(0,o.jsx)(a,{size:16,"data-validation":t.validationState,className:l.hintIcon}):null}function K({length:t,hint:i,size:a,validationState:e=p.sv.Default,showHintIcon:n}){const m=!i&&t,_=t&&t.max&&t.current>t.max,y=(0,d.useMemo)(()=>M({validationState:e,showHintIcon:n}),[n,e]);return!i&&!t?null:(0,o.jsxs)("span",{className:l.footer,"data-reverse":m||void 0,"data-size":a,children:[i&&(0,o.jsxs)("span",{className:l.hintLayout,children:[y&&(0,o.jsx)("span",{className:l.hintIconContainer,"data-size":a,children:y}),(0,o.jsx)("span",{className:l.hint,"data-validation":e,"data-test-id":"field-decorator__hint",children:i})]}),t&&(0,o.jsxs)("span",{"data-test-id":"field-decorator__counter",className:l.counterLimit,children:[(0,o.jsx)("span",{"data-validation":e,"data-limit-exceeded":_||void 0,className:l.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:t.current}),(0,o.jsxs)("span",{"data-validation":e,"data-limit-exceeded":_||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",t.max]})]})]})}var V=function(t,i){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&i.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)i.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a};const Q=d.forwardRef((t,i)=>{var{size:a=24}=t,e=V(t,["size"]);e.width=void 0,e.height=void 0;const n="-question-s";return typeof a=="number"&&(e.style||(e.style={}),e.style.width=a+"px",e.style.height=a+"px"),(0,o.jsx)("svg",Object.assign({ref:i,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var U=function(t,i){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&i.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)i.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a};const X=d.forwardRef((t,i)=>{var{size:a=24}=t,e=U(t,["size"]);e.width=void 0,e.height=void 0;const n="-question-xs";return typeof a=="number"&&(e.style||(e.style={}),e.style.width=a+"px",e.style.height=a+"px"),(0,o.jsx)("svg",Object.assign({ref:i,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var Y=function(t,i){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&i.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)i.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a};const J=(0,d.forwardRef)((t,i)=>{var{size:a=24}=t,e=Y(t,["size"]);return Number(a)>=20?(0,o.jsx)(Q,Object.assign({ref:i,size:a},e)):(0,o.jsx)(X,Object.assign({ref:i,size:a},e))});var Z=s("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.16_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),G=s("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function H({label:t="",labelTooltip:i,caption:a,labelFor:e,size:n,required:m=!1,labelTooltipPlacement:_="top"}){return(0,o.jsxs)("span",{className:l.header,"data-size":n,children:[t&&(0,o.jsxs)("span",{className:l.labelLayout,children:[(0,o.jsx)("label",{className:l.label,htmlFor:e,"data-test-id":"field-decorator__label",children:(0,o.jsx)(G.m,{text:t})}),m&&(0,o.jsx)("span",{className:l.required,"data-test-id":"field-decorator__required-sign",children:"*"}),i&&(0,o.jsx)(Z.m,{tip:i,placement:_,"data-test-id":"field-decorator__label-tooltip",triggerClassName:l.labelTooltipTrigger,children:(0,o.jsx)(J,{size:16,className:l.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),a&&(0,o.jsx)("span",{className:l.caption,children:a})]})}var $=function(t,i){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&i.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)i.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a};const q=(0,d.forwardRef)((t,i)=>{var{children:a,className:e,label:n,labelTooltip:m,required:_,labelFor:y,caption:ee,length:te,hint:se,disabled:ae,readonly:ne,showHintIcon:oe,labelTooltipPlacement:ie,size:x=h.SK.S,error:k,validationState:le=p.sv.Default}=t,re=$(t,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const j=!ae&&!ne,de=(0,S.t)({validationState:le,error:k});return(0,o.jsxs)("div",Object.assign({className:r()(l.decorator,e)},(0,b.z7)(re),{"data-size":x,ref:i,children:[n&&(0,o.jsx)(H,{labelTooltipPlacement:ie,required:_,label:n,labelTooltip:m,labelFor:y,caption:ee,size:x}),a,(0,o.jsx)(K,{length:j?te:void 0,hint:k||se,showHintIcon:oe,size:x,validationState:j?de:p.sv.Default})]}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"(g,c,s){s.d(c,{aJ:()=>u,sv:()=>o});const o={Default:"default",Error:"error",Warning:"warning",Success:"success"},u={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},r=null},"./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"(g,c,s){s.d(c,{t:()=>u});var o=s("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function u({validationState:r,error:d}){return d?o.sv.Error:r!=null?r:o.sv.Default}},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.10_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"(g,c,s){s.d(c,{Ev:()=>u,SK:()=>o,Vp:()=>r,_h:()=>d});const o={S:"s",M:"m",L:"l"},u={Xs:16,S:24},r={S:"s",M:"m"},d={[o.S]:r.S,[o.M]:r.M,[o.L]:r.M}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"(g,c,s){s.d(c,{A:()=>b});var o=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=s.n(o),r=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),d=s.n(r),h=d()(u());h.push([g.id,`.decorator--mwoLx{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  width:100%;
  min-width:0;
}
.decorator--mwoLx[data-size=s]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--mwoLx[data-size=m]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--mwoLx[data-size=l]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}

.header--BcREW{
  display:flex;
  gap:var(--dimension-050m, 4px);
  box-sizing:border-box;
  color:var(--sys-neutral-text-support, #6d707f);
}
.header--BcREW[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--BcREW[data-size=s] .caption--w0p7p{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--BcREW[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--BcREW[data-size=m] .caption--w0p7p{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--BcREW[data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--BcREW[data-size=l] .caption--w0p7p{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.labelLayout--hKSsw{
  gap:var(--space-fields-label-gap, 2px);
  display:inline-flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.label--KDG0k{
  display:grid;
  color:var(--sys-neutral-text-support, #6d707f);
}

.required--YdoMA{
  color:var(--sys-neutral-text-support, #6d707f);
}

.footer--e2L3A{
  gap:var(--space-fields-hint-container-gap, 16px);
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
}
.footer--e2L3A[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.footer--e2L3A[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--e2L3A[data-size=l]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--e2L3A[data-reverse]{
  justify-content:flex-end;
}

.hintLayout--txfDZ{
  gap:var(--space-fields-hint-gap, 2px);
  display:inline-flex;
  align-items:flex-start;
}

.hintIconContainer--_c48s{
  display:flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.hintIconContainer--_c48s[data-size=s]{
  width:var(--size-fields-hint-icon-container-s, 16px);
  height:var(--size-fields-hint-icon-container-s, 16px);
}
.hintIconContainer--_c48s[data-size=m]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}
.hintIconContainer--_c48s[data-size=l]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}

.hint--qrQqj{
  display:grid;
  flex-grow:1;
  word-break:break-word;
}
.hint--qrQqj[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.hint--qrQqj[data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.hint--qrQqj[data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.hint--qrQqj[data-validation=success]{
  color:var(--sys-green-text-main, #3d6035);
}

.icon--yb30F{
  flex-shrink:0;
  box-sizing:content-box;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.hintIcon--oUT0W{
  flex-shrink:0;
  box-sizing:content-box;
}
.hintIcon--oUT0W[data-validation=default]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.hintIcon--oUT0W[data-validation=error]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.hintIcon--oUT0W[data-validation=warning]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.hintIcon--oUT0W[data-validation=success]{
  color:var(--sys-green-accent-default, #57b762);
}

.counterLimit--NFJYk > span[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.counterLimit--NFJYk > span[data-limit-exceeded], .counterLimit--NFJYk > span[data-validation=error]{
  color:var(--sys-red-text-light, #e7756a);
}
.counterLimit--NFJYk > span[data-validation=warning]{
  color:var(--sys-yellow-text-light, #d3a736);
}
.counterLimit--NFJYk > span[data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.counterCurrentValue--KkiXW[data-limit-exceeded][data-validation=default]{
  color:var(--sys-neutral-text-main, #41424e);
}
.counterCurrentValue--KkiXW[data-limit-exceeded][data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.counterCurrentValue--KkiXW[data-limit-exceeded][data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.counterCurrentValue--KkiXW[data-limit-exceeded][data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.labelTooltipTrigger--KuqqC{
  cursor:pointer;
  display:flex;
  align-items:center;
  height:100%;
}`,""]),h.locals={decorator:"decorator--mwoLx",header:"header--BcREW",caption:"caption--w0p7p",labelLayout:"labelLayout--hKSsw",label:"label--KDG0k",required:"required--YdoMA",footer:"footer--e2L3A",hintLayout:"hintLayout--txfDZ",hintIconContainer:"hintIconContainer--_c48s",hint:"hint--qrQqj",icon:"icon--yb30F",hintIcon:"hintIcon--oUT0W",counterLimit:"counterLimit--NFJYk",counterCurrentValue:"counterCurrentValue--KkiXW",labelTooltipTrigger:"labelTooltipTrigger--KuqqC"};const b=h}}]);})();
