"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[740],{"./node_modules/.pnpm/@snack-uikit+popover-private@0.15.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"(k,E,e){e.d(E,{Z:()=>d});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/@floating-ui+react@0.26.24_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),b=e("./node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),v=e("./node_modules/.pnpm/@floating-ui+react-dom@2.1.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(c),j=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),W=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),F=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/usePopstateSubscription.js"),K=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),ne=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),h=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js"),ee=e("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");function G({placement:s,x:n,y:f,ref:l}){if(!l.current)return{};const a=l.current.offsetWidth;switch(!0){case s.startsWith("top"):return{left:n,bottom:-a,transform:"rotate(-90deg)"};case s.startsWith("bottom"):return{left:n,top:-a,transform:"rotate(90deg)"};case s.startsWith("left"):return{top:f,right:-(a-1),transform:"rotate(180deg)"};case s.startsWith("right"):default:return{top:f,left:-(a-1)}}}const X=()=>(0,K.B)()?document.body:void 0,N=s=>(s==null?void 0:s.offsetWidth)||0,Z=({children:s,getReferenceProps:n,setReference:f,validElementWrapperClassName:l,disableSpanWrapper:a})=>(0,j.isValidElement)(s)?(0,ee.isForwardRef)(s)||(0,ee.isValidElementType)(s)||a?(0,j.cloneElement)(s,Object.assign(Object.assign({},n(Object.assign(Object.assign({},s.props),{className:m()(s.props.className,l)}))),{ref:f,key:"cloned-element"})):(0,j.createElement)("span",Object.assign({className:l,ref:f},n(),{key:"wrapped-element"}),s):typeof s=="function"?(0,r.jsx)(j.Fragment,{children:s({getReferenceProps:n,ref:f})},"function-element"):(0,j.createElement)("span",Object.assign({className:l,ref:f},n(),{key:"wrapped-element"}),s),B=s=>{const n={useHoverTrigger:!1,useClickTrigger:!1,useFocusTrigger:!1,keyboardOnly:!0};switch(s){case h.tr.Hover:return Object.assign(Object.assign({},n),{useHoverTrigger:!0});case h.tr.Click:return Object.assign(Object.assign({},n),{useClickTrigger:!0});case h.tr.FocusVisible:return Object.assign(Object.assign({},n),{useFocusTrigger:!0});case h.tr.Focus:return Object.assign(Object.assign({},n),{useFocusTrigger:!0,keyboardOnly:!1});case h.tr.ClickAndFocusVisible:return Object.assign(Object.assign({},n),{useFocusTrigger:!0,useClickTrigger:!0});case h.tr.HoverAndFocusVisible:return Object.assign(Object.assign({},n),{useFocusTrigger:!0,useHoverTrigger:!0});case h.tr.HoverAndFocus:return Object.assign(Object.assign({},n),{useFocusTrigger:!0,useHoverTrigger:!0,keyboardOnly:!1});default:return n}},se=s=>s.stopPropagation(),H=s=>s.stopPropagation();function ae(s){return s.slice(0,2)==="on"?s.replace("on","").toLowerCase():s.toLowerCase()}function te(s){return Object.assign(Object.assign({},s),{nativeEvent:s})}function g(s){const n={};return Object.entries(s).forEach(([f,l])=>{n[f]=a=>{l(te(a))}}),n}function Q({placement:s,x:n,y:f,arrowContainerClassName:l,arrowElementClassName:a,arrowRef:M}){return(0,r.jsx)("div",{className:l,ref:M,style:G({x:n,y:f,placement:s,ref:M}),children:(0,r.jsx)("svg",{className:a,viewBox:"0 0 4 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M4 0V8L0.707106 4.70711C0.316582 4.31658 0.316583 3.68342 0.707107 3.29289L4 0Z"})})})}var z=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function y({triggerClassName:s,offsetProp:n}){const[f,l]=(0,j.useState)(0);return(0,z.N)(()=>{const a=document.querySelector("."+String(s).split(/\s+/g).map(CSS.escape).join(".")),M=a?getComputedStyle(a):null,$=M?M.getPropertyValue("--offset"):null;if(n!==void 0){l(n);return}const T=document.createElement("span");T.style.width=$||"",document.body.appendChild(T);const R=getComputedStyle(T).width;document.body.removeChild(T);const Y=parseInt(R||"");if(Number.isNaN(Y)||Y<1){l(0);return}l(Y)},[n,s]),f}var D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(D),ie=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),oe=e.n(ie),le=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),L=e.n(le),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),pe=e.n(J),re=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),fe=e.n(re),me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=e.n(me),U=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.15.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"),C={};C.styleTagTransform=I(),C.setAttributes=pe(),C.insert=L().bind(null,"head"),C.domAPI=oe(),C.insertStyleElement=fe();var t=P()(U.A,C);const i=U.A&&U.A.locals?U.A.locals:void 0;var p=function(s,n){var f={};for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&n.indexOf(l)<0&&(f[l]=s[l]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,l=Object.getOwnPropertySymbols(s);a<l.length;a++)n.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(s,l[a])&&(f[l[a]]=s[l[a]]);return f};function o(s){var n,{className:f,triggerClassName:l,children:a,open:M,onOpenChange:$,placement:T=h.El.Top,hasArrow:R,offset:Y,popoverContent:w,trigger:q,outsideClick:ce,hoverDelayOpen:ge,hoverDelayClose:he,triggerRef:A,widthStrategy:S=h.Lw.Auto,heightStrategy:_=h.cJ.Auto,closeOnEscapeKey:O=!0,triggerClickByKeys:ye=!0,fallbackPlacements:Te=h.Y_,arrowContainerClassName:je,arrowElementClassName:Ee,disableSpanWrapper:Ne=!1,closeOnPopstate:Le}=s,Re=p(s,["className","triggerClassName","children","open","onOpenChange","placement","hasArrow","offset","popoverContent","trigger","outsideClick","hoverDelayOpen","hoverDelayClose","triggerRef","widthStrategy","heightStrategy","closeOnEscapeKey","triggerClickByKeys","fallbackPlacements","arrowContainerClassName","arrowElementClassName","disableSpanWrapper","closeOnPopstate"]);const Se=(0,j.useRef)(null),[ue,xe]=(0,W.iC)(M,!1,$),Me=(0,j.useRef)(ue);(0,j.useEffect)(()=>{Me.current=ue},[ue]);const ze=(0,j.useCallback)((x,...de)=>{x!==Me.current&&(Me.current=x,xe(x,...de))},[xe]);(0,F.V)(()=>ue&&ze(!1),!!Le);const De=(0,u.fI)(),Pe=y({triggerClassName:l,offsetProp:Y}),Ie=N(Se.current),{floatingStyles:We,refs:_e,context:ve,middlewareData:be,placement:Ce}=(0,u.we)({nodeId:De,placement:T,open:ue,onOpenChange:ze,whileElementsMounted:b.ll,middleware:[(0,v.BN)(),(0,v.cY)(Pe+Ie),R&&(0,v.UE)({element:Se,padding:(Pe+Ie)*2}),(0,v.UU)({fallbackPlacements:Te}),(0,v.Ej)({apply({rects:x,availableHeight:de}){const V=_e.floating.current;if(V){switch(_){case h.cJ.Eq:V.style.height=`${de}px`;break;case h.cJ.Lte:V.style.maxHeight=`${de}px`;break;case h.cJ.Auto:default:break}switch(S){case h.Lw.Eq:V.style.width=`${x.reference.width}px`,V.style.minWidth="0px";break;case h.Lw.Gte:V.style.width="auto",V.style.minWidth=`${x.reference.width}px`;break;case h.Lw.Auto:default:V.style.width="auto",V.style.minWidth="auto"}}}}),(0,v.jD)()]}),Be=(0,j.useCallback)(x=>{_e.setReference(x),A&&(typeof A=="function"?A(x):A.current=x)},[A,_e]),{useHoverTrigger:He,useFocusTrigger:Ue,useClickTrigger:Ye,keyboardOnly:Fe}=B(q),Ke=(0,u.s9)(ve,{outsidePress:ce,ancestorScroll:!1,escapeKey:O}),Qe=(0,u.Mk)(ve,{enabled:He,handleClose:(0,u.iB)({requireIntent:!1}),delay:{open:ge,close:he}}),Ve=(0,u.iQ)(ve,{enabled:Ue,visibleOnly:Fe}),Xe=(0,u.kp)(ve,{enabled:Ye,keyboardHandlers:ye}),{getFloatingProps:Ge,getReferenceProps:ke}=(0,u.bv)([Ke,Qe,Ve,Xe]),Oe=(0,j.useCallback)((x,de)=>{typeof A=="object"&&(A!=null&&A.current)&&(_e.setReference(A.current),Object.entries(x).map(([V,we])=>{const Ae=ae(V);Ae&&(0,K.B)()&&(de==="add"&&A.current.addEventListener(Ae,we),de==="remove"&&A.current.removeEventListener(Ae,we))}))},[_e,A]);(0,j.useEffect)(()=>{if(a)return;const x=g(ke());return Oe(x,"add"),()=>Oe(x,"remove")},[a,Oe,ke]);const Ze=ue&&(0,r.jsx)(u.XF,{root:X(),children:(0,r.jsxs)("div",Object.assign({role:"presentation"},(0,ne.z7)(Re),{className:m()(i.floating,f,{[i.floatingHidden]:!!(!((n=be.hide)===null||n===void 0)&&n.referenceHidden)}),ref:_e.setFloating,style:We,"data-placement":Ce},Ge({onClick:se,onMouseDown:se,onMouseUp:se,onTouchStart:H,onTouchEnd:H,onTouchMove:H}),{children:[w,be.arrow&&(0,r.jsx)(Q,{placement:Ce,x:be.arrow.x,y:be.arrow.y,arrowContainerClassName:je,arrowElementClassName:Ee,arrowRef:Se})]}))},"portal");return(0,r.jsxs)(u.$c,{id:De,children:[a&&Z({validElementWrapperClassName:m()(l),getReferenceProps:ke,children:a,setReference:Be,disableSpanWrapper:Ne}),Ze]})}function d(s){var{children:n}=s,f=p(s,["children"]);return(0,u.R1)()===null?(0,r.jsx)(u.P6,{children:(0,r.jsx)(o,Object.assign({},f,{children:n}))}):(0,r.jsx)(o,Object.assign({},f,{children:n}))}},"./node_modules/.pnpm/@snack-uikit+popover-private@0.15.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js"(k,E,e){e.d(E,{El:()=>r,Lw:()=>b,Y_:()=>c,cJ:()=>v,tr:()=>u});const r={Left:"left",LeftStart:"left-start",LeftEnd:"left-end",Right:"right",RightStart:"right-start",RightEnd:"right-end",Top:"top",TopStart:"top-start",TopEnd:"top-end",Bottom:"bottom",BottomStart:"bottom-start",BottomEnd:"bottom-end"},u={Click:"click",Hover:"hover",FocusVisible:"focusVisible",Focus:"focus",HoverAndFocusVisible:"hoverAndFocusVisible",HoverAndFocus:"hoverAndFocus",ClickAndFocusVisible:"clickAndFocusVisible"},b={Auto:"auto",Gte:"gte",Eq:"eq"},v={Auto:"auto",Lte:"lte",Eq:"eq"},c=[r.Top,r.Right,r.Bottom,r.Left]},"./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"(k,E,e){e.d(E,{O:()=>me});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=e.n(b),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=e.n(c),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),W=e.n(j),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),K=e.n(F),ne=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=e.n(ne),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),G=e.n(ee),X=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"),N={};N.styleTagTransform=G(),N.setAttributes=K(),N.insert=W().bind(null,"head"),N.domAPI=m(),N.insertStyleElement=h();var Z=v()(X.A,N);const B=X.A&&X.A.locals?X.A.locals:void 0;var se=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),H=e.n(se),ae=e("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/overlayscrollbars.mjs"),te=e("./node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.11.1_react@18.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs"),g=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Q=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");const z={S:"s",M:"m"},y={Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"},D={None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"},P={Bottom:"bottom",Right:"right"},ie=100,oe=2;var le=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"),L={};L.styleTagTransform=G(),L.setAttributes=K(),L.insert=W().bind(null,"head"),L.domAPI=m(),L.insertStyleElement=h();var J=v()(le.A,L);const pe=le.A&&le.A.locals?le.A.locals:void 0;var re=function(I,U){var C={};for(var t in I)Object.prototype.hasOwnProperty.call(I,t)&&U.indexOf(t)<0&&(C[t]=I[t]);if(I!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(I);i<t.length;i++)U.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(I,t[i])&&(C[t[i]]=I[t[i]]);return C};const fe=ae.ae.nonce,me=(0,g.forwardRef)(function(U,C){var{children:t,className:i,onScroll:p,onInitialized:o,size:d=z.M,resize:s=D.None,clickScrolling:n=!0,barHideStrategy:f=y.Leave,autoscrollTo:l,paddingAbsolute:a,untouchableScrollbars:M=!1}=U,$=re(U,["children","className","onScroll","onInitialized","size","resize","clickScrolling","barHideStrategy","autoscrollTo","paddingAbsolute","untouchableScrollbars"]);const T=(0,g.useRef)(null),[R,Y]=(0,g.useState)(!1),w=(0,g.useCallback)((S=T.current)=>S==null?void 0:S.osInstance(),[T]);(0,g.useImperativeHandle)(C,()=>{var S,_,O;return(O=(_=(S=T.current)===null||S===void 0?void 0:S.osInstance())===null||_===void 0?void 0:_.elements().viewport)!==null&&O!==void 0?O:null});const q=(0,g.useRef)({scrolledToBottom:!1,scrolledToRight:!1}),ce=(0,g.useCallback)(S=>{const _=w(S);if(_){const{viewport:O}=_.elements(),ye=O.scrollHeight-(O.offsetHeight+O.scrollTop),Te=O.scrollWidth-(O.offsetWidth+O.scrollLeft),je=O.scrollHeight>O.offsetHeight,Ee=O.scrollWidth>O.offsetWidth;q.current.scrolledToBottom=ye<oe||!je,q.current.scrolledToRight=Te<oe||!Ee}},[w]);(0,Q.N)(()=>{if(!l){o==null||o();return}const S=w();if(S&&R){ce();const{content:_}=S.elements();l===P.Bottom&&_.scroll(0,_.scrollHeight),l===P.Right&&_.scroll(_.scrollWidth,0)}o==null||o()},[w,R,ce]);const ge=(0,g.useCallback)(()=>{Y(!0)},[]),he=(0,g.useCallback)(S=>{p==null||p(S),l&&ce()},[p,ce]),A=(0,g.useCallback)(()=>{var S;if(!l)return;const _=(S=w())===null||S===void 0?void 0:S.elements();_!=null&&_.content&&(q.current.scrolledToBottom&&l===P.Bottom&&(_==null||_.content.scroll(0,_==null?void 0:_.content.scrollHeight)),q.current.scrolledToRight&&l===P.Right&&(_==null||_.content.scroll(_==null?void 0:_.content.scrollWidth,0)))},[w,l]);return(0,r.jsx)(te.r,Object.assign({},$,{ref:T,"data-size":d,"data-untouchable-scrollbars":M||void 0,className:H()(i,pe.scroll,"osThemeSnack"),style:{resize:s},options:{paddingAbsolute:a,scrollbars:{autoHide:f,autoHideDelay:ie,clickScroll:n}},events:{initialized:ge,scroll:(S,_)=>{he(_)},updated:A},children:l?R&&t:t}))})},"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"(k,E,e){e.d(E,{m:()=>te});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),b=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const v=[b.El.Top,b.El.Right,b.El.Bottom,b.El.Left];var c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(c),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=e.n(j),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),K=e.n(F),ne=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),h=e.n(ne),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),G=e.n(ee),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),N=e.n(X),Z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),B={};B.styleTagTransform=N(),B.setAttributes=h(),B.insert=K().bind(null,"head"),B.domAPI=W(),B.insertStyleElement=G();var se=m()(Z.A,B);const H=Z.A&&Z.A.locals?Z.A.locals:void 0;var ae=function(g,Q){var z={};for(var y in g)Object.prototype.hasOwnProperty.call(g,y)&&Q.indexOf(y)<0&&(z[y]=g[y]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,y=Object.getOwnPropertySymbols(g);D<y.length;D++)Q.indexOf(y[D])<0&&Object.prototype.propertyIsEnumerable.call(g,y[D])&&(z[y[D]]=g[y[D]]);return z};function te(g){var{tip:Q,trigger:z="hoverAndFocusVisible",placement:y="top",children:D,triggerRef:P,disableMaxWidth:ie=!1}=g,oe=ae(g,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!D&&!P?null:(0,r.jsx)(u.Z,Object.assign({placement:y,popoverContent:(0,r.jsx)("div",{className:H.tooltipContainer,"data-disable-max-width":ie,children:Q}),trigger:z,triggerRef:P,arrowContainerClassName:H.tooltipArrowContainer,arrowElementClassName:H.tooltipArrowElement,hasArrow:!0,fallbackPlacements:v},oe,{children:D}))}},"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"(k,E,e){e.d(E,{m:()=>C});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),b=e.n(u),v=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),c=e.n(v),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),W=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const F=t=>t?t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth:!1,K=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],ne="...",h=({text:t,element:i,truncatedElement:p})=>{if(i&&p&&F(i)){const o=i.scrollWidth/t.length;let d=t;for(const{potentialDelimiterWidth:s,leftHalfDelta:n,rightHalfDelta:f}of K){const l=Math.floor((i.offsetWidth/o-s)/2),a=t.slice(0,l-n),M=t.slice(t.length-l+f,t.length);if(d=`${a}${ne}${M}`,p.innerText=d,p.scrollWidth<=i.offsetWidth-1)break}return d}return t};var ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(ee),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),N=e.n(X),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),B=e.n(Z),se=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),H=e.n(se),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),te=e.n(ae),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Q=e.n(g),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),y={};y.styleTagTransform=Q(),y.setAttributes=H(),y.insert=B().bind(null,"head"),y.domAPI=N(),y.insertStyleElement=te();var D=G()(z.A,y);const P=z.A&&z.A.locals?z.A.locals:void 0;var ie=function(t,i){var p={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&i.indexOf(o)<0&&(p[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(t);d<o.length;d++)i.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(t,o[d])&&(p[o[d]]=t[o[d]]);return p};function oe(t){var{text:i,className:p,tooltipClassName:o,hideTooltip:d,placement:s,trigger:n}=t,f=ie(t,["text","className","tooltipClassName","hideTooltip","placement","trigger"]);const[l,a]=(0,m.useState)(!1),[M,$]=(0,m.useState)(i),T=(0,m.useRef)(null),R=(0,m.useRef)(null);(0,m.useEffect)(()=>{const w=c()(()=>{$(h({element:T.current,truncatedElement:R.current,text:i})),a(F(T.current))},50);w();const q=new ResizeObserver(w);return T.current&&q.observe(T.current),()=>{q.disconnect()}},[l,i,d]);const Y=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{ref:T,className:P.fullText,"data-test-id":"full-text",children:i}),(0,r.jsx)("span",{ref:R,className:P.truncatedText,"data-test-id":"truncated-text",children:M})]});return(0,r.jsx)("span",Object.assign({className:b()(P.wrapper,p)},(0,W.z7)(f),{children:l&&!d?(0,r.jsx)(j.m,{tip:i,placement:s,hoverDelayOpen:500,triggerClassName:P.textContainer,className:o,trigger:n,children:Y}):Y}))}var le=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),L=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),J={};J.styleTagTransform=Q(),J.setAttributes=H(),J.insert=B().bind(null,"head"),J.domAPI=N(),J.insertStyleElement=te();var pe=G()(L.A,J);const re=L.A&&L.A.locals?L.A.locals:void 0;var fe=function(t,i){var p={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&i.indexOf(o)<0&&(p[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(t);d<o.length;d++)i.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(t,o[d])&&(p[o[d]]=t[o[d]]);return p};function me(t){var{text:i,className:p,tooltipClassName:o,hideTooltip:d,maxLines:s=1,placement:n,trigger:f}=t,l=fe(t,["text","className","tooltipClassName","hideTooltip","maxLines","placement","trigger"]);const a=(0,m.useRef)(null),[M,$]=(0,m.useState)(!1),T=(0,m.useCallback)(()=>{$(F(a.current))},[]);(0,le.N)(()=>{a.current&&T()},[i,T]),(0,m.useEffect)(()=>{const Y=c()(()=>{T()},50),w=new ResizeObserver(Y);return a.current&&(T(),w.observe(a.current)),()=>{w.disconnect()}},[M,d,T]);const R=(0,r.jsx)("span",Object.assign({ref:a,className:b()(s>1?re.text2AndMoreLines:re.text1Line,p,{[re.ellipsis]:!a.current||M}),style:{"--max-lines":s}},(0,W.z7)(l),{children:i}));return M&&!d?(0,r.jsx)(j.m,{tip:i,placement:n,hoverDelayOpen:500,className:o,triggerClassName:re.tooltipTrigger,trigger:f,children:R}):R}const I={Middle:"middle",End:"end"};var U=function(t,i){var p={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&i.indexOf(o)<0&&(p[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(t);d<o.length;d++)i.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(t,o[d])&&(p[o[d]]=t[o[d]]);return p};function C(t){var{variant:i=I.End}=t,p=U(t,["variant"]);switch(i){case I.Middle:return(0,r.jsx)(oe,Object.assign({},p));case I.End:default:return(0,r.jsx)(me,Object.assign({},p))}}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.15.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"(k,E,e){e.d(E,{A:()=>m});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),b=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(b),c=v()(u());c.push([k.id,`.floating--_tg3w{
  display:flex;
  flex-direction:column;
}

.floatingHidden--mX9RM{
  display:none;
}`,""]),c.locals={floating:"floating--_tg3w",floatingHidden:"floatingHidden--mX9RM"};const m=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"(k,E,e){e.d(E,{A:()=>K});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),b=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(b),c=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/getUrl.js"),m=e.n(c),j=new URL(e("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),e.b),W=v()(u()),F=m()(j);W.push([k.id,`@charset "UTF-8";
.osThemeSnack .os-scrollbar{
  padding:0;
}

.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical > .os-scrollbar-track{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  pointer-events:none;
}

.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal > .os-scrollbar-track{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  pointer-events:none;
}

.osThemeSnack[data-size=s] > .os-scrollbar-vertical{
  width:var(--size-scroll-track-s, 8px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=s] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  width:var(--size-scroll-slider-s, 4px);
  border-radius:var(--radius-scroll-slider-s, 2px);
}

.osThemeSnack[data-size=s] > .os-scrollbar-horizontal{
  height:var(--size-scroll-track-s, 8px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=s] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  height:var(--size-scroll-slider-s, 4px);
  border-radius:var(--radius-scroll-slider-s, 2px);
}

.osThemeSnack[data-size=s].os-host-resize-disabled > .os-scrollbar-horizontal{
  right:var(--size-scroll-track-s, 8px);
}

.osThemeSnack[data-size=s].os-host-resize-disabled.os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-track-s, 8px);
}

