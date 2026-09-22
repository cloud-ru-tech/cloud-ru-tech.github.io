"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[2825],{"./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSlider/FieldSlider.js"(T,k,e){e.d(k,{w:()=>De});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.10_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),p=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.10_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(x),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=e.n(X),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=e.n(H),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),m=e.n(n),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),s=e.n(_),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),F=e.n(d),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/slider.css"),S={};S.styleTagTransform=F(),S.setAttributes=m(),S.insert=D().bind(null,"head"),S.domAPI=W(),S.insertStyleElement=s();var ke=R()(w.A,S);const Q=w.A&&w.A.locals?w.A.locals:void 0;var te=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),re=e.n(te),O=e("./node_modules/.pnpm/rc-slider@10.5.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-slider/es/index.js"),P=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.16_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),A,v,M=function(t,a){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&a.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(i[r[o]]=t[r[o]]);return i};const me="data-swipe-directions";function ns(t){var{availableDirections:a,enabled:i=!0}=t,r=M(t,["availableDirections","enabled"]);const o=A(!0),g=j=>{var h;if(a){if(!a.includes(j.dir)){o.current=!1;return}if(!r.onSwipeStart)return;j.event.stopPropagation()}(h=r.onSwipeStart)===null||h===void 0||h.call(r,j)},J=j=>{var h;if(a){if(!o.current)return;j.event.stopPropagation()}(h=r.onSwiping)===null||h===void 0||h.call(r,j)},E=j=>{var h;if(a){if(!o.current){o.current=!0;return}j.event.stopPropagation()}(h=r.onSwiped)===null||h===void 0||h.call(r,j)},ae=v(i?Object.assign(Object.assign({},r),{onSwipeStart:g,onSwiping:J,onSwiped:E}):{});return Object.assign(Object.assign({},ae),{[me]:i&&a?a.join(" "):void 0})}var G=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/styles.module.css"),K={};K.styleTagTransform=F(),K.setAttributes=m(),K.insert=D().bind(null,"head"),K.domAPI=W(),K.insertStyleElement=s();var as=R()(G.A,K);const xe=G.A&&G.A.locals?G.A.locals:void 0;var Se=function(t,a){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&a.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(i[r[o]]=t[r[o]]);return i};const fe=t=>(0,u.cloneElement)(t,{[me]:"Left Right"}),je=t=>function(a,i){return(0,l.jsx)(P.m,{tip:t?t(i.value):i.value,open:i.dragging||void 0,disableSpanWrapper:!0,trigger:"hoverAndFocusVisible",className:xe.tipWrapper,children:fe(a)})};function Oe(t){var{className:a,handleTip:i,tipFormatter:r}=t,o=Se(t,["className","handleTip","tipFormatter"]);return(0,l.jsx)(O.A,Object.assign({className:re()("osThemeSnack",a,{withMarks:!!o.marks,reverse:!!o.reverse}),handleRender:i?je(r):fe},o),JSON.stringify(o.marks))}var Te=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),Pe=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),he=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),Ee=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),we=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),Ae=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"),Ce=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"),ze=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js");const ve=(t,a)=>a?typeof t=="number"?a(t):t.map(a).join(" \u2013 "):typeof t=="number"?String(t):t.join(" \u2013 ");function Me(t){return!!(t&&typeof t=="object"&&"label"in t)}const be=(t,a)=>Math.abs(a-t),oe=(t,a,i)=>a.reduce((r,o)=>{const g=be(t,i(o));return g<r.lowestDiff?{lowestDiff:g,mark:o}:r},{lowestDiff:be(t,i(a[0])),mark:a[0]}),Ie=(t,a,i)=>{const r=[];let o=t;for(;o<=a;)r.push(parseFloat(o.toFixed(10))),o+=i;return r};var $=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSlider/styles.module.css"),U={};U.styleTagTransform=F(),U.setAttributes=m(),U.insert=D().bind(null,"head"),U.domAPI=W(),U.insertStyleElement=s();var ls=R()($.A,U);const ne=$.A&&$.A.locals?$.A.locals:void 0;var We=function(t,a){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&a.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(i[r[o]]=t[r[o]]);return i};const ye=(t,a,i,r)=>t?r||[a,i]:r!=null?r:a,De=(0,u.forwardRef)((t,a)=>{var{id:i,name:r,min:o,max:g,step:J,marks:E,showScaleBar:ae=!0,value:j,range:h=!1,disabled:N=!1,readonly:Y=!1,onChange:Fe,onFocus:Be,onBlur:Z,className:Le,label:Re,labelTooltip:Ke,labelTooltipPlacement:Ue,required:Ne,caption:Xe,hint:Je,showHintIcon:Ve,size:q=y.SK.S,textInputFormatter:le,unbindInputFromMarks:He,postfixIcon:Qe,prefix:Ge,postfix:$e,autoFocus:Ye}=t,Ze=We(t,["id","name","min","max","step","marks","showScaleBar","value","range","disabled","readonly","onChange","onFocus","onBlur","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","size","textInputFormatter","unbindInputFromMarks","postfixIcon","prefix","postfix","autoFocus"]);const[ee=ye(h,o,g,j),de]=(0,we.I)({value:j,defaultValue:ye(h,o,g,j),onChange:Fe}),[ie,V]=(0,u.useState)(ve(ee,le)),ge=(0,u.useRef)(null),ce=(0,Ae.M)({prefix:Ge,disabled:N}),_e=(0,Ce.$)({postfix:$e,disabled:N}),B=(0,u.useCallback)(c=>{const f=E[c];return Me(f)?f.label:f},[E]),qe=(0,u.useMemo)(()=>Object.keys(E).every(c=>c===B(c)),[B,E]),es=c=>{const f=parseFloat(c);c&&Number.isNaN(f)||V(c)},ss=c=>{const f=z=>{V(String(B(z))),de(Number(z))},L=Object.keys(E).map(z=>({key:z,value:parseFloat(String(B(z)))})),I=L.find(z=>z.value===c);if(I){f(I.key);return}const C=parseFloat(String(B(o))),ue=parseFloat(String(B(g)));if(c<C){f(o);return}if(c>ue){f(g);return}const{mark:pe}=oe(c,L,z=>z.value);f(pe.key)},ts=c=>{const f=C=>{V(String(C)),de(C)};if(c<=o){f(o);return}if(c>=g){f(g);return}if(J===null){const C=Object.keys(E).map(Number);if(C.includes(c)){V(String(c)),f(c);return}const{mark:ue}=oe(c,C,pe=>pe);f(ue);return}const L=Ie(o,g,J);if(L.includes(c)){f(c);return}const{mark:I}=oe(c,L,C=>C);f(I)},se=(0,Te.A)(()=>{if(h)return;const c=parseFloat(ie),f=parseFloat(String(B(o))),L=Number.isNaN(f)?o:f,I=ie?c:L;Number.isNaN(I)||(qe||He?ts(I):ss(I))}),rs=c=>{Z==null||Z(c),se()},os=c=>{c.key==="Enter"&&se()};return(0,u.useEffect)(()=>{V(ve(ee,le))},[ee,le]),(0,u.useEffect)(()=>{se()},[E,o,g,se]),(0,l.jsxs)(ze.m,Object.assign({className:Le,label:Re,labelTooltip:Ke,labelTooltipPlacement:Ue,labelFor:i,disabled:N,required:Ne,caption:Xe,hint:Je,showHintIcon:Ve,readonly:Y,size:q},(0,Pe.z7)(Ze),{children:[(0,l.jsx)(Ee.V,{className:ne.fieldContainer,size:q,validationState:he.sv.Default,disabled:N,readonly:Y,variant:he.aJ.SingleLine,inputRef:ge,prefix:ce.show&&ce.render({key:ce.id}),postfix:(0,l.jsxs)(l.Fragment,{children:[_e.show&&_e.render({key:_e.id}),Qe]}),children:(0,l.jsx)(p.K,{ref:(0,b.A)(a,ge),"data-size":q,value:ie,onChange:h?void 0:es,onFocus:Be,onBlur:h?Z:rs,onKeyDown:os,disabled:N,readonly:h?!0:Y,type:"text",inputMode:"numeric",id:i,name:r,"data-test-id":"field-slider__input",autoFocus:Ye})}),(0,l.jsx)("div",{className:ne.sliderWrapper,children:(0,l.jsx)("div",{className:ne.slider,"data-size":q,children:(0,l.jsx)(Oe,{range:h,min:o,max:g,step:J,value:ee,onChange:de,marks:ae?E:void 0,disabled:Y||N,"data-test-id":"field-slider__slider"})})})]}))})},"./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/placeholder/index.js"(T,k,e){e.d(k,{A:()=>D});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=function(n,m){var _={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&m.indexOf(s)<0&&(_[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(n);d<s.length;d++)m.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(n,s[d])&&(_[s[d]]=n[s[d]]);return _};const p=b.forwardRef((n,m)=>{var{size:_=24}=n,s=u(n,["size"]);s.width=void 0,s.height=void 0;const d="-placeholder-s";return typeof _=="number"&&(s.style||(s.style={}),s.style.width=_+"px",s.style.height=_+"px"),(0,l.jsx)("svg",Object.assign({ref:m,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+d},s,{children:(0,l.jsx)("use",{href:"#snack-uikit-"+d.substring(1)})}))});var x=function(n,m){var _={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&m.indexOf(s)<0&&(_[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(n);d<s.length;d++)m.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(n,s[d])&&(_[s[d]]=n[s[d]]);return _};const X=b.forwardRef((n,m)=>{var{size:_=24}=n,s=x(n,["size"]);s.width=void 0,s.height=void 0;const d="-placeholder-xs";return typeof _=="number"&&(s.style||(s.style={}),s.style.width=_+"px",s.style.height=_+"px"),(0,l.jsx)("svg",Object.assign({ref:m,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+d},s,{children:(0,l.jsx)("use",{href:"#snack-uikit-"+d.substring(1)})}))});var W=function(n,m){var _={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&m.indexOf(s)<0&&(_[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(n);d<s.length;d++)m.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(n,s[d])&&(_[s[d]]=n[s[d]]);return _};const D=(0,b.forwardRef)((n,m)=>{var{size:_=24}=n,s=W(n,["size"]);return Number(_)>=20?(0,l.jsx)(p,Object.assign({ref:m,size:_},s)):(0,l.jsx)(X,Object.assign({ref:m,size:_},s))})},"./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"(T,k,e){e.d(k,{y:()=>re});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),b=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(b),y=e("./node_modules/.pnpm/@snack-uikit+utils@5.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),p=e("./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/constants.js"),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(x),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=e.n(X),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),D=e.n(H),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),m=e.n(n),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),s=e.n(_),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),F=e.n(d),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"),S={};S.styleTagTransform=F(),S.setAttributes=m(),S.insert=D().bind(null,"head"),S.domAPI=W(),S.insertStyleElement=s();var ke=R()(w.A,S);const Q=w.A&&w.A.locals?w.A.locals:void 0;var te=function(O,P){var A={};for(var v in O)Object.prototype.hasOwnProperty.call(O,v)&&P.indexOf(v)<0&&(A[v]=O[v]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,v=Object.getOwnPropertySymbols(O);M<v.length;M++)P.indexOf(v[M])<0&&Object.prototype.propertyIsEnumerable.call(O,v[M])&&(A[v[M]]=O[v[M]]);return A};function re(O){var{size:P=p.K.S,className:A}=O,v=te(O,["size","className"]);return P===p.K.XXS?(0,l.jsxs)("svg",Object.assign({viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:u()(Q.spinner,A)},(0,y.z7)(v),{"data-size":P,children:[(0,l.jsx)("circle",{opacity:"0.24",cx:"4",cy:"4",r:"3",strokeWidth:"1.5"}),(0,l.jsx)("path",{d:"M1 4C1 2.34315 2.34315 1 4 1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):P===p.K.XS?(0,l.jsxs)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:u()(Q.spinner,A)},(0,y.z7)(v),{"data-size":P,children:[(0,l.jsx)("circle",{opacity:"0.24",cx:"8",cy:"8",r:"6",strokeWidth:"1.5"}),(0,l.jsx)("path",{d:"M2 8C2 4.68629 4.68629 2 8 2",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})):(0,l.jsxs)("svg",Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:u()(Q.spinner,A)},(0,y.z7)(v),{"data-size":P,children:[(0,l.jsx)("circle",{opacity:"0.24",cx:"12",cy:"12",r:"9",strokeWidth:"1.5"}),(0,l.jsx)("path",{d:"M3 12C3 7.02944 7.02944 3 12 3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}))}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.4_@snack-uikit+locale@1.0.1_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSlider/styles.module.css"(T,k,e){e.d(k,{A:()=>x});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(l),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=e.n(u),p=y()(b());p.push([T.id,`.sliderWrapper--Fq_Jq{
  display:flex;
  justify-content:center;
  width:100%;
  margin-top:-13px;
}
.sliderWrapper--Fq_Jq .slider--efwaK{
  flex:1;
}
.sliderWrapper--Fq_Jq .slider--efwaK[data-size=s]{
  height:var(--size-slider-track-line, 2px);
  padding-left:var(--space-fields-slider-padding-s, 8px);
  padding-right:var(--space-fields-slider-padding-s, 8px);
  height:inherit;
}
.sliderWrapper--Fq_Jq .slider--efwaK[data-size=m]{
  height:var(--size-slider-track-line, 2px);
  padding-left:var(--space-fields-slider-padding-m, 10px);
  padding-right:var(--space-fields-slider-padding-m, 10px);
  height:inherit;
}
.sliderWrapper--Fq_Jq .slider--efwaK[data-size=l]{
  height:var(--size-slider-track-line, 2px);
  padding-left:var(--space-fields-slider-padding-l, 12px);
  padding-right:var(--space-fields-slider-padding-l, 12px);
  height:inherit;
}

