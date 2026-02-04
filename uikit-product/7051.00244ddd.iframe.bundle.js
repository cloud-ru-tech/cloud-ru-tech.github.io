"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7051],{"./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((O,_,a)=>{a.d(_,{e:()=>F});var n=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=a("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=a.n(p),y=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=a("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const u={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},M={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var C=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=a.n(C),R=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=a.n(R),t=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),o=a.n(t),r=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),e=a.n(r),s=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),k=a.n(s),X=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=a.n(X),S=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.8.1_react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),T={};T.styleTagTransform=K(),T.setAttributes=e(),T.insert=o().bind(null,"head"),T.domAPI=A(),T.insertStyleElement=k();var L=D()(S.A,T);const W=S.A&&S.A.locals?S.A.locals:void 0;var N=function(l,w){var g={};for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&w.indexOf(i)<0&&(g[i]=l[i]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(l);c<i.length;c++)w.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(l,i[c])&&(g[i[c]]=l[i[c]]);return g};function v(l){var{size:w=M.M,appearance:g=u.Primary,className:i}=l,c=N(l,["size","appearance","className"]);return(0,n.jsx)("div",Object.assign({className:h()(W.container,i)},(0,d.z7)(c),{"data-size":w,children:(0,n.jsx)("div",{className:W.indicator,"data-appearance":g})}))}const B={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},f={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},x={Round:"round",Square:"square"};var b=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),P={};P.styleTagTransform=K(),P.setAttributes=e(),P.insert=o().bind(null,"head"),P.domAPI=A(),P.insertStyleElement=k();var m=D()(b.A,P);const j=b.A&&b.A.locals?b.A.locals:void 0,E=" ",z=(l,w)=>{var g;const i=l.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!i||i.length<w)return i.toUpperCase();const c=i.split(E);let Y=i;if(c.length>1){const V=c[0].charAt(0),U=(g=c[c.length-1])===null||g===void 0?void 0:g.charAt(0);Y=`${V}${U}`.toUpperCase()}return Y.slice(0,w).toUpperCase()};var I=function(l,w){var g={};for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&w.indexOf(i)<0&&(g[i]=l[i]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(l);c<i.length;c++)w.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(l,i[c])&&(g[i[c]]=l[i[c]]);return g};const Z={[f.Xxs]:"xxs",[f.Xs]:"xs",[f.S]:"xs",[f.M]:"m",[f.L]:"m",[f.Xl]:"l",[f.Xxl]:"l"};function F(l){var{name:w,appearance:g=B.Red,size:i=f.S,shape:c=x.Round,indicator:Y,showTwoSymbols:V,src:U,className:H}=l,$=I(l,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[J,G]=(0,y.useState)(!1),Q=i!==f.Xxs&&V?2:1;return(0,y.useEffect)(()=>{G(!1)},[U]),(0,n.jsxs)("div",Object.assign({className:h()(j.avatar,H)},(0,d.z7)($),{"data-size":i,"data-appearance":g,"data-shape":c,children:[U&&!J?(0,n.jsx)("img",{"data-test-id":"image",className:j.image,src:U,onError:()=>G(!0),alt:""}):(0,n.jsx)("div",{"data-test-id":"abbreviation",children:z(w,Q)}),Y&&(0,n.jsx)("div",{className:j.indicatorWrapper,children:(0,n.jsx)(v,{"data-test-id":"indicator",appearance:Y,size:Z[i]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js":((O,_,a)=>{a.d(_,{p:()=>P});var n=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=a("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=a.n(p),y=a("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const d={Primary:"primary",Neutral:"neutral",Red:"red"},u={Count:"count",CountPlus:"count-plus",CountK:"count-k"},M={S:"s",M:"m"},C={Accent:"accent",Decor:"decor"},D=10,R=1e3,A="K";var t=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=a.n(t),r=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),e=a.n(r),s=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),k=a.n(s),X=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),K=a.n(X),S=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=a.n(S),L=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=a.n(L),N=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),v={};v.styleTagTransform=W(),v.setAttributes=K(),v.insert=k().bind(null,"head"),v.domAPI=e(),v.insertStyleElement=T();var B=o()(N.A,v);const f=N.A&&N.A.locals?N.A.locals:void 0;function x({value:m,variant:j,plusLimit:E}){if(j===u.Count)return m;if(j===u.CountPlus)return m<E?m:(0,n.jsxs)(n.Fragment,{children:[E-1,(0,n.jsx)("span",{className:f.plus,children:"+"})]});if(j===u.CountK)return m<R?m:(0,n.jsxs)(n.Fragment,{children:[Math.round(m/R),(0,n.jsx)("span",{className:f.key,children:A})]})}var b=function(m,j){var E={};for(var z in m)Object.prototype.hasOwnProperty.call(m,z)&&j.indexOf(z)<0&&(E[z]=m[z]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var I=0,z=Object.getOwnPropertySymbols(m);I<z.length;I++)j.indexOf(z[I])<0&&Object.prototype.propertyIsEnumerable.call(m,z[I])&&(E[z[I]]=m[z[I]]);return E};function P(m){var{value:j,appearance:E=d.Primary,variant:z=u.Count,size:I=M.S,plusLimit:Z=D,color:F=C.Accent,className:l}=m,w=b(m,["value","appearance","variant","size","plusLimit","color","className"]);const g=x({value:j,variant:z,plusLimit:Z});return(0,n.jsx)("div",Object.assign({className:h()(f.counter,l)},(0,y.z7)(w),{"data-size":I,"data-variant":z,"data-appearance":E,"data-color":F,children:g}))}}),"./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.3_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js":((O,_,a)=>{a.d(_,{I:()=>N});var n=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=a("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=a.n(p),y=a("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const d={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},u={S:"s",M:"m",L:"l"};var M=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=a.n(M),D=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=a.n(D),A=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),t=a.n(A),o=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=a.n(o),e=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),s=a.n(e),k=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),X=a.n(k),K=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.3_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/styles.module.css"),S={};S.styleTagTransform=X(),S.setAttributes=r(),S.insert=t().bind(null,"head"),S.domAPI=R(),S.insertStyleElement=s();var T=C()(K.A,S);const L=K.A&&K.A.locals?K.A.locals:void 0;var W=function(v,B){var f={};for(var x in v)Object.prototype.hasOwnProperty.call(v,x)&&B.indexOf(x)<0&&(f[x]=v[x]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,x=Object.getOwnPropertySymbols(v);b<x.length;b++)B.indexOf(x[b])<0&&Object.prototype.propertyIsEnumerable.call(v,x[b])&&(f[x[b]]=v[x[b]]);return f};function N(v){var{className:B,decor:f=!0,size:x=u.M,icon:b,appearance:P=d.Primary,shape:m="round"}=v,j=W(v,["className","decor","size","icon","appearance","shape"]);return(0,n.jsx)("div",Object.assign({className:h()(L.decor,B)},(0,y.z7)(j),{"data-size":x,"data-decor":f||void 0,"data-appearance":P,"data-shape":m,children:(0,n.jsx)(b,{"data-size":x,"data-appearance":P,className:L.icon})}))}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js":((O,_,a)=>{a.d(_,{A:()=>A});var n=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(t,o){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)o.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(r[e[s]]=t[e[s]]);return r};const d=p.forwardRef((t,o)=>{var{size:r=24}=t,e=h(t,["size"]);e.width=void 0,e.height=void 0;const s="-chevron-right-s";return typeof r=="number"&&(e.style||(e.style={}),e.style.width=r+"px",e.style.height=r+"px"),(0,n.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var u=function(t,o){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)o.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(r[e[s]]=t[e[s]]);return r};const C=p.forwardRef((t,o)=>{var{size:r=24}=t,e=u(t,["size"]);e.width=void 0,e.height=void 0;const s="-chevron-right-xs";return typeof r=="number"&&(e.style||(e.style={}),e.style.width=r+"px",e.style.height=r+"px"),(0,n.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var D=function(t,o){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)o.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(r[e[s]]=t[e[s]]);return r};const A=(0,p.forwardRef)((t,o)=>{var{size:r=24}=t,e=D(t,["size"]);return Number(r)>=20?(0,n.jsx)(d,Object.assign({ref:o,size:r},e)):(0,n.jsx)(C,Object.assign({ref:o,size:r},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/placeholder/index.js":((O,_,a)=>{a.d(_,{A:()=>A});var n=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(t,o){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)o.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(r[e[s]]=t[e[s]]);return r};const d=p.forwardRef((t,o)=>{var{size:r=24}=t,e=h(t,["size"]);e.width=void 0,e.height=void 0;const s="-placeholder-s";return typeof r=="number"&&(e.style||(e.style={}),e.style.width=r+"px",e.style.height=r+"px"),(0,n.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var u=function(t,o){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)o.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(r[e[s]]=t[e[s]]);return r};const C=p.forwardRef((t,o)=>{var{size:r=24}=t,e=u(t,["size"]);e.width=void 0,e.height=void 0;const s="-placeholder-xs";return typeof r=="number"&&(e.style||(e.style={}),e.style.width=r+"px",e.style.height=r+"px"),(0,n.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var D=function(t,o){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)o.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(r[e[s]]=t[e[s]]);return r};const A=(0,p.forwardRef)((t,o)=>{var{size:r=24}=t,e=D(t,["size"]);return Number(r)>=20?(0,n.jsx)(d,Object.assign({ref:o,size:r},e)):(0,n.jsx)(C,Object.assign({ref:o,size:r},e))})}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((O,_,a)=>{a.d(_,{A:()=>u});var n=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=a.n(n),h=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),y=a.n(h),d=y()(p());d.push([O.id,`.avatar--YNdDD{
  position:relative;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.avatar--YNdDD[data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.avatar--YNdDD[data-appearance=orange]{
  color:var(--sys-orange-text-main, #884c23);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.avatar--YNdDD[data-appearance=yellow]{
  color:var(--sys-yellow-text-main, #815f19);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.avatar--YNdDD[data-appearance=green]{
  color:var(--sys-green-text-main, #3d6035);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.avatar--YNdDD[data-appearance=blue]{
  color:var(--sys-blue-text-main, #2b537e);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.avatar--YNdDD[data-appearance=violet]{
  color:var(--sys-violet-text-main, #59446a);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.avatar--YNdDD[data-appearance=pink]{
  color:var(--sys-pink-text-main, #754158);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.avatar--YNdDD[data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.avatar--YNdDD[data-size=xxs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--YNdDD[data-size=xxs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxs, 8px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--YNdDD[data-size=xxs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxs, 4px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--YNdDD[data-size=xs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--YNdDD[data-size=xs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xs, 16px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--YNdDD[data-size=xs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xs, 4px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--YNdDD[data-size=s]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.avatar--YNdDD[data-size=s][data-shape=round]{
  border-radius:var(--radius-avatar-round-s, 24px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--YNdDD[data-size=s][data-shape=square]{
  border-radius:var(--radius-avatar-square-s, 4px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--YNdDD[data-size=m]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.avatar--YNdDD[data-size=m][data-shape=round]{
  border-radius:var(--radius-avatar-round-m, 24px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--YNdDD[data-size=m][data-shape=square]{
  border-radius:var(--radius-avatar-square-m, 8px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--YNdDD[data-size=l]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.avatar--YNdDD[data-size=l][data-shape=round]{
  border-radius:var(--radius-avatar-round-l, 32px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--YNdDD[data-size=l][data-shape=square]{
  border-radius:var(--radius-avatar-square-l, 16px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--YNdDD[data-size=xl]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.avatar--YNdDD[data-size=xl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xl, 48px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--YNdDD[data-size=xl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xl, 24px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--YNdDD[data-size=xxl]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.avatar--YNdDD[data-size=xxl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxl, 64px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}
.avatar--YNdDD[data-size=xxl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxl, 24px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}

.image--mirqR{
  width:100%;
  height:100%;
  -o-object-fit:cover;
     object-fit:cover;
  -o-object-position:center;
     object-position:center;
  border-radius:inherit;
}

.indicatorWrapper--Hh27C{
  position:absolute;
  right:0;
  bottom:0;
  display:inline-flex;
}`,""]),d.locals={avatar:"avatar--YNdDD",image:"image--mirqR",indicatorWrapper:"indicatorWrapper--Hh27C"};const u=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css":((O,_,a)=>{a.d(_,{A:()=>u});var n=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=a.n(n),h=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),y=a.n(h),d=y()(p());d.push([O.id,`.counter--X66vA{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  border:0 solid transparent;
}
.counter--X66vA[data-color=accent][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=accent][data-appearance=neutral]{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-accent-default, #787b8a);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=accent][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
  background-color:var(--sys-red-accent-default, #cb3f3e);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=decor][data-appearance=primary]{
  color:var(--sys-primary-text-main, #1b5840);
  background-color:var(--sys-primary-decor-default, #caeadb);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=decor][data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=decor][data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-size=s]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
  border-radius:var(--radius-counter-s, 8px);
  height:var(--size-counter-s-height, 16px);
  min-width:var(--size-counter-s-minimal-width, 16px);
  padding-right:var(--space-counter-s, 2.5px);
  padding-left:var(--space-counter-s, 2.5px);
  border-width:var(--border-width-counter-single, 1.5px);
}
.counter--X66vA[data-size=s] .plus--hs8PR{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--X66vA[data-size=s] .key--zBbeI{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.counter--X66vA[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
  border-radius:var(--radius-counter-m, 16px);
  height:var(--size-counter-m-height, 24px);
  min-width:var(--size-counter-m-minimal-width, 24px);
  padding-right:var(--space-counter-m, 4.5px);
  padding-left:var(--space-counter-m, 4.5px);
  border-width:var(--border-width-counter-single, 1.5px);
}
.counter--X66vA[data-size=m] .plus--hs8PR{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--X66vA[data-size=m] .key--zBbeI{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}`,""]),d.locals={counter:"counter--X66vA",plus:"plus--hs8PR",key:"key--zBbeI"};const u=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.3_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/styles.module.css":((O,_,a)=>{a.d(_,{A:()=>u});var n=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=a.n(n),h=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),y=a.n(h),d=y()(p());d.push([O.id,`.decor--pyZKn{
  overflow:hidden;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.decor--pyZKn[data-decor][data-appearance=primary]{
  color:var(--sys-primary-accent-default, #794ed3);
  background-color:var(--sys-primary-decor-default, #ebdefd);
}
.decor--pyZKn[data-decor][data-appearance=neutral]{
  color:var(--sys-neutral-accent-default, #787b8a);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.decor--pyZKn[data-decor][data-appearance=red]{
  color:var(--sys-red-accent-default, #cb3f3e);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.decor--pyZKn[data-decor][data-appearance=orange]{
  color:var(--sys-orange-accent-default, #fb8e42);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.decor--pyZKn[data-decor][data-appearance=yellow]{
  color:var(--sys-yellow-accent-default, #e2b134);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.decor--pyZKn[data-decor][data-appearance=green]{
  color:var(--sys-green-accent-default, #57b762);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.decor--pyZKn[data-decor][data-appearance=blue]{
  color:var(--sys-blue-accent-default, #5388d1);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.decor--pyZKn[data-decor][data-appearance=violet]{
  color:var(--sys-violet-accent-default, #aa6cc1);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.decor--pyZKn[data-decor][data-appearance=pink]{
  color:var(--sys-pink-accent-default, #d1668e);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.decor--pyZKn[data-size=s][data-shape=round]{
  width:var(--size-icon-predefined-container-s, 32px);
  height:var(--size-icon-predefined-container-s, 32px);
  border-radius:var(--radius-icon-predefined-decor-round-s, 16px);
}
.decor--pyZKn[data-size=s][data-shape=square]{
  width:var(--size-icon-predefined-container-s, 32px);
  height:var(--size-icon-predefined-container-s, 32px);
  border-radius:var(--radius-icon-predefined-decor-square-s, 8px);
}
.decor--pyZKn[data-size=m][data-shape=round]{
  width:var(--size-icon-predefined-container-m, 40px);
  height:var(--size-icon-predefined-container-m, 40px);
  border-radius:var(--radius-icon-predefined-decor-round-m, 24px);
}
.decor--pyZKn[data-size=m][data-shape=square]{
  width:var(--size-icon-predefined-container-m, 40px);
  height:var(--size-icon-predefined-container-m, 40px);
  border-radius:var(--radius-icon-predefined-decor-square-m, 12px);
}
.decor--pyZKn[data-size=l][data-shape=round]{
  width:var(--size-icon-predefined-container-l, 80px);
  height:var(--size-icon-predefined-container-l, 80px);
  border-radius:var(--radius-icon-predefined-decor-round-l, 40px);
}
.decor--pyZKn[data-size=l][data-shape=square]{
  width:var(--size-icon-predefined-container-l, 80px);
  height:var(--size-icon-predefined-container-l, 80px);
  border-radius:var(--radius-icon-predefined-decor-square-l, 20px);
}

.icon--Kt00e,
.icon--Kt00e svg{
  fill:currentColor;
}
.icon--Kt00e[data-appearance=primary]{
  color:var(--sys-primary-accent-default, #794ed3);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=neutral]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=red]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=orange]{
  color:var(--sys-orange-accent-default, #fb8e42);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=yellow]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=green]{
  color:var(--sys-green-accent-default, #57b762);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=blue]{
  color:var(--sys-blue-accent-default, #5388d1);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=violet]{
  color:var(--sys-violet-accent-default, #aa6cc1);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=pink]{
  color:var(--sys-pink-accent-default, #d1668e);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=yellow]{
  color:var(--sys-yellow-text-light, #d3a736);
}`,""]),d.locals={decor:"decor--pyZKn",icon:"icon--Kt00e"};const u=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.8.1_react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((O,_,a)=>{a.d(_,{A:()=>u});var n=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=a.n(n),h=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),y=a.n(h),d=y()(p());d.push([O.id,`.container--r6DW8{
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.container--r6DW8[data-size=xxs]{
  width:var(--size-status-indicator-container-xxs, 4px);
  height:var(--size-status-indicator-container-xxs, 4px);
}
.container--r6DW8[data-size=xxs] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-xxs, 2px);
  border-width:var(--border-width-general-xxs, 0.5px);
  width:var(--size-status-indicator-xxs, 4px);
  height:var(--size-status-indicator-xxs, 4px);
}
.container--r6DW8[data-size=xs]{
  width:var(--size-status-indicator-container-xs, 8px);
  height:var(--size-status-indicator-container-xs, 8px);
}
.container--r6DW8[data-size=xs] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-xs, 4px);
  border-width:var(--border-width-general-s, 1.5px);
  width:var(--size-status-indicator-xs, 8px);
  height:var(--size-status-indicator-xs, 8px);
}
.container--r6DW8[data-size=s]{
  width:var(--size-status-indicator-container-s, 16px);
  height:var(--size-status-indicator-container-s, 16px);
}
.container--r6DW8[data-size=s] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-s, 8px);
  border-width:var(--border-width-general-m, 2px);
  width:var(--size-status-indicator-s, 12px);
  height:var(--size-status-indicator-s, 12px);
}
.container--r6DW8[data-size=m]{
  width:var(--size-status-indicator-container-m, 16px);
  height:var(--size-status-indicator-container-m, 16px);
}
.container--r6DW8[data-size=m] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-m, 8px);
  border-width:var(--border-width-general-l, 3px);
  width:var(--size-status-indicator-m, 16px);
  height:var(--size-status-indicator-m, 16px);
}
.container--r6DW8[data-size=l]{
  width:var(--size-status-indicator-container-l, 24px);
  height:var(--size-status-indicator-container-l, 24px);
}
.container--r6DW8[data-size=l] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-l, 16px);
  border-width:var(--border-width-general-xl, 4px);
  width:var(--size-status-indicator-l, 24px);
  height:var(--size-status-indicator-l, 24px);
}

.indicator--j3nCt{
  box-sizing:border-box;
  border:0 solid var(--sys-neutral-background1-level, #fdfdfd);
}
.indicator--j3nCt[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.indicator--j3nCt[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.indicator--j3nCt[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.indicator--j3nCt[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.indicator--j3nCt[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.indicator--j3nCt[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.indicator--j3nCt[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.indicator--j3nCt[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.indicator--j3nCt[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),d.locals={container:"container--r6DW8",indicator:"indicator--j3nCt"};const u=d})}]);})();
