"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[1707],{"./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js":((R,T,s)=>{s.d(T,{i:()=>Ls});var o=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),M=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=s.n(M),A=s("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),i=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),z=s("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),we=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js");const G={default:"~main",pinTop:"~pinTop",pinBottom:"~pinBottom",footer:"~footer",search:"~search",dropFocus:"~dropFocus"};var kt=s("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),Te=s("./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),it=s("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),Ze=s("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),St=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const lt=(0,i.createContext)({flattenItems:{},focusFlattenItems:{},firstItemId:G.default});function le(){return(0,i.useContext)(lt)}function Je({size:e,marker:l,flattenItems:a,focusFlattenItems:t,contentRender:n,firstItemId:c,virtualized:d}){return{size:e,marker:l,contentRender:n,flattenItems:a,focusFlattenItems:t,firstItemId:c,virtualized:d}}function jt(e){var{children:l}=e,a=St(e,["children"]);return(0,o.jsx)(lt.Provider,{value:Je(a),children:l})}const Qe=e=>{e.stopPropagation()},Et={s:"xs",m:"s",l:"m"};var Ot=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),re=s.n(Ot),Ct=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),de=s.n(Ct),Pt=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),ce=s.n(Pt),At=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),pe=s.n(At),zt=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Y=s.n(zt),ke=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_e=s.n(ke),Se=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css"),je={};je.styleTagTransform=_e(),je.setAttributes=pe(),je.insert=ce().bind(null,"head"),je.domAPI=de(),je.insertStyleElement=Y();var Gt=re()(Se.A,je);const q=Se.A&&Se.A.locals?Se.A.locals:void 0;function Ee({label:e,truncate:l,divider:a,mode:t="secondary",selectButton:n}){const{size:c="s"}=le(),{t:d}=(0,it.Ym)("List"),_=(0,i.useMemo)(()=>{if(!n)return null;const{onClick:p,checked:r,itemRef:g,label:m}=n;return(0,o.jsx)("span",{className:q.selectButton,"data-size":c,"data-weight":a&&t||void 0,children:(0,o.jsx)(kt.b,{size:Et[c],tabIndex:0,onClick:u=>{p==null||p(u),u.preventDefault(),u.stopPropagation()},onFocus:Qe,ref:g,label:m!=null?m:d(r?"groupSelectButton.reset":"groupSelectButton.select")})})},[a,t,n,c,d]);return e?(0,o.jsxs)("div",{className:q.separatorWithLabel,"data-size":c,children:[(0,o.jsx)("span",{className:q.label,"data-mode":t,children:(0,o.jsx)(Ze.m,{variant:l==null?void 0:l.variant,text:e,maxLines:1})}),(0,o.jsxs)("div",{style:{flex:1},children:[_,a&&(0,o.jsx)(Te.c,{weight:t==="primary"?"regular":"light",className:q.divider})]})]}):a?(0,o.jsx)("div",{className:q.separatorWithoutLabel,"data-size":c,children:(0,o.jsx)(Te.c,{weight:"regular"})}):null}const Ae=e=>`${G.footer}__${e}`,J=(e,l)=>[e,l].join("-"),ye=e=>J(ITEM_PREFIXES.default,e);var Dt=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const Me=(0,i.createContext)({value:void 0,onChange:void 0,mode:void 0});function Ve(e){return"mode"in e&&e.mode==="multiple"}function Ye(e){return"mode"in e&&e.mode==="single"}function $e({children:e}){return(0,o.jsx)(Me.Provider,{value:{mode:"none"},children:e})}function wt({value:e,defaultValue:l,onChange:a,children:t}){const[n,c]=(0,we.I)({value:e,defaultValue:l,onChange:a}),d=(0,i.useCallback)(_=>c(p=>{if(_!==p)return _}),[c]);return(0,o.jsx)(Me.Provider,{value:{value:n,onChange:d,mode:"single",isSelectionSingle:!0,isSelectionMultiple:!1,setValue:c},children:t})}function qe({value:e,defaultValue:l,onChange:a,children:t}){const[n,c]=(0,we.I)({value:e,defaultValue:l,onChange:a}),d=(0,i.useCallback)(_=>{c(p=>{if(Array.isArray(p))return p.includes(_)?p.filter(r=>r!==_):p.concat(_);if(p===void 0)return Array.isArray(_)?_:[_]})},[c]);return(0,o.jsx)(Me.Provider,{value:{value:n,onChange:d,mode:"multiple",isSelectionSingle:!1,isSelectionMultiple:!0,setValue:c},children:t})}function Tt(e){var{children:l}=e,a=Dt(e,["children"]);return Ye(a)?(0,o.jsx)(wt,Object.assign({},a,{children:l})):Ve(a)?(0,o.jsx)(qe,Object.assign({},a,{children:l})):(0,o.jsx)($e,{children:l})}function be(){return(0,i.useContext)(Me)}var Mt=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),rt=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),ze=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),me=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css"),Oe={};Oe.styleTagTransform=_e(),Oe.setAttributes=pe(),Oe.insert=ce().bind(null,"head"),Oe.domAPI=de(),Oe.insertStyleElement=Y();var Xt=re()(me.A,Oe);const et=me.A&&me.A.locals?me.A.locals:void 0;var Lt=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function dt(e){var{children:l,expanded:a,className:t,header:n}=e,c=Lt(e,["children","expanded","className","header"]);return(0,o.jsxs)("div",Object.assign({className:h()(et.accordion,t),role:"menuitem","aria-haspopup":!0,"aria-expanded":a},(0,ze.z7)(c),{children:[n,(0,o.jsx)("div",{className:et.contentWrapper,"aria-hidden":!a,children:(0,o.jsx)("div",{className:et.content,"data-content":!0,children:a&&l})})]}))}const ct=(0,i.createContext)({}),pt=()=>(0,i.useContext)(ct),tt=(0,i.createContext)({}),ut=()=>(0,i.useContext)(tt);var Bt=s("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/Checkbox.js"),ve=s("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/Switch.js"),Ce=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css"),Le={};Le.styleTagTransform=_e(),Le.setAttributes=pe(),Le.insert=ce().bind(null,"head"),Le.domAPI=de(),Le.insertStyleElement=Y();var Rs=re()(Ce.A,Le);const st=Ce.A&&Ce.A.locals?Ce.A.locals:void 0;var ts=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const ss={option:1,description:2,variant:"end"};function ns(e){var{truncate:l,caption:a,description:t,option:n,className:c,disabled:d}=e,_=ts(e,["truncate","caption","description","option","className","disabled"]);const{size:p="s"}=le(),r=(0,i.useMemo)(()=>Object.assign(Object.assign({},ss),l),[l]);return(0,o.jsxs)("div",Object.assign({className:h()(st.content,c)},(0,ze.z7)(_),{"data-size":p!=null?p:"s","data-disabled":d||void 0,children:[(0,o.jsxs)("div",{className:st.headline,children:[(0,o.jsx)("div",{className:st.label,children:(0,o.jsx)(Ze.m,{variant:r.variant,text:String(n),maxLines:r.option,"data-test-id":"list__base-item-option"})}),a&&(0,o.jsx)("span",{className:st.caption,children:a})]}),t&&(0,o.jsx)("div",{className:st.description,children:(0,o.jsx)(Ze.m,{text:t,maxLines:r.description,"data-test-id":"list__base-item-description"})})]}))}const Ht=(0,i.createContext)({closeDroplist:()=>{},closeDroplistOnItemClick:!1}),as=()=>(0,i.useContext)(Ht);var _t=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),Be={};Be.styleTagTransform=_e(),Be.setAttributes=pe(),Be.insert=ce().bind(null,"head"),Be.domAPI=de(),Be.insertStyleElement=Y();var Ws=re()(_t.A,Be);const Rt=_t.A&&_t.A.locals?_t.A.locals:void 0;var os=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function is(e){return e&&!("items"in e)}function ls(e){return e&&"items"in e&&e.type==="collapse"}function Zt(e){return e&&"items"in e&&e.type==="next-list"}function mt(e){return e&&"items"in e&&e.type==="group"}function Jt(e){return e&&"items"in e&&e.type==="group-select"}function rs(e){return typeof e=="object"&&e.option!==void 0}const Ks=null,Ns=null,Fs=null,Us=null;function Wt({items:e,prefix:l,parentId:a}){const t={},n={};function c({item:m,idx:u,prefix:v,parentId:E=G.default}){var f,W;const b=v!==void 0?J(v,u):String(u),y=(f=mt(m)?void 0:m.id)!==null&&f!==void 0?f:b;if(is(m))return t[y]=Object.assign(Object.assign({},m),{items:[],allChildIds:[],id:y}),n[b]={key:b,originalId:y,id:b,disabled:m.disabled,parentId:E,items:[],allChildIds:[],itemRef:m.itemRef||(0,i.createRef)()},{id:y,children:[y],autoId:b,focusChildren:[b]};let K=[],x=[];const U=[],X=[],{items:Q}=m,$=os(m,["items"]),D=mt(m)?E!=null?E:G.default:b,O=Q.filter(k=>!k.hidden);for(let k=0;k<O.length;k++){const{id:H,children:V,autoId:se,focusChildren:N}=c({item:O[k],idx:k,prefix:y,parentId:D});X.push(se),U.push(H),K=K.concat(V),x=x.concat(N)}const I=[...new Set(K.concat(U))],L=[...new Set(x.concat(X))];return t[y]=Object.assign(Object.assign({},$),{id:y,items:[],allChildIds:I}),n[b]={key:b,originalId:y,id:b,parentId:E,items:X,allChildIds:L,disabled:(m.type==="collapse"||m.type==="next-list")&&m.disabled,type:m.type,itemRef:mt(m)?void 0:(W=m.itemRef)!==null&&W!==void 0?W:(0,i.createRef)()},{id:y,children:I,autoId:b,focusChildren:L}}const d=[],_=[];let p=[];const r=e.filter(m=>!m.hidden);for(let m=0;m<r.length;m++){const{id:u,children:v,autoId:E}=c({item:r[m],idx:m,prefix:l,parentId:a});_.push(E),d.push(u),p.push(u),p=p.concat(v)}const g=[...new Set(p)];return{focusCloseChildIds:_,allChildIds:g,flattenItems:t,focusFlattenItems:n}}function Qt({focusFlattenItems:e,focusCloseChildIds:l,openCollapseItems:a,isSelectionMultiple:t}){const n=[],c=[];function d(_){_.forEach(p=>{const r=e[p];if(r.type==="group"){d(r.items);return}if(!r.disabled){if(r.type==="group-select"){t&&n.push(r.id),d(r.items);return}n.push(r.id),r.type&&(c.push(p),a.includes(r.originalId)&&d(r.items))}})}return d(l),{ids:n,expandedIds:c}}const ds={s:"s",m:"s",l:"m"};var vt=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css"),Re={};Re.styleTagTransform=_e(),Re.setAttributes=pe(),Re.insert=ce().bind(null,"head"),Re.domAPI=de(),Re.insertStyleElement=Y();var Gs=re()(vt.A,Re);const De=vt.A&&vt.A.locals?vt.A.locals:void 0;var cs=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function Kt(e){var l,{beforeContent:a,afterContent:t,content:n,onClick:c,onMouseDown:d,id:_,expandIcon:p,disabled:r,open:g,itemRef:m,switch:u,showSwitchIcon:v,onKeyDown:E,onFocus:f,indeterminate:W,checked:b,onSelect:y,onOpenNestedList:K,isParentNode:x,className:U,inactive:X,itemWrapRender:Q}=e,$=cs(e,["beforeContent","afterContent","content","onClick","onMouseDown","id","expandIcon","disabled","open","itemRef","switch","showSwitchIcon","onKeyDown","onFocus","indeterminate","checked","onSelect","onOpenNestedList","isParentNode","className","inactive","itemWrapRender"]);const D=!X,{size:O="s",marker:I,contentRender:L,firstItemId:k,focusFlattenItems:H}=le(),{level:V=0}=pt(),{closeDroplist:se,closeDroplistOnItemClick:N}=as(),{value:ne,onChange:fe,mode:C,isSelectionSingle:ae,isSelectionMultiple:ue}=be(),ee=ae?b!=null?b:ne===_:b!=null?b:ne==null?void 0:ne.includes(_!=null?_:""),xe=()=>{fe==null||fe(_)},Ge=P=>{r||d==null||d(P)},te=P=>{f==null||f(P),P.stopPropagation()},Ie=()=>{x&&y?y():xe()},oe=P=>{r||(c==null||c(P),D&&(x||xe()),!ue&&N&&se())},Pe=P=>{if(E==null||E(P),P.key==="ArrowRight"&&K){K(P),P.preventDefault(),P.stopPropagation();return}(P.code==="Space"||P.key==="Enter"||P.key===" ")&&(ue&&x&&y&&y(),!x&&xe(),!x&&(oe==null||oe(P)),P.stopPropagation(),P.preventDefault())},he=P=>{x&&P.stopPropagation()},w=(0,ze.z7)($),ie=(0,o.jsx)("div",{className:h()(Rt.itemWrapper,De.innerWrapper,U),"data-inactive":X||void 0,"data-disabled":r||void 0,"data-variant":C||void 0,"data-checked":x&&ee||!x&&ee&&!u||void 0,children:(0,o.jsxs)("li",{"data-type":"outside",role:"menuitem","data-test-id":w["data-test-id"]||"list__base-item_"+_,ref:m,className:h()(Rt.listItem,De.droplistItem),"data-size":O,onClick:oe,onMouseDown:Ge,tabIndex:k&&_===H[k].originalId?0:-1,"data-non-pointer":X&&!c,"data-variant":C||void 0,"data-open":g||void 0,onKeyDown:Pe,onFocus:te,style:{"--level":V},"data-level-one":V===1||void 0,"data-level-more-one":V>1||void 0,"data-checked":x&&(W||ee)||ee&&!u||void 0,children:[!u&&ae&&I&&!x&&D&&(0,o.jsx)("div",{className:De.markerContainer,"data-test-id":"list__base-item-marker"}),!u&&ue&&D&&(0,o.jsx)("div",{className:De.checkbox,children:(0,o.jsx)(Bt.S,{size:ds[O!=null?O:"s"],disabled:r,tabIndex:-1,onChange:x?Ie:void 0,checked:ee,"data-test-id":"list__base-item-checkbox",onClick:he,indeterminate:W})}),a&&(0,o.jsx)("div",{className:De.beforeContent,children:a}),n&&rs(n)?(l=L==null?void 0:L({id:_,content:n,disabled:r}))!==null&&l!==void 0?l:(0,o.jsx)(ns,Object.assign({disabled:r},n)):(0,o.jsxs)("div",{className:De.content,children:[" ",n," "]}),t,u&&D&&(0,o.jsx)(ve.d,{disabled:r,checked:ee,"data-test-id":"list__base-item-switch",showIcon:v}),!u&&p&&(0,o.jsx)("span",{className:De.expandableIcon,children:p})]})});return Q?Q(ie):ie}var ps=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function us(e){var{id:l,disabled:a,allChildIds:t,items:n}=e,c=ps(e,["id","disabled","allChildIds","items"]);const{level:d=0}=pt(),{openCollapseItems:_=[],toggleOpenCollapseItem:p}=ut(),{value:r,isSelectionSingle:g,isSelectionMultiple:m}=be(),{indeterminate:u,handleOnSelect:v,checked:E}=Ut({items:n,id:l,disabled:a,allChildIds:t}),f=!!_.includes(l!=null?l:""),W=!!(u&&!f&&g&&r&&t.includes(r)||m&&E),b=(0,i.useCallback)(()=>{p==null||p(l!=null?l:"")},[l,p]),y=ot(n),K=x=>{var U;p==null||p(l!=null?l:""),(U=c.onClick)===null||U===void 0||U.call(c,x)};return(0,o.jsx)(dt,{header:(0,o.jsx)(Kt,Object.assign({},c,{id:l,disabled:a,expandIcon:f?(0,o.jsx)(Mt.A,{}):(0,o.jsx)(rt.A,{}),onClick:K,isParentNode:!0,onOpenNestedList:b,checked:W,indeterminate:u,onSelect:a?void 0:v})),expanded:f,"data-test-id":`list__accordion-item-${l}`,children:(0,o.jsx)(ct.Provider,{value:{level:d+1},children:y})})}function _s({label:e,truncate:l,divider:a,items:t,mode:n,id:c,itemRef:d,allChildIds:_,selectButtonLabel:p}){const{indeterminate:r,checked:g,handleOnSelect:m}=Ut({items:t,id:c,disabled:!1,allChildIds:_}),u=ot(t);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Ee,{label:e,truncate:l,divider:a,mode:n,selectButton:{indeterminate:r,checked:g,itemRef:d,onClick:m,label:p}}),u]})}var ms=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js");const Vt=(0,i.createContext)({handleListKeyDownFactory:()=>()=>{}}),vs=()=>(0,i.useContext)(Vt);var fs=s("./node_modules/.pnpm/@tanstack+react-virtual@3.11.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@tanstack/react-virtual/dist/esm/index.js"),hs=s("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),gs=s("./node_modules/.pnpm/@snack-uikit+scroll@0.10.5_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),bs=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js"),ys=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js");function xs({noDataState:e,noResultsState:l,errorDataState:a}){const{t}=(0,it.Ym)("List");return(0,i.useMemo)(()=>{const n=Object.assign({icon:{icon:bs.A,appearance:"neutral",decor:!0},description:t("noData.description")},e),c=Object.assign({description:t("noResults.description")},l),d=Object.assign({icon:{icon:ys.A,appearance:"neutral",decor:!0},description:t("errorData.description")},a);return{noDataState:n,noResultsState:c,errorDataState:d}},[a,e,l,t])}var Nt=s("./node_modules/.pnpm/@snack-uikit+info-block@0.6.32_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/index.js"),ft=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css"),We={};We.styleTagTransform=_e(),We.setAttributes=pe(),We.insert=ce().bind(null,"head"),We.domAPI=de(),We.insertStyleElement=Y();var Xs=re()(ft.A,We);const Ft=ft.A&&ft.A.locals?ft.A.locals:void 0;function Is({dataError:e,dataFiltered:l,hasNoItems:a,emptyStates:t,loading:n,size:c}){return n?null:e?(0,o.jsx)("div",{className:Ft.listEmptyStateWrapper,children:(0,o.jsx)(Nt.O,Object.assign({},t.errorDataState,{size:c,align:"vertical"}))}):l&&a?(0,o.jsx)("div",{className:Ft.listEmptyStateWrapper,children:(0,o.jsx)(Nt.O,Object.assign({},t.noResultsState,{size:c,align:"vertical","data-test-id":"list__no-results"}))}):!l&&a?(0,o.jsx)("div",{className:Ft.listEmptyStateWrapper,children:(0,o.jsx)(Nt.O,Object.assign({},t.noDataState,{size:c,align:"vertical","data-test-id":"list__no-data"}))}):null}var ht=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css"),Ke={};Ke.styleTagTransform=_e(),Ke.setAttributes=pe(),Ke.insert=ce().bind(null,"head"),Ke.domAPI=de(),Ke.insertStyleElement=Y();var Hs=re()(ht.A,Ke);const Yt=ht.A&&ht.A.locals?ht.A.locals:void 0;function ks({children:e}){const{size:l="s"}=le();return e?(0,o.jsxs)("div",{className:h()(Yt.pinTopItem),"data-size":l,"data-test-id":"list__pin-top-group-item",children:[(0,o.jsx)("div",{children:e}),(0,o.jsx)(Te.c,{weight:"regular"})]}):null}function Ss({children:e}){const{size:l="s"}=le();return e?(0,o.jsxs)("div",{className:h()(Yt.pinBottomItem),"data-size":l,"data-test-id":"list__pin-bottom-group-item",children:[(0,o.jsx)(Te.c,{weight:"regular"}),(0,o.jsx)("div",{children:e})]}):null}var js=s("./node_modules/.pnpm/@snack-uikit+search-private@0.4.29_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/SearchPrivate.js"),gt=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css"),Ne={};Ne.styleTagTransform=_e(),Ne.setAttributes=pe(),Ne.insert=ce().bind(null,"head"),Ne.domAPI=de(),Ne.insertStyleElement=Y();var Zs=re()(gt.A,Ne);const Es=gt.A&&gt.A.locals?gt.A.locals:void 0;function Os({search:e,itemRef:l}){const{size:a="s",firstItemId:t}=le(),n=c=>{var d;["ArrowDown","ArrowUp"].includes(c.key)&&c.preventDefault(),(d=e==null?void 0:e.onKeyDown)===null||d===void 0||d.call(e,c)};return e?(0,o.jsx)("div",{className:h()(Rt.listItem,Es.searchItem),"data-size":a,"data-test-id":"list__search-item",children:(0,o.jsx)(js.s,Object.assign({size:a,tabIndex:G.search===t?0:-1,onKeyDown:n,onFocus:Qe},e,{ref:l}))}):null}var bt=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),Fe={};Fe.styleTagTransform=_e(),Fe.setAttributes=pe(),Fe.insert=ce().bind(null,"head"),Fe.domAPI=de(),Fe.insertStyleElement=Y();var Js=re()(bt.A,Fe);const nt=bt.A&&bt.A.locals?bt.A.locals:void 0,Cs={m:40,s:32,l:48};var yt=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css"),Ue={};Ue.styleTagTransform=_e(),Ue.setAttributes=pe(),Ue.insert=ce().bind(null,"head"),Ue.domAPI=de(),Ue.insertStyleElement=Y();var $s=re()(yt.A,Ue);const at=yt.A&&yt.A.locals?yt.A.locals:void 0;var Ps=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const $t=(0,i.forwardRef)((e,l)=>{var a,{items:t,pinTop:n,pinBottom:c,onKeyDown:d,onBlur:_,onFocus:p,tabIndex:r,active:g,scroll:m,nested:u,search:v,searchItem:E,scrollRef:f,scrollContainerRef:W,onScroll:b,footer:y,loading:K,limitedScrollHeight:x,untouchableScrollbars:U,className:X,noDataState:Q,noResultsState:$,errorDataState:D,dataError:O,dataFiltered:I,scrollToSelectedItem:L=!1,virtualized:k=!1,scrollContainerClassName:H,barHideStrategy:V="never"}=e,se=Ps(e,["items","pinTop","pinBottom","onKeyDown","onBlur","onFocus","tabIndex","active","scroll","nested","search","searchItem","scrollRef","scrollContainerRef","onScroll","footer","loading","limitedScrollHeight","untouchableScrollbars","className","noDataState","noResultsState","errorDataState","dataError","dataFiltered","scrollToSelectedItem","virtualized","scrollContainerClassName","barHideStrategy"]);const{size:N="s",flattenItems:ne,focusFlattenItems:fe}=le(),{value:C,isSelectionSingle:ae}=be(),ue=(0,i.useRef)(null),ee=ot(t),xe=ot(n),Ge=ot(c),[te,Ie]=(0,i.useState)({virtualizer:null,browser:null,measured:!1}),oe=xs({noDataState:Q,noResultsState:$,errorDataState:D}),Pe=t.length===0,{selectedItemIndex:he,selectedItem:w}=(0,i.useMemo)(()=>{const j={selectedItemIndex:-1,selectedItem:void 0};if(!L||!C)return j;const B=ae?ne[C]:ne[C[0]];if(!(B!=null&&B.id))return j;const Xe=Object.values(fe),He=Xe.findIndex(Bs=>Bs.originalId===B.id);return He<0?j:{selectedItemIndex:He,selectedItem:Xe[He]}},[ne,fe,ae,L,C]),ie=(0,fs.Te)({count:ee.length,getScrollElement:()=>m?ue.current:null,estimateSize:()=>Cs[N],enabled:k,overscan:5}),P=ie.getVirtualItems();(0,i.useEffect)(()=>{te.measured||(ie.measure(),Ie(j=>Object.assign(Object.assign({},j),{measured:!0})))},[te.measured,ie]);const xt=m&&L&&k;(0,i.useEffect)(()=>{var j;if(xt){if(!te.measured||he<0||!w||te.virtualizer===w.originalId||w!=null&&w.itemRef&&(!((j=ue.current)===null||j===void 0)&&j.contains(w==null?void 0:w.itemRef.current)))return;ie.scrollToIndex(he,{align:"center"}),Ie(B=>Object.assign(Object.assign({},B),{virtualizer:w.originalId}))}},[xt,te,w,he,ie]);const It=!!(!((a=w==null?void 0:w.itemRef)===null||a===void 0)&&a.current);(0,i.useEffect)(()=>{var j,B;w&&te.virtualizer!==null&&It&&te.virtualizer!==te.browser&&((B=(j=w.itemRef)===null||j===void 0?void 0:j.current)===null||B===void 0||B.scrollIntoView({block:"center"}),Ie(Xe=>Object.assign(Object.assign({},Xe),{browser:w.originalId})))},[te,w,It,he]);const S=(0,i.useMemo)(()=>K&&(0,o.jsx)("div",{role:"spinbutton",tabIndex:-1,className:at.loader,"data-size":N,"data-no-items":Pe||void 0,"data-test-id":"list__loader",children:(0,o.jsx)(hs.y,{size:N==="l"?"s":"xs"})}),[Pe,K,N]),F=(0,i.useMemo)(()=>(0,o.jsxs)(o.Fragment,{children:[k?(0,o.jsx)("div",{className:at.virtualizedContainer,style:{height:ie.getTotalSize()},tabIndex:-1,children:P.map(j=>(0,o.jsx)("div",{"data-index":j.index,ref:ie.measureElement,tabIndex:-1,className:at.virtualizedPositionBox,style:{transform:`translateY(${j.start}px)`},children:ee[j.index]},j.key))}):ee,S,(0,o.jsx)(Is,{loading:K,dataError:O,emptyStates:oe,hasNoItems:Pe,dataFiltered:I!=null?I:!!(v!=null&&v.value),size:N})]}),[O,I,oe,Pe,ee,K,S,v==null?void 0:v.value,N,P,k,ie]),Z=(0,i.useCallback)(()=>{var j,B;w&&((B=(j=w==null?void 0:w.itemRef)===null||j===void 0?void 0:j.current)===null||B===void 0||B.scrollIntoView({block:"center"}))},[w]),ge=(0,o.jsxs)("ul",Object.assign({className:h()(nt.listContainer,X),ref:l,onKeyDown:d,tabIndex:r,onFocus:p,onBlur:_,"data-active":g||void 0,role:"menu"},(0,ze.z7)(se),{children:[(Number(n==null?void 0:n.length)>0||v)&&(0,o.jsxs)(ks,{children:[v&&(0,o.jsx)(Os,Object.assign({search:v},E)),Number(n==null?void 0:n.length)>0&&xe]}),m?(0,o.jsxs)(gs.O,{className:h()({[nt.scrollContainerS]:m&&x&&N==="s",[nt.scrollContainerM]:m&&x&&N==="m",[nt.scrollContainerL]:m&&x&&N==="l"},H),barHideStrategy:V,size:"s",ref:(0,A.A)(ue,W),untouchableScrollbars:U,onScroll:b,onInitialized:Z,children:[F,(0,o.jsx)("div",{className:at.scrollStub,ref:f})]}):(0,o.jsx)(o.Fragment,{children:F}),Number(c==null?void 0:c.length)>0&&(0,o.jsx)(Ss,{children:Ge}),y&&(0,o.jsx)("div",{className:at.footer,onFocus:Qe,children:y})]}));return u?(0,o.jsx)("li",{style:{listStyleType:"none"},role:"menuitem",children:ge}):ge}),As=["right","right-start","right-end","left","left-start","left-end","bottom","top"];var zs=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function Ds(e){var{items:l,placement:a="right-start",id:t,scroll:n,scrollRef:c,disabled:d,onSublistOpenChanged:_,allChildIds:p,loading:r=!1,focusId:g=t,untouchableScrollbars:m=!1}=e,u=zs(e,["items","placement","id","scroll","scrollRef","disabled","onSublistOpenChanged","allChildIds","loading","focusId","untouchableScrollbars"]);const{flattenItems:v,focusFlattenItems:E,virtualized:f}=le(),{value:W,isSelectionSingle:b,isSelectionMultiple:y}=be(),{openCollapseItems:K=[]}=ut(),x=v[t],{ids:U,expandedIds:X}=(0,i.useMemo)(()=>{const{ids:C,expandedIds:ae}=Qt({focusCloseChildIds:l,focusFlattenItems:E,openCollapseItems:K,isSelectionMultiple:y});return{ids:C,expandedIds:ae.concat([t])}},[E,t,y,l,K]),{handleListKeyDownFactory:Q,activeItemId:$,forceUpdateActiveItemId:D}=vs(),[O,I]=(0,i.useState)(),L=(0,i.useCallback)(C=>{if(Q(U,X)(C),C.key==="ArrowLeft"){D==null||D(g),I(!1),C.stopPropagation();return}},[Q,U,X,D,g]),{indeterminate:k,checked:H,handleOnSelect:V}=Ut({items:Zt(x)?x.items:[],id:t,disabled:d,allChildIds:p}),se=(0,i.useCallback)(()=>(D==null||D(G.dropFocus),I(!1),!0),[D]),N=(0,i.useMemo)(()=>!!(!d&&$&&E[g].allChildIds.includes($)),[$,d,E,g]),ne=!!(k&&!O&&b&&W&&p.includes(W)||y&&H);(0,i.useEffect)(()=>{I(C=>C&&N)},[t,N]);const fe=(0,i.useRef)(null);return(0,o.jsx)(z.m,{outsideClick:se,fallbackPlacements:As,content:(0,o.jsx)($t,{onKeyDown:L,items:l,nested:!0,scroll:n,virtualized:f,tabIndex:0,ref:fe,onFocus:C=>{C.stopPropagation(),D==null||D(U[0])},scrollRef:c,limitedScrollHeight:!0,untouchableScrollbars:m,loading:r}),trigger:"hover",open:N||O,onOpenChange:C=>{I(C),_==null||_(C,t)},placement:a,widthStrategy:"auto",children:(0,o.jsx)(Kt,Object.assign({},u,{disabled:d,open:O,expandIcon:(0,o.jsx)(ms.A,{}),id:t,isParentNode:!0,indeterminate:k,checked:ne,onOpenNestedList:()=>{I(!0),setTimeout(()=>{var C;(C=fe.current)===null||C===void 0||C.focus()},0)},onSelect:V}))})}function qt({focusCloseChildIds:e,focusFlattenItems:l,flattenItems:a,isSelectionMultiple:t}){return e?e.flatMap(n=>{const{itemRef:c,key:d,originalId:_,items:p}=l[n],r=a[_];if(mt(r)||!t&&Jt(r)){const g=qt({focusCloseChildIds:p,focusFlattenItems:l,flattenItems:a,isSelectionMultiple:t});return[(0,o.jsx)(Ee,{label:r.label,truncate:r.truncate,divider:r.divider,mode:r.mode},d+"_separator"),...g]}return Jt(r)?(0,i.createElement)(_s,Object.assign({},r,{items:p,itemRef:c,key:d})):ls(r)?(0,i.createElement)(us,Object.assign({},r,{items:p,itemRef:c,key:d})):Zt(r)?(0,i.createElement)(Ds,Object.assign({},r,{focusId:n,items:p,itemRef:c,key:d})):(0,i.createElement)(Kt,Object.assign({},r,{itemRef:c,key:d}))}):[null]}function ot(e){const{focusFlattenItems:l,flattenItems:a}=le(),{isSelectionMultiple:t}=be();return(0,i.useMemo)(()=>qt({flattenItems:a,focusFlattenItems:l,focusCloseChildIds:e,isSelectionMultiple:t}),[a,e,l,t])}function ws({footerActiveElementsRefs:e}){return(0,i.useMemo)(()=>{var l;return{searchItem:{itemRef:(0,i.createRef)(),id:G.search,parentId:G.default,items:[],allChildIds:[]},footerItems:(l=e==null?void 0:e.map((a,t)=>({id:Ae(t),itemRef:a,parentId:G.default,items:[],allChildIds:[]})))!==null&&l!==void 0?l:[]}},[e])}function Ut({id:e,allChildIds:l}){const{value:a,setValue:t,isSelectionMultiple:n}=be(),{flattenItems:c}=le(),d=(0,i.useMemo)(()=>l.filter(u=>{const v=c[u];return v&&!("type"in v)}),[l,c]),_=(0,i.useMemo)(()=>d.filter(u=>{const v=c[u];return v&&!("type"in v)&&!v.disabled}),[d,c]),p=n?a&&!!a.length&&d.every(u=>a==null?void 0:a.includes(u)):void 0,r=n?a&&!!a.length&&_.every(u=>a==null?void 0:a.includes(u)):void 0,g=n?!p&&d.some(u=>a==null?void 0:a.includes(u)):d.includes(a!=null?a:"");return{checked:p,indeterminate:g,handleOnSelect:()=>{if(p||r){t==null||t(u=>(u!=null?u:[]).filter(v=>v!==e&&!_.includes(v)));return}t==null||t(u=>Array.from(new Set([...u!=null?u:[],..._])))}}}function Ts({mainRef:e,btnRef:l,focusFlattenItems:a,keyboardNavigationRef:t,hasListInFocusChain:n,firstItemId:c}){const d=n?void 0:c,[_,p]=(0,i.useState)(()=>d),r=(0,i.useRef)(d),g=(0,i.useCallback)(()=>{p(d),r.current=d},[d]),m=(0,i.useCallback)((v,E)=>f=>{var W,b,y,K,x,U,X,Q,$,D;switch(f.key){case"ArrowDown":{if(r.current!==void 0){const O=v.findIndex(H=>H===r.current),I=Math.min(O+1,v.length-1),L=v[I],k=a[L];r.current=L,p(L),k.type!=="group"&&((b=(W=k.itemRef)===null||W===void 0?void 0:W.current)===null||b===void 0||b.focus())}else{const O=v[0],I=a[O];r.current=O,p(O),I.type!=="group"&&((K=(y=I.itemRef)===null||y===void 0?void 0:y.current)===null||K===void 0||K.focus())}f.stopPropagation(),f.preventDefault();return}case"ArrowUp":{if(v[0]===r.current)n&&a[v[0]].parentId===G.default&&(r.current=void 0,p(void 0),(x=e==null?void 0:e.current)===null||x===void 0||x.focus());else if(r.current!==void 0){const O=v.findIndex(H=>H===r.current),I=Math.max(O-1,0),L=v[I],k=a[L];r.current=L,p(L),k.type!=="group"&&((X=(U=k.itemRef)===null||U===void 0?void 0:U.current)===null||X===void 0||X.focus())}f.stopPropagation(),f.preventDefault();return}case"ArrowRight":{if(r.current!==void 0&&E.includes(r.current)){const I=a[r.current].items[0],L=a[I];r.current=I,p(I),setTimeout(()=>{var k,H;return(H=(k=L.itemRef)===null||k===void 0?void 0:k.current)===null||H===void 0?void 0:H.focus()},0),f.stopPropagation(),f.preventDefault()}return}case"Tab":{r.current!==void 0?n?(f.preventDefault(),f.stopPropagation(),r.current=void 0,p(void 0),(Q=e==null?void 0:e.current)===null||Q===void 0||Q.focus()):g():l&&!f.shiftKey?($=l==null?void 0:l.current)===null||$===void 0||$.focus():(D=e==null?void 0:e.current)===null||D===void 0||D.focus();return}default:return}},[a,n,e,g,l]),u=(0,i.useCallback)(v=>{var E,f;p(v),r.current=v;const W=a[v];(f=(E=W==null?void 0:W.itemRef)===null||E===void 0?void 0:E.current)===null||f===void 0||f.focus()},[a]);return(0,i.useImperativeHandle)(t,()=>({focusItem:u}),[u]),{resetActiveItemId:g,activeItemId:_,forceUpdateActiveItemId:u,handleListKeyDownFactory:m}}var es=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const Ms=["top","right","bottom","left"];function Ls(e){var{items:l,search:a,pinBottom:t=[],pinTop:n=[],footerActiveElementsRefs:c,children:d,trigger:_,placement:p,widthStrategy:r,triggerElemRef:g,open:m,onOpenChange:u,collapse:v={},triggerClassName:E,selection:f,contentRender:W,size:b="s",marker:y=!0,closeDroplistOnItemClick:K=!1,className:x,listRef:U,untouchableScrollbars:X=!1,virtualized:Q=!1,closeOnPopstate:$}=e,D=es(e,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const O=(0,i.useMemo)(()=>!!a,[a]),[I=[],L]=(0,we.I)(v),k=(0,i.useCallback)(S=>L(F=>F!=null&&F.includes(S)?F.filter(Z=>Z!==S):(F!=null?F:[]).concat([S])),[L]),[H=!1,V]=(0,we.I)({value:m,defaultValue:!1,onChange:u}),{searchItem:se,footerItems:N}=ws({footerActiveElementsRefs:c}),ne=(0,i.useMemo)(()=>{const S=Wt({items:n,prefix:G.pinTop,parentId:G.default}),F=Wt({items:l,prefix:G.default,parentId:G.default}),Z=Wt({items:t,prefix:G.pinBottom,parentId:G.default}),ge=Object.assign(Object.assign(Object.assign({},S.flattenItems),Z.flattenItems),F.flattenItems),j=Object.assign(Object.assign(Object.assign({},S.focusFlattenItems),Z.focusFlattenItems),F.focusFlattenItems);return[...N,se].forEach(B=>{ge[B.id]=B,j[B.id]=Object.assign(Object.assign({},B),{originalId:B.id,items:[],key:B.id,allChildIds:[]})}),{items:F,pinTop:S,pinBottom:Z,flattenItems:ge,focusFlattenItems:j}},[l,n,t,se,N]),{flattenItems:fe,focusFlattenItems:C}=ne,ae=es(ne,["flattenItems","focusFlattenItems"]),{ids:ue,expandedIds:ee}=(0,i.useMemo)(()=>{const{pinTop:S,items:F,pinBottom:Z}=ae;let ge=[],j=[];return O&&ge.push(se.id),[S,F,Z].forEach(({focusFlattenItems:B,focusCloseChildIds:Xe})=>{const He=Qt({focusFlattenItems:B,focusCloseChildIds:Xe,openCollapseItems:I,isSelectionMultiple:(f==null?void 0:f.mode)==="multiple"});ge=ge.concat(He.ids),j=j.concat(He.expandedIds)}),N.forEach(B=>{ge.push(B.id)}),{ids:ge,expandedIds:j}},[N,O,ae,I,se.id,f==null?void 0:f.mode]),xe=(0,i.useRef)(null),Ge=(0,i.useRef)(null),te=ue[0],{handleListKeyDownFactory:Ie,resetActiveItemId:oe,activeItemId:Pe,forceUpdateActiveItemId:he}=Ts({mainRef:g!=null?g:xe,focusFlattenItems:C,hasListInFocusChain:!0,firstItemId:te}),w=(0,i.useCallback)(S=>Ie(ue,ee)(S),[Ie,ue,ee]),ie=(0,i.useCallback)(S=>{oe(),V(S)},[oe,V]),P=(0,i.useCallback)((S,F)=>{S.key==="ArrowDown"&&(S.preventDefault(),V(!0),setTimeout(()=>{var Z;oe(),(Z=Ge.current)===null||Z===void 0||Z.focus()},0)),S.key==="ArrowUp"&&V(!1),F==null||F(S)},[oe,V]),xt=(0,i.useMemo)(()=>(0,i.isValidElement)(d),[d]),It=(0,i.useMemo)(()=>{if((0,i.isValidElement)(d)){const S=typeof d.props=="object"?d.props:{};return(0,i.cloneElement)(d,Object.assign(Object.assign({},S),{onKeyDown:F=>{var Z;P(F,(Z=d.props)===null||Z===void 0?void 0:Z.onKeyDown)}}))}return typeof d=="function"?d({onKeyDown:P}):d},[P,d]);return(0,o.jsx)(jt,{flattenItems:fe,focusFlattenItems:C,contentRender:W,size:b,marker:y,firstItemId:te,virtualized:Q,children:(0,o.jsx)(Tt,Object.assign({},f,{children:(0,o.jsx)(tt.Provider,{value:{openCollapseItems:I,toggleOpenCollapseItem:k},children:(0,o.jsx)(Vt.Provider,{value:{activeItemId:Pe,handleListKeyDownFactory:Ie,forceUpdateActiveItemId:he},children:(0,o.jsx)(Ht.Provider,{value:{closeDroplistOnItemClick:K,closeDroplist:()=>{var S;V(!1),oe(),(S=(g!=null?g:xe).current)===null||S===void 0||S.focus()}},children:(0,o.jsx)(z.m,{content:(0,o.jsx)("div",{className:h()(nt.wrapper,x),children:(0,o.jsx)($t,Object.assign({},D,{items:ae.items.focusCloseChildIds,pinTop:ae.pinTop.focusCloseChildIds,pinBottom:ae.pinBottom.focusCloseChildIds,virtualized:Q,onKeyDown:w,searchItem:se,tabIndex:0,ref:(0,A.A)(Ge,U),search:a,onFocus:S=>{S.stopPropagation(),he==null||he(ue[0])},limitedScrollHeight:!0,untouchableScrollbars:X}))}),outsideClick:!0,triggerClassName:E,fallbackPlacements:Ms,trigger:_,placement:p,widthStrategy:r,triggerRef:g?xt&&g||void 0:xe,open:H,onOpenChange:ie,closeOnPopstate:$,children:It})})})})}))})}}),"./node_modules/.pnpm/@snack-uikit+search-private@0.4.29_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/SearchPrivate.js":((R,T,s)=>{s.d(T,{s:()=>Gt});var o=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),M=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=s.n(M),A=s("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),i=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),z=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js"),we=s("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),G=s("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),kt=s("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"),Te=s("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),it=s("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js"),Ze=s("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),St=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),lt=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const le={S:"s",M:"m",L:"l"},Je={field:"search__field",input:"search__field-input",iconSun:"search__icon-sun",iconSearch:"search__icon-search",buttonClearValue:"button-clear-value"};var jt=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Qe=s.n(jt),Et=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Ot=s.n(Et),re=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Ct=s.n(re),de=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Pt=s.n(de),ce=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),At=s.n(ce),pe=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),zt=s.n(pe),Y=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+search-private@0.4.29_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/styles.module.css"),ke={};ke.styleTagTransform=zt(),ke.setAttributes=Pt(),ke.insert=Ct().bind(null,"head"),ke.domAPI=Ot(),ke.insertStyleElement=At();var _e=Qe()(Y.A,ke);const Se=Y.A&&Y.A.locals?Y.A.locals:void 0;var je=function(q,Ee){var Ae={};for(var J in q)Object.prototype.hasOwnProperty.call(q,J)&&Ee.indexOf(J)<0&&(Ae[J]=q[J]);if(q!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ye=0,J=Object.getOwnPropertySymbols(q);ye<J.length;ye++)Ee.indexOf(J[ye])<0&&Object.prototype.propertyIsEnumerable.call(q,J[ye])&&(Ae[J[ye]]=q[J[ye]]);return Ae};const Gt=(0,i.forwardRef)(function(Ee,Ae){var{size:J=le.S,value:ye="",onChange:Dt,loading:Me,placeholder:Ve,onKeyDown:Ye,onFocus:$e,onBlur:wt,onSubmit:qe,className:Tt,tabIndex:be}=Ee,Mt=je(Ee,["size","value","onChange","loading","placeholder","onKeyDown","onFocus","onBlur","onSubmit","className","tabIndex"]);const[rt="",ze]=(0,St.I)({value:ye,defaultValue:"",onChange:Dt}),me=(0,i.useRef)(null),Oe=(0,i.useRef)(null),{t:Xt}=(0,Ze.Ym)("SearchPrivate"),et=!!rt,Lt=()=>{var ve;ze(""),(ve=me.current)===null||ve===void 0||ve.focus()},dt=(0,we.r)({clearButtonRef:Oe,showClearButton:et,size:J,onClear:Lt}),{postfixButtons:ct,inputTabIndex:pt,onInputKeyDown:tt}=(0,G.C)({inputRef:me,postfixButtons:(0,i.useMemo)(()=>[dt],[dt]),readonly:!1,submitKeys:["Enter","Space"]}),ut=(0,i.useCallback)(ve=>{var Ce;Ye&&Ye(ve),tt(ve),ve.key==="Enter"&&(!((Ce=me.current)===null||Ce===void 0)&&Ce.value)&&qe&&qe(me.current.value)},[tt,Ye,qe]),Bt=(0,i.useCallback)(ve=>{$e&&$e(ve),(0,kt.G8)(me.current)},[$e]);return(0,o.jsxs)("div",Object.assign({className:h()(Se.container,Tt)},(0,lt.z7)(Mt),{"data-size":J,children:[(0,o.jsx)("span",{className:Se.prefix,children:Me?(0,o.jsx)(it.b,{"data-test-id":Je.iconSun}):(0,o.jsx)(z.A,{"data-test-id":Je.iconSearch})}),(0,o.jsx)(Te.K,{inputMode:"search",value:rt,onChange:ze,onKeyDown:ut,onFocus:Bt,onBlur:wt,tabIndex:be!=null?be:pt,ref:(0,A.A)(Ae,me),placeholder:Ve!=null?Ve:Xt("placeholder"),type:"text","data-test-id":Je.input}),(0,o.jsx)("span",{className:Se.postfix,children:ct})]}))})}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css":((R,T,s)=>{s.d(T,{A:()=>z});var o=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),M=s.n(o),h=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),A=s.n(h),i=A()(M());i.push([R.id,`.checkbox--QyVrH{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--dimension-3m, 24px);
  height:var(--dimension-3m, 24px);
}

