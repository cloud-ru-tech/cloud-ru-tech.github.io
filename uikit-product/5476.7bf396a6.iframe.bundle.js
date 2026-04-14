"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5476],{"./node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/extends.js":((P,v,s)=>{s.d(v,{A:()=>r});function r(){return r=Object.assign?Object.assign.bind():function(d){for(var p=1;p<arguments.length;p++){var m=arguments[p];for(var c in m)({}).hasOwnProperty.call(m,c)&&(d[c]=m[c])}return d},r.apply(null,arguments)}}),"./node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":((P,v,s)=>{s.d(v,{A:()=>r});function r(d,p){if(d==null)return{};var m={};for(var c in d)if({}.hasOwnProperty.call(d,c)){if(p.indexOf(c)!==-1)continue;m[c]=d[c]}return m}}),"./node_modules/.pnpm/@snack-uikit+fields@0.53.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js":((P,v,s)=>{s.d(v,{x:()=>A});var r=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=s("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),m=s("./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js"),c=s.n(m),i=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),w=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/copy/index.js");function b({size:y,isChecked:g}){switch(y){case p.Vp.S:return g?(0,r.jsx)(i.A,{size:16}):(0,r.jsx)(w.A,{size:16});case p.Vp.M:default:return g?(0,r.jsx)(i.A,{size:24}):(0,r.jsx)(w.A,{size:24})}}var _=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=s.n(_),h=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),t=s.n(h),a=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),n=s.n(a),e=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=s.n(e),z=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=s.n(z),M=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=s.n(M),T=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.53.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonCopyValue/styles.module.css"),B={};B.styleTagTransform=L(),B.setAttributes=o(),B.insert=n().bind(null,"head"),B.domAPI=t(),B.insertStyleElement=D();var W=C()(T.A,B);const I=T.A&&T.A.locals?T.A.locals:void 0,O=(0,d.forwardRef)(({size:y,valueToCopy:g,tabIndex:k=-1,onKeyDown:j,onClick:l,onValueRequest:u,disabled:f},E)=>{const[x,R]=(0,d.useState)(!1),U=(0,d.useRef)(),V=()=>R(!1),X=(K,Z)=>{const N=Z||g;N&&c()(N,{format:"text/plain"}),R(!0),clearTimeout(U.current),U.current=setTimeout(V,2e3),l==null||l(K)},G=K=>{K.stopPropagation(),u?u().then(({success:Z,value:N})=>{Z&&X(K,N)}):X(K)};return(0,d.useEffect)(()=>()=>{V(),clearTimeout(U.current)},[]),(0,r.jsx)("button",{className:I.buttonCopyValue,"data-size":y,"data-disabled":f||void 0,onClick:G,"data-test-id":"button-copy-value",ref:E,onKeyDown:j,tabIndex:k,type:"button",disabled:f,children:b({size:y,isChecked:x})})});var S=function(y,g){var k={};for(var j in y)Object.prototype.hasOwnProperty.call(y,j)&&g.indexOf(j)<0&&(k[j]=y[j]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,j=Object.getOwnPropertySymbols(y);l<j.length;l++)g.indexOf(j[l])<0&&Object.prototype.propertyIsEnumerable.call(y,j[l])&&(k[j[l]]=y[j[l]]);return k};function A({copyButtonRef:y,showCopyButton:g,size:k,valueToCopy:j,onValueRequest:l,onCopyButtonClick:u,disabled:f,prefix:E="",postfix:x=""}){return(0,d.useMemo)(()=>({id:"copy",active:!0,ref:y,show:g,render:R=>{var{key:U}=R,V=S(R,["key"]);return(0,r.jsx)(O,Object.assign({},V,{size:p._h[k],valueToCopy:(E!=null?E:"")+j+(x!=null?x:""),onValueRequest:l,onClick:u,disabled:f}),U)}}),[y,g,k,E,j,x,l,u,f])}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js":((P,v,s)=>{s.d(v,{A:()=>h});var r=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const c=d.forwardRef((t,a)=>{var{size:n=24}=t,e=p(t,["size"]);e.width=void 0,e.height=void 0;const o="-chevron-down-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,r.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var i=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const b=d.forwardRef((t,a)=>{var{size:n=24}=t,e=i(t,["size"]);e.width=void 0,e.height=void 0;const o="-chevron-down-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,r.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var _=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const h=(0,d.forwardRef)((t,a)=>{var{size:n=24}=t,e=_(t,["size"]);return Number(n)>=20?(0,r.jsx)(c,Object.assign({ref:a,size:n},e)):(0,r.jsx)(b,Object.assign({ref:a,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js":((P,v,s)=>{s.d(v,{A:()=>h});var r=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const c=d.forwardRef((t,a)=>{var{size:n=24}=t,e=p(t,["size"]);e.width=void 0,e.height=void 0;const o="-chevron-up-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,r.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var i=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const b=d.forwardRef((t,a)=>{var{size:n=24}=t,e=i(t,["size"]);e.width=void 0,e.height=void 0;const o="-chevron-up-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,r.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var _=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const h=(0,d.forwardRef)((t,a)=>{var{size:n=24}=t,e=_(t,["size"]);return Number(n)>=20?(0,r.jsx)(c,Object.assign({ref:a,size:n},e)):(0,r.jsx)(b,Object.assign({ref:a,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/pause/index.js":((P,v,s)=>{s.d(v,{A:()=>h});var r=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const c=d.forwardRef((t,a)=>{var{size:n=24}=t,e=p(t,["size"]);e.width=void 0,e.height=void 0;const o="-pause-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,r.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var i=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const b=d.forwardRef((t,a)=>{var{size:n=24}=t,e=i(t,["size"]);e.width=void 0,e.height=void 0;const o="-pause-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,r.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var _=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const h=(0,d.forwardRef)((t,a)=>{var{size:n=24}=t,e=_(t,["size"]);return Number(n)>=20?(0,r.jsx)(c,Object.assign({ref:a,size:n},e)):(0,r.jsx)(b,Object.assign({ref:a,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/play/index.js":((P,v,s)=>{s.d(v,{A:()=>h});var r=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const c=d.forwardRef((t,a)=>{var{size:n=24}=t,e=p(t,["size"]);e.width=void 0,e.height=void 0;const o="-play-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,r.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var i=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const b=d.forwardRef((t,a)=>{var{size:n=24}=t,e=i(t,["size"]);e.width=void 0,e.height=void 0;const o="-play-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,r.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var _=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const h=(0,d.forwardRef)((t,a)=>{var{size:n=24}=t,e=_(t,["size"]);return Number(n)>=20?(0,r.jsx)(c,Object.assign({ref:a,size:n},e)):(0,r.jsx)(b,Object.assign({ref:a,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js":((P,v,s)=>{s.d(v,{A:()=>h});var r=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const c=d.forwardRef((t,a)=>{var{size:n=24}=t,e=p(t,["size"]);e.width=void 0,e.height=void 0;const o="-question-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,r.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var i=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const b=d.forwardRef((t,a)=>{var{size:n=24}=t,e=i(t,["size"]);e.width=void 0,e.height=void 0;const o="-question-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,r.jsx)("svg",Object.assign({ref:a,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var _=function(t,a){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)a.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const h=(0,d.forwardRef)((t,a)=>{var{size:n=24}=t,e=_(t,["size"]);return Number(n)>=20?(0,r.jsx)(c,Object.assign({ref:a,size:n},e)):(0,r.jsx)(b,Object.assign({ref:a,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/update/index.js":((P,v,s)=>{s.d(v,{A:()=>b});var r=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(_,C){var h={};for(var t in _)Object.prototype.hasOwnProperty.call(_,t)&&C.indexOf(t)<0&&(h[t]=_[t]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(_);a<t.length;a++)C.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(_,t[a])&&(h[t[a]]=_[t[a]]);return h};const c=d.forwardRef((_,C)=>{var{size:h=24}=_,t=p(_,["size"]);t.width=void 0,t.height=void 0;const a="-update-s";return typeof h=="number"&&(t.style||(t.style={}),t.style.width=h+"px",t.style.height=h+"px"),(0,r.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},t,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var i=function(_,C){var h={};for(var t in _)Object.prototype.hasOwnProperty.call(_,t)&&C.indexOf(t)<0&&(h[t]=_[t]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(_);a<t.length;a++)C.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(_,t[a])&&(h[t[a]]=_[t[a]]);return h};const b=(0,d.forwardRef)((_,C)=>{var{size:h=24}=_,t=i(_,["size"]);return(0,r.jsx)(c,Object.assign({ref:C,size:h},t))})}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js":((P,v,s)=>{s.d(v,{Ev:()=>d,SK:()=>r,Vp:()=>p,_h:()=>m});const r={S:"s",M:"m",L:"l"},d={Xs:16,S:24},p={S:"s",M:"m"},m={[r.S]:p.S,[r.M]:p.M,[r.L]:p.M}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js":((P,v,s)=>{s.d(v,{G8:()=>r,OE:()=>c,Sf:()=>m,Ub:()=>d,z$:()=>p});function r(i){var w;const b=(w=i==null?void 0:i.value.length)!==null&&w!==void 0?w:0;i==null||i.setSelectionRange(b,b)}function d(i){i==null||i.setSelectionRange(0,i==null?void 0:i.value.length)}function p(i){setTimeout(i,0)}function m(i){return(i==null?void 0:i.selectionStart)===0}function c(i){var w;return(i==null?void 0:i.selectionStart)===((w=i==null?void 0:i.value)===null||w===void 0?void 0:w.length)}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js":((P,v,s)=>{s.d(v,{C:()=>c});var r=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),m=s("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js");function c({inputRef:i,setInputFocus:w=()=>{var a;return(a=i.current)===null||a===void 0?void 0:a.focus()},postfixButtons:b,prefixButtons:_=[],onButtonKeyDown:C=()=>{},readonly:h,submitKeys:t}){const[a,n]=(0,d.useState)(0),e=(0,p.A)(C),o=(0,d.useCallback)(()=>_.map(()=>-1),[_]),[z,D]=(0,d.useState)(o),M=(0,d.useCallback)(()=>b.map(()=>-1),[b]),[L,T]=(0,d.useState)(M),B=(0,d.useCallback)((l,u)=>{const f=u==="ArrowLeft"?-1:1,E=x=>u==="ArrowLeft"?x>=0:x<_.length;for(let x=l+f;E(x);x+=f)if(_[x].active&&_[x].show)return x;return l},[_]),W=(0,d.useCallback)((l,u)=>{const f=u==="ArrowLeft"?-1:1,E=x=>u==="ArrowLeft"?x>=0:x<b.length;for(let x=l+f;E(x);x+=f)if(b[x].active&&b[x].show)return x;return l},[b]),I=(0,d.useCallback)(()=>{n(0),D(o),T(M)},[o,M]),O=(0,d.useCallback)(()=>{I(),w()},[I,w]),S=(0,d.useCallback)(l=>{var u,f;n(-1),D(E=>E.map((x,R)=>R===l?0:-1)),T(M),!((u=_[l])===null||u===void 0)&&u.active&&((f=_[l].ref.current)===null||f===void 0||f.focus())},[M,_]),A=(0,d.useCallback)(l=>{var u,f;n(-1),D(o),T(E=>E.map((x,R)=>R===l?0:-1)),!((u=b[l])===null||u===void 0)&&u.active&&((f=b[l].ref.current)===null||f===void 0||f.focus())},[o,b]),y=(0,d.useCallback)(l=>{if(I(),l.key==="ArrowRight"&&(h||(0,m.OE)(i.current))){const u=W(-1,l.key);u>=0&&A(u)}if(l.key==="ArrowLeft"&&(h||(0,m.Sf)(i.current))){const u=B(_.length,l.key);u>=0&&S(u)}},[W,B,A,S,i,_.length,h,I]),g=(0,d.useCallback)(l=>u=>{if(u.key==="ArrowRight"){const f=B(l,u.key);l===f?(u.preventDefault(),O(),h&&(0,m.z$)(()=>(0,m.Ub)(i.current))):S(f)}u.key==="ArrowLeft"&&l<=_.length-1&&S(B(l,u.key)),t.includes(u.key)&&(0,m.z$)(()=>I()),e==null||e(u)},[e,_.length,B,S,O,i,h,I,t]),k=(0,d.useCallback)(l=>u=>{if(u.key==="ArrowLeft"){const f=W(l,u.key);l===f?(u.preventDefault(),O(),h&&(0,m.z$)(()=>(0,m.Ub)(i.current))):A(f)}u.key==="ArrowRight"&&l<=b.length-1&&A(W(l,u.key)),t.includes(u.key)&&(0,m.z$)(()=>I()),e==null||e(u)},[e,b.length,W,A,O,i,h,I,t]),j=(0,d.useCallback)(()=>{(0,m.z$)(()=>I())},[I]);return{inputTabIndex:a,onInputKeyDown:y,setInitialTabIndices:I,prefixButtons:_.some(l=>l.show)?(0,r.jsx)(r.Fragment,{children:_.map((l,u)=>l.show?l.active?l.render({key:l.id,ref:l.ref,tabIndex:z[u],onKeyDown:g(u),onClick:j}):l.render({key:l.id}):null)}):void 0,postfixButtons:b.some(l=>l.show)?(0,r.jsx)(r.Fragment,{children:b.map((l,u)=>l.show?l.active?l.render({key:l.id,ref:l.ref,tabIndex:L[u],onKeyDown:k(u),onClick:j}):l.render({key:l.id}):null)}):void 0}}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js":((P,v,s)=>{s.d(v,{r:()=>I});var r=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),m=s("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),c=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),i=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=s.n(i),b=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_=s.n(b),C=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=s.n(C),t=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),a=s.n(t),n=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),e=s.n(n),o=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),z=s.n(o),D=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"),M={};M.styleTagTransform=z(),M.setAttributes=a(),M.insert=h().bind(null,"head"),M.domAPI=_(),M.insertStyleElement=e();var L=w()(D.A,M);const T=D.A&&D.A.locals?D.A.locals:void 0,B=(0,d.forwardRef)(({size:O,onClick:S,tabIndex:A=-1,onKeyDown:y,onMouseDown:g},k)=>{const j=l=>{l.stopPropagation(),S(l)};return(0,r.jsxs)("button",{className:T.buttonClearValue,"data-size":O,onClick:j,"data-test-id":"button-clear-value",type:"button",ref:k,onKeyDown:y,onMouseDown:g,tabIndex:A,children:[O===m.Vp.S&&(0,r.jsx)(c.A,{size:16}),O===m.Vp.M&&(0,r.jsx)(c.A,{})]})});var W=function(O,S){var A={};for(var y in O)Object.prototype.hasOwnProperty.call(O,y)&&S.indexOf(y)<0&&(A[y]=O[y]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,y=Object.getOwnPropertySymbols(O);g<y.length;g++)S.indexOf(y[g])<0&&Object.prototype.propertyIsEnumerable.call(O,y[g])&&(A[y[g]]=O[y[g]]);return A};function I({clearButtonRef:O,showClearButton:S,size:A,onClear:y,onDown:g}){const k=(0,p.A)(y),j=(0,p.A)(g!=null?g:(()=>{}));return(0,d.useMemo)(()=>({id:"clear",active:!0,ref:O,show:S,render:l=>{var{key:u}=l,f=W(l,["key"]);const E=x=>{f.onClick(x),k(x)};return(0,r.jsx)(B,Object.assign({},f,{onMouseDown:j,size:m._h[A],onClick:E}),u)}}),[O,k,j,S,A])}}),"./node_modules/.pnpm/@snack-uikit+markdown@0.5.50_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/markdown/dist/esm/components/MarkdownEditor/MarkdownEditor.js":((P,v,s)=>{s.d(v,{n:()=>k});var r=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=s.n(d),m=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=s("./node_modules/.pnpm/@snack-uikit+fields@0.53.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),i=s("./node_modules/.pnpm/@snack-uikit+fields@0.53.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),w=s("./node_modules/.pnpm/@snack-uikit+fields@0.53.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTextArea/FieldTextArea.js"),b=s("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/Switch.js"),_=s("./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),C=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const h={View:"view",Edit:"edit"};var t=s("./node_modules/.pnpm/@snack-uikit+markdown@0.5.50_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/markdown/dist/esm/components/Markdown/Markdown.js"),a=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=s.n(a),e=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=s.n(e),z=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=s.n(z),M=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=s.n(M),T=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=s.n(T),W=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=s.n(W),O=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+markdown@0.5.50_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/markdown/dist/esm/components/MarkdownEditor/styles.module.css"),S={};S.styleTagTransform=I(),S.setAttributes=L(),S.insert=D().bind(null,"head"),S.domAPI=o(),S.insertStyleElement=B();var A=n()(O.A,S);const y=O.A&&O.A.locals?O.A.locals:void 0;var g=function(j,l){var u={};for(var f in j)Object.prototype.hasOwnProperty.call(j,f)&&l.indexOf(f)<0&&(u[f]=j[f]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,f=Object.getOwnPropertySymbols(j);E<f.length;E++)l.indexOf(f[E])<0&&Object.prototype.propertyIsEnumerable.call(j,f[E])&&(u[f[E]]=j[f[E]]);return u};function k(j){var{value:l,onChange:u,defaultMode:f,className:E,error:x,label:R,required:U,onCodeCopyClick:V,components:X,resizable:G,placeholder:K,hint:Z,caption:N,spellCheck:Q,labelTooltip:$,labelTooltipPlacement:J,footer:H}=j,F=g(j,["value","onChange","defaultMode","className","error","label","required","onCodeCopyClick","components","resizable","placeholder","hint","caption","spellCheck","labelTooltip","labelTooltipPlacement","footer"]);const[Y,q]=(0,m.useState)(!1);return(0,m.useEffect)(()=>{q(f===h.View)},[f]),(0,r.jsxs)("div",Object.assign({className:p()(y.editor,E)},(0,C.z7)(F),{children:[(0,r.jsxs)("div",{className:y.control,children:[(0,r.jsxs)("div",{className:y.switchWrapper,children:[(0,r.jsx)(b.d,{checked:Y,onChange:q}),(0,r.jsx)(_.o.SansBodyM,{children:"\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"})]}),(0,r.jsx)(_.o.SansBodyS,{className:y.tip,children:"\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F Markdown"})]}),Y?(0,r.jsx)(c.m,{label:R,required:U,error:x,size:"m",children:(0,r.jsx)(t.o,{value:l,onCopyClick:V,className:y.viewWrapper,components:X,"data-validation":x?i.sv.Error:i.sv.Default})}):(0,r.jsx)(w.n,{value:l,onChange:u,label:R,placeholder:K,required:U,resizable:G,error:x,size:"m",hint:Z,labelTooltip:$,labelTooltipPlacement:J,footer:H,caption:N,spellCheck:Q})]}))}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/Switch.js":((P,v,s)=>{s.d(v,{d:()=>g});var r=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),p=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),m=s("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),c=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=s.n(c),w=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),b=s.n(w),_=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),C=s.n(_),h=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),t=s.n(h),a=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),n=s.n(a),e=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),o=s.n(e),z=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"),D={};D.styleTagTransform=o(),D.setAttributes=t(),D.insert=C().bind(null,"head"),D.domAPI=b(),D.insertStyleElement=n();var M=i()(z.A,D);const L=z.A&&z.A.locals?z.A.locals:void 0;function T(){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:L.spinner,children:(0,r.jsx)("path",{d:"M5 8C5 6.34315 6.34315 5 8 5",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round"})})}var B=s("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),W=s("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"),I=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"),O={};O.styleTagTransform=o(),O.setAttributes=t(),O.insert=C().bind(null,"head"),O.domAPI=b(),O.insertStyleElement=n();var S=i()(I.A,O);const A=I.A&&I.A.locals?I.A.locals:void 0;var y=function(k,j){var l={};for(var u in k)Object.prototype.hasOwnProperty.call(k,u)&&j.indexOf(u)<0&&(l[u]=k[u]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,u=Object.getOwnPropertySymbols(k);f<u.length;f++)j.indexOf(u[f])<0&&Object.prototype.propertyIsEnumerable.call(k,u[f])&&(l[u[f]]=k[u[f]]);return l};function g(k){var{inputRef:j,"data-test-id":l,showIcon:u,loading:f,size:E=m.SK.M}=k,x=y(k,["inputRef","data-test-id","showIcon","loading","size"]);return(0,r.jsx)(W.Q,Object.assign({},x,{size:E,"data-test-id":l,ref:j,render:function(U){const V=(0,B.V)(U);return(0,r.jsxs)("div",Object.assign({className:A.container},V,{children:[(0,r.jsx)("div",Object.assign({className:A.box},V)),(0,r.jsxs)("div",Object.assign({className:A.containerFlag},V,{children:[(0,r.jsx)("div",Object.assign({className:A.flag},V)),(u||f)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",Object.assign({className:A.flag_icon_off},V,{children:f?(0,r.jsx)(T,{}):(0,r.jsx)(d.A,{size:16})})),(0,r.jsx)("div",Object.assign({className:A.flag_icon_on},V,{children:f?(0,r.jsx)(T,{}):(0,r.jsx)(p.A,{size:16})}))]})]}))]}))}}))}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js":((P,v,s)=>{s.d(v,{Q:()=>O});var r=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=s.n(d),m=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=s("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),i=s("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),w=s("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),b=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=s.n(b),C=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=s.n(C),t=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),a=s.n(t),n=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),e=s.n(n),o=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=s.n(o),D=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=s.n(D),L=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css"),T={};T.styleTagTransform=M(),T.setAttributes=e(),T.insert=a().bind(null,"head"),T.domAPI=h(),T.insertStyleElement=z();var B=_()(L.A,T);const W=L.A&&L.A.locals?L.A.locals:void 0;var I=function(S,A){var y={};for(var g in S)Object.prototype.hasOwnProperty.call(S,g)&&A.indexOf(g)<0&&(y[g]=S[g]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var k=0,g=Object.getOwnPropertySymbols(S);k<g.length;k++)A.indexOf(g[k])<0&&Object.prototype.propertyIsEnumerable.call(S,g[k])&&(y[g[k]]=S[g[k]]);return y};const O=(0,m.forwardRef)(function(A,y){var{render:g,checked:k,defaultChecked:j,onChange:l,onBlur:u,onFocus:f,disabled:E,className:x,size:R=i.SK.M,mode:U=i.g.Checkbox,onKeyUp:V,"data-test-id":X}=A,G=I(A,["render","checked","defaultChecked","onChange","onBlur","onFocus","disabled","className","size","mode","onKeyUp","data-test-id"]);const[K,Z]=(0,c.iC)(k,!!j,l),[N,Q]=(0,m.useState)(!1),[$,J]=(0,m.useState)(!1),H={disabled:!!E,focusVisible:N,checked:K,hover:$,size:R};return(0,r.jsxs)("span",Object.assign({role:U,className:p()(x,W.toggleLayout),"data-size":R,"data-test-id":X,onMouseEnter:()=>J(!0),onMouseLeave:()=>J(!1),onKeyUp:V},(0,w.V)(H),{children:[g(H),(0,r.jsx)("input",Object.assign({},G,{"data-test-id":`${X}-native-input`,ref:y,type:U,className:W.togglePrivate,checked:K,disabled:E,onChange:F=>Z(F.target.checked),onFocus:F=>{Q(F.target.matches(":focus-visible")),f==null||f(F)},onBlur:F=>{Q(!1),u==null||u(F)}}))]}))})}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js":((P,v,s)=>{s.d(v,{SK:()=>d,ds:()=>m,g:()=>r,hZ:()=>p});const r={Checkbox:"checkbox",Radio:"radio"},d={S:"s",M:"m"},p={Star:"star",Heart:"heart"},m={Single:"single",Multiple:"multiple"}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js":((P,v,s)=>{s.d(v,{J:()=>p,V:()=>d});var r=s("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js");function d(m){return Object.entries(m).reduce(function(c,[i,w]){return c[`data-${i.toLowerCase()}`]=w,c},{})}function p(m){switch(m){case r.SK.S:return 16;case r.SK.M:default:return 24}}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.53.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonCopyValue/styles.module.css":((P,v,s)=>{s.d(v,{A:()=>i});var r=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(r),p=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=s.n(p),c=m()(d());c.push([P.id,`.buttonCopyValue--wAbb_{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonCopyValue--wAbb_[data-size=s]{
  width:var(--size-fields-buttons-s, 16px);
  height:var(--size-fields-buttons-s, 16px);
  border-radius:var(--radius-fields-buttons-s, 8px);
}
.buttonCopyValue--wAbb_[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.buttonCopyValue--wAbb_[data-size=m]{
  width:var(--size-fields-buttons-m, 24px);
  height:var(--size-fields-buttons-m, 24px);
  border-radius:var(--radius-fields-buttons-m, 12px);
}
.buttonCopyValue--wAbb_[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonCopyValue--wAbb_:hover{
  cursor:pointer;
  color:var(--sys-neutral-text-support, #6d707f);
}
.buttonCopyValue--wAbb_:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-support, #6d707f);
  outline-color:var(--sys-available-complementary, #1c1c24);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonCopyValue--wAbb_:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.buttonCopyValue--wAbb_[data-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),c.locals={buttonCopyValue:"buttonCopyValue--wAbb_"};const i=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css":((P,v,s)=>{s.d(v,{A:()=>i});var r=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(r),p=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=s.n(p),c=m()(d());c.push([P.id,`.buttonClearValue--sjVPq{
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
}`,""]),c.locals={buttonClearValue:"buttonClearValue--sjVPq"};const i=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+markdown@0.5.50_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/markdown/dist/esm/components/MarkdownEditor/styles.module.css":((P,v,s)=>{s.d(v,{A:()=>i});var r=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(r),p=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=s.n(p),c=m()(d());c.push([P.id,`.viewWrapper--mjz6B{
  padding-top:var(--space-markdown-preview-padding, 14px);
  padding-bottom:var(--space-markdown-preview-padding, 14px);
  padding-left:var(--space-markdown-preview-padding, 14px);
  padding-right:var(--space-markdown-preview-padding, 14px);
  border-radius:var(--radius-markdown-preview-container, 4px);
  border-width:var(--border-width-markdown-preview-container, 1px);
}
.viewWrapper--mjz6B[data-validation=default]{
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.viewWrapper--mjz6B[data-validation=default]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-decor-hovered, #b3deca);
}
.viewWrapper--mjz6B[data-validation=default]:focus-within:not([data-disabled]), .viewWrapper--mjz6B[data-validation=default][data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-accent-default, #389f74);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}
.viewWrapper--mjz6B[data-validation=error]{
  background-color:var(--sys-red-background1-level, #fef6f3);
  border-color:var(--sys-red-decor-default, #fdd6cd);
}
.viewWrapper--mjz6B[data-validation=error]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-decor-hovered, #fac1b3);
}
.viewWrapper--mjz6B[data-validation=error]:focus-within:not([data-disabled]), .viewWrapper--mjz6B[data-validation=error][data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-accent-default, #cb3f3e);
  outline-color:var(--sys-red-decor-activated, #fbab99);
}
.viewWrapper--mjz6B{
  border-style:solid;
}

.editor--ayHU4{
  display:flex;
  flex-direction:column;
  gap:var(--dimension-1m, 8px);
}

.control--kdJuN{
  display:flex;
  gap:var(--dimension-1m, 8px);
  align-items:center;
  justify-content:space-between;
}

.switchWrapper--kw4Di{
  display:flex;
  gap:var(--dimension-1m, 8px);
  align-items:center;
}

.tip--hkRur{
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),c.locals={viewWrapper:"viewWrapper--mjz6B",editor:"editor--ayHU4",control:"control--kdJuN",switchWrapper:"switchWrapper--kw4Di",tip:"tip--hkRur"};const i=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css":((P,v,s)=>{s.d(v,{A:()=>i});var r=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(r),p=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=s.n(p),c=m()(d());c.push([P.id,`.container--quzAo{
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
}
.container--quzAo[data-size=s]{
  width:var(--size-toggles-s-container-switch-width, 24px);
  height:var(--size-toggles-s-container, 16px);
  border-radius:var(--radius-toggles-s-box-switch, 16px);
}
.container--quzAo[data-size=m]{
  width:var(--size-toggles-m-container-switch-width, 36px);
  height:var(--size-toggles-m-container, 24px);
  border-radius:var(--radius-toggles-m-box-switch, 16px);
}
.container--quzAo[data-focusvisible=true]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
}
.container--quzAo[data-focusvisible=true][data-size=s]{
  outline-offset:var(--border-width-state-focus-s, 2px);
}
.container--quzAo{
  position:relative;
}

.box--z5Z9n{
  position:relative;
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.box--z5Z9n[data-size=s]{
  width:var(--size-toggles-s-box-switch-width, 24px);
  height:var(--size-toggles-s-box-switch-height, 16px);
  border-radius:var(--radius-toggles-s-box-switch, 16px);
}
.box--z5Z9n[data-size=m]{
  width:var(--size-toggles-m-box-switch-width, 32px);
  height:var(--size-toggles-m-box-switch-height, 20px);
  border-radius:var(--radius-toggles-m-box-switch, 16px);
}
.box--z5Z9n[data-hover=true]{
  background-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.box--z5Z9n[data-disabled=true]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.box--z5Z9n[data-checked=true]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.box--z5Z9n[data-checked=true][data-hover=true]{
  background-color:var(--sys-primary-accent-hovered, #37946e);
}
.box--z5Z9n[data-checked=true][data-disabled=true]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.containerFlag--JSDIA{
  position:absolute;
  left:0;
  display:flex;
  align-items:center;
  justify-content:center;
  transition-timing-function:linear;
  transition-duration:0.1s;
  transition-property:left;
}
.containerFlag--JSDIA[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
}
.containerFlag--JSDIA[data-size=s][data-checked=true]{
  left:calc(100% - var(--size-toggles-s-container, 16px));
}
.containerFlag--JSDIA[data-size=m]{
  width:var(--size-toggles-m-container, 24px);
  height:var(--size-toggles-m-container, 24px);
}
.containerFlag--JSDIA[data-size=m][data-checked=true]{
  left:calc(100% - var(--size-toggles-m-container, 24px));
}

.flag--zOypq{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}
.flag--zOypq[data-size=s]{
  border-radius:var(--radius-toggles-s-box-switch, 16px);
  width:var(--size-toggles-s-flag-switch, 12px);
  height:var(--size-toggles-s-flag-switch, 12px);
}
.flag--zOypq[data-size=m]{
  border-radius:var(--radius-toggles-m-box-switch, 16px);
  width:var(--size-toggles-m-flag-switch, 16px);
  height:var(--size-toggles-m-flag-switch, 16px);
}
.flag--zOypq[data-focusvisible=true], .flag--zOypq[data-hover=true]{
  background-color:var(--sys-neutral-on-accent, #ffffff);
}
.flag--zOypq[data-disabled=true]{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}

.flag_icon_off--m140A{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  fill:transparent;
  transition:opacity 0.1s linear;
}
.flag_icon_off--m140A[data-hover=true]{
  color:var(--sys-neutral-accent-hovered, #6d707f);
}
.flag_icon_off--m140A[data-checked=true]{
  color:var(--sys-primary-accent-default, #389f74);
}
.flag_icon_off--m140A[data-checked=true][data-hover=true]{
  color:var(--sys-primary-accent-hovered, #37946e);
}
.flag_icon_off--m140A[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_off--m140A[data-disabled=true][data-hover=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_off--m140A{
  opacity:1;
}
.flag_icon_off--m140A[data-checked=true]{
  opacity:0;
}

.flag_icon_on--Imk53{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  fill:transparent;
  transition:opacity 0.1s linear;
}
.flag_icon_on--Imk53[data-hover=true]{
  color:var(--sys-neutral-accent-hovered, #6d707f);
}
.flag_icon_on--Imk53[data-checked=true]{
  color:var(--sys-primary-accent-default, #389f74);
}
.flag_icon_on--Imk53[data-checked=true][data-hover=true]{
  color:var(--sys-primary-accent-hovered, #37946e);
}
.flag_icon_on--Imk53[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_on--Imk53[data-disabled=true][data-hover=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_on--Imk53{
  opacity:0;
}
.flag_icon_on--Imk53[data-checked=true]{
  opacity:1;
}`,""]),c.locals={container:"container--quzAo",box:"box--z5Z9n",containerFlag:"containerFlag--JSDIA",flag:"flag--zOypq",flag_icon_off:"flag_icon_off--m140A",flag_icon_on:"flag_icon_on--Imk53"};const i=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css":((P,v,s)=>{s.d(v,{A:()=>i});var r=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(r),p=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=s.n(p),c=m()(d());c.push([P.id,`.toggleLayout--kDjtQ{
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
}`,""]),c.locals={toggleLayout:"toggleLayout--kDjtQ",togglePrivate:"togglePrivate--uT5Dy"};const i=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css":((P,v,s)=>{s.d(v,{A:()=>i});var r=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=s.n(r),p=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),m=s.n(p),c=m()(d());c.push([P.id,`.spinner--JetpG{
  pointer-events:none;
  width:var(--dimension-2m, 16px);
  height:var(--dimension-2m, 16px);
  animation:spin--LixZz 1s ease-in-out infinite;
}
.spinner--JetpG > path{
  stroke:currentColor;
}
@keyframes spin--LixZz{
  to{
    transform:rotate(360deg);
  }
}`,""]),c.locals={spinner:"spinner--JetpG",spin:"spin--LixZz"};const i=c}),"./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js":((P,v,s)=>{s.d(v,{A:()=>r});function r(){for(var d=[],p=0;p<arguments.length;p++)d[p]=arguments[p];var m=d.filter(Boolean);if(m.length<=1){var c=m[0];return c||null}return function(w){m.forEach(function(b){typeof b=="function"?b(w):b&&(b.current=w)})}}})}]);})();
