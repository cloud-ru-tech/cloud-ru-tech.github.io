"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5864],{"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js":((g,u,e)=>{e.d(u,{m:()=>M});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=e.n(p),_=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),t=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),o=e("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),m=e("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),s=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),c=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),P=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),S=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(j),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),K=e.n(I),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),E=e.n(B),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),H=e.n(R),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),L=e.n(A),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=e.n(U),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),x={};x.styleTagTransform=h(),x.setAttributes=H(),x.insert=E().bind(null,"head"),x.domAPI=K(),x.insertStyleElement=L();var y=k()(w.A,x);const d=w.A&&w.A.locals?w.A.locals:void 0;function W(n){var v;let f,i;switch(n.validationState){case o.sv.Success:f=s.A,i=!0;break;case o.sv.Error:f=c.A,i=!0;break;case o.sv.Warning:f=P.A,i=!0;break;case o.sv.Default:default:f=S.A,i=!1;break}return((v=n.showHintIcon)!==null&&v!==void 0?v:i)?(0,a.jsx)(f,{size:16,"data-validation":n.validationState,className:d.hintIcon}):null}function z({length:n,hint:v,size:f,validationState:i=o.sv.Default,showHintIcon:b}){const T=!v&&n,O=n&&n.max&&n.current>n.max,C=(0,_.useMemo)(()=>W({validationState:i,showHintIcon:b}),[b,i]);return!v&&!n?null:(0,a.jsxs)("span",{className:d.footer,"data-reverse":T||void 0,"data-size":f,children:[v&&(0,a.jsxs)("span",{className:d.hintLayout,children:[C&&(0,a.jsx)("span",{className:d.hintIconContainer,"data-size":f,children:C}),(0,a.jsx)("span",{className:d.hint,"data-validation":i,"data-test-id":"field-decorator__hint",children:v})]}),n&&(0,a.jsxs)("span",{"data-test-id":"field-decorator__counter",className:d.counterLimit,children:[(0,a.jsx)("span",{"data-validation":i,"data-limit-exceeded":O||void 0,className:d.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:n.current}),(0,a.jsxs)("span",{"data-validation":i,"data-limit-exceeded":O||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",n.max]})]})]})}var D=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),F=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),N=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function V({label:n="",labelTooltip:v,caption:f,labelFor:i,size:b,required:T=!1,labelTooltipPlacement:O="top"}){return(0,a.jsxs)("span",{className:d.header,"data-size":b,children:[n&&(0,a.jsxs)("span",{className:d.labelLayout,children:[(0,a.jsx)("label",{className:d.label,htmlFor:i,"data-test-id":"field-decorator__label",children:(0,a.jsx)(N.m,{text:n})}),T&&(0,a.jsx)("span",{className:d.required,"data-test-id":"field-decorator__required-sign",children:"*"}),v&&(0,a.jsx)(F.m,{tip:v,placement:O,"data-test-id":"field-decorator__label-tooltip",triggerClassName:d.labelTooltipTrigger,children:(0,a.jsx)(D.A,{size:16,className:d.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),f&&(0,a.jsx)("span",{className:d.caption,children:f})]})}var Q=function(n,v){var f={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&v.indexOf(i)<0&&(f[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,i=Object.getOwnPropertySymbols(n);b<i.length;b++)v.indexOf(i[b])<0&&Object.prototype.propertyIsEnumerable.call(n,i[b])&&(f[i[b]]=n[i[b]]);return f};const M=(0,_.forwardRef)((n,v)=>{var{children:f,className:i,label:b,labelTooltip:T,required:O,labelFor:C,caption:Z,length:G,hint:$,disabled:q,readonly:ee,showHintIcon:ae,labelTooltipPlacement:te,size:X=r.SK.S,error:J,validationState:se=o.sv.Default}=n,ne=Q(n,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const Y=!q&&!ee,ie=(0,m.t)({validationState:se,error:J});return(0,a.jsxs)("div",Object.assign({className:l()(d.decorator,i)},(0,t.z7)(ne),{"data-size":X,ref:v,children:[b&&(0,a.jsx)(V,{labelTooltipPlacement:te,required:O,label:b,labelTooltip:T,labelFor:C,caption:Z,size:X}),f,(0,a.jsx)(z,{length:Y?G:void 0,hint:J||$,showHintIcon:ae,size:X,validationState:Y?ie:o.sv.Default})]}))})}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js":((g,u,e)=>{e.d(u,{aJ:()=>p,sv:()=>a});const a={Default:"default",Error:"error",Warning:"warning",Success:"success"},p={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},l={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js":((g,u,e)=>{e.d(u,{V:()=>U});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=e.n(p),_=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),r=e("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(t),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=e.n(m),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),P=e.n(c),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),j=e.n(S),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=e.n(k),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),B=e.n(K),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"),R={};R.styleTagTransform=B(),R.setAttributes=j(),R.insert=P().bind(null,"head"),R.domAPI=s(),R.insertStyleElement=I();var H=o()(E.A,R);const A=E.A&&E.A.locals?E.A.locals:void 0;var L=function(h,w){var x={};for(var y in h)Object.prototype.hasOwnProperty.call(h,y)&&w.indexOf(y)<0&&(x[y]=h[y]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,y=Object.getOwnPropertySymbols(h);d<y.length;d++)w.indexOf(y[d])<0&&Object.prototype.propertyIsEnumerable.call(h,y[d])&&(x[y[d]]=h[y[d]]);return x};function U(h){var{className:w,children:x,size:y,validationState:d,variant:W,disabled:z,readonly:D,focused:F,disableFocus:N,selectable:V,style:Q,prefix:M,postfix:n,inputRef:v}=h,f=L(h,["className","children","size","validationState","variant","disabled","readonly","focused","disableFocus","selectable","style","prefix","postfix","inputRef"]);const i=()=>{var b;z||(b=v.current)===null||b===void 0||b.focus()};return(0,a.jsxs)("div",Object.assign({className:l()(w,A.container),style:Q,"data-size":y,"data-validation":z||D?r.sv.Default:d,"data-variant":W,"data-disabled":z||void 0,"data-readonly":D||void 0,"data-focused":F||void 0,"data-disable-focus":N||void 0,"data-selectable":V||void 0,"data-test-id":"field-container-private",onClick:i,role:"textbox",tabIndex:-1},(0,_.z7)(f),{children:[M&&(0,a.jsx)("span",{className:A.prefix,"data-test-id":"field-container-private__prefix-icon",children:M}),x,n&&(0,a.jsx)("span",{className:A.postfix,children:n})]}))}}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css":((g,u,e)=>{e.d(u,{A:()=>K});var a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(a),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_=e.n(l),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),t=e.n(r),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),m=e.n(o),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),c=e.n(s),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),S=e.n(P),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),k={};k.styleTagTransform=S(),k.setAttributes=m(),k.insert=t().bind(null,"head"),k.domAPI=_(),k.insertStyleElement=c();var I=p()(j.A,k);const K=j.A&&j.A.locals?j.A.locals:void 0}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js":((g,u,e)=>{e.d(u,{$:()=>r});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),_=function(t,o){var m={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(m[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(t);c<s.length;c++)o.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(t,s[c])&&(m[s[c]]=t[s[c]]);return m};function r({postfix:t,disabled:o}){return(0,p.useMemo)(()=>({id:"postfix",active:!1,show:!!t,render:m=>{var{key:s}=m,c=_(m,["key"]);return(0,a.jsx)("div",Object.assign({},c,{className:l.A.postfix,"data-test-id":"field-postfix","data-disabled":o||void 0,children:t}),s)}}),[o,t])}}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js":((g,u,e)=>{e.d(u,{M:()=>r});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),_=function(t,o){var m={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(m[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(t);c<s.length;c++)o.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(t,s[c])&&(m[s[c]]=t[s[c]]);return m};function r({prefix:t,disabled:o}){return(0,p.useMemo)(()=>({id:"prefix",active:!1,show:!!t,render:m=>{var{key:s}=m,c=_(m,["key"]);return(0,a.jsx)("div",Object.assign({},c,{"data-test-id":"field-prefix",className:l.A.prefix,"data-disabled":o||void 0,children:t}),s)}}),[o,t])}}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js":((g,u,e)=>{e.d(u,{I:()=>p});var a=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function p({value:l,onChange:_,defaultValue:r}){return(0,a.iC)(l,r,t=>{const o=typeof t=="function"?t(l):t;_==null||_(o)})}}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js":((g,u,e)=>{e.d(u,{t:()=>p});var a=e("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function p({validationState:l,error:_}){return _?a.sv.Error:l!=null?l:a.sv.Default}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css":((g,u,e)=>{e.d(u,{A:()=>t});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(a),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=e.n(l),r=_()(p());r.push([g.id,`.decorator--QWKNV{
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
}`,""]),r.locals={decorator:"decorator--QWKNV",header:"header--rVwlg",caption:"caption--pSSv2",labelLayout:"labelLayout--Y7U95",label:"label--aPU6B",required:"required--RQcy6",footer:"footer--Qblaa",hintLayout:"hintLayout--Kgk2P",hintIconContainer:"hintIconContainer--q0yUU",hint:"hint--NfQyJ",icon:"icon--cJqtQ",hintIcon:"hintIcon--IRuOL",counterLimit:"counterLimit--ZqUdi",counterCurrentValue:"counterCurrentValue--Fp71V",labelTooltipTrigger:"labelTooltipTrigger--oiPTH"};const t=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css":((g,u,e)=>{e.d(u,{A:()=>t});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(a),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=e.n(l),r=_()(p());r.push([g.id,`.container--pRwcK[data-validation=default]{
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--pRwcK[data-validation=default]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-decor-hovered, #b3deca);
}
.container--pRwcK[data-validation=default]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--pRwcK[data-validation=default]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-accent-default, #389f74);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}
.container--pRwcK[data-validation=error]{
  background-color:var(--sys-red-background1-level, #fef6f3);
  border-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--pRwcK[data-validation=error]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-decor-hovered, #fac1b3);
}
.container--pRwcK[data-validation=error]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--pRwcK[data-validation=error]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-accent-default, #cb3f3e);
  outline-color:var(--sys-red-decor-activated, #fbab99);
}
.container--pRwcK[data-validation=warning]{
  background-color:var(--sys-yellow-background1-level, #fcfbef);
  border-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.container--pRwcK[data-validation=warning]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.container--pRwcK[data-validation=warning]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--pRwcK[data-validation=warning]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-accent-default, #e2b134);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
}
.container--pRwcK[data-validation=success]{
  background-color:var(--sys-green-background1-level, #f6fdf3);
  border-color:var(--sys-green-decor-default, #d2ead0);
}
.container--pRwcK[data-validation=success]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.container--pRwcK[data-validation=success]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--pRwcK[data-validation=success]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-accent-default, #57b762);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
}
.container--pRwcK{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-sizing:border-box;
  border-style:solid;
}
.container--pRwcK[data-size=s]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--pRwcK[data-size=s],
.container--pRwcK[data-size=s] input,
.container--pRwcK[data-size=s] select,
.container--pRwcK[data-size=s] textarea,
.container--pRwcK[data-size=s] span{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.container--pRwcK[data-size=s][data-variant=single-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--pRwcK[data-size=s][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-button, 0px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--pRwcK[data-size=s][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-button, 0px);
  height:var(--size-fields-s, 32px);
}
.container--pRwcK[data-size=s][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-s-top, 7px);
  padding-bottom:var(--space-fields-multi-line-container-s-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-s-left, 7px);
  padding-right:var(--space-fields-multi-line-container-s-right, 2px);
}
.container--pRwcK[data-size=m]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--pRwcK[data-size=m],
.container--pRwcK[data-size=m] input,
.container--pRwcK[data-size=m] select,
.container--pRwcK[data-size=m] textarea,
.container--pRwcK[data-size=m] span{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.container--pRwcK[data-size=m][data-variant=single-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--pRwcK[data-size=m][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-button, 0px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--pRwcK[data-size=m][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-button, 0px);
  height:var(--size-fields-m, 40px);
}
.container--pRwcK[data-size=m][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-m-top, 9px);
  padding-bottom:var(--space-fields-multi-line-container-m-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-m-left, 9px);
  padding-right:var(--space-fields-multi-line-container-m-right, 2px);
}
.container--pRwcK[data-size=l]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--pRwcK[data-size=l],
.container--pRwcK[data-size=l] input,
.container--pRwcK[data-size=l] select,
.container--pRwcK[data-size=l] textarea,
.container--pRwcK[data-size=l] span{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.container--pRwcK[data-size=l][data-variant=single-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--pRwcK[data-size=l][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-button, 0px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--pRwcK[data-size=l][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-button, 0px);
  height:var(--size-fields-l, 48px);
}
.container--pRwcK[data-size=l][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-l-top, 11px);
  padding-bottom:var(--space-fields-multi-line-container-l-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-l-left, 11px);
  padding-right:var(--space-fields-multi-line-container-l-right, 2px);
}
.container--pRwcK[data-selectable],
.container--pRwcK[data-selectable] input,
.container--pRwcK[data-selectable] select,
.container--pRwcK[data-selectable] textarea,
.container--pRwcK[data-selectable] span{
  cursor:pointer;
}
.container--pRwcK[data-readonly],
.container--pRwcK[data-readonly] input,
.container--pRwcK[data-readonly] select,
.container--pRwcK[data-readonly] textarea,
.container--pRwcK[data-readonly] span{
  cursor:default;
}
.container--pRwcK[data-readonly], .container--pRwcK[data-readonly]:hover{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.container--pRwcK[data-readonly]:not([data-disable-focus]):focus-within, .container--pRwcK[data-readonly]:not([data-disable-focus])[data-focused]{
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}
.container--pRwcK[data-disabled],
.container--pRwcK[data-disabled] input,
.container--pRwcK[data-disabled] select,
.container--pRwcK[data-disabled] textarea,
.container--pRwcK[data-disabled] span{
  cursor:not-allowed;
  background-color:var(--sys-neutral-background, #eeeff3);
}
.container--pRwcK[data-disabled], .container--pRwcK[data-disabled]:focus-within, .container--pRwcK[data-disabled][data-focused], .container--pRwcK[data-disabled]:hover{
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}

.prefix--jYGk4{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

[data-size=s] .prefix--jYGk4, [data-size=s] .postfix--XHK8S{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  align-items:center;
}

[data-size=m] .prefix--jYGk4, [data-size=m] .postfix--XHK8S{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  align-items:center;
}

[data-size=l] .prefix--jYGk4, [data-size=l] .postfix--XHK8S{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  align-items:center;
}`,""]),r.locals={container:"container--pRwcK",prefix:"prefix--jYGk4",postfix:"postfix--XHK8S"};const t=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css":((g,u,e)=>{e.d(u,{A:()=>t});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(a),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=e.n(l),r=_()(p());r.push([g.id,`.prefix--C0uC0{
  color:var(--sys-neutral-text-support, #6d707f);
}
.prefix--C0uC0[data-disabled]{
  opacity:var(--opacity-a056, 0.56);
}

.postfix--ORi_y{
  color:var(--sys-neutral-text-support, #6d707f);
}
.postfix--ORi_y[data-disabled]{
  opacity:var(--opacity-a056, 0.56);
}`,""]),r.locals={prefix:"prefix--C0uC0",postfix:"postfix--ORi_y"};const t=r})}]);})();
