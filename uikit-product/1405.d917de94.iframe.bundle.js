"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[1405],{"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"(S,p,e){e.d(p,{nG:()=>ue,cu:()=>he,We:()=>X});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),i=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),t=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),n=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),f=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),h=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),y=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js");const v={s:"xs",m:"s",l:"m"};var E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(E),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=e.n(l),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),C=e.n(H),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),T=e.n(_),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=e.n(D),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Y=e.n(O),U=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css"),se={};se.styleTagTransform=Y(),se.setAttributes=T(),se.insert=C().bind(null,"head"),se.domAPI=I(),se.insertStyleElement=g();var me=b()(U.A,se);const R=U.A&&U.A.locals?U.A.locals:void 0;function J({label:d,truncate:u,divider:r,mode:a="secondary",selectButton:c}){const{size:M="s"}=(0,h.hg)(),{t:P}=(0,n.Ym)("List"),G=(0,s.useMemo)(()=>{if(!c)return null;const{onClick:K,checked:L,itemRef:w,label:F}=c;return(0,o.jsx)("span",{className:R.selectButton,"data-size":M,"data-weight":r&&a||void 0,children:(0,o.jsx)(i.b,{size:v[M],tabIndex:0,onClick:k=>{K==null||K(k),k.preventDefault(),k.stopPropagation()},onFocus:y.d,ref:w,label:F!=null?F:P(L?"groupSelectButton.reset":"groupSelectButton.select")})})},[r,a,c,M,P]);return d?(0,o.jsxs)("div",{className:R.separatorWithLabel,"data-size":M,children:[(0,o.jsx)("span",{className:R.label,"data-mode":a,children:(0,o.jsx)(f.m,{variant:u==null?void 0:u.variant,text:d,maxLines:1})}),(0,o.jsxs)("div",{style:{flex:1},children:[G,r&&(0,o.jsx)(t.c,{weight:a==="primary"?"regular":"light",className:R.divider})]})]}):r?(0,o.jsx)("div",{className:R.separatorWithoutLabel,"data-size":M,children:(0,o.jsx)(t.c,{weight:"regular"})}):null}var x=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"),q=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),A=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),B=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),oe=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),ee=e.n(oe),N=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),V=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css"),ne={};ne.styleTagTransform=Y(),ne.setAttributes=T(),ne.insert=C().bind(null,"head"),ne.domAPI=I(),ne.insertStyleElement=g();var je=b()(V.A,ne);const ae=V.A&&V.A.locals?V.A.locals:void 0;var be=function(d,u){var r={};for(var a in d)Object.prototype.hasOwnProperty.call(d,a)&&u.indexOf(a)<0&&(r[a]=d[a]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(d);c<a.length;c++)u.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(d,a[c])&&(r[a[c]]=d[a[c]]);return r};function xe(d){var{children:u,expanded:r,className:a,header:c}=d,M=be(d,["children","expanded","className","header"]);return(0,o.jsxs)("div",Object.assign({className:ee()(ae.accordion,a),role:"menuitem","aria-haspopup":!0,"aria-expanded":r},(0,N.z7)(M),{children:[c,(0,o.jsx)("div",{className:ae.contentWrapper,"aria-hidden":!r,children:(0,o.jsx)("div",{className:ae.content,"data-content":!0,children:r&&u})})]}))}var Q=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),_e=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/Checkbox.js"),Pe=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/Switch.js"),He=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/ItemContent.js"),Ee=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),ce=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),Se=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js");const Qe={s:"s",m:"s",l:"m"};var ye=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css"),Ce={};Ce.styleTagTransform=Y(),Ce.setAttributes=T(),Ce.insert=C().bind(null,"head"),Ce.domAPI=I(),Ce.insertStyleElement=g();var Ze=b()(ye.A,Ce);const We=ye.A&&ye.A.locals?ye.A.locals:void 0;var ds=function(d,u){var r={};for(var a in d)Object.prototype.hasOwnProperty.call(d,a)&&u.indexOf(a)<0&&(r[a]=d[a]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(d);c<a.length;c++)u.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(d,a[c])&&(r[a[c]]=d[a[c]]);return r};function Xe(d){var u,{beforeContent:r,afterContent:a,content:c,onClick:M,onMouseDown:P,id:G,expandIcon:K,disabled:L,open:w,itemRef:F,switch:k,showSwitchIcon:$,onKeyDown:pe,onFocus:ie,indeterminate:De,checked:ke,onSelect:Le,onOpenNestedList:ze,isParentNode:de,className:Oe,inactive:Me,itemWrapRender:qe}=d,es=ds(d,["beforeContent","afterContent","content","onClick","onMouseDown","id","expandIcon","disabled","open","itemRef","switch","showSwitchIcon","onKeyDown","onFocus","indeterminate","checked","onSelect","onOpenNestedList","isParentNode","className","inactive","itemWrapRender"]);const ve=!Me,{size:fe="s",marker:Te,contentRender:$e,firstItemId:we,focusFlattenItems:as}=(0,h.hg)(),{level:Fe=0}=(0,Q.wG)(),{closeDroplist:Ye,closeDroplistOnItemClick:ss}=(0,Ee.x)(),{value:Je,onChange:ge,mode:te,isSelectionSingle:ts,isSelectionMultiple:Ve}=(0,q.VG)(),Be=ts?ke!=null?ke:Je===G:ke!=null?ke:Je==null?void 0:Je.includes(G!=null?G:""),Z=()=>{ge==null||ge(G)},Re=j=>{L||P==null||P(j)},rs=j=>{ie==null||ie(j),j.stopPropagation()},_s=()=>{de&&Le?Le():Z()},os=j=>{L||(M==null||M(j),ve&&(de||Z()),!Ve&&ss&&Ye())},cs=j=>{if(pe==null||pe(j),j.key==="ArrowRight"&&ze){ze(j),j.preventDefault(),j.stopPropagation();return}(j.code==="Space"||j.key==="Enter"||j.key===" ")&&(Ve&&de&&Le&&Le(),!de&&Z(),!de&&(os==null||os(j)),j.stopPropagation(),j.preventDefault())},us=j=>{de&&j.stopPropagation()},ms=(0,N.z7)(es),ls=(0,o.jsx)("div",{className:ee()(ce.A.itemWrapper,We.innerWrapper,Oe),"data-inactive":Me||void 0,"data-disabled":L||void 0,"data-variant":te||void 0,"data-checked":de&&Be||!de&&Be&&!k||void 0,children:(0,o.jsxs)("li",{"data-type":"outside",role:"menuitem","data-test-id":ms["data-test-id"]||"list__base-item_"+G,ref:F,className:ee()(ce.A.listItem,We.droplistItem),"data-size":fe,onClick:os,onMouseDown:Re,tabIndex:we&&G===as[we].originalId?0:-1,"data-non-pointer":Me&&!M,"data-variant":te||void 0,"data-open":w||void 0,onKeyDown:cs,onFocus:rs,style:{"--level":Fe},"data-level-one":Fe===1||void 0,"data-level-more-one":Fe>1||void 0,"data-checked":de&&(De||Be)||Be&&!k||void 0,children:[!k&&ts&&Te&&!de&&ve&&(0,o.jsx)("div",{className:We.markerContainer,"data-test-id":"list__base-item-marker"}),!k&&Ve&&ve&&(0,o.jsx)("div",{className:We.checkbox,children:(0,o.jsx)(_e.S,{size:Qe[fe!=null?fe:"s"],disabled:L,tabIndex:-1,onChange:de?_s:void 0,checked:Be,"data-test-id":"list__base-item-checkbox",onClick:us,indeterminate:De})}),r&&(0,o.jsx)("div",{className:We.beforeContent,children:r}),c&&(0,Se.J0)(c)?(u=$e==null?void 0:$e({id:G,content:c,disabled:L}))!==null&&u!==void 0?u:(0,o.jsx)(He.V,Object.assign({disabled:L},c)):(0,o.jsxs)("div",{className:We.content,children:[" ",c," "]}),a,k&&ve&&(0,o.jsx)(Pe.d,{disabled:L,checked:Be,"data-test-id":"list__base-item-switch",showIcon:$}),!k&&K&&(0,o.jsx)("span",{className:We.expandableIcon,children:K})]})});return qe?qe(ls):ls}var ns=function(d,u){var r={};for(var a in d)Object.prototype.hasOwnProperty.call(d,a)&&u.indexOf(a)<0&&(r[a]=d[a]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(d);c<a.length;c++)u.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(d,a[c])&&(r[a[c]]=d[a[c]]);return r};function Ke(d){var{id:u,disabled:r,allChildIds:a,items:c}=d,M=ns(d,["id","disabled","allChildIds","items"]);const{level:P=0}=(0,Q.wG)(),{openCollapseItems:G=[],toggleOpenCollapseItem:K}=(0,Q.om)(),{value:L,isSelectionSingle:w,isSelectionMultiple:F}=(0,q.VG)(),{indeterminate:k,handleOnSelect:$,checked:pe}=he({items:c,id:u,disabled:r,allChildIds:a}),ie=!!G.includes(u!=null?u:""),De=!!(k&&!ie&&w&&L&&a.includes(L)||F&&pe),ke=(0,s.useCallback)(()=>{K==null||K(u!=null?u:"")},[u,K]),Le=X(c),ze=de=>{var Oe;K==null||K(u!=null?u:""),(Oe=M.onClick)===null||Oe===void 0||Oe.call(M,de)};return(0,o.jsx)(xe,{header:(0,o.jsx)(Xe,Object.assign({},M,{id:u,disabled:r,expandIcon:ie?(0,o.jsx)(A.A,{}):(0,o.jsx)(B.A,{}),onClick:ze,isParentNode:!0,onOpenNestedList:ke,checked:De,indeterminate:k,onSelect:r?void 0:$})),expanded:ie,"data-test-id":`list__accordion-item-${u}`,children:(0,o.jsx)(Q.x5.Provider,{value:{level:P+1},children:Le})})}function Ae({label:d,truncate:u,divider:r,items:a,mode:c,id:M,itemRef:P,allChildIds:G,selectButtonLabel:K}){const{indeterminate:L,checked:w,handleOnSelect:F}=he({items:a,id:M,disabled:!1,allChildIds:G}),k=X(a);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(J,{label:d,truncate:u,divider:r,mode:c,selectButton:{indeterminate:L,checked:w,itemRef:P,onClick:F,label:K}}),k]})}var is=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),Ue=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js"),Ne=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),Ge=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js");const W=["right","right-start","right-end","left","left-start","left-end","bottom","top"];var re=function(d,u){var r={};for(var a in d)Object.prototype.hasOwnProperty.call(d,a)&&u.indexOf(a)<0&&(r[a]=d[a]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(d);c<a.length;c++)u.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(d,a[c])&&(r[a[c]]=d[a[c]]);return r};function le(d){var{items:u,placement:r="right-start",id:a,scroll:c,scrollRef:M,disabled:P,onSublistOpenChanged:G,allChildIds:K,loading:L=!1,focusId:w=a,untouchableScrollbars:F=!1}=d,k=re(d,["items","placement","id","scroll","scrollRef","disabled","onSublistOpenChanged","allChildIds","loading","focusId","untouchableScrollbars"]);const{flattenItems:$,focusFlattenItems:pe,virtualized:ie}=(0,h.hg)(),{value:De,isSelectionSingle:ke,isSelectionMultiple:Le}=(0,q.VG)(),{openCollapseItems:ze=[]}=(0,Q.om)(),de=$[a],{ids:Oe,expandedIds:Me}=(0,s.useMemo)(()=>{const{ids:te,expandedIds:ts}=(0,Se.e)({focusCloseChildIds:u,focusFlattenItems:pe,openCollapseItems:ze,isSelectionMultiple:Le});return{ids:te,expandedIds:ts.concat([a])}},[pe,a,Le,u,ze]),{handleListKeyDownFactory:qe,activeItemId:es,forceUpdateActiveItemId:ve}=(0,Ne.L)(),[fe,Te]=(0,s.useState)(),$e=(0,s.useCallback)(te=>{if(qe(Oe,Me)(te),te.key==="ArrowLeft"){ve==null||ve(w),Te(!1),te.stopPropagation();return}},[qe,Oe,Me,ve,w]),{indeterminate:we,checked:as,handleOnSelect:Fe}=he({items:(0,Se.j2)(de)?de.items:[],id:a,disabled:P,allChildIds:K}),Ye=(0,s.useCallback)(()=>(ve==null||ve(m.$.dropFocus),Te(!1),!0),[ve]),ss=(0,s.useMemo)(()=>!!(!P&&es&&pe[w].allChildIds.includes(es)),[es,P,pe,w]),Je=!!(we&&!fe&&ke&&De&&K.includes(De)||Le&&as);(0,s.useEffect)(()=>{Te(te=>te&&ss)},[a,ss]);const ge=(0,s.useRef)(null);return(0,o.jsx)(is.m,{outsideClick:Ye,fallbackPlacements:W,content:(0,o.jsx)(Ge.Q,{onKeyDown:$e,items:u,nested:!0,scroll:c,virtualized:ie,tabIndex:0,ref:ge,onFocus:te=>{te.stopPropagation(),ve==null||ve(Oe[0])},scrollRef:M,limitedScrollHeight:!0,untouchableScrollbars:F,loading:L}),trigger:"hover",open:ss||fe,onOpenChange:te=>{Te(te),G==null||G(te,a)},placement:r,widthStrategy:"auto",children:(0,o.jsx)(Xe,Object.assign({},k,{disabled:P,open:fe,expandIcon:(0,o.jsx)(Ue.A,{}),id:a,isParentNode:!0,indeterminate:we,checked:Je,onOpenNestedList:()=>{Te(!0),setTimeout(()=>{var te;(te=ge.current)===null||te===void 0||te.focus()},0)},onSelect:Fe}))})}function z({focusCloseChildIds:d,focusFlattenItems:u,flattenItems:r,isSelectionMultiple:a}){return d?d.flatMap(c=>{const{itemRef:M,key:P,originalId:G,items:K}=u[c],L=r[G];if((0,Se.X8)(L)||!a&&(0,Se.$k)(L)){const w=z({focusCloseChildIds:K,focusFlattenItems:u,flattenItems:r,isSelectionMultiple:a});return[(0,o.jsx)(J,{label:L.label,truncate:L.truncate,divider:L.divider,mode:L.mode},P+"_separator"),...w]}return(0,Se.$k)(L)?(0,s.createElement)(Ae,Object.assign({},L,{items:K,itemRef:M,key:P})):(0,Se.qz)(L)?(0,s.createElement)(Ke,Object.assign({},L,{items:K,itemRef:M,key:P})):(0,Se.j2)(L)?(0,s.createElement)(le,Object.assign({},L,{focusId:c,items:K,itemRef:M,key:P})):(0,s.createElement)(Xe,Object.assign({},L,{itemRef:M,key:P}))}):[null]}function X(d){const{focusFlattenItems:u,flattenItems:r}=(0,h.hg)(),{isSelectionMultiple:a}=(0,q.VG)();return(0,s.useMemo)(()=>z({flattenItems:r,focusFlattenItems:u,focusCloseChildIds:d,isSelectionMultiple:a}),[r,d,u,a])}function ue({footerActiveElementsRefs:d}){return(0,s.useMemo)(()=>{var u;return{searchItem:{itemRef:(0,s.createRef)(),id:m.$.search,parentId:m.$.default,items:[],allChildIds:[]},footerItems:(u=d==null?void 0:d.map((r,a)=>({id:(0,x.mr)(a),itemRef:r,parentId:m.$.default,items:[],allChildIds:[]})))!==null&&u!==void 0?u:[]}},[d])}function he({id:d,allChildIds:u}){const{value:r,setValue:a,isSelectionMultiple:c}=(0,q.VG)(),{flattenItems:M}=(0,h.hg)(),P=(0,s.useMemo)(()=>u.filter(k=>{const $=M[k];return $&&!("type"in $)}),[u,M]),G=(0,s.useMemo)(()=>P.filter(k=>{const $=M[k];return $&&!("type"in $)&&!$.disabled}),[P,M]),K=c?r&&!!r.length&&P.every(k=>r==null?void 0:r.includes(k)):void 0,L=c?r&&!!r.length&&G.every(k=>r==null?void 0:r.includes(k)):void 0,w=c?!K&&P.some(k=>r==null?void 0:r.includes(k)):P.includes(r!=null?r:"");return{checked:K,indeterminate:w,handleOnSelect:()=>{if(K||L){a==null||a(k=>(k!=null?k:[]).filter($=>$!==d&&!G.includes($)));return}a==null||a(k=>Array.from(new Set([...k!=null?k:[],...G])))}}}},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"(S,p,e){e.d(p,{$k:()=>y,J0:()=>v,X8:()=>h,Xy:()=>E,e:()=>C,gZ:()=>b,j2:()=>f,jQ:()=>I,lg:()=>H,pN:()=>l,qz:()=>n});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),m=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"),i=function(_,T){var D={};for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&T.indexOf(g)<0&&(D[g]=_[g]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,g=Object.getOwnPropertySymbols(_);O<g.length;O++)T.indexOf(g[O])<0&&Object.prototype.propertyIsEnumerable.call(_,g[O])&&(D[g[O]]=_[g[O]]);return D};function t(_){return _&&!("items"in _)}function n(_){return _&&"items"in _&&_.type==="collapse"}function f(_){return _&&"items"in _&&_.type==="next-list"}function h(_){return _&&"items"in _&&_.type==="group"}function y(_){return _&&"items"in _&&_.type==="group-select"}function v(_){return typeof _=="object"&&_.option!==void 0}const E=t,b=n,l=f,I=h;function H({items:_,prefix:T,parentId:D}){const g={},O={};function Y({item:x,idx:q,prefix:A,parentId:B=o.$.default}){var oe,ee;const N=A!==void 0?(0,m.yz)(A,q):String(q),V=(oe=h(x)?void 0:x.id)!==null&&oe!==void 0?oe:N;if(t(x))return g[V]=Object.assign(Object.assign({},x),{items:[],allChildIds:[],id:V}),O[N]={key:N,originalId:V,id:N,disabled:x.disabled,parentId:B,items:[],allChildIds:[],itemRef:x.itemRef||(0,s.createRef)()},{id:V,children:[V],autoId:N,focusChildren:[N]};let ne=[],je=[];const ae=[],be=[],{items:xe}=x,Q=i(x,["items"]),_e=h(x)?B!=null?B:o.$.default:N,Pe=xe.filter(ce=>!ce.hidden);for(let ce=0;ce<Pe.length;ce++){const{id:Se,children:Qe,autoId:ye,focusChildren:Ce}=Y({item:Pe[ce],idx:ce,prefix:V,parentId:_e});be.push(ye),ae.push(Se),ne=ne.concat(Qe),je=je.concat(Ce)}const He=[...new Set(ne.concat(ae))],Ee=[...new Set(je.concat(be))];return g[V]=Object.assign(Object.assign({},Q),{id:V,items:[],allChildIds:He}),O[N]={key:N,originalId:V,id:N,parentId:B,items:be,allChildIds:Ee,disabled:(x.type==="collapse"||x.type==="next-list")&&x.disabled,type:x.type,itemRef:h(x)?void 0:(ee=x.itemRef)!==null&&ee!==void 0?ee:(0,s.createRef)()},{id:V,children:He,autoId:N,focusChildren:Ee}}const U=[],se=[];let me=[];const R=_.filter(x=>!x.hidden);for(let x=0;x<R.length;x++){const{id:q,children:A,autoId:B}=Y({item:R[x],idx:x,prefix:T,parentId:D});se.push(B),U.push(q),me.push(q),me=me.concat(A)}const J=[...new Set(me)];return{focusCloseChildIds:se,allChildIds:J,flattenItems:g,focusFlattenItems:O}}function C({focusFlattenItems:_,focusCloseChildIds:T,openCollapseItems:D,isSelectionMultiple:g}){const O=[],Y=[];function U(se){se.forEach(me=>{const R=_[me];if(R.type==="group"){U(R.items);return}if(!R.disabled){if(R.type==="group-select"){g&&O.push(R.id),U(R.items);return}O.push(R.id),R.type&&(Y.push(me),D.includes(R.originalId)&&U(R.items))}})}return U(T),{ids:O,expandedIds:Y}}},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js"(S,p,e){e.d(p,{B:()=>je});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(o),i=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),h=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),y=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(v),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),l=e.n(b),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=e.n(I),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_=e.n(C),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=e.n(T),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),O=e.n(g),Y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css"),U={};U.styleTagTransform=O(),U.setAttributes=_(),U.insert=H().bind(null,"head"),U.domAPI=l(),U.insertStyleElement=D();var se=E()(Y.A,U);const me=Y.A&&Y.A.locals?Y.A.locals:void 0,R=(0,t.forwardRef)(({listRef:ae,tabIndex:be},xe)=>{const Q=(0,t.useCallback)(_e=>{var Pe;_e.relatedTarget!==ae.current&&((Pe=ae.current)===null||Pe===void 0||Pe.focus()),_e.preventDefault(),_e.stopPropagation()},[ae]);return(0,s.jsx)("button",{type:"button","aria-hidden":!0,ref:xe,onKeyDown:y.d,onFocus:Q,className:me.hiddenBtn,tabIndex:be})});var J=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),x=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),q=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),A=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),B=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),oe=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),ee=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),N=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),V=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),ne=function(ae,be){var xe={};for(var Q in ae)Object.prototype.hasOwnProperty.call(ae,Q)&&be.indexOf(Q)<0&&(xe[Q]=ae[Q]);if(ae!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _e=0,Q=Object.getOwnPropertySymbols(ae);_e<Q.length;_e++)be.indexOf(Q[_e])<0&&Object.prototype.propertyIsEnumerable.call(ae,Q[_e])&&(xe[Q[_e]]=ae[Q[_e]]);return xe};const je=(0,t.forwardRef)((ae,be)=>{var{items:xe=[],search:Q,pinBottom:_e=[],pinTop:Pe=[],footerActiveElementsRefs:He,onKeyDown:Ee,tabIndex:ce=0,className:Se,collapse:Qe={},selection:ye,contentRender:Ce,size:Ze="s",marker:We=!0,keyboardNavigationRef:ds,hasListInFocusChain:Xe=!0}=ae,ns=ne(ae,["items","search","pinBottom","pinTop","footerActiveElementsRefs","onKeyDown","tabIndex","className","collapse","selection","contentRender","size","marker","keyboardNavigationRef","hasListInFocusChain"]);const Ke=(0,t.useMemo)(()=>!!Q,[Q]),[Ae=[],is]=(0,n.I)(Qe),Ue=(0,t.useCallback)(w=>is(F=>F!=null&&F.includes(w)?F.filter(k=>k!==w):(F!=null?F:[]).concat([w])),[is]),{searchItem:Ne,footerItems:Ge}=(0,J.nG)({footerActiveElementsRefs:He}),W=(0,t.useMemo)(()=>{const w=(0,x.lg)({items:Pe,prefix:h.$.pinTop,parentId:h.$.default}),F=(0,x.lg)({items:xe,prefix:h.$.default,parentId:h.$.default}),k=(0,x.lg)({items:_e,prefix:h.$.pinBottom,parentId:h.$.default}),$=Object.assign(Object.assign(Object.assign({},w.flattenItems),k.flattenItems),F.flattenItems),pe=Object.assign(Object.assign(Object.assign({},w.focusFlattenItems),k.focusFlattenItems),F.focusFlattenItems);return[...Ge,Ne].forEach(ie=>{$[ie.id]=ie,pe[ie.id]=Object.assign(Object.assign({},ie),{originalId:ie.id,items:[],key:ie.id,allChildIds:[]})}),{items:F,pinTop:w,pinBottom:k,flattenItems:$,focusFlattenItems:pe}},[xe,Pe,_e,Ne,Ge]),{flattenItems:re,focusFlattenItems:le}=W,z=ne(W,["flattenItems","focusFlattenItems"]),{ids:X,expandedIds:ue}=(0,t.useMemo)(()=>{const{pinTop:w,items:F,pinBottom:k}=z;let $=[],pe=[];return Ke&&$.push(Ne.id),[w,F,k].forEach(({focusFlattenItems:ie,focusCloseChildIds:De})=>{const ke=(0,x.e)({focusFlattenItems:ie,focusCloseChildIds:De,openCollapseItems:Ae,isSelectionMultiple:(ye==null?void 0:ye.mode)==="multiple"});$=$.concat(ke.ids),pe=pe.concat(ke.expandedIds)}),Ge.forEach(ie=>{$.push(ie.id)}),{ids:$,expandedIds:pe}},[Ge,Ke,z,Ae,Ne.id,ye==null?void 0:ye.mode]),he=(0,t.useRef)(null),d=(0,t.useRef)(null),u=X[0],{handleListKeyDownFactory:r,activeItemId:a,resetActiveItemId:c,forceUpdateActiveItemId:M}=(0,ee.d)({mainRef:he,btnRef:d,focusFlattenItems:le,keyboardNavigationRef:ds,hasListInFocusChain:Xe,firstItemId:u}),P=(0,t.useCallback)(w=>r(X,ue)(w),[r,X,ue]),G=(0,f.B)()&&he.current===document.activeElement&&a===void 0,K=w=>{Ee==null||Ee(w),P==null||P(w)},L=()=>{c()};return(0,s.jsx)(q.Tr,{flattenItems:re,focusFlattenItems:le,contentRender:Ce,size:Ze,marker:We,firstItemId:u,virtualized:ns.virtualized,children:(0,s.jsx)(A.WM,Object.assign({},ye,{children:(0,s.jsx)(B.bN.Provider,{value:{openCollapseItems:Ae,toggleOpenCollapseItem:Ue},children:(0,s.jsx)(oe.m.Provider,{value:{activeItemId:a,handleListKeyDownFactory:r,forceUpdateActiveItemId:M},children:(0,s.jsxs)("div",{className:m()(V.A.wrapper,Se),"data-active":G||void 0,children:[(0,s.jsx)(N.Q,Object.assign({},ns,{items:z.items.focusCloseChildIds,pinTop:z.pinTop.focusCloseChildIds,pinBottom:z.pinBottom.focusCloseChildIds,searchItem:Ne,ref:(0,i.A)(be,he),onFocus:L,onKeyDown:K,tabIndex:Xe?ce:void 0,search:Q,nested:!1})),Xe&&(0,s.jsx)(R,{ref:d,listRef:he,tabIndex:ce})]})})})}))})})},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"(S,p,e){e.d(p,{Q:()=>Ge});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/@tanstack+react-virtual@3.11.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@tanstack/react-virtual/dist/esm/index.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),i=e.n(m),t=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.10_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),h=e("./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),y=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),v=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js"),E=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js");function l({noDataState:W,noResultsState:re,errorDataState:le}){const{t:z}=(0,b.Ym)("List");return(0,n.useMemo)(()=>{const X=Object.assign({icon:{icon:v.A,appearance:"neutral",decor:!0},description:z("noData.description")},W),ue=Object.assign({description:z("noResults.description")},re),he=Object.assign({icon:{icon:E.A,appearance:"neutral",decor:!0},description:z("errorData.description")},le);return{noDataState:X,noResultsState:ue,errorDataState:he}},[le,W,re,z])}var I=e("./node_modules/.pnpm/@snack-uikit+info-block@0.6.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/index.js"),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(H),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),T=e.n(_),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),g=e.n(D),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Y=e.n(O),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),se=e.n(U),me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n(me),J=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css"),x={};x.styleTagTransform=R(),x.setAttributes=Y(),x.insert=g().bind(null,"head"),x.domAPI=T(),x.insertStyleElement=se();var q=C()(J.A,x);const A=J.A&&J.A.locals?J.A.locals:void 0;function B({dataError:W,dataFiltered:re,hasNoItems:le,emptyStates:z,loading:X,size:ue}){return X?null:W?(0,s.jsx)("div",{className:A.listEmptyStateWrapper,children:(0,s.jsx)(I.O,Object.assign({},z.errorDataState,{size:ue,align:"vertical"}))}):re&&le?(0,s.jsx)("div",{className:A.listEmptyStateWrapper,children:(0,s.jsx)(I.O,Object.assign({},z.noResultsState,{size:ue,align:"vertical","data-test-id":"list__no-results"}))}):!re&&le?(0,s.jsx)("div",{className:A.listEmptyStateWrapper,children:(0,s.jsx)(I.O,Object.assign({},z.noDataState,{size:ue,align:"vertical","data-test-id":"list__no-data"}))}):null}var oe=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),ee=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),N=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),V=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),ne=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css"),je={};je.styleTagTransform=R(),je.setAttributes=Y(),je.insert=g().bind(null,"head"),je.domAPI=T(),je.insertStyleElement=se();var ae=C()(ne.A,je);const be=ne.A&&ne.A.locals?ne.A.locals:void 0;function xe({children:W}){const{size:re="s"}=(0,V.hg)();return W?(0,s.jsxs)("div",{className:i()(be.pinTopItem),"data-size":re,"data-test-id":"list__pin-top-group-item",children:[(0,s.jsx)("div",{children:W}),(0,s.jsx)(N.c,{weight:"regular"})]}):null}function Q({children:W}){const{size:re="s"}=(0,V.hg)();return W?(0,s.jsxs)("div",{className:i()(be.pinBottomItem),"data-size":re,"data-test-id":"list__pin-bottom-group-item",children:[(0,s.jsx)(N.c,{weight:"regular"}),(0,s.jsx)("div",{children:W})]}):null}var _e=e("./node_modules/.pnpm/@snack-uikit+search-private@0.4.36_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/SearchPrivate.js"),Pe=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),He=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),Ee=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css"),ce={};ce.styleTagTransform=R(),ce.setAttributes=Y(),ce.insert=g().bind(null,"head"),ce.domAPI=T(),ce.insertStyleElement=se();var Se=C()(Ee.A,ce);const Qe=Ee.A&&Ee.A.locals?Ee.A.locals:void 0;function ye({search:W,itemRef:re}){const{size:le="s",firstItemId:z}=(0,V.hg)(),X=ue=>{var he;["ArrowDown","ArrowUp"].includes(ue.key)&&ue.preventDefault(),(he=W==null?void 0:W.onKeyDown)===null||he===void 0||he.call(W,ue)};return W?(0,s.jsx)("div",{className:i()(He.A.listItem,Qe.searchItem),"data-size":le,"data-test-id":"list__search-item",children:(0,s.jsx)(_e.s,Object.assign({size:le,tabIndex:Pe.$.search===z?0:-1,onKeyDown:X,onFocus:oe.d},W,{ref:re}))}):null}var Ce=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),Ze=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css");const ns={m:40,s:32,l:48};var Ke=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css"),Ae={};Ae.styleTagTransform=R(),Ae.setAttributes=Y(),Ae.insert=g().bind(null,"head"),Ae.domAPI=T(),Ae.insertStyleElement=se();var is=C()(Ke.A,Ae);const Ue=Ke.A&&Ke.A.locals?Ke.A.locals:void 0;var Ne=function(W,re){var le={};for(var z in W)Object.prototype.hasOwnProperty.call(W,z)&&re.indexOf(z)<0&&(le[z]=W[z]);if(W!=null&&typeof Object.getOwnPropertySymbols=="function")for(var X=0,z=Object.getOwnPropertySymbols(W);X<z.length;X++)re.indexOf(z[X])<0&&Object.prototype.propertyIsEnumerable.call(W,z[X])&&(le[z[X]]=W[z[X]]);return le};const Ge=(0,n.forwardRef)((W,re)=>{var le,{items:z,pinTop:X,pinBottom:ue,onKeyDown:he,onBlur:d,onFocus:u,tabIndex:r,active:a,scroll:c,nested:M,search:P,searchItem:G,scrollRef:K,scrollContainerRef:L,onScroll:w,footer:F,loading:k,limitedScrollHeight:$,untouchableScrollbars:pe,className:ie,noDataState:De,noResultsState:ke,errorDataState:Le,dataError:ze,dataFiltered:de,scrollToSelectedItem:Oe=!1,virtualized:Me=!1,scrollContainerClassName:qe,barHideStrategy:es="never"}=W,ve=Ne(W,["items","pinTop","pinBottom","onKeyDown","onBlur","onFocus","tabIndex","active","scroll","nested","search","searchItem","scrollRef","scrollContainerRef","onScroll","footer","loading","limitedScrollHeight","untouchableScrollbars","className","noDataState","noResultsState","errorDataState","dataError","dataFiltered","scrollToSelectedItem","virtualized","scrollContainerClassName","barHideStrategy"]);const{size:fe="s",flattenItems:Te,focusFlattenItems:$e}=(0,V.hg)(),{value:we,isSelectionSingle:as}=(0,Ce.VG)(),Fe=(0,n.useRef)(null),Ye=(0,ee.We)(z),ss=(0,ee.We)(X),Je=(0,ee.We)(ue),[ge,te]=(0,n.useState)({virtualizer:null,browser:null,measured:!1}),ts=l({noDataState:De,noResultsState:ke,errorDataState:Le}),Ve=z.length===0,{selectedItemIndex:Be,selectedItem:Z}=(0,n.useMemo)(()=>{const j={selectedItemIndex:-1,selectedItem:void 0};if(!Oe||!we)return j;const Ie=as?Te[we]:Te[we[0]];if(!(Ie!=null&&Ie.id))return j;const ps=Object.values($e),vs=ps.findIndex(fs=>fs.originalId===Ie.id);return vs<0?j:{selectedItemIndex:vs,selectedItem:ps[vs]}},[Te,$e,as,Oe,we]),Re=(0,o.Te)({count:Ye.length,getScrollElement:()=>c?Fe.current:null,estimateSize:()=>ns[fe],enabled:Me,overscan:5}),rs=Re.getVirtualItems();(0,n.useEffect)(()=>{ge.measured||(Re.measure(),te(j=>Object.assign(Object.assign({},j),{measured:!0})))},[ge.measured,Re]);const _s=c&&Oe&&Me;(0,n.useEffect)(()=>{var j;if(_s){if(!ge.measured||Be<0||!Z||ge.virtualizer===Z.originalId||Z!=null&&Z.itemRef&&(!((j=Fe.current)===null||j===void 0)&&j.contains(Z==null?void 0:Z.itemRef.current)))return;Re.scrollToIndex(Be,{align:"center"}),te(Ie=>Object.assign(Object.assign({},Ie),{virtualizer:Z.originalId}))}},[_s,ge,Z,Be,Re]);const os=!!(!((le=Z==null?void 0:Z.itemRef)===null||le===void 0)&&le.current);(0,n.useEffect)(()=>{var j,Ie;Z&&ge.virtualizer!==null&&os&&ge.virtualizer!==ge.browser&&((Ie=(j=Z.itemRef)===null||j===void 0?void 0:j.current)===null||Ie===void 0||Ie.scrollIntoView({block:"center"}),te(ps=>Object.assign(Object.assign({},ps),{browser:Z.originalId})))},[ge,Z,os,Be]);const cs=(0,n.useMemo)(()=>k&&(0,s.jsx)("div",{role:"spinbutton",tabIndex:-1,className:Ue.loader,"data-size":fe,"data-no-items":Ve||void 0,"data-test-id":"list__loader",children:(0,s.jsx)(f.y,{size:fe==="l"?"s":"xs"})}),[Ve,k,fe]),us=(0,n.useMemo)(()=>(0,s.jsxs)(s.Fragment,{children:[Me?(0,s.jsx)("div",{className:Ue.virtualizedContainer,style:{height:Re.getTotalSize()},tabIndex:-1,children:rs.map(j=>(0,s.jsx)("div",{"data-index":j.index,ref:Re.measureElement,tabIndex:-1,className:Ue.virtualizedPositionBox,style:{transform:`translateY(${j.start}px)`},children:Ye[j.index]},j.key))}):Ye,cs,(0,s.jsx)(B,{loading:k,dataError:ze,emptyStates:ts,hasNoItems:Ve,dataFiltered:de!=null?de:!!(P!=null&&P.value),size:fe})]}),[ze,de,ts,Ve,Ye,k,cs,P==null?void 0:P.value,fe,rs,Me,Re]),ms=(0,n.useCallback)(()=>{var j,Ie;Z&&((Ie=(j=Z==null?void 0:Z.itemRef)===null||j===void 0?void 0:j.current)===null||Ie===void 0||Ie.scrollIntoView({block:"center"}))},[Z]),ls=(0,s.jsxs)("ul",Object.assign({className:i()(Ze.A.listContainer,ie),ref:re,onKeyDown:he,tabIndex:r,onFocus:u,onBlur:d,"data-active":a||void 0,role:"menu"},(0,y.z7)(ve),{children:[(Number(X==null?void 0:X.length)>0||P)&&(0,s.jsxs)(xe,{children:[P&&(0,s.jsx)(ye,Object.assign({search:P},G)),Number(X==null?void 0:X.length)>0&&ss]}),c?(0,s.jsxs)(h.O,{className:i()({[Ze.A.scrollContainerS]:c&&$&&fe==="s",[Ze.A.scrollContainerM]:c&&$&&fe==="m",[Ze.A.scrollContainerL]:c&&$&&fe==="l"},qe),barHideStrategy:es,size:"s",ref:(0,t.A)(Fe,L),untouchableScrollbars:pe,onScroll:w,onInitialized:ms,children:[us,(0,s.jsx)("div",{className:Ue.scrollStub,ref:K})]}):(0,s.jsx)(s.Fragment,{children:us}),Number(ue==null?void 0:ue.length)>0&&(0,s.jsx)(Q,{children:Je}),F&&(0,s.jsx)("div",{className:Ue.footer,onFocus:oe.d,children:F})]}));return M?(0,s.jsx)("li",{style:{listStyleType:"none"},role:"menuitem",children:ls}):ls})},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"(S,p,e){e.d(p,{bN:()=>i,om:()=>t,wG:()=>m,x5:()=>o});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o=(0,s.createContext)({}),m=()=>(0,s.useContext)(o),i=(0,s.createContext)({}),t=()=>(0,s.useContext)(i)},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"(S,p,e){e.d(p,{L:()=>m,m:()=>o});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o=(0,s.createContext)({handleListKeyDownFactory:()=>()=>{}}),m=()=>(0,s.useContext)(o)},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"(S,p,e){e.d(p,{Tr:()=>h,hg:()=>n});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),i=function(y,v){var E={};for(var b in y)Object.prototype.hasOwnProperty.call(y,b)&&v.indexOf(b)<0&&(E[b]=y[b]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,b=Object.getOwnPropertySymbols(y);l<b.length;l++)v.indexOf(b[l])<0&&Object.prototype.propertyIsEnumerable.call(y,b[l])&&(E[b[l]]=y[b[l]]);return E};const t=(0,o.createContext)({flattenItems:{},focusFlattenItems:{},firstItemId:m.$.default});function n(){return(0,o.useContext)(t)}function f({size:y,marker:v,flattenItems:E,focusFlattenItems:b,contentRender:l,firstItemId:I,virtualized:H}){return{size:y,marker:v,contentRender:l,flattenItems:E,focusFlattenItems:b,firstItemId:I,virtualized:H}}function h(y){var{children:v}=y,E=i(y,["children"]);return(0,s.jsx)(t.Provider,{value:f(E),children:v})}},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"(S,p,e){e.d(p,{K:()=>o,x:()=>m});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o=(0,s.createContext)({closeDroplist:()=>{},closeDroplistOnItemClick:!1}),m=()=>(0,s.useContext)(o)},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"(S,p,e){e.d(p,{VG:()=>b,WM:()=>E});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),i=function(l,I){var H={};for(var C in l)Object.prototype.hasOwnProperty.call(l,C)&&I.indexOf(C)<0&&(H[C]=l[C]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,C=Object.getOwnPropertySymbols(l);_<C.length;_++)I.indexOf(C[_])<0&&Object.prototype.propertyIsEnumerable.call(l,C[_])&&(H[C[_]]=l[C[_]]);return H};const t=(0,o.createContext)({value:void 0,onChange:void 0,mode:void 0});function n(l){return"mode"in l&&l.mode==="multiple"}function f(l){return"mode"in l&&l.mode==="single"}function h({children:l}){return(0,s.jsx)(t.Provider,{value:{mode:"none"},children:l})}function y({value:l,defaultValue:I,onChange:H,children:C}){const[_,T]=(0,m.I)({value:l,defaultValue:I,onChange:H}),D=(0,o.useCallback)(g=>T(O=>{if(g!==O)return g}),[T]);return(0,s.jsx)(t.Provider,{value:{value:_,onChange:D,mode:"single",isSelectionSingle:!0,isSelectionMultiple:!1,setValue:T},children:C})}function v({value:l,defaultValue:I,onChange:H,children:C}){const[_,T]=(0,m.I)({value:l,defaultValue:I,onChange:H}),D=(0,o.useCallback)(g=>{T(O=>{if(Array.isArray(O))return O.includes(g)?O.filter(Y=>Y!==g):O.concat(g);if(O===void 0)return Array.isArray(g)?g:[g]})},[T]);return(0,s.jsx)(t.Provider,{value:{value:_,onChange:D,mode:"multiple",isSelectionSingle:!1,isSelectionMultiple:!0,setValue:T},children:C})}function E(l){var{children:I}=l,H=i(l,["children"]);return f(H)?(0,s.jsx)(y,Object.assign({},H,{children:I})):n(H)?(0,s.jsx)(v,Object.assign({},H,{children:I})):(0,s.jsx)(h,{children:I})}function b(){return(0,o.useContext)(t)}},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"(S,p,e){e.d(p,{d:()=>m});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js");function m({mainRef:i,btnRef:t,focusFlattenItems:n,keyboardNavigationRef:f,hasListInFocusChain:h,firstItemId:y}){const v=h?void 0:y,[E,b]=(0,s.useState)(()=>v),l=(0,s.useRef)(v),I=(0,s.useCallback)(()=>{b(v),l.current=v},[v]),H=(0,s.useCallback)((_,T)=>D=>{var g,O,Y,U,se,me,R,J,x,q;switch(D.key){case"ArrowDown":{if(l.current!==void 0){const A=_.findIndex(N=>N===l.current),B=Math.min(A+1,_.length-1),oe=_[B],ee=n[oe];l.current=oe,b(oe),ee.type!=="group"&&((O=(g=ee.itemRef)===null||g===void 0?void 0:g.current)===null||O===void 0||O.focus())}else{const A=_[0],B=n[A];l.current=A,b(A),B.type!=="group"&&((U=(Y=B.itemRef)===null||Y===void 0?void 0:Y.current)===null||U===void 0||U.focus())}D.stopPropagation(),D.preventDefault();return}case"ArrowUp":{if(_[0]===l.current)h&&n[_[0]].parentId===o.$.default&&(l.current=void 0,b(void 0),(se=i==null?void 0:i.current)===null||se===void 0||se.focus());else if(l.current!==void 0){const A=_.findIndex(N=>N===l.current),B=Math.max(A-1,0),oe=_[B],ee=n[oe];l.current=oe,b(oe),ee.type!=="group"&&((R=(me=ee.itemRef)===null||me===void 0?void 0:me.current)===null||R===void 0||R.focus())}D.stopPropagation(),D.preventDefault();return}case"ArrowRight":{if(l.current!==void 0&&T.includes(l.current)){const B=n[l.current].items[0],oe=n[B];l.current=B,b(B),setTimeout(()=>{var ee,N;return(N=(ee=oe.itemRef)===null||ee===void 0?void 0:ee.current)===null||N===void 0?void 0:N.focus()},0),D.stopPropagation(),D.preventDefault()}return}case"Tab":{l.current!==void 0?h?(D.preventDefault(),D.stopPropagation(),l.current=void 0,b(void 0),(J=i==null?void 0:i.current)===null||J===void 0||J.focus()):I():t&&!D.shiftKey?(x=t==null?void 0:t.current)===null||x===void 0||x.focus():(q=i==null?void 0:i.current)===null||q===void 0||q.focus();return}default:return}},[n,h,i,I,t]),C=(0,s.useCallback)(_=>{var T,D;b(_),l.current=_;const g=n[_];(D=(T=g==null?void 0:g.itemRef)===null||T===void 0?void 0:T.current)===null||D===void 0||D.focus()},[n]);return(0,s.useImperativeHandle)(f,()=>({focusItem:C}),[C]),{resetActiveItemId:I,activeItemId:E,forceUpdateActiveItemId:C,handleListKeyDownFactory:H}}},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"(S,p,e){e.d(p,{$:()=>s});const s={default:"~main",pinTop:"~pinTop",pinBottom:"~pinBottom",footer:"~footer",search:"~search",dropFocus:"~dropFocus"}},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/ItemContent.js"(S,p,e){e.d(p,{V:()=>R});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(o),i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),n=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),f=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(h),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),E=e.n(v),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),l=e.n(b),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),H=e.n(I),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_=e.n(C),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=e.n(T),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css"),O={};O.styleTagTransform=D(),O.setAttributes=H(),O.insert=l().bind(null,"head"),O.domAPI=E(),O.insertStyleElement=_();var Y=y()(g.A,O);const U=g.A&&g.A.locals?g.A.locals:void 0;var se=function(J,x){var q={};for(var A in J)Object.prototype.hasOwnProperty.call(J,A)&&x.indexOf(A)<0&&(q[A]=J[A]);if(J!=null&&typeof Object.getOwnPropertySymbols=="function")for(var B=0,A=Object.getOwnPropertySymbols(J);B<A.length;B++)x.indexOf(A[B])<0&&Object.prototype.propertyIsEnumerable.call(J,A[B])&&(q[A[B]]=J[A[B]]);return q};const me={option:1,description:2,variant:"end"};function R(J){var{truncate:x,caption:q,description:A,option:B,className:oe,disabled:ee}=J,N=se(J,["truncate","caption","description","option","className","disabled"]);const{size:V="s"}=(0,f.hg)(),ne=(0,i.useMemo)(()=>Object.assign(Object.assign({},me),x),[x]);return(0,s.jsxs)("div",Object.assign({className:m()(U.content,oe)},(0,n.z7)(N),{"data-size":V!=null?V:"s","data-disabled":ee||void 0,children:[(0,s.jsxs)("div",{className:U.headline,children:[(0,s.jsx)("div",{className:U.label,children:(0,s.jsx)(t.m,{variant:ne.variant,text:String(B),maxLines:ne.option,"data-test-id":"list__base-item-option"})}),q&&(0,s.jsx)("span",{className:U.caption,children:q})]}),A&&(0,s.jsx)("div",{className:U.description,children:(0,s.jsx)(t.m,{text:A,maxLines:ne.description,"data-test-id":"list__base-item-description"})})]}))}},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"(S,p,e){e.d(p,{cE:()=>i,mr:()=>o,yz:()=>m});var s=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js");const o=t=>`${s.$.footer}__${t}`,m=(t,n)=>[t,n].join("-"),i=t=>m(s.$.default,t)},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"(S,p,e){e.d(p,{d:()=>s});const s=o=>{o.stopPropagation()}},"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"(S,p,e){e.d(p,{I:()=>o});var s=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function o({value:m,onChange:i,defaultValue:t}){return(0,s.iC)(m,t,n=>{const f=typeof n=="function"?n(m):n;i==null||i(f)})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css"(S,p,e){e.d(p,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(m),t=i()(o());t.push([S.id,`.checkbox--eAeE8{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--dimension-3m, 24px);
  height:var(--dimension-3m, 24px);
}

.beforeContent--aKe5j{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.beforeContent--aKe5j svg{
  max-width:100%;
  max-height:100%;
}

.expandableIcon--qxn6W{
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  fill:currentColor;
}

.markerContainer--hSq8J{
  padding-top:var(--space-drop-list-item-marker-container-vertical-padding, 2px);
  padding-bottom:var(--space-drop-list-item-marker-container-vertical-padding, 2px);
  pointer-events:none;
  position:absolute;
  top:0;
  left:0;
  box-sizing:border-box;
  height:100%;
}
.markerContainer--hSq8J:before{
  width:var(--size-drop-list-item-marker, 4px);
  border-bottom-right-radius:var(--radius-drop-list-marker, 4px);
  border-top-right-radius:var(--radius-drop-list-marker, 4px);
  content:"";
  display:block;
  height:100%;
}

.droplistItem--PyYH5{
  width:100%;
}
.droplistItem--PyYH5[data-size=s][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px));
}
.droplistItem--PyYH5[data-size=s][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-s, 24px));
}
.droplistItem--PyYH5[data-size=s] .headline--Wlzi0{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--PyYH5[data-size=m][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px));
}
.droplistItem--PyYH5[data-size=m][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-m, 24px));
}
.droplistItem--PyYH5[data-size=m] .headline--Wlzi0{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--PyYH5[data-size=l][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px));
}
.droplistItem--PyYH5[data-size=l][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-l, 24px));
}
.droplistItem--PyYH5[data-size=l] .headline--Wlzi0{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--PyYH5[data-non-pointer]{
  cursor:inherit;
}

.innerWrapper--NCX6W[data-disabled] .expandableIcon--qxn6W{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.innerWrapper--NCX6W[data-disabled] .beforeContent--aKe5j{
  opacity:var(--opacity-a064, 0.64);
}
.innerWrapper--NCX6W[data-disabled] .droplistItem--PyYH5{
  cursor:not-allowed;
}
.innerWrapper--NCX6W[data-has-checked][data-variant=single]::before, .innerWrapper--NCX6W[data-checked][data-variant=single]::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--NCX6W[data-has-checked][data-variant=single]:hover::before, .innerWrapper--NCX6W[data-checked][data-variant=single]:hover::before{
  opacity:var(--opacity-a016, 0.16);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--NCX6W[data-has-checked] .markerContainer--hSq8J:before, .innerWrapper--NCX6W[data-checked] .markerContainer--hSq8J:before{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--NCX6W[data-has-checked] .droplistItem--PyYH5:focus-visible[data-variant=single], .innerWrapper--NCX6W[data-checked] .droplistItem--PyYH5:focus-visible[data-variant=single]{
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--NCX6W[data-has-checked][data-disabled] .markerContainer--hSq8J:before, .innerWrapper--NCX6W[data-checked][data-disabled] .markerContainer--hSq8J:before{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}

.content--Uyy6N{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}`,""]),t.locals={checkbox:"checkbox--eAeE8",beforeContent:"beforeContent--aKe5j",expandableIcon:"expandableIcon--qxn6W",markerContainer:"markerContainer--hSq8J",droplistItem:"droplistItem--PyYH5",headline:"headline--Wlzi0",innerWrapper:"innerWrapper--NCX6W",content:"content--Uyy6N"};const n=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css"(S,p,e){e.d(p,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(m),t=i()(o());t.push([S.id,`.pinTopItem--defMG[data-size=s]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--defMG[data-size=m]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--defMG[data-size=l]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--defMG{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinTopItem--defMG li,
.pinTopItem--defMG ul{
  list-style-type:none;
}

.pinBottomItem--fUXSp[data-size=s]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--fUXSp[data-size=m]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--fUXSp[data-size=l]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--fUXSp{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinBottomItem--fUXSp li,
.pinBottomItem--fUXSp ul{
  list-style-type:none;
}`,""]),t.locals={pinTopItem:"pinTopItem--defMG",pinBottomItem:"pinBottomItem--fUXSp"};const n=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css"(S,p,e){e.d(p,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(m),t=i()(o());t.push([S.id,`.searchItem--ankoi{
  width:100%;
}
.searchItem--ankoi:focus-within, .searchItem--ankoi:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  max-width:100%;
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}`,""]),t.locals={searchItem:"searchItem--ankoi"};const n=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"(S,p,e){e.d(p,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(m),t=i()(o());t.push([S.id,`.itemWrapper--LoCvc{
  position:relative;
  min-width:100%;
  margin:0;
  padding:0;
}
.itemWrapper--LoCvc::before, .itemWrapper--LoCvc::after{
  pointer-events:none;
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:transparent;
}
.itemWrapper--LoCvc[data-disabled], .itemWrapper--LoCvc:disabled{
  cursor:not-allowed;
  background-color:transparent;
  outline:none;
}
.itemWrapper--LoCvc[data-disabled]::before, .itemWrapper--LoCvc:disabled::before{
  display:none;
}
.itemWrapper--LoCvc[data-disabled]::after, .itemWrapper--LoCvc:disabled::after{
  cursor:not-allowed;
  background-color:transparent;
}
.itemWrapper--LoCvc:not([data-inactive], [data-disabled])[data-open]::before, .itemWrapper--LoCvc:not([data-inactive], [data-disabled])[data-focused]::before, .itemWrapper--LoCvc:not([data-inactive], [data-disabled]):focus-visible::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
@media (hover: hover){
  .itemWrapper--LoCvc:not([data-inactive], [data-disabled]):hover::before{
    opacity:var(--opacity-a008, 0.08);
    background-color:var(--sys-neutral-accent-default, #787b8a);
  }
}

.listItem--g38il{
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
.listItem--g38il[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
}
.listItem--g38il[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-bottom:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
}
.listItem--g38il[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-bottom:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
}
.listItem--g38il:not([data-inactive], [data-disabled])[data-focused], .listItem--g38il:not([data-inactive], [data-disabled]):focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
}`,""]),t.locals={itemWrapper:"itemWrapper--LoCvc",listItem:"listItem--g38il"};const n=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css"(S,p,e){e.d(p,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(m),t=i()(o());t.push([S.id,`.loader--h8rSI{
  display:flex;
  align-items:center;
  justify-content:center;
}
.loader--h8rSI[data-size=s]{
  height:var(--dimension-3m, 24px);
}
.loader--h8rSI[data-size=s][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-3m, 24px));
  height:calc(3 * var(--dimension-3m, 24px));
}
.loader--h8rSI[data-size=m]{
  height:var(--dimension-4m, 32px);
}
.loader--h8rSI[data-size=m][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-4m, 32px));
  height:calc(3 * var(--dimension-4m, 32px));
}
.loader--h8rSI[data-size=l]{
  height:var(--dimension-5m, 40px);
}
.loader--h8rSI[data-size=l][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-5m, 40px));
  height:calc(3 * var(--dimension-5m, 40px));
}
.loader--h8rSI:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}

