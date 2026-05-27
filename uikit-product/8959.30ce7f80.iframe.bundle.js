(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[8959,9267],{"./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/Carousel.js"(k,y,e){"use strict";e.d(y,{F:()=>ie});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=e.n(b),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),_=e("./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js"),O=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const x={arrowNext:"carousel__arrow-next",arrowPrev:"carousel__arrow-prev",pagination:"carousel__pagination",trackLine:"carousel__track-line",trackItem:"carousel__track-item"};var m=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronLeft/index.js"),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=e.n(A),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),L=e.n(V),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),E=e.n($),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(h),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Y=e.n(R),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),X=e.n(te),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"),r={};r.styleTagTransform=X(),r.setAttributes=M(),r.insert=E().bind(null,"head"),r.domAPI=L(),r.insertStyleElement=Y();var I=W()(n.A,r);const D=n.A&&n.A.locals?n.A.locals:void 0;var j=function(t,u){var c={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&u.indexOf(s)<0&&(c[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,s=Object.getOwnPropertySymbols(t);p<s.length;p++)u.indexOf(s[p])<0&&Object.prototype.propertyIsEnumerable.call(t,s[p])&&(c[s[p]]=t[s[p]]);return c};const T=(0,a.forwardRef)((t,u)=>{var{onClick:c,variant:s,className:p}=t,re=j(t,["onClick","variant","className"]);return(0,o.jsx)("button",Object.assign({ref:u,className:v()(D.control,p),onClick:c,type:"button","data-variant":s},(0,O.z7)(re),{children:(0,o.jsx)(m.A,{size:24,className:D.icon})}))});var K=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),i=e.n(K),S=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),P=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"),g={};g.styleTagTransform=X(),g.setAttributes=M(),g.insert=E().bind(null,"head"),g.domAPI=L(),g.insertStyleElement=Y();var ae=W()(l.A,g);const w=l.A&&l.A.locals?l.A.locals:void 0;var ve=function(t,u){var c={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&u.indexOf(s)<0&&(c[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,s=Object.getOwnPropertySymbols(t);p<s.length;p++)u.indexOf(s[p])<0&&Object.prototype.propertyIsEnumerable.call(t,s[p])&&(c[s[p]]=t[s[p]]);return c};function fe({items:t,showItems:u,scrollBy:c,slideCallback:s,transition:p,swipe:re,swipeActivateLength:je,page:ne,gap:le}){const de=(0,a.useRef)(null),[Q,U]=(0,a.useState)({itemWidth:0,gap:0}),z=(0,a.useCallback)(()=>{const f=de.current;if(!f)return;const C=getComputedStyle(f),F=Number.parseFloat(C.getPropertyValue("--gap")),q=Number.parseFloat(C.getPropertyValue("padding-left")),ee=Number.parseFloat(C.getPropertyValue("padding-right")),me=(f.getBoundingClientRect().width-(Math.trunc(u)-1)*F-q-ee)/u;U({itemWidth:me,gap:F})},[u]);(0,a.useEffect)(()=>{const f=de.current;if(!f)return;z();const C=new ResizeObserver(i()(z,100));return C.observe(f),()=>C.disconnect()},[z]);const ue=(0,a.useRef)(null),_e=()=>{var f;(f=ue.current)===null||f===void 0||f.querySelectorAll(`[data-test-id=${x.trackItem}]`).forEach(C=>{C.setAttribute("aria-hidden","0"),C.querySelectorAll('a, button, select, input, textarea, [tabindex="0"]').forEach(F=>{F.setAttribute("tabindex","-5"),F.classList.add(w.hiddenItem)})})},Se=(f,C,F)=>{var q;(q=ue.current)===null||q===void 0||q.querySelectorAll(`[data-test-id=${x.trackItem}]`).forEach((ee,me)=>{me>=C*f&&me<C*f+Math.trunc(F)&&(ee.removeAttribute("aria-hidden"),ee.querySelectorAll('a, button, select, input, textarea, [tabindex="-5"]').forEach(ge=>{ge.setAttribute("tabindex","0"),ge.classList.remove(w.hiddenItem)}))})},xe=(0,a.useMemo)(()=>Number(-(ne*c*Q.itemWidth+Q.gap*ne*c)),[Q.gap,Q.itemWidth,ne,c]);(0,a.useEffect)(()=>{_e(),Se(c,ne,u)},[ne,c,u]);const be=(0,a.useCallback)(f=>{var C,F;if(u===1)return;const q=f.currentTarget.getBoundingClientRect(),ee=(C=de.current)===null||C===void 0?void 0:C.getBoundingClientRect(),ge=((F=ee==null?void 0:ee.right)!==null&&F!==void 0?F:0)-q.right;Math.min(ge,q.x)<0&&s(ge)},[u,s]),ce=(0,a.useMemo)(()=>Q.itemWidth>0?Q.itemWidth:`${Math.floor(100/u)}%`,[Q.itemWidth,u]),[Z,H]=(0,a.useState)({drag:0,pointers:!0}),G=f=>{H({drag:f.deltaX,pointers:Math.abs(f.deltaX)<Number.MIN_SAFE_INTEGER})},pe=f=>{if(Math.abs(Z.drag)<je)return H({drag:0,pointers:!0});s(f.dir==="Left"?-1:1),H({drag:0,pointers:!0})},J=(0,P.u)({onSwiping:G,onSwiped:pe,trackMouse:!0,enabled:re,availableDirections:["Left","Right"]}),{ref:Ee}=J,B=ve(J,["ref"]);return(0,o.jsx)("div",{ref:de,className:w.itemProvider,"data-pointers":!Z.pointers||void 0,"data-swipe":re||void 0,"data-gap":le,style:Object.assign({},le?{"--gap":le}:{}),children:(0,o.jsx)("div",Object.assign({},B,{className:w.itemTracker,"data-test-id":x.trackLine,style:{transform:`translateX(${xe+Z.drag}px)`,transition:`transform ${p}s ease 0s`},ref:(0,S.A)(Ee,ue),children:t.map((f,C)=>(0,o.jsx)("div",{style:{width:ce},className:w.itemContainer,role:"group","data-test-id":x.trackItem,onClick:be,children:f},C))}))})}var se=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"),N={};N.styleTagTransform=X(),N.setAttributes=M(),N.insert=E().bind(null,"head"),N.domAPI=L(),N.insertStyleElement=Y();var ye=W()(se.A,N);const oe=se.A&&se.A.locals?se.A.locals:void 0;var he=function(t,u){var c={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&u.indexOf(s)<0&&(c[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,s=Object.getOwnPropertySymbols(t);p<s.length;p++)u.indexOf(s[p])<0&&Object.prototype.propertyIsEnumerable.call(t,s[p])&&(c[s[p]]=t[s[p]]);return c};function ie(t){var u,{children:c,showItems:s=1,scrollBy:p,transition:re=.4,swipe:je=!0,arrows:ne=!0,pagination:le=!0,className:de,gap:Q,state:U,infiniteScroll:z=!1,swipeActivateLength:ue=48,autoSwipe:_e,controlsVisibility:Se="hover"}=t,xe=he(t,["children","showItems","scrollBy","transition","swipe","arrows","pagination","className","gap","state","infiniteScroll","swipeActivateLength","autoSwipe","controlsVisibility"]);const be=(0,a.useRef)(),ce=(0,a.useMemo)(()=>p!=null?p:Math.trunc(s),[s,p]),[Z,H]=(0,d.iC)(U==null?void 0:U.page,(u=U==null?void 0:U.page)!==null&&u!==void 0?u:0,B=>{const f=typeof B=="function"?B(Z):B;U==null||U.onChange(f)}),G=(0,a.useMemo)(()=>c.length<=s?1:1+Math.ceil((c.length-s)/ce),[c.length,ce,s]),pe=(0,a.useCallback)(()=>{H(B=>z?(G+B-1)%G:Math.max(0,B-1))},[z,H,G]),J=(0,a.useCallback)(()=>{H(B=>z?(B+1)%G:Math.min(G-1,B+1))},[z,H,G]),Ee=(0,a.useCallback)(B=>{if(B<0){J();return}pe()},[pe,J]);return(0,a.useEffect)(()=>{if(!(!_e||!z))return be.current=setTimeout(()=>J(),_e*1e3),()=>clearTimeout(be.current)},[_e,z,J]),(0,o.jsxs)("div",Object.assign({className:v()(oe.carousel,de),"data-controls-visibility":Se},(0,O.z7)(xe),{children:[(0,o.jsxs)("div",{className:oe.carouselBase,children:[(0,o.jsx)(fe,{showItems:s,scrollBy:ce,swipe:je,transition:re,items:c,slideCallback:Ee,page:Z,gap:Q,swipeActivateLength:ue}),ne&&(0,o.jsxs)(o.Fragment,{children:[(z||Z>0)&&(0,o.jsx)(T,{onClick:pe,variant:"prev","data-test-id":x.arrowPrev,className:oe.control}),(z||Z+1<G)&&(0,o.jsx)(T,{onClick:J,variant:"next","data-test-id":x.arrowNext,className:oe.control})]})]}),le&&(0,o.jsx)("div",{className:oe.pagination,children:(0,o.jsx)(_.I,{"data-test-id":x.pagination,page:Z+1,onChange:B=>{H(B-1)},total:G})})]}))}},"./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/PaginationSlider.js"(k,y,e){"use strict";e.d(y,{I:()=>K});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),v=e("./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/utils/getRange.js"),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(a),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=e.n(_),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),m=e.n(x),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),W=e.n(A),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),L=e.n(V),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n($),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css"),M={};M.styleTagTransform=E(),M.setAttributes=W(),M.insert=m().bind(null,"head"),M.domAPI=O(),M.insertStyleElement=L();var R=d()(h.A,M);const Y=h.A&&h.A.locals?h.A.locals:void 0;var te=function(i,S){var P={};for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&S.indexOf(l)<0&&(P[l]=i[l]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,l=Object.getOwnPropertySymbols(i);g<l.length;g++)S.indexOf(l[g])<0&&Object.prototype.propertyIsEnumerable.call(i,l[g])&&(P[l[g]]=i[l[g]]);return P};function X(i){var{activated:S,onClick:P}=i,l=te(i,["activated","onClick"]);return(0,o.jsx)("button",Object.assign({type:"button",className:Y.pageButtonSlider,onClick:P},(0,b.z7)(l),{"data-activated":S||void 0,children:(0,o.jsx)("div",{className:Y.pageButtonSliderDot})}))}var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css"),r={};r.styleTagTransform=E(),r.setAttributes=W(),r.insert=m().bind(null,"head"),r.domAPI=O(),r.insertStyleElement=L();var I=d()(n.A,r);const D=n.A&&n.A.locals?n.A.locals:void 0;var j=function(i,S){var P={};for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&S.indexOf(l)<0&&(P[l]=i[l]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,l=Object.getOwnPropertySymbols(i);g<l.length;g++)S.indexOf(l[g])<0&&Object.prototype.propertyIsEnumerable.call(i,l[g])&&(P[l[g]]=i[l[g]]);return P};const T=1;function K(i){var{total:S,page:P,onChange:l,className:g}=i,ae=j(i,["total","page","onChange","className"]);return(0,o.jsx)("nav",Object.assign({className:g},(0,b.z7)(ae),{children:(0,o.jsx)("ul",{className:D.paginationSlider,children:(0,v.e)(T,S).map(w=>(0,o.jsx)("li",{children:(0,o.jsx)(X,{activated:w===P,onClick:()=>l(w),"data-test-id":`page-button-slider-${w}`})},w))})}))}},"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js"(k,y,e){"use strict";e.d(y,{E:()=>n});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=e.n(b),a=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(d),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),x=e.n(O),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),A=e.n(m),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),V=e.n(W),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),$=e.n(L),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=e.n(E),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"),R={};R.styleTagTransform=h(),R.setAttributes=V(),R.insert=A().bind(null,"head"),R.domAPI=x(),R.insertStyleElement=$();var Y=_()(M.A,R);const te=M.A&&M.A.locals?M.A.locals:void 0;var X=function(r,I){var D={};for(var j in r)Object.prototype.hasOwnProperty.call(r,j)&&I.indexOf(j)<0&&(D[j]=r[j]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,j=Object.getOwnPropertySymbols(r);T<j.length;T++)I.indexOf(j[T])<0&&Object.prototype.propertyIsEnumerable.call(r,j[T])&&(D[j[T]]=r[j[T]]);return D};function n(r){var{width:I,height:D,className:j,borderRadius:T,loading:K,children:i}=r,S=X(r,["width","height","className","borderRadius","loading","children"]);return(0,a.v)(K)?(0,o.jsx)("div",Object.assign({},S,{style:{width:I,height:D,borderRadius:T},className:v()(te.skeleton,j)})):(0,o.jsx)(o.Fragment,{children:i})}},"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js"(k,y,e){"use strict";e.d(y,{Q:()=>a,r:()=>v});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const v=(0,b.createContext)(!1);function a({loading:d,children:_}){return(0,o.jsx)(v.Provider,{value:d,children:_})}},"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"(k,y,e){"use strict";e.d(y,{v:()=>v});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js");function v(a){return(0,o.useContext)(b.r)||a}},"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"(k,y,e){"use strict";e.d(y,{a:()=>a,u:()=>d});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=e("./node_modules/.pnpm/react-swipeable@7.0.2_react@18.2.0/node_modules/react-swipeable/es/index.js"),v=function(_,O){var x={};for(var m in _)Object.prototype.hasOwnProperty.call(_,m)&&O.indexOf(m)<0&&(x[m]=_[m]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var A=0,m=Object.getOwnPropertySymbols(_);A<m.length;A++)O.indexOf(m[A])<0&&Object.prototype.propertyIsEnumerable.call(_,m[A])&&(x[m[A]]=_[m[A]]);return x};const a="data-swipe-directions";function d(_){var{availableDirections:O,enabled:x=!0}=_,m=v(_,["availableDirections","enabled"]);const A=(0,o.useRef)(!0),W=E=>{var h;if(O){if(!O.includes(E.dir)){A.current=!1;return}if(!m.onSwipeStart)return;E.event.stopPropagation()}(h=m.onSwipeStart)===null||h===void 0||h.call(m,E)},V=E=>{var h;if(O){if(!A.current)return;E.event.stopPropagation()}(h=m.onSwiping)===null||h===void 0||h.call(m,E)},L=E=>{var h;if(O){if(!A.current){A.current=!0;return}E.event.stopPropagation()}(h=m.onSwiped)===null||h===void 0||h.call(m,E)},$=(0,b.uh)(x?Object.assign(Object.assign({},m),{onSwipeStart:W,onSwiping:V,onSwiped:L}):{});return Object.assign(Object.assign({},$),{[a]:x&&O?O.join(" "):void 0})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Carousel/styles.module.css"(k,y,e){"use strict";e.d(y,{A:()=>_});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(o),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(v),d=a()(b());d.push([k.id,`.carouselBase--PS1nK{
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
}`,""]),d.locals={carouselBase:"carouselBase--PS1nK",control:"control--Kuqu4",carousel:"carousel--MQLWW",pagination:"pagination--MTG2w"};const _=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/Control/styles.module.css"(k,y,e){"use strict";e.d(y,{A:()=>_});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(o),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(v),d=a()(b());d.push([k.id,`.control--EOGtE{
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
}`,""]),d.locals={control:"control--EOGtE",icon:"icon--B2B8Z"};const _=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+carousel@0.6.11_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/carousel/dist/esm/components/ItemProvider/styles.module.css"(k,y,e){"use strict";e.d(y,{A:()=>_});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(o),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(v),d=a()(b());d.push([k.id,`.itemProvider--ucFjs{
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
}`,""]),d.locals={itemProvider:"itemProvider--ucFjs",itemContainer:"itemContainer--THRtb",itemTracker:"itemTracker--wcS36",hiddenItem:"hiddenItem--YY0b_"};const _=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PageSliderButton/styles.module.css"(k,y,e){"use strict";e.d(y,{A:()=>_});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(o),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(v),d=a()(b());d.push([k.id,`.pageButtonSlider--Pto0F{
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
}`,""]),d.locals={pageButtonSlider:"pageButtonSlider--Pto0F",pageButtonSliderDot:"pageButtonSliderDot--CAshK"};const _=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+pagination@0.10.24_react@18.2.0/node_modules/@snack-uikit/pagination/dist/esm/components/PaginationSlider/styles.module.css"(k,y,e){"use strict";e.d(y,{A:()=>_});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(o),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(v),d=a()(b());d.push([k.id,`.paginationSlider--ERvTx{
  display:flex;
  margin:0;
  padding:0;
  list-style-type:none;
}
.paginationSlider--ERvTx > li{
  display:flex;
  align-items:center;
  justify-content:center;
}`,""]),d.locals={paginationSlider:"paginationSlider--ERvTx"};const _=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"(k,y,e){"use strict";e.d(y,{A:()=>_});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(o),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(v),d=a()(b());d.push([k.id,`.skeleton--PAZeY{
  box-sizing:border-box;
  width:100%;
  height:1em;
  background:var(--gradient-skeleton, linear-gradient(115deg, rgba(36, 36, 48, 0.0784313725) 40%, rgba(36, 36, 48, 0) 50%, rgba(36, 36, 48, 0.0784313725) 60%)) 0 0/200% 100% repeat fixed;
  animation:loading--tDzwE 2s infinite linear;
}
@keyframes loading--tDzwE{
  to{
    background-position:-200% 0;
  }
}`,""]),d.locals={skeleton:"skeleton--PAZeY",loading:"loading--tDzwE"};const _=d},"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"(k,y,e){var o="Expected a function",b=NaN,v="[object Symbol]",a=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,O=/^0o[0-7]+$/i,x=parseInt,m=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,A=typeof self=="object"&&self&&self.Object===Object&&self,W=m||A||Function("return this")(),V=Object.prototype,L=V.toString,$=Math.max,E=Math.min,h=function(){return W.Date.now()};function M(n,r,I){var D,j,T,K,i,S,P=0,l=!1,g=!1,ae=!0;if(typeof n!="function")throw new TypeError(o);r=X(r)||0,R(I)&&(l=!!I.leading,g="maxWait"in I,T=g?$(X(I.maxWait)||0,r):T,ae="trailing"in I?!!I.trailing:ae);function w(t){var u=D,c=j;return D=j=void 0,P=t,K=n.apply(c,u),K}function ve(t){return P=t,i=setTimeout(N,r),l?w(t):K}function fe(t){var u=t-S,c=t-P,s=r-u;return g?E(s,T-c):s}function se(t){var u=t-S,c=t-P;return S===void 0||u>=r||u<0||g&&c>=T}function N(){var t=h();if(se(t))return ye(t);i=setTimeout(N,fe(t))}function ye(t){return i=void 0,ae&&D?w(t):(D=j=void 0,K)}function oe(){i!==void 0&&clearTimeout(i),P=0,D=S=j=i=void 0}function he(){return i===void 0?K:ye(h())}function ie(){var t=h(),u=se(t);if(D=arguments,j=this,S=t,u){if(i===void 0)return ve(S);if(g)return i=setTimeout(N,r),w(S)}return i===void 0&&(i=setTimeout(N,r)),K}return ie.cancel=oe,ie.flush=he,ie}function R(n){var r=typeof n;return!!n&&(r=="object"||r=="function")}function Y(n){return!!n&&typeof n=="object"}function te(n){return typeof n=="symbol"||Y(n)&&L.call(n)==v}function X(n){if(typeof n=="number")return n;if(te(n))return b;if(R(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=R(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=n.replace(a,"");var I=_.test(n);return I||O.test(n)?x(n.slice(2),I?2:8):d.test(n)?b:+n}k.exports=M}}]);})();
