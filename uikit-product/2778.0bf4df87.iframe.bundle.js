(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2778,9267],{"./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/Carousel.js"(C,k,e){"use strict";e.d(k,{F:()=>de});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),S=e.n(x),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js"),A=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const O={arrowNext:"carousel__arrow-next",arrowPrev:"carousel__arrow-prev",pagination:"carousel__pagination",trackLine:"carousel__track-line",trackItem:"carousel__track-item"};var v=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronLeft/index.js"),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(w),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(i),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),t=e.n(_),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(o),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Q=e.n(oe),ie=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),H=e.n(ie),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"),g={};g.styleTagTransform=H(),g.setAttributes=M(),g.insert=t().bind(null,"head"),g.domAPI=h(),g.insertStyleElement=Q();var W=D()(r.A,g);const L=r.A&&r.A.locals?r.A.locals:void 0;var X=function(s,u){var m={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&u.indexOf(n)<0&&(m[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,n=Object.getOwnPropertySymbols(s);f<n.length;f++)u.indexOf(n[f])<0&&Object.prototype.propertyIsEnumerable.call(s,n[f])&&(m[n[f]]=s[n[f]]);return m};const G=(0,d.forwardRef)((s,u)=>{var{onClick:m,variant:n,className:f}=s,ae=X(s,["onClick","variant","className"]);return(0,a.jsx)("button",Object.assign({ref:u,className:S()(L.control,f),onClick:m,type:"button","data-variant":n},(0,A.z7)(ae),{children:(0,a.jsx)(v.A,{size:24,className:L.icon})}))});var F=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),l=e.n(F),P=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),E=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"),c=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"),y={};y.styleTagTransform=H(),y.setAttributes=M(),y.insert=t().bind(null,"head"),y.domAPI=h(),y.insertStyleElement=Q();var ne=D()(c.A,y);const B=c.A&&c.A.locals?c.A.locals:void 0;var be=function(s,u){var m={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&u.indexOf(n)<0&&(m[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,n=Object.getOwnPropertySymbols(s);f<n.length;f++)u.indexOf(n[f])<0&&Object.prototype.propertyIsEnumerable.call(s,n[f])&&(m[n[f]]=s[n[f]]);return m};function ve({items:s,showItems:u,scrollBy:m,slideCallback:n,transition:f,swipe:ae,swipeActivateLength:je,page:se,gap:le}){const re=(0,d.useRef)(null),[V,K]=(0,d.useState)({itemWidth:0,gap:0}),R=(0,d.useCallback)(()=>{const j=re.current;if(!j)return;const T=getComputedStyle(j),N=Number.parseFloat(T.getPropertyValue("--gap")),J=Number.parseFloat(T.getPropertyValue("padding-left")),q=Number.parseFloat(T.getPropertyValue("padding-right")),me=(j.getBoundingClientRect().width-(Math.trunc(u)-1)*N-J-q)/u;K({itemWidth:me,gap:N})},[u]);(0,d.useEffect)(()=>{const j=re.current;if(!j)return;R();const T=new ResizeObserver(l()(R,100));return T.observe(j),()=>T.disconnect()},[R]);const ce=(0,d.useRef)(null),ue=()=>{var j;(j=ce.current)===null||j===void 0||j.querySelectorAll(`[data-test-id=${O.trackItem}]`).forEach(T=>{T.setAttribute("aria-hidden","0"),T.querySelectorAll('a, button, select, input, textarea, [tabindex="0"]').forEach(N=>{N.setAttribute("tabindex","-5"),N.classList.add(B.hiddenItem)})})},xe=(j,T,N)=>{var J;(J=ce.current)===null||J===void 0||J.querySelectorAll(`[data-test-id=${O.trackItem}]`).forEach((q,me)=>{me>=T*j&&me<T*j+Math.trunc(N)&&(q.removeAttribute("aria-hidden"),q.querySelectorAll('a, button, select, input, textarea, [tabindex="-5"]').forEach(ge=>{ge.setAttribute("tabindex","0"),ge.classList.remove(B.hiddenItem)}))})},Se=(0,d.useMemo)(()=>Number(-(se*m*V.itemWidth+V.gap*se*m)),[V.gap,V.itemWidth,se,m]);(0,d.useEffect)(()=>{ue(),xe(m,se,u)},[se,m,u]);const fe=(0,d.useCallback)(j=>{var T,N;if(u===1)return;const J=j.currentTarget.getBoundingClientRect(),q=(T=re.current)===null||T===void 0?void 0:T.getBoundingClientRect(),ge=((N=q==null?void 0:q.right)!==null&&N!==void 0?N:0)-J.right;Math.min(ge,J.x)<0&&n(ge)},[u,n]),_e=(0,d.useMemo)(()=>V.itemWidth>0?V.itemWidth:`${Math.floor(100/u)}%`,[V.itemWidth,u]),[$,Y]=(0,d.useState)({drag:0,pointers:!0}),U=j=>{Y({drag:j.deltaX,pointers:Math.abs(j.deltaX)<Number.MIN_SAFE_INTEGER})},pe=j=>{if(Math.abs($.drag)<je)return Y({drag:0,pointers:!0});n(j.dir==="Left"?-1:1),Y({drag:0,pointers:!0})},Z=(0,E.u)({onSwiping:U,onSwiped:pe,trackMouse:!0,enabled:ae,availableDirections:["Left","Right"]}),{ref:Oe}=Z,I=be(Z,["ref"]);return(0,a.jsx)("div",{ref:re,className:B.itemProvider,"data-pointers":!$.pointers||void 0,"data-swipe":ae||void 0,"data-gap":le,style:Object.assign({},le?{"--gap":le}:{}),children:(0,a.jsx)("div",Object.assign({},I,{className:B.itemTracker,"data-test-id":O.trackLine,style:{transform:`translateX(${Se+$.drag}px)`,transition:`transform ${f}s ease 0s`},ref:(0,P.A)(Oe,ce),children:s.map((j,T)=>(0,a.jsx)("div",{style:{width:_e},className:B.itemContainer,role:"group","data-test-id":O.trackItem,onClick:fe,children:j},T))}))})}var ee=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"),z={};z.styleTagTransform=H(),z.setAttributes=M(),z.insert=t().bind(null,"head"),z.domAPI=h(),z.insertStyleElement=Q();var ye=D()(ee.A,z);const te=ee.A&&ee.A.locals?ee.A.locals:void 0;var he=function(s,u){var m={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&u.indexOf(n)<0&&(m[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,n=Object.getOwnPropertySymbols(s);f<n.length;f++)u.indexOf(n[f])<0&&Object.prototype.propertyIsEnumerable.call(s,n[f])&&(m[n[f]]=s[n[f]]);return m};function de(s){var u,{children:m,showItems:n=1,scrollBy:f,transition:ae=.4,swipe:je=!0,arrows:se=!0,pagination:le=!0,className:re,gap:V,state:K,infiniteScroll:R=!1,swipeActivateLength:ce=48,autoSwipe:ue,controlsVisibility:xe="hover"}=s,Se=he(s,["children","showItems","scrollBy","transition","swipe","arrows","pagination","className","gap","state","infiniteScroll","swipeActivateLength","autoSwipe","controlsVisibility"]);const fe=(0,d.useRef)(),_e=(0,d.useMemo)(()=>f!=null?f:Math.trunc(n),[n,f]),[$,Y]=(0,p.iC)(K==null?void 0:K.page,(u=K==null?void 0:K.page)!==null&&u!==void 0?u:0,I=>{const j=typeof I=="function"?I($):I;K==null||K.onChange(j)}),U=(0,d.useMemo)(()=>m.length<=n?1:1+Math.ceil((m.length-n)/_e),[m.length,_e,n]),pe=(0,d.useCallback)(()=>{Y(I=>R?(U+I-1)%U:Math.max(0,I-1))},[R,Y,U]),Z=(0,d.useCallback)(()=>{Y(I=>R?(I+1)%U:Math.min(U-1,I+1))},[R,Y,U]),Oe=(0,d.useCallback)(I=>{if(I<0){Z();return}pe()},[pe,Z]);return(0,d.useEffect)(()=>{if(!(!ue||!R))return fe.current=setTimeout(()=>Z(),ue*1e3),()=>clearTimeout(fe.current)},[ue,R,Z]),(0,a.jsxs)("div",Object.assign({className:S()(te.carousel,re),"data-controls-visibility":xe},(0,A.z7)(Se),{children:[(0,a.jsxs)("div",{className:te.carouselBase,children:[(0,a.jsx)(ve,{showItems:n,scrollBy:_e,swipe:je,transition:ae,items:m,slideCallback:Oe,page:$,gap:V,swipeActivateLength:ce}),se&&(0,a.jsxs)(a.Fragment,{children:[(R||$>0)&&(0,a.jsx)(G,{onClick:pe,variant:"prev","data-test-id":O.arrowPrev,className:te.control}),(R||$+1<U)&&(0,a.jsx)(G,{onClick:Z,variant:"next","data-test-id":O.arrowNext,className:te.control})]})]}),le&&(0,a.jsx)("div",{className:te.pagination,children:(0,a.jsx)(b.I,{"data-test-id":O.pagination,page:$+1,onChange:I=>{Y(I-1)},total:U})})]}))}},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/watch/index.js"(C,k,e){"use strict";e.d(k,{A:()=>D});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=function(i,h){var _={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&h.indexOf(t)<0&&(_[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(i);o<t.length;o++)h.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(i,t[o])&&(_[t[o]]=i[t[o]]);return _};const p=x.forwardRef((i,h)=>{var{size:_=24}=i,t=S(i,["size"]);t.width=void 0,t.height=void 0;const o="-watch-s";return typeof _=="number"&&(t.style||(t.style={}),t.style.width=_+"px",t.style.height=_+"px"),(0,a.jsx)("svg",Object.assign({ref:h,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var b=function(i,h){var _={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&h.indexOf(t)<0&&(_[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(i);o<t.length;o++)h.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(i,t[o])&&(_[t[o]]=i[t[o]]);return _};const O=x.forwardRef((i,h)=>{var{size:_=24}=i,t=b(i,["size"]);t.width=void 0,t.height=void 0;const o="-watch-xs";return typeof _=="number"&&(t.style||(t.style={}),t.style.width=_+"px",t.style.height=_+"px"),(0,a.jsx)("svg",Object.assign({ref:h,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},t,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var v=function(i,h){var _={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&h.indexOf(t)<0&&(_[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(i);o<t.length;o++)h.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(i,t[o])&&(_[t[o]]=i[t[o]]);return _};const D=(0,x.forwardRef)((i,h)=>{var{size:_=24}=i,t=v(i,["size"]);return Number(_)>=20?(0,a.jsx)(p,Object.assign({ref:h,size:_},t)):(0,a.jsx)(O,Object.assign({ref:h,size:_},t))})},"./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js"(C,k,e){"use strict";e.d(k,{I:()=>F});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),S=e("./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/utils/getRange.js"),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(d),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(b),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),v=e.n(O),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),D=e.n(w),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=e.n(i),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),t=e.n(_),o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css"),M={};M.styleTagTransform=t(),M.setAttributes=D(),M.insert=v().bind(null,"head"),M.domAPI=A(),M.insertStyleElement=h();var oe=p()(o.A,M);const Q=o.A&&o.A.locals?o.A.locals:void 0;var ie=function(l,P){var E={};for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&P.indexOf(c)<0&&(E[c]=l[c]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,c=Object.getOwnPropertySymbols(l);y<c.length;y++)P.indexOf(c[y])<0&&Object.prototype.propertyIsEnumerable.call(l,c[y])&&(E[c[y]]=l[c[y]]);return E};function H(l){var{activated:P,onClick:E}=l,c=ie(l,["activated","onClick"]);return(0,a.jsx)("button",Object.assign({type:"button",className:Q.pageButtonSlider,onClick:E},(0,x.z7)(c),{"data-activated":P||void 0,children:(0,a.jsx)("div",{className:Q.pageButtonSliderDot})}))}var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css"),g={};g.styleTagTransform=t(),g.setAttributes=D(),g.insert=v().bind(null,"head"),g.domAPI=A(),g.insertStyleElement=h();var W=p()(r.A,g);const L=r.A&&r.A.locals?r.A.locals:void 0;var X=function(l,P){var E={};for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&P.indexOf(c)<0&&(E[c]=l[c]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,c=Object.getOwnPropertySymbols(l);y<c.length;y++)P.indexOf(c[y])<0&&Object.prototype.propertyIsEnumerable.call(l,c[y])&&(E[c[y]]=l[c[y]]);return E};const G=1;function F(l){var{total:P,page:E,onChange:c,className:y}=l,ne=X(l,["total","page","onChange","className"]);return(0,a.jsx)("nav",Object.assign({className:y},(0,x.z7)(ne),{children:(0,a.jsx)("ul",{className:L.paginationSlider,children:(0,S.e)(G,P).map(B=>(0,a.jsx)("li",{children:(0,a.jsx)(H,{activated:B===E,onClick:()=>c(B),"data-test-id":`page-button-slider-${B}`})},B))})}))}},"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"(C,k,e){"use strict";e.d(k,{a:()=>d,u:()=>p});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=e("./node_modules/.pnpm/react-swipeable@7.0.2_react@18.2.0/node_modules/react-swipeable/es/index.js"),S=function(b,A){var O={};for(var v in b)Object.prototype.hasOwnProperty.call(b,v)&&A.indexOf(v)<0&&(O[v]=b[v]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var w=0,v=Object.getOwnPropertySymbols(b);w<v.length;w++)A.indexOf(v[w])<0&&Object.prototype.propertyIsEnumerable.call(b,v[w])&&(O[v[w]]=b[v[w]]);return O};const d="data-swipe-directions";function p(b){var{availableDirections:A,enabled:O=!0}=b,v=S(b,["availableDirections","enabled"]);const w=(0,a.useRef)(!0),D=t=>{var o;if(A){if(!A.includes(t.dir)){w.current=!1;return}if(!v.onSwipeStart)return;t.event.stopPropagation()}(o=v.onSwipeStart)===null||o===void 0||o.call(v,t)},i=t=>{var o;if(A){if(!w.current)return;t.event.stopPropagation()}(o=v.onSwiping)===null||o===void 0||o.call(v,t)},h=t=>{var o;if(A){if(!w.current){w.current=!0;return}t.event.stopPropagation()}(o=v.onSwiped)===null||o===void 0||o.call(v,t)},_=(0,x.uh)(O?Object.assign(Object.assign({},v),{onSwipeStart:D,onSwiping:i,onSwiped:h}):{});return Object.assign(Object.assign({},_),{[d]:O&&A?A.join(" "):void 0})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"(C,k,e){"use strict";e.d(k,{A:()=>b});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(a),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(S),p=d()(x());p.push([C.id,`.carouselBase--PS1nK{
  position:relative;
  display:flex;
  box-sizing:border-box;
  width:100%;
  outline:none;
}

.control--Kuqu4{
  pointer-events:none;
  opacity:0;
  transition:opacity 0.2s;
}

.carousel--MQLWW{
  display:flex;
  flex-direction:column;
  align-items:center;
  box-sizing:border-box;
}
.carousel--MQLWW[data-controls-visibility=always] .control--Kuqu4, .carousel--MQLWW[data-controls-visibility=hover]:hover .control--Kuqu4{
  pointer-events:auto;
  opacity:1;
}

.pagination--MTG2w{
  padding-top:var(--space-carousel-sliders-wrap-padding-top, 8px);
  display:flex;
  justify-content:center;
  box-sizing:border-box;
}`,""]),p.locals={carouselBase:"carouselBase--PS1nK",control:"control--Kuqu4",carousel:"carousel--MQLWW",pagination:"pagination--MTG2w"};const b=p},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"(C,k,e){"use strict";e.d(k,{A:()=>b});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(a),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(S),p=d()(x());p.push([C.id,`.control--EOGtE{
  width:var(--size-carousel-control-container, 40px);
  height:var(--size-carousel-control-container, 40px);
  border-radius:var(--radius-carousel-control-container, 24px);
  border-width:var(--border-width-025m, 2px);
  cursor:pointer;
  position:absolute;
  top:50%;
  left:calc(var(--size-carousel-control-wrap-width, 20px) - var(--size-carousel-control-container, 40px));
  transform:translateY(-50%);
  display:flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border-color:transparent;
  border-style:solid;
  outline-color:transparent;
  box-shadow:var(--box-shadow-elevation-level3, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 8px 16px 0px rgba(0, 0, 0, 0.0784313725));
}
.control--EOGtE:hover, .control--EOGtE:focus-visible{
  color:var(--sys-neutral-text-main, #41424e);
}
.control--EOGtE:hover{
  box-shadow:var(--box-shadow-elevation-level4, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 16px 16px 0px rgba(0, 0, 0, 0.0784313725));
}
.control--EOGtE:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  border-color:var(--sys-available-complementary, #1c1c24);
  outline-color:var(--sys-available-on-complementary, #ffffff);
  box-shadow:none;
}
.control--EOGtE[data-variant=next]{
  right:calc(var(--size-carousel-control-wrap-width, 20px) - var(--size-carousel-control-container, 40px));
  left:auto;
}
.control--EOGtE[data-variant=next]:focus-visible{
  outline-offset:var(--dimension-025m, 2px);
}
.control--EOGtE[data-variant=next] .icon--B2B8Z{
  transform:rotate(180deg);
}`,""]),p.locals={control:"control--EOGtE",icon:"icon--B2B8Z"};const b=p},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"(C,k,e){"use strict";e.d(k,{A:()=>b});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(a),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(S),p=d()(x());p.push([C.id,`.itemProvider--ucFjs{
  --gap:var(--dimension-2m, 16px);
  padding-top:var(--space-carousel-content-layout-padding, 4px);
  padding-bottom:var(--space-carousel-content-layout-padding, 4px);
  padding-left:var(--space-carousel-content-layout-padding, 4px);
  padding-right:var(--space-carousel-content-layout-padding, 4px);
  overflow-x:hidden;
  width:100%;
  margin:calc(0px - var(--space-carousel-content-layout-padding, 4px));
}
.itemProvider--ucFjs[data-swipe]{
  cursor:grab;
}
.itemProvider--ucFjs[data-swipe][data-pointers]{
  cursor:grabbing;
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
  -webkit-user-drag:none;
}

.itemContainer--THRtb{
  flex-shrink:0;
  box-sizing:border-box;
}

.itemTracker--wcS36{
  display:flex;
  gap:var(--gap, var(--dimension-2m, 16px));
  box-sizing:border-box;
  height:100%;
}

.hiddenItem--YY0b_{
  pointer-events:none;
}
.hiddenItem--YY0b_ *{
  pointer-events:none;
}`,""]),p.locals={itemProvider:"itemProvider--ucFjs",itemContainer:"itemContainer--THRtb",itemTracker:"itemTracker--wcS36",hiddenItem:"hiddenItem--YY0b_"};const b=p},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css"(C,k,e){"use strict";e.d(k,{A:()=>b});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(a),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(S),p=d()(x());p.push([C.id,`.pageButtonSlider--Pto0F{
  width:var(--size-pagination-page-button-slider-container, 24px);
  height:var(--size-pagination-page-button-slider-container, 24px);
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:transparent;
  border:0 solid transparent;
  outline:0;
  outline-offset:0;
}
.pageButtonSlider--Pto0F .pageButtonSliderDot--CAshK{
  width:var(--size-pagination-page-button-slider-dot-page-default, 8px);
  height:var(--size-pagination-page-button-slider-dot-page-default, 8px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.pageButtonSlider--Pto0F:hover .pageButtonSliderDot--CAshK{
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.pageButtonSlider--Pto0F:focus-visible .pageButtonSliderDot--CAshK{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
  outline-color:var(--sys-available-complementary, #1c1c24);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.pageButtonSlider--Pto0F:active .pageButtonSliderDot--CAshK{
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.pageButtonSlider--Pto0F[data-activated] .pageButtonSliderDot--CAshK{
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.pageButtonSlider--Pto0F[data-activated]:hover .pageButtonSliderDot--CAshK{
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.pageButtonSlider--Pto0F[data-activated]:focus-visible .pageButtonSliderDot--CAshK{
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-primary-accent-hovered, #37946e);
}
.pageButtonSlider--Pto0F[data-activated]:active .pageButtonSliderDot--CAshK{
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-primary-accent-hovered, #37946e);
}`,""]),p.locals={pageButtonSlider:"pageButtonSlider--Pto0F",pageButtonSliderDot:"pageButtonSliderDot--CAshK"};const b=p},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css"(C,k,e){"use strict";e.d(k,{A:()=>b});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(a),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(S),p=d()(x());p.push([C.id,`.paginationSlider--ERvTx{
  display:flex;
  margin:0;
  padding:0;
  list-style-type:none;
}
.paginationSlider--ERvTx > li{
  display:flex;
  align-items:center;
  justify-content:center;
}`,""]),p.locals={paginationSlider:"paginationSlider--ERvTx"};const b=p},"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"(C,k,e){var a="Expected a function",x=NaN,S="[object Symbol]",d=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,A=/^0o[0-7]+$/i,O=parseInt,v=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,w=typeof self=="object"&&self&&self.Object===Object&&self,D=v||w||Function("return this")(),i=Object.prototype,h=i.toString,_=Math.max,t=Math.min,o=function(){return D.Date.now()};function M(r,g,W){var L,X,G,F,l,P,E=0,c=!1,y=!1,ne=!0;if(typeof r!="function")throw new TypeError(a);g=H(g)||0,oe(W)&&(c=!!W.leading,y="maxWait"in W,G=y?_(H(W.maxWait)||0,g):G,ne="trailing"in W?!!W.trailing:ne);function B(s){var u=L,m=X;return L=X=void 0,E=s,F=r.apply(m,u),F}function be(s){return E=s,l=setTimeout(z,g),c?B(s):F}function ve(s){var u=s-P,m=s-E,n=g-u;return y?t(n,G-m):n}function ee(s){var u=s-P,m=s-E;return P===void 0||u>=g||u<0||y&&m>=G}function z(){var s=o();if(ee(s))return ye(s);l=setTimeout(z,ve(s))}function ye(s){return l=void 0,ne&&L?B(s):(L=X=void 0,F)}function te(){l!==void 0&&clearTimeout(l),E=0,L=P=X=l=void 0}function he(){return l===void 0?F:ye(o())}function de(){var s=o(),u=ee(s);if(L=arguments,X=this,P=s,u){if(l===void 0)return be(P);if(y)return l=setTimeout(z,g),B(P)}return l===void 0&&(l=setTimeout(z,g)),F}return de.cancel=te,de.flush=he,de}function oe(r){var g=typeof r;return!!r&&(g=="object"||g=="function")}function Q(r){return!!r&&typeof r=="object"}function ie(r){return typeof r=="symbol"||Q(r)&&h.call(r)==S}function H(r){if(typeof r=="number")return r;if(ie(r))return x;if(oe(r)){var g=typeof r.valueOf=="function"?r.valueOf():r;r=oe(g)?g+"":g}if(typeof r!="string")return r===0?r:+r;r=r.replace(d,"");var W=b.test(r);return W||A.test(r)?O(r.slice(2),W?2:8):p.test(r)?x:+r}C.exports=M}}]);})();