.scrollStub--AxMuh{
  height:calc(var(--dimension-025m, 2px) / 2);
  margin-top:calc(var(--dimension-025m, 2px) / -2);
  background:transparent;
}

.footer--DvIKW{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  padding:var(--dimension-050m, 4px);
}

.content--hNP2g{
  overflow:hidden;
  flex-grow:1;
}

.virtualizedContainer--E_qly{
  position:relative;
  width:100%;
}

.virtualizedPositionBox--lDg15{
  position:absolute;
  top:0;
  left:0;
  width:100%;
}`,""]),t.locals={loader:"loader--h8rSI",scrollStub:"scrollStub--AxMuh",footer:"footer--DvIKW",content:"content--hNP2g",virtualizedContainer:"virtualizedContainer--E_qly",virtualizedPositionBox:"virtualizedPositionBox--lDg15"};const n=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"(S,p,e){e.d(p,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(m),t=i()(o());t.push([S.id,`.listContainer--II7qU{
  display:flex;
  flex-direction:column;
  height:100%;
  margin:0;
  padding:0;
}
.listContainer--II7qU:focus-visible{
  border:none;
  outline:none;
}
.listContainer--II7qU:focus-visible[data-active]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.listContainer--II7qU:focus-visible[data-active] *{
  cursor:inherit;
}
.listContainer--II7qU li,
.listContainer--II7qU ul{
  list-style-type:none;
}

