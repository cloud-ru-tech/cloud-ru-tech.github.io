"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[1709],{"./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((k,_,e)=>{e.d(_,{e:()=>te});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=e.n(p),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js"),o=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const r={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},i={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},c={Round:"round",Square:"square"};var l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=e.n(l),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(n),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),t=e.n(u),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),U=e.n(m),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n($),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),J=e.n(T),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),O={};O.styleTagTransform=J(),O.setAttributes=U(),O.insert=t().bind(null,"head"),O.domAPI=h(),O.insertStyleElement=R();var se=v()(E.A,O);const j=E.A&&E.A.locals?E.A.locals:void 0,K=" ",D=(w,M)=>{var L;const x=w.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!x||x.length<M)return x.toUpperCase();const z=x.split(K);let W=x;if(z.length>1){const H=z[0].charAt(0),y=(L=z[z.length-1])===null||L===void 0?void 0:L.charAt(0);W=`${H}${y}`.toUpperCase()}return W.slice(0,M).toUpperCase()};var g=function(w,M){var L={};for(var x in w)Object.prototype.hasOwnProperty.call(w,x)&&M.indexOf(x)<0&&(L[x]=w[x]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,x=Object.getOwnPropertySymbols(w);z<x.length;z++)M.indexOf(x[z])<0&&Object.prototype.propertyIsEnumerable.call(w,x[z])&&(L[x[z]]=w[x[z]]);return L};const A={[i.Xxs]:"xxs",[i.Xs]:"xs",[i.S]:"xs",[i.M]:"m",[i.L]:"m",[i.Xl]:"l",[i.Xxl]:"l"};function te(w){var{name:M,appearance:L=r.Red,size:x=i.S,shape:z=c.Round,indicator:W,showTwoSymbols:H,src:y,className:Y}=w,B=g(w,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[b,S]=(0,d.useState)(!1),F=x!==i.Xxs&&H?2:1;return(0,d.useEffect)(()=>{S(!1)},[y]),(0,a.jsxs)("div",Object.assign({className:f()(j.avatar,Y)},(0,o.z7)(B),{"data-size":x,"data-appearance":L,"data-shape":z,children:[y&&!b?(0,a.jsx)("img",{"data-test-id":"image",className:j.image,src:y,onError:()=>S(!0),alt:""}):(0,a.jsx)("div",{"data-test-id":"abbreviation",children:D(M,F)}),W&&(0,a.jsx)("div",{className:j.indicatorWrapper,children:(0,a.jsx)(s.k,{"data-test-id":"indicator",appearance:W,size:A[x]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/hooks/customOption.js":((k,_,e)=>{e.d(_,{Q:()=>f,a:()=>d});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function p({addCustomOptionTriggers:s,addOptionByEnter:o}){return(0,a.useMemo)(()=>s!==void 0?s:o?["enter"]:[],[s,o])}function f({addCustomOptionTriggers:s,addOptionByEnter:o,inputValue:r,value:i,setValue:c,updateInputValue:l}){const v=p({addCustomOptionTriggers:s,addOptionByEnter:o}),n=(0,a.useCallback)(h=>{!v.includes(h)||r===""||(i!=null?i:[]).includes(r)||(c(u=>(u!=null?u:[]).concat(r)),l())},[v,r,i,c,l]);return{resolvedAddCustomOptionTriggers:v,tryCommitCustomOptionFromInput:n}}function d({addCustomOptionTriggers:s,addOptionByEnter:o,inputValue:r,handleSelectionChange:i}){const c=p({addCustomOptionTriggers:s,addOptionByEnter:o}),l=(0,a.useCallback)(v=>{!c.includes(v)||r===""||i(r)},[c,r,i]);return{resolvedAddCustomOptionTriggers:c,tryCommitCustomOptionFromInput:l}}}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/utils/customOption.js":((k,_,e)=>{e.d(_,{O:()=>p,p:()=>a});const a=f=>{switch(f){case"Enter":return"enter";case"Space":return"space";case"Comma":return"comma";default:return}},p=(f,d)=>f?d.includes(f):!1}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js":((k,_,e)=>{e.d(_,{A:()=>v});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=function(n,h){var u={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&h.indexOf(t)<0&&(u[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,t=Object.getOwnPropertySymbols(n);m<t.length;m++)h.indexOf(t[m])<0&&Object.prototype.propertyIsEnumerable.call(n,t[m])&&(u[t[m]]=n[t[m]]);return u};const s=p.forwardRef((n,h)=>{var{size:u=24}=n,t=f(n,["size"]);t.width=void 0,t.height=void 0;const m="-kebab-s";return typeof u=="number"&&(t.style||(t.style={}),t.style.width=u+"px",t.style.height=u+"px"),(0,a.jsx)("svg",Object.assign({ref:h,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var o=function(n,h){var u={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&h.indexOf(t)<0&&(u[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,t=Object.getOwnPropertySymbols(n);m<t.length;m++)h.indexOf(t[m])<0&&Object.prototype.propertyIsEnumerable.call(n,t[m])&&(u[t[m]]=n[t[m]]);return u};const i=p.forwardRef((n,h)=>{var{size:u=24}=n,t=o(n,["size"]);t.width=void 0,t.height=void 0;const m="-kebab-xs";return typeof u=="number"&&(t.style||(t.style={}),t.style.width=u+"px",t.style.height=u+"px"),(0,a.jsx)("svg",Object.assign({ref:h,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var c=function(n,h){var u={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&h.indexOf(t)<0&&(u[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,t=Object.getOwnPropertySymbols(n);m<t.length;m++)h.indexOf(t[m])<0&&Object.prototype.propertyIsEnumerable.call(n,t[m])&&(u[t[m]]=n[t[m]]);return u};const v=(0,p.forwardRef)((n,h)=>{var{size:u=24}=n,t=c(n,["size"]);return Number(u)>=20?(0,a.jsx)(s,Object.assign({ref:h,size:u},t)):(0,a.jsx)(i,Object.assign({ref:h,size:u},t))})}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js":((k,_,e)=>{e.d(_,{B:()=>H});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=e.n(p),d=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),r=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),i=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),c=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=e.n(l),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(n),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),t=e.n(u),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),U=e.n(m),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n($),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),J=e.n(T),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css"),O={};O.styleTagTransform=J(),O.setAttributes=U(),O.insert=t().bind(null,"head"),O.domAPI=h(),O.insertStyleElement=R();var se=v()(E.A,O);const j=E.A&&E.A.locals?E.A.locals:void 0,K=(0,s.forwardRef)(({listRef:y,tabIndex:Y},B)=>{const b=(0,s.useCallback)(S=>{var F;S.relatedTarget!==y.current&&((F=y.current)===null||F===void 0||F.focus()),S.preventDefault(),S.stopPropagation()},[y]);return(0,a.jsx)("button",{type:"button","aria-hidden":!0,ref:B,onKeyDown:c.d,onFocus:b,className:j.hiddenBtn,tabIndex:Y})});var D=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),g=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),A=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),te=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),w=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),M=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),L=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),x=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),z=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),W=function(y,Y){var B={};for(var b in y)Object.prototype.hasOwnProperty.call(y,b)&&Y.indexOf(b)<0&&(B[b]=y[b]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,b=Object.getOwnPropertySymbols(y);S<b.length;S++)Y.indexOf(b[S])<0&&Object.prototype.propertyIsEnumerable.call(y,b[S])&&(B[b[S]]=y[b[S]]);return B};const H=(0,s.forwardRef)((y,Y)=>{var{items:B=[],search:b,pinBottom:S=[],pinTop:F=[],footerActiveElementsRefs:ge,onKeyDown:ae,tabIndex:le=0,className:be,collapse:ke={},selection:X,contentRender:je,size:Se="s",marker:Oe=!0,keyboardNavigationRef:ze,hasListInFocusChain:ne=!0}=y,ce=W(y,["items","search","pinBottom","pinTop","footerActiveElementsRefs","onKeyDown","tabIndex","className","collapse","selection","contentRender","size","marker","keyboardNavigationRef","hasListInFocusChain"]);const ue=(0,s.useMemo)(()=>!!b,[b]),[oe=[],me]=(0,o.I)(ke),we=(0,s.useCallback)(I=>me(P=>P!=null&&P.includes(I)?P.filter(Z=>Z!==I):(P!=null?P:[]).concat([I])),[me]),{searchItem:G,footerItems:q}=(0,D.nG)({footerActiveElementsRefs:ge}),pe=(0,s.useMemo)(()=>{const I=(0,g.lg)({items:F,prefix:i.$.pinTop,parentId:i.$.default}),P=(0,g.lg)({items:B,prefix:i.$.default,parentId:i.$.default}),Z=(0,g.lg)({items:S,prefix:i.$.pinBottom,parentId:i.$.default}),N=Object.assign(Object.assign(Object.assign({},I.flattenItems),Z.flattenItems),P.flattenItems),V=Object.assign(Object.assign(Object.assign({},I.focusFlattenItems),Z.focusFlattenItems),P.focusFlattenItems);return[...q,G].forEach(C=>{N[C.id]=C,V[C.id]=Object.assign(Object.assign({},C),{originalId:C.id,items:[],key:C.id,allChildIds:[]})}),{items:P,pinTop:I,pinBottom:Z,flattenItems:N,focusFlattenItems:V}},[B,F,S,G,q]),{flattenItems:Ie,focusFlattenItems:_e}=pe,Q=W(pe,["flattenItems","focusFlattenItems"]),{ids:re,expandedIds:ve}=(0,s.useMemo)(()=>{const{pinTop:I,items:P,pinBottom:Z}=Q;let N=[],V=[];return ue&&N.push(G.id),[I,P,Z].forEach(({focusFlattenItems:C,focusCloseChildIds:Be})=>{const ye=(0,g.e)({focusFlattenItems:C,focusCloseChildIds:Be,openCollapseItems:oe,isSelectionMultiple:(X==null?void 0:X.mode)==="multiple"});N=N.concat(ye.ids),V=V.concat(ye.expandedIds)}),q.forEach(C=>{N.push(C.id)}),{ids:N,expandedIds:V}},[q,ue,Q,oe,G.id,X==null?void 0:X.mode]),ee=(0,s.useRef)(null),fe=(0,s.useRef)(null),he=re[0],{handleListKeyDownFactory:ie,activeItemId:xe,resetActiveItemId:Pe,forceUpdateActiveItemId:Ee}=(0,L.d)({mainRef:ee,btnRef:fe,focusFlattenItems:_e,keyboardNavigationRef:ze,hasListInFocusChain:ne,firstItemId:he}),de=(0,s.useCallback)(I=>ie(re,ve)(I),[ie,re,ve]),Ae=(0,r.B)()&&ee.current===document.activeElement&&xe===void 0,Le=I=>{ae==null||ae(I),de==null||de(I)},Te=()=>{Pe()};return(0,a.jsx)(A.Tr,{flattenItems:Ie,focusFlattenItems:_e,contentRender:je,size:Se,marker:Oe,firstItemId:he,virtualized:ce.virtualized,children:(0,a.jsx)(te.WM,Object.assign({},X,{children:(0,a.jsx)(w.bN.Provider,{value:{openCollapseItems:oe,toggleOpenCollapseItem:we},children:(0,a.jsx)(M.m.Provider,{value:{activeItemId:xe,handleListKeyDownFactory:ie,forceUpdateActiveItemId:Ee},children:(0,a.jsxs)("div",{className:f()(z.A.wrapper,be),"data-active":Ae||void 0,children:[(0,a.jsx)(x.Q,Object.assign({},ce,{items:Q.items.focusCloseChildIds,pinTop:Q.pinTop.focusCloseChildIds,pinBottom:Q.pinBottom.focusCloseChildIds,searchItem:G,ref:(0,d.A)(Y,ee),onFocus:Te,onKeyDown:Le,tabIndex:ne?le:void 0,search:b,nested:!1})),ne&&(0,a.jsx)(K,{ref:fe,listRef:ee,tabIndex:le})]})})})}))})})}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js":((k,_,e)=>{e.d(_,{k:()=>se});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=e.n(p),d=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),s=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js"),o=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js"),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(r),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),l=e.n(c),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),n=e.n(v),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),u=e.n(h),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=e.n(t),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),$=e.n(U),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),T={};T.styleTagTransform=$(),T.setAttributes=u(),T.insert=n().bind(null,"head"),T.domAPI=l(),T.insertStyleElement=m();var J=i()(R.A,T);const E=R.A&&R.A.locals?R.A.locals:void 0;var O=function(j,K){var D={};for(var g in j)Object.prototype.hasOwnProperty.call(j,g)&&K.indexOf(g)<0&&(D[g]=j[g]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var A=0,g=Object.getOwnPropertySymbols(j);A<g.length;A++)K.indexOf(g[A])<0&&Object.prototype.propertyIsEnumerable.call(j,g[A])&&(D[g[A]]=j[g[A]]);return D};function se(j){var{size:K=o.S.M,appearance:D=s.x.Primary,className:g}=j,A=O(j,["size","appearance","className"]);return(0,a.jsx)("div",Object.assign({className:f()(E.container,g)},(0,d.z7)(A),{"data-size":K,children:(0,a.jsx)("div",{className:E.indicator,"data-appearance":D})}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js":((k,_,e)=>{e.d(_,{S:()=>a});const a={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js":((k,_,e)=>{e.d(_,{x:()=>a});const a={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"}}),"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js":((k,_,e)=>{e.d(_,{N:()=>f});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const f=(0,p.B)()?a.useLayoutEffect:a.useEffect}),"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js":((k,_,e)=>{e.d(_,{I:()=>p});var a=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function p({value:f,onChange:d,defaultValue:s}){return(0,a.iC)(f,s,o=>{const r=typeof o=="function"?o(f):o;d==null||d(r)})}}),"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js":((k,_,e)=>{e.d(_,{B:()=>a});function a(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((k,_,e)=>{e.d(_,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(a),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(f),s=d()(p());s.push([k.id,`.avatar--wYdfL{
  position:relative;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.avatar--wYdfL[data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.avatar--wYdfL[data-appearance=orange]{
  color:var(--sys-orange-text-main, #884c23);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.avatar--wYdfL[data-appearance=yellow]{
  color:var(--sys-yellow-text-main, #815f19);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.avatar--wYdfL[data-appearance=green]{
  color:var(--sys-green-text-main, #3d6035);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.avatar--wYdfL[data-appearance=blue]{
  color:var(--sys-blue-text-main, #2b537e);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.avatar--wYdfL[data-appearance=violet]{
  color:var(--sys-violet-text-main, #59446a);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.avatar--wYdfL[data-appearance=pink]{
  color:var(--sys-pink-text-main, #754158);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.avatar--wYdfL[data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.avatar--wYdfL[data-size=xxs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--wYdfL[data-size=xxs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxs, 8px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--wYdfL[data-size=xxs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxs, 4px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--wYdfL[data-size=xs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--wYdfL[data-size=xs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xs, 16px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--wYdfL[data-size=xs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xs, 4px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--wYdfL[data-size=s]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.avatar--wYdfL[data-size=s][data-shape=round]{
  border-radius:var(--radius-avatar-round-s, 24px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--wYdfL[data-size=s][data-shape=square]{
  border-radius:var(--radius-avatar-square-s, 4px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--wYdfL[data-size=m]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.avatar--wYdfL[data-size=m][data-shape=round]{
  border-radius:var(--radius-avatar-round-m, 24px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--wYdfL[data-size=m][data-shape=square]{
  border-radius:var(--radius-avatar-square-m, 8px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--wYdfL[data-size=l]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.avatar--wYdfL[data-size=l][data-shape=round]{
  border-radius:var(--radius-avatar-round-l, 32px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--wYdfL[data-size=l][data-shape=square]{
  border-radius:var(--radius-avatar-square-l, 12px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--wYdfL[data-size=xl]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.avatar--wYdfL[data-size=xl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xl, 48px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--wYdfL[data-size=xl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xl, 16px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--wYdfL[data-size=xxl]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.avatar--wYdfL[data-size=xxl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxl, 64px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}
.avatar--wYdfL[data-size=xxl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxl, 20px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}

.image--wMeYb{
  width:100%;
  height:100%;
  -o-object-fit:cover;
     object-fit:cover;
  -o-object-position:center;
     object-position:center;
  border-radius:inherit;
}

.indicatorWrapper--Zl3rW{
  position:absolute;
  right:0;
  bottom:0;
  display:inline-flex;
}`,""]),s.locals={avatar:"avatar--wYdfL",image:"image--wMeYb",indicatorWrapper:"indicatorWrapper--Zl3rW"};const o=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css":((k,_,e)=>{e.d(_,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(a),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(f),s=d()(p());s.push([k.id,`.hiddenBtn--uoc9C{
  position:absolute;
  width:0;
  height:0;
  margin:0;
  padding:0;
  border:none;
  outline:none;
}`,""]),s.locals={hiddenBtn:"hiddenBtn--uoc9C"};const o=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((k,_,e)=>{e.d(_,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(a),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(f),s=d()(p());s.push([k.id,`.container--iTz5V{
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.container--iTz5V[data-size=xxs]{
  width:var(--size-status-indicator-container-xxs, 4px);
  height:var(--size-status-indicator-container-xxs, 4px);
}
.container--iTz5V[data-size=xxs] .indicator--SZBO_{
  border-radius:var(--radius-status-indicator-xxs, 2px);
  border-width:var(--border-width-general-xxs, 0.5px);
  width:var(--size-status-indicator-xxs, 4px);
  height:var(--size-status-indicator-xxs, 4px);
}
.container--iTz5V[data-size=xs]{
  width:var(--size-status-indicator-container-xs, 8px);
  height:var(--size-status-indicator-container-xs, 8px);
}
.container--iTz5V[data-size=xs] .indicator--SZBO_{
  border-radius:var(--radius-status-indicator-xs, 4px);
  border-width:var(--border-width-general-s, 1.5px);
  width:var(--size-status-indicator-xs, 8px);
  height:var(--size-status-indicator-xs, 8px);
}
.container--iTz5V[data-size=s]{
  width:var(--size-status-indicator-container-s, 16px);
  height:var(--size-status-indicator-container-s, 16px);
}
.container--iTz5V[data-size=s] .indicator--SZBO_{
  border-radius:var(--radius-status-indicator-s, 8px);
  border-width:var(--border-width-general-m, 2px);
  width:var(--size-status-indicator-s, 12px);
  height:var(--size-status-indicator-s, 12px);
}
.container--iTz5V[data-size=m]{
  width:var(--size-status-indicator-container-m, 16px);
  height:var(--size-status-indicator-container-m, 16px);
}
.container--iTz5V[data-size=m] .indicator--SZBO_{
  border-radius:var(--radius-status-indicator-m, 8px);
  border-width:var(--border-width-general-l, 3px);
  width:var(--size-status-indicator-m, 16px);
  height:var(--size-status-indicator-m, 16px);
}
.container--iTz5V[data-size=l]{
  width:var(--size-status-indicator-container-l, 24px);
  height:var(--size-status-indicator-container-l, 24px);
}
.container--iTz5V[data-size=l] .indicator--SZBO_{
  border-radius:var(--radius-status-indicator-l, 16px);
  border-width:var(--border-width-general-xl, 4px);
  width:var(--size-status-indicator-l, 24px);
  height:var(--size-status-indicator-l, 24px);
}

.indicator--SZBO_{
  box-sizing:border-box;
  border:0 solid var(--sys-neutral-background1-level, #fdfdfd);
}
.indicator--SZBO_[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.indicator--SZBO_[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.indicator--SZBO_[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.indicator--SZBO_[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.indicator--SZBO_[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.indicator--SZBO_[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.indicator--SZBO_[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.indicator--SZBO_[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.indicator--SZBO_[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),s.locals={container:"container--iTz5V",indicator:"indicator--SZBO_"};const o=s}),"./node_modules/.pnpm/fuzzy-search@3.2.1/node_modules/fuzzy-search/src/FuzzySearch.js":((k,_,e)=>{e.d(_,{A:()=>p});class a{static getDescendantProperty(d,s,o=[]){let r,i,c,l,v,n;if(s){if(c=s.indexOf("."),c===-1?r=s:(r=s.slice(0,c),i=s.slice(c+1)),l=d[r],l!==null&&typeof l!="undefined")if(!i&&(typeof l=="string"||typeof l=="number"))o.push(l);else if(Object.prototype.toString.call(l)==="[object Array]")for(v=0,n=l.length;v<n;v++)a.getDescendantProperty(l[v],i,o);else i&&a.getDescendantProperty(l,i,o)}else o.push(d);return o}}class p{constructor(d=[],s=[],o={}){Array.isArray(s)||(o=s,s=[]),this.haystack=d,this.keys=s,this.options=Object.assign({caseSensitive:!1,sort:!1},o)}search(d=""){if(d==="")return this.haystack;const s=[];for(let o=0;o<this.haystack.length;o++){const r=this.haystack[o];if(this.keys.length===0){const i=p.isMatch(r,d,this.options.caseSensitive);i&&s.push({item:r,score:i})}else for(let i=0;i<this.keys.length;i++){const c=a.getDescendantProperty(r,this.keys[i]);let l=!1;for(let v=0;v<c.length;v++){const n=p.isMatch(c[v],d,this.options.caseSensitive);if(n){l=!0,s.push({item:r,score:n});break}}if(l)break}}return this.options.sort&&s.sort((o,r)=>o.score-r.score),s.map(o=>o.item)}static isMatch(d,s,o){d=String(d),s=String(s),o||(d=d.toLocaleLowerCase(),s=s.toLocaleLowerCase());const r=p.nearestIndexesFor(d,s);return r?d===s?1:r.length>1?2+(r[r.length-1]-r[0]):2+r[0]:!1}static nearestIndexesFor(d,s){const o=s.split("");let r=[];return p.indexesOfFirstLetter(d,s).forEach((c,l)=>{let v=c+1;r[l]=[c];for(let n=1;n<o.length;n++){const h=o[n];if(v=d.indexOf(h,v),v===-1){r[l]=!1;break}r[l].push(v),v++}}),r=r.filter(c=>c!==!1),r.length?r.sort((c,l)=>c.length===1?c[0]-l[0]:(c=c[c.length-1]-c[0],l=l[l.length-1]-l[0],c-l))[0]:!1}static indexesOfFirstLetter(d,s){const o=s[0];return d.split("").map((r,i)=>r!==o?!1:i).filter(r=>r!==!1)}}})}]);})();
