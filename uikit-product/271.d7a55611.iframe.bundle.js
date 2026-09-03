"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[271],{"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"(I,M,s){s.d(M,{Ev:()=>a,SK:()=>t,Vp:()=>p,_h:()=>r});const t={S:"s",M:"m",L:"l"},a={Xs:16,S:24},p={S:"s",M:"m"},r={[t.S]:p.S,[t.M]:p.M,[t.L]:p.M}},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"(I,M,s){s.d(M,{G8:()=>t,OE:()=>u,Sf:()=>r,Ub:()=>a,z$:()=>p});function t(o){var T;const _=(T=o==null?void 0:o.value.length)!==null&&T!==void 0?T:0;o==null||o.setSelectionRange(_,_)}function a(o){o==null||o.setSelectionRange(0,o==null?void 0:o.value.length)}function p(o){setTimeout(o,0)}function r(o){return(o==null?void 0:o.selectionStart)===0}function u(o){var T;return(o==null?void 0:o.selectionStart)===((T=o==null?void 0:o.value)===null||T===void 0?void 0:T.length)}},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"(I,M,s){s.d(M,{C:()=>u});var t=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),r=s("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js");function u({inputRef:o,setInputFocus:T=()=>{var L;return(L=o.current)===null||L===void 0?void 0:L.focus()},postfixButtons:_,prefixButtons:b=[],onButtonKeyDown:R=()=>{},readonly:D,submitKeys:C}){const[L,W]=(0,a.useState)(0),g=(0,p.A)(R),j=(0,a.useCallback)(()=>b.map(()=>-1),[b]),[H,E]=(0,a.useState)(j),k=(0,a.useCallback)(()=>_.map(()=>-1),[_]),[Z,P]=(0,a.useState)(k),N=(0,a.useCallback)((e,l)=>{const v=l==="ArrowLeft"?-1:1,w=y=>l==="ArrowLeft"?y>=0:y<b.length;for(let y=e+v;w(y);y+=v)if(b[y].active&&b[y].show)return y;return e},[b]),z=(0,a.useCallback)((e,l)=>{const v=l==="ArrowLeft"?-1:1,w=y=>l==="ArrowLeft"?y>=0:y<_.length;for(let y=e+v;w(y);y+=v)if(_[y].active&&_[y].show)return y;return e},[_]),m=(0,a.useCallback)(()=>{W(0),E(j),P(k)},[j,k]),d=(0,a.useCallback)(()=>{m(),T()},[m,T]),h=(0,a.useCallback)(e=>{var l,v;W(-1),E(w=>w.map((y,X)=>X===e?0:-1)),P(k),!((l=b[e])===null||l===void 0)&&l.active&&((v=b[e].ref.current)===null||v===void 0||v.focus())},[k,b]),n=(0,a.useCallback)(e=>{var l,v;W(-1),E(j),P(w=>w.map((y,X)=>X===e?0:-1)),!((l=_[e])===null||l===void 0)&&l.active&&((v=_[e].ref.current)===null||v===void 0||v.focus())},[j,_]),c=(0,a.useCallback)(e=>{if(m(),e.key==="ArrowRight"&&(D||(0,r.OE)(o.current))){const l=z(-1,e.key);l>=0&&n(l)}if(e.key==="ArrowLeft"&&(D||(0,r.Sf)(o.current))){const l=N(b.length,e.key);l>=0&&h(l)}},[z,N,n,h,o,b.length,D,m]),S=(0,a.useCallback)(e=>l=>{if(l.key==="ArrowRight"){const v=N(e,l.key);e===v?(l.preventDefault(),d(),D&&(0,r.z$)(()=>(0,r.Ub)(o.current))):h(v)}l.key==="ArrowLeft"&&e<=b.length-1&&h(N(e,l.key)),C.includes(l.key)&&(0,r.z$)(()=>m()),g==null||g(l)},[g,b.length,N,h,d,o,D,m,C]),U=(0,a.useCallback)(e=>l=>{if(l.key==="ArrowLeft"){const v=z(e,l.key);e===v?(l.preventDefault(),d(),D&&(0,r.z$)(()=>(0,r.Ub)(o.current))):n(v)}l.key==="ArrowRight"&&e<=_.length-1&&n(z(e,l.key)),C.includes(l.key)&&(0,r.z$)(()=>m()),g==null||g(l)},[g,_.length,z,n,d,o,D,m,C]),O=(0,a.useCallback)(()=>{(0,r.z$)(()=>m())},[m]);return{inputTabIndex:L,onInputKeyDown:c,setInitialTabIndices:m,prefixButtons:b.some(e=>e.show)?(0,t.jsx)(t.Fragment,{children:b.map((e,l)=>e.show?e.active?e.render({key:e.id,ref:e.ref,tabIndex:H[l],onKeyDown:S(l),onClick:O}):e.render({key:e.id}):null)}):void 0,postfixButtons:_.some(e=>e.show)?(0,t.jsx)(t.Fragment,{children:_.map((e,l)=>e.show?e.active?e.render({key:e.id,ref:e.ref,tabIndex:Z[l],onKeyDown:U(l),onClick:O}):e.render({key:e.id}):null)}):void 0}}},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"(I,M,s){s.d(M,{r:()=>m});var t=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),r=s("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),u=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),o=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=s.n(o),_=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),b=s.n(_),R=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=s.n(R),C=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=s.n(C),W=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=s.n(W),j=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),H=s.n(j),E=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"),k={};k.styleTagTransform=H(),k.setAttributes=L(),k.insert=D().bind(null,"head"),k.domAPI=b(),k.insertStyleElement=g();var Z=T()(E.A,k);const P=E.A&&E.A.locals?E.A.locals:void 0,N=(0,a.forwardRef)(({size:d,onClick:h,tabIndex:n=-1,onKeyDown:c,onMouseDown:S},U)=>{const O=e=>{e.stopPropagation(),h(e)};return(0,t.jsxs)("button",{className:P.buttonClearValue,"data-size":d,onClick:O,"data-test-id":"button-clear-value",type:"button",ref:U,onKeyDown:c,onMouseDown:S,tabIndex:n,children:[d===r.Vp.S&&(0,t.jsx)(u.A,{size:16}),d===r.Vp.M&&(0,t.jsx)(u.A,{})]})});var z=function(d,h){var n={};for(var c in d)Object.prototype.hasOwnProperty.call(d,c)&&h.indexOf(c)<0&&(n[c]=d[c]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,c=Object.getOwnPropertySymbols(d);S<c.length;S++)h.indexOf(c[S])<0&&Object.prototype.propertyIsEnumerable.call(d,c[S])&&(n[c[S]]=d[c[S]]);return n};function m({clearButtonRef:d,showClearButton:h,size:n,onClear:c,onDown:S}){const U=(0,p.A)(c),O=(0,p.A)(S!=null?S:(()=>{}));return(0,a.useMemo)(()=>({id:"clear",active:!0,ref:d,show:h,render:e=>{var{key:l}=e,v=z(e,["key"]);const w=y=>{v.onClick(y),U(y)};return(0,t.jsx)(N,Object.assign({},v,{onMouseDown:O,size:r._h[n],onClick:w}),l)}}),[d,U,O,h,n])}},"./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"(I,M,s){s.d(M,{y:()=>z});var t=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=s.n(a),r=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),u=s("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),o=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=s.n(o),_=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),b=s.n(_),R=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=s.n(R),C=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=s.n(C),W=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=s.n(W),j=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),H=s.n(j),E=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"),k={};k.styleTagTransform=H(),k.setAttributes=L(),k.insert=D().bind(null,"head"),k.domAPI=b(),k.insertStyleElement=g();var Z=T()(E.A,k);const P=E.A&&E.A.locals?E.A.locals:void 0;var N=function(m,d){var h={};for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&d.indexOf(n)<0&&(h[n]=m[n]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(m);c<n.length;c++)d.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(m,n[c])&&(h[n[c]]=m[n[c]]);return h};function z(m){var{size:d=u.K.S,className:h}=m,n=N(m,["size","className"]);return d===u.K.XXS?(0,t.jsxs)("svg",Object.assign({viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:p()(P.spinner,h)},(0,r.z7)(n),{"data-size":d,children:[(0,t.jsx)("circle",{opacity:"0.24",cx:"4",cy:"4",r:"3",strokeWidth:"1.5"}),(0,t.jsx)("path",{d:"M1 4C1 2.34315 2.34315 1 4 1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):d===u.K.XS?(0,t.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:p()(P.spinner,h)},(0,r.z7)(n),{"data-size":d,children:[(0,t.jsx)("circle",{opacity:"0.24",cx:"8",cy:"8",r:"6",strokeWidth:"1.5"}),(0,t.jsx)("path",{d:"M2 8C2 4.68629 4.68629 2 8 2",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):(0,t.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:p()(P.spinner,h)},(0,r.z7)(n),{"data-size":d,children:[(0,t.jsx)("circle",{opacity:"0.24",cx:"12",cy:"12",r:"9",strokeWidth:"1.5"}),(0,t.jsx)("path",{d:"M3 12C3 7.02944 7.02944 3 12 3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}},"./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"(I,M,s){s.d(M,{O:()=>X});var t=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=s("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),p=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=s.n(p),u=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=s.n(u),T=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),_=s.n(T),b=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=s.n(b),D=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),C=s.n(D),L=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=s.n(L),g=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"),j={};j.styleTagTransform=W(),j.setAttributes=R(),j.insert=_().bind(null,"head"),j.domAPI=o(),j.insertStyleElement=C();var H=r()(g.A,j);const E=g.A&&g.A.locals?g.A.locals:void 0;var k=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),Z=s.n(k),P=s("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/overlayscrollbars.mjs"),N=s("./node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.11.1_react@18.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs"),z=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");const d={S:"s",M:"m"},h={Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"},n={None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"},c={Bottom:"bottom",Right:"right"},S=100,U=2;var O=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"),e={};e.styleTagTransform=W(),e.setAttributes=R(),e.insert=_().bind(null,"head"),e.domAPI=o(),e.insertStyleElement=C();var l=r()(O.A,e);const v=O.A&&O.A.locals?O.A.locals:void 0;var w=function(B,G){var J={};for(var x in B)Object.prototype.hasOwnProperty.call(B,x)&&G.indexOf(x)<0&&(J[x]=B[x]);if(B!=null&&typeof Object.getOwnPropertySymbols=="function")for(var K=0,x=Object.getOwnPropertySymbols(B);K<x.length;K++)G.indexOf(x[K])<0&&Object.prototype.propertyIsEnumerable.call(B,x[K])&&(J[x[K]]=B[x[K]]);return J};const y=P.ae.nonce,X=(0,z.forwardRef)(function(G,J){var{children:x,className:K,onScroll:$,onInitialized:Q,size:os=d.M,resize:ls=n.None,clickScrolling:ts=!0,barHideStrategy:as=h.Leave,autoscrollTo:Y,paddingAbsolute:rs,untouchableScrollbars:ns=!1}=G,ds=w(G,["children","className","onScroll","onInitialized","size","resize","clickScrolling","barHideStrategy","autoscrollTo","paddingAbsolute","untouchableScrollbars"]);const F=(0,z.useRef)(null),[es,is]=(0,z.useState)(!1),V=(0,z.useCallback)((f=F.current)=>f==null?void 0:f.osInstance(),[F]);(0,z.useImperativeHandle)(J,()=>{var f,i,A;return(A=(i=(f=F.current)===null||f===void 0?void 0:f.osInstance())===null||i===void 0?void 0:i.elements().viewport)!==null&&A!==void 0?A:null});const q=(0,z.useRef)({scrolledToBottom:!1,scrolledToRight:!1}),ss=(0,z.useCallback)(f=>{const i=V(f);if(i){const{viewport:A}=i.elements(),ms=A.scrollHeight-(A.offsetHeight+A.scrollTop),ps=A.scrollWidth-(A.offsetWidth+A.scrollLeft),vs=A.scrollHeight>A.offsetHeight,bs=A.scrollWidth>A.offsetWidth;q.current.scrolledToBottom=ms<U||!vs,q.current.scrolledToRight=ps<U||!bs}},[V]);(0,m.N)(()=>{if(!Y){Q==null||Q();return}const f=V();if(f&&es){ss();const{content:i}=f.elements();Y===c.Bottom&&i.scroll(0,i.scrollHeight),Y===c.Right&&i.scroll(i.scrollWidth,0)}Q==null||Q()},[V,es,ss]);const cs=(0,z.useCallback)(()=>{is(!0)},[]),us=(0,z.useCallback)(f=>{$==null||$(f),Y&&ss()},[$,ss]),_s=(0,z.useCallback)(()=>{var f;if(!Y)return;const i=(f=V())===null||f===void 0?void 0:f.elements();i!=null&&i.content&&(q.current.scrolledToBottom&&Y===c.Bottom&&(i==null||i.content.scroll(0,i==null?void 0:i.content.scrollHeight)),q.current.scrolledToRight&&Y===c.Right&&(i==null||i.content.scroll(i==null?void 0:i.content.scrollWidth,0)))},[V,Y]);return(0,t.jsx)(N.r,Object.assign({},ds,{ref:F,"data-size":os,"data-untouchable-scrollbars":ns||void 0,className:Z()(K,v.scroll,"osThemeSnack"),style:{resize:ls},options:{paddingAbsolute:rs,scrollbars:{autoHide:as,autoHideDelay:S,clickScroll:ts}},events:{initialized:cs,scroll:(f,i)=>{us(i)},updated:_s},children:Y?es&&x:x}))})},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"(I,M,s){s.d(M,{A:()=>o});var t=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=s.n(t),p=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=s.n(p),u=r()(a());u.push([I.id,`.buttonClearValue--az5gm{
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
}`,""]),u.locals={buttonClearValue:"buttonClearValue--az5gm"};const o=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"(I,M,s){s.d(M,{A:()=>o});var t=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=s.n(t),p=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=s.n(p),u=r()(a());u.push([I.id,`.spinner--DYy1L{
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
}`,""]),u.locals={spinner:"spinner--DYy1L",spin:"spin--T9QJf"};const o=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"(I,M,s){s.d(M,{A:()=>R});var t=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=s.n(t),p=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=s.n(p),u=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/getUrl.js"),o=s.n(u),T=new URL(s("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),s.b),_=r()(a()),b=o()(T);_.push([I.id,`@charset "UTF-8";
.osThemeSnack .os-scrollbar{
  padding:0;
}

.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical > .os-scrollbar-track{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  pointer-events:none;
}

.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal > .os-scrollbar-track{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  pointer-events:none;
}

.osThemeSnack[data-size=s] > .os-scrollbar-vertical{
  width:var(--size-scroll-track-s, 8px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=s] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  width:var(--size-scroll-slider-s, 4px);
  border-radius:var(--radius-scroll-slider-s, 2px);
}

.osThemeSnack[data-size=s] > .os-scrollbar-horizontal{
  height:var(--size-scroll-track-s, 8px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=s] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  height:var(--size-scroll-slider-s, 4px);
  border-radius:var(--radius-scroll-slider-s, 2px);
}

.osThemeSnack[data-size=s].os-host-resize-disabled > .os-scrollbar-horizontal{
  right:var(--size-scroll-track-s, 8px);
}

.osThemeSnack[data-size=s].os-host-resize-disabled.os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-track-s, 8px);
}

