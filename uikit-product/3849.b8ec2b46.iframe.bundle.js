(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3849],{"./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.35_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_fc5ca4f5e68dc7b8f5838565397e48a5/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Breadcrumbs/Breadcrumbs.js":((D,C,e)=>{"use strict";e.d(C,{B:()=>L});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const R="\u203A",i={Full:"full",ShortLabel:"shortLabel",Ellipsis:"ellipsis",Collapsed:"collapsed"},l={Separator:"separator",Collapse:"collapse",Item:"item"},E={Xs:"xs",S:"s"};var Q=e("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),g=e.n(Q),K=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const A=t=>{if(!t)return 0;if((0,K.B)()){const a=document.createElement("div");a.style.width="10000px",t.append(a);const o=t.getBoundingClientRect().width;return t.removeChild(a),o}return 0},z=(t,a)=>{if(!a.length)return;let[o]=a;for(const s of a)s.width<=t?(o.width>t||o.weight>s.weight)&&(o=s):s.width<o.width&&(o=s);if(o)return{chain:o.chain,containerWidth:t,chainWidth:o.width}};function pe(t){const[a,o]=(0,u.useState)([]),[s,n]=(0,u.useState)(0);(0,u.useEffect)(()=>{var _;const p=(_=t.current)===null||_===void 0?void 0:_.parentElement;if(!p)return;n(A(p));const m=g()(()=>{n(A(p))},100),I=new ResizeObserver(m);return I.observe(p),I.observe(document.body),()=>I.disconnect()},[t]);const c=(0,u.useMemo)(()=>z(s,a),[s,a]);return{setConfigs:o,currentConfig:c}}var _e=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js");const N=(0,u.createContext)({hidden:!1,size:E.S,separator:R}),ee=(t,a)=>a?`${t}-element-${a}`:"";var te=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.12_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js");function se({size:t,children:a,className:o}){return(0,r.jsx)(te.o,{className:o,size:t===E.S?"m":"s",tag:"div",family:"sans",purpose:"body",children:a})}var ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),F=e.n(ae),me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),M=e.n(me),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),f=e.n(d),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),v=e.n(k),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),O=e.n(S),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=e.n(y),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.35_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_fc5ca4f5e68dc7b8f5838565397e48a5/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Collapse/styles.module.css"),j={};j.styleTagTransform=x(),j.setAttributes=v(),j.insert=f().bind(null,"head"),j.domAPI=M(),j.insertStyleElement=O();var T=F()(h.A,j);const B=h.A&&h.A.locals?h.A.locals:void 0;function Y({currentConfig:t,className:a}){const o=(0,u.useContext)(N),{hidden:s,size:n,testId:c}=o,_=(0,u.useRef)(null),p=t.filter(m=>m.element===l.Item&&m.item.renderMode===i.Collapsed).map(m=>Object.assign({content:{option:m.item.label}},m.item.href?{itemWrapRender:I=>(0,r.jsx)("a",{href:m.item.href,onClick:m.item.onClick,className:B.a,children:I})}:{onClick:m.item.onClick}));return(0,r.jsx)("div",{className:a,"data-test-id":ee("collapse",c),"data-element-type":l.Collapse,children:(0,r.jsx)(N.Provider,{value:Object.assign(Object.assign({},o),{testId:`${c}-collapsed`}),children:(0,r.jsx)(_e.i,{trigger:"hoverAndFocusVisible",size:"s",scroll:!0,triggerElemRef:_,items:p,children:(0,r.jsx)("button",{type:"button",ref:_,className:B.collapse,tabIndex:s?-1:0,children:(0,r.jsx)(se,{size:n,children:"..."})})})})})}var ne=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),oe=e.n(ne),W=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),re=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.35_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_fc5ca4f5e68dc7b8f5838565397e48a5/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Crumb/styles.module.css"),w={};w.styleTagTransform=x(),w.setAttributes=v(),w.insert=f().bind(null,"head"),w.domAPI=M(),w.insertStyleElement=O();var je=F()(re.A,w);const Z=re.A&&re.A.locals?re.A.locals:void 0;var Oe=function(t,a){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(o[s[n]]=t[s[n]]);return o};const be=8,P=(0,u.memo)(function(a){var{minWidth:o=0,current:s=!1,renderMode:n,className:c,item:{label:_,shortLabel:p,icon:m,id:I,onClick:X,href:$},useIconOnly:H}=a,ke=Oe(a,["minWidth","current","renderMode","className","item","useIconOnly"]);const{hidden:G,size:ce,testId:Fe}=(0,u.useContext)(N),xe=G&&_.length>be&&n===i.Ellipsis?`${_.substring(0,4)}...`:_,Ie=!!(m&&H),Ge=o&&n===i.Ellipsis?o:"auto",Te={"data-render-mode":n,"data-current":s,"data-hidden":G,"data-size":ce,"data-id":I},Ve=(0,r.jsxs)(r.Fragment,{children:[m&&(0,r.jsx)("div",{className:Z.icon,children:(0,r.jsx)(m,{size:16})}),!Ie&&(0,r.jsx)(se,{size:ce,className:Z.label,children:n===i.ShortLabel?p:xe})]}),$e=G?{tabIndex:-1}:{},He=n===i.Ellipsis?xe:"";let we=null;return $?we=(0,r.jsx)("a",Object.assign({className:Z.crumb,onClick:X,href:$,"aria-label":Ie?xe:void 0,"data-clickable":!0},Te,$e,{children:Ve})):X?we=(0,r.jsx)("button",Object.assign({type:"button",title:He,onClick:X,className:Z.crumb,"aria-label":Ie?xe:void 0,"data-clickable":!0},Te,$e,{children:Ve})):we=(0,r.jsx)("div",Object.assign({className:Z.crumb},Te,{children:Ve})),(0,r.jsx)("li",Object.assign({},(0,W.z7)(ke),Te,{"data-test-id":ee("crumb",Fe),className:oe()(Z.wrapper,c),"data-element-type":l.Item,style:{minWidth:Ge},title:He,children:we}))}),J=()=>({[i.ShortLabel]:0,[i.Collapsed]:0,[i.Ellipsis]:0,[i.Full]:0}),V=t=>t.getBoundingClientRect().width;function Pe(t){if(!t)return;const a=t.children,[o,s,...n]=Array.from(a);return{separator:V(o),collapse:V(s),items:n.reduce((c,_)=>{const p=_.getAttribute("data-id"),m=_.getAttribute("data-render-mode");return c[p]=c[p]||J(),c[p][m]=V(_),c},{})}}const De={[i.Full]:0,[i.ShortLabel]:1,[i.Ellipsis]:100,[i.Collapsed]:1e4},Le=[i.Full,i.ShortLabel,i.Ellipsis],fe=t=>(a,o)=>[Object.assign(Object.assign({},a),{renderMode:t}),...o],Re=fe(i.Full),Se=fe(i.ShortLabel),q=fe(i.Ellipsis),le=fe(i.Collapsed);function ie([t,...a],{useCollapse:o=!0,useEllipse:s=!0}){const n=[];return t?a.length?(ie(a,{useCollapse:!1,useEllipse:!1}).forEach(c=>{n.push(Re(t,c)),t.shortLabel&&n.push(Se(t,c))}),s&&ie(a,{useCollapse:!1,useEllipse:!0}).forEach(c=>{n.push(q(t,c))}),o&&ie(a,{useCollapse:!0,useEllipse:!1}).forEach(c=>{n.push(le(t,c))}),n):(n.push(Re(t,[])),t.shortLabel&&n.push(Se(t,[])),n):n}const ve=(t,a)=>a.map((o,s,n)=>{const c=s===n.length-1;return Object.assign(Object.assign({},o),{renderMode:c?t:i.Collapsed})});function Je(t,a,o){if(!t.length)return[];const s=[],[n,...c]=t.map(_=>Object.assign(Object.assign({},_),{renderMode:i.Full}));return ie(c,{useCollapse:!0,useEllipse:!0}).forEach(_=>{s.push(Re(n,_)),n.shortLabel&&s.push(Se(n,_))}),s.push(q(n,ve(i.Full,c))),s.push(q(n,ve(i.Ellipsis,c))),s.push(le(n,ve(i.Full,c))),s.push(le(n,ve(i.Ellipsis,c))),s.map(_=>_.reduce((p,m,I,X)=>{const{renderMode:$}=m;I&&Le.includes($)&&(p.width+=a.separator,p.chain.push({element:l.Separator,width:a.separator})),!p.hasCollapsed&&$===i.Collapsed&&(I&&(p.width+=a.separator,p.chain.push({element:l.Separator,width:a.separator})),p.hasCollapsed=!0,p.width+=a.collapse,p.chain.push({element:l.Collapse,width:a.collapse}));const H=a.items[m.id][$];return p.weight+=De[m.renderMode],p.width+=H,p.chain.push({element:l.Item,item:m,width:H}),I===X.length-1&&o&&(p.width+=a.separator,p.chain.push({element:l.Separator,width:a.separator})),p},{chain:[],weight:0,width:0,hasCollapsed:!1}))}var he=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.35_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_fc5ca4f5e68dc7b8f5838565397e48a5/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Separator/styles.module.css"),U={};U.styleTagTransform=x(),U.setAttributes=v(),U.insert=f().bind(null,"head"),U.domAPI=M(),U.insertStyleElement=O();var Ce=F()(he.A,U);const ze=he.A&&he.A.locals?he.A.locals:void 0;function Ee(){const{size:t,separator:a,testId:o}=(0,u.useContext)(N);return(0,r.jsx)("div",{"aria-hidden":!0,"data-size":t,className:ze.separator,"data-test-id":ee("separator",o),"data-element-type":l.Separator,children:(0,r.jsx)(se,{size:t,children:a})})}var ye=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.35_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_fc5ca4f5e68dc7b8f5838565397e48a5/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Wrapper/styles.module.css"),de={};de.styleTagTransform=x(),de.setAttributes=v(),de.insert=f().bind(null,"head"),de.domAPI=M(),de.insertStyleElement=O();var Me=F()(ye.A,de);const ue=ye.A&&ye.A.locals?ye.A.locals:void 0;var Be=function(t,a){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(o[s[n]]=t[s[n]]);return o};const ge=(0,u.forwardRef)(function(a,o){var{children:s,className:n,size:c,hidden:_,separator:p,"data-test-id":m}=a,I=Be(a,["children","className","size","hidden","separator","data-test-id"]);return(0,r.jsx)("nav",Object.assign({},(0,W.z7)(I),{className:oe()(ue.wrapper,n),"data-test-id":m,"data-hidden":_,"aria-hidden":_,children:(0,r.jsx)(N.Provider,{value:{hidden:_,size:c,separator:p,testId:m},children:(0,r.jsx)("ul",{className:ue.row,ref:o,"data-hidden":_,"data-size":c,children:s})})}))}),We=[[i.ShortLabel,"shortLabel"],[i.Ellipsis,"label"],[i.Full,"label"]],Ue=[[i.Full,"label"]],Ae=t=>(a,o)=>{const s=!o&&t;return(s?Ue:We).map(([c,_])=>!a[_]&&c!==i.Full?null:(0,r.jsx)(P,{useIconOnly:s,renderMode:c,item:a},a.id+c))},Ke=({firstItemIconOnly:t})=>(0,u.useMemo)(()=>Ae(t),[t]),Ne=(0,u.memo)(function({size:a,separator:o,items:s,onConfigsBuilt:n,firstItemIconOnly:c=!1,lastEmpty:_=!1}){const p=(0,u.useRef)(null),m=(0,u.useRef)(s);m.current=s,(0,u.useEffect)(()=>{const X=p.current;if(X){const $=new ResizeObserver(([{target:H}])=>{const ke=Pe(H);ke&&n(Je(m.current,ke,_))});return $.observe(X),()=>{$.disconnect()}}},[s,_,n]);const I=Ke({firstItemIconOnly:c});return(0,r.jsxs)(ge,{size:a,hidden:!0,ref:p,separator:o,"data-test-id":"hidden-wrapper",children:[(0,r.jsx)(Ee,{}),(0,r.jsx)(Y,{currentConfig:[]}),s.map(I)]})});var b=function(t,a){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&a.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(t);n<s.length;n++)a.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(o[s[n]]=t[s[n]]);return o};const L=(0,u.memo)(function(a){var{items:o,size:s=E.S,separator:n=R,className:c,firstItemIconOnly:_=!1,inactiveLastItem:p=!1,lastEmpty:m=!1}=a,I=b(a,["items","size","separator","className","firstItemIconOnly","inactiveLastItem","lastEmpty"]);const X=(0,u.useRef)(null),{setConfigs:$,currentConfig:H}=pe(X),ke=(0,u.useMemo)(()=>p?o.map((G,ce)=>ce===o.length-1?Object.assign(Object.assign({},G),{onClick:void 0,href:void 0}):G):o,[p,o]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ne,{items:ke,size:s,separator:n,onConfigsBuilt:$,firstItemIconOnly:_,lastEmpty:m}),(0,r.jsx)(ge,Object.assign({},I,{ref:X,hidden:!1,size:s,separator:n,className:c,children:H==null?void 0:H.chain.map((G,ce,Fe)=>{const Xe=ce===Fe.length-1;switch(G.element){case l.Separator:return(0,r.jsx)(Ee,{},ce);case l.Collapse:return(0,r.jsx)(Y,{currentConfig:H.chain},ce);case l.Item:{const{renderMode:xe,id:Ie}=G.item;if(xe!==i.Collapsed)return(0,r.jsx)(P,{useIconOnly:!ce&&_,current:Xe,renderMode:xe,minWidth:G.width,item:G.item},Ie);break}default:return null}})}))]})})}),"./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js":((D,C,e)=>{"use strict";e.d(C,{L:()=>S});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),R=e.n(u),i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),E=e("./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/constants.js"),Q=e("./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/helperComponents/ButtonPrivate/ButtonPrivate.js"),g=e("./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/utils.js"),K=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(K),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),pe=e.n(z),_e=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),N=e.n(_e),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),te=e.n(ee),se=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),ae=e.n(se),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),me=e.n(F),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/styles.module.css"),d={};d.styleTagTransform=me(),d.setAttributes=te(),d.insert=N().bind(null,"head"),d.domAPI=pe(),d.insertStyleElement=ae();var f=A()(M.A,d);const k=M.A&&M.A.locals?M.A.locals:void 0;var v=function(O,y){var x={};for(var h in O)Object.prototype.hasOwnProperty.call(O,h)&&y.indexOf(h)<0&&(x[h]=O[h]);if(O!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,h=Object.getOwnPropertySymbols(O);j<h.length;j++)y.indexOf(h[j])<0&&Object.prototype.propertyIsEnumerable.call(O,h[j])&&(x[h[j]]=O[h[j]]);return x};const S=(0,i.forwardRef)((O,y)=>{var{className:x,size:h=E.SK.S,target:j=E.Qn.Blank,type:T=E.dk.Button,appearance:B=E.xz.Primary,tabIndex:Y,fullWidth:ne=!1}=O,oe=v(O,["className","size","target","type","appearance","tabIndex","fullWidth"]);return(0,r.jsx)(Q.A,Object.assign({},(0,l.z7)(oe),(0,g.F)(oe),{className:R()(k.button,x),iconClassName:k.icon,labelClassName:k.label,size:h,fullWidth:ne,target:j,type:T,appearance:B,tabIndex:Y,ref:y}))})}),"./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js":((D,C,e)=>{"use strict";e.d(C,{i:()=>M});var r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),R=e.n(u),i=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),E=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),Q=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),g=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),K=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),A=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),z=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),pe=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),_e=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),N=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),ee=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),te=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),se=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),ae=e("./node_modules/.pnpm/@snack-uikit+list@0.32.15_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),F=function(d,f){var k={};for(var v in d)Object.prototype.hasOwnProperty.call(d,v)&&f.indexOf(v)<0&&(k[v]=d[v]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,v=Object.getOwnPropertySymbols(d);S<v.length;S++)f.indexOf(v[S])<0&&Object.prototype.propertyIsEnumerable.call(d,v[S])&&(k[v[S]]=d[v[S]]);return k};const me=["top","right","bottom","left"];function M(d){var{items:f,search:k,pinBottom:v=[],pinTop:S=[],footerActiveElementsRefs:O,children:y,trigger:x,placement:h,widthStrategy:j,triggerElemRef:T,open:B,onOpenChange:Y,collapse:ne={},triggerClassName:oe,selection:W,contentRender:re,size:w="s",marker:je=!0,closeDroplistOnItemClick:Z=!1,className:Oe,listRef:be,untouchableScrollbars:P=!1,virtualized:J=!1,closeOnPopstate:V}=d,Pe=F(d,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const De=(0,l.useMemo)(()=>!!k,[k]),[Le=[],fe]=(0,Q.I)(ne),Re=(0,l.useCallback)(b=>fe(L=>L!=null&&L.includes(b)?L.filter(t=>t!==b):(L!=null?L:[]).concat([b])),[fe]),[Se=!1,q]=(0,Q.I)({value:B,defaultValue:!1,onChange:Y}),{searchItem:le,footerItems:ie}=(0,K.nG)({footerActiveElementsRefs:O}),ve=(0,l.useMemo)(()=>{const b=(0,A.lg)({items:S,prefix:g.$.pinTop,parentId:g.$.default}),L=(0,A.lg)({items:f,prefix:g.$.default,parentId:g.$.default}),t=(0,A.lg)({items:v,prefix:g.$.pinBottom,parentId:g.$.default}),a=Object.assign(Object.assign(Object.assign({},b.flattenItems),t.flattenItems),L.flattenItems),o=Object.assign(Object.assign(Object.assign({},b.focusFlattenItems),t.focusFlattenItems),L.focusFlattenItems);return[...ie,le].forEach(s=>{a[s.id]=s,o[s.id]=Object.assign(Object.assign({},s),{originalId:s.id,items:[],key:s.id,allChildIds:[]})}),{items:L,pinTop:b,pinBottom:t,flattenItems:a,focusFlattenItems:o}},[f,S,v,le,ie]),{flattenItems:Je,focusFlattenItems:he}=ve,U=F(ve,["flattenItems","focusFlattenItems"]),{ids:Ce,expandedIds:ze}=(0,l.useMemo)(()=>{const{pinTop:b,items:L,pinBottom:t}=U;let a=[],o=[];return De&&a.push(le.id),[b,L,t].forEach(({focusFlattenItems:s,focusCloseChildIds:n})=>{const c=(0,A.e)({focusFlattenItems:s,focusCloseChildIds:n,openCollapseItems:Le,isSelectionMultiple:(W==null?void 0:W.mode)==="multiple"});a=a.concat(c.ids),o=o.concat(c.expandedIds)}),ie.forEach(s=>{a.push(s.id)}),{ids:a,expandedIds:o}},[ie,De,U,Le,le.id,W==null?void 0:W.mode]),Ee=(0,l.useRef)(null),ye=(0,l.useRef)(null),de=Ce[0],{handleListKeyDownFactory:Me,resetActiveItemId:ue,activeItemId:Be,forceUpdateActiveItemId:ge}=(0,te.d)({mainRef:T!=null?T:Ee,focusFlattenItems:he,hasListInFocusChain:!0,firstItemId:de}),We=(0,l.useCallback)(b=>Me(Ce,ze)(b),[Me,Ce,ze]),Ue=(0,l.useCallback)(b=>{ue(),q(b)},[ue,q]),Ae=(0,l.useCallback)((b,L)=>{b.key==="ArrowDown"&&(b.preventDefault(),q(!0),setTimeout(()=>{var t;ue(),(t=ye.current)===null||t===void 0||t.focus()},0)),b.key==="ArrowUp"&&q(!1),L==null||L(b)},[ue,q]),Ke=(0,l.useMemo)(()=>(0,l.isValidElement)(y),[y]),Ne=(0,l.useMemo)(()=>{if((0,l.isValidElement)(y)){const b=typeof y.props=="object"?y.props:{};return(0,l.cloneElement)(y,Object.assign(Object.assign({},b),{onKeyDown:L=>{var t;Ae(L,(t=y.props)===null||t===void 0?void 0:t.onKeyDown)}}))}return typeof y=="function"?y({onKeyDown:Ae}):y},[Ae,y]);return(0,r.jsx)(z.Tr,{flattenItems:Je,focusFlattenItems:he,contentRender:re,size:w,marker:je,firstItemId:de,virtualized:J,children:(0,r.jsx)(pe.WM,Object.assign({},W,{children:(0,r.jsx)(_e.bN.Provider,{value:{openCollapseItems:Le,toggleOpenCollapseItem:Re},children:(0,r.jsx)(N.m.Provider,{value:{activeItemId:Be,handleListKeyDownFactory:Me,forceUpdateActiveItemId:ge},children:(0,r.jsx)(ee.K.Provider,{value:{closeDroplistOnItemClick:Z,closeDroplist:()=>{var b;q(!1),ue(),(b=(T!=null?T:Ee).current)===null||b===void 0||b.focus()}},children:(0,r.jsx)(E.m,{content:(0,r.jsx)("div",{className:R()(ae.A.wrapper,Oe),children:(0,r.jsx)(se.Q,Object.assign({},Pe,{items:U.items.focusCloseChildIds,pinTop:U.pinTop.focusCloseChildIds,pinBottom:U.pinBottom.focusCloseChildIds,virtualized:J,onKeyDown:We,searchItem:le,tabIndex:0,ref:(0,i.A)(ye,be),search:k,onFocus:b=>{b.stopPropagation(),ge==null||ge(Ce[0])},limitedScrollHeight:!0,untouchableScrollbars:P}))}),outsideClick:!0,triggerClassName:oe,fallbackPlacements:me,trigger:x,placement:h,widthStrategy:j,triggerRef:T?Ke&&T||void 0:Ee,open:Se,onOpenChange:Ue,closeOnPopstate:V,children:Ne})})})})}))})}}),"./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((D,C,e)=>{"use strict";e.d(C,{sg:()=>l,z7:()=>Q});const r=/^data-test-/,u=/^(data|aria)-/;function R(g,K){return Object.keys(g).filter(A=>!A.match(K)).reduce((A,z)=>Object.assign(Object.assign({},A),{[z]:g[z]}),{})}function i(g,K){return Object.keys(g).reduce((A,z)=>(z.match(K)&&(A[z]=g[z]),A),{})}function l(g){return R(g,u)}function E(g){return i(g,r)}function Q(g){return i(g,u)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.35_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_fc5ca4f5e68dc7b8f5838565397e48a5/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Collapse/styles.module.css":((D,C,e)=>{"use strict";e.d(C,{A:()=>E});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(R),l=i()(u());l.push([D.id,`.collapse--SnJ9A{
  color:var(--sys-neutral-text-light, #8b8e9b);
  background:none;
  border:none;
}
.collapse--SnJ9A:focus-visible, .collapse--SnJ9A:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.collapse--SnJ9A:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}

.collapsedRow--HSv4p{
  display:flex;
}

.a--hI4ym{
  text-decoration:none;
}`,""]),l.locals={collapse:"collapse--SnJ9A",collapsedRow:"collapsedRow--HSv4p",a:"a--hI4ym"};const E=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.35_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_fc5ca4f5e68dc7b8f5838565397e48a5/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Crumb/styles.module.css":((D,C,e)=>{"use strict";e.d(C,{A:()=>E});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(R),l=i()(u());l.push([D.id,`.wrapper--TvEiu{
  flex-shrink:0;
  list-style:none;
}
.wrapper--TvEiu[data-render-mode=ellipsis]{
  flex-shrink:1;
}

.crumb--izqU6, a.crumb--izqU6{
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
.crumb--izqU6[data-clickable], a.crumb--izqU6[data-clickable]{
  cursor:pointer;
}
.crumb--izqU6[data-clickable]:focus-visible, .crumb--izqU6[data-clickable]:hover, a.crumb--izqU6[data-clickable]:focus-visible, a.crumb--izqU6[data-clickable]:hover{
  color:var(--sys-neutral-text-support, #6d707f);
}
.crumb--izqU6[data-current=true], a.crumb--izqU6[data-current=true]{
  color:var(--sys-neutral-text-support, #6d707f);
}
.crumb--izqU6:focus-visible, a.crumb--izqU6:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.crumb--izqU6[data-size=xs], a.crumb--izqU6[data-size=xs]{
  height:var(--size-breadcrumbs-xs, 16px);
  gap:var(--space-breadcrumbs-crumb-xs-gap, 2px);
}
.crumb--izqU6[data-size=s], a.crumb--izqU6[data-size=s]{
  height:var(--size-breadcrumbs-s, 24px);
  gap:var(--space-breadcrumbs-crumb-s-gap, 2px);
}
.crumb--izqU6 .label--sivRj, a.crumb--izqU6 .label--sivRj{
  overflow:hidden;
  width:100%;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.crumb--izqU6 .icon--YrmM_, a.crumb--izqU6 .icon--YrmM_{
  display:flex;
  flex-shrink:0;
  align-items:center;
  width:-moz-fit-content;
  width:fit-content;
}`,""]),l.locals={wrapper:"wrapper--TvEiu",crumb:"crumb--izqU6",label:"label--sivRj",icon:"icon--YrmM_"};const E=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.35_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_fc5ca4f5e68dc7b8f5838565397e48a5/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Separator/styles.module.css":((D,C,e)=>{"use strict";e.d(C,{A:()=>E});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(R),l=i()(u());l.push([D.id,`.separator--LDQ5S{
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.separator--LDQ5S[data-size=xs]{
  height:var(--size-breadcrumbs-xs, 16px);
  padding-left:var(--space-breadcrumbs-separator-padding-xs, 4px);
  padding-right:var(--space-breadcrumbs-separator-padding-xs, 4px);
}
.separator--LDQ5S[data-size=s]{
  height:var(--size-breadcrumbs-s, 24px);
  padding-left:var(--space-breadcrumbs-separator-padding-s, 8px);
  padding-right:var(--space-breadcrumbs-separator-padding-s, 8px);
}`,""]),l.locals={separator:"separator--LDQ5S"};const E=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+breadcrumbs@0.11.35_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-_fc5ca4f5e68dc7b8f5838565397e48a5/node_modules/@snack-uikit/breadcrumbs/dist/esm/components/Wrapper/styles.module.css":((D,C,e)=>{"use strict";e.d(C,{A:()=>E});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(R),l=i()(u());l.push([D.id,`.wrapper--EldlS{
  padding:var(--space-breadcrumbs-container, 2px);
  overflow:hidden;
}
.wrapper--EldlS[data-hidden=true]{
  position:absolute;
  width:1px;
  height:1px;
  opacity:0;
}

.row--Z9DN5{
  display:flex;
  margin:0;
  padding:0;
}
.row--Z9DN5[data-hidden=true]{
  display:inline-flex;
}`,""]),l.locals={wrapper:"wrapper--EldlS",row:"row--Z9DN5"};const E=l}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+button@0.19.7_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/styles.module.css":((D,C,e)=>{"use strict";e.d(C,{A:()=>E});var r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),u=e.n(r),R=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),i=e.n(R),l=i()(u());l.push([D.id,`.button--RJPL_[data-size=xs] .label--CtV07{
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
}`,""]),l.locals={button:"button--RJPL_",label:"label--CtV07",icon:"icon--DASq3"};const E=l}),"./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js":((D,C,e)=>{var r="Expected a function",u=NaN,R="[object Symbol]",i=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,Q=/^0o[0-7]+$/i,g=parseInt,K=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,A=typeof self=="object"&&self&&self.Object===Object&&self,z=K||A||Function("return this")(),pe=Object.prototype,_e=pe.toString,N=Math.max,ee=Math.min,te=function(){return z.Date.now()};function se(d,f,k){var v,S,O,y,x,h,j=0,T=!1,B=!1,Y=!0;if(typeof d!="function")throw new TypeError(r);f=M(f)||0,ae(k)&&(T=!!k.leading,B="maxWait"in k,O=B?N(M(k.maxWait)||0,f):O,Y="trailing"in k?!!k.trailing:Y);function ne(P){var J=v,V=S;return v=S=void 0,j=P,y=d.apply(V,J),y}function oe(P){return j=P,x=setTimeout(w,f),T?ne(P):y}function W(P){var J=P-h,V=P-j,Pe=f-J;return B?ee(Pe,O-V):Pe}function re(P){var J=P-h,V=P-j;return h===void 0||J>=f||J<0||B&&V>=O}function w(){var P=te();if(re(P))return je(P);x=setTimeout(w,W(P))}function je(P){return x=void 0,Y&&v?ne(P):(v=S=void 0,y)}function Z(){x!==void 0&&clearTimeout(x),j=0,v=h=S=x=void 0}function Oe(){return x===void 0?y:je(te())}function be(){var P=te(),J=re(P);if(v=arguments,S=this,h=P,J){if(x===void 0)return oe(h);if(B)return x=setTimeout(w,f),ne(h)}return x===void 0&&(x=setTimeout(w,f)),y}return be.cancel=Z,be.flush=Oe,be}function ae(d){var f=typeof d;return!!d&&(f=="object"||f=="function")}function F(d){return!!d&&typeof d=="object"}function me(d){return typeof d=="symbol"||F(d)&&_e.call(d)==R}function M(d){if(typeof d=="number")return d;if(me(d))return u;if(ae(d)){var f=typeof d.valueOf=="function"?d.valueOf():d;d=ae(f)?f+"":f}if(typeof d!="string")return d===0?d:+d;d=d.replace(i,"");var k=E.test(d);return k||Q.test(d)?g(d.slice(2),k?2:8):l.test(d)?u:+d}D.exports=se})}]);})();
