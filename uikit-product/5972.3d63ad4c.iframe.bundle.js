"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5972],{"./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((j,c,e)=>{e.d(c,{e:()=>ae});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(y),f=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js"),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const R={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},d={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},Y={Round:"round",Square:"square"};var W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),K=e.n(W),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Z=e.n(N),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),U=e.n(F),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),X=e.n(V),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),A=e.n($),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),J=e.n(S),x=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),u={};u.styleTagTransform=J(),u.setAttributes=X(),u.insert=U().bind(null,"head"),u.domAPI=Z(),u.insertStyleElement=A();var se=K()(x.A,u);const i=x.A&&x.A.locals?x.A.locals:void 0,w=" ",O=(p,P)=>{var k;const t=p.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!t||t.length<P)return t.toUpperCase();const m=t.split(w);let E=t;if(m.length>1){const H=m[0].charAt(0),n=(k=m[m.length-1])===null||k===void 0?void 0:k.charAt(0);E=`${H}${n}`.toUpperCase()}return E.slice(0,P).toUpperCase()};var o=function(p,P){var k={};for(var t in p)Object.prototype.hasOwnProperty.call(p,t)&&P.indexOf(t)<0&&(k[t]=p[t]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,t=Object.getOwnPropertySymbols(p);m<t.length;m++)P.indexOf(t[m])<0&&Object.prototype.propertyIsEnumerable.call(p,t[m])&&(k[t[m]]=p[t[m]]);return k};const h={[d.Xxs]:"xxs",[d.Xs]:"xs",[d.S]:"xs",[d.M]:"m",[d.L]:"m",[d.Xl]:"l",[d.Xxl]:"l"};function ae(p){var{name:P,appearance:k=R.Red,size:t=d.S,shape:m=Y.Round,indicator:E,showTwoSymbols:H,src:n,className:T}=p,z=o(p,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[r,l]=(0,f.useState)(!1),L=t!==d.Xxs&&H?2:1;return(0,f.useEffect)(()=>{l(!1)},[n]),(0,s.jsxs)("div",Object.assign({className:g()(i.avatar,T)},(0,b.z7)(z),{"data-size":t,"data-appearance":k,"data-shape":m,children:[n&&!r?(0,s.jsx)("img",{"data-test-id":"image",className:i.image,src:n,onError:()=>l(!0),alt:""}):(0,s.jsx)("div",{"data-test-id":"abbreviation",children:O(P,L)}),E&&(0,s.jsx)("div",{className:i.indicatorWrapper,children:(0,s.jsx)(a.k,{"data-test-id":"indicator",appearance:E,size:h[t]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js":((j,c,e)=>{e.d(c,{B:()=>H});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(y),f=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),R=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),d=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),Y=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),K=e.n(W),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Z=e.n(N),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),U=e.n(F),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),X=e.n(V),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),A=e.n($),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),J=e.n(S),x=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css"),u={};u.styleTagTransform=J(),u.setAttributes=X(),u.insert=U().bind(null,"head"),u.domAPI=Z(),u.insertStyleElement=A();var se=K()(x.A,u);const i=x.A&&x.A.locals?x.A.locals:void 0,w=(0,a.forwardRef)(({listRef:n,tabIndex:T},z)=>{const r=(0,a.useCallback)(l=>{var L;l.relatedTarget!==n.current&&((L=n.current)===null||L===void 0||L.focus()),l.preventDefault(),l.stopPropagation()},[n]);return(0,s.jsx)("button",{type:"button","aria-hidden":!0,ref:z,onKeyDown:Y.d,onFocus:r,className:i.hiddenBtn,tabIndex:T})});var O=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),o=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),h=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),ae=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),p=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),P=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),k=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),t=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),m=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),E=function(n,T){var z={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&T.indexOf(r)<0&&(z[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(n);l<r.length;l++)T.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(n,r[l])&&(z[r[l]]=n[r[l]]);return z};const H=(0,a.forwardRef)((n,T)=>{var{items:z=[],search:r,pinBottom:l=[],pinTop:L=[],footerActiveElementsRefs:ge,onKeyDown:te,tabIndex:le=0,className:be,collapse:ke={},selection:C,contentRender:je,size:Se="s",marker:ze=!0,keyboardNavigationRef:Ie,hasListInFocusChain:ne=!0}=n,ce=E(n,["items","search","pinBottom","pinTop","footerActiveElementsRefs","onKeyDown","tabIndex","className","collapse","selection","contentRender","size","marker","keyboardNavigationRef","hasListInFocusChain"]);const ue=(0,a.useMemo)(()=>!!r,[r]),[oe=[],me]=(0,b.I)(ke),Oe=(0,a.useCallback)(_=>me(v=>v!=null&&v.includes(_)?v.filter(D=>D!==_):(v!=null?v:[]).concat([_])),[me]),{searchItem:G,footerItems:q}=(0,O.nG)({footerActiveElementsRefs:ge}),pe=(0,a.useMemo)(()=>{const _=(0,o.lg)({items:L,prefix:d.$.pinTop,parentId:d.$.default}),v=(0,o.lg)({items:z,prefix:d.$.default,parentId:d.$.default}),D=(0,o.lg)({items:l,prefix:d.$.pinBottom,parentId:d.$.default}),B=Object.assign(Object.assign(Object.assign({},_.flattenItems),D.flattenItems),v.flattenItems),M=Object.assign(Object.assign(Object.assign({},_.focusFlattenItems),D.focusFlattenItems),v.focusFlattenItems);return[...q,G].forEach(I=>{B[I.id]=I,M[I.id]=Object.assign(Object.assign({},I),{originalId:I.id,items:[],key:I.id,allChildIds:[]})}),{items:v,pinTop:_,pinBottom:D,flattenItems:B,focusFlattenItems:M}},[z,L,l,G,q]),{flattenItems:Pe,focusFlattenItems:_e}=pe,Q=E(pe,["flattenItems","focusFlattenItems"]),{ids:de,expandedIds:ve}=(0,a.useMemo)(()=>{const{pinTop:_,items:v,pinBottom:D}=Q;let B=[],M=[];return ue&&B.push(G.id),[_,v,D].forEach(({focusFlattenItems:I,focusCloseChildIds:Be})=>{const ye=(0,o.e)({focusFlattenItems:I,focusCloseChildIds:Be,openCollapseItems:oe,isSelectionMultiple:(C==null?void 0:C.mode)==="multiple"});B=B.concat(ye.ids),M=M.concat(ye.expandedIds)}),q.forEach(I=>{B.push(I.id)}),{ids:B,expandedIds:M}},[q,ue,Q,oe,G.id,C==null?void 0:C.mode]),ee=(0,a.useRef)(null),fe=(0,a.useRef)(null),xe=de[0],{handleListKeyDownFactory:re,activeItemId:he,resetActiveItemId:Ae,forceUpdateActiveItemId:we}=(0,k.d)({mainRef:ee,btnRef:fe,focusFlattenItems:_e,keyboardNavigationRef:Ie,hasListInFocusChain:ne,firstItemId:xe}),ie=(0,a.useCallback)(_=>re(de,ve)(_),[re,de,ve]),Ee=(0,R.B)()&&ee.current===document.activeElement&&he===void 0,Te=_=>{te==null||te(_),ie==null||ie(_)},Le=()=>{Ae()};return(0,s.jsx)(h.Tr,{flattenItems:Pe,focusFlattenItems:_e,contentRender:je,size:Se,marker:ze,firstItemId:xe,virtualized:ce.virtualized,children:(0,s.jsx)(ae.WM,Object.assign({},C,{children:(0,s.jsx)(p.bN.Provider,{value:{openCollapseItems:oe,toggleOpenCollapseItem:Oe},children:(0,s.jsx)(P.m.Provider,{value:{activeItemId:he,handleListKeyDownFactory:re,forceUpdateActiveItemId:we},children:(0,s.jsxs)("div",{className:g()(m.A.wrapper,be),"data-active":Ee||void 0,children:[(0,s.jsx)(t.Q,Object.assign({},ce,{items:Q.items.focusCloseChildIds,pinTop:Q.pinTop.focusCloseChildIds,pinBottom:Q.pinBottom.focusCloseChildIds,searchItem:G,ref:(0,f.A)(T,ee),onFocus:Le,onKeyDown:Te,tabIndex:ne?le:void 0,search:r,nested:!1})),ne&&(0,s.jsx)(w,{ref:fe,listRef:ee,tabIndex:le})]})})})}))})})}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js":((j,c,e)=>{e.d(c,{k:()=>se});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(y),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),a=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js"),b=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js"),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(R),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=e.n(Y),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),N=e.n(K),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=e.n(Z),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),V=e.n(U),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),$=e.n(X),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),S={};S.styleTagTransform=$(),S.setAttributes=F(),S.insert=N().bind(null,"head"),S.domAPI=W(),S.insertStyleElement=V();var J=d()(A.A,S);const x=A.A&&A.A.locals?A.A.locals:void 0;var u=function(i,w){var O={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&w.indexOf(o)<0&&(O[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,o=Object.getOwnPropertySymbols(i);h<o.length;h++)w.indexOf(o[h])<0&&Object.prototype.propertyIsEnumerable.call(i,o[h])&&(O[o[h]]=i[o[h]]);return O};function se(i){var{size:w=b.S.M,appearance:O=a.x.Primary,className:o}=i,h=u(i,["size","appearance","className"]);return(0,s.jsx)("div",Object.assign({className:g()(x.container,o)},(0,f.z7)(h),{"data-size":w,children:(0,s.jsx)("div",{className:x.indicator,"data-appearance":O})}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js":((j,c,e)=>{e.d(c,{S:()=>s});const s={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js":((j,c,e)=>{e.d(c,{x:()=>s});const s={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((j,c,e)=>{e.d(c,{A:()=>b});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(s),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),a=f()(y());a.push([j.id,`.avatar--wYdfL{
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
}`,""]),a.locals={avatar:"avatar--wYdfL",image:"image--wMeYb",indicatorWrapper:"indicatorWrapper--Zl3rW"};const b=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css":((j,c,e)=>{e.d(c,{A:()=>b});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(s),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),a=f()(y());a.push([j.id,`.hiddenBtn--gV7Gz{
  position:absolute;
  width:0;
  height:0;
  margin:0;
  padding:0;
  border:none;
  outline:none;
}`,""]),a.locals={hiddenBtn:"hiddenBtn--gV7Gz"};const b=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((j,c,e)=>{e.d(c,{A:()=>b});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(s),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),a=f()(y());a.push([j.id,`.container--iTz5V{
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
}`,""]),a.locals={container:"container--iTz5V",indicator:"indicator--SZBO_"};const b=a})}]);})();
