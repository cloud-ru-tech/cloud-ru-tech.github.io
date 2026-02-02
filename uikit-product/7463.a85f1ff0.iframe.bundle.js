(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7463],{"./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/AlertTop.js":((j,m,t)=>{"use strict";t.d(m,{W:()=>g});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=t.n(d),_=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),i=t("./node_modules/.pnpm/@snack-uikit+link@0.17.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/Link.js"),p=t("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),x=t("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const c={Neutral:"neutral",Primary:"primary",Error:"error",Warning:"warning",Success:"success",Info:"info"},P={S:"s",M:"m"},I={[c.Neutral]:"neutral",[c.Primary]:"primary",[c.Error]:"red",[c.Warning]:"yellow",[c.Success]:"green",[c.Info]:"blue"},h={[c.Neutral]:"primary",[c.Primary]:"primary",[c.Error]:"red",[c.Warning]:"yellow",[c.Success]:"green",[c.Info]:"blue"};var s=t("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js"),r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(e),D=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=t.n(D),L=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=t.n(L),K=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),V=t.n(K),N=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=t.n(N),z=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/helperComponents/styles.module.css"),O={};O.styleTagTransform=E(),O.setAttributes=F(),O.insert=M().bind(null,"head"),O.domAPI=a(),O.insertStyleElement=V();var f=o()(z.A,O);const S=z.A&&z.A.locals?z.A.locals:void 0;function R({appearance:w,text:y,icon:l,onClick:b,variant:T="simple",dataTestId:k,loading:A=!1,size:H="s"}){return(0,n.jsxs)("button",{type:"button",onClick:b,className:S.alertButton,"data-variant":T,"data-appearance":w,"data-test-id":k||"alert__action-button","data-icon-only":!y||void 0,"data-loading":A,"data-size":H,children:[y&&(0,n.jsx)("span",{className:S.text,"data-size":H,children:y}),l&&(A?(0,n.jsx)(s.b,{size:"s"}):(0,n.jsx)("span",{className:S.icon,children:l}))]})}var B=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),Y=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),Z=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),$=t("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js");function oe(w,y){switch(w){case c.Success:return(0,n.jsx)(B.A,{size:y});case c.Error:return(0,n.jsx)(Y.A,{size:y});case c.Warning:return(0,n.jsx)(Z.A,{size:y});case c.Primary:case c.Neutral:default:return(0,n.jsx)($.A,{size:y})}}const J={InvertNeutral:"invert-neutral",Primary:"primary",Red:"red",Yellow:"yellow",Green:"green",Blue:"blue"},Q={[c.Neutral]:J.InvertNeutral,[c.Primary]:J.Primary,[c.Error]:J.Red,[c.Warning]:J.Yellow,[c.Success]:J.Green,[c.Info]:J.Blue};var q=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/styles.module.css"),C={};C.styleTagTransform=E(),C.setAttributes=F(),C.insert=M().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=V();var X=o()(q.A,C);const W=q.A&&q.A.locals?q.A.locals:void 0;var u=function(w,y){var l={};for(var b in w)Object.prototype.hasOwnProperty.call(w,b)&&y.indexOf(b)<0&&(l[b]=w[b]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,b=Object.getOwnPropertySymbols(w);T<b.length;T++)y.indexOf(b[T])<0&&Object.prototype.propertyIsEnumerable.call(w,b[T])&&(l[b[T]]=w[b[T]]);return l};function g(w){var y,{icon:l=!0,title:b,description:T,link:k,onClose:A,truncate:H,appearance:G=c.Neutral,action:U,className:se}=w,te=u(w,["icon","title","description","link","onClose","truncate","appearance","action","className"]);return(0,n.jsxs)("div",Object.assign({className:v()(W.alertTop,se)},(0,x.z7)(te),{"data-color":Q[G],children:[(0,n.jsxs)("div",{className:W.contentWrapper,children:[l&&(0,n.jsx)("div",{className:W.icon,"data-color":Q[G],"data-test-id":"alert-top__icon",children:oe(G,24)}),(0,n.jsxs)("div",{className:W.contentLayout,children:[(0,n.jsxs)("div",{className:W.textLayout,children:[b&&(0,n.jsx)("div",{className:W.title,"data-color":Q[G],"data-test-id":"alert-top__title",children:(0,n.jsx)(p.m,{text:b,maxLines:(y=H==null?void 0:H.title)!==null&&y!==void 0?y:1})}),(0,n.jsx)("span",{className:W.description,"data-color":Q[G],"data-test-id":"alert-top__description",children:T})]}),k&&(0,n.jsx)("span",{children:(0,n.jsx)(i.N,Object.assign({},k,{appearance:I[G],textMode:"on-accent",size:"m","data-test-id":"alert-top__link"}))})]})]}),(0,n.jsxs)("div",{className:W.actions,children:[U&&(0,n.jsx)(R,Object.assign({},U,{appearance:Q[G],variant:"tonal"})),A&&(0,n.jsx)(R,{onClick:A,appearance:Q[G],icon:(0,n.jsx)(_.A,{}),variant:"tonal",dataTestId:"alert-top__close-button"})]})]}))}}),"./node_modules/.pnpm/@snack-uikit+avatar@0.8.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((j,m,t)=>{"use strict";t.d(m,{e:()=>q});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=t.n(d),_=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const p={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},x={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var c=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=t.n(c),I=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=t.n(I),s=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),r=t.n(s),o=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),e=t.n(o),a=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=t.n(a),M=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=t.n(M),F=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),K={};K.styleTagTransform=L(),K.setAttributes=e(),K.insert=r().bind(null,"head"),K.domAPI=h(),K.insertStyleElement=D();var V=P()(F.A,K);const N=F.A&&F.A.locals?F.A.locals:void 0;var E=function(C,X){var W={};for(var u in C)Object.prototype.hasOwnProperty.call(C,u)&&X.indexOf(u)<0&&(W[u]=C[u]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(C);g<u.length;g++)X.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(C,u[g])&&(W[u[g]]=C[u[g]]);return W};function z(C){var{size:X=x.M,appearance:W=p.Primary,className:u}=C,g=E(C,["size","appearance","className"]);return(0,n.jsx)("div",Object.assign({className:v()(N.container,u)},(0,i.z7)(g),{"data-size":X,children:(0,n.jsx)("div",{className:N.indicator,"data-appearance":W})}))}const O={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},f={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},S={Round:"round",Square:"square"};var R=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),B={};B.styleTagTransform=L(),B.setAttributes=e(),B.insert=r().bind(null,"head"),B.domAPI=h(),B.insertStyleElement=D();var Y=P()(R.A,B);const Z=R.A&&R.A.locals?R.A.locals:void 0,$=" ",oe=(C,X)=>{var W;const u=C.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!u||u.length<X)return u.toUpperCase();const g=u.split($);let w=u;if(g.length>1){const y=g[0].charAt(0),l=(W=g[g.length-1])===null||W===void 0?void 0:W.charAt(0);w=`${y}${l}`.toUpperCase()}return w.slice(0,X).toUpperCase()};var J=function(C,X){var W={};for(var u in C)Object.prototype.hasOwnProperty.call(C,u)&&X.indexOf(u)<0&&(W[u]=C[u]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,u=Object.getOwnPropertySymbols(C);g<u.length;g++)X.indexOf(u[g])<0&&Object.prototype.propertyIsEnumerable.call(C,u[g])&&(W[u[g]]=C[u[g]]);return W};const Q={[f.Xxs]:"xxs",[f.Xs]:"xs",[f.S]:"xs",[f.M]:"m",[f.L]:"m",[f.Xl]:"l",[f.Xxl]:"l"};function q(C){var{name:X,appearance:W=O.Red,size:u=f.S,shape:g=S.Round,indicator:w,showTwoSymbols:y,src:l,className:b}=C,T=J(C,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[k,A]=(0,_.useState)(!1),H=u!==f.Xxs&&y?2:1;return(0,_.useEffect)(()=>{A(!1)},[l]),(0,n.jsxs)("div",Object.assign({className:v()(Z.avatar,b)},(0,i.z7)(T),{"data-size":u,"data-appearance":W,"data-shape":g,children:[l&&!k?(0,n.jsx)("img",{"data-test-id":"image",className:Z.image,src:l,onError:()=>A(!0),alt:""}):(0,n.jsx)("div",{"data-test-id":"abbreviation",children:oe(X,H)}),w&&(0,n.jsx)("div",{className:Z.indicatorWrapper,children:(0,n.jsx)(z,{"data-test-id":"indicator",appearance:w,size:Q[u]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js":((j,m,t)=>{"use strict";t.d(m,{b:()=>O});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=t.n(d),_=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),p=t("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),x=t("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js"),c=t("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js"),P=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=t.n(P),h=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=t.n(h),r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),o=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),a=t.n(e),D=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=t.n(D),L=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),F=t.n(L),K=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css"),V={};V.styleTagTransform=F(),V.setAttributes=a(),V.insert=o().bind(null,"head"),V.domAPI=s(),V.insertStyleElement=M();var N=I()(K.A,V);const E=K.A&&K.A.locals?K.A.locals:void 0;var z=function(f,S){var R={};for(var B in f)Object.prototype.hasOwnProperty.call(f,B)&&S.indexOf(B)<0&&(R[B]=f[B]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Y=0,B=Object.getOwnPropertySymbols(f);Y<B.length;Y++)S.indexOf(B[Y])<0&&Object.prototype.propertyIsEnumerable.call(f,B[Y])&&(R[B[Y]]=f[B[Y]]);return R};const O=(0,_.forwardRef)((f,S)=>{var{className:R,iconPosition:B=p._B.After,size:Y=p.SK.S,target:Z=p.Qn.Blank,type:$=p.dk.Button,appearance:oe=p.xz.Neutral,fullWidth:J=!1,tabIndex:Q}=f,q=z(f,["className","iconPosition","size","target","type","appearance","fullWidth","tabIndex"]);return(0,n.jsx)(x.A,Object.assign({},(0,i.z7)(q),(0,c.a)(q),(0,c.F)(q),{className:v()(E.button,R),iconClassName:E.icon,iconPosition:B,labelClassName:E.label,size:Y,fullWidth:J,target:Z,type:$,appearance:oe,tabIndex:Q,ref:S}))})}),"./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js":((j,m,t)=>{"use strict";t.d(m,{c:()=>E});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=t.n(d),_=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const i={Horizontal:"horizontal",Vertical:"vertical"},p={Light:"light",Regular:"regular"};var x=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=t.n(x),P=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=t.n(P),h=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),s=t.n(h),r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),a=t.n(e),D=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=t.n(D),L=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),F={};F.styleTagTransform=M(),F.setAttributes=o(),F.insert=s().bind(null,"head"),F.domAPI=I(),F.insertStyleElement=a();var K=c()(L.A,F);const V=L.A&&L.A.locals?L.A.locals:void 0;var N=function(z,O){var f={};for(var S in z)Object.prototype.hasOwnProperty.call(z,S)&&O.indexOf(S)<0&&(f[S]=z[S]);if(z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,S=Object.getOwnPropertySymbols(z);R<S.length;R++)O.indexOf(S[R])<0&&Object.prototype.propertyIsEnumerable.call(z,S[R])&&(f[S[R]]=z[S[R]]);return f};function E(z){var{className:O,orientation:f=i.Horizontal,weight:S=p.Regular}=z,R=N(z,["className","orientation","weight"]);const B=Object.assign(Object.assign({},(0,_.z7)(R)),{"data-weight":S});return f===i.Horizontal?(0,n.jsx)("hr",Object.assign({className:v()(V.horizontal,O)},B)):(0,n.jsx)("div",Object.assign({className:v()(V.vertical,O)},B))}}),"./node_modules/.pnpm/@snack-uikit+dropdown@0.4.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js":((j,m,t)=>{"use strict";t.d(m,{m:()=>V});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=t.n(d),_=t("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),i=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=t.n(i),x=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=t.n(x),P=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),I=t.n(P),h=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),s=t.n(h),r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),o=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),a=t.n(e),D=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.4.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"),M={};M.styleTagTransform=a(),M.setAttributes=s(),M.insert=I().bind(null,"head"),M.domAPI=c(),M.insertStyleElement=o();var L=p()(D.A,M);const F=D.A&&D.A.locals?D.A.locals:void 0;var K=function(N,E){var z={};for(var O in N)Object.prototype.hasOwnProperty.call(N,O)&&E.indexOf(O)<0&&(z[O]=N[O]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,O=Object.getOwnPropertySymbols(N);f<O.length;f++)E.indexOf(O[f])<0&&Object.prototype.propertyIsEnumerable.call(N,O[f])&&(z[O[f]]=N[O[f]]);return z};function V(N){var{content:E,trigger:z="click",placement:O="bottom-start",children:f,triggerRef:S,widthStrategy:R="gte",triggerClassName:B}=N,Y=K(N,["content","trigger","placement","children","triggerRef","widthStrategy","triggerClassName"]);return!f&&!S?null:(0,n.jsx)(_.Z,Object.assign({placement:O,popoverContent:(0,n.jsx)("div",{className:F.dropdownContainer,children:E}),trigger:z,triggerRef:S,hasArrow:!1,widthStrategy:R,triggerClassName:v()(F.defaultTriggerClassName,B)},Y,{children:f}))}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js":((j,m,t)=>{"use strict";t.d(m,{A:()=>h});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const i=d.forwardRef((s,r)=>{var{size:o=24}=s,e=v(s,["size"]);e.width=void 0,e.height=void 0;const a="-alarm-filled-s";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const c=d.forwardRef((s,r)=>{var{size:o=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-alarm-filled-xs";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var P=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const h=(0,d.forwardRef)((s,r)=>{var{size:o=24}=s,e=P(s,["size"]);return Number(o)>=20?(0,n.jsx)(i,Object.assign({ref:r,size:o},e)):(0,n.jsx)(c,Object.assign({ref:r,size:o},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js":((j,m,t)=>{"use strict";t.d(m,{A:()=>h});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const i=d.forwardRef((s,r)=>{var{size:o=24}=s,e=v(s,["size"]);e.width=void 0,e.height=void 0;const a="-check-filled-s";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const c=d.forwardRef((s,r)=>{var{size:o=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-check-filled-xs";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var P=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const h=(0,d.forwardRef)((s,r)=>{var{size:o=24}=s,e=P(s,["size"]);return Number(o)>=20?(0,n.jsx)(i,Object.assign({ref:r,size:o},e)):(0,n.jsx)(c,Object.assign({ref:r,size:o},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js":((j,m,t)=>{"use strict";t.d(m,{A:()=>h});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const i=d.forwardRef((s,r)=>{var{size:o=24}=s,e=v(s,["size"]);e.width=void 0,e.height=void 0;const a="-cross-s";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const c=d.forwardRef((s,r)=>{var{size:o=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-cross-xs";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var P=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const h=(0,d.forwardRef)((s,r)=>{var{size:o=24}=s,e=P(s,["size"]);return Number(o)>=20?(0,n.jsx)(i,Object.assign({ref:r,size:o},e)):(0,n.jsx)(c,Object.assign({ref:r,size:o},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js":((j,m,t)=>{"use strict";t.d(m,{A:()=>h});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const i=d.forwardRef((s,r)=>{var{size:o=24}=s,e=v(s,["size"]);e.width=void 0,e.height=void 0;const a="-cross-filled-s";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const c=d.forwardRef((s,r)=>{var{size:o=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-cross-filled-xs";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var P=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const h=(0,d.forwardRef)((s,r)=>{var{size:o=24}=s,e=P(s,["size"]);return Number(o)>=20?(0,n.jsx)(i,Object.assign({ref:r,size:o},e)):(0,n.jsx)(c,Object.assign({ref:r,size:o},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js":((j,m,t)=>{"use strict";t.d(m,{A:()=>h});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const i=d.forwardRef((s,r)=>{var{size:o=24}=s,e=v(s,["size"]);e.width=void 0,e.height=void 0;const a="-info-filled-s";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const c=d.forwardRef((s,r)=>{var{size:o=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-info-filled-xs";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var P=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const h=(0,d.forwardRef)((s,r)=>{var{size:o=24}=s,e=P(s,["size"]);return Number(o)>=20?(0,n.jsx)(i,Object.assign({ref:r,size:o},e)):(0,n.jsx)(c,Object.assign({ref:r,size:o},e))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/more/index.js":((j,m,t)=>{"use strict";t.d(m,{A:()=>h});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const i=d.forwardRef((s,r)=>{var{size:o=24}=s,e=v(s,["size"]);e.width=void 0,e.height=void 0;const a="-more-s";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var p=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const c=d.forwardRef((s,r)=>{var{size:o=24}=s,e=p(s,["size"]);e.width=void 0,e.height=void 0;const a="-more-xs";return typeof o=="number"&&(e.style||(e.style={}),e.style.width=o+"px",e.style.height=o+"px"),(0,n.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+a},e,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+a.substring(1)})}))});var P=function(s,r){var o={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&r.indexOf(e)<0&&(o[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(s);a<e.length;a++)r.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(s,e[a])&&(o[e[a]]=s[e[a]]);return o};const h=(0,d.forwardRef)((s,r)=>{var{size:o=24}=s,e=P(s,["size"]);return Number(o)>=20?(0,n.jsx)(i,Object.assign({ref:r,size:o},e)):(0,n.jsx)(c,Object.assign({ref:r,size:o},e))})}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js":((j,m,t)=>{"use strict";t.d(m,{b:()=>N});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=t.n(d),_=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),i=t("./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),p=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=t.n(p),c=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),P=t.n(c),I=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=t.n(I),s=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=t.n(s),o=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),e=t.n(o),a=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=t.n(a),M=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),L={};L.styleTagTransform=D(),L.setAttributes=r(),L.insert=h().bind(null,"head"),L.domAPI=P(),L.insertStyleElement=e();var F=x()(M.A,L);const K=M.A&&M.A.locals?M.A.locals:void 0;var V=function(E,z){var O={};for(var f in E)Object.prototype.hasOwnProperty.call(E,f)&&z.indexOf(f)<0&&(O[f]=E[f]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,f=Object.getOwnPropertySymbols(E);S<f.length;S++)z.indexOf(f[S])<0&&Object.prototype.propertyIsEnumerable.call(E,f[S])&&(O[f[S]]=E[f[S]]);return O};function N(E){var{size:z=i.K.S,className:O}=E,f=V(E,["size","className"]);return(0,n.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:v()(K.sun,O)},(0,_.z7)(f),{"data-size":z,children:[(0,n.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js":((j,m,t)=>{"use strict";t.d(m,{K:()=>n});const n={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js":((j,m,t)=>{"use strict";t.d(m,{b:()=>N});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=t.n(d),_=t("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),i=t("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),p=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=t.n(p),c=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),P=t.n(c),I=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=t.n(I),s=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=t.n(s),o=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),e=t.n(o),a=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=t.n(a),M=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),L={};L.styleTagTransform=D(),L.setAttributes=r(),L.insert=h().bind(null,"head"),L.domAPI=P(),L.insertStyleElement=e();var F=x()(M.A,L);const K=M.A&&M.A.locals?M.A.locals:void 0;var V=function(E,z){var O={};for(var f in E)Object.prototype.hasOwnProperty.call(E,f)&&z.indexOf(f)<0&&(O[f]=E[f]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,f=Object.getOwnPropertySymbols(E);S<f.length;S++)z.indexOf(f[S])<0&&Object.prototype.propertyIsEnumerable.call(E,f[S])&&(O[f[S]]=E[f[S]]);return O};function N(E){var{size:z=i.K.S,className:O}=E,f=V(E,["size","className"]);return(0,n.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:v()(K.sun,O)},(0,_.z7)(f),{"data-size":z,children:[(0,n.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js":((j,m,t)=>{"use strict";t.d(m,{K:()=>n});const n={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js":((j,m,t)=>{"use strict";t.d(m,{Z:()=>y});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/@floating-ui+react@0.26.24_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),v=t("./node_modules/.pnpm/@floating-ui+dom@1.7.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),_=t("./node_modules/.pnpm/@floating-ui+react-dom@2.1.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),i=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),p=t.n(i),x=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=t("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),P=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),I=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),h=t("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js"),s=t("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");function r({placement:l,x:b,y:T,ref:k}){if(!k.current)return{};const A=k.current.offsetWidth;switch(!0){case l.startsWith("top"):return{left:b,bottom:-A,transform:"rotate(-90deg)"};case l.startsWith("bottom"):return{left:b,top:-A,transform:"rotate(90deg)"};case l.startsWith("left"):return{top:T,right:-(A-1),transform:"rotate(180deg)"};case l.startsWith("right"):default:return{top:T,left:-(A-1)}}}const o=()=>(0,P.B)()?document.body:void 0,e=l=>(l==null?void 0:l.offsetWidth)||0,a=({children:l,getReferenceProps:b,setReference:T,validElementWrapperClassName:k,disableSpanWrapper:A})=>(0,x.isValidElement)(l)?(0,s.isForwardRef)(l)||(0,s.isValidElementType)(l)||A?(0,x.cloneElement)(l,Object.assign(Object.assign({},b(Object.assign(Object.assign({},l.props),{className:p()(l.props.className,k)}))),{ref:T,key:"cloned-element"})):(0,x.createElement)("span",Object.assign({className:k,ref:T},b(),{key:"wrapped-element"}),l):typeof l=="function"?(0,n.jsx)(x.Fragment,{children:l({getReferenceProps:b,ref:T})},"function-element"):(0,x.createElement)("span",Object.assign({className:k,ref:T},b(),{key:"wrapped-element"}),l),D=l=>{const b={useHoverTrigger:!1,useClickTrigger:!1,useFocusTrigger:!1,keyboardOnly:!0};switch(l){case h.tr.Hover:return Object.assign(Object.assign({},b),{useHoverTrigger:!0});case h.tr.Click:return Object.assign(Object.assign({},b),{useClickTrigger:!0});case h.tr.FocusVisible:return Object.assign(Object.assign({},b),{useFocusTrigger:!0});case h.tr.Focus:return Object.assign(Object.assign({},b),{useFocusTrigger:!0,keyboardOnly:!1});case h.tr.ClickAndFocusVisible:return Object.assign(Object.assign({},b),{useFocusTrigger:!0,useClickTrigger:!0});case h.tr.HoverAndFocusVisible:return Object.assign(Object.assign({},b),{useFocusTrigger:!0,useHoverTrigger:!0});case h.tr.HoverAndFocus:return Object.assign(Object.assign({},b),{useFocusTrigger:!0,useHoverTrigger:!0,keyboardOnly:!1});default:return b}},M=l=>l.stopPropagation(),L=l=>l.stopPropagation();function F(l){return l.slice(0,2)==="on"?l.replace("on","").toLowerCase():l.toLowerCase()}function K(l){return Object.assign(Object.assign({},l),{nativeEvent:l})}function V(l){const b={};return Object.entries(l).forEach(([T,k])=>{b[T]=A=>{k(K(A))}}),b}function N({placement:l,x:b,y:T,arrowContainerClassName:k,arrowElementClassName:A,arrowRef:H}){return(0,n.jsx)("div",{className:k,ref:H,style:r({x:b,y:T,placement:l,ref:H}),children:(0,n.jsx)("svg",{className:A,viewBox:"0 0 4 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M4 0V8L0.707106 4.70711C0.316582 4.31658 0.316583 3.68342 0.707107 3.29289L4 0Z"})})})}var E=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function z({triggerClassName:l,offsetProp:b}){const[T,k]=(0,x.useState)(0);return(0,E.N)(()=>{const A=document.querySelector("."+String(l).split(/\s+/g).map(CSS.escape).join(".")),H=A?getComputedStyle(A):null,G=H?H.getPropertyValue("--offset"):null;if(b!==void 0){k(b);return}const U=document.createElement("span");U.style.width=G||"",document.body.appendChild(U);const se=getComputedStyle(U).width;document.body.removeChild(U);const te=parseInt(se||"");if(Number.isNaN(te)||te<1){k(0);return}k(te)},[b,l]),T}var O=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=t.n(O),S=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=t.n(S),B=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Y=t.n(B),Z=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),$=t.n(Z),oe=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),J=t.n(oe),Q=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),q=t.n(Q),C=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"),X={};X.styleTagTransform=q(),X.setAttributes=$(),X.insert=Y().bind(null,"head"),X.domAPI=R(),X.insertStyleElement=J();var W=f()(C.A,X);const u=C.A&&C.A.locals?C.A.locals:void 0;var g=function(l,b){var T={};for(var k in l)Object.prototype.hasOwnProperty.call(l,k)&&b.indexOf(k)<0&&(T[k]=l[k]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var A=0,k=Object.getOwnPropertySymbols(l);A<k.length;A++)b.indexOf(k[A])<0&&Object.prototype.propertyIsEnumerable.call(l,k[A])&&(T[k[A]]=l[k[A]]);return T};function w(l){var b,{className:T,triggerClassName:k,children:A,open:H,onOpenChange:G,placement:U=h.El.Top,hasArrow:se,offset:te,popoverContent:re,trigger:de,outsideClick:je,hoverDelayOpen:Oe,hoverDelayClose:Se,triggerRef:ee,widthStrategy:Ae=h.Lw.Auto,heightStrategy:we=h.cJ.Auto,closeOnEscapeKey:Pe=!0,triggerClickByKeys:ke=!0,fallbackPlacements:Ee=h.Y_,arrowContainerClassName:ze,arrowElementClassName:Ie,disableSpanWrapper:Te=!1}=l,Ce=g(l,["className","triggerClassName","children","open","onOpenChange","placement","hasArrow","offset","popoverContent","trigger","outsideClick","hoverDelayOpen","hoverDelayClose","triggerRef","widthStrategy","heightStrategy","closeOnEscapeKey","triggerClickByKeys","fallbackPlacements","arrowContainerClassName","arrowElementClassName","disableSpanWrapper"]);const pe=(0,x.useRef)(null),[fe,De]=(0,c.iC)(H,!1,G),ye=(0,d.fI)(),be=z({triggerClassName:k,offsetProp:te}),he=e(pe.current),{floatingStyles:Me,refs:le,context:ce,middlewareData:ue,placement:ge}=(0,d.we)({nodeId:ye,placement:U,open:fe,onOpenChange:De,whileElementsMounted:v.ll,middleware:[(0,_.BN)(),(0,_.cY)(be+he),se&&(0,_.UE)({element:pe,padding:(be+he)*2}),(0,_.UU)({fallbackPlacements:Ee}),(0,_.Ej)({apply({rects:ae,availableHeight:ie}){const ne=le.floating.current;if(ne){switch(we){case h.cJ.Eq:ne.style.height=`${ie}px`;break;case h.cJ.Lte:ne.style.maxHeight=`${ie}px`;break;case h.cJ.Auto:default:break}switch(Ae){case h.Lw.Eq:ne.style.width=`${ae.reference.width}px`,ne.style.minWidth="0px";break;case h.Lw.Gte:ne.style.width="auto",ne.style.minWidth=`${ae.reference.width}px`;break;case h.Lw.Auto:default:ne.style.width="auto",ne.style.minWidth="auto"}}}}),(0,_.jD)()]}),Le=(0,x.useCallback)(ae=>{le.setReference(ae),ee&&(typeof ee=="function"?ee(ae):ee.current=ae)},[ee,le]),{useHoverTrigger:Be,useFocusTrigger:Re,useClickTrigger:We,keyboardOnly:Fe}=D(de),Ne=(0,d.s9)(ce,{outsidePress:je,ancestorScroll:!1,escapeKey:Pe}),Ke=(0,d.Mk)(ce,{enabled:Be,handleClose:(0,d.iB)({requireIntent:!1}),delay:{open:Oe,close:Se}}),Ve=(0,d.iQ)(ce,{enabled:Re,visibleOnly:Fe}),He=(0,d.kp)(ce,{enabled:We,keyboardHandlers:ke}),{getFloatingProps:Xe,getReferenceProps:me}=(0,d.bv)([Ne,Ke,Ve,He]),_e=(0,x.useCallback)((ae,ie)=>{typeof ee=="object"&&(ee!=null&&ee.current)&&(le.setReference(ee.current),Object.entries(ae).map(([ne,xe])=>{const ve=F(ne);ve&&(0,P.B)()&&(ie==="add"&&ee.current.addEventListener(ve,xe),ie==="remove"&&ee.current.removeEventListener(ve,xe))}))},[le,ee]);(0,x.useEffect)(()=>{if(A)return;const ae=V(me());return _e(ae,"add"),()=>_e(ae,"remove")},[A,_e,me]);const Ue=fe&&(0,n.jsx)(d.XF,{root:o(),children:(0,n.jsxs)("div",Object.assign({role:"presentation"},(0,I.z7)(Ce),{className:p()(u.floating,T,{[u.floatingHidden]:!!(!((b=ue.hide)===null||b===void 0)&&b.referenceHidden)}),ref:le.setFloating,style:Me,"data-placement":ge},Xe({onClick:M,onMouseDown:M,onMouseUp:M,onTouchStart:L,onTouchEnd:L,onTouchMove:L}),{children:[re,ue.arrow&&(0,n.jsx)(N,{placement:ge,x:ue.arrow.x,y:ue.arrow.y,arrowContainerClassName:ze,arrowElementClassName:Ie,arrowRef:pe})]}))},"portal");return(0,n.jsxs)(d.$c,{id:ye,children:[A&&a({validElementWrapperClassName:p()(k),getReferenceProps:me,children:A,setReference:Le,disableSpanWrapper:Te}),Ue]})}function y(l){var{children:b}=l,T=g(l,["children"]);return(0,d.R1)()===null?(0,n.jsx)(d.P6,{children:(0,n.jsx)(w,Object.assign({},T,{children:b}))}):(0,n.jsx)(w,Object.assign({},T,{children:b}))}}),"./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js":((j,m,t)=>{"use strict";t.d(m,{El:()=>n,Lw:()=>v,Y_:()=>i,cJ:()=>_,tr:()=>d});const n={Left:"left",LeftStart:"left-start",LeftEnd:"left-end",Right:"right",RightStart:"right-start",RightEnd:"right-end",Top:"top",TopStart:"top-start",TopEnd:"top-end",Bottom:"bottom",BottomStart:"bottom-start",BottomEnd:"bottom-end"},d={Click:"click",Hover:"hover",FocusVisible:"focusVisible",Focus:"focus",HoverAndFocusVisible:"hoverAndFocusVisible",HoverAndFocus:"hoverAndFocus",ClickAndFocusVisible:"clickAndFocusVisible"},v={Auto:"auto",Gte:"gte",Eq:"eq"},_={Auto:"auto",Lte:"lte",Eq:"eq"},i=[n.Top,n.Right,n.Bottom,n.Left]}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((j,m,t)=>{"use strict";t.d(m,{m:()=>W});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=t.n(d),_=t("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),i=t.n(_),p=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=t("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),c=t("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const P=u=>u?u.offsetHeight<u.scrollHeight||u.offsetWidth<u.scrollWidth:!1,I=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],h="...",s=({text:u,element:g,truncatedElement:w})=>{if(g&&w&&P(g)){const y=g.scrollWidth/u.length;let l=u;for(const{potentialDelimiterWidth:b,leftHalfDelta:T,rightHalfDelta:k}of I){const A=Math.floor((g.offsetWidth/y-b)/2),H=u.slice(0,A-T),G=u.slice(u.length-A+k,u.length);if(l=`${H}${h}${G}`,w.innerHTML=l,w.scrollWidth<=g.offsetWidth-1)break}return l}return u};var r=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=t.n(r),e=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(e),D=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=t.n(D),L=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=t.n(L),K=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),V=t.n(K),N=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=t.n(N),z=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),O={};O.styleTagTransform=E(),O.setAttributes=F(),O.insert=M().bind(null,"head"),O.domAPI=a(),O.insertStyleElement=V();var f=o()(z.A,O);const S=z.A&&z.A.locals?z.A.locals:void 0;var R=function(u,g){var w={};for(var y in u)Object.prototype.hasOwnProperty.call(u,y)&&g.indexOf(y)<0&&(w[y]=u[y]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,y=Object.getOwnPropertySymbols(u);l<y.length;l++)g.indexOf(y[l])<0&&Object.prototype.propertyIsEnumerable.call(u,y[l])&&(w[y[l]]=u[y[l]]);return w};function B(u){var{text:g,className:w,tooltipClassName:y,hideTooltip:l,placement:b}=u,T=R(u,["text","className","tooltipClassName","hideTooltip","placement"]);const[k,A]=(0,p.useState)(!1),[H,G]=(0,p.useState)(g),U=(0,p.useRef)(null),se=(0,p.useRef)(null);(0,p.useEffect)(()=>{const re=i()(()=>{G(s({element:U.current,truncatedElement:se.current,text:g})),A(P(U.current))},50);re();const de=new ResizeObserver(re);return U.current&&de.observe(U.current),()=>{de.disconnect()}},[k,g,l]);const te=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{ref:U,className:S.fullText,"data-test-id":"full-text",children:g}),(0,n.jsx)("span",{ref:se,className:S.truncatedText,"data-test-id":"truncated-text",children:H})]});return(0,n.jsx)("span",Object.assign({className:v()(S.wrapper,w)},(0,c.z7)(T),{children:k&&!l?(0,n.jsx)(x.m,{tip:g,placement:b,hoverDelayOpen:500,triggerClassName:S.textContainer,className:y,children:te}):te}))}var Y=t("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),Z=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),$={};$.styleTagTransform=E(),$.setAttributes=F(),$.insert=M().bind(null,"head"),$.domAPI=a(),$.insertStyleElement=V();var oe=o()(Z.A,$);const J=Z.A&&Z.A.locals?Z.A.locals:void 0;var Q=function(u,g){var w={};for(var y in u)Object.prototype.hasOwnProperty.call(u,y)&&g.indexOf(y)<0&&(w[y]=u[y]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,y=Object.getOwnPropertySymbols(u);l<y.length;l++)g.indexOf(y[l])<0&&Object.prototype.propertyIsEnumerable.call(u,y[l])&&(w[y[l]]=u[y[l]]);return w};function q(u){var{text:g,className:w,tooltipClassName:y,hideTooltip:l,maxLines:b=1,placement:T}=u,k=Q(u,["text","className","tooltipClassName","hideTooltip","maxLines","placement"]);const A=(0,p.useRef)(null),[H,G]=(0,p.useState)(!1),U=(0,p.useCallback)(()=>{G(P(A.current))},[]);(0,Y.N)(()=>{A.current&&U()},[g,U]),(0,p.useEffect)(()=>{const te=i()(()=>{U()},50),re=new ResizeObserver(te);return A.current&&(U(),re.observe(A.current)),()=>{re.disconnect()}},[H,l,U]);const se=(0,n.jsx)("span",Object.assign({ref:A,className:v()(b>1?J.text2AndMoreLines:J.text1Line,w,{[J.ellipsis]:!A.current||H}),style:{"--max-lines":b}},(0,c.z7)(k),{children:g}));return H&&!l?(0,n.jsx)(x.m,{tip:g,placement:T,hoverDelayOpen:500,className:y,triggerClassName:J.tooltipTrigger,children:se}):se}const C={Middle:"middle",End:"end"};var X=function(u,g){var w={};for(var y in u)Object.prototype.hasOwnProperty.call(u,y)&&g.indexOf(y)<0&&(w[y]=u[y]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,y=Object.getOwnPropertySymbols(u);l<y.length;l++)g.indexOf(y[l])<0&&Object.prototype.propertyIsEnumerable.call(u,y[l])&&(w[y[l]]=u[y[l]]);return w};function W(u){var{variant:g=C.End}=u,w=X(u,["variant"]);switch(g){case C.Middle:return(0,n.jsx)(B,Object.assign({},w));case C.End:default:return(0,n.jsx)(q,Object.assign({},w))}}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((j,m,t)=>{"use strict";t.d(m,{z7:()=>x});const n=/^data-test-/,d=/^(data|aria)-/;function v(c,P){return Object.keys(c).filter(I=>!I.match(P)).reduce((I,h)=>Object.assign(Object.assign({},I),{[h]:c[h]}),{})}function _(c,P){return Object.keys(c).reduce((I,h)=>(h.match(P)&&(I[h]=c[h]),I),{})}function i(c){return v(c,d)}function p(c){return _(c,n)}function x(c){return _(c,d)}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js":((j,m,t)=>{"use strict";t.d(m,{N:()=>v});var n=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=t("./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const v=(0,d.B)()?n.useLayoutEffect:n.useEffect}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((j,m,t)=>{"use strict";t.d(m,{sg:()=>i,z7:()=>x});const n=/^data-test-/,d=/^(data|aria)-/;function v(c,P){return Object.keys(c).filter(I=>!I.match(P)).reduce((I,h)=>Object.assign(Object.assign({},I),{[h]:c[h]}),{})}function _(c,P){return Object.keys(c).reduce((I,h)=>(h.match(P)&&(I[h]=c[h]),I),{})}function i(c){return v(c,d)}function p(c){return _(c,n)}function x(c){return _(c,d)}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js":((j,m,t)=>{"use strict";t.d(m,{B:()=>n});function n(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}}),"./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js":((j,m)=>{var t,n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var d={}.hasOwnProperty,v="[native code]";function _(){for(var i=[],p=0;p<arguments.length;p++){var x=arguments[p];if(x){var c=typeof x;if(c==="string"||c==="number")i.push(x);else if(Array.isArray(x)){if(x.length){var P=_.apply(null,x);P&&i.push(P)}}else if(c==="object"){if(x.toString!==Object.prototype.toString&&!x.toString.toString().includes("[native code]")){i.push(x.toString());continue}for(var I in x)d.call(x,I)&&x[I]&&i.push(I)}}}return i.join(" ")}j.exports?(_.default=_,j.exports=_):(t=[],n=(function(){return _}).apply(m,t),n!==void 0&&(j.exports=n))})()}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/styles.module.css":((j,m,t)=>{"use strict";t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(n),v=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(v),i=_()(d());i.push([j.id,`.alertTop--NjOq3{
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
}`,""]),i.locals={alertTop:"alertTop--NjOq3",icon:"icon--BJHKt",title:"title--_IIfo",description:"description--soNqk",contentWrapper:"contentWrapper--lOCSV",contentLayout:"contentLayout--hwzK3",textLayout:"textLayout--VbHrm",actions:"actions--WIRVG"};const p=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.17_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/helperComponents/styles.module.css":((j,m,t)=>{"use strict";t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(n),v=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(v),i=_()(d());i.push([j.id,`.alertButton--FO0Pc{
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
}`,""]),i.locals={alertButton:"alertButton--FO0Pc",text:"text--Wtpjn",icon:"icon--DmfKT"};const p=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.15_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((j,m,t)=>{"use strict";t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(n),v=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(v),i=_()(d());i.push([j.id,`.avatar--ARVj9{
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
}`,""]),i.locals={avatar:"avatar--ARVj9",image:"image--jWIVW",indicatorWrapper:"indicatorWrapper--mfeLu"};const p=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css":((j,m,t)=>{"use strict";t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(n),v=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(v),i=_()(d());i.push([j.id,`.button--n3vAI[data-size=xs] .label--qV8ML{
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
}`,""]),i.locals={button:"button--n3vAI",label:"label--qV8ML",icon:"icon--KODKN"};const p=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css":((j,m,t)=>{"use strict";t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(n),v=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(v),i=_()(d());i.push([j.id,`.horizontal--BAWtQ{
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
}`,""]),i.locals={horizontal:"horizontal--BAWtQ",vertical:"vertical--Os_1s"};const p=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.4.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css":((j,m,t)=>{"use strict";t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(n),v=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(v),i=_()(d());i.push([j.id,`.dropdownContainer--YMHDp{
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
}`,""]),i.locals={dropdownContainer:"dropdownContainer--YMHDp",defaultTriggerClassName:"defaultTriggerClassName--e5ivY"};const p=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((j,m,t)=>{"use strict";t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(n),v=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(v),i=_()(d());i.push([j.id,`.sun--oC6I4{
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
}`,""]),i.locals={sun:"sun--oC6I4","loading-wheel":"loading-wheel--YnKg9"};const p=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((j,m,t)=>{"use strict";t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(n),v=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(v),i=_()(d());i.push([j.id,`.sun--Mw8Oo{
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
}`,""]),i.locals={sun:"sun--Mw8Oo","loading-wheel":"loading-wheel--wXeN0"};const p=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.14.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css":((j,m,t)=>{"use strict";t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(n),v=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(v),i=_()(d());i.push([j.id,`.floating--zdZE3{
  display:flex;
  flex-direction:column;
}

.floatingHidden--fLsvv{
  display:none;
}`,""]),i.locals={floating:"floating--zdZE3",floatingHidden:"floatingHidden--fLsvv"};const p=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((j,m,t)=>{"use strict";t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(n),v=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(v),i=_()(d());i.push([j.id,`.container--LWxw3{
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
}`,""]),i.locals={container:"container--LWxw3",indicator:"indicator--w2F9H"};const p=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((j,m,t)=>{"use strict";t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(n),v=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(v),i=_()(d());i.push([j.id,`.text1Line--FqBXb{
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
}`,""]),i.locals={text1Line:"text1Line--FqBXb",ellipsis:"ellipsis--Z6AY6",text2AndMoreLines:"text2AndMoreLines--xbsHF",tooltipTrigger:"tooltipTrigger--pvUWx"};const p=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((j,m,t)=>{"use strict";t.d(m,{A:()=>p});var n=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=t.n(n),v=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),_=t.n(v),i=_()(d());i.push([j.id,`.wrapper--rkL6A{
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
}`,""]),i.locals={wrapper:"wrapper--rkL6A",truncatedText:"truncatedText--QcECJ",fullText:"fullText--sBn3t",textContainer:"textContainer--x4Ois"};const p=i}),"./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js":((j,m,t)=>{"use strict";t.d(m,{A:()=>n});function n(){for(var d=[],v=0;v<arguments.length;v++)d[v]=arguments[v];var _=d.filter(Boolean);if(_.length<=1){var i=_[0];return i||null}return function(x){_.forEach(function(c){typeof c=="function"?c(x):c&&(c.current=x)})}}})}]);})();