.beforeContent--ZnuVa{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.beforeContent--ZnuVa svg{
  max-width:100%;
  max-height:100%;
}

.expandableIcon--vOpsw{
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  fill:currentColor;
}

.markerContainer--jsp50{
  padding-top:var(--space-drop-list-item-marker-container-vertical-padding, 2px);
  padding-bottom:var(--space-drop-list-item-marker-container-vertical-padding, 2px);
  pointer-events:none;
  position:absolute;
  top:0;
  left:0;
  box-sizing:border-box;
  height:100%;
}
.markerContainer--jsp50:before{
  width:var(--size-drop-list-item-marker, 4px);
  border-bottom-right-radius:var(--radius-drop-list-marker, 4px);
  border-top-right-radius:var(--radius-drop-list-marker, 4px);
  content:"";
  display:block;
  height:100%;
}

.droplistItem--DTAyI{
  width:100%;
}
.droplistItem--DTAyI[data-size=s][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px));
}
.droplistItem--DTAyI[data-size=s][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-s, 24px));
}
.droplistItem--DTAyI[data-size=s] .headline--MQPJt{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--DTAyI[data-size=m][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px));
}
.droplistItem--DTAyI[data-size=m][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-m, 24px));
}
.droplistItem--DTAyI[data-size=m] .headline--MQPJt{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--DTAyI[data-size=l][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px));
}
.droplistItem--DTAyI[data-size=l][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-l, 24px));
}
.droplistItem--DTAyI[data-size=l] .headline--MQPJt{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--DTAyI[data-non-pointer]{
  cursor:inherit;
}

.innerWrapper--i3GWs[data-disabled] .expandableIcon--vOpsw{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.innerWrapper--i3GWs[data-disabled] .beforeContent--ZnuVa{
  opacity:var(--opacity-a064, 0.64);
}
.innerWrapper--i3GWs[data-disabled] .droplistItem--DTAyI{
  cursor:not-allowed;
}
.innerWrapper--i3GWs[data-has-checked][data-variant=single]::before, .innerWrapper--i3GWs[data-checked][data-variant=single]::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--i3GWs[data-has-checked][data-variant=single]:hover::before, .innerWrapper--i3GWs[data-checked][data-variant=single]:hover::before{
  opacity:var(--opacity-a016, 0.16);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--i3GWs[data-has-checked] .markerContainer--jsp50:before, .innerWrapper--i3GWs[data-checked] .markerContainer--jsp50:before{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--i3GWs[data-has-checked] .droplistItem--DTAyI:focus-visible[data-variant=single], .innerWrapper--i3GWs[data-checked] .droplistItem--DTAyI:focus-visible[data-variant=single]{
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--i3GWs[data-has-checked][data-disabled] .markerContainer--jsp50:before, .innerWrapper--i3GWs[data-checked][data-disabled] .markerContainer--jsp50:before{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}

.content--f9IeV{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}`,""]),i.locals={checkbox:"checkbox--QyVrH",beforeContent:"beforeContent--ZnuVa",expandableIcon:"expandableIcon--vOpsw",markerContainer:"markerContainer--jsp50",droplistItem:"droplistItem--DTAyI",headline:"headline--MQPJt",innerWrapper:"innerWrapper--i3GWs",content:"content--f9IeV"};const z=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css":((R,T,s)=>{s.d(T,{A:()=>z});var o=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),M=s.n(o),h=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),A=s.n(h),i=A()(M());i.push([R.id,`.pinTopItem--nudGX{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinTopItem--nudGX[data-size=s]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--nudGX[data-size=m]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--nudGX[data-size=l]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--nudGX li,
.pinTopItem--nudGX ul{
  list-style-type:none;
}

.pinBottomItem--mKEvi{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinBottomItem--mKEvi[data-size=s]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--mKEvi[data-size=m]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--mKEvi[data-size=l]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--mKEvi li,
.pinBottomItem--mKEvi ul{
  list-style-type:none;
}`,""]),i.locals={pinTopItem:"pinTopItem--nudGX",pinBottomItem:"pinBottomItem--mKEvi"};const z=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css":((R,T,s)=>{s.d(T,{A:()=>z});var o=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),M=s.n(o),h=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),A=s.n(h),i=A()(M());i.push([R.id,`.searchItem--A9Ohu{
  width:100%;
}
.searchItem--A9Ohu:focus-within, .searchItem--A9Ohu:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  max-width:100%;
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}`,""]),i.locals={searchItem:"searchItem--A9Ohu"};const z=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css":((R,T,s)=>{s.d(T,{A:()=>z});var o=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),M=s.n(o),h=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),A=s.n(h),i=A()(M());i.push([R.id,`.itemWrapper--EF_A_{
  position:relative;
  min-width:100%;
  margin:0;
  padding:0;
}
.itemWrapper--EF_A_::before, .itemWrapper--EF_A_::after{
  pointer-events:none;
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:transparent;
}
.itemWrapper--EF_A_[data-disabled], .itemWrapper--EF_A_:disabled{
  cursor:not-allowed;
  background-color:transparent;
  outline:none;
}
.itemWrapper--EF_A_[data-disabled]::before, .itemWrapper--EF_A_:disabled::before{
  display:none;
}
.itemWrapper--EF_A_[data-disabled]::after, .itemWrapper--EF_A_:disabled::after{
  cursor:not-allowed;
  background-color:transparent;
}
.itemWrapper--EF_A_:not([data-inactive], [data-disabled])[data-open]::before, .itemWrapper--EF_A_:not([data-inactive], [data-disabled])[data-focused]::before, .itemWrapper--EF_A_:not([data-inactive], [data-disabled]):focus-visible::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
@media (hover: hover){
  .itemWrapper--EF_A_:not([data-inactive], [data-disabled]):hover::before{
    opacity:var(--opacity-a008, 0.08);
    background-color:var(--sys-neutral-accent-default, #787b8a);
  }
}

.listItem--k3rpS{
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
.listItem--k3rpS[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
}
.listItem--k3rpS[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-bottom:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
}
.listItem--k3rpS[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-bottom:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
}
.listItem--k3rpS:not([data-inactive], [data-disabled])[data-focused], .listItem--k3rpS:not([data-inactive], [data-disabled]):focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
}`,""]),i.locals={itemWrapper:"itemWrapper--EF_A_",listItem:"listItem--k3rpS"};const z=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css":((R,T,s)=>{s.d(T,{A:()=>z});var o=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),M=s.n(o),h=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),A=s.n(h),i=A()(M());i.push([R.id,`.loader--ubJdM{
  display:flex;
  align-items:center;
  justify-content:center;
}
.loader--ubJdM[data-size=s]{
  height:var(--dimension-3m, 24px);
}
.loader--ubJdM[data-size=s][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-3m, 24px));
  height:calc(3 * var(--dimension-3m, 24px));
}
.loader--ubJdM[data-size=m]{
  height:var(--dimension-4m, 32px);
}
.loader--ubJdM[data-size=m][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-4m, 32px));
  height:calc(3 * var(--dimension-4m, 32px));
}
.loader--ubJdM[data-size=l]{
  height:var(--dimension-5m, 40px);
}
.loader--ubJdM[data-size=l][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-5m, 40px));
  height:calc(3 * var(--dimension-5m, 40px));
}
.loader--ubJdM:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}

