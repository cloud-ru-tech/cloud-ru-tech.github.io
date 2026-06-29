(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9267],{"./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/Carousel.js"(T,k,e){"use strict";e.d(k,{F:()=>de});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),v=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),S=e.n(v),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),m=e("./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js"),E=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const x={arrowNext:"carousel__arrow-next",arrowPrev:"carousel__arrow-prev",pagination:"carousel__pagination",trackLine:"carousel__track-line",trackItem:"carousel__track-item"};var g=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronLeft/index.js"),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(O),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),K=e.n(J),q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),j=e.n(q),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(f),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),$=e.n(oe),ie=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Y=e.n(ie),o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"),c={};c.styleTagTransform=Y(),c.setAttributes=M(),c.insert=j().bind(null,"head"),c.domAPI=K(),c.insertStyleElement=$();var I=L()(o.A,c);const B=o.A&&o.A.locals?o.A.locals:void 0;var F=function(t,d){var l={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&d.indexOf(s)<0&&(l[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(t);u<s.length;u++)d.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(t,s[u])&&(l[s[u]]=t[s[u]]);return l};const U=(0,a.forwardRef)((t,d)=>{var{onClick:l,variant:s,className:u}=t,ae=F(t,["onClick","variant","className"]);return(0,n.jsx)("button",Object.assign({ref:d,className:S()(B.control,u),onClick:l,type:"button","data-variant":s},(0,E.z7)(ae),{children:(0,n.jsx)(g.A,{size:24,className:B.icon})}))});var z=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),r=e.n(z),y=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),h=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"),p={};p.styleTagTransform=Y(),p.setAttributes=M(),p.insert=j().bind(null,"head"),p.domAPI=K(),p.insertStyleElement=$();var ne=L()(i.A,p);const C=i.A&&i.A.locals?i.A.locals:void 0;var fe=function(t,d){var l={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&d.indexOf(s)<0&&(l[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(t);u<s.length;u++)d.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(t,s[u])&&(l[s[u]]=t[s[u]]);return l};function ve({items:t,showItems:d,scrollBy:l,slideCallback:s,transition:u,swipe:ae,swipeActivateLength:Se,page:se,gap:le}){const re=(0,a.useRef)(null),[G,R]=(0,a.useState)({itemWidth:0,gap:0}),w=(0,a.useCallback)(()=>{const b=re.current;if(!b)return;const P=getComputedStyle(b),W=Number.parseFloat(P.getPropertyValue("--gap")),H=Number.parseFloat(P.getPropertyValue("padding-left")),Z=Number.parseFloat(P.getPropertyValue("padding-right")),me=(b.getBoundingClientRect().width-(Math.trunc(d)-1)*W-H-Z)/d;R({itemWidth:me,gap:W})},[d]);(0,a.useEffect)(()=>{const b=re.current;if(!b)return;w();const P=new ResizeObserver(r()(w,100));return P.observe(b),()=>P.disconnect()},[w]);const ce=(0,a.useRef)(null),ue=()=>{var b;(b=ce.current)===null||b===void 0||b.querySelectorAll(`[data-test-id=${x.trackItem}]`).forEach(P=>{P.setAttribute("aria-hidden","0"),P.querySelectorAll('a, button, select, input, textarea, [tabindex="0"]').forEach(W=>{W.setAttribute("tabindex","-5"),W.classList.add(C.hiddenItem)})})},xe=(b,P,W)=>{var H;(H=ce.current)===null||H===void 0||H.querySelectorAll(`[data-test-id=${x.trackItem}]`).forEach((Z,me)=>{me>=P*b&&me<P*b+Math.trunc(W)&&(Z.removeAttribute("aria-hidden"),Z.querySelectorAll('a, button, select, input, textarea, [tabindex="-5"]').forEach(ge=>{ge.setAttribute("tabindex","0"),ge.classList.remove(C.hiddenItem)}))})},je=(0,a.useMemo)(()=>Number(-(se*l*G.itemWidth+G.gap*se*l)),[G.gap,G.itemWidth,se,l]);(0,a.useEffect)(()=>{ue(),xe(l,se,d)},[se,l,d]);const be=(0,a.useCallback)(b=>{var P,W;if(d===1)return;const H=b.currentTarget.getBoundingClientRect(),Z=(P=re.current)===null||P===void 0?void 0:P.getBoundingClientRect(),ge=((W=Z==null?void 0:Z.right)!==null&&W!==void 0?W:0)-H.right;Math.min(ge,H.x)<0&&s(ge)},[d,s]),_e=(0,a.useMemo)(()=>G.itemWidth>0?G.itemWidth:`${Math.floor(100/d)}%`,[G.itemWidth,d]),[X,V]=(0,a.useState)({drag:0,pointers:!0}),N=b=>{V({drag:b.deltaX,pointers:Math.abs(b.deltaX)<Number.MIN_SAFE_INTEGER})},pe=b=>{if(Math.abs(X.drag)<Se)return V({drag:0,pointers:!0});s(b.dir==="Left"?-1:1),V({drag:0,pointers:!0})},Q=(0,h.u)({onSwiping:N,onSwiped:pe,trackMouse:!0,enabled:ae,availableDirections:["Left","Right"]}),{ref:Pe}=Q,A=fe(Q,["ref"]);return(0,n.jsx)("div",{ref:re,className:C.itemProvider,"data-pointers":!X.pointers||void 0,"data-swipe":ae||void 0,"data-gap":le,style:Object.assign({},le?{"--gap":le}:{}),children:(0,n.jsx)("div",Object.assign({},A,{className:C.itemTracker,"data-test-id":x.trackLine,style:{transform:`translateX(${je+X.drag}px)`,transition:`transform ${u}s ease 0s`},ref:(0,y.A)(Pe,ce),children:t.map((b,P)=>(0,n.jsx)("div",{style:{width:_e},className:C.itemContainer,role:"group","data-test-id":x.trackItem,onClick:be,children:b},P))}))})}var ee=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"),D={};D.styleTagTransform=Y(),D.setAttributes=M(),D.insert=j().bind(null,"head"),D.domAPI=K(),D.insertStyleElement=$();var ye=L()(ee.A,D);const te=ee.A&&ee.A.locals?ee.A.locals:void 0;var he=function(t,d){var l={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&d.indexOf(s)<0&&(l[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(t);u<s.length;u++)d.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(t,s[u])&&(l[s[u]]=t[s[u]]);return l};function de(t){var d,{children:l,showItems:s=1,scrollBy:u,transition:ae=.4,swipe:Se=!0,arrows:se=!0,pagination:le=!0,className:re,gap:G,state:R,infiniteScroll:w=!1,swipeActivateLength:ce=48,autoSwipe:ue,controlsVisibility:xe="hover"}=t,je=he(t,["children","showItems","scrollBy","transition","swipe","arrows","pagination","className","gap","state","infiniteScroll","swipeActivateLength","autoSwipe","controlsVisibility"]);const be=(0,a.useRef)(),_e=(0,a.useMemo)(()=>u!=null?u:Math.trunc(s),[s,u]),[X,V]=(0,_.iC)(R==null?void 0:R.page,(d=R==null?void 0:R.page)!==null&&d!==void 0?d:0,A=>{const b=typeof A=="function"?A(X):A;R==null||R.onChange(b)}),N=(0,a.useMemo)(()=>l.length<=s?1:1+Math.ceil((l.length-s)/_e),[l.length,_e,s]),pe=(0,a.useCallback)(()=>{V(A=>w?(N+A-1)%N:Math.max(0,A-1))},[w,V,N]),Q=(0,a.useCallback)(()=>{V(A=>w?(A+1)%N:Math.min(N-1,A+1))},[w,V,N]),Pe=(0,a.useCallback)(A=>{if(A<0){Q();return}pe()},[pe,Q]);return(0,a.useEffect)(()=>{if(!(!ue||!w))return be.current=setTimeout(()=>Q(),ue*1e3),()=>clearTimeout(be.current)},[ue,w,Q]),(0,n.jsxs)("div",Object.assign({className:S()(te.carousel,re),"data-controls-visibility":xe},(0,E.z7)(je),{children:[(0,n.jsxs)("div",{className:te.carouselBase,children:[(0,n.jsx)(ve,{showItems:s,scrollBy:_e,swipe:Se,transition:ae,items:l,slideCallback:Pe,page:X,gap:G,swipeActivateLength:ce}),se&&(0,n.jsxs)(n.Fragment,{children:[(w||X>0)&&(0,n.jsx)(U,{onClick:pe,variant:"prev","data-test-id":x.arrowPrev,className:te.control}),(w||X+1<N)&&(0,n.jsx)(U,{onClick:Q,variant:"next","data-test-id":x.arrowNext,className:te.control})]})]}),le&&(0,n.jsx)("div",{className:te.pagination,children:(0,n.jsx)(m.I,{"data-test-id":x.pagination,page:X+1,onChange:A=>{V(A-1)},total:N})})]}))}},"./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js"(T,k,e){"use strict";e.d(k,{I:()=>z});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),v=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),S=e("./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/utils/getRange.js"),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(a),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),E=e.n(m),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),g=e.n(x),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=e.n(O),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),K=e.n(J),q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),j=e.n(q),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css"),M={};M.styleTagTransform=j(),M.setAttributes=L(),M.insert=g().bind(null,"head"),M.domAPI=E(),M.insertStyleElement=K();var oe=_()(f.A,M);const $=f.A&&f.A.locals?f.A.locals:void 0;var ie=function(r,y){var h={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&y.indexOf(i)<0&&(h[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,i=Object.getOwnPropertySymbols(r);p<i.length;p++)y.indexOf(i[p])<0&&Object.prototype.propertyIsEnumerable.call(r,i[p])&&(h[i[p]]=r[i[p]]);return h};function Y(r){var{activated:y,onClick:h}=r,i=ie(r,["activated","onClick"]);return(0,n.jsx)("button",Object.assign({type:"button",className:$.pageButtonSlider,onClick:h},(0,v.z7)(i),{"data-activated":y||void 0,children:(0,n.jsx)("div",{className:$.pageButtonSliderDot})}))}var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css"),c={};c.styleTagTransform=j(),c.setAttributes=L(),c.insert=g().bind(null,"head"),c.domAPI=E(),c.insertStyleElement=K();var I=_()(o.A,c);const B=o.A&&o.A.locals?o.A.locals:void 0;var F=function(r,y){var h={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&y.indexOf(i)<0&&(h[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,i=Object.getOwnPropertySymbols(r);p<i.length;p++)y.indexOf(i[p])<0&&Object.prototype.propertyIsEnumerable.call(r,i[p])&&(h[i[p]]=r[i[p]]);return h};const U=1;function z(r){var{total:y,page:h,onChange:i,className:p}=r,ne=F(r,["total","page","onChange","className"]);return(0,n.jsx)("nav",Object.assign({className:p},(0,v.z7)(ne),{children:(0,n.jsx)("ul",{className:B.paginationSlider,children:(0,S.e)(U,y).map(C=>(0,n.jsx)("li",{children:(0,n.jsx)(Y,{activated:C===h,onClick:()=>i(C),"data-test-id":`page-button-slider-${C}`})},C))})}))}},"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"(T,k,e){"use strict";e.d(k,{a:()=>a,u:()=>_});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=e("./node_modules/.pnpm/react-swipeable@7.0.2_react@18.2.0/node_modules/react-swipeable/es/index.js"),S=function(m,E){var x={};for(var g in m)Object.prototype.hasOwnProperty.call(m,g)&&E.indexOf(g)<0&&(x[g]=m[g]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,g=Object.getOwnPropertySymbols(m);O<g.length;O++)E.indexOf(g[O])<0&&Object.prototype.propertyIsEnumerable.call(m,g[O])&&(x[g[O]]=m[g[O]]);return x};const a="data-swipe-directions";function _(m){var{availableDirections:E,enabled:x=!0}=m,g=S(m,["availableDirections","enabled"]);const O=(0,n.useRef)(!0),L=j=>{var f;if(E){if(!E.includes(j.dir)){O.current=!1;return}if(!g.onSwipeStart)return;j.event.stopPropagation()}(f=g.onSwipeStart)===null||f===void 0||f.call(g,j)},J=j=>{var f;if(E){if(!O.current)return;j.event.stopPropagation()}(f=g.onSwiping)===null||f===void 0||f.call(g,j)},K=j=>{var f;if(E){if(!O.current){O.current=!0;return}j.event.stopPropagation()}(f=g.onSwiped)===null||f===void 0||f.call(g,j)},q=(0,v.uh)(x?Object.assign(Object.assign({},g),{onSwipeStart:L,onSwiping:J,onSwiped:K}):{});return Object.assign(Object.assign({},q),{[a]:x&&E?E.join(" "):void 0})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"(T,k,e){"use strict";e.d(k,{A:()=>m});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(n),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(S),_=a()(v());_.push([T.id,`.carouselBase--PS1nK{
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
}`,""]),_.locals={carouselBase:"carouselBase--PS1nK",control:"control--Kuqu4",carousel:"carousel--MQLWW",pagination:"pagination--MTG2w"};const m=_},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"(T,k,e){"use strict";e.d(k,{A:()=>m});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(n),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(S),_=a()(v());_.push([T.id,`.control--EOGtE{
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
}`,""]),_.locals={control:"control--EOGtE",icon:"icon--B2B8Z"};const m=_},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"(T,k,e){"use strict";e.d(k,{A:()=>m});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(n),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(S),_=a()(v());_.push([T.id,`.itemProvider--ucFjs{
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
}`,""]),_.locals={itemProvider:"itemProvider--ucFjs",itemContainer:"itemContainer--THRtb",itemTracker:"itemTracker--wcS36",hiddenItem:"hiddenItem--YY0b_"};const m=_},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css"(T,k,e){"use strict";e.d(k,{A:()=>m});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(n),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(S),_=a()(v());_.push([T.id,`.pageButtonSlider--Pto0F{
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
}`,""]),_.locals={pageButtonSlider:"pageButtonSlider--Pto0F",pageButtonSliderDot:"pageButtonSliderDot--CAshK"};const m=_},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css"(T,k,e){"use strict";e.d(k,{A:()=>m});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=e.n(n),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(S),_=a()(v());_.push([T.id,`.paginationSlider--ERvTx{
  display:flex;
  margin:0;
  padding:0;
  list-style-type:none;
}
.paginationSlider--ERvTx > li{
  display:flex;
  align-items:center;
  justify-content:center;
}`,""]),_.locals={paginationSlider:"paginationSlider--ERvTx"};const m=_},"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"(T,k,e){var n="Expected a function",v=NaN,S="[object Symbol]",a=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,E=/^0o[0-7]+$/i,x=parseInt,g=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,O=typeof self=="object"&&self&&self.Object===Object&&self,L=g||O||Function("return this")(),J=Object.prototype,K=J.toString,q=Math.max,j=Math.min,f=function(){return L.Date.now()};function M(o,c,I){var B,F,U,z,r,y,h=0,i=!1,p=!1,ne=!0;if(typeof o!="function")throw new TypeError(n);c=Y(c)||0,oe(I)&&(i=!!I.leading,p="maxWait"in I,U=p?q(Y(I.maxWait)||0,c):U,ne="trailing"in I?!!I.trailing:ne);function C(t){var d=B,l=F;return B=F=void 0,h=t,z=o.apply(l,d),z}function fe(t){return h=t,r=setTimeout(D,c),i?C(t):z}function ve(t){var d=t-y,l=t-h,s=c-d;return p?j(s,U-l):s}function ee(t){var d=t-y,l=t-h;return y===void 0||d>=c||d<0||p&&l>=U}function D(){var t=f();if(ee(t))return ye(t);r=setTimeout(D,ve(t))}function ye(t){return r=void 0,ne&&B?C(t):(B=F=void 0,z)}function te(){r!==void 0&&clearTimeout(r),h=0,B=y=F=r=void 0}function he(){return r===void 0?z:ye(f())}function de(){var t=f(),d=ee(t);if(B=arguments,F=this,y=t,d){if(r===void 0)return fe(y);if(p)return r=setTimeout(D,c),C(y)}return r===void 0&&(r=setTimeout(D,c)),z}return de.cancel=te,de.flush=he,de}function oe(o){var c=typeof o;return!!o&&(c=="object"||c=="function")}function $(o){return!!o&&typeof o=="object"}function ie(o){return typeof o=="symbol"||$(o)&&K.call(o)==S}function Y(o){if(typeof o=="number")return o;if(ie(o))return v;if(oe(o)){var c=typeof o.valueOf=="function"?o.valueOf():o;o=oe(c)?c+"":c}if(typeof o!="string")return o===0?o:+o;o=o.replace(a,"");var I=m.test(o);return I||E.test(o)?x(o.slice(2),I?2:8):_.test(o)?v:+o}T.exports=M}}]);})();
