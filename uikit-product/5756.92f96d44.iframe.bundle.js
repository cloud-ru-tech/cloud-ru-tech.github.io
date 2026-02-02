"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5756],{"./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((h,u,e)=>{e.d(u,{e:()=>Y});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),n=e.n(l),r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),s=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const p={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},x={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(b),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(O),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),U=e.n(N),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),X=e.n(Z),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(K),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_=e.n(g),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.8.1_react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),T={};T.styleTagTransform=_(),T.setAttributes=X(),T.insert=U().bind(null,"head"),T.domAPI=w(),T.insertStyleElement=z();var j=I()(f.A,T);const m=f.A&&f.A.locals?f.A.locals:void 0;var E=function(y,V){var S={};for(var a in y)Object.prototype.hasOwnProperty.call(y,a)&&V.indexOf(a)<0&&(S[a]=y[a]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(y);c<a.length;c++)V.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(y,a[c])&&(S[a[c]]=y[a[c]]);return S};function i(y){var{size:V=x.M,appearance:S=p.Primary,className:a}=y,c=E(y,["size","appearance","className"]);return(0,t.jsx)("div",Object.assign({className:n()(m.container,a)},(0,s.z7)(c),{"data-size":V,children:(0,t.jsx)("div",{className:m.indicator,"data-appearance":S})}))}const o={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},d={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},v={Round:"round",Square:"square"};var A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),W={};W.styleTagTransform=_(),W.setAttributes=X(),W.insert=U().bind(null,"head"),W.domAPI=w(),W.insertStyleElement=z();var F=I()(A.A,W);const D=A.A&&A.A.locals?A.A.locals:void 0,H=" ",M=(y,V)=>{var S;const a=y.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!a||a.length<V)return a.toUpperCase();const c=a.split(H);let C=a;if(c.length>1){const P=c[0].charAt(0),B=(S=c[c.length-1])===null||S===void 0?void 0:S.charAt(0);C=`${P}${B}`.toUpperCase()}return C.slice(0,V).toUpperCase()};var L=function(y,V){var S={};for(var a in y)Object.prototype.hasOwnProperty.call(y,a)&&V.indexOf(a)<0&&(S[a]=y[a]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(y);c<a.length;c++)V.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(y,a[c])&&(S[a[c]]=y[a[c]]);return S};const se={[d.Xxs]:"xxs",[d.Xs]:"xs",[d.S]:"xs",[d.M]:"m",[d.L]:"m",[d.Xl]:"l",[d.Xxl]:"l"};function Y(y){var{name:V,appearance:S=o.Red,size:a=d.S,shape:c=v.Round,indicator:C,showTwoSymbols:P,src:B,className:Q}=y,$=L(y,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[te,q]=(0,r.useState)(!1),ae=a!==d.Xxs&&P?2:1;return(0,r.useEffect)(()=>{q(!1)},[B]),(0,t.jsxs)("div",Object.assign({className:n()(D.avatar,Q)},(0,s.z7)($),{"data-size":a,"data-appearance":S,"data-shape":c,children:[B&&!te?(0,t.jsx)("img",{"data-test-id":"image",className:D.image,src:B,onError:()=>q(!0),alt:""}):(0,t.jsx)("div",{"data-test-id":"abbreviation",children:M(V,ae)}),C&&(0,t.jsx)("div",{className:D.indicatorWrapper,children:(0,t.jsx)(i,{"data-test-id":"indicator",appearance:C,size:se[a]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.3_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js":((h,u,e)=>{e.d(u,{I:()=>E});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),n=e.n(l),r=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const s={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},p={S:"s",M:"m",L:"l"};var x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(x),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=e.n(I),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),N=e.n(w),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Z=e.n(U),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),K=e.n(X),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),g=e.n(z),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.3_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/styles.module.css"),f={};f.styleTagTransform=g(),f.setAttributes=Z(),f.insert=N().bind(null,"head"),f.domAPI=O(),f.insertStyleElement=K();var T=b()(_.A,f);const j=_.A&&_.A.locals?_.A.locals:void 0;var m=function(i,o){var d={};for(var v in i)Object.prototype.hasOwnProperty.call(i,v)&&o.indexOf(v)<0&&(d[v]=i[v]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var A=0,v=Object.getOwnPropertySymbols(i);A<v.length;A++)o.indexOf(v[A])<0&&Object.prototype.propertyIsEnumerable.call(i,v[A])&&(d[v[A]]=i[v[A]]);return d};function E(i){var{className:o,decor:d=!0,size:v=p.M,icon:A,appearance:W=s.Primary,shape:F="round"}=i,D=m(i,["className","decor","size","icon","appearance","shape"]);return(0,t.jsx)("div",Object.assign({className:n()(j.decor,o)},(0,r.z7)(D),{"data-size":v,"data-decor":d||void 0,"data-appearance":W,"data-shape":F,children:(0,t.jsx)(A,{"data-size":v,"data-appearance":W,className:j.icon})}))}}),"./node_modules/.pnpm/@snack-uikit+info-block@0.6.33_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/index.js":((h,u,e)=>{e.d(u,{O:()=>S});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),n=e.n(l),r=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js"),s=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/ButtonTonal.js");const p={S:"s",M:"m",L:"l"},x={Vertical:"vertical",Horizontal:"horizontal"},b={icon:"info-block__icon",title:"info-block__title",description:"info-block__description",footer:"info-block__footer",primaryButton:"info-block__primary-button",secondaryButton:"info-block__secondary-button"};var I=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const O=(0,I.createContext)({size:p.S});function w(){return(0,I.useContext)(O)}var N=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function U({Button:a,tooltip:c}){return c?function(P){return(0,t.jsx)(N.m,Object.assign({},c,{children:(0,t.jsx)(a,Object.assign({},P))}))}:a}var Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=e.n(Z),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),z=e.n(K),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),_=e.n(g),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),T=e.n(f),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=e.n(j),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),i=e.n(E),o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.33_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"),d={};d.styleTagTransform=i(),d.setAttributes=T(),d.insert=_().bind(null,"head"),d.domAPI=z(),d.insertStyleElement=m();var v=X()(o.A,d);const A=o.A&&o.A.locals?o.A.locals:void 0;function W({primaryButton:a,secondaryButton:c,className:C}){const P=U({Button:r.L,tooltip:a.tooltip}),B=U({Button:s.L,tooltip:c==null?void 0:c.tooltip}),{size:Q}=w();return(0,t.jsxs)("div",{className:n()(A.infoBlockFooter,C),children:[c&&(0,t.jsx)(B,Object.assign({},c,{size:Q,"data-test-id":c["data-test-id"]||b.secondaryButton})),(0,t.jsx)(P,Object.assign({},a,{size:Q,"data-test-id":a["data-test-id"]||b.primaryButton}))]})}var F=e("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.10_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),D=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.11_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),H=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.33_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"),L={};L.styleTagTransform=i(),L.setAttributes=T(),L.insert=_().bind(null,"head"),L.domAPI=z(),L.insertStyleElement=m();var se=X()(M.A,L);const Y=M.A&&M.A.locals?M.A.locals:void 0;var y=function(a,c){var C={};for(var P in a)Object.prototype.hasOwnProperty.call(a,P)&&c.indexOf(P)<0&&(C[P]=a[P]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var B=0,P=Object.getOwnPropertySymbols(a);B<P.length;B++)c.indexOf(P[B])<0&&Object.prototype.propertyIsEnumerable.call(a,P[B])&&(C[P[B]]=a[P[B]]);return C};function V(a){var c,C,{title:P,description:B,icon:Q,size:$=p.S,footer:te,align:q=x.Vertical,className:ae}=a,pe=y(a,["title","description","icon","size","footer","align","className"]);return(0,t.jsx)(O.Provider,{value:{size:$},children:(0,t.jsxs)("div",Object.assign({className:n()(Y.infoBlock,ae),"data-size":$,"data-align":q},(0,H.z7)(pe),{children:[Q&&(0,t.jsx)(F.I,{icon:Q.icon,appearance:(c=Q.appearance)!==null&&c!==void 0?c:"primary",decor:(C=Q.decor)!==null&&C!==void 0?C:!0,size:$,"data-test-id":b.icon}),(0,t.jsxs)("div",{className:Y.contentLayout,children:[(0,t.jsxs)("div",{className:Y.textWrap,children:[P&&(0,t.jsx)(D.o,{family:"sans",purpose:"title",size:$,className:Y.title,"data-test-id":b.title,children:P}),B&&(0,t.jsx)(D.o,{family:"sans",purpose:"body",size:$,className:Y.description,"data-test-id":b.description,children:B})]}),te&&(0,t.jsx)("div",{className:Y.footer,"data-test-id":b.footer,children:te})]})]}))})}const S=V;S.Footer=W}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js":((h,u,e)=>{e.d(u,{i:()=>T});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),n=e.n(l),r=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),x=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),b=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),I=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),O=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),w=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),N=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),U=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),Z=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),X=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),K=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),z=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),g=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),_=function(j,m){var E={};for(var i in j)Object.prototype.hasOwnProperty.call(j,i)&&m.indexOf(i)<0&&(E[i]=j[i]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(j);o<i.length;o++)m.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(j,i[o])&&(E[i[o]]=j[i[o]]);return E};const f=["top","right","bottom","left"];function T(j){var{items:m,search:E,pinBottom:i=[],pinTop:o=[],footerActiveElementsRefs:d,children:v,trigger:A,placement:W,widthStrategy:F,triggerElemRef:D,open:H,onOpenChange:M,collapse:L={},triggerClassName:se,selection:Y,contentRender:y,size:V="s",marker:S=!0,closeDroplistOnItemClick:a=!1,className:c,listRef:C,untouchableScrollbars:P=!1,virtualized:B=!1,closeOnPopstate:Q}=j,$=_(j,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const te=(0,s.useMemo)(()=>!!E,[E]),[q=[],ae]=(0,x.I)(L),pe=(0,s.useCallback)(k=>ae(R=>R!=null&&R.includes(k)?R.filter(J=>J!==k):(R!=null?R:[]).concat([k])),[ae]),[ke=!1,oe]=(0,x.I)({value:H,defaultValue:!1,onChange:M}),{searchItem:ie,footerItems:le}=(0,I.nG)({footerActiveElementsRefs:d}),fe=(0,s.useMemo)(()=>{const k=(0,O.lg)({items:o,prefix:b.$.pinTop,parentId:b.$.default}),R=(0,O.lg)({items:m,prefix:b.$.default,parentId:b.$.default}),J=(0,O.lg)({items:i,prefix:b.$.pinBottom,parentId:b.$.default}),ee=Object.assign(Object.assign(Object.assign({},k.flattenItems),J.flattenItems),R.flattenItems),ne=Object.assign(Object.assign(Object.assign({},k.focusFlattenItems),J.focusFlattenItems),R.focusFlattenItems);return[...le,ie].forEach(G=>{ee[G.id]=G,ne[G.id]=Object.assign(Object.assign({},G),{originalId:G.id,items:[],key:G.id,allChildIds:[]})}),{items:R,pinTop:k,pinBottom:J,flattenItems:ee,focusFlattenItems:ne}},[m,o,i,ie,le]),{flattenItems:je,focusFlattenItems:ye}=fe,re=_(fe,["flattenItems","focusFlattenItems"]),{ids:ce,expandedIds:he}=(0,s.useMemo)(()=>{const{pinTop:k,items:R,pinBottom:J}=re;let ee=[],ne=[];return te&&ee.push(ie.id),[k,R,J].forEach(({focusFlattenItems:G,focusCloseChildIds:De})=>{const be=(0,O.e)({focusFlattenItems:G,focusCloseChildIds:De,openCollapseItems:q,isSelectionMultiple:(Y==null?void 0:Y.mode)==="multiple"});ee=ee.concat(be.ids),ne=ne.concat(be.expandedIds)}),le.forEach(G=>{ee.push(G.id)}),{ids:ee,expandedIds:ne}},[le,te,re,q,ie.id,Y==null?void 0:Y.mode]),me=(0,s.useRef)(null),xe=(0,s.useRef)(null),ge=ce[0],{handleListKeyDownFactory:_e,resetActiveItemId:de,activeItemId:Ee,forceUpdateActiveItemId:ue}=(0,K.d)({mainRef:D!=null?D:me,focusFlattenItems:ye,hasListInFocusChain:!0,firstItemId:ge}),Pe=(0,s.useCallback)(k=>_e(ce,he)(k),[_e,ce,he]),Oe=(0,s.useCallback)(k=>{de(),oe(k)},[de,oe]),ve=(0,s.useCallback)((k,R)=>{k.key==="ArrowDown"&&(k.preventDefault(),oe(!0),setTimeout(()=>{var J;de(),(J=xe.current)===null||J===void 0||J.focus()},0)),k.key==="ArrowUp"&&oe(!1),R==null||R(k)},[de,oe]),ze=(0,s.useMemo)(()=>(0,s.isValidElement)(v),[v]),Ae=(0,s.useMemo)(()=>{if((0,s.isValidElement)(v)){const k=typeof v.props=="object"?v.props:{};return(0,s.cloneElement)(v,Object.assign(Object.assign({},k),{onKeyDown:R=>{var J;ve(R,(J=v.props)===null||J===void 0?void 0:J.onKeyDown)}}))}return typeof v=="function"?v({onKeyDown:ve}):v},[ve,v]);return(0,t.jsx)(w.Tr,{flattenItems:je,focusFlattenItems:ye,contentRender:y,size:V,marker:S,firstItemId:ge,virtualized:B,children:(0,t.jsx)(N.WM,Object.assign({},Y,{children:(0,t.jsx)(U.bN.Provider,{value:{openCollapseItems:q,toggleOpenCollapseItem:pe},children:(0,t.jsx)(Z.m.Provider,{value:{activeItemId:Ee,handleListKeyDownFactory:_e,forceUpdateActiveItemId:ue},children:(0,t.jsx)(X.K.Provider,{value:{closeDroplistOnItemClick:a,closeDroplist:()=>{var k;oe(!1),de(),(k=(D!=null?D:me).current)===null||k===void 0||k.focus()}},children:(0,t.jsx)(p.m,{content:(0,t.jsx)("div",{className:n()(g.A.wrapper,c),children:(0,t.jsx)(z.Q,Object.assign({},$,{items:re.items.focusCloseChildIds,pinTop:re.pinTop.focusCloseChildIds,pinBottom:re.pinBottom.focusCloseChildIds,virtualized:B,onKeyDown:Pe,searchItem:ie,tabIndex:0,ref:(0,r.A)(xe,C),search:E,onFocus:k=>{k.stopPropagation(),ue==null||ue(ce[0])},limitedScrollHeight:!0,untouchableScrollbars:P}))}),outsideClick:!0,triggerClassName:se,fallbackPlacements:f,trigger:A,placement:W,widthStrategy:F,triggerRef:D?ze&&D||void 0:me,open:ke,onOpenChange:Oe,closeOnPopstate:Q,children:Ae})})})})}))})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js":((h,u,e)=>{e.d(u,{E:()=>j});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),n=e.n(l),r=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"),s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(s),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),b=e.n(x),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),O=e.n(I),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=e.n(w),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Z=e.n(U),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(X),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"),g={};g.styleTagTransform=K(),g.setAttributes=N(),g.insert=O().bind(null,"head"),g.domAPI=b(),g.insertStyleElement=Z();var _=p()(z.A,g);const f=z.A&&z.A.locals?z.A.locals:void 0;var T=function(m,E){var i={};for(var o in m)Object.prototype.hasOwnProperty.call(m,o)&&E.indexOf(o)<0&&(i[o]=m[o]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(m);d<o.length;d++)E.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(m,o[d])&&(i[o[d]]=m[o[d]]);return i};function j(m){var{width:E,height:i,className:o,borderRadius:d,loading:v,children:A}=m,W=T(m,["width","height","className","borderRadius","loading","children"]);return(0,r.v)(v)?(0,t.jsx)("div",Object.assign({},W,{style:{width:E,height:i,borderRadius:d},className:n()(f.skeleton,o)})):(0,t.jsx)(t.Fragment,{children:A})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js":((h,u,e)=>{e.d(u,{Q:()=>r,r:()=>n});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const n=(0,l.createContext)(!1);function r({loading:s,children:p}){return(0,t.jsx)(n.Provider,{value:s,children:p})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js":((h,u,e)=>{e.d(u,{v:()=>n});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js");function n(r){return(0,t.useContext)(l.r)||r}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js":((h,u,e)=>{e.d(u,{o:()=>W});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),n=e.n(l),r=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),s=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),x=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),b=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const I={S:"s",Xs:"xs"},O={[I.Xs]:16,[I.S]:24},w={Hover:"hover",Click:"click"},N={[w.Hover]:b.tr.HoverAndFocusVisible,[w.Click]:b.tr.ClickAndFocusVisible};var U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n(U),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),K=e.n(X),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),g=e.n(z),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),f=e.n(_),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),j=e.n(T),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(m),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),o={};o.styleTagTransform=E(),o.setAttributes=f(),o.insert=g().bind(null,"head"),o.domAPI=K(),o.insertStyleElement=j();var d=Z()(i.A,o);const v=i.A&&i.A.locals?i.A.locals:void 0;var A=function(F,D){var H={};for(var M in F)Object.prototype.hasOwnProperty.call(F,M)&&D.indexOf(M)<0&&(H[M]=F[M]);if(F!=null&&typeof Object.getOwnPropertySymbols=="function")for(var L=0,M=Object.getOwnPropertySymbols(F);L<M.length;L++)D.indexOf(M[L])<0&&Object.prototype.propertyIsEnumerable.call(F,M[L])&&(H[M[L]]=F[M[L]]);return H};function W(F){var{size:D=I.Xs,trigger:H=w.Hover,tooltipClassname:M,className:L,open:se,onOpenChange:Y,tabIndex:y=0,triggerSupportProps:V={}}=F,S=A(F,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[a,c]=(0,r.iC)(se,!1,Y);return(0,t.jsx)(x.m,Object.assign({},S,{className:M,open:a,onOpenChange:c,trigger:N[H],children:({getReferenceProps:C,ref:P})=>(0,t.jsx)("span",Object.assign({},C(),(0,p.z7)(V),{ref:P,"data-size":D,"data-opened":a,"data-trigger":H,className:n()(v.questionTooltip,L),role:"button",tabIndex:y,children:(0,t.jsx)(s.A,{size:O[D]})}))}))}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js":((h,u,e)=>{e.d(u,{m:()=>j});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),n=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const r=[n.El.Top,n.El.Right,n.El.Bottom,n.El.Left];var s=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(s),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),b=e.n(x),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),O=e.n(I),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=e.n(w),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Z=e.n(U),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(X),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),g={};g.styleTagTransform=K(),g.setAttributes=N(),g.insert=O().bind(null,"head"),g.domAPI=b(),g.insertStyleElement=Z();var _=p()(z.A,g);const f=z.A&&z.A.locals?z.A.locals:void 0;var T=function(m,E){var i={};for(var o in m)Object.prototype.hasOwnProperty.call(m,o)&&E.indexOf(o)<0&&(i[o]=m[o]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(m);d<o.length;d++)E.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(m,o[d])&&(i[o[d]]=m[o[d]]);return i};function j(m){var{tip:E,trigger:i="hoverAndFocusVisible",placement:o="top",children:d,triggerRef:v,disableMaxWidth:A=!1}=m,W=T(m,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!d&&!v?null:(0,t.jsx)(l.Z,Object.assign({placement:o,popoverContent:(0,t.jsx)("div",{className:f.tooltipContainer,"data-disable-max-width":A,children:E}),trigger:i,triggerRef:v,arrowContainerClassName:f.tooltipArrowContainer,arrowElementClassName:f.tooltipArrowElement,hasArrow:!0,fallbackPlacements:r},W,{children:d}))}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/WithTooltip/WithTooltip.js":((h,u,e)=>{e.d(u,{k:()=>n});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function n({tooltip:r,children:s}){return r?(0,t.jsx)(l.m,Object.assign({},r,{children:s})):(0,t.jsx)(t.Fragment,{children:s})}}),"./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useDynamicList.js":((h,u,e)=>{e.d(u,{n:()=>r});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),n=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function r({parentContainerRef:s,resizingContainerRef:p=s,items:x,maxVisibleItems:b=1/0}){const I=_=>Math.min(b,_),[O,w]=(0,t.useState)(I(x.length)),[N,U]=(0,t.useState)(1/0),Z=(0,t.useRef)(N),X=_=>{w(typeof _=="number"?I(_):f=>_(I(f)))},K=(0,l.A)(()=>{const _=s.current;_&&_.scrollWidth-_.offsetWidth>0&&x[O-1]&&X(T=>T-1)}),z=(0,l.A)(()=>{x[O]&&X(f=>f+1)}),g=(0,l.A)(({changedWidth:_,initialWidth:f})=>{_>f?O<b&&z():_<f&&K()});return(0,t.useEffect)(()=>{const _=()=>{K(),s.current&&U(s.current.scrollWidth)};return document.fonts.addEventListener("loadingdone",_),()=>document.fonts.removeEventListener("loadingdone",_)},[s,K]),(0,t.useEffect)(()=>{const _=p.current;if(_){const f=new ResizeObserver(T=>T.forEach(j=>{if(j.target===_){const[{inlineSize:m}]=j.contentBoxSize;U(Math.floor(m))}}));return f.observe(_),()=>f.disconnect()}},[p]),(0,n.N)(()=>{s.current&&g({initialWidth:s.current.scrollWidth,changedWidth:Z.current})},[x,s,g]),(0,n.N)(()=>{g({initialWidth:Z.current,changedWidth:N}),Z.current=N},[N,g]),(0,n.N)(()=>{K()},[K,O]),{visibleItems:x.slice(0,O),hiddenItems:x.slice(O)}}}),"./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js":((h,u,e)=>{e.d(u,{A:()=>n});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function n(r){const s=(0,t.useRef)(null);return(0,l.N)(()=>{s.current=r}),(0,t.useCallback)((...p)=>{const x=s.current;return x===null&&console.warn("The event handler cannot be called during render"),x==null?void 0:x(...p)},[])}}),"./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js":((h,u,e)=>{e.d(u,{I:()=>l});var t=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function l({value:n,onChange:r,defaultValue:s}){return(0,t.iC)(n,s,p=>{const x=typeof p=="function"?p(n):p;r==null||r(x)})}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((h,u,e)=>{e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(t),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(n),s=r()(l());s.push([h.id,`.avatar--YNdDD{
  position:relative;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.avatar--YNdDD[data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.avatar--YNdDD[data-appearance=orange]{
  color:var(--sys-orange-text-main, #884c23);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.avatar--YNdDD[data-appearance=yellow]{
  color:var(--sys-yellow-text-main, #815f19);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.avatar--YNdDD[data-appearance=green]{
  color:var(--sys-green-text-main, #3d6035);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.avatar--YNdDD[data-appearance=blue]{
  color:var(--sys-blue-text-main, #2b537e);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.avatar--YNdDD[data-appearance=violet]{
  color:var(--sys-violet-text-main, #59446a);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.avatar--YNdDD[data-appearance=pink]{
  color:var(--sys-pink-text-main, #754158);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.avatar--YNdDD[data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.avatar--YNdDD[data-size=xxs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--YNdDD[data-size=xxs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxs, 8px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--YNdDD[data-size=xxs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxs, 4px);
  width:var(--size-avatar-xxs, 16px);
  height:var(--size-avatar-xxs, 16px);
}
.avatar--YNdDD[data-size=xs]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.avatar--YNdDD[data-size=xs][data-shape=round]{
  border-radius:var(--radius-avatar-round-xs, 16px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--YNdDD[data-size=xs][data-shape=square]{
  border-radius:var(--radius-avatar-square-xs, 4px);
  width:var(--size-avatar-xs, 24px);
  height:var(--size-avatar-xs, 24px);
}
.avatar--YNdDD[data-size=s]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.avatar--YNdDD[data-size=s][data-shape=round]{
  border-radius:var(--radius-avatar-round-s, 24px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--YNdDD[data-size=s][data-shape=square]{
  border-radius:var(--radius-avatar-square-s, 4px);
  width:var(--size-avatar-s, 32px);
  height:var(--size-avatar-s, 32px);
}
.avatar--YNdDD[data-size=m]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.avatar--YNdDD[data-size=m][data-shape=round]{
  border-radius:var(--radius-avatar-round-m, 24px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--YNdDD[data-size=m][data-shape=square]{
  border-radius:var(--radius-avatar-square-m, 8px);
  width:var(--size-avatar-m, 48px);
  height:var(--size-avatar-m, 48px);
}
.avatar--YNdDD[data-size=l]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.avatar--YNdDD[data-size=l][data-shape=round]{
  border-radius:var(--radius-avatar-round-l, 32px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--YNdDD[data-size=l][data-shape=square]{
  border-radius:var(--radius-avatar-square-l, 16px);
  width:var(--size-avatar-l, 64px);
  height:var(--size-avatar-l, 64px);
}
.avatar--YNdDD[data-size=xl]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.avatar--YNdDD[data-size=xl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xl, 48px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--YNdDD[data-size=xl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xl, 24px);
  width:var(--size-avatar-xl, 88px);
  height:var(--size-avatar-xl, 88px);
}
.avatar--YNdDD[data-size=xxl]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.avatar--YNdDD[data-size=xxl][data-shape=round]{
  border-radius:var(--radius-avatar-round-xxl, 64px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}
.avatar--YNdDD[data-size=xxl][data-shape=square]{
  border-radius:var(--radius-avatar-square-xxl, 24px);
  width:var(--size-avatar-xxl, 112px);
  height:var(--size-avatar-xxl, 112px);
}

.image--mirqR{
  width:100%;
  height:100%;
  -o-object-fit:cover;
     object-fit:cover;
  -o-object-position:center;
     object-position:center;
  border-radius:inherit;
}

.indicatorWrapper--Hh27C{
  position:absolute;
  right:0;
  bottom:0;
  display:inline-flex;
}`,""]),s.locals={avatar:"avatar--YNdDD",image:"image--mirqR",indicatorWrapper:"indicatorWrapper--Hh27C"};const p=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.3_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/styles.module.css":((h,u,e)=>{e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(t),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(n),s=r()(l());s.push([h.id,`.decor--pyZKn{
  overflow:hidden;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.decor--pyZKn[data-decor][data-appearance=primary]{
  color:var(--sys-primary-accent-default, #794ed3);
  background-color:var(--sys-primary-decor-default, #ebdefd);
}
.decor--pyZKn[data-decor][data-appearance=neutral]{
  color:var(--sys-neutral-accent-default, #787b8a);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.decor--pyZKn[data-decor][data-appearance=red]{
  color:var(--sys-red-accent-default, #cb3f3e);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.decor--pyZKn[data-decor][data-appearance=orange]{
  color:var(--sys-orange-accent-default, #fb8e42);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.decor--pyZKn[data-decor][data-appearance=yellow]{
  color:var(--sys-yellow-accent-default, #e2b134);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.decor--pyZKn[data-decor][data-appearance=green]{
  color:var(--sys-green-accent-default, #57b762);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.decor--pyZKn[data-decor][data-appearance=blue]{
  color:var(--sys-blue-accent-default, #5388d1);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.decor--pyZKn[data-decor][data-appearance=violet]{
  color:var(--sys-violet-accent-default, #aa6cc1);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.decor--pyZKn[data-decor][data-appearance=pink]{
  color:var(--sys-pink-accent-default, #d1668e);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.decor--pyZKn[data-size=s][data-shape=round]{
  width:var(--size-icon-predefined-container-s, 32px);
  height:var(--size-icon-predefined-container-s, 32px);
  border-radius:var(--radius-icon-predefined-decor-round-s, 16px);
}
.decor--pyZKn[data-size=s][data-shape=square]{
  width:var(--size-icon-predefined-container-s, 32px);
  height:var(--size-icon-predefined-container-s, 32px);
  border-radius:var(--radius-icon-predefined-decor-square-s, 8px);
}
.decor--pyZKn[data-size=m][data-shape=round]{
  width:var(--size-icon-predefined-container-m, 40px);
  height:var(--size-icon-predefined-container-m, 40px);
  border-radius:var(--radius-icon-predefined-decor-round-m, 24px);
}
.decor--pyZKn[data-size=m][data-shape=square]{
  width:var(--size-icon-predefined-container-m, 40px);
  height:var(--size-icon-predefined-container-m, 40px);
  border-radius:var(--radius-icon-predefined-decor-square-m, 12px);
}
.decor--pyZKn[data-size=l][data-shape=round]{
  width:var(--size-icon-predefined-container-l, 80px);
  height:var(--size-icon-predefined-container-l, 80px);
  border-radius:var(--radius-icon-predefined-decor-round-l, 40px);
}
.decor--pyZKn[data-size=l][data-shape=square]{
  width:var(--size-icon-predefined-container-l, 80px);
  height:var(--size-icon-predefined-container-l, 80px);
  border-radius:var(--radius-icon-predefined-decor-square-l, 20px);
}

.icon--Kt00e,
.icon--Kt00e svg{
  fill:currentColor;
}
.icon--Kt00e[data-appearance=primary]{
  color:var(--sys-primary-accent-default, #794ed3);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=neutral]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=red]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=orange]{
  color:var(--sys-orange-accent-default, #fb8e42);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=yellow]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=green]{
  color:var(--sys-green-accent-default, #57b762);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=blue]{
  color:var(--sys-blue-accent-default, #5388d1);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=violet]{
  color:var(--sys-violet-accent-default, #aa6cc1);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=pink]{
  color:var(--sys-pink-accent-default, #d1668e);
}
.icon--Kt00e[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--Kt00e[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--Kt00e[data-appearance=yellow]{
  color:var(--sys-yellow-text-light, #d3a736);
}`,""]),s.locals={decor:"decor--pyZKn",icon:"icon--Kt00e"};const p=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.33_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css":((h,u,e)=>{e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(t),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(n),s=r()(l());s.push([h.id,`.infoBlockFooter--xRsKy{
  gap:var(--space-info-block-footer-gap, 8px);
  display:flex;
  align-items:center;
}`,""]),s.locals={infoBlockFooter:"infoBlockFooter--xRsKy"};const p=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.33_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css":((h,u,e)=>{e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(t),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(n),s=r()(l());s.push([h.id,`.contentLayout--hjKkW{
  display:flex;
  flex-direction:column;
}

.textWrap--JHeVv{
  display:flex;
  flex-direction:column;
}

.footer--_ZtsA{
  position:relative;
  box-sizing:border-box;
  width:100%;
}

.title--Xblzh{
  color:var(--sys-neutral-text-main, #41424e);
}

.description--l_7NF{
  color:var(--sys-neutral-text-support, #6d707f);
}

.infoBlock--yTowJ{
  display:flex;
  box-sizing:border-box;
}
.infoBlock--yTowJ[data-align=vertical]{
  flex-direction:column;
  align-items:center;
}
.infoBlock--yTowJ[data-align=vertical] .contentLayout--hjKkW{
  align-items:center;
}
.infoBlock--yTowJ[data-align=vertical] .textWrap--JHeVv{
  align-items:center;
}
.infoBlock--yTowJ[data-align=vertical] .footer--_ZtsA{
  width:auto;
  text-align:center;
}
.infoBlock--yTowJ[data-align=vertical] .description--l_7NF,
.infoBlock--yTowJ[data-align=vertical] .title--Xblzh{
  text-align:center;
}
.infoBlock--yTowJ[data-align=horizontal]{
  flex-direction:row;
  align-items:flex-start;
}
.infoBlock--yTowJ[data-size=s]{
  gap:var(--space-info-block-s-container-gap, 12px);
}
.infoBlock--yTowJ[data-size=s] .contentLayout--hjKkW{
  gap:var(--space-info-block-s-container-content-layout-gap, 16px);
}
.infoBlock--yTowJ[data-size=s] .textWrap--JHeVv{
  gap:var(--space-info-block-s-container-content-layout-text-wrap-gap, 4px);
}
.infoBlock--yTowJ[data-size=m]{
  gap:var(--space-info-block-m-container-gap, 16px);
}
.infoBlock--yTowJ[data-size=m] .contentLayout--hjKkW{
  gap:var(--space-info-block-m-container-content-layout-gap, 24px);
}
.infoBlock--yTowJ[data-size=m] .textWrap--JHeVv{
  gap:var(--space-info-block-m-container-content-layout-text-wrap-gap, 8px);
}
.infoBlock--yTowJ[data-size=l]{
  gap:var(--space-info-block-l-container-gap, 24px);
}
.infoBlock--yTowJ[data-size=l] .contentLayout--hjKkW{
  gap:var(--space-info-block-l-container-content-layout-gap, 24px);
}
.infoBlock--yTowJ[data-size=l] .textWrap--JHeVv{
  gap:var(--space-info-block-l-container-content-layout-text-wrap-gap, 8px);
}`,""]),s.locals={contentLayout:"contentLayout--hjKkW",textWrap:"textWrap--JHeVv",footer:"footer--_ZtsA",title:"title--Xblzh",description:"description--l_7NF",infoBlock:"infoBlock--yTowJ"};const p=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css":((h,u,e)=>{e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(t),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(n),s=r()(l());s.push([h.id,`.skeleton--VMjrg{
  box-sizing:border-box;
  width:100%;
  height:1em;
  background:var(--gradient-skeleton, linear-gradient(115deg, rgba(36, 36, 48, 0.0784313725) 40%, rgba(36, 36, 48, 0) 50%, rgba(36, 36, 48, 0.0784313725) 60%)) 0 0/200% 100% repeat fixed;
  animation:loading--g2Bh0 2s infinite linear;
}
@keyframes loading--g2Bh0{
  to{
    background-position:-200% 0;
  }
}`,""]),s.locals={skeleton:"skeleton--VMjrg",loading:"loading--g2Bh0"};const p=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.8.1_react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((h,u,e)=>{e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(t),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(n),s=r()(l());s.push([h.id,`.container--r6DW8{
  display:inline-flex;
  align-items:center;
  justify-content:center;
}
.container--r6DW8[data-size=xxs]{
  width:var(--size-status-indicator-container-xxs, 4px);
  height:var(--size-status-indicator-container-xxs, 4px);
}
.container--r6DW8[data-size=xxs] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-xxs, 2px);
  border-width:var(--border-width-general-xxs, 0.5px);
  width:var(--size-status-indicator-xxs, 4px);
  height:var(--size-status-indicator-xxs, 4px);
}
.container--r6DW8[data-size=xs]{
  width:var(--size-status-indicator-container-xs, 8px);
  height:var(--size-status-indicator-container-xs, 8px);
}
.container--r6DW8[data-size=xs] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-xs, 4px);
  border-width:var(--border-width-general-s, 1.5px);
  width:var(--size-status-indicator-xs, 8px);
  height:var(--size-status-indicator-xs, 8px);
}
.container--r6DW8[data-size=s]{
  width:var(--size-status-indicator-container-s, 16px);
  height:var(--size-status-indicator-container-s, 16px);
}
.container--r6DW8[data-size=s] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-s, 8px);
  border-width:var(--border-width-general-m, 2px);
  width:var(--size-status-indicator-s, 12px);
  height:var(--size-status-indicator-s, 12px);
}
.container--r6DW8[data-size=m]{
  width:var(--size-status-indicator-container-m, 16px);
  height:var(--size-status-indicator-container-m, 16px);
}
.container--r6DW8[data-size=m] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-m, 8px);
  border-width:var(--border-width-general-l, 3px);
  width:var(--size-status-indicator-m, 16px);
  height:var(--size-status-indicator-m, 16px);
}
.container--r6DW8[data-size=l]{
  width:var(--size-status-indicator-container-l, 24px);
  height:var(--size-status-indicator-container-l, 24px);
}
.container--r6DW8[data-size=l] .indicator--j3nCt{
  border-radius:var(--radius-status-indicator-l, 16px);
  border-width:var(--border-width-general-xl, 4px);
  width:var(--size-status-indicator-l, 24px);
  height:var(--size-status-indicator-l, 24px);
}

.indicator--j3nCt{
  box-sizing:border-box;
  border:0 solid var(--sys-neutral-background1-level, #fdfdfd);
}
.indicator--j3nCt[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.indicator--j3nCt[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.indicator--j3nCt[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.indicator--j3nCt[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.indicator--j3nCt[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.indicator--j3nCt[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.indicator--j3nCt[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.indicator--j3nCt[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.indicator--j3nCt[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),s.locals={container:"container--r6DW8",indicator:"indicator--j3nCt"};const p=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css":((h,u,e)=>{e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(t),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(n),s=r()(l());s.push([h.id,`.questionTooltip--h1kEX{
  cursor:pointer;
  display:inline-flex;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background:none;
  border:0;
}
.questionTooltip--h1kEX:hover{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.questionTooltip--h1kEX:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.questionTooltip--h1kEX[data-trigger=click][data-opened=true]{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--h1kEX[data-trigger=click]:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--h1kEX[data-trigger=click]:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--h1kEX[data-trigger=click]:focus-visible{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--h1kEX[data-size=xs] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.questionTooltip--h1kEX[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}`,""]),s.locals={questionTooltip:"questionTooltip--h1kEX"};const p=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((h,u,e)=>{e.d(u,{A:()=>p});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(t),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),r=e.n(n),s=r()(l());s.push([h.id,`.tooltipContainer--CVVp7{
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
.tooltipContainer--CVVp7[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--o1uBX{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 4px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 4px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--hBQpg{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),s.locals={tooltipContainer:"tooltipContainer--CVVp7",tooltipArrowContainer:"tooltipArrowContainer--o1uBX",tooltipArrowElement:"tooltipArrowElement--hBQpg"};const p=s})}]);})();
