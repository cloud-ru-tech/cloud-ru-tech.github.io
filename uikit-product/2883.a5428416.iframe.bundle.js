"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2883],{"./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/components/DrawerCustom/DrawerCustom.js"(m,l,e){e.d(l,{R:()=>ee});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/rc-drawer@6.5.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-drawer/assets/index.css"),i=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(i),n=e("./node_modules/.pnpm/rc-drawer@6.5.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-drawer/es/index.js"),c=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useModalOpenState.js"),T=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),p=e("./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/constants.js"),U=e("./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(Q),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),g=e.n(Y),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=e.n(Z),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),w=e.n(G),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n(V),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=e.n(J),C=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/ButtonClose/styles.module.css"),O={};O.styleTagTransform=k(),O.setAttributes=w(),O.insert=h().bind(null,"head"),O.domAPI=g(),O.insertStyleElement=E();var ae=f()(C.A,O);const D=C.A&&C.A.locals?C.A.locals:void 0;function A({onClick:t}){return(0,o.jsx)("button",{type:"button",className:D.buttonClose,onClick:t,"aria-label":"close drawer","data-test-id":p.Y9.closeButton,children:(0,o.jsx)(U.A,{})})}var ne=e("./node_modules/.pnpm/@snack-uikit+tooltip@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js"),W=e("./node_modules/.pnpm/@snack-uikit+typography@1.0.1_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),B=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/Header/styles.module.css"),x={};x.styleTagTransform=k(),x.setAttributes=w(),x.insert=h().bind(null,"head"),x.domAPI=g(),x.insertStyleElement=E();var y=f()(B.A,x);const b=B.A&&B.A.locals?B.A.locals:void 0;var P=function(t,_){var d={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&_.indexOf(s)<0&&(d[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(t);a<s.length;a++)_.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(t,s[a])&&(d[s[a]]=t[s[a]]);return d};function v(t){var{title:_,titleTooltip:d,subtitle:s,image:a,className:se}=t,te=P(t,["title","titleTooltip","subtitle","image","className"]);return(0,o.jsxs)("div",Object.assign({className:r()(b.drawerHeader,se)},(0,T.z7)(te),{children:[a&&(0,o.jsx)("img",{src:a.src,alt:a.alt,className:b.image,"data-test-id":p.Y9.image}),(0,o.jsxs)("div",{className:b.headlineLayout,children:[(0,o.jsxs)("div",{className:b.headline,children:[(0,o.jsx)(W.o.SansHeadlineS,{className:b.title,"data-test-id":p.Y9.title,children:_}),d&&(0,o.jsx)(ne.o,{tip:d,size:"s","data-test-id":p.Y9.tooltip})]}),s&&(0,o.jsx)(W.o.SansBodyM,{className:b.subtitle,"data-test-id":p.Y9.subtitle,children:s})]})]}))}var j=e("./node_modules/.pnpm/@snack-uikit+scroll@1.0.1_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/Body/styles.module.css"),S={};S.styleTagTransform=k(),S.setAttributes=w(),S.insert=h().bind(null,"head"),S.domAPI=g(),S.insertStyleElement=E();var de=f()(I.A,S);const $=I.A&&I.A.locals?I.A.locals:void 0;var q=function(t,_){var d={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&_.indexOf(s)<0&&(d[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(t);a<s.length;a++)_.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(t,s[a])&&(d[s[a]]=t[s[a]]);return d};function K(t){var{content:_,className:d}=t,s=q(t,["content","className"]);return(0,o.jsx)(j.O,Object.assign({size:"m",barHideStrategy:"never",className:r()($.drawerBody,d)},(0,T.z7)(s),{children:_}))}var R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/Footer/styles.module.css"),M={};M.styleTagTransform=k(),M.setAttributes=w(),M.insert=h().bind(null,"head"),M.domAPI=g(),M.insertStyleElement=E();var re=f()(R.A,M);const _e=R.A&&R.A.locals?R.A.locals:void 0;var ie=function(t,_){var d={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&_.indexOf(s)<0&&(d[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(t);a<s.length;a++)_.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(t,s[a])&&(d[s[a]]=t[s[a]]);return d};function ce(t){var{actions:_,className:d}=t,s=ie(t,["actions","className"]);return(0,o.jsx)("div",Object.assign({className:r()(_e.footer,d)},(0,T.z7)(s),{children:(0,o.jsx)("div",{className:_e.footerActions,"data-test-id":p.Y9.footerActions,children:_})}))}var N=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/components/DrawerCustom/motion.css"),L={};L.styleTagTransform=k(),L.setAttributes=w(),L.insert=h().bind(null,"head"),L.domAPI=g(),L.insertStyleElement=E();var ge=f()(N.A,L);const he=N.A&&N.A.locals?N.A.locals:void 0,ue={maskMotion:{motionAppear:!0,motionName:"maskMotion"},motion:t=>({motionAppear:!0,motionName:`panelMotion-${t}`})};var X=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/components/DrawerCustom/styles.module.css"),z={};z.styleTagTransform=k(),z.setAttributes=w(),z.insert=h().bind(null,"head"),z.domAPI=g(),z.insertStyleElement=E();var ke=f()(X.A,z);const H=X.A&&X.A.locals?X.A.locals:void 0;var me=function(t,_){var d={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&_.indexOf(s)<0&&(d[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(t);a<s.length;a++)_.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(t,s[a])&&(d[s[a]]=t[s[a]]);return d};function ee(t){var{open:_,mode:d=p.g.Regular,position:s=p.II.Right,onClose:a,rootClassName:se,className:te,size:F=p.SK.S,push:pe,container:ve,children:be,nestedDrawer:ye,closeOnPopstate:fe}=t,je=me(t,["open","mode","position","onClose","rootClassName","className","size","push","container","children","nestedDrawer","closeOnPopstate"]);const oe=d===p.g.Regular,le=typeof F=="string"&&p.YL.includes(F);return(0,c.G)(_,a,{closeOnPopstate:fe}),(0,o.jsxs)(n.A,Object.assign({mask:oe,maskClosable:oe,maskClassName:H.mask,keyboard:oe,width:le?"null":F,open:_,placement:s,destroyOnClose:!0,push:pe,onClose:a,getContainer:ve,className:r()(H.drawer,te),rootClassName:r()(H.drawerRoot,se)},(0,T.z7)(je),{"data-content-wrapper":!0,"data-size":le?F:void 0,"data-mode":d},ue,{children:[(0,o.jsx)("div",{className:H.headerElements,children:(0,o.jsx)(A,{onClick:a})}),be,ye]}))}(function(t){t.Header=v,t.Body=K,t.Footer=ce})(ee||(ee={}))},"./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/constants.js"(m,l,e){e.d(l,{II:()=>r,SK:()=>o,Y9:()=>c,YL:()=>u,g:()=>i,nQ:()=>n});const o={S:"s",M:"m",L:"l"},u=Object.values(o),i={Regular:"regular",Soft:"soft"},r={Right:"right",Left:"left"},n=24,c={closeButton:"drawer__close-button",header:"drawer__header",title:"drawer__title",tooltip:"drawer__title-tooltip",subtitle:"drawer__subtitle",image:"drawer__image",content:"drawer__body",footer:"drawer__footer",footerActions:"drawer__footer-actions",approveButton:"drawer__approve-button",cancelButton:"drawer__cancel-button",additionalButton:"drawer__additional-button"}},"./node_modules/.pnpm/@snack-uikit+tooltip@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js"(m,l,e){e.d(l,{o:()=>x});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),i=e.n(u),r=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),n=e("./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),c=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),T=e("./node_modules/.pnpm/@snack-uikit+tooltip@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),p=e("./node_modules/.pnpm/@snack-uikit+popover-private@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const U={S:"s",Xs:"xs"},Q={[U.Xs]:16,[U.S]:24},f={Hover:"hover",Click:"click"},Y={[f.Hover]:p.tr.HoverAndFocusVisible,[f.Click]:p.tr.ClickAndFocusVisible};var g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n(g),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),G=e.n(h),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),V=e.n(w),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),J=e.n(E),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),C=e.n(k),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),ae=e.n(O),D=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),A={};A.styleTagTransform=ae(),A.setAttributes=J(),A.insert=V().bind(null,"head"),A.domAPI=G(),A.insertStyleElement=C();var ne=Z()(D.A,A);const W=D.A&&D.A.locals?D.A.locals:void 0;var B=function(y,b){var P={};for(var v in y)Object.prototype.hasOwnProperty.call(y,v)&&b.indexOf(v)<0&&(P[v]=y[v]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,v=Object.getOwnPropertySymbols(y);j<v.length;j++)b.indexOf(v[j])<0&&Object.prototype.propertyIsEnumerable.call(y,v[j])&&(P[v[j]]=y[v[j]]);return P};function x(y){var{size:b=U.Xs,trigger:P=f.Hover,tooltipClassname:v,className:j,open:I,onOpenChange:S,tabIndex:de=0,triggerSupportProps:$={}}=y,q=B(y,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[K,R]=(0,r.iC)(I,!1,S);return(0,o.jsx)(T.m,Object.assign({},q,{className:v,open:K,onOpenChange:R,trigger:Y[P],children:({getReferenceProps:M,ref:re})=>(0,o.jsx)("span",Object.assign({},M(),(0,c.z7)($),{ref:re,"data-size":b,"data-opened":K,"data-trigger":P,className:i()(W.questionTooltip,j),role:"button",tabIndex:de,children:(0,o.jsx)(n.A,{size:Q[b]})}))}))}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/components/DrawerCustom/motion.css"(m,l,e){e.d(l,{A:()=>c});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(o),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(i),n=r()(u());n.push([m.id,`.maskMotion {
  opacity: unset;
}
.maskMotion-enter, .maskMotion-appear {
  opacity: 0;
}
.maskMotion-enter-active, .maskMotion-appear-active {
  opacity: 1;
  transition: opacity 0.2s;
}
.maskMotion-leave {
  opacity: 1;
}
.maskMotion-leave-active {
  opacity: 0;
  transition: opacity 0.1s;
}

.panelMotion {
  transform: unset;
}
.panelMotion-left-enter-start, .panelMotion-left-appear-start, .panelMotion-left-leave-start {
  transition: none !important;
}
.panelMotion-left-enter-active, .panelMotion-left-appear-active {
  transition: transform 0.2s ease-in-out;
}
.panelMotion-left-leave-active {
  transition: transform 0.1s ease-out;
}
.panelMotion-left-enter, .panelMotion-left-appear {
  transform: translateX(-100%);
}
.panelMotion-left-enter-active, .panelMotion-left-appear-active {
  transform: translateX(0);
}
.panelMotion-left-leave {
  transform: translateX(0);
}
.panelMotion-left-leave-active {
  transform: translateX(-100%) !important;
}
.panelMotion-right-enter-start, .panelMotion-right-appear-start, .panelMotion-right-leave-start {
  transition: none !important;
}
.panelMotion-right-enter-active, .panelMotion-right-appear-active {
  transition: transform 0.2s ease-in-out;
}
.panelMotion-right-leave-active {
  transition: transform 0.1s ease-out;
}
.panelMotion-right-enter, .panelMotion-right-appear {
  transform: translateX(100%);
}
.panelMotion-right-enter-active, .panelMotion-right-appear-active {
  transform: translateX(0);
}
.panelMotion-right-leave {
  transform: translateX(0);
}
.panelMotion-right-leave-active {
  transform: translateX(100%) !important;
}
`,""]);const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/components/DrawerCustom/styles.module.css"(m,l,e){e.d(l,{A:()=>c});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(o),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(i),n=r()(u());n.push([m.id,`.drawerRoot--jQBhm{
  z-index:initial !important;
}
.drawerRoot--jQBhm [data-content-wrapper=true]{
  will-change:transform;
  z-index:initial;
  overflow:unset;
  max-width:calc(100% - var(--space-drawer-outside-gap, 24px));
  height:100%;
}
.drawerRoot--jQBhm [data-content-wrapper=true][data-size=s]{
  min-width:var(--size-drawer-min-width-s, 304px);
  width:var(--size-drawer-width-s, 464px);
}
.drawerRoot--jQBhm [data-content-wrapper=true][data-size=m]{
  min-width:var(--size-drawer-min-width-m, 304px);
  width:var(--size-drawer-width-m, 864px);
}
.drawerRoot--jQBhm [data-content-wrapper=true][data-size=l]{
  min-width:var(--size-drawer-min-width-l, 304px);
  width:var(--size-drawer-width-l, 1872px);
}
.drawerRoot--jQBhm [data-content-wrapper=true][data-mode=regular] .drawer--jU7sH{
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.drawerRoot--jQBhm [data-content-wrapper=true][data-mode=soft] .drawer--jU7sH{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}

.drawer--jU7sH{
  overflow:unset !important;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  box-shadow:var(--box-shadow-elevation-level5, 0px 0px 16px 0px rgba(0, 0, 0, 0.0784313725), 0px 24px 16px 0px rgba(0, 0, 0, 0.0784313725));
}

.headerElements--HZ3aN{
  padding-top:var(--space-drawer-header-elements-top, 16px);
  padding-right:var(--space-drawer-header-elements-side, 16px);
  gap:var(--space-drawer-headline-layout-badge-elements-layout-gap, 16px);
  position:absolute;
  top:0;
  right:0;
  display:flex;
  align-items:center;
}

.mask--xjSXo{
  z-index:initial !important;
  background-color:var(--sys-blackout, rgba(0, 0, 0, 0.3215686275));
}`,""]),n.locals={drawerRoot:"drawerRoot--jQBhm",drawer:"drawer--jU7sH",headerElements:"headerElements--HZ3aN",mask:"mask--xjSXo"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/Body/styles.module.css"(m,l,e){e.d(l,{A:()=>c});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(o),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(i),n=r()(u());n.push([m.id,`.drawerBody--iI2aY{
  padding-left:var(--space-drawer-body-side, 32px);
  padding-right:var(--space-drawer-body-side, 32px);
  flex:1 1 auto;
  box-sizing:border-box;
  min-height:var(--dimension-2m, 16px);
  color:var(--sys-neutral-text-main, #41424e);
}`,""]),n.locals={drawerBody:"drawerBody--iI2aY"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/ButtonClose/styles.module.css"(m,l,e){e.d(l,{A:()=>c});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(o),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(i),n=r()(u());n.push([m.id,`.buttonClose--utz48{
  width:var(--size-drawer-button-close, 32px);
  height:var(--size-drawer-button-close, 32px);
  border-radius:var(--radius-drawer-button-close, 16px);
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
.buttonClose--utz48:hover, .buttonClose--utz48:focus-visible{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.buttonClose--utz48:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.buttonClose--utz48:active{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.buttonClose--utz48 svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}`,""]),n.locals={buttonClose:"buttonClose--utz48"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/Footer/styles.module.css"(m,l,e){e.d(l,{A:()=>c});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(o),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(i),n=r()(u());n.push([m.id,`.footer--EXhVC{
  padding-top:var(--space-drawer-footer-top, 24px);
  padding-left:var(--space-drawer-footer-side, 32px);
  padding-right:var(--space-drawer-footer-side, 32px);
  padding-bottom:var(--space-drawer-footer-bottom, 32px);
  gap:var(--space-drawer-footer-gap, 16px);
  display:flex;
  flex-direction:column;
}

.footerActions--wJGaf{
  gap:var(--space-drawer-footer-action-row-gap, 8px);
  display:flex;
  flex-direction:row-reverse;
  flex-wrap:wrap-reverse;
  align-items:center;
}`,""]),n.locals={footer:"footer--EXhVC",footerActions:"footerActions--wJGaf"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/Header/styles.module.css"(m,l,e){e.d(l,{A:()=>c});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(o),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(i),n=r()(u());n.push([m.id,`.drawerHeader--nByDz{
}

.image--u9AA_{
  height:var(--size-drawer-image, 184px);
  display:block;
  width:100%;
  -o-object-fit:cover;
     object-fit:cover;
}

.headlineLayout--Aay8m{
  padding-top:var(--space-drawer-headline-layout-top, 32px);
  padding-left:var(--space-drawer-headline-layout-side-s, 32px);
  padding-right:var(--space-drawer-headline-layout-side-m, 32px);
  padding-bottom:var(--space-drawer-headline-layout-bottom, 24px);
  gap:var(--space-drawer-headline-layout-gap, 8px);
  display:flex;
  flex-direction:column;
}

.headline--Filqc{
  gap:var(--space-drawer-headline-layout-headline, 4px);
  display:flex;
  align-items:center;
}

.title--xbwOi{
  display:grid;
  color:var(--sys-neutral-text-main, #41424e);
}

.subtitle--wgUZE{
  color:var(--sys-neutral-text-support, #6d707f);
}`,""]),n.locals={drawerHeader:"drawerHeader--nByDz",image:"image--u9AA_",headlineLayout:"headlineLayout--Aay8m",headline:"headline--Filqc",title:"title--xbwOi",subtitle:"subtitle--wgUZE"};const c=n},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@1.0.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"(m,l,e){e.d(l,{A:()=>c});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(o),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(i),n=r()(u());n.push([m.id,`.questionTooltip--b2t21{
  cursor:pointer;
  display:inline-flex;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background:none;
  border:0;
}
.questionTooltip--b2t21:hover{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.questionTooltip--b2t21:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.questionTooltip--b2t21[data-trigger=click][data-opened=true]{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--b2t21[data-trigger=click]:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--b2t21[data-trigger=click]:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--b2t21[data-trigger=click]:focus-visible{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--b2t21[data-size=xs] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.questionTooltip--b2t21[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}`,""]),n.locals={questionTooltip:"questionTooltip--b2t21"};const c=n}}]);})();
