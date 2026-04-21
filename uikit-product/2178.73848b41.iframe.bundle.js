(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2178],{"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js":((w,u,e)=>{"use strict";e.d(u,{m:()=>H});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(p),S=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),_=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),c=e("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),k=e("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),A=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),T=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),j=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),n=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(o),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=e.n(t),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),W=e.n(I),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),f=e.n(m),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=e.n(r),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(D),C=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),z={};z.styleTagTransform=E(),z.setAttributes=f(),z.insert=W().bind(null,"head"),z.domAPI=s(),z.insertStyleElement=y();var K=i()(C.A,z);const b=C.A&&C.A.locals?C.A.locals:void 0;function M(l){var h;let v,d;switch(l.validationState){case c.sv.Success:v=A.A,d=!0;break;case c.sv.Error:v=T.A,d=!0;break;case c.sv.Warning:v=j.A,d=!0;break;case c.sv.Default:default:v=n.A,d=!1;break}return((h=l.showHintIcon)!==null&&h!==void 0?h:d)?(0,a.jsx)(v,{size:16,"data-validation":l.validationState,className:b.hintIcon}):null}function V({length:l,hint:h,size:v,validationState:d=c.sv.Default,showHintIcon:x}){const N=!h&&l,P=l&&l.max&&l.current>l.max,F=(0,S.useMemo)(()=>M({validationState:d,showHintIcon:x}),[x,d]);return!h&&!l?null:(0,a.jsxs)("span",{className:b.footer,"data-reverse":N||void 0,"data-size":v,children:[h&&(0,a.jsxs)("span",{className:b.hintLayout,children:[F&&(0,a.jsx)("span",{className:b.hintIconContainer,"data-size":v,children:F}),(0,a.jsx)("span",{className:b.hint,"data-validation":d,"data-test-id":"field-decorator__hint",children:h})]}),l&&(0,a.jsxs)("span",{"data-test-id":"field-decorator__counter",className:b.counterLimit,children:[(0,a.jsx)("span",{"data-validation":d,"data-limit-exceeded":P||void 0,className:b.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:l.current}),(0,a.jsxs)("span",{"data-validation":d,"data-limit-exceeded":P||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",l.max]})]})]})}var L=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),B=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),R=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function U({label:l="",labelTooltip:h,caption:v,labelFor:d,size:x,required:N=!1,labelTooltipPlacement:P="top"}){return(0,a.jsxs)("span",{className:b.header,"data-size":x,children:[l&&(0,a.jsxs)("span",{className:b.labelLayout,children:[(0,a.jsx)("label",{className:b.label,htmlFor:d,"data-test-id":"field-decorator__label",children:(0,a.jsx)(R.m,{text:l})}),N&&(0,a.jsx)("span",{className:b.required,"data-test-id":"field-decorator__required-sign",children:"*"}),h&&(0,a.jsx)(B.m,{tip:h,placement:P,"data-test-id":"field-decorator__label-tooltip",triggerClassName:b.labelTooltipTrigger,children:(0,a.jsx)(L.A,{size:16,className:b.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),v&&(0,a.jsx)("span",{className:b.caption,children:v})]})}var X=function(l,h){var v={};for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&h.indexOf(d)<0&&(v[d]=l[d]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,d=Object.getOwnPropertySymbols(l);x<d.length;x++)h.indexOf(d[x])<0&&Object.prototype.propertyIsEnumerable.call(l,d[x])&&(v[d[x]]=l[d[x]]);return v};const H=(0,S.forwardRef)((l,h)=>{var{children:v,className:d,label:x,labelTooltip:N,required:P,labelFor:F,caption:Z,length:$,hint:G,disabled:q,readonly:ee,showHintIcon:te,labelTooltipPlacement:ae,size:Q=O.SK.S,error:Y,validationState:ne=c.sv.Default}=l,se=X(l,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const J=!q&&!ee,oe=(0,k.t)({validationState:ne,error:Y});return(0,a.jsxs)("div",Object.assign({className:g()(b.decorator,d)},(0,_.z7)(se),{"data-size":Q,ref:h,children:[x&&(0,a.jsx)(U,{labelTooltipPlacement:ae,required:P,label:x,labelTooltip:N,labelFor:F,caption:Z,size:Q}),v,(0,a.jsx)(V,{length:J?$:void 0,hint:Y||G,showHintIcon:te,size:Q,validationState:J?oe:c.sv.Default})]}))})}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js":((w,u,e)=>{"use strict";e.d(u,{aJ:()=>p,sv:()=>a});const a={Default:"default",Error:"error",Warning:"warning",Success:"success"},p={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},g={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js":((w,u,e)=>{"use strict";e.d(u,{t:()=>p});var a=e("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function p({validationState:g,error:S}){return S?a.sv.Error:g!=null?g:a.sv.Default}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js":((w,u,e)=>{"use strict";e.d(u,{A:()=>j});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=function(n,o){var i={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&o.indexOf(t)<0&&(i[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(n);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(n,t[s])&&(i[t[s]]=n[t[s]]);return i};const O=p.forwardRef((n,o)=>{var{size:i=24}=n,t=g(n,["size"]);t.width=void 0,t.height=void 0;const s="-kebab-s";return typeof i=="number"&&(t.style||(t.style={}),t.style.width=i+"px",t.style.height=i+"px"),(0,a.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var _=function(n,o){var i={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&o.indexOf(t)<0&&(i[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(n);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(n,t[s])&&(i[t[s]]=n[t[s]]);return i};const k=p.forwardRef((n,o)=>{var{size:i=24}=n,t=_(n,["size"]);t.width=void 0,t.height=void 0;const s="-kebab-xs";return typeof i=="number"&&(t.style||(t.style={}),t.style.width=i+"px",t.style.height=i+"px"),(0,a.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var A=function(n,o){var i={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&o.indexOf(t)<0&&(i[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(n);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(n,t[s])&&(i[t[s]]=n[t[s]]);return i};const j=(0,p.forwardRef)((n,o)=>{var{size:i=24}=n,t=A(n,["size"]);return Number(i)>=20?(0,a.jsx)(O,Object.assign({ref:o,size:i},t)):(0,a.jsx)(k,Object.assign({ref:o,size:i},t))})}),"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js":((w,u,e)=>{"use strict";e.d(u,{B:()=>a});function a(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}}),"./node_modules/.pnpm/@storybook+addon-actions@8.3.6_storybook@8.6.17_prettier@3.8.1_/node_modules/@storybook/addon-actions/dist/index.mjs":((w,u,e)=>{"use strict";e.d(u,{XI:()=>I});var a=e("storybook/internal/preview-api"),p=e("storybook/internal/preview-errors"),g=e("@storybook/global"),S=e("./node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js"),O="actions",_="storybook/actions",c=null,k=`${_}/action-event`,A=null,T="$___storybook.isCyclic",j={depth:10,clearOnStoryChange:!0,limit:50},n=(m={})=>{Object.assign(j,m)},o=(m,f)=>{let r=Object.getPrototypeOf(m);return!r||f(r)?r:o(r,f)},i=m=>!!(typeof m=="object"&&m&&o(m,f=>/^Synthetic(?:Base)?Event$/.test(f.constructor.name))&&typeof m.persist=="function"),t=m=>{if(i(m)){let f=Object.create(m.constructor.prototype,Object.getOwnPropertyDescriptors(m));f.persist();let r=Object.getOwnPropertyDescriptor(f,"view"),y=r==null?void 0:r.value;return typeof y=="object"&&(y==null?void 0:y.constructor.name)==="Window"&&Object.defineProperty(f,"view",{...r,value:Object.create(y.constructor.prototype)}),f}return m},s=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?(0,S.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function I(m,f={}){let r={...j,...f},y=function(...D){var V,L;if(f.implicit){let B=(V="__STORYBOOK_PREVIEW__"in g.global?g.global.__STORYBOOK_PREVIEW__:void 0)==null?void 0:V.storyRenders.find(R=>R.phase==="playing"||R.phase==="rendering");if(B){let R=!((L=window==null?void 0:window.FEATURES)!=null&&L.disallowImplicitActionsInRenderV8),U=new p.ImplicitActionsDuringRendering({phase:B.phase,name:m,deprecated:R});if(R)console.warn(U);else throw U}}let E=a.addons.getChannel(),C=s(),z=5,K=D.map(t),b=D.length>1?K:K[0],M={id:C,count:0,data:{name:m,args:b},options:{...r,maxDepth:z+(r.depth||3),allowFunction:r.allowFunction||!1}};E.emit(k,M)};return y.isAction=!0,y.implicit=f.implicit,y}var W=(...m)=>{let f=j,r=m;r.length===1&&Array.isArray(r[0])&&([r]=r),r.length!==1&&typeof r[r.length-1]!="string"&&(f={...j,...r.pop()});let y=r[0];(r.length!==1||typeof y=="string")&&(y={},r.forEach(E=>{y[E]=E}));let D={};return Object.keys(y).forEach(E=>{D[E]=I(y[E],f)}),D}}),"./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js":((w,u,e)=>{"use strict";var a=e("./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"),p={"text/plain":"Text","text/html":"Url",default:"Text"},g="Copy to clipboard: #{key}, Enter";function S(_){var c=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return _.replace(/#{\s*key\s*}/g,c)}function O(_,c){var k,A,T,j,n,o,i=!1;c||(c={}),k=c.debug||!1;try{T=a(),j=document.createRange(),n=document.getSelection(),o=document.createElement("span"),o.textContent=_,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(s){if(s.stopPropagation(),c.format)if(s.preventDefault(),typeof s.clipboardData=="undefined"){k&&console.warn("unable to use e.clipboardData"),k&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var I=p[c.format]||p.default;window.clipboardData.setData(I,_)}else s.clipboardData.clearData(),s.clipboardData.setData(c.format,_);c.onCopy&&(s.preventDefault(),c.onCopy(s.clipboardData))}),document.body.appendChild(o),j.selectNodeContents(o),n.addRange(j);var t=document.execCommand("copy");if(!t)throw new Error("copy command was unsuccessful");i=!0}catch(s){k&&console.error("unable to copy using execCommand: ",s),k&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(c.format||"text",_),c.onCopy&&c.onCopy(window.clipboardData),i=!0}catch(I){k&&console.error("unable to copy using clipboardData: ",I),k&&console.error("falling back to prompt"),A=S("message"in c?c.message:g),window.prompt(A,_)}}finally{n&&(typeof n.removeRange=="function"?n.removeRange(j):n.removeAllRanges()),o&&document.body.removeChild(o),T()}return i}w.exports=O}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css":((w,u,e)=>{"use strict";e.d(u,{A:()=>_});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(a),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),S=e.n(g),O=S()(p());O.push([w.id,`.decorator--QWKNV{
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
}`,""]),O.locals={decorator:"decorator--QWKNV",header:"header--rVwlg",caption:"caption--pSSv2",labelLayout:"labelLayout--Y7U95",label:"label--aPU6B",required:"required--RQcy6",footer:"footer--Qblaa",hintLayout:"hintLayout--Kgk2P",hintIconContainer:"hintIconContainer--q0yUU",hint:"hint--NfQyJ",icon:"icon--cJqtQ",hintIcon:"hintIcon--IRuOL",counterLimit:"counterLimit--ZqUdi",counterCurrentValue:"counterCurrentValue--Fp71V",labelTooltipTrigger:"labelTooltipTrigger--oiPTH"};const _=O}),"./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js":(w=>{w.exports=function(){var u=document.getSelection();if(!u.rangeCount)return function(){};for(var e=document.activeElement,a=[],p=0;p<u.rangeCount;p++)a.push(u.getRangeAt(p));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return u.removeAllRanges(),function(){u.type==="Caret"&&u.removeAllRanges(),u.rangeCount||a.forEach(function(g){u.addRange(g)}),e&&e.focus()}}})}]);})();
