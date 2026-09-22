"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2922],{"./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"(P,S,r){r.d(S,{Z:()=>to});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=r.n(O),j=r("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),u=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),f=r("./node_modules/.pnpm/@snack-uikit+typography@0.8.13_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),E=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const z={S:"s",M:"m",L:"l"},ie={promoBadge:"card__promo-badge",functionBadge:"card__function-badge",droplist:"card__function-badge__droplist",option:"card__function-badge__option",check:"card__check",emblemPicture:"card__header__emblem-picture",emblemIcon:"card__header__emblem-icon",title:"card__header__title",description:"card__header__description",metadata:"card__header__metadata",anchor:"card__anchor"},T=(0,u.createContext)({size:z.M,disabled:!1});function be(){return(0,u.useContext)(T)}const b=(0,u.createContext)({visible:!1,setVisible:()=>{}});var I=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=r.n(I),_=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=r.n(_),he=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=r.n(he),we=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),U=r.n(we),Ke=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),X=r.n(Ke),We=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=r.n(We),$=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/FunctionBadgeWrapper/styles.module.css"),me={};me.styleTagTransform=K(),me.setAttributes=U(),me.insert=H().bind(null,"head"),me.domAPI=m(),me.insertStyleElement=X();var ne=g()($.A,me);const te=$.A&&$.A.locals?$.A.locals:void 0;function ye({children:a,className:p,alwaysVisible:d}){const[s,n]=(0,u.useState)(!1),v=d?!0:s;return(0,i.jsx)(b.Provider,{value:{visible:v,setVisible:n},children:(0,i.jsx)("div",{className:p,"data-visible":v||void 0,tabIndex:-1,children:(0,i.jsx)("div",{className:te.functionBadge,children:(0,i.jsx)("div",{className:te.functionRow,children:a})})})})}const Ue={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},xe={Accent:"accent",Decor:"decor"},Pe={Xxs:"xxs",Xs:"xs",S:"s"};var Te=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.10_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"),je={};je.styleTagTransform=K(),je.setAttributes=U(),je.insert=H().bind(null,"head"),je.domAPI=m(),je.insertStyleElement=X();var Fe=g()(Te.A,je);const jt=Te.A&&Te.A.locals?Te.A.locals:void 0;var ka=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Sa(a){var{appearance:p=Ue.Primary,color:d=xe.Accent,size:s=Pe.Xxs,className:n,text:v,beforeContent:x,afterContent:k,onClick:w}=a,y=ka(a,["appearance","color","size","className","text","beforeContent","afterContent","onClick"]);const C=s!==Pe.Xxs,M=w?{role:"button",tabIndex:0,onClick:w}:{},A=s===Pe.S?f.o.SansLabelM:f.o.SansLabelS;return(0,i.jsxs)("div",Object.assign({className:h()(jt.promoTag,n)},(0,E.z7)(y),{"data-appearance":p,"data-color":d,"data-size":s},M,{children:[C&&x,!!v&&(0,i.jsx)(A,{className:jt.labelWrapper,tag:"span",children:v}),C&&k]}))}var et=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/PromoBadge/styles.module.css"),Ze={};Ze.styleTagTransform=K(),Ze.setAttributes=U(),Ze.insert=H().bind(null,"head"),Ze.domAPI=m(),Ze.insertStyleElement=X();var ar=g()(et.A,Ze);const ao=et.A&&et.A.locals?et.A.locals:void 0;function Qo({text:a,appearance:p="primary"}){return(0,i.jsx)("div",{className:ao.promoBadge,children:(0,i.jsx)(Sa,{appearance:p,text:a,"data-test-id":ie.promoBadge,className:ao.promoTag})})}var Ea=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),kt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Check/styles.module.css"),tt={};tt.styleTagTransform=K(),tt.setAttributes=U(),tt.insert=H().bind(null,"head"),tt.domAPI=m(),tt.insertStyleElement=X();var or=g()(kt.A,tt);const oo=kt.A&&kt.A.locals?kt.A.locals:void 0;function Vo({className:a}){return(0,i.jsx)("div",{className:oo.checkWrapper,children:(0,i.jsx)("div",{className:h()(oo.checkContainer,a),"data-test-id":ie.check,children:(0,i.jsx)(Ea.A,{size:16})})})}const Zo=["Enter","Space"];var St=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Card/styles.module.css"),at={};at.styleTagTransform=K(),at.setAttributes=U(),at.insert=H().bind(null,"head"),at.domAPI=m(),at.insertStyleElement=X();var sr=g()(St.A,at);const He=St.A&&St.A.locals?St.A.locals:void 0;var Go=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const Jo=(0,u.forwardRef)((a,p)=>{var{onClick:d,disabled:s=!1,checked:n,outline:v,multipleSelection:x=!1,size:k=z.M,children:w,header:y,footer:C,functionBadge:M,promoBadge:A,image:N,className:F,href:R,onKeyDown:Z,name:Q,badgeAlwaysVisible:V}=a,ae=Go(a,["onClick","disabled","checked","outline","multipleSelection","size","children","header","footer","functionBadge","promoBadge","image","className","href","onKeyDown","name","badgeAlwaysVisible"]);const J=(0,u.useRef)(null),oe=(0,u.useRef)(null),re=(0,u.useCallback)(ce=>{var ee,L;ce.target===J.current&&((Zo.includes(ce.code)||ce.key===" ")&&(R?(ee=oe.current)===null||ee===void 0||ee.click():(L=J.current)===null||L===void 0||L.click()),Z==null||Z(ce))},[R,Z]),se=(0,E.z7)(ae);return(0,i.jsx)(T.Provider,{value:{size:k,disabled:s},children:(0,i.jsxs)("div",Object.assign({ref:(0,j.A)(p,J),className:h()(He.card,F)},se,{onClick:d,"data-disabled":s||void 0,"data-checked":n||void 0,"data-outline":v||void 0,"data-pointer":d?!0:void 0,tabIndex:0,onKeyDown:re,children:[N,(0,i.jsxs)("div",{className:He.composition,tabIndex:-1,children:[R&&(0,i.jsx)("a",{ref:oe,"data-test-id":ie.anchor,tabIndex:-1,href:R,className:He.anchor,"aria-label":se["aria-label"]}),!s&&M&&(0,i.jsx)(ye,{alwaysVisible:V,className:He.functionBadgeWrapper,children:M}),(0,i.jsx)("div",{className:He.contentWrapper,children:(0,i.jsxs)("div",{className:He.content,"data-size":k,children:[y||null,w&&(0,i.jsx)(f.o,{family:"sans",size:k,purpose:"body",className:He.body,tag:"div",children:w}),C&&(0,i.jsx)("div",{className:He.footer,children:C})]})}),A&&(0,i.jsx)(Qo,Object.assign({},typeof A=="string"?{text:A}:A))]}),n&&x&&(0,i.jsx)(Vo,{className:He.check}),Q&&(0,i.jsx)("input",{name:Q,type:"checkbox",checked:n,style:{display:"none"}})]}))})}),Ye={Primary:"primary",Neutral:"neutral",Destructive:"destructive"},Et={Button:"button",Submit:"submit",Reset:"reset"},Pt={Blank:"_blank",Self:"_self",Parent:"_parent",Top:"_top"},Pa={Xs:"xs",S:"s",M:"m",L:"l"},$e={Before:"before",After:"after"};var ot;(function(a){a.LabelOnly="label-only",a.IconOnly="icon-only",a.IconBefore="icon-before",a.IconAfter="icon-after"})(ot||(ot={}));const Yo={[Ye.Neutral]:"neutral",[Ye.Primary]:"primary",[Ye.Destructive]:"red"};var zt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"),st={};st.styleTagTransform=K(),st.setAttributes=U(),st.insert=H().bind(null,"head"),st.domAPI=m(),st.insertStyleElement=X();var rr=g()(zt.A,st);const It=zt.A&&zt.A.locals?zt.A.locals:void 0;var $o=r("./node_modules/.pnpm/@snack-uikit+counter@0.8.12_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"),so=r("./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js");function qo({label:a,icon:p,iconPosition:d}){return a&&p&&d===$e.After?ot.IconAfter:a&&p&&d===$e.Before?ot.IconBefore:a?ot.LabelOnly:ot.IconOnly}function es({counter:a,loading:p,disabled:d,counterForIcon:s,"data-test-id":n}){return typeof(a==null?void 0:a.value)=="number"&&!p&&!d?(0,i.jsx)("span",{"data-test-id":`${n!=null?n:"button"}__counter`,className:h()(s?It.counterForIcon:It.counterForLabel),children:(0,i.jsx)($o.p,Object.assign({},a))}):void 0}function ts({icon:a,iconClassName:p,loading:d,wrappedCounter:s}){if(d)return(0,i.jsx)("span",{"data-test-id":"loading-icon",className:p,children:(0,i.jsx)(so.b,{size:"s"})});if(a)return(0,i.jsxs)("span",{"data-test-id":"icon",className:h()(p,{[It.iconWithCounter]:!!s}),children:[a,s]})}function as({label:a,labelClassName:p,wrappedCounter:d}){return a?(0,i.jsxs)("span",{"data-test-id":"label",className:p,children:[a,d]}):void 0}function os({icon:a,label:p,iconPosition:d,iconClassName:s,labelClassName:n,loading:v,disabled:x,counter:k,"data-test-id":w}){const y=a&&(d===$e.After||!p),C=es({counter:k,loading:v,disabled:x,counterForIcon:y,"data-test-id":w}),M=ts({icon:a,iconClassName:s,loading:v,wrappedCounter:y?C:void 0}),A=as({label:p,labelClassName:n,wrappedCounter:y?void 0:C});switch(d){case $e.Before:return(0,i.jsxs)(i.Fragment,{children:[M,A]});case $e.After:default:return(0,i.jsxs)(i.Fragment,{children:[A,M]})}}var ss=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const za=(0,u.forwardRef)((a,p)=>{var{className:d,disabled:s,href:n,icon:v,iconClassName:x,iconPosition:k=$e.After,label:w,labelClassName:y,loading:C,onClick:M,onKeyDown:A,onFocus:N,onBlur:F,counter:R,size:Z,target:Q=Pt.Blank,type:V=Et.Button,appearance:ae=Ye.Primary,tabIndex:J=0,fullWidth:oe}=a,re=ss(a,["className","disabled","href","icon","iconClassName","iconPosition","label","labelClassName","loading","onClick","onKeyDown","onFocus","onBlur","counter","size","target","type","appearance","tabIndex","fullWidth"]);const se=qo({label:w,iconPosition:k,icon:v}),ce=os({icon:v,iconClassName:x,iconPosition:k,label:w,labelClassName:y,loading:C,disabled:s,counter:R,"data-test-id":re["data-test-id"]}),ee=C||s?-1:J,L=W=>{if(s||C){W.preventDefault();return}M&&M(W)},D=Object.assign(Object.assign({},(0,E.z7)(re)),{className:h()(It.button,d),"data-disabled":s||void 0,"aria-disabled":s||void 0,"data-loading":C||void 0,"data-size":Z,"data-full-width":oe||void 0,"data-appearance":Yo[ae],"data-variant":se,onClick:L,onKeyDown:A,onFocus:N,onBlur:F,tabIndex:ee});return n?(0,i.jsx)("a",Object.assign({role:"button",href:n,target:Q},D,{ref:p,children:ce})):(0,i.jsx)("button",Object.assign({},D,{type:V,ref:p,children:ce}))});function rs({counter:a}){return{counter:a}}function Ia({disabled:a,href:p,icon:d,label:s,loading:n,onClick:v,onFocus:x,onBlur:k,onKeyDown:w}){return{disabled:a,href:p,icon:d,label:s,loading:n,onClick:v,onKeyDown:w,onFocus:x,onBlur:k}}var At=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/styles.module.css"),rt={};rt.styleTagTransform=K(),rt.setAttributes=U(),rt.insert=H().bind(null,"head"),rt.domAPI=m(),rt.insertStyleElement=X();var nr=g()(At.A,rt);const Aa=At.A&&At.A.locals?At.A.locals:void 0;var ns=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const Ta=(0,u.forwardRef)((a,p)=>{var{className:d,size:s=Pa.S,target:n=Pt.Blank,type:v=Et.Button,appearance:x=Ye.Primary,tabIndex:k,fullWidth:w=!1}=a,y=ns(a,["className","size","target","type","appearance","tabIndex","fullWidth"]);return(0,i.jsx)(za,Object.assign({},(0,E.z7)(y),Ia(y),{className:h()(Aa.button,d),iconClassName:Aa.icon,labelClassName:Aa.label,size:s,fullWidth:w,target:n,type:v,appearance:x,tabIndex:k,ref:p}))}),ls={[z.S]:"m",[z.M]:"m",[z.L]:"l"};var Tt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Dimension/styles.module.css"),nt={};nt.styleTagTransform=K(),nt.setAttributes=U(),nt.insert=H().bind(null,"head"),nt.domAPI=m(),nt.insertStyleElement=X();var lr=g()(Tt.A,nt);const yt=Tt.A&&Tt.A.locals?Tt.A.locals:void 0;function is({dimension:a,currentValue:p,oldValue:d,size:s}){const{size:n}=be(),v=ls[s||n];return(0,i.jsxs)("div",{className:yt.wrapper,children:[a&&(0,i.jsx)(f.o,{purpose:"title",family:"sans",size:v,className:yt.dimension,children:a}),(0,i.jsxs)("div",{className:yt.valueContainer,children:[(0,i.jsx)(f.o,{purpose:"title",family:"sans",size:v,className:yt.currentValue,children:p}),d&&(0,i.jsx)(f.o.CrossedOutBodyS,{className:yt.oldValue,children:d})]})]})}var Ct=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Promo/styles.module.css"),lt={};lt.styleTagTransform=K(),lt.setAttributes=U(),lt.insert=H().bind(null,"head"),lt.domAPI=m(),lt.insertStyleElement=X();var ir=g()(Ct.A,lt);const ds=Ct.A&&Ct.A.locals?Ct.A.locals:void 0;var cs=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function ps(a){var{volume:p,button:d,className:s,size:n}=a,v=cs(a,["volume","button","className","size"]);const{disabled:x}=be();return(0,i.jsxs)("div",Object.assign({className:h()(ds.promo,s)},(0,E.sg)(v),{children:[d&&(0,i.jsx)(Ta,Object.assign({},d,{appearance:"primary",size:"m",disabled:x})),p&&(0,i.jsx)(is,Object.assign({},p,{size:n}))]}))}var Lt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/styles.module.css"),it={};it.styleTagTransform=K(),it.setAttributes=U(),it.insert=H().bind(null,"head"),it.domAPI=m(),it.insertStyleElement=X();var dr=g()(Lt.A,it);const Ca=Lt.A&&Lt.A.locals?Lt.A.locals:void 0;var us=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const ro=(0,u.forwardRef)((a,p)=>{var{className:d,size:s=Pa.S,target:n=Pt.Blank,type:v=Et.Button,appearance:x=Ye.Primary,fullWidth:k=!1,tabIndex:w}=a,y=us(a,["className","size","target","type","appearance","fullWidth","tabIndex"]);return(0,i.jsx)(za,Object.assign({},(0,E.z7)(y),Ia(y),{className:h()(Ca.button,d),iconClassName:Ca.icon,labelClassName:Ca.label,size:s,fullWidth:k,target:n,type:v,appearance:x,tabIndex:w,ref:p}))});var Mt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Action/styles.module.css"),dt={};dt.styleTagTransform=K(),dt.setAttributes=U(),dt.insert=H().bind(null,"head"),dt.domAPI=m(),dt.insertStyleElement=X();var cr=g()(Mt.A,dt);const _s=Mt.A&&Mt.A.locals?Mt.A.locals:void 0;var ms=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function fs(a){var{button:p,secondaryButton:d,className:s}=a,n=ms(a,["button","secondaryButton","className"]);const{disabled:v}=be();return(0,i.jsxs)("div",Object.assign({className:h()(_s.action,s)},(0,E.sg)(n),{children:[(0,i.jsx)(Ta,Object.assign({},p,{appearance:"primary",size:"m",disabled:v})),d&&(0,i.jsx)(ro,Object.assign({},d,{appearance:"neutral",size:"m",disabled:v}))]}))}var Dt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/CallToAction/styles.module.css"),ct={};ct.styleTagTransform=K(),ct.setAttributes=U(),ct.insert=H().bind(null,"head"),ct.domAPI=m(),ct.insertStyleElement=X();var pr=g()(Dt.A,ct);const La=Dt.A&&Dt.A.locals?Dt.A.locals:void 0;var bs=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function gs(a){var{label:p,icon:d,className:s}=a,n=bs(a,["label","icon","className"]);return(0,i.jsxs)("div",Object.assign({className:h()(La.callToAction,s)},(0,E.sg)(n),{children:[(0,i.jsx)(f.o.SansLabelL,{className:La.label,children:p}),(0,i.jsx)("span",{className:La.icon,children:d})]}))}var Ma;(function(a){a.Promo=ps,a.Action=fs,a.CallToAction=gs})(Ma||(Ma={}));var vs=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const hs=u.forwardRef((a,p)=>{var{size:d=24}=a,s=vs(a,["size"]);s.width=void 0,s.height=void 0;const n="-kebab-s";return typeof d=="number"&&(s.style||(s.style={}),s.style.width=d+"px",s.style.height=d+"px"),(0,i.jsx)("svg",Object.assign({ref:p,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var ys=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const xs=u.forwardRef((a,p)=>{var{size:d=24}=a,s=ys(a,["size"]);s.width=void 0,s.height=void 0;const n="-kebab-xs";return typeof d=="number"&&(s.style||(s.style={}),s.style.width=d+"px",s.style.height=d+"px"),(0,i.jsx)("svg",Object.assign({ref:p,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+n},s,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+n.substring(1)})}))});var Os=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const ws=(0,u.forwardRef)((a,p)=>{var{size:d=24}=a,s=Os(a,["size"]);return Number(d)>=20?(0,i.jsx)(hs,Object.assign({ref:p,size:d},s)):(0,i.jsx)(xs,Object.assign({ref:p,size:d},s))});var Be=r("./node_modules/.pnpm/@floating-ui+react@0.26.24_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),js=r("./node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),pt=r("./node_modules/.pnpm/@floating-ui+react-dom@2.1.8_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),Da=r("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),ks=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/usePopstateSubscription.js"),no=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const Xe={Left:"left",LeftStart:"left-start",LeftEnd:"left-end",Right:"right",RightStart:"right-start",RightEnd:"right-end",Top:"top",TopStart:"top-start",TopEnd:"top-end",Bottom:"bottom",BottomStart:"bottom-start",BottomEnd:"bottom-end"},qe={Click:"click",Hover:"hover",FocusVisible:"focusVisible",Focus:"focus",HoverAndFocusVisible:"hoverAndFocusVisible",HoverAndFocus:"hoverAndFocus",ClickAndFocusVisible:"clickAndFocusVisible"},Bt={Auto:"auto",Gte:"gte",Eq:"eq"},Nt={Auto:"auto",Lte:"lte",Eq:"eq"},Ss=[Xe.Top,Xe.Right,Xe.Bottom,Xe.Left];var lo=r("./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js");function Es({placement:a,x:p,y:d,ref:s}){if(!s.current)return{};const n=s.current.offsetWidth;switch(!0){case a.startsWith("top"):return{left:p,bottom:-n,transform:"rotate(-90deg)"};case a.startsWith("bottom"):return{left:p,top:-n,transform:"rotate(90deg)"};case a.startsWith("left"):return{top:d,right:-(n-1),transform:"rotate(180deg)"};case a.startsWith("right"):default:return{top:d,left:-(n-1)}}}const Ps=()=>(0,no.B)()?document.body:void 0,zs=a=>(a==null?void 0:a.offsetWidth)||0,Is=({children:a,getReferenceProps:p,setReference:d,validElementWrapperClassName:s,disableSpanWrapper:n})=>(0,u.isValidElement)(a)?(0,lo.isForwardRef)(a)||(0,lo.isValidElementType)(a)||n?(0,u.cloneElement)(a,Object.assign(Object.assign({},p(Object.assign(Object.assign({},a.props),{className:h()(a.props.className,s)}))),{ref:d,key:"cloned-element"})):(0,u.createElement)("span",Object.assign({className:s,ref:d},p(),{key:"wrapped-element"}),a):typeof a=="function"?(0,i.jsx)(u.Fragment,{children:a({getReferenceProps:p,ref:d})},"function-element"):(0,u.createElement)("span",Object.assign({className:s,ref:d},p(),{key:"wrapped-element"}),a),As=a=>{const p={useHoverTrigger:!1,useClickTrigger:!1,useFocusTrigger:!1,keyboardOnly:!0};switch(a){case qe.Hover:return Object.assign(Object.assign({},p),{useHoverTrigger:!0});case qe.Click:return Object.assign(Object.assign({},p),{useClickTrigger:!0});case qe.FocusVisible:return Object.assign(Object.assign({},p),{useFocusTrigger:!0});case qe.Focus:return Object.assign(Object.assign({},p),{useFocusTrigger:!0,keyboardOnly:!1});case qe.ClickAndFocusVisible:return Object.assign(Object.assign({},p),{useFocusTrigger:!0,useClickTrigger:!0});case qe.HoverAndFocusVisible:return Object.assign(Object.assign({},p),{useFocusTrigger:!0,useHoverTrigger:!0});case qe.HoverAndFocus:return Object.assign(Object.assign({},p),{useFocusTrigger:!0,useHoverTrigger:!0,keyboardOnly:!1});default:return p}},Ba=a=>a.stopPropagation(),Na=a=>a.stopPropagation();function Ts(a){return a.slice(0,2)==="on"?a.replace("on","").toLowerCase():a.toLowerCase()}function Cs(a){return Object.assign(Object.assign({},a),{nativeEvent:a})}function Ls(a){const p={};return Object.entries(a).forEach(([d,s])=>{p[d]=n=>{s(Cs(n))}}),p}function Ms({placement:a,x:p,y:d,arrowContainerClassName:s,arrowElementClassName:n,arrowRef:v}){return(0,i.jsx)("div",{className:s,ref:v,style:Es({x:p,y:d,placement:a,ref:v}),children:(0,i.jsx)("svg",{className:n,viewBox:"0 0 4 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M4 0V8L0.707106 4.70711C0.316582 4.31658 0.316583 3.68342 0.707107 3.29289L4 0Z"})})})}var Ra=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");function Ds({triggerClassName:a,offsetProp:p}){const[d,s]=(0,u.useState)(0);return(0,Ra.N)(()=>{const n=document.querySelector("."+String(a).split(/\s+/g).map(CSS.escape).join(".")),v=n?getComputedStyle(n):null,x=v?v.getPropertyValue("--offset"):null;if(p!==void 0){s(p);return}const k=document.createElement("span");k.style.width=x||"",document.body.appendChild(k);const w=getComputedStyle(k).width;document.body.removeChild(k);const y=parseInt(w||"");if(Number.isNaN(y)||y<1){s(0);return}s(y)},[p,a]),d}var Rt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.15.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"),ut={};ut.styleTagTransform=K(),ut.setAttributes=U(),ut.insert=H().bind(null,"head"),ut.domAPI=m(),ut.insertStyleElement=X();var fr=g()(Rt.A,ut);const io=Rt.A&&Rt.A.locals?Rt.A.locals:void 0;var co=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function po(a){var p,{className:d,triggerClassName:s,children:n,open:v,onOpenChange:x,placement:k=Xe.Top,hasArrow:w,offset:y,popoverContent:C,trigger:M,outsideClick:A,hoverDelayOpen:N,hoverDelayClose:F,triggerRef:R,widthStrategy:Z=Bt.Auto,heightStrategy:Q=Nt.Auto,closeOnEscapeKey:V=!0,triggerClickByKeys:ae=!0,fallbackPlacements:J=Ss,arrowContainerClassName:oe,arrowElementClassName:re,disableSpanWrapper:se=!1,closeOnPopstate:ce}=a,ee=co(a,["className","triggerClassName","children","open","onOpenChange","placement","hasArrow","offset","popoverContent","trigger","outsideClick","hoverDelayOpen","hoverDelayClose","triggerRef","widthStrategy","heightStrategy","closeOnEscapeKey","triggerClickByKeys","fallbackPlacements","arrowContainerClassName","arrowElementClassName","disableSpanWrapper","closeOnPopstate"]);const L=(0,u.useRef)(null),[D,W]=(0,Da.iC)(v,!1,x),G=(0,u.useRef)(D);(0,u.useEffect)(()=>{G.current=D},[D]);const q=(0,u.useCallback)((Y,...ue)=>{Y!==G.current&&(G.current=Y,W(Y,...ue))},[W]);(0,ks.V)(()=>D&&q(!1),!!ce);const Oe=(0,Be.fI)(),ze=Ds({triggerClassName:s,offsetProp:y}),ge=zs(L.current),{floatingStyles:Ce,refs:Se,context:de,middlewareData:Ee,placement:Le}=(0,Be.we)({nodeId:Oe,placement:k,open:D,onOpenChange:q,whileElementsMounted:js.ll,middleware:[(0,pt.BN)(),(0,pt.cY)(ze+ge),w&&(0,pt.UE)({element:L,padding:(ze+ge)*2}),(0,pt.UU)({fallbackPlacements:J}),(0,pt.Ej)({apply({rects:Y,availableHeight:ue}){const _e=Se.floating.current;if(_e){switch(Q){case Nt.Eq:_e.style.height=`${ue}px`;break;case Nt.Lte:_e.style.maxHeight=`${ue}px`;break;case Nt.Auto:default:break}switch(Z){case Bt.Eq:_e.style.width=`${Y.reference.width}px`,_e.style.minWidth="0px";break;case Bt.Gte:_e.style.width="auto",_e.style.minWidth=`${Y.reference.width}px`;break;case Bt.Auto:default:_e.style.width="auto",_e.style.minWidth="auto"}}}}),(0,pt.jD)()]}),Ie=(0,u.useCallback)(Y=>{Se.setReference(Y),R&&(typeof R=="function"?R(Y):R.current=Y)},[R,Se]),{useHoverTrigger:Qe,useFocusTrigger:vt,useClickTrigger:Ae,keyboardOnly:Ve}=As(M),Me=(0,Be.s9)(de,{outsidePress:A,ancestorScroll:!1,escapeKey:V}),Je=(0,Be.Mk)(de,{enabled:Qe,handleClose:(0,Be.iB)({requireIntent:!1}),delay:{open:N,close:F}}),Re=(0,Be.iQ)(de,{enabled:vt,visibleOnly:Ve}),fe=(0,Be.kp)(de,{enabled:Ae,keyboardHandlers:ae}),{getFloatingProps:De,getReferenceProps:pe}=(0,Be.bv)([Me,Je,Re,fe]),ht=(0,u.useCallback)((Y,ue)=>{typeof R=="object"&&(R!=null&&R.current)&&(Se.setReference(R.current),Object.entries(Y).map(([_e,Ne])=>{const le=Ts(_e);le&&(0,no.B)()&&(ue==="add"&&R.current.addEventListener(le,Ne),ue==="remove"&&R.current.removeEventListener(le,Ne))}))},[Se,R]);(0,u.useEffect)(()=>{if(n)return;const Y=Ls(pe());return ht(Y,"add"),()=>ht(Y,"remove")},[n,ht,pe]);const Oa=D&&(0,i.jsx)(Be.XF,{root:Ps(),children:(0,i.jsxs)("div",Object.assign({role:"presentation"},(0,E.z7)(ee),{className:h()(io.floating,d,{[io.floatingHidden]:!!(!((p=Ee.hide)===null||p===void 0)&&p.referenceHidden)}),ref:Se.setFloating,style:Ce,"data-placement":Le},De({onClick:Ba,onMouseDown:Ba,onMouseUp:Ba,onTouchStart:Na,onTouchEnd:Na,onTouchMove:Na}),{children:[C,Ee.arrow&&(0,i.jsx)(Ms,{placement:Le,x:Ee.arrow.x,y:Ee.arrow.y,arrowContainerClassName:oe,arrowElementClassName:re,arrowRef:L})]}))},"portal");return(0,i.jsxs)(Be.$c,{id:Oe,children:[n&&Is({validElementWrapperClassName:h()(s),getReferenceProps:pe,children:n,setReference:Ie,disableSpanWrapper:se}),Oa]})}function uo(a){var{children:p}=a,d=co(a,["children"]);return(0,Be.R1)()===null?(0,i.jsx)(Be.P6,{children:(0,i.jsx)(po,Object.assign({},d,{children:p}))}):(0,i.jsx)(po,Object.assign({},d,{children:p}))}var Kt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"),_t={};_t.styleTagTransform=K(),_t.setAttributes=U(),_t.insert=H().bind(null,"head"),_t.domAPI=m(),_t.insertStyleElement=X();var br=g()(Kt.A,_t);const _o=Kt.A&&Kt.A.locals?Kt.A.locals:void 0;var Bs=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function mo(a){var{content:p,trigger:d="click",placement:s="bottom-start",children:n,triggerRef:v,widthStrategy:x="gte",triggerClassName:k}=a,w=Bs(a,["content","trigger","placement","children","triggerRef","widthStrategy","triggerClassName"]);return!n&&!v?null:(0,i.jsx)(uo,Object.assign({placement:s,popoverContent:(0,i.jsx)("div",{className:_o.dropdownContainer,children:p}),trigger:d,triggerRef:v,hasArrow:!1,widthStrategy:x,triggerClassName:h()(_o.defaultTriggerClassName,k)},w,{children:n}))}var xt=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js");const ke={default:"~main",pinTop:"~pinTop",pinBottom:"~pinBottom",footer:"~footer",search:"~search",dropFocus:"~dropFocus"};var Wt=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css"),mt={};mt.styleTagTransform=K(),mt.setAttributes=U(),mt.insert=H().bind(null,"head"),mt.domAPI=m(),mt.insertStyleElement=X();var gr=g()(Wt.A,mt);const Ka=Wt.A&&Wt.A.locals?Wt.A.locals:void 0;var Ns=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const Rs=(0,u.forwardRef)((a,p)=>{var{className:d,iconPosition:s=$e.After,size:n=Pa.S,target:v=Pt.Blank,type:x=Et.Button,appearance:k=Ye.Neutral,fullWidth:w=!1,tabIndex:y}=a,C=Ns(a,["className","iconPosition","size","target","type","appearance","fullWidth","tabIndex"]);return(0,i.jsx)(za,Object.assign({},(0,E.z7)(C),rs(C),Ia(C),{className:h()(Ka.button,d),iconClassName:Ka.icon,iconPosition:s,labelClassName:Ka.label,size:n,fullWidth:w,target:v,type:x,appearance:k,tabIndex:y,ref:p}))});var Ut=r("./node_modules/.pnpm/@snack-uikit+divider@3.2.12_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),Wa=r("./node_modules/.pnpm/@snack-uikit+locale@1.0.1/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),Ks=r("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),Ot=r.n(Ks);const ft=[Xe.Top,Xe.Right,Xe.Bottom,Xe.Left];var Ua=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),bt={};bt.styleTagTransform=K(),bt.setAttributes=U(),bt.insert=H().bind(null,"head"),bt.domAPI=m(),bt.insertStyleElement=X();var vr=g()(Ua.A,bt);const Fa=Ua.A&&Ua.A.locals?Ua.A.locals:void 0;var B=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function t(a){var{tip:p,trigger:d="hoverAndFocusVisible",placement:s="top",children:n,triggerRef:v,disableMaxWidth:x=!1}=a,k=B(a,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!n&&!v?null:(0,i.jsx)(uo,Object.assign({placement:s,popoverContent:(0,i.jsx)("div",{className:Fa.tooltipContainer,"data-disable-max-width":x,children:p}),trigger:d,triggerRef:v,arrowContainerClassName:Fa.tooltipArrowContainer,arrowElementClassName:Fa.tooltipArrowElement,hasArrow:!0,fallbackPlacements:ft},k,{children:n}))}const c=a=>a?a.offsetHeight<a.scrollHeight||a.offsetWidth<a.scrollWidth:!1,l=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],e="...",o=({text:a,element:p,truncatedElement:d})=>{if(p&&d&&c(p)){const s=p.scrollWidth/a.length;let n=a;for(const{potentialDelimiterWidth:v,leftHalfDelta:x,rightHalfDelta:k}of l){const w=Math.floor((p.offsetWidth/s-v)/2),y=a.slice(0,w-x),C=a.slice(a.length-w+k,a.length);if(n=`${y}${e}${C}`,d.innerText=n,d.scrollWidth<=p.offsetWidth-1)break}return n}return a};var Ft=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),gt={};gt.styleTagTransform=K(),gt.setAttributes=U(),gt.insert=H().bind(null,"head"),gt.domAPI=m(),gt.insertStyleElement=X();var hr=g()(Ft.A,gt);const fo=Ft.A&&Ft.A.locals?Ft.A.locals:void 0;var Jr=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Yr(a){var{text:p,className:d,tooltipClassName:s,hideTooltip:n,placement:v,trigger:x}=a,k=Jr(a,["text","className","tooltipClassName","hideTooltip","placement","trigger"]);const[w,y]=(0,u.useState)(!1),[C,M]=(0,u.useState)(p),A=(0,u.useRef)(null),N=(0,u.useRef)(null);(0,u.useEffect)(()=>{const R=Ot()(()=>{M(o({element:A.current,truncatedElement:N.current,text:p})),y(c(A.current))},50);R();const Z=new ResizeObserver(R);return A.current&&Z.observe(A.current),()=>{Z.disconnect()}},[w,p,n]);const F=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{ref:A,className:fo.fullText,"data-test-id":"full-text",children:p}),(0,i.jsx)("span",{ref:N,className:fo.truncatedText,"data-test-id":"truncated-text",children:C})]});return(0,i.jsx)("span",Object.assign({className:h()(fo.wrapper,d)},(0,E.z7)(k),{children:w&&!n?(0,i.jsx)(t,{tip:p,placement:v,hoverDelayOpen:500,triggerClassName:fo.textContainer,className:s,trigger:x,children:F}):F}))}var bo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),Ht={};Ht.styleTagTransform=K(),Ht.setAttributes=U(),Ht.insert=H().bind(null,"head"),Ht.domAPI=m(),Ht.insertStyleElement=X();var $l=g()(bo.A,Ht);const go=bo.A&&bo.A.locals?bo.A.locals:void 0;var $r=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function qr(a){var{text:p,className:d,tooltipClassName:s,hideTooltip:n,maxLines:v=1,placement:x,trigger:k}=a,w=$r(a,["text","className","tooltipClassName","hideTooltip","maxLines","placement","trigger"]);const y=(0,u.useRef)(null),[C,M]=(0,u.useState)(!1),A=(0,u.useCallback)(()=>{M(c(y.current))},[]);(0,Ra.N)(()=>{y.current&&A()},[p,A]),(0,u.useEffect)(()=>{const F=Ot()(()=>{A()},50),R=new ResizeObserver(F);return y.current&&(A(),R.observe(y.current)),()=>{R.disconnect()}},[C,n,A]);const N=(0,i.jsx)("span",Object.assign({ref:y,className:h()(v>1?go.text2AndMoreLines:go.text1Line,d,{[go.ellipsis]:!y.current||C}),style:{"--max-lines":v}},(0,E.z7)(w),{children:p}));return C&&!n?(0,i.jsx)(t,{tip:p,placement:x,hoverDelayOpen:500,className:s,triggerClassName:go.tooltipTrigger,trigger:k,children:N}):N}const Ws={Middle:"middle",End:"end"};var en=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Xt(a){var{variant:p=Ws.End}=a,d=en(a,["variant"]);switch(p){case Ws.Middle:return(0,i.jsx)(Yr,Object.assign({},d));case Ws.End:default:return(0,i.jsx)(qr,Object.assign({},d))}}var tn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const yr=(0,u.createContext)({flattenItems:{},focusFlattenItems:{},firstItemId:ke.default});function Ge(){return(0,u.useContext)(yr)}function an({size:a,marker:p,flattenItems:d,focusFlattenItems:s,contentRender:n,firstItemId:v,virtualized:x}){return{size:a,marker:p,contentRender:n,flattenItems:d,focusFlattenItems:s,firstItemId:v,virtualized:x}}function on(a){var{children:p}=a,d=tn(a,["children"]);return(0,i.jsx)(yr.Provider,{value:an(d),children:p})}const Us=a=>{a.stopPropagation()},sn={s:"xs",m:"s",l:"m"};var vo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css"),Qt={};Qt.styleTagTransform=K(),Qt.setAttributes=U(),Qt.insert=H().bind(null,"head"),Qt.domAPI=m(),Qt.insertStyleElement=X();var ql=g()(vo.A,Qt);const Ha=vo.A&&vo.A.locals?vo.A.locals:void 0;function xr({label:a,truncate:p,divider:d,mode:s="secondary",selectButton:n}){const{size:v="s"}=Ge(),{t:x}=(0,Wa.Ym)("List"),k=(0,u.useMemo)(()=>{if(!n)return null;const{onClick:w,checked:y,itemRef:C,label:M}=n;return(0,i.jsx)("span",{className:Ha.selectButton,"data-size":v,"data-weight":d&&s||void 0,children:(0,i.jsx)(Rs,{size:sn[v],tabIndex:0,onClick:A=>{w==null||w(A),A.preventDefault(),A.stopPropagation()},onFocus:Us,ref:C,label:M!=null?M:x(y?"groupSelectButton.reset":"groupSelectButton.select")})})},[d,s,n,v,x]);return a?(0,i.jsxs)("div",{className:Ha.separatorWithLabel,"data-size":v,children:[(0,i.jsx)("span",{className:Ha.label,"data-mode":s,children:(0,i.jsx)(Xt,{variant:p==null?void 0:p.variant,text:a,maxLines:1})}),(0,i.jsxs)("div",{style:{flex:1},children:[k,d&&(0,i.jsx)(Ut.c,{weight:s==="primary"?"regular":"light",className:Ha.divider})]})]}):d?(0,i.jsx)("div",{className:Ha.separatorWithoutLabel,"data-size":v,children:(0,i.jsx)(Ut.c,{weight:"regular"})}):null}var rn;const nn=a=>`${ke.footer}__${a}`,Or=(a,p)=>[a,p].join("-"),ei=a=>Or(rn.default,a);var ln=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const ho=(0,u.createContext)({value:void 0,onChange:void 0,mode:void 0});function dn(a){return"mode"in a&&a.mode==="multiple"}function cn(a){return"mode"in a&&a.mode==="single"}function pn({children:a}){return(0,i.jsx)(ho.Provider,{value:{mode:"none"},children:a})}function un({value:a,defaultValue:p,onChange:d,children:s}){const[n,v]=(0,xt.I)({value:a,defaultValue:p,onChange:d}),x=(0,u.useCallback)(k=>v(w=>{if(k!==w)return k}),[v]);return(0,i.jsx)(ho.Provider,{value:{value:n,onChange:x,mode:"single",isSelectionSingle:!0,isSelectionMultiple:!1,setValue:v},children:s})}function _n({value:a,defaultValue:p,onChange:d,children:s}){const[n,v]=(0,xt.I)({value:a,defaultValue:p,onChange:d}),x=(0,u.useCallback)(k=>{v(w=>{if(Array.isArray(w))return w.includes(k)?w.filter(y=>y!==k):w.concat(k);if(w===void 0)return Array.isArray(k)?k:[k]})},[v]);return(0,i.jsx)(ho.Provider,{value:{value:n,onChange:x,mode:"multiple",isSelectionSingle:!1,isSelectionMultiple:!0,setValue:v},children:s})}function mn(a){var{children:p}=a,d=ln(a,["children"]);return cn(d)?(0,i.jsx)(un,Object.assign({},d,{children:p})):dn(d)?(0,i.jsx)(_n,Object.assign({},d,{children:p})):(0,i.jsx)(pn,{children:p})}function Vt(){return(0,u.useContext)(ho)}var fn=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),bn=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),yo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css"),Zt={};Zt.styleTagTransform=K(),Zt.setAttributes=U(),Zt.insert=H().bind(null,"head"),Zt.domAPI=m(),Zt.insertStyleElement=X();var ti=g()(yo.A,Zt);const Fs=yo.A&&yo.A.locals?yo.A.locals:void 0;var gn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function vn(a){var{children:p,expanded:d,className:s,header:n}=a,v=gn(a,["children","expanded","className","header"]);return(0,i.jsxs)("div",Object.assign({className:h()(Fs.accordion,s),role:"menuitem","aria-haspopup":!0,"aria-expanded":d},(0,E.z7)(v),{children:[n,(0,i.jsx)("div",{className:Fs.contentWrapper,"aria-hidden":!d,children:(0,i.jsx)("div",{className:Fs.content,"data-content":!0,children:d&&p})})]}))}const wr=(0,u.createContext)({}),jr=()=>(0,u.useContext)(wr),kr=(0,u.createContext)({}),Sr=()=>(0,u.useContext)(kr);var hn=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/minus/index.js");const yn={Checkbox:"checkbox",Radio:"radio"},Xa={S:"s",M:"m"},ai=null,oi=null;function Hs(a){return Object.entries(a).reduce(function(p,[d,s]){return p[`data-${d.toLowerCase()}`]=s,p},{})}function xn(a){switch(a){case Xa.S:return 16;case Xa.M:default:return 24}}var xo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css"),Gt={};Gt.styleTagTransform=K(),Gt.setAttributes=U(),Gt.insert=H().bind(null,"head"),Gt.domAPI=m(),Gt.insertStyleElement=X();var si=g()(xo.A,Gt);const Er=xo.A&&xo.A.locals?xo.A.locals:void 0;var On=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const Pr=(0,u.forwardRef)(function(p,d){var{render:s,checked:n,defaultChecked:v,onChange:x,onBlur:k,onFocus:w,disabled:y,className:C,size:M=Xa.M,mode:A=yn.Checkbox,onKeyUp:N,"data-test-id":F}=p,R=On(p,["render","checked","defaultChecked","onChange","onBlur","onFocus","disabled","className","size","mode","onKeyUp","data-test-id"]);const[Z,Q]=(0,Da.iC)(n,!!v,x),[V,ae]=(0,u.useState)(!1),[J,oe]=(0,u.useState)(!1),re={disabled:!!y,focusVisible:V,checked:Z,hover:J,size:M};return(0,i.jsxs)("span",Object.assign({role:A,className:h()(C,Er.toggleLayout),"data-size":M,"data-test-id":F,onMouseEnter:()=>oe(!0),onMouseLeave:()=>oe(!1),onKeyUp:N},Hs(re),{children:[s(re),(0,i.jsx)("input",Object.assign({},R,{"data-test-id":`${F}-native-input`,ref:d,type:A,className:Er.togglePrivate,checked:Z,disabled:y,onChange:se=>Q(se.target.checked),onFocus:se=>{ae(se.target.matches(":focus-visible")),w==null||w(se)},onBlur:se=>{ae(!1),k==null||k(se)}}))]}))});var Oo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/styles.module.css"),Jt={};Jt.styleTagTransform=K(),Jt.setAttributes=U(),Jt.insert=H().bind(null,"head"),Jt.domAPI=m(),Jt.insertStyleElement=X();var ri=g()(Oo.A,Jt);const Xs=Oo.A&&Oo.A.locals?Oo.A.locals:void 0;var wn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function jn(a){var{inputRef:p,indeterminate:d,indeterminateDefault:s,onChange:n,"data-test-id":v,size:x=Xa.M}=a,k=wn(a,["inputRef","indeterminate","indeterminateDefault","onChange","data-test-id","size"]);const w=(0,u.useRef)(null),y=(0,j.A)(w,p),[C,M]=(0,Da.iC)(d,s),A=(0,u.useCallback)(F=>{n==null||n(F),M(!1)},[n,M]);(0,u.useEffect)(()=>{w.current&&(w.current.indeterminate=!!C)},[w,C]);const N=(0,u.useMemo)(()=>xn(x),[x]);return(0,i.jsx)(Pr,Object.assign({},k,{size:x,onChange:A,"data-test-id":v,ref:y,render:function(R){const Z=Hs(Object.assign(Object.assign({},R),{indeterminate:!!C}));return(0,i.jsxs)("div",Object.assign({className:Xs.container},Z,{children:[(0,i.jsx)("div",Object.assign({className:Xs.box},Z)),(0,i.jsx)("div",Object.assign({className:Xs.icon},Z,{children:C?(0,i.jsx)(hn.A,{size:N}):(0,i.jsx)(Ea.A,{size:N})}))]}))}}))}var Yt=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),wo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"),$t={};$t.styleTagTransform=K(),$t.setAttributes=U(),$t.insert=H().bind(null,"head"),$t.domAPI=m(),$t.insertStyleElement=X();var ni=g()(wo.A,$t);const kn=wo.A&&wo.A.locals?wo.A.locals:void 0;function zr(){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:kn.spinner,children:(0,i.jsx)("path",{d:"M5 8C5 6.34315 6.34315 5 8 5",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round"})})}var jo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"),qt={};qt.styleTagTransform=K(),qt.setAttributes=U(),qt.insert=H().bind(null,"head"),qt.domAPI=m(),qt.insertStyleElement=X();var li=g()(jo.A,qt);const ea=jo.A&&jo.A.locals?jo.A.locals:void 0;var Sn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function En(a){var{inputRef:p,"data-test-id":d,showIcon:s,loading:n,size:v=Xa.M}=a,x=Sn(a,["inputRef","data-test-id","showIcon","loading","size"]);return(0,i.jsx)(Pr,Object.assign({},x,{size:v,"data-test-id":d,ref:p,render:function(w){const y=Hs(w);return(0,i.jsxs)("div",Object.assign({className:ea.container},y,{children:[(0,i.jsx)("div",Object.assign({className:ea.box},y)),(0,i.jsxs)("div",Object.assign({className:ea.containerFlag},y,{children:[(0,i.jsx)("div",Object.assign({className:ea.flag},y)),(s||n)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",Object.assign({className:ea.flag_icon_off},y,{children:n?(0,i.jsx)(zr,{}):(0,i.jsx)(Yt.A,{size:16})})),(0,i.jsx)("div",Object.assign({className:ea.flag_icon_on},y,{children:n?(0,i.jsx)(zr,{}):(0,i.jsx)(Ea.A,{size:16})}))]})]}))]}))}}))}var ko=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css"),ta={};ta.styleTagTransform=K(),ta.setAttributes=U(),ta.insert=H().bind(null,"head"),ta.domAPI=m(),ta.insertStyleElement=X();var ii=g()(ko.A,ta);const Qa=ko.A&&ko.A.locals?ko.A.locals:void 0;var Pn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const zn={option:1,description:2,variant:"end"};function In(a){var{truncate:p,caption:d,description:s,option:n,className:v,disabled:x}=a,k=Pn(a,["truncate","caption","description","option","className","disabled"]);const{size:w="s"}=Ge(),y=(0,u.useMemo)(()=>Object.assign(Object.assign({},zn),p),[p]);return(0,i.jsxs)("div",Object.assign({className:h()(Qa.content,v)},(0,E.z7)(k),{"data-size":w!=null?w:"s","data-disabled":x||void 0,children:[(0,i.jsxs)("div",{className:Qa.headline,children:[(0,i.jsx)("div",{className:Qa.label,children:(0,i.jsx)(Xt,{variant:y.variant,text:String(n),maxLines:y.option,"data-test-id":"list__base-item-option"})}),d&&(0,i.jsx)("span",{className:Qa.caption,children:d})]}),s&&(0,i.jsx)("div",{className:Qa.description,children:(0,i.jsx)(Xt,{text:s,maxLines:y.description,"data-test-id":"list__base-item-description"})})]}))}const Ir=(0,u.createContext)({closeDroplist:()=>{},closeDroplistOnItemClick:!1}),An=()=>(0,u.useContext)(Ir);var So=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),aa={};aa.styleTagTransform=K(),aa.setAttributes=U(),aa.insert=H().bind(null,"head"),aa.domAPI=m(),aa.insertStyleElement=X();var di=g()(So.A,aa);const Qs=So.A&&So.A.locals?So.A.locals:void 0;var Tn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Cn(a){return a&&!("items"in a)}function Ln(a){return a&&"items"in a&&a.type==="collapse"}function Ar(a){return a&&"items"in a&&a.type==="next-list"}function Eo(a){return a&&"items"in a&&a.type==="group"}function Tr(a){return a&&"items"in a&&a.type==="group-select"}function Mn(a){return typeof a=="object"&&a.option!==void 0}const ci=null,pi=null,ui=null,_i=null;function Vs({items:a,prefix:p,parentId:d}){const s={},n={};function v({item:M,idx:A,prefix:N,parentId:F=ke.default}){var R,Z;const Q=N!==void 0?Or(N,A):String(A),V=(R=Eo(M)?void 0:M.id)!==null&&R!==void 0?R:Q;if(Cn(M))return s[V]=Object.assign(Object.assign({},M),{items:[],allChildIds:[],id:V}),n[Q]={key:Q,originalId:V,id:Q,disabled:M.disabled,parentId:F,items:[],allChildIds:[],itemRef:M.itemRef||(0,u.createRef)()},{id:V,children:[V],autoId:Q,focusChildren:[Q]};let ae=[],J=[];const oe=[],re=[],{items:se}=M,ce=Tn(M,["items"]),ee=Eo(M)?F!=null?F:ke.default:Q,L=se.filter(G=>!G.hidden);for(let G=0;G<L.length;G++){const{id:q,children:Oe,autoId:ze,focusChildren:ge}=v({item:L[G],idx:G,prefix:V,parentId:ee});re.push(ze),oe.push(q),ae=ae.concat(Oe),J=J.concat(ge)}const D=[...new Set(ae.concat(oe))],W=[...new Set(J.concat(re))];return s[V]=Object.assign(Object.assign({},ce),{id:V,items:[],allChildIds:D}),n[Q]={key:Q,originalId:V,id:Q,parentId:F,items:re,allChildIds:W,disabled:(M.type==="collapse"||M.type==="next-list")&&M.disabled,type:M.type,itemRef:Eo(M)?void 0:(Z=M.itemRef)!==null&&Z!==void 0?Z:(0,u.createRef)()},{id:V,children:D,autoId:Q,focusChildren:W}}const x=[],k=[];let w=[];const y=a.filter(M=>!M.hidden);for(let M=0;M<y.length;M++){const{id:A,children:N,autoId:F}=v({item:y[M],idx:M,prefix:p,parentId:d});k.push(F),x.push(A),w.push(A),w=w.concat(N)}const C=[...new Set(w)];return{focusCloseChildIds:k,allChildIds:C,flattenItems:s,focusFlattenItems:n}}function Cr({focusFlattenItems:a,focusCloseChildIds:p,openCollapseItems:d,isSelectionMultiple:s}){const n=[],v=[];function x(k){k.forEach(w=>{const y=a[w];if(y.type==="group"){x(y.items);return}if(!y.disabled){if(y.type==="group-select"){s&&n.push(y.id),x(y.items);return}n.push(y.id),y.type&&(v.push(w),d.includes(y.originalId)&&x(y.items))}})}return x(p),{ids:n,expandedIds:v}}const Dn={s:"s",m:"s",l:"m"};var Po=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css"),oa={};oa.styleTagTransform=K(),oa.setAttributes=U(),oa.insert=H().bind(null,"head"),oa.domAPI=m(),oa.insertStyleElement=X();var mi=g()(Po.A,oa);const wt=Po.A&&Po.A.locals?Po.A.locals:void 0;var Bn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Zs(a){var p,{beforeContent:d,afterContent:s,content:n,onClick:v,onMouseDown:x,id:k,expandIcon:w,disabled:y,open:C,itemRef:M,switch:A,showSwitchIcon:N,onKeyDown:F,onFocus:R,indeterminate:Z,checked:Q,onSelect:V,onOpenNestedList:ae,isParentNode:J,className:oe,inactive:re,itemWrapRender:se}=a,ce=Bn(a,["beforeContent","afterContent","content","onClick","onMouseDown","id","expandIcon","disabled","open","itemRef","switch","showSwitchIcon","onKeyDown","onFocus","indeterminate","checked","onSelect","onOpenNestedList","isParentNode","className","inactive","itemWrapRender"]);const ee=!re,{size:L="s",marker:D,contentRender:W,firstItemId:G,focusFlattenItems:q}=Ge(),{level:Oe=0}=jr(),{closeDroplist:ze,closeDroplistOnItemClick:ge}=An(),{value:Ce,onChange:Se,mode:de,isSelectionSingle:Ee,isSelectionMultiple:Le}=Vt(),Ie=Ee?Q!=null?Q:Ce===k:Q!=null?Q:Ce==null?void 0:Ce.includes(k!=null?k:""),Qe=()=>{Se==null||Se(k)},vt=pe=>{y||x==null||x(pe)},Ae=pe=>{R==null||R(pe),pe.stopPropagation()},Ve=()=>{J&&V?V():Qe()},Me=pe=>{y||(v==null||v(pe),ee&&(J||Qe()),!Le&&ge&&ze())},Je=pe=>{if(F==null||F(pe),pe.key==="ArrowRight"&&ae){ae(pe),pe.preventDefault(),pe.stopPropagation();return}(pe.code==="Space"||pe.key==="Enter"||pe.key===" ")&&(Le&&J&&V&&V(),!J&&Qe(),!J&&(Me==null||Me(pe)),pe.stopPropagation(),pe.preventDefault())},Re=pe=>{J&&pe.stopPropagation()},fe=(0,E.z7)(ce),De=(0,i.jsx)("div",{className:h()(Qs.itemWrapper,wt.innerWrapper,oe),"data-inactive":re||void 0,"data-disabled":y||void 0,"data-variant":de||void 0,"data-checked":J&&Ie||!J&&Ie&&!A||void 0,children:(0,i.jsxs)("li",{"data-type":"outside",role:"menuitem","data-test-id":fe["data-test-id"]||"list__base-item_"+k,ref:M,className:h()(Qs.listItem,wt.droplistItem),"data-size":L,onClick:Me,onMouseDown:vt,tabIndex:G&&k===q[G].originalId?0:-1,"data-non-pointer":re&&!v,"data-variant":de||void 0,"data-open":C||void 0,onKeyDown:Je,onFocus:Ae,style:{"--level":Oe},"data-level-one":Oe===1||void 0,"data-level-more-one":Oe>1||void 0,"data-checked":J&&(Z||Ie)||Ie&&!A||void 0,children:[!A&&Ee&&D&&!J&&ee&&(0,i.jsx)("div",{className:wt.markerContainer,"data-test-id":"list__base-item-marker"}),!A&&Le&&ee&&(0,i.jsx)("div",{className:wt.checkbox,children:(0,i.jsx)(jn,{size:Dn[L!=null?L:"s"],disabled:y,tabIndex:-1,onChange:J?Ve:void 0,checked:Ie,"data-test-id":"list__base-item-checkbox",onClick:Re,indeterminate:Z})}),d&&(0,i.jsx)("div",{className:wt.beforeContent,children:d}),n&&Mn(n)?(p=W==null?void 0:W({id:k,content:n,disabled:y}))!==null&&p!==void 0?p:(0,i.jsx)(In,Object.assign({disabled:y},n)):(0,i.jsxs)("div",{className:wt.content,children:[" ",n," "]}),s,A&&ee&&(0,i.jsx)(En,{disabled:y,checked:Ie,"data-test-id":"list__base-item-switch",showIcon:N}),!A&&w&&(0,i.jsx)("span",{className:wt.expandableIcon,children:w})]})});return se?se(De):De}var Nn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Rn(a){var{id:p,disabled:d,allChildIds:s,items:n}=a,v=Nn(a,["id","disabled","allChildIds","items"]);const{level:x=0}=jr(),{openCollapseItems:k=[],toggleOpenCollapseItem:w}=Sr(),{value:y,isSelectionSingle:C,isSelectionMultiple:M}=Vt(),{indeterminate:A,handleOnSelect:N,checked:F}=er({items:n,id:p,disabled:d,allChildIds:s}),R=!!k.includes(p!=null?p:""),Z=!!(A&&!R&&C&&y&&s.includes(y)||M&&F),Q=(0,u.useCallback)(()=>{w==null||w(p!=null?p:"")},[p,w]),V=Ya(n),ae=J=>{var oe;w==null||w(p!=null?p:""),(oe=v.onClick)===null||oe===void 0||oe.call(v,J)};return(0,i.jsx)(vn,{header:(0,i.jsx)(Zs,Object.assign({},v,{id:p,disabled:d,expandIcon:R?(0,i.jsx)(fn.A,{}):(0,i.jsx)(bn.A,{}),onClick:ae,isParentNode:!0,onOpenNestedList:Q,checked:Z,indeterminate:A,onSelect:d?void 0:N})),expanded:R,"data-test-id":`list__accordion-item-${p}`,children:(0,i.jsx)(wr.Provider,{value:{level:x+1},children:V})})}function Kn({label:a,truncate:p,divider:d,items:s,mode:n,id:v,itemRef:x,allChildIds:k,selectButtonLabel:w}){const{indeterminate:y,checked:C,handleOnSelect:M}=er({items:s,id:v,disabled:!1,allChildIds:k}),A=Ya(s);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(xr,{label:a,truncate:p,divider:d,mode:n,selectButton:{indeterminate:y,checked:C,itemRef:x,onClick:M,label:w}}),A]})}var Wn=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js");const Lr=(0,u.createContext)({handleListKeyDownFactory:()=>()=>{}}),Un=()=>(0,u.useContext)(Lr);var Fn=r("./node_modules/.pnpm/@tanstack+react-virtual@3.11.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@tanstack/react-virtual/dist/esm/index.js"),Hn=r("./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),Xn=r("./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),Mr=r("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js");function Qn({noDataState:a,noResultsState:p,errorDataState:d}){const{t:s}=(0,Wa.Ym)("List");return(0,u.useMemo)(()=>{const n=Object.assign({icon:{icon:Mr.A,appearance:"neutral",decor:!0},description:s("noData.description")},a),v=Object.assign({description:s("noResults.description")},p),x=Object.assign({icon:{icon:Yt.A,appearance:"neutral",decor:!0},description:s("errorData.description")},d);return{noDataState:n,noResultsState:v,errorDataState:x}},[d,a,p,s])}const Dr={S:"s",M:"m",L:"l"},Vn={Vertical:"vertical",Horizontal:"horizontal"},sa={icon:"info-block__icon",title:"info-block__title",description:"info-block__description",footer:"info-block__footer",primaryButton:"info-block__primary-button",secondaryButton:"info-block__secondary-button"},Br=(0,u.createContext)({size:Dr.S});function Zn(){return(0,u.useContext)(Br)}function Nr({Button:a,tooltip:p}){return p?function(s){return(0,i.jsx)(t,Object.assign({},p,{children:(0,i.jsx)(a,Object.assign({},s))}))}:a}var zo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.41_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"),ra={};ra.styleTagTransform=K(),ra.setAttributes=U(),ra.insert=H().bind(null,"head"),ra.domAPI=m(),ra.insertStyleElement=X();var fi=g()(zo.A,ra);const Gn=zo.A&&zo.A.locals?zo.A.locals:void 0;function Jn({primaryButton:a,secondaryButton:p,className:d}){const s=Nr({Button:Ta,tooltip:a.tooltip}),n=Nr({Button:ro,tooltip:p==null?void 0:p.tooltip}),{size:v}=Zn();return(0,i.jsxs)("div",{className:h()(Gn.infoBlockFooter,d),children:[p&&(0,i.jsx)(n,Object.assign({},p,{size:v,"data-test-id":p["data-test-id"]||sa.secondaryButton})),(0,i.jsx)(s,Object.assign({},a,{size:v,"data-test-id":a["data-test-id"]||sa.primaryButton}))]})}var Rr=r("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.12_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),Io=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.41_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"),na={};na.styleTagTransform=K(),na.setAttributes=U(),na.insert=H().bind(null,"head"),na.domAPI=m(),na.insertStyleElement=X();var bi=g()(Io.A,na);const la=Io.A&&Io.A.locals?Io.A.locals:void 0;var Yn=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function $n(a){var p,d,{title:s,description:n,icon:v,size:x=Dr.S,footer:k,align:w=Vn.Vertical,className:y}=a,C=Yn(a,["title","description","icon","size","footer","align","className"]);return(0,i.jsx)(Br.Provider,{value:{size:x},children:(0,i.jsxs)("div",Object.assign({className:h()(la.infoBlock,y),"data-size":x,"data-align":w},(0,E.z7)(C),{children:[v&&(0,i.jsx)(Rr.I,{icon:v.icon,appearance:(p=v.appearance)!==null&&p!==void 0?p:"primary",decor:(d=v.decor)!==null&&d!==void 0?d:!0,size:x,"data-test-id":sa.icon}),(0,i.jsxs)("div",{className:la.contentLayout,children:[(0,i.jsxs)("div",{className:la.textWrap,children:[s&&(0,i.jsx)(f.o,{family:"sans",purpose:"title",size:x,className:la.title,"data-test-id":sa.title,children:s}),n&&(0,i.jsx)(f.o,{family:"sans",purpose:"body",size:x,className:la.description,"data-test-id":sa.description,children:n})]}),k&&(0,i.jsx)("div",{className:la.footer,"data-test-id":sa.footer,children:k})]})]}))})}const Ao=$n;Ao.Footer=Jn;var To=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css"),ia={};ia.styleTagTransform=K(),ia.setAttributes=U(),ia.insert=H().bind(null,"head"),ia.domAPI=m(),ia.insertStyleElement=X();var gi=g()(To.A,ia);const Gs=To.A&&To.A.locals?To.A.locals:void 0;function qn({dataError:a,dataFiltered:p,hasNoItems:d,emptyStates:s,loading:n,size:v}){return n?null:a?(0,i.jsx)("div",{className:Gs.listEmptyStateWrapper,children:(0,i.jsx)(Ao,Object.assign({},s.errorDataState,{size:v,align:"vertical"}))}):p&&d?(0,i.jsx)("div",{className:Gs.listEmptyStateWrapper,children:(0,i.jsx)(Ao,Object.assign({},s.noResultsState,{size:v,align:"vertical","data-test-id":"list__no-results"}))}):!p&&d?(0,i.jsx)("div",{className:Gs.listEmptyStateWrapper,children:(0,i.jsx)(Ao,Object.assign({},s.noDataState,{size:v,align:"vertical","data-test-id":"list__no-data"}))}):null}var Co=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css"),da={};da.styleTagTransform=K(),da.setAttributes=U(),da.insert=H().bind(null,"head"),da.domAPI=m(),da.insertStyleElement=X();var vi=g()(Co.A,da);const Kr=Co.A&&Co.A.locals?Co.A.locals:void 0;function el({children:a}){const{size:p="s"}=Ge();return a?(0,i.jsxs)("div",{className:h()(Kr.pinTopItem),"data-size":p,"data-test-id":"list__pin-top-group-item",children:[(0,i.jsx)("div",{children:a}),(0,i.jsx)(Ut.c,{weight:"regular"})]}):null}function tl({children:a}){const{size:p="s"}=Ge();return a?(0,i.jsxs)("div",{className:h()(Kr.pinBottomItem),"data-size":p,"data-test-id":"list__pin-bottom-group-item",children:[(0,i.jsx)(Ut.c,{weight:"regular"}),(0,i.jsx)("div",{children:a})]}):null}var Js=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js");const Ys={S:"s",M:"m",L:"l"},hi=null,Va={S:"s",M:"m"},al={[Ys.S]:Va.S,[Ys.M]:Va.M,[Ys.L]:Va.M};var Lo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"),ca={};ca.styleTagTransform=K(),ca.setAttributes=U(),ca.insert=H().bind(null,"head"),ca.domAPI=m(),ca.insertStyleElement=X();var yi=g()(Lo.A,ca);const ol=Lo.A&&Lo.A.locals?Lo.A.locals:void 0,sl=(0,u.forwardRef)(({size:a,onClick:p,tabIndex:d=-1,onKeyDown:s,onMouseDown:n},v)=>{const x=k=>{k.stopPropagation(),p(k)};return(0,i.jsxs)("button",{className:ol.buttonClearValue,"data-size":a,onClick:x,"data-test-id":"button-clear-value",type:"button",ref:v,onKeyDown:s,onMouseDown:n,tabIndex:d,children:[a===Va.S&&(0,i.jsx)(Yt.A,{size:16}),a===Va.M&&(0,i.jsx)(Yt.A,{})]})});var rl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function nl({clearButtonRef:a,showClearButton:p,size:d,onClear:s,onDown:n}){const v=(0,Js.A)(s),x=(0,Js.A)(n!=null?n:(()=>{}));return(0,u.useMemo)(()=>({id:"clear",active:!0,ref:a,show:p,render:k=>{var{key:w}=k,y=rl(k,["key"]);const C=M=>{y.onClick(M),v(M)};return(0,i.jsx)(sl,Object.assign({},y,{onMouseDown:x,size:al[d],onClick:C}),w)}}),[a,v,x,p,d])}function ll(a){var p;const d=(p=a==null?void 0:a.value.length)!==null&&p!==void 0?p:0;a==null||a.setSelectionRange(d,d)}function Wr(a){a==null||a.setSelectionRange(0,a==null?void 0:a.value.length)}function Za(a){setTimeout(a,0)}function il(a){return(a==null?void 0:a.selectionStart)===0}function dl(a){var p;return(a==null?void 0:a.selectionStart)===((p=a==null?void 0:a.value)===null||p===void 0?void 0:p.length)}function cl({inputRef:a,setInputFocus:p=()=>{var k;return(k=a.current)===null||k===void 0?void 0:k.focus()},postfixButtons:d,prefixButtons:s=[],onButtonKeyDown:n=()=>{},readonly:v,submitKeys:x}){const[k,w]=(0,u.useState)(0),y=(0,Js.A)(n),C=(0,u.useCallback)(()=>s.map(()=>-1),[s]),[M,A]=(0,u.useState)(C),N=(0,u.useCallback)(()=>d.map(()=>-1),[d]),[F,R]=(0,u.useState)(N),Z=(0,u.useCallback)((L,D)=>{const W=D==="ArrowLeft"?-1:1,G=q=>D==="ArrowLeft"?q>=0:q<s.length;for(let q=L+W;G(q);q+=W)if(s[q].active&&s[q].show)return q;return L},[s]),Q=(0,u.useCallback)((L,D)=>{const W=D==="ArrowLeft"?-1:1,G=q=>D==="ArrowLeft"?q>=0:q<d.length;for(let q=L+W;G(q);q+=W)if(d[q].active&&d[q].show)return q;return L},[d]),V=(0,u.useCallback)(()=>{w(0),A(C),R(N)},[C,N]),ae=(0,u.useCallback)(()=>{V(),p()},[V,p]),J=(0,u.useCallback)(L=>{var D,W;w(-1),A(G=>G.map((q,Oe)=>Oe===L?0:-1)),R(N),!((D=s[L])===null||D===void 0)&&D.active&&((W=s[L].ref.current)===null||W===void 0||W.focus())},[N,s]),oe=(0,u.useCallback)(L=>{var D,W;w(-1),A(C),R(G=>G.map((q,Oe)=>Oe===L?0:-1)),!((D=d[L])===null||D===void 0)&&D.active&&((W=d[L].ref.current)===null||W===void 0||W.focus())},[C,d]),re=(0,u.useCallback)(L=>{if(V(),L.key==="ArrowRight"&&(v||dl(a.current))){const D=Q(-1,L.key);D>=0&&oe(D)}if(L.key==="ArrowLeft"&&(v||il(a.current))){const D=Z(s.length,L.key);D>=0&&J(D)}},[Q,Z,oe,J,a,s.length,v,V]),se=(0,u.useCallback)(L=>D=>{if(D.key==="ArrowRight"){const W=Z(L,D.key);L===W?(D.preventDefault(),ae(),v&&Za(()=>Wr(a.current))):J(W)}D.key==="ArrowLeft"&&L<=s.length-1&&J(Z(L,D.key)),x.includes(D.key)&&Za(()=>V()),y==null||y(D)},[y,s.length,Z,J,ae,a,v,V,x]),ce=(0,u.useCallback)(L=>D=>{if(D.key==="ArrowLeft"){const W=Q(L,D.key);L===W?(D.preventDefault(),ae(),v&&Za(()=>Wr(a.current))):oe(W)}D.key==="ArrowRight"&&L<=d.length-1&&oe(Q(L,D.key)),x.includes(D.key)&&Za(()=>V()),y==null||y(D)},[y,d.length,Q,oe,ae,a,v,V,x]),ee=(0,u.useCallback)(()=>{Za(()=>V())},[V]);return{inputTabIndex:k,onInputKeyDown:re,setInitialTabIndices:V,prefixButtons:s.some(L=>L.show)?(0,i.jsx)(i.Fragment,{children:s.map((L,D)=>L.show?L.active?L.render({key:L.id,ref:L.ref,tabIndex:M[D],onKeyDown:se(D),onClick:ee}):L.render({key:L.id}):null)}):void 0,postfixButtons:d.some(L=>L.show)?(0,i.jsx)(i.Fragment,{children:d.map((L,D)=>L.show?L.active?L.render({key:L.id,ref:L.ref,tabIndex:F[D],onKeyDown:ce(D),onClick:ee}):L.render({key:L.id}):null)}):void 0}}const pl={Text:"text",Password:"password",Number:"number",Tel:"tel",Email:"email",Url:"url"},ul={Text:"text",Decimal:"decimal",Numeric:"numeric",Tel:"tel",Search:"search",Email:"email",Url:"url",None:"none"};var Mo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"),pa={};pa.styleTagTransform=K(),pa.setAttributes=U(),pa.insert=H().bind(null,"head"),pa.domAPI=m(),pa.insertStyleElement=X();var xi=g()(Mo.A,pa);const _l=Mo.A&&Mo.A.locals?Mo.A.locals:void 0;var ml=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const fl=(0,u.forwardRef)((a,p)=>{var{name:d,value:s="",onChange:n,placeholder:v,id:x,className:k,type:w=pl.Text,inputMode:y=ul.Text,disabled:C=!1,readonly:M=!1,autoComplete:A=!1,autoFocus:N=!1,maxLength:F,min:R,max:Z,step:Q,onFocus:V,onBlur:ae,onKeyDown:J,onPaste:oe,tabIndex:re=0,onClick:se,onMouseDown:ce,spellCheck:ee,pattern:L}=a,D=ml(a,["name","value","onChange","placeholder","id","className","type","inputMode","disabled","readonly","autoComplete","autoFocus","maxLength","min","max","step","onFocus","onBlur","onKeyDown","onPaste","tabIndex","onClick","onMouseDown","spellCheck","pattern"]);const W=q=>{n==null||n(q.target.value,q)};let G;switch(A){case!0:G="on";break;case!1:G="off";break;default:G=A;break}return(0,i.jsx)("input",Object.assign({name:d,maxLength:F,id:x,className:h()(k,_l.inputPrivate),autoComplete:G,ref:p,value:s,onChange:W,placeholder:v,type:w,inputMode:y,disabled:C,readOnly:M,onFocus:V,onBlur:ae,onKeyDown:J,onPaste:oe,tabIndex:re,onClick:se,onMouseDown:ce,min:R,max:Z,step:Q,spellCheck:ee,title:"",pattern:L,autoFocus:N},(0,E.z7)(D)))}),bl={S:"s",M:"m",L:"l"},$s={field:"search__field",input:"search__field-input",iconSun:"search__icon-sun",iconSearch:"search__icon-search",buttonClearValue:"button-clear-value"};var Do=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+search-private@0.4.37_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/styles.module.css"),ua={};ua.styleTagTransform=K(),ua.setAttributes=U(),ua.insert=H().bind(null,"head"),ua.domAPI=m(),ua.insertStyleElement=X();var Oi=g()(Do.A,ua);const qs=Do.A&&Do.A.locals?Do.A.locals:void 0;var gl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const vl=(0,u.forwardRef)(function(p,d){var{size:s=bl.S,value:n="",onChange:v,loading:x,placeholder:k,onKeyDown:w,onFocus:y,onBlur:C,onSubmit:M,className:A,tabIndex:N}=p,F=gl(p,["size","value","onChange","loading","placeholder","onKeyDown","onFocus","onBlur","onSubmit","className","tabIndex"]);const[R="",Z]=(0,xt.I)({value:n,defaultValue:"",onChange:v}),Q=(0,u.useRef)(null),V=(0,u.useRef)(null),{t:ae}=(0,Wa.Ym)("SearchPrivate"),re=nl({clearButtonRef:V,showClearButton:!!R,size:s,onClear:()=>{var W;Z(""),(W=Q.current)===null||W===void 0||W.focus()}}),{postfixButtons:se,inputTabIndex:ce,onInputKeyDown:ee}=cl({inputRef:Q,postfixButtons:(0,u.useMemo)(()=>[re],[re]),readonly:!1,submitKeys:["Enter","Space"]}),L=(0,u.useCallback)(W=>{var G;w&&w(W),ee(W),W.key==="Enter"&&(!((G=Q.current)===null||G===void 0)&&G.value)&&M&&M(Q.current.value)},[ee,w,M]),D=(0,u.useCallback)(W=>{y&&y(W),ll(Q.current)},[y]);return(0,i.jsxs)("div",Object.assign({className:h()(qs.container,A)},(0,E.z7)(F),{"data-size":s,children:[(0,i.jsx)("span",{className:qs.prefix,children:x?(0,i.jsx)(so.b,{"data-test-id":$s.iconSun}):(0,i.jsx)(Mr.A,{"data-test-id":$s.iconSearch})}),(0,i.jsx)(fl,{inputMode:"search",value:R,onChange:Z,onKeyDown:L,onFocus:D,onBlur:C,tabIndex:N!=null?N:ce,ref:(0,j.A)(d,Q),placeholder:k!=null?k:ae("placeholder"),type:"text","data-test-id":$s.input}),(0,i.jsx)("span",{className:qs.postfix,children:se})]}))});var Bo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css"),_a={};_a.styleTagTransform=K(),_a.setAttributes=U(),_a.insert=H().bind(null,"head"),_a.domAPI=m(),_a.insertStyleElement=X();var wi=g()(Bo.A,_a);const hl=Bo.A&&Bo.A.locals?Bo.A.locals:void 0;function yl({search:a,itemRef:p}){const{size:d="s",firstItemId:s}=Ge(),n=v=>{var x;["ArrowDown","ArrowUp"].includes(v.key)&&v.preventDefault(),(x=a==null?void 0:a.onKeyDown)===null||x===void 0||x.call(a,v)};return a?(0,i.jsx)("div",{className:h()(Qs.listItem,hl.searchItem),"data-size":d,"data-test-id":"list__search-item",children:(0,i.jsx)(vl,Object.assign({size:d,tabIndex:ke.search===s?0:-1,onKeyDown:n,onFocus:Us},a,{ref:p}))}):null}var No=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),ma={};ma.styleTagTransform=K(),ma.setAttributes=U(),ma.insert=H().bind(null,"head"),ma.domAPI=m(),ma.insertStyleElement=X();var ji=g()(No.A,ma);const Ga=No.A&&No.A.locals?No.A.locals:void 0,xl={m:40,s:32,l:48};var Ro=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css"),fa={};fa.styleTagTransform=K(),fa.setAttributes=U(),fa.insert=H().bind(null,"head"),fa.domAPI=m(),fa.insertStyleElement=X();var Pi=g()(Ro.A,fa);const Ja=Ro.A&&Ro.A.locals?Ro.A.locals:void 0;var Ol=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const Ur=(0,u.forwardRef)((a,p)=>{var d,{items:s,pinTop:n,pinBottom:v,onKeyDown:x,onBlur:k,onFocus:w,tabIndex:y,active:C,scroll:M,nested:A,search:N,searchItem:F,scrollRef:R,scrollContainerRef:Z,onScroll:Q,footer:V,loading:ae,limitedScrollHeight:J,untouchableScrollbars:oe,className:re,noDataState:se,noResultsState:ce,errorDataState:ee,dataError:L,dataFiltered:D,scrollToSelectedItem:W=!1,virtualized:G=!1,scrollContainerClassName:q,barHideStrategy:Oe="never"}=a,ze=Ol(a,["items","pinTop","pinBottom","onKeyDown","onBlur","onFocus","tabIndex","active","scroll","nested","search","searchItem","scrollRef","scrollContainerRef","onScroll","footer","loading","limitedScrollHeight","untouchableScrollbars","className","noDataState","noResultsState","errorDataState","dataError","dataFiltered","scrollToSelectedItem","virtualized","scrollContainerClassName","barHideStrategy"]);const{size:ge="s",flattenItems:Ce,focusFlattenItems:Se}=Ge(),{value:de,isSelectionSingle:Ee}=Vt(),Le=(0,u.useRef)(null),Ie=Ya(s),Qe=Ya(n),vt=Ya(v),[Ae,Ve]=(0,u.useState)({virtualizer:null,browser:null,measured:!1}),Me=Qn({noDataState:se,noResultsState:ce,errorDataState:ee}),Je=s.length===0,{selectedItemIndex:Re,selectedItem:fe}=(0,u.useMemo)(()=>{const le={selectedItemIndex:-1,selectedItem:void 0};if(!W||!de)return le;const ve=Ee?Ce[de]:Ce[de[0]];if(!(ve!=null&&ve.id))return le;const wa=Object.values(Se),ja=wa.findIndex(Yl=>Yl.originalId===ve.id);return ja<0?le:{selectedItemIndex:ja,selectedItem:wa[ja]}},[Ce,Se,Ee,W,de]),De=(0,Fn.Te)({count:Ie.length,getScrollElement:()=>M?Le.current:null,estimateSize:()=>xl[ge],enabled:G,overscan:5}),pe=De.getVirtualItems();(0,u.useEffect)(()=>{Ae.measured||(De.measure(),Ve(le=>Object.assign(Object.assign({},le),{measured:!0})))},[Ae.measured,De]);const ht=M&&W&&G;(0,u.useEffect)(()=>{var le;if(ht){if(!Ae.measured||Re<0||!fe||Ae.virtualizer===fe.originalId||fe!=null&&fe.itemRef&&(!((le=Le.current)===null||le===void 0)&&le.contains(fe==null?void 0:fe.itemRef.current)))return;De.scrollToIndex(Re,{align:"center"}),Ve(ve=>Object.assign(Object.assign({},ve),{virtualizer:fe.originalId}))}},[ht,Ae,fe,Re,De]);const Oa=!!(!((d=fe==null?void 0:fe.itemRef)===null||d===void 0)&&d.current);(0,u.useEffect)(()=>{var le,ve;fe&&Ae.virtualizer!==null&&Oa&&Ae.virtualizer!==Ae.browser&&((ve=(le=fe.itemRef)===null||le===void 0?void 0:le.current)===null||ve===void 0||ve.scrollIntoView({block:"center"}),Ve(wa=>Object.assign(Object.assign({},wa),{browser:fe.originalId})))},[Ae,fe,Oa,Re]);const Y=(0,u.useMemo)(()=>ae&&(0,i.jsx)("div",{role:"spinbutton",tabIndex:-1,className:Ja.loader,"data-size":ge,"data-no-items":Je||void 0,"data-test-id":"list__loader",children:(0,i.jsx)(Hn.y,{size:ge==="l"?"s":"xs"})}),[Je,ae,ge]),ue=(0,u.useMemo)(()=>(0,i.jsxs)(i.Fragment,{children:[G?(0,i.jsx)("div",{className:Ja.virtualizedContainer,style:{height:De.getTotalSize()},tabIndex:-1,children:pe.map(le=>(0,i.jsx)("div",{"data-index":le.index,ref:De.measureElement,tabIndex:-1,className:Ja.virtualizedPositionBox,style:{transform:`translateY(${le.start}px)`},children:Ie[le.index]},le.key))}):Ie,Y,(0,i.jsx)(qn,{loading:ae,dataError:L,emptyStates:Me,hasNoItems:Je,dataFiltered:D!=null?D:!!(N!=null&&N.value),size:ge})]}),[L,D,Me,Je,Ie,ae,Y,N==null?void 0:N.value,ge,pe,G,De]),_e=(0,u.useCallback)(()=>{var le,ve;fe&&((ve=(le=fe==null?void 0:fe.itemRef)===null||le===void 0?void 0:le.current)===null||ve===void 0||ve.scrollIntoView({block:"center"}))},[fe]),Ne=(0,i.jsxs)("ul",Object.assign({className:h()(Ga.listContainer,re),ref:p,onKeyDown:x,tabIndex:y,onFocus:w,onBlur:k,"data-active":C||void 0,role:"menu"},(0,E.z7)(ze),{children:[(Number(n==null?void 0:n.length)>0||N)&&(0,i.jsxs)(el,{children:[N&&(0,i.jsx)(yl,Object.assign({search:N},F)),Number(n==null?void 0:n.length)>0&&Qe]}),M?(0,i.jsxs)(Xn.O,{className:h()({[Ga.scrollContainerS]:M&&J&&ge==="s",[Ga.scrollContainerM]:M&&J&&ge==="m",[Ga.scrollContainerL]:M&&J&&ge==="l"},q),barHideStrategy:Oe,size:"s",ref:(0,j.A)(Le,Z),untouchableScrollbars:oe,onScroll:Q,onInitialized:_e,children:[ue,(0,i.jsx)("div",{className:Ja.scrollStub,ref:R})]}):(0,i.jsx)(i.Fragment,{children:ue}),Number(v==null?void 0:v.length)>0&&(0,i.jsx)(tl,{children:vt}),V&&(0,i.jsx)("div",{className:Ja.footer,onFocus:Us,children:V})]}));return A?(0,i.jsx)("li",{style:{listStyleType:"none"},role:"menuitem",children:Ne}):Ne}),wl=["right","right-start","right-end","left","left-start","left-end","bottom","top"];var jl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function kl(a){var{items:p,placement:d="right-start",id:s,scroll:n,scrollRef:v,disabled:x,onSublistOpenChanged:k,allChildIds:w,loading:y=!1,focusId:C=s,untouchableScrollbars:M=!1}=a,A=jl(a,["items","placement","id","scroll","scrollRef","disabled","onSublistOpenChanged","allChildIds","loading","focusId","untouchableScrollbars"]);const{flattenItems:N,focusFlattenItems:F,virtualized:R}=Ge(),{value:Z,isSelectionSingle:Q,isSelectionMultiple:V}=Vt(),{openCollapseItems:ae=[]}=Sr(),J=N[s],{ids:oe,expandedIds:re}=(0,u.useMemo)(()=>{const{ids:de,expandedIds:Ee}=Cr({focusCloseChildIds:p,focusFlattenItems:F,openCollapseItems:ae,isSelectionMultiple:V});return{ids:de,expandedIds:Ee.concat([s])}},[F,s,V,p,ae]),{handleListKeyDownFactory:se,activeItemId:ce,forceUpdateActiveItemId:ee}=Un(),[L,D]=(0,u.useState)(),W=(0,u.useCallback)(de=>{if(se(oe,re)(de),de.key==="ArrowLeft"){ee==null||ee(C),D(!1),de.stopPropagation();return}},[se,oe,re,ee,C]),{indeterminate:G,checked:q,handleOnSelect:Oe}=er({items:Ar(J)?J.items:[],id:s,disabled:x,allChildIds:w}),ze=(0,u.useCallback)(()=>(ee==null||ee(ke.dropFocus),D(!1),!0),[ee]),ge=(0,u.useMemo)(()=>!!(!x&&ce&&F[C].allChildIds.includes(ce)),[ce,x,F,C]),Ce=!!(G&&!L&&Q&&Z&&w.includes(Z)||V&&q);(0,u.useEffect)(()=>{D(de=>de&&ge)},[s,ge]);const Se=(0,u.useRef)(null);return(0,i.jsx)(mo,{outsideClick:ze,fallbackPlacements:wl,content:(0,i.jsx)(Ur,{onKeyDown:W,items:p,nested:!0,scroll:n,virtualized:R,tabIndex:0,ref:Se,onFocus:de=>{de.stopPropagation(),ee==null||ee(oe[0])},scrollRef:v,limitedScrollHeight:!0,untouchableScrollbars:M,loading:y}),trigger:"hover",open:ge||L,onOpenChange:de=>{D(de),k==null||k(de,s)},placement:d,widthStrategy:"auto",children:(0,i.jsx)(Zs,Object.assign({},A,{disabled:x,open:L,expandIcon:(0,i.jsx)(Wn.A,{}),id:s,isParentNode:!0,indeterminate:G,checked:Ce,onOpenNestedList:()=>{D(!0),setTimeout(()=>{var de;(de=Se.current)===null||de===void 0||de.focus()},0)},onSelect:Oe}))})}function Fr({focusCloseChildIds:a,focusFlattenItems:p,flattenItems:d,isSelectionMultiple:s}){return a?a.flatMap(n=>{const{itemRef:v,key:x,originalId:k,items:w}=p[n],y=d[k];if(Eo(y)||!s&&Tr(y)){const C=Fr({focusCloseChildIds:w,focusFlattenItems:p,flattenItems:d,isSelectionMultiple:s});return[(0,i.jsx)(xr,{label:y.label,truncate:y.truncate,divider:y.divider,mode:y.mode},x+"_separator"),...C]}return Tr(y)?(0,u.createElement)(Kn,Object.assign({},y,{items:w,itemRef:v,key:x})):Ln(y)?(0,u.createElement)(Rn,Object.assign({},y,{items:w,itemRef:v,key:x})):Ar(y)?(0,u.createElement)(kl,Object.assign({},y,{focusId:n,items:w,itemRef:v,key:x})):(0,u.createElement)(Zs,Object.assign({},y,{itemRef:v,key:x}))}):[null]}function Ya(a){const{focusFlattenItems:p,flattenItems:d}=Ge(),{isSelectionMultiple:s}=Vt();return(0,u.useMemo)(()=>Fr({flattenItems:d,focusFlattenItems:p,focusCloseChildIds:a,isSelectionMultiple:s}),[d,a,p,s])}function Sl({footerActiveElementsRefs:a}){return(0,u.useMemo)(()=>{var p;return{searchItem:{itemRef:(0,u.createRef)(),id:ke.search,parentId:ke.default,items:[],allChildIds:[]},footerItems:(p=a==null?void 0:a.map((d,s)=>({id:nn(s),itemRef:d,parentId:ke.default,items:[],allChildIds:[]})))!==null&&p!==void 0?p:[]}},[a])}function er({id:a,allChildIds:p}){const{value:d,setValue:s,isSelectionMultiple:n}=Vt(),{flattenItems:v}=Ge(),x=(0,u.useMemo)(()=>p.filter(A=>{const N=v[A];return N&&!("type"in N)}),[p,v]),k=(0,u.useMemo)(()=>x.filter(A=>{const N=v[A];return N&&!("type"in N)&&!N.disabled}),[x,v]),w=n?d&&!!d.length&&x.every(A=>d==null?void 0:d.includes(A)):void 0,y=n?d&&!!d.length&&k.every(A=>d==null?void 0:d.includes(A)):void 0,C=n?!w&&x.some(A=>d==null?void 0:d.includes(A)):x.includes(d!=null?d:"");return{checked:w,indeterminate:C,handleOnSelect:()=>{if(w||y){s==null||s(A=>(A!=null?A:[]).filter(N=>N!==a&&!k.includes(N)));return}s==null||s(A=>Array.from(new Set([...A!=null?A:[],...k])))}}}function El({mainRef:a,btnRef:p,focusFlattenItems:d,keyboardNavigationRef:s,hasListInFocusChain:n,firstItemId:v}){const x=n?void 0:v,[k,w]=(0,u.useState)(()=>x),y=(0,u.useRef)(x),C=(0,u.useCallback)(()=>{w(x),y.current=x},[x]),M=(0,u.useCallback)((N,F)=>R=>{var Z,Q,V,ae,J,oe,re,se,ce,ee;switch(R.key){case"ArrowDown":{if(y.current!==void 0){const L=N.findIndex(q=>q===y.current),D=Math.min(L+1,N.length-1),W=N[D],G=d[W];y.current=W,w(W),G.type!=="group"&&((Q=(Z=G.itemRef)===null||Z===void 0?void 0:Z.current)===null||Q===void 0||Q.focus())}else{const L=N[0],D=d[L];y.current=L,w(L),D.type!=="group"&&((ae=(V=D.itemRef)===null||V===void 0?void 0:V.current)===null||ae===void 0||ae.focus())}R.stopPropagation(),R.preventDefault();return}case"ArrowUp":{if(N[0]===y.current)n&&d[N[0]].parentId===ke.default&&(y.current=void 0,w(void 0),(J=a==null?void 0:a.current)===null||J===void 0||J.focus());else if(y.current!==void 0){const L=N.findIndex(q=>q===y.current),D=Math.max(L-1,0),W=N[D],G=d[W];y.current=W,w(W),G.type!=="group"&&((re=(oe=G.itemRef)===null||oe===void 0?void 0:oe.current)===null||re===void 0||re.focus())}R.stopPropagation(),R.preventDefault();return}case"ArrowRight":{if(y.current!==void 0&&F.includes(y.current)){const D=d[y.current].items[0],W=d[D];y.current=D,w(D),setTimeout(()=>{var G,q;return(q=(G=W.itemRef)===null||G===void 0?void 0:G.current)===null||q===void 0?void 0:q.focus()},0),R.stopPropagation(),R.preventDefault()}return}case"Tab":{y.current!==void 0?n?(R.preventDefault(),R.stopPropagation(),y.current=void 0,w(void 0),(se=a==null?void 0:a.current)===null||se===void 0||se.focus()):C():p&&!R.shiftKey?(ce=p==null?void 0:p.current)===null||ce===void 0||ce.focus():(ee=a==null?void 0:a.current)===null||ee===void 0||ee.focus();return}default:return}},[d,n,a,C,p]),A=(0,u.useCallback)(N=>{var F,R;w(N),y.current=N;const Z=d[N];(R=(F=Z==null?void 0:Z.itemRef)===null||F===void 0?void 0:F.current)===null||R===void 0||R.focus()},[d]);return(0,u.useImperativeHandle)(s,()=>({focusItem:A}),[A]),{resetActiveItemId:C,activeItemId:k,forceUpdateActiveItemId:A,handleListKeyDownFactory:M}}var Hr=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};const Pl=["top","right","bottom","left"];function zl(a){var{items:p,search:d,pinBottom:s=[],pinTop:n=[],footerActiveElementsRefs:v,children:x,trigger:k,placement:w,widthStrategy:y,triggerElemRef:C,open:M,onOpenChange:A,collapse:N={},triggerClassName:F,selection:R,contentRender:Z,size:Q="s",marker:V=!0,closeDroplistOnItemClick:ae=!1,className:J,listRef:oe,untouchableScrollbars:re=!1,virtualized:se=!1,closeOnPopstate:ce}=a,ee=Hr(a,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const L=(0,u.useMemo)(()=>!!d,[d]),[D=[],W]=(0,xt.I)(N),G=(0,u.useCallback)(Y=>W(ue=>ue!=null&&ue.includes(Y)?ue.filter(_e=>_e!==Y):(ue!=null?ue:[]).concat([Y])),[W]),[q=!1,Oe]=(0,xt.I)({value:M,defaultValue:!1,onChange:A}),{searchItem:ze,footerItems:ge}=Sl({footerActiveElementsRefs:v}),Ce=(0,u.useMemo)(()=>{const Y=Vs({items:n,prefix:ke.pinTop,parentId:ke.default}),ue=Vs({items:p,prefix:ke.default,parentId:ke.default}),_e=Vs({items:s,prefix:ke.pinBottom,parentId:ke.default}),Ne=Object.assign(Object.assign(Object.assign({},Y.flattenItems),_e.flattenItems),ue.flattenItems),le=Object.assign(Object.assign(Object.assign({},Y.focusFlattenItems),_e.focusFlattenItems),ue.focusFlattenItems);return[...ge,ze].forEach(ve=>{Ne[ve.id]=ve,le[ve.id]=Object.assign(Object.assign({},ve),{originalId:ve.id,items:[],key:ve.id,allChildIds:[]})}),{items:ue,pinTop:Y,pinBottom:_e,flattenItems:Ne,focusFlattenItems:le}},[p,n,s,ze,ge]),{flattenItems:Se,focusFlattenItems:de}=Ce,Ee=Hr(Ce,["flattenItems","focusFlattenItems"]),{ids:Le,expandedIds:Ie}=(0,u.useMemo)(()=>{const{pinTop:Y,items:ue,pinBottom:_e}=Ee;let Ne=[],le=[];return L&&Ne.push(ze.id),[Y,ue,_e].forEach(({focusFlattenItems:ve,focusCloseChildIds:wa})=>{const ja=Cr({focusFlattenItems:ve,focusCloseChildIds:wa,openCollapseItems:D,isSelectionMultiple:(R==null?void 0:R.mode)==="multiple"});Ne=Ne.concat(ja.ids),le=le.concat(ja.expandedIds)}),ge.forEach(ve=>{Ne.push(ve.id)}),{ids:Ne,expandedIds:le}},[ge,L,Ee,D,ze.id,R==null?void 0:R.mode]),Qe=(0,u.useRef)(null),vt=(0,u.useRef)(null),Ae=Le[0],{handleListKeyDownFactory:Ve,resetActiveItemId:Me,activeItemId:Je,forceUpdateActiveItemId:Re}=El({mainRef:C!=null?C:Qe,focusFlattenItems:de,hasListInFocusChain:!0,firstItemId:Ae}),fe=(0,u.useCallback)(Y=>Ve(Le,Ie)(Y),[Ve,Le,Ie]),De=(0,u.useCallback)(Y=>{Me(),Oe(Y)},[Me,Oe]),pe=(0,u.useCallback)((Y,ue)=>{Y.key==="ArrowDown"&&(Y.preventDefault(),Oe(!0),setTimeout(()=>{var _e;Me(),(_e=vt.current)===null||_e===void 0||_e.focus()},0)),Y.key==="ArrowUp"&&Oe(!1),ue==null||ue(Y)},[Me,Oe]),ht=(0,u.useMemo)(()=>(0,u.isValidElement)(x),[x]),Oa=(0,u.useMemo)(()=>{if((0,u.isValidElement)(x)){const Y=typeof x.props=="object"?x.props:{};return(0,u.cloneElement)(x,Object.assign(Object.assign({},Y),{onKeyDown:ue=>{var _e;pe(ue,(_e=x.props)===null||_e===void 0?void 0:_e.onKeyDown)}}))}return typeof x=="function"?x({onKeyDown:pe}):x},[pe,x]);return(0,i.jsx)(on,{flattenItems:Se,focusFlattenItems:de,contentRender:Z,size:Q,marker:V,firstItemId:Ae,virtualized:se,children:(0,i.jsx)(mn,Object.assign({},R,{children:(0,i.jsx)(kr.Provider,{value:{openCollapseItems:D,toggleOpenCollapseItem:G},children:(0,i.jsx)(Lr.Provider,{value:{activeItemId:Je,handleListKeyDownFactory:Ve,forceUpdateActiveItemId:Re},children:(0,i.jsx)(Ir.Provider,{value:{closeDroplistOnItemClick:ae,closeDroplist:()=>{var Y;Oe(!1),Me(),(Y=(C!=null?C:Qe).current)===null||Y===void 0||Y.focus()}},children:(0,i.jsx)(mo,{content:(0,i.jsx)("div",{className:h()(Ga.wrapper,J),children:(0,i.jsx)(Ur,Object.assign({},ee,{items:Ee.items.focusCloseChildIds,pinTop:Ee.pinTop.focusCloseChildIds,pinBottom:Ee.pinBottom.focusCloseChildIds,virtualized:se,onKeyDown:fe,searchItem:ze,tabIndex:0,ref:(0,j.A)(vt,oe),search:d,onFocus:Y=>{Y.stopPropagation(),Re==null||Re(Le[0])},limitedScrollHeight:!0,untouchableScrollbars:re}))}),outsideClick:!0,triggerClassName:F,fallbackPlacements:Pl,trigger:k,placement:w,widthStrategy:y,triggerRef:C?ht&&C||void 0:Qe,open:q,onOpenChange:De,closeOnPopstate:ce,children:Oa})})})})}))})}function Il({tooltip:a,children:p}){return a!=null&&a.tip?(0,i.jsx)(t,Object.assign({},a,{children:p})):(0,i.jsx)(i.Fragment,{children:p})}const Xr={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},$a={Xs:"xs",S:"s"},Qr={[$a.Xs]:16,[$a.S]:24};var Ko=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"),ba={};ba.styleTagTransform=K(),ba.setAttributes=U(),ba.insert=H().bind(null,"head"),ba.domAPI=m(),ba.insertStyleElement=X();var zi=g()(Ko.A,ba);const qa=Ko.A&&Ko.A.locals?Ko.A.locals:void 0;var Al=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Tl(a){return"changeRestrictTooltipState"in a&&a.changeRestrictTooltipState!==void 0}function Vr(a){const{label:p,size:d=$a.Xs,appearance:s=Xr.Neutral,onDelete:n,className:v,tabIndex:x}=a,k=Al(a,["label","size","appearance","onDelete","className","tabIndex"]),w=(0,u.useRef)(null),y=!!n,C=N=>{if(y&&Tl(a)){const{changeRestrictTooltipState:F}=a;F(N)}},M=N=>{var F;!((F=w.current)===null||F===void 0)&&F.contains(N.target)&&C(!0)},A=()=>{C(!1)};return(0,i.jsxs)("span",Object.assign({},(0,E.z7)(k),{className:h()(qa.tag,v),"data-size":d,"data-appearance":s,"data-removable":y,onMouseEnter:M,onMouseLeave:A,children:[(0,i.jsx)("span",{className:qa.label,children:p}),y&&(0,i.jsx)("button",{type:"button",className:qa.tagButton,onClick:n,"data-test-id":"tag-remove-button",tabIndex:x,onMouseEnter:M,onMouseLeave:A,ref:w,children:d===$a.Xs?(0,i.jsx)(Yt.A,{size:Qr[d],className:qa.icon}):(0,i.jsx)(Yt.A,{size:Qr[d],className:qa.icon})})]}))}var Wo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"),ga={};ga.styleTagTransform=K(),ga.setAttributes=U(),ga.insert=H().bind(null,"head"),ga.domAPI=m(),ga.insertStyleElement=X();var Ii=g()(Wo.A,ga);const Zr=Wo.A&&Wo.A.locals?Wo.A.locals:void 0;var Cl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Gr(a){var{label:p,size:d=$a.Xs,appearance:s=Xr.Neutral,className:n,tabIndex:v,href:x,onClick:k,target:w}=a,y=Cl(a,["label","size","appearance","className","tabIndex","href","onClick","target"]);return(0,i.jsx)("a",Object.assign({},(0,E.z7)(y),{className:h()(Zr.tag,n),"data-size":d,"data-appearance":s,tabIndex:v,href:x,target:w,onClick:k,children:(0,i.jsx)("span",{className:Zr.label,children:p})}))}function Ll(a){return"href"in a&&a.href!==void 0}function Ml(a){return"tooltip"in a&&a.tooltip!==void 0}function Dl(a){const[p,d]=(0,u.useState)(!1),s=Ll(a);if(!Ml(a))return s?(0,i.jsx)(Gr,Object.assign({},a)):(0,i.jsx)(Vr,Object.assign({},a));const{tooltip:n}=a,v=n&&Object.assign(Object.assign({},n),{open:p?!1:n.open}),x=Object.assign(Object.assign({},a),{changeRestrictTooltipState:d});return(0,i.jsx)(Il,{tooltip:v,children:s?(0,i.jsx)(Gr,Object.assign({},a)):(0,i.jsx)(Vr,Object.assign({},x))})}var Uo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/FunctionBadge/styles.module.css"),va={};va.styleTagTransform=K(),va.setAttributes=U(),va.insert=H().bind(null,"head"),va.domAPI=m(),va.insertStyleElement=X();var Ai=g()(Uo.A,va);const tr=Uo.A&&Uo.A.locals?Uo.A.locals:void 0;var Bl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Nl({icon:a,options:p}){const[d,s]=(0,u.useState)(!1),n=(0,u.useRef)(null),{setVisible:v}=(0,u.useContext)(b);(0,Ra.N)(()=>{v&&v(d)},[d,v]);const x=(0,u.useCallback)(k=>{k.stopPropagation(),s(w=>!w)},[]);return(0,i.jsx)("span",{className:tr.wrapper,children:(0,i.jsx)(zl,{trigger:"clickAndFocusVisible",open:d,onOpenChange:s,widthStrategy:"gte",scroll:!0,"data-test-id":ie.droplist,placement:"bottom-end",triggerElemRef:n,items:p.map(k=>{var{icon:w,tagLabel:y,onClick:C}=k,M=Bl(k,["icon","tagLabel","onClick"]);return Object.assign(Object.assign({},M),{className:tr.item,beforeContent:w,afterContent:y?(0,i.jsx)(Dl,{label:y}):void 0,onClick:A=>{A.stopPropagation(),s(!1),C==null||C(A)}})}),children:(0,i.jsx)("button",{type:"button","data-test-id":ie.functionBadge,className:tr.button,onClick:x,ref:n,children:a||(0,i.jsx)(ws,{})})})})}var Fo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Emblem/styled.module.css"),ha={};ha.styleTagTransform=K(),ha.setAttributes=U(),ha.insert=H().bind(null,"head"),ha.domAPI=m(),ha.insertStyleElement=X();var Ti=g()(Fo.A,ha);const Rl=Fo.A&&Fo.A.locals?Fo.A.locals:void 0;function Kl(a){return"src"in a&&"alt"in a}function Wl(a){var p,d,s;const{size:n}=be();return Kl(a)?(0,i.jsx)("img",{src:a.src,alt:a.alt,"data-size":n||void 0,className:Rl.img,"data-test-id":ie.emblemPicture}):(0,i.jsx)(Rr.I,{icon:a.icon,appearance:(p=a.appearance)!==null&&p!==void 0?p:"primary",decor:(d=a.decor)!==null&&d!==void 0?d:!0,size:n,shape:(s=a.shape)!==null&&s!==void 0?s:"round","data-test-id":ie.emblemIcon})}const Ul={[z.S]:"s",[z.M]:"m",[z.L]:"l"},Fl={[z.S]:"m",[z.M]:"m",[z.L]:"l"},Hl={title:1,description:2,metadata:1};var Ho=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Header/styles.module.css"),ya={};ya.styleTagTransform=K(),ya.setAttributes=U(),ya.insert=H().bind(null,"head"),ya.domAPI=m(),ya.insertStyleElement=X();var Ci=g()(Ho.A,ya);const eo=Ho.A&&Ho.A.locals?Ho.A.locals:void 0;var Xl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Ql(a){var{title:p,description:d,metadata:s,truncate:n,emblem:v,className:x,size:k}=a,w=Xl(a,["title","description","metadata","truncate","emblem","className","size"]);const{size:y}=be(),C=k||y,M=Object.assign(Object.assign({},Hl),n);return(0,i.jsxs)("div",Object.assign({className:h()(eo.titleLayout,x)},(0,E.sg)(w),{"data-size":C,children:[v&&(0,i.jsx)(Wl,Object.assign({},v)),(0,i.jsxs)("div",{className:eo.contentLayout,children:[(0,i.jsx)(f.o,{family:"sans",size:Ul[C],purpose:"title",className:eo.title,"data-test-id":ie.title,children:(0,i.jsx)(Xt,{variant:"end",maxLines:M.title,text:p})}),s&&(0,i.jsx)(f.o.SansBodyS,{className:eo.metadata,children:(0,i.jsx)(Xt,{variant:"end",maxLines:M.metadata,text:s,"data-test-id":ie.metadata})}),d&&(0,i.jsx)(f.o,{family:"sans",size:Fl[C],purpose:"body",className:eo.description,children:(0,i.jsx)(Xt,{variant:"end",maxLines:M.description,text:d,"data-test-id":ie.description})})]})]}))}const Vl={Little:"little",Middle:"middle",Background:"background"};var Xo=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Image/styles.module.css"),xa={};xa.styleTagTransform=K(),xa.setAttributes=U(),xa.insert=H().bind(null,"head"),xa.domAPI=m(),xa.insertStyleElement=X();var Li=g()(Xo.A,xa);const Zl=Xo.A&&Xo.A.locals?Xo.A.locals:void 0;var Gl=function(a,p){var d={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&p.indexOf(s)<0&&(d[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(a);n<s.length;n++)p.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(a,s[n])&&(d[s[n]]=a[s[n]]);return d};function Jl(a){var{src:p,alt:d,mode:s=Vl.Little,hideFading:n}=a,v=Gl(a,["src","alt","mode","hideFading"]);return(0,i.jsx)("img",Object.assign({},(0,E.z7)(v),{src:p,alt:d,"data-mode":s,className:Zl.image,"data-fading":!n||void 0}))}const to=Jo;to.Header=Ql,to.Footer=Ma,to.Image=Jl,to.FunctionBadge=Nl},"./node_modules/.pnpm/@snack-uikit+counter@0.8.12_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"(P,S,r){r.d(S,{p:()=>Ue});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=r.n(O),j=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const u={Primary:"primary",Neutral:"neutral",Red:"red"},f={Count:"count",CountPlus:"count-plus",CountK:"count-k"},E={S:"s",M:"m"},z={Accent:"accent",Decor:"decor"},ie=10,T=1e3,be="K";var b=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=r.n(b),g=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),_=r.n(g),m=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),he=r.n(m),H=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),we=r.n(H),U=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Ke=r.n(U),X=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),We=r.n(X),K=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.12_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),$={};$.styleTagTransform=We(),$.setAttributes=we(),$.insert=he().bind(null,"head"),$.domAPI=_(),$.insertStyleElement=Ke();var me=I()(K.A,$);const ne=K.A&&K.A.locals?K.A.locals:void 0;function te({value:xe,variant:Pe,plusLimit:Te}){if(Pe===f.Count)return xe;if(Pe===f.CountPlus)return xe<Te?xe:(0,i.jsxs)(i.Fragment,{children:[Te-1,(0,i.jsx)("span",{className:ne.plus,children:"+"})]});if(Pe===f.CountK)return xe<T?xe:(0,i.jsxs)(i.Fragment,{children:[Math.round(xe/T),(0,i.jsx)("span",{className:ne.key,children:be})]})}var ye=function(xe,Pe){var Te={};for(var je in xe)Object.prototype.hasOwnProperty.call(xe,je)&&Pe.indexOf(je)<0&&(Te[je]=xe[je]);if(xe!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Fe=0,je=Object.getOwnPropertySymbols(xe);Fe<je.length;Fe++)Pe.indexOf(je[Fe])<0&&Object.prototype.propertyIsEnumerable.call(xe,je[Fe])&&(Te[je[Fe]]=xe[je[Fe]]);return Te};function Ue(xe){var{value:Pe,appearance:Te=u.Primary,variant:je=f.Count,size:Fe=E.S,plusLimit:jt=ie,color:ka=z.Accent,className:Sa}=xe,et=ye(xe,["value","appearance","variant","size","plusLimit","color","className"]);const Ze=te({value:Pe,variant:je,plusLimit:jt});return(0,i.jsx)("div",Object.assign({className:h()(ne.counter,Sa)},(0,j.z7)(et),{"data-size":Fe,"data-variant":je,"data-appearance":Te,"data-color":ka,children:Ze}))}},"./node_modules/.pnpm/@snack-uikit+divider@3.2.12_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"(P,S,r){r.d(S,{c:()=>K});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=r.n(O),j=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const u={Horizontal:"horizontal",Vertical:"vertical"},f={Light:"light",Regular:"regular"};var E=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),z=r.n(E),ie=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),T=r.n(ie),be=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),b=r.n(be),I=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=r.n(I),_=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(_),he=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),H=r.n(he),we=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.12_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),U={};U.styleTagTransform=H(),U.setAttributes=g(),U.insert=b().bind(null,"head"),U.domAPI=T(),U.insertStyleElement=m();var Ke=z()(we.A,U);const X=we.A&&we.A.locals?we.A.locals:void 0;var We=function($,me){var ne={};for(var te in $)Object.prototype.hasOwnProperty.call($,te)&&me.indexOf(te)<0&&(ne[te]=$[te]);if($!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ye=0,te=Object.getOwnPropertySymbols($);ye<te.length;ye++)me.indexOf(te[ye])<0&&Object.prototype.propertyIsEnumerable.call($,te[ye])&&(ne[te[ye]]=$[te[ye]]);return ne};function K($){var{className:me,orientation:ne=u.Horizontal,weight:te=f.Regular}=$,ye=We($,["className","orientation","weight"]);const Ue=Object.assign(Object.assign({},(0,j.z7)(ye)),{"data-weight":te});return ne===u.Horizontal?(0,i.jsx)("hr",Object.assign({className:h()(X.horizontal,me)},Ue)):(0,i.jsx)("div",Object.assign({className:h()(X.vertical,me)},Ue))}},"./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.12_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"(P,S,r){r.d(S,{I:()=>K});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=r.n(O),j=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const u={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},f={S:"s",M:"m",L:"l"};var E=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),z=r.n(E),ie=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),T=r.n(ie),be=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),b=r.n(be),I=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=r.n(I),_=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=r.n(_),he=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),H=r.n(he),we=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.12_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/styles.module.css"),U={};U.styleTagTransform=H(),U.setAttributes=g(),U.insert=b().bind(null,"head"),U.domAPI=T(),U.insertStyleElement=m();var Ke=z()(we.A,U);const X=we.A&&we.A.locals?we.A.locals:void 0;var We=function($,me){var ne={};for(var te in $)Object.prototype.hasOwnProperty.call($,te)&&me.indexOf(te)<0&&(ne[te]=$[te]);if($!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ye=0,te=Object.getOwnPropertySymbols($);ye<te.length;ye++)me.indexOf(te[ye])<0&&Object.prototype.propertyIsEnumerable.call($,te[ye])&&(ne[te[ye]]=$[te[ye]]);return ne};function K($){var{className:me,decor:ne=!0,size:te=f.M,icon:ye,appearance:Ue=u.Primary,shape:xe="round"}=$,Pe=We($,["className","decor","size","icon","appearance","shape"]);return(0,i.jsx)("div",Object.assign({className:h()(X.decor,me)},(0,j.z7)(Pe),{"data-size":te,"data-decor":ne||void 0,"data-appearance":Ue,"data-shape":xe,children:(0,i.jsx)(ye,{"data-size":te,"data-appearance":Ue,className:X.icon})}))}},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"(P,S,r){r.d(S,{A:()=>be});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const u=O.forwardRef((b,I)=>{var{size:g=24}=b,_=h(b,["size"]);_.width=void 0,_.height=void 0;const m="-check-s";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:I,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var f=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const z=O.forwardRef((b,I)=>{var{size:g=24}=b,_=f(b,["size"]);_.width=void 0,_.height=void 0;const m="-check-xs";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:I,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var ie=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const be=(0,O.forwardRef)((b,I)=>{var{size:g=24}=b,_=ie(b,["size"]);return Number(g)>=20?(0,i.jsx)(u,Object.assign({ref:I,size:g},_)):(0,i.jsx)(z,Object.assign({ref:I,size:g},_))})},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"(P,S,r){r.d(S,{A:()=>be});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const u=O.forwardRef((b,I)=>{var{size:g=24}=b,_=h(b,["size"]);_.width=void 0,_.height=void 0;const m="-chevron-down-s";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:I,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var f=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const z=O.forwardRef((b,I)=>{var{size:g=24}=b,_=f(b,["size"]);_.width=void 0,_.height=void 0;const m="-chevron-down-xs";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:I,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var ie=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const be=(0,O.forwardRef)((b,I)=>{var{size:g=24}=b,_=ie(b,["size"]);return Number(g)>=20?(0,i.jsx)(u,Object.assign({ref:I,size:g},_)):(0,i.jsx)(z,Object.assign({ref:I,size:g},_))})},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js"(P,S,r){r.d(S,{A:()=>be});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const u=O.forwardRef((b,I)=>{var{size:g=24}=b,_=h(b,["size"]);_.width=void 0,_.height=void 0;const m="-chevron-right-s";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:I,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var f=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const z=O.forwardRef((b,I)=>{var{size:g=24}=b,_=f(b,["size"]);_.width=void 0,_.height=void 0;const m="-chevron-right-xs";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:I,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var ie=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const be=(0,O.forwardRef)((b,I)=>{var{size:g=24}=b,_=ie(b,["size"]);return Number(g)>=20?(0,i.jsx)(u,Object.assign({ref:I,size:g},_)):(0,i.jsx)(z,Object.assign({ref:I,size:g},_))})},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"(P,S,r){r.d(S,{A:()=>be});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const u=O.forwardRef((b,I)=>{var{size:g=24}=b,_=h(b,["size"]);_.width=void 0,_.height=void 0;const m="-chevron-up-s";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:I,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var f=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const z=O.forwardRef((b,I)=>{var{size:g=24}=b,_=f(b,["size"]);_.width=void 0,_.height=void 0;const m="-chevron-up-xs";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:I,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var ie=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const be=(0,O.forwardRef)((b,I)=>{var{size:g=24}=b,_=ie(b,["size"]);return Number(g)>=20?(0,i.jsx)(u,Object.assign({ref:I,size:g},_)):(0,i.jsx)(z,Object.assign({ref:I,size:g},_))})},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/minus/index.js"(P,S,r){r.d(S,{A:()=>be});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const u=O.forwardRef((b,I)=>{var{size:g=24}=b,_=h(b,["size"]);_.width=void 0,_.height=void 0;const m="-minus-s";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:I,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var f=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const z=O.forwardRef((b,I)=>{var{size:g=24}=b,_=f(b,["size"]);_.width=void 0,_.height=void 0;const m="-minus-xs";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:I,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var ie=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const be=(0,O.forwardRef)((b,I)=>{var{size:g=24}=b,_=ie(b,["size"]);return Number(g)>=20?(0,i.jsx)(u,Object.assign({ref:I,size:g},_)):(0,i.jsx)(z,Object.assign({ref:I,size:g},_))})},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js"(P,S,r){r.d(S,{A:()=>be});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),h=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const u=O.forwardRef((b,I)=>{var{size:g=24}=b,_=h(b,["size"]);_.width=void 0,_.height=void 0;const m="-search-s";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:I,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var f=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const z=O.forwardRef((b,I)=>{var{size:g=24}=b,_=f(b,["size"]);_.width=void 0,_.height=void 0;const m="-search-xs";return typeof g=="number"&&(_.style||(_.style={}),_.style.width=g+"px",_.style.height=g+"px"),(0,i.jsx)("svg",Object.assign({ref:I,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+m},_,{children:(0,i.jsx)("use",{href:"#snack-uikit-"+m.substring(1)})}))});var ie=function(b,I){var g={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&I.indexOf(_)<0&&(g[_]=b[_]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(b);m<_.length;m++)I.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(b,_[m])&&(g[_[m]]=b[_[m]]);return g};const be=(0,O.forwardRef)((b,I)=>{var{size:g=24}=b,_=ie(b,["size"]);return Number(g)>=20?(0,i.jsx)(u,Object.assign({ref:I,size:g},_)):(0,i.jsx)(z,Object.assign({ref:I,size:g},_))})},"./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"(P,S,r){r.d(S,{y:()=>We});var i=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),O=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),h=r.n(O),j=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),u=r("./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),f=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),E=r.n(f),z=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),ie=r.n(z),T=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),be=r.n(T),b=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),I=r.n(b),g=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_=r.n(g),m=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),he=r.n(m),H=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"),we={};we.styleTagTransform=he(),we.setAttributes=I(),we.insert=be().bind(null,"head"),we.domAPI=ie(),we.insertStyleElement=_();var U=E()(H.A,we);const Ke=H.A&&H.A.locals?H.A.locals:void 0;var X=function(K,$){var me={};for(var ne in K)Object.prototype.hasOwnProperty.call(K,ne)&&$.indexOf(ne)<0&&(me[ne]=K[ne]);if(K!=null&&typeof Object.getOwnPropertySymbols=="function")for(var te=0,ne=Object.getOwnPropertySymbols(K);te<ne.length;te++)$.indexOf(ne[te])<0&&Object.prototype.propertyIsEnumerable.call(K,ne[te])&&(me[ne[te]]=K[ne[te]]);return me};function We(K){var{size:$=u.K.S,className:me}=K,ne=X(K,["size","className"]);return $===u.K.XXS?(0,i.jsxs)("svg",Object.assign({viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:h()(Ke.spinner,me)},(0,j.z7)(ne),{"data-size":$,children:[(0,i.jsx)("circle",{opacity:"0.24",cx:"4",cy:"4",r:"3",strokeWidth:"1.5"}),(0,i.jsx)("path",{d:"M1 4C1 2.34315 2.34315 1 4 1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):$===u.K.XS?(0,i.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:h()(Ke.spinner,me)},(0,j.z7)(ne),{"data-size":$,children:[(0,i.jsx)("circle",{opacity:"0.24",cx:"8",cy:"8",r:"6",strokeWidth:"1.5"}),(0,i.jsx)("path",{d:"M2 8C2 4.68629 4.68629 2 8 2",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):(0,i.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:h()(Ke.spinner,me)},(0,j.z7)(ne),{"data-size":$,children:[(0,i.jsx)("circle",{opacity:"0.24",cx:"12",cy:"12",r:"9",strokeWidth:"1.5"}),(0,i.jsx)("path",{d:"M3 12C3 7.02944 7.02944 3 12 3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}},"./node_modules/.pnpm/@snack-uikit+typography@0.8.13_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"(P,S,r){r.d(S,{o:()=>B});var i=r("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),O=r.n(i),h=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=r("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");function u(t,c){for(const l in c)t[l]=c[l];return t}const f={Sans:"sans",Light:"light",Link:"link",Mono:"mono",CrossedOut:"crossed-out"},E={Display:"display",Headline:"headline",Title:"title",Label:"label",Body:"body"},z={L:"l",M:"m",S:"s"},ie={span:"span",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",div:"div",label:"label",p:"p"};var T=r("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),be=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function b(t){var{className:c,children:l,tag:e}=t,o=be(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Body,size:z.L,tag:e,className:c,children:l}))}var I=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function g(t){var{className:c,children:l,tag:e}=t,o=I(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Body,size:z.M,tag:e,className:c,children:l}))}var _=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function m(t){var{className:c,children:l,tag:e}=t,o=_(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Body,size:z.S,tag:e,className:c,children:l}))}var he=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function H(t){var{className:c,children:l,tag:e}=t,o=he(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Display,size:z.L,tag:e,className:c,children:l}))}var we=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function U(t){var{className:c,children:l,tag:e}=t,o=we(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Display,size:z.M,tag:e,className:c,children:l}))}var Ke=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function X(t){var{className:c,children:l,tag:e}=t,o=Ke(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Display,size:z.S,tag:e,className:c,children:l}))}var We=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function K(t){var{className:c,children:l,tag:e}=t,o=We(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Headline,size:z.L,tag:e,className:c,children:l}))}var $=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function me(t){var{className:c,children:l,tag:e}=t,o=$(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Headline,size:z.M,tag:e,className:c,children:l}))}var ne=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function te(t){var{className:c,children:l,tag:e}=t,o=ne(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Headline,size:z.S,tag:e,className:c,children:l}))}var ye=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ue(t){var{className:c,children:l,tag:e}=t,o=ye(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Label,size:z.L,tag:e,className:c,children:l}))}var xe=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Pe(t){var{className:c,children:l,tag:e}=t,o=xe(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Label,size:z.M,tag:e,className:c,children:l}))}var Te=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function je(t){var{className:c,children:l,tag:e}=t,o=Te(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Label,size:z.S,tag:e,className:c,children:l}))}var Fe=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function jt(t){var{className:c,children:l,tag:e}=t,o=Fe(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Title,size:z.L,tag:e,className:c,children:l}))}var ka=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Sa(t){var{className:c,children:l,tag:e}=t,o=ka(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Title,size:z.M,tag:e,className:c,children:l}))}var et=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ze(t){var{className:c,children:l,tag:e}=t,o=et(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.CrossedOut,purpose:E.Title,size:z.S,tag:e,className:c,children:l}))}var ar=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ao(t){var{className:c,children:l,tag:e}=t,o=ar(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Body,size:z.L,tag:e,className:c,children:l}))}var Qo=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ea(t){var{className:c,children:l,tag:e}=t,o=Qo(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Body,size:z.M,tag:e,className:c,children:l}))}var kt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function tt(t){var{className:c,children:l,tag:e}=t,o=kt(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Body,size:z.S,tag:e,className:c,children:l}))}var or=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function oo(t){var{className:c,children:l,tag:e}=t,o=or(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Display,size:z.L,tag:e,className:c,children:l}))}var Vo=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Zo(t){var{className:c,children:l,tag:e}=t,o=Vo(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Display,size:z.M,tag:e,className:c,children:l}))}var St=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function at(t){var{className:c,children:l,tag:e}=t,o=St(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Display,size:z.S,tag:e,className:c,children:l}))}var sr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function He(t){var{className:c,children:l,tag:e}=t,o=sr(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Headline,size:z.L,tag:e,className:c,children:l}))}var Go=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Jo(t){var{className:c,children:l,tag:e}=t,o=Go(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Headline,size:z.M,tag:e,className:c,children:l}))}var Ye=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Et(t){var{className:c,children:l,tag:e}=t,o=Ye(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Headline,size:z.S,tag:e,className:c,children:l}))}var Pt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Pa(t){var{className:c,children:l,tag:e}=t,o=Pt(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Label,size:z.L,tag:e,className:c,children:l}))}var $e=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ot(t){var{className:c,children:l,tag:e}=t,o=$e(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Label,size:z.M,tag:e,className:c,children:l}))}var Yo=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function zt(t){var{className:c,children:l,tag:e}=t,o=Yo(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Label,size:z.S,tag:e,className:c,children:l}))}var st=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function rr(t){var{className:c,children:l,tag:e}=t,o=st(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Title,size:z.L,tag:e,className:c,children:l}))}var It=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function $o(t){var{className:c,children:l,tag:e}=t,o=It(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Title,size:z.M,tag:e,className:c,children:l}))}var so=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function qo(t){var{className:c,children:l,tag:e}=t,o=so(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Light,purpose:E.Title,size:z.S,tag:e,className:c,children:l}))}var es=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ts(t){var{className:c,children:l,tag:e}=t,o=es(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Body,size:z.L,tag:e,className:c,children:l}))}var as=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function os(t){var{className:c,children:l,tag:e}=t,o=as(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Body,size:z.M,tag:e,className:c,children:l}))}var ss=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function za(t){var{className:c,children:l,tag:e}=t,o=ss(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Body,size:z.S,tag:e,className:c,children:l}))}var rs=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ia(t){var{className:c,children:l,tag:e}=t,o=rs(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Display,size:z.L,tag:e,className:c,children:l}))}var At=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function rt(t){var{className:c,children:l,tag:e}=t,o=At(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Display,size:z.M,tag:e,className:c,children:l}))}var nr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Aa(t){var{className:c,children:l,tag:e}=t,o=nr(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Display,size:z.S,tag:e,className:c,children:l}))}var ns=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ta(t){var{className:c,children:l,tag:e}=t,o=ns(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Headline,size:z.L,tag:e,className:c,children:l}))}var ls=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Tt(t){var{className:c,children:l,tag:e}=t,o=ls(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Headline,size:z.M,tag:e,className:c,children:l}))}var nt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function lr(t){var{className:c,children:l,tag:e}=t,o=nt(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Headline,size:z.S,tag:e,className:c,children:l}))}var yt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function is(t){var{className:c,children:l,tag:e}=t,o=yt(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Label,size:z.L,tag:e,className:c,children:l}))}var Ct=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function lt(t){var{className:c,children:l,tag:e}=t,o=Ct(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Label,size:z.M,tag:e,className:c,children:l}))}var ir=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ds(t){var{className:c,children:l,tag:e}=t,o=ir(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Label,size:z.S,tag:e,className:c,children:l}))}var cs=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ps(t){var{className:c,children:l,tag:e}=t,o=cs(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Title,size:z.L,tag:e,className:c,children:l}))}var Lt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function it(t){var{className:c,children:l,tag:e}=t,o=Lt(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Title,size:z.M,tag:e,className:c,children:l}))}var dr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ca(t){var{className:c,children:l,tag:e}=t,o=dr(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Link,purpose:E.Title,size:z.S,tag:e,className:c,children:l}))}var us=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ro(t){var{className:c,children:l,tag:e}=t,o=us(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Body,size:z.L,tag:e,className:c,children:l}))}var Mt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function dt(t){var{className:c,children:l,tag:e}=t,o=Mt(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Body,size:z.M,tag:e,className:c,children:l}))}var cr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function _s(t){var{className:c,children:l,tag:e}=t,o=cr(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Body,size:z.S,tag:e,className:c,children:l}))}var ms=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function fs(t){var{className:c,children:l,tag:e}=t,o=ms(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Display,size:z.L,tag:e,className:c,children:l}))}var Dt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ct(t){var{className:c,children:l,tag:e}=t,o=Dt(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Display,size:z.M,tag:e,className:c,children:l}))}var pr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function La(t){var{className:c,children:l,tag:e}=t,o=pr(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Display,size:z.S,tag:e,className:c,children:l}))}var bs=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function gs(t){var{className:c,children:l,tag:e}=t,o=bs(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Headline,size:z.L,tag:e,className:c,children:l}))}var Ma=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function vs(t){var{className:c,children:l,tag:e}=t,o=Ma(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Headline,size:z.M,tag:e,className:c,children:l}))}var ur=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function hs(t){var{className:c,children:l,tag:e}=t,o=ur(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Headline,size:z.S,tag:e,className:c,children:l}))}var ys=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function _r(t){var{className:c,children:l,tag:e}=t,o=ys(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Label,size:z.L,tag:e,className:c,children:l}))}var xs=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Os(t){var{className:c,children:l,tag:e}=t,o=xs(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Label,size:z.M,tag:e,className:c,children:l}))}var mr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function ws(t){var{className:c,children:l,tag:e}=t,o=mr(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Label,size:z.S,tag:e,className:c,children:l}))}var Be=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function js(t){var{className:c,children:l,tag:e}=t,o=Be(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Title,size:z.L,tag:e,className:c,children:l}))}var pt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Da(t){var{className:c,children:l,tag:e}=t,o=pt(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Title,size:z.M,tag:e,className:c,children:l}))}var ks=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function no(t){var{className:c,children:l,tag:e}=t,o=ks(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Mono,purpose:E.Title,size:z.S,tag:e,className:c,children:l}))}var Xe=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function qe(t){var{className:c,children:l,tag:e}=t,o=Xe(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Body,size:z.L,tag:e,className:c,children:l}))}var Bt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Nt(t){var{className:c,children:l,tag:e}=t,o=Bt(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Body,size:z.M,tag:e,className:c,children:l}))}var Ss=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function lo(t){var{className:c,children:l,tag:e}=t,o=Ss(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Body,size:z.S,tag:e,className:c,children:l}))}var Es=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ps(t){var{className:c,children:l,tag:e}=t,o=Es(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Display,size:z.L,tag:e,className:c,children:l}))}var zs=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Is(t){var{className:c,children:l,tag:e}=t,o=zs(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Display,size:z.M,tag:e,className:c,children:l}))}var As=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ba(t){var{className:c,children:l,tag:e}=t,o=As(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Display,size:z.S,tag:e,className:c,children:l}))}var Na=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ts(t){var{className:c,children:l,tag:e}=t,o=Na(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Headline,size:z.L,tag:e,className:c,children:l}))}var Cs=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ls(t){var{className:c,children:l,tag:e}=t,o=Cs(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Headline,size:z.M,tag:e,className:c,children:l}))}var Ms=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Ra(t){var{className:c,children:l,tag:e}=t,o=Ms(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Headline,size:z.S,tag:e,className:c,children:l}))}var Ds=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Rt(t){var{className:c,children:l,tag:e}=t,o=Ds(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Label,size:z.L,tag:e,className:c,children:l}))}var ut=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function fr(t){var{className:c,children:l,tag:e}=t,o=ut(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Label,size:z.M,tag:e,className:c,children:l}))}var io=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function co(t){var{className:c,children:l,tag:e}=t,o=io(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Label,size:z.S,tag:e,className:c,children:l}))}var po=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function uo(t){var{className:c,children:l,tag:e}=t,o=po(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Title,size:z.L,tag:e,className:c,children:l}))}var Kt=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function _t(t){var{className:c,children:l,tag:e}=t,o=Kt(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Title,size:z.M,tag:e,className:c,children:l}))}var br=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function _o(t){var{className:c,children:l,tag:e}=t,o=br(t,["className","children","tag"]);return(0,T.jsx)(B,Object.assign({},o,{family:f.Sans,purpose:E.Title,size:z.S,tag:e,className:c,children:l}))}const Bs={CrossedOutBodyL:b,CrossedOutBodyM:g,CrossedOutBodyS:m,CrossedOutDisplayL:H,CrossedOutDisplayM:U,CrossedOutDisplayS:X,CrossedOutHeadlineL:K,CrossedOutHeadlineM:me,CrossedOutHeadlineS:te,CrossedOutLabelL:Ue,CrossedOutLabelM:Pe,CrossedOutLabelS:je,CrossedOutTitleL:jt,CrossedOutTitleM:Sa,CrossedOutTitleS:Ze,LightBodyL:ao,LightBodyM:Ea,LightBodyS:tt,LightDisplayL:oo,LightDisplayM:Zo,LightDisplayS:at,LightHeadlineL:He,LightHeadlineM:Jo,LightHeadlineS:Et,LightLabelL:Pa,LightLabelM:ot,LightLabelS:zt,LightTitleL:rr,LightTitleM:$o,LightTitleS:qo,LinkBodyL:ts,LinkBodyM:os,LinkBodyS:za,LinkDisplayL:Ia,LinkDisplayM:rt,LinkDisplayS:Aa,LinkHeadlineL:Ta,LinkHeadlineM:Tt,LinkHeadlineS:lr,LinkLabelL:is,LinkLabelM:lt,LinkLabelS:ds,LinkTitleL:ps,LinkTitleM:it,LinkTitleS:Ca,MonoBodyL:ro,MonoBodyM:dt,MonoBodyS:_s,MonoDisplayL:fs,MonoDisplayM:ct,MonoDisplayS:La,MonoHeadlineL:gs,MonoHeadlineM:vs,MonoHeadlineS:hs,MonoLabelL:_r,MonoLabelM:Os,MonoLabelS:ws,MonoTitleL:js,MonoTitleM:Da,MonoTitleS:no,SansBodyL:qe,SansBodyM:Nt,SansBodyS:lo,SansDisplayL:Ps,SansDisplayM:Is,SansDisplayS:Ba,SansHeadlineL:Ts,SansHeadlineM:Ls,SansHeadlineS:Ra,SansLabelL:Rt,SansLabelM:fr,SansLabelS:co,SansTitleL:uo,SansTitleM:_t,SansTitleS:_o};var mo=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),xt=r.n(mo),ke=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Wt=r.n(ke),mt=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),gr=r.n(mt),Ka=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Ns=r.n(Ka),Rs=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Ut=r.n(Rs),Wa=r("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Ks=r.n(Wa),Ot=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+typography@0.8.13_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/styles.module.css"),ft={};ft.styleTagTransform=Ks(),ft.setAttributes=Ns(),ft.insert=gr().bind(null,"head"),ft.domAPI=Wt(),ft.insertStyleElement=Ut();var Ua=xt()(Ot.A,ft);const bt=Ot.A&&Ot.A.locals?Ot.A.locals:void 0;var vr=function(t,c){var l={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&c.indexOf(e)<0&&(l[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)c.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(l[e[o]]=t[e[o]]);return l};function Fa(t){var{tag:c=ie.span,className:l,children:e,family:o,purpose:Ft,size:gt}=t,hr=vr(t,["tag","className","children","family","purpose","size"]);return(0,h.createElement)(c,Object.assign(Object.assign({className:O()(bt.typography,l)},(0,j.z7)(hr)),{"data-family":o,"data-purpose":Ft,"data-size":gt}),e)}const B=u(Fa,Bs)},"./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"(P,S,r){r.d(S,{I:()=>O});var i=r("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function O({value:h,onChange:j,defaultValue:u}){return(0,i.iC)(h,u,f=>{const E=typeof f=="function"?f(h):f;j==null||j(E)})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.button--e2RqK[data-size=xs] .label--v6xx2{
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
}`,""]),u.locals={button:"button--e2RqK",label:"label--v6xx2",icon:"icon--mhKJI"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.button--uRD0N[data-size=xs] .label--koRqO{
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
}`,""]),u.locals={button:"button--uRD0N",label:"label--koRqO",icon:"icon--HO4sB"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.button--ASNkZ[data-size=xs] .label--RMaiY{
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
}`,""]),u.locals={button:"button--ASNkZ",label:"label--RMaiY",icon:"icon--Jyh74"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.button--uiFPu{
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
}`,""]),u.locals={button:"button--uiFPu",iconWithCounter:"iconWithCounter--MLTsu",counterForLabel:"counterForLabel--BQw2h",counterForIcon:"counterForIcon--pwNNW"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Card/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.functionBadgeWrapper--qnb0U{
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
}`,""]),u.locals={functionBadgeWrapper:"functionBadgeWrapper--qnb0U",composition:"composition--hGYYG",contentWrapper:"contentWrapper--mVkac",card:"card--axC4y",check:"check--UCn2X",anchor:"anchor--R5xgE",body:"body--DXzO_",content:"content--UGbI2",footer:"footer--BBLE1"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Action/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.action--kFRgu{
  gap:var(--space-card-gap-l, 16px);
  display:flex;
  align-items:center;
  justify-content:flex-start;
  box-sizing:border-box;
}`,""]),u.locals={action:"action--kFRgu"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/CallToAction/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.callToAction--DNRcj{
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
}`,""]),u.locals={callToAction:"callToAction--DNRcj",icon:"icon--PcseZ",label:"label--EXikX"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Dimension/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.wrapper--s9hAp{
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
}`,""]),u.locals={wrapper:"wrapper--s9hAp",valueContainer:"valueContainer--vsoxb",currentValue:"currentValue--qeT6O",oldValue:"oldValue--yLtfj",dimension:"dimension--dXFqu"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Footer/components/Promo/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.promo--SpnWV{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  box-sizing:border-box;
}`,""]),u.locals={promo:"promo--SpnWV"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/FunctionBadge/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.button--a1_fj{
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
}`,""]),u.locals={button:"button--a1_fj",triggerClassName:"triggerClassName--LW7Hz",wrapper:"wrapper--iZpw4",item:"item--QXM3k"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Header/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.titleLayout--PC3Oa{
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
}`,""]),u.locals={titleLayout:"titleLayout--PC3Oa",contentLayout:"contentLayout--QsQAa",title:"title--ImtwC",metadata:"metadata--wekTT",description:"description--XhdPZ"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/Image/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.image--HGa1V{
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
}`,""]),u.locals={image:"image--HGa1V"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Check/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.checkWrapper--mS5ex{
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
}`,""]),u.locals={checkWrapper:"checkWrapper--mS5ex",checkContainer:"checkContainer--evWp3"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/Emblem/styled.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.img--j97Uo{
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
}`,""]),u.locals={img:"img--j97Uo"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/FunctionBadgeWrapper/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.functionBadge--wwnts{
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
}`,""]),u.locals={functionBadge:"functionBadge--wwnts",functionRow:"functionRow--c8hoO"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+card@0.20.20_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/helperComponents/PromoBadge/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.promoBadge--nWzHF{
  padding-top:var(--space-card-padding-promo-badge, 4px);
  padding-right:var(--space-card-padding-promo-badge, 4px);
  position:absolute;
  top:0;
  right:0;
  box-sizing:border-box;
}

div.promoTag--yOgne{
  display:flex;
}`,""]),u.locals={promoBadge:"promoBadge--nWzHF",promoTag:"promoTag--yOgne"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.12_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.counter--EfYk8{
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
}`,""]),u.locals={counter:"counter--EfYk8",plus:"plus--ZIkBX",key:"key--yK4UM"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.12_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.horizontal--AoUft{
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
}`,""]),u.locals={horizontal:"horizontal--AoUft",vertical:"vertical--xWA2I"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.dropdownContainer--CXixW{
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
}`,""]),u.locals={dropdownContainer:"dropdownContainer--CXixW",defaultTriggerClassName:"defaultTriggerClassName--XJ5HP"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.12_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.decor--lf86u{
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
}`,""]),u.locals={decor:"decor--lf86u",icon:"icon--lnT2x"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.41_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.infoBlockFooter--SRQgU{
  gap:var(--space-info-block-footer-gap, 8px);
  display:flex;
  align-items:center;
}`,""]),u.locals={infoBlockFooter:"infoBlockFooter--SRQgU"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.41_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.contentLayout--DdKuq{
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
}`,""]),u.locals={contentLayout:"contentLayout--DdKuq",textWrap:"textWrap--uszqg",footer:"footer--vIMUc",title:"title--PBEUK",description:"description--pjZAz",infoBlock:"infoBlock--uh8xL"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.inputPrivate--GyCf_{
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
}`,""]),u.locals={inputPrivate:"inputPrivate--GyCf_"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.buttonClearValue--az5gm{
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
}`,""]),u.locals={buttonClearValue:"buttonClearValue--az5gm"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.checkbox--obkgg{
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
}`,""]),u.locals={checkbox:"checkbox--obkgg",beforeContent:"beforeContent--xcUOr",expandableIcon:"expandableIcon--cDMVm",markerContainer:"markerContainer--aALBO",droplistItem:"droplistItem--PrGNy",headline:"headline--HWzcc",innerWrapper:"innerWrapper--ixlN6",content:"content--ni08Q"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.pinTopItem--ndcxw[data-size=s]{
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
}`,""]),u.locals={pinTopItem:"pinTopItem--ndcxw",pinBottomItem:"pinBottomItem--Ir6s8"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.searchItem--HmUtB{
  width:100%;
}
.searchItem--HmUtB:focus-within, .searchItem--HmUtB:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  max-width:100%;
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}`,""]),u.locals={searchItem:"searchItem--HmUtB"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.itemWrapper--Meezm{
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
}`,""]),u.locals={itemWrapper:"itemWrapper--Meezm",listItem:"listItem--pdiV8"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.loader--sTL7G{
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
}`,""]),u.locals={loader:"loader--sTL7G",scrollStub:"scrollStub--ggSWl",footer:"footer--Gdhha",content:"content--gKbtc",virtualizedContainer:"virtualizedContainer--U0iyt",virtualizedPositionBox:"virtualizedPositionBox--I_uzU"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.listContainer--lUSiL{
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
}`,""]),u.locals={listContainer:"listContainer--lUSiL",wrapper:"wrapper--a5GRm",scrollContainerS:"scrollContainerS--uMQ4a",scrollContainerM:"scrollContainerM--MN1xb",scrollContainerL:"scrollContainerL--d68tE"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.accordion--J4l5W{
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
}`,""]),u.locals={accordion:"accordion--J4l5W",contentWrapper:"contentWrapper--uml2a",content:"content--ylX6m"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.headline--xBtsr{
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
}`,""]),u.locals={headline:"headline--xBtsr",label:"label--NNhBF",caption:"caption--X2baD",description:"description--UsJlD",content:"content--L38pE"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.listEmptyStateWrapper--HMtZI{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  padding:var(--dimension-1m, 8px);
}`,""]),u.locals={listEmptyStateWrapper:"listEmptyStateWrapper--HMtZI"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.separatorWithLabel--UEwwb{
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
}`,""]),u.locals={separatorWithLabel:"separatorWithLabel--UEwwb",label:"label--8y1Fm",separatorWithoutLabel:"separatorWithoutLabel--ZnAjf",divider:"divider--LPRRE",selectButton:"selectButton--ZOoYt"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.11_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.spinner--MR86H{
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
}`,""]),u.locals={spinner:"spinner--MR86H",spin:"spin--EqKio"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+popover-private@0.15.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.floating--_tg3w{
  display:flex;
  flex-direction:column;
}

.floatingHidden--mX9RM{
  display:none;
}`,""]),u.locals={floating:"floating--_tg3w",floatingHidden:"floatingHidden--mX9RM"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.10_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.promoTag--g55Qz{
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
}`,""]),u.locals={promoTag:"promoTag--g55Qz",labelWrapper:"labelWrapper--LNUJZ"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+search-private@0.4.37_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.container--gPU9X{
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
}`,""]),u.locals={container:"container--gPU9X",postfix:"postfix--JABn_",prefix:"prefix--kW4jP"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.tag--NwI_j{
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
}`,""]),u.locals={tag:"tag--NwI_j",tagButton:"tagButton--r2yPE",icon:"icon--Tp2MS",label:"label--XUu32"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.19_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.tag--xEVFr{
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
}`,""]),u.locals={tag:"tag--xEVFr",label:"label--jA6rc"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.container--TS4Au{
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
}`,""]),u.locals={container:"container--TS4Au",box:"box--di93D",icon:"icon--FjHdT"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.container--Brwxd{
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
}`,""]),u.locals={container:"container--Brwxd",box:"box--DWGN7",containerFlag:"containerFlag--CiX6a",flag:"flag--bPMK6",flag_icon_off:"flag_icon_off--ZG1HQ",flag_icon_on:"flag_icon_on--ImkUt"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.toggleLayout--KwCBe{
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
}`,""]),u.locals={toggleLayout:"toggleLayout--KwCBe",togglePrivate:"togglePrivate--c2UuX"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.27_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.spinner--pavMg{
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
}`,""]),u.locals={spinner:"spinner--pavMg",spin:"spin--V6hqY"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.tooltipContainer--VjQzd{
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
}`,""]),u.locals={tooltipContainer:"tooltipContainer--VjQzd",tooltipArrowContainer:"tooltipArrowContainer--_mD7p",tooltipArrowElement:"tooltipArrowElement--EMlcd"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.text1Line--GeyRn{
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
}`,""]),u.locals={text1Line:"text1Line--GeyRn",ellipsis:"ellipsis--Np4Vx",text2AndMoreLines:"text2AndMoreLines--CBS6_",tooltipTrigger:"tooltipTrigger--mPQ0O"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.wrapper--MC5Hy{
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
}`,""]),u.locals={wrapper:"wrapper--MC5Hy",truncatedText:"truncatedText--WlhG8",fullText:"fullText--Ww7IT",textContainer:"textContainer--QGX16"};const f=u},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+typography@0.8.13_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/styles.module.css"(P,S,r){r.d(S,{A:()=>f});var i=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),O=r.n(i),h=r("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),j=r.n(h),u=j()(O());u.push([P.id,`.typography--TxEAL{
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
}`,""]),u.locals={typography:"typography--TxEAL"};const f=u}}]);})();
