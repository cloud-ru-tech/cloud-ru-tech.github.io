"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[924],{"./node_modules/.pnpm/@snack-uikit+search-private@0.4.36_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/SearchPrivate.js"(f,c,e){e.d(c,{s:()=>S});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),a=e.n(u),o=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js"),k=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),B=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),U=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"),w=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.8_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),N=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.10_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Sun/Sun.js"),V=e("./node_modules/.pnpm/@snack-uikit+locale@0.16.0/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),F=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),H=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const X={S:"s",M:"m",L:"l"},C={field:"search__field",input:"search__field-input",iconSun:"search__icon-sun",iconSearch:"search__icon-search",buttonClearValue:"button-clear-value"};var Q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(Q),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(Z),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),I=e.n(h),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),$=e.n(b),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=e.n(z),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),i=e.n(j),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+search-private@0.4.36_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/styles.module.css"),d={};d.styleTagTransform=i(),d.setAttributes=$(),d.insert=I().bind(null,"head"),d.domAPI=A(),d.insertStyleElement=g();var _=G()(n.A,d);const m=n.A&&n.A.locals?n.A.locals:void 0;var D=function(p,y){var x={};for(var l in p)Object.prototype.hasOwnProperty.call(p,l)&&y.indexOf(l)<0&&(x[l]=p[l]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,l=Object.getOwnPropertySymbols(p);v<l.length;v++)y.indexOf(l[v])<0&&Object.prototype.propertyIsEnumerable.call(p,l[v])&&(x[l[v]]=p[l[v]]);return x};const S=(0,t.forwardRef)(function(y,x){var{size:l=X.S,value:v="",onChange:R,loading:L,placeholder:P,onKeyDown:M,onFocus:T,onBlur:Y,onSubmit:J,className:q,tabIndex:K}=y,O=D(y,["size","value","onChange","loading","placeholder","onKeyDown","onFocus","onBlur","onSubmit","className","tabIndex"]);const[se="",te]=(0,F.I)({value:v,defaultValue:"",onChange:R}),W=(0,t.useRef)(null),ae=(0,t.useRef)(null),{t:de}=(0,V.Ym)("SearchPrivate"),le=!!se,re=()=>{var E;te(""),(E=W.current)===null||E===void 0||E.focus()},oe=(0,k.r)({clearButtonRef:ae,showClearButton:le,size:l,onClear:re}),{postfixButtons:ie,inputTabIndex:ce,onInputKeyDown:ne}=(0,B.C)({inputRef:W,postfixButtons:(0,t.useMemo)(()=>[oe],[oe]),readonly:!1,submitKeys:["Enter","Space"]}),ue=(0,t.useCallback)(E=>{var ee;M&&M(E),ne(E),E.key==="Enter"&&(!((ee=W.current)===null||ee===void 0)&&ee.value)&&J&&J(W.current.value)},[ne,M,J]),me=(0,t.useCallback)(E=>{T&&T(E),(0,U.G8)(W.current)},[T]);return(0,s.jsxs)("div",Object.assign({className:a()(m.container,q)},(0,H.z7)(O),{"data-size":l,children:[(0,s.jsx)("span",{className:m.prefix,children:L?(0,s.jsx)(N.b,{"data-test-id":C.iconSun}):(0,s.jsx)(r.A,{"data-test-id":C.iconSearch})}),(0,s.jsx)(w.K,{inputMode:"search",value:se,onChange:te,onKeyDown:ue,onFocus:me,onBlur:Y,tabIndex:K!=null?K:ce,ref:(0,o.A)(x,W),placeholder:P!=null?P:de("placeholder"),type:"text","data-test-id":C.input}),(0,s.jsx)("span",{className:m.postfix,children:ie})]}))})},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/Checkbox.js"(f,c,e){e.d(c,{S:()=>j});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),t=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/minus/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),k=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),B=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),U=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),N=e.n(w),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),F=e.n(V),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),X=e.n(H),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Q=e.n(C),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Z=e.n(G),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=e.n(A),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/styles.module.css"),b={};b.styleTagTransform=h(),b.setAttributes=Q(),b.insert=X().bind(null,"head"),b.domAPI=F(),b.insertStyleElement=Z();var $=N()(I.A,b);const z=I.A&&I.A.locals?I.A.locals:void 0;var g=function(i,n){var d={};for(var _ in i)Object.prototype.hasOwnProperty.call(i,_)&&n.indexOf(_)<0&&(d[_]=i[_]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,_=Object.getOwnPropertySymbols(i);m<_.length;m++)n.indexOf(_[m])<0&&Object.prototype.propertyIsEnumerable.call(i,_[m])&&(d[_[m]]=i[_[m]]);return d};function j(i){var{inputRef:n,indeterminate:d,indeterminateDefault:_,onChange:m,"data-test-id":D,size:S=k.SK.M}=i,p=g(i,["inputRef","indeterminate","indeterminateDefault","onChange","data-test-id","size"]);const y=(0,a.useRef)(null),x=(0,u.A)(y,n),[l,v]=(0,o.iC)(d,_),R=(0,a.useCallback)(P=>{m==null||m(P),v(!1)},[m,v]);(0,a.useEffect)(()=>{y.current&&(y.current.indeterminate=!!l)},[y,l]);const L=(0,a.useMemo)(()=>(0,B.J)(S),[S]);return(0,s.jsx)(U.Q,Object.assign({},p,{size:S,onChange:R,"data-test-id":D,ref:x,render:function(M){const T=(0,B.V)(Object.assign(Object.assign({},M),{indeterminate:!!l}));return(0,s.jsxs)("div",Object.assign({className:z.container},T,{children:[(0,s.jsx)("div",Object.assign({className:z.box},T)),(0,s.jsx)("div",Object.assign({className:z.icon},T,{children:l?(0,s.jsx)(t.A,{size:L}):(0,s.jsx)(r.A,{size:L})}))]}))}}))}},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"(f,c,e){e.d(c,{Q:()=>z});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),a=e.n(u),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),k=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),U=e.n(B),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),N=e.n(w),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),F=e.n(V),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),X=e.n(H),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Q=e.n(C),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Z=e.n(G),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css"),h={};h.styleTagTransform=Z(),h.setAttributes=X(),h.insert=F().bind(null,"head"),h.domAPI=N(),h.insertStyleElement=Q();var I=U()(A.A,h);const b=A.A&&A.A.locals?A.A.locals:void 0;var $=function(g,j){var i={};for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&j.indexOf(n)<0&&(i[n]=g[n]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,n=Object.getOwnPropertySymbols(g);d<n.length;d++)j.indexOf(n[d])<0&&Object.prototype.propertyIsEnumerable.call(g,n[d])&&(i[n[d]]=g[n[d]]);return i};const z=(0,o.forwardRef)(function(j,i){var{render:n,checked:d,defaultChecked:_,onChange:m,onBlur:D,onFocus:S,disabled:p,className:y,size:x=r.SK.M,mode:l=r.g.Checkbox,onKeyUp:v,"data-test-id":R}=j,L=$(j,["render","checked","defaultChecked","onChange","onBlur","onFocus","disabled","className","size","mode","onKeyUp","data-test-id"]);const[P,M]=(0,t.iC)(d,!!_,m),[T,Y]=(0,o.useState)(!1),[J,q]=(0,o.useState)(!1),K={disabled:!!p,focusVisible:T,checked:P,hover:J,size:x};return(0,s.jsxs)("span",Object.assign({role:l,className:a()(y,b.toggleLayout),"data-size":x,"data-test-id":R,onMouseEnter:()=>q(!0),onMouseLeave:()=>q(!1),onKeyUp:v},(0,k.V)(K),{children:[n(K),(0,s.jsx)("input",Object.assign({},L,{"data-test-id":`${R}-native-input`,ref:i,type:l,className:b.togglePrivate,checked:P,disabled:p,onChange:O=>M(O.target.checked),onFocus:O=>{Y(O.target.matches(":focus-visible")),S==null||S(O)},onBlur:O=>{Y(!1),D==null||D(O)}}))]}))})},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"(f,c,e){e.d(c,{SK:()=>u,ds:()=>o,g:()=>s,hZ:()=>a});const s={Checkbox:"checkbox",Radio:"radio"},u={S:"s",M:"m"},a={Star:"star",Heart:"heart"},o={Single:"single",Multiple:"multiple"}},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"(f,c,e){e.d(c,{J:()=>a,V:()=>u});var s=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js");function u(o){return Object.entries(o).reduce(function(t,[r,k]){return t[`data-${r.toLowerCase()}`]=k,t},{})}function a(o){switch(o){case s.SK.S:return 16;case s.SK.M:default:return 24}}},"./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"(f,c,e){e.d(c,{I:()=>u});var s=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function u({value:a,onChange:o,defaultValue:t}){return(0,s.iC)(a,t,r=>{const k=typeof r=="function"?r(a):r;o==null||o(k)})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+search-private@0.4.36_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/styles.module.css"(f,c,e){e.d(c,{A:()=>r});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(a),t=o()(u());t.push([f.id,`.container--Tc_9a{
  display:flex;
  flex-grow:1;
  align-items:center;
  box-sizing:border-box;
}
.container--Tc_9a[data-size=s]{
  gap:var(--space-search-search-private-s, 4px);
}
.container--Tc_9a[data-size=s] input{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  cursor:text;
}
.container--Tc_9a[data-size=s] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--Tc_9a[data-size=m]{
  gap:var(--space-search-search-private-m, 4px);
}
.container--Tc_9a[data-size=m] input{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  cursor:text;
}
.container--Tc_9a[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--Tc_9a[data-size=l]{
  gap:var(--space-search-search-private-l, 8px);
}
.container--Tc_9a[data-size=l] input{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
  cursor:text;
}
.container--Tc_9a[data-size=l] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.postfix--S7l3C{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-postfix-gap, 4px);
}

.prefix--LIIkG{
  display:inline-flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),t.locals={container:"container--Tc_9a",postfix:"postfix--S7l3C",prefix:"prefix--LIIkG"};const r=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/styles.module.css"(f,c,e){e.d(c,{A:()=>r});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(a),t=o()(u());t.push([f.id,`.container--kHzld{
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
}
.container--kHzld[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
  border-radius:var(--radius-toggles-s-box-checkbox, 4px);
  border-width:var(--border-width-toggles-single, 2px);
}
.container--kHzld[data-size=m]{
  width:var(--size-toggles-m-container, 24px);
  height:var(--size-toggles-m-container, 24px);
  border-radius:var(--radius-toggles-m-box-checkbox, 4px);
  border-width:var(--border-width-toggles-single, 2px);
}
.container--kHzld[data-focusvisible=true]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
}
.container--kHzld[data-focusvisible=true][data-size=s]{
  outline-offset:var(--border-width-state-focus-s, 2px);
}

.box--dyrcl{
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-decor-activated, #b6bac7);
  border-style:solid;
}
.box--dyrcl[data-checked=false][data-focusvisible=true], .box--dyrcl[data-checked=false][data-hover=true]{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.box--dyrcl[data-checked=false][data-disabled=true]{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.box--dyrcl[data-indeterminate=true], .box--dyrcl[data-checked=true]{
  background-color:var(--sys-primary-accent-default, #389f74);
  border-color:var(--sys-primary-accent-default, #389f74);
}
.box--dyrcl[data-indeterminate=true][data-focusvisible=true], .box--dyrcl[data-indeterminate=true][data-hover=true], .box--dyrcl[data-checked=true][data-focusvisible=true], .box--dyrcl[data-checked=true][data-hover=true]{
  background-color:var(--sys-primary-accent-hovered, #37946e);
  border-color:var(--sys-primary-accent-hovered, #37946e);
}
.box--dyrcl[data-indeterminate=true][data-disabled=true], .box--dyrcl[data-checked=true][data-disabled=true]{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
  border-color:var(--sys-neutral-text-disabled, #aaaebd);
}
.box--dyrcl[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
  border-width:var(--border-width-toggles-single, 2px);
  border-radius:var(--radius-toggles-s-box-checkbox, 4px);
}
.box--dyrcl[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.box--dyrcl[data-size=m]{
  width:var(--size-toggles-m-box-checkbox, 20px);
  height:var(--size-toggles-m-box-checkbox, 20px);
  border-width:var(--border-width-toggles-single, 2px);
  border-radius:var(--radius-toggles-m-box-checkbox, 4px);
}
.box--dyrcl[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.icon--pAU4u{
  position:absolute;
  top:0;
  left:0;
  display:none;
  width:100%;
  height:100%;
  color:var(--sys-primary-on-accent, #fbfffc);
}
.icon--pAU4u[data-indeterminate=true], .icon--pAU4u[data-checked=true]{
  display:block;
}
.icon--pAU4u[data-disabled=true]{
  color:var(--sys-neutral-decor-disabled, #e6e8ef);
}`,""]),t.locals={container:"container--kHzld",box:"box--dyrcl",icon:"icon--pAU4u"};const r=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/styles.module.css"(f,c,e){e.d(c,{A:()=>r});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(a),t=o()(u());t.push([f.id,`.toggleLayout--kDjtQ{
  cursor:pointer;
  position:relative;
  display:inline-flex;
  flex-direction:row;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
}
.toggleLayout--kDjtQ[data-disabled=true]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

.togglePrivate--uT5Dy{
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
.togglePrivate--uT5Dy:disabled{
  cursor:not-allowed;
}`,""]),t.locals={toggleLayout:"toggleLayout--kDjtQ",togglePrivate:"togglePrivate--uT5Dy"};const r=t}}]);})();
