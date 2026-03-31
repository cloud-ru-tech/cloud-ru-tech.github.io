(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[1837],{"./node_modules/.pnpm/@snack-uikit+divider@3.2.3_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js":((T,O,e)=>{"use strict";e.d(O,{c:()=>h});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),P=e.n(f),a=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const p={Horizontal:"horizontal",Vertical:"vertical"},A={Light:"light",Regular:"regular"};var L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(L),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),v=e.n(x),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),B=e.n(y),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),U=e.n(K),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n(W),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=e.n(M),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.3_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),S={};S.styleTagTransform=k(),S.setAttributes=U(),S.insert=B().bind(null,"head"),S.domAPI=v(),S.insertStyleElement=R();var Y=d()(I.A,S);const t=I.A&&I.A.locals?I.A.locals:void 0;var r=function(u,i){var b={};for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&i.indexOf(c)<0&&(b[c]=u[c]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,c=Object.getOwnPropertySymbols(u);m<c.length;m++)i.indexOf(c[m])<0&&Object.prototype.propertyIsEnumerable.call(u,c[m])&&(b[c[m]]=u[c[m]]);return b};function h(u){var{className:i,orientation:b=p.Horizontal,weight:c=A.Regular}=u,m=r(u,["className","orientation","weight"]);const s=Object.assign(Object.assign({},(0,a.z7)(m)),{"data-weight":c});return b===p.Horizontal?(0,l.jsx)("hr",Object.assign({className:P()(t.horizontal,i)},s)):(0,l.jsx)("div",Object.assign({className:P()(t.vertical,i)},s))}}),"./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/DropZone/DropZone.js":((T,O,e)=>{"use strict";e.d(O,{w:()=>m});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),P=e.n(f),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),A=e("./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/constants.js"),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(L),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),v=e.n(x),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),B=e.n(y),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),U=e.n(K),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n(W),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=e.n(M),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/styles.module.css"),S={};S.styleTagTransform=k(),S.setAttributes=U(),S.insert=B().bind(null,"head"),S.domAPI=v(),S.insertStyleElement=R();var Y=d()(I.A,S);const t=I.A&&I.A.locals?I.A.locals:void 0;var r=function(s,_){var j={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&_.indexOf(n)<0&&(j[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(s);o<n.length;o++)_.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(s,n[o])&&(j[n[o]]=s[n[o]]);return j};function h(s){var{disabled:_=!1,className:j,isOver:n,onDragLeave:o,onDragOver:D,onDrop:F,mode:G=A.G.Multiple,description:z,title:Z,onFilesUpload:X,accept:$}=s,Q=r(s,["disabled","className","isOver","onDragLeave","onDragOver","onDrop","mode","description","title","onFilesUpload","accept"]);const w=(0,a.useRef)(null),g=()=>{var E;_||(E=w.current)===null||E===void 0||E.click()},C=({target:{files:E}})=>{if(!E)return;const H=Array.from(E);X(H)},N=E=>{if(_)return;E.preventDefault();const H=Array.from(E.dataTransfer.files);F==null||F(E),X(G===A.G.Single?[H[0]]:H)};return(0,l.jsxs)("button",Object.assign({className:P()(j,t.container),type:"button"},(0,p.z7)(Q),{"data-over":n||void 0,"data-disabled":_||void 0,onClick:g,tabIndex:0,onDrop:N,onDragLeave:o,onDragOver:D,children:[(0,l.jsx)("h4",{"data-test-id":"title",className:t.title,children:Z}),z&&(0,l.jsx)("div",{"data-test-id":"description",className:t.description,children:z}),(0,l.jsx)("input",{"data-test-id":"file-input",className:t.hidden,onChange:C,multiple:G===A.G.Multiple,ref:w,type:"file",accept:$,onClick:E=>{E.target.value=""}})]}))}var u=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),i=e.n(u);function b(s){const[_,j]=(0,a.useState)(!1),n=(0,a.useMemo)(()=>i()(j,5),[]),o=(0,a.useCallback)(z=>{s||(z.preventDefault(),n(!1))},[n,s]),D=(0,a.useCallback)(z=>{s||(z.preventDefault(),n(!0))},[n,s]),F=(0,a.useCallback)(z=>{s||(z.preventDefault(),n(!1))},[n,s]);return(0,a.useEffect)(()=>()=>n.cancel(),[n]),{events:{onDragLeave:o,onDragOver:D,onDrop:F},isOver:_}}var c=function(s,_){var j={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&_.indexOf(n)<0&&(j[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(s);o<n.length;o++)_.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(s,n[o])&&(j[n[o]]=s[n[o]]);return j};function m(s){var _=c(s,[]);const{disabled:j=!1}=_,n=c(_,["disabled"]),{events:o,isOver:D}=b(j);return(0,l.jsx)(h,Object.assign({},o,n,{isOver:D,disabled:j}))}}),"./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/FileUpload/FileUpload.js":((T,O,e)=>{"use strict";e.d(O,{e:()=>t});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),a=e("./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/constants.js"),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(p),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),d=e.n(L),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),v=e.n(x),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=e.n(y),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),U=e.n(K),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n(W),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/FileUpload/styles.module.css"),k={};k.styleTagTransform=R(),k.setAttributes=B(),k.insert=v().bind(null,"head"),k.domAPI=d(),k.insertStyleElement=U();var I=A()(M.A,k);const S=M.A&&M.A.locals?M.A.locals:void 0;var Y=function(r,h){var u={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&h.indexOf(i)<0&&(u[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,i=Object.getOwnPropertySymbols(r);b<i.length;b++)h.indexOf(i[b])<0&&Object.prototype.propertyIsEnumerable.call(r,i[b])&&(u[i[b]]=r[i[b]]);return u};function t(r){var h,{mode:u=a.G.Multiple,onFilesUpload:i,accept:b,children:c}=r,m=Y(r,["mode","onFilesUpload","accept","children"]);const s=(0,f.useRef)(null),_=o=>D=>{s.current&&s.current.click(),o==null||o(D)},j=({target:{files:o}})=>{if(!o)return;const D=Array.from(o);i(D)},n=o=>{o.target.value=""};return(0,l.jsxs)(l.Fragment,{children:[(0,f.cloneElement)(c,{onClick:_((h=c.props)===null||h===void 0?void 0:h.onClick)}),(0,l.jsx)("input",Object.assign({onChange:j,multiple:u===a.G.Multiple,ref:s,className:S.hiddenInput,type:"file",accept:b,onClick:n},(0,P.z7)(m)))]})}}),"./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/constants.js":((T,O,e)=>{"use strict";e.d(O,{G:()=>l});const l={Single:"single",Multiple:"multiple"}}),"./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((T,O,e)=>{"use strict";e.d(O,{sg:()=>p,z7:()=>L});const l=/^data-test-/,f=/^(data|aria)-/;function P(d,x){return Object.keys(d).filter(v=>!v.match(x)).reduce((v,y)=>Object.assign(Object.assign({},v),{[y]:d[y]}),{})}function a(d,x){return Object.keys(d).reduce((v,y)=>(y.match(x)&&(v[y]=d[y]),v),{})}function p(d){return P(d,f)}function A(d){return a(d,l)}function L(d){return a(d,f)}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((T,O,e)=>{"use strict";e.d(O,{z7:()=>L});const l=/^data-test-/,f=/^(data|aria)-/;function P(d,x){return Object.keys(d).filter(v=>!v.match(x)).reduce((v,y)=>Object.assign(Object.assign({},v),{[y]:d[y]}),{})}function a(d,x){return Object.keys(d).reduce((v,y)=>(y.match(x)&&(v[y]=d[y]),v),{})}function p(d){return P(d,f)}function A(d){return a(d,l)}function L(d){return a(d,f)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.3_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css":((T,O,e)=>{"use strict";e.d(O,{A:()=>A});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(l),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(P),p=a()(f());p.push([T.id,`.horizontal--Pn0tT{
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
}`,""]),p.locals={horizontal:"horizontal--Pn0tT",vertical:"vertical--rP8px"};const A=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/FileUpload/styles.module.css":((T,O,e)=>{"use strict";e.d(O,{A:()=>A});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(l),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(P),p=a()(f());p.push([T.id,`.hiddenInput--_UZi2{
  display:none;
}`,""]),p.locals={hiddenInput:"hiddenInput--_UZi2"};const A=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/styles.module.css":((T,O,e)=>{"use strict";e.d(O,{A:()=>A});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(l),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(P),p=a()(f());p.push([T.id,`.hidden--ykMlQ{
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
}`,""]),p.locals={hidden:"hidden--ykMlQ",container:"container--LKYnI",title:"title--jLLad",description:"description--_ncOi"};const A=p}),"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js":((T,O,e)=>{var l="Expected a function",f=NaN,P="[object Symbol]",a=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,A=/^0b[01]+$/i,L=/^0o[0-7]+$/i,d=parseInt,x=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,v=typeof self=="object"&&self&&self.Object===Object&&self,y=x||v||Function("return this")(),B=Object.prototype,K=B.toString,U=Math.max,W=Math.min,R=function(){return y.Date.now()};function M(t,r,h){var u,i,b,c,m,s,_=0,j=!1,n=!1,o=!0;if(typeof t!="function")throw new TypeError(l);r=Y(r)||0,k(h)&&(j=!!h.leading,n="maxWait"in h,b=n?U(Y(h.maxWait)||0,r):b,o="trailing"in h?!!h.trailing:o);function D(g){var C=u,N=i;return u=i=void 0,_=g,c=t.apply(N,C),c}function F(g){return _=g,m=setTimeout(Z,r),j?D(g):c}function G(g){var C=g-s,N=g-_,E=r-C;return n?W(E,b-N):E}function z(g){var C=g-s,N=g-_;return s===void 0||C>=r||C<0||n&&N>=b}function Z(){var g=R();if(z(g))return X(g);m=setTimeout(Z,G(g))}function X(g){return m=void 0,o&&u?D(g):(u=i=void 0,c)}function $(){m!==void 0&&clearTimeout(m),_=0,u=s=i=m=void 0}function Q(){return m===void 0?c:X(R())}function w(){var g=R(),C=z(g);if(u=arguments,i=this,s=g,C){if(m===void 0)return F(s);if(n)return m=setTimeout(Z,r),D(s)}return m===void 0&&(m=setTimeout(Z,r)),c}return w.cancel=$,w.flush=Q,w}function k(t){var r=typeof t;return!!t&&(r=="object"||r=="function")}function I(t){return!!t&&typeof t=="object"}function S(t){return typeof t=="symbol"||I(t)&&K.call(t)==P}function Y(t){if(typeof t=="number")return t;if(S(t))return f;if(k(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=k(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=t.replace(a,"");var h=A.test(t);return h||L.test(t)?d(t.slice(2),h?2:8):p.test(t)?f:+t}T.exports=M})}]);})();
