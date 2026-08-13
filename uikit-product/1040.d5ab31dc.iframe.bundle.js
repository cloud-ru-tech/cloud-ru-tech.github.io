(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[1040],{"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"(k,p,e){"use strict";e.d(p,{m:()=>E});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=e.n(d),b=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),m=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),c=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),j=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),D=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),V=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),O=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),s=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(i),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=e.n(t),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),W=e.n(T),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=e.n(J),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=e.n(G),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),z=e.n(K),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),w={};w.styleTagTransform=z(),w.setAttributes=N(),w.insert=W().bind(null,"head"),w.domAPI=n(),w.insertStyleElement=M();var S=l()(A.A,w);const o=A.A&&A.A.locals?A.A.locals:void 0;function C(r){var v;let _,u;switch(r.validationState){case c.sv.Success:_=D.A,u=!0;break;case c.sv.Error:_=V.A,u=!0;break;case c.sv.Warning:_=O.A,u=!0;break;case c.sv.Default:default:_=s.A,u=!1;break}return((v=r.showHintIcon)!==null&&v!==void 0?v:u)?(0,a.jsx)(_,{size:16,"data-validation":r.validationState,className:o.hintIcon}):null}function I({length:r,hint:v,size:_,validationState:u=c.sv.Default,showHintIcon:h}){const P=!v&&r,R=r&&r.max&&r.current>r.max,F=(0,b.useMemo)(()=>C({validationState:u,showHintIcon:h}),[h,u]);return!v&&!r?null:(0,a.jsxs)("span",{className:o.footer,"data-reverse":P||void 0,"data-size":_,children:[v&&(0,a.jsxs)("span",{className:o.hintLayout,children:[F&&(0,a.jsx)("span",{className:o.hintIconContainer,"data-size":_,children:F}),(0,a.jsx)("span",{className:o.hint,"data-validation":u,"data-test-id":"field-decorator__hint",children:v})]}),r&&(0,a.jsxs)("span",{"data-test-id":"field-decorator__counter",className:o.counterLimit,children:[(0,a.jsx)("span",{"data-validation":u,"data-limit-exceeded":R||void 0,className:o.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:r.current}),(0,a.jsxs)("span",{"data-validation":u,"data-limit-exceeded":R||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",r.max]})]})]})}var y=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),x=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),L=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function U({label:r="",labelTooltip:v,caption:_,labelFor:u,size:h,required:P=!1,labelTooltipPlacement:R="top"}){return(0,a.jsxs)("span",{className:o.header,"data-size":h,children:[r&&(0,a.jsxs)("span",{className:o.labelLayout,children:[(0,a.jsx)("label",{className:o.label,htmlFor:u,"data-test-id":"field-decorator__label",children:(0,a.jsx)(L.m,{text:r})}),P&&(0,a.jsx)("span",{className:o.required,"data-test-id":"field-decorator__required-sign",children:"*"}),v&&(0,a.jsx)(x.m,{tip:v,placement:R,"data-test-id":"field-decorator__label-tooltip",triggerClassName:o.labelTooltipTrigger,children:(0,a.jsx)(y.A,{size:16,className:o.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),_&&(0,a.jsx)("span",{className:o.caption,children:_})]})}var B=function(r,v){var _={};for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&v.indexOf(u)<0&&(_[u]=r[u]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,u=Object.getOwnPropertySymbols(r);h<u.length;h++)v.indexOf(u[h])<0&&Object.prototype.propertyIsEnumerable.call(r,u[h])&&(_[u[h]]=r[u[h]]);return _};const E=(0,b.forwardRef)((r,v)=>{var{children:_,className:u,label:h,labelTooltip:P,required:R,labelFor:F,caption:Y,length:Q,hint:$,disabled:q,readonly:ee,showHintIcon:te,labelTooltipPlacement:ae,size:X=g.SK.S,error:H,validationState:se=c.sv.Default}=r,ne=B(r,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const Z=!q&&!ee,oe=(0,j.t)({validationState:se,error:H});return(0,a.jsxs)("div",Object.assign({className:f()(o.decorator,u)},(0,m.z7)(ne),{"data-size":X,ref:v,children:[h&&(0,a.jsx)(U,{labelTooltipPlacement:ae,required:R,label:h,labelTooltip:P,labelFor:F,caption:Y,size:X}),_,(0,a.jsx)(I,{length:Z?Q:void 0,hint:H||$,showHintIcon:te,size:X,validationState:Z?oe:c.sv.Default})]}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"(k,p,e){"use strict";e.d(p,{aJ:()=>d,sv:()=>a});const a={Default:"default",Error:"error",Warning:"warning",Success:"success"},d={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},f=null},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"(k,p,e){"use strict";e.d(p,{V:()=>K});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=e.n(d),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),g=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(m),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),D=e.n(j),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),O=e.n(V),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),i=e.n(s),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),t=e.n(l),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),T=e.n(n),W=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"),J={};J.styleTagTransform=T(),J.setAttributes=i(),J.insert=O().bind(null,"head"),J.domAPI=D(),J.insertStyleElement=t();var N=c()(W.A,J);const G=W.A&&W.A.locals?W.A.locals:void 0;var M=function(z,A){var w={};for(var S in z)Object.prototype.hasOwnProperty.call(z,S)&&A.indexOf(S)<0&&(w[S]=z[S]);if(z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,S=Object.getOwnPropertySymbols(z);o<S.length;o++)A.indexOf(S[o])<0&&Object.prototype.propertyIsEnumerable.call(z,S[o])&&(w[S[o]]=z[S[o]]);return w};function K(z){var{className:A,children:w,size:S,validationState:o,variant:C,disabled:I,readonly:y,focused:x,disableFocus:L,selectable:U,style:B,prefix:E,postfix:r,inputRef:v}=z,_=M(z,["className","children","size","validationState","variant","disabled","readonly","focused","disableFocus","selectable","style","prefix","postfix","inputRef"]);const u=()=>{var h;I||(h=v.current)===null||h===void 0||h.focus()};return(0,a.jsxs)("div",Object.assign({className:f()(A,G.container),style:B,"data-size":S,"data-validation":I||y?g.sv.Default:o,"data-variant":C,"data-disabled":I||void 0,"data-readonly":y||void 0,"data-focused":x||void 0,"data-disable-focus":L||void 0,"data-selectable":U||void 0,"data-test-id":"field-container-private",onClick:u,role:"textbox",tabIndex:-1},(0,b.z7)(_),{children:[E&&(0,a.jsx)("span",{className:G.prefix,"data-test-id":"field-container-private__prefix-icon",children:E}),w,r&&(0,a.jsx)("span",{className:G.postfix,children:r})]}))}},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"(k,p,e){"use strict";e.d(p,{x:()=>S});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),b=e("./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js"),g=e.n(b),m=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),c=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/copy/index.js");function j({size:o,isChecked:C}){switch(o){case f.Vp.S:return C?(0,a.jsx)(m.A,{size:16}):(0,a.jsx)(c.A,{size:16});case f.Vp.M:default:return C?(0,a.jsx)(m.A,{size:24}):(0,a.jsx)(c.A,{size:24})}}var D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),V=e.n(D),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=e.n(O),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),l=e.n(i),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),n=e.n(t),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),W=e.n(T),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),N=e.n(J),G=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonCopyValue/styles.module.css"),M={};M.styleTagTransform=N(),M.setAttributes=n(),M.insert=l().bind(null,"head"),M.domAPI=s(),M.insertStyleElement=W();var K=V()(G.A,M);const z=G.A&&G.A.locals?G.A.locals:void 0,A=(0,d.forwardRef)(({size:o,valueToCopy:C,tabIndex:I=-1,onKeyDown:y,onClick:x,onValueRequest:L,disabled:U},B)=>{const[E,r]=(0,d.useState)(!1),v=(0,d.useRef)(),_=()=>r(!1),u=(P,R)=>{const F=R||C;F&&g()(F,{format:"text/plain"}),r(!0),clearTimeout(v.current),v.current=setTimeout(_,2e3),x==null||x(P)},h=P=>{P.stopPropagation(),L?L().then(({success:R,value:F})=>{R&&u(P,F)}):u(P)};return(0,d.useEffect)(()=>()=>{_(),clearTimeout(v.current)},[]),(0,a.jsx)("button",{className:z.buttonCopyValue,"data-size":o,"data-disabled":U||void 0,onClick:h,"data-test-id":"button-copy-value",ref:B,onKeyDown:y,tabIndex:I,type:"button",disabled:U,children:j({size:o,isChecked:E})})});var w=function(o,C){var I={};for(var y in o)Object.prototype.hasOwnProperty.call(o,y)&&C.indexOf(y)<0&&(I[y]=o[y]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,y=Object.getOwnPropertySymbols(o);x<y.length;x++)C.indexOf(y[x])<0&&Object.prototype.propertyIsEnumerable.call(o,y[x])&&(I[y[x]]=o[y[x]]);return I};function S({copyButtonRef:o,showCopyButton:C,size:I,valueToCopy:y,onValueRequest:x,onCopyButtonClick:L,disabled:U,prefix:B="",postfix:E=""}){return(0,d.useMemo)(()=>({id:"copy",active:!0,ref:o,show:C,render:r=>{var{key:v}=r,_=w(r,["key"]);return(0,a.jsx)(A,Object.assign({},_,{size:f._h[I],valueToCopy:(B!=null?B:"")+y+(E!=null?E:""),onValueRequest:x,onClick:L,disabled:U}),v)}}),[o,C,I,B,y,E,x,L,U])}},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"(k,p,e){"use strict";e.d(p,{I:()=>d});var a=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function d({value:f,onChange:b,defaultValue:g}){return(0,a.iC)(f,g,m=>{const c=typeof m=="function"?m(f):m;b==null||b(c)})}},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"(k,p,e){"use strict";e.d(p,{t:()=>d});var a=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function d({validationState:f,error:b}){return b?a.sv.Error:f!=null?f:a.sv.Default}},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/copy/index.js"(k,p,e){"use strict";e.d(p,{A:()=>O});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=function(s,i){var l={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&i.indexOf(t)<0&&(l[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)i.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(l[t[n]]=s[t[n]]);return l};const g=d.forwardRef((s,i)=>{var{size:l=24}=s,t=f(s,["size"]);t.width=void 0,t.height=void 0;const n="-copy-s";return typeof l=="number"&&(t.style||(t.style={}),t.style.width=l+"px",t.style.height=l+"px"),(0,a.jsx)("svg",Object.assign({ref:i,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var m=function(s,i){var l={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&i.indexOf(t)<0&&(l[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)i.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(l[t[n]]=s[t[n]]);return l};const j=d.forwardRef((s,i)=>{var{size:l=24}=s,t=m(s,["size"]);t.width=void 0,t.height=void 0;const n="-copy-xs";return typeof l=="number"&&(t.style||(t.style={}),t.style.width=l+"px",t.style.height=l+"px"),(0,a.jsx)("svg",Object.assign({ref:i,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var D=function(s,i){var l={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&i.indexOf(t)<0&&(l[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)i.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(l[t[n]]=s[t[n]]);return l};const O=(0,d.forwardRef)((s,i)=>{var{size:l=24}=s,t=D(s,["size"]);return Number(l)>=20?(0,a.jsx)(g,Object.assign({ref:i,size:l},t)):(0,a.jsx)(j,Object.assign({ref:i,size:l},t))})},"./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js"(k,p,e){"use strict";var a=e("./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"),d={"text/plain":"Text","text/html":"Url",default:"Text"},f="Copy to clipboard: #{key}, Enter";function b(m){var c=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return m.replace(/#{\s*key\s*}/g,c)}function g(m,c){var j,D,V,O,s,i,l=!1;c||(c={}),j=c.debug||!1;try{V=a(),O=document.createRange(),s=document.getSelection(),i=document.createElement("span"),i.textContent=m,i.ariaHidden="true",i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",function(n){if(n.stopPropagation(),c.format)if(n.preventDefault(),typeof n.clipboardData=="undefined"){j&&console.warn("unable to use e.clipboardData"),j&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var T=d[c.format]||d.default;window.clipboardData.setData(T,m)}else n.clipboardData.clearData(),n.clipboardData.setData(c.format,m);c.onCopy&&(n.preventDefault(),c.onCopy(n.clipboardData))}),document.body.appendChild(i),O.selectNodeContents(i),s.addRange(O);var t=document.execCommand("copy");if(!t)throw new Error("copy command was unsuccessful");l=!0}catch(n){j&&console.error("unable to copy using execCommand: ",n),j&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(c.format||"text",m),c.onCopy&&c.onCopy(window.clipboardData),l=!0}catch(T){j&&console.error("unable to copy using clipboardData: ",T),j&&console.error("falling back to prompt"),D=b("message"in c?c.message:f),window.prompt(D,m)}}finally{s&&(typeof s.removeRange=="function"?s.removeRange(O):s.removeAllRanges()),i&&document.body.removeChild(i),V()}return l}k.exports=g},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"(k,p,e){"use strict";e.d(p,{A:()=>m});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(a),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(f),g=b()(d());g.push([k.id,`.decorator--w1uHQ{
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
}`,""]),g.locals={decorator:"decorator--w1uHQ",header:"header--MMmBW",caption:"caption--RgTxc",labelLayout:"labelLayout--HfSuZ",label:"label--oCjkn",required:"required--KNRpk",footer:"footer--z2ES_",hintLayout:"hintLayout--x8KS1",hintIconContainer:"hintIconContainer--g9Zz8",hint:"hint--sSf9n",icon:"icon--NM7j3",hintIcon:"hintIcon--yXISs",counterLimit:"counterLimit--nVIYP",counterCurrentValue:"counterCurrentValue--klvnU",labelTooltipTrigger:"labelTooltipTrigger--WCXVg"};const m=g},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonCopyValue/styles.module.css"(k,p,e){"use strict";e.d(p,{A:()=>m});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(a),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(f),g=b()(d());g.push([k.id,`.buttonCopyValue--IJCUD{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonCopyValue--IJCUD[data-size=s]{
  width:var(--size-fields-buttons-s, 16px);
  height:var(--size-fields-buttons-s, 16px);
  border-radius:var(--radius-fields-buttons-s, 8px);
}
.buttonCopyValue--IJCUD[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.buttonCopyValue--IJCUD[data-size=m]{
  width:var(--size-fields-buttons-m, 24px);
  height:var(--size-fields-buttons-m, 24px);
  border-radius:var(--radius-fields-buttons-m, 12px);
}
.buttonCopyValue--IJCUD[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonCopyValue--IJCUD:hover{
  cursor:pointer;
  color:var(--sys-neutral-text-support, #6d707f);
}
.buttonCopyValue--IJCUD:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-support, #6d707f);
  outline-color:var(--sys-available-complementary, #1c1c24);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonCopyValue--IJCUD:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.buttonCopyValue--IJCUD[data-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),g.locals={buttonCopyValue:"buttonCopyValue--IJCUD"};const m=g},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"(k,p,e){"use strict";e.d(p,{A:()=>m});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(a),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(f),g=b()(d());g.push([k.id,`.container--G13Ju[data-validation=default]{
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
}`,""]),g.locals={container:"container--G13Ju",prefix:"prefix--grn7X",postfix:"postfix--BMmTM"};const m=g},"./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"(k){k.exports=function(){var p=document.getSelection();if(!p.rangeCount)return function(){};for(var e=document.activeElement,a=[],d=0;d<p.rangeCount;d++)a.push(p.getRangeAt(d));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return p.removeAllRanges(),function(){p.type==="Caret"&&p.removeAllRanges(),p.rangeCount||a.forEach(function(f){p.addRange(f)}),e&&e.focus()}}}}]);})();
