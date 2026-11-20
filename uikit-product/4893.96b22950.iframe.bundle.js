"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[4893],{"./node_modules/.pnpm/@snack-uikit+input-private@5.0.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"(S,h,e){e.d(h,{Ev:()=>l,SK:()=>o,Vp:()=>u,_h:()=>a});const o={S:"s",M:"m",L:"l"},l={Xs:16,S:24},u={S:"s",M:"m"},a={[o.S]:u.S,[o.M]:u.M,[o.L]:u.M}},"./node_modules/.pnpm/@snack-uikit+input-private@5.0.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"(S,h,e){e.d(h,{G8:()=>o,OE:()=>f,Sf:()=>a,Ub:()=>l,z$:()=>u});function o(t){var b;const i=(b=t==null?void 0:t.value.length)!==null&&b!==void 0?b:0;t==null||t.setSelectionRange(i,i)}function l(t){t==null||t.setSelectionRange(0,t==null?void 0:t.value.length)}function u(t){setTimeout(t,0)}function a(t){return(t==null?void 0:t.selectionStart)===0}function f(t){var b;return(t==null?void 0:t.selectionStart)===((b=t==null?void 0:t.value)===null||b===void 0?void 0:b.length)}},"./node_modules/.pnpm/@snack-uikit+input-private@5.0.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"(S,h,e){e.d(h,{C:()=>f});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),a=e("./node_modules/.pnpm/@snack-uikit+input-private@5.0.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js");function f({inputRef:t,setInputFocus:b=()=>{var A;return(A=t.current)===null||A===void 0?void 0:A.focus()},postfixButtons:i,prefixButtons:y=[],onButtonKeyDown:L=()=>{},readonly:C,submitKeys:w}){const[A,D]=(0,l.useState)(0),E=(0,u.A)(L),x=(0,l.useCallback)(()=>y.map(()=>-1),[y]),[W,g]=(0,l.useState)(x),k=(0,l.useCallback)(()=>i.map(()=>-1),[i]),[R,O]=(0,l.useState)(k),P=(0,l.useCallback)((s,n)=>{const m=n==="ArrowLeft"?-1:1,I=p=>n==="ArrowLeft"?p>=0:p<y.length;for(let p=s+m;I(p);p+=m)if(y[p].active&&y[p].show)return p;return s},[y]),T=(0,l.useCallback)((s,n)=>{const m=n==="ArrowLeft"?-1:1,I=p=>n==="ArrowLeft"?p>=0:p<i.length;for(let p=s+m;I(p);p+=m)if(i[p].active&&i[p].show)return p;return s},[i]),c=(0,l.useCallback)(()=>{D(0),g(x),O(k)},[x,k]),r=(0,l.useCallback)(()=>{c(),b()},[c,b]),v=(0,l.useCallback)(s=>{var n,m;D(-1),g(I=>I.map((p,V)=>V===s?0:-1)),O(k),!((n=y[s])===null||n===void 0)&&n.active&&((m=y[s].ref.current)===null||m===void 0||m.focus())},[k,y]),d=(0,l.useCallback)(s=>{var n,m;D(-1),g(x),O(I=>I.map((p,V)=>V===s?0:-1)),!((n=i[s])===null||n===void 0)&&n.active&&((m=i[s].ref.current)===null||m===void 0||m.focus())},[x,i]),_=(0,l.useCallback)(s=>{if(c(),s.key==="ArrowRight"&&(C||(0,a.OE)(t.current))){const n=T(-1,s.key);n>=0&&d(n)}if(s.key==="ArrowLeft"&&(C||(0,a.Sf)(t.current))){const n=P(y.length,s.key);n>=0&&v(n)}},[T,P,d,v,t,y.length,C,c]),j=(0,l.useCallback)(s=>n=>{if(n.key==="ArrowRight"){const m=P(s,n.key);s===m?(n.preventDefault(),r(),C&&(0,a.z$)(()=>(0,a.Ub)(t.current))):v(m)}n.key==="ArrowLeft"&&s<=y.length-1&&v(P(s,n.key)),w.includes(n.key)&&(0,a.z$)(()=>c()),E==null||E(n)},[E,y.length,P,v,r,t,C,c,w]),z=(0,l.useCallback)(s=>n=>{if(n.key==="ArrowLeft"){const m=T(s,n.key);s===m?(n.preventDefault(),r(),C&&(0,a.z$)(()=>(0,a.Ub)(t.current))):d(m)}n.key==="ArrowRight"&&s<=i.length-1&&d(T(s,n.key)),w.includes(n.key)&&(0,a.z$)(()=>c()),E==null||E(n)},[E,i.length,T,d,r,t,C,c,w]),M=(0,l.useCallback)(()=>{(0,a.z$)(()=>c())},[c]);return{inputTabIndex:A,onInputKeyDown:_,setInitialTabIndices:c,prefixButtons:y.some(s=>s.show)?(0,o.jsx)(o.Fragment,{children:y.map((s,n)=>s.show?s.active?s.render({key:s.id,ref:s.ref,tabIndex:W[n],onKeyDown:j(n),onClick:M}):s.render({key:s.id}):null)}):void 0,postfixButtons:i.some(s=>s.show)?(0,o.jsx)(o.Fragment,{children:i.map((s,n)=>s.show?s.active?s.render({key:s.id,ref:s.ref,tabIndex:R[n],onKeyDown:z(n),onClick:M}):s.render({key:s.id}):null)}):void 0}}},"./node_modules/.pnpm/@snack-uikit+input-private@5.0.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"(S,h,e){e.d(h,{r:()=>c});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),a=e("./node_modules/.pnpm/@snack-uikit+input-private@5.0.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),f=e("./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(t),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),y=e.n(i),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),C=e.n(L),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=e.n(w),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n(D),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=e.n(x),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@5.0.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"),k={};k.styleTagTransform=W(),k.setAttributes=A(),k.insert=C().bind(null,"head"),k.domAPI=y(),k.insertStyleElement=E();var R=b()(g.A,k);const O=g.A&&g.A.locals?g.A.locals:void 0,P=(0,l.forwardRef)(({size:r,onClick:v,tabIndex:d=-1,onKeyDown:_,onMouseDown:j},z)=>{const M=s=>{s.stopPropagation(),v(s)};return(0,o.jsxs)("button",{className:O.buttonClearValue,"data-size":r,onClick:M,"data-test-id":"button-clear-value",type:"button",ref:z,onKeyDown:_,onMouseDown:j,tabIndex:d,children:[r===a.Vp.S&&(0,o.jsx)(f.A,{size:16}),r===a.Vp.M&&(0,o.jsx)(f.A,{})]})});var T=function(r,v){var d={};for(var _ in r)Object.prototype.hasOwnProperty.call(r,_)&&v.indexOf(_)<0&&(d[_]=r[_]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,_=Object.getOwnPropertySymbols(r);j<_.length;j++)v.indexOf(_[j])<0&&Object.prototype.propertyIsEnumerable.call(r,_[j])&&(d[_[j]]=r[_[j]]);return d};function c({clearButtonRef:r,showClearButton:v,size:d,onClear:_,onDown:j}){const z=(0,u.A)(_),M=(0,u.A)(j!=null?j:(()=>{}));return(0,l.useMemo)(()=>({id:"clear",active:!0,ref:r,show:v,render:s=>{var{key:n}=s,m=T(s,["key"]);const I=p=>{m.onClick(p),z(p)};return(0,o.jsx)(P,Object.assign({},m,{onMouseDown:M,size:a._h[d],onClick:I}),n)}}),[r,z,M,v,d])}},"./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"(S,h,e){e.d(h,{y:()=>T});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(l),a=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),f=e("./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(t),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),y=e.n(i),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),C=e.n(L),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=e.n(w),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n(D),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=e.n(x),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"),k={};k.styleTagTransform=W(),k.setAttributes=A(),k.insert=C().bind(null,"head"),k.domAPI=y(),k.insertStyleElement=E();var R=b()(g.A,k);const O=g.A&&g.A.locals?g.A.locals:void 0;var P=function(c,r){var v={};for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&r.indexOf(d)<0&&(v[d]=c[d]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,d=Object.getOwnPropertySymbols(c);_<d.length;_++)r.indexOf(d[_])<0&&Object.prototype.propertyIsEnumerable.call(c,d[_])&&(v[d[_]]=c[d[_]]);return v};function T(c){var{size:r=f.K.S,className:v}=c,d=P(c,["size","className"]);return r===f.K.XXS?(0,o.jsxs)("svg",Object.assign({viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:u()(O.spinner,v)},(0,a.z7)(d),{"data-size":r,children:[(0,o.jsx)("circle",{opacity:"0.24",cx:"4",cy:"4",r:"3",strokeWidth:"1.5"}),(0,o.jsx)("path",{d:"M1 4C1 2.34315 2.34315 1 4 1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):r===f.K.XS?(0,o.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:u()(O.spinner,v)},(0,a.z7)(d),{"data-size":r,children:[(0,o.jsx)("circle",{opacity:"0.24",cx:"8",cy:"8",r:"6",strokeWidth:"1.5"}),(0,o.jsx)("path",{d:"M2 8C2 4.68629 4.68629 2 8 2",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):(0,o.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:u()(O.spinner,v)},(0,a.z7)(d),{"data-size":r,children:[(0,o.jsx)("circle",{opacity:"0.24",cx:"12",cy:"12",r:"9",strokeWidth:"1.5"}),(0,o.jsx)("path",{d:"M3 12C3 7.02944 7.02944 3 12 3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@5.0.0_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"(S,h,e){e.d(h,{A:()=>t});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(o),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(u),f=a()(l());f.push([S.id,`.buttonClearValue--nYGVR{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonClearValue--nYGVR[data-size=s]{
  width:var(--size-input-private-button-clear-value-s, 16px);
  height:var(--size-input-private-button-clear-value-s, 16px);
  border-radius:var(--radius-input-private-button-clear-value-s, 8px);
}
.buttonClearValue--nYGVR[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.buttonClearValue--nYGVR[data-size=m]{
  width:var(--size-input-private-button-clear-value-m, 24px);
  height:var(--size-input-private-button-clear-value-m, 24px);
  border-radius:var(--radius-input-private-button-clear-value-m, 12px);
}
.buttonClearValue--nYGVR[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonClearValue--nYGVR:hover{
  cursor:pointer;
  color:var(--sys-red-text-support, #ae514c);
}
.buttonClearValue--nYGVR:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-support, #ae514c);
  outline-color:var(--sys-red-accent-default, #cb3f3e);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonClearValue--nYGVR:active{
  color:var(--sys-red-text-main, #7a2d2d);
}
.buttonClearValue--nYGVR[data-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),f.locals={buttonClearValue:"buttonClearValue--nYGVR"};const t=f},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"(S,h,e){e.d(h,{A:()=>t});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(o),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(u),f=a()(l());f.push([S.id,`.spinner--CFLWE{
  pointer-events:none;
  stroke:currentColor;
  animation:spin--W3AOp 1s ease-in-out infinite;
}
.spinner--CFLWE > g > path{
  fill:currentColor;
}
.spinner--CFLWE > mask{
  mask-type:alpha;
}
.spinner--CFLWE[data-size=xxs]{
  width:var(--size-loader-loader-xxs, 8px);
  height:var(--size-loader-loader-xxs, 8px);
}
.spinner--CFLWE[data-size=xs]{
  width:var(--size-loader-loader-xs, 16px);
  height:var(--size-loader-loader-xs, 16px);
}
.spinner--CFLWE[data-size=s]{
  width:var(--size-loader-loader-s, 24px);
  height:var(--size-loader-loader-s, 24px);
}
.spinner--CFLWE[data-size=m]{
  width:var(--size-loader-loader-m, 48px);
  height:var(--size-loader-loader-m, 48px);
}
.spinner--CFLWE[data-size=l]{
  width:var(--size-loader-loader-l, 72px);
  height:var(--size-loader-loader-l, 72px);
}
@keyframes spin--W3AOp{
  to{
    transform:rotate(360deg);
  }
}`,""]),f.locals={spinner:"spinner--CFLWE",spin:"spin--W3AOp"};const t=f},"./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"(S,h,e){e.d(h,{A:()=>o});function o(){for(var l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];var a=l.filter(Boolean);if(a.length<=1){var f=a[0];return f||null}return function(b){a.forEach(function(i){typeof i=="function"?i(b):i&&(i.current=b)})}}}}]);})();
