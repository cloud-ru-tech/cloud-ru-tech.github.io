"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[423],{"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"(x,v,e){e.d(v,{Ev:()=>n,SK:()=>a,Vp:()=>_,_h:()=>d});const a={S:"s",M:"m",L:"l"},n={Xs:16,S:24},_={S:"s",M:"m"},d={[a.S]:_.S,[a.M]:_.M,[a.L]:_.M}},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"(x,v,e){e.d(v,{G8:()=>a,OE:()=>r,Sf:()=>d,Ub:()=>n,z$:()=>_});function a(o){var k;const f=(k=o==null?void 0:o.value.length)!==null&&k!==void 0?k:0;o==null||o.setSelectionRange(f,f)}function n(o){o==null||o.setSelectionRange(0,o==null?void 0:o.value.length)}function _(o){setTimeout(o,0)}function d(o){return(o==null?void 0:o.selectionStart)===0}function r(o){var k;return(o==null?void 0:o.selectionStart)===((k=o==null?void 0:o.value)===null||k===void 0?void 0:k.length)}},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"(x,v,e){e.d(v,{C:()=>r});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),d=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js");function r({inputRef:o,setInputFocus:k=()=>{var M;return(M=o.current)===null||M===void 0?void 0:M.focus()},postfixButtons:f,prefixButtons:y=[],onButtonKeyDown:B=()=>{},readonly:C,submitKeys:w}){const[M,D]=(0,n.useState)(0),P=(0,_.A)(B),T=(0,n.useCallback)(()=>y.map(()=>-1),[y]),[z,j]=(0,n.useState)(T),S=(0,n.useCallback)(()=>f.map(()=>-1),[f]),[L,E]=(0,n.useState)(S),K=(0,n.useCallback)((s,t)=>{const l=t==="ArrowLeft"?-1:1,O=p=>t==="ArrowLeft"?p>=0:p<y.length;for(let p=s+l;O(p);p+=l)if(y[p].active&&y[p].show)return p;return s},[y]),I=(0,n.useCallback)((s,t)=>{const l=t==="ArrowLeft"?-1:1,O=p=>t==="ArrowLeft"?p>=0:p<f.length;for(let p=s+l;O(p);p+=l)if(f[p].active&&f[p].show)return p;return s},[f]),h=(0,n.useCallback)(()=>{D(0),j(T),E(S)},[T,S]),c=(0,n.useCallback)(()=>{h(),k()},[h,k]),b=(0,n.useCallback)(s=>{var t,l;D(-1),j(O=>O.map((p,W)=>W===s?0:-1)),E(S),!((t=y[s])===null||t===void 0)&&t.active&&((l=y[s].ref.current)===null||l===void 0||l.focus())},[S,y]),u=(0,n.useCallback)(s=>{var t,l;D(-1),j(T),E(O=>O.map((p,W)=>W===s?0:-1)),!((t=f[s])===null||t===void 0)&&t.active&&((l=f[s].ref.current)===null||l===void 0||l.focus())},[T,f]),g=(0,n.useCallback)(s=>{if(h(),s.key==="ArrowRight"&&(C||(0,d.OE)(o.current))){const t=I(-1,s.key);t>=0&&u(t)}if(s.key==="ArrowLeft"&&(C||(0,d.Sf)(o.current))){const t=K(y.length,s.key);t>=0&&b(t)}},[I,K,u,b,o,y.length,C,h]),i=(0,n.useCallback)(s=>t=>{if(t.key==="ArrowRight"){const l=K(s,t.key);s===l?(t.preventDefault(),c(),C&&(0,d.z$)(()=>(0,d.Ub)(o.current))):b(l)}t.key==="ArrowLeft"&&s<=y.length-1&&b(K(s,t.key)),w.includes(t.key)&&(0,d.z$)(()=>h()),P==null||P(t)},[P,y.length,K,b,c,o,C,h,w]),m=(0,n.useCallback)(s=>t=>{if(t.key==="ArrowLeft"){const l=I(s,t.key);s===l?(t.preventDefault(),c(),C&&(0,d.z$)(()=>(0,d.Ub)(o.current))):u(l)}t.key==="ArrowRight"&&s<=f.length-1&&u(I(s,t.key)),w.includes(t.key)&&(0,d.z$)(()=>h()),P==null||P(t)},[P,f.length,I,u,c,o,C,h,w]),A=(0,n.useCallback)(()=>{(0,d.z$)(()=>h())},[h]);return{inputTabIndex:M,onInputKeyDown:g,setInitialTabIndices:h,prefixButtons:y.some(s=>s.show)?(0,a.jsx)(a.Fragment,{children:y.map((s,t)=>s.show?s.active?s.render({key:s.id,ref:s.ref,tabIndex:z[t],onKeyDown:i(t),onClick:A}):s.render({key:s.id}):null)}):void 0,postfixButtons:f.some(s=>s.show)?(0,a.jsx)(a.Fragment,{children:f.map((s,t)=>s.show?s.active?s.render({key:s.id,ref:s.ref,tabIndex:L[t],onKeyDown:m(t),onClick:A}):s.render({key:s.id}):null)}):void 0}}},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"(x,v,e){e.d(v,{r:()=>h});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),d=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),r=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(o),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),y=e.n(f),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),C=e.n(B),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(w),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),P=e.n(D),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),z=e.n(T),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"),S={};S.styleTagTransform=z(),S.setAttributes=M(),S.insert=C().bind(null,"head"),S.domAPI=y(),S.insertStyleElement=P();var L=k()(j.A,S);const E=j.A&&j.A.locals?j.A.locals:void 0,K=(0,n.forwardRef)(({size:c,onClick:b,tabIndex:u=-1,onKeyDown:g,onMouseDown:i},m)=>{const A=s=>{s.stopPropagation(),b(s)};return(0,a.jsxs)("button",{className:E.buttonClearValue,"data-size":c,onClick:A,"data-test-id":"button-clear-value",type:"button",ref:m,onKeyDown:g,onMouseDown:i,tabIndex:u,children:[c===d.Vp.S&&(0,a.jsx)(r.A,{size:16}),c===d.Vp.M&&(0,a.jsx)(r.A,{})]})});var I=function(c,b){var u={};for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&b.indexOf(g)<0&&(u[g]=c[g]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,g=Object.getOwnPropertySymbols(c);i<g.length;i++)b.indexOf(g[i])<0&&Object.prototype.propertyIsEnumerable.call(c,g[i])&&(u[g[i]]=c[g[i]]);return u};function h({clearButtonRef:c,showClearButton:b,size:u,onClear:g,onDown:i}){const m=(0,_.A)(g),A=(0,_.A)(i!=null?i:(()=>{}));return(0,n.useMemo)(()=>({id:"clear",active:!0,ref:c,show:b,render:s=>{var{key:t}=s,l=I(s,["key"]);const O=p=>{l.onClick(p),m(p)};return(0,a.jsx)(K,Object.assign({},l,{onMouseDown:A,size:d._h[u],onClick:O}),t)}}),[c,m,A,b,u])}},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/Switch.js"(x,v,e){e.d(v,{d:()=>i});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),n=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),_=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(r),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),f=e.n(k),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),B=e.n(y),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),w=e.n(C),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=e.n(M),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),T=e.n(P),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"),j={};j.styleTagTransform=T(),j.setAttributes=w(),j.insert=B().bind(null,"head"),j.domAPI=f(),j.insertStyleElement=D();var S=o()(z.A,j);const L=z.A&&z.A.locals?z.A.locals:void 0;function E(){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:L.spinner,children:(0,a.jsx)("path",{d:"M5 8C5 6.34315 6.34315 5 8 5",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round"})})}var K=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),I=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"),c={};c.styleTagTransform=T(),c.setAttributes=w(),c.insert=B().bind(null,"head"),c.domAPI=f(),c.insertStyleElement=D();var b=o()(h.A,c);const u=h.A&&h.A.locals?h.A.locals:void 0;var g=function(m,A){var s={};for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&A.indexOf(t)<0&&(s[t]=m[t]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(m);l<t.length;l++)A.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(m,t[l])&&(s[t[l]]=m[t[l]]);return s};function i(m){var{inputRef:A,"data-test-id":s,showIcon:t,loading:l,size:O=d.SK.M}=m,p=g(m,["inputRef","data-test-id","showIcon","loading","size"]);return(0,a.jsx)(I.Q,Object.assign({},p,{size:O,"data-test-id":s,ref:A,render:function(N){const U=(0,K.V)(N);return(0,a.jsxs)("div",Object.assign({className:u.container},U,{children:[(0,a.jsx)("div",Object.assign({className:u.box},U)),(0,a.jsxs)("div",Object.assign({className:u.containerFlag},U,{children:[(0,a.jsx)("div",Object.assign({className:u.flag},U)),(t||l)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",Object.assign({className:u.flag_icon_off},U,{children:l?(0,a.jsx)(E,{}):(0,a.jsx)(n.A,{size:16})})),(0,a.jsx)("div",Object.assign({className:u.flag_icon_on},U,{children:l?(0,a.jsx)(E,{}):(0,a.jsx)(_.A,{size:16})}))]})]}))]}))}}))}},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"(x,v,e){e.d(v,{Q:()=>c});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),n=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(n),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),k=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(f),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),C=e.n(B),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=e.n(w),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),P=e.n(D),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(T),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),S=e.n(j),L=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css"),E={};E.styleTagTransform=S(),E.setAttributes=P(),E.insert=M().bind(null,"head"),E.domAPI=C(),E.insertStyleElement=z();var K=y()(L.A,E);const I=L.A&&L.A.locals?L.A.locals:void 0;var h=function(b,u){var g={};for(var i in b)Object.prototype.hasOwnProperty.call(b,i)&&u.indexOf(i)<0&&(g[i]=b[i]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,i=Object.getOwnPropertySymbols(b);m<i.length;m++)u.indexOf(i[m])<0&&Object.prototype.propertyIsEnumerable.call(b,i[m])&&(g[i[m]]=b[i[m]]);return g};const c=(0,d.forwardRef)(function(u,g){var{render:i,checked:m,defaultChecked:A,onChange:s,onBlur:t,onFocus:l,disabled:O,className:p,size:W=o.SK.M,mode:N=o.g.Checkbox,onKeyUp:U,"data-test-id":V}=u,Z=h(u,["render","checked","defaultChecked","onChange","onBlur","onFocus","disabled","className","size","mode","onKeyUp","data-test-id"]);const[F,Q]=(0,r.iC)(m,!!A,s),[$,G]=(0,d.useState)(!1),[Y,X]=(0,d.useState)(!1),H={disabled:!!O,focusVisible:$,checked:F,hover:Y,size:W};return(0,a.jsxs)("span",Object.assign({role:N,className:_()(p,I.toggleLayout),"data-size":W,"data-test-id":V,onMouseEnter:()=>X(!0),onMouseLeave:()=>X(!1),onKeyUp:U},(0,k.V)(H),{children:[i(H),(0,a.jsx)("input",Object.assign({},Z,{"data-test-id":`${V}-native-input`,ref:g,type:N,className:I.togglePrivate,checked:F,disabled:O,onChange:R=>Q(R.target.checked),onFocus:R=>{G(R.target.matches(":focus-visible")),l==null||l(R)},onBlur:R=>{G(!1),t==null||t(R)}}))]}))})},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"(x,v,e){e.d(v,{SK:()=>n,g:()=>a});const a={Checkbox:"checkbox",Radio:"radio"},n={S:"s",M:"m"},_=null,d=null},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"(x,v,e){e.d(v,{J:()=>_,V:()=>n});var a=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js");function n(d){return Object.entries(d).reduce(function(r,[o,k]){return r[`data-${o.toLowerCase()}`]=k,r},{})}function _(d){switch(d){case a.SK.S:return 16;case a.SK.M:default:return 24}}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"(x,v,e){e.d(v,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(a),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(_),r=d()(n());r.push([x.id,`.buttonClearValue--az5gm{
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
}`,""]),r.locals={buttonClearValue:"buttonClearValue--az5gm"};const o=r},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"(x,v,e){e.d(v,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(a),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(_),r=d()(n());r.push([x.id,`.container--Brwxd{
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
}
.container--Brwxd[data-size=s]{
  width:var(--size-toggles-s-container-switch-width, 24px);
  height:var(--size-toggles-s-container, 16px);
  border-radius:var(--radius-toggles-s-box-switch, 16px);
}
.container--Brwxd[data-size=m]{
  width:var(--size-toggles-m-container-switch-width, 36px);
  height:var(--size-toggles-m-container, 24px);
  border-radius:var(--radius-toggles-m-box-switch, 16px);
}
.container--Brwxd[data-focusvisible=true]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
}
.container--Brwxd[data-focusvisible=true][data-size=s]{
  outline-offset:var(--border-width-state-focus-s, 2px);
}
.container--Brwxd{
  position:relative;
}

.box--DWGN7{
  position:relative;
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.box--DWGN7[data-size=s]{
  width:var(--size-toggles-s-box-switch-width, 24px);
  height:var(--size-toggles-s-box-switch-height, 16px);
  border-radius:var(--radius-toggles-s-box-switch, 16px);
}
.box--DWGN7[data-size=m]{
  width:var(--size-toggles-m-box-switch-width, 32px);
  height:var(--size-toggles-m-box-switch-height, 20px);
  border-radius:var(--radius-toggles-m-box-switch, 16px);
}
.box--DWGN7[data-hover=true]{
  background-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.box--DWGN7[data-disabled=true]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.box--DWGN7[data-checked=true]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.box--DWGN7[data-checked=true][data-hover=true]{
  background-color:var(--sys-primary-accent-hovered, #37946e);
}
.box--DWGN7[data-checked=true][data-disabled=true]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.containerFlag--CiX6a{
  position:absolute;
  left:0;
  display:flex;
  align-items:center;
  justify-content:center;
  transition-timing-function:linear;
  transition-duration:0.1s;
  transition-property:left;
}
.containerFlag--CiX6a[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
}
.containerFlag--CiX6a[data-size=s][data-checked=true]{
  left:calc(100% - var(--size-toggles-s-container, 16px));
}
.containerFlag--CiX6a[data-size=m]{
  width:var(--size-toggles-m-container, 24px);
  height:var(--size-toggles-m-container, 24px);
}
.containerFlag--CiX6a[data-size=m][data-checked=true]{
  left:calc(100% - var(--size-toggles-m-container, 24px));
}

.flag--bPMK6{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}
.flag--bPMK6[data-size=s]{
  border-radius:var(--radius-toggles-s-box-switch, 16px);
  width:var(--size-toggles-s-flag-switch, 12px);
  height:var(--size-toggles-s-flag-switch, 12px);
}
.flag--bPMK6[data-size=m]{
  border-radius:var(--radius-toggles-m-box-switch, 16px);
  width:var(--size-toggles-m-flag-switch, 16px);
  height:var(--size-toggles-m-flag-switch, 16px);
}
.flag--bPMK6[data-focusvisible=true], .flag--bPMK6[data-hover=true]{
  background-color:var(--sys-neutral-on-accent, #ffffff);
}
.flag--bPMK6[data-disabled=true]{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}

.flag_icon_off--ZG1HQ{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  fill:transparent;
  transition:opacity 0.1s linear;
}
.flag_icon_off--ZG1HQ[data-hover=true]{
  color:var(--sys-neutral-accent-hovered, #6d707f);
}
.flag_icon_off--ZG1HQ[data-checked=true]{
  color:var(--sys-primary-accent-default, #389f74);
}
.flag_icon_off--ZG1HQ[data-checked=true][data-hover=true]{
  color:var(--sys-primary-accent-hovered, #37946e);
}
.flag_icon_off--ZG1HQ[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_off--ZG1HQ[data-disabled=true][data-hover=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_off--ZG1HQ{
  opacity:1;
}
.flag_icon_off--ZG1HQ[data-checked=true]{
  opacity:0;
}

.flag_icon_on--ImkUt{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  fill:transparent;
  transition:opacity 0.1s linear;
}
.flag_icon_on--ImkUt[data-hover=true]{
  color:var(--sys-neutral-accent-hovered, #6d707f);
}
.flag_icon_on--ImkUt[data-checked=true]{
  color:var(--sys-primary-accent-default, #389f74);
}
.flag_icon_on--ImkUt[data-checked=true][data-hover=true]{
  color:var(--sys-primary-accent-hovered, #37946e);
}
.flag_icon_on--ImkUt[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_on--ImkUt[data-disabled=true][data-hover=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_on--ImkUt{
  opacity:0;
}
.flag_icon_on--ImkUt[data-checked=true]{
  opacity:1;
}`,""]),r.locals={container:"container--Brwxd",box:"box--DWGN7",containerFlag:"containerFlag--CiX6a",flag:"flag--bPMK6",flag_icon_off:"flag_icon_off--ZG1HQ",flag_icon_on:"flag_icon_on--ImkUt"};const o=r},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css"(x,v,e){e.d(v,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(a),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(_),r=d()(n());r.push([x.id,`.toggleLayout--KwCBe{
  cursor:pointer;
  position:relative;
  display:inline-flex;
  flex-direction:row;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
}
.toggleLayout--KwCBe[data-disabled=true]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

.togglePrivate--c2UuX{
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
.togglePrivate--c2UuX:disabled{
  cursor:not-allowed;
}`,""]),r.locals={toggleLayout:"toggleLayout--KwCBe",togglePrivate:"togglePrivate--c2UuX"};const o=r},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"(x,v,e){e.d(v,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(a),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(_),r=d()(n());r.push([x.id,`.spinner--pavMg{
  pointer-events:none;
  width:var(--dimension-2m, 16px);
  height:var(--dimension-2m, 16px);
  animation:spin--V6hqY 1s ease-in-out infinite;
}
.spinner--pavMg > path{
  stroke:currentColor;
}
@keyframes spin--V6hqY{
  to{
    transform:rotate(360deg);
  }
}`,""]),r.locals={spinner:"spinner--pavMg",spin:"spin--V6hqY"};const o=r}}]);})();
