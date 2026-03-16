"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5120],{"./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js":((a,r,e)=>{e.d(r,{i:()=>se});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),M=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=e.n(M),o=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),i=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),g=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),v=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),p=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),C=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),j=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),y=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),A=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),_=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),h=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),L=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),S=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),Q=function(b,x){var N={};for(var m in b)Object.prototype.hasOwnProperty.call(b,m)&&x.indexOf(m)<0&&(N[m]=b[m]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var I=0,m=Object.getOwnPropertySymbols(b);I<m.length;I++)x.indexOf(m[I])<0&&Object.prototype.propertyIsEnumerable.call(b,m[I])&&(N[m[I]]=b[m[I]]);return N};const ne=["top","right","bottom","left"];function se(b){var{items:x,search:N,pinBottom:m=[],pinTop:I=[],footerActiveElementsRefs:ce,children:k,trigger:ue,placement:oe,widthStrategy:ie,triggerElemRef:E,open:de,onOpenChange:ae,collapse:re={},triggerClassName:le,selection:O,contentRender:pe,size:me="s",marker:ge=!0,closeDroplistOnItemClick:Me=!1,className:_e,listRef:ke,untouchableScrollbars:he=!1,virtualized:w=!1,closeOnPopstate:be}=b,fe=Q(b,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const Z=(0,t.useMemo)(()=>!!N,[N]),[U=[],V]=(0,i.I)(re),ve=(0,t.useCallback)(n=>V(c=>c!=null&&c.includes(n)?c.filter(d=>d!==n):(c!=null?c:[]).concat([n])),[V]),[Ie=!1,z]=(0,i.I)({value:de,defaultValue:!1,onChange:ae}),{searchItem:P,footerItems:Y}=(0,v.nG)({footerActiveElementsRefs:ce}),J=(0,t.useMemo)(()=>{const n=(0,p.lg)({items:I,prefix:g.$.pinTop,parentId:g.$.default}),c=(0,p.lg)({items:x,prefix:g.$.default,parentId:g.$.default}),d=(0,p.lg)({items:m,prefix:g.$.pinBottom,parentId:g.$.default}),D=Object.assign(Object.assign(Object.assign({},n.flattenItems),d.flattenItems),c.flattenItems),T=Object.assign(Object.assign(Object.assign({},n.focusFlattenItems),d.focusFlattenItems),c.focusFlattenItems);return[...Y,P].forEach(f=>{D[f.id]=f,T[f.id]=Object.assign(Object.assign({},f),{originalId:f.id,items:[],key:f.id,allChildIds:[]})}),{items:c,pinTop:n,pinBottom:d,flattenItems:D,focusFlattenItems:T}},[x,I,m,P,Y]),{flattenItems:Ee,focusFlattenItems:X}=J,G=Q(J,["flattenItems","focusFlattenItems"]),{ids:R,expandedIds:$}=(0,t.useMemo)(()=>{const{pinTop:n,items:c,pinBottom:d}=G;let D=[],T=[];return Z&&D.push(P.id),[n,c,d].forEach(({focusFlattenItems:f,focusCloseChildIds:ze})=>{const te=(0,p.e)({focusFlattenItems:f,focusCloseChildIds:ze,openCollapseItems:U,isSelectionMultiple:(O==null?void 0:O.mode)==="multiple"});D=D.concat(te.ids),T=T.concat(te.expandedIds)}),Y.forEach(f=>{D.push(f.id)}),{ids:D,expandedIds:T}},[Y,Z,G,U,P.id,O==null?void 0:O.mode]),K=(0,t.useRef)(null),q=(0,t.useRef)(null),ee=R[0],{handleListKeyDownFactory:W,resetActiveItemId:F,activeItemId:De,forceUpdateActiveItemId:B}=(0,h.d)({mainRef:E!=null?E:K,focusFlattenItems:X,hasListInFocusChain:!0,firstItemId:ee}),ye=(0,t.useCallback)(n=>W(R,$)(n),[W,R,$]),Ne=(0,t.useCallback)(n=>{F(),z(n)},[F,z]),H=(0,t.useCallback)((n,c)=>{n.key==="ArrowDown"&&(n.preventDefault(),z(!0),setTimeout(()=>{var d;F(),(d=q.current)===null||d===void 0||d.focus()},0)),n.key==="ArrowUp"&&z(!1),c==null||c(n)},[F,z]),Oe=(0,t.useMemo)(()=>(0,t.isValidElement)(k),[k]),je=(0,t.useMemo)(()=>{if((0,t.isValidElement)(k)){const n=typeof k.props=="object"?k.props:{};return(0,t.cloneElement)(k,Object.assign(Object.assign({},n),{onKeyDown:c=>{var d;H(c,(d=k.props)===null||d===void 0?void 0:d.onKeyDown)}}))}return typeof k=="function"?k({onKeyDown:H}):k},[H,k]);return(0,s.jsx)(C.Tr,{flattenItems:Ee,focusFlattenItems:X,contentRender:pe,size:me,marker:ge,firstItemId:ee,virtualized:w,children:(0,s.jsx)(j.WM,Object.assign({},O,{children:(0,s.jsx)(y.bN.Provider,{value:{openCollapseItems:U,toggleOpenCollapseItem:ve},children:(0,s.jsx)(A.m.Provider,{value:{activeItemId:De,handleListKeyDownFactory:W,forceUpdateActiveItemId:B},children:(0,s.jsx)(_.K.Provider,{value:{closeDroplistOnItemClick:Me,closeDroplist:()=>{var n;z(!1),F(),(n=(E!=null?E:K).current)===null||n===void 0||n.focus()}},children:(0,s.jsx)(u.m,{content:(0,s.jsx)("div",{className:l()(S.A.wrapper,_e),children:(0,s.jsx)(L.Q,Object.assign({},fe,{items:G.items.focusCloseChildIds,pinTop:G.pinTop.focusCloseChildIds,pinBottom:G.pinBottom.focusCloseChildIds,virtualized:w,onKeyDown:ye,searchItem:P,tabIndex:0,ref:(0,o.A)(q,ke),search:N,onFocus:n=>{n.stopPropagation(),B==null||B(R[0])},limitedScrollHeight:!0,untouchableScrollbars:he}))}),outsideClick:!0,triggerClassName:le,fallbackPlacements:ne,trigger:ue,placement:oe,widthStrategy:ie,triggerRef:E?Oe&&E||void 0:K,open:Ie,onOpenChange:Ne,closeOnPopstate:be,children:je})})})})}))})}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/ToggleGroup/ToggleGroup.js":((a,r,e)=>{e.d(r,{O:()=>u});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),M=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),t=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/context.js");function u({children:i,value:g,onChange:v,selectionMode:p=o.ds.Single,defaultValue:C}){const[j,y]=(0,l.iC)(g,C,_=>{v==null||v(_(j))}),A=(0,M.useCallback)(_=>p===o.ds.Single?y(h=>{if(_!==h)return _}):y((h=[])=>{if(Array.isArray(h))return h.includes(_)?h.filter(L=>L!==_):h.concat(_)}),[p,y]);return(0,s.jsx)(t.p.Provider,{value:{value:j,onChange:A,selectionMode:p},children:i})}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/ToggleGroup/hooks.js":((a,r,e)=>{e.d(r,{p:()=>o});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),M=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),l=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/context.js");function o({value:t}){const{value:u,onChange:i,selectionMode:g}=(0,l.C)(),v=(0,s.useMemo)(()=>typeof u=="string"?u===t:Array.isArray(u)?u.includes(t):!1,[u,t]),p=(0,s.useCallback)(()=>{i==null||i(t)},[t,i]);return{isChecked:v,handleClick:p,multipleSelection:g===M.ds.Multiple}}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/context.js":((a,r,e)=>{e.d(r,{C:()=>o,p:()=>l});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),M=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js");const l=(0,s.createContext)({value:void 0,onChange:void 0,selectionMode:M.ds.Single}),o=()=>(0,s.useContext)(l)}),"./packages/toggles-predefined/CHANGELOG.md":(a=>{a.exports=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 2.0.4 (2026-03-16)


### Bug Fixes

* **DOCDEV-2969:** fixed next js build issues ([a9bdab5](https://github.com/cloud-ru-tech/uikit-product/commit/a9bdab58a9f9a625dc05ce5d74f431d68f6245bc))





## 2.0.3 (2026-03-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@9.1.0]($PUBLIC_PROJECT_URL/blob/master/packages/utils/CHANGELOG.md)





## 2.0.2 (2026-02-16)


### Bug Fixes

* **FF-8052:** fix homepage link ([dffd09c](https://github.com/cloud-ru-tech/uikit-product/commit/dffd09c642edf4842eee02ccc4ec3e5894f4a29e))





## 2.0.1 (2026-02-02)


### Bug Fixes

* **FF-7841:** update repo links ([1893c4a](https://github.com/cloud-ru-tech/uikit-product/commit/1893c4a3e600069f98ab37c728e167937faa3440))





# 2.0.0 (2026-02-02)


### Bug Fixes

* **AICNTB-1503:** exctractSupportProps moved to Card component ([b3a0e32](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b3a0e32583c2d121c676273221b1054d0a1e6fd6))
* **FF-5383:** update snack packages versions ([3fc6a2f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/3fc6a2f940db810e5c514c7fb3d30350b291c61b))
* **FF-7846:** replace tokens usage ([b690050](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b6900500e2f2c73e184f8b67f689f4a42571a154))
* **FF-7861:** massive scope update ([b93fa9f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b93fa9fed13a579f5f02efc16ea43d8bedbd5aca))
* **FF-7861:** update all 0 versions to 1 ([737c2b4](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/737c2b494d48be5132554ae9f03c960a8cbe3a34))
* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))
* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))
* **RAG-1030:** truncate prop in toggle-card ([5e78074](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/5e78074cbfdb5f37874d109df552a81184afdc34))
* **SVP-11371:** change metadata to description ([2c6206c](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/2c6206cb99bc899015ea9c742fb72c284b58f077))


### Dependencies

* **FF-4704:** up deps ([7da95ef](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/7da95ef6551ced9a63c75970f43b047cc564cedc))
* **FF-5678:** up deps classnames/uncontrollable ([17b3e6e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/17b3e6e7d705fd0f013e7027c4fab244522866e4))
* **FF-5830:** up snack-uikit & some common deps ([03aefe0](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/03aefe0681240d2cffdbbdbbbc026da74d723dfd))
* **PDS-611:** up deps ([c30ac4c](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/c30ac4c2adb7c00e84fbe557d85314add6b6977a))
* **PDS-83:** update deps ([491b47d](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/491b47d42acd8cb179b0d66c616033d61fe95d7e))
* **PDS-955:** up snack-uikit deps ([8e7bbb9](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/8e7bbb9ae9cef8da37932e45fa76038e59ee2f98))


### Features

* **FF-3643:** add toggles ([0020648](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/00206481d1149012773ab3a754804664f3cd95c4))
* **FF-4183:** add truncate propery ([dd465c5](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/dd465c5eedc08c375239cb1e6e4aefaf82feb0d6))
* **FF-5782:** dart v3 use/forward approach ([eb0c4b3](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/eb0c4b30a008aa82ad7555ecc9d8420c21b1c7a4))
* **FF-5836:** support cjs syntax ([d44abd0](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d44abd0ddbbea0cd2bf0e1b99442cdb83b87df48))
* **FF-6410:** add name prop to toggle card ([d72116f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d72116f2c7dcfbea7fad264c73716fef343440a4))
* **SVP-11371:** re-export useToggleGroup hook ([ab62b13](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/ab62b133ce92c8e46f82140967cd172576f6fa31))
* **SVP-12821:** toggle card promoBadge prop ([725abe8](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/725abe8d64ffb333e9dbd6005d9f37ed6c951b42))


### BREAKING CHANGES


* **PDS-28:** remove SwitchRow ([4a754c2](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/4a754c20f8b6a1fd54e885434433d003b1790ed6))




## 0.8.18 (2026-01-20)


### Bug Fixes

* **RAG-1030:** truncate prop in toggle-card ([5e78074](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/5e78074cbfdb5f37874d109df552a81184afdc34))





## 0.8.17 (2025-12-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.16 (2025-12-08)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.15 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.14 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.13 (2025-11-13)


### Bug Fixes

* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))





## 0.8.12 (2025-11-13)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.11 (2025-11-12)


### Bug Fixes

* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))





