(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[757],{"./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/components/ModalCustom/ModalCustom.js"(b,n,e){"use strict";e.d(n,{b:()=>y});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(i),p=e("./node_modules/.pnpm/react-modal@3.16.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-modal/lib/index.js"),a=e.n(p),m=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useModalOpenState.js"),_=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),l=e("./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/constants.js"),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(T),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),g=e.n(I),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),k=e.n(f),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),v=e.n(N),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),K=e.n(Y),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(te),H=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/helperComponents/OverlayElement/styles.module.css"),R={};R.styleTagTransform=L(),R.setAttributes=v(),R.insert=k().bind(null,"head"),R.domAPI=g(),R.insertStyleElement=K();var x=h()(H.A,R);const le=H.A&&H.A.locals?H.A.locals:void 0;function ae({onClose:s,content:r,blur:c=!1}){const t=d=>{d.stopPropagation(),s()};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:le.modalOverlay,"data-blur":c||void 0,onClick:t,"data-test-id":l.Y9.overlay}),r]})}var de=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),F=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/helperComponents/ButtonClose/styles.module.css"),S={};S.styleTagTransform=L(),S.setAttributes=v(),S.insert=k().bind(null,"head"),S.domAPI=g(),S.insertStyleElement=K();var pe=h()(F.A,S);const ee=F.A&&F.A.locals?F.A.locals:void 0;function Q({onClick:s}){return(0,o.jsx)("button",{type:"button",className:ee.buttonClose,onClick:s,"aria-label":"close modal","data-test-id":l.Y9.closeButton,children:(0,o.jsx)(de.A,{})})}var w=e("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.11_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),be=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js"),se=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),X=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),ve=e("./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/utils.js"),G=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/helperComponents/Header/styles.module.css"),M={};M.styleTagTransform=L(),M.setAttributes=v(),M.insert=k().bind(null,"head"),M.domAPI=g(),M.insertStyleElement=K();var Z=h()(G.A,M);const j=G.A&&G.A.locals?G.A.locals:void 0;var E=function(s,r){var c={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&r.indexOf(t)<0&&(c[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,t=Object.getOwnPropertySymbols(s);d<t.length;d++)r.indexOf(t[d])<0&&Object.prototype.propertyIsEnumerable.call(s,t[d])&&(c[t[d]]=s[t[d]]);return c};function P(s){var{title:r,titleTooltip:c,subtitle:t,align:d=l.is.Default,picture:C,className:ue}=s,me=E(s,["title","titleTooltip","subtitle","align","picture","className"]);return(0,o.jsxs)("div",Object.assign({className:u()(j.header,ue)},(0,X.z7)(me),{"data-test-id":l.Y9.header,children:[C&&((0,ve.GF)(C)?(0,o.jsx)("img",{src:C.src,alt:C.alt,className:j.image,"data-test-id":l.Y9.image}):(0,o.jsx)("div",{className:j.icon,"data-test-id":l.Y9.icon,children:(0,o.jsx)(w.I,{icon:C,size:"l"})})),(0,o.jsxs)("div",{className:j.headlineLayout,"data-align":d,children:[(0,o.jsxs)("div",{className:j.headline,children:[(0,o.jsx)(se.o.SansHeadlineS,{className:j.title,"data-test-id":l.Y9.title,children:r}),c&&(0,o.jsx)(be.o,{tip:c,size:"s","data-test-id":l.Y9.tooltip})]}),t&&(0,o.jsx)(se.o.SansBodyM,{className:j.subtitle,"data-test-id":l.Y9.subtitle,children:t})]})]}))}var J=e("./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),O=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/helperComponents/Body/styles.module.css"),B={};B.styleTagTransform=L(),B.setAttributes=v(),B.insert=k().bind(null,"head"),B.domAPI=g(),B.insertStyleElement=K();var ye=h()(O.A,B);const re=O.A&&O.A.locals?O.A.locals:void 0;var ne=function(s,r){var c={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&r.indexOf(t)<0&&(c[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,t=Object.getOwnPropertySymbols(s);d<t.length;d++)r.indexOf(t[d])<0&&Object.prototype.propertyIsEnumerable.call(s,t[d])&&(c[t[d]]=s[t[d]]);return c};function A(s){var{content:r,align:c=l.is.Default,className:t}=s,d=ne(s,["content","align","className"]);return(0,o.jsx)(J.O,Object.assign({size:"m",barHideStrategy:"never",className:u()(re.modalBody,t)},(0,X.z7)(d),{"data-align":c,"data-test-id":l.Y9.content,children:r}))}var V=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/helperComponents/Footer/styles.module.css"),U={};U.styleTagTransform=L(),U.setAttributes=v(),U.insert=k().bind(null,"head"),U.domAPI=g(),U.insertStyleElement=K();var fe=h()(V.A,U);const W=V.A&&V.A.locals?V.A.locals:void 0;var $=function(s,r){var c={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&r.indexOf(t)<0&&(c[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,t=Object.getOwnPropertySymbols(s);d<t.length;d++)r.indexOf(t[d])<0&&Object.prototype.propertyIsEnumerable.call(s,t[d])&&(c[t[d]]=s[t[d]]);return c};function _e(s){var{actions:r,disclaimer:c,align:t=l.Ec.Default,className:d}=s,C=$(s,["actions","disclaimer","align","className"]);return(0,o.jsxs)("div",Object.assign({"data-align":t,className:u()(W.footer,d)},(0,X.z7)(C),{"data-test-id":l.Y9.footer,children:[(0,o.jsx)("div",{className:W.footerActions,children:r}),c&&(0,o.jsx)("div",{className:W.footerDisclaimer,"data-test-id":l.Y9.disclaimer,children:c})]}))}var D=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/components/ModalCustom/styles.module.css"),z={};z.styleTagTransform=L(),z.setAttributes=v(),z.insert=k().bind(null,"head"),z.domAPI=g(),z.insertStyleElement=K();var q=h()(D.A,z);const oe=D.A&&D.A.locals?D.A.locals:void 0,ce=s=>{const r=(0,X.gn)(s);return Object.keys(r).reduce((c,t)=>{const d=t.replace("data-","");return c[d]=r[t],c},{})};var ie=function(s,r){var c={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&r.indexOf(t)<0&&(c[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,t=Object.getOwnPropertySymbols(s);d<t.length;d++)r.indexOf(t[d])<0&&Object.prototype.propertyIsEnumerable.call(s,t[d])&&(c[t[d]]=s[t[d]]);return c};function y(s){var{open:r,onClose:c,size:t=l.SK.S,mode:d=l.g.Regular,children:C,className:ue,closeOnPopstate:me}=s,Me=ie(s,["open","onClose","size","mode","children","className","closeOnPopstate"]);const Ee=()=>{c()},he=()=>{d===l.g.Regular&&c()},ge=d!==l.g.Forced;return(0,m.G)(r,()=>ge&&c(),{closeOnPopstate:me}),r?(0,o.jsxs)(a(),{data:Object.assign(Object.assign({},ce(Me)),{size:t}),isOpen:!0,onRequestClose:he,appElement:(0,_.B)()?document.body:void 0,overlayElement:(je,ke)=>(0,o.jsx)(ae,{blur:[l.g.Forced,l.g.Aggressive].includes(d),content:ke,onClose:he}),className:u()(oe.modal,ue),children:[ge&&(0,o.jsx)("div",{className:oe.headerElements,children:(0,o.jsx)(Q,{onClick:Ee})}),C]}):null}(function(s){s.Header=P,s.Body=A,s.Footer=_e})(y||(y={}))},"./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/constants.js"(b,n,e){"use strict";e.d(n,{Ec:()=>u,SK:()=>o,Y9:()=>a,g:()=>i,is:()=>p});const o={S:"s",M:"m",L:"l"},i={Regular:"regular",Aggressive:"aggressive",Forced:"forced"},u={Default:"default",Center:"center",Vertical:"vertical"},p={Default:"default",Center:"center"},a={overlay:"modal__overlay",closeButton:"modal__close-button",header:"modal__header",title:"modal__title",subtitle:"modal__subtitle",tooltip:"modal__title-tooltip",icon:"modal__icon",image:"modal__image",content:"modal__body",footer:"modal__footer",approveButton:"modal__approve-button",cancelButton:"modal__cancel-button",additionalButton:"modal__additional-button",disclaimer:"modal__disclaimer",disclaimerText:"modal__disclaimer-text",disclaimerLink:"modal__disclaimer-link",loadingSpinner:"modal__loading-spinner"}},"./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/utils.js"(b,n,e){"use strict";e.d(n,{GF:()=>a,Um:()=>u,he:()=>p,jg:()=>m});var o=e("./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/constants.js");const i={[o.Ec.Default]:{header:o.is.Default,body:o.is.Default,footer:o.Ec.Default},[o.Ec.Center]:{header:o.is.Center,body:o.is.Center,footer:o.Ec.Center},[o.Ec.Vertical]:{header:o.is.Center,body:o.is.Center,footer:o.Ec.Vertical}};function u({align:_,size:l}){return l===o.SK.L||l===o.SK.M&&_===o.Ec.Vertical?i[o.Ec.Default]:i[_]}function p({align:_,size:l}){switch(!0){case(_===o.Ec.Vertical&&l===o.SK.S):return"l";case[o.Ec.Default,o.Ec.Center].includes(_):default:return"m"}}function a(_){return _?"src"in _:!1}function m({size:_,picture:l}){switch(_){case o.SK.S:return l;case o.SK.M:case o.SK.L:default:return a(l)?l:void 0}}},"./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"(b,n,e){"use strict";e.d(n,{O:()=>G});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(u),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=e.n(a),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),l=e.n(_),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),h=e.n(T),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=e.n(I),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=e.n(f),N=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"),v={};v.styleTagTransform=k(),v.setAttributes=h(),v.insert=l().bind(null,"head"),v.domAPI=m(),v.insertStyleElement=g();var Y=p()(N.A,v);const K=N.A&&N.A.locals?N.A.locals:void 0;var te=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),L=e.n(te),H=e("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/overlayscrollbars.mjs"),R=e("./node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.11.1_react@18.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs"),x=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),le=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");const ae={S:"s",M:"m"},de={Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"},F={None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"},S={Bottom:"bottom",Right:"right"},pe=100,ee=2;var Q=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"),w={};w.styleTagTransform=k(),w.setAttributes=h(),w.insert=l().bind(null,"head"),w.domAPI=m(),w.insertStyleElement=g();var be=p()(Q.A,w);const se=Q.A&&Q.A.locals?Q.A.locals:void 0;var X=function(M,Z){var j={};for(var E in M)Object.prototype.hasOwnProperty.call(M,E)&&Z.indexOf(E)<0&&(j[E]=M[E]);if(M!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,E=Object.getOwnPropertySymbols(M);P<E.length;P++)Z.indexOf(E[P])<0&&Object.prototype.propertyIsEnumerable.call(M,E[P])&&(j[E[P]]=M[E[P]]);return j};const ve=H.ae.nonce,G=(0,x.forwardRef)(function(Z,j){var{children:E,className:P,onScroll:J,onInitialized:O,size:B=ae.M,resize:ye=F.None,clickScrolling:re=!0,barHideStrategy:ne=de.Leave,autoscrollTo:A,paddingAbsolute:V,untouchableScrollbars:U=!1}=Z,fe=X(Z,["children","className","onScroll","onInitialized","size","resize","clickScrolling","barHideStrategy","autoscrollTo","paddingAbsolute","untouchableScrollbars"]);const W=(0,x.useRef)(null),[$,_e]=(0,x.useState)(!1),D=(0,x.useCallback)((y=W.current)=>y==null?void 0:y.osInstance(),[W]);(0,x.useImperativeHandle)(j,()=>{var y,s,r;return(r=(s=(y=W.current)===null||y===void 0?void 0:y.osInstance())===null||s===void 0?void 0:s.elements().viewport)!==null&&r!==void 0?r:null});const z=(0,x.useRef)({scrolledToBottom:!1,scrolledToRight:!1}),q=(0,x.useCallback)(y=>{const s=D(y);if(s){const{viewport:r}=s.elements(),c=r.scrollHeight-(r.offsetHeight+r.scrollTop),t=r.scrollWidth-(r.offsetWidth+r.scrollLeft),d=r.scrollHeight>r.offsetHeight,C=r.scrollWidth>r.offsetWidth;z.current.scrolledToBottom=c<ee||!d,z.current.scrolledToRight=t<ee||!C}},[D]);(0,le.N)(()=>{if(!A){O==null||O();return}const y=D();if(y&&$){q();const{content:s}=y.elements();A===S.Bottom&&s.scroll(0,s.scrollHeight),A===S.Right&&s.scroll(s.scrollWidth,0)}O==null||O()},[D,$,q]);const oe=(0,x.useCallback)(()=>{_e(!0)},[]),ce=(0,x.useCallback)(y=>{J==null||J(y),A&&q()},[J,q]),ie=(0,x.useCallback)(()=>{var y;if(!A)return;const s=(y=D())===null||y===void 0?void 0:y.elements();s!=null&&s.content&&(z.current.scrolledToBottom&&A===S.Bottom&&(s==null||s.content.scroll(0,s==null?void 0:s.content.scrollHeight)),z.current.scrolledToRight&&A===S.Right&&(s==null||s.content.scroll(s==null?void 0:s.content.scrollWidth,0)))},[D,A]);return(0,o.jsx)(R.r,Object.assign({},fe,{ref:W,"data-size":B,"data-untouchable-scrollbars":U||void 0,className:L()(P,se.scroll,"osThemeSnack"),style:{resize:ye},options:{paddingAbsolute:V,scrollbars:{autoHide:ne,autoHideDelay:pe,clickScroll:re}},events:{initialized:oe,scroll:(y,s)=>{ce(s)},updated:ie},children:A?$&&E:E}))})},"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useModalOpenState.js"(b,n,e){"use strict";e.d(n,{G:()=>p});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),u=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/usePopstateSubscription.js");function p(a,m,{closeOnPopstate:_=!1,closeByCloseWatcher:l=!0}){const T=(0,i.A)(m);(0,u.V)(()=>a&&T(),_),(0,o.useEffect)(()=>{if(a&&"CloseWatcher"in window&&l){const h=new CloseWatcher;return h.onclose=()=>T(),()=>h.destroy()}},[a,T,l])}},"./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js"(b,n,e){"use strict";var o=e("./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"),i={"text/plain":"Text","text/html":"Url",default:"Text"},u="Copy to clipboard: #{key}, Enter";function p(m){var _=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return m.replace(/#{\s*key\s*}/g,_)}function a(m,_){var l,T,h,I,g,f,k=!1;_||(_={}),l=_.debug||!1;try{h=o(),I=document.createRange(),g=document.getSelection(),f=document.createElement("span"),f.textContent=m,f.ariaHidden="true",f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(v){if(v.stopPropagation(),_.format)if(v.preventDefault(),typeof v.clipboardData=="undefined"){l&&console.warn("unable to use e.clipboardData"),l&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var Y=i[_.format]||i.default;window.clipboardData.setData(Y,m)}else v.clipboardData.clearData(),v.clipboardData.setData(_.format,m);_.onCopy&&(v.preventDefault(),_.onCopy(v.clipboardData))}),document.body.appendChild(f),I.selectNodeContents(f),g.addRange(I);var N=document.execCommand("copy");if(!N)throw new Error("copy command was unsuccessful");k=!0}catch(v){l&&console.error("unable to copy using execCommand: ",v),l&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(_.format||"text",m),_.onCopy&&_.onCopy(window.clipboardData),k=!0}catch(Y){l&&console.error("unable to copy using clipboardData: ",Y),l&&console.error("falling back to prompt"),T=p("message"in _?_.message:u),window.prompt(T,m)}}finally{g&&(typeof g.removeRange=="function"?g.removeRange(I):g.removeAllRanges()),f&&document.body.removeChild(f),h()}return k}b.exports=a},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/components/ModalCustom/styles.module.css"(b,n,e){"use strict";e.d(n,{A:()=>m});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(o),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(u),a=p()(i());a.push([b.id,`.modal--eTH7r{
  position:fixed;
  top:50%;
  right:auto;
  bottom:auto;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  width:100%;
  max-width:calc(100% - var(--space-modal-outside-gap, 24px) * 2);
  max-height:calc(100vh - var(--space-modal-outside-gap, 24px) * 2);
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  outline:none;
}
.modal--eTH7r[data-size=s]{
  border-radius:var(--radius-modal-modal-window, 12px);
  min-width:var(--size-modal-min-width-s, 304px);
  width:var(--size-modal-width-s, 464px);
}
.modal--eTH7r[data-size=m]{
  border-radius:var(--radius-modal-modal-window, 12px);
  min-width:var(--size-modal-min-width-m, 304px);
  width:var(--size-modal-width-m, 864px);
}
.modal--eTH7r[data-size=l]{
  border-radius:var(--radius-modal-modal-window, 12px);
  min-width:var(--size-modal-min-width-l, 304px);
  width:var(--size-modal-width-l, 1872px);
}

.headerElements--SNhot{
  padding-top:var(--space-modal-header-elements-top, 16px);
  padding-right:var(--space-modal-header-elements-side, 16px);
  gap:var(--space-modal-headline-layout-badge-elements-layout-gap, 16px);
  position:absolute;
  top:0;
  right:0;
  display:flex;
}`,""]),a.locals={modal:"modal--eTH7r",headerElements:"headerElements--SNhot"};const m=a},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/helperComponents/Body/styles.module.css"(b,n,e){"use strict";e.d(n,{A:()=>m});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(o),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(u),a=p()(i());a.push([b.id,`.modalBody--Kg9G4{
  padding-left:var(--space-modal-body-side, 32px);
  padding-right:var(--space-modal-body-side, 32px);
  padding-top:var(--space-modal-body-top-bottom, 4px);
  padding-bottom:var(--space-modal-body-top-bottom, 4px);
  flex:1 1 auto;
  box-sizing:border-box;
  min-height:var(--dimension-2m, 16px);
  color:var(--sys-neutral-text-main, #41424e);
}
.modalBody--Kg9G4[data-align=center]{
  text-align:center;
}`,""]),a.locals={modalBody:"modalBody--Kg9G4"};const m=a},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/helperComponents/ButtonClose/styles.module.css"(b,n,e){"use strict";e.d(n,{A:()=>m});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(o),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(u),a=p()(i());a.push([b.id,`.buttonClose--DgERJ{
  width:var(--size-modal-button-close, 32px);
  height:var(--size-modal-button-close, 32px);
  border-radius:var(--radius-modal-button-close, 16px);
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-support, #6d707f);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:0 solid transparent;
  outline:0;
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonClose--DgERJ:hover, .buttonClose--DgERJ:focus-visible{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.buttonClose--DgERJ:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.buttonClose--DgERJ:active{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.buttonClose--DgERJ svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}`,""]),a.locals={buttonClose:"buttonClose--DgERJ"};const m=a},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/helperComponents/Footer/styles.module.css"(b,n,e){"use strict";e.d(n,{A:()=>m});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(o),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(u),a=p()(i());a.push([b.id,`.footerActions--lqe5Y{
  gap:var(--space-modal-footer-action-row-gap, 8px);
  display:flex;
  flex-direction:row-reverse;
  flex-wrap:wrap-reverse;
  align-items:center;
}

.footerDisclaimer--vlwSd{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

.footer--MNf4H{
  padding-top:var(--space-modal-footer-top, 24px);
  padding-left:var(--space-modal-footer-side, 32px);
  padding-right:var(--space-modal-footer-side, 32px);
  padding-bottom:var(--space-modal-footer-bottom, 32px);
  gap:var(--space-modal-footer-gap, 16px);
  display:flex;
  flex-direction:column;
}
.footer--MNf4H[data-align=vertical]{
  align-items:center;
}
.footer--MNf4H[data-align=vertical] .footerActions--lqe5Y{
  width:100%;
}
.footer--MNf4H[data-align=vertical] .footerDisclaimer--vlwSd{
  align-items:center;
}
.footer--MNf4H[data-align=center]{
  align-items:center;
}
.footer--MNf4H[data-align=center] .footerDisclaimer--vlwSd{
  align-items:center;
}`,""]),a.locals={footerActions:"footerActions--lqe5Y",footerDisclaimer:"footerDisclaimer--vlwSd",footer:"footer--MNf4H"};const m=a},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/helperComponents/Header/styles.module.css"(b,n,e){"use strict";e.d(n,{A:()=>m});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(o),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(u),a=p()(i());a.push([b.id,`.header--rc1ae{
}

.image--OQp2t{
  border-top-left-radius:var(--radius-modal-modal-window, 12px);
  border-top-right-radius:var(--radius-modal-modal-window, 12px);
  height:var(--size-modal-image, 184px);
  display:block;
  width:100%;
  -o-object-fit:cover;
     object-fit:cover;
}

.icon--T0TPT{
  padding-top:var(--space-modal-icon-decor, 32px);
  display:flex;
  justify-content:center;
}

.headlineLayout--qx7ps[data-align=default]{
  padding-top:var(--space-modal-headline-layout-top, 32px);
  padding-left:var(--space-modal-headline-layout-side-s, 32px);
  padding-right:var(--space-modal-headline-layout-side-m, 32px);
  padding-bottom:var(--space-modal-headline-layout-bottom, 24px);
  gap:var(--space-modal-headline-layout-gap, 8px);
  display:flex;
  flex-direction:column;
}
.headlineLayout--qx7ps[data-align=center]{
  padding-top:var(--space-modal-headline-layout-top, 32px);
  padding-left:var(--space-modal-headline-layout-side-m, 32px);
  padding-right:var(--space-modal-headline-layout-side-m, 32px);
  padding-bottom:var(--space-modal-headline-layout-bottom, 24px);
  gap:var(--space-modal-headline-layout-gap, 8px);
  display:flex;
  flex-direction:column;
  align-items:center;
}
.headlineLayout--qx7ps[data-align=center] .title--nH1IF, .headlineLayout--qx7ps[data-align=center] .subtitle--pydoc{
  text-align:center;
}

.headline--T3IKP{
  gap:var(--space-modal-headline-layout-headline, 4px);
  display:flex;
  align-items:center;
}

.title--nH1IF{
  display:grid;
  color:var(--sys-neutral-text-main, #41424e);
}

.subtitle--pydoc{
  color:var(--sys-neutral-text-support, #6d707f);
}`,""]),a.locals={header:"header--rc1ae",image:"image--OQp2t",icon:"icon--T0TPT",headlineLayout:"headlineLayout--qx7ps",title:"title--nH1IF",subtitle:"subtitle--pydoc",headline:"headline--T3IKP"};const m=a},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+modal@0.19.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/modal/dist/esm/helperComponents/OverlayElement/styles.module.css"(b,n,e){"use strict";e.d(n,{A:()=>m});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(o),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(u),a=p()(i());a.push([b.id,`.modalOverlay--dCQU5{
  position:fixed;
  top:0;
  left:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
  background:var(--sys-blackout, rgba(0, 0, 0, 0.3215686275));
}
.modalOverlay--dCQU5[data-blur]{
  backdrop-filter:blur(var(--background-blur-background-blur, 16px));
}`,""]),a.locals={modalOverlay:"modalOverlay--dCQU5"};const m=a},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"(b,n,e){"use strict";e.d(n,{A:()=>h});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(o),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(u),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/getUrl.js"),m=e.n(a),_=new URL(e("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),e.b),l=p()(i()),T=m()(_);l.push([b.id,`@charset "UTF-8";
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
  --bg-icon-mask:url(${T});
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
}`,""]);const h=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"(b,n,e){"use strict";e.d(n,{A:()=>m});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(o),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(u),a=p()(i());a.push([b.id,`.scroll--F6lqE{
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
}`,""]),a.locals={scroll:"scroll--F6lqE"};const m=a},"./node_modules/.pnpm/toggle-selection@1.0.6/node_modules/toggle-selection/index.js"(b){b.exports=function(){var n=document.getSelection();if(!n.rangeCount)return function(){};for(var e=document.activeElement,o=[],i=0;i<n.rangeCount;i++)o.push(n.getRangeAt(i));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return n.removeAllRanges(),function(){n.type==="Caret"&&n.removeAllRanges(),n.rangeCount||o.forEach(function(u){n.addRange(u)}),e&&e.focus()}}}}]);})();
