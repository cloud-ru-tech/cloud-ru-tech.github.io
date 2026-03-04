"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3707],{"./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((b,m,e)=>{e.d(m,{e:()=>X});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(p),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const d={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},k={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(O),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=e.n(A),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),R=e.n(K),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),U=e.n(N),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),P=e.n(w),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=e.n(x),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.8.1_react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),I={};I.styleTagTransform=h(),I.setAttributes=U(),I.insert=R().bind(null,"head"),I.domAPI=W(),I.insertStyleElement=P();var T=S()(g.A,I);const _=g.A&&g.A.locals?g.A.locals:void 0;var j=function(E,Y){var B={};for(var t in E)Object.prototype.hasOwnProperty.call(E,t)&&Y.indexOf(t)<0&&(B[t]=E[t]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(E);n<t.length;n++)Y.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(E,t[n])&&(B[t[n]]=E[t[n]]);return B};function l(E){var{size:Y=k.M,appearance:B=d.Primary,className:t}=E,n=j(E,["size","appearance","className"]);return(0,s.jsx)("div",Object.assign({className:r()(_.container,t)},(0,o.z7)(n),{"data-size":Y,children:(0,s.jsx)("div",{className:_.indicator,"data-appearance":B})}))}const a={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},u={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},f={Round:"round",Square:"square"};var z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),L={};L.styleTagTransform=h(),L.setAttributes=U(),L.insert=R().bind(null,"head"),L.domAPI=W(),L.insertStyleElement=P();var F=S()(z.A,L);const D=z.A&&z.A.locals?z.A.locals:void 0,V=" ",H=(E,Y)=>{var B;const t=E.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!t||t.length<Y)return t.toUpperCase();const n=t.split(V);let y=t;if(n.length>1){const i=n[0].charAt(0),v=(B=n[n.length-1])===null||B===void 0?void 0:B.charAt(0);y=`${i}${v}`.toUpperCase()}return y.slice(0,Y).toUpperCase()};var C=function(E,Y){var B={};for(var t in E)Object.prototype.hasOwnProperty.call(E,t)&&Y.indexOf(t)<0&&(B[t]=E[t]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(E);n<t.length;n++)Y.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(E,t[n])&&(B[t[n]]=E[t[n]]);return B};const ne={[u.Xxs]:"xxs",[u.Xs]:"xs",[u.S]:"xs",[u.M]:"m",[u.L]:"m",[u.Xl]:"l",[u.Xxl]:"l"};function X(E){var{name:Y,appearance:B=a.Red,size:t=u.S,shape:n=f.Round,indicator:y,showTwoSymbols:i,src:v,className:Q}=E,q=C(E,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[J,$]=(0,c.useState)(!1),te=t!==u.Xxs&&i?2:1;return(0,c.useEffect)(()=>{$(!1)},[v]),(0,s.jsxs)("div",Object.assign({className:r()(D.avatar,Q)},(0,o.z7)(q),{"data-size":t,"data-appearance":B,"data-shape":n,children:[v&&!J?(0,s.jsx)("img",{"data-test-id":"image",className:D.image,src:v,onError:()=>$(!0),alt:""}):(0,s.jsx)("div",{"data-test-id":"abbreviation",children:H(Y,te)}),y&&(0,s.jsx)("div",{className:D.indicatorWrapper,children:(0,s.jsx)(l,{"data-test-id":"indicator",appearance:y,size:ne[t]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.3_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js":((b,m,e)=>{e.d(m,{I:()=>j});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(p),c=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const o={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},d={S:"s",M:"m",L:"l"};var k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=e.n(k),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(S),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),K=e.n(W),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=e.n(R),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=e.n(U),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=e.n(P),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.3_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/styles.module.css"),g={};g.styleTagTransform=x(),g.setAttributes=N(),g.insert=K().bind(null,"head"),g.domAPI=A(),g.insertStyleElement=w();var I=O()(h.A,g);const T=h.A&&h.A.locals?h.A.locals:void 0;var _=function(l,a){var u={};for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&a.indexOf(f)<0&&(u[f]=l[f]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,f=Object.getOwnPropertySymbols(l);z<f.length;z++)a.indexOf(f[z])<0&&Object.prototype.propertyIsEnumerable.call(l,f[z])&&(u[f[z]]=l[f[z]]);return u};function j(l){var{className:a,decor:u=!0,size:f=d.M,icon:z,appearance:L=o.Primary,shape:F="round"}=l,D=_(l,["className","decor","size","icon","appearance","shape"]);return(0,s.jsx)("div",Object.assign({className:r()(T.decor,a)},(0,c.z7)(D),{"data-size":f,"data-decor":u||void 0,"data-appearance":L,"data-shape":F,children:(0,s.jsx)(z,{"data-size":f,"data-appearance":L,className:T.icon})}))}}),"./node_modules/.pnpm/@snack-uikit+info-block@0.6.33_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/index.js":((b,m,e)=>{e.d(m,{O:()=>B});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(p),c=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js"),o=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/ButtonTonal.js");const d={S:"s",M:"m",L:"l"},k={Vertical:"vertical",Horizontal:"horizontal"},O={icon:"info-block__icon",title:"info-block__title",description:"info-block__description",footer:"info-block__footer",primaryButton:"info-block__primary-button",secondaryButton:"info-block__secondary-button"};var S=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const A=(0,S.createContext)({size:d.S});function W(){return(0,S.useContext)(A)}var K=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function R({Button:t,tooltip:n}){return n?function(i){return(0,s.jsx)(K.m,Object.assign({},n,{children:(0,s.jsx)(t,Object.assign({},i))}))}:t}var N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),U=e.n(N),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),P=e.n(w),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=e.n(x),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),I=e.n(g),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_=e.n(T),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),l=e.n(j),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.33_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"),u={};u.styleTagTransform=l(),u.setAttributes=I(),u.insert=h().bind(null,"head"),u.domAPI=P(),u.insertStyleElement=_();var f=U()(a.A,u);const z=a.A&&a.A.locals?a.A.locals:void 0;function L({primaryButton:t,secondaryButton:n,className:y}){const i=R({Button:c.L,tooltip:t.tooltip}),v=R({Button:o.L,tooltip:n==null?void 0:n.tooltip}),{size:Q}=W();return(0,s.jsxs)("div",{className:r()(z.infoBlockFooter,y),children:[n&&(0,s.jsx)(v,Object.assign({},n,{size:Q,"data-test-id":n["data-test-id"]||O.secondaryButton})),(0,s.jsx)(i,Object.assign({},t,{size:Q,"data-test-id":t["data-test-id"]||O.primaryButton}))]})}var F=e("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.10_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),D=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.11_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),V=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),H=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.33_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"),C={};C.styleTagTransform=l(),C.setAttributes=I(),C.insert=h().bind(null,"head"),C.domAPI=P(),C.insertStyleElement=_();var ne=U()(H.A,C);const X=H.A&&H.A.locals?H.A.locals:void 0;var E=function(t,n){var y={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(y[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,i=Object.getOwnPropertySymbols(t);v<i.length;v++)n.indexOf(i[v])<0&&Object.prototype.propertyIsEnumerable.call(t,i[v])&&(y[i[v]]=t[i[v]]);return y};function Y(t){var n,y,{title:i,description:v,icon:Q,size:q=d.S,footer:J,align:$=k.Vertical,className:te}=t,G=E(t,["title","description","icon","size","footer","align","className"]);return(0,s.jsx)(A.Provider,{value:{size:q},children:(0,s.jsxs)("div",Object.assign({className:r()(X.infoBlock,te),"data-size":q,"data-align":$},(0,V.z7)(G),{children:[Q&&(0,s.jsx)(F.I,{icon:Q.icon,appearance:(n=Q.appearance)!==null&&n!==void 0?n:"primary",decor:(y=Q.decor)!==null&&y!==void 0?y:!0,size:q,"data-test-id":O.icon}),(0,s.jsxs)("div",{className:X.contentLayout,children:[(0,s.jsxs)("div",{className:X.textWrap,children:[i&&(0,s.jsx)(D.o,{family:"sans",purpose:"title",size:q,className:X.title,"data-test-id":O.title,children:i}),v&&(0,s.jsx)(D.o,{family:"sans",purpose:"body",size:q,className:X.description,"data-test-id":O.description,children:v})]}),J&&(0,s.jsx)("div",{className:X.footer,"data-test-id":O.footer,children:J})]})]}))})}const B=Y;B.Footer=L}),"./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js":((b,m,e)=>{e.d(m,{i:()=>I});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(p),c=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),k=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),O=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),S=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),A=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),W=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),K=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),R=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),N=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),U=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),w=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),P=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),x=e("./node_modules/.pnpm/@snack-uikit+list@0.32.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),h=function(T,_){var j={};for(var l in T)Object.prototype.hasOwnProperty.call(T,l)&&_.indexOf(l)<0&&(j[l]=T[l]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,l=Object.getOwnPropertySymbols(T);a<l.length;a++)_.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(T,l[a])&&(j[l[a]]=T[l[a]]);return j};const g=["top","right","bottom","left"];function I(T){var{items:_,search:j,pinBottom:l=[],pinTop:a=[],footerActiveElementsRefs:u,children:f,trigger:z,placement:L,widthStrategy:F,triggerElemRef:D,open:V,onOpenChange:H,collapse:C={},triggerClassName:ne,selection:X,contentRender:E,size:Y="s",marker:B=!0,closeDroplistOnItemClick:t=!1,className:n,listRef:y,untouchableScrollbars:i=!1,virtualized:v=!1,closeOnPopstate:Q}=T,q=h(T,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const J=(0,o.useMemo)(()=>!!j,[j]),[$=[],te]=(0,k.I)(C),G=(0,o.useCallback)(M=>te(Z=>Z!=null&&Z.includes(M)?Z.filter(ee=>ee!==M):(Z!=null?Z:[]).concat([M])),[te]),[re=!1,se]=(0,k.I)({value:V,defaultValue:!1,onChange:H}),{searchItem:oe,footerItems:de}=(0,S.nG)({footerActiveElementsRefs:u}),ye=(0,o.useMemo)(()=>{const M=(0,A.lg)({items:a,prefix:O.$.pinTop,parentId:O.$.default}),Z=(0,A.lg)({items:_,prefix:O.$.default,parentId:O.$.default}),ee=(0,A.lg)({items:l,prefix:O.$.pinBottom,parentId:O.$.default}),ie=Object.assign(Object.assign(Object.assign({},M.flattenItems),ee.flattenItems),Z.flattenItems),le=Object.assign(Object.assign(Object.assign({},M.focusFlattenItems),ee.focusFlattenItems),Z.focusFlattenItems);return[...de,oe].forEach(ae=>{ie[ae.id]=ae,le[ae.id]=Object.assign(Object.assign({},ae),{originalId:ae.id,items:[],key:ae.id,allChildIds:[]})}),{items:Z,pinTop:M,pinBottom:ee,flattenItems:ie,focusFlattenItems:le}},[_,a,l,oe,de]),{flattenItems:je,focusFlattenItems:he}=ye,ce=h(ye,["flattenItems","focusFlattenItems"]),{ids:pe,expandedIds:ge}=(0,o.useMemo)(()=>{const{pinTop:M,items:Z,pinBottom:ee}=ce;let ie=[],le=[];return J&&ie.push(oe.id),[M,Z,ee].forEach(({focusFlattenItems:ae,focusCloseChildIds:De})=>{const ke=(0,A.e)({focusFlattenItems:ae,focusCloseChildIds:De,openCollapseItems:$,isSelectionMultiple:(X==null?void 0:X.mode)==="multiple"});ie=ie.concat(ke.ids),le=le.concat(ke.expandedIds)}),de.forEach(ae=>{ie.push(ae.id)}),{ids:ie,expandedIds:le}},[de,J,ce,$,oe.id,X==null?void 0:X.mode]),me=(0,o.useRef)(null),xe=(0,o.useRef)(null),be=pe[0],{handleListKeyDownFactory:ve,resetActiveItemId:ue,activeItemId:Ee,forceUpdateActiveItemId:_e}=(0,w.d)({mainRef:D!=null?D:me,focusFlattenItems:he,hasListInFocusChain:!0,firstItemId:be}),Oe=(0,o.useCallback)(M=>ve(pe,ge)(M),[ve,pe,ge]),Pe=(0,o.useCallback)(M=>{ue(),se(M)},[ue,se]),fe=(0,o.useCallback)((M,Z)=>{M.key==="ArrowDown"&&(M.preventDefault(),se(!0),setTimeout(()=>{var ee;ue(),(ee=xe.current)===null||ee===void 0||ee.focus()},0)),M.key==="ArrowUp"&&se(!1),Z==null||Z(M)},[ue,se]),Te=(0,o.useMemo)(()=>(0,o.isValidElement)(f),[f]),Ae=(0,o.useMemo)(()=>{if((0,o.isValidElement)(f)){const M=typeof f.props=="object"?f.props:{};return(0,o.cloneElement)(f,Object.assign(Object.assign({},M),{onKeyDown:Z=>{var ee;fe(Z,(ee=f.props)===null||ee===void 0?void 0:ee.onKeyDown)}}))}return typeof f=="function"?f({onKeyDown:fe}):f},[fe,f]);return(0,s.jsx)(W.Tr,{flattenItems:je,focusFlattenItems:he,contentRender:E,size:Y,marker:B,firstItemId:be,virtualized:v,children:(0,s.jsx)(K.WM,Object.assign({},X,{children:(0,s.jsx)(R.bN.Provider,{value:{openCollapseItems:$,toggleOpenCollapseItem:G},children:(0,s.jsx)(N.m.Provider,{value:{activeItemId:Ee,handleListKeyDownFactory:ve,forceUpdateActiveItemId:_e},children:(0,s.jsx)(U.K.Provider,{value:{closeDroplistOnItemClick:t,closeDroplist:()=>{var M;se(!1),ue(),(M=(D!=null?D:me).current)===null||M===void 0||M.focus()}},children:(0,s.jsx)(d.m,{content:(0,s.jsx)("div",{className:r()(x.A.wrapper,n),children:(0,s.jsx)(P.Q,Object.assign({},q,{items:ce.items.focusCloseChildIds,pinTop:ce.pinTop.focusCloseChildIds,pinBottom:ce.pinBottom.focusCloseChildIds,virtualized:v,onKeyDown:Oe,searchItem:oe,tabIndex:0,ref:(0,c.A)(xe,y),search:j,onFocus:M=>{M.stopPropagation(),_e==null||_e(pe[0])},limitedScrollHeight:!0,untouchableScrollbars:i}))}),outsideClick:!0,triggerClassName:ne,fallbackPlacements:g,trigger:z,placement:L,widthStrategy:F,triggerRef:D?Te&&D||void 0:me,open:re,onOpenChange:Pe,closeOnPopstate:Q,children:Ae})})})})}))})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js":((b,m,e)=>{e.d(m,{E:()=>T});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(p),c=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(o),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=e.n(k),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),A=e.n(S),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),K=e.n(W),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(R),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),w=e.n(U),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"),x={};x.styleTagTransform=w(),x.setAttributes=K(),x.insert=A().bind(null,"head"),x.domAPI=O(),x.insertStyleElement=N();var h=d()(P.A,x);const g=P.A&&P.A.locals?P.A.locals:void 0;var I=function(_,j){var l={};for(var a in _)Object.prototype.hasOwnProperty.call(_,a)&&j.indexOf(a)<0&&(l[a]=_[a]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(_);u<a.length;u++)j.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(_,a[u])&&(l[a[u]]=_[a[u]]);return l};function T(_){var{width:j,height:l,className:a,borderRadius:u,loading:f,children:z}=_,L=I(_,["width","height","className","borderRadius","loading","children"]);return(0,c.v)(f)?(0,s.jsx)("div",Object.assign({},L,{style:{width:j,height:l,borderRadius:u},className:r()(g.skeleton,a)})):(0,s.jsx)(s.Fragment,{children:z})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js":((b,m,e)=>{e.d(m,{Q:()=>c,r:()=>r});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const r=(0,p.createContext)(!1);function c({loading:o,children:d}){return(0,s.jsx)(r.Provider,{value:o,children:d})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js":((b,m,e)=>{e.d(m,{v:()=>r});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js");function r(c){return(0,s.useContext)(p.r)||c}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js":((b,m,e)=>{e.d(m,{m:()=>T});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),r=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const c=[r.El.Top,r.El.Right,r.El.Bottom,r.El.Left];var o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(o),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=e.n(k),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),A=e.n(S),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),K=e.n(W),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(R),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),w=e.n(U),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),x={};x.styleTagTransform=w(),x.setAttributes=K(),x.insert=A().bind(null,"head"),x.domAPI=O(),x.insertStyleElement=N();var h=d()(P.A,x);const g=P.A&&P.A.locals?P.A.locals:void 0;var I=function(_,j){var l={};for(var a in _)Object.prototype.hasOwnProperty.call(_,a)&&j.indexOf(a)<0&&(l[a]=_[a]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(_);u<a.length;u++)j.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(_,a[u])&&(l[a[u]]=_[a[u]]);return l};function T(_){var{tip:j,trigger:l="hoverAndFocusVisible",placement:a="top",children:u,triggerRef:f,disableMaxWidth:z=!1}=_,L=I(_,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!u&&!f?null:(0,s.jsx)(p.Z,Object.assign({placement:a,popoverContent:(0,s.jsx)("div",{className:g.tooltipContainer,"data-disable-max-width":z,children:j}),trigger:l,triggerRef:f,arrowContainerClassName:g.tooltipArrowContainer,arrowElementClassName:g.tooltipArrowElement,hasArrow:!0,fallbackPlacements:c},L,{children:u}))}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/QuestionTooltip.js":((b,m,e)=>{e.d(m,{o:()=>L});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(p),c=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),k=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),O=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const S={S:"s",Xs:"xs"},A={[S.Xs]:16,[S.S]:24},W={Hover:"hover",Click:"click"},K={[W.Hover]:O.tr.HoverAndFocusVisible,[W.Click]:O.tr.ClickAndFocusVisible};var R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(R),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(U),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),x=e.n(P),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=e.n(h),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=e.n(I),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),j=e.n(_),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),a={};a.styleTagTransform=j(),a.setAttributes=g(),a.insert=x().bind(null,"head"),a.domAPI=w(),a.insertStyleElement=T();var u=N()(l.A,a);const f=l.A&&l.A.locals?l.A.locals:void 0;var z=function(F,D){var V={};for(var H in F)Object.prototype.hasOwnProperty.call(F,H)&&D.indexOf(H)<0&&(V[H]=F[H]);if(F!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,H=Object.getOwnPropertySymbols(F);C<H.length;C++)D.indexOf(H[C])<0&&Object.prototype.propertyIsEnumerable.call(F,H[C])&&(V[H[C]]=F[H[C]]);return V};function L(F){var{size:D=S.Xs,trigger:V=W.Hover,tooltipClassname:H,className:C,open:ne,onOpenChange:X,tabIndex:E=0,triggerSupportProps:Y={}}=F,B=z(F,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[t,n]=(0,c.iC)(ne,!1,X);return(0,s.jsx)(k.m,Object.assign({},B,{className:H,open:t,onOpenChange:n,trigger:K[V],children:({getReferenceProps:y,ref:i})=>(0,s.jsx)("span",Object.assign({},y(),(0,d.z7)(Y),{ref:i,"data-size":D,"data-opened":t,"data-trigger":V,className:r()(f.questionTooltip,C),role:"button",tabIndex:E,children:(0,s.jsx)(o.A,{size:A[D]})}))}))}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js":((b,m,e)=>{e.d(m,{m:()=>T});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),r=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const c=[r.El.Top,r.El.Right,r.El.Bottom,r.El.Left];var o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(o),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=e.n(k),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),A=e.n(S),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),K=e.n(W),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(R),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),w=e.n(U),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),x={};x.styleTagTransform=w(),x.setAttributes=K(),x.insert=A().bind(null,"head"),x.domAPI=O(),x.insertStyleElement=N();var h=d()(P.A,x);const g=P.A&&P.A.locals?P.A.locals:void 0;var I=function(_,j){var l={};for(var a in _)Object.prototype.hasOwnProperty.call(_,a)&&j.indexOf(a)<0&&(l[a]=_[a]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(_);u<a.length;u++)j.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(_,a[u])&&(l[a[u]]=_[a[u]]);return l};function T(_){var{tip:j,trigger:l="hoverAndFocusVisible",placement:a="top",children:u,triggerRef:f,disableMaxWidth:z=!1}=_,L=I(_,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!u&&!f?null:(0,s.jsx)(p.Z,Object.assign({placement:a,popoverContent:(0,s.jsx)("div",{className:g.tooltipContainer,"data-disable-max-width":z,children:j}),trigger:l,triggerRef:f,arrowContainerClassName:g.tooltipArrowContainer,arrowElementClassName:g.tooltipArrowElement,hasArrow:!0,fallbackPlacements:c},L,{children:u}))}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/WithTooltip/WithTooltip.js":((b,m,e)=>{e.d(m,{k:()=>r});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function r({tooltip:c,children:o}){return c?(0,s.jsx)(p.m,Object.assign({},c,{children:o})):(0,s.jsx)(s.Fragment,{children:o})}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((b,m,e)=>{e.d(m,{m:()=>B});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(p),c=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),o=e.n(c),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),O=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const S=t=>t?t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth:!1,A=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],W="...",K=({text:t,element:n,truncatedElement:y})=>{if(n&&y&&S(n)){const i=n.scrollWidth/t.length;let v=t;for(const{potentialDelimiterWidth:Q,leftHalfDelta:q,rightHalfDelta:J}of A){const $=Math.floor((n.offsetWidth/i-Q)/2),te=t.slice(0,$-q),G=t.slice(t.length-$+J,t.length);if(v=`${te}${W}${G}`,y.innerHTML=v,y.scrollWidth<=n.offsetWidth-1)break}return v}return t};var R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(R),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(U),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),x=e.n(P),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=e.n(h),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=e.n(I),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),j=e.n(_),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),a={};a.styleTagTransform=j(),a.setAttributes=g(),a.insert=x().bind(null,"head"),a.domAPI=w(),a.insertStyleElement=T();var u=N()(l.A,a);const f=l.A&&l.A.locals?l.A.locals:void 0;var z=function(t,n){var y={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(y[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,i=Object.getOwnPropertySymbols(t);v<i.length;v++)n.indexOf(i[v])<0&&Object.prototype.propertyIsEnumerable.call(t,i[v])&&(y[i[v]]=t[i[v]]);return y};function L(t){var{text:n,className:y,hideTooltip:i,placement:v}=t,Q=z(t,["text","className","hideTooltip","placement"]);const[q,J]=(0,d.useState)(!1),[$,te]=(0,d.useState)(n),G=(0,d.useRef)(null),re=(0,d.useRef)(null);(0,d.useEffect)(()=>{const oe=o()(()=>{te(K({element:G.current,truncatedElement:re.current,text:n})),J(S(G.current))},50);oe();const de=new ResizeObserver(oe);return G.current&&de.observe(G.current),()=>{de.disconnect()}},[q,n,i]);const se=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{ref:G,className:f.fullText,children:n}),(0,s.jsx)("span",{ref:re,className:f.truncatedText,"data-test-id":"truncated-text",children:$})]});return(0,s.jsx)("span",Object.assign({className:r()(f.wrapper,y)},(0,O.z7)(Q),{children:q&&!i?(0,s.jsx)(k.m,{tip:n,placement:v,hoverDelayOpen:500,triggerClassName:f.textContainer,children:se}):se}))}var F=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),D=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),V={};V.styleTagTransform=j(),V.setAttributes=g(),V.insert=x().bind(null,"head"),V.domAPI=w(),V.insertStyleElement=T();var H=N()(D.A,V);const C=D.A&&D.A.locals?D.A.locals:void 0;var ne=function(t,n){var y={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(y[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,i=Object.getOwnPropertySymbols(t);v<i.length;v++)n.indexOf(i[v])<0&&Object.prototype.propertyIsEnumerable.call(t,i[v])&&(y[i[v]]=t[i[v]]);return y};function X(t){var{text:n,className:y,hideTooltip:i,maxLines:v=1,placement:Q}=t,q=ne(t,["text","className","hideTooltip","maxLines","placement"]);const J=(0,d.useRef)(null),[$,te]=(0,d.useState)(!1),G=(0,d.useCallback)(()=>{te(S(J.current))},[]);(0,F.N)(()=>{J.current&&G()},[n,G]),(0,d.useEffect)(()=>{const se=o()(()=>{G()},50),oe=new ResizeObserver(se);return J.current&&(G(),oe.observe(J.current)),()=>{oe.disconnect()}},[$,i,G]);const re=(0,s.jsx)("span",Object.assign({ref:J,className:r()(v>1?C.text2AndMoreLines:C.text1Line,y,{[C.ellipsis]:!J.current||$}),style:{"--max-lines":v}},(0,O.z7)(q),{children:n}));return $&&!i?(0,s.jsx)(k.m,{tip:n,placement:Q,hoverDelayOpen:500,triggerClassName:C.tooltipTrigger,children:re}):re}const E={Middle:"middle",End:"end"};var Y=function(t,n){var y={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(y[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,i=Object.getOwnPropertySymbols(t);v<i.length;v++)n.indexOf(i[v])<0&&Object.prototype.propertyIsEnumerable.call(t,i[v])&&(y[i[v]]=t[i[v]]);return y};function B(t){var{variant:n=E.End}=t,y=Y(t,["variant"]);switch(n){case E.Middle:return(0,s.jsx)(L,Object.assign({},y));case E.End:default:return(0,s.jsx)(X,Object.assign({},y))}}}),"./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useDynamicList.js":((b,m,e)=>{e.d(m,{n:()=>c});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),r=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function c({parentContainerRef:o,resizingContainerRef:d=o,items:k,maxVisibleItems:O=1/0}){const S=h=>Math.min(O,h),[A,W]=(0,s.useState)(S(k.length)),[K,R]=(0,s.useState)(1/0),N=(0,s.useRef)(K),U=h=>{W(typeof h=="number"?S(h):g=>h(S(g)))},w=(0,p.A)(()=>{const h=o.current;h&&h.scrollWidth-h.offsetWidth>0&&k[A-1]&&U(I=>I-1)}),P=(0,p.A)(()=>{k[A]&&U(g=>g+1)}),x=(0,p.A)(({changedWidth:h,initialWidth:g})=>{h>g?A<O&&P():h<g&&w()});return(0,s.useEffect)(()=>{const h=()=>{w(),o.current&&R(o.current.scrollWidth)};return document.fonts.addEventListener("loadingdone",h),()=>document.fonts.removeEventListener("loadingdone",h)},[o,w]),(0,s.useEffect)(()=>{const h=d.current;if(h){const g=new ResizeObserver(I=>I.forEach(T=>{if(T.target===h){const[{inlineSize:_}]=T.contentBoxSize;R(Math.floor(_))}}));return g.observe(h),()=>g.disconnect()}},[d]),(0,r.N)(()=>{o.current&&x({initialWidth:o.current.scrollWidth,changedWidth:N.current})},[k,o,x]),(0,r.N)(()=>{x({initialWidth:N.current,changedWidth:K}),N.current=K},[K,x]),(0,r.N)(()=>{w()},[w,A]),{visibleItems:k.slice(0,A),hiddenItems:k.slice(A)}}}),"./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js":((b,m,e)=>{e.d(m,{A:()=>r});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function r(c){const o=(0,s.useRef)(null);return(0,p.N)(()=>{o.current=c}),(0,s.useCallback)((...d)=>{const k=o.current;return k===null&&console.warn("The event handler cannot be called during render"),k==null?void 0:k(...d)},[])}}),"./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js":((b,m,e)=>{e.d(m,{I:()=>p});var s=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function p({value:r,onChange:c,defaultValue:o}){return(0,s.iC)(r,o,d=>{const k=typeof d=="function"?d(r):d;c==null||c(k)})}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((b,m,e)=>{e.d(m,{A:()=>d});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),o=c()(p());o.push([b.id,`.avatar--YNdDD{
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
}`,""]),o.locals={avatar:"avatar--YNdDD",image:"image--mirqR",indicatorWrapper:"indicatorWrapper--Hh27C"};const d=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.3_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/styles.module.css":((b,m,e)=>{e.d(m,{A:()=>d});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),o=c()(p());o.push([b.id,`.decor--pyZKn{
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
}`,""]),o.locals={decor:"decor--pyZKn",icon:"icon--Kt00e"};const d=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.33_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css":((b,m,e)=>{e.d(m,{A:()=>d});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),o=c()(p());o.push([b.id,`.infoBlockFooter--xRsKy{
  gap:var(--space-info-block-footer-gap, 8px);
  display:flex;
  align-items:center;
}`,""]),o.locals={infoBlockFooter:"infoBlockFooter--xRsKy"};const d=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.33_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css":((b,m,e)=>{e.d(m,{A:()=>d});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),o=c()(p());o.push([b.id,`.contentLayout--hjKkW{
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
}`,""]),o.locals={contentLayout:"contentLayout--hjKkW",textWrap:"textWrap--JHeVv",footer:"footer--_ZtsA",title:"title--Xblzh",description:"description--l_7NF",infoBlock:"infoBlock--yTowJ"};const d=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.2_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css":((b,m,e)=>{e.d(m,{A:()=>d});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),o=c()(p());o.push([b.id,`.skeleton--VMjrg{
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
}`,""]),o.locals={skeleton:"skeleton--VMjrg",loading:"loading--g2Bh0"};const d=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.8.1_react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((b,m,e)=>{e.d(m,{A:()=>d});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),o=c()(p());o.push([b.id,`.container--r6DW8{
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
}`,""]),o.locals={container:"container--r6DW8",indicator:"indicator--j3nCt"};const d=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((b,m,e)=>{e.d(m,{A:()=>d});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),o=c()(p());o.push([b.id,`.tooltipContainer--trugl{
  padding:var(--space-tooltip-padding-single, 16px);
  border-radius:var(--radius-tooltip-container, 24px);
  min-width:var(--size-tooltip-container-min-width, 60px);
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
.tooltipContainer--trugl[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--kKMnt{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 24px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 24px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--gHa3m{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),o.locals={tooltipContainer:"tooltipContainer--trugl",tooltipArrowContainer:"tooltipArrowContainer--kKMnt",tooltipArrowElement:"tooltipArrowElement--gHa3m"};const d=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css":((b,m,e)=>{e.d(m,{A:()=>d});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),o=c()(p());o.push([b.id,`.questionTooltip--h1kEX{
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
}`,""]),o.locals={questionTooltip:"questionTooltip--h1kEX"};const d=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((b,m,e)=>{e.d(m,{A:()=>d});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),o=c()(p());o.push([b.id,`.tooltipContainer--CVVp7{
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
}`,""]),o.locals={tooltipContainer:"tooltipContainer--CVVp7",tooltipArrowContainer:"tooltipArrowContainer--o1uBX",tooltipArrowElement:"tooltipArrowElement--hBQpg"};const d=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((b,m,e)=>{e.d(m,{A:()=>d});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),o=c()(p());o.push([b.id,`.text1Line--HSvW2{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--iIP1I{
  text-overflow:ellipsis;
}

.text2AndMoreLines--wWakd{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--qFRDQ{
  display:grid;
}`,""]),o.locals={text1Line:"text1Line--HSvW2",ellipsis:"ellipsis--iIP1I",text2AndMoreLines:"text2AndMoreLines--wWakd",tooltipTrigger:"tooltipTrigger--qFRDQ"};const d=o}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((b,m,e)=>{e.d(m,{A:()=>d});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),c=e.n(r),o=c()(p());o.push([b.id,`.wrapper--VcndZ{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--KoQ_g{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--NMKzz{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--Ya_HS{
  display:inline-flex;
}`,""]),o.locals={wrapper:"wrapper--VcndZ",truncatedText:"truncatedText--KoQ_g",fullText:"fullText--NMKzz",textContainer:"textContainer--Ya_HS"};const d=o})}]);})();
