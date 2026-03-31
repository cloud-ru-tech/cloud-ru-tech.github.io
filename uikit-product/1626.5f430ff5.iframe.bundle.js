(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[1626],{"./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_165ee40cfb85fd280f0aa356c6d7a9d7/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Breadcrumbs/Breadcrumbs.js":((I,C,e)=>{"use strict";e.d(C,{B:()=>O});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const R="\u203A",i={Full:"full",ShortLabel:"shortLabel",Ellipsis:"ellipsis",Collapsed:"collapsed"},d={Separator:"separator",Collapse:"collapse",Item:"item"},k={Xs:"xs",S:"s"};var de=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),z=e.n(de),ce=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const W=t=>{if(!t)return 0;if((0,ce.B)()){const a=document.createElement("div");a.style.width="10000px",t.append(a);const o=t.getBoundingClientRect().width;return t.removeChild(a),o}return 0},ue=(t,a)=>{if(!a.length)return;let[o]=a;for(const s of a)s.width<=t?(o.width>t||o.weight>s.weight)&&(o=s):s.width<o.width&&(o=s);if(o)return{chain:o.chain,containerWidth:t,chainWidth:o.width}};function pe(t){const[a,o]=(0,u.useState)([]),[s,n]=(0,u.useState)(0);(0,u.useEffect)(()=>{var _;const p=(_=t.current)===null||_===void 0?void 0:_.parentElement;if(!p)return;n(W(p));const m=z()(()=>{n(W(p))},100),S=new ResizeObserver(m);return S.observe(p),S.observe(document.body),()=>S.disconnect()},[t]);const c=(0,u.useMemo)(()=>ue(s,a),[s,a]);return{setConfigs:o,currentConfig:c}}var _e=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js");const K=(0,u.createContext)({hidden:!1,size:k.S,separator:R}),G=(t,a)=>a?`${t}-element-${a}`:"";var Y=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js");function q({size:t,children:a,className:o}){return(0,r.jsx)(Y.o,{className:o,size:t===k.S?"m":"s",tag:"div",family:"sans",purpose:"body",children:a})}var ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),U=e.n(ee),me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(me),l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),f=e.n(l),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),v=e.n(P),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),j=e.n(L),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),g=e.n(y),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_165ee40cfb85fd280f0aa356c6d7a9d7/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Collapse/styles.module.css"),E={};E.styleTagTransform=g(),E.setAttributes=v(),E.insert=f().bind(null,"head"),E.domAPI=A(),E.insertStyleElement=j();var D=U()(h.A,E);const w=h.A&&h.A.locals?h.A.locals:void 0;function $({currentConfig:t,className:a}){const o=(0,u.useContext)(K),{hidden:s,size:n,testId:c}=o,_=(0,u.useRef)(null),p=t.filter(m=>m.element===d.Item&&m.item.renderMode===i.Collapsed).map(m=>Object.assign({content:{option:m.item.label}},m.item.href?{itemWrapRender:S=>(0,r.jsx)("a",{href:m.item.href,onClick:m.item.onClick,className:w.a,children:S})}:{onClick:m.item.onClick}));return(0,r.jsx)("div",{className:a,"data-test-id":G("collapse",c),"data-element-type":d.Collapse,children:(0,r.jsx)(K.Provider,{value:Object.assign(Object.assign({},o),{testId:`${c}-collapsed`}),children:(0,r.jsx)(_e.i,{trigger:"hoverAndFocusVisible",size:"s",scroll:!0,triggerElemRef:_,items:p,children:(0,r.jsx)("button",{type:"button",ref:_,className:w.collapse,tabIndex:s?-1:0,children:(0,r.jsx)(q,{size:n,children:"..."})})})})})}var te=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),se=e.n(te),J=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),ae=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_165ee40cfb85fd280f0aa356c6d7a9d7/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Crumb/styles.module.css"),M={};M.styleTagTransform=g(),M.setAttributes=v(),M.insert=f().bind(null,"head"),M.domAPI=A(),M.insertStyleElement=j();var je=U()(ae.A,M);const Q=ae.A&&ae.A.locals?ae.A.locals:void 0;var Oe=function(t,a){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(o[s[n]]=t[s[n]]);return o};const be=8,x=(0,u.memo)(function(a){var{minWidth:o=0,current:s=!1,renderMode:n,className:c,item:{label:_,shortLabel:p,icon:m,id:S,onClick:F,href:V},useIconOnly:H}=a,ke=Oe(a,["minWidth","current","renderMode","className","item","useIconOnly"]);const{hidden:X,size:le,testId:Fe}=(0,u.useContext)(K),xe=X&&_.length>be&&n===i.Ellipsis?`${_.substring(0,4)}...`:_,Ae=!!(m&&H),Qe=o&&n===i.Ellipsis?o:"auto",ze={"data-render-mode":n,"data-current":s,"data-hidden":X,"data-size":le,"data-id":S},Ve=(0,r.jsxs)(r.Fragment,{children:[m&&(0,r.jsx)("div",{className:Q.icon,children:(0,r.jsx)(m,{size:16})}),!Ae&&(0,r.jsx)(q,{size:le,className:Q.label,children:n===i.ShortLabel?p:xe})]}),Xe=X?{tabIndex:-1}:{},$e=n===i.Ellipsis?xe:"";let we=null;return V?we=(0,r.jsx)("a",Object.assign({className:Q.crumb,onClick:F,href:V,"aria-label":Ae?xe:void 0,"data-clickable":!0},ze,Xe,{children:Ve})):F?we=(0,r.jsx)("button",Object.assign({type:"button",title:$e,onClick:F,className:Q.crumb,"aria-label":Ae?xe:void 0,"data-clickable":!0},ze,Xe,{children:Ve})):we=(0,r.jsx)("div",Object.assign({className:Q.crumb},ze,{children:Ve})),(0,r.jsx)("li",Object.assign({},(0,J.z7)(ke),ze,{"data-test-id":G("crumb",Fe),className:se()(Q.wrapper,c),"data-element-type":d.Item,style:{minWidth:Qe},title:$e,children:we}))}),T=()=>({[i.ShortLabel]:0,[i.Collapsed]:0,[i.Ellipsis]:0,[i.Full]:0}),N=t=>t.getBoundingClientRect().width;function Pe(t){if(!t)return;const a=t.children,[o,s,...n]=Array.from(a);return{separator:N(o),collapse:N(s),items:n.reduce((c,_)=>{const p=_.getAttribute("data-id"),m=_.getAttribute("data-render-mode");return c[p]=c[p]||T(),c[p][m]=N(_),c},{})}}const De={[i.Full]:0,[i.ShortLabel]:1,[i.Ellipsis]:100,[i.Collapsed]:1e4},Le=[i.Full,i.ShortLabel,i.Ellipsis],fe=t=>(a,o)=>[Object.assign(Object.assign({},a),{renderMode:t}),...o],Re=fe(i.Full),Se=fe(i.ShortLabel),Z=fe(i.Ellipsis),ne=fe(i.Collapsed);function oe([t,...a],{useCollapse:o=!0,useEllipse:s=!0}){const n=[];return t?a.length?(oe(a,{useCollapse:!1,useEllipse:!1}).forEach(c=>{n.push(Re(t,c)),t.shortLabel&&n.push(Se(t,c))}),s&&oe(a,{useCollapse:!1,useEllipse:!0}).forEach(c=>{n.push(Z(t,c))}),o&&oe(a,{useCollapse:!0,useEllipse:!1}).forEach(c=>{n.push(ne(t,c))}),n):(n.push(Re(t,[])),t.shortLabel&&n.push(Se(t,[])),n):n}const ve=(t,a)=>a.map((o,s,n)=>{const c=s===n.length-1;return Object.assign(Object.assign({},o),{renderMode:c?t:i.Collapsed})});function Je(t,a,o){if(!t.length)return[];const s=[],[n,...c]=t.map(_=>Object.assign(Object.assign({},_),{renderMode:i.Full}));return oe(c,{useCollapse:!0,useEllipse:!0}).forEach(_=>{s.push(Re(n,_)),n.shortLabel&&s.push(Se(n,_))}),s.push(Z(n,ve(i.Full,c))),s.push(Z(n,ve(i.Ellipsis,c))),s.push(ne(n,ve(i.Full,c))),s.push(ne(n,ve(i.Ellipsis,c))),s.map(_=>_.reduce((p,m,S,F)=>{const{renderMode:V}=m;S&&Le.includes(V)&&(p.width+=a.separator,p.chain.push({element:d.Separator,width:a.separator})),!p.hasCollapsed&&V===i.Collapsed&&(S&&(p.width+=a.separator,p.chain.push({element:d.Separator,width:a.separator})),p.hasCollapsed=!0,p.width+=a.collapse,p.chain.push({element:d.Collapse,width:a.collapse}));const H=a.items[m.id][V];return p.weight+=De[m.renderMode],p.width+=H,p.chain.push({element:d.Item,item:m,width:H}),S===F.length-1&&o&&(p.width+=a.separator,p.chain.push({element:d.Separator,width:a.separator})),p},{chain:[],weight:0,width:0,hasCollapsed:!1}))}var he=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_165ee40cfb85fd280f0aa356c6d7a9d7/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Separator/styles.module.css"),B={};B.styleTagTransform=g(),B.setAttributes=v(),B.insert=f().bind(null,"head"),B.domAPI=A(),B.insertStyleElement=j();var Ce=U()(he.A,B);const Me=he.A&&he.A.locals?he.A.locals:void 0;function Ee(){const{size:t,separator:a,testId:o}=(0,u.useContext)(K);return(0,r.jsx)("div",{"aria-hidden":!0,"data-size":t,className:Me.separator,"data-test-id":G("separator",o),"data-element-type":d.Separator,children:(0,r.jsx)(q,{size:t,children:a})})}var ye=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_165ee40cfb85fd280f0aa356c6d7a9d7/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Wrapper/styles.module.css"),re={};re.styleTagTransform=g(),re.setAttributes=v(),re.insert=f().bind(null,"head"),re.domAPI=A(),re.insertStyleElement=j();var Te=U()(ye.A,re);const ie=ye.A&&ye.A.locals?ye.A.locals:void 0;var Be=function(t,a){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(o[s[n]]=t[s[n]]);return o};const ge=(0,u.forwardRef)(function(a,o){var{children:s,className:n,size:c,hidden:_,separator:p,"data-test-id":m}=a,S=Be(a,["children","className","size","hidden","separator","data-test-id"]);return(0,r.jsx)("nav",Object.assign({},(0,J.z7)(S),{className:se()(ie.wrapper,n),"data-test-id":m,"data-hidden":_,"aria-hidden":_,children:(0,r.jsx)(K.Provider,{value:{hidden:_,size:c,separator:p,testId:m},children:(0,r.jsx)("ul",{className:ie.row,ref:o,"data-hidden":_,"data-size":c,children:s})})}))}),We=[[i.ShortLabel,"shortLabel"],[i.Ellipsis,"label"],[i.Full,"label"]],Ke=[[i.Full,"label"]],Ie=t=>(a,o)=>{const s=!o&&t;return(s?Ke:We).map(([c,_])=>!a[_]&&c!==i.Full?null:(0,r.jsx)(x,{useIconOnly:s,renderMode:c,item:a},a.id+c))},Ue=({firstItemIconOnly:t})=>(0,u.useMemo)(()=>Ie(t),[t]),Ne=(0,u.memo)(function({size:a,separator:o,items:s,onConfigsBuilt:n,firstItemIconOnly:c=!1,lastEmpty:_=!1}){const p=(0,u.useRef)(null),m=(0,u.useRef)(s);m.current=s,(0,u.useEffect)(()=>{const F=p.current;if(F){const V=new ResizeObserver(([{target:H}])=>{const ke=Pe(H);ke&&n(Je(m.current,ke,_))});return V.observe(F),()=>{V.disconnect()}}},[s,_,n]);const S=Ue({firstItemIconOnly:c});return(0,r.jsxs)(ge,{size:a,hidden:!0,ref:p,separator:o,"data-test-id":"hidden-wrapper",children:[(0,r.jsx)(Ee,{}),(0,r.jsx)($,{currentConfig:[]}),s.map(S)]})});var b=function(t,a){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(o[s[n]]=t[s[n]]);return o};const O=(0,u.memo)(function(a){var{items:o,size:s=k.S,separator:n=R,className:c,firstItemIconOnly:_=!1,inactiveLastItem:p=!1,lastEmpty:m=!1}=a,S=b(a,["items","size","separator","className","firstItemIconOnly","inactiveLastItem","lastEmpty"]);const F=(0,u.useRef)(null),{setConfigs:V,currentConfig:H}=pe(F),ke=(0,u.useMemo)(()=>p?o.map((X,le)=>le===o.length-1?Object.assign(Object.assign({},X),{onClick:void 0,href:void 0}):X):o,[p,o]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ne,{items:ke,size:s,separator:n,onConfigsBuilt:V,firstItemIconOnly:_,lastEmpty:m}),(0,r.jsx)(ge,Object.assign({},S,{ref:F,hidden:!1,size:s,separator:n,className:c,children:H==null?void 0:H.chain.map((X,le,Fe)=>{const He=le===Fe.length-1;switch(X.element){case d.Separator:return(0,r.jsx)(Ee,{},le);case d.Collapse:return(0,r.jsx)($,{currentConfig:H.chain},le);case d.Item:{const{renderMode:xe,id:Ae}=X.item;if(xe!==i.Collapsed)return(0,r.jsx)(x,{useIconOnly:!le&&_,current:He,renderMode:xe,minWidth:X.width,item:X.item},Ae);break}default:return null}})}))]})})}),"./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js":((I,C,e)=>{"use strict";e.d(C,{L:()=>L});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),R=e.n(u),i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),k=e("./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),de=e("./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js"),z=e("./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js"),ce=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),W=e.n(ce),ue=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),pe=e.n(ue),_e=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),K=e.n(_e),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Y=e.n(G),q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),ee=e.n(q),U=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),me=e.n(U),A=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/styles.module.css"),l={};l.styleTagTransform=me(),l.setAttributes=Y(),l.insert=K().bind(null,"head"),l.domAPI=pe(),l.insertStyleElement=ee();var f=W()(A.A,l);const P=A.A&&A.A.locals?A.A.locals:void 0;var v=function(j,y){var g={};for(var h in j)Object.prototype.hasOwnProperty.call(j,h)&&y.indexOf(h)<0&&(g[h]=j[h]);if(j!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,h=Object.getOwnPropertySymbols(j);E<h.length;E++)y.indexOf(h[E])<0&&Object.prototype.propertyIsEnumerable.call(j,h[E])&&(g[h[E]]=j[h[E]]);return g};const L=(0,i.forwardRef)((j,y)=>{var{className:g,size:h=k.SK.S,target:E=k.Qn.Blank,type:D=k.dk.Button,appearance:w=k.xz.Primary,tabIndex:$,fullWidth:te=!1}=j,se=v(j,["className","size","target","type","appearance","tabIndex","fullWidth"]);return(0,r.jsx)(de.A,Object.assign({},(0,d.z7)(se),(0,z.F)(se),{className:R()(P.button,g),iconClassName:P.icon,labelClassName:P.label,size:h,fullWidth:te,target:E,type:D,appearance:w,tabIndex:$,ref:y}))})}),"./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js":((I,C,e)=>{"use strict";e.d(C,{i:()=>A});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),R=e.n(u),i=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),de=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),z=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),ce=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),W=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),ue=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),pe=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),_e=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),K=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),G=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),Y=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),q=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),ee=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),U=function(l,f){var P={};for(var v in l)Object.prototype.hasOwnProperty.call(l,v)&&f.indexOf(v)<0&&(P[v]=l[v]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var L=0,v=Object.getOwnPropertySymbols(l);L<v.length;L++)f.indexOf(v[L])<0&&Object.prototype.propertyIsEnumerable.call(l,v[L])&&(P[v[L]]=l[v[L]]);return P};const me=["top","right","bottom","left"];function A(l){var{items:f,search:P,pinBottom:v=[],pinTop:L=[],footerActiveElementsRefs:j,children:y,trigger:g,placement:h,widthStrategy:E,triggerElemRef:D,open:w,onOpenChange:$,collapse:te={},triggerClassName:se,selection:J,contentRender:ae,size:M="s",marker:je=!0,closeDroplistOnItemClick:Q=!1,className:Oe,listRef:be,untouchableScrollbars:x=!1,virtualized:T=!1,closeOnPopstate:N}=l,Pe=U(l,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const De=(0,d.useMemo)(()=>!!P,[P]),[Le=[],fe]=(0,de.I)(te),Re=(0,d.useCallback)(b=>fe(O=>O!=null&&O.includes(b)?O.filter(t=>t!==b):(O!=null?O:[]).concat([b])),[fe]),[Se=!1,Z]=(0,de.I)({value:w,defaultValue:!1,onChange:$}),{searchItem:ne,footerItems:oe}=(0,ce.nG)({footerActiveElementsRefs:j}),ve=(0,d.useMemo)(()=>{const b=(0,W.lg)({items:L,prefix:z.$.pinTop,parentId:z.$.default}),O=(0,W.lg)({items:f,prefix:z.$.default,parentId:z.$.default}),t=(0,W.lg)({items:v,prefix:z.$.pinBottom,parentId:z.$.default}),a=Object.assign(Object.assign(Object.assign({},b.flattenItems),t.flattenItems),O.flattenItems),o=Object.assign(Object.assign(Object.assign({},b.focusFlattenItems),t.focusFlattenItems),O.focusFlattenItems);return[...oe,ne].forEach(s=>{a[s.id]=s,o[s.id]=Object.assign(Object.assign({},s),{originalId:s.id,items:[],key:s.id,allChildIds:[]})}),{items:O,pinTop:b,pinBottom:t,flattenItems:a,focusFlattenItems:o}},[f,L,v,ne,oe]),{flattenItems:Je,focusFlattenItems:he}=ve,B=U(ve,["flattenItems","focusFlattenItems"]),{ids:Ce,expandedIds:Me}=(0,d.useMemo)(()=>{const{pinTop:b,items:O,pinBottom:t}=B;let a=[],o=[];return De&&a.push(ne.id),[b,O,t].forEach(({focusFlattenItems:s,focusCloseChildIds:n})=>{const c=(0,W.e)({focusFlattenItems:s,focusCloseChildIds:n,openCollapseItems:Le,isSelectionMultiple:(J==null?void 0:J.mode)==="multiple"});a=a.concat(c.ids),o=o.concat(c.expandedIds)}),oe.forEach(s=>{a.push(s.id)}),{ids:a,expandedIds:o}},[oe,De,B,Le,ne.id,J==null?void 0:J.mode]),Ee=(0,d.useRef)(null),ye=(0,d.useRef)(null),re=Ce[0],{handleListKeyDownFactory:Te,resetActiveItemId:ie,activeItemId:Be,forceUpdateActiveItemId:ge}=(0,Y.d)({mainRef:D!=null?D:Ee,focusFlattenItems:he,hasListInFocusChain:!0,firstItemId:re}),We=(0,d.useCallback)(b=>Te(Ce,Me)(b),[Te,Ce,Me]),Ke=(0,d.useCallback)(b=>{ie(),Z(b)},[ie,Z]),Ie=(0,d.useCallback)((b,O)=>{b.key==="ArrowDown"&&(b.preventDefault(),Z(!0),setTimeout(()=>{var t;ie(),(t=ye.current)===null||t===void 0||t.focus()},0)),b.key==="ArrowUp"&&Z(!1),O==null||O(b)},[ie,Z]),Ue=(0,d.useMemo)(()=>(0,d.isValidElement)(y),[y]),Ne=(0,d.useMemo)(()=>{if((0,d.isValidElement)(y)){const b=typeof y.props=="object"?y.props:{};return(0,d.cloneElement)(y,Object.assign(Object.assign({},b),{onKeyDown:O=>{var t;Ie(O,(t=y.props)===null||t===void 0?void 0:t.onKeyDown)}}))}return typeof y=="function"?y({onKeyDown:Ie}):y},[Ie,y]);return(0,r.jsx)(ue.Tr,{flattenItems:Je,focusFlattenItems:he,contentRender:ae,size:M,marker:je,firstItemId:re,virtualized:T,children:(0,r.jsx)(pe.WM,Object.assign({},J,{children:(0,r.jsx)(_e.bN.Provider,{value:{openCollapseItems:Le,toggleOpenCollapseItem:Re},children:(0,r.jsx)(K.m.Provider,{value:{activeItemId:Be,handleListKeyDownFactory:Te,forceUpdateActiveItemId:ge},children:(0,r.jsx)(G.K.Provider,{value:{closeDroplistOnItemClick:Q,closeDroplist:()=>{var b;Z(!1),ie(),(b=(D!=null?D:Ee).current)===null||b===void 0||b.focus()}},children:(0,r.jsx)(k.m,{content:(0,r.jsx)("div",{className:R()(ee.A.wrapper,Oe),children:(0,r.jsx)(q.Q,Object.assign({},Pe,{items:B.items.focusCloseChildIds,pinTop:B.pinTop.focusCloseChildIds,pinBottom:B.pinBottom.focusCloseChildIds,virtualized:T,onKeyDown:We,searchItem:ne,tabIndex:0,ref:(0,i.A)(ye,be),search:P,onFocus:b=>{b.stopPropagation(),ge==null||ge(Ce[0])},limitedScrollHeight:!0,untouchableScrollbars:x}))}),outsideClick:!0,triggerClassName:se,fallbackPlacements:me,trigger:g,placement:h,widthStrategy:E,triggerRef:D?Ue&&D||void 0:Ee,open:Se,onOpenChange:Ke,closeOnPopstate:N,children:Ne})})})})}))})}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_165ee40cfb85fd280f0aa356c6d7a9d7/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Collapse/styles.module.css":((I,C,e)=>{"use strict";e.d(C,{A:()=>k});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(R),d=i()(u());d.push([I.id,`.collapse--dW9Z2{
  color:var(--sys-neutral-text-light, #8b8e9b);
  background:none;
  border:none;
}
.collapse--dW9Z2:focus-visible, .collapse--dW9Z2:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.collapse--dW9Z2:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}

