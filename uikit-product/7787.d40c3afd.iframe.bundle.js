"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[6686,7787,8120,9847],{"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js":((O,_,e)=>{e.d(_,{K:()=>P});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(l),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const o={Text:"text",Password:"password",Number:"number",Tel:"tel",Email:"email",Url:"url"},C={Text:"text",Decimal:"decimal",Numeric:"numeric",Tel:"tel",Search:"search",Email:"email",Url:"url",None:"none"};var h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(h),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=e.n(X),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),K=e.n(N),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n(H),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),F=e.n(L),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Y=e.n(I),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"),S={};S.styleTagTransform=Y(),S.setAttributes=R(),S.insert=K().bind(null,"head"),S.domAPI=W(),S.insertStyleElement=F();var M=w()(z.A,S);const k=z.A&&z.A.locals?z.A.locals:void 0;var x=function(c,v){var b={};for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&v.indexOf(p)<0&&(b[p]=c[p]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,p=Object.getOwnPropertySymbols(c);n<p.length;n++)v.indexOf(p[n])<0&&Object.prototype.propertyIsEnumerable.call(c,p[n])&&(b[p[n]]=c[p[n]]);return b};const P=(0,d.forwardRef)((c,v)=>{var{name:b,value:p="",onChange:n,placeholder:T,id:t,className:s,type:j=o.Text,inputMode:A=C.Text,disabled:f=!1,readonly:U=!1,autoComplete:D=!1,autoFocus:Q=!1,maxLength:ee,min:i,max:g,step:E,onFocus:m,onBlur:y,onKeyDown:G,onPaste:Z,tabIndex:$=0,onClick:B,onMouseDown:J,spellCheck:oe,pattern:V}=c,te=x(c,["name","value","onChange","placeholder","id","className","type","inputMode","disabled","readonly","autoComplete","autoFocus","maxLength","min","max","step","onFocus","onBlur","onKeyDown","onPaste","tabIndex","onClick","onMouseDown","spellCheck","pattern"]);const re=se=>{n==null||n(se.target.value,se)};let q;switch(D){case!0:q="on";break;case!1:q="off";break;default:q=D;break}return(0,a.jsx)("input",Object.assign({name:b,maxLength:ee,id:t,className:u()(s,k.inputPrivate),autoComplete:q,ref:v,value:p,onChange:re,placeholder:T,type:j,inputMode:A,disabled:f,readOnly:U,onFocus:m,onBlur:y,onKeyDown:G,onPaste:Z,tabIndex:$,onClick:B,onMouseDown:J,min:i,max:g,step:E,spellCheck:oe,title:"",pattern:V,autoFocus:Q},(0,r.z7)(te)))})}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js":((O,_,e)=>{e.d(_,{Ev:()=>l,SK:()=>a,Vp:()=>u,_h:()=>d});const a={S:"s",M:"m",L:"l"},l={Xs:16,S:24},u={S:"s",M:"m"},d={[a.S]:u.S,[a.M]:u.M,[a.L]:u.M}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js":((O,_,e)=>{e.d(_,{G8:()=>a,OE:()=>r,Sf:()=>d,Ub:()=>l,z$:()=>u});function a(o){var C;const h=(C=o==null?void 0:o.value.length)!==null&&C!==void 0?C:0;o==null||o.setSelectionRange(h,h)}function l(o){o==null||o.setSelectionRange(0,o==null?void 0:o.value.length)}function u(o){setTimeout(o,0)}function d(o){return(o==null?void 0:o.selectionStart)===0}function r(o){var C;return(o==null?void 0:o.selectionStart)===((C=o==null?void 0:o.value)===null||C===void 0?void 0:C.length)}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js":((O,_,e)=>{e.d(_,{C:()=>r});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),d=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js");function r({inputRef:o,setInputFocus:C=()=>{var K;return(K=o.current)===null||K===void 0?void 0:K.focus()},postfixButtons:h,prefixButtons:w=[],onButtonKeyDown:X=()=>{},readonly:W,submitKeys:N}){const[K,H]=(0,l.useState)(0),R=(0,u.A)(X),L=(0,l.useCallback)(()=>w.map(()=>-1),[w]),[F,I]=(0,l.useState)(L),Y=(0,l.useCallback)(()=>h.map(()=>-1),[h]),[z,S]=(0,l.useState)(Y),M=(0,l.useCallback)((t,s)=>{const j=s==="ArrowLeft"?-1:1,A=f=>s==="ArrowLeft"?f>=0:f<w.length;for(let f=t+j;A(f);f+=j)if(w[f].active&&w[f].show)return f;return t},[w]),k=(0,l.useCallback)((t,s)=>{const j=s==="ArrowLeft"?-1:1,A=f=>s==="ArrowLeft"?f>=0:f<h.length;for(let f=t+j;A(f);f+=j)if(h[f].active&&h[f].show)return f;return t},[h]),x=(0,l.useCallback)(()=>{H(0),I(L),S(Y)},[L,Y]),P=(0,l.useCallback)(()=>{x(),C()},[x,C]),c=(0,l.useCallback)(t=>{var s,j;H(-1),I(A=>A.map((f,U)=>U===t?0:-1)),S(Y),!((s=w[t])===null||s===void 0)&&s.active&&((j=w[t].ref.current)===null||j===void 0||j.focus())},[Y,w]),v=(0,l.useCallback)(t=>{var s,j;H(-1),I(L),S(A=>A.map((f,U)=>U===t?0:-1)),!((s=h[t])===null||s===void 0)&&s.active&&((j=h[t].ref.current)===null||j===void 0||j.focus())},[L,h]),b=(0,l.useCallback)(t=>{if(x(),t.key==="ArrowRight"&&(W||(0,d.OE)(o.current))){const s=k(-1,t.key);s>=0&&v(s)}if(t.key==="ArrowLeft"&&(W||(0,d.Sf)(o.current))){const s=M(w.length,t.key);s>=0&&c(s)}},[k,M,v,c,o,w.length,W,x]),p=(0,l.useCallback)(t=>s=>{if(s.key==="ArrowRight"){const j=M(t,s.key);t===j?(s.preventDefault(),P(),W&&(0,d.z$)(()=>(0,d.Ub)(o.current))):c(j)}s.key==="ArrowLeft"&&t<=w.length-1&&c(M(t,s.key)),N.includes(s.key)&&(0,d.z$)(()=>x()),R==null||R(s)},[R,w.length,M,c,P,o,W,x,N]),n=(0,l.useCallback)(t=>s=>{if(s.key==="ArrowLeft"){const j=k(t,s.key);t===j?(s.preventDefault(),P(),W&&(0,d.z$)(()=>(0,d.Ub)(o.current))):v(j)}s.key==="ArrowRight"&&t<=h.length-1&&v(k(t,s.key)),N.includes(s.key)&&(0,d.z$)(()=>x()),R==null||R(s)},[R,h.length,k,v,P,o,W,x,N]),T=(0,l.useCallback)(()=>{(0,d.z$)(()=>x())},[x]);return{inputTabIndex:K,onInputKeyDown:b,setInitialTabIndices:x,prefixButtons:w.some(t=>t.show)?(0,a.jsx)(a.Fragment,{children:w.map((t,s)=>t.show?t.active?t.render({key:t.id,ref:t.ref,tabIndex:F[s],onKeyDown:p(s),onClick:T}):t.render({key:t.id}):null)}):void 0,postfixButtons:h.some(t=>t.show)?(0,a.jsx)(a.Fragment,{children:h.map((t,s)=>t.show?t.active?t.render({key:t.id,ref:t.ref,tabIndex:z[s],onKeyDown:n(s),onClick:T}):t.render({key:t.id}):null)}):void 0}}}),"./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js":((O,_,e)=>{e.d(_,{r:()=>k});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),d=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),r=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(o),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=e.n(h),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),W=e.n(X),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),K=e.n(N),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=e.n(H),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),F=e.n(L),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css"),Y={};Y.styleTagTransform=F(),Y.setAttributes=K(),Y.insert=W().bind(null,"head"),Y.domAPI=w(),Y.insertStyleElement=R();var z=C()(I.A,Y);const S=I.A&&I.A.locals?I.A.locals:void 0,M=(0,l.forwardRef)(({size:x,onClick:P,tabIndex:c=-1,onKeyDown:v},b)=>{const p=n=>{n.stopPropagation(),P(n)};return(0,a.jsxs)("button",{className:S.buttonClearValue,"data-size":x,onClick:p,"data-test-id":"button-clear-value",type:"button",ref:b,onKeyDown:v,tabIndex:c,children:[x===d.Vp.S&&(0,a.jsx)(r.A,{size:16}),x===d.Vp.M&&(0,a.jsx)(r.A,{})]})});function k({clearButtonRef:x,showClearButton:P,size:c,onClear:v}){const b=(0,u.A)(v);return(0,l.useMemo)(()=>({id:"clear",active:!0,ref:x,show:P,render:p=>{const n=T=>{p.onClick(T),b(T)};return(0,a.jsx)(M,Object.assign({},p,{size:d._h[c],onClick:n}))}}),[x,b,P,c])}}),"./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.8_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/PromoTag.js":((O,_,e)=>{e.d(_,{e:()=>c});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(l),d=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.11_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),r=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const o={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},C={Accent:"accent",Decor:"decor"},h={Xxs:"xxs",Xs:"xs",S:"s"};var w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=e.n(w),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),N=e.n(W),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=e.n(K),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=e.n(R),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=e.n(F),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),z=e.n(Y),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.8_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css"),M={};M.styleTagTransform=z(),M.setAttributes=L(),M.insert=H().bind(null,"head"),M.domAPI=N(),M.insertStyleElement=I();var k=X()(S.A,M);const x=S.A&&S.A.locals?S.A.locals:void 0;var P=function(v,b){var p={};for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&b.indexOf(n)<0&&(p[n]=v[n]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var T=0,n=Object.getOwnPropertySymbols(v);T<n.length;T++)b.indexOf(n[T])<0&&Object.prototype.propertyIsEnumerable.call(v,n[T])&&(p[n[T]]=v[n[T]]);return p};function c(v){var{appearance:b=o.Primary,color:p=C.Accent,size:n=h.Xxs,className:T,text:t,beforeContent:s,afterContent:j,onClick:A}=v,f=P(v,["appearance","color","size","className","text","beforeContent","afterContent","onClick"]);const U=n!==h.Xxs,D=A?{role:"button",tabIndex:0,onClick:A}:{},Q=n===h.S?d.o.SansLabelM:d.o.SansLabelS;return(0,a.jsxs)("div",Object.assign({className:u()(x.promoTag,T)},(0,r.z7)(f),{"data-appearance":b,"data-color":p,"data-size":n},D,{children:[U&&s,!!t&&(0,a.jsx)(Q,{className:x.labelWrapper,tag:"span",children:t}),U&&j]}))}}),"./node_modules/.pnpm/@snack-uikit+search-private@0.4.29_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/SearchPrivate.js":((O,_,e)=>{e.d(_,{s:()=>j});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(l),d=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js"),C=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),h=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),w=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"),X=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),W=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js"),N=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),K=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),H=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const R={S:"s",M:"m",L:"l"},L={field:"search__field",input:"search__field-input",iconSun:"search__icon-sun",iconSearch:"search__icon-search",buttonClearValue:"button-clear-value"};var F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(F),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),z=e.n(Y),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=e.n(S),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),x=e.n(k),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),c=e.n(P),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(v),p=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+search-private@0.4.29_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/styles.module.css"),n={};n.styleTagTransform=b(),n.setAttributes=x(),n.insert=M().bind(null,"head"),n.domAPI=z(),n.insertStyleElement=c();var T=I()(p.A,n);const t=p.A&&p.A.locals?p.A.locals:void 0;var s=function(A,f){var U={};for(var D in A)Object.prototype.hasOwnProperty.call(A,D)&&f.indexOf(D)<0&&(U[D]=A[D]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Q=0,D=Object.getOwnPropertySymbols(A);Q<D.length;Q++)f.indexOf(D[Q])<0&&Object.prototype.propertyIsEnumerable.call(A,D[Q])&&(U[D[Q]]=A[D[Q]]);return U};const j=(0,r.forwardRef)(function(f,U){var{size:D=R.S,value:Q="",onChange:ee,loading:i,placeholder:g,onKeyDown:E,onFocus:m,onBlur:y,onSubmit:G,className:Z,tabIndex:$}=f,B=s(f,["size","value","onChange","loading","placeholder","onKeyDown","onFocus","onBlur","onSubmit","className","tabIndex"]);const[J="",oe]=(0,K.I)({value:Q,defaultValue:"",onChange:ee}),V=(0,r.useRef)(null),te=(0,r.useRef)(null),{t:re}=(0,N.Ym)("SearchPrivate"),q=!!J,se=()=>{var ae;oe(""),(ae=V.current)===null||ae===void 0||ae.focus()},ne=(0,C.r)({clearButtonRef:te,showClearButton:q,size:D,onClear:se}),{postfixButtons:ce,inputTabIndex:ie,onInputKeyDown:de}=(0,h.C)({inputRef:V,postfixButtons:(0,r.useMemo)(()=>[ne],[ne]),readonly:!1,submitKeys:["Enter","Space"]}),ue=(0,r.useCallback)(ae=>{var le;E&&E(ae),de(ae),ae.key==="Enter"&&(!((le=V.current)===null||le===void 0)&&le.value)&&G&&G(V.current.value)},[de,E,G]),pe=(0,r.useCallback)(ae=>{m&&m(ae),(0,w.G8)(V.current)},[m]);return(0,a.jsxs)("div",Object.assign({className:u()(t.container,Z)},(0,H.z7)(B),{"data-size":D,children:[(0,a.jsx)("span",{className:t.prefix,children:i?(0,a.jsx)(W.b,{"data-test-id":L.iconSun}):(0,a.jsx)(o.A,{"data-test-id":L.iconSearch})}),(0,a.jsx)(X.K,{inputMode:"search",value:J,onChange:oe,onKeyDown:ue,onFocus:pe,onBlur:y,tabIndex:$!=null?$:ie,ref:(0,d.A)(U,V),placeholder:g!=null?g:re("placeholder"),type:"text","data-test-id":L.input}),(0,a.jsx)("span",{className:t.postfix,children:ce})]}))})}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/Checkbox.js":((O,_,e)=>{e.d(_,{S:()=>v});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/minus/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.2/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),C=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),h=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),w=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=e.n(X),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),K=e.n(N),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),R=e.n(H),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=e.n(L),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Y=e.n(I),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),S=e.n(z),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/styles.module.css"),k={};k.styleTagTransform=S(),k.setAttributes=F(),k.insert=R().bind(null,"head"),k.domAPI=K(),k.insertStyleElement=Y();var x=W()(M.A,k);const P=M.A&&M.A.locals?M.A.locals:void 0;var c=function(b,p){var n={};for(var T in b)Object.prototype.hasOwnProperty.call(b,T)&&p.indexOf(T)<0&&(n[T]=b[T]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,T=Object.getOwnPropertySymbols(b);t<T.length;t++)p.indexOf(T[t])<0&&Object.prototype.propertyIsEnumerable.call(b,T[t])&&(n[T[t]]=b[T[t]]);return n};function v(b){var{inputRef:p,indeterminate:n,indeterminateDefault:T,onChange:t,"data-test-id":s,size:j=C.SK.M}=b,A=c(b,["inputRef","indeterminate","indeterminateDefault","onChange","data-test-id","size"]);const f=(0,u.useRef)(null),U=(0,l.A)(f,p),[D,Q]=(0,d.iC)(n,T),ee=(0,u.useCallback)(g=>{t==null||t(g),Q(!1)},[t,Q]);(0,u.useEffect)(()=>{f.current&&(f.current.indeterminate=!!D)},[f,D]);const i=(0,u.useMemo)(()=>(0,h.J)(j),[j]);return(0,a.jsx)(w.Q,Object.assign({},A,{size:j,onChange:ee,"data-test-id":s,ref:U,render:function(E){const m=(0,h.V)(Object.assign(Object.assign({},E),{indeterminate:!!D}));return(0,a.jsxs)("div",Object.assign({className:P.container},m,{children:[(0,a.jsx)("div",Object.assign({className:P.box},m)),(0,a.jsx)("div",Object.assign({className:P.icon},m,{children:D?(0,a.jsx)(r.A,{size:i}):(0,a.jsx)(o.A,{size:i})}))]}))}}))}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js":((O,_,e)=>{e.d(_,{Q:()=>P});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(l),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),C=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),w=e.n(h),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=e.n(X),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),K=e.n(N),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n(H),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),F=e.n(L),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Y=e.n(I),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css"),S={};S.styleTagTransform=Y(),S.setAttributes=R(),S.insert=K().bind(null,"head"),S.domAPI=W(),S.insertStyleElement=F();var M=w()(z.A,S);const k=z.A&&z.A.locals?z.A.locals:void 0;var x=function(c,v){var b={};for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&v.indexOf(p)<0&&(b[p]=c[p]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,p=Object.getOwnPropertySymbols(c);n<p.length;n++)v.indexOf(p[n])<0&&Object.prototype.propertyIsEnumerable.call(c,p[n])&&(b[p[n]]=c[p[n]]);return b};const P=(0,d.forwardRef)(function(v,b){var{render:p,checked:n,defaultChecked:T,onChange:t,onBlur:s,onFocus:j,disabled:A,className:f,size:U=o.SK.M,mode:D=o.g.Checkbox,onKeyUp:Q,"data-test-id":ee}=v,i=x(v,["render","checked","defaultChecked","onChange","onBlur","onFocus","disabled","className","size","mode","onKeyUp","data-test-id"]);const[g,E]=(0,r.iC)(n,!!T,t),[m,y]=(0,d.useState)(!1),[G,Z]=(0,d.useState)(!1),$={disabled:!!A,focusVisible:m,checked:g,hover:G,size:U};return(0,a.jsxs)("span",Object.assign({role:D,className:u()(f,k.toggleLayout),"data-size":U,"data-test-id":ee,onMouseEnter:()=>Z(!0),onMouseLeave:()=>Z(!1),onKeyUp:Q},(0,C.V)($),{children:[p($),(0,a.jsx)("input",Object.assign({},i,{"data-test-id":`${ee}-native-input`,ref:b,type:D,className:k.togglePrivate,checked:g,disabled:A,onChange:B=>E(B.target.checked),onFocus:B=>{y(B.target.matches(":focus-visible")),j==null||j(B)},onBlur:B=>{y(!1),s==null||s(B)}}))]}))})}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js":((O,_,e)=>{e.d(_,{SK:()=>l,g:()=>a});const a={Checkbox:"checkbox",Radio:"radio"},l={S:"s",M:"m"},u={Star:"star",Heart:"heart"},d={Single:"single",Multiple:"multiple"}}),"./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js":((O,_,e)=>{e.d(_,{J:()=>u,V:()=>l});var a=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js");function l(d){return Object.entries(d).reduce(function(r,[o,C]){return r[`data-${o.toLowerCase()}`]=C,r},{})}function u(d){switch(d){case a.SK.S:return 16;case a.SK.M:default:return 24}}}),"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js":((O,_,e)=>{e.d(_,{m:()=>M});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),u=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const d=[u.El.Top,u.El.Right,u.El.Bottom,u.El.Left];var r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(r),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(C),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),X=e.n(w),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=e.n(W),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),H=e.n(K),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(R),F=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),I={};I.styleTagTransform=L(),I.setAttributes=N(),I.insert=X().bind(null,"head"),I.domAPI=h(),I.insertStyleElement=H();var Y=o()(F.A,I);const z=F.A&&F.A.locals?F.A.locals:void 0;var S=function(k,x){var P={};for(var c in k)Object.prototype.hasOwnProperty.call(k,c)&&x.indexOf(c)<0&&(P[c]=k[c]);if(k!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,c=Object.getOwnPropertySymbols(k);v<c.length;v++)x.indexOf(c[v])<0&&Object.prototype.propertyIsEnumerable.call(k,c[v])&&(P[c[v]]=k[c[v]]);return P};function M(k){var{tip:x,trigger:P="hoverAndFocusVisible",placement:c="top",children:v,triggerRef:b,disableMaxWidth:p=!1}=k,n=S(k,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!v&&!b?null:(0,a.jsx)(l.Z,Object.assign({placement:c,popoverContent:(0,a.jsx)("div",{className:z.tooltipContainer,"data-disable-max-width":p,children:x}),trigger:P,triggerRef:b,arrowContainerClassName:z.tooltipArrowContainer,arrowElementClassName:z.tooltipArrowElement,hasArrow:!0,fallbackPlacements:d},n,{children:v}))}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((O,_,e)=>{e.d(_,{m:()=>ee});var a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(l),d=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),r=e.n(d),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),h=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const w=i=>i?i.offsetHeight<i.scrollHeight||i.offsetWidth<i.scrollWidth:!1,X=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],W="...",N=({text:i,element:g,truncatedElement:E})=>{if(g&&E&&w(g)){const m=g.scrollWidth/i.length;let y=i;for(const{potentialDelimiterWidth:G,leftHalfDelta:Z,rightHalfDelta:$}of X){const B=Math.floor((g.offsetWidth/m-G)/2),J=i.slice(0,B-Z),oe=i.slice(i.length-B+$,i.length);if(y=`${J}${W}${oe}`,E.innerHTML=y,E.scrollWidth<=g.offsetWidth-1)break}return y}return i};var K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),H=e.n(K),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),L=e.n(R),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),I=e.n(F),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),z=e.n(Y),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=e.n(S),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=e.n(k),P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),c={};c.styleTagTransform=x(),c.setAttributes=z(),c.insert=I().bind(null,"head"),c.domAPI=L(),c.insertStyleElement=M();var v=H()(P.A,c);const b=P.A&&P.A.locals?P.A.locals:void 0;var p=function(i,g){var E={};for(var m in i)Object.prototype.hasOwnProperty.call(i,m)&&g.indexOf(m)<0&&(E[m]=i[m]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,m=Object.getOwnPropertySymbols(i);y<m.length;y++)g.indexOf(m[y])<0&&Object.prototype.propertyIsEnumerable.call(i,m[y])&&(E[m[y]]=i[m[y]]);return E};function n(i){var{text:g,className:E,tooltipClassName:m,hideTooltip:y,placement:G}=i,Z=p(i,["text","className","tooltipClassName","hideTooltip","placement"]);const[$,B]=(0,o.useState)(!1),[J,oe]=(0,o.useState)(g),V=(0,o.useRef)(null),te=(0,o.useRef)(null);(0,o.useEffect)(()=>{const q=r()(()=>{oe(N({element:V.current,truncatedElement:te.current,text:g})),B(w(V.current))},50);q();const se=new ResizeObserver(q);return V.current&&se.observe(V.current),()=>{se.disconnect()}},[$,g,y]);const re=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{ref:V,className:b.fullText,"data-test-id":"full-text",children:g}),(0,a.jsx)("span",{ref:te,className:b.truncatedText,"data-test-id":"truncated-text",children:J})]});return(0,a.jsx)("span",Object.assign({className:u()(b.wrapper,E)},(0,h.z7)(Z),{children:$&&!y?(0,a.jsx)(C.m,{tip:g,placement:G,hoverDelayOpen:500,triggerClassName:b.textContainer,className:m,children:re}):re}))}var T=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),s={};s.styleTagTransform=x(),s.setAttributes=z(),s.insert=I().bind(null,"head"),s.domAPI=L(),s.insertStyleElement=M();var j=H()(t.A,s);const A=t.A&&t.A.locals?t.A.locals:void 0;var f=function(i,g){var E={};for(var m in i)Object.prototype.hasOwnProperty.call(i,m)&&g.indexOf(m)<0&&(E[m]=i[m]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,m=Object.getOwnPropertySymbols(i);y<m.length;y++)g.indexOf(m[y])<0&&Object.prototype.propertyIsEnumerable.call(i,m[y])&&(E[m[y]]=i[m[y]]);return E};function U(i){var{text:g,className:E,tooltipClassName:m,hideTooltip:y,maxLines:G=1,placement:Z}=i,$=f(i,["text","className","tooltipClassName","hideTooltip","maxLines","placement"]);const B=(0,o.useRef)(null),[J,oe]=(0,o.useState)(!1),V=(0,o.useCallback)(()=>{oe(w(B.current))},[]);(0,T.N)(()=>{B.current&&V()},[g,V]),(0,o.useEffect)(()=>{const re=r()(()=>{V()},50),q=new ResizeObserver(re);return B.current&&(V(),q.observe(B.current)),()=>{q.disconnect()}},[J,y,V]);const te=(0,a.jsx)("span",Object.assign({ref:B,className:u()(G>1?A.text2AndMoreLines:A.text1Line,E,{[A.ellipsis]:!B.current||J}),style:{"--max-lines":G}},(0,h.z7)($),{children:g}));return J&&!y?(0,a.jsx)(C.m,{tip:g,placement:Z,hoverDelayOpen:500,className:m,triggerClassName:A.tooltipTrigger,children:te}):te}const D={Middle:"middle",End:"end"};var Q=function(i,g){var E={};for(var m in i)Object.prototype.hasOwnProperty.call(i,m)&&g.indexOf(m)<0&&(E[m]=i[m]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,m=Object.getOwnPropertySymbols(i);y<m.length;y++)g.indexOf(m[y])<0&&Object.prototype.propertyIsEnumerable.call(i,m[y])&&(E[m[y]]=i[m[y]]);return E};function ee(i){var{variant:g=D.End}=i,E=Q(i,["variant"]);switch(g){case D.Middle:return(0,a.jsx)(n,Object.assign({},E));case D.End:default:return(0,a.jsx)(U,Object.assign({},E))}}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css":((O,_,e)=>{e.d(_,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(u),r=d()(l());r.push([O.id,`.inputPrivate--uQwUS{
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
.inputPrivate--uQwUS::-moz-placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--uQwUS::placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--uQwUS:-moz-read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.inputPrivate--uQwUS:read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.inputPrivate--uQwUS:-moz-placeholder-shown{
  text-overflow:ellipsis;
}
.inputPrivate--uQwUS:placeholder-shown{
  text-overflow:ellipsis;
}
.inputPrivate--uQwUS[disabled]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.inputPrivate--uQwUS[type=number]{
  -moz-appearance:textfield;
}
.inputPrivate--uQwUS[type=number]::-webkit-outer-spin-button, .inputPrivate--uQwUS[type=number]::-webkit-inner-spin-button{
  margin:0;
  -webkit-appearance:none;
}`,""]),r.locals={inputPrivate:"inputPrivate--uQwUS"};const o=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.1_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helperComponents/styles.module.css":((O,_,e)=>{e.d(_,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(u),r=d()(l());r.push([O.id,`.buttonClearValue--cURFI{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonClearValue--cURFI[data-size=s]{
  width:var(--size-input-private-button-clear-value-s, 16px);
  height:var(--size-input-private-button-clear-value-s, 16px);
  border-radius:var(--radius-input-private-button-clear-value-s, 8px);
}
.buttonClearValue--cURFI[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.buttonClearValue--cURFI[data-size=m]{
  width:var(--size-input-private-button-clear-value-m, 24px);
  height:var(--size-input-private-button-clear-value-m, 24px);
  border-radius:var(--radius-input-private-button-clear-value-m, 12px);
}
.buttonClearValue--cURFI[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonClearValue--cURFI:hover{
  cursor:pointer;
  color:var(--sys-red-text-support, #ae514c);
}
.buttonClearValue--cURFI:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-support, #ae514c);
  outline-color:var(--sys-red-accent-default, #cb3f3e);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonClearValue--cURFI:active{
  color:var(--sys-red-text-main, #7a2d2d);
}
.buttonClearValue--cURFI[data-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),r.locals={buttonClearValue:"buttonClearValue--cURFI"};const o=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+promo-tag@0.7.8_react@18.2.0/node_modules/@snack-uikit/promo-tag/dist/esm/components/styles.module.css":((O,_,e)=>{e.d(_,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(u),r=d()(l());r.push([O.id,`.promoTag--hYtc2{
  display:inline-flex;
  align-items:center;
  white-space:nowrap;
}
.promoTag--hYtc2[data-color=accent][data-appearance=neutral]{
  color:var(--sys-neutral-on-accent, #ffffff);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.promoTag--hYtc2[data-color=accent][data-appearance=neutral][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-neutral-decor-activated, #b6bac7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=accent][data-appearance=neutral][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=accent][data-appearance=neutral][role=button]:hover{
  background-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.promoTag--hYtc2[data-color=accent][data-appearance=neutral][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=accent][data-appearance=neutral][role=button]:active[data-color=accent]{
  background-color:var(--sys-neutral-accent-pressed, #656774);
}
.promoTag--hYtc2[data-color=accent][data-appearance=neutral][role=button]:active[data-color=decor]{
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.promoTag--hYtc2[data-color=accent][data-appearance=primary]{
  color:var(--sys-primary-on-accent, #fbfffc);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.promoTag--hYtc2[data-color=accent][data-appearance=primary][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=accent][data-appearance=primary][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=accent][data-appearance=primary][role=button]:hover{
  background-color:var(--sys-primary-accent-hovered, #37946e);
}
.promoTag--hYtc2[data-color=accent][data-appearance=primary][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=accent][data-appearance=primary][role=button]:active[data-color=accent]{
  background-color:var(--sys-primary-accent-pressed, #358561);
}
.promoTag--hYtc2[data-color=accent][data-appearance=primary][role=button]:active[data-color=decor]{
  background-color:var(--sys-primary-decor-activated, #99d7ba);
}
.promoTag--hYtc2[data-color=accent][data-appearance=red]{
  color:var(--sys-red-on-accent, #fffbf9);
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.promoTag--hYtc2[data-color=accent][data-appearance=red][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-red-decor-activated, #fbab99);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=accent][data-appearance=red][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=accent][data-appearance=red][role=button]:hover{
  background-color:var(--sys-red-accent-hovered, #bd4844);
}
.promoTag--hYtc2[data-color=accent][data-appearance=red][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=accent][data-appearance=red][role=button]:active[data-color=accent]{
  background-color:var(--sys-red-accent-pressed, #ae514c);
}
.promoTag--hYtc2[data-color=accent][data-appearance=red][role=button]:active[data-color=decor]{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.promoTag--hYtc2[data-color=accent][data-appearance=orange]{
  color:var(--sys-orange-on-accent, #fffcf4);
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.promoTag--hYtc2[data-color=accent][data-appearance=orange][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-orange-decor-activated, #f5b27b);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=accent][data-appearance=orange][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=accent][data-appearance=orange][role=button]:hover{
  background-color:var(--sys-orange-accent-hovered, #ec823b);
}
.promoTag--hYtc2[data-color=accent][data-appearance=orange][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=accent][data-appearance=orange][role=button]:active[data-color=accent]{
  background-color:var(--sys-orange-accent-pressed, #e78940);
}
.promoTag--hYtc2[data-color=accent][data-appearance=orange][role=button]:active[data-color=decor]{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.promoTag--hYtc2[data-color=accent][data-appearance=yellow]{
  color:var(--sys-yellow-on-accent, #583f1f);
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.promoTag--hYtc2[data-color=accent][data-appearance=yellow][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=accent][data-appearance=yellow][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=accent][data-appearance=yellow][role=button]:hover{
  background-color:var(--sys-yellow-accent-hovered, #d5a133);
}
.promoTag--hYtc2[data-color=accent][data-appearance=yellow][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=accent][data-appearance=yellow][role=button]:active[data-color=accent]{
  background-color:var(--sys-yellow-accent-pressed, #d3a736);
}
.promoTag--hYtc2[data-color=accent][data-appearance=yellow][role=button]:active[data-color=decor]{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.promoTag--hYtc2[data-color=accent][data-appearance=green]{
  color:var(--sys-green-on-accent, #fcfefa);
  background-color:var(--sys-green-accent-default, #57b762);
}
.promoTag--hYtc2[data-color=accent][data-appearance=green][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=accent][data-appearance=green][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=accent][data-appearance=green][role=button]:hover{
  background-color:var(--sys-green-accent-hovered, #5daa63);
}
.promoTag--hYtc2[data-color=accent][data-appearance=green][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=accent][data-appearance=green][role=button]:active[data-color=accent]{
  background-color:var(--sys-green-accent-pressed, #55915a);
}
.promoTag--hYtc2[data-color=accent][data-appearance=green][role=button]:active[data-color=decor]{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.promoTag--hYtc2[data-color=accent][data-appearance=blue]{
  color:var(--sys-blue-on-accent, #fdfeff);
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.promoTag--hYtc2[data-color=accent][data-appearance=blue][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-blue-decor-activated, #aac4ea);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=accent][data-appearance=blue][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=accent][data-appearance=blue][role=button]:hover{
  background-color:var(--sys-blue-accent-hovered, #4e80bf);
}
.promoTag--hYtc2[data-color=accent][data-appearance=blue][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=accent][data-appearance=blue][role=button]:active[data-color=accent]{
  background-color:var(--sys-blue-accent-pressed, #4877b0);
}
.promoTag--hYtc2[data-color=accent][data-appearance=blue][role=button]:active[data-color=decor]{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.promoTag--hYtc2[data-color=accent][data-appearance=violet]{
  color:var(--sys-violet-on-accent, #fdfdfd);
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.promoTag--hYtc2[data-color=accent][data-appearance=violet][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-violet-decor-activated, #ceb7e7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=accent][data-appearance=violet][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=accent][data-appearance=violet][role=button]:hover{
  background-color:var(--sys-violet-accent-hovered, #9a66ae);
}
.promoTag--hYtc2[data-color=accent][data-appearance=violet][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=accent][data-appearance=violet][role=button]:active[data-color=accent]{
  background-color:var(--sys-violet-accent-pressed, #8c639b);
}
.promoTag--hYtc2[data-color=accent][data-appearance=violet][role=button]:active[data-color=decor]{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.promoTag--hYtc2[data-color=accent][data-appearance=pink]{
  color:var(--sys-pink-on-accent, #fdfcfc);
  background-color:var(--sys-pink-accent-default, #d1668e);
}
.promoTag--hYtc2[data-color=accent][data-appearance=pink][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-pink-decor-activated, #e8b1c1);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=accent][data-appearance=pink][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=accent][data-appearance=pink][role=button]:hover{
  background-color:var(--sys-pink-accent-hovered, #c06088);
}
.promoTag--hYtc2[data-color=accent][data-appearance=pink][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=accent][data-appearance=pink][role=button]:active[data-color=accent]{
  background-color:var(--sys-pink-accent-pressed, #ae5e80);
}
.promoTag--hYtc2[data-color=accent][data-appearance=pink][role=button]:active[data-color=decor]{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}
.promoTag--hYtc2[data-color=decor][data-appearance=neutral]{
  color:var(--sys-neutral-text-main, #41424e);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.promoTag--hYtc2[data-color=decor][data-appearance=neutral][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-neutral-decor-activated, #b6bac7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=decor][data-appearance=neutral][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=decor][data-appearance=neutral][role=button]:hover{
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.promoTag--hYtc2[data-color=decor][data-appearance=neutral][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=decor][data-appearance=neutral][role=button]:active[data-color=accent]{
  background-color:var(--sys-neutral-accent-pressed, #656774);
}
.promoTag--hYtc2[data-color=decor][data-appearance=neutral][role=button]:active[data-color=decor]{
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.promoTag--hYtc2[data-color=decor][data-appearance=primary]{
  color:var(--sys-primary-text-main, #1b5840);
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.promoTag--hYtc2[data-color=decor][data-appearance=primary][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=decor][data-appearance=primary][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=decor][data-appearance=primary][role=button]:hover{
  background-color:var(--sys-primary-decor-hovered, #b3deca);
}
.promoTag--hYtc2[data-color=decor][data-appearance=primary][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=decor][data-appearance=primary][role=button]:active[data-color=accent]{
  background-color:var(--sys-primary-accent-pressed, #358561);
}
.promoTag--hYtc2[data-color=decor][data-appearance=primary][role=button]:active[data-color=decor]{
  background-color:var(--sys-primary-decor-activated, #99d7ba);
}
.promoTag--hYtc2[data-color=decor][data-appearance=red]{
  color:var(--sys-red-text-main, #7a2d2d);
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.promoTag--hYtc2[data-color=decor][data-appearance=red][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-red-decor-activated, #fbab99);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=decor][data-appearance=red][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=decor][data-appearance=red][role=button]:hover{
  background-color:var(--sys-red-decor-hovered, #fac1b3);
}
.promoTag--hYtc2[data-color=decor][data-appearance=red][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=decor][data-appearance=red][role=button]:active[data-color=accent]{
  background-color:var(--sys-red-accent-pressed, #ae514c);
}
.promoTag--hYtc2[data-color=decor][data-appearance=red][role=button]:active[data-color=decor]{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.promoTag--hYtc2[data-color=decor][data-appearance=orange]{
  color:var(--sys-orange-text-main, #884c23);
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.promoTag--hYtc2[data-color=decor][data-appearance=orange][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-orange-decor-activated, #f5b27b);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=decor][data-appearance=orange][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=decor][data-appearance=orange][role=button]:hover{
  background-color:var(--sys-orange-decor-hovered, #f8c699);
}
.promoTag--hYtc2[data-color=decor][data-appearance=orange][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=decor][data-appearance=orange][role=button]:active[data-color=accent]{
  background-color:var(--sys-orange-accent-pressed, #e78940);
}
.promoTag--hYtc2[data-color=decor][data-appearance=orange][role=button]:active[data-color=decor]{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.promoTag--hYtc2[data-color=decor][data-appearance=yellow]{
  color:var(--sys-yellow-text-main, #815f19);
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.promoTag--hYtc2[data-color=decor][data-appearance=yellow][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=decor][data-appearance=yellow][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=decor][data-appearance=yellow][role=button]:hover{
  background-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.promoTag--hYtc2[data-color=decor][data-appearance=yellow][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=decor][data-appearance=yellow][role=button]:active[data-color=accent]{
  background-color:var(--sys-yellow-accent-pressed, #d3a736);
}
.promoTag--hYtc2[data-color=decor][data-appearance=yellow][role=button]:active[data-color=decor]{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.promoTag--hYtc2[data-color=decor][data-appearance=green]{
  color:var(--sys-green-text-main, #3d6035);
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.promoTag--hYtc2[data-color=decor][data-appearance=green][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=decor][data-appearance=green][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=decor][data-appearance=green][role=button]:hover{
  background-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.promoTag--hYtc2[data-color=decor][data-appearance=green][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=decor][data-appearance=green][role=button]:active[data-color=accent]{
  background-color:var(--sys-green-accent-pressed, #55915a);
}
.promoTag--hYtc2[data-color=decor][data-appearance=green][role=button]:active[data-color=decor]{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.promoTag--hYtc2[data-color=decor][data-appearance=blue]{
  color:var(--sys-blue-text-main, #2b537e);
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.promoTag--hYtc2[data-color=decor][data-appearance=blue][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-blue-decor-activated, #aac4ea);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=decor][data-appearance=blue][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=decor][data-appearance=blue][role=button]:hover{
  background-color:var(--sys-blue-decor-hovered, #c5d9f6);
}
.promoTag--hYtc2[data-color=decor][data-appearance=blue][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=decor][data-appearance=blue][role=button]:active[data-color=accent]{
  background-color:var(--sys-blue-accent-pressed, #4877b0);
}
.promoTag--hYtc2[data-color=decor][data-appearance=blue][role=button]:active[data-color=decor]{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.promoTag--hYtc2[data-color=decor][data-appearance=violet]{
  color:var(--sys-violet-text-main, #59446a);
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.promoTag--hYtc2[data-color=decor][data-appearance=violet][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-violet-decor-activated, #ceb7e7);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=decor][data-appearance=violet][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=decor][data-appearance=violet][role=button]:hover{
  background-color:var(--sys-violet-decor-hovered, #e1d0f7);
}
.promoTag--hYtc2[data-color=decor][data-appearance=violet][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=decor][data-appearance=violet][role=button]:active[data-color=accent]{
  background-color:var(--sys-violet-accent-pressed, #8c639b);
}
.promoTag--hYtc2[data-color=decor][data-appearance=violet][role=button]:active[data-color=decor]{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.promoTag--hYtc2[data-color=decor][data-appearance=pink]{
  color:var(--sys-pink-text-main, #754158);
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.promoTag--hYtc2[data-color=decor][data-appearance=pink][data-color=decor]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-pink-decor-activated, #e8b1c1);
  outline-width:var(--border-width-promo-tag-single, 1px);
  outline-offset:calc(0px - var(--border-width-promo-tag-single, 1px));
}
.promoTag--hYtc2[data-color=decor][data-appearance=pink][role=button]{
  cursor:pointer;
}
.promoTag--hYtc2[data-color=decor][data-appearance=pink][role=button]:hover{
  background-color:var(--sys-pink-decor-hovered, #f5c9d6);
}
.promoTag--hYtc2[data-color=decor][data-appearance=pink][role=button]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.promoTag--hYtc2[data-color=decor][data-appearance=pink][role=button]:active[data-color=accent]{
  background-color:var(--sys-pink-accent-pressed, #ae5e80);
}
.promoTag--hYtc2[data-color=decor][data-appearance=pink][role=button]:active[data-color=decor]{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}
.promoTag--hYtc2[data-size=xxs]{
  height:var(--size-promo-tag-height-xxs, 16px);
  padding-left:var(--space-promo-tag-horizontal-padding-xxs, 0px);
  padding-right:var(--space-promo-tag-horizontal-padding-xxs, 0px);
  border-radius:var(--radius-promo-tag-xxs, 4px);
  border-width:var(--border-width-promo-tag-single, 1px);
}
.promoTag--hYtc2[data-size=xxs] .labelWrapper--EOk4v{
  padding-left:var(--space-promo-tag-label-wrapper-xxs, 4px);
  padding-right:var(--space-promo-tag-label-wrapper-xxs, 4px);
}
.promoTag--hYtc2[data-size=xs]{
  height:var(--size-promo-tag-height-xs, 24px);
  padding-left:var(--space-promo-tag-horizontal-padding-xs, 0px);
  padding-right:var(--space-promo-tag-horizontal-padding-xs, 0px);
  border-radius:var(--radius-promo-tag-xs, 4px);
  border-width:var(--border-width-promo-tag-single, 1px);
}
.promoTag--hYtc2[data-size=xs] .labelWrapper--EOk4v{
  padding-left:var(--space-promo-tag-label-wrapper-xs, 4px);
  padding-right:var(--space-promo-tag-label-wrapper-xs, 4px);
}
.promoTag--hYtc2[data-size=s]{
  height:var(--size-promo-tag-height-s, 32px);
  padding-left:var(--space-promo-tag-horizontal-padding-s, 4px);
  padding-right:var(--space-promo-tag-horizontal-padding-s, 4px);
  border-radius:var(--radius-promo-tag-s, 8px);
  border-width:var(--border-width-promo-tag-single, 1px);
}
.promoTag--hYtc2[data-size=s] .labelWrapper--EOk4v{
  padding-left:var(--space-promo-tag-label-wrapper-s, 4px);
  padding-right:var(--space-promo-tag-label-wrapper-s, 4px);
}`,""]),r.locals={promoTag:"promoTag--hYtc2",labelWrapper:"labelWrapper--EOk4v"};const o=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+search-private@0.4.29_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/styles.module.css":((O,_,e)=>{e.d(_,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(u),r=d()(l());r.push([O.id,`.container--QrmsK{
  display:flex;
  flex-grow:1;
  align-items:center;
  box-sizing:border-box;
}
.container--QrmsK[data-size=s]{
  gap:var(--space-search-search-private-s, 4px);
}
.container--QrmsK[data-size=s] input{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  cursor:text;
}
.container--QrmsK[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--QrmsK[data-size=m]{
  gap:var(--space-search-search-private-m, 4px);
}
.container--QrmsK[data-size=m] input{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  cursor:text;
}
.container--QrmsK[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--QrmsK[data-size=l]{
  gap:var(--space-search-search-private-l, 8px);
}
.container--QrmsK[data-size=l] input{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
  cursor:text;
}
.container--QrmsK[data-size=l] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.postfix--3vGo7{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-postfix-gap, 4px);
}

.prefix--TKxtM{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),r.locals={container:"container--QrmsK",postfix:"postfix--3vGo7",prefix:"prefix--TKxtM"};const o=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/styles.module.css":((O,_,e)=>{e.d(_,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(u),r=d()(l());r.push([O.id,`.container--uDPhD{
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
}
.container--uDPhD[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
  border-radius:var(--radius-toggles-s-box-checkbox, 4px);
  border-width:var(--border-width-toggles-single, 2px);
}
.container--uDPhD[data-size=m]{
  width:var(--size-toggles-m-container, 24px);
  height:var(--size-toggles-m-container, 24px);
  border-radius:var(--radius-toggles-m-box-checkbox, 4px);
  border-width:var(--border-width-toggles-single, 2px);
}
.container--uDPhD[data-focusvisible=true]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
}
.container--uDPhD[data-focusvisible=true][data-size=s]{
  outline-offset:var(--border-width-state-focus-s, 2px);
}

.box--eN_2y{
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-decor-activated, #b6bac7);
  border-style:solid;
}
.box--eN_2y[data-checked=false][data-focusvisible=true], .box--eN_2y[data-checked=false][data-hover=true]{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.box--eN_2y[data-checked=false][data-disabled=true]{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.box--eN_2y[data-indeterminate=true], .box--eN_2y[data-checked=true]{
  background-color:var(--sys-primary-accent-default, #389f74);
  border-color:var(--sys-primary-accent-default, #389f74);
}
.box--eN_2y[data-indeterminate=true][data-focusvisible=true], .box--eN_2y[data-indeterminate=true][data-hover=true], .box--eN_2y[data-checked=true][data-focusvisible=true], .box--eN_2y[data-checked=true][data-hover=true]{
  background-color:var(--sys-primary-accent-hovered, #37946e);
  border-color:var(--sys-primary-accent-hovered, #37946e);
}
.box--eN_2y[data-indeterminate=true][data-disabled=true], .box--eN_2y[data-checked=true][data-disabled=true]{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
  border-color:var(--sys-neutral-text-disabled, #aaaebd);
}
.box--eN_2y[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
  border-width:var(--border-width-toggles-single, 2px);
  border-radius:var(--radius-toggles-s-box-checkbox, 4px);
}
.box--eN_2y[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.box--eN_2y[data-size=m]{
  width:var(--size-toggles-m-box-checkbox, 20px);
  height:var(--size-toggles-m-box-checkbox, 20px);
  border-width:var(--border-width-toggles-single, 2px);
  border-radius:var(--radius-toggles-m-box-checkbox, 4px);
}
.box--eN_2y[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.icon--JdtjH{
  position:absolute;
  top:0;
  left:0;
  display:none;
  width:100%;
  height:100%;
  color:var(--sys-primary-on-accent, #fbfffc);
}
.icon--JdtjH[data-indeterminate=true], .icon--JdtjH[data-checked=true]{
  display:block;
}
.icon--JdtjH[data-disabled=true]{
  color:var(--sys-neutral-decor-disabled, #e6e8ef);
}`,""]),r.locals={container:"container--uDPhD",box:"box--eN_2y",icon:"icon--JdtjH"};const o=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.21_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css":((O,_,e)=>{e.d(_,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(u),r=d()(l());r.push([O.id,`.toggleLayout--zfmTy{
  cursor:pointer;
  position:relative;
  display:inline-flex;
  flex-direction:row;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
}
.toggleLayout--zfmTy[data-disabled=true]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

.togglePrivate--TTOTA{
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
.togglePrivate--TTOTA:disabled{
  cursor:not-allowed;
}`,""]),r.locals={toggleLayout:"toggleLayout--zfmTy",togglePrivate:"togglePrivate--TTOTA"};const o=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.18.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((O,_,e)=>{e.d(_,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(u),r=d()(l());r.push([O.id,`.tooltipContainer--HyepD{
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
.tooltipContainer--HyepD[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--vK3Ow{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 4px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 4px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--ueRub{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),r.locals={tooltipContainer:"tooltipContainer--HyepD",tooltipArrowContainer:"tooltipArrowContainer--vK3Ow",tooltipArrowElement:"tooltipArrowElement--ueRub"};const o=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((O,_,e)=>{e.d(_,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(u),r=d()(l());r.push([O.id,`.text1Line--l8IPx{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--OfyPZ{
  text-overflow:ellipsis;
}

.text2AndMoreLines--XtbvW{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--PvGuC{
  display:grid;
}`,""]),r.locals={text1Line:"text1Line--l8IPx",ellipsis:"ellipsis--OfyPZ",text2AndMoreLines:"text2AndMoreLines--XtbvW",tooltipTrigger:"tooltipTrigger--PvGuC"};const o=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((O,_,e)=>{e.d(_,{A:()=>o});var a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(a),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),d=e.n(u),r=d()(l());r.push([O.id,`.wrapper--IpkGK{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--wgEf7{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--FOx2T{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--LJm3j{
  display:inline-flex;
}`,""]),r.locals={wrapper:"wrapper--IpkGK",truncatedText:"truncatedText--wgEf7",fullText:"fullText--FOx2T",textContainer:"textContainer--LJm3j"};const o=r})}]);})();
