"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[8836],{"./node_modules/.pnpm/@snack-uikit+avatar@0.8.14_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((E,y,o)=>{o.d(y,{e:()=>K});var r=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=o("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=o.n(m),k=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=o("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const x={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},T={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var _=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=o.n(_),f=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=o.n(f),t=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),n=o.n(t),a=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),e=o.n(a),s=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=o.n(s),_e=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),ae=o.n(_e),J=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),W={};W.styleTagTransform=ae(),W.setAttributes=e(),W.insert=n().bind(null,"head"),W.domAPI=c(),W.insertStyleElement=z();var I=i()(J.A,W);const C=J.A&&J.A.locals?J.A.locals:void 0;var N=function(u,O){var g={};for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&O.indexOf(l)<0&&(g[l]=u[l]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,l=Object.getOwnPropertySymbols(u);p<l.length;p++)O.indexOf(l[p])<0&&Object.prototype.propertyIsEnumerable.call(u,l[p])&&(g[l[p]]=u[l[p]]);return g};function w(u){var{size:O=T.M,appearance:g=x.Primary,className:l}=u,p=N(u,["size","appearance","className"]);return(0,r.jsx)("div",Object.assign({className:h()(C.container,l)},(0,d.z7)(p),{"data-size":O,children:(0,r.jsx)("div",{className:C.indicator,"data-appearance":g})}))}const L={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},M={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},S={Round:"round",Square:"square"};var q=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.14_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),U={};U.styleTagTransform=ae(),U.setAttributes=e(),U.insert=n().bind(null,"head"),U.domAPI=c(),U.insertStyleElement=z();var ke=i()(q.A,U);const A=q.A&&q.A.locals?q.A.locals:void 0,ve=" ",he=(u,O)=>{var g;const l=u.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!l||l.length<O)return l.toUpperCase();const p=l.split(ve);let B=l;if(p.length>1){const ne=p[0].charAt(0),V=(g=p[p.length-1])===null||g===void 0?void 0:g.charAt(0);B=`${ne}${V}`.toUpperCase()}return B.slice(0,O).toUpperCase()};var ge=function(u,O){var g={};for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&O.indexOf(l)<0&&(g[l]=u[l]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,l=Object.getOwnPropertySymbols(u);p<l.length;p++)O.indexOf(l[p])<0&&Object.prototype.propertyIsEnumerable.call(u,l[p])&&(g[l[p]]=u[l[p]]);return g};const le={[M.Xxs]:"xxs",[M.Xs]:"xs",[M.S]:"xs",[M.M]:"m",[M.L]:"m",[M.Xl]:"l",[M.Xxl]:"l"};function K(u){var{name:O,appearance:g=L.Red,size:l=M.S,shape:p=S.Round,indicator:B,showTwoSymbols:ne,src:V,className:ce}=u,ye=ge(u,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[ue,D]=(0,k.useState)(!1),pe=l!==M.Xxs&&ne?2:1;return(0,k.useEffect)(()=>{D(!1)},[V]),(0,r.jsxs)("div",Object.assign({className:h()(A.avatar,ce)},(0,d.z7)(ye),{"data-size":l,"data-appearance":g,"data-shape":p,children:[V&&!ue?(0,r.jsx)("img",{"data-test-id":"image",className:A.image,src:V,onError:()=>D(!0),alt:""}):(0,r.jsx)("div",{"data-test-id":"abbreviation",children:he(O,pe)}),B&&(0,r.jsx)("div",{className:A.indicatorWrapper,children:(0,r.jsx)(w,{"data-test-id":"indicator",appearance:B,size:le[l]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js":((E,y,o)=>{o.d(y,{A:()=>c});var r=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const d=m.forwardRef((t,n)=>{var{size:a=24}=t,e=h(t,["size"]);e.width=void 0,e.height=void 0;const s="-chevron-right-s";return typeof a=="number"&&(e.style||(e.style={}),e.style.width=a+"px",e.style.height=a+"px"),(0,r.jsx)("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var x=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const _=m.forwardRef((t,n)=>{var{size:a=24}=t,e=x(t,["size"]);e.width=void 0,e.height=void 0;const s="-chevron-right-xs";return typeof a=="number"&&(e.style||(e.style={}),e.style.width=a+"px",e.style.height=a+"px"),(0,r.jsx)("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var i=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const c=(0,m.forwardRef)((t,n)=>{var{size:a=24}=t,e=i(t,["size"]);return Number(a)>=20?(0,r.jsx)(d,Object.assign({ref:n,size:a},e)):(0,r.jsx)(_,Object.assign({ref:n,size:a},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/day/index.js":((E,y,o)=>{o.d(y,{A:()=>_});var r=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(i,f){var c={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&f.indexOf(t)<0&&(c[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(i);n<t.length;n++)f.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(i,t[n])&&(c[t[n]]=i[t[n]]);return c};const d=m.forwardRef((i,f)=>{var{size:c=24}=i,t=h(i,["size"]);t.width=void 0,t.height=void 0;const n="-day-s";return typeof c=="number"&&(t.style||(t.style={}),t.style.width=c+"px",t.style.height=c+"px"),(0,r.jsx)("svg",Object.assign({ref:f,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var x=function(i,f){var c={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&f.indexOf(t)<0&&(c[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(i);n<t.length;n++)f.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(i,t[n])&&(c[t[n]]=i[t[n]]);return c};const _=(0,m.forwardRef)((i,f)=>{var{size:c=24}=i,t=x(i,["size"]);return(0,r.jsx)(d,Object.assign({ref:f,size:c},t))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/laptopPhone/index.js":((E,y,o)=>{o.d(y,{A:()=>c});var r=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const d=m.forwardRef((t,n)=>{var{size:a=24}=t,e=h(t,["size"]);e.width=void 0,e.height=void 0;const s="-laptop-phone-s";return typeof a=="number"&&(e.style||(e.style={}),e.style.width=a+"px",e.style.height=a+"px"),(0,r.jsx)("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var x=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const _=m.forwardRef((t,n)=>{var{size:a=24}=t,e=x(t,["size"]);e.width=void 0,e.height=void 0;const s="-laptop-phone-xs";return typeof a=="number"&&(e.style||(e.style={}),e.style.width=a+"px",e.style.height=a+"px"),(0,r.jsx)("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var i=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const c=(0,m.forwardRef)((t,n)=>{var{size:a=24}=t,e=i(t,["size"]);return Number(a)>=20?(0,r.jsx)(d,Object.assign({ref:n,size:a},e)):(0,r.jsx)(_,Object.assign({ref:n,size:a},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/night/index.js":((E,y,o)=>{o.d(y,{A:()=>_});var r=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(i,f){var c={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&f.indexOf(t)<0&&(c[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(i);n<t.length;n++)f.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(i,t[n])&&(c[t[n]]=i[t[n]]);return c};const d=m.forwardRef((i,f)=>{var{size:c=24}=i,t=h(i,["size"]);t.width=void 0,t.height=void 0;const n="-night-s";return typeof c=="number"&&(t.style||(t.style={}),t.style.width=c+"px",t.style.height=c+"px"),(0,r.jsx)("svg",Object.assign({ref:f,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var x=function(i,f){var c={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&f.indexOf(t)<0&&(c[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(i);n<t.length;n++)f.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(i,t[n])&&(c[t[n]]=i[t[n]]);return c};const _=(0,m.forwardRef)((i,f)=>{var{size:c=24}=i,t=x(i,["size"]);return(0,r.jsx)(d,Object.assign({ref:f,size:c},t))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/placeholder/index.js":((E,y,o)=>{o.d(y,{A:()=>c});var r=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const d=m.forwardRef((t,n)=>{var{size:a=24}=t,e=h(t,["size"]);e.width=void 0,e.height=void 0;const s="-placeholder-s";return typeof a=="number"&&(e.style||(e.style={}),e.style.width=a+"px",e.style.height=a+"px"),(0,r.jsx)("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var x=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const _=m.forwardRef((t,n)=>{var{size:a=24}=t,e=x(t,["size"]);e.width=void 0,e.height=void 0;const s="-placeholder-xs";return typeof a=="number"&&(e.style||(e.style={}),e.style.width=a+"px",e.style.height=a+"px"),(0,r.jsx)("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var i=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const c=(0,m.forwardRef)((t,n)=>{var{size:a=24}=t,e=i(t,["size"]);return Number(a)>=20?(0,r.jsx)(d,Object.assign({ref:n,size:a},e)):(0,r.jsx)(_,Object.assign({ref:n,size:a},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/settings/index.js":((E,y,o)=>{o.d(y,{A:()=>c});var r=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const d=m.forwardRef((t,n)=>{var{size:a=24}=t,e=h(t,["size"]);e.width=void 0,e.height=void 0;const s="-settings-s";return typeof a=="number"&&(e.style||(e.style={}),e.style.width=a+"px",e.style.height=a+"px"),(0,r.jsx)("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var x=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const _=m.forwardRef((t,n)=>{var{size:a=24}=t,e=x(t,["size"]);e.width=void 0,e.height=void 0;const s="-settings-xs";return typeof a=="number"&&(e.style||(e.style={}),e.style.width=a+"px",e.style.height=a+"px"),(0,r.jsx)("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var i=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const c=(0,m.forwardRef)((t,n)=>{var{size:a=24}=t,e=i(t,["size"]);return Number(a)>=20?(0,r.jsx)(d,Object.assign({ref:n,size:a},e)):(0,r.jsx)(_,Object.assign({ref:n,size:a},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/themeContrast/index.js":((E,y,o)=>{o.d(y,{A:()=>c});var r=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const d=m.forwardRef((t,n)=>{var{size:a=24}=t,e=h(t,["size"]);e.width=void 0,e.height=void 0;const s="-theme-contrast-s";return typeof a=="number"&&(e.style||(e.style={}),e.style.width=a+"px",e.style.height=a+"px"),(0,r.jsx)("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var x=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const _=m.forwardRef((t,n)=>{var{size:a=24}=t,e=x(t,["size"]);e.width=void 0,e.height=void 0;const s="-theme-contrast-xs";return typeof a=="number"&&(e.style||(e.style={}),e.style.width=a+"px",e.style.height=a+"px"),(0,r.jsx)("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+s},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+s.substring(1)})}))});var i=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,e=Object.getOwnPropertySymbols(t);s<e.length;s++)n.indexOf(e[s])<0&&Object.prototype.propertyIsEnumerable.call(t,e[s])&&(a[e[s]]=t[e[s]]);return a};const c=(0,m.forwardRef)((t,n)=>{var{size:a=24}=t,e=i(t,["size"]);return Number(a)>=20?(0,r.jsx)(d,Object.assign({ref:n,size:a},e)):(0,r.jsx)(_,Object.assign({ref:n,size:a},e))})}),"./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js":((E,y,o)=>{o.d(y,{i:()=>W});var r=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=o("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=o.n(m),k=o("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=o("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),T=o("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),_=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),i=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),f=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),c=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),t=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),n=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),a=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),e=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),s=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),z=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),_e=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),ae=function(I,C){var N={};for(var w in I)Object.prototype.hasOwnProperty.call(I,w)&&C.indexOf(w)<0&&(N[w]=I[w]);if(I!=null&&typeof Object.getOwnPropertySymbols=="function")for(var L=0,w=Object.getOwnPropertySymbols(I);L<w.length;L++)C.indexOf(w[L])<0&&Object.prototype.propertyIsEnumerable.call(I,w[L])&&(N[w[L]]=I[w[L]]);return N};const J=["top","right","bottom","left"];function W(I){var{items:C,search:N,pinBottom:w=[],pinTop:L=[],footerActiveElementsRefs:M,children:S,trigger:q,placement:U,widthStrategy:ke,triggerElemRef:A,open:ve,onOpenChange:he,collapse:ge={},triggerClassName:le,selection:K,contentRender:u,size:O="s",marker:g=!0,closeDroplistOnItemClick:l=!1,className:p,listRef:B,untouchableScrollbars:ne=!1,virtualized:V=!1,closeOnPopstate:ce}=I,ye=ae(I,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const ue=(0,d.useMemo)(()=>!!N,[N]),[D=[],pe]=(0,T.I)(ge),Ee=(0,d.useCallback)(v=>pe(j=>j!=null&&j.includes(v)?j.filter(P=>P!==v):(j!=null?j:[]).concat([v])),[pe]),[Ce=!1,ee]=(0,T.I)({value:ve,defaultValue:!1,onChange:he}),{searchItem:H,footerItems:oe}=(0,i.nG)({footerActiveElementsRefs:M}),xe=(0,d.useMemo)(()=>{const v=(0,f.lg)({items:L,prefix:_.$.pinTop,parentId:_.$.default}),j=(0,f.lg)({items:C,prefix:_.$.default,parentId:_.$.default}),P=(0,f.lg)({items:w,prefix:_.$.pinBottom,parentId:_.$.default}),F=Object.assign(Object.assign(Object.assign({},v.flattenItems),P.flattenItems),j.flattenItems),te=Object.assign(Object.assign(Object.assign({},v.focusFlattenItems),P.focusFlattenItems),j.focusFlattenItems);return[...oe,H].forEach(b=>{F[b.id]=b,te[b.id]=Object.assign(Object.assign({},b),{originalId:b.id,items:[],key:b.id,allChildIds:[]})}),{items:j,pinTop:v,pinBottom:P,flattenItems:F,focusFlattenItems:te}},[C,L,w,H,oe]),{flattenItems:be,focusFlattenItems:je}=xe,re=ae(xe,["flattenItems","focusFlattenItems"]),{ids:X,expandedIds:ie}=(0,d.useMemo)(()=>{const{pinTop:v,items:j,pinBottom:P}=re;let F=[],te=[];return ue&&F.push(H.id),[v,j,P].forEach(({focusFlattenItems:b,focusCloseChildIds:R})=>{const G=(0,f.e)({focusFlattenItems:b,focusCloseChildIds:R,openCollapseItems:D,isSelectionMultiple:(K==null?void 0:K.mode)==="multiple"});F=F.concat(G.ids),te=te.concat(G.expandedIds)}),oe.forEach(b=>{F.push(b.id)}),{ids:F,expandedIds:te}},[oe,ue,re,D,H.id,K==null?void 0:K.mode]),me=(0,d.useRef)(null),Se=(0,d.useRef)(null),Oe=X[0],{handleListKeyDownFactory:Q,resetActiveItemId:Y,activeItemId:we,forceUpdateActiveItemId:Z}=(0,s.d)({mainRef:A!=null?A:me,focusFlattenItems:je,hasListInFocusChain:!0,firstItemId:Oe}),Pe=(0,d.useCallback)(v=>Q(X,ie)(v),[Q,X,ie]),ze=(0,d.useCallback)(v=>{Y(),ee(v)},[Y,ee]),de=(0,d.useCallback)((v,j)=>{v.key==="ArrowDown"&&(v.preventDefault(),ee(!0),setTimeout(()=>{var P;Y(),(P=Se.current)===null||P===void 0||P.focus()},0)),v.key==="ArrowUp"&&ee(!1),j==null||j(v)},[Y,ee]),Ie=(0,d.useMemo)(()=>(0,d.isValidElement)(S),[S]),Re=(0,d.useMemo)(()=>{if((0,d.isValidElement)(S)){const v=typeof S.props=="object"?S.props:{};return(0,d.cloneElement)(S,Object.assign(Object.assign({},v),{onKeyDown:j=>{var P;de(j,(P=S.props)===null||P===void 0?void 0:P.onKeyDown)}}))}return typeof S=="function"?S({onKeyDown:de}):S},[de,S]);return(0,r.jsx)(c.Tr,{flattenItems:be,focusFlattenItems:je,contentRender:u,size:O,marker:g,firstItemId:Oe,virtualized:V,children:(0,r.jsx)(t.WM,Object.assign({},K,{children:(0,r.jsx)(n.bN.Provider,{value:{openCollapseItems:D,toggleOpenCollapseItem:Ee},children:(0,r.jsx)(a.m.Provider,{value:{activeItemId:we,handleListKeyDownFactory:Q,forceUpdateActiveItemId:Z},children:(0,r.jsx)(e.K.Provider,{value:{closeDroplistOnItemClick:l,closeDroplist:()=>{var v;ee(!1),Y(),(v=(A!=null?A:me).current)===null||v===void 0||v.focus()}},children:(0,r.jsx)(x.m,{content:(0,r.jsx)("div",{className:h()(_e.A.wrapper,p),children:(0,r.jsx)(z.Q,Object.assign({},ye,{items:re.items.focusCloseChildIds,pinTop:re.pinTop.focusCloseChildIds,pinBottom:re.pinBottom.focusCloseChildIds,virtualized:V,onKeyDown:Pe,searchItem:H,tabIndex:0,ref:(0,k.A)(Se,B),search:N,onFocus:v=>{v.stopPropagation(),Z==null||Z(X[0])},limitedScrollHeight:!0,untouchableScrollbars:ne}))}),outsideClick:!0,triggerClassName:le,fallbackPlacements:J,trigger:q,placement:U,widthStrategy:ke,triggerRef:A?Ie&&A||void 0:me,open:Ce,onOpenChange:ze,closeOnPopstate:ce,children:Re})})})})}))})}}),"./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js":((E,y,o)=>{o.d(y,{B:()=>K});var r=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=o("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=o.n(m),k=o("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=o("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),T=o("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),_=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),i=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),f=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=o.n(f),t=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=o.n(t),a=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),e=o.n(a),s=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),z=o.n(s),_e=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),ae=o.n(_e),J=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=o.n(J),I=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css"),C={};C.styleTagTransform=W(),C.setAttributes=z(),C.insert=e().bind(null,"head"),C.domAPI=n(),C.insertStyleElement=ae();var N=c()(I.A,C);const w=I.A&&I.A.locals?I.A.locals:void 0,L=(0,d.forwardRef)(({listRef:u,tabIndex:O},g)=>{const l=(0,d.useCallback)(p=>{var B;p.relatedTarget!==u.current&&((B=u.current)===null||B===void 0||B.focus()),p.preventDefault(),p.stopPropagation()},[u]);return(0,r.jsx)("button",{type:"button","aria-hidden":!0,ref:g,onKeyDown:i.d,onFocus:l,className:w.hiddenBtn,tabIndex:O})});var M=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),S=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),q=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),U=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),ke=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),A=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),ve=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),he=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),ge=o("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),le=function(u,O){var g={};for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&O.indexOf(l)<0&&(g[l]=u[l]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,l=Object.getOwnPropertySymbols(u);p<l.length;p++)O.indexOf(l[p])<0&&Object.prototype.propertyIsEnumerable.call(u,l[p])&&(g[l[p]]=u[l[p]]);return g};const K=(0,d.forwardRef)((u,O)=>{var{items:g=[],search:l,pinBottom:p=[],pinTop:B=[],footerActiveElementsRefs:ne,onKeyDown:V,tabIndex:ce=0,className:ye,collapse:ue={},selection:D,contentRender:pe,size:Ee="s",marker:Ce=!0,keyboardNavigationRef:ee,hasListInFocusChain:H=!0}=u,oe=le(u,["items","search","pinBottom","pinTop","footerActiveElementsRefs","onKeyDown","tabIndex","className","collapse","selection","contentRender","size","marker","keyboardNavigationRef","hasListInFocusChain"]);const xe=(0,d.useMemo)(()=>!!l,[l]),[be=[],je]=(0,x.I)(ue),re=(0,d.useCallback)(b=>je(R=>R!=null&&R.includes(b)?R.filter(G=>G!==b):(R!=null?R:[]).concat([b])),[je]),{searchItem:X,footerItems:ie}=(0,M.nG)({footerActiveElementsRefs:ne}),me=(0,d.useMemo)(()=>{const b=(0,S.lg)({items:B,prefix:_.$.pinTop,parentId:_.$.default}),R=(0,S.lg)({items:g,prefix:_.$.default,parentId:_.$.default}),G=(0,S.lg)({items:p,prefix:_.$.pinBottom,parentId:_.$.default}),se=Object.assign(Object.assign(Object.assign({},b.flattenItems),G.flattenItems),R.flattenItems),fe=Object.assign(Object.assign(Object.assign({},b.focusFlattenItems),G.focusFlattenItems),R.focusFlattenItems);return[...ie,X].forEach($=>{se[$.id]=$,fe[$.id]=Object.assign(Object.assign({},$),{originalId:$.id,items:[],key:$.id,allChildIds:[]})}),{items:R,pinTop:b,pinBottom:G,flattenItems:se,focusFlattenItems:fe}},[g,B,p,X,ie]),{flattenItems:Se,focusFlattenItems:Oe}=me,Q=le(me,["flattenItems","focusFlattenItems"]),{ids:Y,expandedIds:we}=(0,d.useMemo)(()=>{const{pinTop:b,items:R,pinBottom:G}=Q;let se=[],fe=[];return xe&&se.push(X.id),[b,R,G].forEach(({focusFlattenItems:$,focusCloseChildIds:Be})=>{const Ae=(0,S.e)({focusFlattenItems:$,focusCloseChildIds:Be,openCollapseItems:be,isSelectionMultiple:(D==null?void 0:D.mode)==="multiple"});se=se.concat(Ae.ids),fe=fe.concat(Ae.expandedIds)}),ie.forEach($=>{se.push($.id)}),{ids:se,expandedIds:fe}},[ie,xe,Q,be,X.id,D==null?void 0:D.mode]),Z=(0,d.useRef)(null),Pe=(0,d.useRef)(null),ze=Y[0],{handleListKeyDownFactory:de,activeItemId:Ie,resetActiveItemId:Re,forceUpdateActiveItemId:v}=(0,ve.d)({mainRef:Z,btnRef:Pe,focusFlattenItems:Oe,keyboardNavigationRef:ee,hasListInFocusChain:H,firstItemId:ze}),j=(0,d.useCallback)(b=>de(Y,we)(b),[de,Y,we]),P=(0,T.B)()&&Z.current===document.activeElement&&Ie===void 0,F=b=>{V==null||V(b),j==null||j(b)},te=()=>{Re()};return(0,r.jsx)(q.Tr,{flattenItems:Se,focusFlattenItems:Oe,contentRender:pe,size:Ee,marker:Ce,firstItemId:ze,virtualized:oe.virtualized,children:(0,r.jsx)(U.WM,Object.assign({},D,{children:(0,r.jsx)(ke.bN.Provider,{value:{openCollapseItems:be,toggleOpenCollapseItem:re},children:(0,r.jsx)(A.m.Provider,{value:{activeItemId:Ie,handleListKeyDownFactory:de,forceUpdateActiveItemId:v},children:(0,r.jsxs)("div",{className:h()(ge.A.wrapper,ye),"data-active":P||void 0,children:[(0,r.jsx)(he.Q,Object.assign({},oe,{items:Q.items.focusCloseChildIds,pinTop:Q.pinTop.focusCloseChildIds,pinBottom:Q.pinBottom.focusCloseChildIds,searchItem:X,ref:(0,k.A)(O,Z),onFocus:te,onKeyDown:F,tabIndex:H?ce:void 0,search:l,nested:!1})),H&&(0,r.jsx)(L,{ref:Pe,listRef:Z,tabIndex:ce})]})})})}))})})}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.14_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((E,y,o)=>{o.d(y,{A:()=>x});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=o.n(r),h=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=o.n(h),d=k()(m());d.push([E.id,`.avatar--VkRtj{
  position:relative;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.avatar--VkRtj[data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.avatar--VkRtj[data-appearance=orange]{
  color:var(--sys-orange-text-main, #884c23);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.avatar--VkRtj[data-appearance=yellow]{
  color:var(--sys-yellow-text-main, #815f19);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.avatar--VkRtj[data-appearance=green]{
  color:var(--sys-green-text-main, #3d6035);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.avatar--VkRtj[data-appearance=blue]{
  color:var(--sys-blue-text-main, #2b537e);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.avatar--VkRtj[data-appearance=violet]{
  color:var(--sys-violet-text-main, #59446a);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.avatar--VkRtj[data-appearance=pink]{
  color:var(--sys-pink-text-main, #754158);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.avatar--VkRtj[data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.avatar--VkRtj[data-size=xxs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--VkRtj[data-size=xxs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxs, 8px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--VkRtj[data-size=xxs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxs, 4px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--VkRtj[data-size=xs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--VkRtj[data-size=xs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xs, 16px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--VkRtj[data-size=xs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xs, 4px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--VkRtj[data-size=s]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.avatar--VkRtj[data-size=s][data-shape=round]{
  border-radius:var(--radius-avatar-round-s, 24px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--VkRtj[data-size=s][data-shape=square]{
  border-radius:var(--radius-avatar-square-s, 4px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--VkRtj[data-size=m]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.avatar--VkRtj[data-size=m][data-shape=round]{
  border-radius:var(--radius-avatar-round-m, 24px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--VkRtj[data-size=m][data-shape=square]{
  border-radius:var(--radius-avatar-square-m, 8px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--VkRtj[data-size=l]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.avatar--VkRtj[data-size=l][data-shape=round]{
  border-radius:var(--radius-avatar-round-l, 32px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--VkRtj[data-size=l][data-shape=square]{
  border-radius:var(--radius-avatar-square-l, 12px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--VkRtj[data-size=xl]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.avatar--VkRtj[data-size=xl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xl, 48px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--VkRtj[data-size=xl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xl, 16px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--VkRtj[data-size=xxl]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.avatar--VkRtj[data-size=xxl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxl, 64px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}
.avatar--VkRtj[data-size=xxl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxl, 20px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}

.image--oxRHB{
  width:100%;
  height:100%;
  -o-object-fit:cover;
     object-fit:cover;
  -o-object-position:center;
     object-position:center;
  border-radius:inherit;
}

.indicatorWrapper--k608B{
  position:absolute;
  right:0;
  bottom:0;
  display:inline-flex;
}`,""]),d.locals={avatar:"avatar--VkRtj",image:"image--oxRHB",indicatorWrapper:"indicatorWrapper--k608B"};const x=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css":((E,y,o)=>{o.d(y,{A:()=>x});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=o.n(r),h=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=o.n(h),d=k()(m());d.push([E.id,`.hiddenBtn--QAnsm{
  position:absolute;
  width:0;
  height:0;
  margin:0;
  padding:0;
  border:none;
  outline:none;
}`,""]),d.locals={hiddenBtn:"hiddenBtn--QAnsm"};const x=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((E,y,o)=>{o.d(y,{A:()=>x});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=o.n(r),h=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=o.n(h),d=k()(m());d.push([E.id,`.container--iBruo{
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.container--iBruo[data-size=xxs]{
  width:var(--size-status-indicator-container-xxs, 4px);
  height:var(--size-status-indicator-container-xxs, 4px);
}
.container--iBruo[data-size=xxs] .indicator--C8gfz{
  border-radius:var(--radius-status-indicator-xxs, 2px);
  border-width:var(--border-width-general-xxs, 0.5px);
  width:var(--size-status-indicator-xxs, 4px);
  height:var(--size-status-indicator-xxs, 4px);
}
.container--iBruo[data-size=xs]{
  width:var(--size-status-indicator-container-xs, 8px);
  height:var(--size-status-indicator-container-xs, 8px);
}
.container--iBruo[data-size=xs] .indicator--C8gfz{
  border-radius:var(--radius-status-indicator-xs, 4px);
  border-width:var(--border-width-general-s, 1.5px);
  width:var(--size-status-indicator-xs, 8px);
  height:var(--size-status-indicator-xs, 8px);
}
.container--iBruo[data-size=s]{
  width:var(--size-status-indicator-container-s, 16px);
  height:var(--size-status-indicator-container-s, 16px);
}
.container--iBruo[data-size=s] .indicator--C8gfz{
  border-radius:var(--radius-status-indicator-s, 8px);
  border-width:var(--border-width-general-m, 2px);
  width:var(--size-status-indicator-s, 12px);
  height:var(--size-status-indicator-s, 12px);
}
.container--iBruo[data-size=m]{
  width:var(--size-status-indicator-container-m, 16px);
  height:var(--size-status-indicator-container-m, 16px);
}
.container--iBruo[data-size=m] .indicator--C8gfz{
  border-radius:var(--radius-status-indicator-m, 8px);
  border-width:var(--border-width-general-l, 3px);
  width:var(--size-status-indicator-m, 16px);
  height:var(--size-status-indicator-m, 16px);
}
.container--iBruo[data-size=l]{
  width:var(--size-status-indicator-container-l, 24px);
  height:var(--size-status-indicator-container-l, 24px);
}
.container--iBruo[data-size=l] .indicator--C8gfz{
  border-radius:var(--radius-status-indicator-l, 16px);
  border-width:var(--border-width-general-xl, 4px);
  width:var(--size-status-indicator-l, 24px);
  height:var(--size-status-indicator-l, 24px);
}

.indicator--C8gfz{
  box-sizing:border-box;
  border:0 solid var(--sys-neutral-background1-level, #fdfdfd);
}
.indicator--C8gfz[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.indicator--C8gfz[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.indicator--C8gfz[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.indicator--C8gfz[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.indicator--C8gfz[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.indicator--C8gfz[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.indicator--C8gfz[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.indicator--C8gfz[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.indicator--C8gfz[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),d.locals={container:"container--iBruo",indicator:"indicator--C8gfz"};const x=d})}]);})();
