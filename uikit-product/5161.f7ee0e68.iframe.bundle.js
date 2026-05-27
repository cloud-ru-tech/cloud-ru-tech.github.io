"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5161],{"./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"(g,b,e){e.d(b,{Z:()=>G});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(m),v=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.13_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),D=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const h={S:"s",M:"m",L:"l"},E={promoBadge:"card__promo-badge",functionBadge:"card__function-badge",droplist:"card__function-badge__droplist",option:"card__function-badge__option",check:"card__check",emblemPicture:"card__header__emblem-picture",emblemIcon:"card__header__emblem-icon",title:"card__header__title",description:"card__header__description",metadata:"card__header__metadata",anchor:"card__anchor"},me=(0,s.createContext)({size:h.M,disabled:!1});function Q(){return(0,s.useContext)(me)}const p=(0,s.createContext)({visible:!1,setVisible:()=>{}});var y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_=e.n(y),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),n=e.n(c),be=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),x=e.n(be),Ce=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),k=e.n(Ce),De=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=e.n(De),Me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),j=e.n(Me),$=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/FunctionBadgeWrapper/styles.module.css"),B={};B.styleTagTransform=j(),B.setAttributes=k(),B.insert=x().bind(null,"head"),B.domAPI=n(),B.insertStyleElement=w();var zo=_()($.A,B);const je=$.A&&$.A.locals?$.A.locals:void 0;function Qe({children:a,className:l,alwaysVisible:d}){const[o,t]=(0,s.useState)(!1),f=d?!0:o;return(0,r.jsx)(p.Provider,{value:{visible:f,setVisible:t},children:(0,r.jsx)("div",{className:l,"data-visible":f||void 0,tabIndex:-1,children:(0,r.jsx)("div",{className:je.functionBadge,children:(0,r.jsx)("div",{className:je.functionRow,children:a})})})})}const Be={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},Le={Accent:"accent",Decor:"decor"},ve={Xxs:"xxs",Xs:"xs",S:"s"};var q=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.10_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"),L={};L.styleTagTransform=j(),L.setAttributes=k(),L.insert=x().bind(null,"head"),L.domAPI=n(),L.insertStyleElement=w();var Po=_()(q.A,L);const Te=q.A&&q.A.locals?q.A.locals:void 0;var We=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function Ie(a){var{appearance:l=Be.Primary,color:d=Le.Accent,size:o=ve.Xxs,className:t,text:f,beforeContent:S,afterContent:O,onClick:z}=a,M=We(a,["appearance","color","size","className","text","beforeContent","afterContent","onClick"]);const T=o!==ve.Xxs,P=z?{role:"button",tabIndex:0,onClick:z}:{},C=o===ve.S?i.o.SansLabelM:i.o.SansLabelS;return(0,r.jsxs)("div",Object.assign({className:u()(Te.promoTag,t)},(0,D.z7)(M),{"data-appearance":l,"data-color":d,"data-size":o},P,{children:[T&&S,!!f&&(0,r.jsx)(C,{className:Te.labelWrapper,tag:"span",children:f}),T&&O]}))}var ee=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/PromoBadge/styles.module.css"),W={};W.styleTagTransform=j(),W.setAttributes=k(),W.insert=x().bind(null,"head"),W.domAPI=n(),W.insertStyleElement=w();var Ao=_()(ee.A,W);const Ee=ee.A&&ee.A.locals?ee.A.locals:void 0;function Re({text:a,appearance:l="primary"}){return(0,r.jsx)("div",{className:Ee.promoBadge,children:(0,r.jsx)(Ie,{appearance:l,text:a,"data-test-id":E.promoBadge,className:Ee.promoTag})})}var Ue=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),oe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Check/styles.module.css"),I={};I.styleTagTransform=j(),I.setAttributes=k(),I.insert=x().bind(null,"head"),I.domAPI=n(),I.insertStyleElement=w();var So=_()(oe.A,I);const Oe=oe.A&&oe.A.locals?oe.A.locals:void 0;function Ne({className:a}){return(0,r.jsx)("div",{className:Oe.checkWrapper,children:(0,r.jsx)("div",{className:u()(Oe.checkContainer,a),"data-test-id":E.check,children:(0,r.jsx)(Ue.A,{size:16})})})}const Ke=["Enter","Space"];var ae=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Card/styles.module.css"),R={};R.styleTagTransform=j(),R.setAttributes=k(),R.insert=x().bind(null,"head"),R.domAPI=n(),R.insertStyleElement=w();var Co=_()(ae.A,R);const A=ae.A&&ae.A.locals?ae.A.locals:void 0;var Fe=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};const Xe=(0,s.forwardRef)((a,l)=>{var{onClick:d,disabled:o=!1,checked:t,outline:f,multipleSelection:S=!1,size:O=h.M,children:z,header:M,footer:T,functionBadge:P,promoBadge:C,image:wo,className:jo,href:_e,onKeyDown:ue,name:Pe,badgeAlwaysVisible:To}=a,Eo=Fe(a,["onClick","disabled","checked","outline","multipleSelection","size","children","header","footer","functionBadge","promoBadge","image","className","href","onKeyDown","name","badgeAlwaysVisible"]);const xe=(0,s.useRef)(null),Ae=(0,s.useRef)(null),Oo=(0,s.useCallback)(pe=>{var ke,we;pe.target===xe.current&&((Ke.includes(pe.code)||pe.key===" ")&&(_e?(ke=Ae.current)===null||ke===void 0||ke.click():(we=xe.current)===null||we===void 0||we.click()),ue==null||ue(pe))},[_e,ue]),Se=(0,D.z7)(Eo);return(0,r.jsx)(me.Provider,{value:{size:O,disabled:o},children:(0,r.jsxs)("div",Object.assign({ref:(0,v.A)(l,xe),className:u()(A.card,jo)},Se,{onClick:d,"data-disabled":o||void 0,"data-checked":t||void 0,"data-outline":f||void 0,"data-pointer":d?!0:void 0,tabIndex:0,onKeyDown:Oo,children:[wo,(0,r.jsxs)("div",{className:A.composition,tabIndex:-1,children:[_e&&(0,r.jsx)("a",{ref:Ae,"data-test-id":E.anchor,tabIndex:-1,href:_e,className:A.anchor,"aria-label":Se["aria-label"]}),!o&&P&&(0,r.jsx)(Qe,{alwaysVisible:To,className:A.functionBadgeWrapper,children:P}),(0,r.jsx)("div",{className:A.contentWrapper,children:(0,r.jsxs)("div",{className:A.content,"data-size":O,children:[M||null,z&&(0,r.jsx)(i.o,{family:"sans",size:O,purpose:"body",className:A.body,tag:"div",children:z}),T&&(0,r.jsx)("div",{className:A.footer,children:T})]})}),C&&(0,r.jsx)(Re,Object.assign({},typeof C=="string"?{text:C}:C))]}),t&&S&&(0,r.jsx)(Ne,{className:A.check}),Pe&&(0,r.jsx)("input",{name:Pe,type:"checkbox",checked:t,style:{display:"none"}})]}))})});var ze=e("./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js");const Ye={[h.S]:"m",[h.M]:"m",[h.L]:"l"};var re=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Dimension/styles.module.css"),U={};U.styleTagTransform=j(),U.setAttributes=k(),U.insert=x().bind(null,"head"),U.domAPI=n(),U.insertStyleElement=w();var Do=_()(re.A,U);const H=re.A&&re.A.locals?re.A.locals:void 0;function Ze({dimension:a,currentValue:l,oldValue:d,size:o}){const{size:t}=Q(),f=Ye[o||t];return(0,r.jsxs)("div",{className:H.wrapper,children:[a&&(0,r.jsx)(i.o,{purpose:"title",family:"sans",size:f,className:H.dimension,children:a}),(0,r.jsxs)("div",{className:H.valueContainer,children:[(0,r.jsx)(i.o,{purpose:"title",family:"sans",size:f,className:H.currentValue,children:l}),d&&(0,r.jsx)(i.o.CrossedOutBodyS,{className:H.oldValue,children:d})]})]})}var te=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Promo/styles.module.css"),N={};N.styleTagTransform=j(),N.setAttributes=k(),N.insert=x().bind(null,"head"),N.domAPI=n(),N.insertStyleElement=w();var Mo=_()(te.A,N);const Ve=te.A&&te.A.locals?te.A.locals:void 0;var He=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function Je(a){var{volume:l,button:d,className:o,size:t}=a,f=He(a,["volume","button","className","size"]);const{disabled:S}=Q();return(0,r.jsxs)("div",Object.assign({className:u()(Ve.promo,o)},(0,D.sg)(f),{children:[d&&(0,r.jsx)(ze.L,Object.assign({},d,{appearance:"primary",size:"m",disabled:S})),l&&(0,r.jsx)(Ze,Object.assign({},l,{size:t}))]}))}var Ge=e("./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/ButtonTonal.js"),se=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Action/styles.module.css"),K={};K.styleTagTransform=j(),K.setAttributes=k(),K.insert=x().bind(null,"head"),K.domAPI=n(),K.insertStyleElement=w();var Qo=_()(se.A,K);const $e=se.A&&se.A.locals?se.A.locals:void 0;var qe=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function eo(a){var{button:l,secondaryButton:d,className:o}=a,t=qe(a,["button","secondaryButton","className"]);const{disabled:f}=Q();return(0,r.jsxs)("div",Object.assign({className:u()($e.action,o)},(0,D.sg)(t),{children:[(0,r.jsx)(ze.L,Object.assign({},l,{appearance:"primary",size:"m",disabled:f})),d&&(0,r.jsx)(Ge.L,Object.assign({},d,{appearance:"neutral",size:"m",disabled:f}))]}))}var de=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/CallToAction/styles.module.css"),F={};F.styleTagTransform=j(),F.setAttributes=k(),F.insert=x().bind(null,"head"),F.domAPI=n(),F.insertStyleElement=w();var Bo=_()(de.A,F);const ge=de.A&&de.A.locals?de.A.locals:void 0;var oo=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function ao(a){var{label:l,icon:d,className:o}=a,t=oo(a,["label","icon","className"]);return(0,r.jsxs)("div",Object.assign({className:u()(ge.callToAction,o)},(0,D.sg)(t),{children:[(0,r.jsx)(i.o.SansLabelL,{className:ge.label,children:l}),(0,r.jsx)("span",{className:ge.icon,children:d})]}))}var fe;(function(a){a.Promo=Je,a.Action=eo,a.CallToAction=ao})(fe||(fe={}));var ro=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js"),to=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"),so=e("./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/Tag/Tag.js"),co=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),ce=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/FunctionBadge/styles.module.css"),X={};X.styleTagTransform=j(),X.setAttributes=k(),X.insert=x().bind(null,"head"),X.domAPI=n(),X.insertStyleElement=w();var Lo=_()(ce.A,X);const ye=ce.A&&ce.A.locals?ce.A.locals:void 0;var lo=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function no({icon:a,options:l}){const[d,o]=(0,s.useState)(!1),t=(0,s.useRef)(null),{setVisible:f}=(0,s.useContext)(p);(0,co.N)(()=>{f&&f(d)},[d,f]);const S=(0,s.useCallback)(O=>{O.stopPropagation(),o(z=>!z)},[]);return(0,r.jsx)("span",{className:ye.wrapper,children:(0,r.jsx)(to.i,{trigger:"clickAndFocusVisible",open:d,onOpenChange:o,widthStrategy:"gte",scroll:!0,"data-test-id":E.droplist,placement:"bottom-end",triggerElemRef:t,items:l.map(O=>{var{icon:z,tagLabel:M,onClick:T}=O,P=lo(O,["icon","tagLabel","onClick"]);return Object.assign(Object.assign({},P),{className:ye.item,beforeContent:z,afterContent:M?(0,r.jsx)(so.v,{label:M}):void 0,onClick:C=>{C.stopPropagation(),o(!1),T==null||T(C)}})}),children:(0,r.jsx)("button",{type:"button","data-test-id":E.functionBadge,className:ye.button,onClick:S,ref:t,children:a||(0,r.jsx)(ro.A,{})})})})}var he=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),io=e("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.12_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),le=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Emblem/styled.module.css"),Y={};Y.styleTagTransform=j(),Y.setAttributes=k(),Y.insert=x().bind(null,"head"),Y.domAPI=n(),Y.insertStyleElement=w();var Wo=_()(le.A,Y);const _o=le.A&&le.A.locals?le.A.locals:void 0;function uo(a){return"src"in a&&"alt"in a}function po(a){var l,d,o;const{size:t}=Q();return uo(a)?(0,r.jsx)("img",{src:a.src,alt:a.alt,"data-size":t||void 0,className:_o.img,"data-test-id":E.emblemPicture}):(0,r.jsx)(io.I,{icon:a.icon,appearance:(l=a.appearance)!==null&&l!==void 0?l:"primary",decor:(d=a.decor)!==null&&d!==void 0?d:!0,size:t,shape:(o=a.shape)!==null&&o!==void 0?o:"round","data-test-id":E.emblemIcon})}const mo={[h.S]:"s",[h.M]:"m",[h.L]:"l"},bo={[h.S]:"m",[h.M]:"m",[h.L]:"l"},vo={title:1,description:2,metadata:1};var ne=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Header/styles.module.css"),Z={};Z.styleTagTransform=j(),Z.setAttributes=k(),Z.insert=x().bind(null,"head"),Z.domAPI=n(),Z.insertStyleElement=w();var Io=_()(ne.A,Z);const J=ne.A&&ne.A.locals?ne.A.locals:void 0;var go=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function fo(a){var{title:l,description:d,metadata:o,truncate:t,emblem:f,className:S,size:O}=a,z=go(a,["title","description","metadata","truncate","emblem","className","size"]);const{size:M}=Q(),T=O||M,P=Object.assign(Object.assign({},vo),t);return(0,r.jsxs)("div",Object.assign({className:u()(J.titleLayout,S)},(0,D.sg)(z),{"data-size":T,children:[f&&(0,r.jsx)(po,Object.assign({},f)),(0,r.jsxs)("div",{className:J.contentLayout,children:[(0,r.jsx)(i.o,{family:"sans",size:mo[T],purpose:"title",className:J.title,"data-test-id":E.title,children:(0,r.jsx)(he.m,{variant:"end",maxLines:P.title,text:l})}),o&&(0,r.jsx)(i.o.SansBodyS,{className:J.metadata,children:(0,r.jsx)(he.m,{variant:"end",maxLines:P.metadata,text:o,"data-test-id":E.metadata})}),d&&(0,r.jsx)(i.o,{family:"sans",size:bo[T],purpose:"body",className:J.description,children:(0,r.jsx)(he.m,{variant:"end",maxLines:P.description,text:d,"data-test-id":E.description})})]})]}))}const yo={Little:"little",Middle:"middle",Background:"background"};var ie=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Image/styles.module.css"),V={};V.styleTagTransform=j(),V.setAttributes=k(),V.insert=x().bind(null,"head"),V.domAPI=n(),V.insertStyleElement=w();var Ro=_()(ie.A,V);const ho=ie.A&&ie.A.locals?ie.A.locals:void 0;var xo=function(a,l){var d={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(d[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,o=Object.getOwnPropertySymbols(a);t<o.length;t++)l.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(a,o[t])&&(d[o[t]]=a[o[t]]);return d};function ko(a){var{src:l,alt:d,mode:o=yo.Little,hideFading:t}=a,f=xo(a,["src","alt","mode","hideFading"]);return(0,r.jsx)("img",Object.assign({},(0,D.z7)(f),{src:l,alt:d,"data-mode":o,className:ho.image,"data-fading":!t||void 0}))}const G=Xe;G.Header=fo,G.Footer=fe,G.Image=ko,G.FunctionBadge=no},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js"(g,b,e){e.d(b,{A:()=>Q});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),m=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=function(p,y){var _={};for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&y.indexOf(c)<0&&(_[c]=p[c]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(p);n<c.length;n++)y.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(p,c[n])&&(_[c[n]]=p[c[n]]);return _};const s=m.forwardRef((p,y)=>{var{size:_=24}=p,c=u(p,["size"]);c.width=void 0,c.height=void 0;const n="-kebab-s";return typeof _=="number"&&(c.style||(c.style={}),c.style.width=_+"px",c.style.height=_+"px"),(0,r.jsx)("svg",Object.assign({ref:y,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},c,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var i=function(p,y){var _={};for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&y.indexOf(c)<0&&(_[c]=p[c]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(p);n<c.length;n++)y.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(p,c[n])&&(_[c[n]]=p[c[n]]);return _};const h=m.forwardRef((p,y)=>{var{size:_=24}=p,c=i(p,["size"]);c.width=void 0,c.height=void 0;const n="-kebab-xs";return typeof _=="number"&&(c.style||(c.style={}),c.style.width=_+"px",c.style.height=_+"px"),(0,r.jsx)("svg",Object.assign({ref:y,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},c,{children:(0,r.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var E=function(p,y){var _={};for(var c in p)Object.prototype.hasOwnProperty.call(p,c)&&y.indexOf(c)<0&&(_[c]=p[c]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,c=Object.getOwnPropertySymbols(p);n<c.length;n++)y.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(p,c[n])&&(_[c[n]]=p[c[n]]);return _};const Q=(0,m.forwardRef)((p,y)=>{var{size:_=24}=p,c=E(p,["size"]);return Number(_)>=20?(0,r.jsx)(s,Object.assign({ref:y,size:_},c)):(0,r.jsx)(h,Object.assign({ref:y,size:_},c))})},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Card/styles.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.functionBadgeWrapper--XGWWA{
  position:absolute;
  z-index:1;
  top:0;
  right:0;
  display:none;
}
.functionBadgeWrapper--XGWWA[data-visible]{
  display:block;
}

.composition--cWyBD{
  border-radius:var(--radius-card-container, 8px);
  box-sizing:border-box;
  height:100%;
}

.contentWrapper--e9zEb{
  position:relative;
  height:100%;
}

.card--SUwNY{
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
.card--SUwNY:hover .functionBadgeWrapper--XGWWA{
  display:block;
}
.card--SUwNY[data-outline]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-neutral-decor-default, #dde0ea);
  outline-width:var(--border-width-card-container, 1px);
}
.card--SUwNY:hover, .card--SUwNY:focus-visible{
  --snack-ui-card-background-color:var(--sys-neutral-background2-level, #ffffff);
}
.card--SUwNY:focus-visible{
  outline-width:var(--border-state-focus-l-border-width, 4px);
  outline-style:var(--border-state-focus-l-border-style, solid);
  outline-color:var(--border-state-focus-l-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.card--SUwNY:focus-visible .functionBadgeWrapper--XGWWA{
  display:block;
}
.card--SUwNY:focus-visible .check--srYWi{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--SUwNY:focus-within .functionBadgeWrapper--XGWWA{
  display:block;
}
.card--SUwNY[data-checked]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
  outline-width:var(--border-width-card-container, 1px);
}
.card--SUwNY[data-checked]:hover{
  outline-color:var(--sys-primary-decor-hovered, #b3deca);
  box-shadow:none;
}
.card--SUwNY[data-checked] .contentWrapper--e9zEb::before{
  content:"";
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--SUwNY[data-checked] .check--srYWi{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--SUwNY[data-checked]:focus-visible{
  outline-width:var(--border-state-focus-l-border-width, 4px);
  outline-style:var(--border-state-focus-l-border-style, solid);
  outline-color:var(--border-state-focus-l-border-color, );
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.card--SUwNY[data-checked]:focus-visible .check--srYWi{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--SUwNY[data-disabled]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  cursor:not-allowed;
  opacity:var(--opacity-a048, 0.48);
  background-color:var(--sys-neutral-background, #eeeff3);
  outline-color:var(--sys-neutral-decor-default, #dde0ea);
  outline-width:var(--border-width-card-container, 1px);
}
.card--SUwNY[data-disabled][data-checked] .check--srYWi{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}
.card--SUwNY[data-disabled] *{
  cursor:not-allowed;
}
.card--SUwNY[data-pointer] *{
  cursor:pointer;
}
.card--SUwNY[data-pointer][data-outline]:hover{
  outline-color:var(--sys-neutral-decor-hovered, #cfd2dc);
  box-shadow:none;
}
.card--SUwNY[data-pointer][data-outline]:focus-visible{
  outline-width:var(--border-state-focus-l-border-width, 4px);
  outline-style:var(--border-state-focus-l-border-style, solid);
  outline-color:var(--border-state-focus-l-border-color, );
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.card--SUwNY[data-pointer]:hover{
  box-shadow:var(--box-shadow-elevation-level2, 0px 0px 4px 0px rgba(0, 0, 0, 0.0392156863), 0px 4px 8px 0px rgba(0, 0, 0, 0.0392156863));
}
.card--SUwNY[data-pointer][data-disabled] *{
  cursor:not-allowed;
}

.anchor--KbtV4{
  position:absolute;
  z-index:1;
  top:0;
  right:0;
  bottom:0;
  left:0;
  border-radius:var(--radius-card-container, 8px);
}

.body--jNcZD{
  display:block;
  flex-grow:1;
  flex-shrink:1;
  width:100%;
  color:var(--sys-neutral-text-support, #6d707f);
  text-align:initial;
}

.content--Ujiqv{
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:flex-start;
  box-sizing:border-box;
  max-width:100%;
  height:100%;
}
.content--Ujiqv[data-size=s]{
  padding:var(--space-card-padding-container-s, 8px);
  gap:var(--space-card-gap-s, 4px);
}
.content--Ujiqv[data-size=m]{
  padding:var(--space-card-padding-container-m, 16px);
  gap:var(--space-card-gap-m, 8px);
}
.content--Ujiqv[data-size=l]{
  padding:var(--space-card-padding-container-l, 24px);
  gap:var(--space-card-gap-l, 16px);
}

.footer--k4sDl{
  position:relative;
  box-sizing:border-box;
  width:100%;
}`,""]),s.locals={functionBadgeWrapper:"functionBadgeWrapper--XGWWA",composition:"composition--cWyBD",contentWrapper:"contentWrapper--e9zEb",card:"card--SUwNY",check:"check--srYWi",anchor:"anchor--KbtV4",body:"body--jNcZD",content:"content--Ujiqv",footer:"footer--k4sDl"};const i=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Action/styles.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.action--g94DF{
  gap:var(--space-card-gap-l, 16px);
  display:flex;
  align-items:center;
  justify-content:flex-start;
  box-sizing:border-box;
}`,""]),s.locals={action:"action--g94DF"};const i=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/CallToAction/styles.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.callToAction--V_m42{
  gap:var(--space-card-gap-s, 4px);
  display:flex;
  align-items:center;
  justify-content:flex-start;
  box-sizing:border-box;
}

.icon--YqCwJ{
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-primary-accent-default, #389f74);
}
.icon--YqCwJ svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.label--lkFXt{
  color:var(--sys-primary-accent-default, #389f74);
}`,""]),s.locals={callToAction:"callToAction--V_m42",icon:"icon--YqCwJ",label:"label--lkFXt"};const i=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Dimension/styles.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.wrapper--cYoRm{
  gap:var(--space-card-gap-s, 4px);
  display:flex;
  flex:1 0 auto;
  justify-content:flex-end;
  box-sizing:border-box;
}

.valueContainer--xTB90{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  justify-content:flex-start;
  box-sizing:border-box;
}

.currentValue--vCPeW{
  color:var(--sys-neutral-text-main, #41424e);
}

.oldValue--gHX8Q{
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.dimension--IwbgH{
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),s.locals={wrapper:"wrapper--cYoRm",valueContainer:"valueContainer--xTB90",currentValue:"currentValue--vCPeW",oldValue:"oldValue--gHX8Q",dimension:"dimension--IwbgH"};const i=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Promo/styles.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.promo--nJ6_a{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  box-sizing:border-box;
}`,""]),s.locals={promo:"promo--nJ6_a"};const i=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/FunctionBadge/styles.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.button--sW8g1{
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
.button--sW8g1:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.button--sW8g1:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-support, #6d707f);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--sW8g1:active{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.button--sW8g1 svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.triggerClassName--qwFJn{
  --offset:var(--space-drop-list-drop-offset, 4px);
}

.wrapper--UTJlq{
  position:relative;
}

li.item--zbk9J{
  width:-moz-max-content;
  width:max-content;
}`,""]),s.locals={button:"button--sW8g1",triggerClassName:"triggerClassName--qwFJn",wrapper:"wrapper--UTJlq",item:"item--zbk9J"};const i=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Header/styles.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.titleLayout--vZpuL{
  display:flex;
  align-items:center;
  box-sizing:border-box;
  width:100%;
}
.titleLayout--vZpuL[data-size=s]{
  gap:var(--space-card-gap-s, 4px);
}
.titleLayout--vZpuL[data-size=m]{
  gap:var(--space-card-gap-m, 8px);
}
.titleLayout--vZpuL[data-size=l]{
  gap:var(--space-card-gap-l, 16px);
}

.contentLayout--jbwar{
  overflow:hidden;
  display:block;
  max-width:100%;
}

.title--HHg8Z{
  display:block;
  max-width:100%;
  color:var(--sys-neutral-text-main, #41424e);
}

.metadata--aqly4{
  max-width:100%;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.description--H21_i{
  max-width:100%;
  color:var(--sys-neutral-text-support, #6d707f);
}`,""]),s.locals={titleLayout:"titleLayout--vZpuL",contentLayout:"contentLayout--jbwar",title:"title--HHg8Z",metadata:"metadata--aqly4",description:"description--H21_i"};const i=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Image/styles.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.image--x2_De{
  display:block;
  box-sizing:border-box;
  width:100%;
  height:auto;
  -o-object-fit:cover;
     object-fit:cover;
}
.image--x2_De[data-mode=little]{
  height:var(--size-card-image-litte, 144px);
}
.image--x2_De[data-mode=middle]{
  height:var(--size-card-image-middle, 240px);
}
.image--x2_De[data-mode=background]{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -o-object-fit:cover;
     object-fit:cover;
}
.image--x2_De[data-mode=background][data-fading]{
  -webkit-mask-image:var(--gradient-linear-mask-90deg, linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.0784313725) 33%, #ffffff 100%));
  mask-image:var(--gradient-linear-mask-90deg, linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.0784313725) 33%, #ffffff 100%));
}`,""]),s.locals={image:"image--x2_De"};const i=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Check/styles.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.checkWrapper--En5Qz{
  padding-top:var(--space-card-padding-check-badge, 4px);
  padding-left:var(--space-card-padding-check-badge, 4px);
  position:absolute;
  top:0;
  left:0;
}

.checkContainer--jlXqG{
  width:var(--size-card-check, 16px);
  height:var(--size-card-check, 16px);
  border-radius:var(--radius-card-check, 4px);
  display:flex;
  align-items:center;
  justify-content:center;
}`,""]),s.locals={checkWrapper:"checkWrapper--En5Qz",checkContainer:"checkContainer--jlXqG"};const i=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Emblem/styled.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.img--qq_Zc{
  overflow:hidden;
  flex-shrink:0;
  box-sizing:border-box;
  -o-object-fit:cover;
     object-fit:cover;
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-style:solid;
}
.img--qq_Zc[data-size=s]{
  width:var(--size-card-picture-s, 32px);
  height:var(--size-card-picture-s, 32px);
  border-width:var(--border-width-card-picture, 1px);
  border-radius:var(--radius-card-picture, 4px);
}
.img--qq_Zc[data-size=m]{
  width:var(--size-card-picture-m, 40px);
  height:var(--size-card-picture-m, 40px);
  border-width:var(--border-width-card-picture, 1px);
  border-radius:var(--radius-card-picture, 4px);
}
.img--qq_Zc[data-size=l]{
  width:var(--size-card-picture-l, 80px);
  height:var(--size-card-picture-l, 80px);
  border-width:var(--border-width-card-picture, 1px);
  border-radius:var(--radius-card-picture, 4px);
}`,""]),s.locals={img:"img--qq_Zc"};const i=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/FunctionBadgeWrapper/styles.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.functionBadge--wUILI{
  padding-top:var(--space-card-padding-function-badge, 8px);
  padding-right:var(--space-card-padding-function-badge, 8px);
  position:absolute;
  top:0;
  right:0;
  box-sizing:border-box;
}

.functionRow--BrPiM{
  position:relative;
}
.functionRow--BrPiM::before{
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
}`,""]),s.locals={functionBadge:"functionBadge--wUILI",functionRow:"functionRow--BrPiM"};const i=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/PromoBadge/styles.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.promoBadge--SJ448{
  padding-top:var(--space-card-padding-promo-badge, 4px);
  padding-right:var(--space-card-padding-promo-badge, 4px);
  position:absolute;
  top:0;
  right:0;
  box-sizing:border-box;
}

div.promoTag--ZN2Wm{
  display:flex;
}`,""]),s.locals={promoBadge:"promoBadge--SJ448",promoTag:"promoTag--ZN2Wm"};const i=s},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.10_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"(g,b,e){e.d(b,{A:()=>i});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),m=e.n(r),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),s=v()(m());s.push([g.id,`.promoTag--g55Qz{
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
}`,""]),s.locals={promoTag:"promoTag--g55Qz",labelWrapper:"labelWrapper--LNUJZ"};const i=s}}]);})();
