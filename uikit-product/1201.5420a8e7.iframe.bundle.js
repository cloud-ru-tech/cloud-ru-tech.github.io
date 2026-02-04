(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[1201],{"./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/Avatar.js":((H,z,e)=>{"use strict";e.d(z,{e:()=>W});var i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),T=e.n(j),k=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const D={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},ne={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l"};var de=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),re=e.n(de),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),ie=e.n(Z),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),O=e.n(b),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),c=e.n(E),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(y),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),fe=e.n(te),oe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.8.1_react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css"),ce={};ce.styleTagTransform=fe(),ce.setAttributes=c(),ce.insert=O().bind(null,"head"),ce.domAPI=ie(),ce.insertStyleElement=B();var A=re()(oe.A,ce);const U=oe.A&&oe.A.locals?oe.A.locals:void 0;var q=function(R,Y){var K={};for(var P in R)Object.prototype.hasOwnProperty.call(R,P)&&Y.indexOf(P)<0&&(K[P]=R[P]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var N=0,P=Object.getOwnPropertySymbols(R);N<P.length;N++)Y.indexOf(P[N])<0&&Object.prototype.propertyIsEnumerable.call(R,P[N])&&(K[P[N]]=R[P[N]]);return K};function ue(R){var{size:Y=ne.M,appearance:K=D.Primary,className:P}=R,N=q(R,["size","appearance","className"]);return(0,i.jsx)("div",Object.assign({className:T()(U.container,P)},(0,_.z7)(N),{"data-size":Y,children:(0,i.jsx)("div",{className:U.indicator,"data-appearance":K})}))}const le={Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Neutral:"neutral"},ee={Xxs:"xxs",Xs:"xs",S:"s",M:"m",L:"l",Xl:"xl",Xxl:"xxl"},F={Round:"round",Square:"square"};var d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css"),S={};S.styleTagTransform=fe(),S.setAttributes=c(),S.insert=O().bind(null,"head"),S.domAPI=ie(),S.insertStyleElement=B();var X=re()(d.A,S);const G=d.A&&d.A.locals?d.A.locals:void 0,$=" ",J=(R,Y)=>{var K;const P=R.replace(/[^a-zа-яё\d\s]/gi,"").trim();if(!P||P.length<Y)return P.toUpperCase();const N=P.split($);let _e=P;if(N.length>1){const V=N[0].charAt(0),ae=(K=N[N.length-1])===null||K===void 0?void 0:K.charAt(0);_e=`${V}${ae}`.toUpperCase()}return _e.slice(0,Y).toUpperCase()};var L=function(R,Y){var K={};for(var P in R)Object.prototype.hasOwnProperty.call(R,P)&&Y.indexOf(P)<0&&(K[P]=R[P]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var N=0,P=Object.getOwnPropertySymbols(R);N<P.length;N++)Y.indexOf(P[N])<0&&Object.prototype.propertyIsEnumerable.call(R,P[N])&&(K[P[N]]=R[P[N]]);return K};const I={[ee.Xxs]:"xxs",[ee.Xs]:"xs",[ee.S]:"xs",[ee.M]:"m",[ee.L]:"m",[ee.Xl]:"l",[ee.Xxl]:"l"};function W(R){var{name:Y,appearance:K=le.Red,size:P=ee.S,shape:N=F.Round,indicator:_e,showTwoSymbols:V,src:ae,className:pe}=R,he=L(R,["name","appearance","size","shape","indicator","showTwoSymbols","src","className"]);const[ve,je]=(0,k.useState)(!1),ye=P!==ee.Xxs&&V?2:1;return(0,k.useEffect)(()=>{je(!1)},[ae]),(0,i.jsxs)("div",Object.assign({className:T()(G.avatar,pe)},(0,_.z7)(he),{"data-size":P,"data-appearance":K,"data-shape":N,children:[ae&&!ve?(0,i.jsx)("img",{"data-test-id":"image",className:G.image,src:ae,onError:()=>je(!0),alt:""}):(0,i.jsx)("div",{"data-test-id":"abbreviation",children:J(Y,ye)}),_e&&(0,i.jsx)("div",{className:G.indicatorWrapper,children:(0,i.jsx)(ue,{"data-test-id":"indicator",appearance:_e,size:I[P]})})]}))}}),"./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonElevated/ButtonElevated.js":((H,z,e)=>{"use strict";e.d(z,{$:()=>ee});var i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),T=e.n(j),k=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),D=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),ne=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js"),de=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js");const re={Xs:"xs",S:"s",M:"m",L:"l"};var Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ie=e.n(Z),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=e.n(b),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),c=e.n(E),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=e.n(y),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),fe=e.n(te),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),ce=e.n(oe),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonElevated/styles.module.css"),U={};U.styleTagTransform=ce(),U.setAttributes=B(),U.insert=c().bind(null,"head"),U.domAPI=O(),U.insertStyleElement=fe();var q=ie()(A.A,U);const ue=A.A&&A.A.locals?A.A.locals:void 0;var le=function(F,d){var S={};for(var X in F)Object.prototype.hasOwnProperty.call(F,X)&&d.indexOf(X)<0&&(S[X]=F[X]);if(F!=null&&typeof Object.getOwnPropertySymbols=="function")for(var G=0,X=Object.getOwnPropertySymbols(F);G<X.length;G++)d.indexOf(X[G])<0&&Object.prototype.propertyIsEnumerable.call(F,X[G])&&(S[X[G]]=F[X[G]]);return S};const ee=(0,k.forwardRef)((F,d)=>{var{className:S,size:X=re.S,target:G=D.Qn.Blank,type:$=D.dk.Button,tabIndex:J}=F,L=le(F,["className","size","target","type","tabIndex"]);return(0,i.jsx)(ne.A,Object.assign({},(0,_.z7)(L),(0,de.F)(L),{className:T()(ue.button,S),iconClassName:ue.icon,labelClassName:ue.label,size:X,target:G,type:$,tabIndex:J,ref:d}))})}),"./node_modules/.pnpm/@snack-uikit+chips@0.28.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/chips/dist/esm/components/ChipToggle/ChipToggle.js":((H,z,e)=>{"use strict";e.d(z,{Z:()=>G});var i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),T=e.n(j),k=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js"),_=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),D=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const ne={Xs:"xs",S:"s",M:"m",L:"l"},de={Xxs:"xxs",Xs:"xs"},re={LabelOnly:"label-only",IconBefore:"icon-before"},Z={icon:"chip-assist__icon",spinner:"chip-assist__spinner",label:"chip-assist__label"},ie={icon:"chip-choice__icon",label:"chip-choice__label",spinner:"chip-choice__spinner",value:"chip-choice__value",clearButton:"chip-choice__clear-button",droplist:"chip-choice__droplist",footer:"chip-choice__footer",cancelButton:"chip-choice__cancel-button",approveButton:"chip-choice__approve-button"},b={clearButton:"chip-choice-row__clear-button",addButton:"chip-choice-row__add-button",addButtonTooltip:"chip-choice-row__add-button-tooltip",addButtonOption:"chip-choice-row__add-button-option"},O={input:"chip-toggle__input",icon:"chip-toggle__icon",spinner:"chip-toggle__spinner",label:"chip-toggle__label"},E="\u2014";var c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(c),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),te=e.n(B),fe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),oe=e.n(fe),ce=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=e.n(ce),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),q=e.n(U),ue=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),le=e.n(ue),ee=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+chips@0.28.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/chips/dist/esm/components/ChipToggle/styles.module.css"),F={};F.styleTagTransform=le(),F.setAttributes=A(),F.insert=oe().bind(null,"head"),F.domAPI=te(),F.insertStyleElement=q();var d=y()(ee.A,F);const S=ee.A&&ee.A.locals?ee.A.locals:void 0;var X=function($,J){var L={};for(var I in $)Object.prototype.hasOwnProperty.call($,I)&&J.indexOf(I)<0&&(L[I]=$[I]);if($!=null&&typeof Object.getOwnPropertySymbols=="function")for(var W=0,I=Object.getOwnPropertySymbols($);W<I.length;W++)J.indexOf(I[W])<0&&Object.prototype.propertyIsEnumerable.call($,I[W])&&(L[I[W]]=$[I[W]]);return L};function G($){var{icon:J,size:L=ne.S,label:I,checked:W,disabled:R,loading:Y,onChange:K,className:P,tabIndex:N=0,truncateVariant:_e="middle"}=$,V=X($,["icon","size","label","checked","disabled","loading","onChange","className","tabIndex","truncateVariant"]);const ae=J&&L!==ne.Xs?re.IconBefore:re.LabelOnly,pe=L===ne.Xs?"xs":"s",he=ve=>{R||Y||K==null||K(!W,ve)};return(0,i.jsxs)("label",Object.assign({},(0,D.z7)(V),{"data-size":L,"data-loading":Y||void 0,"data-disabled":!Y&&R||void 0,"data-variant":ae,"data-checked":W||void 0,className:T()(S.toggleChip,P),children:[(0,i.jsx)("input",{"data-test-id":O.input,type:"checkbox",checked:W,onChange:he,disabled:!Y&&R,tabIndex:R?-1:N,className:S.toggleChipInput}),(0,i.jsxs)("span",{className:S.toggleChipContent,children:[ae===re.IconBefore&&!Y&&(0,i.jsx)("span",{className:S.icon,"data-test-id":O.icon,children:J}),Y&&(0,i.jsx)("span",{className:S.spinner,"data-test-id":O.spinner,children:(0,i.jsx)(k.b,{size:pe})}),(0,i.jsx)("span",{className:T()(S.labelLayout,S.label),"data-test-id":O.label,children:(0,i.jsx)(_.m,{text:I,variant:_e})})]})]}))}}),"./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/components/DrawerCustom/DrawerCustom.js":((H,z,e)=>{"use strict";e.d(z,{R:()=>v});var i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/rc-drawer@6.4.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-drawer/assets/index.css"),T=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),k=e.n(T),_=e("./node_modules/.pnpm/rc-drawer@6.4.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-drawer/es/index.js"),D=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useModalOpenState.js"),ne=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const de={S:"s",M:"m",L:"l"},re=Object.values(de),Z={Regular:"regular",Soft:"soft"},ie={Right:"right",Left:"left"},b=24,O={closeButton:"drawer__close-button",header:"drawer__header",title:"drawer__title",tooltip:"drawer__title-tooltip",subtitle:"drawer__subtitle",image:"drawer__image",content:"drawer__body",footer:"drawer__footer",footerActions:"drawer__footer-actions",approveButton:"drawer__approve-button",cancelButton:"drawer__cancel-button",additionalButton:"drawer__additional-button"};var E=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(c),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),te=e.n(B),fe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),oe=e.n(fe),ce=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=e.n(ce),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),q=e.n(U),ue=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),le=e.n(ue),ee=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/ButtonClose/styles.module.css"),F={};F.styleTagTransform=le(),F.setAttributes=A(),F.insert=oe().bind(null,"head"),F.domAPI=te(),F.insertStyleElement=q();var d=y()(ee.A,F);const S=ee.A&&ee.A.locals?ee.A.locals:void 0;function X({onClick:o}){return(0,i.jsx)("button",{type:"button",className:S.buttonClose,onClick:o,"aria-label":"close drawer","data-test-id":O.closeButton,children:(0,i.jsx)(E.A,{})})}var G=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),$=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),J=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),L=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const I={S:"s",Xs:"xs"},W={[I.Xs]:16,[I.S]:24},R={Hover:"hover",Click:"click"},Y={[R.Hover]:L.tr.HoverAndFocusVisible,[R.Click]:L.tr.ClickAndFocusVisible};var K=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css"),P={};P.styleTagTransform=le(),P.setAttributes=A(),P.insert=oe().bind(null,"head"),P.domAPI=te(),P.insertStyleElement=q();var N=y()(K.A,P);const _e=K.A&&K.A.locals?K.A.locals:void 0;var V=function(o,h){var m={};for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&h.indexOf(l)<0&&(m[l]=o[l]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,l=Object.getOwnPropertySymbols(o);g<l.length;g++)h.indexOf(l[g])<0&&Object.prototype.propertyIsEnumerable.call(o,l[g])&&(m[l[g]]=o[l[g]]);return m};function ae(o){var{size:h=I.Xs,trigger:m=R.Hover,tooltipClassname:l,className:g,open:C,onOpenChange:w,tabIndex:M=0,triggerSupportProps:Q={}}=o,se=V(o,["size","trigger","tooltipClassname","className","open","onOpenChange","tabIndex","triggerSupportProps"]);const[me,ge]=(0,G.iC)(C,!1,w);return(0,i.jsx)(J.m,Object.assign({},se,{className:l,open:me,onOpenChange:ge,trigger:Y[m],children:({getReferenceProps:De,ref:Pe})=>(0,i.jsx)("span",Object.assign({},De(),(0,ne.z7)(Q),{ref:Pe,"data-size":h,"data-opened":me,"data-trigger":m,className:k()(_e.questionTooltip,g),role:"button",tabIndex:M,children:(0,i.jsx)($.A,{size:W[h]})}))}))}var pe=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.11_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),he=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/Header/styles.module.css"),ve={};ve.styleTagTransform=le(),ve.setAttributes=A(),ve.insert=oe().bind(null,"head"),ve.domAPI=te(),ve.insertStyleElement=q();var je=y()(he.A,ve);const ye=he.A&&he.A.locals?he.A.locals:void 0;var Ce=function(o,h){var m={};for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&h.indexOf(l)<0&&(m[l]=o[l]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,l=Object.getOwnPropertySymbols(o);g<l.length;g++)h.indexOf(l[g])<0&&Object.prototype.propertyIsEnumerable.call(o,l[g])&&(m[l[g]]=o[l[g]]);return m};function Ee(o){var{title:h,titleTooltip:m,subtitle:l,image:g,className:C}=o,w=Ce(o,["title","titleTooltip","subtitle","image","className"]);return(0,i.jsxs)("div",Object.assign({className:k()(ye.drawerHeader,C)},(0,ne.z7)(w),{children:[g&&(0,i.jsx)("img",{src:g.src,alt:g.alt,className:ye.image,"data-test-id":O.image}),(0,i.jsxs)("div",{className:ye.headlineLayout,children:[(0,i.jsxs)("div",{className:ye.headline,children:[(0,i.jsx)(pe.o.SansHeadlineS,{className:ye.title,"data-test-id":O.title,children:h}),m&&(0,i.jsx)(ae,{tip:m,size:"s","data-test-id":O.tooltip})]}),l&&(0,i.jsx)(pe.o.SansBodyM,{className:ye.subtitle,"data-test-id":O.subtitle,children:l})]})]}))}var Le=e("./node_modules/.pnpm/@snack-uikit+scroll@0.10.5_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),ke=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/Body/styles.module.css"),Oe={};Oe.styleTagTransform=le(),Oe.setAttributes=A(),Oe.insert=oe().bind(null,"head"),Oe.domAPI=te(),Oe.insertStyleElement=q();var Ke=y()(ke.A,Oe);const ze=ke.A&&ke.A.locals?ke.A.locals:void 0;var Ne=function(o,h){var m={};for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&h.indexOf(l)<0&&(m[l]=o[l]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,l=Object.getOwnPropertySymbols(o);g<l.length;g++)h.indexOf(l[g])<0&&Object.prototype.propertyIsEnumerable.call(o,l[g])&&(m[l[g]]=o[l[g]]);return m};function r(o){var{content:h,className:m}=o,l=Ne(o,["content","className"]);return(0,i.jsx)(Le.O,Object.assign({size:"m",barHideStrategy:"never",className:k()(ze.drawerBody,m)},(0,ne.z7)(l),{children:h}))}var x=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/Footer/styles.module.css"),f={};f.styleTagTransform=le(),f.setAttributes=A(),f.insert=oe().bind(null,"head"),f.domAPI=te(),f.insertStyleElement=q();var s=y()(x.A,f);const u=x.A&&x.A.locals?x.A.locals:void 0;var be=function(o,h){var m={};for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&h.indexOf(l)<0&&(m[l]=o[l]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,l=Object.getOwnPropertySymbols(o);g<l.length;g++)h.indexOf(l[g])<0&&Object.prototype.propertyIsEnumerable.call(o,l[g])&&(m[l[g]]=o[l[g]]);return m};function Fe(o){var{actions:h,className:m}=o,l=be(o,["actions","className"]);return(0,i.jsx)("div",Object.assign({className:k()(u.footer,m)},(0,ne.z7)(l),{children:(0,i.jsx)("div",{className:u.footerActions,"data-test-id":O.footerActions,children:h})}))}var xe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/components/DrawerCustom/motion.css"),Se={};Se.styleTagTransform=le(),Se.setAttributes=A(),Se.insert=oe().bind(null,"head"),Se.domAPI=te(),Se.insertStyleElement=q();var we=y()(xe.A,Se);const Ie=xe.A&&xe.A.locals?xe.A.locals:void 0,Ue={maskMotion:{motionAppear:!0,motionName:"maskMotion"},motion:o=>({motionAppear:!0,motionName:`panelMotion-${o}`})};var Ae=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/components/DrawerCustom/styles.module.css"),a={};a.styleTagTransform=le(),a.setAttributes=A(),a.insert=oe().bind(null,"head"),a.domAPI=te(),a.insertStyleElement=q();var t=y()(Ae.A,a);const n=Ae.A&&Ae.A.locals?Ae.A.locals:void 0;var p=function(o,h){var m={};for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&h.indexOf(l)<0&&(m[l]=o[l]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,l=Object.getOwnPropertySymbols(o);g<l.length;g++)h.indexOf(l[g])<0&&Object.prototype.propertyIsEnumerable.call(o,l[g])&&(m[l[g]]=o[l[g]]);return m};function v(o){var{open:h,mode:m=Z.Regular,position:l=ie.Right,onClose:g,rootClassName:C,className:w,size:M=de.S,push:Q,container:se,children:me,nestedDrawer:ge,closeOnPopstate:De}=o,Pe=p(o,["open","mode","position","onClose","rootClassName","className","size","push","container","children","nestedDrawer","closeOnPopstate"]);const Re=m===Z.Regular,Be=typeof M=="string"&&re.includes(M);return(0,D.G)(h,g,{closeOnPopstate:De}),(0,i.jsxs)(_.A,Object.assign({mask:Re,maskClosable:Re,maskClassName:n.mask,keyboard:Re,width:Be?"null":M,open:h,placement:l,destroyOnClose:!0,push:Q,onClose:g,getContainer:se,className:k()(n.drawer,w),rootClassName:k()(n.drawerRoot,C)},(0,ne.z7)(Pe),{"data-content-wrapper":!0,"data-size":Be?M:void 0,"data-mode":m},Ue,{children:[(0,i.jsx)("div",{className:n.headerElements,children:(0,i.jsx)(X,{onClick:g})}),me,ge]}))}(function(o){o.Header=Ee,o.Body=r,o.Footer=Fe})(v||(v={}))}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js":((H,z,e)=>{"use strict";e.d(z,{A:()=>ie});var i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=function(b,O){var E={};for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&O.indexOf(c)<0&&(E[c]=b[c]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,c=Object.getOwnPropertySymbols(b);y<c.length;y++)O.indexOf(c[y])<0&&Object.prototype.propertyIsEnumerable.call(b,c[y])&&(E[c[y]]=b[c[y]]);return E};const _=j.forwardRef((b,O)=>{var{size:E=24}=b,c=T(b,["size"]);c.width=void 0,c.height=void 0;const y="-question-s";return typeof E=="number"&&(c.style||(c.style={}),c.style.width=E+"px",c.style.height=E+"px"),(0,i.jsx)("svg",Object.assign({ref:O,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+y},c,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+y.substring(1)})}))});var D=function(b,O){var E={};for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&O.indexOf(c)<0&&(E[c]=b[c]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,c=Object.getOwnPropertySymbols(b);y<c.length;y++)O.indexOf(c[y])<0&&Object.prototype.propertyIsEnumerable.call(b,c[y])&&(E[c[y]]=b[c[y]]);return E};const de=j.forwardRef((b,O)=>{var{size:E=24}=b,c=D(b,["size"]);c.width=void 0,c.height=void 0;const y="-question-xs";return typeof E=="number"&&(c.style||(c.style={}),c.style.width=E+"px",c.style.height=E+"px"),(0,i.jsx)("svg",Object.assign({ref:O,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+y},c,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+y.substring(1)})}))});var re=function(b,O){var E={};for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&O.indexOf(c)<0&&(E[c]=b[c]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,c=Object.getOwnPropertySymbols(b);y<c.length;y++)O.indexOf(c[y])<0&&Object.prototype.propertyIsEnumerable.call(b,c[y])&&(E[c[y]]=b[c[y]]);return E};const ie=(0,j.forwardRef)((b,O)=>{var{size:E=24}=b,c=re(b,["size"]);return Number(E)>=20?(0,i.jsx)(_,Object.assign({ref:O,size:E},c)):(0,i.jsx)(de,Object.assign({ref:O,size:E},c))})}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js":((H,z,e)=>{"use strict";e.d(z,{A:()=>ie});var i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=function(b,O){var E={};for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&O.indexOf(c)<0&&(E[c]=b[c]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,c=Object.getOwnPropertySymbols(b);y<c.length;y++)O.indexOf(c[y])<0&&Object.prototype.propertyIsEnumerable.call(b,c[y])&&(E[c[y]]=b[c[y]]);return E};const _=j.forwardRef((b,O)=>{var{size:E=24}=b,c=T(b,["size"]);c.width=void 0,c.height=void 0;const y="-search-s";return typeof E=="number"&&(c.style||(c.style={}),c.style.width=E+"px",c.style.height=E+"px"),(0,i.jsx)("svg",Object.assign({ref:O,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+y},c,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+y.substring(1)})}))});var D=function(b,O){var E={};for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&O.indexOf(c)<0&&(E[c]=b[c]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,c=Object.getOwnPropertySymbols(b);y<c.length;y++)O.indexOf(c[y])<0&&Object.prototype.propertyIsEnumerable.call(b,c[y])&&(E[c[y]]=b[c[y]]);return E};const de=j.forwardRef((b,O)=>{var{size:E=24}=b,c=D(b,["size"]);c.width=void 0,c.height=void 0;const y="-search-xs";return typeof E=="number"&&(c.style||(c.style={}),c.style.width=E+"px",c.style.height=E+"px"),(0,i.jsx)("svg",Object.assign({ref:O,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+y},c,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+y.substring(1)})}))});var re=function(b,O){var E={};for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&O.indexOf(c)<0&&(E[c]=b[c]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,c=Object.getOwnPropertySymbols(b);y<c.length;y++)O.indexOf(c[y])<0&&Object.prototype.propertyIsEnumerable.call(b,c[y])&&(E[c[y]]=b[c[y]]);return E};const ie=(0,j.forwardRef)((b,O)=>{var{size:E=24}=b,c=re(b,["size"]);return Number(E)>=20?(0,i.jsx)(_,Object.assign({ref:O,size:E},c)):(0,i.jsx)(de,Object.assign({ref:O,size:E},c))})}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Favorite/Favorite.js":((H,z,e)=>{"use strict";e.d(z,{N:()=>Ne});var i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=function(r,x){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&x.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)x.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(f[s[u]]=r[s[u]]);return f};const _=j.forwardRef((r,x)=>{var{size:f=24}=r,s=T(r,["size"]);s.width=void 0,s.height=void 0;const u="-star-filled-s";return typeof f=="number"&&(s.style||(s.style={}),s.style.width=f+"px",s.style.height=f+"px"),(0,i.jsx)("svg",Object.assign({ref:x,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+u},s,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+u.substring(1)})}))});var D=function(r,x){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&x.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)x.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(f[s[u]]=r[s[u]]);return f};const de=j.forwardRef((r,x)=>{var{size:f=24}=r,s=D(r,["size"]);s.width=void 0,s.height=void 0;const u="-star-filled-xs";return typeof f=="number"&&(s.style||(s.style={}),s.style.width=f+"px",s.style.height=f+"px"),(0,i.jsx)("svg",Object.assign({ref:x,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+u},s,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+u.substring(1)})}))});var re=function(r,x){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&x.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)x.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(f[s[u]]=r[s[u]]);return f};const ie=(0,j.forwardRef)((r,x)=>{var{size:f=24}=r,s=re(r,["size"]);return Number(f)>=20?(0,i.jsx)(_,Object.assign({ref:x,size:f},s)):(0,i.jsx)(de,Object.assign({ref:x,size:f},s))});var b=function(r,x){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&x.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)x.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(f[s[u]]=r[s[u]]);return f};const E=j.forwardRef((r,x)=>{var{size:f=24}=r,s=b(r,["size"]);s.width=void 0,s.height=void 0;const u="-heart-filled-s";return typeof f=="number"&&(s.style||(s.style={}),s.style.width=f+"px",s.style.height=f+"px"),(0,i.jsx)("svg",Object.assign({ref:x,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+u},s,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+u.substring(1)})}))});var c=function(r,x){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&x.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)x.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(f[s[u]]=r[s[u]]);return f};const B=j.forwardRef((r,x)=>{var{size:f=24}=r,s=c(r,["size"]);s.width=void 0,s.height=void 0;const u="-heart-filled-xs";return typeof f=="number"&&(s.style||(s.style={}),s.style.width=f+"px",s.style.height=f+"px"),(0,i.jsx)("svg",Object.assign({ref:x,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+u},s,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+u.substring(1)})}))});var te=function(r,x){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&x.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)x.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(f[s[u]]=r[s[u]]);return f};const oe=(0,j.forwardRef)((r,x)=>{var{size:f=24}=r,s=te(r,["size"]);return Number(f)>=20?(0,i.jsx)(E,Object.assign({ref:x,size:f},s)):(0,i.jsx)(B,Object.assign({ref:x,size:f},s))});var ce=function(r,x){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&x.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)x.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(f[s[u]]=r[s[u]]);return f};const U=j.forwardRef((r,x)=>{var{size:f=24}=r,s=ce(r,["size"]);s.width=void 0,s.height=void 0;const u="-star-s";return typeof f=="number"&&(s.style||(s.style={}),s.style.width=f+"px",s.style.height=f+"px"),(0,i.jsx)("svg",Object.assign({ref:x,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+u},s,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+u.substring(1)})}))});var q=function(r,x){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&x.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)x.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(f[s[u]]=r[s[u]]);return f};const le=j.forwardRef((r,x)=>{var{size:f=24}=r,s=q(r,["size"]);s.width=void 0,s.height=void 0;const u="-star-xs";return typeof f=="number"&&(s.style||(s.style={}),s.style.width=f+"px",s.style.height=f+"px"),(0,i.jsx)("svg",Object.assign({ref:x,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+u},s,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+u.substring(1)})}))});var ee=function(r,x){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&x.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)x.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(f[s[u]]=r[s[u]]);return f};const d=(0,j.forwardRef)((r,x)=>{var{size:f=24}=r,s=ee(r,["size"]);return Number(f)>=20?(0,i.jsx)(U,Object.assign({ref:x,size:f},s)):(0,i.jsx)(le,Object.assign({ref:x,size:f},s))});var S=function(r,x){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&x.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)x.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(f[s[u]]=r[s[u]]);return f};const G=j.forwardRef((r,x)=>{var{size:f=24}=r,s=S(r,["size"]);s.width=void 0,s.height=void 0;const u="-heart-s";return typeof f=="number"&&(s.style||(s.style={}),s.style.width=f+"px",s.style.height=f+"px"),(0,i.jsx)("svg",Object.assign({ref:x,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+u},s,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+u.substring(1)})}))});var $=function(r,x){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&x.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)x.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(f[s[u]]=r[s[u]]);return f};const L=(0,j.forwardRef)((r,x)=>{var{size:f=24}=r,s=$(r,["size"]);return(0,i.jsx)(G,Object.assign({ref:x,size:f},s))});var I=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),W=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),R=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),K=e.n(Y),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),N=e.n(P),_e=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),V=e.n(_e),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),pe=e.n(ae),he=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),ve=e.n(he),je=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),ye=e.n(je),Ce=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Favorite/styles.module.css"),Ee={};Ee.styleTagTransform=ye(),Ee.setAttributes=pe(),Ee.insert=V().bind(null,"head"),Ee.domAPI=N(),Ee.insertStyleElement=ve();var Le=K()(Ce.A,Ee);const ke=Ce.A&&Ce.A.locals?Ce.A.locals:void 0;var Oe=function(r,x){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&x.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)x.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(f[s[u]]=r[s[u]]);return f};const Ke={[I.hZ.Star]:ie,[I.hZ.Heart]:oe},ze={[I.hZ.Star]:d,[I.hZ.Heart]:L};function Ne(r){var{inputRef:x,"data-test-id":f,size:s=I.SK.M,icon:u=I.hZ.Heart,onKeyUp:be}=r,Fe=Oe(r,["inputRef","data-test-id","size","icon","onKeyUp"]);const xe=(0,j.useMemo)(()=>(0,W.J)(s),[s]);return(0,i.jsx)(R.Q,Object.assign({},Fe,{"data-test-id":f,ref:x,size:s,onKeyUp:be,render:function(we){const Ie=we.checked?Ke[u]:ze[u],We=(0,W.V)(Object.assign(Object.assign({},we),{icon:u}));return(0,i.jsx)("div",Object.assign({className:ke.container},We,{children:(0,i.jsx)(Ie,Object.assign({className:ke.icon},We,{size:xe}))}))}}))}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+avatar@0.8.4_react@18.2.0/node_modules/@snack-uikit/avatar/dist/esm/components/styles.module.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.avatar--YNdDD{
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
}`,""]),_.locals={avatar:"avatar--YNdDD",image:"image--mirqR",indicatorWrapper:"indicatorWrapper--Hh27C"};const D=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonElevated/styles.module.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.button--RSP3v[data-size=xs] .icon--xdSf1{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--RSP3v[data-size=xs] .icon--xdSf1 svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--RSP3v[data-size=xs][data-variant=icon-only]{
  border-radius:var(--radius-button-xs, 4px);
  height:var(--size-button-xs, 24px);
  width:var(--size-button-xs, 24px);
}
.button--RSP3v[data-size=s] .icon--xdSf1{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--RSP3v[data-size=s] .icon--xdSf1 svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--RSP3v[data-size=s][data-variant=icon-only]{
  border-radius:var(--radius-button-s, 4px);
  height:var(--size-button-s, 32px);
  width:var(--size-button-s, 32px);
}
.button--RSP3v[data-size=m] .icon--xdSf1{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--RSP3v[data-size=m] .icon--xdSf1 svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--RSP3v[data-size=m][data-variant=icon-only]{
  border-radius:var(--radius-button-m, 4px);
  height:var(--size-button-m, 40px);
  width:var(--size-button-m, 40px);
}
.button--RSP3v[data-size=l] .icon--xdSf1{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--RSP3v[data-size=l] .icon--xdSf1 svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--RSP3v[data-size=l][data-variant=icon-only]{
  border-radius:var(--radius-button-l, 4px);
  height:var(--size-button-l, 48px);
  width:var(--size-button-l, 48px);
}
.button--RSP3v[data-loading][data-variant=label-only] .icon--xdSf1{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
.button--RSP3v[data-loading][data-variant=label-only] .label--Y4vKE{
  opacity:var(--opacity-a0, 0);
}
.button--RSP3v:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--RSP3v.button--RSP3v{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  box-shadow:var(--box-shadow-elevation-level2, 0px 0px 4px 0px rgba(0, 0, 0, 0.0392156863), 0px 4px 8px 0px rgba(0, 0, 0, 0.0392156863));
}
.button--RSP3v.button--RSP3v .icon--xdSf1{
  color:var(--sys-neutral-text-support, #6d707f);
}
@media (hover: hover){
  .button--RSP3v.button--RSP3v:hover{
    background-color:var(--sys-neutral-background2-level, #ffffff);
    box-shadow:var(--box-shadow-elevation-level3, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 8px 16px 0px rgba(0, 0, 0, 0.0784313725));
  }
  .button--RSP3v.button--RSP3v:hover .icon--xdSf1{
    color:var(--sys-neutral-text-main, #41424e);
  }
}
@media (hover: none) or (hover: hover){
  .button--RSP3v.button--RSP3v:focus-visible{
    background-color:var(--sys-neutral-background2-level, #ffffff);
    box-shadow:var(--box-shadow-elevation-level3, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 8px 16px 0px rgba(0, 0, 0, 0.0784313725));
  }
  .button--RSP3v.button--RSP3v:focus-visible .icon--xdSf1{
    color:var(--sys-neutral-text-main, #41424e);
  }
  .button--RSP3v.button--RSP3v:active{
    background-color:var(--sys-neutral-background, #eeeff3);
    box-shadow:none;
  }
  .button--RSP3v.button--RSP3v:active .icon--xdSf1{
    color:var(--sys-neutral-text-support, #6d707f);
  }
  .button--RSP3v.button--RSP3v:disabled, .button--RSP3v.button--RSP3v[data-disabled]{
    background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
    box-shadow:none;
  }
  .button--RSP3v.button--RSP3v:disabled .icon--xdSf1, .button--RSP3v.button--RSP3v[data-disabled] .icon--xdSf1{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
  .button--RSP3v.button--RSP3v[data-loading]{
    background-color:var(--sys-neutral-background, #eeeff3);
    box-shadow:none;
  }
  .button--RSP3v.button--RSP3v[data-loading] .icon--xdSf1{
    color:var(--sys-neutral-text-main, #41424e);
  }
}`,""]),_.locals={button:"button--RSP3v",icon:"icon--xdSf1",label:"label--Y4vKE"};const D=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+chips@0.28.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/chips/dist/esm/components/ChipToggle/styles.module.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.toggleChipContent--XkL_G{
  cursor:pointer;
  position:relative;
  display:inline-flex;
  align-items:center;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  min-width:var(--dimension-6m, 48px);
  max-width:100%;
  margin:0;
  padding:0;
  text-decoration:none;
  text-transform:none;
  border-style:solid;
  outline:0;
  outline-offset:0;
  justify-content:center;
  color:var(--sys-neutral-text-support, #6d707f);
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.toggleChipContent--XkL_G .spinner--mwMHp{
  display:inline-flex;
}

.toggleChipInput--mzaDG{
  pointer-events:none;
  position:absolute;
  top:0;
  left:0;
  width:0;
  height:0;
  opacity:0;
}
.toggleChipInput--mzaDG:focus-visible + .toggleChipContent--XkL_G{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
  outline-offset:var(--spacing-state-focus-offset, 2px);
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}

.toggleChip--Ep4uY{
  position:relative;
  min-width:0;
  margin:0;
  padding:0;
  border:none;
  outline:0;
  outline-offset:0;
}
.toggleChip--Ep4uY .icon--Tfm6i{
  display:inline-flex;
}
.toggleChip--Ep4uY .icon--Tfm6i svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.toggleChip--Ep4uY .labelLayout--LTeBx{
  display:inline-flex;
  align-items:center;
  min-width:0;
}
.toggleChip--Ep4uY[data-size=xs] .label--EGoCn{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.toggleChip--Ep4uY[data-size=xs] .labelLayout--LTeBx{
  padding-left:var(--space-chips-label-layout-padding-xs, 4px);
  padding-right:var(--space-chips-label-layout-padding-xs, 4px);
}
.toggleChip--Ep4uY[data-size=xs] .toggleChipContent--XkL_G{
  height:var(--size-chips-xs, 24px);
  padding-left:var(--space-chips-container-padding-xs, 3px);
  padding-right:var(--space-chips-container-padding-xs, 3px);
  border-radius:var(--radius-chips-xs, 12px);
  border-width:var(--border-width-chips-single, 1px);
}
.toggleChip--Ep4uY[data-size=s] .label--EGoCn{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.toggleChip--Ep4uY[data-size=s] .labelLayout--LTeBx{
  padding-left:var(--space-chips-label-layout-padding-s, 4px);
  padding-right:var(--space-chips-label-layout-padding-s, 4px);
}
.toggleChip--Ep4uY[data-size=s] .toggleChipContent--XkL_G{
  height:var(--size-chips-s, 32px);
  padding-left:var(--space-chips-container-padding-s, 3px);
  padding-right:var(--space-chips-container-padding-s, 3px);
  border-radius:var(--radius-chips-s, 16px);
  border-width:var(--border-width-chips-single, 1px);
}
.toggleChip--Ep4uY[data-size=m] .label--EGoCn{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.toggleChip--Ep4uY[data-size=m] .labelLayout--LTeBx{
  padding-left:var(--space-chips-label-layout-padding-m, 8px);
  padding-right:var(--space-chips-label-layout-padding-m, 8px);
}
.toggleChip--Ep4uY[data-size=m] .toggleChipContent--XkL_G{
  height:var(--size-chips-m, 40px);
  padding-left:var(--space-chips-container-padding-m, 7px);
  padding-right:var(--space-chips-container-padding-m, 7px);
  border-radius:var(--radius-chips-m, 20px);
  border-width:var(--border-width-chips-single, 1px);
}
.toggleChip--Ep4uY[data-size=l] .label--EGoCn{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.toggleChip--Ep4uY[data-size=l] .labelLayout--LTeBx{
  padding-left:var(--space-chips-label-layout-padding-l, 12px);
  padding-right:var(--space-chips-label-layout-padding-l, 12px);
}
.toggleChip--Ep4uY[data-size=l] .toggleChipContent--XkL_G{
  height:var(--size-chips-l, 48px);
  padding-left:var(--space-chips-container-padding-l, 11px);
  padding-right:var(--space-chips-container-padding-l, 11px);
  border-radius:var(--radius-chips-l, 24px);
  border-width:var(--border-width-chips-single, 1px);
}
.toggleChip--Ep4uY .icon--Tfm6i{
  color:var(--sys-neutral-text-support, #6d707f);
}
.toggleChip--Ep4uY:hover .toggleChipContent--XkL_G{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.toggleChip--Ep4uY:active .toggleChipContent--XkL_G{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.toggleChip--Ep4uY[data-loading] .toggleChipContent--XkL_G{
  cursor:progress;
}
.toggleChip--Ep4uY[data-loading][data-variant=label-only] .label--EGoCn{
  opacity:var(--opacity-a0, 0);
}
.toggleChip--Ep4uY[data-loading][data-variant=label-only] .spinner--mwMHp{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
}
.toggleChip--Ep4uY[data-loading] .toggleChipContent--XkL_G{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.toggleChip--Ep4uY[data-disabled] .toggleChipContent--XkL_G{
  cursor:not-allowed;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.toggleChip--Ep4uY[data-disabled] .icon--Tfm6i{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.toggleChip--Ep4uY[data-checked] .icon--Tfm6i{
  color:var(--sys-primary-text-support, #358561);
}
.toggleChip--Ep4uY[data-checked] .toggleChipContent--XkL_G{
  color:var(--sys-primary-text-support, #358561);
  background-color:var(--sys-primary-decor-default, #caeadb);
  border-color:transparent;
}
.toggleChip--Ep4uY[data-checked]:hover .toggleChipContent--XkL_G{
  color:var(--sys-primary-text-main, #1b5840);
  background-color:var(--sys-primary-decor-hovered, #b3deca);
  border-color:transparent;
}
.toggleChip--Ep4uY[data-checked]:active .toggleChipContent--XkL_G{
  color:var(--sys-primary-text-main, #1b5840);
  background-color:var(--sys-primary-decor-activated, #99d7ba);
  border-color:transparent;
}
.toggleChip--Ep4uY[data-checked] .toggleChipInput--mzaDG:focus-visible + .toggleChipContent--XkL_G{
  color:var(--sys-primary-text-main, #1b5840);
  background-color:var(--sys-primary-decor-hovered, #b3deca);
  border-color:transparent;
}
.toggleChip--Ep4uY[data-checked][data-loading] .toggleChipInput--mzaDG + .toggleChipContent--XkL_G{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.toggleChip--Ep4uY[data-checked][data-disabled] .toggleChipInput--mzaDG + .toggleChipContent--XkL_G{
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:transparent;
}
.toggleChip--Ep4uY[data-checked][data-disabled] .icon--Tfm6i{
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),_.locals={toggleChipContent:"toggleChipContent--XkL_G",spinner:"spinner--mwMHp",toggleChipInput:"toggleChipInput--mzaDG",toggleChip:"toggleChip--Ep4uY",icon:"icon--Tfm6i",labelLayout:"labelLayout--LTeBx",label:"label--EGoCn"};const D=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/components/DrawerCustom/motion.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.maskMotion {
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
`,""]);const D=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/components/DrawerCustom/styles.module.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.drawerRoot--FuSzs{
  z-index:initial !important;
}

div[data-content-wrapper=true]{
  will-change:transform;
  z-index:initial;
  overflow:unset;
  max-width:calc(100% - var(--space-drawer-outside-gap, 24px));
  height:100%;
}
div[data-content-wrapper=true][data-size=s]{
  min-width:var(--size-drawer-min-width-s, 304px);
  width:var(--size-drawer-width-s, 464px);
}
div[data-content-wrapper=true][data-size=m]{
  min-width:var(--size-drawer-min-width-m, 304px);
  width:var(--size-drawer-width-m, 864px);
}
div[data-content-wrapper=true][data-size=l]{
  min-width:var(--size-drawer-min-width-l, 304px);
  width:var(--size-drawer-width-l, 1872px);
}
div[data-content-wrapper=true][data-mode=regular] .drawer--uM3zd{
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
}
div[data-content-wrapper=true][data-mode=soft] .drawer--uM3zd{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}

.drawer--uM3zd{
  overflow:unset !important;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  box-shadow:var(--box-shadow-elevation-level5, 0px 0px 16px 0px rgba(0, 0, 0, 0.0784313725), 0px 24px 16px 0px rgba(0, 0, 0, 0.0784313725));
}

.headerElements--Qcr2S{
  padding-top:var(--space-drawer-header-elements-top, 16px);
  padding-right:var(--space-drawer-header-elements-side, 16px);
  gap:var(--space-drawer-headline-layout-badge-elements-layout-gap, 16px);
  position:absolute;
  top:0;
  right:0;
  display:flex;
  align-items:center;
}

.mask--V2G1W{
  z-index:initial !important;
  background-color:var(--sys-blackout, rgba(0, 0, 0, 0.3215686275));
}`,""]),_.locals={drawerRoot:"drawerRoot--FuSzs",drawer:"drawer--uM3zd",headerElements:"headerElements--Qcr2S",mask:"mask--V2G1W"};const D=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/Body/styles.module.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.drawerBody--QmdJ1{
  padding-left:var(--space-drawer-body-side, 32px);
  padding-right:var(--space-drawer-body-side, 32px);
  flex:1 1 auto;
  box-sizing:border-box;
  min-height:var(--dimension-2m, 16px);
  color:var(--sys-neutral-text-main, #41424e);
}`,""]),_.locals={drawerBody:"drawerBody--QmdJ1"};const D=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/ButtonClose/styles.module.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.buttonClose--dgWBo{
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
.buttonClose--dgWBo:hover, .buttonClose--dgWBo:focus-visible{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.buttonClose--dgWBo:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.buttonClose--dgWBo:active{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.buttonClose--dgWBo svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}`,""]),_.locals={buttonClose:"buttonClose--dgWBo"};const D=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/Footer/styles.module.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.footer--R9s0p{
  padding-top:var(--space-drawer-footer-top, 24px);
  padding-left:var(--space-drawer-footer-side, 32px);
  padding-right:var(--space-drawer-footer-side, 32px);
  padding-bottom:var(--space-drawer-footer-bottom, 32px);
  gap:var(--space-drawer-footer-gap, 16px);
  display:flex;
  flex-direction:column;
}

.footerActions--W4VPw{
  gap:var(--space-drawer-footer-action-row-gap, 8px);
  display:flex;
  flex-direction:row-reverse;
  flex-wrap:wrap-reverse;
  align-items:center;
}`,""]),_.locals={footer:"footer--R9s0p",footerActions:"footerActions--W4VPw"};const D=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+drawer@0.13.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/drawer/dist/esm/helperComponents/Header/styles.module.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.drawerHeader--DktNB{
}

.image--gK5zC{
  height:var(--size-drawer-image, 184px);
  display:block;
  width:100%;
  -o-object-fit:cover;
     object-fit:cover;
}

.headlineLayout--Fn1rQ{
  padding-top:var(--space-drawer-headline-layout-top, 32px);
  padding-left:var(--space-drawer-headline-layout-side-s, 32px);
  padding-right:var(--space-drawer-headline-layout-side-m, 32px);
  padding-bottom:var(--space-drawer-headline-layout-bottom, 24px);
  gap:var(--space-drawer-headline-layout-gap, 8px);
  display:flex;
  flex-direction:column;
}

.headline--P64nn{
  gap:var(--space-drawer-headline-layout-headline, 4px);
  display:flex;
  align-items:center;
}

.title--qDnRu{
  display:grid;
  color:var(--sys-neutral-text-main, #41424e);
}

.subtitle--N15X8{
  color:var(--sys-neutral-text-support, #6d707f);
}`,""]),_.locals={drawerHeader:"drawerHeader--DktNB",image:"image--gK5zC",headlineLayout:"headlineLayout--Fn1rQ",headline:"headline--P64nn",title:"title--qDnRu",subtitle:"subtitle--N15X8"};const D=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+status@0.8.1_react@18.2.0/node_modules/@snack-uikit/status/dist/esm/components/StatusIndicator/styles.module.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.container--r6DW8{
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
}`,""]),_.locals={container:"container--r6DW8",indicator:"indicator--j3nCt"};const D=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Favorite/styles.module.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.container--lHmos{
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.container--lHmos[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
  border-radius:var(--radius-toggles-s-box-checkbox, 6px);
}
.container--lHmos[data-size=m]{
  width:var(--size-toggles-m-container, 24px);
  height:var(--size-toggles-m-container, 24px);
  border-radius:var(--radius-toggles-m-box-checkbox, 8px);
}
.container--lHmos[data-focusvisible=true]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
}
.container--lHmos[data-focusvisible=true][data-size=s]{
  outline-offset:var(--border-width-state-focus-s, 2px);
}
.container--lHmos[data-checked=true]{
  outline-color:var(--sys-available-complementary, #1c1c24);
}

.icon--RAbTu{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.icon--RAbTu:not([data-disabled=true])[data-hover=true]{
  color:var(--sys-neutral-text-support, #6d707f);
}
.icon--RAbTu:not([data-disabled=true])[data-icon=star][data-checked=true]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.icon--RAbTu:not([data-disabled=true])[data-icon=star][data-checked=true][data-focusvisible=true], .icon--RAbTu:not([data-disabled=true])[data-icon=star][data-checked=true][data-hover=true]{
  color:var(--sys-yellow-accent-hovered, #d5a133);
}
.icon--RAbTu:not([data-disabled=true])[data-icon=heart][data-checked=true]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.icon--RAbTu:not([data-disabled=true])[data-icon=heart][data-checked=true][data-focusvisible=true], .icon--RAbTu:not([data-disabled=true])[data-icon=heart][data-checked=true][data-hover=true]{
  color:var(--sys-red-accent-hovered, #bd4844);
}
.icon--RAbTu[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),_.locals={container:"container--lHmos",icon:"icon--RAbTu"};const D=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/QuestionTooltip/styles.module.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.questionTooltip--lWcCV{
  cursor:pointer;
  display:inline-flex;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background:none;
  border:0;
}
.questionTooltip--lWcCV:hover{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.questionTooltip--lWcCV:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.questionTooltip--lWcCV[data-trigger=click][data-opened=true]{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--lWcCV[data-trigger=click]:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--lWcCV[data-trigger=click]:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.questionTooltip--lWcCV[data-trigger=click]:focus-visible{
  color:var(--sys-neutral-text-support, #6d707f);
}
.questionTooltip--lWcCV[data-size=xs] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.questionTooltip--lWcCV[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}`,""]),_.locals={questionTooltip:"questionTooltip--lWcCV"};const D=_}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/rc-drawer@6.4.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-drawer/assets/index.css":((H,z,e)=>{"use strict";e.d(z,{A:()=>D});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(i),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),k=e.n(T),_=k()(j());_.push([H.id,`.rc-drawer {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1050;
  pointer-events: none;
}
.rc-drawer-inline {
  position: absolute;
}
.rc-drawer-mask {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 1050;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: auto;
}
.rc-drawer-content-wrapper {
  position: absolute;
  z-index: 1050;
  overflow: hidden;
  transition: transform 0.3s;
}
.rc-drawer-content-wrapper-hidden {
  display: none;
}
.rc-drawer-left .rc-drawer-content-wrapper {
  top: 0;
  bottom: 0;
  left: 0;
}
.rc-drawer-right .rc-drawer-content-wrapper {
  top: 0;
  right: 0;
  bottom: 0;
}
.rc-drawer-content {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #fff;
  pointer-events: auto;
}
`,""]);const D=_}),"./node_modules/.pnpm/fuse.js@7.1.0/node_modules/fuse.js/dist/fuse.mjs":((H,z,e)=>{"use strict";e.d(z,{A:()=>Ae});function i(a){return Array.isArray?Array.isArray(a):b(a)==="[object Array]"}const j=1/0;function T(a){if(typeof a=="string")return a;let t=a+"";return t=="0"&&1/a==-j?"-0":t}function k(a){return a==null?"":T(a)}function _(a){return typeof a=="string"}function D(a){return typeof a=="number"}function ne(a){return a===!0||a===!1||re(a)&&b(a)=="[object Boolean]"}function de(a){return typeof a=="object"}function re(a){return de(a)&&a!==null}function Z(a){return a!=null}function ie(a){return!a.trim().length}function b(a){return a==null?a===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(a)}const O="Extended search is not available",E="Incorrect 'index' type",c=a=>`Invalid value for key ${a}`,y=a=>`Pattern length exceeds max of ${a}.`,B=a=>`Missing ${a} property in key`,te=a=>`Property 'weight' in key '${a}' must be a positive integer`,fe=Object.prototype.hasOwnProperty;class oe{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(p=>{let v=ce(p);this._keys.push(v),this._keyMap[v.id]=v,n+=v.weight}),this._keys.forEach(p=>{p.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ce(a){let t=null,n=null,p=null,v=1,o=null;if(_(a)||i(a))p=a,t=A(a),n=U(a);else{if(!fe.call(a,"name"))throw new Error(B("name"));const h=a.name;if(p=h,fe.call(a,"weight")&&(v=a.weight,v<=0))throw new Error(te(h));t=A(h),n=U(h),o=a.getFn}return{path:t,id:n,weight:v,src:p,getFn:o}}function A(a){return i(a)?a:a.split(".")}function U(a){return i(a)?a.join("."):a}function q(a,t){let n=[],p=!1;const v=(o,h,m)=>{if(Z(o))if(!h[m])n.push(o);else{let l=h[m];const g=o[l];if(!Z(g))return;if(m===h.length-1&&(_(g)||D(g)||ne(g)))n.push(k(g));else if(i(g)){p=!0;for(let C=0,w=g.length;C<w;C+=1)v(g[C],h,m+1)}else h.length&&v(g,h,m+1)}};return v(a,_(t)?t.split("."):t,0),p?n:n[0]}var d={...{isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(a,t)=>a.score===t.score?a.idx<t.idx?-1:1:a.score<t.score?-1:1},...{includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},...{location:0,threshold:.6,distance:100},...{useExtendedSearch:!1,getFn:q,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const S=/[^ ]+/g;function X(a=1,t=3){const n=new Map,p=Math.pow(10,t);return{get(v){const o=v.match(S).length;if(n.has(o))return n.get(o);const h=1/Math.pow(o,.5*a),m=parseFloat(Math.round(h*p)/p);return n.set(o,m),m},clear(){n.clear()}}}class G{constructor({getFn:t=d.getFn,fieldNormWeight:n=d.fieldNormWeight}={}){this.norm=X(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,p)=>{this._keysMap[n.id]=p})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,_(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();_(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,p=this.size();n<p;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!Z(t)||ie(t))return;let p={v:t,i:n,n:this.norm.get(t)};this.records.push(p)}_addObject(t,n){let p={i:n,$:{}};this.keys.forEach((v,o)=>{let h=v.getFn?v.getFn(t):this.getFn(t,v.path);if(Z(h)){if(i(h)){let m=[];const l=[{nestedArrIndex:-1,value:h}];for(;l.length;){const{nestedArrIndex:g,value:C}=l.pop();if(Z(C))if(_(C)&&!ie(C)){let w={v:C,i:g,n:this.norm.get(C)};m.push(w)}else i(C)&&C.forEach((w,M)=>{l.push({nestedArrIndex:M,value:w})})}p.$[o]=m}else if(_(h)&&!ie(h)){let m={v:h,n:this.norm.get(h)};p.$[o]=m}}}),this.records.push(p)}toJSON(){return{keys:this.keys,records:this.records}}}function $(a,t,{getFn:n=d.getFn,fieldNormWeight:p=d.fieldNormWeight}={}){const v=new G({getFn:n,fieldNormWeight:p});return v.setKeys(a.map(ce)),v.setSources(t),v.create(),v}function J(a,{getFn:t=d.getFn,fieldNormWeight:n=d.fieldNormWeight}={}){const{keys:p,records:v}=a,o=new G({getFn:t,fieldNormWeight:n});return o.setKeys(p),o.setIndexRecords(v),o}function L(a,{errors:t=0,currentLocation:n=0,expectedLocation:p=0,distance:v=d.distance,ignoreLocation:o=d.ignoreLocation}={}){const h=t/a.length;if(o)return h;const m=Math.abs(p-n);return v?h+m/v:m?1:h}function I(a=[],t=d.minMatchCharLength){let n=[],p=-1,v=-1,o=0;for(let h=a.length;o<h;o+=1){let m=a[o];m&&p===-1?p=o:!m&&p!==-1&&(v=o-1,v-p+1>=t&&n.push([p,v]),p=-1)}return a[o-1]&&o-p>=t&&n.push([p,o-1]),n}const W=32;function R(a,t,n,{location:p=d.location,distance:v=d.distance,threshold:o=d.threshold,findAllMatches:h=d.findAllMatches,minMatchCharLength:m=d.minMatchCharLength,includeMatches:l=d.includeMatches,ignoreLocation:g=d.ignoreLocation}={}){if(t.length>W)throw new Error(y(W));const C=t.length,w=a.length,M=Math.max(0,Math.min(p,w));let Q=o,se=M;const me=m>1||l,ge=me?Array(w):[];let De;for(;(De=a.indexOf(t,se))>-1;){let Me=L(t,{currentLocation:De,expectedLocation:M,distance:v,ignoreLocation:g});if(Q=Math.min(Me,Q),se=De+C,me){let Xe=0;for(;Xe<C;)ge[De+Xe]=1,Xe+=1}}se=-1;let Pe=[],Re=1,Be=C+w;const qe=1<<C-1;for(let Me=0;Me<C;Me+=1){let Xe=0,Ye=Be;for(;Xe<Ye;)L(t,{errors:Me,currentLocation:M+Ye,expectedLocation:M,distance:v,ignoreLocation:g})<=Q?Xe=Ye:Be=Ye,Ye=Math.floor((Be-Xe)/2+Xe);Be=Ye;let Ze=Math.max(1,M-Ye+1),Qe=h?w:Math.min(M+Ye,w)+C,Ge=Array(Qe+2);Ge[Qe+1]=(1<<Me)-1;for(let Te=Qe;Te>=Ze;Te-=1){let $e=Te-1,Je=n[a.charAt($e)];if(me&&(ge[$e]=+!!Je),Ge[Te]=(Ge[Te+1]<<1|1)&Je,Me&&(Ge[Te]|=(Pe[Te+1]|Pe[Te])<<1|1|Pe[Te+1]),Ge[Te]&qe&&(Re=L(t,{errors:Me,currentLocation:$e,expectedLocation:M,distance:v,ignoreLocation:g}),Re<=Q)){if(Q=Re,se=$e,se<=M)break;Ze=Math.max(1,2*M-se)}}if(L(t,{errors:Me+1,currentLocation:M,expectedLocation:M,distance:v,ignoreLocation:g})>Q)break;Pe=Ge}const Ve={isMatch:se>=0,score:Math.max(.001,Re)};if(me){const Me=I(ge,m);Me.length?l&&(Ve.indices=Me):Ve.isMatch=!1}return Ve}function Y(a){let t={};for(let n=0,p=a.length;n<p;n+=1){const v=a.charAt(n);t[v]=(t[v]||0)|1<<p-n-1}return t}const K=String.prototype.normalize?(a=>a.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(a=>a);class P{constructor(t,{location:n=d.location,threshold:p=d.threshold,distance:v=d.distance,includeMatches:o=d.includeMatches,findAllMatches:h=d.findAllMatches,minMatchCharLength:m=d.minMatchCharLength,isCaseSensitive:l=d.isCaseSensitive,ignoreDiacritics:g=d.ignoreDiacritics,ignoreLocation:C=d.ignoreLocation}={}){if(this.options={location:n,threshold:p,distance:v,includeMatches:o,findAllMatches:h,minMatchCharLength:m,isCaseSensitive:l,ignoreDiacritics:g,ignoreLocation:C},t=l?t:t.toLowerCase(),t=g?K(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const w=(Q,se)=>{this.chunks.push({pattern:Q,alphabet:Y(Q),startIndex:se})},M=this.pattern.length;if(M>W){let Q=0;const se=M%W,me=M-se;for(;Q<me;)w(this.pattern.substr(Q,W),Q),Q+=W;if(se){const ge=M-W;w(this.pattern.substr(ge),ge)}}else w(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,ignoreDiacritics:p,includeMatches:v}=this.options;if(t=n?t:t.toLowerCase(),t=p?K(t):t,this.pattern===t){let me={isMatch:!0,score:0};return v&&(me.indices=[[0,t.length-1]]),me}const{location:o,distance:h,threshold:m,findAllMatches:l,minMatchCharLength:g,ignoreLocation:C}=this.options;let w=[],M=0,Q=!1;this.chunks.forEach(({pattern:me,alphabet:ge,startIndex:De})=>{const{isMatch:Pe,score:Re,indices:Be}=R(t,me,ge,{location:o+De,distance:h,threshold:m,findAllMatches:l,minMatchCharLength:g,includeMatches:v,ignoreLocation:C});Pe&&(Q=!0),M+=Re,Pe&&Be&&(w=[...w,...Be])});let se={isMatch:Q,score:Q?M/this.chunks.length:1};return Q&&v&&(se.indices=w),se}}class N{constructor(t){this.pattern=t}static isMultiMatch(t){return _e(t,this.multiRegex)}static isSingleMatch(t){return _e(t,this.singleRegex)}search(){}}function _e(a,t){const n=a.match(t);return n?n[1]:null}class V extends N{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ae extends N{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const p=t.indexOf(this.pattern)===-1;return{isMatch:p,score:p?0:1,indices:[0,t.length-1]}}}class pe extends N{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class he extends N{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class ve extends N{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class je extends N{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class ye extends N{constructor(t,{location:n=d.location,threshold:p=d.threshold,distance:v=d.distance,includeMatches:o=d.includeMatches,findAllMatches:h=d.findAllMatches,minMatchCharLength:m=d.minMatchCharLength,isCaseSensitive:l=d.isCaseSensitive,ignoreDiacritics:g=d.ignoreDiacritics,ignoreLocation:C=d.ignoreLocation}={}){super(t),this._bitapSearch=new P(t,{location:n,threshold:p,distance:v,includeMatches:o,findAllMatches:h,minMatchCharLength:m,isCaseSensitive:l,ignoreDiacritics:g,ignoreLocation:C})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Ce extends N{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,p;const v=[],o=this.pattern.length;for(;(p=t.indexOf(this.pattern,n))>-1;)n=p+o,v.push([p,n-1]);const h=!!v.length;return{isMatch:h,score:h?0:1,indices:v}}}const Ee=[V,Ce,pe,he,je,ve,ae,ye],Le=Ee.length,ke=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Oe="|";function Ke(a,t={}){return a.split(Oe).map(n=>{let p=n.trim().split(ke).filter(o=>o&&!!o.trim()),v=[];for(let o=0,h=p.length;o<h;o+=1){const m=p[o];let l=!1,g=-1;for(;!l&&++g<Le;){const C=Ee[g];let w=C.isMultiMatch(m);w&&(v.push(new C(w,t)),l=!0)}if(!l)for(g=-1;++g<Le;){const C=Ee[g];let w=C.isSingleMatch(m);if(w){v.push(new C(w,t));break}}}return v})}const ze=new Set([ye.type,Ce.type]);class Ne{constructor(t,{isCaseSensitive:n=d.isCaseSensitive,ignoreDiacritics:p=d.ignoreDiacritics,includeMatches:v=d.includeMatches,minMatchCharLength:o=d.minMatchCharLength,ignoreLocation:h=d.ignoreLocation,findAllMatches:m=d.findAllMatches,location:l=d.location,threshold:g=d.threshold,distance:C=d.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:p,includeMatches:v,minMatchCharLength:o,findAllMatches:m,ignoreLocation:h,location:l,threshold:g,distance:C},t=n?t:t.toLowerCase(),t=p?K(t):t,this.pattern=t,this.query=Ke(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:p,isCaseSensitive:v,ignoreDiacritics:o}=this.options;t=v?t:t.toLowerCase(),t=o?K(t):t;let h=0,m=[],l=0;for(let g=0,C=n.length;g<C;g+=1){const w=n[g];m.length=0,h=0;for(let M=0,Q=w.length;M<Q;M+=1){const se=w[M],{isMatch:me,indices:ge,score:De}=se.search(t);if(me){if(h+=1,l+=De,p){const Pe=se.constructor.type;ze.has(Pe)?m=[...m,...ge]:m.push(ge)}}else{l=0,h=0,m.length=0;break}}if(h){let M={isMatch:!0,score:l/h};return p&&(M.indices=m),M}}return{isMatch:!1,score:1}}}const r=[];function x(...a){r.push(...a)}function f(a,t){for(let n=0,p=r.length;n<p;n+=1){let v=r[n];if(v.condition(a,t))return new v(a,t)}return new P(a,t)}const s={AND:"$and",OR:"$or"},u={PATH:"$path",PATTERN:"$val"},be=a=>!!(a[s.AND]||a[s.OR]),Fe=a=>!!a[u.PATH],xe=a=>!i(a)&&de(a)&&!be(a),Se=a=>({[s.AND]:Object.keys(a).map(t=>({[t]:a[t]}))});function we(a,t,{auto:n=!0}={}){const p=v=>{let o=Object.keys(v);const h=Fe(v);if(!h&&o.length>1&&!be(v))return p(Se(v));if(xe(v)){const l=h?v[u.PATH]:o[0],g=h?v[u.PATTERN]:v[l];if(!_(g))throw new Error(c(l));const C={keyId:U(l),pattern:g};return n&&(C.searcher=f(g,t)),C}let m={children:[],operator:o[0]};return o.forEach(l=>{const g=v[l];i(g)&&g.forEach(C=>{m.children.push(p(C))})}),m};return be(a)||(a=Se(a)),p(a)}function Ie(a,{ignoreFieldNorm:t=d.ignoreFieldNorm}){a.forEach(n=>{let p=1;n.matches.forEach(({key:v,norm:o,score:h})=>{const m=v?v.weight:null;p*=Math.pow(h===0&&m?Number.EPSILON:h,(m||1)*(t?1:o))}),n.score=p})}function We(a,t){const n=a.matches;t.matches=[],Z(n)&&n.forEach(p=>{if(!Z(p.indices)||!p.indices.length)return;const{indices:v,value:o}=p;let h={indices:v,value:o};p.key&&(h.key=p.key.src),p.idx>-1&&(h.refIndex=p.idx),t.matches.push(h)})}function He(a,t){t.score=a.score}function Ue(a,t,{includeMatches:n=d.includeMatches,includeScore:p=d.includeScore}={}){const v=[];return n&&v.push(We),p&&v.push(He),a.map(o=>{const{idx:h}=o,m={item:t[h],refIndex:h};return v.length&&v.forEach(l=>{l(o,m)}),m})}class Ae{constructor(t,n={},p){this.options={...d,...n},this.options.useExtendedSearch,this._keyStore=new oe(this.options.keys),this.setCollection(t,p)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof G))throw new Error(E);this._myIndex=n||$(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Z(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let p=0,v=this._docs.length;p<v;p+=1){const o=this._docs[p];t(o,p)&&(this.removeAt(p),p-=1,v-=1,n.push(o))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:p,includeScore:v,shouldSort:o,sortFn:h,ignoreFieldNorm:m}=this.options;let l=_(t)?_(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Ie(l,{ignoreFieldNorm:m}),o&&l.sort(h),D(n)&&n>-1&&(l=l.slice(0,n)),Ue(l,this._docs,{includeMatches:p,includeScore:v})}_searchStringList(t){const n=f(t,this.options),{records:p}=this._myIndex,v=[];return p.forEach(({v:o,i:h,n:m})=>{if(!Z(o))return;const{isMatch:l,score:g,indices:C}=n.searchIn(o);l&&v.push({item:o,idx:h,matches:[{score:g,value:o,norm:m,indices:C}]})}),v}_searchLogical(t){const n=we(t,this.options),p=(m,l,g)=>{if(!m.children){const{keyId:w,searcher:M}=m,Q=this._findMatches({key:this._keyStore.get(w),value:this._myIndex.getValueForItemAtKeyId(l,w),searcher:M});return Q&&Q.length?[{idx:g,item:l,matches:Q}]:[]}const C=[];for(let w=0,M=m.children.length;w<M;w+=1){const Q=m.children[w],se=p(Q,l,g);if(se.length)C.push(...se);else if(m.operator===s.AND)return[]}return C},v=this._myIndex.records,o={},h=[];return v.forEach(({$:m,i:l})=>{if(Z(m)){let g=p(n,m,l);g.length&&(o[l]||(o[l]={idx:l,item:m,matches:[]},h.push(o[l])),g.forEach(({matches:C})=>{o[l].matches.push(...C)}))}}),h}_searchObjectList(t){const n=f(t,this.options),{keys:p,records:v}=this._myIndex,o=[];return v.forEach(({$:h,i:m})=>{if(!Z(h))return;let l=[];p.forEach((g,C)=>{l.push(...this._findMatches({key:g,value:h[C],searcher:n}))}),l.length&&o.push({idx:m,item:h,matches:l})}),o}_findMatches({key:t,value:n,searcher:p}){if(!Z(n))return[];let v=[];if(i(n))n.forEach(({v:o,i:h,n:m})=>{if(!Z(o))return;const{isMatch:l,score:g,indices:C}=p.searchIn(o);l&&v.push({score:g,key:t,value:o,idx:h,norm:m,indices:C})});else{const{v:o,n:h}=n,{isMatch:m,score:l,indices:g}=p.searchIn(o);m&&v.push({score:l,key:t,value:o,norm:h,indices:g})}return v}}Ae.version="7.1.0",Ae.createIndex=$,Ae.parseIndex=J,Ae.config=d,Ae.parseQuery=we,x(Ne)}),"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js":((H,z,e)=>{var i="Expected a function",j=NaN,T="[object Symbol]",k=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,D=/^0b[01]+$/i,ne=/^0o[0-7]+$/i,de=parseInt,re=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,Z=typeof self=="object"&&self&&self.Object===Object&&self,ie=re||Z||Function("return this")(),b=Object.prototype,O=b.toString,E=Math.max,c=Math.min,y=function(){return ie.Date.now()};function B(A,U,q){var ue,le,ee,F,d,S,X=0,G=!1,$=!1,J=!0;if(typeof A!="function")throw new TypeError(i);U=ce(U)||0,te(q)&&(G=!!q.leading,$="maxWait"in q,ee=$?E(ce(q.maxWait)||0,U):ee,J="trailing"in q?!!q.trailing:J);function L(V){var ae=ue,pe=le;return ue=le=void 0,X=V,F=A.apply(pe,ae),F}function I(V){return X=V,d=setTimeout(Y,U),G?L(V):F}function W(V){var ae=V-S,pe=V-X,he=U-ae;return $?c(he,ee-pe):he}function R(V){var ae=V-S,pe=V-X;return S===void 0||ae>=U||ae<0||$&&pe>=ee}function Y(){var V=y();if(R(V))return K(V);d=setTimeout(Y,W(V))}function K(V){return d=void 0,J&&ue?L(V):(ue=le=void 0,F)}function P(){d!==void 0&&clearTimeout(d),X=0,ue=S=le=d=void 0}function N(){return d===void 0?F:K(y())}function _e(){var V=y(),ae=R(V);if(ue=arguments,le=this,S=V,ae){if(d===void 0)return I(S);if($)return d=setTimeout(Y,U),L(S)}return d===void 0&&(d=setTimeout(Y,U)),F}return _e.cancel=P,_e.flush=N,_e}function te(A){var U=typeof A;return!!A&&(U=="object"||U=="function")}function fe(A){return!!A&&typeof A=="object"}function oe(A){return typeof A=="symbol"||fe(A)&&O.call(A)==T}function ce(A){if(typeof A=="number")return A;if(oe(A))return j;if(te(A)){var U=typeof A.valueOf=="function"?A.valueOf():A;A=te(U)?U+"":U}if(typeof A!="string")return A===0?A:+A;A=A.replace(k,"");var q=D.test(A);return q||ne.test(A)?de(A.slice(2),q?2:8):_.test(A)?j:+A}H.exports=B}),"./node_modules/.pnpm/rc-drawer@6.4.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-drawer/assets/index.css":((H,z,e)=>{"use strict";var i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(i),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),k=e.n(T),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=e.n(_),ne=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),de=e.n(ne),re=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Z=e.n(re),ie=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(ie),O=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/rc-drawer@6.4.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-drawer/assets/index.css"),E={};E.styleTagTransform=b(),E.setAttributes=de(),E.insert=D().bind(null,"head"),E.domAPI=k(),E.insertStyleElement=Z();var c=j()(O.A,E),y=O.A&&O.A.locals?O.A.locals:void 0}),"./node_modules/.pnpm/rc-drawer@6.4.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-drawer/es/index.js":((H,z,e)=>{"use strict";e.d(z,{A:()=>F});var i=e("./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),j=e("./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),T=e("./node_modules/.pnpm/@rc-component+portal@1.1.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@rc-component/portal/es/index.js"),k=e("./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/hooks/useLayoutEffect.js"),_=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),D=_.createContext(null),ne=_.createContext({});const de=D;var re=e("./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),Z=e("./node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/extends.js"),ie=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),b=e.n(ie),O=e("./node_modules/.pnpm/rc-motion@2.9.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-motion/es/index.js"),E=e("./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/KeyCode.js"),c=e("./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/pickAttrs.js"),y=e("./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/index.js"),B=function(S){var X=S.prefixCls,G=S.className,$=S.style,J=S.children,L=S.containerRef,I=S.id,W=S.onMouseEnter,R=S.onMouseOver,Y=S.onMouseLeave,K=S.onClick,P=S.onKeyDown,N=S.onKeyUp,_e={onMouseEnter:W,onMouseOver:R,onMouseLeave:Y,onClick:K,onKeyDown:P,onKeyUp:N},V=_.useContext(ne),ae=V.panel,pe=(0,y.xK)(ae,L);return _.createElement(_.Fragment,null,_.createElement("div",(0,Z.A)({id:I,className:b()("".concat(X,"-content"),G),style:(0,i.A)({},$),"aria-modal":"true",role:"dialog",ref:pe},_e),J))};const te=B;var fe=e("./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/warning.js");function oe(d){return typeof d=="string"&&String(Number(d))===d?((0,fe.Ay)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(d)):d}function ce(d){warning(!("wrapperClassName"in d),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!d.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var A={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function U(d,S){var X,G,$,J,L=d.prefixCls,I=d.open,W=d.placement,R=d.inline,Y=d.push,K=d.forceRender,P=d.autoFocus,N=d.keyboard,_e=d.rootClassName,V=d.rootStyle,ae=d.zIndex,pe=d.className,he=d.id,ve=d.style,je=d.motion,ye=d.width,Ce=d.height,Ee=d.children,Le=d.contentWrapperStyle,ke=d.mask,Oe=d.maskClosable,Ke=d.maskMotion,ze=d.maskClassName,Ne=d.maskStyle,r=d.afterOpenChange,x=d.onClose,f=d.onMouseEnter,s=d.onMouseOver,u=d.onMouseLeave,be=d.onClick,Fe=d.onKeyDown,xe=d.onKeyUp,Se=_.useRef(),we=_.useRef(),Ie=_.useRef();_.useImperativeHandle(S,function(){return Se.current});var We=function(M){var Q=M.keyCode,se=M.shiftKey;switch(Q){case E.A.TAB:{if(Q===E.A.TAB){if(!se&&document.activeElement===Ie.current){var me;(me=we.current)===null||me===void 0||me.focus({preventScroll:!0})}else if(se&&document.activeElement===we.current){var ge;(ge=Ie.current)===null||ge===void 0||ge.focus({preventScroll:!0})}}break}case E.A.ESC:{x&&N&&(M.stopPropagation(),x(M));break}}};_.useEffect(function(){if(I&&P){var w;(w=Se.current)===null||w===void 0||w.focus({preventScroll:!0})}},[I]);var He=_.useState(!1),Ue=(0,j.A)(He,2),Ae=Ue[0],a=Ue[1],t=_.useContext(de),n;Y===!1?n={distance:0}:Y===!0?n={}:n=Y||{};var p=(X=(G=($=n)===null||$===void 0?void 0:$.distance)!==null&&G!==void 0?G:t==null?void 0:t.pushDistance)!==null&&X!==void 0?X:180,v=_.useMemo(function(){return{pushDistance:p,push:function(){a(!0)},pull:function(){a(!1)}}},[p]);_.useEffect(function(){if(I){var w;t==null||(w=t.push)===null||w===void 0||w.call(t)}else{var M;t==null||(M=t.pull)===null||M===void 0||M.call(t)}},[I]),_.useEffect(function(){return function(){var w;t==null||(w=t.pull)===null||w===void 0||w.call(t)}},[]);var o=ke&&_.createElement(O.Ay,(0,Z.A)({key:"mask"},Ke,{visible:I}),function(w,M){var Q=w.className,se=w.style;return _.createElement("div",{className:b()("".concat(L,"-mask"),Q,ze),style:(0,i.A)((0,i.A)({},se),Ne),onClick:Oe&&I?x:void 0,ref:M})}),h=typeof je=="function"?je(W):je,m={};if(Ae&&p)switch(W){case"top":m.transform="translateY(".concat(p,"px)");break;case"bottom":m.transform="translateY(".concat(-p,"px)");break;case"left":m.transform="translateX(".concat(p,"px)");break;default:m.transform="translateX(".concat(-p,"px)");break}W==="left"||W==="right"?m.width=oe(ye):m.height=oe(Ce);var l={onMouseEnter:f,onMouseOver:s,onMouseLeave:u,onClick:be,onKeyDown:Fe,onKeyUp:xe},g=_.createElement(O.Ay,(0,Z.A)({key:"panel"},h,{visible:I,forceRender:K,onVisibleChanged:function(M){r==null||r(M)},removeOnLeave:!1,leavedClassName:"".concat(L,"-content-wrapper-hidden")}),function(w,M){var Q=w.className,se=w.style;return _.createElement("div",(0,Z.A)({className:b()("".concat(L,"-content-wrapper"),Q),style:(0,i.A)((0,i.A)((0,i.A)({},m),se),Le)},(0,c.A)(d,{data:!0})),_.createElement(te,(0,Z.A)({id:he,containerRef:M,prefixCls:L,className:pe,style:ve},l),Ee))}),C=(0,i.A)({},V);return ae&&(C.zIndex=ae),_.createElement(de.Provider,{value:v},_.createElement("div",{className:b()(L,"".concat(L,"-").concat(W),_e,(J={},(0,re.A)(J,"".concat(L,"-open"),I),(0,re.A)(J,"".concat(L,"-inline"),R),J)),style:C,tabIndex:-1,ref:Se,onKeyDown:We},o,_.createElement("div",{tabIndex:0,ref:we,style:A,"aria-hidden":"true","data-sentinel":"start"}),g,_.createElement("div",{tabIndex:0,ref:Ie,style:A,"aria-hidden":"true","data-sentinel":"end"})))}var q=_.forwardRef(U);const ue=q;var le=function(S){var X=S.open,G=X===void 0?!1:X,$=S.prefixCls,J=$===void 0?"rc-drawer":$,L=S.placement,I=L===void 0?"right":L,W=S.autoFocus,R=W===void 0?!0:W,Y=S.keyboard,K=Y===void 0?!0:Y,P=S.width,N=P===void 0?378:P,_e=S.mask,V=_e===void 0?!0:_e,ae=S.maskClosable,pe=ae===void 0?!0:ae,he=S.getContainer,ve=S.forceRender,je=S.afterOpenChange,ye=S.destroyOnClose,Ce=S.onMouseEnter,Ee=S.onMouseOver,Le=S.onMouseLeave,ke=S.onClick,Oe=S.onKeyDown,Ke=S.onKeyUp,ze=S.panelRef,Ne=_.useState(!1),r=(0,j.A)(Ne,2),x=r[0],f=r[1],s=_.useState(!1),u=(0,j.A)(s,2),be=u[0],Fe=u[1];(0,k.A)(function(){Fe(!0)},[]);var xe=be?G:!1,Se=_.useRef(),we=_.useRef();(0,k.A)(function(){xe&&(we.current=document.activeElement)},[xe]);var Ie=function(a){var t;if(f(a),je==null||je(a),!a&&we.current&&!((t=Se.current)!==null&&t!==void 0&&t.contains(we.current))){var n;(n=we.current)===null||n===void 0||n.focus({preventScroll:!0})}},We=_.useMemo(function(){return{panel:ze}},[ze]);if(!ve&&!x&&!xe&&ye)return null;var He={onMouseEnter:Ce,onMouseOver:Ee,onMouseLeave:Le,onClick:ke,onKeyDown:Oe,onKeyUp:Ke},Ue=(0,i.A)((0,i.A)({},S),{},{open:xe,prefixCls:J,placement:I,autoFocus:R,keyboard:K,width:N,mask:V,maskClosable:pe,inline:he===!1,afterOpenChange:Ie,ref:Se},He);return _.createElement(ne.Provider,{value:We},_.createElement(T.A,{open:xe||ve||x,autoDestroy:!1,getContainer:he,autoLock:V&&(xe||x)},_.createElement(ue,Ue)))};const F=le}),"./node_modules/.pnpm/react-transition-state@2.1.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-transition-state/dist/es/hooks/useTransition.js":((H,z,e)=>{"use strict";e.d(z,{p:()=>y});var i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const j=0,T=1,k=2,_=3,D=4,ne=5,de=6,re=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],Z=B=>({_s:B,status:re[B],isEnter:B<_,isMounted:B!==de,isResolved:B===k||B>D}),ie=B=>B?de:ne,b=(B,te)=>{switch(B){case T:case j:return k;case D:case _:return ie(te)}},O=B=>typeof B=="object"?[B.enter,B.exit]:[B,B],E=(B,te)=>setTimeout(()=>{isNaN(document.body.offsetTop)||B(te+1)},0),c=(B,te,fe,oe,ce)=>{clearTimeout(oe.current);const A=Z(B);te(A),fe.current=A,ce&&ce({current:A})},y=({enter:B=!0,exit:te=!0,preEnter:fe,preExit:oe,timeout:ce,initialEntered:A,mountOnEnter:U,unmountOnExit:q,onStateChange:ue}={})=>{const[le,ee]=(0,i.useState)(()=>Z(A?k:ie(U))),F=(0,i.useRef)(le),d=(0,i.useRef)(),[S,X]=O(ce),G=(0,i.useCallback)(()=>{const J=b(F.current._s,q);J&&c(J,ee,F,d,ue)},[ue,q]),$=(0,i.useCallback)(J=>{const L=W=>{switch(c(W,ee,F,d,ue),W){case T:S>=0&&(d.current=setTimeout(G,S));break;case D:X>=0&&(d.current=setTimeout(G,X));break;case j:case _:d.current=E(L,W);break}},I=F.current.isEnter;typeof J!="boolean"&&(J=!I),J?!I&&L(B?fe?j:T:k):I&&L(te?oe?_:D:ie(q))},[G,ue,B,te,fe,oe,S,X,q]);return(0,i.useEffect)(()=>()=>clearTimeout(d.current),[]),[le,$,G]}})}]);})();
