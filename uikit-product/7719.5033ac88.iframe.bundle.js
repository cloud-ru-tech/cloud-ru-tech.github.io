(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7719,9267,9712],{"./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/Carousel.js"(O,k,e){"use strict";e.d(k,{F:()=>ne});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(f),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js"),j=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const x={arrowNext:"carousel__arrow-next",arrowPrev:"carousel__arrow-prev",pagination:"carousel__pagination",trackLine:"carousel__track-line",trackItem:"carousel__track-item"};var m=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronLeft/index.js"),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),B=e.n(S),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),U=e.n(X),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),I=e.n(G),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n(h),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(Y),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(J),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"),b={};b.styleTagTransform=L(),b.setAttributes=R(),b.insert=I().bind(null,"head"),b.domAPI=U(),b.insertStyleElement=N();var W=B()(t.A,b);const A=t.A&&t.A.locals?t.A.locals:void 0;var C=function(o,_){var v={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&_.indexOf(r)<0&&(v[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,r=Object.getOwnPropertySymbols(o);g<r.length;g++)_.indexOf(r[g])<0&&Object.prototype.propertyIsEnumerable.call(o,r[g])&&(v[r[g]]=o[r[g]]);return v};const P=(0,s.forwardRef)((o,_)=>{var{onClick:v,variant:r,className:g}=o,ce=C(o,["onClick","variant","className"]);return(0,a.jsx)("button",Object.assign({ref:_,className:y()(A.control,g),onClick:v,type:"button","data-variant":r},(0,j.z7)(ce),{children:(0,a.jsx)(m.A,{size:24,className:A.icon})}))});var D=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),d=e.n(D),u=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),c=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"),i={};i.styleTagTransform=L(),i.setAttributes=R(),i.insert=I().bind(null,"head"),i.domAPI=U(),i.insertStyleElement=N();var E=B()(n.A,i);const w=n.A&&n.A.locals?n.A.locals:void 0;var de=function(o,_){var v={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&_.indexOf(r)<0&&(v[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,r=Object.getOwnPropertySymbols(o);g<r.length;g++)_.indexOf(r[g])<0&&Object.prototype.propertyIsEnumerable.call(o,r[g])&&(v[r[g]]=o[r[g]]);return v};function te({items:o,showItems:_,scrollBy:v,slideCallback:r,transition:g,swipe:ce,swipeActivateLength:we,page:le,gap:_e}){const ie=(0,s.useRef)(null),[q,Q]=(0,s.useState)({itemWidth:0,gap:0}),F=(0,s.useCallback)(()=>{const T=ie.current;if(!T)return;const M=getComputedStyle(T),$=Number.parseFloat(M.getPropertyValue("--gap")),ae=Number.parseFloat(M.getPropertyValue("padding-left")),se=Number.parseFloat(M.getPropertyValue("padding-right")),fe=(T.getBoundingClientRect().width-(Math.trunc(_)-1)*$-ae-se)/_;Q({itemWidth:fe,gap:$})},[_]);(0,s.useEffect)(()=>{const T=ie.current;if(!T)return;F();const M=new ResizeObserver(d()(F,100));return M.observe(T),()=>M.disconnect()},[F]);const me=(0,s.useRef)(null),be=()=>{var T;(T=me.current)===null||T===void 0||T.querySelectorAll(`[data-test-id=${x.trackItem}]`).forEach(M=>{M.setAttribute("aria-hidden","0"),M.querySelectorAll('a, button, select, input, textarea, [tabindex="0"]').forEach($=>{$.setAttribute("tabindex","-5"),$.classList.add(w.hiddenItem)})})},xe=(T,M,$)=>{var ae;(ae=me.current)===null||ae===void 0||ae.querySelectorAll(`[data-test-id=${x.trackItem}]`).forEach((se,fe)=>{fe>=M*T&&fe<M*T+Math.trunc($)&&(se.removeAttribute("aria-hidden"),se.querySelectorAll('a, button, select, input, textarea, [tabindex="-5"]').forEach(ye=>{ye.setAttribute("tabindex","0"),ye.classList.remove(w.hiddenItem)}))})},Te=(0,s.useMemo)(()=>Number(-(le*v*q.itemWidth+q.gap*le*v)),[q.gap,q.itemWidth,le,v]);(0,s.useEffect)(()=>{be(),xe(v,le,_)},[le,v,_]);const he=(0,s.useCallback)(T=>{var M,$;if(_===1)return;const ae=T.currentTarget.getBoundingClientRect(),se=(M=ie.current)===null||M===void 0?void 0:M.getBoundingClientRect(),ye=(($=se==null?void 0:se.right)!==null&&$!==void 0?$:0)-ae.right;Math.min(ye,ae.x)<0&&r(ye)},[_,r]),ve=(0,s.useMemo)(()=>q.itemWidth>0?q.itemWidth:`${Math.floor(100/_)}%`,[q.itemWidth,_]),[ee,oe]=(0,s.useState)({drag:0,pointers:!0}),Z=T=>{oe({drag:T.deltaX,pointers:Math.abs(T.deltaX)<Number.MIN_SAFE_INTEGER})},ge=T=>{if(Math.abs(ee.drag)<we)return oe({drag:0,pointers:!0});r(T.dir==="Left"?-1:1),oe({drag:0,pointers:!0})},re=(0,c.u)({onSwiping:Z,onSwiped:ge,trackMouse:!0,enabled:ce,availableDirections:["Left","Right"]}),{ref:ke}=re,K=de(re,["ref"]);return(0,a.jsx)("div",{ref:ie,className:w.itemProvider,"data-pointers":!ee.pointers||void 0,"data-swipe":ce||void 0,"data-gap":_e,style:Object.assign({},_e?{"--gap":_e}:{}),children:(0,a.jsx)("div",Object.assign({},K,{className:w.itemTracker,"data-test-id":x.trackLine,style:{transform:`translateX(${Te+ee.drag}px)`,transition:`transform ${g}s ease 0s`},ref:(0,u.A)(ke,me),children:o.map((T,M)=>(0,a.jsx)("div",{style:{width:ve},className:w.itemContainer,role:"group","data-test-id":x.trackItem,onClick:he,children:T},M))}))})}var V=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"),z={};z.styleTagTransform=L(),z.setAttributes=R(),z.insert=I().bind(null,"head"),z.domAPI=U(),z.insertStyleElement=N();var ue=B()(V.A,z);const H=V.A&&V.A.locals?V.A.locals:void 0;var pe=function(o,_){var v={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&_.indexOf(r)<0&&(v[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,r=Object.getOwnPropertySymbols(o);g<r.length;g++)_.indexOf(r[g])<0&&Object.prototype.propertyIsEnumerable.call(o,r[g])&&(v[r[g]]=o[r[g]]);return v};function ne(o){var _,{children:v,showItems:r=1,scrollBy:g,transition:ce=.4,swipe:we=!0,arrows:le=!0,pagination:_e=!0,className:ie,gap:q,state:Q,infiniteScroll:F=!1,swipeActivateLength:me=48,autoSwipe:be,controlsVisibility:xe="hover"}=o,Te=pe(o,["children","showItems","scrollBy","transition","swipe","arrows","pagination","className","gap","state","infiniteScroll","swipeActivateLength","autoSwipe","controlsVisibility"]);const he=(0,s.useRef)(),ve=(0,s.useMemo)(()=>g!=null?g:Math.trunc(r),[r,g]),[ee,oe]=(0,l.iC)(Q==null?void 0:Q.page,(_=Q==null?void 0:Q.page)!==null&&_!==void 0?_:0,K=>{const T=typeof K=="function"?K(ee):K;Q==null||Q.onChange(T)}),Z=(0,s.useMemo)(()=>v.length<=r?1:1+Math.ceil((v.length-r)/ve),[v.length,ve,r]),ge=(0,s.useCallback)(()=>{oe(K=>F?(Z+K-1)%Z:Math.max(0,K-1))},[F,oe,Z]),re=(0,s.useCallback)(()=>{oe(K=>F?(K+1)%Z:Math.min(Z-1,K+1))},[F,oe,Z]),ke=(0,s.useCallback)(K=>{if(K<0){re();return}ge()},[ge,re]);return(0,s.useEffect)(()=>{if(!(!be||!F))return he.current=setTimeout(()=>re(),be*1e3),()=>clearTimeout(he.current)},[be,F,re]),(0,a.jsxs)("div",Object.assign({className:y()(H.carousel,ie),"data-controls-visibility":xe},(0,j.z7)(Te),{children:[(0,a.jsxs)("div",{className:H.carouselBase,children:[(0,a.jsx)(te,{showItems:r,scrollBy:ve,swipe:we,transition:ce,items:v,slideCallback:ke,page:ee,gap:q,swipeActivateLength:me}),le&&(0,a.jsxs)(a.Fragment,{children:[(F||ee>0)&&(0,a.jsx)(P,{onClick:ge,variant:"prev","data-test-id":x.arrowPrev,className:H.control}),(F||ee+1<Z)&&(0,a.jsx)(P,{onClick:re,variant:"next","data-test-id":x.arrowNext,className:H.control})]})]}),_e&&(0,a.jsx)("div",{className:H.pagination,children:(0,a.jsx)(p.I,{"data-test-id":x.pagination,page:ee+1,onChange:K=>{oe(K-1)},total:Z})})]}))}},"./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js"(O,k,e){"use strict";e.d(k,{I:()=>D});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),y=e("./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/utils/getRange.js"),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(s),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),j=e.n(p),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),m=e.n(x),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=e.n(S),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),U=e.n(X),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=e.n(G),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css"),R={};R.styleTagTransform=I(),R.setAttributes=B(),R.insert=m().bind(null,"head"),R.domAPI=j(),R.insertStyleElement=U();var Y=l()(h.A,R);const N=h.A&&h.A.locals?h.A.locals:void 0;var J=function(d,u){var c={};for(var n in d)Object.prototype.hasOwnProperty.call(d,n)&&u.indexOf(n)<0&&(c[n]=d[n]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(d);i<n.length;i++)u.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(d,n[i])&&(c[n[i]]=d[n[i]]);return c};function L(d){var{activated:u,onClick:c}=d,n=J(d,["activated","onClick"]);return(0,a.jsx)("button",Object.assign({type:"button",className:N.pageButtonSlider,onClick:c},(0,f.z7)(n),{"data-activated":u||void 0,children:(0,a.jsx)("div",{className:N.pageButtonSliderDot})}))}var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css"),b={};b.styleTagTransform=I(),b.setAttributes=B(),b.insert=m().bind(null,"head"),b.domAPI=j(),b.insertStyleElement=U();var W=l()(t.A,b);const A=t.A&&t.A.locals?t.A.locals:void 0;var C=function(d,u){var c={};for(var n in d)Object.prototype.hasOwnProperty.call(d,n)&&u.indexOf(n)<0&&(c[n]=d[n]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(d);i<n.length;i++)u.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(d,n[i])&&(c[n[i]]=d[n[i]]);return c};const P=1;function D(d){var{total:u,page:c,onChange:n,className:i}=d,E=C(d,["total","page","onChange","className"]);return(0,a.jsx)("nav",Object.assign({className:i},(0,f.z7)(E),{children:(0,a.jsx)("ul",{className:A.paginationSlider,children:(0,y.e)(P,u).map(w=>(0,a.jsx)("li",{children:(0,a.jsx)(L,{activated:w===c,onClick:()=>n(w),"data-test-id":`page-button-slider-${w}`})},w))})}))}},"./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.1_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/PromoTag.js"(O,k,e){"use strict";e.d(k,{e:()=>C});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(f),s=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.4_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const p={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},j={Accent:"accent",Decor:"decor"},x={Xxs:"xxs",Xs:"xs",S:"s"};var m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(m),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),X=e.n(B),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),G=e.n(U),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),h=e.n(I),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Y=e.n(R),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),J=e.n(N),L=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.1_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"),t={};t.styleTagTransform=J(),t.setAttributes=h(),t.insert=G().bind(null,"head"),t.domAPI=X(),t.insertStyleElement=Y();var b=S()(L.A,t);const W=L.A&&L.A.locals?L.A.locals:void 0;var A=function(P,D){var d={};for(var u in P)Object.prototype.hasOwnProperty.call(P,u)&&D.indexOf(u)<0&&(d[u]=P[u]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,u=Object.getOwnPropertySymbols(P);c<u.length;c++)D.indexOf(u[c])<0&&Object.prototype.propertyIsEnumerable.call(P,u[c])&&(d[u[c]]=P[u[c]]);return d};function C(P){var{appearance:D=p.Primary,color:d=j.Accent,size:u=x.Xxs,className:c,text:n,beforeContent:i,afterContent:E,onClick:w}=P,de=A(P,["appearance","color","size","className","text","beforeContent","afterContent","onClick"]);const te=u!==x.Xxs,V=w?{role:"button",tabIndex:0,onClick:w}:{},z=u===x.S?s.o.SansLabelM:s.o.SansLabelS;return(0,a.jsxs)("div",Object.assign({className:y()(W.promoTag,c)},(0,l.z7)(de),{"data-appearance":D,"data-color":d,"data-size":u},V,{children:[te&&i,!!n&&(0,a.jsx)(z,{className:W.labelWrapper,tag:"span",children:n}),te&&E]}))}},"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js"(O,k,e){"use strict";e.d(k,{o:()=>u});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),f=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(f),s=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),j=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),x=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const m={S:"s",Xs:"xs"},S={[m.Xs]:16,[m.S]:24},B={Hover:"hover",Click:"click"},X={[B.Hover]:x.tr.HoverAndFocusVisible,[B.Click]:x.tr.ClickAndFocusVisible};var U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(U),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(I),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Y=e.n(R),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),J=e.n(N),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),t=e.n(L),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=e.n(b),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),C={};C.styleTagTransform=W(),C.setAttributes=J(),C.insert=Y().bind(null,"head"),C.domAPI=h(),C.insertStyleElement=t();var P=G()(A.A,C);const D=A.A&&A.A.locals?A.A.locals:void 0;var d=function(c,n){var i={};for(var E in c)Object.prototype.hasOwnProperty.call(c,E)&&n.indexOf(E)<0&&(i[E]=c[E]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var w=0,E=Object.getOwnPropertySymbols(c);w<E.length;w++)n.indexOf(E[w])<0&&Object.prototype.propertyIsEnumerable.call(c,E[w])&&(i[E[w]]=c[E[w]]);return i};function u(c){var{size:n=m.Xs,trigger:i=B.Hover,tooltipClassname:E,className:w,open:de,onOpenChange:te,tabIndex:V=0,triggerSupportProps:z={}}=c,ue=d(c,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[H,pe]=(0,s.iC)(de,!1,te);return(0,a.jsx)(j.m,Object.assign({},ue,{className:E,open:H,onOpenChange:pe,trigger:X[i],children:({getReferenceProps:ne,ref:o})=>(0,a.jsx)("span",Object.assign({},ne(),(0,p.z7)(z),{ref:o,"data-size":n,"data-opened":H,"data-trigger":i,className:y()(D.questionTooltip,w),role:"button",tabIndex:V,children:(0,a.jsx)(l.A,{size:S[n]})}))}))}},"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"(O,k,e){"use strict";e.d(k,{a:()=>s,u:()=>l});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=e("./node_modules/.pnpm/react-swipeable@7.0.2_react@18.2.0/node_modules/react-swipeable/es/index.js"),y=function(p,j){var x={};for(var m in p)Object.prototype.hasOwnProperty.call(p,m)&&j.indexOf(m)<0&&(x[m]=p[m]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,m=Object.getOwnPropertySymbols(p);S<m.length;S++)j.indexOf(m[S])<0&&Object.prototype.propertyIsEnumerable.call(p,m[S])&&(x[m[S]]=p[m[S]]);return x};const s="data-swipe-directions";function l(p){var{availableDirections:j,enabled:x=!0}=p,m=y(p,["availableDirections","enabled"]);const S=(0,a.useRef)(!0),B=I=>{var h;if(j){if(!j.includes(I.dir)){S.current=!1;return}if(!m.onSwipeStart)return;I.event.stopPropagation()}(h=m.onSwipeStart)===null||h===void 0||h.call(m,I)},X=I=>{var h;if(j){if(!S.current)return;I.event.stopPropagation()}(h=m.onSwiping)===null||h===void 0||h.call(m,I)},U=I=>{var h;if(j){if(!S.current){S.current=!0;return}I.event.stopPropagation()}(h=m.onSwiped)===null||h===void 0||h.call(m,I)},G=(0,f.uh)(x?Object.assign(Object.assign({},m),{onSwipeStart:B,onSwiping:X,onSwiped:U}):{});return Object.assign(Object.assign({},G),{[s]:x&&j?j.join(" "):void 0})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"(O,k,e){"use strict";e.d(k,{A:()=>p});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),s=e.n(y),l=s()(f());l.push([O.id,`.carouselBase--PS1nK{
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
}`,""]),l.locals={carouselBase:"carouselBase--PS1nK",control:"control--Kuqu4",carousel:"carousel--MQLWW",pagination:"pagination--MTG2w"};const p=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"(O,k,e){"use strict";e.d(k,{A:()=>p});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),s=e.n(y),l=s()(f());l.push([O.id,`.control--EOGtE{
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
}`,""]),l.locals={control:"control--EOGtE",icon:"icon--B2B8Z"};const p=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"(O,k,e){"use strict";e.d(k,{A:()=>p});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),s=e.n(y),l=s()(f());l.push([O.id,`.itemProvider--ucFjs{
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
}`,""]),l.locals={itemProvider:"itemProvider--ucFjs",itemContainer:"itemContainer--THRtb",itemTracker:"itemTracker--wcS36",hiddenItem:"hiddenItem--YY0b_"};const p=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css"(O,k,e){"use strict";e.d(k,{A:()=>p});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),s=e.n(y),l=s()(f());l.push([O.id,`.pageButtonSlider--Pto0F{
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
}`,""]),l.locals={pageButtonSlider:"pageButtonSlider--Pto0F",pageButtonSliderDot:"pageButtonSliderDot--CAshK"};const p=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css"(O,k,e){"use strict";e.d(k,{A:()=>p});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),s=e.n(y),l=s()(f());l.push([O.id,`.paginationSlider--ERvTx{
  display:flex;
  margin:0;
  padding:0;
  list-style-type:none;
}
.paginationSlider--ERvTx > li{
  display:flex;
  align-items:center;
  justify-content:center;
}`,""]),l.locals={paginationSlider:"paginationSlider--ERvTx"};const p=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.1_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"(O,k,e){"use strict";e.d(k,{A:()=>p});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),s=e.n(y),l=s()(f());l.push([O.id,`.promoTag--e1wrI{
  display:inline-flex;
  align-items:center;
  white-space:nowrap;
}
.promoTag--e1wrI[data-color=accent][data-appearance=neutral]{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.promoTag--e1wrI[data-color=accent][data-appearance=neutral][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-neutral-decor-activated, #bec2cf);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=accent][data-appearance=neutral][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=accent][data-appearance=neutral][role=button]:hover{
  background-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.promoTag--e1wrI[data-color=accent][data-appearance=neutral][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=accent][data-appearance=neutral][role=button]:active[data-color=accent]{
  background-color:var(--sys-neutral-accent-pressed, #656774);
}
.promoTag--e1wrI[data-color=accent][data-appearance=neutral][role=button]:active[data-color=decor]{
  background-color:var(--sys-neutral-decor-activated, #bec2cf);
}
.promoTag--e1wrI[data-color=accent][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fdfbff);
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.promoTag--e1wrI[data-color=accent][data-appearance=primary][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-primary-decor-activated, #c5b2f1);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=accent][data-appearance=primary][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=accent][data-appearance=primary][role=button]:hover{
  background-color:var(--sys-primary-accent-hovered, #6851a6);
}
.promoTag--e1wrI[data-color=accent][data-appearance=primary][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=accent][data-appearance=primary][role=button]:active[data-color=accent]{
  background-color:var(--sys-primary-accent-pressed, #5b4796);
}
.promoTag--e1wrI[data-color=accent][data-appearance=primary][role=button]:active[data-color=decor]{
  background-color:var(--sys-primary-decor-activated, #c5b2f1);
}
.promoTag--e1wrI[data-color=accent][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.promoTag--e1wrI[data-color=accent][data-appearance=red][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-red-decor-activated, #fbab99);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=accent][data-appearance=red][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=accent][data-appearance=red][role=button]:hover{
  background-color:var(--sys-red-accent-hovered, #bd4844);
}
.promoTag--e1wrI[data-color=accent][data-appearance=red][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=accent][data-appearance=red][role=button]:active[data-color=accent]{
  background-color:var(--sys-red-accent-pressed, #ae514c);
}
.promoTag--e1wrI[data-color=accent][data-appearance=red][role=button]:active[data-color=decor]{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.promoTag--e1wrI[data-color=accent][data-appearance=orange]{
  color:var(--sys-orange-on-accent, #fffcf4);
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.promoTag--e1wrI[data-color=accent][data-appearance=orange][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-orange-decor-activated, #f5b27b);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=accent][data-appearance=orange][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=accent][data-appearance=orange][role=button]:hover{
  background-color:var(--sys-orange-accent-hovered, #ec823b);
}
.promoTag--e1wrI[data-color=accent][data-appearance=orange][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=accent][data-appearance=orange][role=button]:active[data-color=accent]{
  background-color:var(--sys-orange-accent-pressed, #e78940);
}
.promoTag--e1wrI[data-color=accent][data-appearance=orange][role=button]:active[data-color=decor]{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.promoTag--e1wrI[data-color=accent][data-appearance=yellow]{
  color:var(--sys-yellow-on-accent, #583f1f);
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.promoTag--e1wrI[data-color=accent][data-appearance=yellow][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=accent][data-appearance=yellow][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=accent][data-appearance=yellow][role=button]:hover{
  background-color:var(--sys-yellow-accent-hovered, #d5a133);
}
.promoTag--e1wrI[data-color=accent][data-appearance=yellow][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=accent][data-appearance=yellow][role=button]:active[data-color=accent]{
  background-color:var(--sys-yellow-accent-pressed, #d3a736);
}
.promoTag--e1wrI[data-color=accent][data-appearance=yellow][role=button]:active[data-color=decor]{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.promoTag--e1wrI[data-color=accent][data-appearance=green]{
  color:var(--sys-green-on-accent, #fcfefa);
  background-color:var(--sys-green-accent-default, #57b762);
}
.promoTag--e1wrI[data-color=accent][data-appearance=green][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=accent][data-appearance=green][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=accent][data-appearance=green][role=button]:hover{
  background-color:var(--sys-green-accent-hovered, #5daa63);
}
.promoTag--e1wrI[data-color=accent][data-appearance=green][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=accent][data-appearance=green][role=button]:active[data-color=accent]{
  background-color:var(--sys-green-accent-pressed, #55915a);
}
.promoTag--e1wrI[data-color=accent][data-appearance=green][role=button]:active[data-color=decor]{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.promoTag--e1wrI[data-color=accent][data-appearance=blue]{
  color:var(--sys-blue-on-accent, #fdfeff);
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.promoTag--e1wrI[data-color=accent][data-appearance=blue][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-blue-decor-activated, #aac4ea);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=accent][data-appearance=blue][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=accent][data-appearance=blue][role=button]:hover{
  background-color:var(--sys-blue-accent-hovered, #4e80bf);
}
.promoTag--e1wrI[data-color=accent][data-appearance=blue][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=accent][data-appearance=blue][role=button]:active[data-color=accent]{
  background-color:var(--sys-blue-accent-pressed, #4877b0);
}
.promoTag--e1wrI[data-color=accent][data-appearance=blue][role=button]:active[data-color=decor]{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.promoTag--e1wrI[data-color=accent][data-appearance=violet]{
  color:var(--sys-violet-on-accent, #fdfdfd);
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.promoTag--e1wrI[data-color=accent][data-appearance=violet][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-violet-decor-activated, #ceb7e7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=accent][data-appearance=violet][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=accent][data-appearance=violet][role=button]:hover{
  background-color:var(--sys-violet-accent-hovered, #9a66ae);
}
.promoTag--e1wrI[data-color=accent][data-appearance=violet][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=accent][data-appearance=violet][role=button]:active[data-color=accent]{
  background-color:var(--sys-violet-accent-pressed, #8c639b);
}
.promoTag--e1wrI[data-color=accent][data-appearance=violet][role=button]:active[data-color=decor]{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.promoTag--e1wrI[data-color=accent][data-appearance=pink]{
  color:var(--sys-pink-on-accent, #fdfcfc);
  background-color:var(--sys-pink-accent-default, #d1668e);
}
.promoTag--e1wrI[data-color=accent][data-appearance=pink][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-pink-decor-activated, #e8b1c1);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=accent][data-appearance=pink][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=accent][data-appearance=pink][role=button]:hover{
  background-color:var(--sys-pink-accent-hovered, #c06088);
}
.promoTag--e1wrI[data-color=accent][data-appearance=pink][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=accent][data-appearance=pink][role=button]:active[data-color=accent]{
  background-color:var(--sys-pink-accent-pressed, #ae5e80);
}
.promoTag--e1wrI[data-color=accent][data-appearance=pink][role=button]:active[data-color=decor]{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}
.promoTag--e1wrI[data-color=decor][data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.promoTag--e1wrI[data-color=decor][data-appearance=neutral][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-neutral-decor-activated, #bec2cf);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=decor][data-appearance=neutral][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=decor][data-appearance=neutral][role=button]:hover{
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.promoTag--e1wrI[data-color=decor][data-appearance=neutral][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=decor][data-appearance=neutral][role=button]:active[data-color=accent]{
  background-color:var(--sys-neutral-accent-pressed, #656774);
}
.promoTag--e1wrI[data-color=decor][data-appearance=neutral][role=button]:active[data-color=decor]{
  background-color:var(--sys-neutral-decor-activated, #bec2cf);
}
.promoTag--e1wrI[data-color=decor][data-appearance=primary]{
  color:var(--sys-primary-text-main, #382a62);
  background-color:var(--sys-primary-decor-default, #ebdefd);
}
.promoTag--e1wrI[data-color=decor][data-appearance=primary][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-primary-decor-activated, #c5b2f1);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=decor][data-appearance=primary][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=decor][data-appearance=primary][role=button]:hover{
  background-color:var(--sys-primary-decor-hovered, #decdfb);
}
.promoTag--e1wrI[data-color=decor][data-appearance=primary][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=decor][data-appearance=primary][role=button]:active[data-color=accent]{
  background-color:var(--sys-primary-accent-pressed, #5b4796);
}
.promoTag--e1wrI[data-color=decor][data-appearance=primary][role=button]:active[data-color=decor]{
  background-color:var(--sys-primary-decor-activated, #c5b2f1);
}
.promoTag--e1wrI[data-color=decor][data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.promoTag--e1wrI[data-color=decor][data-appearance=red][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-red-decor-activated, #fbab99);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=decor][data-appearance=red][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=decor][data-appearance=red][role=button]:hover{
  background-color:var(--sys-red-decor-hovered, #fac1b3);
}
.promoTag--e1wrI[data-color=decor][data-appearance=red][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=decor][data-appearance=red][role=button]:active[data-color=accent]{
  background-color:var(--sys-red-accent-pressed, #ae514c);
}
.promoTag--e1wrI[data-color=decor][data-appearance=red][role=button]:active[data-color=decor]{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.promoTag--e1wrI[data-color=decor][data-appearance=orange]{
  color:var(--sys-orange-text-main, #884c23);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.promoTag--e1wrI[data-color=decor][data-appearance=orange][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-orange-decor-activated, #f5b27b);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=decor][data-appearance=orange][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=decor][data-appearance=orange][role=button]:hover{
  background-color:var(--sys-orange-decor-hovered, #f8c699);
}
.promoTag--e1wrI[data-color=decor][data-appearance=orange][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=decor][data-appearance=orange][role=button]:active[data-color=accent]{
  background-color:var(--sys-orange-accent-pressed, #e78940);
}
.promoTag--e1wrI[data-color=decor][data-appearance=orange][role=button]:active[data-color=decor]{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.promoTag--e1wrI[data-color=decor][data-appearance=yellow]{
  color:var(--sys-yellow-text-main, #815f19);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.promoTag--e1wrI[data-color=decor][data-appearance=yellow][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=decor][data-appearance=yellow][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=decor][data-appearance=yellow][role=button]:hover{
  background-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.promoTag--e1wrI[data-color=decor][data-appearance=yellow][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=decor][data-appearance=yellow][role=button]:active[data-color=accent]{
  background-color:var(--sys-yellow-accent-pressed, #d3a736);
}
.promoTag--e1wrI[data-color=decor][data-appearance=yellow][role=button]:active[data-color=decor]{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.promoTag--e1wrI[data-color=decor][data-appearance=green]{
  color:var(--sys-green-text-main, #3d6035);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.promoTag--e1wrI[data-color=decor][data-appearance=green][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=decor][data-appearance=green][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=decor][data-appearance=green][role=button]:hover{
  background-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.promoTag--e1wrI[data-color=decor][data-appearance=green][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=decor][data-appearance=green][role=button]:active[data-color=accent]{
  background-color:var(--sys-green-accent-pressed, #55915a);
}
.promoTag--e1wrI[data-color=decor][data-appearance=green][role=button]:active[data-color=decor]{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.promoTag--e1wrI[data-color=decor][data-appearance=blue]{
  color:var(--sys-blue-text-main, #2b537e);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.promoTag--e1wrI[data-color=decor][data-appearance=blue][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-blue-decor-activated, #aac4ea);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=decor][data-appearance=blue][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=decor][data-appearance=blue][role=button]:hover{
  background-color:var(--sys-blue-decor-hovered, #c5d9f6);
}
.promoTag--e1wrI[data-color=decor][data-appearance=blue][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=decor][data-appearance=blue][role=button]:active[data-color=accent]{
  background-color:var(--sys-blue-accent-pressed, #4877b0);
}
.promoTag--e1wrI[data-color=decor][data-appearance=blue][role=button]:active[data-color=decor]{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.promoTag--e1wrI[data-color=decor][data-appearance=violet]{
  color:var(--sys-violet-text-main, #59446a);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.promoTag--e1wrI[data-color=decor][data-appearance=violet][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-violet-decor-activated, #ceb7e7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=decor][data-appearance=violet][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=decor][data-appearance=violet][role=button]:hover{
  background-color:var(--sys-violet-decor-hovered, #e1d0f7);
}
.promoTag--e1wrI[data-color=decor][data-appearance=violet][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=decor][data-appearance=violet][role=button]:active[data-color=accent]{
  background-color:var(--sys-violet-accent-pressed, #8c639b);
}
.promoTag--e1wrI[data-color=decor][data-appearance=violet][role=button]:active[data-color=decor]{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.promoTag--e1wrI[data-color=decor][data-appearance=pink]{
  color:var(--sys-pink-text-main, #754158);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.promoTag--e1wrI[data-color=decor][data-appearance=pink][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-pink-decor-activated, #e8b1c1);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--e1wrI[data-color=decor][data-appearance=pink][role=button]{
  cursor:pointer;
}
.promoTag--e1wrI[data-color=decor][data-appearance=pink][role=button]:hover{
  background-color:var(--sys-pink-decor-hovered, #f5c9d6);
}
.promoTag--e1wrI[data-color=decor][data-appearance=pink][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--e1wrI[data-color=decor][data-appearance=pink][role=button]:active[data-color=accent]{
  background-color:var(--sys-pink-accent-pressed, #ae5e80);
}
.promoTag--e1wrI[data-color=decor][data-appearance=pink][role=button]:active[data-color=decor]{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}
.promoTag--e1wrI[data-size=xxs]{
  height:var(--size-promo-tag-height-xxs, 16px);
  padding-left:var(--space-promo-tag-horizontal-padding-xxs, 0px);
  padding-right:var(--space-promo-tag-horizontal-padding-xxs, 0px);
  border-radius:var(--radius-promo-tag-xxs, 4px);
  border-width:var(--border-width-promo-tag-single, 1px);
}
.promoTag--e1wrI[data-size=xxs] .labelWrapper--mXLD4{
  padding-left:var(--space-promo-tag-label-wrapper-xxs, 4px);
  padding-right:var(--space-promo-tag-label-wrapper-xxs, 4px);
}
.promoTag--e1wrI[data-size=xs]{
  height:var(--size-promo-tag-height-xs, 24px);
  padding-left:var(--space-promo-tag-horizontal-padding-xs, 0px);
  padding-right:var(--space-promo-tag-horizontal-padding-xs, 0px);
  border-radius:var(--radius-promo-tag-xs, 4px);
  border-width:var(--border-width-promo-tag-single, 1px);
}
.promoTag--e1wrI[data-size=xs] .labelWrapper--mXLD4{
  padding-left:var(--space-promo-tag-label-wrapper-xs, 4px);
  padding-right:var(--space-promo-tag-label-wrapper-xs, 4px);
}
.promoTag--e1wrI[data-size=s]{
  height:var(--size-promo-tag-height-s, 32px);
  padding-left:var(--space-promo-tag-horizontal-padding-s, 4px);
  padding-right:var(--space-promo-tag-horizontal-padding-s, 4px);
  border-radius:var(--radius-promo-tag-s, 8px);
  border-width:var(--border-width-promo-tag-single, 1px);
}
.promoTag--e1wrI[data-size=s] .labelWrapper--mXLD4{
  padding-left:var(--space-promo-tag-label-wrapper-s, 4px);
  padding-right:var(--space-promo-tag-label-wrapper-s, 4px);
}`,""]),l.locals={promoTag:"promoTag--e1wrI",labelWrapper:"labelWrapper--mXLD4"};const p=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"(O,k,e){"use strict";e.d(k,{A:()=>p});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),f=e.n(a),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),s=e.n(y),l=s()(f());l.push([O.id,`.questionTooltip--qUwih{
  cursor:pointer;
  display:inline-flex;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background:none;
  border:0;
}
.questionTooltip--qUwih:hover{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.questionTooltip--qUwih:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.questionTooltip--qUwih[data-trigger=click][data-opened=true]{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--qUwih[data-trigger=click]:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--qUwih[data-trigger=click]:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--qUwih[data-trigger=click]:focus-visible{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--qUwih[data-size=xs] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.questionTooltip--qUwih[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}`,""]),l.locals={questionTooltip:"questionTooltip--qUwih"};const p=l},"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"(O,k,e){var a="Expected a function",f=NaN,y="[object Symbol]",s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,j=/^0o[0-7]+$/i,x=parseInt,m=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,S=typeof self=="object"&&self&&self.Object===Object&&self,B=m||S||Function("return this")(),X=Object.prototype,U=X.toString,G=Math.max,I=Math.min,h=function(){return B.Date.now()};function R(t,b,W){var A,C,P,D,d,u,c=0,n=!1,i=!1,E=!0;if(typeof t!="function")throw new TypeError(a);b=L(b)||0,Y(W)&&(n=!!W.leading,i="maxWait"in W,P=i?G(L(W.maxWait)||0,b):P,E="trailing"in W?!!W.trailing:E);function w(o){var _=A,v=C;return A=C=void 0,c=o,D=t.apply(v,_),D}function de(o){return c=o,d=setTimeout(z,b),n?w(o):D}function te(o){var _=o-u,v=o-c,r=b-_;return i?I(r,P-v):r}function V(o){var _=o-u,v=o-c;return u===void 0||_>=b||_<0||i&&v>=P}function z(){var o=h();if(V(o))return ue(o);d=setTimeout(z,te(o))}function ue(o){return d=void 0,E&&A?w(o):(A=C=void 0,D)}function H(){d!==void 0&&clearTimeout(d),c=0,A=u=C=d=void 0}function pe(){return d===void 0?D:ue(h())}function ne(){var o=h(),_=V(o);if(A=arguments,C=this,u=o,_){if(d===void 0)return de(u);if(i)return d=setTimeout(z,b),w(u)}return d===void 0&&(d=setTimeout(z,b)),D}return ne.cancel=H,ne.flush=pe,ne}function Y(t){var b=typeof t;return!!t&&(b=="object"||b=="function")}function N(t){return!!t&&typeof t=="object"}function J(t){return typeof t=="symbol"||N(t)&&U.call(t)==y}function L(t){if(typeof t=="number")return t;if(J(t))return f;if(Y(t)){var b=typeof t.valueOf=="function"?t.valueOf():t;t=Y(b)?b+"":b}if(typeof t!="string")return t===0?t:+t;t=t.replace(s,"");var W=p.test(t);return W||j.test(t)?x(t.slice(2),W?2:8):l.test(t)?f:+t}O.exports=R}}]);})();
