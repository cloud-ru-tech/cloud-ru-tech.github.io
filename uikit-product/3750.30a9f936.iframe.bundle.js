"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3750],{"./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js"(m,g,t){t.d(g,{A:()=>N});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=function(n,d){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&d.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)d.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(n,e[s])&&(i[e[s]]=n[e[s]]);return i};const c=b.forwardRef((n,d)=>{var{size:i=24}=n,e=f(n,["size"]);e.width=void 0,e.height=void 0;const s="-kebab-s";return typeof i=="number"&&(e.style||(e.style={}),e.style.width=i+"px",e.style.height=i+"px"),(0,o.jsx)("svg",Object.assign({ref:d,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var a=function(n,d){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&d.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)d.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(n,e[s])&&(i[e[s]]=n[e[s]]);return i};const _=b.forwardRef((n,d)=>{var{size:i=24}=n,e=a(n,["size"]);e.width=void 0,e.height=void 0;const s="-kebab-xs";return typeof i=="number"&&(e.style||(e.style={}),e.style.width=i+"px",e.style.height=i+"px"),(0,o.jsx)("svg",Object.assign({ref:d,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var v=function(n,d){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&d.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(n);s<e.length;s++)d.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(n,e[s])&&(i[e[s]]=n[e[s]]);return i};const N=(0,b.forwardRef)((n,d)=>{var{size:i=24}=n,e=v(n,["size"]);return Number(i)>=20?(0,o.jsx)(c,Object.assign({ref:d,size:i},e)):(0,o.jsx)(_,Object.assign({ref:d,size:i},e))})},"./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"(m,g,t){t.d(g,{i:()=>ce});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=t.n(b),l=t("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),c=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=t("./node_modules/.pnpm/@snack-uikit+dropdown@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),p=t("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),_=t("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),v=t("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),k=t("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),N=t("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),n=t("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),d=t("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),i=t("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),e=t("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),s=t("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),z=t("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),B=t("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),H=function(O,L){var x={};for(var h in O)Object.prototype.hasOwnProperty.call(O,h)&&L.indexOf(h)<0&&(x[h]=O[h]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,h=Object.getOwnPropertySymbols(O);E<h.length;E++)L.indexOf(h[E])<0&&Object.prototype.propertyIsEnumerable.call(O,h[E])&&(x[h[E]]=O[h[E]]);return x};const se=["top","right","bottom","left"];function ce(O){var{items:L,search:x,pinBottom:h=[],pinTop:E=[],footerActiveElementsRefs:oe,children:y,trigger:ie,placement:ue,widthStrategy:de,triggerElemRef:j,open:re,onOpenChange:ae,collapse:Q={},triggerClassName:le,selection:C,contentRender:pe,size:me="s",marker:ge=!0,closeDroplistOnItemClick:be=!1,className:fe,listRef:Me,untouchableScrollbars:_e=!1,virtualized:Z=!1,closeOnPopstate:ke}=O,he=H(O,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const V=(0,c.useMemo)(()=>!!x,[x]),[w=[],X]=(0,p.I)(Q),ve=(0,c.useCallback)(u=>X(r=>r!=null&&r.includes(u)?r.filter(M=>M!==u):(r!=null?r:[]).concat([u])),[X]),[ye=!1,T]=(0,p.I)({value:re,defaultValue:!1,onChange:ae}),{searchItem:P,footerItems:S}=(0,v.nG)({footerActiveElementsRefs:oe}),J=(0,c.useMemo)(()=>{const u=(0,k.lg)({items:E,prefix:_.$.pinTop,parentId:_.$.default}),r=(0,k.lg)({items:L,prefix:_.$.default,parentId:_.$.default}),M=(0,k.lg)({items:h,prefix:_.$.pinBottom,parentId:_.$.default}),D=Object.assign(Object.assign(Object.assign({},u.flattenItems),M.flattenItems),r.flattenItems),A=Object.assign(Object.assign(Object.assign({},u.focusFlattenItems),M.focusFlattenItems),r.focusFlattenItems);return[...S,P].forEach(I=>{D[I.id]=I,A[I.id]=Object.assign(Object.assign({},I),{originalId:I.id,items:[],key:I.id,allChildIds:[]})}),{items:r,pinTop:u,pinBottom:M,flattenItems:D,focusFlattenItems:A}},[L,E,h,P,S]),{flattenItems:Oe,focusFlattenItems:$}=J,G=H(J,["flattenItems","focusFlattenItems"]),{ids:R,expandedIds:q}=(0,c.useMemo)(()=>{const{pinTop:u,items:r,pinBottom:M}=G;let D=[],A=[];return V&&D.push(P.id),[u,r,M].forEach(({focusFlattenItems:I,focusCloseChildIds:ze})=>{const ne=(0,k.e)({focusFlattenItems:I,focusCloseChildIds:ze,openCollapseItems:w,isSelectionMultiple:(C==null?void 0:C.mode)==="multiple"});D=D.concat(ne.ids),A=A.concat(ne.expandedIds)}),S.forEach(I=>{D.push(I.id)}),{ids:D,expandedIds:A}},[S,V,G,w,P.id,C==null?void 0:C.mode]),U=(0,c.useRef)(null),ee=(0,c.useRef)(null),te=R[0],{handleListKeyDownFactory:K,resetActiveItemId:F,activeItemId:Ie,forceUpdateActiveItemId:Y}=(0,s.d)({mainRef:j!=null?j:U,focusFlattenItems:$,hasListInFocusChain:!0,firstItemId:te}),Ee=(0,c.useCallback)(u=>K(R,q)(u),[K,R,q]),je=(0,c.useCallback)(u=>{F(),T(u)},[F,T]),W=(0,c.useCallback)((u,r)=>{u.key==="ArrowDown"&&(u.preventDefault(),T(!0),setTimeout(()=>{var M;F(),(M=ee.current)===null||M===void 0||M.focus()},0)),u.key==="ArrowUp"&&T(!1),r==null||r(u)},[F,T]),De=(0,c.useMemo)(()=>(0,c.isValidElement)(y),[y]),Ne=(0,c.useMemo)(()=>{if((0,c.isValidElement)(y)){const u=typeof y.props=="object"?y.props:{};return(0,c.cloneElement)(y,Object.assign(Object.assign({},u),{onKeyDown:r=>{var M;W(r,(M=y.props)===null||M===void 0?void 0:M.onKeyDown)}}))}return typeof y=="function"?y({onKeyDown:W}):y},[W,y]);return(0,o.jsx)(d.Tr,{flattenItems:Oe,focusFlattenItems:$,contentRender:pe,size:me,marker:ge,firstItemId:te,virtualized:Z,children:(0,o.jsx)(N.WM,Object.assign({},C,{children:(0,o.jsx)(n.bN.Provider,{value:{openCollapseItems:w,toggleOpenCollapseItem:ve,toggleOn:Q.toggleOn},children:(0,o.jsx)(i.m.Provider,{value:{activeItemId:Ie,handleListKeyDownFactory:K,forceUpdateActiveItemId:Y},children:(0,o.jsx)(e.K.Provider,{value:{closeDroplistOnItemClick:be,closeDroplist:()=>{var u;T(!1),F(),(u=(j!=null?j:U).current)===null||u===void 0||u.focus()}},children:(0,o.jsx)(a.m,{content:(0,o.jsx)("div",{className:f()(B.A.wrapper,fe),children:(0,o.jsx)(z.Q,Object.assign({},he,{items:G.items.focusCloseChildIds,pinTop:G.pinTop.focusCloseChildIds,pinBottom:G.pinBottom.focusCloseChildIds,virtualized:Z,onKeyDown:Ee,searchItem:P,tabIndex:0,ref:(0,l.A)(ee,Me),search:x,onFocus:u=>{u.stopPropagation(),Y==null||Y(R[0])},limitedScrollHeight:!0,untouchableScrollbars:_e}))}),outsideClick:!0,triggerClassName:le,fallbackPlacements:se,trigger:ie,placement:ue,widthStrategy:de,triggerRef:j?De&&j||void 0:U,open:ye,onOpenChange:je,closeOnPopstate:ke,children:Ne})})})})}))})}},"./node_modules/.pnpm/@snack-uikit+toggles@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/ToggleGroup/ToggleGroup.js"(m,g,t){t.d(g,{O:()=>a});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=t("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),l=t("./node_modules/.pnpm/@snack-uikit+toggles@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),c=t("./node_modules/.pnpm/@snack-uikit+toggles@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/context.js");function a({children:p,value:_,onChange:v,selectionMode:k=l.ds.Single,defaultValue:N}){const[n,d]=(0,f.iC)(_,N,e=>{v==null||v(e(n))}),i=(0,b.useCallback)(e=>k===l.ds.Single?d(s=>{if(e!==s)return e}):d((s=[])=>{if(Array.isArray(s))return s.includes(e)?s.filter(z=>z!==e):s.concat(e)}),[k,d]);return(0,o.jsx)(c.p.Provider,{value:{value:n,onChange:i,selectionMode:k},children:p})}},"./node_modules/.pnpm/@snack-uikit+toggles@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/ToggleGroup/hooks.js"(m,g,t){t.d(g,{p:()=>l});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=t("./node_modules/.pnpm/@snack-uikit+toggles@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),f=t("./node_modules/.pnpm/@snack-uikit+toggles@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/context.js");function l({value:c}){const{value:a,onChange:p,selectionMode:_}=(0,f.C)(),v=(0,o.useMemo)(()=>typeof a=="string"?a===c:Array.isArray(a)?a.includes(c):!1,[a,c]),k=(0,o.useCallback)(()=>{p==null||p(c)},[c,p]);return{isChecked:v,handleClick:k,multipleSelection:_===b.ds.Multiple}}},"./node_modules/.pnpm/@snack-uikit+toggles@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/context.js"(m,g,t){t.d(g,{C:()=>l,p:()=>f});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=t("./node_modules/.pnpm/@snack-uikit+toggles@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js");const f=(0,o.createContext)({value:void 0,onChange:void 0,selectionMode:b.ds.Single}),l=()=>(0,o.useContext)(f)},"./packages/utils/src/utils/extractSupportProps.ts"(m,g,t){t.d(g,{z:()=>f});var o=t("./packages/utils/src/utils/private/constants.ts");function b(l,c){return Object.keys(l).reduce((a,p)=>(p.match(c)&&(a[p]=l[p]),a),{})}function f(l){return b(l,o.d)}},"./packages/utils/src/utils/private/constants.ts"(m,g,t){t.d(g,{d:()=>o});const o=/^(data|aria)-/},"./packages/toggles-predefined/src/components/ToggleCard/ToggleCard.tsx"(m,g,t){t.d(g,{L:()=>c});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=t("./packages/utils/src/utils/extractSupportProps.ts"),f=t("./node_modules/.pnpm/@snack-uikit+card@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"),l=t("./node_modules/.pnpm/@snack-uikit+toggles@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/ToggleGroup/hooks.js");function c({title:a,emblem:p,description:_,className:v,disabled:k,size:N,value:n,promoBadge:d,truncate:i,name:e,...s}){const{isChecked:z,handleClick:B}=(0,l.p)({value:n});return(0,o.jsx)(f.Z,{checked:z,onClick:k?void 0:B,disabled:k,size:N,outline:!0,promoBadge:d,name:e,header:(0,o.jsx)(f.Z.Header,{title:a,description:_,emblem:p,className:v,truncate:i}),...(0,b.z)(s)},a)}try{c.displayName="ToggleCard",c.__docgenInfo={description:"",displayName:"ToggleCard",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},truncate:{defaultValue:null,description:"",name:"truncate",required:!1,type:{name:'Pick<{ title?: number; description?: number; metadata?: number | undefined; }, "title" | "description"> | undefined'}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},emblem:{defaultValue:null,description:"",name:"emblem",required:!1,type:{name:"EmblemProps"}},promoBadge:{defaultValue:null,description:"",name:"promoBadge",required:!1,type:{name:'string | Pick<PromoTagProps, "text" | "appearance" | "color">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/toggles-predefined/src/components/ToggleCard/ToggleCard.tsx#ToggleCard"]={docgenInfo:c.__docgenInfo,name:"ToggleCard",path:"packages/toggles-predefined/src/components/ToggleCard/ToggleCard.tsx#ToggleCard"})}catch(a){}},"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="(m){m.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},"./packages/toggles-predefined/CHANGELOG.md"(m){m.exports=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.0.0 (2026-09-22)


### BREAKING CHANGES


* **FF-8693:** adopt workspace and catalog protocols for package deps ([a6ef2f3](https://github.com/cloud-ru-tech/uikit-product/commit/a6ef2f373b946dcb613a477776df9478085a64da))




## 2.0.7 (2026-07-15)


### Dependencies

* **FF-8766:** up deps card ([d2f6112](https://github.com/cloud-ru-tech/uikit-product/commit/d2f6112623fc7fc7b442e25f538a6393e2df81d9))





## 2.0.6 (2026-05-27)


### Bug Fixes

* **MKP-3566:** remove unnecessary var() function ([9ad766b](https://github.com/cloud-ru-tech/uikit-product/commit/9ad766ba013daa5cb9bb7620400beda0f7ce2270))





## 2.0.5 (2026-03-31)


### Bug Fixes

* **FF-8103:** dedupe onOpenChange from Floating UI in PopoverPrivate ([3ce49f4](https://github.com/cloud-ru-tech/uikit-product/commit/3ce49f4f993d48a97b97dc7cecc1402079cb41ff))





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
`},"./packages/toggles-predefined/README.md"(m){m.exports=`# Toggles

## Installation
\`npm i @cloud-ru/uikit-product-toggles-predefined\`

[Changelog](./CHANGELOG.md)


`},"./packages/toggles-predefined/package.json"(m){m.exports=JSON.parse('{"UU":"@cloud-ru/uikit-product-toggles-predefined","rE":"3.0.0"}')}}]);})();
