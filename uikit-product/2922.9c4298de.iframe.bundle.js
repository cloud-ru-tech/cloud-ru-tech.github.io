"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2922],{"./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"(A,z,r){r.d(z,{Z:()=>no});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=r.n(w),S=r("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),u=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=r("./node_modules/.pnpm/@snack-uikit+typography@0.8.13_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),I=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const T={S:"s",M:"m",L:"l"},fe={promoBadge:"card__promo-badge",functionBadge:"card__function-badge",droplist:"card__function-badge__droplist",option:"card__function-badge__option",check:"card__check",emblemPicture:"card__header__emblem-picture",emblemIcon:"card__header__emblem-icon",title:"card__header__title",description:"card__header__description",metadata:"card__header__metadata",anchor:"card__anchor"},M=(0,u.createContext)({size:T.M,disabled:!1});function ge(){return(0,u.useContext)(M)}const b=(0,u.createContext)({visible:!1,setVisible:()=>{}});var C=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=r.n(C),_=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=r.n(_),Pe=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),G=r.n(Pe),Ie=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Q=r.n(Ie),Ve=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),J=r.n(Ve),Qe=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),V=r.n(Qe),re=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/FunctionBadgeWrapper/styles.module.css"),ye={};ye.styleTagTransform=V(),ye.setAttributes=Q(),ye.insert=G().bind(null,"head"),ye.domAPI=m(),ye.insertStyleElement=J();var _e=g()(re.A,ye);const de=re.A&&re.A.locals?re.A.locals:void 0;function K({children:a,className:p,alwaysVisible:d}){const[s,n]=(0,u.useState)(!1),h=d?!0:s;return(0,i.jsx)(b.Provider,{value:{visible:h,setVisible:n},children:(0,i.jsx)("div",{className:p,"data-visible":h||void 0,tabIndex:-1,children:(0,i.jsx)("div",{className:de.functionBadge,children:(0,i.jsx)("div",{className:de.functionRow,children:a})})})})}const ae={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},y={Accent:"accent",Decor:"decor"},j={Xxs:"xxs",Xs:"xs",S:"s"};var k=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.10_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"),D={};D.styleTagTransform=V(),D.setAttributes=Q(),D.insert=G().bind(null,"head"),D.domAPI=m(),D.insertStyleElement=J();var X=g()(k.A,D);const ee=k.A&&k.A.locals?k.A.locals:void 0;var be=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Ae(a){var{appearance:p=ae.Primary,color:d=y.Accent,size:s=j.Xxs,className:n,text:h,beforeContent:O,afterContent:P,onClick:E}=a,x=be(a,["appearance","color","size","className","text","beforeContent","afterContent","onClick"]);const B=s!==j.Xxs,R=E?{role:"button",tabIndex:0,onClick:E}:{},L=s===j.S?f.o.SansLabelM:f.o.SansLabelS;return(0,i.jsxs)("div",Object.assign({className:v()(ee.promoTag,n)},(0,I.z7)(x),{"data-appearance":p,"data-color":d,"data-size":s},R,{children:[B&&O,!!h&&(0,i.jsx)(L,{className:ee.labelWrapper,tag:"span",children:h}),B&&P]}))}var Se=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/PromoBadge/styles.module.css"),Ce={};Ce.styleTagTransform=V(),Ce.setAttributes=Q(),Ce.insert=G().bind(null,"head"),Ce.domAPI=m(),Ce.insertStyleElement=J();var ct=g()(Se.A,Ce);const tt=Se.A&&Se.A.locals?Se.A.locals:void 0;function at({text:a,appearance:p="primary"}){return(0,i.jsx)("div",{className:tt.promoBadge,children:(0,i.jsx)(Ae,{appearance:p,text:a,"data-test-id":fe.promoBadge,className:tt.promoTag})})}var Ze=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),ot=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Check/styles.module.css"),Ge={};Ge.styleTagTransform=V(),Ge.setAttributes=Q(),Ge.insert=G().bind(null,"head"),Ge.domAPI=m(),Ge.insertStyleElement=J();var nt=g()(ot.A,Ge);const Ct=ot.A&&ot.A.locals?ot.A.locals:void 0;function Go({className:a}){return(0,i.jsx)("div",{className:Ct.checkWrapper,children:(0,i.jsx)("div",{className:v()(Ct.checkContainer,a),"data-test-id":fe.check,children:(0,i.jsx)(Ze.A,{size:16})})})}const Jo=["Enter","Space"];var Mt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Card/styles.module.css"),pt={};pt.styleTagTransform=V(),pt.setAttributes=Q(),pt.insert=G().bind(null,"head"),pt.domAPI=m(),pt.insertStyleElement=J();var sr=g()(Mt.A,pt);const Ye=Mt.A&&Mt.A.locals?Mt.A.locals:void 0;var Yo=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const $o=(0,u.forwardRef)((a,p)=>{var{onClick:d,disabled:s=!1,checked:n,outline:h,multipleSelection:O=!1,size:P=T.M,children:E,header:x,footer:B,functionBadge:R,promoBadge:L,image:F,className:Y,href:H,onKeyDown:te,name:$,badgeAlwaysVisible:q}=a,ce=Yo(a,["onClick","disabled","checked","outline","multipleSelection","size","children","header","footer","functionBadge","promoBadge","image","className","href","onKeyDown","name","badgeAlwaysVisible"]);const se=(0,u.useRef)(null),pe=(0,u.useRef)(null),me=(0,u.useCallback)(xe=>{var ie,N;xe.target===se.current&&((Jo.includes(xe.code)||xe.key===" ")&&(H?(ie=pe.current)===null||ie===void 0||ie.click():(N=se.current)===null||N===void 0||N.click()),te==null||te(xe))},[H,te]),ue=(0,I.z7)(ce);return(0,i.jsx)(M.Provider,{value:{size:P,disabled:s},children:(0,i.jsxs)("div",Object.assign({ref:(0,S.A)(p,se),className:v()(Ye.card,Y)},ue,{onClick:d,"data-disabled":s||void 0,"data-checked":n||void 0,"data-outline":h||void 0,"data-pointer":d?!0:void 0,tabIndex:0,onKeyDown:me,children:[F,(0,i.jsxs)("div",{className:Ye.composition,tabIndex:-1,children:[H&&(0,i.jsx)("a",{ref:pe,"data-test-id":fe.anchor,tabIndex:-1,href:H,className:Ye.anchor,"aria-label":ue["aria-label"]}),!s&&R&&(0,i.jsx)(K,{alwaysVisible:q,className:Ye.functionBadgeWrapper,children:R}),(0,i.jsx)("div",{className:Ye.contentWrapper,children:(0,i.jsxs)("div",{className:Ye.content,"data-size":P,children:[x||null,E&&(0,i.jsx)(f.o,{family:"sans",size:P,purpose:"body",className:Ye.body,tag:"div",children:E}),B&&(0,i.jsx)("div",{className:Ye.footer,children:B})]})}),L&&(0,i.jsx)(at,Object.assign({},typeof L=="string"?{text:L}:L))]}),n&&O&&(0,i.jsx)(Go,{className:Ye.check}),$&&(0,i.jsx)("input",{name:$,type:"checkbox",checked:n,style:{display:"none"}})]}))})}),lt={Primary:"primary",Neutral:"neutral",Destructive:"destructive"},Lt={Button:"button",Submit:"submit",Reset:"reset"},Dt={Blank:"_blank",Self:"_self",Parent:"_parent",Top:"_top"},Ca={Xs:"xs",S:"s",M:"m",L:"l"},it={Before:"before",After:"after"};var ut;(function(a){a.LabelOnly="label-only",a.IconOnly="icon-only",a.IconBefore="icon-before",a.IconAfter="icon-after"})(ut||(ut={}));const qo={[lt.Neutral]:"neutral",[lt.Primary]:"primary",[lt.Destructive]:"red"};var Bt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"),_t={};_t.styleTagTransform=V(),_t.setAttributes=Q(),_t.insert=G().bind(null,"head"),_t.domAPI=m(),_t.insertStyleElement=J();var rr=g()(Bt.A,_t);const Nt=Bt.A&&Bt.A.locals?Bt.A.locals:void 0;var es=r("./node_modules/.pnpm/@snack-uikit+counter@0.8.12_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"),lo=r("./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js");function ts({label:a,icon:p,iconPosition:d}){return a&&p&&d===it.After?ut.IconAfter:a&&p&&d===it.Before?ut.IconBefore:a?ut.LabelOnly:ut.IconOnly}function as({counter:a,loading:p,disabled:d,counterForIcon:s,"data-test-id":n}){return typeof(a==null?void 0:a.value)=="number"&&!p&&!d?(0,i.jsx)("span",{"data-test-id":`${n!=null?n:"button"}__counter`,className:v()(s?Nt.counterForIcon:Nt.counterForLabel),children:(0,i.jsx)(es.p,Object.assign({},a))}):void 0}function os({icon:a,iconClassName:p,loading:d,wrappedCounter:s}){if(d)return(0,i.jsx)("span",{"data-test-id":"loading-icon",className:p,children:(0,i.jsx)(lo.b,{size:"s"})});if(a)return(0,i.jsxs)("span",{"data-test-id":"icon",className:v()(p,{[Nt.iconWithCounter]:!!s}),children:[a,s]})}function ss({label:a,labelClassName:p,wrappedCounter:d}){return a?(0,i.jsxs)("span",{"data-test-id":"label",className:p,children:[a,d]}):void 0}function rs({icon:a,label:p,iconPosition:d,iconClassName:s,labelClassName:n,loading:h,disabled:O,counter:P,"data-test-id":E}){const x=a&&(d===it.After||!p),B=as({counter:P,loading:h,disabled:O,counterForIcon:x,"data-test-id":E}),R=os({icon:a,iconClassName:s,loading:h,wrappedCounter:x?B:void 0}),L=ss({label:p,labelClassName:n,wrappedCounter:x?void 0:B});switch(d){case it.Before:return(0,i.jsxs)(i.Fragment,{children:[R,L]});case it.After:default:return(0,i.jsxs)(i.Fragment,{children:[L,R]})}}var ns=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const Ma=(0,u.forwardRef)((a,p)=>{var{className:d,disabled:s,href:n,icon:h,iconClassName:O,iconPosition:P=it.After,label:E,labelClassName:x,loading:B,onClick:R,onKeyDown:L,onFocus:F,onBlur:Y,counter:H,size:te,target:$=Dt.Blank,type:q=Lt.Button,appearance:ce=lt.Primary,tabIndex:se=0,fullWidth:pe}=a,me=ns(a,["className","disabled","href","icon","iconClassName","iconPosition","label","labelClassName","loading","onClick","onKeyDown","onFocus","onBlur","counter","size","target","type","appearance","tabIndex","fullWidth"]);const ue=ts({label:E,iconPosition:P,icon:h}),xe=rs({icon:h,iconClassName:O,iconPosition:P,label:E,labelClassName:x,loading:B,disabled:s,counter:H,"data-test-id":me["data-test-id"]}),ie=B||s?-1:se,N=Z=>{if(s||B){Z.preventDefault();return}R&&R(Z)},W=Object.assign(Object.assign({},(0,I.z7)(me)),{className:v()(Nt.button,d),"data-disabled":s||void 0,"aria-disabled":s||void 0,"data-loading":B||void 0,"data-size":te,"data-full-width":pe||void 0,"data-appearance":qo[ce],"data-variant":ue,onClick:N,onKeyDown:L,onFocus:F,onBlur:Y,tabIndex:ie});return n?(0,i.jsx)("a",Object.assign({role:"button",href:n,target:$},W,{ref:p,children:xe})):(0,i.jsx)("button",Object.assign({},W,{type:q,ref:p,children:xe}))});function ls({counter:a}){return{counter:a}}function La({disabled:a,href:p,icon:d,label:s,loading:n,onClick:h,onFocus:O,onBlur:P,onKeyDown:E}){return{disabled:a,href:p,icon:d,label:s,loading:n,onClick:h,onKeyDown:E,onFocus:O,onBlur:P}}var Rt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/styles.module.css"),mt={};mt.styleTagTransform=V(),mt.setAttributes=Q(),mt.insert=G().bind(null,"head"),mt.domAPI=m(),mt.insertStyleElement=J();var nr=g()(Rt.A,mt);const Da=Rt.A&&Rt.A.locals?Rt.A.locals:void 0;var is=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const Ba=(0,u.forwardRef)((a,p)=>{var{className:d,size:s=Ca.S,target:n=Dt.Blank,type:h=Lt.Button,appearance:O=lt.Primary,tabIndex:P,fullWidth:E=!1}=a,x=is(a,["className","size","target","type","appearance","tabIndex","fullWidth"]);return(0,i.jsx)(Ma,Object.assign({},(0,I.z7)(x),La(x),{className:v()(Da.button,d),iconClassName:Da.icon,labelClassName:Da.label,size:s,fullWidth:E,target:n,type:h,appearance:O,tabIndex:P,ref:p}))}),ds={[T.S]:"m",[T.M]:"m",[T.L]:"l"};var Wt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Dimension/styles.module.css"),ft={};ft.styleTagTransform=V(),ft.setAttributes=Q(),ft.insert=G().bind(null,"head"),ft.domAPI=m(),ft.insertStyleElement=J();var lr=g()(Wt.A,ft);const Pt=Wt.A&&Wt.A.locals?Wt.A.locals:void 0;function cs({dimension:a,currentValue:p,oldValue:d,size:s}){const{size:n}=ge(),h=ds[s||n];return(0,i.jsxs)("div",{className:Pt.wrapper,children:[a&&(0,i.jsx)(f.o,{purpose:"title",family:"sans",size:h,className:Pt.dimension,children:a}),(0,i.jsxs)("div",{className:Pt.valueContainer,children:[(0,i.jsx)(f.o,{purpose:"title",family:"sans",size:h,className:Pt.currentValue,children:p}),d&&(0,i.jsx)(f.o.CrossedOutBodyS,{className:Pt.oldValue,children:d})]})]})}var Kt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Promo/styles.module.css"),bt={};bt.styleTagTransform=V(),bt.setAttributes=Q(),bt.insert=G().bind(null,"head"),bt.domAPI=m(),bt.insertStyleElement=J();var ir=g()(Kt.A,bt);const ps=Kt.A&&Kt.A.locals?Kt.A.locals:void 0;var us=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function _s(a){var{volume:p,button:d,className:s,size:n}=a,h=us(a,["volume","button","className","size"]);const{disabled:O}=ge();return(0,i.jsxs)("div",Object.assign({className:v()(ps.promo,s)},(0,I.sg)(h),{children:[d&&(0,i.jsx)(Ba,Object.assign({},d,{appearance:"primary",size:"m",disabled:O})),p&&(0,i.jsx)(cs,Object.assign({},p,{size:n}))]}))}var Ut=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/styles.module.css"),gt={};gt.styleTagTransform=V(),gt.setAttributes=Q(),gt.insert=G().bind(null,"head"),gt.domAPI=m(),gt.insertStyleElement=J();var dr=g()(Ut.A,gt);const Na=Ut.A&&Ut.A.locals?Ut.A.locals:void 0;var ms=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const io=(0,u.forwardRef)((a,p)=>{var{className:d,size:s=Ca.S,target:n=Dt.Blank,type:h=Lt.Button,appearance:O=lt.Primary,fullWidth:P=!1,tabIndex:E}=a,x=ms(a,["className","size","target","type","appearance","fullWidth","tabIndex"]);return(0,i.jsx)(Ma,Object.assign({},(0,I.z7)(x),La(x),{className:v()(Na.button,d),iconClassName:Na.icon,labelClassName:Na.label,size:s,fullWidth:P,target:n,type:h,appearance:O,tabIndex:E,ref:p}))});var Ft=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Action/styles.module.css"),vt={};vt.styleTagTransform=V(),vt.setAttributes=Q(),vt.insert=G().bind(null,"head"),vt.domAPI=m(),vt.insertStyleElement=J();var cr=g()(Ft.A,vt);const fs=Ft.A&&Ft.A.locals?Ft.A.locals:void 0;var bs=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function gs(a){var{button:p,secondaryButton:d,className:s}=a,n=bs(a,["button","secondaryButton","className"]);const{disabled:h}=ge();return(0,i.jsxs)("div",Object.assign({className:v()(fs.action,s)},(0,I.sg)(n),{children:[(0,i.jsx)(Ba,Object.assign({},p,{appearance:"primary",size:"m",disabled:h})),d&&(0,i.jsx)(io,Object.assign({},d,{appearance:"neutral",size:"m",disabled:h}))]}))}var Ht=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/CallToAction/styles.module.css"),ht={};ht.styleTagTransform=V(),ht.setAttributes=Q(),ht.insert=G().bind(null,"head"),ht.domAPI=m(),ht.insertStyleElement=J();var pr=g()(Ht.A,ht);const Ra=Ht.A&&Ht.A.locals?Ht.A.locals:void 0;var vs=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function hs(a){var{label:p,icon:d,className:s}=a,n=vs(a,["label","icon","className"]);return(0,i.jsxs)("div",Object.assign({className:v()(Ra.callToAction,s)},(0,I.sg)(n),{children:[(0,i.jsx)(f.o.SansLabelL,{className:Ra.label,children:p}),(0,i.jsx)("span",{className:Ra.icon,children:d})]}))}var Wa;(function(a){a.Promo=_s,a.Action=gs,a.CallToAction=hs})(Wa||(Wa={}));var ys=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const xs=u.forwardRef((a,p)=>{var{size:d=24}=a,s=ys(a,["size"]);s.width=void 0,s.height=void 0;const n="-kebab-s";return typeof d=="number"&&(s.style||(s.style={}),s.style.width=d+"px",s.style.height=d+"px"),(0,i.jsx)("svg",Object.assign({ref:p,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var Os=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const ws=u.forwardRef((a,p)=>{var{size:d=24}=a,s=Os(a,["size"]);s.width=void 0,s.height=void 0;const n="-kebab-xs";return typeof d=="number"&&(s.style||(s.style={}),s.style.width=d+"px",s.style.height=d+"px"),(0,i.jsx)("svg",Object.assign({ref:p,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var js=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const ks=(0,u.forwardRef)((a,p)=>{var{size:d=24}=a,s=js(a,["size"]);return Number(d)>=20?(0,i.jsx)(xs,Object.assign({ref:p,size:d},s)):(0,i.jsx)(ws,Object.assign({ref:p,size:d},s))});var He=r("./node_modules/.pnpm/@floating-ui+react@0.26.24_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),Ss=r("./node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),yt=r("./node_modules/.pnpm/@floating-ui+react-dom@2.1.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),Ka=r("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),Es=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/usePopstateSubscription.js"),co=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const $e={Left:"left",LeftStart:"left-start",LeftEnd:"left-end",Right:"right",RightStart:"right-start",RightEnd:"right-end",Top:"top",TopStart:"top-start",TopEnd:"top-end",Bottom:"bottom",BottomStart:"bottom-start",BottomEnd:"bottom-end"},dt={Click:"click",Hover:"hover",FocusVisible:"focusVisible",Focus:"focus",HoverAndFocusVisible:"hoverAndFocusVisible",HoverAndFocus:"hoverAndFocus",ClickAndFocusVisible:"clickAndFocusVisible"},Xt={Auto:"auto",Gte:"gte",Eq:"eq"},Vt={Auto:"auto",Lte:"lte",Eq:"eq"},zs=[$e.Top,$e.Right,$e.Bottom,$e.Left];var po=r("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");function Ps({placement:a,x:p,y:d,ref:s}){if(!s.current)return{};const n=s.current.offsetWidth;switch(!0){case a.startsWith("top"):return{left:p,bottom:-n,transform:"rotate(-90deg)"};case a.startsWith("bottom"):return{left:p,top:-n,transform:"rotate(90deg)"};case a.startsWith("left"):return{top:d,right:-(n-1),transform:"rotate(180deg)"};case a.startsWith("right"):default:return{top:d,left:-(n-1)}}}const Is=()=>(0,co.B)()?document.body:void 0,Ts=a=>(a==null?void 0:a.offsetWidth)||0,As=({children:a,getReferenceProps:p,setReference:d,validElementWrapperClassName:s,disableSpanWrapper:n})=>(0,u.isValidElement)(a)?(0,po.isForwardRef)(a)||(0,po.isValidElementType)(a)||n?(0,u.cloneElement)(a,Object.assign(Object.assign({},p(Object.assign(Object.assign({},a.props),{className:v()(a.props.className,s)}))),{ref:d,key:"cloned-element"})):(0,u.createElement)("span",Object.assign({className:s,ref:d},p(),{key:"wrapped-element"}),a):typeof a=="function"?(0,i.jsx)(u.Fragment,{children:a({getReferenceProps:p,ref:d})},"function-element"):(0,u.createElement)("span",Object.assign({className:s,ref:d},p(),{key:"wrapped-element"}),a),Cs=a=>{const p={useHoverTrigger:!1,useClickTrigger:!1,useFocusTrigger:!1,keyboardOnly:!0};switch(a){case dt.Hover:return Object.assign(Object.assign({},p),{useHoverTrigger:!0});case dt.Click:return Object.assign(Object.assign({},p),{useClickTrigger:!0});case dt.FocusVisible:return Object.assign(Object.assign({},p),{useFocusTrigger:!0});case dt.Focus:return Object.assign(Object.assign({},p),{useFocusTrigger:!0,keyboardOnly:!1});case dt.ClickAndFocusVisible:return Object.assign(Object.assign({},p),{useFocusTrigger:!0,useClickTrigger:!0});case dt.HoverAndFocusVisible:return Object.assign(Object.assign({},p),{useFocusTrigger:!0,useHoverTrigger:!0});case dt.HoverAndFocus:return Object.assign(Object.assign({},p),{useFocusTrigger:!0,useHoverTrigger:!0,keyboardOnly:!1});default:return p}},Ua=a=>a.stopPropagation(),Fa=a=>a.stopPropagation();function Ms(a){return a.slice(0,2)==="on"?a.replace("on","").toLowerCase():a.toLowerCase()}function Ls(a){return Object.assign(Object.assign({},a),{nativeEvent:a})}function Ds(a){const p={};return Object.entries(a).forEach(([d,s])=>{p[d]=n=>{s(Ls(n))}}),p}function Bs({placement:a,x:p,y:d,arrowContainerClassName:s,arrowElementClassName:n,arrowRef:h}){return(0,i.jsx)("div",{className:s,ref:h,style:Ps({x:p,y:d,placement:a,ref:h}),children:(0,i.jsx)("svg",{className:n,viewBox:"0 0 4 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M4 0V8L0.707106 4.70711C0.316582 4.31658 0.316583 3.68342 0.707107 3.29289L4 0Z"})})})}var Ha=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function Ns({triggerClassName:a,offsetProp:p}){const[d,s]=(0,u.useState)(0);return(0,Ha.N)(()=>{const n=document.querySelector("."+String(a).split(/\s+/g).map(CSS.escape).join(".")),h=n?getComputedStyle(n):null,O=h?h.getPropertyValue("--offset"):null;if(p!==void 0){s(p);return}const P=document.createElement("span");P.style.width=O||"",document.body.appendChild(P);const E=getComputedStyle(P).width;document.body.removeChild(P);const x=parseInt(E||"");if(Number.isNaN(x)||x<1){s(0);return}s(x)},[p,a]),d}var Qt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.15.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"),xt={};xt.styleTagTransform=V(),xt.setAttributes=Q(),xt.insert=G().bind(null,"head"),xt.domAPI=m(),xt.insertStyleElement=J();var fr=g()(Qt.A,xt);const uo=Qt.A&&Qt.A.locals?Qt.A.locals:void 0;var _o=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function mo(a){var p,{className:d,triggerClassName:s,children:n,open:h,onOpenChange:O,placement:P=$e.Top,hasArrow:E,offset:x,popoverContent:B,trigger:R,outsideClick:L,hoverDelayOpen:F,hoverDelayClose:Y,triggerRef:H,widthStrategy:te=Xt.Auto,heightStrategy:$=Vt.Auto,closeOnEscapeKey:q=!0,triggerClickByKeys:ce=!0,fallbackPlacements:se=zs,arrowContainerClassName:pe,arrowElementClassName:me,disableSpanWrapper:ue=!1,closeOnPopstate:xe}=a,ie=_o(a,["className","triggerClassName","children","open","onOpenChange","placement","hasArrow","offset","popoverContent","trigger","outsideClick","hoverDelayOpen","hoverDelayClose","triggerRef","widthStrategy","heightStrategy","closeOnEscapeKey","triggerClickByKeys","fallbackPlacements","arrowContainerClassName","arrowElementClassName","disableSpanWrapper","closeOnPopstate"]);const N=(0,u.useRef)(null),[W,Z]=(0,Ka.iC)(h,!1,O),oe=(0,u.useRef)(W);(0,u.useEffect)(()=>{oe.current=W},[W]);const le=(0,u.useCallback)((ne,...we)=>{ne!==oe.current&&(oe.current=ne,Z(ne,...we))},[Z]);(0,Es.V)(()=>W&&le(!1),!!xe);const Te=(0,He.fI)(),Be=Ns({triggerClassName:s,offsetProp:x}),Ee=Ts(N.current),{floatingStyles:We,refs:Le,context:he,middlewareData:De,placement:Ke}=(0,He.we)({nodeId:Te,placement:P,open:W,onOpenChange:le,whileElementsMounted:Ss.ll,middleware:[(0,yt.BN)(),(0,yt.cY)(Be+Ee),E&&(0,yt.UE)({element:N,padding:(Be+Ee)*2}),(0,yt.UU)({fallbackPlacements:se}),(0,yt.Ej)({apply({rects:ne,availableHeight:we}){const je=Le.floating.current;if(je){switch($){case Vt.Eq:je.style.height=`${we}px`;break;case Vt.Lte:je.style.maxHeight=`${we}px`;break;case Vt.Auto:default:break}switch(te){case Xt.Eq:je.style.width=`${ne.reference.width}px`,je.style.minWidth="0px";break;case Xt.Gte:je.style.width="auto",je.style.minWidth=`${ne.reference.width}px`;break;case Xt.Auto:default:je.style.width="auto",je.style.minWidth="auto"}}}}),(0,yt.jD)()]}),Ne=(0,u.useCallback)(ne=>{Le.setReference(ne),H&&(typeof H=="function"?H(ne):H.current=ne)},[H,Le]),{useHoverTrigger:qe,useFocusTrigger:Et,useClickTrigger:Re,keyboardOnly:et}=Cs(R),Ue=(0,He.s9)(he,{outsidePress:L,ancestorScroll:!1,escapeKey:q}),rt=(0,He.Mk)(he,{enabled:qe,handleClose:(0,He.iB)({requireIntent:!1}),delay:{open:F,close:Y}}),Je=(0,He.iQ)(he,{enabled:Et,visibleOnly:et}),ke=(0,He.kp)(he,{enabled:Re,keyboardHandlers:ce}),{getFloatingProps:Fe,getReferenceProps:Oe}=(0,He.bv)([Ue,rt,Je,ke]),zt=(0,u.useCallback)((ne,we)=>{typeof H=="object"&&(H!=null&&H.current)&&(Le.setReference(H.current),Object.entries(ne).map(([je,Xe])=>{const ve=Ms(je);ve&&(0,co.B)()&&(we==="add"&&H.current.addEventListener(ve,Xe),we==="remove"&&H.current.removeEventListener(ve,Xe))}))},[Le,H]);(0,u.useEffect)(()=>{if(n)return;const ne=Ds(Oe());return zt(ne,"add"),()=>zt(ne,"remove")},[n,zt,Oe]);const Ia=W&&(0,i.jsx)(He.XF,{root:Is(),children:(0,i.jsxs)("div",Object.assign({role:"presentation"},(0,I.z7)(ie),{className:v()(uo.floating,d,{[uo.floatingHidden]:!!(!((p=De.hide)===null||p===void 0)&&p.referenceHidden)}),ref:Le.setFloating,style:We,"data-placement":Ke},Fe({onClick:Ua,onMouseDown:Ua,onMouseUp:Ua,onTouchStart:Fa,onTouchEnd:Fa,onTouchMove:Fa}),{children:[B,De.arrow&&(0,i.jsx)(Bs,{placement:Ke,x:De.arrow.x,y:De.arrow.y,arrowContainerClassName:pe,arrowElementClassName:me,arrowRef:N})]}))},"portal");return(0,i.jsxs)(He.$c,{id:Te,children:[n&&As({validElementWrapperClassName:v()(s),getReferenceProps:Oe,children:n,setReference:Ne,disableSpanWrapper:ue}),Ia]})}function fo(a){var{children:p}=a,d=_o(a,["children"]);return(0,He.R1)()===null?(0,i.jsx)(He.P6,{children:(0,i.jsx)(mo,Object.assign({},d,{children:p}))}):(0,i.jsx)(mo,Object.assign({},d,{children:p}))}var Zt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"),Ot={};Ot.styleTagTransform=V(),Ot.setAttributes=Q(),Ot.insert=G().bind(null,"head"),Ot.domAPI=m(),Ot.insertStyleElement=J();var br=g()(Zt.A,Ot);const bo=Zt.A&&Zt.A.locals?Zt.A.locals:void 0;var Rs=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function go(a){var{content:p,trigger:d="click",placement:s="bottom-start",children:n,triggerRef:h,widthStrategy:O="gte",triggerClassName:P}=a,E=Rs(a,["content","trigger","placement","children","triggerRef","widthStrategy","triggerClassName"]);return!n&&!h?null:(0,i.jsx)(fo,Object.assign({placement:s,popoverContent:(0,i.jsx)("div",{className:bo.dropdownContainer,children:p}),trigger:d,triggerRef:h,hasArrow:!1,widthStrategy:O,triggerClassName:v()(bo.defaultTriggerClassName,P)},E,{children:n}))}var It=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js");const Me={default:"~main",pinTop:"~pinTop",pinBottom:"~pinBottom",footer:"~footer",search:"~search",dropFocus:"~dropFocus"};var Gt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css"),wt={};wt.styleTagTransform=V(),wt.setAttributes=Q(),wt.insert=G().bind(null,"head"),wt.domAPI=m(),wt.insertStyleElement=J();var gr=g()(Gt.A,wt);const Xa=Gt.A&&Gt.A.locals?Gt.A.locals:void 0;var Ws=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const Ks=(0,u.forwardRef)((a,p)=>{var{className:d,iconPosition:s=it.After,size:n=Ca.S,target:h=Dt.Blank,type:O=Lt.Button,appearance:P=lt.Neutral,fullWidth:E=!1,tabIndex:x}=a,B=Ws(a,["className","iconPosition","size","target","type","appearance","fullWidth","tabIndex"]);return(0,i.jsx)(Ma,Object.assign({},(0,I.z7)(B),ls(B),La(B),{className:v()(Xa.button,d),iconClassName:Xa.icon,iconPosition:s,labelClassName:Xa.label,size:n,fullWidth:E,target:h,type:O,appearance:P,tabIndex:x,ref:p}))});var Jt=r("./node_modules/.pnpm/@snack-uikit+divider@3.2.12_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),Va=r("./node_modules/.pnpm/@snack-uikit+locale@1.0.1/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),Us=r("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),Tt=r.n(Us);const jt=[$e.Top,$e.Right,$e.Bottom,$e.Left];var Qa=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),kt={};kt.styleTagTransform=V(),kt.setAttributes=Q(),kt.insert=G().bind(null,"head"),kt.domAPI=m(),kt.insertStyleElement=J();var vr=g()(Qa.A,kt);const Za=Qa.A&&Qa.A.locals?Qa.A.locals:void 0;var U=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function t(a){var{tip:p,trigger:d="hoverAndFocusVisible",placement:s="top",children:n,triggerRef:h,disableMaxWidth:O=!1}=a,P=U(a,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!n&&!h?null:(0,i.jsx)(fo,Object.assign({placement:s,popoverContent:(0,i.jsx)("div",{className:Za.tooltipContainer,"data-disable-max-width":O,children:p}),trigger:d,triggerRef:h,arrowContainerClassName:Za.tooltipArrowContainer,arrowElementClassName:Za.tooltipArrowElement,hasArrow:!0,fallbackPlacements:jt},P,{children:n}))}const c=a=>a?a.offsetHeight<a.scrollHeight||a.offsetWidth<a.scrollWidth:!1,l=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],e="...",o=({text:a,element:p,truncatedElement:d})=>{if(p&&d&&c(p)){const s=p.scrollWidth/a.length;let n=a;for(const{potentialDelimiterWidth:h,leftHalfDelta:O,rightHalfDelta:P}of l){const E=Math.floor((p.offsetWidth/s-h)/2),x=a.slice(0,E-O),B=a.slice(a.length-E+P,a.length);if(n=`${x}${e}${B}`,d.innerText=n,d.scrollWidth<=p.offsetWidth-1)break}return n}return a};var Yt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),St={};St.styleTagTransform=V(),St.setAttributes=Q(),St.insert=G().bind(null,"head"),St.domAPI=m(),St.insertStyleElement=J();var hr=g()(Yt.A,St);const vo=Yt.A&&Yt.A.locals?Yt.A.locals:void 0;var Jr=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Yr(a){var{text:p,className:d,tooltipClassName:s,hideTooltip:n,placement:h,trigger:O}=a,P=Jr(a,["text","className","tooltipClassName","hideTooltip","placement","trigger"]);const[E,x]=(0,u.useState)(!1),[B,R]=(0,u.useState)(p),L=(0,u.useRef)(null),F=(0,u.useRef)(null);(0,u.useEffect)(()=>{const H=Tt()(()=>{R(o({element:L.current,truncatedElement:F.current,text:p})),x(c(L.current))},50);H();const te=new ResizeObserver(H);return L.current&&te.observe(L.current),()=>{te.disconnect()}},[E,p,n]);const Y=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{ref:L,className:vo.fullText,"data-test-id":"full-text",children:p}),(0,i.jsx)("span",{ref:F,className:vo.truncatedText,"data-test-id":"truncated-text",children:B})]});return(0,i.jsx)("span",Object.assign({className:v()(vo.wrapper,d)},(0,I.z7)(P),{children:E&&!n?(0,i.jsx)(t,{tip:p,placement:h,hoverDelayOpen:500,triggerClassName:vo.textContainer,className:s,trigger:O,children:Y}):Y}))}var ho=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),$t={};$t.styleTagTransform=V(),$t.setAttributes=Q(),$t.insert=G().bind(null,"head"),$t.domAPI=m(),$t.insertStyleElement=J();var $l=g()(ho.A,$t);const yo=ho.A&&ho.A.locals?ho.A.locals:void 0;var $r=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function qr(a){var{text:p,className:d,tooltipClassName:s,hideTooltip:n,maxLines:h=1,placement:O,trigger:P}=a,E=$r(a,["text","className","tooltipClassName","hideTooltip","maxLines","placement","trigger"]);const x=(0,u.useRef)(null),[B,R]=(0,u.useState)(!1),L=(0,u.useCallback)(()=>{R(c(x.current))},[]);(0,Ha.N)(()=>{x.current&&L()},[p,L]),(0,u.useEffect)(()=>{const Y=Tt()(()=>{L()},50),H=new ResizeObserver(Y);return x.current&&(L(),H.observe(x.current)),()=>{H.disconnect()}},[B,n,L]);const F=(0,i.jsx)("span",Object.assign({ref:x,className:v()(h>1?yo.text2AndMoreLines:yo.text1Line,d,{[yo.ellipsis]:!x.current||B}),style:{"--max-lines":h}},(0,I.z7)(E),{children:p}));return B&&!n?(0,i.jsx)(t,{tip:p,placement:O,hoverDelayOpen:500,className:s,triggerClassName:yo.tooltipTrigger,trigger:P,children:F}):F}const Fs={Middle:"middle",End:"end"};var en=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function qt(a){var{variant:p=Fs.End}=a,d=en(a,["variant"]);switch(p){case Fs.Middle:return(0,i.jsx)(Yr,Object.assign({},d));case Fs.End:default:return(0,i.jsx)(qr,Object.assign({},d))}}var tn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const yr=(0,u.createContext)({flattenItems:{},focusFlattenItems:{},firstItemId:Me.default});function st(){return(0,u.useContext)(yr)}function an({size:a,marker:p,flattenItems:d,focusFlattenItems:s,contentRender:n,firstItemId:h,virtualized:O}){return{size:a,marker:p,contentRender:n,flattenItems:d,focusFlattenItems:s,firstItemId:h,virtualized:O}}function on(a){var{children:p}=a,d=tn(a,["children"]);return(0,i.jsx)(yr.Provider,{value:an(d),children:p})}const Hs=a=>{a.stopPropagation()},sn={s:"xs",m:"s",l:"m"};var xo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css"),ea={};ea.styleTagTransform=V(),ea.setAttributes=Q(),ea.insert=G().bind(null,"head"),ea.domAPI=m(),ea.insertStyleElement=J();var ql=g()(xo.A,ea);const Ga=xo.A&&xo.A.locals?xo.A.locals:void 0;function xr({label:a,truncate:p,divider:d,mode:s="secondary",selectButton:n}){const{size:h="s"}=st(),{t:O}=(0,Va.Ym)("List"),P=(0,u.useMemo)(()=>{if(!n)return null;const{onClick:E,checked:x,itemRef:B,label:R}=n;return(0,i.jsx)("span",{className:Ga.selectButton,"data-size":h,"data-weight":d&&s||void 0,children:(0,i.jsx)(Ks,{size:sn[h],tabIndex:0,onClick:L=>{E==null||E(L),L.preventDefault(),L.stopPropagation()},onFocus:Hs,ref:B,label:R!=null?R:O(x?"groupSelectButton.reset":"groupSelectButton.select")})})},[d,s,n,h,O]);return a?(0,i.jsxs)("div",{className:Ga.separatorWithLabel,"data-size":h,children:[(0,i.jsx)("span",{className:Ga.label,"data-mode":s,children:(0,i.jsx)(qt,{variant:p==null?void 0:p.variant,text:a,maxLines:1})}),(0,i.jsxs)("div",{style:{flex:1},children:[P,d&&(0,i.jsx)(Jt.c,{weight:s==="primary"?"regular":"light",className:Ga.divider})]})]}):d?(0,i.jsx)("div",{className:Ga.separatorWithoutLabel,"data-size":h,children:(0,i.jsx)(Jt.c,{weight:"regular"})}):null}var rn;const nn=a=>`${Me.footer}__${a}`,Or=(a,p)=>[a,p].join("-"),ei=a=>Or(rn.default,a);var ln=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const Oo=(0,u.createContext)({value:void 0,onChange:void 0,mode:void 0});function dn(a){return"mode"in a&&a.mode==="multiple"}function cn(a){return"mode"in a&&a.mode==="single"}function pn({children:a}){return(0,i.jsx)(Oo.Provider,{value:{mode:"none"},children:a})}function un({value:a,defaultValue:p,onChange:d,children:s}){const[n,h]=(0,It.I)({value:a,defaultValue:p,onChange:d}),O=(0,u.useCallback)(P=>h(E=>{if(P!==E)return P}),[h]);return(0,i.jsx)(Oo.Provider,{value:{value:n,onChange:O,mode:"single",isSelectionSingle:!0,isSelectionMultiple:!1,setValue:h},children:s})}function _n({value:a,defaultValue:p,onChange:d,children:s}){const[n,h]=(0,It.I)({value:a,defaultValue:p,onChange:d}),O=(0,u.useCallback)(P=>{h(E=>{if(Array.isArray(E))return E.includes(P)?E.filter(x=>x!==P):E.concat(P);if(E===void 0)return Array.isArray(P)?P:[P]})},[h]);return(0,i.jsx)(Oo.Provider,{value:{value:n,onChange:O,mode:"multiple",isSelectionSingle:!1,isSelectionMultiple:!0,setValue:h},children:s})}function mn(a){var{children:p}=a,d=ln(a,["children"]);return cn(d)?(0,i.jsx)(un,Object.assign({},d,{children:p})):dn(d)?(0,i.jsx)(_n,Object.assign({},d,{children:p})):(0,i.jsx)(pn,{children:p})}function ta(){return(0,u.useContext)(Oo)}var fn=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),bn=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),wo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css"),aa={};aa.styleTagTransform=V(),aa.setAttributes=Q(),aa.insert=G().bind(null,"head"),aa.domAPI=m(),aa.insertStyleElement=J();var ti=g()(wo.A,aa);const Xs=wo.A&&wo.A.locals?wo.A.locals:void 0;var gn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function vn(a){var{children:p,expanded:d,className:s,header:n}=a,h=gn(a,["children","expanded","className","header"]);return(0,i.jsxs)("div",Object.assign({className:v()(Xs.accordion,s),role:"menuitem","aria-haspopup":!0,"aria-expanded":d},(0,I.z7)(h),{children:[n,(0,i.jsx)("div",{className:Xs.contentWrapper,"aria-hidden":!d,children:(0,i.jsx)("div",{className:Xs.content,"data-content":!0,children:d&&p})})]}))}const wr=(0,u.createContext)({}),jr=()=>(0,u.useContext)(wr),kr=(0,u.createContext)({}),Sr=()=>(0,u.useContext)(kr);var hn=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/minus/index.js");const yn={Checkbox:"checkbox",Radio:"radio"},Ja={S:"s",M:"m"},ai=null,oi=null;function Vs(a){return Object.entries(a).reduce(function(p,[d,s]){return p[`data-${d.toLowerCase()}`]=s,p},{})}function xn(a){switch(a){case Ja.S:return 16;case Ja.M:default:return 24}}var jo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css"),oa={};oa.styleTagTransform=V(),oa.setAttributes=Q(),oa.insert=G().bind(null,"head"),oa.domAPI=m(),oa.insertStyleElement=J();var si=g()(jo.A,oa);const Er=jo.A&&jo.A.locals?jo.A.locals:void 0;var On=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const zr=(0,u.forwardRef)(function(p,d){var{render:s,checked:n,defaultChecked:h,onChange:O,onBlur:P,onFocus:E,disabled:x,className:B,size:R=Ja.M,mode:L=yn.Checkbox,onKeyUp:F,"data-test-id":Y}=p,H=On(p,["render","checked","defaultChecked","onChange","onBlur","onFocus","disabled","className","size","mode","onKeyUp","data-test-id"]);const[te,$]=(0,Ka.iC)(n,!!h,O),[q,ce]=(0,u.useState)(!1),[se,pe]=(0,u.useState)(!1),me={disabled:!!x,focusVisible:q,checked:te,hover:se,size:R};return(0,i.jsxs)("span",Object.assign({role:L,className:v()(B,Er.toggleLayout),"data-size":R,"data-test-id":Y,onMouseEnter:()=>pe(!0),onMouseLeave:()=>pe(!1),onKeyUp:F},Vs(me),{children:[s(me),(0,i.jsx)("input",Object.assign({},H,{"data-test-id":`${Y}-native-input`,ref:d,type:L,className:Er.togglePrivate,checked:te,disabled:x,onChange:ue=>$(ue.target.checked),onFocus:ue=>{ce(ue.target.matches(":focus-visible")),E==null||E(ue)},onBlur:ue=>{ce(!1),P==null||P(ue)}}))]}))});var ko=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/styles.module.css"),sa={};sa.styleTagTransform=V(),sa.setAttributes=Q(),sa.insert=G().bind(null,"head"),sa.domAPI=m(),sa.insertStyleElement=J();var ri=g()(ko.A,sa);const Qs=ko.A&&ko.A.locals?ko.A.locals:void 0;var wn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function jn(a){var{inputRef:p,indeterminate:d,indeterminateDefault:s,onChange:n,"data-test-id":h,size:O=Ja.M}=a,P=wn(a,["inputRef","indeterminate","indeterminateDefault","onChange","data-test-id","size"]);const E=(0,u.useRef)(null),x=(0,S.A)(E,p),[B,R]=(0,Ka.iC)(d,s),L=(0,u.useCallback)(Y=>{n==null||n(Y),R(!1)},[n,R]);(0,u.useEffect)(()=>{E.current&&(E.current.indeterminate=!!B)},[E,B]);const F=(0,u.useMemo)(()=>xn(O),[O]);return(0,i.jsx)(zr,Object.assign({},P,{size:O,onChange:L,"data-test-id":h,ref:x,render:function(H){const te=Vs(Object.assign(Object.assign({},H),{indeterminate:!!B}));return(0,i.jsxs)("div",Object.assign({className:Qs.container},te,{children:[(0,i.jsx)("div",Object.assign({className:Qs.box},te)),(0,i.jsx)("div",Object.assign({className:Qs.icon},te,{children:B?(0,i.jsx)(hn.A,{size:F}):(0,i.jsx)(Ze.A,{size:F})}))]}))}}))}var ra=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),So=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"),na={};na.styleTagTransform=V(),na.setAttributes=Q(),na.insert=G().bind(null,"head"),na.domAPI=m(),na.insertStyleElement=J();var ni=g()(So.A,na);const kn=So.A&&So.A.locals?So.A.locals:void 0;function Pr(){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:kn.spinner,children:(0,i.jsx)("path",{d:"M5 8C5 6.34315 6.34315 5 8 5",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round"})})}var Eo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"),la={};la.styleTagTransform=V(),la.setAttributes=Q(),la.insert=G().bind(null,"head"),la.domAPI=m(),la.insertStyleElement=J();var li=g()(Eo.A,la);const ia=Eo.A&&Eo.A.locals?Eo.A.locals:void 0;var Sn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function En(a){var{inputRef:p,"data-test-id":d,showIcon:s,loading:n,size:h=Ja.M}=a,O=Sn(a,["inputRef","data-test-id","showIcon","loading","size"]);return(0,i.jsx)(zr,Object.assign({},O,{size:h,"data-test-id":d,ref:p,render:function(E){const x=Vs(E);return(0,i.jsxs)("div",Object.assign({className:ia.container},x,{children:[(0,i.jsx)("div",Object.assign({className:ia.box},x)),(0,i.jsxs)("div",Object.assign({className:ia.containerFlag},x,{children:[(0,i.jsx)("div",Object.assign({className:ia.flag},x)),(s||n)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",Object.assign({className:ia.flag_icon_off},x,{children:n?(0,i.jsx)(Pr,{}):(0,i.jsx)(ra.A,{size:16})})),(0,i.jsx)("div",Object.assign({className:ia.flag_icon_on},x,{children:n?(0,i.jsx)(Pr,{}):(0,i.jsx)(Ze.A,{size:16})}))]})]}))]}))}}))}var zo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css"),da={};da.styleTagTransform=V(),da.setAttributes=Q(),da.insert=G().bind(null,"head"),da.domAPI=m(),da.insertStyleElement=J();var ii=g()(zo.A,da);const Ya=zo.A&&zo.A.locals?zo.A.locals:void 0;var zn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const Pn={option:1,description:2,variant:"end"};function In(a){var{truncate:p,caption:d,description:s,option:n,className:h,disabled:O}=a,P=zn(a,["truncate","caption","description","option","className","disabled"]);const{size:E="s"}=st(),x=(0,u.useMemo)(()=>Object.assign(Object.assign({},Pn),p),[p]);return(0,i.jsxs)("div",Object.assign({className:v()(Ya.content,h)},(0,I.z7)(P),{"data-size":E!=null?E:"s","data-disabled":O||void 0,children:[(0,i.jsxs)("div",{className:Ya.headline,children:[(0,i.jsx)("div",{className:Ya.label,children:(0,i.jsx)(qt,{variant:x.variant,text:String(n),maxLines:x.option,"data-test-id":"list__base-item-option"})}),d&&(0,i.jsx)("span",{className:Ya.caption,children:d})]}),s&&(0,i.jsx)("div",{className:Ya.description,children:(0,i.jsx)(qt,{text:s,maxLines:x.description,"data-test-id":"list__base-item-description"})})]}))}const Ir=(0,u.createContext)({closeDroplist:()=>{},closeDroplistOnItemClick:!1}),Tn=()=>(0,u.useContext)(Ir);var Po=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),ca={};ca.styleTagTransform=V(),ca.setAttributes=Q(),ca.insert=G().bind(null,"head"),ca.domAPI=m(),ca.insertStyleElement=J();var di=g()(Po.A,ca);const Zs=Po.A&&Po.A.locals?Po.A.locals:void 0;var An=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Cn(a){return a&&!("items"in a)}function Mn(a){return a&&"items"in a&&a.type==="collapse"}function Tr(a){return a&&"items"in a&&a.type==="next-list"}function Io(a){return a&&"items"in a&&a.type==="group"}function Ar(a){return a&&"items"in a&&a.type==="group-select"}function Ln(a){return typeof a=="object"&&a.option!==void 0}const ci=null,pi=null,ui=null,_i=null;function Gs({items:a,prefix:p,parentId:d}){const s={},n={};function h({item:R,idx:L,prefix:F,parentId:Y=Me.default}){var H,te;const $=F!==void 0?Or(F,L):String(L),q=(H=Io(R)?void 0:R.id)!==null&&H!==void 0?H:$;if(Cn(R))return s[q]=Object.assign(Object.assign({},R),{items:[],allChildIds:[],id:q}),n[$]={key:$,originalId:q,id:$,disabled:R.disabled,parentId:Y,items:[],allChildIds:[],itemRef:R.itemRef||(0,u.createRef)()},{id:q,children:[q],autoId:$,focusChildren:[$]};let ce=[],se=[];const pe=[],me=[],{items:ue}=R,xe=An(R,["items"]),ie=Io(R)?Y!=null?Y:Me.default:$,N=ue.filter(oe=>!oe.hidden);for(let oe=0;oe<N.length;oe++){const{id:le,children:Te,autoId:Be,focusChildren:Ee}=h({item:N[oe],idx:oe,prefix:q,parentId:ie});me.push(Be),pe.push(le),ce=ce.concat(Te),se=se.concat(Ee)}const W=[...new Set(ce.concat(pe))],Z=[...new Set(se.concat(me))];return s[q]=Object.assign(Object.assign({},xe),{id:q,items:[],allChildIds:W}),n[$]={key:$,originalId:q,id:$,parentId:Y,items:me,allChildIds:Z,disabled:(R.type==="collapse"||R.type==="next-list")&&R.disabled,type:R.type,itemRef:Io(R)?void 0:(te=R.itemRef)!==null&&te!==void 0?te:(0,u.createRef)()},{id:q,children:W,autoId:$,focusChildren:Z}}const O=[],P=[];let E=[];const x=a.filter(R=>!R.hidden);for(let R=0;R<x.length;R++){const{id:L,children:F,autoId:Y}=h({item:x[R],idx:R,prefix:p,parentId:d});P.push(Y),O.push(L),E.push(L),E=E.concat(F)}const B=[...new Set(E)];return{focusCloseChildIds:P,allChildIds:B,flattenItems:s,focusFlattenItems:n}}function Cr({focusFlattenItems:a,focusCloseChildIds:p,openCollapseItems:d,isSelectionMultiple:s}){const n=[],h=[];function O(P){P.forEach(E=>{const x=a[E];if(x.type==="group"){O(x.items);return}if(!x.disabled){if(x.type==="group-select"){s&&n.push(x.id),O(x.items);return}n.push(x.id),x.type&&(h.push(E),d.includes(x.originalId)&&O(x.items))}})}return O(p),{ids:n,expandedIds:h}}const Dn={s:"s",m:"s",l:"m"};var To=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css"),pa={};pa.styleTagTransform=V(),pa.setAttributes=Q(),pa.insert=G().bind(null,"head"),pa.domAPI=m(),pa.insertStyleElement=J();var mi=g()(To.A,pa);const At=To.A&&To.A.locals?To.A.locals:void 0;var Bn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Js(a){var p,{beforeContent:d,afterContent:s,content:n,onClick:h,onMouseDown:O,id:P,expandIcon:E,disabled:x,open:B,itemRef:R,switch:L,showSwitchIcon:F,onKeyDown:Y,onFocus:H,indeterminate:te,checked:$,onSelect:q,onOpenNestedList:ce,isParentNode:se,className:pe,inactive:me,itemWrapRender:ue}=a,xe=Bn(a,["beforeContent","afterContent","content","onClick","onMouseDown","id","expandIcon","disabled","open","itemRef","switch","showSwitchIcon","onKeyDown","onFocus","indeterminate","checked","onSelect","onOpenNestedList","isParentNode","className","inactive","itemWrapRender"]);const ie=!me,{size:N="s",marker:W,contentRender:Z,firstItemId:oe,focusFlattenItems:le}=st(),{level:Te=0}=jr(),{closeDroplist:Be,closeDroplistOnItemClick:Ee}=Tn(),{value:We,onChange:Le,mode:he,isSelectionSingle:De,isSelectionMultiple:Ke}=ta(),Ne=De?$!=null?$:We===P:$!=null?$:We==null?void 0:We.includes(P!=null?P:""),qe=()=>{Le==null||Le(P)},Et=Oe=>{x||O==null||O(Oe)},Re=Oe=>{H==null||H(Oe),Oe.stopPropagation()},et=()=>{se&&q?q():qe()},Ue=Oe=>{x||(h==null||h(Oe),ie&&(se||qe()),!Ke&&Ee&&Be())},rt=Oe=>{if(Y==null||Y(Oe),Oe.key==="ArrowRight"&&ce){ce(Oe),Oe.preventDefault(),Oe.stopPropagation();return}(Oe.code==="Space"||Oe.key==="Enter"||Oe.key===" ")&&(Ke&&se&&q&&q(),!se&&qe(),!se&&(Ue==null||Ue(Oe)),Oe.stopPropagation(),Oe.preventDefault())},Je=Oe=>{se&&Oe.stopPropagation()},ke=(0,I.z7)(xe),Fe=(0,i.jsx)("div",{className:v()(Zs.itemWrapper,At.innerWrapper,pe),"data-inactive":me||void 0,"data-disabled":x||void 0,"data-variant":he||void 0,"data-checked":se&&Ne||!se&&Ne&&!L||void 0,children:(0,i.jsxs)("li",{"data-type":"outside",role:"menuitem","data-test-id":ke["data-test-id"]||"list__base-item_"+P,ref:R,className:v()(Zs.listItem,At.droplistItem),"data-size":N,onClick:Ue,onMouseDown:Et,tabIndex:oe&&P===le[oe].originalId?0:-1,"data-non-pointer":me&&!h,"data-variant":he||void 0,"data-open":B||void 0,onKeyDown:rt,onFocus:Re,style:{"--level":Te},"data-level-one":Te===1||void 0,"data-level-more-one":Te>1||void 0,"data-checked":se&&(te||Ne)||Ne&&!L||void 0,children:[!L&&De&&W&&!se&&ie&&(0,i.jsx)("div",{className:At.markerContainer,"data-test-id":"list__base-item-marker"}),!L&&Ke&&ie&&(0,i.jsx)("div",{className:At.checkbox,children:(0,i.jsx)(jn,{size:Dn[N!=null?N:"s"],disabled:x,tabIndex:-1,onChange:se?et:void 0,checked:Ne,"data-test-id":"list__base-item-checkbox",onClick:Je,indeterminate:te})}),d&&(0,i.jsx)("div",{className:At.beforeContent,children:d}),n&&Ln(n)?(p=Z==null?void 0:Z({id:P,content:n,disabled:x}))!==null&&p!==void 0?p:(0,i.jsx)(In,Object.assign({disabled:x},n)):(0,i.jsxs)("div",{className:At.content,children:[" ",n," "]}),s,L&&ie&&(0,i.jsx)(En,{disabled:x,checked:Ne,"data-test-id":"list__base-item-switch",showIcon:F}),!L&&E&&(0,i.jsx)("span",{className:At.expandableIcon,children:E})]})});return ue?ue(Fe):Fe}var Nn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Rn(a){var{id:p,disabled:d,allChildIds:s,items:n}=a,h=Nn(a,["id","disabled","allChildIds","items"]);const{level:O=0}=jr(),{openCollapseItems:P=[],toggleOpenCollapseItem:E}=Sr(),{value:x,isSelectionSingle:B,isSelectionMultiple:R}=ta(),{indeterminate:L,handleOnSelect:F,checked:Y}=ar({items:n,id:p,disabled:d,allChildIds:s}),H=!!P.includes(p!=null?p:""),te=!!(L&&!H&&B&&x&&s.includes(x)||R&&Y),$=(0,u.useCallback)(()=>{E==null||E(p!=null?p:"")},[p,E]),q=ao(n),ce=se=>{var pe;E==null||E(p!=null?p:""),(pe=h.onClick)===null||pe===void 0||pe.call(h,se)};return(0,i.jsx)(vn,{header:(0,i.jsx)(Js,Object.assign({},h,{id:p,disabled:d,expandIcon:H?(0,i.jsx)(fn.A,{}):(0,i.jsx)(bn.A,{}),onClick:ce,isParentNode:!0,onOpenNestedList:$,checked:te,indeterminate:L,onSelect:d?void 0:F})),expanded:H,"data-test-id":`list__accordion-item-${p}`,children:(0,i.jsx)(wr.Provider,{value:{level:O+1},children:q})})}function Wn({label:a,truncate:p,divider:d,items:s,mode:n,id:h,itemRef:O,allChildIds:P,selectButtonLabel:E}){const{indeterminate:x,checked:B,handleOnSelect:R}=ar({items:s,id:h,disabled:!1,allChildIds:P}),L=ao(s);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(xr,{label:a,truncate:p,divider:d,mode:n,selectButton:{indeterminate:x,checked:B,itemRef:O,onClick:R,label:E}}),L]})}var Kn=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js");const Mr=(0,u.createContext)({handleListKeyDownFactory:()=>()=>{}}),Un=()=>(0,u.useContext)(Mr);var Fn=r("./node_modules/.pnpm/@tanstack+react-virtual@3.11.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@tanstack/react-virtual/dist/esm/index.js"),Hn=r("./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),Xn=r("./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),Lr=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js");function Vn({noDataState:a,noResultsState:p,errorDataState:d}){const{t:s}=(0,Va.Ym)("List");return(0,u.useMemo)(()=>{const n=Object.assign({icon:{icon:Lr.A,appearance:"neutral",decor:!0},description:s("noData.description")},a),h=Object.assign({description:s("noResults.description")},p),O=Object.assign({icon:{icon:ra.A,appearance:"neutral",decor:!0},description:s("errorData.description")},d);return{noDataState:n,noResultsState:h,errorDataState:O}},[d,a,p,s])}const Dr={S:"s",M:"m",L:"l"},Qn={Vertical:"vertical",Horizontal:"horizontal"},ua={icon:"info-block__icon",title:"info-block__title",description:"info-block__description",footer:"info-block__footer",primaryButton:"info-block__primary-button",secondaryButton:"info-block__secondary-button"},Br=(0,u.createContext)({size:Dr.S});function Zn(){return(0,u.useContext)(Br)}function Nr({Button:a,tooltip:p}){return p?function(s){return(0,i.jsx)(t,Object.assign({},p,{children:(0,i.jsx)(a,Object.assign({},s))}))}:a}var Ao=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.41_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"),_a={};_a.styleTagTransform=V(),_a.setAttributes=Q(),_a.insert=G().bind(null,"head"),_a.domAPI=m(),_a.insertStyleElement=J();var fi=g()(Ao.A,_a);const Gn=Ao.A&&Ao.A.locals?Ao.A.locals:void 0;function Jn({primaryButton:a,secondaryButton:p,className:d}){const s=Nr({Button:Ba,tooltip:a.tooltip}),n=Nr({Button:io,tooltip:p==null?void 0:p.tooltip}),{size:h}=Zn();return(0,i.jsxs)("div",{className:v()(Gn.infoBlockFooter,d),children:[p&&(0,i.jsx)(n,Object.assign({},p,{size:h,"data-test-id":p["data-test-id"]||ua.secondaryButton})),(0,i.jsx)(s,Object.assign({},a,{size:h,"data-test-id":a["data-test-id"]||ua.primaryButton}))]})}var Rr=r("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.12_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),Co=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.41_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"),ma={};ma.styleTagTransform=V(),ma.setAttributes=Q(),ma.insert=G().bind(null,"head"),ma.domAPI=m(),ma.insertStyleElement=J();var bi=g()(Co.A,ma);const fa=Co.A&&Co.A.locals?Co.A.locals:void 0;var Yn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function $n(a){var p,d,{title:s,description:n,icon:h,size:O=Dr.S,footer:P,align:E=Qn.Vertical,className:x}=a,B=Yn(a,["title","description","icon","size","footer","align","className"]);return(0,i.jsx)(Br.Provider,{value:{size:O},children:(0,i.jsxs)("div",Object.assign({className:v()(fa.infoBlock,x),"data-size":O,"data-align":E},(0,I.z7)(B),{children:[h&&(0,i.jsx)(Rr.I,{icon:h.icon,appearance:(p=h.appearance)!==null&&p!==void 0?p:"primary",decor:(d=h.decor)!==null&&d!==void 0?d:!0,size:O,"data-test-id":ua.icon}),(0,i.jsxs)("div",{className:fa.contentLayout,children:[(0,i.jsxs)("div",{className:fa.textWrap,children:[s&&(0,i.jsx)(f.o,{family:"sans",purpose:"title",size:O,className:fa.title,"data-test-id":ua.title,children:s}),n&&(0,i.jsx)(f.o,{family:"sans",purpose:"body",size:O,className:fa.description,"data-test-id":ua.description,children:n})]}),P&&(0,i.jsx)("div",{className:fa.footer,"data-test-id":ua.footer,children:P})]})]}))})}const Mo=$n;Mo.Footer=Jn;var Lo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css"),ba={};ba.styleTagTransform=V(),ba.setAttributes=Q(),ba.insert=G().bind(null,"head"),ba.domAPI=m(),ba.insertStyleElement=J();var gi=g()(Lo.A,ba);const Ys=Lo.A&&Lo.A.locals?Lo.A.locals:void 0;function qn({dataError:a,dataFiltered:p,hasNoItems:d,emptyStates:s,loading:n,size:h}){return n?null:a?(0,i.jsx)("div",{className:Ys.listEmptyStateWrapper,children:(0,i.jsx)(Mo,Object.assign({},s.errorDataState,{size:h,align:"vertical"}))}):p&&d?(0,i.jsx)("div",{className:Ys.listEmptyStateWrapper,children:(0,i.jsx)(Mo,Object.assign({},s.noResultsState,{size:h,align:"vertical","data-test-id":"list__no-results"}))}):!p&&d?(0,i.jsx)("div",{className:Ys.listEmptyStateWrapper,children:(0,i.jsx)(Mo,Object.assign({},s.noDataState,{size:h,align:"vertical","data-test-id":"list__no-data"}))}):null}var Do=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css"),ga={};ga.styleTagTransform=V(),ga.setAttributes=Q(),ga.insert=G().bind(null,"head"),ga.domAPI=m(),ga.insertStyleElement=J();var vi=g()(Do.A,ga);const Wr=Do.A&&Do.A.locals?Do.A.locals:void 0;function el({children:a}){const{size:p="s"}=st();return a?(0,i.jsxs)("div",{className:v()(Wr.pinTopItem),"data-size":p,"data-test-id":"list__pin-top-group-item",children:[(0,i.jsx)("div",{children:a}),(0,i.jsx)(Jt.c,{weight:"regular"})]}):null}function tl({children:a}){const{size:p="s"}=st();return a?(0,i.jsxs)("div",{className:v()(Wr.pinBottomItem),"data-size":p,"data-test-id":"list__pin-bottom-group-item",children:[(0,i.jsx)(Jt.c,{weight:"regular"}),(0,i.jsx)("div",{children:a})]}):null}var $s=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js");const qs={S:"s",M:"m",L:"l"},hi=null,$a={S:"s",M:"m"},al={[qs.S]:$a.S,[qs.M]:$a.M,[qs.L]:$a.M};var Bo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"),va={};va.styleTagTransform=V(),va.setAttributes=Q(),va.insert=G().bind(null,"head"),va.domAPI=m(),va.insertStyleElement=J();var yi=g()(Bo.A,va);const ol=Bo.A&&Bo.A.locals?Bo.A.locals:void 0,sl=(0,u.forwardRef)(({size:a,onClick:p,tabIndex:d=-1,onKeyDown:s,onMouseDown:n},h)=>{const O=P=>{P.stopPropagation(),p(P)};return(0,i.jsxs)("button",{className:ol.buttonClearValue,"data-size":a,onClick:O,"data-test-id":"button-clear-value",type:"button",ref:h,onKeyDown:s,onMouseDown:n,tabIndex:d,children:[a===$a.S&&(0,i.jsx)(ra.A,{size:16}),a===$a.M&&(0,i.jsx)(ra.A,{})]})});var rl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function nl({clearButtonRef:a,showClearButton:p,size:d,onClear:s,onDown:n}){const h=(0,$s.A)(s),O=(0,$s.A)(n!=null?n:(()=>{}));return(0,u.useMemo)(()=>({id:"clear",active:!0,ref:a,show:p,render:P=>{var{key:E}=P,x=rl(P,["key"]);const B=R=>{x.onClick(R),h(R)};return(0,i.jsx)(sl,Object.assign({},x,{onMouseDown:O,size:al[d],onClick:B}),E)}}),[a,h,O,p,d])}function ll(a){var p;const d=(p=a==null?void 0:a.value.length)!==null&&p!==void 0?p:0;a==null||a.setSelectionRange(d,d)}function Kr(a){a==null||a.setSelectionRange(0,a==null?void 0:a.value.length)}function qa(a){setTimeout(a,0)}function il(a){return(a==null?void 0:a.selectionStart)===0}function dl(a){var p;return(a==null?void 0:a.selectionStart)===((p=a==null?void 0:a.value)===null||p===void 0?void 0:p.length)}function cl({inputRef:a,setInputFocus:p=()=>{var P;return(P=a.current)===null||P===void 0?void 0:P.focus()},postfixButtons:d,prefixButtons:s=[],onButtonKeyDown:n=()=>{},readonly:h,submitKeys:O}){const[P,E]=(0,u.useState)(0),x=(0,$s.A)(n),B=(0,u.useCallback)(()=>s.map(()=>-1),[s]),[R,L]=(0,u.useState)(B),F=(0,u.useCallback)(()=>d.map(()=>-1),[d]),[Y,H]=(0,u.useState)(F),te=(0,u.useCallback)((N,W)=>{const Z=W==="ArrowLeft"?-1:1,oe=le=>W==="ArrowLeft"?le>=0:le<s.length;for(let le=N+Z;oe(le);le+=Z)if(s[le].active&&s[le].show)return le;return N},[s]),$=(0,u.useCallback)((N,W)=>{const Z=W==="ArrowLeft"?-1:1,oe=le=>W==="ArrowLeft"?le>=0:le<d.length;for(let le=N+Z;oe(le);le+=Z)if(d[le].active&&d[le].show)return le;return N},[d]),q=(0,u.useCallback)(()=>{E(0),L(B),H(F)},[B,F]),ce=(0,u.useCallback)(()=>{q(),p()},[q,p]),se=(0,u.useCallback)(N=>{var W,Z;E(-1),L(oe=>oe.map((le,Te)=>Te===N?0:-1)),H(F),!((W=s[N])===null||W===void 0)&&W.active&&((Z=s[N].ref.current)===null||Z===void 0||Z.focus())},[F,s]),pe=(0,u.useCallback)(N=>{var W,Z;E(-1),L(B),H(oe=>oe.map((le,Te)=>Te===N?0:-1)),!((W=d[N])===null||W===void 0)&&W.active&&((Z=d[N].ref.current)===null||Z===void 0||Z.focus())},[B,d]),me=(0,u.useCallback)(N=>{if(q(),N.key==="ArrowRight"&&(h||dl(a.current))){const W=$(-1,N.key);W>=0&&pe(W)}if(N.key==="ArrowLeft"&&(h||il(a.current))){const W=te(s.length,N.key);W>=0&&se(W)}},[$,te,pe,se,a,s.length,h,q]),ue=(0,u.useCallback)(N=>W=>{if(W.key==="ArrowRight"){const Z=te(N,W.key);N===Z?(W.preventDefault(),ce(),h&&qa(()=>Kr(a.current))):se(Z)}W.key==="ArrowLeft"&&N<=s.length-1&&se(te(N,W.key)),O.includes(W.key)&&qa(()=>q()),x==null||x(W)},[x,s.length,te,se,ce,a,h,q,O]),xe=(0,u.useCallback)(N=>W=>{if(W.key==="ArrowLeft"){const Z=$(N,W.key);N===Z?(W.preventDefault(),ce(),h&&qa(()=>Kr(a.current))):pe(Z)}W.key==="ArrowRight"&&N<=d.length-1&&pe($(N,W.key)),O.includes(W.key)&&qa(()=>q()),x==null||x(W)},[x,d.length,$,pe,ce,a,h,q,O]),ie=(0,u.useCallback)(()=>{qa(()=>q())},[q]);return{inputTabIndex:P,onInputKeyDown:me,setInitialTabIndices:q,prefixButtons:s.some(N=>N.show)?(0,i.jsx)(i.Fragment,{children:s.map((N,W)=>N.show?N.active?N.render({key:N.id,ref:N.ref,tabIndex:R[W],onKeyDown:ue(W),onClick:ie}):N.render({key:N.id}):null)}):void 0,postfixButtons:d.some(N=>N.show)?(0,i.jsx)(i.Fragment,{children:d.map((N,W)=>N.show?N.active?N.render({key:N.id,ref:N.ref,tabIndex:Y[W],onKeyDown:xe(W),onClick:ie}):N.render({key:N.id}):null)}):void 0}}const pl={Text:"text",Password:"password",Number:"number",Tel:"tel",Email:"email",Url:"url"},ul={Text:"text",Decimal:"decimal",Numeric:"numeric",Tel:"tel",Search:"search",Email:"email",Url:"url",None:"none"};var No=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"),ha={};ha.styleTagTransform=V(),ha.setAttributes=Q(),ha.insert=G().bind(null,"head"),ha.domAPI=m(),ha.insertStyleElement=J();var xi=g()(No.A,ha);const _l=No.A&&No.A.locals?No.A.locals:void 0;var ml=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const fl=(0,u.forwardRef)((a,p)=>{var{name:d,value:s="",onChange:n,placeholder:h,id:O,className:P,type:E=pl.Text,inputMode:x=ul.Text,disabled:B=!1,readonly:R=!1,autoComplete:L=!1,autoFocus:F=!1,maxLength:Y,min:H,max:te,step:$,onFocus:q,onBlur:ce,onKeyDown:se,onPaste:pe,tabIndex:me=0,onClick:ue,onMouseDown:xe,spellCheck:ie,pattern:N}=a,W=ml(a,["name","value","onChange","placeholder","id","className","type","inputMode","disabled","readonly","autoComplete","autoFocus","maxLength","min","max","step","onFocus","onBlur","onKeyDown","onPaste","tabIndex","onClick","onMouseDown","spellCheck","pattern"]);const Z=le=>{n==null||n(le.target.value,le)};let oe;switch(L){case!0:oe="on";break;case!1:oe="off";break;default:oe=L;break}return(0,i.jsx)("input",Object.assign({name:d,maxLength:Y,id:O,className:v()(P,_l.inputPrivate),autoComplete:oe,ref:p,value:s,onChange:Z,placeholder:h,type:E,inputMode:x,disabled:B,readOnly:R,onFocus:q,onBlur:ce,onKeyDown:se,onPaste:pe,tabIndex:me,onClick:ue,onMouseDown:xe,min:H,max:te,step:$,spellCheck:ie,title:"",pattern:N,autoFocus:F},(0,I.z7)(W)))}),bl={S:"s",M:"m",L:"l"},er={field:"search__field",input:"search__field-input",iconSun:"search__icon-sun",iconSearch:"search__icon-search",buttonClearValue:"button-clear-value"};var Ro=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+search-private@0.4.37_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/styles.module.css"),ya={};ya.styleTagTransform=V(),ya.setAttributes=Q(),ya.insert=G().bind(null,"head"),ya.domAPI=m(),ya.insertStyleElement=J();var Oi=g()(Ro.A,ya);const tr=Ro.A&&Ro.A.locals?Ro.A.locals:void 0;var gl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const vl=(0,u.forwardRef)(function(p,d){var{size:s=bl.S,value:n="",onChange:h,loading:O,placeholder:P,onKeyDown:E,onFocus:x,onBlur:B,onSubmit:R,className:L,tabIndex:F}=p,Y=gl(p,["size","value","onChange","loading","placeholder","onKeyDown","onFocus","onBlur","onSubmit","className","tabIndex"]);const[H="",te]=(0,It.I)({value:n,defaultValue:"",onChange:h}),$=(0,u.useRef)(null),q=(0,u.useRef)(null),{t:ce}=(0,Va.Ym)("SearchPrivate"),me=nl({clearButtonRef:q,showClearButton:!!H,size:s,onClear:()=>{var Z;te(""),(Z=$.current)===null||Z===void 0||Z.focus()}}),{postfixButtons:ue,inputTabIndex:xe,onInputKeyDown:ie}=cl({inputRef:$,postfixButtons:(0,u.useMemo)(()=>[me],[me]),readonly:!1,submitKeys:["Enter","Space"]}),N=(0,u.useCallback)(Z=>{var oe;E&&E(Z),ie(Z),Z.key==="Enter"&&(!((oe=$.current)===null||oe===void 0)&&oe.value)&&R&&R($.current.value)},[ie,E,R]),W=(0,u.useCallback)(Z=>{x&&x(Z),ll($.current)},[x]);return(0,i.jsxs)("div",Object.assign({className:v()(tr.container,L)},(0,I.z7)(Y),{"data-size":s,children:[(0,i.jsx)("span",{className:tr.prefix,children:O?(0,i.jsx)(lo.b,{"data-test-id":er.iconSun}):(0,i.jsx)(Lr.A,{"data-test-id":er.iconSearch})}),(0,i.jsx)(fl,{inputMode:"search",value:H,onChange:te,onKeyDown:N,onFocus:W,onBlur:B,tabIndex:F!=null?F:xe,ref:(0,S.A)(d,$),placeholder:P!=null?P:ce("placeholder"),type:"text","data-test-id":er.input}),(0,i.jsx)("span",{className:tr.postfix,children:ue})]}))});var Wo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css"),xa={};xa.styleTagTransform=V(),xa.setAttributes=Q(),xa.insert=G().bind(null,"head"),xa.domAPI=m(),xa.insertStyleElement=J();var wi=g()(Wo.A,xa);const hl=Wo.A&&Wo.A.locals?Wo.A.locals:void 0;function yl({search:a,itemRef:p}){const{size:d="s",firstItemId:s}=st(),n=h=>{var O;["ArrowDown","ArrowUp"].includes(h.key)&&h.preventDefault(),(O=a==null?void 0:a.onKeyDown)===null||O===void 0||O.call(a,h)};return a?(0,i.jsx)("div",{className:v()(Zs.listItem,hl.searchItem),"data-size":d,"data-test-id":"list__search-item",children:(0,i.jsx)(vl,Object.assign({size:d,tabIndex:Me.search===s?0:-1,onKeyDown:n,onFocus:Hs},a,{ref:p}))}):null}var Ko=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),Oa={};Oa.styleTagTransform=V(),Oa.setAttributes=Q(),Oa.insert=G().bind(null,"head"),Oa.domAPI=m(),Oa.insertStyleElement=J();var ji=g()(Ko.A,Oa);const eo=Ko.A&&Ko.A.locals?Ko.A.locals:void 0,xl={m:40,s:32,l:48};var Uo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css"),wa={};wa.styleTagTransform=V(),wa.setAttributes=Q(),wa.insert=G().bind(null,"head"),wa.domAPI=m(),wa.insertStyleElement=J();var zi=g()(Uo.A,wa);const to=Uo.A&&Uo.A.locals?Uo.A.locals:void 0;var Ol=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const Ur=(0,u.forwardRef)((a,p)=>{var d,{items:s,pinTop:n,pinBottom:h,onKeyDown:O,onBlur:P,onFocus:E,tabIndex:x,active:B,scroll:R,nested:L,search:F,searchItem:Y,scrollRef:H,scrollContainerRef:te,onScroll:$,footer:q,loading:ce,limitedScrollHeight:se,untouchableScrollbars:pe,className:me,noDataState:ue,noResultsState:xe,errorDataState:ie,dataError:N,dataFiltered:W,scrollToSelectedItem:Z=!1,virtualized:oe=!1,scrollContainerClassName:le,barHideStrategy:Te="never"}=a,Be=Ol(a,["items","pinTop","pinBottom","onKeyDown","onBlur","onFocus","tabIndex","active","scroll","nested","search","searchItem","scrollRef","scrollContainerRef","onScroll","footer","loading","limitedScrollHeight","untouchableScrollbars","className","noDataState","noResultsState","errorDataState","dataError","dataFiltered","scrollToSelectedItem","virtualized","scrollContainerClassName","barHideStrategy"]);const{size:Ee="s",flattenItems:We,focusFlattenItems:Le}=st(),{value:he,isSelectionSingle:De}=ta(),Ke=(0,u.useRef)(null),Ne=ao(s),qe=ao(n),Et=ao(h),[Re,et]=(0,u.useState)({virtualizer:null,browser:null,measured:!1}),Ue=Vn({noDataState:ue,noResultsState:xe,errorDataState:ie}),rt=s.length===0,{selectedItemIndex:Je,selectedItem:ke}=(0,u.useMemo)(()=>{const ve={selectedItemIndex:-1,selectedItem:void 0};if(!Z||!he)return ve;const ze=De?We[he]:We[he[0]];if(!(ze!=null&&ze.id))return ve;const Ta=Object.values(Le),Aa=Ta.findIndex(Yl=>Yl.originalId===ze.id);return Aa<0?ve:{selectedItemIndex:Aa,selectedItem:Ta[Aa]}},[We,Le,De,Z,he]),Fe=(0,Fn.Te)({count:Ne.length,getScrollElement:()=>R?Ke.current:null,estimateSize:()=>xl[Ee],enabled:oe,overscan:5}),Oe=Fe.getVirtualItems();(0,u.useEffect)(()=>{Re.measured||(Fe.measure(),et(ve=>Object.assign(Object.assign({},ve),{measured:!0})))},[Re.measured,Fe]);const zt=R&&Z&&oe;(0,u.useEffect)(()=>{var ve;if(zt){if(!Re.measured||Je<0||!ke||Re.virtualizer===ke.originalId||ke!=null&&ke.itemRef&&(!((ve=Ke.current)===null||ve===void 0)&&ve.contains(ke==null?void 0:ke.itemRef.current)))return;Fe.scrollToIndex(Je,{align:"center"}),et(ze=>Object.assign(Object.assign({},ze),{virtualizer:ke.originalId}))}},[zt,Re,ke,Je,Fe]);const Ia=!!(!((d=ke==null?void 0:ke.itemRef)===null||d===void 0)&&d.current);(0,u.useEffect)(()=>{var ve,ze;ke&&Re.virtualizer!==null&&Ia&&Re.virtualizer!==Re.browser&&((ze=(ve=ke.itemRef)===null||ve===void 0?void 0:ve.current)===null||ze===void 0||ze.scrollIntoView({block:"center"}),et(Ta=>Object.assign(Object.assign({},Ta),{browser:ke.originalId})))},[Re,ke,Ia,Je]);const ne=(0,u.useMemo)(()=>ce&&(0,i.jsx)("div",{role:"spinbutton",tabIndex:-1,className:to.loader,"data-size":Ee,"data-no-items":rt||void 0,"data-test-id":"list__loader",children:(0,i.jsx)(Hn.y,{size:Ee==="l"?"s":"xs"})}),[rt,ce,Ee]),we=(0,u.useMemo)(()=>(0,i.jsxs)(i.Fragment,{children:[oe?(0,i.jsx)("div",{className:to.virtualizedContainer,style:{height:Fe.getTotalSize()},tabIndex:-1,children:Oe.map(ve=>(0,i.jsx)("div",{"data-index":ve.index,ref:Fe.measureElement,tabIndex:-1,className:to.virtualizedPositionBox,style:{transform:`translateY(${ve.start}px)`},children:Ne[ve.index]},ve.key))}):Ne,ne,(0,i.jsx)(qn,{loading:ce,dataError:N,emptyStates:Ue,hasNoItems:rt,dataFiltered:W!=null?W:!!(F!=null&&F.value),size:Ee})]}),[N,W,Ue,rt,Ne,ce,ne,F==null?void 0:F.value,Ee,Oe,oe,Fe]),je=(0,u.useCallback)(()=>{var ve,ze;ke&&((ze=(ve=ke==null?void 0:ke.itemRef)===null||ve===void 0?void 0:ve.current)===null||ze===void 0||ze.scrollIntoView({block:"center"}))},[ke]),Xe=(0,i.jsxs)("ul",Object.assign({className:v()(eo.listContainer,me),ref:p,onKeyDown:O,tabIndex:x,onFocus:E,onBlur:P,"data-active":B||void 0,role:"menu"},(0,I.z7)(Be),{children:[(Number(n==null?void 0:n.length)>0||F)&&(0,i.jsxs)(el,{children:[F&&(0,i.jsx)(yl,Object.assign({search:F},Y)),Number(n==null?void 0:n.length)>0&&qe]}),R?(0,i.jsxs)(Xn.O,{className:v()({[eo.scrollContainerS]:R&&se&&Ee==="s",[eo.scrollContainerM]:R&&se&&Ee==="m",[eo.scrollContainerL]:R&&se&&Ee==="l"},le),barHideStrategy:Te,size:"s",ref:(0,S.A)(Ke,te),untouchableScrollbars:pe,onScroll:$,onInitialized:je,children:[we,(0,i.jsx)("div",{className:to.scrollStub,ref:H})]}):(0,i.jsx)(i.Fragment,{children:we}),Number(h==null?void 0:h.length)>0&&(0,i.jsx)(tl,{children:Et}),q&&(0,i.jsx)("div",{className:to.footer,onFocus:Hs,children:q})]}));return L?(0,i.jsx)("li",{style:{listStyleType:"none"},role:"menuitem",children:Xe}):Xe}),wl=["right","right-start","right-end","left","left-start","left-end","bottom","top"];var jl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function kl(a){var{items:p,placement:d="right-start",id:s,scroll:n,scrollRef:h,disabled:O,onSublistOpenChanged:P,allChildIds:E,loading:x=!1,focusId:B=s,untouchableScrollbars:R=!1}=a,L=jl(a,["items","placement","id","scroll","scrollRef","disabled","onSublistOpenChanged","allChildIds","loading","focusId","untouchableScrollbars"]);const{flattenItems:F,focusFlattenItems:Y,virtualized:H}=st(),{value:te,isSelectionSingle:$,isSelectionMultiple:q}=ta(),{openCollapseItems:ce=[]}=Sr(),se=F[s],{ids:pe,expandedIds:me}=(0,u.useMemo)(()=>{const{ids:he,expandedIds:De}=Cr({focusCloseChildIds:p,focusFlattenItems:Y,openCollapseItems:ce,isSelectionMultiple:q});return{ids:he,expandedIds:De.concat([s])}},[Y,s,q,p,ce]),{handleListKeyDownFactory:ue,activeItemId:xe,forceUpdateActiveItemId:ie}=Un(),[N,W]=(0,u.useState)(),Z=(0,u.useCallback)(he=>{if(ue(pe,me)(he),he.key==="ArrowLeft"){ie==null||ie(B),W(!1),he.stopPropagation();return}},[ue,pe,me,ie,B]),{indeterminate:oe,checked:le,handleOnSelect:Te}=ar({items:Tr(se)?se.items:[],id:s,disabled:O,allChildIds:E}),Be=(0,u.useCallback)(()=>(ie==null||ie(Me.dropFocus),W(!1),!0),[ie]),Ee=(0,u.useMemo)(()=>!!(!O&&xe&&Y[B].allChildIds.includes(xe)),[xe,O,Y,B]),We=!!(oe&&!N&&$&&te&&E.includes(te)||q&&le);(0,u.useEffect)(()=>{W(he=>he&&Ee)},[s,Ee]);const Le=(0,u.useRef)(null);return(0,i.jsx)(go,{outsideClick:Be,fallbackPlacements:wl,content:(0,i.jsx)(Ur,{onKeyDown:Z,items:p,nested:!0,scroll:n,virtualized:H,tabIndex:0,ref:Le,onFocus:he=>{he.stopPropagation(),ie==null||ie(pe[0])},scrollRef:h,limitedScrollHeight:!0,untouchableScrollbars:R,loading:x}),trigger:"hover",open:Ee||N,onOpenChange:he=>{W(he),P==null||P(he,s)},placement:d,widthStrategy:"auto",children:(0,i.jsx)(Js,Object.assign({},L,{disabled:O,open:N,expandIcon:(0,i.jsx)(Kn.A,{}),id:s,isParentNode:!0,indeterminate:oe,checked:We,onOpenNestedList:()=>{W(!0),setTimeout(()=>{var he;(he=Le.current)===null||he===void 0||he.focus()},0)},onSelect:Te}))})}function Fr({focusCloseChildIds:a,focusFlattenItems:p,flattenItems:d,isSelectionMultiple:s}){return a?a.flatMap(n=>{const{itemRef:h,key:O,originalId:P,items:E}=p[n],x=d[P];if(Io(x)||!s&&Ar(x)){const B=Fr({focusCloseChildIds:E,focusFlattenItems:p,flattenItems:d,isSelectionMultiple:s});return[(0,i.jsx)(xr,{label:x.label,truncate:x.truncate,divider:x.divider,mode:x.mode},O+"_separator"),...B]}return Ar(x)?(0,u.createElement)(Wn,Object.assign({},x,{items:E,itemRef:h,key:O})):Mn(x)?(0,u.createElement)(Rn,Object.assign({},x,{items:E,itemRef:h,key:O})):Tr(x)?(0,u.createElement)(kl,Object.assign({},x,{focusId:n,items:E,itemRef:h,key:O})):(0,u.createElement)(Js,Object.assign({},x,{itemRef:h,key:O}))}):[null]}function ao(a){const{focusFlattenItems:p,flattenItems:d}=st(),{isSelectionMultiple:s}=ta();return(0,u.useMemo)(()=>Fr({flattenItems:d,focusFlattenItems:p,focusCloseChildIds:a,isSelectionMultiple:s}),[d,a,p,s])}function Sl({footerActiveElementsRefs:a}){return(0,u.useMemo)(()=>{var p;return{searchItem:{itemRef:(0,u.createRef)(),id:Me.search,parentId:Me.default,items:[],allChildIds:[]},footerItems:(p=a==null?void 0:a.map((d,s)=>({id:nn(s),itemRef:d,parentId:Me.default,items:[],allChildIds:[]})))!==null&&p!==void 0?p:[]}},[a])}function ar({id:a,allChildIds:p}){const{value:d,setValue:s,isSelectionMultiple:n}=ta(),{flattenItems:h}=st(),O=(0,u.useMemo)(()=>p.filter(L=>{const F=h[L];return F&&!("type"in F)}),[p,h]),P=(0,u.useMemo)(()=>O.filter(L=>{const F=h[L];return F&&!("type"in F)&&!F.disabled}),[O,h]),E=n?d&&!!d.length&&O.every(L=>d==null?void 0:d.includes(L)):void 0,x=n?d&&!!d.length&&P.every(L=>d==null?void 0:d.includes(L)):void 0,B=n?!E&&O.some(L=>d==null?void 0:d.includes(L)):O.includes(d!=null?d:"");return{checked:E,indeterminate:B,handleOnSelect:()=>{if(E||x){s==null||s(L=>(L!=null?L:[]).filter(F=>F!==a&&!P.includes(F)));return}s==null||s(L=>Array.from(new Set([...L!=null?L:[],...P])))}}}function El({mainRef:a,btnRef:p,focusFlattenItems:d,keyboardNavigationRef:s,hasListInFocusChain:n,firstItemId:h}){const O=n?void 0:h,[P,E]=(0,u.useState)(()=>O),x=(0,u.useRef)(O),B=(0,u.useCallback)(()=>{E(O),x.current=O},[O]),R=(0,u.useCallback)((F,Y)=>H=>{var te,$,q,ce,se,pe,me,ue,xe,ie;switch(H.key){case"ArrowDown":{if(x.current!==void 0){const N=F.findIndex(le=>le===x.current),W=Math.min(N+1,F.length-1),Z=F[W],oe=d[Z];x.current=Z,E(Z),oe.type!=="group"&&(($=(te=oe.itemRef)===null||te===void 0?void 0:te.current)===null||$===void 0||$.focus())}else{const N=F[0],W=d[N];x.current=N,E(N),W.type!=="group"&&((ce=(q=W.itemRef)===null||q===void 0?void 0:q.current)===null||ce===void 0||ce.focus())}H.stopPropagation(),H.preventDefault();return}case"ArrowUp":{if(F[0]===x.current)n&&d[F[0]].parentId===Me.default&&(x.current=void 0,E(void 0),(se=a==null?void 0:a.current)===null||se===void 0||se.focus());else if(x.current!==void 0){const N=F.findIndex(le=>le===x.current),W=Math.max(N-1,0),Z=F[W],oe=d[Z];x.current=Z,E(Z),oe.type!=="group"&&((me=(pe=oe.itemRef)===null||pe===void 0?void 0:pe.current)===null||me===void 0||me.focus())}H.stopPropagation(),H.preventDefault();return}case"ArrowRight":{if(x.current!==void 0&&Y.includes(x.current)){const W=d[x.current].items[0],Z=d[W];x.current=W,E(W),setTimeout(()=>{var oe,le;return(le=(oe=Z.itemRef)===null||oe===void 0?void 0:oe.current)===null||le===void 0?void 0:le.focus()},0),H.stopPropagation(),H.preventDefault()}return}case"Tab":{x.current!==void 0?n?(H.preventDefault(),H.stopPropagation(),x.current=void 0,E(void 0),(ue=a==null?void 0:a.current)===null||ue===void 0||ue.focus()):B():p&&!H.shiftKey?(xe=p==null?void 0:p.current)===null||xe===void 0||xe.focus():(ie=a==null?void 0:a.current)===null||ie===void 0||ie.focus();return}default:return}},[d,n,a,B,p]),L=(0,u.useCallback)(F=>{var Y,H;E(F),x.current=F;const te=d[F];(H=(Y=te==null?void 0:te.itemRef)===null||Y===void 0?void 0:Y.current)===null||H===void 0||H.focus()},[d]);return(0,u.useImperativeHandle)(s,()=>({focusItem:L}),[L]),{resetActiveItemId:B,activeItemId:P,forceUpdateActiveItemId:L,handleListKeyDownFactory:R}}var Hr=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const zl=["top","right","bottom","left"];function Pl(a){var{items:p,search:d,pinBottom:s=[],pinTop:n=[],footerActiveElementsRefs:h,children:O,trigger:P,placement:E,widthStrategy:x,triggerElemRef:B,open:R,onOpenChange:L,collapse:F={},triggerClassName:Y,selection:H,contentRender:te,size:$="s",marker:q=!0,closeDroplistOnItemClick:ce=!1,className:se,listRef:pe,untouchableScrollbars:me=!1,virtualized:ue=!1,closeOnPopstate:xe}=a,ie=Hr(a,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const N=(0,u.useMemo)(()=>!!d,[d]),[W=[],Z]=(0,It.I)(F),oe=(0,u.useCallback)(ne=>Z(we=>we!=null&&we.includes(ne)?we.filter(je=>je!==ne):(we!=null?we:[]).concat([ne])),[Z]),[le=!1,Te]=(0,It.I)({value:R,defaultValue:!1,onChange:L}),{searchItem:Be,footerItems:Ee}=Sl({footerActiveElementsRefs:h}),We=(0,u.useMemo)(()=>{const ne=Gs({items:n,prefix:Me.pinTop,parentId:Me.default}),we=Gs({items:p,prefix:Me.default,parentId:Me.default}),je=Gs({items:s,prefix:Me.pinBottom,parentId:Me.default}),Xe=Object.assign(Object.assign(Object.assign({},ne.flattenItems),je.flattenItems),we.flattenItems),ve=Object.assign(Object.assign(Object.assign({},ne.focusFlattenItems),je.focusFlattenItems),we.focusFlattenItems);return[...Ee,Be].forEach(ze=>{Xe[ze.id]=ze,ve[ze.id]=Object.assign(Object.assign({},ze),{originalId:ze.id,items:[],key:ze.id,allChildIds:[]})}),{items:we,pinTop:ne,pinBottom:je,flattenItems:Xe,focusFlattenItems:ve}},[p,n,s,Be,Ee]),{flattenItems:Le,focusFlattenItems:he}=We,De=Hr(We,["flattenItems","focusFlattenItems"]),{ids:Ke,expandedIds:Ne}=(0,u.useMemo)(()=>{const{pinTop:ne,items:we,pinBottom:je}=De;let Xe=[],ve=[];return N&&Xe.push(Be.id),[ne,we,je].forEach(({focusFlattenItems:ze,focusCloseChildIds:Ta})=>{const Aa=Cr({focusFlattenItems:ze,focusCloseChildIds:Ta,openCollapseItems:W,isSelectionMultiple:(H==null?void 0:H.mode)==="multiple"});Xe=Xe.concat(Aa.ids),ve=ve.concat(Aa.expandedIds)}),Ee.forEach(ze=>{Xe.push(ze.id)}),{ids:Xe,expandedIds:ve}},[Ee,N,De,W,Be.id,H==null?void 0:H.mode]),qe=(0,u.useRef)(null),Et=(0,u.useRef)(null),Re=Ke[0],{handleListKeyDownFactory:et,resetActiveItemId:Ue,activeItemId:rt,forceUpdateActiveItemId:Je}=El({mainRef:B!=null?B:qe,focusFlattenItems:he,hasListInFocusChain:!0,firstItemId:Re}),ke=(0,u.useCallback)(ne=>et(Ke,Ne)(ne),[et,Ke,Ne]),Fe=(0,u.useCallback)(ne=>{Ue(),Te(ne)},[Ue,Te]),Oe=(0,u.useCallback)((ne,we)=>{ne.key==="ArrowDown"&&(ne.preventDefault(),Te(!0),setTimeout(()=>{var je;Ue(),(je=Et.current)===null||je===void 0||je.focus()},0)),ne.key==="ArrowUp"&&Te(!1),we==null||we(ne)},[Ue,Te]),zt=(0,u.useMemo)(()=>(0,u.isValidElement)(O),[O]),Ia=(0,u.useMemo)(()=>{if((0,u.isValidElement)(O)){const ne=typeof O.props=="object"?O.props:{};return(0,u.cloneElement)(O,Object.assign(Object.assign({},ne),{onKeyDown:we=>{var je;Oe(we,(je=O.props)===null||je===void 0?void 0:je.onKeyDown)}}))}return typeof O=="function"?O({onKeyDown:Oe}):O},[Oe,O]);return(0,i.jsx)(on,{flattenItems:Le,focusFlattenItems:he,contentRender:te,size:$,marker:q,firstItemId:Re,virtualized:ue,children:(0,i.jsx)(mn,Object.assign({},H,{children:(0,i.jsx)(kr.Provider,{value:{openCollapseItems:W,toggleOpenCollapseItem:oe},children:(0,i.jsx)(Mr.Provider,{value:{activeItemId:rt,handleListKeyDownFactory:et,forceUpdateActiveItemId:Je},children:(0,i.jsx)(Ir.Provider,{value:{closeDroplistOnItemClick:ce,closeDroplist:()=>{var ne;Te(!1),Ue(),(ne=(B!=null?B:qe).current)===null||ne===void 0||ne.focus()}},children:(0,i.jsx)(go,{content:(0,i.jsx)("div",{className:v()(eo.wrapper,se),children:(0,i.jsx)(Ur,Object.assign({},ie,{items:De.items.focusCloseChildIds,pinTop:De.pinTop.focusCloseChildIds,pinBottom:De.pinBottom.focusCloseChildIds,virtualized:ue,onKeyDown:ke,searchItem:Be,tabIndex:0,ref:(0,S.A)(Et,pe),search:d,onFocus:ne=>{ne.stopPropagation(),Je==null||Je(Ke[0])},limitedScrollHeight:!0,untouchableScrollbars:me}))}),outsideClick:!0,triggerClassName:Y,fallbackPlacements:zl,trigger:P,placement:E,widthStrategy:x,triggerRef:B?zt&&B||void 0:qe,open:le,onOpenChange:Fe,closeOnPopstate:xe,children:Ia})})})})}))})}function Il({tooltip:a,children:p}){return a!=null&&a.tip?(0,i.jsx)(t,Object.assign({},a,{children:p})):(0,i.jsx)(i.Fragment,{children:p})}const Xr={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},oo={Xs:"xs",S:"s"},Vr={[oo.Xs]:16,[oo.S]:24};var Fo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"),ja={};ja.styleTagTransform=V(),ja.setAttributes=Q(),ja.insert=G().bind(null,"head"),ja.domAPI=m(),ja.insertStyleElement=J();var Pi=g()(Fo.A,ja);const so=Fo.A&&Fo.A.locals?Fo.A.locals:void 0;var Tl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Al(a){return"changeRestrictTooltipState"in a&&a.changeRestrictTooltipState!==void 0}function Qr(a){const{label:p,size:d=oo.Xs,appearance:s=Xr.Neutral,onDelete:n,className:h,tabIndex:O}=a,P=Tl(a,["label","size","appearance","onDelete","className","tabIndex"]),E=(0,u.useRef)(null),x=!!n,B=F=>{if(x&&Al(a)){const{changeRestrictTooltipState:Y}=a;Y(F)}},R=F=>{var Y;!((Y=E.current)===null||Y===void 0)&&Y.contains(F.target)&&B(!0)},L=()=>{B(!1)};return(0,i.jsxs)("span",Object.assign({},(0,I.z7)(P),{className:v()(so.tag,h),"data-size":d,"data-appearance":s,"data-removable":x,onMouseEnter:R,onMouseLeave:L,children:[(0,i.jsx)("span",{className:so.label,children:p}),x&&(0,i.jsx)("button",{type:"button",className:so.tagButton,onClick:n,"data-test-id":"tag-remove-button",tabIndex:O,onMouseEnter:R,onMouseLeave:L,ref:E,children:d===oo.Xs?(0,i.jsx)(ra.A,{size:Vr[d],className:so.icon}):(0,i.jsx)(ra.A,{size:Vr[d],className:so.icon})})]}))}var Ho=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"),ka={};ka.styleTagTransform=V(),ka.setAttributes=Q(),ka.insert=G().bind(null,"head"),ka.domAPI=m(),ka.insertStyleElement=J();var Ii=g()(Ho.A,ka);const Zr=Ho.A&&Ho.A.locals?Ho.A.locals:void 0;var Cl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Gr(a){var{label:p,size:d=oo.Xs,appearance:s=Xr.Neutral,className:n,tabIndex:h,href:O,onClick:P,target:E}=a,x=Cl(a,["label","size","appearance","className","tabIndex","href","onClick","target"]);return(0,i.jsx)("a",Object.assign({},(0,I.z7)(x),{className:v()(Zr.tag,n),"data-size":d,"data-appearance":s,tabIndex:h,href:O,target:E,onClick:P,children:(0,i.jsx)("span",{className:Zr.label,children:p})}))}function Ml(a){return"href"in a&&a.href!==void 0}function Ll(a){return"tooltip"in a&&a.tooltip!==void 0}function Dl(a){const[p,d]=(0,u.useState)(!1),s=Ml(a);if(!Ll(a))return s?(0,i.jsx)(Gr,Object.assign({},a)):(0,i.jsx)(Qr,Object.assign({},a));const{tooltip:n}=a,h=n&&Object.assign(Object.assign({},n),{open:p?!1:n.open}),O=Object.assign(Object.assign({},a),{changeRestrictTooltipState:d});return(0,i.jsx)(Il,{tooltip:h,children:s?(0,i.jsx)(Gr,Object.assign({},a)):(0,i.jsx)(Qr,Object.assign({},O))})}var Xo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/FunctionBadge/styles.module.css"),Sa={};Sa.styleTagTransform=V(),Sa.setAttributes=Q(),Sa.insert=G().bind(null,"head"),Sa.domAPI=m(),Sa.insertStyleElement=J();var Ti=g()(Xo.A,Sa);const or=Xo.A&&Xo.A.locals?Xo.A.locals:void 0;var Bl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Nl({icon:a,options:p}){const[d,s]=(0,u.useState)(!1),n=(0,u.useRef)(null),{setVisible:h}=(0,u.useContext)(b);(0,Ha.N)(()=>{h&&h(d)},[d,h]);const O=(0,u.useCallback)(P=>{P.stopPropagation(),s(E=>!E)},[]);return(0,i.jsx)("span",{className:or.wrapper,children:(0,i.jsx)(Pl,{trigger:"clickAndFocusVisible",open:d,onOpenChange:s,widthStrategy:"gte",scroll:!0,"data-test-id":fe.droplist,placement:"bottom-end",triggerElemRef:n,items:p.map(P=>{var{icon:E,tagLabel:x,onClick:B}=P,R=Bl(P,["icon","tagLabel","onClick"]);return Object.assign(Object.assign({},R),{className:or.item,beforeContent:E,afterContent:x?(0,i.jsx)(Dl,{label:x}):void 0,onClick:L=>{L.stopPropagation(),s(!1),B==null||B(L)}})}),children:(0,i.jsx)("button",{type:"button","data-test-id":fe.functionBadge,className:or.button,onClick:O,ref:n,children:a||(0,i.jsx)(ks,{})})})})}var Vo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Emblem/styled.module.css"),Ea={};Ea.styleTagTransform=V(),Ea.setAttributes=Q(),Ea.insert=G().bind(null,"head"),Ea.domAPI=m(),Ea.insertStyleElement=J();var Ai=g()(Vo.A,Ea);const Rl=Vo.A&&Vo.A.locals?Vo.A.locals:void 0;function Wl(a){return"src"in a&&"alt"in a}function Kl(a){var p,d,s;const{size:n}=ge();return Wl(a)?(0,i.jsx)("img",{src:a.src,alt:a.alt,"data-size":n||void 0,className:Rl.img,"data-test-id":fe.emblemPicture}):(0,i.jsx)(Rr.I,{icon:a.icon,appearance:(p=a.appearance)!==null&&p!==void 0?p:"primary",decor:(d=a.decor)!==null&&d!==void 0?d:!0,size:n,shape:(s=a.shape)!==null&&s!==void 0?s:"round","data-test-id":fe.emblemIcon})}const Ul={[T.S]:"s",[T.M]:"m",[T.L]:"l"},Fl={[T.S]:"m",[T.M]:"m",[T.L]:"l"},Hl={title:1,description:2,metadata:1};var Qo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Header/styles.module.css"),za={};za.styleTagTransform=V(),za.setAttributes=Q(),za.insert=G().bind(null,"head"),za.domAPI=m(),za.insertStyleElement=J();var Ci=g()(Qo.A,za);const ro=Qo.A&&Qo.A.locals?Qo.A.locals:void 0;var Xl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Vl(a){var{title:p,description:d,metadata:s,truncate:n,emblem:h,className:O,size:P}=a,E=Xl(a,["title","description","metadata","truncate","emblem","className","size"]);const{size:x}=ge(),B=P||x,R=Object.assign(Object.assign({},Hl),n);return(0,i.jsxs)("div",Object.assign({className:v()(ro.titleLayout,O)},(0,I.sg)(E),{"data-size":B,children:[h&&(0,i.jsx)(Kl,Object.assign({},h)),(0,i.jsxs)("div",{className:ro.contentLayout,children:[(0,i.jsx)(f.o,{family:"sans",size:Ul[B],purpose:"title",className:ro.title,"data-test-id":fe.title,children:(0,i.jsx)(qt,{variant:"end",maxLines:R.title,text:p})}),s&&(0,i.jsx)(f.o.SansBodyS,{className:ro.metadata,children:(0,i.jsx)(qt,{variant:"end",maxLines:R.metadata,text:s,"data-test-id":fe.metadata})}),d&&(0,i.jsx)(f.o,{family:"sans",size:Fl[B],purpose:"body",className:ro.description,children:(0,i.jsx)(qt,{variant:"end",maxLines:R.description,text:d,"data-test-id":fe.description})})]})]}))}const Ql={Little:"little",Middle:"middle",Background:"background"};var Zo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Image/styles.module.css"),Pa={};Pa.styleTagTransform=V(),Pa.setAttributes=Q(),Pa.insert=G().bind(null,"head"),Pa.domAPI=m(),Pa.insertStyleElement=J();var Mi=g()(Zo.A,Pa);const Zl=Zo.A&&Zo.A.locals?Zo.A.locals:void 0;var Gl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Jl(a){var{src:p,alt:d,mode:s=Ql.Little,hideFading:n}=a,h=Gl(a,["src","alt","mode","hideFading"]);return(0,i.jsx)("img",Object.assign({},(0,I.z7)(h),{src:p,alt:d,"data-mode":s,className:Zl.image,"data-fading":!n||void 0}))}const no=$o;no.Header=Vl,no.Footer=Wa,no.Image=Jl,no.FunctionBadge=Nl},"./node_modules/.pnpm/@snack-uikit+counter@0.8.12_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"(A,z,r){r.d(z,{p:()=>ae});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=r.n(w),S=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const u={Primary:"primary",Neutral:"neutral",Red:"red"},f={Count:"count",CountPlus:"count-plus",CountK:"count-k"},I={S:"s",M:"m"},T={Accent:"accent",Decor:"decor"},fe=10,M=1e3,ge="K";var b=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=r.n(b),g=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_=r.n(g),m=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Pe=r.n(m),G=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Ie=r.n(G),Q=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Ve=r.n(Q),J=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Qe=r.n(J),V=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.12_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),re={};re.styleTagTransform=Qe(),re.setAttributes=Ie(),re.insert=Pe().bind(null,"head"),re.domAPI=_(),re.insertStyleElement=Ve();var ye=C()(V.A,re);const _e=V.A&&V.A.locals?V.A.locals:void 0;function de({value:y,variant:j,plusLimit:k}){if(j===f.Count)return y;if(j===f.CountPlus)return y<k?y:(0,i.jsxs)(i.Fragment,{children:[k-1,(0,i.jsx)("span",{className:_e.plus,children:"+"})]});if(j===f.CountK)return y<M?y:(0,i.jsxs)(i.Fragment,{children:[Math.round(y/M),(0,i.jsx)("span",{className:_e.key,children:ge})]})}var K=function(y,j){var k={};for(var D in y)Object.prototype.hasOwnProperty.call(y,D)&&j.indexOf(D)<0&&(k[D]=y[D]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var X=0,D=Object.getOwnPropertySymbols(y);X<D.length;X++)j.indexOf(D[X])<0&&Object.prototype.propertyIsEnumerable.call(y,D[X])&&(k[D[X]]=y[D[X]]);return k};function ae(y){var{value:j,appearance:k=u.Primary,variant:D=f.Count,size:X=I.S,plusLimit:ee=fe,color:be=T.Accent,className:Ae}=y,Se=K(y,["value","appearance","variant","size","plusLimit","color","className"]);const Ce=de({value:j,variant:D,plusLimit:ee});return(0,i.jsx)("div",Object.assign({className:v()(_e.counter,Ae)},(0,S.z7)(Se),{"data-size":X,"data-variant":D,"data-appearance":k,"data-color":be,children:Ce}))}},"./node_modules/.pnpm/@snack-uikit+divider@3.2.12_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"(A,z,r){r.d(z,{c:()=>V});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=r.n(w),S=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const u={Horizontal:"horizontal",Vertical:"vertical"},f={Light:"light",Regular:"regular"};var I=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=r.n(I),fe=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),M=r.n(fe),ge=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),b=r.n(ge),C=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=r.n(C),_=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(_),Pe=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),G=r.n(Pe),Ie=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.12_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),Q={};Q.styleTagTransform=G(),Q.setAttributes=g(),Q.insert=b().bind(null,"head"),Q.domAPI=M(),Q.insertStyleElement=m();var Ve=T()(Ie.A,Q);const J=Ie.A&&Ie.A.locals?Ie.A.locals:void 0;var Qe=function(re,ye){var _e={};for(var de in re)Object.prototype.hasOwnProperty.call(re,de)&&ye.indexOf(de)<0&&(_e[de]=re[de]);if(re!=null&&typeof Object.getOwnPropertySymbols=="function")for(var K=0,de=Object.getOwnPropertySymbols(re);K<de.length;K++)ye.indexOf(de[K])<0&&Object.prototype.propertyIsEnumerable.call(re,de[K])&&(_e[de[K]]=re[de[K]]);return _e};function V(re){var{className:ye,orientation:_e=u.Horizontal,weight:de=f.Regular}=re,K=Qe(re,["className","orientation","weight"]);const ae=Object.assign(Object.assign({},(0,S.z7)(K)),{"data-weight":de});return _e===u.Horizontal?(0,i.jsx)("hr",Object.assign({className:v()(J.horizontal,ye)},ae)):(0,i.jsx)("div",Object.assign({className:v()(J.vertical,ye)},ae))}},"./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.12_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"(A,z,r){r.d(z,{I:()=>V});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=r.n(w),S=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const u={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},f={S:"s",M:"m",L:"l"};var I=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=r.n(I),fe=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),M=r.n(fe),ge=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),b=r.n(ge),C=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=r.n(C),_=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(_),Pe=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),G=r.n(Pe),Ie=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.12_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/styles.module.css"),Q={};Q.styleTagTransform=G(),Q.setAttributes=g(),Q.insert=b().bind(null,"head"),Q.domAPI=M(),Q.insertStyleElement=m();var Ve=T()(Ie.A,Q);const J=Ie.A&&Ie.A.locals?Ie.A.locals:void 0;var Qe=function(re,ye){var _e={};for(var de in re)Object.prototype.hasOwnProperty.call(re,de)&&ye.indexOf(de)<0&&(_e[de]=re[de]);if(re!=null&&typeof Object.getOwnPropertySymbols=="function")for(var K=0,de=Object.getOwnPropertySymbols(re);K<de.length;K++)ye.indexOf(de[K])<0&&Object.prototype.propertyIsEnumerable.call(re,de[K])&&(_e[de[K]]=re[de[K]]);return _e};function V(re){var{className:ye,decor:_e=!0,size:de=f.M,icon:K,appearance:ae=u.Primary,shape:y="round"}=re,j=Qe(re,["className","decor","size","icon","appearance","shape"]);return(0,i.jsx)("div",Object.assign({className:v()(J.decor,ye)},(0,S.z7)(j),{"data-size":de,"data-decor":_e||void 0,"data-appearance":ae,"data-shape":y,children:(0,i.jsx)(K,{"data-size":de,"data-appearance":ae,className:J.icon})}))}},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"(A,z,r){r.d(z,{A:()=>ge});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const u=w.forwardRef((b,C)=>{var{size:g=24}=b,_=v(b,["size"]);_.width=void 0,_.height=void 0;const m="-check-s";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var f=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const T=w.forwardRef((b,C)=>{var{size:g=24}=b,_=f(b,["size"]);_.width=void 0,_.height=void 0;const m="-check-xs";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var fe=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const ge=(0,w.forwardRef)((b,C)=>{var{size:g=24}=b,_=fe(b,["size"]);return Number(g)>=20?(0,i.jsx)(u,Object.assign({ref:C,size:g},_)):(0,i.jsx)(T,Object.assign({ref:C,size:g},_))})},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"(A,z,r){r.d(z,{A:()=>ge});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const u=w.forwardRef((b,C)=>{var{size:g=24}=b,_=v(b,["size"]);_.width=void 0,_.height=void 0;const m="-chevron-down-s";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var f=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const T=w.forwardRef((b,C)=>{var{size:g=24}=b,_=f(b,["size"]);_.width=void 0,_.height=void 0;const m="-chevron-down-xs";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var fe=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const ge=(0,w.forwardRef)((b,C)=>{var{size:g=24}=b,_=fe(b,["size"]);return Number(g)>=20?(0,i.jsx)(u,Object.assign({ref:C,size:g},_)):(0,i.jsx)(T,Object.assign({ref:C,size:g},_))})},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js"(A,z,r){r.d(z,{A:()=>ge});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const u=w.forwardRef((b,C)=>{var{size:g=24}=b,_=v(b,["size"]);_.width=void 0,_.height=void 0;const m="-chevron-right-s";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var f=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const T=w.forwardRef((b,C)=>{var{size:g=24}=b,_=f(b,["size"]);_.width=void 0,_.height=void 0;const m="-chevron-right-xs";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var fe=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const ge=(0,w.forwardRef)((b,C)=>{var{size:g=24}=b,_=fe(b,["size"]);return Number(g)>=20?(0,i.jsx)(u,Object.assign({ref:C,size:g},_)):(0,i.jsx)(T,Object.assign({ref:C,size:g},_))})},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"(A,z,r){r.d(z,{A:()=>ge});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const u=w.forwardRef((b,C)=>{var{size:g=24}=b,_=v(b,["size"]);_.width=void 0,_.height=void 0;const m="-chevron-up-s";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var f=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const T=w.forwardRef((b,C)=>{var{size:g=24}=b,_=f(b,["size"]);_.width=void 0,_.height=void 0;const m="-chevron-up-xs";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var fe=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const ge=(0,w.forwardRef)((b,C)=>{var{size:g=24}=b,_=fe(b,["size"]);return Number(g)>=20?(0,i.jsx)(u,Object.assign({ref:C,size:g},_)):(0,i.jsx)(T,Object.assign({ref:C,size:g},_))})},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/minus/index.js"(A,z,r){r.d(z,{A:()=>ge});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const u=w.forwardRef((b,C)=>{var{size:g=24}=b,_=v(b,["size"]);_.width=void 0,_.height=void 0;const m="-minus-s";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var f=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const T=w.forwardRef((b,C)=>{var{size:g=24}=b,_=f(b,["size"]);_.width=void 0,_.height=void 0;const m="-minus-xs";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var fe=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const ge=(0,w.forwardRef)((b,C)=>{var{size:g=24}=b,_=fe(b,["size"]);return Number(g)>=20?(0,i.jsx)(u,Object.assign({ref:C,size:g},_)):(0,i.jsx)(T,Object.assign({ref:C,size:g},_))})},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js"(A,z,r){r.d(z,{A:()=>ge});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),v=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const u=w.forwardRef((b,C)=>{var{size:g=24}=b,_=v(b,["size"]);_.width=void 0,_.height=void 0;const m="-search-s";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var f=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const T=w.forwardRef((b,C)=>{var{size:g=24}=b,_=f(b,["size"]);_.width=void 0,_.height=void 0;const m="-search-xs";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:C,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var fe=function(b,C){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&C.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)C.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const ge=(0,w.forwardRef)((b,C)=>{var{size:g=24}=b,_=fe(b,["size"]);return Number(g)>=20?(0,i.jsx)(u,Object.assign({ref:C,size:g},_)):(0,i.jsx)(T,Object.assign({ref:C,size:g},_))})},"./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"(A,z,r){r.d(z,{y:()=>Qe});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),w=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),v=r.n(w),S=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),u=r("./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),f=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=r.n(f),T=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),fe=r.n(T),M=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),ge=r.n(M),b=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),C=r.n(b),g=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_=r.n(g),m=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Pe=r.n(m),G=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"),Ie={};Ie.styleTagTransform=Pe(),Ie.setAttributes=C(),Ie.insert=ge().bind(null,"head"),Ie.domAPI=fe(),Ie.insertStyleElement=_();var Q=I()(G.A,Ie);const Ve=G.A&&G.A.locals?G.A.locals:void 0;var J=function(V,re){var ye={};for(var _e in V)Object.prototype.hasOwnProperty.call(V,_e)&&re.indexOf(_e)<0&&(ye[_e]=V[_e]);if(V!=null&&typeof Object.getOwnPropertySymbols=="function")for(var de=0,_e=Object.getOwnPropertySymbols(V);de<_e.length;de++)re.indexOf(_e[de])<0&&Object.prototype.propertyIsEnumerable.call(V,_e[de])&&(ye[_e[de]]=V[_e[de]]);return ye};function Qe(V){var{size:re=u.K.S,className:ye}=V,_e=J(V,["size","className"]);return re===u.K.XXS?(0,i.jsxs)("svg",Object.assign({viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:v()(Ve.spinner,ye)},(0,S.z7)(_e),{"data-size":re,children:[(0,i.jsx)("circle",{opacity:"0.24",cx:"4",cy:"4",r:"3",strokeWidth:"1.5"}),(0,i.jsx)("path",{d:"M1 4C1 2.34315 2.34315 1 4 1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):re===u.K.XS?(0,i.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:v()(Ve.spinner,ye)},(0,S.z7)(_e),{"data-size":re,children:[(0,i.jsx)("circle",{opacity:"0.24",cx:"8",cy:"8",r:"6",strokeWidth:"1.5"}),(0,i.jsx)("path",{d:"M2 8C2 4.68629 4.68629 2 8 2",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):(0,i.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:v()(Ve.spinner,ye)},(0,S.z7)(_e),{"data-size":re,children:[(0,i.jsx)("circle",{opacity:"0.24",cx:"12",cy:"12",r:"9",strokeWidth:"1.5"}),(0,i.jsx)("path",{d:"M3 12C3 7.02944 7.02944 3 12 3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}},"./node_modules/.pnpm/@snack-uikit+typography@0.8.13_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"(A,z,r){r.d(z,{o:()=>U});var i=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),w=r.n(i),v=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");function u(t,c){for(const l in c)t[l]=c[l];return t}const f={Sans:"sans",Light:"light",Link:"link",Mono:"mono",CrossedOut:"crossed-out"},I={Display:"display",Headline:"headline",Title:"title",Label:"label",Body:"body"},T={L:"l",M:"m",S:"s"},fe={span:"span",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",div:"div",label:"label",p:"p"};var M=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),ge=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function b(t){var{className:c,children:l,tag:e}=t,o=ge(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Body,size:T.L,tag:e,className:c,children:l}))}var C=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function g(t){var{className:c,children:l,tag:e}=t,o=C(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Body,size:T.M,tag:e,className:c,children:l}))}var _=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function m(t){var{className:c,children:l,tag:e}=t,o=_(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Body,size:T.S,tag:e,className:c,children:l}))}var Pe=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function G(t){var{className:c,children:l,tag:e}=t,o=Pe(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Display,size:T.L,tag:e,className:c,children:l}))}var Ie=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Q(t){var{className:c,children:l,tag:e}=t,o=Ie(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Display,size:T.M,tag:e,className:c,children:l}))}var Ve=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function J(t){var{className:c,children:l,tag:e}=t,o=Ve(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Display,size:T.S,tag:e,className:c,children:l}))}var Qe=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function V(t){var{className:c,children:l,tag:e}=t,o=Qe(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Headline,size:T.L,tag:e,className:c,children:l}))}var re=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ye(t){var{className:c,children:l,tag:e}=t,o=re(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Headline,size:T.M,tag:e,className:c,children:l}))}var _e=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function de(t){var{className:c,children:l,tag:e}=t,o=_e(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Headline,size:T.S,tag:e,className:c,children:l}))}var K=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ae(t){var{className:c,children:l,tag:e}=t,o=K(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Label,size:T.L,tag:e,className:c,children:l}))}var y=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function j(t){var{className:c,children:l,tag:e}=t,o=y(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Label,size:T.M,tag:e,className:c,children:l}))}var k=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function D(t){var{className:c,children:l,tag:e}=t,o=k(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Label,size:T.S,tag:e,className:c,children:l}))}var X=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ee(t){var{className:c,children:l,tag:e}=t,o=X(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Title,size:T.L,tag:e,className:c,children:l}))}var be=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ae(t){var{className:c,children:l,tag:e}=t,o=be(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Title,size:T.M,tag:e,className:c,children:l}))}var Se=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ce(t){var{className:c,children:l,tag:e}=t,o=Se(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.CrossedOut,purpose:I.Title,size:T.S,tag:e,className:c,children:l}))}var ct=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function tt(t){var{className:c,children:l,tag:e}=t,o=ct(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Body,size:T.L,tag:e,className:c,children:l}))}var at=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ze(t){var{className:c,children:l,tag:e}=t,o=at(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Body,size:T.M,tag:e,className:c,children:l}))}var ot=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ge(t){var{className:c,children:l,tag:e}=t,o=ot(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Body,size:T.S,tag:e,className:c,children:l}))}var nt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ct(t){var{className:c,children:l,tag:e}=t,o=nt(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Display,size:T.L,tag:e,className:c,children:l}))}var Go=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Jo(t){var{className:c,children:l,tag:e}=t,o=Go(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Display,size:T.M,tag:e,className:c,children:l}))}var Mt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function pt(t){var{className:c,children:l,tag:e}=t,o=Mt(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Display,size:T.S,tag:e,className:c,children:l}))}var sr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ye(t){var{className:c,children:l,tag:e}=t,o=sr(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Headline,size:T.L,tag:e,className:c,children:l}))}var Yo=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function $o(t){var{className:c,children:l,tag:e}=t,o=Yo(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Headline,size:T.M,tag:e,className:c,children:l}))}var lt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Lt(t){var{className:c,children:l,tag:e}=t,o=lt(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Headline,size:T.S,tag:e,className:c,children:l}))}var Dt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ca(t){var{className:c,children:l,tag:e}=t,o=Dt(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Label,size:T.L,tag:e,className:c,children:l}))}var it=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ut(t){var{className:c,children:l,tag:e}=t,o=it(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Label,size:T.M,tag:e,className:c,children:l}))}var qo=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Bt(t){var{className:c,children:l,tag:e}=t,o=qo(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Label,size:T.S,tag:e,className:c,children:l}))}var _t=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function rr(t){var{className:c,children:l,tag:e}=t,o=_t(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Title,size:T.L,tag:e,className:c,children:l}))}var Nt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function es(t){var{className:c,children:l,tag:e}=t,o=Nt(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Title,size:T.M,tag:e,className:c,children:l}))}var lo=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ts(t){var{className:c,children:l,tag:e}=t,o=lo(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Light,purpose:I.Title,size:T.S,tag:e,className:c,children:l}))}var as=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function os(t){var{className:c,children:l,tag:e}=t,o=as(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Body,size:T.L,tag:e,className:c,children:l}))}var ss=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function rs(t){var{className:c,children:l,tag:e}=t,o=ss(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Body,size:T.M,tag:e,className:c,children:l}))}var ns=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ma(t){var{className:c,children:l,tag:e}=t,o=ns(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Body,size:T.S,tag:e,className:c,children:l}))}var ls=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function La(t){var{className:c,children:l,tag:e}=t,o=ls(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Display,size:T.L,tag:e,className:c,children:l}))}var Rt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function mt(t){var{className:c,children:l,tag:e}=t,o=Rt(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Display,size:T.M,tag:e,className:c,children:l}))}var nr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Da(t){var{className:c,children:l,tag:e}=t,o=nr(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Display,size:T.S,tag:e,className:c,children:l}))}var is=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ba(t){var{className:c,children:l,tag:e}=t,o=is(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Headline,size:T.L,tag:e,className:c,children:l}))}var ds=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Wt(t){var{className:c,children:l,tag:e}=t,o=ds(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Headline,size:T.M,tag:e,className:c,children:l}))}var ft=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function lr(t){var{className:c,children:l,tag:e}=t,o=ft(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Headline,size:T.S,tag:e,className:c,children:l}))}var Pt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function cs(t){var{className:c,children:l,tag:e}=t,o=Pt(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Label,size:T.L,tag:e,className:c,children:l}))}var Kt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function bt(t){var{className:c,children:l,tag:e}=t,o=Kt(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Label,size:T.M,tag:e,className:c,children:l}))}var ir=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ps(t){var{className:c,children:l,tag:e}=t,o=ir(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Label,size:T.S,tag:e,className:c,children:l}))}var us=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function _s(t){var{className:c,children:l,tag:e}=t,o=us(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Title,size:T.L,tag:e,className:c,children:l}))}var Ut=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function gt(t){var{className:c,children:l,tag:e}=t,o=Ut(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Title,size:T.M,tag:e,className:c,children:l}))}var dr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Na(t){var{className:c,children:l,tag:e}=t,o=dr(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Link,purpose:I.Title,size:T.S,tag:e,className:c,children:l}))}var ms=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function io(t){var{className:c,children:l,tag:e}=t,o=ms(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Body,size:T.L,tag:e,className:c,children:l}))}var Ft=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function vt(t){var{className:c,children:l,tag:e}=t,o=Ft(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Body,size:T.M,tag:e,className:c,children:l}))}var cr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function fs(t){var{className:c,children:l,tag:e}=t,o=cr(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Body,size:T.S,tag:e,className:c,children:l}))}var bs=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function gs(t){var{className:c,children:l,tag:e}=t,o=bs(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Display,size:T.L,tag:e,className:c,children:l}))}var Ht=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ht(t){var{className:c,children:l,tag:e}=t,o=Ht(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Display,size:T.M,tag:e,className:c,children:l}))}var pr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ra(t){var{className:c,children:l,tag:e}=t,o=pr(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Display,size:T.S,tag:e,className:c,children:l}))}var vs=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function hs(t){var{className:c,children:l,tag:e}=t,o=vs(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Headline,size:T.L,tag:e,className:c,children:l}))}var Wa=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ys(t){var{className:c,children:l,tag:e}=t,o=Wa(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Headline,size:T.M,tag:e,className:c,children:l}))}var ur=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function xs(t){var{className:c,children:l,tag:e}=t,o=ur(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Headline,size:T.S,tag:e,className:c,children:l}))}var Os=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function _r(t){var{className:c,children:l,tag:e}=t,o=Os(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Label,size:T.L,tag:e,className:c,children:l}))}var ws=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function js(t){var{className:c,children:l,tag:e}=t,o=ws(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Label,size:T.M,tag:e,className:c,children:l}))}var mr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ks(t){var{className:c,children:l,tag:e}=t,o=mr(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Label,size:T.S,tag:e,className:c,children:l}))}var He=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ss(t){var{className:c,children:l,tag:e}=t,o=He(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Title,size:T.L,tag:e,className:c,children:l}))}var yt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ka(t){var{className:c,children:l,tag:e}=t,o=yt(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Title,size:T.M,tag:e,className:c,children:l}))}var Es=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function co(t){var{className:c,children:l,tag:e}=t,o=Es(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Mono,purpose:I.Title,size:T.S,tag:e,className:c,children:l}))}var $e=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function dt(t){var{className:c,children:l,tag:e}=t,o=$e(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Body,size:T.L,tag:e,className:c,children:l}))}var Xt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Vt(t){var{className:c,children:l,tag:e}=t,o=Xt(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Body,size:T.M,tag:e,className:c,children:l}))}var zs=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function po(t){var{className:c,children:l,tag:e}=t,o=zs(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Body,size:T.S,tag:e,className:c,children:l}))}var Ps=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Is(t){var{className:c,children:l,tag:e}=t,o=Ps(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Display,size:T.L,tag:e,className:c,children:l}))}var Ts=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function As(t){var{className:c,children:l,tag:e}=t,o=Ts(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Display,size:T.M,tag:e,className:c,children:l}))}var Cs=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ua(t){var{className:c,children:l,tag:e}=t,o=Cs(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Display,size:T.S,tag:e,className:c,children:l}))}var Fa=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ms(t){var{className:c,children:l,tag:e}=t,o=Fa(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Headline,size:T.L,tag:e,className:c,children:l}))}var Ls=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ds(t){var{className:c,children:l,tag:e}=t,o=Ls(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Headline,size:T.M,tag:e,className:c,children:l}))}var Bs=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ha(t){var{className:c,children:l,tag:e}=t,o=Bs(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Headline,size:T.S,tag:e,className:c,children:l}))}var Ns=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Qt(t){var{className:c,children:l,tag:e}=t,o=Ns(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Label,size:T.L,tag:e,className:c,children:l}))}var xt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function fr(t){var{className:c,children:l,tag:e}=t,o=xt(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Label,size:T.M,tag:e,className:c,children:l}))}var uo=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function _o(t){var{className:c,children:l,tag:e}=t,o=uo(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Label,size:T.S,tag:e,className:c,children:l}))}var mo=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function fo(t){var{className:c,children:l,tag:e}=t,o=mo(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Title,size:T.L,tag:e,className:c,children:l}))}var Zt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ot(t){var{className:c,children:l,tag:e}=t,o=Zt(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Title,size:T.M,tag:e,className:c,children:l}))}var br=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function bo(t){var{className:c,children:l,tag:e}=t,o=br(t,["className","children","tag"]);return(0,M.jsx)(U,Object.assign({},o,{family:f.Sans,purpose:I.Title,size:T.S,tag:e,className:c,children:l}))}const Rs={CrossedOutBodyL:b,CrossedOutBodyM:g,CrossedOutBodyS:m,CrossedOutDisplayL:G,CrossedOutDisplayM:Q,CrossedOutDisplayS:J,CrossedOutHeadlineL:V,CrossedOutHeadlineM:ye,CrossedOutHeadlineS:de,CrossedOutLabelL:ae,CrossedOutLabelM:j,CrossedOutLabelS:D,CrossedOutTitleL:ee,CrossedOutTitleM:Ae,CrossedOutTitleS:Ce,LightBodyL:tt,LightBodyM:Ze,LightBodyS:Ge,LightDisplayL:Ct,LightDisplayM:Jo,LightDisplayS:pt,LightHeadlineL:Ye,LightHeadlineM:$o,LightHeadlineS:Lt,LightLabelL:Ca,LightLabelM:ut,LightLabelS:Bt,LightTitleL:rr,LightTitleM:es,LightTitleS:ts,LinkBodyL:os,LinkBodyM:rs,LinkBodyS:Ma,LinkDisplayL:La,LinkDisplayM:mt,LinkDisplayS:Da,LinkHeadlineL:Ba,LinkHeadlineM:Wt,LinkHeadlineS:lr,LinkLabelL:cs,LinkLabelM:bt,LinkLabelS:ps,LinkTitleL:_s,LinkTitleM:gt,LinkTitleS:Na,MonoBodyL:io,MonoBodyM:vt,MonoBodyS:fs,MonoDisplayL:gs,MonoDisplayM:ht,MonoDisplayS:Ra,MonoHeadlineL:hs,MonoHeadlineM:ys,MonoHeadlineS:xs,MonoLabelL:_r,MonoLabelM:js,MonoLabelS:ks,MonoTitleL:Ss,MonoTitleM:Ka,MonoTitleS:co,SansBodyL:dt,SansBodyM:Vt,SansBodyS:po,SansDisplayL:Is,SansDisplayM:As,SansDisplayS:Ua,SansHeadlineL:Ms,SansHeadlineM:Ds,SansHeadlineS:Ha,SansLabelL:Qt,SansLabelM:fr,SansLabelS:_o,SansTitleL:fo,SansTitleM:Ot,SansTitleS:bo};var go=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),It=r.n(go),Me=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Gt=r.n(Me),wt=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),gr=r.n(wt),Xa=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Ws=r.n(Xa),Ks=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Jt=r.n(Ks),Va=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Us=r.n(Va),Tt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+typography@0.8.13_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/styles.module.css"),jt={};jt.styleTagTransform=Us(),jt.setAttributes=Ws(),jt.insert=gr().bind(null,"head"),jt.domAPI=Gt(),jt.insertStyleElement=Jt();var Qa=It()(Tt.A,jt);const kt=Tt.A&&Tt.A.locals?Tt.A.locals:void 0;var vr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Za(t){var{tag:c=fe.span,className:l,children:e,family:o,purpose:Yt,size:St}=t,hr=vr(t,["tag","className","children","family","purpose","size"]);return(0,v.createElement)(c,Object.assign(Object.assign({className:w()(kt.typography,l)},(0,S.z7)(hr)),{"data-family":o,"data-purpose":Yt,"data-size":St}),e)}const U=u(Za,Rs)},"./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"(A,z,r){r.d(z,{I:()=>w});var i=r("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function w({value:v,onChange:S,defaultValue:u}){return(0,i.iC)(v,u,f=>{const I=typeof f=="function"?f(v):f;S==null||S(I)})}},"./node_modules/.pnpm/@tanstack+react-virtual@3.11.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@tanstack/react-virtual/dist/esm/index.js"(A,z,r){r.d(z,{Te:()=>_e});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),w=r("./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js");function v(K,ae,y){var D;let j=(D=y.initialDeps)!=null?D:[],k;return()=>{var X,ee,be,Ae;let Se;y.key&&((X=y.debug)!=null&&X.call(y))&&(Se=Date.now());const Ce=K();if(!(Ce.length!==j.length||Ce.some((at,Ze)=>j[Ze]!==at)))return k;j=Ce;let tt;if(y.key&&((ee=y.debug)!=null&&ee.call(y))&&(tt=Date.now()),k=ae(...Ce),y.key&&((be=y.debug)!=null&&be.call(y))){const at=Math.round((Date.now()-Se)*100)/100,Ze=Math.round((Date.now()-tt)*100)/100,ot=Ze/16,Ge=(nt,Ct)=>{for(nt=String(nt);nt.length<Ct;)nt=" "+nt;return nt};console.info(`%c\u23F1 ${Ge(Ze,5)} /${Ge(at,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*ot,120))}deg 100% 31%);`,y==null?void 0:y.key)}return(Ae=y==null?void 0:y.onChange)==null||Ae.call(y,k),k}}function S(K,ae){if(K===void 0)throw new Error(`Unexpected undefined${ae?`: ${ae}`:""}`);return K}const u=(K,ae)=>Math.abs(K-ae)<1,f=(K,ae,y)=>{let j;return function(...k){K.clearTimeout(j),j=K.setTimeout(()=>ae.apply(this,k),y)}};var I;const T=K=>K,fe=K=>{const ae=Math.max(K.startIndex-K.overscan,0),y=Math.min(K.endIndex+K.overscan,K.count-1),j=[];for(let k=ae;k<=y;k++)j.push(k);return j},M=(K,ae)=>{const y=K.scrollElement;if(!y)return;const j=K.targetWindow;if(!j)return;const k=X=>{const{width:ee,height:be}=X;ae({width:Math.round(ee),height:Math.round(be)})};if(k(y.getBoundingClientRect()),!j.ResizeObserver)return()=>{};const D=new j.ResizeObserver(X=>{const ee=X[0];if(ee!=null&&ee.borderBoxSize){const be=ee.borderBoxSize[0];if(be){k({width:be.inlineSize,height:be.blockSize});return}}k(y.getBoundingClientRect())});return D.observe(y,{box:"border-box"}),()=>{D.unobserve(y)}},ge={passive:!0},b=(K,ae)=>{const y=K.scrollElement;if(!y)return;const j=()=>{ae({width:y.innerWidth,height:y.innerHeight})};return j(),y.addEventListener("resize",j,ge),()=>{y.removeEventListener("resize",j)}},C=typeof window=="undefined"?!0:"onscrollend"in window,g=(K,ae)=>{const y=K.scrollElement;if(!y)return;const j=K.targetWindow;if(!j)return;let k=0;const D=K.options.useScrollendEvent&&C?()=>{}:f(j,()=>{ae(k,!1)},K.options.isScrollingResetDelay),X=Ae=>()=>{const{horizontal:Se,isRtl:Ce}=K.options;k=Se?y.scrollLeft*(Ce&&-1||1):y.scrollTop,D(),ae(k,Ae)},ee=X(!0),be=X(!1);return be(),y.addEventListener("scroll",ee,ge),y.addEventListener("scrollend",be,ge),()=>{y.removeEventListener("scroll",ee),y.removeEventListener("scrollend",be)}},_=(K,ae)=>{const y=K.scrollElement;if(!y)return;const j=K.targetWindow;if(!j)return;let k=0;const D=K.options.useScrollendEvent&&C?()=>{}:I(j,()=>{ae(k,!1)},K.options.isScrollingResetDelay),X=Ae=>()=>{k=y[K.options.horizontal?"scrollX":"scrollY"],D(),ae(k,Ae)},ee=X(!0),be=X(!1);return be(),y.addEventListener("scroll",ee,ge),y.addEventListener("scrollend",be,ge),()=>{y.removeEventListener("scroll",ee),y.removeEventListener("scrollend",be)}},m=(K,ae,y)=>{if(ae!=null&&ae.borderBoxSize){const j=ae.borderBoxSize[0];if(j)return Math.round(j[y.options.horizontal?"inlineSize":"blockSize"])}return Math.round(K.getBoundingClientRect()[y.options.horizontal?"width":"height"])},Pe=(K,{adjustments:ae=0,behavior:y},j)=>{var k,D;const X=K+ae;(D=(k=j.scrollElement)==null?void 0:k.scrollTo)==null||D.call(k,{[j.options.horizontal?"left":"top"]:X,behavior:y})},G=(K,{adjustments:ae=0,behavior:y},j)=>{var k,D;const X=K+ae;(D=(k=j.scrollElement)==null?void 0:k.scrollTo)==null||D.call(k,{[j.options.horizontal?"left":"top"]:X,behavior:y})};class Ie{constructor(ae){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let y=null;const j=()=>y||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:y=new this.targetWindow.ResizeObserver(k=>{k.forEach(D=>{this._measureElement(D.target,D)})}));return{disconnect:()=>{var k;(k=j())==null||k.disconnect(),y=null},observe:k=>{var D;return(D=j())==null?void 0:D.observe(k,{box:"border-box"})},unobserve:k=>{var D;return(D=j())==null?void 0:D.unobserve(k)}}})(),this.range=null,this.setOptions=y=>{Object.entries(y).forEach(([j,k])=>{typeof k=="undefined"&&delete y[j]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:T,rangeExtractor:fe,onChange:()=>{},measureElement:m,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!0,...y}},this.notify=y=>{var j,k;(k=(j=this.options).onChange)==null||k.call(j,this,y)},this.maybeNotify=v(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),y=>{this.notify(y)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(y=>y()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var k;var y;const j=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==j){if(this.cleanup(),!j){this.maybeNotify();return}this.scrollElement=j,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(k=(y=this.scrollElement)==null?void 0:y.window)!=null?k:null,this.elementsCache.forEach(D=>{this.observer.observe(D)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,D=>{this.scrollRect=D,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(D,X)=>{this.scrollAdjustments=0,this.scrollDirection=X?this.getScrollOffset()<D?"forward":"backward":null,this.scrollOffset=D,this.isScrolling=X,this.maybeNotify()}))}},this.getSize=()=>{var y;return this.options.enabled?(this.scrollRect=(y=this.scrollRect)!=null?y:this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0)},this.getScrollOffset=()=>{var y;return this.options.enabled?(this.scrollOffset=(y=this.scrollOffset)!=null?y:typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset,this.scrollOffset):(this.scrollOffset=null,0)},this.getFurthestMeasurement=(y,j)=>{const k=new Map,D=new Map;for(let X=j-1;X>=0;X--){const ee=y[X];if(k.has(ee.lane))continue;const be=D.get(ee.lane);if(be==null||ee.end>be.end?D.set(ee.lane,ee):ee.end<be.end&&k.set(ee.lane,!0),k.size===this.options.lanes)break}return D.size===this.options.lanes?Array.from(D.values()).sort((X,ee)=>X.end===ee.end?X.index-ee.index:X.end-ee.end)[0]:void 0},this.getMeasurementOptions=v(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(y,j,k,D,X)=>(this.pendingMeasuredCacheIndexes=[],{count:y,paddingStart:j,scrollMargin:k,getItemKey:D,enabled:X}),{key:!1}),this.getMeasurements=v(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:y,paddingStart:j,scrollMargin:k,getItemKey:D,enabled:X},ee)=>{if(!X)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(Se=>{this.itemSizeCache.set(Se.key,Se.size)}));const be=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const Ae=this.measurementsCache.slice(0,be);for(let Se=be;Se<y;Se++){const Ce=D(Se),ct=this.options.lanes===1?Ae[Se-1]:this.getFurthestMeasurement(Ae,Se),tt=ct?ct.end+this.options.gap:j+k,at=ee.get(Ce),Ze=typeof at=="number"?at:this.options.estimateSize(Se),ot=tt+Ze,Ge=ct?ct.lane:Se%this.options.lanes;Ae[Se]={index:Se,start:tt,size:Ze,end:ot,key:Ce,lane:Ge}}return this.measurementsCache=Ae,Ae},{key:!1,debug:()=>this.options.debug}),this.calculateRange=v(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(y,j,k)=>this.range=y.length>0&&j>0?Ve({measurements:y,outerSize:j,scrollOffset:k}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=v(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(y,j,k,D)=>j===null?[]:y({startIndex:j.startIndex,endIndex:j.endIndex,overscan:k,count:D}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=y=>{const j=this.options.indexAttribute,k=y.getAttribute(j);return k?parseInt(k,10):(console.warn(`Missing attribute name '${j}={index}' on measured element.`),-1)},this._measureElement=(y,j)=>{const k=this.indexFromElement(y),D=this.measurementsCache[k];if(!D)return;const X=D.key,ee=this.elementsCache.get(X);ee!==y&&(ee&&this.observer.unobserve(ee),this.observer.observe(y),this.elementsCache.set(X,y)),y.isConnected&&this.resizeItem(k,this.options.measureElement(y,j,this))},this.resizeItem=(y,j)=>{var ee;const k=this.measurementsCache[y];if(!k)return;const D=(ee=this.itemSizeCache.get(k.key))!=null?ee:k.size,X=j-D;X!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(k,X,this):k.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=X,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(k.index),this.itemSizeCache=new Map(this.itemSizeCache.set(k.key,j)),this.notify(!1))},this.measureElement=y=>{if(!y){this.elementsCache.forEach((j,k)=>{j.isConnected||(this.observer.unobserve(j),this.elementsCache.delete(k))});return}this._measureElement(y,void 0)},this.getVirtualItems=v(()=>[this.getIndexes(),this.getMeasurements()],(y,j)=>{const k=[];for(let D=0,X=y.length;D<X;D++){const ee=y[D],be=j[ee];k.push(be)}return k},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=y=>{const j=this.getMeasurements();if(j.length!==0)return S(j[Q(0,j.length-1,k=>S(j[k]).start,y)])},this.getOffsetForAlignment=(y,j)=>{const k=this.getSize(),D=this.getScrollOffset();j==="auto"&&y>=D+k&&(j="end"),j==="end"&&(y-=k);const X=this.options.horizontal?"scrollWidth":"scrollHeight",be=(this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[X]:this.scrollElement[X]:0)-k;return Math.max(Math.min(be,y),0)},this.getOffsetForIndex=(y,j="auto")=>{y=Math.max(0,Math.min(y,this.options.count-1));const k=this.measurementsCache[y];if(!k)return;const D=this.getSize(),X=this.getScrollOffset();if(j==="auto")if(k.end>=X+D-this.options.scrollPaddingEnd)j="end";else if(k.start<=X+this.options.scrollPaddingStart)j="start";else return[X,j];const ee=k.start-this.options.scrollPaddingStart+(k.size-D)/2;switch(j){case"center":return[this.getOffsetForAlignment(ee,j),j];case"end":return[this.getOffsetForAlignment(k.end+this.options.scrollPaddingEnd,j),j];default:return[this.getOffsetForAlignment(k.start-this.options.scrollPaddingStart,j),j]}},this.isDynamicMode=()=>this.elementsCache.size>0,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(y,{align:j="start",behavior:k}={})=>{this.cancelScrollToIndex(),k==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(y,j),{adjustments:void 0,behavior:k})},this.scrollToIndex=(y,{align:j="auto",behavior:k}={})=>{y=Math.max(0,Math.min(y,this.options.count-1)),this.cancelScrollToIndex(),k==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const D=this.getOffsetForIndex(y,j);if(!D)return;const[X,ee]=D;this._scrollToOffset(X,{adjustments:void 0,behavior:k}),k!=="smooth"&&this.isDynamicMode()&&this.targetWindow&&(this.scrollToIndexTimeoutId=this.targetWindow.setTimeout(()=>{if(this.scrollToIndexTimeoutId=null,this.elementsCache.has(this.options.getItemKey(y))){const[Ae]=S(this.getOffsetForIndex(y,ee));u(Ae,this.getScrollOffset())||this.scrollToIndex(y,{align:ee,behavior:k})}else this.scrollToIndex(y,{align:ee,behavior:k})}))},this.scrollBy=(y,{behavior:j}={})=>{this.cancelScrollToIndex(),j==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+y,{adjustments:void 0,behavior:j})},this.getTotalSize=()=>{var D;var y;const j=this.getMeasurements();let k;return j.length===0?k=this.options.paddingStart:k=this.options.lanes===1?(D=(y=j[j.length-1])==null?void 0:y.end)!=null?D:0:Math.max(...j.slice(-this.options.lanes).map(X=>X.end)),Math.max(k-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(y,{adjustments:j,behavior:k})=>{this.options.scrollToFn(y,{behavior:k,adjustments:j},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(ae)}}const Q=(K,ae,y,j)=>{for(;K<=ae;){const k=(K+ae)/2|0,D=y(k);if(D<j)K=k+1;else if(D>j)ae=k-1;else return k}return K>0?K-1:0};function Ve({measurements:K,outerSize:ae,scrollOffset:y}){const j=K.length-1,D=Q(0,j,ee=>K[ee].start,y);let X=D;for(;X<j&&K[X].end<y+ae;)X++;return{startIndex:D,endIndex:X}}var J,Qe,V;const re=typeof document!="undefined"?i.useLayoutEffect:i.useEffect;function ye(K){const ae=i.useReducer(()=>({}),{})[1],y={...K,onChange:(k,D)=>{var X;D?(0,w.flushSync)(ae):ae(),(X=K.onChange)==null||X.call(K,k,D)}},[j]=i.useState(()=>new Ie(y));return j.setOptions(y),re(()=>j._didMount(),[]),re(()=>j._willUpdate()),j}function _e(K){return ye({observeElementRect:M,observeElementOffset:g,scrollToFn:G,...K})}function de(K){return ye({getScrollElement:()=>typeof document!="undefined"?window:null,observeElementRect:J,observeElementOffset:Qe,scrollToFn:V,initialOffset:()=>typeof document!="undefined"?window.scrollY:0,...K})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.button--e2RqK[data-size=xs] .label--v6xx2{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.button--e2RqK[data-size=xs] .icon--mhKJI{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--e2RqK[data-size=xs] .icon--mhKJI svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--e2RqK[data-size=xs][data-variant=label-only]{
  border-radius:var(--radius-button-xs, 4px);
  height:var(--size-button-xs, 24px);
  padding-right:var(--space-button-xs-from-label, 8px);
  padding-left:var(--space-button-xs-from-label, 8px);
  min-width:var(--size-button-mininal-width-xs, 72px);
}
.button--e2RqK[data-size=xs][data-variant=icon-only]{
  border-radius:var(--radius-button-xs, 4px);
  height:var(--size-button-xs, 24px);
  width:var(--size-button-xs, 24px);
}
.button--e2RqK[data-size=xs][data-variant=icon-after]{
  border-radius:var(--radius-button-xs, 4px);
  height:var(--size-button-xs, 24px);
  gap:var(--space-button-xs-gap, 2px);
  padding-right:var(--space-button-xs-from-icon, 4px);
  padding-left:var(--space-button-xs-from-label, 8px);
  min-width:var(--size-button-mininal-width-xs, 72px);
}
.button--e2RqK[data-size=s] .label--v6xx2{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.button--e2RqK[data-size=s] .icon--mhKJI{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--e2RqK[data-size=s] .icon--mhKJI svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--e2RqK[data-size=s][data-variant=label-only]{
  border-radius:var(--radius-button-s, 4px);
  height:var(--size-button-s, 32px);
  padding-right:var(--space-button-s-from-label, 16px);
  padding-left:var(--space-button-s-from-label, 16px);
  min-width:var(--size-button-mininal-width-s, 96px);
}
.button--e2RqK[data-size=s][data-variant=icon-only]{
  border-radius:var(--radius-button-s, 4px);
  height:var(--size-button-s, 32px);
  width:var(--size-button-s, 32px);
}
.button--e2RqK[data-size=s][data-variant=icon-after]{
  border-radius:var(--radius-button-s, 4px);
  height:var(--size-button-s, 32px);
  gap:var(--space-button-s-gap, 4px);
  padding-right:var(--space-button-s-from-icon, 8px);
  padding-left:var(--space-button-s-from-label, 16px);
  min-width:var(--size-button-mininal-width-s, 96px);
}
.button--e2RqK[data-size=m] .label--v6xx2{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.button--e2RqK[data-size=m] .icon--mhKJI{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--e2RqK[data-size=m] .icon--mhKJI svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--e2RqK[data-size=m][data-variant=label-only]{
  border-radius:var(--radius-button-m, 4px);
  height:var(--size-button-m, 40px);
  padding-right:var(--space-button-m-from-label, 16px);
  padding-left:var(--space-button-m-from-label, 16px);
  min-width:var(--size-button-mininal-width-m, 120px);
}
.button--e2RqK[data-size=m][data-variant=icon-only]{
  border-radius:var(--radius-button-m, 4px);
  height:var(--size-button-m, 40px);
  width:var(--size-button-m, 40px);
}
.button--e2RqK[data-size=m][data-variant=icon-after]{
  border-radius:var(--radius-button-m, 4px);
  height:var(--size-button-m, 40px);
  gap:var(--space-button-m-gap, 4px);
  padding-right:var(--space-button-m-from-icon, 8px);
  padding-left:var(--space-button-m-from-label, 16px);
  min-width:var(--size-button-mininal-width-m, 120px);
}
.button--e2RqK[data-size=l] .label--v6xx2{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.button--e2RqK[data-size=l] .icon--mhKJI{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--e2RqK[data-size=l] .icon--mhKJI svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--e2RqK[data-size=l][data-variant=label-only]{
  border-radius:var(--radius-button-l, 4px);
  height:var(--size-button-l, 48px);
  padding-right:var(--space-button-l-from-label, 24px);
  padding-left:var(--space-button-l-from-label, 24px);
  min-width:var(--size-button-mininal-width-l, 144px);
}
.button--e2RqK[data-size=l][data-variant=icon-only]{
  border-radius:var(--radius-button-l, 4px);
  height:var(--size-button-l, 48px);
  width:var(--size-button-l, 48px);
}
.button--e2RqK[data-size=l][data-variant=icon-after]{
  border-radius:var(--radius-button-l, 4px);
  height:var(--size-button-l, 48px);
  gap:var(--space-button-l-gap, 4px);
  padding-right:var(--space-button-l-from-icon, 16px);
  padding-left:var(--space-button-l-from-label, 24px);
  min-width:var(--size-button-mininal-width-l, 144px);
}
.button--e2RqK[data-loading][data-variant=label-only] .icon--mhKJI{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
.button--e2RqK[data-loading][data-variant=label-only] .label--v6xx2{
  opacity:var(--opacity-a0, 0);
}
.button--e2RqK[data-appearance=primary] .label--v6xx2{
  color:var(--sys-primary-on-accent, #fbfffc);
}
.button--e2RqK[data-appearance=primary] .icon--mhKJI{
  color:var(--sys-primary-on-accent, #fbfffc);
}
.button--e2RqK[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
@media (hover: hover){
  .button--e2RqK[data-appearance=primary]:hover .label--v6xx2{
    color:var(--sys-primary-on-accent, #fbfffc);
  }
  .button--e2RqK[data-appearance=primary]:hover .icon--mhKJI{
    color:var(--sys-primary-on-accent, #fbfffc);
  }
  .button--e2RqK[data-appearance=primary]:hover{
    background-color:var(--sys-primary-accent-hovered, #37946e);
  }
}
@media (hover: none) or (hover: hover){
  .button--e2RqK[data-appearance=primary]:focus-visible .label--v6xx2{
    color:var(--sys-primary-on-accent, #fbfffc);
  }
  .button--e2RqK[data-appearance=primary]:focus-visible .icon--mhKJI{
    color:var(--sys-primary-on-accent, #fbfffc);
  }
  .button--e2RqK[data-appearance=primary]:focus-visible{
    background-color:var(--sys-primary-accent-hovered, #37946e);
  }
  .button--e2RqK[data-appearance=primary]:active .label--v6xx2{
    color:var(--sys-primary-on-accent, #fbfffc);
  }
  .button--e2RqK[data-appearance=primary]:active .icon--mhKJI{
    color:var(--sys-primary-on-accent, #fbfffc);
  }
  .button--e2RqK[data-appearance=primary]:active{
    background-color:var(--sys-primary-accent-pressed, #358561);
  }
  .button--e2RqK[data-appearance=primary][data-loading] .label--v6xx2{
    color:var(--sys-primary-on-accent, #fbfffc);
  }
  .button--e2RqK[data-appearance=primary][data-loading] .icon--mhKJI{
    color:var(--sys-primary-on-accent, #fbfffc);
  }
  .button--e2RqK[data-appearance=primary][data-loading]{
    background-color:var(--sys-primary-accent-pressed, #358561);
  }
  .button--e2RqK[data-appearance=primary]:disabled .label--v6xx2, .button--e2RqK[data-appearance=primary][data-disabled] .label--v6xx2{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--e2RqK[data-appearance=primary]:disabled .icon--mhKJI, .button--e2RqK[data-appearance=primary][data-disabled] .icon--mhKJI{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--e2RqK[data-appearance=primary]:disabled, .button--e2RqK[data-appearance=primary][data-disabled]{
    background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  }
}
.button--e2RqK[data-appearance=neutral] .label--v6xx2{
  color:var(--sys-neutral-on-accent, #ffffff);
}
.button--e2RqK[data-appearance=neutral] .icon--mhKJI{
  color:var(--sys-neutral-on-accent, #ffffff);
}
.button--e2RqK[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
@media (hover: hover){
  .button--e2RqK[data-appearance=neutral]:hover .label--v6xx2{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--e2RqK[data-appearance=neutral]:hover .icon--mhKJI{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--e2RqK[data-appearance=neutral]:hover{
    background-color:var(--sys-neutral-accent-hovered, #6d707f);
  }
}
@media (hover: none) or (hover: hover){
  .button--e2RqK[data-appearance=neutral]:focus-visible .label--v6xx2{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--e2RqK[data-appearance=neutral]:focus-visible .icon--mhKJI{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--e2RqK[data-appearance=neutral]:focus-visible{
    background-color:var(--sys-neutral-accent-hovered, #6d707f);
  }
  .button--e2RqK[data-appearance=neutral]:active .label--v6xx2{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--e2RqK[data-appearance=neutral]:active .icon--mhKJI{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--e2RqK[data-appearance=neutral]:active{
    background-color:var(--sys-neutral-accent-pressed, #656774);
  }
  .button--e2RqK[data-appearance=neutral][data-loading] .label--v6xx2{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--e2RqK[data-appearance=neutral][data-loading] .icon--mhKJI{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--e2RqK[data-appearance=neutral][data-loading]{
    background-color:var(--sys-neutral-accent-pressed, #656774);
  }
  .button--e2RqK[data-appearance=neutral]:disabled .label--v6xx2, .button--e2RqK[data-appearance=neutral][data-disabled] .label--v6xx2{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--e2RqK[data-appearance=neutral]:disabled .icon--mhKJI, .button--e2RqK[data-appearance=neutral][data-disabled] .icon--mhKJI{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--e2RqK[data-appearance=neutral]:disabled, .button--e2RqK[data-appearance=neutral][data-disabled]{
    background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  }
}
.button--e2RqK[data-appearance=red] .label--v6xx2{
  color:var(--sys-red-on-accent, #fffbf9);
}
.button--e2RqK[data-appearance=red] .icon--mhKJI{
  color:var(--sys-red-on-accent, #fffbf9);
}
.button--e2RqK[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
@media (hover: hover){
  .button--e2RqK[data-appearance=red]:hover .label--v6xx2{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--e2RqK[data-appearance=red]:hover .icon--mhKJI{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--e2RqK[data-appearance=red]:hover{
    background-color:var(--sys-red-accent-hovered, #bd4844);
  }
}
@media (hover: none) or (hover: hover){
  .button--e2RqK[data-appearance=red]:focus-visible .label--v6xx2{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--e2RqK[data-appearance=red]:focus-visible .icon--mhKJI{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--e2RqK[data-appearance=red]:focus-visible{
    background-color:var(--sys-red-accent-hovered, #bd4844);
  }
  .button--e2RqK[data-appearance=red]:active .label--v6xx2{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--e2RqK[data-appearance=red]:active .icon--mhKJI{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--e2RqK[data-appearance=red]:active{
    background-color:var(--sys-red-accent-pressed, #ae514c);
  }
  .button--e2RqK[data-appearance=red][data-loading] .label--v6xx2{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--e2RqK[data-appearance=red][data-loading] .icon--mhKJI{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--e2RqK[data-appearance=red][data-loading]{
    background-color:var(--sys-red-accent-pressed, #ae514c);
  }
  .button--e2RqK[data-appearance=red]:disabled .label--v6xx2, .button--e2RqK[data-appearance=red][data-disabled] .label--v6xx2{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--e2RqK[data-appearance=red]:disabled .icon--mhKJI, .button--e2RqK[data-appearance=red][data-disabled] .icon--mhKJI{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--e2RqK[data-appearance=red]:disabled, .button--e2RqK[data-appearance=red][data-disabled]{
    background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  }
}
.button--e2RqK[data-appearance=primary]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--e2RqK[data-appearance=neutral]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--e2RqK[data-appearance=red]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--e2RqK:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:var(--spacing-state-focus-offset, 2px);
}`,""]),u.locals={button:"button--e2RqK",label:"label--v6xx2",icon:"icon--mhKJI"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.button--uRD0N[data-size=xs] .label--koRqO{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.button--uRD0N[data-size=xs] .icon--HO4sB{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--uRD0N[data-size=xs] .icon--HO4sB svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--uRD0N[data-size=xs][data-variant=label-only]{
  height:var(--size-button-xs, 24px);
  gap:var(--space-button-xs-gap, 2px);
  border-radius:var(--radius-button-xs, 4px);
}
.button--uRD0N[data-size=xs][data-variant=icon-only]{
  height:var(--size-button-xs, 24px);
  width:var(--size-button-xs, 24px);
  border-radius:var(--radius-button-xs, 4px);
}
.button--uRD0N[data-size=xs][data-variant=icon-after]{
  height:var(--size-button-xs, 24px);
  gap:var(--space-button-xs-gap, 2px);
  border-radius:var(--radius-button-xs, 4px);
}
.button--uRD0N[data-size=xs][data-variant=icon-before]{
  height:var(--size-button-xs, 24px);
  gap:var(--space-button-xs-gap, 2px);
  border-radius:var(--radius-button-xs, 4px);
}
.button--uRD0N[data-size=s] .label--koRqO{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.button--uRD0N[data-size=s] .icon--HO4sB{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--uRD0N[data-size=s] .icon--HO4sB svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--uRD0N[data-size=s][data-variant=label-only]{
  height:var(--size-button-s, 32px);
  gap:var(--space-button-s-gap, 4px);
  border-radius:var(--radius-button-s, 4px);
}
.button--uRD0N[data-size=s][data-variant=icon-only]{
  height:var(--size-button-s, 32px);
  width:var(--size-button-s, 32px);
  border-radius:var(--radius-button-s, 4px);
}
.button--uRD0N[data-size=s][data-variant=icon-after]{
  height:var(--size-button-s, 32px);
  gap:var(--space-button-s-gap, 4px);
  border-radius:var(--radius-button-s, 4px);
}
.button--uRD0N[data-size=s][data-variant=icon-before]{
  height:var(--size-button-s, 32px);
  gap:var(--space-button-s-gap, 4px);
  border-radius:var(--radius-button-s, 4px);
}
.button--uRD0N[data-size=m] .label--koRqO{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.button--uRD0N[data-size=m] .icon--HO4sB{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--uRD0N[data-size=m] .icon--HO4sB svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--uRD0N[data-size=m][data-variant=label-only]{
  height:var(--size-button-m, 40px);
  gap:var(--space-button-m-gap, 4px);
  border-radius:var(--radius-button-m, 4px);
}
.button--uRD0N[data-size=m][data-variant=icon-only]{
  height:var(--size-button-m, 40px);
  width:var(--size-button-m, 40px);
  border-radius:var(--radius-button-m, 4px);
}
.button--uRD0N[data-size=m][data-variant=icon-after]{
  height:var(--size-button-m, 40px);
  gap:var(--space-button-m-gap, 4px);
  border-radius:var(--radius-button-m, 4px);
}
.button--uRD0N[data-size=m][data-variant=icon-before]{
  height:var(--size-button-m, 40px);
  gap:var(--space-button-m-gap, 4px);
  border-radius:var(--radius-button-m, 4px);
}
.button--uRD0N[data-size=l] .label--koRqO{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.button--uRD0N[data-size=l] .icon--HO4sB{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--uRD0N[data-size=l] .icon--HO4sB svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--uRD0N[data-size=l][data-variant=label-only]{
  height:var(--size-button-l, 48px);
  gap:var(--space-button-l-gap, 4px);
  border-radius:var(--radius-button-l, 4px);
}
.button--uRD0N[data-size=l][data-variant=icon-only]{
  height:var(--size-button-l, 48px);
  width:var(--size-button-l, 48px);
  border-radius:var(--radius-button-l, 4px);
}
.button--uRD0N[data-size=l][data-variant=icon-after]{
  height:var(--size-button-l, 48px);
  gap:var(--space-button-l-gap, 4px);
  border-radius:var(--radius-button-l, 4px);
}
.button--uRD0N[data-size=l][data-variant=icon-before]{
  height:var(--size-button-l, 48px);
  gap:var(--space-button-l-gap, 4px);
  border-radius:var(--radius-button-l, 4px);
}
.button--uRD0N[data-loading][data-variant=label-only] .icon--HO4sB{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
.button--uRD0N[data-loading][data-variant=label-only] .label--koRqO{
  opacity:var(--opacity-a0, 0);
}
.button--uRD0N .label--koRqO{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.button--uRD0N .icon--HO4sB{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.button--uRD0N[data-appearance=primary] .label--koRqO{
  color:var(--sys-primary-accent-default, #389f74);
}
.button--uRD0N[data-appearance=primary] .icon--HO4sB{
  color:var(--sys-primary-accent-default, #389f74);
}
@media (hover: hover){
  .button--uRD0N[data-appearance=primary]:hover .label--koRqO{
    color:var(--sys-primary-accent-hovered, #37946e);
  }
  .button--uRD0N[data-appearance=primary]:hover .icon--HO4sB{
    color:var(--sys-primary-accent-hovered, #37946e);
  }
}
@media (hover: none) or (hover: hover){
  .button--uRD0N[data-appearance=primary]:focus-visible .label--koRqO{
    color:var(--sys-primary-accent-hovered, #37946e);
  }
  .button--uRD0N[data-appearance=primary]:focus-visible .icon--HO4sB{
    color:var(--sys-primary-accent-hovered, #37946e);
  }
  .button--uRD0N[data-appearance=primary]:active .label--koRqO{
    color:var(--sys-primary-accent-pressed, #358561);
  }
  .button--uRD0N[data-appearance=primary]:active .icon--HO4sB{
    color:var(--sys-primary-accent-pressed, #358561);
  }
  .button--uRD0N[data-appearance=primary][data-loading] .label--koRqO{
    color:var(--sys-primary-accent-pressed, #358561);
  }
  .button--uRD0N[data-appearance=primary][data-loading] .icon--HO4sB{
    color:var(--sys-primary-accent-pressed, #358561);
  }
  .button--uRD0N[data-appearance=primary]:disabled .label--koRqO, .button--uRD0N[data-appearance=primary][data-disabled] .label--koRqO{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
  .button--uRD0N[data-appearance=primary]:disabled .icon--HO4sB, .button--uRD0N[data-appearance=primary][data-disabled] .icon--HO4sB{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
}
@media (hover: hover){
  .button--uRD0N[data-appearance=neutral]:hover .label--koRqO{
    color:var(--sys-neutral-accent-hovered, #6d707f);
  }
  .button--uRD0N[data-appearance=neutral]:hover .icon--HO4sB{
    color:var(--sys-neutral-accent-hovered, #6d707f);
  }
}
@media (hover: none) or (hover: hover){
  .button--uRD0N[data-appearance=neutral]:focus-visible .label--koRqO{
    color:var(--sys-neutral-accent-hovered, #6d707f);
  }
  .button--uRD0N[data-appearance=neutral]:focus-visible .icon--HO4sB{
    color:var(--sys-neutral-accent-hovered, #6d707f);
  }
  .button--uRD0N[data-appearance=neutral]:active .label--koRqO{
    color:var(--sys-neutral-accent-pressed, #656774);
  }
  .button--uRD0N[data-appearance=neutral]:active .icon--HO4sB{
    color:var(--sys-neutral-accent-pressed, #656774);
  }
  .button--uRD0N[data-appearance=neutral][data-loading] .label--koRqO{
    color:var(--sys-neutral-accent-pressed, #656774);
  }
  .button--uRD0N[data-appearance=neutral][data-loading] .icon--HO4sB{
    color:var(--sys-neutral-accent-pressed, #656774);
  }
  .button--uRD0N[data-appearance=neutral]:disabled .label--koRqO, .button--uRD0N[data-appearance=neutral][data-disabled] .label--koRqO{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
  .button--uRD0N[data-appearance=neutral]:disabled .icon--HO4sB, .button--uRD0N[data-appearance=neutral][data-disabled] .icon--HO4sB{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
}
@media (hover: hover){
  .button--uRD0N[data-appearance=red]:hover .label--koRqO{
    color:var(--sys-red-accent-hovered, #bd4844);
  }
  .button--uRD0N[data-appearance=red]:hover .icon--HO4sB{
    color:var(--sys-red-accent-hovered, #bd4844);
  }
}
@media (hover: none) or (hover: hover){
  .button--uRD0N[data-appearance=red]:focus-visible .label--koRqO{
    color:var(--sys-red-accent-hovered, #bd4844);
  }
  .button--uRD0N[data-appearance=red]:focus-visible .icon--HO4sB{
    color:var(--sys-red-accent-hovered, #bd4844);
  }
  .button--uRD0N[data-appearance=red]:active .label--koRqO{
    color:var(--sys-red-accent-pressed, #ae514c);
  }
  .button--uRD0N[data-appearance=red]:active .icon--HO4sB{
    color:var(--sys-red-accent-pressed, #ae514c);
  }
  .button--uRD0N[data-appearance=red][data-loading] .label--koRqO{
    color:var(--sys-red-accent-pressed, #ae514c);
  }
  .button--uRD0N[data-appearance=red][data-loading] .icon--HO4sB{
    color:var(--sys-red-accent-pressed, #ae514c);
  }
  .button--uRD0N[data-appearance=red]:disabled .label--koRqO, .button--uRD0N[data-appearance=red][data-disabled] .label--koRqO{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
  .button--uRD0N[data-appearance=red]:disabled .icon--HO4sB, .button--uRD0N[data-appearance=red][data-disabled] .icon--HO4sB{
    color:var(--sys-neutral-text-disabled, #aaaebd);
  }
}
.button--uRD0N[data-appearance=primary]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--uRD0N[data-appearance=neutral]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--uRD0N[data-appearance=red]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--uRD0N:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.button--uRD0N:focus-visible{
  outline-offset:0;
}`,""]),u.locals={button:"button--uRD0N",label:"label--koRqO",icon:"icon--HO4sB"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.button--ASNkZ[data-size=xs] .label--RMaiY{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.button--ASNkZ[data-size=xs] .icon--Jyh74{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--ASNkZ[data-size=xs] .icon--Jyh74 svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--ASNkZ[data-size=xs][data-variant=label-only]{
  border-radius:var(--radius-button-xs, 4px);
  height:var(--size-button-xs, 24px);
  padding-right:var(--space-button-xs-from-label, 8px);
  padding-left:var(--space-button-xs-from-label, 8px);
  min-width:var(--size-button-mininal-width-xs, 72px);
}
.button--ASNkZ[data-size=xs][data-variant=icon-only]{
  border-radius:var(--radius-button-xs, 4px);
  height:var(--size-button-xs, 24px);
  width:var(--size-button-xs, 24px);
}
.button--ASNkZ[data-size=xs][data-variant=icon-after]{
  border-radius:var(--radius-button-xs, 4px);
  height:var(--size-button-xs, 24px);
  gap:var(--space-button-xs-gap, 2px);
  padding-right:var(--space-button-xs-from-icon, 4px);
  padding-left:var(--space-button-xs-from-label, 8px);
  min-width:var(--size-button-mininal-width-xs, 72px);
}
.button--ASNkZ[data-size=s] .label--RMaiY{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.button--ASNkZ[data-size=s] .icon--Jyh74{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--ASNkZ[data-size=s] .icon--Jyh74 svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--ASNkZ[data-size=s][data-variant=label-only]{
  border-radius:var(--radius-button-s, 4px);
  height:var(--size-button-s, 32px);
  padding-right:var(--space-button-s-from-label, 16px);
  padding-left:var(--space-button-s-from-label, 16px);
  border-width:var(--border-width-button-outline-single, 1px);
  min-width:var(--size-button-mininal-width-s, 96px);
}
.button--ASNkZ[data-size=s][data-variant=icon-only]{
  border-radius:var(--radius-button-s, 4px);
  height:var(--size-button-s, 32px);
  width:var(--size-button-s, 32px);
}
.button--ASNkZ[data-size=s][data-variant=icon-after]{
  border-radius:var(--radius-button-s, 4px);
  height:var(--size-button-s, 32px);
  gap:var(--space-button-s-gap, 4px);
  padding-right:var(--space-button-s-from-icon, 8px);
  padding-left:var(--space-button-s-from-label, 16px);
  min-width:var(--size-button-mininal-width-s, 96px);
}
.button--ASNkZ[data-size=m] .label--RMaiY{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.button--ASNkZ[data-size=m] .icon--Jyh74{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--ASNkZ[data-size=m] .icon--Jyh74 svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--ASNkZ[data-size=m][data-variant=label-only]{
  border-radius:var(--radius-button-m, 4px);
  height:var(--size-button-m, 40px);
  padding-right:var(--space-button-m-from-label, 16px);
  padding-left:var(--space-button-m-from-label, 16px);
  min-width:var(--size-button-mininal-width-m, 120px);
}
.button--ASNkZ[data-size=m][data-variant=icon-only]{
  border-radius:var(--radius-button-m, 4px);
  height:var(--size-button-m, 40px);
  width:var(--size-button-m, 40px);
}
.button--ASNkZ[data-size=m][data-variant=icon-after]{
  border-radius:var(--radius-button-m, 4px);
  height:var(--size-button-m, 40px);
  gap:var(--space-button-m-gap, 4px);
  padding-right:var(--space-button-m-from-icon, 8px);
  padding-left:var(--space-button-m-from-label, 16px);
  min-width:var(--size-button-mininal-width-m, 120px);
}
.button--ASNkZ[data-size=l] .label--RMaiY{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.button--ASNkZ[data-size=l] .icon--Jyh74{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--ASNkZ[data-size=l] .icon--Jyh74 svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--ASNkZ[data-size=l][data-variant=label-only]{
  border-radius:var(--radius-button-l, 4px);
  height:var(--size-button-l, 48px);
  padding-right:var(--space-button-l-from-label, 24px);
  padding-left:var(--space-button-l-from-label, 24px);
  min-width:var(--size-button-mininal-width-l, 144px);
}
.button--ASNkZ[data-size=l][data-variant=icon-only]{
  border-radius:var(--radius-button-l, 4px);
  height:var(--size-button-l, 48px);
  width:var(--size-button-l, 48px);
}
.button--ASNkZ[data-size=l][data-variant=icon-after]{
  border-radius:var(--radius-button-l, 4px);
  height:var(--size-button-l, 48px);
  gap:var(--space-button-l-gap, 4px);
  padding-right:var(--space-button-l-from-icon, 16px);
  padding-left:var(--space-button-l-from-label, 24px);
  min-width:var(--size-button-mininal-width-l, 144px);
}
.button--ASNkZ[data-loading][data-variant=label-only] .icon--Jyh74{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
.button--ASNkZ[data-loading][data-variant=label-only] .label--RMaiY{
  opacity:var(--opacity-a0, 0);
}
.button--ASNkZ[data-appearance=primary] .label--RMaiY{
  color:var(--sys-primary-text-support, #358561);
}
.button--ASNkZ[data-appearance=primary] .icon--Jyh74{
  color:var(--sys-primary-text-support, #358561);
}
.button--ASNkZ[data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #caeadb);
}
@media (hover: hover){
  .button--ASNkZ[data-appearance=primary]:hover .label--RMaiY{
    color:var(--sys-primary-text-main, #1b5840);
  }
  .button--ASNkZ[data-appearance=primary]:hover .icon--Jyh74{
    color:var(--sys-primary-text-main, #1b5840);
  }
  .button--ASNkZ[data-appearance=primary]:hover{
    background-color:var(--sys-primary-decor-hovered, #b3deca);
  }
}
@media (hover: none) or (hover: hover){
  .button--ASNkZ[data-appearance=primary]:focus-visible .label--RMaiY{
    color:var(--sys-primary-text-main, #1b5840);
  }
  .button--ASNkZ[data-appearance=primary]:focus-visible .icon--Jyh74{
    color:var(--sys-primary-text-main, #1b5840);
  }
  .button--ASNkZ[data-appearance=primary]:focus-visible{
    background-color:var(--sys-primary-decor-hovered, #b3deca);
  }
  .button--ASNkZ[data-appearance=primary]:active .label--RMaiY{
    color:var(--sys-primary-text-main, #1b5840);
  }
  .button--ASNkZ[data-appearance=primary]:active .icon--Jyh74{
    color:var(--sys-primary-text-main, #1b5840);
  }
  .button--ASNkZ[data-appearance=primary]:active{
    background-color:var(--sys-primary-decor-activated, #99d7ba);
  }
  .button--ASNkZ[data-appearance=primary][data-loading] .label--RMaiY{
    color:var(--sys-primary-text-main, #1b5840);
  }
  .button--ASNkZ[data-appearance=primary][data-loading] .icon--Jyh74{
    color:var(--sys-primary-text-main, #1b5840);
  }
  .button--ASNkZ[data-appearance=primary][data-loading]{
    background-color:var(--sys-primary-decor-activated, #99d7ba);
  }
  .button--ASNkZ[data-appearance=primary]:disabled .label--RMaiY, .button--ASNkZ[data-appearance=primary][data-disabled] .label--RMaiY{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--ASNkZ[data-appearance=primary]:disabled .icon--Jyh74, .button--ASNkZ[data-appearance=primary][data-disabled] .icon--Jyh74{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--ASNkZ[data-appearance=primary]:disabled, .button--ASNkZ[data-appearance=primary][data-disabled]{
    background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  }
}
.button--ASNkZ[data-appearance=neutral] .label--RMaiY{
  color:var(--sys-neutral-text-support, #6d707f);
}
.button--ASNkZ[data-appearance=neutral] .icon--Jyh74{
  color:var(--sys-neutral-text-support, #6d707f);
}
.button--ASNkZ[data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
@media (hover: hover){
  .button--ASNkZ[data-appearance=neutral]:hover .label--RMaiY{
    color:var(--sys-neutral-text-main, #41424e);
  }
  .button--ASNkZ[data-appearance=neutral]:hover .icon--Jyh74{
    color:var(--sys-neutral-text-main, #41424e);
  }
  .button--ASNkZ[data-appearance=neutral]:hover{
    background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
  }
}
@media (hover: none) or (hover: hover){
  .button--ASNkZ[data-appearance=neutral]:focus-visible .label--RMaiY{
    color:var(--sys-neutral-text-main, #41424e);
  }
  .button--ASNkZ[data-appearance=neutral]:focus-visible .icon--Jyh74{
    color:var(--sys-neutral-text-main, #41424e);
  }
  .button--ASNkZ[data-appearance=neutral]:focus-visible{
    background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
  }
  .button--ASNkZ[data-appearance=neutral]:active .label--RMaiY{
    color:var(--sys-neutral-text-main, #41424e);
  }
  .button--ASNkZ[data-appearance=neutral]:active .icon--Jyh74{
    color:var(--sys-neutral-text-main, #41424e);
  }
  .button--ASNkZ[data-appearance=neutral]:active{
    background-color:var(--sys-neutral-decor-activated, #b6bac7);
  }
  .button--ASNkZ[data-appearance=neutral][data-loading] .label--RMaiY{
    color:var(--sys-neutral-text-main, #41424e);
  }
  .button--ASNkZ[data-appearance=neutral][data-loading] .icon--Jyh74{
    color:var(--sys-neutral-text-main, #41424e);
  }
  .button--ASNkZ[data-appearance=neutral][data-loading]{
    background-color:var(--sys-neutral-decor-activated, #b6bac7);
  }
  .button--ASNkZ[data-appearance=neutral]:disabled .label--RMaiY, .button--ASNkZ[data-appearance=neutral][data-disabled] .label--RMaiY{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--ASNkZ[data-appearance=neutral]:disabled .icon--Jyh74, .button--ASNkZ[data-appearance=neutral][data-disabled] .icon--Jyh74{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--ASNkZ[data-appearance=neutral]:disabled, .button--ASNkZ[data-appearance=neutral][data-disabled]{
    background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  }
}
.button--ASNkZ[data-appearance=red] .label--RMaiY{
  color:var(--sys-red-text-support, #ae514c);
}
.button--ASNkZ[data-appearance=red] .icon--Jyh74{
  color:var(--sys-red-text-support, #ae514c);
}
.button--ASNkZ[data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
@media (hover: hover){
  .button--ASNkZ[data-appearance=red]:hover .label--RMaiY{
    color:var(--sys-red-text-main, #7a2d2d);
  }
  .button--ASNkZ[data-appearance=red]:hover .icon--Jyh74{
    color:var(--sys-red-text-main, #7a2d2d);
  }
  .button--ASNkZ[data-appearance=red]:hover{
    background-color:var(--sys-red-decor-hovered, #fac1b3);
  }
}
@media (hover: none) or (hover: hover){
  .button--ASNkZ[data-appearance=red]:focus-visible .label--RMaiY{
    color:var(--sys-red-text-main, #7a2d2d);
  }
  .button--ASNkZ[data-appearance=red]:focus-visible .icon--Jyh74{
    color:var(--sys-red-text-main, #7a2d2d);
  }
  .button--ASNkZ[data-appearance=red]:focus-visible{
    background-color:var(--sys-red-decor-hovered, #fac1b3);
  }
  .button--ASNkZ[data-appearance=red]:active .label--RMaiY{
    color:var(--sys-red-text-main, #7a2d2d);
  }
  .button--ASNkZ[data-appearance=red]:active .icon--Jyh74{
    color:var(--sys-red-text-main, #7a2d2d);
  }
  .button--ASNkZ[data-appearance=red]:active{
    background-color:var(--sys-red-decor-activated, #fbab99);
  }
  .button--ASNkZ[data-appearance=red][data-loading] .label--RMaiY{
    color:var(--sys-red-text-main, #7a2d2d);
  }
  .button--ASNkZ[data-appearance=red][data-loading] .icon--Jyh74{
    color:var(--sys-red-text-main, #7a2d2d);
  }
  .button--ASNkZ[data-appearance=red][data-loading]{
    background-color:var(--sys-red-decor-activated, #fbab99);
  }
  .button--ASNkZ[data-appearance=red]:disabled .label--RMaiY, .button--ASNkZ[data-appearance=red][data-disabled] .label--RMaiY{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--ASNkZ[data-appearance=red]:disabled .icon--Jyh74, .button--ASNkZ[data-appearance=red][data-disabled] .icon--Jyh74{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--ASNkZ[data-appearance=red]:disabled, .button--ASNkZ[data-appearance=red][data-disabled]{
    background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  }
}
.button--ASNkZ[data-appearance=primary]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--ASNkZ[data-appearance=neutral]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--ASNkZ[data-appearance=red]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--ASNkZ:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:var(--spacing-state-focus-offset, 2px);
}`,""]),u.locals={button:"button--ASNkZ",label:"label--RMaiY",icon:"icon--Jyh74"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.button--uiFPu{
  cursor:pointer;
  position:relative;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  min-width:-moz-max-content;
  min-width:max-content;
  margin:0;
  padding:0;
  color:transparent;
  text-decoration:none;
  text-transform:none;
  background-color:transparent;
  border:0 solid transparent;
  outline:0;
  outline-offset:0;
}
.button--uiFPu[data-full-width]{
  flex-grow:1;
  flex-shrink:1;
  width:100%;
}
.button--uiFPu > *{
  cursor:pointer;
}
.button--uiFPu:disabled, .button--uiFPu[data-disabled], .button--uiFPu[data-loading]{
  cursor:not-allowed;
}
.button--uiFPu:disabled > *, .button--uiFPu[data-disabled] > *, .button--uiFPu[data-loading] > *{
  cursor:not-allowed;
}

.iconWithCounter--MLTsu{
  position:relative;
}

.counterForLabel--BQw2h{
  margin-left:var(--dimension-theme-general-4px, 4px);
}

.counterForIcon--pwNNW{
  position:absolute;
  top:-8px;
  left:calc(100% - 8px);
}`,""]),u.locals={button:"button--uiFPu",iconWithCounter:"iconWithCounter--MLTsu",counterForLabel:"counterForLabel--BQw2h",counterForIcon:"counterForIcon--pwNNW"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Card/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.functionBadgeWrapper--qnb0U{
  position:absolute;
  z-index:1;
  top:0;
  right:0;
  display:none;
}
.functionBadgeWrapper--qnb0U[data-visible]{
  display:block;
}

.composition--hGYYG{
  border-radius:var(--radius-card-container, 8px);
  box-sizing:border-box;
  height:100%;
}

.contentWrapper--mVkac{
  position:relative;
  height:100%;
}

.card--axC4y{
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
.card--axC4y:hover .functionBadgeWrapper--qnb0U{
  display:block;
}
.card--axC4y[data-outline]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-neutral-decor-default, #dde0ea);
  outline-width:var(--border-width-card-container, 1px);
}
.card--axC4y:hover, .card--axC4y:focus-visible{
  --snack-ui-card-background-color:var(--sys-neutral-background2-level, #ffffff);
}
.card--axC4y:focus-visible{
  outline-width:var(--border-state-focus-l-border-width, 4px);
  outline-style:var(--border-state-focus-l-border-style, solid);
  outline-color:var(--border-state-focus-l-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.card--axC4y:focus-visible .functionBadgeWrapper--qnb0U{
  display:block;
}
.card--axC4y:focus-visible .check--UCn2X{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--axC4y:focus-within .functionBadgeWrapper--qnb0U{
  display:block;
}
.card--axC4y[data-checked]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
  outline-width:var(--border-width-card-container, 1px);
}
.card--axC4y[data-checked]:hover{
  outline-color:var(--sys-primary-decor-hovered, #b3deca);
  box-shadow:none;
}
.card--axC4y[data-checked] .contentWrapper--mVkac::before{
  content:"";
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--axC4y[data-checked] .check--UCn2X{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--axC4y[data-checked]:focus-visible{
  outline-width:var(--border-state-focus-l-border-width, 4px);
  outline-style:var(--border-state-focus-l-border-style, solid);
  outline-color:var(--border-state-focus-l-border-color, );
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.card--axC4y[data-checked]:focus-visible .check--UCn2X{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.card--axC4y[data-disabled]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  cursor:not-allowed;
  opacity:var(--opacity-a048, 0.48);
  background-color:var(--sys-neutral-background, #eeeff3);
  outline-color:var(--sys-neutral-decor-default, #dde0ea);
  outline-width:var(--border-width-card-container, 1px);
}
.card--axC4y[data-disabled][data-checked] .check--UCn2X{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}
.card--axC4y[data-disabled] *{
  cursor:not-allowed;
}
.card--axC4y[data-pointer] *{
  cursor:pointer;
}
.card--axC4y[data-pointer][data-outline]:hover{
  outline-color:var(--sys-neutral-decor-hovered, #cfd2dc);
  box-shadow:none;
}
.card--axC4y[data-pointer][data-outline]:focus-visible{
  outline-width:var(--border-state-focus-l-border-width, 4px);
  outline-style:var(--border-state-focus-l-border-style, solid);
  outline-color:var(--border-state-focus-l-border-color, );
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.card--axC4y[data-pointer]:hover{
  box-shadow:var(--box-shadow-elevation-level2, 0px 0px 4px 0px rgba(0, 0, 0, 0.0392156863), 0px 4px 8px 0px rgba(0, 0, 0, 0.0392156863));
}
.card--axC4y[data-pointer][data-disabled] *{
  cursor:not-allowed;
}

.anchor--R5xgE{
  position:absolute;
  z-index:1;
  top:0;
  right:0;
  bottom:0;
  left:0;
  border-radius:var(--radius-card-container, 8px);
}

.body--DXzO_{
  display:block;
  flex-grow:1;
  flex-shrink:1;
  width:100%;
  color:var(--sys-neutral-text-support, #6d707f);
  text-align:initial;
}

.content--UGbI2{
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:flex-start;
  box-sizing:border-box;
  max-width:100%;
  height:100%;
}
.content--UGbI2[data-size=s]{
  padding:var(--space-card-padding-container-s, 8px);
  gap:var(--space-card-gap-s, 4px);
}
.content--UGbI2[data-size=m]{
  padding:var(--space-card-padding-container-m, 16px);
  gap:var(--space-card-gap-m, 8px);
}
.content--UGbI2[data-size=l]{
  padding:var(--space-card-padding-container-l, 24px);
  gap:var(--space-card-gap-l, 16px);
}

.footer--BBLE1{
  position:relative;
  box-sizing:border-box;
  width:100%;
}`,""]),u.locals={functionBadgeWrapper:"functionBadgeWrapper--qnb0U",composition:"composition--hGYYG",contentWrapper:"contentWrapper--mVkac",card:"card--axC4y",check:"check--UCn2X",anchor:"anchor--R5xgE",body:"body--DXzO_",content:"content--UGbI2",footer:"footer--BBLE1"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Action/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.action--kFRgu{
  gap:var(--space-card-gap-l, 16px);
  display:flex;
  align-items:center;
  justify-content:flex-start;
  box-sizing:border-box;
}`,""]),u.locals={action:"action--kFRgu"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/CallToAction/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.callToAction--DNRcj{
  gap:var(--space-card-gap-s, 4px);
  display:flex;
  align-items:center;
  justify-content:flex-start;
  box-sizing:border-box;
}

.icon--PcseZ{
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-primary-accent-default, #389f74);
}
.icon--PcseZ svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.label--EXikX{
  color:var(--sys-primary-accent-default, #389f74);
}`,""]),u.locals={callToAction:"callToAction--DNRcj",icon:"icon--PcseZ",label:"label--EXikX"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Dimension/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.wrapper--s9hAp{
  gap:var(--space-card-gap-s, 4px);
  display:flex;
  flex:1 0 auto;
  justify-content:flex-end;
  box-sizing:border-box;
}

.valueContainer--vsoxb{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  justify-content:flex-start;
  box-sizing:border-box;
}

.currentValue--qeT6O{
  color:var(--sys-neutral-text-main, #41424e);
}

.oldValue--yLtfj{
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.dimension--dXFqu{
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),u.locals={wrapper:"wrapper--s9hAp",valueContainer:"valueContainer--vsoxb",currentValue:"currentValue--qeT6O",oldValue:"oldValue--yLtfj",dimension:"dimension--dXFqu"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Promo/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.promo--SpnWV{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  box-sizing:border-box;
}`,""]),u.locals={promo:"promo--SpnWV"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/FunctionBadge/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.button--a1_fj{
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
.button--a1_fj:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.button--a1_fj:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-support, #6d707f);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--a1_fj:active{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.button--a1_fj svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.triggerClassName--LW7Hz{
  --offset:var(--space-drop-list-drop-offset, 4px);
}

.wrapper--iZpw4{
  position:relative;
}

li.item--QXM3k{
  width:-moz-max-content;
  width:max-content;
}`,""]),u.locals={button:"button--a1_fj",triggerClassName:"triggerClassName--LW7Hz",wrapper:"wrapper--iZpw4",item:"item--QXM3k"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Header/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.titleLayout--PC3Oa{
  display:flex;
  align-items:center;
  box-sizing:border-box;
  width:100%;
}
.titleLayout--PC3Oa[data-size=s]{
  gap:var(--space-card-gap-s, 4px);
}
.titleLayout--PC3Oa[data-size=m]{
  gap:var(--space-card-gap-m, 8px);
}
.titleLayout--PC3Oa[data-size=l]{
  gap:var(--space-card-gap-l, 16px);
}

.contentLayout--QsQAa{
  overflow:hidden;
  display:block;
  max-width:100%;
}

.title--ImtwC{
  display:block;
  max-width:100%;
  color:var(--sys-neutral-text-main, #41424e);
}

.metadata--wekTT{
  max-width:100%;
  color:var(--sys-neutral-text-light, #8b8e9b);
}

.description--XhdPZ{
  max-width:100%;
  color:var(--sys-neutral-text-support, #6d707f);
}`,""]),u.locals={titleLayout:"titleLayout--PC3Oa",contentLayout:"contentLayout--QsQAa",title:"title--ImtwC",metadata:"metadata--wekTT",description:"description--XhdPZ"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Image/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.image--HGa1V{
  display:block;
  box-sizing:border-box;
  width:100%;
  height:auto;
  -o-object-fit:cover;
     object-fit:cover;
}
.image--HGa1V[data-mode=little]{
  height:var(--size-card-image-litte, 144px);
}
.image--HGa1V[data-mode=middle]{
  height:var(--size-card-image-middle, 240px);
}
.image--HGa1V[data-mode=background]{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  -o-object-fit:cover;
     object-fit:cover;
}
.image--HGa1V[data-mode=background][data-fading]{
  -webkit-mask-image:var(--gradient-linear-mask-90deg, linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.0784313725) 33%, #ffffff 100%));
  mask-image:var(--gradient-linear-mask-90deg, linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.0784313725) 33%, #ffffff 100%));
}`,""]),u.locals={image:"image--HGa1V"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Check/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.checkWrapper--mS5ex{
  padding-top:var(--space-card-padding-check-badge, 4px);
  padding-left:var(--space-card-padding-check-badge, 4px);
  position:absolute;
  top:0;
  left:0;
}

.checkContainer--evWp3{
  width:var(--size-card-check, 16px);
  height:var(--size-card-check, 16px);
  border-radius:var(--radius-card-check, 4px);
  display:flex;
  align-items:center;
  justify-content:center;
}`,""]),u.locals={checkWrapper:"checkWrapper--mS5ex",checkContainer:"checkContainer--evWp3"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Emblem/styled.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.img--j97Uo{
  overflow:hidden;
  flex-shrink:0;
  box-sizing:border-box;
  -o-object-fit:cover;
     object-fit:cover;
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-style:solid;
}
.img--j97Uo[data-size=s]{
  width:var(--size-card-picture-s, 32px);
  height:var(--size-card-picture-s, 32px);
  border-width:var(--border-width-card-picture, 1px);
  border-radius:var(--radius-card-picture, 4px);
}
.img--j97Uo[data-size=m]{
  width:var(--size-card-picture-m, 40px);
  height:var(--size-card-picture-m, 40px);
  border-width:var(--border-width-card-picture, 1px);
  border-radius:var(--radius-card-picture, 4px);
}
.img--j97Uo[data-size=l]{
  width:var(--size-card-picture-l, 80px);
  height:var(--size-card-picture-l, 80px);
  border-width:var(--border-width-card-picture, 1px);
  border-radius:var(--radius-card-picture, 4px);
}`,""]),u.locals={img:"img--j97Uo"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/FunctionBadgeWrapper/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.functionBadge--wwnts{
  padding-top:var(--space-card-padding-function-badge, 8px);
  padding-right:var(--space-card-padding-function-badge, 8px);
  position:absolute;
  top:0;
  right:0;
  box-sizing:border-box;
}

.functionRow--c8hoO{
  position:relative;
}
.functionRow--c8hoO::before{
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
}`,""]),u.locals={functionBadge:"functionBadge--wwnts",functionRow:"functionRow--c8hoO"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/PromoBadge/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.promoBadge--nWzHF{
  padding-top:var(--space-card-padding-promo-badge, 4px);
  padding-right:var(--space-card-padding-promo-badge, 4px);
  position:absolute;
  top:0;
  right:0;
  box-sizing:border-box;
}

div.promoTag--yOgne{
  display:flex;
}`,""]),u.locals={promoBadge:"promoBadge--nWzHF",promoTag:"promoTag--yOgne"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.12_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.counter--EfYk8{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  border:0 solid transparent;
}
.counter--EfYk8[data-color=accent][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--EfYk8[data-color=accent][data-appearance=neutral]{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-accent-default, #787b8a);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--EfYk8[data-color=accent][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
  background-color:var(--sys-red-accent-default, #cb3f3e);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--EfYk8[data-color=decor][data-appearance=primary]{
  color:var(--sys-primary-text-main, #1b5840);
  background-color:var(--sys-primary-decor-default, #caeadb);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--EfYk8[data-color=decor][data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--EfYk8[data-color=decor][data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--EfYk8[data-size=s]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
  border-radius:var(--radius-counter-s, 8px);
  height:var(--size-counter-s-height, 16px);
  min-width:var(--size-counter-s-minimal-width, 16px);
  padding-right:var(--space-counter-s, 2.5px);
  padding-left:var(--space-counter-s, 2.5px);
  border-width:var(--border-width-counter-single, 1.5px);
}
.counter--EfYk8[data-size=s] .plus--ZIkBX{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--EfYk8[data-size=s] .key--yK4UM{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.counter--EfYk8[data-size=m]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
  border-radius:var(--radius-counter-m, 16px);
  height:var(--size-counter-m-height, 24px);
  min-width:var(--size-counter-m-minimal-width, 24px);
  padding-right:var(--space-counter-m, 4.5px);
  padding-left:var(--space-counter-m, 4.5px);
  border-width:var(--border-width-counter-single, 1.5px);
}
.counter--EfYk8[data-size=m] .plus--ZIkBX{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--EfYk8[data-size=m] .key--yK4UM{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}`,""]),u.locals={counter:"counter--EfYk8",plus:"plus--ZIkBX",key:"key--yK4UM"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.12_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.horizontal--AoUft{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  width:100%;
}
.horizontal--AoUft[data-weight=regular]{
  height:1px;
}
.horizontal--AoUft[data-weight=light]{
  height:0.5px;
}

.vertical--xWA2I{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  height:100%;
}
.vertical--xWA2I[data-weight=regular]{
  width:1px;
}
.vertical--xWA2I[data-weight=light]{
  width:0.5px;
}`,""]),u.locals={horizontal:"horizontal--AoUft",vertical:"vertical--xWA2I"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.dropdownContainer--CXixW{
  padding-top:var(--space-drop-list-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-container-vertical-padding, 4px);
  border-radius:var(--radius-drop-list-container, 4px);
  overflow:hidden;
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  box-shadow:var(--box-shadow-elevation-level3, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 8px 16px 0px rgba(0, 0, 0, 0.0784313725));
}

.defaultTriggerClassName--XJ5HP{
  --offset:var(--space-drop-list-drop-offset, 4px);
}`,""]),u.locals={dropdownContainer:"dropdownContainer--CXixW",defaultTriggerClassName:"defaultTriggerClassName--XJ5HP"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.12_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.decor--lf86u{
  overflow:hidden;
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
}
.decor--lf86u[data-decor][data-appearance=primary]{
  color:var(--sys-primary-accent-default, #389f74);
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.decor--lf86u[data-decor][data-appearance=neutral]{
  color:var(--sys-neutral-accent-default, #787b8a);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.decor--lf86u[data-decor][data-appearance=red]{
  color:var(--sys-red-accent-default, #cb3f3e);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.decor--lf86u[data-decor][data-appearance=orange]{
  color:var(--sys-orange-accent-default, #fb8e42);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.decor--lf86u[data-decor][data-appearance=yellow]{
  color:var(--sys-yellow-accent-default, #e2b134);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.decor--lf86u[data-decor][data-appearance=green]{
  color:var(--sys-green-accent-default, #57b762);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.decor--lf86u[data-decor][data-appearance=blue]{
  color:var(--sys-blue-accent-default, #5388d1);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.decor--lf86u[data-decor][data-appearance=violet]{
  color:var(--sys-violet-accent-default, #aa6cc1);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.decor--lf86u[data-decor][data-appearance=pink]{
  color:var(--sys-pink-accent-default, #d1668e);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.decor--lf86u[data-size=s][data-shape=round]{
  width:var(--size-icon-predefined-container-s, 32px);
  height:var(--size-icon-predefined-container-s, 32px);
  border-radius:var(--radius-icon-predefined-decor-round-s, 16px);
}
.decor--lf86u[data-size=s][data-shape=square]{
  width:var(--size-icon-predefined-container-s, 32px);
  height:var(--size-icon-predefined-container-s, 32px);
  border-radius:var(--radius-icon-predefined-decor-square-s, 4px);
}
.decor--lf86u[data-size=m][data-shape=round]{
  width:var(--size-icon-predefined-container-m, 40px);
  height:var(--size-icon-predefined-container-m, 40px);
  border-radius:var(--radius-icon-predefined-decor-round-m, 24px);
}
.decor--lf86u[data-size=m][data-shape=square]{
  width:var(--size-icon-predefined-container-m, 40px);
  height:var(--size-icon-predefined-container-m, 40px);
  border-radius:var(--radius-icon-predefined-decor-square-m, 8px);
}
.decor--lf86u[data-size=l][data-shape=round]{
  width:var(--size-icon-predefined-container-l, 80px);
  height:var(--size-icon-predefined-container-l, 80px);
  border-radius:var(--radius-icon-predefined-decor-round-l, 40px);
}
.decor--lf86u[data-size=l][data-shape=square]{
  width:var(--size-icon-predefined-container-l, 80px);
  height:var(--size-icon-predefined-container-l, 80px);
  border-radius:var(--radius-icon-predefined-decor-square-l, 12px);
}

.icon--lnT2x,
.icon--lnT2x svg{
  fill:currentColor;
}
.icon--lnT2x[data-appearance=primary]{
  color:var(--sys-primary-accent-default, #389f74);
}
.icon--lnT2x[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--lnT2x[data-appearance=neutral]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.icon--lnT2x[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--lnT2x[data-appearance=red]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.icon--lnT2x[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--lnT2x[data-appearance=orange]{
  color:var(--sys-orange-accent-default, #fb8e42);
}
.icon--lnT2x[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--lnT2x[data-appearance=yellow]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.icon--lnT2x[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--lnT2x[data-appearance=green]{
  color:var(--sys-green-accent-default, #57b762);
}
.icon--lnT2x[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--lnT2x[data-appearance=blue]{
  color:var(--sys-blue-accent-default, #5388d1);
}
.icon--lnT2x[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--lnT2x[data-appearance=violet]{
  color:var(--sys-violet-accent-default, #aa6cc1);
}
.icon--lnT2x[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--lnT2x[data-appearance=pink]{
  color:var(--sys-pink-accent-default, #d1668e);
}
.icon--lnT2x[data-size=s]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.icon--lnT2x[data-size=l]{
  width:var(--size-icon-container-sx2, 48px) !important;
  height:var(--size-icon-container-sx2, 48px) !important;
}
.icon--lnT2x[data-appearance=yellow]{
  color:var(--sys-yellow-text-light, #d3a736);
}`,""]),u.locals={decor:"decor--lf86u",icon:"icon--lnT2x"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.41_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.infoBlockFooter--SRQgU{
  gap:var(--space-info-block-footer-gap, 8px);
  display:flex;
  align-items:center;
}`,""]),u.locals={infoBlockFooter:"infoBlockFooter--SRQgU"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.41_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.contentLayout--DdKuq{
  display:flex;
  flex-direction:column;
}

.textWrap--uszqg{
  display:flex;
  flex-direction:column;
}

.footer--vIMUc{
  position:relative;
  box-sizing:border-box;
  width:100%;
}

.title--PBEUK{
  color:var(--sys-neutral-text-main, #41424e);
}

.description--pjZAz{
  color:var(--sys-neutral-text-support, #6d707f);
}

.infoBlock--uh8xL{
  display:flex;
  box-sizing:border-box;
}
.infoBlock--uh8xL[data-align=vertical]{
  flex-direction:column;
  align-items:center;
}
.infoBlock--uh8xL[data-align=vertical] .contentLayout--DdKuq{
  align-items:center;
}
.infoBlock--uh8xL[data-align=vertical] .textWrap--uszqg{
  align-items:center;
}
.infoBlock--uh8xL[data-align=vertical] .footer--vIMUc{
  width:auto;
  text-align:center;
}
.infoBlock--uh8xL[data-align=vertical] .description--pjZAz,
.infoBlock--uh8xL[data-align=vertical] .title--PBEUK{
  text-align:center;
}
.infoBlock--uh8xL[data-align=horizontal]{
  flex-direction:row;
  align-items:flex-start;
}
.infoBlock--uh8xL[data-size=s]{
  gap:var(--space-info-block-s-container-gap, 12px);
}
.infoBlock--uh8xL[data-size=s] .contentLayout--DdKuq{
  gap:var(--space-info-block-s-container-content-layout-gap, 16px);
}
.infoBlock--uh8xL[data-size=s] .textWrap--uszqg{
  gap:var(--space-info-block-s-container-content-layout-text-wrap-gap, 4px);
}
.infoBlock--uh8xL[data-size=m]{
  gap:var(--space-info-block-m-container-gap, 16px);
}
.infoBlock--uh8xL[data-size=m] .contentLayout--DdKuq{
  gap:var(--space-info-block-m-container-content-layout-gap, 24px);
}
.infoBlock--uh8xL[data-size=m] .textWrap--uszqg{
  gap:var(--space-info-block-m-container-content-layout-text-wrap-gap, 8px);
}
.infoBlock--uh8xL[data-size=l]{
  gap:var(--space-info-block-l-container-gap, 24px);
}
.infoBlock--uh8xL[data-size=l] .contentLayout--DdKuq{
  gap:var(--space-info-block-l-container-content-layout-gap, 24px);
}
.infoBlock--uh8xL[data-size=l] .textWrap--uszqg{
  gap:var(--space-info-block-l-container-content-layout-text-wrap-gap, 8px);
}`,""]),u.locals={contentLayout:"contentLayout--DdKuq",textWrap:"textWrap--uszqg",footer:"footer--vIMUc",title:"title--PBEUK",description:"description--pjZAz",infoBlock:"infoBlock--uh8xL"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.inputPrivate--GyCf_{
  box-sizing:border-box;
  width:100%;
  max-width:100%;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-main, #41424e);
  text-overflow:ellipsis;
  background-color:transparent;
  border:none;
  border-radius:0;
  outline:0;
}
.inputPrivate--GyCf_::-moz-placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--GyCf_::placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--GyCf_:-moz-read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.inputPrivate--GyCf_:read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.inputPrivate--GyCf_:-moz-placeholder-shown{
  text-overflow:ellipsis;
}
.inputPrivate--GyCf_:placeholder-shown{
  text-overflow:ellipsis;
}
.inputPrivate--GyCf_[disabled]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--GyCf_[type=number]{
  -moz-appearance:textfield;
}
.inputPrivate--GyCf_[type=number]::-webkit-outer-spin-button, .inputPrivate--GyCf_[type=number]::-webkit-inner-spin-button{
  margin:0;
  -webkit-appearance:none;
}`,""]),u.locals={inputPrivate:"inputPrivate--GyCf_"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.buttonClearValue--az5gm{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonClearValue--az5gm[data-size=s]{
  width:var(--size-input-private-button-clear-value-s, 16px);
  height:var(--size-input-private-button-clear-value-s, 16px);
  border-radius:var(--radius-input-private-button-clear-value-s, 8px);
}
.buttonClearValue--az5gm[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.buttonClearValue--az5gm[data-size=m]{
  width:var(--size-input-private-button-clear-value-m, 24px);
  height:var(--size-input-private-button-clear-value-m, 24px);
  border-radius:var(--radius-input-private-button-clear-value-m, 12px);
}
.buttonClearValue--az5gm[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonClearValue--az5gm:hover{
  cursor:pointer;
  color:var(--sys-red-text-support, #ae514c);
}
.buttonClearValue--az5gm:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-support, #ae514c);
  outline-color:var(--sys-red-accent-default, #cb3f3e);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonClearValue--az5gm:active{
  color:var(--sys-red-text-main, #7a2d2d);
}
.buttonClearValue--az5gm[data-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),u.locals={buttonClearValue:"buttonClearValue--az5gm"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.checkbox--obkgg{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--dimension-3m, 24px);
  height:var(--dimension-3m, 24px);
}

.beforeContent--xcUOr{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.beforeContent--xcUOr svg{
  max-width:100%;
  max-height:100%;
}

.expandableIcon--cDMVm{
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  fill:currentColor;
}

.markerContainer--aALBO{
  padding-top:var(--space-drop-list-item-marker-container-vertical-padding, 2px);
  padding-bottom:var(--space-drop-list-item-marker-container-vertical-padding, 2px);
  pointer-events:none;
  position:absolute;
  top:0;
  left:0;
  box-sizing:border-box;
  height:100%;
}
.markerContainer--aALBO:before{
  width:var(--size-drop-list-item-marker, 4px);
  border-bottom-right-radius:var(--radius-drop-list-marker, 4px);
  border-top-right-radius:var(--radius-drop-list-marker, 4px);
  content:"";
  display:block;
  height:100%;
}

.droplistItem--PrGNy{
  width:100%;
}
.droplistItem--PrGNy[data-size=s][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px));
}
.droplistItem--PrGNy[data-size=s][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-s, 24px));
}
.droplistItem--PrGNy[data-size=s] .headline--HWzcc{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--PrGNy[data-size=m][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px));
}
.droplistItem--PrGNy[data-size=m][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-m, 24px));
}
.droplistItem--PrGNy[data-size=m] .headline--HWzcc{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--PrGNy[data-size=l][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px));
}
.droplistItem--PrGNy[data-size=l][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-l, 24px));
}
.droplistItem--PrGNy[data-size=l] .headline--HWzcc{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--PrGNy[data-non-pointer]{
  cursor:inherit;
}

.innerWrapper--ixlN6[data-disabled] .expandableIcon--cDMVm{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.innerWrapper--ixlN6[data-disabled] .beforeContent--xcUOr{
  opacity:var(--opacity-a064, 0.64);
}
.innerWrapper--ixlN6[data-disabled] .droplistItem--PrGNy{
  cursor:not-allowed;
}
.innerWrapper--ixlN6[data-has-checked][data-variant=single]::before, .innerWrapper--ixlN6[data-checked][data-variant=single]::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--ixlN6[data-has-checked][data-variant=single]:hover::before, .innerWrapper--ixlN6[data-checked][data-variant=single]:hover::before{
  opacity:var(--opacity-a016, 0.16);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--ixlN6[data-has-checked] .markerContainer--aALBO:before, .innerWrapper--ixlN6[data-checked] .markerContainer--aALBO:before{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--ixlN6[data-has-checked] .droplistItem--PrGNy:focus-visible[data-variant=single], .innerWrapper--ixlN6[data-checked] .droplistItem--PrGNy:focus-visible[data-variant=single]{
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--ixlN6[data-has-checked][data-disabled] .markerContainer--aALBO:before, .innerWrapper--ixlN6[data-checked][data-disabled] .markerContainer--aALBO:before{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}

.content--ni08Q{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}`,""]),u.locals={checkbox:"checkbox--obkgg",beforeContent:"beforeContent--xcUOr",expandableIcon:"expandableIcon--cDMVm",markerContainer:"markerContainer--aALBO",droplistItem:"droplistItem--PrGNy",headline:"headline--HWzcc",innerWrapper:"innerWrapper--ixlN6",content:"content--ni08Q"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.pinTopItem--ndcxw[data-size=s]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--ndcxw[data-size=m]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--ndcxw[data-size=l]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--ndcxw{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinTopItem--ndcxw li,
.pinTopItem--ndcxw ul{
  list-style-type:none;
}

.pinBottomItem--Ir6s8[data-size=s]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--Ir6s8[data-size=m]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--Ir6s8[data-size=l]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--Ir6s8{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinBottomItem--Ir6s8 li,
.pinBottomItem--Ir6s8 ul{
  list-style-type:none;
}`,""]),u.locals={pinTopItem:"pinTopItem--ndcxw",pinBottomItem:"pinBottomItem--Ir6s8"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.searchItem--HmUtB{
  width:100%;
}
.searchItem--HmUtB:focus-within, .searchItem--HmUtB:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  max-width:100%;
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}`,""]),u.locals={searchItem:"searchItem--HmUtB"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.itemWrapper--Meezm{
  position:relative;
  min-width:100%;
  margin:0;
  padding:0;
}
.itemWrapper--Meezm::before, .itemWrapper--Meezm::after{
  pointer-events:none;
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:transparent;
}
.itemWrapper--Meezm[data-disabled], .itemWrapper--Meezm:disabled{
  cursor:not-allowed;
  background-color:transparent;
  outline:none;
}
.itemWrapper--Meezm[data-disabled]::before, .itemWrapper--Meezm:disabled::before{
  display:none;
}
.itemWrapper--Meezm[data-disabled]::after, .itemWrapper--Meezm:disabled::after{
  cursor:not-allowed;
  background-color:transparent;
}
.itemWrapper--Meezm:not([data-inactive], [data-disabled])[data-open]::before, .itemWrapper--Meezm:not([data-inactive], [data-disabled])[data-focused]::before, .itemWrapper--Meezm:not([data-inactive], [data-disabled]):focus-visible::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
@media (hover: hover){
  .itemWrapper--Meezm:not([data-inactive], [data-disabled]):hover::before{
    opacity:var(--opacity-a008, 0.08);
    background-color:var(--sys-neutral-accent-default, #787b8a);
  }
}

.listItem--pdiV8{
  cursor:pointer;
  position:relative;
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  min-width:100%;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-main, #41424e);
  text-align:start;
  -webkit-appearance:unset;
     -moz-appearance:unset;
          appearance:unset;
  background-color:transparent;
  border:none;
  outline:none;
}
.listItem--pdiV8[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
}
.listItem--pdiV8[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-bottom:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
}
.listItem--pdiV8[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-bottom:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
}
.listItem--pdiV8:not([data-inactive], [data-disabled])[data-focused], .listItem--pdiV8:not([data-inactive], [data-disabled]):focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
}`,""]),u.locals={itemWrapper:"itemWrapper--Meezm",listItem:"listItem--pdiV8"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.loader--sTL7G{
  display:flex;
  align-items:center;
  justify-content:center;
}
.loader--sTL7G[data-size=s]{
  height:var(--dimension-3m, 24px);
}
.loader--sTL7G[data-size=s][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-3m, 24px));
  height:calc(3 * var(--dimension-3m, 24px));
}
.loader--sTL7G[data-size=m]{
  height:var(--dimension-4m, 32px);
}
.loader--sTL7G[data-size=m][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-4m, 32px));
  height:calc(3 * var(--dimension-4m, 32px));
}
.loader--sTL7G[data-size=l]{
  height:var(--dimension-5m, 40px);
}
.loader--sTL7G[data-size=l][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-5m, 40px));
  height:calc(3 * var(--dimension-5m, 40px));
}
.loader--sTL7G:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}

.scrollStub--ggSWl{
  height:calc(var(--dimension-025m, 2px) / 2);
  margin-top:calc(var(--dimension-025m, 2px) / -2);
  background:transparent;
}

.footer--Gdhha{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  padding:var(--dimension-050m, 4px);
}

.content--gKbtc{
  overflow:hidden;
  flex-grow:1;
}

.virtualizedContainer--U0iyt{
  position:relative;
  width:100%;
}

.virtualizedPositionBox--I_uzU{
  position:absolute;
  top:0;
  left:0;
  width:100%;
}`,""]),u.locals={loader:"loader--sTL7G",scrollStub:"scrollStub--ggSWl",footer:"footer--Gdhha",content:"content--gKbtc",virtualizedContainer:"virtualizedContainer--U0iyt",virtualizedPositionBox:"virtualizedPositionBox--I_uzU"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.listContainer--lUSiL{
  display:flex;
  flex-direction:column;
  height:100%;
  margin:0;
  padding:0;
}
.listContainer--lUSiL:focus-visible{
  border:none;
  outline:none;
}
.listContainer--lUSiL:focus-visible[data-active]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.listContainer--lUSiL:focus-visible[data-active] *{
  cursor:inherit;
}
.listContainer--lUSiL li,
.listContainer--lUSiL ul{
  list-style-type:none;
}

.wrapper--a5GRm{
  position:relative;
  overflow:hidden;
  display:block;
  box-sizing:border-box;
  height:100%;
}
.wrapper--a5GRm:has(.listContainer--lUSiL:focus-visible){
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.wrapper--a5GRm li,
.wrapper--a5GRm ul{
  list-style-type:none;
}

.scrollContainerS--uMQ4a{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 32);
}

.scrollContainerM--MN1xb{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 40);
}

.scrollContainerL--d68tE{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 48);
}`,""]),u.locals={listContainer:"listContainer--lUSiL",wrapper:"wrapper--a5GRm",scrollContainerS:"scrollContainerS--uMQ4a",scrollContainerM:"scrollContainerM--MN1xb",scrollContainerL:"scrollContainerL--d68tE"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.accordion--J4l5W{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  transition:gap 300ms;
}
.accordion--J4l5W::-webkit-scrollbar{
  width:0;
}
.accordion--J4l5W[aria-expanded=false]{
  gap:0;
}

.contentWrapper--uml2a{
  box-sizing:border-box;
  width:100%;
}
.contentWrapper--uml2a[aria-hidden=false] > div[data-content]{
  display:block;
}

.content--ylX6m{
  position:relative;
  display:none;
  box-sizing:border-box;
  width:100%;
}`,""]),u.locals={accordion:"accordion--J4l5W",contentWrapper:"contentWrapper--uml2a",content:"content--ylX6m"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.headline--xBtsr{
  display:flex;
}

.label--NNhBF{
  overflow:hidden;
  flex:1;
  color:var(--sys-neutral-text-main, #41424e);
}

.caption--X2baD{
  overflow:hidden;
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  text-overflow:ellipsis;
  white-space:nowrap;
}

.description--UsJlD{
  color:var(--sys-neutral-text-support, #6d707f);
}

.content--L38pE{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}
.content--L38pE[data-size=s] .headline--xBtsr{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--L38pE[data-size=s] .label--NNhBF{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  display:flex;
  align-items:center;
}
.content--L38pE[data-size=s] .caption--X2baD{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--L38pE[data-size=s] .description--UsJlD{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--L38pE[data-size=m] .headline--xBtsr{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--L38pE[data-size=m] .label--NNhBF{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  display:flex;
  align-items:center;
}
.content--L38pE[data-size=m] .caption--X2baD{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--L38pE[data-size=m] .description--UsJlD{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--L38pE[data-size=l] .headline--xBtsr{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--L38pE[data-size=l] .label--NNhBF{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
  display:flex;
  align-items:center;
}
.content--L38pE[data-size=l] .caption--X2baD{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--L38pE[data-size=l] .description--UsJlD{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--L38pE[data-disabled] .label--NNhBF,
.content--L38pE[data-disabled] .description--UsJlD,
.content--L38pE[data-disabled] .caption--X2baD{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),u.locals={headline:"headline--xBtsr",label:"label--NNhBF",caption:"caption--X2baD",description:"description--UsJlD",content:"content--L38pE"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.listEmptyStateWrapper--HMtZI{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  padding:var(--dimension-1m, 8px);
}`,""]),u.locals={listEmptyStateWrapper:"listEmptyStateWrapper--HMtZI"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.separatorWithLabel--UEwwb{
  display:flex;
  gap:var(--dimension-1m, 8px);
  align-items:flex-end;
  box-sizing:border-box;
  width:100%;
  min-width:100%;
}
.separatorWithLabel--UEwwb[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-s, 32px);
}
.separatorWithLabel--UEwwb[data-size=s] .label--8y1Fm[data-mode=primary]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--UEwwb[data-size=s] .label--8y1Fm[data-mode=secondary]{
  font-family:var(--light-label-m-font-family, SB Sans Interface);
  font-weight:var(--light-label-m-font-weight, Regular);
  line-height:var(--light-label-m-line-height, 16px);
  font-size:var(--light-label-m-font-size, 12px);
  letter-spacing:var(--light-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--UEwwb[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-m, 40px);
}
.separatorWithLabel--UEwwb[data-size=m] .label--8y1Fm[data-mode=primary]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--UEwwb[data-size=m] .label--8y1Fm[data-mode=secondary]{
  font-family:var(--light-label-l-font-family, SB Sans Interface);
  font-weight:var(--light-label-l-font-weight, Regular);
  line-height:var(--light-label-l-line-height, 20px);
  font-size:var(--light-label-l-font-size, 14px);
  letter-spacing:var(--light-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--UEwwb[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-l, 48px);
}
.separatorWithLabel--UEwwb[data-size=l] .label--8y1Fm[data-mode=primary]{
  font-family:var(--sans-title-m-font-family, SB Sans Interface);
  font-weight:var(--sans-title-m-font-weight, Semibold);
  line-height:var(--sans-title-m-line-height, 24px);
  font-size:var(--sans-title-m-font-size, 16px);
  letter-spacing:var(--sans-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);
}
.separatorWithLabel--UEwwb[data-size=l] .label--8y1Fm[data-mode=secondary]{
  font-family:var(--light-title-m-font-family, SB Sans Interface);
  font-weight:var(--light-title-m-font-weight, Regular);
  line-height:var(--light-title-m-line-height, 24px);
  font-size:var(--light-title-m-font-size, 16px);
  letter-spacing:var(--light-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-m-paragraph-spacing, 8.8px);
}

.separatorWithoutLabel--ZnAjf{
  display:flex;
  align-items:flex-end;
}
.separatorWithoutLabel--ZnAjf[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
}
.separatorWithoutLabel--ZnAjf[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
}
.separatorWithoutLabel--ZnAjf[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
}
.separatorWithoutLabel--ZnAjf{
  box-sizing:border-box;
}

.label--8y1Fm{
  overflow:hidden;
  flex-shrink:1;
}
.label--8y1Fm[data-mode=primary]{
  color:var(--sys-neutral-text-main, #41424e);
}
.label--8y1Fm[data-mode=secondary]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}

hr.divider--LPRRE{
  flex:1;
  width:auto;
  min-width:0;
}

.selectButton--ZOoYt{
  display:flex;
  justify-content:flex-end;
}
.selectButton--ZOoYt[data-weight=primary]{
  --divider-height:1px;
}
.selectButton--ZOoYt[data-weight=secondary]{
  --divider-height:0.5px;
}
.selectButton--ZOoYt[data-size=s]{
  transform:translateY(calc((var(--size-button-xs, 24px) - var(--sans-label-s-line-height, 14px)) / 2 - var(--divider-height, 0)));
}
.selectButton--ZOoYt[data-size=m]{
  transform:translateY(calc((var(--size-button-s, 32px) - var(--sans-label-m-line-height, 16px)) / 2 - var(--divider-height, 0)));
}
.selectButton--ZOoYt[data-size=l]{
  transform:translateY(calc((var(--size-button-m, 40px) - var(--sans-label-l-line-height, 20px)) / 2 - var(--divider-height, 0)));
}`,""]),u.locals={separatorWithLabel:"separatorWithLabel--UEwwb",label:"label--8y1Fm",separatorWithoutLabel:"separatorWithoutLabel--ZnAjf",divider:"divider--LPRRE",selectButton:"selectButton--ZOoYt"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.spinner--MR86H{
  pointer-events:none;
  stroke:currentColor;
  animation:spin--EqKio 1s ease-in-out infinite;
}
.spinner--MR86H > g > path{
  fill:currentColor;
}
.spinner--MR86H > mask{
  mask-type:alpha;
}
.spinner--MR86H[data-size=xxs]{
  width:var(--size-loader-loader-xxs, 8px);
  height:var(--size-loader-loader-xxs, 8px);
}
.spinner--MR86H[data-size=xs]{
  width:var(--size-loader-loader-xs, 16px);
  height:var(--size-loader-loader-xs, 16px);
}
.spinner--MR86H[data-size=s]{
  width:var(--size-loader-loader-s, 24px);
  height:var(--size-loader-loader-s, 24px);
}
.spinner--MR86H[data-size=m]{
  width:var(--size-loader-loader-m, 48px);
  height:var(--size-loader-loader-m, 48px);
}
.spinner--MR86H[data-size=l]{
  width:var(--size-loader-loader-l, 72px);
  height:var(--size-loader-loader-l, 72px);
}
@keyframes spin--EqKio{
  to{
    transform:rotate(360deg);
  }
}`,""]),u.locals={spinner:"spinner--MR86H",spin:"spin--EqKio"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.15.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.floating--_tg3w{
  display:flex;
  flex-direction:column;
}

.floatingHidden--mX9RM{
  display:none;
}`,""]),u.locals={floating:"floating--_tg3w",floatingHidden:"floatingHidden--mX9RM"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.10_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.promoTag--g55Qz{
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
}`,""]),u.locals={promoTag:"promoTag--g55Qz",labelWrapper:"labelWrapper--LNUJZ"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+search-private@0.4.37_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.container--gPU9X{
  display:flex;
  flex-grow:1;
  align-items:center;
  box-sizing:border-box;
}
.container--gPU9X[data-size=s]{
  gap:var(--space-search-search-private-s, 4px);
}
.container--gPU9X[data-size=s] input{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  cursor:text;
}
.container--gPU9X[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--gPU9X[data-size=m]{
  gap:var(--space-search-search-private-m, 4px);
}
.container--gPU9X[data-size=m] input{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  cursor:text;
}
.container--gPU9X[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--gPU9X[data-size=l]{
  gap:var(--space-search-search-private-l, 8px);
}
.container--gPU9X[data-size=l] input{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
  cursor:text;
}
.container--gPU9X[data-size=l] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.postfix--JABn_{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-postfix-gap, 4px);
}

.prefix--kW4jP{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),u.locals={container:"container--gPU9X",postfix:"postfix--JABn_",prefix:"prefix--kW4jP"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.tag--NwI_j{
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
}`,""]),u.locals={tag:"tag--NwI_j",tagButton:"tagButton--r2yPE",icon:"icon--Tp2MS",label:"label--XUu32"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.tag--xEVFr{
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
}`,""]),u.locals={tag:"tag--xEVFr",label:"label--jA6rc"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.container--TS4Au{
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
}
.container--TS4Au[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
  border-radius:var(--radius-toggles-s-box-checkbox, 4px);
  border-width:var(--border-width-toggles-single, 2px);
}
.container--TS4Au[data-size=m]{
  width:var(--size-toggles-m-container, 24px);
  height:var(--size-toggles-m-container, 24px);
  border-radius:var(--radius-toggles-m-box-checkbox, 4px);
  border-width:var(--border-width-toggles-single, 2px);
}
.container--TS4Au[data-focusvisible=true]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
}
.container--TS4Au[data-focusvisible=true][data-size=s]{
  outline-offset:var(--border-width-state-focus-s, 2px);
}

.box--di93D{
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-decor-activated, #b6bac7);
  border-style:solid;
}
.box--di93D[data-checked=false][data-focusvisible=true], .box--di93D[data-checked=false][data-hover=true]{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.box--di93D[data-checked=false][data-disabled=true]{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.box--di93D[data-indeterminate=true], .box--di93D[data-checked=true]{
  background-color:var(--sys-primary-accent-default, #389f74);
  border-color:var(--sys-primary-accent-default, #389f74);
}
.box--di93D[data-indeterminate=true][data-focusvisible=true], .box--di93D[data-indeterminate=true][data-hover=true], .box--di93D[data-checked=true][data-focusvisible=true], .box--di93D[data-checked=true][data-hover=true]{
  background-color:var(--sys-primary-accent-hovered, #37946e);
  border-color:var(--sys-primary-accent-hovered, #37946e);
}
.box--di93D[data-indeterminate=true][data-disabled=true], .box--di93D[data-checked=true][data-disabled=true]{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
  border-color:var(--sys-neutral-text-disabled, #aaaebd);
}
.box--di93D[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
  border-width:var(--border-width-toggles-single, 2px);
  border-radius:var(--radius-toggles-s-box-checkbox, 4px);
}
.box--di93D[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.box--di93D[data-size=m]{
  width:var(--size-toggles-m-box-checkbox, 20px);
  height:var(--size-toggles-m-box-checkbox, 20px);
  border-width:var(--border-width-toggles-single, 2px);
  border-radius:var(--radius-toggles-m-box-checkbox, 4px);
}
.box--di93D[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.icon--FjHdT{
  position:absolute;
  top:0;
  left:0;
  display:none;
  width:100%;
  height:100%;
  color:var(--sys-primary-on-accent, #fbfffc);
}
.icon--FjHdT[data-indeterminate=true], .icon--FjHdT[data-checked=true]{
  display:block;
}
.icon--FjHdT[data-disabled=true]{
  color:var(--sys-neutral-decor-disabled, #e6e8ef);
}`,""]),u.locals={container:"container--TS4Au",box:"box--di93D",icon:"icon--FjHdT"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.container--Brwxd{
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
}
.container--Brwxd[data-size=s]{
  width:var(--size-toggles-s-container-switch-width, 24px);
  height:var(--size-toggles-s-container, 16px);
  border-radius:var(--radius-toggles-s-box-switch, 16px);
}
.container--Brwxd[data-size=m]{
  width:var(--size-toggles-m-container-switch-width, 36px);
  height:var(--size-toggles-m-container, 24px);
  border-radius:var(--radius-toggles-m-box-switch, 16px);
}
.container--Brwxd[data-focusvisible=true]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
}
.container--Brwxd[data-focusvisible=true][data-size=s]{
  outline-offset:var(--border-width-state-focus-s, 2px);
}
.container--Brwxd{
  position:relative;
}

.box--DWGN7{
  position:relative;
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.box--DWGN7[data-size=s]{
  width:var(--size-toggles-s-box-switch-width, 24px);
  height:var(--size-toggles-s-box-switch-height, 16px);
  border-radius:var(--radius-toggles-s-box-switch, 16px);
}
.box--DWGN7[data-size=m]{
  width:var(--size-toggles-m-box-switch-width, 32px);
  height:var(--size-toggles-m-box-switch-height, 20px);
  border-radius:var(--radius-toggles-m-box-switch, 16px);
}
.box--DWGN7[data-hover=true]{
  background-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.box--DWGN7[data-disabled=true]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.box--DWGN7[data-checked=true]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.box--DWGN7[data-checked=true][data-hover=true]{
  background-color:var(--sys-primary-accent-hovered, #37946e);
}
.box--DWGN7[data-checked=true][data-disabled=true]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.containerFlag--CiX6a{
  position:absolute;
  left:0;
  display:flex;
  align-items:center;
  justify-content:center;
  transition-timing-function:linear;
  transition-duration:0.1s;
  transition-property:left;
}
.containerFlag--CiX6a[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
}
.containerFlag--CiX6a[data-size=s][data-checked=true]{
  left:calc(100% - var(--size-toggles-s-container, 16px));
}
.containerFlag--CiX6a[data-size=m]{
  width:var(--size-toggles-m-container, 24px);
  height:var(--size-toggles-m-container, 24px);
}
.containerFlag--CiX6a[data-size=m][data-checked=true]{
  left:calc(100% - var(--size-toggles-m-container, 24px));
}

.flag--bPMK6{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}
.flag--bPMK6[data-size=s]{
  border-radius:var(--radius-toggles-s-box-switch, 16px);
  width:var(--size-toggles-s-flag-switch, 12px);
  height:var(--size-toggles-s-flag-switch, 12px);
}
.flag--bPMK6[data-size=m]{
  border-radius:var(--radius-toggles-m-box-switch, 16px);
  width:var(--size-toggles-m-flag-switch, 16px);
  height:var(--size-toggles-m-flag-switch, 16px);
}
.flag--bPMK6[data-focusvisible=true], .flag--bPMK6[data-hover=true]{
  background-color:var(--sys-neutral-on-accent, #ffffff);
}
.flag--bPMK6[data-disabled=true]{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}

.flag_icon_off--ZG1HQ{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  fill:transparent;
  transition:opacity 0.1s linear;
}
.flag_icon_off--ZG1HQ[data-hover=true]{
  color:var(--sys-neutral-accent-hovered, #6d707f);
}
.flag_icon_off--ZG1HQ[data-checked=true]{
  color:var(--sys-primary-accent-default, #389f74);
}
.flag_icon_off--ZG1HQ[data-checked=true][data-hover=true]{
  color:var(--sys-primary-accent-hovered, #37946e);
}
.flag_icon_off--ZG1HQ[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_off--ZG1HQ[data-disabled=true][data-hover=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_off--ZG1HQ{
  opacity:1;
}
.flag_icon_off--ZG1HQ[data-checked=true]{
  opacity:0;
}

.flag_icon_on--ImkUt{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  fill:transparent;
  transition:opacity 0.1s linear;
}
.flag_icon_on--ImkUt[data-hover=true]{
  color:var(--sys-neutral-accent-hovered, #6d707f);
}
.flag_icon_on--ImkUt[data-checked=true]{
  color:var(--sys-primary-accent-default, #389f74);
}
.flag_icon_on--ImkUt[data-checked=true][data-hover=true]{
  color:var(--sys-primary-accent-hovered, #37946e);
}
.flag_icon_on--ImkUt[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_on--ImkUt[data-disabled=true][data-hover=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_on--ImkUt{
  opacity:0;
}
.flag_icon_on--ImkUt[data-checked=true]{
  opacity:1;
}`,""]),u.locals={container:"container--Brwxd",box:"box--DWGN7",containerFlag:"containerFlag--CiX6a",flag:"flag--bPMK6",flag_icon_off:"flag_icon_off--ZG1HQ",flag_icon_on:"flag_icon_on--ImkUt"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.toggleLayout--KwCBe{
  cursor:pointer;
  position:relative;
  display:inline-flex;
  flex-direction:row;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
}
.toggleLayout--KwCBe[data-disabled=true]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

.togglePrivate--c2UuX{
  cursor:pointer;
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  width:100%;
  height:100%;
  margin:0;
  padding:0;
  opacity:0;
}
.togglePrivate--c2UuX:disabled{
  cursor:not-allowed;
}`,""]),u.locals={toggleLayout:"toggleLayout--KwCBe",togglePrivate:"togglePrivate--c2UuX"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.spinner--pavMg{
  pointer-events:none;
  width:var(--dimension-2m, 16px);
  height:var(--dimension-2m, 16px);
  animation:spin--V6hqY 1s ease-in-out infinite;
}
.spinner--pavMg > path{
  stroke:currentColor;
}
@keyframes spin--V6hqY{
  to{
    transform:rotate(360deg);
  }
}`,""]),u.locals={spinner:"spinner--pavMg",spin:"spin--V6hqY"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.tooltipContainer--VjQzd{
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
.tooltipContainer--VjQzd[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--_mD7p{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 4px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 4px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--EMlcd{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),u.locals={tooltipContainer:"tooltipContainer--VjQzd",tooltipArrowContainer:"tooltipArrowContainer--_mD7p",tooltipArrowElement:"tooltipArrowElement--EMlcd"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.text1Line--GeyRn{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--Np4Vx{
  text-overflow:ellipsis;
}

.text2AndMoreLines--CBS6_{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--mPQ0O{
  display:grid;
}`,""]),u.locals={text1Line:"text1Line--GeyRn",ellipsis:"ellipsis--Np4Vx",text2AndMoreLines:"text2AndMoreLines--CBS6_",tooltipTrigger:"tooltipTrigger--mPQ0O"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.wrapper--MC5Hy{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--WlhG8{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--Ww7IT{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--QGX16{
  display:inline-flex;
}`,""]),u.locals={wrapper:"wrapper--MC5Hy",truncatedText:"truncatedText--WlhG8",fullText:"fullText--Ww7IT",textContainer:"textContainer--QGX16"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+typography@0.8.13_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/styles.module.css"(A,z,r){r.d(z,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),w=r.n(i),v=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),S=r.n(v),u=S()(w());u.push([A.id,`.typography--TxEAL{
  box-sizing:border-box;
  max-width:100%;
  margin:0;
  padding:0;
  overflow-wrap:break-word;
}
.typography--TxEAL[data-family=sans][data-purpose=display][data-size=s]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.typography--TxEAL[data-family=sans][data-purpose=display][data-size=m]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.typography--TxEAL[data-family=sans][data-purpose=display][data-size=l]{
  font-family:var(--sans-display-l-font-family, SB Sans Interface);
  font-weight:var(--sans-display-l-font-weight, Bold);
  line-height:var(--sans-display-l-line-height, 72px);
  font-size:var(--sans-display-l-font-size, 56px);
  letter-spacing:var(--sans-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-l-paragraph-spacing, 30.8px);
}
.typography--TxEAL[data-family=sans][data-purpose=headline][data-size=s]{
  font-family:var(--sans-headline-s-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-s-font-weight, Semibold);
  line-height:var(--sans-headline-s-line-height, 32px);
  font-size:var(--sans-headline-s-font-size, 24px);
  letter-spacing:var(--sans-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-s-paragraph-spacing, 13.2px);
}
.typography--TxEAL[data-family=sans][data-purpose=headline][data-size=m]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.typography--TxEAL[data-family=sans][data-purpose=headline][data-size=l]{
  font-family:var(--sans-headline-l-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-l-font-weight, Semibold);
  line-height:var(--sans-headline-l-line-height, 40px);
  font-size:var(--sans-headline-l-font-size, 32px);
  letter-spacing:var(--sans-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-l-paragraph-spacing, 17.6px);
}
.typography--TxEAL[data-family=sans][data-purpose=title][data-size=s]{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
}
.typography--TxEAL[data-family=sans][data-purpose=title][data-size=m]{
  font-family:var(--sans-title-m-font-family, SB Sans Interface);
  font-weight:var(--sans-title-m-font-weight, Semibold);
  line-height:var(--sans-title-m-line-height, 24px);
  font-size:var(--sans-title-m-font-size, 16px);
  letter-spacing:var(--sans-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);
}
.typography--TxEAL[data-family=sans][data-purpose=title][data-size=l]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.typography--TxEAL[data-family=sans][data-purpose=label][data-size=s]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.typography--TxEAL[data-family=sans][data-purpose=label][data-size=m]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.typography--TxEAL[data-family=sans][data-purpose=label][data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.typography--TxEAL[data-family=sans][data-purpose=body][data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.typography--TxEAL[data-family=sans][data-purpose=body][data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.typography--TxEAL[data-family=sans][data-purpose=body][data-size=l]{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.typography--TxEAL[data-family=light][data-purpose=display][data-size=s]{
  font-family:var(--light-display-s-font-family, SB Sans Interface);
  font-weight:var(--light-display-s-font-weight, Regular);
  line-height:var(--light-display-s-line-height, 48px);
  font-size:var(--light-display-s-font-size, 40px);
  letter-spacing:var(--light-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--light-display-s-paragraph-spacing, 22px);
}
.typography--TxEAL[data-family=light][data-purpose=display][data-size=m]{
  font-family:var(--light-display-m-font-family, SB Sans Interface);
  font-weight:var(--light-display-m-font-weight, Regular);
  line-height:var(--light-display-m-line-height, 60px);
  font-size:var(--light-display-m-font-size, 48px);
  letter-spacing:var(--light-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--light-display-m-paragraph-spacing, 26.4px);
}
.typography--TxEAL[data-family=light][data-purpose=display][data-size=l]{
  font-family:var(--light-display-l-font-family, SB Sans Interface);
  font-weight:var(--light-display-l-font-weight, Regular);
  line-height:var(--light-display-l-line-height, 72px);
  font-size:var(--light-display-l-font-size, 56px);
  letter-spacing:var(--light-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--light-display-l-paragraph-spacing, 30.8px);
}
.typography--TxEAL[data-family=light][data-purpose=headline][data-size=s]{
  font-family:var(--light-headline-s-font-family, SB Sans Interface);
  font-weight:var(--light-headline-s-font-weight, Regular);
  line-height:var(--light-headline-s-line-height, 32px);
  font-size:var(--light-headline-s-font-size, 24px);
  letter-spacing:var(--light-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--light-headline-s-paragraph-spacing, 13.2px);
}
.typography--TxEAL[data-family=light][data-purpose=headline][data-size=m]{
  font-family:var(--light-headline-m-font-family, SB Sans Interface);
  font-weight:var(--light-headline-m-font-weight, Regular);
  line-height:var(--light-headline-m-line-height, 36px);
  font-size:var(--light-headline-m-font-size, 28px);
  letter-spacing:var(--light-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--light-headline-m-paragraph-spacing, 15.4px);
}
.typography--TxEAL[data-family=light][data-purpose=headline][data-size=l]{
  font-family:var(--light-headline-l-font-family, SB Sans Interface);
  font-weight:var(--light-headline-l-font-weight, Regular);
  line-height:var(--light-headline-l-line-height, 40px);
  font-size:var(--light-headline-l-font-size, 32px);
  letter-spacing:var(--light-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--light-headline-l-paragraph-spacing, 17.6px);
}
.typography--TxEAL[data-family=light][data-purpose=title][data-size=s]{
  font-family:var(--light-title-s-font-family, SB Sans Interface);
  font-weight:var(--light-title-s-font-weight, Regular);
  line-height:var(--light-title-s-line-height, 20px);
  font-size:var(--light-title-s-font-size, 14px);
  letter-spacing:var(--light-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-s-paragraph-spacing, 7.7px);
}
.typography--TxEAL[data-family=light][data-purpose=title][data-size=m]{
  font-family:var(--light-title-m-font-family, SB Sans Interface);
  font-weight:var(--light-title-m-font-weight, Regular);
  line-height:var(--light-title-m-line-height, 24px);
  font-size:var(--light-title-m-font-size, 16px);
  letter-spacing:var(--light-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-m-paragraph-spacing, 8.8px);
}
.typography--TxEAL[data-family=light][data-purpose=title][data-size=l]{
  font-family:var(--light-title-l-font-family, SB Sans Interface);
  font-weight:var(--light-title-l-font-weight, Regular);
  line-height:var(--light-title-l-line-height, 28px);
  font-size:var(--light-title-l-font-size, 20px);
  letter-spacing:var(--light-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-l-paragraph-spacing, 11px);
}
.typography--TxEAL[data-family=light][data-purpose=label][data-size=s]{
  font-family:var(--light-label-s-font-family, SB Sans Interface);
  font-weight:var(--light-label-s-font-weight, Regular);
  line-height:var(--light-label-s-line-height, 14px);
  font-size:var(--light-label-s-font-size, 11px);
  letter-spacing:var(--light-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-s-paragraph-spacing, 6.05px);
}
.typography--TxEAL[data-family=light][data-purpose=label][data-size=m]{
  font-family:var(--light-label-m-font-family, SB Sans Interface);
  font-weight:var(--light-label-m-font-weight, Regular);
  line-height:var(--light-label-m-line-height, 16px);
  font-size:var(--light-label-m-font-size, 12px);
  letter-spacing:var(--light-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-m-paragraph-spacing, 6.6px);
}
.typography--TxEAL[data-family=light][data-purpose=label][data-size=l]{
  font-family:var(--light-label-l-font-family, SB Sans Interface);
  font-weight:var(--light-label-l-font-weight, Regular);
  line-height:var(--light-label-l-line-height, 20px);
  font-size:var(--light-label-l-font-size, 14px);
  letter-spacing:var(--light-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-l-paragraph-spacing, 7.7px);
}
.typography--TxEAL[data-family=light][data-purpose=body][data-size=s]{
  font-family:var(--light-body-s-font-family, SB Sans Interface);
  font-weight:var(--light-body-s-font-weight, Light);
  line-height:var(--light-body-s-line-height, 16px);
  font-size:var(--light-body-s-font-size, 12px);
  letter-spacing:var(--light-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--light-body-s-paragraph-spacing, 6.6px);
}
.typography--TxEAL[data-family=light][data-purpose=body][data-size=m]{
  font-family:var(--light-body-m-font-family, SB Sans Interface);
  font-weight:var(--light-body-m-font-weight, Light);
  line-height:var(--light-body-m-line-height, 20px);
  font-size:var(--light-body-m-font-size, 14px);
  letter-spacing:var(--light-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--light-body-m-paragraph-spacing, 7.7px);
}
.typography--TxEAL[data-family=light][data-purpose=body][data-size=l]{
  font-family:var(--light-body-l-font-family, SB Sans Interface);
  font-weight:var(--light-body-l-font-weight, Light);
  line-height:var(--light-body-l-line-height, 24px);
  font-size:var(--light-body-l-font-size, 16px);
  letter-spacing:var(--light-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--light-body-l-paragraph-spacing, 8.8px);
}
.typography--TxEAL[data-family=link][data-purpose=display][data-size=s]{
  font-family:var(--link-display-s-font-family, SB Sans Interface);
  font-weight:var(--link-display-s-font-weight, Semibold);
  line-height:var(--link-display-s-line-height, 48px);
  font-size:var(--link-display-s-font-size, 40px);
  letter-spacing:var(--link-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-s-paragraph-spacing, 22px);
  -webkit-text-decoration:var(--link-display-s-text-decoration, underline);
          text-decoration:var(--link-display-s-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=display][data-size=m]{
  font-family:var(--link-display-m-font-family, SB Sans Interface);
  font-weight:var(--link-display-m-font-weight, Semibold);
  line-height:var(--link-display-m-line-height, 60px);
  font-size:var(--link-display-m-font-size, 48px);
  letter-spacing:var(--link-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-m-paragraph-spacing, 26.4px);
  -webkit-text-decoration:var(--link-display-m-text-decoration, underline);
          text-decoration:var(--link-display-m-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=display][data-size=l]{
  font-family:var(--link-display-l-font-family, SB Sans Interface);
  font-weight:var(--link-display-l-font-weight, Bold);
  line-height:var(--link-display-l-line-height, 72px);
  font-size:var(--link-display-l-font-size, 56px);
  letter-spacing:var(--link-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-l-paragraph-spacing, 30.8px);
  -webkit-text-decoration:var(--link-display-l-text-decoration, underline);
          text-decoration:var(--link-display-l-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=headline][data-size=s]{
  font-family:var(--link-headline-s-font-family, SB Sans Interface);
  font-weight:var(--link-headline-s-font-weight, Semibold);
  line-height:var(--link-headline-s-line-height, 32px);
  font-size:var(--link-headline-s-font-size, 24px);
  letter-spacing:var(--link-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-s-paragraph-spacing, 13.2px);
  -webkit-text-decoration:var(--link-headline-s-text-decoration, underline);
          text-decoration:var(--link-headline-s-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=headline][data-size=m]{
  font-family:var(--link-headline-m-font-family, SB Sans Interface);
  font-weight:var(--link-headline-m-font-weight, Semibold);
  line-height:var(--link-headline-m-line-height, 36px);
  font-size:var(--link-headline-m-font-size, 28px);
  letter-spacing:var(--link-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-m-paragraph-spacing, 15.4px);
  -webkit-text-decoration:var(--link-headline-m-text-decoration, underline);
          text-decoration:var(--link-headline-m-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=headline][data-size=l]{
  font-family:var(--link-headline-l-font-family, SB Sans Interface);
  font-weight:var(--link-headline-l-font-weight, Semibold);
  line-height:var(--link-headline-l-line-height, 40px);
  font-size:var(--link-headline-l-font-size, 32px);
  letter-spacing:var(--link-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-l-paragraph-spacing, 17.6px);
  -webkit-text-decoration:var(--link-headline-l-text-decoration, underline);
          text-decoration:var(--link-headline-l-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=title][data-size=s]{
  font-family:var(--link-title-s-font-family, SB Sans Interface);
  font-weight:var(--link-title-s-font-weight, Semibold);
  line-height:var(--link-title-s-line-height, 20px);
  font-size:var(--link-title-s-font-size, 14px);
  letter-spacing:var(--link-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-s-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-title-s-text-decoration, underline);
          text-decoration:var(--link-title-s-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=title][data-size=m]{
  font-family:var(--link-title-m-font-family, SB Sans Interface);
  font-weight:var(--link-title-m-font-weight, Semibold);
  line-height:var(--link-title-m-line-height, 24px);
  font-size:var(--link-title-m-font-size, 16px);
  letter-spacing:var(--link-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-m-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-title-m-text-decoration, underline);
          text-decoration:var(--link-title-m-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=title][data-size=l]{
  font-family:var(--link-title-l-font-family, SB Sans Interface);
  font-weight:var(--link-title-l-font-weight, Semibold);
  line-height:var(--link-title-l-line-height, 28px);
  font-size:var(--link-title-l-font-size, 20px);
  letter-spacing:var(--link-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-l-paragraph-spacing, 11px);
  -webkit-text-decoration:var(--link-title-l-text-decoration, underline);
          text-decoration:var(--link-title-l-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=label][data-size=s]{
  font-family:var(--link-label-s-font-family, SB Sans Interface);
  font-weight:var(--link-label-s-font-weight, Semibold);
  line-height:var(--link-label-s-line-height, 14px);
  font-size:var(--link-label-s-font-size, 11px);
  letter-spacing:var(--link-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-s-paragraph-spacing, 6.05px);
  -webkit-text-decoration:var(--link-label-s-text-decoration, underline);
          text-decoration:var(--link-label-s-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=label][data-size=m]{
  font-family:var(--link-label-m-font-family, SB Sans Interface);
  font-weight:var(--link-label-m-font-weight, Semibold);
  line-height:var(--link-label-m-line-height, 16px);
  font-size:var(--link-label-m-font-size, 12px);
  letter-spacing:var(--link-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-m-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-label-m-text-decoration, underline);
          text-decoration:var(--link-label-m-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=label][data-size=l]{
  font-family:var(--link-label-l-font-family, SB Sans Interface);
  font-weight:var(--link-label-l-font-weight, Semibold);
  line-height:var(--link-label-l-line-height, 20px);
  font-size:var(--link-label-l-font-size, 14px);
  letter-spacing:var(--link-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-l-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-label-l-text-decoration, underline);
          text-decoration:var(--link-label-l-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=body][data-size=s]{
  font-family:var(--link-body-s-font-family, SB Sans Interface);
  font-weight:var(--link-body-s-font-weight, Regular);
  line-height:var(--link-body-s-line-height, 16px);
  font-size:var(--link-body-s-font-size, 12px);
  letter-spacing:var(--link-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-s-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-body-s-text-decoration, underline);
          text-decoration:var(--link-body-s-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=body][data-size=m]{
  font-family:var(--link-body-m-font-family, SB Sans Interface);
  font-weight:var(--link-body-m-font-weight, Regular);
  line-height:var(--link-body-m-line-height, 20px);
  font-size:var(--link-body-m-font-size, 14px);
  letter-spacing:var(--link-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-m-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-body-m-text-decoration, underline);
          text-decoration:var(--link-body-m-text-decoration, underline);
}
.typography--TxEAL[data-family=link][data-purpose=body][data-size=l]{
  font-family:var(--link-body-l-font-family, SB Sans Interface);
  font-weight:var(--link-body-l-font-weight, Regular);
  line-height:var(--link-body-l-line-height, 24px);
  font-size:var(--link-body-l-font-size, 16px);
  letter-spacing:var(--link-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-l-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-body-l-text-decoration, underline);
          text-decoration:var(--link-body-l-text-decoration, underline);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=display][data-size=s]{
  font-family:var(--crossed-out-display-s-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-display-s-font-weight, Semibold);
  line-height:var(--crossed-out-display-s-line-height, 48px);
  font-size:var(--crossed-out-display-s-font-size, 40px);
  letter-spacing:var(--crossed-out-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--crossed-out-display-s-paragraph-spacing, 22px);
  -webkit-text-decoration:var(--crossed-out-display-s-text-decoration, line-through);
          text-decoration:var(--crossed-out-display-s-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=display][data-size=m]{
  font-family:var(--crossed-out-display-m-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-display-m-font-weight, Semibold);
  line-height:var(--crossed-out-display-m-line-height, 60px);
  font-size:var(--crossed-out-display-m-font-size, 48px);
  letter-spacing:var(--crossed-out-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--crossed-out-display-m-paragraph-spacing, 26.4px);
  -webkit-text-decoration:var(--crossed-out-display-m-text-decoration, line-through);
          text-decoration:var(--crossed-out-display-m-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=display][data-size=l]{
  font-family:var(--crossed-out-display-l-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-display-l-font-weight, Bold);
  line-height:var(--crossed-out-display-l-line-height, 72px);
  font-size:var(--crossed-out-display-l-font-size, 56px);
  letter-spacing:var(--crossed-out-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--crossed-out-display-l-paragraph-spacing, 30.8px);
  -webkit-text-decoration:var(--crossed-out-display-l-text-decoration, line-through);
          text-decoration:var(--crossed-out-display-l-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=headline][data-size=s]{
  font-family:var(--crossed-out-headline-s-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-headline-s-font-weight, Semibold);
  line-height:var(--crossed-out-headline-s-line-height, 32px);
  font-size:var(--crossed-out-headline-s-font-size, 24px);
  letter-spacing:var(--crossed-out-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--crossed-out-headline-s-paragraph-spacing, 13.2px);
  -webkit-text-decoration:var(--crossed-out-headline-s-text-decoration, line-through);
          text-decoration:var(--crossed-out-headline-s-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=headline][data-size=m]{
  font-family:var(--crossed-out-headline-m-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-headline-m-font-weight, Semibold);
  line-height:var(--crossed-out-headline-m-line-height, 36px);
  font-size:var(--crossed-out-headline-m-font-size, 28px);
  letter-spacing:var(--crossed-out-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--crossed-out-headline-m-paragraph-spacing, 15.4px);
  -webkit-text-decoration:var(--crossed-out-headline-m-text-decoration, line-through);
          text-decoration:var(--crossed-out-headline-m-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=headline][data-size=l]{
  font-family:var(--crossed-out-headline-l-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-headline-l-font-weight, Semibold);
  line-height:var(--crossed-out-headline-l-line-height, 40px);
  font-size:var(--crossed-out-headline-l-font-size, 32px);
  letter-spacing:var(--crossed-out-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--crossed-out-headline-l-paragraph-spacing, 17.6px);
  -webkit-text-decoration:var(--crossed-out-headline-l-text-decoration, line-through);
          text-decoration:var(--crossed-out-headline-l-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=title][data-size=s]{
  font-family:var(--crossed-out-title-s-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-title-s-font-weight, Semibold);
  line-height:var(--crossed-out-title-s-line-height, 20px);
  font-size:var(--crossed-out-title-s-font-size, 14px);
  letter-spacing:var(--crossed-out-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--crossed-out-title-s-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--crossed-out-title-s-text-decoration, line-through);
          text-decoration:var(--crossed-out-title-s-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=title][data-size=m]{
  font-family:var(--crossed-out-title-m-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-title-m-font-weight, Semibold);
  line-height:var(--crossed-out-title-m-line-height, 24px);
  font-size:var(--crossed-out-title-m-font-size, 16px);
  letter-spacing:var(--crossed-out-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--crossed-out-title-m-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--crossed-out-title-m-text-decoration, line-through);
          text-decoration:var(--crossed-out-title-m-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=title][data-size=l]{
  font-family:var(--crossed-out-title-l-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-title-l-font-weight, Semibold);
  line-height:var(--crossed-out-title-l-line-height, 28px);
  font-size:var(--crossed-out-title-l-font-size, 20px);
  letter-spacing:var(--crossed-out-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--crossed-out-title-l-paragraph-spacing, 11px);
  -webkit-text-decoration:var(--crossed-out-title-l-text-decoration, line-through);
          text-decoration:var(--crossed-out-title-l-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=label][data-size=s]{
  font-family:var(--crossed-out-label-s-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-label-s-font-weight, Semibold);
  line-height:var(--crossed-out-label-s-line-height, 14px);
  font-size:var(--crossed-out-label-s-font-size, 11px);
  letter-spacing:var(--crossed-out-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--crossed-out-label-s-paragraph-spacing, 6.05px);
  -webkit-text-decoration:var(--crossed-out-label-s-text-decoration, line-through);
          text-decoration:var(--crossed-out-label-s-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=label][data-size=m]{
  font-family:var(--crossed-out-label-m-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-label-m-font-weight, Semibold);
  line-height:var(--crossed-out-label-m-line-height, 16px);
  font-size:var(--crossed-out-label-m-font-size, 12px);
  letter-spacing:var(--crossed-out-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--crossed-out-label-m-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--crossed-out-label-m-text-decoration, line-through);
          text-decoration:var(--crossed-out-label-m-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=label][data-size=l]{
  font-family:var(--crossed-out-label-l-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-label-l-font-weight, Semibold);
  line-height:var(--crossed-out-label-l-line-height, 20px);
  font-size:var(--crossed-out-label-l-font-size, 14px);
  letter-spacing:var(--crossed-out-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--crossed-out-label-l-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--crossed-out-label-l-text-decoration, line-through);
          text-decoration:var(--crossed-out-label-l-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=body][data-size=s]{
  font-family:var(--crossed-out-body-s-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-body-s-font-weight, Regular);
  line-height:var(--crossed-out-body-s-line-height, 16px);
  font-size:var(--crossed-out-body-s-font-size, 12px);
  letter-spacing:var(--crossed-out-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--crossed-out-body-s-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--crossed-out-body-s-text-decoration, line-through);
          text-decoration:var(--crossed-out-body-s-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=body][data-size=m]{
  font-family:var(--crossed-out-body-m-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-body-m-font-weight, Regular);
  line-height:var(--crossed-out-body-m-line-height, 20px);
  font-size:var(--crossed-out-body-m-font-size, 14px);
  letter-spacing:var(--crossed-out-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--crossed-out-body-m-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--crossed-out-body-m-text-decoration, line-through);
          text-decoration:var(--crossed-out-body-m-text-decoration, line-through);
}
.typography--TxEAL[data-family=crossed-out][data-purpose=body][data-size=l]{
  font-family:var(--crossed-out-body-l-font-family, SB Sans Interface);
  font-weight:var(--crossed-out-body-l-font-weight, Regular);
  line-height:var(--crossed-out-body-l-line-height, 24px);
  font-size:var(--crossed-out-body-l-font-size, 16px);
  letter-spacing:var(--crossed-out-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--crossed-out-body-l-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--crossed-out-body-l-text-decoration, line-through);
          text-decoration:var(--crossed-out-body-l-text-decoration, line-through);
}
.typography--TxEAL[data-family=mono][data-purpose=display][data-size=s]{
  font-family:var(--mono-display-s-font-family, SB Sans Text Mono);
  font-weight:var(--mono-display-s-font-weight, Bold);
  line-height:var(--mono-display-s-line-height, 48px);
  font-size:var(--mono-display-s-font-size, 40px);
  letter-spacing:var(--mono-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--mono-display-s-paragraph-spacing, 22px);
}
.typography--TxEAL[data-family=mono][data-purpose=display][data-size=m]{
  font-family:var(--mono-display-m-font-family, SB Sans Text Mono);
  font-weight:var(--mono-display-m-font-weight, Bold);
  line-height:var(--mono-display-m-line-height, 60px);
  font-size:var(--mono-display-m-font-size, 48px);
  letter-spacing:var(--mono-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--mono-display-m-paragraph-spacing, 26.4px);
}
.typography--TxEAL[data-family=mono][data-purpose=display][data-size=l]{
  font-family:var(--mono-display-l-font-family, SB Sans Text Mono);
  font-weight:var(--mono-display-l-font-weight, Bold);
  line-height:var(--mono-display-l-line-height, 72px);
  font-size:var(--mono-display-l-font-size, 56px);
  letter-spacing:var(--mono-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--mono-display-l-paragraph-spacing, 30.8px);
}
.typography--TxEAL[data-family=mono][data-purpose=headline][data-size=s]{
  font-family:var(--mono-headline-s-font-family, SB Sans Text Mono);
  font-weight:var(--mono-headline-s-font-weight, Bold);
  line-height:var(--mono-headline-s-line-height, 32px);
  font-size:var(--mono-headline-s-font-size, 24px);
  letter-spacing:var(--mono-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--mono-headline-s-paragraph-spacing, 13.2px);
}
.typography--TxEAL[data-family=mono][data-purpose=headline][data-size=m]{
  font-family:var(--mono-headline-m-font-family, SB Sans Text Mono);
  font-weight:var(--mono-headline-m-font-weight, Bold);
  line-height:var(--mono-headline-m-line-height, 36px);
  font-size:var(--mono-headline-m-font-size, 28px);
  letter-spacing:var(--mono-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--mono-headline-m-paragraph-spacing, 15.4px);
}
.typography--TxEAL[data-family=mono][data-purpose=headline][data-size=l]{
  font-family:var(--mono-headline-l-font-family, SB Sans Text Mono);
  font-weight:var(--mono-headline-l-font-weight, Bold);
  line-height:var(--mono-headline-l-line-height, 40px);
  font-size:var(--mono-headline-l-font-size, 32px);
  letter-spacing:var(--mono-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--mono-headline-l-paragraph-spacing, 17.6px);
}
.typography--TxEAL[data-family=mono][data-purpose=title][data-size=s]{
  font-family:var(--mono-title-s-font-family, SB Sans Text Mono);
  font-weight:var(--mono-title-s-font-weight, Regular);
  line-height:var(--mono-title-s-line-height, 20px);
  font-size:var(--mono-title-s-font-size, 14px);
  letter-spacing:var(--mono-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--mono-title-s-paragraph-spacing, 7.7px);
}
.typography--TxEAL[data-family=mono][data-purpose=title][data-size=m]{
  font-family:var(--mono-title-m-font-family, SB Sans Text Mono);
  font-weight:var(--mono-title-m-font-weight, Regular);
  line-height:var(--mono-title-m-line-height, 24px);
  font-size:var(--mono-title-m-font-size, 16px);
  letter-spacing:var(--mono-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--mono-title-m-paragraph-spacing, 8.8px);
}
.typography--TxEAL[data-family=mono][data-purpose=title][data-size=l]{
  font-family:var(--mono-title-l-font-family, SB Sans Text Mono);
  font-weight:var(--mono-title-l-font-weight, Regular);
  line-height:var(--mono-title-l-line-height, 28px);
  font-size:var(--mono-title-l-font-size, 20px);
  letter-spacing:var(--mono-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--mono-title-l-paragraph-spacing, 11px);
}
.typography--TxEAL[data-family=mono][data-purpose=label][data-size=s]{
  font-family:var(--mono-label-s-font-family, SB Sans Text Mono);
  font-weight:var(--mono-label-s-font-weight, Bold);
  line-height:var(--mono-label-s-line-height, 14px);
  font-size:var(--mono-label-s-font-size, 11px);
  letter-spacing:var(--mono-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--mono-label-s-paragraph-spacing, 6.05px);
}
.typography--TxEAL[data-family=mono][data-purpose=label][data-size=m]{
  font-family:var(--mono-label-m-font-family, SB Sans Text Mono);
  font-weight:var(--mono-label-m-font-weight, Bold);
  line-height:var(--mono-label-m-line-height, 16px);
  font-size:var(--mono-label-m-font-size, 12px);
  letter-spacing:var(--mono-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--mono-label-m-paragraph-spacing, 6.6px);
}
.typography--TxEAL[data-family=mono][data-purpose=label][data-size=l]{
  font-family:var(--mono-label-l-font-family, SB Sans Text Mono);
  font-weight:var(--mono-label-l-font-weight, Bold);
  line-height:var(--mono-label-l-line-height, 20px);
  font-size:var(--mono-label-l-font-size, 14px);
  letter-spacing:var(--mono-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--mono-label-l-paragraph-spacing, 7.7px);
}
.typography--TxEAL[data-family=mono][data-purpose=body][data-size=s]{
  font-family:var(--mono-body-s-font-family, SB Sans Text Mono);
  font-weight:var(--mono-body-s-font-weight, Regular);
  line-height:var(--mono-body-s-line-height, 16px);
  font-size:var(--mono-body-s-font-size, 12px);
  letter-spacing:var(--mono-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--mono-body-s-paragraph-spacing, 6.6px);
}
.typography--TxEAL[data-family=mono][data-purpose=body][data-size=m]{
  font-family:var(--mono-body-m-font-family, SB Sans Text Mono);
  font-weight:var(--mono-body-m-font-weight, Regular);
  line-height:var(--mono-body-m-line-height, 20px);
  font-size:var(--mono-body-m-font-size, 14px);
  letter-spacing:var(--mono-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--mono-body-m-paragraph-spacing, 7.7px);
}
.typography--TxEAL[data-family=mono][data-purpose=body][data-size=l]{
  font-family:var(--mono-body-l-font-family, SB Sans Text Mono);
  font-weight:var(--mono-body-l-font-weight, Regular);
  line-height:var(--mono-body-l-line-height, 24px);
  font-size:var(--mono-body-l-font-size, 16px);
  letter-spacing:var(--mono-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--mono-body-l-paragraph-spacing, 8.8px);
}`,""]),u.locals={typography:"typography--TxEAL"};const f=u},"./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"(A,z,r){r.d(z,{A:()=>i});function i(){for(var w=[],v=0;v<arguments.length;v++)w[v]=arguments[v];var S=w.filter(Boolean);if(S.length<=1){var u=S[0];return u||null}return function(I){S.forEach(function(T){typeof T=="function"?T(I):T&&(T.current=I)})}}}}]);})();
