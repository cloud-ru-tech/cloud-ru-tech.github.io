(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9011],{"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js":((y,c,e)=>{"use strict";e.d(c,{m:()=>me});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(s),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),d=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),x=e("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),j=e("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),T=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),W=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),R=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(n),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),g=e.n(U),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),A=e.n(r),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),h=e.n(D),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Y=e.n(L),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),$=e.n(oe),ie=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css"),E={};E.styleTagTransform=$(),E.setAttributes=h(),E.insert=A().bind(null,"head"),E.domAPI=g(),E.insertStyleElement=Y();var ye=f()(ie.A,E);const v=ie.A&&ie.A.locals?ie.A.locals:void 0;function de(k){var G;let N,w;switch(k.validationState){case x.sv.Success:N=T.A,w=!0;break;case x.sv.Error:N=W.A,w=!0;break;case x.sv.Warning:N=R.A,w=!0;break;case x.sv.Default:default:N=b.A,w=!1;break}return((G=k.showHintIcon)!==null&&G!==void 0?G:w)?(0,t.jsx)(N,{size:16,"data-validation":k.validationState,className:v.hintIcon}):null}function Z({length:k,hint:G,size:N,validationState:w=x.sv.Default,showHintIcon:Q}){const Le=!G&&k,je=k&&k.max&&k.current>k.max,xe=(0,u.useMemo)(()=>de({validationState:w,showHintIcon:Q}),[Q,w]);return!G&&!k?null:(0,t.jsxs)("span",{className:v.footer,"data-reverse":Le||void 0,"data-size":N,children:[G&&(0,t.jsxs)("span",{className:v.hintLayout,children:[xe&&(0,t.jsx)("span",{className:v.hintIconContainer,"data-size":N,children:xe}),(0,t.jsx)("span",{className:v.hint,"data-validation":w,"data-test-id":"field-decorator__hint",children:G})]}),k&&(0,t.jsxs)("span",{"data-test-id":"field-decorator__counter",className:v.counterLimit,children:[(0,t.jsx)("span",{"data-validation":w,"data-limit-exceeded":je||void 0,className:v.counterCurrentValue,"data-test-id":"field-decorator__counter-current-value",children:k.current}),(0,t.jsxs)("span",{"data-validation":w,"data-limit-exceeded":je||void 0,"data-test-id":"field-decorator__counter-limit-value",children:["/",k.max]})]})]})}var X=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),se=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),V=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");function K({label:k="",labelTooltip:G,caption:N,labelFor:w,size:Q,required:Le=!1,labelTooltipPlacement:je="top"}){return(0,t.jsxs)("span",{className:v.header,"data-size":Q,children:[k&&(0,t.jsxs)("span",{className:v.labelLayout,children:[(0,t.jsx)("label",{className:v.label,htmlFor:w,"data-test-id":"field-decorator__label",children:(0,t.jsx)(V.m,{text:k})}),Le&&(0,t.jsx)("span",{className:v.required,"data-test-id":"field-decorator__required-sign",children:"*"}),G&&(0,t.jsx)(se.m,{tip:G,placement:je,"data-test-id":"field-decorator__label-tooltip",triggerClassName:v.labelTooltipTrigger,children:(0,t.jsx)(X.A,{size:16,className:v.icon,"data-test-id":"field-decorator__label-tooltip-trigger"})})]}),N&&(0,t.jsx)("span",{className:v.caption,children:N})]})}var q=function(k,G){var N={};for(var w in k)Object.prototype.hasOwnProperty.call(k,w)&&G.indexOf(w)<0&&(N[w]=k[w]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Q=0,w=Object.getOwnPropertySymbols(k);Q<w.length;Q++)G.indexOf(w[Q])<0&&Object.prototype.propertyIsEnumerable.call(k,w[Q])&&(N[w[Q]]=k[w[Q]]);return N};const me=(0,u.forwardRef)((k,G)=>{var{children:N,className:w,label:Q,labelTooltip:Le,required:je,labelFor:xe,caption:pe,length:ve,hint:we,disabled:Je,readonly:Ye,showHintIcon:$e,labelTooltipPlacement:Ne,size:Ze=i.SK.S,error:Oe,validationState:ct=x.sv.Default}=k,Fe=q(k,["children","className","label","labelTooltip","required","labelFor","caption","length","hint","disabled","readonly","showHintIcon","labelTooltipPlacement","size","error","validationState"]);const ke=!Je&&!Ye,ze=(0,j.t)({validationState:ct,error:Oe});return(0,t.jsxs)("div",Object.assign({className:p()(v.decorator,w)},(0,d.z7)(Fe),{"data-size":Ze,ref:G,children:[Q&&(0,t.jsx)(K,{labelTooltipPlacement:Ne,required:je,label:Q,labelTooltip:Le,labelFor:xe,caption:pe,size:Ze}),N,(0,t.jsx)(Z,{length:ke?ve:void 0,hint:Oe||we,showHintIcon:$e,size:Ze,validationState:ke?ze:x.sv.Default})]}))})}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js":((y,c,e)=>{"use strict";e.d(c,{aJ:()=>s,sv:()=>t});const t={Default:"default",Error:"error",Warning:"warning",Success:"success"},s={SingleLine:"single-line-container",SingleLineButtonBefore:"single-line-container-button-before",SingleLineButtonAfter:"single-line-container-button-after",MultiLine:"multi-line-container"},p={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js":((y,c,e)=>{"use strict";e.d(c,{t:()=>s});var t=e("./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js");function s({validationState:p,error:u}){return u?t.sv.Error:p!=null?p:t.sv.Default}}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js":((y,c,e)=>{"use strict";e.d(c,{nG:()=>Xe,cu:()=>at,We:()=>dt});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),u=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),i=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),d=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),x=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),j=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),T=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js");const W={s:"xs",m:"s",l:"m"};var R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(R),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),f=e.n(n),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),g=e.n(U),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=e.n(r),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=e.n(D),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Y=e.n(L),oe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css"),$={};$.styleTagTransform=Y(),$.setAttributes=A(),$.insert=g().bind(null,"head"),$.domAPI=f(),$.insertStyleElement=h();var ie=b()(oe.A,$);const E=oe.A&&oe.A.locals?oe.A.locals:void 0;function ye({label:o,truncate:m,divider:l,mode:a="secondary",selectButton:_}){const{size:P="s"}=(0,j.hg)(),{t:O}=(0,d.Ym)("List"),z=(0,t.useMemo)(()=>{if(!_)return null;const{onClick:C,checked:I,itemRef:_e,label:Ie}=_;return(0,s.jsx)("span",{className:E.selectButton,"data-size":P,"data-weight":l&&a||void 0,children:(0,s.jsx)(u.b,{size:W[P],tabIndex:0,onClick:S=>{C==null||C(S),S.preventDefault(),S.stopPropagation()},onFocus:T.d,ref:_e,label:Ie!=null?Ie:O(I?"groupSelectButton.reset":"groupSelectButton.select")})})},[l,a,_,P,O]);return o?(0,s.jsxs)("div",{className:E.separatorWithLabel,"data-size":P,children:[(0,s.jsx)("span",{className:E.label,"data-mode":a,children:(0,s.jsx)(x.m,{variant:m==null?void 0:m.variant,text:o,maxLines:1})}),(0,s.jsxs)("div",{style:{flex:1},children:[z,l&&(0,s.jsx)(i.c,{weight:a==="primary"?"regular":"light",className:E.divider})]})]}):l?(0,s.jsx)("div",{className:E.separatorWithoutLabel,"data-size":P,children:(0,s.jsx)(i.c,{weight:"regular"})}):null}var v=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"),de=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),Z=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),X=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),se=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),V=e.n(se),K=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),q=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css"),me={};me.styleTagTransform=Y(),me.setAttributes=A(),me.insert=g().bind(null,"head"),me.domAPI=f(),me.insertStyleElement=h();var k=b()(q.A,me);const G=q.A&&q.A.locals?q.A.locals:void 0;var N=function(o,m){var l={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&m.indexOf(a)<0&&(l[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,a=Object.getOwnPropertySymbols(o);_<a.length;_++)m.indexOf(a[_])<0&&Object.prototype.propertyIsEnumerable.call(o,a[_])&&(l[a[_]]=o[a[_]]);return l};function w(o){var{children:m,expanded:l,className:a,header:_}=o,P=N(o,["children","expanded","className","header"]);return(0,s.jsxs)("div",Object.assign({className:V()(G.accordion,a),role:"menuitem","aria-haspopup":!0,"aria-expanded":l},(0,K.z7)(P),{children:[_,(0,s.jsx)("div",{className:G.contentWrapper,"aria-hidden":!l,children:(0,s.jsx)("div",{className:G.content,"data-content":!0,children:l&&m})})]}))}var Q=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),Le=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/Checkbox.js"),je=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/Switch.js"),xe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css"),pe={};pe.styleTagTransform=Y(),pe.setAttributes=A(),pe.insert=g().bind(null,"head"),pe.domAPI=f(),pe.insertStyleElement=h();var ve=b()(xe.A,pe);const we=xe.A&&xe.A.locals?xe.A.locals:void 0;var Je=function(o,m){var l={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&m.indexOf(a)<0&&(l[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,a=Object.getOwnPropertySymbols(o);_<a.length;_++)m.indexOf(a[_])<0&&Object.prototype.propertyIsEnumerable.call(o,a[_])&&(l[a[_]]=o[a[_]]);return l};const Ye={option:1,description:2,variant:"end"};function $e(o){var{truncate:m,caption:l,description:a,option:_,className:P,disabled:O}=o,z=Je(o,["truncate","caption","description","option","className","disabled"]);const{size:C="s"}=(0,j.hg)(),I=(0,t.useMemo)(()=>Object.assign(Object.assign({},Ye),m),[m]);return(0,s.jsxs)("div",Object.assign({className:V()(we.content,P)},(0,K.z7)(z),{"data-size":C!=null?C:"s","data-disabled":O||void 0,children:[(0,s.jsxs)("div",{className:we.headline,children:[(0,s.jsx)("div",{className:we.label,children:(0,s.jsx)(x.m,{variant:I.variant,text:String(_),maxLines:I.option,"data-test-id":"list__base-item-option"})}),l&&(0,s.jsx)("span",{className:we.caption,children:l})]}),a&&(0,s.jsx)("div",{className:we.description,children:(0,s.jsx)(x.m,{text:a,maxLines:I.description,"data-test-id":"list__base-item-description"})})]}))}var Ne=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),Ze=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),Oe=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js");const ct={s:"s",m:"s",l:"m"};var Fe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css"),ke={};ke.styleTagTransform=Y(),ke.setAttributes=A(),ke.insert=g().bind(null,"head"),ke.domAPI=f(),ke.insertStyleElement=h();var ze=b()(Fe.A,ke);const He=Fe.A&&Fe.A.locals?Fe.A.locals:void 0;var qe=function(o,m){var l={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&m.indexOf(a)<0&&(l[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,a=Object.getOwnPropertySymbols(o);_<a.length;_++)m.indexOf(a[_])<0&&Object.prototype.propertyIsEnumerable.call(o,a[_])&&(l[a[_]]=o[a[_]]);return l};function lt(o){var m,{beforeContent:l,afterContent:a,content:_,onClick:P,onMouseDown:O,id:z,expandIcon:C,disabled:I,open:_e,itemRef:Ie,switch:S,showSwitchIcon:ue,onKeyDown:ge,onFocus:Se,indeterminate:Ce,checked:Ae,onSelect:De,onOpenNestedList:Be,isParentNode:H,className:Ee,inactive:Re,itemWrapRender:Te}=o,Ve=qe(o,["beforeContent","afterContent","content","onClick","onMouseDown","id","expandIcon","disabled","open","itemRef","switch","showSwitchIcon","onKeyDown","onFocus","indeterminate","checked","onSelect","onOpenNestedList","isParentNode","className","inactive","itemWrapRender"]);const ae=!Re,{size:Pe="s",marker:Ue,contentRender:et,firstItemId:he,focusFlattenItems:tt}=(0,j.hg)(),{level:Ge=0}=(0,Q.wG)(),{closeDroplist:Qe,closeDroplistOnItemClick:Me}=(0,Ne.x)(),{value:B,onChange:be,mode:te,isSelectionSingle:st,isSelectionMultiple:nt}=(0,de.VG)(),Ke=st?Ae!=null?Ae:B===z:Ae!=null?Ae:B==null?void 0:B.includes(z!=null?z:""),ot=()=>{be==null||be(z)},ft=ne=>{I||O==null||O(ne)},ut=ne=>{Se==null||Se(ne),ne.stopPropagation()},J=()=>{H&&De?De():ot()},le=ne=>{I||(P==null||P(ne),ae&&(H||ot()),!nt&&Me&&Qe())},it=ne=>{if(ge==null||ge(ne),ne.key==="ArrowRight"&&Be){Be(ne),ne.preventDefault(),ne.stopPropagation();return}(ne.code==="Space"||ne.key==="Enter"||ne.key===" ")&&(nt&&H&&De&&De(),!H&&ot(),!H&&(le==null||le(ne)),ne.stopPropagation(),ne.preventDefault())},rt=ne=>{H&&ne.stopPropagation()},gt=(0,K.z7)(Ve),ht=(0,s.jsx)("div",{className:V()(Ze.A.itemWrapper,He.innerWrapper,Ee),"data-inactive":Re||void 0,"data-disabled":I||void 0,"data-variant":te||void 0,"data-checked":H&&Ke||!H&&Ke&&!S||void 0,children:(0,s.jsxs)("li",{"data-type":"outside",role:"menuitem","data-test-id":gt["data-test-id"]||"list__base-item_"+z,ref:Ie,className:V()(Ze.A.listItem,He.droplistItem),"data-size":Pe,onClick:le,onMouseDown:ft,tabIndex:he&&z===tt[he].originalId?0:-1,"data-non-pointer":Re&&!P,"data-variant":te||void 0,"data-open":_e||void 0,onKeyDown:it,onFocus:ut,style:{"--level":Ge},"data-level-one":Ge===1||void 0,"data-level-more-one":Ge>1||void 0,"data-checked":H&&(Ce||Ke)||Ke&&!S||void 0,children:[!S&&st&&Ue&&!H&&ae&&(0,s.jsx)("div",{className:He.markerContainer,"data-test-id":"list__base-item-marker"}),!S&&nt&&ae&&(0,s.jsx)("div",{className:He.checkbox,children:(0,s.jsx)(Le.S,{size:ct[Pe!=null?Pe:"s"],disabled:I,tabIndex:-1,onChange:H?J:void 0,checked:Ke,"data-test-id":"list__base-item-checkbox",onClick:rt,indeterminate:Ce})}),l&&(0,s.jsx)("div",{className:He.beforeContent,children:l}),_&&(0,Oe.J0)(_)?(m=et==null?void 0:et({id:z,content:_,disabled:I}))!==null&&m!==void 0?m:(0,s.jsx)($e,Object.assign({disabled:I},_)):(0,s.jsxs)("div",{className:He.content,children:[" ",_," "]}),a,S&&ae&&(0,s.jsx)(je.d,{disabled:I,checked:Ke,"data-test-id":"list__base-item-switch",showIcon:ue}),!S&&C&&(0,s.jsx)("span",{className:He.expandableIcon,children:C})]})});return Te?Te(ht):ht}var mt=function(o,m){var l={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&m.indexOf(a)<0&&(l[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,a=Object.getOwnPropertySymbols(o);_<a.length;_++)m.indexOf(a[_])<0&&Object.prototype.propertyIsEnumerable.call(o,a[_])&&(l[a[_]]=o[a[_]]);return l};function M(o){var{id:m,disabled:l,allChildIds:a,items:_}=o,P=mt(o,["id","disabled","allChildIds","items"]);const{level:O=0}=(0,Q.wG)(),{openCollapseItems:z=[],toggleOpenCollapseItem:C}=(0,Q.om)(),{value:I,isSelectionSingle:_e,isSelectionMultiple:Ie}=(0,de.VG)(),{indeterminate:S,handleOnSelect:ue,checked:ge}=at({items:_,id:m,disabled:l,allChildIds:a}),Se=!!z.includes(m!=null?m:""),Ce=!!(S&&!Se&&_e&&I&&a.includes(I)||Ie&&ge),Ae=(0,t.useCallback)(()=>{C==null||C(m!=null?m:"")},[m,C]),De=dt(_),Be=H=>{var Ee;C==null||C(m!=null?m:""),(Ee=P.onClick)===null||Ee===void 0||Ee.call(P,H)};return(0,s.jsx)(w,{header:(0,s.jsx)(lt,Object.assign({},P,{id:m,disabled:l,expandIcon:Se?(0,s.jsx)(Z.A,{}):(0,s.jsx)(X.A,{}),onClick:Be,isParentNode:!0,onOpenNestedList:Ae,checked:Ce,indeterminate:S,onSelect:l?void 0:ue})),expanded:Se,"data-test-id":`list__accordion-item-${m}`,children:(0,s.jsx)(Q.x5.Provider,{value:{level:O+1},children:De})})}function re({label:o,truncate:m,divider:l,items:a,mode:_,id:P,itemRef:O,allChildIds:z,selectButtonLabel:C}){const{indeterminate:I,checked:_e,handleOnSelect:Ie}=at({items:a,id:P,disabled:!1,allChildIds:z}),S=dt(a);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ye,{label:o,truncate:m,divider:l,mode:_,selectButton:{indeterminate:I,checked:_e,itemRef:O,onClick:Ie,label:C}}),S]})}var ce=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),F=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js"),ee=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),fe=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js");const We=["right","right-start","right-end","left","left-start","left-end","bottom","top"];var pt=function(o,m){var l={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&m.indexOf(a)<0&&(l[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,a=Object.getOwnPropertySymbols(o);_<a.length;_++)m.indexOf(a[_])<0&&Object.prototype.propertyIsEnumerable.call(o,a[_])&&(l[a[_]]=o[a[_]]);return l};function vt(o){var{items:m,placement:l="right-start",id:a,scroll:_,scrollRef:P,disabled:O,onSublistOpenChanged:z,allChildIds:C,loading:I=!1,focusId:_e=a,untouchableScrollbars:Ie=!1}=o,S=pt(o,["items","placement","id","scroll","scrollRef","disabled","onSublistOpenChanged","allChildIds","loading","focusId","untouchableScrollbars"]);const{flattenItems:ue,focusFlattenItems:ge,virtualized:Se}=(0,j.hg)(),{value:Ce,isSelectionSingle:Ae,isSelectionMultiple:De}=(0,de.VG)(),{openCollapseItems:Be=[]}=(0,Q.om)(),H=ue[a],{ids:Ee,expandedIds:Re}=(0,t.useMemo)(()=>{const{ids:te,expandedIds:st}=(0,Oe.e)({focusCloseChildIds:m,focusFlattenItems:ge,openCollapseItems:Be,isSelectionMultiple:De});return{ids:te,expandedIds:st.concat([a])}},[ge,a,De,m,Be]),{handleListKeyDownFactory:Te,activeItemId:Ve,forceUpdateActiveItemId:ae}=(0,ee.L)(),[Pe,Ue]=(0,t.useState)(),et=(0,t.useCallback)(te=>{if(Te(Ee,Re)(te),te.key==="ArrowLeft"){ae==null||ae(_e),Ue(!1),te.stopPropagation();return}},[Te,Ee,Re,ae,_e]),{indeterminate:he,checked:tt,handleOnSelect:Ge}=at({items:(0,Oe.j2)(H)?H.items:[],id:a,disabled:O,allChildIds:C}),Qe=(0,t.useCallback)(()=>(ae==null||ae(p.$.dropFocus),Ue(!1),!0),[ae]),Me=(0,t.useMemo)(()=>!!(!O&&Ve&&ge[_e].allChildIds.includes(Ve)),[Ve,O,ge,_e]),B=!!(he&&!Pe&&Ae&&Ce&&C.includes(Ce)||De&&tt);(0,t.useEffect)(()=>{Ue(te=>te&&Me)},[a,Me]);const be=(0,t.useRef)(null);return(0,s.jsx)(ce.m,{outsideClick:Qe,fallbackPlacements:We,content:(0,s.jsx)(fe.Q,{onKeyDown:et,items:m,nested:!0,scroll:_,virtualized:Se,tabIndex:0,ref:be,onFocus:te=>{te.stopPropagation(),ae==null||ae(Ee[0])},scrollRef:P,limitedScrollHeight:!0,untouchableScrollbars:Ie,loading:I}),trigger:"hover",open:Me||Pe,onOpenChange:te=>{Ue(te),z==null||z(te,a)},placement:l,widthStrategy:"auto",children:(0,s.jsx)(lt,Object.assign({},S,{disabled:O,open:Pe,expandIcon:(0,s.jsx)(F.A,{}),id:a,isParentNode:!0,indeterminate:he,checked:B,onOpenNestedList:()=>{Ue(!0),setTimeout(()=>{var te;(te=be.current)===null||te===void 0||te.focus()},0)},onSelect:Ge}))})}function _t({focusCloseChildIds:o,focusFlattenItems:m,flattenItems:l,isSelectionMultiple:a}){return o?o.flatMap(_=>{const{itemRef:P,key:O,originalId:z,items:C}=m[_],I=l[z];if((0,Oe.X8)(I)||!a&&(0,Oe.$k)(I)){const _e=_t({focusCloseChildIds:C,focusFlattenItems:m,flattenItems:l,isSelectionMultiple:a});return[(0,s.jsx)(ye,{label:I.label,truncate:I.truncate,divider:I.divider,mode:I.mode},O+"_separator"),..._e]}return(0,Oe.$k)(I)?(0,t.createElement)(re,Object.assign({},I,{items:C,itemRef:P,key:O})):(0,Oe.qz)(I)?(0,t.createElement)(M,Object.assign({},I,{items:C,itemRef:P,key:O})):(0,Oe.j2)(I)?(0,t.createElement)(vt,Object.assign({},I,{focusId:_,items:C,itemRef:P,key:O})):(0,t.createElement)(lt,Object.assign({},I,{itemRef:P,key:O}))}):[null]}function dt(o){const{focusFlattenItems:m,flattenItems:l}=(0,j.hg)(),{isSelectionMultiple:a}=(0,de.VG)();return(0,t.useMemo)(()=>_t({flattenItems:l,focusFlattenItems:m,focusCloseChildIds:o,isSelectionMultiple:a}),[l,o,m,a])}function Xe({footerActiveElementsRefs:o}){return(0,t.useMemo)(()=>{var m;return{searchItem:{itemRef:(0,t.createRef)(),id:p.$.search,parentId:p.$.default,items:[],allChildIds:[]},footerItems:(m=o==null?void 0:o.map((l,a)=>({id:(0,v.mr)(a),itemRef:l,parentId:p.$.default,items:[],allChildIds:[]})))!==null&&m!==void 0?m:[]}},[o])}function at({id:o,allChildIds:m}){const{value:l,setValue:a,isSelectionMultiple:_}=(0,de.VG)(),{flattenItems:P}=(0,j.hg)(),O=(0,t.useMemo)(()=>m.filter(S=>{const ue=P[S];return ue&&!("type"in ue)}),[m,P]),z=(0,t.useMemo)(()=>O.filter(S=>{const ue=P[S];return ue&&!("type"in ue)&&!ue.disabled}),[O,P]),C=_?l&&!!l.length&&O.every(S=>l==null?void 0:l.includes(S)):void 0,I=_?l&&!!l.length&&z.every(S=>l==null?void 0:l.includes(S)):void 0,_e=_?!C&&O.some(S=>l==null?void 0:l.includes(S)):O.includes(l!=null?l:"");return{checked:C,indeterminate:_e,handleOnSelect:()=>{if(C||I){a==null||a(S=>(S!=null?S:[]).filter(ue=>ue!==o&&!z.includes(ue)));return}a==null||a(S=>Array.from(new Set([...S!=null?S:[],...z])))}}}}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>g});var t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(t),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=e.n(p),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),d=e.n(i),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),j=e.n(x),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),W=e.n(T),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(R),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),f={};f.styleTagTransform=b(),f.setAttributes=j(),f.insert=d().bind(null,"head"),f.domAPI=u(),f.insertStyleElement=W();var U=s()(n.A,f);const g=n.A&&n.A.locals?n.A.locals:void 0}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js":((y,c,e)=>{"use strict";e.d(c,{$k:()=>T,J0:()=>W,X8:()=>j,Xy:()=>R,e:()=>g,gZ:()=>b,j2:()=>x,jQ:()=>f,lg:()=>U,pN:()=>n,qz:()=>d});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),p=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"),u=function(r,A){var D={};for(var h in r)Object.prototype.hasOwnProperty.call(r,h)&&A.indexOf(h)<0&&(D[h]=r[h]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var L=0,h=Object.getOwnPropertySymbols(r);L<h.length;L++)A.indexOf(h[L])<0&&Object.prototype.propertyIsEnumerable.call(r,h[L])&&(D[h[L]]=r[h[L]]);return D};function i(r){return r&&!("items"in r)}function d(r){return r&&"items"in r&&r.type==="collapse"}function x(r){return r&&"items"in r&&r.type==="next-list"}function j(r){return r&&"items"in r&&r.type==="group"}function T(r){return r&&"items"in r&&r.type==="group-select"}function W(r){return typeof r=="object"&&r.option!==void 0}const R=i,b=d,n=x,f=j;function U({items:r,prefix:A,parentId:D}){const h={},L={};function Y({item:v,idx:de,prefix:Z,parentId:X=s.$.default}){var se,V;const K=Z!==void 0?(0,p.yz)(Z,de):String(de),q=(se=j(v)?void 0:v.id)!==null&&se!==void 0?se:K;if(i(v))return h[q]=Object.assign(Object.assign({},v),{items:[],allChildIds:[],id:q}),L[K]={key:K,originalId:q,id:K,disabled:v.disabled,parentId:X,items:[],allChildIds:[],itemRef:v.itemRef||(0,t.createRef)()},{id:q,children:[q],autoId:K,focusChildren:[K]};let me=[],k=[];const G=[],N=[],{items:w}=v,Q=u(v,["items"]),Le=j(v)?X!=null?X:s.$.default:K,je=w.filter(ve=>!ve.hidden);for(let ve=0;ve<je.length;ve++){const{id:we,children:Je,autoId:Ye,focusChildren:$e}=Y({item:je[ve],idx:ve,prefix:q,parentId:Le});N.push(Ye),G.push(we),me=me.concat(Je),k=k.concat($e)}const xe=[...new Set(me.concat(G))],pe=[...new Set(k.concat(N))];return h[q]=Object.assign(Object.assign({},Q),{id:q,items:[],allChildIds:xe}),L[K]={key:K,originalId:q,id:K,parentId:X,items:N,allChildIds:pe,disabled:(v.type==="collapse"||v.type==="next-list")&&v.disabled,type:v.type,itemRef:j(v)?void 0:(V=v.itemRef)!==null&&V!==void 0?V:(0,t.createRef)()},{id:q,children:xe,autoId:K,focusChildren:pe}}const oe=[],$=[];let ie=[];const E=r.filter(v=>!v.hidden);for(let v=0;v<E.length;v++){const{id:de,children:Z,autoId:X}=Y({item:E[v],idx:v,prefix:A,parentId:D});$.push(X),oe.push(de),ie.push(de),ie=ie.concat(Z)}const ye=[...new Set(ie)];return{focusCloseChildIds:$,allChildIds:ye,flattenItems:h,focusFlattenItems:L}}function g({focusFlattenItems:r,focusCloseChildIds:A,openCollapseItems:D,isSelectionMultiple:h}){const L=[],Y=[];function oe($){$.forEach(ie=>{const E=r[ie];if(E.type==="group"){oe(E.items);return}if(!E.disabled){if(E.type==="group-select"){h&&L.push(E.id),oe(E.items);return}L.push(E.id),E.type&&(Y.push(ie),D.includes(E.originalId)&&oe(E.items))}})}return oe(A),{ids:L,expandedIds:Y}}}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js":((y,c,e)=>{"use strict";e.d(c,{Q:()=>mt});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/@tanstack+react-virtual@3.11.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@tanstack/react-virtual/dist/esm/index.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(p),i=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.10_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),j=e("./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),T=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),W=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js"),R=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js");function n({noDataState:M,noResultsState:re,errorDataState:ce}){const{t:F}=(0,b.Ym)("List");return(0,d.useMemo)(()=>{const ee=Object.assign({icon:{icon:W.A,appearance:"neutral",decor:!0},description:F("noData.description")},M),fe=Object.assign({description:F("noResults.description")},re),We=Object.assign({icon:{icon:R.A,appearance:"neutral",decor:!0},description:F("errorData.description")},ce);return{noDataState:ee,noResultsState:fe,errorDataState:We}},[ce,M,re,F])}var f=e("./node_modules/.pnpm/@snack-uikit+info-block@0.6.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/index.js"),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(U),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(r),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=e.n(D),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Y=e.n(L),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),$=e.n(oe),ie=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(ie),ye=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css"),v={};v.styleTagTransform=E(),v.setAttributes=Y(),v.insert=h().bind(null,"head"),v.domAPI=A(),v.insertStyleElement=$();var de=g()(ye.A,v);const Z=ye.A&&ye.A.locals?ye.A.locals:void 0;function X({dataError:M,dataFiltered:re,hasNoItems:ce,emptyStates:F,loading:ee,size:fe}){return ee?null:M?(0,t.jsx)("div",{className:Z.listEmptyStateWrapper,children:(0,t.jsx)(f.O,Object.assign({},F.errorDataState,{size:fe,align:"vertical"}))}):re&&ce?(0,t.jsx)("div",{className:Z.listEmptyStateWrapper,children:(0,t.jsx)(f.O,Object.assign({},F.noResultsState,{size:fe,align:"vertical","data-test-id":"list__no-results"}))}):!re&&ce?(0,t.jsx)("div",{className:Z.listEmptyStateWrapper,children:(0,t.jsx)(f.O,Object.assign({},F.noDataState,{size:fe,align:"vertical","data-test-id":"list__no-data"}))}):null}var se=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),V=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),K=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),q=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),me=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css"),k={};k.styleTagTransform=E(),k.setAttributes=Y(),k.insert=h().bind(null,"head"),k.domAPI=A(),k.insertStyleElement=$();var G=g()(me.A,k);const N=me.A&&me.A.locals?me.A.locals:void 0;function w({children:M}){const{size:re="s"}=(0,q.hg)();return M?(0,t.jsxs)("div",{className:u()(N.pinTopItem),"data-size":re,"data-test-id":"list__pin-top-group-item",children:[(0,t.jsx)("div",{children:M}),(0,t.jsx)(K.c,{weight:"regular"})]}):null}function Q({children:M}){const{size:re="s"}=(0,q.hg)();return M?(0,t.jsxs)("div",{className:u()(N.pinBottomItem),"data-size":re,"data-test-id":"list__pin-bottom-group-item",children:[(0,t.jsx)(K.c,{weight:"regular"}),(0,t.jsx)("div",{children:M})]}):null}var Le=e("./node_modules/.pnpm/@snack-uikit+search-private@0.4.36_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/SearchPrivate.js"),je=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),xe=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),pe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css"),ve={};ve.styleTagTransform=E(),ve.setAttributes=Y(),ve.insert=h().bind(null,"head"),ve.domAPI=A(),ve.insertStyleElement=$();var we=g()(pe.A,ve);const Je=pe.A&&pe.A.locals?pe.A.locals:void 0;function Ye({search:M,itemRef:re}){const{size:ce="s",firstItemId:F}=(0,q.hg)(),ee=fe=>{var We;["ArrowDown","ArrowUp"].includes(fe.key)&&fe.preventDefault(),(We=M==null?void 0:M.onKeyDown)===null||We===void 0||We.call(M,fe)};return M?(0,t.jsx)("div",{className:u()(xe.A.listItem,Je.searchItem),"data-size":ce,"data-test-id":"list__search-item",children:(0,t.jsx)(Le.s,Object.assign({size:ce,tabIndex:je.$.search===F?0:-1,onKeyDown:ee,onFocus:se.d},M,{ref:re}))}):null}var $e=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),Ne=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css");const Fe={m:40,s:32,l:48};var ke=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css"),ze={};ze.styleTagTransform=E(),ze.setAttributes=Y(),ze.insert=h().bind(null,"head"),ze.domAPI=A(),ze.insertStyleElement=$();var He=g()(ke.A,ze);const qe=ke.A&&ke.A.locals?ke.A.locals:void 0;var lt=function(M,re){var ce={};for(var F in M)Object.prototype.hasOwnProperty.call(M,F)&&re.indexOf(F)<0&&(ce[F]=M[F]);if(M!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ee=0,F=Object.getOwnPropertySymbols(M);ee<F.length;ee++)re.indexOf(F[ee])<0&&Object.prototype.propertyIsEnumerable.call(M,F[ee])&&(ce[F[ee]]=M[F[ee]]);return ce};const mt=(0,d.forwardRef)((M,re)=>{var ce,{items:F,pinTop:ee,pinBottom:fe,onKeyDown:We,onBlur:pt,onFocus:vt,tabIndex:_t,active:dt,scroll:Xe,nested:at,search:o,searchItem:m,scrollRef:l,scrollContainerRef:a,onScroll:_,footer:P,loading:O,limitedScrollHeight:z,untouchableScrollbars:C,className:I,noDataState:_e,noResultsState:Ie,errorDataState:S,dataError:ue,dataFiltered:ge,scrollToSelectedItem:Se=!1,virtualized:Ce=!1,scrollContainerClassName:Ae,barHideStrategy:De="never"}=M,Be=lt(M,["items","pinTop","pinBottom","onKeyDown","onBlur","onFocus","tabIndex","active","scroll","nested","search","searchItem","scrollRef","scrollContainerRef","onScroll","footer","loading","limitedScrollHeight","untouchableScrollbars","className","noDataState","noResultsState","errorDataState","dataError","dataFiltered","scrollToSelectedItem","virtualized","scrollContainerClassName","barHideStrategy"]);const{size:H="s",flattenItems:Ee,focusFlattenItems:Re}=(0,q.hg)(),{value:Te,isSelectionSingle:Ve}=(0,$e.VG)(),ae=(0,d.useRef)(null),Pe=(0,V.We)(F),Ue=(0,V.We)(ee),et=(0,V.We)(fe),[he,tt]=(0,d.useState)({virtualizer:null,browser:null,measured:!1}),Ge=n({noDataState:_e,noResultsState:Ie,errorDataState:S}),Qe=F.length===0,{selectedItemIndex:Me,selectedItem:B}=(0,d.useMemo)(()=>{const J={selectedItemIndex:-1,selectedItem:void 0};if(!Se||!Te)return J;const le=Ve?Ee[Te]:Ee[Te[0]];if(!(le!=null&&le.id))return J;const it=Object.values(Re),rt=it.findIndex(gt=>gt.originalId===le.id);return rt<0?J:{selectedItemIndex:rt,selectedItem:it[rt]}},[Ee,Re,Ve,Se,Te]),be=(0,s.Te)({count:Pe.length,getScrollElement:()=>Xe?ae.current:null,estimateSize:()=>Fe[H],enabled:Ce,overscan:5}),te=be.getVirtualItems();(0,d.useEffect)(()=>{he.measured||(be.measure(),tt(J=>Object.assign(Object.assign({},J),{measured:!0})))},[he.measured,be]);const st=Xe&&Se&&Ce;(0,d.useEffect)(()=>{var J;if(st){if(!he.measured||Me<0||!B||he.virtualizer===B.originalId||B!=null&&B.itemRef&&(!((J=ae.current)===null||J===void 0)&&J.contains(B==null?void 0:B.itemRef.current)))return;be.scrollToIndex(Me,{align:"center"}),tt(le=>Object.assign(Object.assign({},le),{virtualizer:B.originalId}))}},[st,he,B,Me,be]);const nt=!!(!((ce=B==null?void 0:B.itemRef)===null||ce===void 0)&&ce.current);(0,d.useEffect)(()=>{var J,le;B&&he.virtualizer!==null&&nt&&he.virtualizer!==he.browser&&((le=(J=B.itemRef)===null||J===void 0?void 0:J.current)===null||le===void 0||le.scrollIntoView({block:"center"}),tt(it=>Object.assign(Object.assign({},it),{browser:B.originalId})))},[he,B,nt,Me]);const Ke=(0,d.useMemo)(()=>O&&(0,t.jsx)("div",{role:"spinbutton",tabIndex:-1,className:qe.loader,"data-size":H,"data-no-items":Qe||void 0,"data-test-id":"list__loader",children:(0,t.jsx)(x.y,{size:H==="l"?"s":"xs"})}),[Qe,O,H]),ot=(0,d.useMemo)(()=>(0,t.jsxs)(t.Fragment,{children:[Ce?(0,t.jsx)("div",{className:qe.virtualizedContainer,style:{height:be.getTotalSize()},tabIndex:-1,children:te.map(J=>(0,t.jsx)("div",{"data-index":J.index,ref:be.measureElement,tabIndex:-1,className:qe.virtualizedPositionBox,style:{transform:`translateY(${J.start}px)`},children:Pe[J.index]},J.key))}):Pe,Ke,(0,t.jsx)(X,{loading:O,dataError:ue,emptyStates:Ge,hasNoItems:Qe,dataFiltered:ge!=null?ge:!!(o!=null&&o.value),size:H})]}),[ue,ge,Ge,Qe,Pe,O,Ke,o==null?void 0:o.value,H,te,Ce,be]),ft=(0,d.useCallback)(()=>{var J,le;B&&((le=(J=B==null?void 0:B.itemRef)===null||J===void 0?void 0:J.current)===null||le===void 0||le.scrollIntoView({block:"center"}))},[B]),ut=(0,t.jsxs)("ul",Object.assign({className:u()(Ne.A.listContainer,I),ref:re,onKeyDown:We,tabIndex:_t,onFocus:vt,onBlur:pt,"data-active":dt||void 0,role:"menu"},(0,T.z7)(Be),{children:[(Number(ee==null?void 0:ee.length)>0||o)&&(0,t.jsxs)(w,{children:[o&&(0,t.jsx)(Ye,Object.assign({search:o},m)),Number(ee==null?void 0:ee.length)>0&&Ue]}),Xe?(0,t.jsxs)(j.O,{className:u()({[Ne.A.scrollContainerS]:Xe&&z&&H==="s",[Ne.A.scrollContainerM]:Xe&&z&&H==="m",[Ne.A.scrollContainerL]:Xe&&z&&H==="l"},Ae),barHideStrategy:De,size:"s",ref:(0,i.A)(ae,a),untouchableScrollbars:C,onScroll:_,onInitialized:ft,children:[ot,(0,t.jsx)("div",{className:qe.scrollStub,ref:l})]}):(0,t.jsx)(t.Fragment,{children:ot}),Number(fe==null?void 0:fe.length)>0&&(0,t.jsx)(Q,{children:et}),P&&(0,t.jsx)("div",{className:qe.footer,onFocus:se.d,children:P})]}));return at?(0,t.jsx)("li",{style:{listStyleType:"none"},role:"menuitem",children:ut}):ut})}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js":((y,c,e)=>{"use strict";e.d(c,{bN:()=>u,om:()=>i,wG:()=>p,x5:()=>s});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=(0,t.createContext)({}),p=()=>(0,t.useContext)(s),u=(0,t.createContext)({}),i=()=>(0,t.useContext)(u)}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js":((y,c,e)=>{"use strict";e.d(c,{L:()=>p,m:()=>s});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=(0,t.createContext)({handleListKeyDownFactory:()=>()=>{}}),p=()=>(0,t.useContext)(s)}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js":((y,c,e)=>{"use strict";e.d(c,{Tr:()=>j,hg:()=>d});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),u=function(T,W){var R={};for(var b in T)Object.prototype.hasOwnProperty.call(T,b)&&W.indexOf(b)<0&&(R[b]=T[b]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,b=Object.getOwnPropertySymbols(T);n<b.length;n++)W.indexOf(b[n])<0&&Object.prototype.propertyIsEnumerable.call(T,b[n])&&(R[b[n]]=T[b[n]]);return R};const i=(0,s.createContext)({flattenItems:{},focusFlattenItems:{},firstItemId:p.$.default});function d(){return(0,s.useContext)(i)}function x({size:T,marker:W,flattenItems:R,focusFlattenItems:b,contentRender:n,firstItemId:f,virtualized:U}){return{size:T,marker:W,contentRender:n,flattenItems:R,focusFlattenItems:b,firstItemId:f,virtualized:U}}function j(T){var{children:W}=T,R=u(T,["children"]);return(0,t.jsx)(i.Provider,{value:x(R),children:W})}}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js":((y,c,e)=>{"use strict";e.d(c,{K:()=>s,x:()=>p});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=(0,t.createContext)({closeDroplist:()=>{},closeDroplistOnItemClick:!1}),p=()=>(0,t.useContext)(s)}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js":((y,c,e)=>{"use strict";e.d(c,{VG:()=>b,WM:()=>R});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),u=function(n,f){var U={};for(var g in n)Object.prototype.hasOwnProperty.call(n,g)&&f.indexOf(g)<0&&(U[g]=n[g]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,g=Object.getOwnPropertySymbols(n);r<g.length;r++)f.indexOf(g[r])<0&&Object.prototype.propertyIsEnumerable.call(n,g[r])&&(U[g[r]]=n[g[r]]);return U};const i=(0,s.createContext)({value:void 0,onChange:void 0,mode:void 0});function d(n){return"mode"in n&&n.mode==="multiple"}function x(n){return"mode"in n&&n.mode==="single"}function j({children:n}){return(0,t.jsx)(i.Provider,{value:{mode:"none"},children:n})}function T({value:n,defaultValue:f,onChange:U,children:g}){const[r,A]=(0,p.I)({value:n,defaultValue:f,onChange:U}),D=(0,s.useCallback)(h=>A(L=>{if(h!==L)return h}),[A]);return(0,t.jsx)(i.Provider,{value:{value:r,onChange:D,mode:"single",isSelectionSingle:!0,isSelectionMultiple:!1,setValue:A},children:g})}function W({value:n,defaultValue:f,onChange:U,children:g}){const[r,A]=(0,p.I)({value:n,defaultValue:f,onChange:U}),D=(0,s.useCallback)(h=>{A(L=>{if(Array.isArray(L))return L.includes(h)?L.filter(Y=>Y!==h):L.concat(h);if(L===void 0)return Array.isArray(h)?h:[h]})},[A]);return(0,t.jsx)(i.Provider,{value:{value:r,onChange:D,mode:"multiple",isSelectionSingle:!1,isSelectionMultiple:!0,setValue:A},children:g})}function R(n){var{children:f}=n,U=u(n,["children"]);return x(U)?(0,t.jsx)(T,Object.assign({},U,{children:f})):d(U)?(0,t.jsx)(W,Object.assign({},U,{children:f})):(0,t.jsx)(j,{children:f})}function b(){return(0,s.useContext)(i)}}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js":((y,c,e)=>{"use strict";e.d(c,{d:()=>p});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js");function p({mainRef:u,btnRef:i,focusFlattenItems:d,keyboardNavigationRef:x,hasListInFocusChain:j,firstItemId:T}){const W=j?void 0:T,[R,b]=(0,t.useState)(()=>W),n=(0,t.useRef)(W),f=(0,t.useCallback)(()=>{b(W),n.current=W},[W]),U=(0,t.useCallback)((r,A)=>D=>{var h,L,Y,oe,$,ie,E,ye,v,de;switch(D.key){case"ArrowDown":{if(n.current!==void 0){const Z=r.findIndex(K=>K===n.current),X=Math.min(Z+1,r.length-1),se=r[X],V=d[se];n.current=se,b(se),V.type!=="group"&&((L=(h=V.itemRef)===null||h===void 0?void 0:h.current)===null||L===void 0||L.focus())}else{const Z=r[0],X=d[Z];n.current=Z,b(Z),X.type!=="group"&&((oe=(Y=X.itemRef)===null||Y===void 0?void 0:Y.current)===null||oe===void 0||oe.focus())}D.stopPropagation(),D.preventDefault();return}case"ArrowUp":{if(r[0]===n.current)j&&d[r[0]].parentId===s.$.default&&(n.current=void 0,b(void 0),($=u==null?void 0:u.current)===null||$===void 0||$.focus());else if(n.current!==void 0){const Z=r.findIndex(K=>K===n.current),X=Math.max(Z-1,0),se=r[X],V=d[se];n.current=se,b(se),V.type!=="group"&&((E=(ie=V.itemRef)===null||ie===void 0?void 0:ie.current)===null||E===void 0||E.focus())}D.stopPropagation(),D.preventDefault();return}case"ArrowRight":{if(n.current!==void 0&&A.includes(n.current)){const X=d[n.current].items[0],se=d[X];n.current=X,b(X),setTimeout(()=>{var V,K;return(K=(V=se.itemRef)===null||V===void 0?void 0:V.current)===null||K===void 0?void 0:K.focus()},0),D.stopPropagation(),D.preventDefault()}return}case"Tab":{n.current!==void 0?j?(D.preventDefault(),D.stopPropagation(),n.current=void 0,b(void 0),(ye=u==null?void 0:u.current)===null||ye===void 0||ye.focus()):f():i&&!D.shiftKey?(v=i==null?void 0:i.current)===null||v===void 0||v.focus():(de=u==null?void 0:u.current)===null||de===void 0||de.focus();return}default:return}},[d,j,u,f,i]),g=(0,t.useCallback)(r=>{var A,D;b(r),n.current=r;const h=d[r];(D=(A=h==null?void 0:h.itemRef)===null||A===void 0?void 0:A.current)===null||D===void 0||D.focus()},[d]);return(0,t.useImperativeHandle)(x,()=>({focusItem:g}),[g]),{resetActiveItemId:f,activeItemId:R,forceUpdateActiveItemId:g,handleListKeyDownFactory:U}}}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>g});var t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(t),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=e.n(p),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),d=e.n(i),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),j=e.n(x),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),W=e.n(T),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(R),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),f={};f.styleTagTransform=b(),f.setAttributes=j(),f.insert=d().bind(null,"head"),f.domAPI=u(),f.insertStyleElement=W();var U=s()(n.A,f);const g=n.A&&n.A.locals?n.A.locals:void 0}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js":((y,c,e)=>{"use strict";e.d(c,{$:()=>t});const t={default:"~main",pinTop:"~pinTop",pinBottom:"~pinBottom",footer:"~footer",search:"~search",dropFocus:"~dropFocus"}}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js":((y,c,e)=>{"use strict";e.d(c,{cE:()=>u,mr:()=>s,yz:()=>p});var t=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js");const s=i=>`${t.$.footer}__${i}`,p=(i,d)=>[i,d].join("-"),u=i=>p(t.$.default,i)}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js":((y,c,e)=>{"use strict";e.d(c,{d:()=>t});const t=s=>{s.stopPropagation()}}),"./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js":((y,c,e)=>{"use strict";var t=e("./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"),s={"text/plain":"Text","text/html":"Url",default:"Text"},p="Copy to clipboard: #{key}, Enter";function u(d){var x=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return d.replace(/#{\s*key\s*}/g,x)}function i(d,x){var j,T,W,R,b,n,f=!1;x||(x={}),j=x.debug||!1;try{W=t(),R=document.createRange(),b=document.getSelection(),n=document.createElement("span"),n.textContent=d,n.ariaHidden="true",n.style.all="unset",n.style.position="fixed",n.style.top=0,n.style.clip="rect(0, 0, 0, 0)",n.style.whiteSpace="pre",n.style.webkitUserSelect="text",n.style.MozUserSelect="text",n.style.msUserSelect="text",n.style.userSelect="text",n.addEventListener("copy",function(g){if(g.stopPropagation(),x.format)if(g.preventDefault(),typeof g.clipboardData=="undefined"){j&&console.warn("unable to use e.clipboardData"),j&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=s[x.format]||s.default;window.clipboardData.setData(r,d)}else g.clipboardData.clearData(),g.clipboardData.setData(x.format,d);x.onCopy&&(g.preventDefault(),x.onCopy(g.clipboardData))}),document.body.appendChild(n),R.selectNodeContents(n),b.addRange(R);var U=document.execCommand("copy");if(!U)throw new Error("copy command was unsuccessful");f=!0}catch(g){j&&console.error("unable to copy using execCommand: ",g),j&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(x.format||"text",d),x.onCopy&&x.onCopy(window.clipboardData),f=!0}catch(r){j&&console.error("unable to copy using clipboardData: ",r),j&&console.error("falling back to prompt"),T=u("message"in x?x.message:p),window.prompt(T,d)}}finally{b&&(typeof b.removeRange=="function"?b.removeRange(R):b.removeAllRanges()),n&&document.body.removeChild(n),W()}return f}y.exports=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(p),i=u()(s());i.push([y.id,`.decorator--QWKNV{
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
}`,""]),i.locals={decorator:"decorator--QWKNV",header:"header--rVwlg",caption:"caption--pSSv2",labelLayout:"labelLayout--Y7U95",label:"label--aPU6B",required:"required--RQcy6",footer:"footer--Qblaa",hintLayout:"hintLayout--Kgk2P",hintIconContainer:"hintIconContainer--q0yUU",hint:"hint--NfQyJ",icon:"icon--cJqtQ",hintIcon:"hintIcon--IRuOL",counterLimit:"counterLimit--ZqUdi",counterCurrentValue:"counterCurrentValue--Fp71V",labelTooltipTrigger:"labelTooltipTrigger--oiPTH"};const d=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(p),i=u()(s());i.push([y.id,`.checkbox--eAeE8{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--dimension-3m, 24px);
  height:var(--dimension-3m, 24px);
}

.beforeContent--aKe5j{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.beforeContent--aKe5j svg{
  max-width:100%;
  max-height:100%;
}

.expandableIcon--qxn6W{
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  fill:currentColor;
}

.markerContainer--hSq8J{
  padding-top:var(--space-drop-list-item-marker-container-vertical-padding, 2px);
  padding-bottom:var(--space-drop-list-item-marker-container-vertical-padding, 2px);
  pointer-events:none;
  position:absolute;
  top:0;
  left:0;
  box-sizing:border-box;
  height:100%;
}
.markerContainer--hSq8J:before{
  width:var(--size-drop-list-item-marker, 4px);
  border-bottom-right-radius:var(--radius-drop-list-marker, 4px);
  border-top-right-radius:var(--radius-drop-list-marker, 4px);
  content:"";
  display:block;
  height:100%;
}

.droplistItem--PyYH5{
  width:100%;
}
.droplistItem--PyYH5[data-size=s][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px));
}
.droplistItem--PyYH5[data-size=s][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-s, 24px));
}
.droplistItem--PyYH5[data-size=s] .headline--Wlzi0{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--PyYH5[data-size=m][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px));
}
.droplistItem--PyYH5[data-size=m][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-m, 24px));
}
.droplistItem--PyYH5[data-size=m] .headline--Wlzi0{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--PyYH5[data-size=l][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px));
}
.droplistItem--PyYH5[data-size=l][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-l, 24px));
}
.droplistItem--PyYH5[data-size=l] .headline--Wlzi0{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--PyYH5[data-non-pointer]{
  cursor:inherit;
}

.innerWrapper--NCX6W[data-disabled] .expandableIcon--qxn6W{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.innerWrapper--NCX6W[data-disabled] .beforeContent--aKe5j{
  opacity:var(--opacity-a064, 0.64);
}
.innerWrapper--NCX6W[data-disabled] .droplistItem--PyYH5{
  cursor:not-allowed;
}
.innerWrapper--NCX6W[data-has-checked][data-variant=single]::before, .innerWrapper--NCX6W[data-checked][data-variant=single]::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--NCX6W[data-has-checked][data-variant=single]:hover::before, .innerWrapper--NCX6W[data-checked][data-variant=single]:hover::before{
  opacity:var(--opacity-a016, 0.16);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--NCX6W[data-has-checked] .markerContainer--hSq8J:before, .innerWrapper--NCX6W[data-checked] .markerContainer--hSq8J:before{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--NCX6W[data-has-checked] .droplistItem--PyYH5:focus-visible[data-variant=single], .innerWrapper--NCX6W[data-checked] .droplistItem--PyYH5:focus-visible[data-variant=single]{
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--NCX6W[data-has-checked][data-disabled] .markerContainer--hSq8J:before, .innerWrapper--NCX6W[data-checked][data-disabled] .markerContainer--hSq8J:before{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}

.content--Uyy6N{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}`,""]),i.locals={checkbox:"checkbox--eAeE8",beforeContent:"beforeContent--aKe5j",expandableIcon:"expandableIcon--qxn6W",markerContainer:"markerContainer--hSq8J",droplistItem:"droplistItem--PyYH5",headline:"headline--Wlzi0",innerWrapper:"innerWrapper--NCX6W",content:"content--Uyy6N"};const d=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(p),i=u()(s());i.push([y.id,`.pinTopItem--defMG[data-size=s]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--defMG[data-size=m]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--defMG[data-size=l]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--defMG{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinTopItem--defMG li,
.pinTopItem--defMG ul{
  list-style-type:none;
}

.pinBottomItem--fUXSp[data-size=s]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--fUXSp[data-size=m]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--fUXSp[data-size=l]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--fUXSp{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinBottomItem--fUXSp li,
.pinBottomItem--fUXSp ul{
  list-style-type:none;
}`,""]),i.locals={pinTopItem:"pinTopItem--defMG",pinBottomItem:"pinBottomItem--fUXSp"};const d=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(p),i=u()(s());i.push([y.id,`.searchItem--ankoi{
  width:100%;
}
.searchItem--ankoi:focus-within, .searchItem--ankoi:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  max-width:100%;
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}`,""]),i.locals={searchItem:"searchItem--ankoi"};const d=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(p),i=u()(s());i.push([y.id,`.itemWrapper--LoCvc{
  position:relative;
  min-width:100%;
  margin:0;
  padding:0;
}
.itemWrapper--LoCvc::before, .itemWrapper--LoCvc::after{
  pointer-events:none;
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:transparent;
}
.itemWrapper--LoCvc[data-disabled], .itemWrapper--LoCvc:disabled{
  cursor:not-allowed;
  background-color:transparent;
  outline:none;
}
.itemWrapper--LoCvc[data-disabled]::before, .itemWrapper--LoCvc:disabled::before{
  display:none;
}
.itemWrapper--LoCvc[data-disabled]::after, .itemWrapper--LoCvc:disabled::after{
  cursor:not-allowed;
  background-color:transparent;
}
.itemWrapper--LoCvc:not([data-inactive], [data-disabled])[data-open]::before, .itemWrapper--LoCvc:not([data-inactive], [data-disabled])[data-focused]::before, .itemWrapper--LoCvc:not([data-inactive], [data-disabled]):focus-visible::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
@media (hover: hover){
  .itemWrapper--LoCvc:not([data-inactive], [data-disabled]):hover::before{
    opacity:var(--opacity-a008, 0.08);
    background-color:var(--sys-neutral-accent-default, #787b8a);
  }
}

.listItem--g38il{
  cursor:pointer;
  position:relative;
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  min-width:100%;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-main, #41424e);
  text-align:start;
  -webkit-appearance:unset;
     -moz-appearance:unset;
          appearance:unset;
  background-color:transparent;
  border:none;
  outline:none;
}
.listItem--g38il[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
}
.listItem--g38il[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-bottom:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
}
.listItem--g38il[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-bottom:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
}
.listItem--g38il:not([data-inactive], [data-disabled])[data-focused], .listItem--g38il:not([data-inactive], [data-disabled]):focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
}`,""]),i.locals={itemWrapper:"itemWrapper--LoCvc",listItem:"listItem--g38il"};const d=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(p),i=u()(s());i.push([y.id,`.loader--h8rSI{
  display:flex;
  align-items:center;
  justify-content:center;
}
.loader--h8rSI[data-size=s]{
  height:var(--dimension-3m, 24px);
}
.loader--h8rSI[data-size=s][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-3m, 24px));
  height:calc(3 * var(--dimension-3m, 24px));
}
.loader--h8rSI[data-size=m]{
  height:var(--dimension-4m, 32px);
}
.loader--h8rSI[data-size=m][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-4m, 32px));
  height:calc(3 * var(--dimension-4m, 32px));
}
.loader--h8rSI[data-size=l]{
  height:var(--dimension-5m, 40px);
}
.loader--h8rSI[data-size=l][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-5m, 40px));
  height:calc(3 * var(--dimension-5m, 40px));
}
.loader--h8rSI:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}

