"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5138],{"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js":((b,g,e)=>{e.d(g,{m:()=>B});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),h=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),_=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const v=[_.El.Top,_.El.Right,_.El.Bottom,_.El.Left];var d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(d),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=e.n(W),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),K=e.n(w),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=e.n(z),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),L=e.n(V),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n(X),O=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),y={};y.styleTagTransform=R(),y.setAttributes=F(),y.insert=K().bind(null,"head"),y.domAPI=I(),y.insertStyleElement=L();var Z=i()(O.A,y);const S=O.A&&O.A.locals?O.A.locals:void 0;var G=function(u,T){var p={};for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&T.indexOf(a)<0&&(p[a]=u[a]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,a=Object.getOwnPropertySymbols(u);m<a.length;m++)T.indexOf(a[m])<0&&Object.prototype.propertyIsEnumerable.call(u,a[m])&&(p[a[m]]=u[a[m]]);return p};function B(u){var{tip:T,trigger:p="hoverAndFocusVisible",placement:a="top",children:m,triggerRef:j,disableMaxWidth:$=!1}=u,J=G(u,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!m&&!j?null:(0,r.jsx)(h.Z,Object.assign({placement:a,popoverContent:(0,r.jsx)("div",{className:S.tooltipContainer,"data-disable-max-width":$,children:T}),trigger:p,triggerRef:j,arrowContainerClassName:S.tooltipArrowContainer,arrowElementClassName:S.tooltipArrowElement,hasArrow:!0,fallbackPlacements:v},J,{children:m}))}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((b,g,e)=>{e.d(g,{m:()=>le});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),h=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(h),v=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),d=e.n(v),i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),W=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),I=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const w=t=>t?t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth:!1,K=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],z="...",F=({text:t,element:l,truncatedElement:n})=>{if(l&&n&&w(l)){const s=l.scrollWidth/t.length;let o=t;for(const{potentialDelimiterWidth:D,leftHalfDelta:P,rightHalfDelta:k}of K){const x=Math.floor((l.offsetWidth/s-D)/2),f=t.slice(0,x-P),E=t.slice(t.length-x+k,t.length);if(o=`${f}${z}${E}`,n.innerText=o,n.scrollWidth<=l.offsetWidth-1)break}return o}return t};var V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(V),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=e.n(X),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),y=e.n(O),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),S=e.n(Z),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(G),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),T=e.n(u),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),a={};a.styleTagTransform=T(),a.setAttributes=S(),a.insert=y().bind(null,"head"),a.domAPI=R(),a.insertStyleElement=B();var m=L()(p.A,a);const j=p.A&&p.A.locals?p.A.locals:void 0;var $=function(t,l){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&l.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(t);o<s.length;o++)l.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(t,s[o])&&(n[s[o]]=t[s[o]]);return n};function J(t){var{text:l,className:n,tooltipClassName:s,hideTooltip:o,placement:D,trigger:P}=t,k=$(t,["text","className","tooltipClassName","hideTooltip","placement","trigger"]);const[x,f]=(0,i.useState)(!1),[E,Y]=(0,i.useState)(l),c=(0,i.useRef)(null),C=(0,i.useRef)(null);(0,i.useEffect)(()=>{const M=d()(()=>{Y(F({element:c.current,truncatedElement:C.current,text:l})),f(w(c.current))},50);M();const q=new ResizeObserver(M);return c.current&&q.observe(c.current),()=>{q.disconnect()}},[x,l,o]);const U=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{ref:c,className:j.fullText,"data-test-id":"full-text",children:l}),(0,r.jsx)("span",{ref:C,className:j.truncatedText,"data-test-id":"truncated-text",children:E})]});return(0,r.jsx)("span",Object.assign({className:_()(j.wrapper,n)},(0,I.z7)(k),{children:x&&!o?(0,r.jsx)(W.m,{tip:l,placement:D,hoverDelayOpen:500,triggerClassName:j.textContainer,className:s,trigger:P,children:U}):U}))}var ee=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),H=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),A={};A.styleTagTransform=T(),A.setAttributes=S(),A.insert=y().bind(null,"head"),A.domAPI=R(),A.insertStyleElement=B();var ne=L()(H.A,A);const N=H.A&&H.A.locals?H.A.locals:void 0;var te=function(t,l){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&l.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(t);o<s.length;o++)l.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(t,s[o])&&(n[s[o]]=t[s[o]]);return n};function se(t){var{text:l,className:n,tooltipClassName:s,hideTooltip:o,maxLines:D=1,placement:P,trigger:k}=t,x=te(t,["text","className","tooltipClassName","hideTooltip","maxLines","placement","trigger"]);const f=(0,i.useRef)(null),[E,Y]=(0,i.useState)(!1),c=(0,i.useCallback)(()=>{Y(w(f.current))},[]);(0,ee.N)(()=>{f.current&&c()},[l,c]),(0,i.useEffect)(()=>{const U=d()(()=>{c()},50),M=new ResizeObserver(U);return f.current&&(c(),M.observe(f.current)),()=>{M.disconnect()}},[E,o,c]);const C=(0,r.jsx)("span",Object.assign({ref:f,className:_()(D>1?N.text2AndMoreLines:N.text1Line,n,{[N.ellipsis]:!f.current||E}),style:{"--max-lines":D}},(0,I.z7)(x),{children:l}));return E&&!o?(0,r.jsx)(W.m,{tip:l,placement:P,hoverDelayOpen:500,className:s,triggerClassName:N.tooltipTrigger,trigger:k,children:C}):C}const Q={Middle:"middle",End:"end"};var oe=function(t,l){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&l.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(t);o<s.length;o++)l.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(t,s[o])&&(n[s[o]]=t[s[o]]);return n};function le(t){var{variant:l=Q.End}=t,n=oe(t,["variant"]);switch(l){case Q.Middle:return(0,r.jsx)(J,Object.assign({},n));case Q.End:default:return(0,r.jsx)(se,Object.assign({},n))}}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((b,g,e)=>{e.d(g,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(r),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(_),d=v()(h());d.push([b.id,`.tooltipContainer--CVVp7{
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
.tooltipContainer--CVVp7[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--o1uBX{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 4px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 4px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--hBQpg{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),d.locals={tooltipContainer:"tooltipContainer--CVVp7",tooltipArrowContainer:"tooltipArrowContainer--o1uBX",tooltipArrowElement:"tooltipArrowElement--hBQpg"};const i=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((b,g,e)=>{e.d(g,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(r),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(_),d=v()(h());d.push([b.id,`.text1Line--Frd2v{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--r6UCx{
  text-overflow:ellipsis;
}

.text2AndMoreLines--ElGDY{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--eGfMj{
  display:grid;
}`,""]),d.locals={text1Line:"text1Line--Frd2v",ellipsis:"ellipsis--r6UCx",text2AndMoreLines:"text2AndMoreLines--ElGDY",tooltipTrigger:"tooltipTrigger--eGfMj"};const i=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((b,g,e)=>{e.d(g,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),h=e.n(r),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(_),d=v()(h());d.push([b.id,`.wrapper--hOaDd{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--_vjdW{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--p7wU4{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--eJTtO{
  display:inline-flex;
}`,""]),d.locals={wrapper:"wrapper--hOaDd",truncatedText:"truncatedText--_vjdW",fullText:"fullText--p7wU4",textContainer:"textContainer--eJTtO"};const i=d})}]);})();
