"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[690],{"./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js"(E,p,e){e.d(p,{A:()=>x});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=function(s,l){var a={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&l.indexOf(t)<0&&(a[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(a[t[n]]=s[t[n]]);return a};const d=_.forwardRef((s,l)=>{var{size:a=24}=s,t=y(s,["size"]);t.width=void 0,t.height=void 0;const n="-kebab-s";return typeof a=="number"&&(t.style||(t.style={}),t.style.width=a+"px",t.style.height=a+"px"),(0,o.jsx)("svg",Object.assign({ref:l,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var r=function(s,l){var a={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&l.indexOf(t)<0&&(a[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(a[t[n]]=s[t[n]]);return a};const b=_.forwardRef((s,l)=>{var{size:a=24}=s,t=r(s,["size"]);t.width=void 0,t.height=void 0;const n="-kebab-xs";return typeof a=="number"&&(t.style||(t.style={}),t.style.width=a+"px",t.style.height=a+"px"),(0,o.jsx)("svg",Object.assign({ref:l,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var T=function(s,l){var a={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&l.indexOf(t)<0&&(a[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(s);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(s,t[n])&&(a[t[n]]=s[t[n]]);return a};const x=(0,_.forwardRef)((s,l)=>{var{size:a=24}=s,t=T(s,["size"]);return Number(a)>=20?(0,o.jsx)(d,Object.assign({ref:l,size:a},t)):(0,o.jsx)(b,Object.assign({ref:l,size:a},t))})},"./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"(E,p,e){e.d(p,{i:()=>C});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(_),g=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+dropdown@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),f=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),b=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),T=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),D=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),x=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),s=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),l=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),a=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),t=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),n=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),N=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),R=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),z=function(j,I){var u={};for(var c in j)Object.prototype.hasOwnProperty.call(j,c)&&I.indexOf(c)<0&&(u[c]=j[c]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,c=Object.getOwnPropertySymbols(j);h<c.length;h++)I.indexOf(c[h])<0&&Object.prototype.propertyIsEnumerable.call(j,c[h])&&(u[c[h]]=j[c[h]]);return u};const v=["top","right","bottom","left"];function C(j){var{items:I,search:u,pinBottom:c=[],pinTop:h=[],footerActiveElementsRefs:S,children:k,trigger:B,placement:w,widthStrategy:V,triggerElemRef:O,open:le,onOpenChange:re,collapse:q={},triggerClassName:ce,selection:P,contentRender:me,size:pe="s",marker:_e=!0,closeDroplistOnItemClick:ge=!1,className:ye,listRef:Me,untouchableScrollbars:fe=!1,virtualized:ee=!1,closeOnPopstate:be}=j,ke=z(j,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const te=(0,d.useMemo)(()=>!!u,[u]),[Z=[],se]=(0,f.I)(q),ve=(0,d.useCallback)(i=>se(m=>m!=null&&m.includes(i)?m.filter(M=>M!==i):(m!=null?m:[]).concat([i])),[se]),[je=!1,Y]=(0,f.I)({value:le,defaultValue:!1,onChange:re}),{searchItem:U,footerItems:K}=(0,T.nG)({footerActiveElementsRefs:S}),ne=(0,d.useMemo)(()=>{const i=(0,D.lg)({items:h,prefix:b.$.pinTop,parentId:b.$.default}),m=(0,D.lg)({items:I,prefix:b.$.default,parentId:b.$.default}),M=(0,D.lg)({items:c,prefix:b.$.pinBottom,parentId:b.$.default}),L=Object.assign(Object.assign(Object.assign({},i.flattenItems),M.flattenItems),m.flattenItems),G=Object.assign(Object.assign(Object.assign({},i.focusFlattenItems),M.focusFlattenItems),m.focusFlattenItems);return[...K,U].forEach(A=>{L[A.id]=A,G[A.id]=Object.assign(Object.assign({},A),{originalId:A.id,items:[],key:A.id,allChildIds:[]})}),{items:m,pinTop:i,pinBottom:M,flattenItems:L,focusFlattenItems:G}},[I,h,c,U,K]),{flattenItems:he,focusFlattenItems:oe}=ne,F=z(ne,["flattenItems","focusFlattenItems"]),{ids:Q,expandedIds:de}=(0,d.useMemo)(()=>{const{pinTop:i,items:m,pinBottom:M}=F;let L=[],G=[];return te&&L.push(U.id),[i,m,M].forEach(({focusFlattenItems:A,focusCloseChildIds:Ae})=>{const ie=(0,D.e)({focusFlattenItems:A,focusCloseChildIds:Ae,openCollapseItems:Z,isSelectionMultiple:(P==null?void 0:P.mode)==="multiple"});L=L.concat(ie.ids),G=G.concat(ie.expandedIds)}),K.forEach(A=>{L.push(A.id)}),{ids:L,expandedIds:G}},[K,te,F,Z,U.id,P==null?void 0:P.mode]),X=(0,d.useRef)(null),ae=(0,d.useRef)(null),ue=Q[0],{handleListKeyDownFactory:$,resetActiveItemId:W,activeItemId:Ee,forceUpdateActiveItemId:H}=(0,n.d)({mainRef:O!=null?O:X,focusFlattenItems:oe,hasListInFocusChain:!0,firstItemId:ue}),Ie=(0,d.useCallback)(i=>$(Q,de)(i),[$,Q,de]),Oe=(0,d.useCallback)(i=>{W(),Y(i)},[W,Y]),J=(0,d.useCallback)((i,m)=>{i.key==="ArrowDown"&&(i.preventDefault(),Y(!0),setTimeout(()=>{var M;W(),(M=ae.current)===null||M===void 0||M.focus()},0)),i.key==="ArrowUp"&&Y(!1),m==null||m(i)},[W,Y]),De=(0,d.useMemo)(()=>(0,d.isValidElement)(k),[k]),Ne=(0,d.useMemo)(()=>{if((0,d.isValidElement)(k)){const i=typeof k.props=="object"?k.props:{};return(0,d.cloneElement)(k,Object.assign(Object.assign({},i),{onKeyDown:m=>{var M;J(m,(M=k.props)===null||M===void 0?void 0:M.onKeyDown)}}))}return typeof k=="function"?k({onKeyDown:J}):k},[J,k]);return(0,o.jsx)(l.Tr,{flattenItems:he,focusFlattenItems:oe,contentRender:me,size:pe,marker:_e,firstItemId:ue,virtualized:ee,children:(0,o.jsx)(x.WM,Object.assign({},P,{children:(0,o.jsx)(s.bN.Provider,{value:{openCollapseItems:Z,toggleOpenCollapseItem:ve,toggleOn:q.toggleOn},children:(0,o.jsx)(a.m.Provider,{value:{activeItemId:Ee,handleListKeyDownFactory:$,forceUpdateActiveItemId:H},children:(0,o.jsx)(t.K.Provider,{value:{closeDroplistOnItemClick:ge,closeDroplist:()=>{var i;Y(!1),W(),(i=(O!=null?O:X).current)===null||i===void 0||i.focus()}},children:(0,o.jsx)(r.m,{content:(0,o.jsx)("div",{className:y()(R.A.wrapper,ye),children:(0,o.jsx)(N.Q,Object.assign({},ke,{items:F.items.focusCloseChildIds,pinTop:F.pinTop.focusCloseChildIds,pinBottom:F.pinBottom.focusCloseChildIds,virtualized:ee,onKeyDown:Ie,searchItem:U,tabIndex:0,ref:(0,g.A)(ae,Me),search:u,onFocus:i=>{i.stopPropagation(),H==null||H(Q[0])},limitedScrollHeight:!0,untouchableScrollbars:fe}))}),outsideClick:!0,triggerClassName:ce,fallbackPlacements:v,trigger:B,placement:w,widthStrategy:V,triggerRef:O?De&&O||void 0:X,open:je,onOpenChange:Oe,closeOnPopstate:be,children:Ne})})})})}))})}},"./packages/site-grid/stories/SiteGrid.story.tsx"(E,p,e){e.r(p),e.d(p,{default:()=>c,grid:()=>B});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./packages/card-predefined/src/components/CardSuggest/CardSuggest.tsx");const y=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.0.0 (2026-09-22)