.scrollStub--AxMuh{
  height:calc(var(--dimension-025m, 2px) / 2);
  margin-top:calc(var(--dimension-025m, 2px) / -2);
  background:transparent;
}

.footer--DvIKW{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  padding:var(--dimension-050m, 4px);
}

.content--hNP2g{
  overflow:hidden;
  flex-grow:1;
}

.virtualizedContainer--E_qly{
  position:relative;
  width:100%;
}

.virtualizedPositionBox--lDg15{
  position:absolute;
  top:0;
  left:0;
  width:100%;
}`,""]),i.locals={loader:"loader--h8rSI",scrollStub:"scrollStub--AxMuh",footer:"footer--DvIKW",content:"content--hNP2g",virtualizedContainer:"virtualizedContainer--E_qly",virtualizedPositionBox:"virtualizedPositionBox--lDg15"};const d=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(p),i=u()(s());i.push([y.id,`.listContainer--II7qU{
  display:flex;
  flex-direction:column;
  height:100%;
  margin:0;
  padding:0;
}
.listContainer--II7qU:focus-visible{
  border:none;
  outline:none;
}
.listContainer--II7qU:focus-visible[data-active]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.listContainer--II7qU:focus-visible[data-active] *{
  cursor:inherit;
}
.listContainer--II7qU li,
.listContainer--II7qU ul{
  list-style-type:none;
}

