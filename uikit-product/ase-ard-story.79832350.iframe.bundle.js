"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9120],{"./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js"(E,g,e){e.d(g,{A:()=>P});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=function(n,p){var a={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&p.indexOf(s)<0&&(a[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(n);d<s.length;d++)p.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(n,s[d])&&(a[s[d]]=n[s[d]]);return a};const o=_.forwardRef((n,p)=>{var{size:a=24}=n,s=l(n,["size"]);s.width=void 0,s.height=void 0;const d="-kebab-s";return typeof a=="number"&&(s.style||(s.style={}),s.style.width=a+"px",s.style.height=a+"px"),(0,t.jsx)("svg",Object.assign({ref:p,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+d},s,{children:(0,t.jsx)("use",{href:"#snack-uikit-"+d.substring(1)})}))});var f=function(n,p){var a={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&p.indexOf(s)<0&&(a[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(n);d<s.length;d++)p.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(n,s[d])&&(a[s[d]]=n[s[d]]);return a};const I=_.forwardRef((n,p)=>{var{size:a=24}=n,s=f(n,["size"]);s.width=void 0,s.height=void 0;const d="-kebab-xs";return typeof a=="number"&&(s.style||(s.style={}),s.style.width=a+"px",s.style.height=a+"px"),(0,t.jsx)("svg",Object.assign({ref:p,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+d},s,{children:(0,t.jsx)("use",{href:"#snack-uikit-"+d.substring(1)})}))});var A=function(n,p){var a={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&p.indexOf(s)<0&&(a[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(n);d<s.length;d++)p.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(n,s[d])&&(a[s[d]]=n[s[d]]);return a};const P=(0,_.forwardRef)((n,p)=>{var{size:a=24}=n,s=A(n,["size"]);return Number(a)>=20?(0,t.jsx)(o,Object.assign({ref:p,size:a},s)):(0,t.jsx)(I,Object.assign({ref:p,size:a},s))})},"./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"(E,g,e){e.d(g,{i:()=>w});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=e.n(_),M=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=e("./node_modules/.pnpm/@snack-uikit+dropdown@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),C=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),I=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),A=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),v=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),P=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),n=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),p=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),a=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),s=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),d=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),x=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),k=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),Q=function(b,r){var O={};for(var u in b)Object.prototype.hasOwnProperty.call(b,u)&&r.indexOf(u)<0&&(O[u]=b[u]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,u=Object.getOwnPropertySymbols(b);c<u.length;c++)r.indexOf(u[c])<0&&Object.prototype.propertyIsEnumerable.call(b,u[c])&&(O[u[c]]=b[u[c]]);return O};const z=["top","right","bottom","left"];function w(b){var{items:r,search:O,pinBottom:u=[],pinTop:c=[],footerActiveElementsRefs:j,children:m,trigger:R,placement:Y,widthStrategy:U,triggerElemRef:T,open:J,onOpenChange:$,collapse:F={},triggerClassName:q,selection:N,contentRender:Z,size:_e="s",marker:pe=!0,closeDroplistOnItemClick:ge=!1,className:Me,listRef:ye,untouchableScrollbars:fe=!1,virtualized:oe=!1,closeOnPopstate:be}=b,ke=Q(b,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const de=(0,o.useMemo)(()=>!!O,[O]),[ee=[],ae]=(0,C.I)(F),je=(0,o.useCallback)(i=>ae(y=>y!=null&&y.includes(i)?y.filter(h=>h!==i):(y!=null?y:[]).concat([i])),[ae]),[he=!1,S]=(0,C.I)({value:J,defaultValue:!1,onChange:$}),{searchItem:K,footerItems:H}=(0,A.nG)({footerActiveElementsRefs:j}),ue=(0,o.useMemo)(()=>{const i=(0,v.lg)({items:c,prefix:I.$.pinTop,parentId:I.$.default}),y=(0,v.lg)({items:r,prefix:I.$.default,parentId:I.$.default}),h=(0,v.lg)({items:u,prefix:I.$.pinBottom,parentId:I.$.default}),L=Object.assign(Object.assign(Object.assign({},i.flattenItems),h.flattenItems),y.flattenItems),B=Object.assign(Object.assign(Object.assign({},i.focusFlattenItems),h.focusFlattenItems),y.focusFlattenItems);return[...H,K].forEach(D=>{L[D.id]=D,B[D.id]=Object.assign(Object.assign({},D),{originalId:D.id,items:[],key:D.id,allChildIds:[]})}),{items:y,pinTop:i,pinBottom:h,flattenItems:L,focusFlattenItems:B}},[r,c,u,K,H]),{flattenItems:Ee,focusFlattenItems:ie}=ue,W=Q(ue,["flattenItems","focusFlattenItems"]),{ids:V,expandedIds:le}=(0,o.useMemo)(()=>{const{pinTop:i,items:y,pinBottom:h}=W;let L=[],B=[];return de&&L.push(K.id),[i,y,h].forEach(({focusFlattenItems:D,focusCloseChildIds:De})=>{const me=(0,v.e)({focusFlattenItems:D,focusCloseChildIds:De,openCollapseItems:ee,isSelectionMultiple:(N==null?void 0:N.mode)==="multiple"});L=L.concat(me.ids),B=B.concat(me.expandedIds)}),H.forEach(D=>{L.push(D.id)}),{ids:L,expandedIds:B}},[H,de,W,ee,K.id,N==null?void 0:N.mode]),se=(0,o.useRef)(null),ce=(0,o.useRef)(null),re=V[0],{handleListKeyDownFactory:te,resetActiveItemId:G,activeItemId:Ie,forceUpdateActiveItemId:X}=(0,d.d)({mainRef:T!=null?T:se,focusFlattenItems:ie,hasListInFocusChain:!0,firstItemId:re}),ve=(0,o.useCallback)(i=>te(V,le)(i),[te,V,le]),xe=(0,o.useCallback)(i=>{G(),S(i)},[G,S]),ne=(0,o.useCallback)((i,y)=>{i.key==="ArrowDown"&&(i.preventDefault(),S(!0),setTimeout(()=>{var h;G(),(h=ce.current)===null||h===void 0||h.focus()},0)),i.key==="ArrowUp"&&S(!1),y==null||y(i)},[G,S]),Oe=(0,o.useMemo)(()=>(0,o.isValidElement)(m),[m]),Te=(0,o.useMemo)(()=>{if((0,o.isValidElement)(m)){const i=typeof m.props=="object"?m.props:{};return(0,o.cloneElement)(m,Object.assign(Object.assign({},i),{onKeyDown:y=>{var h;ne(y,(h=m.props)===null||h===void 0?void 0:h.onKeyDown)}}))}return typeof m=="function"?m({onKeyDown:ne}):m},[ne,m]);return(0,t.jsx)(p.Tr,{flattenItems:Ee,focusFlattenItems:ie,contentRender:Z,size:_e,marker:pe,firstItemId:re,virtualized:oe,children:(0,t.jsx)(P.WM,Object.assign({},N,{children:(0,t.jsx)(n.bN.Provider,{value:{openCollapseItems:ee,toggleOpenCollapseItem:je,toggleOn:F.toggleOn},children:(0,t.jsx)(a.m.Provider,{value:{activeItemId:Ie,handleListKeyDownFactory:te,forceUpdateActiveItemId:X},children:(0,t.jsx)(s.K.Provider,{value:{closeDroplistOnItemClick:ge,closeDroplist:()=>{var i;S(!1),G(),(i=(T!=null?T:se).current)===null||i===void 0||i.focus()}},children:(0,t.jsx)(f.m,{content:(0,t.jsx)("div",{className:l()(k.A.wrapper,Me),children:(0,t.jsx)(x.Q,Object.assign({},ke,{items:W.items.focusCloseChildIds,pinTop:W.pinTop.focusCloseChildIds,pinBottom:W.pinBottom.focusCloseChildIds,virtualized:oe,onKeyDown:ve,searchItem:K,tabIndex:0,ref:(0,M.A)(ce,ye),search:O,onFocus:i=>{i.stopPropagation(),X==null||X(V[0])},limitedScrollHeight:!0,untouchableScrollbars:fe}))}),outsideClick:!0,triggerClassName:q,fallbackPlacements:z,trigger:R,placement:Y,widthStrategy:U,triggerRef:T?Oe&&T||void 0:se,open:he,onOpenChange:xe,closeOnPopstate:be,children:Te})})})})}))})}},"./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js"(E,g,e){e.d(g,{E:()=>b});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=e.n(_),M=e("./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(o),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=e.n(C),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),v=e.n(A),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),n=e.n(P),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),a=e.n(p),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),d=e.n(s),x=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"),k={};k.styleTagTransform=d(),k.setAttributes=n(),k.insert=v().bind(null,"head"),k.domAPI=I(),k.insertStyleElement=a();var Q=f()(x.A,k);const z=x.A&&x.A.locals?x.A.locals:void 0;var w=function(r,O){var u={};for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&O.indexOf(c)<0&&(u[c]=r[c]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,c=Object.getOwnPropertySymbols(r);j<c.length;j++)O.indexOf(c[j])<0&&Object.prototype.propertyIsEnumerable.call(r,c[j])&&(u[c[j]]=r[c[j]]);return u};function b(r){var{width:O,height:u,className:c,borderRadius:j,loading:m,children:R}=r,Y=w(r,["width","height","className","borderRadius","loading","children"]);return(0,M.v)(m)?(0,t.jsx)("div",Object.assign({},Y,{style:{width:O,height:u,borderRadius:j},className:l()(z.skeleton,c)})):(0,t.jsx)(t.Fragment,{children:R})}},"./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js"(E,g,e){e.d(g,{Q:()=>M,r:()=>l});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const l=(0,_.createContext)(!1);function M({loading:o,children:f}){return(0,t.jsx)(l.Provider,{value:o,children:f})}},"./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"(E,g,e){e.d(g,{v:()=>l});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js");function l(M){return(0,t.useContext)(_.r)||M}},"./packages/site-case-card/stories/\u0421ase\u0421ard.story.tsx"(E,g,e){e.r(g),e.d(g,{caseCard:()=>A,default:()=>C});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const _=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.0.0 (2026-09-22)