### BREAKING CHANGES


* **FF-8693:** adopt workspace and catalog protocols for package deps ([a6ef2f3](https://github.com/cloud-ru-tech/uikit-product/commit/a6ef2f373b946dcb613a477776df9478085a64da))




## 1.1.3 (2026-03-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@9.1.0]($PUBLIC_PROJECT_URL/blob/master/packages/utils/CHANGELOG.md)





## 1.1.2 (2026-02-16)


### Bug Fixes

* **FF-8052:** fix homepage link ([dffd09c](https://github.com/cloud-ru-tech/uikit-product/commit/dffd09c642edf4842eee02ccc4ec3e5894f4a29e))





## 1.1.1 (2026-02-02)


### Bug Fixes

* **FF-7841:** update repo links ([1893c4a](https://github.com/cloud-ru-tech/uikit-product/commit/1893c4a3e600069f98ab37c728e167937faa3440))





# 1.1.0 (2026-02-02)


### Bug Fixes

* **FF-7846:** replace tokens usage ([b690050](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b6900500e2f2c73e184f8b67f689f4a42571a154))
* **FF-7861:** massive scope update ([b93fa9f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b93fa9fed13a579f5f02efc16ea43d8bedbd5aca))
* **FF-7861:** update all 0 versions to 1 ([737c2b4](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/737c2b494d48be5132554ae9f03c960a8cbe3a34))
* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))
* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))
* **PDS-1377:** grid columns amount is now maxAmount ([fd90492](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/fd9049205510ab67db87e8cb385bfb44e4cc5434))


### Features

* **PDS-1110:** grid component ([d4e3c55](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d4e3c55496fa05e399740957771e296c46d09fd3))
* **SITE-9927:** add new value for grid gap ([3f1a8af](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/3f1a8af9ababe2a2952cba6eafc1d56166002386))





## 0.1.10 (2025-12-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.9 (2025-12-08)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.8 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.7 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.6 (2025-11-13)


### Bug Fixes

* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))





