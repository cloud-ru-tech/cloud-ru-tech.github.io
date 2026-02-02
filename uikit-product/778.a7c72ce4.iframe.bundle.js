"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[778],{"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/overlayscrollbars@2.8.2/node_modules/overlayscrollbars/styles/overlayscrollbars.css":((Be,ye,nt)=>{nt.d(ye,{A:()=>le});var at=nt("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),ut=nt.n(at),Yt=nt("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),dt=nt.n(Yt),St=dt()(ut());St.push([Be.id,`/*! 
 * OverlayScrollbars
 * Version: 2.8.2
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

[data-overlayscrollbars-viewport~=scrollbarPressed] {
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
  transition: none;
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
  left: 0;
}

.os-scrollbar-vertical .os-scrollbar-handle {
  top: 0;
  right: 0;
}

.os-scrollbar-rtl.os-scrollbar-horizontal .os-scrollbar-handle,
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

.os-scrollbar .os-scrollbar-track {
  border: var(--os-track-border);
  border-radius: var(--os-track-border-radius);
  background: var(--os-track-bg);
  transition: opacity 0.15s, background-color 0.15s, border-color 0.15s;
}
.os-scrollbar .os-scrollbar-track:hover {
  border: var(--os-track-border-hover);
  background: var(--os-track-bg-hover);
}
.os-scrollbar .os-scrollbar-track:active {
  border: var(--os-track-border-active);
  background: var(--os-track-bg-active);
}
.os-scrollbar .os-scrollbar-handle {
  border: var(--os-handle-border);
  border-radius: var(--os-handle-border-radius);
  background: var(--os-handle-bg);
}
.os-scrollbar .os-scrollbar-handle:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: block;
}
.os-scrollbar .os-scrollbar-handle:hover {
  border: var(--os-handle-border-hover);
  background: var(--os-handle-bg-hover);
}
.os-scrollbar .os-scrollbar-handle:active {
  border: var(--os-handle-border-active);
  background: var(--os-handle-bg-active);
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
}`,""]);const le=St}),"./node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.8.2_react@18.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs":((Be,ye,nt)=>{nt.d(ye,{r:()=>Fn});var at=nt("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");/*!
 * OverlayScrollbars
 * Version: 2.8.2
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */const ut=(t,e)=>{const{o,i:s,u:n}=t;let r=o,c;const i=(a,d)=>{const f=r,m=a,b=d||(s?!s(f,m):f!==m);return(b||n)&&(r=m,c=f),[r,b,c]};return[e?a=>i(e(r,c),a):i,a=>[r,!!a,c]]},Yt=typeof window!="undefined"&&typeof document!="undefined",dt=Yt?window:{},St=Math.max,le=Math.min,ae=Math.round,Gt=Math.abs,ge=Math.sign,ie=dt.cancelAnimationFrame,Zt=dt.requestAnimationFrame,Jt=dt.setTimeout,It=dt.clearTimeout,Et=t=>typeof dt[t]!="undefined"?dt[t]:void 0,Eo=Et("MutationObserver"),Ve=Et("IntersectionObserver"),we=Et("ResizeObserver"),Fe=Et("ScrollTimeline"),Oo=Yt&&Node.ELEMENT_NODE,{toString:Is,hasOwnProperty:We}=Object.prototype,Hs=/^\[object (.+)\]$/,de=t=>t===void 0,xe=t=>t===null,Ls=t=>de(t)||xe(t)?`${t}`:Is.call(t).replace(Hs,"$1").toLowerCase(),Ct=t=>typeof t=="number",Se=t=>typeof t=="string",Co=t=>typeof t=="boolean",ft=t=>typeof t=="function",zt=t=>Array.isArray(t),ue=t=>typeof t=="object"&&!zt(t)&&!xe(t),Ee=t=>{const e=!!t&&t.length,o=Ct(e)&&e>-1&&e%1==0;return zt(t)||!ft(t)&&o?e>0&&ue(t)?e-1 in t:!0:!1},Oe=t=>{if(!t||!ue(t)||Ls(t)!=="object")return!1;let e;const o="constructor",s=t[o],n=s&&s.prototype,r=We.call(t,o),c=n&&We.call(n,"isPrototypeOf");if(s&&!r&&!c)return!1;for(e in t);return de(e)||We.call(t,e)},Ce=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===Oo:!1},ze=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===Oo:!1},zo=()=>performance.now(),Yn=(t,e,o,s,n)=>{let r=0;const c=zo(),i=St(0,o),l=u=>{const a=zo(),f=a-c>=i,m=u?1:1-(St(0,c+i-a)/i||0),b=(e-t)*(ft(n)?n(m,m*i,0,1,i):m)+t,g=f||m===1;s&&s(b,m,g),r=g?0:Zt((()=>l()))};return l(),u=>{ie(r),u&&l(u)}};function G(t,e){if(Ee(t))for(let o=0;o<t.length&&e(t[o],o,t)!==!1;o++);else t&&G(Object.keys(t),(o=>e(t[o],o,t)));return t}const Ne=(t,e)=>t.indexOf(e)>=0,$t=(t,e)=>t.concat(e),st=(t,e,o)=>(!o&&!Se(e)&&Ee(e)?Array.prototype.push.apply(t,e):t.push(e),t),Ht=t=>Array.from(t||[]),ko=t=>zt(t)?t:[t],Ue=t=>!!t&&!t.length,Ao=t=>Ht(new Set(t)),wt=(t,e,o)=>{G(t,n=>n&&n.apply(void 0,e||[])),!o&&(t.length=0)},To="paddingTop",Po="paddingRight",$o="paddingLeft",Do="paddingBottom",Mo="marginLeft",Ro="marginRight",Io="marginBottom",js="overflowX",Ks="overflowY",Qt="width",qt="height",Lt="visible",Wt="hidden",te="scroll",Bs=t=>{const e=String(t||"");return e?e[0].toUpperCase()+e.slice(1):""},ke=(t,e,o,s)=>{if(t&&e){let n=!0;return G(o,(r=>{const c=s?s(t[r]):t[r],i=s?s(e[r]):e[r];c!==i&&(n=!1)})),n}return!1},Ho=(t,e)=>ke(t,e,["w","h"]),Ae=(t,e)=>ke(t,e,["x","y"]),Vs=(t,e)=>ke(t,e,["t","r","b","l"]),jt=()=>{},D=(t,...e)=>t.bind(0,...e),Nt=t=>{let e;const o=t?Jt:Zt,s=t?It:ie;return[n=>{s(e),e=o((()=>n()),ft(t)?t():t)},()=>s(e)]},Lo=(t,e)=>{let o,s,n,r=jt;const{_:c,p:i,v:l}=e||{},u=function(b){r(),It(o),o=s=void 0,r=jt,t.apply(this,b)},a=m=>l&&s?l(s,m):m,d=()=>{r!==jt&&u(a(n)||n)},f=function(){const b=Ht(arguments),g=ft(c)?c():c;if(Ct(g)&&g>=0){const E=ft(i)?i():i,v=Ct(E)&&E>=0,R=g>0?Jt:Zt,M=g>0?It:ie,T=a(b)||b,F=u.bind(0,T);r();const V=R(F,g);r=()=>M(V),v&&!o&&(o=Jt(d,E)),s=n=T}else u(b)};return f.m=d,f},jo=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),Dt=t=>t?Object.keys(t):[],U=(t,e,o,s,n,r,c)=>{const i=[e,o,s,n,r,c];return(typeof t!="object"||xe(t))&&!ft(t)&&(t={}),G(i,(l=>{G(l,((u,a)=>{const d=l[a];if(t===d)return!0;const f=zt(d);if(d&&Oe(d)){const m=t[a];let b=m;f&&!zt(m)?b=[]:!f&&!Oe(m)&&(b={}),t[a]=U(b,d)}else t[a]=f?d.slice():d}))})),t},Ko=(t,e)=>G(U({},t),((o,s,n)=>{o===void 0?delete n[s]:e&&o&&Oe(o)&&(n[s]=Ko(o,e))})),Xe=t=>{for(const e in t)return!1;return!0},Ye=(t,e,o)=>St(t,le(e,o)),Ut=t=>Ht(new Set((zt(t)?t:(t||"").split(" ")).filter((e=>e)))),Ge=(t,e)=>t&&t.getAttribute(e),Bo=(t,e)=>t&&t.hasAttribute(e),Mt=(t,e,o)=>{G(Ut(e),(s=>{t&&t.setAttribute(s,String(o||""))}))},kt=(t,e)=>{G(Ut(e),(o=>t&&t.removeAttribute(o)))},Te=(t,e)=>{const o=Ut(Ge(t,e)),s=D(Mt,t,e),n=(r,c)=>{const i=new Set(o);return G(Ut(r),(l=>{i[c](l)})),Ht(i).join(" ")};return{S:r=>s(n(r,"delete")),O:r=>s(n(r,"add")),$:r=>{const c=Ut(r);return c.reduce(((i,l)=>i&&o.includes(l)),c.length>0)}}},Vo=(t,e,o)=>(Te(t,e).S(o),D(Ze,t,e,o)),Ze=(t,e,o)=>(Te(t,e).O(o),D(Vo,t,e,o)),Je=(t,e,o,s)=>(s?Ze:Vo)(t,e,o),Fs=(t,e,o)=>Te(t,e).$(o),Fo=t=>Te(t,"class"),Wo=(t,e)=>{Fo(t).S(e)},Qe=(t,e)=>(Fo(t).O(e),D(Wo,t,e)),No=(t,e)=>{const o=[],s=e?ze(e)&&e:document;return s?st(o,s.querySelectorAll(t)):o},Ws=(t,e)=>{const o=e?ze(e)&&e:document;return o?o.querySelector(t):null},Pe=(t,e)=>ze(t)?t.matches(e):!1,Uo=t=>Pe(t,"body"),qe=t=>t?Ht(t.childNodes):[],ee=t=>t&&t.parentElement,oe=(t,e)=>ze(t)&&t.closest(e),to=t=>(t||document).activeElement,Ns=(t,e,o)=>{const s=oe(t,e),n=t&&Ws(o,s),r=oe(n,e)===s;return s&&n?s===t||n===t||r&&oe(oe(t,o),e)!==s:!1},Kt=t=>{if(Ee(t))G(Ht(t),(e=>Kt(e)));else if(t){const e=ee(t);e&&e.removeChild(t)}},Xo=(t,e,o)=>{if(o&&t){let s=e,n;return Ee(o)?(n=document.createDocumentFragment(),G(o,(r=>{r===s&&(s=r.previousSibling),n.appendChild(r)}))):n=o,e&&(s?s!==e&&(s=s.nextSibling):s=t.firstChild),t.insertBefore(n,s||null),()=>Kt(o)}return jt},ht=(t,e)=>Xo(t,null,e),Yo=(t,e)=>Xo(ee(t),t&&t.nextSibling,e),se=t=>{const e=document.createElement("div");return Mt(e,"class",t),e},Go=t=>{const e=se();return e.innerHTML=t.trim(),G(qe(e),(o=>Kt(o)))},Us=/^--/,Zo=(t,e)=>t.getPropertyValue(e)||t[e]||"",eo=t=>{const e=t||0;return isFinite(e)?e:0},$e=t=>eo(parseFloat(t||"")),Jo=t=>`${(eo(t)*100).toFixed(3)}%`,oo=t=>`${eo(t)}px`;function pe(t,e){t&&e&&G(e,((o,s)=>{try{const n=t.style,r=Ct(o)?oo(o):(o||"")+"";Us.test(s)?n.setProperty(s,r):n[s]=r}catch(n){}}))}function Xt(t,e,o){const s=Se(e);let n=s?"":{};if(t){const r=dt.getComputedStyle(t,o)||t.style;n=s?Zo(r,e):Ht(e).reduce(((c,i)=>(c[i]=Zo(r,i),c)),n)}return n}const Qo=(t,e,o)=>{const s=e?`${e}-`:"",n=o?`-${o}`:"",r=`${s}top${n}`,c=`${s}right${n}`,i=`${s}bottom${n}`,l=`${s}left${n}`,u=Xt(t,[r,c,i,l]);return{t:$e(u[r]),r:$e(u[c]),b:$e(u[i]),l:$e(u[l])}},so=(t,e)=>`translate${ue(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`}`,Xs=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),Ys={w:0,h:0},De=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:Ys,Gs=t=>De("inner",t||dt),be=D(De,"offset"),qo=D(De,"client"),Me=D(De,"scroll"),no=t=>{const e=parseFloat(Xt(t,Qt))||0,o=parseFloat(Xt(t,qt))||0;return{w:e-ae(e),h:o-ae(o)}},_e=t=>t.getBoundingClientRect(),Zs=t=>!!t&&Xs(t),ro=t=>!!(t&&(t[qt]||t[Qt])),ts=(t,e)=>{const o=ro(t);return!ro(e)&&o},es=(t,e,o,s)=>{G(Ut(e),(n=>{t&&t.removeEventListener(n,o,s)}))},q=(t,e,o,s)=>{var n;const r=(n=s&&s.C)!=null?n:!0,c=s&&s.H||!1,i=s&&s.A||!1,l={passive:r,capture:c};return D(wt,Ut(e).map((u=>{const a=i?d=>{es(t,u,a,c),o&&o(d)}:o;return t&&t.addEventListener(u,a,l),D(es,t,u,a,c)})))},os=t=>t.stopPropagation(),co=t=>t.preventDefault(),ss=t=>os(t)||co(t),At=(t,e)=>{const{x:o,y:s}=Ct(e)?{x:e,y:e}:e||{};Ct(o)&&(t.scrollLeft=o),Ct(s)&&(t.scrollTop=s)},mt=t=>({x:t.scrollLeft,y:t.scrollTop}),ns=()=>({I:{x:0,y:0},T:{x:0,y:0}}),Js=(t,e)=>{const{I:o,T:s}=t,{w:n,h:r}=e,c=(d,f,m)=>{let b=ge(d)*m,g=ge(f)*m;if(b===g){const S=Gt(d),E=Gt(f);g=S>E?0:g,b=S<E?0:b}return b=b===g?0:b,[b+0,g+0]},[i,l]=c(o.x,s.x,n),[u,a]=c(o.y,s.y,r);return{I:{x:i,y:u},T:{x:l,y:a}}},rs=({I:t,T:e})=>{const o=(s,n)=>s===0&&s<=n;return{x:o(t.x,e.x),y:o(t.y,e.y)}},cs=({I:t,T:e},o)=>{const s=(n,r,c)=>Ye(0,1,(n-c)/(n-r)||0);return{x:s(t.x,e.x,o.x),y:s(t.y,e.y,o.y)}},lo=t=>{t&&t.focus&&t.focus({preventScroll:!0})},ls=(t,e)=>{G(ko(e),t)},ao=t=>{const e=new Map,o=(r,c)=>{if(r){const i=e.get(r);ls((l=>{i&&i[l?"delete":"clear"](l)}),c)}else e.forEach((i=>{i.clear()})),e.clear()},s=(r,c)=>{if(Se(r)){const u=e.get(r)||new Set;return e.set(r,u),ls((a=>{ft(a)&&u.add(a)}),c),D(o,r,c)}Co(c)&&c&&o();const i=Dt(r),l=[];return G(i,(u=>{const a=r[u];a&&st(l,s(u,a))})),D(wt,l)},n=(r,c)=>{G(Ht(e.get(r)),(i=>{c&&!Ue(c)?i.apply(0,c):i()}))};return s(t||{}),[s,o,n]},as=t=>JSON.stringify(t,((e,o)=>{if(ft(o))throw 0;return o})),is=(t,e)=>t?`${e}`.split(".").reduce(((o,s)=>o&&jo(o,s)?o[s]:void 0),t):void 0,Qs={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},ds=(t,e)=>{const o={},s=$t(Dt(e),Dt(t));return G(s,(n=>{const r=t[n],c=e[n];if(ue(r)&&ue(c))U(o[n]={},ds(r,c)),Xe(o[n])&&delete o[n];else if(jo(e,n)&&c!==r){let i=!0;if(zt(r)||zt(c))try{as(r)===as(c)&&(i=!1)}catch(l){}i&&(o[n]=c)}})),o},us=(t,e,o)=>s=>[is(t,s),o||is(e,s)!==void 0],ne="data-overlayscrollbars",Re="os-environment",Ie=`${Re}-scrollbar-hidden`,io=`${ne}-initialize`,ps="noClipping",bs=`${ne}-body`,re=ne,qs="host",Bt=`${ne}-viewport`,tn=js,en=Ks,on="arrange",uo="measuring",_s="scrollbarHidden",sn="scrollbarPressed",nn="noContent",po=`${ne}-padding`,vs=`${ne}-content`,bo="os-size-observer",rn=`${bo}-appear`,cn=`${bo}-listener`,Gn=null,Zn=null,Jn=null,ln="os-trinsic-observer",an="os-theme-none",yt="os-scrollbar",dn=`${yt}-rtl`,un=`${yt}-horizontal`,pn=`${yt}-vertical`,fs=`${yt}-track`,_o=`${yt}-handle`,bn=`${yt}-visible`,_n=`${yt}-cornerless`,hs=`${yt}-interaction`,ms=`${yt}-unusable`,vo=`${yt}-auto-hide`,ys=`${vo}-hidden`,gs=`${yt}-wheel`,vn=`${fs}-interactive`,fn=`${_o}-interactive`;let fo;const hn=()=>{const t=(v,R,M)=>{ht(document.body,v),ht(document.body,v);const W=qo(v),T=be(v),F=no(R);return M&&Kt(v),{x:T.h-W.h+F.h,y:T.w-W.w+F.w}},e=v=>{let R=!1;const M=Qe(v,Ie);try{R=Xt(v,"scrollbar-width")==="none"||Xt(v,"display","::-webkit-scrollbar")==="none"}catch(W){}return M(),R},o=`.${Re}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${Re} div{width:200%;height:200%;margin:10px 0}.${Ie}{scrollbar-width:none!important}.${Ie}::-webkit-scrollbar,.${Ie}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`,n=Go(`<div class="${Re}"><div></div><style>${o}</style></div>`)[0],r=n.firstChild,[c,,i]=ao(),[l,u]=ut({o:t(n,r),i:Ae},D(t,n,r,!0)),[a]=u(),d=e(n),f={x:a.x===0,y:a.y===0},m={elements:{host:null,padding:!d,viewport:v=>d&&Uo(v)&&v,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},b=U({},Qs),g=D(U,{},b),S=D(U,{},m),E={D:a,k:f,R:d,M:!!Fe,V:D(c,"r"),L:S,P:v=>U(m,v)&&S(),U:g,N:v=>U(b,v)&&g(),j:U({},m),q:U({},b)};if(kt(n,"style"),Kt(n),q(dt,"resize",(()=>{i("r",[])})),ft(dt.matchMedia)&&!d&&(!f.x||!f.y)){const v=R=>{const M=dt.matchMedia(`(resolution: ${dt.devicePixelRatio}dppx)`);q(M,"change",(()=>{R(),v(R)}),{A:!0})};v((()=>{const[R,M]=l();U(E.D,R),i("r",[M])}))}return E},Ot=()=>(fo||(fo=hn()),fo),ws=(t,e)=>ft(e)?e.apply(0,t):e,mn=(t,e,o,s)=>{const n=de(s)?o:s;return ws(t,n)||e.apply(0,t)},xs=(t,e,o,s)=>{const n=de(s)?o:s,r=ws(t,n);return!!r&&(Ce(r)?r:e.apply(0,t))},yn=(t,e)=>{const{nativeScrollbarsOverlaid:o,body:s}=e||{},{k:n,R:r,L:c}=Ot(),{nativeScrollbarsOverlaid:i,body:l}=c().cancel,u=o!=null?o:i,a=de(s)?l:s,d=(n.x||n.y)&&u,f=t&&(xe(a)?!r:a);return!!d||!!f},ho=new WeakMap,gn=(t,e)=>{ho.set(t,e)},wn=t=>{ho.delete(t)},Ss=t=>ho.get(t),xn=(t,e,o)=>{let s=!1;const n=o?new WeakMap:!1,r=()=>{s=!0},c=i=>{if(n&&o){const l=o.map((u=>{const[a,d]=u||[];return[d&&a?(i||No)(a,t):[],d]}));G(l,(u=>G(u[0],(a=>{const d=u[1],f=n.get(a)||[];if(t.contains(a)&&d){const b=q(a,d,(g=>{s?(b(),n.delete(a)):e(g)}));n.set(a,st(f,b))}else wt(f),n.delete(a)}))))}};return c(),[r,c]},Es=(t,e,o,s)=>{let n=!1;const{F:r,B:c,X:i,Y:l,W:u,J:a}=s||{},d=Lo((()=>n&&o(!0)),{_:33,p:99}),[f,m]=xn(t,d,i),b=r||[],g=c||[],S=$t(b,g),E=(R,M)=>{if(!Ue(M)){const W=u||jt,T=a||jt,F=[],V=[];let B=!1,x=!1;if(G(M,(y=>{const{attributeName:O,target:w,type:X,oldValue:I,addedNodes:H,removedNodes:Q}=y,tt=X==="attributes",J=X==="childList",z=t===w,L=tt&&O,$=L&&Ge(w,O||""),N=Se($)?$:null,K=L&&I!==N,h=Ne(g,O)&&K;if(e&&(J||!z)){const k=tt&&K,C=k&&l&&Pe(w,l),_=(C?!W(w,O,I,N):!tt||k)&&!T(y,!!C,t,s);G(H,(A=>st(F,A))),G(Q,(A=>st(F,A))),x=x||_}!e&&z&&K&&!W(w,O,I,N)&&(st(V,O),B=B||h)})),m((y=>Ao(F).reduce(((O,w)=>(st(O,No(y,w)),Pe(w,y)?st(O,w):O)),[]))),e)return!R&&x&&o(!1),[!1];if(!Ue(V)||B){const y=[Ao(V),B];return!R&&o.apply(0,y),y}}},v=new Eo(D(E,!1));return[()=>(v.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:S,subtree:e,childList:e,characterData:e}),n=!0,()=>{n&&(f(),v.disconnect(),n=!1)}),()=>{if(n)return d.m(),E(!0,v.takeRecords())}]},Os={},Cs={},Sn=t=>{G(t,(e=>G(e,((o,s)=>{Os[s]=e[s]}))))},zs=(t,e,o)=>Dt(t).map((s=>{const{static:n,instance:r}=t[s],[c,i,l]=o||[],u=o?r:n;if(u){const a=o?u(c,i,e):u(e);return(l||Cs)[s]=a}})),ve=t=>Cs[t],En="__osOptionsValidationPlugin",On="__osSizeObserverPlugin",Qn=null,Cn=(t,e)=>{const{k:o}=e,[s,n]=t("showNativeOverlaidScrollbars");return[s&&o.x&&o.y,n]},He=t=>t.indexOf(Lt)===0,zn=(t,e)=>{const o=(n,r,c,i)=>{const l=n===Lt?Wt:n.replace(`${Lt}-`,""),u=He(n),a=He(c);return!r&&!i?Wt:u&&a?Lt:u?r&&i?l:r?Lt:Wt:r?l:a&&i?Lt:Wt},s={x:o(e.x,t.x,e.y,t.y),y:o(e.y,t.y,e.x,t.x)};return{K:s,G:{x:s.x===te,y:s.y===te}}},ks="__osScrollbarsHidingPlugin",qn=null,kn="__osClickScrollPlugin",tr=null,As=(t,e,o)=>{const{dt:s}=o||{},n=ve(On),[r]=ut({o:!1,u:!0});return()=>{const c=[],l=Go(`<div class="${bo}"><div class="${cn}"></div></div>`)[0],u=l.firstChild,a=d=>{const f=d instanceof ResizeObserverEntry;let m=!1,b=!1;if(f){const[g,,S]=r(d.contentRect),E=ro(g);b=ts(g,S),m=!b&&!E}else b=d===!0;m||e({_t:!0,dt:b})};if(we){const d=new we((f=>a(f.pop())));d.observe(u),st(c,(()=>{d.disconnect()}))}else if(n){const[d,f]=n(u,a,s);st(c,$t([Qe(l,rn),q(l,"animationstart",d)],f))}else return jt;return D(wt,st(c,ht(t,l)))}},An=(t,e)=>{let o;const s=l=>l.h===0||l.isIntersecting||l.intersectionRatio>0,n=se(ln),[r]=ut({o:!1}),c=(l,u)=>{if(l){const a=r(s(l)),[,d]=a;return d&&!u&&e(a)&&[a]}},i=(l,u)=>c(u.pop(),l);return[()=>{const l=[];if(Ve)o=new Ve(D(i,!1),{root:t}),o.observe(n),st(l,(()=>{o.disconnect()}));else{const u=()=>{const a=be(n);c(a)};st(l,As(n,u)()),u()}return D(wt,st(l,ht(t,n)))},()=>o&&i(!0,o.takeRecords())]},Tn=(t,e,o,s)=>{let n,r,c,i,l,u;const{R:a}=Ot(),d=`[${re}]`,f=`[${Bt}]`,m=[],b=["wrap","cols","rows"],g=["id","class","style","open"],{ft:S,vt:E,nt:v,ht:R,gt:M,bt:W,tt:T,wt:F,yt:V}=t,B=p=>Xt(p,"direction")==="rtl",x={St:!1,et:B(S)},y=Ot(),O=ve(ks),[w]=ut({i:Ho,o:{w:0,h:0}},(()=>{const p=O&&O.Z(t,e,x,y,o).it,_=!T&&F(on),A=_&&mt(R),P=V(uo,!0),j=_&&p&&p()[0],Y=Me(M),rt=Me(v),pt=no(v);return j&&j(),At(R,A),P(),{w:rt.w+Y.w+pt.w,h:rt.h+Y.h+pt.h}})),X=W?b:$t(g,b),I=Lo(s,{_:()=>n,p:()=>r,v(p,_){const[A]=p,[P]=_;return[$t(Dt(A),Dt(P)).reduce(((j,Y)=>(j[Y]=A[Y]||P[Y],j)),{})]}}),H=p=>{const _=B(S);U(p,{Ot:u!==_}),U(x,{et:_}),u=_},Q=(p,_)=>{const[A,P]=p,j={$t:P};return U(x,{St:A}),!_&&s(j),j},tt=({_t:p,dt:_})=>{const P=!(p&&!_)&&a?I:s,j={_t:p||_,dt:_};H(j),P(j)},J=(p,_)=>{const[,A]=w(),P={Ct:A};return H(P),A&&!_&&(p?s:I)(P),P},z=(p,_,A)=>{const P={xt:_};return H(P),_&&!A&&I(P),P},{V:L}=y,[$,N]=M?An(E,Q):[],K=!T&&As(E,tt,{dt:!0}),[h,k]=Es(E,!1,z,{B:g,F:$t(g,m)}),C=T&&we&&new we((p=>{const _=p[p.length-1].contentRect;tt({_t:!0,dt:ts(_,l)}),l=_}));return[()=>{C&&C.observe(E);const p=K&&K(),_=$&&$(),A=h(),P=L((j=>{const[,Y]=w();I({Ht:j,Ct:Y})}));return()=>{C&&C.disconnect(),p&&p(),_&&_(),i&&i(),A(),P()}},({Et:p,zt:_,At:A})=>{const P={},[j]=p("update.ignoreMutation"),[Y,rt]=p("update.attributes"),[pt,Z]=p("update.elementEvents"),[ct,vt]=p("update.debounce"),xt=Z||rt,it=_||A,gt=lt=>ft(j)&&j(lt);if(xt){c&&c(),i&&i();const[lt,et]=Es(M||v,!0,J,{F:$t(X,Y||[]),X:pt,Y:d,J:(bt,ot)=>{const{target:_t,attributeName:Tt}=bt;return(!ot&&Tt&&!T?Ns(_t,d,f):!1)||!!oe(_t,`.${yt}`)||!!gt(bt)}});i=lt(),c=et}if(vt)if(I.m(),zt(ct)){const lt=ct[0],et=ct[1];n=Ct(lt)&&lt,r=Ct(et)&&et}else Ct(ct)?(n=ct,r=!1):(n=!1,r=!1);if(it){const lt=k(),et=N&&N(),bt=c&&c();lt&&U(P,z(lt[0],lt[1],it)),et&&U(P,Q(et[0],it)),bt&&U(P,J(bt[0],it))}return H(P),P},x]},Pn=(t,e,o,s)=>{const{L:n}=Ot(),{scrollbars:r}=n(),{slot:c}=r,{ft:i,vt:l,nt:u,It:a,ht:d,Tt:f,tt:m}=e,{scrollbars:b}=a?{}:t,{slot:g}=b||{},S=new Map,E=h=>Fe&&new Fe({source:d,axis:h}),v={x:E("x"),y:E("y")},R=xs([i,l,u],(()=>m&&f?i:l),c,g),M=(h,k)=>{if(k){const j=h?Qt:qt,{Dt:Y,kt:rt}=k,pt=_e(rt)[j],Z=_e(Y)[j];return Ye(0,1,pt/Z||0)}const C=h?"x":"y",{Rt:p,Mt:_}=o,A=_[C],P=p[C];return Ye(0,1,A/(A+P)||0)},W=(h,k,C)=>{const p=M(C,h);return 1/p*(1-p)*k},T=h=>U(h,{clear:["left"]}),F=h=>{S.forEach(((k,C)=>{(h?Ne(ko(h),C):!0)&&(G(k||[],(_=>{_&&_.cancel()})),S.delete(C))}))},V=(h,k,C,p)=>{const _=S.get(h)||[],A=_.find((P=>P&&P.timeline===k));A?A.effect=new KeyframeEffect(h,C,{composite:p}):S.set(h,$t(_,[h.animate(C,{timeline:k,composite:p})]))},B=(h,k,C)=>{const p=C?Qe:Wo;G(h,(_=>{p(_.Vt,k)}))},x=(h,k)=>{G(h,(C=>{const[p,_]=k(C);pe(p,_)}))},y=(h,k)=>{x(h,(C=>{const{kt:p}=C;return[p,{[k?Qt:qt]:Jo(M(k))}]}))},O=(h,k)=>{const{Lt:C}=o,p=k?"x":"y",_=v[p],A=rs(C)[p],P=(j,Y)=>so(Jo(W(j,A?Y:1-Y,k)),k);_?G(h,(j=>{const{kt:Y}=j;V(Y,_,T({transform:[0,1].map((rt=>P(j,rt)))}))})):x(h,(j=>[j.kt,{transform:P(j,cs(C,mt(d))[p])}]))},w=h=>m&&!f&&ee(h)===u,X=[],I=[],H=[],Q=(h,k,C)=>{const p=Co(C),_=p?C:!0,A=p?!C:!0;_&&B(I,h,k),A&&B(H,h,k)},tt=()=>{y(I,!0),y(H)},J=()=>{O(I,!0),O(H)},z=()=>{if(m){const{Rt:h,Lt:k}=o,C=rs(k),p=.5;if(v.x&&v.y)G($t(H,I),(({Vt:_})=>{if(w(_)){const A=P=>V(_,v[P],T({transform:[0,C[P]?1:-1].map((j=>so(oo(j*(h[P]-p)),P==="x")))}),"add");A("x"),A("y")}else F(_)}));else{const _=cs(k,mt(d)),A=P=>{const{Vt:j}=P,Y=w(j)&&j,rt=(pt,Z,ct)=>{const vt=Z*pt;return oo(ct?vt:-vt)};return[Y,Y&&{transform:so({x:rt(_.x,h.x,C.x),y:rt(_.y,h.y,C.y)})}]};x(I,A),x(H,A)}}},L=h=>{const C=se(`${yt} ${h?un:pn}`),p=se(fs),_=se(_o),A={Vt:C,Dt:p,kt:_};return st(h?I:H,A),st(X,[ht(C,p),ht(p,_),D(Kt,C),F,s(A,Q,O,h)]),A},$=D(L,!0),N=D(L,!1),K=()=>(ht(R,I[0].Vt),ht(R,H[0].Vt),D(wt,X));return $(),N(),[{Pt:tt,Ut:J,Nt:z,jt:Q,qt:{M:v.x,Ft:I,Bt:$,Xt:D(x,I)},Yt:{M:v.y,Ft:H,Bt:N,Xt:D(x,H)}},K]},$n=(t,e,o,s)=>(n,r,c,i)=>{const{vt:l,nt:u,tt:a,ht:d,Wt:f,yt:m}=e,{Vt:b,Dt:g,kt:S}=n,[E,v]=Nt(333),[R,M]=Nt(444),[W,T]=Nt(),F=D(c,[n],i),V=w=>{ft(d.scrollBy)&&d.scrollBy({behavior:"smooth",left:w.x,top:w.y})},B=i?Qt:qt,x=()=>{const w="pointerup pointercancel lostpointercapture",X=`client${i?"X":"Y"}`,I=i?"left":"top",H=i?"w":"h",Q=i?"x":"y",tt=(J,z)=>L=>{const{Rt:$}=o,N=be(g)[H]-be(S)[H],h=z*L/N*$[Q];At(d,{[Q]:J+h})};return q(g,"pointerdown",(J=>{const z=oe(J.target,`.${_o}`)===S,L=z?S:g,$=t.scrollbars,{button:N,isPrimary:K,pointerType:h}=J,{pointers:k}=$;if(N===0&&K&&$[z?"dragScroll":"clickScroll"]&&(k||[]).includes(h)){M();const p=!z&&J.shiftKey,_=D(_e,S),A=D(_e,g),P=(ot,_t)=>(ot||_())[I]-(_t||A())[I],j=ae(_e(d)[B])/be(d)[H]||1,Y=tt(mt(d)[Q],1/j),rt=J[X],pt=_(),Z=A(),ct=pt[B],vt=P(pt,Z)+ct/2,xt=rt-Z[I],it=z?0:xt-vt,gt=ot=>{wt(bt),L.releasePointerCapture(ot.pointerId)},lt=()=>m(sn,!0),et=lt(),bt=[()=>{const ot=mt(d);et();const _t=mt(d),Tt={x:_t.x-ot.x,y:_t.y-ot.y};(Gt(Tt.x)>3||Gt(Tt.y)>3)&&(lt(),At(d,ot),V(Tt),R(et))},q(f,w,gt),q(f,"selectstart",(ot=>co(ot)),{C:!1}),q(g,w,gt),q(g,"pointermove",(ot=>{const _t=ot[X]-rt;(z||p)&&Y(it+_t)}))];if(L.setPointerCapture(J.pointerId),p)Y(it);else if(!z){const ot=ve(kn);ot&&st(bt,ot(Y,P,it,ct,xt))}}}))};let y=!0;const O=w=>w.propertyName.indexOf(B)>-1;return D(wt,[q(S,"pointermove pointerleave",s),q(b,"pointerenter",(()=>{r(hs,!0)})),q(b,"pointerleave pointercancel",(()=>{r(hs,!1)})),!a&&q(b,"mousedown",(()=>{const w=to();(Bo(w,Bt)||Bo(w,re)||w===document.body)&&Jt(D(lo,u),25)})),q(b,"wheel",(w=>{const{deltaX:X,deltaY:I,deltaMode:H}=w;y&&H===0&&ee(b)===l&&V({x:X,y:I}),y=!1,r(gs,!0),E((()=>{y=!0,r(gs)})),co(w)}),{C:!1,H:!0}),q(S,"transitionstart",(w=>{if(O(w)){const X=()=>{F(),W(X)};X()}})),q(S,"transitionend transitioncancel",(w=>{O(w)&&(T(),F())})),q(b,"pointerdown",D(q,f,"click",ss,{A:!0,H:!0,C:!1}),{H:!0}),x(),v,M,T])},Dn=(t,e,o,s,n,r)=>{let c,i,l,u,a,d=jt,f=0;const m=z=>z.pointerType==="mouse",[b,g]=Nt(),[S,E]=Nt(100),[v,R]=Nt(100),[M,W]=Nt((()=>f)),[T,F]=Pn(t,n,s,$n(e,n,s,(z=>m(z)&&H()))),{vt:V,Jt:B,Tt:x}=n,{jt:y,Pt:O,Ut:w,Nt:X}=T,I=(z,L)=>{if(W(),z)y(ys);else{const $=D(y,ys,!0);f>0&&!L?M($):$()}},H=()=>{(l?!c:!u)&&(I(!0),S((()=>{I(!1)})))},Q=z=>{y(vo,z,!0),y(vo,z,!1)},tt=z=>{m(z)&&(c=l,l&&I(!0))},J=[W,E,R,g,()=>d(),q(V,"pointerover",tt,{A:!0}),q(V,"pointerenter",tt),q(V,"pointerleave",(z=>{m(z)&&(c=!1,l&&I(!1))})),q(V,"pointermove",(z=>{m(z)&&i&&H()})),q(B,"scroll",(z=>{b((()=>{w(),H()})),r(z),X()}))];return[()=>D(wt,st(J,F())),({Et:z,At:L,Kt:$,Gt:N})=>{const{Qt:K,Zt:h,tn:k,nn:C}=N||{},{Ot:p,dt:_}=$||{},{et:A}=o,{k:P}=Ot(),{K:j,sn:Y}=s,[rt,pt]=z("showNativeOverlaidScrollbars"),[Z,ct]=z("scrollbars.theme"),[vt,xt]=z("scrollbars.visibility"),[it,gt]=z("scrollbars.autoHide"),[lt,et]=z("scrollbars.autoHideSuspend"),[bt]=z("scrollbars.autoHideDelay"),[ot,_t]=z("scrollbars.dragScroll"),[Tt,Vt]=z("scrollbars.clickScroll"),[ce,mo]=z("overflow"),yo=_&&!L,go=Y.x||Y.y,wo=K||h||C||p||L,Pt=k||xt||mo,xo=rt&&P.x&&P.y,fe=(he,Ft,Le)=>{const je=he.includes(te)&&(vt===Lt||vt==="auto"&&Ft===te);return y(bn,je,Le),je};if(f=bt,yo&&(lt&&go?(Q(!1),d(),v((()=>{d=q(B,"scroll",D(Q,!0),{A:!0})}))):Q(!0)),pt&&y(an,xo),ct&&(y(a),y(Z,!0),a=Z),et&&!lt&&Q(!0),gt&&(i=it==="move",l=it==="leave",u=it==="never",I(u,!0)),_t&&y(fn,ot),Vt&&y(vn,Tt),Pt){const he=fe(ce.x,j.x,!0),Ft=fe(ce.y,j.y,!1);y(_n,!(he&&Ft))}wo&&(O(),w(),X(),y(ms,!Y.x,!0),y(ms,!Y.y,!1),y(dn,A&&!x))},{},T]},Mn=t=>{const e=Ot(),{L:o,R:s}=e,{elements:n}=o(),{host:r,padding:c,viewport:i,content:l}=n,u=Ce(t),a=u?{}:t,{elements:d}=a,{host:f,padding:m,viewport:b,content:g}=d||{},S=u?t:a.target,E=Uo(S),v=Pe(S,"textarea"),R=S.ownerDocument,M=R.documentElement,W=()=>R.defaultView||dt,T=D(mn,[S]),F=D(xs,[S]),V=D(se,""),B=D(T,V,i),x=D(F,V,l),y=B(b),O=y===S,w=O&&E,X=!O&&x(g),I=!O&&y===X,H=w?M:y,Q=v?T(V,r,f):S,tt=w?H:Q,J=!O&&F(V,c,m),z=!I&&X,L=[z,H,J,tt].map((Z=>Ce(Z)&&!ee(Z)&&Z)),$=Z=>Z&&Ne(L,Z),N=$(H)?S:H,K={ft:S,vt:tt,nt:H,en:J,gt:z,ht:w?M:H,Jt:w?R:H,cn:E?M:N,Wt:R,bt:v,Tt:E,It:u,tt:O,rn:W,wt:Z=>Fs(H,Bt,Z),yt:(Z,ct)=>Je(H,Bt,Z,ct)},{ft:h,vt:k,en:C,nt:p,gt:_}=K,A=[()=>{kt(k,[re,io]),kt(h,io),E&&kt(M,[io,re])}],P=v&&$(k);let j=v?h:qe([_,p,C,k,h].find((Z=>Z&&!$(Z))));const Y=w?h:_||p,rt=D(wt,A);return[K,()=>{const Z=W(),ct=to(),vt=et=>{ht(ee(et),qe(et)),Kt(et)},xt=et=>q(et,"focusin focusout focus blur",ss,{H:!0,C:!1}),it="tabindex",gt=Ge(p,it),lt=xt(ct);return Mt(k,re,O?"":qs),Mt(C,po,""),Mt(p,Bt,""),Mt(_,vs,""),O||(Mt(p,it,gt||"-1"),E&&Mt(M,bs,"")),P&&(Yo(h,k),st(A,(()=>{Yo(k,h),Kt(k)}))),ht(Y,j),ht(k,C),ht(C||k,!O&&p),ht(p,_),st(A,[lt,()=>{const et=to(),bt=$(p),ot=bt&&et===p?h:et,_t=xt(ot);kt(C,po),kt(_,vs),kt(p,Bt),E&&kt(M,bs),gt?Mt(p,it,gt):kt(p,it),$(_)&&vt(_),bt&&vt(p),$(C)&&vt(C),lo(ot),_t()}]),s&&!O&&(Ze(p,Bt,_s),st(A,D(kt,p,Bt))),lo(!O&&E&&ct===h&&Z.top===Z?p:ct),lt(),j=0,rt},rt]},Rn=({gt:t})=>({Kt:e,ln:o,At:s})=>{const{$t:n}=e||{},{St:r}=o;t&&(n||s)&&pe(t,{[qt]:r&&"100%"})},In=({vt:t,en:e,nt:o,tt:s},n)=>{const[r,c]=ut({i:Vs,o:Qo()},D(Qo,t,"padding",""));return({Et:i,Kt:l,ln:u,At:a})=>{let[d,f]=c(a);const{R:m}=Ot(),{_t:b,Ct:g,Ot:S}=l||{},{et:E}=u,[v,R]=i("paddingAbsolute");(b||f||(a||g))&&([d,f]=r(a));const W=!s&&(R||S||f);if(W){const T=!v||!e&&!m,F=d.r+d.l,V=d.t+d.b,B={[Ro]:T&&!E?-F:0,[Io]:T?-V:0,[Mo]:T&&E?-F:0,top:T?-d.t:0,right:T?E?-d.r:"auto":0,left:T?E?"auto":-d.l:0,[Qt]:T&&`calc(100% + ${F}px)`},x={[To]:T?d.t:0,[Po]:T?d.r:0,[Do]:T?d.b:0,[$o]:T?d.l:0};pe(e||o,B),pe(o,x),U(n,{en:d,an:!T,ct:e?x:U({},B,x)})}return{un:W}}},Hn=(t,e)=>{const o=Ot(),{vt:s,en:n,nt:r,tt:c,Jt:i,ht:l,Tt:u,yt:a,rn:d}=t,{R:f}=o,m=u&&c,b=D(St,0),g=["display","direction","flexDirection","writingMode"],S={i:Ho,o:{w:0,h:0}},E={i:Ae,o:{}},v=(L,$)=>{const N=dt.devicePixelRatio%1!==0?1:0,K={w:b(L.w-$.w),h:b(L.h-$.h)};return{w:K.w>N?K.w:0,h:K.h>N?K.h:0}},R=()=>{const L=mt(l),$=a(nn,!0),N=q(i,te,(p=>{const _=mt(l);p.isTrusted&&_.x===L.x&&_.y===L.y&&os(p)}),{H:!0,A:!0});At(l,{x:0,y:0}),$();const K=mt(l),h=Me(l);At(l,{x:h.w,y:h.h});const k=mt(l);At(l,{x:k.x-K.x<1&&-h.w,y:k.y-K.y<1&&-h.h});const C=mt(l);return At(l,L),Zt((()=>N())),{I:K,T:C}},M=()=>U({},Zs(r)?Xt(r,g):{}),[W,T]=ut(S,D(no,r)),[F,V]=ut(S,D(Me,r)),[B,x]=ut(S),[y]=ut(E),[O,w]=ut(S),[X]=ut(E),[I]=ut({i:(L,$)=>ke(L,$,g),o:{}}),[H,Q]=ut({i:(L,$)=>Ae(L.I,$.I)&&Ae(L.T,$.T),o:ns()}),tt=ve(ks),J=(L,$)=>`${$?tn:en}${Bs(L)}`,z=L=>{const{K:$}=L;G(Dt($),(N=>{const K=N==="x",h=[Lt,Wt,te].map((k=>J(k,K)));a(h.join(" ")),a(J($[N],K),!0)}))};return({Et:L,Kt:$,ln:N,At:K},{un:h})=>{const{_t:k,Ct:C,Ot:p,dt:_,Ht:A}=$||{},P=tt&&tt.Z(t,e,N,o,L),{lt:j,it:Y,ut:rt}=P||{},[pt,Z]=Cn(L,o),[ct,vt]=L("overflow"),xt=He(ct.x),it=He(ct.y),gt=k||h||C||p||A||Z;let lt=T(K),et=V(K),bt=x(K),ot=w(K);if(Z&&f&&a(_s,!pt),gt){const[Ps]=Y?Y():[],[Ke]=lt=W(K),[me]=et=F(K),So=qo(r),$s=me,Ds=So;Ps&&Ps();const Ms=Gs(d()),Xn={w:b(St(me.w,$s.w)+Ke.w),h:b(St(me.h,$s.h)+Ke.h)},Rs={w:b((m?Ms.w:Ds.w+b(So.w-me.w))+Ke.w),h:b((m?Ms.h:Ds.h+b(So.h-me.h))+Ke.h)};ot=O(Rs),bt=B(v(Xn,Rs),K)}const[_t,Tt]=ot,[Vt,ce]=bt,[mo,yo]=et,[go,wo]=lt,[Pt,xo]=y({x:Vt.w>0,y:Vt.h>0}),fe=xt&&it&&(Pt.x||Pt.y)||xt&&Pt.x&&!Pt.y||it&&Pt.y&&!Pt.x,he=h||p||A||wo||yo||Tt||ce||vt||Z||gt,Ft=zn(Pt,ct),[Le,je]=X(Ft.K),[,Wn]=I(M(),K),Ts=p||_||Wn||xo||K,[Nn,Un]=Ts?H(R(),K):Q();return he&&(z(Ft),rt&&j&&pe(r,rt(Ft,N,j(Ft,mo,go)))),Je(s,re,ps,fe),Je(n,po,ps,fe),U(e,{K:Le,Mt:{x:_t.w,y:_t.h},Rt:{x:Vt.w,y:Vt.h},sn:Pt,Lt:Js(Nn,Vt)}),{tn:je,Qt:Tt,Zt:ce,nn:Un||ce,dn:Ts}}},Ln=t=>{const[e,o,s]=Mn(t),n={en:{t:0,r:0,b:0,l:0},an:!1,ct:{[Ro]:0,[Io]:0,[Mo]:0,[To]:0,[Po]:0,[Do]:0,[$o]:0},Mt:{x:0,y:0},Rt:{x:0,y:0},K:{x:Wt,y:Wt},sn:{x:!1,y:!1},Lt:ns()},{ft:r,ht:c,tt:i,yt:l}=e,{R:u,k:a}=Ot(),d=!u&&(a.x||a.y),f=[Rn(e),In(e,n),Hn(e,n)];return[o,m=>{const b={},g=d,S=l(uo,!0),E=g&&mt(c);return G(f,(v=>{U(b,v(m,b)||{})})),At(c,E),!i&&At(r,0),S(),b},n,e,s]},jn=(t,e,o,s)=>{const n=us(e,{}),[r,c,i,l,u]=Ln(t),[a,d,f]=Tn(l,i,n,(v=>{E({},v)})),[m,b,,g]=Dn(t,e,f,i,l,s),S=v=>Dt(v).some((R=>!!v[R])),E=(v,R)=>{const{_n:M,At:W,zt:T,fn:F}=v,V=M||{},B=!!W,x={Et:us(e,V,B),_n:V,At:B};if(F)return b(x),!1;const y=R||d(U({},x,{zt:T})),O=c(U({},x,{ln:f,Kt:y}));b(U({},x,{Kt:y,Gt:O}));const w=S(y),X=S(O),I=w||X||!Xe(V)||B;return I&&o(v,{Kt:y,Gt:O}),I};return[()=>{const{cn:v,ht:R,yt:M}=l,W=M(uo,!0),T=mt(v),F=[a(),r(),m()];return At(R,T),W(),D(wt,F)},E,()=>({pn:f,vn:i}),{hn:l,gn:g},u]},Rt=(t,e,o)=>{const{U:s}=Ot(),n=Ce(t),r=n?t:t.target,c=Ss(r);if(e&&!c){let i=!1;const l=[],u={},a=x=>{const y=Ko(x,!0),O=ve(En);return O?O(y,!0):y},d=U({},s(),a(e)),[f,m,b]=ao(),[g,S,E]=ao(o),v=(x,y)=>{E(x,y),b(x,y)},[R,M,W,T,F]=jn(t,d,(({_n:x,At:y},{Kt:O,Gt:w})=>{const{_t:X,Ot:I,$t:H,Ct:Q,xt:tt,dt:J}=O,{Qt:z,Zt:L,tn:$,nn:N}=w;v("updated",[B,{updateHints:{sizeChanged:!!X,directionChanged:!!I,heightIntrinsicChanged:!!H,overflowEdgeChanged:!!z,overflowAmountChanged:!!L,overflowStyleChanged:!!$,scrollCoordinatesChanged:!!N,contentMutation:!!Q,hostMutation:!!tt,appear:!!J},changedOptions:x||{},force:!!y}])}),(x=>v("scroll",[B,x]))),V=x=>{wn(r),wt(l),i=!0,v("destroyed",[B,x]),m(),S()},B={options(x,y){if(x){const O=y?s():{},w=ds(d,U(O,a(x)));Xe(w)||(U(d,w),M({_n:w}))}return U({},d)},on:g,off:(x,y)=>{x&&y&&S(x,y)},state(){const{pn:x,vn:y}=W(),{et:O}=x,{Mt:w,Rt:X,K:I,sn:H,en:Q,an:tt,Lt:J}=y;return U({},{overflowEdge:w,overflowAmount:X,overflowStyle:I,hasOverflow:H,scrollCoordinates:{start:J.I,end:J.T},padding:Q,paddingAbsolute:tt,directionRTL:O,destroyed:i})},elements(){const{ft:x,vt:y,en:O,nt:w,gt:X,ht:I,Jt:H}=T.hn,{qt:Q,Yt:tt}=T.gn,J=L=>{const{kt:$,Dt:N,Vt:K}=L;return{scrollbar:K,track:N,handle:$}},z=L=>{const{Ft:$,Bt:N}=L,K=J($[0]);return U({},K,{clone:()=>{const h=J(N());return M({fn:!0}),h}})};return U({},{target:x,host:y,padding:O||w,viewport:w,content:X||w,scrollOffsetElement:I,scrollEventElement:H,scrollbarHorizontal:z(Q),scrollbarVertical:z(tt)})},update:x=>M({At:x,zt:!0}),destroy:D(V,!1),plugin:x=>u[Dt(x)[0]]};return st(l,[F]),gn(r,B),zs(Os,Rt,[B,f,u]),yn(T.hn.Tt,!n&&t.cancel)?(V(!0),B):(st(l,R()),v("initialized",[B]),B.update(!0),B)}return c};Rt.plugin=t=>{const e=zt(t),o=e?t:[t],s=o.map((n=>zs(n,Rt)[0]));return Sn(o),e?s:s[0]},Rt.valid=t=>{const e=t&&t.elements,o=ft(e)&&e();return Oe(o)&&!!Ss(o.target)},Rt.env=()=>{const{D:t,k:e,R:o,M:s,j:n,q:r,L:c,P:i,U:l,N:u}=Ot();return U({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:o,scrollTimeline:s,staticDefaultInitialization:n,staticDefaultOptions:r,getDefaultInitialization:c,setDefaultInitialization:i,getDefaultOptions:l,setDefaultOptions:u})};const Kn=()=>{if(typeof window>"u"){const u=()=>{};return[u,u]}let t,e;const o=window,s=typeof o.requestIdleCallback=="function",n=o.requestAnimationFrame,r=o.cancelAnimationFrame,c=s?o.requestIdleCallback:n,i=s?o.cancelIdleCallback:r,l=()=>{i(t),r(e)};return[(u,a)=>{l(),t=c(s?()=>{l(),e=n(u)}:u,typeof a=="object"?a:{timeout:2233})},l]},Bn=t=>{const{options:e,events:o,defer:s}=t||{},[n,r]=(0,at.useMemo)(Kn,[]),c=(0,at.useRef)(null),i=(0,at.useRef)(s),l=(0,at.useRef)(e),u=(0,at.useRef)(o);return(0,at.useEffect)(()=>{i.current=s},[s]),(0,at.useEffect)(()=>{const{current:a}=c;l.current=e,Rt.valid(a)&&a.options(e||{},!0)},[e]),(0,at.useEffect)(()=>{const{current:a}=c;u.current=o,Rt.valid(a)&&a.on(o||{},!0)},[o]),(0,at.useEffect)(()=>()=>{var a;r(),(a=c.current)==null||a.destroy()},[]),(0,at.useMemo)(()=>[a=>{const d=c.current;if(Rt.valid(d))return;const f=i.current,m=l.current||{},b=u.current||{},g=()=>c.current=Rt(a,m,b);f?n(g,f):g()},()=>c.current],[])},Vn=(t,e)=>{const{element:o="div",options:s,events:n,defer:r,children:c,...i}=t,l=o,u=(0,at.useRef)(null),a=(0,at.useRef)(null),[d,f]=Bn({options:s,events:n,defer:r});return(0,at.useEffect)(()=>{const{current:m}=u,{current:b}=a;if(!m)return;const g=m;return d(o==="body"?{target:g,cancel:{body:null}}:{target:g,elements:{viewport:b,content:b}}),()=>{var S;return(S=f())==null?void 0:S.destroy()}},[d,o]),(0,at.useImperativeHandle)(e,()=>({osInstance:f,getElement:()=>u.current}),[]),at.createElement(l,{"data-overlayscrollbars-initialize":"",ref:u,...i},o==="body"?c:at.createElement("div",{"data-overlayscrollbars-contents":"",ref:a},c))},Fn=(0,at.forwardRef)(Vn)}),"./node_modules/.pnpm/overlayscrollbars@2.8.2/node_modules/overlayscrollbars/styles/overlayscrollbars.css":((Be,ye,nt)=>{var at=nt("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ut=nt.n(at),Yt=nt("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),dt=nt.n(Yt),St=nt("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),le=nt.n(St),ae=nt("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Gt=nt.n(ae),ge=nt("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),ie=nt.n(ge),Zt=nt("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Jt=nt.n(Zt),It=nt("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/overlayscrollbars@2.8.2/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),Et={};Et.styleTagTransform=Jt(),Et.setAttributes=Gt(),Et.insert=le().bind(null,"head"),Et.domAPI=dt(),Et.insertStyleElement=ie();var Eo=ut()(It.A,Et),Ve=It.A&&It.A.locals?It.A.locals:void 0})}]);})();