## 0.8.10 (2025-11-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.9 (2025-11-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.8 (2025-09-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.7 (2025-09-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.6 (2025-08-19)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.5 (2025-08-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.4 (2025-08-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.3 (2025-07-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@5.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.2 (2025-07-16)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@5.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.1 (2025-06-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@4.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.8.0 (2025-05-22)


### Features

* **FF-6410:** add name prop to toggle card ([d72116f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d72116f2c7dcfbea7fad264c73716fef343440a4))





## 0.7.11 (2025-02-10)


### Dependencies

* **FF-4704:** up deps ([7da95ef](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/7da95ef6551ced9a63c75970f43b047cc564cedc))





## <small>0.7.10 (2025-02-05)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.8](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.7.9 (2024-12-26)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.7](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.7.8 (2024-12-26)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.7.7 (2024-12-26)</small>

* fix(AICNTB-1503): exctractSupportProps moved to Card component ([b3a0e32](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b3a0e32))





## <small>0.7.6 (2024-12-17)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.7.5 (2024-12-16)</small>

* chore(FF-5944): renamed snack uikit category to console ([411a818](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/411a818))





## <small>0.7.4 (2024-11-14)</small>

* deps(FF-5678): up deps classnames/uncontrollable ([17b3e6e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/17b3e6e))





