"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9751],{"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSlider/FieldSlider.js"(S,y,e){e.d(y,{w:()=>ae});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),a=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),o=e("./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/Slider.js"),p=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),m=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),t=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),_=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),B=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),l=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"),v=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"),i=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js");const s=(f,P)=>P?typeof f=="number"?P(f):f.map(P).join(" \u2013 "):typeof f=="number"?String(f):f.join(" \u2013 ");function d(f){return!!(f&&typeof f=="object"&&"label"in f)}const N=(f,P)=>Math.abs(P-f),R=(f,P,w)=>P.reduce((k,h)=>{const L=N(f,w(h));return L<k.lowestDiff?{lowestDiff:L,mark:h}:k},{lowestDiff:N(f,w(P[0])),mark:P[0]}),K=(f,P,w)=>{const k=[];let h=f;for(;h<=P;)k.push(parseFloat(h.toFixed(10))),h+=w;return k};var X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),z=e.n(X),q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),J=e.n(q),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(O),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),j=e.n(x),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=e.n(M),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),oe=e.n(W),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSlider/styles.module.css"),C={};C.styleTagTransform=oe(),C.setAttributes=j(),C.insert=T().bind(null,"head"),C.domAPI=J(),C.insertStyleElement=D();var U=z()(g.A,C);const A=g.A&&g.A.locals?g.A.locals:void 0;var I=function(f,P){var w={};for(var k in f)Object.prototype.hasOwnProperty.call(f,k)&&P.indexOf(k)<0&&(w[k]=f[k]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,k=Object.getOwnPropertySymbols(f);h<k.length;h++)P.indexOf(k[h])<0&&Object.prototype.propertyIsEnumerable.call(f,k[h])&&(w[k[h]]=f[k[h]]);return w};const re=(f,P,w,k)=>f?k||[P,w]:k!=null?k:P,ae=(0,r.forwardRef)((f,P)=>{var{id:w,name:k,min:h,max:L,step:ne,marks:F,showScaleBar:pe=!0,value:de,range:Z=!1,disabled:H=!1,readonly:ee=!1,onChange:me,onFocus:fe,onBlur:se,className:te,label:ie,labelTooltip:xe,labelTooltipPlacement:Pe,required:Ee,caption:Oe,hint:Te,showHintIcon:Ae,size:_e=u.SK.S,textInputFormatter:ye,unbindInputFromMarks:De,postfixIcon:Me,prefix:Ce,postfix:Ie,autoFocus:we}=f,Be=I(f,["id","name","min","max","step","marks","showScaleBar","value","range","disabled","readonly","onChange","onFocus","onBlur","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","size","textInputFormatter","unbindInputFromMarks","postfixIcon","prefix","postfix","autoFocus"]);const[ce=re(Z,h,L,de),ve]=(0,B.I)({value:de,defaultValue:re(Z,h,L,de),onChange:me}),[be,le]=(0,r.useState)(s(ce,ye)),Se=(0,r.useRef)(null),he=(0,l.M)({prefix:Ce,disabled:H}),ke=(0,v.$)({postfix:Ie,disabled:H}),$=(0,r.useCallback)(b=>{const E=F[b];return d(E)?E.label:E},[F]),ze=(0,r.useMemo)(()=>Object.keys(F).every(b=>b===$(b)),[$,F]),We=b=>{const E=parseFloat(b);b&&Number.isNaN(E)||le(b)},Le=b=>{const E=V=>{le(String($(V))),ve(Number(V))},Q=Object.keys(F).map(V=>({key:V,value:parseFloat(String($(V)))})),Y=Q.find(V=>V.value===b);if(Y){E(Y.key);return}const G=parseFloat(String($(h))),je=parseFloat(String($(L)));if(b<G){E(h);return}if(b>je){E(L);return}const{mark:ge}=R(b,Q,V=>V.value);E(ge.key)},Re=b=>{const E=G=>{le(String(G)),ve(G)};if(b<=h){E(h);return}if(b>=L){E(L);return}if(ne===null){const G=Object.keys(F).map(Number);if(G.includes(b)){le(String(b)),E(b);return}const{mark:je}=R(b,G,ge=>ge);E(je);return}const Q=K(h,L,ne);if(Q.includes(b)){E(b);return}const{mark:Y}=R(b,Q,G=>G);E(Y)},ue=(0,p.A)(()=>{if(Z)return;const b=parseFloat(be),E=parseFloat(String($(h))),Q=Number.isNaN(E)?h:E,Y=be?b:Q;Number.isNaN(Y)||(ze||De?Re(Y):Le(Y))}),Ke=b=>{se==null||se(b),ue()},Ue=b=>{b.key==="Enter"&&ue()};return(0,r.useEffect)(()=>{le(s(ce,ye))},[ce,ye]),(0,r.useEffect)(()=>{ue()},[F,h,L,ue]),(0,n.jsxs)(i.m,Object.assign({className:te,label:ie,labelTooltip:xe,labelTooltipPlacement:Pe,labelFor:w,disabled:H,required:Ee,caption:Oe,hint:Te,showHintIcon:Ae,readonly:ee,size:_e},(0,m.z7)(Be),{children:[(0,n.jsx)(_.V,{className:A.fieldContainer,size:_e,validationState:t.sv.Default,disabled:H,readonly:ee,variant:t.aJ.SingleLine,inputRef:Se,prefix:he.show&&he.render({key:he.id}),postfix:(0,n.jsxs)(n.Fragment,{children:[ke.show&&ke.render({key:ke.id}),Me]}),children:(0,n.jsx)(a.K,{ref:(0,c.A)(P,Se),"data-size":_e,value:be,onChange:Z?void 0:We,onFocus:fe,onBlur:Z?se:Ke,onKeyDown:Ue,disabled:H,readonly:Z?!0:ee,type:"text",inputMode:"numeric",id:w,name:k,"data-test-id":"field-slider__input",autoFocus:we})}),(0,n.jsx)("div",{className:A.sliderWrapper,children:(0,n.jsx)("div",{className:A.slider,"data-size":_e,children:(0,n.jsx)(o.A,{range:Z,min:h,max:L,step:ne,value:ce,onChange:ve,marks:pe?F:void 0,disabled:ee||H,"data-test-id":"field-slider__slider"})})})]}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"(S,y,e){e.d(y,{$:()=>a});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),u=function(o,p){var m={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&p.indexOf(t)<0&&(m[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,t=Object.getOwnPropertySymbols(o);_<t.length;_++)p.indexOf(t[_])<0&&Object.prototype.propertyIsEnumerable.call(o,t[_])&&(m[t[_]]=o[t[_]]);return m};function a({postfix:o,disabled:p}){return(0,c.useMemo)(()=>({id:"postfix",active:!1,show:!!o,render:m=>{var{key:t}=m,_=u(m,["key"]);return(0,n.jsx)("div",Object.assign({},_,{className:r.A.postfix,"data-test-id":"field-postfix","data-disabled":p||void 0,children:o}),t)}}),[p,o])}},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"(S,y,e){e.d(y,{M:()=>a});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=e("./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),u=function(o,p){var m={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&p.indexOf(t)<0&&(m[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,t=Object.getOwnPropertySymbols(o);_<t.length;_++)p.indexOf(t[_])<0&&Object.prototype.propertyIsEnumerable.call(o,t[_])&&(m[t[_]]=o[t[_]]);return m};function a({prefix:o,disabled:p}){return(0,c.useMemo)(()=>({id:"prefix",active:!1,show:!!o,render:m=>{var{key:t}=m,_=u(m,["key"]);return(0,n.jsx)("div",Object.assign({},_,{"data-test-id":"field-prefix",className:r.A.prefix,"data-disabled":p||void 0,children:o}),t)}}),[p,o])}},"./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/placeholder/index.js"(S,y,e){e.d(y,{A:()=>B});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),r=function(l,v){var i={};for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&v.indexOf(s)<0&&(i[s]=l[s]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(l);d<s.length;d++)v.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(l,s[d])&&(i[s[d]]=l[s[d]]);return i};const a=c.forwardRef((l,v)=>{var{size:i=24}=l,s=r(l,["size"]);s.width=void 0,s.height=void 0;const d="-placeholder-s";return typeof i=="number"&&(s.style||(s.style={}),s.style.width=i+"px",s.style.height=i+"px"),(0,n.jsx)("svg",Object.assign({ref:v,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+d},s,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+d.substring(1)})}))});var o=function(l,v){var i={};for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&v.indexOf(s)<0&&(i[s]=l[s]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(l);d<s.length;d++)v.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(l,s[d])&&(i[s[d]]=l[s[d]]);return i};const m=c.forwardRef((l,v)=>{var{size:i=24}=l,s=o(l,["size"]);s.width=void 0,s.height=void 0;const d="-placeholder-xs";return typeof i=="number"&&(s.style||(s.style={}),s.style.width=i+"px",s.style.height=i+"px"),(0,n.jsx)("svg",Object.assign({ref:v,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+d},s,{children:(0,n.jsx)("use",{href:"#snack-uikit-"+d.substring(1)})}))});var t=function(l,v){var i={};for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&v.indexOf(s)<0&&(i[s]=l[s]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(l);d<s.length;d++)v.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(l,s[d])&&(i[s[d]]=l[s[d]]);return i};const B=(0,c.forwardRef)((l,v)=>{var{size:i=24}=l,s=t(l,["size"]);return Number(i)>=20?(0,n.jsx)(a,Object.assign({ref:v,size:i},s)):(0,n.jsx)(m,Object.assign({ref:v,size:i},s))})},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"(S,y,e){e.d(y,{K:()=>T});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(c),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const o={Text:"text",Password:"password",Number:"number",Tel:"tel",Email:"email",Url:"url"},p={Text:"text",Decimal:"decimal",Numeric:"numeric",Tel:"tel",Search:"search",Email:"email",Url:"url",None:"none"};var m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(m),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=e.n(_),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),v=e.n(l),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),s=e.n(i),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(d),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(R),X=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"),z={};z.styleTagTransform=K(),z.setAttributes=s(),z.insert=v().bind(null,"head"),z.domAPI=B(),z.insertStyleElement=N();var q=t()(X.A,z);const J=X.A&&X.A.locals?X.A.locals:void 0;var O=function(x,j){var M={};for(var D in x)Object.prototype.hasOwnProperty.call(x,D)&&j.indexOf(D)<0&&(M[D]=x[D]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var W=0,D=Object.getOwnPropertySymbols(x);W<D.length;W++)j.indexOf(D[W])<0&&Object.prototype.propertyIsEnumerable.call(x,D[W])&&(M[D[W]]=x[D[W]]);return M};const T=(0,u.forwardRef)((x,j)=>{var{name:M,value:D="",onChange:W,placeholder:oe,id:g,className:C,type:U=o.Text,inputMode:A=p.Text,disabled:I=!1,readonly:re=!1,autoComplete:ae=!1,autoFocus:f=!1,maxLength:P,min:w,max:k,step:h,onFocus:L,onBlur:ne,onKeyDown:F,onPaste:pe,tabIndex:de=0,onClick:Z,onMouseDown:H,spellCheck:ee,pattern:me}=x,fe=O(x,["name","value","onChange","placeholder","id","className","type","inputMode","disabled","readonly","autoComplete","autoFocus","maxLength","min","max","step","onFocus","onBlur","onKeyDown","onPaste","tabIndex","onClick","onMouseDown","spellCheck","pattern"]);const se=ie=>{W==null||W(ie.target.value,ie)};let te;switch(ae){case!0:te="on";break;case!1:te="off";break;default:te=ae;break}return(0,n.jsx)("input",Object.assign({name:M,maxLength:P,id:g,className:r()(C,J.inputPrivate),autoComplete:te,ref:j,value:D,onChange:se,placeholder:oe,type:U,inputMode:A,disabled:I,readOnly:re,onFocus:L,onBlur:ne,onKeyDown:F,onPaste:pe,tabIndex:de,onClick:Z,onMouseDown:H,min:w,max:k,step:h,spellCheck:ee,title:"",pattern:me,autoFocus:f},(0,a.z7)(fe)))})},"./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"(S,y,e){e.d(y,{Ev:()=>c,SK:()=>n,Vp:()=>r,_h:()=>u});const n={S:"s",M:"m",L:"l"},c={Xs:16,S:24},r={S:"s",M:"m"},u={[n.S]:r.S,[n.M]:r.M,[n.L]:r.M}},"./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"(S,y,e){e.d(y,{y:()=>J});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(c),u=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),a=e("./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(o),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),t=e.n(m),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),B=e.n(_),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),v=e.n(l),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),s=e.n(i),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),N=e.n(d),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"),K={};K.styleTagTransform=N(),K.setAttributes=v(),K.insert=B().bind(null,"head"),K.domAPI=t(),K.insertStyleElement=s();var X=p()(R.A,K);const z=R.A&&R.A.locals?R.A.locals:void 0;var q=function(O,T){var x={};for(var j in O)Object.prototype.hasOwnProperty.call(O,j)&&T.indexOf(j)<0&&(x[j]=O[j]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,j=Object.getOwnPropertySymbols(O);M<j.length;M++)T.indexOf(j[M])<0&&Object.prototype.propertyIsEnumerable.call(O,j[M])&&(x[j[M]]=O[j[M]]);return x};function J(O){var{size:T=a.K.S,className:x}=O,j=q(O,["size","className"]);return T===a.K.XXS?(0,n.jsxs)("svg",Object.assign({viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r()(z.spinner,x)},(0,u.z7)(j),{"data-size":T,children:[(0,n.jsx)("circle",{opacity:"0.24",cx:"4",cy:"4",r:"3",strokeWidth:"1.5"}),(0,n.jsx)("path",{d:"M1 4C1 2.34315 2.34315 1 4 1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):T===a.K.XS?(0,n.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r()(z.spinner,x)},(0,u.z7)(j),{"data-size":T,children:[(0,n.jsx)("circle",{opacity:"0.24",cx:"8",cy:"8",r:"6",strokeWidth:"1.5"}),(0,n.jsx)("path",{d:"M2 8C2 4.68629 4.68629 2 8 2",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):(0,n.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r()(z.spinner,x)},(0,u.z7)(j),{"data-size":T,children:[(0,n.jsx)("circle",{opacity:"0.24",cx:"12",cy:"12",r:"9",strokeWidth:"1.5"}),(0,n.jsx)("path",{d:"M3 12C3 7.02944 7.02944 3 12 3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}},"./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/Slider.js"(S,y,e){e.d(y,{A:()=>oe});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(c),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=e.n(u),o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),p=e.n(o),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),t=e.n(m),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(_),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),v=e.n(l),i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/slider.css"),s={};s.styleTagTransform=v(),s.setAttributes=t(),s.insert=p().bind(null,"head"),s.domAPI=a(),s.insertStyleElement=B();var d=r()(i.A,s);const N=i.A&&i.A.locals?i.A.locals:void 0;var R=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),K=e.n(R),X=e("./node_modules/.pnpm/rc-slider@10.5.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-slider/es/index.js"),z=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),q=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),J=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"),O=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/styles.module.css"),T={};T.styleTagTransform=v(),T.setAttributes=t(),T.insert=p().bind(null,"head"),T.domAPI=a(),T.insertStyleElement=B();var x=r()(O.A,T);const j=O.A&&O.A.locals?O.A.locals:void 0;var M=function(g,C){var U={};for(var A in g)Object.prototype.hasOwnProperty.call(g,A)&&C.indexOf(A)<0&&(U[A]=g[A]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var I=0,A=Object.getOwnPropertySymbols(g);I<A.length;I++)C.indexOf(A[I])<0&&Object.prototype.propertyIsEnumerable.call(g,A[I])&&(U[A[I]]=g[A[I]]);return U};const D=g=>(0,z.cloneElement)(g,{[J.a]:"Left Right"}),W=g=>function(C,U){return(0,n.jsx)(q.m,{tip:g?g(U.value):U.value,open:U.dragging||void 0,disableSpanWrapper:!0,trigger:"hoverAndFocusVisible",className:j.tipWrapper,children:D(C)})};function oe(g){var{className:C,handleTip:U,tipFormatter:A}=g,I=M(g,["className","handleTip","tipFormatter"]);return(0,n.jsx)(X.A,Object.assign({className:K()("osThemeSnack",C,{withMarks:!!I.marks,reverse:!!I.reverse}),handleRender:U?W(A):D},I),JSON.stringify(I.marks))}},"./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"(S,y,e){e.d(y,{a:()=>u,u:()=>a});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),c=e("./node_modules/.pnpm/react-swipeable@7.0.2_react@18.2.0/node_modules/react-swipeable/es/index.js"),r=function(o,p){var m={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&p.indexOf(t)<0&&(m[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,t=Object.getOwnPropertySymbols(o);_<t.length;_++)p.indexOf(t[_])<0&&Object.prototype.propertyIsEnumerable.call(o,t[_])&&(m[t[_]]=o[t[_]]);return m};const u="data-swipe-directions";function a(o){var{availableDirections:p,enabled:m=!0}=o,t=r(o,["availableDirections","enabled"]);const _=(0,n.useRef)(!0),B=s=>{var d;if(p){if(!p.includes(s.dir)){_.current=!1;return}if(!t.onSwipeStart)return;s.event.stopPropagation()}(d=t.onSwipeStart)===null||d===void 0||d.call(t,s)},l=s=>{var d;if(p){if(!_.current)return;s.event.stopPropagation()}(d=t.onSwiping)===null||d===void 0||d.call(t,s)},v=s=>{var d;if(p){if(!_.current){_.current=!0;return}s.event.stopPropagation()}(d=t.onSwiped)===null||d===void 0||d.call(t,s)},i=(0,c.uh)(m?Object.assign(Object.assign({},t),{onSwipeStart:B,onSwiping:l,onSwiped:v}):{});return Object.assign(Object.assign({},i),{[u]:m&&p?p.join(" "):void 0})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSlider/styles.module.css"(S,y,e){e.d(y,{A:()=>o});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(n),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(r),a=u()(c());a.push([S.id,`.sliderWrapper--DyZr_{
  display:flex;
  justify-content:center;
  width:100%;
  margin-top:-13px;
}
.sliderWrapper--DyZr_ .slider--gZyj6{
  flex:1;
}
.sliderWrapper--DyZr_ .slider--gZyj6[data-size=s]{
  height:var(--size-slider-track-line, 2px);
  padding-left:var(--space-fields-slider-padding-s, 8px);
  padding-right:var(--space-fields-slider-padding-s, 8px);
  height:inherit;
}
.sliderWrapper--DyZr_ .slider--gZyj6[data-size=m]{
  height:var(--size-slider-track-line, 2px);
  padding-left:var(--space-fields-slider-padding-m, 10px);
  padding-right:var(--space-fields-slider-padding-m, 10px);
  height:inherit;
}
.sliderWrapper--DyZr_ .slider--gZyj6[data-size=l]{
  height:var(--size-slider-track-line, 2px);
  padding-left:var(--space-fields-slider-padding-l, 12px);
  padding-right:var(--space-fields-slider-padding-l, 12px);
  height:inherit;
}

.fieldContainer--kLqDw svg{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),a.locals={sliderWrapper:"sliderWrapper--DyZr_",slider:"slider--gZyj6",fieldContainer:"fieldContainer--kLqDw"};const o=a},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"(S,y,e){e.d(y,{A:()=>o});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(n),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(r),a=u()(c());a.push([S.id,`.prefix--ac5jY{
  color:var(--sys-neutral-text-support, #6d707f);
}
.prefix--ac5jY[data-disabled]{
  opacity:var(--opacity-a056, 0.56);
}

.postfix--_SqBv{
  color:var(--sys-neutral-text-support, #6d707f);
}
.postfix--_SqBv[data-disabled]{
  opacity:var(--opacity-a056, 0.56);
}`,""]),a.locals={prefix:"prefix--ac5jY",postfix:"postfix--_SqBv"};const o=a},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/styles.module.css"(S,y,e){e.d(y,{A:()=>o});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(n),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(r),a=u()(c());a.push([S.id,`.inputPrivate--GyCf_{
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
}`,""]),a.locals={inputPrivate:"inputPrivate--GyCf_"};const o=a},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@0.9.8_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"(S,y,e){e.d(y,{A:()=>o});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(n),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(r),a=u()(c());a.push([S.id,`.spinner--Ed4zL{
  pointer-events:none;
  stroke:currentColor;
  animation:spin--ykpAz 1s ease-in-out infinite;
}
.spinner--Ed4zL > g > path{
  fill:currentColor;
}
.spinner--Ed4zL > mask{
  mask-type:alpha;
}
.spinner--Ed4zL[data-size=xxs]{
  width:var(--size-loader-loader-xxs, 8px);
  height:var(--size-loader-loader-xxs, 8px);
}
.spinner--Ed4zL[data-size=xs]{
  width:var(--size-loader-loader-xs, 16px);
  height:var(--size-loader-loader-xs, 16px);
}
.spinner--Ed4zL[data-size=s]{
  width:var(--size-loader-loader-s, 24px);
  height:var(--size-loader-loader-s, 24px);
}
.spinner--Ed4zL[data-size=m]{
  width:var(--size-loader-loader-m, 48px);
  height:var(--size-loader-loader-m, 48px);
}
.spinner--Ed4zL[data-size=l]{
  width:var(--size-loader-loader-l, 72px);
  height:var(--size-loader-loader-l, 72px);
}
@keyframes spin--ykpAz{
  to{
    transform:rotate(360deg);
  }
}`,""]),a.locals={spinner:"spinner--Ed4zL",spin:"spin--ykpAz"};const o=a},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/slider.css"(S,y,e){e.d(y,{A:()=>o});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(n),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(r),a=u()(c());a.push([S.id,`.osThemeSnack.rc-slider{
  touch-action:none;
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:var(--size-slider-handle, 16px);
  padding:calc((var(--size-slider-handle, 16px) - var(--size-slider-track-line, 2px)) / 2) 0;
}

.osThemeSnack.rc-slider *{
  box-sizing:border-box;
}

.osThemeSnack.rc-slider .rc-slider-rail{
  height:var(--size-slider-track-line, 2px);
  border-radius:var(--dimension-theme-general-2px, 2px);
  position:absolute;
  width:100%;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.osThemeSnack.rc-slider .rc-slider-track,
.osThemeSnack.rc-slider .rc-slider-tracks{
  height:var(--size-slider-track-line, 2px);
  border-radius:var(--dimension-theme-general-2px, 2px);
  position:absolute;
  display:block;
  background-color:var(--sys-primary-accent-default, #389f74);
}

.osThemeSnack.rc-slider .rc-slider-track-draggable{
  box-sizing:content-box;
  background-clip:content-box;
}

.osThemeSnack.rc-slider .rc-slider-handle{
  width:var(--size-slider-handle, 16px);
  height:var(--size-slider-handle, 16px);
  border-radius:var(--radius-slider-handle, 16px);
  touch-action:pan-x;
  cursor:grab;
  position:absolute;
  z-index:1;
  margin-top:calc(0px - (var(--size-slider-handle, 16px) - var(--size-slider-track-line, 2px)) / 2);
  opacity:1;
  background-color:var(--sys-primary-accent-default, #389f74);
  border:none;
  box-shadow:none;
}
.osThemeSnack.rc-slider .rc-slider-handle::after{
  content:"";
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  width:200%;
  height:100%;
}
.osThemeSnack.rc-slider .rc-slider-handle:hover{
  background-color:var(--sys-primary-accent-hovered, #37946e);
}
.osThemeSnack.rc-slider .rc-slider-handle:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  background-color:var(--sys-primary-accent-hovered, #37946e);
  outline-color:var(--sys-primary-accent-default, #389f74);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.osThemeSnack.rc-slider .rc-slider-handle:active{
  cursor:grabbing;
  background-color:var(--sys-primary-accent-hovered, #37946e);
}

.osThemeSnack.rc-slider .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  background-color:var(--sys-primary-accent-hovered, #37946e);
  outline-color:var(--sys-primary-accent-default, #389f74);
  outline-offset:var(--spacing-state-focus-offset, 2px);
  box-shadow:none;
}

.osThemeSnack.rc-slider .rc-slider-mark{
  position:absolute;
  top:calc(var(--size-slider-handle, 16px) + var(--size-slider-scale-bar-step-height, 4px) + var(--space-slider-scale-bar-step-gap, 4px));
  left:0;
  width:100%;
}

.osThemeSnack.rc-slider .rc-slider-mark-text{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  cursor:pointer;
  position:absolute;
  display:inline-block;
  color:var(--sys-neutral-text-support, #6d707f);
  text-align:center;
  vertical-align:middle;
}
.osThemeSnack.rc-slider .rc-slider-mark-text::before{
  height:var(--size-slider-scale-bar-step-height, 4px);
  border-radius:var(--radius-slider-scale-bar-step-line, 2px);
  content:"";
  position:absolute;
  top:calc(0px - (var(--size-slider-scale-bar-step-height, 4px) + var(--space-slider-scale-bar-step-gap, 4px)));
  left:50%;
  transform:translateX(-50%);
  width:var(--size-slider-track-line, 2px);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.osThemeSnack.rc-slider .rc-slider-mark-text:nth-child(1){
  transform:none !important;
}
.osThemeSnack.rc-slider .rc-slider-mark-text:nth-child(1)::before{
  left:0;
  transform:none;
}

.osThemeSnack.rc-slider .rc-slider-mark-text:last-child{
  transform:translateX(-100%) !important;
}
.osThemeSnack.rc-slider .rc-slider-mark-text:last-child::before{
  right:0;
  left:auto;
  transform:none;
}

.osThemeSnack.rc-slider .rc-slider-mark-text-active{
  color:var(--sys-neutral-text-support, #6d707f);
}

.osThemeSnack.rc-slider .rc-slider-step{
  position:absolute;
  width:100%;
  height:calc(var(--size-slider-track-line, 2px) * 2);
  background:transparent;
}

.osThemeSnack.rc-slider.rc-slider-disabled{
  background-color:transparent;
}
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-track,
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-handle{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-mark-text,
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-dot,
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-track,
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-handle{
  cursor:not-allowed !important;
}

.osThemeSnack.rc-slider .rc-slider-dot{
  display:none;
}

.osThemeSnack.rc-slider.withMarks{
  height:calc(var(--size-slider-handle, 16px) + var(--size-slider-scale-bar-step-height, 4px) + var(--space-slider-scale-bar-step-gap, 4px) + var(--sans-body-s-line-height, 16px));
}

.osThemeSnack.rc-slider.reverse .rc-slider-mark-text:nth-child(1){
  transform:none !important;
}
.osThemeSnack.rc-slider.reverse .rc-slider-mark-text:nth-child(1)::before{
  right:0;
  left:auto;
  transform:none;
}

.osThemeSnack.rc-slider.reverse .rc-slider-mark-text:last-child{
  transform:translateX(100%) !important;
}
.osThemeSnack.rc-slider.reverse .rc-slider-mark-text:last-child::before{
  left:0;
  transform:none;
}`,""]);const o=a},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/styles.module.css"(S,y,e){e.d(y,{A:()=>o});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),c=e.n(n),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),u=e.n(r),a=u()(c());a.push([S.id,`.tipWrapper--cDUD7{
  display:block;
  text-align:center;
}`,""]),a.locals={tipWrapper:"tipWrapper--cDUD7"};const o=a},"./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"(S,y,e){e.d(y,{A:()=>d});var n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(n),r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=e.n(r),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),o=e.n(a),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),m=e.n(p),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_=e.n(t),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),l=e.n(B),v=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.56.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),i={};i.styleTagTransform=l(),i.setAttributes=m(),i.insert=o().bind(null,"head"),i.domAPI=u(),i.insertStyleElement=_();var s=c()(v.A,i);const d=v.A&&v.A.locals?v.A.locals:void 0}}]);})();
