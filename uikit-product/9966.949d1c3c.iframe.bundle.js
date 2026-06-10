"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9966],{"./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/ToastUpload.js"(I,_,t){t.d(_,{J:()=>It});var s=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),n=t.n(b),y=t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/cjs.js"),i=t.n(y),m=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function k(S){return"default"+S.charAt(0).toUpperCase()+S.substr(1)}function V(S,N,K){const u=(0,m.useRef)(S!==void 0),[j,ce]=(0,m.useState)(N),me=S!==void 0,be=u.current;return u.current=me,!me&&be&&j!==N&&ce(N),[me?S:j,(0,m.useCallback)((...ve)=>{const[ue,...rt]=ve;let gt=K==null?void 0:K(ue,...rt);return ce(ue),gt},[K])]}function L(S,N){return Object.keys(N).reduce((K,u)=>{const{[k(u)]:j,[u]:ce,...me}=K,be=N[u],[ve,ue]=V(ce,j,S[be]);return{...me,[u]:ve,[be]:ue}},S)}var le=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),$=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),O=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),M=t("./node_modules/.pnpm/@snack-uikit+locale@0.16.0/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),P=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const x={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},Y=null;var C=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=t.n(C),c=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),f=t.n(c),E=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=t.n(E),W=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),a=t.n(W),l=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=t.n(l),Z=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),se=t.n(Z),J=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+progress-bar@0.1.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/progress-bar/dist/esm/components/ProgressBar/styles.module.css"),ae={};ae.styleTagTransform=se(),ae.setAttributes=a(),ae.insert=h().bind(null,"head"),ae.domAPI=f(),ae.insertStyleElement=T();var je=g()(J.A,ae);const w=J.A&&J.A.locals?J.A.locals:void 0;var yt=function(S,N){var K={};for(var u in S)Object.prototype.hasOwnProperty.call(S,u)&&N.indexOf(u)<0&&(K[u]=S[u]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,u=Object.getOwnPropertySymbols(S);j<u.length;j++)N.indexOf(u[j])<0&&Object.prototype.propertyIsEnumerable.call(S,u[j])&&(K[u[j]]=S[u[j]]);return K};function Oe(S){var{progress:N,size:K,className:u,appearance:j=x.Primary}=S,ce=yt(S,["progress","size","className","appearance"]);const me=Math.max(Math.min(N,100),0);return(0,s.jsx)("div",Object.assign({className:n()(w.progressBarContainer,u)},(0,P.z7)(ce),{"data-size":K,children:(0,s.jsx)("div",{className:w.progressBarFiller,"data-test-id":"progress-bar-filler","data-appearance":j,style:{"--progress":`${me}%`}})}))}var Ke=t("./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),Fe=t("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),ie=t("./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/testIds.js");const zt=null,$t=null,Ct={pause:"neutral",loading:"green",uploaded:"green",errorUploaded:"red",error:"red"};var ft=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/ButtonIcon/styles.module.css"),$e={};$e.styleTagTransform=se(),$e.setAttributes=a(),$e.insert=h().bind(null,"head"),$e.domAPI=f(),$e.insertStyleElement=T();var Xt=g()(ft.A,$e);const bt=ft.A&&ft.A.locals?ft.A.locals:void 0;var jt=function(S,N){var K={};for(var u in S)Object.prototype.hasOwnProperty.call(S,u)&&N.indexOf(u)<0&&(K[u]=S[u]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,u=Object.getOwnPropertySymbols(S);j<u.length;j++)N.indexOf(u[j])<0&&Object.prototype.propertyIsEnumerable.call(S,u[j])&&(K[u[j]]=S[u[j]]);return K};function Te(S){var{className:N}=S,K=jt(S,["className"]);return(0,s.jsx)("button",Object.assign({type:"button",className:n()(bt.buttonIcon,N)},K))}var et=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/ButtonTextNeutral/styles.module.css"),Ye={};Ye.styleTagTransform=se(),Ye.setAttributes=a(),Ye.insert=h().bind(null,"head"),Ye.domAPI=f(),Ye.insertStyleElement=T();var Ot=g()(et.A,Ye);const fe=et.A&&et.A.locals?et.A.locals:void 0;function At({label:S,onClick:N,critical:K}){return(0,s.jsx)("button",{type:"button",className:fe.buttonTextNeutral,onClick:N,"aria-label":"action","data-critical":K||void 0,children:S})}var Ve=t("./node_modules/.pnpm/@snack-uikit+link@0.18.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/Link.js");const ht=S=>`${S}%`;var Ze=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/pause/index.js"),Pt=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/play/index.js"),He=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),Dt=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/update/index.js"),xe=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/LoadingStatus/styles.module.css"),Ge={};Ge.styleTagTransform=se(),Ge.setAttributes=a(),Ge.insert=h().bind(null,"head"),Ge.domAPI=f(),Ge.insertStyleElement=T();var tt=g()(xe.A,Ge);const wt=xe.A&&xe.A.locals?xe.A.locals:void 0;function Me({status:S,actions:N,isFileItem:K}){return S==="loading"||S==="error"&&!K?(0,s.jsx)(Te,{onClick:N.onPause,children:(0,s.jsx)(Ze.A,{})}):S==="pause"?(0,s.jsx)(Te,{onClick:N.onContinue,children:(0,s.jsx)(Pt.A,{})}):S==="uploaded"?(0,s.jsx)(He.A,{className:wt.successIcon}):(0,s.jsx)(Te,{onClick:N.onRetry,children:(0,s.jsx)(Dt.A,{})})}var Ie=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/FileItem/styles.module.css"),ge={};ge.styleTagTransform=se(),ge.setAttributes=a(),ge.insert=h().bind(null,"head"),ge.domAPI=f(),ge.insertStyleElement=T();var Yt=g()(Ie.A,ge);const _e=Ie.A&&Ie.A.locals?Ie.A.locals:void 0;function Tt({item:S}){var N,K,u;const[j,ce]=(0,m.useState)(S),me=j.status==="uploaded"&&j.link,be=!me;(0,m.useEffect)(()=>(S.subscribeToState&&S.subscribeToState(ue=>ce(rt=>Object.assign(Object.assign({},rt),ue))),ce(S)),[S]);const ve=j.status==="error";return(0,s.jsxs)("div",{className:_e.fileLine,"data-test-id":ie.AB.uploadItem,children:[(0,s.jsxs)("div",{className:_e.fileHeadLine,children:[(0,s.jsx)(Fe.m,{text:j.title,className:_e.fileTitle,maxLines:1}),me&&(0,s.jsx)(Ve.N,{text:(N=j.link)===null||N===void 0?void 0:N.text,href:(K=j.link)===null||K===void 0?void 0:K.href,size:"s",truncateVariant:"end",onClick:(u=j.link)===null||u===void 0?void 0:u.onClick,appearance:"invert-neutral",textMode:"accent","data-test-id":ie.AB.uploadItemLink}),be&&(0,s.jsx)(Te,{onClick:j.actions.onCancel,"data-test-id":ie.AB.uploadItemCancel,children:(0,s.jsx)(O.A,{})})]}),(0,s.jsx)(Oe,{progress:ve?100:j.progress,size:"xs",appearance:Ct[j.status]}),(0,s.jsxs)("div",{className:_e.fileStatusLine,children:[(0,s.jsxs)("div",{className:_e.fileStatusWrap,children:[(0,s.jsx)(Me,{status:j.status,actions:j.actions,isFileItem:!0}),(0,s.jsx)(Fe.m,{className:_e.fileStatusDescription,"data-status":j.status,text:j.statusLabel})]}),(0,s.jsx)("span",{className:_e.fileSize,"data-status":j.status,children:j.formattedSize}),(0,s.jsx)("span",{className:_e.fileStatusPercentage,"data-status":j.status,children:ht(ve?0:j.progress)})]})]})}var st=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/styles.module.css"),Be={};Be.styleTagTransform=se(),Be.setAttributes=a(),Be.insert=h().bind(null,"head"),Be.domAPI=f(),Be.insertStyleElement=T();var Ae=g()(st.A,Be);const pe=st.A&&st.A.locals?st.A.locals:void 0;var Mt=function(S,N){var K={};for(var u in S)Object.prototype.hasOwnProperty.call(S,u)&&N.indexOf(u)<0&&(K[u]=S[u]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,u=Object.getOwnPropertySymbols(S);j<u.length;j++)N.indexOf(u[j])<0&&Object.prototype.propertyIsEnumerable.call(S,u[j])&&(K[u[j]]=S[u[j]]);return K};function It(S){var{status:N,title:K,description:u,closeToast:j,onCloseClick:ce,closable:me,className:be,files:ve,collapsed:ue,onCollapsed:rt,generalActions:gt,cancelButton:xt,progress:Le,draggable:Ne=!1,draggableBounds:Wt}=S,ke=Mt(S,["status","title","description","closeToast","onCloseClick","closable","className","files","collapsed","onCollapsed","generalActions","cancelButton","progress","draggable","draggableBounds"]);const[it,Bt]=V(ue,!1,rt),{t:Lt}=(0,M.Ym)("ToastUpload"),Nt=K||Lt(`title.${N}`),Ut=Re=>{Re.stopPropagation(),ce?ce(Re,j):j==null||j()},lt=Re=>{Re.stopPropagation(),Bt(!it)},Ue=Math.round(Le.current/Le.total*100),Rt=N==="errorUploaded";return(0,s.jsx)(i(),{bounds:Wt,disabled:!Ne,children:(0,s.jsxs)("div",Object.assign({className:n()(pe.container,be)},(0,P.z7)(ke),{"data-collapsed":it||void 0,"data-draggable":Ne||void 0,children:[(0,s.jsxs)("div",{className:pe.titleLine,children:[(0,s.jsxs)("div",{className:pe.titleLineBody,children:[(0,s.jsx)("div",{className:pe.title,"data-test-id":ie.AB.title,children:Nt}),xt&&(0,s.jsx)(At,Object.assign({},xt)),(0,s.jsx)(Te,{onClick:lt,"data-test-id":ie.AB.collapseButton,children:it?(0,s.jsx)($.A,{}):(0,s.jsx)(le.A,{})}),me&&(0,s.jsx)(Te,{className:pe.buttonAction,onClick:Ut,"data-test-id":ie.AB.close,children:(0,s.jsx)(O.A,{})})]}),(0,s.jsxs)("div",{className:pe.generalProgress,children:[(0,s.jsxs)("div",{className:pe.statusLine,children:[(0,s.jsxs)("div",{className:pe.statusWrap,children:[(0,s.jsx)(Me,{status:N,actions:gt}),(0,s.jsx)(Fe.m,{className:pe.description,"data-status":N,text:u,"data-test-id":ie.AB.description})]}),(0,s.jsx)("span",{className:pe.totalCounter,"data-test-id":ie.AB.counter,children:`${Le.current}/${Le.total}`}),(0,s.jsx)("span",{className:pe.totalPercentage,"data-test-id":ie.AB.progress,children:ht(Rt?0:Ue)})]}),it&&(0,s.jsx)(Oe,{progress:Rt?100:Ue,size:"xs",appearance:Ct[N],"data-test-id":ie.AB.progressBar})]})]}),(0,s.jsx)(Ke.O,{className:pe.list,size:"s","data-test-id":ie.AB.list,barHideStrategy:"never",children:ve.map(Re=>(0,s.jsx)(Tt,{item:Re},Re.id||Re.title))})]}))})}},"./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/helpers.js"(I,_,t){t.d(_,{c3:()=>Ee,XM:()=>Qt,vE:()=>Se});var s=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=t("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function y(e){var o,d,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var p=e.length;for(o=0;o<p;o++)e[o]&&(d=y(e[o]))&&(r&&(r+=" "),r+=d)}else for(d in e)e[d]&&(r&&(r+=" "),r+=d);return r}function i(){for(var e,o,d=0,r="",p=arguments.length;d<p;d++)(e=arguments[d])&&(o=y(e))&&(r&&(r+=" "),r+=o);return r}const m=i,k=e=>typeof e=="number"&&!isNaN(e),V=e=>typeof e=="string",L=e=>typeof e=="function",le=e=>V(e)||L(e)?e:null,$=e=>(0,n.isValidElement)(e)||V(e)||L(e)||k(e);function O(e,o,d){d===void 0&&(d=300);const{scrollHeight:r,style:p}=e;requestAnimationFrame(()=>{p.minHeight="initial",p.height=r+"px",p.transition=`all ${d}ms`,requestAnimationFrame(()=>{p.height="0",p.padding="0",p.margin="0",setTimeout(o,d)})})}function M(e){let{enter:o,exit:d,appendPosition:r=!1,collapse:p=!0,collapseDuration:A=300}=e;return function(v){let{children:X,position:B,preventExitTransition:q,done:U,nodeRef:ne,isIn:ee,playToast:re}=v;const R=r?`${o}--${B}`:o,H=r?`${d}--${B}`:d,oe=(0,n.useRef)(0);return(0,n.useLayoutEffect)(()=>{const G=ne.current,F=R.split(" "),D=Q=>{Q.target===ne.current&&(re(),G.removeEventListener("animationend",D),G.removeEventListener("animationcancel",D),oe.current===0&&Q.type!=="animationcancel"&&G.classList.remove(...F))};G.classList.add(...F),G.addEventListener("animationend",D),G.addEventListener("animationcancel",D)},[]),(0,n.useEffect)(()=>{const G=ne.current,F=()=>{G.removeEventListener("animationend",F),p?O(G,U,A):U()};ee||(q?F():(oe.current=1,G.className+=` ${H}`,G.addEventListener("animationend",F)))},[ee]),n.createElement(n.Fragment,null,X)}}function P(e,o){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:o}:{}}const x=new Map;let Y=[];const C=new Set,g=e=>C.forEach(o=>o(e)),c=()=>x.size>0;function f(e,o){var d;if(o)return!((d=x.get(o))==null||!d.isToastActive(e));let r=!1;return x.forEach(p=>{p.isToastActive(e)&&(r=!0)}),r}function E(e,o){$(e)&&(c()||Y.push({content:e,options:o}),x.forEach(d=>{d.buildToast(e,o)}))}function h(e,o){x.forEach(d=>{o!=null&&o!=null&&o.containerId?(o==null?void 0:o.containerId)===d.id&&d.toggle(e,o==null?void 0:o.id):d.toggle(e,o==null?void 0:o.id)})}function W(e){const{subscribe:o,getSnapshot:d,setProps:r}=(0,n.useRef)((function(A){const v=A.containerId||1;return{subscribe(X){const B=(function(U,ne,ee){let re=1,R=0,H=[],oe=[],G=[],F=ne;const D=new Map,Q=new Set,Pe=()=>{G=Array.from(D.values()),Q.forEach(z=>z())},ze=z=>{oe=z==null?[]:oe.filter(te=>te!==z),Pe()},de=z=>{const{toastId:te,onOpen:ye,updateId:Xe,children:Qe}=z.props,ut=Xe==null;z.staleId&&D.delete(z.staleId),D.set(te,z),oe=[...oe,z.props.toastId].filter(Je=>Je!==z.staleId),Pe(),ee(P(z,ut?"added":"updated")),ut&&L(ye)&&ye((0,n.isValidElement)(Qe)&&Qe.props)};return{id:U,props:F,observe:z=>(Q.add(z),()=>Q.delete(z)),toggle:(z,te)=>{D.forEach(ye=>{te!=null&&te!==ye.props.toastId||L(ye.toggle)&&ye.toggle(z)})},removeToast:ze,toasts:D,clearQueue:()=>{R-=H.length,H=[]},buildToast:(z,te)=>{if((De=>{let{containerId:he,toastId:Ce,updateId:we}=De;const nt=he?he!==U:U!==1,vt=D.has(Ce)&&we==null;return nt||vt})(te))return;const{toastId:ye,updateId:Xe,data:Qe,staleId:ut,delay:Je}=te,_t=()=>{ze(ye)},St=Xe==null;St&&R++;const We={...F,style:F.toastStyle,key:re++,...Object.fromEntries(Object.entries(te).filter(De=>{let[he,Ce]=De;return Ce!=null})),toastId:ye,updateId:Xe,data:Qe,closeToast:_t,isIn:!1,className:le(te.className||F.toastClassName),bodyClassName:le(te.bodyClassName||F.bodyClassName),progressClassName:le(te.progressClassName||F.progressClassName),autoClose:!te.isLoading&&(qe=te.autoClose,pt=F.autoClose,qe===!1||k(qe)&&qe>0?qe:pt),deleteToast(){const De=D.get(ye),{onClose:he,children:Ce}=De.props;L(he)&&he((0,n.isValidElement)(Ce)&&Ce.props),ee(P(De,"removed")),D.delete(ye),R--,R<0&&(R=0),H.length>0?de(H.shift()):Pe()}};var qe,pt;We.closeButton=F.closeButton,te.closeButton===!1||$(te.closeButton)?We.closeButton=te.closeButton:te.closeButton===!0&&(We.closeButton=!$(F.closeButton)||F.closeButton);let mt=z;(0,n.isValidElement)(z)&&!V(z.type)?mt=(0,n.cloneElement)(z,{closeToast:_t,toastProps:We,data:Qe}):L(z)&&(mt=z({closeToast:_t,toastProps:We,data:Qe}));const at={content:mt,props:We,staleId:ut};F.limit&&F.limit>0&&R>F.limit&&St?H.push(at):k(Je)?setTimeout(()=>{de(at)},Je):de(at)},setProps(z){F=z},setToggle:(z,te)=>{D.get(z).toggle=te},isToastActive:z=>oe.some(te=>te===z),getSnapshot:()=>F.newestOnTop?G.reverse():G}})(v,A,g);x.set(v,B);const q=B.observe(X);return Y.forEach(U=>E(U.content,U.options)),Y=[],()=>{q(),x.delete(v)}},setProps(X){var B;(B=x.get(v))==null||B.setProps(X)},getSnapshot(){var X;return(X=x.get(v))==null?void 0:X.getSnapshot()}}})(e)).current;r(e);const p=(0,n.useSyncExternalStore)(o,d,d);return{getToastToRender:function(A){if(!p)return[];const v=new Map;return p.forEach(X=>{const{position:B}=X.props;v.has(B)||v.set(B,[]),v.get(B).push(X)}),Array.from(v,X=>A(X[0],X[1]))},isToastActive:f,count:p==null?void 0:p.length}}function a(e){const[o,d]=(0,n.useState)(!1),[r,p]=(0,n.useState)(!1),A=(0,n.useRef)(null),v=(0,n.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:X,pauseOnHover:B,closeToast:q,onClick:U,closeOnClick:ne}=e;var ee,re;function R(){d(!0)}function H(){d(!1)}function oe(D){const Q=A.current;v.canDrag&&Q&&(v.didMove=!0,o&&H(),v.delta=e.draggableDirection==="x"?D.clientX-v.start:D.clientY-v.start,v.start!==D.clientX&&(v.canCloseOnClick=!1),Q.style.transform=`translate3d(${e.draggableDirection==="x"?`${v.delta}px, var(--y)`:`0, calc(${v.delta}px + var(--y))`},0)`,Q.style.opacity=""+(1-Math.abs(v.delta/v.removalDistance)))}function G(){document.removeEventListener("pointermove",oe),document.removeEventListener("pointerup",G);const D=A.current;if(v.canDrag&&v.didMove&&D){if(v.canDrag=!1,Math.abs(v.delta)>v.removalDistance)return p(!0),e.closeToast(),void e.collapseAll();D.style.transition="transform 0.2s, opacity 0.2s",D.style.removeProperty("transform"),D.style.removeProperty("opacity")}}(re=x.get((ee={id:e.toastId,containerId:e.containerId,fn:d}).containerId||1))==null||re.setToggle(ee.id,ee.fn),(0,n.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||H(),window.addEventListener("focus",R),window.addEventListener("blur",H),()=>{window.removeEventListener("focus",R),window.removeEventListener("blur",H)}},[e.pauseOnFocusLoss]);const F={onPointerDown:function(D){if(e.draggable===!0||e.draggable===D.pointerType){v.didMove=!1,document.addEventListener("pointermove",oe),document.addEventListener("pointerup",G);const Q=A.current;v.canCloseOnClick=!0,v.canDrag=!0,Q.style.transition="none",e.draggableDirection==="x"?(v.start=D.clientX,v.removalDistance=Q.offsetWidth*(e.draggablePercent/100)):(v.start=D.clientY,v.removalDistance=Q.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(D){const{top:Q,bottom:Pe,left:ze,right:de}=A.current.getBoundingClientRect();D.nativeEvent.type!=="touchend"&&e.pauseOnHover&&D.clientX>=ze&&D.clientX<=de&&D.clientY>=Q&&D.clientY<=Pe?H():R()}};return X&&B&&(F.onMouseEnter=H,e.stacked||(F.onMouseLeave=R)),ne&&(F.onClick=D=>{U&&U(D),v.canCloseOnClick&&q()}),{playToast:R,pauseToast:H,isRunning:o,preventExitTransition:r,toastRef:A,eventHandlers:F}}function l(e){let{delay:o,isRunning:d,closeToast:r,type:p="default",hide:A,className:v,style:X,controlledProgress:B,progress:q,rtl:U,isIn:ne,theme:ee}=e;const re=A||B&&q===0,R={...X,animationDuration:`${o}ms`,animationPlayState:d?"running":"paused"};B&&(R.transform=`scaleX(${q})`);const H=m("Toastify__progress-bar",B?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${ee}`,`Toastify__progress-bar--${p}`,{"Toastify__progress-bar--rtl":U}),oe=L(v)?v({rtl:U,type:p,defaultClassName:H}):m(H,v),G={[B&&q>=1?"onTransitionEnd":"onAnimationEnd"]:B&&q<1?null:()=>{ne&&r()}};return n.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":re},n.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${ee} Toastify__progress-bar--${p}`}),n.createElement("div",{role:"progressbar","aria-hidden":re?"true":"false","aria-label":"notification timer",className:oe,style:R,...G}))}let T=1;const Z=()=>""+T++;function se(e){return e&&(V(e.toastId)||k(e.toastId))?e.toastId:Z()}function J(e,o){return E(e,o),o.toastId}function ae(e,o){return{...o,type:o&&o.type||e,toastId:se(o)}}function je(e){return(o,d)=>J(o,ae(e,d))}function w(e,o){return J(e,ae("default",o))}w.loading=(e,o)=>J(e,ae("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...o})),w.promise=function(e,o,d){let r,{pending:p,error:A,success:v}=o;p&&(r=V(p)?w.loading(p,d):w.loading(p.render,{...d,...p}));const X={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},B=(U,ne,ee)=>{if(ne==null)return void w.dismiss(r);const re={type:U,...X,...d,data:ee},R=V(ne)?{render:ne}:ne;return r?w.update(r,{...re,...R}):w(R.render,{...re,...R}),ee},q=L(e)?e():e;return q.then(U=>B("success",v,U)).catch(U=>B("error",A,U)),q},w.success=je("success"),w.info=je("info"),w.error=je("error"),w.warning=je("warning"),w.warn=w.warning,w.dark=(e,o)=>J(e,ae("default",{theme:"dark",...o})),w.dismiss=function(e){(function(o){var d;if(c()){if(o==null||V(d=o)||k(d))x.forEach(r=>{r.removeToast(o)});else if(o&&("containerId"in o||"id"in o)){const r=x.get(o.containerId);r?r.removeToast(o.id):x.forEach(p=>{p.removeToast(o.id)})}}else Y=Y.filter(r=>o!=null&&r.options.toastId!==o)})(e)},w.clearWaitingQueue=function(e){e===void 0&&(e={}),x.forEach(o=>{!o.props.limit||e.containerId&&o.id!==e.containerId||o.clearQueue()})},w.isActive=f,w.update=function(e,o){o===void 0&&(o={});const d=((r,p)=>{var A;let{containerId:v}=p;return(A=x.get(v||1))==null?void 0:A.toasts.get(r)})(e,o);if(d){const{props:r,content:p}=d,A={delay:100,...r,...o,toastId:o.toastId||e,updateId:Z()};A.toastId!==e&&(A.staleId=e);const v=A.render||p;delete A.render,J(v,A)}},w.done=e=>{w.update(e,{progress:1})},w.onChange=function(e){return C.add(e),()=>{C.delete(e)}},w.play=e=>h(!0,e),w.pause=e=>h(!1,e);const yt=typeof window!="undefined"?n.useLayoutEffect:n.useEffect,Oe=e=>{let{theme:o,type:d,isLoading:r,...p}=e;return n.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:o==="colored"?"currentColor":`var(--toastify-icon-color-${d})`,...p})},Ke={info:function(e){return n.createElement(Oe,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return n.createElement(Oe,{...e},n.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return n.createElement(Oe,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return n.createElement(Oe,{...e},n.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return n.createElement("div",{className:"Toastify__spinner"})}},Fe=e=>{const{isRunning:o,preventExitTransition:d,toastRef:r,eventHandlers:p,playToast:A}=a(e),{closeButton:v,children:X,autoClose:B,onClick:q,type:U,hideProgressBar:ne,closeToast:ee,transition:re,position:R,className:H,style:oe,bodyClassName:G,bodyStyle:F,progressClassName:D,progressStyle:Q,updateId:Pe,role:ze,progress:de,rtl:z,toastId:te,deleteToast:ye,isIn:Xe,isLoading:Qe,closeOnClick:ut,theme:Je}=e,_t=m("Toastify__toast",`Toastify__toast-theme--${Je}`,`Toastify__toast--${U}`,{"Toastify__toast--rtl":z},{"Toastify__toast--close-on-click":ut}),St=L(H)?H({rtl:z,position:R,type:U,defaultClassName:_t}):m(_t,H),We=(function(at){let{theme:De,type:he,isLoading:Ce,icon:we}=at,nt=null;const vt={theme:De,type:he};return we===!1||(L(we)?nt=we({...vt,isLoading:Ce}):(0,n.isValidElement)(we)?nt=(0,n.cloneElement)(we,vt):Ce?nt=Ke.spinner():(Jt=>Jt in Ke)(he)&&(nt=Ke[he](vt))),nt})(e),qe=!!de||!B,pt={closeToast:ee,type:U,theme:Je};let mt=null;return v===!1||(mt=L(v)?v(pt):(0,n.isValidElement)(v)?(0,n.cloneElement)(v,pt):(function(at){let{closeToast:De,theme:he,ariaLabel:Ce="close"}=at;return n.createElement("button",{className:`Toastify__close-button Toastify__close-button--${he}`,type:"button",onClick:we=>{we.stopPropagation(),De(we)},"aria-label":Ce},n.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))})(pt)),n.createElement(re,{isIn:Xe,done:ye,position:R,preventExitTransition:d,nodeRef:r,playToast:A},n.createElement("div",{id:te,onClick:q,"data-in":Xe,className:St,...p,style:oe,ref:r},n.createElement("div",{...Xe&&{role:ze},className:L(G)?G({type:U}):m("Toastify__toast-body",G),style:F},We!=null&&n.createElement("div",{className:m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Qe})},We),n.createElement("div",null,X)),mt,n.createElement(l,{...Pe&&!qe?{key:`pb-${Pe}`}:{},rtl:z,theme:Je,delay:B,isRunning:o,isIn:Xe,closeToast:ee,hide:ne,type:U,style:Q,className:D,controlledProgress:qe,progress:de||0})))},ie=function(e,o){return o===void 0&&(o=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:o}},zt=M(ie("bounce",!0)),$t=M(ie("slide",!0)),Ct=M(ie("zoom")),ft=M(ie("flip")),$e={position:"top-right",transition:zt,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Xt(e){let o={...$e,...e};const d=e.stacked,[r,p]=(0,n.useState)(!0),A=(0,n.useRef)(null),{getToastToRender:v,isToastActive:X,count:B}=W(o),{className:q,style:U,rtl:ne,containerId:ee}=o;function re(H){const oe=m("Toastify__toast-container",`Toastify__toast-container--${H}`,{"Toastify__toast-container--rtl":ne});return L(q)?q({position:H,rtl:ne,defaultClassName:oe}):m(oe,le(q))}function R(){d&&(p(!0),w.play())}return yt(()=>{if(d){var H;const oe=A.current.querySelectorAll('[data-in="true"]'),G=12,F=(H=o.position)==null?void 0:H.includes("top");let D=0,Q=0;Array.from(oe).reverse().forEach((Pe,ze)=>{const de=Pe;de.classList.add("Toastify__toast--stacked"),ze>0&&(de.dataset.collapsed=`${r}`),de.dataset.pos||(de.dataset.pos=F?"top":"bot");const z=D*(r?.2:1)+(r?0:G*ze);de.style.setProperty("--y",`${F?z:-1*z}px`),de.style.setProperty("--g",`${G}`),de.style.setProperty("--s",""+(1-(r?Q:0))),D+=de.offsetHeight,Q+=.025})}},[r,B,d]),n.createElement("div",{ref:A,className:"Toastify",id:ee,onMouseEnter:()=>{d&&(p(!1),w.pause())},onMouseLeave:R},v((H,oe)=>{const G=oe.length?{...U}:{...U,pointerEvents:"none"};return n.createElement("div",{className:re(H),style:G,key:`container-${H}`},oe.map(F=>{let{content:D,props:Q}=F;return n.createElement(Fe,{...Q,stacked:d,collapseAll:R,isIn:X(Q.toastId,Q.containerId),style:Q.style,key:`toast-${Q.key}`},D)}))}))}var bt=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),jt=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),Te=t.n(jt),et=t("./node_modules/.pnpm/@snack-uikit+link@0.18.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/Link.js"),Ye=t("./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js"),Ot=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),fe=t("./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/testIds.js"),At=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Ve=t.n(At),ht=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Ze=t.n(ht),Pt=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),He=t.n(Pt),Dt=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),xe=t.n(Dt),Ge=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),tt=t.n(Ge),wt=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Me=t.n(wt),Ie=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUserAction/styles.module.css"),ge={};ge.styleTagTransform=Me(),ge.setAttributes=xe(),ge.insert=He().bind(null,"head"),ge.domAPI=Ze(),ge.insertStyleElement=tt();var Yt=Ve()(Ie.A,ge);const _e=Ie.A&&Ie.A.locals?Ie.A.locals:void 0;var Tt=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),st=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),Be=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js");const Ae={Neutral:"neutral",Error:"error",ErrorCritical:"errorCritical",Warning:"warning",Success:"success"},pe={[Ae.Neutral]:"invert-neutral",[Ae.Error]:"invert-neutral",[Ae.ErrorCritical]:"red",[Ae.Warning]:"invert-neutral",[Ae.Success]:"invert-neutral"};function Mt(e){switch(e){case Ae.Success:return(0,s.jsx)(Tt.A,{});case Ae.Error:return(0,s.jsx)(st.A,{});case Ae.Warning:return(0,s.jsx)(Be.A,{});case Ae.Neutral:default:return null}}var It=function(e,o){var d={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(d[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,r=Object.getOwnPropertySymbols(e);p<r.length;p++)o.indexOf(r[p])<0&&Object.prototype.propertyIsEnumerable.call(e,r[p])&&(d[r[p]]=e[r[p]]);return d};function S(e){var{appearance:o="neutral",label:d,link:r,className:p,loading:A=!1}=e,v=It(e,["appearance","label","link","className","loading"]);const X=(0,n.useMemo)(()=>Mt(o),[o]);return(0,s.jsxs)("div",Object.assign({className:Te()(_e.container,p)},(0,Ot.z7)(v),{"data-appearance":o,children:[A?(0,s.jsx)("span",{className:_e.loader,"data-test-id":fe.Le.loader,children:(0,s.jsx)(Ye.b,{size:"s"})}):X&&(0,s.jsx)("span",{className:_e.icon,"data-test-id":fe.Le.icon,children:X}),(0,s.jsxs)("div",{className:_e.contentLayout,children:[(0,s.jsx)("span",{className:_e.label,"data-test-id":fe.Le.label,children:d}),r&&(0,s.jsx)(et.N,{size:"m",text:r.text,href:r.href,onClick:r.onClick,appearance:"invert-neutral","data-test-id":fe.Le.link})]})]}))}var N=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),K=t("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");const u={SystemEvent:"system-event",UserAction:"user-action",Upload:"upload"},j={[u.SystemEvent]:{limit:5,position:"bottom-right",displayCloseAllButton:!0,type:u.SystemEvent},[u.UserAction]:{limit:2,position:"bottom-center",displayCloseAllButton:!1,type:u.UserAction},[u.Upload]:{limit:1,position:"bottom-right",displayCloseAllButton:!1,type:u.Upload}},ce={[u.SystemEvent]:5e3,[u.UserAction]:2e3,[u.Upload]:!1},me="toaster-root",be="toaster-container__";var ve=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/helperComponents/ButtonAction/styles.module.css"),ue={};ue.styleTagTransform=Me(),ue.setAttributes=xe(),ue.insert=He().bind(null,"head"),ue.domAPI=Ze(),ue.insertStyleElement=tt();var rt=Ve()(ve.A,ue);const gt=ve.A&&ve.A.locals?ve.A.locals:void 0;function xt({label:e,onClick:o,critical:d}){return(0,s.jsx)("button",{type:"button",className:gt.buttonAction,onClick:o,"data-test-id":fe.VY.buttonAction,"aria-label":"action","data-critical":d||void 0,children:e})}var Le=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastSystemEvent/styles.module.css"),Ne={};Ne.styleTagTransform=Me(),Ne.setAttributes=xe(),Ne.insert=He().bind(null,"head"),Ne.domAPI=Ze(),Ne.insertStyleElement=tt();var Wt=Ve()(Le.A,Ne);const ke=Le.A&&Le.A.locals?Le.A.locals:void 0;var it=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js");function Bt(e){switch(e){case"success":return(0,s.jsx)(Tt.A,{});case"error":case"errorCritical":return(0,s.jsx)(st.A,{});case"warning":return(0,s.jsx)(Be.A,{});case"neutral":default:return(0,s.jsx)(it.A,{})}}var Lt=function(e,o){var d={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(d[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,r=Object.getOwnPropertySymbols(e);p<r.length;p++)o.indexOf(r[p])<0&&Object.prototype.propertyIsEnumerable.call(e,r[p])&&(d[r[p]]=e[r[p]]);return d};function Nt(e){var{appearance:o="neutral",onCloseClick:d,progressBar:r=!0,closable:p=!0,title:A,description:v,link:X,closeToast:B,className:q,action:U}=e,ne=Lt(e,["appearance","onCloseClick","progressBar","closable","title","description","link","closeToast","className","action"]);const ee=R=>{R.stopPropagation(),d?d(R,B):B==null||B()},re=(0,n.useMemo)(()=>Bt(o),[o]);return(0,s.jsxs)("div",Object.assign({className:Te()(ke.container,q)},(0,Ot.z7)(ne),{"data-appearance":o,children:[(0,s.jsxs)("div",{className:ke.body,children:[(0,s.jsx)("div",{className:ke.icon,children:re}),(0,s.jsxs)("div",{className:ke.contentLayout,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:ke.title,children:(0,s.jsx)(K.m,{text:A,maxLines:2,hideTooltip:!0,"data-test-id":fe.VY.title})}),v&&(0,s.jsx)("span",{className:ke.description,children:(0,s.jsx)(K.m,{maxLines:4,text:v,hideTooltip:!0,"data-test-id":fe.VY.description})})]}),X&&(0,s.jsx)(et.N,{text:X.text,href:X.href,size:"m",truncateVariant:"end",onClick:X.onClick,appearance:pe[o],"data-test-id":fe.VY.link,textMode:o==="errorCritical"?"on-accent":"accent"})]}),p&&(0,s.jsx)("button",{type:"button",className:ke.buttonClose,onClick:ee,"data-test-id":fe.VY.buttonClose,"aria-label":"close notification",children:(0,s.jsx)(N.A,{})})]}),r&&(0,s.jsx)("div",{role:"progressbar","aria-label":"progressbar","data-test-id":fe.VY.progressbar,className:ke.progress,style:{animationDuration:`${ce[u.SystemEvent]}ms`}}),Array.isArray(U)&&U.length>0&&(0,s.jsx)("div",{className:ke.footer,children:U.map(R=>(0,s.jsx)(xt,Object.assign({},R,{critical:o==="errorCritical"}),R.label))})]}))}var Ut=t("./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/ToastUpload.js"),lt=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/style.css"),Ue={};Ue.styleTagTransform=Me(),Ue.setAttributes=xe(),Ue.insert=He().bind(null,"head"),Ue.domAPI=Ze(),Ue.insertStyleElement=tt();var Rt=Ve()(lt.A,Ue);const Re=lt.A&&lt.A.locals?lt.A.locals:void 0;var kt=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/toastify.css"),dt={};dt.styleTagTransform=Me(),dt.setAttributes=xe(),dt.insert=He().bind(null,"head"),dt.domAPI=Ze(),dt.insertStyleElement=tt();var qt=Ve()(kt.A,dt);const es=kt.A&&kt.A.locals?kt.A.locals:void 0;var Et=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/styles.module.css"),ct={};ct.styleTagTransform=Me(),ct.setAttributes=xe(),ct.insert=He().bind(null,"head"),ct.domAPI=Ze(),ct.insertStyleElement=tt();var ts=Ve()(Et.A,ct);const ot=Et.A&&Et.A.locals?Et.A.locals:void 0;function Vt({position:e="bottom-right",limit:o=5,containerId:d,displayCloseAllButton:r,type:p=u.SystemEvent}){const[A,v]=(0,n.useState)(0),[X,B]=(0,n.useState)(!1),q=()=>{w.dismiss(),B(!0)};(0,n.useEffect)(()=>w.onChange(({status:ee,containerId:re})=>{re===`${be}${u.SystemEvent}`&&(ee==="added"&&(B(!1),v(R=>R+1)),ee==="removed"&&v(R=>R-1))}),[]);const U=r&&A>2&&!X;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Xt,{hideProgressBar:!0,closeOnClick:!1,autoClose:!1,closeButton:!1,draggable:!1,className:Te()("osThemeSnack",ot[e],{[ot.containerWithCloseAllButton]:U,"osThemeSnack__toast-container__system-event":p===u.SystemEvent,"osThemeSnack__toast-container__user-action":p===u.UserAction,"osThemeSnack__toast-container__upload":p===u.Upload}),toastClassName:ot.toaster,bodyClassName:ot.toaster,position:e,limit:o,containerId:d}),U&&(0,s.jsx)("div",{className:Te()(ot.buttonCloseColumnWrapper,ot[e]),children:(0,s.jsx)("button",{type:"button",className:ot.buttonCloseColumn,onClick:q,"data-test-id":fe.VY.buttonCloseColumn,children:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435"})})]})}var Zt,Ht=function(e,o){var d={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(d[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,r=Object.getOwnPropertySymbols(e);p<r.length;p++)o.indexOf(r[p])<0&&Object.prototype.propertyIsEnumerable.call(e,r[p])&&(d[r[p]]=e[r[p]]);return d};function Gt({type:e,toasterParent:o,containerProps:d}){const r=(d==null?void 0:d.containerId)||`${be}${e}`,p=Object.assign(Object.assign(Object.assign({},j[e]),d||{}),{containerId:r}),A=`${me}__${e}`;let v=o?o.querySelector(`#${A}`):null;return!v&&o&&(0,bt.B)()&&(v=document.createElement("div"),v.id=A,o.appendChild(v)),{toasterContainer:v,toasterContainerProps:p}}function Kt({type:e,toastOptions:o,containerId:d,toasterProps:r}){return{toastId:o==null?void 0:o.id,onClose:(p=>{var A;(A=o==null?void 0:o.onClose)===null||A===void 0||A.call(o,p==null?void 0:p.id)}),autoClose:r!=null&&r.loading?!1:ce[e],containerId:d||`${be}${e}`}}function Ft({type:e,toasterProps:o}){switch(e){case u.UserAction:return(0,s.jsx)(S,Object.assign({},o));case u.SystemEvent:return(0,s.jsx)(Nt,Object.assign({},o));case u.Upload:return(0,s.jsx)(Ut.J,Object.assign({draggable:!0,draggableBounds:".Toastify__toast-container"},o));default:return}}const Ee=({type:e,toasterProps:o,containerProps:d,toastOptions:r,toasterParent:p=(0,bt.B)()?document.body:void 0})=>{const{toasterContainer:A,toasterContainerProps:v}=Gt({type:e,toasterParent:p,containerProps:d}),X=Kt({type:e,toasterProps:o,toastOptions:r,containerId:v.containerId}),B=Ft({type:e,toasterProps:o});return new Promise(q=>{(0,b.render)((0,s.jsx)(Vt,Object.assign({},v)),A,()=>{setTimeout(()=>{q(w(B,X))},0)})})},Se=(e,{type:o,toasterProps:d,toastOptions:r,containerId:p})=>{const A=Kt({type:o,toasterProps:d,toastOptions:r,containerId:p}),v=Ft({type:o,toasterProps:d});return w.update(e,Object.assign(Object.assign({},A),{render:v}))},ss=e=>Zt.dismiss(e),os=w.isActive,Qt={userAction:{success(e){return Ee({type:u.UserAction,toasterProps:Object.assign(Object.assign({},e),{appearance:"success"}),toastOptions:{id:e.id,onClose:e.onClose}})},neutral(e){return Ee({type:u.UserAction,toasterProps:Object.assign(Object.assign({},e),{appearance:"neutral"}),toastOptions:{id:e.id,onClose:e.onClose}})},error(e){return Ee({type:u.UserAction,toasterProps:Object.assign(Object.assign({},e),{appearance:"error"}),toastOptions:{id:e.id,onClose:e.onClose}})},warning(e){return Ee({type:u.UserAction,toasterProps:Object.assign(Object.assign({},e),{appearance:"warning"}),toastOptions:{id:e.id,onClose:e.onClose}})},update:{success(e,o){Se(e,{type:u.UserAction,toasterProps:Object.assign(Object.assign({},o),{appearance:"success"})})},neutral(e,o){Se(e,{type:u.UserAction,toasterProps:Object.assign(Object.assign({},o),{appearance:"neutral"})})},warning(e,o){Se(e,{type:u.UserAction,toasterProps:Object.assign(Object.assign({},o),{appearance:"warning"})})},error(e,o){Se(e,{type:u.UserAction,toasterProps:Object.assign(Object.assign({},o),{appearance:"error"})})}},dismiss(e){return w.dismiss(e)}},systemEvent:{success(e){return Ee({type:u.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"success"}),toastOptions:{id:e.id,onClose:e.onClose}})},neutral(e){return Ee({type:u.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"neutral"}),toastOptions:{id:e.id,onClose:e.onClose}})},warning(e){return Ee({type:u.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"warning"}),toastOptions:{id:e.id,onClose:e.onClose}})},error(e){return Ee({type:u.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"error"}),toastOptions:{id:e.id,onClose:e.onClose}})},errorCritical(e){return Ee({type:u.SystemEvent,toasterProps:Object.assign(Object.assign({},e),{appearance:"errorCritical"}),toastOptions:{id:e.id,onClose:e.onClose}})},update:{success(e,o){return Se(e,{type:u.SystemEvent,toasterProps:Object.assign(Object.assign({},o),{appearance:"success"})})},neutral(e,o){return Se(e,{type:u.SystemEvent,toasterProps:Object.assign(Object.assign({},o),{appearance:"neutral"})})},warning(e,o){return Se(e,{type:u.SystemEvent,toasterProps:Object.assign(Object.assign({},o),{appearance:"warning"})})},error(e,o){return Se(e,{type:u.SystemEvent,toasterProps:Object.assign(Object.assign({},o),{appearance:"error"})})},errorCritical(e,o){return Se(e,{type:u.SystemEvent,toasterProps:Object.assign(Object.assign({},o),{appearance:"errorCritical"})})}},dismiss(e){return w.dismiss(e)}},upload:{startOrUpdate(e){var{id:o}=e,d=Ht(e,["id"]);const r=o||u.Upload;return w.isActive(r)?Se(r,{type:u.Upload,toasterProps:Object.assign({},d)}):Ee({type:u.Upload,toasterProps:Object.assign({},d),toastOptions:{id:r,onClose:d.onClose}})},dismiss(e){return w.dismiss(e)}}}},"./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/testIds.js"(I,_,t){t.d(_,{AB:()=>m,Le:()=>y,VY:()=>b});const s="toast-system-event",b={icon:`${s}__icon`,main:s,title:`${s}__title`,description:`${s}__description`,buttonClose:`${s}__button-close`,buttonAction:`${s}__button-action`,link:`${s}__link`,progressbar:`${s}__progressbar`,buttonCloseColumn:`${s}button-close-column`},n="toast-user-action",y={main:n,label:`${n}__label`,icon:`${n}__icon`,loader:`${n}__loader`,link:`${n}__link`},i="toast-upload",m={main:i,close:`${i}__close`,title:`${i}__title`,description:`${i}__description`,counter:`${i}__counter`,progress:`${i}__progress`,list:`${i}__list`,collapseButton:`${i}__collapseButton`,progressBar:`${i}__progressBar`,uploadItem:`${i}__uploadItem`,uploadItemLink:`${i}__uploadItemLink`,uploadItemCancel:`${i}__uploadItemCancel`}},"./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"(I,_,t){t.r(_),t.d(_,{clsx:()=>b,default:()=>n});function s(y){var i,m,k="";if(typeof y=="string"||typeof y=="number")k+=y;else if(typeof y=="object")if(Array.isArray(y))for(i=0;i<y.length;i++)y[i]&&(m=s(y[i]))&&(k&&(k+=" "),k+=m);else for(i in y)y[i]&&(k&&(k+=" "),k+=i);return k}function b(){for(var y,i,m=0,k="";m<arguments.length;)(y=arguments[m++])&&(i=s(y))&&(k&&(k+=" "),k+=i);return k}const n=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+progress-bar@0.1.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/progress-bar/dist/esm/components/ProgressBar/styles.module.css"(I,_,t){t.d(_,{A:()=>m});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=t.n(s),n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=t.n(n),i=y()(b());i.push([I.id,`.progressBarContainer--RpoHf[data-size=s]{
  height:var(--size-progress-bar-progress-bar-height-s, 4px);
  border-radius:var(--radius-progress-bar-s, 2px);
}
.progressBarContainer--RpoHf[data-size=xs]{
  height:var(--size-progress-bar-progress-bar-height-xs, 2px);
  border-radius:var(--radius-progress-bar-xs, 2px);
}
.progressBarContainer--RpoHf{
  overflow:hidden;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.progressBarFiller--MXcdp{
  width:var(--progress);
  height:100%;
}
.progressBarFiller--MXcdp[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.progressBarFiller--MXcdp[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.progressBarFiller--MXcdp[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.progressBarFiller--MXcdp[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.progressBarFiller--MXcdp[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.progressBarFiller--MXcdp[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.progressBarFiller--MXcdp[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.progressBarFiller--MXcdp[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.progressBarFiller--MXcdp[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),i.locals={progressBarContainer:"progressBarContainer--RpoHf",progressBarFiller:"progressBarFiller--MXcdp"};const m=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastSystemEvent/styles.module.css"(I,_,t){t.d(_,{A:()=>m});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=t.n(s),n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=t.n(n),i=y()(b());i.push([I.id,`.icon--GUADR svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.buttonClose--KTBlC{
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
.buttonClose--KTBlC svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonClose--KTBlC:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.buttonClose--KTBlC:focus, .buttonClose--KTBlC:active{
  color:var(--sys-invert-neutral-accent-pressed, #aaaebd);
}
.buttonClose--KTBlC:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-on-complementary, #ffffff);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}

.contentLayout--I46vH{
  padding-top:var(--space-toaster-toast-system-event-container-content-layout-padding-top, 2px);
  display:flex;
  flex:1;
  flex-direction:column;
  min-width:0;
  word-break:break-word;
}

.title--WCeOc{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
  display:grid;
}

.description--Tf9KZ{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}

@keyframes progressBarAnimation--ppTKR{
  0%{
    width:100%;
  }
  100%{
    width:0;
  }
}
.progress--BCjc5{
  height:var(--size-toaster-toast-system-event-progress-bar, 4px);
  position:absolute;
  bottom:0;
  left:0;
  width:0;
  animation:progressBarAnimation--ppTKR linear 1 forwards;
  animation-play-state:running;
}

.body--UiyAU{
  gap:var(--space-toaster-toast-system-event-container-body-gap, 16px);
  display:flex;
  width:100%;
  overflow-wrap:break-word;
}

.footer--E3W0J{
  gap:var(--space-toaster-toast-system-event-container-footer-gap, 8px);
  position:relative;
  display:flex;
  flex-direction:row-reverse;
  width:100%;
}

.container--skXZ_{
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
.container--skXZ_:hover .progress--BCjc5{
  animation-play-state:paused;
}
.container--skXZ_[data-appearance=neutral]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--skXZ_[data-appearance=neutral] .icon--GUADR{
  color:var(--sys-invert-neutral-accent-default, #cfd2dc);
}
.container--skXZ_[data-appearance=neutral] .title--WCeOc{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.container--skXZ_[data-appearance=neutral] .description--Tf9KZ{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.container--skXZ_[data-appearance=neutral] .progress--BCjc5{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.container--skXZ_[data-appearance=error]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--skXZ_[data-appearance=error] .icon--GUADR{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.container--skXZ_[data-appearance=error] .title--WCeOc{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.container--skXZ_[data-appearance=error] .description--Tf9KZ{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.container--skXZ_[data-appearance=error] .progress--BCjc5{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.container--skXZ_[data-appearance=errorCritical]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.container--skXZ_[data-appearance=errorCritical] .icon--GUADR{
  color:var(--sys-red-on-accent, #fffbf9);
}
.container--skXZ_[data-appearance=errorCritical] .title--WCeOc{
  color:var(--sys-red-on-accent, #fffbf9);
}
.container--skXZ_[data-appearance=errorCritical] .description--Tf9KZ{
  color:var(--sys-red-on-accent, #fffbf9);
}
.container--skXZ_[data-appearance=errorCritical] .progress--BCjc5{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.container--skXZ_[data-appearance=errorCritical] .buttonClose--KTBlC{
  color:var(--sys-red-on-accent, #fffbf9);
  opacity:var(--opacity-a064, 0.64);
}
.container--skXZ_[data-appearance=errorCritical] .buttonClose--KTBlC:hover, .container--skXZ_[data-appearance=errorCritical] .buttonClose--KTBlC:focus-visible{
  opacity:1;
}
.container--skXZ_[data-appearance=errorCritical] .buttonClose--KTBlC:active{
  opacity:var(--opacity-a048, 0.48);
}
.container--skXZ_[data-appearance=warning]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--skXZ_[data-appearance=warning] .icon--GUADR{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.container--skXZ_[data-appearance=warning] .title--WCeOc{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.container--skXZ_[data-appearance=warning] .description--Tf9KZ{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.container--skXZ_[data-appearance=warning] .progress--BCjc5{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.container--skXZ_[data-appearance=success]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.container--skXZ_[data-appearance=success] .icon--GUADR{
  color:var(--sys-green-accent-default, #57b762);
}
.container--skXZ_[data-appearance=success] .title--WCeOc{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.container--skXZ_[data-appearance=success] .description--Tf9KZ{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.container--skXZ_[data-appearance=success] .progress--BCjc5{
  background-color:var(--sys-green-accent-default, #57b762);
}

.loader--JDsmj{
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}`,""]),i.locals={icon:"icon--GUADR",buttonClose:"buttonClose--KTBlC",contentLayout:"contentLayout--I46vH",title:"title--WCeOc",description:"description--Tf9KZ",progress:"progress--BCjc5",progressBarAnimation:"progressBarAnimation--ppTKR",body:"body--UiyAU",footer:"footer--E3W0J",container:"container--skXZ_",loader:"loader--JDsmj"};const m=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/ButtonIcon/styles.module.css"(I,_,t){t.d(_,{A:()=>m});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=t.n(s),n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=t.n(n),i=y()(b());i.push([I.id,`.buttonIcon--czyuD{
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
.buttonIcon--czyuD svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonIcon--czyuD:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.buttonIcon--czyuD:active{
  color:var(--sys-invert-neutral-accent-pressed, #aaaebd);
}
.buttonIcon--czyuD:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-on-complementary, #ffffff);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}`,""]),i.locals={buttonIcon:"buttonIcon--czyuD"};const m=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/ButtonTextNeutral/styles.module.css"(I,_,t){t.d(_,{A:()=>m});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=t.n(s),n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=t.n(n),i=y()(b());i.push([I.id,`.buttonTextNeutral--LNKzM{
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
.buttonTextNeutral--LNKzM:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.buttonTextNeutral--LNKzM:active{
  color:var(--sys-invert-neutral-accent-pressed, #aaaebd);
}
.buttonTextNeutral--LNKzM:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-on-complementary, #ffffff);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}`,""]),i.locals={buttonTextNeutral:"buttonTextNeutral--LNKzM"};const m=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/FileItem/styles.module.css"(I,_,t){t.d(_,{A:()=>m});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=t.n(s),n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=t.n(n),i=y()(b());i.push([I.id,`.fileLine--UOZXK{
  padding-top:var(--space-toaster-toast-upload-file-line-vertical-padding, 4px);
  padding-bottom:var(--space-toaster-toast-upload-file-line-vertical-padding, 4px);
  display:flex;
  flex-direction:column;
}

.fileHeadLine--NK1Ny{
  gap:var(--space-toaster-toast-upload-headline-gap, 16px);
  min-height:var(--size-toaster-toast-upload-file-line-headline-height, 24px);
  display:flex;
  align-items:center;
}

.fileTitle--VFfgE{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  flex-grow:1;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.fileStatusLine--Xk22U{
  gap:var(--space-toaster-toast-upload-status-line-gap, 8px);
  display:flex;
  align-items:center;
}

.fileStatusWrap--R7gex{
  gap:var(--space-toaster-toast-upload-status-wrap-gap, 4px);
  overflow:hidden;
  display:flex;
  flex-grow:1;
  align-items:center;
}

.fileStatusDescription--Geux4{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.fileStatusDescription--Geux4[data-status=loading]{
  color:var(--sys-invert-neutral-text-disabled, #656774);
}
.fileStatusDescription--Geux4[data-status=uploaded]{
  color:var(--sys-invert-neutral-text-disabled, #656774);
}

.fileSize--PVQ5O{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  color:var(--sys-invert-neutral-text-disabled, #656774);
  text-wrap:nowrap;
}
.fileSize--PVQ5O[data-status=loading]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.fileSize--PVQ5O[data-status=uploaded]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.fileStatusPercentage--UIG2X{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  color:var(--sys-invert-neutral-text-disabled, #656774);
}
.fileStatusPercentage--UIG2X[data-status=loading]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.fileStatusPercentage--UIG2X[data-status=uploaded]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}`,""]),i.locals={fileLine:"fileLine--UOZXK",fileHeadLine:"fileHeadLine--NK1Ny",fileTitle:"fileTitle--VFfgE",fileStatusLine:"fileStatusLine--Xk22U",fileStatusWrap:"fileStatusWrap--R7gex",fileStatusDescription:"fileStatusDescription--Geux4",fileSize:"fileSize--PVQ5O",fileStatusPercentage:"fileStatusPercentage--UIG2X"};const m=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/helperComponents/LoadingStatus/styles.module.css"(I,_,t){t.d(_,{A:()=>m});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=t.n(s),n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=t.n(n),i=y()(b());i.push([I.id,`.successIcon--SRVvm{
  color:var(--sys-green-accent-default, #57b762);
}`,""]),i.locals={successIcon:"successIcon--SRVvm"};const m=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUpload/styles.module.css"(I,_,t){t.d(_,{A:()=>m});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=t.n(s),n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=t.n(n),i=y()(b());i.push([I.id,`.container--gMVE4{
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
}
.container--gMVE4[data-collapsed]{
  gap:0;
}
.container--gMVE4[data-draggable]{
  cursor:grab;
}
.container--gMVE4[data-draggable]:active{
  cursor:grabbing;
}
.container--gMVE4{
  padding:var(--space-toaster-toast-system-event-container-padding, 12px);
  border-radius:var(--radius-toaster-toast-system-event-container, 8px);
  gap:var(--space-toaster-toast-system-event-container-gap, 12px);
}

.titleLine--gNNsU{
  display:flex;
  flex-direction:column;
}

.titleLineBody--A0MpD{
  gap:var(--space-toaster-toast-upload-body-gap, 16px);
  display:flex;
  align-items:center;
}

.title--vv0Vl{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
  flex-grow:1;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.generalProgress--mXhzZ{
  gap:var(--space-toaster-toast-upload-general-progress-gap, 4px);
  display:flex;
  flex-direction:column;
  align-self:stretch;
}

.statusLine--b8oX9{
  gap:var(--space-toaster-toast-upload-status-line-gap, 8px);
  display:flex;
  align-items:center;
}

.statusWrap--S3DQ9{
  gap:var(--space-toaster-toast-upload-status-wrap-gap, 4px);
  overflow:hidden;
  display:flex;
  flex-grow:1;
  align-items:center;
}

.description--oY_CC{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.description--oY_CC[data-status=loading]{
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
}
.description--oY_CC[data-status=uploaded]{
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
}

.totalCounter--Bs01e{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}

.totalPercentage--I2m2E{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}

.list--cbgzs{
  overflow-x:hidden;
  display:flex;
  flex-direction:column;
  box-sizing:content-box;
  max-height:288px;
  margin-top:0;
  padding-right:calc(var(--space-toaster-toast-system-event-container-padding, 12px) - var(--dimension-050m, 4px));
  transition:all 0.1s;
}
[data-collapsed] .list--cbgzs{
  max-height:0;
}`,""]),i.locals={container:"container--gMVE4",titleLine:"titleLine--gNNsU",titleLineBody:"titleLineBody--A0MpD",title:"title--vv0Vl",generalProgress:"generalProgress--mXhzZ",statusLine:"statusLine--b8oX9",statusWrap:"statusWrap--S3DQ9",description:"description--oY_CC",totalCounter:"totalCounter--Bs01e",totalPercentage:"totalPercentage--I2m2E",list:"list--cbgzs"};const m=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToastUserAction/styles.module.css"(I,_,t){t.d(_,{A:()=>m});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=t.n(s),n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=t.n(n),i=y()(b());i.push([I.id,`.icon--IeUOE{
  display:flex;
  align-items:center;
  justify-content:center;
}
.icon--IeUOE svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.label--OYPCZ{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.container--azD9v{
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
.container--azD9v[data-appearance=error] .icon--IeUOE{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.container--azD9v[data-appearance=warning] .icon--IeUOE{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.container--azD9v[data-appearance=success] .icon--IeUOE{
  color:var(--sys-green-accent-default, #57b762);
}

.loader--v4yCe{
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}

.contentLayout--NeQB3{
  gap:var(--space-toaster-toast-user-action-content-layout-gap, 8px);
  padding-left:var(--space-toaster-toast-user-action-content-layout-horizont-padding, 8px);
  padding-right:var(--space-toaster-toast-user-action-content-layout-horizont-padding, 8px);
  display:flex;
  align-items:center;
}`,""]),i.locals={icon:"icon--IeUOE",label:"label--OYPCZ",container:"container--azD9v",loader:"loader--v4yCe",contentLayout:"contentLayout--NeQB3"};const m=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/style.css"(I,_,t){t.d(_,{A:()=>m});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=t.n(s),n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=t.n(n),i=y()(b());i.push([I.id,`@keyframes osSnackTheme__toast__trackProgress {
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
`,""]);const m=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/styles.module.css"(I,_,t){t.d(_,{A:()=>m});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=t.n(s),n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=t.n(n),i=y()(b());i.push([I.id,`.buttonCloseColumnWrapper--JrLM4{
  gap:var(--space-toaster-toast-system-event-gap, 8px);
  padding:var(--space-toaster-toast-system-event-padding, 8px);
  width:var(--size-toaster-toast-system-event-container, 320px);
  position:fixed;
  box-sizing:border-box;
}

.buttonCloseColumn--CQX3J{
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
.buttonCloseColumn--CQX3J:hover{
  background-color:var(--sys-invert-neutral-decor-hovered, #656774);
}
.buttonCloseColumn--CQX3J:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  background-color:var(--sys-invert-neutral-decor-hovered, #656774);
  outline-color:var(--sys-available-complementary, #1c1c24);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonCloseColumn--CQX3J:active{
  color:var(--sys-invert-neutral-text-light, #8b8e9b);
}

.bottom-right--TYeEq{
  right:0;
  bottom:0;
}

.bottom-center--Yvtf2{
  bottom:0;
}

.toaster--GElP3{
  min-height:0;
  margin:0;
  padding:0;
  background-color:transparent;
  box-shadow:none;
}

.containerWithCloseAllButton--lzXg5{
  margin-bottom:calc(var(--size-toaster-button-close-column, 40px) + var(--space-toaster-toast-system-event-gap, 8px));
}

@media only screen and (max-width: 480px){
  .buttonCloseColumnWrapper--JrLM4{
    max-width:calc(100vw - 2 * var(--space-toaster-toast-system-event-container-padding, 12px));
  }
}`,""]),i.locals={buttonCloseColumnWrapper:"buttonCloseColumnWrapper--JrLM4",buttonCloseColumn:"buttonCloseColumn--CQX3J","bottom-right":"bottom-right--TYeEq","bottom-center":"bottom-center--Yvtf2",toaster:"toaster--GElP3",containerWithCloseAllButton:"containerWithCloseAllButton--lzXg5"};const m=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/components/ToasterContainer/toastify.css"(I,_,t){t.d(_,{A:()=>m});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=t.n(s),n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=t.n(n),i=y()(b());i.push([I.id,`.osThemeSnack.Toastify__toast-container{
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
}`,""]);const m=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toaster@0.11.28_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/toaster/dist/esm/helperComponents/ButtonAction/styles.module.css"(I,_,t){t.d(_,{A:()=>m});var s=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=t.n(s),n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=t.n(n),i=y()(b());i.push([I.id,`.buttonAction--D6aca{
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
.buttonAction--D6aca:hover, .buttonAction--D6aca:focus-visible{
  background-color:var(--sys-invert-neutral-decor-hovered, #656774);
}
.buttonAction--D6aca:active{
  background-color:var(--sys-invert-neutral-decor-activated, #6d707f);
}
.buttonAction--D6aca:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-on-complementary, #ffffff);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonAction--D6aca[data-critical]{
  background-color:var(--sys-opacity-enabled, rgba(255, 255, 255, 0.1607843137));
}
.buttonAction--D6aca[data-critical]:hover, .buttonAction--D6aca[data-critical]:focus-visible{
  background-color:var(--sys-opacity-hovered, rgba(255, 255, 255, 0.2392156863));
}
.buttonAction--D6aca[data-critical]:active{
  background-color:var(--sys-opacity-activated, rgba(255, 255, 255, 0.3215686275));
}`,""]),i.locals={buttonAction:"buttonAction--D6aca"};const m=i},"./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/Draggable.js"(I,_,t){var s;s={value:!0},Object.defineProperty(_,"DraggableCore",{enumerable:!0,get:function(){return L.default}}),_.default=void 0;var b=M(t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),n=$(t("./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js")),y=$(t("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js")),i=$(t("./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js")),m=t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/domFns.js"),k=t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/positionFns.js"),V=t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/shims.js"),L=$(t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/DraggableCore.js")),le=$(t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/log.js"));function $(c){return c&&c.__esModule?c:{default:c}}function O(c){if(typeof WeakMap!="function")return null;var f=new WeakMap,E=new WeakMap;return(O=function(h){return h?E:f})(c)}function M(c,f){if(!f&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var E=O(f);if(E&&E.has(c))return E.get(c);var h={},W=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in c)if(a!=="default"&&Object.prototype.hasOwnProperty.call(c,a)){var l=W?Object.getOwnPropertyDescriptor(c,a):null;l&&(l.get||l.set)?Object.defineProperty(h,a,l):h[a]=c[a]}return h.default=c,E&&E.set(c,h),h}function P(){return P=Object.assign?Object.assign.bind():function(c){for(var f=1;f<arguments.length;f++){var E=arguments[f];for(var h in E)Object.prototype.hasOwnProperty.call(E,h)&&(c[h]=E[h])}return c},P.apply(this,arguments)}function x(c,f,E){return f=Y(f),f in c?Object.defineProperty(c,f,{value:E,enumerable:!0,configurable:!0,writable:!0}):c[f]=E,c}function Y(c){var f=C(c,"string");return typeof f=="symbol"?f:String(f)}function C(c,f){if(typeof c!="object"||c===null)return c;var E=c[Symbol.toPrimitive];if(E!==void 0){var h=E.call(c,f||"default");if(typeof h!="object")return h;throw new TypeError("@@toPrimitive must return a primitive value.")}return(f==="string"?String:Number)(c)}class g extends b.Component{static getDerivedStateFromProps(f,E){let{position:h}=f,{prevPropsPosition:W}=E;return h&&(!W||h.x!==W.x||h.y!==W.y)?((0,le.default)("Draggable: getDerivedStateFromProps %j",{position:h,prevPropsPosition:W}),{x:h.x,y:h.y,prevPropsPosition:{...h}}):null}constructor(f){super(f),x(this,"onDragStart",(E,h)=>{if((0,le.default)("Draggable: onDragStart: %j",h),this.props.onStart(E,(0,k.createDraggableData)(this,h))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),x(this,"onDrag",(E,h)=>{if(!this.state.dragging)return!1;(0,le.default)("Draggable: onDrag: %j",h);const W=(0,k.createDraggableData)(this,h),a={x:W.x,y:W.y,slackX:0,slackY:0};if(this.props.bounds){const{x:T,y:Z}=a;a.x+=this.state.slackX,a.y+=this.state.slackY;const[se,J]=(0,k.getBoundPosition)(this,a.x,a.y);a.x=se,a.y=J,a.slackX=this.state.slackX+(T-a.x),a.slackY=this.state.slackY+(Z-a.y),W.x=a.x,W.y=a.y,W.deltaX=a.x-this.state.x,W.deltaY=a.y-this.state.y}if(this.props.onDrag(E,W)===!1)return!1;this.setState(a)}),x(this,"onDragStop",(E,h)=>{if(!this.state.dragging||this.props.onStop(E,(0,k.createDraggableData)(this,h))===!1)return!1;(0,le.default)("Draggable: onDragStop: %j",h);const a={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:T,y:Z}=this.props.position;a.x=T,a.y=Z}this.setState(a)}),this.state={dragging:!1,dragged:!1,x:f.position?f.position.x:f.defaultPosition.x,y:f.position?f.position.y:f.defaultPosition.y,prevPropsPosition:{...f.position},slackX:0,slackY:0,isElementSVG:!1},f.position&&!(f.onDrag||f.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement!="undefined"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var f,E;return(f=(E=this.props)===null||E===void 0||(E=E.nodeRef)===null||E===void 0?void 0:E.current)!==null&&f!==void 0?f:y.default.findDOMNode(this)}render(){const{axis:f,bounds:E,children:h,defaultPosition:W,defaultClassName:a,defaultClassNameDragging:l,defaultClassNameDragged:T,position:Z,positionOffset:se,scale:J,...ae}=this.props;let je={},w=null;const Oe=!!!Z||this.state.dragging,Ke=Z||W,Fe={x:(0,k.canDragX)(this)&&Oe?this.state.x:Ke.x,y:(0,k.canDragY)(this)&&Oe?this.state.y:Ke.y};this.state.isElementSVG?w=(0,m.createSVGTransform)(Fe,se):je=(0,m.createCSSTransform)(Fe,se);const ie=(0,i.default)(h.props.className||"",a,{[l]:this.state.dragging,[T]:this.state.dragged});return b.createElement(L.default,P({},ae,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),b.cloneElement(b.Children.only(h),{className:ie,style:{...h.props.style,...je},transform:w}))}}_.default=g,x(g,"displayName","Draggable"),x(g,"propTypes",{...L.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:V.dontSetMe,style:V.dontSetMe,transform:V.dontSetMe}),x(g,"defaultProps",{...L.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},"./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/DraggableCore.js"(I,_,t){Object.defineProperty(_,"__esModule",{value:!0}),_.default=void 0;var s=le(t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),b=V(t("./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js")),n=V(t("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js")),y=t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/domFns.js"),i=t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/positionFns.js"),m=t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/shims.js"),k=V(t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/log.js"));function V(C){return C&&C.__esModule?C:{default:C}}function L(C){if(typeof WeakMap!="function")return null;var g=new WeakMap,c=new WeakMap;return(L=function(f){return f?c:g})(C)}function le(C,g){if(!g&&C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var c=L(g);if(c&&c.has(C))return c.get(C);var f={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in C)if(h!=="default"&&Object.prototype.hasOwnProperty.call(C,h)){var W=E?Object.getOwnPropertyDescriptor(C,h):null;W&&(W.get||W.set)?Object.defineProperty(f,h,W):f[h]=C[h]}return f.default=C,c&&c.set(C,f),f}function $(C,g,c){return g=O(g),g in C?Object.defineProperty(C,g,{value:c,enumerable:!0,configurable:!0,writable:!0}):C[g]=c,C}function O(C){var g=M(C,"string");return typeof g=="symbol"?g:String(g)}function M(C,g){if(typeof C!="object"||C===null)return C;var c=C[Symbol.toPrimitive];if(c!==void 0){var f=c.call(C,g||"default");if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(g==="string"?String:Number)(C)}const P={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let x=P.mouse;class Y extends s.Component{constructor(){super(...arguments),$(this,"dragging",!1),$(this,"lastX",NaN),$(this,"lastY",NaN),$(this,"touchIdentifier",null),$(this,"mounted",!1),$(this,"handleDragStart",g=>{if(this.props.onMouseDown(g),!this.props.allowAnyClick&&typeof g.button=="number"&&g.button!==0)return!1;const c=this.findDOMNode();if(!c||!c.ownerDocument||!c.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:f}=c;if(this.props.disabled||!(g.target instanceof f.defaultView.Node)||this.props.handle&&!(0,y.matchesSelectorAndParentsTo)(g.target,this.props.handle,c)||this.props.cancel&&(0,y.matchesSelectorAndParentsTo)(g.target,this.props.cancel,c))return;g.type==="touchstart"&&g.preventDefault();const E=(0,y.getTouchIdentifier)(g);this.touchIdentifier=E;const h=(0,i.getControlPosition)(g,E,this);if(h==null)return;const{x:W,y:a}=h,l=(0,i.createCoreData)(this,W,a);(0,k.default)("DraggableCore: handleDragStart: %j",l),(0,k.default)("calling",this.props.onStart),!(this.props.onStart(g,l)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,y.addUserSelectStyles)(f),this.dragging=!0,this.lastX=W,this.lastY=a,(0,y.addEvent)(f,x.move,this.handleDrag),(0,y.addEvent)(f,x.stop,this.handleDragStop))}),$(this,"handleDrag",g=>{const c=(0,i.getControlPosition)(g,this.touchIdentifier,this);if(c==null)return;let{x:f,y:E}=c;if(Array.isArray(this.props.grid)){let a=f-this.lastX,l=E-this.lastY;if([a,l]=(0,i.snapToGrid)(this.props.grid,a,l),!a&&!l)return;f=this.lastX+a,E=this.lastY+l}const h=(0,i.createCoreData)(this,f,E);if((0,k.default)("DraggableCore: handleDrag: %j",h),this.props.onDrag(g,h)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch(a){const l=document.createEvent("MouseEvents");l.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(l)}return}this.lastX=f,this.lastY=E}),$(this,"handleDragStop",g=>{if(!this.dragging)return;const c=(0,i.getControlPosition)(g,this.touchIdentifier,this);if(c==null)return;let{x:f,y:E}=c;if(Array.isArray(this.props.grid)){let l=f-this.lastX||0,T=E-this.lastY||0;[l,T]=(0,i.snapToGrid)(this.props.grid,l,T),f=this.lastX+l,E=this.lastY+T}const h=(0,i.createCoreData)(this,f,E);if(this.props.onStop(g,h)===!1||this.mounted===!1)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,y.removeUserSelectStyles)(a.ownerDocument),(0,k.default)("DraggableCore: handleDragStop: %j",h),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,k.default)("DraggableCore: Removing handlers"),(0,y.removeEvent)(a.ownerDocument,x.move,this.handleDrag),(0,y.removeEvent)(a.ownerDocument,x.stop,this.handleDragStop))}),$(this,"onMouseDown",g=>(x=P.mouse,this.handleDragStart(g))),$(this,"onMouseUp",g=>(x=P.mouse,this.handleDragStop(g))),$(this,"onTouchStart",g=>(x=P.touch,this.handleDragStart(g))),$(this,"onTouchEnd",g=>(x=P.touch,this.handleDragStop(g)))}componentDidMount(){this.mounted=!0;const g=this.findDOMNode();g&&(0,y.addEvent)(g,P.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const g=this.findDOMNode();if(g){const{ownerDocument:c}=g;(0,y.removeEvent)(c,P.mouse.move,this.handleDrag),(0,y.removeEvent)(c,P.touch.move,this.handleDrag),(0,y.removeEvent)(c,P.mouse.stop,this.handleDragStop),(0,y.removeEvent)(c,P.touch.stop,this.handleDragStop),(0,y.removeEvent)(g,P.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,y.removeUserSelectStyles)(c)}}findDOMNode(){var g,c;return(g=this.props)!==null&&g!==void 0&&g.nodeRef?(c=this.props)===null||c===void 0||(c=c.nodeRef)===null||c===void 0?void 0:c.current:n.default.findDOMNode(this)}render(){return s.cloneElement(s.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}_.default=Y,$(Y,"displayName","DraggableCore"),$(Y,"propTypes",{allowAnyClick:b.default.bool,children:b.default.node.isRequired,disabled:b.default.bool,enableUserSelectHack:b.default.bool,offsetParent:function(C,g){if(C[g]&&C[g].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:b.default.arrayOf(b.default.number),handle:b.default.string,cancel:b.default.string,nodeRef:b.default.object,onStart:b.default.func,onDrag:b.default.func,onStop:b.default.func,onMouseDown:b.default.func,scale:b.default.number,className:m.dontSetMe,style:m.dontSetMe,transform:m.dontSetMe}),$(Y,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},"./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/cjs.js"(I,_,t){const{default:s,DraggableCore:b}=t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/Draggable.js");I.exports=s,I.exports.default=s,I.exports.DraggableCore=b},"./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/domFns.js"(I,_,t){Object.defineProperty(_,"__esModule",{value:!0}),_.addClassName=h,_.addEvent=V,_.addUserSelectStyles=f,_.createCSSTransform=x,_.createSVGTransform=Y,_.getTouch=g,_.getTouchIdentifier=c,_.getTranslation=C,_.innerHeight=O,_.innerWidth=M,_.matchesSelector=m,_.matchesSelectorAndParentsTo=k,_.offsetXYFromParent=P,_.outerHeight=le,_.outerWidth=$,_.removeClassName=W,_.removeEvent=L,_.removeUserSelectStyles=E;var s=t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/shims.js"),b=y(t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/getPrefix.js"));function n(a){if(typeof WeakMap!="function")return null;var l=new WeakMap,T=new WeakMap;return(n=function(Z){return Z?T:l})(a)}function y(a,l){if(!l&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var T=n(l);if(T&&T.has(a))return T.get(a);var Z={},se=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var J in a)if(J!=="default"&&Object.prototype.hasOwnProperty.call(a,J)){var ae=se?Object.getOwnPropertyDescriptor(a,J):null;ae&&(ae.get||ae.set)?Object.defineProperty(Z,J,ae):Z[J]=a[J]}return Z.default=a,T&&T.set(a,Z),Z}let i="";function m(a,l){return i||(i=(0,s.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(T){return(0,s.isFunction)(a[T])})),(0,s.isFunction)(a[i])?a[i](l):!1}function k(a,l,T){let Z=a;do{if(m(Z,l))return!0;if(Z===T)return!1;Z=Z.parentNode}while(Z);return!1}function V(a,l,T,Z){if(!a)return;const se={capture:!0,...Z};a.addEventListener?a.addEventListener(l,T,se):a.attachEvent?a.attachEvent("on"+l,T):a["on"+l]=T}function L(a,l,T,Z){if(!a)return;const se={capture:!0,...Z};a.removeEventListener?a.removeEventListener(l,T,se):a.detachEvent?a.detachEvent("on"+l,T):a["on"+l]=null}function le(a){let l=a.clientHeight;const T=a.ownerDocument.defaultView.getComputedStyle(a);return l+=(0,s.int)(T.borderTopWidth),l+=(0,s.int)(T.borderBottomWidth),l}function $(a){let l=a.clientWidth;const T=a.ownerDocument.defaultView.getComputedStyle(a);return l+=(0,s.int)(T.borderLeftWidth),l+=(0,s.int)(T.borderRightWidth),l}function O(a){let l=a.clientHeight;const T=a.ownerDocument.defaultView.getComputedStyle(a);return l-=(0,s.int)(T.paddingTop),l-=(0,s.int)(T.paddingBottom),l}function M(a){let l=a.clientWidth;const T=a.ownerDocument.defaultView.getComputedStyle(a);return l-=(0,s.int)(T.paddingLeft),l-=(0,s.int)(T.paddingRight),l}function P(a,l,T){const se=l===l.ownerDocument.body?{left:0,top:0}:l.getBoundingClientRect(),J=(a.clientX+l.scrollLeft-se.left)/T,ae=(a.clientY+l.scrollTop-se.top)/T;return{x:J,y:ae}}function x(a,l){const T=C(a,l,"px");return{[(0,b.browserPrefixToKey)("transform",b.default)]:T}}function Y(a,l){return C(a,l,"")}function C(a,l,T){let{x:Z,y:se}=a,J="translate(".concat(Z).concat(T,",").concat(se).concat(T,")");if(l){const ae="".concat(typeof l.x=="string"?l.x:l.x+T),je="".concat(typeof l.y=="string"?l.y:l.y+T);J="translate(".concat(ae,", ").concat(je,")")+J}return J}function g(a,l){return a.targetTouches&&(0,s.findInArray)(a.targetTouches,T=>l===T.identifier)||a.changedTouches&&(0,s.findInArray)(a.changedTouches,T=>l===T.identifier)}function c(a){if(a.targetTouches&&a.targetTouches[0])return a.targetTouches[0].identifier;if(a.changedTouches&&a.changedTouches[0])return a.changedTouches[0].identifier}function f(a){if(!a)return;let l=a.getElementById("react-draggable-style-el");l||(l=a.createElement("style"),l.type="text/css",l.id="react-draggable-style-el",l.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,l.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,a.getElementsByTagName("head")[0].appendChild(l)),a.body&&h(a.body,"react-draggable-transparent-selection")}function E(a){if(a)try{if(a.body&&W(a.body,"react-draggable-transparent-selection"),a.selection)a.selection.empty();else{const l=(a.defaultView||window).getSelection();l&&l.type!=="Caret"&&l.removeAllRanges()}}catch(l){}}function h(a,l){a.classList?a.classList.add(l):a.className.match(new RegExp("(?:^|\\s)".concat(l,"(?!\\S)")))||(a.className+=" ".concat(l))}function W(a,l){a.classList?a.classList.remove(l):a.className=a.className.replace(new RegExp("(?:^|\\s)".concat(l,"(?!\\S)"),"g"),"")}},"./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/getPrefix.js"(I,_){Object.defineProperty(_,"__esModule",{value:!0}),_.browserPrefixToKey=b,_.browserPrefixToStyle=n,_.default=void 0,_.getPrefix=s;const t=["Moz","Webkit","O","ms"];function s(){var m;let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window=="undefined")return"";const V=(m=window.document)===null||m===void 0||(m=m.documentElement)===null||m===void 0?void 0:m.style;if(!V||k in V)return"";for(let L=0;L<t.length;L++)if(b(k,t[L])in V)return t[L];return""}function b(m,k){return k?"".concat(k).concat(y(m)):m}function n(m,k){return k?"-".concat(k.toLowerCase(),"-").concat(m):m}function y(m){let k="",V=!0;for(let L=0;L<m.length;L++)V?(k+=m[L].toUpperCase(),V=!1):m[L]==="-"?V=!0:k+=m[L];return k}var i=_.default=s()},"./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/log.js"(I,_){Object.defineProperty(_,"__esModule",{value:!0}),_.default=t;function t(){}},"./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/positionFns.js"(I,_,t){Object.defineProperty(_,"__esModule",{value:!0}),_.canDragX=i,_.canDragY=m,_.createCoreData=V,_.createDraggableData=L,_.getBoundPosition=n,_.getControlPosition=k,_.snapToGrid=y;var s=t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/shims.js"),b=t("./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/domFns.js");function n(O,M,P){if(!O.props.bounds)return[M,P];let{bounds:x}=O.props;x=typeof x=="string"?x:le(x);const Y=$(O);if(typeof x=="string"){const{ownerDocument:C}=Y,g=C.defaultView;let c;if(x==="parent"?c=Y.parentNode:c=C.querySelector(x),!(c instanceof g.HTMLElement))throw new Error('Bounds selector "'+x+'" could not find an element.');const f=c,E=g.getComputedStyle(Y),h=g.getComputedStyle(f);x={left:-Y.offsetLeft+(0,s.int)(h.paddingLeft)+(0,s.int)(E.marginLeft),top:-Y.offsetTop+(0,s.int)(h.paddingTop)+(0,s.int)(E.marginTop),right:(0,b.innerWidth)(f)-(0,b.outerWidth)(Y)-Y.offsetLeft+(0,s.int)(h.paddingRight)-(0,s.int)(E.marginRight),bottom:(0,b.innerHeight)(f)-(0,b.outerHeight)(Y)-Y.offsetTop+(0,s.int)(h.paddingBottom)-(0,s.int)(E.marginBottom)}}return(0,s.isNum)(x.right)&&(M=Math.min(M,x.right)),(0,s.isNum)(x.bottom)&&(P=Math.min(P,x.bottom)),(0,s.isNum)(x.left)&&(M=Math.max(M,x.left)),(0,s.isNum)(x.top)&&(P=Math.max(P,x.top)),[M,P]}function y(O,M,P){const x=Math.round(M/O[0])*O[0],Y=Math.round(P/O[1])*O[1];return[x,Y]}function i(O){return O.props.axis==="both"||O.props.axis==="x"}function m(O){return O.props.axis==="both"||O.props.axis==="y"}function k(O,M,P){const x=typeof M=="number"?(0,b.getTouch)(O,M):null;if(typeof M=="number"&&!x)return null;const Y=$(P),C=P.props.offsetParent||Y.offsetParent||Y.ownerDocument.body;return(0,b.offsetXYFromParent)(x||O,C,P.props.scale)}function V(O,M,P){const x=!(0,s.isNum)(O.lastX),Y=$(O);return x?{node:Y,deltaX:0,deltaY:0,lastX:M,lastY:P,x:M,y:P}:{node:Y,deltaX:M-O.lastX,deltaY:P-O.lastY,lastX:O.lastX,lastY:O.lastY,x:M,y:P}}function L(O,M){const P=O.props.scale;return{node:M.node,x:O.state.x+M.deltaX/P,y:O.state.y+M.deltaY/P,deltaX:M.deltaX/P,deltaY:M.deltaY/P,lastX:O.state.x,lastY:O.state.y}}function le(O){return{left:O.left,top:O.top,right:O.right,bottom:O.bottom}}function $(O){const M=O.findDOMNode();if(!M)throw new Error("<DraggableCore>: Unmounted during event!");return M}},"./node_modules/.pnpm/react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-draggable/build/cjs/utils/shims.js"(I,_){Object.defineProperty(_,"__esModule",{value:!0}),_.dontSetMe=y,_.findInArray=t,_.int=n,_.isFunction=s,_.isNum=b;function t(i,m){for(let k=0,V=i.length;k<V;k++)if(m.apply(m,[i[k],k,i]))return i[k]}function s(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Function]"}function b(i){return typeof i=="number"&&!isNaN(i)}function n(i){return parseInt(i,10)}function y(i,m,k){if(i[m])return new Error("Invalid prop ".concat(m," passed to ").concat(k," - do not set this, set it on the child."))}}}]);})();
