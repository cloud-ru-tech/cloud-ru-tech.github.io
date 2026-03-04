"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[4133],{"./node_modules/.pnpm/@snack-uikit+dropdown@0.5.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js":((k,c,e)=>{e.d(c,{m:()=>U});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(s),d=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(o),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=e.n(oe),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),J=e.n(H),ne=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(ne),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),P=e.n(p),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),T=e.n(te),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"),O={};O.styleTagTransform=T(),O.setAttributes=M(),O.insert=J().bind(null,"head"),O.domAPI=R(),O.insertStyleElement=P();var W=n()(v.A,O);const j=v.A&&v.A.locals?v.A.locals:void 0;var L=function(w,K){var V={};for(var b in w)Object.prototype.hasOwnProperty.call(w,b)&&K.indexOf(b)<0&&(V[b]=w[b]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,b=Object.getOwnPropertySymbols(w);z<b.length;z++)K.indexOf(b[z])<0&&Object.prototype.propertyIsEnumerable.call(w,b[z])&&(V[b[z]]=w[b[z]]);return V};function U(w){var{content:K,trigger:V="click",placement:b="bottom-start",children:z,triggerRef:h,widthStrategy:$="gte",triggerClassName:Y}=w,X=L(w,["content","trigger","placement","children","triggerRef","widthStrategy","triggerClassName"]);return!z&&!h?null:(0,t.jsx)(d.Z,Object.assign({placement:b,popoverContent:(0,t.jsx)("div",{className:j.dropdownContainer,children:K}),trigger:V,triggerRef:h,hasArrow:!1,widthStrategy:$,triggerClassName:r()(j.defaultTriggerClassName,Y)},X,{children:z}))}}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js":((k,c,e)=>{e.d(c,{nG:()=>Ut,cu:()=>Et,We:()=>Dt});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),r=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),d=e("./node_modules/.pnpm/@snack-uikit+button@0.19.15_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),o=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.9_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),n=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),oe=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),R=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),H=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js");const J={s:"xs",m:"s",l:"m"};var ne=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),M=e.n(ne),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),P=e.n(p),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(te),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),O=e.n(v),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),j=e.n(W),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),U=e.n(L),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css"),K={};K.styleTagTransform=U(),K.setAttributes=O(),K.insert=T().bind(null,"head"),K.domAPI=P(),K.insertStyleElement=j();var V=M()(w.A,K);const b=w.A&&w.A.locals?w.A.locals:void 0;function z({label:_,truncate:y,divider:g,mode:l="secondary",selectButton:f}){const{size:se="s"}=(0,R.hg)(),{t:a}=(0,n.Ym)("List"),x=(0,t.useMemo)(()=>{if(!f)return null;const{onClick:u,checked:i,itemRef:E,label:N}=f;return(0,s.jsx)("span",{className:b.selectButton,"data-size":se,"data-weight":g&&l||void 0,children:(0,s.jsx)(d.b,{size:J[se],tabIndex:0,onClick:S=>{u==null||u(S),S.preventDefault(),S.stopPropagation()},onFocus:H.d,ref:E,label:N!=null?N:a(i?"groupSelectButton.reset":"groupSelectButton.select")})})},[g,l,f,se,a]);return _?(0,s.jsxs)("div",{className:b.separatorWithLabel,"data-size":se,children:[(0,s.jsx)("span",{className:b.label,"data-mode":l,children:(0,s.jsx)(oe.m,{variant:y==null?void 0:y.variant,text:_,maxLines:1})}),(0,s.jsxs)("div",{style:{flex:1},children:[x,g&&(0,s.jsx)(o.c,{weight:l==="primary"?"regular":"light",className:b.divider})]})]}):g?(0,s.jsx)("div",{className:b.separatorWithoutLabel,"data-size":se,children:(0,s.jsx)(o.c,{weight:"regular"})}):null}var h=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"),$=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),Y=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),X=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),Z=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),q=e.n(Z),ee=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),le=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css"),ue={};ue.styleTagTransform=U(),ue.setAttributes=O(),ue.insert=T().bind(null,"head"),ue.domAPI=P(),ue.insertStyleElement=j();var Te=M()(le.A,ue);const ae=le.A&&le.A.locals?le.A.locals:void 0;var ye=function(_,y){var g={};for(var l in _)Object.prototype.hasOwnProperty.call(_,l)&&y.indexOf(l)<0&&(g[l]=_[l]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,l=Object.getOwnPropertySymbols(_);f<l.length;f++)y.indexOf(l[f])<0&&Object.prototype.propertyIsEnumerable.call(_,l[f])&&(g[l[f]]=_[l[f]]);return g};function Se(_){var{children:y,expanded:g,className:l,header:f}=_,se=ye(_,["children","expanded","className","header"]);return(0,s.jsxs)("div",Object.assign({className:q()(ae.accordion,l),role:"menuitem","aria-haspopup":!0,"aria-expanded":g},(0,ee.z7)(se),{children:[f,(0,s.jsx)("div",{className:ae.contentWrapper,"aria-hidden":!g,children:(0,s.jsx)("div",{className:ae.content,"data-content":!0,children:g&&y})})]}))}var m=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),A=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/Checkbox.js"),G=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),D=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),B=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),pe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"),fe={};fe.styleTagTransform=U(),fe.setAttributes=O(),fe.insert=T().bind(null,"head"),fe.domAPI=P(),fe.insertStyleElement=j();var Pe=M()(pe.A,fe);const de=pe.A&&pe.A.locals?pe.A.locals:void 0;function Re(){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:de.spinner,children:(0,s.jsx)("path",{d:"M5 8C5 6.34315 6.34315 5 8 5",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round"})})}var et=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),Be=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"),He=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"),we={};we.styleTagTransform=U(),we.setAttributes=O(),we.insert=T().bind(null,"head"),we.domAPI=P(),we.insertStyleElement=j();var Ke=M()(He.A,we);const Ve=He.A&&He.A.locals?He.A.locals:void 0;var vt=function(_,y){var g={};for(var l in _)Object.prototype.hasOwnProperty.call(_,l)&&y.indexOf(l)<0&&(g[l]=_[l]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,l=Object.getOwnPropertySymbols(_);f<l.length;f++)y.indexOf(l[f])<0&&Object.prototype.propertyIsEnumerable.call(_,l[f])&&(g[l[f]]=_[l[f]]);return g};function yt(_){var{inputRef:y,"data-test-id":g,showIcon:l,loading:f,size:se=B.SK.M}=_,a=vt(_,["inputRef","data-test-id","showIcon","loading","size"]);return(0,s.jsx)(Be.Q,Object.assign({},a,{size:se,"data-test-id":g,ref:y,render:function(u){const i=(0,et.V)(u);return(0,s.jsxs)("div",Object.assign({className:Ve.container},i,{children:[(0,s.jsx)("div",Object.assign({className:Ve.box},i)),(0,s.jsxs)("div",Object.assign({className:Ve.containerFlag},i,{children:[(0,s.jsx)("div",Object.assign({className:Ve.flag},i)),(l||f)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",Object.assign({className:Ve.flag_icon_off},i,{children:f?(0,s.jsx)(Re,{}):(0,s.jsx)(G.A,{size:16})})),(0,s.jsx)("div",Object.assign({className:Ve.flag_icon_on},i,{children:f?(0,s.jsx)(Re,{}):(0,s.jsx)(D.A,{size:16})}))]})]}))]}))}}))}var _t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css"),Ge={};Ge.styleTagTransform=U(),Ge.setAttributes=O(),Ge.insert=T().bind(null,"head"),Ge.domAPI=P(),Ge.insertStyleElement=j();var ot=M()(_t.A,Ge);const Ue=_t.A&&_t.A.locals?_t.A.locals:void 0;var Tt=function(_,y){var g={};for(var l in _)Object.prototype.hasOwnProperty.call(_,l)&&y.indexOf(l)<0&&(g[l]=_[l]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,l=Object.getOwnPropertySymbols(_);f<l.length;f++)y.indexOf(l[f])<0&&Object.prototype.propertyIsEnumerable.call(_,l[f])&&(g[l[f]]=_[l[f]]);return g};const xt={option:1,description:2,variant:"end"};function rt(_){var{truncate:y,caption:g,description:l,option:f,className:se,disabled:a}=_,x=Tt(_,["truncate","caption","description","option","className","disabled"]);const{size:u="s"}=(0,R.hg)(),i=(0,t.useMemo)(()=>Object.assign(Object.assign({},xt),y),[y]);return(0,s.jsxs)("div",Object.assign({className:q()(Ue.content,se)},(0,ee.z7)(x),{"data-size":u!=null?u:"s","data-disabled":a||void 0,children:[(0,s.jsxs)("div",{className:Ue.headline,children:[(0,s.jsx)("div",{className:Ue.label,children:(0,s.jsx)(oe.m,{variant:i.variant,text:String(f),maxLines:i.option,"data-test-id":"list__base-item-option"})}),g&&(0,s.jsx)("span",{className:Ue.caption,children:g})]}),l&&(0,s.jsx)("div",{className:Ue.description,children:(0,s.jsx)(oe.m,{text:l,maxLines:i.description,"data-test-id":"list__base-item-description"})})]}))}var ft=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),gt=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),Ne=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js");const kt={s:"s",m:"s",l:"m"};var tt=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css"),Fe={};Fe.styleTagTransform=U(),Fe.setAttributes=O(),Fe.insert=T().bind(null,"head"),Fe.domAPI=P(),Fe.insertStyleElement=j();var nt=M()(tt.A,Fe);const at=tt.A&&tt.A.locals?tt.A.locals:void 0;var bt=function(_,y){var g={};for(var l in _)Object.prototype.hasOwnProperty.call(_,l)&&y.indexOf(l)<0&&(g[l]=_[l]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,l=Object.getOwnPropertySymbols(_);f<l.length;f++)y.indexOf(l[f])<0&&Object.prototype.propertyIsEnumerable.call(_,l[f])&&(g[l[f]]=_[l[f]]);return g};function ct(_){var y,{beforeContent:g,afterContent:l,content:f,onClick:se,onMouseDown:a,id:x,expandIcon:u,disabled:i,open:E,itemRef:N,switch:S,showSwitchIcon:ie,onKeyDown:ke,onFocus:me,indeterminate:Me,checked:ve,onSelect:Ce,onOpenNestedList:ce,isParentNode:ge,className:De,inactive:Le,itemWrapRender:je}=_,be=bt(_,["beforeContent","afterContent","content","onClick","onMouseDown","id","expandIcon","disabled","open","itemRef","switch","showSwitchIcon","onKeyDown","onFocus","indeterminate","checked","onSelect","onOpenNestedList","isParentNode","className","inactive","itemWrapRender"]);const re=!Le,{size:Ae="s",marker:ze,contentRender:Ye,firstItemId:Ze,focusFlattenItems:st}=(0,R.hg)(),{level:Xe=0}=(0,m.wG)(),{closeDroplist:I,closeDroplistOnItemClick:C}=(0,ft.x)(),{value:Q,onChange:_e,mode:F,isSelectionSingle:dt,isSelectionMultiple:At}=(0,$.VG)(),We=dt?ve!=null?ve:Q===x:ve!=null?ve:Q==null?void 0:Q.includes(x!=null?x:""),ht=()=>{_e==null||_e(x)},Mt=he=>{i||a==null||a(he)},It=he=>{me==null||me(he),he.stopPropagation()},Lt=()=>{ge&&Ce?Ce():ht()},mt=he=>{i||(se==null||se(he),re&&(ge||ht()),!At&&C&&I())},St=he=>{if(ke==null||ke(he),he.key==="ArrowRight"&&ce){ce(he),he.preventDefault(),he.stopPropagation();return}(he.code==="Space"||he.key==="Enter"||he.key===" ")&&(At&&ge&&Ce&&Ce(),!ge&&ht(),!ge&&(mt==null||mt(he)),he.stopPropagation(),he.preventDefault())},Rt=he=>{ge&&he.stopPropagation()},Wt=(0,ee.z7)(be),qe=(0,s.jsx)("div",{className:q()(gt.A.itemWrapper,at.innerWrapper,De),"data-inactive":Le||void 0,"data-disabled":i||void 0,"data-variant":F||void 0,"data-checked":ge&&We||!ge&&We&&!S||void 0,children:(0,s.jsxs)("li",{"data-type":"outside",role:"menuitem","data-test-id":Wt["data-test-id"]||"list__base-item_"+x,ref:N,className:q()(gt.A.listItem,at.droplistItem),"data-size":Ae,onClick:mt,onMouseDown:Mt,tabIndex:Ze&&x===st[Ze].originalId?0:-1,"data-non-pointer":Le&&!se,"data-variant":F||void 0,"data-open":E||void 0,onKeyDown:St,onFocus:It,style:{"--level":Xe},"data-level-one":Xe===1||void 0,"data-level-more-one":Xe>1||void 0,"data-checked":ge&&(Me||We)||We&&!S||void 0,children:[!S&&dt&&ze&&!ge&&re&&(0,s.jsx)("div",{className:at.markerContainer,"data-test-id":"list__base-item-marker"}),!S&&At&&re&&(0,s.jsx)("div",{className:at.checkbox,children:(0,s.jsx)(A.S,{size:kt[Ae!=null?Ae:"s"],disabled:i,tabIndex:-1,onChange:ge?Lt:void 0,checked:We,"data-test-id":"list__base-item-checkbox",onClick:Rt,indeterminate:Me})}),g&&(0,s.jsx)("div",{className:at.beforeContent,children:g}),f&&(0,Ne.J0)(f)?(y=Ye==null?void 0:Ye({id:x,content:f,disabled:i}))!==null&&y!==void 0?y:(0,s.jsx)(rt,Object.assign({disabled:i},f)):(0,s.jsxs)("div",{className:at.content,children:[" ",f," "]}),l,S&&re&&(0,s.jsx)(yt,{disabled:i,checked:We,"data-test-id":"list__base-item-switch",showIcon:ie}),!S&&u&&(0,s.jsx)("span",{className:at.expandableIcon,children:u})]})});return je?je(qe):qe}var Pt=function(_,y){var g={};for(var l in _)Object.prototype.hasOwnProperty.call(_,l)&&y.indexOf(l)<0&&(g[l]=_[l]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,l=Object.getOwnPropertySymbols(_);f<l.length;f++)y.indexOf(l[f])<0&&Object.prototype.propertyIsEnumerable.call(_,l[f])&&(g[l[f]]=_[l[f]]);return g};function Ot(_){var{id:y,disabled:g,allChildIds:l,items:f}=_,se=Pt(_,["id","disabled","allChildIds","items"]);const{level:a=0}=(0,m.wG)(),{openCollapseItems:x=[],toggleOpenCollapseItem:u}=(0,m.om)(),{value:i,isSelectionSingle:E,isSelectionMultiple:N}=(0,$.VG)(),{indeterminate:S,handleOnSelect:ie,checked:ke}=Et({items:f,id:y,disabled:g,allChildIds:l}),me=!!x.includes(y!=null?y:""),Me=!!(S&&!me&&E&&i&&l.includes(i)||N&&ke),ve=(0,t.useCallback)(()=>{u==null||u(y!=null?y:"")},[y,u]),Ce=Dt(f),ce=ge=>{var De;u==null||u(y!=null?y:""),(De=se.onClick)===null||De===void 0||De.call(se,ge)};return(0,s.jsx)(Se,{header:(0,s.jsx)(ct,Object.assign({},se,{id:y,disabled:g,expandIcon:me?(0,s.jsx)(Y.A,{}):(0,s.jsx)(X.A,{}),onClick:ce,isParentNode:!0,onOpenNestedList:ve,checked:Me,indeterminate:S,onSelect:g?void 0:ie})),expanded:me,"data-test-id":`list__accordion-item-${y}`,children:(0,s.jsx)(m.x5.Provider,{value:{level:a+1},children:Ce})})}function Ct({label:_,truncate:y,divider:g,items:l,mode:f,id:se,itemRef:a,allChildIds:x,selectButtonLabel:u}){const{indeterminate:i,checked:E,handleOnSelect:N}=Et({items:l,id:se,disabled:!1,allChildIds:x}),S=Dt(l);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(z,{label:_,truncate:y,divider:g,mode:f,selectButton:{indeterminate:i,checked:E,itemRef:a,onClick:N,label:u}}),S]})}var Oe=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),xe=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js"),lt=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),Je=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js");const it=["right","right-start","right-end","left","left-start","left-end","bottom","top"];var Qe=function(_,y){var g={};for(var l in _)Object.prototype.hasOwnProperty.call(_,l)&&y.indexOf(l)<0&&(g[l]=_[l]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,l=Object.getOwnPropertySymbols(_);f<l.length;f++)y.indexOf(l[f])<0&&Object.prototype.propertyIsEnumerable.call(_,l[f])&&(g[l[f]]=_[l[f]]);return g};function ut(_){var{items:y,placement:g="right-start",id:l,scroll:f,scrollRef:se,disabled:a,onSublistOpenChanged:x,allChildIds:u,loading:i=!1,focusId:E=l,untouchableScrollbars:N=!1}=_,S=Qe(_,["items","placement","id","scroll","scrollRef","disabled","onSublistOpenChanged","allChildIds","loading","focusId","untouchableScrollbars"]);const{flattenItems:ie,focusFlattenItems:ke,virtualized:me}=(0,R.hg)(),{value:Me,isSelectionSingle:ve,isSelectionMultiple:Ce}=(0,$.VG)(),{openCollapseItems:ce=[]}=(0,m.om)(),ge=ie[l],{ids:De,expandedIds:Le}=(0,t.useMemo)(()=>{const{ids:F,expandedIds:dt}=(0,Ne.e)({focusCloseChildIds:y,focusFlattenItems:ke,openCollapseItems:ce,isSelectionMultiple:Ce});return{ids:F,expandedIds:dt.concat([l])}},[ke,l,Ce,y,ce]),{handleListKeyDownFactory:je,activeItemId:be,forceUpdateActiveItemId:re}=(0,lt.L)(),[Ae,ze]=(0,t.useState)(),Ye=(0,t.useCallback)(F=>{if(je(De,Le)(F),F.key==="ArrowLeft"){re==null||re(E),ze(!1),F.stopPropagation();return}},[je,De,Le,re,E]),{indeterminate:Ze,checked:st,handleOnSelect:Xe}=Et({items:(0,Ne.j2)(ge)?ge.items:[],id:l,disabled:a,allChildIds:u}),I=(0,t.useCallback)(()=>(re==null||re(r.$.dropFocus),ze(!1),!0),[re]),C=(0,t.useMemo)(()=>!!(!a&&be&&ke[E].allChildIds.includes(be)),[be,a,ke,E]),Q=!!(Ze&&!Ae&&ve&&Me&&u.includes(Me)||Ce&&st);(0,t.useEffect)(()=>{ze(F=>F&&C)},[l,C]);const _e=(0,t.useRef)(null);return(0,s.jsx)(Oe.m,{outsideClick:I,fallbackPlacements:it,content:(0,s.jsx)(Je.Q,{onKeyDown:Ye,items:y,nested:!0,scroll:f,virtualized:me,tabIndex:0,ref:_e,onFocus:F=>{F.stopPropagation(),re==null||re(De[0])},scrollRef:se,limitedScrollHeight:!0,untouchableScrollbars:N,loading:i}),trigger:"hover",open:C||Ae,onOpenChange:F=>{ze(F),x==null||x(F,l)},placement:g,widthStrategy:"auto",children:(0,s.jsx)(ct,Object.assign({},S,{disabled:a,open:Ae,expandIcon:(0,s.jsx)(xe.A,{}),id:l,isParentNode:!0,indeterminate:Ze,checked:Q,onOpenNestedList:()=>{ze(!0),setTimeout(()=>{var F;(F=_e.current)===null||F===void 0||F.focus()},0)},onSelect:Xe}))})}function jt({focusCloseChildIds:_,focusFlattenItems:y,flattenItems:g,isSelectionMultiple:l}){return _?_.flatMap(f=>{const{itemRef:se,key:a,originalId:x,items:u}=y[f],i=g[x];if((0,Ne.X8)(i)||!l&&(0,Ne.$k)(i)){const E=jt({focusCloseChildIds:u,focusFlattenItems:y,flattenItems:g,isSelectionMultiple:l});return[(0,s.jsx)(z,{label:i.label,truncate:i.truncate,divider:i.divider,mode:i.mode},a+"_separator"),...E]}return(0,Ne.$k)(i)?(0,t.createElement)(Ct,Object.assign({},i,{items:u,itemRef:se,key:a})):(0,Ne.qz)(i)?(0,t.createElement)(Ot,Object.assign({},i,{items:u,itemRef:se,key:a})):(0,Ne.j2)(i)?(0,t.createElement)(ut,Object.assign({},i,{focusId:f,items:u,itemRef:se,key:a})):(0,t.createElement)(ct,Object.assign({},i,{itemRef:se,key:a}))}):[null]}function Dt(_){const{focusFlattenItems:y,flattenItems:g}=(0,R.hg)(),{isSelectionMultiple:l}=(0,$.VG)();return(0,t.useMemo)(()=>jt({flattenItems:g,focusFlattenItems:y,focusCloseChildIds:_,isSelectionMultiple:l}),[g,_,y,l])}function Ut({footerActiveElementsRefs:_}){return(0,t.useMemo)(()=>{var y;return{searchItem:{itemRef:(0,t.createRef)(),id:r.$.search,parentId:r.$.default,items:[],allChildIds:[]},footerItems:(y=_==null?void 0:_.map((g,l)=>({id:(0,h.mr)(l),itemRef:g,parentId:r.$.default,items:[],allChildIds:[]})))!==null&&y!==void 0?y:[]}},[_])}function Et({id:_,allChildIds:y}){const{value:g,setValue:l,isSelectionMultiple:f}=(0,$.VG)(),{flattenItems:se}=(0,R.hg)(),a=(0,t.useMemo)(()=>y.filter(S=>{const ie=se[S];return ie&&!("type"in ie)}),[y,se]),x=(0,t.useMemo)(()=>a.filter(S=>{const ie=se[S];return ie&&!("type"in ie)&&!ie.disabled}),[a,se]),u=f?g&&!!g.length&&a.every(S=>g==null?void 0:g.includes(S)):void 0,i=f?g&&!!g.length&&x.every(S=>g==null?void 0:g.includes(S)):void 0,E=f?!u&&a.some(S=>g==null?void 0:g.includes(S)):a.includes(g!=null?g:"");return{checked:u,indeterminate:E,handleOnSelect:()=>{if(u||i){l==null||l(S=>(S!=null?S:[]).filter(ie=>ie!==_&&!x.includes(ie)));return}l==null||l(S=>Array.from(new Set([...S!=null?S:[],...x])))}}}}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>T});var t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(t),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),d=e.n(r),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),n=e.n(o),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n(oe),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),J=e.n(H),ne=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=e.n(ne),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),P={};P.styleTagTransform=M(),P.setAttributes=R(),P.insert=n().bind(null,"head"),P.domAPI=d(),P.insertStyleElement=J();var te=s()(p.A,P);const T=p.A&&p.A.locals?p.A.locals:void 0}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js":((k,c,e)=>{e.d(c,{$k:()=>H,J0:()=>J,X8:()=>R,Xy:()=>ne,e:()=>T,gZ:()=>M,j2:()=>oe,jQ:()=>P,lg:()=>te,pN:()=>p,qz:()=>n});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),r=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"),d=function(v,O){var W={};for(var j in v)Object.prototype.hasOwnProperty.call(v,j)&&O.indexOf(j)<0&&(W[j]=v[j]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var L=0,j=Object.getOwnPropertySymbols(v);L<j.length;L++)O.indexOf(j[L])<0&&Object.prototype.propertyIsEnumerable.call(v,j[L])&&(W[j[L]]=v[j[L]]);return W};function o(v){return v&&!("items"in v)}function n(v){return v&&"items"in v&&v.type==="collapse"}function oe(v){return v&&"items"in v&&v.type==="next-list"}function R(v){return v&&"items"in v&&v.type==="group"}function H(v){return v&&"items"in v&&v.type==="group-select"}function J(v){return typeof v=="object"&&v.option!==void 0}const ne=o,M=n,p=oe,P=R;function te({items:v,prefix:O,parentId:W}){const j={},L={};function U({item:h,idx:$,prefix:Y,parentId:X=s.$.default}){var Z,q;const ee=Y!==void 0?(0,r.yz)(Y,$):String($),le=(Z=R(h)?void 0:h.id)!==null&&Z!==void 0?Z:ee;if(o(h))return j[le]=Object.assign(Object.assign({},h),{items:[],allChildIds:[],id:le}),L[ee]={key:ee,originalId:le,id:ee,disabled:h.disabled,parentId:X,items:[],allChildIds:[],itemRef:h.itemRef||(0,t.createRef)()},{id:le,children:[le],autoId:ee,focusChildren:[ee]};let ue=[],Te=[];const ae=[],ye=[],{items:Se}=h,m=d(h,["items"]),A=R(h)?X!=null?X:s.$.default:ee,G=Se.filter(pe=>!pe.hidden);for(let pe=0;pe<G.length;pe++){const{id:fe,children:Pe,autoId:de,focusChildren:Re}=U({item:G[pe],idx:pe,prefix:le,parentId:A});ye.push(de),ae.push(fe),ue=ue.concat(Pe),Te=Te.concat(Re)}const D=[...new Set(ue.concat(ae))],B=[...new Set(Te.concat(ye))];return j[le]=Object.assign(Object.assign({},m),{id:le,items:[],allChildIds:D}),L[ee]={key:ee,originalId:le,id:ee,parentId:X,items:ye,allChildIds:B,disabled:(h.type==="collapse"||h.type==="next-list")&&h.disabled,type:h.type,itemRef:R(h)?void 0:(q=h.itemRef)!==null&&q!==void 0?q:(0,t.createRef)()},{id:le,children:D,autoId:ee,focusChildren:B}}const w=[],K=[];let V=[];const b=v.filter(h=>!h.hidden);for(let h=0;h<b.length;h++){const{id:$,children:Y,autoId:X}=U({item:b[h],idx:h,prefix:O,parentId:W});K.push(X),w.push($),V.push($),V=V.concat(Y)}const z=[...new Set(V)];return{focusCloseChildIds:K,allChildIds:z,flattenItems:j,focusFlattenItems:L}}function T({focusFlattenItems:v,focusCloseChildIds:O,openCollapseItems:W,isSelectionMultiple:j}){const L=[],U=[];function w(K){K.forEach(V=>{const b=v[V];if(b.type==="group"){w(b.items);return}if(!b.disabled){if(b.type==="group-select"){j&&L.push(b.id),w(b.items);return}L.push(b.id),b.type&&(U.push(V),W.includes(b.originalId)&&w(b.items))}})}return w(O),{ids:L,expandedIds:U}}}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js":((k,c,e)=>{e.d(c,{B:()=>Te});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(s),d=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),oe=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),R=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),H=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ne=e.n(J),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),p=e.n(M),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),te=e.n(P),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),v=e.n(T),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),W=e.n(O),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(j),U=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css"),w={};w.styleTagTransform=L(),w.setAttributes=v(),w.insert=te().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=W();var K=ne()(U.A,w);const V=U.A&&U.A.locals?U.A.locals:void 0,b=(0,o.forwardRef)(({listRef:ae,tabIndex:ye},Se)=>{const m=(0,o.useCallback)(A=>{var G;A.relatedTarget!==ae.current&&((G=ae.current)===null||G===void 0||G.focus()),A.preventDefault(),A.stopPropagation()},[ae]);return(0,t.jsx)("button",{type:"button","aria-hidden":!0,ref:Se,onKeyDown:H.d,onFocus:m,className:V.hiddenBtn,tabIndex:ye})});var z=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),h=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),$=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),Y=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),X=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),Z=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),q=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),ee=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),le=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),ue=function(ae,ye){var Se={};for(var m in ae)Object.prototype.hasOwnProperty.call(ae,m)&&ye.indexOf(m)<0&&(Se[m]=ae[m]);if(ae!=null&&typeof Object.getOwnPropertySymbols=="function")for(var A=0,m=Object.getOwnPropertySymbols(ae);A<m.length;A++)ye.indexOf(m[A])<0&&Object.prototype.propertyIsEnumerable.call(ae,m[A])&&(Se[m[A]]=ae[m[A]]);return Se};const Te=(0,o.forwardRef)((ae,ye)=>{var{items:Se=[],search:m,pinBottom:A=[],pinTop:G=[],footerActiveElementsRefs:D,onKeyDown:B,tabIndex:pe=0,className:fe,collapse:Pe={},selection:de,contentRender:Re,size:et="s",marker:Be=!0,keyboardNavigationRef:He,hasListInFocusChain:we=!0}=ae,Ke=ue(ae,["items","search","pinBottom","pinTop","footerActiveElementsRefs","onKeyDown","tabIndex","className","collapse","selection","contentRender","size","marker","keyboardNavigationRef","hasListInFocusChain"]);const Ve=(0,o.useMemo)(()=>!!m,[m]),[vt=[],yt]=(0,n.I)(Pe),_t=(0,o.useCallback)(Oe=>yt(xe=>xe!=null&&xe.includes(Oe)?xe.filter(lt=>lt!==Oe):(xe!=null?xe:[]).concat([Oe])),[yt]),{searchItem:Ge,footerItems:ot}=(0,z.nG)({footerActiveElementsRefs:D}),Ue=(0,o.useMemo)(()=>{const Oe=(0,h.lg)({items:G,prefix:R.$.pinTop,parentId:R.$.default}),xe=(0,h.lg)({items:Se,prefix:R.$.default,parentId:R.$.default}),lt=(0,h.lg)({items:A,prefix:R.$.pinBottom,parentId:R.$.default}),Je=Object.assign(Object.assign(Object.assign({},Oe.flattenItems),lt.flattenItems),xe.flattenItems),it=Object.assign(Object.assign(Object.assign({},Oe.focusFlattenItems),lt.focusFlattenItems),xe.focusFlattenItems);return[...ot,Ge].forEach(Qe=>{Je[Qe.id]=Qe,it[Qe.id]=Object.assign(Object.assign({},Qe),{originalId:Qe.id,items:[],key:Qe.id,allChildIds:[]})}),{items:xe,pinTop:Oe,pinBottom:lt,flattenItems:Je,focusFlattenItems:it}},[Se,G,A,Ge,ot]),{flattenItems:Tt,focusFlattenItems:xt}=Ue,rt=ue(Ue,["flattenItems","focusFlattenItems"]),{ids:ft,expandedIds:gt}=(0,o.useMemo)(()=>{const{pinTop:Oe,items:xe,pinBottom:lt}=rt;let Je=[],it=[];return Ve&&Je.push(Ge.id),[Oe,xe,lt].forEach(({focusFlattenItems:Qe,focusCloseChildIds:ut})=>{const jt=(0,h.e)({focusFlattenItems:Qe,focusCloseChildIds:ut,openCollapseItems:vt,isSelectionMultiple:(de==null?void 0:de.mode)==="multiple"});Je=Je.concat(jt.ids),it=it.concat(jt.expandedIds)}),ot.forEach(Qe=>{Je.push(Qe.id)}),{ids:Je,expandedIds:it}},[ot,Ve,rt,vt,Ge.id,de==null?void 0:de.mode]),Ne=(0,o.useRef)(null),kt=(0,o.useRef)(null),tt=ft[0],{handleListKeyDownFactory:Fe,activeItemId:nt,resetActiveItemId:at,forceUpdateActiveItemId:bt}=(0,q.d)({mainRef:Ne,btnRef:kt,focusFlattenItems:xt,keyboardNavigationRef:He,hasListInFocusChain:we,firstItemId:tt}),ct=(0,o.useCallback)(Oe=>Fe(ft,gt)(Oe),[Fe,ft,gt]),Pt=(0,oe.B)()&&Ne.current===document.activeElement&&nt===void 0,Ot=Oe=>{B==null||B(Oe),ct==null||ct(Oe)},Ct=()=>{at()};return(0,t.jsx)($.Tr,{flattenItems:Tt,focusFlattenItems:xt,contentRender:Re,size:et,marker:Be,firstItemId:tt,virtualized:Ke.virtualized,children:(0,t.jsx)(Y.WM,Object.assign({},de,{children:(0,t.jsx)(X.bN.Provider,{value:{openCollapseItems:vt,toggleOpenCollapseItem:_t},children:(0,t.jsx)(Z.m.Provider,{value:{activeItemId:nt,handleListKeyDownFactory:Fe,forceUpdateActiveItemId:bt},children:(0,t.jsxs)("div",{className:r()(le.A.wrapper,fe),"data-active":Pt||void 0,children:[(0,t.jsx)(ee.Q,Object.assign({},Ke,{items:rt.items.focusCloseChildIds,pinTop:rt.pinTop.focusCloseChildIds,pinBottom:rt.pinBottom.focusCloseChildIds,searchItem:Ge,ref:(0,d.A)(ye,Ne),onFocus:Ct,onKeyDown:Ot,tabIndex:we?pe:void 0,search:m,nested:!1})),we&&(0,t.jsx)(b,{ref:kt,listRef:Ne,tabIndex:pe})]})})})}))})})}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js":((k,c,e)=>{e.d(c,{Q:()=>se});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/@tanstack+react-virtual@3.11.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@tanstack/react-virtual/dist/esm/index.js"),r=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=e.n(r),o=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),oe=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),R=e("./node_modules/.pnpm/@snack-uikit+scroll@0.10.4_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),H=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),J=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js"),ne=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),M=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js");function p({noDataState:a,noResultsState:x,errorDataState:u}){const{t:i}=(0,M.Ym)("List");return(0,n.useMemo)(()=>{const E=Object.assign({icon:{icon:J.A,appearance:"neutral",decor:!0},description:i("noData.description")},a),N=Object.assign({description:i("noResults.description")},x),S=Object.assign({icon:{icon:ne.A,appearance:"neutral",decor:!0},description:i("errorData.description")},u);return{noDataState:E,noResultsState:N,errorDataState:S}},[u,a,x,i])}var P=e("./node_modules/.pnpm/@snack-uikit+info-block@0.6.31_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/index.js"),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=e.n(te),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=e.n(v),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),j=e.n(W),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),U=e.n(L),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),K=e.n(w),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(V),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css"),h={};h.styleTagTransform=b(),h.setAttributes=U(),h.insert=j().bind(null,"head"),h.domAPI=O(),h.insertStyleElement=K();var $=T()(z.A,h);const Y=z.A&&z.A.locals?z.A.locals:void 0;function X({dataError:a,dataFiltered:x,hasNoItems:u,emptyStates:i,loading:E,size:N}){return E?null:a?(0,t.jsx)("div",{className:Y.listEmptyStateWrapper,children:(0,t.jsx)(P.O,Object.assign({},i.errorDataState,{size:N,align:"vertical"}))}):x&&u?(0,t.jsx)("div",{className:Y.listEmptyStateWrapper,children:(0,t.jsx)(P.O,Object.assign({},i.noResultsState,{size:N,align:"vertical","data-test-id":"list__no-results"}))}):!x&&u?(0,t.jsx)("div",{className:Y.listEmptyStateWrapper,children:(0,t.jsx)(P.O,Object.assign({},i.noDataState,{size:N,align:"vertical","data-test-id":"list__no-data"}))}):null}var Z=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),q=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),ee=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.9_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),le=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),ue=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css"),Te={};Te.styleTagTransform=b(),Te.setAttributes=U(),Te.insert=j().bind(null,"head"),Te.domAPI=O(),Te.insertStyleElement=K();var ae=T()(ue.A,Te);const ye=ue.A&&ue.A.locals?ue.A.locals:void 0;function Se({children:a}){const{size:x="s"}=(0,le.hg)();return a?(0,t.jsxs)("div",{className:d()(ye.pinTopItem),"data-size":x,"data-test-id":"list__pin-top-group-item",children:[(0,t.jsx)("div",{children:a}),(0,t.jsx)(ee.c,{weight:"regular"})]}):null}function m({children:a}){const{size:x="s"}=(0,le.hg)();return a?(0,t.jsxs)("div",{className:d()(ye.pinBottomItem),"data-size":x,"data-test-id":"list__pin-bottom-group-item",children:[(0,t.jsx)(ee.c,{weight:"regular"}),(0,t.jsx)("div",{children:a})]}):null}var A=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js");const G={S:"s",M:"m",L:"l"},D={Xs:16,S:24},B={S:"s",M:"m"},pe={[G.S]:B.S,[G.M]:B.M,[G.L]:B.M};var fe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"),Pe={};Pe.styleTagTransform=b(),Pe.setAttributes=U(),Pe.insert=j().bind(null,"head"),Pe.domAPI=O(),Pe.insertStyleElement=K();var de=T()(fe.A,Pe);const Re=fe.A&&fe.A.locals?fe.A.locals:void 0,et=(0,n.forwardRef)(({size:a,onClick:x,tabIndex:u=-1,onKeyDown:i},E)=>{const N=S=>{S.stopPropagation(),x(S)};return(0,t.jsxs)("button",{className:Re.buttonClearValue,"data-size":a,onClick:N,"data-test-id":"button-clear-value",type:"button",ref:E,onKeyDown:i,tabIndex:u,children:[a===B.S&&(0,t.jsx)(ne.A,{size:16}),a===B.M&&(0,t.jsx)(ne.A,{})]})});function Be({clearButtonRef:a,showClearButton:x,size:u,onClear:i}){const E=(0,A.A)(i);return(0,n.useMemo)(()=>({id:"clear",active:!0,ref:a,show:x,render:N=>{const S=ie=>{N.onClick(ie),E(ie)};return(0,t.jsx)(et,Object.assign({},N,{size:pe[u],onClick:S}))}}),[a,E,x,u])}function He(a){var x;const u=(x=a==null?void 0:a.value.length)!==null&&x!==void 0?x:0;a==null||a.setSelectionRange(u,u)}function we(a){a==null||a.setSelectionRange(0,a==null?void 0:a.value.length)}function Ke(a){setTimeout(a,0)}function Ve(a){return(a==null?void 0:a.selectionStart)===0}function vt(a){var x;return(a==null?void 0:a.selectionStart)===((x=a==null?void 0:a.value)===null||x===void 0?void 0:x.length)}function yt({inputRef:a,setInputFocus:x=()=>{var ie;return(ie=a.current)===null||ie===void 0?void 0:ie.focus()},postfixButtons:u,prefixButtons:i=[],onButtonKeyDown:E=()=>{},readonly:N,submitKeys:S}){const[ie,ke]=(0,n.useState)(0),me=(0,A.A)(E),Me=(0,n.useCallback)(()=>i.map(()=>-1),[i]),[ve,Ce]=(0,n.useState)(Me),ce=(0,n.useCallback)(()=>u.map(()=>-1),[u]),[ge,De]=(0,n.useState)(ce),Le=(0,n.useCallback)((I,C)=>{const Q=C==="ArrowLeft"?-1:1,_e=F=>C==="ArrowLeft"?F>=0:F<i.length;for(let F=I+Q;_e(F);F+=Q)if(i[F].active&&i[F].show)return F;return I},[i]),je=(0,n.useCallback)((I,C)=>{const Q=C==="ArrowLeft"?-1:1,_e=F=>C==="ArrowLeft"?F>=0:F<u.length;for(let F=I+Q;_e(F);F+=Q)if(u[F].active&&u[F].show)return F;return I},[u]),be=(0,n.useCallback)(()=>{ke(0),Ce(Me),De(ce)},[Me,ce]),re=(0,n.useCallback)(()=>{be(),x()},[be,x]),Ae=(0,n.useCallback)(I=>{var C,Q;ke(-1),Ce(_e=>_e.map((F,dt)=>dt===I?0:-1)),De(ce),!((C=i[I])===null||C===void 0)&&C.active&&((Q=i[I].ref.current)===null||Q===void 0||Q.focus())},[ce,i]),ze=(0,n.useCallback)(I=>{var C,Q;ke(-1),Ce(Me),De(_e=>_e.map((F,dt)=>dt===I?0:-1)),!((C=u[I])===null||C===void 0)&&C.active&&((Q=u[I].ref.current)===null||Q===void 0||Q.focus())},[Me,u]),Ye=(0,n.useCallback)(I=>{if(be(),I.key==="ArrowRight"&&(N||vt(a.current))){const C=je(-1,I.key);C>=0&&ze(C)}if(I.key==="ArrowLeft"&&(N||Ve(a.current))){const C=Le(i.length,I.key);C>=0&&Ae(C)}},[je,Le,ze,Ae,a,i.length,N,be]),Ze=(0,n.useCallback)(I=>C=>{if(C.key==="ArrowRight"){const Q=Le(I,C.key);I===Q?(C.preventDefault(),re(),N&&Ke(()=>we(a.current))):Ae(Q)}C.key==="ArrowLeft"&&I<=i.length-1&&Ae(Le(I,C.key)),S.includes(C.key)&&Ke(()=>be()),me==null||me(C)},[me,i.length,Le,Ae,re,a,N,be,S]),st=(0,n.useCallback)(I=>C=>{if(C.key==="ArrowLeft"){const Q=je(I,C.key);I===Q?(C.preventDefault(),re(),N&&Ke(()=>we(a.current))):ze(Q)}C.key==="ArrowRight"&&I<=u.length-1&&ze(je(I,C.key)),S.includes(C.key)&&Ke(()=>be()),me==null||me(C)},[me,u.length,je,ze,re,a,N,be,S]),Xe=(0,n.useCallback)(()=>{Ke(()=>be())},[be]);return{inputTabIndex:ie,onInputKeyDown:Ye,setInitialTabIndices:be,prefixButtons:i.some(I=>I.show)?(0,t.jsx)(t.Fragment,{children:i.map((I,C)=>I.show?I.active?I.render({key:I.id,ref:I.ref,tabIndex:ve[C],onKeyDown:Ze(C),onClick:Xe}):I.render({key:I.id}):null)}):void 0,postfixButtons:u.some(I=>I.show)?(0,t.jsx)(t.Fragment,{children:u.map((I,C)=>I.show?I.active?I.render({key:I.id,ref:I.ref,tabIndex:ge[C],onKeyDown:st(C),onClick:Xe}):I.render({key:I.id}):null)}):void 0}}const _t={Text:"text",Password:"password",Number:"number",Tel:"tel",Email:"email",Url:"url"},Ge={Text:"text",Decimal:"decimal",Numeric:"numeric",Tel:"tel",Search:"search",Email:"email",Url:"url",None:"none"};var ot=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"),Ue={};Ue.styleTagTransform=b(),Ue.setAttributes=U(),Ue.insert=j().bind(null,"head"),Ue.domAPI=O(),Ue.insertStyleElement=K();var Tt=T()(ot.A,Ue);const xt=ot.A&&ot.A.locals?ot.A.locals:void 0;var rt=function(a,x){var u={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&x.indexOf(i)<0&&(u[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,i=Object.getOwnPropertySymbols(a);E<i.length;E++)x.indexOf(i[E])<0&&Object.prototype.propertyIsEnumerable.call(a,i[E])&&(u[i[E]]=a[i[E]]);return u};const ft=(0,n.forwardRef)((a,x)=>{var{name:u,value:i="",onChange:E,placeholder:N,id:S,className:ie,type:ke=_t.Text,inputMode:me=Ge.Text,disabled:Me=!1,readonly:ve=!1,autoComplete:Ce=!1,autoFocus:ce=!1,maxLength:ge,min:De,max:Le,step:je,onFocus:be,onBlur:re,onKeyDown:Ae,onPaste:ze,tabIndex:Ye=0,onClick:Ze,onMouseDown:st,spellCheck:Xe,pattern:I}=a,C=rt(a,["name","value","onChange","placeholder","id","className","type","inputMode","disabled","readonly","autoComplete","autoFocus","maxLength","min","max","step","onFocus","onBlur","onKeyDown","onPaste","tabIndex","onClick","onMouseDown","spellCheck","pattern"]);const Q=F=>{E==null||E(F.target.value,F)};let _e;switch(Ce){case!0:_e="on";break;case!1:_e="off";break;default:_e=Ce;break}return(0,t.jsx)("input",Object.assign({name:u,maxLength:ge,id:S,className:d()(ie,xt.inputPrivate),autoComplete:_e,ref:x,value:i,onChange:Q,placeholder:N,type:ke,inputMode:me,disabled:Me,readOnly:ve,onFocus:be,onBlur:re,onKeyDown:Ae,onPaste:ze,tabIndex:Ye,onClick:Ze,onMouseDown:st,min:De,max:Le,step:je,spellCheck:Xe,title:"",pattern:I,autoFocus:ce},(0,H.z7)(C)))});var gt=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js"),Ne=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js");const kt={S:"s",M:"m",L:"l"},tt={field:"search__field",input:"search__field-input",iconSun:"search__icon-sun",iconSearch:"search__icon-search",buttonClearValue:"button-clear-value"};var Fe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+search-private@0.4.27_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/styles.module.css"),nt={};nt.styleTagTransform=b(),nt.setAttributes=U(),nt.insert=j().bind(null,"head"),nt.domAPI=O(),nt.insertStyleElement=K();var at=T()(Fe.A,nt);const bt=Fe.A&&Fe.A.locals?Fe.A.locals:void 0;var ct=function(a,x){var u={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&x.indexOf(i)<0&&(u[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,i=Object.getOwnPropertySymbols(a);E<i.length;E++)x.indexOf(i[E])<0&&Object.prototype.propertyIsEnumerable.call(a,i[E])&&(u[i[E]]=a[i[E]]);return u};const Pt=(0,n.forwardRef)(function(x,u){var{size:i=kt.S,value:E="",onChange:N,loading:S,placeholder:ie,onKeyDown:ke,onFocus:me,onBlur:Me,onSubmit:ve,className:Ce,tabIndex:ce}=x,ge=ct(x,["size","value","onChange","loading","placeholder","onKeyDown","onFocus","onBlur","onSubmit","className","tabIndex"]);const[De="",Le]=(0,Ne.I)({value:E,defaultValue:"",onChange:N}),je=(0,n.useRef)(null),be=(0,n.useRef)(null),{t:re}=(0,M.Ym)("SearchPrivate"),Ye=Be({clearButtonRef:be,showClearButton:!!De,size:i,onClear:()=>{var Q;Le(""),(Q=je.current)===null||Q===void 0||Q.focus()}}),{postfixButtons:Ze,inputTabIndex:st,onInputKeyDown:Xe}=yt({inputRef:je,postfixButtons:(0,n.useMemo)(()=>[Ye],[Ye]),readonly:!1,submitKeys:["Enter","Space"]}),I=(0,n.useCallback)(Q=>{var _e;ke&&ke(Q),Xe(Q),Q.key==="Enter"&&(!((_e=je.current)===null||_e===void 0)&&_e.value)&&ve&&ve(je.current.value)},[Xe,ke,ve]),C=(0,n.useCallback)(Q=>{me&&me(Q),He(je.current)},[me]);return(0,t.jsxs)("div",Object.assign({className:d()(bt.container,Ce)},(0,H.z7)(ge),{"data-size":i,children:[(0,t.jsx)("span",{className:bt.prefix,children:S?(0,t.jsx)(gt.b,{"data-test-id":tt.iconSun}):(0,t.jsx)(J.A,{"data-test-id":tt.iconSearch})}),(0,t.jsx)(ft,{value:De,onChange:Le,onKeyDown:I,onFocus:C,onBlur:Me,tabIndex:ce!=null?ce:st,ref:(0,o.A)(u,je),placeholder:ie!=null?ie:re("placeholder"),type:"text","data-test-id":tt.input}),(0,t.jsx)("span",{className:bt.postfix,children:Ze})]}))});var Ot=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),Ct=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),Oe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css"),xe={};xe.styleTagTransform=b(),xe.setAttributes=U(),xe.insert=j().bind(null,"head"),xe.domAPI=O(),xe.insertStyleElement=K();var lt=T()(Oe.A,xe);const Je=Oe.A&&Oe.A.locals?Oe.A.locals:void 0;function it({search:a,itemRef:x}){const{size:u="s",firstItemId:i}=(0,le.hg)(),E=N=>{var S;["ArrowDown","ArrowUp"].includes(N.key)&&N.preventDefault(),(S=a==null?void 0:a.onKeyDown)===null||S===void 0||S.call(a,N)};return a?(0,t.jsx)("div",{className:d()(Ct.A.listItem,Je.searchItem),"data-size":u,"data-test-id":"list__search-item",children:(0,t.jsx)(Pt,Object.assign({size:u,tabIndex:Ot.$.search===i?0:-1,onKeyDown:E,onFocus:Z.d},a,{ref:x}))}):null}var Qe=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),ut=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css");const Et={m:40,s:32,l:48};var _=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css"),y={};y.styleTagTransform=b(),y.setAttributes=U(),y.insert=j().bind(null,"head"),y.domAPI=O(),y.insertStyleElement=K();var g=T()(_.A,y);const l=_.A&&_.A.locals?_.A.locals:void 0;var f=function(a,x){var u={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&x.indexOf(i)<0&&(u[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,i=Object.getOwnPropertySymbols(a);E<i.length;E++)x.indexOf(i[E])<0&&Object.prototype.propertyIsEnumerable.call(a,i[E])&&(u[i[E]]=a[i[E]]);return u};const se=(0,n.forwardRef)((a,x)=>{var u,{items:i,pinTop:E,pinBottom:N,onKeyDown:S,onBlur:ie,onFocus:ke,tabIndex:me,active:Me,scroll:ve,nested:Ce,search:ce,searchItem:ge,scrollRef:De,scrollContainerRef:Le,onScroll:je,footer:be,loading:re,limitedScrollHeight:Ae,untouchableScrollbars:ze,className:Ye,noDataState:Ze,noResultsState:st,errorDataState:Xe,dataError:I,dataFiltered:C,scrollToSelectedItem:Q=!1,virtualized:_e=!1,scrollContainerClassName:F,barHideStrategy:dt="never"}=a,At=f(a,["items","pinTop","pinBottom","onKeyDown","onBlur","onFocus","tabIndex","active","scroll","nested","search","searchItem","scrollRef","scrollContainerRef","onScroll","footer","loading","limitedScrollHeight","untouchableScrollbars","className","noDataState","noResultsState","errorDataState","dataError","dataFiltered","scrollToSelectedItem","virtualized","scrollContainerClassName","barHideStrategy"]);const{size:We="s",flattenItems:ht,focusFlattenItems:Mt}=(0,le.hg)(),{value:It,isSelectionSingle:Lt}=(0,Qe.VG)(),mt=(0,n.useRef)(null),St=(0,q.We)(i),Rt=(0,q.We)(E),Wt=(0,q.We)(N),[qe,he]=(0,n.useState)({virtualizer:null,browser:null,measured:!1}),Nt=p({noDataState:Ze,noResultsState:st,errorDataState:Xe}),wt=i.length===0,{selectedItemIndex:zt,selectedItem:Ee}=(0,n.useMemo)(()=>{const Ie={selectedItemIndex:-1,selectedItem:void 0};if(!Q||!It)return Ie;const $e=Lt?ht[It]:ht[It[0]];if(!($e!=null&&$e.id))return Ie;const Bt=Object.values(Mt),Kt=Bt.findIndex($t=>$t.originalId===$e.id);return Kt<0?Ie:{selectedItemIndex:Kt,selectedItem:Bt[Kt]}},[ht,Mt,Lt,Q,It]),pt=(0,s.Te)({count:St.length,getScrollElement:()=>ve?mt.current:null,estimateSize:()=>Et[We],enabled:_e,overscan:5}),Ft=pt.getVirtualItems();(0,n.useEffect)(()=>{qe.measured||(pt.measure(),he(Ie=>Object.assign(Object.assign({},Ie),{measured:!0})))},[qe.measured,pt]);const Xt=ve&&Q&&_e;(0,n.useEffect)(()=>{var Ie;if(Xt){if(!qe.measured||zt<0||!Ee||qe.virtualizer===Ee.originalId||Ee!=null&&Ee.itemRef&&(!((Ie=mt.current)===null||Ie===void 0)&&Ie.contains(Ee==null?void 0:Ee.itemRef.current)))return;pt.scrollToIndex(zt,{align:"center"}),he($e=>Object.assign(Object.assign({},$e),{virtualizer:Ee.originalId}))}},[Xt,qe,Ee,zt,pt]);const Ht=!!(!((u=Ee==null?void 0:Ee.itemRef)===null||u===void 0)&&u.current);(0,n.useEffect)(()=>{var Ie,$e;Ee&&qe.virtualizer!==null&&Ht&&qe.virtualizer!==qe.browser&&(($e=(Ie=Ee.itemRef)===null||Ie===void 0?void 0:Ie.current)===null||$e===void 0||$e.scrollIntoView({block:"center"}),he(Bt=>Object.assign(Object.assign({},Bt),{browser:Ee.originalId})))},[qe,Ee,Ht,zt]);const Vt=(0,n.useMemo)(()=>re&&(0,t.jsx)("div",{role:"spinbutton",tabIndex:-1,className:l.loader,"data-size":We,"data-no-items":wt||void 0,"data-test-id":"list__loader",children:(0,t.jsx)(oe.y,{size:We==="l"?"s":"xs"})}),[wt,re,We]),Gt=(0,n.useMemo)(()=>(0,t.jsxs)(t.Fragment,{children:[_e?(0,t.jsx)("div",{className:l.virtualizedContainer,style:{height:pt.getTotalSize()},tabIndex:-1,children:Ft.map(Ie=>(0,t.jsx)("div",{"data-index":Ie.index,ref:pt.measureElement,tabIndex:-1,className:l.virtualizedPositionBox,style:{transform:`translateY(${Ie.start}px)`},children:St[Ie.index]},Ie.key))}):St,Vt,(0,t.jsx)(X,{loading:re,dataError:I,emptyStates:Nt,hasNoItems:wt,dataFiltered:C!=null?C:!!(ce!=null&&ce.value),size:We})]}),[I,C,Nt,wt,St,re,Vt,ce==null?void 0:ce.value,We,Ft,_e,pt]),Yt=(0,n.useCallback)(()=>{var Ie,$e;Ee&&(($e=(Ie=Ee==null?void 0:Ee.itemRef)===null||Ie===void 0?void 0:Ie.current)===null||$e===void 0||$e.scrollIntoView({block:"center"}))},[Ee]),Qt=(0,t.jsxs)("ul",Object.assign({className:d()(ut.A.listContainer,Ye),ref:x,onKeyDown:S,tabIndex:me,onFocus:ke,onBlur:ie,"data-active":Me||void 0,role:"menu"},(0,H.z7)(At),{children:[(Number(E==null?void 0:E.length)>0||ce)&&(0,t.jsxs)(Se,{children:[ce&&(0,t.jsx)(it,Object.assign({search:ce},ge)),Number(E==null?void 0:E.length)>0&&Rt]}),ve?(0,t.jsxs)(R.O,{className:d()({[ut.A.scrollContainerS]:ve&&Ae&&We==="s",[ut.A.scrollContainerM]:ve&&Ae&&We==="m",[ut.A.scrollContainerL]:ve&&Ae&&We==="l"},F),barHideStrategy:dt,size:"s",ref:(0,o.A)(mt,Le),untouchableScrollbars:ze,onScroll:je,onInitialized:Yt,children:[Gt,(0,t.jsx)("div",{className:l.scrollStub,ref:De})]}):(0,t.jsx)(t.Fragment,{children:Gt}),Number(N==null?void 0:N.length)>0&&(0,t.jsx)(m,{children:Wt}),be&&(0,t.jsx)("div",{className:l.footer,onFocus:Z.d,children:be})]}));return Ce?(0,t.jsx)("li",{style:{listStyleType:"none"},role:"menuitem",children:Qt}):Qt})}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js":((k,c,e)=>{e.d(c,{bN:()=>d,om:()=>o,wG:()=>r,x5:()=>s});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=(0,t.createContext)({}),r=()=>(0,t.useContext)(s),d=(0,t.createContext)({}),o=()=>(0,t.useContext)(d)}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js":((k,c,e)=>{e.d(c,{L:()=>r,m:()=>s});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=(0,t.createContext)({handleListKeyDownFactory:()=>()=>{}}),r=()=>(0,t.useContext)(s)}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js":((k,c,e)=>{e.d(c,{Tr:()=>R,hg:()=>n});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),d=function(H,J){var ne={};for(var M in H)Object.prototype.hasOwnProperty.call(H,M)&&J.indexOf(M)<0&&(ne[M]=H[M]);if(H!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,M=Object.getOwnPropertySymbols(H);p<M.length;p++)J.indexOf(M[p])<0&&Object.prototype.propertyIsEnumerable.call(H,M[p])&&(ne[M[p]]=H[M[p]]);return ne};const o=(0,s.createContext)({flattenItems:{},focusFlattenItems:{},firstItemId:r.$.default});function n(){return(0,s.useContext)(o)}function oe({size:H,marker:J,flattenItems:ne,focusFlattenItems:M,contentRender:p,firstItemId:P,virtualized:te}){return{size:H,marker:J,contentRender:p,flattenItems:ne,focusFlattenItems:M,firstItemId:P,virtualized:te}}function R(H){var{children:J}=H,ne=d(H,["children"]);return(0,t.jsx)(o.Provider,{value:oe(ne),children:J})}}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js":((k,c,e)=>{e.d(c,{K:()=>s,x:()=>r});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const s=(0,t.createContext)({closeDroplist:()=>{},closeDroplistOnItemClick:!1}),r=()=>(0,t.useContext)(s)}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js":((k,c,e)=>{e.d(c,{VG:()=>M,WM:()=>ne});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),d=function(p,P){var te={};for(var T in p)Object.prototype.hasOwnProperty.call(p,T)&&P.indexOf(T)<0&&(te[T]=p[T]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,T=Object.getOwnPropertySymbols(p);v<T.length;v++)P.indexOf(T[v])<0&&Object.prototype.propertyIsEnumerable.call(p,T[v])&&(te[T[v]]=p[T[v]]);return te};const o=(0,s.createContext)({value:void 0,onChange:void 0,mode:void 0});function n(p){return"mode"in p&&p.mode==="multiple"}function oe(p){return"mode"in p&&p.mode==="single"}function R({children:p}){return(0,t.jsx)(o.Provider,{value:{mode:"none"},children:p})}function H({value:p,defaultValue:P,onChange:te,children:T}){const[v,O]=(0,r.I)({value:p,defaultValue:P,onChange:te}),W=(0,s.useCallback)(j=>O(L=>{if(j!==L)return j}),[O]);return(0,t.jsx)(o.Provider,{value:{value:v,onChange:W,mode:"single",isSelectionSingle:!0,isSelectionMultiple:!1,setValue:O},children:T})}function J({value:p,defaultValue:P,onChange:te,children:T}){const[v,O]=(0,r.I)({value:p,defaultValue:P,onChange:te}),W=(0,s.useCallback)(j=>{O(L=>{if(Array.isArray(L))return L.includes(j)?L.filter(U=>U!==j):L.concat(j);if(L===void 0)return Array.isArray(j)?j:[j]})},[O]);return(0,t.jsx)(o.Provider,{value:{value:v,onChange:W,mode:"multiple",isSelectionSingle:!1,isSelectionMultiple:!0,setValue:O},children:T})}function ne(p){var{children:P}=p,te=d(p,["children"]);return oe(te)?(0,t.jsx)(H,Object.assign({},te,{children:P})):n(te)?(0,t.jsx)(J,Object.assign({},te,{children:P})):(0,t.jsx)(R,{children:P})}function M(){return(0,s.useContext)(o)}}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js":((k,c,e)=>{e.d(c,{d:()=>r});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js");function r({mainRef:d,btnRef:o,focusFlattenItems:n,keyboardNavigationRef:oe,hasListInFocusChain:R,firstItemId:H}){const J=R?void 0:H,[ne,M]=(0,t.useState)(()=>J),p=(0,t.useRef)(J),P=(0,t.useCallback)(()=>{M(J),p.current=J},[J]),te=(0,t.useCallback)((v,O)=>W=>{var j,L,U,w,K,V,b,z,h,$;switch(W.key){case"ArrowDown":{if(p.current!==void 0){const Y=v.findIndex(ee=>ee===p.current),X=Math.min(Y+1,v.length-1),Z=v[X],q=n[Z];p.current=Z,M(Z),q.type!=="group"&&((L=(j=q.itemRef)===null||j===void 0?void 0:j.current)===null||L===void 0||L.focus())}else{const Y=v[0],X=n[Y];p.current=Y,M(Y),X.type!=="group"&&((w=(U=X.itemRef)===null||U===void 0?void 0:U.current)===null||w===void 0||w.focus())}W.stopPropagation(),W.preventDefault();return}case"ArrowUp":{if(v[0]===p.current)R&&n[v[0]].parentId===s.$.default&&(p.current=void 0,M(void 0),(K=d==null?void 0:d.current)===null||K===void 0||K.focus());else if(p.current!==void 0){const Y=v.findIndex(ee=>ee===p.current),X=Math.max(Y-1,0),Z=v[X],q=n[Z];p.current=Z,M(Z),q.type!=="group"&&((b=(V=q.itemRef)===null||V===void 0?void 0:V.current)===null||b===void 0||b.focus())}W.stopPropagation(),W.preventDefault();return}case"ArrowRight":{if(p.current!==void 0&&O.includes(p.current)){const X=n[p.current].items[0],Z=n[X];p.current=X,M(X),setTimeout(()=>{var q,ee;return(ee=(q=Z.itemRef)===null||q===void 0?void 0:q.current)===null||ee===void 0?void 0:ee.focus()},0),W.stopPropagation(),W.preventDefault()}return}case"Tab":{p.current!==void 0?R?(W.preventDefault(),W.stopPropagation(),p.current=void 0,M(void 0),(z=d==null?void 0:d.current)===null||z===void 0||z.focus()):P():o&&!W.shiftKey?(h=o==null?void 0:o.current)===null||h===void 0||h.focus():($=d==null?void 0:d.current)===null||$===void 0||$.focus();return}default:return}},[n,R,d,P,o]),T=(0,t.useCallback)(v=>{var O,W;M(v),p.current=v;const j=n[v];(W=(O=j==null?void 0:j.itemRef)===null||O===void 0?void 0:O.current)===null||W===void 0||W.focus()},[n]);return(0,t.useImperativeHandle)(oe,()=>({focusItem:T}),[T]),{resetActiveItemId:P,activeItemId:ne,forceUpdateActiveItemId:T,handleListKeyDownFactory:te}}}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>T});var t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(t),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),d=e.n(r),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),n=e.n(o),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n(oe),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),J=e.n(H),ne=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=e.n(ne),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),P={};P.styleTagTransform=M(),P.setAttributes=R(),P.insert=n().bind(null,"head"),P.domAPI=d(),P.insertStyleElement=J();var te=s()(p.A,P);const T=p.A&&p.A.locals?p.A.locals:void 0}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js":((k,c,e)=>{e.d(c,{$:()=>t});const t={default:"~main",pinTop:"~pinTop",pinBottom:"~pinBottom",footer:"~footer",search:"~search",dropFocus:"~dropFocus"}}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js":((k,c,e)=>{e.d(c,{cE:()=>d,mr:()=>s,yz:()=>r});var t=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js");const s=o=>`${t.$.footer}__${o}`,r=(o,n)=>[o,n].join("-"),d=o=>r(t.$.default,o)}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js":((k,c,e)=>{e.d(c,{d:()=>t});const t=s=>{s.stopPropagation()}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js":((k,c,e)=>{e.d(c,{y:()=>w});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(s),d=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),o=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),oe=e.n(n),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),H=e.n(R),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),ne=e.n(J),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),p=e.n(M),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),te=e.n(P),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),v=e.n(T),O=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"),W={};W.styleTagTransform=v(),W.setAttributes=p(),W.insert=ne().bind(null,"head"),W.domAPI=H(),W.insertStyleElement=te();var j=oe()(O.A,W);const L=O.A&&O.A.locals?O.A.locals:void 0;var U=function(K,V){var b={};for(var z in K)Object.prototype.hasOwnProperty.call(K,z)&&V.indexOf(z)<0&&(b[z]=K[z]);if(K!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,z=Object.getOwnPropertySymbols(K);h<z.length;h++)V.indexOf(z[h])<0&&Object.prototype.propertyIsEnumerable.call(K,z[h])&&(b[z[h]]=K[z[h]]);return b};function w(K){var{size:V=o.K.S,className:b}=K,z=U(K,["size","className"]);return V===o.K.XXS?(0,t.jsxs)("svg",Object.assign({viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r()(L.spinner,b)},(0,d.z7)(z),{"data-size":V,children:[(0,t.jsx)("circle",{opacity:"0.24",cx:"4",cy:"4",r:"3",strokeWidth:"1.5"}),(0,t.jsx)("path",{d:"M1 4C1 2.34315 2.34315 1 4 1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):V===o.K.XS?(0,t.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r()(L.spinner,b)},(0,d.z7)(z),{"data-size":V,children:[(0,t.jsx)("circle",{opacity:"0.24",cx:"8",cy:"8",r:"6",strokeWidth:"1.5"}),(0,t.jsx)("path",{d:"M2 8C2 4.68629 4.68629 2 8 2",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):(0,t.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r()(L.spinner,b)},(0,d.z7)(z),{"data-size":V,children:[(0,t.jsx)("circle",{opacity:"0.24",cx:"12",cy:"12",r:"9",strokeWidth:"1.5"}),(0,t.jsx)("path",{d:"M3 12C3 7.02944 7.02944 3 12 3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/Checkbox.js":((k,c,e)=>{e.d(c,{S:()=>z});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/minus/index.js"),n=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),oe=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),R=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),H=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ne=e.n(J),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),p=e.n(M),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),te=e.n(P),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),v=e.n(T),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),W=e.n(O),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(j),U=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/styles.module.css"),w={};w.styleTagTransform=L(),w.setAttributes=v(),w.insert=te().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=W();var K=ne()(U.A,w);const V=U.A&&U.A.locals?U.A.locals:void 0;var b=function(h,$){var Y={};for(var X in h)Object.prototype.hasOwnProperty.call(h,X)&&$.indexOf(X)<0&&(Y[X]=h[X]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Z=0,X=Object.getOwnPropertySymbols(h);Z<X.length;Z++)$.indexOf(X[Z])<0&&Object.prototype.propertyIsEnumerable.call(h,X[Z])&&(Y[X[Z]]=h[X[Z]]);return Y};function z(h){var{inputRef:$,indeterminate:Y,indeterminateDefault:X,onChange:Z,"data-test-id":q,size:ee=oe.SK.M}=h,le=b(h,["inputRef","indeterminate","indeterminateDefault","onChange","data-test-id","size"]);const ue=(0,r.useRef)(null),Te=(0,s.A)(ue,$),[ae,ye]=(0,d.iC)(Y,X),Se=(0,r.useCallback)(A=>{Z==null||Z(A),ye(!1)},[Z,ye]);(0,r.useEffect)(()=>{ue.current&&(ue.current.indeterminate=!!ae)},[ue,ae]);const m=(0,r.useMemo)(()=>(0,R.J)(ee),[ee]);return(0,t.jsx)(H.Q,Object.assign({},le,{size:ee,onChange:Se,"data-test-id":q,ref:Te,render:function(G){const D=(0,R.V)(Object.assign(Object.assign({},G),{indeterminate:!!ae}));return(0,t.jsxs)("div",Object.assign({className:V.container},D,{children:[(0,t.jsx)("div",Object.assign({className:V.box},D)),(0,t.jsx)("div",Object.assign({className:V.icon},D,{children:ae?(0,t.jsx)(o.A,{size:m}):(0,t.jsx)(n.A,{size:m})}))]}))}}))}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js":((k,c,e)=>{e.d(c,{Q:()=>V});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(s),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),n=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),oe=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),H=e.n(R),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),ne=e.n(J),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),p=e.n(M),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),te=e.n(P),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=e.n(T),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=e.n(O),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css"),L={};L.styleTagTransform=W(),L.setAttributes=te(),L.insert=p().bind(null,"head"),L.domAPI=ne(),L.insertStyleElement=v();var U=H()(j.A,L);const w=j.A&&j.A.locals?j.A.locals:void 0;var K=function(b,z){var h={};for(var $ in b)Object.prototype.hasOwnProperty.call(b,$)&&z.indexOf($)<0&&(h[$]=b[$]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Y=0,$=Object.getOwnPropertySymbols(b);Y<$.length;Y++)z.indexOf($[Y])<0&&Object.prototype.propertyIsEnumerable.call(b,$[Y])&&(h[$[Y]]=b[$[Y]]);return h};const V=(0,d.forwardRef)(function(z,h){var{render:$,checked:Y,defaultChecked:X,onChange:Z,onBlur:q,onFocus:ee,disabled:le,className:ue,size:Te=n.SK.M,mode:ae=n.g.Checkbox,onKeyUp:ye,"data-test-id":Se}=z,m=K(z,["render","checked","defaultChecked","onChange","onBlur","onFocus","disabled","className","size","mode","onKeyUp","data-test-id"]);const[A,G]=(0,o.iC)(Y,!!X,Z),[D,B]=(0,d.useState)(!1),[pe,fe]=(0,d.useState)(!1),Pe={disabled:!!le,focusVisible:D,checked:A,hover:pe,size:Te};return(0,t.jsxs)("span",Object.assign({role:ae,className:r()(ue,w.toggleLayout),"data-size":Te,"data-test-id":Se,onMouseEnter:()=>fe(!0),onMouseLeave:()=>fe(!1),onKeyUp:ye},(0,oe.V)(Pe),{children:[$(Pe),(0,t.jsx)("input",Object.assign({},m,{"data-test-id":`${Se}-native-input`,ref:h,type:ae,className:w.togglePrivate,checked:A,disabled:le,onChange:de=>G(de.target.checked),onFocus:de=>{B(de.target.matches(":focus-visible")),ee==null||ee(de)},onBlur:de=>{B(!1),q==null||q(de)}}))]}))})}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js":((k,c,e)=>{e.d(c,{SK:()=>s,ds:()=>d,g:()=>t});const t={Checkbox:"checkbox",Radio:"radio"},s={S:"s",M:"m"},r={Star:"star",Heart:"heart"},d={Single:"single",Multiple:"multiple"}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js":((k,c,e)=>{e.d(c,{J:()=>r,V:()=>s});var t=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js");function s(d){return Object.entries(d).reduce(function(o,[n,oe]){return o[`data-${n.toLowerCase()}`]=oe,o},{})}function r(d){switch(d){case t.SK.S:return 16;case t.SK.M:default:return 24}}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((k,c,e)=>{e.d(c,{m:()=>Se});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),s=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(s),d=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),o=e.n(d),n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),oe=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),R=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const H=m=>m?m.offsetHeight<m.scrollHeight||m.offsetWidth<m.scrollWidth:!1,J=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],ne="...",M=({text:m,element:A,truncatedElement:G})=>{if(A&&G&&H(A)){const D=A.scrollWidth/m.length;let B=m;for(const{potentialDelimiterWidth:pe,leftHalfDelta:fe,rightHalfDelta:Pe}of J){const de=Math.floor((A.offsetWidth/D-pe)/2),Re=m.slice(0,de-fe),et=m.slice(m.length-de+Pe,m.length);if(B=`${Re}${ne}${et}`,G.innerHTML=B,G.scrollWidth<=A.offsetWidth-1)break}return B}return m};var p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(p),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),T=e.n(te),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),O=e.n(v),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),j=e.n(W),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),U=e.n(L),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(w),V=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),b={};b.styleTagTransform=K(),b.setAttributes=j(),b.insert=O().bind(null,"head"),b.domAPI=T(),b.insertStyleElement=U();var z=P()(V.A,b);const h=V.A&&V.A.locals?V.A.locals:void 0;var $=function(m,A){var G={};for(var D in m)Object.prototype.hasOwnProperty.call(m,D)&&A.indexOf(D)<0&&(G[D]=m[D]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var B=0,D=Object.getOwnPropertySymbols(m);B<D.length;B++)A.indexOf(D[B])<0&&Object.prototype.propertyIsEnumerable.call(m,D[B])&&(G[D[B]]=m[D[B]]);return G};function Y(m){var{text:A,className:G,tooltipClassName:D,hideTooltip:B,placement:pe}=m,fe=$(m,["text","className","tooltipClassName","hideTooltip","placement"]);const[Pe,de]=(0,n.useState)(!1),[Re,et]=(0,n.useState)(A),Be=(0,n.useRef)(null),He=(0,n.useRef)(null);(0,n.useEffect)(()=>{const Ke=o()(()=>{et(M({element:Be.current,truncatedElement:He.current,text:A})),de(H(Be.current))},50);Ke();const Ve=new ResizeObserver(Ke);return Be.current&&Ve.observe(Be.current),()=>{Ve.disconnect()}},[Pe,A,B]);const we=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{ref:Be,className:h.fullText,"data-test-id":"full-text",children:A}),(0,t.jsx)("span",{ref:He,className:h.truncatedText,"data-test-id":"truncated-text",children:Re})]});return(0,t.jsx)("span",Object.assign({className:r()(h.wrapper,G)},(0,R.z7)(fe),{children:Pe&&!B?(0,t.jsx)(oe.m,{tip:A,placement:pe,hoverDelayOpen:500,triggerClassName:h.textContainer,className:D,children:we}):we}))}var X=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),Z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),q={};q.styleTagTransform=K(),q.setAttributes=j(),q.insert=O().bind(null,"head"),q.domAPI=T(),q.insertStyleElement=U();var ee=P()(Z.A,q);const le=Z.A&&Z.A.locals?Z.A.locals:void 0;var ue=function(m,A){var G={};for(var D in m)Object.prototype.hasOwnProperty.call(m,D)&&A.indexOf(D)<0&&(G[D]=m[D]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var B=0,D=Object.getOwnPropertySymbols(m);B<D.length;B++)A.indexOf(D[B])<0&&Object.prototype.propertyIsEnumerable.call(m,D[B])&&(G[D[B]]=m[D[B]]);return G};function Te(m){var{text:A,className:G,tooltipClassName:D,hideTooltip:B,maxLines:pe=1,placement:fe}=m,Pe=ue(m,["text","className","tooltipClassName","hideTooltip","maxLines","placement"]);const de=(0,n.useRef)(null),[Re,et]=(0,n.useState)(!1),Be=(0,n.useCallback)(()=>{et(H(de.current))},[]);(0,X.N)(()=>{de.current&&Be()},[A,Be]),(0,n.useEffect)(()=>{const we=o()(()=>{Be()},50),Ke=new ResizeObserver(we);return de.current&&(Be(),Ke.observe(de.current)),()=>{Ke.disconnect()}},[Re,B,Be]);const He=(0,t.jsx)("span",Object.assign({ref:de,className:r()(pe>1?le.text2AndMoreLines:le.text1Line,G,{[le.ellipsis]:!de.current||Re}),style:{"--max-lines":pe}},(0,R.z7)(Pe),{children:A}));return Re&&!B?(0,t.jsx)(oe.m,{tip:A,placement:fe,hoverDelayOpen:500,className:D,triggerClassName:le.tooltipTrigger,children:He}):He}const ae={Middle:"middle",End:"end"};var ye=function(m,A){var G={};for(var D in m)Object.prototype.hasOwnProperty.call(m,D)&&A.indexOf(D)<0&&(G[D]=m[D]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var B=0,D=Object.getOwnPropertySymbols(m);B<D.length;B++)A.indexOf(D[B])<0&&Object.prototype.propertyIsEnumerable.call(m,D[B])&&(G[D[B]]=m[D[B]]);return G};function Se(m){var{variant:A=ae.End}=m,G=ye(m,["variant"]);switch(A){case ae.Middle:return(0,t.jsx)(Y,Object.assign({},G));case ae.End:default:return(0,t.jsx)(Te,Object.assign({},G))}}}),"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js":((k,c,e)=>{e.d(c,{I:()=>s});var t=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function s({value:r,onChange:d,defaultValue:o}){return(0,t.iC)(r,o,n=>{const oe=typeof n=="function"?n(r):n;d==null||d(oe)})}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.dropdownContainer--Qprcr{
  padding-top:var(--space-drop-list-container-vertical-padding, 8px);
  padding-bottom:var(--space-drop-list-container-vertical-padding, 8px);
  border-radius:var(--radius-drop-list-container, 8px);
  overflow:hidden;
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  box-shadow:var(--box-shadow-elevation-level3, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 8px 16px 0px rgba(0, 0, 0, 0.0784313725));
}

.defaultTriggerClassName--xe4OV{
  --offset:var(--space-drop-list-drop-offset, 4px);
}`,""]),o.locals={dropdownContainer:"dropdownContainer--Qprcr",defaultTriggerClassName:"defaultTriggerClassName--xe4OV"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.inputPrivate--NMql6{
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
.inputPrivate--NMql6::-moz-placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--NMql6::placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--NMql6:-moz-read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.inputPrivate--NMql6:read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.inputPrivate--NMql6:-moz-placeholder-shown{
  text-overflow:ellipsis;
}
.inputPrivate--NMql6:placeholder-shown{
  text-overflow:ellipsis;
}
.inputPrivate--NMql6[disabled]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--NMql6[type=number]{
  -moz-appearance:textfield;
}
.inputPrivate--NMql6[type=number]::-webkit-outer-spin-button, .inputPrivate--NMql6[type=number]::-webkit-inner-spin-button{
  margin:0;
  -webkit-appearance:none;
}`,""]),o.locals={inputPrivate:"inputPrivate--NMql6"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.buttonClearValue--kshjn{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonClearValue--kshjn[data-size=s]{
  width:var(--size-input-private-button-clear-value-s, 16px);
  height:var(--size-input-private-button-clear-value-s, 16px);
  border-radius:var(--radius-input-private-button-clear-value-s, 8px);
}
.buttonClearValue--kshjn[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.buttonClearValue--kshjn[data-size=m]{
  width:var(--size-input-private-button-clear-value-m, 24px);
  height:var(--size-input-private-button-clear-value-m, 24px);
  border-radius:var(--radius-input-private-button-clear-value-m, 12px);
}
.buttonClearValue--kshjn[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonClearValue--kshjn:hover{
  cursor:pointer;
  color:var(--sys-red-text-support, #ae514c);
}
.buttonClearValue--kshjn:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-support, #ae514c);
  outline-color:var(--sys-red-accent-default, #cb3f3e);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonClearValue--kshjn:active{
  color:var(--sys-red-text-main, #7a2d2d);
}
.buttonClearValue--kshjn[data-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),o.locals={buttonClearValue:"buttonClearValue--kshjn"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.checkbox--IChMq{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--dimension-3m, 24px);
  height:var(--dimension-3m, 24px);
}

.beforeContent--SnfLb{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.beforeContent--SnfLb svg{
  max-width:100%;
  max-height:100%;
}

.expandableIcon--Q6iyC{
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  fill:currentColor;
}

.markerContainer--t91Et{
  padding-top:var(--space-drop-list-item-marker-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-marker-container-vertical-padding, 4px);
  pointer-events:none;
  position:absolute;
  top:0;
  left:0;
  box-sizing:border-box;
  height:100%;
}
.markerContainer--t91Et:before{
  width:var(--size-drop-list-item-marker, 4px);
  border-bottom-right-radius:var(--radius-drop-list-marker, 4px);
  border-top-right-radius:var(--radius-drop-list-marker, 4px);
  content:"";
  display:block;
  height:100%;
}

.droplistItem--WHjCX{
  width:100%;
}
.droplistItem--WHjCX[data-size=s][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px));
}
.droplistItem--WHjCX[data-size=s][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-s, 24px));
}
.droplistItem--WHjCX[data-size=s] .headline--aGakQ{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--WHjCX[data-size=m][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px));
}
.droplistItem--WHjCX[data-size=m][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-m, 24px));
}
.droplistItem--WHjCX[data-size=m] .headline--aGakQ{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--WHjCX[data-size=l][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px));
}
.droplistItem--WHjCX[data-size=l][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-l, 24px));
}
.droplistItem--WHjCX[data-size=l] .headline--aGakQ{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--WHjCX[data-non-pointer]{
  cursor:inherit;
}

.innerWrapper--moIAC[data-disabled] .expandableIcon--Q6iyC{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.innerWrapper--moIAC[data-disabled] .beforeContent--SnfLb{
  opacity:var(--opacity-a064, 0.64);
}
.innerWrapper--moIAC[data-disabled] .droplistItem--WHjCX{
  cursor:not-allowed;
}
.innerWrapper--moIAC[data-has-checked][data-variant=single]::before, .innerWrapper--moIAC[data-checked][data-variant=single]::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.innerWrapper--moIAC[data-has-checked][data-variant=single]:hover::before, .innerWrapper--moIAC[data-checked][data-variant=single]:hover::before{
  opacity:var(--opacity-a016, 0.16);
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.innerWrapper--moIAC[data-has-checked] .markerContainer--t91Et:before, .innerWrapper--moIAC[data-checked] .markerContainer--t91Et:before{
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.innerWrapper--moIAC[data-has-checked] .droplistItem--WHjCX:focus-visible[data-variant=single], .innerWrapper--moIAC[data-checked] .droplistItem--WHjCX:focus-visible[data-variant=single]{
  outline-color:var(--sys-primary-accent-default, #794ed3);
}
.innerWrapper--moIAC[data-has-checked][data-disabled] .markerContainer--t91Et:before, .innerWrapper--moIAC[data-checked][data-disabled] .markerContainer--t91Et:before{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}

.content--svUXi{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}`,""]),o.locals={checkbox:"checkbox--IChMq",beforeContent:"beforeContent--SnfLb",expandableIcon:"expandableIcon--Q6iyC",markerContainer:"markerContainer--t91Et",droplistItem:"droplistItem--WHjCX",headline:"headline--aGakQ",innerWrapper:"innerWrapper--moIAC",content:"content--svUXi"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.pinTopItem--DFR8V{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinTopItem--DFR8V[data-size=s]{
  padding-bottom:var(--radius-drop-list-container, 8px);
  gap:var(--radius-drop-list-container, 8px);
}
.pinTopItem--DFR8V[data-size=m]{
  padding-bottom:var(--radius-drop-list-container, 8px);
  gap:var(--radius-drop-list-container, 8px);
}
.pinTopItem--DFR8V[data-size=l]{
  padding-bottom:var(--radius-drop-list-container, 8px);
  gap:var(--radius-drop-list-container, 8px);
}
.pinTopItem--DFR8V li,
.pinTopItem--DFR8V ul{
  list-style-type:none;
}

.pinBottomItem--jdALf{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinBottomItem--jdALf[data-size=s]{
  padding-top:var(--radius-drop-list-container, 8px);
  gap:var(--radius-drop-list-container, 8px);
}
.pinBottomItem--jdALf[data-size=m]{
  padding-top:var(--radius-drop-list-container, 8px);
  gap:var(--radius-drop-list-container, 8px);
}
.pinBottomItem--jdALf[data-size=l]{
  padding-top:var(--radius-drop-list-container, 8px);
  gap:var(--radius-drop-list-container, 8px);
}
.pinBottomItem--jdALf li,
.pinBottomItem--jdALf ul{
  list-style-type:none;
}`,""]),o.locals={pinTopItem:"pinTopItem--DFR8V",pinBottomItem:"pinBottomItem--jdALf"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.searchItem--Sx6g5{
  width:100%;
}
.searchItem--Sx6g5:focus-within, .searchItem--Sx6g5:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  max-width:100%;
  outline-color:var(--sys-primary-decor-activated, #c5b2f1);
}`,""]),o.locals={searchItem:"searchItem--Sx6g5"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.itemWrapper--U2nMg{
  position:relative;
  min-width:100%;
  margin:0;
  padding:0;
}
.itemWrapper--U2nMg::before, .itemWrapper--U2nMg::after{
  pointer-events:none;
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:transparent;
}
.itemWrapper--U2nMg[data-disabled], .itemWrapper--U2nMg:disabled{
  cursor:not-allowed;
  background-color:transparent;
  outline:none;
}
.itemWrapper--U2nMg[data-disabled]::before, .itemWrapper--U2nMg:disabled::before{
  display:none;
}
.itemWrapper--U2nMg[data-disabled]::after, .itemWrapper--U2nMg:disabled::after{
  cursor:not-allowed;
  background-color:transparent;
}
.itemWrapper--U2nMg:not([data-inactive], [data-disabled])[data-open]::before, .itemWrapper--U2nMg:not([data-inactive], [data-disabled])[data-focused]::before, .itemWrapper--U2nMg:not([data-inactive], [data-disabled]):focus-visible::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
@media (hover: hover){
  .itemWrapper--U2nMg:not([data-inactive], [data-disabled]):hover::before{
    opacity:var(--opacity-a008, 0.08);
    background-color:var(--sys-neutral-accent-default, #787b8a);
  }
}

.listItem--zkB1W{
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
.listItem--zkB1W[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
}
.listItem--zkB1W[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-bottom:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
}
.listItem--zkB1W[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-bottom:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
}
.listItem--zkB1W:not([data-inactive], [data-disabled])[data-focused], .listItem--zkB1W:not([data-inactive], [data-disabled]):focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
}`,""]),o.locals={itemWrapper:"itemWrapper--U2nMg",listItem:"listItem--zkB1W"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.loader--k8t1X{
  display:flex;
  align-items:center;
  justify-content:center;
}
.loader--k8t1X[data-size=s]{
  height:var(--dimension-3m, 24px);
}
.loader--k8t1X[data-size=s][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-3m, 24px));
  height:calc(3 * var(--dimension-3m, 24px));
}
.loader--k8t1X[data-size=m]{
  height:var(--dimension-4m, 32px);
}
.loader--k8t1X[data-size=m][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-4m, 32px));
  height:calc(3 * var(--dimension-4m, 32px));
}
.loader--k8t1X[data-size=l]{
  height:var(--dimension-5m, 40px);
}
.loader--k8t1X[data-size=l][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-5m, 40px));
  height:calc(3 * var(--dimension-5m, 40px));
}
.loader--k8t1X:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}