.osThemeSnack[data-size=s].os-host-resize-disabled > .os-scrollbar-vertical{
  bottom:var(--size-scroll-track-s, 8px);
}

.osThemeSnack[data-size=s] > .os-scrollbar-horizontal{
  right:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=s].os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=s] > .os-scrollbar-vertical{
  bottom:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-vertical{
  width:var(--size-scroll-track-m, 16px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=m] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  width:var(--size-scroll-slider-m, 6px);
  border-radius:var(--radius-scroll-slider-m, 4px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-horizontal{
  height:var(--size-scroll-track-m, 16px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=m] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  height:var(--size-scroll-slider-m, 6px);
  border-radius:var(--radius-scroll-slider-m, 4px);
}

.osThemeSnack[data-size=m].os-host-resize-disabled > .os-scrollbar-horizontal{
  right:var(--size-scroll-track-m, 16px);
}

.osThemeSnack[data-size=m].os-host-resize-disabled.os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-track-m, 16px);
}

.osThemeSnack[data-size=m].os-host-resize-disabled > .os-scrollbar-vertical{
  bottom:var(--size-scroll-track-m, 16px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-horizontal{
  right:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=m].os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-vertical{
  bottom:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  opacity:var(--opacity-a032, 0.32);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle.active, .osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle:hover{
  opacity:var(--opacity-a064, 0.64);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}

.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  opacity:var(--opacity-a032, 0.32);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle.active, .osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle:hover{
  opacity:var(--opacity-a064, 0.64);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}

.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  left:50%;
  translate:-50%;
}
.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle::before{
  right:-12px;
  left:-12px;
}

.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  top:50%;
  translate:0 -50%;
}
.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle::before{
  top:-12px;
  bottom:-12px;
}

.osThemeSnack > .os-scrollbar-corner{
  --bg-icon-mask:url(${F});
  width:var(--size-scroll-button-resize, 16px);
  height:var(--size-scroll-button-resize, 16px);
  z-index:0;
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
  background-image:unset;
  -webkit-mask-image:var(--bg-icon-mask);
  mask-image:var(--bg-icon-mask);
}
.osThemeSnack > .os-scrollbar-corner:hover{
  background-color:var(--sys-neutral-text-support, #6d707f);
}

.os-dragging .osThemeSnack > .os-scrollbar-corner:hover{
  background-color:var(--sys-primary-accent-default, #389f74);
}

.osThemeSnack.os-host-resize-disabled > .os-scrollbar-corner{
  display:none;
}`,""]);const K=W},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"(k,E,e){e.d(E,{A:()=>m});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),b=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(b),c=v()(u());c.push([k.id,`.scroll--dWi1U{
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
}`,""]),c.locals={scroll:"scroll--dWi1U"};const m=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"(k,E,e){e.d(E,{A:()=>m});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),b=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(b),c=v()(u());c.push([k.id,`.tooltipContainer--VjQzd{
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
.tooltipContainer--VjQzd[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--_mD7p{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 4px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 4px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--EMlcd{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),c.locals={tooltipContainer:"tooltipContainer--VjQzd",tooltipArrowContainer:"tooltipArrowContainer--_mD7p",tooltipArrowElement:"tooltipArrowElement--EMlcd"};const m=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"(k,E,e){e.d(E,{A:()=>m});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),b=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(b),c=v()(u());c.push([k.id,`.text1Line--GeyRn{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--Np4Vx{
  text-overflow:ellipsis;
}

.text2AndMoreLines--CBS6_{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--mPQ0O{
  display:grid;
}`,""]),c.locals={text1Line:"text1Line--GeyRn",ellipsis:"ellipsis--Np4Vx",text2AndMoreLines:"text2AndMoreLines--CBS6_",tooltipTrigger:"tooltipTrigger--mPQ0O"};const m=c},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"(k,E,e){e.d(E,{A:()=>m});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),b=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(b),c=v()(u());c.push([k.id,`.wrapper--MC5Hy{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--WlhG8{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--Ww7IT{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--QGX16{
  display:inline-flex;
}`,""]),c.locals={wrapper:"wrapper--MC5Hy",truncatedText:"truncatedText--WlhG8",fullText:"fullText--Ww7IT",textContainer:"textContainer--QGX16"};const m=c}}]);})();
