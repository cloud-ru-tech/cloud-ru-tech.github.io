"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2710],{"./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js":((f,b,e)=>{e.d(b,{Z:()=>Oe});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(m),v=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),G=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const O={S:"s",M:"m",L:"l"},C={promoBadge:"card__promo-badge",functionBadge:"card__function-badge",droplist:"card__function-badge__droplist",option:"card__function-badge__option",check:"card__check",emblemPicture:"card__header__emblem-picture",emblemIcon:"card__header__emblem-icon",title:"card__header__title",description:"card__header__description",metadata:"card__header__metadata",anchor:"card__anchor"},Z=(0,r.createContext)({size:O.M,disabled:!1});function X(){return(0,r.useContext)(Z)}const p=(0,r.createContext)({visible:!1,setVisible:()=>{}});var w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(w),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=e.n(c),ge=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(ge),we=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),P=e.n(we),ze=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=e.n(ze),re=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=e.n(re),j=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/FunctionBadgeWrapper/styles.module.css"),E={};E.styleTagTransform=k(),E.setAttributes=P(),E.insert=T().bind(null,"head"),E.domAPI=n(),E.insertStyleElement=h();var to=_()(j.A,E);const D=j.A&&j.A.locals?j.A.locals:void 0;function Ke({children:a,className:l,alwaysVisible:d}){const[o,s]=(0,r.useState)(!1),y=d?!0:o;return(0,t.jsx)(p.Provider,{value:{visible:y,setVisible:s},children:(0,t.jsx)("div",{className:l,"data-visible":y||void 0,tabIndex:-1,children:(0,t.jsx)("div",{className:D.functionBadge,children:(0,t.jsx)("div",{className:D.functionRow,children:a})})})})}const Ue={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},Ne={Accent:"accent",Decor:"decor"},B={Xxs:"xxs",Xs:"xs",S:"s"};var le=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.9_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"),Q={};Q.styleTagTransform=k(),Q.setAttributes=P(),Q.insert=T().bind(null,"head"),Q.domAPI=n(),Q.insertStyleElement=h();var ro=_()(le.A,Q);const je=le.A&&le.A.locals?le.A.locals:void 0;var q=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(a);s<o.length;s++)l.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(a,o[s])&&(d[o[s]]=a[o[s]]);return d};function Fe(a){var{appearance:l=Ue.Primary,color:d=Ne.Accent,size:o=B.Xxs,className:s,text:y,beforeContent:H,afterContent:R,onClick:K}=a,te=q(a,["appearance","color","size","className","text","beforeContent","afterContent","onClick"]);const L=o!==B.Xxs,F=K?{role:"button",tabIndex:0,onClick:K}:{},Y=o===B.S?i.o.SansLabelM:i.o.SansLabelS;return(0,t.jsxs)("div",Object.assign({className:u()(je.promoTag,s)},(0,G.z7)(te),{"data-appearance":l,"data-color":d,"data-size":o},F,{children:[L&&H,!!y&&(0,t.jsx)(Y,{className:je.labelWrapper,tag:"span",children:y}),L&&R]}))}var ne=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/PromoBadge/styles.module.css"),$={};$.styleTagTransform=k(),$.setAttributes=P(),$.insert=T().bind(null,"head"),$.domAPI=n(),$.insertStyleElement=h();var so=_()(ne.A,$);const Se=ne.A&&ne.A.locals?ne.A.locals:void 0;function Xe({text:a,appearance:l="primary"}){return(0,t.jsx)("div",{className:Se.promoBadge,children:(0,t.jsx)(Fe,{appearance:l,text:a,"data-test-id":C.promoBadge,className:Se.promoTag})})}var qe=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),se=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Check/styles.module.css"),J={};J.styleTagTransform=k(),J.setAttributes=P(),J.insert=T().bind(null,"head"),J.domAPI=n(),J.insertStyleElement=h();var co=_()(se.A,J);const he=se.A&&se.A.locals?se.A.locals:void 0;function ye({className:a}){return(0,t.jsx)("div",{className:he.checkWrapper,children:(0,t.jsx)("div",{className:u()(he.checkContainer,a),"data-test-id":C.check,children:(0,t.jsx)(qe.A,{size:16})})})}const Ee=["Enter","Space"];var ie=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Card/styles.module.css"),ee={};ee.styleTagTransform=k(),ee.setAttributes=P(),ee.insert=T().bind(null,"head"),ee.domAPI=n(),ee.insertStyleElement=h();var de=_()(ie.A,ee);const A=ie.A&&ie.A.locals?ie.A.locals:void 0;var _e=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(a);s<o.length;s++)l.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(a,o[s])&&(d[o[s]]=a[o[s]]);return d};const Te=(0,r.forwardRef)((a,l)=>{var{onClick:d,disabled:o=!1,checked:s,outline:y,multipleSelection:H=!1,size:R=O.M,children:K,header:te,footer:L,functionBadge:F,promoBadge:Y,image:Do,className:Mo,href:Re,onKeyDown:Ge,name:no,badgeAlwaysVisible:Io}=a,Lo=_e(a,["onClick","disabled","checked","outline","multipleSelection","size","children","header","footer","functionBadge","promoBadge","image","className","href","onKeyDown","name","badgeAlwaysVisible"]);const eo=(0,r.useRef)(null),io=(0,r.useRef)(null),Bo=(0,r.useCallback)(We=>{var oo,ao;We.target===eo.current&&((Ee.includes(We.code)||We.key===" ")&&(Re?(oo=io.current)===null||oo===void 0||oo.click():(ao=eo.current)===null||ao===void 0||ao.click()),Ge==null||Ge(We))},[Re,Ge]),_o=(0,G.z7)(Lo);return(0,t.jsx)(Z.Provider,{value:{size:R,disabled:o},children:(0,t.jsxs)("div",Object.assign({ref:(0,v.A)(l,eo),className:u()(A.card,Mo)},_o,{onClick:d,"data-disabled":o||void 0,"data-checked":s||void 0,"data-outline":y||void 0,"data-pointer":d?!0:void 0,tabIndex:0,onKeyDown:Bo,children:[Do,(0,t.jsxs)("div",{className:A.composition,tabIndex:-1,children:[Re&&(0,t.jsx)("a",{ref:io,"data-test-id":C.anchor,tabIndex:-1,href:Re,className:A.anchor,"aria-label":_o["aria-label"]}),!o&&F&&(0,t.jsx)(Ke,{alwaysVisible:Io,className:A.functionBadgeWrapper,children:F}),(0,t.jsx)("div",{className:A.contentWrapper,children:(0,t.jsxs)("div",{className:A.content,"data-size":R,children:[te||null,K&&(0,t.jsx)(i.o,{family:"sans",size:R,purpose:"body",className:A.body,tag:"div",children:K}),L&&(0,t.jsx)("div",{className:A.footer,children:L})]})}),Y&&(0,t.jsx)(Xe,Object.assign({},typeof Y=="string"?{text:Y}:Y))]}),s&&H&&(0,t.jsx)(ye,{className:A.check}),no&&(0,t.jsx)("input",{name:no,type:"checkbox",checked:s,style:{display:"none"}})]}))})});var Pe=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js");const Ae={[O.S]:"m",[O.M]:"m",[O.L]:"l"};var U=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Dimension/styles.module.css"),W={};W.styleTagTransform=k(),W.setAttributes=P(),W.insert=T().bind(null,"head"),W.domAPI=n(),W.insertStyleElement=h();var Ve=_()(U.A,W);const V=U.A&&U.A.locals?U.A.locals:void 0;function Ce({dimension:a,currentValue:l,oldValue:d,size:o}){const{size:s}=X(),y=Ae[o||s];return(0,t.jsxs)("div",{className:V.wrapper,children:[a&&(0,t.jsx)(i.o,{purpose:"title",family:"sans",size:y,className:V.dimension,children:a}),(0,t.jsxs)("div",{className:V.valueContainer,children:[(0,t.jsx)(i.o,{purpose:"title",family:"sans",size:y,className:V.currentValue,children:l}),d&&(0,t.jsx)(i.o.CrossedOutBodyS,{className:V.oldValue,children:d})]})]})}var ce=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Promo/styles.module.css"),N={};N.styleTagTransform=k(),N.setAttributes=P(),N.insert=T().bind(null,"head"),N.domAPI=n(),N.insertStyleElement=h();var ue=_()(ce.A,N);const He=ce.A&&ce.A.locals?ce.A.locals:void 0;var pe=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(a);s<o.length;s++)l.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(a,o[s])&&(d[o[s]]=a[o[s]]);return d};function Ye(a){var{volume:l,button:d,className:o,size:s}=a,y=pe(a,["volume","button","className","size"]);const{disabled:H}=X();return(0,t.jsxs)("div",Object.assign({className:u()(He.promo,o)},(0,G.sg)(y),{children:[d&&(0,t.jsx)(Pe.L,Object.assign({},d,{appearance:"primary",size:"m",disabled:H})),l&&(0,t.jsx)(Ce,Object.assign({},l,{size:s}))]}))}var Ze=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/ButtonTonal.js"),oe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Action/styles.module.css"),ae={};ae.styleTagTransform=k(),ae.setAttributes=P(),ae.insert=T().bind(null,"head"),ae.domAPI=n(),ae.insertStyleElement=h();var lo=_()(oe.A,ae);const g=oe.A&&oe.A.locals?oe.A.locals:void 0;var x=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(a);s<o.length;s++)l.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(a,o[s])&&(d[o[s]]=a[o[s]]);return d};function S(a){var{button:l,secondaryButton:d,className:o}=a,s=x(a,["button","secondaryButton","className"]);const{disabled:y}=X();return(0,t.jsxs)("div",Object.assign({className:u()(g.action,o)},(0,G.sg)(s),{children:[(0,t.jsx)(Pe.L,Object.assign({},l,{appearance:"primary",size:"m",disabled:y})),d&&(0,t.jsx)(Ze.L,Object.assign({},d,{appearance:"neutral",size:"m",disabled:y}))]}))}var M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/CallToAction/styles.module.css"),I={};I.styleTagTransform=k(),I.setAttributes=P(),I.insert=T().bind(null,"head"),I.domAPI=n(),I.insertStyleElement=h();var z=_()(M.A,I);const ke=M.A&&M.A.locals?M.A.locals:void 0;var De=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(a);s<o.length;s++)l.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(a,o[s])&&(d[o[s]]=a[o[s]]);return d};function uo(a){var{label:l,icon:d,className:o}=a,s=De(a,["label","icon","className"]);return(0,t.jsxs)("div",Object.assign({className:u()(ke.callToAction,o)},(0,G.sg)(s),{children:[(0,t.jsx)(i.o.SansLabelL,{className:ke.label,children:l}),(0,t.jsx)("span",{className:ke.icon,children:d})]}))}var Qe;(function(a){a.Promo=Ye,a.Action=S,a.CallToAction=uo})(Qe||(Qe={}));var po=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js"),mo=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"),bo=e("./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/Tag/Tag.js"),vo=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),Me=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/FunctionBadge/styles.module.css"),me={};me.styleTagTransform=k(),me.setAttributes=P(),me.insert=T().bind(null,"head"),me.domAPI=n(),me.insertStyleElement=h();var Ro=_()(Me.A,me);const $e=Me.A&&Me.A.locals?Me.A.locals:void 0;var fo=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(a);s<o.length;s++)l.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(a,o[s])&&(d[o[s]]=a[o[s]]);return d};function go({icon:a,options:l}){const[d,o]=(0,r.useState)(!1),s=(0,r.useRef)(null),{setVisible:y}=(0,r.useContext)(p);(0,vo.N)(()=>{y&&y(d)},[d,y]);const H=(0,r.useCallback)(R=>{R.stopPropagation(),o(K=>!K)},[]);return(0,t.jsx)("span",{className:$e.wrapper,children:(0,t.jsx)(mo.i,{trigger:"clickAndFocusVisible",open:d,onOpenChange:o,widthStrategy:"gte",scroll:!0,"data-test-id":C.droplist,placement:"bottom-end",triggerElemRef:s,items:l.map(R=>{var{icon:K,tagLabel:te,onClick:L}=R,F=fo(R,["icon","tagLabel","onClick"]);return Object.assign(Object.assign({},F),{className:$e.item,beforeContent:K,afterContent:te?(0,t.jsx)(bo.v,{label:te}):void 0,onClick:Y=>{Y.stopPropagation(),o(!1),L==null||L(Y)}})}),children:(0,t.jsx)("button",{type:"button","data-test-id":C.functionBadge,className:$e.button,onClick:H,ref:s,children:a||(0,t.jsx)(po.A,{})})})})}var Je=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),ho=e("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.11_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),Ie=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Emblem/styled.module.css"),be={};be.styleTagTransform=k(),be.setAttributes=P(),be.insert=T().bind(null,"head"),be.domAPI=n(),be.insertStyleElement=h();var Go=_()(Ie.A,be);const yo=Ie.A&&Ie.A.locals?Ie.A.locals:void 0;function ko(a){return"src"in a&&"alt"in a}function xo(a){var l,d,o;const{size:s}=X();return ko(a)?(0,t.jsx)("img",{src:a.src,alt:a.alt,"data-size":s||void 0,className:yo.img,"data-test-id":C.emblemPicture}):(0,t.jsx)(ho.I,{icon:a.icon,appearance:(l=a.appearance)!==null&&l!==void 0?l:"primary",decor:(d=a.decor)!==null&&d!==void 0?d:!0,size:s,shape:(o=a.shape)!==null&&o!==void 0?o:"round","data-test-id":C.emblemIcon})}const Oo={[O.S]:"s",[O.M]:"m",[O.L]:"l"},wo={[O.S]:"m",[O.M]:"m",[O.L]:"l"},jo={title:1,description:2,metadata:1};var Le=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Header/styles.module.css"),ve={};ve.styleTagTransform=k(),ve.setAttributes=P(),ve.insert=T().bind(null,"head"),ve.domAPI=n(),ve.insertStyleElement=h();var Wo=_()(Le.A,ve);const xe=Le.A&&Le.A.locals?Le.A.locals:void 0;var So=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(a);s<o.length;s++)l.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(a,o[s])&&(d[o[s]]=a[o[s]]);return d};function Eo(a){var{title:l,description:d,metadata:o,truncate:s,emblem:y,className:H,size:R}=a,K=So(a,["title","description","metadata","truncate","emblem","className","size"]);const{size:te}=X(),L=R||te,F=Object.assign(Object.assign({},jo),s);return(0,t.jsxs)("div",Object.assign({className:u()(xe.titleLayout,H)},(0,G.sg)(K),{"data-size":L,children:[y&&(0,t.jsx)(xo,Object.assign({},y)),(0,t.jsxs)("div",{className:xe.contentLayout,children:[(0,t.jsx)(i.o,{family:"sans",size:Oo[L],purpose:"title",className:xe.title,"data-test-id":C.title,children:(0,t.jsx)(Je.m,{variant:"end",maxLines:F.title,text:l})}),o&&(0,t.jsx)(i.o.SansBodyS,{className:xe.metadata,children:(0,t.jsx)(Je.m,{variant:"end",maxLines:F.metadata,text:o,"data-test-id":C.metadata})}),d&&(0,t.jsx)(i.o,{family:"sans",size:wo[L],purpose:"body",className:xe.description,children:(0,t.jsx)(Je.m,{variant:"end",maxLines:F.description,text:d,"data-test-id":C.description})})]})]}))}const To={Little:"little",Middle:"middle",Background:"background"};var Be=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Image/styles.module.css"),fe={};fe.styleTagTransform=k(),fe.setAttributes=P(),fe.insert=T().bind(null,"head"),fe.domAPI=n(),fe.insertStyleElement=h();var zo=_()(Be.A,fe);const Po=Be.A&&Be.A.locals?Be.A.locals:void 0;var Ao=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(a);s<o.length;s++)l.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(a,o[s])&&(d[o[s]]=a[o[s]]);return d};function Co(a){var{src:l,alt:d,mode:o=To.Little,hideFading:s}=a,y=Ao(a,["src","alt","mode","hideFading"]);return(0,t.jsx)("img",Object.assign({},(0,G.z7)(y),{src:l,alt:d,"data-mode":o,className:Po.image,"data-fading":!s||void 0}))}const Oe=Te;Oe.Header=Eo,Oe.Footer=Qe,Oe.Image=Co,Oe.FunctionBadge=go}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js":((f,b,e)=>{e.d(b,{A:()=>X});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=function(p,w){var _={};for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&w.indexOf(c)<0&&(_[c]=p[c]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(p);n<c.length;n++)w.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(p,c[n])&&(_[c[n]]=p[c[n]]);return _};const r=m.forwardRef((p,w)=>{var{size:_=24}=p,c=u(p,["size"]);c.width=void 0,c.height=void 0;const n="-kebab-s";return typeof _=="number"&&(c.style||(c.style={}),c.style.width=_+"px",c.style.height=_+"px"),(0,t.jsx)("svg",Object.assign({ref:w,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},c,{children:(0,t.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var i=function(p,w){var _={};for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&w.indexOf(c)<0&&(_[c]=p[c]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(p);n<c.length;n++)w.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(p,c[n])&&(_[c[n]]=p[c[n]]);return _};const O=m.forwardRef((p,w)=>{var{size:_=24}=p,c=i(p,["size"]);c.width=void 0,c.height=void 0;const n="-kebab-xs";return typeof _=="number"&&(c.style||(c.style={}),c.style.width=_+"px",c.style.height=_+"px"),(0,t.jsx)("svg",Object.assign({ref:w,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},c,{children:(0,t.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var C=function(p,w){var _={};for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&w.indexOf(c)<0&&(_[c]=p[c]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(p);n<c.length;n++)w.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(p,c[n])&&(_[c[n]]=p[c[n]]);return _};const X=(0,m.forwardRef)((p,w)=>{var{size:_=24}=p,c=C(p,["size"]);return Number(_)>=20?(0,t.jsx)(r,Object.assign({ref:w,size:_},c)):(0,t.jsx)(O,Object.assign({ref:w,size:_},c))})}),"./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js":((f,b,e)=>{e.d(b,{i:()=>ze});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(m),v=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),G=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),O=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),C=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),Z=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),X=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),p=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),w=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),_=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),c=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),n=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),ge=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),T=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),we=function(h,re){var k={};for(var j in h)Object.prototype.hasOwnProperty.call(h,j)&&re.indexOf(j)<0&&(k[j]=h[j]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,j=Object.getOwnPropertySymbols(h);E<j.length;E++)re.indexOf(j[E])<0&&Object.prototype.propertyIsEnumerable.call(h,j[E])&&(k[j[E]]=h[j[E]]);return k};const P=["top","right","bottom","left"];function ze(h){var{items:re,search:k,pinBottom:j=[],pinTop:E=[],footerActiveElementsRefs:to,children:D,trigger:Ke,placement:Ue,widthStrategy:Ne,triggerElemRef:B,open:le,onOpenChange:Q,collapse:ro={},triggerClassName:je,selection:q,contentRender:Fe,size:ne="s",marker:$=!0,closeDroplistOnItemClick:so=!1,className:Se,listRef:Xe,untouchableScrollbars:qe=!1,virtualized:se=!1,closeOnPopstate:J}=h,co=we(h,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const he=(0,r.useMemo)(()=>!!k,[k]),[ye=[],Ee]=(0,G.I)(ro),ie=(0,r.useCallback)(g=>Ee(x=>x!=null&&x.includes(g)?x.filter(S=>S!==g):(x!=null?x:[]).concat([g])),[Ee]),[ee=!1,de]=(0,G.I)({value:le,defaultValue:!1,onChange:Q}),{searchItem:A,footerItems:_e}=(0,C.nG)({footerActiveElementsRefs:to}),Te=(0,r.useMemo)(()=>{const g=(0,Z.lg)({items:E,prefix:O.$.pinTop,parentId:O.$.default}),x=(0,Z.lg)({items:re,prefix:O.$.default,parentId:O.$.default}),S=(0,Z.lg)({items:j,prefix:O.$.pinBottom,parentId:O.$.default}),M=Object.assign(Object.assign(Object.assign({},g.flattenItems),S.flattenItems),x.flattenItems),I=Object.assign(Object.assign(Object.assign({},g.focusFlattenItems),S.focusFlattenItems),x.focusFlattenItems);return[..._e,A].forEach(z=>{M[z.id]=z,I[z.id]=Object.assign(Object.assign({},z),{originalId:z.id,items:[],key:z.id,allChildIds:[]})}),{items:x,pinTop:g,pinBottom:S,flattenItems:M,focusFlattenItems:I}},[re,E,j,A,_e]),{flattenItems:Pe,focusFlattenItems:Ae}=Te,U=we(Te,["flattenItems","focusFlattenItems"]),{ids:W,expandedIds:Ve}=(0,r.useMemo)(()=>{const{pinTop:g,items:x,pinBottom:S}=U;let M=[],I=[];return he&&M.push(A.id),[g,x,S].forEach(({focusFlattenItems:z,focusCloseChildIds:ke})=>{const De=(0,Z.e)({focusFlattenItems:z,focusCloseChildIds:ke,openCollapseItems:ye,isSelectionMultiple:(q==null?void 0:q.mode)==="multiple"});M=M.concat(De.ids),I=I.concat(De.expandedIds)}),_e.forEach(z=>{M.push(z.id)}),{ids:M,expandedIds:I}},[_e,he,U,ye,A.id,q==null?void 0:q.mode]),V=(0,r.useRef)(null),Ce=(0,r.useRef)(null),ce=W[0],{handleListKeyDownFactory:N,resetActiveItemId:ue,activeItemId:He,forceUpdateActiveItemId:pe}=(0,n.d)({mainRef:B!=null?B:V,focusFlattenItems:Ae,hasListInFocusChain:!0,firstItemId:ce}),Ye=(0,r.useCallback)(g=>N(W,Ve)(g),[N,W,Ve]),Ze=(0,r.useCallback)(g=>{ue(),de(g)},[ue,de]),oe=(0,r.useCallback)((g,x)=>{g.key==="ArrowDown"&&(g.preventDefault(),de(!0),setTimeout(()=>{var S;ue(),(S=Ce.current)===null||S===void 0||S.focus()},0)),g.key==="ArrowUp"&&de(!1),x==null||x(g)},[ue,de]),ae=(0,r.useMemo)(()=>(0,r.isValidElement)(D),[D]),lo=(0,r.useMemo)(()=>{if((0,r.isValidElement)(D)){const g=typeof D.props=="object"?D.props:{};return(0,r.cloneElement)(D,Object.assign(Object.assign({},g),{onKeyDown:x=>{var S;oe(x,(S=D.props)===null||S===void 0?void 0:S.onKeyDown)}}))}return typeof D=="function"?D({onKeyDown:oe}):D},[oe,D]);return(0,t.jsx)(X.Tr,{flattenItems:Pe,focusFlattenItems:Ae,contentRender:Fe,size:ne,marker:$,firstItemId:ce,virtualized:se,children:(0,t.jsx)(p.WM,Object.assign({},q,{children:(0,t.jsx)(w.bN.Provider,{value:{openCollapseItems:ye,toggleOpenCollapseItem:ie},children:(0,t.jsx)(_.m.Provider,{value:{activeItemId:He,handleListKeyDownFactory:N,forceUpdateActiveItemId:pe},children:(0,t.jsx)(c.K.Provider,{value:{closeDroplistOnItemClick:so,closeDroplist:()=>{var g;de(!1),ue(),(g=(B!=null?B:V).current)===null||g===void 0||g.focus()}},children:(0,t.jsx)(i.m,{content:(0,t.jsx)("div",{className:u()(T.A.wrapper,Se),children:(0,t.jsx)(ge.Q,Object.assign({},co,{items:U.items.focusCloseChildIds,pinTop:U.pinTop.focusCloseChildIds,pinBottom:U.pinBottom.focusCloseChildIds,virtualized:se,onKeyDown:Ye,searchItem:A,tabIndex:0,ref:(0,v.A)(Ce,Xe),search:k,onFocus:g=>{g.stopPropagation(),pe==null||pe(W[0])},limitedScrollHeight:!0,untouchableScrollbars:qe}))}),outsideClick:!0,triggerClassName:je,fallbackPlacements:P,trigger:Ke,placement:Ue,widthStrategy:Ne,triggerRef:B?ae&&B||void 0:V,open:ee,onOpenChange:Ze,closeOnPopstate:J,children:lo})})})})}))})}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Card/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.functionBadgeWrapper--fSxib{
  position:absolute;
  z-index:1;
  top:0;
  right:0;
  display:none;
}
.functionBadgeWrapper--fSxib[data-visible]{
  display:block;
}

.composition--GPYGY{
  border-radius:var(--radius-card-container, 8px);
  box-sizing:border-box;
  height:100%;
}

.contentWrapper--HFKA9{
  position:relative;
  height:100%;
}

.card--phfOf{
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
.card--phfOf:hover .functionBadgeWrapper--fSxib{
  display:block;
}
.card--phfOf[data-outline]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-neutral-decor-default, #dde0ea);
  outline-width:var(--border-width-card-container, 1px);
}
.card--phfOf:hover, .card--phfOf:focus-visible{
  --snack-ui-card-background-color:var(--sys-neutral-background2-level, #ffffff);
}
.card--phfOf:focus-visible{
  outline-width:var(--border-state-focus-l-border-width, 4px);
  outline-style:var(--border-state-focus-l-border-style, solid);
  outline-color:var(--border-state-focus-l-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.card--phfOf:focus-visible .functionBadgeWrapper--fSxib{
  display:block;
}
.card--phfOf:focus-visible .check--K_sHk{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--phfOf:focus-within .functionBadgeWrapper--fSxib{
  display:block;
}
.card--phfOf[data-checked]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
  outline-width:var(--border-width-card-container, 1px);
}
.card--phfOf[data-checked]:hover{
  outline-color:var(--sys-primary-decor-hovered, #b3deca);
  box-shadow:none;
}
.card--phfOf[data-checked] .contentWrapper--HFKA9::before{
  content:"";
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--phfOf[data-checked] .check--K_sHk{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--phfOf[data-checked]:focus-visible{
  outline-width:var(--border-state-focus-l-border-width, 4px);
  outline-style:var(--border-state-focus-l-border-style, solid);
  outline-color:var(--border-state-focus-l-border-color, );
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.card--phfOf[data-checked]:focus-visible .check--K_sHk{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--phfOf[data-disabled]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  cursor:not-allowed;
  opacity:var(--opacity-a048, 0.48);
  background-color:var(--sys-neutral-background, #eeeff3);
  outline-color:var(--sys-neutral-decor-default, #dde0ea);
  outline-width:var(--border-width-card-container, 1px);
}
.card--phfOf[data-disabled][data-checked] .check--K_sHk{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}
.card--phfOf[data-disabled] *{
  cursor:not-allowed;
}
.card--phfOf[data-pointer] *{
  cursor:pointer;
}
.card--phfOf[data-pointer][data-outline]:hover{
  outline-color:var(--sys-neutral-decor-hovered, #cfd2dc);
  box-shadow:none;
}
.card--phfOf[data-pointer][data-outline]:focus-visible{
  outline-width:var(--border-state-focus-l-border-width, 4px);
  outline-style:var(--border-state-focus-l-border-style, solid);
  outline-color:var(--border-state-focus-l-border-color, );
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.card--phfOf[data-pointer]:hover{
  box-shadow:var(--box-shadow-elevation-level2, 0px 0px 4px 0px rgba(0, 0, 0, 0.0392156863), 0px 4px 8px 0px rgba(0, 0, 0, 0.0392156863));
}
.card--phfOf[data-pointer][data-disabled] *{
  cursor:not-allowed;
}

.anchor--IY4dI{
  position:absolute;
  z-index:1;
  top:0;
  right:0;
  bottom:0;
  left:0;
  border-radius:var(--radius-card-container, 8px);
}

.body--Y52Qp{
  display:block;
  flex-grow:1;
  flex-shrink:1;
  width:100%;
  color:var(--sys-neutral-text-support, #6d707f);
  text-align:initial;
}

.content--Dwe5h{
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:flex-start;
  box-sizing:border-box;
  max-width:100%;
  height:100%;
}
.content--Dwe5h[data-size=s]{
  padding:var(--space-card-padding-container-s, 8px);
  gap:var(--space-card-gap-s, 4px);
}
.content--Dwe5h[data-size=m]{
  padding:var(--space-card-padding-container-m, 16px);
  gap:var(--space-card-gap-m, 8px);
}
.content--Dwe5h[data-size=l]{
  padding:var(--space-card-padding-container-l, 24px);
  gap:var(--space-card-gap-l, 16px);
}

.footer--XECBP{
  position:relative;
  box-sizing:border-box;
  width:100%;
}`,""]),r.locals={functionBadgeWrapper:"functionBadgeWrapper--fSxib",composition:"composition--GPYGY",contentWrapper:"contentWrapper--HFKA9",card:"card--phfOf",check:"check--K_sHk",anchor:"anchor--IY4dI",body:"body--Y52Qp",content:"content--Dwe5h",footer:"footer--XECBP"};const i=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Action/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.action--C3phV{
  gap:var(--space-card-gap-l, 16px);
  display:flex;
  align-items:center;
  justify-content:flex-start;
  box-sizing:border-box;
}`,""]),r.locals={action:"action--C3phV"};const i=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/CallToAction/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.callToAction--DoRj5{
  gap:var(--space-card-gap-s, 4px);
  display:flex;
  align-items:center;
  justify-content:flex-start;
  box-sizing:border-box;
}

.icon--ghFK6{
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-primary-accent-default, #389f74);
}
.icon--ghFK6 svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.label--O91Fp{
  color:var(--sys-primary-accent-default, #389f74);
}`,""]),r.locals={callToAction:"callToAction--DoRj5",icon:"icon--ghFK6",label:"label--O91Fp"};const i=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Dimension/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.wrapper--_zTfC{
  gap:var(--space-card-gap-s, 4px);
  display:flex;
  flex:1 0 auto;
  justify-content:flex-end;
  box-sizing:border-box;
}

.valueContainer--IBYaX{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  justify-content:flex-start;
  box-sizing:border-box;
}

.currentValue--WYUvl{
  color:var(--sys-neutral-text-main, #41424e);
}

.oldValue--H1fmx{
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.dimension--r7nnj{
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),r.locals={wrapper:"wrapper--_zTfC",valueContainer:"valueContainer--IBYaX",currentValue:"currentValue--WYUvl",oldValue:"oldValue--H1fmx",dimension:"dimension--r7nnj"};const i=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Promo/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.promo--HgnPX{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  box-sizing:border-box;
}`,""]),r.locals={promo:"promo--HgnPX"};const i=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/FunctionBadge/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.button--vSWqN{
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
.button--vSWqN:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.button--vSWqN:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-support, #6d707f);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--vSWqN:active{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.button--vSWqN svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.triggerClassName--qLNWh{
  --offset:var(--space-drop-list-drop-offset, 4px);
}

.wrapper--x6p3i{
  position:relative;
}

li.item--o2y4s{
  width:-moz-max-content;
  width:max-content;
}`,""]),r.locals={button:"button--vSWqN",triggerClassName:"triggerClassName--qLNWh",wrapper:"wrapper--x6p3i",item:"item--o2y4s"};const i=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Header/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.titleLayout--DOnSP{
  display:flex;
  align-items:center;
  box-sizing:border-box;
  width:100%;
}
.titleLayout--DOnSP[data-size=s]{
  gap:var(--space-card-gap-s, 4px);
}
.titleLayout--DOnSP[data-size=m]{
  gap:var(--space-card-gap-m, 8px);
}
.titleLayout--DOnSP[data-size=l]{
  gap:var(--space-card-gap-l, 16px);
}

.contentLayout--aPFYg{
  overflow:hidden;
  display:block;
  max-width:100%;
}

.title--Q8oqi{
  display:block;
  max-width:100%;
  color:var(--sys-neutral-text-main, #41424e);
}

.metadata--lqO9j{
  max-width:100%;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.description--ScQSa{
  max-width:100%;
  color:var(--sys-neutral-text-support, #6d707f);
}`,""]),r.locals={titleLayout:"titleLayout--DOnSP",contentLayout:"contentLayout--aPFYg",title:"title--Q8oqi",metadata:"metadata--lqO9j",description:"description--ScQSa"};const i=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Image/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.image--pVpuo{
  display:block;
  box-sizing:border-box;
  width:100%;
  height:auto;
  -o-object-fit:cover;
     object-fit:cover;
}
.image--pVpuo[data-mode=little]{
  height:var(--size-card-image-litte, 144px);
}
.image--pVpuo[data-mode=middle]{
  height:var(--size-card-image-middle, 240px);
}
.image--pVpuo[data-mode=background]{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -o-object-fit:cover;
     object-fit:cover;
}
.image--pVpuo[data-mode=background][data-fading]{
  -webkit-mask-image:var(--gradient-linear-mask-90deg, linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.0784313725) 33%, #ffffff 100%));
  mask-image:var(--gradient-linear-mask-90deg, linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.0784313725) 33%, #ffffff 100%));
}`,""]),r.locals={image:"image--pVpuo"};const i=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Check/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.checkWrapper--ya5G7{
  padding-top:var(--space-card-padding-check-badge, 4px);
  padding-left:var(--space-card-padding-check-badge, 4px);
  position:absolute;
  top:0;
  left:0;
}

.checkContainer--m1Z1E{
  width:var(--size-card-check, 16px);
  height:var(--size-card-check, 16px);
  border-radius:var(--radius-card-check, 4px);
  display:flex;
  align-items:center;
  justify-content:center;
}`,""]),r.locals={checkWrapper:"checkWrapper--ya5G7",checkContainer:"checkContainer--m1Z1E"};const i=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Emblem/styled.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.img--JTWNU{
  overflow:hidden;
  flex-shrink:0;
  box-sizing:border-box;
  -o-object-fit:cover;
     object-fit:cover;
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-style:solid;
}
.img--JTWNU[data-size=s]{
  width:var(--size-card-picture-s, 32px);
  height:var(--size-card-picture-s, 32px);
  border-width:var(--border-width-card-picture, 1px);
  border-radius:var(--radius-card-picture, 4px);
}
.img--JTWNU[data-size=m]{
  width:var(--size-card-picture-m, 40px);
  height:var(--size-card-picture-m, 40px);
  border-width:var(--border-width-card-picture, 1px);
  border-radius:var(--radius-card-picture, 4px);
}
.img--JTWNU[data-size=l]{
  width:var(--size-card-picture-l, 80px);
  height:var(--size-card-picture-l, 80px);
  border-width:var(--border-width-card-picture, 1px);
  border-radius:var(--radius-card-picture, 4px);
}`,""]),r.locals={img:"img--JTWNU"};const i=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/FunctionBadgeWrapper/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.functionBadge--OTGNk{
  padding-top:var(--space-card-padding-function-badge, 8px);
  padding-right:var(--space-card-padding-function-badge, 8px);
  position:absolute;
  top:0;
  right:0;
  box-sizing:border-box;
}

.functionRow--uUxLW{
  position:relative;
}
.functionRow--uUxLW::before{
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
}`,""]),r.locals={functionBadge:"functionBadge--OTGNk",functionRow:"functionRow--uUxLW"};const i=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/PromoBadge/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.promoBadge--ZCoo3{
  padding-top:var(--space-card-padding-promo-badge, 4px);
  padding-right:var(--space-card-padding-promo-badge, 4px);
  position:absolute;
  top:0;
  right:0;
  box-sizing:border-box;
}

div.promoTag--sbE5b{
  display:flex;
}`,""]),r.locals={promoBadge:"promoBadge--ZCoo3",promoTag:"promoTag--sbE5b"};const i=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.9_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(t),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),r=v()(m());r.push([f.id,`.promoTag--mqhSG{
  display:inline-flex;
  align-items:center;
  white-space:nowrap;
}
.promoTag--mqhSG[data-color=accent][data-appearance=neutral]{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.promoTag--mqhSG[data-color=accent][data-appearance=neutral][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-neutral-decor-activated, #b6bac7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=accent][data-appearance=neutral][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=accent][data-appearance=neutral][role=button]:hover{
  background-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.promoTag--mqhSG[data-color=accent][data-appearance=neutral][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=accent][data-appearance=neutral][role=button]:active[data-color=accent]{
  background-color:var(--sys-neutral-accent-pressed, #656774);
}
.promoTag--mqhSG[data-color=accent][data-appearance=neutral][role=button]:active[data-color=decor]{
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.promoTag--mqhSG[data-color=accent][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.promoTag--mqhSG[data-color=accent][data-appearance=primary][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=accent][data-appearance=primary][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=accent][data-appearance=primary][role=button]:hover{
  background-color:var(--sys-primary-accent-hovered, #37946e);
}
.promoTag--mqhSG[data-color=accent][data-appearance=primary][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=accent][data-appearance=primary][role=button]:active[data-color=accent]{
  background-color:var(--sys-primary-accent-pressed, #358561);
}
.promoTag--mqhSG[data-color=accent][data-appearance=primary][role=button]:active[data-color=decor]{
  background-color:var(--sys-primary-decor-activated, #99d7ba);
}
.promoTag--mqhSG[data-color=accent][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.promoTag--mqhSG[data-color=accent][data-appearance=red][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-red-decor-activated, #fbab99);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=accent][data-appearance=red][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=accent][data-appearance=red][role=button]:hover{
  background-color:var(--sys-red-accent-hovered, #bd4844);
}
.promoTag--mqhSG[data-color=accent][data-appearance=red][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=accent][data-appearance=red][role=button]:active[data-color=accent]{
  background-color:var(--sys-red-accent-pressed, #ae514c);
}
.promoTag--mqhSG[data-color=accent][data-appearance=red][role=button]:active[data-color=decor]{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.promoTag--mqhSG[data-color=accent][data-appearance=orange]{
  color:var(--sys-orange-on-accent, #fffcf4);
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.promoTag--mqhSG[data-color=accent][data-appearance=orange][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-orange-decor-activated, #f5b27b);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=accent][data-appearance=orange][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=accent][data-appearance=orange][role=button]:hover{
  background-color:var(--sys-orange-accent-hovered, #ec823b);
}
.promoTag--mqhSG[data-color=accent][data-appearance=orange][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=accent][data-appearance=orange][role=button]:active[data-color=accent]{
  background-color:var(--sys-orange-accent-pressed, #e78940);
}
.promoTag--mqhSG[data-color=accent][data-appearance=orange][role=button]:active[data-color=decor]{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.promoTag--mqhSG[data-color=accent][data-appearance=yellow]{
  color:var(--sys-yellow-on-accent, #583f1f);
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.promoTag--mqhSG[data-color=accent][data-appearance=yellow][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=accent][data-appearance=yellow][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=accent][data-appearance=yellow][role=button]:hover{
  background-color:var(--sys-yellow-accent-hovered, #d5a133);
}
.promoTag--mqhSG[data-color=accent][data-appearance=yellow][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=accent][data-appearance=yellow][role=button]:active[data-color=accent]{
  background-color:var(--sys-yellow-accent-pressed, #d3a736);
}
.promoTag--mqhSG[data-color=accent][data-appearance=yellow][role=button]:active[data-color=decor]{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.promoTag--mqhSG[data-color=accent][data-appearance=green]{
  color:var(--sys-green-on-accent, #fcfefa);
  background-color:var(--sys-green-accent-default, #57b762);
}
.promoTag--mqhSG[data-color=accent][data-appearance=green][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=accent][data-appearance=green][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=accent][data-appearance=green][role=button]:hover{
  background-color:var(--sys-green-accent-hovered, #5daa63);
}
.promoTag--mqhSG[data-color=accent][data-appearance=green][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=accent][data-appearance=green][role=button]:active[data-color=accent]{
  background-color:var(--sys-green-accent-pressed, #55915a);
}
.promoTag--mqhSG[data-color=accent][data-appearance=green][role=button]:active[data-color=decor]{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.promoTag--mqhSG[data-color=accent][data-appearance=blue]{
  color:var(--sys-blue-on-accent, #fdfeff);
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.promoTag--mqhSG[data-color=accent][data-appearance=blue][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-blue-decor-activated, #aac4ea);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=accent][data-appearance=blue][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=accent][data-appearance=blue][role=button]:hover{
  background-color:var(--sys-blue-accent-hovered, #4e80bf);
}
.promoTag--mqhSG[data-color=accent][data-appearance=blue][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=accent][data-appearance=blue][role=button]:active[data-color=accent]{
  background-color:var(--sys-blue-accent-pressed, #4877b0);
}
.promoTag--mqhSG[data-color=accent][data-appearance=blue][role=button]:active[data-color=decor]{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.promoTag--mqhSG[data-color=accent][data-appearance=violet]{
  color:var(--sys-violet-on-accent, #fdfdfd);
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.promoTag--mqhSG[data-color=accent][data-appearance=violet][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-violet-decor-activated, #ceb7e7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=accent][data-appearance=violet][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=accent][data-appearance=violet][role=button]:hover{
  background-color:var(--sys-violet-accent-hovered, #9a66ae);
}
.promoTag--mqhSG[data-color=accent][data-appearance=violet][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=accent][data-appearance=violet][role=button]:active[data-color=accent]{
  background-color:var(--sys-violet-accent-pressed, #8c639b);
}
.promoTag--mqhSG[data-color=accent][data-appearance=violet][role=button]:active[data-color=decor]{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.promoTag--mqhSG[data-color=accent][data-appearance=pink]{
  color:var(--sys-pink-on-accent, #fdfcfc);
  background-color:var(--sys-pink-accent-default, #d1668e);
}
.promoTag--mqhSG[data-color=accent][data-appearance=pink][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-pink-decor-activated, #e8b1c1);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=accent][data-appearance=pink][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=accent][data-appearance=pink][role=button]:hover{
  background-color:var(--sys-pink-accent-hovered, #c06088);
}
.promoTag--mqhSG[data-color=accent][data-appearance=pink][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=accent][data-appearance=pink][role=button]:active[data-color=accent]{
  background-color:var(--sys-pink-accent-pressed, #ae5e80);
}
.promoTag--mqhSG[data-color=accent][data-appearance=pink][role=button]:active[data-color=decor]{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}
.promoTag--mqhSG[data-color=decor][data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.promoTag--mqhSG[data-color=decor][data-appearance=neutral][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-neutral-decor-activated, #b6bac7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=decor][data-appearance=neutral][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=decor][data-appearance=neutral][role=button]:hover{
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.promoTag--mqhSG[data-color=decor][data-appearance=neutral][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=decor][data-appearance=neutral][role=button]:active[data-color=accent]{
  background-color:var(--sys-neutral-accent-pressed, #656774);
}
.promoTag--mqhSG[data-color=decor][data-appearance=neutral][role=button]:active[data-color=decor]{
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.promoTag--mqhSG[data-color=decor][data-appearance=primary]{
  color:var(--sys-primary-text-main, #1b5840);
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.promoTag--mqhSG[data-color=decor][data-appearance=primary][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=decor][data-appearance=primary][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=decor][data-appearance=primary][role=button]:hover{
  background-color:var(--sys-primary-decor-hovered, #b3deca);
}
.promoTag--mqhSG[data-color=decor][data-appearance=primary][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=decor][data-appearance=primary][role=button]:active[data-color=accent]{
  background-color:var(--sys-primary-accent-pressed, #358561);
}
.promoTag--mqhSG[data-color=decor][data-appearance=primary][role=button]:active[data-color=decor]{
  background-color:var(--sys-primary-decor-activated, #99d7ba);
}
.promoTag--mqhSG[data-color=decor][data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.promoTag--mqhSG[data-color=decor][data-appearance=red][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-red-decor-activated, #fbab99);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=decor][data-appearance=red][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=decor][data-appearance=red][role=button]:hover{
  background-color:var(--sys-red-decor-hovered, #fac1b3);
}
.promoTag--mqhSG[data-color=decor][data-appearance=red][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=decor][data-appearance=red][role=button]:active[data-color=accent]{
  background-color:var(--sys-red-accent-pressed, #ae514c);
}
.promoTag--mqhSG[data-color=decor][data-appearance=red][role=button]:active[data-color=decor]{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.promoTag--mqhSG[data-color=decor][data-appearance=orange]{
  color:var(--sys-orange-text-main, #884c23);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.promoTag--mqhSG[data-color=decor][data-appearance=orange][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-orange-decor-activated, #f5b27b);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=decor][data-appearance=orange][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=decor][data-appearance=orange][role=button]:hover{
  background-color:var(--sys-orange-decor-hovered, #f8c699);
}
.promoTag--mqhSG[data-color=decor][data-appearance=orange][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=decor][data-appearance=orange][role=button]:active[data-color=accent]{
  background-color:var(--sys-orange-accent-pressed, #e78940);
}
.promoTag--mqhSG[data-color=decor][data-appearance=orange][role=button]:active[data-color=decor]{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.promoTag--mqhSG[data-color=decor][data-appearance=yellow]{
  color:var(--sys-yellow-text-main, #815f19);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.promoTag--mqhSG[data-color=decor][data-appearance=yellow][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=decor][data-appearance=yellow][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=decor][data-appearance=yellow][role=button]:hover{
  background-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.promoTag--mqhSG[data-color=decor][data-appearance=yellow][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=decor][data-appearance=yellow][role=button]:active[data-color=accent]{
  background-color:var(--sys-yellow-accent-pressed, #d3a736);
}
.promoTag--mqhSG[data-color=decor][data-appearance=yellow][role=button]:active[data-color=decor]{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.promoTag--mqhSG[data-color=decor][data-appearance=green]{
  color:var(--sys-green-text-main, #3d6035);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.promoTag--mqhSG[data-color=decor][data-appearance=green][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=decor][data-appearance=green][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=decor][data-appearance=green][role=button]:hover{
  background-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.promoTag--mqhSG[data-color=decor][data-appearance=green][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=decor][data-appearance=green][role=button]:active[data-color=accent]{
  background-color:var(--sys-green-accent-pressed, #55915a);
}
.promoTag--mqhSG[data-color=decor][data-appearance=green][role=button]:active[data-color=decor]{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.promoTag--mqhSG[data-color=decor][data-appearance=blue]{
  color:var(--sys-blue-text-main, #2b537e);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.promoTag--mqhSG[data-color=decor][data-appearance=blue][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-blue-decor-activated, #aac4ea);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=decor][data-appearance=blue][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=decor][data-appearance=blue][role=button]:hover{
  background-color:var(--sys-blue-decor-hovered, #c5d9f6);
}
.promoTag--mqhSG[data-color=decor][data-appearance=blue][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=decor][data-appearance=blue][role=button]:active[data-color=accent]{
  background-color:var(--sys-blue-accent-pressed, #4877b0);
}
.promoTag--mqhSG[data-color=decor][data-appearance=blue][role=button]:active[data-color=decor]{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.promoTag--mqhSG[data-color=decor][data-appearance=violet]{
  color:var(--sys-violet-text-main, #59446a);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.promoTag--mqhSG[data-color=decor][data-appearance=violet][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-violet-decor-activated, #ceb7e7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=decor][data-appearance=violet][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=decor][data-appearance=violet][role=button]:hover{
  background-color:var(--sys-violet-decor-hovered, #e1d0f7);
}
.promoTag--mqhSG[data-color=decor][data-appearance=violet][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=decor][data-appearance=violet][role=button]:active[data-color=accent]{
  background-color:var(--sys-violet-accent-pressed, #8c639b);
}
.promoTag--mqhSG[data-color=decor][data-appearance=violet][role=button]:active[data-color=decor]{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.promoTag--mqhSG[data-color=decor][data-appearance=pink]{
  color:var(--sys-pink-text-main, #754158);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.promoTag--mqhSG[data-color=decor][data-appearance=pink][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-pink-decor-activated, #e8b1c1);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--mqhSG[data-color=decor][data-appearance=pink][role=button]{
  cursor:pointer;
}
.promoTag--mqhSG[data-color=decor][data-appearance=pink][role=button]:hover{
  background-color:var(--sys-pink-decor-hovered, #f5c9d6);
}
.promoTag--mqhSG[data-color=decor][data-appearance=pink][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--mqhSG[data-color=decor][data-appearance=pink][role=button]:active[data-color=accent]{
  background-color:var(--sys-pink-accent-pressed, #ae5e80);
}
.promoTag--mqhSG[data-color=decor][data-appearance=pink][role=button]:active[data-color=decor]{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}
.promoTag--mqhSG[data-size=xxs]{
  height:var(--size-promo-tag-height-xxs, 16px);
  padding-left:var(--space-promo-tag-horizontal-padding-xxs, 0px);
  padding-right:var(--space-promo-tag-horizontal-padding-xxs, 0px);
  border-radius:var(--radius-promo-tag-xxs, 4px);
  border-width:var(--border-width-promo-tag-single, 1px);
}
.promoTag--mqhSG[data-size=xxs] .labelWrapper--Upwhz{
  padding-left:var(--space-promo-tag-label-wrapper-xxs, 4px);
  padding-right:var(--space-promo-tag-label-wrapper-xxs, 4px);
}
.promoTag--mqhSG[data-size=xs]{
  height:var(--size-promo-tag-height-xs, 24px);
  padding-left:var(--space-promo-tag-horizontal-padding-xs, 0px);
  padding-right:var(--space-promo-tag-horizontal-padding-xs, 0px);
  border-radius:var(--radius-promo-tag-xs, 4px);
  border-width:var(--border-width-promo-tag-single, 1px);
}
.promoTag--mqhSG[data-size=xs] .labelWrapper--Upwhz{
  padding-left:var(--space-promo-tag-label-wrapper-xs, 4px);
  padding-right:var(--space-promo-tag-label-wrapper-xs, 4px);
}
.promoTag--mqhSG[data-size=s]{
  height:var(--size-promo-tag-height-s, 32px);
  padding-left:var(--space-promo-tag-horizontal-padding-s, 4px);
  padding-right:var(--space-promo-tag-horizontal-padding-s, 4px);
  border-radius:var(--radius-promo-tag-s, 8px);
  border-width:var(--border-width-promo-tag-single, 1px);
}
.promoTag--mqhSG[data-size=s] .labelWrapper--Upwhz{
  padding-left:var(--space-promo-tag-label-wrapper-s, 4px);
  padding-right:var(--space-promo-tag-label-wrapper-s, 4px);
}`,""]),r.locals={promoTag:"promoTag--mqhSG",labelWrapper:"labelWrapper--Upwhz"};const i=r})}]);})();