## <small>0.7.3 (2024-11-07)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.7.2 (2024-11-06)</small>

* deps(PDS-955): up snack-uikit deps ([8e7bbb9](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/8e7bbb9))





## <small>0.7.1 (2024-11-05)</small>

* deps(FF-5830): up snack-uikit & some common deps ([03aefe0](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/03aefe0))





# 0.7.0 (2024-10-30)


### Features

* **FF-5836:** support cjs syntax ([d44abd0](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d44abd0ddbbea0cd2bf0e1b99442cdb83b87df48))





## 0.6.1 (2024-10-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.7.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.6.0 (2024-10-29)


### Features

* **FF-5782:** dart v3 use/forward approach ([eb0c4b3](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/eb0c4b30a008aa82ad7555ecc9d8420c21b1c7a4))





## 0.5.6 (2024-09-25)


### Dependencies

* **PDS-611:** up deps ([c30ac4c](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/c30ac4c2adb7c00e84fbe557d85314add6b6977a))





## 0.5.5 (2024-09-16)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.6.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.5.4 (2024-09-07)


### Bug Fixes

* **FF-5383:** update snack packages versions ([3fc6a2f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/3fc6a2f940db810e5c514c7fb3d30350b291c61b))





## 0.5.3 (2024-08-23)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.5.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.5.2 (2024-07-31)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.4.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.5.1 (2024-07-19)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.4.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.5.0 (2024-06-28)


