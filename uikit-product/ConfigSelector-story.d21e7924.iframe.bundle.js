"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7226],{"./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js":((S,p,e)=>{e.d(p,{m:()=>I});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),_=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const f=[_.El.Top,_.El.Right,_.El.Bottom,_.El.Left];var a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(a),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),H=e.n(R),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),V=e.n(k),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=e.n(X),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=e.n(G),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(Q),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),T={};T.styleTagTransform=L(),T.setAttributes=B(),T.insert=V().bind(null,"head"),T.domAPI=H(),T.insertStyleElement=w();var q=r()(M.A,T);const D=M.A&&M.A.locals?M.A.locals:void 0;var Y=function(v,E){var A={};for(var u in v)Object.prototype.hasOwnProperty.call(v,u)&&E.indexOf(u)<0&&(A[u]=v[u]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,u=Object.getOwnPropertySymbols(v);j<u.length;j++)E.indexOf(u[j])<0&&Object.prototype.propertyIsEnumerable.call(v,u[j])&&(A[u[j]]=v[u[j]]);return A};function I(v){var{tip:E,trigger:A="hoverAndFocusVisible",placement:u="top",children:j,triggerRef:O,disableMaxWidth:$=!1}=v,J=Y(v,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!j&&!O?null:(0,s.jsx)(m.Z,Object.assign({placement:u,popoverContent:(0,s.jsx)("div",{className:D.tooltipContainer,"data-disable-max-width":$,children:E}),trigger:A,triggerRef:O,arrowContainerClassName:D.tooltipArrowContainer,arrowElementClassName:D.tooltipArrowElement,hasArrow:!0,fallbackPlacements:f},J,{children:j}))}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((S,p,e)=>{e.d(p,{m:()=>se});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(m),f=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),a=e.n(f),r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),R=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),H=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const k=t=>t?t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth:!1,V=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],X="...",B=({text:t,element:l,truncatedElement:c})=>{if(l&&c&&k(l)){const n=l.scrollWidth/t.length;let o=t;for(const{potentialDelimiterWidth:y,leftHalfDelta:g,rightHalfDelta:d}of V){const i=Math.floor((l.offsetWidth/n-y)/2),h=t.slice(0,i-g),b=t.slice(t.length-i+d,t.length);if(o=`${h}${X}${b}`,c.innerHTML=o,c.scrollWidth<=l.offsetWidth-1)break}return o}return t};var G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(G),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),L=e.n(Q),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(M),q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),D=e.n(q),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=e.n(Y),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(v),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),u={};u.styleTagTransform=E(),u.setAttributes=D(),u.insert=T().bind(null,"head"),u.domAPI=L(),u.insertStyleElement=I();var j=w()(A.A,u);const O=A.A&&A.A.locals?A.A.locals:void 0;var $=function(t,l){var c={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&l.indexOf(n)<0&&(c[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)l.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(c[n[o]]=t[n[o]]);return c};function J(t){var{text:l,className:c,hideTooltip:n,placement:o}=t,y=$(t,["text","className","hideTooltip","placement"]);const[g,d]=(0,r.useState)(!1),[i,h]=(0,r.useState)(l),b=(0,r.useRef)(null),P=(0,r.useRef)(null);(0,r.useEffect)(()=>{const F=a()(()=>{h(B({element:b.current,truncatedElement:P.current,text:l})),d(k(b.current))},50);F();const te=new ResizeObserver(F);return b.current&&te.observe(b.current),()=>{te.disconnect()}},[g,l,n]);const Z=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{ref:b,className:O.fullText,children:l}),(0,s.jsx)("span",{ref:P,className:O.truncatedText,"data-test-id":"truncated-text",children:i})]});return(0,s.jsx)("span",Object.assign({className:_()(O.wrapper,c)},(0,H.z7)(y),{children:g&&!n?(0,s.jsx)(R.m,{tip:l,placement:o,hoverDelayOpen:500,triggerClassName:O.textContainer,children:Z}):Z}))}var K=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),C=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),N={};N.styleTagTransform=E(),N.setAttributes=D(),N.insert=T().bind(null,"head"),N.domAPI=L(),N.insertStyleElement=I();var U=w()(C.A,N);const x=C.A&&C.A.locals?C.A.locals:void 0;var z=function(t,l){var c={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&l.indexOf(n)<0&&(c[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)l.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(c[n[o]]=t[n[o]]);return c};function W(t){var{text:l,className:c,hideTooltip:n,maxLines:o=1,placement:y}=t,g=z(t,["text","className","hideTooltip","maxLines","placement"]);const d=(0,r.useRef)(null),[i,h]=(0,r.useState)(!1),b=(0,r.useCallback)(()=>{h(k(d.current))},[]);(0,K.N)(()=>{d.current&&b()},[l,b]),(0,r.useEffect)(()=>{const Z=a()(()=>{b()},50),F=new ResizeObserver(Z);return d.current&&(b(),F.observe(d.current)),()=>{F.disconnect()}},[i,n,b]);const P=(0,s.jsx)("span",Object.assign({ref:d,className:_()(o>1?x.text2AndMoreLines:x.text1Line,c,{[x.ellipsis]:!d.current||i}),style:{"--max-lines":o}},(0,H.z7)(g),{children:l}));return i&&!n?(0,s.jsx)(R.m,{tip:l,placement:y,hoverDelayOpen:500,triggerClassName:x.tooltipTrigger,children:P}):P}const ee={Middle:"middle",End:"end"};var oe=function(t,l){var c={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&l.indexOf(n)<0&&(c[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)l.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(c[n[o]]=t[n[o]]);return c};function se(t){var{variant:l=ee.End}=t,c=oe(t,["variant"]);switch(l){case ee.Middle:return(0,s.jsx)(J,Object.assign({},c));case ee.End:default:return(0,s.jsx)(W,Object.assign({},c))}}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((S,p,e)=>{e.d(p,{A:()=>r});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(_),a=f()(m());a.push([S.id,`.tooltipContainer--trugl{
  padding:var(--space-tooltip-padding-single, 16px);
  border-radius:var(--radius-tooltip-container, 24px);
  min-width:var(--size-tooltip-container-min-width, 60px);
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
.tooltipContainer--trugl[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--kKMnt{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 24px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 24px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--gHa3m{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),a.locals={tooltipContainer:"tooltipContainer--trugl",tooltipArrowContainer:"tooltipArrowContainer--kKMnt",tooltipArrowElement:"tooltipArrowElement--gHa3m"};const r=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((S,p,e)=>{e.d(p,{A:()=>r});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(_),a=f()(m());a.push([S.id,`.tooltipContainer--X85Ce{
  padding:var(--space-tooltip-padding-single, 16px);
  border-radius:var(--radius-tooltip-container, 24px);
  min-width:var(--size-tooltip-container-min-width, 60px);
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
.tooltipContainer--X85Ce[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--_M0w9{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 24px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 24px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--pvrN9{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),a.locals={tooltipContainer:"tooltipContainer--X85Ce",tooltipArrowContainer:"tooltipArrowContainer--_M0w9",tooltipArrowElement:"tooltipArrowElement--pvrN9"};const r=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((S,p,e)=>{e.d(p,{A:()=>r});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(_),a=f()(m());a.push([S.id,`.text1Line--HSvW2{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--iIP1I{
  text-overflow:ellipsis;
}

.text2AndMoreLines--wWakd{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--qFRDQ{
  display:grid;
}`,""]),a.locals={text1Line:"text1Line--HSvW2",ellipsis:"ellipsis--iIP1I",text2AndMoreLines:"text2AndMoreLines--wWakd",tooltipTrigger:"tooltipTrigger--qFRDQ"};const r=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((S,p,e)=>{e.d(p,{A:()=>r});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(_),a=f()(m());a.push([S.id,`.wrapper--VcndZ{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--KoQ_g{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--NMKzz{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--Ya_HS{
  display:inline-flex;
}`,""]),a.locals={wrapper:"wrapper--VcndZ",truncatedText:"truncatedText--KoQ_g",fullText:"fullText--NMKzz",textContainer:"textContainer--Ya_HS"};const r=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/config-selector/src/components/ConfigSelector/styles.module.scss":((S,p,e)=>{e.d(p,{A:()=>r});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(_),a=f()(m());a.push([S.id,".configSelectorContent--ZWSLo{cursor:pointer;position:relative;display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;width:max-content;min-width:var(--dimension-5m, 40px);max-width:100%;margin:0;padding:0;text-decoration:none;text-transform:none;border-style:solid;outline:0;outline-offset:0;border-radius:12px;border-width:2px;color:var(--sys-neutral-text-support, #6d707f);background-color:var(--sys-neutral-background1-level, #fdfdfd);border-color:var(--sys-neutral-decor-default, #dde0ea)}.configSelectorContent--ZWSLo:hover{color:var(--sys-neutral-text-main, #41424e);background-color:var(--sys-neutral-background1-level, #fdfdfd);border-color:var(--sys-neutral-decor-hovered, #cfd2dc)}.configSelectorContent--ZWSLo:active{color:var(--sys-neutral-text-main, #41424e);background-color:var(--sys-neutral-background2-level, #ffffff);border-color:var(--sys-neutral-decor-activated, #b6bac7)}.configSelectorContent--ZWSLo[data-disabled]{cursor:not-allowed;color:var(--sys-neutral-text-light, #8b8e9b);background-color:var(--sys-neutral-background, #eeeff3);border-color:rgba(0,0,0,0)}.configSelectorContent--ZWSLo[data-available]{border-color:var(--sys-primary-accent-default, #389f74)}.configSelectorContent--ZWSLo[data-available]:hover{border-color:var(--sys-primary-accent-hovered, #37946e)}.configSelectorContent--ZWSLo[data-available]:active{border-color:var(--sys-primary-accent-pressed, #358561)}.configSelectorContent--ZWSLo[data-checked]{color:var(--sys-neutral-background2-level, #ffffff);background-color:var(--sys-primary-accent-default, #389f74);border-color:rgba(0,0,0,0)}.configSelectorContent--ZWSLo[data-checked]:hover{background-color:var(--sys-primary-accent-hovered, #37946e)}.configSelectorContent--ZWSLo[data-checked]:active{background-color:var(--sys-primary-accent-pressed, #358561)}.configSelectorInput--Svl1o{pointer-events:none;position:absolute;top:0;left:0;width:0;height:0;opacity:0}.configSelectorInput--Svl1o:focus-visible+.configSelectorContent--ZWSLo{outline-width:var(--border-state-focus-s-border-width, 2px);outline-style:var(--border-state-focus-s-border-style, solid);outline-color:var(--border-state-focus-s-border-color, );outline-color:var(--sys-available-complementary, #1c1c24);outline-offset:var(--spacing-state-focus-offset, 2px);color:var(--sys-neutral-text-main, #41424e);background-color:var(--sys-neutral-background2-level, #ffffff);border-color:var(--sys-neutral-decor-hovered, #cfd2dc)}.configSelector--WLnT7 .label--KKcbU{font-family:var(--sans-label-m-font-family, SB Sans Interface);font-weight:var(--sans-label-m-font-weight, Semibold);line-height:var(--sans-label-m-line-height, 16px);font-size:var(--sans-label-m-font-size, 12px);letter-spacing:var(--sans-label-m-letter-spacing, 0px);paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px)}.configSelector--WLnT7 .labelLayout--j_Fx0{padding-left:var(--space-chips-label-layout-padding-s, 4px);padding-right:var(--space-chips-label-layout-padding-s, 4px);display:inline-flex;align-items:center;min-width:0}.configSelector--WLnT7 .configSelectorContent--ZWSLo{height:var(--size-chips-s, 32px);padding-left:var(--space-chips-container-padding-s, 3px);padding-right:var(--space-chips-container-padding-s, 3px)}.configSelector--WLnT7{position:relative;min-width:0;margin:0;padding:0;border:none;outline:0;outline-offset:0}.configSelector--WLnT7[data-available] .configSelectorInput--Svl1o:focus-visible+.configSelectorContent--ZWSLo{border-color:var(--sys-primary-accent-hovered, #37946e)}.configSelector--WLnT7[data-checked] .configSelectorInput--Svl1o:focus-visible+.configSelectorContent--ZWSLo{color:var(--sys-neutral-background2-level, #ffffff);background-color:var(--sys-primary-accent-hovered, #37946e)}",""]),a.locals={configSelectorContent:"configSelectorContent--ZWSLo",configSelectorInput:"configSelectorInput--Svl1o",configSelector:"configSelector--WLnT7",label:"label--KKcbU",labelLayout:"labelLayout--j_Fx0"};const r=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/config-selector/stories/styles.module.scss":((S,p,e)=>{e.d(p,{A:()=>r});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(_),a=f()(m());a.push([S.id,".wrapper--kis7E{display:flex;align-items:center;justify-content:center;background-color:var(--sys-neutral-background1-level, #fdfdfd);height:200px;gap:4px}",""]),a.locals={wrapper:"wrapper--kis7E"};const r=a}),"./packages/config-selector/stories/ConfigSelector.story.tsx":((S,p,e)=>{e.r(p),e.d(p,{configSelector:()=>n,default:()=>t});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const _=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.2.0 (2026-02-02)


### Bug Fixes

* **FF-7846:** replace tokens usage ([b690050](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b6900500e2f2c73e184f8b67f689f4a42571a154))
* **FF-7861:** massive scope update ([b93fa9f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b93fa9fed13a579f5f02efc16ea43d8bedbd5aca))
* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))
* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))
* **PDS-2668:** fixed configSelector minWidth ([f7cd4f1](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/f7cd4f1b295807a3daaf1349890580bc2bb61922))


### Features

* **PDS-2668:** Config Selector redesign ([d381e02](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d381e02955aad9081ff1518b8959a0e2cfd1a568))





## 1.1.6 (2025-11-13)


### Bug Fixes

* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))





## 1.1.5 (2025-11-12)


### Bug Fixes

* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))





## 1.1.4 (2025-11-12)

**Note:** Version bump only for package @cloud-ru/uikit-product-config-selector





## 1.1.3 (2025-11-07)

**Note:** Version bump only for package @cloud-ru/uikit-product-config-selector





## 1.1.2 (2025-09-30)

**Note:** Version bump only for package @cloud-ru/uikit-product-config-selector





## 1.1.1 (2025-08-26)


### Bug Fixes

* **PDS-2668:** fixed configSelector minWidth ([f7cd4f1](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/f7cd4f1b295807a3daaf1349890580bc2bb61922))





# 1.1.0 (2025-08-21)


### Features

* **PDS-2668:** Config Selector redesign ([d381e02](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d381e02955aad9081ff1518b8959a0e2cfd1a568))





## 0.1.1 (2025-07-21)


### Bug Fixes

* **PDS-2424:** chipToggleIndicator storybook fix ([58497ba](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/58497ba7fef13bf23e36ab3dcb2c9052e6c06622))





# 0.1.0 (2025-07-15)


### Features

* **PDS-2424:** added ChipsTogglePredefined ([008ae62](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/008ae62d385b64eb8edfba0f35c13ca134ba05e5))





## CHANGELOG

### v0.0.0

- Initial version
`,f=JSON.parse('{"UU":"@cloud-ru/uikit-product-config-selector","rE":"1.2.0"}'),a=`# Config Selector

## Installation
\`npm i @cloud-ru/uikit-product-config-selector\`

[//]: DOCUMENTATION_SECTION_START
[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT
## ConfigSelector
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| checked* | \`boolean\` | - | \u041E\u0442\u043C\u0435\u0447\u0435\u043D \u043B\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 |
| onChange* | \`(checked: boolean, e: ChangeEvent<HTMLInputElement>) => void\` | - | \u041A\u043E\u043B\u0431\u0435\u043A \u0441\u043C\u0435\u043D\u044B \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F |
| label* | \`string\` | - | \u041B\u0435\u0439\u0431\u043B |
| className | \`string\` | - | CSS-\u043A\u043B\u0430\u0441\u0441 |
| tabIndex | \`number\` | - | HTML tab index |
| available | \`boolean\` | - | \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043B\u0438 \u043E\u043F\u0446\u0438\u044F |
| availableTip | \`ReactNode\` | - | \u0422\u0443\u043B\u0442\u0438\u043F \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0439 \u043E\u043F\u0446\u0438\u0438 |
| disabled | \`boolean\` | - | \u0414\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D \u043B\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 |
| disabledTip | \`ReactNode\` | - | \u0422\u0443\u043B\u0442\u0438\u043F \u0434\u043B\u044F \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 |


[//]: DOCUMENTATION_SECTION_END

[Changelog](./CHANGELOG.md)
`;var r=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),R=e.n(r),H=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),k=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const V=[k.El.Top,k.El.Right,k.El.Bottom,k.El.Left];var X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),B=e.n(X),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(G),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),L=e.n(Q),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),T=e.n(M),q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=e.n(q),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=e.n(Y),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),E={};E.styleTagTransform=I(),E.setAttributes=T(),E.insert=L().bind(null,"head"),E.domAPI=w(),E.insertStyleElement=D();var A=B()(v.A,E);const u=v.A&&v.A.locals?v.A.locals:void 0;var j=function(o,y){var g={};for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&y.indexOf(d)<0&&(g[d]=o[d]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,d=Object.getOwnPropertySymbols(o);i<d.length;i++)y.indexOf(d[i])<0&&Object.prototype.propertyIsEnumerable.call(o,d[i])&&(g[d[i]]=o[d[i]]);return g};function O(o){var{tip:y,trigger:g="hoverAndFocusVisible",placement:d="top",children:i,triggerRef:h,disableMaxWidth:b=!1}=o,P=j(o,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!i&&!h?null:(0,s.jsx)(H.Z,Object.assign({placement:d,popoverContent:(0,s.jsx)("div",{className:u.tooltipContainer,"data-disable-max-width":b,children:y}),trigger:g,triggerRef:h,arrowContainerClassName:u.tooltipArrowContainer,arrowElementClassName:u.tooltipArrowElement,hasArrow:!0,fallbackPlacements:V},P,{children:i}))}var $=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),J=e("./node_modules/.pnpm/@snack-uikit+utils@3.9.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),K=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/config-selector/src/components/ConfigSelector/styles.module.scss"),C={};C.styleTagTransform=I(),C.setAttributes=T(),C.insert=L().bind(null,"head"),C.domAPI=w(),C.insertStyleElement=D();var N=B()(K.A,C);const U=K.A&&K.A.locals?K.A.locals:void 0;function x({available:o,availableTip:y,disabledTip:g,label:d,checked:i,disabled:h,onChange:b,className:P,tabIndex:Z=0,...F}){const te=(0,m.useMemo)(()=>({tip:h?g:y,open:o&&!i&&y||h&&g?void 0:!1,hoverDelayOpen:h?100:400}),[o,y,i,h,g]),le=ne=>{h||b==null||b(!i,ne)};return(0,s.jsx)(O,{...te,disableSpanWrapper:!0,children:(0,s.jsxs)("label",{...(0,J.z7)(F),"data-available":o||void 0,"data-disabled":h||void 0,"data-checked":i||void 0,className:R()(U.configSelector,P),children:[(0,s.jsx)("input",{type:"checkbox",checked:i,onChange:le,disabled:h,tabIndex:Z,className:U.configSelectorInput,"data-test-id":"config-selector_input"}),(0,s.jsx)("span",{"data-available":o||void 0,"data-disabled":h||void 0,"data-checked":i||void 0,className:U.configSelectorContent,children:(0,s.jsx)("span",{className:R()(U.labelLayout,U.label),"data-test-id":"config-selector_label",children:(0,s.jsx)($.m,{text:d})})})]})})}try{x.displayName="ConfigSelector",x.__docgenInfo={description:"",displayName:"ConfigSelector",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"\u041B\u0435\u0439\u0431\u043B",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"\u041A\u043E\u043B\u0431\u0435\u043A \u0441\u043C\u0435\u043D\u044B \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",name:"onChange",required:!0,type:{name:"(checked: boolean, e: ChangeEvent<HTMLInputElement>) => void"}},checked:{defaultValue:null,description:"\u041E\u0442\u043C\u0435\u0447\u0435\u043D \u043B\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442",name:"checked",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"CSS-\u043A\u043B\u0430\u0441\u0441",name:"className",required:!1,type:{name:"string"}},tabIndex:{defaultValue:{value:"0"},description:"HTML tab index",name:"tabIndex",required:!1,type:{name:"number"}},available:{defaultValue:null,description:"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043B\u0438 \u043E\u043F\u0446\u0438\u044F",name:"available",required:!1,type:{name:"boolean"}},availableTip:{defaultValue:null,description:"\u0422\u0443\u043B\u0442\u0438\u043F \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0439 \u043E\u043F\u0446\u0438\u0438",name:"availableTip",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"\u0414\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D \u043B\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442",name:"disabled",required:!1,type:{name:"boolean"}},disabledTip:{defaultValue:null,description:"\u0422\u0443\u043B\u0442\u0438\u043F \u0434\u043B\u044F \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430",name:"disabledTip",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/config-selector/src/components/ConfigSelector/ConfigSelector.tsx#ConfigSelector"]={docgenInfo:x.__docgenInfo,name:"ConfigSelector",path:"packages/config-selector/src/components/ConfigSelector/ConfigSelector.tsx#ConfigSelector"})}catch(o){}var z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/config-selector/stories/styles.module.scss"),W={};W.styleTagTransform=I(),W.setAttributes=T(),W.insert=L().bind(null,"head"),W.domAPI=w(),W.insertStyleElement=D();var ee=B()(z.A,W);const oe=z.A&&z.A.locals?z.A.locals:void 0;var t={title:"Console/Config Selector",component:x};const l={availableTip:"\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0444\u043B\u0435\u0439\u0432\u043E\u0440\u0430",disabledTip:(0,s.jsxs)("span",{children:["\u041A\u0432\u043E\u0442\u0430 \u0438\u0441\u0447\u0435\u0440\u043F\u0430\u043D\u0430, \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E. ",(0,s.jsx)("ins",{children:"\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C"})]})},n={render:({...o})=>{const[y,g]=(0,m.useState)(!1);return(0,s.jsxs)("div",{className:oe.wrapper,children:[(0,s.jsx)(x,{...o,checked:y,onChange:g}),(0,s.jsx)(x,{label:"24",onChange:()=>{},checked:!0,...l,available:!0}),(0,s.jsx)(x,{label:"32",onChange:()=>{},checked:!1,...l}),(0,s.jsx)(x,{label:"64",onChange:()=>{},checked:!1,...l,available:!0}),(0,s.jsx)(x,{label:"128-2048",onChange:()=>{},checked:!1,...l,disabled:!0})]})},args:{label:"16",...l,available:!0,disabled:!1},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${f.rE}`,a,_]},packageName:f.UU,design:{name:"Figma",type:"figma",url:"https://www.figma.com/design/SZjPEs7Ac3a2wS0HapamrE/branch/z85sLht8LcHu8nk9LnF5Lr/Product-UI-Kit?node-id=34427-8434"}}}})}]);})();