.scrollStub--MV9td{
  height:calc(var(--dimension-025m, 2px) / 2);
  margin-top:calc(var(--dimension-025m, 2px) / -2);
  background:transparent;
}

.footer--MPkA1{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  padding:var(--dimension-050m, 4px);
}

.content--5taF1{
  overflow:hidden;
  flex-grow:1;
}

.virtualizedContainer--aP3Ak{
  position:relative;
  width:100%;
}

.virtualizedPositionBox--cJIhT{
  position:absolute;
  top:0;
  left:0;
  width:100%;
}`,""]),i.locals={loader:"loader--ubJdM",scrollStub:"scrollStub--MV9td",footer:"footer--MPkA1",content:"content--5taF1",virtualizedContainer:"virtualizedContainer--aP3Ak",virtualizedPositionBox:"virtualizedPositionBox--cJIhT"};const z=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css":((R,T,s)=>{s.d(T,{A:()=>z});var o=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),M=s.n(o),h=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),A=s.n(h),i=A()(M());i.push([R.id,`.listContainer--y2WTZ{
  display:flex;
  flex-direction:column;
  height:100%;
  margin:0;
  padding:0;
}
.listContainer--y2WTZ:focus-visible{
  border:none;
  outline:none;
}
.listContainer--y2WTZ:focus-visible[data-active]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.listContainer--y2WTZ:focus-visible[data-active] *{
  cursor:inherit;
}
.listContainer--y2WTZ li,
.listContainer--y2WTZ ul{
  list-style-type:none;
}

