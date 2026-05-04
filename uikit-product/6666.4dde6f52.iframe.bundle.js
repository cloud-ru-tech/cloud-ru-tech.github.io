"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[6666],{"./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((g,u,e)=>{e.d(u,{e:()=>te});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(l),r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js"),t=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const a={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},o={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},i={Round:"round",Square:"square"};var d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(d),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(h),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Z=e.n(T),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),V=e.n(X),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=e.n($),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),J=e.n(E),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),b={};b.styleTagTransform=J(),b.setAttributes=V(),b.insert=Z().bind(null,"head"),b.domAPI=w(),b.insertStyleElement=D();var se=c()(I.A,b);const x=I.A&&I.A.locals?I.A.locals:void 0,M=" ",B=(j,C)=>{var P;const p=j.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!p||p.length<C)return p.toUpperCase();const k=p.split(M);let R=p;if(k.length>1){const H=k[0].charAt(0),_=(P=k[k.length-1])===null||P===void 0?void 0:P.charAt(0);R=`${H}${_}`.toUpperCase()}return R.slice(0,C).toUpperCase()};var v=function(j,C){var P={};for(var p in j)Object.prototype.hasOwnProperty.call(j,p)&&C.indexOf(p)<0&&(P[p]=j[p]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var k=0,p=Object.getOwnPropertySymbols(j);k<p.length;k++)C.indexOf(p[k])<0&&Object.prototype.propertyIsEnumerable.call(j,p[k])&&(P[p[k]]=j[p[k]]);return P};const O={[o.Xxs]:"xxs",[o.Xs]:"xs",[o.S]:"xs",[o.M]:"m",[o.L]:"m",[o.Xl]:"l",[o.Xxl]:"l"};function te(j){var{name:C,appearance:P=a.Red,size:p=o.S,shape:k=i.Round,indicator:R,showTwoSymbols:H,src:_,className:W}=j,A=v(j,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[f,y]=(0,r.useState)(!1),Y=p!==o.Xxs&&H?2:1;return(0,r.useEffect)(()=>{y(!1)},[_]),(0,n.jsxs)("div",Object.assign({className:m()(x.avatar,W)},(0,t.z7)(A),{"data-size":p,"data-appearance":P,"data-shape":k,children:[_&&!f?(0,n.jsx)("img",{"data-test-id":"image",className:x.image,src:_,onError:()=>y(!0),alt:""}):(0,n.jsx)("div",{"data-test-id":"abbreviation",children:B(C,Y)}),R&&(0,n.jsx)("div",{className:x.indicatorWrapper,children:(0,n.jsx)(s.k,{"data-test-id":"indicator",appearance:R,size:O[p]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/hooks/customOption.js":((g,u,e)=>{e.d(u,{Q:()=>m,a:()=>r});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function l({addCustomOptionTriggers:s,addOptionByEnter:t}){return(0,n.useMemo)(()=>s!==void 0?s:t?["enter"]:[],[s,t])}function m({addCustomOptionTriggers:s,addOptionByEnter:t,inputValue:a,value:o,setValue:i,updateInputValue:d}){const c=l({addCustomOptionTriggers:s,addOptionByEnter:t}),h=(0,n.useCallback)(w=>{!c.includes(w)||a===""||(o!=null?o:[]).includes(a)||(i(T=>(T!=null?T:[]).concat(a)),d())},[c,a,o,i,d]);return{resolvedAddCustomOptionTriggers:c,tryCommitCustomOptionFromInput:h}}function r({addCustomOptionTriggers:s,addOptionByEnter:t,inputValue:a,handleSelectionChange:o}){const i=l({addCustomOptionTriggers:s,addOptionByEnter:t}),d=(0,n.useCallback)(c=>{!i.includes(c)||a===""||o(a)},[i,a,o]);return{resolvedAddCustomOptionTriggers:i,tryCommitCustomOptionFromInput:d}}}),"./node_modules/.pnpm/@snack-uikit+fields@0.55.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/utils/customOption.js":((g,u,e)=>{e.d(u,{O:()=>l,p:()=>n});const n=m=>{switch(m){case"Enter":return"enter";case"Space":return"space";case"Comma":return"comma";default:return}},l=(m,r)=>m?r.includes(m):!1}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js":((g,u,e)=>{e.d(u,{B:()=>H});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(l),r=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),a=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),o=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),i=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(d),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(h),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Z=e.n(T),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),V=e.n(X),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=e.n($),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),J=e.n(E),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css"),b={};b.styleTagTransform=J(),b.setAttributes=V(),b.insert=Z().bind(null,"head"),b.domAPI=w(),b.insertStyleElement=D();var se=c()(I.A,b);const x=I.A&&I.A.locals?I.A.locals:void 0,M=(0,s.forwardRef)(({listRef:_,tabIndex:W},A)=>{const f=(0,s.useCallback)(y=>{var Y;y.relatedTarget!==_.current&&((Y=_.current)===null||Y===void 0||Y.focus()),y.preventDefault(),y.stopPropagation()},[_]);return(0,n.jsx)("button",{type:"button","aria-hidden":!0,ref:A,onKeyDown:i.d,onFocus:f,className:x.hiddenBtn,tabIndex:W})});var B=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),v=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),O=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),te=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),j=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),C=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),P=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),p=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),k=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),R=function(_,W){var A={};for(var f in _)Object.prototype.hasOwnProperty.call(_,f)&&W.indexOf(f)<0&&(A[f]=_[f]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,f=Object.getOwnPropertySymbols(_);y<f.length;y++)W.indexOf(f[y])<0&&Object.prototype.propertyIsEnumerable.call(_,f[y])&&(A[f[y]]=_[f[y]]);return A};const H=(0,s.forwardRef)((_,W)=>{var{items:A=[],search:f,pinBottom:y=[],pinTop:Y=[],footerActiveElementsRefs:ge,onKeyDown:ae,tabIndex:le=0,className:be,collapse:ke={},selection:K,contentRender:je,size:Se="s",marker:ze=!0,keyboardNavigationRef:Ie,hasListInFocusChain:ne=!0}=_,ce=R(_,["items","search","pinBottom","pinTop","footerActiveElementsRefs","onKeyDown","tabIndex","className","collapse","selection","contentRender","size","marker","keyboardNavigationRef","hasListInFocusChain"]);const ue=(0,s.useMemo)(()=>!!f,[f]),[oe=[],me]=(0,t.I)(ke),Oe=(0,s.useCallback)(S=>me(z=>z!=null&&z.includes(S)?z.filter(N=>N!==S):(z!=null?z:[]).concat([S])),[me]),{searchItem:G,footerItems:q}=(0,B.nG)({footerActiveElementsRefs:ge}),pe=(0,s.useMemo)(()=>{const S=(0,v.lg)({items:Y,prefix:o.$.pinTop,parentId:o.$.default}),z=(0,v.lg)({items:A,prefix:o.$.default,parentId:o.$.default}),N=(0,v.lg)({items:y,prefix:o.$.pinBottom,parentId:o.$.default}),F=Object.assign(Object.assign(Object.assign({},S.flattenItems),N.flattenItems),z.flattenItems),U=Object.assign(Object.assign(Object.assign({},S.focusFlattenItems),N.focusFlattenItems),z.focusFlattenItems);return[...q,G].forEach(L=>{F[L.id]=L,U[L.id]=Object.assign(Object.assign({},L),{originalId:L.id,items:[],key:L.id,allChildIds:[]})}),{items:z,pinTop:S,pinBottom:N,flattenItems:F,focusFlattenItems:U}},[A,Y,y,G,q]),{flattenItems:Pe,focusFlattenItems:_e}=pe,Q=R(pe,["flattenItems","focusFlattenItems"]),{ids:re,expandedIds:ve}=(0,s.useMemo)(()=>{const{pinTop:S,items:z,pinBottom:N}=Q;let F=[],U=[];return ue&&F.push(G.id),[S,z,N].forEach(({focusFlattenItems:L,focusCloseChildIds:Be})=>{const ye=(0,v.e)({focusFlattenItems:L,focusCloseChildIds:Be,openCollapseItems:oe,isSelectionMultiple:(K==null?void 0:K.mode)==="multiple"});F=F.concat(ye.ids),U=U.concat(ye.expandedIds)}),q.forEach(L=>{F.push(L.id)}),{ids:F,expandedIds:U}},[q,ue,Q,oe,G.id,K==null?void 0:K.mode]),ee=(0,s.useRef)(null),fe=(0,s.useRef)(null),he=re[0],{handleListKeyDownFactory:de,activeItemId:xe,resetActiveItemId:Ee,forceUpdateActiveItemId:Ae}=(0,P.d)({mainRef:ee,btnRef:fe,focusFlattenItems:_e,keyboardNavigationRef:Ie,hasListInFocusChain:ne,firstItemId:he}),ie=(0,s.useCallback)(S=>de(re,ve)(S),[de,re,ve]),Le=(0,a.B)()&&ee.current===document.activeElement&&xe===void 0,we=S=>{ae==null||ae(S),ie==null||ie(S)},Te=()=>{Ee()};return(0,n.jsx)(O.Tr,{flattenItems:Pe,focusFlattenItems:_e,contentRender:je,size:Se,marker:ze,firstItemId:he,virtualized:ce.virtualized,children:(0,n.jsx)(te.WM,Object.assign({},K,{children:(0,n.jsx)(j.bN.Provider,{value:{openCollapseItems:oe,toggleOpenCollapseItem:Oe},children:(0,n.jsx)(C.m.Provider,{value:{activeItemId:xe,handleListKeyDownFactory:de,forceUpdateActiveItemId:Ae},children:(0,n.jsxs)("div",{className:m()(k.A.wrapper,be),"data-active":Le||void 0,children:[(0,n.jsx)(p.Q,Object.assign({},ce,{items:Q.items.focusCloseChildIds,pinTop:Q.pinTop.focusCloseChildIds,pinBottom:Q.pinBottom.focusCloseChildIds,searchItem:G,ref:(0,r.A)(W,ee),onFocus:Te,onKeyDown:we,tabIndex:ne?le:void 0,search:f,nested:!1})),ne&&(0,n.jsx)(M,{ref:fe,listRef:ee,tabIndex:le})]})})})}))})})}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js":((g,u,e)=>{e.d(u,{k:()=>se});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(l),r=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),s=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js"),t=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js"),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(a),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),d=e.n(i),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=e.n(c),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),T=e.n(w),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),X=e.n(Z),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),$=e.n(V),D=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),E={};E.styleTagTransform=$(),E.setAttributes=T(),E.insert=h().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=X();var J=o()(D.A,E);const I=D.A&&D.A.locals?D.A.locals:void 0;var b=function(x,M){var B={};for(var v in x)Object.prototype.hasOwnProperty.call(x,v)&&M.indexOf(v)<0&&(B[v]=x[v]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,v=Object.getOwnPropertySymbols(x);O<v.length;O++)M.indexOf(v[O])<0&&Object.prototype.propertyIsEnumerable.call(x,v[O])&&(B[v[O]]=x[v[O]]);return B};function se(x){var{size:M=t.S.M,appearance:B=s.x.Primary,className:v}=x,O=b(x,["size","appearance","className"]);return(0,n.jsx)("div",Object.assign({className:m()(I.container,v)},(0,r.z7)(O),{"data-size":M,children:(0,n.jsx)("div",{className:I.indicator,"data-appearance":B})}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js":((g,u,e)=>{e.d(u,{S:()=>n});const n={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js":((g,u,e)=>{e.d(u,{x:()=>n});const n={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"}}),"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js":((g,u,e)=>{e.d(u,{N:()=>m});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const m=(0,l.B)()?n.useLayoutEffect:n.useEffect}),"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js":((g,u,e)=>{e.d(u,{I:()=>l});var n=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function l({value:m,onChange:r,defaultValue:s}){return(0,n.iC)(m,s,t=>{const a=typeof t=="function"?t(m):t;r==null||r(a)})}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((g,u,e)=>{e.d(u,{A:()=>t});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(n),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(m),s=r()(l());s.push([g.id,`.avatar--wYdfL{
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
}`,""]),s.locals={avatar:"avatar--wYdfL",image:"image--wMeYb",indicatorWrapper:"indicatorWrapper--Zl3rW"};const t=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css":((g,u,e)=>{e.d(u,{A:()=>t});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(n),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(m),s=r()(l());s.push([g.id,`.hiddenBtn--uoc9C{
  position:absolute;
  width:0;
  height:0;
  margin:0;
  padding:0;
  border:none;
  outline:none;
}`,""]),s.locals={hiddenBtn:"hiddenBtn--uoc9C"};const t=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((g,u,e)=>{e.d(u,{A:()=>t});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(n),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(m),s=r()(l());s.push([g.id,`.container--iTz5V{
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
}`,""]),s.locals={container:"container--iTz5V",indicator:"indicator--SZBO_"};const t=s}),"./node_modules/.pnpm/fuzzy-search@3.2.1/node_modules/fuzzy-search/src/FuzzySearch.js":((g,u,e)=>{e.d(u,{A:()=>l});class n{static getDescendantProperty(r,s,t=[]){let a,o,i,d,c,h;if(s){if(i=s.indexOf("."),i===-1?a=s:(a=s.slice(0,i),o=s.slice(i+1)),d=r[a],d!==null&&typeof d!="undefined")if(!o&&(typeof d=="string"||typeof d=="number"))t.push(d);else if(Object.prototype.toString.call(d)==="[object Array]")for(c=0,h=d.length;c<h;c++)n.getDescendantProperty(d[c],o,t);else o&&n.getDescendantProperty(d,o,t)}else t.push(r);return t}}class l{constructor(r=[],s=[],t={}){Array.isArray(s)||(t=s,s=[]),this.haystack=r,this.keys=s,this.options=Object.assign({caseSensitive:!1,sort:!1},t)}search(r=""){if(r==="")return this.haystack;const s=[];for(let t=0;t<this.haystack.length;t++){const a=this.haystack[t];if(this.keys.length===0){const o=l.isMatch(a,r,this.options.caseSensitive);o&&s.push({item:a,score:o})}else for(let o=0;o<this.keys.length;o++){const i=n.getDescendantProperty(a,this.keys[o]);let d=!1;for(let c=0;c<i.length;c++){const h=l.isMatch(i[c],r,this.options.caseSensitive);if(h){d=!0,s.push({item:a,score:h});break}}if(d)break}}return this.options.sort&&s.sort((t,a)=>t.score-a.score),s.map(t=>t.item)}static isMatch(r,s,t){r=String(r),s=String(s),t||(r=r.toLocaleLowerCase(),s=s.toLocaleLowerCase());const a=l.nearestIndexesFor(r,s);return a?r===s?1:a.length>1?2+(a[a.length-1]-a[0]):2+a[0]:!1}static nearestIndexesFor(r,s){const t=s.split("");let a=[];return l.indexesOfFirstLetter(r,s).forEach((i,d)=>{let c=i+1;a[d]=[i];for(let h=1;h<t.length;h++){const w=t[h];if(c=r.indexOf(w,c),c===-1){a[d]=!1;break}a[d].push(c),c++}}),a=a.filter(i=>i!==!1),a.length?a.sort((i,d)=>i.length===1?i[0]-d[0]:(i=i[i.length-1]-i[0],d=d[d.length-1]-d[0],i-d))[0]:!1}static indexesOfFirstLetter(r,s){const t=s[0];return r.split("").map((a,o)=>a!==t?!1:o).filter(a=>a!==!1)}}})}]);})();
