"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5878],{"./node_modules/.pnpm/@snack-uikit+drop-zone@1.0.1_lodash@4.18.1_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/DropZone/DropZone.js"(k,b,e){e.d(b,{w:()=>B});var d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),j=e.n(y),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),g=e("./node_modules/.pnpm/@snack-uikit+drop-zone@1.0.1_lodash@4.18.1_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/constants.js"),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(U),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=e.n(C),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),o=e.n(w),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),l=e.n(u),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),n=e.n(s),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),P=e.n(A),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@1.0.1_lodash@4.18.1_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/styles.module.css"),T={};T.styleTagTransform=P(),T.setAttributes=l(),T.insert=o().bind(null,"head"),T.domAPI=R(),T.insertStyleElement=n();var W=I()(M.A,T);const z=M.A&&M.A.locals?M.A.locals:void 0;var h=function(r,_){var i={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&_.indexOf(t)<0&&(i[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)_.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(i[t[a]]=r[t[a]]);return i};function E(r){var{disabled:_=!1,className:i,isOver:t,onDragLeave:a,onDragOver:c,onDrop:f,mode:Z=g.G.Multiple,description:D,title:X,onFilesUpload:L,accept:G}=r,F=h(r,["disabled","className","isOver","onDragLeave","onDragOver","onDrop","mode","description","title","onFilesUpload","accept"]);const J=(0,m.useRef)(null),N=()=>{var x;_||(x=J.current)===null||x===void 0||x.click()},Q=({target:{files:x}})=>{if(!x)return;const K=Array.from(x);L(K)},H=x=>{if(_)return;x.preventDefault();const K=Array.from(x.dataTransfer.files);f==null||f(x),L(Z===g.G.Single?[K[0]]:K)};return(0,d.jsxs)("button",Object.assign({className:j()(i,z.container),type:"button"},(0,v.z7)(F),{"data-over":t||void 0,"data-disabled":_||void 0,onClick:N,tabIndex:0,onDrop:H,onDragLeave:a,onDragOver:c,children:[(0,d.jsx)("h4",{"data-test-id":"title",className:z.title,children:X}),D&&(0,d.jsx)("div",{"data-test-id":"description",className:z.description,children:D}),(0,d.jsx)("input",{"data-test-id":"file-input",className:z.hidden,onChange:Q,multiple:Z===g.G.Multiple,ref:J,type:"file",accept:G,onClick:x=>{x.target.value=""}})]}))}var O=e("./node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/lodash.js");function p(r){const[_,i]=(0,m.useState)(!1),t=(0,m.useMemo)(()=>(0,O.debounce)(i,5),[]),a=(0,m.useCallback)(D=>{r||(D.preventDefault(),t(!1))},[t,r]),c=(0,m.useCallback)(D=>{r||(D.preventDefault(),t(!0))},[t,r]),f=(0,m.useCallback)(D=>{r||(D.preventDefault(),t(!1))},[t,r]);return(0,m.useEffect)(()=>()=>t.cancel(),[t]),{events:{onDragLeave:a,onDragOver:c,onDrop:f},isOver:_}}var S=function(r,_){var i={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&_.indexOf(t)<0&&(i[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(r);a<t.length;a++)_.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(r,t[a])&&(i[t[a]]=r[t[a]]);return i};function B(r){var _=S(r,[]);const{disabled:i=!1}=_,t=S(_,["disabled"]),{events:a,isOver:c}=p(i);return(0,d.jsx)(E,Object.assign({},a,t,{isOver:c,disabled:i}))}},"./node_modules/.pnpm/@snack-uikit+drop-zone@1.0.1_lodash@4.18.1_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/FileUpload/FileUpload.js"(k,b,e){e.d(b,{e:()=>z});var d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),m=e("./node_modules/.pnpm/@snack-uikit+drop-zone@1.0.1_lodash@4.18.1_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/constants.js"),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(v),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=e.n(U),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),R=e.n(C),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=e.n(w),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),l=e.n(u),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),n=e.n(s),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@1.0.1_lodash@4.18.1_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/FileUpload/styles.module.css"),P={};P.styleTagTransform=n(),P.setAttributes=o(),P.insert=R().bind(null,"head"),P.domAPI=I(),P.insertStyleElement=l();var M=g()(A.A,P);const T=A.A&&A.A.locals?A.A.locals:void 0;var W=function(h,E){var O={};for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&E.indexOf(p)<0&&(O[p]=h[p]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,p=Object.getOwnPropertySymbols(h);S<p.length;S++)E.indexOf(p[S])<0&&Object.prototype.propertyIsEnumerable.call(h,p[S])&&(O[p[S]]=h[p[S]]);return O};function z(h){var E,{mode:O=m.G.Multiple,onFilesUpload:p,accept:S,children:B}=h,r=W(h,["mode","onFilesUpload","accept","children"]);const _=(0,y.useRef)(null),i=c=>f=>{_.current&&_.current.click(),c==null||c(f)},t=({target:{files:c}})=>{if(!c)return;const f=Array.from(c);p(f)},a=c=>{c.target.value=""};return(0,d.jsxs)(d.Fragment,{children:[(0,y.cloneElement)(B,{onClick:i((E=B.props)===null||E===void 0?void 0:E.onClick)}),(0,d.jsx)("input",Object.assign({onChange:t,multiple:O===m.G.Multiple,ref:_,className:T.hiddenInput,type:"file",accept:S,onClick:a},(0,j.z7)(r)))]})}},"./node_modules/.pnpm/@snack-uikit+drop-zone@1.0.1_lodash@4.18.1_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/constants.js"(k,b,e){e.d(b,{G:()=>d});const d={Single:"single",Multiple:"multiple"}},"./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/arrowUp/index.js"(k,b,e){e.d(b,{A:()=>w});var d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=function(o,u){var l={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&u.indexOf(s)<0&&(l[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(o);n<s.length;n++)u.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(o,s[n])&&(l[s[n]]=o[s[n]]);return l};const v=y.forwardRef((o,u)=>{var{size:l=24}=o,s=j(o,["size"]);s.width=void 0,s.height=void 0;const n="-arrow-up-s";return typeof l=="number"&&(s.style||(s.style={}),s.style.width=l+"px",s.style.height=l+"px"),(0,d.jsx)("svg",Object.assign({ref:u,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,d.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var g=function(o,u){var l={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&u.indexOf(s)<0&&(l[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(o);n<s.length;n++)u.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(o,s[n])&&(l[s[n]]=o[s[n]]);return l};const I=y.forwardRef((o,u)=>{var{size:l=24}=o,s=g(o,["size"]);s.width=void 0,s.height=void 0;const n="-arrow-up-xs";return typeof l=="number"&&(s.style||(s.style={}),s.style.width=l+"px",s.style.height=l+"px"),(0,d.jsx)("svg",Object.assign({ref:u,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,d.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var C=function(o,u){var l={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&u.indexOf(s)<0&&(l[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(o);n<s.length;n++)u.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(o,s[n])&&(l[s[n]]=o[s[n]]);return l};const w=(0,y.forwardRef)((o,u)=>{var{size:l=24}=o,s=C(o,["size"]);return Number(l)>=20?(0,d.jsx)(v,Object.assign({ref:u,size:l},s)):(0,d.jsx)(I,Object.assign({ref:u,size:l},s))})},"./node_modules/.pnpm/@snack-uikit+tooltip@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js"(k,b,e){e.d(b,{o:()=>_});var d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),j=e.n(y),m=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),v=e("./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),g=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),U=e("./node_modules/.pnpm/@snack-uikit+tooltip@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),I=e("./node_modules/.pnpm/@snack-uikit+popover-private@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const C={S:"s",Xs:"xs"},R={[C.Xs]:16,[C.S]:24},w={Hover:"hover",Click:"click"},o={[w.Hover]:I.tr.HoverAndFocusVisible,[w.Click]:I.tr.ClickAndFocusVisible};var u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(u),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=e.n(s),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),P=e.n(A),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),T=e.n(M),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(W),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(h),O=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),p={};p.styleTagTransform=E(),p.setAttributes=T(),p.insert=P().bind(null,"head"),p.domAPI=n(),p.insertStyleElement=z();var S=l()(O.A,p);const B=O.A&&O.A.locals?O.A.locals:void 0;var r=function(i,t){var a={};for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&t.indexOf(c)<0&&(a[c]=i[c]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,c=Object.getOwnPropertySymbols(i);f<c.length;f++)t.indexOf(c[f])<0&&Object.prototype.propertyIsEnumerable.call(i,c[f])&&(a[c[f]]=i[c[f]]);return a};function _(i){var{size:t=C.Xs,trigger:a=w.Hover,tooltipClassname:c,className:f,open:Z,onOpenChange:D,tabIndex:X=0,triggerSupportProps:L={}}=i,G=r(i,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[F,J]=(0,m.iC)(Z,!1,D);return(0,d.jsx)(U.m,Object.assign({},G,{className:c,open:F,onOpenChange:J,trigger:o[a],children:({getReferenceProps:N,ref:Q})=>(0,d.jsx)("span",Object.assign({},N(),(0,g.z7)(L),{ref:Q,"data-size":t,"data-opened":F,"data-trigger":a,className:j()(B.questionTooltip,f),role:"button",tabIndex:X,children:(0,d.jsx)(v.A,{size:R[t]})}))}))}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@1.0.1_lodash@4.18.1_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/FileUpload/styles.module.css"(k,b,e){e.d(b,{A:()=>g});var d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(d),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(j),v=m()(y());v.push([k.id,`.hiddenInput--nwOIy{
  display:none;
}`,""]),v.locals={hiddenInput:"hiddenInput--nwOIy"};const g=v},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@1.0.1_lodash@4.18.1_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/styles.module.css"(k,b,e){e.d(b,{A:()=>g});var d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(d),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(j),v=m()(y());v.push([k.id,`.hidden--aZSzY{
  display:none;
}

