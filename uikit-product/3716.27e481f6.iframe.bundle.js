"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3716],{"./node_modules/.pnpm/@snack-uikit+avatar@0.8.14_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((A,h,e)=>{e.d(h,{e:()=>N});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const d={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},C={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(b),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),g=e.n(O),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),a=e.n(t),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),s=e.n(r),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=e.n(n),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),T=e.n(I),L=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),D={};D.styleTagTransform=T(),D.setAttributes=s(),D.insert=a().bind(null,"head"),D.domAPI=g(),D.insertStyleElement=M();var R=i()(L.A,D);const z=L.A&&L.A.locals?L.A.locals:void 0;var x=function(B,V){var X={};for(var j in B)Object.prototype.hasOwnProperty.call(B,j)&&V.indexOf(j)<0&&(X[j]=B[j]);if(B!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,j=Object.getOwnPropertySymbols(B);P<j.length;P++)V.indexOf(j[P])<0&&Object.prototype.propertyIsEnumerable.call(B,j[P])&&(X[j[P]]=B[j[P]]);return X};function f(B){var{size:V=C.M,appearance:X=d.Primary,className:j}=B,P=x(B,["size","appearance","className"]);return(0,o.jsx)("div",Object.assign({className:p()(z.container,j)},(0,l.z7)(P),{"data-size":V,children:(0,o.jsx)("div",{className:z.indicator,"data-appearance":X})}))}const v={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},_={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},k={Round:"round",Square:"square"};var E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.14_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),S={};S.styleTagTransform=T(),S.setAttributes=s(),S.insert=a().bind(null,"head"),S.domAPI=g(),S.insertStyleElement=M();var G=i()(E.A,S);const u=E.A&&E.A.locals?E.A.locals:void 0,y=" ",w=(B,V)=>{var X;const j=B.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!j||j.length<V)return j.toUpperCase();const P=j.split(y);let H=j;if(P.length>1){const K=P[0].charAt(0),Q=(X=P[P.length-1])===null||X===void 0?void 0:X.charAt(0);H=`${K}${Q}`.toUpperCase()}return H.slice(0,V).toUpperCase()};var F=function(B,V){var X={};for(var j in B)Object.prototype.hasOwnProperty.call(B,j)&&V.indexOf(j)<0&&(X[j]=B[j]);if(B!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,j=Object.getOwnPropertySymbols(B);P<j.length;P++)V.indexOf(j[P])<0&&Object.prototype.propertyIsEnumerable.call(B,j[P])&&(X[j[P]]=B[j[P]]);return X};const U={[_.Xxs]:"xxs",[_.Xs]:"xs",[_.S]:"xs",[_.M]:"m",[_.L]:"m",[_.Xl]:"l",[_.Xxl]:"l"};function N(B){var{name:V,appearance:X=v.Red,size:j=_.S,shape:P=k.Round,indicator:H,showTwoSymbols:K,src:Q,className:$}=B,Z=F(B,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[te,q]=(0,m.useState)(!1),oe=j!==_.Xxs&&K?2:1;return(0,m.useEffect)(()=>{q(!1)},[Q]),(0,o.jsxs)("div",Object.assign({className:p()(u.avatar,$)},(0,l.z7)(Z),{"data-size":j,"data-appearance":X,"data-shape":P,children:[Q&&!te?(0,o.jsx)("img",{"data-test-id":"image",className:u.image,src:Q,onError:()=>q(!0),alt:""}):(0,o.jsx)("div",{"data-test-id":"abbreviation",children:w(V,oe)}),H&&(0,o.jsx)("div",{className:u.indicatorWrapper,children:(0,o.jsx)(f,{"data-test-id":"indicator",appearance:H,size:U[j]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js":((A,h,e)=>{e.d(h,{c:()=>x});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),m=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const l={Horizontal:"horizontal",Vertical:"vertical"},d={Light:"light",Regular:"regular"};var C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(C),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=e.n(i),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),t=e.n(g),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=e.n(a),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),n=e.n(s),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=e.n(M),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),L={};L.styleTagTransform=I(),L.setAttributes=r(),L.insert=t().bind(null,"head"),L.domAPI=O(),L.insertStyleElement=n();var D=b()(T.A,L);const R=T.A&&T.A.locals?T.A.locals:void 0;var z=function(f,v){var _={};for(var k in f)Object.prototype.hasOwnProperty.call(f,k)&&v.indexOf(k)<0&&(_[k]=f[k]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,k=Object.getOwnPropertySymbols(f);E<k.length;E++)v.indexOf(k[E])<0&&Object.prototype.propertyIsEnumerable.call(f,k[E])&&(_[k[E]]=f[k[E]]);return _};function x(f){var{className:v,orientation:_=l.Horizontal,weight:k=d.Regular}=f,E=z(f,["className","orientation","weight"]);const S=Object.assign(Object.assign({},(0,m.z7)(E)),{"data-weight":k});return _===l.Horizontal?(0,o.jsx)("hr",Object.assign({className:p()(R.horizontal,v)},S)):(0,o.jsx)("div",Object.assign({className:p()(R.vertical,v)},S))}}),"./node_modules/.pnpm/@snack-uikit+dropdown@0.5.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js":((A,h,e)=>{e.d(h,{m:()=>R});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),m=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(l),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),b=e.n(C),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),O=e.n(i),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),t=e.n(g),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),r=e.n(a),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),n=e.n(s),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"),I={};I.styleTagTransform=n(),I.setAttributes=t(),I.insert=O().bind(null,"head"),I.domAPI=b(),I.insertStyleElement=r();var T=d()(M.A,I);const L=M.A&&M.A.locals?M.A.locals:void 0;var D=function(z,x){var f={};for(var v in z)Object.prototype.hasOwnProperty.call(z,v)&&x.indexOf(v)<0&&(f[v]=z[v]);if(z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,v=Object.getOwnPropertySymbols(z);_<v.length;_++)x.indexOf(v[_])<0&&Object.prototype.propertyIsEnumerable.call(z,v[_])&&(f[v[_]]=z[v[_]]);return f};function R(z){var{content:x,trigger:f="click",placement:v="bottom-start",children:_,triggerRef:k,widthStrategy:E="gte",triggerClassName:S}=z,G=D(z,["content","trigger","placement","children","triggerRef","widthStrategy","triggerClassName"]);return!_&&!k?null:(0,o.jsx)(m.Z,Object.assign({placement:v,popoverContent:(0,o.jsx)("div",{className:L.dropdownContainer,children:x}),trigger:f,triggerRef:k,hasArrow:!1,widthStrategy:E,triggerClassName:p()(L.defaultTriggerClassName,S)},G,{children:_}))}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/day/index.js":((A,h,e)=>{e.d(h,{A:()=>b});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(i,O){var g={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&O.indexOf(t)<0&&(g[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)O.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(g[t[a]]=i[t[a]]);return g};const l=c.forwardRef((i,O)=>{var{size:g=24}=i,t=p(i,["size"]);t.width=void 0,t.height=void 0;const a="-day-s";return typeof g=="number"&&(t.style||(t.style={}),t.style.width=g+"px",t.style.height=g+"px"),(0,o.jsx)("svg",Object.assign({ref:O,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},t,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var d=function(i,O){var g={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&O.indexOf(t)<0&&(g[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)O.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(g[t[a]]=i[t[a]]);return g};const b=(0,c.forwardRef)((i,O)=>{var{size:g=24}=i,t=d(i,["size"]);return(0,o.jsx)(l,Object.assign({ref:O,size:g},t))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/laptopPhone/index.js":((A,h,e)=>{e.d(h,{A:()=>g});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(t,a){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const l=c.forwardRef((t,a)=>{var{size:r=24}=t,s=p(t,["size"]);s.width=void 0,s.height=void 0;const n="-laptop-phone-s";return typeof r=="number"&&(s.style||(s.style={}),s.style.width=r+"px",s.style.height=r+"px"),(0,o.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var d=function(t,a){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const b=c.forwardRef((t,a)=>{var{size:r=24}=t,s=d(t,["size"]);s.width=void 0,s.height=void 0;const n="-laptop-phone-xs";return typeof r=="number"&&(s.style||(s.style={}),s.style.width=r+"px",s.style.height=r+"px"),(0,o.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var i=function(t,a){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const g=(0,c.forwardRef)((t,a)=>{var{size:r=24}=t,s=i(t,["size"]);return Number(r)>=20?(0,o.jsx)(l,Object.assign({ref:a,size:r},s)):(0,o.jsx)(b,Object.assign({ref:a,size:r},s))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/night/index.js":((A,h,e)=>{e.d(h,{A:()=>b});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(i,O){var g={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&O.indexOf(t)<0&&(g[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)O.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(g[t[a]]=i[t[a]]);return g};const l=c.forwardRef((i,O)=>{var{size:g=24}=i,t=p(i,["size"]);t.width=void 0,t.height=void 0;const a="-night-s";return typeof g=="number"&&(t.style||(t.style={}),t.style.width=g+"px",t.style.height=g+"px"),(0,o.jsx)("svg",Object.assign({ref:O,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},t,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var d=function(i,O){var g={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&O.indexOf(t)<0&&(g[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)O.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(g[t[a]]=i[t[a]]);return g};const b=(0,c.forwardRef)((i,O)=>{var{size:g=24}=i,t=d(i,["size"]);return(0,o.jsx)(l,Object.assign({ref:O,size:g},t))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/settings/index.js":((A,h,e)=>{e.d(h,{A:()=>g});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(t,a){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const l=c.forwardRef((t,a)=>{var{size:r=24}=t,s=p(t,["size"]);s.width=void 0,s.height=void 0;const n="-settings-s";return typeof r=="number"&&(s.style||(s.style={}),s.style.width=r+"px",s.style.height=r+"px"),(0,o.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var d=function(t,a){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const b=c.forwardRef((t,a)=>{var{size:r=24}=t,s=d(t,["size"]);s.width=void 0,s.height=void 0;const n="-settings-xs";return typeof r=="number"&&(s.style||(s.style={}),s.style.width=r+"px",s.style.height=r+"px"),(0,o.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var i=function(t,a){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const g=(0,c.forwardRef)((t,a)=>{var{size:r=24}=t,s=i(t,["size"]);return Number(r)>=20?(0,o.jsx)(l,Object.assign({ref:a,size:r},s)):(0,o.jsx)(b,Object.assign({ref:a,size:r},s))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/themeContrast/index.js":((A,h,e)=>{e.d(h,{A:()=>g});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(t,a){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const l=c.forwardRef((t,a)=>{var{size:r=24}=t,s=p(t,["size"]);s.width=void 0,s.height=void 0;const n="-theme-contrast-s";return typeof r=="number"&&(s.style||(s.style={}),s.style.width=r+"px",s.style.height=r+"px"),(0,o.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var d=function(t,a){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const b=c.forwardRef((t,a)=>{var{size:r=24}=t,s=d(t,["size"]);s.width=void 0,s.height=void 0;const n="-theme-contrast-xs";return typeof r=="number"&&(s.style||(s.style={}),s.style.width=r+"px",s.style.height=r+"px"),(0,o.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var i=function(t,a){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const g=(0,c.forwardRef)((t,a)=>{var{size:r=24}=t,s=i(t,["size"]);return Number(r)>=20?(0,o.jsx)(l,Object.assign({ref:a,size:r},s)):(0,o.jsx)(b,Object.assign({ref:a,size:r},s))})}),"./node_modules/.pnpm/@snack-uikit+info-block@0.6.32_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/index.js":((A,h,e)=>{e.d(h,{O:()=>X});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),m=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js"),l=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/ButtonTonal.js");const d={S:"s",M:"m",L:"l"},C={Vertical:"vertical",Horizontal:"horizontal"},b={icon:"info-block__icon",title:"info-block__title",description:"info-block__description",footer:"info-block__footer",primaryButton:"info-block__primary-button",secondaryButton:"info-block__secondary-button"};var i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const O=(0,i.createContext)({size:d.S});function g(){return(0,i.useContext)(O)}var t=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function a({Button:j,tooltip:P}){return P?function(K){return(0,o.jsx)(t.m,Object.assign({},P,{children:(0,o.jsx)(j,Object.assign({},K))}))}:j}var r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(r),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),M=e.n(n),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(I),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),D=e.n(L),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(R),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),f=e.n(x),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.32_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"),_={};_.styleTagTransform=f(),_.setAttributes=D(),_.insert=T().bind(null,"head"),_.domAPI=M(),_.insertStyleElement=z();var k=s()(v.A,_);const E=v.A&&v.A.locals?v.A.locals:void 0;function S({primaryButton:j,secondaryButton:P,className:H}){const K=a({Button:m.L,tooltip:j.tooltip}),Q=a({Button:l.L,tooltip:P==null?void 0:P.tooltip}),{size:$}=g();return(0,o.jsxs)("div",{className:p()(E.infoBlockFooter,H),children:[P&&(0,o.jsx)(Q,Object.assign({},P,{size:$,"data-test-id":P["data-test-id"]||b.secondaryButton})),(0,o.jsx)(K,Object.assign({},j,{size:$,"data-test-id":j["data-test-id"]||b.primaryButton}))]})}var G=e("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.10_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),u=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.11_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),y=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.32_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"),F={};F.styleTagTransform=f(),F.setAttributes=D(),F.insert=T().bind(null,"head"),F.domAPI=M(),F.insertStyleElement=z();var U=s()(w.A,F);const N=w.A&&w.A.locals?w.A.locals:void 0;var B=function(j,P){var H={};for(var K in j)Object.prototype.hasOwnProperty.call(j,K)&&P.indexOf(K)<0&&(H[K]=j[K]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Q=0,K=Object.getOwnPropertySymbols(j);Q<K.length;Q++)P.indexOf(K[Q])<0&&Object.prototype.propertyIsEnumerable.call(j,K[Q])&&(H[K[Q]]=j[K[Q]]);return H};function V(j){var P,H,{title:K,description:Q,icon:$,size:Z=d.S,footer:te,align:q=C.Vertical,className:oe}=j,de=B(j,["title","description","icon","size","footer","align","className"]);return(0,o.jsx)(O.Provider,{value:{size:Z},children:(0,o.jsxs)("div",Object.assign({className:p()(N.infoBlock,oe),"data-size":Z,"data-align":q},(0,y.z7)(de),{children:[$&&(0,o.jsx)(G.I,{icon:$.icon,appearance:(P=$.appearance)!==null&&P!==void 0?P:"primary",decor:(H=$.decor)!==null&&H!==void 0?H:!0,size:Z,"data-test-id":b.icon}),(0,o.jsxs)("div",{className:N.contentLayout,children:[(0,o.jsxs)("div",{className:N.textWrap,children:[K&&(0,o.jsx)(u.o,{family:"sans",purpose:"title",size:Z,className:N.title,"data-test-id":b.title,children:K}),Q&&(0,o.jsx)(u.o,{family:"sans",purpose:"body",size:Z,className:N.description,"data-test-id":b.description,children:Q})]}),te&&(0,o.jsx)("div",{className:N.footer,"data-test-id":b.footer,children:te})]})]}))})}const X=V;X.Footer=S}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js":((A,h,e)=>{e.d(h,{K:()=>f});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const d={Text:"text",Password:"password",Number:"number",Tel:"tel",Email:"email",Url:"url"},C={Text:"text",Decimal:"decimal",Numeric:"numeric",Tel:"tel",Search:"search",Email:"email",Url:"url",None:"none"};var b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(b),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),g=e.n(O),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),a=e.n(t),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),s=e.n(r),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=e.n(n),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),T=e.n(I),L=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"),D={};D.styleTagTransform=T(),D.setAttributes=s(),D.insert=a().bind(null,"head"),D.domAPI=g(),D.insertStyleElement=M();var R=i()(L.A,D);const z=L.A&&L.A.locals?L.A.locals:void 0;var x=function(v,_){var k={};for(var E in v)Object.prototype.hasOwnProperty.call(v,E)&&_.indexOf(E)<0&&(k[E]=v[E]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,E=Object.getOwnPropertySymbols(v);S<E.length;S++)_.indexOf(E[S])<0&&Object.prototype.propertyIsEnumerable.call(v,E[S])&&(k[E[S]]=v[E[S]]);return k};const f=(0,m.forwardRef)((v,_)=>{var{name:k,value:E="",onChange:S,placeholder:G,id:u,className:y,type:w=d.Text,inputMode:F=C.Text,disabled:U=!1,readonly:N=!1,autoComplete:B=!1,autoFocus:V=!1,maxLength:X,min:j,max:P,step:H,onFocus:K,onBlur:Q,onKeyDown:$,onPaste:Z,tabIndex:te=0,onClick:q,onMouseDown:oe,spellCheck:de,pattern:pe}=v,ae=x(v,["name","value","onChange","placeholder","id","className","type","inputMode","disabled","readonly","autoComplete","autoFocus","maxLength","min","max","step","onFocus","onBlur","onKeyDown","onPaste","tabIndex","onClick","onMouseDown","spellCheck","pattern"]);const re=ie=>{S==null||S(ie.target.value,ie)};let se;switch(B){case!0:se="on";break;case!1:se="off";break;default:se=B;break}return(0,o.jsx)("input",Object.assign({name:k,maxLength:X,id:u,className:p()(y,z.inputPrivate),autoComplete:se,ref:_,value:E,onChange:re,placeholder:G,type:w,inputMode:F,disabled:U,readOnly:N,onFocus:K,onBlur:Q,onKeyDown:$,onPaste:Z,tabIndex:te,onClick:q,onMouseDown:oe,min:j,max:P,step:H,spellCheck:de,title:"",pattern:pe,autoFocus:V},(0,l.z7)(ae)))})}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js":((A,h,e)=>{e.d(h,{Ev:()=>c,SK:()=>o,Vp:()=>p,_h:()=>m});const o={S:"s",M:"m",L:"l"},c={Xs:16,S:24},p={S:"s",M:"m"},m={[o.S]:p.S,[o.M]:p.M,[o.L]:p.M}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js":((A,h,e)=>{e.d(h,{G8:()=>o,OE:()=>l,Sf:()=>m,Ub:()=>c,z$:()=>p});function o(d){var C;const b=(C=d==null?void 0:d.value.length)!==null&&C!==void 0?C:0;d==null||d.setSelectionRange(b,b)}function c(d){d==null||d.setSelectionRange(0,d==null?void 0:d.value.length)}function p(d){setTimeout(d,0)}function m(d){return(d==null?void 0:d.selectionStart)===0}function l(d){var C;return(d==null?void 0:d.selectionStart)===((C=d==null?void 0:d.value)===null||C===void 0?void 0:C.length)}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js":((A,h,e)=>{e.d(h,{C:()=>l});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),m=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js");function l({inputRef:d,setInputFocus:C=()=>{var a;return(a=d.current)===null||a===void 0?void 0:a.focus()},postfixButtons:b,prefixButtons:i=[],onButtonKeyDown:O=()=>{},readonly:g,submitKeys:t}){const[a,r]=(0,c.useState)(0),s=(0,p.A)(O),n=(0,c.useCallback)(()=>i.map(()=>-1),[i]),[M,I]=(0,c.useState)(n),T=(0,c.useCallback)(()=>b.map(()=>-1),[b]),[L,D]=(0,c.useState)(T),R=(0,c.useCallback)((u,y)=>{const w=y==="ArrowLeft"?-1:1,F=U=>y==="ArrowLeft"?U>=0:U<i.length;for(let U=u+w;F(U);U+=w)if(i[U].active&&i[U].show)return U;return u},[i]),z=(0,c.useCallback)((u,y)=>{const w=y==="ArrowLeft"?-1:1,F=U=>y==="ArrowLeft"?U>=0:U<b.length;for(let U=u+w;F(U);U+=w)if(b[U].active&&b[U].show)return U;return u},[b]),x=(0,c.useCallback)(()=>{r(0),I(n),D(T)},[n,T]),f=(0,c.useCallback)(()=>{x(),C()},[x,C]),v=(0,c.useCallback)(u=>{var y,w;r(-1),I(F=>F.map((U,N)=>N===u?0:-1)),D(T),!((y=i[u])===null||y===void 0)&&y.active&&((w=i[u].ref.current)===null||w===void 0||w.focus())},[T,i]),_=(0,c.useCallback)(u=>{var y,w;r(-1),I(n),D(F=>F.map((U,N)=>N===u?0:-1)),!((y=b[u])===null||y===void 0)&&y.active&&((w=b[u].ref.current)===null||w===void 0||w.focus())},[n,b]),k=(0,c.useCallback)(u=>{if(x(),u.key==="ArrowRight"&&(g||(0,m.OE)(d.current))){const y=z(-1,u.key);y>=0&&_(y)}if(u.key==="ArrowLeft"&&(g||(0,m.Sf)(d.current))){const y=R(i.length,u.key);y>=0&&v(y)}},[z,R,_,v,d,i.length,g,x]),E=(0,c.useCallback)(u=>y=>{if(y.key==="ArrowRight"){const w=R(u,y.key);u===w?(y.preventDefault(),f(),g&&(0,m.z$)(()=>(0,m.Ub)(d.current))):v(w)}y.key==="ArrowLeft"&&u<=i.length-1&&v(R(u,y.key)),t.includes(y.key)&&(0,m.z$)(()=>x()),s==null||s(y)},[s,i.length,R,v,f,d,g,x,t]),S=(0,c.useCallback)(u=>y=>{if(y.key==="ArrowLeft"){const w=z(u,y.key);u===w?(y.preventDefault(),f(),g&&(0,m.z$)(()=>(0,m.Ub)(d.current))):_(w)}y.key==="ArrowRight"&&u<=b.length-1&&_(z(u,y.key)),t.includes(y.key)&&(0,m.z$)(()=>x()),s==null||s(y)},[s,b.length,z,_,f,d,g,x,t]),G=(0,c.useCallback)(()=>{(0,m.z$)(()=>x())},[x]);return{inputTabIndex:a,onInputKeyDown:k,setInitialTabIndices:x,prefixButtons:i.some(u=>u.show)?(0,o.jsx)(o.Fragment,{children:i.map((u,y)=>u.show?u.active?u.render({key:u.id,ref:u.ref,tabIndex:M[y],onKeyDown:E(y),onClick:G}):u.render({key:u.id}):null)}):void 0,postfixButtons:b.some(u=>u.show)?(0,o.jsx)(o.Fragment,{children:b.map((u,y)=>u.show?u.active?u.render({key:u.id,ref:u.ref,tabIndex:L[y],onKeyDown:S(y),onClick:G}):u.render({key:u.id}):null)}):void 0}}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js":((A,h,e)=>{e.d(h,{r:()=>z});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),m=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),l=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(d),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=e.n(b),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),g=e.n(O),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),a=e.n(t),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),s=e.n(r),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=e.n(n),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"),T={};T.styleTagTransform=M(),T.setAttributes=a(),T.insert=g().bind(null,"head"),T.domAPI=i(),T.insertStyleElement=s();var L=C()(I.A,T);const D=I.A&&I.A.locals?I.A.locals:void 0,R=(0,c.forwardRef)(({size:x,onClick:f,tabIndex:v=-1,onKeyDown:_},k)=>{const E=S=>{S.stopPropagation(),f(S)};return(0,o.jsxs)("button",{className:D.buttonClearValue,"data-size":x,onClick:E,"data-test-id":"button-clear-value",type:"button",ref:k,onKeyDown:_,tabIndex:v,children:[x===m.Vp.S&&(0,o.jsx)(l.A,{size:16}),x===m.Vp.M&&(0,o.jsx)(l.A,{})]})});function z({clearButtonRef:x,showClearButton:f,size:v,onClear:_}){const k=(0,p.A)(_);return(0,c.useMemo)(()=>({id:"clear",active:!0,ref:x,show:f,render:E=>{const S=G=>{E.onClick(G),k(G)};return(0,o.jsx)(R,Object.assign({},E,{size:m._h[v],onClick:S}))}}),[x,k,f,v])}}),"./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js":((A,h,e)=>{e.d(h,{i:()=>D});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),m=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),C=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),b=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),i=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),O=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),g=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),t=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),a=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),r=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),s=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),n=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),M=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),I=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),T=function(R,z){var x={};for(var f in R)Object.prototype.hasOwnProperty.call(R,f)&&z.indexOf(f)<0&&(x[f]=R[f]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,f=Object.getOwnPropertySymbols(R);v<f.length;v++)z.indexOf(f[v])<0&&Object.prototype.propertyIsEnumerable.call(R,f[v])&&(x[f[v]]=R[f[v]]);return x};const L=["top","right","bottom","left"];function D(R){var{items:z,search:x,pinBottom:f=[],pinTop:v=[],footerActiveElementsRefs:_,children:k,trigger:E,placement:S,widthStrategy:G,triggerElemRef:u,open:y,onOpenChange:w,collapse:F={},triggerClassName:U,selection:N,contentRender:B,size:V="s",marker:X=!0,closeDroplistOnItemClick:j=!1,className:P,listRef:H,untouchableScrollbars:K=!1,virtualized:Q=!1,closeOnPopstate:$}=R,Z=T(R,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const te=(0,l.useMemo)(()=>!!x,[x]),[q=[],oe]=(0,C.I)(F),de=(0,l.useCallback)(W=>oe(Y=>Y!=null&&Y.includes(W)?Y.filter(J=>J!==W):(Y!=null?Y:[]).concat([W])),[oe]),[pe=!1,ae]=(0,C.I)({value:y,defaultValue:!1,onChange:w}),{searchItem:re,footerItems:se}=(0,i.nG)({footerActiveElementsRefs:_}),ie=(0,l.useMemo)(()=>{const W=(0,O.lg)({items:v,prefix:b.$.pinTop,parentId:b.$.default}),Y=(0,O.lg)({items:z,prefix:b.$.default,parentId:b.$.default}),J=(0,O.lg)({items:f,prefix:b.$.pinBottom,parentId:b.$.default}),ne=Object.assign(Object.assign(Object.assign({},W.flattenItems),J.flattenItems),Y.flattenItems),le=Object.assign(Object.assign(Object.assign({},W.focusFlattenItems),J.focusFlattenItems),Y.focusFlattenItems);return[...se,re].forEach(ee=>{ne[ee.id]=ee,le[ee.id]=Object.assign(Object.assign({},ee),{originalId:ee.id,items:[],key:ee.id,allChildIds:[]})}),{items:Y,pinTop:W,pinBottom:J,flattenItems:ne,focusFlattenItems:le}},[z,v,f,re,se]),{flattenItems:ke,focusFlattenItems:ge}=ie,ce=T(ie,["flattenItems","focusFlattenItems"]),{ids:_e,expandedIds:he}=(0,l.useMemo)(()=>{const{pinTop:W,items:Y,pinBottom:J}=ce;let ne=[],le=[];return te&&ne.push(re.id),[W,Y,J].forEach(({focusFlattenItems:ee,focusCloseChildIds:Ae})=>{const je=(0,O.e)({focusFlattenItems:ee,focusCloseChildIds:Ae,openCollapseItems:q,isSelectionMultiple:(N==null?void 0:N.mode)==="multiple"});ne=ne.concat(je.ids),le=le.concat(je.expandedIds)}),se.forEach(ee=>{ne.push(ee.id)}),{ids:ne,expandedIds:le}},[se,te,ce,q,re.id,N==null?void 0:N.mode]),ve=(0,l.useRef)(null),be=(0,l.useRef)(null),xe=_e[0],{handleListKeyDownFactory:fe,resetActiveItemId:ue,activeItemId:Oe,forceUpdateActiveItemId:me}=(0,n.d)({mainRef:u!=null?u:ve,focusFlattenItems:ge,hasListInFocusChain:!0,firstItemId:xe}),Se=(0,l.useCallback)(W=>fe(_e,he)(W),[fe,_e,he]),Pe=(0,l.useCallback)(W=>{ue(),ae(W)},[ue,ae]),ye=(0,l.useCallback)((W,Y)=>{W.key==="ArrowDown"&&(W.preventDefault(),ae(!0),setTimeout(()=>{var J;ue(),(J=be.current)===null||J===void 0||J.focus()},0)),W.key==="ArrowUp"&&ae(!1),Y==null||Y(W)},[ue,ae]),Ee=(0,l.useMemo)(()=>(0,l.isValidElement)(k),[k]),we=(0,l.useMemo)(()=>{if((0,l.isValidElement)(k)){const W=typeof k.props=="object"?k.props:{};return(0,l.cloneElement)(k,Object.assign(Object.assign({},W),{onKeyDown:Y=>{var J;ye(Y,(J=k.props)===null||J===void 0?void 0:J.onKeyDown)}}))}return typeof k=="function"?k({onKeyDown:ye}):k},[ye,k]);return(0,o.jsx)(g.Tr,{flattenItems:ke,focusFlattenItems:ge,contentRender:B,size:V,marker:X,firstItemId:xe,virtualized:Q,children:(0,o.jsx)(t.WM,Object.assign({},N,{children:(0,o.jsx)(a.bN.Provider,{value:{openCollapseItems:q,toggleOpenCollapseItem:de},children:(0,o.jsx)(r.m.Provider,{value:{activeItemId:Oe,handleListKeyDownFactory:fe,forceUpdateActiveItemId:me},children:(0,o.jsx)(s.K.Provider,{value:{closeDroplistOnItemClick:j,closeDroplist:()=>{var W;ae(!1),ue(),(W=(u!=null?u:ve).current)===null||W===void 0||W.focus()}},children:(0,o.jsx)(d.m,{content:(0,o.jsx)("div",{className:p()(I.A.wrapper,P),children:(0,o.jsx)(M.Q,Object.assign({},Z,{items:ce.items.focusCloseChildIds,pinTop:ce.pinTop.focusCloseChildIds,pinBottom:ce.pinBottom.focusCloseChildIds,virtualized:Q,onKeyDown:Se,searchItem:re,tabIndex:0,ref:(0,m.A)(be,H),search:x,onFocus:W=>{W.stopPropagation(),me==null||me(_e[0])},limitedScrollHeight:!0,untouchableScrollbars:K}))}),outsideClick:!0,triggerClassName:U,fallbackPlacements:L,trigger:E,placement:S,widthStrategy:G,triggerRef:u?Ee&&u||void 0:ve,open:pe,onOpenChange:Pe,closeOnPopstate:$,children:we})})})})}))})}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js":((A,h,e)=>{e.d(h,{y:()=>z});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),m=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),l=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(d),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=e.n(b),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),g=e.n(O),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),a=e.n(t),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),s=e.n(r),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=e.n(n),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"),T={};T.styleTagTransform=M(),T.setAttributes=a(),T.insert=g().bind(null,"head"),T.domAPI=i(),T.insertStyleElement=s();var L=C()(I.A,T);const D=I.A&&I.A.locals?I.A.locals:void 0;var R=function(x,f){var v={};for(var _ in x)Object.prototype.hasOwnProperty.call(x,_)&&f.indexOf(_)<0&&(v[_]=x[_]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var k=0,_=Object.getOwnPropertySymbols(x);k<_.length;k++)f.indexOf(_[k])<0&&Object.prototype.propertyIsEnumerable.call(x,_[k])&&(v[_[k]]=x[_[k]]);return v};function z(x){var{size:f=l.K.S,className:v}=x,_=R(x,["size","className"]);return f===l.K.XXS?(0,o.jsxs)("svg",Object.assign({viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:p()(D.spinner,v)},(0,m.z7)(_),{"data-size":f,children:[(0,o.jsx)("circle",{opacity:"0.24",cx:"4",cy:"4",r:"3",strokeWidth:"1.5"}),(0,o.jsx)("path",{d:"M1 4C1 2.34315 2.34315 1 4 1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):f===l.K.XS?(0,o.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:p()(D.spinner,v)},(0,m.z7)(_),{"data-size":f,children:[(0,o.jsx)("circle",{opacity:"0.24",cx:"8",cy:"8",r:"6",strokeWidth:"1.5"}),(0,o.jsx)("path",{d:"M2 8C2 4.68629 4.68629 2 8 2",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):(0,o.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:p()(D.spinner,v)},(0,m.z7)(_),{"data-size":f,children:[(0,o.jsx)("circle",{opacity:"0.24",cx:"12",cy:"12",r:"9",strokeWidth:"1.5"}),(0,o.jsx)("path",{d:"M3 12C3 7.02944 7.02944 3 12 3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/Switch.js":((A,h,e)=>{e.d(h,{d:()=>E});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),m=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(l),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),b=e.n(C),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),O=e.n(i),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),t=e.n(g),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),r=e.n(a),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),n=e.n(s),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"),I={};I.styleTagTransform=n(),I.setAttributes=t(),I.insert=O().bind(null,"head"),I.domAPI=b(),I.insertStyleElement=r();var T=d()(M.A,I);const L=M.A&&M.A.locals?M.A.locals:void 0;function D(){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:L.spinner,children:(0,o.jsx)("path",{d:"M5 8C5 6.34315 6.34315 5 8 5",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round"})})}var R=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),z=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"),x=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"),f={};f.styleTagTransform=n(),f.setAttributes=t(),f.insert=O().bind(null,"head"),f.domAPI=b(),f.insertStyleElement=r();var v=d()(x.A,f);const _=x.A&&x.A.locals?x.A.locals:void 0;var k=function(S,G){var u={};for(var y in S)Object.prototype.hasOwnProperty.call(S,y)&&G.indexOf(y)<0&&(u[y]=S[y]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var w=0,y=Object.getOwnPropertySymbols(S);w<y.length;w++)G.indexOf(y[w])<0&&Object.prototype.propertyIsEnumerable.call(S,y[w])&&(u[y[w]]=S[y[w]]);return u};function E(S){var{inputRef:G,"data-test-id":u,showIcon:y,loading:w,size:F=m.SK.M}=S,U=k(S,["inputRef","data-test-id","showIcon","loading","size"]);return(0,o.jsx)(z.Q,Object.assign({},U,{size:F,"data-test-id":u,ref:G,render:function(B){const V=(0,R.V)(B);return(0,o.jsxs)("div",Object.assign({className:_.container},V,{children:[(0,o.jsx)("div",Object.assign({className:_.box},V)),(0,o.jsxs)("div",Object.assign({className:_.containerFlag},V,{children:[(0,o.jsx)("div",Object.assign({className:_.flag},V)),(y||w)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",Object.assign({className:_.flag_icon_off},V,{children:w?(0,o.jsx)(D,{}):(0,o.jsx)(c.A,{size:16})})),(0,o.jsx)("div",Object.assign({className:_.flag_icon_on},V,{children:w?(0,o.jsx)(D,{}):(0,o.jsx)(p.A,{size:16})}))]})]}))]}))}}))}}),"./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js":((A,h,e)=>{e.d(h,{I:()=>c});var o=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function c({value:p,onChange:m,defaultValue:l}){return(0,o.iC)(p,l,d=>{const C=typeof d=="function"?d(p):d;m==null||m(C)})}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.14_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((A,h,e)=>{e.d(h,{A:()=>d});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(o),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(p),l=m()(c());l.push([A.id,`.avatar--VkRtj{
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
}`,""]),l.locals={avatar:"avatar--VkRtj",image:"image--oxRHB",indicatorWrapper:"indicatorWrapper--k608B"};const d=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css":((A,h,e)=>{e.d(h,{A:()=>d});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(o),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(p),l=m()(c());l.push([A.id,`.horizontal--BAWtQ{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  width:100%;
}
.horizontal--BAWtQ[data-weight=regular]{
  height:1px;
}
.horizontal--BAWtQ[data-weight=light]{
  height:0.5px;
}

.vertical--Os_1s{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  height:100%;
}
.vertical--Os_1s[data-weight=regular]{
  width:1px;
}
.vertical--Os_1s[data-weight=light]{
  width:0.5px;
}`,""]),l.locals={horizontal:"horizontal--BAWtQ",vertical:"vertical--Os_1s"};const d=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css":((A,h,e)=>{e.d(h,{A:()=>d});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(o),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(p),l=m()(c());l.push([A.id,`.dropdownContainer--ZwqLZ{
  padding-top:var(--space-drop-list-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-container-vertical-padding, 4px);
  border-radius:var(--radius-drop-list-container, 4px);
  overflow:hidden;
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  box-shadow:var(--box-shadow-elevation-level3, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 8px 16px 0px rgba(0, 0, 0, 0.0784313725));
}

.defaultTriggerClassName--Tlcki{
  --offset:var(--space-drop-list-drop-offset, 4px);
}`,""]),l.locals={dropdownContainer:"dropdownContainer--ZwqLZ",defaultTriggerClassName:"defaultTriggerClassName--Tlcki"};const d=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.32_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css":((A,h,e)=>{e.d(h,{A:()=>d});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(o),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(p),l=m()(c());l.push([A.id,`.infoBlockFooter--fJpPE{
  gap:var(--space-info-block-footer-gap, 8px);
  display:flex;
  align-items:center;
}`,""]),l.locals={infoBlockFooter:"infoBlockFooter--fJpPE"};const d=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.32_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css":((A,h,e)=>{e.d(h,{A:()=>d});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(o),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(p),l=m()(c());l.push([A.id,`.contentLayout--rJmNE{
  display:flex;
  flex-direction:column;
}

.textWrap--uvU1e{
  display:flex;
  flex-direction:column;
}

.footer--JBucp{
  position:relative;
  box-sizing:border-box;
  width:100%;
}

.title--lRBXs{
  color:var(--sys-neutral-text-main, #41424e);
}

.description--nCWqt{
  color:var(--sys-neutral-text-support, #6d707f);
}

.infoBlock--olMVV{
  display:flex;
  box-sizing:border-box;
}
.infoBlock--olMVV[data-align=vertical]{
  flex-direction:column;
  align-items:center;
}
.infoBlock--olMVV[data-align=vertical] .contentLayout--rJmNE{
  align-items:center;
}
.infoBlock--olMVV[data-align=vertical] .textWrap--uvU1e{
  align-items:center;
}
.infoBlock--olMVV[data-align=vertical] .footer--JBucp{
  width:auto;
  text-align:center;
}
.infoBlock--olMVV[data-align=vertical] .description--nCWqt,
.infoBlock--olMVV[data-align=vertical] .title--lRBXs{
  text-align:center;
}
.infoBlock--olMVV[data-align=horizontal]{
  flex-direction:row;
  align-items:flex-start;
}
.infoBlock--olMVV[data-size=s]{
  gap:var(--space-info-block-s-container-gap, 12px);
}
.infoBlock--olMVV[data-size=s] .contentLayout--rJmNE{
  gap:var(--space-info-block-s-container-content-layout-gap, 16px);
}
.infoBlock--olMVV[data-size=s] .textWrap--uvU1e{
  gap:var(--space-info-block-s-container-content-layout-text-wrap-gap, 4px);
}
.infoBlock--olMVV[data-size=m]{
  gap:var(--space-info-block-m-container-gap, 16px);
}
.infoBlock--olMVV[data-size=m] .contentLayout--rJmNE{
  gap:var(--space-info-block-m-container-content-layout-gap, 24px);
}
.infoBlock--olMVV[data-size=m] .textWrap--uvU1e{
  gap:var(--space-info-block-m-container-content-layout-text-wrap-gap, 8px);
}
.infoBlock--olMVV[data-size=l]{
  gap:var(--space-info-block-l-container-gap, 24px);
}
.infoBlock--olMVV[data-size=l] .contentLayout--rJmNE{
  gap:var(--space-info-block-l-container-content-layout-gap, 24px);
}
.infoBlock--olMVV[data-size=l] .textWrap--uvU1e{
  gap:var(--space-info-block-l-container-content-layout-text-wrap-gap, 8px);
}`,""]),l.locals={contentLayout:"contentLayout--rJmNE",textWrap:"textWrap--uvU1e",footer:"footer--JBucp",title:"title--lRBXs",description:"description--nCWqt",infoBlock:"infoBlock--olMVV"};const d=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css":((A,h,e)=>{e.d(h,{A:()=>d});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(o),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(p),l=m()(c());l.push([A.id,`.inputPrivate--uQwUS{
  box-sizing:border-box;
  width:100%;
  max-width:100%;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-main, #41424e);
  text-overflow:ellipsis;
  background-color:transparent;
  border:none;
  border-radius:0;
  outline:0;
}
.inputPrivate--uQwUS::-moz-placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--uQwUS::placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--uQwUS:-moz-read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.inputPrivate--uQwUS:read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.inputPrivate--uQwUS:-moz-placeholder-shown{
  text-overflow:ellipsis;
}
.inputPrivate--uQwUS:placeholder-shown{
  text-overflow:ellipsis;
}
.inputPrivate--uQwUS[disabled]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--uQwUS[type=number]{
  -moz-appearance:textfield;
}
.inputPrivate--uQwUS[type=number]::-webkit-outer-spin-button, .inputPrivate--uQwUS[type=number]::-webkit-inner-spin-button{
  margin:0;
  -webkit-appearance:none;
}`,""]),l.locals={inputPrivate:"inputPrivate--uQwUS"};const d=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css":((A,h,e)=>{e.d(h,{A:()=>d});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(o),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(p),l=m()(c());l.push([A.id,`.buttonClearValue--cURFI{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonClearValue--cURFI[data-size=s]{
  width:var(--size-input-private-button-clear-value-s, 16px);
  height:var(--size-input-private-button-clear-value-s, 16px);
  border-radius:var(--radius-input-private-button-clear-value-s, 8px);
}
.buttonClearValue--cURFI[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.buttonClearValue--cURFI[data-size=m]{
  width:var(--size-input-private-button-clear-value-m, 24px);
  height:var(--size-input-private-button-clear-value-m, 24px);
  border-radius:var(--radius-input-private-button-clear-value-m, 12px);
}
.buttonClearValue--cURFI[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonClearValue--cURFI:hover{
  cursor:pointer;
  color:var(--sys-red-text-support, #ae514c);
}
.buttonClearValue--cURFI:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-support, #ae514c);
  outline-color:var(--sys-red-accent-default, #cb3f3e);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonClearValue--cURFI:active{
  color:var(--sys-red-text-main, #7a2d2d);
}
.buttonClearValue--cURFI[data-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),l.locals={buttonClearValue:"buttonClearValue--cURFI"};const d=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css":((A,h,e)=>{e.d(h,{A:()=>d});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(o),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(p),l=m()(c());l.push([A.id,`.spinner--DYy1L{
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
}`,""]),l.locals={spinner:"spinner--DYy1L",spin:"spin--T9QJf"};const d=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((A,h,e)=>{e.d(h,{A:()=>d});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(o),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(p),l=m()(c());l.push([A.id,`.container--iBruo{
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
}`,""]),l.locals={container:"container--iBruo",indicator:"indicator--C8gfz"};const d=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css":((A,h,e)=>{e.d(h,{A:()=>d});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(o),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(p),l=m()(c());l.push([A.id,`.container--EQARM{
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  position:relative;
}
.container--EQARM[data-size=s]{
  width:var(--size-toggles-s-container-switch-width, 24px);
  height:var(--size-toggles-s-container, 16px);
  border-radius:var(--radius-toggles-s-box-switch, 16px);
}
.container--EQARM[data-size=m]{
  width:var(--size-toggles-m-container-switch-width, 36px);
  height:var(--size-toggles-m-container, 24px);
  border-radius:var(--radius-toggles-m-box-switch, 16px);
}
.container--EQARM[data-focusvisible=true]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
}
.container--EQARM[data-focusvisible=true][data-size=s]{
  outline-offset:var(--border-width-state-focus-s, 2px);
}

.box--aBjUp{
  position:relative;
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.box--aBjUp[data-size=s]{
  width:var(--size-toggles-s-box-switch-width, 24px);
  height:var(--size-toggles-s-box-switch-height, 16px);
  border-radius:var(--radius-toggles-s-box-switch, 16px);
}
.box--aBjUp[data-size=m]{
  width:var(--size-toggles-m-box-switch-width, 32px);
  height:var(--size-toggles-m-box-switch-height, 20px);
  border-radius:var(--radius-toggles-m-box-switch, 16px);
}
.box--aBjUp[data-hover=true]{
  background-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.box--aBjUp[data-disabled=true]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.box--aBjUp[data-checked=true]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.box--aBjUp[data-checked=true][data-hover=true]{
  background-color:var(--sys-primary-accent-hovered, #37946e);
}
.box--aBjUp[data-checked=true][data-disabled=true]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.containerFlag--T8UEw{
  position:absolute;
  left:0;
  display:flex;
  align-items:center;
  justify-content:center;
  transition-timing-function:linear;
  transition-duration:0.1s;
  transition-property:left;
}
.containerFlag--T8UEw[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
}
.containerFlag--T8UEw[data-size=s][data-checked=true]{
  left:calc(100% - var(--size-toggles-s-container, 16px));
}
.containerFlag--T8UEw[data-size=m]{
  width:var(--size-toggles-m-container, 24px);
  height:var(--size-toggles-m-container, 24px);
}
.containerFlag--T8UEw[data-size=m][data-checked=true]{
  left:calc(100% - var(--size-toggles-m-container, 24px));
}

.flag--xatCX{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}
.flag--xatCX[data-size=s]{
  border-radius:var(--radius-toggles-s-box-switch, 16px);
  width:var(--size-toggles-s-flag-switch, 12px);
  height:var(--size-toggles-s-flag-switch, 12px);
}
.flag--xatCX[data-size=m]{
  border-radius:var(--radius-toggles-m-box-switch, 16px);
  width:var(--size-toggles-m-flag-switch, 16px);
  height:var(--size-toggles-m-flag-switch, 16px);
}
.flag--xatCX[data-focusvisible=true], .flag--xatCX[data-hover=true]{
  background-color:var(--sys-neutral-on-accent, #ffffff);
}
.flag--xatCX[data-disabled=true]{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}

.flag_icon_off--skSuB{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  fill:transparent;
  transition:opacity 0.1s linear;
  opacity:1;
}
.flag_icon_off--skSuB[data-hover=true]{
  color:var(--sys-neutral-accent-hovered, #6d707f);
}
.flag_icon_off--skSuB[data-checked=true]{
  color:var(--sys-primary-accent-default, #389f74);
}
.flag_icon_off--skSuB[data-checked=true][data-hover=true]{
  color:var(--sys-primary-accent-hovered, #37946e);
}
.flag_icon_off--skSuB[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_off--skSuB[data-disabled=true][data-hover=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_off--skSuB[data-checked=true]{
  opacity:0;
}

.flag_icon_on--FS5OB{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  fill:transparent;
  transition:opacity 0.1s linear;
  opacity:0;
}
.flag_icon_on--FS5OB[data-hover=true]{
  color:var(--sys-neutral-accent-hovered, #6d707f);
}
.flag_icon_on--FS5OB[data-checked=true]{
  color:var(--sys-primary-accent-default, #389f74);
}
.flag_icon_on--FS5OB[data-checked=true][data-hover=true]{
  color:var(--sys-primary-accent-hovered, #37946e);
}
.flag_icon_on--FS5OB[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_on--FS5OB[data-disabled=true][data-hover=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_on--FS5OB[data-checked=true]{
  opacity:1;
}`,""]),l.locals={container:"container--EQARM",box:"box--aBjUp",containerFlag:"containerFlag--T8UEw",flag:"flag--xatCX",flag_icon_off:"flag_icon_off--skSuB",flag_icon_on:"flag_icon_on--FS5OB"};const d=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css":((A,h,e)=>{e.d(h,{A:()=>d});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(o),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=e.n(p),l=m()(c());l.push([A.id,`.spinner--EjiHn{
  pointer-events:none;
  width:var(--dimension-2m, 16px);
  height:var(--dimension-2m, 16px);
  animation:spin--pYVb8 1s ease-in-out infinite;
}
.spinner--EjiHn > path{
  stroke:currentColor;
}
@keyframes spin--pYVb8{
  to{
    transform:rotate(360deg);
  }
}`,""]),l.locals={spinner:"spinner--EjiHn",spin:"spin--pYVb8"};const d=l})}]);})();