### BREAKING CHANGES


* **FF-8693:** adopt workspace and catalog protocols for package deps ([a6ef2f3](https://github.com/cloud-ru-tech/uikit-product/commit/a6ef2f373b946dcb613a477776df9478085a64da))




## 1.2.5 (2026-08-11)


### Bug Fixes

* **SITE-11779:** case card image max-width ([88e5f3d](https://github.com/cloud-ru-tech/uikit-product/commit/88e5f3d37ba3e31eeea9284eb3b3710ef91dd7b0))





## 1.2.4 (2026-08-06)


### Bug Fixes

* **SITE-11738:** correct background color for case card ([4621701](https://github.com/cloud-ru-tech/uikit-product/commit/4621701e39cd88bc866d0d52729dae4431d21942))





## 1.2.3 (2026-05-27)


### Bug Fixes

* **MKP-3566:** remove unnecessary var() function ([9ad766b](https://github.com/cloud-ru-tech/uikit-product/commit/9ad766ba013daa5cb9bb7620400beda0f7ce2270))





## 1.2.2 (2026-04-14)


### Bug Fixes

* **PROFCOMM-2703:** applied scss fixes ([7cbee1b](https://github.com/cloud-ru-tech/uikit-product/commit/7cbee1bd74a48a78184db8e164a7864c7e140449))





## 1.2.1 (2026-03-31)


### Bug Fixes

* **FF-8103:** dedupe onOpenChange from Floating UI in PopoverPrivate ([3ce49f4](https://github.com/cloud-ru-tech/uikit-product/commit/3ce49f4f993d48a97b97dc7cecc1402079cb41ff))





# 1.2.0 (2026-03-16)


### Bug Fixes

* **DOCDEV-2969:** fixed next js build issues ([a9bdab5](https://github.com/cloud-ru-tech/uikit-product/commit/a9bdab58a9f9a625dc05ce5d74f431d68f6245bc))


### Features

* **DOCDEV-2969:** added mobileModalBodyClassName prop for site-selector-platform-drop-list ([515c2e4](https://github.com/cloud-ru-tech/uikit-product/commit/515c2e4100dc9825616bbd0210eeb9f520d647ff))





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


### Features

* **SITE-10016:** add skeleton for case card ([2d0049a](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/2d0049ad0517de16895a7abafbeb4334ade894db))
* **SITE-10394:** add border radius ([5e950bc](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/5e950bce806fab0a3213eef811a7ebcb411f1860))
* **SITE-9900:** add new CaseCard component ([2b6f29b](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/2b6f29bcba24166b059a8f0955901c47b3c7cd15))
* **SITE-9945:** edit styles case card ([ad500cc](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/ad500ccfe4215b245308714a003b495a8721147d))
* **SITE-9975:** update href site-case-card ([e70ad89](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/e70ad89e2eacaec632c9fb2feeaa3f20908fcc23))





## 0.5.1 (2025-12-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.5.0 (2025-12-15)


### Features

* **SITE-10394:** add border radius ([5e950bc](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/5e950bce806fab0a3213eef811a7ebcb411f1860))





## 0.4.8 (2025-12-08)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.4.7 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.4.6 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.4.5 (2025-11-13)


### Bug Fixes

* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))





## 0.4.4 (2025-11-13)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.4.3 (2025-11-12)


### Bug Fixes

* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))





## 0.4.2 (2025-11-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.4.1 (2025-11-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.4.0 (2025-10-20)


### Features

* **SITE-10016:** add skeleton for case card ([2d0049a](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/2d0049ad0517de16895a7abafbeb4334ade894db))





## 0.3.1 (2025-09-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.3.0 (2025-09-26)


### Features

* **SITE-9975:** update href site-case-card ([e70ad89](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/e70ad89e2eacaec632c9fb2feeaa3f20908fcc23))





# 0.2.0 (2025-09-22)


### Features

* **SITE-9945:** edit styles case card ([ad500cc](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/ad500ccfe4215b245308714a003b495a8721147d))





## 0.1.1 (2025-09-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.1.0 (2025-09-12)


### Features

* **SITE-9900:** add new CaseCard component ([2b6f29b](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/2b6f29bcba24166b059a8f0955901c47b3c7cd15))





## CHANGELOG

### v0.0.0

- Initial version
`,l=JSON.parse('{"UU":"@cloud-ru/uikit-product-site-case-card","rE":"2.0.0"}'),M=`# CaseCard

## Installation
\`npm i @cloud-ru/uikit-product-sitecasecard\`

[//]: DOCUMENTATION_SECTION_START
[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT
## CaseCard
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| layoutType* | enum LayoutType: \`"mobile"\`, \`"tablet"\`, \`"desktop"\`, \`"desktopSmall"\` | - |  |
| description* | \`string\` | - | \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u0433\u0434\u0435 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u043C\u0435\u0447\u0430\u044E\u0442\u0441\u044F \u0442\u0435\u0433\u043E\u043C <mark></mark> |
| img* | \`string\` | - | \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 img \u043B\u043E\u0433\u043E\u0442\u0438\u043F |
| href | \`string\` | - | \u0421\u0441\u044B\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 |
| categories | \`string[]\` | - | \u0421\u043F\u0438\u0441\u043E\u043A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 |
| visibleCategories | \`boolean\` | true | \u0424\u043B\u0430\u0433 \u043F\u043E\u043A\u0430\u0437\u0430 \u0438\u043B\u0438 \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 |
| loading | \`boolean\` | - | \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 |
| onClick | \`(e: MouseEvent<HTMLDivElement \\| HTMLAnchorElement, MouseEvent>) => void\` | - | \u0421\u043E\u0431\u044B\u0442\u0438\u0435 \u043A\u043B\u0438\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 |


[//]: DOCUMENTATION_SECTION_END

[Changelog](./CHANGELOG.md)

CaseCard
`;var o=e("./packages/site-case-card/src/components/CaseCard/CaseCard.tsx"),C={title:"Site/CaseCard",component:o.D};const A={render:({...v})=>(0,t.jsx)("div",{style:{width:v.layoutType==="mobile"?"328px":"364px"},children:(0,t.jsx)(o.D,{...v})}),args:{layoutType:"desktop",img:"https://cdn.cloud.ru/backend/cases/magnit_logo.webp",description:"\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u043B\u0438 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 <mark>\u0434\u0432\u0430</mark> \u0440\u0430\u0437\u0430",categories:["IT-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430","\u0423\u0441\u043B\u0443\u0433\u0438"],onClick:()=>{},visibleCategories:!0,href:"/test",loading:!1},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${l.rE}`,M,_]},packageName:l.UU,design:{name:"Figma",type:"figma",url:"https://www.figma.com/design/B2WqmDAbmTJXkRQk82ZrC7/branch/BClCz9jRFwf4Zxa7MdYoyv/Cases?node-id=4212-28912&p=f&m=dev"}}}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"(E,g,e){e.d(g,{A:()=>f});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(t),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),M=e.n(l),o=M()(_());o.push([E.id,`.skeleton--eoxVX{
  box-sizing:border-box;
  width:100%;
  height:1em;
  background:var(--gradient-skeleton, linear-gradient(115deg, rgba(36, 36, 48, 0.0784313725) 40%, rgba(36, 36, 48, 0) 50%, rgba(36, 36, 48, 0.0784313725) 60%)) 0 0/200% 100% repeat fixed;
  animation:loading--lsY7O 2s infinite linear;
}
@keyframes loading--lsY7O{
  to{
    background-position:-200% 0;
  }
}`,""]),o.locals={skeleton:"skeleton--eoxVX",loading:"loading--lsY7O"};const f=o},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-case-card/src/components/CaseCard/styles.module.scss"(E,g,e){e.d(g,{A:()=>f});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(t),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),M=e.n(l),o=M()(_());o.push([E.id,'.root--wDqk3{border-radius:4px;background:var(--sys-neutral-background2-level, #ffffff)}.container--fOQ6u{box-sizing:border-box;width:100%;height:216px;display:flex;justify-content:space-between;flex-direction:column}.container--fOQ6u[data-layout-type=tablet]{height:232px}.container--fOQ6u[data-layout-type=mobile]{height:192px}.image--ATaUi{height:46px;max-width:100%}.image--ATaUi[data-layout-type=mobile]{height:42px}.categoryGroup--h56r8{display:flex;flex-direction:row;gap:4px;align-items:center;flex-wrap:wrap}.category--picxc{color:var(--sys-neutral-text-support, #6d707f)}.category--picxc:not(:last-child)::after{content:"\xB7";margin-left:4px;color:var(--sys-neutral-text-support, #6d707f)}.textContainer--eo1dH{display:flex;flex-direction:column;gap:4px}.description--znP4I{color:var(--sys-neutral-text-main, #41424e)}.description--znP4I mark{color:var(--sys-primary-text-light, #6aaf90);background-color:unset}.description--znP4I span{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;line-clamp:3;-webkit-line-clamp:3;-webkit-box-orient:vertical}.description--znP4I span[data-layout-type=mobile]{line-clamp:5;-webkit-line-clamp:5}.skeletonIcon--dZUad{width:120px;height:40px}',""]),o.locals={root:"root--wDqk3",container:"container--fOQ6u",image:"image--ATaUi",categoryGroup:"categoryGroup--h56r8",category:"category--picxc",textContainer:"textContainer--eo1dH",description:"description--znP4I",skeletonIcon:"skeletonIcon--dZUad"};const f=o},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-case-card/src/helperComponents/styles.module.scss"(E,g,e){e.d(g,{A:()=>f});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(t),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),M=e.n(l),o=M()(_());o.push([E.id,".root--VbTCR{display:flex;flex-direction:column;gap:8px}.skeletonItems--qKTF0{height:12px}.skeletonText--kJTUc{height:14px}.skeletonTitle--ZF4iL{width:100%;height:14px}",""]),o.locals={root:"root--VbTCR",skeletonItems:"skeletonItems--qKTF0",skeletonText:"skeletonText--kJTUc",skeletonTitle:"skeletonTitle--ZF4iL"};const f=o},"./packages/site-case-card/src/components/CaseCard/CaseCard.tsx"(E,g,e){e.d(g,{D:()=>j});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/@snack-uikit+card@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js"),M=e("./node_modules/.pnpm/@snack-uikit+typography@1.0.1_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(o),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=e.n(C),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),v=e.n(A),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),n=e.n(P),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),a=e.n(p),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),d=e.n(s),x=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-case-card/src/helperComponents/styles.module.scss"),k={};k.styleTagTransform=d(),k.setAttributes=n(),k.insert=v().bind(null,"head"),k.domAPI=I(),k.insertStyleElement=a();var Q=f()(x.A,k);const z=x.A&&x.A.locals?x.A.locals:void 0;function w(){return(0,t.jsxs)("div",{className:z.root,children:[(0,t.jsx)(l.E,{loading:!0,width:124,className:z.skeletonItems}),(0,t.jsx)(l.E,{loading:!0,className:z.skeletonTitle}),(0,t.jsx)(l.E,{loading:!0,width:200,className:z.skeletonText})]})}var b=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-case-card/src/components/CaseCard/styles.module.scss"),r={};r.styleTagTransform=d(),r.setAttributes=n(),r.insert=v().bind(null,"head"),r.domAPI=I(),r.insertStyleElement=a();var O=f()(b.A,r);const u=b.A&&b.A.locals?b.A.locals:void 0,c={mobile:"m",tablet:"m",desktop:"l",desktopSmall:"l"};function j({layoutType:m,img:R,description:Y,categories:U,href:T,visibleCategories:J=!0,onClick:$,loading:F}){const q=m==="desktop"||m==="desktopSmall"?"m":"s",N=m==="mobile"?"s":"m";return(0,t.jsx)(_.Z,{href:T,onClick:$,size:c[m],className:u.root,children:(0,t.jsxs)("div",{className:u.container,"data-layout-type":m,children:[(0,t.jsx)(l.E,{loading:F,className:u.skeletonIcon,children:(0,t.jsx)("div",{children:(0,t.jsx)("img",{src:R,className:u.image,alt:"img","data-layout-type":m})})}),F?(0,t.jsx)(w,{}):(0,t.jsxs)("div",{className:u.textContainer,children:[J&&U&&(0,t.jsx)("div",{className:u.categoryGroup,children:U.map(Z=>(0,t.jsx)(M.o,{family:"sans",purpose:"body",size:q,className:u.category,children:Z},Z))}),(0,t.jsx)(M.o,{family:"sans",purpose:"title",size:N,className:u.description,children:(0,t.jsx)("span",{dangerouslySetInnerHTML:{__html:Y},"data-layout-type":m})})]})]})})}try{j.displayName="CaseCard",j.__docgenInfo={description:"",displayName:"CaseCard",props:{img:{defaultValue:null,description:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 img \u043B\u043E\u0433\u043E\u0442\u0438\u043F",name:"img",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",name:"href",required:!1,type:{name:"string"}},categories:{defaultValue:null,description:"\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439",name:"categories",required:!1,type:{name:"string[]"}},visibleCategories:{defaultValue:{value:"true"},description:"\u0424\u043B\u0430\u0433 \u043F\u043E\u043A\u0430\u0437\u0430 \u0438\u043B\u0438 \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439",name:"visibleCategories",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u0433\u0434\u0435 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u043C\u0435\u0447\u0430\u044E\u0442\u0441\u044F \u0442\u0435\u0433\u043E\u043C <mark></mark>",name:"description",required:!0,type:{name:"string"}},loading:{defaultValue:null,description:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",name:"loading",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"\u0421\u043E\u0431\u044B\u0442\u0438\u0435 \u043A\u043B\u0438\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>) => void)"}},layoutType:{defaultValue:null,description:"",name:"layoutType",required:!0,type:{name:"enum",value:[{value:'"mobile"'},{value:'"tablet"'},{value:'"desktop"'},{value:'"desktopSmall"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/site-case-card/src/components/CaseCard/CaseCard.tsx#CaseCard"]={docgenInfo:j.__docgenInfo,name:"CaseCard",path:"packages/site-case-card/src/components/CaseCard/CaseCard.tsx#CaseCard"})}catch(m){}},"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="(E){E.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="}}]);})();
