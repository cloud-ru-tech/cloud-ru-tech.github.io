"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5152],{"./node_modules/.pnpm/@snack-uikit+segmented-control@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/components/SegmentedControl.js"(w,S,e){e.d(S,{I:()=>ee});var i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),z=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),b=e.n(z),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),h=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const oe=null,K={Auto:"auto",Full:"full"};var N=e("./node_modules/.pnpm/@snack-uikit+counter@1.0.1_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"),G=e("./node_modules/.pnpm/@snack-uikit+truncate-string@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");const H=(n,l,o)=>o==="xs"?"label-only":n&&l?"icon-before":l?"label-only":"icon-only";var F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=e.n(F),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),C=e.n(X),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=e.n(V),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(J),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(Z),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n($),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+segmented-control@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/helperComponents/Segment/styles.module.css"),x={};x.styleTagTransform=R(),x.setAttributes=M(),x.insert=D().bind(null,"head"),x.domAPI=C(),x.insertStyleElement=B();var re=T()(P.A,x);const I=P.A&&P.A.locals?P.A.locals:void 0;function Q({size:n,label:l,value:o,selected:t,onClick:c,disabled:m,icon:g,counter:v,focusable:u,onGetFocusable:_,onSelectionUpdated:s,renderWrapSegment:r}){const f=(0,a.useRef)(null);(0,a.useEffect)(()=>{u&&(_==null||_(f.current))},[u,_]),(0,a.useEffect)(()=>{t&&f.current&&s(f.current)},[t,f,s]);const j=(0,i.jsxs)("button",{ref:f,"data-test-id":`section-${o}`,"data-active":t||void 0,"data-disabled":m||void 0,"data-layout":H(g,l,n),className:b()(I.segment),onClick:c,"data-size":n,disabled:m,tabIndex:u?0:-1,"aria-checked":t,role:"radio",type:"button",children:[n!=="xs"&&g&&(0,i.jsx)("div",{className:I.icon,children:g}),l&&(0,i.jsx)(G.m,{className:I.label,"data-size":n,text:l}),v&&(0,i.jsx)(N.p,Object.assign({},v,{size:"s"}))]});return r?r(j):j}function Y({selected:n,items:l}){const[o,t]=(0,a.useState)(n),[c,m]=(0,a.useState)(!1),{prev:g,next:v}=(0,a.useMemo)(()=>l.reduce((s,r)=>(s._isNextSearching&&!s.next&&(s.next=r.disabled?s.next:r.value),o===r.value&&(s._isNextSearching=!0),s._isNextSearching||(s.prev=r.disabled?s.prev:r.value),s),{_isNextSearching:!1}),[o,l]),u=(0,a.useCallback)(s=>{switch(s.key){case"ArrowLeft":{g&&(m(!0),t(g));return}case"ArrowRight":{v&&(m(!0),t(v));return}default:return}},[v,g]),_=(0,a.useCallback)(s=>{m(r=>(r&&(s==null||s.focus()),!1))},[]);return{onKeyDown:u,focusableSegmentValue:o,onGetFocusable:_}}var E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+segmented-control@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/components/styles.module.css"),y={};y.styleTagTransform=R(),y.setAttributes=M(),y.insert=D().bind(null,"head"),y.domAPI=C(),y.insertStyleElement=B();var de=T()(E.A,y);const O=E.A&&E.A.locals?E.A.locals:void 0;var q=function(n,l){var o={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&l.indexOf(t)<0&&(o[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,t=Object.getOwnPropertySymbols(n);c<t.length;c++)l.indexOf(t[c])<0&&Object.prototype.propertyIsEnumerable.call(n,t[c])&&(o[t[c]]=n[t[c]]);return o};function ee(n){var{defaultValue:l,size:o="m",className:t,onChange:c,items:m,value:g,outline:v,width:u=K.Auto,name:_}=n,s=q(n,["defaultValue","size","className","onChange","items","value","outline","width","name"]);const[r,f]=(0,p.iC)(g,l,c),{focusableSegmentValue:j,onGetFocusable:U,onKeyDown:se}=Y({selected:r,items:m}),A=(0,a.useRef)(null),L=(0,a.useRef)(),[te,ne]=(0,a.useState)(),k=(0,a.useCallback)((d=L.current)=>{d&&(L.current=d,setTimeout(()=>{ne({top:d.offsetTop,left:d.offsetLeft,width:d.offsetWidth,height:d.offsetHeight})}))},[]);(0,a.useEffect)(()=>{if(!A.current)return;const d=new ResizeObserver(()=>k());d.observe(A.current);const W=new MutationObserver(()=>k());return W.observe(A.current,{childList:!0}),()=>{d.disconnect(),W.disconnect()}},[k]);const ae=(0,a.useMemo)(()=>m.map(d=>(0,i.jsx)("div",{className:O.segmentHolder,"data-width":u,children:(0,i.jsx)(Q,Object.assign({},d,{size:o,onGetFocusable:U,selected:r===d.value,onClick:()=>f(d.value),focusable:j===d.value,onSelectionUpdated:k}))},d.value)),[m,u,o,U,r,j,k,f]);return(0,i.jsxs)("div",Object.assign({ref:A,"data-size":o,onKeyDown:se,className:b()(O.container,t),role:"radiogroup","data-outline":v||void 0,"data-width":u},(0,h.gn)(s),(0,h.z7)(s),{children:[_&&(0,i.jsx)("input",{type:"hidden",value:r,name:_}),(0,i.jsx)("div",{"data-size":o,style:te,className:O.selection,"aria-hidden":!0}),ae]}))}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+segmented-control@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/components/styles.module.css"(w,S,e){e.d(S,{A:()=>h});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),z=e.n(i),b=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(b),p=a()(z());p.push([w.id,`.container--Uqzeg{
  padding-top:var(--space-segmented-control-container-padding, 2px);
  padding-bottom:var(--space-segmented-control-container-padding, 2px);
  padding-left:var(--space-segmented-control-container-padding, 2px);
  padding-right:var(--space-segmented-control-container-padding, 2px);
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:row;
  justify-content:stretch;
  max-width:100%;
}
.container--Uqzeg::before{
  content:" ";
  position:absolute;
  top:0;
  left:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-background, #eeeff3);
  border-style:solid;
}
.container--Uqzeg[data-outline]::before{
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--Uqzeg[data-width=full]{
  display:flex;
}
.container--Uqzeg[data-size=xs]::before{
  border-width:var(--border-width-segmented-control-single, 1px);
  border-radius:var(--radius-segmented-control-container-xs, 4px);
}
.container--Uqzeg[data-size=s]::before{
  border-width:var(--border-width-segmented-control-single, 1px);
  border-radius:var(--radius-segmented-control-container-s, 4px);
}
.container--Uqzeg[data-size=m]::before{
  border-width:var(--border-width-segmented-control-single, 1px);
  border-radius:var(--radius-segmented-control-container-m, 4px);
}
.container--Uqzeg[data-size=l]::before{
  border-width:var(--border-width-segmented-control-single, 1px);
  border-radius:var(--radius-segmented-control-container-l, 4px);
}

.segmentHolder--I8GPi{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  justify-content:center;
  min-width:0;
}
.segmentHolder--I8GPi[data-outline]{
  flex-basis:0;
}

.selection--qbIPI{
  position:absolute;
  overflow:hidden;
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  transition:left 0.15s ease-in-out, width 0.15s ease-in-out;
}
.selection--qbIPI[data-size=xs]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-icon-only, 2px);
  padding-right:var(--space-segmented-control-segment-s-icon-only, 2px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.selection--qbIPI[data-size=s]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-icon-only, 2px);
  padding-right:var(--space-segmented-control-segment-s-icon-only, 2px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.selection--qbIPI[data-size=m]{
  border-radius:var(--radius-segmented-control-segment-m, 2px);
  padding-left:var(--space-segmented-control-segment-m-icon-only, 6px);
  padding-right:var(--space-segmented-control-segment-m-icon-only, 6px);
  gap:var(--space-segmented-control-segment-m-gap, 4px);
  height:var(--size-segmented-control-segment-m, 36px);
}
.selection--qbIPI[data-size=l]{
  border-radius:var(--radius-segmented-control-segment-l, 2px);
  padding-left:var(--space-segmented-control-segment-l-icon-only, 10px);
  padding-right:var(--space-segmented-control-segment-l-icon-only, 10px);
  gap:var(--space-segmented-control-segment-l-gap, 4px);
  height:var(--size-segmented-control-segment-l, 44px);
}`,""]),p.locals={container:"container--Uqzeg",segmentHolder:"segmentHolder--I8GPi",selection:"selection--qbIPI"};const h=p},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+segmented-control@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/helperComponents/Segment/styles.module.css"(w,S,e){e.d(S,{A:()=>h});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),z=e.n(i),b=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(b),p=a()(z());p.push([w.id,`.segment--h5dpp{
  cursor:pointer;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  color:var(--sys-neutral-text-support, #6d707f);
  background-color:transparent;
  border-width:0;
}
.segment--h5dpp:hover{
  color:var(--sys-neutral-text-main, #41424e);
}
.segment--h5dpp[data-disabled], .segment--h5dpp[data-disabled]:hover{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.segment--h5dpp[data-active]{
  color:var(--sys-neutral-text-main, #41424e);
}
.segment--h5dpp[data-active][data-disabled], .segment--h5dpp[data-active][data-disabled]:hover{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.segment--h5dpp:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.segment--h5dpp[data-size=xs][data-layout=label-only]{
  border-radius:var(--radius-segmented-control-segment-xs, 2px);
  padding-left:var(--space-segmented-control-segment-xs-from-label, 8px);
  padding-right:var(--space-segmented-control-segment-xs-from-label, 8px);
  gap:var(--space-segmented-control-segment-xs-gap, 2px);
  height:var(--size-segmented-control-segment-xs, 20px);
}
.segment--h5dpp[data-size=xs][data-layout=icon-before]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-from-icon, 8px);
  padding-right:var(--space-segmented-control-segment-s-from-label, 16px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.segment--h5dpp[data-size=xs][data-layout=icon-only]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-icon-only, 2px);
  padding-right:var(--space-segmented-control-segment-s-icon-only, 2px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.segment--h5dpp[data-size=s][data-layout=label-only]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-from-label, 16px);
  padding-right:var(--space-segmented-control-segment-s-from-label, 16px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.segment--h5dpp[data-size=s][data-layout=icon-before]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-from-icon, 8px);
  padding-right:var(--space-segmented-control-segment-s-from-label, 16px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.segment--h5dpp[data-size=s][data-layout=icon-only]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-icon-only, 2px);
  padding-right:var(--space-segmented-control-segment-s-icon-only, 2px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.segment--h5dpp[data-size=m][data-layout=label-only]{
  border-radius:var(--radius-segmented-control-segment-m, 2px);
  padding-left:var(--space-segmented-control-segment-m-from-label, 16px);
  padding-right:var(--space-segmented-control-segment-m-from-label, 16px);
  gap:var(--space-segmented-control-segment-m-gap, 4px);
  height:var(--size-segmented-control-segment-m, 36px);
}
.segment--h5dpp[data-size=m][data-layout=icon-before]{
  border-radius:var(--radius-segmented-control-segment-m, 2px);
  padding-left:var(--space-segmented-control-segment-m-from-icon, 8px);
  padding-right:var(--space-segmented-control-segment-m-from-label, 16px);
  gap:var(--space-segmented-control-segment-m-gap, 4px);
  height:var(--size-segmented-control-segment-m, 36px);
}
.segment--h5dpp[data-size=m][data-layout=icon-only]{
  border-radius:var(--radius-segmented-control-segment-m, 2px);
  padding-left:var(--space-segmented-control-segment-m-icon-only, 6px);
  padding-right:var(--space-segmented-control-segment-m-icon-only, 6px);
  gap:var(--space-segmented-control-segment-m-gap, 4px);
  height:var(--size-segmented-control-segment-m, 36px);
}
.segment--h5dpp[data-size=l][data-layout=label-only]{
  border-radius:var(--radius-segmented-control-segment-l, 2px);
  padding-left:var(--space-segmented-control-segment-l-from-label, 24px);
  padding-right:var(--space-segmented-control-segment-l-from-label, 24px);
  gap:var(--space-segmented-control-segment-l-gap, 4px);
  height:var(--size-segmented-control-segment-l, 44px);
}
.segment--h5dpp[data-size=l][data-layout=icon-before]{
  border-radius:var(--radius-segmented-control-segment-l, 2px);
  padding-left:var(--space-segmented-control-segment-l-from-icon, 16px);
  padding-right:var(--space-segmented-control-segment-l-from-label, 24px);
  gap:var(--space-segmented-control-segment-l-gap, 4px);
  height:var(--size-segmented-control-segment-l, 44px);
}
.segment--h5dpp[data-size=l][data-layout=icon-only]{
  border-radius:var(--radius-segmented-control-segment-l, 2px);
  padding-left:var(--space-segmented-control-segment-l-icon-only, 10px);
  padding-right:var(--space-segmented-control-segment-l-icon-only, 10px);
  gap:var(--space-segmented-control-segment-l-gap, 4px);
  height:var(--size-segmented-control-segment-l, 44px);
}

.icon--SPyrn{
  display:flex;
  flex-shrink:0;
  align-items:center;
}

.label--kBwGd[data-size=xs]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.label--kBwGd[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.label--kBwGd[data-size=m]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.label--kBwGd[data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}`,""]),p.locals={segment:"segment--h5dpp",icon:"icon--SPyrn",label:"label--kBwGd"};const h=p}}]);})();
