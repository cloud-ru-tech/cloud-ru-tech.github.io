"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2848],{"./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"(h,p,e){e.d(p,{m:()=>te});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(m),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.10_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),n=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),f=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),y=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),l=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),v=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),A=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),z=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.8/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(P),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),D=e.n(B),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(F),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(V),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),G=e.n(j),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=e.n(N),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),b={};b.styleTagTransform=k(),b.setAttributes=M(),b.insert=T().bind(null,"head"),b.domAPI=D(),b.insertStyleElement=G();var g=S()(E.A,b);const _=E.A&&E.A.locals?E.A.locals:void 0;function x(t){var i;let o,s;switch(t.validationState){case f.sv.Success:o=l.A,s=!0;break;case f.sv.Error:o=v.A,s=!0;break;case f.sv.Warning:o=A.A,s=!0;break;case f.sv.Default:default:o=z.A,s=!1;break}return((i=t.showHintIcon)!==null&&i!==void 0?i:s)?(0,a.jsx)(o,{size:16,"data-validation":t.validationState,className:_.hintIcon}):null}function O({length:t,hint:i,size:o,validationState:s=f.sv.Default,showHintIcon:d}){const w=!i&&t,I=t&&t.max&&t.current>t.max,U=(0,c.useMemo)(()=>x({validationState:s,showHintIcon:d}),[d,s]);return!i&&!t?null:(0,a.jsxs)("span",{className:_.footer,"data-reverse":w||void 0,"data-size":o,children:[i&&(0,a.jsxs)("span",{className:_.hintLayout,children:[U&&(0,a.jsx)("span",{className:_.hintIconContainer,"data-size":o,children:U}),(0,a.jsx)("span",{className:_.hint,"data-validation":s,"data-test-id":"field-decorator__hint",children:i})]}),t&&(0,a.jsxs)("span",{"data-test-id":"field-decorator__counter",className:_.counterLimit,children:[(0,a.jsx)("span",{"data-validation":s,"data-limit-exceeded":I||void 0,className:_.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:t.current}),(0,a.jsxs)("span",{"data-validation":s,"data-limit-exceeded":I||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",t.max]})]})]})}var L=function(t,i){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&i.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(t);d<s.length;d++)i.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(t,s[d])&&(o[s[d]]=t[s[d]]);return o};const X=c.forwardRef((t,i)=>{var{size:o=24}=t,s=L(t,["size"]);s.width=void 0,s.height=void 0;const d="-question-s";return typeof o=="number"&&(s.style||(s.style={}),s.style.width=o+"px",s.style.height=o+"px"),(0,a.jsx)("svg",Object.assign({ref:i,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+d},s,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+d.substring(1)})}))});var Q=function(t,i){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&i.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(t);d<s.length;d++)i.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(t,s[d])&&(o[s[d]]=t[s[d]]);return o};const R=c.forwardRef((t,i)=>{var{size:o=24}=t,s=Q(t,["size"]);s.width=void 0,s.height=void 0;const d="-question-xs";return typeof o=="number"&&(s.style||(s.style={}),s.style.width=o+"px",s.style.height=o+"px"),(0,a.jsx)("svg",Object.assign({ref:i,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+d},s,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+d.substring(1)})}))});var W=function(t,i){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&i.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(t);d<s.length;d++)i.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(t,s[d])&&(o[s[d]]=t[s[d]]);return o};const H=(0,c.forwardRef)((t,i)=>{var{size:o=24}=t,s=W(t,["size"]);return Number(o)>=20?(0,a.jsx)(X,Object.assign({ref:i,size:o},s)):(0,a.jsx)(R,Object.assign({ref:i,size:o},s))});var Y=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.16_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),C=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function ee({label:t="",labelTooltip:i,caption:o,labelFor:s,size:d,required:w=!1,labelTooltipPlacement:I="top"}){return(0,a.jsxs)("span",{className:_.header,"data-size":d,children:[t&&(0,a.jsxs)("span",{className:_.labelLayout,children:[(0,a.jsx)("label",{className:_.label,htmlFor:s,"data-test-id":"field-decorator__label",children:(0,a.jsx)(C.m,{text:t})}),w&&(0,a.jsx)("span",{className:_.required,"data-test-id":"field-decorator__required-sign",children:"*"}),i&&(0,a.jsx)(Y.m,{tip:i,placement:I,"data-test-id":"field-decorator__label-tooltip",triggerClassName:_.labelTooltipTrigger,children:(0,a.jsx)(H,{size:16,className:_.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),o&&(0,a.jsx)("span",{className:_.caption,children:o})]})}var se=function(t,i){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&i.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(t);d<s.length;d++)i.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(t,s[d])&&(o[s[d]]=t[s[d]]);return o};const te=(0,c.forwardRef)((t,i)=>{var{children:o,className:s,label:d,labelTooltip:w,required:I,labelFor:U,caption:ae,length:ne,hint:K,disabled:q,readonly:le,showHintIcon:re,labelTooltipPlacement:ce,size:oe=u.SK.S,error:de,validationState:_e=f.sv.Default}=t,ue=se(t,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const ie=!q&&!le,pe=(0,y.t)({validationState:_e,error:de});return(0,a.jsxs)("div",Object.assign({className:r()(_.decorator,s)},(0,n.z7)(ue),{"data-size":oe,ref:i,children:[d&&(0,a.jsx)(ee,{labelTooltipPlacement:ce,required:I,label:d,labelTooltip:w,labelFor:U,caption:ae,size:oe}),o,(0,a.jsx)(O,{length:ie?ne:void 0,hint:de||K,showHintIcon:re,size:oe,validationState:ie?pe:f.sv.Default})]}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"(h,p,e){e.d(p,{aJ:()=>m,sv:()=>a});const a={Default:"default",Error:"error",Warning:"warning",Success:"success"},m={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},r=null},"./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"(h,p,e){e.d(p,{V:()=>N});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(m),c=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),u=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(n),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),l=e.n(y),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),A=e.n(v),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),P=e.n(z),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(S),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),F=e.n(D),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"),V={};V.styleTagTransform=F(),V.setAttributes=P(),V.insert=A().bind(null,"head"),V.domAPI=l(),V.insertStyleElement=B();var M=f()(T.A,V);const j=T.A&&T.A.locals?T.A.locals:void 0;var G=function(k,E){var b={};for(var g in k)Object.prototype.hasOwnProperty.call(k,g)&&E.indexOf(g)<0&&(b[g]=k[g]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,g=Object.getOwnPropertySymbols(k);_<g.length;_++)E.indexOf(g[_])<0&&Object.prototype.propertyIsEnumerable.call(k,g[_])&&(b[g[_]]=k[g[_]]);return b};function N(k){var{className:E,children:b,size:g,validationState:_,variant:x,disabled:O,readonly:L,focused:J,disableFocus:X,selectable:Q,style:$,prefix:R,postfix:W,inputRef:Z}=k,H=G(k,["className","children","size","validationState","variant","disabled","readonly","focused","disableFocus","selectable","style","prefix","postfix","inputRef"]);const Y=()=>{var C;O||(C=Z.current)===null||C===void 0||C.focus()};return(0,a.jsxs)("div",Object.assign({className:r()(E,j.container),style:$,"data-size":g,"data-validation":O||L?u.sv.Default:_,"data-variant":x,"data-disabled":O||void 0,"data-readonly":L||void 0,"data-focused":J||void 0,"data-disable-focus":X||void 0,"data-selectable":Q||void 0,"data-test-id":"field-container-private",onClick:Y,role:"textbox",tabIndex:-1},(0,c.z7)(H),{children:[R&&(0,a.jsx)("span",{className:j.prefix,"data-test-id":"field-container-private__prefix-icon",children:R}),b,W&&(0,a.jsx)("span",{className:j.postfix,children:W})]}))}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"(h,p,e){e.d(p,{$:()=>u});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),c=function(n,f){var y={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&f.indexOf(l)<0&&(y[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,l=Object.getOwnPropertySymbols(n);v<l.length;v++)f.indexOf(l[v])<0&&Object.prototype.propertyIsEnumerable.call(n,l[v])&&(y[l[v]]=n[l[v]]);return y};function u({postfix:n,disabled:f}){return(0,m.useMemo)(()=>({id:"postfix",active:!1,show:!!n,render:y=>{var{key:l}=y,v=c(y,["key"]);return(0,a.jsx)("div",Object.assign({},v,{className:r.A.postfix,"data-test-id":"field-postfix","data-disabled":f||void 0,children:n}),l)}}),[f,n])}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"(h,p,e){e.d(p,{M:()=>u});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),c=function(n,f){var y={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&f.indexOf(l)<0&&(y[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,l=Object.getOwnPropertySymbols(n);v<l.length;v++)f.indexOf(l[v])<0&&Object.prototype.propertyIsEnumerable.call(n,l[v])&&(y[l[v]]=n[l[v]]);return y};function u({prefix:n,disabled:f}){return(0,m.useMemo)(()=>({id:"prefix",active:!1,show:!!n,render:y=>{var{key:l}=y,v=c(y,["key"]);return(0,a.jsx)("div",Object.assign({},v,{"data-test-id":"field-prefix",className:r.A.prefix,"data-disabled":f||void 0,children:n}),l)}}),[f,n])}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"(h,p,e){e.d(p,{I:()=>m});var a=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function m({value:r,onChange:c,defaultValue:u}){return(0,a.iC)(r,u,n=>{const f=typeof n=="function"?n(r):n;c==null||c(f)})}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"(h,p,e){e.d(p,{t:()=>m});var a=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function m({validationState:r,error:c}){return c?a.sv.Error:r!=null?r:a.sv.Default}},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.10_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"(h,p,e){e.d(p,{K:()=>E});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(m),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const n={Text:"text",Password:"password",Number:"number",Tel:"tel",Email:"email",Url:"url"},f={Text:"text",Decimal:"decimal",Numeric:"numeric",Tel:"tel",Search:"search",Email:"email",Url:"url",None:"none"};var y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(y),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(v),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),P=e.n(z),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=e.n(S),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),F=e.n(D),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),V=e.n(T),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.10_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"),j={};j.styleTagTransform=V(),j.setAttributes=B(),j.insert=P().bind(null,"head"),j.domAPI=A(),j.insertStyleElement=F();var G=l()(M.A,j);const N=M.A&&M.A.locals?M.A.locals:void 0;var k=function(b,g){var _={};for(var x in b)Object.prototype.hasOwnProperty.call(b,x)&&g.indexOf(x)<0&&(_[x]=b[x]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,x=Object.getOwnPropertySymbols(b);O<x.length;O++)g.indexOf(x[O])<0&&Object.prototype.propertyIsEnumerable.call(b,x[O])&&(_[x[O]]=b[x[O]]);return _};const E=(0,c.forwardRef)((b,g)=>{var{name:_,value:x="",onChange:O,placeholder:L,id:J,className:X,type:Q=n.Text,inputMode:$=f.Text,disabled:R=!1,readonly:W=!1,autoComplete:Z=!1,autoFocus:H=!1,maxLength:Y,min:C,max:ee,step:se,onFocus:te,onBlur:t,onKeyDown:i,onPaste:o,tabIndex:s=0,onClick:d,onMouseDown:w,spellCheck:I,pattern:U}=b,ae=k(b,["name","value","onChange","placeholder","id","className","type","inputMode","disabled","readonly","autoComplete","autoFocus","maxLength","min","max","step","onFocus","onBlur","onKeyDown","onPaste","tabIndex","onClick","onMouseDown","spellCheck","pattern"]);const ne=q=>{O==null||O(q.target.value,q)};let K;switch(Z){case!0:K="on";break;case!1:K="off";break;default:K=Z;break}return(0,a.jsx)("input",Object.assign({name:_,maxLength:Y,id:J,className:r()(X,N.inputPrivate),autoComplete:K,ref:g,value:x,onChange:ne,placeholder:L,type:Q,inputMode:$,disabled:R,readOnly:W,onFocus:te,onBlur:t,onKeyDown:i,onPaste:o,tabIndex:s,onClick:d,onMouseDown:w,min:C,max:ee,step:se,spellCheck:I,title:"",pattern:U,autoFocus:H},(0,u.z7)(ae)))})},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.10_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"(h,p,e){e.d(p,{Ev:()=>m,SK:()=>a,Vp:()=>r,_h:()=>c});const a={S:"s",M:"m",L:"l"},m={Xs:16,S:24},r={S:"s",M:"m"},c={[a.S]:r.S,[a.M]:r.M,[a.L]:r.M}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"(h,p,e){e.d(p,{A:()=>n});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(a),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),u=c()(m());u.push([h.id,`.decorator--aDMRB{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  width:100%;
  min-width:0;
}
.decorator--aDMRB[data-size=s]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--aDMRB[data-size=m]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--aDMRB[data-size=l]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}

.header--MQkxH{
  display:flex;
  gap:var(--dimension-050m, 4px);
  box-sizing:border-box;
  color:var(--sys-neutral-text-support, #6d707f);
}
.header--MQkxH[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--MQkxH[data-size=s] .caption--ELS0s{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--MQkxH[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--MQkxH[data-size=m] .caption--ELS0s{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--MQkxH[data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--MQkxH[data-size=l] .caption--ELS0s{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.labelLayout--qwmTu{
  gap:var(--space-fields-label-gap, 2px);
  display:inline-flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.label--LpEel{
  display:grid;
  color:var(--sys-neutral-text-support, #6d707f);
}

.required--ysODm{
  color:var(--sys-neutral-text-support, #6d707f);
}

.footer--b09d7{
  gap:var(--space-fields-hint-container-gap, 16px);
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
}
.footer--b09d7[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.footer--b09d7[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--b09d7[data-size=l]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--b09d7[data-reverse]{
  justify-content:flex-end;
}

.hintLayout--ABjTF{
  gap:var(--space-fields-hint-gap, 2px);
  display:inline-flex;
  align-items:flex-start;
}

.hintIconContainer--rrhBy{
  display:flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.hintIconContainer--rrhBy[data-size=s]{
  width:var(--size-fields-hint-icon-container-s, 16px);
  height:var(--size-fields-hint-icon-container-s, 16px);
}
.hintIconContainer--rrhBy[data-size=m]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}
.hintIconContainer--rrhBy[data-size=l]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}

.hint--UgEVL{
  display:grid;
  flex-grow:1;
  word-break:break-word;
}
.hint--UgEVL[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.hint--UgEVL[data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.hint--UgEVL[data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.hint--UgEVL[data-validation=success]{
  color:var(--sys-green-text-main, #3d6035);
}

.icon--JM9Ui{
  flex-shrink:0;
  box-sizing:content-box;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.hintIcon--c7wTy{
  flex-shrink:0;
  box-sizing:content-box;
}
.hintIcon--c7wTy[data-validation=default]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.hintIcon--c7wTy[data-validation=error]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.hintIcon--c7wTy[data-validation=warning]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.hintIcon--c7wTy[data-validation=success]{
  color:var(--sys-green-accent-default, #57b762);
}

.counterLimit--xBIbK > span[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.counterLimit--xBIbK > span[data-limit-exceeded], .counterLimit--xBIbK > span[data-validation=error]{
  color:var(--sys-red-text-light, #e7756a);
}
.counterLimit--xBIbK > span[data-validation=warning]{
  color:var(--sys-yellow-text-light, #d3a736);
}
.counterLimit--xBIbK > span[data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.counterCurrentValue--Yb698[data-limit-exceeded][data-validation=default]{
  color:var(--sys-neutral-text-main, #41424e);
}
.counterCurrentValue--Yb698[data-limit-exceeded][data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.counterCurrentValue--Yb698[data-limit-exceeded][data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.counterCurrentValue--Yb698[data-limit-exceeded][data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.labelTooltipTrigger--Gq9ZP{
  cursor:pointer;
  display:flex;
  align-items:center;
  height:100%;
}`,""]),u.locals={decorator:"decorator--aDMRB",header:"header--MQkxH",caption:"caption--ELS0s",labelLayout:"labelLayout--qwmTu",label:"label--LpEel",required:"required--ysODm",footer:"footer--b09d7",hintLayout:"hintLayout--ABjTF",hintIconContainer:"hintIconContainer--rrhBy",hint:"hint--UgEVL",icon:"icon--JM9Ui",hintIcon:"hintIcon--c7wTy",counterLimit:"counterLimit--xBIbK",counterCurrentValue:"counterCurrentValue--Yb698",labelTooltipTrigger:"labelTooltipTrigger--Gq9ZP"};const n=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"(h,p,e){e.d(p,{A:()=>n});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(a),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),u=c()(m());u.push([h.id,`.container--SOVVd[data-validation=default]{
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--SOVVd[data-validation=default]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-decor-hovered, #b3deca);
}
.container--SOVVd[data-validation=default]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--SOVVd[data-validation=default]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-accent-default, #389f74);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}
.container--SOVVd[data-validation=error]{
  background-color:var(--sys-red-background1-level, #fef6f3);
  border-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--SOVVd[data-validation=error]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-decor-hovered, #fac1b3);
}
.container--SOVVd[data-validation=error]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--SOVVd[data-validation=error]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-accent-default, #cb3f3e);
  outline-color:var(--sys-red-decor-activated, #fbab99);
}
.container--SOVVd[data-validation=warning]{
  background-color:var(--sys-yellow-background1-level, #fcfbef);
  border-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.container--SOVVd[data-validation=warning]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.container--SOVVd[data-validation=warning]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--SOVVd[data-validation=warning]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-accent-default, #e2b134);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
}
.container--SOVVd[data-validation=success]{
  background-color:var(--sys-green-background1-level, #f6fdf3);
  border-color:var(--sys-green-decor-default, #d2ead0);
}
.container--SOVVd[data-validation=success]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.container--SOVVd[data-validation=success]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--SOVVd[data-validation=success]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-accent-default, #57b762);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
}
.container--SOVVd{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-sizing:border-box;
  border-style:solid;
}
.container--SOVVd[data-size=s]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--SOVVd[data-size=s],
.container--SOVVd[data-size=s] input,
.container--SOVVd[data-size=s] select,
.container--SOVVd[data-size=s] textarea,
.container--SOVVd[data-size=s] span{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.container--SOVVd[data-size=s][data-variant=single-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--SOVVd[data-size=s][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-button, 0px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--SOVVd[data-size=s][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-button, 0px);
  height:var(--size-fields-s, 32px);
}
.container--SOVVd[data-size=s][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-s-top, 7px);
  padding-bottom:var(--space-fields-multi-line-container-s-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-s-left, 7px);
  padding-right:var(--space-fields-multi-line-container-s-right, 2px);
}
.container--SOVVd[data-size=m]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--SOVVd[data-size=m],
.container--SOVVd[data-size=m] input,
.container--SOVVd[data-size=m] select,
.container--SOVVd[data-size=m] textarea,
.container--SOVVd[data-size=m] span{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.container--SOVVd[data-size=m][data-variant=single-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--SOVVd[data-size=m][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-button, 0px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--SOVVd[data-size=m][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-button, 0px);
  height:var(--size-fields-m, 40px);
}
.container--SOVVd[data-size=m][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-m-top, 9px);
  padding-bottom:var(--space-fields-multi-line-container-m-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-m-left, 9px);
  padding-right:var(--space-fields-multi-line-container-m-right, 2px);
}
.container--SOVVd[data-size=l]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--SOVVd[data-size=l],
.container--SOVVd[data-size=l] input,
.container--SOVVd[data-size=l] select,
.container--SOVVd[data-size=l] textarea,
.container--SOVVd[data-size=l] span{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.container--SOVVd[data-size=l][data-variant=single-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--SOVVd[data-size=l][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-button, 0px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--SOVVd[data-size=l][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-button, 0px);
  height:var(--size-fields-l, 48px);
}
.container--SOVVd[data-size=l][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-l-top, 11px);
  padding-bottom:var(--space-fields-multi-line-container-l-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-l-left, 11px);
  padding-right:var(--space-fields-multi-line-container-l-right, 2px);
}
.container--SOVVd[data-selectable],
.container--SOVVd[data-selectable] input,
.container--SOVVd[data-selectable] select,
.container--SOVVd[data-selectable] textarea,
.container--SOVVd[data-selectable] span{
  cursor:pointer;
}
.container--SOVVd[data-readonly],
.container--SOVVd[data-readonly] input,
.container--SOVVd[data-readonly] select,
.container--SOVVd[data-readonly] textarea,
.container--SOVVd[data-readonly] span{
  cursor:default;
}
.container--SOVVd[data-readonly], .container--SOVVd[data-readonly]:hover{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.container--SOVVd[data-readonly]:not([data-disable-focus]):focus-within, .container--SOVVd[data-readonly]:not([data-disable-focus])[data-focused]{
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}
.container--SOVVd[data-disabled],
.container--SOVVd[data-disabled] input,
.container--SOVVd[data-disabled] select,
.container--SOVVd[data-disabled] textarea,
.container--SOVVd[data-disabled] span{
  cursor:not-allowed;
  background-color:var(--sys-neutral-background, #eeeff3);
}
.container--SOVVd[data-disabled], .container--SOVVd[data-disabled]:focus-within, .container--SOVVd[data-disabled][data-focused], .container--SOVVd[data-disabled]:hover{
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}

.prefix--yCzZI{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

[data-size=s] .prefix--yCzZI, [data-size=s] .postfix--g01Zk{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  align-items:center;
}

[data-size=m] .prefix--yCzZI, [data-size=m] .postfix--g01Zk{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  align-items:center;
}

[data-size=l] .prefix--yCzZI, [data-size=l] .postfix--g01Zk{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  align-items:center;
}`,""]),u.locals={container:"container--SOVVd",prefix:"prefix--yCzZI",postfix:"postfix--g01Zk"};const n=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"(h,p,e){e.d(p,{A:()=>n});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(a),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),u=c()(m());u.push([h.id,`.prefix--AWR7t{
  color:var(--sys-neutral-text-support, #6d707f);
}
.prefix--AWR7t[data-disabled]{
  opacity:var(--opacity-a056, 0.56);
}

.postfix--wnxR6{
  color:var(--sys-neutral-text-support, #6d707f);
}
.postfix--wnxR6[data-disabled]{
  opacity:var(--opacity-a056, 0.56);
}`,""]),u.locals={prefix:"prefix--AWR7t",postfix:"postfix--wnxR6"};const n=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.10_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"(h,p,e){e.d(p,{A:()=>n});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(a),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),u=c()(m());u.push([h.id,`.inputPrivate--nLeX6{
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
.inputPrivate--nLeX6::-moz-placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--nLeX6::placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--nLeX6:-moz-read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.inputPrivate--nLeX6:read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.inputPrivate--nLeX6:-moz-placeholder-shown{
  text-overflow:ellipsis;
}
.inputPrivate--nLeX6:placeholder-shown{
  text-overflow:ellipsis;
}
.inputPrivate--nLeX6[disabled]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--nLeX6[type=number]{
  -moz-appearance:textfield;
}
.inputPrivate--nLeX6[type=number]::-webkit-outer-spin-button, .inputPrivate--nLeX6[type=number]::-webkit-inner-spin-button{
  margin:0;
  -webkit-appearance:none;
}`,""]),u.locals={inputPrivate:"inputPrivate--nLeX6"};const n=u},"./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"(h,p,e){e.d(p,{A:()=>D});var a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(a),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=e.n(r),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),n=e.n(u),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),y=e.n(f),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=e.n(l),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),z=e.n(A),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),S={};S.styleTagTransform=z(),S.setAttributes=y(),S.insert=n().bind(null,"head"),S.domAPI=c(),S.insertStyleElement=v();var B=m()(P.A,S);const D=P.A&&P.A.locals?P.A.locals:void 0}}]);})();
