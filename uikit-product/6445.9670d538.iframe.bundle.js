"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3839,6220,6445,8778,9374],{"./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js":((j,h,e)=>{e.d(h,{Z:()=>i});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/@floating-ui+react@0.26.24_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),w=e("./node_modules/.pnpm/@floating-ui+dom@1.7.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),g=e("./node_modules/.pnpm/@floating-ui+react-dom@2.1.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(u),I=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),W=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),L=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),v=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js"),te=e("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");function re({placement:s,x:c,y:x,ref:f}){if(!f.current)return{};const o=f.current.offsetWidth;switch(!0){case s.startsWith("top"):return{left:c,bottom:-o,transform:"rotate(-90deg)"};case s.startsWith("bottom"):return{left:c,top:-o,transform:"rotate(90deg)"};case s.startsWith("left"):return{top:x,right:-(o-1),transform:"rotate(180deg)"};case s.startsWith("right"):default:return{top:x,left:-(o-1)}}}const le=()=>(0,W.B)()?document.body:void 0,$=s=>(s==null?void 0:s.offsetWidth)||0,ne=({children:s,getReferenceProps:c,setReference:x,validElementWrapperClassName:f,disableSpanWrapper:o})=>(0,I.isValidElement)(s)?(0,te.isForwardRef)(s)||(0,te.isValidElementType)(s)||o?(0,I.cloneElement)(s,Object.assign(Object.assign({},c(Object.assign(Object.assign({},s.props),{className:y()(s.props.className,f)}))),{ref:x,key:"cloned-element"})):(0,I.createElement)("span",Object.assign({className:f,ref:x},c(),{key:"wrapped-element"}),s):typeof s=="function"?(0,r.jsx)(I.Fragment,{children:s({getReferenceProps:c,ref:x})},"function-element"):(0,I.createElement)("span",Object.assign({className:f,ref:x},c(),{key:"wrapped-element"}),s),G=s=>{const c={useHoverTrigger:!1,useClickTrigger:!1,useFocusTrigger:!1,keyboardOnly:!0};switch(s){case v.tr.Hover:return Object.assign(Object.assign({},c),{useHoverTrigger:!0});case v.tr.Click:return Object.assign(Object.assign({},c),{useClickTrigger:!0});case v.tr.FocusVisible:return Object.assign(Object.assign({},c),{useFocusTrigger:!0});case v.tr.Focus:return Object.assign(Object.assign({},c),{useFocusTrigger:!0,keyboardOnly:!1});case v.tr.ClickAndFocusVisible:return Object.assign(Object.assign({},c),{useFocusTrigger:!0,useClickTrigger:!0});case v.tr.HoverAndFocusVisible:return Object.assign(Object.assign({},c),{useFocusTrigger:!0,useHoverTrigger:!0});case v.tr.HoverAndFocus:return Object.assign(Object.assign({},c),{useFocusTrigger:!0,useHoverTrigger:!0,keyboardOnly:!1});default:return c}},H=s=>s.stopPropagation(),F=s=>s.stopPropagation();function q(s){return s.slice(0,2)==="on"?s.replace("on","").toLowerCase():s.toLowerCase()}function B(s){return Object.assign(Object.assign({},s),{nativeEvent:s})}function S(s){const c={};return Object.entries(s).forEach(([x,f])=>{c[x]=o=>{f(B(o))}}),c}function U({placement:s,x:c,y:x,arrowContainerClassName:f,arrowElementClassName:o,arrowRef:d}){return(0,r.jsx)("div",{className:f,ref:d,style:re({x:c,y:x,placement:s,ref:d}),children:(0,r.jsx)("svg",{className:o,viewBox:"0 0 4 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M4 0V8L0.707106 4.70711C0.316582 4.31658 0.316583 3.68342 0.707107 3.29289L4 0Z"})})})}var de=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function ee({triggerClassName:s,offsetProp:c}){const[x,f]=(0,I.useState)(0);return(0,de.N)(()=>{const o=document.querySelector("."+String(s).split(/\s+/g).map(CSS.escape).join(".")),d=o?getComputedStyle(o):null,b=d?d.getPropertyValue("--offset"):null;if(c!==void 0){f(c);return}const a=document.createElement("span");a.style.width=b||"",document.body.appendChild(a);const n=getComputedStyle(a).width;document.body.removeChild(a);const C=parseInt(n||"");if(Number.isNaN(C)||C<1){f(0);return}f(C)},[c,s]),x}var ce=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(ce),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=e.n(K),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=e.n(k),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Q=e.n(ae),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(P),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),se=e.n(oe),Y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"),N={};N.styleTagTransform=se(),N.setAttributes=Q(),N.insert=D().bind(null,"head"),N.domAPI=R(),N.insertStyleElement=z();var l=E()(Y.A,N);const _=Y.A&&Y.A.locals?Y.A.locals:void 0;var m=function(s,c){var x={};for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&c.indexOf(f)<0&&(x[f]=s[f]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,f=Object.getOwnPropertySymbols(s);o<f.length;o++)c.indexOf(f[o])<0&&Object.prototype.propertyIsEnumerable.call(s,f[o])&&(x[f[o]]=s[f[o]]);return x};function t(s){var c,{className:x,triggerClassName:f,children:o,open:d,onOpenChange:b,placement:a=v.El.Top,hasArrow:n,offset:C,popoverContent:J,trigger:M,outsideClick:Z,hoverDelayOpen:ie,hoverDelayClose:A,triggerRef:O,widthStrategy:pe=v.Lw.Auto,heightStrategy:ue=v.cJ.Auto,closeOnEscapeKey:fe=!0,triggerClickByKeys:Ee=!0,fallbackPlacements:Se=v.Y_,arrowContainerClassName:Pe,arrowElementClassName:Ae,disableSpanWrapper:De=!1}=s,Ce=m(s,["className","triggerClassName","children","open","onOpenChange","placement","hasArrow","offset","popoverContent","trigger","outsideClick","hoverDelayOpen","hoverDelayClose","triggerRef","widthStrategy","heightStrategy","closeOnEscapeKey","triggerClickByKeys","fallbackPlacements","arrowContainerClassName","arrowElementClassName","disableSpanWrapper"]);const ge=(0,I.useRef)(null),[xe,Me]=(0,T.iC)(d,!1,b),Te=(0,p.fI)(),ke=ee({triggerClassName:f,offsetProp:C}),je=$(ge.current),{floatingStyles:Le,refs:me,context:ve,middlewareData:_e,placement:Oe}=(0,p.we)({nodeId:Te,placement:a,open:xe,onOpenChange:Me,whileElementsMounted:w.ll,middleware:[(0,g.BN)(),(0,g.cY)(ke+je),n&&(0,g.UE)({element:ge,padding:(ke+je)*2}),(0,g.UU)({fallbackPlacements:Se}),(0,g.Ej)({apply({rects:X,availableHeight:be}){const V=me.floating.current;if(V){switch(ue){case v.cJ.Eq:V.style.height=`${be}px`;break;case v.cJ.Lte:V.style.maxHeight=`${be}px`;break;case v.cJ.Auto:default:break}switch(pe){case v.Lw.Eq:V.style.width=`${X.reference.width}px`,V.style.minWidth="0px";break;case v.Lw.Gte:V.style.width="auto",V.style.minWidth=`${X.reference.width}px`;break;case v.Lw.Auto:default:V.style.width="auto",V.style.minWidth="auto"}}}}),(0,g.jD)()]}),Re=(0,I.useCallback)(X=>{me.setReference(X),O&&(typeof O=="function"?O(X):O.current=X)},[O,me]),{useHoverTrigger:We,useFocusTrigger:Be,useClickTrigger:ze,keyboardOnly:Ne}=G(M),He=(0,p.s9)(ve,{outsidePress:Z,ancestorScroll:!1,escapeKey:fe}),Fe=(0,p.Mk)(ve,{enabled:We,handleClose:(0,p.iB)({requireIntent:!1}),delay:{open:ie,close:A}}),Ue=(0,p.iQ)(ve,{enabled:Be,visibleOnly:Ne}),Ke=(0,p.kp)(ve,{enabled:ze,keyboardHandlers:Ee}),{getFloatingProps:Xe,getReferenceProps:ye}=(0,p.bv)([He,Fe,Ue,Ke]),he=(0,I.useCallback)((X,be)=>{typeof O=="object"&&(O!=null&&O.current)&&(me.setReference(O.current),Object.entries(X).map(([V,Ie])=>{const we=q(V);we&&(0,W.B)()&&(be==="add"&&O.current.addEventListener(we,Ie),be==="remove"&&O.current.removeEventListener(we,Ie))}))},[me,O]);(0,I.useEffect)(()=>{if(o)return;const X=S(ye());return he(X,"add"),()=>he(X,"remove")},[o,he,ye]);const Ve=xe&&(0,r.jsx)(p.XF,{root:le(),children:(0,r.jsxs)("div",Object.assign({role:"presentation"},(0,L.z7)(Ce),{className:y()(_.floating,x,{[_.floatingHidden]:!!(!((c=_e.hide)===null||c===void 0)&&c.referenceHidden)}),ref:me.setFloating,style:Le,"data-placement":Oe},Xe({onClick:H,onMouseDown:H,onMouseUp:H,onTouchStart:F,onTouchEnd:F,onTouchMove:F}),{children:[J,_e.arrow&&(0,r.jsx)(U,{placement:Oe,x:_e.arrow.x,y:_e.arrow.y,arrowContainerClassName:Pe,arrowElementClassName:Ae,arrowRef:ge})]}))},"portal");return(0,r.jsxs)(p.$c,{id:Te,children:[o&&ne({validElementWrapperClassName:y()(f),getReferenceProps:ye,children:o,setReference:Re,disableSpanWrapper:De}),Ve]})}function i(s){var{children:c}=s,x=m(s,["children"]);return(0,p.R1)()===null?(0,r.jsx)(p.P6,{children:(0,r.jsx)(t,Object.assign({},x,{children:c}))}):(0,r.jsx)(t,Object.assign({},x,{children:c}))}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js":((j,h,e)=>{e.d(h,{El:()=>r,Lw:()=>w,Y_:()=>u,cJ:()=>g,tr:()=>p});const r={Left:"left",LeftStart:"left-start",LeftEnd:"left-end",Right:"right",RightStart:"right-start",RightEnd:"right-end",Top:"top",TopStart:"top-start",TopEnd:"top-end",Bottom:"bottom",BottomStart:"bottom-start",BottomEnd:"bottom-end"},p={Click:"click",Hover:"hover",FocusVisible:"focusVisible",Focus:"focus",HoverAndFocusVisible:"hoverAndFocusVisible",HoverAndFocus:"hoverAndFocus",ClickAndFocusVisible:"clickAndFocusVisible"},w={Auto:"auto",Gte:"gte",Eq:"eq"},g={Auto:"auto",Lte:"lte",Eq:"eq"},u=[r.Top,r.Right,r.Bottom,r.Left]}),"./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.1_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/PromoTag.js":((j,h,e)=>{e.d(h,{e:()=>ce});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=e.n(p),g=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.4_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),u=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const y={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},I={Accent:"accent",Decor:"decor"},T={Xxs:"xxs",Xs:"xs",S:"s"};var W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(W),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),te=e.n(v),re=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),le=e.n(re),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),ne=e.n($),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),H=e.n(G),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),q=e.n(F),B=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.1_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"),S={};S.styleTagTransform=q(),S.setAttributes=ne(),S.insert=le().bind(null,"head"),S.domAPI=te(),S.insertStyleElement=H();var U=L()(B.A,S);const de=B.A&&B.A.locals?B.A.locals:void 0;var ee=function(E,K){var R={};for(var k in E)Object.prototype.hasOwnProperty.call(E,k)&&K.indexOf(k)<0&&(R[k]=E[k]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,k=Object.getOwnPropertySymbols(E);D<k.length;D++)K.indexOf(k[D])<0&&Object.prototype.propertyIsEnumerable.call(E,k[D])&&(R[k[D]]=E[k[D]]);return R};function ce(E){var{appearance:K=y.Primary,color:R=I.Accent,size:k=T.Xxs,className:D,text:ae,beforeContent:Q,afterContent:P,onClick:z}=E,oe=ee(E,["appearance","color","size","className","text","beforeContent","afterContent","onClick"]);const se=k!==T.Xxs,Y=z?{role:"button",tabIndex:0,onClick:z}:{},N=k===T.S?g.o.SansLabelM:g.o.SansLabelS;return(0,r.jsxs)("div",Object.assign({className:w()(de.promoTag,D)},(0,u.z7)(oe),{"data-appearance":K,"data-color":R,"data-size":k},Y,{children:[se&&Q,!!ae&&(0,r.jsx)(N,{className:de.labelWrapper,tag:"span",children:ae}),se&&P]}))}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js":((j,h,e)=>{e.d(h,{o:()=>N});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=e.n(p),g=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=function(l,_){var m={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&_.indexOf(t)<0&&(m[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(l);i<t.length;i++)_.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(l,t[i])&&(m[t[i]]=l[t[i]]);return m};const T=u.forwardRef((l,_)=>{var{size:m=24}=l,t=y(l,["size"]);t.width=void 0,t.height=void 0;const i="-question-s";return typeof m=="number"&&(t.style||(t.style={}),t.style.width=m+"px",t.style.height=m+"px"),(0,r.jsx)("svg",Object.assign({ref:_,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+i},t,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+i.substring(1)})}))});var W=function(l,_){var m={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&_.indexOf(t)<0&&(m[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(l);i<t.length;i++)_.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(l,t[i])&&(m[t[i]]=l[t[i]]);return m};const v=u.forwardRef((l,_)=>{var{size:m=24}=l,t=W(l,["size"]);t.width=void 0,t.height=void 0;const i="-question-xs";return typeof m=="number"&&(t.style||(t.style={}),t.style.width=m+"px",t.style.height=m+"px"),(0,r.jsx)("svg",Object.assign({ref:_,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+i},t,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+i.substring(1)})}))});var te=function(l,_){var m={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&_.indexOf(t)<0&&(m[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(l);i<t.length;i++)_.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(l,t[i])&&(m[t[i]]=l[t[i]]);return m};const le=(0,u.forwardRef)((l,_)=>{var{size:m=24}=l,t=te(l,["size"]);return Number(m)>=20?(0,r.jsx)(T,Object.assign({ref:_,size:m},t)):(0,r.jsx)(v,Object.assign({ref:_,size:m},t))});var $=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),ne=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),G=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const H={S:"s",Xs:"xs"},F={[H.Xs]:16,[H.S]:24},q={Hover:"hover",Click:"click"},B={[q.Hover]:G.tr.HoverAndFocusVisible,[q.Click]:G.tr.ClickAndFocusVisible};var S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),U=e.n(S),de=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),ee=e.n(de),ce=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),E=e.n(ce),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n(K),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=e.n(k),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Q=e.n(ae),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),z={};z.styleTagTransform=Q(),z.setAttributes=R(),z.insert=E().bind(null,"head"),z.domAPI=ee(),z.insertStyleElement=D();var oe=U()(P.A,z);const se=P.A&&P.A.locals?P.A.locals:void 0;var Y=function(l,_){var m={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&_.indexOf(t)<0&&(m[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(l);i<t.length;i++)_.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(l,t[i])&&(m[t[i]]=l[t[i]]);return m};function N(l){var{size:_=H.Xs,trigger:m=q.Hover,tooltipClassname:t,className:i,open:s,onOpenChange:c,tabIndex:x=0,triggerSupportProps:f={}}=l,o=Y(l,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[d,b]=(0,g.iC)(s,!1,c);return(0,r.jsx)(ne.m,Object.assign({},o,{className:t,open:d,onOpenChange:b,trigger:B[m],children:({getReferenceProps:a,ref:n})=>(0,r.jsx)("span",Object.assign({},a(),(0,$.z7)(f),{ref:n,"data-size":_,"data-opened":d,"data-trigger":m,className:w()(se.questionTooltip,i),role:"button",tabIndex:x,children:(0,r.jsx)(le,{size:F[_]})}))}))}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((j,h,e)=>{e.d(h,{m:()=>f});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=e.n(p),g=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),u=e.n(g),y=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),I=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),T=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const W=[T.El.Top,T.El.Right,T.El.Bottom,T.El.Left];var L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=e.n(L),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),re=e.n(te),le=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),$=e.n(le),ne=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),G=e.n(ne),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),F=e.n(H),q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),B=e.n(q),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),U={};U.styleTagTransform=B(),U.setAttributes=G(),U.insert=$().bind(null,"head"),U.domAPI=re(),U.insertStyleElement=F();var de=v()(S.A,U);const ee=S.A&&S.A.locals?S.A.locals:void 0;var ce=function(o,d){var b={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&d.indexOf(a)<0&&(b[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(o);n<a.length;n++)d.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(o,a[n])&&(b[a[n]]=o[a[n]]);return b};function E(o){var{tip:d,trigger:b="hoverAndFocusVisible",placement:a="top",children:n,triggerRef:C,disableMaxWidth:J=!1}=o,M=ce(o,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!n&&!C?null:(0,r.jsx)(I.Z,Object.assign({placement:a,popoverContent:(0,r.jsx)("div",{className:ee.tooltipContainer,"data-disable-max-width":J,children:d}),trigger:b,triggerRef:C,arrowContainerClassName:ee.tooltipArrowContainer,arrowElementClassName:ee.tooltipArrowElement,hasArrow:!0,fallbackPlacements:W},M,{children:n}))}var K=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const R=o=>o?o.offsetHeight<o.scrollHeight||o.offsetWidth<o.scrollWidth:!1,k=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],D="...",ae=({text:o,element:d,truncatedElement:b})=>{if(d&&b&&R(d)){const a=d.scrollWidth/o.length;let n=o;for(const{potentialDelimiterWidth:C,leftHalfDelta:J,rightHalfDelta:M}of k){const Z=Math.floor((d.offsetWidth/a-C)/2),ie=o.slice(0,Z-J),A=o.slice(o.length-Z+M,o.length);if(n=`${ie}${D}${A}`,b.innerHTML=n,b.scrollWidth<=d.offsetWidth-1)break}return n}return o};var Q=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),P={};P.styleTagTransform=B(),P.setAttributes=G(),P.insert=$().bind(null,"head"),P.domAPI=re(),P.insertStyleElement=F();var z=v()(Q.A,P);const oe=Q.A&&Q.A.locals?Q.A.locals:void 0;var se=function(o,d){var b={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&d.indexOf(a)<0&&(b[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(o);n<a.length;n++)d.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(o,a[n])&&(b[a[n]]=o[a[n]]);return b};function Y(o){var{text:d,className:b,hideTooltip:a,placement:n}=o,C=se(o,["text","className","hideTooltip","placement"]);const[J,M]=(0,y.useState)(!1),[Z,ie]=(0,y.useState)(d),A=(0,y.useRef)(null),O=(0,y.useRef)(null);(0,y.useEffect)(()=>{const ue=u()(()=>{ie(ae({element:A.current,truncatedElement:O.current,text:d})),M(R(A.current))},50);ue();const fe=new ResizeObserver(ue);return A.current&&fe.observe(A.current),()=>{fe.disconnect()}},[J,d,a]);const pe=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{ref:A,className:oe.fullText,"data-test-id":"full-text",children:d}),(0,r.jsx)("span",{ref:O,className:oe.truncatedText,"data-test-id":"truncated-text",children:Z})]});return(0,r.jsx)("span",Object.assign({className:w()(oe.wrapper,b)},(0,K.z7)(C),{children:J&&!a?(0,r.jsx)(E,{tip:d,placement:n,hoverDelayOpen:500,triggerClassName:oe.textContainer,children:pe}):pe}))}var N=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),_={};_.styleTagTransform=B(),_.setAttributes=G(),_.insert=$().bind(null,"head"),_.domAPI=re(),_.insertStyleElement=F();var m=v()(l.A,_);const t=l.A&&l.A.locals?l.A.locals:void 0;var i=function(o,d){var b={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&d.indexOf(a)<0&&(b[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(o);n<a.length;n++)d.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(o,a[n])&&(b[a[n]]=o[a[n]]);return b};function s(o){var{text:d,className:b,hideTooltip:a,maxLines:n=1,placement:C}=o,J=i(o,["text","className","hideTooltip","maxLines","placement"]);const M=(0,y.useRef)(null),[Z,ie]=(0,y.useState)(!1),A=(0,y.useCallback)(()=>{ie(R(M.current))},[]);(0,N.N)(()=>{M.current&&A()},[d,A]),(0,y.useEffect)(()=>{const pe=u()(()=>{A()},50),ue=new ResizeObserver(pe);return M.current&&(A(),ue.observe(M.current)),()=>{ue.disconnect()}},[Z,a,A]);const O=(0,r.jsx)("span",Object.assign({ref:M,className:w()(n>1?t.text2AndMoreLines:t.text1Line,b,{[t.ellipsis]:!M.current||Z}),style:{"--max-lines":n}},(0,K.z7)(J),{children:d}));return Z&&!a?(0,r.jsx)(E,{tip:d,placement:C,hoverDelayOpen:500,triggerClassName:t.tooltipTrigger,children:O}):O}const c={Middle:"middle",End:"end"};var x=function(o,d){var b={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&d.indexOf(a)<0&&(b[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(o);n<a.length;n++)d.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(o,a[n])&&(b[a[n]]=o[a[n]]);return b};function f(o){var{variant:d=c.End}=o,b=x(o,["variant"]);switch(d){case c.Middle:return(0,r.jsx)(Y,Object.assign({},b));case c.End:default:return(0,r.jsx)(s,Object.assign({},b))}}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js":((j,h,e)=>{e.d(h,{N:()=>w});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const w=(0,p.B)()?r.useLayoutEffect:r.useEffect}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((j,h,e)=>{e.d(h,{sg:()=>u,z7:()=>I});const r=/^data-test-/,p=/^(data|aria)-/;function w(T,W){return Object.keys(T).filter(L=>!L.match(W)).reduce((L,v)=>Object.assign(Object.assign({},L),{[v]:T[v]}),{})}function g(T,W){return Object.keys(T).reduce((L,v)=>(v.match(W)&&(L[v]=T[v]),L),{})}function u(T){return w(T,p)}function y(T){return g(T,r)}function I(T){return g(T,p)}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js":((j,h,e)=>{e.d(h,{B:()=>r});function r(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css":((j,h,e)=>{e.d(h,{A:()=>y});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(r),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),g=e.n(w),u=g()(p());u.push([j.id,`.floating--zY6fP{
  display:flex;
  flex-direction:column;
}

.floatingHidden--TBReL{
  display:none;
}`,""]),u.locals={floating:"floating--zY6fP",floatingHidden:"floatingHidden--TBReL"};const y=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.1_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css":((j,h,e)=>{e.d(h,{A:()=>y});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(r),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),g=e.n(w),u=g()(p());u.push([j.id,`.promoTag--e1wrI{
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
}`,""]),u.locals={promoTag:"promoTag--e1wrI",labelWrapper:"labelWrapper--mXLD4"};const y=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css":((j,h,e)=>{e.d(h,{A:()=>y});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(r),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),g=e.n(w),u=g()(p());u.push([j.id,`.questionTooltip--DxuzD{
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
}`,""]),u.locals={questionTooltip:"questionTooltip--DxuzD"};const y=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((j,h,e)=>{e.d(h,{A:()=>y});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(r),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),g=e.n(w),u=g()(p());u.push([j.id,`.tooltipContainer--sNjHE{
  padding:var(--space-tooltip-padding-single, 16px);
  border-radius:var(--radius-tooltip-container, 24px);
  min-width:var(--size-tooltip-container-min-width, 60px);
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
.tooltipContainer--sNjHE[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--kp7UG{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 24px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 24px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--RXZLg{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),u.locals={tooltipContainer:"tooltipContainer--sNjHE",tooltipArrowContainer:"tooltipArrowContainer--kp7UG",tooltipArrowElement:"tooltipArrowElement--RXZLg"};const y=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((j,h,e)=>{e.d(h,{A:()=>y});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(r),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),g=e.n(w),u=g()(p());u.push([j.id,`.text1Line--f6dc7{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--pfrWO{
  text-overflow:ellipsis;
}

.text2AndMoreLines--pAGBJ{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--t5FmB{
  display:grid;
}`,""]),u.locals={text1Line:"text1Line--f6dc7",ellipsis:"ellipsis--pfrWO",text2AndMoreLines:"text2AndMoreLines--pAGBJ",tooltipTrigger:"tooltipTrigger--t5FmB"};const y=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((j,h,e)=>{e.d(h,{A:()=>y});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(r),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),g=e.n(w),u=g()(p());u.push([j.id,`.wrapper--giCLb{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--YO6BU{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--RkMAt{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--i6tvz{
  display:inline-flex;
}`,""]),u.locals={wrapper:"wrapper--giCLb",truncatedText:"truncatedText--YO6BU",fullText:"fullText--RkMAt",textContainer:"textContainer--i6tvz"};const y=u})}]);})();