.osThemeSnack[data-size=s].os-host-resize-disabled > .os-scrollbar-vertical{
  bottom:var(--size-scroll-track-s, 8px);
}

.osThemeSnack[data-size=s] > .os-scrollbar-horizontal{
  right:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=s].os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=s] > .os-scrollbar-vertical{
  bottom:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-vertical{
  width:var(--size-scroll-track-m, 16px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=m] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  width:var(--size-scroll-slider-m, 6px);
  border-radius:var(--radius-scroll-slider-m, 4px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-horizontal{
  height:var(--size-scroll-track-m, 16px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=m] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  height:var(--size-scroll-slider-m, 6px);
  border-radius:var(--radius-scroll-slider-m, 4px);
}

.osThemeSnack[data-size=m].os-host-resize-disabled > .os-scrollbar-horizontal{
  right:var(--size-scroll-track-m, 16px);
}

.osThemeSnack[data-size=m].os-host-resize-disabled.os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-track-m, 16px);
}

.osThemeSnack[data-size=m].os-host-resize-disabled > .os-scrollbar-vertical{
  bottom:var(--size-scroll-track-m, 16px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-horizontal{
  right:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=m].os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-vertical{
  bottom:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  opacity:var(--opacity-a032, 0.32);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle.active, .osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle:hover{
  opacity:var(--opacity-a064, 0.64);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}

.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  opacity:var(--opacity-a032, 0.32);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle.active, .osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle:hover{
  opacity:var(--opacity-a064, 0.64);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}

.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  left:50%;
  translate:-50%;
}
.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle::before{
  right:-12px;
  left:-12px;
}

.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  top:50%;
  translate:0 -50%;
}
.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle::before{
  top:-12px;
  bottom:-12px;
}

.osThemeSnack > .os-scrollbar-corner{
  --bg-icon-mask:url(${b});
  width:var(--size-scroll-button-resize, 16px);
  height:var(--size-scroll-button-resize, 16px);
  z-index:0;
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
  background-image:unset;
  -webkit-mask-image:var(--bg-icon-mask);
  mask-image:var(--bg-icon-mask);
}
.osThemeSnack > .os-scrollbar-corner:hover{
  background-color:var(--sys-neutral-text-support, #6d707f);
}

.os-dragging .osThemeSnack > .os-scrollbar-corner:hover{
  background-color:var(--sys-primary-accent-default, #389f74);
}

.osThemeSnack.os-host-resize-disabled > .os-scrollbar-corner{
  display:none;
}`,""]);const R=_},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"(I,M,s){s.d(M,{A:()=>o});var t=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=s.n(t),p=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=s.n(p),u=r()(a());u.push([I.id,`.scroll--dWi1U{
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
}`,""]),u.locals={scroll:"scroll--dWi1U"};const o=u}}]);})();
