"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[8176],{"./node_modules/.pnpm/@snack-uikit+carousel@0.6.4_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/Carousel.js":((I,P,r)=>{r.d(P,{F:()=>Ee});var l=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),k=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),j=r.n(k),a=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=r("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),C=r("./node_modules/.pnpm/@snack-uikit+pagination@0.10.18_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js"),se=r("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const E={arrowNext:"carousel__arrow-next",arrowPrev:"carousel__arrow-prev",pagination:"carousel__pagination",trackLine:"carousel__track-line",trackItem:"carousel__track-item"};var ae=function(t,n){var s={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(s[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(s[e[o]]=t[e[o]]);return s};const le=a.forwardRef((t,n)=>{var{size:s=24}=t,e=ae(t,["size"]);e.width=void 0,e.height=void 0;const o="-chevron-left-s";return typeof s=="number"&&(e.style||(e.style={}),e.style.width=s+"px",e.style.height=s+"px"),(0,l.jsx)("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,l.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var ie=function(t,n){var s={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(s[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(s[e[o]]=t[e[o]]);return s};const de=a.forwardRef((t,n)=>{var{size:s=24}=t,e=ie(t,["size"]);e.width=void 0,e.height=void 0;const o="-chevron-left-xs";return typeof s=="number"&&(e.style||(e.style={}),e.style.width=s+"px",e.style.height=s+"px"),(0,l.jsx)("svg",Object.assign({ref:n,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+o},e,{children:(0,l.jsx)("use",{href:"#snack-uikit-"+o.substring(1)})}))});var ce=function(t,n){var s={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(s[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(s[e[o]]=t[e[o]]);return s};const ue=(0,a.forwardRef)((t,n)=>{var{size:s=24}=t,e=ce(t,["size"]);return Number(s)>=20?(0,l.jsx)(le,Object.assign({ref:n,size:s},e)):(0,l.jsx)(de,Object.assign({ref:n,size:s},e))});var _e=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Q=r.n(_e),pe=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Y=r.n(pe),me=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=r.n(me),fe=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),J=r.n(fe),ve=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Z=r.n(ve),be=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),q=r.n(be),K=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.4_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"),M={};M.styleTagTransform=q(),M.setAttributes=J(),M.insert=H().bind(null,"head"),M.domAPI=Y(),M.insertStyleElement=Z();var Te=Q()(K.A,M);const ne=K.A&&K.A.locals?K.A.locals:void 0;var ye=function(t,n){var s={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(s[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(s[e[o]]=t[e[o]]);return s};const re=(0,a.forwardRef)((t,n)=>{var{onClick:s,variant:e,className:o}=t,b=ye(t,["onClick","variant","className"]);return(0,l.jsx)("button",Object.assign({ref:n,className:j()(ne.control,o),onClick:s,type:"button","data-variant":e},(0,se.z7)(b),{children:(0,l.jsx)(ue,{size:24,className:ne.icon})}))});var ge=r("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),he=r.n(ge),xe=r("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),je=r("./node_modules/.pnpm/react-swipeable@7.0.2_react@18.2.0/node_modules/react-swipeable/es/index.js"),Oe=function(t,n){var s={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(s[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(s[e[o]]=t[e[o]]);return s};const Se="data-swipe-directions";function we(t){var{availableDirections:n,enabled:s=!0}=t,e=Oe(t,["availableDirections","enabled"]);const o=(0,a.useRef)(!0),b=u=>{var d;if(n){if(!n.includes(u.dir)){o.current=!1;return}if(!e.onSwipeStart)return;u.event.stopPropagation()}(d=e.onSwipeStart)===null||d===void 0||d.call(e,u)},z=u=>{var d;if(n){if(!o.current)return;u.event.stopPropagation()}(d=e.onSwiping)===null||d===void 0||d.call(e,u)},y=u=>{var d;if(n){if(!o.current){o.current=!0;return}u.event.stopPropagation()}(d=e.onSwiped)===null||d===void 0||d.call(e,u)},A=(0,je.uh)(s?Object.assign(Object.assign({},e),{onSwipeStart:b,onSwiping:z,onSwiped:y}):{});return Object.assign(Object.assign({},A),{[Se]:s&&n?n.join(" "):void 0})}var V=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.4_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"),T={};T.styleTagTransform=q(),T.setAttributes=J(),T.insert=H().bind(null,"head"),T.domAPI=Y(),T.insertStyleElement=Z();var Re=Q()(V.A,T);const D=V.A&&V.A.locals?V.A.locals:void 0;var Pe=function(t,n){var s={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(s[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(s[e[o]]=t[e[o]]);return s};function ke({items:t,showItems:n,scrollBy:s,slideCallback:e,transition:o,swipe:b,swipeActivateLength:z,page:y,gap:A}){const u=(0,a.useRef)(null),[d,f]=(0,a.useState)({itemWidth:0,gap:0}),m=(0,a.useCallback)(()=>{const i=u.current;if(!i)return;const c=getComputedStyle(i),v=Number.parseFloat(c.getPropertyValue("--gap")),S=Number.parseFloat(c.getPropertyValue("padding-left")),w=Number.parseFloat(c.getPropertyValue("padding-right")),X=(i.getBoundingClientRect().width-(Math.trunc(n)-1)*v-S-w)/n;f({itemWidth:X,gap:v})},[n]);(0,a.useEffect)(()=>{const i=u.current;if(!i)return;m();const c=new ResizeObserver(he()(m,100));return c.observe(i),()=>c.disconnect()},[m]);const B=(0,a.useRef)(null),W=()=>{var i;(i=B.current)===null||i===void 0||i.querySelectorAll(`[data-test-id=${E.trackItem}]`).forEach(c=>{c.setAttribute("aria-hidden","0"),c.querySelectorAll('a, button, select, input, textarea, [tabindex="0"]').forEach(v=>{v.setAttribute("tabindex","-5"),v.classList.add(D.hiddenItem)})})},ee=(i,c,v)=>{var S;(S=B.current)===null||S===void 0||S.querySelectorAll(`[data-test-id=${E.trackItem}]`).forEach((w,X)=>{X>=c*i&&X<c*i+Math.trunc(v)&&(w.removeAttribute("aria-hidden"),w.querySelectorAll('a, button, select, input, textarea, [tabindex="-5"]').forEach(U=>{U.setAttribute("tabindex","0"),U.classList.remove(D.hiddenItem)}))})},te=(0,a.useMemo)(()=>Number(-(y*s*d.itemWidth+d.gap*y*s)),[d.gap,d.itemWidth,y,s]);(0,a.useEffect)(()=>{W(),ee(s,y,n)},[y,s,n]);const G=(0,a.useCallback)(i=>{var c,v;if(n===1)return;const S=i.currentTarget.getBoundingClientRect(),w=(c=u.current)===null||c===void 0?void 0:c.getBoundingClientRect(),U=((v=w==null?void 0:w.right)!==null&&v!==void 0?v:0)-S.right;Math.min(U,S.x)<0&&e(U)},[n,e]),N=(0,a.useMemo)(()=>d.itemWidth>0?d.itemWidth:`${Math.floor(100/n)}%`,[d.itemWidth,n]),[g,h]=(0,a.useState)({drag:0,pointers:!0}),O=we({onSwiping:i=>{h({drag:i.deltaX,pointers:Math.abs(i.deltaX)<Number.MIN_SAFE_INTEGER})},onSwiped:i=>{if(Math.abs(g.drag)<z)return h({drag:0,pointers:!0});e(i.dir==="Left"?-1:1),h({drag:0,pointers:!0})},trackMouse:!0,enabled:b,availableDirections:["Left","Right"]}),{ref:oe}=O,_=Pe(O,["ref"]);return(0,l.jsx)("div",{ref:u,className:D.itemProvider,"data-pointers":!g.pointers||void 0,"data-swipe":b||void 0,"data-gap":A,style:Object.assign({},A?{"--gap":A}:{}),children:(0,l.jsx)("div",Object.assign({},_,{className:D.itemTracker,"data-test-id":E.trackLine,style:{transform:`translateX(${te+g.drag}px)`,transition:`transform ${o}s ease 0s`},ref:(0,xe.A)(oe,B),children:t.map((i,c)=>(0,l.jsx)("div",{style:{width:N},className:D.itemContainer,role:"group","data-test-id":E.trackItem,onClick:G,children:i},c))}))})}var F=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.4_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"),R={};R.styleTagTransform=q(),R.setAttributes=J(),R.insert=H().bind(null,"head"),R.domAPI=Y(),R.insertStyleElement=Z();var De=Q()(F.A,R);const L=F.A&&F.A.locals?F.A.locals:void 0;var Ce=function(t,n){var s={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(s[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(s[e[o]]=t[e[o]]);return s};function Ee(t){var n,{children:s,showItems:e=1,scrollBy:o,transition:b=.4,swipe:z=!0,arrows:y=!0,pagination:A=!0,className:u,gap:d,state:f,infiniteScroll:m=!1,swipeActivateLength:B=48,autoSwipe:W,controlsVisibility:ee="hover"}=t,te=Ce(t,["children","showItems","scrollBy","transition","swipe","arrows","pagination","className","gap","state","infiniteScroll","swipeActivateLength","autoSwipe","controlsVisibility"]);const G=(0,a.useRef)(),N=(0,a.useMemo)(()=>o!=null?o:Math.trunc(e),[e,o]),[g,h]=(0,p.iC)(f==null?void 0:f.page,(n=f==null?void 0:f.page)!==null&&n!==void 0?n:0,_=>{const i=typeof _=="function"?_(g):_;f==null||f.onChange(i)}),x=(0,a.useMemo)(()=>s.length<=e?1:1+Math.ceil((s.length-e)/N),[s.length,N,e]),$=(0,a.useCallback)(()=>{h(_=>m?(x+_-1)%x:Math.max(0,_-1))},[m,h,x]),O=(0,a.useCallback)(()=>{h(_=>m?(_+1)%x:Math.min(x-1,_+1))},[m,h,x]),oe=(0,a.useCallback)(_=>{if(_<0){O();return}$()},[$,O]);return(0,a.useEffect)(()=>{if(!(!W||!m))return G.current=setTimeout(()=>O(),W*1e3),()=>clearTimeout(G.current)},[W,m,O]),(0,l.jsxs)("div",Object.assign({className:j()(L.carousel,u),"data-controls-visibility":ee},(0,se.z7)(te),{children:[(0,l.jsxs)("div",{className:L.carouselBase,children:[(0,l.jsx)(ke,{showItems:e,scrollBy:N,swipe:z,transition:b,items:s,slideCallback:oe,page:g,gap:d,swipeActivateLength:B}),y&&(0,l.jsxs)(l.Fragment,{children:[(m||g>0)&&(0,l.jsx)(re,{onClick:$,variant:"prev","data-test-id":E.arrowPrev,className:L.control}),(m||g+1<x)&&(0,l.jsx)(re,{onClick:O,variant:"next","data-test-id":E.arrowNext,className:L.control})]})]}),A&&(0,l.jsx)("div",{className:L.pagination,children:(0,l.jsx)(C.I,{"data-test-id":E.pagination,page:g+1,onChange:_=>{h(_-1)},total:x})})]}))}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.4_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css":((I,P,r)=>{r.d(P,{A:()=>C});var l=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),k=r.n(l),j=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=r.n(j),p=a()(k());p.push([I.id,`.carouselBase--sktQG{
  position:relative;
  display:flex;
  box-sizing:border-box;
  width:100%;
  outline:none;
}

.control--MIduD{
  pointer-events:none;
  opacity:0;
  transition:opacity 0.2s;
}

.carousel--Xc1i7{
  display:flex;
  flex-direction:column;
  align-items:center;
  box-sizing:border-box;
}
.carousel--Xc1i7[data-controls-visibility=always] .control--MIduD, .carousel--Xc1i7[data-controls-visibility=hover]:hover .control--MIduD{
  pointer-events:auto;
  opacity:1;
}

.pagination--x1_uc{
  padding-top:var(--space-carousel-sliders-wrap-padding-top, 8px);
  display:flex;
  justify-content:center;
  box-sizing:border-box;
}`,""]),p.locals={carouselBase:"carouselBase--sktQG",control:"control--MIduD",carousel:"carousel--Xc1i7",pagination:"pagination--x1_uc"};const C=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.4_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css":((I,P,r)=>{r.d(P,{A:()=>C});var l=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),k=r.n(l),j=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=r.n(j),p=a()(k());p.push([I.id,`.control--lkIbj{
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
.control--lkIbj:hover, .control--lkIbj:focus-visible{
  color:var(--sys-neutral-text-main, #41424e);
}
.control--lkIbj:hover{
  box-shadow:var(--box-shadow-elevation-level4, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 16px 16px 0px rgba(0, 0, 0, 0.0784313725));
}
.control--lkIbj:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  border-color:var(--sys-available-complementary, #1c1c24);
  outline-color:var(--sys-available-on-complementary, #ffffff);
  box-shadow:none;
}
.control--lkIbj[data-variant=next]{
  right:calc(var(--size-carousel-control-wrap-width, 20px) - var(--size-carousel-control-container, 40px));
  left:auto;
}
.control--lkIbj[data-variant=next]:focus-visible{
  outline-offset:var(--dimension-025m, 2px);
}
.control--lkIbj[data-variant=next] .icon--l4P29{
  transform:rotate(180deg);
}`,""]),p.locals={control:"control--lkIbj",icon:"icon--l4P29"};const C=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.4_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css":((I,P,r)=>{r.d(P,{A:()=>C});var l=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),k=r.n(l),j=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=r.n(j),p=a()(k());p.push([I.id,`.itemProvider--M88Sr{
  --gap:var(--dimension-2m, 16px);
  padding-top:var(--space-carousel-content-layout-padding, 4px);
  padding-bottom:var(--space-carousel-content-layout-padding, 4px);
  padding-left:var(--space-carousel-content-layout-padding, 4px);
  padding-right:var(--space-carousel-content-layout-padding, 4px);
  overflow:hidden;
  width:100%;
  margin:calc(0px - var(--space-carousel-content-layout-padding, 4px));
}
.itemProvider--M88Sr[data-swipe]{
  cursor:grab;
}
.itemProvider--M88Sr[data-swipe][data-pointers]{
  cursor:grabbing;
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
  -webkit-user-drag:none;
}

.itemContainer--VwXLI{
  flex-shrink:0;
  box-sizing:border-box;
}

.itemTracker--cFkn_{
  display:flex;
  gap:var(--gap, var(--dimension-2m, 16px));
  box-sizing:border-box;
  height:100%;
}

.hiddenItem--toDmR{
  pointer-events:none;
}
.hiddenItem--toDmR *{
  pointer-events:none;
}`,""]),p.locals={itemProvider:"itemProvider--M88Sr",itemContainer:"itemContainer--VwXLI",itemTracker:"itemTracker--cFkn_",hiddenItem:"hiddenItem--toDmR"};const C=p})}]);})();