### Bug Fixes

* **SVP-11371:** change metadata to description ([2c6206c](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/2c6206cb99bc899015ea9c742fb72c284b58f077))


### Features

* **SVP-11371:** re-export useToggleGroup hook ([ab62b13](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/ab62b133ce92c8e46f82140967cd172576f6fa31))





## 0.4.1 (2024-06-12)


### Dependencies

* **PDS-83:** update deps ([491b47d](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/491b47d42acd8cb179b0d66c616033d61fe95d7e))





# 0.4.0 (2024-05-06)


### Features

* **SVP-12821:** toggle card promoBadge prop ([725abe8](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/725abe8d64ffb333e9dbd6005d9f37ed6c951b42))





# 0.3.0 (2024-02-29)


### BREAKING CHANGES


* **PDS-28:** remove SwitchRow ([4a754c2](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/4a754c20f8b6a1fd54e885434433d003b1790ed6))




# 0.2.0 (2024-02-02)


### Features

* **FF-4183:** add truncate propery ([dd465c5](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/dd465c5eedc08c375239cb1e6e4aefaf82feb0d6))





# 0.1.0 (2024-01-25)


### Features

* **FF-3643:** add toggles ([0020648](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/00206481d1149012773ab3a754804664f3cd95c4))





## CHANGELOG

