"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[1392],{"./node_modules/.pnpm/@snack-uikit+button@1.0.1_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"(v,p,e){e.d(p,{Qn:()=>r,SK:()=>f,_B:()=>d,dk:()=>_,xz:()=>t});const t={Primary:"primary",Neutral:"neutral",Destructive:"destructive"},_={Button:"button",Submit:"submit",Reset:"reset"},r={Blank:"_blank",Self:"_self",Parent:"_parent",Top:"_top"},f={Xs:"xs",S:"s",M:"m",L:"l"},d={Before:"before",After:"after"}},"./node_modules/.pnpm/@snack-uikit+button@1.0.1_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js"(v,p,e){e.d(p,{A:()=>S});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(_),f=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),n=e("./node_modules/.pnpm/@snack-uikit+button@1.0.1_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),b;(function(s){s.LabelOnly="label-only",s.IconOnly="icon-only",s.IconBefore="icon-before",s.IconAfter="icon-after"})(b||(b={}));const T={[n.xz.Neutral]:"neutral",[n.xz.Primary]:"primary",[n.xz.Destructive]:"red"};var O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(O),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),z=e.n(I),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=e.n(C),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),w=e.n(M),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),A=e.n(W),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(h),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@1.0.1_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"),g={};g.styleTagTransform=K(),g.setAttributes=w(),g.insert=D().bind(null,"head"),g.domAPI=z(),g.insertStyleElement=A();var U=k()(P.A,g);const l=P.A&&P.A.locals?P.A.locals:void 0;var y=e("./node_modules/.pnpm/@snack-uikit+counter@1.0.1_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"),E=e("./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js");function m({label:s,icon:o,iconPosition:u}){return s&&o&&u===n._B.After?b.IconAfter:s&&o&&u===n._B.Before?b.IconBefore:s?b.LabelOnly:b.IconOnly}function j({counter:s,loading:o,disabled:u,counterForIcon:a,"data-test-id":c}){return typeof(s==null?void 0:s.value)=="number"&&!o&&!u?(0,t.jsx)("span",{"data-test-id":`${c!=null?c:"button"}__counter`,className:r()(a?l.counterForIcon:l.counterForLabel),children:(0,t.jsx)(y.p,Object.assign({},s))}):void 0}function V({icon:s,iconClassName:o,loading:u,wrappedCounter:a}){if(u)return(0,t.jsx)("span",{"data-test-id":"loading-icon",className:o,children:(0,t.jsx)(E.b,{size:"s"})});if(s){const c=r()(o,{[l.iconWithCounter]:!!a});return(0,t.jsxs)("span",{"data-test-id":"icon",className:c,children:[s,a]})}}function H({label:s,labelClassName:o,wrappedCounter:u}){return s?(0,t.jsxs)("span",{"data-test-id":"label",className:o,children:[s,u]}):void 0}function i({icon:s,label:o,iconPosition:u,iconClassName:a,labelClassName:c,loading:B,disabled:R,counter:Z,"data-test-id":Q}){const F=s&&(u===n._B.After||!o),L=j({counter:Z,loading:B,disabled:R,counterForIcon:F,"data-test-id":Q}),N=V({icon:s,iconClassName:a,loading:B,wrappedCounter:F?L:void 0}),X=H({label:o,labelClassName:c,wrappedCounter:F?void 0:L});switch(u){case n._B.Before:return(0,t.jsxs)(t.Fragment,{children:[N,X]});case n._B.After:default:return(0,t.jsxs)(t.Fragment,{children:[X,N]})}}var x=function(s,o){var u={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&o.indexOf(a)<0&&(u[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(s);c<a.length;c++)o.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(s,a[c])&&(u[a[c]]=s[a[c]]);return u};const S=(0,f.forwardRef)((s,o)=>{var{className:u,disabled:a,href:c,icon:B,iconClassName:R,iconPosition:Z=n._B.After,label:Q,labelClassName:F,loading:L,onClick:N,onKeyDown:X,onFocus:q,onBlur:ee,counter:se,size:te,target:ne=n.Qn.Blank,type:oe=n.dk.Button,appearance:ae=n.xz.Primary,tabIndex:de=0,fullWidth:le}=s,Y=x(s,["className","disabled","href","icon","iconClassName","iconPosition","label","labelClassName","loading","onClick","onKeyDown","onFocus","onBlur","counter","size","target","type","appearance","tabIndex","fullWidth"]);const re=m({label:Q,iconPosition:Z,icon:B}),G=i({icon:B,iconClassName:R,iconPosition:Z,label:Q,labelClassName:F,loading:L,disabled:a,counter:se,"data-test-id":Y["data-test-id"]}),ie=L||a?-1:de,ue=J=>{if(a||L){J.preventDefault();return}N&&N(J)},$=Object.assign(Object.assign({},(0,d.z7)(Y)),{className:r()(l.button,u),"data-disabled":a||void 0,"aria-disabled":a||void 0,"data-loading":L||void 0,"data-size":te,"data-full-width":le||void 0,"data-appearance":T[ae],"data-variant":re,onClick:ue,onKeyDown:X,onFocus:q,onBlur:ee,tabIndex:ie});return c?(0,t.jsx)("a",Object.assign({role:"button",href:c,target:ne},$,{ref:o,children:G})):(0,t.jsx)("button",Object.assign({},$,{type:oe,ref:o,children:G}))})},"./node_modules/.pnpm/@snack-uikit+button@1.0.1_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js"(v,p,e){e.d(p,{F:()=>_,a:()=>t});function t({counter:r}){return{counter:r}}function _({disabled:r,href:f,icon:d,label:n,loading:b,onClick:T,onFocus:O,onBlur:k,onKeyDown:I}){return{disabled:r,href:f,icon:d,label:n,loading:b,onClick:T,onKeyDown:I,onFocus:O,onBlur:k}}},"./node_modules/.pnpm/@snack-uikit+counter@1.0.1_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"(v,p,e){e.d(p,{p:()=>H});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(_),f=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const d={Primary:"primary",Neutral:"neutral",Red:"red"},n={Count:"count",CountPlus:"count-plus",CountK:"count-k"},b={S:"s",M:"m"},T={Accent:"accent",Decor:"decor"},O=10,k=1e3,I="K";var z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(z),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),M=e.n(D),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),W=e.n(w),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),h=e.n(A),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),P=e.n(K),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),U=e.n(g),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@1.0.1_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"),y={};y.styleTagTransform=U(),y.setAttributes=h(),y.insert=W().bind(null,"head"),y.domAPI=M(),y.insertStyleElement=P();var E=C()(l.A,y);const m=l.A&&l.A.locals?l.A.locals:void 0;function j({value:i,variant:x,plusLimit:S}){if(x===n.Count)return i;if(x===n.CountPlus)return i<S?i:(0,t.jsxs)(t.Fragment,{children:[S-1,(0,t.jsx)("span",{className:m.plus,children:"+"})]});if(x===n.CountK)return i<k?i:(0,t.jsxs)(t.Fragment,{children:[Math.round(i/k),(0,t.jsx)("span",{className:m.key,children:I})]})}var V=function(i,x){var S={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&x.indexOf(s)<0&&(S[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)x.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(S[s[o]]=i[s[o]]);return S};function H(i){var{value:x,appearance:S=d.Primary,variant:s=n.Count,size:o=b.S,plusLimit:u=O,color:a=T.Accent,className:c}=i,B=V(i,["value","appearance","variant","size","plusLimit","color","className"]);const R=j({value:x,variant:s,plusLimit:u});return(0,t.jsx)("div",Object.assign({className:r()(m.counter,c)},(0,f.z7)(B),{"data-size":o,"data-variant":s,"data-appearance":S,"data-color":a,children:R}))}},"./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js"(v,p,e){e.d(p,{b:()=>U});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(_),f=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),d=e("./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(n),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=e.n(T),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),I=e.n(k),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),C=e.n(z),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=e.n(D),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=e.n(w),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"),h={};h.styleTagTransform=W(),h.setAttributes=C(),h.insert=I().bind(null,"head"),h.domAPI=O(),h.insertStyleElement=M();var K=b()(A.A,h);const P=A.A&&A.A.locals?A.A.locals:void 0;var g=function(l,y){var E={};for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&y.indexOf(m)<0&&(E[m]=l[m]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,m=Object.getOwnPropertySymbols(l);j<m.length;j++)y.indexOf(m[j])<0&&Object.prototype.propertyIsEnumerable.call(l,m[j])&&(E[m[j]]=l[m[j]]);return E};function U(l){var{size:y=d.K.S,className:E}=l,m=g(l,["size","className"]);return(0,t.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"SunSVG",className:r()(P.sun,E)},(0,f.z7)(m),{"data-size":y,children:[(0,t.jsx)("path",{d:"M12 4V7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M6.34302 6.34314L8.46434 8.46446",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M4 12L7 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M6.34302 17.6569L8.46434 15.5355",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M12 17V20",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M15.5354 15.5355L17.6567 17.6568",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M17 12L20 12",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M15.5354 8.46448L17.6567 6.34316",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}},"./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"(v,p,e){e.d(p,{K:()=>t});const t={XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@1.0.1_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/styles.module.css"(v,p,e){e.d(p,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(r),d=f()(_());d.push([v.id,`.button--iZcqc{
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
.button--iZcqc[data-full-width]{
  flex-grow:1;
  flex-shrink:1;
  width:100%;
}
.button--iZcqc > *{
  cursor:pointer;
}
.button--iZcqc:disabled, .button--iZcqc[data-disabled], .button--iZcqc[data-loading]{
  cursor:not-allowed;
}
.button--iZcqc:disabled > *, .button--iZcqc[data-disabled] > *, .button--iZcqc[data-loading] > *{
  cursor:not-allowed;
}

.iconWithCounter--C4Fwo{
  position:relative;
}

.counterForLabel--D6V38{
  margin-left:var(--dimension-theme-general-4px, 4px);
}

.counterForIcon--Z1z6v{
  position:absolute;
  top:-8px;
  left:calc(100% - 8px);
}`,""]),d.locals={button:"button--iZcqc",iconWithCounter:"iconWithCounter--C4Fwo",counterForLabel:"counterForLabel--D6V38",counterForIcon:"counterForIcon--Z1z6v"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+counter@1.0.1_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/styles.module.css"(v,p,e){e.d(p,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(r),d=f()(_());d.push([v.id,`.counter--ndSss{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  border:0 solid transparent;
}
.counter--ndSss[data-color=accent][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--ndSss[data-color=accent][data-appearance=neutral]{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-accent-default, #787b8a);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--ndSss[data-color=accent][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
  background-color:var(--sys-red-accent-default, #cb3f3e);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--ndSss[data-color=decor][data-appearance=primary]{
  color:var(--sys-primary-text-main, #1b5840);
  background-color:var(--sys-primary-decor-default, #caeadb);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--ndSss[data-color=decor][data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--ndSss[data-color=decor][data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
  border-color:var(--sys-neutral-background1-level, #fdfdfd);
}
.counter--ndSss[data-size=s]{
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
.counter--ndSss[data-size=s] .plus--emZFB{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--ndSss[data-size=s] .key--HsLv4{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.counter--ndSss[data-size=m]{
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
.counter--ndSss[data-size=m] .plus--emZFB{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.counter--ndSss[data-size=m] .key--HsLv4{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}`,""]),d.locals={counter:"counter--ndSss",plus:"plus--emZFB",key:"key--HsLv4"};const n=d},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/styles.module.css"(v,p,e){e.d(p,{A:()=>n});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),_=e.n(t),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),f=e.n(r),d=f()(_());d.push([v.id,`.sun--vyTdQ{
  pointer-events:none;
  fill:currentColor;
}
.sun--vyTdQ[data-size=xs]{
  width:var(--size-loader-loader-xs, 16px);
  height:var(--size-loader-loader-xs, 16px);
}
.sun--vyTdQ[data-size=s]{
  width:var(--size-loader-loader-s, 24px);
  height:var(--size-loader-loader-s, 24px);
}
.sun--vyTdQ[data-size=m]{
  width:var(--size-loader-loader-m, 48px);
  height:var(--size-loader-loader-m, 48px);
}
.sun--vyTdQ[data-size=l]{
  width:var(--size-loader-loader-l, 72px);
  height:var(--size-loader-loader-l, 72px);
}
.sun--vyTdQ > path{
  stroke:currentColor;
  animation-name:loading-wheel--zWcBe;
  animation-timing-function:linear;
  animation-iteration-count:infinite;
}
.sun--vyTdQ > path:nth-child(1){
  animation-duration:1000ms;
  animation-delay:-125ms;
}
.sun--vyTdQ > path:nth-child(2){
  animation-duration:1000ms;
  animation-delay:-250ms;
}
.sun--vyTdQ > path:nth-child(3){
  animation-duration:1000ms;
  animation-delay:-375ms;
}
.sun--vyTdQ > path:nth-child(4){
  animation-duration:1000ms;
  animation-delay:-500ms;
}
.sun--vyTdQ > path:nth-child(5){
  animation-duration:1000ms;
  animation-delay:-625ms;
}
.sun--vyTdQ > path:nth-child(6){
  animation-duration:1000ms;
  animation-delay:-750ms;
}
.sun--vyTdQ > path:nth-child(7){
  animation-duration:1000ms;
  animation-delay:-875ms;
}
.sun--vyTdQ > path:nth-child(8){
  animation-duration:1000ms;
  animation-delay:-1000ms;
}

@keyframes loading-wheel--zWcBe{
  0%{
    opacity:1;
  }
  90%{
    opacity:0.125;
  }
  100%{
    opacity:1;
  }
}`,""]),d.locals={sun:"sun--vyTdQ","loading-wheel":"loading-wheel--zWcBe"};const n=d}}]);})();