.scrollStub--Gzoph{
  height:calc(var(--dimension-025m, 2px) / 2);
  margin-top:calc(var(--dimension-025m, 2px) / -2);
  background:transparent;
}

.footer--vpKs5{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  padding:var(--dimension-050m, 4px);
}

.content--KqxPt{
  overflow:hidden;
  flex-grow:1;
}

.virtualizedContainer--LSi16{
  position:relative;
  width:100%;
}

.virtualizedPositionBox--NB4mn{
  position:absolute;
  top:0;
  left:0;
  width:100%;
}`,""]),o.locals={loader:"loader--k8t1X",scrollStub:"scrollStub--Gzoph",footer:"footer--vpKs5",content:"content--KqxPt",virtualizedContainer:"virtualizedContainer--LSi16",virtualizedPositionBox:"virtualizedPositionBox--NB4mn"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.listContainer--RnPdG{
  display:flex;
  flex-direction:column;
  height:100%;
  margin:0;
  padding:0;
}
.listContainer--RnPdG:focus-visible{
  border:none;
  outline:none;
}
.listContainer--RnPdG:focus-visible[data-active]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.listContainer--RnPdG:focus-visible[data-active] *{
  cursor:inherit;
}
.listContainer--RnPdG li,
.listContainer--RnPdG ul{
  list-style-type:none;
}

.wrapper--t6ap1{
  position:relative;
  overflow:hidden;
  display:block;
  box-sizing:border-box;
  height:100%;
}
.wrapper--t6ap1:has(.listContainer--RnPdG:focus-visible){
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.wrapper--t6ap1 li,
.wrapper--t6ap1 ul{
  list-style-type:none;
}

.scrollContainerS--HrSYR{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 32);
}

.scrollContainerM--EPdA9{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 40);
}

.scrollContainerL--j14bP{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 48);
}`,""]),o.locals={listContainer:"listContainer--RnPdG",wrapper:"wrapper--t6ap1",scrollContainerS:"scrollContainerS--HrSYR",scrollContainerM:"scrollContainerM--EPdA9",scrollContainerL:"scrollContainerL--j14bP"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.accordion--XoDmf{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  transition:gap 300ms;
}
.accordion--XoDmf::-webkit-scrollbar{
  width:0;
}
.accordion--XoDmf[aria-expanded=false]{
  gap:0;
}

.contentWrapper--vlWpA{
  box-sizing:border-box;
  width:100%;
}
.contentWrapper--vlWpA[aria-hidden=false] > div[data-content]{
  display:block;
}

.content--pDSdV{
  position:relative;
  display:none;
  box-sizing:border-box;
  width:100%;
}`,""]),o.locals={accordion:"accordion--XoDmf",contentWrapper:"contentWrapper--vlWpA",content:"content--pDSdV"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.hiddenBtn--A8AbE{
  position:absolute;
  width:0;
  height:0;
  margin:0;
  padding:0;
  border:none;
  outline:none;
}`,""]),o.locals={hiddenBtn:"hiddenBtn--A8AbE"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.headline--UxAUQ{
  display:flex;
}

.label--qQX20{
  overflow:hidden;
  flex:1;
  color:var(--sys-neutral-text-main, #41424e);
}

.caption--BV4wM{
  overflow:hidden;
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  text-overflow:ellipsis;
  white-space:nowrap;
}

.description--TERcE{
  color:var(--sys-neutral-text-support, #6d707f);
}

.content--oYjyC{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}
.content--oYjyC[data-size=s] .headline--UxAUQ{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--oYjyC[data-size=s] .label--qQX20{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  display:flex;
  align-items:center;
}
.content--oYjyC[data-size=s] .caption--BV4wM{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--oYjyC[data-size=s] .description--TERcE{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--oYjyC[data-size=m] .headline--UxAUQ{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--oYjyC[data-size=m] .label--qQX20{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  display:flex;
  align-items:center;
}
.content--oYjyC[data-size=m] .caption--BV4wM{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--oYjyC[data-size=m] .description--TERcE{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--oYjyC[data-size=l] .headline--UxAUQ{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--oYjyC[data-size=l] .label--qQX20{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
  display:flex;
  align-items:center;
}
.content--oYjyC[data-size=l] .caption--BV4wM{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--oYjyC[data-size=l] .description--TERcE{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--oYjyC[data-disabled] .label--qQX20,
.content--oYjyC[data-disabled] .description--TERcE,
.content--oYjyC[data-disabled] .caption--BV4wM{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),o.locals={headline:"headline--UxAUQ",label:"label--qQX20",caption:"caption--BV4wM",description:"description--TERcE",content:"content--oYjyC"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.listEmptyStateWrapper--SZXrX{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  padding:var(--dimension-1m, 8px);
}`,""]),o.locals={listEmptyStateWrapper:"listEmptyStateWrapper--SZXrX"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.separatorWithLabel--huIPA{
  display:flex;
  gap:var(--dimension-1m, 8px);
  align-items:flex-end;
  box-sizing:border-box;
  width:100%;
  min-width:100%;
}
.separatorWithLabel--huIPA[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-s, 32px);
}
.separatorWithLabel--huIPA[data-size=s] .label--UiBHN[data-mode=primary]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--huIPA[data-size=s] .label--UiBHN[data-mode=secondary]{
  font-family:var(--light-label-m-font-family, SB Sans Interface);
  font-weight:var(--light-label-m-font-weight, Regular);
  line-height:var(--light-label-m-line-height, 16px);
  font-size:var(--light-label-m-font-size, 12px);
  letter-spacing:var(--light-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--huIPA[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-m, 40px);
}
.separatorWithLabel--huIPA[data-size=m] .label--UiBHN[data-mode=primary]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--huIPA[data-size=m] .label--UiBHN[data-mode=secondary]{
  font-family:var(--light-label-l-font-family, SB Sans Interface);
  font-weight:var(--light-label-l-font-weight, Regular);
  line-height:var(--light-label-l-line-height, 20px);
  font-size:var(--light-label-l-font-size, 14px);
  letter-spacing:var(--light-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--huIPA[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-l, 48px);
}
.separatorWithLabel--huIPA[data-size=l] .label--UiBHN[data-mode=primary]{
  font-family:var(--sans-title-m-font-family, SB Sans Interface);
  font-weight:var(--sans-title-m-font-weight, Semibold);
  line-height:var(--sans-title-m-line-height, 24px);
  font-size:var(--sans-title-m-font-size, 16px);
  letter-spacing:var(--sans-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);
}
.separatorWithLabel--huIPA[data-size=l] .label--UiBHN[data-mode=secondary]{
  font-family:var(--light-title-m-font-family, SB Sans Interface);
  font-weight:var(--light-title-m-font-weight, Regular);
  line-height:var(--light-title-m-line-height, 24px);
  font-size:var(--light-title-m-font-size, 16px);
  letter-spacing:var(--light-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-m-paragraph-spacing, 8.8px);
}

.separatorWithoutLabel--NFMSg{
  display:flex;
  align-items:flex-end;
  box-sizing:border-box;
}
.separatorWithoutLabel--NFMSg[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
}
.separatorWithoutLabel--NFMSg[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
}
.separatorWithoutLabel--NFMSg[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
}

.label--UiBHN{
  overflow:hidden;
  flex-shrink:1;
}
.label--UiBHN[data-mode=primary]{
  color:var(--sys-neutral-text-main, #41424e);
}
.label--UiBHN[data-mode=secondary]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}

hr.divider--sZxg0{
  flex:1;
  width:auto;
  min-width:0;
}

.selectButton--zCxn1{
  display:flex;
  justify-content:flex-end;
}
.selectButton--zCxn1[data-weight=primary]{
  --divider-height:1px;
}
.selectButton--zCxn1[data-weight=secondary]{
  --divider-height:0.5px;
}
.selectButton--zCxn1[data-size=s]{
  transform:translateY(calc((var(--size-button-xs, 24px) - var(--sans-label-s-line-height, 14px)) / 2 - var(--divider-height, 0)));
}
.selectButton--zCxn1[data-size=m]{
  transform:translateY(calc((var(--size-button-s, 32px) - var(--sans-label-m-line-height, 16px)) / 2 - var(--divider-height, 0)));
}
.selectButton--zCxn1[data-size=l]{
  transform:translateY(calc((var(--size-button-m, 40px) - var(--sans-label-l-line-height, 20px)) / 2 - var(--divider-height, 0)));
}`,""]),o.locals={separatorWithLabel:"separatorWithLabel--huIPA",label:"label--UiBHN",separatorWithoutLabel:"separatorWithoutLabel--NFMSg",divider:"divider--sZxg0",selectButton:"selectButton--zCxn1"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.spinner--Ed4zL{
  pointer-events:none;
  stroke:currentColor;
  animation:spin--ykpAz 1s ease-in-out infinite;
}
.spinner--Ed4zL > g > path{
  fill:currentColor;
}
.spinner--Ed4zL > mask{
  mask-type:alpha;
}
.spinner--Ed4zL[data-size=xxs]{
  width:var(--size-loader-loader-xxs, 8px);
  height:var(--size-loader-loader-xxs, 8px);
}
.spinner--Ed4zL[data-size=xs]{
  width:var(--size-loader-loader-xs, 16px);
  height:var(--size-loader-loader-xs, 16px);
}
.spinner--Ed4zL[data-size=s]{
  width:var(--size-loader-loader-s, 24px);
  height:var(--size-loader-loader-s, 24px);
}
.spinner--Ed4zL[data-size=m]{
  width:var(--size-loader-loader-m, 48px);
  height:var(--size-loader-loader-m, 48px);
}
.spinner--Ed4zL[data-size=l]{
  width:var(--size-loader-loader-l, 72px);
  height:var(--size-loader-loader-l, 72px);
}
@keyframes spin--ykpAz{
  to{
    transform:rotate(360deg);
  }
}`,""]),o.locals={spinner:"spinner--Ed4zL",spin:"spin--ykpAz"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+search-private@0.4.27_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.container--VUCBK{
  display:flex;
  flex-grow:1;
  align-items:center;
  box-sizing:border-box;
}
.container--VUCBK[data-size=s]{
  gap:var(--space-search-search-private-s, 4px);
}
.container--VUCBK[data-size=s] input{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  cursor:text;
}
.container--VUCBK[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--VUCBK[data-size=m]{
  gap:var(--space-search-search-private-m, 4px);
}
.container--VUCBK[data-size=m] input{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  cursor:text;
}
.container--VUCBK[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--VUCBK[data-size=l]{
  gap:var(--space-search-search-private-l, 8px);
}
.container--VUCBK[data-size=l] input{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
  cursor:text;
}
.container--VUCBK[data-size=l] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.postfix--LOfRq{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-postfix-gap, 4px);
}

.prefix--fVX6b{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),o.locals={container:"container--VUCBK",postfix:"postfix--LOfRq",prefix:"prefix--fVX6b"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.container--DT6jM{
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
}
.container--DT6jM[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
  border-radius:var(--radius-toggles-s-box-checkbox, 6px);
  border-width:var(--border-width-toggles-single, 2px);
}
.container--DT6jM[data-size=m]{
  width:var(--size-toggles-m-container, 24px);
  height:var(--size-toggles-m-container, 24px);
  border-radius:var(--radius-toggles-m-box-checkbox, 8px);
  border-width:var(--border-width-toggles-single, 2px);
}
.container--DT6jM[data-focusvisible=true]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
}
.container--DT6jM[data-focusvisible=true][data-size=s]{
  outline-offset:var(--border-width-state-focus-s, 2px);
}

.box--ejxLI{
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-decor-activated, #bec2cf);
  border-style:solid;
}
.box--ejxLI[data-checked=false][data-focusvisible=true], .box--ejxLI[data-checked=false][data-hover=true]{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.box--ejxLI[data-checked=false][data-disabled=true]{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.box--ejxLI[data-indeterminate=true], .box--ejxLI[data-checked=true]{
  background-color:var(--sys-primary-accent-default, #794ed3);
  border-color:var(--sys-primary-accent-default, #794ed3);
}
.box--ejxLI[data-indeterminate=true][data-focusvisible=true], .box--ejxLI[data-indeterminate=true][data-hover=true], .box--ejxLI[data-checked=true][data-focusvisible=true], .box--ejxLI[data-checked=true][data-hover=true]{
  background-color:var(--sys-primary-accent-hovered, #6851a6);
  border-color:var(--sys-primary-accent-hovered, #6851a6);
}
.box--ejxLI[data-indeterminate=true][data-disabled=true], .box--ejxLI[data-checked=true][data-disabled=true]{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
  border-color:var(--sys-neutral-text-disabled, #aaaebd);
}
.box--ejxLI[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
  border-width:var(--border-width-toggles-single, 2px);
  border-radius:var(--radius-toggles-s-box-checkbox, 6px);
}
.box--ejxLI[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.box--ejxLI[data-size=m]{
  width:var(--size-toggles-m-box-checkbox, 20px);
  height:var(--size-toggles-m-box-checkbox, 20px);
  border-width:var(--border-width-toggles-single, 2px);
  border-radius:var(--radius-toggles-m-box-checkbox, 8px);
}
.box--ejxLI[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.icon--cJSgr{
  position:absolute;
  top:0;
  left:0;
  display:none;
  width:100%;
  height:100%;
  color:var(--sys-primary-on-accent, #fdfbff);
}
.icon--cJSgr[data-indeterminate=true], .icon--cJSgr[data-checked=true]{
  display:block;
}
.icon--cJSgr[data-disabled=true]{
  color:var(--sys-neutral-decor-disabled, #e6e8ef);
}`,""]),o.locals={container:"container--DT6jM",box:"box--ejxLI",icon:"icon--cJSgr"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.container--gkdl5{
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  position:relative;
}
.container--gkdl5[data-size=s]{
  width:var(--size-toggles-s-container-switch-width, 24px);
  height:var(--size-toggles-s-container, 16px);
  border-radius:var(--radius-toggles-s-box-switch, 16px);
}
.container--gkdl5[data-size=m]{
  width:var(--size-toggles-m-container-switch-width, 36px);
  height:var(--size-toggles-m-container, 24px);
  border-radius:var(--radius-toggles-m-box-switch, 16px);
}
.container--gkdl5[data-focusvisible=true]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
}
.container--gkdl5[data-focusvisible=true][data-size=s]{
  outline-offset:var(--border-width-state-focus-s, 2px);
}

.box--QeCI8{
  position:relative;
  background-color:var(--sys-neutral-decor-activated, #bec2cf);
}
.box--QeCI8[data-size=s]{
  width:var(--size-toggles-s-box-switch-width, 24px);
  height:var(--size-toggles-s-box-switch-height, 16px);
  border-radius:var(--radius-toggles-s-box-switch, 16px);
}
.box--QeCI8[data-size=m]{
  width:var(--size-toggles-m-box-switch-width, 32px);
  height:var(--size-toggles-m-box-switch-height, 20px);
  border-radius:var(--radius-toggles-m-box-switch, 16px);
}
.box--QeCI8[data-hover=true]{
  background-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.box--QeCI8[data-disabled=true]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.box--QeCI8[data-checked=true]{
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.box--QeCI8[data-checked=true][data-hover=true]{
  background-color:var(--sys-primary-accent-hovered, #6851a6);
}
.box--QeCI8[data-checked=true][data-disabled=true]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.containerFlag--XxL11{
  position:absolute;
  left:0;
  display:flex;
  align-items:center;
  justify-content:center;
  transition-timing-function:linear;
  transition-duration:0.1s;
  transition-property:left;
}
.containerFlag--XxL11[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
}
.containerFlag--XxL11[data-size=s][data-checked=true]{
  left:calc(100% - var(--size-toggles-s-container, 16px));
}
.containerFlag--XxL11[data-size=m]{
  width:var(--size-toggles-m-container, 24px);
  height:var(--size-toggles-m-container, 24px);
}
.containerFlag--XxL11[data-size=m][data-checked=true]{
  left:calc(100% - var(--size-toggles-m-container, 24px));
}

.flag--FCxw2{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}
.flag--FCxw2[data-size=s]{
  border-radius:var(--radius-toggles-s-box-switch, 16px);
  width:var(--size-toggles-s-flag-switch, 12px);
  height:var(--size-toggles-s-flag-switch, 12px);
}
.flag--FCxw2[data-size=m]{
  border-radius:var(--radius-toggles-m-box-switch, 16px);
  width:var(--size-toggles-m-flag-switch, 16px);
  height:var(--size-toggles-m-flag-switch, 16px);
}
.flag--FCxw2[data-focusvisible=true], .flag--FCxw2[data-hover=true]{
  background-color:var(--sys-neutral-on-accent, #ffffff);
}
.flag--FCxw2[data-disabled=true]{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}

.flag_icon_off--sxQ14{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  fill:transparent;
  transition:opacity 0.1s linear;
  opacity:1;
}
.flag_icon_off--sxQ14[data-hover=true]{
  color:var(--sys-neutral-accent-hovered, #6d707f);
}
.flag_icon_off--sxQ14[data-checked=true]{
  color:var(--sys-primary-accent-default, #794ed3);
}
.flag_icon_off--sxQ14[data-checked=true][data-hover=true]{
  color:var(--sys-primary-accent-hovered, #6851a6);
}
.flag_icon_off--sxQ14[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_off--sxQ14[data-disabled=true][data-hover=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_off--sxQ14[data-checked=true]{
  opacity:0;
}

.flag_icon_on--qsfVg{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  fill:transparent;
  transition:opacity 0.1s linear;
  opacity:0;
}
.flag_icon_on--qsfVg[data-hover=true]{
  color:var(--sys-neutral-accent-hovered, #6d707f);
}
.flag_icon_on--qsfVg[data-checked=true]{
  color:var(--sys-primary-accent-default, #794ed3);
}
.flag_icon_on--qsfVg[data-checked=true][data-hover=true]{
  color:var(--sys-primary-accent-hovered, #6851a6);
}
.flag_icon_on--qsfVg[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_on--qsfVg[data-disabled=true][data-hover=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_on--qsfVg[data-checked=true]{
  opacity:1;
}`,""]),o.locals={container:"container--gkdl5",box:"box--QeCI8",containerFlag:"containerFlag--XxL11",flag:"flag--FCxw2",flag_icon_off:"flag_icon_off--sxQ14",flag_icon_on:"flag_icon_on--qsfVg"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.toggleLayout--gy1yt{
  cursor:pointer;
  position:relative;
  display:inline-flex;
  flex-direction:row;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
}
.toggleLayout--gy1yt[data-disabled=true]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

.togglePrivate--aYntv{
  cursor:pointer;
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  width:100%;
  height:100%;
  margin:0;
  padding:0;
  opacity:0;
}
.togglePrivate--aYntv:disabled{
  cursor:not-allowed;
}`,""]),o.locals={toggleLayout:"toggleLayout--gy1yt",togglePrivate:"togglePrivate--aYntv"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.20_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.spinner--n_MCW{
  pointer-events:none;
  width:var(--dimension-2m, 16px);
  height:var(--dimension-2m, 16px);
  animation:spin--BVVjd 1s ease-in-out infinite;
}
.spinner--n_MCW > path{
  stroke:currentColor;
}
@keyframes spin--BVVjd{
  to{
    transform:rotate(360deg);
  }
}`,""]),o.locals={spinner:"spinner--n_MCW",spin:"spin--BVVjd"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.text1Line--FqBXb{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--Z6AY6{
  text-overflow:ellipsis;
}

.text2AndMoreLines--xbsHF{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--pvUWx{
  display:grid;
}`,""]),o.locals={text1Line:"text1Line--FqBXb",ellipsis:"ellipsis--Z6AY6",text2AndMoreLines:"text2AndMoreLines--xbsHF",tooltipTrigger:"tooltipTrigger--pvUWx"};const n=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((k,c,e)=>{e.d(c,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(r),o=d()(s());o.push([k.id,`.wrapper--rkL6A{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--QcECJ{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--sBn3t{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--x4Ois{
  display:inline-flex;
}`,""]),o.locals={wrapper:"wrapper--rkL6A",truncatedText:"truncatedText--QcECJ",fullText:"fullText--sBn3t",textContainer:"textContainer--x4Ois"};const n=o})}]);})();