.wrapper--M714E{
  position:relative;
  overflow:hidden;
  display:block;
  box-sizing:border-box;
  height:100%;
}
.wrapper--M714E:has(.listContainer--II7qU:focus-visible){
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.wrapper--M714E li,
.wrapper--M714E ul{
  list-style-type:none;
}

.scrollContainerS--dvLAO{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 32);
}

.scrollContainerM--ctOvQ{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 40);
}

.scrollContainerL--oPPAq{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 48);
}`,""]),i.locals={listContainer:"listContainer--II7qU",wrapper:"wrapper--M714E",scrollContainerS:"scrollContainerS--dvLAO",scrollContainerM:"scrollContainerM--ctOvQ",scrollContainerL:"scrollContainerL--oPPAq"};const d=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(p),i=u()(s());i.push([y.id,`.accordion--Wq_Hc{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  transition:gap 300ms;
}
.accordion--Wq_Hc::-webkit-scrollbar{
  width:0;
}
.accordion--Wq_Hc[aria-expanded=false]{
  gap:0;
}

.contentWrapper--PPILL{
  box-sizing:border-box;
  width:100%;
}
.contentWrapper--PPILL[aria-hidden=false] > div[data-content]{
  display:block;
}

.content--Thvra{
  position:relative;
  display:none;
  box-sizing:border-box;
  width:100%;
}`,""]),i.locals={accordion:"accordion--Wq_Hc",contentWrapper:"contentWrapper--PPILL",content:"content--Thvra"};const d=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(p),i=u()(s());i.push([y.id,`.headline--qQAus{
  display:flex;
}