.wrapper--MMTxl{
  position:relative;
  overflow:hidden;
  display:block;
  box-sizing:border-box;
  height:100%;
}
.wrapper--MMTxl:has(.listContainer--y2WTZ:focus-visible){
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.wrapper--MMTxl li,
.wrapper--MMTxl ul{
  list-style-type:none;
}

.scrollContainerS--AKA71{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 32);
}

.scrollContainerM--sp1aQ{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 40);
}

.scrollContainerL--nr4Ol{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 48);
}`,""]),i.locals={listContainer:"listContainer--y2WTZ",wrapper:"wrapper--MMTxl",scrollContainerS:"scrollContainerS--AKA71",scrollContainerM:"scrollContainerM--sp1aQ",scrollContainerL:"scrollContainerL--nr4Ol"};const z=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css":((R,T,s)=>{s.d(T,{A:()=>z});var o=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),M=s.n(o),h=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),A=s.n(h),i=A()(M());i.push([R.id,`.accordion--kagLp{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  transition:gap 300ms;
}
.accordion--kagLp::-webkit-scrollbar{
  width:0;
}
.accordion--kagLp[aria-expanded=false]{
  gap:0;
}

.contentWrapper--WkCju{
  box-sizing:border-box;
  width:100%;
}
.contentWrapper--WkCju[aria-hidden=false] > div[data-content]{
  display:block;
}

