"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7793],{"./node_modules/.pnpm/@snack-uikit+scroll@0.10.5_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js":((T,u,e)=>{e.d(u,{O:()=>R});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),t=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(t),n=e("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/overlayscrollbars.mjs"),b=e("./node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.11.1_react@18.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs"),i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),M=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");const I={S:"s",M:"m"},D={Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"},U={None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"},f={Bottom:"bottom",Right:"right"},Y=100,L=2;var w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),K=e.n(w),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),j=e.n(x),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),z=e.n(O),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=e.n(H),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n(p),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),a=e.n(c),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.5_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"),l={};l.styleTagTransform=a(),l.setAttributes=N(),l.insert=z().bind(null,"head"),l.domAPI=j(),l.insertStyleElement=E();var h=K()(r.A,l);const Q=r.A&&r.A.locals?r.A.locals:void 0;var Z=function(k,A){var P={};for(var v in k)Object.prototype.hasOwnProperty.call(k,v)&&A.indexOf(v)<0&&(P[v]=k[v]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,v=Object.getOwnPropertySymbols(k);g<v.length;g++)A.indexOf(v[g])<0&&Object.prototype.propertyIsEnumerable.call(k,v[g])&&(P[v[g]]=k[v[g]]);return P};const V=n.ae.nonce,R=(0,i.forwardRef)(function(A,P){var{children:v,className:g,onScroll:C,onInitialized:B,size:J=I.M,resize:q=U.None,clickScrolling:ee=!0,barHideStrategy:se=D.Leave,autoscrollTo:S,paddingAbsolute:oe,untouchableScrollbars:le=!1}=A,te=Z(A,["children","className","onScroll","onInitialized","size","resize","clickScrolling","barHideStrategy","autoscrollTo","paddingAbsolute","untouchableScrollbars"]);const X=(0,i.useRef)(null),[$,ne]=(0,i.useState)(!1),W=(0,i.useCallback)((d=X.current)=>d==null?void 0:d.osInstance(),[X]);(0,i.useImperativeHandle)(P,()=>{var d,s,y;return(y=(s=(d=X.current)===null||d===void 0?void 0:d.osInstance())===null||s===void 0?void 0:s.elements().viewport)!==null&&y!==void 0?y:null});const F=(0,i.useRef)({scrolledToBottom:!1,scrolledToRight:!1}),G=(0,i.useCallback)(d=>{const s=W(d);if(s){const{viewport:y}=s.elements(),ie=y.scrollHeight-(y.offsetHeight+y.scrollTop),ce=y.scrollWidth-(y.offsetWidth+y.scrollLeft),ue=y.scrollHeight>y.offsetHeight,me=y.scrollWidth>y.offsetWidth;F.current.scrolledToBottom=ie<L||!ue,F.current.scrolledToRight=ce<L||!me}},[W]);(0,M.N)(()=>{if(!S){B==null||B();return}const d=W();if(d&&$){G();const{content:s}=d.elements();S===f.Bottom&&s.scroll(0,s.scrollHeight),S===f.Right&&s.scroll(s.scrollWidth,0)}B==null||B()},[W,$,G]);const ae=(0,i.useCallback)(()=>{ne(!0)},[]),re=(0,i.useCallback)(d=>{C==null||C(d),S&&G()},[C,G]),de=(0,i.useCallback)(()=>{var d;if(!S)return;const s=(d=W())===null||d===void 0?void 0:d.elements();s!=null&&s.content&&(F.current.scrolledToBottom&&S===f.Bottom&&(s==null||s.content.scroll(0,s==null?void 0:s.content.scrollHeight)),F.current.scrolledToRight&&S===f.Right&&(s==null||s.content.scroll(s==null?void 0:s.content.scrollWidth,0)))},[W,S]);return(0,o.jsx)(b.r,Object.assign({},te,{ref:X,"data-size":J,"data-untouchable-scrollbars":le||void 0,className:m()(g,Q.scroll,"osThemeSnack"),style:{resize:q},options:{paddingAbsolute:oe,scrollbars:{autoHide:se,autoHideDelay:Y,clickScroll:ee}},events:{initialized:ae,scroll:(d,s)=>{re(s)},updated:de},children:S?$&&v:v}))})}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js":((T,u,e)=>{e.d(u,{E:()=>N});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),t=e.n(_),m=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(n),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),M=e.n(i),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=e.n(I),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),f=e.n(U),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),L=e.n(Y),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(w),x=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"),j={};j.styleTagTransform=K(),j.setAttributes=f(),j.insert=D().bind(null,"head"),j.domAPI=M(),j.insertStyleElement=L();var O=b()(x.A,j);const z=x.A&&x.A.locals?x.A.locals:void 0;var H=function(p,E){var c={};for(var a in p)Object.prototype.hasOwnProperty.call(p,a)&&E.indexOf(a)<0&&(c[a]=p[a]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(p);r<a.length;r++)E.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(p,a[r])&&(c[a[r]]=p[a[r]]);return c};function N(p){var{width:E,height:c,className:a,borderRadius:r,loading:l,children:h}=p,Q=H(p,["width","height","className","borderRadius","loading","children"]);return(0,m.v)(l)?(0,o.jsx)("div",Object.assign({},Q,{style:{width:E,height:c,borderRadius:r},className:t()(z.skeleton,a)})):(0,o.jsx)(o.Fragment,{children:h})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/SkeletonText/SkeletonText.js":((T,u,e)=>{e.d(u,{r:()=>E});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),t=e.n(_),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"),b=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js"),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),M=e.n(i),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),D=e.n(I),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),f=e.n(U),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=e.n(Y),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),K=e.n(w),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),j=e.n(x),O=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/SkeletonText/styles.module.css"),z={};z.styleTagTransform=j(),z.setAttributes=L(),z.insert=f().bind(null,"head"),z.domAPI=D(),z.insertStyleElement=K();var H=M()(O.A,z);const N=O.A&&O.A.locals?O.A.locals:void 0;var p=function(c,a){var r={};for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&a.indexOf(l)<0&&(r[l]=c[l]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,l=Object.getOwnPropertySymbols(c);h<l.length;h++)a.indexOf(l[h])<0&&Object.prototype.propertyIsEnumerable.call(c,l[h])&&(r[l[h]]=c[l[h]]);return r};function E(c){var{width:a,className:r,rowClassName:l,lineClassName:h,children:Q,loading:Z,lines:V=3,typography:R="body-m"}=c,k=p(c,["width","className","rowClassName","lineClassName","children","loading","lines","typography"]);const A=k["data-test-id"]?`${k["data-test-id"]}_line`:void 0,P=(0,m.useMemo)(()=>Array(V).fill(!0).map((g,C)=>(0,o.jsx)("div",{className:t()(N.skeletonTextRow,l),style:{lineHeight:`var(--size-skeleton-text-line-height-${R})`},children:(0,o.jsx)(b.E,{"data-test-id":A,loading:!0,height:`var(--size-skeleton-text-font-size-${R})`,borderRadius:`var(--radius-skeleton-text-${R})`,className:t()(N.skeletonTextLine,h)})},C)),[V,l,A,R,h]);return(0,n.v)(Z)?(0,o.jsx)("div",Object.assign({},k,{className:t()(r,N.skeletonText),style:{width:a},children:P})):(0,o.jsx)(o.Fragment,{children:Q})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/WithSkeleton/WithSkeleton.js":((T,u,e)=>{e.d(u,{S:()=>m});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js"),t=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js");function m({children:n,skeleton:b,loading:i}){return(0,t.v)(i)?(0,o.jsx)(_.Q,{loading:!0,children:b}):(0,o.jsx)(o.Fragment,{children:n})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js":((T,u,e)=>{e.d(u,{Q:()=>m,r:()=>t});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const t=(0,_.createContext)(!1);function m({loading:n,children:b}){return(0,o.jsx)(t.Provider,{value:n,children:b})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js":((T,u,e)=>{e.d(u,{v:()=>t});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js");function t(m){return(0,o.useContext)(_.r)||m}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.5_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css":((T,u,e)=>{e.d(u,{A:()=>D});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(o),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(t),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/getUrl.js"),b=e.n(n),i=new URL(e("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),e.b),M=m()(_()),I=b()(i);M.push([T.id,`@charset "UTF-8";
.scroll--UF9yV{
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
}
.osThemeSnack .os-scrollbar{
  padding:0;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical > .os-scrollbar-track{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal > .os-scrollbar-track{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  pointer-events:none;
}
.osThemeSnack[data-size=s] > .os-scrollbar-vertical{
  width:var(--size-scroll-track-s, 8px);
  pointer-events:none;
  overflow:hidden;
}
.osThemeSnack[data-size=s] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  width:var(--size-scroll-slider-s, 4px);
  border-radius:var(--radius-scroll-slider-s, 2px);
}
.osThemeSnack[data-size=s] > .os-scrollbar-horizontal{
  height:var(--size-scroll-track-s, 8px);
  pointer-events:none;
  overflow:hidden;
}
.osThemeSnack[data-size=s] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  height:var(--size-scroll-slider-s, 4px);
  border-radius:var(--radius-scroll-slider-s, 2px);
}
.osThemeSnack[data-size=s].os-host-resize-disabled > .os-scrollbar-horizontal{
  right:var(--size-scroll-track-s, 8px);
}
.osThemeSnack[data-size=s].os-host-resize-disabled.os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-track-s, 8px);
}
.osThemeSnack[data-size=s].os-host-resize-disabled > .os-scrollbar-vertical{
  bottom:var(--size-scroll-track-s, 8px);
}
.osThemeSnack[data-size=s] > .os-scrollbar-horizontal{
  right:var(--size-scroll-button-resize, 16px);
}
.osThemeSnack[data-size=s].os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-button-resize, 16px);
}
.osThemeSnack[data-size=s] > .os-scrollbar-vertical{
  bottom:var(--size-scroll-button-resize, 16px);
}
.osThemeSnack[data-size=m] > .os-scrollbar-vertical{
  width:var(--size-scroll-track-m, 16px);
  pointer-events:none;
  overflow:hidden;
}
.osThemeSnack[data-size=m] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  width:var(--size-scroll-slider-m, 6px);
  border-radius:var(--radius-scroll-slider-m, 4px);
}
.osThemeSnack[data-size=m] > .os-scrollbar-horizontal{
  height:var(--size-scroll-track-m, 16px);
  pointer-events:none;
  overflow:hidden;
}
.osThemeSnack[data-size=m] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  height:var(--size-scroll-slider-m, 6px);
  border-radius:var(--radius-scroll-slider-m, 4px);
}
.osThemeSnack[data-size=m].os-host-resize-disabled > .os-scrollbar-horizontal{
  right:var(--size-scroll-track-m, 16px);
}
.osThemeSnack[data-size=m].os-host-resize-disabled.os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-track-m, 16px);
}
.osThemeSnack[data-size=m].os-host-resize-disabled > .os-scrollbar-vertical{
  bottom:var(--size-scroll-track-m, 16px);
}
.osThemeSnack[data-size=m] > .os-scrollbar-horizontal{
  right:var(--size-scroll-button-resize, 16px);
}
.osThemeSnack[data-size=m].os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-button-resize, 16px);
}
.osThemeSnack[data-size=m] > .os-scrollbar-vertical{
  bottom:var(--size-scroll-button-resize, 16px);
}
.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  opacity:var(--opacity-a032, 0.32);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle.active, .osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle:hover{
  opacity:var(--opacity-a064, 0.64);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  opacity:var(--opacity-a032, 0.32);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle.active, .osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle:hover{
  opacity:var(--opacity-a064, 0.64);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  left:50%;
  translate:-50%;
}
.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle::before{
  right:-12px;
  left:-12px;
}
.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  top:50%;
  translate:0 -50%;
}
.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle::before{
  top:-12px;
  bottom:-12px;
}
.osThemeSnack > .os-scrollbar-corner{
  --bg-icon-mask:url(${I});
  width:var(--size-scroll-button-resize, 16px);
  height:var(--size-scroll-button-resize, 16px);
  z-index:0;
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
  background-image:unset;
  -webkit-mask-image:var(--bg-icon-mask);
  mask-image:var(--bg-icon-mask);
}
.osThemeSnack > .os-scrollbar-corner:hover{
  background-color:var(--sys-neutral-text-support, #6d707f);
}
.os-dragging .osThemeSnack > .os-scrollbar-corner:hover{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.osThemeSnack.os-host-resize-disabled > .os-scrollbar-corner{
  display:none;
}`,""]),M.locals={scroll:"scroll--UF9yV"};const D=M}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css":((T,u,e)=>{e.d(u,{A:()=>b});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(o),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(t),n=m()(_());n.push([T.id,`.skeleton--VMjrg{
  box-sizing:border-box;
  width:100%;
  height:1em;
  background:var(--gradient-skeleton, linear-gradient(115deg, rgba(36, 36, 48, 0.0784313725) 40%, rgba(36, 36, 48, 0) 50%, rgba(36, 36, 48, 0.0784313725) 60%)) 0 0/200% 100% repeat fixed;
  animation:loading--g2Bh0 2s infinite linear;
}
@keyframes loading--g2Bh0{
  to{
    background-position:-200% 0;
  }
}`,""]),n.locals={skeleton:"skeleton--VMjrg",loading:"loading--g2Bh0"};const b=n}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/SkeletonText/styles.module.css":((T,u,e)=>{e.d(u,{A:()=>b});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(o),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(t),n=m()(_());n.push([T.id,`.skeletonText--P32Gm{
  position:relative;
}

.skeletonTextLine--P67zf{
  display:inline-block;
  height:0.8em;
  margin-top:0;
  margin-bottom:0;
  vertical-align:middle;
}

.skeletonTextRow--Xi88a{
  display:inline;
}

.skeletonTextRow--Xi88a + .skeletonTextRow--Xi88a:last-child .skeletonTextLine--P67zf{
  width:65%;
}`,""]),n.locals={skeletonText:"skeletonText--P32Gm",skeletonTextLine:"skeletonTextLine--P67zf",skeletonTextRow:"skeletonTextRow--Xi88a"};const b=n})}]);})();
