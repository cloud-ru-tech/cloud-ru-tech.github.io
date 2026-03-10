(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[1642,5568,8186],{"./node_modules/.pnpm/@cloud-ru+ft-copy-to-clipboard@0.1.0/node_modules/@cloud-ru/ft-copy-to-clipboard/dist/esm/index.js":((x,u,e)=>{"use strict";e.d(u,{l:()=>g});var t=e("./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js"),i=e.n(t);function g(f){i()(f,{format:"text/plain"})}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js":((x,u,e)=>{"use strict";e.d(u,{Z:()=>ue});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/@floating-ui+react@0.26.24_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),g=e("./node_modules/.pnpm/@floating-ui+dom@1.7.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),f=e("./node_modules/.pnpm/@floating-ui+react-dom@2.1.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=e.n(c),v=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),R=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function T(r){const _=(0,v.useRef)(null);return(0,R.N)(()=>{_.current=r}),(0,v.useCallback)((...s)=>{const n=_.current;return n===null&&console.warn("The event handler cannot be called during render"),n==null?void 0:n(...s)},[])}function A(r,_=!0){const s=T(r);(0,v.useEffect)(()=>{if(_)return window.addEventListener("popstate",s),()=>window.removeEventListener("popstate",s)},[_,s])}var B=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),O=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),j=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js"),Q=e("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");function z({placement:r,x:_,y:s,ref:n}){if(!n.current)return{};const l=n.current.offsetWidth;switch(!0){case r.startsWith("top"):return{left:_,bottom:-l,transform:"rotate(-90deg)"};case r.startsWith("bottom"):return{left:_,top:-l,transform:"rotate(90deg)"};case r.startsWith("left"):return{top:s,right:-(l-1),transform:"rotate(180deg)"};case r.startsWith("right"):default:return{top:s,left:-(l-1)}}}const X=()=>(0,B.B)()?document.body:void 0,J=r=>(r==null?void 0:r.offsetWidth)||0,Z=({children:r,getReferenceProps:_,setReference:s,validElementWrapperClassName:n,disableSpanWrapper:l})=>(0,v.isValidElement)(r)?(0,Q.isForwardRef)(r)||(0,Q.isValidElementType)(r)||l?(0,v.cloneElement)(r,Object.assign(Object.assign({},_(Object.assign(Object.assign({},r.props),{className:p()(r.props.className,n)}))),{ref:s,key:"cloned-element"})):(0,v.createElement)("span",Object.assign({className:n,ref:s},_(),{key:"wrapped-element"}),r):typeof r=="function"?(0,t.jsx)(v.Fragment,{children:r({getReferenceProps:_,ref:s})},"function-element"):(0,v.createElement)("span",Object.assign({className:n,ref:s},_(),{key:"wrapped-element"}),r),N=r=>{const _={useHoverTrigger:!1,useClickTrigger:!1,useFocusTrigger:!1,keyboardOnly:!0};switch(r){case j.tr.Hover:return Object.assign(Object.assign({},_),{useHoverTrigger:!0});case j.tr.Click:return Object.assign(Object.assign({},_),{useClickTrigger:!0});case j.tr.FocusVisible:return Object.assign(Object.assign({},_),{useFocusTrigger:!0});case j.tr.Focus:return Object.assign(Object.assign({},_),{useFocusTrigger:!0,keyboardOnly:!1});case j.tr.ClickAndFocusVisible:return Object.assign(Object.assign({},_),{useFocusTrigger:!0,useClickTrigger:!0});case j.tr.HoverAndFocusVisible:return Object.assign(Object.assign({},_),{useFocusTrigger:!0,useHoverTrigger:!0});case j.tr.HoverAndFocus:return Object.assign(Object.assign({},_),{useFocusTrigger:!0,useHoverTrigger:!0,keyboardOnly:!1});default:return _}},F=r=>r.stopPropagation(),I=r=>r.stopPropagation();function Y(r){return r.slice(0,2)==="on"?r.replace("on","").toLowerCase():r.toLowerCase()}function ae(r){return Object.assign(Object.assign({},r),{nativeEvent:r})}function w(r){const _={};return Object.entries(r).forEach(([s,n])=>{_[s]=l=>{n(ae(l))}}),_}function K({placement:r,x:_,y:s,arrowContainerClassName:n,arrowElementClassName:l,arrowRef:d}){return(0,t.jsx)("div",{className:n,ref:d,style:z({x:_,y:s,placement:r,ref:d}),children:(0,t.jsx)("svg",{className:l,viewBox:"0 0 4 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M4 0V8L0.707106 4.70711C0.316582 4.31658 0.316583 3.68342 0.707107 3.29289L4 0Z"})})})}function G({triggerClassName:r,offsetProp:_}){const[s,n]=(0,v.useState)(0);return(0,R.N)(()=>{const l=document.querySelector("."+String(r).split(/\s+/g).map(CSS.escape).join(".")),d=l?getComputedStyle(l):null,m=d?d.getPropertyValue("--offset"):null;if(_!==void 0){n(_);return}const $=document.createElement("span");$.style.width=m||"",document.body.appendChild($);const ne=getComputedStyle($).width;document.body.removeChild($);const q=parseInt(ne||"");if(Number.isNaN(q)||q<1){n(0);return}n(q)},[_,r]),s}var D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=e.n(D),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),C=e.n(te),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),L=e.n(oe),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),U=e.n(P),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),V=e.n(S),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(M),o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"),y={};y.styleTagTransform=E(),y.setAttributes=U(),y.insert=L().bind(null,"head"),y.domAPI=C(),y.insertStyleElement=V();var k=W()(o.A,y);const a=o.A&&o.A.locals?o.A.locals:void 0;var b=function(r,_){var s={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&_.indexOf(n)<0&&(s[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(r);l<n.length;l++)_.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(r,n[l])&&(s[n[l]]=r[n[l]]);return s};function ce(r){var _,{className:s,triggerClassName:n,children:l,open:d,onOpenChange:m,placement:$=j.El.Top,hasArrow:ne,offset:q,popoverContent:le,trigger:se,outsideClick:ie,hoverDelayOpen:ge,hoverDelayClose:ee,triggerRef:H,widthStrategy:me=j.Lw.Auto,heightStrategy:pe=j.cJ.Auto,closeOnEscapeKey:ve=!0,triggerClickByKeys:De=!0,fallbackPlacements:Ce=j.Y_,arrowContainerClassName:ze,arrowElementClassName:Ie,disableSpanWrapper:Me=!1,closeOnPopstate:Re}=r,Be=b(r,["className","triggerClassName","children","open","onOpenChange","placement","hasArrow","offset","popoverContent","trigger","outsideClick","hoverDelayOpen","hoverDelayClose","triggerRef","widthStrategy","heightStrategy","closeOnEscapeKey","triggerClickByKeys","fallbackPlacements","arrowContainerClassName","arrowElementClassName","disableSpanWrapper","closeOnPopstate"]);const he=(0,v.useRef)(null),[xe,Ee]=(0,h.iC)(d,!1,m);A(()=>xe&&Ee(!1),!!Re);const Oe=(0,i.fI)(),Pe=G({triggerClassName:n,offsetProp:q}),Te=J(he.current),{floatingStyles:We,refs:_e,context:be,middlewareData:ye,placement:Ae}=(0,i.we)({nodeId:Oe,placement:$,open:xe,onOpenChange:Ee,whileElementsMounted:g.ll,middleware:[(0,f.BN)(),(0,f.cY)(Pe+Te),ne&&(0,f.UE)({element:he,padding:(Pe+Te)*2}),(0,f.UU)({fallbackPlacements:Ce}),(0,f.Ej)({apply({rects:re,availableHeight:fe}){const de=_e.floating.current;if(de){switch(pe){case j.cJ.Eq:de.style.height=`${fe}px`;break;case j.cJ.Lte:de.style.maxHeight=`${fe}px`;break;case j.cJ.Auto:default:break}switch(me){case j.Lw.Eq:de.style.width=`${re.reference.width}px`,de.style.minWidth="0px";break;case j.Lw.Gte:de.style.width="auto",de.style.minWidth=`${re.reference.width}px`;break;case j.Lw.Auto:default:de.style.width="auto",de.style.minWidth="auto"}}}}),(0,f.jD)()]}),Le=(0,v.useCallback)(re=>{_e.setReference(re),H&&(typeof H=="function"?H(re):H.current=re)},[H,_e]),{useHoverTrigger:Ue,useFocusTrigger:Ne,useClickTrigger:Ke,keyboardOnly:Ge}=N(se),He=(0,i.s9)(be,{outsidePress:ie,ancestorScroll:!1,escapeKey:ve}),Xe=(0,i.Mk)(be,{enabled:Ue,handleClose:(0,i.iB)({requireIntent:!1}),delay:{open:ge,close:ee}}),Fe=(0,i.iQ)(be,{enabled:Ne,visibleOnly:Ge}),Ve=(0,i.kp)(be,{enabled:Ke,keyboardHandlers:De}),{getFloatingProps:Qe,getReferenceProps:ke}=(0,i.bv)([He,Xe,Fe,Ve]),je=(0,v.useCallback)((re,fe)=>{typeof H=="object"&&(H!=null&&H.current)&&(_e.setReference(H.current),Object.entries(re).map(([de,we])=>{const Se=Y(de);Se&&(0,B.B)()&&(fe==="add"&&H.current.addEventListener(Se,we),fe==="remove"&&H.current.removeEventListener(Se,we))}))},[_e,H]);(0,v.useEffect)(()=>{if(l)return;const re=w(ke());return je(re,"add"),()=>je(re,"remove")},[l,je,ke]);const Ze=xe&&(0,t.jsx)(i.XF,{root:X(),children:(0,t.jsxs)("div",Object.assign({role:"presentation"},(0,O.z7)(Be),{className:p()(a.floating,s,{[a.floatingHidden]:!!(!((_=ye.hide)===null||_===void 0)&&_.referenceHidden)}),ref:_e.setFloating,style:We,"data-placement":Ae},Qe({onClick:F,onMouseDown:F,onMouseUp:F,onTouchStart:I,onTouchEnd:I,onTouchMove:I}),{children:[le,ye.arrow&&(0,t.jsx)(K,{placement:Ae,x:ye.arrow.x,y:ye.arrow.y,arrowContainerClassName:ze,arrowElementClassName:Ie,arrowRef:he})]}))},"portal");return(0,t.jsxs)(i.$c,{id:Oe,children:[l&&Z({validElementWrapperClassName:p()(n),getReferenceProps:ke,children:l,setReference:Le,disableSpanWrapper:Me}),Ze]})}function ue(r){var{children:_}=r,s=b(r,["children"]);return(0,i.R1)()===null?(0,t.jsx)(i.P6,{children:(0,t.jsx)(ce,Object.assign({},s,{children:_}))}):(0,t.jsx)(ce,Object.assign({},s,{children:_}))}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js":((x,u,e)=>{"use strict";e.d(u,{El:()=>t,Lw:()=>g,Y_:()=>c,cJ:()=>f,tr:()=>i});const t={Left:"left",LeftStart:"left-start",LeftEnd:"left-end",Right:"right",RightStart:"right-start",RightEnd:"right-end",Top:"top",TopStart:"top-start",TopEnd:"top-end",Bottom:"bottom",BottomStart:"bottom-start",BottomEnd:"bottom-end"},i={Click:"click",Hover:"hover",FocusVisible:"focusVisible",Focus:"focus",HoverAndFocusVisible:"hoverAndFocusVisible",HoverAndFocus:"hoverAndFocus",ClickAndFocusVisible:"clickAndFocusVisible"},g={Auto:"auto",Gte:"gte",Eq:"eq"},f={Auto:"auto",Lte:"lte",Eq:"eq"},c=[t.Top,t.Right,t.Bottom,t.Left]}),"./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/Status.js":((x,u,e)=>{"use strict";e.d(u,{n:()=>U});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(i),f=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),c=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const v={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},h={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=e.n(R),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=e.n(A),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),j=e.n(O),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),z=e.n(Q),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),J=e.n(X),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),N=e.n(Z),F=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),I={};I.styleTagTransform=N(),I.setAttributes=z(),I.insert=j().bind(null,"head"),I.domAPI=B(),I.insertStyleElement=J();var Y=T()(F.A,I);const ae=F.A&&F.A.locals?F.A.locals:void 0;var w=function(S,V){var M={};for(var E in S)Object.prototype.hasOwnProperty.call(S,E)&&V.indexOf(E)<0&&(M[E]=S[E]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,E=Object.getOwnPropertySymbols(S);o<E.length;o++)V.indexOf(E[o])<0&&Object.prototype.propertyIsEnumerable.call(S,E[o])&&(M[E[o]]=S[E[o]]);return M};function K(S){var{size:V=h.M,appearance:M=v.Primary,className:E}=S,o=w(S,["size","appearance","className"]);return(0,t.jsx)("div",Object.assign({className:g()(ae.container,E)},(0,p.z7)(o),{"data-size":V,children:(0,t.jsx)("div",{className:ae.indicator,"data-appearance":M})}))}const G={Xs:"xs",S:"s"},D={[G.Xs]:h.Xs,[G.S]:h.S},W={[G.Xs]:"xxs",[G.S]:"xs"};var te=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/styles.module.css"),C={};C.styleTagTransform=N(),C.setAttributes=z(),C.insert=j().bind(null,"head"),C.domAPI=B(),C.insertStyleElement=J();var oe=T()(te.A,C);const L=te.A&&te.A.locals?te.A.locals:void 0;var P=function(S,V){var M={};for(var E in S)Object.prototype.hasOwnProperty.call(S,E)&&V.indexOf(E)<0&&(M[E]=S[E]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,E=Object.getOwnPropertySymbols(S);o<E.length;o++)V.indexOf(E[o])<0&&Object.prototype.propertyIsEnumerable.call(S,E[o])&&(M[E[o]]=S[E[o]]);return M};function U(S){var{label:V,size:M=G.Xs,appearance:E=v.Primary,hasBackground:o,loading:y,className:k}=S,a=P(S,["label","size","appearance","hasBackground","loading","className"]);return(0,t.jsxs)("div",Object.assign({className:g()(L.container,k)},(0,p.z7)(a),{"data-size":M,"data-has-background":o||void 0,"data-appearance":y?v.Neutral:E,children:[y?(0,t.jsx)(f.y,{size:W[M]}):(0,t.jsx)(K,{appearance:E,size:D[M]}),(0,t.jsx)(c.m,{text:V,maxLines:1,className:L.label,"data-test-id":"status__title","data-size":M})]}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/Status.js":((x,u,e)=>{"use strict";e.d(u,{n:()=>te});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(i),f=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),c=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),v=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js"),h=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js"),R=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js");const T={Xs:"xs",S:"s"},A={[T.Xs]:R.S.Xs,[T.S]:R.S.S},B={[T.Xs]:"xxs",[T.S]:"xs"};var O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(O),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),z=e.n(Q),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),J=e.n(X),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=e.n(Z),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=e.n(F),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),ae=e.n(Y),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/styles.module.css"),K={};K.styleTagTransform=ae(),K.setAttributes=N(),K.insert=J().bind(null,"head"),K.domAPI=z(),K.insertStyleElement=I();var G=j()(w.A,K);const D=w.A&&w.A.locals?w.A.locals:void 0;var W=function(C,oe){var L={};for(var P in C)Object.prototype.hasOwnProperty.call(C,P)&&oe.indexOf(P)<0&&(L[P]=C[P]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,P=Object.getOwnPropertySymbols(C);U<P.length;U++)oe.indexOf(P[U])<0&&Object.prototype.propertyIsEnumerable.call(C,P[U])&&(L[P[U]]=C[P[U]]);return L};function te(C){var{label:oe,size:L=T.Xs,appearance:P=v.x.Primary,hasBackground:U,loading:S,className:V}=C,M=W(C,["label","size","appearance","hasBackground","loading","className"]);return(0,t.jsxs)("div",Object.assign({className:g()(D.container,V)},(0,p.z7)(M),{"data-size":L,"data-has-background":U||void 0,"data-appearance":S?v.x.Neutral:P,children:[S?(0,t.jsx)(f.y,{size:B[L]}):(0,t.jsx)(h.k,{appearance:P,size:A[L]}),(0,t.jsx)(c.m,{text:oe,maxLines:1,className:D.label,"data-test-id":"status__title","data-size":L})]}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js":((x,u,e)=>{"use strict";e.d(u,{k:()=>ae});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(i),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),c=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js"),p=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js"),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(v),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),T=e.n(R),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),B=e.n(A),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),j=e.n(O),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(Q),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),J=e.n(X),Z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),N={};N.styleTagTransform=J(),N.setAttributes=j(),N.insert=B().bind(null,"head"),N.domAPI=T(),N.insertStyleElement=z();var F=h()(Z.A,N);const I=Z.A&&Z.A.locals?Z.A.locals:void 0;var Y=function(w,K){var G={};for(var D in w)Object.prototype.hasOwnProperty.call(w,D)&&K.indexOf(D)<0&&(G[D]=w[D]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var W=0,D=Object.getOwnPropertySymbols(w);W<D.length;W++)K.indexOf(D[W])<0&&Object.prototype.propertyIsEnumerable.call(w,D[W])&&(G[D[W]]=w[D[W]]);return G};function ae(w){var{size:K=p.S.M,appearance:G=c.x.Primary,className:D}=w,W=Y(w,["size","appearance","className"]);return(0,t.jsx)("div",Object.assign({className:g()(I.container,D)},(0,f.z7)(W),{"data-size":K,children:(0,t.jsx)("div",{className:I.indicator,"data-appearance":G})}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js":((x,u,e)=>{"use strict";e.d(u,{S:()=>t});const t={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js":((x,u,e)=>{"use strict";e.d(u,{x:()=>t});const t={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js":((x,u,e)=>{"use strict";e.d(u,{o:()=>E});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(i),f=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=function(o,y){var k={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&y.indexOf(a)<0&&(k[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,a=Object.getOwnPropertySymbols(o);b<a.length;b++)y.indexOf(a[b])<0&&Object.prototype.propertyIsEnumerable.call(o,a[b])&&(k[a[b]]=o[a[b]]);return k};const h=c.forwardRef((o,y)=>{var{size:k=24}=o,a=p(o,["size"]);a.width=void 0,a.height=void 0;const b="-question-s";return typeof k=="number"&&(a.style||(a.style={}),a.style.width=k+"px",a.style.height=k+"px"),(0,t.jsx)("svg",Object.assign({ref:y,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+b},a,{children:(0,t.jsx)("use",{href:"#snack-uikit-"+b.substring(1)})}))});var R=function(o,y){var k={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&y.indexOf(a)<0&&(k[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,a=Object.getOwnPropertySymbols(o);b<a.length;b++)y.indexOf(a[b])<0&&Object.prototype.propertyIsEnumerable.call(o,a[b])&&(k[a[b]]=o[a[b]]);return k};const A=c.forwardRef((o,y)=>{var{size:k=24}=o,a=R(o,["size"]);a.width=void 0,a.height=void 0;const b="-question-xs";return typeof k=="number"&&(a.style||(a.style={}),a.style.width=k+"px",a.style.height=k+"px"),(0,t.jsx)("svg",Object.assign({ref:y,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+b},a,{children:(0,t.jsx)("use",{href:"#snack-uikit-"+b.substring(1)})}))});var B=function(o,y){var k={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&y.indexOf(a)<0&&(k[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,a=Object.getOwnPropertySymbols(o);b<a.length;b++)y.indexOf(a[b])<0&&Object.prototype.propertyIsEnumerable.call(o,a[b])&&(k[a[b]]=o[a[b]]);return k};const j=(0,c.forwardRef)((o,y)=>{var{size:k=24}=o,a=B(o,["size"]);return Number(k)>=20?(0,t.jsx)(h,Object.assign({ref:y,size:k},a)):(0,t.jsx)(A,Object.assign({ref:y,size:k},a))});var Q=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),z=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),X=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const J={S:"s",Xs:"xs"},Z={[J.Xs]:16,[J.S]:24},N={Hover:"hover",Click:"click"},F={[N.Hover]:X.tr.HoverAndFocusVisible,[N.Click]:X.tr.ClickAndFocusVisible};var I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Y=e.n(I),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(ae),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),G=e.n(K),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),W=e.n(D),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),C=e.n(te),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(oe),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),U={};U.styleTagTransform=L(),U.setAttributes=W(),U.insert=G().bind(null,"head"),U.domAPI=w(),U.insertStyleElement=C();var S=Y()(P.A,U);const V=P.A&&P.A.locals?P.A.locals:void 0;var M=function(o,y){var k={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&y.indexOf(a)<0&&(k[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,a=Object.getOwnPropertySymbols(o);b<a.length;b++)y.indexOf(a[b])<0&&Object.prototype.propertyIsEnumerable.call(o,a[b])&&(k[a[b]]=o[a[b]]);return k};function E(o){var{size:y=J.Xs,trigger:k=N.Hover,tooltipClassname:a,className:b,open:ce,onOpenChange:ue,tabIndex:r=0,triggerSupportProps:_={}}=o,s=M(o,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[n,l]=(0,f.iC)(ce,!1,ue);return(0,t.jsx)(z.m,Object.assign({},s,{className:a,open:n,onOpenChange:l,trigger:F[k],children:({getReferenceProps:d,ref:m})=>(0,t.jsx)("span",Object.assign({},d(),(0,Q.z7)(_),{ref:m,"data-size":y,"data-opened":n,"data-trigger":k,className:g()(V.questionTooltip,b),role:"button",tabIndex:r,children:(0,t.jsx)(j,{size:Z[y]})}))}))}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((x,u,e)=>{"use strict";e.d(u,{m:()=>_});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),g=e.n(i),f=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),c=e.n(f),p=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),h=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const R=[h.El.Top,h.El.Right,h.El.Bottom,h.El.Left];var T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(T),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=e.n(B),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Q=e.n(j),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),X=e.n(z),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Z=e.n(J),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),F=e.n(N),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),Y={};Y.styleTagTransform=F(),Y.setAttributes=X(),Y.insert=Q().bind(null,"head"),Y.domAPI=O(),Y.insertStyleElement=Z();var ae=A()(I.A,Y);const w=I.A&&I.A.locals?I.A.locals:void 0;var K=function(s,n){var l={};for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&n.indexOf(d)<0&&(l[d]=s[d]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,d=Object.getOwnPropertySymbols(s);m<d.length;m++)n.indexOf(d[m])<0&&Object.prototype.propertyIsEnumerable.call(s,d[m])&&(l[d[m]]=s[d[m]]);return l};function G(s){var{tip:n,trigger:l="hoverAndFocusVisible",placement:d="top",children:m,triggerRef:$,disableMaxWidth:ne=!1}=s,q=K(s,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!m&&!$?null:(0,t.jsx)(v.Z,Object.assign({placement:d,popoverContent:(0,t.jsx)("div",{className:w.tooltipContainer,"data-disable-max-width":ne,children:n}),trigger:l,triggerRef:$,arrowContainerClassName:w.tooltipArrowContainer,arrowElementClassName:w.tooltipArrowElement,hasArrow:!0,fallbackPlacements:R},q,{children:m}))}var D=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const W=s=>s?s.offsetHeight<s.scrollHeight||s.offsetWidth<s.scrollWidth:!1,te=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],C="...",oe=({text:s,element:n,truncatedElement:l})=>{if(n&&l&&W(n)){const d=n.scrollWidth/s.length;let m=s;for(const{potentialDelimiterWidth:$,leftHalfDelta:ne,rightHalfDelta:q}of te){const le=Math.floor((n.offsetWidth/d-$)/2),se=s.slice(0,le-ne),ie=s.slice(s.length-le+q,s.length);if(m=`${se}${C}${ie}`,l.innerText=m,l.scrollWidth<=n.offsetWidth-1)break}return m}return s};var L=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),P={};P.styleTagTransform=F(),P.setAttributes=X(),P.insert=Q().bind(null,"head"),P.domAPI=O(),P.insertStyleElement=Z();var U=A()(L.A,P);const S=L.A&&L.A.locals?L.A.locals:void 0;var V=function(s,n){var l={};for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&n.indexOf(d)<0&&(l[d]=s[d]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,d=Object.getOwnPropertySymbols(s);m<d.length;m++)n.indexOf(d[m])<0&&Object.prototype.propertyIsEnumerable.call(s,d[m])&&(l[d[m]]=s[d[m]]);return l};function M(s){var{text:n,className:l,tooltipClassName:d,hideTooltip:m,placement:$,trigger:ne}=s,q=V(s,["text","className","tooltipClassName","hideTooltip","placement","trigger"]);const[le,se]=(0,p.useState)(!1),[ie,ge]=(0,p.useState)(n),ee=(0,p.useRef)(null),H=(0,p.useRef)(null);(0,p.useEffect)(()=>{const pe=c()(()=>{ge(oe({element:ee.current,truncatedElement:H.current,text:n})),se(W(ee.current))},50);pe();const ve=new ResizeObserver(pe);return ee.current&&ve.observe(ee.current),()=>{ve.disconnect()}},[le,n,m]);const me=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{ref:ee,className:S.fullText,"data-test-id":"full-text",children:n}),(0,t.jsx)("span",{ref:H,className:S.truncatedText,"data-test-id":"truncated-text",children:ie})]});return(0,t.jsx)("span",Object.assign({className:g()(S.wrapper,l)},(0,D.z7)(q),{children:le&&!m?(0,t.jsx)(G,{tip:n,placement:$,hoverDelayOpen:500,triggerClassName:S.textContainer,className:d,trigger:ne,children:me}):me}))}var E=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),y={};y.styleTagTransform=F(),y.setAttributes=X(),y.insert=Q().bind(null,"head"),y.domAPI=O(),y.insertStyleElement=Z();var k=A()(o.A,y);const a=o.A&&o.A.locals?o.A.locals:void 0;var b=function(s,n){var l={};for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&n.indexOf(d)<0&&(l[d]=s[d]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,d=Object.getOwnPropertySymbols(s);m<d.length;m++)n.indexOf(d[m])<0&&Object.prototype.propertyIsEnumerable.call(s,d[m])&&(l[d[m]]=s[d[m]]);return l};function ce(s){var{text:n,className:l,tooltipClassName:d,hideTooltip:m,maxLines:$=1,placement:ne,trigger:q}=s,le=b(s,["text","className","tooltipClassName","hideTooltip","maxLines","placement","trigger"]);const se=(0,p.useRef)(null),[ie,ge]=(0,p.useState)(!1),ee=(0,p.useCallback)(()=>{ge(W(se.current))},[]);(0,E.N)(()=>{se.current&&ee()},[n,ee]),(0,p.useEffect)(()=>{const me=c()(()=>{ee()},50),pe=new ResizeObserver(me);return se.current&&(ee(),pe.observe(se.current)),()=>{pe.disconnect()}},[ie,m,ee]);const H=(0,t.jsx)("span",Object.assign({ref:se,className:g()($>1?a.text2AndMoreLines:a.text1Line,l,{[a.ellipsis]:!se.current||ie}),style:{"--max-lines":$}},(0,D.z7)(le),{children:n}));return ie&&!m?(0,t.jsx)(G,{tip:n,placement:ne,hoverDelayOpen:500,className:d,triggerClassName:a.tooltipTrigger,trigger:q,children:H}):H}const ue={Middle:"middle",End:"end"};var r=function(s,n){var l={};for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&n.indexOf(d)<0&&(l[d]=s[d]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,d=Object.getOwnPropertySymbols(s);m<d.length;m++)n.indexOf(d[m])<0&&Object.prototype.propertyIsEnumerable.call(s,d[m])&&(l[d[m]]=s[d[m]]);return l};function _(s){var{variant:n=ue.End}=s,l=r(s,["variant"]);switch(n){case ue.Middle:return(0,t.jsx)(M,Object.assign({},l));case ue.End:default:return(0,t.jsx)(ce,Object.assign({},l))}}}),"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js":((x,u,e)=>{"use strict";e.d(u,{N:()=>g});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const g=(0,i.B)()?t.useLayoutEffect:t.useEffect}),"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((x,u,e)=>{"use strict";e.d(u,{z7:()=>v});const t=/^data-test-/,i=/^(data|aria)-/;function g(h,R){return Object.keys(h).filter(T=>!T.match(R)).reduce((T,A)=>Object.assign(Object.assign({},T),{[A]:h[A]}),{})}function f(h,R){return Object.keys(h).reduce((T,A)=>(A.match(R)&&(T[A]=h[A]),T),{})}function c(h){return g(h,i)}function p(h){return f(h,t)}function v(h){return f(h,i)}}),"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js":((x,u,e)=>{"use strict";e.d(u,{B:()=>t});function t(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}}),"./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js":((x,u,e)=>{"use strict";var t=e("./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"),i={"text/plain":"Text","text/html":"Url",default:"Text"},g="Copy to clipboard: #{key}, Enter";function f(p){var v=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return p.replace(/#{\s*key\s*}/g,v)}function c(p,v){var h,R,T,A,B,O,j=!1;v||(v={}),h=v.debug||!1;try{T=t(),A=document.createRange(),B=document.getSelection(),O=document.createElement("span"),O.textContent=p,O.ariaHidden="true",O.style.all="unset",O.style.position="fixed",O.style.top=0,O.style.clip="rect(0, 0, 0, 0)",O.style.whiteSpace="pre",O.style.webkitUserSelect="text",O.style.MozUserSelect="text",O.style.msUserSelect="text",O.style.userSelect="text",O.addEventListener("copy",function(z){if(z.stopPropagation(),v.format)if(z.preventDefault(),typeof z.clipboardData=="undefined"){h&&console.warn("unable to use e.clipboardData"),h&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var X=i[v.format]||i.default;window.clipboardData.setData(X,p)}else z.clipboardData.clearData(),z.clipboardData.setData(v.format,p);v.onCopy&&(z.preventDefault(),v.onCopy(z.clipboardData))}),document.body.appendChild(O),A.selectNodeContents(O),B.addRange(A);var Q=document.execCommand("copy");if(!Q)throw new Error("copy command was unsuccessful");j=!0}catch(z){h&&console.error("unable to copy using execCommand: ",z),h&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(v.format||"text",p),v.onCopy&&v.onCopy(window.clipboardData),j=!0}catch(X){h&&console.error("unable to copy using clipboardData: ",X),h&&console.error("falling back to prompt"),R=f("message"in v?v.message:g),window.prompt(R,p)}}finally{B&&(typeof B.removeRange=="function"?B.removeRange(A):B.removeAllRanges()),O&&document.body.removeChild(O),T()}return j}x.exports=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css":((x,u,e)=>{"use strict";e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),c=f()(i());c.push([x.id,`.floating--zxsXX{
  display:flex;
  flex-direction:column;
}