.fieldContainer--QfFwn svg{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),p.locals={sliderWrapper:"sliderWrapper--Fq_Jq",slider:"slider--efwaK",fieldContainer:"fieldContainer--QfFwn"};const x=p},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+loaders@1.0.1_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/styles.module.css"(T,k,e){e.d(k,{A:()=>x});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(l),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=e.n(u),p=y()(b());p.push([T.id,`.spinner--CFLWE{
  pointer-events:none;
  stroke:currentColor;
  animation:spin--W3AOp 1s ease-in-out infinite;
}
.spinner--CFLWE > g > path{
  fill:currentColor;
}
.spinner--CFLWE > mask{
  mask-type:alpha;
}
.spinner--CFLWE[data-size=xxs]{
  width:var(--size-loader-loader-xxs, 8px);
  height:var(--size-loader-loader-xxs, 8px);
}
.spinner--CFLWE[data-size=xs]{
  width:var(--size-loader-loader-xs, 16px);
  height:var(--size-loader-loader-xs, 16px);
}
.spinner--CFLWE[data-size=s]{
  width:var(--size-loader-loader-s, 24px);
  height:var(--size-loader-loader-s, 24px);
}
.spinner--CFLWE[data-size=m]{
  width:var(--size-loader-loader-m, 48px);
  height:var(--size-loader-loader-m, 48px);
}
.spinner--CFLWE[data-size=l]{
  width:var(--size-loader-loader-l, 72px);
  height:var(--size-loader-loader-l, 72px);
}
@keyframes spin--W3AOp{
  to{
    transform:rotate(360deg);
  }
}`,""]),p.locals={spinner:"spinner--CFLWE",spin:"spin--W3AOp"};const x=p},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/slider.css"(T,k,e){e.d(k,{A:()=>x});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(l),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=e.n(u),p=y()(b());p.push([T.id,`.osThemeSnack.rc-slider{
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
}`,""]);const x=p},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/styles.module.css"(T,k,e){e.d(k,{A:()=>x});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),b=e.n(l),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),y=e.n(u),p=y()(b());p.push([T.id,`.tipWrapper--KQPFn{
  display:block;
  text-align:center;
}`,""]),p.locals={tipWrapper:"tipWrapper--KQPFn"};const x=p}}]);})();