### v0.0.0

- Initial version
`}),"./packages/toggles-predefined/README.md":(a=>{a.exports=`# Toggles

## Installation
\`npm i @cloud-ru/uikit-product-toggles-predefined\`

[Changelog](./CHANGELOG.md)


`}),"./packages/toggles-predefined/package.json":(a=>{a.exports=JSON.parse('{"UU":"@cloud-ru/uikit-product-toggles-predefined","rE":"2.0.4"}')}),"./packages/toggles-predefined/src/components/ToggleCard/ToggleCard.tsx":((a,r,e)=>{e.d(r,{L:()=>t});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),M=e("./packages/utils/src/utils/extractSupportProps.ts"),l=e("./node_modules/.pnpm/@snack-uikit+card@0.20.16_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/ToggleGroup/hooks.js");function t({title:u,emblem:i,description:g,className:v,disabled:p,size:C,value:j,promoBadge:y,truncate:A,name:_,...h}){const{isChecked:L,handleClick:S}=(0,o.p)({value:j});return(0,s.jsx)(l.Z,{checked:L,onClick:p?void 0:S,disabled:p,size:C,outline:!0,promoBadge:y,name:_,header:(0,s.jsx)(l.Z.Header,{title:u,description:g,emblem:i,className:v,truncate:A}),...(0,M.z)(h)},u)}try{t.displayName="ToggleCard",t.__docgenInfo={description:"",displayName:"ToggleCard",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},truncate:{defaultValue:null,description:"",name:"truncate",required:!1,type:{name:'Pick<{ title?: number; description?: number; metadata?: number | undefined; }, "title" | "description"> | undefined'}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},emblem:{defaultValue:null,description:"",name:"emblem",required:!1,type:{name:"EmblemProps"}},promoBadge:{defaultValue:null,description:"",name:"promoBadge",required:!1,type:{name:'string | Pick<PromoTagProps, "text" | "appearance">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/toggles-predefined/src/components/ToggleCard/ToggleCard.tsx#ToggleCard"]={docgenInfo:t.__docgenInfo,name:"ToggleCard",path:"packages/toggles-predefined/src/components/ToggleCard/ToggleCard.tsx#ToggleCard"})}catch(u){}}),"./packages/utils/src/utils/extractSupportProps.ts":((a,r,e)=>{e.d(r,{z:()=>l});var s=e("./packages/utils/src/utils/private/constants.ts");function M(o,t){return Object.keys(o).reduce((u,i)=>(i.match(t)&&(u[i]=o[i]),u),{})}function l(o){return M(o,s.d)}}),"./packages/utils/src/utils/private/constants.ts":((a,r,e)=>{e.d(r,{d:()=>s});const s=/^(data|aria)-/}),"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=":(a=>{a.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="})}]);})();
