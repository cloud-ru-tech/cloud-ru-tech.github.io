"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3278],{"./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"(d,i,e){e.d(i,{i:()=>se});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),r=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(r),c=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),_=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),v=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),m=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),C=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),j=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),O=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),A=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),M=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),h=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),x=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),S=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),Q=function(b,L){var y={};for(var g in b)Object.prototype.hasOwnProperty.call(b,g)&&L.indexOf(g)<0&&(y[g]=b[g]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,g=Object.getOwnPropertySymbols(b);E<g.length;E++)L.indexOf(g[E])<0&&Object.prototype.propertyIsEnumerable.call(b,g[E])&&(y[g[E]]=b[g[E]]);return y};const ne=["top","right","bottom","left"];function se(b){var{items:L,search:y,pinBottom:g=[],pinTop:E=[],footerActiveElementsRefs:ce,children:k,trigger:oe,placement:ie,widthStrategy:ue,triggerElemRef:I,open:de,onOpenChange:ae,collapse:re={},triggerClassName:le,selection:N,contentRender:pe,size:me="s",marker:ge=!0,closeDroplistOnItemClick:_e=!1,className:Me,listRef:ke,untouchableScrollbars:he=!1,virtualized:w=!1,closeOnPopstate:be}=b,fe=Q(b,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const Z=(0,t.useMemo)(()=>!!y,[y]),[U=[],V]=(0,l.I)(re),ve=(0,t.useCallback)(s=>V(o=>o!=null&&o.includes(s)?o.filter(p=>p!==s):(o!=null?o:[]).concat([s])),[V]),[Ee=!1,T]=(0,l.I)({value:de,defaultValue:!1,onChange:ae}),{searchItem:P,footerItems:R}=(0,v.nG)({footerActiveElementsRefs:ce}),J=(0,t.useMemo)(()=>{const s=(0,m.lg)({items:E,prefix:_.$.pinTop,parentId:_.$.default}),o=(0,m.lg)({items:L,prefix:_.$.default,parentId:_.$.default}),p=(0,m.lg)({items:g,prefix:_.$.pinBottom,parentId:_.$.default}),D=Object.assign(Object.assign(Object.assign({},s.flattenItems),p.flattenItems),o.flattenItems),z=Object.assign(Object.assign(Object.assign({},s.focusFlattenItems),p.focusFlattenItems),o.focusFlattenItems);return[...R,P].forEach(f=>{D[f.id]=f,z[f.id]=Object.assign(Object.assign({},f),{originalId:f.id,items:[],key:f.id,allChildIds:[]})}),{items:o,pinTop:s,pinBottom:p,flattenItems:D,focusFlattenItems:z}},[L,E,g,P,R]),{flattenItems:Ie,focusFlattenItems:X}=J,G=Q(J,["flattenItems","focusFlattenItems"]),{ids:Y,expandedIds:$}=(0,t.useMemo)(()=>{const{pinTop:s,items:o,pinBottom:p}=G;let D=[],z=[];return Z&&D.push(P.id),[s,o,p].forEach(({focusFlattenItems:f,focusCloseChildIds:Te})=>{const te=(0,m.e)({focusFlattenItems:f,focusCloseChildIds:Te,openCollapseItems:U,isSelectionMultiple:(N==null?void 0:N.mode)==="multiple"});D=D.concat(te.ids),z=z.concat(te.expandedIds)}),R.forEach(f=>{D.push(f.id)}),{ids:D,expandedIds:z}},[R,Z,G,U,P.id,N==null?void 0:N.mode]),K=(0,t.useRef)(null),q=(0,t.useRef)(null),ee=Y[0],{handleListKeyDownFactory:W,resetActiveItemId:F,activeItemId:De,forceUpdateActiveItemId:B}=(0,h.d)({mainRef:I!=null?I:K,focusFlattenItems:X,hasListInFocusChain:!0,firstItemId:ee}),Oe=(0,t.useCallback)(s=>W(Y,$)(s),[W,Y,$]),ye=(0,t.useCallback)(s=>{F(),T(s)},[F,T]),H=(0,t.useCallback)((s,o)=>{s.key==="ArrowDown"&&(s.preventDefault(),T(!0),setTimeout(()=>{var p;F(),(p=q.current)===null||p===void 0||p.focus()},0)),s.key==="ArrowUp"&&T(!1),o==null||o(s)},[F,T]),Ne=(0,t.useMemo)(()=>(0,t.isValidElement)(k),[k]),je=(0,t.useMemo)(()=>{if((0,t.isValidElement)(k)){const s=typeof k.props=="object"?k.props:{};return(0,t.cloneElement)(k,Object.assign(Object.assign({},s),{onKeyDown:o=>{var p;H(o,(p=k.props)===null||p===void 0?void 0:p.onKeyDown)}}))}return typeof k=="function"?k({onKeyDown:H}):k},[H,k]);return(0,n.jsx)(O.Tr,{flattenItems:Ie,focusFlattenItems:X,contentRender:pe,size:me,marker:ge,firstItemId:ee,virtualized:w,children:(0,n.jsx)(C.WM,Object.assign({},N,{children:(0,n.jsx)(j.bN.Provider,{value:{openCollapseItems:U,toggleOpenCollapseItem:ve},children:(0,n.jsx)(A.m.Provider,{value:{activeItemId:De,handleListKeyDownFactory:W,forceUpdateActiveItemId:B},children:(0,n.jsx)(M.K.Provider,{value:{closeDroplistOnItemClick:_e,closeDroplist:()=>{var s;T(!1),F(),(s=(I!=null?I:K).current)===null||s===void 0||s.focus()}},children:(0,n.jsx)(a.m,{content:(0,n.jsx)("div",{className:u()(S.A.wrapper,Me),children:(0,n.jsx)(x.Q,Object.assign({},fe,{items:G.items.focusCloseChildIds,pinTop:G.pinTop.focusCloseChildIds,pinBottom:G.pinBottom.focusCloseChildIds,virtualized:w,onKeyDown:Oe,searchItem:P,tabIndex:0,ref:(0,c.A)(q,ke),search:y,onFocus:s=>{s.stopPropagation(),B==null||B(Y[0])},limitedScrollHeight:!0,untouchableScrollbars:he}))}),outsideClick:!0,triggerClassName:le,fallbackPlacements:ne,trigger:oe,placement:ie,widthStrategy:ue,triggerRef:I?Ne&&I||void 0:K,open:Ee,onOpenChange:ye,closeOnPopstate:be,children:je})})})})}))})}},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/ToggleGroup/ToggleGroup.js"(d,i,e){e.d(i,{O:()=>a});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),c=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),t=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/context.js");function a({children:l,value:_,onChange:v,selectionMode:m=c.ds.Single,defaultValue:C}){const[j,O]=(0,u.iC)(_,C,M=>{v==null||v(M(j))}),A=(0,r.useCallback)(M=>m===c.ds.Single?O(h=>{if(M!==h)return M}):O((h=[])=>{if(Array.isArray(h))return h.includes(M)?h.filter(x=>x!==M):h.concat(M)}),[m,O]);return(0,n.jsx)(t.p.Provider,{value:{value:j,onChange:A,selectionMode:m},children:l})}},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/ToggleGroup/hooks.js"(d,i,e){e.d(i,{p:()=>c});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),u=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/context.js");function c({value:t}){const{value:a,onChange:l,selectionMode:_}=(0,u.C)(),v=(0,n.useMemo)(()=>typeof a=="string"?a===t:Array.isArray(a)?a.includes(t):!1,[a,t]),m=(0,n.useCallback)(()=>{l==null||l(t)},[t,l]);return{isChecked:v,handleClick:m,multipleSelection:_===r.ds.Multiple}}},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"(d,i,e){e.d(i,{SK:()=>r,ds:()=>c,g:()=>n,hZ:()=>u});const n={Checkbox:"checkbox",Radio:"radio"},r={S:"s",M:"m"},u={Star:"star",Heart:"heart"},c={Single:"single",Multiple:"multiple"}},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/context.js"(d,i,e){e.d(i,{C:()=>c,p:()=>u});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js");const u=(0,n.createContext)({value:void 0,onChange:void 0,selectionMode:r.ds.Single}),c=()=>(0,n.useContext)(u)},"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/WithTooltip/WithTooltip.js"(d,i,e){e.d(i,{k:()=>u});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),r=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function u({tooltip:c,children:t}){return c!=null&&c.tip?(0,n.jsx)(r.m,Object.assign({},c,{children:t})):(0,n.jsx)(n.Fragment,{children:t})}},"./packages/utils/src/utils/extractSupportProps.ts"(d,i,e){e.d(i,{z:()=>u});var n=e("./packages/utils/src/utils/private/constants.ts");function r(c,t){return Object.keys(c).reduce((a,l)=>(l.match(t)&&(a[l]=c[l]),a),{})}function u(c){return r(c,n.d)}},"./packages/utils/src/utils/private/constants.ts"(d,i,e){e.d(i,{d:()=>n});const n=/^(data|aria)-/},"./packages/toggles-predefined/src/components/ToggleCard/ToggleCard.tsx"(d,i,e){e.d(i,{L:()=>t});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),r=e("./packages/utils/src/utils/extractSupportProps.ts"),u=e("./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"),c=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/ToggleGroup/hooks.js");function t({title:a,emblem:l,description:_,className:v,disabled:m,size:C,value:j,promoBadge:O,truncate:A,name:M,...h}){const{isChecked:x,handleClick:S}=(0,c.p)({value:j});return(0,n.jsx)(u.Z,{checked:x,onClick:m?void 0:S,disabled:m,size:C,outline:!0,promoBadge:O,name:M,header:(0,n.jsx)(u.Z.Header,{title:a,description:_,emblem:l,className:v,truncate:A}),...(0,r.z)(h)},a)}try{t.displayName="ToggleCard",t.__docgenInfo={description:"",displayName:"ToggleCard",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},truncate:{defaultValue:null,description:"",name:"truncate",required:!1,type:{name:'Pick<{ title?: number; description?: number; metadata?: number | undefined; }, "title" | "description"> | undefined'}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},emblem:{defaultValue:null,description:"",name:"emblem",required:!1,type:{name:"EmblemProps"}},promoBadge:{defaultValue:null,description:"",name:"promoBadge",required:!1,type:{name:'string | Pick<PromoTagProps, "text" | "appearance">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/toggles-predefined/src/components/ToggleCard/ToggleCard.tsx#ToggleCard"]={docgenInfo:t.__docgenInfo,name:"ToggleCard",path:"packages/toggles-predefined/src/components/ToggleCard/ToggleCard.tsx#ToggleCard"})}catch(a){}},"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="(d){d.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},"./packages/toggles-predefined/CHANGELOG.md"(d){d.exports=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
`},"./packages/toggles-predefined/README.md"(d){d.exports=`# Toggles

## Installation
\`npm i @cloud-ru/uikit-product-toggles-predefined\`

[Changelog](./CHANGELOG.md)


`},"./packages/toggles-predefined/package.json"(d){d.exports=JSON.parse('{"UU":"@cloud-ru/uikit-product-toggles-predefined","rE":"2.0.6"}')}}]);})();
