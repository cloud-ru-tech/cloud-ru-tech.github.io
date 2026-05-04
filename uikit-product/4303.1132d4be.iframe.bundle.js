(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[4303],{"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js":((h,c,t)=>{"use strict";t.d(c,{m:()=>X});var s=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=t.n(u),_=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=t("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),b=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),d=t("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),v=t("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),w=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),O=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),k=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),a=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),o=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=t.n(o),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=t.n(e),j=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),P=t.n(j),R=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=t.n(R),V=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),L=t.n(V),U=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),B=t.n(U),T=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),S={};S.styleTagTransform=B(),S.setAttributes=N(),S.insert=P().bind(null,"head"),S.domAPI=n(),S.insertStyleElement=L();var oe=i()(T.A,S);const f=T.A&&T.A.locals?T.A.locals:void 0;function F(r){var m;let p,l;switch(r.validationState){case d.sv.Success:p=w.A,l=!0;break;case d.sv.Error:p=O.A,l=!0;break;case d.sv.Warning:p=k.A,l=!0;break;case d.sv.Default:default:p=a.A,l=!1;break}return((m=r.showHintIcon)!==null&&m!==void 0?m:l)?(0,s.jsx)(p,{size:16,"data-validation":r.validationState,className:f.hintIcon}):null}function K({length:r,hint:m,size:p,validationState:l=d.sv.Default,showHintIcon:y}){const I=!m&&r,z=r&&r.max&&r.current>r.max,C=(0,_.useMemo)(()=>F({validationState:l,showHintIcon:y}),[y,l]);return!m&&!r?null:(0,s.jsxs)("span",{className:f.footer,"data-reverse":I||void 0,"data-size":p,children:[m&&(0,s.jsxs)("span",{className:f.hintLayout,children:[C&&(0,s.jsx)("span",{className:f.hintIconContainer,"data-size":p,children:C}),(0,s.jsx)("span",{className:f.hint,"data-validation":l,"data-test-id":"field-decorator__hint",children:m})]}),r&&(0,s.jsxs)("span",{"data-test-id":"field-decorator__counter",className:f.counterLimit,children:[(0,s.jsx)("span",{"data-validation":l,"data-limit-exceeded":z||void 0,className:f.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:r.current}),(0,s.jsxs)("span",{"data-validation":l,"data-limit-exceeded":z||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",r.max]})]})]})}var Q=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),M=t("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),W=t("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function J({label:r="",labelTooltip:m,caption:p,labelFor:l,size:y,required:I=!1,labelTooltipPlacement:z="top"}){return(0,s.jsxs)("span",{className:f.header,"data-size":y,children:[r&&(0,s.jsxs)("span",{className:f.labelLayout,children:[(0,s.jsx)("label",{className:f.label,htmlFor:l,"data-test-id":"field-decorator__label",children:(0,s.jsx)(W.m,{text:r})}),I&&(0,s.jsx)("span",{className:f.required,"data-test-id":"field-decorator__required-sign",children:"*"}),m&&(0,s.jsx)(M.m,{tip:m,placement:z,"data-test-id":"field-decorator__label-tooltip",triggerClassName:f.labelTooltipTrigger,children:(0,s.jsx)(Q.A,{size:16,className:f.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),p&&(0,s.jsx)("span",{className:f.caption,children:p})]})}var H=function(r,m){var p={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&m.indexOf(l)<0&&(p[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,l=Object.getOwnPropertySymbols(r);y<l.length;y++)m.indexOf(l[y])<0&&Object.prototype.propertyIsEnumerable.call(r,l[y])&&(p[l[y]]=r[l[y]]);return p};const X=(0,_.forwardRef)((r,m)=>{var{children:p,className:l,label:y,labelTooltip:I,required:z,labelFor:C,caption:Z,length:G,hint:Y,disabled:$,readonly:q,showHintIcon:ee,labelTooltipPlacement:te,size:A=x.SK.S,error:E,validationState:ae=d.sv.Default}=r,se=H(r,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const D=!$&&!q,ne=(0,v.t)({validationState:ae,error:E});return(0,s.jsxs)("div",Object.assign({className:g()(f.decorator,l)},(0,b.z7)(se),{"data-size":A,ref:m,children:[y&&(0,s.jsx)(J,{labelTooltipPlacement:te,required:z,label:y,labelTooltip:I,labelFor:C,caption:Z,size:A}),p,(0,s.jsx)(K,{length:D?G:void 0,hint:E||Y,showHintIcon:ee,size:A,validationState:D?ne:d.sv.Default})]}))})}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js":((h,c,t)=>{"use strict";t.d(c,{aJ:()=>u,sv:()=>s});const s={Default:"default",Error:"error",Warning:"warning",Success:"success"},u={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},g={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js":((h,c,t)=>{"use strict";t.d(c,{t:()=>u});var s=t("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function u({validationState:g,error:_}){return _?s.sv.Error:g!=null?g:s.sv.Default}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js":((h,c,t)=>{"use strict";t.d(c,{A:()=>k});var s=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=function(a,o){var i={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&o.indexOf(e)<0&&(i[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)o.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(i[e[n]]=a[e[n]]);return i};const x=u.forwardRef((a,o)=>{var{size:i=24}=a,e=g(a,["size"]);e.width=void 0,e.height=void 0;const n="-kebab-s";return typeof i=="number"&&(e.style||(e.style={}),e.style.width=i+"px",e.style.height=i+"px"),(0,s.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},e,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var b=function(a,o){var i={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&o.indexOf(e)<0&&(i[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)o.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(i[e[n]]=a[e[n]]);return i};const v=u.forwardRef((a,o)=>{var{size:i=24}=a,e=b(a,["size"]);e.width=void 0,e.height=void 0;const n="-kebab-xs";return typeof i=="number"&&(e.style||(e.style={}),e.style.width=i+"px",e.style.height=i+"px"),(0,s.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},e,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var w=function(a,o){var i={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&o.indexOf(e)<0&&(i[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)o.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(i[e[n]]=a[e[n]]);return i};const k=(0,u.forwardRef)((a,o)=>{var{size:i=24}=a,e=w(a,["size"]);return Number(i)>=20?(0,s.jsx)(x,Object.assign({ref:o,size:i},e)):(0,s.jsx)(v,Object.assign({ref:o,size:i},e))})}),"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js":((h,c,t)=>{"use strict";t.d(c,{B:()=>s});function s(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}}),"./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js":((h,c,t)=>{"use strict";var s=t("./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"),u={"text/plain":"Text","text/html":"Url",default:"Text"},g="Copy to clipboard: #{key}, Enter";function _(b){var d=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return b.replace(/#{\s*key\s*}/g,d)}function x(b,d){var v,w,O,k,a,o,i=!1;d||(d={}),v=d.debug||!1;try{O=s(),k=document.createRange(),a=document.getSelection(),o=document.createElement("span"),o.textContent=b,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(n){if(n.stopPropagation(),d.format)if(n.preventDefault(),typeof n.clipboardData=="undefined"){v&&console.warn("unable to use e.clipboardData"),v&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var j=u[d.format]||u.default;window.clipboardData.setData(j,b)}else n.clipboardData.clearData(),n.clipboardData.setData(d.format,b);d.onCopy&&(n.preventDefault(),d.onCopy(n.clipboardData))}),document.body.appendChild(o),k.selectNodeContents(o),a.addRange(k);var e=document.execCommand("copy");if(!e)throw new Error("copy command was unsuccessful");i=!0}catch(n){v&&console.error("unable to copy using execCommand: ",n),v&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(d.format||"text",b),d.onCopy&&d.onCopy(window.clipboardData),i=!0}catch(j){v&&console.error("unable to copy using clipboardData: ",j),v&&console.error("falling back to prompt"),w=_("message"in d?d.message:g),window.prompt(w,b)}}finally{a&&(typeof a.removeRange=="function"?a.removeRange(k):a.removeAllRanges()),o&&document.body.removeChild(o),O()}return i}h.exports=x}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css":((h,c,t)=>{"use strict";t.d(c,{A:()=>b});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=t.n(s),g=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(g),x=_()(u());x.push([h.id,`.decorator--QWKNV{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  width:100%;
  min-width:0;
}
.decorator--QWKNV[data-size=s]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--QWKNV[data-size=m]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--QWKNV[data-size=l]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}

.header--rVwlg{
  display:flex;
  gap:var(--dimension-050m, 4px);
  box-sizing:border-box;
  color:var(--sys-neutral-text-support, #6d707f);
}
.header--rVwlg[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--rVwlg[data-size=s] .caption--pSSv2{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--rVwlg[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--rVwlg[data-size=m] .caption--pSSv2{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--rVwlg[data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--rVwlg[data-size=l] .caption--pSSv2{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.labelLayout--Y7U95{
  gap:var(--space-fields-label-gap, 2px);
  display:inline-flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.label--aPU6B{
  display:grid;
  color:var(--sys-neutral-text-support, #6d707f);
}

.required--RQcy6{
  color:var(--sys-neutral-text-support, #6d707f);
}

.footer--Qblaa{
  gap:var(--space-fields-hint-container-gap, 16px);
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
}
.footer--Qblaa[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.footer--Qblaa[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--Qblaa[data-size=l]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--Qblaa[data-reverse]{
  justify-content:flex-end;
}

.hintLayout--Kgk2P{
  gap:var(--space-fields-hint-gap, 2px);
  display:inline-flex;
  align-items:flex-start;
}

.hintIconContainer--q0yUU{
  display:flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.hintIconContainer--q0yUU[data-size=s]{
  width:var(--size-fields-hint-icon-container-s, 16px);
  height:var(--size-fields-hint-icon-container-s, 16px);
}
.hintIconContainer--q0yUU[data-size=m]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}
.hintIconContainer--q0yUU[data-size=l]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}

.hint--NfQyJ{
  display:grid;
  flex-grow:1;
  word-break:break-word;
}
.hint--NfQyJ[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.hint--NfQyJ[data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.hint--NfQyJ[data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.hint--NfQyJ[data-validation=success]{
  color:var(--sys-green-text-main, #3d6035);
}

.icon--cJqtQ{
  flex-shrink:0;
  box-sizing:content-box;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.hintIcon--IRuOL{
  flex-shrink:0;
  box-sizing:content-box;
}
.hintIcon--IRuOL[data-validation=default]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.hintIcon--IRuOL[data-validation=error]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.hintIcon--IRuOL[data-validation=warning]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.hintIcon--IRuOL[data-validation=success]{
  color:var(--sys-green-accent-default, #57b762);
}

.counterLimit--ZqUdi > span[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.counterLimit--ZqUdi > span[data-limit-exceeded], .counterLimit--ZqUdi > span[data-validation=error]{
  color:var(--sys-red-text-light, #e7756a);
}
.counterLimit--ZqUdi > span[data-validation=warning]{
  color:var(--sys-yellow-text-light, #d3a736);
}
.counterLimit--ZqUdi > span[data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.counterCurrentValue--Fp71V[data-limit-exceeded][data-validation=default]{
  color:var(--sys-neutral-text-main, #41424e);
}
.counterCurrentValue--Fp71V[data-limit-exceeded][data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.counterCurrentValue--Fp71V[data-limit-exceeded][data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.counterCurrentValue--Fp71V[data-limit-exceeded][data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.labelTooltipTrigger--oiPTH{
  cursor:pointer;
  display:flex;
  align-items:center;
  height:100%;
}`,""]),x.locals={decorator:"decorator--QWKNV",header:"header--rVwlg",caption:"caption--pSSv2",labelLayout:"labelLayout--Y7U95",label:"label--aPU6B",required:"required--RQcy6",footer:"footer--Qblaa",hintLayout:"hintLayout--Kgk2P",hintIconContainer:"hintIconContainer--q0yUU",hint:"hint--NfQyJ",icon:"icon--cJqtQ",hintIcon:"hintIcon--IRuOL",counterLimit:"counterLimit--ZqUdi",counterCurrentValue:"counterCurrentValue--Fp71V",labelTooltipTrigger:"labelTooltipTrigger--oiPTH"};const b=x}),"./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js":(h=>{h.exports=function(){var c=document.getSelection();if(!c.rangeCount)return function(){};for(var t=document.activeElement,s=[],u=0;u<c.rangeCount;u++)s.push(c.getRangeAt(u));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return c.removeAllRanges(),function(){c.type==="Caret"&&c.removeAllRanges(),c.rangeCount||s.forEach(function(g){c.addRange(g)}),t&&t.focus()}}})}]);})();
