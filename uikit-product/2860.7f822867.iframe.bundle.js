"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2860],{"./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/AlertTop.js":((j,m,t)=>{t.d(m,{W:()=>h});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),v=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),d=t("./node_modules/.pnpm/@snack-uikit+link@0.17.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/Link.js"),p=t("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),z=t("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const c={Neutral:"neutral",Primary:"primary",Error:"error",Warning:"warning",Success:"success",Info:"info"},k={S:"s",M:"m"},C={[c.Neutral]:"neutral",[c.Primary]:"primary",[c.Error]:"red",[c.Warning]:"yellow",[c.Success]:"green",[c.Info]:"blue"},y={[c.Neutral]:"primary",[c.Primary]:"primary",[c.Error]:"red",[c.Warning]:"yellow",[c.Success]:"green",[c.Info]:"blue"};var s=t("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js"),r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(e),D=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=t.n(D),L=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=t.n(L),K=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),V=t.n(K),N=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),P=t.n(N),E=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/helperComponents/styles.module.css"),x={};x.styleTagTransform=P(),x.setAttributes=F(),x.insert=M().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=V();var f=n()(E.A,x);const O=E.A&&E.A.locals?E.A.locals:void 0;function R({appearance:w,text:b,icon:l,onClick:g,variant:I="simple",dataTestId:A,loading:S=!1,size:H="s"}){return(0,o.jsxs)("button",{type:"button",onClick:g,className:O.alertButton,"data-variant":I,"data-appearance":w,"data-test-id":A||"alert__action-button","data-icon-only":!b||void 0,"data-loading":S,"data-size":H,children:[b&&(0,o.jsx)("span",{className:O.text,"data-size":H,children:b}),l&&(S?(0,o.jsx)(s.b,{size:"s"}):(0,o.jsx)("span",{className:O.icon,children:l}))]})}var B=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),Y=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),Z=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),$=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js");function oe(w,b){switch(w){case c.Success:return(0,o.jsx)(B.A,{size:b});case c.Error:return(0,o.jsx)(Y.A,{size:b});case c.Warning:return(0,o.jsx)(Z.A,{size:b});case c.Primary:case c.Neutral:default:return(0,o.jsx)($.A,{size:b})}}const J={InvertNeutral:"invert-neutral",Primary:"primary",Red:"red",Yellow:"yellow",Green:"green",Blue:"blue"},Q={[c.Neutral]:J.InvertNeutral,[c.Primary]:J.Primary,[c.Error]:J.Red,[c.Warning]:J.Yellow,[c.Success]:J.Green,[c.Info]:J.Blue};var q=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/styles.module.css"),T={};T.styleTagTransform=P(),T.setAttributes=F(),T.insert=M().bind(null,"head"),T.domAPI=a(),T.insertStyleElement=V();var X=n()(q.A,T);const W=q.A&&q.A.locals?q.A.locals:void 0;var u=function(w,b){var l={};for(var g in w)Object.prototype.hasOwnProperty.call(w,g)&&b.indexOf(g)<0&&(l[g]=w[g]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var I=0,g=Object.getOwnPropertySymbols(w);I<g.length;I++)b.indexOf(g[I])<0&&Object.prototype.propertyIsEnumerable.call(w,g[I])&&(l[g[I]]=w[g[I]]);return l};function h(w){var b,{icon:l=!0,title:g,description:I,link:A,onClose:S,truncate:H,appearance:G=c.Neutral,action:U,className:se}=w,te=u(w,["icon","title","description","link","onClose","truncate","appearance","action","className"]);return(0,o.jsxs)("div",Object.assign({className:_()(W.alertTop,se)},(0,z.z7)(te),{"data-color":Q[G],children:[(0,o.jsxs)("div",{className:W.contentWrapper,children:[l&&(0,o.jsx)("div",{className:W.icon,"data-color":Q[G],"data-test-id":"alert-top__icon",children:oe(G,24)}),(0,o.jsxs)("div",{className:W.contentLayout,children:[(0,o.jsxs)("div",{className:W.textLayout,children:[g&&(0,o.jsx)("div",{className:W.title,"data-color":Q[G],"data-test-id":"alert-top__title",children:(0,o.jsx)(p.m,{text:g,maxLines:(b=H==null?void 0:H.title)!==null&&b!==void 0?b:1})}),(0,o.jsx)("span",{className:W.description,"data-color":Q[G],"data-test-id":"alert-top__description",children:I})]}),A&&(0,o.jsx)("span",{children:(0,o.jsx)(d.N,Object.assign({},A,{appearance:C[G],textMode:"on-accent",size:"m","data-test-id":"alert-top__link"}))})]})]}),(0,o.jsxs)("div",{className:W.actions,children:[U&&(0,o.jsx)(R,Object.assign({},U,{appearance:Q[G],variant:"tonal"})),S&&(0,o.jsx)(R,{onClick:S,appearance:Q[G],icon:(0,o.jsx)(v.A,{}),variant:"tonal",dataTestId:"alert-top__close-button"})]})]}))}}),"./node_modules/.pnpm/@snack-uikit+avatar@0.8.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((j,m,t)=>{t.d(m,{e:()=>q});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),v=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const p={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},z={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var c=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=t.n(c),C=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),y=t.n(C),s=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),r=t.n(s),n=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),e=t.n(n),a=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=t.n(a),M=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=t.n(M),F=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),K={};K.styleTagTransform=L(),K.setAttributes=e(),K.insert=r().bind(null,"head"),K.domAPI=y(),K.insertStyleElement=D();var V=k()(F.A,K);const N=F.A&&F.A.locals?F.A.locals:void 0;var P=function(T,X){var W={};for(var u in T)Object.prototype.hasOwnProperty.call(T,u)&&X.indexOf(u)<0&&(W[u]=T[u]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,u=Object.getOwnPropertySymbols(T);h<u.length;h++)X.indexOf(u[h])<0&&Object.prototype.propertyIsEnumerable.call(T,u[h])&&(W[u[h]]=T[u[h]]);return W};function E(T){var{size:X=z.M,appearance:W=p.Primary,className:u}=T,h=P(T,["size","appearance","className"]);return(0,o.jsx)("div",Object.assign({className:_()(N.container,u)},(0,d.z7)(h),{"data-size":X,children:(0,o.jsx)("div",{className:N.indicator,"data-appearance":W})}))}const x={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},f={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},O={Round:"round",Square:"square"};var R=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),B={};B.styleTagTransform=L(),B.setAttributes=e(),B.insert=r().bind(null,"head"),B.domAPI=y(),B.insertStyleElement=D();var Y=k()(R.A,B);const Z=R.A&&R.A.locals?R.A.locals:void 0,$=" ",oe=(T,X)=>{var W;const u=T.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!u||u.length<X)return u.toUpperCase();const h=u.split($);let w=u;if(h.length>1){const b=h[0].charAt(0),l=(W=h[h.length-1])===null||W===void 0?void 0:W.charAt(0);w=`${b}${l}`.toUpperCase()}return w.slice(0,X).toUpperCase()};var J=function(T,X){var W={};for(var u in T)Object.prototype.hasOwnProperty.call(T,u)&&X.indexOf(u)<0&&(W[u]=T[u]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,u=Object.getOwnPropertySymbols(T);h<u.length;h++)X.indexOf(u[h])<0&&Object.prototype.propertyIsEnumerable.call(T,u[h])&&(W[u[h]]=T[u[h]]);return W};const Q={[f.Xxs]:"xxs",[f.Xs]:"xs",[f.S]:"xs",[f.M]:"m",[f.L]:"m",[f.Xl]:"l",[f.Xxl]:"l"};function q(T){var{name:X,appearance:W=x.Red,size:u=f.S,shape:h=O.Round,indicator:w,showTwoSymbols:b,src:l,className:g}=T,I=J(T,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[A,S]=(0,v.useState)(!1),H=u!==f.Xxs&&b?2:1;return(0,v.useEffect)(()=>{S(!1)},[l]),(0,o.jsxs)("div",Object.assign({className:_()(Z.avatar,g)},(0,d.z7)(I),{"data-size":u,"data-appearance":W,"data-shape":h,children:[l&&!A?(0,o.jsx)("img",{"data-test-id":"image",className:Z.image,src:l,onError:()=>S(!0),alt:""}):(0,o.jsx)("div",{"data-test-id":"abbreviation",children:oe(X,H)}),w&&(0,o.jsx)("div",{className:Z.indicatorWrapper,children:(0,o.jsx)(E,{"data-test-id":"indicator",appearance:w,size:Q[u]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js":((j,m,t)=>{t.d(m,{b:()=>x});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),v=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),p=t("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),z=t("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js"),c=t("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js"),k=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=t.n(k),y=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=t.n(y),r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),n=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),a=t.n(e),D=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=t.n(D),L=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),F=t.n(L),K=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css"),V={};V.styleTagTransform=F(),V.setAttributes=a(),V.insert=n().bind(null,"head"),V.domAPI=s(),V.insertStyleElement=M();var N=C()(K.A,V);const P=K.A&&K.A.locals?K.A.locals:void 0;var E=function(f,O){var R={};for(var B in f)Object.prototype.hasOwnProperty.call(f,B)&&O.indexOf(B)<0&&(R[B]=f[B]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Y=0,B=Object.getOwnPropertySymbols(f);Y<B.length;Y++)O.indexOf(B[Y])<0&&Object.prototype.propertyIsEnumerable.call(f,B[Y])&&(R[B[Y]]=f[B[Y]]);return R};const x=(0,v.forwardRef)((f,O)=>{var{className:R,iconPosition:B=p._B.After,size:Y=p.SK.S,target:Z=p.Qn.Blank,type:$=p.dk.Button,appearance:oe=p.xz.Neutral,fullWidth:J=!1,tabIndex:Q}=f,q=E(f,["className","iconPosition","size","target","type","appearance","fullWidth","tabIndex"]);return(0,o.jsx)(z.A,Object.assign({},(0,d.z7)(q),(0,c.a)(q),(0,c.F)(q),{className:_()(P.button,R),iconClassName:P.icon,iconPosition:B,labelClassName:P.label,size:Y,fullWidth:J,target:Z,type:$,appearance:oe,tabIndex:Q,ref:O}))})}),"./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js":((j,m,t)=>{t.d(m,{c:()=>P});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),v=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const d={Horizontal:"horizontal",Vertical:"vertical"},p={Light:"light",Regular:"regular"};var z=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=t.n(z),k=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),C=t.n(k),y=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),s=t.n(y),r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),n=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),a=t.n(e),D=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=t.n(D),L=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),F={};F.styleTagTransform=M(),F.setAttributes=n(),F.insert=s().bind(null,"head"),F.domAPI=C(),F.insertStyleElement=a();var K=c()(L.A,F);const V=L.A&&L.A.locals?L.A.locals:void 0;var N=function(E,x){var f={};for(var O in E)Object.prototype.hasOwnProperty.call(E,O)&&x.indexOf(O)<0&&(f[O]=E[O]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,O=Object.getOwnPropertySymbols(E);R<O.length;R++)x.indexOf(O[R])<0&&Object.prototype.propertyIsEnumerable.call(E,O[R])&&(f[O[R]]=E[O[R]]);return f};function P(E){var{className:x,orientation:f=d.Horizontal,weight:O=p.Regular}=E,R=N(E,["className","orientation","weight"]);const B=Object.assign(Object.assign({},(0,v.z7)(R)),{"data-weight":O});return f===d.Horizontal?(0,o.jsx)("hr",Object.assign({className:_()(V.horizontal,x)},B)):(0,o.jsx)("div",Object.assign({className:_()(V.vertical,x)},B))}}),"./node_modules/.pnpm/@snack-uikit+dropdown@0.4.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js":((j,m,t)=>{t.d(m,{m:()=>V});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),v=t("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),d=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=t.n(d),z=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=t.n(z),k=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),C=t.n(k),y=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),s=t.n(y),r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),n=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),a=t.n(e),D=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.4.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"),M={};M.styleTagTransform=a(),M.setAttributes=s(),M.insert=C().bind(null,"head"),M.domAPI=c(),M.insertStyleElement=n();var L=p()(D.A,M);const F=D.A&&D.A.locals?D.A.locals:void 0;var K=function(N,P){var E={};for(var x in N)Object.prototype.hasOwnProperty.call(N,x)&&P.indexOf(x)<0&&(E[x]=N[x]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,x=Object.getOwnPropertySymbols(N);f<x.length;f++)P.indexOf(x[f])<0&&Object.prototype.propertyIsEnumerable.call(N,x[f])&&(E[x[f]]=N[x[f]]);return E};function V(N){var{content:P,trigger:E="click",placement:x="bottom-start",children:f,triggerRef:O,widthStrategy:R="gte",triggerClassName:B}=N,Y=K(N,["content","trigger","placement","children","triggerRef","widthStrategy","triggerClassName"]);return!f&&!O?null:(0,o.jsx)(v.Z,Object.assign({placement:x,popoverContent:(0,o.jsx)("div",{className:F.dropdownContainer,children:P}),trigger:E,triggerRef:O,hasArrow:!1,widthStrategy:R,triggerClassName:_()(F.defaultTriggerClassName,B)},Y,{children:f}))}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js":((j,m,t)=>{t.d(m,{A:()=>y});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const d=i.forwardRef((s,r)=>{var{size:n=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-alarm-filled-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const c=i.forwardRef((s,r)=>{var{size:n=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-alarm-filled-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var k=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const y=(0,i.forwardRef)((s,r)=>{var{size:n=24}=s,e=k(s,["size"]);return Number(n)>=20?(0,o.jsx)(d,Object.assign({ref:r,size:n},e)):(0,o.jsx)(c,Object.assign({ref:r,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js":((j,m,t)=>{t.d(m,{A:()=>y});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const d=i.forwardRef((s,r)=>{var{size:n=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-check-filled-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const c=i.forwardRef((s,r)=>{var{size:n=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-check-filled-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var k=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const y=(0,i.forwardRef)((s,r)=>{var{size:n=24}=s,e=k(s,["size"]);return Number(n)>=20?(0,o.jsx)(d,Object.assign({ref:r,size:n},e)):(0,o.jsx)(c,Object.assign({ref:r,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js":((j,m,t)=>{t.d(m,{A:()=>y});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const d=i.forwardRef((s,r)=>{var{size:n=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-cross-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const c=i.forwardRef((s,r)=>{var{size:n=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-cross-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var k=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const y=(0,i.forwardRef)((s,r)=>{var{size:n=24}=s,e=k(s,["size"]);return Number(n)>=20?(0,o.jsx)(d,Object.assign({ref:r,size:n},e)):(0,o.jsx)(c,Object.assign({ref:r,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js":((j,m,t)=>{t.d(m,{A:()=>y});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const d=i.forwardRef((s,r)=>{var{size:n=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-cross-filled-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const c=i.forwardRef((s,r)=>{var{size:n=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-cross-filled-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var k=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const y=(0,i.forwardRef)((s,r)=>{var{size:n=24}=s,e=k(s,["size"]);return Number(n)>=20?(0,o.jsx)(d,Object.assign({ref:r,size:n},e)):(0,o.jsx)(c,Object.assign({ref:r,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js":((j,m,t)=>{t.d(m,{A:()=>y});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const d=i.forwardRef((s,r)=>{var{size:n=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-info-filled-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const c=i.forwardRef((s,r)=>{var{size:n=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-info-filled-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var k=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const y=(0,i.forwardRef)((s,r)=>{var{size:n=24}=s,e=k(s,["size"]);return Number(n)>=20?(0,o.jsx)(d,Object.assign({ref:r,size:n},e)):(0,o.jsx)(c,Object.assign({ref:r,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/more/index.js":((j,m,t)=>{t.d(m,{A:()=>y});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const d=i.forwardRef((s,r)=>{var{size:n=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-more-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const c=i.forwardRef((s,r)=>{var{size:n=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-more-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var k=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const y=(0,i.forwardRef)((s,r)=>{var{size:n=24}=s,e=k(s,["size"]);return Number(n)>=20?(0,o.jsx)(d,Object.assign({ref:r,size:n},e)):(0,o.jsx)(c,Object.assign({ref:r,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/scalableRight/index.js":((j,m,t)=>{t.d(m,{A:()=>y});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const d=i.forwardRef((s,r)=>{var{size:n=24}=s,e=_(s,["size"]);e.width=void 0,e.height=void 0;const a="-scalable-right-s";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const c=i.forwardRef((s,r)=>{var{size:n=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-scalable-right-xs";return typeof n=="number"&&(e.style||(e.style={}),e.style.width=n+"px",e.style.height=n+"px"),(0,o.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,o.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var k=function(s,r){var n={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(n[e[a]]=s[e[a]]);return n};const y=(0,i.forwardRef)((s,r)=>{var{size:n=24}=s,e=k(s,["size"]);return Number(n)>=20?(0,o.jsx)(d,Object.assign({ref:r,size:n},e)):(0,o.jsx)(c,Object.assign({ref:r,size:n},e))})}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js":((j,m,t)=>{t.d(m,{b:()=>N});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),v=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),d=t("./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),p=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),z=t.n(p),c=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),k=t.n(c),C=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),y=t.n(C),s=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=t.n(s),n=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),e=t.n(n),a=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=t.n(a),M=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),L={};L.styleTagTransform=D(),L.setAttributes=r(),L.insert=y().bind(null,"head"),L.domAPI=k(),L.insertStyleElement=e();var F=z()(M.A,L);const K=M.A&&M.A.locals?M.A.locals:void 0;var V=function(P,E){var x={};for(var f in P)Object.prototype.hasOwnProperty.call(P,f)&&E.indexOf(f)<0&&(x[f]=P[f]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,f=Object.getOwnPropertySymbols(P);O<f.length;O++)E.indexOf(f[O])<0&&Object.prototype.propertyIsEnumerable.call(P,f[O])&&(x[f[O]]=P[f[O]]);return x};function N(P){var{size:E=d.K.S,className:x}=P,f=V(P,["size","className"]);return(0,o.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:_()(K.sun,x)},(0,v.z7)(f),{"data-size":E,children:[(0,o.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js":((j,m,t)=>{t.d(m,{K:()=>o});const o={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js":((j,m,t)=>{t.d(m,{b:()=>N});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),v=t("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),d=t("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),p=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),z=t.n(p),c=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),k=t.n(c),C=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),y=t.n(C),s=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=t.n(s),n=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),e=t.n(n),a=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=t.n(a),M=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),L={};L.styleTagTransform=D(),L.setAttributes=r(),L.insert=y().bind(null,"head"),L.domAPI=k(),L.insertStyleElement=e();var F=z()(M.A,L);const K=M.A&&M.A.locals?M.A.locals:void 0;var V=function(P,E){var x={};for(var f in P)Object.prototype.hasOwnProperty.call(P,f)&&E.indexOf(f)<0&&(x[f]=P[f]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,f=Object.getOwnPropertySymbols(P);O<f.length;O++)E.indexOf(f[O])<0&&Object.prototype.propertyIsEnumerable.call(P,f[O])&&(x[f[O]]=P[f[O]]);return x};function N(P){var{size:E=d.K.S,className:x}=P,f=V(P,["size","className"]);return(0,o.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:_()(K.sun,x)},(0,v.z7)(f),{"data-size":E,children:[(0,o.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js":((j,m,t)=>{t.d(m,{K:()=>o});const o={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js":((j,m,t)=>{t.d(m,{Z:()=>b});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/@floating-ui+react@0.26.24_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),_=t("./node_modules/.pnpm/@floating-ui+dom@1.7.5/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),v=t("./node_modules/.pnpm/@floating-ui+react-dom@2.1.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),d=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=t.n(d),z=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),k=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),C=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),y=t("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js"),s=t("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");function r({placement:l,x:g,y:I,ref:A}){if(!A.current)return{};const S=A.current.offsetWidth;switch(!0){case l.startsWith("top"):return{left:g,bottom:-S,transform:"rotate(-90deg)"};case l.startsWith("bottom"):return{left:g,top:-S,transform:"rotate(90deg)"};case l.startsWith("left"):return{top:I,right:-(S-1),transform:"rotate(180deg)"};case l.startsWith("right"):default:return{top:I,left:-(S-1)}}}const n=()=>(0,k.B)()?document.body:void 0,e=l=>(l==null?void 0:l.offsetWidth)||0,a=({children:l,getReferenceProps:g,setReference:I,validElementWrapperClassName:A,disableSpanWrapper:S})=>(0,z.isValidElement)(l)?(0,s.isForwardRef)(l)||(0,s.isValidElementType)(l)||S?(0,z.cloneElement)(l,Object.assign(Object.assign({},g(Object.assign(Object.assign({},l.props),{className:p()(l.props.className,A)}))),{ref:I,key:"cloned-element"})):(0,z.createElement)("span",Object.assign({className:A,ref:I},g(),{key:"wrapped-element"}),l):typeof l=="function"?(0,o.jsx)(z.Fragment,{children:l({getReferenceProps:g,ref:I})},"function-element"):(0,z.createElement)("span",Object.assign({className:A,ref:I},g(),{key:"wrapped-element"}),l),D=l=>{const g={useHoverTrigger:!1,useClickTrigger:!1,useFocusTrigger:!1,keyboardOnly:!0};switch(l){case y.tr.Hover:return Object.assign(Object.assign({},g),{useHoverTrigger:!0});case y.tr.Click:return Object.assign(Object.assign({},g),{useClickTrigger:!0});case y.tr.FocusVisible:return Object.assign(Object.assign({},g),{useFocusTrigger:!0});case y.tr.Focus:return Object.assign(Object.assign({},g),{useFocusTrigger:!0,keyboardOnly:!1});case y.tr.ClickAndFocusVisible:return Object.assign(Object.assign({},g),{useFocusTrigger:!0,useClickTrigger:!0});case y.tr.HoverAndFocusVisible:return Object.assign(Object.assign({},g),{useFocusTrigger:!0,useHoverTrigger:!0});case y.tr.HoverAndFocus:return Object.assign(Object.assign({},g),{useFocusTrigger:!0,useHoverTrigger:!0,keyboardOnly:!1});default:return g}},M=l=>l.stopPropagation(),L=l=>l.stopPropagation();function F(l){return l.slice(0,2)==="on"?l.replace("on","").toLowerCase():l.toLowerCase()}function K(l){return Object.assign(Object.assign({},l),{nativeEvent:l})}function V(l){const g={};return Object.entries(l).forEach(([I,A])=>{g[I]=S=>{A(K(S))}}),g}function N({placement:l,x:g,y:I,arrowContainerClassName:A,arrowElementClassName:S,arrowRef:H}){return(0,o.jsx)("div",{className:A,ref:H,style:r({x:g,y:I,placement:l,ref:H}),children:(0,o.jsx)("svg",{className:S,viewBox:"0 0 4 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M4 0V8L0.707106 4.70711C0.316582 4.31658 0.316583 3.68342 0.707107 3.29289L4 0Z"})})})}var P=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function E({triggerClassName:l,offsetProp:g}){const[I,A]=(0,z.useState)(0);return(0,P.N)(()=>{const S=document.querySelector("."+String(l).split(/\s+/g).map(CSS.escape).join(".")),H=S?getComputedStyle(S):null,G=H?H.getPropertyValue("--offset"):null;if(g!==void 0){A(g);return}const U=document.createElement("span");U.style.width=G||"",document.body.appendChild(U);const se=getComputedStyle(U).width;document.body.removeChild(U);const te=parseInt(se||"");if(Number.isNaN(te)||te<1){A(0);return}A(te)},[g,l]),I}var x=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=t.n(x),O=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=t.n(O),B=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Y=t.n(B),Z=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),$=t.n(Z),oe=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),J=t.n(oe),Q=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),q=t.n(Q),T=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"),X={};X.styleTagTransform=q(),X.setAttributes=$(),X.insert=Y().bind(null,"head"),X.domAPI=R(),X.insertStyleElement=J();var W=f()(T.A,X);const u=T.A&&T.A.locals?T.A.locals:void 0;var h=function(l,g){var I={};for(var A in l)Object.prototype.hasOwnProperty.call(l,A)&&g.indexOf(A)<0&&(I[A]=l[A]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,A=Object.getOwnPropertySymbols(l);S<A.length;S++)g.indexOf(A[S])<0&&Object.prototype.propertyIsEnumerable.call(l,A[S])&&(I[A[S]]=l[A[S]]);return I};function w(l){var g,{className:I,triggerClassName:A,children:S,open:H,onOpenChange:G,placement:U=y.El.Top,hasArrow:se,offset:te,popoverContent:re,trigger:de,outsideClick:je,hoverDelayOpen:Oe,hoverDelayClose:Se,triggerRef:ee,widthStrategy:we=y.Lw.Auto,heightStrategy:Ae=y.cJ.Auto,closeOnEscapeKey:ke=!0,triggerClickByKeys:Pe=!0,fallbackPlacements:Ee=y.Y_,arrowContainerClassName:ze,arrowElementClassName:Ie,disableSpanWrapper:Te=!1}=l,Ce=h(l,["className","triggerClassName","children","open","onOpenChange","placement","hasArrow","offset","popoverContent","trigger","outsideClick","hoverDelayOpen","hoverDelayClose","triggerRef","widthStrategy","heightStrategy","closeOnEscapeKey","triggerClickByKeys","fallbackPlacements","arrowContainerClassName","arrowElementClassName","disableSpanWrapper"]);const pe=(0,z.useRef)(null),[fe,De]=(0,c.iC)(H,!1,G),ye=(0,i.fI)(),be=E({triggerClassName:A,offsetProp:te}),ge=e(pe.current),{floatingStyles:Me,refs:le,context:ce,middlewareData:ue,placement:he}=(0,i.we)({nodeId:ye,placement:U,open:fe,onOpenChange:De,whileElementsMounted:_.ll,middleware:[(0,v.BN)(),(0,v.cY)(be+ge),se&&(0,v.UE)({element:pe,padding:(be+ge)*2}),(0,v.UU)({fallbackPlacements:Ee}),(0,v.Ej)({apply({rects:ae,availableHeight:ie}){const ne=le.floating.current;if(ne){switch(Ae){case y.cJ.Eq:ne.style.height=`${ie}px`;break;case y.cJ.Lte:ne.style.maxHeight=`${ie}px`;break;case y.cJ.Auto:default:break}switch(we){case y.Lw.Eq:ne.style.width=`${ae.reference.width}px`,ne.style.minWidth="0px";break;case y.Lw.Gte:ne.style.width="auto",ne.style.minWidth=`${ae.reference.width}px`;break;case y.Lw.Auto:default:ne.style.width="auto",ne.style.minWidth="auto"}}}}),(0,v.jD)()]}),Le=(0,z.useCallback)(ae=>{le.setReference(ae),ee&&(typeof ee=="function"?ee(ae):ee.current=ae)},[ee,le]),{useHoverTrigger:Be,useFocusTrigger:Re,useClickTrigger:We,keyboardOnly:Fe}=D(de),Ne=(0,i.s9)(ce,{outsidePress:je,ancestorScroll:!1,escapeKey:ke}),Ke=(0,i.Mk)(ce,{enabled:Be,handleClose:(0,i.iB)({requireIntent:!1}),delay:{open:Oe,close:Se}}),Ve=(0,i.iQ)(ce,{enabled:Re,visibleOnly:Fe}),He=(0,i.kp)(ce,{enabled:We,keyboardHandlers:Pe}),{getFloatingProps:Xe,getReferenceProps:me}=(0,i.bv)([Ne,Ke,Ve,He]),_e=(0,z.useCallback)((ae,ie)=>{typeof ee=="object"&&(ee!=null&&ee.current)&&(le.setReference(ee.current),Object.entries(ae).map(([ne,xe])=>{const ve=F(ne);ve&&(0,k.B)()&&(ie==="add"&&ee.current.addEventListener(ve,xe),ie==="remove"&&ee.current.removeEventListener(ve,xe))}))},[le,ee]);(0,z.useEffect)(()=>{if(S)return;const ae=V(me());return _e(ae,"add"),()=>_e(ae,"remove")},[S,_e,me]);const Ue=fe&&(0,o.jsx)(i.XF,{root:n(),children:(0,o.jsxs)("div",Object.assign({role:"presentation"},(0,C.z7)(Ce),{className:p()(u.floating,I,{[u.floatingHidden]:!!(!((g=ue.hide)===null||g===void 0)&&g.referenceHidden)}),ref:le.setFloating,style:Me,"data-placement":he},Xe({onClick:M,onMouseDown:M,onMouseUp:M,onTouchStart:L,onTouchEnd:L,onTouchMove:L}),{children:[re,ue.arrow&&(0,o.jsx)(N,{placement:he,x:ue.arrow.x,y:ue.arrow.y,arrowContainerClassName:ze,arrowElementClassName:Ie,arrowRef:pe})]}))},"portal");return(0,o.jsxs)(i.$c,{id:ye,children:[S&&a({validElementWrapperClassName:p()(A),getReferenceProps:me,children:S,setReference:Le,disableSpanWrapper:Te}),Ue]})}function b(l){var{children:g}=l,I=h(l,["children"]);return(0,i.R1)()===null?(0,o.jsx)(i.P6,{children:(0,o.jsx)(w,Object.assign({},I,{children:g}))}):(0,o.jsx)(w,Object.assign({},I,{children:g}))}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js":((j,m,t)=>{t.d(m,{El:()=>o,Lw:()=>_,Y_:()=>d,cJ:()=>v,tr:()=>i});const o={Left:"left",LeftStart:"left-start",LeftEnd:"left-end",Right:"right",RightStart:"right-start",RightEnd:"right-end",Top:"top",TopStart:"top-start",TopEnd:"top-end",Bottom:"bottom",BottomStart:"bottom-start",BottomEnd:"bottom-end"},i={Click:"click",Hover:"hover",FocusVisible:"focusVisible",Focus:"focus",HoverAndFocusVisible:"hoverAndFocusVisible",HoverAndFocus:"hoverAndFocus",ClickAndFocusVisible:"clickAndFocusVisible"},_={Auto:"auto",Gte:"gte",Eq:"eq"},v={Auto:"auto",Lte:"lte",Eq:"eq"},d=[o.Top,o.Right,o.Bottom,o.Left]}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((j,m,t)=>{t.d(m,{m:()=>W});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=t.n(i),v=t("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),d=t.n(v),p=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),z=t("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),c=t("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const k=u=>u?u.offsetHeight<u.scrollHeight||u.offsetWidth<u.scrollWidth:!1,C=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],y="...",s=({text:u,element:h,truncatedElement:w})=>{if(h&&w&&k(h)){const b=h.scrollWidth/u.length;let l=u;for(const{potentialDelimiterWidth:g,leftHalfDelta:I,rightHalfDelta:A}of C){const S=Math.floor((h.offsetWidth/b-g)/2),H=u.slice(0,S-I),G=u.slice(u.length-S+A,u.length);if(l=`${H}${y}${G}`,w.innerHTML=l,w.scrollWidth<=h.offsetWidth-1)break}return l}return u};var r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(e),D=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=t.n(D),L=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=t.n(L),K=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),V=t.n(K),N=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),P=t.n(N),E=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),x={};x.styleTagTransform=P(),x.setAttributes=F(),x.insert=M().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=V();var f=n()(E.A,x);const O=E.A&&E.A.locals?E.A.locals:void 0;var R=function(u,h){var w={};for(var b in u)Object.prototype.hasOwnProperty.call(u,b)&&h.indexOf(b)<0&&(w[b]=u[b]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,b=Object.getOwnPropertySymbols(u);l<b.length;l++)h.indexOf(b[l])<0&&Object.prototype.propertyIsEnumerable.call(u,b[l])&&(w[b[l]]=u[b[l]]);return w};function B(u){var{text:h,className:w,tooltipClassName:b,hideTooltip:l,placement:g}=u,I=R(u,["text","className","tooltipClassName","hideTooltip","placement"]);const[A,S]=(0,p.useState)(!1),[H,G]=(0,p.useState)(h),U=(0,p.useRef)(null),se=(0,p.useRef)(null);(0,p.useEffect)(()=>{const re=d()(()=>{G(s({element:U.current,truncatedElement:se.current,text:h})),S(k(U.current))},50);re();const de=new ResizeObserver(re);return U.current&&de.observe(U.current),()=>{de.disconnect()}},[A,h,l]);const te=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{ref:U,className:O.fullText,"data-test-id":"full-text",children:h}),(0,o.jsx)("span",{ref:se,className:O.truncatedText,"data-test-id":"truncated-text",children:H})]});return(0,o.jsx)("span",Object.assign({className:_()(O.wrapper,w)},(0,c.z7)(I),{children:A&&!l?(0,o.jsx)(z.m,{tip:h,placement:g,hoverDelayOpen:500,triggerClassName:O.textContainer,className:b,children:te}):te}))}var Y=t("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),Z=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),$={};$.styleTagTransform=P(),$.setAttributes=F(),$.insert=M().bind(null,"head"),$.domAPI=a(),$.insertStyleElement=V();var oe=n()(Z.A,$);const J=Z.A&&Z.A.locals?Z.A.locals:void 0;var Q=function(u,h){var w={};for(var b in u)Object.prototype.hasOwnProperty.call(u,b)&&h.indexOf(b)<0&&(w[b]=u[b]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,b=Object.getOwnPropertySymbols(u);l<b.length;l++)h.indexOf(b[l])<0&&Object.prototype.propertyIsEnumerable.call(u,b[l])&&(w[b[l]]=u[b[l]]);return w};function q(u){var{text:h,className:w,tooltipClassName:b,hideTooltip:l,maxLines:g=1,placement:I}=u,A=Q(u,["text","className","tooltipClassName","hideTooltip","maxLines","placement"]);const S=(0,p.useRef)(null),[H,G]=(0,p.useState)(!1),U=(0,p.useCallback)(()=>{G(k(S.current))},[]);(0,Y.N)(()=>{S.current&&U()},[h,U]),(0,p.useEffect)(()=>{const te=d()(()=>{U()},50),re=new ResizeObserver(te);return S.current&&(U(),re.observe(S.current)),()=>{re.disconnect()}},[H,l,U]);const se=(0,o.jsx)("span",Object.assign({ref:S,className:_()(g>1?J.text2AndMoreLines:J.text1Line,w,{[J.ellipsis]:!S.current||H}),style:{"--max-lines":g}},(0,c.z7)(A),{children:h}));return H&&!l?(0,o.jsx)(z.m,{tip:h,placement:I,hoverDelayOpen:500,className:b,triggerClassName:J.tooltipTrigger,children:se}):se}const T={Middle:"middle",End:"end"};var X=function(u,h){var w={};for(var b in u)Object.prototype.hasOwnProperty.call(u,b)&&h.indexOf(b)<0&&(w[b]=u[b]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,b=Object.getOwnPropertySymbols(u);l<b.length;l++)h.indexOf(b[l])<0&&Object.prototype.propertyIsEnumerable.call(u,b[l])&&(w[b[l]]=u[b[l]]);return w};function W(u){var{variant:h=T.End}=u,w=X(u,["variant"]);switch(h){case T.Middle:return(0,o.jsx)(B,Object.assign({},w));case T.End:default:return(0,o.jsx)(q,Object.assign({},w))}}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((j,m,t)=>{t.d(m,{z7:()=>z});const o=/^data-test-/,i=/^(data|aria)-/;function _(c,k){return Object.keys(c).filter(C=>!C.match(k)).reduce((C,y)=>Object.assign(Object.assign({},C),{[y]:c[y]}),{})}function v(c,k){return Object.keys(c).reduce((C,y)=>(y.match(k)&&(C[y]=c[y]),C),{})}function d(c){return _(c,i)}function p(c){return v(c,o)}function z(c){return v(c,i)}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js":((j,m,t)=>{t.d(m,{N:()=>_});var o=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const _=(0,i.B)()?o.useLayoutEffect:o.useEffect}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((j,m,t)=>{t.d(m,{sg:()=>d,z7:()=>z});const o=/^data-test-/,i=/^(data|aria)-/;function _(c,k){return Object.keys(c).filter(C=>!C.match(k)).reduce((C,y)=>Object.assign(Object.assign({},C),{[y]:c[y]}),{})}function v(c,k){return Object.keys(c).reduce((C,y)=>(y.match(k)&&(C[y]=c[y]),C),{})}function d(c){return _(c,i)}function p(c){return v(c,o)}function z(c){return v(c,i)}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js":((j,m,t)=>{t.d(m,{B:()=>o});function o(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/styles.module.css":((j,m,t)=>{t.d(m,{A:()=>p});var o=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(o),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=t.n(_),d=v()(i());d.push([j.id,`.alertTop--NjOq3{
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
}`,""]),d.locals={alertTop:"alertTop--NjOq3",icon:"icon--BJHKt",title:"title--_IIfo",description:"description--soNqk",contentWrapper:"contentWrapper--lOCSV",contentLayout:"contentLayout--hwzK3",textLayout:"textLayout--VbHrm",actions:"actions--WIRVG"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/helperComponents/styles.module.css":((j,m,t)=>{t.d(m,{A:()=>p});var o=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(o),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=t.n(_),d=v()(i());d.push([j.id,`.alertButton--FO0Pc{
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
}`,""]),d.locals={alertButton:"alertButton--FO0Pc",text:"text--Wtpjn",icon:"icon--DmfKT"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((j,m,t)=>{t.d(m,{A:()=>p});var o=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(o),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=t.n(_),d=v()(i());d.push([j.id,`.avatar--ARVj9{
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
}`,""]),d.locals={avatar:"avatar--ARVj9",image:"image--jWIVW",indicatorWrapper:"indicatorWrapper--mfeLu"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css":((j,m,t)=>{t.d(m,{A:()=>p});var o=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(o),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=t.n(_),d=v()(i());d.push([j.id,`.button--n3vAI[data-size=xs] .label--qV8ML{
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
}`,""]),d.locals={button:"button--n3vAI",label:"label--qV8ML",icon:"icon--KODKN"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css":((j,m,t)=>{t.d(m,{A:()=>p});var o=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(o),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=t.n(_),d=v()(i());d.push([j.id,`.horizontal--BAWtQ{
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
}`,""]),d.locals={horizontal:"horizontal--BAWtQ",vertical:"vertical--Os_1s"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.4.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css":((j,m,t)=>{t.d(m,{A:()=>p});var o=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(o),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=t.n(_),d=v()(i());d.push([j.id,`.dropdownContainer--YMHDp{
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
}`,""]),d.locals={dropdownContainer:"dropdownContainer--YMHDp",defaultTriggerClassName:"defaultTriggerClassName--e5ivY"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((j,m,t)=>{t.d(m,{A:()=>p});var o=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(o),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=t.n(_),d=v()(i());d.push([j.id,`.sun--oC6I4{
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
}`,""]),d.locals={sun:"sun--oC6I4","loading-wheel":"loading-wheel--YnKg9"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((j,m,t)=>{t.d(m,{A:()=>p});var o=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(o),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=t.n(_),d=v()(i());d.push([j.id,`.sun--Mw8Oo{
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
}`,""]),d.locals={sun:"sun--Mw8Oo","loading-wheel":"loading-wheel--wXeN0"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css":((j,m,t)=>{t.d(m,{A:()=>p});var o=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(o),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=t.n(_),d=v()(i());d.push([j.id,`.floating--zdZE3{
  display:flex;
  flex-direction:column;
}

.floatingHidden--fLsvv{
  display:none;
}`,""]),d.locals={floating:"floating--zdZE3",floatingHidden:"floatingHidden--fLsvv"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((j,m,t)=>{t.d(m,{A:()=>p});var o=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(o),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=t.n(_),d=v()(i());d.push([j.id,`.container--LWxw3{
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
}`,""]),d.locals={container:"container--LWxw3",indicator:"indicator--w2F9H"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((j,m,t)=>{t.d(m,{A:()=>p});var o=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(o),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=t.n(_),d=v()(i());d.push([j.id,`.text1Line--FqBXb{
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
}`,""]),d.locals={text1Line:"text1Line--FqBXb",ellipsis:"ellipsis--Z6AY6",text2AndMoreLines:"text2AndMoreLines--xbsHF",tooltipTrigger:"tooltipTrigger--pvUWx"};const p=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((j,m,t)=>{t.d(m,{A:()=>p});var o=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=t.n(o),_=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=t.n(_),d=v()(i());d.push([j.id,`.wrapper--rkL6A{
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
}`,""]),d.locals={wrapper:"wrapper--rkL6A",truncatedText:"truncatedText--QcECJ",fullText:"fullText--sBn3t",textContainer:"textContainer--x4Ois"};const p=d}),"./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js":((j,m,t)=>{t.d(m,{A:()=>o});function o(){for(var i=[],_=0;_<arguments.length;_++)i[_]=arguments[_];var v=i.filter(Boolean);if(v.length<=1){var d=v[0];return d||null}return function(z){v.forEach(function(c){typeof c=="function"?c(z):c&&(c.current=z)})}}})}]);})();
