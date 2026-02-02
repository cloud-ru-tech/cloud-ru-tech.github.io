(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2949],{"./node_modules/.pnpm/@snack-uikit+carousel@0.6.0_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/Carousel.js":((O,x,s)=>{"use strict";s.d(x,{F:()=>Ve});var a=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),b=s.n(f),i=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=s("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),g=s("./node_modules/.pnpm/@snack-uikit+utils@3.9.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");function ae(t,r){return Array.from({length:r-t+1},(n,e)=>e+t)}var y=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=s.n(y),M=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),j=s.n(M),Pe=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),$=s.n(Pe),Ee=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),J=s.n(Ee),ie=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Z=s.n(ie),de=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Q=s.n(de),oe=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.14_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css"),L={};L.styleTagTransform=Q(),L.setAttributes=J(),L.insert=$().bind(null,"head"),L.domAPI=j(),L.insertStyleElement=Z();var d=k()(oe.A,L);const p=oe.A&&oe.A.locals?oe.A.locals:void 0;var w=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};function X(t){var{activated:r,onClick:n}=t,e=w(t,["activated","onClick"]);return(0,a.jsx)("button",Object.assign({type:"button",className:p.pageButtonSlider,onClick:n},(0,g.z7)(e),{"data-activated":r||void 0,children:(0,a.jsx)("div",{className:p.pageButtonSliderDot})}))}var B=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.14_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css"),C={};C.styleTagTransform=Q(),C.setAttributes=J(),C.insert=$().bind(null,"head"),C.domAPI=j(),C.insertStyleElement=Z();var q=k()(B.A,C);const S=B.A&&B.A.locals?B.A.locals:void 0;var R=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const ee=1;function be(t){var{total:r,page:n,onChange:e,className:o}=t,E=R(t,["total","page","onChange","className"]);return(0,a.jsx)("nav",Object.assign({className:o},(0,g.z7)(E),{children:(0,a.jsx)("ul",{className:S.paginationSlider,children:ae(ee,r).map(D=>(0,a.jsx)("li",{children:(0,a.jsx)(X,{activated:D===n,onClick:()=>e(D),"data-test-id":`page-button-slider-${D}`})},D))})}))}const P={arrowNext:"carousel__arrow-next",arrowPrev:"carousel__arrow-prev",pagination:"carousel__pagination",trackLine:"carousel__track-line",trackItem:"carousel__track-item"};var le=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const Ae=i.forwardRef((t,r)=>{var{size:n=24}=t,e=le(t,["size"]);e.width=void 0,e.height=void 0;const o="-chevron-left-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,a.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var ke=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const ne=i.forwardRef((t,r)=>{var{size:n=24}=t,e=ke(t,["size"]);e.width=void 0,e.height=void 0;const o="-chevron-left-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,a.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var ye=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const Ce=(0,i.forwardRef)((t,r)=>{var{size:n=24}=t,e=ye(t,["size"]);return Number(n)>=20?(0,a.jsx)(Ae,Object.assign({ref:r,size:n},e)):(0,a.jsx)(ne,Object.assign({ref:r,size:n},e))});var F=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.0_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"),l={};l.styleTagTransform=Q(),l.setAttributes=J(),l.insert=$().bind(null,"head"),l.domAPI=j(),l.insertStyleElement=Z();var z=k()(F.A,l);const G=F.A&&F.A.locals?F.A.locals:void 0;var he=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const De=(0,i.forwardRef)((t,r)=>{var{onClick:n,variant:e,className:o}=t,E=he(t,["onClick","variant","className"]);return(0,a.jsx)("button",Object.assign({ref:r,className:b()(G.control,o),onClick:n,type:"button","data-variant":e},(0,g.z7)(E),{children:(0,a.jsx)(Ce,{size:24,className:G.icon})}))});var Le=s("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),Re=s.n(Le),ze=s("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),We=s("./node_modules/.pnpm/react-swipeable@7.0.2_react@18.2.0/node_modules/react-swipeable/es/index.js"),Ne=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};const Ue="data-swipe-directions";function Ke(t){var{availableDirections:r,enabled:n=!0}=t,e=Ne(t,["availableDirections","enabled"]);const o=(0,i.useRef)(!0),E=v=>{var _;if(r){if(!r.includes(v.dir)){o.current=!1;return}if(!e.onSwipeStart)return;v.event.stopPropagation()}(_=e.onSwipeStart)===null||_===void 0||_.call(e,v)},D=v=>{var _;if(r){if(!o.current)return;v.event.stopPropagation()}(_=e.onSwiping)===null||_===void 0||_.call(e,v)},W=v=>{var _;if(r){if(!o.current){o.current=!0;return}v.event.stopPropagation()}(_=e.onSwiped)===null||_===void 0||_.call(e,v)},te=(0,We.uh)(n?Object.assign(Object.assign({},e),{onSwipeStart:E,onSwiping:D,onSwiped:W}):{});return Object.assign(Object.assign({},te),{[Ue]:n&&r?r.join(" "):void 0})}var xe=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.0_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"),se={};se.styleTagTransform=Q(),se.setAttributes=J(),se.insert=$().bind(null,"head"),se.domAPI=j(),se.insertStyleElement=Z();var Ye=k()(xe.A,se);const ce=xe.A&&xe.A.locals?xe.A.locals:void 0;var Xe=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};function Fe({items:t,showItems:r,scrollBy:n,slideCallback:e,transition:o,swipe:E,swipeActivateLength:D,page:W,gap:te}){const v=(0,i.useRef)(null),[_,I]=(0,i.useState)({itemWidth:0,gap:0}),A=(0,i.useCallback)(()=>{const c=v.current;if(!c)return;const m=getComputedStyle(c),T=Number.parseFloat(m.getPropertyValue("--gap")),Y=Number.parseFloat(m.getPropertyValue("padding-left")),H=Number.parseFloat(m.getPropertyValue("padding-right")),fe=(c.getBoundingClientRect().width-(Math.trunc(r)-1)*T-Y-H)/r;I({itemWidth:fe,gap:T})},[r]);(0,i.useEffect)(()=>{const c=v.current;if(!c)return;A();const m=new ResizeObserver(Re()(A,100));return m.observe(c),()=>m.disconnect()},[A]);const _e=(0,i.useRef)(null),pe=()=>{var c;(c=_e.current)===null||c===void 0||c.querySelectorAll(`[data-test-id=${P.trackItem}]`).forEach(m=>{m.setAttribute("aria-hidden","0"),m.querySelectorAll('a, button, select, input, textarea, [tabindex="0"]').forEach(T=>{T.setAttribute("tabindex","-5"),T.classList.add(ce.hiddenItem)})})},Ie=(c,m,T)=>{var Y;(Y=_e.current)===null||Y===void 0||Y.querySelectorAll(`[data-test-id=${P.trackItem}]`).forEach((H,fe)=>{fe>=m*c&&fe<m*c+Math.trunc(T)&&(H.removeAttribute("aria-hidden"),H.querySelectorAll('a, button, select, input, textarea, [tabindex="-5"]').forEach(ge=>{ge.setAttribute("tabindex","0"),ge.classList.remove(ce.hiddenItem)}))})},Te=(0,i.useMemo)(()=>Number(-(W*n*_.itemWidth+_.gap*W*n)),[_.gap,_.itemWidth,W,n]);(0,i.useEffect)(()=>{pe(),Ie(n,W,r)},[W,n,r]);const Oe=(0,i.useCallback)(c=>{var m,T;if(r===1)return;const Y=c.currentTarget.getBoundingClientRect(),H=(m=v.current)===null||m===void 0?void 0:m.getBoundingClientRect(),ge=((T=H==null?void 0:H.right)!==null&&T!==void 0?T:0)-Y.right;Math.min(ge,Y.x)<0&&e(ge)},[r,e]),me=(0,i.useMemo)(()=>_.itemWidth>0?_.itemWidth:`${Math.floor(100/r)}%`,[_.itemWidth,r]),[N,U]=(0,i.useState)({drag:0,pointers:!0}),V=Ke({onSwiping:c=>{U({drag:c.deltaX,pointers:Math.abs(c.deltaX)<Number.MIN_SAFE_INTEGER})},onSwiped:c=>{if(Math.abs(N.drag)<D)return U({drag:0,pointers:!0});e(c.dir==="Left"?-1:1),U({drag:0,pointers:!0})},trackMouse:!0,enabled:E,availableDirections:["Left","Right"]}),{ref:Me}=V,h=Xe(V,["ref"]);return(0,a.jsx)("div",{ref:v,className:ce.itemProvider,"data-pointers":!N.pointers||void 0,"data-swipe":E||void 0,"data-gap":te,style:Object.assign({},te?{"--gap":te}:{}),children:(0,a.jsx)("div",Object.assign({},h,{className:ce.itemTracker,"data-test-id":P.trackLine,style:{transform:`translateX(${Te+N.drag}px)`,transition:`transform ${o}s ease 0s`},ref:(0,ze.A)(Me,_e),children:t.map((c,m)=>(0,a.jsx)("div",{style:{width:me},className:ce.itemContainer,role:"group","data-test-id":P.trackItem,onClick:Oe,children:c},m))}))})}var je=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.0_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"),re={};re.styleTagTransform=Q(),re.setAttributes=J(),re.insert=$().bind(null,"head"),re.domAPI=j(),re.insertStyleElement=Z();var He=k()(je.A,re);const ue=je.A&&je.A.locals?je.A.locals:void 0;var Ge=function(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]]);return n};function Ve(t){var r,{children:n,showItems:e=1,scrollBy:o,transition:E=.4,swipe:D=!0,arrows:W=!0,pagination:te=!0,className:v,gap:_,state:I,infiniteScroll:A=!1,swipeActivateLength:_e=48,autoSwipe:pe,controlsVisibility:Ie="hover"}=t,Te=Ge(t,["children","showItems","scrollBy","transition","swipe","arrows","pagination","className","gap","state","infiniteScroll","swipeActivateLength","autoSwipe","controlsVisibility"]);const Oe=(0,i.useRef)(),me=(0,i.useMemo)(()=>o!=null?o:Math.trunc(e),[e,o]),[N,U]=(0,u.iC)(I==null?void 0:I.page,(r=I==null?void 0:I.page)!==null&&r!==void 0?r:0,h=>{const c=typeof h=="function"?h(N):h;I==null||I.onChange(c)}),K=(0,i.useMemo)(()=>n.length<=e?1:1+Math.ceil((n.length-e)/me),[n.length,me,e]),Se=(0,i.useCallback)(()=>{U(h=>A?(K+h-1)%K:Math.max(0,h-1))},[A,U,K]),V=(0,i.useCallback)(()=>{U(h=>A?(h+1)%K:Math.min(K-1,h+1))},[A,U,K]),Me=(0,i.useCallback)(h=>{if(h<0){V();return}Se()},[Se,V]);return(0,i.useEffect)(()=>{if(!(!pe||!A))return Oe.current=setTimeout(()=>V(),pe*1e3),()=>clearTimeout(Oe.current)},[pe,A,V]),(0,a.jsxs)("div",Object.assign({className:b()(ue.carousel,v),"data-controls-visibility":Ie},(0,g.z7)(Te),{children:[(0,a.jsxs)("div",{className:ue.carouselBase,children:[(0,a.jsx)(Fe,{showItems:e,scrollBy:me,swipe:D,transition:E,items:n,slideCallback:Me,page:N,gap:_,swipeActivateLength:_e}),W&&(0,a.jsxs)(a.Fragment,{children:[(A||N>0)&&(0,a.jsx)(De,{onClick:Se,variant:"prev","data-test-id":P.arrowPrev,className:ue.control}),(A||N+1<K)&&(0,a.jsx)(De,{onClick:V,variant:"next","data-test-id":P.arrowNext,className:ue.control})]})]}),te&&(0,a.jsx)("div",{className:ue.pagination,children:(0,a.jsx)(be,{"data-test-id":P.pagination,page:N+1,onChange:h=>{U(h-1)},total:K})})]}))}}),"./node_modules/.pnpm/@snack-uikit+utils@3.9.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((O,x,s)=>{"use strict";s.d(x,{z7:()=>ae});const a=/^data-test-/,f=/^(data|aria)-/;function b(y,k){return Object.keys(y).filter(M=>!M.match(k)).reduce((M,j)=>Object.assign(Object.assign({},M),{[j]:y[j]}),{})}function i(y,k){return Object.keys(y).reduce((M,j)=>(j.match(k)&&(M[j]=y[j]),M),{})}function u(y){return b(y,f)}function g(y){return i(y,a)}function ae(y){return i(y,f)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.0_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css":((O,x,s)=>{"use strict";s.d(x,{A:()=>g});var a=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=s.n(a),b=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=s.n(b),u=i()(f());u.push([O.id,`.carouselBase--j__JS{
  position:relative;
  display:flex;
  box-sizing:border-box;
  width:100%;
  outline:none;
}

.control--FjJ96{
  pointer-events:none;
  opacity:0;
  transition:opacity 0.2s;
}

.carousel--Lvtf_{
  display:flex;
  flex-direction:column;
  align-items:center;
  box-sizing:border-box;
}
.carousel--Lvtf_[data-controls-visibility=always] .control--FjJ96, .carousel--Lvtf_[data-controls-visibility=hover]:hover .control--FjJ96{
  pointer-events:auto;
  opacity:1;
}

.pagination--eMa3t{
  padding-top:var(--space-carousel-sliders-wrap-padding-top, 8px);
  display:flex;
  justify-content:center;
  box-sizing:border-box;
}`,""]),u.locals={carouselBase:"carouselBase--j__JS",control:"control--FjJ96",carousel:"carousel--Lvtf_",pagination:"pagination--eMa3t"};const g=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.0_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css":((O,x,s)=>{"use strict";s.d(x,{A:()=>g});var a=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=s.n(a),b=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=s.n(b),u=i()(f());u.push([O.id,`.control--ezdL3{
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
.control--ezdL3:hover, .control--ezdL3:focus-visible{
  color:var(--sys-neutral-text-main, #41424e);
}
.control--ezdL3:hover{
  box-shadow:var(--box-shadow-elevation-level4, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 16px 16px 0px rgba(0, 0, 0, 0.0784313725));
}
.control--ezdL3:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  border-color:var(--sys-available-complementary, #1c1c24);
  outline-color:var(--sys-available-on-complementary, #ffffff);
  box-shadow:none;
}
.control--ezdL3[data-variant=next]{
  right:calc(var(--size-carousel-control-wrap-width, 20px) - var(--size-carousel-control-container, 40px));
  left:auto;
}
.control--ezdL3[data-variant=next]:focus-visible{
  outline-offset:var(--dimension-025m, 2px);
}
.control--ezdL3[data-variant=next] .icon--vxvl3{
  transform:rotate(180deg);
}`,""]),u.locals={control:"control--ezdL3",icon:"icon--vxvl3"};const g=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.0_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css":((O,x,s)=>{"use strict";s.d(x,{A:()=>g});var a=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=s.n(a),b=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=s.n(b),u=i()(f());u.push([O.id,`.itemProvider--AjIBa{
  --gap:var(--dimension-2m, 16px);
  padding-top:var(--space-carousel-content-layout-padding, 4px);
  padding-bottom:var(--space-carousel-content-layout-padding, 4px);
  padding-left:var(--space-carousel-content-layout-padding, 4px);
  padding-right:var(--space-carousel-content-layout-padding, 4px);
  overflow:hidden;
  width:100%;
  margin:calc(0px - var(--space-carousel-content-layout-padding, 4px));
}
.itemProvider--AjIBa[data-swipe]{
  cursor:grab;
}
.itemProvider--AjIBa[data-swipe][data-pointers]{
  cursor:grabbing;
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
  -webkit-user-drag:none;
}

.itemContainer--IZEVl{
  flex-shrink:0;
  box-sizing:border-box;
}

.itemTracker--ubhMP{
  display:flex;
  gap:var(--gap, var(--dimension-2m, 16px));
  box-sizing:border-box;
  height:100%;
}

.hiddenItem--RTmMa{
  pointer-events:none;
}
.hiddenItem--RTmMa *{
  pointer-events:none;
}`,""]),u.locals={itemProvider:"itemProvider--AjIBa",itemContainer:"itemContainer--IZEVl",itemTracker:"itemTracker--ubhMP",hiddenItem:"hiddenItem--RTmMa"};const g=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.14_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css":((O,x,s)=>{"use strict";s.d(x,{A:()=>g});var a=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=s.n(a),b=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=s.n(b),u=i()(f());u.push([O.id,`.pageButtonSlider--eCIY9{
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
.pageButtonSlider--eCIY9 .pageButtonSliderDot--OHA7G{
  width:var(--size-pagination-page-button-slider-dot-page-default, 8px);
  height:var(--size-pagination-page-button-slider-dot-page-default, 8px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.pageButtonSlider--eCIY9:hover .pageButtonSliderDot--OHA7G{
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.pageButtonSlider--eCIY9:focus-visible .pageButtonSliderDot--OHA7G{
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
.pageButtonSlider--eCIY9:active .pageButtonSliderDot--OHA7G{
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-neutral-decor-activated, #bec2cf);
}
.pageButtonSlider--eCIY9[data-activated] .pageButtonSliderDot--OHA7G{
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.pageButtonSlider--eCIY9[data-activated]:hover .pageButtonSliderDot--OHA7G{
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.pageButtonSlider--eCIY9[data-activated]:focus-visible .pageButtonSliderDot--OHA7G{
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-primary-accent-hovered, #6851a6);
}
.pageButtonSlider--eCIY9[data-activated]:active .pageButtonSliderDot--OHA7G{
  width:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  height:var(--size-pagination-page-button-slider-dot-page-interaction, 12px);
  border-radius:var(--radius-pagination-page-button-slider-dot-page-single, 8px);
  background-color:var(--sys-primary-accent-hovered, #6851a6);
}`,""]),u.locals={pageButtonSlider:"pageButtonSlider--eCIY9",pageButtonSliderDot:"pageButtonSliderDot--OHA7G"};const g=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.14_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css":((O,x,s)=>{"use strict";s.d(x,{A:()=>g});var a=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=s.n(a),b=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=s.n(b),u=i()(f());u.push([O.id,`.paginationSlider--uxsue{
  display:flex;
  margin:0;
  padding:0;
  list-style-type:none;
}
.paginationSlider--uxsue > li{
  display:flex;
  align-items:center;
  justify-content:center;
}`,""]),u.locals={paginationSlider:"paginationSlider--uxsue"};const g=u}),"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js":((O,x,s)=>{var a="Expected a function",f=NaN,b="[object Symbol]",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,ae=/^0o[0-7]+$/i,y=parseInt,k=typeof s.g=="object"&&s.g&&s.g.Object===Object&&s.g,M=typeof self=="object"&&self&&self.Object===Object&&self,j=k||M||Function("return this")(),Pe=Object.prototype,$=Pe.toString,Ee=Math.max,J=Math.min,ie=function(){return j.Date.now()};function Z(d,p,w){var X,B,C,q,S,R,ee=0,be=!1,P=!1,le=!0;if(typeof d!="function")throw new TypeError(a);p=L(p)||0,de(w)&&(be=!!w.leading,P="maxWait"in w,C=P?Ee(L(w.maxWait)||0,p):C,le="trailing"in w?!!w.trailing:le);function ve(l){var z=X,G=B;return X=B=void 0,ee=l,q=d.apply(G,z),q}function Ae(l){return ee=l,S=setTimeout(ne,p),be?ve(l):q}function ke(l){var z=l-R,G=l-ee,he=p-z;return P?J(he,C-G):he}function we(l){var z=l-R,G=l-ee;return R===void 0||z>=p||z<0||P&&G>=C}function ne(){var l=ie();if(we(l))return ye(l);S=setTimeout(ne,ke(l))}function ye(l){return S=void 0,le&&X?ve(l):(X=B=void 0,q)}function Be(){S!==void 0&&clearTimeout(S),ee=0,X=R=B=S=void 0}function Ce(){return S===void 0?q:ye(ie())}function F(){var l=ie(),z=we(l);if(X=arguments,B=this,R=l,z){if(S===void 0)return Ae(R);if(P)return S=setTimeout(ne,p),ve(R)}return S===void 0&&(S=setTimeout(ne,p)),q}return F.cancel=Be,F.flush=Ce,F}function de(d){var p=typeof d;return!!d&&(p=="object"||p=="function")}function Q(d){return!!d&&typeof d=="object"}function oe(d){return typeof d=="symbol"||Q(d)&&$.call(d)==b}function L(d){if(typeof d=="number")return d;if(oe(d))return f;if(de(d)){var p=typeof d.valueOf=="function"?d.valueOf():d;d=de(p)?p+"":p}if(typeof d!="string")return d===0?d:+d;d=d.replace(i,"");var w=g.test(d);return w||ae.test(d)?y(d.slice(2),w?2:8):u.test(d)?f:+d}O.exports=Z})}]);})();
