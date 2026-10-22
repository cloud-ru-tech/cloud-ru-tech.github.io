(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3018],{"./node_modules/.pnpm/@snack-uikit+fields@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"(_,i,e){"use strict";e.d(i,{m:()=>G});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(c),v=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=e("./node_modules/.pnpm/@snack-uikit+input-private@5.0.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),n=e("./node_modules/.pnpm/@snack-uikit+fields@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),g=e("./node_modules/.pnpm/@snack-uikit+fields@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),T=e("./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),w=e("./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),y=e("./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(o),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),f=e.n(A),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),L=e.n(S),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n(F),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),O=e.n(N),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),B=e.n(U),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),x={};x.styleTagTransform=B(),x.setAttributes=R(),x.insert=L().bind(null,"head"),x.domAPI=f(),x.insertStyleElement=O();var oe=j()(I.A,x);const d=I.A&&I.A.locals?I.A.locals:void 0;function V(t){var r;let l,s;switch(t.validationState){case n.sv.Success:l=T.A,s=!0;break;case n.sv.Error:l=w.A,s=!0;break;case n.sv.Warning:l=b.A,s=!0;break;case n.sv.Default:default:l=y.A,s=!1;break}return((r=t.showHintIcon)!==null&&r!==void 0?r:s)?(0,a.jsx)(l,{size:16,"data-validation":t.validationState,className:d.hintIcon}):null}function M({length:t,hint:r,size:l,validationState:s=n.sv.Default,showHintIcon:u}){const z=!r&&t,k=t&&t.max&&t.current>t.max,C=(0,v.useMemo)(()=>V({validationState:s,showHintIcon:u}),[u,s]);return!r&&!t?null:(0,a.jsxs)("span",{className:d.footer,"data-reverse":z||void 0,"data-size":l,children:[r&&(0,a.jsxs)("span",{className:d.hintLayout,children:[C&&(0,a.jsx)("span",{className:d.hintIconContainer,"data-size":l,children:C}),(0,a.jsx)("span",{className:d.hint,"data-validation":s,"data-test-id":"field-decorator__hint",children:r})]}),t&&(0,a.jsxs)("span",{"data-test-id":"field-decorator__counter",className:d.counterLimit,children:[(0,a.jsx)("span",{"data-validation":s,"data-limit-exceeded":k||void 0,className:d.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:t.current}),(0,a.jsxs)("span",{"data-validation":s,"data-limit-exceeded":k||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",t.max]})]})]})}var W=e("./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),K=e("./node_modules/.pnpm/@snack-uikit+tooltip@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),H=e("./node_modules/.pnpm/@snack-uikit+truncate-string@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function J({label:t="",labelTooltip:r,caption:l,labelFor:s,size:u,required:z=!1,labelTooltipPlacement:k="top"}){return(0,a.jsxs)("span",{className:d.header,"data-size":u,children:[t&&(0,a.jsxs)("span",{className:d.labelLayout,children:[(0,a.jsx)("label",{className:d.label,htmlFor:s,"data-test-id":"field-decorator__label",children:(0,a.jsx)(H.m,{text:t})}),z&&(0,a.jsx)("span",{className:d.required,"data-test-id":"field-decorator__required-sign",children:"*"}),r&&(0,a.jsx)(K.m,{tip:r,placement:k,"data-test-id":"field-decorator__label-tooltip",triggerClassName:d.labelTooltipTrigger,children:(0,a.jsx)(W.A,{size:16,className:d.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),l&&(0,a.jsx)("span",{className:d.caption,children:l})]})}var X=function(t,r){var l={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&r.indexOf(s)<0&&(l[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(t);u<s.length;u++)r.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(t,s[u])&&(l[s[u]]=t[s[u]]);return l};const G=(0,v.forwardRef)((t,r)=>{var{children:l,className:s,label:u,labelTooltip:z,required:k,labelFor:C,caption:Y,length:Z,hint:Q,disabled:$,readonly:q,showHintIcon:ee,labelTooltipPlacement:ae,size:E=h.SK.S,error:D,validationState:te=n.sv.Default}=t,se=X(t,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const P=!$&&!q,ne=(0,g.t)({validationState:te,error:D});return(0,a.jsxs)("div",Object.assign({className:m()(d.decorator,s)},(0,p.z7)(se),{"data-size":E,ref:r,children:[u&&(0,a.jsx)(J,{labelTooltipPlacement:ae,required:k,label:u,labelTooltip:z,labelFor:C,caption:Y,size:E}),l,(0,a.jsx)(M,{length:P?Z:void 0,hint:D||Q,showHintIcon:ee,size:E,validationState:P?ne:n.sv.Default})]}))})},"./node_modules/.pnpm/@snack-uikit+fields@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"(_,i,e){"use strict";e.d(i,{aJ:()=>c,sv:()=>a});const a={Default:"default",Error:"error",Warning:"warning",Success:"success"},c={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},m=null},"./node_modules/.pnpm/@snack-uikit+fields@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"(_,i,e){"use strict";e.d(i,{t:()=>c});var a=e("./node_modules/.pnpm/@snack-uikit+fields@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function c({validationState:m,error:v}){return v?a.sv.Error:m!=null?m:a.sv.Default}},"./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js"(_,i,e){"use strict";var a=e("./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"),c={"text/plain":"Text","text/html":"Url",default:"Text"},m="Copy to clipboard: #{key}, Enter";function v(p){var n=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return p.replace(/#{\s*key\s*}/g,n)}function h(p,n){var g,T,w,b,y,o,j=!1;n||(n={}),g=n.debug||!1;try{w=a(),b=document.createRange(),y=document.getSelection(),o=document.createElement("span"),o.textContent=p,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(f){if(f.stopPropagation(),n.format)if(f.preventDefault(),typeof f.clipboardData=="undefined"){g&&console.warn("unable to use e.clipboardData"),g&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var S=c[n.format]||c.default;window.clipboardData.setData(S,p)}else f.clipboardData.clearData(),f.clipboardData.setData(n.format,p);n.onCopy&&(f.preventDefault(),n.onCopy(f.clipboardData))}),document.body.appendChild(o),b.selectNodeContents(o),y.addRange(b);var A=document.execCommand("copy");if(!A)throw new Error("copy command was unsuccessful");j=!0}catch(f){g&&console.error("unable to copy using execCommand: ",f),g&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",p),n.onCopy&&n.onCopy(window.clipboardData),j=!0}catch(S){g&&console.error("unable to copy using clipboardData: ",S),g&&console.error("falling back to prompt"),T=v("message"in n?n.message:m),window.prompt(T,p)}}finally{y&&(typeof y.removeRange=="function"?y.removeRange(b):y.removeAllRanges()),o&&document.body.removeChild(o),w()}return j}_.exports=h},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"(_,i,e){"use strict";e.d(i,{A:()=>p});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(a),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(m),h=v()(c());h.push([_.id,`.decorator--J1Pvk{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  width:100%;
  min-width:0;
}
.decorator--J1Pvk[data-size=s]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--J1Pvk[data-size=m]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--J1Pvk[data-size=l]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}

.header--abw3C{
  display:flex;
  gap:var(--dimension-050m, 4px);
  box-sizing:border-box;
  color:var(--sys-neutral-text-support, #6d707f);
}
.header--abw3C[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--abw3C[data-size=s] .caption--GdN4L{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--abw3C[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--abw3C[data-size=m] .caption--GdN4L{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--abw3C[data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--abw3C[data-size=l] .caption--GdN4L{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.labelLayout--aZuro{
  gap:var(--space-fields-label-gap, 2px);
  display:inline-flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.label--kHkTX{
  display:grid;
  color:var(--sys-neutral-text-support, #6d707f);
}

.required--o043l{
  color:var(--sys-neutral-text-support, #6d707f);
}

.footer--xPryu{
  gap:var(--space-fields-hint-container-gap, 16px);
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
}
.footer--xPryu[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.footer--xPryu[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--xPryu[data-size=l]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--xPryu[data-reverse]{
  justify-content:flex-end;
}

.hintLayout--IkST9{
  gap:var(--space-fields-hint-gap, 2px);
  display:inline-flex;
  align-items:flex-start;
}

.hintIconContainer--x5E3u{
  display:flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.hintIconContainer--x5E3u[data-size=s]{
  width:var(--size-fields-hint-icon-container-s, 16px);
  height:var(--size-fields-hint-icon-container-s, 16px);
}
.hintIconContainer--x5E3u[data-size=m]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}
.hintIconContainer--x5E3u[data-size=l]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}

.hint--UTIqm{
  display:grid;
  flex-grow:1;
  word-break:break-word;
}
.hint--UTIqm[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.hint--UTIqm[data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.hint--UTIqm[data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.hint--UTIqm[data-validation=success]{
  color:var(--sys-green-text-main, #3d6035);
}

.icon--ARvkY{
  flex-shrink:0;
  box-sizing:content-box;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.hintIcon--oLjzm{
  flex-shrink:0;
  box-sizing:content-box;
}
.hintIcon--oLjzm[data-validation=default]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.hintIcon--oLjzm[data-validation=error]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.hintIcon--oLjzm[data-validation=warning]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.hintIcon--oLjzm[data-validation=success]{
  color:var(--sys-green-accent-default, #57b762);
}

.counterLimit--FUii_ > span[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.counterLimit--FUii_ > span[data-limit-exceeded], .counterLimit--FUii_ > span[data-validation=error]{
  color:var(--sys-red-text-light, #e7756a);
}
.counterLimit--FUii_ > span[data-validation=warning]{
  color:var(--sys-yellow-text-light, #d3a736);
}
.counterLimit--FUii_ > span[data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.counterCurrentValue--ghbuz[data-limit-exceeded][data-validation=default]{
  color:var(--sys-neutral-text-main, #41424e);
}
.counterCurrentValue--ghbuz[data-limit-exceeded][data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.counterCurrentValue--ghbuz[data-limit-exceeded][data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.counterCurrentValue--ghbuz[data-limit-exceeded][data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.labelTooltipTrigger--toK2V{
  cursor:pointer;
  display:flex;
  align-items:center;
  height:100%;
}`,""]),h.locals={decorator:"decorator--J1Pvk",header:"header--abw3C",caption:"caption--GdN4L",labelLayout:"labelLayout--aZuro",label:"label--kHkTX",required:"required--o043l",footer:"footer--xPryu",hintLayout:"hintLayout--IkST9",hintIconContainer:"hintIconContainer--x5E3u",hint:"hint--UTIqm",icon:"icon--ARvkY",hintIcon:"hintIcon--oLjzm",counterLimit:"counterLimit--FUii_",counterCurrentValue:"counterCurrentValue--ghbuz",labelTooltipTrigger:"labelTooltipTrigger--toK2V"};const p=h},"./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"(_){_.exports=function(){var i=document.getSelection();if(!i.rangeCount)return function(){};for(var e=document.activeElement,a=[],c=0;c<i.rangeCount;c++)a.push(i.getRangeAt(c));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return i.removeAllRanges(),function(){i.type==="Caret"&&i.removeAllRanges(),i.rangeCount||a.forEach(function(m){i.addRange(m)}),e&&e.focus()}}}}]);})();
