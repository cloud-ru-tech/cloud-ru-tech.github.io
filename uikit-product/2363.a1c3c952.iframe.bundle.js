(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2363],{"./node_modules/.pnpm/@snack-uikit+divider@3.2.3_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js":((R,I,e)=>{"use strict";e.d(I,{c:()=>A});var f=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=e.n(x),g=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const b={Horizontal:"horizontal",Vertical:"vertical"},S={Light:"light",Regular:"regular"};var B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(B),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),P=e.n(m),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=e.n(T),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Y=e.n(N),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=e.n(G),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(X),k=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.3_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),O={};O.styleTagTransform=C(),O.setAttributes=Y(),O.insert=H().bind(null,"head"),O.domAPI=P(),O.insertStyleElement=w();var Z=y()(k.A,O);const r=k.A&&k.A.locals?k.A.locals:void 0;var h=function(a,n){var u={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&n.indexOf(s)<0&&(u[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(a);l<s.length;l++)n.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(a,s[l])&&(u[s[l]]=a[s[l]]);return u};function A(a){var{className:n,orientation:u=b.Horizontal,weight:s=S.Regular}=a,l=h(a,["className","orientation","weight"]);const o=Object.assign(Object.assign({},(0,g.z7)(l)),{"data-weight":s});return u===b.Horizontal?(0,f.jsx)("hr",Object.assign({className:v()(r.horizontal,n)},o)):(0,f.jsx)("div",Object.assign({className:v()(r.vertical,n)},o))}}),"./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/DropZone/DropZone.js":((R,I,e)=>{"use strict";e.d(I,{w:()=>l});var f=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=e.n(x),g=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),S=e("./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/constants.js"),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(B),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),P=e.n(m),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=e.n(T),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Y=e.n(N),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=e.n(G),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(X),k=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/styles.module.css"),O={};O.styleTagTransform=C(),O.setAttributes=Y(),O.insert=H().bind(null,"head"),O.domAPI=P(),O.insertStyleElement=w();var Z=y()(k.A,O);const r=k.A&&k.A.locals?k.A.locals:void 0;var h=function(o,d){var p={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&d.indexOf(t)<0&&(p[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(o);i<t.length;i++)d.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(o,t[i])&&(p[t[i]]=o[t[i]]);return p};function A(o){var{disabled:d=!1,className:p,isOver:t,onDragLeave:i,onDragOver:_,onDrop:D,mode:z=S.G.Multiple,description:E,title:K,onFilesUpload:U,accept:M}=o,Q=h(o,["disabled","className","isOver","onDragLeave","onDragOver","onDrop","mode","description","title","onFilesUpload","accept"]);const W=(0,g.useRef)(null),c=()=>{var j;d||(j=W.current)===null||j===void 0||j.click()},L=({target:{files:j}})=>{if(!j)return;const $=Array.from(j);U($)},F=j=>{if(d)return;j.preventDefault();const $=Array.from(j.dataTransfer.files);D==null||D(j),U(z===S.G.Single?[$[0]]:$)};return(0,f.jsxs)("button",Object.assign({className:v()(p,r.container),type:"button"},(0,b.z7)(Q),{"data-over":t||void 0,"data-disabled":d||void 0,onClick:c,tabIndex:0,onDrop:F,onDragLeave:i,onDragOver:_,children:[(0,f.jsx)("h4",{"data-test-id":"title",className:r.title,children:K}),E&&(0,f.jsx)("div",{"data-test-id":"description",className:r.description,children:E}),(0,f.jsx)("input",{"data-test-id":"file-input",className:r.hidden,onChange:L,multiple:z===S.G.Multiple,ref:W,type:"file",accept:M,onClick:j=>{j.target.value=""}})]}))}var a=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),n=e.n(a);function u(o){const[d,p]=(0,g.useState)(!1),t=(0,g.useMemo)(()=>n()(p,5),[]),i=(0,g.useCallback)(E=>{o||(E.preventDefault(),t(!1))},[t,o]),_=(0,g.useCallback)(E=>{o||(E.preventDefault(),t(!0))},[t,o]),D=(0,g.useCallback)(E=>{o||(E.preventDefault(),t(!1))},[t,o]);return(0,g.useEffect)(()=>()=>t.cancel(),[t]),{events:{onDragLeave:i,onDragOver:_,onDrop:D},isOver:d}}var s=function(o,d){var p={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&d.indexOf(t)<0&&(p[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(o);i<t.length;i++)d.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(o,t[i])&&(p[t[i]]=o[t[i]]);return p};function l(o){var d=s(o,[]);const{disabled:p=!1}=d,t=s(d,["disabled"]),{events:i,isOver:_}=u(p);return(0,f.jsx)(A,Object.assign({},i,t,{isOver:_,disabled:p}))}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js":((R,I,e)=>{"use strict";e.d(I,{o:()=>o});var f=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=e.n(x),g=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),S=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),B=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),y=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const m={S:"s",Xs:"xs"},P={[m.Xs]:16,[m.S]:24},T={Hover:"hover",Click:"click"},H={[T.Hover]:y.tr.HoverAndFocusVisible,[T.Click]:y.tr.ClickAndFocusVisible};var N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Y=e.n(N),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(G),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),C=e.n(X),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),O=e.n(k),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),r=e.n(Z),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),A=e.n(h),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),n={};n.styleTagTransform=A(),n.setAttributes=O(),n.insert=C().bind(null,"head"),n.domAPI=w(),n.insertStyleElement=r();var u=Y()(a.A,n);const s=a.A&&a.A.locals?a.A.locals:void 0;var l=function(d,p){var t={};for(var i in d)Object.prototype.hasOwnProperty.call(d,i)&&p.indexOf(i)<0&&(t[i]=d[i]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,i=Object.getOwnPropertySymbols(d);_<i.length;_++)p.indexOf(i[_])<0&&Object.prototype.propertyIsEnumerable.call(d,i[_])&&(t[i[_]]=d[i[_]]);return t};function o(d){var{size:p=m.Xs,trigger:t=T.Hover,tooltipClassname:i,className:_,open:D,onOpenChange:z,tabIndex:E=0,triggerSupportProps:K={}}=d,U=l(d,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[M,Q]=(0,g.iC)(D,!1,z);return(0,f.jsx)(B.m,Object.assign({},U,{className:i,open:M,onOpenChange:Q,trigger:H[t],children:({getReferenceProps:W,ref:c})=>(0,f.jsx)("span",Object.assign({},W(),(0,S.z7)(K),{ref:c,"data-size":p,"data-opened":M,"data-trigger":t,className:v()(s.questionTooltip,_),role:"button",tabIndex:E,children:(0,f.jsx)(b.A,{size:P[p]})}))}))}}),"./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((R,I,e)=>{"use strict";e.d(I,{sg:()=>b,z7:()=>B});const f=/^data-test-/,x=/^(data|aria)-/;function v(y,m){return Object.keys(y).filter(P=>!P.match(m)).reduce((P,T)=>Object.assign(Object.assign({},P),{[T]:y[T]}),{})}function g(y,m){return Object.keys(y).reduce((P,T)=>(T.match(m)&&(P[T]=y[T]),P),{})}function b(y){return v(y,x)}function S(y){return g(y,f)}function B(y){return g(y,x)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.3_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css":((R,I,e)=>{"use strict";e.d(I,{A:()=>S});var f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(f),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),g=e.n(v),b=g()(x());b.push([R.id,`.horizontal--Pn0tT{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  width:100%;
}
.horizontal--Pn0tT[data-weight=regular]{
  height:1px;
}
.horizontal--Pn0tT[data-weight=light]{
  height:0.5px;
}

.vertical--rP8px{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  height:100%;
}
.vertical--rP8px[data-weight=regular]{
  width:1px;
}
.vertical--rP8px[data-weight=light]{
  width:0.5px;
}`,""]),b.locals={horizontal:"horizontal--Pn0tT",vertical:"vertical--rP8px"};const S=b}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/styles.module.css":((R,I,e)=>{"use strict";e.d(I,{A:()=>S});var f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(f),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),g=e.n(v),b=g()(x());b.push([R.id,`.hidden--ykMlQ{
  display:none;
}

