(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7789],{"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"(y,c,e){"use strict";e.d(c,{m:()=>H});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(u),_=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),v=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),d=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),h=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),w=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),O=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),k=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),s=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(o),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=e.n(t),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),P=e.n(j),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=e.n(R),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(N),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),U=e.n(K),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),S={};S.styleTagTransform=U(),S.setAttributes=F(),S.insert=P().bind(null,"head"),S.domAPI=n(),S.insertStyleElement=B();var oe=i()(T.A,S);const g=T.A&&T.A.locals?T.A.locals:void 0;function L(r){var f;let m,l;switch(r.validationState){case d.sv.Success:m=w.A,l=!0;break;case d.sv.Error:m=O.A,l=!0;break;case d.sv.Warning:m=k.A,l=!0;break;case d.sv.Default:default:m=s.A,l=!1;break}return((f=r.showHintIcon)!==null&&f!==void 0?f:l)?(0,a.jsx)(m,{size:16,"data-validation":r.validationState,className:g.hintIcon}):null}function M({length:r,hint:f,size:m,validationState:l=d.sv.Default,showHintIcon:b}){const I=!f&&r,z=r&&r.max&&r.current>r.max,A=(0,_.useMemo)(()=>L({validationState:l,showHintIcon:b}),[b,l]);return!f&&!r?null:(0,a.jsxs)("span",{className:g.footer,"data-reverse":I||void 0,"data-size":m,children:[f&&(0,a.jsxs)("span",{className:g.hintLayout,children:[A&&(0,a.jsx)("span",{className:g.hintIconContainer,"data-size":m,children:A}),(0,a.jsx)("span",{className:g.hint,"data-validation":l,"data-test-id":"field-decorator__hint",children:f})]}),r&&(0,a.jsxs)("span",{"data-test-id":"field-decorator__counter",className:g.counterLimit,children:[(0,a.jsx)("span",{"data-validation":l,"data-limit-exceeded":z||void 0,className:g.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:r.current}),(0,a.jsxs)("span",{"data-validation":l,"data-limit-exceeded":z||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",r.max]})]})]})}var V=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),X=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),W=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function Q({label:r="",labelTooltip:f,caption:m,labelFor:l,size:b,required:I=!1,labelTooltipPlacement:z="top"}){return(0,a.jsxs)("span",{className:g.header,"data-size":b,children:[r&&(0,a.jsxs)("span",{className:g.labelLayout,children:[(0,a.jsx)("label",{className:g.label,htmlFor:l,"data-test-id":"field-decorator__label",children:(0,a.jsx)(W.m,{text:r})}),I&&(0,a.jsx)("span",{className:g.required,"data-test-id":"field-decorator__required-sign",children:"*"}),f&&(0,a.jsx)(X.m,{tip:f,placement:z,"data-test-id":"field-decorator__label-tooltip",triggerClassName:g.labelTooltipTrigger,children:(0,a.jsx)(V.A,{size:16,className:g.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),m&&(0,a.jsx)("span",{className:g.caption,children:m})]})}var Y=function(r,f){var m={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&f.indexOf(l)<0&&(m[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,l=Object.getOwnPropertySymbols(r);b<l.length;b++)f.indexOf(l[b])<0&&Object.prototype.propertyIsEnumerable.call(r,l[b])&&(m[l[b]]=r[l[b]]);return m};const H=(0,_.forwardRef)((r,f)=>{var{children:m,className:l,label:b,labelTooltip:I,required:z,labelFor:A,caption:G,length:Z,hint:J,disabled:$,readonly:q,showHintIcon:ee,labelTooltipPlacement:te,size:C=x.SK.S,error:D,validationState:ae=d.sv.Default}=r,se=Y(r,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const E=!$&&!q,ne=(0,h.t)({validationState:ae,error:D});return(0,a.jsxs)("div",Object.assign({className:p()(g.decorator,l)},(0,v.z7)(se),{"data-size":C,ref:f,children:[b&&(0,a.jsx)(Q,{labelTooltipPlacement:te,required:z,label:b,labelTooltip:I,labelFor:A,caption:G,size:C}),m,(0,a.jsx)(M,{length:E?Z:void 0,hint:D||J,showHintIcon:ee,size:C,validationState:E?ne:d.sv.Default})]}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"(y,c,e){"use strict";e.d(c,{aJ:()=>u,sv:()=>a});const a={Default:"default",Error:"error",Warning:"warning",Success:"success"},u={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},p=null},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"(y,c,e){"use strict";e.d(c,{t:()=>u});var a=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function u({validationState:p,error:_}){return _?a.sv.Error:p!=null?p:a.sv.Default}},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js"(y,c,e){"use strict";e.d(c,{A:()=>k});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(s,o){var i={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&o.indexOf(t)<0&&(i[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(i[t[n]]=s[t[n]]);return i};const x=u.forwardRef((s,o)=>{var{size:i=24}=s,t=p(s,["size"]);t.width=void 0,t.height=void 0;const n="-kebab-s";return typeof i=="number"&&(t.style||(t.style={}),t.style.width=i+"px",t.style.height=i+"px"),(0,a.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var v=function(s,o){var i={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&o.indexOf(t)<0&&(i[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(i[t[n]]=s[t[n]]);return i};const h=u.forwardRef((s,o)=>{var{size:i=24}=s,t=v(s,["size"]);t.width=void 0,t.height=void 0;const n="-kebab-xs";return typeof i=="number"&&(t.style||(t.style={}),t.style.width=i+"px",t.style.height=i+"px"),(0,a.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var w=function(s,o){var i={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&o.indexOf(t)<0&&(i[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(i[t[n]]=s[t[n]]);return i};const k=(0,u.forwardRef)((s,o)=>{var{size:i=24}=s,t=w(s,["size"]);return Number(i)>=20?(0,a.jsx)(x,Object.assign({ref:o,size:i},t)):(0,a.jsx)(h,Object.assign({ref:o,size:i},t))})},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"(y,c,e){"use strict";e.d(c,{Ev:()=>u,SK:()=>a,Vp:()=>p,_h:()=>_});const a={S:"s",M:"m",L:"l"},u={Xs:16,S:24},p={S:"s",M:"m"},_={[a.S]:p.S,[a.M]:p.M,[a.L]:p.M}},"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"(y,c,e){"use strict";e.d(c,{B:()=>a});function a(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}},"./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js"(y,c,e){"use strict";var a=e("./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"),u={"text/plain":"Text","text/html":"Url",default:"Text"},p="Copy to clipboard: #{key}, Enter";function _(v){var d=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return v.replace(/#{\s*key\s*}/g,d)}function x(v,d){var h,w,O,k,s,o,i=!1;d||(d={}),h=d.debug||!1;try{O=a(),k=document.createRange(),s=document.getSelection(),o=document.createElement("span"),o.textContent=v,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(n){if(n.stopPropagation(),d.format)if(n.preventDefault(),typeof n.clipboardData=="undefined"){h&&console.warn("unable to use e.clipboardData"),h&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var j=u[d.format]||u.default;window.clipboardData.setData(j,v)}else n.clipboardData.clearData(),n.clipboardData.setData(d.format,v);d.onCopy&&(n.preventDefault(),d.onCopy(n.clipboardData))}),document.body.appendChild(o),k.selectNodeContents(o),s.addRange(k);var t=document.execCommand("copy");if(!t)throw new Error("copy command was unsuccessful");i=!0}catch(n){h&&console.error("unable to copy using execCommand: ",n),h&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(d.format||"text",v),d.onCopy&&d.onCopy(window.clipboardData),i=!0}catch(j){h&&console.error("unable to copy using clipboardData: ",j),h&&console.error("falling back to prompt"),w=_("message"in d?d.message:p),window.prompt(w,v)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(k):s.removeAllRanges()),o&&document.body.removeChild(o),O()}return i}y.exports=x},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"(y,c,e){"use strict";e.d(c,{A:()=>v});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),_=e.n(p),x=_()(u());x.push([y.id,`.decorator--DFbvp{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  width:100%;
  min-width:0;
}
.decorator--DFbvp[data-size=s]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--DFbvp[data-size=m]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--DFbvp[data-size=l]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}

.header--YtiKR{
  display:flex;
  gap:var(--dimension-050m, 4px);
  box-sizing:border-box;
  color:var(--sys-neutral-text-support, #6d707f);
}
.header--YtiKR[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--YtiKR[data-size=s] .caption--EUPgG{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--YtiKR[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--YtiKR[data-size=m] .caption--EUPgG{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--YtiKR[data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--YtiKR[data-size=l] .caption--EUPgG{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.labelLayout--ScsIH{
  gap:var(--space-fields-label-gap, 2px);
  display:inline-flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.label--Qqour{
  display:grid;
  color:var(--sys-neutral-text-support, #6d707f);
}

.required--oA3Rb{
  color:var(--sys-neutral-text-support, #6d707f);
}

.footer--tmnTQ{
  gap:var(--space-fields-hint-container-gap, 16px);
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
}
.footer--tmnTQ[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.footer--tmnTQ[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--tmnTQ[data-size=l]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--tmnTQ[data-reverse]{
  justify-content:flex-end;
}

.hintLayout--nUKkg{
  gap:var(--space-fields-hint-gap, 2px);
  display:inline-flex;
  align-items:flex-start;
}

.hintIconContainer--phcKX{
  display:flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.hintIconContainer--phcKX[data-size=s]{
  width:var(--size-fields-hint-icon-container-s, 16px);
  height:var(--size-fields-hint-icon-container-s, 16px);
}
.hintIconContainer--phcKX[data-size=m]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}
.hintIconContainer--phcKX[data-size=l]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}

.hint--kwUFC{
  display:grid;
  flex-grow:1;
  word-break:break-word;
}
.hint--kwUFC[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.hint--kwUFC[data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.hint--kwUFC[data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.hint--kwUFC[data-validation=success]{
  color:var(--sys-green-text-main, #3d6035);
}

.icon--uVAvM{
  flex-shrink:0;
  box-sizing:content-box;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.hintIcon--U8N7i{
  flex-shrink:0;
  box-sizing:content-box;
}
.hintIcon--U8N7i[data-validation=default]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.hintIcon--U8N7i[data-validation=error]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.hintIcon--U8N7i[data-validation=warning]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.hintIcon--U8N7i[data-validation=success]{
  color:var(--sys-green-accent-default, #57b762);
}

.counterLimit--zDBtm > span[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.counterLimit--zDBtm > span[data-limit-exceeded], .counterLimit--zDBtm > span[data-validation=error]{
  color:var(--sys-red-text-light, #e7756a);
}
.counterLimit--zDBtm > span[data-validation=warning]{
  color:var(--sys-yellow-text-light, #d3a736);
}
.counterLimit--zDBtm > span[data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.counterCurrentValue--lAOb8[data-limit-exceeded][data-validation=default]{
  color:var(--sys-neutral-text-main, #41424e);
}
.counterCurrentValue--lAOb8[data-limit-exceeded][data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.counterCurrentValue--lAOb8[data-limit-exceeded][data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.counterCurrentValue--lAOb8[data-limit-exceeded][data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.labelTooltipTrigger--N44FA{
  cursor:pointer;
  display:flex;
  align-items:center;
  height:100%;
}`,""]),x.locals={decorator:"decorator--DFbvp",header:"header--YtiKR",caption:"caption--EUPgG",labelLayout:"labelLayout--ScsIH",label:"label--Qqour",required:"required--oA3Rb",footer:"footer--tmnTQ",hintLayout:"hintLayout--nUKkg",hintIconContainer:"hintIconContainer--phcKX",hint:"hint--kwUFC",icon:"icon--uVAvM",hintIcon:"hintIcon--U8N7i",counterLimit:"counterLimit--zDBtm",counterCurrentValue:"counterCurrentValue--lAOb8",labelTooltipTrigger:"labelTooltipTrigger--N44FA"};const v=x},"./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"(y){y.exports=function(){var c=document.getSelection();if(!c.rangeCount)return function(){};for(var e=document.activeElement,a=[],u=0;u<c.rangeCount;u++)a.push(c.getRangeAt(u));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return c.removeAllRanges(),function(){c.type==="Caret"&&c.removeAllRanges(),c.rangeCount||a.forEach(function(p){c.addRange(p)}),e&&e.focus()}}}}]);})();
