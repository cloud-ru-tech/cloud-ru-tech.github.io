(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[1642,5568,8186],{"./node_modules/.pnpm/@cloud-ru+ft-copy-to-clipboard@0.1.0/node_modules/@cloud-ru/ft-copy-to-clipboard/dist/esm/index.js":((x,f,e)=>{"use strict";e.d(f,{l:()=>y});var t=e("./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js"),m=e.n(t);function y(b){m()(b,{format:"text/plain"})}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js":((x,f,e)=>{"use strict";e.d(f,{Z:()=>ne});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/@floating-ui+react@0.26.24_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),y=e("./node_modules/.pnpm/@floating-ui+dom@1.7.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),b=e("./node_modules/.pnpm/@floating-ui+react-dom@2.1.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(c),h=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),U=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function w(i){const g=(0,h.useRef)(null);return(0,U.N)(()=>{g.current=i}),(0,h.useCallback)((...s)=>{const r=g.current;return r===null&&console.warn("The event handler cannot be called during render"),r==null?void 0:r(...s)},[])}function C(i,g=!0){const s=w(i);(0,h.useEffect)(()=>{if(g)return window.addEventListener("popstate",s),()=>window.removeEventListener("popstate",s)},[g,s])}var N=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),T=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),E=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js"),$=e("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");function R({placement:i,x:g,y:s,ref:r}){if(!r.current)return{};const p=r.current.offsetWidth;switch(!0){case i.startsWith("top"):return{left:g,bottom:-p,transform:"rotate(-90deg)"};case i.startsWith("bottom"):return{left:g,top:-p,transform:"rotate(90deg)"};case i.startsWith("left"):return{top:s,right:-(p-1),transform:"rotate(180deg)"};case i.startsWith("right"):default:return{top:s,left:-(p-1)}}}const X=()=>(0,N.B)()?document.body:void 0,J=i=>(i==null?void 0:i.offsetWidth)||0,Y=({children:i,getReferenceProps:g,setReference:s,validElementWrapperClassName:r,disableSpanWrapper:p})=>(0,h.isValidElement)(i)?(0,$.isForwardRef)(i)||(0,$.isValidElementType)(i)||p?(0,h.cloneElement)(i,Object.assign(Object.assign({},g(Object.assign(Object.assign({},i.props),{className:u()(i.props.className,r)}))),{ref:s,key:"cloned-element"})):(0,h.createElement)("span",Object.assign({className:r,ref:s},g(),{key:"wrapped-element"}),i):typeof i=="function"?(0,t.jsx)(h.Fragment,{children:i({getReferenceProps:g,ref:s})},"function-element"):(0,h.createElement)("span",Object.assign({className:r,ref:s},g(),{key:"wrapped-element"}),i),H=i=>{const g={useHoverTrigger:!1,useClickTrigger:!1,useFocusTrigger:!1,keyboardOnly:!0};switch(i){case E.tr.Hover:return Object.assign(Object.assign({},g),{useHoverTrigger:!0});case E.tr.Click:return Object.assign(Object.assign({},g),{useClickTrigger:!0});case E.tr.FocusVisible:return Object.assign(Object.assign({},g),{useFocusTrigger:!0});case E.tr.Focus:return Object.assign(Object.assign({},g),{useFocusTrigger:!0,keyboardOnly:!1});case E.tr.ClickAndFocusVisible:return Object.assign(Object.assign({},g),{useFocusTrigger:!0,useClickTrigger:!0});case E.tr.HoverAndFocusVisible:return Object.assign(Object.assign({},g),{useFocusTrigger:!0,useHoverTrigger:!0});case E.tr.HoverAndFocus:return Object.assign(Object.assign({},g),{useFocusTrigger:!0,useHoverTrigger:!0,keyboardOnly:!1});default:return g}},V=i=>i.stopPropagation(),W=i=>i.stopPropagation();function q(i){return i.slice(0,2)==="on"?i.replace("on","").toLowerCase():i.toLowerCase()}function ae(i){return Object.assign(Object.assign({},i),{nativeEvent:i})}function P(i){const g={};return Object.entries(i).forEach(([s,r])=>{g[s]=p=>{r(ae(p))}}),g}function M({placement:i,x:g,y:s,arrowContainerClassName:r,arrowElementClassName:p,arrowRef:d}){return(0,t.jsx)("div",{className:r,ref:d,style:R({x:g,y:s,placement:i,ref:d}),children:(0,t.jsx)("svg",{className:p,viewBox:"0 0 4 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M4 0V8L0.707106 4.70711C0.316582 4.31658 0.316583 3.68342 0.707107 3.29289L4 0Z"})})})}function F({triggerClassName:i,offsetProp:g}){const[s,r]=(0,h.useState)(0);return(0,U.N)(()=>{const p=document.querySelector("."+String(i).split(/\s+/g).map(CSS.escape).join(".")),d=p?getComputedStyle(p):null,v=d?d.getPropertyValue("--offset"):null;if(g!==void 0){r(g);return}const G=document.createElement("span");G.style.width=v||"",document.body.appendChild(G);const ee=getComputedStyle(G).width;document.body.removeChild(G);const se=parseInt(ee||"");if(Number.isNaN(se)||se<1){r(0);return}r(se)},[g,i]),s}var A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),K=e.n(A),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),L=e.n(oe),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),I=e.n(te),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=e.n(D),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Q=e.n(S),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),O=e.n(z),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"),o={};o.styleTagTransform=O(),o.setAttributes=B(),o.insert=I().bind(null,"head"),o.domAPI=L(),o.insertStyleElement=Q();var _=K()(l.A,o);const a=l.A&&l.A.locals?l.A.locals:void 0;var n=function(i,g){var s={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&g.indexOf(r)<0&&(s[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,r=Object.getOwnPropertySymbols(i);p<r.length;p++)g.indexOf(r[p])<0&&Object.prototype.propertyIsEnumerable.call(i,r[p])&&(s[r[p]]=i[r[p]]);return s};function k(i){var g,{className:s,triggerClassName:r,children:p,open:d,onOpenChange:v,placement:G=E.El.Top,hasArrow:ee,offset:se,popoverContent:ce,trigger:le,outsideClick:ue,hoverDelayOpen:fe,hoverDelayClose:re,triggerRef:Z,widthStrategy:me=E.Lw.Auto,heightStrategy:pe=E.cJ.Auto,closeOnEscapeKey:ve=!0,triggerClickByKeys:we=!0,fallbackPlacements:Ce=E.Y_,arrowContainerClassName:Ie,arrowElementClassName:Me,disableSpanWrapper:ze=!1,closeOnPopstate:Re}=i,We=n(i,["className","triggerClassName","children","open","onOpenChange","placement","hasArrow","offset","popoverContent","trigger","outsideClick","hoverDelayOpen","hoverDelayClose","triggerRef","widthStrategy","heightStrategy","closeOnEscapeKey","triggerClickByKeys","fallbackPlacements","arrowContainerClassName","arrowElementClassName","disableSpanWrapper","closeOnPopstate"]);const he=(0,h.useRef)(null),[xe,Se]=(0,j.iC)(d,!1,v);C(()=>xe&&Se(!1),!!Re);const Oe=(0,m.fI)(),Te=F({triggerClassName:r,offsetProp:se}),Pe=J(he.current),{floatingStyles:Le,refs:_e,context:ye,middlewareData:be,placement:De}=(0,m.we)({nodeId:Oe,placement:G,open:xe,onOpenChange:Se,whileElementsMounted:y.ll,middleware:[(0,b.BN)(),(0,b.cY)(Te+Pe),ee&&(0,b.UE)({element:he,padding:(Te+Pe)*2}),(0,b.UU)({fallbackPlacements:Ce}),(0,b.Ej)({apply({rects:de,availableHeight:ge}){const ie=_e.floating.current;if(ie){switch(pe){case E.cJ.Eq:ie.style.height=`${ge}px`;break;case E.cJ.Lte:ie.style.maxHeight=`${ge}px`;break;case E.cJ.Auto:default:break}switch(me){case E.Lw.Eq:ie.style.width=`${de.reference.width}px`,ie.style.minWidth="0px";break;case E.Lw.Gte:ie.style.width="auto",ie.style.minWidth=`${de.reference.width}px`;break;case E.Lw.Auto:default:ie.style.width="auto",ie.style.minWidth="auto"}}}}),(0,b.jD)()]}),Be=(0,h.useCallback)(de=>{_e.setReference(de),Z&&(typeof Z=="function"?Z(de):Z.current=de)},[Z,_e]),{useHoverTrigger:Ue,useFocusTrigger:Ne,useClickTrigger:He,keyboardOnly:Ke}=H(le),Ge=(0,m.s9)(ye,{outsidePress:ue,ancestorScroll:!1,escapeKey:ve}),Xe=(0,m.Mk)(ye,{enabled:Ue,handleClose:(0,m.iB)({requireIntent:!1}),delay:{open:fe,close:re}}),Fe=(0,m.iQ)(ye,{enabled:Ne,visibleOnly:Ke}),Ve=(0,m.kp)(ye,{enabled:He,keyboardHandlers:we}),{getFloatingProps:Qe,getReferenceProps:je}=(0,m.bv)([Ge,Xe,Fe,Ve]),ke=(0,h.useCallback)((de,ge)=>{typeof Z=="object"&&(Z!=null&&Z.current)&&(_e.setReference(Z.current),Object.entries(de).map(([ie,Ae])=>{const Ee=q(ie);Ee&&(0,N.B)()&&(ge==="add"&&Z.current.addEventListener(Ee,Ae),ge==="remove"&&Z.current.removeEventListener(Ee,Ae))}))},[_e,Z]);(0,h.useEffect)(()=>{if(p)return;const de=P(je());return ke(de,"add"),()=>ke(de,"remove")},[p,ke,je]);const Ze=xe&&(0,t.jsx)(m.XF,{root:X(),children:(0,t.jsxs)("div",Object.assign({role:"presentation"},(0,T.z7)(We),{className:u()(a.floating,s,{[a.floatingHidden]:!!(!((g=be.hide)===null||g===void 0)&&g.referenceHidden)}),ref:_e.setFloating,style:Le,"data-placement":De},Qe({onClick:V,onMouseDown:V,onMouseUp:V,onTouchStart:W,onTouchEnd:W,onTouchMove:W}),{children:[ce,be.arrow&&(0,t.jsx)(M,{placement:De,x:be.arrow.x,y:be.arrow.y,arrowContainerClassName:Ie,arrowElementClassName:Me,arrowRef:he})]}))},"portal");return(0,t.jsxs)(m.$c,{id:Oe,children:[p&&Y({validElementWrapperClassName:u()(r),getReferenceProps:je,children:p,setReference:Be,disableSpanWrapper:ze}),Ze]})}function ne(i){var{children:g}=i,s=n(i,["children"]);return(0,m.R1)()===null?(0,t.jsx)(m.P6,{children:(0,t.jsx)(k,Object.assign({},s,{children:g}))}):(0,t.jsx)(k,Object.assign({},s,{children:g}))}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js":((x,f,e)=>{"use strict";e.d(f,{El:()=>t,Lw:()=>y,Y_:()=>c,cJ:()=>b,tr:()=>m});const t={Left:"left",LeftStart:"left-start",LeftEnd:"left-end",Right:"right",RightStart:"right-start",RightEnd:"right-end",Top:"top",TopStart:"top-start",TopEnd:"top-end",Bottom:"bottom",BottomStart:"bottom-start",BottomEnd:"bottom-end"},m={Click:"click",Hover:"hover",FocusVisible:"focusVisible",Focus:"focus",HoverAndFocusVisible:"hoverAndFocusVisible",HoverAndFocus:"hoverAndFocus",ClickAndFocusVisible:"clickAndFocusVisible"},y={Auto:"auto",Gte:"gte",Eq:"eq"},b={Auto:"auto",Lte:"lte",Eq:"eq"},c=[t.Top,t.Right,t.Bottom,t.Left]}),"./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/Status.js":((x,f,e)=>{"use strict";e.d(f,{n:()=>B});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(m),b=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),c=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),u=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const h={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},j={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(U),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),N=e.n(C),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),E=e.n(T),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n($),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),J=e.n(X),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),H=e.n(Y),V=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),W={};W.styleTagTransform=H(),W.setAttributes=R(),W.insert=E().bind(null,"head"),W.domAPI=N(),W.insertStyleElement=J();var q=w()(V.A,W);const ae=V.A&&V.A.locals?V.A.locals:void 0;var P=function(S,Q){var z={};for(var O in S)Object.prototype.hasOwnProperty.call(S,O)&&Q.indexOf(O)<0&&(z[O]=S[O]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,O=Object.getOwnPropertySymbols(S);l<O.length;l++)Q.indexOf(O[l])<0&&Object.prototype.propertyIsEnumerable.call(S,O[l])&&(z[O[l]]=S[O[l]]);return z};function M(S){var{size:Q=j.M,appearance:z=h.Primary,className:O}=S,l=P(S,["size","appearance","className"]);return(0,t.jsx)("div",Object.assign({className:y()(ae.container,O)},(0,u.z7)(l),{"data-size":Q,children:(0,t.jsx)("div",{className:ae.indicator,"data-appearance":z})}))}const F={Xs:"xs",S:"s"},A={[F.Xs]:j.Xs,[F.S]:j.S},K={[F.Xs]:"xxs",[F.S]:"xs"};var oe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/styles.module.css"),L={};L.styleTagTransform=H(),L.setAttributes=R(),L.insert=E().bind(null,"head"),L.domAPI=N(),L.insertStyleElement=J();var te=w()(oe.A,L);const I=oe.A&&oe.A.locals?oe.A.locals:void 0;var D=function(S,Q){var z={};for(var O in S)Object.prototype.hasOwnProperty.call(S,O)&&Q.indexOf(O)<0&&(z[O]=S[O]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,O=Object.getOwnPropertySymbols(S);l<O.length;l++)Q.indexOf(O[l])<0&&Object.prototype.propertyIsEnumerable.call(S,O[l])&&(z[O[l]]=S[O[l]]);return z};function B(S){var{label:Q,size:z=F.Xs,appearance:O=h.Primary,hasBackground:l,loading:o,className:_}=S,a=D(S,["label","size","appearance","hasBackground","loading","className"]);return(0,t.jsxs)("div",Object.assign({className:y()(I.container,_)},(0,u.z7)(a),{"data-size":z,"data-has-background":l||void 0,"data-appearance":o?h.Neutral:O,children:[o?(0,t.jsx)(b.y,{size:K[z]}):(0,t.jsx)(M,{appearance:O,size:A[z]}),(0,t.jsx)(c.m,{text:Q,maxLines:1,className:I.label,"data-test-id":"status__title","data-size":z})]}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/Status.js":((x,f,e)=>{"use strict";e.d(f,{n:()=>oe});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(m),b=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),c=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),u=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),h=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js"),j=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js"),U=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js");const w={Xs:"xs",S:"s"},C={[w.Xs]:U.S.Xs,[w.S]:U.S.S},N={[w.Xs]:"xxs",[w.S]:"xs"};var T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(T),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=e.n($),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),J=e.n(X),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),H=e.n(Y),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),W=e.n(V),q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),ae=e.n(q),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/styles.module.css"),M={};M.styleTagTransform=ae(),M.setAttributes=H(),M.insert=J().bind(null,"head"),M.domAPI=R(),M.insertStyleElement=W();var F=E()(P.A,M);const A=P.A&&P.A.locals?P.A.locals:void 0;var K=function(L,te){var I={};for(var D in L)Object.prototype.hasOwnProperty.call(L,D)&&te.indexOf(D)<0&&(I[D]=L[D]);if(L!=null&&typeof Object.getOwnPropertySymbols=="function")for(var B=0,D=Object.getOwnPropertySymbols(L);B<D.length;B++)te.indexOf(D[B])<0&&Object.prototype.propertyIsEnumerable.call(L,D[B])&&(I[D[B]]=L[D[B]]);return I};function oe(L){var{label:te,size:I=w.Xs,appearance:D=h.x.Primary,hasBackground:B,loading:S,className:Q}=L,z=K(L,["label","size","appearance","hasBackground","loading","className"]);return(0,t.jsxs)("div",Object.assign({className:y()(A.container,Q)},(0,u.z7)(z),{"data-size":I,"data-has-background":B||void 0,"data-appearance":S?h.x.Neutral:D,children:[S?(0,t.jsx)(b.y,{size:N[I]}):(0,t.jsx)(j.k,{appearance:D,size:C[I]}),(0,t.jsx)(c.m,{text:te,maxLines:1,className:A.label,"data-test-id":"status__title","data-size":I})]}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js":((x,f,e)=>{"use strict";e.d(f,{k:()=>ae});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(m),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),c=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js"),u=e("./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js"),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(h),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(U),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),N=e.n(C),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),E=e.n(T),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n($),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),J=e.n(X),Y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),H={};H.styleTagTransform=J(),H.setAttributes=E(),H.insert=N().bind(null,"head"),H.domAPI=w(),H.insertStyleElement=R();var V=j()(Y.A,H);const W=Y.A&&Y.A.locals?Y.A.locals:void 0;var q=function(P,M){var F={};for(var A in P)Object.prototype.hasOwnProperty.call(P,A)&&M.indexOf(A)<0&&(F[A]=P[A]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var K=0,A=Object.getOwnPropertySymbols(P);K<A.length;K++)M.indexOf(A[K])<0&&Object.prototype.propertyIsEnumerable.call(P,A[K])&&(F[A[K]]=P[A[K]]);return F};function ae(P){var{size:M=u.S.M,appearance:F=c.x.Primary,className:A}=P,K=q(P,["size","appearance","className"]);return(0,t.jsx)("div",Object.assign({className:y()(W.container,A)},(0,b.z7)(K),{"data-size":M,children:(0,t.jsx)("div",{className:W.indicator,"data-appearance":F})}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js":((x,f,e)=>{"use strict";e.d(f,{S:()=>t});const t={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js":((x,f,e)=>{"use strict";e.d(f,{x:()=>t});const t={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js":((x,f,e)=>{"use strict";e.d(f,{o:()=>O});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(m),b=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=function(l,o){var _={};for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&o.indexOf(a)<0&&(_[a]=l[a]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(l);n<a.length;n++)o.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(l,a[n])&&(_[a[n]]=l[a[n]]);return _};const j=c.forwardRef((l,o)=>{var{size:_=24}=l,a=u(l,["size"]);a.width=void 0,a.height=void 0;const n="-question-s";return typeof _=="number"&&(a.style||(a.style={}),a.style.width=_+"px",a.style.height=_+"px"),(0,t.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},a,{children:(0,t.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var U=function(l,o){var _={};for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&o.indexOf(a)<0&&(_[a]=l[a]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(l);n<a.length;n++)o.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(l,a[n])&&(_[a[n]]=l[a[n]]);return _};const C=c.forwardRef((l,o)=>{var{size:_=24}=l,a=U(l,["size"]);a.width=void 0,a.height=void 0;const n="-question-xs";return typeof _=="number"&&(a.style||(a.style={}),a.style.width=_+"px",a.style.height=_+"px"),(0,t.jsx)("svg",Object.assign({ref:o,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},a,{children:(0,t.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var N=function(l,o){var _={};for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&o.indexOf(a)<0&&(_[a]=l[a]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(l);n<a.length;n++)o.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(l,a[n])&&(_[a[n]]=l[a[n]]);return _};const E=(0,c.forwardRef)((l,o)=>{var{size:_=24}=l,a=N(l,["size"]);return Number(_)>=20?(0,t.jsx)(j,Object.assign({ref:o,size:_},a)):(0,t.jsx)(C,Object.assign({ref:o,size:_},a))});var $=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),R=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),X=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const J={S:"s",Xs:"xs"},Y={[J.Xs]:16,[J.S]:24},H={Hover:"hover",Click:"click"},V={[H.Hover]:X.tr.HoverAndFocusVisible,[H.Click]:X.tr.ClickAndFocusVisible};var W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),q=e.n(W),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),P=e.n(ae),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),F=e.n(M),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),K=e.n(A),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),L=e.n(oe),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=e.n(te),D=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),B={};B.styleTagTransform=I(),B.setAttributes=K(),B.insert=F().bind(null,"head"),B.domAPI=P(),B.insertStyleElement=L();var S=q()(D.A,B);const Q=D.A&&D.A.locals?D.A.locals:void 0;var z=function(l,o){var _={};for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&o.indexOf(a)<0&&(_[a]=l[a]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(l);n<a.length;n++)o.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(l,a[n])&&(_[a[n]]=l[a[n]]);return _};function O(l){var{size:o=J.Xs,trigger:_=H.Hover,tooltipClassname:a,className:n,open:k,onOpenChange:ne,tabIndex:i=0,triggerSupportProps:g={}}=l,s=z(l,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[r,p]=(0,b.iC)(k,!1,ne);return(0,t.jsx)(R.m,Object.assign({},s,{className:a,open:r,onOpenChange:p,trigger:V[_],children:({getReferenceProps:d,ref:v})=>(0,t.jsx)("span",Object.assign({},d(),(0,$.z7)(g),{ref:v,"data-size":o,"data-opened":r,"data-trigger":_,className:y()(Q.questionTooltip,n),role:"button",tabIndex:i,children:(0,t.jsx)(E,{size:Y[o]})}))}))}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((x,f,e)=>{"use strict";e.d(f,{m:()=>l});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(m),b=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),c=e.n(b),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),j=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const U=o=>o?o.offsetHeight<o.scrollHeight||o.offsetWidth<o.scrollWidth:!1,w=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],C="...",N=({text:o,element:_,truncatedElement:a})=>{if(_&&a&&U(_)){const n=_.scrollWidth/o.length;let k=o;for(const{potentialDelimiterWidth:ne,leftHalfDelta:i,rightHalfDelta:g}of w){const s=Math.floor((_.offsetWidth/n-ne)/2),r=o.slice(0,s-i),p=o.slice(o.length-s+g,o.length);if(k=`${r}${C}${p}`,a.innerText=k,a.scrollWidth<=_.offsetWidth-1)break}return k}return o};var T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=e.n(T),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=e.n($),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),J=e.n(X),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),H=e.n(Y),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),W=e.n(V),q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),ae=e.n(q),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),M={};M.styleTagTransform=ae(),M.setAttributes=H(),M.insert=J().bind(null,"head"),M.domAPI=R(),M.insertStyleElement=W();var F=E()(P.A,M);const A=P.A&&P.A.locals?P.A.locals:void 0;var K=function(o,_){var a={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&_.indexOf(n)<0&&(a[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var k=0,n=Object.getOwnPropertySymbols(o);k<n.length;k++)_.indexOf(n[k])<0&&Object.prototype.propertyIsEnumerable.call(o,n[k])&&(a[n[k]]=o[n[k]]);return a};function oe(o){var{text:_,className:a,tooltipClassName:n,hideTooltip:k,placement:ne}=o,i=K(o,["text","className","tooltipClassName","hideTooltip","placement"]);const[g,s]=(0,u.useState)(!1),[r,p]=(0,u.useState)(_),d=(0,u.useRef)(null),v=(0,u.useRef)(null);(0,u.useEffect)(()=>{const ee=c()(()=>{p(N({element:d.current,truncatedElement:v.current,text:_})),s(U(d.current))},50);ee();const se=new ResizeObserver(ee);return d.current&&se.observe(d.current),()=>{se.disconnect()}},[g,_,k]);const G=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{ref:d,className:A.fullText,"data-test-id":"full-text",children:_}),(0,t.jsx)("span",{ref:v,className:A.truncatedText,"data-test-id":"truncated-text",children:r})]});return(0,t.jsx)("span",Object.assign({className:y()(A.wrapper,a)},(0,j.z7)(i),{children:g&&!k?(0,t.jsx)(h.m,{tip:_,placement:ne,hoverDelayOpen:500,triggerClassName:A.textContainer,className:n,children:G}):G}))}var L=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),te=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),I={};I.styleTagTransform=ae(),I.setAttributes=H(),I.insert=J().bind(null,"head"),I.domAPI=R(),I.insertStyleElement=W();var D=E()(te.A,I);const B=te.A&&te.A.locals?te.A.locals:void 0;var S=function(o,_){var a={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&_.indexOf(n)<0&&(a[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var k=0,n=Object.getOwnPropertySymbols(o);k<n.length;k++)_.indexOf(n[k])<0&&Object.prototype.propertyIsEnumerable.call(o,n[k])&&(a[n[k]]=o[n[k]]);return a};function Q(o){var{text:_,className:a,tooltipClassName:n,hideTooltip:k,maxLines:ne=1,placement:i}=o,g=S(o,["text","className","tooltipClassName","hideTooltip","maxLines","placement"]);const s=(0,u.useRef)(null),[r,p]=(0,u.useState)(!1),d=(0,u.useCallback)(()=>{p(U(s.current))},[]);(0,L.N)(()=>{s.current&&d()},[_,d]),(0,u.useEffect)(()=>{const G=c()(()=>{d()},50),ee=new ResizeObserver(G);return s.current&&(d(),ee.observe(s.current)),()=>{ee.disconnect()}},[r,k,d]);const v=(0,t.jsx)("span",Object.assign({ref:s,className:y()(ne>1?B.text2AndMoreLines:B.text1Line,a,{[B.ellipsis]:!s.current||r}),style:{"--max-lines":ne}},(0,j.z7)(g),{children:_}));return r&&!k?(0,t.jsx)(h.m,{tip:_,placement:i,hoverDelayOpen:500,className:n,triggerClassName:B.tooltipTrigger,children:v}):v}const z={Middle:"middle",End:"end"};var O=function(o,_){var a={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&_.indexOf(n)<0&&(a[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var k=0,n=Object.getOwnPropertySymbols(o);k<n.length;k++)_.indexOf(n[k])<0&&Object.prototype.propertyIsEnumerable.call(o,n[k])&&(a[n[k]]=o[n[k]]);return a};function l(o){var{variant:_=z.End}=o,a=O(o,["variant"]);switch(_){case z.Middle:return(0,t.jsx)(oe,Object.assign({},a));case z.End:default:return(0,t.jsx)(Q,Object.assign({},a))}}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((x,f,e)=>{"use strict";e.d(f,{m:()=>g});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=e.n(m),b=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),c=e.n(b),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),j=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const U=[j.El.Top,j.El.Right,j.El.Bottom,j.El.Left];var w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(w),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),T=e.n(N),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),$=e.n(E),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),X=e.n(R),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Y=e.n(J),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),V=e.n(H),W=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),q={};q.styleTagTransform=V(),q.setAttributes=X(),q.insert=$().bind(null,"head"),q.domAPI=T(),q.insertStyleElement=Y();var ae=C()(W.A,q);const P=W.A&&W.A.locals?W.A.locals:void 0;var M=function(s,r){var p={};for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&r.indexOf(d)<0&&(p[d]=s[d]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,d=Object.getOwnPropertySymbols(s);v<d.length;v++)r.indexOf(d[v])<0&&Object.prototype.propertyIsEnumerable.call(s,d[v])&&(p[d[v]]=s[d[v]]);return p};function F(s){var{tip:r,trigger:p="hoverAndFocusVisible",placement:d="top",children:v,triggerRef:G,disableMaxWidth:ee=!1}=s,se=M(s,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!v&&!G?null:(0,t.jsx)(h.Z,Object.assign({placement:d,popoverContent:(0,t.jsx)("div",{className:P.tooltipContainer,"data-disable-max-width":ee,children:r}),trigger:p,triggerRef:G,arrowContainerClassName:P.tooltipArrowContainer,arrowElementClassName:P.tooltipArrowElement,hasArrow:!0,fallbackPlacements:U},se,{children:v}))}var A=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const K=s=>s?s.offsetHeight<s.scrollHeight||s.offsetWidth<s.scrollWidth:!1,oe=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],L="...",te=({text:s,element:r,truncatedElement:p})=>{if(r&&p&&K(r)){const d=r.scrollWidth/s.length;let v=s;for(const{potentialDelimiterWidth:G,leftHalfDelta:ee,rightHalfDelta:se}of oe){const ce=Math.floor((r.offsetWidth/d-G)/2),le=s.slice(0,ce-ee),ue=s.slice(s.length-ce+se,s.length);if(v=`${le}${L}${ue}`,p.innerText=v,p.scrollWidth<=r.offsetWidth-1)break}return v}return s};var I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),D={};D.styleTagTransform=V(),D.setAttributes=X(),D.insert=$().bind(null,"head"),D.domAPI=T(),D.insertStyleElement=Y();var B=C()(I.A,D);const S=I.A&&I.A.locals?I.A.locals:void 0;var Q=function(s,r){var p={};for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&r.indexOf(d)<0&&(p[d]=s[d]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,d=Object.getOwnPropertySymbols(s);v<d.length;v++)r.indexOf(d[v])<0&&Object.prototype.propertyIsEnumerable.call(s,d[v])&&(p[d[v]]=s[d[v]]);return p};function z(s){var{text:r,className:p,tooltipClassName:d,hideTooltip:v,placement:G,trigger:ee}=s,se=Q(s,["text","className","tooltipClassName","hideTooltip","placement","trigger"]);const[ce,le]=(0,u.useState)(!1),[ue,fe]=(0,u.useState)(r),re=(0,u.useRef)(null),Z=(0,u.useRef)(null);(0,u.useEffect)(()=>{const pe=c()(()=>{fe(te({element:re.current,truncatedElement:Z.current,text:r})),le(K(re.current))},50);pe();const ve=new ResizeObserver(pe);return re.current&&ve.observe(re.current),()=>{ve.disconnect()}},[ce,r,v]);const me=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{ref:re,className:S.fullText,"data-test-id":"full-text",children:r}),(0,t.jsx)("span",{ref:Z,className:S.truncatedText,"data-test-id":"truncated-text",children:ue})]});return(0,t.jsx)("span",Object.assign({className:y()(S.wrapper,p)},(0,A.z7)(se),{children:ce&&!v?(0,t.jsx)(F,{tip:r,placement:G,hoverDelayOpen:500,triggerClassName:S.textContainer,className:d,trigger:ee,children:me}):me}))}var O=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),o={};o.styleTagTransform=V(),o.setAttributes=X(),o.insert=$().bind(null,"head"),o.domAPI=T(),o.insertStyleElement=Y();var _=C()(l.A,o);const a=l.A&&l.A.locals?l.A.locals:void 0;var n=function(s,r){var p={};for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&r.indexOf(d)<0&&(p[d]=s[d]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,d=Object.getOwnPropertySymbols(s);v<d.length;v++)r.indexOf(d[v])<0&&Object.prototype.propertyIsEnumerable.call(s,d[v])&&(p[d[v]]=s[d[v]]);return p};function k(s){var{text:r,className:p,tooltipClassName:d,hideTooltip:v,maxLines:G=1,placement:ee,trigger:se}=s,ce=n(s,["text","className","tooltipClassName","hideTooltip","maxLines","placement","trigger"]);const le=(0,u.useRef)(null),[ue,fe]=(0,u.useState)(!1),re=(0,u.useCallback)(()=>{fe(K(le.current))},[]);(0,O.N)(()=>{le.current&&re()},[r,re]),(0,u.useEffect)(()=>{const me=c()(()=>{re()},50),pe=new ResizeObserver(me);return le.current&&(re(),pe.observe(le.current)),()=>{pe.disconnect()}},[ue,v,re]);const Z=(0,t.jsx)("span",Object.assign({ref:le,className:y()(G>1?a.text2AndMoreLines:a.text1Line,p,{[a.ellipsis]:!le.current||ue}),style:{"--max-lines":G}},(0,A.z7)(ce),{children:r}));return ue&&!v?(0,t.jsx)(F,{tip:r,placement:ee,hoverDelayOpen:500,className:d,triggerClassName:a.tooltipTrigger,trigger:se,children:Z}):Z}const ne={Middle:"middle",End:"end"};var i=function(s,r){var p={};for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&r.indexOf(d)<0&&(p[d]=s[d]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,d=Object.getOwnPropertySymbols(s);v<d.length;v++)r.indexOf(d[v])<0&&Object.prototype.propertyIsEnumerable.call(s,d[v])&&(p[d[v]]=s[d[v]]);return p};function g(s){var{variant:r=ne.End}=s,p=i(s,["variant"]);switch(r){case ne.Middle:return(0,t.jsx)(z,Object.assign({},p));case ne.End:default:return(0,t.jsx)(k,Object.assign({},p))}}}),"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js":((x,f,e)=>{"use strict";e.d(f,{N:()=>y});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const y=(0,m.B)()?t.useLayoutEffect:t.useEffect}),"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((x,f,e)=>{"use strict";e.d(f,{z7:()=>h});const t=/^data-test-/,m=/^(data|aria)-/;function y(j,U){return Object.keys(j).filter(w=>!w.match(U)).reduce((w,C)=>Object.assign(Object.assign({},w),{[C]:j[C]}),{})}function b(j,U){return Object.keys(j).reduce((w,C)=>(C.match(U)&&(w[C]=j[C]),w),{})}function c(j){return y(j,m)}function u(j){return b(j,t)}function h(j){return b(j,m)}}),"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js":((x,f,e)=>{"use strict";e.d(f,{B:()=>t});function t(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}}),"./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js":((x,f,e)=>{"use strict";var t=e("./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"),m={"text/plain":"Text","text/html":"Url",default:"Text"},y="Copy to clipboard: #{key}, Enter";function b(u){var h=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return u.replace(/#{\s*key\s*}/g,h)}function c(u,h){var j,U,w,C,N,T,E=!1;h||(h={}),j=h.debug||!1;try{w=t(),C=document.createRange(),N=document.getSelection(),T=document.createElement("span"),T.textContent=u,T.ariaHidden="true",T.style.all="unset",T.style.position="fixed",T.style.top=0,T.style.clip="rect(0, 0, 0, 0)",T.style.whiteSpace="pre",T.style.webkitUserSelect="text",T.style.MozUserSelect="text",T.style.msUserSelect="text",T.style.userSelect="text",T.addEventListener("copy",function(R){if(R.stopPropagation(),h.format)if(R.preventDefault(),typeof R.clipboardData=="undefined"){j&&console.warn("unable to use e.clipboardData"),j&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var X=m[h.format]||m.default;window.clipboardData.setData(X,u)}else R.clipboardData.clearData(),R.clipboardData.setData(h.format,u);h.onCopy&&(R.preventDefault(),h.onCopy(R.clipboardData))}),document.body.appendChild(T),C.selectNodeContents(T),N.addRange(C);var $=document.execCommand("copy");if(!$)throw new Error("copy command was unsuccessful");E=!0}catch(R){j&&console.error("unable to copy using execCommand: ",R),j&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(h.format||"text",u),h.onCopy&&h.onCopy(window.clipboardData),E=!0}catch(X){j&&console.error("unable to copy using clipboardData: ",X),j&&console.error("falling back to prompt"),U=b("message"in h?h.message:y),window.prompt(U,u)}}finally{N&&(typeof N.removeRange=="function"?N.removeRange(C):N.removeAllRanges()),T&&document.body.removeChild(T),w()}return E}x.exports=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.15.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css":((x,f,e)=>{"use strict";e.d(f,{A:()=>u});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(y),c=b()(m());c.push([x.id,`.floating--zxsXX{
  display:flex;
  flex-direction:column;
}

.floatingHidden--CoNqV{
  display:none;
}`,""]),c.locals={floating:"floating--zxsXX",floatingHidden:"floatingHidden--CoNqV"};const u=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/styles.module.css":((x,f,e)=>{"use strict";e.d(f,{A:()=>u});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(y),c=b()(m());c.push([x.id,`.container--PUoD0{
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
}`,""]),c.locals={container:"container--PUoD0",label:"label--vpuah"};const u=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((x,f,e)=>{"use strict";e.d(f,{A:()=>u});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(y),c=b()(m());c.push([x.id,`.container--WkeRy{
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
}`,""]),c.locals={container:"container--WkeRy",indicator:"indicator--ew8wz"};const u=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/Status/styles.module.css":((x,f,e)=>{"use strict";e.d(f,{A:()=>u});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(y),c=b()(m());c.push([x.id,`.container--Giqgp{
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
}`,""]),c.locals={container:"container--Giqgp",label:"label--vasBc"};const u=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((x,f,e)=>{"use strict";e.d(f,{A:()=>u});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(y),c=b()(m());c.push([x.id,`.container--GmOEt{
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
}`,""]),c.locals={container:"container--GmOEt",indicator:"indicator--usUD9"};const u=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css":((x,f,e)=>{"use strict";e.d(f,{A:()=>u});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(y),c=b()(m());c.push([x.id,`.questionTooltip--DxuzD{
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
}`,""]),c.locals={questionTooltip:"questionTooltip--DxuzD"};const u=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((x,f,e)=>{"use strict";e.d(f,{A:()=>u});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(y),c=b()(m());c.push([x.id,`.tooltipContainer--ZNntQ{
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
}`,""]),c.locals={tooltipContainer:"tooltipContainer--ZNntQ",tooltipArrowContainer:"tooltipArrowContainer--mdVgQ",tooltipArrowElement:"tooltipArrowElement--_W9js"};const u=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((x,f,e)=>{"use strict";e.d(f,{A:()=>u});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(y),c=b()(m());c.push([x.id,`.text1Line--mTWX0{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--I9bny{
  text-overflow:ellipsis;
}

.text2AndMoreLines--NgqBb{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--ZD73L{
  display:grid;
}`,""]),c.locals={text1Line:"text1Line--mTWX0",ellipsis:"ellipsis--I9bny",text2AndMoreLines:"text2AndMoreLines--NgqBb",tooltipTrigger:"tooltipTrigger--ZD73L"};const u=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((x,f,e)=>{"use strict";e.d(f,{A:()=>u});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(y),c=b()(m());c.push([x.id,`.wrapper--O7epi{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--ewHRV{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--o7Tur{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--tTWtT{
  display:inline-flex;
}`,""]),c.locals={wrapper:"wrapper--O7epi",truncatedText:"truncatedText--ewHRV",fullText:"fullText--o7Tur",textContainer:"textContainer--tTWtT"};const u=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((x,f,e)=>{"use strict";e.d(f,{A:()=>u});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(y),c=b()(m());c.push([x.id,`.text1Line--gfCAB{
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
}`,""]),c.locals={text1Line:"text1Line--gfCAB",ellipsis:"ellipsis--KlMgE",text2AndMoreLines:"text2AndMoreLines--RmIUU",tooltipTrigger:"tooltipTrigger--sNo2h"};const u=c}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((x,f,e)=>{"use strict";e.d(f,{A:()=>u});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(y),c=b()(m());c.push([x.id,`.wrapper--I5kFW{
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
}`,""]),c.locals={wrapper:"wrapper--I5kFW",truncatedText:"truncatedText--oUab6",fullText:"fullText--syC3I",textContainer:"textContainer--n9NTy"};const u=c}),"./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js":(x=>{x.exports=function(){var f=document.getSelection();if(!f.rangeCount)return function(){};for(var e=document.activeElement,t=[],m=0;m<f.rangeCount;m++)t.push(f.getRangeAt(m));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return f.removeAllRanges(),function(){f.type==="Caret"&&f.removeAllRanges(),f.rangeCount||t.forEach(function(y){f.addRange(y)}),e&&e.focus()}}})}]);})();
