"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7059],{"./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js":((E,b,e)=>{e.d(b,{Ev:()=>d,SK:()=>n,Vp:()=>l,_h:()=>a});const n={S:"s",M:"m",L:"l"},d={Xs:16,S:24},l={S:"s",M:"m"},a={[n.S]:l.S,[n.M]:l.M,[n.L]:l.M}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js":((E,b,e)=>{e.d(b,{G8:()=>n,OE:()=>_,Sf:()=>a,Ub:()=>d,z$:()=>l});function n(s){var f;const m=(f=s==null?void 0:s.value.length)!==null&&f!==void 0?f:0;s==null||s.setSelectionRange(m,m)}function d(s){s==null||s.setSelectionRange(0,s==null?void 0:s.value.length)}function l(s){setTimeout(s,0)}function a(s){return(s==null?void 0:s.selectionStart)===0}function _(s){var f;return(s==null?void 0:s.selectionStart)===((f=s==null?void 0:s.value)===null||f===void 0?void 0:f.length)}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js":((E,b,e)=>{e.d(b,{C:()=>_});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),a=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js");function _({inputRef:s,setInputFocus:f=()=>{var D;return(D=s.current)===null||D===void 0?void 0:D.focus()},postfixButtons:m,prefixButtons:k=[],onButtonKeyDown:K=()=>{},readonly:T,submitKeys:z}){const[D,w]=(0,d.useState)(0),S=(0,l.A)(K),M=(0,d.useCallback)(()=>k.map(()=>-1),[k]),[R,I]=(0,d.useState)(M),x=(0,d.useCallback)(()=>m.map(()=>-1),[m]),[L,A]=(0,d.useState)(x),O=(0,d.useCallback)((t,o)=>{const u=o==="ArrowLeft"?-1:1,C=c=>o==="ArrowLeft"?c>=0:c<k.length;for(let c=t+u;C(c);c+=u)if(k[c].active&&k[c].show)return c;return t},[k]),j=(0,d.useCallback)((t,o)=>{const u=o==="ArrowLeft"?-1:1,C=c=>o==="ArrowLeft"?c>=0:c<m.length;for(let c=t+u;C(c);c+=u)if(m[c].active&&m[c].show)return c;return t},[m]),P=(0,d.useCallback)(()=>{w(0),I(M),A(x)},[M,x]),p=(0,d.useCallback)(()=>{P(),f()},[P,f]),v=(0,d.useCallback)(t=>{var o,u;w(-1),I(C=>C.map((c,V)=>V===t?0:-1)),A(x),!((o=k[t])===null||o===void 0)&&o.active&&((u=k[t].ref.current)===null||u===void 0||u.focus())},[x,k]),g=(0,d.useCallback)(t=>{var o,u;w(-1),I(M),A(C=>C.map((c,V)=>V===t?0:-1)),!((o=m[t])===null||o===void 0)&&o.active&&((u=m[t].ref.current)===null||u===void 0||u.focus())},[M,m]),r=(0,d.useCallback)(t=>{if(P(),t.key==="ArrowRight"&&(T||(0,a.OE)(s.current))){const o=j(-1,t.key);o>=0&&g(o)}if(t.key==="ArrowLeft"&&(T||(0,a.Sf)(s.current))){const o=O(k.length,t.key);o>=0&&v(o)}},[j,O,g,v,s,k.length,T,P]),i=(0,d.useCallback)(t=>o=>{if(o.key==="ArrowRight"){const u=O(t,o.key);t===u?(o.preventDefault(),p(),T&&(0,a.z$)(()=>(0,a.Ub)(s.current))):v(u)}o.key==="ArrowLeft"&&t<=k.length-1&&v(O(t,o.key)),z.includes(o.key)&&(0,a.z$)(()=>P()),S==null||S(o)},[S,k.length,O,v,p,s,T,P,z]),h=(0,d.useCallback)(t=>o=>{if(o.key==="ArrowLeft"){const u=j(t,o.key);t===u?(o.preventDefault(),p(),T&&(0,a.z$)(()=>(0,a.Ub)(s.current))):g(u)}o.key==="ArrowRight"&&t<=m.length-1&&g(j(t,o.key)),z.includes(o.key)&&(0,a.z$)(()=>P()),S==null||S(o)},[S,m.length,j,g,p,s,T,P,z]),y=(0,d.useCallback)(()=>{(0,a.z$)(()=>P())},[P]);return{inputTabIndex:D,onInputKeyDown:r,setInitialTabIndices:P,prefixButtons:k.some(t=>t.show)?(0,n.jsx)(n.Fragment,{children:k.map((t,o)=>t.show?t.active?t.render({key:t.id,ref:t.ref,tabIndex:R[o],onKeyDown:i(o),onClick:y}):t.render({key:t.id}):null)}):void 0,postfixButtons:m.some(t=>t.show)?(0,n.jsx)(n.Fragment,{children:m.map((t,o)=>t.show?t.active?t.render({key:t.id,ref:t.ref,tabIndex:L[o],onKeyDown:h(o),onClick:y}):t.render({key:t.id}):null)}):void 0}}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js":((E,b,e)=>{e.d(b,{r:()=>P});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),a=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),_=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(s),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),k=e.n(m),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(K),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),D=e.n(z),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=e.n(w),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n(M),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"),x={};x.styleTagTransform=R(),x.setAttributes=D(),x.insert=T().bind(null,"head"),x.domAPI=k(),x.insertStyleElement=S();var L=f()(I.A,x);const A=I.A&&I.A.locals?I.A.locals:void 0,O=(0,d.forwardRef)(({size:p,onClick:v,tabIndex:g=-1,onKeyDown:r,onMouseDown:i},h)=>{const y=t=>{t.stopPropagation(),v(t)};return(0,n.jsxs)("button",{className:A.buttonClearValue,"data-size":p,onClick:y,"data-test-id":"button-clear-value",type:"button",ref:h,onKeyDown:r,onMouseDown:i,tabIndex:g,children:[p===a.Vp.S&&(0,n.jsx)(_.A,{size:16}),p===a.Vp.M&&(0,n.jsx)(_.A,{})]})});var j=function(p,v){var g={};for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&v.indexOf(r)<0&&(g[r]=p[r]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(p);i<r.length;i++)v.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(p,r[i])&&(g[r[i]]=p[r[i]]);return g};function P({clearButtonRef:p,showClearButton:v,size:g,onClear:r,onDown:i}){const h=(0,l.A)(r),y=(0,l.A)(i!=null?i:(()=>{}));return(0,d.useMemo)(()=>({id:"clear",active:!0,ref:p,show:v,render:t=>{var{key:o}=t,u=j(t,["key"]);const C=c=>{u.onClick(c),h(c)};return(0,n.jsx)(O,Object.assign({},u,{onMouseDown:y,size:a._h[g],onClick:C}),o)}}),[p,h,y,v,g])}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/Checkbox.js":((E,b,e)=>{e.d(b,{S:()=>g});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),_=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/minus/index.js"),s=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),f=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),m=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),k=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=e.n(K),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),D=e.n(z),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),S=e.n(w),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n(M),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(I),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),A=e.n(L),O=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/styles.module.css"),j={};j.styleTagTransform=A(),j.setAttributes=R(),j.insert=S().bind(null,"head"),j.domAPI=D(),j.insertStyleElement=x();var P=T()(O.A,j);const p=O.A&&O.A.locals?O.A.locals:void 0;var v=function(r,i){var h={};for(var y in r)Object.prototype.hasOwnProperty.call(r,y)&&i.indexOf(y)<0&&(h[y]=r[y]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,y=Object.getOwnPropertySymbols(r);t<y.length;t++)i.indexOf(y[t])<0&&Object.prototype.propertyIsEnumerable.call(r,y[t])&&(h[y[t]]=r[y[t]]);return h};function g(r){var{inputRef:i,indeterminate:h,indeterminateDefault:y,onChange:t,"data-test-id":o,size:u=f.SK.M}=r,C=v(r,["inputRef","indeterminate","indeterminateDefault","onChange","data-test-id","size"]);const c=(0,l.useRef)(null),V=(0,d.A)(c,i),[U,H]=(0,a.iC)(h,y),F=(0,l.useCallback)(W=>{t==null||t(W),H(!1)},[t,H]);(0,l.useEffect)(()=>{c.current&&(c.current.indeterminate=!!U)},[c,U]);const $=(0,l.useMemo)(()=>(0,m.J)(u),[u]);return(0,n.jsx)(k.Q,Object.assign({},C,{size:u,onChange:F,"data-test-id":o,ref:V,render:function(X){const N=(0,m.V)(Object.assign(Object.assign({},X),{indeterminate:!!U}));return(0,n.jsxs)("div",Object.assign({className:p.container},N,{children:[(0,n.jsx)("div",Object.assign({className:p.box},N)),(0,n.jsx)("div",Object.assign({className:p.icon},N,{children:U?(0,n.jsx)(_.A,{size:$}):(0,n.jsx)(s.A,{size:$})}))]}))}}))}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js":((E,b,e)=>{e.d(b,{Q:()=>p});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=e.n(d),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),s=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),f=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(m),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),T=e.n(K),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=e.n(z),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),S=e.n(w),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n(M),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=e.n(I),L=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css"),A={};A.styleTagTransform=x(),A.setAttributes=S(),A.insert=D().bind(null,"head"),A.domAPI=T(),A.insertStyleElement=R();var O=k()(L.A,A);const j=L.A&&L.A.locals?L.A.locals:void 0;var P=function(v,g){var r={};for(var i in v)Object.prototype.hasOwnProperty.call(v,i)&&g.indexOf(i)<0&&(r[i]=v[i]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,i=Object.getOwnPropertySymbols(v);h<i.length;h++)g.indexOf(i[h])<0&&Object.prototype.propertyIsEnumerable.call(v,i[h])&&(r[i[h]]=v[i[h]]);return r};const p=(0,a.forwardRef)(function(g,r){var{render:i,checked:h,defaultChecked:y,onChange:t,onBlur:o,onFocus:u,disabled:C,className:c,size:V=s.SK.M,mode:U=s.g.Checkbox,onKeyUp:H,"data-test-id":F}=g,$=P(g,["render","checked","defaultChecked","onChange","onBlur","onFocus","disabled","className","size","mode","onKeyUp","data-test-id"]);const[W,X]=(0,_.iC)(h,!!y,t),[N,Z]=(0,a.useState)(!1),[G,Q]=(0,a.useState)(!1),J={disabled:!!C,focusVisible:N,checked:W,hover:G,size:V};return(0,n.jsxs)("span",Object.assign({role:U,className:l()(c,j.toggleLayout),"data-size":V,"data-test-id":F,onMouseEnter:()=>Q(!0),onMouseLeave:()=>Q(!1),onKeyUp:H},(0,f.V)(J),{children:[i(J),(0,n.jsx)("input",Object.assign({},$,{"data-test-id":`${F}-native-input`,ref:r,type:U,className:j.togglePrivate,checked:W,disabled:C,onChange:B=>X(B.target.checked),onFocus:B=>{Z(B.target.matches(":focus-visible")),u==null||u(B)},onBlur:B=>{Z(!1),o==null||o(B)}}))]}))})}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js":((E,b,e)=>{e.d(b,{SK:()=>d,ds:()=>a,g:()=>n,hZ:()=>l});const n={Checkbox:"checkbox",Radio:"radio"},d={S:"s",M:"m"},l={Star:"star",Heart:"heart"},a={Single:"single",Multiple:"multiple"}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js":((E,b,e)=>{e.d(b,{J:()=>l,V:()=>d});var n=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js");function d(a){return Object.entries(a).reduce(function(_,[s,f]){return _[`data-${s.toLowerCase()}`]=f,_},{})}function l(a){switch(a){case n.SK.S:return 16;case n.SK.M:default:return 24}}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css":((E,b,e)=>{e.d(b,{A:()=>s});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(n),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(l),_=a()(d());_.push([E.id,`.buttonClearValue--sjVPq{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonClearValue--sjVPq[data-size=s]{
  width:var(--size-input-private-button-clear-value-s, 16px);
  height:var(--size-input-private-button-clear-value-s, 16px);
  border-radius:var(--radius-input-private-button-clear-value-s, 8px);
}
.buttonClearValue--sjVPq[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.buttonClearValue--sjVPq[data-size=m]{
  width:var(--size-input-private-button-clear-value-m, 24px);
  height:var(--size-input-private-button-clear-value-m, 24px);
  border-radius:var(--radius-input-private-button-clear-value-m, 12px);
}
.buttonClearValue--sjVPq[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonClearValue--sjVPq:hover{
  cursor:pointer;
  color:var(--sys-red-text-support, #ae514c);
}
.buttonClearValue--sjVPq:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-support, #ae514c);
  outline-color:var(--sys-red-accent-default, #cb3f3e);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonClearValue--sjVPq:active{
  color:var(--sys-red-text-main, #7a2d2d);
}
.buttonClearValue--sjVPq[data-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),_.locals={buttonClearValue:"buttonClearValue--sjVPq"};const s=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/styles.module.css":((E,b,e)=>{e.d(b,{A:()=>s});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(n),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(l),_=a()(d());_.push([E.id,`.container--kHzld{
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
}
.container--kHzld[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
  border-radius:var(--radius-toggles-s-box-checkbox, 4px);
  border-width:var(--border-width-toggles-single, 2px);
}
.container--kHzld[data-size=m]{
  width:var(--size-toggles-m-container, 24px);
  height:var(--size-toggles-m-container, 24px);
  border-radius:var(--radius-toggles-m-box-checkbox, 4px);
  border-width:var(--border-width-toggles-single, 2px);
}
.container--kHzld[data-focusvisible=true]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
}
.container--kHzld[data-focusvisible=true][data-size=s]{
  outline-offset:var(--border-width-state-focus-s, 2px);
}

.box--dyrcl{
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-decor-activated, #b6bac7);
  border-style:solid;
}
.box--dyrcl[data-checked=false][data-focusvisible=true], .box--dyrcl[data-checked=false][data-hover=true]{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.box--dyrcl[data-checked=false][data-disabled=true]{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.box--dyrcl[data-indeterminate=true], .box--dyrcl[data-checked=true]{
  background-color:var(--sys-primary-accent-default, #389f74);
  border-color:var(--sys-primary-accent-default, #389f74);
}
.box--dyrcl[data-indeterminate=true][data-focusvisible=true], .box--dyrcl[data-indeterminate=true][data-hover=true], .box--dyrcl[data-checked=true][data-focusvisible=true], .box--dyrcl[data-checked=true][data-hover=true]{
  background-color:var(--sys-primary-accent-hovered, #37946e);
  border-color:var(--sys-primary-accent-hovered, #37946e);
}
.box--dyrcl[data-indeterminate=true][data-disabled=true], .box--dyrcl[data-checked=true][data-disabled=true]{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
  border-color:var(--sys-neutral-text-disabled, #aaaebd);
}
.box--dyrcl[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
  border-width:var(--border-width-toggles-single, 2px);
  border-radius:var(--radius-toggles-s-box-checkbox, 4px);
}
.box--dyrcl[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.box--dyrcl[data-size=m]{
  width:var(--size-toggles-m-box-checkbox, 20px);
  height:var(--size-toggles-m-box-checkbox, 20px);
  border-width:var(--border-width-toggles-single, 2px);
  border-radius:var(--radius-toggles-m-box-checkbox, 4px);
}
.box--dyrcl[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.icon--pAU4u{
  position:absolute;
  top:0;
  left:0;
  display:none;
  width:100%;
  height:100%;
  color:var(--sys-primary-on-accent, #fbfffc);
}
.icon--pAU4u[data-indeterminate=true], .icon--pAU4u[data-checked=true]{
  display:block;
}
.icon--pAU4u[data-disabled=true]{
  color:var(--sys-neutral-decor-disabled, #e6e8ef);
}`,""]),_.locals={container:"container--kHzld",box:"box--dyrcl",icon:"icon--pAU4u"};const s=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css":((E,b,e)=>{e.d(b,{A:()=>s});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(n),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(l),_=a()(d());_.push([E.id,`.toggleLayout--kDjtQ{
  cursor:pointer;
  position:relative;
  display:inline-flex;
  flex-direction:row;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
}
.toggleLayout--kDjtQ[data-disabled=true]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

.togglePrivate--uT5Dy{
  cursor:pointer;
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  width:100%;
  height:100%;
  margin:0;
  padding:0;
  opacity:0;
}
.togglePrivate--uT5Dy:disabled{
  cursor:not-allowed;
}`,""]),_.locals={toggleLayout:"toggleLayout--kDjtQ",togglePrivate:"togglePrivate--uT5Dy"};const s=_}),"./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js":((E,b,e)=>{e.d(b,{A:()=>n});function n(){for(var d=[],l=0;l<arguments.length;l++)d[l]=arguments[l];var a=d.filter(Boolean);if(a.length<=1){var _=a[0];return _||null}return function(f){a.forEach(function(m){typeof m=="function"?m(f):m&&(m.current=f)})}}})}]);})();
