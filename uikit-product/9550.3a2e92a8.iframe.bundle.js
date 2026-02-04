"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9550],{"./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/AlertTop.js":((S,m,t)=>{t.d(m,{W:()=>h});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),f=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),d=t("./node_modules/.pnpm/@snack-uikit+link@0.17.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/Link.js"),p=t("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),z=t("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const u={Neutral:"neutral",Primary:"primary",Error:"error",Warning:"warning",Success:"success",Info:"info"},I={S:"s",M:"m"},C={[u.Neutral]:"neutral",[u.Primary]:"primary",[u.Error]:"red",[u.Warning]:"yellow",[u.Success]:"green",[u.Info]:"blue"},g={[u.Neutral]:"primary",[u.Primary]:"primary",[u.Error]:"red",[u.Warning]:"yellow",[u.Success]:"green",[u.Info]:"blue"};var s=t("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js"),r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(e),D=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=t.n(D),L=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=t.n(L),K=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),V=t.n(K),N=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=t.n(N),P=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/helperComponents/styles.module.css"),x={};x.styleTagTransform=k(),x.setAttributes=F(),x.insert=M().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=V();var v=o()(P.A,x);const j=P.A&&P.A.locals?P.A.locals:void 0;function R({appearance:A,text:y,icon:l,onClick:b,variant:E="simple",dataTestId:w,loading:O=!1,size:H="s"}){return(0,n.jsxs)("button",{type:"button",onClick:b,className:j.alertButton,"data-variant":E,"data-appearance":A,"data-test-id":w||"alert__action-button","data-icon-only":!y||void 0,"data-loading":O,"data-size":H,children:[y&&(0,n.jsx)("span",{className:j.text,"data-size":H,children:y}),l&&(O?(0,n.jsx)(s.b,{size:"s"}):(0,n.jsx)("span",{className:j.icon,children:l}))]})}var B=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),Y=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),Z=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),$=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js");function oe(A,y){switch(A){case u.Success:return(0,n.jsx)(B.A,{size:y});case u.Error:return(0,n.jsx)(Y.A,{size:y});case u.Warning:return(0,n.jsx)(Z.A,{size:y});case u.Primary:case u.Neutral:default:return(0,n.jsx)($.A,{size:y})}}const J={InvertNeutral:"invert-neutral",Primary:"primary",Red:"red",Yellow:"yellow",Green:"green",Blue:"blue"},Q={[u.Neutral]:J.InvertNeutral,[u.Primary]:J.Primary,[u.Error]:J.Red,[u.Warning]:J.Yellow,[u.Success]:J.Green,[u.Info]:J.Blue};var q=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/styles.module.css"),T={};T.styleTagTransform=k(),T.setAttributes=F(),T.insert=M().bind(null,"head"),T.domAPI=a(),T.insertStyleElement=V();var X=o()(q.A,T);const W=q.A&&q.A.locals?q.A.locals:void 0;var c=function(A,y){var l={};for(var b in A)Object.prototype.hasOwnProperty.call(A,b)&&y.indexOf(b)<0&&(l[b]=A[b]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,b=Object.getOwnPropertySymbols(A);E<b.length;E++)y.indexOf(b[E])<0&&Object.prototype.propertyIsEnumerable.call(A,b[E])&&(l[b[E]]=A[b[E]]);return l};function h(A){var y,{icon:l=!0,title:b,description:E,link:w,onClose:O,truncate:H,appearance:G=u.Neutral,action:U,className:se}=A,te=c(A,["icon","title","description","link","onClose","truncate","appearance","action","className"]);return(0,n.jsxs)("div",Object.assign({className:_()(W.alertTop,se)},(0,z.z7)(te),{"data-color":Q[G],children:[(0,n.jsxs)("div",{className:W.contentWrapper,children:[l&&(0,n.jsx)("div",{className:W.icon,"data-color":Q[G],"data-test-id":"alert-top__icon",children:oe(G,24)}),(0,n.jsxs)("div",{className:W.contentLayout,children:[(0,n.jsxs)("div",{className:W.textLayout,children:[b&&(0,n.jsx)("div",{className:W.title,"data-color":Q[G],"data-test-id":"alert-top__title",children:(0,n.jsx)(p.m,{text:b,maxLines:(y=H==null?void 0:H.title)!==null&&y!==void 0?y:1})}),(0,n.jsx)("span",{className:W.description,"data-color":Q[G],"data-test-id":"alert-top__description",children:E})]}),w&&(0,n.jsx)("span",{children:(0,n.jsx)(d.N,Object.assign({},w,{appearance:C[G],textMode:"on-accent",size:"m","data-test-id":"alert-top__link"}))})]})]}),(0,n.jsxs)("div",{className:W.actions,children:[U&&(0,n.jsx)(R,Object.assign({},U,{appearance:Q[G],variant:"tonal"})),O&&(0,n.jsx)(R,{onClick:O,appearance:Q[G],icon:(0,n.jsx)(f.A,{}),variant:"tonal",dataTestId:"alert-top__close-button"})]})]}))}}),"./node_modules/.pnpm/@snack-uikit+avatar@0.8.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((S,m,t)=>{t.d(m,{e:()=>q});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),f=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const p={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},z={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var u=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=t.n(u),C=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),g=t.n(C),s=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),r=t.n(s),o=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),e=t.n(o),a=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=t.n(a),M=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=t.n(M),F=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),K={};K.styleTagTransform=L(),K.setAttributes=e(),K.insert=r().bind(null,"head"),K.domAPI=g(),K.insertStyleElement=D();var V=I()(F.A,K);const N=F.A&&F.A.locals?F.A.locals:void 0;var k=function(T,X){var W={};for(var c in T)Object.prototype.hasOwnProperty.call(T,c)&&X.indexOf(c)<0&&(W[c]=T[c]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,c=Object.getOwnPropertySymbols(T);h<c.length;h++)X.indexOf(c[h])<0&&Object.prototype.propertyIsEnumerable.call(T,c[h])&&(W[c[h]]=T[c[h]]);return W};function P(T){var{size:X=z.M,appearance:W=p.Primary,className:c}=T,h=k(T,["size","appearance","className"]);return(0,n.jsx)("div",Object.assign({className:_()(N.container,c)},(0,d.z7)(h),{"data-size":X,children:(0,n.jsx)("div",{className:N.indicator,"data-appearance":W})}))}const x={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},v={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},j={Round:"round",Square:"square"};var R=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),B={};B.styleTagTransform=L(),B.setAttributes=e(),B.insert=r().bind(null,"head"),B.domAPI=g(),B.insertStyleElement=D();var Y=I()(R.A,B);const Z=R.A&&R.A.locals?R.A.locals:void 0,$=" ",oe=(T,X)=>{var W;const c=T.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!c||c.length<X)return c.toUpperCase();const h=c.split($);let A=c;if(h.length>1){const y=h[0].charAt(0),l=(W=h[h.length-1])===null||W===void 0?void 0:W.charAt(0);A=`${y}${l}`.toUpperCase()}return A.slice(0,X).toUpperCase()};var J=function(T,X){var W={};for(var c in T)Object.prototype.hasOwnProperty.call(T,c)&&X.indexOf(c)<0&&(W[c]=T[c]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,c=Object.getOwnPropertySymbols(T);h<c.length;h++)X.indexOf(c[h])<0&&Object.prototype.propertyIsEnumerable.call(T,c[h])&&(W[c[h]]=T[c[h]]);return W};const Q={[v.Xxs]:"xxs",[v.Xs]:"xs",[v.S]:"xs",[v.M]:"m",[v.L]:"m",[v.Xl]:"l",[v.Xxl]:"l"};function q(T){var{name:X,appearance:W=x.Red,size:c=v.S,shape:h=j.Round,indicator:A,showTwoSymbols:y,src:l,className:b}=T,E=J(T,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[w,O]=(0,f.useState)(!1),H=c!==v.Xxs&&y?2:1;return(0,f.useEffect)(()=>{O(!1)},[l]),(0,n.jsxs)("div",Object.assign({className:_()(Z.avatar,b)},(0,d.z7)(E),{"data-size":c,"data-appearance":W,"data-shape":h,children:[l&&!w?(0,n.jsx)("img",{"data-test-id":"image",className:Z.image,src:l,onError:()=>O(!0),alt:""}):(0,n.jsx)("div",{"data-test-id":"abbreviation",children:oe(X,H)}),A&&(0,n.jsx)("div",{className:Z.indicatorWrapper,children:(0,n.jsx)(P,{"data-test-id":"indicator",appearance:A,size:Q[c]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js":((S,m,t)=>{t.d(m,{b:()=>x});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),f=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),p=t("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),z=t("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js"),u=t("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js"),I=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=t.n(I),g=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=t.n(g),r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),a=t.n(e),D=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=t.n(D),L=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),F=t.n(L),K=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css"),V={};V.styleTagTransform=F(),V.setAttributes=a(),V.insert=o().bind(null,"head"),V.domAPI=s(),V.insertStyleElement=M();var N=C()(K.A,V);const k=K.A&&K.A.locals?K.A.locals:void 0;var P=function(v,j){var R={};for(var B in v)Object.prototype.hasOwnProperty.call(v,B)&&j.indexOf(B)<0&&(R[B]=v[B]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Y=0,B=Object.getOwnPropertySymbols(v);Y<B.length;Y++)j.indexOf(B[Y])<0&&Object.prototype.propertyIsEnumerable.call(v,B[Y])&&(R[B[Y]]=v[B[Y]]);return R};const x=(0,f.forwardRef)((v,j)=>{var{className:R,iconPosition:B=p._B.After,size:Y=p.SK.S,target:Z=p.Qn.Blank,type:$=p.dk.Button,appearance:oe=p.xz.Neutral,fullWidth:J=!1,tabIndex:Q}=v,q=P(v,["className","iconPosition","size","target","type","appearance","fullWidth","tabIndex"]);return(0,n.jsx)(z.A,Object.assign({},(0,d.z7)(q),(0,u.a)(q),(0,u.F)(q),{className:_()(k.button,R),iconClassName:k.icon,iconPosition:B,labelClassName:k.label,size:Y,fullWidth:J,target:Z,type:$,appearance:oe,tabIndex:Q,ref:j}))})}),"./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js":((S,m,t)=>{t.d(m,{c:()=>k});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),f=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const d={Horizontal:"horizontal",Vertical:"vertical"},p={Light:"light",Regular:"regular"};var z=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=t.n(z),I=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),C=t.n(I),g=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),s=t.n(g),r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),a=t.n(e),D=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=t.n(D),L=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),F={};F.styleTagTransform=M(),F.setAttributes=o(),F.insert=s().bind(null,"head"),F.domAPI=C(),F.insertStyleElement=a();var K=u()(L.A,F);const V=L.A&&L.A.locals?L.A.locals:void 0;var N=function(P,x){var v={};for(var j in P)Object.prototype.hasOwnProperty.call(P,j)&&x.indexOf(j)<0&&(v[j]=P[j]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,j=Object.getOwnPropertySymbols(P);R<j.length;R++)x.indexOf(j[R])<0&&Object.prototype.propertyIsEnumerable.call(P,j[R])&&(v[j[R]]=P[j[R]]);return v};function k(P){var{className:x,orientation:v=d.Horizontal,weight:j=p.Regular}=P,R=N(P,["className","orientation","weight"]);const B=Object.assign(Object.assign({},(0,f.z7)(R)),{"data-weight":j});return v===d.Horizontal?(0,n.jsx)("hr",Object.assign({className:_()(V.horizontal,x)},B)):(0,n.jsx)("div",Object.assign({className:_()(V.vertical,x)},B))}}),"./node_modules/.pnpm/@snack-uikit+dropdown@0.4.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js":((S,m,t)=>{t.d(m,{m:()=>V});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),f=t("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),d=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=t.n(d),z=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=t.n(z),I=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),C=t.n(I),g=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),s=t.n(g),r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),o=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),a=t.n(e),D=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.4.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"),M={};M.styleTagTransform=a(),M.setAttributes=s(),M.insert=C().bind(null,"head"),M.domAPI=u(),M.insertStyleElement=o();var L=p()(D.A,M);const F=D.A&&D.A.locals?D.A.locals:void 0;var K=function(N,k){var P={};for(var x in N)Object.prototype.hasOwnProperty.call(N,x)&&k.indexOf(x)<0&&(P[x]=N[x]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,x=Object.getOwnPropertySymbols(N);v<x.length;v++)k.indexOf(x[v])<0&&Object.prototype.propertyIsEnumerable.call(N,x[v])&&(P[x[v]]=N[x[v]]);return P};function V(N){var{content:k,trigger:P="click",placement:x="bottom-start",children:v,triggerRef:j,widthStrategy:R="gte",triggerClassName:B}=N,Y=K(N,["content","trigger","placement","children","triggerRef","widthStrategy","triggerClassName"]);return!v&&!j?null:(0,n.jsx)(f.Z,Object.assign({placement:x,popoverContent:(0,n.jsx)("div",{className:F.dropdownContainer,children:k}),trigger:P,triggerRef:j,hasArrow:!1,widthStrategy:R,triggerClassName:_()(F.defaultTriggerClassName,B)},Y,{children:v}))}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js":((S,m,t)=>{t.d(m,{A:()=>g});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const d=i.forwardRef((s,r)=>{var{size:o=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-alarm-filled-s";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const u=i.forwardRef((s,r)=>{var{size:o=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-alarm-filled-xs";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var I=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const g=(0,i.forwardRef)((s,r)=>{var{size:o=24}=s,e=I(s,["size"]);return Number(o)>=20?(0,n.jsx)(d,Object.assign({ref:r,size:o},e)):(0,n.jsx)(u,Object.assign({ref:r,size:o},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js":((S,m,t)=>{t.d(m,{A:()=>g});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const d=i.forwardRef((s,r)=>{var{size:o=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-check-filled-s";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const u=i.forwardRef((s,r)=>{var{size:o=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-check-filled-xs";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var I=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const g=(0,i.forwardRef)((s,r)=>{var{size:o=24}=s,e=I(s,["size"]);return Number(o)>=20?(0,n.jsx)(d,Object.assign({ref:r,size:o},e)):(0,n.jsx)(u,Object.assign({ref:r,size:o},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js":((S,m,t)=>{t.d(m,{A:()=>g});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const d=i.forwardRef((s,r)=>{var{size:o=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-cross-s";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const u=i.forwardRef((s,r)=>{var{size:o=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-cross-xs";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var I=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const g=(0,i.forwardRef)((s,r)=>{var{size:o=24}=s,e=I(s,["size"]);return Number(o)>=20?(0,n.jsx)(d,Object.assign({ref:r,size:o},e)):(0,n.jsx)(u,Object.assign({ref:r,size:o},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js":((S,m,t)=>{t.d(m,{A:()=>g});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const d=i.forwardRef((s,r)=>{var{size:o=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-cross-filled-s";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const u=i.forwardRef((s,r)=>{var{size:o=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-cross-filled-xs";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var I=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const g=(0,i.forwardRef)((s,r)=>{var{size:o=24}=s,e=I(s,["size"]);return Number(o)>=20?(0,n.jsx)(d,Object.assign({ref:r,size:o},e)):(0,n.jsx)(u,Object.assign({ref:r,size:o},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js":((S,m,t)=>{t.d(m,{A:()=>g});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const d=i.forwardRef((s,r)=>{var{size:o=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-info-filled-s";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const u=i.forwardRef((s,r)=>{var{size:o=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-info-filled-xs";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var I=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const g=(0,i.forwardRef)((s,r)=>{var{size:o=24}=s,e=I(s,["size"]);return Number(o)>=20?(0,n.jsx)(d,Object.assign({ref:r,size:o},e)):(0,n.jsx)(u,Object.assign({ref:r,size:o},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/more/index.js":((S,m,t)=>{t.d(m,{A:()=>g});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const d=i.forwardRef((s,r)=>{var{size:o=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-more-s";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const u=i.forwardRef((s,r)=>{var{size:o=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-more-xs";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var I=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const g=(0,i.forwardRef)((s,r)=>{var{size:o=24}=s,e=I(s,["size"]);return Number(o)>=20?(0,n.jsx)(d,Object.assign({ref:r,size:o},e)):(0,n.jsx)(u,Object.assign({ref:r,size:o},e))})}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js":((S,m,t)=>{t.d(m,{b:()=>N});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),f=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),d=t("./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),p=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),z=t.n(p),u=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=t.n(u),C=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),g=t.n(C),s=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=t.n(s),o=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),e=t.n(o),a=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=t.n(a),M=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),L={};L.styleTagTransform=D(),L.setAttributes=r(),L.insert=g().bind(null,"head"),L.domAPI=I(),L.insertStyleElement=e();var F=z()(M.A,L);const K=M.A&&M.A.locals?M.A.locals:void 0;var V=function(k,P){var x={};for(var v in k)Object.prototype.hasOwnProperty.call(k,v)&&P.indexOf(v)<0&&(x[v]=k[v]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,v=Object.getOwnPropertySymbols(k);j<v.length;j++)P.indexOf(v[j])<0&&Object.prototype.propertyIsEnumerable.call(k,v[j])&&(x[v[j]]=k[v[j]]);return x};function N(k){var{size:P=d.K.S,className:x}=k,v=V(k,["size","className"]);return(0,n.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:_()(K.sun,x)},(0,f.z7)(v),{"data-size":P,children:[(0,n.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js":((S,m,t)=>{t.d(m,{K:()=>n});const n={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js":((S,m,t)=>{t.d(m,{b:()=>N});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),f=t("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),d=t("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),p=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),z=t.n(p),u=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=t.n(u),C=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),g=t.n(C),s=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=t.n(s),o=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),e=t.n(o),a=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=t.n(a),M=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),L={};L.styleTagTransform=D(),L.setAttributes=r(),L.insert=g().bind(null,"head"),L.domAPI=I(),L.insertStyleElement=e();var F=z()(M.A,L);const K=M.A&&M.A.locals?M.A.locals:void 0;var V=function(k,P){var x={};for(var v in k)Object.prototype.hasOwnProperty.call(k,v)&&P.indexOf(v)<0&&(x[v]=k[v]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,v=Object.getOwnPropertySymbols(k);j<v.length;j++)P.indexOf(v[j])<0&&Object.prototype.propertyIsEnumerable.call(k,v[j])&&(x[v[j]]=k[v[j]]);return x};function N(k){var{size:P=d.K.S,className:x}=k,v=V(k,["size","className"]);return(0,n.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:_()(K.sun,x)},(0,f.z7)(v),{"data-size":P,children:[(0,n.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js":((S,m,t)=>{t.d(m,{K:()=>n});const n={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js":((S,m,t)=>{t.d(m,{Z:()=>y});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/@floating-ui+react@0.26.24_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),_=t("./node_modules/.pnpm/@floating-ui+dom@1.7.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),f=t("./node_modules/.pnpm/@floating-ui+react-dom@2.1.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),d=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=t.n(d),z=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=t("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),I=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),C=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),g=t("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js"),s=t("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");function r({placement:l,x:b,y:E,ref:w}){if(!w.current)return{};const O=w.current.offsetWidth;switch(!0){case l.startsWith("top"):return{left:b,bottom:-O,transform:"rotate(-90deg)"};case l.startsWith("bottom"):return{left:b,top:-O,transform:"rotate(90deg)"};case l.startsWith("left"):return{top:E,right:-(O-1),transform:"rotate(180deg)"};case l.startsWith("right"):default:return{top:E,left:-(O-1)}}}const o=()=>(0,I.B)()?document.body:void 0,e=l=>(l==null?void 0:l.offsetWidth)||0,a=({children:l,getReferenceProps:b,setReference:E,validElementWrapperClassName:w,disableSpanWrapper:O})=>(0,z.isValidElement)(l)?(0,s.isForwardRef)(l)||(0,s.isValidElementType)(l)||O?(0,z.cloneElement)(l,Object.assign(Object.assign({},b(Object.assign(Object.assign({},l.props),{className:p()(l.props.className,w)}))),{ref:E,key:"cloned-element"})):(0,z.createElement)("span",Object.assign({className:w,ref:E},b(),{key:"wrapped-element"}),l):typeof l=="function"?(0,n.jsx)(z.Fragment,{children:l({getReferenceProps:b,ref:E})},"function-element"):(0,z.createElement)("span",Object.assign({className:w,ref:E},b(),{key:"wrapped-element"}),l),D=l=>{const b={useHoverTrigger:!1,useClickTrigger:!1,useFocusTrigger:!1,keyboardOnly:!0};switch(l){case g.tr.Hover:return Object.assign(Object.assign({},b),{useHoverTrigger:!0});case g.tr.Click:return Object.assign(Object.assign({},b),{useClickTrigger:!0});case g.tr.FocusVisible:return Object.assign(Object.assign({},b),{useFocusTrigger:!0});case g.tr.Focus:return Object.assign(Object.assign({},b),{useFocusTrigger:!0,keyboardOnly:!1});case g.tr.ClickAndFocusVisible:return Object.assign(Object.assign({},b),{useFocusTrigger:!0,useClickTrigger:!0});case g.tr.HoverAndFocusVisible:return Object.assign(Object.assign({},b),{useFocusTrigger:!0,useHoverTrigger:!0});case g.tr.HoverAndFocus:return Object.assign(Object.assign({},b),{useFocusTrigger:!0,useHoverTrigger:!0,keyboardOnly:!1});default:return b}},M=l=>l.stopPropagation(),L=l=>l.stopPropagation();function F(l){return l.slice(0,2)==="on"?l.replace("on","").toLowerCase():l.toLowerCase()}function K(l){return Object.assign(Object.assign({},l),{nativeEvent:l})}function V(l){const b={};return Object.entries(l).forEach(([E,w])=>{b[E]=O=>{w(K(O))}}),b}function N({placement:l,x:b,y:E,arrowContainerClassName:w,arrowElementClassName:O,arrowRef:H}){return(0,n.jsx)("div",{className:w,ref:H,style:r({x:b,y:E,placement:l,ref:H}),children:(0,n.jsx)("svg",{className:O,viewBox:"0 0 4 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M4 0V8L0.707106 4.70711C0.316582 4.31658 0.316583 3.68342 0.707107 3.29289L4 0Z"})})})}var k=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function P({triggerClassName:l,offsetProp:b}){const[E,w]=(0,z.useState)(0);return(0,k.N)(()=>{const O=document.querySelector("."+String(l).split(/\s+/g).map(CSS.escape).join(".")),H=O?getComputedStyle(O):null,G=H?H.getPropertyValue("--offset"):null;if(b!==void 0){w(b);return}const U=document.createElement("span");U.style.width=G||"",document.body.appendChild(U);const se=getComputedStyle(U).width;document.body.removeChild(U);const te=parseInt(se||"");if(Number.isNaN(te)||te<1){w(0);return}w(te)},[b,l]),E}var x=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=t.n(x),j=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=t.n(j),B=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Y=t.n(B),Z=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),$=t.n(Z),oe=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),J=t.n(oe),Q=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),q=t.n(Q),T=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"),X={};X.styleTagTransform=q(),X.setAttributes=$(),X.insert=Y().bind(null,"head"),X.domAPI=R(),X.insertStyleElement=J();var W=v()(T.A,X);const c=T.A&&T.A.locals?T.A.locals:void 0;var h=function(l,b){var E={};for(var w in l)Object.prototype.hasOwnProperty.call(l,w)&&b.indexOf(w)<0&&(E[w]=l[w]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,w=Object.getOwnPropertySymbols(l);O<w.length;O++)b.indexOf(w[O])<0&&Object.prototype.propertyIsEnumerable.call(l,w[O])&&(E[w[O]]=l[w[O]]);return E};function A(l){var b,{className:E,triggerClassName:w,children:O,open:H,onOpenChange:G,placement:U=g.El.Top,hasArrow:se,offset:te,popoverContent:re,trigger:de,outsideClick:je,hoverDelayOpen:Oe,hoverDelayClose:Se,triggerRef:ee,widthStrategy:Ae=g.Lw.Auto,heightStrategy:we=g.cJ.Auto,closeOnEscapeKey:ke=!0,triggerClickByKeys:Pe=!0,fallbackPlacements:Ee=g.Y_,arrowContainerClassName:ze,arrowElementClassName:Ie,disableSpanWrapper:Te=!1}=l,Ce=h(l,["className","triggerClassName","children","open","onOpenChange","placement","hasArrow","offset","popoverContent","trigger","outsideClick","hoverDelayOpen","hoverDelayClose","triggerRef","widthStrategy","heightStrategy","closeOnEscapeKey","triggerClickByKeys","fallbackPlacements","arrowContainerClassName","arrowElementClassName","disableSpanWrapper"]);const pe=(0,z.useRef)(null),[fe,De]=(0,u.iC)(H,!1,G),ye=(0,i.fI)(),be=P({triggerClassName:w,offsetProp:te}),ge=e(pe.current),{floatingStyles:Me,refs:le,context:ce,middlewareData:ue,placement:he}=(0,i.we)({nodeId:ye,placement:U,open:fe,onOpenChange:De,whileElementsMounted:_.ll,middleware:[(0,f.BN)(),(0,f.cY)(be+ge),se&&(0,f.UE)({element:pe,padding:(be+ge)*2}),(0,f.UU)({fallbackPlacements:Ee}),(0,f.Ej)({apply({rects:ae,availableHeight:ie}){const ne=le.floating.current;if(ne){switch(we){case g.cJ.Eq:ne.style.height=`${ie}px`;break;case g.cJ.Lte:ne.style.maxHeight=`${ie}px`;break;case g.cJ.Auto:default:break}switch(Ae){case g.Lw.Eq:ne.style.width=`${ae.reference.width}px`,ne.style.minWidth="0px";break;case g.Lw.Gte:ne.style.width="auto",ne.style.minWidth=`${ae.reference.width}px`;break;case g.Lw.Auto:default:ne.style.width="auto",ne.style.minWidth="auto"}}}}),(0,f.jD)()]}),Le=(0,z.useCallback)(ae=>{le.setReference(ae),ee&&(typeof ee=="function"?ee(ae):ee.current=ae)},[ee,le]),{useHoverTrigger:Be,useFocusTrigger:Re,useClickTrigger:We,keyboardOnly:Fe}=D(de),Ne=(0,i.s9)(ce,{outsidePress:je,ancestorScroll:!1,escapeKey:ke}),Ke=(0,i.Mk)(ce,{enabled:Be,handleClose:(0,i.iB)({requireIntent:!1}),delay:{open:Oe,close:Se}}),Ve=(0,i.iQ)(ce,{enabled:Re,visibleOnly:Fe}),He=(0,i.kp)(ce,{enabled:We,keyboardHandlers:Pe}),{getFloatingProps:Xe,getReferenceProps:me}=(0,i.bv)([Ne,Ke,Ve,He]),_e=(0,z.useCallback)((ae,ie)=>{typeof ee=="object"&&(ee!=null&&ee.current)&&(le.setReference(ee.current),Object.entries(ae).map(([ne,xe])=>{const ve=F(ne);ve&&(0,I.B)()&&(ie==="add"&&ee.current.addEventListener(ve,xe),ie==="remove"&&ee.current.removeEventListener(ve,xe))}))},[le,ee]);(0,z.useEffect)(()=>{if(O)return;const ae=V(me());return _e(ae,"add"),()=>_e(ae,"remove")},[O,_e,me]);const Ue=fe&&(0,n.jsx)(i.XF,{root:o(),children:(0,n.jsxs)("div",Object.assign({role:"presentation"},(0,C.z7)(Ce),{className:p()(c.floating,E,{[c.floatingHidden]:!!(!((b=ue.hide)===null||b===void 0)&&b.referenceHidden)}),ref:le.setFloating,style:Me,"data-placement":he},Xe({onClick:M,onMouseDown:M,onMouseUp:M,onTouchStart:L,onTouchEnd:L,onTouchMove:L}),{children:[re,ue.arrow&&(0,n.jsx)(N,{placement:he,x:ue.arrow.x,y:ue.arrow.y,arrowContainerClassName:ze,arrowElementClassName:Ie,arrowRef:pe})]}))},"portal");return(0,n.jsxs)(i.$c,{id:ye,children:[O&&a({validElementWrapperClassName:p()(w),getReferenceProps:me,children:O,setReference:Le,disableSpanWrapper:Te}),Ue]})}function y(l){var{children:b}=l,E=h(l,["children"]);return(0,i.R1)()===null?(0,n.jsx)(i.P6,{children:(0,n.jsx)(A,Object.assign({},E,{children:b}))}):(0,n.jsx)(A,Object.assign({},E,{children:b}))}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js":((S,m,t)=>{t.d(m,{El:()=>n,Lw:()=>_,Y_:()=>d,cJ:()=>f,tr:()=>i});const n={Left:"left",LeftStart:"left-start",LeftEnd:"left-end",Right:"right",RightStart:"right-start",RightEnd:"right-end",Top:"top",TopStart:"top-start",TopEnd:"top-end",Bottom:"bottom",BottomStart:"bottom-start",BottomEnd:"bottom-end"},i={Click:"click",Hover:"hover",FocusVisible:"focusVisible",Focus:"focus",HoverAndFocusVisible:"hoverAndFocusVisible",HoverAndFocus:"hoverAndFocus",ClickAndFocusVisible:"clickAndFocusVisible"},_={Auto:"auto",Gte:"gte",Eq:"eq"},f={Auto:"auto",Lte:"lte",Eq:"eq"},d=[n.Top,n.Right,n.Bottom,n.Left]}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((S,m,t)=>{t.d(m,{m:()=>W});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),f=t("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),d=t.n(f),p=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),z=t("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),u=t("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const I=c=>c?c.offsetHeight<c.scrollHeight||c.offsetWidth<c.scrollWidth:!1,C=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],g="...",s=({text:c,element:h,truncatedElement:A})=>{if(h&&A&&I(h)){const y=h.scrollWidth/c.length;let l=c;for(const{potentialDelimiterWidth:b,leftHalfDelta:E,rightHalfDelta:w}of C){const O=Math.floor((h.offsetWidth/y-b)/2),H=c.slice(0,O-E),G=c.slice(c.length-O+w,c.length);if(l=`${H}${g}${G}`,A.innerHTML=l,A.scrollWidth<=h.offsetWidth-1)break}return l}return c};var r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(e),D=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=t.n(D),L=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=t.n(L),K=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),V=t.n(K),N=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=t.n(N),P=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),x={};x.styleTagTransform=k(),x.setAttributes=F(),x.insert=M().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=V();var v=o()(P.A,x);const j=P.A&&P.A.locals?P.A.locals:void 0;var R=function(c,h){var A={};for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&h.indexOf(y)<0&&(A[y]=c[y]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,y=Object.getOwnPropertySymbols(c);l<y.length;l++)h.indexOf(y[l])<0&&Object.prototype.propertyIsEnumerable.call(c,y[l])&&(A[y[l]]=c[y[l]]);return A};function B(c){var{text:h,className:A,tooltipClassName:y,hideTooltip:l,placement:b}=c,E=R(c,["text","className","tooltipClassName","hideTooltip","placement"]);const[w,O]=(0,p.useState)(!1),[H,G]=(0,p.useState)(h),U=(0,p.useRef)(null),se=(0,p.useRef)(null);(0,p.useEffect)(()=>{const re=d()(()=>{G(s({element:U.current,truncatedElement:se.current,text:h})),O(I(U.current))},50);re();const de=new ResizeObserver(re);return U.current&&de.observe(U.current),()=>{de.disconnect()}},[w,h,l]);const te=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{ref:U,className:j.fullText,"data-test-id":"full-text",children:h}),(0,n.jsx)("span",{ref:se,className:j.truncatedText,"data-test-id":"truncated-text",children:H})]});return(0,n.jsx)("span",Object.assign({className:_()(j.wrapper,A)},(0,u.z7)(E),{children:w&&!l?(0,n.jsx)(z.m,{tip:h,placement:b,hoverDelayOpen:500,triggerClassName:j.textContainer,className:y,children:te}):te}))}var Y=t("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),Z=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),$={};$.styleTagTransform=k(),$.setAttributes=F(),$.insert=M().bind(null,"head"),$.domAPI=a(),$.insertStyleElement=V();var oe=o()(Z.A,$);const J=Z.A&&Z.A.locals?Z.A.locals:void 0;var Q=function(c,h){var A={};for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&h.indexOf(y)<0&&(A[y]=c[y]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,y=Object.getOwnPropertySymbols(c);l<y.length;l++)h.indexOf(y[l])<0&&Object.prototype.propertyIsEnumerable.call(c,y[l])&&(A[y[l]]=c[y[l]]);return A};function q(c){var{text:h,className:A,tooltipClassName:y,hideTooltip:l,maxLines:b=1,placement:E}=c,w=Q(c,["text","className","tooltipClassName","hideTooltip","maxLines","placement"]);const O=(0,p.useRef)(null),[H,G]=(0,p.useState)(!1),U=(0,p.useCallback)(()=>{G(I(O.current))},[]);(0,Y.N)(()=>{O.current&&U()},[h,U]),(0,p.useEffect)(()=>{const te=d()(()=>{U()},50),re=new ResizeObserver(te);return O.current&&(U(),re.observe(O.current)),()=>{re.disconnect()}},[H,l,U]);const se=(0,n.jsx)("span",Object.assign({ref:O,className:_()(b>1?J.text2AndMoreLines:J.text1Line,A,{[J.ellipsis]:!O.current||H}),style:{"--max-lines":b}},(0,u.z7)(w),{children:h}));return H&&!l?(0,n.jsx)(z.m,{tip:h,placement:E,hoverDelayOpen:500,className:y,triggerClassName:J.tooltipTrigger,children:se}):se}const T={Middle:"middle",End:"end"};var X=function(c,h){var A={};for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&h.indexOf(y)<0&&(A[y]=c[y]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,y=Object.getOwnPropertySymbols(c);l<y.length;l++)h.indexOf(y[l])<0&&Object.prototype.propertyIsEnumerable.call(c,y[l])&&(A[y[l]]=c[y[l]]);return A};function W(c){var{variant:h=T.End}=c,A=X(c,["variant"]);switch(h){case T.Middle:return(0,n.jsx)(B,Object.assign({},A));case T.End:default:return(0,n.jsx)(q,Object.assign({},A))}}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((S,m,t)=>{t.d(m,{z7:()=>z});const n=/^data-test-/,i=/^(data|aria)-/;function _(u,I){return Object.keys(u).filter(C=>!C.match(I)).reduce((C,g)=>Object.assign(Object.assign({},C),{[g]:u[g]}),{})}function f(u,I){return Object.keys(u).reduce((C,g)=>(g.match(I)&&(C[g]=u[g]),C),{})}function d(u){return _(u,i)}function p(u){return f(u,n)}function z(u){return f(u,i)}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js":((S,m,t)=>{t.d(m,{N:()=>_});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const _=(0,i.B)()?n.useLayoutEffect:n.useEffect}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((S,m,t)=>{t.d(m,{sg:()=>d,z7:()=>z});const n=/^data-test-/,i=/^(data|aria)-/;function _(u,I){return Object.keys(u).filter(C=>!C.match(I)).reduce((C,g)=>Object.assign(Object.assign({},C),{[g]:u[g]}),{})}function f(u,I){return Object.keys(u).reduce((C,g)=>(g.match(I)&&(C[g]=u[g]),C),{})}function d(u){return _(u,i)}function p(u){return f(u,n)}function z(u){return f(u,i)}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js":((S,m,t)=>{t.d(m,{B:()=>n});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/styles.module.css":((S,m,t)=>{t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(n),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=t.n(_),d=f()(i());d.push([S.id,`.alertTop--NjOq3{
  padding-top:var(--space-alert-top-container-vertical-padding, 8px);
  padding-bottom:var(--space-alert-top-container-vertical-padding, 8px);
  padding-left:var(--space-alert-top-container-horizontal-padding, 16px);
  padding-right:var(--space-alert-top-container-horizontal-padding, 16px);
  gap:var(--space-alert-top-container-gap, 16px);
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
}
.alertTop--NjOq3[data-color=invert-neutral]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.alertTop--NjOq3[data-color=primary]{
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.alertTop--NjOq3[data-color=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.alertTop--NjOq3[data-color=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.alertTop--NjOq3[data-color=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.alertTop--NjOq3[data-color=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}

.icon--BJHKt{
  display:flex;
  align-items:center;
  justify-content:center;
}
.icon--BJHKt[data-color=invert-neutral]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.icon--BJHKt[data-color=primary]{
  color:var(--sys-primary-on-accent, #fdfbff);
}
.icon--BJHKt[data-color=red]{
  color:var(--sys-red-on-accent, #fffbf9);
}
.icon--BJHKt[data-color=yellow]{
  color:var(--sys-yellow-on-accent, #583f1f);
}
.icon--BJHKt[data-color=green]{
  color:var(--sys-green-on-accent, #fcfefa);
}
.icon--BJHKt[data-color=blue]{
  color:var(--sys-blue-on-accent, #fdfeff);
}
.icon--BJHKt svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.title--_IIfo{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
}
.title--_IIfo[data-color=invert-neutral]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.title--_IIfo[data-color=primary]{
  color:var(--sys-primary-on-accent, #fdfbff);
}
.title--_IIfo[data-color=red]{
  color:var(--sys-red-on-accent, #fffbf9);
}
.title--_IIfo[data-color=yellow]{
  color:var(--sys-yellow-on-accent, #583f1f);
}
.title--_IIfo[data-color=green]{
  color:var(--sys-green-on-accent, #fcfefa);
}
.title--_IIfo[data-color=blue]{
  color:var(--sys-blue-on-accent, #fdfeff);
}

.description--soNqk{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  word-wrap:break-word;
}
.description--soNqk[data-color=invert-neutral]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.description--soNqk[data-color=primary]{
  color:var(--sys-primary-on-accent, #fdfbff);
}
.description--soNqk[data-color=red]{
  color:var(--sys-red-on-accent, #fffbf9);
}
.description--soNqk[data-color=yellow]{
  color:var(--sys-yellow-on-accent, #583f1f);
}
.description--soNqk[data-color=green]{
  color:var(--sys-green-on-accent, #fcfefa);
}
.description--soNqk[data-color=blue]{
  color:var(--sys-blue-on-accent, #fdfeff);
}

.contentWrapper--lOCSV{
  display:flex;
  gap:var(--dimension-2m, 16px);
  align-items:center;
  min-width:0;
}

.contentLayout--hwzK3{
  gap:var(--space-alert-top-container-content-layout-gap, 2px);
  display:flex;
  flex-direction:column;
  min-width:0;
}

.textLayout--VbHrm{
  overflow:hidden;
}

.actions--WIRVG{
  display:flex;
  gap:var(--dimension-2m, 16px);
  align-items:center;
}`,""]),d.locals={alertTop:"alertTop--NjOq3",icon:"icon--BJHKt",title:"title--_IIfo",description:"description--soNqk",contentWrapper:"contentWrapper--lOCSV",contentLayout:"contentLayout--hwzK3",textLayout:"textLayout--VbHrm",actions:"actions--WIRVG"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/helperComponents/styles.module.css":((S,m,t)=>{t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(n),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=t.n(_),d=f()(i());d.push([S.id,`.alertButton--FO0Pc{
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  margin:0;
  padding:0;
  white-space:nowrap;
  background:none;
  border:0;
}
.alertButton--FO0Pc .text--Wtpjn[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.alertButton--FO0Pc .text--Wtpjn[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.alertButton--FO0Pc .icon--DmfKT{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.alertButton--FO0Pc .icon--DmfKT svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.alertButton--FO0Pc[data-loading=true]{
  cursor:not-allowed;
}
.alertButton--FO0Pc[data-loading=true] > *{
  cursor:not-allowed;
}

.alertButton--FO0Pc[data-variant=simple][data-size=s]{
  height:var(--size-alert-button-m, 24px);
  gap:var(--space-alert-m-button-gap, 4px);
  border-radius:var(--radius-alert-button, 8px);
}
.alertButton--FO0Pc[data-variant=simple][data-size=s][data-icon-only]{
  height:var(--size-alert-button-s, 16px);
  width:var(--size-alert-button-s, 16px);
  border-radius:var(--radius-alert-button, 8px);
}
.alertButton--FO0Pc[data-variant=simple][data-size=m]{
  height:var(--size-alert-button-m, 24px);
  gap:var(--space-alert-m-button-gap, 4px);
  border-radius:var(--radius-alert-button, 8px);
}
.alertButton--FO0Pc[data-variant=simple][data-size=m][data-icon-only]{
  height:var(--size-alert-button-m, 24px);
  width:var(--size-alert-button-m, 24px);
  border-radius:var(--radius-alert-button, 8px);
}
.alertButton--FO0Pc[data-variant=simple]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=neutral]{
  color:var(--sys-neutral-text-support, #6d707f);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=neutral]:hover, .alertButton--FO0Pc[data-variant=simple][data-appearance=neutral]:focus-visible{
  color:var(--sys-neutral-text-main, #41424e);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=neutral]:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=primary]{
  color:var(--sys-primary-text-support, #5b4796);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=primary]:hover, .alertButton--FO0Pc[data-variant=simple][data-appearance=primary]:focus-visible{
  color:var(--sys-primary-text-main, #382a62);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=primary]:active{
  color:var(--sys-primary-text-main, #382a62);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=red]{
  color:var(--sys-red-text-support, #ae514c);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=red]:hover, .alertButton--FO0Pc[data-variant=simple][data-appearance=red]:focus-visible{
  color:var(--sys-red-text-main, #7a2d2d);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=red]:active{
  color:var(--sys-red-text-main, #7a2d2d);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=yellow]{
  color:var(--sys-yellow-text-support, #b78c32);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=yellow]:hover, .alertButton--FO0Pc[data-variant=simple][data-appearance=yellow]:focus-visible{
  color:var(--sys-yellow-text-main, #815f19);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=yellow]:active{
  color:var(--sys-yellow-text-main, #815f19);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=green]{
  color:var(--sys-green-text-support, #55915a);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=green]:hover, .alertButton--FO0Pc[data-variant=simple][data-appearance=green]:focus-visible{
  color:var(--sys-green-text-main, #3d6035);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=green]:active{
  color:var(--sys-green-text-main, #3d6035);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=blue]{
  color:var(--sys-blue-text-support, #4877b0);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=blue]:hover, .alertButton--FO0Pc[data-variant=simple][data-appearance=blue]:focus-visible{
  color:var(--sys-blue-text-main, #2b537e);
}
.alertButton--FO0Pc[data-variant=simple][data-appearance=blue]:active{
  color:var(--sys-blue-text-main, #2b537e);
}

.alertButton--FO0Pc[data-variant=tonal]{
  height:var(--size-alert-top-button, 32px);
  gap:var(--space-alert-top-button-gap, 4px);
  border-radius:var(--radius-alert-top-button, 12px);
  padding-left:var(--space-alert-top-button-horizontal-padding, 12px);
  padding-right:var(--space-alert-top-button-horizontal-padding, 12px);
  background:var(--sys-opacity-enabled, rgba(255, 255, 255, 0.1607843137));
}
.alertButton--FO0Pc[data-variant=tonal][data-icon-only]{
  border-radius:var(--radius-alert-top-button, 12px);
  height:var(--size-alert-top-button, 32px);
  width:var(--size-alert-top-button, 32px);
  background:none;
}
.alertButton--FO0Pc[data-variant=tonal]:hover{
  opacity:unset;
  background-color:var(--sys-opacity-hovered, rgba(255, 255, 255, 0.2392156863));
}
.alertButton--FO0Pc[data-variant=tonal]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  background-color:var(--sys-opacity-hovered, rgba(255, 255, 255, 0.2392156863));
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.alertButton--FO0Pc[data-variant=tonal]:active{
  background-color:var(--sys-opacity-activated, rgba(255, 255, 255, 0.3215686275));
}
.alertButton--FO0Pc[data-variant=tonal][data-appearance=invert-neutral]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.alertButton--FO0Pc[data-variant=tonal][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fdfbff);
}
.alertButton--FO0Pc[data-variant=tonal][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
}
.alertButton--FO0Pc[data-variant=tonal][data-appearance=yellow]{
  color:var(--sys-yellow-on-accent, #583f1f);
}
.alertButton--FO0Pc[data-variant=tonal][data-appearance=green]{
  color:var(--sys-green-on-accent, #fcfefa);
}
.alertButton--FO0Pc[data-variant=tonal][data-appearance=blue]{
  color:var(--sys-blue-on-accent, #fdfeff);
}`,""]),d.locals={alertButton:"alertButton--FO0Pc",text:"text--Wtpjn",icon:"icon--DmfKT"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((S,m,t)=>{t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(n),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=t.n(_),d=f()(i());d.push([S.id,`.avatar--ARVj9{
  position:relative;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.avatar--ARVj9[data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.avatar--ARVj9[data-appearance=orange]{
  color:var(--sys-orange-text-main, #884c23);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.avatar--ARVj9[data-appearance=yellow]{
  color:var(--sys-yellow-text-main, #815f19);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.avatar--ARVj9[data-appearance=green]{
  color:var(--sys-green-text-main, #3d6035);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.avatar--ARVj9[data-appearance=blue]{
  color:var(--sys-blue-text-main, #2b537e);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.avatar--ARVj9[data-appearance=violet]{
  color:var(--sys-violet-text-main, #59446a);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.avatar--ARVj9[data-appearance=pink]{
  color:var(--sys-pink-text-main, #754158);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.avatar--ARVj9[data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.avatar--ARVj9[data-size=xxs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--ARVj9[data-size=xxs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxs, 8px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--ARVj9[data-size=xxs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxs, 4px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--ARVj9[data-size=xs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--ARVj9[data-size=xs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xs, 16px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--ARVj9[data-size=xs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xs, 4px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--ARVj9[data-size=s]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.avatar--ARVj9[data-size=s][data-shape=round]{
  border-radius:var(--radius-avatar-round-s, 24px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--ARVj9[data-size=s][data-shape=square]{
  border-radius:var(--radius-avatar-square-s, 4px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--ARVj9[data-size=m]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.avatar--ARVj9[data-size=m][data-shape=round]{
  border-radius:var(--radius-avatar-round-m, 24px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--ARVj9[data-size=m][data-shape=square]{
  border-radius:var(--radius-avatar-square-m, 8px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--ARVj9[data-size=l]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.avatar--ARVj9[data-size=l][data-shape=round]{
  border-radius:var(--radius-avatar-round-l, 32px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--ARVj9[data-size=l][data-shape=square]{
  border-radius:var(--radius-avatar-square-l, 12px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--ARVj9[data-size=xl]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.avatar--ARVj9[data-size=xl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xl, 48px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--ARVj9[data-size=xl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xl, 16px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--ARVj9[data-size=xxl]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.avatar--ARVj9[data-size=xxl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxl, 64px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}
.avatar--ARVj9[data-size=xxl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxl, 20px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}

.image--jWIVW{
  width:100%;
  height:100%;
  -o-object-fit:cover;
     object-fit:cover;
  -o-object-position:center;
     object-position:center;
  border-radius:inherit;
}

.indicatorWrapper--mfeLu{
  position:absolute;
  right:0;
  bottom:0;
  display:inline-flex;
}`,""]),d.locals={avatar:"avatar--ARVj9",image:"image--jWIVW",indicatorWrapper:"indicatorWrapper--mfeLu"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css":((S,m,t)=>{t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(n),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=t.n(_),d=f()(i());d.push([S.id,`.button--n3vAI[data-size=xs] .label--qV8ML{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.button--n3vAI[data-size=xs] .icon--KODKN{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--n3vAI[data-size=xs] .icon--KODKN svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--n3vAI[data-size=xs][data-variant=label-only]{
  height:var(--size-button-xs, 24px);
  gap:var(--space-button-xs-gap, 2px);
  border-radius:var(--radius-button-xs, 4px);
}
.button--n3vAI[data-size=xs][data-variant=icon-only]{
  height:var(--size-button-xs, 24px);
  width:var(--size-button-xs, 24px);
  border-radius:var(--radius-button-xs, 4px);
}
.button--n3vAI[data-size=xs][data-variant=icon-after]{
  height:var(--size-button-xs, 24px);
  gap:var(--space-button-xs-gap, 2px);
  border-radius:var(--radius-button-xs, 4px);
}
.button--n3vAI[data-size=xs][data-variant=icon-before]{
  height:var(--size-button-xs, 24px);
  gap:var(--space-button-xs-gap, 2px);
  border-radius:var(--radius-button-xs, 4px);
}
.button--n3vAI[data-size=s] .label--qV8ML{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.button--n3vAI[data-size=s] .icon--KODKN{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--n3vAI[data-size=s] .icon--KODKN svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--n3vAI[data-size=s][data-variant=label-only]{
  height:var(--size-button-s, 32px);
  gap:var(--space-button-s-gap, 4px);
  border-radius:var(--radius-button-s, 4px);
}
.button--n3vAI[data-size=s][data-variant=icon-only]{
  height:var(--size-button-s, 32px);
  width:var(--size-button-s, 32px);
  border-radius:var(--radius-button-s, 4px);
}
.button--n3vAI[data-size=s][data-variant=icon-after]{
  height:var(--size-button-s, 32px);
  gap:var(--space-button-s-gap, 4px);
  border-radius:var(--radius-button-s, 4px);
}
.button--n3vAI[data-size=s][data-variant=icon-before]{
  height:var(--size-button-s, 32px);
  gap:var(--space-button-s-gap, 4px);
  border-radius:var(--radius-button-s, 4px);
}
.button--n3vAI[data-size=m] .label--qV8ML{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.button--n3vAI[data-size=m] .icon--KODKN{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--n3vAI[data-size=m] .icon--KODKN svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--n3vAI[data-size=m][data-variant=label-only]{
  height:var(--size-button-m, 40px);
  gap:var(--space-button-m-gap, 4px);
  border-radius:var(--radius-button-m, 4px);
}
.button--n3vAI[data-size=m][data-variant=icon-only]{
  height:var(--size-button-m, 40px);
  width:var(--size-button-m, 40px);
  border-radius:var(--radius-button-m, 4px);
}
.button--n3vAI[data-size=m][data-variant=icon-after]{
  height:var(--size-button-m, 40px);
  gap:var(--space-button-m-gap, 4px);
  border-radius:var(--radius-button-m, 4px);
}
.button--n3vAI[data-size=m][data-variant=icon-before]{
  height:var(--size-button-m, 40px);
  gap:var(--space-button-m-gap, 4px);
  border-radius:var(--radius-button-m, 4px);
}
.button--n3vAI[data-size=l] .label--qV8ML{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.button--n3vAI[data-size=l] .icon--KODKN{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--n3vAI[data-size=l] .icon--KODKN svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--n3vAI[data-size=l][data-variant=label-only]{
  height:var(--size-button-l, 48px);
  gap:var(--space-button-l-gap, 4px);
  border-radius:var(--radius-button-l, 4px);
}
.button--n3vAI[data-size=l][data-variant=icon-only]{
  height:var(--size-button-l, 48px);
  width:var(--size-button-l, 48px);
  border-radius:var(--radius-button-l, 4px);
}
.button--n3vAI[data-size=l][data-variant=icon-after]{
  height:var(--size-button-l, 48px);
  gap:var(--space-button-l-gap, 4px);
  border-radius:var(--radius-button-l, 4px);
}
.button--n3vAI[data-size=l][data-variant=icon-before]{
  height:var(--size-button-l, 48px);
  gap:var(--space-button-l-gap, 4px);
  border-radius:var(--radius-button-l, 4px);
}
.button--n3vAI[data-loading][data-variant=label-only] .icon--KODKN{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
.button--n3vAI[data-loading][data-variant=label-only] .label--qV8ML{
  opacity:var(--opacity-a0, 0);
}
.button--n3vAI .label--qV8ML{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.button--n3vAI .icon--KODKN{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.button--n3vAI[data-appearance=primary] .label--qV8ML{
  color:var(--sys-primary-accent-default, #389f74);
}
.button--n3vAI[data-appearance=primary] .icon--KODKN{
  color:var(--sys-primary-accent-default, #389f74);
}
@media (hover: hover){
  .button--n3vAI[data-appearance=primary]:hover .label--qV8ML{
    color:var(--sys-primary-accent-hovered, #37946e);
  }
  .button--n3vAI[data-appearance=primary]:hover .icon--KODKN{
    color:var(--sys-primary-accent-hovered, #37946e);
  }
}
@media (hover: none) or (hover: hover){
  .button--n3vAI[data-appearance=primary]:focus-visible .label--qV8ML{
    color:var(--sys-primary-accent-hovered, #37946e);
  }
  .button--n3vAI[data-appearance=primary]:focus-visible .icon--KODKN{
    color:var(--sys-primary-accent-hovered, #37946e);
  }
  .button--n3vAI[data-appearance=primary]:active .label--qV8ML{
    color:var(--sys-primary-accent-pressed, #358561);
  }
  .button--n3vAI[data-appearance=primary]:active .icon--KODKN{
    color:var(--sys-primary-accent-pressed, #358561);
  }
  .button--n3vAI[data-appearance=primary][data-loading] .label--qV8ML{
    color:var(--sys-primary-accent-pressed, #358561);
  }
  .button--n3vAI[data-appearance=primary][data-loading] .icon--KODKN{
    color:var(--sys-primary-accent-pressed, #358561);
  }
  .button--n3vAI[data-appearance=primary]:disabled .label--qV8ML, .button--n3vAI[data-appearance=primary][data-disabled] .label--qV8ML{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
  .button--n3vAI[data-appearance=primary]:disabled .icon--KODKN, .button--n3vAI[data-appearance=primary][data-disabled] .icon--KODKN{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
}
@media (hover: hover){
  .button--n3vAI[data-appearance=neutral]:hover .label--qV8ML{
    color:var(--sys-neutral-accent-hovered, #6d707f);
  }
  .button--n3vAI[data-appearance=neutral]:hover .icon--KODKN{
    color:var(--sys-neutral-accent-hovered, #6d707f);
  }
}
@media (hover: none) or (hover: hover){
  .button--n3vAI[data-appearance=neutral]:focus-visible .label--qV8ML{
    color:var(--sys-neutral-accent-hovered, #6d707f);
  }
  .button--n3vAI[data-appearance=neutral]:focus-visible .icon--KODKN{
    color:var(--sys-neutral-accent-hovered, #6d707f);
  }
  .button--n3vAI[data-appearance=neutral]:active .label--qV8ML{
    color:var(--sys-neutral-accent-pressed, #656774);
  }
  .button--n3vAI[data-appearance=neutral]:active .icon--KODKN{
    color:var(--sys-neutral-accent-pressed, #656774);
  }
  .button--n3vAI[data-appearance=neutral][data-loading] .label--qV8ML{
    color:var(--sys-neutral-accent-pressed, #656774);
  }
  .button--n3vAI[data-appearance=neutral][data-loading] .icon--KODKN{
    color:var(--sys-neutral-accent-pressed, #656774);
  }
  .button--n3vAI[data-appearance=neutral]:disabled .label--qV8ML, .button--n3vAI[data-appearance=neutral][data-disabled] .label--qV8ML{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
  .button--n3vAI[data-appearance=neutral]:disabled .icon--KODKN, .button--n3vAI[data-appearance=neutral][data-disabled] .icon--KODKN{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
}
@media (hover: hover){
  .button--n3vAI[data-appearance=red]:hover .label--qV8ML{
    color:var(--sys-red-accent-hovered, #bd4844);
  }
  .button--n3vAI[data-appearance=red]:hover .icon--KODKN{
    color:var(--sys-red-accent-hovered, #bd4844);
  }
}
@media (hover: none) or (hover: hover){
  .button--n3vAI[data-appearance=red]:focus-visible .label--qV8ML{
    color:var(--sys-red-accent-hovered, #bd4844);
  }
  .button--n3vAI[data-appearance=red]:focus-visible .icon--KODKN{
    color:var(--sys-red-accent-hovered, #bd4844);
  }
  .button--n3vAI[data-appearance=red]:active .label--qV8ML{
    color:var(--sys-red-accent-pressed, #ae514c);
  }
  .button--n3vAI[data-appearance=red]:active .icon--KODKN{
    color:var(--sys-red-accent-pressed, #ae514c);
  }
  .button--n3vAI[data-appearance=red][data-loading] .label--qV8ML{
    color:var(--sys-red-accent-pressed, #ae514c);
  }
  .button--n3vAI[data-appearance=red][data-loading] .icon--KODKN{
    color:var(--sys-red-accent-pressed, #ae514c);
  }
  .button--n3vAI[data-appearance=red]:disabled .label--qV8ML, .button--n3vAI[data-appearance=red][data-disabled] .label--qV8ML{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
  .button--n3vAI[data-appearance=red]:disabled .icon--KODKN, .button--n3vAI[data-appearance=red][data-disabled] .icon--KODKN{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
}
.button--n3vAI[data-appearance=primary]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--n3vAI[data-appearance=neutral]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--n3vAI[data-appearance=red]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--n3vAI:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.button--n3vAI:focus-visible{
  outline-offset:0;
}`,""]),d.locals={button:"button--n3vAI",label:"label--qV8ML",icon:"icon--KODKN"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css":((S,m,t)=>{t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(n),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=t.n(_),d=f()(i());d.push([S.id,`.horizontal--BAWtQ{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  width:100%;
}
.horizontal--BAWtQ[data-weight=regular]{
  height:1px;
}
.horizontal--BAWtQ[data-weight=light]{
  height:0.5px;
}

.vertical--Os_1s{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  height:100%;
}
.vertical--Os_1s[data-weight=regular]{
  width:1px;
}
.vertical--Os_1s[data-weight=light]{
  width:0.5px;
}`,""]),d.locals={horizontal:"horizontal--BAWtQ",vertical:"vertical--Os_1s"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.4.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css":((S,m,t)=>{t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(n),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=t.n(_),d=f()(i());d.push([S.id,`.dropdownContainer--YMHDp{
  padding-top:var(--space-drop-list-container-vertical-padding, 8px);
  padding-bottom:var(--space-drop-list-container-vertical-padding, 8px);
  border-radius:var(--radius-drop-list-container, 8px);
  overflow:hidden;
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  box-shadow:var(--box-shadow-elevation-level3, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 8px 16px 0px rgba(0, 0, 0, 0.0784313725));
}

.defaultTriggerClassName--e5ivY{
  --offset:var(--space-drop-list-drop-offset, 4px);
}`,""]),d.locals={dropdownContainer:"dropdownContainer--YMHDp",defaultTriggerClassName:"defaultTriggerClassName--e5ivY"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((S,m,t)=>{t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(n),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=t.n(_),d=f()(i());d.push([S.id,`.sun--oC6I4{
  pointer-events:none;
  fill:currentColor;
}
.sun--oC6I4[data-size=xs]{
  width:var(--size-loader-loader-xs, 16px);
  height:var(--size-loader-loader-xs, 16px);
}
.sun--oC6I4[data-size=s]{
  width:var(--size-loader-loader-s, 24px);
  height:var(--size-loader-loader-s, 24px);
}
.sun--oC6I4[data-size=m]{
  width:var(--size-loader-loader-m, 48px);
  height:var(--size-loader-loader-m, 48px);
}
.sun--oC6I4[data-size=l]{
  width:var(--size-loader-loader-l, 72px);
  height:var(--size-loader-loader-l, 72px);
}
.sun--oC6I4 > path{
  stroke:currentColor;
  animation-name:loading-wheel--YnKg9;
  animation-timing-function:linear;
  animation-iteration-count:infinite;
}
.sun--oC6I4 > path:nth-child(1){
  animation-duration:1000ms;
  animation-delay:-125ms;
}
.sun--oC6I4 > path:nth-child(2){
  animation-duration:1000ms;
  animation-delay:-250ms;
}
.sun--oC6I4 > path:nth-child(3){
  animation-duration:1000ms;
  animation-delay:-375ms;
}
.sun--oC6I4 > path:nth-child(4){
  animation-duration:1000ms;
  animation-delay:-500ms;
}
.sun--oC6I4 > path:nth-child(5){
  animation-duration:1000ms;
  animation-delay:-625ms;
}
.sun--oC6I4 > path:nth-child(6){
  animation-duration:1000ms;
  animation-delay:-750ms;
}
.sun--oC6I4 > path:nth-child(7){
  animation-duration:1000ms;
  animation-delay:-875ms;
}
.sun--oC6I4 > path:nth-child(8){
  animation-duration:1000ms;
  animation-delay:-1000ms;
}

@keyframes loading-wheel--YnKg9{
  0%{
    opacity:1;
  }
  90%{
    opacity:0.125;
  }
  100%{
    opacity:1;
  }
}`,""]),d.locals={sun:"sun--oC6I4","loading-wheel":"loading-wheel--YnKg9"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((S,m,t)=>{t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(n),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=t.n(_),d=f()(i());d.push([S.id,`.sun--Mw8Oo{
  pointer-events:none;
  fill:currentColor;
}
.sun--Mw8Oo[data-size=xs]{
  width:var(--size-loader-loader-xs, 16px);
  height:var(--size-loader-loader-xs, 16px);
}
.sun--Mw8Oo[data-size=s]{
  width:var(--size-loader-loader-s, 24px);
  height:var(--size-loader-loader-s, 24px);
}
.sun--Mw8Oo[data-size=m]{
  width:var(--size-loader-loader-m, 48px);
  height:var(--size-loader-loader-m, 48px);
}
.sun--Mw8Oo[data-size=l]{
  width:var(--size-loader-loader-l, 72px);
  height:var(--size-loader-loader-l, 72px);
}
.sun--Mw8Oo > path{
  stroke:currentColor;
  animation-name:loading-wheel--wXeN0;
  animation-timing-function:linear;
  animation-iteration-count:infinite;
}
.sun--Mw8Oo > path:nth-child(1){
  animation-duration:1000ms;
  animation-delay:-125ms;
}
.sun--Mw8Oo > path:nth-child(2){
  animation-duration:1000ms;
  animation-delay:-250ms;
}
.sun--Mw8Oo > path:nth-child(3){
  animation-duration:1000ms;
  animation-delay:-375ms;
}
.sun--Mw8Oo > path:nth-child(4){
  animation-duration:1000ms;
  animation-delay:-500ms;
}
.sun--Mw8Oo > path:nth-child(5){
  animation-duration:1000ms;
  animation-delay:-625ms;
}
.sun--Mw8Oo > path:nth-child(6){
  animation-duration:1000ms;
  animation-delay:-750ms;
}
.sun--Mw8Oo > path:nth-child(7){
  animation-duration:1000ms;
  animation-delay:-875ms;
}
.sun--Mw8Oo > path:nth-child(8){
  animation-duration:1000ms;
  animation-delay:-1000ms;
}

@keyframes loading-wheel--wXeN0{
  0%{
    opacity:1;
  }
  90%{
    opacity:0.125;
  }
  100%{
    opacity:1;
  }
}`,""]),d.locals={sun:"sun--Mw8Oo","loading-wheel":"loading-wheel--wXeN0"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css":((S,m,t)=>{t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(n),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=t.n(_),d=f()(i());d.push([S.id,`.floating--zdZE3{
  display:flex;
  flex-direction:column;
}

.floatingHidden--fLsvv{
  display:none;
}`,""]),d.locals={floating:"floating--zdZE3",floatingHidden:"floatingHidden--fLsvv"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((S,m,t)=>{t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(n),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=t.n(_),d=f()(i());d.push([S.id,`.container--LWxw3{
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.container--LWxw3[data-size=xxs]{
  width:var(--size-status-indicator-container-xxs, 4px);
  height:var(--size-status-indicator-container-xxs, 4px);
}
.container--LWxw3[data-size=xxs] .indicator--w2F9H{
  border-radius:var(--radius-status-indicator-xxs, 2px);
  border-width:var(--border-width-general-xxs, 0.5px);
  width:var(--size-status-indicator-xxs, 4px);
  height:var(--size-status-indicator-xxs, 4px);
}
.container--LWxw3[data-size=xs]{
  width:var(--size-status-indicator-container-xs, 8px);
  height:var(--size-status-indicator-container-xs, 8px);
}
.container--LWxw3[data-size=xs] .indicator--w2F9H{
  border-radius:var(--radius-status-indicator-xs, 4px);
  border-width:var(--border-width-general-s, 1.5px);
  width:var(--size-status-indicator-xs, 8px);
  height:var(--size-status-indicator-xs, 8px);
}
.container--LWxw3[data-size=s]{
  width:var(--size-status-indicator-container-s, 16px);
  height:var(--size-status-indicator-container-s, 16px);
}
.container--LWxw3[data-size=s] .indicator--w2F9H{
  border-radius:var(--radius-status-indicator-s, 8px);
  border-width:var(--border-width-general-m, 2px);
  width:var(--size-status-indicator-s, 12px);
  height:var(--size-status-indicator-s, 12px);
}
.container--LWxw3[data-size=m]{
  width:var(--size-status-indicator-container-m, 16px);
  height:var(--size-status-indicator-container-m, 16px);
}
.container--LWxw3[data-size=m] .indicator--w2F9H{
  border-radius:var(--radius-status-indicator-m, 8px);
  border-width:var(--border-width-general-l, 3px);
  width:var(--size-status-indicator-m, 16px);
  height:var(--size-status-indicator-m, 16px);
}
.container--LWxw3[data-size=l]{
  width:var(--size-status-indicator-container-l, 24px);
  height:var(--size-status-indicator-container-l, 24px);
}
.container--LWxw3[data-size=l] .indicator--w2F9H{
  border-radius:var(--radius-status-indicator-l, 16px);
  border-width:var(--border-width-general-xl, 4px);
  width:var(--size-status-indicator-l, 24px);
  height:var(--size-status-indicator-l, 24px);
}

.indicator--w2F9H{
  box-sizing:border-box;
  border:0 solid var(--sys-neutral-background1-level, #fdfdfd);
}
.indicator--w2F9H[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.indicator--w2F9H[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.indicator--w2F9H[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.indicator--w2F9H[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.indicator--w2F9H[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.indicator--w2F9H[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.indicator--w2F9H[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.indicator--w2F9H[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.indicator--w2F9H[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),d.locals={container:"container--LWxw3",indicator:"indicator--w2F9H"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((S,m,t)=>{t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(n),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=t.n(_),d=f()(i());d.push([S.id,`.text1Line--FqBXb{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--Z6AY6{
  text-overflow:ellipsis;
}

.text2AndMoreLines--xbsHF{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--pvUWx{
  display:grid;
}`,""]),d.locals={text1Line:"text1Line--FqBXb",ellipsis:"ellipsis--Z6AY6",text2AndMoreLines:"text2AndMoreLines--xbsHF",tooltipTrigger:"tooltipTrigger--pvUWx"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((S,m,t)=>{t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(n),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=t.n(_),d=f()(i());d.push([S.id,`.wrapper--rkL6A{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--QcECJ{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--sBn3t{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--x4Ois{
  display:inline-flex;
}`,""]),d.locals={wrapper:"wrapper--rkL6A",truncatedText:"truncatedText--QcECJ",fullText:"fullText--sBn3t",textContainer:"textContainer--x4Ois"};const p=d}),"./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js":((S,m,t)=>{t.d(m,{A:()=>n});function n(){for(var i=[],_=0;_<arguments.length;_++)i[_]=arguments[_];var f=i.filter(Boolean);if(f.length<=1){var d=f[0];return d||null}return function(z){f.forEach(function(u){typeof u=="function"?u(z):u&&(u.current=z)})}}})}]);})();
