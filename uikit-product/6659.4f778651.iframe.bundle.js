"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[6659],{"./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js":((_,f,s)=>{s.d(f,{m:()=>B});var i=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=s.n(l),g=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=s("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),m=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),h=s("./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),k=s("./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),O=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),C=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),z=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),t=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),r=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=s.n(r),e=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=s.n(e),S=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),I=s.n(S),F=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),H=s.n(F),J=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=s.n(J),D=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),j=s.n(D),L=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),w={};w.styleTagTransform=j(),w.setAttributes=H(),w.insert=I().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=R();var x=n()(L.A,w);const c=L.A&&L.A.locals?L.A.locals:void 0;function V(o){var b;let v,d;switch(o.validationState){case h.sv.Success:v=O.A,d=!0;break;case h.sv.Error:v=C.A,d=!0;break;case h.sv.Warning:v=z.A,d=!0;break;case h.sv.Default:default:v=t.A,d=!1;break}return((b=o.showHintIcon)!==null&&b!==void 0?b:d)?(0,i.jsx)(v,{size:16,"data-validation":o.validationState,className:c.hintIcon}):null}function T({length:o,hint:b,size:v,validationState:d=h.sv.Default,showHintIcon:y}){const A=!b&&o,P=o&&o.max&&o.current>o.max,N=(0,g.useMemo)(()=>V({validationState:d,showHintIcon:y}),[y,d]);return!b&&!o?null:(0,i.jsxs)("span",{className:c.footer,"data-reverse":A||void 0,"data-size":v,children:[b&&(0,i.jsxs)("span",{className:c.hintLayout,children:[N&&(0,i.jsx)("span",{className:c.hintIconContainer,"data-size":v,children:N}),(0,i.jsx)("span",{className:c.hint,"data-validation":d,"data-test-id":"field-decorator__hint",children:b})]}),o&&(0,i.jsxs)("span",{"data-test-id":"field-decorator__counter",className:c.counterLimit,children:[(0,i.jsx)("span",{"data-validation":d,"data-limit-exceeded":P||void 0,className:c.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:o.current}),(0,i.jsxs)("span",{"data-validation":d,"data-limit-exceeded":P||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",o.max]})]})]})}var E=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),M=s("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),X=s("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function G({label:o="",labelTooltip:b,caption:v,labelFor:d,size:y,required:A=!1,labelTooltipPlacement:P="top"}){return(0,i.jsxs)("span",{className:c.header,"data-size":y,children:[o&&(0,i.jsxs)("span",{className:c.labelLayout,children:[(0,i.jsx)("label",{className:c.label,htmlFor:d,"data-test-id":"field-decorator__label",children:(0,i.jsx)(X.m,{text:o})}),A&&(0,i.jsx)("span",{className:c.required,"data-test-id":"field-decorator__required-sign",children:"*"}),b&&(0,i.jsx)(M.m,{tip:b,placement:P,"data-test-id":"field-decorator__label-tooltip",triggerClassName:c.labelTooltipTrigger,children:(0,i.jsx)(E.A,{size:16,className:c.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),v&&(0,i.jsx)("span",{className:c.caption,children:v})]})}var W=function(o,b){var v={};for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&b.indexOf(d)<0&&(v[d]=o[d]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,d=Object.getOwnPropertySymbols(o);y<d.length;y++)b.indexOf(d[y])<0&&Object.prototype.propertyIsEnumerable.call(o,d[y])&&(v[d[y]]=o[d[y]]);return v};const B=(0,g.forwardRef)((o,b)=>{var{children:v,className:d,label:y,labelTooltip:A,required:P,labelFor:N,caption:Q,length:Z,hint:$,disabled:q,readonly:ee,showHintIcon:te,labelTooltipPlacement:ae,size:K=p.SK.S,error:U,validationState:ne=h.sv.Default}=o,se=W(o,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const Y=!q&&!ee,re=(0,k.t)({validationState:ne,error:U});return(0,i.jsxs)("div",Object.assign({className:u()(c.decorator,d)},(0,m.z7)(se),{"data-size":K,ref:b,children:[y&&(0,i.jsx)(G,{labelTooltipPlacement:ae,required:P,label:y,labelTooltip:A,labelFor:N,caption:Q,size:K}),v,(0,i.jsx)(T,{length:Y?Z:void 0,hint:U||$,showHintIcon:te,size:K,validationState:Y?re:h.sv.Default})]}))})}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js":((_,f,s)=>{s.d(f,{aJ:()=>l,sv:()=>i});const i={Default:"default",Error:"error",Warning:"warning",Success:"success"},l={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},u={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js":((_,f,s)=>{s.d(f,{V:()=>D});var i=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=s.n(l),g=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),p=s("./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),m=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=s.n(m),k=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=s.n(k),C=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),z=s.n(C),t=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=s.n(t),n=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),e=s.n(n),a=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),S=s.n(a),I=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"),F={};F.styleTagTransform=S(),F.setAttributes=r(),F.insert=z().bind(null,"head"),F.domAPI=O(),F.insertStyleElement=e();var H=h()(I.A,F);const J=I.A&&I.A.locals?I.A.locals:void 0;var R=function(j,L){var w={};for(var x in j)Object.prototype.hasOwnProperty.call(j,x)&&L.indexOf(x)<0&&(w[x]=j[x]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,x=Object.getOwnPropertySymbols(j);c<x.length;c++)L.indexOf(x[c])<0&&Object.prototype.propertyIsEnumerable.call(j,x[c])&&(w[x[c]]=j[x[c]]);return w};function D(j){var{className:L,children:w,size:x,validationState:c,variant:V,disabled:T,readonly:E,focused:M,disableFocus:X,selectable:G,style:W,prefix:B,postfix:o,inputRef:b}=j,v=R(j,["className","children","size","validationState","variant","disabled","readonly","focused","disableFocus","selectable","style","prefix","postfix","inputRef"]);const d=()=>{var y;T||(y=b.current)===null||y===void 0||y.focus()};return(0,i.jsxs)("div",Object.assign({className:u()(L,J.container),style:W,"data-size":x,"data-validation":T||E?p.sv.Default:c,"data-variant":V,"data-disabled":T||void 0,"data-readonly":E||void 0,"data-focused":M||void 0,"data-disable-focus":X||void 0,"data-selectable":G||void 0,"data-test-id":"field-container-private",onClick:d,role:"textbox",tabIndex:-1},(0,g.z7)(v),{children:[B&&(0,i.jsx)("span",{className:J.prefix,"data-test-id":"field-container-private__prefix-icon",children:B}),w,o&&(0,i.jsx)("span",{className:J.postfix,children:o})]}))}}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js":((_,f,s)=>{s.d(f,{I:()=>l});var i=s("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function l({value:u,onChange:g,defaultValue:p}){return(0,i.iC)(u,p,m=>{const h=typeof m=="function"?m(u):m;g==null||g(h)})}}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js":((_,f,s)=>{s.d(f,{t:()=>l});var i=s("./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function l({validationState:u,error:g}){return g?i.sv.Error:u!=null?u:i.sv.Default}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js":((_,f,s)=>{s.d(f,{A:()=>z});var i=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const p=l.forwardRef((t,r)=>{var{size:n=24}=t,e=u(t,["size"]);e.width=void 0,e.height=void 0;const a="-alarm-filled-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,i.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var m=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const k=l.forwardRef((t,r)=>{var{size:n=24}=t,e=m(t,["size"]);e.width=void 0,e.height=void 0;const a="-alarm-filled-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,i.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var O=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const z=(0,l.forwardRef)((t,r)=>{var{size:n=24}=t,e=O(t,["size"]);return Number(n)>=20?(0,i.jsx)(p,Object.assign({ref:r,size:n},e)):(0,i.jsx)(k,Object.assign({ref:r,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js":((_,f,s)=>{s.d(f,{A:()=>z});var i=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const p=l.forwardRef((t,r)=>{var{size:n=24}=t,e=u(t,["size"]);e.width=void 0,e.height=void 0;const a="-check-filled-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,i.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var m=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const k=l.forwardRef((t,r)=>{var{size:n=24}=t,e=m(t,["size"]);e.width=void 0,e.height=void 0;const a="-check-filled-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,i.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var O=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const z=(0,l.forwardRef)((t,r)=>{var{size:n=24}=t,e=O(t,["size"]);return Number(n)>=20?(0,i.jsx)(p,Object.assign({ref:r,size:n},e)):(0,i.jsx)(k,Object.assign({ref:r,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js":((_,f,s)=>{s.d(f,{A:()=>z});var i=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const p=l.forwardRef((t,r)=>{var{size:n=24}=t,e=u(t,["size"]);e.width=void 0,e.height=void 0;const a="-cross-filled-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,i.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var m=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const k=l.forwardRef((t,r)=>{var{size:n=24}=t,e=m(t,["size"]);e.width=void 0,e.height=void 0;const a="-cross-filled-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,i.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var O=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const z=(0,l.forwardRef)((t,r)=>{var{size:n=24}=t,e=O(t,["size"]);return Number(n)>=20?(0,i.jsx)(p,Object.assign({ref:r,size:n},e)):(0,i.jsx)(k,Object.assign({ref:r,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js":((_,f,s)=>{s.d(f,{A:()=>z});var i=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const p=l.forwardRef((t,r)=>{var{size:n=24}=t,e=u(t,["size"]);e.width=void 0,e.height=void 0;const a="-info-filled-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,i.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var m=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const k=l.forwardRef((t,r)=>{var{size:n=24}=t,e=m(t,["size"]);e.width=void 0,e.height=void 0;const a="-info-filled-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,i.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var O=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(t);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(n[e[a]]=t[e[a]]);return n};const z=(0,l.forwardRef)((t,r)=>{var{size:n=24}=t,e=O(t,["size"]);return Number(n)>=20?(0,i.jsx)(p,Object.assign({ref:r,size:n},e)):(0,i.jsx)(k,Object.assign({ref:r,size:n},e))})}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css":((_,f,s)=>{s.d(f,{A:()=>m});var i=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=s.n(i),u=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),g=s.n(u),p=g()(l());p.push([_.id,`.decorator--V2_zH{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  width:100%;
  min-width:0;
}
.decorator--V2_zH[data-size=s]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--V2_zH[data-size=m]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--V2_zH[data-size=l]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}

.header--dOgtG{
  display:flex;
  gap:var(--dimension-050m, 4px);
  box-sizing:border-box;
  color:var(--sys-neutral-text-support, #6d707f);
}
.header--dOgtG[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--dOgtG[data-size=s] .caption--yicGK{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--dOgtG[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--dOgtG[data-size=m] .caption--yicGK{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--dOgtG[data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--dOgtG[data-size=l] .caption--yicGK{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.labelLayout--La9GO{
  gap:var(--space-fields-label-gap, 2px);
  display:inline-flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.label--xonaU{
  display:grid;
  color:var(--sys-neutral-text-support, #6d707f);
}

.required--njeHt{
  color:var(--sys-neutral-text-support, #6d707f);
}

.footer--ptdYJ{
  gap:var(--space-fields-hint-container-gap, 16px);
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
}
.footer--ptdYJ[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.footer--ptdYJ[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--ptdYJ[data-size=l]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--ptdYJ[data-reverse]{
  justify-content:flex-end;
}

.hintLayout--hkpNG{
  gap:var(--space-fields-hint-gap, 2px);
  display:inline-flex;
  align-items:flex-start;
}

.hintIconContainer--LEvTX{
  display:flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.hintIconContainer--LEvTX[data-size=s]{
  width:var(--size-fields-hint-icon-container-s, 16px);
  height:var(--size-fields-hint-icon-container-s, 16px);
}
.hintIconContainer--LEvTX[data-size=m]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}
.hintIconContainer--LEvTX[data-size=l]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}

.hint--_oNNn{
  display:grid;
  flex-grow:1;
  word-break:break-word;
}
.hint--_oNNn[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.hint--_oNNn[data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.hint--_oNNn[data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.hint--_oNNn[data-validation=success]{
  color:var(--sys-green-text-main, #3d6035);
}

.icon--RtHOz{
  flex-shrink:0;
  box-sizing:content-box;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.hintIcon--TvFfz{
  flex-shrink:0;
  box-sizing:content-box;
}
.hintIcon--TvFfz[data-validation=default]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.hintIcon--TvFfz[data-validation=error]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.hintIcon--TvFfz[data-validation=warning]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.hintIcon--TvFfz[data-validation=success]{
  color:var(--sys-green-accent-default, #57b762);
}

.counterLimit--Bo4Tf > span[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.counterLimit--Bo4Tf > span[data-limit-exceeded], .counterLimit--Bo4Tf > span[data-validation=error]{
  color:var(--sys-red-text-light, #e7756a);
}
.counterLimit--Bo4Tf > span[data-validation=warning]{
  color:var(--sys-yellow-text-light, #d3a736);
}
.counterLimit--Bo4Tf > span[data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.counterCurrentValue--HuvFC[data-limit-exceeded][data-validation=default]{
  color:var(--sys-neutral-text-main, #41424e);
}
.counterCurrentValue--HuvFC[data-limit-exceeded][data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.counterCurrentValue--HuvFC[data-limit-exceeded][data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.counterCurrentValue--HuvFC[data-limit-exceeded][data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.labelTooltipTrigger--zjKjx{
  cursor:pointer;
  display:flex;
  align-items:center;
  height:100%;
}`,""]),p.locals={decorator:"decorator--V2_zH",header:"header--dOgtG",caption:"caption--yicGK",labelLayout:"labelLayout--La9GO",label:"label--xonaU",required:"required--njeHt",footer:"footer--ptdYJ",hintLayout:"hintLayout--hkpNG",hintIconContainer:"hintIconContainer--LEvTX",hint:"hint--_oNNn",icon:"icon--RtHOz",hintIcon:"hintIcon--TvFfz",counterLimit:"counterLimit--Bo4Tf",counterCurrentValue:"counterCurrentValue--HuvFC",labelTooltipTrigger:"labelTooltipTrigger--zjKjx"};const m=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.51.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css":((_,f,s)=>{s.d(f,{A:()=>m});var i=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=s.n(i),u=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),g=s.n(u),p=g()(l());p.push([_.id,`.container--anrJL{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-sizing:border-box;
  border-style:solid;
}
.container--anrJL[data-validation=default]{
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--anrJL[data-validation=default]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-decor-hovered, #b3deca);
}
.container--anrJL[data-validation=default]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--anrJL[data-validation=default]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-accent-default, #389f74);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}
.container--anrJL[data-validation=error]{
  background-color:var(--sys-red-background1-level, #fef6f3);
  border-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--anrJL[data-validation=error]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-decor-hovered, #fac1b3);
}
.container--anrJL[data-validation=error]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--anrJL[data-validation=error]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-accent-default, #cb3f3e);
  outline-color:var(--sys-red-decor-activated, #fbab99);
}
.container--anrJL[data-validation=warning]{
  background-color:var(--sys-yellow-background1-level, #fcfbef);
  border-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.container--anrJL[data-validation=warning]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.container--anrJL[data-validation=warning]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--anrJL[data-validation=warning]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-accent-default, #e2b134);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
}
.container--anrJL[data-validation=success]{
  background-color:var(--sys-green-background1-level, #f6fdf3);
  border-color:var(--sys-green-decor-default, #d2ead0);
}
.container--anrJL[data-validation=success]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.container--anrJL[data-validation=success]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--anrJL[data-validation=success]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-accent-default, #57b762);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
}
.container--anrJL[data-size=s]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--anrJL[data-size=s],
.container--anrJL[data-size=s] input,
.container--anrJL[data-size=s] select,
.container--anrJL[data-size=s] textarea,
.container--anrJL[data-size=s] span{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.container--anrJL[data-size=s][data-variant=single-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--anrJL[data-size=s][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-button, 0px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--anrJL[data-size=s][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-button, 0px);
  height:var(--size-fields-s, 32px);
}
.container--anrJL[data-size=s][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-s-top, 7px);
  padding-bottom:var(--space-fields-multi-line-container-s-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-s-left, 7px);
  padding-right:var(--space-fields-multi-line-container-s-right, 2px);
}
.container--anrJL[data-size=m]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--anrJL[data-size=m],
.container--anrJL[data-size=m] input,
.container--anrJL[data-size=m] select,
.container--anrJL[data-size=m] textarea,
.container--anrJL[data-size=m] span{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.container--anrJL[data-size=m][data-variant=single-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--anrJL[data-size=m][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-button, 0px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--anrJL[data-size=m][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-button, 0px);
  height:var(--size-fields-m, 40px);
}
.container--anrJL[data-size=m][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-m-top, 9px);
  padding-bottom:var(--space-fields-multi-line-container-m-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-m-left, 9px);
  padding-right:var(--space-fields-multi-line-container-m-right, 2px);
}
.container--anrJL[data-size=l]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--anrJL[data-size=l],
.container--anrJL[data-size=l] input,
.container--anrJL[data-size=l] select,
.container--anrJL[data-size=l] textarea,
.container--anrJL[data-size=l] span{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.container--anrJL[data-size=l][data-variant=single-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--anrJL[data-size=l][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-button, 0px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--anrJL[data-size=l][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-button, 0px);
  height:var(--size-fields-l, 48px);
}
.container--anrJL[data-size=l][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-l-top, 11px);
  padding-bottom:var(--space-fields-multi-line-container-l-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-l-left, 11px);
  padding-right:var(--space-fields-multi-line-container-l-right, 2px);
}
.container--anrJL[data-selectable],
.container--anrJL[data-selectable] input,
.container--anrJL[data-selectable] select,
.container--anrJL[data-selectable] textarea,
.container--anrJL[data-selectable] span{
  cursor:pointer;
}
.container--anrJL[data-readonly],
.container--anrJL[data-readonly] input,
.container--anrJL[data-readonly] select,
.container--anrJL[data-readonly] textarea,
.container--anrJL[data-readonly] span{
  cursor:default;
}
.container--anrJL[data-readonly], .container--anrJL[data-readonly]:hover{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.container--anrJL[data-readonly]:not([data-disable-focus]):focus-within, .container--anrJL[data-readonly]:not([data-disable-focus])[data-focused]{
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}
.container--anrJL[data-disabled],
.container--anrJL[data-disabled] input,
.container--anrJL[data-disabled] select,
.container--anrJL[data-disabled] textarea,
.container--anrJL[data-disabled] span{
  cursor:not-allowed;
  background-color:var(--sys-neutral-background, #eeeff3);
}
.container--anrJL[data-disabled], .container--anrJL[data-disabled]:focus-within, .container--anrJL[data-disabled][data-focused], .container--anrJL[data-disabled]:hover{
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}

.prefix--J9ga_{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

[data-size=s] .prefix--J9ga_, [data-size=s] .postfix--vsva8{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  align-items:center;
}

[data-size=m] .prefix--J9ga_, [data-size=m] .postfix--vsva8{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  align-items:center;
}

[data-size=l] .prefix--J9ga_, [data-size=l] .postfix--vsva8{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  align-items:center;
}`,""]),p.locals={container:"container--anrJL",prefix:"prefix--J9ga_",postfix:"postfix--vsva8"};const m=p})}]);})();
