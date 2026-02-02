"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5153],{"./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/helpers.js":((b,m,t)=>{t.d(m,{XM:()=>gt});var s=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),v=t("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),d=t("./node_modules/.pnpm/react-toastify@10.0.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-toastify/dist/react-toastify.esm.mjs"),u=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),c=t.n(i),W=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),be=t("./node_modules/.pnpm/@snack-uikit+link@0.17.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/Link.js"),we=t("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js"),fe=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const w="toast-system-event",z={icon:`${w}__icon`,main:w,title:`${w}__title`,description:`${w}__description`,buttonClose:`${w}__button-close`,buttonAction:`${w}__button-action`,link:`${w}__link`,progressbar:`${w}__progressbar`,buttonCloseColumn:`${w}button-close-column`},ee="toast-user-action",ae={main:ee,label:`${ee}__label`,icon:`${ee}__icon`,loader:`${ee}__loader`,link:`${ee}__link`},y="toast-upload",k={main:y,close:`${y}__close`,title:`${y}__title`,description:`${y}__description`,counter:`${y}__counter`,progress:`${y}__progress`,list:`${y}__list`,collapseButton:`${y}__collapseButton`,progressBar:`${y}__progressBar`,uploadItem:`${y}__uploadItem`,uploadItemLink:`${y}__uploadItemLink`,uploadItemCancel:`${y}__uploadItemCancel`};var Re=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=t.n(Re),Ie=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),j=t.n(Ie),De=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),S=t.n(De),Be=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),E=t.n(Be),Le=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),O=t.n(Le),Ue=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),A=t.n(Ue),oe=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUserAction/styles.module.css"),F={};F.styleTagTransform=A(),F.setAttributes=E(),F.insert=S().bind(null,"head"),F.domAPI=j(),F.insertStyleElement=O();var Et=T()(oe.A,F);const te=oe.A&&oe.A.locals?oe.A.locals:void 0;var ge=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),xe=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),ke=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js");const R={Neutral:"neutral",Error:"error",ErrorCritical:"errorCritical",Warning:"warning",Success:"success"},We={[R.Neutral]:"invert-neutral",[R.Error]:"invert-neutral",[R.ErrorCritical]:"red",[R.Warning]:"invert-neutral",[R.Success]:"invert-neutral"};function ze(e){switch(e){case R.Success:return(0,s.jsx)(ge.A,{});case R.Error:return(0,s.jsx)(xe.A,{});case R.Warning:return(0,s.jsx)(ke.A,{});case R.Neutral:default:return null}}var Ne=function(e,a){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&a.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)a.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};function Ke(e){var{appearance:a="neutral",label:r,link:o,className:n,loading:p=!1}=e,_=Ne(e,["appearance","label","link","className","loading"]);const f=(0,W.useMemo)(()=>ze(a),[a]);return(0,s.jsxs)("div",Object.assign({className:c()(te.container,n)},(0,fe.z7)(_),{"data-appearance":a,children:[p?(0,s.jsx)("span",{className:te.loader,"data-test-id":ae.loader,children:(0,s.jsx)(we.b,{size:"s"})}):f&&(0,s.jsx)("span",{className:te.icon,"data-test-id":ae.icon,children:f}),(0,s.jsxs)("div",{className:te.contentLayout,children:[(0,s.jsx)("span",{className:te.label,"data-test-id":ae.label,children:r}),o&&(0,s.jsx)(be.N,{size:"m",text:o.text,href:o.href,onClick:o.onClick,appearance:"invert-neutral","data-test-id":ae.link})]})]}))}var ye=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),se=t("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");const l={SystemEvent:"system-event",UserAction:"user-action",Upload:"upload"},Fe={[l.SystemEvent]:{limit:5,position:"bottom-right",displayCloseAllButton:!0,type:l.SystemEvent},[l.UserAction]:{limit:2,position:"bottom-center",displayCloseAllButton:!1,type:l.UserAction},[l.Upload]:{limit:1,position:"bottom-right",displayCloseAllButton:!1,type:l.Upload}},Te={[l.SystemEvent]:5e3,[l.UserAction]:2e3,[l.Upload]:!1},$e="toaster-root",he="toaster-container__";var ne=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/helperComponents/ButtonAction/styles.module.css"),$={};$.styleTagTransform=A(),$.setAttributes=E(),$.insert=S().bind(null,"head"),$.domAPI=j(),$.insertStyleElement=O();var Ot=T()(ne.A,$);const Xe=ne.A&&ne.A.locals?ne.A.locals:void 0;function Ve({label:e,onClick:a,critical:r}){return(0,s.jsx)("button",{type:"button",className:Xe.buttonAction,onClick:a,"data-test-id":z.buttonAction,"aria-label":"action","data-critical":r||void 0,children:e})}var re=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastSystemEvent/styles.module.css"),X={};X.styleTagTransform=A(),X.setAttributes=E(),X.insert=S().bind(null,"head"),X.domAPI=j(),X.insertStyleElement=O();var At=T()(re.A,X);const I=re.A&&re.A.locals?re.A.locals:void 0;var He=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js");function Qe(e){switch(e){case"success":return(0,s.jsx)(ge.A,{});case"error":case"errorCritical":return(0,s.jsx)(xe.A,{});case"warning":return(0,s.jsx)(ke.A,{});case"neutral":default:return(0,s.jsx)(He.A,{})}}var Ze=function(e,a){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&a.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)a.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};function Ye(e){var{appearance:a="neutral",onCloseClick:r,progressBar:o=!0,closable:n=!0,title:p,description:_,link:f,closeToast:g,className:D,action:M}=e,me=Ze(e,["appearance","onCloseClick","progressBar","closable","title","description","link","closeToast","className","action"]);const K=x=>{x.stopPropagation(),r?r(x,g):g==null||g()},L=(0,W.useMemo)(()=>Qe(a),[a]);return(0,s.jsxs)("div",Object.assign({className:c()(I.container,D)},(0,fe.z7)(me),{"data-appearance":a,children:[(0,s.jsxs)("div",{className:I.body,children:[(0,s.jsx)("div",{className:I.icon,children:L}),(0,s.jsxs)("div",{className:I.contentLayout,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:I.title,children:(0,s.jsx)(se.m,{text:p,maxLines:2,hideTooltip:!0,"data-test-id":z.title})}),_&&(0,s.jsx)("span",{className:I.description,children:(0,s.jsx)(se.m,{maxLines:4,text:_,hideTooltip:!0,"data-test-id":z.description})})]}),f&&(0,s.jsx)(be.N,{text:f.text,href:f.href,size:"m",truncateVariant:"end",onClick:f.onClick,appearance:We[a],"data-test-id":z.link,textMode:a==="errorCritical"?"on-accent":"accent"})]}),n&&(0,s.jsx)("button",{type:"button",className:I.buttonClose,onClick:K,"data-test-id":z.buttonClose,"aria-label":"close notification",children:(0,s.jsx)(ye.A,{})})]}),o&&(0,s.jsx)("div",{role:"progressbar","aria-label":"progressbar","data-test-id":z.progressbar,className:I.progress,style:{animationDuration:`${Te[l.SystemEvent]}ms`}}),Array.isArray(M)&&M.length>0&&(0,s.jsx)("div",{className:I.footer,children:M.map(x=>(0,s.jsx)(Ve,Object.assign({},x,{critical:a==="errorCritical"}),x.label))})]}))}var Je=t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/cjs.js"),Ge=t.n(Je),qe=t("./node_modules/.pnpm/uncontrollable@9.0.0_react@18.2.0/node_modules/uncontrollable/lib/index.js"),et=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),tt=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),st=t("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),je=t("./node_modules/.pnpm/@snack-uikit+progress-bar@0.1.10_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/progress-bar/dist/esm/components/ProgressBar/ProgressBar.js"),at=t("./node_modules/.pnpm/@snack-uikit+scroll@0.10.5_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js");const Ct={Loading:"loading",Pause:"pause",Error:"error",Uploaded:"uploaded",ErrorUploaded:"errorUploaded"},Pt={Loading:"loading",Pause:"pause",Error:"error",Uploaded:"uploaded"},Se={pause:"neutral",loading:"green",uploaded:"green",errorUploaded:"red",error:"red"};var ie=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/ButtonIcon/styles.module.css"),V={};V.styleTagTransform=A(),V.setAttributes=E(),V.insert=S().bind(null,"head"),V.domAPI=j(),V.insertStyleElement=O();var Mt=T()(ie.A,V);const ot=ie.A&&ie.A.locals?ie.A.locals:void 0;var nt=function(e,a){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&a.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)a.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};function H(e){var{className:a}=e,r=nt(e,["className"]);return(0,s.jsx)("button",Object.assign({type:"button",className:c()(ot.buttonIcon,a)},r))}var le=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/ButtonTextNeutral/styles.module.css"),Q={};Q.styleTagTransform=A(),Q.setAttributes=E(),Q.insert=S().bind(null,"head"),Q.domAPI=j(),Q.insertStyleElement=O();var wt=T()(le.A,Q);const rt=le.A&&le.A.locals?le.A.locals:void 0;function it({label:e,onClick:a,critical:r}){return(0,s.jsx)("button",{type:"button",className:rt.buttonTextNeutral,onClick:a,"aria-label":"action","data-critical":r||void 0,children:e})}const Ee=e=>`${e}%`;var lt=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/pause/index.js"),dt=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/play/index.js"),ct=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/update/index.js"),de=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/LoadingStatus/styles.module.css"),Z={};Z.styleTagTransform=A(),Z.setAttributes=E(),Z.insert=S().bind(null,"head"),Z.domAPI=j(),Z.insertStyleElement=O();var Rt=T()(de.A,Z);const _t=de.A&&de.A.locals?de.A.locals:void 0;function Oe({status:e,actions:a,isFileItem:r}){return e==="loading"||e==="error"&&!r?(0,s.jsx)(H,{onClick:a.onPause,children:(0,s.jsx)(lt.A,{})}):e==="pause"?(0,s.jsx)(H,{onClick:a.onContinue,children:(0,s.jsx)(dt.A,{})}):e==="uploaded"?(0,s.jsx)(ge.A,{className:_t.successIcon}):(0,s.jsx)(H,{onClick:a.onRetry,children:(0,s.jsx)(ct.A,{})})}var ce=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/FileItem/styles.module.css"),Y={};Y.styleTagTransform=A(),Y.setAttributes=E(),Y.insert=S().bind(null,"head"),Y.domAPI=j(),Y.insertStyleElement=O();var It=T()(ce.A,Y);const B=ce.A&&ce.A.locals?ce.A.locals:void 0;function ut({item:e}){var a,r,o;const[n,p]=(0,W.useState)(e),_=n.status==="uploaded"&&n.link,f=!_;(0,W.useEffect)(()=>(e.subscribeToState&&e.subscribeToState(D=>p(M=>Object.assign(Object.assign({},M),D))),p(e)),[e]);const g=n.status==="error";return(0,s.jsxs)("div",{className:B.fileLine,"data-test-id":k.uploadItem,children:[(0,s.jsxs)("div",{className:B.fileHeadLine,children:[(0,s.jsx)(se.m,{text:n.title,className:B.fileTitle,maxLines:1}),_&&(0,s.jsx)(be.N,{text:(a=n.link)===null||a===void 0?void 0:a.text,href:(r=n.link)===null||r===void 0?void 0:r.href,size:"s",truncateVariant:"end",onClick:(o=n.link)===null||o===void 0?void 0:o.onClick,appearance:"invert-neutral",textMode:"accent","data-test-id":k.uploadItemLink}),f&&(0,s.jsx)(H,{onClick:n.actions.onCancel,"data-test-id":k.uploadItemCancel,children:(0,s.jsx)(ye.A,{})})]}),(0,s.jsx)(je.z,{progress:g?100:n.progress,size:"xs",appearance:Se[n.status]}),(0,s.jsxs)("div",{className:B.fileStatusLine,children:[(0,s.jsxs)("div",{className:B.fileStatusWrap,children:[(0,s.jsx)(Oe,{status:n.status,actions:n.actions,isFileItem:!0}),(0,s.jsx)(se.m,{className:B.fileStatusDescription,"data-status":n.status,text:n.statusLabel})]}),(0,s.jsx)("span",{className:B.fileSize,"data-status":n.status,children:n.formattedSize}),(0,s.jsx)("span",{className:B.fileStatusPercentage,"data-status":n.status,children:Ee(g?0:n.progress)})]})]})}var _e=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/styles.module.css"),J={};J.styleTagTransform=A(),J.setAttributes=E(),J.insert=S().bind(null,"head"),J.domAPI=j(),J.insertStyleElement=O();var Dt=T()(_e.A,J);const h=_e.A&&_e.A.locals?_e.A.locals:void 0;var pt=function(e,a){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&a.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)a.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};function mt(e){var{status:a,title:r,description:o,closeToast:n,onCloseClick:p,closable:_,className:f,files:g,collapsed:D,onCollapsed:M,generalActions:me,cancelButton:K,progress:L,draggable:x=!1,draggableBounds:yt}=e,ht=pt(e,["status","title","description","closeToast","onCloseClick","closable","className","files","collapsed","onCollapsed","generalActions","cancelButton","progress","draggable","draggableBounds"]);const[ve,xt]=(0,qe.iC)(D,!1,M),{t:kt}=(0,st.Ym)("ToastUpload"),Tt=r||kt(`title.${a}`),jt=U=>{U.stopPropagation(),p?p(U,n):n==null||n()},St=U=>{U.stopPropagation(),xt(!ve)},Pe=Math.round(L.current/L.total*100),Me=a==="errorUploaded";return(0,s.jsx)(Ge(),{bounds:yt,disabled:!x,children:(0,s.jsxs)("div",Object.assign({className:c()(h.container,f)},(0,fe.z7)(ht),{"data-collapsed":ve||void 0,"data-draggable":x||void 0,children:[(0,s.jsxs)("div",{className:h.titleLine,children:[(0,s.jsxs)("div",{className:h.titleLineBody,children:[(0,s.jsx)("div",{className:h.title,"data-test-id":k.title,children:Tt}),K&&(0,s.jsx)(it,Object.assign({},K)),(0,s.jsx)(H,{onClick:St,"data-test-id":k.collapseButton,children:ve?(0,s.jsx)(tt.A,{}):(0,s.jsx)(et.A,{})}),_&&(0,s.jsx)(H,{className:h.buttonAction,onClick:jt,"data-test-id":k.close,children:(0,s.jsx)(ye.A,{})})]}),(0,s.jsxs)("div",{className:h.generalProgress,children:[(0,s.jsxs)("div",{className:h.statusLine,children:[(0,s.jsxs)("div",{className:h.statusWrap,children:[(0,s.jsx)(Oe,{status:a,actions:me}),(0,s.jsx)(se.m,{className:h.description,"data-status":a,text:o,"data-test-id":k.description})]}),(0,s.jsx)("span",{className:h.totalCounter,"data-test-id":k.counter,children:`${L.current}/${L.total}`}),(0,s.jsx)("span",{className:h.totalPercentage,"data-test-id":k.progress,children:Ee(Me?0:Pe)})]}),ve&&(0,s.jsx)(je.z,{progress:Me?100:Pe,size:"xs",appearance:Se[a],"data-test-id":k.progressBar})]})]}),(0,s.jsx)(at.O,{className:h.list,size:"s","data-test-id":k.list,barHideStrategy:"never",children:g.map(U=>(0,s.jsx)(ut,{item:U},U.id||U.title))})]}))})}var ue=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/style.css"),G={};G.styleTagTransform=A(),G.setAttributes=E(),G.insert=S().bind(null,"head"),G.domAPI=j(),G.insertStyleElement=O();var Bt=T()(ue.A,G);const Lt=ue.A&&ue.A.locals?ue.A.locals:void 0;var pe=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/styles.module.css"),q={};q.styleTagTransform=A(),q.setAttributes=E(),q.insert=S().bind(null,"head"),q.domAPI=j(),q.insertStyleElement=O();var Ut=T()(pe.A,q);const N=pe.A&&pe.A.locals?pe.A.locals:void 0;function vt({position:e="bottom-right",limit:a=5,containerId:r,displayCloseAllButton:o,type:n=l.SystemEvent}){const[p,_]=(0,W.useState)(0),[f,g]=(0,W.useState)(!1),D=()=>{d.oR.dismiss(),g(!0)};(0,W.useEffect)(()=>d.oR.onChange(({status:K,containerId:L})=>{L===`${he}${l.SystemEvent}`&&(K==="added"&&(g(!1),_(x=>x+1)),K==="removed"&&_(x=>x-1))}),[]);const M=o&&p>2&&!f;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.N9,{hideProgressBar:!0,closeOnClick:!1,autoClose:!1,closeButton:!1,draggable:!1,className:c()("osThemeSnack",N[e],{[N.containerWithCloseAllButton]:M,"osThemeSnack__toast-container__system-event":n===l.SystemEvent,"osThemeSnack__toast-container__user-action":n===l.UserAction,"osThemeSnack__toast-container__upload":n===l.Upload}),toastClassName:N.toaster,bodyClassName:N.toaster,position:e,limit:a,containerId:r}),M&&(0,s.jsx)("div",{className:c()(N.buttonCloseColumnWrapper,N[e]),children:(0,s.jsx)("button",{type:"button",className:N.buttonCloseColumn,onClick:D,"data-test-id":z.buttonCloseColumn,children:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435"})})]})}var bt=function(e,a){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&a.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)a.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};function ft({type:e,toasterParent:a,containerProps:r}){const o=(r==null?void 0:r.containerId)||`${he}${e}`,n=Object.assign(Object.assign(Object.assign({},Fe[e]),r||{}),{containerId:o}),p=`${$e}__${e}`;let _=a?a.querySelector(`#${p}`):null;return!_&&a&&(0,u.B)()&&(_=document.createElement("div"),_.id=p,a.appendChild(_)),{toasterContainer:_,toasterContainerProps:n}}function Ae({type:e,toastOptions:a,containerId:r,toasterProps:o}){return{toastId:a==null?void 0:a.id,onClose:(n=>{var p;(p=a==null?void 0:a.onClose)===null||p===void 0||p.call(a,n==null?void 0:n.id)}),autoClose:o!=null&&o.loading?!1:Te[e],containerId:r||`${he}${e}`}}function Ce({type:e,toasterProps:a}){switch(e){case l.UserAction:return(0,s.jsx)(Ke,Object.assign({},a));case l.SystemEvent:return(0,s.jsx)(Ye,Object.assign({},a));case l.Upload:return(0,s.jsx)(mt,Object.assign({draggable:!0,draggableBounds:".Toastify__toast-container"},a));default:return}}const C=({type:e,toasterProps:a,containerProps:r,toastOptions:o,toasterParent:n=(0,u.B)()?document.body:void 0})=>{const{toasterContainer:p,toasterContainerProps:_}=ft({type:e,toasterParent:n,containerProps:r}),f=Ae({type:e,toasterProps:a,toastOptions:o,containerId:_.containerId}),g=Ce({type:e,toasterProps:a});return new Promise(D=>{(0,v.render)((0,s.jsx)(vt,Object.assign({},_)),p,()=>{setTimeout(()=>{D((0,d.oR)(g,f))},0)})})},P=(e,{type:a,toasterProps:r,toastOptions:o,containerId:n})=>{const p=Ae({type:a,toasterProps:r,toastOptions:o,containerId:n}),_=Ce({type:a,toasterProps:r});return d.oR.update(e,Object.assign(Object.assign({},p),{render:_}))},Wt=e=>toast.dismiss(e),zt=d.oR.isActive,gt={userAction:{success(e){return C({type:l.UserAction,toasterProps:Object.assign(Object.assign({},e),{appearance:"success"}),toastOptions:{id:e.id,onClose:e.onClose}})},neutral(e){return C({type:l.UserAction,toasterProps:Object.assign(Object.assign({},e),{appearance:"neutral"}),toastOptions:{id:e.id,onClose:e.onClose}})},error(e){return C({type:l.UserAction,toasterProps:Object.assign(Object.assign({},e),{appearance:"error"}),toastOptions:{id:e.id,onClose:e.onClose}})},warning(e){return C({type:l.UserAction,toasterProps:Object.assign(Object.assign({},e),{appearance:"warning"}),toastOptions:{id:e.id,onClose:e.onClose}})},update:{success(e,a){P(e,{type:l.UserAction,toasterProps:Object.assign(Object.assign({},a),{appearance:"success"})})},neutral(e,a){P(e,{type:l.UserAction,toasterProps:Object.assign(Object.assign({},a),{appearance:"neutral"})})},warning(e,a){P(e,{type:l.UserAction,toasterProps:Object.assign(Object.assign({},a),{appearance:"warning"})})},error(e,a){P(e,{type:l.UserAction,toasterProps:Object.assign(Object.assign({},a),{appearance:"error"})})}},dismiss(e){return d.oR.dismiss(e)}},systemEvent:{success(e){return C({type:l.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"success"}),toastOptions:{id:e.id,onClose:e.onClose}})},neutral(e){return C({type:l.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"neutral"}),toastOptions:{id:e.id,onClose:e.onClose}})},warning(e){return C({type:l.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"warning"}),toastOptions:{id:e.id,onClose:e.onClose}})},error(e){return C({type:l.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"error"}),toastOptions:{id:e.id,onClose:e.onClose}})},errorCritical(e){return C({type:l.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"errorCritical"}),toastOptions:{id:e.id,onClose:e.onClose}})},update:{success(e,a){return P(e,{type:l.SystemEvent,toasterProps:Object.assign(Object.assign({},a),{appearance:"success"})})},neutral(e,a){return P(e,{type:l.SystemEvent,toasterProps:Object.assign(Object.assign({},a),{appearance:"neutral"})})},warning(e,a){return P(e,{type:l.SystemEvent,toasterProps:Object.assign(Object.assign({},a),{appearance:"warning"})})},error(e,a){return P(e,{type:l.SystemEvent,toasterProps:Object.assign(Object.assign({},a),{appearance:"error"})})},errorCritical(e,a){return P(e,{type:l.SystemEvent,toasterProps:Object.assign(Object.assign({},a),{appearance:"errorCritical"})})}},dismiss(e){return d.oR.dismiss(e)}},upload:{startOrUpdate(e){var{id:a}=e,r=bt(e,["id"]);const o=a||l.Upload;return d.oR.isActive(o)?P(o,{type:l.Upload,toasterProps:Object.assign({},r)}):C({type:l.Upload,toasterProps:Object.assign({},r),toastOptions:{id:o,onClose:r.onClose}})},dismiss(e){return d.oR.dismiss(e)}}}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastSystemEvent/styles.module.css":((b,m,t)=>{t.d(m,{A:()=>c});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(s),d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=t.n(d),i=u()(v());i.push([b.id,`.icon--vdvuT svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.buttonClose--ov0gD{
  border-radius:var(--radius-toaster-toast-system-event-button, 8px);
  height:var(--size-toaster-toast-system-event-button-neutral, 24px);
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  margin:0;
  padding:0;
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonClose--ov0gD svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonClose--ov0gD:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.buttonClose--ov0gD:focus, .buttonClose--ov0gD:active{
  color:var(--sys-invert-neutral-accent-pressed, #aaaebd);
}
.buttonClose--ov0gD:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-on-complementary, #ffffff);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}

.contentLayout--hOBb7{
  padding-top:var(--space-toaster-toast-system-event-container-content-layout-padding-top, 2px);
  display:flex;
  flex:1;
  flex-direction:column;
  min-width:0;
  word-break:break-word;
}

.title--gzjbB{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
  display:grid;
}

.description--FO1Hz{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}

@keyframes progressBarAnimation--ZmITj{
  0%{
    width:100%;
  }
  100%{
    width:0;
  }
}
.progress--Qni7J{
  height:var(--size-toaster-toast-system-event-progress-bar, 4px);
  position:absolute;
  bottom:0;
  left:0;
  width:0;
  animation:progressBarAnimation--ZmITj linear 1 forwards;
  animation-play-state:running;
}

.body--Eky2f{
  gap:var(--space-toaster-toast-system-event-container-body-gap, 16px);
  display:flex;
  width:100%;
  overflow-wrap:break-word;
}

.footer--wzjtg{
  gap:var(--space-toaster-toast-system-event-container-footer-gap, 8px);
  position:relative;
  display:flex;
  flex-direction:row-reverse;
  width:100%;
}

.container--WMP5R{
  padding:var(--space-toaster-toast-system-event-container-padding, 12px);
  border-radius:var(--radius-toaster-toast-system-event-container, 8px);
  gap:var(--space-toaster-toast-system-event-container-gap, 12px);
  cursor:default;
  position:relative;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  width:calc(var(--size-toaster-toast-system-event-container, 320px) - 2 * var(--space-toaster-toast-system-event-padding, 8px));
  max-width:100%;
}
.container--WMP5R:hover .progress--Qni7J{
  animation-play-state:paused;
}
.container--WMP5R[data-appearance=neutral]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--WMP5R[data-appearance=neutral] .icon--vdvuT{
  color:var(--sys-invert-neutral-accent-default, #cfd2dc);
}
.container--WMP5R[data-appearance=neutral] .title--gzjbB{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.container--WMP5R[data-appearance=neutral] .description--FO1Hz{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.container--WMP5R[data-appearance=neutral] .progress--Qni7J{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.container--WMP5R[data-appearance=error]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--WMP5R[data-appearance=error] .icon--vdvuT{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.container--WMP5R[data-appearance=error] .title--gzjbB{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.container--WMP5R[data-appearance=error] .description--FO1Hz{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.container--WMP5R[data-appearance=error] .progress--Qni7J{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.container--WMP5R[data-appearance=errorCritical]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.container--WMP5R[data-appearance=errorCritical] .icon--vdvuT{
  color:var(--sys-red-on-accent, #fffbf9);
}
.container--WMP5R[data-appearance=errorCritical] .title--gzjbB{
  color:var(--sys-red-on-accent, #fffbf9);
}
.container--WMP5R[data-appearance=errorCritical] .description--FO1Hz{
  color:var(--sys-red-on-accent, #fffbf9);
}
.container--WMP5R[data-appearance=errorCritical] .progress--Qni7J{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.container--WMP5R[data-appearance=errorCritical] .buttonClose--ov0gD{
  color:var(--sys-red-on-accent, #fffbf9);
  opacity:var(--opacity-a064, 0.64);
}
.container--WMP5R[data-appearance=errorCritical] .buttonClose--ov0gD:hover, .container--WMP5R[data-appearance=errorCritical] .buttonClose--ov0gD:focus-visible{
  opacity:1;
}
.container--WMP5R[data-appearance=errorCritical] .buttonClose--ov0gD:active{
  opacity:var(--opacity-a048, 0.48);
}
.container--WMP5R[data-appearance=warning]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--WMP5R[data-appearance=warning] .icon--vdvuT{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.container--WMP5R[data-appearance=warning] .title--gzjbB{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.container--WMP5R[data-appearance=warning] .description--FO1Hz{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.container--WMP5R[data-appearance=warning] .progress--Qni7J{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.container--WMP5R[data-appearance=success]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--WMP5R[data-appearance=success] .icon--vdvuT{
  color:var(--sys-green-accent-default, #57b762);
}
.container--WMP5R[data-appearance=success] .title--gzjbB{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.container--WMP5R[data-appearance=success] .description--FO1Hz{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.container--WMP5R[data-appearance=success] .progress--Qni7J{
  background-color:var(--sys-green-accent-default, #57b762);
}

.loader--tnco4{
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}`,""]),i.locals={icon:"icon--vdvuT",buttonClose:"buttonClose--ov0gD",contentLayout:"contentLayout--hOBb7",title:"title--gzjbB",description:"description--FO1Hz",progress:"progress--Qni7J",progressBarAnimation:"progressBarAnimation--ZmITj",body:"body--Eky2f",footer:"footer--wzjtg",container:"container--WMP5R",loader:"loader--tnco4"};const c=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/ButtonIcon/styles.module.css":((b,m,t)=>{t.d(m,{A:()=>c});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(s),d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=t.n(d),i=u()(v());i.push([b.id,`.buttonIcon--Mh0W2{
  border-radius:var(--radius-toaster-toast-system-event-button, 8px);
  height:var(--size-toaster-toast-system-event-button-neutral, 24px);
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  margin:0;
  padding:0;
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonIcon--Mh0W2 svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonIcon--Mh0W2:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.buttonIcon--Mh0W2:active{
  color:var(--sys-invert-neutral-accent-pressed, #aaaebd);
}
.buttonIcon--Mh0W2:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-on-complementary, #ffffff);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}`,""]),i.locals={buttonIcon:"buttonIcon--Mh0W2"};const c=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/ButtonTextNeutral/styles.module.css":((b,m,t)=>{t.d(m,{A:()=>c});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(s),d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=t.n(d),i=u()(v());i.push([b.id,`.buttonTextNeutral--Li7Zv{
  border-radius:var(--radius-toaster-toast-system-event-button, 8px);
  height:var(--size-toaster-toast-system-event-button-neutral, 24px);
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  margin:0;
  padding:0;
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonTextNeutral--Li7Zv:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.buttonTextNeutral--Li7Zv:active{
  color:var(--sys-invert-neutral-accent-pressed, #aaaebd);
}
.buttonTextNeutral--Li7Zv:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-on-complementary, #ffffff);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}`,""]),i.locals={buttonTextNeutral:"buttonTextNeutral--Li7Zv"};const c=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/FileItem/styles.module.css":((b,m,t)=>{t.d(m,{A:()=>c});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(s),d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=t.n(d),i=u()(v());i.push([b.id,`.fileLine--GlFCM{
  padding-top:var(--space-toaster-toast-upload-file-line-vertical-padding, 4px);
  padding-bottom:var(--space-toaster-toast-upload-file-line-vertical-padding, 4px);
  display:flex;
  flex-direction:column;
}

.fileHeadLine--zwHpP{
  gap:var(--space-toaster-toast-upload-headline-gap, 16px);
  min-height:var(--size-toaster-toast-upload-file-line-headline-height, 24px);
  display:flex;
  align-items:center;
}

.fileTitle--jGFHK{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  flex-grow:1;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.fileStatusLine--phVTx{
  gap:var(--space-toaster-toast-upload-status-line-gap, 8px);
  display:flex;
  align-items:center;
}

.fileStatusWrap--XQaAB{
  gap:var(--space-toaster-toast-upload-status-wrap-gap, 4px);
  overflow:hidden;
  display:flex;
  flex-grow:1;
  align-items:center;
}

.fileStatusDescription--R56Fc{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.fileStatusDescription--R56Fc[data-status=loading]{
  color:var(--sys-invert-neutral-text-disabled, #656774);
}
.fileStatusDescription--R56Fc[data-status=uploaded]{
  color:var(--sys-invert-neutral-text-disabled, #656774);
}

.fileSize--bv6Cj{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  color:var(--sys-invert-neutral-text-disabled, #656774);
  text-wrap:nowrap;
}
.fileSize--bv6Cj[data-status=loading]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.fileSize--bv6Cj[data-status=uploaded]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.fileStatusPercentage--QZbwy{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  color:var(--sys-invert-neutral-text-disabled, #656774);
}
.fileStatusPercentage--QZbwy[data-status=loading]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.fileStatusPercentage--QZbwy[data-status=uploaded]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}`,""]),i.locals={fileLine:"fileLine--GlFCM",fileHeadLine:"fileHeadLine--zwHpP",fileTitle:"fileTitle--jGFHK",fileStatusLine:"fileStatusLine--phVTx",fileStatusWrap:"fileStatusWrap--XQaAB",fileStatusDescription:"fileStatusDescription--R56Fc",fileSize:"fileSize--bv6Cj",fileStatusPercentage:"fileStatusPercentage--QZbwy"};const c=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/LoadingStatus/styles.module.css":((b,m,t)=>{t.d(m,{A:()=>c});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(s),d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=t.n(d),i=u()(v());i.push([b.id,`.successIcon--zt9EJ{
  color:var(--sys-green-accent-default, #57b762);
}`,""]),i.locals={successIcon:"successIcon--zt9EJ"};const c=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/styles.module.css":((b,m,t)=>{t.d(m,{A:()=>c});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(s),d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=t.n(d),i=u()(v());i.push([b.id,`.container--PDoe5{
  pointer-events:all;
  cursor:default;
  position:relative;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  width:calc(var(--size-toaster-toast-system-event-container, 320px) - var(--space-toaster-toast-system-event-container-padding, 12px));
  max-width:100%;
  max-height:386px;
  background-color:var(--sys-invert-neutral-background, #30303c);
  padding:var(--space-toaster-toast-system-event-container-padding, 12px);
  border-radius:var(--radius-toaster-toast-system-event-container, 8px);
  gap:var(--space-toaster-toast-system-event-container-gap, 12px);
}
.container--PDoe5[data-collapsed]{
  gap:0;
}
.container--PDoe5[data-draggable]{
  cursor:grab;
}
.container--PDoe5[data-draggable]:active{
  cursor:grabbing;
}

.titleLine--kBjbW{
  display:flex;
  flex-direction:column;
}

.titleLineBody--IGpOk{
  gap:var(--space-toaster-toast-upload-body-gap, 16px);
  display:flex;
  align-items:center;
}

.title--ZeQE0{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
  flex-grow:1;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.generalProgress--mCxmR{
  gap:var(--space-toaster-toast-upload-general-progress-gap, 4px);
  display:flex;
  flex-direction:column;
  align-self:stretch;
}

.statusLine--MnQHU{
  gap:var(--space-toaster-toast-upload-status-line-gap, 8px);
  display:flex;
  align-items:center;
}

.statusWrap--py7WU{
  gap:var(--space-toaster-toast-upload-status-wrap-gap, 4px);
  overflow:hidden;
  display:flex;
  flex-grow:1;
  align-items:center;
}

.description--tvSkV{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.description--tvSkV[data-status=loading]{
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
}
.description--tvSkV[data-status=uploaded]{
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
}

.totalCounter--PKsLv{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}

.totalPercentage--SSpA1{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}

.list--Y__0O{
  overflow-x:hidden;
  display:flex;
  flex-direction:column;
  box-sizing:content-box;
  max-height:288px;
  margin-top:0;
  padding-right:calc(var(--space-toaster-toast-system-event-container-padding, 12px) - var(--dimension-050m, 4px));
  transition:all 0.1s;
}
[data-collapsed] .list--Y__0O{
  max-height:0;
}`,""]),i.locals={container:"container--PDoe5",titleLine:"titleLine--kBjbW",titleLineBody:"titleLineBody--IGpOk",title:"title--ZeQE0",generalProgress:"generalProgress--mCxmR",statusLine:"statusLine--MnQHU",statusWrap:"statusWrap--py7WU",description:"description--tvSkV",totalCounter:"totalCounter--PKsLv",totalPercentage:"totalPercentage--SSpA1",list:"list--Y__0O"};const c=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUserAction/styles.module.css":((b,m,t)=>{t.d(m,{A:()=>c});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(s),d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=t.n(d),i=u()(v());i.push([b.id,`.icon--ihIFV{
  display:flex;
  align-items:center;
  justify-content:center;
}
.icon--ihIFV svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.label--wE3T3{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.container--bwfiY{
  height:var(--size-toaster-toast-user-action-container, 40px);
  padding-left:var(--space-toaster-toast-user-action-horizont-padding, 8px);
  padding-right:var(--space-toaster-toast-user-action-horizont-padding, 8px);
  border-radius:var(--radius-toaster-toast-user-action-container, 8px);
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--bwfiY[data-appearance=error] .icon--ihIFV{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.container--bwfiY[data-appearance=warning] .icon--ihIFV{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.container--bwfiY[data-appearance=success] .icon--ihIFV{
  color:var(--sys-green-accent-default, #57b762);
}

.loader--CTw2F{
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.contentLayout--d4amE{
  gap:var(--space-toaster-toast-user-action-content-layout-gap, 8px);
  padding-left:var(--space-toaster-toast-user-action-content-layout-horizont-padding, 8px);
  padding-right:var(--space-toaster-toast-user-action-content-layout-horizont-padding, 8px);
  display:flex;
  align-items:center;
}`,""]),i.locals={icon:"icon--ihIFV",label:"label--wE3T3",container:"container--bwfiY",loader:"loader--CTw2F",contentLayout:"contentLayout--d4amE"};const c=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/style.css":((b,m,t)=>{t.d(m,{A:()=>c});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(s),d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=t.n(d),i=u()(v());i.push([b.id,`@keyframes osSnackTheme__toast__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

@keyframes osSnackTheme__toast__bounceInRight {
  from {
    transform: translate3d(3000px, 0, 0);
    opacity: 0;
  }
  60% {
    transform: translate3d(-25px, 0, 0);
    opacity: 1;
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes osSnackTheme__toast__bounceOutRight {
  20% {
    transform: translate3d(-20px, var(--y, 0), 0);
    opacity: 1;
  }
  to {
    transform: translate3d(2000px, var(--y, 0), 0);
    opacity: 0;
  }
}

@keyframes osSnackTheme__toast__bounceInUp {
  from {
    transform: translate3d(0, 3000px, 0);
    opacity: 0;
  }
  60% {
    transform: translate3d(0, -20px, 0);
    opacity: 1;
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes osSnackTheme__toast__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y, 0) - 10px), 0);
  }
  40%,
  45% {
    transform: translate3d(0, calc(var(--y, 0) + 20px), 0);
    opacity: 1;
  }
  to {
    transform: translate3d(0, 2000px, 0);
    opacity: 0;
  }
}
`,""]);const c=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/styles.module.css":((b,m,t)=>{t.d(m,{A:()=>c});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(s),d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=t.n(d),i=u()(v());i.push([b.id,`.buttonCloseColumnWrapper--tlavw{
  gap:var(--space-toaster-toast-system-event-gap, 8px);
  padding:var(--space-toaster-toast-system-event-padding, 8px);
  width:var(--size-toaster-toast-system-event-container, 320px);
  position:fixed;
  box-sizing:border-box;
}

.buttonCloseColumn--TvV6D{
  height:var(--size-toaster-button-close-column, 40px);
  border-radius:var(--radius-toaster-system-event-button-close-column, 8px);
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  cursor:pointer;
  box-sizing:border-box;
  width:100%;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  background-color:var(--sys-invert-neutral-background, #30303c);
  border:none;
  outline:none;
}
.buttonCloseColumn--TvV6D:hover{
  background-color:var(--sys-invert-neutral-decor-hovered, #656774);
}
.buttonCloseColumn--TvV6D:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  background-color:var(--sys-invert-neutral-decor-hovered, #656774);
  outline-color:var(--sys-available-complementary, #1c1c24);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonCloseColumn--TvV6D:active{
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
}

.bottom-right--dkN3W{
  right:0;
  bottom:0;
}

.bottom-center--MRKXS{
  bottom:0;
}

.toaster--_2_Za{
  min-height:0;
  margin:0;
  padding:0;
  background-color:transparent;
  box-shadow:none;
}

.containerWithCloseAllButton--FXu8w{
  margin-bottom:calc(var(--size-toaster-button-close-column, 40px) + var(--space-toaster-toast-system-event-gap, 8px));
}

@media only screen and (max-width: 480px){
  .buttonCloseColumnWrapper--tlavw{
    max-width:calc(100vw - 2 * var(--space-toaster-toast-system-event-container-padding, 12px));
  }
}
.osThemeSnack.Toastify__toast-container{
  position:fixed;
  box-sizing:border-box;
  padding:0;
}
.osThemeSnack.Toastify__toast-container .Toastify__toast{
  --y:0;
  touch-action:none;
  cursor:default;
  position:relative;
  z-index:0;
  overflow:hidden;
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
  min-height:unset;
  margin:0;
  padding:0;
  background-color:transparent;
  border-radius:unset;
  box-shadow:none;
}
.osThemeSnack.Toastify__toast-container .Toastify__toast-body{
  max-width:100%;
  margin:0;
  padding:0;
}
.osThemeSnack.Toastify__toast-container .Toastify__toast-body > div{
  max-width:100%;
}
.osThemeSnack.Toastify__toast-container .container-user-action{
  padding-bottom:var(--space-toaster-toast-user-action-padding-bottom, 8px);
  gap:var(--space-toaster-toast-user-action-gap, 8px);
  display:flex;
  flex-direction:column;
  align-items:center;
  width:-moz-fit-content;
  width:fit-content;
}
.osThemeSnack.Toastify__toast-container .Toastify--animate{
  animation-duration:0.5s;
  animation-fill-mode:both;
}
.osThemeSnack.Toastify__toast-container .Toastify__close-button{
  cursor:pointer;
  padding:0;
  border:none;
  outline:none;
}
.osThemeSnack.Toastify__toast-container .Toastify__toast-container{
  margin:0;
  padding:0;
}
.osThemeSnack.Toastify__toast-container .Toastify__progress-bar{
  background:transparent;
}
.osThemeSnack.Toastify__toast-container .Toastify__progress-bar--animated{
  animation:osSnackTheme__toast__trackProgress linear 1 forwards;
}
.osThemeSnack.Toastify__toast-container .Toastify__bounce-enter--bottom-right{
  animation-name:osSnackTheme__toast__bounceInRight;
  animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);
}
.osThemeSnack.Toastify__toast-container .Toastify__bounce-enter--bottom-center{
  animation-name:osSnackTheme__toast__bounceInUp;
  animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);
}
.osThemeSnack.Toastify__toast-container .Toastify__bounce-exit--bottom-right{
  animation-name:osSnackTheme__toast__bounceOutRight;
}
.osThemeSnack.Toastify__toast-container .Toastify__bounce-exit--bottom-center{
  animation-name:osSnackTheme__toast__bounceOutDown;
}
.osThemeSnack.Toastify__toast-container.osThemeSnack__toast-container__system-event{
  gap:var(--space-toaster-toast-system-event-gap, 8px);
  padding:var(--space-toaster-toast-system-event-padding, 8px);
  width:var(--size-toaster-toast-system-event-container, 320px);
  display:flex;
  flex-direction:column;
  max-width:calc(100vw - 2 * var(--space-toaster-toast-system-event-container-padding, 12px));
}
.osThemeSnack.Toastify__toast-container.osThemeSnack__toast-container__user-action{
  padding-bottom:var(--space-toaster-toast-user-action-padding-bottom, 8px);
  gap:var(--space-toaster-toast-user-action-gap, 8px);
  display:flex;
  flex-direction:column;
  align-items:center;
  width:-moz-fit-content;
  width:fit-content;
}
.osThemeSnack.Toastify__toast-container.osThemeSnack__toast-container__upload{
  pointer-events:none;
  z-index:1;
  top:var(--space-toaster-toast-system-event-container-padding, 12px);
  right:var(--space-toaster-toast-system-event-container-padding, 12px);
  bottom:var(--space-toaster-toast-system-event-container-padding, 12px);
  left:var(--space-toaster-toast-system-event-container-padding, 12px);
  display:flex;
  flex-direction:column;
}
.osThemeSnack.Toastify__toast-container.osThemeSnack__toast-container__upload > div{
  display:flex;
  align-items:flex-end;
  justify-content:flex-start;
  width:100%;
  height:100%;
}
.osThemeSnack.Toastify__toast-container--bottom-right{
  right:0;
  bottom:0;
}
.osThemeSnack.Toastify__toast-container--bottom-center{
  bottom:0;
  left:50%;
  transform:translateX(-50%);
}
@media only screen and (max-width: 480px){
  .osThemeSnack.Toastify__toast-container--bottom-right{
    right:0;
    bottom:0;
  }
  .osThemeSnack.Toastify__toast-container--bottom-center{
    bottom:0;
    left:50%;
    transform:translateX(-50%);
  }
}`,""]),i.locals={buttonCloseColumnWrapper:"buttonCloseColumnWrapper--tlavw",buttonCloseColumn:"buttonCloseColumn--TvV6D","bottom-right":"bottom-right--dkN3W","bottom-center":"bottom-center--MRKXS",toaster:"toaster--_2_Za",containerWithCloseAllButton:"containerWithCloseAllButton--FXu8w"};const c=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.18_@snack-uikit+locale@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/helperComponents/ButtonAction/styles.module.css":((b,m,t)=>{t.d(m,{A:()=>c});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),v=t.n(s),d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),u=t.n(d),i=u()(v());i.push([b.id,`.buttonAction--MlmRg{
  border-radius:var(--radius-toaster-toast-system-event-button, 8px);
  height:var(--size-toaster-toast-system-event-button, 32px);
  padding-left:var(--space-toaster-toast-system-event-padding, 8px);
  padding-right:var(--space-toaster-toast-system-event-padding, 8px);
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  margin:0;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  background-color:var(--sys-invert-neutral-decor-default, #51525d);
  border:none;
}
.buttonAction--MlmRg:hover, .buttonAction--MlmRg:focus-visible{
  background-color:var(--sys-invert-neutral-decor-hovered, #656774);
}
.buttonAction--MlmRg:active{
  background-color:var(--sys-invert-neutral-decor-activated, #6d707f);
}
.buttonAction--MlmRg:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-on-complementary, #ffffff);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonAction--MlmRg[data-critical]{
  background-color:var(--sys-opacity-enabled, rgba(255, 255, 255, 0.1607843137));
}
.buttonAction--MlmRg[data-critical]:hover, .buttonAction--MlmRg[data-critical]:focus-visible{
  background-color:var(--sys-opacity-hovered, rgba(255, 255, 255, 0.2392156863));
}
.buttonAction--MlmRg[data-critical]:active{
  background-color:var(--sys-opacity-activated, rgba(255, 255, 255, 0.3215686275));
}`,""]),i.locals={buttonAction:"buttonAction--MlmRg"};const c=i})}]);})();
