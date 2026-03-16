"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2424],{"./node_modules/.pnpm/@snack-uikit+avatar@0.8.23_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((z,c,e)=>{e.d(c,{e:()=>ae});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),h=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(h),x=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("./node_modules/.pnpm/@snack-uikit+status@0.10.10_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js"),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const D={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},r={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},M={Round:"round",Square:"square"};var W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),H=e.n(W),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),F=e.n(K),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),U=e.n(Q),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Y=e.n(X),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n($),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Z=e.n(j),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.23_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),u={};u.styleTagTransform=Z(),u.setAttributes=Y(),u.insert=U().bind(null,"head"),u.domAPI=F(),u.insertStyleElement=E();var se=H()(y.A,u);const i=y.A&&y.A.locals?y.A.locals:void 0,T=" ",P=(p,A)=>{var k;const t=p.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!t||t.length<A)return t.toUpperCase();const m=t.split(T);let C=t;if(m.length>1){const V=m[0].charAt(0),n=(k=m[m.length-1])===null||k===void 0?void 0:k.charAt(0);C=`${V}${n}`.toUpperCase()}return C.slice(0,A).toUpperCase()};var o=function(p,A){var k={};for(var t in p)Object.prototype.hasOwnProperty.call(p,t)&&A.indexOf(t)<0&&(k[t]=p[t]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,t=Object.getOwnPropertySymbols(p);m<t.length;m++)A.indexOf(t[m])<0&&Object.prototype.propertyIsEnumerable.call(p,t[m])&&(k[t[m]]=p[t[m]]);return k};const f={[r.Xxs]:"xxs",[r.Xs]:"xs",[r.S]:"xs",[r.M]:"m",[r.L]:"m",[r.Xl]:"l",[r.Xxl]:"l"};function ae(p){var{name:A,appearance:k=D.Red,size:t=r.S,shape:m=M.Round,indicator:C,showTwoSymbols:V,src:n,className:O}=p,S=o(p,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[d,l]=(0,x.useState)(!1),w=t!==r.Xxs&&V?2:1;return(0,x.useEffect)(()=>{l(!1)},[n]),(0,s.jsxs)("div",Object.assign({className:g()(i.avatar,O)},(0,b.z7)(S),{"data-size":t,"data-appearance":k,"data-shape":m,children:[n&&!d?(0,s.jsx)("img",{"data-test-id":"image",className:i.image,src:n,onError:()=>l(!0),alt:""}):(0,s.jsx)("div",{"data-test-id":"abbreviation",children:P(A,w)}),C&&(0,s.jsx)("div",{className:i.indicatorWrapper,children:(0,s.jsx)(a.k,{"data-test-id":"indicator",appearance:C,size:f[t]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js":((z,c,e)=>{e.d(c,{B:()=>V});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),h=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(h),x=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),D=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),r=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),M=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),H=e.n(W),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),F=e.n(K),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),U=e.n(Q),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Y=e.n(X),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n($),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Z=e.n(j),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css"),u={};u.styleTagTransform=Z(),u.setAttributes=Y(),u.insert=U().bind(null,"head"),u.domAPI=F(),u.insertStyleElement=E();var se=H()(y.A,u);const i=y.A&&y.A.locals?y.A.locals:void 0,T=(0,a.forwardRef)(({listRef:n,tabIndex:O},S)=>{const d=(0,a.useCallback)(l=>{var w;l.relatedTarget!==n.current&&((w=n.current)===null||w===void 0||w.focus()),l.preventDefault(),l.stopPropagation()},[n]);return(0,s.jsx)("button",{type:"button","aria-hidden":!0,ref:S,onKeyDown:M.d,onFocus:d,className:i.hiddenBtn,tabIndex:O})});var P=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),o=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),f=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),ae=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),p=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),A=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),k=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),t=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),m=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),C=function(n,O){var S={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&O.indexOf(d)<0&&(S[d]=n[d]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,d=Object.getOwnPropertySymbols(n);l<d.length;l++)O.indexOf(d[l])<0&&Object.prototype.propertyIsEnumerable.call(n,d[l])&&(S[d[l]]=n[d[l]]);return S};const V=(0,a.forwardRef)((n,O)=>{var{items:S=[],search:d,pinBottom:l=[],pinTop:w=[],footerActiveElementsRefs:ge,onKeyDown:te,tabIndex:le=0,className:be,collapse:ke={},selection:N,contentRender:ze,size:je="s",marker:Se=!0,keyboardNavigationRef:Ie,hasListInFocusChain:ne=!0}=n,ce=C(n,["items","search","pinBottom","pinTop","footerActiveElementsRefs","onKeyDown","tabIndex","className","collapse","selection","contentRender","size","marker","keyboardNavigationRef","hasListInFocusChain"]);const ue=(0,a.useMemo)(()=>!!d,[d]),[oe=[],me]=(0,b.I)(ke),Pe=(0,a.useCallback)(_=>me(v=>v!=null&&v.includes(_)?v.filter(R=>R!==_):(v!=null?v:[]).concat([_])),[me]),{searchItem:G,footerItems:q}=(0,P.nG)({footerActiveElementsRefs:ge}),pe=(0,a.useMemo)(()=>{const _=(0,o.lg)({items:w,prefix:r.$.pinTop,parentId:r.$.default}),v=(0,o.lg)({items:S,prefix:r.$.default,parentId:r.$.default}),R=(0,o.lg)({items:l,prefix:r.$.pinBottom,parentId:r.$.default}),B=Object.assign(Object.assign(Object.assign({},_.flattenItems),R.flattenItems),v.flattenItems),L=Object.assign(Object.assign(Object.assign({},_.focusFlattenItems),R.focusFlattenItems),v.focusFlattenItems);return[...q,G].forEach(I=>{B[I.id]=I,L[I.id]=Object.assign(Object.assign({},I),{originalId:I.id,items:[],key:I.id,allChildIds:[]})}),{items:v,pinTop:_,pinBottom:R,flattenItems:B,focusFlattenItems:L}},[S,w,l,G,q]),{flattenItems:Ae,focusFlattenItems:_e}=pe,J=C(pe,["flattenItems","focusFlattenItems"]),{ids:re,expandedIds:ve}=(0,a.useMemo)(()=>{const{pinTop:_,items:v,pinBottom:R}=J;let B=[],L=[];return ue&&B.push(G.id),[_,v,R].forEach(({focusFlattenItems:I,focusCloseChildIds:Be})=>{const he=(0,o.e)({focusFlattenItems:I,focusCloseChildIds:Be,openCollapseItems:oe,isSelectionMultiple:(N==null?void 0:N.mode)==="multiple"});B=B.concat(he.ids),L=L.concat(he.expandedIds)}),q.forEach(I=>{B.push(I.id)}),{ids:B,expandedIds:L}},[q,ue,J,oe,G.id,N==null?void 0:N.mode]),ee=(0,a.useRef)(null),xe=(0,a.useRef)(null),ye=re[0],{handleListKeyDownFactory:de,activeItemId:fe,resetActiveItemId:Ee,forceUpdateActiveItemId:Te}=(0,k.d)({mainRef:ee,btnRef:xe,focusFlattenItems:_e,keyboardNavigationRef:Ie,hasListInFocusChain:ne,firstItemId:ye}),ie=(0,a.useCallback)(_=>de(re,ve)(_),[de,re,ve]),Ce=(0,D.B)()&&ee.current===document.activeElement&&fe===void 0,Oe=_=>{te==null||te(_),ie==null||ie(_)},we=()=>{Ee()};return(0,s.jsx)(f.Tr,{flattenItems:Ae,focusFlattenItems:_e,contentRender:ze,size:je,marker:Se,firstItemId:ye,virtualized:ce.virtualized,children:(0,s.jsx)(ae.WM,Object.assign({},N,{children:(0,s.jsx)(p.bN.Provider,{value:{openCollapseItems:oe,toggleOpenCollapseItem:Pe},children:(0,s.jsx)(A.m.Provider,{value:{activeItemId:fe,handleListKeyDownFactory:de,forceUpdateActiveItemId:Te},children:(0,s.jsxs)("div",{className:g()(m.A.wrapper,be),"data-active":Ce||void 0,children:[(0,s.jsx)(t.Q,Object.assign({},ce,{items:J.items.focusCloseChildIds,pinTop:J.pinTop.focusCloseChildIds,pinBottom:J.pinBottom.focusCloseChildIds,searchItem:G,ref:(0,x.A)(O,ee),onFocus:we,onKeyDown:Oe,tabIndex:ne?le:void 0,search:d,nested:!1})),ne&&(0,s.jsx)(T,{ref:xe,listRef:ee,tabIndex:le})]})})})}))})})}),"./node_modules/.pnpm/@snack-uikit+status@0.10.10_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js":((z,c,e)=>{e.d(c,{k:()=>se});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),h=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(h),x=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),a=e("./node_modules/.pnpm/@snack-uikit+status@0.10.10_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js"),b=e("./node_modules/.pnpm/@snack-uikit+status@0.10.10_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js"),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(D),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=e.n(M),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),K=e.n(H),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Q=e.n(F),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),X=e.n(U),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),$=e.n(Y),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.10_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),j={};j.styleTagTransform=$(),j.setAttributes=Q(),j.insert=K().bind(null,"head"),j.domAPI=W(),j.insertStyleElement=X();var Z=r()(E.A,j);const y=E.A&&E.A.locals?E.A.locals:void 0;var u=function(i,T){var P={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&T.indexOf(o)<0&&(P[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,o=Object.getOwnPropertySymbols(i);f<o.length;f++)T.indexOf(o[f])<0&&Object.prototype.propertyIsEnumerable.call(i,o[f])&&(P[o[f]]=i[o[f]]);return P};function se(i){var{size:T=b.S.M,appearance:P=a.x.Primary,className:o}=i,f=u(i,["size","appearance","className"]);return(0,s.jsx)("div",Object.assign({className:g()(y.container,o)},(0,x.z7)(f),{"data-size":T,children:(0,s.jsx)("div",{className:y.indicator,"data-appearance":P})}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.10_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js":((z,c,e)=>{e.d(c,{S:()=>s});const s={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.10_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js":((z,c,e)=>{e.d(c,{x:()=>s});const s={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.23_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((z,c,e)=>{e.d(c,{A:()=>b});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(s),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),x=e.n(g),a=x()(h());a.push([z.id,`.avatar--zNiC4{
  position:relative;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.avatar--zNiC4[data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.avatar--zNiC4[data-appearance=orange]{
  color:var(--sys-orange-text-main, #884c23);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.avatar--zNiC4[data-appearance=yellow]{
  color:var(--sys-yellow-text-main, #815f19);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.avatar--zNiC4[data-appearance=green]{
  color:var(--sys-green-text-main, #3d6035);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.avatar--zNiC4[data-appearance=blue]{
  color:var(--sys-blue-text-main, #2b537e);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.avatar--zNiC4[data-appearance=violet]{
  color:var(--sys-violet-text-main, #59446a);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.avatar--zNiC4[data-appearance=pink]{
  color:var(--sys-pink-text-main, #754158);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.avatar--zNiC4[data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.avatar--zNiC4[data-size=xxs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--zNiC4[data-size=xxs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxs, 8px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--zNiC4[data-size=xxs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxs, 4px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--zNiC4[data-size=xs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--zNiC4[data-size=xs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xs, 16px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--zNiC4[data-size=xs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xs, 4px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--zNiC4[data-size=s]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.avatar--zNiC4[data-size=s][data-shape=round]{
  border-radius:var(--radius-avatar-round-s, 24px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--zNiC4[data-size=s][data-shape=square]{
  border-radius:var(--radius-avatar-square-s, 4px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--zNiC4[data-size=m]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.avatar--zNiC4[data-size=m][data-shape=round]{
  border-radius:var(--radius-avatar-round-m, 24px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--zNiC4[data-size=m][data-shape=square]{
  border-radius:var(--radius-avatar-square-m, 8px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--zNiC4[data-size=l]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.avatar--zNiC4[data-size=l][data-shape=round]{
  border-radius:var(--radius-avatar-round-l, 32px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--zNiC4[data-size=l][data-shape=square]{
  border-radius:var(--radius-avatar-square-l, 12px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--zNiC4[data-size=xl]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.avatar--zNiC4[data-size=xl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xl, 48px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--zNiC4[data-size=xl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xl, 16px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--zNiC4[data-size=xxl]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.avatar--zNiC4[data-size=xxl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxl, 64px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}
.avatar--zNiC4[data-size=xxl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxl, 20px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}

.image--mPPJQ{
  width:100%;
  height:100%;
  -o-object-fit:cover;
     object-fit:cover;
  -o-object-position:center;
     object-position:center;
  border-radius:inherit;
}

.indicatorWrapper--lnE70{
  position:absolute;
  right:0;
  bottom:0;
  display:inline-flex;
}`,""]),a.locals={avatar:"avatar--zNiC4",image:"image--mPPJQ",indicatorWrapper:"indicatorWrapper--lnE70"};const b=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css":((z,c,e)=>{e.d(c,{A:()=>b});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(s),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),x=e.n(g),a=x()(h());a.push([z.id,`.hiddenBtn--x8iLV{
  position:absolute;
  width:0;
  height:0;
  margin:0;
  padding:0;
  border:none;
  outline:none;
}`,""]),a.locals={hiddenBtn:"hiddenBtn--x8iLV"};const b=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.10_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((z,c,e)=>{e.d(c,{A:()=>b});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(s),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),x=e.n(g),a=x()(h());a.push([z.id,`.container--pPRYs{
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.container--pPRYs[data-size=xxs]{
  width:var(--size-status-indicator-container-xxs, 4px);
  height:var(--size-status-indicator-container-xxs, 4px);
}
.container--pPRYs[data-size=xxs] .indicator--yHTwQ{
  border-radius:var(--radius-status-indicator-xxs, 2px);
  border-width:var(--border-width-general-xxs, 0.5px);
  width:var(--size-status-indicator-xxs, 4px);
  height:var(--size-status-indicator-xxs, 4px);
}
.container--pPRYs[data-size=xs]{
  width:var(--size-status-indicator-container-xs, 8px);
  height:var(--size-status-indicator-container-xs, 8px);
}
.container--pPRYs[data-size=xs] .indicator--yHTwQ{
  border-radius:var(--radius-status-indicator-xs, 4px);
  border-width:var(--border-width-general-s, 1.5px);
  width:var(--size-status-indicator-xs, 8px);
  height:var(--size-status-indicator-xs, 8px);
}
.container--pPRYs[data-size=s]{
  width:var(--size-status-indicator-container-s, 16px);
  height:var(--size-status-indicator-container-s, 16px);
}
.container--pPRYs[data-size=s] .indicator--yHTwQ{
  border-radius:var(--radius-status-indicator-s, 8px);
  border-width:var(--border-width-general-m, 2px);
  width:var(--size-status-indicator-s, 12px);
  height:var(--size-status-indicator-s, 12px);
}
.container--pPRYs[data-size=m]{
  width:var(--size-status-indicator-container-m, 16px);
  height:var(--size-status-indicator-container-m, 16px);
}
.container--pPRYs[data-size=m] .indicator--yHTwQ{
  border-radius:var(--radius-status-indicator-m, 8px);
  border-width:var(--border-width-general-l, 3px);
  width:var(--size-status-indicator-m, 16px);
  height:var(--size-status-indicator-m, 16px);
}
.container--pPRYs[data-size=l]{
  width:var(--size-status-indicator-container-l, 24px);
  height:var(--size-status-indicator-container-l, 24px);
}
.container--pPRYs[data-size=l] .indicator--yHTwQ{
  border-radius:var(--radius-status-indicator-l, 16px);
  border-width:var(--border-width-general-xl, 4px);
  width:var(--size-status-indicator-l, 24px);
  height:var(--size-status-indicator-l, 24px);
}

.indicator--yHTwQ{
  box-sizing:border-box;
  border:0 solid var(--sys-neutral-background1-level, #fdfdfd);
}
.indicator--yHTwQ[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.indicator--yHTwQ[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.indicator--yHTwQ[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.indicator--yHTwQ[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.indicator--yHTwQ[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.indicator--yHTwQ[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.indicator--yHTwQ[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.indicator--yHTwQ[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.indicator--yHTwQ[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),a.locals={container:"container--pPRYs",indicator:"indicator--yHTwQ"};const b=a})}]);})();
