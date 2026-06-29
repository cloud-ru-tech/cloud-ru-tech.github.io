(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[6273],{"./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Breadcrumbs/Breadcrumbs.js"(E,y,e){"use strict";e.d(y,{B:()=>Xe});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const f="\u203A",a={Full:"full",ShortLabel:"shortLabel",Ellipsis:"ellipsis",Collapsed:"collapsed"},t={Separator:"separator",Collapse:"collapse",Item:"item"},p={Xs:"xs",S:"s"};var ee=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),C=e.n(ee),$=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const U=o=>{if(!o)return 0;if((0,$.B)()){const l=document.createElement("div");l.style.width="10000px",o.append(l);const i=o.getBoundingClientRect().width;return o.removeChild(l),i}return 0},ae=(o,l)=>{if(!l.length)return;let[i]=l;for(const n of l)n.width<=o?(i.width>o||i.weight>n.weight)&&(i=n):n.width<i.width&&(i=n);if(i)return{chain:i.chain,containerWidth:o,chainWidth:i.width}};function se(o){const[l,i]=(0,d.useState)([]),[n,r]=(0,d.useState)(0);(0,d.useEffect)(()=>{var A;const k=(A=o.current)===null||A===void 0?void 0:A.parentElement;if(!k)return;r(U(k));const M=C()(()=>{r(U(k))},100),te=new ResizeObserver(M);return te.observe(k),te.observe(document.body),()=>te.disconnect()},[o]);const j=(0,d.useMemo)(()=>ae(n,l),[n,l]);return{setConfigs:i,currentConfig:j}}var oe=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js");const K=(0,d.createContext)({hidden:!1,size:p.S,separator:f}),V=(o,l)=>l?`${o}-element-${l}`:"";var B=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js");function N({size:o,children:l,className:i}){return(0,s.jsx)(B.o,{className:i,size:o===p.S?"m":"s",tag:"div",family:"sans",purpose:"body",children:l})}var I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),H=e.n(I),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=e.n(F),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),u=e.n(c),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),v=e.n(T),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),_=e.n(S),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),g=e.n(x),b=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Collapse/styles.module.css"),z={};z.styleTagTransform=g(),z.setAttributes=v(),z.insert=u().bind(null,"head"),z.domAPI=W(),z.insertStyleElement=_();var Z=H()(b.A,z);const L=b.A&&b.A.locals?b.A.locals:void 0;function D({currentConfig:o,className:l}){const i=(0,d.useContext)(K),{hidden:n,size:r,testId:j}=i,A=(0,d.useRef)(null),k=o.filter(M=>M.element===t.Item&&M.item.renderMode===a.Collapsed).map(M=>Object.assign({content:{option:M.item.label}},M.item.href?{itemWrapRender:te=>(0,s.jsx)("a",{href:M.item.href,onClick:M.item.onClick,className:L.a,children:te})}:{onClick:M.item.onClick}));return(0,s.jsx)("div",{className:l,"data-test-id":V("collapse",j),"data-element-type":t.Collapse,children:(0,s.jsx)(K.Provider,{value:Object.assign(Object.assign({},i),{testId:`${j}-collapsed`}),children:(0,s.jsx)(oe.i,{trigger:"hoverAndFocusVisible",size:"s",scroll:!0,triggerElemRef:A,items:k,children:(0,s.jsx)("button",{type:"button",ref:A,className:L.collapse,tabIndex:n?-1:0,children:(0,s.jsx)(N,{size:r,children:"..."})})})})})}var q=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),ie=e.n(q),ne=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),Q=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Crumb/styles.module.css"),R={};R.styleTagTransform=g(),R.setAttributes=v(),R.insert=u().bind(null,"head"),R.domAPI=W(),R.insertStyleElement=_();var re=H()(Q.A,R);const h=Q.A&&Q.A.locals?Q.A.locals:void 0;var O=function(o,l){var i={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&l.indexOf(n)<0&&(i[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(o);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(o,n[r])&&(i[n[r]]=o[n[r]]);return i};const Y=8,m=(0,d.memo)(function(l){var{minWidth:i=0,current:n=!1,renderMode:r,className:j,item:{label:A,shortLabel:k,icon:M,id:te,onClick:_e,href:ue},useIconOnly:pe}=l,Ee=O(l,["minWidth","current","renderMode","className","item","useIconOnly"]);const{hidden:me,size:fe,testId:Re}=(0,d.useContext)(K),je=me&&A.length>Y&&r===a.Ellipsis?`${A.substring(0,4)}...`:A,Ae=!!(M&&pe),He=i&&r===a.Ellipsis?i:"auto",Me={"data-render-mode":r,"data-current":n,"data-hidden":me,"data-size":fe,"data-id":te},Ce=(0,s.jsxs)(s.Fragment,{children:[M&&(0,s.jsx)("div",{className:h.icon,children:(0,s.jsx)(M,{size:16})}),!Ae&&(0,s.jsx)(N,{size:fe,className:h.label,children:r===a.ShortLabel?k:je})]}),We=me?{tabIndex:-1}:{},Je=r===a.Ellipsis?je:"";let Ie=null;return ue?Ie=(0,s.jsx)("a",Object.assign({className:h.crumb,onClick:_e,href:ue,"aria-label":Ae?je:void 0,"data-clickable":!0},Me,We,{children:Ce})):_e?Ie=(0,s.jsx)("button",Object.assign({type:"button",title:Je,onClick:_e,className:h.crumb,"aria-label":Ae?je:void 0,"data-clickable":!0},Me,We,{children:Ce})):Ie=(0,s.jsx)("div",Object.assign({className:h.crumb},Me,{children:Ce})),(0,s.jsx)("li",Object.assign({},(0,ne.z7)(Ee),Me,{"data-test-id":V("crumb",Re),className:ie()(h.wrapper,j),"data-element-type":t.Item,style:{minWidth:He},title:Je,children:Ie}))}),w=()=>({[a.ShortLabel]:0,[a.Collapsed]:0,[a.Ellipsis]:0,[a.Full]:0}),G=o=>o.getBoundingClientRect().width;function de(o){if(!o)return;const l=o.children,[i,n,...r]=Array.from(l);return{separator:G(i),collapse:G(n),items:r.reduce((j,A)=>{const k=A.getAttribute("data-id"),M=A.getAttribute("data-render-mode");return j[k]=j[k]||w(),j[k][M]=G(A),j},{})}}const Se={[a.Full]:0,[a.ShortLabel]:1,[a.Ellipsis]:100,[a.Collapsed]:1e4},le=[a.Full,a.ShortLabel,a.Ellipsis],ve=o=>(l,i)=>[Object.assign(Object.assign({},l),{renderMode:o}),...i],ge=ve(a.Full),Pe=ve(a.ShortLabel),ye=ve(a.Ellipsis),xe=ve(a.Collapsed);function ke([o,...l],{useCollapse:i=!0,useEllipse:n=!0}){const r=[];return o?l.length?(ke(l,{useCollapse:!1,useEllipse:!1}).forEach(j=>{r.push(ge(o,j)),o.shortLabel&&r.push(Pe(o,j))}),n&&ke(l,{useCollapse:!1,useEllipse:!0}).forEach(j=>{r.push(ye(o,j))}),i&&ke(l,{useCollapse:!0,useEllipse:!1}).forEach(j=>{r.push(xe(o,j))}),r):(r.push(ge(o,[])),o.shortLabel&&r.push(Pe(o,[])),r):r}const ce=(o,l)=>l.map((i,n,r)=>{const j=n===r.length-1;return Object.assign(Object.assign({},i),{renderMode:j?o:a.Collapsed})});function ze(o,l,i){if(!o.length)return[];const n=[],[r,...j]=o.map(A=>Object.assign(Object.assign({},A),{renderMode:a.Full}));return ke(j,{useCollapse:!0,useEllipse:!0}).forEach(A=>{n.push(ge(r,A)),r.shortLabel&&n.push(Pe(r,A))}),n.push(ye(r,ce(a.Full,j))),n.push(ye(r,ce(a.Ellipsis,j))),n.push(xe(r,ce(a.Full,j))),n.push(xe(r,ce(a.Ellipsis,j))),n.map(A=>A.reduce((k,M,te,_e)=>{const{renderMode:ue}=M;te&&le.includes(ue)&&(k.width+=l.separator,k.chain.push({element:t.Separator,width:l.separator})),!k.hasCollapsed&&ue===a.Collapsed&&(te&&(k.width+=l.separator,k.chain.push({element:t.Separator,width:l.separator})),k.hasCollapsed=!0,k.width+=l.collapse,k.chain.push({element:t.Collapse,width:l.collapse}));const pe=l.items[M.id][ue];return k.weight+=Se[M.renderMode],k.width+=pe,k.chain.push({element:t.Item,item:M,width:pe}),te===_e.length-1&&i&&(k.width+=l.separator,k.chain.push({element:t.Separator,width:l.separator})),k},{chain:[],weight:0,width:0,hasCollapsed:!1}))}var be=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Separator/styles.module.css"),he={};he.styleTagTransform=g(),he.setAttributes=v(),he.insert=u().bind(null,"head"),he.domAPI=W(),he.insertStyleElement=_();var we=H()(be.A,he);const Le=be.A&&be.A.locals?be.A.locals:void 0;function J(){const{size:o,separator:l,testId:i}=(0,d.useContext)(K);return(0,s.jsx)("div",{"aria-hidden":!0,"data-size":o,className:Le.separator,"data-test-id":V("separator",i),"data-element-type":t.Separator,children:(0,s.jsx)(N,{size:o,children:l})})}var P=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Wrapper/styles.module.css"),X={};X.styleTagTransform=g(),X.setAttributes=v(),X.insert=u().bind(null,"head"),X.domAPI=W(),X.insertStyleElement=_();var Be=H()(P.A,X);const Te=P.A&&P.A.locals?P.A.locals:void 0;var De=function(o,l){var i={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&l.indexOf(n)<0&&(i[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(o);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(o,n[r])&&(i[n[r]]=o[n[r]]);return i};const Oe=(0,d.forwardRef)(function(l,i){var{children:n,className:r,size:j,hidden:A,separator:k,"data-test-id":M}=l,te=De(l,["children","className","size","hidden","separator","data-test-id"]);return(0,s.jsx)("nav",Object.assign({},(0,ne.z7)(te),{className:ie()(Te.wrapper,r),"data-test-id":M,"data-hidden":A,"aria-hidden":A,children:(0,s.jsx)(K.Provider,{value:{hidden:A,size:j,separator:k,testId:M},children:(0,s.jsx)("ul",{className:Te.row,ref:i,"data-hidden":A,"data-size":j,children:n})})}))}),Ue=[[a.ShortLabel,"shortLabel"],[a.Ellipsis,"label"],[a.Full,"label"]],Ke=[[a.Full,"label"]],Ve=o=>(l,i)=>{const n=!i&&o;return(n?Ke:Ue).map(([j,A])=>!l[A]&&j!==a.Full?null:(0,s.jsx)(m,{useIconOnly:n,renderMode:j,item:l},l.id+j))},Fe=({firstItemIconOnly:o})=>(0,d.useMemo)(()=>Ve(o),[o]),Ze=(0,d.memo)(function({size:l,separator:i,items:n,onConfigsBuilt:r,firstItemIconOnly:j=!1,lastEmpty:A=!1}){const k=(0,d.useRef)(null),M=(0,d.useRef)(n);M.current=n,(0,d.useEffect)(()=>{const _e=k.current;if(_e){const ue=new ResizeObserver(([{target:pe}])=>{const Ee=de(pe);Ee&&r(ze(M.current,Ee,A))});return ue.observe(_e),()=>{ue.disconnect()}}},[n,A,r]);const te=Fe({firstItemIconOnly:j});return(0,s.jsxs)(Oe,{size:l,hidden:!0,ref:k,separator:i,"data-test-id":"hidden-wrapper",children:[(0,s.jsx)(J,{}),(0,s.jsx)(D,{currentConfig:[]}),n.map(te)]})});var Ye=function(o,l){var i={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&l.indexOf(n)<0&&(i[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(o);r<n.length;r++)l.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(o,n[r])&&(i[n[r]]=o[n[r]]);return i};const Xe=(0,d.memo)(function(l){var{items:i,size:n=p.S,separator:r=f,className:j,firstItemIconOnly:A=!1,inactiveLastItem:k=!1,lastEmpty:M=!1}=l,te=Ye(l,["items","size","separator","className","firstItemIconOnly","inactiveLastItem","lastEmpty"]);const _e=(0,d.useRef)(null),{setConfigs:ue,currentConfig:pe}=se(_e),Ee=(0,d.useMemo)(()=>k?i.map((me,fe)=>fe===i.length-1?Object.assign(Object.assign({},me),{onClick:void 0,href:void 0}):me):i,[k,i]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Ze,{items:Ee,size:n,separator:r,onConfigsBuilt:ue,firstItemIconOnly:A,lastEmpty:M}),(0,s.jsx)(Oe,Object.assign({},te,{ref:_e,hidden:!1,size:n,separator:r,className:j,children:pe==null?void 0:pe.chain.map((me,fe,Re)=>{const Ne=fe===Re.length-1;switch(me.element){case t.Separator:return(0,s.jsx)(J,{},fe);case t.Collapse:return(0,s.jsx)(D,{currentConfig:pe.chain},fe);case t.Item:{const{renderMode:je,id:Ae}=me.item;if(je!==a.Collapsed)return(0,s.jsx)(m,{useIconOnly:!fe&&A,current:Ne,renderMode:je,minWidth:me.width,item:me.item},Ae);break}default:return null}})}))]})})},"./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js"(E,y,e){"use strict";e.d(y,{L:()=>S});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=e.n(d),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),p=e("./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),ee=e("./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js"),C=e("./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js"),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),U=e.n($),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),se=e.n(ae),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),K=e.n(oe),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=e.n(V),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=e.n(N),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),F=e.n(H),W=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/styles.module.css"),c={};c.styleTagTransform=F(),c.setAttributes=B(),c.insert=K().bind(null,"head"),c.domAPI=se(),c.insertStyleElement=I();var u=U()(W.A,c);const T=W.A&&W.A.locals?W.A.locals:void 0;var v=function(_,x){var g={};for(var b in _)Object.prototype.hasOwnProperty.call(_,b)&&x.indexOf(b)<0&&(g[b]=_[b]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,b=Object.getOwnPropertySymbols(_);z<b.length;z++)x.indexOf(b[z])<0&&Object.prototype.propertyIsEnumerable.call(_,b[z])&&(g[b[z]]=_[b[z]]);return g};const S=(0,a.forwardRef)((_,x)=>{var{className:g,size:b=p.SK.S,target:z=p.Qn.Blank,type:Z=p.dk.Button,appearance:L=p.xz.Primary,tabIndex:D,fullWidth:q=!1}=_,ie=v(_,["className","size","target","type","appearance","tabIndex","fullWidth"]);return(0,s.jsx)(ee.A,Object.assign({},(0,t.z7)(ie),(0,C.F)(ie),{className:f()(T.button,g),iconClassName:T.icon,labelClassName:T.label,size:b,fullWidth:q,target:z,type:Z,appearance:L,tabIndex:D,ref:x}))})},"./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"(E,y,e){"use strict";e.d(y,{c:()=>T});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=e.n(d),a=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const t={Horizontal:"horizontal",Vertical:"vertical"},p={Light:"light",Regular:"regular"};var ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(ee),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),U=e.n($),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),se=e.n(ae),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),K=e.n(oe),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(V),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=e.n(N),H=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"),F={};F.styleTagTransform=I(),F.setAttributes=K(),F.insert=se().bind(null,"head"),F.domAPI=U(),F.insertStyleElement=B();var W=C()(H.A,F);const c=H.A&&H.A.locals?H.A.locals:void 0;var u=function(v,S){var _={};for(var x in v)Object.prototype.hasOwnProperty.call(v,x)&&S.indexOf(x)<0&&(_[x]=v[x]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,x=Object.getOwnPropertySymbols(v);g<x.length;g++)S.indexOf(x[g])<0&&Object.prototype.propertyIsEnumerable.call(v,x[g])&&(_[x[g]]=v[x[g]]);return _};function T(v){var{className:S,orientation:_=t.Horizontal,weight:x=p.Regular}=v,g=u(v,["className","orientation","weight"]);const b=Object.assign(Object.assign({},(0,a.z7)(g)),{"data-weight":x});return _===t.Horizontal?(0,s.jsx)("hr",Object.assign({className:f()(c.horizontal,S)},b)):(0,s.jsx)("div",Object.assign({className:f()(c.vertical,S)},b))}},"./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"(E,y,e){"use strict";e.d(y,{m:()=>c});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=e.n(d),a=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.15.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(t),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),C=e.n(ee),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),U=e.n($),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),se=e.n(ae),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),K=e.n(oe),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),B=e.n(V),N=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"),I={};I.styleTagTransform=B(),I.setAttributes=se(),I.insert=U().bind(null,"head"),I.domAPI=C(),I.insertStyleElement=K();var H=p()(N.A,I);const F=N.A&&N.A.locals?N.A.locals:void 0;var W=function(u,T){var v={};for(var S in u)Object.prototype.hasOwnProperty.call(u,S)&&T.indexOf(S)<0&&(v[S]=u[S]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,S=Object.getOwnPropertySymbols(u);_<S.length;_++)T.indexOf(S[_])<0&&Object.prototype.propertyIsEnumerable.call(u,S[_])&&(v[S[_]]=u[S[_]]);return v};function c(u){var{content:T,trigger:v="click",placement:S="bottom-start",children:_,triggerRef:x,widthStrategy:g="gte",triggerClassName:b}=u,z=W(u,["content","trigger","placement","children","triggerRef","widthStrategy","triggerClassName"]);return!_&&!x?null:(0,s.jsx)(a.Z,Object.assign({placement:S,popoverContent:(0,s.jsx)("div",{className:F.dropdownContainer,children:T}),trigger:v,triggerRef:x,hasArrow:!1,widthStrategy:g,triggerClassName:f()(F.defaultTriggerClassName,b)},z,{children:_}))}},"./node_modules/.pnpm/@snack-uikit+info-block@0.6.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/index.js"(E,y,e){"use strict";e.d(y,{O:()=>re});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),f=e.n(d),a=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js"),t=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonTonal/ButtonTonal.js");const p={S:"s",M:"m",L:"l"},ee={Vertical:"vertical",Horizontal:"horizontal"},C={icon:"info-block__icon",title:"info-block__title",description:"info-block__description",footer:"info-block__footer",primaryButton:"info-block__primary-button",secondaryButton:"info-block__secondary-button"};var $=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const U=(0,$.createContext)({size:p.S});function ae(){return(0,$.useContext)(U)}var se=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function oe({Button:h,tooltip:O}){return O?function(m){return(0,s.jsx)(se.m,Object.assign({},O,{children:(0,s.jsx)(h,Object.assign({},m))}))}:h}var K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),V=e.n(K),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),N=e.n(B),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=e.n(I),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),W=e.n(F),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),u=e.n(c),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),v=e.n(T),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"),_={};_.styleTagTransform=v(),_.setAttributes=W(),_.insert=H().bind(null,"head"),_.domAPI=N(),_.insertStyleElement=u();var x=V()(S.A,_);const g=S.A&&S.A.locals?S.A.locals:void 0;function b({primaryButton:h,secondaryButton:O,className:Y}){const m=oe({Button:a.L,tooltip:h.tooltip}),w=oe({Button:t.L,tooltip:O==null?void 0:O.tooltip}),{size:G}=ae();return(0,s.jsxs)("div",{className:f()(g.infoBlockFooter,Y),children:[O&&(0,s.jsx)(w,Object.assign({},O,{size:G,"data-test-id":O["data-test-id"]||C.secondaryButton})),(0,s.jsx)(m,Object.assign({},h,{size:G,"data-test-id":h["data-test-id"]||C.primaryButton}))]})}var z=e("./node_modules/.pnpm/@snack-uikit+icon-predefined@0.7.11_react@18.2.0/node_modules/@snack-uikit/icon-predefined/dist/esm/components/IconPredefined.js"),Z=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),L=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),D=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"),q={};q.styleTagTransform=v(),q.setAttributes=W(),q.insert=H().bind(null,"head"),q.domAPI=N(),q.insertStyleElement=u();var ie=V()(D.A,q);const ne=D.A&&D.A.locals?D.A.locals:void 0;var Q=function(h,O){var Y={};for(var m in h)Object.prototype.hasOwnProperty.call(h,m)&&O.indexOf(m)<0&&(Y[m]=h[m]);if(h!=null&&typeof Object.getOwnPropertySymbols=="function")for(var w=0,m=Object.getOwnPropertySymbols(h);w<m.length;w++)O.indexOf(m[w])<0&&Object.prototype.propertyIsEnumerable.call(h,m[w])&&(Y[m[w]]=h[m[w]]);return Y};function R(h){var O,Y,{title:m,description:w,icon:G,size:de=p.S,footer:Se,align:le=ee.Vertical,className:ve}=h,ge=Q(h,["title","description","icon","size","footer","align","className"]);return(0,s.jsx)(U.Provider,{value:{size:de},children:(0,s.jsxs)("div",Object.assign({className:f()(ne.infoBlock,ve),"data-size":de,"data-align":le},(0,L.z7)(ge),{children:[G&&(0,s.jsx)(z.I,{icon:G.icon,appearance:(O=G.appearance)!==null&&O!==void 0?O:"primary",decor:(Y=G.decor)!==null&&Y!==void 0?Y:!0,size:de,"data-test-id":C.icon}),(0,s.jsxs)("div",{className:ne.contentLayout,children:[(0,s.jsxs)("div",{className:ne.textWrap,children:[m&&(0,s.jsx)(Z.o,{family:"sans",purpose:"title",size:de,className:ne.title,"data-test-id":C.title,children:m}),w&&(0,s.jsx)(Z.o,{family:"sans",purpose:"body",size:de,className:ne.description,"data-test-id":C.description,children:w})]}),Se&&(0,s.jsx)("div",{className:ne.footer,"data-test-id":C.footer,children:Se})]})]}))})}const re=R;re.Footer=b},"./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"(E,y,e){"use strict";e.d(y,{O:()=>ne});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/styles/overlayscrollbars.css"),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(f),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),p=e.n(t),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),C=e.n(ee),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),U=e.n($),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),se=e.n(ae),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(oe),V=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"),B={};B.styleTagTransform=K(),B.setAttributes=U(),B.insert=C().bind(null,"head"),B.domAPI=p(),B.insertStyleElement=se();var N=a()(V.A,B);const I=V.A&&V.A.locals?V.A.locals:void 0;var H=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),F=e.n(H),W=e("./node_modules/.pnpm/overlayscrollbars@2.11.1/node_modules/overlayscrollbars/overlayscrollbars.mjs"),c=e("./node_modules/.pnpm/overlayscrollbars-react@0.5.6_overlayscrollbars@2.11.1_react@18.2.0/node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js");const v={S:"s",M:"m"},S={Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"},_={None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"},x={Bottom:"bottom",Right:"right"},g=100,b=2;var z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"),Z={};Z.styleTagTransform=K(),Z.setAttributes=U(),Z.insert=C().bind(null,"head"),Z.domAPI=p(),Z.insertStyleElement=se();var L=a()(z.A,Z);const D=z.A&&z.A.locals?z.A.locals:void 0;var q=function(Q,R){var re={};for(var h in Q)Object.prototype.hasOwnProperty.call(Q,h)&&R.indexOf(h)<0&&(re[h]=Q[h]);if(Q!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,h=Object.getOwnPropertySymbols(Q);O<h.length;O++)R.indexOf(h[O])<0&&Object.prototype.propertyIsEnumerable.call(Q,h[O])&&(re[h[O]]=Q[h[O]]);return re};const ie=W.ae.nonce,ne=(0,u.forwardRef)(function(R,re){var{children:h,className:O,onScroll:Y,onInitialized:m,size:w=v.M,resize:G=_.None,clickScrolling:de=!0,barHideStrategy:Se=S.Leave,autoscrollTo:le,paddingAbsolute:ve,untouchableScrollbars:ge=!1}=R,Pe=q(R,["children","className","onScroll","onInitialized","size","resize","clickScrolling","barHideStrategy","autoscrollTo","paddingAbsolute","untouchableScrollbars"]);const ye=(0,u.useRef)(null),[xe,ke]=(0,u.useState)(!1),ce=(0,u.useCallback)((J=ye.current)=>J==null?void 0:J.osInstance(),[ye]);(0,u.useImperativeHandle)(re,()=>{var J,P,X;return(X=(P=(J=ye.current)===null||J===void 0?void 0:J.osInstance())===null||P===void 0?void 0:P.elements().viewport)!==null&&X!==void 0?X:null});const ze=(0,u.useRef)({scrolledToBottom:!1,scrolledToRight:!1}),be=(0,u.useCallback)(J=>{const P=ce(J);if(P){const{viewport:X}=P.elements(),Be=X.scrollHeight-(X.offsetHeight+X.scrollTop),Te=X.scrollWidth-(X.offsetWidth+X.scrollLeft),De=X.scrollHeight>X.offsetHeight,Oe=X.scrollWidth>X.offsetWidth;ze.current.scrolledToBottom=Be<b||!De,ze.current.scrolledToRight=Te<b||!Oe}},[ce]);(0,T.N)(()=>{if(!le){m==null||m();return}const J=ce();if(J&&xe){be();const{content:P}=J.elements();le===x.Bottom&&P.scroll(0,P.scrollHeight),le===x.Right&&P.scroll(P.scrollWidth,0)}m==null||m()},[ce,xe,be]);const he=(0,u.useCallback)(()=>{ke(!0)},[]),we=(0,u.useCallback)(J=>{Y==null||Y(J),le&&be()},[Y,be]),Le=(0,u.useCallback)(()=>{var J;if(!le)return;const P=(J=ce())===null||J===void 0?void 0:J.elements();P!=null&&P.content&&(ze.current.scrolledToBottom&&le===x.Bottom&&(P==null||P.content.scroll(0,P==null?void 0:P.content.scrollHeight)),ze.current.scrolledToRight&&le===x.Right&&(P==null||P.content.scroll(P==null?void 0:P.content.scrollWidth,0)))},[ce,le]);return(0,s.jsx)(c.r,Object.assign({},Pe,{ref:ye,"data-size":w,"data-untouchable-scrollbars":ge||void 0,className:F()(O,D.scroll,"osThemeSnack"),style:{resize:G},options:{paddingAbsolute:ve,scrollbars:{autoHide:Se,autoHideDelay:g,clickScroll:de}},events:{initialized:he,scroll:(J,P)=>{we(P)},updated:Le},children:le?xe&&h:h}))})},"./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/Switch.js"(E,y,e){"use strict";e.d(y,{d:()=>g});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),d=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),f=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),a=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/constants.js"),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(t),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),C=e.n(ee),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),U=e.n($),ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),se=e.n(ae),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),K=e.n(oe),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),B=e.n(V),N=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"),I={};I.styleTagTransform=B(),I.setAttributes=se(),I.insert=U().bind(null,"head"),I.domAPI=C(),I.insertStyleElement=K();var H=p()(N.A,I);const F=N.A&&N.A.locals?N.A.locals:void 0;function W(){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:F.spinner,children:(0,s.jsx)("path",{d:"M5 8C5 6.34315 6.34315 5 8 5",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round"})})}var c=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/utils.js"),u=e("./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/TogglePrivate/TogglePrivate.js"),T=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"),v={};v.styleTagTransform=B(),v.setAttributes=se(),v.insert=U().bind(null,"head"),v.domAPI=C(),v.insertStyleElement=K();var S=p()(T.A,v);const _=T.A&&T.A.locals?T.A.locals:void 0;var x=function(b,z){var Z={};for(var L in b)Object.prototype.hasOwnProperty.call(b,L)&&z.indexOf(L)<0&&(Z[L]=b[L]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,L=Object.getOwnPropertySymbols(b);D<L.length;D++)z.indexOf(L[D])<0&&Object.prototype.propertyIsEnumerable.call(b,L[D])&&(Z[L[D]]=b[L[D]]);return Z};function g(b){var{inputRef:z,"data-test-id":Z,showIcon:L,loading:D,size:q=a.SK.M}=b,ie=x(b,["inputRef","data-test-id","showIcon","loading","size"]);return(0,s.jsx)(u.Q,Object.assign({},ie,{size:q,"data-test-id":Z,ref:z,render:function(Q){const R=(0,c.V)(Q);return(0,s.jsxs)("div",Object.assign({className:_.container},R,{children:[(0,s.jsx)("div",Object.assign({className:_.box},R)),(0,s.jsxs)("div",Object.assign({className:_.containerFlag},R,{children:[(0,s.jsx)("div",Object.assign({className:_.flag},R)),(L||D)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",Object.assign({className:_.flag_icon_off},R,{children:D?(0,s.jsx)(W,{}):(0,s.jsx)(d.A,{size:16})})),(0,s.jsx)("div",Object.assign({className:_.flag_icon_on},R,{children:D?(0,s.jsx)(W,{}):(0,s.jsx)(f.A,{size:16})}))]})]}))]}))}}))}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Collapse/styles.module.css"(E,y,e){"use strict";e.d(y,{A:()=>p});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=a()(d());t.push([E.id,`.collapse--uWQ1S{
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
}`,""]),t.locals={collapse:"collapse--uWQ1S",collapsedRow:"collapsedRow--rwIo3",a:"a--RmSLF"};const p=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Crumb/styles.module.css"(E,y,e){"use strict";e.d(y,{A:()=>p});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=a()(d());t.push([E.id,`.wrapper--Cwc2l{
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
}`,""]),t.locals={wrapper:"wrapper--Cwc2l",crumb:"crumb--_SV0B",label:"label--XekrZ",icon:"icon--CeNen"};const p=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Separator/styles.module.css"(E,y,e){"use strict";e.d(y,{A:()=>p});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=a()(d());t.push([E.id,`.separator--c4RyB{
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
}`,""]),t.locals={separator:"separator--c4RyB"};const p=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.37_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-_70b03b2e3269f5efbe18d25da416f86a/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Wrapper/styles.module.css"(E,y,e){"use strict";e.d(y,{A:()=>p});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=a()(d());t.push([E.id,`.wrapper--A3KVm{
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
}`,""]),t.locals={wrapper:"wrapper--A3KVm",row:"row--f3NyG"};const p=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/styles.module.css"(E,y,e){"use strict";e.d(y,{A:()=>p});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=a()(d());t.push([E.id,`.button--RJPL_[data-size=xs] .label--CtV07{
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
}`,""]),t.locals={button:"button--RJPL_",label:"label--CtV07",icon:"icon--DASq3"};const p=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/styles.module.css"(E,y,e){"use strict";e.d(y,{A:()=>p});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=a()(d());t.push([E.id,`.horizontal--wM2qX{
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
}`,""]),t.locals={horizontal:"horizontal--wM2qX",vertical:"vertical--PdYDD"};const p=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/styles.module.css"(E,y,e){"use strict";e.d(y,{A:()=>p});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=a()(d());t.push([E.id,`.dropdownContainer--thkj4{
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
}`,""]),t.locals={dropdownContainer:"dropdownContainer--thkj4",defaultTriggerClassName:"defaultTriggerClassName--J_CUP"};const p=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/Footer/styles.module.css"(E,y,e){"use strict";e.d(y,{A:()=>p});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=a()(d());t.push([E.id,`.infoBlockFooter--RHOqV{
  gap:var(--space-info-block-footer-gap, 8px);
  display:flex;
  align-items:center;
}`,""]),t.locals={infoBlockFooter:"infoBlockFooter--RHOqV"};const p=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+info-block@0.6.40_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/InfoBlock/styles.module.css"(E,y,e){"use strict";e.d(y,{A:()=>p});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=a()(d());t.push([E.id,`.contentLayout--nVcE6{
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
}`,""]),t.locals={contentLayout:"contentLayout--nVcE6",textWrap:"textWrap--micPg",footer:"footer--j6WT6",title:"title--ukPp5",description:"description--juWzz",infoBlock:"infoBlock--ZNhSS"};const p=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/scroll.css"(E,y,e){"use strict";e.d(y,{A:()=>U});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/getUrl.js"),p=e.n(t),ee=new URL(e("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),e.b),C=a()(d()),$=p()(ee);C.push([E.id,`@charset "UTF-8";
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
  --bg-icon-mask:url(${$});
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
}`,""]);const U=C},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/styles.module.css"(E,y,e){"use strict";e.d(y,{A:()=>p});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=a()(d());t.push([E.id,`.scroll--F6lqE{
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
}`,""]),t.locals={scroll:"scroll--F6lqE"};const p=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/styles.module.css"(E,y,e){"use strict";e.d(y,{A:()=>p});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=a()(d());t.push([E.id,`.container--quzAo{
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
}`,""]),t.locals={container:"container--quzAo",box:"box--z5Z9n",containerFlag:"containerFlag--JSDIA",flag:"flag--zOypq",flag_icon_off:"flag_icon_off--m140A",flag_icon_on:"flag_icon_on--Imk53"};const p=t},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+toggles@0.13.26_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/helperComponents/Spinner/styles.module.css"(E,y,e){"use strict";e.d(y,{A:()=>p});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(f),t=a()(d());t.push([E.id,`.spinner--JetpG{
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
}`,""]),t.locals={spinner:"spinner--JetpG",spin:"spin--LixZz"};const p=t},"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"(E,y,e){var s="Expected a function",d=NaN,f="[object Symbol]",a=/^\s+|\s+$/g,t=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,ee=/^0o[0-7]+$/i,C=parseInt,$=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,U=typeof self=="object"&&self&&self.Object===Object&&self,ae=$||U||Function("return this")(),se=Object.prototype,oe=se.toString,K=Math.max,V=Math.min,B=function(){return ae.Date.now()};function N(c,u,T){var v,S,_,x,g,b,z=0,Z=!1,L=!1,D=!0;if(typeof c!="function")throw new TypeError(s);u=W(u)||0,I(T)&&(Z=!!T.leading,L="maxWait"in T,_=L?K(W(T.maxWait)||0,u):_,D="trailing"in T?!!T.trailing:D);function q(m){var w=v,G=S;return v=S=void 0,z=m,x=c.apply(G,w),x}function ie(m){return z=m,g=setTimeout(R,u),Z?q(m):x}function ne(m){var w=m-b,G=m-z,de=u-w;return L?V(de,_-G):de}function Q(m){var w=m-b,G=m-z;return b===void 0||w>=u||w<0||L&&G>=_}function R(){var m=B();if(Q(m))return re(m);g=setTimeout(R,ne(m))}function re(m){return g=void 0,D&&v?q(m):(v=S=void 0,x)}function h(){g!==void 0&&clearTimeout(g),z=0,v=b=S=g=void 0}function O(){return g===void 0?x:re(B())}function Y(){var m=B(),w=Q(m);if(v=arguments,S=this,b=m,w){if(g===void 0)return ie(b);if(L)return g=setTimeout(R,u),q(b)}return g===void 0&&(g=setTimeout(R,u)),x}return Y.cancel=h,Y.flush=O,Y}function I(c){var u=typeof c;return!!c&&(u=="object"||u=="function")}function H(c){return!!c&&typeof c=="object"}function F(c){return typeof c=="symbol"||H(c)&&oe.call(c)==f}function W(c){if(typeof c=="number")return c;if(F(c))return d;if(I(c)){var u=typeof c.valueOf=="function"?c.valueOf():c;c=I(u)?u+"":u}if(typeof c!="string")return c===0?c:+c;c=c.replace(a,"");var T=p.test(c);return T||ee.test(c)?C(c.slice(2),T?2:8):t.test(c)?d:+c}E.exports=N}}]);})();
