(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[4132],{"./node_modules/.pnpm/@snack-uikit+divider@3.2.3_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js":((D,P,e)=>{"use strict";e.d(P,{c:()=>x});var c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=e.n(b),m=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const p={Horizontal:"horizontal",Vertical:"vertical"},j={Light:"light",Regular:"regular"};var z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(z),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),S=e.n(A),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),W=e.n(O),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=e.n(U),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=e.n(w),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(Y),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.3_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),g={};g.styleTagTransform=C(),g.setAttributes=N(),g.insert=W().bind(null,"head"),g.domAPI=S(),g.insertStyleElement=M();var Z=f()(E.A,g);const s=E.A&&E.A.locals?E.A.locals:void 0;var _=function(a,v){var k={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&v.indexOf(d)<0&&(k[d]=a[d]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,d=Object.getOwnPropertySymbols(a);l<d.length;l++)v.indexOf(d[l])<0&&Object.prototype.propertyIsEnumerable.call(a,d[l])&&(k[d[l]]=a[d[l]]);return k};function x(a){var{className:v,orientation:k=p.Horizontal,weight:d=j.Regular}=a,l=_(a,["className","orientation","weight"]);const o=Object.assign(Object.assign({},(0,m.z7)(l)),{"data-weight":d});return k===p.Horizontal?(0,c.jsx)("hr",Object.assign({className:h()(s.horizontal,v)},o)):(0,c.jsx)("div",Object.assign({className:h()(s.vertical,v)},o))}}),"./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/DropZone/DropZone.js":((D,P,e)=>{"use strict";e.d(P,{w:()=>l});var c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=e.n(b),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),j=e("./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/constants.js"),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(z),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),S=e.n(A),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),W=e.n(O),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=e.n(U),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=e.n(w),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(Y),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/styles.module.css"),g={};g.styleTagTransform=C(),g.setAttributes=N(),g.insert=W().bind(null,"head"),g.domAPI=S(),g.insertStyleElement=M();var Z=f()(E.A,g);const s=E.A&&E.A.locals?E.A.locals:void 0;var _=function(o,r){var i={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&r.indexOf(t)<0&&(i[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(i[t[n]]=o[t[n]]);return i};function x(o){var{disabled:r=!1,className:i,isOver:t,onDragLeave:n,onDragOver:y,onDrop:R,mode:F=j.G.Multiple,description:I,title:B,onFilesUpload:X,accept:H}=o,Q=_(o,["disabled","className","isOver","onDragLeave","onDragOver","onDrop","mode","description","title","onFilesUpload","accept"]);const K=(0,m.useRef)(null),u=()=>{var T;r||(T=K.current)===null||T===void 0||T.click()},L=({target:{files:T}})=>{if(!T)return;const $=Array.from(T);X($)},G=T=>{if(r)return;T.preventDefault();const $=Array.from(T.dataTransfer.files);R==null||R(T),X(F===j.G.Single?[$[0]]:$)};return(0,c.jsxs)("button",Object.assign({className:h()(i,s.container),type:"button"},(0,p.z7)(Q),{"data-over":t||void 0,"data-disabled":r||void 0,onClick:u,tabIndex:0,onDrop:G,onDragLeave:n,onDragOver:y,children:[(0,c.jsx)("h4",{"data-test-id":"title",className:s.title,children:B}),I&&(0,c.jsx)("div",{"data-test-id":"description",className:s.description,children:I}),(0,c.jsx)("input",{"data-test-id":"file-input",className:s.hidden,onChange:L,multiple:F===j.G.Multiple,ref:K,type:"file",accept:H,onClick:T=>{T.target.value=""}})]}))}var a=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),v=e.n(a);function k(o){const[r,i]=(0,m.useState)(!1),t=(0,m.useMemo)(()=>v()(i,5),[]),n=(0,m.useCallback)(I=>{o||(I.preventDefault(),t(!1))},[t,o]),y=(0,m.useCallback)(I=>{o||(I.preventDefault(),t(!0))},[t,o]),R=(0,m.useCallback)(I=>{o||(I.preventDefault(),t(!1))},[t,o]);return(0,m.useEffect)(()=>()=>t.cancel(),[t]),{events:{onDragLeave:n,onDragOver:y,onDrop:R},isOver:r}}var d=function(o,r){var i={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&r.indexOf(t)<0&&(i[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(i[t[n]]=o[t[n]]);return i};function l(o){var r=d(o,[]);const{disabled:i=!1}=r,t=d(r,["disabled"]),{events:n,isOver:y}=k(i);return(0,c.jsx)(x,Object.assign({},n,t,{isOver:y,disabled:i}))}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js":((D,P,e)=>{"use strict";e.d(P,{o:()=>o});var c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=e.n(b),m=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),j=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),z=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),f=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const A={S:"s",Xs:"xs"},S={[A.Xs]:16,[A.S]:24},O={Hover:"hover",Click:"click"},W={[O.Hover]:f.tr.HoverAndFocusVisible,[O.Click]:f.tr.ClickAndFocusVisible};var U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(U),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),M=e.n(w),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),C=e.n(Y),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=e.n(E),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),s=e.n(Z),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=e.n(_),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),v={};v.styleTagTransform=x(),v.setAttributes=g(),v.insert=C().bind(null,"head"),v.domAPI=M(),v.insertStyleElement=s();var k=N()(a.A,v);const d=a.A&&a.A.locals?a.A.locals:void 0;var l=function(r,i){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&i.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,n=Object.getOwnPropertySymbols(r);y<n.length;y++)i.indexOf(n[y])<0&&Object.prototype.propertyIsEnumerable.call(r,n[y])&&(t[n[y]]=r[n[y]]);return t};function o(r){var{size:i=A.Xs,trigger:t=O.Hover,tooltipClassname:n,className:y,open:R,onOpenChange:F,tabIndex:I=0,triggerSupportProps:B={}}=r,X=l(r,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[H,Q]=(0,m.iC)(R,!1,F);return(0,c.jsx)(z.m,Object.assign({},X,{className:n,open:H,onOpenChange:Q,trigger:W[t],children:({getReferenceProps:K,ref:u})=>(0,c.jsx)("span",Object.assign({},K(),(0,j.z7)(B),{ref:u,"data-size":i,"data-opened":H,"data-trigger":t,className:h()(d.questionTooltip,y),role:"button",tabIndex:I,children:(0,c.jsx)(p.A,{size:S[i]})}))}))}}),"./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((D,P,e)=>{"use strict";e.d(P,{sg:()=>p,z7:()=>z});const c=/^data-test-/,b=/^(data|aria)-/;function h(f,A){return Object.keys(f).filter(S=>!S.match(A)).reduce((S,O)=>Object.assign(Object.assign({},S),{[O]:f[O]}),{})}function m(f,A){return Object.keys(f).reduce((S,O)=>(O.match(A)&&(S[O]=f[O]),S),{})}function p(f){return h(f,b)}function j(f){return m(f,c)}function z(f){return m(f,b)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.3_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css":((D,P,e)=>{"use strict";e.d(P,{A:()=>j});var c=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(c),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(h),p=m()(b());p.push([D.id,`.horizontal--Pn0tT{
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
}`,""]),p.locals={horizontal:"horizontal--Pn0tT",vertical:"vertical--rP8px"};const j=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/styles.module.css":((D,P,e)=>{"use strict";e.d(P,{A:()=>j});var c=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(c),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(h),p=m()(b());p.push([D.id,`.hidden--ykMlQ{
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
}`,""]),p.locals={hidden:"hidden--ykMlQ",container:"container--LKYnI",title:"title--jLLad",description:"description--_ncOi"};const j=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css":((D,P,e)=>{"use strict";e.d(P,{A:()=>j});var c=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(c),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(h),p=m()(b());p.push([D.id,`.questionTooltip--qUwih{
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
}`,""]),p.locals={questionTooltip:"questionTooltip--qUwih"};const j=p}),"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js":((D,P,e)=>{var c="Expected a function",b=NaN,h="[object Symbol]",m=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,z=/^0o[0-7]+$/i,f=parseInt,A=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,S=typeof self=="object"&&self&&self.Object===Object&&self,O=A||S||Function("return this")(),W=Object.prototype,U=W.toString,N=Math.max,w=Math.min,M=function(){return O.Date.now()};function Y(s,_,x){var a,v,k,d,l,o,r=0,i=!1,t=!1,n=!0;if(typeof s!="function")throw new TypeError(c);_=Z(_)||0,C(x)&&(i=!!x.leading,t="maxWait"in x,k=t?N(Z(x.maxWait)||0,_):k,n="trailing"in x?!!x.trailing:n);function y(u){var L=a,G=v;return a=v=void 0,r=u,d=s.apply(G,L),d}function R(u){return r=u,l=setTimeout(B,_),i?y(u):d}function F(u){var L=u-o,G=u-r,T=_-L;return t?w(T,k-G):T}function I(u){var L=u-o,G=u-r;return o===void 0||L>=_||L<0||t&&G>=k}function B(){var u=M();if(I(u))return X(u);l=setTimeout(B,F(u))}function X(u){return l=void 0,n&&a?y(u):(a=v=void 0,d)}function H(){l!==void 0&&clearTimeout(l),r=0,a=o=v=l=void 0}function Q(){return l===void 0?d:X(M())}function K(){var u=M(),L=I(u);if(a=arguments,v=this,o=u,L){if(l===void 0)return R(o);if(t)return l=setTimeout(B,_),y(o)}return l===void 0&&(l=setTimeout(B,_)),d}return K.cancel=H,K.flush=Q,K}function C(s){var _=typeof s;return!!s&&(_=="object"||_=="function")}function E(s){return!!s&&typeof s=="object"}function g(s){return typeof s=="symbol"||E(s)&&U.call(s)==h}function Z(s){if(typeof s=="number")return s;if(g(s))return b;if(C(s)){var _=typeof s.valueOf=="function"?s.valueOf():s;s=C(_)?_+"":_}if(typeof s!="string")return s===0?s:+s;s=s.replace(m,"");var x=j.test(s);return x||z.test(s)?f(s.slice(2),x?2:8):p.test(s)?b:+s}D.exports=Y})}]);})();
