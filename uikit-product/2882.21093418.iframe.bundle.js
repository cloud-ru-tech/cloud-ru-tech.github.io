"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2882],{"./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js":((y,m,e)=>{e.d(m,{Qn:()=>r,SK:()=>f,_B:()=>l,dk:()=>_,xz:()=>s});const s={Primary:"primary",Neutral:"neutral",Destructive:"destructive"},_={Button:"button",Submit:"submit",Reset:"reset"},r={Blank:"_blank",Self:"_self",Parent:"_parent",Top:"_top"},f={Xs:"xs",S:"s",M:"m",L:"l"},l={Before:"before",After:"after"}}),"./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js":((y,m,e)=>{e.d(m,{A:()=>S});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(_),f=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),n=e("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),b;(function(t){t.LabelOnly="label-only",t.IconOnly="icon-only",t.IconBefore="icon-before",t.IconAfter="icon-after"})(b||(b={}));const O={[n.xz.Neutral]:"neutral",[n.xz.Primary]:"primary",[n.xz.Destructive]:"red"};var I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(I),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),L=e.n(T),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),W=e.n(z),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(D),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),A=e.n(w),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(h),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"),g={};g.styleTagTransform=K(),g.setAttributes=M(),g.insert=W().bind(null,"head"),g.domAPI=L(),g.insertStyleElement=A();var X=k()(P.A,g);const d=P.A&&P.A.locals?P.A.locals:void 0;var v=e("./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"),E=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js");function c({label:t,icon:o,iconPosition:u}){return t&&o&&u===n._B.After?b.IconAfter:t&&o&&u===n._B.Before?b.IconBefore:t?b.LabelOnly:b.IconOnly}function j({counter:t,loading:o,disabled:u,counterForIcon:a,"data-test-id":p}){return typeof(t==null?void 0:t.value)=="number"&&!o&&!u?(0,s.jsx)("span",{"data-test-id":`${p!=null?p:"button"}__counter`,className:r()(a?d.counterForIcon:d.counterForLabel),children:(0,s.jsx)(v.p,Object.assign({},t))}):void 0}function Q({icon:t,iconClassName:o,loading:u,wrappedCounter:a}){if(u)return(0,s.jsx)("span",{"data-test-id":"loading-icon",className:o,children:(0,s.jsx)(E.b,{size:"s"})});if(t)return(0,s.jsxs)("span",{"data-test-id":"icon",className:r()(o,{[d.iconWithCounter]:!!a}),children:[t,a]})}function Z({label:t,labelClassName:o,wrappedCounter:u}){return t?(0,s.jsxs)("span",{"data-test-id":"label",className:o,children:[t,u]}):void 0}function i({icon:t,label:o,iconPosition:u,iconClassName:a,labelClassName:p,loading:C,disabled:F,counter:U,"data-test-id":Y}){const R=t&&(u===n._B.After||!o),B=j({counter:U,loading:C,disabled:F,counterForIcon:R,"data-test-id":Y}),N=Q({icon:t,iconClassName:a,loading:C,wrappedCounter:R?B:void 0}),V=Z({label:o,labelClassName:p,wrappedCounter:R?void 0:B});switch(u){case n._B.Before:return(0,s.jsxs)(s.Fragment,{children:[N,V]});case n._B.After:default:return(0,s.jsxs)(s.Fragment,{children:[V,N]})}}var x=function(t,o){var u={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&o.indexOf(a)<0&&(u[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,a=Object.getOwnPropertySymbols(t);p<a.length;p++)o.indexOf(a[p])<0&&Object.prototype.propertyIsEnumerable.call(t,a[p])&&(u[a[p]]=t[a[p]]);return u};const S=(0,f.forwardRef)((t,o)=>{var{className:u,disabled:a,href:p,icon:C,iconClassName:F,iconPosition:U=n._B.After,label:Y,labelClassName:R,loading:B,onClick:N,onKeyDown:V,onFocus:q,onBlur:ee,counter:te,size:se,target:ne=n.Qn.Blank,type:oe=n.dk.Button,appearance:ae=n.xz.Primary,tabIndex:le=0,fullWidth:de}=t,G=x(t,["className","disabled","href","icon","iconClassName","iconPosition","label","labelClassName","loading","onClick","onKeyDown","onFocus","onBlur","counter","size","target","type","appearance","tabIndex","fullWidth"]);const re=c({label:Y,iconPosition:U,icon:C}),H=i({icon:C,iconClassName:F,iconPosition:U,label:Y,labelClassName:R,loading:B,disabled:a,counter:te,"data-test-id":G["data-test-id"]}),ie=B||a?-1:le,ue=J=>{if(a||B){J.preventDefault();return}N&&N(J)},$=Object.assign(Object.assign({},(0,l.z7)(G)),{className:r()(d.button,u),"data-disabled":a||void 0,"aria-disabled":a||void 0,"data-loading":B||void 0,"data-size":se,"data-full-width":de||void 0,"data-appearance":O[ae],"data-variant":re,onClick:ue,onKeyDown:V,onFocus:q,onBlur:ee,tabIndex:ie});return p?(0,s.jsx)("a",Object.assign({role:"button",href:p,target:ne},$,{ref:o,children:H})):(0,s.jsx)("button",Object.assign({},$,{type:oe,ref:o,children:H}))})}),"./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js":((y,m,e)=>{e.d(m,{F:()=>_,a:()=>s});function s({counter:r}){return{counter:r}}function _({disabled:r,href:f,icon:l,label:n,loading:b,onClick:O,onFocus:I,onBlur:k,onKeyDown:T}){return{disabled:r,href:f,icon:l,label:n,loading:b,onClick:O,onKeyDown:T,onFocus:I,onBlur:k}}}),"./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js":((y,m,e)=>{e.d(m,{p:()=>Z});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(_),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const l={Primary:"primary",Neutral:"neutral",Red:"red"},n={Count:"count",CountPlus:"count-plus",CountK:"count-k"},b={S:"s",M:"m"},O={Accent:"accent",Decor:"decor"},I=10,k=1e3,T="K";var L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),z=e.n(L),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),D=e.n(W),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),w=e.n(M),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),h=e.n(A),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),P=e.n(K),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),X=e.n(g),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),v={};v.styleTagTransform=X(),v.setAttributes=h(),v.insert=w().bind(null,"head"),v.domAPI=D(),v.insertStyleElement=P();var E=z()(d.A,v);const c=d.A&&d.A.locals?d.A.locals:void 0;function j({value:i,variant:x,plusLimit:S}){if(x===n.Count)return i;if(x===n.CountPlus)return i<S?i:(0,s.jsxs)(s.Fragment,{children:[S-1,(0,s.jsx)("span",{className:c.plus,children:"+"})]});if(x===n.CountK)return i<k?i:(0,s.jsxs)(s.Fragment,{children:[Math.round(i/k),(0,s.jsx)("span",{className:c.key,children:T})]})}var Q=function(i,x){var S={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&x.indexOf(t)<0&&(S[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(i);o<t.length;o++)x.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(i,t[o])&&(S[t[o]]=i[t[o]]);return S};function Z(i){var{value:x,appearance:S=l.Primary,variant:t=n.Count,size:o=b.S,plusLimit:u=I,color:a=O.Accent,className:p}=i,C=Q(i,["value","appearance","variant","size","plusLimit","color","className"]);const F=j({value:x,variant:t,plusLimit:u});return(0,s.jsx)("div",Object.assign({className:r()(c.counter,p)},(0,f.z7)(C),{"data-size":o,"data-variant":t,"data-appearance":S,"data-color":a,children:F}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js":((y,m,e)=>{e.d(m,{b:()=>X});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(_),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),l=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(n),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=e.n(O),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(k),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),z=e.n(L),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=e.n(W),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),w=e.n(M),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),h={};h.styleTagTransform=w(),h.setAttributes=z(),h.insert=T().bind(null,"head"),h.domAPI=I(),h.insertStyleElement=D();var K=b()(A.A,h);const P=A.A&&A.A.locals?A.A.locals:void 0;var g=function(d,v){var E={};for(var c in d)Object.prototype.hasOwnProperty.call(d,c)&&v.indexOf(c)<0&&(E[c]=d[c]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,c=Object.getOwnPropertySymbols(d);j<c.length;j++)v.indexOf(c[j])<0&&Object.prototype.propertyIsEnumerable.call(d,c[j])&&(E[c[j]]=d[c[j]]);return E};function X(d){var{size:v=l.K.S,className:E}=d,c=g(d,["size","className"]);return(0,s.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:r()(P.sun,E)},(0,f.z7)(c),{"data-size":v,children:[(0,s.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}}),"./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js":((y,m,e)=>{e.d(m,{K:()=>s});const s={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css":((y,m,e)=>{e.d(m,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(r),l=f()(_());l.push([y.id,`.button--Ci4Su{
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
.button--Ci4Su[data-full-width]{
  flex-grow:1;
  flex-shrink:1;
  width:100%;
}
.button--Ci4Su > *{
  cursor:pointer;
}
.button--Ci4Su:disabled, .button--Ci4Su[data-disabled], .button--Ci4Su[data-loading]{
  cursor:not-allowed;
}
.button--Ci4Su:disabled > *, .button--Ci4Su[data-disabled] > *, .button--Ci4Su[data-loading] > *{
  cursor:not-allowed;
}

.iconWithCounter--mr9pl{
  position:relative;
}

.counterForLabel--QRwOw{
  margin-left:var(--dimension-theme-general-4px, 4px);
}

.counterForIcon--OonET{
  position:absolute;
  top:-8px;
  left:calc(100% - 8px);
}`,""]),l.locals={button:"button--Ci4Su",iconWithCounter:"iconWithCounter--mr9pl",counterForLabel:"counterForLabel--QRwOw",counterForIcon:"counterForIcon--OonET"};const n=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@0.8.10_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css":((y,m,e)=>{e.d(m,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(r),l=f()(_());l.push([y.id,`.counter--X66vA{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  border:0 solid transparent;
}
.counter--X66vA[data-color=accent][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=accent][data-appearance=neutral]{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-accent-default, #787b8a);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=accent][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
  background-color:var(--sys-red-accent-default, #cb3f3e);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=decor][data-appearance=primary]{
  color:var(--sys-primary-text-main, #1b5840);
  background-color:var(--sys-primary-decor-default, #caeadb);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=decor][data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-color=decor][data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--X66vA[data-size=s]{
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
.counter--X66vA[data-size=s] .plus--hs8PR{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--X66vA[data-size=s] .key--zBbeI{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.counter--X66vA[data-size=m]{
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
.counter--X66vA[data-size=m] .plus--hs8PR{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--X66vA[data-size=m] .key--zBbeI{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}`,""]),l.locals={counter:"counter--X66vA",plus:"plus--hs8PR",key:"key--zBbeI"};const n=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css":((y,m,e)=>{e.d(m,{A:()=>n});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(s),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(r),l=f()(_());l.push([y.id,`.sun--lvFtW{
  pointer-events:none;
  fill:currentColor;
}
.sun--lvFtW[data-size=xs]{
  width:var(--size-loader-loader-xs, 16px);
  height:var(--size-loader-loader-xs, 16px);
}
.sun--lvFtW[data-size=s]{
  width:var(--size-loader-loader-s, 24px);
  height:var(--size-loader-loader-s, 24px);
}
.sun--lvFtW[data-size=m]{
  width:var(--size-loader-loader-m, 48px);
  height:var(--size-loader-loader-m, 48px);
}
.sun--lvFtW[data-size=l]{
  width:var(--size-loader-loader-l, 72px);
  height:var(--size-loader-loader-l, 72px);
}
.sun--lvFtW > path{
  stroke:currentColor;
  animation-name:loading-wheel--Y7stf;
  animation-timing-function:linear;
  animation-iteration-count:infinite;
}
.sun--lvFtW > path:nth-child(1){
  animation-duration:1000ms;
  animation-delay:-125ms;
}
.sun--lvFtW > path:nth-child(2){
  animation-duration:1000ms;
  animation-delay:-250ms;
}
.sun--lvFtW > path:nth-child(3){
  animation-duration:1000ms;
  animation-delay:-375ms;
}
.sun--lvFtW > path:nth-child(4){
  animation-duration:1000ms;
  animation-delay:-500ms;
}
.sun--lvFtW > path:nth-child(5){
  animation-duration:1000ms;
  animation-delay:-625ms;
}
.sun--lvFtW > path:nth-child(6){
  animation-duration:1000ms;
  animation-delay:-750ms;
}
.sun--lvFtW > path:nth-child(7){
  animation-duration:1000ms;
  animation-delay:-875ms;
}
.sun--lvFtW > path:nth-child(8){
  animation-duration:1000ms;
  animation-delay:-1000ms;
}

@keyframes loading-wheel--Y7stf{
  0%{
    opacity:1;
  }
  90%{
    opacity:0.125;
  }
  100%{
    opacity:1;
  }
}`,""]),l.locals={sun:"sun--lvFtW","loading-wheel":"loading-wheel--Y7stf"};const n=l})}]);})();
