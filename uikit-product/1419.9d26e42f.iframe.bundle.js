"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[1419],{"./node_modules/.pnpm/@snack-uikit+dropdown@0.5.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"(I,v,e){e.d(v,{m:()=>w});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=e.n(o),m=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(n),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),C=e.n($),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),N=e.n(K),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),P=e.n(V),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(p),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),S=e.n(F),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"),j={};j.styleTagTransform=S(),j.setAttributes=P(),j.insert=N().bind(null,"head"),j.domAPI=C(),j.insertStyleElement=x();var A=c()(u.A,j);const k=u.A&&u.A.locals?u.A.locals:void 0;var T=function(M,D){var B={};for(var g in M)Object.prototype.hasOwnProperty.call(M,g)&&D.indexOf(g)<0&&(B[g]=M[g]);if(M!=null&&typeof Object.getOwnPropertySymbols=="function")for(var q=0,g=Object.getOwnPropertySymbols(M);q<g.length;q++)D.indexOf(g[q])<0&&Object.prototype.propertyIsEnumerable.call(M,g[q])&&(B[g[q]]=M[g[q]]);return B};function w(M){var{content:D,trigger:B="click",placement:g="bottom-start",children:q,triggerRef:b,widthStrategy:ae="gte",triggerClassName:J}=M,H=T(M,["content","trigger","placement","children","triggerRef","widthStrategy","triggerClassName"]);return!q&&!b?null:(0,t.jsx)(m.Z,Object.assign({placement:g,popoverContent:(0,t.jsx)("div",{className:k.dropdownContainer,children:D}),trigger:B,triggerRef:b,hasArrow:!1,widthStrategy:ae,triggerClassName:f()(k.defaultTriggerClassName,J)},H,{children:q}))}},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"(I,v,e){e.d(v,{nG:()=>He,cu:()=>U,We:()=>nt});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),m=e("./node_modules/.pnpm/@snack-uikit+button@0.19.19_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),n=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.12_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),c=e("./node_modules/.pnpm/@snack-uikit+locale@0.16.0/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),$=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),C=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),K=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js");const N={s:"xs",m:"s",l:"m"};var V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(V),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),x=e.n(p),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),S=e.n(F),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),j=e.n(u),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),k=e.n(A),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),w=e.n(T),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css"),D={};D.styleTagTransform=w(),D.setAttributes=j(),D.insert=S().bind(null,"head"),D.domAPI=x(),D.insertStyleElement=k();var B=P()(M.A,D);const g=M.A&&M.A.locals?M.A.locals:void 0;function q({label:a,truncate:_,divider:d,mode:s="secondary",selectButton:l}){const{size:L="s"}=(0,C.hg)(),{t:O}=(0,c.Ym)("List"),G=(0,t.useMemo)(()=>{if(!l)return null;const{onClick:z,checked:i,itemRef:h,label:E}=l;return(0,o.jsx)("span",{className:g.selectButton,"data-size":L,"data-weight":d&&s||void 0,children:(0,o.jsx)(m.b,{size:N[L],tabIndex:0,onClick:r=>{z==null||z(r),r.preventDefault(),r.stopPropagation()},onFocus:K.d,ref:h,label:E!=null?E:O(i?"groupSelectButton.reset":"groupSelectButton.select")})})},[d,s,l,L,O]);return a?(0,o.jsxs)("div",{className:g.separatorWithLabel,"data-size":L,children:[(0,o.jsx)("span",{className:g.label,"data-mode":s,children:(0,o.jsx)($.m,{variant:_==null?void 0:_.variant,text:a,maxLines:1})}),(0,o.jsxs)("div",{style:{flex:1},children:[G,d&&(0,o.jsx)(n.c,{weight:s==="primary"?"regular":"light",className:g.divider})]})]}):d?(0,o.jsx)("div",{className:g.separatorWithoutLabel,"data-size":L,children:(0,o.jsx)(n.c,{weight:"regular"})}):null}var b=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"),ae=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),J=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),H=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),X=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),ee=e.n(X),R=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),te=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css"),ie={};ie.styleTagTransform=w(),ie.setAttributes=j(),ie.insert=S().bind(null,"head"),ie.domAPI=x(),ie.insertStyleElement=k();var fe=P()(te.A,ie);const De=te.A&&te.A.locals?te.A.locals:void 0;var we=function(a,_){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&_.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(a);l<s.length;l++)_.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(a,s[l])&&(d[s[l]]=a[s[l]]);return d};function qe(a){var{children:_,expanded:d,className:s,header:l}=a,L=we(a,["children","expanded","className","header"]);return(0,o.jsxs)("div",Object.assign({className:ee()(De.accordion,s),role:"menuitem","aria-haspopup":!0,"aria-expanded":d},(0,R.z7)(L),{children:[l,(0,o.jsx)("div",{className:De.contentWrapper,"aria-hidden":!d,children:(0,o.jsx)("div",{className:De.content,"data-content":!0,children:d&&_})})]}))}var ke=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),Le=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/Checkbox.js"),ge=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/Switch.js"),Te=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css"),le={};le.styleTagTransform=w(),le.setAttributes=j(),le.insert=S().bind(null,"head"),le.domAPI=x(),le.insertStyleElement=k();var Ee=P()(Te.A,le);const Pe=Te.A&&Te.A.locals?Te.A.locals:void 0;var Oe=function(a,_){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&_.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(a);l<s.length;l++)_.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(a,s[l])&&(d[s[l]]=a[s[l]]);return d};const xe={option:1,description:2,variant:"end"};function be(a){var{truncate:_,caption:d,description:s,option:l,className:L,disabled:O}=a,G=Oe(a,["truncate","caption","description","option","className","disabled"]);const{size:z="s"}=(0,C.hg)(),i=(0,t.useMemo)(()=>Object.assign(Object.assign({},xe),_),[_]);return(0,o.jsxs)("div",Object.assign({className:ee()(Pe.content,L)},(0,R.z7)(G),{"data-size":z!=null?z:"s","data-disabled":O||void 0,children:[(0,o.jsxs)("div",{className:Pe.headline,children:[(0,o.jsx)("div",{className:Pe.label,children:(0,o.jsx)($.m,{variant:i.variant,text:String(l),maxLines:i.option,"data-test-id":"list__base-item-option"})}),d&&(0,o.jsx)("span",{className:Pe.caption,children:d})]}),s&&(0,o.jsx)("div",{className:Pe.description,children:(0,o.jsx)($.m,{text:s,maxLines:i.description,"data-test-id":"list__base-item-description"})})]}))}var yt=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),Fe=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),re=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js");const Me={s:"s",m:"s",l:"m"};var he=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css"),Ie={};Ie.styleTagTransform=w(),Ie.setAttributes=j(),Ie.insert=S().bind(null,"head"),Ie.domAPI=x(),Ie.insertStyleElement=k();var et=P()(he.A,Ie);const ce=he.A&&he.A.locals?he.A.locals:void 0;var pe=function(a,_){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&_.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(a);l<s.length;l++)_.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(a,s[l])&&(d[s[l]]=a[s[l]]);return d};function Re(a){var _,{beforeContent:d,afterContent:s,content:l,onClick:L,onMouseDown:O,id:G,expandIcon:z,disabled:i,open:h,itemRef:E,switch:r,showSwitchIcon:y,onKeyDown:W,onFocus:Q,indeterminate:je,checked:ue,onSelect:me,onOpenNestedList:Se,isParentNode:Z,className:Ce,inactive:_e,itemWrapRender:at}=a,it=pe(a,["beforeContent","afterContent","content","onClick","onMouseDown","id","expandIcon","disabled","open","itemRef","switch","showSwitchIcon","onKeyDown","onFocus","indeterminate","checked","onSelect","onOpenNestedList","isParentNode","className","inactive","itemWrapRender"]);const de=!_e,{size:Be="s",marker:ze,contentRender:We,firstItemId:Ke,focusFlattenItems:vt}=(0,C.hg)(),{level:lt=0}=(0,ke.wG)(),{closeDroplist:ft,closeDroplistOnItemClick:dt}=(0,yt.x)(),{value:$e,onChange:Ne,mode:Y,isSelectionSingle:Ve,isSelectionMultiple:Ye}=(0,ae.VG)(),Qe=Ve?ue!=null?ue:$e===G:ue!=null?ue:$e==null?void 0:$e.includes(G!=null?G:""),gt=()=>{Ne==null||Ne(G)},Pt=se=>{i||O==null||O(se)},Ae=se=>{Q==null||Q(se),se.stopPropagation()},bt=()=>{Z&&me?me():gt()},rt=se=>{i||(L==null||L(se),de&&(Z||gt()),!Ye&&dt&&ft())},ut=se=>{if(W==null||W(se),se.key==="ArrowRight"&&Se){Se(se),se.preventDefault(),se.stopPropagation();return}(se.code==="Space"||se.key==="Enter"||se.key===" ")&&(Ye&&Z&&me&&me(),!Z&&gt(),!Z&&(rt==null||rt(se)),se.stopPropagation(),se.preventDefault())},xt=se=>{Z&&se.stopPropagation()},ht=(0,R.z7)(it),_t=(0,o.jsx)("div",{className:ee()(Fe.A.itemWrapper,ce.innerWrapper,Ce),"data-inactive":_e||void 0,"data-disabled":i||void 0,"data-variant":Y||void 0,"data-checked":Z&&Qe||!Z&&Qe&&!r||void 0,children:(0,o.jsxs)("li",{"data-type":"outside",role:"menuitem","data-test-id":ht["data-test-id"]||"list__base-item_"+G,ref:E,className:ee()(Fe.A.listItem,ce.droplistItem),"data-size":Be,onClick:rt,onMouseDown:Pt,tabIndex:Ke&&G===vt[Ke].originalId?0:-1,"data-non-pointer":_e&&!L,"data-variant":Y||void 0,"data-open":h||void 0,onKeyDown:ut,onFocus:Ae,style:{"--level":lt},"data-level-one":lt===1||void 0,"data-level-more-one":lt>1||void 0,"data-checked":Z&&(je||Qe)||Qe&&!r||void 0,children:[!r&&Ve&&ze&&!Z&&de&&(0,o.jsx)("div",{className:ce.markerContainer,"data-test-id":"list__base-item-marker"}),!r&&Ye&&de&&(0,o.jsx)("div",{className:ce.checkbox,children:(0,o.jsx)(Le.S,{size:Me[Be!=null?Be:"s"],disabled:i,tabIndex:-1,onChange:Z?bt:void 0,checked:Qe,"data-test-id":"list__base-item-checkbox",onClick:xt,indeterminate:je})}),d&&(0,o.jsx)("div",{className:ce.beforeContent,children:d}),l&&(0,re.J0)(l)?(_=We==null?void 0:We({id:G,content:l,disabled:i}))!==null&&_!==void 0?_:(0,o.jsx)(be,Object.assign({disabled:i},l)):(0,o.jsxs)("div",{className:ce.content,children:[" ",l," "]}),s,r&&de&&(0,o.jsx)(ge.d,{disabled:i,checked:Qe,"data-test-id":"list__base-item-switch",showIcon:y}),!r&&z&&(0,o.jsx)("span",{className:ce.expandableIcon,children:z})]})});return at?at(_t):_t}var tt=function(a,_){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&_.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(a);l<s.length;l++)_.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(a,s[l])&&(d[s[l]]=a[s[l]]);return d};function st(a){var{id:_,disabled:d,allChildIds:s,items:l}=a,L=tt(a,["id","disabled","allChildIds","items"]);const{level:O=0}=(0,ke.wG)(),{openCollapseItems:G=[],toggleOpenCollapseItem:z}=(0,ke.om)(),{value:i,isSelectionSingle:h,isSelectionMultiple:E}=(0,ae.VG)(),{indeterminate:r,handleOnSelect:y,checked:W}=U({items:l,id:_,disabled:d,allChildIds:s}),Q=!!G.includes(_!=null?_:""),je=!!(r&&!Q&&h&&i&&s.includes(i)||E&&W),ue=(0,t.useCallback)(()=>{z==null||z(_!=null?_:"")},[_,z]),me=nt(l),Se=Z=>{var Ce;z==null||z(_!=null?_:""),(Ce=L.onClick)===null||Ce===void 0||Ce.call(L,Z)};return(0,o.jsx)(qe,{header:(0,o.jsx)(Re,Object.assign({},L,{id:_,disabled:d,expandIcon:Q?(0,o.jsx)(J.A,{}):(0,o.jsx)(H.A,{}),onClick:Se,isParentNode:!0,onOpenNestedList:ue,checked:je,indeterminate:r,onSelect:d?void 0:y})),expanded:Q,"data-test-id":`list__accordion-item-${_}`,children:(0,o.jsx)(ke.x5.Provider,{value:{level:O+1},children:me})})}function ct({label:a,truncate:_,divider:d,items:s,mode:l,id:L,itemRef:O,allChildIds:G,selectButtonLabel:z}){const{indeterminate:i,checked:h,handleOnSelect:E}=U({items:s,id:L,disabled:!1,allChildIds:G}),r=nt(s);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(q,{label:a,truncate:_,divider:d,mode:l,selectButton:{indeterminate:i,checked:h,itemRef:O,onClick:E,label:z}}),r]})}var pt=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),ot=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js"),Ue=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),Ge=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js");const ye=["right","right-start","right-end","left","left-start","left-end","bottom","top"];var kt=function(a,_){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&_.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(a);l<s.length;l++)_.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(a,s[l])&&(d[s[l]]=a[s[l]]);return d};function mt(a){var{items:_,placement:d="right-start",id:s,scroll:l,scrollRef:L,disabled:O,onSublistOpenChanged:G,allChildIds:z,loading:i=!1,focusId:h=s,untouchableScrollbars:E=!1}=a,r=kt(a,["items","placement","id","scroll","scrollRef","disabled","onSublistOpenChanged","allChildIds","loading","focusId","untouchableScrollbars"]);const{flattenItems:y,focusFlattenItems:W,virtualized:Q}=(0,C.hg)(),{value:je,isSelectionSingle:ue,isSelectionMultiple:me}=(0,ae.VG)(),{openCollapseItems:Se=[]}=(0,ke.om)(),Z=y[s],{ids:Ce,expandedIds:_e}=(0,t.useMemo)(()=>{const{ids:Y,expandedIds:Ve}=(0,re.e)({focusCloseChildIds:_,focusFlattenItems:W,openCollapseItems:Se,isSelectionMultiple:me});return{ids:Y,expandedIds:Ve.concat([s])}},[W,s,me,_,Se]),{handleListKeyDownFactory:at,activeItemId:it,forceUpdateActiveItemId:de}=(0,Ue.L)(),[Be,ze]=(0,t.useState)(),We=(0,t.useCallback)(Y=>{if(at(Ce,_e)(Y),Y.key==="ArrowLeft"){de==null||de(h),ze(!1),Y.stopPropagation();return}},[at,Ce,_e,de,h]),{indeterminate:Ke,checked:vt,handleOnSelect:lt}=U({items:(0,re.j2)(Z)?Z.items:[],id:s,disabled:O,allChildIds:z}),ft=(0,t.useCallback)(()=>(de==null||de(f.$.dropFocus),ze(!1),!0),[de]),dt=(0,t.useMemo)(()=>!!(!O&&it&&W[h].allChildIds.includes(it)),[it,O,W,h]),$e=!!(Ke&&!Be&&ue&&je&&z.includes(je)||me&&vt);(0,t.useEffect)(()=>{ze(Y=>Y&&dt)},[s,dt]);const Ne=(0,t.useRef)(null);return(0,o.jsx)(pt.m,{outsideClick:ft,fallbackPlacements:ye,content:(0,o.jsx)(Ge.Q,{onKeyDown:We,items:_,nested:!0,scroll:l,virtualized:Q,tabIndex:0,ref:Ne,onFocus:Y=>{Y.stopPropagation(),de==null||de(Ce[0])},scrollRef:L,limitedScrollHeight:!0,untouchableScrollbars:E,loading:i}),trigger:"hover",open:dt||Be,onOpenChange:Y=>{ze(Y),G==null||G(Y,s)},placement:d,widthStrategy:"auto",children:(0,o.jsx)(Re,Object.assign({},r,{disabled:O,open:Be,expandIcon:(0,o.jsx)(ot.A,{}),id:s,isParentNode:!0,indeterminate:Ke,checked:$e,onOpenNestedList:()=>{ze(!0),setTimeout(()=>{var Y;(Y=Ne.current)===null||Y===void 0||Y.focus()},0)},onSelect:lt}))})}function Je({focusCloseChildIds:a,focusFlattenItems:_,flattenItems:d,isSelectionMultiple:s}){return a?a.flatMap(l=>{const{itemRef:L,key:O,originalId:G,items:z}=_[l],i=d[G];if((0,re.X8)(i)||!s&&(0,re.$k)(i)){const h=Je({focusCloseChildIds:z,focusFlattenItems:_,flattenItems:d,isSelectionMultiple:s});return[(0,o.jsx)(q,{label:i.label,truncate:i.truncate,divider:i.divider,mode:i.mode},O+"_separator"),...h]}return(0,re.$k)(i)?(0,t.createElement)(ct,Object.assign({},i,{items:z,itemRef:L,key:O})):(0,re.qz)(i)?(0,t.createElement)(st,Object.assign({},i,{items:z,itemRef:L,key:O})):(0,re.j2)(i)?(0,t.createElement)(mt,Object.assign({},i,{focusId:l,items:z,itemRef:L,key:O})):(0,t.createElement)(Re,Object.assign({},i,{itemRef:L,key:O}))}):[null]}function nt(a){const{focusFlattenItems:_,flattenItems:d}=(0,C.hg)(),{isSelectionMultiple:s}=(0,ae.VG)();return(0,t.useMemo)(()=>Je({flattenItems:d,focusFlattenItems:_,focusCloseChildIds:a,isSelectionMultiple:s}),[d,a,_,s])}function He({footerActiveElementsRefs:a}){return(0,t.useMemo)(()=>{var _;return{searchItem:{itemRef:(0,t.createRef)(),id:f.$.search,parentId:f.$.default,items:[],allChildIds:[]},footerItems:(_=a==null?void 0:a.map((d,s)=>({id:(0,b.mr)(s),itemRef:d,parentId:f.$.default,items:[],allChildIds:[]})))!==null&&_!==void 0?_:[]}},[a])}function U({id:a,allChildIds:_}){const{value:d,setValue:s,isSelectionMultiple:l}=(0,ae.VG)(),{flattenItems:L}=(0,C.hg)(),O=(0,t.useMemo)(()=>_.filter(r=>{const y=L[r];return y&&!("type"in y)}),[_,L]),G=(0,t.useMemo)(()=>O.filter(r=>{const y=L[r];return y&&!("type"in y)&&!y.disabled}),[O,L]),z=l?d&&!!d.length&&O.every(r=>d==null?void 0:d.includes(r)):void 0,i=l?d&&!!d.length&&G.every(r=>d==null?void 0:d.includes(r)):void 0,h=l?!z&&O.some(r=>d==null?void 0:d.includes(r)):O.includes(d!=null?d:"");return{checked:z,indeterminate:h,handleOnSelect:()=>{if(z||i){s==null||s(r=>(r!=null?r:[]).filter(y=>y!==a&&!G.includes(y)));return}s==null||s(r=>Array.from(new Set([...r!=null?r:[],...G])))}}}},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"(I,v,e){e.d(v,{$k:()=>K,J0:()=>N,X8:()=>C,e:()=>S,j2:()=>$,lg:()=>F,qz:()=>c});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),f=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"),m=function(u,j){var A={};for(var k in u)Object.prototype.hasOwnProperty.call(u,k)&&j.indexOf(k)<0&&(A[k]=u[k]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,k=Object.getOwnPropertySymbols(u);T<k.length;T++)j.indexOf(k[T])<0&&Object.prototype.propertyIsEnumerable.call(u,k[T])&&(A[k[T]]=u[k[T]]);return A};function n(u){return u&&!("items"in u)}function c(u){return u&&"items"in u&&u.type==="collapse"}function $(u){return u&&"items"in u&&u.type==="next-list"}function C(u){return u&&"items"in u&&u.type==="group"}function K(u){return u&&"items"in u&&u.type==="group-select"}function N(u){return typeof u=="object"&&u.option!==void 0}const V=null,P=null,p=null,x=null;function F({items:u,prefix:j,parentId:A}){const k={},T={};function w({item:b,idx:ae,prefix:J,parentId:H=o.$.default}){var X,ee;const R=J!==void 0?(0,f.yz)(J,ae):String(ae),te=(X=C(b)?void 0:b.id)!==null&&X!==void 0?X:R;if(n(b))return k[te]=Object.assign(Object.assign({},b),{items:[],allChildIds:[],id:te}),T[R]={key:R,originalId:te,id:R,disabled:b.disabled,parentId:H,items:[],allChildIds:[],itemRef:b.itemRef||(0,t.createRef)()},{id:te,children:[te],autoId:R,focusChildren:[R]};let ie=[],fe=[];const De=[],we=[],{items:qe}=b,ke=m(b,["items"]),Le=C(b)?H!=null?H:o.$.default:R,ge=qe.filter(Ee=>!Ee.hidden);for(let Ee=0;Ee<ge.length;Ee++){const{id:Pe,children:Oe,autoId:xe,focusChildren:be}=w({item:ge[Ee],idx:Ee,prefix:te,parentId:Le});we.push(xe),De.push(Pe),ie=ie.concat(Oe),fe=fe.concat(be)}const Te=[...new Set(ie.concat(De))],le=[...new Set(fe.concat(we))];return k[te]=Object.assign(Object.assign({},ke),{id:te,items:[],allChildIds:Te}),T[R]={key:R,originalId:te,id:R,parentId:H,items:we,allChildIds:le,disabled:(b.type==="collapse"||b.type==="next-list")&&b.disabled,type:b.type,itemRef:C(b)?void 0:(ee=b.itemRef)!==null&&ee!==void 0?ee:(0,t.createRef)()},{id:te,children:Te,autoId:R,focusChildren:le}}const M=[],D=[];let B=[];const g=u.filter(b=>!b.hidden);for(let b=0;b<g.length;b++){const{id:ae,children:J,autoId:H}=w({item:g[b],idx:b,prefix:j,parentId:A});D.push(H),M.push(ae),B.push(ae),B=B.concat(J)}const q=[...new Set(B)];return{focusCloseChildIds:D,allChildIds:q,flattenItems:k,focusFlattenItems:T}}function S({focusFlattenItems:u,focusCloseChildIds:j,openCollapseItems:A,isSelectionMultiple:k}){const T=[],w=[];function M(D){D.forEach(B=>{const g=u[B];if(g.type==="group"){M(g.items);return}if(!g.disabled){if(g.type==="group-select"){k&&T.push(g.id),M(g.items);return}T.push(g.id),g.type&&(w.push(B),A.includes(g.originalId)&&M(g.items))}})}return M(j),{ids:T,expandedIds:w}}},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"(I,v,e){e.d(v,{i:()=>T});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=e.n(o),m=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),$=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),C=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),K=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),N=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),V=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),P=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),p=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),x=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),F=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),S=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),u=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),j=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),A=function(w,M){var D={};for(var B in w)Object.prototype.hasOwnProperty.call(w,B)&&M.indexOf(B)<0&&(D[B]=w[B]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,B=Object.getOwnPropertySymbols(w);g<B.length;g++)M.indexOf(B[g])<0&&Object.prototype.propertyIsEnumerable.call(w,B[g])&&(D[B[g]]=w[B[g]]);return D};const k=["top","right","bottom","left"];function T(w){var{items:M,search:D,pinBottom:B=[],pinTop:g=[],footerActiveElementsRefs:q,children:b,trigger:ae,placement:J,widthStrategy:H,triggerElemRef:X,open:ee,onOpenChange:R,collapse:te={},triggerClassName:ie,selection:fe,contentRender:De,size:we="s",marker:qe=!0,closeDroplistOnItemClick:ke=!1,className:Le,listRef:ge,untouchableScrollbars:Te=!1,virtualized:le=!1,closeOnPopstate:Ee}=w,Pe=A(w,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const Oe=(0,n.useMemo)(()=>!!D,[D]),[xe=[],be]=(0,$.I)(te),yt=(0,n.useCallback)(U=>be(a=>a!=null&&a.includes(U)?a.filter(_=>_!==U):(a!=null?a:[]).concat([U])),[be]),[Fe=!1,re]=(0,$.I)({value:ee,defaultValue:!1,onChange:R}),{searchItem:Me,footerItems:he}=(0,K.nG)({footerActiveElementsRefs:q}),Ie=(0,n.useMemo)(()=>{const U=(0,N.lg)({items:g,prefix:C.$.pinTop,parentId:C.$.default}),a=(0,N.lg)({items:M,prefix:C.$.default,parentId:C.$.default}),_=(0,N.lg)({items:B,prefix:C.$.pinBottom,parentId:C.$.default}),d=Object.assign(Object.assign(Object.assign({},U.flattenItems),_.flattenItems),a.flattenItems),s=Object.assign(Object.assign(Object.assign({},U.focusFlattenItems),_.focusFlattenItems),a.focusFlattenItems);return[...he,Me].forEach(l=>{d[l.id]=l,s[l.id]=Object.assign(Object.assign({},l),{originalId:l.id,items:[],key:l.id,allChildIds:[]})}),{items:a,pinTop:U,pinBottom:_,flattenItems:d,focusFlattenItems:s}},[M,g,B,Me,he]),{flattenItems:et,focusFlattenItems:ce}=Ie,pe=A(Ie,["flattenItems","focusFlattenItems"]),{ids:Re,expandedIds:tt}=(0,n.useMemo)(()=>{const{pinTop:U,items:a,pinBottom:_}=pe;let d=[],s=[];return Oe&&d.push(Me.id),[U,a,_].forEach(({focusFlattenItems:l,focusCloseChildIds:L})=>{const O=(0,N.e)({focusFlattenItems:l,focusCloseChildIds:L,openCollapseItems:xe,isSelectionMultiple:(fe==null?void 0:fe.mode)==="multiple"});d=d.concat(O.ids),s=s.concat(O.expandedIds)}),he.forEach(l=>{d.push(l.id)}),{ids:d,expandedIds:s}},[he,Oe,pe,xe,Me.id,fe==null?void 0:fe.mode]),st=(0,n.useRef)(null),ct=(0,n.useRef)(null),pt=Re[0],{handleListKeyDownFactory:ot,resetActiveItemId:Ue,activeItemId:Ge,forceUpdateActiveItemId:ye}=(0,S.d)({mainRef:X!=null?X:st,focusFlattenItems:ce,hasListInFocusChain:!0,firstItemId:pt}),kt=(0,n.useCallback)(U=>ot(Re,tt)(U),[ot,Re,tt]),mt=(0,n.useCallback)(U=>{Ue(),re(U)},[Ue,re]),Je=(0,n.useCallback)((U,a)=>{U.key==="ArrowDown"&&(U.preventDefault(),re(!0),setTimeout(()=>{var _;Ue(),(_=ct.current)===null||_===void 0||_.focus()},0)),U.key==="ArrowUp"&&re(!1),a==null||a(U)},[Ue,re]),nt=(0,n.useMemo)(()=>(0,n.isValidElement)(b),[b]),He=(0,n.useMemo)(()=>{if((0,n.isValidElement)(b)){const U=typeof b.props=="object"?b.props:{};return(0,n.cloneElement)(b,Object.assign(Object.assign({},U),{onKeyDown:a=>{var _;Je(a,(_=b.props)===null||_===void 0?void 0:_.onKeyDown)}}))}return typeof b=="function"?b({onKeyDown:Je}):b},[Je,b]);return(0,t.jsx)(p.Tr,{flattenItems:et,focusFlattenItems:ce,contentRender:De,size:we,marker:qe,firstItemId:pt,virtualized:le,children:(0,t.jsx)(V.WM,Object.assign({},fe,{children:(0,t.jsx)(P.bN.Provider,{value:{openCollapseItems:xe,toggleOpenCollapseItem:yt},children:(0,t.jsx)(x.m.Provider,{value:{activeItemId:Ge,handleListKeyDownFactory:ot,forceUpdateActiveItemId:ye},children:(0,t.jsx)(F.K.Provider,{value:{closeDroplistOnItemClick:ke,closeDroplist:()=>{var U;re(!1),Ue(),(U=(X!=null?X:st).current)===null||U===void 0||U.focus()}},children:(0,t.jsx)(c.m,{content:(0,t.jsx)("div",{className:f()(j.A.wrapper,Le),children:(0,t.jsx)(u.Q,Object.assign({},Pe,{items:pe.items.focusCloseChildIds,pinTop:pe.pinTop.focusCloseChildIds,pinBottom:pe.pinBottom.focusCloseChildIds,virtualized:le,onKeyDown:kt,searchItem:Me,tabIndex:0,ref:(0,m.A)(ct,ge),search:D,onFocus:U=>{U.stopPropagation(),ye==null||ye(Re[0])},limitedScrollHeight:!0,untouchableScrollbars:Te}))}),outsideClick:!0,triggerClassName:ie,fallbackPlacements:k,trigger:ae,placement:J,widthStrategy:H,triggerRef:X?nt&&X||void 0:st,open:Fe,onOpenChange:mt,closeOnPopstate:Ee,children:He})})})})}))})}},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"(I,v,e){e.d(v,{Q:()=>z});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/@tanstack+react-virtual@3.11.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@tanstack/react-virtual/dist/esm/index.js"),f=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(f),n=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),$=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),C=e("./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),K=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),N=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js"),V=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),P=e("./node_modules/.pnpm/@snack-uikit+locale@0.16.0/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js");function p({noDataState:i,noResultsState:h,errorDataState:E}){const{t:r}=(0,P.Ym)("List");return(0,c.useMemo)(()=>{const y=Object.assign({icon:{icon:N.A,appearance:"neutral",decor:!0},description:r("noData.description")},i),W=Object.assign({description:r("noResults.description")},h),Q=Object.assign({icon:{icon:V.A,appearance:"neutral",decor:!0},description:r("errorData.description")},E);return{noDataState:y,noResultsState:W,errorDataState:Q}},[E,i,h,r])}var x=e("./node_modules/.pnpm/@snack-uikit+button@0.19.19_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js"),F=e("./node_modules/.pnpm/@snack-uikit+button@0.19.19_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/ButtonTonal.js");const S={S:"s",M:"m",L:"l"},u={Vertical:"vertical",Horizontal:"horizontal"},j={icon:"info-block__icon",title:"info-block__title",description:"info-block__description",footer:"info-block__footer",primaryButton:"info-block__primary-button",secondaryButton:"info-block__secondary-button"},A=(0,c.createContext)({size:S.S});function k(){return(0,c.useContext)(A)}var T=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.14_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function w({Button:i,tooltip:h}){return h?function(r){return(0,t.jsx)(T.m,Object.assign({},h,{children:(0,t.jsx)(i,Object.assign({},r))}))}:i}var M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(M),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),g=e.n(B),q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),b=e.n(q),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),J=e.n(ae),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),X=e.n(H),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n(ee),te=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.42_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"),ie={};ie.styleTagTransform=R(),ie.setAttributes=J(),ie.insert=b().bind(null,"head"),ie.domAPI=g(),ie.insertStyleElement=X();var fe=D()(te.A,ie);const De=te.A&&te.A.locals?te.A.locals:void 0;function we({primaryButton:i,secondaryButton:h,className:E}){const r=w({Button:x.L,tooltip:i.tooltip}),y=w({Button:F.L,tooltip:h==null?void 0:h.tooltip}),{size:W}=k();return(0,t.jsxs)("div",{className:m()(De.infoBlockFooter,E),children:[h&&(0,t.jsx)(y,Object.assign({},h,{size:W,"data-test-id":h["data-test-id"]||j.secondaryButton})),(0,t.jsx)(r,Object.assign({},i,{size:W,"data-test-id":i["data-test-id"]||j.primaryButton}))]})}var qe=e("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.12_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),ke=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.13_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),Le=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.42_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"),ge={};ge.styleTagTransform=R(),ge.setAttributes=J(),ge.insert=b().bind(null,"head"),ge.domAPI=g(),ge.insertStyleElement=X();var Te=D()(Le.A,ge);const le=Le.A&&Le.A.locals?Le.A.locals:void 0;var Ee=function(i,h){var E={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&h.indexOf(r)<0&&(E[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,r=Object.getOwnPropertySymbols(i);y<r.length;y++)h.indexOf(r[y])<0&&Object.prototype.propertyIsEnumerable.call(i,r[y])&&(E[r[y]]=i[r[y]]);return E};function Pe(i){var h,E,{title:r,description:y,icon:W,size:Q=S.S,footer:je,align:ue=u.Vertical,className:me}=i,Se=Ee(i,["title","description","icon","size","footer","align","className"]);return(0,t.jsx)(A.Provider,{value:{size:Q},children:(0,t.jsxs)("div",Object.assign({className:m()(le.infoBlock,me),"data-size":Q,"data-align":ue},(0,K.z7)(Se),{children:[W&&(0,t.jsx)(qe.I,{icon:W.icon,appearance:(h=W.appearance)!==null&&h!==void 0?h:"primary",decor:(E=W.decor)!==null&&E!==void 0?E:!0,size:Q,"data-test-id":j.icon}),(0,t.jsxs)("div",{className:le.contentLayout,children:[(0,t.jsxs)("div",{className:le.textWrap,children:[r&&(0,t.jsx)(ke.o,{family:"sans",purpose:"title",size:Q,className:le.title,"data-test-id":j.title,children:r}),y&&(0,t.jsx)(ke.o,{family:"sans",purpose:"body",size:Q,className:le.description,"data-test-id":j.description,children:y})]}),je&&(0,t.jsx)("div",{className:le.footer,"data-test-id":j.footer,children:je})]})]}))})}const Oe=Pe;Oe.Footer=we;var xe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css"),be={};be.styleTagTransform=R(),be.setAttributes=J(),be.insert=b().bind(null,"head"),be.domAPI=g(),be.insertStyleElement=X();var yt=D()(xe.A,be);const Fe=xe.A&&xe.A.locals?xe.A.locals:void 0;function re({dataError:i,dataFiltered:h,hasNoItems:E,emptyStates:r,loading:y,size:W}){return y?null:i?(0,t.jsx)("div",{className:Fe.listEmptyStateWrapper,children:(0,t.jsx)(Oe,Object.assign({},r.errorDataState,{size:W,align:"vertical"}))}):h&&E?(0,t.jsx)("div",{className:Fe.listEmptyStateWrapper,children:(0,t.jsx)(Oe,Object.assign({},r.noResultsState,{size:W,align:"vertical","data-test-id":"list__no-results"}))}):!h&&E?(0,t.jsx)("div",{className:Fe.listEmptyStateWrapper,children:(0,t.jsx)(Oe,Object.assign({},r.noDataState,{size:W,align:"vertical","data-test-id":"list__no-data"}))}):null}var Me=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),he=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),Ie=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.12_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),et=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),ce=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css"),pe={};pe.styleTagTransform=R(),pe.setAttributes=J(),pe.insert=b().bind(null,"head"),pe.domAPI=g(),pe.insertStyleElement=X();var Re=D()(ce.A,pe);const tt=ce.A&&ce.A.locals?ce.A.locals:void 0;function st({children:i}){const{size:h="s"}=(0,et.hg)();return i?(0,t.jsxs)("div",{className:m()(tt.pinTopItem),"data-size":h,"data-test-id":"list__pin-top-group-item",children:[(0,t.jsx)("div",{children:i}),(0,t.jsx)(Ie.c,{weight:"regular"})]}):null}function ct({children:i}){const{size:h="s"}=(0,et.hg)();return i?(0,t.jsxs)("div",{className:m()(tt.pinBottomItem),"data-size":h,"data-test-id":"list__pin-bottom-group-item",children:[(0,t.jsx)(Ie.c,{weight:"regular"}),(0,t.jsx)("div",{children:i})]}):null}var pt=e("./node_modules/.pnpm/@snack-uikit+search-private@0.4.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/SearchPrivate.js"),ot=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),Ue=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),Ge=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css"),ye={};ye.styleTagTransform=R(),ye.setAttributes=J(),ye.insert=b().bind(null,"head"),ye.domAPI=g(),ye.insertStyleElement=X();var kt=D()(Ge.A,ye);const mt=Ge.A&&Ge.A.locals?Ge.A.locals:void 0;function Je({search:i,itemRef:h}){const{size:E="s",firstItemId:r}=(0,et.hg)(),y=W=>{var Q;["ArrowDown","ArrowUp"].includes(W.key)&&W.preventDefault(),(Q=i==null?void 0:i.onKeyDown)===null||Q===void 0||Q.call(i,W)};return i?(0,t.jsx)("div",{className:m()(Ue.A.listItem,mt.searchItem),"data-size":E,"data-test-id":"list__search-item",children:(0,t.jsx)(pt.s,Object.assign({size:E,tabIndex:ot.$.search===r?0:-1,onKeyDown:y,onFocus:Me.d},i,{ref:h}))}):null}var nt=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),He=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css");const d={m:40,s:32,l:48};var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css"),l={};l.styleTagTransform=R(),l.setAttributes=J(),l.insert=b().bind(null,"head"),l.domAPI=g(),l.insertStyleElement=X();var L=D()(s.A,l);const O=s.A&&s.A.locals?s.A.locals:void 0;var G=function(i,h){var E={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&h.indexOf(r)<0&&(E[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,r=Object.getOwnPropertySymbols(i);y<r.length;y++)h.indexOf(r[y])<0&&Object.prototype.propertyIsEnumerable.call(i,r[y])&&(E[r[y]]=i[r[y]]);return E};const z=(0,c.forwardRef)((i,h)=>{var E,{items:r,pinTop:y,pinBottom:W,onKeyDown:Q,onBlur:je,onFocus:ue,tabIndex:me,active:Se,scroll:Z,nested:Ce,search:_e,searchItem:at,scrollRef:it,scrollContainerRef:de,onScroll:Be,footer:ze,loading:We,limitedScrollHeight:Ke,untouchableScrollbars:vt,className:lt,noDataState:ft,noResultsState:dt,errorDataState:$e,dataError:Ne,dataFiltered:Y,scrollToSelectedItem:Ve=!1,virtualized:Ye=!1,scrollContainerClassName:Qe,barHideStrategy:gt="never"}=i,Pt=G(i,["items","pinTop","pinBottom","onKeyDown","onBlur","onFocus","tabIndex","active","scroll","nested","search","searchItem","scrollRef","scrollContainerRef","onScroll","footer","loading","limitedScrollHeight","untouchableScrollbars","className","noDataState","noResultsState","errorDataState","dataError","dataFiltered","scrollToSelectedItem","virtualized","scrollContainerClassName","barHideStrategy"]);const{size:Ae="s",flattenItems:bt,focusFlattenItems:rt}=(0,et.hg)(),{value:ut,isSelectionSingle:xt}=(0,nt.VG)(),ht=(0,c.useRef)(null),_t=(0,he.We)(r),se=(0,he.We)(y),zt=(0,he.We)(W),[Xe,Ot]=(0,c.useState)({virtualizer:null,browser:null,measured:!1}),Ct=p({noDataState:ft,noResultsState:dt,errorDataState:$e}),It=r.length===0,{selectedItemIndex:jt,selectedItem:oe}=(0,c.useMemo)(()=>{const ne={selectedItemIndex:-1,selectedItem:void 0};if(!Ve||!ut)return ne;const ve=xt?bt[ut]:bt[ut[0]];if(!(ve!=null&&ve.id))return ne;const Et=Object.values(rt),St=Et.findIndex(wt=>wt.originalId===ve.id);return St<0?ne:{selectedItemIndex:St,selectedItem:Et[St]}},[bt,rt,xt,Ve,ut]),Ze=(0,o.Te)({count:_t.length,getScrollElement:()=>Z?ht.current:null,estimateSize:()=>d[Ae],enabled:Ye,overscan:5}),At=Ze.getVirtualItems();(0,c.useEffect)(()=>{Xe.measured||(Ze.measure(),Ot(ne=>Object.assign(Object.assign({},ne),{measured:!0})))},[Xe.measured,Ze]);const Dt=Z&&Ve&&Ye;(0,c.useEffect)(()=>{var ne;if(Dt){if(!Xe.measured||jt<0||!oe||Xe.virtualizer===oe.originalId||oe!=null&&oe.itemRef&&(!((ne=ht.current)===null||ne===void 0)&&ne.contains(oe==null?void 0:oe.itemRef.current)))return;Ze.scrollToIndex(jt,{align:"center"}),Ot(ve=>Object.assign(Object.assign({},ve),{virtualizer:oe.originalId}))}},[Dt,Xe,oe,jt,Ze]);const Lt=!!(!((E=oe==null?void 0:oe.itemRef)===null||E===void 0)&&E.current);(0,c.useEffect)(()=>{var ne,ve;oe&&Xe.virtualizer!==null&&Lt&&Xe.virtualizer!==Xe.browser&&((ve=(ne=oe.itemRef)===null||ne===void 0?void 0:ne.current)===null||ve===void 0||ve.scrollIntoView({block:"center"}),Ot(Et=>Object.assign(Object.assign({},Et),{browser:oe.originalId})))},[Xe,oe,Lt,jt]);const Tt=(0,c.useMemo)(()=>We&&(0,t.jsx)("div",{role:"spinbutton",tabIndex:-1,className:O.loader,"data-size":Ae,"data-no-items":It||void 0,"data-test-id":"list__loader",children:(0,t.jsx)($.y,{size:Ae==="l"?"s":"xs"})}),[It,We,Ae]),Mt=(0,c.useMemo)(()=>(0,t.jsxs)(t.Fragment,{children:[Ye?(0,t.jsx)("div",{className:O.virtualizedContainer,style:{height:Ze.getTotalSize()},tabIndex:-1,children:At.map(ne=>(0,t.jsx)("div",{"data-index":ne.index,ref:Ze.measureElement,tabIndex:-1,className:O.virtualizedPositionBox,style:{transform:`translateY(${ne.start}px)`},children:_t[ne.index]},ne.key))}):_t,Tt,(0,t.jsx)(re,{loading:We,dataError:Ne,emptyStates:Ct,hasNoItems:It,dataFiltered:Y!=null?Y:!!(_e!=null&&_e.value),size:Ae})]}),[Ne,Y,Ct,It,_t,We,Tt,_e==null?void 0:_e.value,Ae,At,Ye,Ze]),Wt=(0,c.useCallback)(()=>{var ne,ve;oe&&((ve=(ne=oe==null?void 0:oe.itemRef)===null||ne===void 0?void 0:ne.current)===null||ve===void 0||ve.scrollIntoView({block:"center"}))},[oe]),Bt=(0,t.jsxs)("ul",Object.assign({className:m()(He.A.listContainer,lt),ref:h,onKeyDown:Q,tabIndex:me,onFocus:ue,onBlur:je,"data-active":Se||void 0,role:"menu"},(0,K.z7)(Pt),{children:[(Number(y==null?void 0:y.length)>0||_e)&&(0,t.jsxs)(st,{children:[_e&&(0,t.jsx)(Je,Object.assign({search:_e},at)),Number(y==null?void 0:y.length)>0&&se]}),Z?(0,t.jsxs)(C.O,{className:m()({[He.A.scrollContainerS]:Z&&Ke&&Ae==="s",[He.A.scrollContainerM]:Z&&Ke&&Ae==="m",[He.A.scrollContainerL]:Z&&Ke&&Ae==="l"},Qe),barHideStrategy:gt,size:"s",ref:(0,n.A)(ht,de),untouchableScrollbars:vt,onScroll:Be,onInitialized:Wt,children:[Mt,(0,t.jsx)("div",{className:O.scrollStub,ref:it})]}):(0,t.jsx)(t.Fragment,{children:Mt}),Number(W==null?void 0:W.length)>0&&(0,t.jsx)(ct,{children:zt}),ze&&(0,t.jsx)("div",{className:O.footer,onFocus:Me.d,children:ze})]}));return Ce?(0,t.jsx)("li",{style:{listStyleType:"none"},role:"menuitem",children:Bt}):Bt})},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"(I,v,e){e.d(v,{bN:()=>m,om:()=>n,wG:()=>f,x5:()=>o});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o=(0,t.createContext)({}),f=()=>(0,t.useContext)(o),m=(0,t.createContext)({}),n=()=>(0,t.useContext)(m)},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"(I,v,e){e.d(v,{L:()=>f,m:()=>o});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o=(0,t.createContext)({handleListKeyDownFactory:()=>()=>{}}),f=()=>(0,t.useContext)(o)},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"(I,v,e){e.d(v,{Tr:()=>C,hg:()=>c});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),m=function(K,N){var V={};for(var P in K)Object.prototype.hasOwnProperty.call(K,P)&&N.indexOf(P)<0&&(V[P]=K[P]);if(K!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,P=Object.getOwnPropertySymbols(K);p<P.length;p++)N.indexOf(P[p])<0&&Object.prototype.propertyIsEnumerable.call(K,P[p])&&(V[P[p]]=K[P[p]]);return V};const n=(0,o.createContext)({flattenItems:{},focusFlattenItems:{},firstItemId:f.$.default});function c(){return(0,o.useContext)(n)}function $({size:K,marker:N,flattenItems:V,focusFlattenItems:P,contentRender:p,firstItemId:x,virtualized:F}){return{size:K,marker:N,contentRender:p,flattenItems:V,focusFlattenItems:P,firstItemId:x,virtualized:F}}function C(K){var{children:N}=K,V=m(K,["children"]);return(0,t.jsx)(n.Provider,{value:$(V),children:N})}},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"(I,v,e){e.d(v,{K:()=>o,x:()=>f});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o=(0,t.createContext)({closeDroplist:()=>{},closeDroplistOnItemClick:!1}),f=()=>(0,t.useContext)(o)},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"(I,v,e){e.d(v,{VG:()=>P,WM:()=>V});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),m=function(p,x){var F={};for(var S in p)Object.prototype.hasOwnProperty.call(p,S)&&x.indexOf(S)<0&&(F[S]=p[S]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,S=Object.getOwnPropertySymbols(p);u<S.length;u++)x.indexOf(S[u])<0&&Object.prototype.propertyIsEnumerable.call(p,S[u])&&(F[S[u]]=p[S[u]]);return F};const n=(0,o.createContext)({value:void 0,onChange:void 0,mode:void 0});function c(p){return"mode"in p&&p.mode==="multiple"}function $(p){return"mode"in p&&p.mode==="single"}function C({children:p}){return(0,t.jsx)(n.Provider,{value:{mode:"none"},children:p})}function K({value:p,defaultValue:x,onChange:F,children:S}){const[u,j]=(0,f.I)({value:p,defaultValue:x,onChange:F}),A=(0,o.useCallback)(k=>j(T=>{if(k!==T)return k}),[j]);return(0,t.jsx)(n.Provider,{value:{value:u,onChange:A,mode:"single",isSelectionSingle:!0,isSelectionMultiple:!1,setValue:j},children:S})}function N({value:p,defaultValue:x,onChange:F,children:S}){const[u,j]=(0,f.I)({value:p,defaultValue:x,onChange:F}),A=(0,o.useCallback)(k=>{j(T=>{if(Array.isArray(T))return T.includes(k)?T.filter(w=>w!==k):T.concat(k);if(T===void 0)return Array.isArray(k)?k:[k]})},[j]);return(0,t.jsx)(n.Provider,{value:{value:u,onChange:A,mode:"multiple",isSelectionSingle:!1,isSelectionMultiple:!0,setValue:j},children:S})}function V(p){var{children:x}=p,F=m(p,["children"]);return $(F)?(0,t.jsx)(K,Object.assign({},F,{children:x})):c(F)?(0,t.jsx)(N,Object.assign({},F,{children:x})):(0,t.jsx)(C,{children:x})}function P(){return(0,o.useContext)(n)}},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"(I,v,e){e.d(v,{d:()=>f});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js");function f({mainRef:m,btnRef:n,focusFlattenItems:c,keyboardNavigationRef:$,hasListInFocusChain:C,firstItemId:K}){const N=C?void 0:K,[V,P]=(0,t.useState)(()=>N),p=(0,t.useRef)(N),x=(0,t.useCallback)(()=>{P(N),p.current=N},[N]),F=(0,t.useCallback)((u,j)=>A=>{var k,T,w,M,D,B,g,q,b,ae;switch(A.key){case"ArrowDown":{if(p.current!==void 0){const J=u.findIndex(R=>R===p.current),H=Math.min(J+1,u.length-1),X=u[H],ee=c[X];p.current=X,P(X),ee.type!=="group"&&((T=(k=ee.itemRef)===null||k===void 0?void 0:k.current)===null||T===void 0||T.focus())}else{const J=u[0],H=c[J];p.current=J,P(J),H.type!=="group"&&((M=(w=H.itemRef)===null||w===void 0?void 0:w.current)===null||M===void 0||M.focus())}A.stopPropagation(),A.preventDefault();return}case"ArrowUp":{if(u[0]===p.current)C&&c[u[0]].parentId===o.$.default&&(p.current=void 0,P(void 0),(D=m==null?void 0:m.current)===null||D===void 0||D.focus());else if(p.current!==void 0){const J=u.findIndex(R=>R===p.current),H=Math.max(J-1,0),X=u[H],ee=c[X];p.current=X,P(X),ee.type!=="group"&&((g=(B=ee.itemRef)===null||B===void 0?void 0:B.current)===null||g===void 0||g.focus())}A.stopPropagation(),A.preventDefault();return}case"ArrowRight":{if(p.current!==void 0&&j.includes(p.current)){const H=c[p.current].items[0],X=c[H];p.current=H,P(H),setTimeout(()=>{var ee,R;return(R=(ee=X.itemRef)===null||ee===void 0?void 0:ee.current)===null||R===void 0?void 0:R.focus()},0),A.stopPropagation(),A.preventDefault()}return}case"Tab":{p.current!==void 0?C?(A.preventDefault(),A.stopPropagation(),p.current=void 0,P(void 0),(q=m==null?void 0:m.current)===null||q===void 0||q.focus()):x():n&&!A.shiftKey?(b=n==null?void 0:n.current)===null||b===void 0||b.focus():(ae=m==null?void 0:m.current)===null||ae===void 0||ae.focus();return}default:return}},[c,C,m,x,n]),S=(0,t.useCallback)(u=>{var j,A;P(u),p.current=u;const k=c[u];(A=(j=k==null?void 0:k.itemRef)===null||j===void 0?void 0:j.current)===null||A===void 0||A.focus()},[c]);return(0,t.useImperativeHandle)($,()=>({focusItem:S}),[S]),{resetActiveItemId:x,activeItemId:V,forceUpdateActiveItemId:S,handleListKeyDownFactory:F}}},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"(I,v,e){e.d(v,{$:()=>t});const t={default:"~main",pinTop:"~pinTop",pinBottom:"~pinBottom",footer:"~footer",search:"~search",dropFocus:"~dropFocus"}},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"(I,v,e){e.d(v,{mr:()=>f,yz:()=>m});var t,o=e("./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js");const f=c=>`${o.$.footer}__${c}`,m=(c,$)=>[c,$].join("-"),n=c=>m(t.default,c)},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"(I,v,e){e.d(v,{d:()=>t});const t=o=>{o.stopPropagation()}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.dropdownContainer--JwH3H{
  padding-top:var(--space-drop-list-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-container-vertical-padding, 4px);
  border-radius:var(--radius-drop-list-container, 4px);
  overflow:hidden;
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  box-shadow:var(--box-shadow-elevation-level3, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 8px 16px 0px rgba(0, 0, 0, 0.0784313725));
}