.container--LKYnI{
  border-radius:var(--radius-drop-zone-single, 16px);
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
.container--LKYnI .title--jLLad{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
  margin:0;
  color:var(--sys-neutral-text-main, #41424e);
}
.container--LKYnI .description--_ncOi{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.container--LKYnI:hover{
  border-color:var(--sys-primary-accent-hovered, #6851a6);
}
.container--LKYnI:hover .description--_ncOi{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--LKYnI:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-primary-accent-default, #794ed3);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.container--LKYnI:focus-visible .description--_ncOi{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--LKYnI[data-over]{
  background-color:var(--sys-primary-background, #f6effe);
  border-color:var(--sys-primary-accent-hovered, #6851a6);
}
.container--LKYnI[data-over] .title--jLLad{
  color:var(--sys-primary-text-main, #382a62);
}
.container--LKYnI[data-over] .description--_ncOi{
  color:var(--sys-primary-text-support, #5b4796);
}
.container--LKYnI[data-disabled]{
  cursor:not-allowed;
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.container--LKYnI[data-disabled] .title--jLLad{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.container--LKYnI[data-disabled] .description--_ncOi{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),b.locals={hidden:"hidden--ykMlQ",container:"container--LKYnI",title:"title--jLLad",description:"description--_ncOi"};const S=b}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css":((R,I,e)=>{"use strict";e.d(I,{A:()=>S});var f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(f),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),g=e.n(v),b=g()(x());b.push([R.id,`.questionTooltip--qUwih{
  cursor:pointer;
  display:inline-flex;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background:none;
  border:0;
}
.questionTooltip--qUwih:hover{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.questionTooltip--qUwih:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.questionTooltip--qUwih[data-trigger=click][data-opened=true]{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--qUwih[data-trigger=click]:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--qUwih[data-trigger=click]:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--qUwih[data-trigger=click]:focus-visible{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--qUwih[data-size=xs] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.questionTooltip--qUwih[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}`,""]),b.locals={questionTooltip:"questionTooltip--qUwih"};const S=b}),"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js":((R,I,e)=>{var f="Expected a function",x=NaN,v="[object Symbol]",g=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,B=/^0o[0-7]+$/i,y=parseInt,m=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,P=typeof self=="object"&&self&&self.Object===Object&&self,T=m||P||Function("return this")(),H=Object.prototype,N=H.toString,Y=Math.max,G=Math.min,w=function(){return T.Date.now()};function X(r,h,A){var a,n,u,s,l,o,d=0,p=!1,t=!1,i=!0;if(typeof r!="function")throw new TypeError(f);h=Z(h)||0,C(A)&&(p=!!A.leading,t="maxWait"in A,u=t?Y(Z(A.maxWait)||0,h):u,i="trailing"in A?!!A.trailing:i);function _(c){var L=a,F=n;return a=n=void 0,d=c,s=r.apply(F,L),s}function D(c){return d=c,l=setTimeout(K,h),p?_(c):s}function z(c){var L=c-o,F=c-d,j=h-L;return t?G(j,u-F):j}function E(c){var L=c-o,F=c-d;return o===void 0||L>=h||L<0||t&&F>=u}function K(){var c=w();if(E(c))return U(c);l=setTimeout(K,z(c))}function U(c){return l=void 0,i&&a?_(c):(a=n=void 0,s)}function M(){l!==void 0&&clearTimeout(l),d=0,a=o=n=l=void 0}function Q(){return l===void 0?s:U(w())}function W(){var c=w(),L=E(c);if(a=arguments,n=this,o=c,L){if(l===void 0)return D(o);if(t)return l=setTimeout(K,h),_(o)}return l===void 0&&(l=setTimeout(K,h)),s}return W.cancel=M,W.flush=Q,W}function C(r){var h=typeof r;return!!r&&(h=="object"||h=="function")}function k(r){return!!r&&typeof r=="object"}function O(r){return typeof r=="symbol"||k(r)&&N.call(r)==v}function Z(r){if(typeof r=="number")return r;if(O(r))return x;if(C(r)){var h=typeof r.valueOf=="function"?r.valueOf():r;r=C(h)?h+"":h}if(typeof r!="string")return r===0?r:+r;r=r.replace(g,"");var A=S.test(r);return A||B.test(r)?y(r.slice(2),A?2:8):b.test(r)?x:+r}R.exports=X}),"./node_modules/.pnpm/react-textarea-autosize@8.5.9_@types+react@18.2.79_react@18.2.0/node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js":((R,I,e)=>{"use strict";e.d(I,{A:()=>A});var f=e("./node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/extends.js"),x=e("./node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),v=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=e("./node_modules/.pnpm/use-latest@1.3.0_@types+react@18.2.79_react@18.2.0/node_modules/use-latest/dist/use-latest.esm.js"),b=e("./node_modules/.pnpm/use-composed-ref@1.4.0_@types+react@18.2.79_react@18.2.0/node_modules/use-composed-ref/dist/use-composed-ref.esm.js"),S={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},B=function(n){Object.keys(S).forEach(function(u){n.style.setProperty(u,S[u],"important")})},y=B,m=null,P=function(n,u){var s=n.scrollHeight;return u.sizingStyle.boxSizing==="border-box"?s+u.borderSize:s-u.paddingSize};function T(a,n,u,s){u===void 0&&(u=1),s===void 0&&(s=1/0),m||(m=document.createElement("textarea"),m.setAttribute("tabindex","-1"),m.setAttribute("aria-hidden","true"),y(m)),m.parentNode===null&&document.body.appendChild(m);var l=a.paddingSize,o=a.borderSize,d=a.sizingStyle,p=d.boxSizing;Object.keys(d).forEach(function(z){var E=z;m.style[E]=d[E]}),y(m),m.value=n;var t=P(m,a);m.value=n,t=P(m,a),m.value="x";var i=m.scrollHeight-l,_=i*u;p==="border-box"&&(_=_+l+o),t=Math.max(_,t);var D=i*s;return p==="border-box"&&(D=D+l+o),t=Math.min(D,t),[t,i]}var H=function(){},N=function(n,u){return n.reduce(function(s,l){return s[l]=u[l],s},{})},Y=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],G=!!document.documentElement.currentStyle,w=function(n){var u=window.getComputedStyle(n);if(u===null)return null;var s=N(Y,u),l=s.boxSizing;if(l==="")return null;G&&l==="border-box"&&(s.width=parseFloat(s.width)+parseFloat(s.borderRightWidth)+parseFloat(s.borderLeftWidth)+parseFloat(s.paddingRight)+parseFloat(s.paddingLeft)+"px");var o=parseFloat(s.paddingBottom)+parseFloat(s.paddingTop),d=parseFloat(s.borderBottomWidth)+parseFloat(s.borderTopWidth);return{sizingStyle:s,paddingSize:o,borderSize:d}},X=w;function C(a,n,u){var s=(0,g.A)(u);v.useLayoutEffect(function(){var l=function(d){return s.current(d)};if(a)return a.addEventListener(n,l),function(){return a.removeEventListener(n,l)}},[])}var k=function(n,u){C(document.body,"reset",function(s){n.current.form===s.target&&u(s)})},O=function(n){C(window,"resize",n)},Z=function(n){C(document.fonts,"loadingdone",n)},r=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],h=function(n,u){var s=n.cacheMeasurements,l=n.maxRows,o=n.minRows,d=n.onChange,p=d===void 0?H:d,t=n.onHeightChange,i=t===void 0?H:t,_=(0,x.A)(n,r),D=_.value!==void 0,z=v.useRef(null),E=(0,b.A)(z,u),K=v.useRef(0),U=v.useRef(),M=function(){var c=z.current,L=s&&U.current?U.current:X(c);if(L){U.current=L;var F=T(L,c.value||c.placeholder||"x",o,l),j=F[0],$=F[1];K.current!==j&&(K.current=j,c.style.setProperty("height",j+"px","important"),i(j,{rowHeight:$}))}},Q=function(c){D||M(),p(c)};return v.useLayoutEffect(M),k(z,function(){if(!D){var W=z.current.value;requestAnimationFrame(function(){var c=z.current;c&&W!==c.value&&M()})}}),O(M),Z(M),v.createElement("textarea",(0,f.A)({},_,{onChange:Q,ref:E}))},A=v.forwardRef(h)})}]);})();