.container--wZJCh{
  border-radius:var(--radius-drop-zone-single, 8px);
  border-width:var(--border-drop-zone-single-border-width, 2px);
  border-style:var(--border-drop-zone-single-border-style, dashed);
  padding-top:var(--spacing-drop-zone-padding-vertical, 8px);
  padding-bottom:var(--spacing-drop-zone-padding-vertical, 8px);
  padding-left:var(--spacing-drop-zone-padding-horizontal, 8px);
  padding-right:var(--spacing-drop-zone-padding-horizontal, 8px);
  gap:var(--spacing-drop-zone-gap, 4px);
  cursor:pointer;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  width:100%;
  min-width:174px;
  min-height:80px;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--wZJCh .title--WgyJk{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
  margin:0;
  color:var(--sys-neutral-text-main, #41424e);
}
.container--wZJCh .description--S8T27{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.container--wZJCh:hover{
  border-color:var(--sys-primary-accent-hovered, #37946e);
}
.container--wZJCh:hover .description--S8T27{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--wZJCh:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-primary-accent-default, #389f74);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.container--wZJCh:focus-visible .description--S8T27{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--wZJCh[data-over]{
  background-color:var(--sys-primary-background, #f1f9f4);
  border-color:var(--sys-primary-accent-hovered, #37946e);
}
.container--wZJCh[data-over] .title--WgyJk{
  color:var(--sys-primary-text-main, #1b5840);
}
.container--wZJCh[data-over] .description--S8T27{
  color:var(--sys-primary-text-support, #358561);
}
.container--wZJCh[data-disabled]{
  cursor:not-allowed;
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.container--wZJCh[data-disabled] .title--WgyJk{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.container--wZJCh[data-disabled] .description--S8T27{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),v.locals={hidden:"hidden--aZSzY",container:"container--wZJCh",title:"title--WgyJk",description:"description--S8T27"};const g=v},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"(k,b,e){e.d(b,{A:()=>g});var d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(d),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(j),v=m()(y());v.push([k.id,`.questionTooltip--b2t21{
  cursor:pointer;
  display:inline-flex;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background:none;
  border:0;
}
.questionTooltip--b2t21:hover{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.questionTooltip--b2t21:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.questionTooltip--b2t21[data-trigger=click][data-opened=true]{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--b2t21[data-trigger=click]:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--b2t21[data-trigger=click]:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--b2t21[data-trigger=click]:focus-visible{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--b2t21[data-size=xs] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.questionTooltip--b2t21[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}`,""]),v.locals={questionTooltip:"questionTooltip--b2t21"};const g=v}}]);})();
