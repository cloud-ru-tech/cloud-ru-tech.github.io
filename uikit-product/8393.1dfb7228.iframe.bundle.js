"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[8393,9374],{"./node_modules/.pnpm/@snack-uikit+icons@0.25.1_react@18.2.0/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js":((S,b,e)=>{e.d(b,{A:()=>m});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),w=function(d,k){var h={};for(var s in d)Object.prototype.hasOwnProperty.call(d,s)&&k.indexOf(s)<0&&(h[s]=d[s]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,s=Object.getOwnPropertySymbols(d);g<s.length;g++)k.indexOf(s[g])<0&&Object.prototype.propertyIsEnumerable.call(d,s[g])&&(h[s[g]]=d[s[g]]);return h};const u=l.forwardRef((d,k)=>{var{size:h=24}=d,s=w(d,["size"]);s.width=void 0,s.height=void 0;const g="-cross-s";return typeof h=="number"&&(s.style||(s.style={}),s.style.width=h+"px",s.style.height=h+"px"),(0,a.jsx)("svg",Object.assign({ref:k,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+g},s,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+g.substring(1)})}))});var _=function(d,k){var h={};for(var s in d)Object.prototype.hasOwnProperty.call(d,s)&&k.indexOf(s)<0&&(h[s]=d[s]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,s=Object.getOwnPropertySymbols(d);g<s.length;g++)k.indexOf(s[g])<0&&Object.prototype.propertyIsEnumerable.call(d,s[g])&&(h[s[g]]=d[s[g]]);return h};const O=l.forwardRef((d,k)=>{var{size:h=24}=d,s=_(d,["size"]);s.width=void 0,s.height=void 0;const g="-cross-xs";return typeof h=="number"&&(s.style||(s.style={}),s.style.width=h+"px",s.style.height=h+"px"),(0,a.jsx)("svg",Object.assign({ref:k,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+g},s,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+g.substring(1)})}))});var L=function(d,k){var h={};for(var s in d)Object.prototype.hasOwnProperty.call(d,s)&&k.indexOf(s)<0&&(h[s]=d[s]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,s=Object.getOwnPropertySymbols(d);g<s.length;g++)k.indexOf(s[g])<0&&Object.prototype.propertyIsEnumerable.call(d,s[g])&&(h[s[g]]=d[s[g]]);return h};const m=(0,l.forwardRef)((d,k)=>{var{size:h=24}=d,s=L(d,["size"]);return Number(h)>=20?(0,a.jsx)(u,Object.assign({ref:k,size:h},s)):(0,a.jsx)(O,Object.assign({ref:k,size:h},s))})}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js":((S,b,e)=>{e.d(b,{Z:()=>ve});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/@floating-ui+react@0.26.24_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),w=e("./node_modules/.pnpm/@floating-ui+dom@1.7.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),y=e("./node_modules/.pnpm/@floating-ui+react-dom@2.1.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(u),A=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),L=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),U=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),m=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js"),d=e("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");function k({placement:r,x:i,y:j,ref:v}){if(!v.current)return{};const t=v.current.offsetWidth;switch(!0){case r.startsWith("top"):return{left:i,bottom:-t,transform:"rotate(-90deg)"};case r.startsWith("bottom"):return{left:i,top:-t,transform:"rotate(90deg)"};case r.startsWith("left"):return{top:j,right:-(t-1),transform:"rotate(180deg)"};case r.startsWith("right"):default:return{top:j,left:-(t-1)}}}const h=()=>(0,L.B)()?document.body:void 0,s=r=>(r==null?void 0:r.offsetWidth)||0,g=({children:r,getReferenceProps:i,setReference:j,validElementWrapperClassName:v,disableSpanWrapper:t})=>(0,A.isValidElement)(r)?(0,d.isForwardRef)(r)||(0,d.isValidElementType)(r)||t?(0,A.cloneElement)(r,Object.assign(Object.assign({},i(Object.assign(Object.assign({},r.props),{className:_()(r.props.className,v)}))),{ref:j,key:"cloned-element"})):(0,A.createElement)("span",Object.assign({className:v,ref:j},i(),{key:"wrapped-element"}),r):typeof r=="function"?(0,a.jsx)(A.Fragment,{children:r({getReferenceProps:i,ref:j})},"function-element"):(0,A.createElement)("span",Object.assign({className:v,ref:j},i(),{key:"wrapped-element"}),r),H=r=>{const i={useHoverTrigger:!1,useClickTrigger:!1,useFocusTrigger:!1,keyboardOnly:!0};switch(r){case m.tr.Hover:return Object.assign(Object.assign({},i),{useHoverTrigger:!0});case m.tr.Click:return Object.assign(Object.assign({},i),{useClickTrigger:!0});case m.tr.FocusVisible:return Object.assign(Object.assign({},i),{useFocusTrigger:!0});case m.tr.Focus:return Object.assign(Object.assign({},i),{useFocusTrigger:!0,keyboardOnly:!1});case m.tr.ClickAndFocusVisible:return Object.assign(Object.assign({},i),{useFocusTrigger:!0,useClickTrigger:!0});case m.tr.HoverAndFocusVisible:return Object.assign(Object.assign({},i),{useFocusTrigger:!0,useHoverTrigger:!0});case m.tr.HoverAndFocus:return Object.assign(Object.assign({},i),{useFocusTrigger:!0,useHoverTrigger:!0,keyboardOnly:!1});default:return i}},ee=r=>r.stopPropagation(),N=r=>r.stopPropagation();function J(r){return r.slice(0,2)==="on"?r.replace("on","").toLowerCase():r.toLowerCase()}function R(r){return Object.assign(Object.assign({},r),{nativeEvent:r})}function te(r){const i={};return Object.entries(r).forEach(([j,v])=>{i[j]=t=>{v(R(t))}}),i}function C({placement:r,x:i,y:j,arrowContainerClassName:v,arrowElementClassName:t,arrowRef:c}){return(0,a.jsx)("div",{className:v,ref:c,style:k({x:i,y:j,placement:r,ref:c}),children:(0,a.jsx)("svg",{className:t,viewBox:"0 0 4 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M4 0V8L0.707106 4.70711C0.316582 4.31658 0.316583 3.68342 0.707107 3.29289L4 0Z"})})})}var _e=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function ae({triggerClassName:r,offsetProp:i}){const[j,v]=(0,A.useState)(0);return(0,_e.N)(()=>{const t=document.querySelector("."+String(r).split(/\s+/g).map(CSS.escape).join(".")),c=t?getComputedStyle(t):null,f=c?c.getPropertyValue("--offset"):null;if(i!==void 0){v(i);return}const o=document.createElement("span");o.style.width=f||"",document.body.appendChild(o);const n=getComputedStyle(o).width;document.body.removeChild(o);const G=parseInt(n||"");if(Number.isNaN(G)||G<1){v(0);return}v(G)},[i,r]),j}var $=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n($),le=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Q=e.n(le),de=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),ie=e.n(de),ce=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),q=e.n(ce),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=e.n(p),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=e.n(E),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"),X={};X.styleTagTransform=x(),X.setAttributes=q(),X.insert=ie().bind(null,"head"),X.domAPI=Q(),X.insertStyleElement=D();var V=Z()(T.A,X);const I=T.A&&T.A.locals?T.A.locals:void 0;var ue=function(r,i){var j={};for(var v in r)Object.prototype.hasOwnProperty.call(r,v)&&i.indexOf(v)<0&&(j[v]=r[v]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,v=Object.getOwnPropertySymbols(r);t<v.length;t++)i.indexOf(v[t])<0&&Object.prototype.propertyIsEnumerable.call(r,v[t])&&(j[v[t]]=r[v[t]]);return j};function Y(r){var i,{className:j,triggerClassName:v,children:t,open:c,onOpenChange:f,placement:o=m.El.Top,hasArrow:n,offset:G,popoverContent:F,trigger:M,outsideClick:K,hoverDelayOpen:se,hoverDelayClose:B,triggerRef:P,widthStrategy:re=m.Lw.Auto,heightStrategy:oe=m.cJ.Auto,closeOnEscapeKey:me=!0,triggerClickByKeys:Se=!0,fallbackPlacements:Pe=m.Y_,arrowContainerClassName:Ae,arrowElementClassName:Be,disableSpanWrapper:Ce=!1}=r,De=ue(r,["className","triggerClassName","children","open","onOpenChange","placement","hasArrow","offset","popoverContent","trigger","outsideClick","hoverDelayOpen","hoverDelayClose","triggerRef","widthStrategy","heightStrategy","closeOnEscapeKey","triggerClickByKeys","fallbackPlacements","arrowContainerClassName","arrowElementClassName","disableSpanWrapper"]);const be=(0,A.useRef)(null),[we,Ge]=(0,O.iC)(c,!1,f),Te=(0,l.fI)(),ke=ae({triggerClassName:v,offsetProp:G}),je=s(be.current),{floatingStyles:Me,refs:ne,context:ge,middlewareData:fe,placement:Oe}=(0,l.we)({nodeId:Te,placement:o,open:we,onOpenChange:Ge,whileElementsMounted:w.ll,middleware:[(0,y.BN)(),(0,y.cY)(ke+je),n&&(0,y.UE)({element:be,padding:(ke+je)*2}),(0,y.UU)({fallbackPlacements:Pe}),(0,y.Ej)({apply({rects:W,availableHeight:pe}){const z=ne.floating.current;if(z){switch(oe){case m.cJ.Eq:z.style.height=`${pe}px`;break;case m.cJ.Lte:z.style.maxHeight=`${pe}px`;break;case m.cJ.Auto:default:break}switch(re){case m.Lw.Eq:z.style.width=`${W.reference.width}px`,z.style.minWidth="0px";break;case m.Lw.Gte:z.style.width="auto",z.style.minWidth=`${W.reference.width}px`;break;case m.Lw.Auto:default:z.style.width="auto",z.style.minWidth="auto"}}}}),(0,y.jD)()]}),Le=(0,A.useCallback)(W=>{ne.setReference(W),P&&(typeof P=="function"?P(W):P.current=W)},[P,ne]),{useHoverTrigger:Ue,useFocusTrigger:Ie,useClickTrigger:Re,keyboardOnly:Xe}=H(M),Ze=(0,l.s9)(ge,{outsidePress:K,ancestorScroll:!1,escapeKey:me}),We=(0,l.Mk)(ge,{enabled:Ue,handleClose:(0,l.iB)({requireIntent:!1}),delay:{open:se,close:B}}),ze=(0,l.iQ)(ge,{enabled:Ie,visibleOnly:Xe}),He=(0,l.kp)(ge,{enabled:Re,keyboardHandlers:Se}),{getFloatingProps:Ne,getReferenceProps:ye}=(0,l.bv)([Ze,We,ze,He]),he=(0,A.useCallback)((W,pe)=>{typeof P=="object"&&(P!=null&&P.current)&&(ne.setReference(P.current),Object.entries(W).map(([z,Ee])=>{const xe=J(z);xe&&(0,L.B)()&&(pe==="add"&&P.current.addEventListener(xe,Ee),pe==="remove"&&P.current.removeEventListener(xe,Ee))}))},[ne,P]);(0,A.useEffect)(()=>{if(t)return;const W=te(ye());return he(W,"add"),()=>he(W,"remove")},[t,he,ye]);const Fe=we&&(0,a.jsx)(l.XF,{root:h(),children:(0,a.jsxs)("div",Object.assign({role:"presentation"},(0,U.z7)(De),{className:_()(I.floating,j,{[I.floatingHidden]:!!(!((i=fe.hide)===null||i===void 0)&&i.referenceHidden)}),ref:ne.setFloating,style:Me,"data-placement":Oe},Ne({onClick:ee,onMouseDown:ee,onMouseUp:ee,onTouchStart:N,onTouchEnd:N,onTouchMove:N}),{children:[F,fe.arrow&&(0,a.jsx)(C,{placement:Oe,x:fe.arrow.x,y:fe.arrow.y,arrowContainerClassName:Ae,arrowElementClassName:Be,arrowRef:be})]}))},"portal");return(0,a.jsxs)(l.$c,{id:Te,children:[t&&g({validElementWrapperClassName:_()(v),getReferenceProps:ye,children:t,setReference:Le,disableSpanWrapper:Ce}),Fe]})}function ve(r){var{children:i}=r,j=ue(r,["children"]);return(0,l.R1)()===null?(0,a.jsx)(l.P6,{children:(0,a.jsx)(Y,Object.assign({},j,{children:i}))}):(0,a.jsx)(Y,Object.assign({},j,{children:i}))}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js":((S,b,e)=>{e.d(b,{El:()=>a,Lw:()=>w,Y_:()=>u,cJ:()=>y,tr:()=>l});const a={Left:"left",LeftStart:"left-start",LeftEnd:"left-end",Right:"right",RightStart:"right-start",RightEnd:"right-end",Top:"top",TopStart:"top-start",TopEnd:"top-end",Bottom:"bottom",BottomStart:"bottom-start",BottomEnd:"bottom-end"},l={Click:"click",Hover:"hover",FocusVisible:"focusVisible",Focus:"focus",HoverAndFocusVisible:"hoverAndFocusVisible",HoverAndFocus:"hoverAndFocus",ClickAndFocusVisible:"clickAndFocusVisible"},w={Auto:"auto",Gte:"gte",Eq:"eq"},y={Auto:"auto",Lte:"lte",Eq:"eq"},u=[a.Top,a.Right,a.Bottom,a.Left]}),"./node_modules/.pnpm/@snack-uikit+tag@0.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/Tag/Tag.js":((S,b,e)=>{e.d(b,{v:()=>q});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=e.n(l),y=e("./node_modules/.pnpm/@snack-uikit+icons@0.25.1_react@18.2.0/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),_=e("./node_modules/.pnpm/@snack-uikit+tag@0.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/constants.js");const A={[_.S.Xs]:16,[_.S.S]:24};var O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(O),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=e.n(U),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),k=e.n(d),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),s=e.n(h),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),H=e.n(g),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),N=e.n(ee),J=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"),R={};R.styleTagTransform=N(),R.setAttributes=s(),R.insert=k().bind(null,"head"),R.domAPI=m(),R.insertStyleElement=H();var te=L()(J.A,R);const C=J.A&&J.A.locals?J.A.locals:void 0;var _e=function(p,D){var E={};for(var x in p)Object.prototype.hasOwnProperty.call(p,x)&&D.indexOf(x)<0&&(E[x]=p[x]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,x=Object.getOwnPropertySymbols(p);T<x.length;T++)D.indexOf(x[T])<0&&Object.prototype.propertyIsEnumerable.call(p,x[T])&&(E[x[T]]=p[x[T]]);return E};function ae(p){var{label:D,size:E=_.S.Xs,appearance:x=_.x.Neutral,onDelete:T,className:X,tabIndex:V}=p,I=_e(p,["label","size","appearance","onDelete","className","tabIndex"]);return(0,a.jsxs)("span",Object.assign({},(0,u.z7)(I),{className:w()(C.tag,X),"data-size":E,"data-appearance":x,"data-removable":!!T,children:[(0,a.jsx)("span",{title:D,className:C.label,children:D}),T&&(0,a.jsx)("button",{type:"button",className:C.tagButton,onClick:T,"data-test-id":"tag-remove-button",tabIndex:V,children:E===_.S.Xs?(0,a.jsx)(y.A,{size:A[E],className:C.icon}):(0,a.jsx)(y.A,{size:A[E],className:C.icon})})]}))}var $=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"),Z={};Z.styleTagTransform=N(),Z.setAttributes=s(),Z.insert=k().bind(null,"head"),Z.domAPI=m(),Z.insertStyleElement=H();var le=L()($.A,Z);const Q=$.A&&$.A.locals?$.A.locals:void 0;var de=function(p,D){var E={};for(var x in p)Object.prototype.hasOwnProperty.call(p,x)&&D.indexOf(x)<0&&(E[x]=p[x]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,x=Object.getOwnPropertySymbols(p);T<x.length;T++)D.indexOf(x[T])<0&&Object.prototype.propertyIsEnumerable.call(p,x[T])&&(E[x[T]]=p[x[T]]);return E};function ie(p){var{label:D,size:E=_.S.Xs,appearance:x=_.x.Neutral,className:T,tabIndex:X,href:V,onClick:I,target:ue}=p,Y=de(p,["label","size","appearance","className","tabIndex","href","onClick","target"]);return(0,a.jsx)("a",Object.assign({},(0,u.z7)(Y),{className:w()(Q.tag,T),"data-size":E,"data-appearance":x,tabIndex:X,href:V,target:ue,onClick:I,children:(0,a.jsx)("span",{title:D,className:Q.label,children:D})}))}function ce(p){return"href"in p&&p.href!==void 0}function q(p){return ce(p)?(0,a.jsx)(ie,Object.assign({},p)):(0,a.jsx)(ae,Object.assign({},p))}}),"./node_modules/.pnpm/@snack-uikit+tag@0.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/constants.js":((S,b,e)=>{e.d(b,{S:()=>l,x:()=>a});const a={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},l={Xs:"xs",S:"s"}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((S,b,e)=>{e.d(b,{m:()=>v});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=e.n(l),y=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),u=e.n(y),_=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),A=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),O=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const L=[O.El.Top,O.El.Right,O.El.Bottom,O.El.Left];var U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(U),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),k=e.n(d),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),s=e.n(h),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),H=e.n(g),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(ee),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n(J),te=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),C={};C.styleTagTransform=R(),C.setAttributes=H(),C.insert=s().bind(null,"head"),C.domAPI=k(),C.insertStyleElement=N();var _e=m()(te.A,C);const ae=te.A&&te.A.locals?te.A.locals:void 0;var $=function(t,c){var f={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&c.indexOf(o)<0&&(f[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)c.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(f[o[n]]=t[o[n]]);return f};function Z(t){var{tip:c,trigger:f="hoverAndFocusVisible",placement:o="top",children:n,triggerRef:G,disableMaxWidth:F=!1}=t,M=$(t,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!n&&!G?null:(0,a.jsx)(A.Z,Object.assign({placement:o,popoverContent:(0,a.jsx)("div",{className:ae.tooltipContainer,"data-disable-max-width":F,children:c}),trigger:f,triggerRef:G,arrowContainerClassName:ae.tooltipArrowContainer,arrowElementClassName:ae.tooltipArrowElement,hasArrow:!0,fallbackPlacements:L},M,{children:n}))}var le=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const Q=t=>t?t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth:!1,de=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],ie="...",ce=({text:t,element:c,truncatedElement:f})=>{if(c&&f&&Q(c)){const o=c.scrollWidth/t.length;let n=t;for(const{potentialDelimiterWidth:G,leftHalfDelta:F,rightHalfDelta:M}of de){const K=Math.floor((c.offsetWidth/o-G)/2),se=t.slice(0,K-F),B=t.slice(t.length-K+M,t.length);if(n=`${se}${ie}${B}`,f.innerHTML=n,f.scrollWidth<=c.offsetWidth-1)break}return n}return t};var q=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),p={};p.styleTagTransform=R(),p.setAttributes=H(),p.insert=s().bind(null,"head"),p.domAPI=k(),p.insertStyleElement=N();var D=m()(q.A,p);const E=q.A&&q.A.locals?q.A.locals:void 0;var x=function(t,c){var f={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&c.indexOf(o)<0&&(f[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)c.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(f[o[n]]=t[o[n]]);return f};function T(t){var{text:c,className:f,hideTooltip:o,placement:n}=t,G=x(t,["text","className","hideTooltip","placement"]);const[F,M]=(0,_.useState)(!1),[K,se]=(0,_.useState)(c),B=(0,_.useRef)(null),P=(0,_.useRef)(null);(0,_.useEffect)(()=>{const oe=u()(()=>{se(ce({element:B.current,truncatedElement:P.current,text:c})),M(Q(B.current))},50);oe();const me=new ResizeObserver(oe);return B.current&&me.observe(B.current),()=>{me.disconnect()}},[F,c,o]);const re=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{ref:B,className:E.fullText,"data-test-id":"full-text",children:c}),(0,a.jsx)("span",{ref:P,className:E.truncatedText,"data-test-id":"truncated-text",children:K})]});return(0,a.jsx)("span",Object.assign({className:w()(E.wrapper,f)},(0,le.z7)(G),{children:F&&!o?(0,a.jsx)(Z,{tip:c,placement:n,hoverDelayOpen:500,triggerClassName:E.textContainer,children:re}):re}))}var X=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),V=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),I={};I.styleTagTransform=R(),I.setAttributes=H(),I.insert=s().bind(null,"head"),I.domAPI=k(),I.insertStyleElement=N();var ue=m()(V.A,I);const Y=V.A&&V.A.locals?V.A.locals:void 0;var ve=function(t,c){var f={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&c.indexOf(o)<0&&(f[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)c.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(f[o[n]]=t[o[n]]);return f};function r(t){var{text:c,className:f,hideTooltip:o,maxLines:n=1,placement:G}=t,F=ve(t,["text","className","hideTooltip","maxLines","placement"]);const M=(0,_.useRef)(null),[K,se]=(0,_.useState)(!1),B=(0,_.useCallback)(()=>{se(Q(M.current))},[]);(0,X.N)(()=>{M.current&&B()},[c,B]),(0,_.useEffect)(()=>{const re=u()(()=>{B()},50),oe=new ResizeObserver(re);return M.current&&(B(),oe.observe(M.current)),()=>{oe.disconnect()}},[K,o,B]);const P=(0,a.jsx)("span",Object.assign({ref:M,className:w()(n>1?Y.text2AndMoreLines:Y.text1Line,f,{[Y.ellipsis]:!M.current||K}),style:{"--max-lines":n}},(0,le.z7)(F),{children:c}));return K&&!o?(0,a.jsx)(Z,{tip:c,placement:G,hoverDelayOpen:500,triggerClassName:Y.tooltipTrigger,children:P}):P}const i={Middle:"middle",End:"end"};var j=function(t,c){var f={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&c.indexOf(o)<0&&(f[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)c.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(f[o[n]]=t[o[n]]);return f};function v(t){var{variant:c=i.End}=t,f=j(t,["variant"]);switch(c){case i.Middle:return(0,a.jsx)(T,Object.assign({},f));case i.End:default:return(0,a.jsx)(r,Object.assign({},f))}}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js":((S,b,e)=>{e.d(b,{N:()=>w});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const w=(0,l.B)()?a.useLayoutEffect:a.useEffect}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((S,b,e)=>{e.d(b,{sg:()=>u,z7:()=>A});const a=/^data-test-/,l=/^(data|aria)-/;function w(O,L){return Object.keys(O).filter(U=>!U.match(L)).reduce((U,m)=>Object.assign(Object.assign({},U),{[m]:O[m]}),{})}function y(O,L){return Object.keys(O).reduce((U,m)=>(m.match(L)&&(U[m]=O[m]),U),{})}function u(O){return w(O,l)}function _(O){return y(O,a)}function A(O){return y(O,l)}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js":((S,b,e)=>{e.d(b,{B:()=>a});function a(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.14.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>_});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),y=e.n(w),u=y()(l());u.push([S.id,`.floating--zY6fP{
  display:flex;
  flex-direction:column;
}

.floatingHidden--TBReL{
  display:none;
}`,""]),u.locals={floating:"floating--zY6fP",floatingHidden:"floatingHidden--TBReL"};const _=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>_});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),y=e.n(w),u=y()(l());u.push([S.id,`.tag--ea86G{
  display:inline-flex;
  align-items:center;
  box-sizing:border-box;
  max-width:100%;
}
.tag--ea86G .tagButton--eTcZx{
  cursor:pointer;
  position:relative;
  box-sizing:border-box;
  margin:0;
  padding:0;
  background:none;
  border:none;
}
.tag--ea86G .tagButton--eTcZx:focus{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
}
.tag--ea86G .tagButton--eTcZx:active{
  outline:none;
}
.tag--ea86G .icon--G3RtU{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
.tag--ea86G[data-size=xs]{
  padding-left:var(--space-tag-xs-from-label, 8px);
  padding-right:var(--space-tag-xs-from-label, 8px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
}
.tag--ea86G[data-size=xs][data-removable=true]{
  padding-left:var(--space-tag-xs-from-label, 8px);
  padding-right:var(--space-tag-xs-from-button, 0px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
  gap:var(--space-tag-xs-gap, 2px);
}
.tag--ea86G[data-size=xs] .label--OHgCT{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.tag--ea86G[data-size=xs] .tagButton--eTcZx{
  border-radius:var(--radius-tag-xs, 4px);
  height:var(--size-tag-xs, 24px);
  width:var(--size-tag-xs, 24px);
}
.tag--ea86G[data-size=s]{
  padding-left:var(--space-tag-s-from-label, 16px);
  padding-right:var(--space-tag-s-from-label, 16px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 8px);
}
.tag--ea86G[data-size=s][data-removable=true]{
  padding-left:var(--space-tag-s-from-label, 16px);
  padding-right:var(--space-tag-s-from-button, 0px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 8px);
  gap:var(--space-tag-s-gap, 2px);
}
.tag--ea86G[data-size=s] .label--OHgCT{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.tag--ea86G[data-size=s] .tagButton--eTcZx{
  border-radius:var(--radius-tag-s, 8px);
  height:var(--size-tag-s, 32px);
  width:var(--size-tag-s, 32px);
}
.tag--ea86G[data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.tag--ea86G[data-appearance=neutral] .label--OHgCT{
  overflow:hidden;
  color:var(--sys-neutral-text-support, #6d707f);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ea86G[data-appearance=neutral] .tagButton--eTcZx{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.tag--ea86G[data-appearance=neutral] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=neutral] .tagButton--eTcZx:hover, .tag--ea86G[data-appearance=neutral] .tagButton--eTcZx:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.tag--ea86G[data-appearance=neutral] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=neutral] .tagButton--eTcZx:hover{
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.tag--ea86G[data-appearance=neutral] .tagButton--eTcZx:active{
  background-color:var(--sys-neutral-decor-activated, #bec2cf);
}
.tag--ea86G[data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #ebdefd);
}
.tag--ea86G[data-appearance=primary] .label--OHgCT{
  overflow:hidden;
  color:var(--sys-primary-text-support, #5b4796);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ea86G[data-appearance=primary] .tagButton--eTcZx{
  color:var(--sys-primary-text-light, #997adc);
}
.tag--ea86G[data-appearance=primary] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=primary] .tagButton--eTcZx:hover, .tag--ea86G[data-appearance=primary] .tagButton--eTcZx:active{
  color:var(--sys-primary-text-main, #382a62);
}
.tag--ea86G[data-appearance=primary] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=primary] .tagButton--eTcZx:hover{
  background-color:var(--sys-primary-decor-hovered, #decdfb);
}
.tag--ea86G[data-appearance=primary] .tagButton--eTcZx:active{
  background-color:var(--sys-primary-decor-activated, #c5b2f1);
}
.tag--ea86G[data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.tag--ea86G[data-appearance=red] .label--OHgCT{
  overflow:hidden;
  color:var(--sys-red-text-support, #ae514c);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ea86G[data-appearance=red] .tagButton--eTcZx{
  color:var(--sys-red-text-light, #e7756a);
}
.tag--ea86G[data-appearance=red] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=red] .tagButton--eTcZx:hover, .tag--ea86G[data-appearance=red] .tagButton--eTcZx:active{
  color:var(--sys-red-text-main, #7a2d2d);
}
.tag--ea86G[data-appearance=red] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=red] .tagButton--eTcZx:hover{
  background-color:var(--sys-red-decor-hovered, #fac1b3);
}
.tag--ea86G[data-appearance=red] .tagButton--eTcZx:active{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.tag--ea86G[data-appearance=orange]{
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.tag--ea86G[data-appearance=orange] .label--OHgCT{
  overflow:hidden;
  color:var(--sys-orange-text-support, #bb733e);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ea86G[data-appearance=orange] .tagButton--eTcZx{
  color:var(--sys-orange-text-light, #e78940);
}
.tag--ea86G[data-appearance=orange] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=orange] .tagButton--eTcZx:hover, .tag--ea86G[data-appearance=orange] .tagButton--eTcZx:active{
  color:var(--sys-orange-text-main, #884c23);
}
.tag--ea86G[data-appearance=orange] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=orange] .tagButton--eTcZx:hover{
  background-color:var(--sys-orange-decor-hovered, #f8c699);
}
.tag--ea86G[data-appearance=orange] .tagButton--eTcZx:active{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.tag--ea86G[data-appearance=yellow]{
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.tag--ea86G[data-appearance=yellow] .label--OHgCT{
  overflow:hidden;
  color:var(--sys-yellow-text-support, #b78c32);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ea86G[data-appearance=yellow] .tagButton--eTcZx{
  color:var(--sys-yellow-text-light, #d3a736);
}
.tag--ea86G[data-appearance=yellow] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=yellow] .tagButton--eTcZx:hover, .tag--ea86G[data-appearance=yellow] .tagButton--eTcZx:active{
  color:var(--sys-yellow-text-main, #815f19);
}
.tag--ea86G[data-appearance=yellow] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=yellow] .tagButton--eTcZx:hover{
  background-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.tag--ea86G[data-appearance=yellow] .tagButton--eTcZx:active{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.tag--ea86G[data-appearance=green]{
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.tag--ea86G[data-appearance=green] .label--OHgCT{
  overflow:hidden;
  color:var(--sys-green-text-support, #55915a);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ea86G[data-appearance=green] .tagButton--eTcZx{
  color:var(--sys-green-text-light, #69b56f);
}
.tag--ea86G[data-appearance=green] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=green] .tagButton--eTcZx:hover, .tag--ea86G[data-appearance=green] .tagButton--eTcZx:active{
  color:var(--sys-green-text-main, #3d6035);
}
.tag--ea86G[data-appearance=green] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=green] .tagButton--eTcZx:hover{
  background-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.tag--ea86G[data-appearance=green] .tagButton--eTcZx:active{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.tag--ea86G[data-appearance=blue]{
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.tag--ea86G[data-appearance=blue] .label--OHgCT{
  overflow:hidden;
  color:var(--sys-blue-text-support, #4877b0);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ea86G[data-appearance=blue] .tagButton--eTcZx{
  color:var(--sys-blue-text-light, #749eda);
}
.tag--ea86G[data-appearance=blue] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=blue] .tagButton--eTcZx:hover, .tag--ea86G[data-appearance=blue] .tagButton--eTcZx:active{
  color:var(--sys-blue-text-main, #2b537e);
}
.tag--ea86G[data-appearance=blue] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=blue] .tagButton--eTcZx:hover{
  background-color:var(--sys-blue-decor-hovered, #c5d9f6);
}
.tag--ea86G[data-appearance=blue] .tagButton--eTcZx:active{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.tag--ea86G[data-appearance=violet]{
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.tag--ea86G[data-appearance=violet] .label--OHgCT{
  overflow:hidden;
  color:var(--sys-violet-text-support, #8c639b);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ea86G[data-appearance=violet] .tagButton--eTcZx{
  color:var(--sys-violet-text-light, #b68bd5);
}
.tag--ea86G[data-appearance=violet] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=violet] .tagButton--eTcZx:hover, .tag--ea86G[data-appearance=violet] .tagButton--eTcZx:active{
  color:var(--sys-violet-text-main, #59446a);
}
.tag--ea86G[data-appearance=violet] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=violet] .tagButton--eTcZx:hover{
  background-color:var(--sys-violet-decor-hovered, #e1d0f7);
}
.tag--ea86G[data-appearance=violet] .tagButton--eTcZx:active{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.tag--ea86G[data-appearance=pink]{
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.tag--ea86G[data-appearance=pink] .label--OHgCT{
  overflow:hidden;
  color:var(--sys-pink-text-support, #ae5e80);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ea86G[data-appearance=pink] .tagButton--eTcZx{
  color:var(--sys-pink-text-light, #db85a2);
}
.tag--ea86G[data-appearance=pink] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=pink] .tagButton--eTcZx:hover, .tag--ea86G[data-appearance=pink] .tagButton--eTcZx:active{
  color:var(--sys-pink-text-main, #754158);
}
.tag--ea86G[data-appearance=pink] .tagButton--eTcZx:focus, .tag--ea86G[data-appearance=pink] .tagButton--eTcZx:hover{
  background-color:var(--sys-pink-decor-hovered, #f5c9d6);
}
.tag--ea86G[data-appearance=pink] .tagButton--eTcZx:active{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}`,""]),u.locals={tag:"tag--ea86G",tagButton:"tagButton--eTcZx",icon:"icon--G3RtU",label:"label--OHgCT"};const _=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.12.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>_});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),y=e.n(w),u=y()(l());u.push([S.id,`.tag--XU7fc{
  display:inline-flex;
  align-items:center;
  box-sizing:border-box;
  max-width:100%;
  text-decoration:none;
}
.tag--XU7fc:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.tag--XU7fc:active{
  outline:none;
}
.tag--XU7fc[data-size=xs]{
  padding-left:var(--space-tag-xs-from-label, 8px);
  padding-right:var(--space-tag-xs-from-label, 8px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
}
.tag--XU7fc[data-size=xs] .label--w8Sea{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.tag--XU7fc[data-size=s]{
  padding-left:var(--space-tag-s-from-label, 16px);
  padding-right:var(--space-tag-s-from-label, 16px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 8px);
}
.tag--XU7fc[data-size=s] .label--w8Sea{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.tag--XU7fc[data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.tag--XU7fc[data-appearance=neutral] .label--w8Sea{
  overflow:hidden;
  color:var(--sys-neutral-text-support, #6d707f);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--XU7fc[data-appearance=neutral]:focus-visible, .tag--XU7fc[data-appearance=neutral]:hover{
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.tag--XU7fc[data-appearance=neutral]:active{
  background-color:var(--sys-neutral-decor-activated, #bec2cf);
}
.tag--XU7fc[data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #ebdefd);
}
.tag--XU7fc[data-appearance=primary] .label--w8Sea{
  overflow:hidden;
  color:var(--sys-primary-text-support, #5b4796);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--XU7fc[data-appearance=primary]:focus-visible, .tag--XU7fc[data-appearance=primary]:hover{
  background-color:var(--sys-primary-decor-hovered, #decdfb);
}
.tag--XU7fc[data-appearance=primary]:active{
  background-color:var(--sys-primary-decor-activated, #c5b2f1);
}
.tag--XU7fc[data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.tag--XU7fc[data-appearance=red] .label--w8Sea{
  overflow:hidden;
  color:var(--sys-red-text-support, #ae514c);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--XU7fc[data-appearance=red]:focus-visible, .tag--XU7fc[data-appearance=red]:hover{
  background-color:var(--sys-red-decor-hovered, #fac1b3);
}
.tag--XU7fc[data-appearance=red]:active{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.tag--XU7fc[data-appearance=orange]{
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.tag--XU7fc[data-appearance=orange] .label--w8Sea{
  overflow:hidden;
  color:var(--sys-orange-text-support, #bb733e);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--XU7fc[data-appearance=orange]:focus-visible, .tag--XU7fc[data-appearance=orange]:hover{
  background-color:var(--sys-orange-decor-hovered, #f8c699);
}
.tag--XU7fc[data-appearance=orange]:active{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.tag--XU7fc[data-appearance=yellow]{
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.tag--XU7fc[data-appearance=yellow] .label--w8Sea{
  overflow:hidden;
  color:var(--sys-yellow-text-support, #b78c32);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--XU7fc[data-appearance=yellow]:focus-visible, .tag--XU7fc[data-appearance=yellow]:hover{
  background-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.tag--XU7fc[data-appearance=yellow]:active{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.tag--XU7fc[data-appearance=green]{
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.tag--XU7fc[data-appearance=green] .label--w8Sea{
  overflow:hidden;
  color:var(--sys-green-text-support, #55915a);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--XU7fc[data-appearance=green]:focus-visible, .tag--XU7fc[data-appearance=green]:hover{
  background-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.tag--XU7fc[data-appearance=green]:active{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.tag--XU7fc[data-appearance=blue]{
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.tag--XU7fc[data-appearance=blue] .label--w8Sea{
  overflow:hidden;
  color:var(--sys-blue-text-support, #4877b0);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--XU7fc[data-appearance=blue]:focus-visible, .tag--XU7fc[data-appearance=blue]:hover{
  background-color:var(--sys-blue-decor-hovered, #c5d9f6);
}
.tag--XU7fc[data-appearance=blue]:active{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.tag--XU7fc[data-appearance=violet]{
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.tag--XU7fc[data-appearance=violet] .label--w8Sea{
  overflow:hidden;
  color:var(--sys-violet-text-support, #8c639b);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--XU7fc[data-appearance=violet]:focus-visible, .tag--XU7fc[data-appearance=violet]:hover{
  background-color:var(--sys-violet-decor-hovered, #e1d0f7);
}
.tag--XU7fc[data-appearance=violet]:active{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.tag--XU7fc[data-appearance=pink]{
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.tag--XU7fc[data-appearance=pink] .label--w8Sea{
  overflow:hidden;
  color:var(--sys-pink-text-support, #ae5e80);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--XU7fc[data-appearance=pink]:focus-visible, .tag--XU7fc[data-appearance=pink]:hover{
  background-color:var(--sys-pink-decor-hovered, #f5c9d6);
}
.tag--XU7fc[data-appearance=pink]:active{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}`,""]),u.locals={tag:"tag--XU7fc",label:"label--w8Sea"};const _=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>_});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),y=e.n(w),u=y()(l());u.push([S.id,`.tooltipContainer--sNjHE{
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
}`,""]),u.locals={tooltipContainer:"tooltipContainer--sNjHE",tooltipArrowContainer:"tooltipArrowContainer--kp7UG",tooltipArrowElement:"tooltipArrowElement--RXZLg"};const _=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>_});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),y=e.n(w),u=y()(l());u.push([S.id,`.text1Line--f6dc7{
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
}`,""]),u.locals={text1Line:"text1Line--f6dc7",ellipsis:"ellipsis--pfrWO",text2AndMoreLines:"text2AndMoreLines--pAGBJ",tooltipTrigger:"tooltipTrigger--t5FmB"};const _=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>_});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),y=e.n(w),u=y()(l());u.push([S.id,`.wrapper--giCLb{
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
}`,""]),u.locals={wrapper:"wrapper--giCLb",truncatedText:"truncatedText--YO6BU",fullText:"fullText--RkMAt",textContainer:"textContainer--i6tvz"};const _=u})}]);})();
