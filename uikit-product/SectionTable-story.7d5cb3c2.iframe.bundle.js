"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9052],{"./node_modules/.pnpm/@snack-uikit+scroll@0.9.4_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js":((m,t,e)=>{e.d(t,{O:()=>L});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/overlayscrollbars@2.8.2/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),a=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),c=e.n(a),n=e("./node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.8.2_react@18.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),E=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");const g={S:"s",M:"m"},k={Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"},x={None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"},j={Bottom:"bottom",Right:"right"},N=100,S=2;var h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(h),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),K=e.n(B),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),O=e.n(Y),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Q=e.n(z),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=e.n(y),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(T),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.9.4_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"),u={};u.styleTagTransform=C(),u.setAttributes=Q(),u.insert=O().bind(null,"head"),u.domAPI=K(),u.insertStyleElement=M();var H=R()(A.A,u);const P=A.A&&A.A.locals?A.A.locals:void 0;var w=function(v,f){var _={};for(var d in v)Object.prototype.hasOwnProperty.call(v,d)&&f.indexOf(d)<0&&(_[d]=v[d]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,d=Object.getOwnPropertySymbols(v);p<d.length;p++)f.indexOf(d[p])<0&&Object.prototype.propertyIsEnumerable.call(v,d[p])&&(_[d[p]]=v[d[p]]);return _};const L=(0,o.forwardRef)(function(f,_){var{children:d,className:p,onScroll:W,onInitialized:D,size:G=g.M,resize:V=x.None,clickScrolling:X=!0,barHideStrategy:q=k.Leave,autoscrollTo:I,paddingAbsolute:ee,untouchableScrollbars:se=!1}=f,le=w(f,["children","className","onScroll","onInitialized","size","resize","clickScrolling","barHideStrategy","autoscrollTo","paddingAbsolute","untouchableScrollbars"]);const Z=(0,o.useRef)(null),[$,oe]=(0,o.useState)(!1),U=(0,o.useCallback)((r=Z.current)=>r==null?void 0:r.osInstance(),[Z]);(0,o.useImperativeHandle)(_,()=>{var r,l,b;return(b=(l=(r=Z.current)===null||r===void 0?void 0:r.osInstance())===null||l===void 0?void 0:l.elements().viewport)!==null&&b!==void 0?b:null});const F=(0,o.useRef)({scrolledToBottom:!1,scrolledToRight:!1}),J=(0,o.useCallback)(r=>{const l=U(r);if(l){const{viewport:b}=l.elements(),de=b.scrollHeight-(b.offsetHeight+b.scrollTop),re=b.scrollWidth-(b.offsetWidth+b.scrollLeft),_e=b.scrollHeight>b.offsetHeight,ie=b.scrollWidth>b.offsetWidth;F.current.scrolledToBottom=de<S||!_e,F.current.scrolledToRight=re<S||!ie}},[U]);(0,E.N)(()=>{if(!I){D==null||D();return}const r=U();if(r&&$){J();const{content:l}=r.elements();I===j.Bottom&&l.scroll(0,l.scrollHeight),I===j.Right&&l.scroll(l.scrollWidth,0)}D==null||D()},[U,$,J]);const te=(0,o.useCallback)(()=>{oe(!0)},[]),ae=(0,o.useCallback)(r=>{W==null||W(r),I&&J()},[W,J]),ne=(0,o.useCallback)(()=>{var r;if(!I)return;const l=(r=U())===null||r===void 0?void 0:r.elements();l!=null&&l.content&&(F.current.scrolledToBottom&&I===j.Bottom&&(l==null||l.content.scroll(0,l==null?void 0:l.content.scrollHeight)),F.current.scrolledToRight&&I===j.Right&&(l==null||l.content.scroll(l==null?void 0:l.content.scrollWidth,0)))},[U,I]);return(0,s.jsx)(n.r,Object.assign({},le,{ref:Z,"data-size":G,"data-untouchable-scrollbars":se||void 0,className:c()(p,P.scroll,"osThemeSnack"),style:{resize:V},options:{paddingAbsolute:ee,scrollbars:{autoHide:q,autoHideDelay:N,clickScroll:X}},events:{initialized:te,scroll:(r,l)=>{ae(l)},updated:ne},children:I?$&&d:d}))})}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js":((m,t,e)=>{e.d(t,{N:()=>a});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const a=(0,i.B)()?s.useLayoutEffect:s.useEffect}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js":((m,t,e)=>{e.d(t,{B:()=>s});function s(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.9.4_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css":((m,t,e)=>{e.d(t,{A:()=>x});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/getUrl.js"),o=e.n(n),E=new URL(e("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),e.b),g=c()(i()),k=o()(E);g.push([m.id,`@charset "UTF-8";
.scroll--ncSOY{
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
  --bg-icon-mask:url(${k});
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
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.osThemeSnack.os-host-resize-disabled > .os-scrollbar-corner{
  display:none;
}`,""]),g.locals={scroll:"scroll--ncSOY"};const x=g}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-section/src/components/SectionTable/styles.module.scss":((m,t,e)=>{e.d(t,{A:()=>o});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),n=c()(i());n.push([m.id,".sectionTable--Y5iWB{width:100%;position:relative}.subtitle--GhuzK{font-family:var(--sans-title-m-font-family, SB Sans Display);font-weight:var(--sans-title-m-font-weight, Semibold);line-height:var(--sans-title-m-line-height, 24px);font-size:var(--sans-title-m-font-size, 16px);letter-spacing:var(--sans-title-m-letter-spacing, 0px);paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);color:var(--sys-neutral-text-main, #41424e)}.description--tyoJI{font-family:var(--sans-body-l-font-family, SB Sans Text);font-weight:var(--sans-body-l-font-weight, Regular);line-height:var(--sans-body-l-line-height, 24px);font-size:var(--sans-body-l-font-size, 16px);letter-spacing:var(--sans-body-l-letter-spacing, 0px);paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);color:var(--sys-neutral-text-support, #656774);word-break:break-word}",""]),n.locals={sectionTable:"sectionTable--Y5iWB",subtitle:"subtitle--GhuzK",description:"description--tyoJI"};const o=n}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-section/stories/styles.module.scss":((m,t,e)=>{e.d(t,{A:()=>o});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),n=c()(i());n.push([m.id,".resizeWrapper--LJwsk{resize:both;overflow:auto;background-color:var(--sys-neutral-background1-level, #fdfdfd);border:1px solid var(--sys-neutral-decor-default, #dde0ea)}.image--Ayo9y{width:40px;height:40px;object-fit:contain}",""]),n.locals={resizeWrapper:"resizeWrapper--LJwsk",image:"image--Ayo9y"};const o=n}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-table/src/components/styles.module.scss":((m,t,e)=>{e.d(t,{A:()=>o});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(a),n=c()(i());n.push([m.id,'.table--aDQUK{border-spacing:0;border-collapse:collapse;width:100%;table-layout:auto}.rowHeader--GKMCU{position:relative;z-index:0}.rowHeader--GKMCU:after{content:"";position:absolute;top:0;left:0;display:block;width:100%;height:100%;background-color:var(--sys-neutral-accent-default, #787b8a);opacity:.08;z-index:-1}.cell--KD9Ya{padding:18px 16px;min-width:120px;border:1px solid var(--sys-neutral-decor-default, #dde0ea);color:var(--sys-neutral-text-main, #41424e)}.cellHeader--smS60{font-family:var(--sans-label-l-font-family, SB Sans Text);font-weight:var(--sans-label-l-font-weight, Semibold);line-height:var(--sans-label-l-line-height, 20px);font-size:var(--sans-label-l-font-size, 14px);letter-spacing:var(--sans-label-l-letter-spacing, 0px);paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px)}.cellBody--wIQdp{font-family:var(--sans-body-l-font-family, SB Sans Text);font-weight:var(--sans-body-l-font-weight, Regular);line-height:var(--sans-body-l-line-height, 24px);font-size:var(--sans-body-l-font-size, 16px);letter-spacing:var(--sans-body-l-letter-spacing, 0px);paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px)}',""]),n.locals={table:"table--aDQUK",rowHeader:"rowHeader--GKMCU",cell:"cell--KD9Ya",cellHeader:"cellHeader--smS60",cellBody:"cellBody--wIQdp"};const o=n}),"./packages/site-section/stories/SectionTable.story.tsx":((m,t,e)=>{e.r(t),e.d(t,{default:()=>L,table:()=>f});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./packages/site-section/CHANGELOG.md"),a=e("./packages/site-section/package.json"),c=e("./packages/site-section/README.md"),n=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),o=e.n(n),E=e("./packages/site-rich-text/src/components/RichText.tsx"),g=e("./packages/site-table/src/components/Table.tsx"),k=e("./packages/utils/src/utils/extractSupportProps.ts"),x=e("./packages/site-section/src/components/SectionBasic/SectionBasic.tsx"),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(j),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(S),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),B=e.n(R),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Y=e.n(K),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(O),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),y=e.n(Q),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-section/src/components/SectionTable/styles.module.scss"),T={};T.styleTagTransform=y(),T.setAttributes=Y(),T.insert=B().bind(null,"head"),T.domAPI=h(),T.insertStyleElement=z();var C=N()(M.A,T);const A=M.A&&M.A.locals?M.A.locals:void 0;function u({id:_,layoutType:d,className:p,title:W,subtitle:D,description:G,backgroundColor:V,...X}){return(0,s.jsxs)(x.O,{id:_,title:W,backgroundColor:V!=null?V:"neutral-background",layoutType:d,className:o()(p,A.sectionTable),...(0,k.z)(X),children:[D&&(0,s.jsx)(E.s,{richText:D,className:A.subtitle,"data-test-id":"section-table__subtitle"}),(0,s.jsx)(g.X,{...X,"data-test-id":"section-table__table"}),G&&(0,s.jsx)(E.s,{className:A.description,richText:G,"data-test-id":"section-table__description"})]})}try{u.displayName="SectionTable",u.__docgenInfo={description:"",displayName:"SectionTable",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"id \u0441\u0435\u043A\u0446\u0438\u0438",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS-\u043A\u043B\u0430\u0441\u0441",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",name:"title",required:!1,type:{name:"string"}},subtitle:{defaultValue:null,description:"\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",name:"subtitle",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",name:"description",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"\u0424\u043E\u043D \u043F\u043E\u0434\u043B\u043E\u0436\u043A\u0438",name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"neutral-background1-level"'},{value:'"neutral-background"'},{value:'"graphite-accent-default"'}]}},withHeader:{defaultValue:null,description:"",name:"withHeader",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"Cell[][]"}},layoutType:{defaultValue:null,description:"",name:"layoutType",required:!0,type:{name:"enum",value:[{value:'"mobile"'},{value:'"tablet"'},{value:'"desktop"'},{value:'"desktopSmall"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/site-section/src/components/SectionTable/SectionTable.tsx#SectionTable"]={docgenInfo:u.__docgenInfo,name:"SectionTable",path:"packages/site-section/src/components/SectionTable/SectionTable.tsx#SectionTable"})}catch(_){}var H=e("./packages/site-section/stories/constants.ts"),P=e("./packages/site-section/stories/styles.module.scss"),L={title:"Site/Section/Table",component:u};const f={render:({id:_,layoutType:d,...p})=>(0,s.jsx)("div",{className:P.A.resizeWrapper,children:(0,s.jsx)(u,{id:_,layoutType:d,...p})}),args:{id:"section-promo-list",layoutType:"desktop",title:"Section Title",subtitle:"Subtitle",description:"Description",rows:[new Array(5).fill({content:"Header"}),new Array(5).fill({content:"Text"}).map((_,d)=>d===3?{..._,rowSpan:2}:_),[{content:"Text",colSpan:2},{content:"Text"},{content:"Text"}],new Array(5).fill({content:"Text"}),new Array(5).fill({content:"Text"})],withHeader:!0},argTypes:{layoutType:{name:"[Story]: Layout type",options:Object.values(H.s),control:{type:"radio"}}},parameters:{readme:{sidebar:[`Latest version: ${a.rE}`,c,i]},packageName:a.UU,design:{name:"Figma",type:"figma",url:"https://www.figma.com/design/pCLrU1Wg1VsoMQGLmH1J8t/branch/Ebf8XrdFkT0KzHJQXGg2wL/%5BLIB%5D%5BSITE%5D-Product-UI-Kit?node-id=13197-285784&m=dev"}}}}),"./packages/site-section/stories/constants.ts":((m,t,e)=>{e.d(t,{s:()=>s});const s={Mobile:"mobile",Tablet:"tablet",Desktop:"desktop",DesktopSmall:"desktopSmall"}}),"./packages/site-section/stories/styles.module.scss":((m,t,e)=>{e.d(t,{A:()=>B});var s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(s),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=e.n(a),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),o=e.n(n),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=e.n(E),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(k),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),N=e.n(j),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-section/stories/styles.module.scss"),h={};h.styleTagTransform=N(),h.setAttributes=g(),h.insert=o().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=x();var R=i()(S.A,h);const B=S.A&&S.A.locals?S.A.locals:void 0}),"./packages/site-table/src/components/Table.tsx":((m,t,e)=>{e.d(t,{X:()=>M});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),a=e.n(i),c=e("./packages/site-rich-text/src/components/RichText.tsx"),n=e("./packages/utils/src/utils/extractSupportProps.ts"),o=e("./node_modules/.pnpm/@snack-uikit+scroll@0.9.4_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(E),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),x=e.n(k),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),N=e.n(j),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),h=e.n(S),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(R),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Y=e.n(K),O=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-table/src/components/styles.module.scss"),z={};z.styleTagTransform=Y(),z.setAttributes=h(),z.insert=N().bind(null,"head"),z.domAPI=x(),z.insertStyleElement=B();var Q=g()(O.A,z);const y=O.A&&O.A.locals?O.A.locals:void 0;function M({withHeader:T=!0,rows:C,...A}){const u=T?C[0]:void 0,H=T?C.slice(1):C;return(0,s.jsx)(o.O,{barHideStrategy:"never",children:(0,s.jsxs)("table",{className:y.table,...(0,n.z)(A),children:[u&&(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{className:a()(y.row,y.rowHeader),children:u.map(({id:P,content:w,colSpan:L,rowSpan:v,className:f},_)=>(0,s.jsx)("td",{className:a()(y.cell,y.cellHeader,f),colSpan:L,rowSpan:v,children:(0,s.jsx)(c.s,{richText:w})},P!=null?P:_))})}),H&&(0,s.jsx)("tbody",{children:H.map((P,w)=>(0,s.jsx)("tr",{className:a()(y.row,y.rowBody),children:P.map(({id:L,content:v,rowSpan:f,colSpan:_,className:d},p)=>(0,s.jsx)("td",{className:a()(y.cell,y.cellBody,d),rowSpan:f,colSpan:_,children:(0,s.jsx)(c.s,{richText:v})},L!=null?L:p))},w))})]})})}try{M.displayName="Table",M.__docgenInfo={description:"",displayName:"Table",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},withHeader:{defaultValue:{value:"true"},description:"",name:"withHeader",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"Cell[][]"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/site-table/src/components/Table.tsx#Table"]={docgenInfo:M.__docgenInfo,name:"Table",path:"packages/site-table/src/components/Table.tsx#Table"})}catch(T){}})}]);})();
