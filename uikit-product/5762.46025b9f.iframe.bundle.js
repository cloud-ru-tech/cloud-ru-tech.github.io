"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5762],{"./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Breadcrumbs/Breadcrumbs.js"(j,f,s){s.d(f,{B:()=>Hs});var e=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const _="\u203A",a={Full:"full",ShortLabel:"shortLabel",Ellipsis:"ellipsis",Collapsed:"collapsed"},l={Separator:"separator",Collapse:"collapse",Item:"item"},c={Xs:"xs",S:"s"};var $=s("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),O=s.n($),J=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const N=o=>{if(!o)return 0;if((0,J.B)()){const n=document.createElement("div");n.style.width="10000px",o.append(n);const d=o.getBoundingClientRect().width;return o.removeChild(n),d}return 0},ns=(o,n)=>{if(!n.length)return;let[d]=n;for(const t of n)t.width<=o?(d.width>o||d.weight>t.weight)&&(d=t):t.width<d.width&&(d=t);if(d)return{chain:d.chain,containerWidth:o,chainWidth:d.width}};function q(o){const[n,d]=(0,i.useState)([]),[t,r]=(0,i.useState)(0);(0,i.useEffect)(()=>{var h;const b=(h=o.current)===null||h===void 0?void 0:h.parentElement;if(!b)return;r(N(b));const k=O()(()=>{r(N(b))},100),V=new ResizeObserver(k);return V.observe(b),V.observe(document.body),()=>V.disconnect()},[o]);const m=(0,i.useMemo)(()=>ns(t,n),[t,n]);return{setConfigs:d,currentConfig:m}}var os=s("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js");const R=(0,i.createContext)({hidden:!1,size:c.S,separator:_}),W=(o,n)=>n?`${o}-element-${n}`:"";var U=s("./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js");function w({size:o,children:n,className:d}){return(0,e.jsx)(U.o,{className:d,size:o===c.S?"m":"s",tag:"div",family:"sans",purpose:"body",children:n})}var D=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=s.n(D),K=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Q=s.n(K),ts=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),y=s.n(ts),F=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=s.n(F),S=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=s.n(S),T=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=s.n(T),A=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Collapse/styles.module.css"),C={};C.styleTagTransform=M(),C.setAttributes=g(),C.insert=y().bind(null,"head"),C.domAPI=Q(),C.insertStyleElement=p();var H=X()(A.A,C);const L=A.A&&A.A.locals?A.A.locals:void 0;function B({currentConfig:o,className:n}){const d=(0,i.useContext)(R),{hidden:t,size:r,testId:m}=d,h=(0,i.useRef)(null),b=o.filter(k=>k.element===l.Item&&k.item.renderMode===a.Collapsed).map(k=>Object.assign({content:{option:k.item.label}},k.item.href?{itemWrapRender:V=>(0,e.jsx)("a",{href:k.item.href,onClick:k.item.onClick,className:L.a,children:V})}:{onClick:k.item.onClick}));return(0,e.jsx)("div",{className:n,"data-test-id":W("collapse",m),"data-element-type":l.Collapse,children:(0,e.jsx)(R.Provider,{value:Object.assign(Object.assign({},d),{testId:`${m}-collapsed`}),children:(0,e.jsx)(os.i,{trigger:"hoverAndFocusVisible",size:"s",scroll:!0,triggerElemRef:h,items:b,children:(0,e.jsx)("button",{type:"button",ref:h,className:L.collapse,tabIndex:t?-1:0,children:(0,e.jsx)(w,{size:r,children:"..."})})})})})}var ls=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),ks=s.n(ls),as=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),Z=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Crumb/styles.module.css"),I={};I.styleTagTransform=M(),I.setAttributes=g(),I.insert=y().bind(null,"head"),I.domAPI=Q(),I.insertStyleElement=p();var us=X()(Z.A,I);const u=Z.A&&Z.A.locals?Z.A.locals:void 0;var E=function(o,n){var d={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&n.indexOf(t)<0&&(d[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(o);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(o,t[r])&&(d[t[r]]=o[t[r]]);return d};const Y=8,x=(0,i.memo)(function(n){var{minWidth:d=0,current:t=!1,renderMode:r,className:m,item:{label:h,shortLabel:b,icon:k,id:V,onClick:ds,href:is},useIconOnly:cs}=n,Ts=E(n,["minWidth","current","renderMode","className","item","useIconOnly"]);const{hidden:_s,size:bs,testId:Bs}=(0,i.useContext)(R),js=_s&&h.length>Y&&r===a.Ellipsis?`${h.substring(0,4)}...`:h,zs=!!(k&&cs),Qs=d&&r===a.Ellipsis?d:"auto",Is={"data-render-mode":r,"data-current":t,"data-hidden":_s,"data-size":bs,"data-id":V},ws=(0,e.jsxs)(e.Fragment,{children:[k&&(0,e.jsx)("div",{className:u.icon,children:(0,e.jsx)(k,{size:16})}),!zs&&(0,e.jsx)(w,{size:bs,className:u.label,children:r===a.ShortLabel?b:js})]}),Ws=_s?{tabIndex:-1}:{},Us=r===a.Ellipsis?js:"";let Ps=null;return is?Ps=(0,e.jsx)("a",Object.assign({className:u.crumb,onClick:ds,href:is,"aria-label":zs?js:void 0,"data-clickable":!0},Is,Ws,{children:ws})):ds?Ps=(0,e.jsx)("button",Object.assign({type:"button",title:Us,onClick:ds,className:u.crumb,"aria-label":zs?js:void 0,"data-clickable":!0},Is,Ws,{children:ws})):Ps=(0,e.jsx)("div",Object.assign({className:u.crumb},Is,{children:ws})),(0,e.jsx)("li",Object.assign({},(0,as.z7)(Ts),Is,{"data-test-id":W("crumb",Bs),className:ks()(u.wrapper,m),"data-element-type":l.Item,style:{minWidth:Qs},title:Us,children:Ps}))}),G=()=>({[a.ShortLabel]:0,[a.Collapsed]:0,[a.Ellipsis]:0,[a.Full]:0}),ss=o=>o.getBoundingClientRect().width;function ms(o){if(!o)return;const n=o.children,[d,t,...r]=Array.from(n);return{separator:ss(d),collapse:ss(t),items:r.reduce((m,h)=>{const b=h.getAttribute("data-id"),k=h.getAttribute("data-render-mode");return m[b]=m[b]||G(),m[b][k]=ss(h),m},{})}}const Ss={[a.Full]:0,[a.ShortLabel]:1,[a.Ellipsis]:100,[a.Collapsed]:1e4},es=[a.Full,a.ShortLabel,a.Ellipsis],fs=o=>(n,d)=>[Object.assign(Object.assign({},n),{renderMode:o}),...d],ys=fs(a.Full),As=fs(a.ShortLabel),vs=fs(a.Ellipsis),gs=fs(a.Collapsed);function Es([o,...n],{useCollapse:d=!0,useEllipse:t=!0}){const r=[];return o?n.length?(Es(n,{useCollapse:!1,useEllipse:!1}).forEach(m=>{r.push(ys(o,m)),o.shortLabel&&r.push(As(o,m))}),t&&Es(n,{useCollapse:!1,useEllipse:!0}).forEach(m=>{r.push(vs(o,m))}),d&&Es(n,{useCollapse:!0,useEllipse:!1}).forEach(m=>{r.push(gs(o,m))}),r):(r.push(ys(o,[])),o.shortLabel&&r.push(As(o,[])),r):r}const rs=(o,n)=>n.map((d,t,r)=>{const m=t===r.length-1;return Object.assign(Object.assign({},d),{renderMode:m?o:a.Collapsed})});function xs(o,n,d){if(!o.length)return[];const t=[],[r,...m]=o.map(h=>Object.assign(Object.assign({},h),{renderMode:a.Full}));return Es(m,{useCollapse:!0,useEllipse:!0}).forEach(h=>{t.push(ys(r,h)),r.shortLabel&&t.push(As(r,h))}),t.push(vs(r,rs(a.Full,m))),t.push(vs(r,rs(a.Ellipsis,m))),t.push(gs(r,rs(a.Full,m))),t.push(gs(r,rs(a.Ellipsis,m))),t.map(h=>h.reduce((b,k,V,ds)=>{const{renderMode:is}=k;V&&es.includes(is)&&(b.width+=n.separator,b.chain.push({element:l.Separator,width:n.separator})),!b.hasCollapsed&&is===a.Collapsed&&(V&&(b.width+=n.separator,b.chain.push({element:l.Separator,width:n.separator})),b.hasCollapsed=!0,b.width+=n.collapse,b.chain.push({element:l.Collapse,width:n.collapse}));const cs=n.items[k.id][is];return b.weight+=Ss[k.renderMode],b.width+=cs,b.chain.push({element:l.Item,item:k,width:cs}),V===ds.length-1&&d&&(b.width+=n.separator,b.chain.push({element:l.Separator,width:n.separator})),b},{chain:[],weight:0,width:0,hasCollapsed:!1}))}var ps=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Separator/styles.module.css"),hs={};hs.styleTagTransform=M(),hs.setAttributes=g(),hs.insert=y().bind(null,"head"),hs.domAPI=Q(),hs.insertStyleElement=p();var Ls=X()(ps.A,hs);const Ds=ps.A&&ps.A.locals?ps.A.locals:void 0;function z(){const{size:o,separator:n,testId:d}=(0,i.useContext)(R);return(0,e.jsx)("div",{"aria-hidden":!0,"data-size":o,className:Ds.separator,"data-test-id":W("separator",d),"data-element-type":l.Separator,children:(0,e.jsx)(w,{size:o,children:n})})}var v=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Wrapper/styles.module.css"),P={};P.styleTagTransform=M(),P.setAttributes=g(),P.insert=y().bind(null,"head"),P.domAPI=Q(),P.insertStyleElement=p();var Ns=X()(v.A,P);const Os=v.A&&v.A.locals?v.A.locals:void 0;var Cs=function(o,n){var d={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&n.indexOf(t)<0&&(d[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(o);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(o,t[r])&&(d[t[r]]=o[t[r]]);return d};const Ms=(0,i.forwardRef)(function(n,d){var{children:t,className:r,size:m,hidden:h,separator:b,"data-test-id":k}=n,V=Cs(n,["children","className","size","hidden","separator","data-test-id"]);return(0,e.jsx)("nav",Object.assign({},(0,as.z7)(V),{className:ks()(Os.wrapper,r),"data-test-id":k,"data-hidden":h,"aria-hidden":h,children:(0,e.jsx)(R.Provider,{value:{hidden:h,size:m,separator:b,testId:k},children:(0,e.jsx)("ul",{className:Os.row,ref:d,"data-hidden":h,"data-size":m,children:t})})}))}),Ks=[[a.ShortLabel,"shortLabel"],[a.Ellipsis,"label"],[a.Full,"label"]],Fs=[[a.Full,"label"]],Zs=o=>(n,d)=>{const t=!d&&o;return(t?Fs:Ks).map(([m,h])=>!n[h]&&m!==a.Full?null:(0,e.jsx)(x,{useIconOnly:t,renderMode:m,item:n},n.id+m))},Ys=({firstItemIconOnly:o})=>(0,i.useMemo)(()=>Zs(o),[o]),Vs=(0,i.memo)(function({size:n,separator:d,items:t,onConfigsBuilt:r,firstItemIconOnly:m=!1,lastEmpty:h=!1}){const b=(0,i.useRef)(null),k=(0,i.useRef)(t);k.current=t,(0,i.useEffect)(()=>{const ds=b.current;if(ds){const is=new ResizeObserver(([{target:cs}])=>{const Ts=ms(cs);Ts&&r(xs(k.current,Ts,h))});return is.observe(ds),()=>{is.disconnect()}}},[t,h,r]);const V=Ys({firstItemIconOnly:m});return(0,e.jsxs)(Ms,{size:n,hidden:!0,ref:b,separator:d,"data-test-id":"hidden-wrapper",children:[(0,e.jsx)(z,{}),(0,e.jsx)(B,{currentConfig:[]}),t.map(V)]})});var Xs=function(o,n){var d={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&n.indexOf(t)<0&&(d[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(o);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(o,t[r])&&(d[t[r]]=o[t[r]]);return d};const Hs=(0,i.memo)(function(n){var{items:d,size:t=c.S,separator:r=_,className:m,firstItemIconOnly:h=!1,inactiveLastItem:b=!1,lastEmpty:k=!1}=n,V=Xs(n,["items","size","separator","className","firstItemIconOnly","inactiveLastItem","lastEmpty"]);const ds=(0,i.useRef)(null),{setConfigs:is,currentConfig:cs}=q(ds),Ts=(0,i.useMemo)(()=>b?d.map((_s,bs)=>bs===d.length-1?Object.assign(Object.assign({},_s),{onClick:void 0,href:void 0}):_s):d,[b,d]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Vs,{items:Ts,size:t,separator:r,onConfigsBuilt:is,firstItemIconOnly:h,lastEmpty:k}),(0,e.jsx)(Ms,Object.assign({},V,{ref:ds,hidden:!1,size:t,separator:r,className:m,children:cs==null?void 0:cs.chain.map((_s,bs,Bs)=>{const Rs=bs===Bs.length-1;switch(_s.element){case l.Separator:return(0,e.jsx)(z,{},bs);case l.Collapse:return(0,e.jsx)(B,{currentConfig:cs.chain},bs);case l.Item:{const{renderMode:js,id:zs}=_s.item;if(js!==a.Collapsed)return(0,e.jsx)(x,{useIconOnly:!bs&&h,current:Rs,renderMode:js,minWidth:_s.width,item:_s.item},zs);break}default:return null}})}))]})})},"./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"(j,f,s){s.d(f,{c:()=>F});var e=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=s.n(i),a=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const l={Horizontal:"horizontal",Vertical:"vertical"},c={Light:"light",Regular:"regular"};var $=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=s.n($),J=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),N=s.n(J),ns=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),q=s.n(ns),os=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=s.n(os),W=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),U=s.n(W),w=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=s.n(w),X=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),K={};K.styleTagTransform=D(),K.setAttributes=R(),K.insert=q().bind(null,"head"),K.domAPI=N(),K.insertStyleElement=U();var Q=O()(X.A,K);const ts=X.A&&X.A.locals?X.A.locals:void 0;var y=function(g,S){var p={};for(var T in g)Object.prototype.hasOwnProperty.call(g,T)&&S.indexOf(T)<0&&(p[T]=g[T]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,T=Object.getOwnPropertySymbols(g);M<T.length;M++)S.indexOf(T[M])<0&&Object.prototype.propertyIsEnumerable.call(g,T[M])&&(p[T[M]]=g[T[M]]);return p};function F(g){var{className:S,orientation:p=l.Horizontal,weight:T=c.Regular}=g,M=y(g,["className","orientation","weight"]);const A=Object.assign(Object.assign({},(0,a.z7)(M)),{"data-weight":T});return p===l.Horizontal?(0,e.jsx)("hr",Object.assign({className:_()(ts.horizontal,S)},A)):(0,e.jsx)("div",Object.assign({className:_()(ts.vertical,S)},A))}},"./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"(j,f,s){s.d(f,{m:()=>ts});var e=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=s.n(i),a=s("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),l=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=s.n(l),$=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=s.n($),J=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),N=s.n(J),ns=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),q=s.n(ns),os=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=s.n(os),W=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),U=s.n(W),w=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"),D={};D.styleTagTransform=U(),D.setAttributes=q(),D.insert=N().bind(null,"head"),D.domAPI=O(),D.insertStyleElement=R();var X=c()(w.A,D);const K=w.A&&w.A.locals?w.A.locals:void 0;var Q=function(y,F){var g={};for(var S in y)Object.prototype.hasOwnProperty.call(y,S)&&F.indexOf(S)<0&&(g[S]=y[S]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,S=Object.getOwnPropertySymbols(y);p<S.length;p++)F.indexOf(S[p])<0&&Object.prototype.propertyIsEnumerable.call(y,S[p])&&(g[S[p]]=y[S[p]]);return g};function ts(y){var{content:F,trigger:g="click",placement:S="bottom-start",children:p,triggerRef:T,widthStrategy:M="gte",triggerClassName:A}=y,C=Q(y,["content","trigger","placement","children","triggerRef","widthStrategy","triggerClassName"]);return!p&&!T?null:(0,e.jsx)(a.Z,Object.assign({placement:S,popoverContent:(0,e.jsx)("div",{className:K.dropdownContainer,children:F}),trigger:g,triggerRef:T,hasArrow:!1,widthStrategy:M,triggerClassName:_()(K.defaultTriggerClassName,A)},C,{children:p}))}},"./node_modules/.pnpm/@snack-uikit+info-block@0.6.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/index.js"(j,f,s){s.d(f,{O:()=>us});var e=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),_=s.n(i),a=s("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js"),l=s("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/ButtonTonal.js");const c={S:"s",M:"m",L:"l"},$={Vertical:"vertical",Horizontal:"horizontal"},O={icon:"info-block__icon",title:"info-block__title",description:"info-block__description",footer:"info-block__footer",primaryButton:"info-block__primary-button",secondaryButton:"info-block__secondary-button"};var J=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const N=(0,J.createContext)({size:c.S});function ns(){return(0,J.useContext)(N)}var q=s("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function os({Button:u,tooltip:E}){return E?function(x){return(0,e.jsx)(q.m,Object.assign({},E,{children:(0,e.jsx)(u,Object.assign({},x))}))}:u}var R=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=s.n(R),U=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),w=s.n(U),D=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),X=s.n(D),K=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Q=s.n(K),ts=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=s.n(ts),F=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),g=s.n(F),S=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"),p={};p.styleTagTransform=g(),p.setAttributes=Q(),p.insert=X().bind(null,"head"),p.domAPI=w(),p.insertStyleElement=y();var T=W()(S.A,p);const M=S.A&&S.A.locals?S.A.locals:void 0;function A({primaryButton:u,secondaryButton:E,className:Y}){const x=os({Button:a.L,tooltip:u.tooltip}),G=os({Button:l.L,tooltip:E==null?void 0:E.tooltip}),{size:ss}=ns();return(0,e.jsxs)("div",{className:_()(M.infoBlockFooter,Y),children:[E&&(0,e.jsx)(G,Object.assign({},E,{size:ss,"data-test-id":E["data-test-id"]||O.secondaryButton})),(0,e.jsx)(x,Object.assign({},u,{size:ss,"data-test-id":u["data-test-id"]||O.primaryButton}))]})}var C=s("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.11_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),H=s("./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),L=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),B=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"),ls={};ls.styleTagTransform=g(),ls.setAttributes=Q(),ls.insert=X().bind(null,"head"),ls.domAPI=w(),ls.insertStyleElement=y();var ks=W()(B.A,ls);const as=B.A&&B.A.locals?B.A.locals:void 0;var Z=function(u,E){var Y={};for(var x in u)Object.prototype.hasOwnProperty.call(u,x)&&E.indexOf(x)<0&&(Y[x]=u[x]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var G=0,x=Object.getOwnPropertySymbols(u);G<x.length;G++)E.indexOf(x[G])<0&&Object.prototype.propertyIsEnumerable.call(u,x[G])&&(Y[x[G]]=u[x[G]]);return Y};function I(u){var E,Y,{title:x,description:G,icon:ss,size:ms=c.S,footer:Ss,align:es=$.Vertical,className:fs}=u,ys=Z(u,["title","description","icon","size","footer","align","className"]);return(0,e.jsx)(N.Provider,{value:{size:ms},children:(0,e.jsxs)("div",Object.assign({className:_()(as.infoBlock,fs),"data-size":ms,"data-align":es},(0,L.z7)(ys),{children:[ss&&(0,e.jsx)(C.I,{icon:ss.icon,appearance:(E=ss.appearance)!==null&&E!==void 0?E:"primary",decor:(Y=ss.decor)!==null&&Y!==void 0?Y:!0,size:ms,"data-test-id":O.icon}),(0,e.jsxs)("div",{className:as.contentLayout,children:[(0,e.jsxs)("div",{className:as.textWrap,children:[x&&(0,e.jsx)(H.o,{family:"sans",purpose:"title",size:ms,className:as.title,"data-test-id":O.title,children:x}),G&&(0,e.jsx)(H.o,{family:"sans",purpose:"body",size:ms,className:as.description,"data-test-id":O.description,children:G})]}),Ss&&(0,e.jsx)("div",{className:as.footer,"data-test-id":O.footer,children:Ss})]})]}))})}const us=I;us.Footer=A},"./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"(j,f,s){s.d(f,{O:()=>as});var e=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=s("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),_=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=s.n(_),l=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=s.n(l),$=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),O=s.n($),J=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=s.n(J),ns=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),q=s.n(ns),os=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=s.n(os),W=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"),U={};U.styleTagTransform=R(),U.setAttributes=N(),U.insert=O().bind(null,"head"),U.domAPI=c(),U.insertStyleElement=q();var w=a()(W.A,U);const D=W.A&&W.A.locals?W.A.locals:void 0;var X=s("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),K=s.n(X),Q=s("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/overlayscrollbars.mjs"),ts=s("./node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.11.1_react@18.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs"),y=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),F=s("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");const g={S:"s",M:"m"},S={Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"},p={None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"},T={Bottom:"bottom",Right:"right"},M=100,A=2;var C=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"),H={};H.styleTagTransform=R(),H.setAttributes=N(),H.insert=O().bind(null,"head"),H.domAPI=c(),H.insertStyleElement=q();var L=a()(C.A,H);const B=C.A&&C.A.locals?C.A.locals:void 0;var ls=function(Z,I){var us={};for(var u in Z)Object.prototype.hasOwnProperty.call(Z,u)&&I.indexOf(u)<0&&(us[u]=Z[u]);if(Z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,u=Object.getOwnPropertySymbols(Z);E<u.length;E++)I.indexOf(u[E])<0&&Object.prototype.propertyIsEnumerable.call(Z,u[E])&&(us[u[E]]=Z[u[E]]);return us};const ks=Q.ae.nonce,as=(0,y.forwardRef)(function(I,us){var{children:u,className:E,onScroll:Y,onInitialized:x,size:G=g.M,resize:ss=p.None,clickScrolling:ms=!0,barHideStrategy:Ss=S.Leave,autoscrollTo:es,paddingAbsolute:fs,untouchableScrollbars:ys=!1}=I,As=ls(I,["children","className","onScroll","onInitialized","size","resize","clickScrolling","barHideStrategy","autoscrollTo","paddingAbsolute","untouchableScrollbars"]);const vs=(0,y.useRef)(null),[gs,Es]=(0,y.useState)(!1),rs=(0,y.useCallback)((z=vs.current)=>z==null?void 0:z.osInstance(),[vs]);(0,y.useImperativeHandle)(us,()=>{var z,v,P;return(P=(v=(z=vs.current)===null||z===void 0?void 0:z.osInstance())===null||v===void 0?void 0:v.elements().viewport)!==null&&P!==void 0?P:null});const xs=(0,y.useRef)({scrolledToBottom:!1,scrolledToRight:!1}),ps=(0,y.useCallback)(z=>{const v=rs(z);if(v){const{viewport:P}=v.elements(),Ns=P.scrollHeight-(P.offsetHeight+P.scrollTop),Os=P.scrollWidth-(P.offsetWidth+P.scrollLeft),Cs=P.scrollHeight>P.offsetHeight,Ms=P.scrollWidth>P.offsetWidth;xs.current.scrolledToBottom=Ns<A||!Cs,xs.current.scrolledToRight=Os<A||!Ms}},[rs]);(0,F.N)(()=>{if(!es){x==null||x();return}const z=rs();if(z&&gs){ps();const{content:v}=z.elements();es===T.Bottom&&v.scroll(0,v.scrollHeight),es===T.Right&&v.scroll(v.scrollWidth,0)}x==null||x()},[rs,gs,ps]);const hs=(0,y.useCallback)(()=>{Es(!0)},[]),Ls=(0,y.useCallback)(z=>{Y==null||Y(z),es&&ps()},[Y,ps]),Ds=(0,y.useCallback)(()=>{var z;if(!es)return;const v=(z=rs())===null||z===void 0?void 0:z.elements();v!=null&&v.content&&(xs.current.scrolledToBottom&&es===T.Bottom&&(v==null||v.content.scroll(0,v==null?void 0:v.content.scrollHeight)),xs.current.scrolledToRight&&es===T.Right&&(v==null||v.content.scroll(v==null?void 0:v.content.scrollWidth,0)))},[rs,es]);return(0,e.jsx)(ts.r,Object.assign({},As,{ref:vs,"data-size":G,"data-untouchable-scrollbars":ys||void 0,className:K()(E,B.scroll,"osThemeSnack"),style:{resize:ss},options:{paddingAbsolute:fs,scrollbars:{autoHide:Ss,autoHideDelay:M,clickScroll:ms}},events:{initialized:hs,scroll:(z,v)=>{Ls(v)},updated:Ds},children:es?gs&&u:u}))})},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/Switch.js"(j,f,s){s.d(f,{d:()=>M});var e=s("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),_=s("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),a=s("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),l=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=s.n(l),$=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=s.n($),J=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),N=s.n(J),ns=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),q=s.n(ns),os=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),R=s.n(os),W=s("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),U=s.n(W),w=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"),D={};D.styleTagTransform=U(),D.setAttributes=q(),D.insert=N().bind(null,"head"),D.domAPI=O(),D.insertStyleElement=R();var X=c()(w.A,D);const K=w.A&&w.A.locals?w.A.locals:void 0;function Q(){return(0,e.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:K.spinner,children:(0,e.jsx)("path",{d:"M5 8C5 6.34315 6.34315 5 8 5",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round"})})}var ts=s("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),y=s("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"),F=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"),g={};g.styleTagTransform=U(),g.setAttributes=q(),g.insert=N().bind(null,"head"),g.domAPI=O(),g.insertStyleElement=R();var S=c()(F.A,g);const p=F.A&&F.A.locals?F.A.locals:void 0;var T=function(A,C){var H={};for(var L in A)Object.prototype.hasOwnProperty.call(A,L)&&C.indexOf(L)<0&&(H[L]=A[L]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var B=0,L=Object.getOwnPropertySymbols(A);B<L.length;B++)C.indexOf(L[B])<0&&Object.prototype.propertyIsEnumerable.call(A,L[B])&&(H[L[B]]=A[L[B]]);return H};function M(A){var{inputRef:C,"data-test-id":H,showIcon:L,loading:B,size:ls=a.SK.M}=A,ks=T(A,["inputRef","data-test-id","showIcon","loading","size"]);return(0,e.jsx)(y.Q,Object.assign({},ks,{size:ls,"data-test-id":H,ref:C,render:function(Z){const I=(0,ts.V)(Z);return(0,e.jsxs)("div",Object.assign({className:p.container},I,{children:[(0,e.jsx)("div",Object.assign({className:p.box},I)),(0,e.jsxs)("div",Object.assign({className:p.containerFlag},I,{children:[(0,e.jsx)("div",Object.assign({className:p.flag},I)),(L||B)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",Object.assign({className:p.flag_icon_off},I,{children:B?(0,e.jsx)(Q,{}):(0,e.jsx)(i.A,{size:16})})),(0,e.jsx)("div",Object.assign({className:p.flag_icon_on},I,{children:B?(0,e.jsx)(Q,{}):(0,e.jsx)(_.A,{size:16})}))]})]}))]}))}}))}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Collapse/styles.module.css"(j,f,s){s.d(f,{A:()=>c});var e=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(e),_=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=s.n(_),l=a()(i());l.push([j.id,`.collapse--uWQ1S{
  color:var(--sys-neutral-text-light, #8b8e9b);
  background:none;
  border:none;
}
.collapse--uWQ1S:focus-visible, .collapse--uWQ1S:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.collapse--uWQ1S:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}

.collapsedRow--rwIo3{
  display:flex;
}

.a--RmSLF{
  text-decoration:none;
}`,""]),l.locals={collapse:"collapse--uWQ1S",collapsedRow:"collapsedRow--rwIo3",a:"a--RmSLF"};const c=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Crumb/styles.module.css"(j,f,s){s.d(f,{A:()=>c});var e=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(e),_=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=s.n(_),l=a()(i());l.push([j.id,`.wrapper--Cwc2l{
  flex-shrink:0;
  list-style:none;
}
.wrapper--Cwc2l[data-render-mode=ellipsis]{
  flex-shrink:1;
}

.crumb--_SV0B, a.crumb--_SV0B{
  display:flex;
  align-items:center;
  width:100%;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  text-decoration:none;
  background:none;
  border:none;
}
.crumb--_SV0B[data-clickable], a.crumb--_SV0B[data-clickable]{
  cursor:pointer;
}
.crumb--_SV0B[data-clickable]:focus-visible, .crumb--_SV0B[data-clickable]:hover, a.crumb--_SV0B[data-clickable]:focus-visible, a.crumb--_SV0B[data-clickable]:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.crumb--_SV0B[data-current=true], a.crumb--_SV0B[data-current=true]{
  color:var(--sys-neutral-text-support, #6d707f);
}
.crumb--_SV0B:focus-visible, a.crumb--_SV0B:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.crumb--_SV0B[data-size=xs], a.crumb--_SV0B[data-size=xs]{
  height:var(--size-breadcrumbs-xs, 16px);
  gap:var(--space-breadcrumbs-crumb-xs-gap, 2px);
}
.crumb--_SV0B[data-size=s], a.crumb--_SV0B[data-size=s]{
  height:var(--size-breadcrumbs-s, 24px);
  gap:var(--space-breadcrumbs-crumb-s-gap, 2px);
}
.crumb--_SV0B .label--XekrZ, a.crumb--_SV0B .label--XekrZ{
  overflow:hidden;
  width:100%;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.crumb--_SV0B .icon--CeNen, a.crumb--_SV0B .icon--CeNen{
  display:flex;
  flex-shrink:0;
  align-items:center;
  width:-moz-fit-content;
  width:fit-content;
}`,""]),l.locals={wrapper:"wrapper--Cwc2l",crumb:"crumb--_SV0B",label:"label--XekrZ",icon:"icon--CeNen"};const c=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Separator/styles.module.css"(j,f,s){s.d(f,{A:()=>c});var e=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(e),_=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=s.n(_),l=a()(i());l.push([j.id,`.separator--c4RyB{
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.separator--c4RyB[data-size=xs]{
  height:var(--size-breadcrumbs-xs, 16px);
  padding-left:var(--space-breadcrumbs-separator-padding-xs, 4px);
  padding-right:var(--space-breadcrumbs-separator-padding-xs, 4px);
}
.separator--c4RyB[data-size=s]{
  height:var(--size-breadcrumbs-s, 24px);
  padding-left:var(--space-breadcrumbs-separator-padding-s, 8px);
  padding-right:var(--space-breadcrumbs-separator-padding-s, 8px);
}`,""]),l.locals={separator:"separator--c4RyB"};const c=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Wrapper/styles.module.css"(j,f,s){s.d(f,{A:()=>c});var e=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(e),_=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=s.n(_),l=a()(i());l.push([j.id,`.wrapper--A3KVm{
  padding:var(--space-breadcrumbs-container, 2px);
  overflow:hidden;
}
.wrapper--A3KVm[data-hidden=true]{
  position:absolute;
  width:1px;
  height:1px;
  opacity:0;
}

.row--f3NyG{
  display:flex;
  margin:0;
  padding:0;
}
.row--f3NyG[data-hidden=true]{
  display:inline-flex;
}`,""]),l.locals={wrapper:"wrapper--A3KVm",row:"row--f3NyG"};const c=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"(j,f,s){s.d(f,{A:()=>c});var e=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(e),_=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=s.n(_),l=a()(i());l.push([j.id,`.horizontal--wM2qX{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  width:100%;
}
.horizontal--wM2qX[data-weight=regular]{
  height:1px;
}
.horizontal--wM2qX[data-weight=light]{
  height:0.5px;
}

.vertical--PdYDD{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
  border:none;
  height:100%;
}
.vertical--PdYDD[data-weight=regular]{
  width:1px;
}
.vertical--PdYDD[data-weight=light]{
  width:0.5px;
}`,""]),l.locals={horizontal:"horizontal--wM2qX",vertical:"vertical--PdYDD"};const c=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"(j,f,s){s.d(f,{A:()=>c});var e=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(e),_=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=s.n(_),l=a()(i());l.push([j.id,`.dropdownContainer--thkj4{
  padding-top:var(--space-drop-list-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-container-vertical-padding, 4px);
  border-radius:var(--radius-drop-list-container, 4px);
  overflow:hidden;
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  box-shadow:var(--box-shadow-elevation-level3, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 8px 16px 0px rgba(0, 0, 0, 0.0784313725));
}

.defaultTriggerClassName--J_CUP{
  --offset:var(--space-drop-list-drop-offset, 4px);
}`,""]),l.locals={dropdownContainer:"dropdownContainer--thkj4",defaultTriggerClassName:"defaultTriggerClassName--J_CUP"};const c=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"(j,f,s){s.d(f,{A:()=>c});var e=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(e),_=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=s.n(_),l=a()(i());l.push([j.id,`.infoBlockFooter--RHOqV{
  gap:var(--space-info-block-footer-gap, 8px);
  display:flex;
  align-items:center;
}`,""]),l.locals={infoBlockFooter:"infoBlockFooter--RHOqV"};const c=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"(j,f,s){s.d(f,{A:()=>c});var e=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(e),_=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=s.n(_),l=a()(i());l.push([j.id,`.contentLayout--nVcE6{
  display:flex;
  flex-direction:column;
}

.textWrap--micPg{
  display:flex;
  flex-direction:column;
}

.footer--j6WT6{
  position:relative;
  box-sizing:border-box;
  width:100%;
}

.title--ukPp5{
  color:var(--sys-neutral-text-main, #41424e);
}

.description--juWzz{
  color:var(--sys-neutral-text-support, #6d707f);
}

.infoBlock--ZNhSS{
  display:flex;
  box-sizing:border-box;
}
.infoBlock--ZNhSS[data-align=vertical]{
  flex-direction:column;
  align-items:center;
}
.infoBlock--ZNhSS[data-align=vertical] .contentLayout--nVcE6{
  align-items:center;
}
.infoBlock--ZNhSS[data-align=vertical] .textWrap--micPg{
  align-items:center;
}
.infoBlock--ZNhSS[data-align=vertical] .footer--j6WT6{
  width:auto;
  text-align:center;
}
.infoBlock--ZNhSS[data-align=vertical] .description--juWzz,
.infoBlock--ZNhSS[data-align=vertical] .title--ukPp5{
  text-align:center;
}
.infoBlock--ZNhSS[data-align=horizontal]{
  flex-direction:row;
  align-items:flex-start;
}
.infoBlock--ZNhSS[data-size=s]{
  gap:var(--space-info-block-s-container-gap, 12px);
}
.infoBlock--ZNhSS[data-size=s] .contentLayout--nVcE6{
  gap:var(--space-info-block-s-container-content-layout-gap, 16px);
}
.infoBlock--ZNhSS[data-size=s] .textWrap--micPg{
  gap:var(--space-info-block-s-container-content-layout-text-wrap-gap, 4px);
}
.infoBlock--ZNhSS[data-size=m]{
  gap:var(--space-info-block-m-container-gap, 16px);
}
.infoBlock--ZNhSS[data-size=m] .contentLayout--nVcE6{
  gap:var(--space-info-block-m-container-content-layout-gap, 24px);
}
.infoBlock--ZNhSS[data-size=m] .textWrap--micPg{
  gap:var(--space-info-block-m-container-content-layout-text-wrap-gap, 8px);
}
.infoBlock--ZNhSS[data-size=l]{
  gap:var(--space-info-block-l-container-gap, 24px);
}
.infoBlock--ZNhSS[data-size=l] .contentLayout--nVcE6{
  gap:var(--space-info-block-l-container-content-layout-gap, 24px);
}
.infoBlock--ZNhSS[data-size=l] .textWrap--micPg{
  gap:var(--space-info-block-l-container-content-layout-text-wrap-gap, 8px);
}`,""]),l.locals={contentLayout:"contentLayout--nVcE6",textWrap:"textWrap--micPg",footer:"footer--j6WT6",title:"title--ukPp5",description:"description--juWzz",infoBlock:"infoBlock--ZNhSS"};const c=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"(j,f,s){s.d(f,{A:()=>N});var e=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(e),_=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=s.n(_),l=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/getUrl.js"),c=s.n(l),$=new URL(s("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),s.b),O=a()(i()),J=c()($);O.push([j.id,`@charset "UTF-8";
.osThemeSnack .os-scrollbar{
  padding:0;
}

.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical > .os-scrollbar-track{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  pointer-events:none;
}

.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal > .os-scrollbar-track{
  pointer-events:none;
}
.osThemeSnack[data-untouchable-scrollbars] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  pointer-events:none;
}

.osThemeSnack[data-size=s] > .os-scrollbar-vertical{
  width:var(--size-scroll-track-s, 8px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=s] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  width:var(--size-scroll-slider-s, 4px);
  border-radius:var(--radius-scroll-slider-s, 2px);
}

.osThemeSnack[data-size=s] > .os-scrollbar-horizontal{
  height:var(--size-scroll-track-s, 8px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=s] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  height:var(--size-scroll-slider-s, 4px);
  border-radius:var(--radius-scroll-slider-s, 2px);
}

.osThemeSnack[data-size=s].os-host-resize-disabled > .os-scrollbar-horizontal{
  right:var(--size-scroll-track-s, 8px);
}

.osThemeSnack[data-size=s].os-host-resize-disabled.os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-track-s, 8px);
}

.osThemeSnack[data-size=s].os-host-resize-disabled > .os-scrollbar-vertical{
  bottom:var(--size-scroll-track-s, 8px);
}

.osThemeSnack[data-size=s] > .os-scrollbar-horizontal{
  right:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=s].os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=s] > .os-scrollbar-vertical{
  bottom:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-vertical{
  width:var(--size-scroll-track-m, 16px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=m] > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  width:var(--size-scroll-slider-m, 6px);
  border-radius:var(--radius-scroll-slider-m, 4px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-horizontal{
  height:var(--size-scroll-track-m, 16px);
  pointer-events:none;
  overflow:hidden;
}

.osThemeSnack[data-size=m] > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  height:var(--size-scroll-slider-m, 6px);
  border-radius:var(--radius-scroll-slider-m, 4px);
}

.osThemeSnack[data-size=m].os-host-resize-disabled > .os-scrollbar-horizontal{
  right:var(--size-scroll-track-m, 16px);
}

.osThemeSnack[data-size=m].os-host-resize-disabled.os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-track-m, 16px);
}

.osThemeSnack[data-size=m].os-host-resize-disabled > .os-scrollbar-vertical{
  bottom:var(--size-scroll-track-m, 16px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-horizontal{
  right:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=m].os-host-rtl > .os-scrollbar-horizontal{
  right:0;
  left:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack[data-size=m] > .os-scrollbar-vertical{
  bottom:var(--size-scroll-button-resize, 16px);
}

.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  opacity:var(--opacity-a032, 0.32);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle.active, .osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle:hover{
  opacity:var(--opacity-a064, 0.64);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}

.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  opacity:var(--opacity-a032, 0.32);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle.active, .osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle:hover{
  opacity:var(--opacity-a064, 0.64);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}

.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle{
  left:50%;
  translate:-50%;
}
.osThemeSnack > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle::before{
  right:-12px;
  left:-12px;
}

.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle{
  top:50%;
  translate:0 -50%;
}
.osThemeSnack > .os-scrollbar-horizontal > .os-scrollbar-track > .os-scrollbar-handle::before{
  top:-12px;
  bottom:-12px;
}

.osThemeSnack > .os-scrollbar-corner{
  --bg-icon-mask:url(${J});
  width:var(--size-scroll-button-resize, 16px);
  height:var(--size-scroll-button-resize, 16px);
  z-index:0;
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
  background-image:unset;
  -webkit-mask-image:var(--bg-icon-mask);
  mask-image:var(--bg-icon-mask);
}
.osThemeSnack > .os-scrollbar-corner:hover{
  background-color:var(--sys-neutral-text-support, #6d707f);
}

.os-dragging .osThemeSnack > .os-scrollbar-corner:hover{
  background-color:var(--sys-primary-accent-default, #389f74);
}

.osThemeSnack.os-host-resize-disabled > .os-scrollbar-corner{
  display:none;
}`,""]);const N=O},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"(j,f,s){s.d(f,{A:()=>c});var e=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(e),_=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=s.n(_),l=a()(i());l.push([j.id,`.scroll--F6lqE{
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
}`,""]),l.locals={scroll:"scroll--F6lqE"};const c=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"(j,f,s){s.d(f,{A:()=>c});var e=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(e),_=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=s.n(_),l=a()(i());l.push([j.id,`.container--quzAo{
  display:flex;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
}
.container--quzAo[data-size=s]{
  width:var(--size-toggles-s-container-switch-width, 24px);
  height:var(--size-toggles-s-container, 16px);
  border-radius:var(--radius-toggles-s-box-switch, 16px);
}
.container--quzAo[data-size=m]{
  width:var(--size-toggles-m-container-switch-width, 36px);
  height:var(--size-toggles-m-container, 24px);
  border-radius:var(--radius-toggles-m-box-switch, 16px);
}
.container--quzAo[data-focusvisible=true]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
}
.container--quzAo[data-focusvisible=true][data-size=s]{
  outline-offset:var(--border-width-state-focus-s, 2px);
}
.container--quzAo{
  position:relative;
}

.box--z5Z9n{
  position:relative;
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.box--z5Z9n[data-size=s]{
  width:var(--size-toggles-s-box-switch-width, 24px);
  height:var(--size-toggles-s-box-switch-height, 16px);
  border-radius:var(--radius-toggles-s-box-switch, 16px);
}
.box--z5Z9n[data-size=m]{
  width:var(--size-toggles-m-box-switch-width, 32px);
  height:var(--size-toggles-m-box-switch-height, 20px);
  border-radius:var(--radius-toggles-m-box-switch, 16px);
}
.box--z5Z9n[data-hover=true]{
  background-color:var(--sys-neutral-accent-hovered, #6d707f);
}
.box--z5Z9n[data-disabled=true]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.box--z5Z9n[data-checked=true]{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.box--z5Z9n[data-checked=true][data-hover=true]{
  background-color:var(--sys-primary-accent-hovered, #37946e);
}
.box--z5Z9n[data-checked=true][data-disabled=true]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.containerFlag--JSDIA{
  position:absolute;
  left:0;
  display:flex;
  align-items:center;
  justify-content:center;
  transition-timing-function:linear;
  transition-duration:0.1s;
  transition-property:left;
}
.containerFlag--JSDIA[data-size=s]{
  width:var(--size-toggles-s-container, 16px);
  height:var(--size-toggles-s-container, 16px);
}
.containerFlag--JSDIA[data-size=s][data-checked=true]{
  left:calc(100% - var(--size-toggles-s-container, 16px));
}
.containerFlag--JSDIA[data-size=m]{
  width:var(--size-toggles-m-container, 24px);
  height:var(--size-toggles-m-container, 24px);
}
.containerFlag--JSDIA[data-size=m][data-checked=true]{
  left:calc(100% - var(--size-toggles-m-container, 24px));
}

.flag--zOypq{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}
.flag--zOypq[data-size=s]{
  border-radius:var(--radius-toggles-s-box-switch, 16px);
  width:var(--size-toggles-s-flag-switch, 12px);
  height:var(--size-toggles-s-flag-switch, 12px);
}
.flag--zOypq[data-size=m]{
  border-radius:var(--radius-toggles-m-box-switch, 16px);
  width:var(--size-toggles-m-flag-switch, 16px);
  height:var(--size-toggles-m-flag-switch, 16px);
}
.flag--zOypq[data-focusvisible=true], .flag--zOypq[data-hover=true]{
  background-color:var(--sys-neutral-on-accent, #ffffff);
}
.flag--zOypq[data-disabled=true]{
  background-color:var(--sys-neutral-background2-level, #ffffff);
}

.flag_icon_off--m140A{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  fill:transparent;
  transition:opacity 0.1s linear;
}
.flag_icon_off--m140A[data-hover=true]{
  color:var(--sys-neutral-accent-hovered, #6d707f);
}
.flag_icon_off--m140A[data-checked=true]{
  color:var(--sys-primary-accent-default, #389f74);
}
.flag_icon_off--m140A[data-checked=true][data-hover=true]{
  color:var(--sys-primary-accent-hovered, #37946e);
}
.flag_icon_off--m140A[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_off--m140A[data-disabled=true][data-hover=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_off--m140A{
  opacity:1;
}
.flag_icon_off--m140A[data-checked=true]{
  opacity:0;
}

.flag_icon_on--Imk53{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  display:flex;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  fill:transparent;
  transition:opacity 0.1s linear;
}
.flag_icon_on--Imk53[data-hover=true]{
  color:var(--sys-neutral-accent-hovered, #6d707f);
}
.flag_icon_on--Imk53[data-checked=true]{
  color:var(--sys-primary-accent-default, #389f74);
}
.flag_icon_on--Imk53[data-checked=true][data-hover=true]{
  color:var(--sys-primary-accent-hovered, #37946e);
}
.flag_icon_on--Imk53[data-disabled=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_on--Imk53[data-disabled=true][data-hover=true]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.flag_icon_on--Imk53{
  opacity:0;
}
.flag_icon_on--Imk53[data-checked=true]{
  opacity:1;
}`,""]),l.locals={container:"container--quzAo",box:"box--z5Z9n",containerFlag:"containerFlag--JSDIA",flag:"flag--zOypq",flag_icon_off:"flag_icon_off--m140A",flag_icon_on:"flag_icon_on--Imk53"};const c=l},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"(j,f,s){s.d(f,{A:()=>c});var e=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=s.n(e),_=s("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=s.n(_),l=a()(i());l.push([j.id,`.spinner--JetpG{
  pointer-events:none;
  width:var(--dimension-2m, 16px);
  height:var(--dimension-2m, 16px);
  animation:spin--LixZz 1s ease-in-out infinite;
}
.spinner--JetpG > path{
  stroke:currentColor;
}
@keyframes spin--LixZz{
  to{
    transform:rotate(360deg);
  }
}`,""]),l.locals={spinner:"spinner--JetpG",spin:"spin--LixZz"};const c=l}}]);})();
