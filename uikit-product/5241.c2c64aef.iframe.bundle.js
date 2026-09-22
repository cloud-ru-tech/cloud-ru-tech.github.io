"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5241],{"./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"(a,_,e){e.d(_,{i:()=>oe});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(l),r=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("./node_modules/.pnpm/@snack-uikit+dropdown@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),i=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),c=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),m=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),A=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),v=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),k=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),E=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),D=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),U=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),ne=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),te=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),W=function(h,N){var T={};for(var M in h)Object.prototype.hasOwnProperty.call(h,M)&&N.indexOf(M)<0&&(T[M]=h[M]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,M=Object.getOwnPropertySymbols(h);f<M.length;f++)N.indexOf(M[f])<0&&Object.prototype.propertyIsEnumerable.call(h,M[f])&&(T[M[f]]=h[M[f]]);return T};const se=["top","right","bottom","left"];function oe(h){var{items:N,search:T,pinBottom:M=[],pinTop:f=[],footerActiveElementsRefs:ie,children:y,trigger:ce,placement:de,widthStrategy:ae,triggerElemRef:I,open:_e,onOpenChange:le,collapse:F={},triggerClassName:re,selection:L,contentRender:ue,size:pe="s",marker:me=!0,closeDroplistOnItemClick:Me=!1,className:ge,listRef:ye,untouchableScrollbars:Ee=!1,virtualized:V=!1,closeOnPopstate:he}=h,Oe=W(h,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const H=(0,n.useMemo)(()=>!!T,[T]),[w=[],Q]=(0,p.I)(F),fe=(0,n.useCallback)(o=>Q(d=>d!=null&&d.includes(o)?d.filter(u=>u!==o):(d!=null?d:[]).concat([o])),[Q]),[ke=!1,C]=(0,p.I)({value:_e,defaultValue:!1,onChange:le}),{searchItem:P,footerItems:S}=(0,c.nG)({footerActiveElementsRefs:ie}),J=(0,n.useMemo)(()=>{const o=(0,m.lg)({items:f,prefix:i.$.pinTop,parentId:i.$.default}),d=(0,m.lg)({items:N,prefix:i.$.default,parentId:i.$.default}),u=(0,m.lg)({items:M,prefix:i.$.pinBottom,parentId:i.$.default}),b=Object.assign(Object.assign(Object.assign({},o.flattenItems),u.flattenItems),d.flattenItems),j=Object.assign(Object.assign(Object.assign({},o.focusFlattenItems),u.focusFlattenItems),d.focusFlattenItems);return[...S,P].forEach(O=>{b[O.id]=O,j[O.id]=Object.assign(Object.assign({},O),{originalId:O.id,items:[],key:O.id,allChildIds:[]})}),{items:d,pinTop:o,pinBottom:u,flattenItems:b,focusFlattenItems:j}},[N,f,M,P,S]),{flattenItems:Ie,focusFlattenItems:$}=J,x=W(J,["flattenItems","focusFlattenItems"]),{ids:R,expandedIds:Z}=(0,n.useMemo)(()=>{const{pinTop:o,items:d,pinBottom:u}=x;let b=[],j=[];return H&&b.push(P.id),[o,d,u].forEach(({focusFlattenItems:O,focusCloseChildIds:je})=>{const ee=(0,m.e)({focusFlattenItems:O,focusCloseChildIds:je,openCollapseItems:w,isSelectionMultiple:(L==null?void 0:L.mode)==="multiple"});b=b.concat(ee.ids),j=j.concat(ee.expandedIds)}),S.forEach(O=>{b.push(O.id)}),{ids:b,expandedIds:j}},[S,H,x,w,P.id,L==null?void 0:L.mode]),Y=(0,n.useRef)(null),X=(0,n.useRef)(null),q=R[0],{handleListKeyDownFactory:G,resetActiveItemId:z,activeItemId:be,forceUpdateActiveItemId:B}=(0,U.d)({mainRef:I!=null?I:Y,focusFlattenItems:$,hasListInFocusChain:!0,firstItemId:q}),Te=(0,n.useCallback)(o=>G(R,Z)(o),[G,R,Z]),Le=(0,n.useCallback)(o=>{z(),C(o)},[z,C]),K=(0,n.useCallback)((o,d)=>{o.key==="ArrowDown"&&(o.preventDefault(),C(!0),setTimeout(()=>{var u;z(),(u=X.current)===null||u===void 0||u.focus()},0)),o.key==="ArrowUp"&&C(!1),d==null||d(o)},[z,C]),De=(0,n.useMemo)(()=>(0,n.isValidElement)(y),[y]),Ce=(0,n.useMemo)(()=>{if((0,n.isValidElement)(y)){const o=typeof y.props=="object"?y.props:{};return(0,n.cloneElement)(y,Object.assign(Object.assign({},o),{onKeyDown:d=>{var u;K(d,(u=y.props)===null||u===void 0?void 0:u.onKeyDown)}}))}return typeof y=="function"?y({onKeyDown:K}):y},[K,y]);return(0,s.jsx)(k.Tr,{flattenItems:Ie,focusFlattenItems:$,contentRender:ue,size:pe,marker:me,firstItemId:q,virtualized:V,children:(0,s.jsx)(A.WM,Object.assign({},L,{children:(0,s.jsx)(v.bN.Provider,{value:{openCollapseItems:w,toggleOpenCollapseItem:fe,toggleOn:F.toggleOn},children:(0,s.jsx)(E.m.Provider,{value:{activeItemId:be,handleListKeyDownFactory:G,forceUpdateActiveItemId:B},children:(0,s.jsx)(D.K.Provider,{value:{closeDroplistOnItemClick:Me,closeDroplist:()=>{var o;C(!1),z(),(o=(I!=null?I:Y).current)===null||o===void 0||o.focus()}},children:(0,s.jsx)(t.m,{content:(0,s.jsx)("div",{className:g()(te.A.wrapper,ge),children:(0,s.jsx)(ne.Q,Object.assign({},Oe,{items:x.items.focusCloseChildIds,pinTop:x.pinTop.focusCloseChildIds,pinBottom:x.pinBottom.focusCloseChildIds,virtualized:V,onKeyDown:Te,searchItem:P,tabIndex:0,ref:(0,r.A)(X,ye),search:T,onFocus:o=>{o.stopPropagation(),B==null||B(R[0])},limitedScrollHeight:!0,untouchableScrollbars:Ee}))}),outsideClick:!0,triggerClassName:re,fallbackPlacements:se,trigger:ce,placement:de,widthStrategy:ae,triggerRef:I?De&&I||void 0:Y,open:ke,onOpenChange:Le,closeOnPopstate:he,children:Ce})})})})}))})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-article/stories/styles.module.scss"(a,_,e){e.d(_,{A:()=>t});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(g),n=r()(l());n.push([a.id,".whiteWrapper--X4qGK{max-width:1216px;height:auto;padding:1rem;background-color:var(--sys-neutral-background1-level, #fdfdfd)}",""]),n.locals={whiteWrapper:"whiteWrapper--X4qGK"};const t=n},"./packages/icons/src/components/interface-icons-product/Link.tsx"(a,_,e){e.d(_,{A:()=>r});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=l.forwardRef(({size:n=24,...t},p)=>{t.width=void 0,t.height=void 0;const i="icon-link",c={};return typeof n=="number"&&(c.width=n+"px",c.height=n+"px",t.style||(t.style={}),t.style.width=n+"px",t.style.height=n+"px"),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":i,ref:p,...t,children:(0,s.jsx)("path",{fill:"inherit",fillRule:"evenodd",d:"M13.98 4.44 12.021 6.4l.539.54.539.54 1.701-1.7 1.7-1.7 1.71 1.71 1.71 1.71-3.41 3.408-3.41 3.407-.899-.858c-.495-.471-.911-.853-.925-.847a13 13 0 0 0-.528.532l-.502.523 1.182 1.127 1.183 1.128h1.049l3.93-3.93 3.93-3.93V6.94l-2.23-2.23-2.23-2.23h-1.12zm-3.645 3.669c-.105.013-.739.637-3.98 3.921L2.5 15.935l-.011.561-.011.561 2.231 2.232L6.94 21.52h1.12l1.96-1.96 1.959-1.96-.519-.52c-.285-.286-.537-.52-.559-.52s-.797.756-1.721 1.68L7.5 19.92l-1.718-1.718-1.717-1.717 2.478-2.507c1.362-1.379 2.873-2.912 3.357-3.407l.88-.898.895.853c.492.47.907.859.923.865s.257-.23.536-.525l.505-.536-1.176-1.125-1.177-1.125-.413.006a8 8 0 0 0-.538.023"})})});try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-product/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"packages/icons/src/components/interface-icons-product/Link.tsx#Link"})}catch(n){}},"./packages/icons/src/components/interface-icons-product/Share.tsx"(a,_,e){e.d(_,{A:()=>r});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=l.forwardRef(({size:n=24,...t},p)=>{t.width=void 0,t.height=void 0;const i="icon-share",c={};return typeof n=="number"&&(c.width=n+"px",c.height=n+"px",t.style||(t.style={}),t.style.width=n+"px",t.style.height=n+"px"),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":i,ref:p,...t,children:(0,s.jsx)("path",{fill:"inherit",fillRule:"evenodd",d:"M11.24 5.287v3.107l-1.77.018c-1.415.014-1.838.031-2.11.083-1.979.38-3.312 1.626-3.838 3.585-.255.95-.282 1.428-.282 4.994v3.023l2.09-2.083c1.15-1.145 2.234-2.196 2.41-2.335s.433-.303.57-.366c.47-.214.66-.241 1.84-.262l1.09-.019v6.788l4.91-4.91L21.06 12l-4.91-4.91-4.91-4.91zm4.61 9.803-3.09 3.09v-4.625l-1.99.014-1.99.014-.397.11a4.5 4.5 0 0 0-1.483.734c-.198.149-.762.668-1.254 1.152l-.894.881.018-1.58c.015-1.261.032-1.652.087-1.935.275-1.442.956-2.356 2.067-2.773.667-.25.768-.259 3.426-.28l2.41-.02V5.82l3.09 3.09L18.94 12z"})})});try{Share.displayName="Share",Share.__docgenInfo={description:"",displayName:"Share",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-product/Share.tsx#Share"]={docgenInfo:Share.__docgenInfo,name:"Share",path:"packages/icons/src/components/interface-icons-product/Share.tsx#Share"})}catch(n){}},"./packages/icons/src/components/interface-icons-product/Telegram.tsx"(a,_,e){e.d(_,{A:()=>r});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=l.forwardRef(({size:n=24,...t},p)=>{t.width=void 0,t.height=void 0;const i="icon-telegram",c={};return typeof n=="number"&&(c.width=n+"px",c.height=n+"px",t.style||(t.style={}),t.style.width=n+"px",t.style.height=n+"px"),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":i,ref:p,...t,children:(0,s.jsx)("path",{d:"M18.44 5.988c-.109.022-12.622 4.565-13.14 4.771-.579.229-.995.489-1.103.688-.061.112.028.265.228.392.202.128.77.325 1.835.637.374.109.878.268 1.119.353l.44.154.172.518c.094.286.362 1.113.595 1.839.6 1.866.674 2.007 1.006 1.907.086-.026.516-.33 1.028-.729.484-.377.956-.73 1.05-.785a.68.68 0 0 1 .69-.014c.099.05.882.572 1.74 1.161 1.821 1.249 1.807 1.24 1.951 1.24.273 0 .412-.238.55-.942.047-.241.606-2.782 1.242-5.648C18.48 8.665 19 6.278 19 6.226c0-.185-.267-.299-.56-.238m-1.6 2.288c0 .066-.555.531-2.38 1.992-2.569 2.057-3.594 2.959-3.94 3.47-.126.185-.136.226-.167.66-.084 1.213-.228 1.796-.407 1.647-.092-.077-.216-.402-.385-1.014a43 43 0 0 0-.321-1.09c-.271-.862-.26-1.109.061-1.44.327-.337 1.108-.794 4.659-2.73 3.044-1.66 2.88-1.575 2.88-1.495"})})});try{Telegram.displayName="Telegram",Telegram.__docgenInfo={description:"",displayName:"Telegram",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-product/Telegram.tsx#Telegram"]={docgenInfo:Telegram.__docgenInfo,name:"Telegram",path:"packages/icons/src/components/interface-icons-product/Telegram.tsx#Telegram"})}catch(n){}},"./packages/icons/src/components/interface-icons-product/Vk.tsx"(a,_,e){e.d(_,{A:()=>r});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=l.forwardRef(({size:n=24,...t},p)=>{t.width=void 0,t.height=void 0;const i="icon-vk",c={};return typeof n=="number"&&(c.width=n+"px",c.height=n+"px",t.style||(t.style={}),t.style.width=n+"px",t.style.height=n+"px"),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":i,ref:p,...t,children:(0,s.jsx)("path",{d:"M10.096 7.058c-.134.03-.341.104-.46.164-.23.116-.556.364-.556.423 0 .019.086.035.192.035.258 0 .567.156.706.357.196.283.216.428.243 1.812.025 1.23.022 1.298-.052 1.43-.098.175-.365.321-.589.321-.276 0-.463-.135-.804-.58a17.4 17.4 0 0 1-1.753-2.811c-.255-.504-.33-.62-.454-.697L6.42 7.42H4.86c-1.436 0-1.568.006-1.666.072-.162.11-.216.276-.156.477.08.268.769 1.601 1.182 2.287 1.805 3 3.904 5.078 5.82 5.763.652.233.893.267 2.1.289 1.217.023 1.366.006 1.584-.177.203-.172.236-.301.236-.94 0-.502.01-.587.081-.703.155-.254.596-.363.881-.217.076.04.624.474 1.218.966.594.493 1.161.933 1.26.979.174.081.239.084 1.82.084 1.473 0 1.664-.007 1.876-.073.26-.08.444-.235.488-.41.041-.16-.048-.448-.194-.636-.069-.089-.674-.665-1.344-1.281-.671-.616-1.273-1.187-1.339-1.27a.75.75 0 0 1-.096-.711c.033-.077.571-.733 1.196-1.459 1.16-1.347 1.375-1.624 1.593-2.053.232-.458.203-.756-.09-.916-.119-.065-.282-.071-1.91-.071h-1.78l-.147.091c-.12.075-.32.375-1.1 1.655-.524.86-1.052 1.682-1.174 1.828-.378.452-.781.623-1 .425s-.217-.188-.239-2.019c-.019-1.644-.023-1.705-.106-1.86-.113-.209-.231-.316-.474-.428-.196-.09-.231-.092-1.62-.1-1.069-.006-1.48.006-1.664.046"})})});try{Vk.displayName="Vk",Vk.__docgenInfo={description:"",displayName:"Vk",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-product/Vk.tsx#Vk"]={docgenInfo:Vk.__docgenInfo,name:"Vk",path:"packages/icons/src/components/interface-icons-product/Vk.tsx#Vk"})}catch(n){}},"./packages/site-article/src/components/DropdownShare/DropdownShare.tsx"(a,_,e){e.d(_,{F:()=>c});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./packages/icons/src/components/interface-icons-product/Link.tsx"),g=e("./packages/icons/src/components/interface-icons-product/Share.tsx"),r=e("./packages/icons/src/components/interface-icons-product/Telegram.tsx"),n=e("./packages/icons/src/components/interface-icons-product/Vk.tsx"),t=e("./node_modules/.pnpm/@snack-uikit+button@1.0.1_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),p=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js");const i={Telegram:"telegram",VK:"vk",Copy:"copy"};function c(m){const{hideLabel:A,options:v}=m,k=v.map(({type:E,onClick:D})=>{switch(E){case i.Telegram:return{id:"telegram",content:{option:"Telegram"},beforeContent:(0,s.jsx)(r.A,{}),onClick:D};case i.VK:return{id:"vk",content:{option:"VK"},beforeContent:(0,s.jsx)(n.A,{}),onClick:D};case i.Copy:return{id:"copy",content:{option:"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443"},beforeContent:(0,s.jsx)(l.A,{}),onClick:D};default:return{}}});return(0,s.jsx)(p.i,{items:k,size:"l",closeDroplistOnItemClick:!0,children:(0,s.jsx)(t.b,{size:"m",label:A?void 0:"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",icon:(0,s.jsx)(g.A,{}),"data-test-id":"dropdown-share-button"})})}try{c.displayName="DropdownShare",c.__docgenInfo={description:"",displayName:"DropdownShare",props:{hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DropdownShareOption[]"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/site-article/src/components/DropdownShare/DropdownShare.tsx#DropdownShare"]={docgenInfo:c.__docgenInfo,name:"DropdownShare",path:"packages/site-article/src/components/DropdownShare/DropdownShare.tsx#DropdownShare"})}catch(m){}},"./packages/site-article/stories/styles.module.scss"(a,_,e){e.d(_,{A:()=>U});var s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(s),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),r=e.n(g),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),t=e.n(n),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),i=e.n(p),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=e.n(c),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),v=e.n(A),k=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-article/stories/styles.module.scss"),E={};E.styleTagTransform=v(),E.setAttributes=i(),E.insert=t().bind(null,"head"),E.domAPI=r(),E.insertStyleElement=m();var D=l()(k.A,E);const U=k.A&&k.A.locals?k.A.locals:void 0},"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="(a){a.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},"./packages/site-article/CHANGELOG.md"(a){a.exports=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.0.0 (2026-09-22)


### BREAKING CHANGES


* **FF-8693:** adopt workspace and catalog protocols for package deps ([a6ef2f3](https://github.com/cloud-ru-tech/uikit-product/commit/a6ef2f373b946dcb613a477776df9478085a64da))




## 1.2.23 (2026-09-18)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@18.2.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.22 (2026-09-09)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@18.1.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.21 (2026-09-03)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@18.0.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.20 (2026-08-18)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.13.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.19 (2026-08-14)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.12.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.18 (2026-08-11)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.11.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.17 (2026-07-29)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.10.1]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.16 (2026-07-28)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.10.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.15 (2026-07-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.9.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.14 (2026-07-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.8.1]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.13 (2026-07-25)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.8.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.12 (2026-07-22)

**Note:** Version bump only for package @cloud-ru/uikit-product-site-article





## 1.2.11 (2026-07-21)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.7.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.10 (2026-07-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.6.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.9 (2026-06-26)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.5.1]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.8 (2026-06-15)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.5.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.7 (2026-06-05)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.4.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.6 (2026-05-27)


### Bug Fixes

* **MKP-3566:** remove unnecessary var() function ([9ad766b](https://github.com/cloud-ru-tech/uikit-product/commit/9ad766ba013daa5cb9bb7620400beda0f7ce2270))





## 1.2.5 (2026-04-28)


### Bug Fixes

* **SITE-11206:** fix article links padding on mobile devices ([c3507f2](https://github.com/cloud-ru-tech/uikit-product/commit/c3507f2ec5b4b9d5e3cb92bcd7da493f1cb6ff5e))





## 1.2.4 (2026-04-27)


### Bug Fixes

* **SITE-10017:** fix site-article components styles ([4b351f9](https://github.com/cloud-ru-tech/uikit-product/commit/4b351f901a985ccc683e685d49ae347e399bae09))





## 1.2.3 (2026-04-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.3.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.2 (2026-04-03)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.2.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.2.1 (2026-03-31)


### Bug Fixes

* **FF-8103:** dedupe onOpenChange from Floating UI in PopoverPrivate ([3ce49f4](https://github.com/cloud-ru-tech/uikit-product/commit/3ce49f4f993d48a97b97dc7cecc1402079cb41ff))





# 1.2.0 (2026-03-16)


### Bug Fixes

* **DOCDEV-2969:** fixed next js build issues ([a9bdab5](https://github.com/cloud-ru-tech/uikit-product/commit/a9bdab58a9f9a625dc05ce5d74f431d68f6245bc))


### Features

* **DOCDEV-2969:** added mobileModalBodyClassName prop for site-selector-platform-drop-list ([515c2e4](https://github.com/cloud-ru-tech/uikit-product/commit/515c2e4100dc9825616bbd0210eeb9f520d647ff))





## 1.1.8 (2026-03-10)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.1.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.1.7 (2026-03-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.0.6]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@9.1.0]($PUBLIC_PROJECT_URL/blob/master/packages/utils/CHANGELOG.md)





## 1.1.6 (2026-02-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.0.5]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.1.5 (2026-02-18)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.0.4]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.1.4 (2026-02-16)


### Bug Fixes

* **FF-8052:** fix homepage link ([dffd09c](https://github.com/cloud-ru-tech/uikit-product/commit/dffd09c642edf4842eee02ccc4ec3e5894f4a29e))





## 1.1.3 (2026-02-10)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.0.2]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.1.2 (2026-02-02)


### Bug Fixes

* **FF-7841:** update repo links ([1893c4a](https://github.com/cloud-ru-tech/uikit-product/commit/1893c4a3e600069f98ab37c728e167937faa3440))





## 1.1.1 (2026-02-02)


### Bug Fixes

* **FF-7861:** deps version mismatch ([cc4fe9c](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/cc4fe9cb87656feecfb35c822eed100024c07458))





# 1.1.0 (2026-02-02)


### Bug Fixes

* **FF-7846:** replace tokens usage ([b690050](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b6900500e2f2c73e184f8b67f689f4a42571a154))
* **FF-7861:** massive scope update ([b93fa9f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b93fa9fed13a579f5f02efc16ea43d8bedbd5aca))
* **FF-7861:** update all 0 versions to 1 ([737c2b4](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/737c2b494d48be5132554ae9f03c960a8cbe3a34))
* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))
* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))


### Features

* **SITE-10019:** add event param in article product click handler ([06f1e33](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/06f1e3325f019f31e6683abf6969017b5e9ec2c2))
* **SITE-10394:** add border radius ([5e950bc](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/5e950bce806fab0a3213eef811a7ebcb411f1860))
* **SITE-9857:** add site-article ([5ee444b](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/5ee444b9e90de7ed37ca537c5532053a2744a643))





# 0.3.0 (2025-12-15)


### Features

* **SITE-10394:** add border radius ([5e950bc](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/5e950bce806fab0a3213eef811a7ebcb411f1860))





## 0.2.4 (2025-11-13)


### Bug Fixes

* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))





## 0.2.3 (2025-11-12)


### Bug Fixes

* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))





## 0.2.2 (2025-11-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.1.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@7.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.2.1 (2025-11-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.2.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.2.0 (2025-10-14)


### Features

* **SITE-10019:** add event param in article product click handler ([06f1e33](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/06f1e3325f019f31e6683abf6969017b5e9ec2c2))





# 0.1.0 (2025-10-03)


### Features

* **SITE-9857:** add site-article ([5ee444b](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/5ee444b9e90de7ed37ca537c5532053a2744a643))





## CHANGELOG

### v0.0.0

- Initial version
`},"./packages/site-article/README.md"(a){a.exports='# Site Article\n\n## Installation\n`npm i @cloud-ru/uikit-product-site-article`\n\n[Changelog](./CHANGELOG.md)\n\n\n\n[//]: DOCUMENTATION_SECTION_START\n[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT\n## Highlight\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| layoutType* | enum LayoutType: `"mobile"`, `"tablet"`, `"desktop"`, `"desktopSmall"` | - |  |\n| richText* | `string` | - |  |\n## Quote\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| layoutType* | enum LayoutType: `"mobile"`, `"tablet"`, `"desktop"`, `"desktopSmall"` | - |  |\n| text* | `string` | - |  |\n| image | `string` | - |  |\n| name | `string` | - |  |\n| position | `string` | - |  |\n## ImageArticle\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| image* | `{ src: string; alt?: string; }` | - |  |\n| description | `string` | - |  |\n## ArticleLinks\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| layoutType* | enum LayoutType: `"mobile"`, `"tablet"`, `"desktop"`, `"desktopSmall"` | - |  |\n| links* | `ArticleLink[]` | - |  |\n## Products\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| layoutType* | enum LayoutType: `"mobile"`, `"tablet"`, `"desktop"`, `"desktopSmall"` | - |  |\n| products | `ArticleProduct[]` | - |  |\n| solutions | `ArticleProduct[]` | - |  |\n## ArticleRichText\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| layoutType* | enum LayoutType: `"mobile"`, `"tablet"`, `"desktop"`, `"desktopSmall"` | - |  |\n| richText* | `string` | - |  |\n## ArticleTypography\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| layoutType* | enum LayoutType: `"mobile"`, `"tablet"`, `"desktop"`, `"desktopSmall"` | - |  |\n| type* | "body" \\| "bodyBold" \\| "bodyLink" | - |  |\n| tag* | "span" \\| "div" \\| "p" | - |  |\n| className | `string` | - | CSS-\u043A\u043B\u0430\u0441\u0441 |\n## DropdownShare\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| options* | `DropdownShareOption[]` | - |  |\n| hideLabel | `boolean` | - |  |\n## FooterArticle\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| layoutType* | enum LayoutType: `"mobile"`, `"tablet"`, `"desktop"`, `"desktopSmall"` | - |  |\n| dropdownOptions* | `DropdownShareOption[]` | - |  |\n| releaseDate* | `string` | - |  |\n\n\n[//]: DOCUMENTATION_SECTION_END\n'},"./packages/site-article/package.json"(a){a.exports=JSON.parse('{"UU":"@cloud-ru/uikit-product-site-article","rE":"2.0.0"}')}}]);})();
