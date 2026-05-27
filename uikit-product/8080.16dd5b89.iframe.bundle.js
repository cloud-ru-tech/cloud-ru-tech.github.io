"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[8080],{"./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"(S,B,a){a.d(B,{i:()=>H});var s=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=a("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),N=a.n(w),T=a("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),r=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=a("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),L=a("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),E=a("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),W=a("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),f=a("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),X=a("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),oa=a("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),$=a("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),ra=a("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),G=a("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),na=a("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),Z=a("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),la=a("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),R=function(g,I){var v={};for(var l in g)Object.prototype.hasOwnProperty.call(g,l)&&I.indexOf(l)<0&&(v[l]=g[l]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,l=Object.getOwnPropertySymbols(g);y<l.length;y++)I.indexOf(l[y])<0&&Object.prototype.propertyIsEnumerable.call(g,l[y])&&(v[l[y]]=g[l[y]]);return v};const da=["top","right","bottom","left"];function H(g){var{items:I,search:v,pinBottom:l=[],pinTop:y=[],footerActiveElementsRefs:A,children:_,trigger:ca,placement:Q,widthStrategy:F,triggerElemRef:p,open:ma,onOpenChange:Y,collapse:ia={},triggerClassName:J,selection:h,contentRender:pa,size:ua="s",marker:e=!0,closeDroplistOnItemClick:i=!1,className:c,listRef:t,untouchableScrollbars:n=!1,virtualized:P=!1,closeOnPopstate:D}=g,V=R(g,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const M=(0,r.useMemo)(()=>!!v,[v]),[j=[],z]=(0,L.I)(ia),q=(0,r.useCallback)(o=>z(d=>d!=null&&d.includes(o)?d.filter(u=>u!==o):(d!=null?d:[]).concat([o])),[z]),[aa=!1,b]=(0,L.I)({value:ma,defaultValue:!1,onChange:Y}),{searchItem:m,footerItems:ea}=(0,W.nG)({footerActiveElementsRefs:A}),fa=(0,r.useMemo)(()=>{const o=(0,f.lg)({items:y,prefix:E.$.pinTop,parentId:E.$.default}),d=(0,f.lg)({items:I,prefix:E.$.default,parentId:E.$.default}),u=(0,f.lg)({items:l,prefix:E.$.pinBottom,parentId:E.$.default}),O=Object.assign(Object.assign(Object.assign({},o.flattenItems),u.flattenItems),d.flattenItems),C=Object.assign(Object.assign(Object.assign({},o.focusFlattenItems),u.focusFlattenItems),d.focusFlattenItems);return[...ea,m].forEach(x=>{O[x.id]=x,C[x.id]=Object.assign(Object.assign({},x),{originalId:x.id,items:[],key:x.id,allChildIds:[]})}),{items:d,pinTop:o,pinBottom:u,flattenItems:O,focusFlattenItems:C}},[I,y,l,m,ea]),{flattenItems:ja,focusFlattenItems:ya}=fa,U=R(fa,["flattenItems","focusFlattenItems"]),{ids:ta,expandedIds:ba}=(0,r.useMemo)(()=>{const{pinTop:o,items:d,pinBottom:u}=U;let O=[],C=[];return M&&O.push(m.id),[o,d,u].forEach(({focusFlattenItems:x,focusCloseChildIds:Ba})=>{const ha=(0,f.e)({focusFlattenItems:x,focusCloseChildIds:Ba,openCollapseItems:j,isSelectionMultiple:(h==null?void 0:h.mode)==="multiple"});O=O.concat(ha.ids),C=C.concat(ha.expandedIds)}),ea.forEach(x=>{O.push(x.id)}),{ids:O,expandedIds:C}},[ea,M,U,j,m.id,h==null?void 0:h.mode]),_a=(0,r.useRef)(null),xa=(0,r.useRef)(null),Ea=ta[0],{handleListKeyDownFactory:ga,resetActiveItemId:K,activeItemId:wa,forceUpdateActiveItemId:sa}=(0,na.d)({mainRef:p!=null?p:_a,focusFlattenItems:ya,hasListInFocusChain:!0,firstItemId:Ea}),ka=(0,r.useCallback)(o=>ga(ta,ba)(o),[ga,ta,ba]),Ia=(0,r.useCallback)(o=>{K(),b(o)},[K,b]),va=(0,r.useCallback)((o,d)=>{o.key==="ArrowDown"&&(o.preventDefault(),b(!0),setTimeout(()=>{var u;K(),(u=xa.current)===null||u===void 0||u.focus()},0)),o.key==="ArrowUp"&&b(!1),d==null||d(o)},[K,b]),Pa=(0,r.useMemo)(()=>(0,r.isValidElement)(_),[_]),Oa=(0,r.useMemo)(()=>{if((0,r.isValidElement)(_)){const o=typeof _.props=="object"?_.props:{};return(0,r.cloneElement)(_,Object.assign(Object.assign({},o),{onKeyDown:d=>{var u;va(d,(u=_.props)===null||u===void 0?void 0:u.onKeyDown)}}))}return typeof _=="function"?_({onKeyDown:va}):_},[va,_]);return(0,s.jsx)($.Tr,{flattenItems:ja,focusFlattenItems:ya,contentRender:pa,size:ua,marker:e,firstItemId:Ea,virtualized:P,children:(0,s.jsx)(X.WM,Object.assign({},h,{children:(0,s.jsx)(oa.bN.Provider,{value:{openCollapseItems:j,toggleOpenCollapseItem:q},children:(0,s.jsx)(ra.m.Provider,{value:{activeItemId:wa,handleListKeyDownFactory:ga,forceUpdateActiveItemId:sa},children:(0,s.jsx)(G.K.Provider,{value:{closeDroplistOnItemClick:i,closeDroplist:()=>{var o;b(!1),K(),(o=(p!=null?p:_a).current)===null||o===void 0||o.focus()}},children:(0,s.jsx)(k.m,{content:(0,s.jsx)("div",{className:N()(la.A.wrapper,c),children:(0,s.jsx)(Z.Q,Object.assign({},V,{items:U.items.focusCloseChildIds,pinTop:U.pinTop.focusCloseChildIds,pinBottom:U.pinBottom.focusCloseChildIds,virtualized:P,onKeyDown:ka,searchItem:m,tabIndex:0,ref:(0,T.A)(xa,t),search:v,onFocus:o=>{o.stopPropagation(),sa==null||sa(ta[0])},limitedScrollHeight:!0,untouchableScrollbars:n}))}),outsideClick:!0,triggerClassName:J,fallbackPlacements:da,trigger:ca,placement:Q,widthStrategy:F,triggerRef:p?Pa&&p||void 0:_a,open:aa,onOpenChange:Ia,closeOnPopstate:D,children:Oa})})})})}))})}},"./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/Tag/Tag.js"(S,B,a){a.d(B,{v:()=>ua});var s=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),N=a("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function T({tooltip:e,children:i}){return e!=null&&e.tip?(0,s.jsx)(N.m,Object.assign({},e,{children:i})):(0,s.jsx)(s.Fragment,{children:i})}var r=a("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),k=a.n(r),L=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),E=a("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const W={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},f={Xs:"xs",S:"s"},X={[f.Xs]:16,[f.S]:24};var oa=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),$=a.n(oa),ra=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),G=a.n(ra),na=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Z=a.n(na),la=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=a.n(la),da=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),H=a.n(da),g=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=a.n(g),v=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"),l={};l.styleTagTransform=I(),l.setAttributes=R(),l.insert=Z().bind(null,"head"),l.domAPI=G(),l.insertStyleElement=H();var y=$()(v.A,l);const A=v.A&&v.A.locals?v.A.locals:void 0;var _=function(e,i){var c={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(c[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)i.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(c[t[n]]=e[t[n]]);return c};function ca(e){return"changeRestrictTooltipState"in e&&e.changeRestrictTooltipState!==void 0}function Q(e){const{label:i,size:c=f.Xs,appearance:t=W.Neutral,onDelete:n,className:P,tabIndex:D}=e,V=_(e,["label","size","appearance","onDelete","className","tabIndex"]),M=(0,w.useRef)(null),j=!!n,z=b=>{if(j&&ca(e)){const{changeRestrictTooltipState:m}=e;m(b)}},q=b=>{var m;!((m=M.current)===null||m===void 0)&&m.contains(b.target)&&z(!0)},aa=()=>{z(!1)};return(0,s.jsxs)("span",Object.assign({},(0,E.z7)(V),{className:k()(A.tag,P),"data-size":c,"data-appearance":t,"data-removable":j,onMouseEnter:q,onMouseLeave:aa,children:[(0,s.jsx)("span",{className:A.label,children:i}),j&&(0,s.jsx)("button",{type:"button",className:A.tagButton,onClick:n,"data-test-id":"tag-remove-button",tabIndex:D,onMouseEnter:q,onMouseLeave:aa,ref:M,children:c===f.Xs?(0,s.jsx)(L.A,{size:X[c],className:A.icon}):(0,s.jsx)(L.A,{size:X[c],className:A.icon})})]}))}var F=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"),p={};p.styleTagTransform=I(),p.setAttributes=R(),p.insert=Z().bind(null,"head"),p.domAPI=G(),p.insertStyleElement=H();var ma=$()(F.A,p);const Y=F.A&&F.A.locals?F.A.locals:void 0;var ia=function(e,i){var c={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&i.indexOf(t)<0&&(c[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)i.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(c[t[n]]=e[t[n]]);return c};function J(e){var{label:i,size:c=f.Xs,appearance:t=W.Neutral,className:n,tabIndex:P,href:D,onClick:V,target:M}=e,j=ia(e,["label","size","appearance","className","tabIndex","href","onClick","target"]);return(0,s.jsx)("a",Object.assign({},(0,E.z7)(j),{className:k()(Y.tag,n),"data-size":c,"data-appearance":t,tabIndex:P,href:D,target:M,onClick:V,children:(0,s.jsx)("span",{className:Y.label,children:i})}))}function h(e){return"href"in e&&e.href!==void 0}function pa(e){return"tooltip"in e&&e.tooltip!==void 0}function ua(e){const[i,c]=(0,w.useState)(!1),t=h(e);if(!pa(e))return t?(0,s.jsx)(J,Object.assign({},e)):(0,s.jsx)(Q,Object.assign({},e));const{tooltip:n}=e,P=n&&Object.assign(Object.assign({},n),{open:i?!1:n.open}),D=Object.assign(Object.assign({},e),{changeRestrictTooltipState:c});return(0,s.jsx)(T,{tooltip:P,children:t?(0,s.jsx)(J,Object.assign({},e)):(0,s.jsx)(Q,Object.assign({},D))})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"(S,B,a){a.d(B,{A:()=>k});var s=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=a.n(s),N=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),T=a.n(N),r=T()(w());r.push([S.id,`.tag--NwI_j{
  display:inline-flex;
  align-items:center;
  box-sizing:border-box;
  max-width:100%;
}
.tag--NwI_j .tagButton--r2yPE{
  cursor:pointer;
  position:relative;
  box-sizing:border-box;
  margin:0;
  padding:0;
  background:none;
  border:none;
}
.tag--NwI_j .tagButton--r2yPE:focus{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
}
.tag--NwI_j .tagButton--r2yPE:active{
  outline:none;
}
.tag--NwI_j .icon--Tp2MS{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
.tag--NwI_j[data-size=xs]{
  padding-left:var(--space-tag-xs-from-label, 8px);
  padding-right:var(--space-tag-xs-from-label, 8px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
}
.tag--NwI_j[data-size=xs][data-removable=true]{
  padding-left:var(--space-tag-xs-from-label, 8px);
  padding-right:var(--space-tag-xs-from-button, 0px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
  gap:var(--space-tag-xs-gap, 2px);
}
.tag--NwI_j[data-size=xs] .label--XUu32{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.tag--NwI_j[data-size=xs] .tagButton--r2yPE{
  border-radius:var(--radius-tag-xs, 4px);
  height:var(--size-tag-xs, 24px);
  width:var(--size-tag-xs, 24px);
}
.tag--NwI_j[data-size=s]{
  padding-left:var(--space-tag-s-from-label, 8px);
  padding-right:var(--space-tag-s-from-label, 8px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 4px);
}
.tag--NwI_j[data-size=s][data-removable=true]{
  padding-left:var(--space-tag-s-from-label, 8px);
  padding-right:var(--space-tag-s-from-button, 0px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 4px);
  gap:var(--space-tag-s-gap, 2px);
}
.tag--NwI_j[data-size=s] .label--XUu32{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.tag--NwI_j[data-size=s] .tagButton--r2yPE{
  border-radius:var(--radius-tag-s, 4px);
  height:var(--size-tag-s, 32px);
  width:var(--size-tag-s, 32px);
}
.tag--NwI_j[data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.tag--NwI_j[data-appearance=neutral] .label--XUu32{
  overflow:hidden;
  color:var(--sys-neutral-text-support, #6d707f);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE:hover{
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE:active{
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.tag--NwI_j[data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.tag--NwI_j[data-appearance=primary] .label--XUu32{
  overflow:hidden;
  color:var(--sys-primary-text-support, #358561);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=primary] .tagButton--r2yPE{
  color:var(--sys-primary-text-light, #6aaf90);
}
.tag--NwI_j[data-appearance=primary] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=primary] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=primary] .tagButton--r2yPE:active{
  color:var(--sys-primary-text-main, #1b5840);
}
.tag--NwI_j[data-appearance=primary] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=primary] .tagButton--r2yPE:hover{
  background-color:var(--sys-primary-decor-hovered, #b3deca);
}
.tag--NwI_j[data-appearance=primary] .tagButton--r2yPE:active{
  background-color:var(--sys-primary-decor-activated, #99d7ba);
}
.tag--NwI_j[data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.tag--NwI_j[data-appearance=red] .label--XUu32{
  overflow:hidden;
  color:var(--sys-red-text-support, #ae514c);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=red] .tagButton--r2yPE{
  color:var(--sys-red-text-light, #e7756a);
}
.tag--NwI_j[data-appearance=red] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=red] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=red] .tagButton--r2yPE:active{
  color:var(--sys-red-text-main, #7a2d2d);
}
.tag--NwI_j[data-appearance=red] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=red] .tagButton--r2yPE:hover{
  background-color:var(--sys-red-decor-hovered, #fac1b3);
}
.tag--NwI_j[data-appearance=red] .tagButton--r2yPE:active{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.tag--NwI_j[data-appearance=orange]{
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.tag--NwI_j[data-appearance=orange] .label--XUu32{
  overflow:hidden;
  color:var(--sys-orange-text-support, #bb733e);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=orange] .tagButton--r2yPE{
  color:var(--sys-orange-text-light, #e78940);
}
.tag--NwI_j[data-appearance=orange] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=orange] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=orange] .tagButton--r2yPE:active{
  color:var(--sys-orange-text-main, #884c23);
}
.tag--NwI_j[data-appearance=orange] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=orange] .tagButton--r2yPE:hover{
  background-color:var(--sys-orange-decor-hovered, #f8c699);
}
.tag--NwI_j[data-appearance=orange] .tagButton--r2yPE:active{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.tag--NwI_j[data-appearance=yellow]{
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.tag--NwI_j[data-appearance=yellow] .label--XUu32{
  overflow:hidden;
  color:var(--sys-yellow-text-support, #b78c32);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE{
  color:var(--sys-yellow-text-light, #d3a736);
}
.tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE:active{
  color:var(--sys-yellow-text-main, #815f19);
}
.tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE:hover{
  background-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE:active{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.tag--NwI_j[data-appearance=green]{
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.tag--NwI_j[data-appearance=green] .label--XUu32{
  overflow:hidden;
  color:var(--sys-green-text-support, #55915a);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=green] .tagButton--r2yPE{
  color:var(--sys-green-text-light, #69b56f);
}
.tag--NwI_j[data-appearance=green] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=green] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=green] .tagButton--r2yPE:active{
  color:var(--sys-green-text-main, #3d6035);
}
.tag--NwI_j[data-appearance=green] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=green] .tagButton--r2yPE:hover{
  background-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.tag--NwI_j[data-appearance=green] .tagButton--r2yPE:active{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.tag--NwI_j[data-appearance=blue]{
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.tag--NwI_j[data-appearance=blue] .label--XUu32{
  overflow:hidden;
  color:var(--sys-blue-text-support, #4877b0);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=blue] .tagButton--r2yPE{
  color:var(--sys-blue-text-light, #749eda);
}
.tag--NwI_j[data-appearance=blue] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=blue] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=blue] .tagButton--r2yPE:active{
  color:var(--sys-blue-text-main, #2b537e);
}
.tag--NwI_j[data-appearance=blue] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=blue] .tagButton--r2yPE:hover{
  background-color:var(--sys-blue-decor-hovered, #c5d9f6);
}
.tag--NwI_j[data-appearance=blue] .tagButton--r2yPE:active{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.tag--NwI_j[data-appearance=violet]{
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.tag--NwI_j[data-appearance=violet] .label--XUu32{
  overflow:hidden;
  color:var(--sys-violet-text-support, #8c639b);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=violet] .tagButton--r2yPE{
  color:var(--sys-violet-text-light, #b68bd5);
}
.tag--NwI_j[data-appearance=violet] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=violet] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=violet] .tagButton--r2yPE:active{
  color:var(--sys-violet-text-main, #59446a);
}
.tag--NwI_j[data-appearance=violet] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=violet] .tagButton--r2yPE:hover{
  background-color:var(--sys-violet-decor-hovered, #e1d0f7);
}
.tag--NwI_j[data-appearance=violet] .tagButton--r2yPE:active{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.tag--NwI_j[data-appearance=pink]{
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.tag--NwI_j[data-appearance=pink] .label--XUu32{
  overflow:hidden;
  color:var(--sys-pink-text-support, #ae5e80);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=pink] .tagButton--r2yPE{
  color:var(--sys-pink-text-light, #db85a2);
}
.tag--NwI_j[data-appearance=pink] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=pink] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=pink] .tagButton--r2yPE:active{
  color:var(--sys-pink-text-main, #754158);
}
.tag--NwI_j[data-appearance=pink] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=pink] .tagButton--r2yPE:hover{
  background-color:var(--sys-pink-decor-hovered, #f5c9d6);
}
.tag--NwI_j[data-appearance=pink] .tagButton--r2yPE:active{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}`,""]),r.locals={tag:"tag--NwI_j",tagButton:"tagButton--r2yPE",icon:"icon--Tp2MS",label:"label--XUu32"};const k=r},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"(S,B,a){a.d(B,{A:()=>k});var s=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=a.n(s),N=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),T=a.n(N),r=T()(w());r.push([S.id,`.tag--xEVFr{
  display:inline-flex;
  align-items:center;
  box-sizing:border-box;
  max-width:100%;
  text-decoration:none;
}
.tag--xEVFr:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.tag--xEVFr:active{
  outline:none;
}
.tag--xEVFr[data-size=xs]{
  padding-left:var(--space-tag-xs-from-label, 8px);
  padding-right:var(--space-tag-xs-from-label, 8px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
}
.tag--xEVFr[data-size=xs] .label--jA6rc{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.tag--xEVFr[data-size=s]{
  padding-left:var(--space-tag-s-from-label, 8px);
  padding-right:var(--space-tag-s-from-label, 8px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 4px);
}
.tag--xEVFr[data-size=s] .label--jA6rc{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.tag--xEVFr[data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.tag--xEVFr[data-appearance=neutral] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-neutral-text-support, #6d707f);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=neutral]:focus-visible, .tag--xEVFr[data-appearance=neutral]:hover{
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.tag--xEVFr[data-appearance=neutral]:active{
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.tag--xEVFr[data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.tag--xEVFr[data-appearance=primary] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-primary-text-support, #358561);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=primary]:focus-visible, .tag--xEVFr[data-appearance=primary]:hover{
  background-color:var(--sys-primary-decor-hovered, #b3deca);
}
.tag--xEVFr[data-appearance=primary]:active{
  background-color:var(--sys-primary-decor-activated, #99d7ba);
}
.tag--xEVFr[data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.tag--xEVFr[data-appearance=red] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-red-text-support, #ae514c);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=red]:focus-visible, .tag--xEVFr[data-appearance=red]:hover{
  background-color:var(--sys-red-decor-hovered, #fac1b3);
}
.tag--xEVFr[data-appearance=red]:active{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.tag--xEVFr[data-appearance=orange]{
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.tag--xEVFr[data-appearance=orange] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-orange-text-support, #bb733e);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=orange]:focus-visible, .tag--xEVFr[data-appearance=orange]:hover{
  background-color:var(--sys-orange-decor-hovered, #f8c699);
}
.tag--xEVFr[data-appearance=orange]:active{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.tag--xEVFr[data-appearance=yellow]{
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.tag--xEVFr[data-appearance=yellow] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-yellow-text-support, #b78c32);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=yellow]:focus-visible, .tag--xEVFr[data-appearance=yellow]:hover{
  background-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.tag--xEVFr[data-appearance=yellow]:active{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.tag--xEVFr[data-appearance=green]{
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.tag--xEVFr[data-appearance=green] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-green-text-support, #55915a);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=green]:focus-visible, .tag--xEVFr[data-appearance=green]:hover{
  background-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.tag--xEVFr[data-appearance=green]:active{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.tag--xEVFr[data-appearance=blue]{
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.tag--xEVFr[data-appearance=blue] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-blue-text-support, #4877b0);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=blue]:focus-visible, .tag--xEVFr[data-appearance=blue]:hover{
  background-color:var(--sys-blue-decor-hovered, #c5d9f6);
}
.tag--xEVFr[data-appearance=blue]:active{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.tag--xEVFr[data-appearance=violet]{
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.tag--xEVFr[data-appearance=violet] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-violet-text-support, #8c639b);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=violet]:focus-visible, .tag--xEVFr[data-appearance=violet]:hover{
  background-color:var(--sys-violet-decor-hovered, #e1d0f7);
}
.tag--xEVFr[data-appearance=violet]:active{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.tag--xEVFr[data-appearance=pink]{
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.tag--xEVFr[data-appearance=pink] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-pink-text-support, #ae5e80);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=pink]:focus-visible, .tag--xEVFr[data-appearance=pink]:hover{
  background-color:var(--sys-pink-decor-hovered, #f5c9d6);
}
.tag--xEVFr[data-appearance=pink]:active{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}`,""]),r.locals={tag:"tag--xEVFr",label:"label--jA6rc"};const k=r}}]);})();
