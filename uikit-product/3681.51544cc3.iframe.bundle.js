(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3681],{"./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/Carousel.js":((E,j,e)=>{"use strict";e.d(j,{F:()=>de});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(f),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),h=e("./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js"),Q=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const k={arrowNext:"carousel__arrow-next",arrowPrev:"carousel__arrow-prev",pagination:"carousel__pagination",trackLine:"carousel__track-line",trackItem:"carousel__track-item"};var q=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronLeft/index.js"),ne=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(ne),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),F=e.n(ae),re=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),U=e.n(re),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),P=e.n(I),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),G=e.n(ee),ie=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),X=e.n(ie),o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"),u={};u.styleTagTransform=X(),u.setAttributes=P(),u.insert=U().bind(null,"head"),u.domAPI=F(),u.insertStyleElement=G();var A=N()(o.A,u);const T=o.A&&o.A.locals?o.A.locals:void 0;var R=function(t,i){var l={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&i.indexOf(s)<0&&(l[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(t);c<s.length;c++)i.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(t,s[c])&&(l[s[c]]=t[s[c]]);return l};const W=(0,d.forwardRef)((t,i)=>{var{onClick:l,variant:s,className:c}=t,se=R(t,["onClick","variant","className"]);return(0,a.jsx)("button",Object.assign({ref:i,className:y()(T.control,c),onClick:l,type:"button","data-variant":s},(0,Q.z7)(se),{children:(0,a.jsx)(q.A,{size:24,className:T.icon})}))});var D=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),n=e.n(D),g=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"),_={};_.styleTagTransform=X(),_.setAttributes=P(),_.insert=U().bind(null,"head"),_.domAPI=F(),_.insertStyleElement=G();var te=N()(r.A,_);const S=r.A&&r.A.locals?r.A.locals:void 0;var ve=function(t,i){var l={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&i.indexOf(s)<0&&(l[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(t);c<s.length;c++)i.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(t,s[c])&&(l[s[c]]=t[s[c]]);return l};function fe({items:t,showItems:i,scrollBy:l,slideCallback:s,transition:c,swipe:se,swipeActivateLength:xe,page:J,gap:le}){const oe=(0,d.useRef)(null),[L,M]=(0,d.useState)({itemWidth:0,gap:0}),O=(0,d.useCallback)(()=>{const m=oe.current;if(!m)return;const v=getComputedStyle(m),B=Number.parseFloat(v.getPropertyValue("--gap")),$=Number.parseFloat(v.getPropertyValue("padding-left")),Y=Number.parseFloat(v.getPropertyValue("padding-right")),me=(m.getBoundingClientRect().width-(Math.trunc(i)-1)*B-$-Y)/i;M({itemWidth:me,gap:B})},[i]);(0,d.useEffect)(()=>{const m=oe.current;if(!m)return;O();const v=new ResizeObserver(n()(O,100));return v.observe(m),()=>v.disconnect()},[O]);const ue=(0,d.useRef)(null),ce=()=>{var m;(m=ue.current)===null||m===void 0||m.querySelectorAll(`[data-test-id=${k.trackItem}]`).forEach(v=>{v.setAttribute("aria-hidden","0"),v.querySelectorAll('a, button, select, input, textarea, [tabindex="0"]').forEach(B=>{B.setAttribute("tabindex","-5"),B.classList.add(S.hiddenItem)})})},je=(m,v,B)=>{var $;($=ue.current)===null||$===void 0||$.querySelectorAll(`[data-test-id=${k.trackItem}]`).forEach((Y,me)=>{me>=v*m&&me<v*m+Math.trunc(B)&&(Y.removeAttribute("aria-hidden"),Y.querySelectorAll('a, button, select, input, textarea, [tabindex="-5"]').forEach(ge=>{ge.setAttribute("tabindex","0"),ge.classList.remove(S.hiddenItem)}))})},Se=(0,d.useMemo)(()=>Number(-(J*l*L.itemWidth+L.gap*J*l)),[L.gap,L.itemWidth,J,l]);(0,d.useEffect)(()=>{ce(),je(l,J,i)},[J,l,i]);const be=(0,d.useCallback)(m=>{var v,B;if(i===1)return;const $=m.currentTarget.getBoundingClientRect(),Y=(v=oe.current)===null||v===void 0?void 0:v.getBoundingClientRect(),ge=((B=Y==null?void 0:Y.right)!==null&&B!==void 0?B:0)-$.right;Math.min(ge,$.x)<0&&s(ge)},[i,s]),_e=(0,d.useMemo)(()=>L.itemWidth>0?L.itemWidth:`${Math.floor(100/i)}%`,[L.itemWidth,i]),[K,z]=(0,d.useState)({drag:0,pointers:!0}),w=m=>{z({drag:m.deltaX,pointers:Math.abs(m.deltaX)<Number.MIN_SAFE_INTEGER})},pe=m=>{if(Math.abs(K.drag)<xe)return z({drag:0,pointers:!0});s(m.dir==="Left"?-1:1),z({drag:0,pointers:!0})},V=(0,b.u)({onSwiping:w,onSwiped:pe,trackMouse:!0,enabled:se,availableDirections:["Left","Right"]}),{ref:Ee}=V,x=ve(V,["ref"]);return(0,a.jsx)("div",{ref:oe,className:S.itemProvider,"data-pointers":!K.pointers||void 0,"data-swipe":se||void 0,"data-gap":le,style:Object.assign({},le?{"--gap":le}:{}),children:(0,a.jsx)("div",Object.assign({},x,{className:S.itemTracker,"data-test-id":k.trackLine,style:{transform:`translateX(${Se+K.drag}px)`,transition:`transform ${c}s ease 0s`},ref:(0,g.A)(Ee,ue),children:t.map((m,v)=>(0,a.jsx)("div",{style:{width:_e},className:S.itemContainer,role:"group","data-test-id":k.trackItem,onClick:be,children:m},v))}))})}var H=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"),C={};C.styleTagTransform=X(),C.setAttributes=P(),C.insert=U().bind(null,"head"),C.domAPI=F(),C.insertStyleElement=G();var ye=N()(H.A,C);const Z=H.A&&H.A.locals?H.A.locals:void 0;var he=function(t,i){var l={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&i.indexOf(s)<0&&(l[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(t);c<s.length;c++)i.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(t,s[c])&&(l[s[c]]=t[s[c]]);return l};function de(t){var i,{children:l,showItems:s=1,scrollBy:c,transition:se=.4,swipe:xe=!0,arrows:J=!0,pagination:le=!0,className:oe,gap:L,state:M,infiniteScroll:O=!1,swipeActivateLength:ue=48,autoSwipe:ce,controlsVisibility:je="hover"}=t,Se=he(t,["children","showItems","scrollBy","transition","swipe","arrows","pagination","className","gap","state","infiniteScroll","swipeActivateLength","autoSwipe","controlsVisibility"]);const be=(0,d.useRef)(),_e=(0,d.useMemo)(()=>c!=null?c:Math.trunc(s),[s,c]),[K,z]=(0,p.iC)(M==null?void 0:M.page,(i=M==null?void 0:M.page)!==null&&i!==void 0?i:0,x=>{const m=typeof x=="function"?x(K):x;M==null||M.onChange(m)}),w=(0,d.useMemo)(()=>l.length<=s?1:1+Math.ceil((l.length-s)/_e),[l.length,_e,s]),pe=(0,d.useCallback)(()=>{z(x=>O?(w+x-1)%w:Math.max(0,x-1))},[O,z,w]),V=(0,d.useCallback)(()=>{z(x=>O?(x+1)%w:Math.min(w-1,x+1))},[O,z,w]),Ee=(0,d.useCallback)(x=>{if(x<0){V();return}pe()},[pe,V]);return(0,d.useEffect)(()=>{if(!(!ce||!O))return be.current=setTimeout(()=>V(),ce*1e3),()=>clearTimeout(be.current)},[ce,O,V]),(0,a.jsxs)("div",Object.assign({className:y()(Z.carousel,oe),"data-controls-visibility":je},(0,Q.z7)(Se),{children:[(0,a.jsxs)("div",{className:Z.carouselBase,children:[(0,a.jsx)(fe,{showItems:s,scrollBy:_e,swipe:xe,transition:se,items:l,slideCallback:Ee,page:K,gap:L,swipeActivateLength:ue}),J&&(0,a.jsxs)(a.Fragment,{children:[(O||K>0)&&(0,a.jsx)(W,{onClick:pe,variant:"prev","data-test-id":k.arrowPrev,className:Z.control}),(O||K+1<w)&&(0,a.jsx)(W,{onClick:V,variant:"next","data-test-id":k.arrowNext,className:Z.control})]})]}),le&&(0,a.jsx)("div",{className:Z.pagination,children:(0,a.jsx)(h.I,{"data-test-id":k.pagination,page:K+1,onChange:x=>{z(x-1)},total:w})})]}))}}),"./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js":((E,j,e)=>{"use strict";e.d(j,{I:()=>D});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),y=e("./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/utils/getRange.js"),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(d),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Q=e.n(h),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),q=e.n(k),ne=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=e.n(ne),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),F=e.n(ae),re=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),U=e.n(re),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css"),P={};P.styleTagTransform=U(),P.setAttributes=N(),P.insert=q().bind(null,"head"),P.domAPI=Q(),P.insertStyleElement=F();var ee=p()(I.A,P);const G=I.A&&I.A.locals?I.A.locals:void 0;var ie=function(n,g){var b={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&g.indexOf(r)<0&&(b[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,r=Object.getOwnPropertySymbols(n);_<r.length;_++)g.indexOf(r[_])<0&&Object.prototype.propertyIsEnumerable.call(n,r[_])&&(b[r[_]]=n[r[_]]);return b};function X(n){var{activated:g,onClick:b}=n,r=ie(n,["activated","onClick"]);return(0,a.jsx)("button",Object.assign({type:"button",className:G.pageButtonSlider,onClick:b},(0,f.z7)(r),{"data-activated":g||void 0,children:(0,a.jsx)("div",{className:G.pageButtonSliderDot})}))}var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css"),u={};u.styleTagTransform=U(),u.setAttributes=N(),u.insert=q().bind(null,"head"),u.domAPI=Q(),u.insertStyleElement=F();var A=p()(o.A,u);const T=o.A&&o.A.locals?o.A.locals:void 0;var R=function(n,g){var b={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&g.indexOf(r)<0&&(b[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,r=Object.getOwnPropertySymbols(n);_<r.length;_++)g.indexOf(r[_])<0&&Object.prototype.propertyIsEnumerable.call(n,r[_])&&(b[r[_]]=n[r[_]]);return b};const W=1;function D(n){var{total:g,page:b,onChange:r,className:_}=n,te=R(n,["total","page","onChange","className"]);return(0,a.jsx)("nav",Object.assign({className:_},(0,f.z7)(te),{children:(0,a.jsx)("ul",{className:T.paginationSlider,children:(0,y.e)(W,g).map(S=>(0,a.jsx)("li",{children:(0,a.jsx)(X,{activated:S===b,onClick:()=>r(S),"data-test-id":`page-button-slider-${S}`})},S))})}))}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css":((E,j,e)=>{"use strict";e.d(j,{A:()=>h});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(y),p=d()(f());p.push([E.id,`.carouselBase--PS1nK{
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
}`,""]),p.locals={carouselBase:"carouselBase--PS1nK",control:"control--Kuqu4",carousel:"carousel--MQLWW",pagination:"pagination--MTG2w"};const h=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css":((E,j,e)=>{"use strict";e.d(j,{A:()=>h});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(y),p=d()(f());p.push([E.id,`.control--EOGtE{
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
}`,""]),p.locals={control:"control--EOGtE",icon:"icon--B2B8Z"};const h=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css":((E,j,e)=>{"use strict";e.d(j,{A:()=>h});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(y),p=d()(f());p.push([E.id,`.itemProvider--ucFjs{
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
}`,""]),p.locals={itemProvider:"itemProvider--ucFjs",itemContainer:"itemContainer--THRtb",itemTracker:"itemTracker--wcS36",hiddenItem:"hiddenItem--YY0b_"};const h=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css":((E,j,e)=>{"use strict";e.d(j,{A:()=>h});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(y),p=d()(f());p.push([E.id,`.pageButtonSlider--Pto0F{
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
}`,""]),p.locals={pageButtonSlider:"pageButtonSlider--Pto0F",pageButtonSliderDot:"pageButtonSliderDot--CAshK"};const h=p}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css":((E,j,e)=>{"use strict";e.d(j,{A:()=>h});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(y),p=d()(f());p.push([E.id,`.paginationSlider--ERvTx{
  display:flex;
  margin:0;
  padding:0;
  list-style-type:none;
}
.paginationSlider--ERvTx > li{
  display:flex;
  align-items:center;
  justify-content:center;
}`,""]),p.locals={paginationSlider:"paginationSlider--ERvTx"};const h=p}),"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js":((E,j,e)=>{var a="Expected a function",f=NaN,y="[object Symbol]",d=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,Q=/^0o[0-7]+$/i,k=parseInt,q=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,ne=typeof self=="object"&&self&&self.Object===Object&&self,N=q||ne||Function("return this")(),ae=Object.prototype,F=ae.toString,re=Math.max,U=Math.min,I=function(){return N.Date.now()};function P(o,u,A){var T,R,W,D,n,g,b=0,r=!1,_=!1,te=!0;if(typeof o!="function")throw new TypeError(a);u=X(u)||0,ee(A)&&(r=!!A.leading,_="maxWait"in A,W=_?re(X(A.maxWait)||0,u):W,te="trailing"in A?!!A.trailing:te);function S(t){var i=T,l=R;return T=R=void 0,b=t,D=o.apply(l,i),D}function ve(t){return b=t,n=setTimeout(C,u),r?S(t):D}function fe(t){var i=t-g,l=t-b,s=u-i;return _?U(s,W-l):s}function H(t){var i=t-g,l=t-b;return g===void 0||i>=u||i<0||_&&l>=W}function C(){var t=I();if(H(t))return ye(t);n=setTimeout(C,fe(t))}function ye(t){return n=void 0,te&&T?S(t):(T=R=void 0,D)}function Z(){n!==void 0&&clearTimeout(n),b=0,T=g=R=n=void 0}function he(){return n===void 0?D:ye(I())}function de(){var t=I(),i=H(t);if(T=arguments,R=this,g=t,i){if(n===void 0)return ve(g);if(_)return n=setTimeout(C,u),S(g)}return n===void 0&&(n=setTimeout(C,u)),D}return de.cancel=Z,de.flush=he,de}function ee(o){var u=typeof o;return!!o&&(u=="object"||u=="function")}function G(o){return!!o&&typeof o=="object"}function ie(o){return typeof o=="symbol"||G(o)&&F.call(o)==y}function X(o){if(typeof o=="number")return o;if(ie(o))return f;if(ee(o)){var u=typeof o.valueOf=="function"?o.valueOf():o;o=ee(u)?u+"":u}if(typeof o!="string")return o===0?o:+o;o=o.replace(d,"");var A=h.test(o);return A||Q.test(o)?k(o.slice(2),A?2:8):p.test(o)?f:+o}E.exports=P})}]);})();