## 0.1.5 (2025-11-13)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.4 (2025-11-12)


### Bug Fixes

* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))





## 0.1.3 (2025-11-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.2 (2025-11-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.1 (2025-09-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.1.0 (2025-09-17)


### Features

* **SITE-9927:** add new value for grid gap ([3f1a8af](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/3f1a8af9ababe2a2952cba6eafc1d56166002386))





## 0.0.12 (2025-09-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.11 (2025-08-19)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.10 (2025-08-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.9 (2025-08-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.8 (2025-07-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@5.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.7 (2025-07-16)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@5.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.6 (2025-06-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@4.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.5 (2025-03-04)


### Bug Fixes

* **PDS-1377:** grid columns amount is now maxAmount ([fd90492](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/fd9049205510ab67db87e8cb385bfb44e4cc5434))





## <small>0.0.4 (2025-02-05)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.8](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.0.3 (2024-12-26)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.7](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.0.2 (2024-12-26)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.0.1 (2024-12-19)</small>

* feat(PDS-1110): grid component ([d4e3c55](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d4e3c55))





## CHANGELOG

### v0.0.0

- Initial version
`,g=JSON.parse('{"UU":"@cloud-ru/uikit-product-site-grid","rE":"2.0.0"}'),d=`# Site Grid

## Installation
\`npm i @cloud-ru/uikit-product-site-grid\`

[//]: DOCUMENTATION_SECTION_START
[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT
## Grid
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| layoutType* | enum LayoutType: \`"mobile"\`, \`"tablet"\`, \`"desktop"\`, \`"desktopSmall"\` | - |  |
| columnsConfig* | \`ColumnsConfig\` | - | \u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0434\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 layoutType |
| children* | \`ReactNode\` | - | \u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 |
| gap | "xs" \\| "s" \\| "m" \\| "l" | m | \u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C\u0438 \u0438 \u0440\u044F\u0434\u0430\u043C\u0438 |
| className | \`string\` | - | CSS-\u043A\u043B\u0430\u0441\u0441 |


[//]: DOCUMENTATION_SECTION_END

[Changelog](./CHANGELOG.md)


`;var r=e("./packages/site-grid/src/components/Grid.tsx");const f={Mobile:"mobile",Tablet:"tablet",Desktop:"desktop",DesktopSmall:"desktopSmall"};var b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=e.n(b),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),x=e.n(D),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),l=e.n(s),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),t=e.n(a),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(n),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),z=e.n(R),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-grid/stories/styles.module.scss"),C={};C.styleTagTransform=z(),C.setAttributes=t(),C.insert=l().bind(null,"head"),C.domAPI=x(),C.insertStyleElement=N();var j=T()(v.A,C);const I=v.A&&v.A.locals?v.A.locals:void 0;var c={title:"Site/Grid",component:r.x};const h=["one","two","three","four","five","six","seven","eight","nine"],S={desktop:{amount:4,minWidth:300},tablet:{amount:2,minWidth:300},mobile:{amount:3,minWidth:250}},B={render:({layoutType:w,gap:V})=>(0,o.jsx)("div",{className:I.wrapper,children:(0,o.jsx)(r.x,{columnsConfig:S,gap:V,layoutType:w,children:h.map(O=>(0,o.jsx)(_.n,{title:`Card ${O} title`,description:`Card ${O} description`},O))})}),args:{layoutType:"desktop",gap:"m"},argTypes:{layoutType:{name:"[Story]: Layout type",options:Object.values(f),control:{type:"radio"}}},parameters:{readme:{sidebar:[`Latest version: ${g.rE}`,d,y]},packageName:g.UU}}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-grid/src/components/styles.module.scss"(E,p,e){e.d(p,{A:()=>r});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(o),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=e.n(y),d=g()(_());d.push([E.id,".grid--kqbfF{box-sizing:border-box;display:grid;--gap-count: calc(var(--grid-column-count) - 1);--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));--grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));grid-template-columns:repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));grid-gap:var(--grid-layout-gap)}.grid--kqbfF[data-gap=l]{--grid-layout-gap: var(--dimension-4m, 32px)}.grid--kqbfF[data-gap=m]{--grid-layout-gap: var(--dimension-2m, 16px)}.grid--kqbfF[data-gap=s]{--grid-layout-gap: var(--dimension-1m, 8px)}.grid--kqbfF[data-gap=xs]{--grid-layout-gap: var(--dimension-025m, 2px)}.grid--kqbfF[data-layout-type=tablet][data-gap=l],.grid--kqbfF[data-layout-type=mobile][data-gap=l]{--grid-layout-gap: var(--dimension-2m, 16px)}.grid--kqbfF[data-layout-type=tablet][data-gap=m],.grid--kqbfF[data-layout-type=tablet][data-gap=s],.grid--kqbfF[data-layout-type=mobile][data-gap=m],.grid--kqbfF[data-layout-type=mobile][data-gap=s]{--grid-layout-gap: var(--dimension-1m, 8px)}",""]),d.locals={grid:"grid--kqbfF"};const r=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-grid/stories/styles.module.scss"(E,p,e){e.d(p,{A:()=>r});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(o),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=e.n(y),d=g()(_());d.push([E.id,".wrapper--QVcHL{resize:both;overflow:auto}",""]),d.locals={wrapper:"wrapper--QVcHL"};const r=d},"./packages/utils/src/utils/extractSupportProps.ts"(E,p,e){e.d(p,{z:()=>y});var o=e("./packages/utils/src/utils/private/constants.ts");function _(g,d){return Object.keys(g).reduce((r,f)=>(f.match(d)&&(r[f]=g[f]),r),{})}function y(g){return _(g,o.d)}},"./packages/utils/src/utils/private/constants.ts"(E,p,e){e.d(p,{d:()=>o});const o=/^(data|aria)-/},"./packages/card-predefined/src/components/CardSuggest/CardSuggest.tsx"(E,p,e){e.d(p,{n:()=>r});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/@snack-uikit+card@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"),y=e("./node_modules/.pnpm/@snack-uikit+truncate-string@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),g=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const d={title:2,description:3};function r({title:f,description:b,truncate:T,onClick:D,className:x,disabled:s,href:l,promoBadge:a,size:t,...n}){const N={...d,...T};return(0,o.jsx)(_.Z,{...(0,g.z7)(n),size:t,promoBadge:a,href:l,disabled:s,header:(0,o.jsx)(_.Z.Header,{title:f,truncate:{title:N.title}}),onClick:D,className:x,children:(0,o.jsx)(y.m,{text:b,maxLines:N.description,"data-test-id":"card-suggest__description"})})}try{r.displayName="CardSuggest",r.__docgenInfo={description:"",displayName:"CardSuggest",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS-\u043A\u043B\u0430\u0441\u0441 \u0434\u043B\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0441 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u043C",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"\u041A\u043E\u043B\u0431\u0435\u043A \u043D\u0430 \u043A\u043B\u0438\u043A \u043F\u043E \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>) => void)"}},href:{defaultValue:null,description:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",name:"href",required:!1,type:{name:"string"}},promoBadge:{defaultValue:null,description:"PromoBadge",name:"promoBadge",required:!1,type:{name:'string | Pick<PromoTagProps, "text" | "color" | "appearance">'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},truncate:{defaultValue:null,description:"",name:"truncate",required:!1,type:{name:"{ title?: number; description?: number; } | undefined"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/card-predefined/src/components/CardSuggest/CardSuggest.tsx#CardSuggest"]={docgenInfo:r.__docgenInfo,name:"CardSuggest",path:"packages/card-predefined/src/components/CardSuggest/CardSuggest.tsx#CardSuggest"})}catch(f){}},"./packages/site-grid/src/components/Grid.tsx"(E,p,e){e.d(p,{x:()=>I});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(_),g=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./packages/utils/src/utils/extractSupportProps.ts");const r=({columnsConfig:u,layoutType:c})=>{switch(c){case"mobile":if(u.mobile)return{"--grid-column-count":u.mobile.amount,"--grid-item--min-width":`${u.mobile.minWidth}px`};break;case"tablet":if(u.tablet)return{"--grid-column-count":u.tablet.amount,"--grid-item--min-width":`${u.tablet.minWidth}px`};break;case"desktopSmall":if(u.desktopSmall)return{"--grid-column-count":u.desktopSmall.amount,"--grid-item--min-width":`${u.desktopSmall.minWidth}px`};if(u.desktop)return{"--grid-column-count":u.desktop.amount,"--grid-item--min-width":`${u.desktop.minWidth}px`};break;case"desktop":if(u.desktop)return{"--grid-column-count":u.desktop.amount,"--grid-item--min-width":`${u.desktop.minWidth}px`};break;default:return}};var f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(f),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),D=e.n(T),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),s=e.n(x),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),a=e.n(l),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),n=e.n(t),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n(N),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-grid/src/components/styles.module.scss"),v={};v.styleTagTransform=R(),v.setAttributes=a(),v.insert=s().bind(null,"head"),v.domAPI=D(),v.insertStyleElement=n();var C=b()(z.A,v);const j=z.A&&z.A.locals?z.A.locals:void 0;function I({children:u,columnsConfig:c,gap:h="m",layoutType:S,className:k,...B}){const w=(0,g.useMemo)(()=>r({columnsConfig:c,layoutType:S}),[c,S]);return(0,o.jsx)("div",{className:y()(j.grid,k),...(0,d.z)(B),style:w,"data-gap":h,"data-layout-type":S,children:u})}try{I.displayName="Grid",I.__docgenInfo={description:"",displayName:"Grid",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435",name:"children",required:!0,type:{name:"ReactNode"}},columnsConfig:{defaultValue:null,description:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0434\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 layoutType",name:"columnsConfig",required:!0,type:{name:"ColumnsConfig"}},gap:{defaultValue:{value:"m"},description:"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C\u0438 \u0438 \u0440\u044F\u0434\u0430\u043C\u0438",name:"gap",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xs"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},layoutType:{defaultValue:null,description:"",name:"layoutType",required:!0,type:{name:"enum",value:[{value:'"mobile"'},{value:'"tablet"'},{value:'"desktop"'},{value:'"desktopSmall"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/site-grid/src/components/Grid.tsx#Grid"]={docgenInfo:I.__docgenInfo,name:"Grid",path:"packages/site-grid/src/components/Grid.tsx#Grid"})}catch(u){}},"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="(E){E.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="}}]);})();