.label--RPtje{
  overflow:hidden;
  flex:1;
  color:var(--sys-neutral-text-main, #41424e);
}

.caption--xbFlw{
  overflow:hidden;
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  text-overflow:ellipsis;
  white-space:nowrap;
}

.description--OHvHg{
  color:var(--sys-neutral-text-support, #6d707f);
}

.content--KFoHw{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}
.content--KFoHw[data-size=s] .headline--qQAus{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--KFoHw[data-size=s] .label--RPtje{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  display:flex;
  align-items:center;
}
.content--KFoHw[data-size=s] .caption--xbFlw{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--KFoHw[data-size=s] .description--OHvHg{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--KFoHw[data-size=m] .headline--qQAus{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--KFoHw[data-size=m] .label--RPtje{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  display:flex;
  align-items:center;
}
.content--KFoHw[data-size=m] .caption--xbFlw{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--KFoHw[data-size=m] .description--OHvHg{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--KFoHw[data-size=l] .headline--qQAus{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--KFoHw[data-size=l] .label--RPtje{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
  display:flex;
  align-items:center;
}
.content--KFoHw[data-size=l] .caption--xbFlw{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--KFoHw[data-size=l] .description--OHvHg{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--KFoHw[data-disabled] .label--RPtje,
.content--KFoHw[data-disabled] .description--OHvHg,
.content--KFoHw[data-disabled] .caption--xbFlw{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),i.locals={headline:"headline--qQAus",label:"label--RPtje",caption:"caption--xbFlw",description:"description--OHvHg",content:"content--KFoHw"};const d=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(p),i=u()(s());i.push([y.id,`.listEmptyStateWrapper--XYsqS{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  padding:var(--dimension-1m, 8px);
}`,""]),i.locals={listEmptyStateWrapper:"listEmptyStateWrapper--XYsqS"};const d=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css":((y,c,e)=>{"use strict";e.d(c,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(p),i=u()(s());i.push([y.id,`.separatorWithLabel--pu0vL{
  display:flex;
  gap:var(--dimension-1m, 8px);
  align-items:flex-end;
  box-sizing:border-box;
  width:100%;
  min-width:100%;
}
.separatorWithLabel--pu0vL[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-s, 32px);
}
.separatorWithLabel--pu0vL[data-size=s] .label--oVcsw[data-mode=primary]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--pu0vL[data-size=s] .label--oVcsw[data-mode=secondary]{
  font-family:var(--light-label-m-font-family, SB Sans Interface);
  font-weight:var(--light-label-m-font-weight, Regular);
  line-height:var(--light-label-m-line-height, 16px);
  font-size:var(--light-label-m-font-size, 12px);
  letter-spacing:var(--light-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--pu0vL[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-m, 40px);
}
.separatorWithLabel--pu0vL[data-size=m] .label--oVcsw[data-mode=primary]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--pu0vL[data-size=m] .label--oVcsw[data-mode=secondary]{
  font-family:var(--light-label-l-font-family, SB Sans Interface);
  font-weight:var(--light-label-l-font-weight, Regular);
  line-height:var(--light-label-l-line-height, 20px);
  font-size:var(--light-label-l-font-size, 14px);
  letter-spacing:var(--light-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--pu0vL[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-l, 48px);
}
.separatorWithLabel--pu0vL[data-size=l] .label--oVcsw[data-mode=primary]{
  font-family:var(--sans-title-m-font-family, SB Sans Interface);
  font-weight:var(--sans-title-m-font-weight, Semibold);
  line-height:var(--sans-title-m-line-height, 24px);
  font-size:var(--sans-title-m-font-size, 16px);
  letter-spacing:var(--sans-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);
}
.separatorWithLabel--pu0vL[data-size=l] .label--oVcsw[data-mode=secondary]{
  font-family:var(--light-title-m-font-family, SB Sans Interface);
  font-weight:var(--light-title-m-font-weight, Regular);
  line-height:var(--light-title-m-line-height, 24px);
  font-size:var(--light-title-m-font-size, 16px);
  letter-spacing:var(--light-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-m-paragraph-spacing, 8.8px);
}

.separatorWithoutLabel--mBoz8{
  display:flex;
  align-items:flex-end;
}
.separatorWithoutLabel--mBoz8[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
}
.separatorWithoutLabel--mBoz8[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
}
.separatorWithoutLabel--mBoz8[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
}
.separatorWithoutLabel--mBoz8{
  box-sizing:border-box;
}

.label--oVcsw{
  overflow:hidden;
  flex-shrink:1;
}
.label--oVcsw[data-mode=primary]{
  color:var(--sys-neutral-text-main, #41424e);
}
.label--oVcsw[data-mode=secondary]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}

hr.divider--DEtai{
  flex:1;
  width:auto;
  min-width:0;
}

.selectButton--_HOsG{
  display:flex;
  justify-content:flex-end;
}
.selectButton--_HOsG[data-weight=primary]{
  --divider-height:1px;
}
.selectButton--_HOsG[data-weight=secondary]{
  --divider-height:0.5px;
}
.selectButton--_HOsG[data-size=s]{
  transform:translateY(calc((var(--size-button-xs, 24px) - var(--sans-label-s-line-height, 14px)) / 2 - var(--divider-height, 0)));
}
.selectButton--_HOsG[data-size=m]{
  transform:translateY(calc((var(--size-button-s, 32px) - var(--sans-label-m-line-height, 16px)) / 2 - var(--divider-height, 0)));
}
.selectButton--_HOsG[data-size=l]{
  transform:translateY(calc((var(--size-button-m, 40px) - var(--sans-label-l-line-height, 20px)) / 2 - var(--divider-height, 0)));
}`,""]),i.locals={separatorWithLabel:"separatorWithLabel--pu0vL",label:"label--oVcsw",separatorWithoutLabel:"separatorWithoutLabel--mBoz8",divider:"divider--DEtai",selectButton:"selectButton--_HOsG"};const d=i}),"./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js":(y=>{y.exports=function(){var c=document.getSelection();if(!c.rangeCount)return function(){};for(var e=document.activeElement,t=[],s=0;s<c.rangeCount;s++)t.push(c.getRangeAt(s));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return c.removeAllRanges(),function(){c.type==="Caret"&&c.removeAllRanges(),c.rangeCount||t.forEach(function(p){c.addRange(p)}),e&&e.focus()}}})}]);})();
