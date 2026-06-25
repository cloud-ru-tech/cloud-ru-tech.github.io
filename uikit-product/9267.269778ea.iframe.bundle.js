"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9267],{"./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/Carousel.js"(k,S,e){e.d(S,{F:()=>je});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=e.n(b),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js"),x=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const y={arrowNext:"carousel__arrow-next",arrowPrev:"carousel__arrow-prev",pagination:"carousel__pagination",trackLine:"carousel__track-line",trackItem:"carousel__track-item"};var _=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronLeft/index.js"),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),K=e.n(j),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),z=e.n(Q),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=e.n(H),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(g),be=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),X=e.n(be),_e=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Z=e.n(_e),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"),E={};E.styleTagTransform=Z(),E.setAttributes=M(),E.insert=h().bind(null,"head"),E.domAPI=z(),E.insertStyleElement=X();var ye=K()(I.A,E);const re=I.A&&I.A.locals?I.A.locals:void 0;var ce=function(n,c){var u={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&c.indexOf(t)<0&&(u[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(n);r<t.length;r++)c.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(n,t[r])&&(u[t[r]]=n[t[r]]);return u};const ie=(0,o.forwardRef)((n,c)=>{var{onClick:u,variant:t,className:r}=n,Y=ce(n,["onClick","variant","className"]);return(0,s.jsx)("button",Object.assign({ref:c,className:f()(re.control,r),onClick:u,type:"button","data-variant":t},(0,x.z7)(Y),{children:(0,s.jsx)(_.A,{size:24,className:re.icon})}))});var ue=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),p=e.n(ue),C=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),O=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"),m={};m.styleTagTransform=Z(),m.setAttributes=M(),m.insert=h().bind(null,"head"),m.domAPI=z(),m.insertStyleElement=X();var fe=K()(a.A,m);const D=a.A&&a.A.locals?a.A.locals:void 0;var he=function(n,c){var u={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&c.indexOf(t)<0&&(u[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(n);r<t.length;r++)c.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(n,t[r])&&(u[t[r]]=n[t[r]]);return u};function Se({items:n,showItems:c,scrollBy:u,slideCallback:t,transition:r,swipe:Y,swipeActivateLength:pe,page:G,gap:q}){const $=(0,o.useRef)(null),[R,T]=(0,o.useState)({itemWidth:0,gap:0}),A=(0,o.useCallback)(()=>{const d=$.current;if(!d)return;const v=getComputedStyle(d),w=Number.parseFloat(v.getPropertyValue("--gap")),U=Number.parseFloat(v.getPropertyValue("padding-left")),F=Number.parseFloat(v.getPropertyValue("padding-right")),ne=(d.getBoundingClientRect().width-(Math.trunc(c)-1)*w-U-F)/c;T({itemWidth:ne,gap:w})},[c]);(0,o.useEffect)(()=>{const d=$.current;if(!d)return;A();const v=new ResizeObserver(p()(A,100));return v.observe(d),()=>v.disconnect()},[A]);const ee=(0,o.useRef)(null),te=()=>{var d;(d=ee.current)===null||d===void 0||d.querySelectorAll(`[data-test-id=${y.trackItem}]`).forEach(v=>{v.setAttribute("aria-hidden","0"),v.querySelectorAll('a, button, select, input, textarea, [tabindex="0"]').forEach(w=>{w.setAttribute("tabindex","-5"),w.classList.add(D.hiddenItem)})})},me=(d,v,w)=>{var U;(U=ee.current)===null||U===void 0||U.querySelectorAll(`[data-test-id=${y.trackItem}]`).forEach((F,ne)=>{ne>=v*d&&ne<v*d+Math.trunc(w)&&(F.removeAttribute("aria-hidden"),F.querySelectorAll('a, button, select, input, textarea, [tabindex="-5"]').forEach(ae=>{ae.setAttribute("tabindex","0"),ae.classList.remove(D.hiddenItem)}))})},ge=(0,o.useMemo)(()=>Number(-(G*u*R.itemWidth+R.gap*G*u)),[R.gap,R.itemWidth,G,u]);(0,o.useEffect)(()=>{te(),me(u,G,c)},[G,u,c]);const le=(0,o.useCallback)(d=>{var v,w;if(c===1)return;const U=d.currentTarget.getBoundingClientRect(),F=(v=$.current)===null||v===void 0?void 0:v.getBoundingClientRect(),ae=((w=F==null?void 0:F.right)!==null&&w!==void 0?w:0)-U.right;Math.min(ae,U.x)<0&&t(ae)},[c,t]),se=(0,o.useMemo)(()=>R.itemWidth>0?R.itemWidth:`${Math.floor(100/c)}%`,[R.itemWidth,c]),[W,L]=(0,o.useState)({drag:0,pointers:!0}),B=d=>{L({drag:d.deltaX,pointers:Math.abs(d.deltaX)<Number.MIN_SAFE_INTEGER})},oe=d=>{if(Math.abs(W.drag)<pe)return L({drag:0,pointers:!0});t(d.dir==="Left"?-1:1),L({drag:0,pointers:!0})},N=(0,O.u)({onSwiping:B,onSwiped:oe,trackMouse:!0,enabled:Y,availableDirections:["Left","Right"]}),{ref:ve}=N,P=he(N,["ref"]);return(0,s.jsx)("div",{ref:$,className:D.itemProvider,"data-pointers":!W.pointers||void 0,"data-swipe":Y||void 0,"data-gap":q,style:Object.assign({},q?{"--gap":q}:{}),children:(0,s.jsx)("div",Object.assign({},P,{className:D.itemTracker,"data-test-id":y.trackLine,style:{transform:`translateX(${ge+W.drag}px)`,transition:`transform ${r}s ease 0s`},ref:(0,C.A)(ve,ee),children:n.map((d,v)=>(0,s.jsx)("div",{style:{width:se},className:D.itemContainer,role:"group","data-test-id":y.trackItem,onClick:le,children:d},v))}))})}var de=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"),V={};V.styleTagTransform=Z(),V.setAttributes=M(),V.insert=h().bind(null,"head"),V.domAPI=z(),V.insertStyleElement=X();var Pe=K()(de.A,V);const J=de.A&&de.A.locals?de.A.locals:void 0;var xe=function(n,c){var u={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&c.indexOf(t)<0&&(u[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(n);r<t.length;r++)c.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(n,t[r])&&(u[t[r]]=n[t[r]]);return u};function je(n){var c,{children:u,showItems:t=1,scrollBy:r,transition:Y=.4,swipe:pe=!0,arrows:G=!0,pagination:q=!0,className:$,gap:R,state:T,infiniteScroll:A=!1,swipeActivateLength:ee=48,autoSwipe:te,controlsVisibility:me="hover"}=n,ge=xe(n,["children","showItems","scrollBy","transition","swipe","arrows","pagination","className","gap","state","infiniteScroll","swipeActivateLength","autoSwipe","controlsVisibility"]);const le=(0,o.useRef)(),se=(0,o.useMemo)(()=>r!=null?r:Math.trunc(t),[t,r]),[W,L]=(0,i.iC)(T==null?void 0:T.page,(c=T==null?void 0:T.page)!==null&&c!==void 0?c:0,P=>{const d=typeof P=="function"?P(W):P;T==null||T.onChange(d)}),B=(0,o.useMemo)(()=>u.length<=t?1:1+Math.ceil((u.length-t)/se),[u.length,se,t]),oe=(0,o.useCallback)(()=>{L(P=>A?(B+P-1)%B:Math.max(0,P-1))},[A,L,B]),N=(0,o.useCallback)(()=>{L(P=>A?(P+1)%B:Math.min(B-1,P+1))},[A,L,B]),ve=(0,o.useCallback)(P=>{if(P<0){N();return}oe()},[oe,N]);return(0,o.useEffect)(()=>{if(!(!te||!A))return le.current=setTimeout(()=>N(),te*1e3),()=>clearTimeout(le.current)},[te,A,N]),(0,s.jsxs)("div",Object.assign({className:f()(J.carousel,$),"data-controls-visibility":me},(0,x.z7)(ge),{children:[(0,s.jsxs)("div",{className:J.carouselBase,children:[(0,s.jsx)(Se,{showItems:t,scrollBy:se,swipe:pe,transition:Y,items:u,slideCallback:ve,page:W,gap:R,swipeActivateLength:ee}),G&&(0,s.jsxs)(s.Fragment,{children:[(A||W>0)&&(0,s.jsx)(ie,{onClick:oe,variant:"prev","data-test-id":y.arrowPrev,className:J.control}),(A||W+1<B)&&(0,s.jsx)(ie,{onClick:N,variant:"next","data-test-id":y.arrowNext,className:J.control})]})]}),q&&(0,s.jsx)("div",{className:J.pagination,children:(0,s.jsx)(l.I,{"data-test-id":y.pagination,page:W+1,onChange:P=>{L(P-1)},total:B})})]}))}},"./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js"(k,S,e){e.d(S,{I:()=>ue});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),f=e("./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/utils/getRange.js"),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=e.n(o),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),x=e.n(l),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),_=e.n(y),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),K=e.n(j),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(Q),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=e.n(H),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css"),M={};M.styleTagTransform=h(),M.setAttributes=K(),M.insert=_().bind(null,"head"),M.domAPI=x(),M.insertStyleElement=z();var be=i()(g.A,M);const X=g.A&&g.A.locals?g.A.locals:void 0;var _e=function(p,C){var O={};for(var a in p)Object.prototype.hasOwnProperty.call(p,a)&&C.indexOf(a)<0&&(O[a]=p[a]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,a=Object.getOwnPropertySymbols(p);m<a.length;m++)C.indexOf(a[m])<0&&Object.prototype.propertyIsEnumerable.call(p,a[m])&&(O[a[m]]=p[a[m]]);return O};function Z(p){var{activated:C,onClick:O}=p,a=_e(p,["activated","onClick"]);return(0,s.jsx)("button",Object.assign({type:"button",className:X.pageButtonSlider,onClick:O},(0,b.z7)(a),{"data-activated":C||void 0,children:(0,s.jsx)("div",{className:X.pageButtonSliderDot})}))}var I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css"),E={};E.styleTagTransform=h(),E.setAttributes=K(),E.insert=_().bind(null,"head"),E.domAPI=x(),E.insertStyleElement=z();var ye=i()(I.A,E);const re=I.A&&I.A.locals?I.A.locals:void 0;var ce=function(p,C){var O={};for(var a in p)Object.prototype.hasOwnProperty.call(p,a)&&C.indexOf(a)<0&&(O[a]=p[a]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,a=Object.getOwnPropertySymbols(p);m<a.length;m++)C.indexOf(a[m])<0&&Object.prototype.propertyIsEnumerable.call(p,a[m])&&(O[a[m]]=p[a[m]]);return O};const ie=1;function ue(p){var{total:C,page:O,onChange:a,className:m}=p,fe=ce(p,["total","page","onChange","className"]);return(0,s.jsx)("nav",Object.assign({className:m},(0,b.z7)(fe),{children:(0,s.jsx)("ul",{className:re.paginationSlider,children:(0,f.e)(ie,C).map(D=>(0,s.jsx)("li",{children:(0,s.jsx)(Z,{activated:D===O,onClick:()=>a(D),"data-test-id":`page-button-slider-${D}`})},D))})}))}},"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"(k,S,e){e.d(S,{a:()=>o,u:()=>i});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=e("./node_modules/.pnpm/react-swipeable@7.0.2_react@18.2.0/node_modules/react-swipeable/es/index.js"),f=function(l,x){var y={};for(var _ in l)Object.prototype.hasOwnProperty.call(l,_)&&x.indexOf(_)<0&&(y[_]=l[_]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,_=Object.getOwnPropertySymbols(l);j<_.length;j++)x.indexOf(_[j])<0&&Object.prototype.propertyIsEnumerable.call(l,_[j])&&(y[_[j]]=l[_[j]]);return y};const o="data-swipe-directions";function i(l){var{availableDirections:x,enabled:y=!0}=l,_=f(l,["availableDirections","enabled"]);const j=(0,s.useRef)(!0),K=h=>{var g;if(x){if(!x.includes(h.dir)){j.current=!1;return}if(!_.onSwipeStart)return;h.event.stopPropagation()}(g=_.onSwipeStart)===null||g===void 0||g.call(_,h)},Q=h=>{var g;if(x){if(!j.current)return;h.event.stopPropagation()}(g=_.onSwiping)===null||g===void 0||g.call(_,h)},z=h=>{var g;if(x){if(!j.current){j.current=!0;return}h.event.stopPropagation()}(g=_.onSwiped)===null||g===void 0||g.call(_,h)},H=(0,b.uh)(y?Object.assign(Object.assign({},_),{onSwipeStart:K,onSwiping:Q,onSwiped:z}):{});return Object.assign(Object.assign({},H),{[o]:y&&x?x.join(" "):void 0})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"(k,S,e){e.d(S,{A:()=>l});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(f),i=o()(b());i.push([k.id,`.carouselBase--PS1nK{
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
}`,""]),i.locals={carouselBase:"carouselBase--PS1nK",control:"control--Kuqu4",carousel:"carousel--MQLWW",pagination:"pagination--MTG2w"};const l=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"(k,S,e){e.d(S,{A:()=>l});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(f),i=o()(b());i.push([k.id,`.control--EOGtE{
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
}`,""]),i.locals={control:"control--EOGtE",icon:"icon--B2B8Z"};const l=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"(k,S,e){e.d(S,{A:()=>l});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(f),i=o()(b());i.push([k.id,`.itemProvider--ucFjs{
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
}`,""]),i.locals={itemProvider:"itemProvider--ucFjs",itemContainer:"itemContainer--THRtb",itemTracker:"itemTracker--wcS36",hiddenItem:"hiddenItem--YY0b_"};const l=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css"(k,S,e){e.d(S,{A:()=>l});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(f),i=o()(b());i.push([k.id,`.pageButtonSlider--Pto0F{
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
}`,""]),i.locals={pageButtonSlider:"pageButtonSlider--Pto0F",pageButtonSliderDot:"pageButtonSliderDot--CAshK"};const l=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css"(k,S,e){e.d(S,{A:()=>l});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(f),i=o()(b());i.push([k.id,`.paginationSlider--ERvTx{
  display:flex;
  margin:0;
  padding:0;
  list-style-type:none;
}
.paginationSlider--ERvTx > li{
  display:flex;
  align-items:center;
  justify-content:center;
}`,""]),i.locals={paginationSlider:"paginationSlider--ERvTx"};const l=i}}]);})();
