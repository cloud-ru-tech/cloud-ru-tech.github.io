"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[484],{"./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"(v,m,o){o.d(m,{Z:()=>oe});var r=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=o("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=o.n(u),g=o("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),n=o("./node_modules/.pnpm/@snack-uikit+typography@0.8.13_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),B=o("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const z={S:"s",M:"m",L:"l"},I={promoBadge:"card__promo-badge",functionBadge:"card__function-badge",droplist:"card__function-badge__droplist",option:"card__function-badge__option",check:"card__check",emblemPicture:"card__header__emblem-picture",emblemIcon:"card__header__emblem-icon",title:"card__header__title",description:"card__header__description",metadata:"card__header__metadata",anchor:"card__anchor"},we=(0,d.createContext)({size:z.M,disabled:!1});function M(){return(0,d.useContext)(we)}const b=(0,d.createContext)({visible:!1,setVisible:()=>{}});var y=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=o.n(y),l=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=o.n(l),ke=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),k=o.n(ke),Xe=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),j=o.n(Xe),Ze=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=o.n(Ze),He=o("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),T=o.n(He),re=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/FunctionBadgeWrapper/styles.module.css"),R={};R.styleTagTransform=T(),R.setAttributes=j(),R.insert=k().bind(null,"head"),R.domAPI=i(),R.insertStyleElement=E();var Va=p()(re.A,R);const Se=re.A&&re.A.locals?re.A.locals:void 0;function Ge({children:e,className:c,alwaysVisible:s}){const[a,t]=(0,d.useState)(!1),f=s?!0:a;return(0,r.jsx)(b.Provider,{value:{visible:f,setVisible:t},children:(0,r.jsx)("div",{className:c,"data-visible":f||void 0,tabIndex:-1,children:(0,r.jsx)("div",{className:Se.functionBadge,children:(0,r.jsx)("div",{className:Se.functionRow,children:e})})})})}const Je={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},Ye={Accent:"accent",Decor:"decor"},je={Xxs:"xxs",Xs:"xs",S:"s"};var se=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.10_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"),N={};N.styleTagTransform=T(),N.setAttributes=j(),N.insert=k().bind(null,"head"),N.domAPI=i(),N.insertStyleElement=E();var Xa=p()(se.A,N);const Be=se.A&&se.A.locals?se.A.locals:void 0;var $e=function(e,c){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(s[a[t]]=e[a[t]]);return s};function qe(e){var{appearance:c=Je.Primary,color:s=Ye.Accent,size:a=je.Xxs,className:t,text:f,beforeContent:P,afterContent:h,onClick:x}=e,O=$e(e,["appearance","color","size","className","text","beforeContent","afterContent","onClick"]);const w=a!==je.Xxs,A=x?{role:"button",tabIndex:0,onClick:x}:{},S=a===je.S?n.o.SansLabelM:n.o.SansLabelS;return(0,r.jsxs)("div",Object.assign({className:_()(Be.promoTag,t)},(0,B.z7)(O),{"data-appearance":c,"data-color":s,"data-size":a},A,{children:[w&&P,!!f&&(0,r.jsx)(S,{className:Be.labelWrapper,tag:"span",children:f}),w&&h]}))}var de=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/PromoBadge/styles.module.css"),L={};L.styleTagTransform=T(),L.setAttributes=j(),L.insert=k().bind(null,"head"),L.domAPI=i(),L.insertStyleElement=E();var Za=p()(de.A,L);const De=de.A&&de.A.locals?de.A.locals:void 0;function ea({text:e,appearance:c="primary"}){return(0,r.jsx)("div",{className:De.promoBadge,children:(0,r.jsx)(qe,{appearance:c,text:e,"data-test-id":I.promoBadge,className:De.promoTag})})}var aa=o("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),ce=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Check/styles.module.css"),Q={};Q.styleTagTransform=T(),Q.setAttributes=j(),Q.insert=k().bind(null,"head"),Q.domAPI=i(),Q.insertStyleElement=E();var Ha=p()(ce.A,Q);const Me=ce.A&&ce.A.locals?ce.A.locals:void 0;function oa({className:e}){return(0,r.jsx)("div",{className:Me.checkWrapper,children:(0,r.jsx)("div",{className:_()(Me.checkContainer,e),"data-test-id":I.check,children:(0,r.jsx)(aa.A,{size:16})})})}const ta=["Enter","Space"];var le=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Card/styles.module.css"),W={};W.styleTagTransform=T(),W.setAttributes=j(),W.insert=k().bind(null,"head"),W.domAPI=i(),W.insertStyleElement=E();var Ga=p()(le.A,W);const D=le.A&&le.A.locals?le.A.locals:void 0;var ra=function(e,c){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(s[a[t]]=e[a[t]]);return s};const sa=(0,d.forwardRef)((e,c)=>{var{onClick:s,disabled:a=!1,checked:t,outline:f,multipleSelection:P=!1,size:h=z.M,children:x,header:O,footer:w,functionBadge:A,promoBadge:S,image:te,className:C,href:ye,onKeyDown:he,name:Ue,badgeAlwaysVisible:Fa}=e,Ua=ra(e,["onClick","disabled","checked","outline","multipleSelection","size","children","header","footer","functionBadge","promoBadge","image","className","href","onKeyDown","name","badgeAlwaysVisible"]);const ze=(0,d.useRef)(null),Ke=(0,d.useRef)(null),Ka=(0,d.useCallback)(xe=>{var Ae,Ie;xe.target===ze.current&&((ta.includes(xe.code)||xe.key===" ")&&(ye?(Ae=Ke.current)===null||Ae===void 0||Ae.click():(Ie=ze.current)===null||Ie===void 0||Ie.click()),he==null||he(xe))},[ye,he]),Ve=(0,B.z7)(Ua);return(0,r.jsx)(we.Provider,{value:{size:h,disabled:a},children:(0,r.jsxs)("div",Object.assign({ref:(0,g.A)(c,ze),className:_()(D.card,C)},Ve,{onClick:s,"data-disabled":a||void 0,"data-checked":t||void 0,"data-outline":f||void 0,"data-pointer":s?!0:void 0,tabIndex:0,onKeyDown:Ka,children:[te,(0,r.jsxs)("div",{className:D.composition,tabIndex:-1,children:[ye&&(0,r.jsx)("a",{ref:Ke,"data-test-id":I.anchor,tabIndex:-1,href:ye,className:D.anchor,"aria-label":Ve["aria-label"]}),!a&&A&&(0,r.jsx)(Ge,{alwaysVisible:Fa,className:D.functionBadgeWrapper,children:A}),(0,r.jsx)("div",{className:D.contentWrapper,children:(0,r.jsxs)("div",{className:D.content,"data-size":h,children:[O||null,x&&(0,r.jsx)(n.o,{family:"sans",size:h,purpose:"body",className:D.body,tag:"div",children:x}),w&&(0,r.jsx)("div",{className:D.footer,children:w})]})}),S&&(0,r.jsx)(ea,Object.assign({},typeof S=="string"?{text:S}:S))]}),t&&P&&(0,r.jsx)(oa,{className:D.check}),Ue&&(0,r.jsx)("input",{name:Ue,type:"checkbox",checked:t,style:{display:"none"}})]}))})});var Ce=o("./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js");const da={[z.S]:"m",[z.M]:"m",[z.L]:"l"};var ne=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Dimension/styles.module.css"),F={};F.styleTagTransform=T(),F.setAttributes=j(),F.insert=k().bind(null,"head"),F.domAPI=i(),F.insertStyleElement=E();var Ja=p()(ne.A,F);const $=ne.A&&ne.A.locals?ne.A.locals:void 0;function ca({dimension:e,currentValue:c,oldValue:s,size:a}){const{size:t}=M(),f=da[a||t];return(0,r.jsxs)("div",{className:$.wrapper,children:[e&&(0,r.jsx)(n.o,{purpose:"title",family:"sans",size:f,className:$.dimension,children:e}),(0,r.jsxs)("div",{className:$.valueContainer,children:[(0,r.jsx)(n.o,{purpose:"title",family:"sans",size:f,className:$.currentValue,children:c}),s&&(0,r.jsx)(n.o.CrossedOutBodyS,{className:$.oldValue,children:s})]})]})}var ie=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Promo/styles.module.css"),U={};U.styleTagTransform=T(),U.setAttributes=j(),U.insert=k().bind(null,"head"),U.domAPI=i(),U.insertStyleElement=E();var Ya=p()(ie.A,U);const la=ie.A&&ie.A.locals?ie.A.locals:void 0;var na=function(e,c){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(s[a[t]]=e[a[t]]);return s};function ia(e){var{volume:c,button:s,className:a,size:t}=e,f=na(e,["volume","button","className","size"]);const{disabled:P}=M();return(0,r.jsxs)("div",Object.assign({className:_()(la.promo,a)},(0,B.sg)(f),{children:[s&&(0,r.jsx)(Ce.L,Object.assign({},s,{appearance:"primary",size:"m",disabled:P})),c&&(0,r.jsx)(ca,Object.assign({},c,{size:t}))]}))}var _a=o("./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/ButtonTonal.js"),_e=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Action/styles.module.css"),K={};K.styleTagTransform=T(),K.setAttributes=j(),K.insert=k().bind(null,"head"),K.domAPI=i(),K.insertStyleElement=E();var $a=p()(_e.A,K);const pa=_e.A&&_e.A.locals?_e.A.locals:void 0;var ua=function(e,c){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(s[a[t]]=e[a[t]]);return s};function ba(e){var{button:c,secondaryButton:s,className:a}=e,t=ua(e,["button","secondaryButton","className"]);const{disabled:f}=M();return(0,r.jsxs)("div",Object.assign({className:_()(pa.action,a)},(0,B.sg)(t),{children:[(0,r.jsx)(Ce.L,Object.assign({},c,{appearance:"primary",size:"m",disabled:f})),s&&(0,r.jsx)(_a.L,Object.assign({},s,{appearance:"neutral",size:"m",disabled:f}))]}))}var pe=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/CallToAction/styles.module.css"),V={};V.styleTagTransform=T(),V.setAttributes=j(),V.insert=k().bind(null,"head"),V.domAPI=i(),V.insertStyleElement=E();var qa=p()(pe.A,V);const Ee=pe.A&&pe.A.locals?pe.A.locals:void 0;var ma=function(e,c){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(s[a[t]]=e[a[t]]);return s};function ga(e){var{label:c,icon:s,className:a}=e,t=ma(e,["label","icon","className"]);return(0,r.jsxs)("div",Object.assign({className:_()(Ee.callToAction,a)},(0,B.sg)(t),{children:[(0,r.jsx)(n.o.SansLabelL,{className:Ee.label,children:c}),(0,r.jsx)("span",{className:Ee.icon,children:s})]}))}var Te;(function(e){e.Promo=ia,e.Action=ba,e.CallToAction=ga})(Te||(Te={}));var va=o("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js"),fa=o("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"),ya=o("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/WithTooltip/WithTooltip.js"),Re=o("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js");const Ne={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},q={Xs:"xs",S:"s"},Le={[q.Xs]:16,[q.S]:24};var ue=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"),X={};X.styleTagTransform=T(),X.setAttributes=j(),X.insert=k().bind(null,"head"),X.domAPI=i(),X.insertStyleElement=E();var eo=p()(ue.A,X);const ee=ue.A&&ue.A.locals?ue.A.locals:void 0;var ha=function(e,c){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(s[a[t]]=e[a[t]]);return s};function xa(e){return"changeRestrictTooltipState"in e&&e.changeRestrictTooltipState!==void 0}function Qe(e){const{label:c,size:s=q.Xs,appearance:a=Ne.Neutral,onDelete:t,className:f,tabIndex:P}=e,h=ha(e,["label","size","appearance","onDelete","className","tabIndex"]),x=(0,d.useRef)(null),O=!!t,w=te=>{if(O&&xa(e)){const{changeRestrictTooltipState:C}=e;C(te)}},A=te=>{var C;!((C=x.current)===null||C===void 0)&&C.contains(te.target)&&w(!0)},S=()=>{w(!1)};return(0,r.jsxs)("span",Object.assign({},(0,B.z7)(h),{className:_()(ee.tag,f),"data-size":s,"data-appearance":a,"data-removable":O,onMouseEnter:A,onMouseLeave:S,children:[(0,r.jsx)("span",{className:ee.label,children:c}),O&&(0,r.jsx)("button",{type:"button",className:ee.tagButton,onClick:t,"data-test-id":"tag-remove-button",tabIndex:P,onMouseEnter:A,onMouseLeave:S,ref:x,children:s===q.Xs?(0,r.jsx)(Re.A,{size:Le[s],className:ee.icon}):(0,r.jsx)(Re.A,{size:Le[s],className:ee.icon})})]}))}var be=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"),Z={};Z.styleTagTransform=T(),Z.setAttributes=j(),Z.insert=k().bind(null,"head"),Z.domAPI=i(),Z.insertStyleElement=E();var ao=p()(be.A,Z);const We=be.A&&be.A.locals?be.A.locals:void 0;var wa=function(e,c){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(s[a[t]]=e[a[t]]);return s};function Fe(e){var{label:c,size:s=q.Xs,appearance:a=Ne.Neutral,className:t,tabIndex:f,href:P,onClick:h,target:x}=e,O=wa(e,["label","size","appearance","className","tabIndex","href","onClick","target"]);return(0,r.jsx)("a",Object.assign({},(0,B.z7)(O),{className:_()(We.tag,t),"data-size":s,"data-appearance":a,tabIndex:f,href:P,target:x,onClick:h,children:(0,r.jsx)("span",{className:We.label,children:c})}))}function ka(e){return"href"in e&&e.href!==void 0}function ja(e){return"tooltip"in e&&e.tooltip!==void 0}function Ea(e){const[c,s]=(0,d.useState)(!1),a=ka(e);if(!ja(e))return a?(0,r.jsx)(Fe,Object.assign({},e)):(0,r.jsx)(Qe,Object.assign({},e));const{tooltip:t}=e,f=t&&Object.assign(Object.assign({},t),{open:c?!1:t.open}),P=Object.assign(Object.assign({},e),{changeRestrictTooltipState:s});return(0,r.jsx)(ya.k,{tooltip:f,children:a?(0,r.jsx)(Fe,Object.assign({},e)):(0,r.jsx)(Qe,Object.assign({},P))})}var Ta=o("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),me=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/FunctionBadge/styles.module.css"),H={};H.styleTagTransform=T(),H.setAttributes=j(),H.insert=k().bind(null,"head"),H.domAPI=i(),H.insertStyleElement=E();var oo=p()(me.A,H);const Pe=me.A&&me.A.locals?me.A.locals:void 0;var Pa=function(e,c){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(s[a[t]]=e[a[t]]);return s};function Oa({icon:e,options:c}){const[s,a]=(0,d.useState)(!1),t=(0,d.useRef)(null),{setVisible:f}=(0,d.useContext)(b);(0,Ta.N)(()=>{f&&f(s)},[s,f]);const P=(0,d.useCallback)(h=>{h.stopPropagation(),a(x=>!x)},[]);return(0,r.jsx)("span",{className:Pe.wrapper,children:(0,r.jsx)(fa.i,{trigger:"clickAndFocusVisible",open:s,onOpenChange:a,widthStrategy:"gte",scroll:!0,"data-test-id":I.droplist,placement:"bottom-end",triggerElemRef:t,items:c.map(h=>{var{icon:x,tagLabel:O,onClick:w}=h,A=Pa(h,["icon","tagLabel","onClick"]);return Object.assign(Object.assign({},A),{className:Pe.item,beforeContent:x,afterContent:O?(0,r.jsx)(Ea,{label:O}):void 0,onClick:S=>{S.stopPropagation(),a(!1),w==null||w(S)}})}),children:(0,r.jsx)("button",{type:"button","data-test-id":I.functionBadge,className:Pe.button,onClick:P,ref:t,children:e||(0,r.jsx)(va.A,{})})})})}var Oe=o("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),za=o("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.12_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),ge=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Emblem/styled.module.css"),G={};G.styleTagTransform=T(),G.setAttributes=j(),G.insert=k().bind(null,"head"),G.domAPI=i(),G.insertStyleElement=E();var to=p()(ge.A,G);const Aa=ge.A&&ge.A.locals?ge.A.locals:void 0;function Ia(e){return"src"in e&&"alt"in e}function Sa(e){var c,s,a;const{size:t}=M();return Ia(e)?(0,r.jsx)("img",{src:e.src,alt:e.alt,"data-size":t||void 0,className:Aa.img,"data-test-id":I.emblemPicture}):(0,r.jsx)(za.I,{icon:e.icon,appearance:(c=e.appearance)!==null&&c!==void 0?c:"primary",decor:(s=e.decor)!==null&&s!==void 0?s:!0,size:t,shape:(a=e.shape)!==null&&a!==void 0?a:"round","data-test-id":I.emblemIcon})}const Ba={[z.S]:"s",[z.M]:"m",[z.L]:"l"},Da={[z.S]:"m",[z.M]:"m",[z.L]:"l"},Ma={title:1,description:2,metadata:1};var ve=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Header/styles.module.css"),J={};J.styleTagTransform=T(),J.setAttributes=j(),J.insert=k().bind(null,"head"),J.domAPI=i(),J.insertStyleElement=E();var ro=p()(ve.A,J);const ae=ve.A&&ve.A.locals?ve.A.locals:void 0;var Ca=function(e,c){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(s[a[t]]=e[a[t]]);return s};function Ra(e){var{title:c,description:s,metadata:a,truncate:t,emblem:f,className:P,size:h}=e,x=Ca(e,["title","description","metadata","truncate","emblem","className","size"]);const{size:O}=M(),w=h||O,A=Object.assign(Object.assign({},Ma),t);return(0,r.jsxs)("div",Object.assign({className:_()(ae.titleLayout,P)},(0,B.sg)(x),{"data-size":w,children:[f&&(0,r.jsx)(Sa,Object.assign({},f)),(0,r.jsxs)("div",{className:ae.contentLayout,children:[(0,r.jsx)(n.o,{family:"sans",size:Ba[w],purpose:"title",className:ae.title,"data-test-id":I.title,children:(0,r.jsx)(Oe.m,{variant:"end",maxLines:A.title,text:c})}),a&&(0,r.jsx)(n.o.SansBodyS,{className:ae.metadata,children:(0,r.jsx)(Oe.m,{variant:"end",maxLines:A.metadata,text:a,"data-test-id":I.metadata})}),s&&(0,r.jsx)(n.o,{family:"sans",size:Da[w],purpose:"body",className:ae.description,children:(0,r.jsx)(Oe.m,{variant:"end",maxLines:A.description,text:s,"data-test-id":I.description})})]})]}))}const Na={Little:"little",Middle:"middle",Background:"background"};var fe=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Image/styles.module.css"),Y={};Y.styleTagTransform=T(),Y.setAttributes=j(),Y.insert=k().bind(null,"head"),Y.domAPI=i(),Y.insertStyleElement=E();var so=p()(fe.A,Y);const La=fe.A&&fe.A.locals?fe.A.locals:void 0;var Qa=function(e,c){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(s[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(s[a[t]]=e[a[t]]);return s};function Wa(e){var{src:c,alt:s,mode:a=Na.Little,hideFading:t}=e,f=Qa(e,["src","alt","mode","hideFading"]);return(0,r.jsx)("img",Object.assign({},(0,B.z7)(f),{src:c,alt:s,"data-mode":a,className:La.image,"data-fading":!t||void 0}))}const oe=sa;oe.Header=Ra,oe.Footer=Te,oe.Image=Wa,oe.FunctionBadge=Oa},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js"(v,m,o){o.d(m,{A:()=>M});var r=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=o("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_=function(b,y){var p={};for(var l in b)Object.prototype.hasOwnProperty.call(b,l)&&y.indexOf(l)<0&&(p[l]=b[l]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,l=Object.getOwnPropertySymbols(b);i<l.length;i++)y.indexOf(l[i])<0&&Object.prototype.propertyIsEnumerable.call(b,l[i])&&(p[l[i]]=b[l[i]]);return p};const d=u.forwardRef((b,y)=>{var{size:p=24}=b,l=_(b,["size"]);l.width=void 0,l.height=void 0;const i="-kebab-s";return typeof p=="number"&&(l.style||(l.style={}),l.style.width=p+"px",l.style.height=p+"px"),(0,r.jsx)("svg",Object.assign({ref:y,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+i},l,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+i.substring(1)})}))});var n=function(b,y){var p={};for(var l in b)Object.prototype.hasOwnProperty.call(b,l)&&y.indexOf(l)<0&&(p[l]=b[l]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,l=Object.getOwnPropertySymbols(b);i<l.length;i++)y.indexOf(l[i])<0&&Object.prototype.propertyIsEnumerable.call(b,l[i])&&(p[l[i]]=b[l[i]]);return p};const z=u.forwardRef((b,y)=>{var{size:p=24}=b,l=n(b,["size"]);l.width=void 0,l.height=void 0;const i="-kebab-xs";return typeof p=="number"&&(l.style||(l.style={}),l.style.width=p+"px",l.style.height=p+"px"),(0,r.jsx)("svg",Object.assign({ref:y,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+i},l,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+i.substring(1)})}))});var I=function(b,y){var p={};for(var l in b)Object.prototype.hasOwnProperty.call(b,l)&&y.indexOf(l)<0&&(p[l]=b[l]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,l=Object.getOwnPropertySymbols(b);i<l.length;i++)y.indexOf(l[i])<0&&Object.prototype.propertyIsEnumerable.call(b,l[i])&&(p[l[i]]=b[l[i]]);return p};const M=(0,u.forwardRef)((b,y)=>{var{size:p=24}=b,l=I(b,["size"]);return Number(p)>=20?(0,r.jsx)(d,Object.assign({ref:y,size:p},l)):(0,r.jsx)(z,Object.assign({ref:y,size:p},l))})},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Card/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.functionBadgeWrapper--eqyks{
  position:absolute;
  z-index:1;
  top:0;
  right:0;
  display:none;
}
.functionBadgeWrapper--eqyks[data-visible]{
  display:block;
}

.composition--F4oSU{
  border-radius:var(--radius-card-container, 8px);
  box-sizing:border-box;
  height:100%;
}

.contentWrapper--QLFeB{
  position:relative;
  height:100%;
}

.card--ilRRt{
  border-radius:var(--radius-card-container, 8px);
  border-width:var(--border-width-card-container, 1px);
  position:relative;
  z-index:0;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  margin:0;
  padding:0;
  text-align:left;
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border:0;
  outline-color:transparent;
}
.card--ilRRt:hover .functionBadgeWrapper--eqyks{
  display:block;
}
.card--ilRRt[data-outline]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-neutral-decor-default, #dde0ea);
  outline-width:var(--border-width-card-container, 1px);
}
.card--ilRRt:hover, .card--ilRRt:focus-visible{
  --snack-ui-card-background-color:var(--sys-neutral-background2-level, #ffffff);
}
.card--ilRRt:focus-visible{
  outline-width:var(--border-state-focus-l-border-width, 4px);
  outline-style:var(--border-state-focus-l-border-style, solid);
  outline-color:var(--border-state-focus-l-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.card--ilRRt:focus-visible .functionBadgeWrapper--eqyks{
  display:block;
}
.card--ilRRt:focus-visible .check--EeyEi{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--ilRRt:focus-within .functionBadgeWrapper--eqyks{
  display:block;
}
.card--ilRRt[data-checked]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
  outline-width:var(--border-width-card-container, 1px);
}
.card--ilRRt[data-checked]:hover{
  outline-color:var(--sys-primary-decor-hovered, #b3deca);
  box-shadow:none;
}
.card--ilRRt[data-checked] .contentWrapper--QLFeB::before{
  content:"";
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--ilRRt[data-checked] .check--EeyEi{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--ilRRt[data-checked]:focus-visible{
  outline-width:var(--border-state-focus-l-border-width, 4px);
  outline-style:var(--border-state-focus-l-border-style, solid);
  outline-color:var(--border-state-focus-l-border-color, );
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.card--ilRRt[data-checked]:focus-visible .check--EeyEi{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--ilRRt[data-disabled]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  cursor:not-allowed;
  opacity:var(--opacity-a048, 0.48);
  background-color:var(--sys-neutral-background, #eeeff3);
  outline-color:var(--sys-neutral-decor-default, #dde0ea);
  outline-width:var(--border-width-card-container, 1px);
}
.card--ilRRt[data-disabled][data-checked] .check--EeyEi{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}
.card--ilRRt[data-disabled] *{
  cursor:not-allowed;
}
.card--ilRRt[data-pointer] *{
  cursor:pointer;
}
.card--ilRRt[data-pointer][data-outline]:hover{
  outline-color:var(--sys-neutral-decor-hovered, #cfd2dc);
  box-shadow:none;
}
.card--ilRRt[data-pointer][data-outline]:focus-visible{
  outline-width:var(--border-state-focus-l-border-width, 4px);
  outline-style:var(--border-state-focus-l-border-style, solid);
  outline-color:var(--border-state-focus-l-border-color, );
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.card--ilRRt[data-pointer]:hover{
  box-shadow:var(--box-shadow-elevation-level2, 0px 0px 4px 0px rgba(0, 0, 0, 0.0392156863), 0px 4px 8px 0px rgba(0, 0, 0, 0.0392156863));
}
.card--ilRRt[data-pointer][data-disabled] *{
  cursor:not-allowed;
}

.anchor--zLHfs{
  position:absolute;
  z-index:1;
  top:0;
  right:0;
  bottom:0;
  left:0;
  border-radius:var(--radius-card-container, 8px);
}

.body--Pixe4{
  display:block;
  flex-grow:1;
  flex-shrink:1;
  width:100%;
  color:var(--sys-neutral-text-support, #6d707f);
  text-align:initial;
}

.content--eU1T4{
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:flex-start;
  box-sizing:border-box;
  max-width:100%;
  height:100%;
}
.content--eU1T4[data-size=s]{
  padding:var(--space-card-padding-container-s, 8px);
  gap:var(--space-card-gap-s, 4px);
}
.content--eU1T4[data-size=m]{
  padding:var(--space-card-padding-container-m, 16px);
  gap:var(--space-card-gap-m, 8px);
}
.content--eU1T4[data-size=l]{
  padding:var(--space-card-padding-container-l, 24px);
  gap:var(--space-card-gap-l, 16px);
}

.footer--HMr6x{
  position:relative;
  box-sizing:border-box;
  width:100%;
}`,""]),d.locals={functionBadgeWrapper:"functionBadgeWrapper--eqyks",composition:"composition--F4oSU",contentWrapper:"contentWrapper--QLFeB",card:"card--ilRRt",check:"check--EeyEi",anchor:"anchor--zLHfs",body:"body--Pixe4",content:"content--eU1T4",footer:"footer--HMr6x"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Action/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.action--xLAu5{
  gap:var(--space-card-gap-l, 16px);
  display:flex;
  align-items:center;
  justify-content:flex-start;
  box-sizing:border-box;
}`,""]),d.locals={action:"action--xLAu5"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/CallToAction/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.callToAction--JjW0x{
  gap:var(--space-card-gap-s, 4px);
  display:flex;
  align-items:center;
  justify-content:flex-start;
  box-sizing:border-box;
}

.icon--pkDGd{
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-primary-accent-default, #389f74);
}
.icon--pkDGd svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.label--cSV1r{
  color:var(--sys-primary-accent-default, #389f74);
}`,""]),d.locals={callToAction:"callToAction--JjW0x",icon:"icon--pkDGd",label:"label--cSV1r"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Dimension/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.wrapper--1WpN0{
  gap:var(--space-card-gap-s, 4px);
  display:flex;
  flex:1 0 auto;
  justify-content:flex-end;
  box-sizing:border-box;
}

.valueContainer--zL3W3{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  justify-content:flex-start;
  box-sizing:border-box;
}

.currentValue--cStnz{
  color:var(--sys-neutral-text-main, #41424e);
}

.oldValue--aocTK{
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.dimension--A1lmj{
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),d.locals={wrapper:"wrapper--1WpN0",valueContainer:"valueContainer--zL3W3",currentValue:"currentValue--cStnz",oldValue:"oldValue--aocTK",dimension:"dimension--A1lmj"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Promo/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.promo--i7Wvm{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  box-sizing:border-box;
}`,""]),d.locals={promo:"promo--i7Wvm"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/FunctionBadge/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.button--FW_D6{
  width:var(--size-card-button, 32px);
  height:var(--size-card-button, 32px);
  border-radius:var(--radius-card-button, 4px);
  cursor:pointer;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-neutral-text-main, #41424e);
  background-color:transparent;
  border:0;
  outline-color:transparent;
}
.button--FW_D6:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.button--FW_D6:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-support, #6d707f);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--FW_D6:active{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.button--FW_D6 svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.triggerClassName--ht83t{
  --offset:var(--space-drop-list-drop-offset, 4px);
}

.wrapper--_KbWF{
  position:relative;
}

li.item--vnbrf{
  width:-moz-max-content;
  width:max-content;
}`,""]),d.locals={button:"button--FW_D6",triggerClassName:"triggerClassName--ht83t",wrapper:"wrapper--_KbWF",item:"item--vnbrf"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Header/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.titleLayout--X2ZZy{
  display:flex;
  align-items:center;
  box-sizing:border-box;
  width:100%;
}
.titleLayout--X2ZZy[data-size=s]{
  gap:var(--space-card-gap-s, 4px);
}
.titleLayout--X2ZZy[data-size=m]{
  gap:var(--space-card-gap-m, 8px);
}
.titleLayout--X2ZZy[data-size=l]{
  gap:var(--space-card-gap-l, 16px);
}

.contentLayout--q60PX{
  overflow:hidden;
  display:block;
  max-width:100%;
}

.title--aktbd{
  display:block;
  max-width:100%;
  color:var(--sys-neutral-text-main, #41424e);
}

.metadata--bisyN{
  max-width:100%;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.description--bW1ND{
  max-width:100%;
  color:var(--sys-neutral-text-support, #6d707f);
}`,""]),d.locals={titleLayout:"titleLayout--X2ZZy",contentLayout:"contentLayout--q60PX",title:"title--aktbd",metadata:"metadata--bisyN",description:"description--bW1ND"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Image/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.image--Dmm_1{
  display:block;
  box-sizing:border-box;
  width:100%;
  height:auto;
  -o-object-fit:cover;
     object-fit:cover;
}
.image--Dmm_1[data-mode=little]{
  height:var(--size-card-image-litte, 144px);
}
.image--Dmm_1[data-mode=middle]{
  height:var(--size-card-image-middle, 240px);
}
.image--Dmm_1[data-mode=background]{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -o-object-fit:cover;
     object-fit:cover;
}
.image--Dmm_1[data-mode=background][data-fading]{
  -webkit-mask-image:var(--gradient-linear-mask-90deg, linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.0784313725) 33%, #ffffff 100%));
  mask-image:var(--gradient-linear-mask-90deg, linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.0784313725) 33%, #ffffff 100%));
}`,""]),d.locals={image:"image--Dmm_1"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Check/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.checkWrapper--qcq_u{
  padding-top:var(--space-card-padding-check-badge, 4px);
  padding-left:var(--space-card-padding-check-badge, 4px);
  position:absolute;
  top:0;
  left:0;
}

.checkContainer--p9XDC{
  width:var(--size-card-check, 16px);
  height:var(--size-card-check, 16px);
  border-radius:var(--radius-card-check, 4px);
  display:flex;
  align-items:center;
  justify-content:center;
}`,""]),d.locals={checkWrapper:"checkWrapper--qcq_u",checkContainer:"checkContainer--p9XDC"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Emblem/styled.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.img--zpFMc{
  overflow:hidden;
  flex-shrink:0;
  box-sizing:border-box;
  -o-object-fit:cover;
     object-fit:cover;
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-style:solid;
}
.img--zpFMc[data-size=s]{
  width:var(--size-card-picture-s, 32px);
  height:var(--size-card-picture-s, 32px);
  border-width:var(--border-width-card-picture, 1px);
  border-radius:var(--radius-card-picture, 4px);
}
.img--zpFMc[data-size=m]{
  width:var(--size-card-picture-m, 40px);
  height:var(--size-card-picture-m, 40px);
  border-width:var(--border-width-card-picture, 1px);
  border-radius:var(--radius-card-picture, 4px);
}
.img--zpFMc[data-size=l]{
  width:var(--size-card-picture-l, 80px);
  height:var(--size-card-picture-l, 80px);
  border-width:var(--border-width-card-picture, 1px);
  border-radius:var(--radius-card-picture, 4px);
}`,""]),d.locals={img:"img--zpFMc"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/FunctionBadgeWrapper/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.functionBadge--OG3hM{
  padding-top:var(--space-card-padding-function-badge, 8px);
  padding-right:var(--space-card-padding-function-badge, 8px);
  position:absolute;
  top:0;
  right:0;
  box-sizing:border-box;
}

.functionRow--jeBKT{
  position:relative;
}
.functionRow--jeBKT::before{
  width:var(--size-card-function-badge-function-row, 32px);
  height:var(--size-card-function-badge-function-row, 32px);
  border-radius:var(--radius-card-button, 4px);
  opacity:var(--opacity-card-transparent-background, 0.8);
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  box-shadow:var(--box-shadow-elevation-level2, 0px 0px 4px 0px rgba(0, 0, 0, 0.0392156863), 0px 4px 8px 0px rgba(0, 0, 0, 0.0392156863));
}`,""]),d.locals={functionBadge:"functionBadge--OG3hM",functionRow:"functionRow--jeBKT"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/PromoBadge/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.promoBadge--oWNap{
  padding-top:var(--space-card-padding-promo-badge, 4px);
  padding-right:var(--space-card-padding-promo-badge, 4px);
  position:absolute;
  top:0;
  right:0;
  box-sizing:border-box;
}

div.promoTag--c16ov{
  display:flex;
}`,""]),d.locals={promoBadge:"promoBadge--oWNap",promoTag:"promoTag--c16ov"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.10_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.promoTag--g55Qz{
  display:inline-flex;
  align-items:center;
  white-space:nowrap;
}
.promoTag--g55Qz[data-color=accent][data-appearance=neutral]{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.promoTag--g55Qz[data-color=accent][data-appearance=neutral][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-neutral-decor-activated, #b6bac7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=accent][data-appearance=neutral][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=accent][data-appearance=neutral][role=button]:hover{
  background-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.promoTag--g55Qz[data-color=accent][data-appearance=neutral][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=accent][data-appearance=neutral][role=button]:active[data-color=accent]{
  background-color:var(--sys-neutral-accent-pressed, #656774);
}
.promoTag--g55Qz[data-color=accent][data-appearance=neutral][role=button]:active[data-color=decor]{
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.promoTag--g55Qz[data-color=accent][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.promoTag--g55Qz[data-color=accent][data-appearance=primary][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=accent][data-appearance=primary][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=accent][data-appearance=primary][role=button]:hover{
  background-color:var(--sys-primary-accent-hovered, #37946e);
}
.promoTag--g55Qz[data-color=accent][data-appearance=primary][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=accent][data-appearance=primary][role=button]:active[data-color=accent]{
  background-color:var(--sys-primary-accent-pressed, #358561);
}
.promoTag--g55Qz[data-color=accent][data-appearance=primary][role=button]:active[data-color=decor]{
  background-color:var(--sys-primary-decor-activated, #99d7ba);
}
.promoTag--g55Qz[data-color=accent][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.promoTag--g55Qz[data-color=accent][data-appearance=red][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-red-decor-activated, #fbab99);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=accent][data-appearance=red][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=accent][data-appearance=red][role=button]:hover{
  background-color:var(--sys-red-accent-hovered, #bd4844);
}
.promoTag--g55Qz[data-color=accent][data-appearance=red][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=accent][data-appearance=red][role=button]:active[data-color=accent]{
  background-color:var(--sys-red-accent-pressed, #ae514c);
}
.promoTag--g55Qz[data-color=accent][data-appearance=red][role=button]:active[data-color=decor]{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.promoTag--g55Qz[data-color=accent][data-appearance=orange]{
  color:var(--sys-orange-on-accent, #fffcf4);
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.promoTag--g55Qz[data-color=accent][data-appearance=orange][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-orange-decor-activated, #f5b27b);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=accent][data-appearance=orange][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=accent][data-appearance=orange][role=button]:hover{
  background-color:var(--sys-orange-accent-hovered, #ec823b);
}
.promoTag--g55Qz[data-color=accent][data-appearance=orange][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=accent][data-appearance=orange][role=button]:active[data-color=accent]{
  background-color:var(--sys-orange-accent-pressed, #e78940);
}
.promoTag--g55Qz[data-color=accent][data-appearance=orange][role=button]:active[data-color=decor]{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.promoTag--g55Qz[data-color=accent][data-appearance=yellow]{
  color:var(--sys-yellow-on-accent, #583f1f);
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.promoTag--g55Qz[data-color=accent][data-appearance=yellow][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=accent][data-appearance=yellow][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=accent][data-appearance=yellow][role=button]:hover{
  background-color:var(--sys-yellow-accent-hovered, #d5a133);
}
.promoTag--g55Qz[data-color=accent][data-appearance=yellow][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=accent][data-appearance=yellow][role=button]:active[data-color=accent]{
  background-color:var(--sys-yellow-accent-pressed, #d3a736);
}
.promoTag--g55Qz[data-color=accent][data-appearance=yellow][role=button]:active[data-color=decor]{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.promoTag--g55Qz[data-color=accent][data-appearance=green]{
  color:var(--sys-green-on-accent, #fcfefa);
  background-color:var(--sys-green-accent-default, #57b762);
}
.promoTag--g55Qz[data-color=accent][data-appearance=green][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=accent][data-appearance=green][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=accent][data-appearance=green][role=button]:hover{
  background-color:var(--sys-green-accent-hovered, #5daa63);
}
.promoTag--g55Qz[data-color=accent][data-appearance=green][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=accent][data-appearance=green][role=button]:active[data-color=accent]{
  background-color:var(--sys-green-accent-pressed, #55915a);
}
.promoTag--g55Qz[data-color=accent][data-appearance=green][role=button]:active[data-color=decor]{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.promoTag--g55Qz[data-color=accent][data-appearance=blue]{
  color:var(--sys-blue-on-accent, #fdfeff);
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.promoTag--g55Qz[data-color=accent][data-appearance=blue][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-blue-decor-activated, #aac4ea);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=accent][data-appearance=blue][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=accent][data-appearance=blue][role=button]:hover{
  background-color:var(--sys-blue-accent-hovered, #4e80bf);
}
.promoTag--g55Qz[data-color=accent][data-appearance=blue][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=accent][data-appearance=blue][role=button]:active[data-color=accent]{
  background-color:var(--sys-blue-accent-pressed, #4877b0);
}
.promoTag--g55Qz[data-color=accent][data-appearance=blue][role=button]:active[data-color=decor]{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.promoTag--g55Qz[data-color=accent][data-appearance=violet]{
  color:var(--sys-violet-on-accent, #fdfdfd);
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.promoTag--g55Qz[data-color=accent][data-appearance=violet][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-violet-decor-activated, #ceb7e7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=accent][data-appearance=violet][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=accent][data-appearance=violet][role=button]:hover{
  background-color:var(--sys-violet-accent-hovered, #9a66ae);
}
.promoTag--g55Qz[data-color=accent][data-appearance=violet][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=accent][data-appearance=violet][role=button]:active[data-color=accent]{
  background-color:var(--sys-violet-accent-pressed, #8c639b);
}
.promoTag--g55Qz[data-color=accent][data-appearance=violet][role=button]:active[data-color=decor]{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.promoTag--g55Qz[data-color=accent][data-appearance=pink]{
  color:var(--sys-pink-on-accent, #fdfcfc);
  background-color:var(--sys-pink-accent-default, #d1668e);
}
.promoTag--g55Qz[data-color=accent][data-appearance=pink][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-pink-decor-activated, #e8b1c1);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=accent][data-appearance=pink][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=accent][data-appearance=pink][role=button]:hover{
  background-color:var(--sys-pink-accent-hovered, #c06088);
}
.promoTag--g55Qz[data-color=accent][data-appearance=pink][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=accent][data-appearance=pink][role=button]:active[data-color=accent]{
  background-color:var(--sys-pink-accent-pressed, #ae5e80);
}
.promoTag--g55Qz[data-color=accent][data-appearance=pink][role=button]:active[data-color=decor]{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}
.promoTag--g55Qz[data-color=decor][data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.promoTag--g55Qz[data-color=decor][data-appearance=neutral][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-neutral-decor-activated, #b6bac7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=decor][data-appearance=neutral][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=decor][data-appearance=neutral][role=button]:hover{
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.promoTag--g55Qz[data-color=decor][data-appearance=neutral][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=decor][data-appearance=neutral][role=button]:active[data-color=accent]{
  background-color:var(--sys-neutral-accent-pressed, #656774);
}
.promoTag--g55Qz[data-color=decor][data-appearance=neutral][role=button]:active[data-color=decor]{
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.promoTag--g55Qz[data-color=decor][data-appearance=primary]{
  color:var(--sys-primary-text-main, #1b5840);
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.promoTag--g55Qz[data-color=decor][data-appearance=primary][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=decor][data-appearance=primary][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=decor][data-appearance=primary][role=button]:hover{
  background-color:var(--sys-primary-decor-hovered, #b3deca);
}
.promoTag--g55Qz[data-color=decor][data-appearance=primary][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=decor][data-appearance=primary][role=button]:active[data-color=accent]{
  background-color:var(--sys-primary-accent-pressed, #358561);
}
.promoTag--g55Qz[data-color=decor][data-appearance=primary][role=button]:active[data-color=decor]{
  background-color:var(--sys-primary-decor-activated, #99d7ba);
}
.promoTag--g55Qz[data-color=decor][data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.promoTag--g55Qz[data-color=decor][data-appearance=red][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-red-decor-activated, #fbab99);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=decor][data-appearance=red][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=decor][data-appearance=red][role=button]:hover{
  background-color:var(--sys-red-decor-hovered, #fac1b3);
}
.promoTag--g55Qz[data-color=decor][data-appearance=red][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=decor][data-appearance=red][role=button]:active[data-color=accent]{
  background-color:var(--sys-red-accent-pressed, #ae514c);
}
.promoTag--g55Qz[data-color=decor][data-appearance=red][role=button]:active[data-color=decor]{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.promoTag--g55Qz[data-color=decor][data-appearance=orange]{
  color:var(--sys-orange-text-main, #884c23);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.promoTag--g55Qz[data-color=decor][data-appearance=orange][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-orange-decor-activated, #f5b27b);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=decor][data-appearance=orange][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=decor][data-appearance=orange][role=button]:hover{
  background-color:var(--sys-orange-decor-hovered, #f8c699);
}
.promoTag--g55Qz[data-color=decor][data-appearance=orange][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=decor][data-appearance=orange][role=button]:active[data-color=accent]{
  background-color:var(--sys-orange-accent-pressed, #e78940);
}
.promoTag--g55Qz[data-color=decor][data-appearance=orange][role=button]:active[data-color=decor]{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.promoTag--g55Qz[data-color=decor][data-appearance=yellow]{
  color:var(--sys-yellow-text-main, #815f19);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.promoTag--g55Qz[data-color=decor][data-appearance=yellow][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=decor][data-appearance=yellow][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=decor][data-appearance=yellow][role=button]:hover{
  background-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.promoTag--g55Qz[data-color=decor][data-appearance=yellow][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=decor][data-appearance=yellow][role=button]:active[data-color=accent]{
  background-color:var(--sys-yellow-accent-pressed, #d3a736);
}
.promoTag--g55Qz[data-color=decor][data-appearance=yellow][role=button]:active[data-color=decor]{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.promoTag--g55Qz[data-color=decor][data-appearance=green]{
  color:var(--sys-green-text-main, #3d6035);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.promoTag--g55Qz[data-color=decor][data-appearance=green][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=decor][data-appearance=green][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=decor][data-appearance=green][role=button]:hover{
  background-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.promoTag--g55Qz[data-color=decor][data-appearance=green][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=decor][data-appearance=green][role=button]:active[data-color=accent]{
  background-color:var(--sys-green-accent-pressed, #55915a);
}
.promoTag--g55Qz[data-color=decor][data-appearance=green][role=button]:active[data-color=decor]{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.promoTag--g55Qz[data-color=decor][data-appearance=blue]{
  color:var(--sys-blue-text-main, #2b537e);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.promoTag--g55Qz[data-color=decor][data-appearance=blue][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-blue-decor-activated, #aac4ea);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=decor][data-appearance=blue][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=decor][data-appearance=blue][role=button]:hover{
  background-color:var(--sys-blue-decor-hovered, #c5d9f6);
}
.promoTag--g55Qz[data-color=decor][data-appearance=blue][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=decor][data-appearance=blue][role=button]:active[data-color=accent]{
  background-color:var(--sys-blue-accent-pressed, #4877b0);
}
.promoTag--g55Qz[data-color=decor][data-appearance=blue][role=button]:active[data-color=decor]{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.promoTag--g55Qz[data-color=decor][data-appearance=violet]{
  color:var(--sys-violet-text-main, #59446a);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.promoTag--g55Qz[data-color=decor][data-appearance=violet][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-violet-decor-activated, #ceb7e7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=decor][data-appearance=violet][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=decor][data-appearance=violet][role=button]:hover{
  background-color:var(--sys-violet-decor-hovered, #e1d0f7);
}
.promoTag--g55Qz[data-color=decor][data-appearance=violet][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=decor][data-appearance=violet][role=button]:active[data-color=accent]{
  background-color:var(--sys-violet-accent-pressed, #8c639b);
}
.promoTag--g55Qz[data-color=decor][data-appearance=violet][role=button]:active[data-color=decor]{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.promoTag--g55Qz[data-color=decor][data-appearance=pink]{
  color:var(--sys-pink-text-main, #754158);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.promoTag--g55Qz[data-color=decor][data-appearance=pink][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-pink-decor-activated, #e8b1c1);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--g55Qz[data-color=decor][data-appearance=pink][role=button]{
  cursor:pointer;
}
.promoTag--g55Qz[data-color=decor][data-appearance=pink][role=button]:hover{
  background-color:var(--sys-pink-decor-hovered, #f5c9d6);
}
.promoTag--g55Qz[data-color=decor][data-appearance=pink][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--g55Qz[data-color=decor][data-appearance=pink][role=button]:active[data-color=accent]{
  background-color:var(--sys-pink-accent-pressed, #ae5e80);
}
.promoTag--g55Qz[data-color=decor][data-appearance=pink][role=button]:active[data-color=decor]{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}
.promoTag--g55Qz[data-size=xxs]{
  height:var(--size-promo-tag-height-xxs, 16px);
  padding-left:var(--space-promo-tag-horizontal-padding-xxs, 0px);
  padding-right:var(--space-promo-tag-horizontal-padding-xxs, 0px);
  border-radius:var(--radius-promo-tag-xxs, 4px);
  border-width:var(--border-width-promo-tag-single, 1px);
}
.promoTag--g55Qz[data-size=xxs] .labelWrapper--LNUJZ{
  padding-left:var(--space-promo-tag-label-wrapper-xxs, 4px);
  padding-right:var(--space-promo-tag-label-wrapper-xxs, 4px);
}
.promoTag--g55Qz[data-size=xs]{
  height:var(--size-promo-tag-height-xs, 24px);
  padding-left:var(--space-promo-tag-horizontal-padding-xs, 0px);
  padding-right:var(--space-promo-tag-horizontal-padding-xs, 0px);
  border-radius:var(--radius-promo-tag-xs, 4px);
  border-width:var(--border-width-promo-tag-single, 1px);
}
.promoTag--g55Qz[data-size=xs] .labelWrapper--LNUJZ{
  padding-left:var(--space-promo-tag-label-wrapper-xs, 4px);
  padding-right:var(--space-promo-tag-label-wrapper-xs, 4px);
}
.promoTag--g55Qz[data-size=s]{
  height:var(--size-promo-tag-height-s, 32px);
  padding-left:var(--space-promo-tag-horizontal-padding-s, 4px);
  padding-right:var(--space-promo-tag-horizontal-padding-s, 4px);
  border-radius:var(--radius-promo-tag-s, 8px);
  border-width:var(--border-width-promo-tag-single, 1px);
}
.promoTag--g55Qz[data-size=s] .labelWrapper--LNUJZ{
  padding-left:var(--space-promo-tag-label-wrapper-s, 4px);
  padding-right:var(--space-promo-tag-label-wrapper-s, 4px);
}`,""]),d.locals={promoTag:"promoTag--g55Qz",labelWrapper:"labelWrapper--LNUJZ"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.tag--NwI_j{
  display:inline-flex;
  align-items:center;
  box-sizing:border-box;
  max-width:100%;
}
.tag--NwI_j .tagButton--r2yPE{
  cursor:pointer;
  position:relative;
  box-sizing:border-box;
  margin:0;
  padding:0;
  background:none;
  border:none;
}
.tag--NwI_j .tagButton--r2yPE:focus{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
}
.tag--NwI_j .tagButton--r2yPE:active{
  outline:none;
}
.tag--NwI_j .icon--Tp2MS{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
.tag--NwI_j[data-size=xs]{
  padding-left:var(--space-tag-xs-from-label, 8px);
  padding-right:var(--space-tag-xs-from-label, 8px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
}
.tag--NwI_j[data-size=xs][data-removable=true]{
  padding-left:var(--space-tag-xs-from-label, 8px);
  padding-right:var(--space-tag-xs-from-button, 0px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
  gap:var(--space-tag-xs-gap, 2px);
}
.tag--NwI_j[data-size=xs] .label--XUu32{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.tag--NwI_j[data-size=xs] .tagButton--r2yPE{
  border-radius:var(--radius-tag-xs, 4px);
  height:var(--size-tag-xs, 24px);
  width:var(--size-tag-xs, 24px);
}
.tag--NwI_j[data-size=s]{
  padding-left:var(--space-tag-s-from-label, 8px);
  padding-right:var(--space-tag-s-from-label, 8px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 4px);
}
.tag--NwI_j[data-size=s][data-removable=true]{
  padding-left:var(--space-tag-s-from-label, 8px);
  padding-right:var(--space-tag-s-from-button, 0px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 4px);
  gap:var(--space-tag-s-gap, 2px);
}
.tag--NwI_j[data-size=s] .label--XUu32{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.tag--NwI_j[data-size=s] .tagButton--r2yPE{
  border-radius:var(--radius-tag-s, 4px);
  height:var(--size-tag-s, 32px);
  width:var(--size-tag-s, 32px);
}
.tag--NwI_j[data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.tag--NwI_j[data-appearance=neutral] .label--XUu32{
  overflow:hidden;
  color:var(--sys-neutral-text-support, #6d707f);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE:hover{
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.tag--NwI_j[data-appearance=neutral] .tagButton--r2yPE:active{
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.tag--NwI_j[data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.tag--NwI_j[data-appearance=primary] .label--XUu32{
  overflow:hidden;
  color:var(--sys-primary-text-support, #358561);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=primary] .tagButton--r2yPE{
  color:var(--sys-primary-text-light, #6aaf90);
}
.tag--NwI_j[data-appearance=primary] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=primary] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=primary] .tagButton--r2yPE:active{
  color:var(--sys-primary-text-main, #1b5840);
}
.tag--NwI_j[data-appearance=primary] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=primary] .tagButton--r2yPE:hover{
  background-color:var(--sys-primary-decor-hovered, #b3deca);
}
.tag--NwI_j[data-appearance=primary] .tagButton--r2yPE:active{
  background-color:var(--sys-primary-decor-activated, #99d7ba);
}
.tag--NwI_j[data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.tag--NwI_j[data-appearance=red] .label--XUu32{
  overflow:hidden;
  color:var(--sys-red-text-support, #ae514c);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=red] .tagButton--r2yPE{
  color:var(--sys-red-text-light, #e7756a);
}
.tag--NwI_j[data-appearance=red] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=red] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=red] .tagButton--r2yPE:active{
  color:var(--sys-red-text-main, #7a2d2d);
}
.tag--NwI_j[data-appearance=red] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=red] .tagButton--r2yPE:hover{
  background-color:var(--sys-red-decor-hovered, #fac1b3);
}
.tag--NwI_j[data-appearance=red] .tagButton--r2yPE:active{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.tag--NwI_j[data-appearance=orange]{
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.tag--NwI_j[data-appearance=orange] .label--XUu32{
  overflow:hidden;
  color:var(--sys-orange-text-support, #bb733e);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=orange] .tagButton--r2yPE{
  color:var(--sys-orange-text-light, #e78940);
}
.tag--NwI_j[data-appearance=orange] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=orange] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=orange] .tagButton--r2yPE:active{
  color:var(--sys-orange-text-main, #884c23);
}
.tag--NwI_j[data-appearance=orange] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=orange] .tagButton--r2yPE:hover{
  background-color:var(--sys-orange-decor-hovered, #f8c699);
}
.tag--NwI_j[data-appearance=orange] .tagButton--r2yPE:active{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.tag--NwI_j[data-appearance=yellow]{
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.tag--NwI_j[data-appearance=yellow] .label--XUu32{
  overflow:hidden;
  color:var(--sys-yellow-text-support, #b78c32);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE{
  color:var(--sys-yellow-text-light, #d3a736);
}
.tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE:active{
  color:var(--sys-yellow-text-main, #815f19);
}
.tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE:hover{
  background-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.tag--NwI_j[data-appearance=yellow] .tagButton--r2yPE:active{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.tag--NwI_j[data-appearance=green]{
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.tag--NwI_j[data-appearance=green] .label--XUu32{
  overflow:hidden;
  color:var(--sys-green-text-support, #55915a);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=green] .tagButton--r2yPE{
  color:var(--sys-green-text-light, #69b56f);
}
.tag--NwI_j[data-appearance=green] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=green] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=green] .tagButton--r2yPE:active{
  color:var(--sys-green-text-main, #3d6035);
}
.tag--NwI_j[data-appearance=green] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=green] .tagButton--r2yPE:hover{
  background-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.tag--NwI_j[data-appearance=green] .tagButton--r2yPE:active{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.tag--NwI_j[data-appearance=blue]{
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.tag--NwI_j[data-appearance=blue] .label--XUu32{
  overflow:hidden;
  color:var(--sys-blue-text-support, #4877b0);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=blue] .tagButton--r2yPE{
  color:var(--sys-blue-text-light, #749eda);
}
.tag--NwI_j[data-appearance=blue] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=blue] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=blue] .tagButton--r2yPE:active{
  color:var(--sys-blue-text-main, #2b537e);
}
.tag--NwI_j[data-appearance=blue] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=blue] .tagButton--r2yPE:hover{
  background-color:var(--sys-blue-decor-hovered, #c5d9f6);
}
.tag--NwI_j[data-appearance=blue] .tagButton--r2yPE:active{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.tag--NwI_j[data-appearance=violet]{
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.tag--NwI_j[data-appearance=violet] .label--XUu32{
  overflow:hidden;
  color:var(--sys-violet-text-support, #8c639b);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=violet] .tagButton--r2yPE{
  color:var(--sys-violet-text-light, #b68bd5);
}
.tag--NwI_j[data-appearance=violet] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=violet] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=violet] .tagButton--r2yPE:active{
  color:var(--sys-violet-text-main, #59446a);
}
.tag--NwI_j[data-appearance=violet] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=violet] .tagButton--r2yPE:hover{
  background-color:var(--sys-violet-decor-hovered, #e1d0f7);
}
.tag--NwI_j[data-appearance=violet] .tagButton--r2yPE:active{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.tag--NwI_j[data-appearance=pink]{
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.tag--NwI_j[data-appearance=pink] .label--XUu32{
  overflow:hidden;
  color:var(--sys-pink-text-support, #ae5e80);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--NwI_j[data-appearance=pink] .tagButton--r2yPE{
  color:var(--sys-pink-text-light, #db85a2);
}
.tag--NwI_j[data-appearance=pink] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=pink] .tagButton--r2yPE:hover, .tag--NwI_j[data-appearance=pink] .tagButton--r2yPE:active{
  color:var(--sys-pink-text-main, #754158);
}
.tag--NwI_j[data-appearance=pink] .tagButton--r2yPE:focus, .tag--NwI_j[data-appearance=pink] .tagButton--r2yPE:hover{
  background-color:var(--sys-pink-decor-hovered, #f5c9d6);
}
.tag--NwI_j[data-appearance=pink] .tagButton--r2yPE:active{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}`,""]),d.locals={tag:"tag--NwI_j",tagButton:"tagButton--r2yPE",icon:"icon--Tp2MS",label:"label--XUu32"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"(v,m,o){o.d(m,{A:()=>n});var r=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=o.n(r),_=o("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),g=o.n(_),d=g()(u());d.push([v.id,`.tag--xEVFr{
  display:inline-flex;
  align-items:center;
  box-sizing:border-box;
  max-width:100%;
  text-decoration:none;
}
.tag--xEVFr:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.tag--xEVFr:active{
  outline:none;
}
.tag--xEVFr[data-size=xs]{
  padding-left:var(--space-tag-xs-from-label, 8px);
  padding-right:var(--space-tag-xs-from-label, 8px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
}
.tag--xEVFr[data-size=xs] .label--jA6rc{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.tag--xEVFr[data-size=s]{
  padding-left:var(--space-tag-s-from-label, 8px);
  padding-right:var(--space-tag-s-from-label, 8px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 4px);
}
.tag--xEVFr[data-size=s] .label--jA6rc{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.tag--xEVFr[data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.tag--xEVFr[data-appearance=neutral] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-neutral-text-support, #6d707f);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=neutral]:focus-visible, .tag--xEVFr[data-appearance=neutral]:hover{
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.tag--xEVFr[data-appearance=neutral]:active{
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.tag--xEVFr[data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.tag--xEVFr[data-appearance=primary] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-primary-text-support, #358561);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=primary]:focus-visible, .tag--xEVFr[data-appearance=primary]:hover{
  background-color:var(--sys-primary-decor-hovered, #b3deca);
}
.tag--xEVFr[data-appearance=primary]:active{
  background-color:var(--sys-primary-decor-activated, #99d7ba);
}
.tag--xEVFr[data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.tag--xEVFr[data-appearance=red] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-red-text-support, #ae514c);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=red]:focus-visible, .tag--xEVFr[data-appearance=red]:hover{
  background-color:var(--sys-red-decor-hovered, #fac1b3);
}
.tag--xEVFr[data-appearance=red]:active{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.tag--xEVFr[data-appearance=orange]{
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.tag--xEVFr[data-appearance=orange] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-orange-text-support, #bb733e);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=orange]:focus-visible, .tag--xEVFr[data-appearance=orange]:hover{
  background-color:var(--sys-orange-decor-hovered, #f8c699);
}
.tag--xEVFr[data-appearance=orange]:active{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.tag--xEVFr[data-appearance=yellow]{
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.tag--xEVFr[data-appearance=yellow] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-yellow-text-support, #b78c32);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=yellow]:focus-visible, .tag--xEVFr[data-appearance=yellow]:hover{
  background-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.tag--xEVFr[data-appearance=yellow]:active{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.tag--xEVFr[data-appearance=green]{
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.tag--xEVFr[data-appearance=green] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-green-text-support, #55915a);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=green]:focus-visible, .tag--xEVFr[data-appearance=green]:hover{
  background-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.tag--xEVFr[data-appearance=green]:active{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.tag--xEVFr[data-appearance=blue]{
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.tag--xEVFr[data-appearance=blue] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-blue-text-support, #4877b0);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=blue]:focus-visible, .tag--xEVFr[data-appearance=blue]:hover{
  background-color:var(--sys-blue-decor-hovered, #c5d9f6);
}
.tag--xEVFr[data-appearance=blue]:active{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.tag--xEVFr[data-appearance=violet]{
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.tag--xEVFr[data-appearance=violet] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-violet-text-support, #8c639b);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=violet]:focus-visible, .tag--xEVFr[data-appearance=violet]:hover{
  background-color:var(--sys-violet-decor-hovered, #e1d0f7);
}
.tag--xEVFr[data-appearance=violet]:active{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.tag--xEVFr[data-appearance=pink]{
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.tag--xEVFr[data-appearance=pink] .label--jA6rc{
  overflow:hidden;
  color:var(--sys-pink-text-support, #ae5e80);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--xEVFr[data-appearance=pink]:focus-visible, .tag--xEVFr[data-appearance=pink]:hover{
  background-color:var(--sys-pink-decor-hovered, #f5c9d6);
}
.tag--xEVFr[data-appearance=pink]:active{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}`,""]),d.locals={tag:"tag--xEVFr",label:"label--jA6rc"};const n=d}}]);})();
