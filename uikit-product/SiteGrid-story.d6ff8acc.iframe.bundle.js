"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[690],{"./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js":((j,r,e)=>{e.d(r,{i:()=>A});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),a=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),_=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),d=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),I=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),m=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),M=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),O=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),z=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),x=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),L=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),C=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),T=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),G=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),h=function(E,b){var n={};for(var o in E)Object.prototype.hasOwnProperty.call(E,o)&&b.indexOf(o)<0&&(n[o]=E[o]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,o=Object.getOwnPropertySymbols(E);f<o.length;f++)b.indexOf(o[f])<0&&Object.prototype.propertyIsEnumerable.call(E,o[f])&&(n[o[f]]=E[o[f]]);return n};const k=["top","right","bottom","left"];function A(E){var{items:b,search:n,pinBottom:o=[],pinTop:f=[],footerActiveElementsRefs:S,children:y,trigger:B,placement:U,widthStrategy:Z,triggerElemRef:v,open:ie,onOpenChange:le,collapse:re={},triggerClassName:ce,selection:P,contentRender:me,size:pe="s",marker:_e=!0,closeDroplistOnItemClick:ge=!1,className:Me,listRef:ye,untouchableScrollbars:ke=!1,virtualized:q=!1,closeOnPopstate:Ee}=E,fe=h(E,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const ee=(0,t.useMemo)(()=>!!n,[n]),[V=[],te]=(0,_.I)(re),je=(0,t.useCallback)(u=>te(l=>l!=null&&l.includes(u)?l.filter(g=>g!==u):(l!=null?l:[]).concat([u])),[te]),[be=!1,Y]=(0,_.I)({value:ie,defaultValue:!1,onChange:le}),{searchItem:F,footerItems:Q}=(0,I.nG)({footerActiveElementsRefs:S}),se=(0,t.useMemo)(()=>{const u=(0,m.lg)({items:f,prefix:d.$.pinTop,parentId:d.$.default}),l=(0,m.lg)({items:b,prefix:d.$.default,parentId:d.$.default}),g=(0,m.lg)({items:o,prefix:d.$.pinBottom,parentId:d.$.default}),N=Object.assign(Object.assign(Object.assign({},u.flattenItems),g.flattenItems),l.flattenItems),R=Object.assign(Object.assign(Object.assign({},u.focusFlattenItems),g.focusFlattenItems),l.focusFlattenItems);return[...Q,F].forEach(D=>{N[D.id]=D,R[D.id]=Object.assign(Object.assign({},D),{originalId:D.id,items:[],key:D.id,allChildIds:[]})}),{items:l,pinTop:u,pinBottom:g,flattenItems:N,focusFlattenItems:R}},[b,f,o,F,Q]),{flattenItems:ve,focusFlattenItems:ne}=se,W=h(se,["flattenItems","focusFlattenItems"]),{ids:K,expandedIds:ue}=(0,t.useMemo)(()=>{const{pinTop:u,items:l,pinBottom:g}=W;let N=[],R=[];return ee&&N.push(F.id),[u,l,g].forEach(({focusFlattenItems:D,focusCloseChildIds:Ne})=>{const oe=(0,m.e)({focusFlattenItems:D,focusCloseChildIds:Ne,openCollapseItems:V,isSelectionMultiple:(P==null?void 0:P.mode)==="multiple"});N=N.concat(oe.ids),R=R.concat(oe.expandedIds)}),Q.forEach(D=>{N.push(D.id)}),{ids:N,expandedIds:R}},[Q,ee,W,V,F.id,P==null?void 0:P.mode]),$=(0,t.useRef)(null),de=(0,t.useRef)(null),ae=K[0],{handleListKeyDownFactory:X,resetActiveItemId:w,activeItemId:Ie,forceUpdateActiveItemId:H}=(0,C.d)({mainRef:v!=null?v:$,focusFlattenItems:ne,hasListInFocusChain:!0,firstItemId:ae}),De=(0,t.useCallback)(u=>X(K,ue)(u),[X,K,ue]),he=(0,t.useCallback)(u=>{w(),Y(u)},[w,Y]),J=(0,t.useCallback)((u,l)=>{u.key==="ArrowDown"&&(u.preventDefault(),Y(!0),setTimeout(()=>{var g;w(),(g=de.current)===null||g===void 0||g.focus()},0)),u.key==="ArrowUp"&&Y(!1),l==null||l(u)},[w,Y]),Ae=(0,t.useMemo)(()=>(0,t.isValidElement)(y),[y]),Te=(0,t.useMemo)(()=>{if((0,t.isValidElement)(y)){const u=typeof y.props=="object"?y.props:{};return(0,t.cloneElement)(y,Object.assign(Object.assign({},u),{onKeyDown:l=>{var g;J(l,(g=y.props)===null||g===void 0?void 0:g.onKeyDown)}}))}return typeof y=="function"?y({onKeyDown:J}):y},[J,y]);return(0,s.jsx)(M.Tr,{flattenItems:ve,focusFlattenItems:ne,contentRender:me,size:pe,marker:_e,firstItemId:ae,virtualized:q,children:(0,s.jsx)(O.WM,Object.assign({},P,{children:(0,s.jsx)(z.bN.Provider,{value:{openCollapseItems:V,toggleOpenCollapseItem:je},children:(0,s.jsx)(x.m.Provider,{value:{activeItemId:Ie,handleListKeyDownFactory:X,forceUpdateActiveItemId:H},children:(0,s.jsx)(L.K.Provider,{value:{closeDroplistOnItemClick:ge,closeDroplist:()=>{var u;Y(!1),w(),(u=(v!=null?v:$).current)===null||u===void 0||u.focus()}},children:(0,s.jsx)(i.m,{content:(0,s.jsx)("div",{className:p()(G.A.wrapper,Me),children:(0,s.jsx)(T.Q,Object.assign({},fe,{items:W.items.focusCloseChildIds,pinTop:W.pinTop.focusCloseChildIds,pinBottom:W.pinBottom.focusCloseChildIds,virtualized:q,onKeyDown:De,searchItem:F,tabIndex:0,ref:(0,a.A)(de,ye),search:n,onFocus:u=>{u.stopPropagation(),H==null||H(K[0])},limitedScrollHeight:!0,untouchableScrollbars:ke}))}),outsideClick:!0,triggerClassName:ce,fallbackPlacements:k,trigger:B,placement:U,widthStrategy:Z,triggerRef:v?Ae&&v||void 0:$,open:be,onOpenChange:he,closeOnPopstate:Ee,children:Te})})})})}))})}}),"./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((j,r,e)=>{e.d(r,{sg:()=>t,z7:()=>_});const s=/^data-test-/,c=/^(data|aria)-/;function p(d,I){return Object.keys(d).filter(m=>!m.match(I)).reduce((m,M)=>Object.assign(Object.assign({},m),{[M]:d[M]}),{})}function a(d,I){return Object.keys(d).reduce((m,M)=>(M.match(I)&&(m[M]=d[M]),m),{})}function t(d){return p(d,c)}function i(d){return a(d,s)}function _(d){return a(d,c)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-grid/src/components/styles.module.scss":((j,r,e)=>{e.d(r,{A:()=>i});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(s),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(p),t=a()(c());t.push([j.id,".grid--kqbfF{box-sizing:border-box;display:grid;--gap-count: calc(var(--grid-column-count) - 1);--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));--grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));grid-template-columns:repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));grid-gap:var(--grid-layout-gap)}.grid--kqbfF[data-gap=l]{--grid-layout-gap: var(--dimension-4m, 32px)}.grid--kqbfF[data-gap=m]{--grid-layout-gap: var(--dimension-2m, 16px)}.grid--kqbfF[data-gap=s]{--grid-layout-gap: var(--dimension-1m, 8px)}.grid--kqbfF[data-gap=xs]{--grid-layout-gap: var(--dimension-025m, 2px)}.grid--kqbfF[data-layout-type=tablet][data-gap=l],.grid--kqbfF[data-layout-type=mobile][data-gap=l]{--grid-layout-gap: var(--dimension-2m, 16px)}.grid--kqbfF[data-layout-type=tablet][data-gap=m],.grid--kqbfF[data-layout-type=tablet][data-gap=s],.grid--kqbfF[data-layout-type=mobile][data-gap=m],.grid--kqbfF[data-layout-type=mobile][data-gap=s]{--grid-layout-gap: var(--dimension-1m, 8px)}",""]),t.locals={grid:"grid--kqbfF"};const i=t}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-grid/stories/styles.module.scss":((j,r,e)=>{e.d(r,{A:()=>i});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(s),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(p),t=a()(c());t.push([j.id,".wrapper--QVcHL{resize:both;overflow:auto}",""]),t.locals={wrapper:"wrapper--QVcHL"};const i=t}),"./packages/card-predefined/src/components/CardSuggest/CardSuggest.tsx":((j,r,e)=>{e.d(r,{n:()=>i});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/@snack-uikit+card@0.20.16_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),a=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const t={title:2,description:3};function i({title:_,description:d,truncate:I,onClick:m,className:M,disabled:O,href:z,promoBadge:x,size:L,...C}){const T={...t,...I};return(0,s.jsx)(c.Z,{...(0,a.z7)(C),size:L,promoBadge:x,href:z,disabled:O,header:(0,s.jsx)(c.Z.Header,{title:_,truncate:{title:T.title}}),onClick:m,className:M,children:(0,s.jsx)(p.m,{text:d,maxLines:T.description,"data-test-id":"card-suggest__description"})})}try{i.displayName="CardSuggest",i.__docgenInfo={description:"",displayName:"CardSuggest",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS-\u043A\u043B\u0430\u0441\u0441 \u0434\u043B\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0441 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u043C",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"\u041A\u043E\u043B\u0431\u0435\u043A \u043D\u0430 \u043A\u043B\u0438\u043A \u043F\u043E \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>) => void)"}},disabled:{defaultValue:null,description:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",name:"href",required:!1,type:{name:"string"}},promoBadge:{defaultValue:null,description:"PromoBadge",name:"promoBadge",required:!1,type:{name:'string | Pick<PromoTagProps, "text" | "appearance">'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},truncate:{defaultValue:null,description:"",name:"truncate",required:!1,type:{name:"{ title?: number; description?: number; } | undefined"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/card-predefined/src/components/CardSuggest/CardSuggest.tsx#CardSuggest"]={docgenInfo:i.__docgenInfo,name:"CardSuggest",path:"packages/card-predefined/src/components/CardSuggest/CardSuggest.tsx#CardSuggest"})}catch(_){}}),"./packages/site-grid/src/components/Grid.tsx":((j,r,e)=>{e.d(r,{x:()=>b});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("./packages/utils/src/utils/extractSupportProps.ts");const i=({columnsConfig:n,layoutType:o})=>{switch(o){case"mobile":if(n.mobile)return{"--grid-column-count":n.mobile.amount,"--grid-item--min-width":`${n.mobile.minWidth}px`};break;case"tablet":if(n.tablet)return{"--grid-column-count":n.tablet.amount,"--grid-item--min-width":`${n.tablet.minWidth}px`};break;case"desktopSmall":if(n.desktopSmall)return{"--grid-column-count":n.desktopSmall.amount,"--grid-item--min-width":`${n.desktopSmall.minWidth}px`};if(n.desktop)return{"--grid-column-count":n.desktop.amount,"--grid-item--min-width":`${n.desktop.minWidth}px`};break;case"desktop":if(n.desktop)return{"--grid-column-count":n.desktop.amount,"--grid-item--min-width":`${n.desktop.minWidth}px`};break;default:return}};var _=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(_),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=e.n(I),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),O=e.n(M),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),x=e.n(z),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),C=e.n(L),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),G=e.n(T),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-grid/src/components/styles.module.scss"),k={};k.styleTagTransform=G(),k.setAttributes=x(),k.insert=O().bind(null,"head"),k.domAPI=m(),k.insertStyleElement=C();var A=d()(h.A,k);const E=h.A&&h.A.locals?h.A.locals:void 0;function b({children:n,columnsConfig:o,gap:f="m",layoutType:S,className:y,...B}){const U=(0,a.useMemo)(()=>i({columnsConfig:o,layoutType:S}),[o,S]);return(0,s.jsx)("div",{className:p()(E.grid,y),...(0,t.z)(B),style:U,"data-gap":f,"data-layout-type":S,children:n})}try{b.displayName="Grid",b.__docgenInfo={description:"",displayName:"Grid",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435",name:"children",required:!0,type:{name:"ReactNode"}},columnsConfig:{defaultValue:null,description:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0434\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 layoutType",name:"columnsConfig",required:!0,type:{name:"ColumnsConfig"}},gap:{defaultValue:{value:"m"},description:"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C\u0438 \u0438 \u0440\u044F\u0434\u0430\u043C\u0438",name:"gap",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xs"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},layoutType:{defaultValue:null,description:"",name:"layoutType",required:!0,type:{name:"enum",value:[{value:'"mobile"'},{value:'"tablet"'},{value:'"desktop"'},{value:'"desktopSmall"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/site-grid/src/components/Grid.tsx#Grid"]={docgenInfo:b.__docgenInfo,name:"Grid",path:"packages/site-grid/src/components/Grid.tsx#Grid"})}catch(n){}}),"./packages/site-grid/stories/SiteGrid.story.tsx":((j,r,e)=>{e.r(r),e.d(r,{default:()=>o,grid:()=>B});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./packages/card-predefined/src/components/CardSuggest/CardSuggest.tsx");const p=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
`,a=JSON.parse('{"UU":"@cloud-ru/uikit-product-site-grid","rE":"1.1.3"}'),t=`# Site Grid

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


`;var i=e("./packages/site-grid/src/components/Grid.tsx");const _={Mobile:"mobile",Tablet:"tablet",Desktop:"desktop",DesktopSmall:"desktopSmall"};var d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(d),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),M=e.n(m),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),z=e.n(O),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=e.n(x),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=e.n(C),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=e.n(G),k=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-grid/stories/styles.module.scss"),A={};A.styleTagTransform=h(),A.setAttributes=L(),A.insert=z().bind(null,"head"),A.domAPI=M(),A.insertStyleElement=T();var E=I()(k.A,A);const b=k.A&&k.A.locals?k.A.locals:void 0;var o={title:"Site/Grid",component:i.x};const f=["one","two","three","four","five","six","seven","eight","nine"],S={desktop:{amount:4,minWidth:300},tablet:{amount:2,minWidth:300},mobile:{amount:3,minWidth:250}},B={render:({layoutType:U,gap:Z})=>(0,s.jsx)("div",{className:b.wrapper,children:(0,s.jsx)(i.x,{columnsConfig:S,gap:Z,layoutType:U,children:f.map(v=>(0,s.jsx)(c.n,{title:`Card ${v} title`,description:`Card ${v} description`},v))})}),args:{layoutType:"desktop",gap:"m"},argTypes:{layoutType:{name:"[Story]: Layout type",options:Object.values(_),control:{type:"radio"}}},parameters:{readme:{sidebar:[`Latest version: ${a.rE}`,t,p]},packageName:a.UU}}}),"./packages/utils/src/utils/extractSupportProps.ts":((j,r,e)=>{e.d(r,{z:()=>p});var s=e("./packages/utils/src/utils/private/constants.ts");function c(a,t){return Object.keys(a).reduce((i,_)=>(_.match(t)&&(i[_]=a[_]),i),{})}function p(a){return c(a,s.d)}}),"./packages/utils/src/utils/private/constants.ts":((j,r,e)=>{e.d(r,{d:()=>s});const s=/^(data|aria)-/}),"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=":(j=>{j.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="})}]);})();
