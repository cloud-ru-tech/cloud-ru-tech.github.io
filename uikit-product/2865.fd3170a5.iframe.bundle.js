"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2865],{"./node_modules/.pnpm/@snack-uikit+alert@0.16.28_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/AlertTop.js":((j,p,e)=>{e.d(p,{W:()=>T});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(m),b=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+link@0.17.20_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/Link.js"),f=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),D=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),d=e("./node_modules/.pnpm/@snack-uikit+alert@0.16.28_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/constants.js"),P=e("./node_modules/.pnpm/@snack-uikit+alert@0.16.28_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/helperComponents/AlertButton.js"),w=e("./node_modules/.pnpm/@snack-uikit+alert@0.16.28_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/utils.js");const h={InvertNeutral:"invert-neutral",Primary:"primary",Red:"red",Yellow:"yellow",Green:"green",Blue:"blue"},a={[d.xz.Neutral]:h.InvertNeutral,[d.xz.Primary]:h.Primary,[d.xz.Error]:h.Red,[d.xz.Warning]:h.Yellow,[d.xz.Success]:h.Green,[d.xz.Info]:h.Blue};var c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(c),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=e.n(t),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),E=e.n(L),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),k=e.n(z),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=e.n(C),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),A=e.n(S),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.28_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/styles.module.css"),v={};v.styleTagTransform=A(),v.setAttributes=k(),v.insert=E().bind(null,"head"),v.domAPI=n(),v.insertStyleElement=I();var i=o()(u.A,v);const r=u.A&&u.A.locals?u.A.locals:void 0;var x=function(g,B){var M={};for(var y in g)Object.prototype.hasOwnProperty.call(g,y)&&B.indexOf(y)<0&&(M[y]=g[y]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,y=Object.getOwnPropertySymbols(g);O<y.length;O++)B.indexOf(y[O])<0&&Object.prototype.propertyIsEnumerable.call(g,y[O])&&(M[y[O]]=g[y[O]]);return M};function T(g){var B,{icon:M=!0,title:y,description:O,link:K,onClose:R,truncate:W,appearance:N=d.xz.Neutral,action:V,className:Y}=g,X=x(g,["icon","title","description","link","onClose","truncate","appearance","action","className"]);return(0,s.jsxs)("div",Object.assign({className:_()(r.alertTop,Y)},(0,D.z7)(X),{"data-color":a[N],children:[(0,s.jsxs)("div",{className:r.contentWrapper,children:[M&&(0,s.jsx)("div",{className:r.icon,"data-color":a[N],"data-test-id":"alert-top__icon",children:(0,w.s)(N,24)}),(0,s.jsxs)("div",{className:r.contentLayout,children:[(0,s.jsxs)("div",{className:r.textLayout,children:[y&&(0,s.jsx)("div",{className:r.title,"data-color":a[N],"data-test-id":"alert-top__title",children:(0,s.jsx)(f.m,{text:y,maxLines:(B=W==null?void 0:W.title)!==null&&B!==void 0?B:1})}),(0,s.jsx)("span",{className:r.description,"data-color":a[N],"data-test-id":"alert-top__description",children:O})]}),K&&(0,s.jsx)("span",{children:(0,s.jsx)(l.N,Object.assign({},K,{appearance:d.o$[N],textMode:"on-accent",size:"m","data-test-id":"alert-top__link"}))})]})]}),(0,s.jsxs)("div",{className:r.actions,children:[V&&(0,s.jsx)(P.X,Object.assign({},V,{appearance:a[N],variant:"tonal"})),R&&(0,s.jsx)(P.X,{onClick:R,appearance:a[N],icon:(0,s.jsx)(b.A,{}),variant:"tonal",dataTestId:"alert-top__close-button"})]})]}))}}),"./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((j,p,e)=>{e.d(p,{e:()=>T});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(m),b=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js"),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const D={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},d={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},P={Round:"round",Square:"square"};var w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(w),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=e.n(a),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),t=e.n(o),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=e.n(n),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(E),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(k),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),S={};S.styleTagTransform=C(),S.setAttributes=L(),S.insert=t().bind(null,"head"),S.domAPI=c(),S.insertStyleElement=z();var A=h()(I.A,S);const u=I.A&&I.A.locals?I.A.locals:void 0,v=" ",i=(g,B)=>{var M;const y=g.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!y||y.length<B)return y.toUpperCase();const O=y.split(v);let K=y;if(O.length>1){const R=O[0].charAt(0),W=(M=O[O.length-1])===null||M===void 0?void 0:M.charAt(0);K=`${R}${W}`.toUpperCase()}return K.slice(0,B).toUpperCase()};var r=function(g,B){var M={};for(var y in g)Object.prototype.hasOwnProperty.call(g,y)&&B.indexOf(y)<0&&(M[y]=g[y]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,y=Object.getOwnPropertySymbols(g);O<y.length;O++)B.indexOf(y[O])<0&&Object.prototype.propertyIsEnumerable.call(g,y[O])&&(M[y[O]]=g[y[O]]);return M};const x={[d.Xxs]:"xxs",[d.Xs]:"xs",[d.S]:"xs",[d.M]:"m",[d.L]:"m",[d.Xl]:"l",[d.Xxl]:"l"};function T(g){var{name:B,appearance:M=D.Red,size:y=d.S,shape:O=P.Round,indicator:K,showTwoSymbols:R,src:W,className:N}=g,V=r(g,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[Y,X]=(0,b.useState)(!1),U=y!==d.Xxs&&R?2:1;return(0,b.useEffect)(()=>{X(!1)},[W]),(0,s.jsxs)("div",Object.assign({className:_()(u.avatar,N)},(0,f.z7)(V),{"data-size":y,"data-appearance":M,"data-shape":O,children:[W&&!Y?(0,s.jsx)("img",{"data-test-id":"image",className:u.image,src:W,onError:()=>X(!0),alt:""}):(0,s.jsx)("div",{"data-test-id":"abbreviation",children:i(B,U)}),K&&(0,s.jsx)("div",{className:u.indicatorWrapper,children:(0,s.jsx)(l.k,{"data-test-id":"indicator",appearance:K,size:x[y]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js":((j,p,e)=>{e.d(p,{b:()=>v});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(m),b=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),f=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),D=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js"),d=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js"),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(P),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=e.n(h),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),o=e.n(c),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),n=e.n(t),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n(L),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=e.n(z),C=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css"),I={};I.styleTagTransform=k(),I.setAttributes=n(),I.insert=o().bind(null,"head"),I.domAPI=a(),I.insertStyleElement=E();var S=w()(C.A,I);const A=C.A&&C.A.locals?C.A.locals:void 0;var u=function(i,r){var x={};for(var T in i)Object.prototype.hasOwnProperty.call(i,T)&&r.indexOf(T)<0&&(x[T]=i[T]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,T=Object.getOwnPropertySymbols(i);g<T.length;g++)r.indexOf(T[g])<0&&Object.prototype.propertyIsEnumerable.call(i,T[g])&&(x[T[g]]=i[T[g]]);return x};const v=(0,b.forwardRef)((i,r)=>{var{className:x,iconPosition:T=f._B.After,size:g=f.SK.S,target:B=f.Qn.Blank,type:M=f.dk.Button,appearance:y=f.xz.Neutral,fullWidth:O=!1,tabIndex:K}=i,R=u(i,["className","iconPosition","size","target","type","appearance","fullWidth","tabIndex"]);return(0,s.jsx)(D.A,Object.assign({},(0,l.z7)(R),(0,d.a)(R),(0,d.F)(R),{className:_()(A.button,x),iconClassName:A.icon,iconPosition:T,labelClassName:A.label,size:g,fullWidth:O,target:B,type:M,appearance:y,tabIndex:K,ref:r}))})}),"./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js":((j,p,e)=>{e.d(p,{c:()=>A});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(m),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const l={Horizontal:"horizontal",Vertical:"vertical"},f={Light:"light",Regular:"regular"};var D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(D),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(P),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),a=e.n(h),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=e.n(c),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),n=e.n(t),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(L),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),k={};k.styleTagTransform=E(),k.setAttributes=o(),k.insert=a().bind(null,"head"),k.domAPI=w(),k.insertStyleElement=n();var C=d()(z.A,k);const I=z.A&&z.A.locals?z.A.locals:void 0;var S=function(u,v){var i={};for(var r in u)Object.prototype.hasOwnProperty.call(u,r)&&v.indexOf(r)<0&&(i[r]=u[r]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,r=Object.getOwnPropertySymbols(u);x<r.length;x++)v.indexOf(r[x])<0&&Object.prototype.propertyIsEnumerable.call(u,r[x])&&(i[r[x]]=u[r[x]]);return i};function A(u){var{className:v,orientation:i=l.Horizontal,weight:r=f.Regular}=u,x=S(u,["className","orientation","weight"]);const T=Object.assign(Object.assign({},(0,b.z7)(x)),{"data-weight":r});return i===l.Horizontal?(0,s.jsx)("hr",Object.assign({className:_()(I.horizontal,v)},T)):(0,s.jsx)("div",Object.assign({className:_()(I.vertical,v)},T))}}),"./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js":((j,p,e)=>{e.d(p,{m:()=>I});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(m),b=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(l),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),d=e.n(D),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),w=e.n(P),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),a=e.n(h),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),o=e.n(c),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),n=e.n(t),L=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"),E={};E.styleTagTransform=n(),E.setAttributes=a(),E.insert=w().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=o();var z=f()(L.A,E);const k=L.A&&L.A.locals?L.A.locals:void 0;var C=function(S,A){var u={};for(var v in S)Object.prototype.hasOwnProperty.call(S,v)&&A.indexOf(v)<0&&(u[v]=S[v]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,v=Object.getOwnPropertySymbols(S);i<v.length;i++)A.indexOf(v[i])<0&&Object.prototype.propertyIsEnumerable.call(S,v[i])&&(u[v[i]]=S[v[i]]);return u};function I(S){var{content:A,trigger:u="click",placement:v="bottom-start",children:i,triggerRef:r,widthStrategy:x="gte",triggerClassName:T}=S,g=C(S,["content","trigger","placement","children","triggerRef","widthStrategy","triggerClassName"]);return!i&&!r?null:(0,s.jsx)(b.Z,Object.assign({placement:v,popoverContent:(0,s.jsx)("div",{className:k.dropdownContainer,children:A}),trigger:u,triggerRef:r,hasArrow:!1,widthStrategy:x,triggerClassName:_()(k.defaultTriggerClassName,T)},g,{children:i}))}}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/more/index.js":((j,p,e)=>{e.d(p,{A:()=>h});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(a,c){var o={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&c.indexOf(t)<0&&(o[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)c.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(o[t[n]]=a[t[n]]);return o};const l=m.forwardRef((a,c)=>{var{size:o=24}=a,t=_(a,["size"]);t.width=void 0,t.height=void 0;const n="-more-s";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,s.jsx)("svg",Object.assign({ref:c,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var f=function(a,c){var o={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&c.indexOf(t)<0&&(o[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)c.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(o[t[n]]=a[t[n]]);return o};const d=m.forwardRef((a,c)=>{var{size:o=24}=a,t=f(a,["size"]);t.width=void 0,t.height=void 0;const n="-more-xs";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,s.jsx)("svg",Object.assign({ref:c,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var P=function(a,c){var o={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&c.indexOf(t)<0&&(o[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)c.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(o[t[n]]=a[t[n]]);return o};const h=(0,m.forwardRef)((a,c)=>{var{size:o=24}=a,t=P(a,["size"]);return Number(o)>=20?(0,s.jsx)(l,Object.assign({ref:c,size:o},t)):(0,s.jsx)(d,Object.assign({ref:c,size:o},t))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/scalableRight/index.js":((j,p,e)=>{e.d(p,{A:()=>h});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(a,c){var o={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&c.indexOf(t)<0&&(o[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)c.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(o[t[n]]=a[t[n]]);return o};const l=m.forwardRef((a,c)=>{var{size:o=24}=a,t=_(a,["size"]);t.width=void 0,t.height=void 0;const n="-scalable-right-s";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,s.jsx)("svg",Object.assign({ref:c,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var f=function(a,c){var o={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&c.indexOf(t)<0&&(o[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)c.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(o[t[n]]=a[t[n]]);return o};const d=m.forwardRef((a,c)=>{var{size:o=24}=a,t=f(a,["size"]);t.width=void 0,t.height=void 0;const n="-scalable-right-xs";return typeof o=="number"&&(t.style||(t.style={}),t.style.width=o+"px",t.style.height=o+"px"),(0,s.jsx)("svg",Object.assign({ref:c,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},t,{children:(0,s.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var P=function(a,c){var o={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&c.indexOf(t)<0&&(o[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)c.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(o[t[n]]=a[t[n]]);return o};const h=(0,m.forwardRef)((a,c)=>{var{size:o=24}=a,t=P(a,["size"]);return Number(o)>=20?(0,s.jsx)(l,Object.assign({ref:c,size:o},t)):(0,s.jsx)(d,Object.assign({ref:c,size:o},t))})}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js":((j,p,e)=>{e.d(p,{b:()=>S});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(m),b=e("./node_modules/.pnpm/@snack-uikit+utils@3.8.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),l=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(f),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),P=e.n(d),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=e.n(w),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),c=e.n(a),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),t=e.n(o),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(n),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),z={};z.styleTagTransform=L(),z.setAttributes=c(),z.insert=h().bind(null,"head"),z.domAPI=P(),z.insertStyleElement=t();var k=D()(E.A,z);const C=E.A&&E.A.locals?E.A.locals:void 0;var I=function(A,u){var v={};for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&u.indexOf(i)<0&&(v[i]=A[i]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(A);r<i.length;r++)u.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(A,i[r])&&(v[i[r]]=A[i[r]]);return v};function S(A){var{size:u=l.K.S,className:v}=A,i=I(A,["size","className"]);return(0,s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:_()(C.sun,v)},(0,b.z7)(i),{"data-size":u,children:[(0,s.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js":((j,p,e)=>{e.d(p,{K:()=>s});const s={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/StatusIndicator.js":((j,p,e)=>{e.d(p,{k:()=>A});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=e.n(m),b=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),l=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js"),f=e("./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js"),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(D),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(P),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),a=e.n(h),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),o=e.n(c),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),n=e.n(t),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(L),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),k={};k.styleTagTransform=E(),k.setAttributes=o(),k.insert=a().bind(null,"head"),k.domAPI=w(),k.insertStyleElement=n();var C=d()(z.A,k);const I=z.A&&z.A.locals?z.A.locals:void 0;var S=function(u,v){var i={};for(var r in u)Object.prototype.hasOwnProperty.call(u,r)&&v.indexOf(r)<0&&(i[r]=u[r]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,r=Object.getOwnPropertySymbols(u);x<r.length;x++)v.indexOf(r[x])<0&&Object.prototype.propertyIsEnumerable.call(u,r[x])&&(i[r[x]]=u[r[x]]);return i};function A(u){var{size:v=f.S.M,appearance:i=l.x.Primary,className:r}=u,x=S(u,["size","appearance","className"]);return(0,s.jsx)("div",Object.assign({className:_()(I.container,r)},(0,b.z7)(x),{"data-size":v,children:(0,s.jsx)("div",{className:I.indicator,"data-appearance":i})}))}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/constants.js":((j,p,e)=>{e.d(p,{S:()=>s});const s={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/constants.js":((j,p,e)=>{e.d(p,{x:()=>s});const s={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"}}),"./node_modules/.pnpm/@snack-uikit+utils@3.8.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((j,p,e)=>{e.d(p,{z7:()=>D});const s=/^data-test-/,m=/^(data|aria)-/;function _(d,P){return Object.keys(d).filter(w=>!w.match(P)).reduce((w,h)=>Object.assign(Object.assign({},w),{[h]:d[h]}),{})}function b(d,P){return Object.keys(d).reduce((w,h)=>(h.match(P)&&(w[h]=d[h]),w),{})}function l(d){return _(d,m)}function f(d){return b(d,s)}function D(d){return b(d,m)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+alert@0.16.28_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/alert/dist/esm/components/AlertTop/styles.module.css":((j,p,e)=>{e.d(p,{A:()=>f});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),l=b()(m());l.push([j.id,`.alertTop--gRmS9{
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
}`,""]),l.locals={alertTop:"alertTop--gRmS9",icon:"icon--kiNXP",title:"title--fD2QB",description:"description--DbTM2",contentWrapper:"contentWrapper--FtAvY",contentLayout:"contentLayout--SBKv4",textLayout:"textLayout--jDYi5",actions:"actions--DHms_"};const f=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.25_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((j,p,e)=>{e.d(p,{A:()=>f});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),l=b()(m());l.push([j.id,`.avatar--wYdfL{
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
}`,""]),l.locals={avatar:"avatar--wYdfL",image:"image--wMeYb",indicatorWrapper:"indicatorWrapper--Zl3rW"};const f=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css":((j,p,e)=>{e.d(p,{A:()=>f});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),l=b()(m());l.push([j.id,`.button--n3vAI[data-size=xs] .label--qV8ML{
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
}`,""]),l.locals={button:"button--n3vAI",label:"label--qV8ML",icon:"icon--KODKN"};const f=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css":((j,p,e)=>{e.d(p,{A:()=>f});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),l=b()(m());l.push([j.id,`.horizontal--BAWtQ{
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
}`,""]),l.locals={horizontal:"horizontal--BAWtQ",vertical:"vertical--Os_1s"};const f=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css":((j,p,e)=>{e.d(p,{A:()=>f});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),l=b()(m());l.push([j.id,`.dropdownContainer--thkj4{
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
}`,""]),l.locals={dropdownContainer:"dropdownContainer--thkj4",defaultTriggerClassName:"defaultTriggerClassName--J_CUP"};const f=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.4_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((j,p,e)=>{e.d(p,{A:()=>f});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),l=b()(m());l.push([j.id,`.sun--oC6I4{
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
}`,""]),l.locals={sun:"sun--oC6I4","loading-wheel":"loading-wheel--YnKg9"};const f=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.10.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((j,p,e)=>{e.d(p,{A:()=>f});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(s),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),b=e.n(_),l=b()(m());l.push([j.id,`.container--iTz5V{
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
}`,""]),l.locals={container:"container--iTz5V",indicator:"indicator--SZBO_"};const f=l}),"./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js":((j,p,e)=>{e.d(p,{A:()=>s});function s(){for(var m=[],_=0;_<arguments.length;_++)m[_]=arguments[_];var b=m.filter(Boolean);if(b.length<=1){var l=b[0];return l||null}return function(D){b.forEach(function(d){typeof d=="function"?d(D):d&&(d.current=D)})}}})}]);})();
