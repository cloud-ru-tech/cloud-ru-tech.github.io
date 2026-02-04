"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[8841],{"./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js":((A,g,e)=>{e.d(g,{Z:()=>ie});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/@floating-ui+react@0.26.24_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),h=e("./node_modules/.pnpm/@floating-ui+dom@1.7.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),_=e("./node_modules/.pnpm/@floating-ui+react-dom@2.1.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),f=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),S=e.n(f),i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),I=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),P=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),R=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),m=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js"),N=e("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");function G({placement:s,x:o,y:c,ref:t}){if(!t.current)return{};const l=t.current.offsetWidth;switch(!0){case s.startsWith("top"):return{left:o,bottom:-l,transform:"rotate(-90deg)"};case s.startsWith("bottom"):return{left:o,top:-l,transform:"rotate(90deg)"};case s.startsWith("left"):return{top:c,right:-(l-1),transform:"rotate(180deg)"};case s.startsWith("right"):default:return{top:c,left:-(l-1)}}}const U=()=>(0,P.B)()?document.body:void 0,J=s=>(s==null?void 0:s.offsetWidth)||0,X=({children:s,getReferenceProps:o,setReference:c,validElementWrapperClassName:t,disableSpanWrapper:l})=>(0,i.isValidElement)(s)?(0,N.isForwardRef)(s)||(0,N.isValidElementType)(s)||l?(0,i.cloneElement)(s,Object.assign(Object.assign({},o(Object.assign(Object.assign({},s.props),{className:S()(s.props.className,t)}))),{ref:c,key:"cloned-element"})):(0,i.createElement)("span",Object.assign({className:t,ref:c},o(),{key:"wrapped-element"}),s):typeof s=="function"?(0,n.jsx)(i.Fragment,{children:s({getReferenceProps:o,ref:c})},"function-element"):(0,i.createElement)("span",Object.assign({className:t,ref:c},o(),{key:"wrapped-element"}),s),$=s=>{const o={useHoverTrigger:!1,useClickTrigger:!1,useFocusTrigger:!1,keyboardOnly:!0};switch(s){case m.tr.Hover:return Object.assign(Object.assign({},o),{useHoverTrigger:!0});case m.tr.Click:return Object.assign(Object.assign({},o),{useClickTrigger:!0});case m.tr.FocusVisible:return Object.assign(Object.assign({},o),{useFocusTrigger:!0});case m.tr.Focus:return Object.assign(Object.assign({},o),{useFocusTrigger:!0,keyboardOnly:!1});case m.tr.ClickAndFocusVisible:return Object.assign(Object.assign({},o),{useFocusTrigger:!0,useClickTrigger:!0});case m.tr.HoverAndFocusVisible:return Object.assign(Object.assign({},o),{useFocusTrigger:!0,useHoverTrigger:!0});case m.tr.HoverAndFocus:return Object.assign(Object.assign({},o),{useFocusTrigger:!0,useHoverTrigger:!0,keyboardOnly:!1});default:return o}},B=s=>s.stopPropagation(),Y=s=>s.stopPropagation();function q(s){return s.slice(0,2)==="on"?s.replace("on","").toLowerCase():s.toLowerCase()}function ee(s){return Object.assign(Object.assign({},s),{nativeEvent:s})}function se(s){const o={};return Object.entries(s).forEach(([c,t])=>{o[c]=l=>{t(ee(l))}}),o}function oe({placement:s,x:o,y:c,arrowContainerClassName:t,arrowElementClassName:l,arrowRef:T}){return(0,n.jsx)("div",{className:t,ref:T,style:G({x:o,y:c,placement:s,ref:T}),children:(0,n.jsx)("svg",{className:l,viewBox:"0 0 4 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M4 0V8L0.707106 4.70711C0.316582 4.31658 0.316583 3.68342 0.707107 3.29289L4 0Z"})})})}var te=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function le({triggerClassName:s,offsetProp:o}){const[c,t]=(0,i.useState)(0);return(0,te.N)(()=>{const l=document.querySelector("."+String(s).split(/\s+/g).map(CSS.escape).join(".")),T=l?getComputedStyle(l):null,W=T?T.getPropertyValue("--offset"):null;if(o!==void 0){t(o);return}const b=document.createElement("span");b.style.width=W||"",document.body.appendChild(b);const O=getComputedStyle(b).width;document.body.removeChild(b);const k=parseInt(O||"");if(Number.isNaN(k)||k<1){t(0);return}t(k)},[o,s]),c}var re=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(re),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Te=e.n(E),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),ne=e.n(ae),Me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),ce=e.n(Me),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(j),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),p=e.n(D),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"),y={};y.styleTagTransform=p(),y.setAttributes=ce(),y.insert=ne().bind(null,"head"),y.domAPI=Te(),y.insertStyleElement=x();var L=C()(v.A,y);const F=v.A&&v.A.locals?v.A.locals:void 0;var K=function(s,o){var c={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&o.indexOf(t)<0&&(c[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(s);l<t.length;l++)o.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(s,t[l])&&(c[t[l]]=s[t[l]]);return c};function Q(s){var o,{className:c,triggerClassName:t,children:l,open:T,onOpenChange:W,placement:b=m.El.Top,hasArrow:O,offset:k,popoverContent:de,trigger:ue,outsideClick:me,hoverDelayOpen:u,hoverDelayClose:r,triggerRef:a,widthStrategy:pe=m.Lw.Auto,heightStrategy:_e=m.cJ.Auto,closeOnEscapeKey:ve=!0,triggerClickByKeys:be=!0,fallbackPlacements:Ae=m.Y_,arrowContainerClassName:Ie,arrowElementClassName:Ne,disableSpanWrapper:xe=!1}=s,De=K(s,["className","triggerClassName","children","open","onOpenChange","placement","hasArrow","offset","popoverContent","trigger","outsideClick","hoverDelayOpen","hoverDelayClose","triggerRef","widthStrategy","heightStrategy","closeOnEscapeKey","triggerClickByKeys","fallbackPlacements","arrowContainerClassName","arrowElementClassName","disableSpanWrapper"]);const ge=(0,i.useRef)(null),[ze,Le]=(0,I.iC)(T,!1,W),je=(0,d.fI)(),ke=le({triggerClassName:t,offsetProp:k}),Se=J(ge.current),{floatingStyles:Pe,refs:w,context:V,middlewareData:Z,placement:Ee}=(0,d.we)({nodeId:je,placement:b,open:ze,onOpenChange:Le,whileElementsMounted:h.ll,middleware:[(0,_.BN)(),(0,_.cY)(ke+Se),O&&(0,_.UE)({element:ge,padding:(ke+Se)*2}),(0,_.UU)({fallbackPlacements:Ae}),(0,_.Ej)({apply({rects:M,availableHeight:H}){const z=w.floating.current;if(z){switch(_e){case m.cJ.Eq:z.style.height=`${H}px`;break;case m.cJ.Lte:z.style.maxHeight=`${H}px`;break;case m.cJ.Auto:default:break}switch(pe){case m.Lw.Eq:z.style.width=`${M.reference.width}px`,z.style.minWidth="0px";break;case m.Lw.Gte:z.style.width="auto",z.style.minWidth=`${M.reference.width}px`;break;case m.Lw.Auto:default:z.style.width="auto",z.style.minWidth="auto"}}}}),(0,_.jD)()]}),Ce=(0,i.useCallback)(M=>{w.setReference(M),a&&(typeof a=="function"?a(M):a.current=M)},[a,w]),{useHoverTrigger:we,useFocusTrigger:Re,useClickTrigger:Be,keyboardOnly:Ye}=$(ue),We=(0,d.s9)(V,{outsidePress:me,ancestorScroll:!1,escapeKey:ve}),He=(0,d.Mk)(V,{enabled:we,handleClose:(0,d.iB)({requireIntent:!1}),delay:{open:u,close:r}}),Ue=(0,d.iQ)(V,{enabled:Re,visibleOnly:Ye}),Fe=(0,d.kp)(V,{enabled:Be,keyboardHandlers:be}),{getFloatingProps:Ke,getReferenceProps:he}=(0,d.bv)([We,He,Ue,Fe]),fe=(0,i.useCallback)((M,H)=>{typeof a=="object"&&(a!=null&&a.current)&&(w.setReference(a.current),Object.entries(M).map(([z,Oe])=>{const ye=q(z);ye&&(0,P.B)()&&(H==="add"&&a.current.addEventListener(ye,Oe),H==="remove"&&a.current.removeEventListener(ye,Oe))}))},[w,a]);(0,i.useEffect)(()=>{if(l)return;const M=se(he());return fe(M,"add"),()=>fe(M,"remove")},[l,fe,he]);const Qe=ze&&(0,n.jsx)(d.XF,{root:U(),children:(0,n.jsxs)("div",Object.assign({role:"presentation"},(0,R.z7)(De),{className:S()(F.floating,c,{[F.floatingHidden]:!!(!((o=Z.hide)===null||o===void 0)&&o.referenceHidden)}),ref:w.setFloating,style:Pe,"data-placement":Ee},Ke({onClick:B,onMouseDown:B,onMouseUp:B,onTouchStart:Y,onTouchEnd:Y,onTouchMove:Y}),{children:[de,Z.arrow&&(0,n.jsx)(oe,{placement:Ee,x:Z.arrow.x,y:Z.arrow.y,arrowContainerClassName:Ie,arrowElementClassName:Ne,arrowRef:ge})]}))},"portal");return(0,n.jsxs)(d.$c,{id:je,children:[l&&X({validElementWrapperClassName:S()(t),getReferenceProps:he,children:l,setReference:Ce,disableSpanWrapper:xe}),Qe]})}function ie(s){var{children:o}=s,c=K(s,["children"]);return(0,d.R1)()===null?(0,n.jsx)(d.P6,{children:(0,n.jsx)(Q,Object.assign({},c,{children:o}))}):(0,n.jsx)(Q,Object.assign({},c,{children:o}))}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js":((A,g,e)=>{e.d(g,{El:()=>n,Lw:()=>h,Y_:()=>f,cJ:()=>_,tr:()=>d});const n={Left:"left",LeftStart:"left-start",LeftEnd:"left-end",Right:"right",RightStart:"right-start",RightEnd:"right-end",Top:"top",TopStart:"top-start",TopEnd:"top-end",Bottom:"bottom",BottomStart:"bottom-start",BottomEnd:"bottom-end"},d={Click:"click",Hover:"hover",FocusVisible:"focusVisible",Focus:"focus",HoverAndFocusVisible:"hoverAndFocusVisible",HoverAndFocus:"hoverAndFocus",ClickAndFocusVisible:"clickAndFocusVisible"},h={Auto:"auto",Gte:"gte",Eq:"eq"},_={Auto:"auto",Lte:"lte",Eq:"eq"},f=[n.Top,n.Right,n.Bottom,n.Left]}),"./node_modules/.pnpm/@snack-uikit+scroll@0.10.1_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js":((A,g,e)=>{e.d(g,{O:()=>ce});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),h=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(h),f=e("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/overlayscrollbars.mjs"),S=e("./node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.11.1_react@18.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs"),i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),I=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");const P={S:"s",M:"m"},R={Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"},m={None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"},N={Bottom:"bottom",Right:"right"},G=100,U=2;var J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=e.n(J),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=e.n($),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),q=e.n(Y),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),se=e.n(ee),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),te=e.n(oe),le=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),re=e.n(le),C=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.1_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"),E={};E.styleTagTransform=re(),E.setAttributes=se(),E.insert=q().bind(null,"head"),E.domAPI=B(),E.insertStyleElement=te();var Te=X()(C.A,E);const ae=C.A&&C.A.locals?C.A.locals:void 0;var ne=function(j,x){var D={};for(var p in j)Object.prototype.hasOwnProperty.call(j,p)&&x.indexOf(p)<0&&(D[p]=j[p]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,p=Object.getOwnPropertySymbols(j);v<p.length;v++)x.indexOf(p[v])<0&&Object.prototype.propertyIsEnumerable.call(j,p[v])&&(D[p[v]]=j[p[v]]);return D};const Me=f.ae.nonce,ce=(0,i.forwardRef)(function(x,D){var{children:p,className:v,onScroll:y,onInitialized:L,size:F=P.M,resize:K=m.None,clickScrolling:Q=!0,barHideStrategy:ie=R.Leave,autoscrollTo:s,paddingAbsolute:o,untouchableScrollbars:c=!1}=x,t=ne(x,["children","className","onScroll","onInitialized","size","resize","clickScrolling","barHideStrategy","autoscrollTo","paddingAbsolute","untouchableScrollbars"]);const l=(0,i.useRef)(null),[T,W]=(0,i.useState)(!1),b=(0,i.useCallback)((u=l.current)=>u==null?void 0:u.osInstance(),[l]);(0,i.useImperativeHandle)(D,()=>{var u,r,a;return(a=(r=(u=l.current)===null||u===void 0?void 0:u.osInstance())===null||r===void 0?void 0:r.elements().viewport)!==null&&a!==void 0?a:null});const O=(0,i.useRef)({scrolledToBottom:!1,scrolledToRight:!1}),k=(0,i.useCallback)(u=>{const r=b(u);if(r){const{viewport:a}=r.elements(),pe=a.scrollHeight-(a.offsetHeight+a.scrollTop),_e=a.scrollWidth-(a.offsetWidth+a.scrollLeft),ve=a.scrollHeight>a.offsetHeight,be=a.scrollWidth>a.offsetWidth;O.current.scrolledToBottom=pe<U||!ve,O.current.scrolledToRight=_e<U||!be}},[b]);(0,I.N)(()=>{if(!s){L==null||L();return}const u=b();if(u&&T){k();const{content:r}=u.elements();s===N.Bottom&&r.scroll(0,r.scrollHeight),s===N.Right&&r.scroll(r.scrollWidth,0)}L==null||L()},[b,T,k]);const de=(0,i.useCallback)(()=>{W(!0)},[]),ue=(0,i.useCallback)(u=>{y==null||y(u),s&&k()},[y,k]),me=(0,i.useCallback)(()=>{var u;if(!s)return;const r=(u=b())===null||u===void 0?void 0:u.elements();r!=null&&r.content&&(O.current.scrolledToBottom&&s===N.Bottom&&(r==null||r.content.scroll(0,r==null?void 0:r.content.scrollHeight)),O.current.scrolledToRight&&s===N.Right&&(r==null||r.content.scroll(r==null?void 0:r.content.scrollWidth,0)))},[b,s]);return(0,n.jsx)(S.r,Object.assign({},t,{ref:l,"data-size":F,"data-untouchable-scrollbars":c||void 0,className:_()(v,ae.scroll,"osThemeSnack"),style:{resize:K},options:{paddingAbsolute:o,scrollbars:{autoHide:ie,autoHideDelay:G,clickScroll:Q}},events:{initialized:de,scroll:(u,r)=>{ue(r)},updated:me},children:s?T&&p:p}))})}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js":((A,g,e)=>{e.d(g,{N:()=>h});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const h=(0,d.B)()?n.useLayoutEffect:n.useEffect}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css":((A,g,e)=>{e.d(g,{A:()=>S});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(n),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=e.n(h),f=_()(d());f.push([A.id,`.floating--zdZE3{
  display:flex;
  flex-direction:column;
}

.floatingHidden--fLsvv{
  display:none;
}`,""]),f.locals={floating:"floating--zdZE3",floatingHidden:"floatingHidden--fLsvv"};const S=f}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.1_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css":((A,g,e)=>{e.d(g,{A:()=>R});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(n),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=e.n(h),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/getUrl.js"),S=e.n(f),i=new URL(e("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),e.b),I=_()(d()),P=S()(i);I.push([A.id,`@charset "UTF-8";
.scroll--yzOSC{
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
}
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
  --bg-icon-mask:url(${P});
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
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.osThemeSnack.os-host-resize-disabled > .os-scrollbar-corner{
  display:none;
}`,""]),I.locals={scroll:"scroll--yzOSC"};const R=I})}]);})();