.wrapper--M714E{
  position:relative;
  overflow:hidden;
  display:block;
  box-sizing:border-box;
  height:100%;
}
.wrapper--M714E:has(.listContainer--II7qU:focus-visible){
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.wrapper--M714E li,
.wrapper--M714E ul{
  list-style-type:none;
}

.scrollContainerS--dvLAO{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 32);
}

.scrollContainerM--ctOvQ{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 40);
}

.scrollContainerL--oPPAq{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 48);
}`,""]),t.locals={listContainer:"listContainer--II7qU",wrapper:"wrapper--M714E",scrollContainerS:"scrollContainerS--dvLAO",scrollContainerM:"scrollContainerM--ctOvQ",scrollContainerL:"scrollContainerL--oPPAq"};const n=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css"(S,p,e){e.d(p,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(m),t=i()(o());t.push([S.id,`.accordion--Wq_Hc{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  transition:gap 300ms;
}
.accordion--Wq_Hc::-webkit-scrollbar{
  width:0;
}
.accordion--Wq_Hc[aria-expanded=false]{
  gap:0;
}

.contentWrapper--PPILL{
  box-sizing:border-box;
  width:100%;
}
.contentWrapper--PPILL[aria-hidden=false] > div[data-content]{
  display:block;
}

.content--Thvra{
  position:relative;
  display:none;
  box-sizing:border-box;
  width:100%;
}`,""]),t.locals={accordion:"accordion--Wq_Hc",contentWrapper:"contentWrapper--PPILL",content:"content--Thvra"};const n=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css"(S,p,e){e.d(p,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(m),t=i()(o());t.push([S.id,`.hiddenBtn--uoc9C{
  position:absolute;
  width:0;
  height:0;
  margin:0;
  padding:0;
  border:none;
  outline:none;
}`,""]),t.locals={hiddenBtn:"hiddenBtn--uoc9C"};const n=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css"(S,p,e){e.d(p,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(m),t=i()(o());t.push([S.id,`.headline--qQAus{
  display:flex;
}

