"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[6477],{"./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js":((j,v,e)=>{e.d(v,{m:()=>J});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(u),b=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.3_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),s=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),c=e("./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),g=e("./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),i=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),f=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),P=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),n=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(m),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),d=e.n(a),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),L=e.n(A),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),X=e.n(w),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(I),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),O=e.n(W),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),S={};S.styleTagTransform=O(),S.setAttributes=X(),S.insert=L().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=B();var C=o()(E.A,S);const y=E.A&&E.A.locals?E.A.locals:void 0;function K(l){var x;let h,r;switch(l.validationState){case c.sv.Success:h=i.A,r=!0;break;case c.sv.Error:h=f.A,r=!0;break;case c.sv.Warning:h=P.A,r=!0;break;case c.sv.Default:default:h=n.A,r=!1;break}return((x=l.showHintIcon)!==null&&x!==void 0?x:r)?(0,t.jsx)(h,{size:16,"data-validation":l.validationState,className:y.hintIcon}):null}function T({length:l,hint:x,size:h,validationState:r=c.sv.Default,showHintIcon:k}){const D=!x&&l,z=l&&l.max&&l.current>l.max,R=(0,b.useMemo)(()=>K({validationState:r,showHintIcon:k}),[k,r]);return!x&&!l?null:(0,t.jsxs)("span",{className:y.footer,"data-reverse":D||void 0,"data-size":h,children:[x&&(0,t.jsxs)("span",{className:y.hintLayout,children:[R&&(0,t.jsx)("span",{className:y.hintIconContainer,"data-size":h,children:R}),(0,t.jsx)("span",{className:y.hint,"data-validation":r,"data-test-id":"field-decorator__hint",children:x})]}),l&&(0,t.jsxs)("span",{"data-test-id":"field-decorator__counter",className:y.counterLimit,children:[(0,t.jsx)("span",{"data-validation":r,"data-limit-exceeded":z||void 0,className:y.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:l.current}),(0,t.jsxs)("span",{"data-validation":r,"data-limit-exceeded":z||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",l.max]})]})]})}var M=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),F=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),U=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function N({label:l="",labelTooltip:x,caption:h,labelFor:r,size:k,required:D=!1,labelTooltipPlacement:z="top"}){return(0,t.jsxs)("span",{className:y.header,"data-size":k,children:[l&&(0,t.jsxs)("span",{className:y.labelLayout,children:[(0,t.jsx)("label",{className:y.label,htmlFor:r,"data-test-id":"field-decorator__label",children:(0,t.jsx)(U.m,{text:l})}),D&&(0,t.jsx)("span",{className:y.required,"data-test-id":"field-decorator__required-sign",children:"*"}),x&&(0,t.jsx)(F.m,{tip:x,placement:z,"data-test-id":"field-decorator__label-tooltip",triggerClassName:y.labelTooltipTrigger,children:(0,t.jsx)(M.A,{size:16,className:y.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),h&&(0,t.jsx)("span",{className:y.caption,children:h})]})}var V=function(l,x){var h={};for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&x.indexOf(r)<0&&(h[r]=l[r]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var k=0,r=Object.getOwnPropertySymbols(l);k<r.length;k++)x.indexOf(r[k])<0&&Object.prototype.propertyIsEnumerable.call(l,r[k])&&(h[r[k]]=l[r[k]]);return h};const J=(0,b.forwardRef)((l,x)=>{var{children:h,className:r,label:k,labelTooltip:D,required:z,labelFor:R,caption:Y,length:Z,hint:$,disabled:q,readonly:ee,showHintIcon:ae,labelTooltipPlacement:te,size:Q=p.SK.S,error:G,validationState:se=c.sv.Default}=l,ne=V(l,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const H=!q&&!ee,oe=(0,g.t)({validationState:se,error:G});return(0,t.jsxs)("div",Object.assign({className:_()(y.decorator,r)},(0,s.z7)(ne),{"data-size":Q,ref:x,children:[k&&(0,t.jsx)(N,{labelTooltipPlacement:te,required:z,label:k,labelTooltip:D,labelFor:R,caption:Y,size:Q}),h,(0,t.jsx)(T,{length:H?Z:void 0,hint:G||$,showHintIcon:ae,size:Q,validationState:H?oe:c.sv.Default})]}))})}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js":((j,v,e)=>{e.d(v,{aJ:()=>u,sv:()=>t});const t={Default:"default",Error:"error",Warning:"warning",Success:"success"},u={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},_={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js":((j,v,e)=>{e.d(v,{V:()=>W});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(u),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),p=e("./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(s),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=e.n(g),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),P=e.n(f),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),m=e.n(n),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),a=e.n(o),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),A=e.n(d),L=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"),w={};w.styleTagTransform=A(),w.setAttributes=m(),w.insert=P().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=a();var X=c()(L.A,w);const I=L.A&&L.A.locals?L.A.locals:void 0;var B=function(O,E){var S={};for(var C in O)Object.prototype.hasOwnProperty.call(O,C)&&E.indexOf(C)<0&&(S[C]=O[C]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,C=Object.getOwnPropertySymbols(O);y<C.length;y++)E.indexOf(C[y])<0&&Object.prototype.propertyIsEnumerable.call(O,C[y])&&(S[C[y]]=O[C[y]]);return S};function W(O){var{className:E,children:S,size:C,validationState:y,variant:K,disabled:T,readonly:M,focused:F,disableFocus:U,selectable:N,style:V,prefix:J,postfix:l,inputRef:x}=O,h=B(O,["className","children","size","validationState","variant","disabled","readonly","focused","disableFocus","selectable","style","prefix","postfix","inputRef"]);const r=()=>{var k;T||(k=x.current)===null||k===void 0||k.focus()};return(0,t.jsxs)("div",Object.assign({className:_()(E,I.container),style:V,"data-size":C,"data-validation":T||M?p.sv.Default:y,"data-variant":K,"data-disabled":T||void 0,"data-readonly":M||void 0,"data-focused":F||void 0,"data-disable-focus":U||void 0,"data-selectable":N||void 0,"data-test-id":"field-container-private",onClick:r,role:"textbox",tabIndex:-1},(0,b.z7)(h),{children:[J&&(0,t.jsx)("span",{className:I.prefix,"data-test-id":"field-container-private__prefix-icon",children:J}),S,l&&(0,t.jsx)("span",{className:I.postfix,children:l})]}))}}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css":((j,v,e)=>{e.d(v,{A:()=>d});var t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(t),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),b=e.n(_),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),s=e.n(p),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=e.n(c),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=e.n(i),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),n=e.n(P),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),o={};o.styleTagTransform=n(),o.setAttributes=g(),o.insert=s().bind(null,"head"),o.domAPI=b(),o.insertStyleElement=f();var a=u()(m.A,o);const d=m.A&&m.A.locals?m.A.locals:void 0}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js":((j,v,e)=>{e.d(v,{$:()=>p});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),b=function(s,c){var g={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&c.indexOf(i)<0&&(g[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,i=Object.getOwnPropertySymbols(s);f<i.length;f++)c.indexOf(i[f])<0&&Object.prototype.propertyIsEnumerable.call(s,i[f])&&(g[i[f]]=s[i[f]]);return g};function p({postfix:s,disabled:c}){return(0,u.useMemo)(()=>({id:"postfix",active:!1,show:!!s,render:g=>{var{key:i}=g,f=b(g,["key"]);return(0,t.jsx)("div",Object.assign({},f,{className:_.A.postfix,"data-test-id":"field-postfix","data-disabled":c||void 0,children:s}),i)}}),[c,s])}}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js":((j,v,e)=>{e.d(v,{M:()=>p});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),b=function(s,c){var g={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&c.indexOf(i)<0&&(g[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,i=Object.getOwnPropertySymbols(s);f<i.length;f++)c.indexOf(i[f])<0&&Object.prototype.propertyIsEnumerable.call(s,i[f])&&(g[i[f]]=s[i[f]]);return g};function p({prefix:s,disabled:c}){return(0,u.useMemo)(()=>({id:"prefix",active:!1,show:!!s,render:g=>{var{key:i}=g,f=b(g,["key"]);return(0,t.jsx)("div",Object.assign({},f,{"data-test-id":"field-prefix",className:_.A.prefix,"data-disabled":c||void 0,children:s}),i)}}),[c,s])}}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js":((j,v,e)=>{e.d(v,{I:()=>u});var t=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function u({value:_,onChange:b,defaultValue:p}){return(0,t.iC)(_,p,s=>{const c=typeof s=="function"?s(_):s;b==null||b(c)})}}),"./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js":((j,v,e)=>{e.d(v,{t:()=>u});var t=e("./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function u({validationState:_,error:b}){return b?t.sv.Error:_!=null?_:t.sv.Default}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js":((j,v,e)=>{e.d(v,{A:()=>P});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(n,m){var o={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&m.indexOf(a)<0&&(o[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(n);d<a.length;d++)m.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(n,a[d])&&(o[a[d]]=n[a[d]]);return o};const p=u.forwardRef((n,m)=>{var{size:o=24}=n,a=_(n,["size"]);a.width=void 0,a.height=void 0;const d="-question-s";return typeof o=="number"&&(a.style||(a.style={}),a.style.width=o+"px",a.style.height=o+"px"),(0,t.jsx)("svg",Object.assign({ref:m,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+d},a,{children:(0,t.jsx)("use",{href:"#snack-uikit-"+d.substring(1)})}))});var s=function(n,m){var o={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&m.indexOf(a)<0&&(o[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(n);d<a.length;d++)m.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(n,a[d])&&(o[a[d]]=n[a[d]]);return o};const g=u.forwardRef((n,m)=>{var{size:o=24}=n,a=s(n,["size"]);a.width=void 0,a.height=void 0;const d="-question-xs";return typeof o=="number"&&(a.style||(a.style={}),a.style.width=o+"px",a.style.height=o+"px"),(0,t.jsx)("svg",Object.assign({ref:m,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+d},a,{children:(0,t.jsx)("use",{href:"#snack-uikit-"+d.substring(1)})}))});var i=function(n,m){var o={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&m.indexOf(a)<0&&(o[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(n);d<a.length;d++)m.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(n,a[d])&&(o[a[d]]=n[a[d]]);return o};const P=(0,u.forwardRef)((n,m)=>{var{size:o=24}=n,a=i(n,["size"]);return Number(o)>=20?(0,t.jsx)(p,Object.assign({ref:m,size:o},a)):(0,t.jsx)(g,Object.assign({ref:m,size:o},a))})}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css":((j,v,e)=>{e.d(v,{A:()=>s});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(t),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),p=b()(u());p.push([j.id,`.decorator--dZ5Cf{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  width:100%;
  min-width:0;
}
.decorator--dZ5Cf[data-size=s]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--dZ5Cf[data-size=m]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}
.decorator--dZ5Cf[data-size=l]{
  gap:var(--space-fields-decorator-single-gap, 4px);
}

.header--GIkc8{
  display:flex;
  gap:var(--dimension-050m, 4px);
  box-sizing:border-box;
  color:var(--sys-neutral-text-support, #6d707f);
}
.header--GIkc8[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--GIkc8[data-size=s] .caption--lQxse{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--GIkc8[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--GIkc8[data-size=m] .caption--lQxse{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.header--GIkc8[data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--GIkc8[data-size=l] .caption--lQxse{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  margin-left:auto;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.labelLayout--ff8gw{
  gap:var(--space-fields-label-gap, 2px);
  display:inline-flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.label--z19Tg{
  display:grid;
  color:var(--sys-neutral-text-support, #6d707f);
}

.required--WFbcK{
  color:var(--sys-neutral-text-support, #6d707f);
}

.footer--uSljV{
  gap:var(--space-fields-hint-container-gap, 16px);
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
}
.footer--uSljV[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.footer--uSljV[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--uSljV[data-size=l]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.footer--uSljV[data-reverse]{
  justify-content:flex-end;
}

.hintLayout--V8vHJ{
  gap:var(--space-fields-hint-gap, 2px);
  display:inline-flex;
  align-items:flex-start;
}

.hintIconContainer--s96uO{
  display:flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.hintIconContainer--s96uO[data-size=s]{
  width:var(--size-fields-hint-icon-container-s, 16px);
  height:var(--size-fields-hint-icon-container-s, 16px);
}
.hintIconContainer--s96uO[data-size=m]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}
.hintIconContainer--s96uO[data-size=l]{
  width:var(--size-fields-hint-icon-container-m, 20px);
  height:var(--size-fields-hint-icon-container-m, 20px);
}

.hint--Dl8f7{
  display:grid;
  flex-grow:1;
  word-break:break-word;
}
.hint--Dl8f7[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.hint--Dl8f7[data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.hint--Dl8f7[data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.hint--Dl8f7[data-validation=success]{
  color:var(--sys-green-text-main, #3d6035);
}

.icon--pX21T{
  flex-shrink:0;
  box-sizing:content-box;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.hintIcon--YSib1{
  flex-shrink:0;
  box-sizing:content-box;
}
.hintIcon--YSib1[data-validation=default]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.hintIcon--YSib1[data-validation=error]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.hintIcon--YSib1[data-validation=warning]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.hintIcon--YSib1[data-validation=success]{
  color:var(--sys-green-accent-default, #57b762);
}

.counterLimit--yRmSW > span[data-validation=default]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.counterLimit--yRmSW > span[data-limit-exceeded], .counterLimit--yRmSW > span[data-validation=error]{
  color:var(--sys-red-text-light, #e7756a);
}
.counterLimit--yRmSW > span[data-validation=warning]{
  color:var(--sys-yellow-text-light, #d3a736);
}
.counterLimit--yRmSW > span[data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.counterCurrentValue--Mq6om[data-limit-exceeded][data-validation=default]{
  color:var(--sys-neutral-text-main, #41424e);
}
.counterCurrentValue--Mq6om[data-limit-exceeded][data-validation=error]{
  color:var(--sys-red-text-main, #7a2d2d);
}
.counterCurrentValue--Mq6om[data-limit-exceeded][data-validation=warning]{
  color:var(--sys-yellow-text-main, #815f19);
}
.counterCurrentValue--Mq6om[data-limit-exceeded][data-validation=success]{
  color:var(--sys-green-text-light, #69b56f);
}

.labelTooltipTrigger--h7PdM{
  cursor:pointer;
  display:flex;
  align-items:center;
  height:100%;
}`,""]),p.locals={decorator:"decorator--dZ5Cf",header:"header--GIkc8",caption:"caption--lQxse",labelLayout:"labelLayout--ff8gw",label:"label--z19Tg",required:"required--WFbcK",footer:"footer--uSljV",hintLayout:"hintLayout--V8vHJ",hintIconContainer:"hintIconContainer--s96uO",hint:"hint--Dl8f7",icon:"icon--pX21T",hintIcon:"hintIcon--YSib1",counterLimit:"counterLimit--yRmSW",counterCurrentValue:"counterCurrentValue--Mq6om",labelTooltipTrigger:"labelTooltipTrigger--h7PdM"};const s=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css":((j,v,e)=>{e.d(v,{A:()=>s});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(t),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),p=b()(u());p.push([j.id,`.container--CJL3y{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-sizing:border-box;
  border-style:solid;
}
.container--CJL3y[data-validation=default]{
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--CJL3y[data-validation=default]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-decor-hovered, #b3deca);
}
.container--CJL3y[data-validation=default]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--CJL3y[data-validation=default]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-accent-default, #389f74);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}
.container--CJL3y[data-validation=error]{
  background-color:var(--sys-red-background1-level, #fef6f3);
  border-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--CJL3y[data-validation=error]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-decor-hovered, #fac1b3);
}
.container--CJL3y[data-validation=error]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--CJL3y[data-validation=error]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-accent-default, #cb3f3e);
  outline-color:var(--sys-red-decor-activated, #fbab99);
}
.container--CJL3y[data-validation=warning]{
  background-color:var(--sys-yellow-background1-level, #fcfbef);
  border-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.container--CJL3y[data-validation=warning]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.container--CJL3y[data-validation=warning]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--CJL3y[data-validation=warning]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-accent-default, #e2b134);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
}
.container--CJL3y[data-validation=success]{
  background-color:var(--sys-green-background1-level, #f6fdf3);
  border-color:var(--sys-green-decor-default, #d2ead0);
}
.container--CJL3y[data-validation=success]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.container--CJL3y[data-validation=success]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--CJL3y[data-validation=success]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-accent-default, #57b762);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
}
.container--CJL3y[data-size=s]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--CJL3y[data-size=s],
.container--CJL3y[data-size=s] input,
.container--CJL3y[data-size=s] select,
.container--CJL3y[data-size=s] textarea,
.container--CJL3y[data-size=s] span{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.container--CJL3y[data-size=s][data-variant=single-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--CJL3y[data-size=s][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-button, 0px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--CJL3y[data-size=s][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-button, 0px);
  height:var(--size-fields-s, 32px);
}
.container--CJL3y[data-size=s][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-s-top, 7px);
  padding-bottom:var(--space-fields-multi-line-container-s-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-s-left, 7px);
  padding-right:var(--space-fields-multi-line-container-s-right, 2px);
}
.container--CJL3y[data-size=m]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--CJL3y[data-size=m],
.container--CJL3y[data-size=m] input,
.container--CJL3y[data-size=m] select,
.container--CJL3y[data-size=m] textarea,
.container--CJL3y[data-size=m] span{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.container--CJL3y[data-size=m][data-variant=single-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--CJL3y[data-size=m][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-button, 0px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--CJL3y[data-size=m][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-button, 0px);
  height:var(--size-fields-m, 40px);
}
.container--CJL3y[data-size=m][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-m-top, 9px);
  padding-bottom:var(--space-fields-multi-line-container-m-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-m-left, 9px);
  padding-right:var(--space-fields-multi-line-container-m-right, 2px);
}
.container--CJL3y[data-size=l]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--CJL3y[data-size=l],
.container--CJL3y[data-size=l] input,
.container--CJL3y[data-size=l] select,
.container--CJL3y[data-size=l] textarea,
.container--CJL3y[data-size=l] span{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.container--CJL3y[data-size=l][data-variant=single-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--CJL3y[data-size=l][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-button, 0px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--CJL3y[data-size=l][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-button, 0px);
  height:var(--size-fields-l, 48px);
}
.container--CJL3y[data-size=l][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-l-top, 11px);
  padding-bottom:var(--space-fields-multi-line-container-l-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-l-left, 11px);
  padding-right:var(--space-fields-multi-line-container-l-right, 2px);
}
.container--CJL3y[data-selectable],
.container--CJL3y[data-selectable] input,
.container--CJL3y[data-selectable] select,
.container--CJL3y[data-selectable] textarea,
.container--CJL3y[data-selectable] span{
  cursor:pointer;
}
.container--CJL3y[data-readonly],
.container--CJL3y[data-readonly] input,
.container--CJL3y[data-readonly] select,
.container--CJL3y[data-readonly] textarea,
.container--CJL3y[data-readonly] span{
  cursor:default;
}
.container--CJL3y[data-readonly], .container--CJL3y[data-readonly]:hover{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.container--CJL3y[data-readonly]:not([data-disable-focus]):focus-within, .container--CJL3y[data-readonly]:not([data-disable-focus])[data-focused]{
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}
.container--CJL3y[data-disabled],
.container--CJL3y[data-disabled] input,
.container--CJL3y[data-disabled] select,
.container--CJL3y[data-disabled] textarea,
.container--CJL3y[data-disabled] span{
  cursor:not-allowed;
  background-color:var(--sys-neutral-background, #eeeff3);
}
.container--CJL3y[data-disabled], .container--CJL3y[data-disabled]:focus-within, .container--CJL3y[data-disabled][data-focused], .container--CJL3y[data-disabled]:hover{
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}

.prefix--tgt5a{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

[data-size=s] .prefix--tgt5a, [data-size=s] .postfix--l9z_q{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  align-items:center;
}

[data-size=m] .prefix--tgt5a, [data-size=m] .postfix--l9z_q{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  align-items:center;
}

[data-size=l] .prefix--tgt5a, [data-size=l] .postfix--l9z_q{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  align-items:center;
}`,""]),p.locals={container:"container--CJL3y",prefix:"prefix--tgt5a",postfix:"postfix--l9z_q"};const s=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.51.9_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css":((j,v,e)=>{e.d(v,{A:()=>s});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(t),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),p=b()(u());p.push([j.id,`.prefix--trR6K{
  color:var(--sys-neutral-text-support, #6d707f);
}
.prefix--trR6K[data-disabled]{
  opacity:var(--opacity-a056, 0.56);
}

.postfix--uofxm{
  color:var(--sys-neutral-text-support, #6d707f);
}
.postfix--uofxm[data-disabled]{
  opacity:var(--opacity-a056, 0.56);
}`,""]),p.locals={prefix:"prefix--trR6K",postfix:"postfix--uofxm"};const s=p})}]);})();
