"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2312,9931],{"./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js"(y,d,e){e.d(d,{B:()=>be});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),o=e.n(l),a=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),R=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),j=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),W=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),z=e.n(X),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),K=e.n(H),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),x=e.n(I),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(J),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Z=e.n(S),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),$=e.n(V),O=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css"),n={};n.styleTagTransform=$(),n.setAttributes=M(),n.insert=x().bind(null,"head"),n.domAPI=K(),n.insertStyleElement=Z();var T=z()(O.A,n);const m=O.A&&O.A.locals?O.A.locals:void 0,_=(0,s.forwardRef)(({listRef:k,tabIndex:F},D)=>{const i=(0,s.useCallback)(f=>{var N;f.relatedTarget!==k.current&&((N=k.current)===null||N===void 0||N.focus()),f.preventDefault(),f.stopPropagation()},[k]);return(0,t.jsx)("button",{type:"button","aria-hidden":!0,ref:D,onKeyDown:W.d,onFocus:i,className:m.hiddenBtn,tabIndex:F})});var b=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),A=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),U=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),Y=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),q=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),r=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),P=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),g=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),u=e("./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),p=function(k,F){var D={};for(var i in k)Object.prototype.hasOwnProperty.call(k,i)&&F.indexOf(i)<0&&(D[i]=k[i]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,i=Object.getOwnPropertySymbols(k);f<i.length;f++)F.indexOf(i[f])<0&&Object.prototype.propertyIsEnumerable.call(k,i[f])&&(D[i[f]]=k[i[f]]);return D};const be=(0,s.forwardRef)((k,F)=>{var{items:D=[],search:i,pinBottom:f=[],pinTop:N=[],footerActiveElementsRefs:ge,onKeyDown:te,tabIndex:re=0,className:je,collapse:ie={},selection:C,contentRender:xe,size:Se="s",marker:Te=!0,keyboardNavigationRef:Ee,hasListInFocusChain:oe=!0}=k,ce=p(k,["items","search","pinBottom","pinTop","footerActiveElementsRefs","onKeyDown","tabIndex","className","collapse","selection","contentRender","size","marker","keyboardNavigationRef","hasListInFocusChain"]);const _e=(0,s.useMemo)(()=>!!i,[i]),[ne=[],me]=(0,c.I)(ie),Ie=(0,s.useCallback)(v=>me(h=>h!=null&&h.includes(v)?h.filter(L=>L!==v):(h!=null?h:[]).concat([v])),[me]),{searchItem:Q,footerItems:ee}=(0,b.nG)({footerActiveElementsRefs:ge}),ue=(0,s.useMemo)(()=>{const v=(0,A.lg)({items:N,prefix:j.$.pinTop,parentId:j.$.default}),h=(0,A.lg)({items:D,prefix:j.$.default,parentId:j.$.default}),L=(0,A.lg)({items:f,prefix:j.$.pinBottom,parentId:j.$.default}),B=Object.assign(Object.assign(Object.assign({},v.flattenItems),L.flattenItems),h.flattenItems),w=Object.assign(Object.assign(Object.assign({},v.focusFlattenItems),L.focusFlattenItems),h.focusFlattenItems);return[...ee,Q].forEach(E=>{B[E.id]=E,w[E.id]=Object.assign(Object.assign({},E),{originalId:E.id,items:[],key:E.id,allChildIds:[]})}),{items:h,pinTop:v,pinBottom:L,flattenItems:B,focusFlattenItems:w}},[D,N,f,Q,ee]),{flattenItems:Oe,focusFlattenItems:pe}=ue,G=p(ue,["flattenItems","focusFlattenItems"]),{ids:de,expandedIds:ke}=(0,s.useMemo)(()=>{const{pinTop:v,items:h,pinBottom:L}=G;let B=[],w=[];return _e&&B.push(Q.id),[v,h,L].forEach(({focusFlattenItems:E,focusCloseChildIds:Ce})=>{const ye=(0,A.e)({focusFlattenItems:E,focusCloseChildIds:Ce,openCollapseItems:ne,isSelectionMultiple:(C==null?void 0:C.mode)==="multiple"});B=B.concat(ye.ids),w=w.concat(ye.expandedIds)}),ee.forEach(E=>{B.push(E.id)}),{ids:B,expandedIds:w}},[ee,_e,G,ne,Q.id,C==null?void 0:C.mode]),se=(0,s.useRef)(null),ve=(0,s.useRef)(null),fe=de[0],{handleListKeyDownFactory:le,activeItemId:he,resetActiveItemId:Ae,forceUpdateActiveItemId:Pe}=(0,P.d)({mainRef:se,btnRef:ve,focusFlattenItems:pe,keyboardNavigationRef:Ee,hasListInFocusChain:oe,firstItemId:fe}),ae=(0,s.useCallback)(v=>le(de,ke)(v),[le,de,ke]),De=(0,R.B)()&&se.current===document.activeElement&&he===void 0,Be=v=>{te==null||te(v),ae==null||ae(v)},Me=()=>{Ae()};return(0,t.jsx)(U.Tr,{flattenItems:Oe,focusFlattenItems:pe,contentRender:xe,size:Se,marker:Te,firstItemId:fe,virtualized:ce.virtualized,children:(0,t.jsx)(Y.WM,Object.assign({},C,{children:(0,t.jsx)(q.bN.Provider,{value:{openCollapseItems:ne,toggleOpenCollapseItem:Ie,toggleOn:ie.toggleOn},children:(0,t.jsx)(r.m.Provider,{value:{activeItemId:he,handleListKeyDownFactory:le,forceUpdateActiveItemId:Pe},children:(0,t.jsxs)("div",{className:o()(u.A.wrapper,je),"data-active":De||void 0,children:[(0,t.jsx)(g.Q,Object.assign({},ce,{items:G.items.focusCloseChildIds,pinTop:G.pinTop.focusCloseChildIds,pinBottom:G.pinBottom.focusCloseChildIds,searchItem:Q,ref:(0,a.A)(F,se),onFocus:Me,onKeyDown:Be,tabIndex:oe?re:void 0,search:i,nested:!1})),oe&&(0,t.jsx)(_,{ref:ve,listRef:se,tabIndex:re})]})})})}))})})},"./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js"(y,d,e){e.d(d,{E:()=>O});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),o=e.n(l),a=e("./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(s),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),j=e.n(R),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),X=e.n(W),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),H=e.n(z),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=e.n(K),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),J=e.n(x),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"),S={};S.styleTagTransform=J(),S.setAttributes=H(),S.insert=X().bind(null,"head"),S.domAPI=j(),S.insertStyleElement=I();var Z=c()(M.A,S);const V=M.A&&M.A.locals?M.A.locals:void 0;var $=function(n,T){var m={};for(var _ in n)Object.prototype.hasOwnProperty.call(n,_)&&T.indexOf(_)<0&&(m[_]=n[_]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,_=Object.getOwnPropertySymbols(n);b<_.length;b++)T.indexOf(_[b])<0&&Object.prototype.propertyIsEnumerable.call(n,_[b])&&(m[_[b]]=n[_[b]]);return m};function O(n){var{width:T,height:m,className:_,borderRadius:b,loading:A,children:U}=n,Y=$(n,["width","height","className","borderRadius","loading","children"]);return(0,a.v)(A)?(0,t.jsx)("div",Object.assign({},Y,{style:{width:T,height:m,borderRadius:b},className:o()(V.skeleton,_)})):(0,t.jsx)(t.Fragment,{children:U})}},"./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js"(y,d,e){e.d(d,{Q:()=>a,r:()=>o});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const o=(0,l.createContext)(!1);function a({loading:s,children:c}){return(0,t.jsx)(o.Provider,{value:s,children:c})}},"./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"(y,d,e){e.d(d,{v:()=>o});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js");function o(a){return(0,t.useContext)(l.r)||a}},"./node_modules/.pnpm/@snack-uikit+slider@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/Slider.js"(y,d,e){e.d(d,{A:()=>q});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(l),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=e.n(a),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),R=e.n(c),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),W=e.n(j),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(X),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(H),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/slider.css"),x={};x.styleTagTransform=K(),x.setAttributes=W(),x.insert=R().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=z();var J=o()(I.A,x);const M=I.A&&I.A.locals?I.A.locals:void 0;var S=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),Z=e.n(S),V=e("./node_modules/.pnpm/rc-slider@10.5.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-slider/es/index.js"),$=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("./node_modules/.pnpm/@snack-uikit+tooltip@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),n=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/styles.module.css"),m={};m.styleTagTransform=K(),m.setAttributes=W(),m.insert=R().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=z();var _=o()(T.A,m);const b=T.A&&T.A.locals?T.A.locals:void 0;var A=function(r,P){var g={};for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&P.indexOf(u)<0&&(g[u]=r[u]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,u=Object.getOwnPropertySymbols(r);p<u.length;p++)P.indexOf(u[p])<0&&Object.prototype.propertyIsEnumerable.call(r,u[p])&&(g[u[p]]=r[u[p]]);return g};const U=r=>(0,$.cloneElement)(r,{[n.a]:"Left Right"}),Y=r=>function(P,g){return(0,t.jsx)(O.m,{tip:r?r(g.value):g.value,open:g.dragging||void 0,disableSpanWrapper:!0,trigger:"hoverAndFocusVisible",className:b.tipWrapper,children:U(P)})};function q(r){var{className:P,handleTip:g,tipFormatter:u}=r,p=A(r,["className","handleTip","tipFormatter"]);return(0,t.jsx)(V.A,Object.assign({className:Z()("osThemeSnack",P,{withMarks:!!p.marks,reverse:!!p.reverse}),handleRender:g?Y(u):U},p),JSON.stringify(p.marks))}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@1.0.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css"(y,d,e){e.d(d,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(t),o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(o),s=a()(l());s.push([y.id,`.hiddenBtn--SmYj6{
  position:absolute;
  width:0;
  height:0;
  margin:0;
  padding:0;
  border:none;
  outline:none;
}`,""]),s.locals={hiddenBtn:"hiddenBtn--SmYj6"};const c=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@1.0.1_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"(y,d,e){e.d(d,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(t),o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(o),s=a()(l());s.push([y.id,`.skeleton--eoxVX{
  box-sizing:border-box;
  width:100%;
  height:1em;
  background:var(--gradient-skeleton, linear-gradient(115deg, rgba(36, 36, 48, 0.0784313725) 40%, rgba(36, 36, 48, 0) 50%, rgba(36, 36, 48, 0.0784313725) 60%)) 0 0/200% 100% repeat fixed;
  animation:loading--lsY7O 2s infinite linear;
}
@keyframes loading--lsY7O{
  to{
    background-position:-200% 0;
  }
}`,""]),s.locals={skeleton:"skeleton--eoxVX",loading:"loading--lsY7O"};const c=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/slider.css"(y,d,e){e.d(d,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(t),o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(o),s=a()(l());s.push([y.id,`.osThemeSnack.rc-slider{
  touch-action:none;
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:var(--size-slider-handle, 16px);
  padding:calc((var(--size-slider-handle, 16px) - var(--size-slider-track-line, 2px)) / 2) 0;
}

.osThemeSnack.rc-slider *{
  box-sizing:border-box;
}

.osThemeSnack.rc-slider .rc-slider-rail{
  height:var(--size-slider-track-line, 2px);
  border-radius:var(--dimension-theme-general-2px, 2px);
  position:absolute;
  width:100%;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.osThemeSnack.rc-slider .rc-slider-track,
.osThemeSnack.rc-slider .rc-slider-tracks{
  height:var(--size-slider-track-line, 2px);
  border-radius:var(--dimension-theme-general-2px, 2px);
  position:absolute;
  display:block;
  background-color:var(--sys-primary-accent-default, #389f74);
}

.osThemeSnack.rc-slider .rc-slider-track-draggable{
  box-sizing:content-box;
  background-clip:content-box;
}

.osThemeSnack.rc-slider .rc-slider-handle{
  width:var(--size-slider-handle, 16px);
  height:var(--size-slider-handle, 16px);
  border-radius:var(--radius-slider-handle, 16px);
  touch-action:pan-x;
  cursor:grab;
  position:absolute;
  z-index:1;
  margin-top:calc(0px - (var(--size-slider-handle, 16px) - var(--size-slider-track-line, 2px)) / 2);
  opacity:1;
  background-color:var(--sys-primary-accent-default, #389f74);
  border:none;
  box-shadow:none;
}
.osThemeSnack.rc-slider .rc-slider-handle::after{
  content:"";
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  width:200%;
  height:100%;
}
.osThemeSnack.rc-slider .rc-slider-handle:hover{
  background-color:var(--sys-primary-accent-hovered, #37946e);
}
.osThemeSnack.rc-slider .rc-slider-handle:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  background-color:var(--sys-primary-accent-hovered, #37946e);
  outline-color:var(--sys-primary-accent-default, #389f74);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.osThemeSnack.rc-slider .rc-slider-handle:active{
  cursor:grabbing;
  background-color:var(--sys-primary-accent-hovered, #37946e);
}

.osThemeSnack.rc-slider .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  background-color:var(--sys-primary-accent-hovered, #37946e);
  outline-color:var(--sys-primary-accent-default, #389f74);
  outline-offset:var(--spacing-state-focus-offset, 2px);
  box-shadow:none;
}

.osThemeSnack.rc-slider .rc-slider-mark{
  position:absolute;
  top:calc(var(--size-slider-handle, 16px) + var(--size-slider-scale-bar-step-height, 4px) + var(--space-slider-scale-bar-step-gap, 4px));
  left:0;
  width:100%;
}

.osThemeSnack.rc-slider .rc-slider-mark-text{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  cursor:pointer;
  position:absolute;
  display:inline-block;
  color:var(--sys-neutral-text-support, #6d707f);
  text-align:center;
  vertical-align:middle;
}
.osThemeSnack.rc-slider .rc-slider-mark-text::before{
  height:var(--size-slider-scale-bar-step-height, 4px);
  border-radius:var(--radius-slider-scale-bar-step-line, 2px);
  content:"";
  position:absolute;
  top:calc(0px - (var(--size-slider-scale-bar-step-height, 4px) + var(--space-slider-scale-bar-step-gap, 4px)));
  left:50%;
  transform:translateX(-50%);
  width:var(--size-slider-track-line, 2px);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.osThemeSnack.rc-slider .rc-slider-mark-text:nth-child(1){
  transform:none !important;
}
.osThemeSnack.rc-slider .rc-slider-mark-text:nth-child(1)::before{
  left:0;
  transform:none;
}

.osThemeSnack.rc-slider .rc-slider-mark-text:last-child{
  transform:translateX(-100%) !important;
}
.osThemeSnack.rc-slider .rc-slider-mark-text:last-child::before{
  right:0;
  left:auto;
  transform:none;
}

.osThemeSnack.rc-slider .rc-slider-mark-text-active{
  color:var(--sys-neutral-text-support, #6d707f);
}

.osThemeSnack.rc-slider .rc-slider-step{
  position:absolute;
  width:100%;
  height:calc(var(--size-slider-track-line, 2px) * 2);
  background:transparent;
}

.osThemeSnack.rc-slider.rc-slider-disabled{
  background-color:transparent;
}
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-track,
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-handle{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-mark-text,
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-dot,
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-track,
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-handle{
  cursor:not-allowed !important;
}

.osThemeSnack.rc-slider .rc-slider-dot{
  display:none;
}

.osThemeSnack.rc-slider.withMarks{
  height:calc(var(--size-slider-handle, 16px) + var(--size-slider-scale-bar-step-height, 4px) + var(--space-slider-scale-bar-step-gap, 4px) + var(--sans-body-s-line-height, 16px));
}

.osThemeSnack.rc-slider.reverse .rc-slider-mark-text:nth-child(1){
  transform:none !important;
}
.osThemeSnack.rc-slider.reverse .rc-slider-mark-text:nth-child(1)::before{
  right:0;
  left:auto;
  transform:none;
}

.osThemeSnack.rc-slider.reverse .rc-slider-mark-text:last-child{
  transform:translateX(100%) !important;
}
.osThemeSnack.rc-slider.reverse .rc-slider-mark-text:last-child::before{
  left:0;
  transform:none;
}`,""]);const c=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/styles.module.css"(y,d,e){e.d(d,{A:()=>c});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(t),o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(o),s=a()(l());s.push([y.id,`.tipWrapper--oGqbQ{
  display:block;
  text-align:center;
}`,""]),s.locals={tipWrapper:"tipWrapper--oGqbQ"};const c=s}}]);})();
