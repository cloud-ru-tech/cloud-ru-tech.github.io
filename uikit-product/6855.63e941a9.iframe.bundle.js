"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[6855],{"./node_modules/.pnpm/@snack-uikit+avatar@0.8.14_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((z,y,e)=>{e.d(y,{e:()=>K});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(u),f=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const l={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},A={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(v),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=e.n(b),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),o=e.n(t),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),s=e.n(r),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n(n),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(V),H=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),T={};T.styleTagTransform=L(),T.setAttributes=s(),T.insert=o().bind(null,"head"),T.domAPI=m(),T.insertStyleElement=R();var U=i()(H.A,T);const W=H.A&&H.A.locals?H.A.locals:void 0;var S=function(E,M){var N={};for(var p in E)Object.prototype.hasOwnProperty.call(E,p)&&M.indexOf(p)<0&&(N[p]=E[p]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,p=Object.getOwnPropertySymbols(E);h<p.length;h++)M.indexOf(p[h])<0&&Object.prototype.propertyIsEnumerable.call(E,p[h])&&(N[p[h]]=E[p[h]]);return N};function P(E){var{size:M=A.M,appearance:N=l.Primary,className:p}=E,h=S(E,["size","appearance","className"]);return(0,a.jsx)("div",Object.assign({className:g()(W.container,p)},(0,d.z7)(h),{"data-size":M,children:(0,a.jsx)("div",{className:W.indicator,"data-appearance":N})}))}const j={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},k={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},I={Round:"round",Square:"square"};var w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.14_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),O={};O.styleTagTransform=L(),O.setAttributes=s(),O.insert=o().bind(null,"head"),O.domAPI=m(),O.insertStyleElement=R();var $=i()(w.A,O);const c=w.A&&w.A.locals?w.A.locals:void 0,_=" ",x=(E,M)=>{var N;const p=E.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!p||p.length<M)return p.toUpperCase();const h=p.split(_);let Q=p;if(h.length>1){const D=h[0].charAt(0),X=(N=h[h.length-1])===null||N===void 0?void 0:N.charAt(0);Q=`${D}${X}`.toUpperCase()}return Q.slice(0,M).toUpperCase()};var F=function(E,M){var N={};for(var p in E)Object.prototype.hasOwnProperty.call(E,p)&&M.indexOf(p)<0&&(N[p]=E[p]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,p=Object.getOwnPropertySymbols(E);h<p.length;h++)M.indexOf(p[h])<0&&Object.prototype.propertyIsEnumerable.call(E,p[h])&&(N[p[h]]=E[p[h]]);return N};const C={[k.Xxs]:"xxs",[k.Xs]:"xs",[k.S]:"xs",[k.M]:"m",[k.L]:"m",[k.Xl]:"l",[k.Xxl]:"l"};function K(E){var{name:M,appearance:N=j.Red,size:p=k.S,shape:h=I.Round,indicator:Q,showTwoSymbols:D,src:X,className:Z}=E,Y=F(E,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[te,q]=(0,f.useState)(!1),ae=p!==k.Xxs&&D?2:1;return(0,f.useEffect)(()=>{q(!1)},[X]),(0,a.jsxs)("div",Object.assign({className:g()(c.avatar,Z)},(0,d.z7)(Y),{"data-size":p,"data-appearance":N,"data-shape":h,children:[X&&!te?(0,a.jsx)("img",{"data-test-id":"image",className:c.image,src:X,onError:()=>q(!0),alt:""}):(0,a.jsx)("div",{"data-test-id":"abbreviation",children:x(M,ae)}),Q&&(0,a.jsx)("div",{className:c.indicatorWrapper,children:(0,a.jsx)(P,{"data-test-id":"indicator",appearance:Q,size:C[p]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/day/index.js":((z,y,e)=>{e.d(y,{A:()=>v});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=function(i,b){var m={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&b.indexOf(t)<0&&(m[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(i);o<t.length;o++)b.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(i,t[o])&&(m[t[o]]=i[t[o]]);return m};const d=u.forwardRef((i,b)=>{var{size:m=24}=i,t=g(i,["size"]);t.width=void 0,t.height=void 0;const o="-day-s";return typeof m=="number"&&(t.style||(t.style={}),t.style.width=m+"px",t.style.height=m+"px"),(0,a.jsx)("svg",Object.assign({ref:b,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var l=function(i,b){var m={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&b.indexOf(t)<0&&(m[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(i);o<t.length;o++)b.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(i,t[o])&&(m[t[o]]=i[t[o]]);return m};const v=(0,u.forwardRef)((i,b)=>{var{size:m=24}=i,t=l(i,["size"]);return(0,a.jsx)(d,Object.assign({ref:b,size:m},t))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/laptopPhone/index.js":((z,y,e)=>{e.d(y,{A:()=>m});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=function(t,o){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)o.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const d=u.forwardRef((t,o)=>{var{size:r=24}=t,s=g(t,["size"]);s.width=void 0,s.height=void 0;const n="-laptop-phone-s";return typeof r=="number"&&(s.style||(s.style={}),s.style.width=r+"px",s.style.height=r+"px"),(0,a.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var l=function(t,o){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)o.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const v=u.forwardRef((t,o)=>{var{size:r=24}=t,s=l(t,["size"]);s.width=void 0,s.height=void 0;const n="-laptop-phone-xs";return typeof r=="number"&&(s.style||(s.style={}),s.style.width=r+"px",s.style.height=r+"px"),(0,a.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var i=function(t,o){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)o.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const m=(0,u.forwardRef)((t,o)=>{var{size:r=24}=t,s=i(t,["size"]);return Number(r)>=20?(0,a.jsx)(d,Object.assign({ref:o,size:r},s)):(0,a.jsx)(v,Object.assign({ref:o,size:r},s))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/night/index.js":((z,y,e)=>{e.d(y,{A:()=>v});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=function(i,b){var m={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&b.indexOf(t)<0&&(m[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(i);o<t.length;o++)b.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(i,t[o])&&(m[t[o]]=i[t[o]]);return m};const d=u.forwardRef((i,b)=>{var{size:m=24}=i,t=g(i,["size"]);t.width=void 0,t.height=void 0;const o="-night-s";return typeof m=="number"&&(t.style||(t.style={}),t.style.width=m+"px",t.style.height=m+"px"),(0,a.jsx)("svg",Object.assign({ref:b,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var l=function(i,b){var m={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&b.indexOf(t)<0&&(m[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(i);o<t.length;o++)b.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(i,t[o])&&(m[t[o]]=i[t[o]]);return m};const v=(0,u.forwardRef)((i,b)=>{var{size:m=24}=i,t=l(i,["size"]);return(0,a.jsx)(d,Object.assign({ref:b,size:m},t))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/settings/index.js":((z,y,e)=>{e.d(y,{A:()=>m});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=function(t,o){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)o.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const d=u.forwardRef((t,o)=>{var{size:r=24}=t,s=g(t,["size"]);s.width=void 0,s.height=void 0;const n="-settings-s";return typeof r=="number"&&(s.style||(s.style={}),s.style.width=r+"px",s.style.height=r+"px"),(0,a.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var l=function(t,o){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)o.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const v=u.forwardRef((t,o)=>{var{size:r=24}=t,s=l(t,["size"]);s.width=void 0,s.height=void 0;const n="-settings-xs";return typeof r=="number"&&(s.style||(s.style={}),s.style.width=r+"px",s.style.height=r+"px"),(0,a.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var i=function(t,o){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)o.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const m=(0,u.forwardRef)((t,o)=>{var{size:r=24}=t,s=i(t,["size"]);return Number(r)>=20?(0,a.jsx)(d,Object.assign({ref:o,size:r},s)):(0,a.jsx)(v,Object.assign({ref:o,size:r},s))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/themeContrast/index.js":((z,y,e)=>{e.d(y,{A:()=>m});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=function(t,o){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)o.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const d=u.forwardRef((t,o)=>{var{size:r=24}=t,s=g(t,["size"]);s.width=void 0,s.height=void 0;const n="-theme-contrast-s";return typeof r=="number"&&(s.style||(s.style={}),s.style.width=r+"px",s.style.height=r+"px"),(0,a.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var l=function(t,o){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)o.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const v=u.forwardRef((t,o)=>{var{size:r=24}=t,s=l(t,["size"]);s.width=void 0,s.height=void 0;const n="-theme-contrast-xs";return typeof r=="number"&&(s.style||(s.style={}),s.style.width=r+"px",s.style.height=r+"px"),(0,a.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var i=function(t,o){var r={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&o.indexOf(s)<0&&(r[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)o.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(r[s[n]]=t[s[n]]);return r};const m=(0,u.forwardRef)((t,o)=>{var{size:r=24}=t,s=i(t,["size"]);return Number(r)>=20?(0,a.jsx)(d,Object.assign({ref:o,size:r},s)):(0,a.jsx)(v,Object.assign({ref:o,size:r},s))})}),"./node_modules/.pnpm/@snack-uikit+info-block@0.6.32_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/index.js":((z,y,e)=>{e.d(y,{O:()=>N});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(u),f=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js"),d=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/ButtonTonal.js");const l={S:"s",M:"m",L:"l"},A={Vertical:"vertical",Horizontal:"horizontal"},v={icon:"info-block__icon",title:"info-block__title",description:"info-block__description",footer:"info-block__footer",primaryButton:"info-block__primary-button",secondaryButton:"info-block__secondary-button"};var i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const b=(0,i.createContext)({size:l.S});function m(){return(0,i.useContext)(b)}var t=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function o({Button:p,tooltip:h}){return h?function(D){return(0,a.jsx)(t.m,Object.assign({},h,{children:(0,a.jsx)(p,Object.assign({},D))}))}:p}var r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(r),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=e.n(n),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),L=e.n(V),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),T=e.n(H),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),W=e.n(U),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),P=e.n(S),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.32_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"),k={};k.styleTagTransform=P(),k.setAttributes=T(),k.insert=L().bind(null,"head"),k.domAPI=R(),k.insertStyleElement=W();var I=s()(j.A,k);const w=j.A&&j.A.locals?j.A.locals:void 0;function O({primaryButton:p,secondaryButton:h,className:Q}){const D=o({Button:f.L,tooltip:p.tooltip}),X=o({Button:d.L,tooltip:h==null?void 0:h.tooltip}),{size:Z}=m();return(0,a.jsxs)("div",{className:g()(w.infoBlockFooter,Q),children:[h&&(0,a.jsx)(X,Object.assign({},h,{size:Z,"data-test-id":h["data-test-id"]||v.secondaryButton})),(0,a.jsx)(D,Object.assign({},p,{size:Z,"data-test-id":p["data-test-id"]||v.primaryButton}))]})}var $=e("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.10_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),c=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.11_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),_=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),x=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.32_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"),F={};F.styleTagTransform=P(),F.setAttributes=T(),F.insert=L().bind(null,"head"),F.domAPI=R(),F.insertStyleElement=W();var C=s()(x.A,F);const K=x.A&&x.A.locals?x.A.locals:void 0;var E=function(p,h){var Q={};for(var D in p)Object.prototype.hasOwnProperty.call(p,D)&&h.indexOf(D)<0&&(Q[D]=p[D]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var X=0,D=Object.getOwnPropertySymbols(p);X<D.length;X++)h.indexOf(D[X])<0&&Object.prototype.propertyIsEnumerable.call(p,D[X])&&(Q[D[X]]=p[D[X]]);return Q};function M(p){var h,Q,{title:D,description:X,icon:Z,size:Y=l.S,footer:te,align:q=A.Vertical,className:ae}=p,le=E(p,["title","description","icon","size","footer","align","className"]);return(0,a.jsx)(b.Provider,{value:{size:Y},children:(0,a.jsxs)("div",Object.assign({className:g()(K.infoBlock,ae),"data-size":Y,"data-align":q},(0,_.z7)(le),{children:[Z&&(0,a.jsx)($.I,{icon:Z.icon,appearance:(h=Z.appearance)!==null&&h!==void 0?h:"primary",decor:(Q=Z.decor)!==null&&Q!==void 0?Q:!0,size:Y,"data-test-id":v.icon}),(0,a.jsxs)("div",{className:K.contentLayout,children:[(0,a.jsxs)("div",{className:K.textWrap,children:[D&&(0,a.jsx)(c.o,{family:"sans",purpose:"title",size:Y,className:K.title,"data-test-id":v.title,children:D}),X&&(0,a.jsx)(c.o,{family:"sans",purpose:"body",size:Y,className:K.description,"data-test-id":v.description,children:X})]}),te&&(0,a.jsx)("div",{className:K.footer,"data-test-id":v.footer,children:te})]})]}))})}const N=M;N.Footer=O}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js":((z,y,e)=>{e.d(y,{K:()=>P});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(u),f=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const l={Text:"text",Password:"password",Number:"number",Tel:"tel",Email:"email",Url:"url"},A={Text:"text",Decimal:"decimal",Numeric:"numeric",Tel:"tel",Search:"search",Email:"email",Url:"url",None:"none"};var v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(v),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=e.n(b),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),o=e.n(t),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),s=e.n(r),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n(n),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(V),H=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"),T={};T.styleTagTransform=L(),T.setAttributes=s(),T.insert=o().bind(null,"head"),T.domAPI=m(),T.insertStyleElement=R();var U=i()(H.A,T);const W=H.A&&H.A.locals?H.A.locals:void 0;var S=function(j,k){var I={};for(var w in j)Object.prototype.hasOwnProperty.call(j,w)&&k.indexOf(w)<0&&(I[w]=j[w]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,w=Object.getOwnPropertySymbols(j);O<w.length;O++)k.indexOf(w[O])<0&&Object.prototype.propertyIsEnumerable.call(j,w[O])&&(I[w[O]]=j[w[O]]);return I};const P=(0,f.forwardRef)((j,k)=>{var{name:I,value:w="",onChange:O,placeholder:$,id:c,className:_,type:x=l.Text,inputMode:F=A.Text,disabled:C=!1,readonly:K=!1,autoComplete:E=!1,autoFocus:M=!1,maxLength:N,min:p,max:h,step:Q,onFocus:D,onBlur:X,onKeyDown:Z,onPaste:Y,tabIndex:te=0,onClick:q,onMouseDown:ae,spellCheck:le,pattern:me}=j,oe=S(j,["name","value","onChange","placeholder","id","className","type","inputMode","disabled","readonly","autoComplete","autoFocus","maxLength","min","max","step","onFocus","onBlur","onKeyDown","onPaste","tabIndex","onClick","onMouseDown","spellCheck","pattern"]);const re=de=>{O==null||O(de.target.value,de)};let se;switch(E){case!0:se="on";break;case!1:se="off";break;default:se=E;break}return(0,a.jsx)("input",Object.assign({name:I,maxLength:N,id:c,className:g()(_,W.inputPrivate),autoComplete:se,ref:k,value:w,onChange:re,placeholder:$,type:x,inputMode:F,disabled:C,readOnly:K,onFocus:D,onBlur:X,onKeyDown:Z,onPaste:Y,tabIndex:te,onClick:q,onMouseDown:ae,min:p,max:h,step:Q,spellCheck:le,title:"",pattern:me,autoFocus:M},(0,d.z7)(oe)))})}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js":((z,y,e)=>{e.d(y,{Ev:()=>u,SK:()=>a,Vp:()=>g,_h:()=>f});const a={S:"s",M:"m",L:"l"},u={Xs:16,S:24},g={S:"s",M:"m"},f={[a.S]:g.S,[a.M]:g.M,[a.L]:g.M}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js":((z,y,e)=>{e.d(y,{G8:()=>a,OE:()=>d,Sf:()=>f,Ub:()=>u,z$:()=>g});function a(l){var A;const v=(A=l==null?void 0:l.value.length)!==null&&A!==void 0?A:0;l==null||l.setSelectionRange(v,v)}function u(l){l==null||l.setSelectionRange(0,l==null?void 0:l.value.length)}function g(l){setTimeout(l,0)}function f(l){return(l==null?void 0:l.selectionStart)===0}function d(l){var A;return(l==null?void 0:l.selectionStart)===((A=l==null?void 0:l.value)===null||A===void 0?void 0:A.length)}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js":((z,y,e)=>{e.d(y,{C:()=>d});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),f=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js");function d({inputRef:l,setInputFocus:A=()=>{var o;return(o=l.current)===null||o===void 0?void 0:o.focus()},postfixButtons:v,prefixButtons:i=[],onButtonKeyDown:b=()=>{},readonly:m,submitKeys:t}){const[o,r]=(0,u.useState)(0),s=(0,g.A)(b),n=(0,u.useCallback)(()=>i.map(()=>-1),[i]),[R,V]=(0,u.useState)(n),L=(0,u.useCallback)(()=>v.map(()=>-1),[v]),[H,T]=(0,u.useState)(L),U=(0,u.useCallback)((c,_)=>{const x=_==="ArrowLeft"?-1:1,F=C=>_==="ArrowLeft"?C>=0:C<i.length;for(let C=c+x;F(C);C+=x)if(i[C].active&&i[C].show)return C;return c},[i]),W=(0,u.useCallback)((c,_)=>{const x=_==="ArrowLeft"?-1:1,F=C=>_==="ArrowLeft"?C>=0:C<v.length;for(let C=c+x;F(C);C+=x)if(v[C].active&&v[C].show)return C;return c},[v]),S=(0,u.useCallback)(()=>{r(0),V(n),T(L)},[n,L]),P=(0,u.useCallback)(()=>{S(),A()},[S,A]),j=(0,u.useCallback)(c=>{var _,x;r(-1),V(F=>F.map((C,K)=>K===c?0:-1)),T(L),!((_=i[c])===null||_===void 0)&&_.active&&((x=i[c].ref.current)===null||x===void 0||x.focus())},[L,i]),k=(0,u.useCallback)(c=>{var _,x;r(-1),V(n),T(F=>F.map((C,K)=>K===c?0:-1)),!((_=v[c])===null||_===void 0)&&_.active&&((x=v[c].ref.current)===null||x===void 0||x.focus())},[n,v]),I=(0,u.useCallback)(c=>{if(S(),c.key==="ArrowRight"&&(m||(0,f.OE)(l.current))){const _=W(-1,c.key);_>=0&&k(_)}if(c.key==="ArrowLeft"&&(m||(0,f.Sf)(l.current))){const _=U(i.length,c.key);_>=0&&j(_)}},[W,U,k,j,l,i.length,m,S]),w=(0,u.useCallback)(c=>_=>{if(_.key==="ArrowRight"){const x=U(c,_.key);c===x?(_.preventDefault(),P(),m&&(0,f.z$)(()=>(0,f.Ub)(l.current))):j(x)}_.key==="ArrowLeft"&&c<=i.length-1&&j(U(c,_.key)),t.includes(_.key)&&(0,f.z$)(()=>S()),s==null||s(_)},[s,i.length,U,j,P,l,m,S,t]),O=(0,u.useCallback)(c=>_=>{if(_.key==="ArrowLeft"){const x=W(c,_.key);c===x?(_.preventDefault(),P(),m&&(0,f.z$)(()=>(0,f.Ub)(l.current))):k(x)}_.key==="ArrowRight"&&c<=v.length-1&&k(W(c,_.key)),t.includes(_.key)&&(0,f.z$)(()=>S()),s==null||s(_)},[s,v.length,W,k,P,l,m,S,t]),$=(0,u.useCallback)(()=>{(0,f.z$)(()=>S())},[S]);return{inputTabIndex:o,onInputKeyDown:I,setInitialTabIndices:S,prefixButtons:i.some(c=>c.show)?(0,a.jsx)(a.Fragment,{children:i.map((c,_)=>c.show?c.active?c.render({key:c.id,ref:c.ref,tabIndex:R[_],onKeyDown:w(_),onClick:$}):c.render({key:c.id}):null)}):void 0,postfixButtons:v.some(c=>c.show)?(0,a.jsx)(a.Fragment,{children:v.map((c,_)=>c.show?c.active?c.render({key:c.id,ref:c.ref,tabIndex:H[_],onKeyDown:O(_),onClick:$}):c.render({key:c.id}):null)}):void 0}}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js":((z,y,e)=>{e.d(y,{r:()=>W});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),g=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),f=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),d=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(l),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=e.n(v),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),m=e.n(b),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=e.n(t),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),s=e.n(r),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n(n),V=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"),L={};L.styleTagTransform=R(),L.setAttributes=o(),L.insert=m().bind(null,"head"),L.domAPI=i(),L.insertStyleElement=s();var H=A()(V.A,L);const T=V.A&&V.A.locals?V.A.locals:void 0,U=(0,u.forwardRef)(({size:S,onClick:P,tabIndex:j=-1,onKeyDown:k},I)=>{const w=O=>{O.stopPropagation(),P(O)};return(0,a.jsxs)("button",{className:T.buttonClearValue,"data-size":S,onClick:w,"data-test-id":"button-clear-value",type:"button",ref:I,onKeyDown:k,tabIndex:j,children:[S===f.Vp.S&&(0,a.jsx)(d.A,{size:16}),S===f.Vp.M&&(0,a.jsx)(d.A,{})]})});function W({clearButtonRef:S,showClearButton:P,size:j,onClear:k}){const I=(0,g.A)(k);return(0,u.useMemo)(()=>({id:"clear",active:!0,ref:S,show:P,render:w=>{const O=$=>{w.onClick($),I($)};return(0,a.jsx)(U,Object.assign({},w,{size:f._h[j],onClick:O}))}}),[S,I,P,j])}}),"./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js":((z,y,e)=>{e.d(y,{i:()=>T});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(u),f=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),A=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),v=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),i=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),b=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),m=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),t=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),o=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),r=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),s=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),n=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),R=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),V=e("./node_modules/.pnpm/@snack-uikit+list@0.32.2_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),L=function(U,W){var S={};for(var P in U)Object.prototype.hasOwnProperty.call(U,P)&&W.indexOf(P)<0&&(S[P]=U[P]);if(U!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,P=Object.getOwnPropertySymbols(U);j<P.length;j++)W.indexOf(P[j])<0&&Object.prototype.propertyIsEnumerable.call(U,P[j])&&(S[P[j]]=U[P[j]]);return S};const H=["top","right","bottom","left"];function T(U){var{items:W,search:S,pinBottom:P=[],pinTop:j=[],footerActiveElementsRefs:k,children:I,trigger:w,placement:O,widthStrategy:$,triggerElemRef:c,open:_,onOpenChange:x,collapse:F={},triggerClassName:C,selection:K,contentRender:E,size:M="s",marker:N=!0,closeDroplistOnItemClick:p=!1,className:h,listRef:Q,untouchableScrollbars:D=!1,virtualized:X=!1,closeOnPopstate:Z}=U,Y=L(U,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const te=(0,d.useMemo)(()=>!!S,[S]),[q=[],ae]=(0,A.I)(F),le=(0,d.useCallback)(B=>ae(G=>G!=null&&G.includes(B)?G.filter(J=>J!==B):(G!=null?G:[]).concat([B])),[ae]),[me=!1,oe]=(0,A.I)({value:_,defaultValue:!1,onChange:x}),{searchItem:re,footerItems:se}=(0,i.nG)({footerActiveElementsRefs:k}),de=(0,d.useMemo)(()=>{const B=(0,b.lg)({items:j,prefix:v.$.pinTop,parentId:v.$.default}),G=(0,b.lg)({items:W,prefix:v.$.default,parentId:v.$.default}),J=(0,b.lg)({items:P,prefix:v.$.pinBottom,parentId:v.$.default}),ne=Object.assign(Object.assign(Object.assign({},B.flattenItems),J.flattenItems),G.flattenItems),ie=Object.assign(Object.assign(Object.assign({},B.focusFlattenItems),J.focusFlattenItems),G.focusFlattenItems);return[...se,re].forEach(ee=>{ne[ee.id]=ee,ie[ee.id]=Object.assign(Object.assign({},ee),{originalId:ee.id,items:[],key:ee.id,allChildIds:[]})}),{items:G,pinTop:B,pinBottom:J,flattenItems:ne,focusFlattenItems:ie}},[W,j,P,re,se]),{flattenItems:je,focusFlattenItems:ye}=de,ce=L(de,["flattenItems","focusFlattenItems"]),{ids:_e,expandedIds:he}=(0,d.useMemo)(()=>{const{pinTop:B,items:G,pinBottom:J}=ce;let ne=[],ie=[];return te&&ne.push(re.id),[B,G,J].forEach(({focusFlattenItems:ee,focusCloseChildIds:ze})=>{const ke=(0,b.e)({focusFlattenItems:ee,focusCloseChildIds:ze,openCollapseItems:q,isSelectionMultiple:(K==null?void 0:K.mode)==="multiple"});ne=ne.concat(ke.ids),ie=ie.concat(ke.expandedIds)}),se.forEach(ee=>{ne.push(ee.id)}),{ids:ne,expandedIds:ie}},[se,te,ce,q,re.id,K==null?void 0:K.mode]),fe=(0,d.useRef)(null),be=(0,d.useRef)(null),xe=_e[0],{handleListKeyDownFactory:ve,resetActiveItemId:ue,activeItemId:Oe,forceUpdateActiveItemId:pe}=(0,n.d)({mainRef:c!=null?c:fe,focusFlattenItems:ye,hasListInFocusChain:!0,firstItemId:xe}),Se=(0,d.useCallback)(B=>ve(_e,he)(B),[ve,_e,he]),Pe=(0,d.useCallback)(B=>{ue(),oe(B)},[ue,oe]),ge=(0,d.useCallback)((B,G)=>{B.key==="ArrowDown"&&(B.preventDefault(),oe(!0),setTimeout(()=>{var J;ue(),(J=be.current)===null||J===void 0||J.focus()},0)),B.key==="ArrowUp"&&oe(!1),G==null||G(B)},[ue,oe]),Ee=(0,d.useMemo)(()=>(0,d.isValidElement)(I),[I]),we=(0,d.useMemo)(()=>{if((0,d.isValidElement)(I)){const B=typeof I.props=="object"?I.props:{};return(0,d.cloneElement)(I,Object.assign(Object.assign({},B),{onKeyDown:G=>{var J;ge(G,(J=I.props)===null||J===void 0?void 0:J.onKeyDown)}}))}return typeof I=="function"?I({onKeyDown:ge}):I},[ge,I]);return(0,a.jsx)(m.Tr,{flattenItems:je,focusFlattenItems:ye,contentRender:E,size:M,marker:N,firstItemId:xe,virtualized:X,children:(0,a.jsx)(t.WM,Object.assign({},K,{children:(0,a.jsx)(o.bN.Provider,{value:{openCollapseItems:q,toggleOpenCollapseItem:le},children:(0,a.jsx)(r.m.Provider,{value:{activeItemId:Oe,handleListKeyDownFactory:ve,forceUpdateActiveItemId:pe},children:(0,a.jsx)(s.K.Provider,{value:{closeDroplistOnItemClick:p,closeDroplist:()=>{var B;oe(!1),ue(),(B=(c!=null?c:fe).current)===null||B===void 0||B.focus()}},children:(0,a.jsx)(l.m,{content:(0,a.jsx)("div",{className:g()(V.A.wrapper,h),children:(0,a.jsx)(R.Q,Object.assign({},Y,{items:ce.items.focusCloseChildIds,pinTop:ce.pinTop.focusCloseChildIds,pinBottom:ce.pinBottom.focusCloseChildIds,virtualized:X,onKeyDown:Se,searchItem:re,tabIndex:0,ref:(0,f.A)(be,Q),search:S,onFocus:B=>{B.stopPropagation(),pe==null||pe(_e[0])},limitedScrollHeight:!0,untouchableScrollbars:D}))}),outsideClick:!0,triggerClassName:C,fallbackPlacements:H,trigger:w,placement:O,widthStrategy:$,triggerRef:c?Ee&&c||void 0:fe,open:me,onOpenChange:Pe,closeOnPopstate:Z,children:we})})})})}))})}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/Switch.js":((z,y,e)=>{e.d(y,{d:()=>w});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),g=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),f=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(d),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),v=e.n(A),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),b=e.n(i),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),t=e.n(m),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),r=e.n(o),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),n=e.n(s),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"),V={};V.styleTagTransform=n(),V.setAttributes=t(),V.insert=b().bind(null,"head"),V.domAPI=v(),V.insertStyleElement=r();var L=l()(R.A,V);const H=R.A&&R.A.locals?R.A.locals:void 0;function T(){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:H.spinner,children:(0,a.jsx)("path",{d:"M5 8C5 6.34315 6.34315 5 8 5",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round"})})}var U=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),W=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"),P={};P.styleTagTransform=n(),P.setAttributes=t(),P.insert=b().bind(null,"head"),P.domAPI=v(),P.insertStyleElement=r();var j=l()(S.A,P);const k=S.A&&S.A.locals?S.A.locals:void 0;var I=function(O,$){var c={};for(var _ in O)Object.prototype.hasOwnProperty.call(O,_)&&$.indexOf(_)<0&&(c[_]=O[_]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,_=Object.getOwnPropertySymbols(O);x<_.length;x++)$.indexOf(_[x])<0&&Object.prototype.propertyIsEnumerable.call(O,_[x])&&(c[_[x]]=O[_[x]]);return c};function w(O){var{inputRef:$,"data-test-id":c,showIcon:_,loading:x,size:F=f.SK.M}=O,C=I(O,["inputRef","data-test-id","showIcon","loading","size"]);return(0,a.jsx)(W.Q,Object.assign({},C,{size:F,"data-test-id":c,ref:$,render:function(E){const M=(0,U.V)(E);return(0,a.jsxs)("div",Object.assign({className:k.container},M,{children:[(0,a.jsx)("div",Object.assign({className:k.box},M)),(0,a.jsxs)("div",Object.assign({className:k.containerFlag},M,{children:[(0,a.jsx)("div",Object.assign({className:k.flag},M)),(_||x)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",Object.assign({className:k.flag_icon_off},M,{children:x?(0,a.jsx)(T,{}):(0,a.jsx)(u.A,{size:16})})),(0,a.jsx)("div",Object.assign({className:k.flag_icon_on},M,{children:x?(0,a.jsx)(T,{}):(0,a.jsx)(g.A,{size:16})}))]})]}))]}))}}))}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.14_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((z,y,e)=>{e.d(y,{A:()=>l});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),d=f()(u());d.push([z.id,`.avatar--VkRtj{
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
}`,""]),d.locals={avatar:"avatar--VkRtj",image:"image--oxRHB",indicatorWrapper:"indicatorWrapper--k608B"};const l=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.32_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css":((z,y,e)=>{e.d(y,{A:()=>l});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),d=f()(u());d.push([z.id,`.infoBlockFooter--fJpPE{
  gap:var(--space-info-block-footer-gap, 8px);
  display:flex;
  align-items:center;
}`,""]),d.locals={infoBlockFooter:"infoBlockFooter--fJpPE"};const l=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.32_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css":((z,y,e)=>{e.d(y,{A:()=>l});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),d=f()(u());d.push([z.id,`.contentLayout--rJmNE{
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
}`,""]),d.locals={contentLayout:"contentLayout--rJmNE",textWrap:"textWrap--uvU1e",footer:"footer--JBucp",title:"title--lRBXs",description:"description--nCWqt",infoBlock:"infoBlock--olMVV"};const l=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css":((z,y,e)=>{e.d(y,{A:()=>l});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),d=f()(u());d.push([z.id,`.inputPrivate--uQwUS{
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
}`,""]),d.locals={inputPrivate:"inputPrivate--uQwUS"};const l=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css":((z,y,e)=>{e.d(y,{A:()=>l});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),d=f()(u());d.push([z.id,`.buttonClearValue--cURFI{
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
}`,""]),d.locals={buttonClearValue:"buttonClearValue--cURFI"};const l=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((z,y,e)=>{e.d(y,{A:()=>l});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),d=f()(u());d.push([z.id,`.container--iBruo{
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
}`,""]),d.locals={container:"container--iBruo",indicator:"indicator--C8gfz"};const l=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css":((z,y,e)=>{e.d(y,{A:()=>l});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),d=f()(u());d.push([z.id,`.container--EQARM{
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
}`,""]),d.locals={container:"container--EQARM",box:"box--aBjUp",containerFlag:"containerFlag--T8UEw",flag:"flag--xatCX",flag_icon_off:"flag_icon_off--skSuB",flag_icon_on:"flag_icon_on--FS5OB"};const l=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css":((z,y,e)=>{e.d(y,{A:()=>l});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(a),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),d=f()(u());d.push([z.id,`.spinner--EjiHn{
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
}`,""]),d.locals={spinner:"spinner--EjiHn",spin:"spin--pYVb8"};const l=d})}]);})();