.collapsedRow--KQHiJ{
  display:flex;
}

.a--vwH5D{
  text-decoration:none;
}`,""]),d.locals={collapse:"collapse--dW9Z2",collapsedRow:"collapsedRow--KQHiJ",a:"a--vwH5D"};const k=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_165ee40cfb85fd280f0aa356c6d7a9d7/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Crumb/styles.module.css":((I,C,e)=>{"use strict";e.d(C,{A:()=>k});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(R),d=i()(u());d.push([I.id,`.wrapper--AO1Hh{
  flex-shrink:0;
  list-style:none;
}
.wrapper--AO1Hh[data-render-mode=ellipsis]{
  flex-shrink:1;
}

.crumb--vry88, a.crumb--vry88{
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
.crumb--vry88[data-clickable], a.crumb--vry88[data-clickable]{
  cursor:pointer;
}
.crumb--vry88[data-clickable]:focus-visible, .crumb--vry88[data-clickable]:hover, a.crumb--vry88[data-clickable]:focus-visible, a.crumb--vry88[data-clickable]:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.crumb--vry88[data-current=true], a.crumb--vry88[data-current=true]{
  color:var(--sys-neutral-text-support, #6d707f);
}
.crumb--vry88:focus-visible, a.crumb--vry88:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.crumb--vry88[data-size=xs], a.crumb--vry88[data-size=xs]{
  height:var(--size-breadcrumbs-xs, 16px);
  gap:var(--space-breadcrumbs-crumb-xs-gap, 2px);
}
.crumb--vry88[data-size=s], a.crumb--vry88[data-size=s]{
  height:var(--size-breadcrumbs-s, 24px);
  gap:var(--space-breadcrumbs-crumb-s-gap, 2px);
}
.crumb--vry88 .label--SQsJl, a.crumb--vry88 .label--SQsJl{
  overflow:hidden;
  width:100%;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.crumb--vry88 .icon--nhenp, a.crumb--vry88 .icon--nhenp{
  display:flex;
  flex-shrink:0;
  align-items:center;
  width:-moz-fit-content;
  width:fit-content;
}`,""]),d.locals={wrapper:"wrapper--AO1Hh",crumb:"crumb--vry88",label:"label--SQsJl",icon:"icon--nhenp"};const k=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_165ee40cfb85fd280f0aa356c6d7a9d7/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Separator/styles.module.css":((I,C,e)=>{"use strict";e.d(C,{A:()=>k});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(R),d=i()(u());d.push([I.id,`.separator--gsmQZ{
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.separator--gsmQZ[data-size=xs]{
  height:var(--size-breadcrumbs-xs, 16px);
  padding-left:var(--space-breadcrumbs-separator-padding-xs, 4px);
  padding-right:var(--space-breadcrumbs-separator-padding-xs, 4px);
}
.separator--gsmQZ[data-size=s]{
  height:var(--size-breadcrumbs-s, 24px);
  padding-left:var(--space-breadcrumbs-separator-padding-s, 8px);
  padding-right:var(--space-breadcrumbs-separator-padding-s, 8px);
}`,""]),d.locals={separator:"separator--gsmQZ"};const k=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_165ee40cfb85fd280f0aa356c6d7a9d7/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Wrapper/styles.module.css":((I,C,e)=>{"use strict";e.d(C,{A:()=>k});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(R),d=i()(u());d.push([I.id,`.wrapper--EfyIL{
  padding:var(--space-breadcrumbs-container, 2px);
  overflow:hidden;
}
.wrapper--EfyIL[data-hidden=true]{
  position:absolute;
  width:1px;
  height:1px;
  opacity:0;
}

.row--VEhXV{
  display:flex;
  margin:0;
  padding:0;
}
.row--VEhXV[data-hidden=true]{
  display:inline-flex;
}`,""]),d.locals={wrapper:"wrapper--EfyIL",row:"row--VEhXV"};const k=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/styles.module.css":((I,C,e)=>{"use strict";e.d(C,{A:()=>k});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(R),d=i()(u());d.push([I.id,`.button--RJPL_[data-size=xs] .label--CtV07{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.button--RJPL_[data-size=xs] .icon--DASq3{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--RJPL_[data-size=xs] .icon--DASq3 svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--RJPL_[data-size=xs][data-variant=label-only]{
  border-radius:var(--radius-button-xs, 8px);
  height:var(--size-button-xs, 24px);
  padding-right:var(--space-button-xs-from-label, 8px);
  padding-left:var(--space-button-xs-from-label, 8px);
  min-width:var(--size-button-mininal-width-xs, 72px);
}
.button--RJPL_[data-size=xs][data-variant=icon-only]{
  border-radius:var(--radius-button-xs, 8px);
  height:var(--size-button-xs, 24px);
  width:var(--size-button-xs, 24px);
}
.button--RJPL_[data-size=xs][data-variant=icon-after]{
  border-radius:var(--radius-button-xs, 8px);
  height:var(--size-button-xs, 24px);
  gap:var(--space-button-xs-gap, 2px);
  padding-right:var(--space-button-xs-from-icon, 4px);
  padding-left:var(--space-button-xs-from-label, 8px);
  min-width:var(--size-button-mininal-width-xs, 72px);
}
.button--RJPL_[data-size=s] .label--CtV07{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.button--RJPL_[data-size=s] .icon--DASq3{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--RJPL_[data-size=s] .icon--DASq3 svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--RJPL_[data-size=s][data-variant=label-only]{
  border-radius:var(--radius-button-s, 12px);
  height:var(--size-button-s, 32px);
  padding-right:var(--space-button-s-from-label, 16px);
  padding-left:var(--space-button-s-from-label, 16px);
  min-width:var(--size-button-mininal-width-s, 96px);
}
.button--RJPL_[data-size=s][data-variant=icon-only]{
  border-radius:var(--radius-button-s, 12px);
  height:var(--size-button-s, 32px);
  width:var(--size-button-s, 32px);
}
.button--RJPL_[data-size=s][data-variant=icon-after]{
  border-radius:var(--radius-button-s, 12px);
  height:var(--size-button-s, 32px);
  gap:var(--space-button-s-gap, 4px);
  padding-right:var(--space-button-s-from-icon, 8px);
  padding-left:var(--space-button-s-from-label, 16px);
  min-width:var(--size-button-mininal-width-s, 96px);
}
.button--RJPL_[data-size=m] .label--CtV07{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.button--RJPL_[data-size=m] .icon--DASq3{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--RJPL_[data-size=m] .icon--DASq3 svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--RJPL_[data-size=m][data-variant=label-only]{
  border-radius:var(--radius-button-m, 14px);
  height:var(--size-button-m, 40px);
  padding-right:var(--space-button-m-from-label, 24px);
  padding-left:var(--space-button-m-from-label, 24px);
  min-width:var(--size-button-mininal-width-m, 120px);
}
.button--RJPL_[data-size=m][data-variant=icon-only]{
  border-radius:var(--radius-button-m, 14px);
  height:var(--size-button-m, 40px);
  width:var(--size-button-m, 40px);
}
.button--RJPL_[data-size=m][data-variant=icon-after]{
  border-radius:var(--radius-button-m, 14px);
  height:var(--size-button-m, 40px);
  gap:var(--space-button-m-gap, 4px);
  padding-right:var(--space-button-m-from-icon, 16px);
  padding-left:var(--space-button-m-from-label, 24px);
  min-width:var(--size-button-mininal-width-m, 120px);
}
.button--RJPL_[data-size=l] .label--CtV07{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.button--RJPL_[data-size=l] .icon--DASq3{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
}
.button--RJPL_[data-size=l] .icon--DASq3 svg{
  max-width:var(--size-icon-container-s, 24px);
  max-height:var(--size-icon-container-s, 24px);
}
.button--RJPL_[data-size=l][data-variant=label-only]{
  border-radius:var(--radius-button-l, 16px);
  height:var(--size-button-l, 48px);
  padding-right:var(--space-button-l-from-label, 32px);
  padding-left:var(--space-button-l-from-label, 32px);
  min-width:var(--size-button-mininal-width-l, 144px);
}
.button--RJPL_[data-size=l][data-variant=icon-only]{
  border-radius:var(--radius-button-l, 16px);
  height:var(--size-button-l, 48px);
  width:var(--size-button-l, 48px);
}
.button--RJPL_[data-size=l][data-variant=icon-after]{
  border-radius:var(--radius-button-l, 16px);
  height:var(--size-button-l, 48px);
  gap:var(--space-button-l-gap, 4px);
  padding-right:var(--space-button-l-from-icon, 24px);
  padding-left:var(--space-button-l-from-label, 32px);
  min-width:var(--size-button-mininal-width-l, 144px);
}
.button--RJPL_[data-loading][data-variant=label-only] .icon--DASq3{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
.button--RJPL_[data-loading][data-variant=label-only] .label--CtV07{
  opacity:var(--opacity-a0, 0);
}
.button--RJPL_[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.button--RJPL_[data-appearance=primary] .label--CtV07{
  color:var(--sys-primary-on-accent, #fdfbff);
}
.button--RJPL_[data-appearance=primary] .icon--DASq3{
  color:var(--sys-primary-on-accent, #fdfbff);
}
@media (hover: hover){
  .button--RJPL_[data-appearance=primary]:hover{
    background-color:var(--sys-primary-accent-hovered, #6851a6);
  }
  .button--RJPL_[data-appearance=primary]:hover .label--CtV07{
    color:var(--sys-primary-on-accent, #fdfbff);
  }
  .button--RJPL_[data-appearance=primary]:hover .icon--DASq3{
    color:var(--sys-primary-on-accent, #fdfbff);
  }
}
@media (hover: none) or (hover: hover){
  .button--RJPL_[data-appearance=primary]:focus-visible{
    background-color:var(--sys-primary-accent-hovered, #6851a6);
  }
  .button--RJPL_[data-appearance=primary]:focus-visible .label--CtV07{
    color:var(--sys-primary-on-accent, #fdfbff);
  }
  .button--RJPL_[data-appearance=primary]:focus-visible .icon--DASq3{
    color:var(--sys-primary-on-accent, #fdfbff);
  }
  .button--RJPL_[data-appearance=primary]:active{
    background-color:var(--sys-primary-accent-pressed, #5b4796);
  }
  .button--RJPL_[data-appearance=primary]:active .label--CtV07{
    color:var(--sys-primary-on-accent, #fdfbff);
  }
  .button--RJPL_[data-appearance=primary]:active .icon--DASq3{
    color:var(--sys-primary-on-accent, #fdfbff);
  }
  .button--RJPL_[data-appearance=primary][data-loading]{
    background-color:var(--sys-primary-accent-pressed, #5b4796);
  }
  .button--RJPL_[data-appearance=primary][data-loading] .label--CtV07{
    color:var(--sys-primary-on-accent, #fdfbff);
  }
  .button--RJPL_[data-appearance=primary][data-loading] .icon--DASq3{
    color:var(--sys-primary-on-accent, #fdfbff);
  }
  .button--RJPL_[data-appearance=primary]:disabled, .button--RJPL_[data-appearance=primary][data-disabled]{
    background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  }
  .button--RJPL_[data-appearance=primary]:disabled .label--CtV07, .button--RJPL_[data-appearance=primary][data-disabled] .label--CtV07{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--RJPL_[data-appearance=primary]:disabled .icon--DASq3, .button--RJPL_[data-appearance=primary][data-disabled] .icon--DASq3{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
}
.button--RJPL_[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.button--RJPL_[data-appearance=neutral] .label--CtV07{
  color:var(--sys-neutral-on-accent, #ffffff);
}
.button--RJPL_[data-appearance=neutral] .icon--DASq3{
  color:var(--sys-neutral-on-accent, #ffffff);
}
@media (hover: hover){
  .button--RJPL_[data-appearance=neutral]:hover{
    background-color:var(--sys-neutral-accent-hovered, #6d707f);
  }
  .button--RJPL_[data-appearance=neutral]:hover .label--CtV07{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--RJPL_[data-appearance=neutral]:hover .icon--DASq3{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
}
@media (hover: none) or (hover: hover){
  .button--RJPL_[data-appearance=neutral]:focus-visible{
    background-color:var(--sys-neutral-accent-hovered, #6d707f);
  }
  .button--RJPL_[data-appearance=neutral]:focus-visible .label--CtV07{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--RJPL_[data-appearance=neutral]:focus-visible .icon--DASq3{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--RJPL_[data-appearance=neutral]:active{
    background-color:var(--sys-neutral-accent-pressed, #656774);
  }
  .button--RJPL_[data-appearance=neutral]:active .label--CtV07{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--RJPL_[data-appearance=neutral]:active .icon--DASq3{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--RJPL_[data-appearance=neutral][data-loading]{
    background-color:var(--sys-neutral-accent-pressed, #656774);
  }
  .button--RJPL_[data-appearance=neutral][data-loading] .label--CtV07{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--RJPL_[data-appearance=neutral][data-loading] .icon--DASq3{
    color:var(--sys-neutral-on-accent, #ffffff);
  }
  .button--RJPL_[data-appearance=neutral]:disabled, .button--RJPL_[data-appearance=neutral][data-disabled]{
    background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  }
  .button--RJPL_[data-appearance=neutral]:disabled .label--CtV07, .button--RJPL_[data-appearance=neutral][data-disabled] .label--CtV07{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--RJPL_[data-appearance=neutral]:disabled .icon--DASq3, .button--RJPL_[data-appearance=neutral][data-disabled] .icon--DASq3{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
}
.button--RJPL_[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.button--RJPL_[data-appearance=red] .label--CtV07{
  color:var(--sys-red-on-accent, #fffbf9);
}
.button--RJPL_[data-appearance=red] .icon--DASq3{
  color:var(--sys-red-on-accent, #fffbf9);
}
@media (hover: hover){
  .button--RJPL_[data-appearance=red]:hover{
    background-color:var(--sys-red-accent-hovered, #bd4844);
  }
  .button--RJPL_[data-appearance=red]:hover .label--CtV07{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--RJPL_[data-appearance=red]:hover .icon--DASq3{
    color:var(--sys-red-on-accent, #fffbf9);
  }
}
@media (hover: none) or (hover: hover){
  .button--RJPL_[data-appearance=red]:focus-visible{
    background-color:var(--sys-red-accent-hovered, #bd4844);
  }
  .button--RJPL_[data-appearance=red]:focus-visible .label--CtV07{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--RJPL_[data-appearance=red]:focus-visible .icon--DASq3{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--RJPL_[data-appearance=red]:active{
    background-color:var(--sys-red-accent-pressed, #ae514c);
  }
  .button--RJPL_[data-appearance=red]:active .label--CtV07{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--RJPL_[data-appearance=red]:active .icon--DASq3{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--RJPL_[data-appearance=red][data-loading]{
    background-color:var(--sys-red-accent-pressed, #ae514c);
  }
  .button--RJPL_[data-appearance=red][data-loading] .label--CtV07{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--RJPL_[data-appearance=red][data-loading] .icon--DASq3{
    color:var(--sys-red-on-accent, #fffbf9);
  }
  .button--RJPL_[data-appearance=red]:disabled, .button--RJPL_[data-appearance=red][data-disabled]{
    background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  }
  .button--RJPL_[data-appearance=red]:disabled .label--CtV07, .button--RJPL_[data-appearance=red][data-disabled] .label--CtV07{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
  .button--RJPL_[data-appearance=red]:disabled .icon--DASq3, .button--RJPL_[data-appearance=red][data-disabled] .icon--DASq3{
    color:var(--sys-neutral-text-light, #8b8e9b);
  }
}
.button--RJPL_[data-appearance=primary]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--RJPL_[data-appearance=neutral]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--RJPL_[data-appearance=red]:focus-visible{
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--RJPL_:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:var(--spacing-state-focus-offset, 2px);
}`,""]),d.locals={button:"button--RJPL_",label:"label--CtV07",icon:"icon--DASq3"};const k=d}),"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js":((I,C,e)=>{var r="Expected a function",u=NaN,R="[object Symbol]",i=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,de=/^0o[0-7]+$/i,z=parseInt,ce=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,W=typeof self=="object"&&self&&self.Object===Object&&self,ue=ce||W||Function("return this")(),pe=Object.prototype,_e=pe.toString,K=Math.max,G=Math.min,Y=function(){return ue.Date.now()};function q(l,f,P){var v,L,j,y,g,h,E=0,D=!1,w=!1,$=!0;if(typeof l!="function")throw new TypeError(r);f=A(f)||0,ee(P)&&(D=!!P.leading,w="maxWait"in P,j=w?K(A(P.maxWait)||0,f):j,$="trailing"in P?!!P.trailing:$);function te(x){var T=v,N=L;return v=L=void 0,E=x,y=l.apply(N,T),y}function se(x){return E=x,g=setTimeout(M,f),D?te(x):y}function J(x){var T=x-h,N=x-E,Pe=f-T;return w?G(Pe,j-N):Pe}function ae(x){var T=x-h,N=x-E;return h===void 0||T>=f||T<0||w&&N>=j}function M(){var x=Y();if(ae(x))return je(x);g=setTimeout(M,J(x))}function je(x){return g=void 0,$&&v?te(x):(v=L=void 0,y)}function Q(){g!==void 0&&clearTimeout(g),E=0,v=h=L=g=void 0}function Oe(){return g===void 0?y:je(Y())}function be(){var x=Y(),T=ae(x);if(v=arguments,L=this,h=x,T){if(g===void 0)return se(h);if(w)return g=setTimeout(M,f),te(h)}return g===void 0&&(g=setTimeout(M,f)),y}return be.cancel=Q,be.flush=Oe,be}function ee(l){var f=typeof l;return!!l&&(f=="object"||f=="function")}function U(l){return!!l&&typeof l=="object"}function me(l){return typeof l=="symbol"||U(l)&&_e.call(l)==R}function A(l){if(typeof l=="number")return l;if(me(l))return u;if(ee(l)){var f=typeof l.valueOf=="function"?l.valueOf():l;l=ee(f)?f+"":f}if(typeof l!="string")return l===0?l:+l;l=l.replace(i,"");var P=k.test(l);return P||de.test(l)?z(l.slice(2),P?2:8):d.test(l)?u:+l}I.exports=q})}]);})();
