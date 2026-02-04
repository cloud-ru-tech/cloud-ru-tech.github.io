"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[58],{"./node_modules/.pnpm/@snack-uikit+scroll@0.10.5_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js":((M,a,e)=>{e.d(a,{O:()=>V});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),d=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(d),o=e("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/overlayscrollbars.mjs"),p=e("./node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.11.1_react@18.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");const I={S:"s",M:"m"},D={Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"},P={None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"},A={Bottom:"bottom",Right:"right"},L=100,x=2;var C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Y=e.n(C),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(E),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),j=e.n(w),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),f=e.n(_),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=e.n(u),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),n=e.n(N),c=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.5_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"),T={};T.styleTagTransform=n(),T.setAttributes=f(),T.insert=j().bind(null,"head"),T.domAPI=h(),T.insertStyleElement=v();var R=Y()(c.A,T);const y=c.A&&c.A.locals?c.A.locals:void 0;var W=function(S,Q){var G={};for(var z in S)Object.prototype.hasOwnProperty.call(S,z)&&Q.indexOf(z)<0&&(G[z]=S[z]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,z=Object.getOwnPropertySymbols(S);O<z.length;O++)Q.indexOf(z[O])<0&&Object.prototype.propertyIsEnumerable.call(S,z[O])&&(G[z[O]]=S[z[O]]);return G};const H=o.ae.nonce,V=(0,l.forwardRef)(function(Q,G){var{children:z,className:O,onScroll:F,onInitialized:B,size:$=I.M,resize:q=P.None,clickScrolling:ee=!0,barHideStrategy:se=D.Leave,autoscrollTo:k,paddingAbsolute:oe,untouchableScrollbars:te=!1}=Q,le=W(Q,["children","className","onScroll","onInitialized","size","resize","clickScrolling","barHideStrategy","autoscrollTo","paddingAbsolute","untouchableScrollbars"]);const Z=(0,l.useRef)(null),[J,ne]=(0,l.useState)(!1),U=(0,l.useCallback)((r=Z.current)=>r==null?void 0:r.osInstance(),[Z]);(0,l.useImperativeHandle)(G,()=>{var r,s,g;return(g=(s=(r=Z.current)===null||r===void 0?void 0:r.osInstance())===null||s===void 0?void 0:s.elements().viewport)!==null&&g!==void 0?g:null});const K=(0,l.useRef)({scrolledToBottom:!1,scrolledToRight:!1}),X=(0,l.useCallback)(r=>{const s=U(r);if(s){const{viewport:g}=s.elements(),ie=g.scrollHeight-(g.offsetHeight+g.scrollTop),ce=g.scrollWidth-(g.offsetWidth+g.scrollLeft),ue=g.scrollHeight>g.offsetHeight,me=g.scrollWidth>g.offsetWidth;K.current.scrolledToBottom=ie<x||!ue,K.current.scrolledToRight=ce<x||!me}},[U]);(0,b.N)(()=>{if(!k){B==null||B();return}const r=U();if(r&&J){X();const{content:s}=r.elements();k===A.Bottom&&s.scroll(0,s.scrollHeight),k===A.Right&&s.scroll(s.scrollWidth,0)}B==null||B()},[U,J,X]);const re=(0,l.useCallback)(()=>{ne(!0)},[]),ae=(0,l.useCallback)(r=>{F==null||F(r),k&&X()},[F,X]),de=(0,l.useCallback)(()=>{var r;if(!k)return;const s=(r=U())===null||r===void 0?void 0:r.elements();s!=null&&s.content&&(K.current.scrolledToBottom&&k===A.Bottom&&(s==null||s.content.scroll(0,s==null?void 0:s.content.scrollHeight)),K.current.scrolledToRight&&k===A.Right&&(s==null||s.content.scroll(s==null?void 0:s.content.scrollWidth,0)))},[U,k]);return(0,t.jsx)(p.r,Object.assign({},le,{ref:Z,"data-size":$,"data-untouchable-scrollbars":te||void 0,className:m()(O,y.scroll,"osThemeSnack"),style:{resize:q},options:{paddingAbsolute:oe,scrollbars:{autoHide:se,autoHideDelay:L,clickScroll:ee}},events:{initialized:re,scroll:(r,s)=>{ae(s)},updated:de},children:k?J&&z:z}))})}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js":((M,a,e)=>{e.d(a,{m:()=>f});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),d=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const m=[d.El.Top,d.El.Right,d.El.Bottom,d.El.Left];var o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(o),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),b=e.n(l),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=e.n(I),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=e.n(P),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(L),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Y=e.n(C),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),h={};h.styleTagTransform=Y(),h.setAttributes=A(),h.insert=D().bind(null,"head"),h.domAPI=b(),h.insertStyleElement=x();var w=p()(E.A,h);const j=E.A&&E.A.locals?E.A.locals:void 0;var _=function(u,v){var N={};for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&v.indexOf(n)<0&&(N[n]=u[n]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(u);c<n.length;c++)v.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(u,n[c])&&(N[n[c]]=u[n[c]]);return N};function f(u){var{tip:v,trigger:N="hoverAndFocusVisible",placement:n="top",children:c,triggerRef:T,disableMaxWidth:R=!1}=u,y=_(u,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!c&&!T?null:(0,t.jsx)(i.Z,Object.assign({placement:n,popoverContent:(0,t.jsx)("div",{className:j.tooltipContainer,"data-disable-max-width":R,children:v}),trigger:N,triggerRef:T,arrowContainerClassName:j.tooltipArrowContainer,arrowElementClassName:j.tooltipArrowElement,hasArrow:!0,fallbackPlacements:m},y,{children:c}))}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.5_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css":((M,a,e)=>{e.d(a,{A:()=>D});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(d),o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/getUrl.js"),p=e.n(o),l=new URL(e("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),e.b),b=m()(i()),I=p()(l);b.push([M.id,`@charset "UTF-8";
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
}`,""]),b.locals={scroll:"scroll--UF9yV"};const D=b}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((M,a,e)=>{e.d(a,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(d),o=m()(i());o.push([M.id,`.tooltipContainer--HyepD{
  padding:var(--space-tooltip-padding-single, 8px);
  border-radius:var(--radius-tooltip-container, 4px);
  min-width:var(--size-tooltip-container-min-width, 20px);
  max-width:var(--size-tooltip-container-max-width, 416px);
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  overflow:hidden;
  box-sizing:border-box;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  word-wrap:break-word;
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.tooltipContainer--HyepD[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--vK3Ow{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 4px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 4px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--ueRub{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),o.locals={tooltipContainer:"tooltipContainer--HyepD",tooltipArrowContainer:"tooltipArrowContainer--vK3Ow",tooltipArrowElement:"tooltipArrowElement--ueRub"};const p=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/promo-tag-predefined/src/components/styles.module.scss":((M,a,e)=>{e.d(a,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(d),o=m()(i());o.push([M.id,".tooltip--uDiOm{max-width:258px}.trigger--B9W_I{display:inline-flex}",""]),o.locals={tooltip:"tooltip--uDiOm",trigger:"trigger--B9W_I"};const p=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/promo-tag-predefined/stories/styles.module.scss":((M,a,e)=>{e.d(a,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(d),o=m()(i());o.push([M.id,".story--HUqcF{display:flex;align-items:center;justify-content:center;height:400px;padding:24px;background-color:var(--sys-neutral-background1-level, #fdfdfd);border:1px solid var(--sys-neutral-decor-default, #dde0ea);border-radius:var(--dimension-050m, 4px)}",""]),o.locals={story:"story--HUqcF"};const p=o}),"./packages/promo-tag-predefined/src/components/PromoTagPredefined.tsx":((M,a,e)=>{e.d(a,{S:()=>v});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./packages/locale/src/components/Locale.tsx"),m=e("./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.8_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/PromoTag.js"),o=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),l=e("./packages/promo-tag-predefined/src/components/constants.ts"),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(b),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),P=e.n(D),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),L=e.n(A),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),C=e.n(x),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n(Y),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),w=e.n(h),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/promo-tag-predefined/src/components/styles.module.scss"),_={};_.styleTagTransform=w(),_.setAttributes=C(),_.insert=L().bind(null,"head"),_.domAPI=P(),_.insertStyleElement=E();var f=I()(j.A,_);const u=j.A&&j.A.locals?j.A.locals:void 0;function v({context:N=l.n.Service,variant:n,tooltip:c,onClick:T,...R}){const{t:y}=(0,d.F)("PromoTagPredefined"),{tip:W,text:H,appearance:V}=(0,i.useMemo)(()=>{switch(n){case"connecting":return{text:y("connecting"),tip:y("tooltipConnecting"),appearance:"neutral"};case"partner":return{text:y("partner"),tip:y("tooltipPartner"),appearance:"orange"};case"preview":default:return{text:y("preview"),tip:N===l.n.Functional?y("tooltipPreviewFunctional"):y("tooltipPreviewService"),appearance:"blue"}}},[N,y,n]);return(0,t.jsx)(o.m,{...c,tip:W,className:u.tooltip,triggerClassName:u.trigger,hoverDelayOpen:300,children:(0,t.jsx)(m.e,{text:H,appearance:V,onClick:T,color:"decor",size:"xxs",...(0,p.z7)(R)})})}try{v.displayName="PromoTagPredefined",v.__docgenInfo={description:"",displayName:"PromoTagPredefined",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"\u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043F\u0440\u043E\u043C\u043E-\u0442\u0435\u0433\u0430",name:"variant",required:!0,type:{name:"enum",value:[{value:'"preview"'},{value:'"connecting"'},{value:'"partner"'}]}},context:{defaultValue:{value:"service"},description:'\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0442\u0435\u0433\u0430 \u0441 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u043C "preview"',name:"context",required:!1,type:{name:"enum",value:[{value:'"service"'},{value:'"functional"'}]}},tooltip:{defaultValue:null,description:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0442\u0443\u043B\u0442\u0438\u043F\u0430",name:"tooltip",required:!1,type:{name:'Pick<TooltipProps, "trigger" | "placement">'}},onClick:{defaultValue:null,description:"\u041A\u043E\u043B\u0431\u044D\u043A \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043A\u043B\u0438\u043A\u0430 \u043D\u0430 \u0442\u0435\u0433",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/promo-tag-predefined/src/components/PromoTagPredefined.tsx#PromoTagPredefined"]={docgenInfo:v.__docgenInfo,name:"PromoTagPredefined",path:"packages/promo-tag-predefined/src/components/PromoTagPredefined.tsx#PromoTagPredefined"})}catch(N){}}),"./packages/promo-tag-predefined/src/components/constants.ts":((M,a,e)=>{e.d(a,{n:()=>t,x:()=>i});const t={Service:"service",Functional:"functional"},i={Preview:"preview",Connecting:"connecting",Partner:"partner"}}),"./packages/promo-tag-predefined/stories/PromoTagPredefined.story.tsx":((M,a,e)=>{e.r(a),e.d(a,{default:()=>n,promoTagPredefined:()=>T});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js"),d=e("./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/helpers.js");const m=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 2.0.1 (2026-02-02)


### Bug Fixes

* **FF-7841:** update repo links ([1893c4a](https://github.com/cloud-ru-tech/uikit-product/commit/1893c4a3e600069f98ab37c728e167937faa3440))





# 2.0.0 (2026-02-02)


### Bug Fixes

* **FF-6326:** changed translation flow ([b3b6bb4](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b3b6bb4349103a63ce328f6f77d36daed0a7fc6b))
* **FF-7846:** replace tokens usage ([b690050](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b6900500e2f2c73e184f8b67f689f4a42571a154))
* **FF-7861:** massive scope update ([b93fa9f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b93fa9fed13a579f5f02efc16ea43d8bedbd5aca))
* **FF-7861:** update all 0 versions to 1 ([737c2b4](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/737c2b494d48be5132554ae9f03c960a8cbe3a34))
* **LK-4987:** height of tooltip wrapper ([d9379ad](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d9379ad1a387223d1058499caa14f01a7902efa9))
* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))
* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))


### Features

* **LK-4987:** add PromoTag Predefined ([8716c3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/8716c3e6041368fd3fd2d9995546b1dbb9988a7b))


### BREAKING CHANGES


* **PDS-2672:** remove PreviewPromoTag, add PromoTagPredefined component ([380be44](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/380be447e379f99272f186365c187c4952c749b0))




## 0.2.11 (2025-12-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.2.10 (2025-12-08)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.2.9 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.2.8 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.2.7 (2025-11-13)


### Bug Fixes

* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))





## 0.2.6 (2025-11-13)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.2.5 (2025-11-12)


### Bug Fixes

* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))





## 0.2.4 (2025-11-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.2.3 (2025-11-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.2.2 (2025-09-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.2.1 (2025-09-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.2.0 (2025-09-16)


### BREAKING CHANGES


* **PDS-2672:** remove PreviewPromoTag, add PromoTagPredefined component ([380be44](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/380be447e379f99272f186365c187c4952c749b0))




## 0.1.2 (2025-03-20)


### Bug Fixes

* **FF-6326:** changed translation flow ([b3b6bb4](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b3b6bb4349103a63ce328f6f77d36daed0a7fc6b))





## 0.1.1 (2025-02-25)


### Bug Fixes

* **LK-4987:** height of tooltip wrapper ([d9379ad](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d9379ad1a387223d1058499caa14f01a7902efa9))





# 0.1.0 (2025-02-25)


### Features

* **LK-4987:** add PromoTag Predefined ([8716c3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/8716c3e6041368fd3fd2d9995546b1dbb9988a7b))





## CHANGELOG

### v0.0.0

- Initial version
`,o=JSON.parse('{"UU":"@cloud-ru/uikit-product-promo-tag-predefined","rE":"2.0.1"}'),p=`# PromoTag Predefined

## Installation

\`npm i @cloud-ru/uikit-product-promo-tag-predefined\`

[Changelog](./CHANGELOG.md)

[//]: DOCUMENTATION_SECTION_START
[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT
## PromoTagPredefined
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| variant* | enum Variant: \`"preview"\`, \`"connecting"\`, \`"partner"\` | - | \u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043F\u0440\u043E\u043C\u043E-\u0442\u0435\u0433\u0430 |
| context | enum PreviewContext: \`"service"\`, \`"functional"\` | service | \u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0442\u0435\u0433\u0430 \u0441 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u043C "preview" |
| tooltip | \`Pick<TooltipProps, "trigger" \\| "placement">\` | - | \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0442\u0443\u043B\u0442\u0438\u043F\u0430 |
| onClick | \`(e: MouseEvent<HTMLDivElement, MouseEvent>) => void\` | - | \u041A\u043E\u043B\u0431\u044D\u043A \u0434\u043B\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043A\u043B\u0438\u043A\u0430 \u043D\u0430 \u0442\u0435\u0433 |


[//]: DOCUMENTATION_SECTION_END`;var l=e("./packages/promo-tag-predefined/src/components/PromoTagPredefined.tsx"),b=e("./packages/promo-tag-predefined/src/components/constants.ts"),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(I),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(P),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),x=e.n(L),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Y=e.n(C),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=e.n(E),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),j=e.n(w),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/promo-tag-predefined/stories/styles.module.scss"),f={};f.styleTagTransform=j(),f.setAttributes=Y(),f.insert=x().bind(null,"head"),f.domAPI=A(),f.insertStyleElement=h();var u=D()(_.A,f);const v=_.A&&_.A.locals?_.A.locals:void 0;var n={title:"Console/Promo Tag Predefined",component:l.S};const T={render:({isClickable:R,placement:y,trigger:W,...H})=>(0,t.jsx)("div",{className:v.story,children:(0,t.jsx)(l.S,{...H,tooltip:{trigger:W,placement:y},onClick:R?()=>{d.XM.userAction.success({label:"Promo tag clicked!"})}:void 0})}),args:{variant:b.x.Preview,context:b.n.Service,trigger:"hover",placement:"top",isClickable:!1},argTypes:{trigger:{name:"[Story]: \u0422\u0440\u0438\u0433\u0433\u0435\u0440 \u0434\u043B\u044F \u0442\u0443\u043B\u0442\u0438\u043F\u0430",options:Object.values(i.tr),control:{type:"select"}},placement:{name:"[Story]: \u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0434\u043B\u044F \u0442\u0443\u043B\u0442\u0438\u043F\u0430",options:Object.values(i.El),control:{type:"select"}},isClickable:{name:"[Story]: \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u043A\u043B\u0438\u043A\u0430 \u043D\u0430 \u043F\u0440\u043E\u043C\u043E-\u0442\u044D\u0433"},context:{if:{arg:"variant",eq:b.x.Preview}},tooltip:{table:{disable:!0}},onClick:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${o.rE}`,p,m]},packageName:o.UU,design:{name:"Figma",type:"figma",url:"https://www.figma.com/design/kPTe6tEqYw5EAbmY2pl7vE/PDS-1630-%E2%80%A2-PromoTag-Predefined?node-id=27760-4572&t=4uWuEQBJ4y0W4Xzv-4"}}}}),"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=":(M=>{M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="})}]);})();