.floatingHidden--CoNqV{
  display:none;
}`,""]),c.locals={floating:"floating--zxsXX",floatingHidden:"floatingHidden--CoNqV"};const p=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/styles.module.css":((x,u,e)=>{"use strict";e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),c=f()(i());c.push([x.id,`.container--PUoD0{
  display:inline-flex;
  align-items:center;
  max-width:100%;
}
.container--PUoD0[data-has-background][data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.container--PUoD0[data-has-background][data-appearance=primary] .label--vpuah{
  color:var(--sys-primary-text-support, #358561);
}
.container--PUoD0[data-has-background][data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--PUoD0[data-has-background][data-appearance=neutral] .label--vpuah{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--PUoD0[data-has-background][data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--PUoD0[data-has-background][data-appearance=red] .label--vpuah{
  color:var(--sys-red-text-support, #ae514c);
}
.container--PUoD0[data-has-background][data-appearance=orange]{
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.container--PUoD0[data-has-background][data-appearance=orange] .label--vpuah{
  color:var(--sys-orange-text-support, #bb733e);
}
.container--PUoD0[data-has-background][data-appearance=blue]{
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.container--PUoD0[data-has-background][data-appearance=blue] .label--vpuah{
  color:var(--sys-blue-text-support, #4877b0);
}
.container--PUoD0[data-has-background][data-appearance=violet]{
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.container--PUoD0[data-has-background][data-appearance=violet] .label--vpuah{
  color:var(--sys-violet-text-support, #8c639b);
}
.container--PUoD0[data-has-background][data-appearance=pink]{
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.container--PUoD0[data-has-background][data-appearance=pink] .label--vpuah{
  color:var(--sys-pink-text-support, #ae5e80);
}
.container--PUoD0[data-has-background][data-appearance=yellow]{
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.container--PUoD0[data-has-background][data-appearance=yellow] .label--vpuah{
  color:var(--sys-yellow-text-support, #b78c32);
}
.container--PUoD0[data-has-background][data-appearance=green]{
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.container--PUoD0[data-has-background][data-appearance=green] .label--vpuah{
  color:var(--sys-green-text-support, #55915a);
}
.container--PUoD0[data-has-background][data-size=xs]{
  height:var(--size-status-background-container-xs, 16px);
  padding-right:var(--spacing-status-background-container-padding-right-xs, 4px);
  padding-left:var(--spacing-status-background-container-padding-left-xs, 4px);
  gap:var(--spacing-status-container-gap-single, 2px);
  border-radius:var(--radius-status-xs, 2px);
}
.container--PUoD0[data-has-background][data-size=s]{
  height:var(--size-status-background-container-s, 24px);
  padding-right:var(--spacing-status-background-container-padding-right-s, 8px);
  padding-left:var(--spacing-status-background-container-padding-left-s, 4px);
  gap:var(--spacing-status-container-gap-single, 2px);
  border-radius:var(--radius-status-s, 4px);
}
.container--PUoD0[data-size=xs]{
  gap:var(--spacing-status-container-gap-single, 2px);
}
.container--PUoD0[data-size=xs] .label--vpuah{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.container--PUoD0[data-size=s]{
  gap:var(--spacing-status-container-gap-single, 2px);
}
.container--PUoD0[data-size=s] .label--vpuah{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}

.label--vpuah{
  color:var(--sys-neutral-text-support, #6d707f);
}`,""]),c.locals={container:"container--PUoD0",label:"label--vpuah"};const p=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((x,u,e)=>{"use strict";e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),c=f()(i());c.push([x.id,`.container--WkeRy{
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.container--WkeRy[data-size=xxs]{
  width:var(--size-status-indicator-container-xxs, 4px);
  height:var(--size-status-indicator-container-xxs, 4px);
}
.container--WkeRy[data-size=xxs] .indicator--ew8wz{
  border-radius:var(--radius-status-indicator-xxs, 2px);
  border-width:var(--border-width-general-xxs, 0.5px);
  width:var(--size-status-indicator-xxs, 4px);
  height:var(--size-status-indicator-xxs, 4px);
}
.container--WkeRy[data-size=xs]{
  width:var(--size-status-indicator-container-xs, 8px);
  height:var(--size-status-indicator-container-xs, 8px);
}
.container--WkeRy[data-size=xs] .indicator--ew8wz{
  border-radius:var(--radius-status-indicator-xs, 4px);
  border-width:var(--border-width-general-s, 1.5px);
  width:var(--size-status-indicator-xs, 8px);
  height:var(--size-status-indicator-xs, 8px);
}
.container--WkeRy[data-size=s]{
  width:var(--size-status-indicator-container-s, 16px);
  height:var(--size-status-indicator-container-s, 16px);
}
.container--WkeRy[data-size=s] .indicator--ew8wz{
  border-radius:var(--radius-status-indicator-s, 8px);
  border-width:var(--border-width-general-m, 2px);
  width:var(--size-status-indicator-s, 12px);
  height:var(--size-status-indicator-s, 12px);
}
.container--WkeRy[data-size=m]{
  width:var(--size-status-indicator-container-m, 16px);
  height:var(--size-status-indicator-container-m, 16px);
}
.container--WkeRy[data-size=m] .indicator--ew8wz{
  border-radius:var(--radius-status-indicator-m, 8px);
  border-width:var(--border-width-general-l, 3px);
  width:var(--size-status-indicator-m, 16px);
  height:var(--size-status-indicator-m, 16px);
}
.container--WkeRy[data-size=l]{
  width:var(--size-status-indicator-container-l, 24px);
  height:var(--size-status-indicator-container-l, 24px);
}
.container--WkeRy[data-size=l] .indicator--ew8wz{
  border-radius:var(--radius-status-indicator-l, 16px);
  border-width:var(--border-width-general-xl, 4px);
  width:var(--size-status-indicator-l, 24px);
  height:var(--size-status-indicator-l, 24px);
}

.indicator--ew8wz{
  box-sizing:border-box;
  border:0 solid var(--sys-neutral-background1-level, #fdfdfd);
}
.indicator--ew8wz[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.indicator--ew8wz[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.indicator--ew8wz[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.indicator--ew8wz[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.indicator--ew8wz[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.indicator--ew8wz[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.indicator--ew8wz[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.indicator--ew8wz[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.indicator--ew8wz[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),c.locals={container:"container--WkeRy",indicator:"indicator--ew8wz"};const p=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/styles.module.css":((x,u,e)=>{"use strict";e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),c=f()(i());c.push([x.id,`.container--Giqgp{
  display:inline-flex;
  align-items:center;
  max-width:100%;
}
.container--Giqgp[data-has-background][data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.container--Giqgp[data-has-background][data-appearance=primary] .label--vasBc{
  color:var(--sys-primary-text-support, #358561);
}
.container--Giqgp[data-has-background][data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--Giqgp[data-has-background][data-appearance=neutral] .label--vasBc{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--Giqgp[data-has-background][data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--Giqgp[data-has-background][data-appearance=red] .label--vasBc{
  color:var(--sys-red-text-support, #ae514c);
}
.container--Giqgp[data-has-background][data-appearance=orange]{
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.container--Giqgp[data-has-background][data-appearance=orange] .label--vasBc{
  color:var(--sys-orange-text-support, #bb733e);
}
.container--Giqgp[data-has-background][data-appearance=blue]{
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.container--Giqgp[data-has-background][data-appearance=blue] .label--vasBc{
  color:var(--sys-blue-text-support, #4877b0);
}
.container--Giqgp[data-has-background][data-appearance=violet]{
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.container--Giqgp[data-has-background][data-appearance=violet] .label--vasBc{
  color:var(--sys-violet-text-support, #8c639b);
}
.container--Giqgp[data-has-background][data-appearance=pink]{
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.container--Giqgp[data-has-background][data-appearance=pink] .label--vasBc{
  color:var(--sys-pink-text-support, #ae5e80);
}
.container--Giqgp[data-has-background][data-appearance=yellow]{
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.container--Giqgp[data-has-background][data-appearance=yellow] .label--vasBc{
  color:var(--sys-yellow-text-support, #b78c32);
}
.container--Giqgp[data-has-background][data-appearance=green]{
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.container--Giqgp[data-has-background][data-appearance=green] .label--vasBc{
  color:var(--sys-green-text-support, #55915a);
}
.container--Giqgp[data-has-background][data-size=xs]{
  height:var(--size-status-background-container-xs, 16px);
  padding-right:var(--spacing-status-background-container-padding-right-xs, 4px);
  padding-left:var(--spacing-status-background-container-padding-left-xs, 4px);
  gap:var(--spacing-status-container-gap-single, 2px);
  border-radius:var(--radius-status-xs, 2px);
}
.container--Giqgp[data-has-background][data-size=s]{
  height:var(--size-status-background-container-s, 24px);
  padding-right:var(--spacing-status-background-container-padding-right-s, 8px);
  padding-left:var(--spacing-status-background-container-padding-left-s, 4px);
  gap:var(--spacing-status-container-gap-single, 2px);
  border-radius:var(--radius-status-s, 4px);
}
.container--Giqgp[data-size=xs]{
  gap:var(--spacing-status-container-gap-single, 2px);
}
.container--Giqgp[data-size=xs] .label--vasBc{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.container--Giqgp[data-size=s]{
  gap:var(--spacing-status-container-gap-single, 2px);
}
.container--Giqgp[data-size=s] .label--vasBc{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}

.label--vasBc{
  color:var(--sys-neutral-text-support, #6d707f);
}`,""]),c.locals={container:"container--Giqgp",label:"label--vasBc"};const p=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((x,u,e)=>{"use strict";e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),c=f()(i());c.push([x.id,`.container--GmOEt{
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.container--GmOEt[data-size=xxs]{
  width:var(--size-status-indicator-container-xxs, 4px);
  height:var(--size-status-indicator-container-xxs, 4px);
}
.container--GmOEt[data-size=xxs] .indicator--usUD9{
  border-radius:var(--radius-status-indicator-xxs, 2px);
  border-width:var(--border-width-general-xxs, 0.5px);
  width:var(--size-status-indicator-xxs, 4px);
  height:var(--size-status-indicator-xxs, 4px);
}
.container--GmOEt[data-size=xs]{
  width:var(--size-status-indicator-container-xs, 8px);
  height:var(--size-status-indicator-container-xs, 8px);
}
.container--GmOEt[data-size=xs] .indicator--usUD9{
  border-radius:var(--radius-status-indicator-xs, 4px);
  border-width:var(--border-width-general-s, 1.5px);
  width:var(--size-status-indicator-xs, 8px);
  height:var(--size-status-indicator-xs, 8px);
}
.container--GmOEt[data-size=s]{
  width:var(--size-status-indicator-container-s, 16px);
  height:var(--size-status-indicator-container-s, 16px);
}
.container--GmOEt[data-size=s] .indicator--usUD9{
  border-radius:var(--radius-status-indicator-s, 8px);
  border-width:var(--border-width-general-m, 2px);
  width:var(--size-status-indicator-s, 12px);
  height:var(--size-status-indicator-s, 12px);
}
.container--GmOEt[data-size=m]{
  width:var(--size-status-indicator-container-m, 16px);
  height:var(--size-status-indicator-container-m, 16px);
}
.container--GmOEt[data-size=m] .indicator--usUD9{
  border-radius:var(--radius-status-indicator-m, 8px);
  border-width:var(--border-width-general-l, 3px);
  width:var(--size-status-indicator-m, 16px);
  height:var(--size-status-indicator-m, 16px);
}
.container--GmOEt[data-size=l]{
  width:var(--size-status-indicator-container-l, 24px);
  height:var(--size-status-indicator-container-l, 24px);
}
.container--GmOEt[data-size=l] .indicator--usUD9{
  border-radius:var(--radius-status-indicator-l, 16px);
  border-width:var(--border-width-general-xl, 4px);
  width:var(--size-status-indicator-l, 24px);
  height:var(--size-status-indicator-l, 24px);
}

.indicator--usUD9{
  box-sizing:border-box;
  border:0 solid var(--sys-neutral-background1-level, #fdfdfd);
}
.indicator--usUD9[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.indicator--usUD9[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.indicator--usUD9[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.indicator--usUD9[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.indicator--usUD9[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.indicator--usUD9[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.indicator--usUD9[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.indicator--usUD9[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.indicator--usUD9[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),c.locals={container:"container--GmOEt",indicator:"indicator--usUD9"};const p=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css":((x,u,e)=>{"use strict";e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),c=f()(i());c.push([x.id,`.questionTooltip--DxuzD{
  cursor:pointer;
  display:inline-flex;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background:none;
  border:0;
}
.questionTooltip--DxuzD:hover{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.questionTooltip--DxuzD:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.questionTooltip--DxuzD[data-trigger=click][data-opened=true]{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--DxuzD[data-trigger=click]:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--DxuzD[data-trigger=click]:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--DxuzD[data-trigger=click]:focus-visible{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--DxuzD[data-size=xs] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.questionTooltip--DxuzD[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}`,""]),c.locals={questionTooltip:"questionTooltip--DxuzD"};const p=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((x,u,e)=>{"use strict";e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),c=f()(i());c.push([x.id,`.tooltipContainer--ZNntQ{
  padding:var(--space-tooltip-padding-single, 8px);
  border-radius:var(--radius-tooltip-container, 4px);
  min-width:var(--size-tooltip-container-min-width, 20px);
  max-width:var(--size-tooltip-container-max-width, 416px);
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  overflow:hidden;
  box-sizing:border-box;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  word-wrap:break-word;
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.tooltipContainer--ZNntQ[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--mdVgQ{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 4px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 4px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--_W9js{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),c.locals={tooltipContainer:"tooltipContainer--ZNntQ",tooltipArrowContainer:"tooltipArrowContainer--mdVgQ",tooltipArrowElement:"tooltipArrowElement--_W9js"};const p=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((x,u,e)=>{"use strict";e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),c=f()(i());c.push([x.id,`.text1Line--gfCAB{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--KlMgE{
  text-overflow:ellipsis;
}

.text2AndMoreLines--RmIUU{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--sNo2h{
  display:grid;
}`,""]),c.locals={text1Line:"text1Line--gfCAB",ellipsis:"ellipsis--KlMgE",text2AndMoreLines:"text2AndMoreLines--RmIUU",tooltipTrigger:"tooltipTrigger--sNo2h"};const p=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((x,u,e)=>{"use strict";e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(t),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(g),c=f()(i());c.push([x.id,`.wrapper--I5kFW{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--oUab6{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--syC3I{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--n9NTy{
  display:inline-flex;
}`,""]),c.locals={wrapper:"wrapper--I5kFW",truncatedText:"truncatedText--oUab6",fullText:"fullText--syC3I",textContainer:"textContainer--n9NTy"};const p=c}),"./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js":(x=>{x.exports=function(){var u=document.getSelection();if(!u.rangeCount)return function(){};for(var e=document.activeElement,t=[],i=0;i<u.rangeCount;i++)t.push(u.getRangeAt(i));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return u.removeAllRanges(),function(){u.type==="Caret"&&u.removeAllRanges(),u.rangeCount||t.forEach(function(g){u.addRange(g)}),e&&e.focus()}}})}]);})();