.label--RPtje{
  overflow:hidden;
  flex:1;
  color:var(--sys-neutral-text-main, #41424e);
}

.caption--xbFlw{
  overflow:hidden;
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  text-overflow:ellipsis;
  white-space:nowrap;
}

.description--OHvHg{
  color:var(--sys-neutral-text-support, #6d707f);
}

.content--KFoHw{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}
.content--KFoHw[data-size=s] .headline--qQAus{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--KFoHw[data-size=s] .label--RPtje{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  display:flex;
  align-items:center;
}
.content--KFoHw[data-size=s] .caption--xbFlw{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--KFoHw[data-size=s] .description--OHvHg{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--KFoHw[data-size=m] .headline--qQAus{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--KFoHw[data-size=m] .label--RPtje{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  display:flex;
  align-items:center;
}
.content--KFoHw[data-size=m] .caption--xbFlw{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--KFoHw[data-size=m] .description--OHvHg{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--KFoHw[data-size=l] .headline--qQAus{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--KFoHw[data-size=l] .label--RPtje{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
  display:flex;
  align-items:center;
}
.content--KFoHw[data-size=l] .caption--xbFlw{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--KFoHw[data-size=l] .description--OHvHg{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--KFoHw[data-disabled] .label--RPtje,
.content--KFoHw[data-disabled] .description--OHvHg,
.content--KFoHw[data-disabled] .caption--xbFlw{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),t.locals={headline:"headline--qQAus",label:"label--RPtje",caption:"caption--xbFlw",description:"description--OHvHg",content:"content--KFoHw"};const n=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css"(S,p,e){e.d(p,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(m),t=i()(o());t.push([S.id,`.listEmptyStateWrapper--XYsqS{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  padding:var(--dimension-1m, 8px);
}`,""]),t.locals={listEmptyStateWrapper:"listEmptyStateWrapper--XYsqS"};const n=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css"(S,p,e){e.d(p,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(m),t=i()(o());t.push([S.id,`.separatorWithLabel--pu0vL{
  display:flex;
  gap:var(--dimension-1m, 8px);
  align-items:flex-end;
  box-sizing:border-box;
  width:100%;
  min-width:100%;
}
.separatorWithLabel--pu0vL[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-s, 32px);
}
.separatorWithLabel--pu0vL[data-size=s] .label--oVcsw[data-mode=primary]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--pu0vL[data-size=s] .label--oVcsw[data-mode=secondary]{
  font-family:var(--light-label-m-font-family, SB Sans Interface);
  font-weight:var(--light-label-m-font-weight, Regular);
  line-height:var(--light-label-m-line-height, 16px);
  font-size:var(--light-label-m-font-size, 12px);
  letter-spacing:var(--light-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--pu0vL[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-m, 40px);
}
.separatorWithLabel--pu0vL[data-size=m] .label--oVcsw[data-mode=primary]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--pu0vL[data-size=m] .label--oVcsw[data-mode=secondary]{
  font-family:var(--light-label-l-font-family, SB Sans Interface);
  font-weight:var(--light-label-l-font-weight, Regular);
  line-height:var(--light-label-l-line-height, 20px);
  font-size:var(--light-label-l-font-size, 14px);
  letter-spacing:var(--light-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--pu0vL[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-l, 48px);
}
.separatorWithLabel--pu0vL[data-size=l] .label--oVcsw[data-mode=primary]{
  font-family:var(--sans-title-m-font-family, SB Sans Interface);
  font-weight:var(--sans-title-m-font-weight, Semibold);
  line-height:var(--sans-title-m-line-height, 24px);
  font-size:var(--sans-title-m-font-size, 16px);
  letter-spacing:var(--sans-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);
}
.separatorWithLabel--pu0vL[data-size=l] .label--oVcsw[data-mode=secondary]{
  font-family:var(--light-title-m-font-family, SB Sans Interface);
  font-weight:var(--light-title-m-font-weight, Regular);
  line-height:var(--light-title-m-line-height, 24px);
  font-size:var(--light-title-m-font-size, 16px);
  letter-spacing:var(--light-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-m-paragraph-spacing, 8.8px);
}

.separatorWithoutLabel--mBoz8{
  display:flex;
  align-items:flex-end;
}
.separatorWithoutLabel--mBoz8[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
}
.separatorWithoutLabel--mBoz8[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
}
.separatorWithoutLabel--mBoz8[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
}
.separatorWithoutLabel--mBoz8{
  box-sizing:border-box;
}

.label--oVcsw{
  overflow:hidden;
  flex-shrink:1;
}
.label--oVcsw[data-mode=primary]{
  color:var(--sys-neutral-text-main, #41424e);
}
.label--oVcsw[data-mode=secondary]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}

hr.divider--DEtai{
  flex:1;
  width:auto;
  min-width:0;
}

.selectButton--_HOsG{
  display:flex;
  justify-content:flex-end;
}
.selectButton--_HOsG[data-weight=primary]{
  --divider-height:1px;
}
.selectButton--_HOsG[data-weight=secondary]{
  --divider-height:0.5px;
}
.selectButton--_HOsG[data-size=s]{
  transform:translateY(calc((var(--size-button-xs, 24px) - var(--sans-label-s-line-height, 14px)) / 2 - var(--divider-height, 0)));
}
.selectButton--_HOsG[data-size=m]{
  transform:translateY(calc((var(--size-button-s, 32px) - var(--sans-label-m-line-height, 16px)) / 2 - var(--divider-height, 0)));
}
.selectButton--_HOsG[data-size=l]{
  transform:translateY(calc((var(--size-button-m, 40px) - var(--sans-label-l-line-height, 20px)) / 2 - var(--divider-height, 0)));
}`,""]),t.locals={separatorWithLabel:"separatorWithLabel--pu0vL",label:"label--oVcsw",separatorWithoutLabel:"separatorWithoutLabel--mBoz8",divider:"divider--DEtai",selectButton:"selectButton--_HOsG"};const n=t},"./node_modules/.pnpm/fuzzy-search@3.2.1/node_modules/fuzzy-search/src/FuzzySearch.js"(S,p,e){e.d(p,{A:()=>o});class s{static getDescendantProperty(i,t,n=[]){let f,h,y,v,E,b;if(t){if(y=t.indexOf("."),y===-1?f=t:(f=t.slice(0,y),h=t.slice(y+1)),v=i[f],v!==null&&typeof v!="undefined")if(!h&&(typeof v=="string"||typeof v=="number"))n.push(v);else if(Object.prototype.toString.call(v)==="[object Array]")for(E=0,b=v.length;E<b;E++)s.getDescendantProperty(v[E],h,n);else h&&s.getDescendantProperty(v,h,n)}else n.push(i);return n}}class o{constructor(i=[],t=[],n={}){Array.isArray(t)||(n=t,t=[]),this.haystack=i,this.keys=t,this.options=Object.assign({caseSensitive:!1,sort:!1},n)}search(i=""){if(i==="")return this.haystack;const t=[];for(let n=0;n<this.haystack.length;n++){const f=this.haystack[n];if(this.keys.length===0){const h=o.isMatch(f,i,this.options.caseSensitive);h&&t.push({item:f,score:h})}else for(let h=0;h<this.keys.length;h++){const y=s.getDescendantProperty(f,this.keys[h]);let v=!1;for(let E=0;E<y.length;E++){const b=o.isMatch(y[E],i,this.options.caseSensitive);if(b){v=!0,t.push({item:f,score:b});break}}if(v)break}}return this.options.sort&&t.sort((n,f)=>n.score-f.score),t.map(n=>n.item)}static isMatch(i,t,n){i=String(i),t=String(t),n||(i=i.toLocaleLowerCase(),t=t.toLocaleLowerCase());const f=o.nearestIndexesFor(i,t);return f?i===t?1:f.length>1?2+(f[f.length-1]-f[0]):2+f[0]:!1}static nearestIndexesFor(i,t){const n=t.split("");let f=[];return o.indexesOfFirstLetter(i,t).forEach((y,v)=>{let E=y+1;f[v]=[y];for(let b=1;b<n.length;b++){const l=n[b];if(E=i.indexOf(l,E),E===-1){f[v]=!1;break}f[v].push(E),E++}}),f=f.filter(y=>y!==!1),f.length?f.sort((y,v)=>y.length===1?y[0]-v[0]:(y=y[y.length-1]-y[0],v=v[v.length-1]-v[0],y-v))[0]:!1}static indexesOfFirstLetter(i,t){const n=t[0];return i.split("").map((f,h)=>f!==n?!1:h).filter(f=>f!==!1)}}},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"(S,p,e){e.d(p,{A:()=>C});var s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(s),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=e.n(m),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),n=e.n(t),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),h=e.n(f),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=e.n(y),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(E),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),I={};I.styleTagTransform=b(),I.setAttributes=h(),I.insert=n().bind(null,"head"),I.domAPI=i(),I.insertStyleElement=v();var H=o()(l.A,I);const C=l.A&&l.A.locals?l.A.locals:void 0},"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"(S,p,e){e.d(p,{A:()=>C});var s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(s),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=e.n(m),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),n=e.n(t),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),h=e.n(f),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=e.n(y),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(E),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),I={};I.styleTagTransform=b(),I.setAttributes=h(),I.insert=n().bind(null,"head"),I.domAPI=i(),I.insertStyleElement=v();var H=o()(l.A,I);const C=l.A&&l.A.locals?l.A.locals:void 0}}]);})();
