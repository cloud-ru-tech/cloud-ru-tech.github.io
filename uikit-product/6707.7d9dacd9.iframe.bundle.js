"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[6707],{"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"(I,j,e){e.d(j,{Ev:()=>a,SK:()=>n,Vp:()=>v,_h:()=>r});const n={S:"s",M:"m",L:"l"},a={Xs:16,S:24},v={S:"s",M:"m"},r={[n.S]:v.S,[n.M]:v.M,[n.L]:v.M}},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"(I,j,e){e.d(j,{G8:()=>n,OE:()=>k,Sf:()=>r,Ub:()=>a,z$:()=>v});function n(t){var b;const p=(b=t==null?void 0:t.value.length)!==null&&b!==void 0?b:0;t==null||t.setSelectionRange(p,p)}function a(t){t==null||t.setSelectionRange(0,t==null?void 0:t.value.length)}function v(t){setTimeout(t,0)}function r(t){return(t==null?void 0:t.selectionStart)===0}function k(t){var b;return(t==null?void 0:t.selectionStart)===((b=t==null?void 0:t.value)===null||b===void 0?void 0:b.length)}},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"(I,j,e){e.d(j,{C:()=>k});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),r=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js");function k({inputRef:t,setInputFocus:b=()=>{var A;return(A=t.current)===null||A===void 0?void 0:A.focus()},postfixButtons:p,prefixButtons:y=[],onButtonKeyDown:L=()=>{},readonly:E,submitKeys:D}){const[A,z]=(0,a.useState)(0),S=(0,v.A)(L),C=(0,a.useCallback)(()=>y.map(()=>-1),[y]),[W,g]=(0,a.useState)(C),f=(0,a.useCallback)(()=>p.map(()=>-1),[p]),[K,x]=(0,a.useState)(f),P=(0,a.useCallback)((s,o)=>{const c=o==="ArrowLeft"?-1:1,O=_=>o==="ArrowLeft"?_>=0:_<y.length;for(let _=s+c;O(_);_+=c)if(y[_].active&&y[_].show)return _;return s},[y]),T=(0,a.useCallback)((s,o)=>{const c=o==="ArrowLeft"?-1:1,O=_=>o==="ArrowLeft"?_>=0:_<p.length;for(let _=s+c;O(_);_+=c)if(p[_].active&&p[_].show)return _;return s},[p]),i=(0,a.useCallback)(()=>{z(0),g(C),x(f)},[C,f]),d=(0,a.useCallback)(()=>{i(),b()},[i,b]),m=(0,a.useCallback)(s=>{var o,c;z(-1),g(O=>O.map((_,U)=>U===s?0:-1)),x(f),!((o=y[s])===null||o===void 0)&&o.active&&((c=y[s].ref.current)===null||c===void 0||c.focus())},[f,y]),l=(0,a.useCallback)(s=>{var o,c;z(-1),g(C),x(O=>O.map((_,U)=>U===s?0:-1)),!((o=p[s])===null||o===void 0)&&o.active&&((c=p[s].ref.current)===null||c===void 0||c.focus())},[C,p]),u=(0,a.useCallback)(s=>{if(i(),s.key==="ArrowRight"&&(E||(0,r.OE)(t.current))){const o=T(-1,s.key);o>=0&&l(o)}if(s.key==="ArrowLeft"&&(E||(0,r.Sf)(t.current))){const o=P(y.length,s.key);o>=0&&m(o)}},[T,P,l,m,t,y.length,E,i]),h=(0,a.useCallback)(s=>o=>{if(o.key==="ArrowRight"){const c=P(s,o.key);s===c?(o.preventDefault(),d(),E&&(0,r.z$)(()=>(0,r.Ub)(t.current))):m(c)}o.key==="ArrowLeft"&&s<=y.length-1&&m(P(s,o.key)),D.includes(o.key)&&(0,r.z$)(()=>i()),S==null||S(o)},[S,y.length,P,m,d,t,E,i,D]),M=(0,a.useCallback)(s=>o=>{if(o.key==="ArrowLeft"){const c=T(s,o.key);s===c?(o.preventDefault(),d(),E&&(0,r.z$)(()=>(0,r.Ub)(t.current))):l(c)}o.key==="ArrowRight"&&s<=p.length-1&&l(T(s,o.key)),D.includes(o.key)&&(0,r.z$)(()=>i()),S==null||S(o)},[S,p.length,T,l,d,t,E,i,D]),w=(0,a.useCallback)(()=>{(0,r.z$)(()=>i())},[i]);return{inputTabIndex:A,onInputKeyDown:u,setInitialTabIndices:i,prefixButtons:y.some(s=>s.show)?(0,n.jsx)(n.Fragment,{children:y.map((s,o)=>s.show?s.active?s.render({key:s.id,ref:s.ref,tabIndex:W[o],onKeyDown:h(o),onClick:w}):s.render({key:s.id}):null)}):void 0,postfixButtons:p.some(s=>s.show)?(0,n.jsx)(n.Fragment,{children:p.map((s,o)=>s.show?s.active?s.render({key:s.id,ref:s.ref,tabIndex:K[o],onKeyDown:M(o),onClick:w}):s.render({key:s.id}):null)}):void 0}}},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"(I,j,e){e.d(j,{r:()=>i});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),r=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),k=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(t),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),y=e.n(p),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),E=e.n(L),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=e.n(D),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=e.n(z),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=e.n(C),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"),f={};f.styleTagTransform=W(),f.setAttributes=A(),f.insert=E().bind(null,"head"),f.domAPI=y(),f.insertStyleElement=S();var K=b()(g.A,f);const x=g.A&&g.A.locals?g.A.locals:void 0,P=(0,a.forwardRef)(({size:d,onClick:m,tabIndex:l=-1,onKeyDown:u,onMouseDown:h},M)=>{const w=s=>{s.stopPropagation(),m(s)};return(0,n.jsxs)("button",{className:x.buttonClearValue,"data-size":d,onClick:w,"data-test-id":"button-clear-value",type:"button",ref:M,onKeyDown:u,onMouseDown:h,tabIndex:l,children:[d===r.Vp.S&&(0,n.jsx)(k.A,{size:16}),d===r.Vp.M&&(0,n.jsx)(k.A,{})]})});var T=function(d,m){var l={};for(var u in d)Object.prototype.hasOwnProperty.call(d,u)&&m.indexOf(u)<0&&(l[u]=d[u]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,u=Object.getOwnPropertySymbols(d);h<u.length;h++)m.indexOf(u[h])<0&&Object.prototype.propertyIsEnumerable.call(d,u[h])&&(l[u[h]]=d[u[h]]);return l};function i({clearButtonRef:d,showClearButton:m,size:l,onClear:u,onDown:h}){const M=(0,v.A)(u),w=(0,v.A)(h!=null?h:(()=>{}));return(0,a.useMemo)(()=>({id:"clear",active:!0,ref:d,show:m,render:s=>{var{key:o}=s,c=T(s,["key"]);const O=_=>{c.onClick(_),M(_)};return(0,n.jsx)(P,Object.assign({},c,{onMouseDown:w,size:r._h[l],onClick:O}),o)}}),[d,M,w,m,l])}},"./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"(I,j,e){e.d(j,{y:()=>T});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=e.n(a),r=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),k=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(t),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),y=e.n(p),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),E=e.n(L),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=e.n(D),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=e.n(z),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=e.n(C),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"),f={};f.styleTagTransform=W(),f.setAttributes=A(),f.insert=E().bind(null,"head"),f.domAPI=y(),f.insertStyleElement=S();var K=b()(g.A,f);const x=g.A&&g.A.locals?g.A.locals:void 0;var P=function(i,d){var m={};for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&d.indexOf(l)<0&&(m[l]=i[l]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,l=Object.getOwnPropertySymbols(i);u<l.length;u++)d.indexOf(l[u])<0&&Object.prototype.propertyIsEnumerable.call(i,l[u])&&(m[l[u]]=i[l[u]]);return m};function T(i){var{size:d=k.K.S,className:m}=i,l=P(i,["size","className"]);return d===k.K.XXS?(0,n.jsxs)("svg",Object.assign({viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:v()(x.spinner,m)},(0,r.z7)(l),{"data-size":d,children:[(0,n.jsx)("circle",{opacity:"0.24",cx:"4",cy:"4",r:"3",strokeWidth:"1.5"}),(0,n.jsx)("path",{d:"M1 4C1 2.34315 2.34315 1 4 1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):d===k.K.XS?(0,n.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:v()(x.spinner,m)},(0,r.z7)(l),{"data-size":d,children:[(0,n.jsx)("circle",{opacity:"0.24",cx:"8",cy:"8",r:"6",strokeWidth:"1.5"}),(0,n.jsx)("path",{d:"M2 8C2 4.68629 4.68629 2 8 2",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):(0,n.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:v()(x.spinner,m)},(0,r.z7)(l),{"data-size":d,children:[(0,n.jsx)("circle",{opacity:"0.24",cx:"12",cy:"12",r:"9",strokeWidth:"1.5"}),(0,n.jsx)("path",{d:"M3 12C3 7.02944 7.02944 3 12 3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"(I,j,e){e.d(j,{A:()=>t});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(n),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(v),k=r()(a());k.push([I.id,`.buttonClearValue--az5gm{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonClearValue--az5gm[data-size=s]{
  width:var(--size-input-private-button-clear-value-s, 16px);
  height:var(--size-input-private-button-clear-value-s, 16px);
  border-radius:var(--radius-input-private-button-clear-value-s, 8px);
}
.buttonClearValue--az5gm[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.buttonClearValue--az5gm[data-size=m]{
  width:var(--size-input-private-button-clear-value-m, 24px);
  height:var(--size-input-private-button-clear-value-m, 24px);
  border-radius:var(--radius-input-private-button-clear-value-m, 12px);
}
.buttonClearValue--az5gm[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonClearValue--az5gm:hover{
  cursor:pointer;
  color:var(--sys-red-text-support, #ae514c);
}
.buttonClearValue--az5gm:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-support, #ae514c);
  outline-color:var(--sys-red-accent-default, #cb3f3e);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonClearValue--az5gm:active{
  color:var(--sys-red-text-main, #7a2d2d);
}
.buttonClearValue--az5gm[data-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),k.locals={buttonClearValue:"buttonClearValue--az5gm"};const t=k},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"(I,j,e){e.d(j,{A:()=>t});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(n),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(v),k=r()(a());k.push([I.id,`.spinner--DYy1L{
  pointer-events:none;
  stroke:currentColor;
  animation:spin--T9QJf 1s ease-in-out infinite;
}
.spinner--DYy1L > g > path{
  fill:currentColor;
}
.spinner--DYy1L > mask{
  mask-type:alpha;
}
.spinner--DYy1L[data-size=xxs]{
  width:var(--size-loader-loader-xxs, 8px);
  height:var(--size-loader-loader-xxs, 8px);
}
.spinner--DYy1L[data-size=xs]{
  width:var(--size-loader-loader-xs, 16px);
  height:var(--size-loader-loader-xs, 16px);
}
.spinner--DYy1L[data-size=s]{
  width:var(--size-loader-loader-s, 24px);
  height:var(--size-loader-loader-s, 24px);
}
.spinner--DYy1L[data-size=m]{
  width:var(--size-loader-loader-m, 48px);
  height:var(--size-loader-loader-m, 48px);
}
.spinner--DYy1L[data-size=l]{
  width:var(--size-loader-loader-l, 72px);
  height:var(--size-loader-loader-l, 72px);
}
@keyframes spin--T9QJf{
  to{
    transform:rotate(360deg);
  }
}`,""]),k.locals={spinner:"spinner--DYy1L",spin:"spin--T9QJf"};const t=k}}]);})();
