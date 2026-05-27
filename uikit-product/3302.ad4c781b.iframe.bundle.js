"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3302],{"./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"(ro,Ut,y){y.d(Ut,{O:()=>Ro});var $=y("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),Pt=y("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),et=y("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),zt=y.n(et),Ot=y("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),At=y.n(Ot),St=y("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),mt=y.n(St),nt=y("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),pt=y.n(nt),It=y("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Ct=y.n(It),it=y("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),gt=y.n(it),Mt=y("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"),q={};q.styleTagTransform=gt(),q.setAttributes=pt(),q.insert=mt().bind(null,"head"),q.domAPI=At(),q.insertStyleElement=Ct();var dt=zt()(Mt.A,q);const no=Mt.A&&Mt.A.locals?Mt.A.locals:void 0;var Bt=y("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),Tt=y.n(Bt),Wt=y("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/overlayscrollbars.mjs"),Yt=y("./node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.11.1_react@18.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs"),tt=y("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Ft=y("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");const So={S:"s",M:"m"},Po={Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"},Mo={None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"},lo={Bottom:"bottom",Right:"right"},To=100,Lo=2;var No=y("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"),Y={};Y.styleTagTransform=gt(),Y.setAttributes=pt(),Y.insert=mt().bind(null,"head"),Y.domAPI=At(),Y.insertStyleElement=Ct();var fe=zt()(No.A,Y);const ho=No.A&&No.A.locals?No.A.locals:void 0;var lt=function(Vt,ao){var ht={};for(var Dt in Vt)Object.prototype.hasOwnProperty.call(Vt,Dt)&&ao.indexOf(Dt)<0&&(ht[Dt]=Vt[Dt]);if(Vt!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Qt=0,Dt=Object.getOwnPropertySymbols(Vt);Qt<Dt.length;Qt++)ao.indexOf(Dt[Qt])<0&&Object.prototype.propertyIsEnumerable.call(Vt,Dt[Qt])&&(ht[Dt[Qt]]=Vt[Dt[Qt]]);return ht};const co=Wt.ae.nonce,Ro=(0,tt.forwardRef)(function(ao,ht){var{children:Dt,className:Qt,onScroll:yo,onInitialized:io,size:Ko=So.M,resize:Zo=Mo.None,clickScrolling:Qo=!0,barHideStrategy:Xo=Po.Leave,autoscrollTo:Kt,paddingAbsolute:Eo,untouchableScrollbars:ko=!1}=ao,Gt=lt(ao,["children","className","onScroll","onInitialized","size","resize","clickScrolling","barHideStrategy","autoscrollTo","paddingAbsolute","untouchableScrollbars"]);const Zt=(0,tt.useRef)(null),[Jt,he]=(0,tt.useState)(!1),Xt=(0,tt.useCallback)((st=Zt.current)=>st==null?void 0:st.osInstance(),[Zt]);(0,tt.useImperativeHandle)(ht,()=>{var st,F,Et;return(Et=(F=(st=Zt.current)===null||st===void 0?void 0:st.osInstance())===null||F===void 0?void 0:F.elements().viewport)!==null&&Et!==void 0?Et:null});const go=(0,tt.useRef)({scrolledToBottom:!1,scrolledToRight:!1}),uo=(0,tt.useCallback)(st=>{const F=Xt(st);if(F){const{viewport:Et}=F.elements(),Rt=Et.scrollHeight-(Et.offsetHeight+Et.scrollTop),V=Et.scrollWidth-(Et.offsetWidth+Et.scrollLeft),Go=Et.scrollHeight>Et.offsetHeight,$o=Et.scrollWidth>Et.offsetWidth;go.current.scrolledToBottom=Rt<Lo||!Go,go.current.scrolledToRight=V<Lo||!$o}},[Xt]);(0,Ft.N)(()=>{if(!Kt){io==null||io();return}const st=Xt();if(st&&Jt){uo();const{content:F}=st.elements();Kt===lo.Bottom&&F.scroll(0,F.scrollHeight),Kt===lo.Right&&F.scroll(F.scrollWidth,0)}io==null||io()},[Xt,Jt,uo]);const ye=(0,tt.useCallback)(()=>{he(!0)},[]),qt=(0,tt.useCallback)(st=>{yo==null||yo(st),Kt&&uo()},[yo,uo]),I=(0,tt.useCallback)(()=>{var st;if(!Kt)return;const F=(st=Xt())===null||st===void 0?void 0:st.elements();F!=null&&F.content&&(go.current.scrolledToBottom&&Kt===lo.Bottom&&(F==null||F.content.scroll(0,F==null?void 0:F.content.scrollHeight)),go.current.scrolledToRight&&Kt===lo.Right&&(F==null||F.content.scroll(F==null?void 0:F.content.scrollWidth,0)))},[Xt,Kt]);return(0,$.jsx)(Yt.r,Object.assign({},Gt,{ref:Zt,"data-size":Ko,"data-untouchable-scrollbars":ko||void 0,className:Tt()(Qt,ho.scroll,"osThemeSnack"),style:{resize:Zo},options:{paddingAbsolute:Eo,scrollbars:{autoHide:Xo,autoHideDelay:To,clickScroll:Qo}},events:{initialized:ye,scroll:(st,F)=>{qt(F)},updated:I},children:Kt?Jt&&Dt:Dt}))})},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"(ro,Ut,y){y.d(Ut,{A:()=>pt});var $=y("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),Pt=y.n($),et=y("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),zt=y.n(et),Ot=y("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/getUrl.js"),At=y.n(Ot),St=new URL(y("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),y.b),mt=zt()(Pt()),nt=At()(St);mt.push([ro.id,`@charset "UTF-8";
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
  --bg-icon-mask:url(${nt});
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
}`,""]);const pt=mt},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"(ro,Ut,y){y.d(Ut,{A:()=>At});var $=y("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),Pt=y.n($),et=y("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),zt=y.n(et),Ot=zt()(Pt());Ot.push([ro.id,`.scroll--F6lqE{
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
}`,""]),Ot.locals={scroll:"scroll--F6lqE"};const At=Ot},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"(ro,Ut,y){y.d(Ut,{A:()=>At});var $=y("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),Pt=y.n($),et=y("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),zt=y.n(et),Ot=zt()(Pt());Ot.push([ro.id,`/*! 
 * OverlayScrollbars
 * Version: 2.11.1
 * 
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 * 
 * Released under the MIT license.
 */
.os-size-observer,
.os-size-observer-listener {
  scroll-behavior: auto !important;
  direction: inherit;
  pointer-events: none;
  overflow: hidden;
  visibility: hidden;
  box-sizing: border-box;
}

.os-size-observer,
.os-size-observer-listener,
.os-size-observer-listener-item,
.os-size-observer-listener-item-final {
  writing-mode: horizontal-tb;
  position: absolute;
  left: 0;
  top: 0;
}

.os-size-observer {
  z-index: -1;
  contain: strict;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: inherit;
  border: inherit;
  box-sizing: inherit;
  margin: -133px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale(0.1);
}
.os-size-observer::before {
  content: "";
  flex: none;
  box-sizing: inherit;
  padding: 10px;
  width: 10px;
  height: 10px;
}

.os-size-observer-appear {
  animation: os-size-observer-appear-animation 1ms forwards;
}

.os-size-observer-listener {
  box-sizing: border-box;
  position: relative;
  flex: auto;
  padding: inherit;
  border: inherit;
  margin: -133px;
  transform: scale(calc(1 / 0.1));
}
.os-size-observer-listener.ltr {
  margin-right: -266px;
  margin-left: 0;
}
.os-size-observer-listener.rtl {
  margin-left: -266px;
  margin-right: 0;
}
.os-size-observer-listener:empty::before {
  content: "";
  width: 100%;
  height: 100%;
}
.os-size-observer-listener:empty::before, .os-size-observer-listener > .os-size-observer-listener-item {
  display: block;
  position: relative;
  padding: inherit;
  border: inherit;
  box-sizing: content-box;
  flex: auto;
}

.os-size-observer-listener-scroll {
  box-sizing: border-box;
  display: flex;
}

.os-size-observer-listener-item {
  right: 0;
  bottom: 0;
  overflow: hidden;
  direction: ltr;
  flex: none;
}

.os-size-observer-listener-item-final {
  transition: none;
}

@keyframes os-size-observer-appear-animation {
  from {
    cursor: auto;
  }
  to {
    cursor: none;
  }
}
.os-trinsic-observer {
  flex: none;
  box-sizing: border-box;
  position: relative;
  max-width: 0px;
  max-height: 1px;
  padding: 0;
  margin: 0;
  border: none;
  overflow: hidden;
  z-index: -1;
  height: 0;
  top: calc(100% + 1px);
  contain: strict;
}
.os-trinsic-observer:not(:empty) {
  height: calc(100% + 1px);
  top: -1px;
}
.os-trinsic-observer:not(:empty) > .os-size-observer {
  width: 1000%;
  height: 1000%;
  min-height: 1px;
  min-width: 1px;
}

/**
 * hide native scrollbars
 * changes to this styles need to be reflected in the environment styles to correctly detect scrollbar hiding
 */
[data-overlayscrollbars-initialize],
[data-overlayscrollbars-viewport~=scrollbarHidden] {
  scrollbar-width: none !important;
}

[data-overlayscrollbars-initialize]::-webkit-scrollbar,
[data-overlayscrollbars-initialize]::-webkit-scrollbar-corner,
[data-overlayscrollbars-viewport~=scrollbarHidden]::-webkit-scrollbar,
[data-overlayscrollbars-viewport~=scrollbarHidden]::-webkit-scrollbar-corner {
  -webkit-appearance: none !important;
          appearance: none !important;
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}

/**
 * elements wont suddenly clip after initialization is done
 */
[data-overlayscrollbars-initialize]:not([data-overlayscrollbars]):not(html):not(body) {
  overflow: auto;
}

/**
 * applied to body 
 */
html[data-overlayscrollbars-body] {
  overflow: hidden;
}

html[data-overlayscrollbars-body],
html[data-overlayscrollbars-body] > body {
  width: 100%;
  height: 100%;
  margin: 0;
}

html[data-overlayscrollbars-body] > body {
  overflow: visible;
  margin: 0;
}

/**
 * structure setup 
 */
[data-overlayscrollbars] {
  position: relative;
}

[data-overlayscrollbars~=host],
[data-overlayscrollbars-padding] {
  display: flex;
  align-items: stretch !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  scroll-behavior: auto !important;
}

[data-overlayscrollbars-padding],
[data-overlayscrollbars-viewport]:not([data-overlayscrollbars]) {
  box-sizing: inherit;
  position: relative;
  flex: auto !important;
  height: auto;
  width: 100%;
  min-width: 0;
  padding: 0;
  margin: 0;
  border: none;
  z-index: 0;
}

[data-overlayscrollbars-viewport]:not([data-overlayscrollbars]) {
  --os-vaw: 0;
  --os-vah: 0;
  outline: none;
}
[data-overlayscrollbars-viewport]:not([data-overlayscrollbars]):focus {
  outline: none;
}
[data-overlayscrollbars-viewport][data-overlayscrollbars-viewport~=arrange]::before {
  content: "";
  position: absolute;
  pointer-events: none;
  z-index: -1;
  min-width: 1px;
  min-height: 1px;
  width: var(--os-vaw);
  height: var(--os-vah);
}

[data-overlayscrollbars],
[data-overlayscrollbars-padding],
[data-overlayscrollbars-viewport] {
  overflow: hidden !important;
}

[data-overlayscrollbars~=noClipping],
[data-overlayscrollbars-padding~=noClipping] {
  overflow: visible !important;
}

[data-overlayscrollbars-viewport~=measuring] {
  overflow: hidden !important;
  scroll-behavior: auto !important;
  scroll-snap-type: none !important;
}

[data-overlayscrollbars-viewport~=overflowXVisible]:not([data-overlayscrollbars-viewport~=measuring]) {
  overflow-x: visible !important;
}

[data-overlayscrollbars-viewport~=overflowXHidden] {
  overflow-x: hidden !important;
}

[data-overlayscrollbars-viewport~=overflowXScroll] {
  overflow-x: scroll !important;
}

[data-overlayscrollbars-viewport~=overflowYVisible]:not([data-overlayscrollbars-viewport~=measuring]) {
  overflow-y: visible !important;
}

[data-overlayscrollbars-viewport~=overflowYHidden] {
  overflow-y: hidden !important;
}

[data-overlayscrollbars-viewport~=overflowYScroll] {
  overflow-y: scroll !important;
}

[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId) {
  font-size: 0 !important;
  line-height: 0 !important;
}

[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId)::before,
[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId)::after,
[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId) > * {
  display: none !important;
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border-width: 0 !important;
}

[data-overlayscrollbars-viewport~=scrolling] {
  scroll-behavior: auto !important;
  scroll-snap-type: none !important;
}

[data-overlayscrollbars-content] {
  box-sizing: inherit;
}

/**
 * Display contents to bridge any flickering during deferred initialization.
 */
[data-overlayscrollbars-contents]:not(#osFakeId):not([data-overlayscrollbars-padding]):not([data-overlayscrollbars-viewport]):not([data-overlayscrollbars-content]) {
  display: contents;
}

/**
 * optional & experimental grid mode
 */
[data-overlayscrollbars-grid],
[data-overlayscrollbars-grid] [data-overlayscrollbars-padding] {
  display: grid;
  grid-template: 1fr/1fr;
}

[data-overlayscrollbars-grid] > [data-overlayscrollbars-padding],
[data-overlayscrollbars-grid] > [data-overlayscrollbars-viewport],
[data-overlayscrollbars-grid] > [data-overlayscrollbars-padding] > [data-overlayscrollbars-viewport] {
  height: auto !important;
  width: auto !important;
}

@property --os-scroll-percent {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
@property --os-viewport-percent {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}
.os-scrollbar {
  --os-viewport-percent: 0;
  --os-scroll-percent: 0;
  --os-scroll-direction: 0;
  --os-scroll-percent-directional: calc(
    var(--os-scroll-percent) - (var(--os-scroll-percent) + (1 - var(--os-scroll-percent)) * -1) *
      var(--os-scroll-direction)
  );
}

.os-scrollbar {
  contain: size layout;
  contain: size layout style;
  transition: opacity 0.15s, visibility 0.15s, top 0.15s, right 0.15s, bottom 0.15s, left 0.15s;
  pointer-events: none;
  position: absolute;
  opacity: 0;
  visibility: hidden;
}

body > .os-scrollbar {
  position: fixed;
  z-index: 99999;
}

.os-scrollbar-transitionless {
  transition: none !important;
}

.os-scrollbar-track {
  position: relative;
  padding: 0 !important;
  border: none !important;
}

.os-scrollbar-handle {
  position: absolute;
}

.os-scrollbar-track,
.os-scrollbar-handle {
  pointer-events: none;
  width: 100%;
  height: 100%;
}

.os-scrollbar.os-scrollbar-track-interactive .os-scrollbar-track,
.os-scrollbar.os-scrollbar-handle-interactive .os-scrollbar-handle {
  pointer-events: auto;
  touch-action: none;
}

.os-scrollbar-horizontal {
  bottom: 0;
  left: 0;
}

.os-scrollbar-vertical {
  top: 0;
  right: 0;
}

.os-scrollbar-rtl.os-scrollbar-horizontal {
  right: 0;
}

.os-scrollbar-rtl.os-scrollbar-vertical {
  right: auto;
  left: 0;
}

.os-scrollbar-visible {
  opacity: 1;
  visibility: visible;
}

.os-scrollbar-auto-hide.os-scrollbar-auto-hide-hidden {
  opacity: 0;
  visibility: hidden;
}

.os-scrollbar-interaction.os-scrollbar-visible {
  opacity: 1;
  visibility: visible;
}

.os-scrollbar-unusable,
.os-scrollbar-unusable *,
.os-scrollbar-wheel,
.os-scrollbar-wheel * {
  pointer-events: none !important;
}

.os-scrollbar-unusable .os-scrollbar-handle {
  opacity: 0 !important;
  transition: none !important;
}

.os-scrollbar-horizontal .os-scrollbar-handle {
  bottom: 0;
  left: calc(var(--os-scroll-percent-directional) * 100%);
  transform: translateX(calc(var(--os-scroll-percent-directional) * -100%));
  width: calc(var(--os-viewport-percent) * 100%);
}

.os-scrollbar-vertical .os-scrollbar-handle {
  right: 0;
  top: calc(var(--os-scroll-percent-directional) * 100%);
  transform: translateY(calc(var(--os-scroll-percent-directional) * -100%));
  height: calc(var(--os-viewport-percent) * 100%);
}

@supports (container-type: size) {
  .os-scrollbar-track {
    container-type: size;
  }
  .os-scrollbar-horizontal .os-scrollbar-handle {
    left: auto;
    transform: translateX(calc(var(--os-scroll-percent-directional) * 100cqw + var(--os-scroll-percent-directional) * -100%));
  }
  .os-scrollbar-vertical .os-scrollbar-handle {
    top: auto;
    transform: translateY(calc(var(--os-scroll-percent-directional) * 100cqh + var(--os-scroll-percent-directional) * -100%));
  }
  .os-scrollbar-rtl.os-scrollbar-horizontal .os-scrollbar-handle {
    right: auto;
    left: 0;
  }
}
.os-scrollbar-rtl.os-scrollbar-vertical .os-scrollbar-handle {
  right: auto;
  left: 0;
}

.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless,
.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless.os-scrollbar-rtl {
  left: 0;
  right: 0;
}

.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless,
.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless.os-scrollbar-rtl {
  top: 0;
  bottom: 0;
}

@media print {
  .os-scrollbar {
    display: none;
  }
}
.os-scrollbar {
  --os-size: 0;
  --os-padding-perpendicular: 0;
  --os-padding-axis: 0;
  --os-track-border-radius: 0;
  --os-track-bg: none;
  --os-track-bg-hover: none;
  --os-track-bg-active: none;
  --os-track-border: none;
  --os-track-border-hover: none;
  --os-track-border-active: none;
  --os-handle-border-radius: 0;
  --os-handle-bg: none;
  --os-handle-bg-hover: none;
  --os-handle-bg-active: none;
  --os-handle-border: none;
  --os-handle-border-hover: none;
  --os-handle-border-active: none;
  --os-handle-min-size: 33px;
  --os-handle-max-size: none;
  --os-handle-perpendicular-size: 100%;
  --os-handle-perpendicular-size-hover: 100%;
  --os-handle-perpendicular-size-active: 100%;
  --os-handle-interactive-area-offset: 0;
}

.os-scrollbar-track {
  border: var(--os-track-border);
  border-radius: var(--os-track-border-radius);
  background: var(--os-track-bg);
  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s;
}
.os-scrollbar-track:hover {
  border: var(--os-track-border-hover);
  background: var(--os-track-bg-hover);
}
.os-scrollbar-track:active {
  border: var(--os-track-border-active);
  background: var(--os-track-bg-active);
}

.os-scrollbar-handle {
  border: var(--os-handle-border);
  border-radius: var(--os-handle-border-radius);
  background: var(--os-handle-bg);
}
.os-scrollbar-handle:hover {
  border: var(--os-handle-border-hover);
  background: var(--os-handle-bg-hover);
}
.os-scrollbar-handle:active {
  border: var(--os-handle-border-active);
  background: var(--os-handle-bg-active);
}

.os-scrollbar-track:before,
.os-scrollbar-handle:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: block;
}

.os-scrollbar-horizontal {
  padding: var(--os-padding-perpendicular) var(--os-padding-axis);
  right: var(--os-size);
  height: var(--os-size);
}
.os-scrollbar-horizontal.os-scrollbar-rtl {
  left: var(--os-size);
  right: 0;
}
.os-scrollbar-horizontal .os-scrollbar-track:before {
  top: calc(var(--os-padding-perpendicular) * -1);
  bottom: calc(var(--os-padding-perpendicular) * -1);
}
.os-scrollbar-horizontal .os-scrollbar-handle {
  min-width: var(--os-handle-min-size);
  max-width: var(--os-handle-max-size);
  height: var(--os-handle-perpendicular-size);
  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s, height 0.15s;
}
.os-scrollbar-horizontal .os-scrollbar-handle:before {
  top: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);
  bottom: calc(var(--os-padding-perpendicular) * -1);
}
.os-scrollbar-horizontal:hover .os-scrollbar-handle {
  height: var(--os-handle-perpendicular-size-hover);
}
.os-scrollbar-horizontal:active .os-scrollbar-handle {
  height: var(--os-handle-perpendicular-size-active);
}

.os-scrollbar-vertical {
  padding: var(--os-padding-axis) var(--os-padding-perpendicular);
  bottom: var(--os-size);
  width: var(--os-size);
}
.os-scrollbar-vertical .os-scrollbar-track:before {
  left: calc(var(--os-padding-perpendicular) * -1);
  right: calc(var(--os-padding-perpendicular) * -1);
}
.os-scrollbar-vertical .os-scrollbar-handle {
  min-height: var(--os-handle-min-size);
  max-height: var(--os-handle-max-size);
  width: var(--os-handle-perpendicular-size);
  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s, width 0.15s;
}
.os-scrollbar-vertical .os-scrollbar-handle:before {
  left: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);
  right: calc(var(--os-padding-perpendicular) * -1);
}
.os-scrollbar-vertical.os-scrollbar-rtl .os-scrollbar-handle:before {
  right: calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);
  left: calc(var(--os-padding-perpendicular) * -1);
}
.os-scrollbar-vertical:hover .os-scrollbar-handle {
  width: var(--os-handle-perpendicular-size-hover);
}
.os-scrollbar-vertical:active .os-scrollbar-handle {
  width: var(--os-handle-perpendicular-size-active);
}

/* NONE THEME: */
[data-overlayscrollbars-viewport~=measuring] > .os-scrollbar,
.os-theme-none.os-scrollbar {
  display: none !important;
}

/* DARK & LIGHT THEME: */
.os-theme-dark,
.os-theme-light {
  box-sizing: border-box;
  --os-size: 10px;
  --os-padding-perpendicular: 2px;
  --os-padding-axis: 2px;
  --os-track-border-radius: 10px;
  --os-handle-interactive-area-offset: 4px;
  --os-handle-border-radius: 10px;
}

.os-theme-dark {
  --os-handle-bg: rgba(0, 0, 0, 0.44);
  --os-handle-bg-hover: rgba(0, 0, 0, 0.55);
  --os-handle-bg-active: rgba(0, 0, 0, 0.66);
}

.os-theme-light {
  --os-handle-bg: rgba(255, 255, 255, 0.44);
  --os-handle-bg-hover: rgba(255, 255, 255, 0.55);
  --os-handle-bg-active: rgba(255, 255, 255, 0.66);
}`,""]);const At=Ot},"./node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.11.1_react@18.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs"(ro,Ut,y){y.d(Ut,{r:()=>At});var $=y("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Pt=y("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/overlayscrollbars.mjs");const et=()=>{if(typeof window>"u"){const q=()=>{};return[q,q]}let St,mt;const nt=window,pt=typeof nt.requestIdleCallback=="function",It=nt.requestAnimationFrame,Ct=nt.cancelAnimationFrame,it=pt?nt.requestIdleCallback:It,gt=pt?nt.cancelIdleCallback:Ct,Mt=()=>{gt(St),Ct(mt)};return[(q,dt)=>{Mt(),St=it(pt?()=>{Mt(),mt=It(q)}:q,typeof dt=="object"?dt:{timeout:2233})},Mt]},zt=St=>{const{options:mt,events:nt,defer:pt}=St||{},[It,Ct]=(0,$.useMemo)(et,[]),it=(0,$.useRef)(null),gt=(0,$.useRef)(pt),Mt=(0,$.useRef)(mt),q=(0,$.useRef)(nt);return(0,$.useEffect)(()=>{gt.current=pt},[pt]),(0,$.useEffect)(()=>{const{current:dt}=it;Mt.current=mt,Pt.ae.valid(dt)&&dt.options(mt||{},!0)},[mt]),(0,$.useEffect)(()=>{const{current:dt}=it;q.current=nt,Pt.ae.valid(dt)&&dt.on(nt||{},!0)},[nt]),(0,$.useEffect)(()=>()=>{var dt;Ct(),(dt=it.current)==null||dt.destroy()},[]),(0,$.useMemo)(()=>[dt=>{const no=it.current;if(Pt.ae.valid(no))return;const Bt=gt.current,Tt=Mt.current||{},Wt=q.current||{},Yt=()=>it.current=(0,Pt.ae)(dt,Tt,Wt);Bt?It(Yt,Bt):Yt()},()=>it.current],[])},Ot=(St,mt)=>{const{element:nt="div",options:pt,events:It,defer:Ct,children:it,...gt}=St,Mt=nt,q=(0,$.useRef)(null),dt=(0,$.useRef)(null),[no,Bt]=zt({options:pt,events:It,defer:Ct});return(0,$.useEffect)(()=>{const{current:Tt}=q,{current:Wt}=dt;if(!Tt)return;const Yt=Tt;return no(nt==="body"?{target:Yt,cancel:{body:null}}:{target:Yt,elements:{viewport:Wt,content:Wt}}),()=>{var tt;return(tt=Bt())==null?void 0:tt.destroy()}},[no,nt]),(0,$.useImperativeHandle)(mt,()=>({osInstance:Bt,getElement:()=>q.current}),[]),$.createElement(Mt,{"data-overlayscrollbars-initialize":"",ref:q,...gt},nt==="body"?it:$.createElement("div",{"data-overlayscrollbars-contents":"",ref:dt},it))},At=(0,$.forwardRef)(Ot)},"./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/overlayscrollbars.mjs"(ro,Ut,y){y.d(Ut,{ae:()=>mo});/*!
 * OverlayScrollbars
 * Version: 2.11.1
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */const $=(t,o)=>{const{o:e,i:s,u:r}=t;let n=e,l;const i=(c,b)=>{const h=n,g=c,d=b||(s?!s(h,g):h!==g);return(d||r)&&(n=g,l=h),[n,d,l]};return[o?c=>i(o(n,l),c):i,c=>[n,!!c,l]]},et=typeof window!="undefined"&&typeof HTMLElement!="undefined"&&!!window.document?window:{},zt=Math.max,Ot=Math.min,At=Math.round,St=Math.abs,mt=Math.sign,nt=et.cancelAnimationFrame,pt=et.requestAnimationFrame,It=et.setTimeout,Ct=et.clearTimeout,it=t=>typeof et[t]!="undefined"?et[t]:void 0,gt=it("MutationObserver"),Mt=it("IntersectionObserver"),q=it("ResizeObserver"),dt=it("ScrollTimeline"),no=t=>t===void 0,Bt=t=>t===null,Tt=t=>typeof t=="number",Wt=t=>typeof t=="string",Yt=t=>typeof t=="boolean",tt=t=>typeof t=="function",Ft=t=>Array.isArray(t),So=t=>typeof t=="object"&&!Ft(t)&&!Bt(t),Po=t=>{const o=!!t&&t.length,e=Tt(o)&&o>-1&&o%1==0;return Ft(t)||!tt(t)&&e?o>0&&So(t)?o-1 in t:!0:!1},Mo=t=>!!t&&t.constructor===Object,lo=t=>t instanceof HTMLElement,To=t=>t instanceof Element,Lo=()=>performance.now(),No=(t,o,e,s,r)=>{let n=0;const l=Lo(),i=zt(0,e),a=p=>{const c=Lo(),h=c-l>=i,g=p?1:1-(zt(0,l+i-c)/i||0),d=(o-t)*(tt(r)?r(g,g*i,0,1,i):g)+t,x=h||g===1;s&&s(d,g,x),n=x?0:pt((()=>a()))};return a(),p=>{nt(n),p&&a(p)}};function Y(t,o){if(Po(t))for(let e=0;e<t.length&&o(t[e],e,t)!==!1;e++);else t&&Y(Object.keys(t),(e=>o(t[e],e,t)));return t}const fe=(t,o)=>t.indexOf(o)>=0,ho=(t,o)=>t.concat(o),lt=(t,o,e)=>(!Wt(o)&&Po(o)?Array.prototype.push.apply(t,o):t.push(o),t),co=t=>Array.from(t||[]),Ro=t=>Ft(t)?t:!Wt(t)&&Po(t)?co(t):[t],Vt=t=>!!t&&!t.length,ao=t=>co(new Set(t)),ht=(t,o,e)=>{Y(t,r=>r?r.apply(void 0,o||[]):!0),e||(t.length=0)},Dt="paddingTop",Qt="paddingRight",yo="paddingLeft",io="paddingBottom",Ko="marginLeft",Zo="marginRight",Qo="marginBottom",Xo="overflowX",Kt="overflowY",Eo="width",ko="height",Gt="visible",Zt="hidden",Jt="scroll",he=t=>{const o=String(t||"");return o?o[0].toUpperCase()+o.slice(1):""},Xt=(t,o,e,s)=>{if(t&&o){let r=!0;return Y(e,(n=>{const l=t[n],i=o[n];l!==i&&(r=!1)})),r}return!1},go=(t,o)=>Xt(t,o,["w","h"]),uo=(t,o)=>Xt(t,o,["x","y"]),ye=(t,o)=>Xt(t,o,["t","r","b","l"]),qt=()=>{},I=(t,...o)=>t.bind(0,...o),st=t=>{let o;const e=t?It:pt,s=t?Ct:nt;return[r=>{s(o),o=e((()=>r()),tt(t)?t():t)},()=>s(o)]},F=(t,o)=>{const{_:e,p:s,v:r,S:n}=o||{};let l,i,a,p,c=qt;const b=function(P){c(),Ct(l),p=l=i=void 0,c=qt,t.apply(this,P)},h=x=>n&&i?n(i,x):x,g=()=>{c!==qt&&b(h(a)||a)},d=function(){const P=co(arguments),z=tt(e)?e():e;if(Tt(z)&&z>=0){const U=tt(s)?s():s,m=Tt(U)&&U>=0,E=z>0?It:pt,O=z>0?Ct:nt,R=h(P)||P,A=b.bind(0,R);let v;c(),r&&!p?(A(),p=!0,v=E((()=>p=void 0),z)):(v=E(A,z),m&&!l&&(l=It(g,U))),c=()=>O(v),i=a=R}else b(P)};return d.m=g,d},Et=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),Rt=t=>t?Object.keys(t):[],V=(t,o,e,s,r,n,l)=>{const i=[o,e,s,r,n,l];return(typeof t!="object"||Bt(t))&&!tt(t)&&(t={}),Y(i,(a=>{Y(a,((p,c)=>{const b=a[c];if(t===b)return!0;const h=Ft(b);if(b&&Mo(b)){const g=t[c];let d=g;h&&!Ft(g)?d=[]:!h&&!Mo(g)&&(d={}),t[c]=V(d,b)}else t[c]=h?b.slice():b}))})),t},Go=(t,o)=>Y(V({},t),((e,s,r)=>{e===void 0?delete r[s]:e&&Mo(e)&&(r[s]=Go(e))})),$o=t=>!Rt(t).length,Ke=(t,o,e)=>zt(t,Ot(o,e)),wo=t=>ao((Ft(t)?t:(t||"").split(" ")).filter((o=>o))),ge=(t,o)=>t&&t.getAttribute(o),Ze=(t,o)=>t&&t.hasAttribute(o),_o=(t,o,e)=>{Y(wo(o),(s=>{t&&t.setAttribute(s,String(e||""))}))},to=(t,o)=>{Y(wo(o),(e=>t&&t.removeAttribute(e)))},Jo=(t,o)=>{const e=wo(ge(t,o)),s=I(_o,t,o),r=(n,l)=>{const i=new Set(e);return Y(wo(n),(a=>{i[l](a)})),co(i).join(" ")};return{O:n=>s(r(n,"delete")),$:n=>s(r(n,"add")),C:n=>{const l=wo(n);return l.reduce(((i,a)=>i&&e.includes(a)),l.length>0)}}},Qe=(t,o,e)=>(Jo(t,o).O(e),I(we,t,o,e)),we=(t,o,e)=>(Jo(t,o).$(e),I(Qe,t,o,e)),qo=(t,o,e,s)=>(s?we:Qe)(t,o,e),xe=(t,o,e)=>Jo(t,o).C(e),Xe=t=>Jo(t,"class"),Ge=(t,o)=>{Xe(t).O(o)},ze=(t,o)=>(Xe(t).$(o),I(Ge,t,o)),Je=(t,o)=>{const e=o?To(o)&&o:document;return e?co(e.querySelectorAll(t)):[]},Hs=(t,o)=>{const e=o?To(o)&&o:document;return e&&e.querySelector(t)},Se=(t,o)=>To(t)&&t.matches(o),qe=t=>Se(t,"body"),Me=t=>t?co(t.childNodes):[],Ho=t=>t&&t.parentElement,Oo=(t,o)=>To(t)&&t.closest(o),Te=t=>document.activeElement,Us=(t,o,e)=>{const s=Oo(t,o),r=t&&Hs(e,s),n=Oo(r,o)===s;return s&&r?s===t||r===t||n&&Oo(Oo(t,e),o)!==s:!1},Ao=t=>{Y(Ro(t),(o=>{const e=Ho(o);o&&e&&e.removeChild(o)}))},Lt=(t,o)=>I(Ao,t&&o&&Y(Ro(o),(e=>{e&&t.appendChild(e)})));let ts;const Bs=()=>ts,Ws=t=>{ts=t},Do=t=>{const o=document.createElement("div");return _o(o,"class",t),o},os=t=>{const o=Do(),e=Bs(),s=t.trim();return o.innerHTML=e?e.createHTML(s):s,Y(Me(o),(r=>Ao(r)))},es=(t,o)=>t.getPropertyValue(o)||t[o]||"",ss=t=>{const o=t||0;return isFinite(o)?o:0},te=t=>ss(parseFloat(t||"")),Ee=t=>Math.round(t*1e4)/1e4,rs=t=>`${Ee(ss(t))}px`;function Uo(t,o){t&&o&&Y(o,((e,s)=>{try{const r=t.style,n=Bt(e)||Yt(e)?"":Tt(e)?rs(e):e;s.indexOf("--")===0?r.setProperty(s,n):r[s]=n}catch(r){}}))}function po(t,o,e){const s=Wt(o);let r=s?"":{};if(t){const n=et.getComputedStyle(t,e)||t.style;r=s?es(n,o):co(o).reduce(((l,i)=>(l[i]=es(n,i),l)),r)}return r}const ns=(t,o,e)=>{const s=o?`${o}-`:"",r=e?`-${e}`:"",n=`${s}top${r}`,l=`${s}right${r}`,i=`${s}bottom${r}`,a=`${s}left${r}`,p=po(t,[n,l,i,a]);return{t:te(p[n]),r:te(p[l]),b:te(p[i]),l:te(p[a])}},ke=(t,o)=>`translate${So(t)?`(${t.x},${t.y})`:`${o?"X":"Y"}(${t})`}`,Ys=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),Fs={w:0,h:0},oe=(t,o)=>o?{w:o[`${t}Width`],h:o[`${t}Height`]}:Fs,Vs=t=>oe("inner",t||et),Io=I(oe,"offset"),ls=I(oe,"client"),ee=I(oe,"scroll"),Oe=t=>{const o=parseFloat(po(t,Eo))||0,e=parseFloat(po(t,ko))||0;return{w:o-At(o),h:e-At(e)}},Ae=t=>t.getBoundingClientRect(),Ks=t=>!!t&&Ys(t),De=t=>!!(t&&(t[ko]||t[Eo])),cs=(t,o)=>{const e=De(t);return!De(o)&&e},as=(t,o,e,s)=>{Y(wo(o),(r=>{t&&t.removeEventListener(r,e,s)}))},ct=(t,o,e,s)=>{var r;const n=(r=s&&s.H)!=null?r:!0,l=s&&s.I||!1,i=s&&s.A||!1,a={passive:n,capture:l};return I(ht,wo(o).map((p=>{const c=i?b=>{as(t,p,c,l),e&&e(b)}:e;return t&&t.addEventListener(p,c,a),I(as,t,p,c,l)})))},is=t=>t.stopPropagation(),Ie=t=>t.preventDefault(),ds=t=>is(t)||Ie(t),oo=(t,o)=>{const{x:e,y:s}=Tt(o)?{x:o,y:o}:o||{};Tt(e)&&(t.scrollLeft=e),Tt(s)&&(t.scrollTop=s)},$t=t=>({x:t.scrollLeft,y:t.scrollTop}),us=()=>({D:{x:0,y:0},M:{x:0,y:0}}),Zs=(t,o)=>{const{D:e,M:s}=t,{w:r,h:n}=o,l=(b,h,g)=>{let d=mt(b)*g,x=mt(h)*g;if(d===x){const P=St(b),z=St(h);x=P>z?0:x,d=P<z?0:d}return d=d===x?0:d,[d+0,x+0]},[i,a]=l(e.x,s.x,r),[p,c]=l(e.y,s.y,n);return{D:{x:i,y:p},M:{x:a,y:c}}},Ce=({D:t,M:o})=>{const e=(s,r)=>s===0&&s<=r;return{x:e(t.x,o.x),y:e(t.y,o.y)}},_s=({D:t,M:o},e)=>{const s=(r,n,l)=>Ke(0,1,(r-l)/(r-n)||0);return{x:s(t.x,o.x,e.x),y:s(t.y,o.y,e.y)}},je=t=>{t&&t.focus&&t.focus({preventScroll:!0})},ps=(t,o)=>{Y(Ro(o),t)},Pe=t=>{const o=new Map,e=(n,l)=>{if(n){const i=o.get(n);ps((a=>{i&&i[a?"delete":"clear"](a)}),l)}else o.forEach((i=>{i.clear()})),o.clear()},s=(n,l)=>{if(Wt(n)){const p=o.get(n)||new Set;return o.set(n,p),ps((c=>{tt(c)&&p.add(c)}),l),I(e,n,l)}Yt(l)&&l&&e();const i=Rt(n),a=[];return Y(i,(p=>{const c=n[p];c&&lt(a,s(p,c))})),I(ht,a)},r=(n,l)=>{Y(co(o.get(n)),(i=>{l&&!Vt(l)?i.apply(0,l):i()}))};return s(t||{}),[s,e,r]},bs={},vs={},Qs=t=>{Y(t,(o=>Y(o,((e,s)=>{bs[s]=o[s]}))))},ms=(t,o,e)=>Rt(t).map((s=>{const{static:r,instance:n}=t[s],[l,i,a]=e||[],p=e?n:r;if(p){const c=e?p(l,i,o):p(o);return(a||vs)[s]=c}})),Bo=t=>vs[t],Xs="__osOptionsValidationPlugin",Co="data-overlayscrollbars",se="os-environment",re=`${se}-scrollbar-hidden`,Le=`${Co}-initialize`,ne="noClipping",fs=`${Co}-body`,vo=Co,Gs="host",bo=`${Co}-viewport`,Js=Xo,qs=Kt,tr="arrange",hs="measuring",or="scrolling",ys="scrollbarHidden",er="noContent",Ne=`${Co}-padding`,gs=`${Co}-content`,Re="os-size-observer",sr=`${Re}-appear`,rr=`${Re}-listener`,Br=null,Wr=null,Yr=null,nr="os-trinsic-observer",lr="os-theme-none",Ht="os-scrollbar",cr=`${Ht}-rtl`,ar=`${Ht}-horizontal`,ir=`${Ht}-vertical`,ws=`${Ht}-track`,$e=`${Ht}-handle`,dr=`${Ht}-visible`,ur=`${Ht}-cornerless`,xs=`${Ht}-interaction`,zs=`${Ht}-unusable`,He=`${Ht}-auto-hide`,Ss=`${He}-hidden`,Ms=`${Ht}-wheel`,_r=`${ws}-interactive`,pr=`${$e}-interactive`,br="__osSizeObserverPlugin",Fr=null,vr=(t,o)=>{const{T:e}=o,[s,r]=t("showNativeOverlaidScrollbars");return[s&&e.x&&e.y,r]},jo=t=>t.indexOf(Gt)===0,mr=(t,o)=>{const e=(r,n,l,i)=>{const a=r===Gt?Zt:r.replace(`${Gt}-`,""),p=jo(r),c=jo(l);return!n&&!i?Zt:p&&c?Gt:p?n&&i?a:n?Gt:Zt:n?a:c&&i?Gt:Zt},s={x:e(o.x,t.x,o.y,t.y),y:e(o.y,t.y,o.x,t.x)};return{k:s,R:{x:s.x===Jt,y:s.y===Jt}}},Ts="__osScrollbarsHidingPlugin",Vr=null,fr="__osClickScrollPlugin",Kr=null,Es=t=>JSON.stringify(t,((o,e)=>{if(tt(e))throw 0;return e})),ks=(t,o)=>t?`${o}`.split(".").reduce(((e,s)=>e&&Et(e,s)?e[s]:void 0),t):void 0,hr={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Os=(t,o)=>{const e={},s=ho(Rt(o),Rt(t));return Y(s,(r=>{const n=t[r],l=o[r];if(So(n)&&So(l))V(e[r]={},Os(n,l)),$o(e[r])&&delete e[r];else if(Et(o,r)&&l!==n){let i=!0;if(Ft(n)||Ft(l))try{Es(n)===Es(l)&&(i=!1)}catch(a){}i&&(e[r]=l)}})),e},As=(t,o,e)=>s=>[ks(t,s),e||ks(o,s)!==void 0];let Ds;const yr=()=>Ds,gr=t=>{Ds=t};let Ue;const wr=()=>{const t=(m,E,O)=>{Lt(document.body,m),Lt(document.body,m);const C=ls(m),R=Io(m),A=Oe(E);return O&&Ao(m),{x:R.h-C.h+A.h,y:R.w-C.w+A.w}},o=m=>{let E=!1;const O=ze(m,re);try{E=po(m,"scrollbar-width")==="none"||po(m,"display","::-webkit-scrollbar")==="none"}catch(C){}return O(),E},e=`.${se}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${se} div{width:200%;height:200%;margin:10px 0}.${re}{scrollbar-width:none!important}.${re}::-webkit-scrollbar,.${re}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`,r=os(`<div class="${se}"><div></div><style>${e}</style></div>`)[0],n=r.firstChild,l=r.lastChild,i=yr();i&&(l.nonce=i);const[a,,p]=Pe(),[c,b]=$({o:t(r,n),i:uo},I(t,r,n,!0)),[h]=b(),g=o(r),d={x:h.x===0,y:h.y===0},x={elements:{host:null,padding:!g,viewport:m=>g&&qe(m)&&m,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},P=V({},hr),z=I(V,{},P),L=I(V,{},x),U={N:h,T:d,P:g,G:!!dt,K:I(a,"r"),Z:L,tt:m=>V(x,m)&&L(),nt:z,ot:m=>V(P,m)&&z(),st:V({},x),et:V({},P)};if(to(r,"style"),Ao(r),ct(et,"resize",(()=>{p("r",[])})),tt(et.matchMedia)&&!g&&(!d.x||!d.y)){const m=E=>{const O=et.matchMedia(`(resolution: ${et.devicePixelRatio}dppx)`);ct(O,"change",(()=>{E(),m(E)}),{A:!0})};m((()=>{const[E,O]=c();V(U.N,E),p("r",[O])}))}return U},eo=()=>(Ue||(Ue=wr()),Ue),xr=(t,o,e)=>{let s=!1;const r=e?new WeakMap:!1,n=()=>{s=!0},l=i=>{if(r&&e){const a=e.map((p=>{const[c,b]=p||[];return[b&&c?(i||Je)(c,t):[],b]}));Y(a,(p=>Y(p[0],(c=>{const b=p[1],h=r.get(c)||[];if(t.contains(c)&&b){const d=ct(c,b,(x=>{s?(d(),r.delete(c)):o(x)}));r.set(c,lt(h,d))}else ht(h),r.delete(c)}))))}};return l(),[n,l]},Is=(t,o,e,s)=>{let r=!1;const{ct:n,rt:l,lt:i,it:a,ut:p,ft:c}=s||{},b=F((()=>r&&e(!0)),{_:33,p:99}),[h,g]=xr(t,b,i),d=n||[],x=l||[],P=ho(d,x),z=(U,m)=>{if(!Vt(m)){const E=p||qt,O=c||qt,C=[],R=[];let A=!1,v=!1;if(Y(m,(S=>{const{attributeName:w,target:N,type:B,oldValue:Q,addedNodes:X,removedNodes:K}=S,J=B==="attributes",Z=B==="childList",ut=t===N,j=J&&w,u=j&&ge(N,w||""),f=Wt(u)?u:null,M=j&&Q!==f,_=fe(x,w)&&M;if(o&&(Z||!ut)){const k=J&&M,T=k&&a&&Se(N,a),H=(T?!E(N,w,Q,f):!J||k)&&!O(S,!!T,t,s);Y(X,(G=>lt(C,G))),Y(K,(G=>lt(C,G))),v=v||H}!o&&ut&&M&&!E(N,w,Q,f)&&(lt(R,w),A=A||_)})),g((S=>ao(C).reduce(((w,N)=>(lt(w,Je(S,N)),Se(N,S)?lt(w,N):w)),[]))),o)return!U&&v&&e(!1),[!1];if(!Vt(R)||A){const S=[ao(R),A];return U||e.apply(0,S),S}}},L=new gt(I(z,!1));return[()=>(L.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:P,subtree:o,childList:o,characterData:o}),r=!0,()=>{r&&(h(),L.disconnect(),r=!1)}),()=>{if(r)return b.m(),z(!0,L.takeRecords())}]};let xo=null;const Cs=(t,o,e)=>{const{_t:s}=e||{},r=Bo(br),[n]=$({o:!1,u:!0});return()=>{const l=[],a=os(`<div class="${Re}"><div class="${rr}"></div></div>`)[0],p=a.firstChild,c=b=>{const h=b instanceof ResizeObserverEntry;let g=!1,d=!1;if(h){const[x,,P]=n(b.contentRect),z=De(x);d=cs(x,P),g=!d&&!z}else d=b===!0;g||o({dt:!0,_t:d})};if(q){if(!Yt(xo)){const d=new q(qt);d.observe(t,{get box(){xo=!0}}),xo=xo||!1,d.disconnect()}const b=F(c,{_:0,p:0}),h=d=>b(d.pop()),g=new q(h);if(g.observe(xo?t:p),lt(l,[()=>g.disconnect(),!xo&&Lt(t,a)]),xo){const d=new q(h);d.observe(t,{box:"border-box"}),lt(l,(()=>d.disconnect()))}}else if(r){const[b,h]=r(p,c,s);lt(l,ho([ze(a,sr),ct(a,"animationstart",b),Lt(t,a)],h))}else return qt;return I(ht,l)}},zr=(t,o)=>{let e;const s=a=>a.h===0||a.isIntersecting||a.intersectionRatio>0,r=Do(nr),[n]=$({o:!1}),l=(a,p)=>{if(a){const c=n(s(a)),[,b]=c;return b&&!p&&o(c)&&[c]}},i=(a,p)=>l(p.pop(),a);return[()=>{const a=[];if(Mt)e=new Mt(I(i,!1),{root:t}),e.observe(r),lt(a,(()=>{e.disconnect()}));else{const p=()=>{const c=Io(r);l(c)};lt(a,Cs(r,p)()),p()}return I(ht,lt(a,Lt(t,r)))},()=>e&&i(!0,e.takeRecords())]},Sr=(t,o,e,s)=>{let r,n,l,i,a,p;const c=`[${vo}]`,b=`[${bo}]`,h=["id","class","style","open","wrap","cols","rows"],{vt:g,ht:d,U:x,gt:P,bt:z,L,wt:U,yt:m,St:E,Ot:O}=t,C=_=>po(_,"direction")==="rtl",R={$t:!1,F:C(g)},A=eo(),v=Bo(Ts),[S]=$({i:go,o:{w:0,h:0}},(()=>{const _=v&&v.V(t,o,R,A,e).W,T=!(U&&L)&&xe(d,vo,ne),D=!L&&m(tr),H=D&&$t(P),G=H&&O(),at=E(hs,T),ot=D&&_&&_()[0],kt=ee(x),W=Oe(x);return ot&&ot(),oo(P,H),G&&G(),T&&at(),{w:kt.w+W.w,h:kt.h+W.h}})),w=F(s,{_:()=>r,p:()=>n,S(_,k){const[T]=_,[D]=k;return[ho(Rt(T),Rt(D)).reduce(((H,G)=>(H[G]=T[G]||D[G],H)),{})]}}),N=_=>{const k=C(g);V(_,{Ct:p!==k}),V(R,{F:k}),p=k},B=(_,k)=>{const[T,D]=_,H={xt:D};return V(R,{$t:T}),k||s(H),H},Q=({dt:_,_t:k})=>{const D=!(_&&!k)&&A.P?w:s,H={dt:_||k,_t:k};N(H),D(H)},X=(_,k)=>{const[,T]=S(),D={Ht:T};return N(D),T&&!k&&(_?s:w)(D),D},K=(_,k,T)=>{const D={Et:k};return N(D),k&&!T&&w(D),D},[J,Z]=z?zr(d,B):[],ut=!L&&Cs(d,Q,{_t:!0}),[j,u]=Is(d,!1,K,{rt:h,ct:h}),f=L&&q&&new q((_=>{const k=_[_.length-1].contentRect;Q({dt:!0,_t:cs(k,a)}),a=k})),M=F((()=>{const[,_]=S();s({Ht:_})}),{_:222,v:!0});return[()=>{f&&f.observe(d);const _=ut&&ut(),k=J&&J(),T=j(),D=A.K((H=>{H?w({zt:H}):M()}));return()=>{f&&f.disconnect(),_&&_(),k&&k(),i&&i(),T(),D()}},({It:_,At:k,Dt:T})=>{const D={},[H]=_("update.ignoreMutation"),[G,at]=_("update.attributes"),[ot,kt]=_("update.elementEvents"),[W,ft]=_("update.debounce"),Nt=kt||at,yt=k||T,wt=bt=>tt(H)&&H(bt);if(Nt){l&&l(),i&&i();const[bt,vt]=Is(z||x,!0,X,{ct:ho(h,G||[]),lt:ot,it:c,ft:(_t,rt)=>{const{target:xt,attributeName:jt}=_t;return(!rt&&jt&&!L?Us(xt,c,b):!1)||!!Oo(xt,`.${Ht}`)||!!wt(_t)}});i=bt(),l=vt}if(ft)if(w.m(),Ft(W)){const bt=W[0],vt=W[1];r=Tt(bt)&&bt,n=Tt(vt)&&vt}else Tt(W)?(r=W,n=!1):(r=!1,n=!1);if(yt){const bt=u(),vt=Z&&Z(),_t=l&&l();bt&&V(D,K(bt[0],bt[1],yt)),vt&&V(D,B(vt[0],yt)),_t&&V(D,X(_t[0],yt))}return N(D),D},R]},js=(t,o)=>tt(o)?o.apply(0,t):o,Mr=(t,o,e,s)=>{const r=no(s)?e:s;return js(t,r)||o.apply(0,t)},Ps=(t,o,e,s)=>{const r=no(s)?e:s,n=js(t,r);return!!n&&(lo(n)?n:o.apply(0,t))},Tr=(t,o)=>{const{nativeScrollbarsOverlaid:e,body:s}=o||{},{T:r,P:n,Z:l}=eo(),{nativeScrollbarsOverlaid:i,body:a}=l().cancel,p=e!=null?e:i,c=no(s)?a:s,b=(r.x||r.y)&&p,h=t&&(Bt(c)?!n:c);return!!b||!!h},Er=(t,o,e,s)=>{const r="--os-viewport-percent",n="--os-scroll-percent",l="--os-scroll-direction",{Z:i}=eo(),{scrollbars:a}=i(),{slot:p}=a,{vt:c,ht:b,U:h,Mt:g,gt:d,wt:x,L:P}=o,{scrollbars:z}=g?{}:t,{slot:L}=z||{},U=[],m=[],E=[],O=Ps([c,b,h],(()=>P&&x?c:b),p,L),C=j=>{if(dt){let u=null,f=[];const M=new dt({source:d,axis:j}),_=()=>{u&&u.cancel(),u=null};return{Rt:T=>{const{Tt:D}=e,H=Ce(D)[j],G=j==="x",at=[ke(0,G),ke(`calc(100cq${G?"w":"h"} + -100%)`,G)],ot=H?at:at.reverse();return f[0]===ot[0]&&f[1]===ot[1]||(_(),f=ot,u=T.kt.animate({clear:["left"],transform:ot},{timeline:M})),_}}}},R={x:C("x"),y:C("y")},A=()=>{const{Vt:j,Lt:u}=e,f=(M,_)=>Ke(0,1,M/(M+_)||0);return{x:f(u.x,j.x),y:f(u.y,j.y)}},v=(j,u,f)=>{const M=f?ze:Ge;Y(j,(_=>{M(_.Ut,u)}))},S=(j,u)=>{Y(j,(f=>{const[M,_]=u(f);Uo(M,_)}))},w=(j,u,f)=>{const M=Yt(f),_=M?f:!0,k=M?!f:!0;_&&v(m,j,u),k&&v(E,j,u)},N=()=>{const j=A(),u=f=>M=>[M.Ut,{[r]:Ee(f)+""}];S(m,u(j.x)),S(E,u(j.y))},B=()=>{if(!dt){const{Tt:j}=e,u=_s(j,$t(d)),f=M=>_=>[_.Ut,{[n]:Ee(M)+""}];S(m,f(u.x)),S(E,f(u.y))}},Q=()=>{const{Tt:j}=e,u=Ce(j),f=M=>_=>[_.Ut,{[l]:M?"0":"1"}];S(m,f(u.x)),S(E,f(u.y)),dt&&(m.forEach(R.x.Rt),E.forEach(R.y.Rt))},X=()=>{if(P&&!x){const{Vt:j,Tt:u}=e,f=Ce(u),M=_s(u,$t(d)),_=k=>{const{Ut:T}=k,D=Ho(T)===h&&T,H=(G,at,ot)=>{const kt=at*G;return rs(ot?kt:-kt)};return[D,D&&{transform:ke({x:H(M.x,j.x,f.x),y:H(M.y,j.y,f.y)})}]};S(m,_),S(E,_)}},K=j=>{const u=j?"x":"y",M=Do(`${Ht} ${j?ar:ir}`),_=Do(ws),k=Do($e),T={Ut:M,Pt:_,kt:k},D=R[u];return lt(j?m:E,T),lt(U,[Lt(M,_),Lt(_,k),I(Ao,M),D&&D.Rt(T),s(T,w,j)]),T},J=I(K,!0),Z=I(K,!1),ut=()=>(Lt(O,m[0].Ut),Lt(O,E[0].Ut),I(ht,U));return J(),Z(),[{Nt:N,qt:B,Bt:Q,Ft:X,jt:w,Xt:{Yt:m,Wt:J,Jt:I(S,m)},Gt:{Yt:E,Wt:Z,Jt:I(S,E)}},ut]},kr=(t,o,e,s)=>(r,n,l)=>{const{ht:i,U:a,L:p,gt:c,Kt:b,Ot:h}=o,{Ut:g,Pt:d,kt:x}=r,[P,z]=st(333),[L,U]=st(444),m=C=>{tt(c.scrollBy)&&c.scrollBy({behavior:"smooth",left:C.x,top:C.y})},E=()=>{const C="pointerup pointercancel lostpointercapture",R=`client${l?"X":"Y"}`,A=l?Eo:ko,v=l?"left":"top",S=l?"w":"h",w=l?"x":"y",N=(Q,X)=>K=>{const{Vt:J}=e,Z=Io(d)[S]-Io(x)[S],j=X*K/Z*J[w];oo(c,{[w]:Q+j})},B=[];return ct(d,"pointerdown",(Q=>{const X=Oo(Q.target,`.${$e}`)===x,K=X?x:d,J=t.scrollbars,Z=J[X?"dragScroll":"clickScroll"],{button:ut,isPrimary:j,pointerType:u}=Q,{pointers:f}=J;if(ut===0&&j&&Z&&(f||[]).includes(u)){ht(B),U();const _=!X&&(Q.shiftKey||Z==="instant"),k=I(Ae,x),T=I(Ae,d),D=(rt,xt)=>(rt||k())[v]-(xt||T())[v],H=At(Ae(c)[A])/Io(c)[S]||1,G=N($t(c)[w],1/H),at=Q[R],ot=k(),kt=T(),W=ot[A],ft=D(ot,kt)+W/2,Nt=at-kt[v],yt=X?0:Nt-ft,wt=rt=>{ht(_t),K.releasePointerCapture(rt.pointerId)},bt=X||_,vt=h(),_t=[ct(b,C,wt),ct(b,"selectstart",(rt=>Ie(rt)),{H:!1}),ct(d,C,wt),bt&&ct(d,"pointermove",(rt=>G(yt+(rt[R]-at)))),bt&&(()=>{const rt=$t(c);vt();const xt=$t(c),jt={x:xt.x-rt.x,y:xt.y-rt.y};(St(jt.x)>3||St(jt.y)>3)&&(h(),oo(c,rt),m(jt),L(vt))})];if(K.setPointerCapture(Q.pointerId),_)G(yt);else if(!X){const rt=Bo(fr);if(rt){const xt=rt(G,yt,W,(jt=>{jt?vt():lt(_t,vt)}));lt(_t,xt),lt(B,I(xt,!0))}}}}))};let O=!0;return I(ht,[ct(x,"pointermove pointerleave",s),ct(g,"pointerenter",(()=>{n(xs,!0)})),ct(g,"pointerleave pointercancel",(()=>{n(xs,!1)})),!p&&ct(g,"mousedown",(()=>{const C=Te();(Ze(C,bo)||Ze(C,vo)||C===document.body)&&It(I(je,a),25)})),ct(g,"wheel",(C=>{const{deltaX:R,deltaY:A,deltaMode:v}=C;O&&v===0&&Ho(g)===i&&m({x:R,y:A}),O=!1,n(Ms,!0),P((()=>{O=!0,n(Ms)})),Ie(C)}),{H:!1,I:!0}),ct(g,"pointerdown",I(ct,b,"click",ds,{A:!0,I:!0,H:!1}),{I:!0}),E(),z,U])},Or=(t,o,e,s,r,n)=>{let l,i,a,p,c,b=qt,h=0;const g=["mouse","pen"],d=u=>g.includes(u.pointerType),[x,P]=st(),[z,L]=st(100),[U,m]=st(100),[E,O]=st((()=>h)),[C,R]=Er(t,r,s,kr(o,r,s,(u=>d(u)&&J()))),{ht:A,Qt:v,wt:S}=r,{jt:w,Nt:N,qt:B,Bt:Q,Ft:X}=C,K=(u,f)=>{if(O(),u)w(Ss);else{const M=I(w,Ss,!0);h>0&&!f?E(M):M()}},J=()=>{(a?!l:!p)&&(K(!0),z((()=>{K(!1)})))},Z=u=>{w(He,u,!0),w(He,u,!1)},ut=u=>{d(u)&&(l=a,a&&K(!0))},j=[O,L,m,P,()=>b(),ct(A,"pointerover",ut,{A:!0}),ct(A,"pointerenter",ut),ct(A,"pointerleave",(u=>{d(u)&&(l=!1,a&&K(!1))})),ct(A,"pointermove",(u=>{d(u)&&i&&J()})),ct(v,"scroll",(u=>{x((()=>{B(),J()})),n(u),X()}))];return[()=>I(ht,lt(j,R())),({It:u,Dt:f,Zt:M,tn:_})=>{const{nn:k,sn:T,en:D,cn:H}=_||{},{Ct:G,_t:at}=M||{},{F:ot}=e,{T:kt}=eo(),{k:W,rn:ft}=s,[Nt,yt]=u("showNativeOverlaidScrollbars"),[wt,bt]=u("scrollbars.theme"),[vt,_t]=u("scrollbars.visibility"),[rt,xt]=u("scrollbars.autoHide"),[jt,Wo]=u("scrollbars.autoHideSuspend"),[le]=u("scrollbars.autoHideDelay"),[ce,ae]=u("scrollbars.dragScroll"),[zo,Yo]=u("scrollbars.clickScroll"),[ie,We]=u("overflow"),Ye=at&&!f,Fe=ft.x||ft.y,so=k||T||H||G||f,Ve=D||_t||We,de=Nt&&kt.x&&kt.y,ue=(fo,Fo,Vo)=>{const _e=fo.includes(Jt)&&(vt===Gt||vt==="auto"&&Fo===Jt);return w(dr,_e,Vo),_e};if(h=le,Ye&&(jt&&Fe?(Z(!1),b(),U((()=>{b=ct(v,"scroll",I(Z,!0),{A:!0})}))):Z(!0)),yt&&w(lr,de),bt&&(w(c),w(wt,!0),c=wt),Wo&&!jt&&Z(!0),xt&&(i=rt==="move",a=rt==="leave",p=rt==="never",K(p,!0)),ae&&w(pr,ce),Yo&&w(_r,!!zo),Ve){const fo=ue(ie.x,W.x,!0),Fo=ue(ie.y,W.y,!1);w(ur,!(fo&&Fo))}so&&(B(),N(),X(),H&&Q(),w(zs,!ft.x,!0),w(zs,!ft.y,!1),w(cr,ot&&!S))},{},C]},Ar=t=>{const o=eo(),{Z:e,P:s}=o,{elements:r}=e(),{padding:n,viewport:l,content:i}=r,a=lo(t),p=a?{}:t,{elements:c}=p,{padding:b,viewport:h,content:g}=c||{},d=a?t:p.target,x=qe(d),P=d.ownerDocument,z=P.documentElement,L=()=>P.defaultView||et,U=I(Mr,[d]),m=I(Ps,[d]),E=I(Do,""),O=I(U,E,l),C=I(m,E,i),R=W=>{const ft=Io(W),Nt=ee(W),yt=po(W,Xo),wt=po(W,Kt);return Nt.w-ft.w>0&&!jo(yt)||Nt.h-ft.h>0&&!jo(wt)},A=O(h),v=A===d,S=v&&x,w=!v&&C(g),N=!v&&A===w,B=S?z:A,Q=S?B:d,X=!v&&m(E,n,b),K=!N&&w,J=[K,B,X,Q].map((W=>lo(W)&&!Ho(W)&&W)),Z=W=>W&&fe(J,W),ut=!Z(B)&&R(B)?B:d,j=S?z:B,f={vt:d,ht:Q,U:B,ln:X,bt:K,gt:j,Qt:S?P:B,an:x?z:ut,Kt:P,wt:x,Mt:a,L:v,un:L,yt:W=>xe(B,bo,W),St:(W,ft)=>qo(B,bo,W,ft),Ot:()=>qo(j,bo,or,!0)},{vt:M,ht:_,ln:k,U:T,bt:D}=f,H=[()=>{to(_,[vo,Le]),to(M,Le),x&&to(z,[Le,vo])}];let G=Me([D,T,k,_,M].find((W=>W&&!Z(W))));const at=S?M:D||T,ot=I(ht,H);return[f,()=>{const W=L(),ft=Te(),Nt=_t=>{Lt(Ho(_t),Me(_t)),Ao(_t)},yt=_t=>ct(_t,"focusin focusout focus blur",ds,{I:!0,H:!1}),wt="tabindex",bt=ge(T,wt),vt=yt(ft);return _o(_,vo,v?"":Gs),_o(k,Ne,""),_o(T,bo,""),_o(D,gs,""),v||(_o(T,wt,bt||"-1"),x&&_o(z,fs,"")),Lt(at,G),Lt(_,k),Lt(k||_,!v&&T),Lt(T,D),lt(H,[vt,()=>{const _t=Te(),rt=Z(T),xt=rt&&_t===T?M:_t,jt=yt(xt);to(k,Ne),to(D,gs),to(T,bo),x&&to(z,fs),bt?_o(T,wt,bt):to(T,wt),Z(D)&&Nt(D),rt&&Nt(T),Z(k)&&Nt(k),je(xt),jt()}]),s&&!v&&(we(T,bo,ys),lt(H,I(to,T,bo))),je(!v&&x&&ft===M&&W.top===W?T:ft),vt(),G=0,ot},ot]},Dr=({bt:t})=>({Zt:o,fn:e,Dt:s})=>{const{xt:r}=o||{},{$t:n}=e;t&&(r||s)&&Uo(t,{[ko]:n&&"100%"})},Ir=({ht:t,ln:o,U:e,L:s},r)=>{const[n,l]=$({i:ye,o:ns()},I(ns,t,"padding",""));return({It:i,Zt:a,fn:p,Dt:c})=>{let[b,h]=l(c);const{P:g}=eo(),{dt:d,Ht:x,Ct:P}=a||{},{F:z}=p,[L,U]=i("paddingAbsolute");(d||h||(c||x))&&([b,h]=n(c));const E=!s&&(U||P||h);if(E){const O=!L||!o&&!g,C=b.r+b.l,R=b.t+b.b,A={[Zo]:O&&!z?-C:0,[Qo]:O?-R:0,[Ko]:O&&z?-C:0,top:O?-b.t:0,right:O?z?-b.r:"auto":0,left:O?z?"auto":-b.l:0,[Eo]:O&&`calc(100% + ${C}px)`},v={[Dt]:O?b.t:0,[Qt]:O?b.r:0,[io]:O?b.b:0,[yo]:O?b.l:0};Uo(o||e,A),Uo(e,v),V(r,{ln:b,_n:!O,j:o?v:V({},A,v)})}return{dn:E}}},Cr=(t,o)=>{const e=eo(),{ht:s,ln:r,U:n,L:l,Qt:i,gt:a,wt:p,St:c,un:b}=t,{P:h}=e,g=p&&l,d=I(zt,0),x={display:()=>!1,direction:u=>u!=="ltr",flexDirection:u=>u.endsWith("-reverse"),writingMode:u=>u!=="horizontal-tb"},P=Rt(x),z={i:go,o:{w:0,h:0}},L={i:uo,o:{}},U=u=>{c(hs,!g&&u)},m=u=>{if(!P.some((at=>{const ot=u[at];return ot&&x[at](ot)})))return{D:{x:0,y:0},M:{x:1,y:1}};U(!0);const M=$t(a),_=c(er,!0),k=ct(i,Jt,(at=>{const ot=$t(a);at.isTrusted&&ot.x===M.x&&ot.y===M.y&&is(at)}),{I:!0,A:!0});oo(a,{x:0,y:0}),_();const T=$t(a),D=ee(a);oo(a,{x:D.w,y:D.h});const H=$t(a);oo(a,{x:H.x-T.x<1&&-D.w,y:H.y-T.y<1&&-D.h});const G=$t(a);return oo(a,M),pt((()=>k())),{D:T,M:G}},E=(u,f)=>{const M=et.devicePixelRatio%1!==0?1:0,_={w:d(u.w-f.w),h:d(u.h-f.h)};return{w:_.w>M?_.w:0,h:_.h>M?_.h:0}},[O,C]=$(z,I(Oe,n)),[R,A]=$(z,I(ee,n)),[v,S]=$(z),[w]=$(L),[N,B]=$(z),[Q]=$(L),[X]=$({i:(u,f)=>Xt(u,f,P),o:{}},(()=>Ks(n)?po(n,P):{})),[K,J]=$({i:(u,f)=>uo(u.D,f.D)&&uo(u.M,f.M),o:us()}),Z=Bo(Ts),ut=(u,f)=>`${f?Js:qs}${he(u)}`,j=u=>{const f=_=>[Gt,Zt,Jt].map((k=>ut(k,_))),M=f(!0).concat(f()).join(" ");c(M),c(Rt(u).map((_=>ut(u[_],_==="x"))).join(" "),!0)};return({It:u,Zt:f,fn:M,Dt:_},{dn:k})=>{const{dt:T,Ht:D,Ct:H,_t:G,zt:at}=f||{},ot=Z&&Z.V(t,o,M,e,u),{Y:kt,W,J:ft}=ot||{},[Nt,yt]=vr(u,e),[wt,bt]=u("overflow"),vt=jo(wt.x),_t=jo(wt.y),rt=T||k||D||H||at||yt;let xt=C(_),jt=A(_),Wo=S(_),le=B(_);if(yt&&h&&c(ys,!Nt),rt){xe(s,vo,ne)&&U(!0);const[Rs]=W?W():[],[pe]=xt=O(_),[be]=jt=R(_),ve=ls(n),me=g&&Vs(b()),Ur={w:d(be.w+pe.w),h:d(be.h+pe.h)},$s={w:d((me?me.w:ve.w+d(ve.w-be.w))+pe.w),h:d((me?me.h:ve.h+d(ve.h-be.h))+pe.h)};Rs&&Rs(),le=N($s),Wo=v(E(Ur,$s),_)}const[ce,ae]=le,[zo,Yo]=Wo,[ie,We]=jt,[Ye,Fe]=xt,[so,Ve]=w({x:zo.w>0,y:zo.h>0}),de=vt&&_t&&(so.x||so.y)||vt&&so.x&&!so.y||_t&&so.y&&!so.x,ue=k||H||at||Fe||We||ae||Yo||bt||yt||rt,fo=mr(so,wt),[Fo,Vo]=Q(fo.k),[_e,Rr]=X(_),Ns=H||G||Rr||Ve||_,[$r,Hr]=Ns?K(m(_e),_):J();return ue&&(Vo&&j(fo.k),ft&&kt&&Uo(n,ft(fo,M,kt(fo,ie,Ye)))),U(!1),qo(s,vo,ne,de),qo(r,Ne,ne,de),V(o,{k:Fo,Lt:{x:ce.w,y:ce.h},Vt:{x:zo.w,y:zo.h},rn:so,Tt:Zs($r,zo)}),{en:Vo,nn:ae,sn:Yo,cn:Hr||Yo,pn:Ns}}},jr=t=>{const[o,e,s]=Ar(t),r={ln:{t:0,r:0,b:0,l:0},_n:!1,j:{[Zo]:0,[Qo]:0,[Ko]:0,[Dt]:0,[Qt]:0,[io]:0,[yo]:0},Lt:{x:0,y:0},Vt:{x:0,y:0},k:{x:Zt,y:Zt},rn:{x:!1,y:!1},Tt:us()},{vt:n,gt:l,L:i,Ot:a}=o,{P:p,T:c}=eo(),b=!p&&(c.x||c.y),h=[Dr(o),Ir(o,r),Cr(o,r)];return[e,g=>{const d={},P=b&&$t(l),z=P&&a();return Y(h,(L=>{V(d,L(g,d)||{})})),oo(l,P),z&&z(),i||oo(n,0),d},r,o,s]},Pr=(t,o,e,s,r)=>{let n=!1;const l=As(o,{}),[i,a,p,c,b]=jr(t),[h,g,d]=Sr(c,p,l,(m=>{U({},m)})),[x,P,,z]=Or(t,o,d,p,c,r),L=m=>Rt(m).some((E=>!!m[E])),U=(m,E)=>{if(e())return!1;const{vn:O,Dt:C,At:R,hn:A}=m,v=O||{},S=!!C||!n,w={It:As(o,v,S),vn:v,Dt:S};if(A)return P(w),!1;const N=E||g(V({},w,{At:R})),B=a(V({},w,{fn:d,Zt:N}));P(V({},w,{Zt:N,tn:B}));const Q=L(N),X=L(B),K=Q||X||!$o(v)||S;return n=!0,K&&s(m,{Zt:N,tn:B}),K};return[()=>{const{an:m,gt:E,Ot:O}=c,C=$t(m),R=[h(),i(),x()],A=O();return oo(E,C),A(),I(ht,R)},U,()=>({gn:d,bn:p}),{wn:c,yn:z},b]},Be=new WeakMap,Lr=(t,o)=>{Be.set(t,o)},Nr=t=>{Be.delete(t)},Ls=t=>Be.get(t),mo=(t,o,e)=>{const{nt:s}=eo(),r=lo(t),n=r?t:t.target,l=Ls(n);if(o&&!l){let i=!1;const a=[],p={},c=v=>{const S=Go(v),w=Bo(Xs);return w?w(S,!0):S},b=V({},s(),c(o)),[h,g,d]=Pe(),[x,P,z]=Pe(e),L=(v,S)=>{z(v,S),d(v,S)},[U,m,E,O,C]=Pr(t,b,(()=>i),(({vn:v,Dt:S},{Zt:w,tn:N})=>{const{dt:B,Ct:Q,xt:X,Ht:K,Et:J,_t:Z}=w,{nn:ut,sn:j,en:u,cn:f}=N;L("updated",[A,{updateHints:{sizeChanged:!!B,directionChanged:!!Q,heightIntrinsicChanged:!!X,overflowEdgeChanged:!!ut,overflowAmountChanged:!!j,overflowStyleChanged:!!u,scrollCoordinatesChanged:!!f,contentMutation:!!K,hostMutation:!!J,appear:!!Z},changedOptions:v||{},force:!!S}])}),(v=>L("scroll",[A,v]))),R=v=>{Nr(n),ht(a),i=!0,L("destroyed",[A,v]),g(),P()},A={options(v,S){if(v){const w=S?s():{},N=Os(b,V(w,c(v)));$o(N)||(V(b,N),m({vn:N}))}return V({},b)},on:x,off:(v,S)=>{v&&S&&P(v,S)},state(){const{gn:v,bn:S}=E(),{F:w}=v,{Lt:N,Vt:B,k:Q,rn:X,ln:K,_n:J,Tt:Z}=S;return V({},{overflowEdge:N,overflowAmount:B,overflowStyle:Q,hasOverflow:X,scrollCoordinates:{start:Z.D,end:Z.M},padding:K,paddingAbsolute:J,directionRTL:w,destroyed:i})},elements(){const{vt:v,ht:S,ln:w,U:N,bt:B,gt:Q,Qt:X}=O.wn,{Xt:K,Gt:J}=O.yn,Z=j=>{const{kt:u,Pt:f,Ut:M}=j;return{scrollbar:M,track:f,handle:u}},ut=j=>{const{Yt:u,Wt:f}=j,M=Z(u[0]);return V({},M,{clone:()=>{const _=Z(f());return m({hn:!0}),_}})};return V({},{target:v,host:S,padding:w||N,viewport:N,content:B||N,scrollOffsetElement:Q,scrollEventElement:X,scrollbarHorizontal:ut(K),scrollbarVertical:ut(J)})},update:v=>m({Dt:v,At:!0}),destroy:I(R,!1),plugin:v=>p[Rt(v)[0]]};return lt(a,[C]),Lr(n,A),ms(bs,mo,[A,h,p]),Tr(O.wn.wt,!r&&t.cancel)?(R(!0),A):(lt(a,U()),L("initialized",[A]),A.update(),A)}return l};mo.plugin=t=>{const o=Ft(t),e=o?t:[t],s=e.map((r=>ms(r,mo)[0]));return Qs(e),o?s:s[0]},mo.valid=t=>{const o=t&&t.elements,e=tt(o)&&o();return Mo(e)&&!!Ls(e.target)},mo.env=()=>{const{N:t,T:o,P:e,G:s,st:r,et:n,Z:l,tt:i,nt:a,ot:p}=eo();return V({},{scrollbarsSize:t,scrollbarsOverlaid:o,scrollbarsHiding:e,scrollTimeline:s,staticDefaultInitialization:r,staticDefaultOptions:n,getDefaultInitialization:l,setDefaultInitialization:i,getDefaultOptions:a,setDefaultOptions:p})},mo.nonce=gr,mo.trustedTypePolicy=Ws},"./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"(ro,Ut,y){var $=y("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Pt=y.n($),et=y("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),zt=y.n(et),Ot=y("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),At=y.n(Ot),St=y("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),mt=y.n(St),nt=y("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),pt=y.n(nt),It=y("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Ct=y.n(It),it=y("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),gt={};gt.styleTagTransform=Ct(),gt.setAttributes=mt(),gt.insert=At().bind(null,"head"),gt.domAPI=zt(),gt.insertStyleElement=pt();var Mt=Pt()(it.A,gt),q=it.A&&it.A.locals?it.A.locals:void 0}}]);})();