.defaultTriggerClassName--Pz4wE{
  --offset:var(--space-drop-list-drop-offset, 4px);
}`,""]),n.locals={dropdownContainer:"dropdownContainer--JwH3H",defaultTriggerClassName:"defaultTriggerClassName--Pz4wE"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.42_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.infoBlockFooter--O5oJp{
  gap:var(--space-info-block-footer-gap, 8px);
  display:flex;
  align-items:center;
}`,""]),n.locals={infoBlockFooter:"infoBlockFooter--O5oJp"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.42_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.contentLayout--ckm5c{
  display:flex;
  flex-direction:column;
}

.textWrap--MHLKg{
  display:flex;
  flex-direction:column;
}

.footer--dmcij{
  position:relative;
  box-sizing:border-box;
  width:100%;
}

.title--D4TXQ{
  color:var(--sys-neutral-text-main, #41424e);
}

.description--URLGV{
  color:var(--sys-neutral-text-support, #6d707f);
}

.infoBlock--ectt9{
  display:flex;
  box-sizing:border-box;
}
.infoBlock--ectt9[data-align=vertical]{
  flex-direction:column;
  align-items:center;
}
.infoBlock--ectt9[data-align=vertical] .contentLayout--ckm5c{
  align-items:center;
}
.infoBlock--ectt9[data-align=vertical] .textWrap--MHLKg{
  align-items:center;
}
.infoBlock--ectt9[data-align=vertical] .footer--dmcij{
  width:auto;
  text-align:center;
}
.infoBlock--ectt9[data-align=vertical] .description--URLGV,
.infoBlock--ectt9[data-align=vertical] .title--D4TXQ{
  text-align:center;
}
.infoBlock--ectt9[data-align=horizontal]{
  flex-direction:row;
  align-items:flex-start;
}
.infoBlock--ectt9[data-size=s]{
  gap:var(--space-info-block-s-container-gap, 12px);
}
.infoBlock--ectt9[data-size=s] .contentLayout--ckm5c{
  gap:var(--space-info-block-s-container-content-layout-gap, 16px);
}
.infoBlock--ectt9[data-size=s] .textWrap--MHLKg{
  gap:var(--space-info-block-s-container-content-layout-text-wrap-gap, 4px);
}
.infoBlock--ectt9[data-size=m]{
  gap:var(--space-info-block-m-container-gap, 16px);
}
.infoBlock--ectt9[data-size=m] .contentLayout--ckm5c{
  gap:var(--space-info-block-m-container-content-layout-gap, 24px);
}
.infoBlock--ectt9[data-size=m] .textWrap--MHLKg{
  gap:var(--space-info-block-m-container-content-layout-text-wrap-gap, 8px);
}
.infoBlock--ectt9[data-size=l]{
  gap:var(--space-info-block-l-container-gap, 24px);
}
.infoBlock--ectt9[data-size=l] .contentLayout--ckm5c{
  gap:var(--space-info-block-l-container-content-layout-gap, 24px);
}
.infoBlock--ectt9[data-size=l] .textWrap--MHLKg{
  gap:var(--space-info-block-l-container-content-layout-text-wrap-gap, 8px);
}`,""]),n.locals={contentLayout:"contentLayout--ckm5c",textWrap:"textWrap--MHLKg",footer:"footer--dmcij",title:"title--D4TXQ",description:"description--URLGV",infoBlock:"infoBlock--ectt9"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.checkbox--xZsbw{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--dimension-3m, 24px);
  height:var(--dimension-3m, 24px);
}

.beforeContent--J0Tfz{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.beforeContent--J0Tfz svg{
  max-width:100%;
  max-height:100%;
}

.expandableIcon--EmraG{
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  fill:currentColor;
}

.markerContainer--XdwMF{
  padding-top:var(--space-drop-list-item-marker-container-vertical-padding, 2px);
  padding-bottom:var(--space-drop-list-item-marker-container-vertical-padding, 2px);
  pointer-events:none;
  position:absolute;
  top:0;
  left:0;
  box-sizing:border-box;
  height:100%;
}
.markerContainer--XdwMF:before{
  width:var(--size-drop-list-item-marker, 4px);
  border-bottom-right-radius:var(--radius-drop-list-marker, 4px);
  border-top-right-radius:var(--radius-drop-list-marker, 4px);
  content:"";
  display:block;
  height:100%;
}

.droplistItem--gcP1z{
  width:100%;
}
.droplistItem--gcP1z[data-size=s][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px));
}
.droplistItem--gcP1z[data-size=s][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-s, 24px));
}
.droplistItem--gcP1z[data-size=s] .headline--tUKoi{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--gcP1z[data-size=m][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px));
}
.droplistItem--gcP1z[data-size=m][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-m, 24px));
}
.droplistItem--gcP1z[data-size=m] .headline--tUKoi{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--gcP1z[data-size=l][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px));
}
.droplistItem--gcP1z[data-size=l][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-l, 24px));
}
.droplistItem--gcP1z[data-size=l] .headline--tUKoi{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--gcP1z[data-non-pointer]{
  cursor:inherit;
}

.innerWrapper--UPGfa[data-disabled] .expandableIcon--EmraG{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.innerWrapper--UPGfa[data-disabled] .beforeContent--J0Tfz{
  opacity:var(--opacity-a064, 0.64);
}
.innerWrapper--UPGfa[data-disabled] .droplistItem--gcP1z{
  cursor:not-allowed;
}
.innerWrapper--UPGfa[data-has-checked][data-variant=single]::before, .innerWrapper--UPGfa[data-checked][data-variant=single]::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--UPGfa[data-has-checked][data-variant=single]:hover::before, .innerWrapper--UPGfa[data-checked][data-variant=single]:hover::before{
  opacity:var(--opacity-a016, 0.16);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--UPGfa[data-has-checked] .markerContainer--XdwMF:before, .innerWrapper--UPGfa[data-checked] .markerContainer--XdwMF:before{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--UPGfa[data-has-checked] .droplistItem--gcP1z:focus-visible[data-variant=single], .innerWrapper--UPGfa[data-checked] .droplistItem--gcP1z:focus-visible[data-variant=single]{
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--UPGfa[data-has-checked][data-disabled] .markerContainer--XdwMF:before, .innerWrapper--UPGfa[data-checked][data-disabled] .markerContainer--XdwMF:before{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}

.content--BtgbT{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}`,""]),n.locals={checkbox:"checkbox--xZsbw",beforeContent:"beforeContent--J0Tfz",expandableIcon:"expandableIcon--EmraG",markerContainer:"markerContainer--XdwMF",droplistItem:"droplistItem--gcP1z",headline:"headline--tUKoi",innerWrapper:"innerWrapper--UPGfa",content:"content--BtgbT"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.pinTopItem--CSGUg[data-size=s]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--CSGUg[data-size=m]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--CSGUg[data-size=l]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--CSGUg{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinTopItem--CSGUg li,
.pinTopItem--CSGUg ul{
  list-style-type:none;
}

.pinBottomItem--fyvyn[data-size=s]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--fyvyn[data-size=m]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--fyvyn[data-size=l]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--fyvyn{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinBottomItem--fyvyn li,
.pinBottomItem--fyvyn ul{
  list-style-type:none;
}`,""]),n.locals={pinTopItem:"pinTopItem--CSGUg",pinBottomItem:"pinBottomItem--fyvyn"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.searchItem--n2XXQ{
  width:100%;
}
.searchItem--n2XXQ:focus-within, .searchItem--n2XXQ:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  max-width:100%;
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}`,""]),n.locals={searchItem:"searchItem--n2XXQ"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.itemWrapper--v8mTX{
  position:relative;
  min-width:100%;
  margin:0;
  padding:0;
}
.itemWrapper--v8mTX::before, .itemWrapper--v8mTX::after{
  pointer-events:none;
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:transparent;
}
.itemWrapper--v8mTX[data-disabled], .itemWrapper--v8mTX:disabled{
  cursor:not-allowed;
  background-color:transparent;
  outline:none;
}
.itemWrapper--v8mTX[data-disabled]::before, .itemWrapper--v8mTX:disabled::before{
  display:none;
}
.itemWrapper--v8mTX[data-disabled]::after, .itemWrapper--v8mTX:disabled::after{
  cursor:not-allowed;
  background-color:transparent;
}
.itemWrapper--v8mTX:not([data-inactive], [data-disabled])[data-open]::before, .itemWrapper--v8mTX:not([data-inactive], [data-disabled])[data-focused]::before, .itemWrapper--v8mTX:not([data-inactive], [data-disabled]):focus-visible::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
@media (hover: hover){
  .itemWrapper--v8mTX:not([data-inactive], [data-disabled]):hover::before{
    opacity:var(--opacity-a008, 0.08);
    background-color:var(--sys-neutral-accent-default, #787b8a);
  }
}

.listItem--_YPhn{
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
.listItem--_YPhn[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
}
.listItem--_YPhn[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-bottom:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
}
.listItem--_YPhn[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-bottom:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
}
.listItem--_YPhn:not([data-inactive], [data-disabled])[data-focused], .listItem--_YPhn:not([data-inactive], [data-disabled]):focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
}`,""]),n.locals={itemWrapper:"itemWrapper--v8mTX",listItem:"listItem--_YPhn"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.loader--_NGT0{
  display:flex;
  align-items:center;
  justify-content:center;
}
.loader--_NGT0[data-size=s]{
  height:var(--dimension-3m, 24px);
}
.loader--_NGT0[data-size=s][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-3m, 24px));
  height:calc(3 * var(--dimension-3m, 24px));
}
.loader--_NGT0[data-size=m]{
  height:var(--dimension-4m, 32px);
}
.loader--_NGT0[data-size=m][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-4m, 32px));
  height:calc(3 * var(--dimension-4m, 32px));
}
.loader--_NGT0[data-size=l]{
  height:var(--dimension-5m, 40px);
}
.loader--_NGT0[data-size=l][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-5m, 40px));
  height:calc(3 * var(--dimension-5m, 40px));
}
.loader--_NGT0:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}

.scrollStub--Nic48{
  height:calc(var(--dimension-025m, 2px) / 2);
  margin-top:calc(var(--dimension-025m, 2px) / -2);
  background:transparent;
}

.footer--woDxf{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  padding:var(--dimension-050m, 4px);
}

.content--Srh3O{
  overflow:hidden;
  flex-grow:1;
}

.virtualizedContainer--hPgFA{
  position:relative;
  width:100%;
}

.virtualizedPositionBox--O2_Od{
  position:absolute;
  top:0;
  left:0;
  width:100%;
}`,""]),n.locals={loader:"loader--_NGT0",scrollStub:"scrollStub--Nic48",footer:"footer--woDxf",content:"content--Srh3O",virtualizedContainer:"virtualizedContainer--hPgFA",virtualizedPositionBox:"virtualizedPositionBox--O2_Od"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.listContainer--EIJe_{
  display:flex;
  flex-direction:column;
  height:100%;
  margin:0;
  padding:0;
}
.listContainer--EIJe_:focus-visible{
  border:none;
  outline:none;
}
.listContainer--EIJe_:focus-visible[data-active]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.listContainer--EIJe_:focus-visible[data-active] *{
  cursor:inherit;
}
.listContainer--EIJe_ li,
.listContainer--EIJe_ ul{
  list-style-type:none;
}

.wrapper--Ch1oe{
  position:relative;
  overflow:hidden;
  display:block;
  box-sizing:border-box;
  height:100%;
}
.wrapper--Ch1oe:has(.listContainer--EIJe_:focus-visible){
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.wrapper--Ch1oe li,
.wrapper--Ch1oe ul{
  list-style-type:none;
}

.scrollContainerS--_rdFD{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 32);
}

.scrollContainerM--Le2wk{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 40);
}

.scrollContainerL--u_pCp{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 48);
}`,""]),n.locals={listContainer:"listContainer--EIJe_",wrapper:"wrapper--Ch1oe",scrollContainerS:"scrollContainerS--_rdFD",scrollContainerM:"scrollContainerM--Le2wk",scrollContainerL:"scrollContainerL--u_pCp"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.accordion--rV31r{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  transition:gap 300ms;
}
.accordion--rV31r::-webkit-scrollbar{
  width:0;
}
.accordion--rV31r[aria-expanded=false]{
  gap:0;
}

.contentWrapper--eOiAB{
  box-sizing:border-box;
  width:100%;
}
.contentWrapper--eOiAB[aria-hidden=false] > div[data-content]{
  display:block;
}

.content--cgMJL{
  position:relative;
  display:none;
  box-sizing:border-box;
  width:100%;
}`,""]),n.locals={accordion:"accordion--rV31r",contentWrapper:"contentWrapper--eOiAB",content:"content--cgMJL"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.headline--VCIjs{
  display:flex;
}

.label--dbbnX{
  overflow:hidden;
  flex:1;
  color:var(--sys-neutral-text-main, #41424e);
}

.caption--LTpbQ{
  overflow:hidden;
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  text-overflow:ellipsis;
  white-space:nowrap;
}

.description--Bt134{
  color:var(--sys-neutral-text-support, #6d707f);
}

.content--71lLj{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}
.content--71lLj[data-size=s] .headline--VCIjs{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--71lLj[data-size=s] .label--dbbnX{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  display:flex;
  align-items:center;
}
.content--71lLj[data-size=s] .caption--LTpbQ{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--71lLj[data-size=s] .description--Bt134{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--71lLj[data-size=m] .headline--VCIjs{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--71lLj[data-size=m] .label--dbbnX{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  display:flex;
  align-items:center;
}
.content--71lLj[data-size=m] .caption--LTpbQ{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--71lLj[data-size=m] .description--Bt134{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--71lLj[data-size=l] .headline--VCIjs{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--71lLj[data-size=l] .label--dbbnX{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
  display:flex;
  align-items:center;
}
.content--71lLj[data-size=l] .caption--LTpbQ{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--71lLj[data-size=l] .description--Bt134{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--71lLj[data-disabled] .label--dbbnX,
.content--71lLj[data-disabled] .description--Bt134,
.content--71lLj[data-disabled] .caption--LTpbQ{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),n.locals={headline:"headline--VCIjs",label:"label--dbbnX",caption:"caption--LTpbQ",description:"description--Bt134",content:"content--71lLj"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.listEmptyStateWrapper--DZmtr{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  padding:var(--dimension-1m, 8px);
}`,""]),n.locals={listEmptyStateWrapper:"listEmptyStateWrapper--DZmtr"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css"(I,v,e){e.d(v,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(f),n=m()(o());n.push([I.id,`.separatorWithLabel--uncym{
  display:flex;
  gap:var(--dimension-1m, 8px);
  align-items:flex-end;
  box-sizing:border-box;
  width:100%;
  min-width:100%;
}
.separatorWithLabel--uncym[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-s, 32px);
}
.separatorWithLabel--uncym[data-size=s] .label--aXl6u[data-mode=primary]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--uncym[data-size=s] .label--aXl6u[data-mode=secondary]{
  font-family:var(--light-label-m-font-family, SB Sans Interface);
  font-weight:var(--light-label-m-font-weight, Regular);
  line-height:var(--light-label-m-line-height, 16px);
  font-size:var(--light-label-m-font-size, 12px);
  letter-spacing:var(--light-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--uncym[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-m, 40px);
}
.separatorWithLabel--uncym[data-size=m] .label--aXl6u[data-mode=primary]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--uncym[data-size=m] .label--aXl6u[data-mode=secondary]{
  font-family:var(--light-label-l-font-family, SB Sans Interface);
  font-weight:var(--light-label-l-font-weight, Regular);
  line-height:var(--light-label-l-line-height, 20px);
  font-size:var(--light-label-l-font-size, 14px);
  letter-spacing:var(--light-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--uncym[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-l, 48px);
}
.separatorWithLabel--uncym[data-size=l] .label--aXl6u[data-mode=primary]{
  font-family:var(--sans-title-m-font-family, SB Sans Interface);
  font-weight:var(--sans-title-m-font-weight, Semibold);
  line-height:var(--sans-title-m-line-height, 24px);
  font-size:var(--sans-title-m-font-size, 16px);
  letter-spacing:var(--sans-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);
}
.separatorWithLabel--uncym[data-size=l] .label--aXl6u[data-mode=secondary]{
  font-family:var(--light-title-m-font-family, SB Sans Interface);
  font-weight:var(--light-title-m-font-weight, Regular);
  line-height:var(--light-title-m-line-height, 24px);
  font-size:var(--light-title-m-font-size, 16px);
  letter-spacing:var(--light-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-m-paragraph-spacing, 8.8px);
}

.separatorWithoutLabel--gaYWk{
  display:flex;
  align-items:flex-end;
}
.separatorWithoutLabel--gaYWk[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
}
.separatorWithoutLabel--gaYWk[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
}
.separatorWithoutLabel--gaYWk[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
}
.separatorWithoutLabel--gaYWk{
  box-sizing:border-box;
}

.label--aXl6u{
  overflow:hidden;
  flex-shrink:1;
}
.label--aXl6u[data-mode=primary]{
  color:var(--sys-neutral-text-main, #41424e);
}
.label--aXl6u[data-mode=secondary]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}

hr.divider--vI2br{
  flex:1;
  width:auto;
  min-width:0;
}

.selectButton--InJBv{
  display:flex;
  justify-content:flex-end;
}
.selectButton--InJBv[data-weight=primary]{
  --divider-height:1px;
}
.selectButton--InJBv[data-weight=secondary]{
  --divider-height:0.5px;
}
.selectButton--InJBv[data-size=s]{
  transform:translateY(calc((var(--size-button-xs, 24px) - var(--sans-label-s-line-height, 14px)) / 2 - var(--divider-height, 0)));
}
.selectButton--InJBv[data-size=m]{
  transform:translateY(calc((var(--size-button-s, 32px) - var(--sans-label-m-line-height, 16px)) / 2 - var(--divider-height, 0)));
}
.selectButton--InJBv[data-size=l]{
  transform:translateY(calc((var(--size-button-m, 40px) - var(--sans-label-l-line-height, 20px)) / 2 - var(--divider-height, 0)));
}`,""]),n.locals={separatorWithLabel:"separatorWithLabel--uncym",label:"label--aXl6u",separatorWithoutLabel:"separatorWithoutLabel--gaYWk",divider:"divider--vI2br",selectButton:"selectButton--InJBv"};const c=n},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"(I,v,e){e.d(v,{A:()=>S});var t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(t),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=e.n(f),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),c=e.n(n),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),C=e.n($),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(K),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),P=e.n(V),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),x={};x.styleTagTransform=P(),x.setAttributes=C(),x.insert=c().bind(null,"head"),x.domAPI=m(),x.insertStyleElement=N();var F=o()(p.A,x);const S=p.A&&p.A.locals?p.A.locals:void 0},"./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"(I,v,e){e.d(v,{A:()=>S});var t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(t),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=e.n(f),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),c=e.n(n),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),C=e.n($),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(K),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),P=e.n(V),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.2_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),x={};x.styleTagTransform=P(),x.setAttributes=C(),x.insert=c().bind(null,"head"),x.domAPI=m(),x.insertStyleElement=N();var F=o()(p.A,x);const S=p.A&&p.A.locals?p.A.locals:void 0}}]);})();