.content--qcou1{
  position:relative;
  display:none;
  box-sizing:border-box;
  width:100%;
}`,""]),i.locals={accordion:"accordion--kagLp",contentWrapper:"contentWrapper--WkCju",content:"content--qcou1"};const z=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css":((R,T,s)=>{s.d(T,{A:()=>z});var o=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),M=s.n(o),h=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),A=s.n(h),i=A()(M());i.push([R.id,`.headline--C4iCD{
  display:flex;
}

.label--AbAqv{
  overflow:hidden;
  flex:1;
  color:var(--sys-neutral-text-main, #41424e);
}

.caption--B3js8{
  overflow:hidden;
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  text-overflow:ellipsis;
  white-space:nowrap;
}

.description--XAS1Z{
  color:var(--sys-neutral-text-support, #6d707f);
}

.content--lmo3G{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}
.content--lmo3G[data-size=s] .headline--C4iCD{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--lmo3G[data-size=s] .label--AbAqv{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  display:flex;
  align-items:center;
}
.content--lmo3G[data-size=s] .caption--B3js8{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--lmo3G[data-size=s] .description--XAS1Z{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--lmo3G[data-size=m] .headline--C4iCD{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--lmo3G[data-size=m] .label--AbAqv{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  display:flex;
  align-items:center;
}
.content--lmo3G[data-size=m] .caption--B3js8{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--lmo3G[data-size=m] .description--XAS1Z{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--lmo3G[data-size=l] .headline--C4iCD{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--lmo3G[data-size=l] .label--AbAqv{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
  display:flex;
  align-items:center;
}
.content--lmo3G[data-size=l] .caption--B3js8{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--lmo3G[data-size=l] .description--XAS1Z{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--lmo3G[data-disabled] .label--AbAqv,
.content--lmo3G[data-disabled] .description--XAS1Z,
.content--lmo3G[data-disabled] .caption--B3js8{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),i.locals={headline:"headline--C4iCD",label:"label--AbAqv",caption:"caption--B3js8",description:"description--XAS1Z",content:"content--lmo3G"};const z=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css":((R,T,s)=>{s.d(T,{A:()=>z});var o=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),M=s.n(o),h=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),A=s.n(h),i=A()(M());i.push([R.id,`.listEmptyStateWrapper--kMwFM{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  padding:var(--dimension-1m, 8px);
}`,""]),i.locals={listEmptyStateWrapper:"listEmptyStateWrapper--kMwFM"};const z=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.3_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css":((R,T,s)=>{s.d(T,{A:()=>z});var o=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),M=s.n(o),h=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),A=s.n(h),i=A()(M());i.push([R.id,`.separatorWithLabel--eD3x_{
  display:flex;
  gap:var(--dimension-1m, 8px);
  align-items:flex-end;
  box-sizing:border-box;
  width:100%;
  min-width:100%;
}
.separatorWithLabel--eD3x_[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-s, 32px);
}
.separatorWithLabel--eD3x_[data-size=s] .label--Aa9nb[data-mode=primary]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--eD3x_[data-size=s] .label--Aa9nb[data-mode=secondary]{
  font-family:var(--light-label-m-font-family, SB Sans Interface);
  font-weight:var(--light-label-m-font-weight, Regular);
  line-height:var(--light-label-m-line-height, 16px);
  font-size:var(--light-label-m-font-size, 12px);
  letter-spacing:var(--light-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--eD3x_[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-m, 40px);
}
.separatorWithLabel--eD3x_[data-size=m] .label--Aa9nb[data-mode=primary]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--eD3x_[data-size=m] .label--Aa9nb[data-mode=secondary]{
  font-family:var(--light-label-l-font-family, SB Sans Interface);
  font-weight:var(--light-label-l-font-weight, Regular);
  line-height:var(--light-label-l-line-height, 20px);
  font-size:var(--light-label-l-font-size, 14px);
  letter-spacing:var(--light-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--eD3x_[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-l, 48px);
}
.separatorWithLabel--eD3x_[data-size=l] .label--Aa9nb[data-mode=primary]{
  font-family:var(--sans-title-m-font-family, SB Sans Interface);
  font-weight:var(--sans-title-m-font-weight, Semibold);
  line-height:var(--sans-title-m-line-height, 24px);
  font-size:var(--sans-title-m-font-size, 16px);
  letter-spacing:var(--sans-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);
}
.separatorWithLabel--eD3x_[data-size=l] .label--Aa9nb[data-mode=secondary]{
  font-family:var(--light-title-m-font-family, SB Sans Interface);
  font-weight:var(--light-title-m-font-weight, Regular);
  line-height:var(--light-title-m-line-height, 24px);
  font-size:var(--light-title-m-font-size, 16px);
  letter-spacing:var(--light-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-m-paragraph-spacing, 8.8px);
}

.separatorWithoutLabel--nR5RH{
  display:flex;
  align-items:flex-end;
  box-sizing:border-box;
}
.separatorWithoutLabel--nR5RH[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
}
.separatorWithoutLabel--nR5RH[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
}
.separatorWithoutLabel--nR5RH[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
}

.label--Aa9nb{
  overflow:hidden;
  flex-shrink:1;
}
.label--Aa9nb[data-mode=primary]{
  color:var(--sys-neutral-text-main, #41424e);
}
.label--Aa9nb[data-mode=secondary]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}

hr.divider--Hon36{
  flex:1;
  width:auto;
  min-width:0;
}

.selectButton--WnH8W{
  display:flex;
  justify-content:flex-end;
}
.selectButton--WnH8W[data-weight=primary]{
  --divider-height:1px;
}
.selectButton--WnH8W[data-weight=secondary]{
  --divider-height:0.5px;
}
.selectButton--WnH8W[data-size=s]{
  transform:translateY(calc((var(--size-button-xs, 24px) - var(--sans-label-s-line-height, 14px)) / 2 - var(--divider-height, 0)));
}
.selectButton--WnH8W[data-size=m]{
  transform:translateY(calc((var(--size-button-s, 32px) - var(--sans-label-m-line-height, 16px)) / 2 - var(--divider-height, 0)));
}
.selectButton--WnH8W[data-size=l]{
  transform:translateY(calc((var(--size-button-m, 40px) - var(--sans-label-l-line-height, 20px)) / 2 - var(--divider-height, 0)));
}`,""]),i.locals={separatorWithLabel:"separatorWithLabel--eD3x_",label:"label--Aa9nb",separatorWithoutLabel:"separatorWithoutLabel--nR5RH",divider:"divider--Hon36",selectButton:"selectButton--WnH8W"};const z=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+search-private@0.4.29_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/styles.module.css":((R,T,s)=>{s.d(T,{A:()=>z});var o=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),M=s.n(o),h=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),A=s.n(h),i=A()(M());i.push([R.id,`.container--QrmsK{
  display:flex;
  flex-grow:1;
  align-items:center;
  box-sizing:border-box;
}
.container--QrmsK[data-size=s]{
  gap:var(--space-search-search-private-s, 4px);
}
.container--QrmsK[data-size=s] input{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  cursor:text;
}
.container--QrmsK[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--QrmsK[data-size=m]{
  gap:var(--space-search-search-private-m, 4px);
}
.container--QrmsK[data-size=m] input{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  cursor:text;
}
.container--QrmsK[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--QrmsK[data-size=l]{
  gap:var(--space-search-search-private-l, 8px);
}
.container--QrmsK[data-size=l] input{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
  cursor:text;
}
.container--QrmsK[data-size=l] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.postfix--3vGo7{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-postfix-gap, 4px);
}

.prefix--TKxtM{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),i.locals={container:"container--QrmsK",postfix:"postfix--3vGo7",prefix:"prefix--TKxtM"};const z=i})}]);})();
