"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2555],{"./node_modules/.pnpm/@snack-uikit+alert@0.16.28_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/AlertTop.js":((_,c,e)=>{e.d(c,{W:()=>P});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(p),b=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+link@0.17.20_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/Link.js"),v=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),T=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),u=e("./node_modules/.pnpm/@snack-uikit+alert@0.16.28_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/constants.js"),j=e("./node_modules/.pnpm/@snack-uikit+alert@0.16.28_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/helperComponents/AlertButton.js"),A=e("./node_modules/.pnpm/@snack-uikit+alert@0.16.28_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/utils.js");const O={InvertNeutral:"invert-neutral",Primary:"primary",Red:"red",Yellow:"yellow",Green:"green",Blue:"blue"},t={[u.xz.Neutral]:O.InvertNeutral,[u.xz.Primary]:O.Primary,[u.xz.Error]:O.Red,[u.xz.Warning]:O.Yellow,[u.xz.Success]:O.Green,[u.xz.Info]:O.Blue};var r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(r),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=e.n(a),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),I=e.n(L),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=e.n(w),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n(F),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=e.n(S),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.28_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/styles.module.css"),y={};y.styleTagTransform=h(),y.setAttributes=B(),y.insert=I().bind(null,"head"),y.domAPI=n(),y.insertStyleElement=E();var l=o()(f.A,y);const d=f.A&&f.A.locals?f.A.locals:void 0;var x=function(g,z){var D={};for(var k in g)Object.prototype.hasOwnProperty.call(g,k)&&z.indexOf(k)<0&&(D[k]=g[k]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,k=Object.getOwnPropertySymbols(g);M<k.length;M++)z.indexOf(k[M])<0&&Object.prototype.propertyIsEnumerable.call(g,k[M])&&(D[k[M]]=g[k[M]]);return D};function P(g){var z,{icon:D=!0,title:k,description:M,link:R,onClose:K,truncate:N,appearance:W=u.xz.Neutral,action:X,className:U}=g,C=x(g,["icon","title","description","link","onClose","truncate","appearance","action","className"]);return(0,s.jsxs)("div",Object.assign({className:m()(d.alertTop,U)},(0,T.z7)(C),{"data-color":t[W],children:[(0,s.jsxs)("div",{className:d.contentWrapper,children:[D&&(0,s.jsx)("div",{className:d.icon,"data-color":t[W],"data-test-id":"alert-top__icon",children:(0,A.s)(W,24)}),(0,s.jsxs)("div",{className:d.contentLayout,children:[(0,s.jsxs)("div",{className:d.textLayout,children:[k&&(0,s.jsx)("div",{className:d.title,"data-color":t[W],"data-test-id":"alert-top__title",children:(0,s.jsx)(v.m,{text:k,maxLines:(z=N==null?void 0:N.title)!==null&&z!==void 0?z:1})}),(0,s.jsx)("span",{className:d.description,"data-color":t[W],"data-test-id":"alert-top__description",children:M})]}),R&&(0,s.jsx)("span",{children:(0,s.jsx)(i.N,Object.assign({},R,{appearance:u.o$[W],textMode:"on-accent",size:"m","data-test-id":"alert-top__link"}))})]})]}),(0,s.jsxs)("div",{className:d.actions,children:[X&&(0,s.jsx)(j.X,Object.assign({},X,{appearance:t[W],variant:"tonal"})),K&&(0,s.jsx)(j.X,{onClick:K,appearance:t[W],icon:(0,s.jsx)(b.A,{}),variant:"tonal",dataTestId:"alert-top__close-button"})]})]}))}}),"./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((_,c,e)=>{e.d(c,{e:()=>P});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(p),b=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js"),v=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const T={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},u={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},j={Round:"round",Square:"square"};var A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=e.n(A),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),r=e.n(t),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),a=e.n(o),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=e.n(n),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=e.n(I),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),F=e.n(B),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),S={};S.styleTagTransform=F(),S.setAttributes=L(),S.insert=a().bind(null,"head"),S.domAPI=r(),S.insertStyleElement=w();var h=O()(E.A,S);const f=E.A&&E.A.locals?E.A.locals:void 0,y=" ",l=(g,z)=>{var D;const k=g.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!k||k.length<z)return k.toUpperCase();const M=k.split(y);let R=k;if(M.length>1){const K=M[0].charAt(0),N=(D=M[M.length-1])===null||D===void 0?void 0:D.charAt(0);R=`${K}${N}`.toUpperCase()}return R.slice(0,z).toUpperCase()};var d=function(g,z){var D={};for(var k in g)Object.prototype.hasOwnProperty.call(g,k)&&z.indexOf(k)<0&&(D[k]=g[k]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,k=Object.getOwnPropertySymbols(g);M<k.length;M++)z.indexOf(k[M])<0&&Object.prototype.propertyIsEnumerable.call(g,k[M])&&(D[k[M]]=g[k[M]]);return D};const x={[u.Xxs]:"xxs",[u.Xs]:"xs",[u.S]:"xs",[u.M]:"m",[u.L]:"m",[u.Xl]:"l",[u.Xxl]:"l"};function P(g){var{name:z,appearance:D=T.Red,size:k=u.S,shape:M=j.Round,indicator:R,showTwoSymbols:K,src:N,className:W}=g,X=d(g,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[U,C]=(0,b.useState)(!1),Y=k!==u.Xxs&&K?2:1;return(0,b.useEffect)(()=>{C(!1)},[N]),(0,s.jsxs)("div",Object.assign({className:m()(f.avatar,W)},(0,v.z7)(X),{"data-size":k,"data-appearance":D,"data-shape":M,children:[N&&!U?(0,s.jsx)("img",{"data-test-id":"image",className:f.image,src:N,onError:()=>C(!0),alt:""}):(0,s.jsx)("div",{"data-test-id":"abbreviation",children:l(z,Y)}),R&&(0,s.jsx)("div",{className:f.indicatorWrapper,children:(0,s.jsx)(i.k,{"data-test-id":"indicator",appearance:R,size:x[k]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js":((_,c,e)=>{e.d(c,{b:()=>y});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(p),b=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),v=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),T=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js"),u=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js"),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(j),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),t=e.n(O),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),o=e.n(r),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),n=e.n(a),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=e.n(L),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),B=e.n(w),F=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css"),E={};E.styleTagTransform=B(),E.setAttributes=n(),E.insert=o().bind(null,"head"),E.domAPI=t(),E.insertStyleElement=I();var S=A()(F.A,E);const h=F.A&&F.A.locals?F.A.locals:void 0;var f=function(l,d){var x={};for(var P in l)Object.prototype.hasOwnProperty.call(l,P)&&d.indexOf(P)<0&&(x[P]=l[P]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,P=Object.getOwnPropertySymbols(l);g<P.length;g++)d.indexOf(P[g])<0&&Object.prototype.propertyIsEnumerable.call(l,P[g])&&(x[P[g]]=l[P[g]]);return x};const y=(0,b.forwardRef)((l,d)=>{var{className:x,iconPosition:P=v._B.After,size:g=v.SK.S,target:z=v.Qn.Blank,type:D=v.dk.Button,appearance:k=v.xz.Neutral,fullWidth:M=!1,tabIndex:R}=l,K=f(l,["className","iconPosition","size","target","type","appearance","fullWidth","tabIndex"]);return(0,s.jsx)(T.A,Object.assign({},(0,i.z7)(K),(0,u.a)(K),(0,u.F)(K),{className:m()(h.button,x),iconClassName:h.icon,iconPosition:P,labelClassName:h.label,size:g,fullWidth:M,target:z,type:D,appearance:k,tabIndex:R,ref:d}))})}),"./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js":((_,c,e)=>{e.d(c,{c:()=>h});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(p),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const i={Horizontal:"horizontal",Vertical:"vertical"},v={Light:"light",Regular:"regular"};var T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(T),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(j),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),t=e.n(O),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=e.n(r),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),n=e.n(a),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=e.n(L),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),B={};B.styleTagTransform=I(),B.setAttributes=o(),B.insert=t().bind(null,"head"),B.domAPI=A(),B.insertStyleElement=n();var F=u()(w.A,B);const E=w.A&&w.A.locals?w.A.locals:void 0;var S=function(f,y){var l={};for(var d in f)Object.prototype.hasOwnProperty.call(f,d)&&y.indexOf(d)<0&&(l[d]=f[d]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,d=Object.getOwnPropertySymbols(f);x<d.length;x++)y.indexOf(d[x])<0&&Object.prototype.propertyIsEnumerable.call(f,d[x])&&(l[d[x]]=f[d[x]]);return l};function h(f){var{className:y,orientation:l=i.Horizontal,weight:d=v.Regular}=f,x=S(f,["className","orientation","weight"]);const P=Object.assign(Object.assign({},(0,b.z7)(x)),{"data-weight":d});return l===i.Horizontal?(0,s.jsx)("hr",Object.assign({className:m()(E.horizontal,y)},P)):(0,s.jsx)("div",Object.assign({className:m()(E.vertical,y)},P))}}),"./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js":((_,c,e)=>{e.d(c,{m:()=>E});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(p),b=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=e.n(i),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=e.n(T),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),A=e.n(j),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),t=e.n(O),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),o=e.n(r),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),n=e.n(a),L=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"),I={};I.styleTagTransform=n(),I.setAttributes=t(),I.insert=A().bind(null,"head"),I.domAPI=u(),I.insertStyleElement=o();var w=v()(L.A,I);const B=L.A&&L.A.locals?L.A.locals:void 0;var F=function(S,h){var f={};for(var y in S)Object.prototype.hasOwnProperty.call(S,y)&&h.indexOf(y)<0&&(f[y]=S[y]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,y=Object.getOwnPropertySymbols(S);l<y.length;l++)h.indexOf(y[l])<0&&Object.prototype.propertyIsEnumerable.call(S,y[l])&&(f[y[l]]=S[y[l]]);return f};function E(S){var{content:h,trigger:f="click",placement:y="bottom-start",children:l,triggerRef:d,widthStrategy:x="gte",triggerClassName:P}=S,g=F(S,["content","trigger","placement","children","triggerRef","widthStrategy","triggerClassName"]);return!l&&!d?null:(0,s.jsx)(b.Z,Object.assign({placement:y,popoverContent:(0,s.jsx)("div",{className:B.dropdownContainer,children:h}),trigger:f,triggerRef:d,hasArrow:!1,widthStrategy:x,triggerClassName:m()(B.defaultTriggerClassName,P)},g,{children:l}))}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js":((_,c,e)=>{e.d(c,{A:()=>O});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};const i=p.forwardRef((t,r)=>{var{size:o=24}=t,a=m(t,["size"]);a.width=void 0,a.height=void 0;const n="-chevron-down-s";return typeof o=="number"&&(a.style||(a.style={}),a.style.width=o+"px",a.style.height=o+"px"),(0,s.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},a,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var v=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};const u=p.forwardRef((t,r)=>{var{size:o=24}=t,a=v(t,["size"]);a.width=void 0,a.height=void 0;const n="-chevron-down-xs";return typeof o=="number"&&(a.style||(a.style={}),a.style.width=o+"px",a.style.height=o+"px"),(0,s.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},a,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var j=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};const O=(0,p.forwardRef)((t,r)=>{var{size:o=24}=t,a=j(t,["size"]);return Number(o)>=20?(0,s.jsx)(i,Object.assign({ref:r,size:o},a)):(0,s.jsx)(u,Object.assign({ref:r,size:o},a))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js":((_,c,e)=>{e.d(c,{A:()=>O});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};const i=p.forwardRef((t,r)=>{var{size:o=24}=t,a=m(t,["size"]);a.width=void 0,a.height=void 0;const n="-chevron-up-s";return typeof o=="number"&&(a.style||(a.style={}),a.style.width=o+"px",a.style.height=o+"px"),(0,s.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},a,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var v=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};const u=p.forwardRef((t,r)=>{var{size:o=24}=t,a=v(t,["size"]);a.width=void 0,a.height=void 0;const n="-chevron-up-xs";return typeof o=="number"&&(a.style||(a.style={}),a.style.width=o+"px",a.style.height=o+"px"),(0,s.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},a,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var j=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};const O=(0,p.forwardRef)((t,r)=>{var{size:o=24}=t,a=j(t,["size"]);return Number(o)>=20?(0,s.jsx)(i,Object.assign({ref:r,size:o},a)):(0,s.jsx)(u,Object.assign({ref:r,size:o},a))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/more/index.js":((_,c,e)=>{e.d(c,{A:()=>O});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};const i=p.forwardRef((t,r)=>{var{size:o=24}=t,a=m(t,["size"]);a.width=void 0,a.height=void 0;const n="-more-s";return typeof o=="number"&&(a.style||(a.style={}),a.style.width=o+"px",a.style.height=o+"px"),(0,s.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},a,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var v=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};const u=p.forwardRef((t,r)=>{var{size:o=24}=t,a=v(t,["size"]);a.width=void 0,a.height=void 0;const n="-more-xs";return typeof o=="number"&&(a.style||(a.style={}),a.style.width=o+"px",a.style.height=o+"px"),(0,s.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},a,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var j=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};const O=(0,p.forwardRef)((t,r)=>{var{size:o=24}=t,a=j(t,["size"]);return Number(o)>=20?(0,s.jsx)(i,Object.assign({ref:r,size:o},a)):(0,s.jsx)(u,Object.assign({ref:r,size:o},a))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/scalableRight/index.js":((_,c,e)=>{e.d(c,{A:()=>O});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),m=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};const i=p.forwardRef((t,r)=>{var{size:o=24}=t,a=m(t,["size"]);a.width=void 0,a.height=void 0;const n="-scalable-right-s";return typeof o=="number"&&(a.style||(a.style={}),a.style.width=o+"px",a.style.height=o+"px"),(0,s.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},a,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var v=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};const u=p.forwardRef((t,r)=>{var{size:o=24}=t,a=v(t,["size"]);a.width=void 0,a.height=void 0;const n="-scalable-right-xs";return typeof o=="number"&&(a.style||(a.style={}),a.style.width=o+"px",a.style.height=o+"px"),(0,s.jsx)("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},a,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var j=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(t);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(t,a[n])&&(o[a[n]]=t[a[n]]);return o};const O=(0,p.forwardRef)((t,r)=>{var{size:o=24}=t,a=j(t,["size"]);return Number(o)>=20?(0,s.jsx)(i,Object.assign({ref:r,size:o},a)):(0,s.jsx)(u,Object.assign({ref:r,size:o},a))})}),"./node_modules/.pnpm/@snack-uikit+link@0.18.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/Link.js":((_,c,e)=>{e.d(c,{N:()=>d});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(p),b=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),i=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const v={InvertNeutral:"invert-neutral",Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},T={S:"s",M:"m",L:"l"},u={Display:"display",Headline:"headline",Title:"title",Label:"label",Body:"body"},j={Self:"_self",Blank:"_blank",Parent:"_parent",Top:"_top"},A={Default:"default",Accent:"accent",OnAccent:"on-accent"};var O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(O),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),o=e.n(r),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),n=e.n(a),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),I=e.n(L),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(w),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(F),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+link@0.18.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/styles.module.css"),h={};h.styleTagTransform=E(),h.setAttributes=I(),h.insert=n().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=B();var f=t()(S.A,h);const y=S.A&&S.A.locals?S.A.locals:void 0;var l=function(x,P){var g={};for(var z in x)Object.prototype.hasOwnProperty.call(x,z)&&P.indexOf(z)<0&&(g[z]=x[z]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,z=Object.getOwnPropertySymbols(x);D<z.length;D++)P.indexOf(z[D])<0&&Object.prototype.propertyIsEnumerable.call(x,z[D])&&(g[z[D]]=x[z[D]]);return g};function d(x){var P,g,{text:z="",className:D,textMode:k=A.Default,size:M=T.S,purpose:R=u.Body,appearance:K=v.Primary,insideText:N=!1,truncateVariant:W,truncateMaxLines:X=1,as:U}=x,C=l(x,["text","className","textMode","size","purpose","appearance","insideText","truncateVariant","truncateMaxLines","as"]);const Y=U||"a";let V;return Y==="a"?(V=Object.assign({target:(P=C==null?void 0:C.target)!==null&&P!==void 0?P:j.Blank,href:(g=C.href)!==null&&g!==void 0?g:"#",download:C.download,onClick:C.onClick},(0,i.z7)(C)),V.rel=V.target===j.Blank?"noopener noreferrer":void 0):V=C,(0,s.jsx)(Y,Object.assign({className:m()(y.link,D)},V,{"data-size":M,"data-purpose":R,"data-text-mode":k,"data-appearance":K,"data-inside-text":N||void 0,children:N?z:(0,s.jsx)(b.m,{text:z,maxLines:X,variant:W})}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js":((_,c,e)=>{e.d(c,{b:()=>S});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(p),b=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),i=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=e.n(v),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),j=e.n(u),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),O=e.n(A),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=e.n(t),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),a=e.n(o),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(n),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),w={};w.styleTagTransform=L(),w.setAttributes=r(),w.insert=O().bind(null,"head"),w.domAPI=j(),w.insertStyleElement=a();var B=T()(I.A,w);const F=I.A&&I.A.locals?I.A.locals:void 0;var E=function(h,f){var y={};for(var l in h)Object.prototype.hasOwnProperty.call(h,l)&&f.indexOf(l)<0&&(y[l]=h[l]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,l=Object.getOwnPropertySymbols(h);d<l.length;d++)f.indexOf(l[d])<0&&Object.prototype.propertyIsEnumerable.call(h,l[d])&&(y[l[d]]=h[l[d]]);return y};function S(h){var{size:f=i.K.S,className:y}=h,l=E(h,["size","className"]);return(0,s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:m()(F.sun,y)},(0,b.z7)(l),{"data-size":f,children:[(0,s.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js":((_,c,e)=>{e.d(c,{K:()=>s});const s={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js":((_,c,e)=>{e.d(c,{b:()=>S});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(p),b=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),i=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=e.n(v),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),j=e.n(u),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),O=e.n(A),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),r=e.n(t),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),a=e.n(o),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(n),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),w={};w.styleTagTransform=L(),w.setAttributes=r(),w.insert=O().bind(null,"head"),w.domAPI=j(),w.insertStyleElement=a();var B=T()(I.A,w);const F=I.A&&I.A.locals?I.A.locals:void 0;var E=function(h,f){var y={};for(var l in h)Object.prototype.hasOwnProperty.call(h,l)&&f.indexOf(l)<0&&(y[l]=h[l]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,l=Object.getOwnPropertySymbols(h);d<l.length;d++)f.indexOf(l[d])<0&&Object.prototype.propertyIsEnumerable.call(h,l[d])&&(y[l[d]]=h[l[d]]);return y};function S(h){var{size:f=i.K.S,className:y}=h,l=E(h,["size","className"]);return(0,s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:m()(F.sun,y)},(0,b.z7)(l),{"data-size":f,children:[(0,s.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js":((_,c,e)=>{e.d(c,{K:()=>s});const s={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js":((_,c,e)=>{e.d(c,{k:()=>h});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(p),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),i=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js"),v=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js"),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(T),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(j),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),t=e.n(O),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=e.n(r),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),n=e.n(a),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=e.n(L),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),B={};B.styleTagTransform=I(),B.setAttributes=o(),B.insert=t().bind(null,"head"),B.domAPI=A(),B.insertStyleElement=n();var F=u()(w.A,B);const E=w.A&&w.A.locals?w.A.locals:void 0;var S=function(f,y){var l={};for(var d in f)Object.prototype.hasOwnProperty.call(f,d)&&y.indexOf(d)<0&&(l[d]=f[d]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,d=Object.getOwnPropertySymbols(f);x<d.length;x++)y.indexOf(d[x])<0&&Object.prototype.propertyIsEnumerable.call(f,d[x])&&(l[d[x]]=f[d[x]]);return l};function h(f){var{size:y=v.S.M,appearance:l=i.x.Primary,className:d}=f,x=S(f,["size","appearance","className"]);return(0,s.jsx)("div",Object.assign({className:m()(E.container,d)},(0,b.z7)(x),{"data-size":y,children:(0,s.jsx)("div",{className:E.indicator,"data-appearance":l})}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js":((_,c,e)=>{e.d(c,{S:()=>s});const s={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js":((_,c,e)=>{e.d(c,{x:()=>s});const s={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"}}),"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js":((_,c,e)=>{e.d(c,{N:()=>m});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const m=(0,p.B)()?s.useLayoutEffect:s.useEffect}),"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js":((_,c,e)=>{e.d(c,{B:()=>s});function s(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((_,c,e)=>{e.d(c,{z7:()=>T});const s=/^data-test-/,p=/^(data|aria)-/;function m(u,j){return Object.keys(u).filter(A=>!A.match(j)).reduce((A,O)=>Object.assign(Object.assign({},A),{[O]:u[O]}),{})}function b(u,j){return Object.keys(u).reduce((A,O)=>(O.match(j)&&(A[O]=u[O]),A),{})}function i(u){return m(u,p)}function v(u){return b(u,s)}function T(u){return b(u,p)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.28_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/styles.module.css":((_,c,e)=>{e.d(c,{A:()=>v});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),i=b()(p());i.push([_.id,`.alertTop--gRmS9{
  padding-top:var(--space-alert-top-container-vertical-padding, 8px);
  padding-bottom:var(--space-alert-top-container-vertical-padding, 8px);
  padding-left:var(--space-alert-top-container-horizontal-padding, 16px);
  padding-right:var(--space-alert-top-container-horizontal-padding, 16px);
  gap:var(--space-alert-top-container-gap, 16px);
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
}
.alertTop--gRmS9[data-color=invert-neutral]{
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.alertTop--gRmS9[data-color=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.alertTop--gRmS9[data-color=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.alertTop--gRmS9[data-color=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.alertTop--gRmS9[data-color=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.alertTop--gRmS9[data-color=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}

.icon--kiNXP{
  display:flex;
  align-items:center;
  justify-content:center;
}
.icon--kiNXP[data-color=invert-neutral]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.icon--kiNXP[data-color=primary]{
  color:var(--sys-primary-on-accent, #fbfffc);
}
.icon--kiNXP[data-color=red]{
  color:var(--sys-red-on-accent, #fffbf9);
}
.icon--kiNXP[data-color=yellow]{
  color:var(--sys-yellow-on-accent, #583f1f);
}
.icon--kiNXP[data-color=green]{
  color:var(--sys-green-on-accent, #fcfefa);
}
.icon--kiNXP[data-color=blue]{
  color:var(--sys-blue-on-accent, #fdfeff);
}
.icon--kiNXP svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.title--fD2QB{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
}
.title--fD2QB[data-color=invert-neutral]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.title--fD2QB[data-color=primary]{
  color:var(--sys-primary-on-accent, #fbfffc);
}
.title--fD2QB[data-color=red]{
  color:var(--sys-red-on-accent, #fffbf9);
}
.title--fD2QB[data-color=yellow]{
  color:var(--sys-yellow-on-accent, #583f1f);
}
.title--fD2QB[data-color=green]{
  color:var(--sys-green-on-accent, #fcfefa);
}
.title--fD2QB[data-color=blue]{
  color:var(--sys-blue-on-accent, #fdfeff);
}

.description--DbTM2{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  word-wrap:break-word;
}
.description--DbTM2[data-color=invert-neutral]{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.description--DbTM2[data-color=primary]{
  color:var(--sys-primary-on-accent, #fbfffc);
}
.description--DbTM2[data-color=red]{
  color:var(--sys-red-on-accent, #fffbf9);
}
.description--DbTM2[data-color=yellow]{
  color:var(--sys-yellow-on-accent, #583f1f);
}
.description--DbTM2[data-color=green]{
  color:var(--sys-green-on-accent, #fcfefa);
}
.description--DbTM2[data-color=blue]{
  color:var(--sys-blue-on-accent, #fdfeff);
}

.contentWrapper--FtAvY{
  display:flex;
  gap:var(--dimension-2m, 16px);
  align-items:center;
  min-width:0;
}

.contentLayout--SBKv4{
  gap:var(--space-alert-top-container-content-layout-gap, 2px);
  display:flex;
  flex-direction:column;
  min-width:0;
}

.textLayout--jDYi5{
  overflow:hidden;
}

.actions--DHms_{
  display:flex;
  gap:var(--dimension-2m, 16px);
  align-items:center;
}`,""]),i.locals={alertTop:"alertTop--gRmS9",icon:"icon--kiNXP",title:"title--fD2QB",description:"description--DbTM2",contentWrapper:"contentWrapper--FtAvY",contentLayout:"contentLayout--SBKv4",textLayout:"textLayout--jDYi5",actions:"actions--DHms_"};const v=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((_,c,e)=>{e.d(c,{A:()=>v});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),i=b()(p());i.push([_.id,`.avatar--wYdfL{
  position:relative;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.avatar--wYdfL[data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.avatar--wYdfL[data-appearance=orange]{
  color:var(--sys-orange-text-main, #884c23);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.avatar--wYdfL[data-appearance=yellow]{
  color:var(--sys-yellow-text-main, #815f19);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.avatar--wYdfL[data-appearance=green]{
  color:var(--sys-green-text-main, #3d6035);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.avatar--wYdfL[data-appearance=blue]{
  color:var(--sys-blue-text-main, #2b537e);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.avatar--wYdfL[data-appearance=violet]{
  color:var(--sys-violet-text-main, #59446a);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.avatar--wYdfL[data-appearance=pink]{
  color:var(--sys-pink-text-main, #754158);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.avatar--wYdfL[data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.avatar--wYdfL[data-size=xxs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--wYdfL[data-size=xxs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxs, 8px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--wYdfL[data-size=xxs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxs, 4px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--wYdfL[data-size=xs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--wYdfL[data-size=xs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xs, 16px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--wYdfL[data-size=xs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xs, 4px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--wYdfL[data-size=s]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.avatar--wYdfL[data-size=s][data-shape=round]{
  border-radius:var(--radius-avatar-round-s, 24px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--wYdfL[data-size=s][data-shape=square]{
  border-radius:var(--radius-avatar-square-s, 4px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--wYdfL[data-size=m]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.avatar--wYdfL[data-size=m][data-shape=round]{
  border-radius:var(--radius-avatar-round-m, 24px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--wYdfL[data-size=m][data-shape=square]{
  border-radius:var(--radius-avatar-square-m, 8px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--wYdfL[data-size=l]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.avatar--wYdfL[data-size=l][data-shape=round]{
  border-radius:var(--radius-avatar-round-l, 32px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--wYdfL[data-size=l][data-shape=square]{
  border-radius:var(--radius-avatar-square-l, 12px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--wYdfL[data-size=xl]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.avatar--wYdfL[data-size=xl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xl, 48px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--wYdfL[data-size=xl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xl, 16px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--wYdfL[data-size=xxl]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.avatar--wYdfL[data-size=xxl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxl, 64px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}
.avatar--wYdfL[data-size=xxl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxl, 20px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}

.image--wMeYb{
  width:100%;
  height:100%;
  -o-object-fit:cover;
     object-fit:cover;
  -o-object-position:center;
     object-position:center;
  border-radius:inherit;
}

.indicatorWrapper--Zl3rW{
  position:absolute;
  right:0;
  bottom:0;
  display:inline-flex;
}`,""]),i.locals={avatar:"avatar--wYdfL",image:"image--wMeYb",indicatorWrapper:"indicatorWrapper--Zl3rW"};const v=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css":((_,c,e)=>{e.d(c,{A:()=>v});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),i=b()(p());i.push([_.id,`.button--n3vAI[data-size=xs] .label--qV8ML{
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
}`,""]),i.locals={button:"button--n3vAI",label:"label--qV8ML",icon:"icon--KODKN"};const v=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css":((_,c,e)=>{e.d(c,{A:()=>v});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),i=b()(p());i.push([_.id,`.horizontal--BAWtQ{
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
}`,""]),i.locals={horizontal:"horizontal--BAWtQ",vertical:"vertical--Os_1s"};const v=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css":((_,c,e)=>{e.d(c,{A:()=>v});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),i=b()(p());i.push([_.id,`.dropdownContainer--thkj4{
  padding-top:var(--space-drop-list-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-container-vertical-padding, 4px);
  border-radius:var(--radius-drop-list-container, 4px);
  overflow:hidden;
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  box-shadow:var(--box-shadow-elevation-level3, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 8px 16px 0px rgba(0, 0, 0, 0.0784313725));
}

.defaultTriggerClassName--J_CUP{
  --offset:var(--space-drop-list-drop-offset, 4px);
}`,""]),i.locals={dropdownContainer:"dropdownContainer--thkj4",defaultTriggerClassName:"defaultTriggerClassName--J_CUP"};const v=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+link@0.18.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/styles.module.css":((_,c,e)=>{e.d(c,{A:()=>v});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),i=b()(p());i.push([_.id,`.link--iOLFu{
  cursor:pointer;
  display:inline-flex;
  align-items:center;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  text-decoration:none;
  -webkit-text-decoration-skip-ink:none;
          text-decoration-skip-ink:none;
}
.link--iOLFu[data-inside-text]{
  display:inline;
}
.link--iOLFu[data-appearance=invert-neutral][data-text-mode=default]{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.link--iOLFu[data-appearance=invert-neutral][data-text-mode=default]:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.link--iOLFu[data-appearance=invert-neutral][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=invert-neutral][data-text-mode=accent]{
  color:var(--sys-invert-neutral-accent-default, #cfd2dc);
}
.link--iOLFu[data-appearance=invert-neutral][data-text-mode=accent]:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.link--iOLFu[data-appearance=invert-neutral][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--iOLFu[data-appearance=invert-neutral][data-text-mode=on-accent]{
  color:var(--sys-invert-neutral-on-accent, #393a46);
}
.link--iOLFu[data-appearance=invert-neutral][data-text-mode=on-accent]:hover{
  color:var(--sys-invert-neutral-on-accent, #393a46);
  opacity:var(--opacity-a080, 0.8);
}
.link--iOLFu[data-appearance=invert-neutral][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-on-accent, #393a46);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--iOLFu[data-appearance=neutral][data-text-mode=default]{
  color:var(--sys-neutral-text-support, #6d707f);
}
.link--iOLFu[data-appearance=neutral][data-text-mode=default]:hover{
  color:var(--sys-neutral-text-main, #41424e);
}
.link--iOLFu[data-appearance=neutral][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-main, #41424e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=neutral][data-text-mode=accent]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.link--iOLFu[data-appearance=neutral][data-text-mode=accent]:hover{
  color:var(--sys-neutral-text-main, #41424e);
}
.link--iOLFu[data-appearance=neutral][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-main, #41424e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=neutral][data-text-mode=on-accent]{
  color:var(--sys-neutral-on-accent, #ffffff);
}
.link--iOLFu[data-appearance=neutral][data-text-mode=on-accent]:hover{
  color:var(--sys-neutral-on-accent, #ffffff);
  opacity:var(--opacity-a080, 0.8);
}
.link--iOLFu[data-appearance=neutral][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-on-accent, #ffffff);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--iOLFu[data-appearance=primary][data-text-mode=default]{
  color:var(--sys-primary-text-support, #358561);
}
.link--iOLFu[data-appearance=primary][data-text-mode=default]:hover{
  color:var(--sys-primary-text-main, #1b5840);
}
.link--iOLFu[data-appearance=primary][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-primary-text-main, #1b5840);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=primary][data-text-mode=accent]{
  color:var(--sys-primary-accent-default, #389f74);
}
.link--iOLFu[data-appearance=primary][data-text-mode=accent]:hover{
  color:var(--sys-primary-text-main, #1b5840);
}
.link--iOLFu[data-appearance=primary][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-primary-text-main, #1b5840);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=primary][data-text-mode=on-accent]{
  color:var(--sys-primary-on-accent, #fbfffc);
}
.link--iOLFu[data-appearance=primary][data-text-mode=on-accent]:hover{
  color:var(--sys-primary-on-accent, #fbfffc);
  opacity:var(--opacity-a080, 0.8);
}
.link--iOLFu[data-appearance=primary][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-primary-on-accent, #fbfffc);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--iOLFu[data-appearance=red][data-text-mode=default]{
  color:var(--sys-red-text-support, #ae514c);
}
.link--iOLFu[data-appearance=red][data-text-mode=default]:hover{
  color:var(--sys-red-text-main, #7a2d2d);
}
.link--iOLFu[data-appearance=red][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-main, #7a2d2d);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=red][data-text-mode=accent]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.link--iOLFu[data-appearance=red][data-text-mode=accent]:hover{
  color:var(--sys-red-text-main, #7a2d2d);
}
.link--iOLFu[data-appearance=red][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-main, #7a2d2d);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=red][data-text-mode=on-accent]{
  color:var(--sys-red-on-accent, #fffbf9);
}
.link--iOLFu[data-appearance=red][data-text-mode=on-accent]:hover{
  color:var(--sys-red-on-accent, #fffbf9);
  opacity:var(--opacity-a080, 0.8);
}
.link--iOLFu[data-appearance=red][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-on-accent, #fffbf9);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--iOLFu[data-appearance=orange][data-text-mode=default]{
  color:var(--sys-orange-text-support, #bb733e);
}
.link--iOLFu[data-appearance=orange][data-text-mode=default]:hover{
  color:var(--sys-orange-text-main, #884c23);
}
.link--iOLFu[data-appearance=orange][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-orange-text-main, #884c23);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=orange][data-text-mode=accent]{
  color:var(--sys-orange-accent-default, #fb8e42);
}
.link--iOLFu[data-appearance=orange][data-text-mode=accent]:hover{
  color:var(--sys-orange-text-main, #884c23);
}
.link--iOLFu[data-appearance=orange][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-orange-text-main, #884c23);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=orange][data-text-mode=on-accent]{
  color:var(--sys-orange-on-accent, #fffcf4);
}
.link--iOLFu[data-appearance=orange][data-text-mode=on-accent]:hover{
  color:var(--sys-orange-on-accent, #fffcf4);
  opacity:var(--opacity-a080, 0.8);
}
.link--iOLFu[data-appearance=orange][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-orange-on-accent, #fffcf4);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--iOLFu[data-appearance=blue][data-text-mode=default]{
  color:var(--sys-blue-text-support, #4877b0);
}
.link--iOLFu[data-appearance=blue][data-text-mode=default]:hover{
  color:var(--sys-blue-text-main, #2b537e);
}
.link--iOLFu[data-appearance=blue][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-blue-text-main, #2b537e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=blue][data-text-mode=accent]{
  color:var(--sys-blue-accent-default, #5388d1);
}
.link--iOLFu[data-appearance=blue][data-text-mode=accent]:hover{
  color:var(--sys-blue-text-main, #2b537e);
}
.link--iOLFu[data-appearance=blue][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-blue-text-main, #2b537e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=blue][data-text-mode=on-accent]{
  color:var(--sys-blue-on-accent, #fdfeff);
}
.link--iOLFu[data-appearance=blue][data-text-mode=on-accent]:hover{
  color:var(--sys-blue-on-accent, #fdfeff);
  opacity:var(--opacity-a080, 0.8);
}
.link--iOLFu[data-appearance=blue][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-blue-on-accent, #fdfeff);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--iOLFu[data-appearance=violet][data-text-mode=default]{
  color:var(--sys-violet-text-support, #8c639b);
}
.link--iOLFu[data-appearance=violet][data-text-mode=default]:hover{
  color:var(--sys-violet-text-main, #59446a);
}
.link--iOLFu[data-appearance=violet][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-violet-text-main, #59446a);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=violet][data-text-mode=accent]{
  color:var(--sys-violet-accent-default, #aa6cc1);
}
.link--iOLFu[data-appearance=violet][data-text-mode=accent]:hover{
  color:var(--sys-violet-text-main, #59446a);
}
.link--iOLFu[data-appearance=violet][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-violet-text-main, #59446a);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=violet][data-text-mode=on-accent]{
  color:var(--sys-violet-on-accent, #fdfdfd);
}
.link--iOLFu[data-appearance=violet][data-text-mode=on-accent]:hover{
  color:var(--sys-violet-on-accent, #fdfdfd);
  opacity:var(--opacity-a080, 0.8);
}
.link--iOLFu[data-appearance=violet][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-violet-on-accent, #fdfdfd);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--iOLFu[data-appearance=pink][data-text-mode=default]{
  color:var(--sys-pink-text-support, #ae5e80);
}
.link--iOLFu[data-appearance=pink][data-text-mode=default]:hover{
  color:var(--sys-pink-text-main, #754158);
}
.link--iOLFu[data-appearance=pink][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-pink-text-main, #754158);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=pink][data-text-mode=accent]{
  color:var(--sys-pink-accent-default, #d1668e);
}
.link--iOLFu[data-appearance=pink][data-text-mode=accent]:hover{
  color:var(--sys-pink-text-main, #754158);
}
.link--iOLFu[data-appearance=pink][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-pink-text-main, #754158);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=pink][data-text-mode=on-accent]{
  color:var(--sys-pink-on-accent, #fdfcfc);
}
.link--iOLFu[data-appearance=pink][data-text-mode=on-accent]:hover{
  color:var(--sys-pink-on-accent, #fdfcfc);
  opacity:var(--opacity-a080, 0.8);
}
.link--iOLFu[data-appearance=pink][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-pink-on-accent, #fdfcfc);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--iOLFu[data-appearance=yellow][data-text-mode=default]{
  color:var(--sys-yellow-text-support, #b78c32);
}
.link--iOLFu[data-appearance=yellow][data-text-mode=default]:hover{
  color:var(--sys-yellow-text-main, #815f19);
}
.link--iOLFu[data-appearance=yellow][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-yellow-text-main, #815f19);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=yellow][data-text-mode=accent]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.link--iOLFu[data-appearance=yellow][data-text-mode=accent]:hover{
  color:var(--sys-yellow-text-main, #815f19);
}
.link--iOLFu[data-appearance=yellow][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-yellow-text-main, #815f19);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=yellow][data-text-mode=on-accent]{
  color:var(--sys-yellow-on-accent, #583f1f);
}
.link--iOLFu[data-appearance=yellow][data-text-mode=on-accent]:hover{
  color:var(--sys-yellow-on-accent, #583f1f);
  opacity:var(--opacity-a080, 0.8);
}
.link--iOLFu[data-appearance=yellow][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-yellow-on-accent, #583f1f);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--iOLFu[data-appearance=green][data-text-mode=default]{
  color:var(--sys-green-text-support, #55915a);
}
.link--iOLFu[data-appearance=green][data-text-mode=default]:hover{
  color:var(--sys-green-text-main, #3d6035);
}
.link--iOLFu[data-appearance=green][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-green-text-main, #3d6035);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=green][data-text-mode=accent]{
  color:var(--sys-green-accent-default, #57b762);
}
.link--iOLFu[data-appearance=green][data-text-mode=accent]:hover{
  color:var(--sys-green-text-main, #3d6035);
}
.link--iOLFu[data-appearance=green][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-green-text-main, #3d6035);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--iOLFu[data-appearance=green][data-text-mode=on-accent]{
  color:var(--sys-green-on-accent, #fcfefa);
}
.link--iOLFu[data-appearance=green][data-text-mode=on-accent]:hover{
  color:var(--sys-green-on-accent, #fcfefa);
  opacity:var(--opacity-a080, 0.8);
}
.link--iOLFu[data-appearance=green][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-green-on-accent, #fcfefa);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--iOLFu[data-size=s][data-purpose=display][data-text-mode=default]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.link--iOLFu[data-size=s][data-purpose=display][data-text-mode=accent]{
  font-family:var(--link-display-s-font-family, SB Sans Interface);
  font-weight:var(--link-display-s-font-weight, Semibold);
  line-height:var(--link-display-s-line-height, 48px);
  font-size:var(--link-display-s-font-size, 40px);
  letter-spacing:var(--link-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-s-paragraph-spacing, 22px);
  -webkit-text-decoration:var(--link-display-s-text-decoration, underline);
          text-decoration:var(--link-display-s-text-decoration, underline);
}
.link--iOLFu[data-size=s][data-purpose=display][data-text-mode=on-accent]{
  font-family:var(--link-display-s-font-family, SB Sans Interface);
  font-weight:var(--link-display-s-font-weight, Semibold);
  line-height:var(--link-display-s-line-height, 48px);
  font-size:var(--link-display-s-font-size, 40px);
  letter-spacing:var(--link-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-s-paragraph-spacing, 22px);
  -webkit-text-decoration:var(--link-display-s-text-decoration, underline);
          text-decoration:var(--link-display-s-text-decoration, underline);
}
.link--iOLFu[data-size=s][data-purpose=headline][data-text-mode=default]{
  font-family:var(--sans-headline-s-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-s-font-weight, Semibold);
  line-height:var(--sans-headline-s-line-height, 32px);
  font-size:var(--sans-headline-s-font-size, 24px);
  letter-spacing:var(--sans-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-s-paragraph-spacing, 13.2px);
}
.link--iOLFu[data-size=s][data-purpose=headline][data-text-mode=accent]{
  font-family:var(--link-headline-s-font-family, SB Sans Interface);
  font-weight:var(--link-headline-s-font-weight, Semibold);
  line-height:var(--link-headline-s-line-height, 32px);
  font-size:var(--link-headline-s-font-size, 24px);
  letter-spacing:var(--link-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-s-paragraph-spacing, 13.2px);
  -webkit-text-decoration:var(--link-headline-s-text-decoration, underline);
          text-decoration:var(--link-headline-s-text-decoration, underline);
}
.link--iOLFu[data-size=s][data-purpose=headline][data-text-mode=on-accent]{
  font-family:var(--link-headline-s-font-family, SB Sans Interface);
  font-weight:var(--link-headline-s-font-weight, Semibold);
  line-height:var(--link-headline-s-line-height, 32px);
  font-size:var(--link-headline-s-font-size, 24px);
  letter-spacing:var(--link-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-s-paragraph-spacing, 13.2px);
  -webkit-text-decoration:var(--link-headline-s-text-decoration, underline);
          text-decoration:var(--link-headline-s-text-decoration, underline);
}
.link--iOLFu[data-size=s][data-purpose=title][data-text-mode=default]{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
}
.link--iOLFu[data-size=s][data-purpose=title][data-text-mode=accent]{
  font-family:var(--link-title-s-font-family, SB Sans Interface);
  font-weight:var(--link-title-s-font-weight, Semibold);
  line-height:var(--link-title-s-line-height, 20px);
  font-size:var(--link-title-s-font-size, 14px);
  letter-spacing:var(--link-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-s-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-title-s-text-decoration, underline);
          text-decoration:var(--link-title-s-text-decoration, underline);
}
.link--iOLFu[data-size=s][data-purpose=title][data-text-mode=on-accent]{
  font-family:var(--link-title-s-font-family, SB Sans Interface);
  font-weight:var(--link-title-s-font-weight, Semibold);
  line-height:var(--link-title-s-line-height, 20px);
  font-size:var(--link-title-s-font-size, 14px);
  letter-spacing:var(--link-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-s-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-title-s-text-decoration, underline);
          text-decoration:var(--link-title-s-text-decoration, underline);
}
.link--iOLFu[data-size=s][data-purpose=label][data-text-mode=default]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.link--iOLFu[data-size=s][data-purpose=label][data-text-mode=accent]{
  font-family:var(--link-label-s-font-family, SB Sans Interface);
  font-weight:var(--link-label-s-font-weight, Semibold);
  line-height:var(--link-label-s-line-height, 14px);
  font-size:var(--link-label-s-font-size, 11px);
  letter-spacing:var(--link-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-s-paragraph-spacing, 6.05px);
  -webkit-text-decoration:var(--link-label-s-text-decoration, underline);
          text-decoration:var(--link-label-s-text-decoration, underline);
}
.link--iOLFu[data-size=s][data-purpose=label][data-text-mode=on-accent]{
  font-family:var(--link-label-s-font-family, SB Sans Interface);
  font-weight:var(--link-label-s-font-weight, Semibold);
  line-height:var(--link-label-s-line-height, 14px);
  font-size:var(--link-label-s-font-size, 11px);
  letter-spacing:var(--link-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-s-paragraph-spacing, 6.05px);
  -webkit-text-decoration:var(--link-label-s-text-decoration, underline);
          text-decoration:var(--link-label-s-text-decoration, underline);
}
.link--iOLFu[data-size=s][data-purpose=body][data-text-mode=default]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.link--iOLFu[data-size=s][data-purpose=body][data-text-mode=accent]{
  font-family:var(--link-body-s-font-family, SB Sans Interface);
  font-weight:var(--link-body-s-font-weight, Regular);
  line-height:var(--link-body-s-line-height, 16px);
  font-size:var(--link-body-s-font-size, 12px);
  letter-spacing:var(--link-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-s-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-body-s-text-decoration, underline);
          text-decoration:var(--link-body-s-text-decoration, underline);
}
.link--iOLFu[data-size=s][data-purpose=body][data-text-mode=on-accent]{
  font-family:var(--link-body-s-font-family, SB Sans Interface);
  font-weight:var(--link-body-s-font-weight, Regular);
  line-height:var(--link-body-s-line-height, 16px);
  font-size:var(--link-body-s-font-size, 12px);
  letter-spacing:var(--link-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-s-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-body-s-text-decoration, underline);
          text-decoration:var(--link-body-s-text-decoration, underline);
}
.link--iOLFu[data-size=s]{
  height:var(--size-link-s, 16px);
  gap:var(--space-link-gap-single, 0px);
  height:auto;
}
.link--iOLFu[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.link--iOLFu[data-size=m][data-purpose=display][data-text-mode=default]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.link--iOLFu[data-size=m][data-purpose=display][data-text-mode=accent]{
  font-family:var(--link-display-m-font-family, SB Sans Interface);
  font-weight:var(--link-display-m-font-weight, Semibold);
  line-height:var(--link-display-m-line-height, 60px);
  font-size:var(--link-display-m-font-size, 48px);
  letter-spacing:var(--link-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-m-paragraph-spacing, 26.4px);
  -webkit-text-decoration:var(--link-display-m-text-decoration, underline);
          text-decoration:var(--link-display-m-text-decoration, underline);
}
.link--iOLFu[data-size=m][data-purpose=display][data-text-mode=on-accent]{
  font-family:var(--link-display-m-font-family, SB Sans Interface);
  font-weight:var(--link-display-m-font-weight, Semibold);
  line-height:var(--link-display-m-line-height, 60px);
  font-size:var(--link-display-m-font-size, 48px);
  letter-spacing:var(--link-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-m-paragraph-spacing, 26.4px);
  -webkit-text-decoration:var(--link-display-m-text-decoration, underline);
          text-decoration:var(--link-display-m-text-decoration, underline);
}
.link--iOLFu[data-size=m][data-purpose=headline][data-text-mode=default]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.link--iOLFu[data-size=m][data-purpose=headline][data-text-mode=accent]{
  font-family:var(--link-headline-m-font-family, SB Sans Interface);
  font-weight:var(--link-headline-m-font-weight, Semibold);
  line-height:var(--link-headline-m-line-height, 36px);
  font-size:var(--link-headline-m-font-size, 28px);
  letter-spacing:var(--link-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-m-paragraph-spacing, 15.4px);
  -webkit-text-decoration:var(--link-headline-m-text-decoration, underline);
          text-decoration:var(--link-headline-m-text-decoration, underline);
}
.link--iOLFu[data-size=m][data-purpose=headline][data-text-mode=on-accent]{
  font-family:var(--link-headline-m-font-family, SB Sans Interface);
  font-weight:var(--link-headline-m-font-weight, Semibold);
  line-height:var(--link-headline-m-line-height, 36px);
  font-size:var(--link-headline-m-font-size, 28px);
  letter-spacing:var(--link-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-m-paragraph-spacing, 15.4px);
  -webkit-text-decoration:var(--link-headline-m-text-decoration, underline);
          text-decoration:var(--link-headline-m-text-decoration, underline);
}
.link--iOLFu[data-size=m][data-purpose=title][data-text-mode=default]{
  font-family:var(--sans-title-m-font-family, SB Sans Interface);
  font-weight:var(--sans-title-m-font-weight, Semibold);
  line-height:var(--sans-title-m-line-height, 24px);
  font-size:var(--sans-title-m-font-size, 16px);
  letter-spacing:var(--sans-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);
}
.link--iOLFu[data-size=m][data-purpose=title][data-text-mode=accent]{
  font-family:var(--link-title-m-font-family, SB Sans Interface);
  font-weight:var(--link-title-m-font-weight, Semibold);
  line-height:var(--link-title-m-line-height, 24px);
  font-size:var(--link-title-m-font-size, 16px);
  letter-spacing:var(--link-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-m-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-title-m-text-decoration, underline);
          text-decoration:var(--link-title-m-text-decoration, underline);
}
.link--iOLFu[data-size=m][data-purpose=title][data-text-mode=on-accent]{
  font-family:var(--link-title-m-font-family, SB Sans Interface);
  font-weight:var(--link-title-m-font-weight, Semibold);
  line-height:var(--link-title-m-line-height, 24px);
  font-size:var(--link-title-m-font-size, 16px);
  letter-spacing:var(--link-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-m-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-title-m-text-decoration, underline);
          text-decoration:var(--link-title-m-text-decoration, underline);
}
.link--iOLFu[data-size=m][data-purpose=label][data-text-mode=default]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.link--iOLFu[data-size=m][data-purpose=label][data-text-mode=accent]{
  font-family:var(--link-label-m-font-family, SB Sans Interface);
  font-weight:var(--link-label-m-font-weight, Semibold);
  line-height:var(--link-label-m-line-height, 16px);
  font-size:var(--link-label-m-font-size, 12px);
  letter-spacing:var(--link-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-m-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-label-m-text-decoration, underline);
          text-decoration:var(--link-label-m-text-decoration, underline);
}
.link--iOLFu[data-size=m][data-purpose=label][data-text-mode=on-accent]{
  font-family:var(--link-label-m-font-family, SB Sans Interface);
  font-weight:var(--link-label-m-font-weight, Semibold);
  line-height:var(--link-label-m-line-height, 16px);
  font-size:var(--link-label-m-font-size, 12px);
  letter-spacing:var(--link-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-m-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-label-m-text-decoration, underline);
          text-decoration:var(--link-label-m-text-decoration, underline);
}
.link--iOLFu[data-size=m][data-purpose=body][data-text-mode=default]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.link--iOLFu[data-size=m][data-purpose=body][data-text-mode=accent]{
  font-family:var(--link-body-m-font-family, SB Sans Interface);
  font-weight:var(--link-body-m-font-weight, Regular);
  line-height:var(--link-body-m-line-height, 20px);
  font-size:var(--link-body-m-font-size, 14px);
  letter-spacing:var(--link-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-m-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-body-m-text-decoration, underline);
          text-decoration:var(--link-body-m-text-decoration, underline);
}
.link--iOLFu[data-size=m][data-purpose=body][data-text-mode=on-accent]{
  font-family:var(--link-body-m-font-family, SB Sans Interface);
  font-weight:var(--link-body-m-font-weight, Regular);
  line-height:var(--link-body-m-line-height, 20px);
  font-size:var(--link-body-m-font-size, 14px);
  letter-spacing:var(--link-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-m-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-body-m-text-decoration, underline);
          text-decoration:var(--link-body-m-text-decoration, underline);
}
.link--iOLFu[data-size=m]{
  height:var(--size-link-m, 20px);
  gap:var(--space-link-gap-single, 0px);
  height:auto;
}
.link--iOLFu[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.link--iOLFu[data-size=l][data-purpose=display][data-text-mode=default]{
  font-family:var(--sans-display-l-font-family, SB Sans Interface);
  font-weight:var(--sans-display-l-font-weight, Bold);
  line-height:var(--sans-display-l-line-height, 72px);
  font-size:var(--sans-display-l-font-size, 56px);
  letter-spacing:var(--sans-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-l-paragraph-spacing, 30.8px);
}
.link--iOLFu[data-size=l][data-purpose=display][data-text-mode=accent]{
  font-family:var(--link-display-l-font-family, SB Sans Interface);
  font-weight:var(--link-display-l-font-weight, Bold);
  line-height:var(--link-display-l-line-height, 72px);
  font-size:var(--link-display-l-font-size, 56px);
  letter-spacing:var(--link-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-l-paragraph-spacing, 30.8px);
  -webkit-text-decoration:var(--link-display-l-text-decoration, underline);
          text-decoration:var(--link-display-l-text-decoration, underline);
}
.link--iOLFu[data-size=l][data-purpose=display][data-text-mode=on-accent]{
  font-family:var(--link-display-l-font-family, SB Sans Interface);
  font-weight:var(--link-display-l-font-weight, Bold);
  line-height:var(--link-display-l-line-height, 72px);
  font-size:var(--link-display-l-font-size, 56px);
  letter-spacing:var(--link-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-l-paragraph-spacing, 30.8px);
  -webkit-text-decoration:var(--link-display-l-text-decoration, underline);
          text-decoration:var(--link-display-l-text-decoration, underline);
}
.link--iOLFu[data-size=l][data-purpose=headline][data-text-mode=default]{
  font-family:var(--sans-headline-l-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-l-font-weight, Semibold);
  line-height:var(--sans-headline-l-line-height, 40px);
  font-size:var(--sans-headline-l-font-size, 32px);
  letter-spacing:var(--sans-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-l-paragraph-spacing, 17.6px);
}
.link--iOLFu[data-size=l][data-purpose=headline][data-text-mode=accent]{
  font-family:var(--link-headline-l-font-family, SB Sans Interface);
  font-weight:var(--link-headline-l-font-weight, Semibold);
  line-height:var(--link-headline-l-line-height, 40px);
  font-size:var(--link-headline-l-font-size, 32px);
  letter-spacing:var(--link-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-l-paragraph-spacing, 17.6px);
  -webkit-text-decoration:var(--link-headline-l-text-decoration, underline);
          text-decoration:var(--link-headline-l-text-decoration, underline);
}
.link--iOLFu[data-size=l][data-purpose=headline][data-text-mode=on-accent]{
  font-family:var(--link-headline-l-font-family, SB Sans Interface);
  font-weight:var(--link-headline-l-font-weight, Semibold);
  line-height:var(--link-headline-l-line-height, 40px);
  font-size:var(--link-headline-l-font-size, 32px);
  letter-spacing:var(--link-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-l-paragraph-spacing, 17.6px);
  -webkit-text-decoration:var(--link-headline-l-text-decoration, underline);
          text-decoration:var(--link-headline-l-text-decoration, underline);
}
.link--iOLFu[data-size=l][data-purpose=title][data-text-mode=default]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.link--iOLFu[data-size=l][data-purpose=title][data-text-mode=accent]{
  font-family:var(--link-title-l-font-family, SB Sans Interface);
  font-weight:var(--link-title-l-font-weight, Semibold);
  line-height:var(--link-title-l-line-height, 28px);
  font-size:var(--link-title-l-font-size, 20px);
  letter-spacing:var(--link-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-l-paragraph-spacing, 11px);
  -webkit-text-decoration:var(--link-title-l-text-decoration, underline);
          text-decoration:var(--link-title-l-text-decoration, underline);
}
.link--iOLFu[data-size=l][data-purpose=title][data-text-mode=on-accent]{
  font-family:var(--link-title-l-font-family, SB Sans Interface);
  font-weight:var(--link-title-l-font-weight, Semibold);
  line-height:var(--link-title-l-line-height, 28px);
  font-size:var(--link-title-l-font-size, 20px);
  letter-spacing:var(--link-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-l-paragraph-spacing, 11px);
  -webkit-text-decoration:var(--link-title-l-text-decoration, underline);
          text-decoration:var(--link-title-l-text-decoration, underline);
}
.link--iOLFu[data-size=l][data-purpose=label][data-text-mode=default]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.link--iOLFu[data-size=l][data-purpose=label][data-text-mode=accent]{
  font-family:var(--link-label-l-font-family, SB Sans Interface);
  font-weight:var(--link-label-l-font-weight, Semibold);
  line-height:var(--link-label-l-line-height, 20px);
  font-size:var(--link-label-l-font-size, 14px);
  letter-spacing:var(--link-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-l-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-label-l-text-decoration, underline);
          text-decoration:var(--link-label-l-text-decoration, underline);
}
.link--iOLFu[data-size=l][data-purpose=label][data-text-mode=on-accent]{
  font-family:var(--link-label-l-font-family, SB Sans Interface);
  font-weight:var(--link-label-l-font-weight, Semibold);
  line-height:var(--link-label-l-line-height, 20px);
  font-size:var(--link-label-l-font-size, 14px);
  letter-spacing:var(--link-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-l-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-label-l-text-decoration, underline);
          text-decoration:var(--link-label-l-text-decoration, underline);
}
.link--iOLFu[data-size=l][data-purpose=body][data-text-mode=default]{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.link--iOLFu[data-size=l][data-purpose=body][data-text-mode=accent]{
  font-family:var(--link-body-l-font-family, SB Sans Interface);
  font-weight:var(--link-body-l-font-weight, Regular);
  line-height:var(--link-body-l-line-height, 24px);
  font-size:var(--link-body-l-font-size, 16px);
  letter-spacing:var(--link-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-l-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-body-l-text-decoration, underline);
          text-decoration:var(--link-body-l-text-decoration, underline);
}
.link--iOLFu[data-size=l][data-purpose=body][data-text-mode=on-accent]{
  font-family:var(--link-body-l-font-family, SB Sans Interface);
  font-weight:var(--link-body-l-font-weight, Regular);
  line-height:var(--link-body-l-line-height, 24px);
  font-size:var(--link-body-l-font-size, 16px);
  letter-spacing:var(--link-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-l-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-body-l-text-decoration, underline);
          text-decoration:var(--link-body-l-text-decoration, underline);
}
.link--iOLFu[data-size=l]{
  height:var(--size-link-l, 24px);
  gap:var(--space-link-gap-single, 0px);
  height:auto;
}
.link--iOLFu[data-size=l] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.icon--nUnRa{
  flex-shrink:0;
}`,""]),i.locals={link:"link--iOLFu",icon:"icon--nUnRa"};const v=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((_,c,e)=>{e.d(c,{A:()=>v});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),i=b()(p());i.push([_.id,`.sun--oC6I4{
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
}`,""]),i.locals={sun:"sun--oC6I4","loading-wheel":"loading-wheel--YnKg9"};const v=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((_,c,e)=>{e.d(c,{A:()=>v});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),i=b()(p());i.push([_.id,`.sun--Mw8Oo{
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
}`,""]),i.locals={sun:"sun--Mw8Oo","loading-wheel":"loading-wheel--wXeN0"};const v=i}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((_,c,e)=>{e.d(c,{A:()=>v});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(m),i=b()(p());i.push([_.id,`.container--iTz5V{
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.container--iTz5V[data-size=xxs]{
  width:var(--size-status-indicator-container-xxs, 4px);
  height:var(--size-status-indicator-container-xxs, 4px);
}
.container--iTz5V[data-size=xxs] .indicator--SZBO_{
  border-radius:var(--radius-status-indicator-xxs, 2px);
  border-width:var(--border-width-general-xxs, 0.5px);
  width:var(--size-status-indicator-xxs, 4px);
  height:var(--size-status-indicator-xxs, 4px);
}
.container--iTz5V[data-size=xs]{
  width:var(--size-status-indicator-container-xs, 8px);
  height:var(--size-status-indicator-container-xs, 8px);
}
.container--iTz5V[data-size=xs] .indicator--SZBO_{
  border-radius:var(--radius-status-indicator-xs, 4px);
  border-width:var(--border-width-general-s, 1.5px);
  width:var(--size-status-indicator-xs, 8px);
  height:var(--size-status-indicator-xs, 8px);
}
.container--iTz5V[data-size=s]{
  width:var(--size-status-indicator-container-s, 16px);
  height:var(--size-status-indicator-container-s, 16px);
}
.container--iTz5V[data-size=s] .indicator--SZBO_{
  border-radius:var(--radius-status-indicator-s, 8px);
  border-width:var(--border-width-general-m, 2px);
  width:var(--size-status-indicator-s, 12px);
  height:var(--size-status-indicator-s, 12px);
}
.container--iTz5V[data-size=m]{
  width:var(--size-status-indicator-container-m, 16px);
  height:var(--size-status-indicator-container-m, 16px);
}
.container--iTz5V[data-size=m] .indicator--SZBO_{
  border-radius:var(--radius-status-indicator-m, 8px);
  border-width:var(--border-width-general-l, 3px);
  width:var(--size-status-indicator-m, 16px);
  height:var(--size-status-indicator-m, 16px);
}
.container--iTz5V[data-size=l]{
  width:var(--size-status-indicator-container-l, 24px);
  height:var(--size-status-indicator-container-l, 24px);
}
.container--iTz5V[data-size=l] .indicator--SZBO_{
  border-radius:var(--radius-status-indicator-l, 16px);
  border-width:var(--border-width-general-xl, 4px);
  width:var(--size-status-indicator-l, 24px);
  height:var(--size-status-indicator-l, 24px);
}

.indicator--SZBO_{
  box-sizing:border-box;
  border:0 solid var(--sys-neutral-background1-level, #fdfdfd);
}
.indicator--SZBO_[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.indicator--SZBO_[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.indicator--SZBO_[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.indicator--SZBO_[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.indicator--SZBO_[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.indicator--SZBO_[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.indicator--SZBO_[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.indicator--SZBO_[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.indicator--SZBO_[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),i.locals={container:"container--iTz5V",indicator:"indicator--SZBO_"};const v=i}),"./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js":((_,c,e)=>{e.d(c,{A:()=>s});function s(){for(var p=[],m=0;m<arguments.length;m++)p[m]=arguments[m];var b=p.filter(Boolean);if(b.length<=1){var i=b[0];return i||null}return function(T){b.forEach(function(u){typeof u=="function"?u(T):u&&(u.current=T)})}}})}]);})();
