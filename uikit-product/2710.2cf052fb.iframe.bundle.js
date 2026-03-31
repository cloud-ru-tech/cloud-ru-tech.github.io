"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2710],{"./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js":((f,b,e)=>{e.d(b,{Z:()=>Q});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(m),v=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),M=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const y={S:"s",M:"m",L:"l"},T={promoBadge:"card__promo-badge",functionBadge:"card__function-badge",droplist:"card__function-badge__droplist",option:"card__function-badge__option",check:"card__check",emblemPicture:"card__header__emblem-picture",emblemIcon:"card__header__emblem-icon",title:"card__header__title",description:"card__header__description",metadata:"card__header__metadata",anchor:"card__anchor"},me=(0,s.createContext)({size:y.M,disabled:!1});function B(){return(0,s.useContext)(me)}const p=(0,s.createContext)({visible:!1,setVisible:()=>{}});var h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(h),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=e.n(c),be=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),x=e.n(be),De=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),k=e.n(De),Me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=e.n(Me),Ge=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),S=e.n(Ge),J=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/FunctionBadgeWrapper/styles.module.css"),I={};I.styleTagTransform=S(),I.setAttributes=k(),I.insert=x().bind(null,"head"),I.domAPI=n(),I.insertStyleElement=w();var Eo=_()(J.A,I);const Se=J.A&&J.A.locals?J.A.locals:void 0;function Be({children:a,className:l,alwaysVisible:d}){const[o,t]=(0,s.useState)(!1),g=d?!0:o;return(0,r.jsx)(p.Provider,{value:{visible:g,setVisible:t},children:(0,r.jsx)("div",{className:l,"data-visible":g||void 0,tabIndex:-1,children:(0,r.jsx)("div",{className:Se.functionBadge,children:(0,r.jsx)("div",{className:Se.functionRow,children:a})})})})}const Ie={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},Le={Accent:"accent",Decor:"decor"},ve={Xxs:"xxs",Xs:"xs",S:"s"};var $=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.9_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"),L={};L.styleTagTransform=S(),L.setAttributes=k(),L.insert=x().bind(null,"head"),L.domAPI=n(),L.insertStyleElement=w();var Po=_()($.A,L);const Oe=$.A&&$.A.locals?$.A.locals:void 0;var Re=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function ze(a){var{appearance:l=Ie.Primary,color:d=Le.Accent,size:o=ve.Xxs,className:t,text:g,beforeContent:C,afterContent:j,onClick:E}=a,G=Re(a,["appearance","color","size","className","text","beforeContent","afterContent","onClick"]);const O=o!==ve.Xxs,P=E?{role:"button",tabIndex:0,onClick:E}:{},D=o===ve.S?i.o.SansLabelM:i.o.SansLabelS;return(0,r.jsxs)("div",Object.assign({className:u()(Oe.promoTag,t)},(0,M.z7)(G),{"data-appearance":l,"data-color":d,"data-size":o},P,{children:[O&&C,!!g&&(0,r.jsx)(D,{className:Oe.labelWrapper,tag:"span",children:g}),O&&j]}))}var ee=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/PromoBadge/styles.module.css"),R={};R.styleTagTransform=S(),R.setAttributes=k(),R.insert=x().bind(null,"head"),R.domAPI=n(),R.insertStyleElement=w();var Ao=_()(ee.A,R);const Te=ee.A&&ee.A.locals?ee.A.locals:void 0;function We({text:a,appearance:l="primary"}){return(0,r.jsx)("div",{className:Te.promoBadge,children:(0,r.jsx)(ze,{appearance:l,text:a,"data-test-id":T.promoBadge,className:Te.promoTag})})}var Ke=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),oe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Check/styles.module.css"),z={};z.styleTagTransform=S(),z.setAttributes=k(),z.insert=x().bind(null,"head"),z.domAPI=n(),z.insertStyleElement=w();var Co=_()(oe.A,z);const je=oe.A&&oe.A.locals?oe.A.locals:void 0;function Ue({className:a}){return(0,r.jsx)("div",{className:je.checkWrapper,children:(0,r.jsx)("div",{className:u()(je.checkContainer,a),"data-test-id":T.check,children:(0,r.jsx)(Ke.A,{size:16})})})}const Ne=["Enter","Space"];var ae=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Card/styles.module.css"),W={};W.styleTagTransform=S(),W.setAttributes=k(),W.insert=x().bind(null,"head"),W.domAPI=n(),W.insertStyleElement=w();var Do=_()(ae.A,W);const A=ae.A&&ae.A.locals?ae.A.locals:void 0;var Fe=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};const qe=(0,s.forwardRef)((a,l)=>{var{onClick:d,disabled:o=!1,checked:t,outline:g,multipleSelection:C=!1,size:j=y.M,children:E,header:G,footer:O,functionBadge:P,promoBadge:D,image:wo,className:So,href:_e,onKeyDown:ue,name:Pe,badgeAlwaysVisible:Oo}=a,To=Fe(a,["onClick","disabled","checked","outline","multipleSelection","size","children","header","footer","functionBadge","promoBadge","image","className","href","onKeyDown","name","badgeAlwaysVisible"]);const xe=(0,s.useRef)(null),Ae=(0,s.useRef)(null),jo=(0,s.useCallback)(pe=>{var ke,we;pe.target===xe.current&&((Ne.includes(pe.code)||pe.key===" ")&&(_e?(ke=Ae.current)===null||ke===void 0||ke.click():(we=xe.current)===null||we===void 0||we.click()),ue==null||ue(pe))},[_e,ue]),Ce=(0,M.z7)(To);return(0,r.jsx)(me.Provider,{value:{size:j,disabled:o},children:(0,r.jsxs)("div",Object.assign({ref:(0,v.A)(l,xe),className:u()(A.card,So)},Ce,{onClick:d,"data-disabled":o||void 0,"data-checked":t||void 0,"data-outline":g||void 0,"data-pointer":d?!0:void 0,tabIndex:0,onKeyDown:jo,children:[wo,(0,r.jsxs)("div",{className:A.composition,tabIndex:-1,children:[_e&&(0,r.jsx)("a",{ref:Ae,"data-test-id":T.anchor,tabIndex:-1,href:_e,className:A.anchor,"aria-label":Ce["aria-label"]}),!o&&P&&(0,r.jsx)(Be,{alwaysVisible:Oo,className:A.functionBadgeWrapper,children:P}),(0,r.jsx)("div",{className:A.contentWrapper,children:(0,r.jsxs)("div",{className:A.content,"data-size":j,children:[G||null,E&&(0,r.jsx)(i.o,{family:"sans",size:j,purpose:"body",className:A.body,tag:"div",children:E}),O&&(0,r.jsx)("div",{className:A.footer,children:O})]})}),D&&(0,r.jsx)(We,Object.assign({},typeof D=="string"?{text:D}:D))]}),t&&C&&(0,r.jsx)(Ue,{className:A.check}),Pe&&(0,r.jsx)("input",{name:Pe,type:"checkbox",checked:t,style:{display:"none"}})]}))})});var Ee=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js");const Xe={[y.S]:"m",[y.M]:"m",[y.L]:"l"};var re=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Dimension/styles.module.css"),K={};K.styleTagTransform=S(),K.setAttributes=k(),K.insert=x().bind(null,"head"),K.domAPI=n(),K.insertStyleElement=w();var Mo=_()(re.A,K);const Y=re.A&&re.A.locals?re.A.locals:void 0;function Ve({dimension:a,currentValue:l,oldValue:d,size:o}){const{size:t}=B(),g=Xe[o||t];return(0,r.jsxs)("div",{className:Y.wrapper,children:[a&&(0,r.jsx)(i.o,{purpose:"title",family:"sans",size:g,className:Y.dimension,children:a}),(0,r.jsxs)("div",{className:Y.valueContainer,children:[(0,r.jsx)(i.o,{purpose:"title",family:"sans",size:g,className:Y.currentValue,children:l}),d&&(0,r.jsx)(i.o.CrossedOutBodyS,{className:Y.oldValue,children:d})]})]})}var te=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Promo/styles.module.css"),U={};U.styleTagTransform=S(),U.setAttributes=k(),U.insert=x().bind(null,"head"),U.domAPI=n(),U.insertStyleElement=w();var Go=_()(te.A,U);const He=te.A&&te.A.locals?te.A.locals:void 0;var Ye=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function Ze(a){var{volume:l,button:d,className:o,size:t}=a,g=Ye(a,["volume","button","className","size"]);const{disabled:C}=B();return(0,r.jsxs)("div",Object.assign({className:u()(He.promo,o)},(0,M.sg)(g),{children:[d&&(0,r.jsx)(Ee.L,Object.assign({},d,{appearance:"primary",size:"m",disabled:C})),l&&(0,r.jsx)(Ve,Object.assign({},l,{size:t}))]}))}var Qe=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/ButtonTonal.js"),se=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Action/styles.module.css"),N={};N.styleTagTransform=S(),N.setAttributes=k(),N.insert=x().bind(null,"head"),N.domAPI=n(),N.insertStyleElement=w();var Bo=_()(se.A,N);const Je=se.A&&se.A.locals?se.A.locals:void 0;var $e=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function eo(a){var{button:l,secondaryButton:d,className:o}=a,t=$e(a,["button","secondaryButton","className"]);const{disabled:g}=B();return(0,r.jsxs)("div",Object.assign({className:u()(Je.action,o)},(0,M.sg)(t),{children:[(0,r.jsx)(Ee.L,Object.assign({},l,{appearance:"primary",size:"m",disabled:g})),d&&(0,r.jsx)(Qe.L,Object.assign({},d,{appearance:"neutral",size:"m",disabled:g}))]}))}var de=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/CallToAction/styles.module.css"),F={};F.styleTagTransform=S(),F.setAttributes=k(),F.insert=x().bind(null,"head"),F.domAPI=n(),F.insertStyleElement=w();var Io=_()(de.A,F);const fe=de.A&&de.A.locals?de.A.locals:void 0;var oo=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function ao(a){var{label:l,icon:d,className:o}=a,t=oo(a,["label","icon","className"]);return(0,r.jsxs)("div",Object.assign({className:u()(fe.callToAction,o)},(0,M.sg)(t),{children:[(0,r.jsx)(i.o.SansLabelL,{className:fe.label,children:l}),(0,r.jsx)("span",{className:fe.icon,children:d})]}))}var ge;(function(a){a.Promo=Ze,a.Action=eo,a.CallToAction=ao})(ge||(ge={}));var ro=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js"),to=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"),so=e("./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/Tag/Tag.js"),co=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),ce=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/FunctionBadge/styles.module.css"),q={};q.styleTagTransform=S(),q.setAttributes=k(),q.insert=x().bind(null,"head"),q.domAPI=n(),q.insertStyleElement=w();var Lo=_()(ce.A,q);const he=ce.A&&ce.A.locals?ce.A.locals:void 0;var lo=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function no({icon:a,options:l}){const[d,o]=(0,s.useState)(!1),t=(0,s.useRef)(null),{setVisible:g}=(0,s.useContext)(p);(0,co.N)(()=>{g&&g(d)},[d,g]);const C=(0,s.useCallback)(j=>{j.stopPropagation(),o(E=>!E)},[]);return(0,r.jsx)("span",{className:he.wrapper,children:(0,r.jsx)(to.i,{trigger:"clickAndFocusVisible",open:d,onOpenChange:o,widthStrategy:"gte",scroll:!0,"data-test-id":T.droplist,placement:"bottom-end",triggerElemRef:t,items:l.map(j=>{var{icon:E,tagLabel:G,onClick:O}=j,P=lo(j,["icon","tagLabel","onClick"]);return Object.assign(Object.assign({},P),{className:he.item,beforeContent:E,afterContent:G?(0,r.jsx)(so.v,{label:G}):void 0,onClick:D=>{D.stopPropagation(),o(!1),O==null||O(D)}})}),children:(0,r.jsx)("button",{type:"button","data-test-id":T.functionBadge,className:he.button,onClick:C,ref:t,children:a||(0,r.jsx)(ro.A,{})})})})}var ye=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),io=e("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.11_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),le=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Emblem/styled.module.css"),X={};X.styleTagTransform=S(),X.setAttributes=k(),X.insert=x().bind(null,"head"),X.domAPI=n(),X.insertStyleElement=w();var Ro=_()(le.A,X);const _o=le.A&&le.A.locals?le.A.locals:void 0;function uo(a){return"src"in a&&"alt"in a}function po(a){var l,d,o;const{size:t}=B();return uo(a)?(0,r.jsx)("img",{src:a.src,alt:a.alt,"data-size":t||void 0,className:_o.img,"data-test-id":T.emblemPicture}):(0,r.jsx)(io.I,{icon:a.icon,appearance:(l=a.appearance)!==null&&l!==void 0?l:"primary",decor:(d=a.decor)!==null&&d!==void 0?d:!0,size:t,shape:(o=a.shape)!==null&&o!==void 0?o:"round","data-test-id":T.emblemIcon})}const mo={[y.S]:"s",[y.M]:"m",[y.L]:"l"},bo={[y.S]:"m",[y.M]:"m",[y.L]:"l"},vo={title:1,description:2,metadata:1};var ne=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Header/styles.module.css"),V={};V.styleTagTransform=S(),V.setAttributes=k(),V.insert=x().bind(null,"head"),V.domAPI=n(),V.insertStyleElement=w();var zo=_()(ne.A,V);const Z=ne.A&&ne.A.locals?ne.A.locals:void 0;var fo=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function go(a){var{title:l,description:d,metadata:o,truncate:t,emblem:g,className:C,size:j}=a,E=fo(a,["title","description","metadata","truncate","emblem","className","size"]);const{size:G}=B(),O=j||G,P=Object.assign(Object.assign({},vo),t);return(0,r.jsxs)("div",Object.assign({className:u()(Z.titleLayout,C)},(0,M.sg)(E),{"data-size":O,children:[g&&(0,r.jsx)(po,Object.assign({},g)),(0,r.jsxs)("div",{className:Z.contentLayout,children:[(0,r.jsx)(i.o,{family:"sans",size:mo[O],purpose:"title",className:Z.title,"data-test-id":T.title,children:(0,r.jsx)(ye.m,{variant:"end",maxLines:P.title,text:l})}),o&&(0,r.jsx)(i.o.SansBodyS,{className:Z.metadata,children:(0,r.jsx)(ye.m,{variant:"end",maxLines:P.metadata,text:o,"data-test-id":T.metadata})}),d&&(0,r.jsx)(i.o,{family:"sans",size:bo[O],purpose:"body",className:Z.description,children:(0,r.jsx)(ye.m,{variant:"end",maxLines:P.description,text:d,"data-test-id":T.description})})]})]}))}const ho={Little:"little",Middle:"middle",Background:"background"};var ie=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Image/styles.module.css"),H={};H.styleTagTransform=S(),H.setAttributes=k(),H.insert=x().bind(null,"head"),H.domAPI=n(),H.insertStyleElement=w();var Wo=_()(ie.A,H);const yo=ie.A&&ie.A.locals?ie.A.locals:void 0;var xo=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function ko(a){var{src:l,alt:d,mode:o=ho.Little,hideFading:t}=a,g=xo(a,["src","alt","mode","hideFading"]);return(0,r.jsx)("img",Object.assign({},(0,M.z7)(g),{src:l,alt:d,"data-mode":o,className:yo.image,"data-fading":!t||void 0}))}const Q=qe;Q.Header=go,Q.Footer=ge,Q.Image=ko,Q.FunctionBadge=no}),"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js":((f,b,e)=>{e.d(b,{A:()=>B});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=function(p,h){var _={};for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&h.indexOf(c)<0&&(_[c]=p[c]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(p);n<c.length;n++)h.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(p,c[n])&&(_[c[n]]=p[c[n]]);return _};const s=m.forwardRef((p,h)=>{var{size:_=24}=p,c=u(p,["size"]);c.width=void 0,c.height=void 0;const n="-kebab-s";return typeof _=="number"&&(c.style||(c.style={}),c.style.width=_+"px",c.style.height=_+"px"),(0,r.jsx)("svg",Object.assign({ref:h,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},c,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var i=function(p,h){var _={};for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&h.indexOf(c)<0&&(_[c]=p[c]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(p);n<c.length;n++)h.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(p,c[n])&&(_[c[n]]=p[c[n]]);return _};const y=m.forwardRef((p,h)=>{var{size:_=24}=p,c=i(p,["size"]);c.width=void 0,c.height=void 0;const n="-kebab-xs";return typeof _=="number"&&(c.style||(c.style={}),c.style.width=_+"px",c.style.height=_+"px"),(0,r.jsx)("svg",Object.assign({ref:h,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},c,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var T=function(p,h){var _={};for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&h.indexOf(c)<0&&(_[c]=p[c]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(p);n<c.length;n++)h.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(p,c[n])&&(_[c[n]]=p[c[n]]);return _};const B=(0,m.forwardRef)((p,h)=>{var{size:_=24}=p,c=T(p,["size"]);return Number(_)>=20?(0,r.jsx)(s,Object.assign({ref:h,size:_},c)):(0,r.jsx)(y,Object.assign({ref:h,size:_},c))})}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Card/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.functionBadgeWrapper--fSxib{
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
}`,""]),s.locals={functionBadgeWrapper:"functionBadgeWrapper--fSxib",composition:"composition--GPYGY",contentWrapper:"contentWrapper--HFKA9",card:"card--phfOf",check:"check--K_sHk",anchor:"anchor--IY4dI",body:"body--Y52Qp",content:"content--Dwe5h",footer:"footer--XECBP"};const i=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Action/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.action--C3phV{
  gap:var(--space-card-gap-l, 16px);
  display:flex;
  align-items:center;
  justify-content:flex-start;
  box-sizing:border-box;
}`,""]),s.locals={action:"action--C3phV"};const i=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/CallToAction/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.callToAction--DoRj5{
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
}`,""]),s.locals={callToAction:"callToAction--DoRj5",icon:"icon--ghFK6",label:"label--O91Fp"};const i=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Dimension/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.wrapper--_zTfC{
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
}`,""]),s.locals={wrapper:"wrapper--_zTfC",valueContainer:"valueContainer--IBYaX",currentValue:"currentValue--WYUvl",oldValue:"oldValue--H1fmx",dimension:"dimension--r7nnj"};const i=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Promo/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.promo--HgnPX{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  box-sizing:border-box;
}`,""]),s.locals={promo:"promo--HgnPX"};const i=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/FunctionBadge/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.button--vSWqN{
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
}`,""]),s.locals={button:"button--vSWqN",triggerClassName:"triggerClassName--qLNWh",wrapper:"wrapper--x6p3i",item:"item--o2y4s"};const i=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Header/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.titleLayout--DOnSP{
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
}`,""]),s.locals={titleLayout:"titleLayout--DOnSP",contentLayout:"contentLayout--aPFYg",title:"title--Q8oqi",metadata:"metadata--lqO9j",description:"description--ScQSa"};const i=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Image/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.image--pVpuo{
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
}`,""]),s.locals={image:"image--pVpuo"};const i=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Check/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.checkWrapper--ya5G7{
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
}`,""]),s.locals={checkWrapper:"checkWrapper--ya5G7",checkContainer:"checkContainer--m1Z1E"};const i=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Emblem/styled.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.img--JTWNU{
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
}`,""]),s.locals={img:"img--JTWNU"};const i=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/FunctionBadgeWrapper/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.functionBadge--OTGNk{
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
}`,""]),s.locals={functionBadge:"functionBadge--OTGNk",functionRow:"functionRow--uUxLW"};const i=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/PromoBadge/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.promoBadge--ZCoo3{
  padding-top:var(--space-card-padding-promo-badge, 4px);
  padding-right:var(--space-card-padding-promo-badge, 4px);
  position:absolute;
  top:0;
  right:0;
  box-sizing:border-box;
}

div.promoTag--sbE5b{
  display:flex;
}`,""]),s.locals={promoBadge:"promoBadge--ZCoo3",promoTag:"promoTag--sbE5b"};const i=s}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.9_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css":((f,b,e)=>{e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([f.id,`.promoTag--mqhSG{
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
}`,""]),s.locals={promoTag:"promoTag--mqhSG",labelWrapper:"labelWrapper--Upwhz"};const i=s})}]);})();
