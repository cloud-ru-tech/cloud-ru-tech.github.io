(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3476,8799],{"./node_modules/.pnpm/@snack-uikit+divider@3.2.3_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js":((W,k,e)=>{"use strict";e.d(k,{c:()=>C});var d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),A=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),j=e.n(A),O=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const v={Horizontal:"horizontal",Vertical:"vertical"},h={Light:"light",Regular:"regular"};var F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(F),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=e.n(x),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),m=e.n(L),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),b=e.n(M),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=e.n(n),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n(H),K=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.3_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),w={};w.styleTagTransform=R(),w.setAttributes=b(),w.insert=m().bind(null,"head"),w.domAPI=B(),w.insertStyleElement=y();var Q=I()(K.A,w);const c=K.A&&K.A.locals?K.A.locals:void 0;var S=function(a,s){var _={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&s.indexOf(r)<0&&(_[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,r=Object.getOwnPropertySymbols(a);g<r.length;g++)s.indexOf(r[g])<0&&Object.prototype.propertyIsEnumerable.call(a,r[g])&&(_[r[g]]=a[r[g]]);return _};function C(a){var{className:s,orientation:_=v.Horizontal,weight:r=h.Regular}=a,g=S(a,["className","orientation","weight"]);const i=Object.assign(Object.assign({},(0,O.z7)(g)),{"data-weight":r});return _===v.Horizontal?(0,d.jsx)("hr",Object.assign({className:j()(c.horizontal,s)},i)):(0,d.jsx)("div",Object.assign({className:j()(c.vertical,s)},i))}}),"./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/DropZone/DropZone.js":((W,k,e)=>{"use strict";e.d(k,{w:()=>g});var d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),A=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),j=e.n(A),O=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),h=e("./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/constants.js"),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(F),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=e.n(x),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),m=e.n(L),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),b=e.n(M),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=e.n(n),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n(H),K=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/styles.module.css"),w={};w.styleTagTransform=R(),w.setAttributes=b(),w.insert=m().bind(null,"head"),w.domAPI=B(),w.insertStyleElement=y();var Q=I()(K.A,w);const c=K.A&&K.A.locals?K.A.locals:void 0;var S=function(i,p){var E={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&p.indexOf(o)<0&&(E[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,o=Object.getOwnPropertySymbols(i);u<o.length;u++)p.indexOf(o[u])<0&&Object.prototype.propertyIsEnumerable.call(i,o[u])&&(E[o[u]]=i[o[u]]);return E};function C(i){var{disabled:p=!1,className:E,isOver:o,onDragLeave:u,onDragOver:P,onDrop:N,mode:X=h.G.Multiple,description:U,title:Y,onFilesUpload:Z,accept:l}=i,D=S(i,["disabled","className","isOver","onDragLeave","onDragOver","onDrop","mode","description","title","onFilesUpload","accept"]);const T=(0,O.useRef)(null),t=()=>{var z;p||(z=T.current)===null||z===void 0||z.click()},f=({target:{files:z}})=>{if(!z)return;const $=Array.from(z);Z($)},G=z=>{if(p)return;z.preventDefault();const $=Array.from(z.dataTransfer.files);N==null||N(z),Z(X===h.G.Single?[$[0]]:$)};return(0,d.jsxs)("button",Object.assign({className:j()(E,c.container),type:"button"},(0,v.z7)(D),{"data-over":o||void 0,"data-disabled":p||void 0,onClick:t,tabIndex:0,onDrop:G,onDragLeave:u,onDragOver:P,children:[(0,d.jsx)("h4",{"data-test-id":"title",className:c.title,children:Y}),U&&(0,d.jsx)("div",{"data-test-id":"description",className:c.description,children:U}),(0,d.jsx)("input",{"data-test-id":"file-input",className:c.hidden,onChange:f,multiple:X===h.G.Multiple,ref:T,type:"file",accept:l,onClick:z=>{z.target.value=""}})]}))}var a=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),s=e.n(a);function _(i){const[p,E]=(0,O.useState)(!1),o=(0,O.useMemo)(()=>s()(E,5),[]),u=(0,O.useCallback)(U=>{i||(U.preventDefault(),o(!1))},[o,i]),P=(0,O.useCallback)(U=>{i||(U.preventDefault(),o(!0))},[o,i]),N=(0,O.useCallback)(U=>{i||(U.preventDefault(),o(!1))},[o,i]);return(0,O.useEffect)(()=>()=>o.cancel(),[o]),{events:{onDragLeave:u,onDragOver:P,onDrop:N},isOver:p}}var r=function(i,p){var E={};for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&p.indexOf(o)<0&&(E[o]=i[o]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,o=Object.getOwnPropertySymbols(i);u<o.length;u++)p.indexOf(o[u])<0&&Object.prototype.propertyIsEnumerable.call(i,o[u])&&(E[o[u]]=i[o[u]]);return E};function g(i){var p=r(i,[]);const{disabled:E=!1}=p,o=r(p,["disabled"]),{events:u,isOver:P}=_(E);return(0,d.jsx)(C,Object.assign({},u,o,{isOver:P,disabled:E}))}}),"./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/FileUpload/FileUpload.js":((W,k,e)=>{"use strict";e.d(k,{e:()=>c});var d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),A=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),O=e("./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/constants.js"),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(v),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=e.n(F),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),B=e.n(x),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),m=e.n(L),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),b=e.n(M),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),y=e.n(n),H=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/FileUpload/styles.module.css"),R={};R.styleTagTransform=y(),R.setAttributes=m(),R.insert=B().bind(null,"head"),R.domAPI=I(),R.insertStyleElement=b();var K=h()(H.A,R);const w=H.A&&H.A.locals?H.A.locals:void 0;var Q=function(S,C){var a={};for(var s in S)Object.prototype.hasOwnProperty.call(S,s)&&C.indexOf(s)<0&&(a[s]=S[s]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,s=Object.getOwnPropertySymbols(S);_<s.length;_++)C.indexOf(s[_])<0&&Object.prototype.propertyIsEnumerable.call(S,s[_])&&(a[s[_]]=S[s[_]]);return a};function c(S){var C,{mode:a=O.G.Multiple,onFilesUpload:s,accept:_,children:r}=S,g=Q(S,["mode","onFilesUpload","accept","children"]);const i=(0,A.useRef)(null),p=u=>P=>{i.current&&i.current.click(),u==null||u(P)},E=({target:{files:u}})=>{if(!u)return;const P=Array.from(u);s(P)},o=u=>{u.target.value=""};return(0,d.jsxs)(d.Fragment,{children:[(0,A.cloneElement)(r,{onClick:p((C=r.props)===null||C===void 0?void 0:C.onClick)}),(0,d.jsx)("input",Object.assign({onChange:E,multiple:a===O.G.Multiple,ref:i,className:w.hiddenInput,type:"file",accept:_,onClick:o},(0,j.z7)(g)))]})}}),"./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/constants.js":((W,k,e)=>{"use strict";e.d(k,{G:()=>d});const d={Single:"single",Multiple:"multiple"}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/arrowUp/index.js":((W,k,e)=>{"use strict";e.d(k,{A:()=>L});var d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),A=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=function(m,M){var b={};for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&M.indexOf(n)<0&&(b[n]=m[n]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,n=Object.getOwnPropertySymbols(m);y<n.length;y++)M.indexOf(n[y])<0&&Object.prototype.propertyIsEnumerable.call(m,n[y])&&(b[n[y]]=m[n[y]]);return b};const v=A.forwardRef((m,M)=>{var{size:b=24}=m,n=j(m,["size"]);n.width=void 0,n.height=void 0;const y="-arrow-up-s";return typeof b=="number"&&(n.style||(n.style={}),n.style.width=b+"px",n.style.height=b+"px"),(0,d.jsx)("svg",Object.assign({ref:M,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+y},n,{children:(0,d.jsx)("use",{href:"#snack-uikit-"+y.substring(1)})}))});var h=function(m,M){var b={};for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&M.indexOf(n)<0&&(b[n]=m[n]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,n=Object.getOwnPropertySymbols(m);y<n.length;y++)M.indexOf(n[y])<0&&Object.prototype.propertyIsEnumerable.call(m,n[y])&&(b[n[y]]=m[n[y]]);return b};const I=A.forwardRef((m,M)=>{var{size:b=24}=m,n=h(m,["size"]);n.width=void 0,n.height=void 0;const y="-arrow-up-xs";return typeof b=="number"&&(n.style||(n.style={}),n.style.width=b+"px",n.style.height=b+"px"),(0,d.jsx)("svg",Object.assign({ref:M,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+y},n,{children:(0,d.jsx)("use",{href:"#snack-uikit-"+y.substring(1)})}))});var x=function(m,M){var b={};for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&M.indexOf(n)<0&&(b[n]=m[n]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,n=Object.getOwnPropertySymbols(m);y<n.length;y++)M.indexOf(n[y])<0&&Object.prototype.propertyIsEnumerable.call(m,n[y])&&(b[n[y]]=m[n[y]]);return b};const L=(0,A.forwardRef)((m,M)=>{var{size:b=24}=m,n=x(m,["size"]);return Number(b)>=20?(0,d.jsx)(v,Object.assign({ref:M,size:b},n)):(0,d.jsx)(I,Object.assign({ref:M,size:b},n))})}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js":((W,k,e)=>{"use strict";e.d(k,{o:()=>i});var d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),A=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),j=e.n(A),O=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),v=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),h=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),F=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),I=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const x={S:"s",Xs:"xs"},B={[x.Xs]:16,[x.S]:24},L={Hover:"hover",Click:"click"},m={[L.Hover]:I.tr.HoverAndFocusVisible,[L.Click]:I.tr.ClickAndFocusVisible};var M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(M),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),y=e.n(n),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),R=e.n(H),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),w=e.n(K),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),c=e.n(Q),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(S),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),s={};s.styleTagTransform=C(),s.setAttributes=w(),s.insert=R().bind(null,"head"),s.domAPI=y(),s.insertStyleElement=c();var _=b()(a.A,s);const r=a.A&&a.A.locals?a.A.locals:void 0;var g=function(p,E){var o={};for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&E.indexOf(u)<0&&(o[u]=p[u]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,u=Object.getOwnPropertySymbols(p);P<u.length;P++)E.indexOf(u[P])<0&&Object.prototype.propertyIsEnumerable.call(p,u[P])&&(o[u[P]]=p[u[P]]);return o};function i(p){var{size:E=x.Xs,trigger:o=L.Hover,tooltipClassname:u,className:P,open:N,onOpenChange:X,tabIndex:U=0,triggerSupportProps:Y={}}=p,Z=g(p,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[l,D]=(0,O.iC)(N,!1,X);return(0,d.jsx)(F.m,Object.assign({},Z,{className:u,open:l,onOpenChange:D,trigger:m[o],children:({getReferenceProps:T,ref:t})=>(0,d.jsx)("span",Object.assign({},T(),(0,h.z7)(Y),{ref:t,"data-size":E,"data-opened":l,"data-trigger":o,className:j()(r.questionTooltip,P),role:"button",tabIndex:U,children:(0,d.jsx)(v.A,{size:B[E]})}))}))}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((W,k,e)=>{"use strict";e.d(k,{m:()=>Z});var d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),A=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),j=e.n(A),O=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),v=e.n(O),h=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),F=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),I=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const x=l=>l?l.offsetHeight<l.scrollHeight||l.offsetWidth<l.scrollWidth:!1,B=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],L="...",m=({text:l,element:D,truncatedElement:T})=>{if(D&&T&&x(D)){const t=D.scrollWidth/l.length;let f=l;for(const{potentialDelimiterWidth:G,leftHalfDelta:z,rightHalfDelta:$}of B){const V=Math.floor((D.offsetWidth/t-G)/2),q=l.slice(0,V-z),ee=l.slice(l.length-V+$,l.length);if(f=`${q}${L}${ee}`,T.innerHTML=f,T.scrollWidth<=D.offsetWidth-1)break}return f}return l};var M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(M),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),y=e.n(n),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),R=e.n(H),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),w=e.n(K),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),c=e.n(Q),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(S),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),s={};s.styleTagTransform=C(),s.setAttributes=w(),s.insert=R().bind(null,"head"),s.domAPI=y(),s.insertStyleElement=c();var _=b()(a.A,s);const r=a.A&&a.A.locals?a.A.locals:void 0;var g=function(l,D){var T={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&D.indexOf(t)<0&&(T[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,t=Object.getOwnPropertySymbols(l);f<t.length;f++)D.indexOf(t[f])<0&&Object.prototype.propertyIsEnumerable.call(l,t[f])&&(T[t[f]]=l[t[f]]);return T};function i(l){var{text:D,className:T,tooltipClassName:t,hideTooltip:f,placement:G}=l,z=g(l,["text","className","tooltipClassName","hideTooltip","placement"]);const[$,V]=(0,h.useState)(!1),[q,ee]=(0,h.useState)(D),J=(0,h.useRef)(null),te=(0,h.useRef)(null);(0,h.useEffect)(()=>{const se=v()(()=>{ee(m({element:J.current,truncatedElement:te.current,text:D})),V(x(J.current))},50);se();const ne=new ResizeObserver(se);return J.current&&ne.observe(J.current),()=>{ne.disconnect()}},[$,D,f]);const oe=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{ref:J,className:r.fullText,"data-test-id":"full-text",children:D}),(0,d.jsx)("span",{ref:te,className:r.truncatedText,"data-test-id":"truncated-text",children:q})]});return(0,d.jsx)("span",Object.assign({className:j()(r.wrapper,T)},(0,I.z7)(z),{children:$&&!f?(0,d.jsx)(F.m,{tip:D,placement:G,hoverDelayOpen:500,triggerClassName:r.textContainer,className:t,children:oe}):oe}))}var p=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),o={};o.styleTagTransform=C(),o.setAttributes=w(),o.insert=R().bind(null,"head"),o.domAPI=y(),o.insertStyleElement=c();var u=b()(E.A,o);const P=E.A&&E.A.locals?E.A.locals:void 0;var N=function(l,D){var T={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&D.indexOf(t)<0&&(T[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,t=Object.getOwnPropertySymbols(l);f<t.length;f++)D.indexOf(t[f])<0&&Object.prototype.propertyIsEnumerable.call(l,t[f])&&(T[t[f]]=l[t[f]]);return T};function X(l){var{text:D,className:T,tooltipClassName:t,hideTooltip:f,maxLines:G=1,placement:z}=l,$=N(l,["text","className","tooltipClassName","hideTooltip","maxLines","placement"]);const V=(0,h.useRef)(null),[q,ee]=(0,h.useState)(!1),J=(0,h.useCallback)(()=>{ee(x(V.current))},[]);(0,p.N)(()=>{V.current&&J()},[D,J]),(0,h.useEffect)(()=>{const oe=v()(()=>{J()},50),se=new ResizeObserver(oe);return V.current&&(J(),se.observe(V.current)),()=>{se.disconnect()}},[q,f,J]);const te=(0,d.jsx)("span",Object.assign({ref:V,className:j()(G>1?P.text2AndMoreLines:P.text1Line,T,{[P.ellipsis]:!V.current||q}),style:{"--max-lines":G}},(0,I.z7)($),{children:D}));return q&&!f?(0,d.jsx)(F.m,{tip:D,placement:z,hoverDelayOpen:500,className:t,triggerClassName:P.tooltipTrigger,children:te}):te}const U={Middle:"middle",End:"end"};var Y=function(l,D){var T={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&D.indexOf(t)<0&&(T[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,t=Object.getOwnPropertySymbols(l);f<t.length;f++)D.indexOf(t[f])<0&&Object.prototype.propertyIsEnumerable.call(l,t[f])&&(T[t[f]]=l[t[f]]);return T};function Z(l){var{variant:D=U.End}=l,T=Y(l,["variant"]);switch(D){case U.Middle:return(0,d.jsx)(i,Object.assign({},T));case U.End:default:return(0,d.jsx)(X,Object.assign({},T))}}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((W,k,e)=>{"use strict";e.d(k,{sg:()=>v,z7:()=>F});const d=/^data-test-/,A=/^(data|aria)-/;function j(I,x){return Object.keys(I).filter(B=>!B.match(x)).reduce((B,L)=>Object.assign(Object.assign({},B),{[L]:I[L]}),{})}function O(I,x){return Object.keys(I).reduce((B,L)=>(L.match(x)&&(B[L]=I[L]),B),{})}function v(I){return j(I,A)}function h(I){return O(I,d)}function F(I){return O(I,A)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.3_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css":((W,k,e)=>{"use strict";e.d(k,{A:()=>h});var d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),A=e.n(d),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(j),v=O()(A());v.push([W.id,`.horizontal--Pn0tT{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  width:100%;
}
.horizontal--Pn0tT[data-weight=regular]{
  height:1px;
}
.horizontal--Pn0tT[data-weight=light]{
  height:0.5px;
}

.vertical--rP8px{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  height:100%;
}
.vertical--rP8px[data-weight=regular]{
  width:1px;
}
.vertical--rP8px[data-weight=light]{
  width:0.5px;
}`,""]),v.locals={horizontal:"horizontal--Pn0tT",vertical:"vertical--rP8px"};const h=v}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/components/FileUpload/styles.module.css":((W,k,e)=>{"use strict";e.d(k,{A:()=>h});var d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),A=e.n(d),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(j),v=O()(A());v.push([W.id,`.hiddenInput--_UZi2{
  display:none;
}`,""]),v.locals={hiddenInput:"hiddenInput--_UZi2"};const h=v}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drop-zone@0.9.6_lodash.debounce@4.0.8_react@18.2.0/node_modules/@snack-uikit/drop-zone/dist/esm/helperComponents/PrivateDropZone/styles.module.css":((W,k,e)=>{"use strict";e.d(k,{A:()=>h});var d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),A=e.n(d),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(j),v=O()(A());v.push([W.id,`.hidden--ykMlQ{
  display:none;
}

.container--LKYnI{
  border-radius:var(--radius-drop-zone-single, 16px);
  border-width:var(--border-drop-zone-single-border-width, 2px);
  border-style:var(--border-drop-zone-single-border-style, dashed);
  padding-top:var(--spacing-drop-zone-padding-vertical, 8px);
  padding-bottom:var(--spacing-drop-zone-padding-vertical, 8px);
  padding-left:var(--spacing-drop-zone-padding-horizontal, 8px);
  padding-right:var(--spacing-drop-zone-padding-horizontal, 8px);
  gap:var(--spacing-drop-zone-gap, 4px);
  cursor:pointer;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  width:100%;
  min-width:174px;
  min-height:80px;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--LKYnI .title--jLLad{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
  margin:0;
  color:var(--sys-neutral-text-main, #41424e);
}
.container--LKYnI .description--_ncOi{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.container--LKYnI:hover{
  border-color:var(--sys-primary-accent-hovered, #6851a6);
}
.container--LKYnI:hover .description--_ncOi{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--LKYnI:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-primary-accent-default, #794ed3);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.container--LKYnI:focus-visible .description--_ncOi{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--LKYnI[data-over]{
  background-color:var(--sys-primary-background, #f6effe);
  border-color:var(--sys-primary-accent-hovered, #6851a6);
}
.container--LKYnI[data-over] .title--jLLad{
  color:var(--sys-primary-text-main, #382a62);
}
.container--LKYnI[data-over] .description--_ncOi{
  color:var(--sys-primary-text-support, #5b4796);
}
.container--LKYnI[data-disabled]{
  cursor:not-allowed;
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.container--LKYnI[data-disabled] .title--jLLad{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.container--LKYnI[data-disabled] .description--_ncOi{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),v.locals={hidden:"hidden--ykMlQ",container:"container--LKYnI",title:"title--jLLad",description:"description--_ncOi"};const h=v}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css":((W,k,e)=>{"use strict";e.d(k,{A:()=>h});var d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),A=e.n(d),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(j),v=O()(A());v.push([W.id,`.questionTooltip--h1kEX{
  cursor:pointer;
  display:inline-flex;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background:none;
  border:0;
}
.questionTooltip--h1kEX:hover{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.questionTooltip--h1kEX:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.questionTooltip--h1kEX[data-trigger=click][data-opened=true]{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--h1kEX[data-trigger=click]:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--h1kEX[data-trigger=click]:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--h1kEX[data-trigger=click]:focus-visible{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--h1kEX[data-size=xs] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.questionTooltip--h1kEX[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}`,""]),v.locals={questionTooltip:"questionTooltip--h1kEX"};const h=v}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((W,k,e)=>{"use strict";e.d(k,{A:()=>h});var d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),A=e.n(d),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(j),v=O()(A());v.push([W.id,`.text1Line--nxsM4{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--bIdz_{
  text-overflow:ellipsis;
}

.text2AndMoreLines--uAkIX{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--caCRb{
  display:grid;
}`,""]),v.locals={text1Line:"text1Line--nxsM4",ellipsis:"ellipsis--bIdz_",text2AndMoreLines:"text2AndMoreLines--uAkIX",tooltipTrigger:"tooltipTrigger--caCRb"};const h=v}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((W,k,e)=>{"use strict";e.d(k,{A:()=>h});var d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),A=e.n(d),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(j),v=O()(A());v.push([W.id,`.wrapper--PsTe2{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--SgqFo{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--jb0gd{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--Sq9My{
  display:inline-flex;
}`,""]),v.locals={wrapper:"wrapper--PsTe2",truncatedText:"truncatedText--SgqFo",fullText:"fullText--jb0gd",textContainer:"textContainer--Sq9My"};const h=v}),"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js":((W,k,e)=>{var d="Expected a function",A=NaN,j="[object Symbol]",O=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,F=/^0o[0-7]+$/i,I=parseInt,x=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,B=typeof self=="object"&&self&&self.Object===Object&&self,L=x||B||Function("return this")(),m=Object.prototype,M=m.toString,b=Math.max,n=Math.min,y=function(){return L.Date.now()};function H(c,S,C){var a,s,_,r,g,i,p=0,E=!1,o=!1,u=!0;if(typeof c!="function")throw new TypeError(d);S=Q(S)||0,R(C)&&(E=!!C.leading,o="maxWait"in C,_=o?b(Q(C.maxWait)||0,S):_,u="trailing"in C?!!C.trailing:u);function P(t){var f=a,G=s;return a=s=void 0,p=t,r=c.apply(G,f),r}function N(t){return p=t,g=setTimeout(Y,S),E?P(t):r}function X(t){var f=t-i,G=t-p,z=S-f;return o?n(z,_-G):z}function U(t){var f=t-i,G=t-p;return i===void 0||f>=S||f<0||o&&G>=_}function Y(){var t=y();if(U(t))return Z(t);g=setTimeout(Y,X(t))}function Z(t){return g=void 0,u&&a?P(t):(a=s=void 0,r)}function l(){g!==void 0&&clearTimeout(g),p=0,a=i=s=g=void 0}function D(){return g===void 0?r:Z(y())}function T(){var t=y(),f=U(t);if(a=arguments,s=this,i=t,f){if(g===void 0)return N(i);if(o)return g=setTimeout(Y,S),P(i)}return g===void 0&&(g=setTimeout(Y,S)),r}return T.cancel=l,T.flush=D,T}function R(c){var S=typeof c;return!!c&&(S=="object"||S=="function")}function K(c){return!!c&&typeof c=="object"}function w(c){return typeof c=="symbol"||K(c)&&M.call(c)==j}function Q(c){if(typeof c=="number")return c;if(w(c))return A;if(R(c)){var S=typeof c.valueOf=="function"?c.valueOf():c;c=R(S)?S+"":S}if(typeof c!="string")return c===0?c:+c;c=c.replace(O,"");var C=h.test(c);return C||F.test(c)?I(c.slice(2),C?2:8):v.test(c)?A:+c}W.exports=H}),"./node_modules/.pnpm/react-textarea-autosize@8.5.9_@types+react@18.2.79_react@18.2.0/node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js":((W,k,e)=>{"use strict";e.d(k,{A:()=>C});var d=e("./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/extends.js"),A=e("./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),j=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("./node_modules/.pnpm/use-latest@1.3.0_@types+react@18.2.79_react@18.2.0/node_modules/use-latest/dist/use-latest.esm.js"),v=e("./node_modules/.pnpm/use-composed-ref@1.4.0_@types+react@18.2.79_react@18.2.0/node_modules/use-composed-ref/dist/use-composed-ref.esm.js"),h={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},F=function(s){Object.keys(h).forEach(function(_){s.style.setProperty(_,h[_],"important")})},I=F,x=null,B=function(s,_){var r=s.scrollHeight;return _.sizingStyle.boxSizing==="border-box"?r+_.borderSize:r-_.paddingSize};function L(a,s,_,r){_===void 0&&(_=1),r===void 0&&(r=1/0),x||(x=document.createElement("textarea"),x.setAttribute("tabindex","-1"),x.setAttribute("aria-hidden","true"),I(x)),x.parentNode===null&&document.body.appendChild(x);var g=a.paddingSize,i=a.borderSize,p=a.sizingStyle,E=p.boxSizing;Object.keys(p).forEach(function(X){var U=X;x.style[U]=p[U]}),I(x),x.value=s;var o=B(x,a);x.value=s,o=B(x,a),x.value="x";var u=x.scrollHeight-g,P=u*_;E==="border-box"&&(P=P+g+i),o=Math.max(P,o);var N=u*r;return E==="border-box"&&(N=N+g+i),o=Math.min(N,o),[o,u]}var m=function(){},M=function(s,_){return s.reduce(function(r,g){return r[g]=_[g],r},{})},b=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],n=!!document.documentElement.currentStyle,y=function(s){var _=window.getComputedStyle(s);if(_===null)return null;var r=M(b,_),g=r.boxSizing;if(g==="")return null;n&&g==="border-box"&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var i=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),p=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:i,borderSize:p}},H=y;function R(a,s,_){var r=(0,O.A)(_);j.useLayoutEffect(function(){var g=function(p){return r.current(p)};if(a)return a.addEventListener(s,g),function(){return a.removeEventListener(s,g)}},[])}var K=function(s,_){R(document.body,"reset",function(r){s.current.form===r.target&&_(r)})},w=function(s){R(window,"resize",s)},Q=function(s){R(document.fonts,"loadingdone",s)},c=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],S=function(s,_){var r=s.cacheMeasurements,g=s.maxRows,i=s.minRows,p=s.onChange,E=p===void 0?m:p,o=s.onHeightChange,u=o===void 0?m:o,P=(0,A.A)(s,c),N=P.value!==void 0,X=j.useRef(null),U=(0,v.A)(X,_),Y=j.useRef(0),Z=j.useRef(),l=function(){var t=X.current,f=r&&Z.current?Z.current:H(t);if(f){Z.current=f;var G=L(f,t.value||t.placeholder||"x",i,g),z=G[0],$=G[1];Y.current!==z&&(Y.current=z,t.style.setProperty("height",z+"px","important"),u(z,{rowHeight:$}))}},D=function(t){N||l(),E(t)};return j.useLayoutEffect(l),K(X,function(){if(!N){var T=X.current.value;requestAnimationFrame(function(){var t=X.current;t&&T!==t.value&&l()})}}),w(l),Q(l),j.createElement("textarea",(0,d.A)({},P,{onChange:D,ref:U}))},C=j.forwardRef(S)})}]);})();
