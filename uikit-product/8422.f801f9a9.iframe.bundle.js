"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[8422],{"./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js":((Q,K,i)=>{i.d(K,{A:()=>He});var a=i("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),T=i("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=function(b,Y){var M={};for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&Y.indexOf(p)<0&&(M[p]=b[p]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,p=Object.getOwnPropertySymbols(b);E<p.length;E++)Y.indexOf(p[E])<0&&Object.prototype.propertyIsEnumerable.call(b,p[E])&&(M[p[E]]=b[p[E]]);return M};const r=T.forwardRef((b,Y)=>{var{size:M=24}=b,p=y(b,["size"]);p.width=void 0,p.height=void 0;const E="-kebab-s";return typeof M=="number"&&(p.style||(p.style={}),p.style.width=M+"px",p.style.height=M+"px"),(0,a.jsx)("svg",Object.assign({ref:Y,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+E},p,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+E.substring(1)})}))});var R=function(b,Y){var M={};for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&Y.indexOf(p)<0&&(M[p]=b[p]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,p=Object.getOwnPropertySymbols(b);E<p.length;E++)Y.indexOf(p[E])<0&&Object.prototype.propertyIsEnumerable.call(b,p[E])&&(M[p[E]]=b[p[E]]);return M};const G=T.forwardRef((b,Y)=>{var{size:M=24}=b,p=R(b,["size"]);p.width=void 0,p.height=void 0;const E="-kebab-xs";return typeof M=="number"&&(p.style||(p.style={}),p.style.width=M+"px",p.style.height=M+"px"),(0,a.jsx)("svg",Object.assign({ref:Y,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+E},p,{children:(0,a.jsx)("use",{href:"#snack-uikit-"+E.substring(1)})}))});var it=function(b,Y){var M={};for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&Y.indexOf(p)<0&&(M[p]=b[p]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,p=Object.getOwnPropertySymbols(b);E<p.length;E++)Y.indexOf(p[E])<0&&Object.prototype.propertyIsEnumerable.call(b,p[E])&&(M[p[E]]=b[p[E]]);return M};const He=(0,T.forwardRef)((b,Y)=>{var{size:M=24}=b,p=it(b,["size"]);return Number(M)>=20?(0,a.jsx)(r,Object.assign({ref:Y,size:M},p)):(0,a.jsx)(G,Object.assign({ref:Y,size:M},p))})}),"./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js":((Q,K,i)=>{i.d(K,{i:()=>Ms});var a=i("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),T=i("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),y=i.n(T),N=i("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),r=i("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),R=i("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),Be=i("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js");const G={default:"~main",pinTop:"~pinTop",pinBottom:"~pinBottom",footer:"~footer",search:"~search",dropFocus:"~dropFocus"};var it=i("./node_modules/.pnpm/@snack-uikit+button@0.19.16_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),We=i("./node_modules/.pnpm/@snack-uikit+divider@3.2.10_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),He=i("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),b=i("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),Y=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};const M=(0,r.createContext)({flattenItems:{},focusFlattenItems:{},firstItemId:G.default});function p(){return(0,r.useContext)(M)}function E({size:e,marker:o,flattenItems:n,focusFlattenItems:t,contentRender:s,firstItemId:c,virtualized:d}){return{size:e,marker:o,contentRender:s,flattenItems:n,focusFlattenItems:t,firstItemId:c,virtualized:d}}function rt(e){var{children:o}=e,n=Y(e,["children"]);return(0,a.jsx)(M.Provider,{value:E(n),children:o})}const lt=e=>{e.stopPropagation()},At={s:"xs",m:"s",l:"m"};var zt=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_e=i.n(zt),Mt=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),me=i.n(Mt),Dt=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),fe=i.n(Dt),Lt=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),ve=i.n(Lt),Tt=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),he=i.n(Tt),Bt=i("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),be=i.n(Bt),Xe=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css"),ke={};ke.styleTagTransform=be(),ke.setAttributes=ve(),ke.insert=fe().bind(null,"head"),ke.domAPI=me(),ke.insertStyleElement=he();var Ls=_e()(Xe.A,ke);const Re=Xe.A&&Xe.A.locals?Xe.A.locals:void 0;function vt({label:e,truncate:o,divider:n,mode:t="secondary",selectButton:s}){const{size:c="s"}=p(),{t:d}=(0,He.Ym)("List"),m=(0,r.useMemo)(()=>{if(!s)return null;const{onClick:u,checked:l,itemRef:g,label:f}=s;return(0,a.jsx)("span",{className:Re.selectButton,"data-size":c,"data-weight":n&&t||void 0,children:(0,a.jsx)(it.b,{size:At[c],tabIndex:0,onClick:_=>{u==null||u(_),_.preventDefault(),_.stopPropagation()},onFocus:lt,ref:g,label:f!=null?f:d(l?"groupSelectButton.reset":"groupSelectButton.select")})})},[n,t,s,c,d]);return e?(0,a.jsxs)("div",{className:Re.separatorWithLabel,"data-size":c,children:[(0,a.jsx)("span",{className:Re.label,"data-mode":t,children:(0,a.jsx)(b.m,{variant:o==null?void 0:o.variant,text:e,maxLines:1})}),(0,a.jsxs)("div",{style:{flex:1},children:[m,n&&(0,a.jsx)(We.c,{weight:t==="primary"?"regular":"light",className:Re.divider})]})]}):n?(0,a.jsx)("div",{className:Re.separatorWithoutLabel,"data-size":c,children:(0,a.jsx)(We.c,{weight:"regular"})}):null}const Wt=e=>`${G.footer}__${e}`,ht=(e,o)=>[e,o].join("-"),Ts=e=>ht(ITEM_PREFIXES.default,e);var Rt=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};const Qe=(0,r.createContext)({value:void 0,onChange:void 0,mode:void 0});function Kt(e){return"mode"in e&&e.mode==="multiple"}function Nt(e){return"mode"in e&&e.mode==="single"}function Ft({children:e}){return(0,a.jsx)(Qe.Provider,{value:{mode:"none"},children:e})}function Ut({value:e,defaultValue:o,onChange:n,children:t}){const[s,c]=(0,Be.I)({value:e,defaultValue:o,onChange:n}),d=(0,r.useCallback)(m=>c(u=>{if(m!==u)return m}),[c]);return(0,a.jsx)(Qe.Provider,{value:{value:s,onChange:d,mode:"single",isSelectionSingle:!0,isSelectionMultiple:!1,setValue:c},children:t})}function Ht({value:e,defaultValue:o,onChange:n,children:t}){const[s,c]=(0,Be.I)({value:e,defaultValue:o,onChange:n}),d=(0,r.useCallback)(m=>{c(u=>{if(Array.isArray(u))return u.includes(m)?u.filter(l=>l!==m):u.concat(m);if(u===void 0)return Array.isArray(m)?m:[m]})},[c]);return(0,a.jsx)(Qe.Provider,{value:{value:s,onChange:d,mode:"multiple",isSelectionSingle:!1,isSelectionMultiple:!0,setValue:c},children:t})}function Xt(e){var{children:o}=e,n=Rt(e,["children"]);return Nt(n)?(0,a.jsx)(Ut,Object.assign({},n,{children:o})):Kt(n)?(0,a.jsx)(Ht,Object.assign({},n,{children:o})):(0,a.jsx)(Ft,{children:o})}function je(){return(0,r.useContext)(Qe)}var Qt=i("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),Zt=i("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),Ze=i("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),Ge=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css"),Se={};Se.styleTagTransform=be(),Se.setAttributes=ve(),Se.insert=fe().bind(null,"head"),Se.domAPI=me(),Se.insertStyleElement=he();var Bs=_e()(Ge.A,Se);const dt=Ge.A&&Ge.A.locals?Ge.A.locals:void 0;var Gt=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};function Jt(e){var{children:o,expanded:n,className:t,header:s}=e,c=Gt(e,["children","expanded","className","header"]);return(0,a.jsxs)("div",Object.assign({className:y()(dt.accordion,t),role:"menuitem","aria-haspopup":!0,"aria-expanded":n},(0,Ze.z7)(c),{children:[s,(0,a.jsx)("div",{className:dt.contentWrapper,"aria-hidden":!n,children:(0,a.jsx)("div",{className:dt.content,"data-content":!0,children:n&&o})})]}))}const bt=(0,r.createContext)({}),gt=()=>(0,r.useContext)(bt),yt=(0,r.createContext)({}),xt=()=>(0,r.useContext)(yt);var Yt=i("./node_modules/.pnpm/@snack-uikit+toggles@0.13.22_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Checkbox/Checkbox.js"),Vt=i("./node_modules/.pnpm/@snack-uikit+toggles@0.13.22_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/toggles/dist/esm/components/Switch/Switch.js"),Je=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css"),Ce={};Ce.styleTagTransform=be(),Ce.setAttributes=ve(),Ce.insert=fe().bind(null,"head"),Ce.domAPI=me(),Ce.insertStyleElement=he();var Ws=_e()(Je.A,Ce);const Ke=Je.A&&Je.A.locals?Je.A.locals:void 0;var $t=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};const qt={option:1,description:2,variant:"end"};function es(e){var{truncate:o,caption:n,description:t,option:s,className:c,disabled:d}=e,m=$t(e,["truncate","caption","description","option","className","disabled"]);const{size:u="s"}=p(),l=(0,r.useMemo)(()=>Object.assign(Object.assign({},qt),o),[o]);return(0,a.jsxs)("div",Object.assign({className:y()(Ke.content,c)},(0,Ze.z7)(m),{"data-size":u!=null?u:"s","data-disabled":d||void 0,children:[(0,a.jsxs)("div",{className:Ke.headline,children:[(0,a.jsx)("div",{className:Ke.label,children:(0,a.jsx)(b.m,{variant:l.variant,text:String(s),maxLines:l.option,"data-test-id":"list__base-item-option"})}),n&&(0,a.jsx)("span",{className:Ke.caption,children:n})]}),t&&(0,a.jsx)("div",{className:Ke.description,children:(0,a.jsx)(b.m,{text:t,maxLines:l.description,"data-test-id":"list__base-item-description"})})]}))}const It=(0,r.createContext)({closeDroplist:()=>{},closeDroplistOnItemClick:!1}),ts=()=>(0,r.useContext)(It);var Ye=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css"),Oe={};Oe.styleTagTransform=be(),Oe.setAttributes=ve(),Oe.insert=fe().bind(null,"head"),Oe.domAPI=me(),Oe.insertStyleElement=he();var Rs=_e()(Ye.A,Oe);const ct=Ye.A&&Ye.A.locals?Ye.A.locals:void 0;var ss=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};function ns(e){return e&&!("items"in e)}function os(e){return e&&"items"in e&&e.type==="collapse"}function kt(e){return e&&"items"in e&&e.type==="next-list"}function Ve(e){return e&&"items"in e&&e.type==="group"}function jt(e){return e&&"items"in e&&e.type==="group-select"}function as(e){return typeof e=="object"&&e.option!==void 0}const Ks=null,Ns=null,Fs=null,Us=null;function pt({items:e,prefix:o,parentId:n}){const t={},s={};function c({item:f,idx:_,prefix:v,parentId:P=G.default}){var h,F;const x=v!==void 0?ht(v,_):String(_),I=(h=Ve(f)?void 0:f.id)!==null&&h!==void 0?h:x;if(ns(f))return t[I]=Object.assign(Object.assign({},f),{items:[],allChildIds:[],id:I}),s[x]={key:x,originalId:I,id:x,disabled:f.disabled,parentId:P,items:[],allChildIds:[],itemRef:f.itemRef||(0,r.createRef)()},{id:I,children:[I],autoId:x,focusChildren:[x]};let U=[],k=[];const Z=[],J=[],{items:q}=f,te=ss(f,["items"]),D=Ve(f)?P!=null?P:G.default:x,w=q.filter(S=>!S.hidden);for(let S=0;S<w.length;S++){const{id:V,children:ee,autoId:oe,focusChildren:H}=c({item:w[S],idx:S,prefix:I,parentId:D});J.push(oe),Z.push(V),U=U.concat(ee),k=k.concat(H)}const j=[...new Set(U.concat(Z))],B=[...new Set(k.concat(J))];return t[I]=Object.assign(Object.assign({},te),{id:I,items:[],allChildIds:j}),s[x]={key:x,originalId:I,id:x,parentId:P,items:J,allChildIds:B,disabled:(f.type==="collapse"||f.type==="next-list")&&f.disabled,type:f.type,itemRef:Ve(f)?void 0:(F=f.itemRef)!==null&&F!==void 0?F:(0,r.createRef)()},{id:I,children:j,autoId:x,focusChildren:B}}const d=[],m=[];let u=[];const l=e.filter(f=>!f.hidden);for(let f=0;f<l.length;f++){const{id:_,children:v,autoId:P}=c({item:l[f],idx:f,prefix:o,parentId:n});m.push(P),d.push(_),u.push(_),u=u.concat(v)}const g=[...new Set(u)];return{focusCloseChildIds:m,allChildIds:g,flattenItems:t,focusFlattenItems:s}}function St({focusFlattenItems:e,focusCloseChildIds:o,openCollapseItems:n,isSelectionMultiple:t}){const s=[],c=[];function d(m){m.forEach(u=>{const l=e[u];if(l.type==="group"){d(l.items);return}if(!l.disabled){if(l.type==="group-select"){t&&s.push(l.id),d(l.items);return}s.push(l.id),l.type&&(c.push(u),n.includes(l.originalId)&&d(l.items))}})}return d(o),{ids:s,expandedIds:c}}const is={s:"s",m:"s",l:"m"};var $e=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css"),Ee={};Ee.styleTagTransform=be(),Ee.setAttributes=ve(),Ee.insert=fe().bind(null,"head"),Ee.domAPI=me(),Ee.insertStyleElement=he();var Hs=_e()($e.A,Ee);const Ie=$e.A&&$e.A.locals?$e.A.locals:void 0;var rs=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};function ut(e){var o,{beforeContent:n,afterContent:t,content:s,onClick:c,onMouseDown:d,id:m,expandIcon:u,disabled:l,open:g,itemRef:f,switch:_,showSwitchIcon:v,onKeyDown:P,onFocus:h,indeterminate:F,checked:x,onSelect:I,onOpenNestedList:U,isParentNode:k,className:Z,inactive:J,itemWrapRender:q}=e,te=rs(e,["beforeContent","afterContent","content","onClick","onMouseDown","id","expandIcon","disabled","open","itemRef","switch","showSwitchIcon","onKeyDown","onFocus","indeterminate","checked","onSelect","onOpenNestedList","isParentNode","className","inactive","itemWrapRender"]);const D=!J,{size:w="s",marker:j,contentRender:B,firstItemId:S,focusFlattenItems:V}=p(),{level:ee=0}=gt(),{closeDroplist:oe,closeDroplistOnItemClick:H}=ts(),{value:ae,onChange:ce,mode:A,isSelectionSingle:ie,isSelectionMultiple:de}=je(),se=ie?x!=null?x:ae===m:x!=null?x:ae==null?void 0:ae.includes(m!=null?m:""),ge=()=>{ce==null||ce(m)},De=z=>{l||d==null||d(z)},ne=z=>{h==null||h(z),z.stopPropagation()},ye=()=>{k&&I?I():ge()},re=z=>{l||(c==null||c(z),D&&(k||ge()),!de&&H&&oe())},xe=z=>{if(P==null||P(z),z.key==="ArrowRight"&&U){U(z),z.preventDefault(),z.stopPropagation();return}(z.code==="Space"||z.key==="Enter"||z.key===" ")&&(de&&k&&I&&I(),!k&&ge(),!k&&(re==null||re(z)),z.stopPropagation(),z.preventDefault())},pe=z=>{k&&z.stopPropagation()},L=(0,Ze.z7)(te),le=(0,a.jsx)("div",{className:y()(ct.itemWrapper,Ie.innerWrapper,Z),"data-inactive":J||void 0,"data-disabled":l||void 0,"data-variant":A||void 0,"data-checked":k&&se||!k&&se&&!_||void 0,children:(0,a.jsxs)("li",{"data-type":"outside",role:"menuitem","data-test-id":L["data-test-id"]||"list__base-item_"+m,ref:f,className:y()(ct.listItem,Ie.droplistItem),"data-size":w,onClick:re,onMouseDown:De,tabIndex:S&&m===V[S].originalId?0:-1,"data-non-pointer":J&&!c,"data-variant":A||void 0,"data-open":g||void 0,onKeyDown:xe,onFocus:ne,style:{"--level":ee},"data-level-one":ee===1||void 0,"data-level-more-one":ee>1||void 0,"data-checked":k&&(F||se)||se&&!_||void 0,children:[!_&&ie&&j&&!k&&D&&(0,a.jsx)("div",{className:Ie.markerContainer,"data-test-id":"list__base-item-marker"}),!_&&de&&D&&(0,a.jsx)("div",{className:Ie.checkbox,children:(0,a.jsx)(Yt.S,{size:is[w!=null?w:"s"],disabled:l,tabIndex:-1,onChange:k?ye:void 0,checked:se,"data-test-id":"list__base-item-checkbox",onClick:pe,indeterminate:F})}),n&&(0,a.jsx)("div",{className:Ie.beforeContent,children:n}),s&&as(s)?(o=B==null?void 0:B({id:m,content:s,disabled:l}))!==null&&o!==void 0?o:(0,a.jsx)(es,Object.assign({disabled:l},s)):(0,a.jsxs)("div",{className:Ie.content,children:[" ",s," "]}),t,_&&D&&(0,a.jsx)(Vt.d,{disabled:l,checked:se,"data-test-id":"list__base-item-switch",showIcon:v}),!_&&u&&(0,a.jsx)("span",{className:Ie.expandableIcon,children:u})]})});return q?q(le):le}var ls=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};function ds(e){var{id:o,disabled:n,allChildIds:t,items:s}=e,c=ls(e,["id","disabled","allChildIds","items"]);const{level:d=0}=gt(),{openCollapseItems:m=[],toggleOpenCollapseItem:u}=xt(),{value:l,isSelectionSingle:g,isSelectionMultiple:f}=je(),{indeterminate:_,handleOnSelect:v,checked:P}=ft({items:s,id:o,disabled:n,allChildIds:t}),h=!!m.includes(o!=null?o:""),F=!!(_&&!h&&g&&l&&t.includes(l)||f&&P),x=(0,r.useCallback)(()=>{u==null||u(o!=null?o:"")},[o,u]),I=Ue(s),U=k=>{var Z;u==null||u(o!=null?o:""),(Z=c.onClick)===null||Z===void 0||Z.call(c,k)};return(0,a.jsx)(Jt,{header:(0,a.jsx)(ut,Object.assign({},c,{id:o,disabled:n,expandIcon:h?(0,a.jsx)(Qt.A,{}):(0,a.jsx)(Zt.A,{}),onClick:U,isParentNode:!0,onOpenNestedList:x,checked:F,indeterminate:_,onSelect:n?void 0:v})),expanded:h,"data-test-id":`list__accordion-item-${o}`,children:(0,a.jsx)(bt.Provider,{value:{level:d+1},children:I})})}function cs({label:e,truncate:o,divider:n,items:t,mode:s,id:c,itemRef:d,allChildIds:m,selectButtonLabel:u}){const{indeterminate:l,checked:g,handleOnSelect:f}=ft({items:t,id:c,disabled:!1,allChildIds:m}),_=Ue(t);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(vt,{label:e,truncate:o,divider:n,mode:s,selectButton:{indeterminate:l,checked:g,itemRef:d,onClick:f,label:u}}),_]})}var ps=i("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js");const Ct=(0,r.createContext)({handleListKeyDownFactory:()=>()=>{}}),us=()=>(0,r.useContext)(Ct);var _s=i("./node_modules/.pnpm/@tanstack+react-virtual@3.11.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@tanstack/react-virtual/dist/esm/index.js"),ms=i("./node_modules/.pnpm/@snack-uikit+loaders@0.9.9_react@18.2.0/node_modules/@snack-uikit/loaders/dist/esm/components/Spinner/Spinner.js"),fs=i("./node_modules/.pnpm/@snack-uikit+scroll@0.10.5_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),vs=i("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js"),hs=i("./node_modules/.pnpm/@snack-uikit+icons@0.27.3/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js");function bs({noDataState:e,noResultsState:o,errorDataState:n}){const{t}=(0,He.Ym)("List");return(0,r.useMemo)(()=>{const s=Object.assign({icon:{icon:vs.A,appearance:"neutral",decor:!0},description:t("noData.description")},e),c=Object.assign({description:t("noResults.description")},o),d=Object.assign({icon:{icon:hs.A,appearance:"neutral",decor:!0},description:t("errorData.description")},n);return{noDataState:s,noResultsState:c,errorDataState:d}},[n,e,o,t])}var _t=i("./node_modules/.pnpm/@snack-uikit+info-block@0.6.33_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/info-block/dist/esm/components/index.js"),qe=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css"),Pe={};Pe.styleTagTransform=be(),Pe.setAttributes=ve(),Pe.insert=fe().bind(null,"head"),Pe.domAPI=me(),Pe.insertStyleElement=he();var Xs=_e()(qe.A,Pe);const mt=qe.A&&qe.A.locals?qe.A.locals:void 0;function gs({dataError:e,dataFiltered:o,hasNoItems:n,emptyStates:t,loading:s,size:c}){return s?null:e?(0,a.jsx)("div",{className:mt.listEmptyStateWrapper,children:(0,a.jsx)(_t.O,Object.assign({},t.errorDataState,{size:c,align:"vertical"}))}):o&&n?(0,a.jsx)("div",{className:mt.listEmptyStateWrapper,children:(0,a.jsx)(_t.O,Object.assign({},t.noResultsState,{size:c,align:"vertical","data-test-id":"list__no-results"}))}):!o&&n?(0,a.jsx)("div",{className:mt.listEmptyStateWrapper,children:(0,a.jsx)(_t.O,Object.assign({},t.noDataState,{size:c,align:"vertical","data-test-id":"list__no-data"}))}):null}var et=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css"),we={};we.styleTagTransform=be(),we.setAttributes=ve(),we.insert=fe().bind(null,"head"),we.domAPI=me(),we.insertStyleElement=he();var Qs=_e()(et.A,we);const Ot=et.A&&et.A.locals?et.A.locals:void 0;function ys({children:e}){const{size:o="s"}=p();return e?(0,a.jsxs)("div",{className:y()(Ot.pinTopItem),"data-size":o,"data-test-id":"list__pin-top-group-item",children:[(0,a.jsx)("div",{children:e}),(0,a.jsx)(We.c,{weight:"regular"})]}):null}function xs({children:e}){const{size:o="s"}=p();return e?(0,a.jsxs)("div",{className:y()(Ot.pinBottomItem),"data-size":o,"data-test-id":"list__pin-bottom-group-item",children:[(0,a.jsx)(We.c,{weight:"regular"}),(0,a.jsx)("div",{children:e})]}):null}var Is=i("./node_modules/.pnpm/@snack-uikit+search-private@0.4.31_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react@18.2.0/node_modules/@snack-uikit/search-private/dist/esm/components/SearchPrivate/SearchPrivate.js"),tt=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css"),Ae={};Ae.styleTagTransform=be(),Ae.setAttributes=ve(),Ae.insert=fe().bind(null,"head"),Ae.domAPI=me(),Ae.insertStyleElement=he();var Zs=_e()(tt.A,Ae);const ks=tt.A&&tt.A.locals?tt.A.locals:void 0;function js({search:e,itemRef:o}){const{size:n="s",firstItemId:t}=p(),s=c=>{var d;["ArrowDown","ArrowUp"].includes(c.key)&&c.preventDefault(),(d=e==null?void 0:e.onKeyDown)===null||d===void 0||d.call(e,c)};return e?(0,a.jsx)("div",{className:y()(ct.listItem,ks.searchItem),"data-size":n,"data-test-id":"list__search-item",children:(0,a.jsx)(Is.s,Object.assign({size:n,tabIndex:G.search===t?0:-1,onKeyDown:s,onFocus:lt},e,{ref:o}))}):null}var st=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),ze={};ze.styleTagTransform=be(),ze.setAttributes=ve(),ze.insert=fe().bind(null,"head"),ze.domAPI=me(),ze.insertStyleElement=he();var Gs=_e()(st.A,ze);const Ne=st.A&&st.A.locals?st.A.locals:void 0,Ss={m:40,s:32,l:48};var nt=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css"),Me={};Me.styleTagTransform=be(),Me.setAttributes=ve(),Me.insert=fe().bind(null,"head"),Me.domAPI=me(),Me.insertStyleElement=he();var $s=_e()(nt.A,Me);const Fe=nt.A&&nt.A.locals?nt.A.locals:void 0;var Cs=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};const Et=(0,r.forwardRef)((e,o)=>{var n,{items:t,pinTop:s,pinBottom:c,onKeyDown:d,onBlur:m,onFocus:u,tabIndex:l,active:g,scroll:f,nested:_,search:v,searchItem:P,scrollRef:h,scrollContainerRef:F,onScroll:x,footer:I,loading:U,limitedScrollHeight:k,untouchableScrollbars:Z,className:J,noDataState:q,noResultsState:te,errorDataState:D,dataError:w,dataFiltered:j,scrollToSelectedItem:B=!1,virtualized:S=!1,scrollContainerClassName:V,barHideStrategy:ee="never"}=e,oe=Cs(e,["items","pinTop","pinBottom","onKeyDown","onBlur","onFocus","tabIndex","active","scroll","nested","search","searchItem","scrollRef","scrollContainerRef","onScroll","footer","loading","limitedScrollHeight","untouchableScrollbars","className","noDataState","noResultsState","errorDataState","dataError","dataFiltered","scrollToSelectedItem","virtualized","scrollContainerClassName","barHideStrategy"]);const{size:H="s",flattenItems:ae,focusFlattenItems:ce}=p(),{value:A,isSelectionSingle:ie}=je(),de=(0,r.useRef)(null),se=Ue(t),ge=Ue(s),De=Ue(c),[ne,ye]=(0,r.useState)({virtualizer:null,browser:null,measured:!1}),re=bs({noDataState:q,noResultsState:te,errorDataState:D}),xe=t.length===0,{selectedItemIndex:pe,selectedItem:L}=(0,r.useMemo)(()=>{const O={selectedItemIndex:-1,selectedItem:void 0};if(!B||!A)return O;const W=ie?ae[A]:ae[A[0]];if(!(W!=null&&W.id))return O;const Le=Object.values(ce),Te=Le.findIndex(Ds=>Ds.originalId===W.id);return Te<0?O:{selectedItemIndex:Te,selectedItem:Le[Te]}},[ae,ce,ie,B,A]),le=(0,_s.Te)({count:se.length,getScrollElement:()=>f?de.current:null,estimateSize:()=>Ss[H],enabled:S,overscan:5}),z=le.getVirtualItems();(0,r.useEffect)(()=>{ne.measured||(le.measure(),ye(O=>Object.assign(Object.assign({},O),{measured:!0})))},[ne.measured,le]);const ot=f&&B&&S;(0,r.useEffect)(()=>{var O;if(ot){if(!ne.measured||pe<0||!L||ne.virtualizer===L.originalId||L!=null&&L.itemRef&&(!((O=de.current)===null||O===void 0)&&O.contains(L==null?void 0:L.itemRef.current)))return;le.scrollToIndex(pe,{align:"center"}),ye(W=>Object.assign(Object.assign({},W),{virtualizer:L.originalId}))}},[ot,ne,L,pe,le]);const at=!!(!((n=L==null?void 0:L.itemRef)===null||n===void 0)&&n.current);(0,r.useEffect)(()=>{var O,W;L&&ne.virtualizer!==null&&at&&ne.virtualizer!==ne.browser&&((W=(O=L.itemRef)===null||O===void 0?void 0:O.current)===null||W===void 0||W.scrollIntoView({block:"center"}),ye(Le=>Object.assign(Object.assign({},Le),{browser:L.originalId})))},[ne,L,at,pe]);const C=(0,r.useMemo)(()=>U&&(0,a.jsx)("div",{role:"spinbutton",tabIndex:-1,className:Fe.loader,"data-size":H,"data-no-items":xe||void 0,"data-test-id":"list__loader",children:(0,a.jsx)(ms.y,{size:H==="l"?"s":"xs"})}),[xe,U,H]),X=(0,r.useMemo)(()=>(0,a.jsxs)(a.Fragment,{children:[S?(0,a.jsx)("div",{className:Fe.virtualizedContainer,style:{height:le.getTotalSize()},tabIndex:-1,children:z.map(O=>(0,a.jsx)("div",{"data-index":O.index,ref:le.measureElement,tabIndex:-1,className:Fe.virtualizedPositionBox,style:{transform:`translateY(${O.start}px)`},children:se[O.index]},O.key))}):se,C,(0,a.jsx)(gs,{loading:U,dataError:w,emptyStates:re,hasNoItems:xe,dataFiltered:j!=null?j:!!(v!=null&&v.value),size:H})]}),[w,j,re,xe,se,U,C,v==null?void 0:v.value,H,z,S,le]),$=(0,r.useCallback)(()=>{var O,W;L&&((W=(O=L==null?void 0:L.itemRef)===null||O===void 0?void 0:O.current)===null||W===void 0||W.scrollIntoView({block:"center"}))},[L]),ue=(0,a.jsxs)("ul",Object.assign({className:y()(Ne.listContainer,J),ref:o,onKeyDown:d,tabIndex:l,onFocus:u,onBlur:m,"data-active":g||void 0,role:"menu"},(0,Ze.z7)(oe),{children:[(Number(s==null?void 0:s.length)>0||v)&&(0,a.jsxs)(ys,{children:[v&&(0,a.jsx)(js,Object.assign({search:v},P)),Number(s==null?void 0:s.length)>0&&ge]}),f?(0,a.jsxs)(fs.O,{className:y()({[Ne.scrollContainerS]:f&&k&&H==="s",[Ne.scrollContainerM]:f&&k&&H==="m",[Ne.scrollContainerL]:f&&k&&H==="l"},V),barHideStrategy:ee,size:"s",ref:(0,N.A)(de,F),untouchableScrollbars:Z,onScroll:x,onInitialized:$,children:[X,(0,a.jsx)("div",{className:Fe.scrollStub,ref:h})]}):(0,a.jsx)(a.Fragment,{children:X}),Number(c==null?void 0:c.length)>0&&(0,a.jsx)(xs,{children:De}),I&&(0,a.jsx)("div",{className:Fe.footer,onFocus:lt,children:I})]}));return _?(0,a.jsx)("li",{style:{listStyleType:"none"},role:"menuitem",children:ue}):ue}),Os=["right","right-start","right-end","left","left-start","left-end","bottom","top"];var Es=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};function Ps(e){var{items:o,placement:n="right-start",id:t,scroll:s,scrollRef:c,disabled:d,onSublistOpenChanged:m,allChildIds:u,loading:l=!1,focusId:g=t,untouchableScrollbars:f=!1}=e,_=Es(e,["items","placement","id","scroll","scrollRef","disabled","onSublistOpenChanged","allChildIds","loading","focusId","untouchableScrollbars"]);const{flattenItems:v,focusFlattenItems:P,virtualized:h}=p(),{value:F,isSelectionSingle:x,isSelectionMultiple:I}=je(),{openCollapseItems:U=[]}=xt(),k=v[t],{ids:Z,expandedIds:J}=(0,r.useMemo)(()=>{const{ids:A,expandedIds:ie}=St({focusCloseChildIds:o,focusFlattenItems:P,openCollapseItems:U,isSelectionMultiple:I});return{ids:A,expandedIds:ie.concat([t])}},[P,t,I,o,U]),{handleListKeyDownFactory:q,activeItemId:te,forceUpdateActiveItemId:D}=us(),[w,j]=(0,r.useState)(),B=(0,r.useCallback)(A=>{if(q(Z,J)(A),A.key==="ArrowLeft"){D==null||D(g),j(!1),A.stopPropagation();return}},[q,Z,J,D,g]),{indeterminate:S,checked:V,handleOnSelect:ee}=ft({items:kt(k)?k.items:[],id:t,disabled:d,allChildIds:u}),oe=(0,r.useCallback)(()=>(D==null||D(G.dropFocus),j(!1),!0),[D]),H=(0,r.useMemo)(()=>!!(!d&&te&&P[g].allChildIds.includes(te)),[te,d,P,g]),ae=!!(S&&!w&&x&&F&&u.includes(F)||I&&V);(0,r.useEffect)(()=>{j(A=>A&&H)},[t,H]);const ce=(0,r.useRef)(null);return(0,a.jsx)(R.m,{outsideClick:oe,fallbackPlacements:Os,content:(0,a.jsx)(Et,{onKeyDown:B,items:o,nested:!0,scroll:s,virtualized:h,tabIndex:0,ref:ce,onFocus:A=>{A.stopPropagation(),D==null||D(Z[0])},scrollRef:c,limitedScrollHeight:!0,untouchableScrollbars:f,loading:l}),trigger:"hover",open:H||w,onOpenChange:A=>{j(A),m==null||m(A,t)},placement:n,widthStrategy:"auto",children:(0,a.jsx)(ut,Object.assign({},_,{disabled:d,open:w,expandIcon:(0,a.jsx)(ps.A,{}),id:t,isParentNode:!0,indeterminate:S,checked:ae,onOpenNestedList:()=>{j(!0),setTimeout(()=>{var A;(A=ce.current)===null||A===void 0||A.focus()},0)},onSelect:ee}))})}function Pt({focusCloseChildIds:e,focusFlattenItems:o,flattenItems:n,isSelectionMultiple:t}){return e?e.flatMap(s=>{const{itemRef:c,key:d,originalId:m,items:u}=o[s],l=n[m];if(Ve(l)||!t&&jt(l)){const g=Pt({focusCloseChildIds:u,focusFlattenItems:o,flattenItems:n,isSelectionMultiple:t});return[(0,a.jsx)(vt,{label:l.label,truncate:l.truncate,divider:l.divider,mode:l.mode},d+"_separator"),...g]}return jt(l)?(0,r.createElement)(cs,Object.assign({},l,{items:u,itemRef:c,key:d})):os(l)?(0,r.createElement)(ds,Object.assign({},l,{items:u,itemRef:c,key:d})):kt(l)?(0,r.createElement)(Ps,Object.assign({},l,{focusId:s,items:u,itemRef:c,key:d})):(0,r.createElement)(ut,Object.assign({},l,{itemRef:c,key:d}))}):[null]}function Ue(e){const{focusFlattenItems:o,flattenItems:n}=p(),{isSelectionMultiple:t}=je();return(0,r.useMemo)(()=>Pt({flattenItems:n,focusFlattenItems:o,focusCloseChildIds:e,isSelectionMultiple:t}),[n,e,o,t])}function ws({footerActiveElementsRefs:e}){return(0,r.useMemo)(()=>{var o;return{searchItem:{itemRef:(0,r.createRef)(),id:G.search,parentId:G.default,items:[],allChildIds:[]},footerItems:(o=e==null?void 0:e.map((n,t)=>({id:Wt(t),itemRef:n,parentId:G.default,items:[],allChildIds:[]})))!==null&&o!==void 0?o:[]}},[e])}function ft({id:e,allChildIds:o}){const{value:n,setValue:t,isSelectionMultiple:s}=je(),{flattenItems:c}=p(),d=(0,r.useMemo)(()=>o.filter(_=>{const v=c[_];return v&&!("type"in v)}),[o,c]),m=(0,r.useMemo)(()=>d.filter(_=>{const v=c[_];return v&&!("type"in v)&&!v.disabled}),[d,c]),u=s?n&&!!n.length&&d.every(_=>n==null?void 0:n.includes(_)):void 0,l=s?n&&!!n.length&&m.every(_=>n==null?void 0:n.includes(_)):void 0,g=s?!u&&d.some(_=>n==null?void 0:n.includes(_)):d.includes(n!=null?n:"");return{checked:u,indeterminate:g,handleOnSelect:()=>{if(u||l){t==null||t(_=>(_!=null?_:[]).filter(v=>v!==e&&!m.includes(v)));return}t==null||t(_=>Array.from(new Set([..._!=null?_:[],...m])))}}}function As({mainRef:e,btnRef:o,focusFlattenItems:n,keyboardNavigationRef:t,hasListInFocusChain:s,firstItemId:c}){const d=s?void 0:c,[m,u]=(0,r.useState)(()=>d),l=(0,r.useRef)(d),g=(0,r.useCallback)(()=>{u(d),l.current=d},[d]),f=(0,r.useCallback)((v,P)=>h=>{var F,x,I,U,k,Z,J,q,te,D;switch(h.key){case"ArrowDown":{if(l.current!==void 0){const w=v.findIndex(V=>V===l.current),j=Math.min(w+1,v.length-1),B=v[j],S=n[B];l.current=B,u(B),S.type!=="group"&&((x=(F=S.itemRef)===null||F===void 0?void 0:F.current)===null||x===void 0||x.focus())}else{const w=v[0],j=n[w];l.current=w,u(w),j.type!=="group"&&((U=(I=j.itemRef)===null||I===void 0?void 0:I.current)===null||U===void 0||U.focus())}h.stopPropagation(),h.preventDefault();return}case"ArrowUp":{if(v[0]===l.current)s&&n[v[0]].parentId===G.default&&(l.current=void 0,u(void 0),(k=e==null?void 0:e.current)===null||k===void 0||k.focus());else if(l.current!==void 0){const w=v.findIndex(V=>V===l.current),j=Math.max(w-1,0),B=v[j],S=n[B];l.current=B,u(B),S.type!=="group"&&((J=(Z=S.itemRef)===null||Z===void 0?void 0:Z.current)===null||J===void 0||J.focus())}h.stopPropagation(),h.preventDefault();return}case"ArrowRight":{if(l.current!==void 0&&P.includes(l.current)){const j=n[l.current].items[0],B=n[j];l.current=j,u(j),setTimeout(()=>{var S,V;return(V=(S=B.itemRef)===null||S===void 0?void 0:S.current)===null||V===void 0?void 0:V.focus()},0),h.stopPropagation(),h.preventDefault()}return}case"Tab":{l.current!==void 0?s?(h.preventDefault(),h.stopPropagation(),l.current=void 0,u(void 0),(q=e==null?void 0:e.current)===null||q===void 0||q.focus()):g():o&&!h.shiftKey?(te=o==null?void 0:o.current)===null||te===void 0||te.focus():(D=e==null?void 0:e.current)===null||D===void 0||D.focus();return}default:return}},[n,s,e,g,o]),_=(0,r.useCallback)(v=>{var P,h;u(v),l.current=v;const F=n[v];(h=(P=F==null?void 0:F.itemRef)===null||P===void 0?void 0:P.current)===null||h===void 0||h.focus()},[n]);return(0,r.useImperativeHandle)(t,()=>({focusItem:_}),[_]),{resetActiveItemId:g,activeItemId:m,forceUpdateActiveItemId:_,handleListKeyDownFactory:f}}var wt=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)o.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(n[t[s]]=e[t[s]]);return n};const zs=["top","right","bottom","left"];function Ms(e){var{items:o,search:n,pinBottom:t=[],pinTop:s=[],footerActiveElementsRefs:c,children:d,trigger:m,placement:u,widthStrategy:l,triggerElemRef:g,open:f,onOpenChange:_,collapse:v={},triggerClassName:P,selection:h,contentRender:F,size:x="s",marker:I=!0,closeDroplistOnItemClick:U=!1,className:k,listRef:Z,untouchableScrollbars:J=!1,virtualized:q=!1,closeOnPopstate:te}=e,D=wt(e,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const w=(0,r.useMemo)(()=>!!n,[n]),[j=[],B]=(0,Be.I)(v),S=(0,r.useCallback)(C=>B(X=>X!=null&&X.includes(C)?X.filter($=>$!==C):(X!=null?X:[]).concat([C])),[B]),[V=!1,ee]=(0,Be.I)({value:f,defaultValue:!1,onChange:_}),{searchItem:oe,footerItems:H}=ws({footerActiveElementsRefs:c}),ae=(0,r.useMemo)(()=>{const C=pt({items:s,prefix:G.pinTop,parentId:G.default}),X=pt({items:o,prefix:G.default,parentId:G.default}),$=pt({items:t,prefix:G.pinBottom,parentId:G.default}),ue=Object.assign(Object.assign(Object.assign({},C.flattenItems),$.flattenItems),X.flattenItems),O=Object.assign(Object.assign(Object.assign({},C.focusFlattenItems),$.focusFlattenItems),X.focusFlattenItems);return[...H,oe].forEach(W=>{ue[W.id]=W,O[W.id]=Object.assign(Object.assign({},W),{originalId:W.id,items:[],key:W.id,allChildIds:[]})}),{items:X,pinTop:C,pinBottom:$,flattenItems:ue,focusFlattenItems:O}},[o,s,t,oe,H]),{flattenItems:ce,focusFlattenItems:A}=ae,ie=wt(ae,["flattenItems","focusFlattenItems"]),{ids:de,expandedIds:se}=(0,r.useMemo)(()=>{const{pinTop:C,items:X,pinBottom:$}=ie;let ue=[],O=[];return w&&ue.push(oe.id),[C,X,$].forEach(({focusFlattenItems:W,focusCloseChildIds:Le})=>{const Te=St({focusFlattenItems:W,focusCloseChildIds:Le,openCollapseItems:j,isSelectionMultiple:(h==null?void 0:h.mode)==="multiple"});ue=ue.concat(Te.ids),O=O.concat(Te.expandedIds)}),H.forEach(W=>{ue.push(W.id)}),{ids:ue,expandedIds:O}},[H,w,ie,j,oe.id,h==null?void 0:h.mode]),ge=(0,r.useRef)(null),De=(0,r.useRef)(null),ne=de[0],{handleListKeyDownFactory:ye,resetActiveItemId:re,activeItemId:xe,forceUpdateActiveItemId:pe}=As({mainRef:g!=null?g:ge,focusFlattenItems:A,hasListInFocusChain:!0,firstItemId:ne}),L=(0,r.useCallback)(C=>ye(de,se)(C),[ye,de,se]),le=(0,r.useCallback)(C=>{re(),ee(C)},[re,ee]),z=(0,r.useCallback)((C,X)=>{C.key==="ArrowDown"&&(C.preventDefault(),ee(!0),setTimeout(()=>{var $;re(),($=De.current)===null||$===void 0||$.focus()},0)),C.key==="ArrowUp"&&ee(!1),X==null||X(C)},[re,ee]),ot=(0,r.useMemo)(()=>(0,r.isValidElement)(d),[d]),at=(0,r.useMemo)(()=>{if((0,r.isValidElement)(d)){const C=typeof d.props=="object"?d.props:{};return(0,r.cloneElement)(d,Object.assign(Object.assign({},C),{onKeyDown:X=>{var $;z(X,($=d.props)===null||$===void 0?void 0:$.onKeyDown)}}))}return typeof d=="function"?d({onKeyDown:z}):d},[z,d]);return(0,a.jsx)(rt,{flattenItems:ce,focusFlattenItems:A,contentRender:F,size:x,marker:I,firstItemId:ne,virtualized:q,children:(0,a.jsx)(Xt,Object.assign({},h,{children:(0,a.jsx)(yt.Provider,{value:{openCollapseItems:j,toggleOpenCollapseItem:S},children:(0,a.jsx)(Ct.Provider,{value:{activeItemId:xe,handleListKeyDownFactory:ye,forceUpdateActiveItemId:pe},children:(0,a.jsx)(It.Provider,{value:{closeDroplistOnItemClick:U,closeDroplist:()=>{var C;ee(!1),re(),(C=(g!=null?g:ge).current)===null||C===void 0||C.focus()}},children:(0,a.jsx)(R.m,{content:(0,a.jsx)("div",{className:y()(Ne.wrapper,k),children:(0,a.jsx)(Et,Object.assign({},D,{items:ie.items.focusCloseChildIds,pinTop:ie.pinTop.focusCloseChildIds,pinBottom:ie.pinBottom.focusCloseChildIds,virtualized:q,onKeyDown:L,searchItem:oe,tabIndex:0,ref:(0,N.A)(De,Z),search:n,onFocus:C=>{C.stopPropagation(),pe==null||pe(de[0])},limitedScrollHeight:!0,untouchableScrollbars:J}))}),outsideClick:!0,triggerClassName:P,fallbackPlacements:zs,trigger:m,placement:u,widthStrategy:l,triggerRef:g?ot&&g||void 0:ge,open:V,onOpenChange:le,closeOnPopstate:te,children:at})})})})}))})}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/BaseItem/styles.module.css":((Q,K,i)=>{i.d(K,{A:()=>R});var a=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=i.n(a),y=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),N=i.n(y),r=N()(T());r.push([Q.id,`.checkbox--Wlogi{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--dimension-3m, 24px);
  height:var(--dimension-3m, 24px);
}

.beforeContent--Zn3_I{
  display:inline-flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  width:var(--size-icon-container-s, 24px);
  height:var(--size-icon-container-s, 24px);
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.beforeContent--Zn3_I svg{
  max-width:100%;
  max-height:100%;
}

.expandableIcon--Hcob9{
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  fill:currentColor;
}

.markerContainer--A_Ep_{
  padding-top:var(--space-drop-list-item-marker-container-vertical-padding, 2px);
  padding-bottom:var(--space-drop-list-item-marker-container-vertical-padding, 2px);
  pointer-events:none;
  position:absolute;
  top:0;
  left:0;
  box-sizing:border-box;
  height:100%;
}
.markerContainer--A_Ep_:before{
  width:var(--size-drop-list-item-marker, 4px);
  border-bottom-right-radius:var(--radius-drop-list-marker, 4px);
  border-top-right-radius:var(--radius-drop-list-marker, 4px);
  content:"";
  display:block;
  height:100%;
}

.droplistItem--WEZ6y{
  width:100%;
}
.droplistItem--WEZ6y[data-size=s][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px));
}
.droplistItem--WEZ6y[data-size=s][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-s-container-horizontal-padding, 8px) + var(--size-drop-list-item-nesting-level-gap-compensator-s, 16px) + var(--space-drop-list-item-s-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-s, 24px));
}
.droplistItem--WEZ6y[data-size=s] .headline--iJsYq{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--WEZ6y[data-size=m][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px));
}
.droplistItem--WEZ6y[data-size=m][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-m-container-horizontal-padding, 10px) + var(--size-drop-list-item-nesting-level-gap-compensator-m, 16px) + var(--space-drop-list-item-m-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-m, 24px));
}
.droplistItem--WEZ6y[data-size=m] .headline--iJsYq{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--WEZ6y[data-size=l][data-level-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px));
}
.droplistItem--WEZ6y[data-size=l][data-level-more-one]{
  padding-left:calc(var(--space-drop-list-item-l-container-horizontal-padding, 12px) + var(--size-drop-list-item-nesting-level-gap-compensator-l, 16px) + var(--space-drop-list-item-l-container-gap, 8px) + (var(--level, 0) - 1) * var(--size-drop-list-item-nesting-level-offset-l, 24px));
}
.droplistItem--WEZ6y[data-size=l] .headline--iJsYq{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.droplistItem--WEZ6y[data-non-pointer]{
  cursor:inherit;
}

.innerWrapper--CoFjQ[data-disabled] .expandableIcon--Hcob9{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.innerWrapper--CoFjQ[data-disabled] .beforeContent--Zn3_I{
  opacity:var(--opacity-a064, 0.64);
}
.innerWrapper--CoFjQ[data-disabled] .droplistItem--WEZ6y{
  cursor:not-allowed;
}
.innerWrapper--CoFjQ[data-has-checked][data-variant=single]::before, .innerWrapper--CoFjQ[data-checked][data-variant=single]::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--CoFjQ[data-has-checked][data-variant=single]:hover::before, .innerWrapper--CoFjQ[data-checked][data-variant=single]:hover::before{
  opacity:var(--opacity-a016, 0.16);
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--CoFjQ[data-has-checked] .markerContainer--A_Ep_:before, .innerWrapper--CoFjQ[data-checked] .markerContainer--A_Ep_:before{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--CoFjQ[data-has-checked] .droplistItem--WEZ6y:focus-visible[data-variant=single], .innerWrapper--CoFjQ[data-checked] .droplistItem--WEZ6y:focus-visible[data-variant=single]{
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.innerWrapper--CoFjQ[data-has-checked][data-disabled] .markerContainer--A_Ep_:before, .innerWrapper--CoFjQ[data-checked][data-disabled] .markerContainer--A_Ep_:before{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}

.content--vwbDM{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}`,""]),r.locals={checkbox:"checkbox--Wlogi",beforeContent:"beforeContent--Zn3_I",expandableIcon:"expandableIcon--Hcob9",markerContainer:"markerContainer--A_Ep_",droplistItem:"droplistItem--WEZ6y",headline:"headline--iJsYq",innerWrapper:"innerWrapper--CoFjQ",content:"content--vwbDM"};const R=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/PinGroupItem/styles.module.css":((Q,K,i)=>{i.d(K,{A:()=>R});var a=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=i.n(a),y=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),N=i.n(y),r=N()(T());r.push([Q.id,`.pinTopItem--ssY6d{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinTopItem--ssY6d[data-size=s]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--ssY6d[data-size=m]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--ssY6d[data-size=l]{
  padding-bottom:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinTopItem--ssY6d li,
.pinTopItem--ssY6d ul{
  list-style-type:none;
}

.pinBottomItem--lKiv2{
  display:flex;
  flex-direction:column;
  border:none;
}
.pinBottomItem--lKiv2[data-size=s]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--lKiv2[data-size=m]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--lKiv2[data-size=l]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.pinBottomItem--lKiv2 li,
.pinBottomItem--lKiv2 ul{
  list-style-type:none;
}`,""]),r.locals={pinTopItem:"pinTopItem--ssY6d",pinBottomItem:"pinBottomItem--lKiv2"};const R=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/SearchItem/styles.module.css":((Q,K,i)=>{i.d(K,{A:()=>R});var a=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=i.n(a),y=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),N=i.n(y),r=N()(T());r.push([Q.id,`.searchItem--itEA1{
  width:100%;
}
.searchItem--itEA1:focus-within, .searchItem--itEA1:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  max-width:100%;
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}`,""]),r.locals={searchItem:"searchItem--itEA1"};const R=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/styles.module.css":((Q,K,i)=>{i.d(K,{A:()=>R});var a=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=i.n(a),y=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),N=i.n(y),r=N()(T());r.push([Q.id,`.itemWrapper--H3gA6{
  position:relative;
  min-width:100%;
  margin:0;
  padding:0;
}
.itemWrapper--H3gA6::before, .itemWrapper--H3gA6::after{
  pointer-events:none;
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:transparent;
}
.itemWrapper--H3gA6[data-disabled], .itemWrapper--H3gA6:disabled{
  cursor:not-allowed;
  background-color:transparent;
  outline:none;
}
.itemWrapper--H3gA6[data-disabled]::before, .itemWrapper--H3gA6:disabled::before{
  display:none;
}
.itemWrapper--H3gA6[data-disabled]::after, .itemWrapper--H3gA6:disabled::after{
  cursor:not-allowed;
  background-color:transparent;
}
.itemWrapper--H3gA6:not([data-inactive], [data-disabled])[data-open]::before, .itemWrapper--H3gA6:not([data-inactive], [data-disabled])[data-focused]::before, .itemWrapper--H3gA6:not([data-inactive], [data-disabled]):focus-visible::before{
  opacity:var(--opacity-a008, 0.08);
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
@media (hover: hover){
  .itemWrapper--H3gA6:not([data-inactive], [data-disabled]):hover::before{
    opacity:var(--opacity-a008, 0.08);
    background-color:var(--sys-neutral-accent-default, #787b8a);
  }
}

.listItem--LUf1g{
  cursor:pointer;
  position:relative;
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  box-sizing:border-box;
  width:-moz-max-content;
  width:max-content;
  min-width:100%;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-main, #41424e);
  text-align:start;
  -webkit-appearance:unset;
     -moz-appearance:unset;
          appearance:unset;
  background-color:transparent;
  border:none;
  outline:none;
}
.listItem--LUf1g[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
}
.listItem--LUf1g[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-bottom:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
}
.listItem--LUf1g[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-bottom:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
}
.listItem--LUf1g:not([data-inactive], [data-disabled])[data-focused], .listItem--LUf1g:not([data-inactive], [data-disabled]):focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
}`,""]),r.locals={itemWrapper:"itemWrapper--H3gA6",listItem:"listItem--LUf1g"};const R=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/styles.module.css":((Q,K,i)=>{i.d(K,{A:()=>R});var a=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=i.n(a),y=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),N=i.n(y),r=N()(T());r.push([Q.id,`.loader--f0f9h{
  display:flex;
  align-items:center;
  justify-content:center;
}
.loader--f0f9h[data-size=s]{
  height:var(--dimension-3m, 24px);
}
.loader--f0f9h[data-size=s][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-3m, 24px));
  height:calc(3 * var(--dimension-3m, 24px));
}
.loader--f0f9h[data-size=m]{
  height:var(--dimension-4m, 32px);
}
.loader--f0f9h[data-size=m][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-4m, 32px));
  height:calc(3 * var(--dimension-4m, 32px));
}
.loader--f0f9h[data-size=l]{
  height:var(--dimension-5m, 40px);
}
.loader--f0f9h[data-size=l][data-no-items]{
  min-width:calc(2 * 3 * var(--dimension-5m, 40px));
  height:calc(3 * var(--dimension-5m, 40px));
}
.loader--f0f9h:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}

.scrollStub--WrikE{
  height:calc(var(--dimension-025m, 2px) / 2);
  margin-top:calc(var(--dimension-025m, 2px) / -2);
  background:transparent;
}

.footer--yKyl8{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  padding:var(--dimension-050m, 4px);
}

.content--DuiWQ{
  overflow:hidden;
  flex-grow:1;
}

.virtualizedContainer--yWuB1{
  position:relative;
  width:100%;
}

.virtualizedPositionBox--mQIGE{
  position:absolute;
  top:0;
  left:0;
  width:100%;
}`,""]),r.locals={loader:"loader--f0f9h",scrollStub:"scrollStub--WrikE",footer:"footer--yKyl8",content:"content--DuiWQ",virtualizedContainer:"virtualizedContainer--yWuB1",virtualizedPositionBox:"virtualizedPositionBox--mQIGE"};const R=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css":((Q,K,i)=>{i.d(K,{A:()=>R});var a=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=i.n(a),y=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),N=i.n(y),r=N()(T());r.push([Q.id,`.listContainer--ctaep{
  display:flex;
  flex-direction:column;
  height:100%;
  margin:0;
  padding:0;
}
.listContainer--ctaep:focus-visible{
  border:none;
  outline:none;
}
.listContainer--ctaep:focus-visible[data-active]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.listContainer--ctaep:focus-visible[data-active] *{
  cursor:inherit;
}
.listContainer--ctaep li,
.listContainer--ctaep ul{
  list-style-type:none;
}

.wrapper--F5Iwb{
  position:relative;
  overflow:hidden;
  display:block;
  box-sizing:border-box;
  height:100%;
}
.wrapper--F5Iwb:has(.listContainer--ctaep:focus-visible){
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.wrapper--F5Iwb li,
.wrapper--F5Iwb ul{
  list-style-type:none;
}

.scrollContainerS--B62YK{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 32);
}

.scrollContainerM--fvJmF{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 40);
}

.scrollContainerL--o97cl{
  height:auto;
  max-height:calc(var(--dimension-1m, 8px) * 48);
}`,""]),r.locals={listContainer:"listContainer--ctaep",wrapper:"wrapper--F5Iwb",scrollContainerS:"scrollContainerS--B62YK",scrollContainerM:"scrollContainerM--fvJmF",scrollContainerL:"scrollContainerL--o97cl"};const R=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/CollapseBlockPrivate/styles.module.css":((Q,K,i)=>{i.d(K,{A:()=>R});var a=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=i.n(a),y=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),N=i.n(y),r=N()(T());r.push([Q.id,`.accordion--yqdNk{
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  transition:gap 300ms;
}
.accordion--yqdNk::-webkit-scrollbar{
  width:0;
}
.accordion--yqdNk[aria-expanded=false]{
  gap:0;
}

.contentWrapper--iJyUN{
  box-sizing:border-box;
  width:100%;
}
.contentWrapper--iJyUN[aria-hidden=false] > div[data-content]{
  display:block;
}

.content--MdKEb{
  position:relative;
  display:none;
  box-sizing:border-box;
  width:100%;
}`,""]),r.locals={accordion:"accordion--yqdNk",contentWrapper:"contentWrapper--iJyUN",content:"content--MdKEb"};const R=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ItemContent/styles.module.css":((Q,K,i)=>{i.d(K,{A:()=>R});var a=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=i.n(a),y=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),N=i.n(y),r=N()(T());r.push([Q.id,`.headline--PCH9D{
  display:flex;
}

.label--rMWBT{
  overflow:hidden;
  flex:1;
  color:var(--sys-neutral-text-main, #41424e);
}

.caption--b5eIK{
  overflow:hidden;
  display:flex;
  align-items:center;
  color:var(--sys-neutral-text-light, #8b8e9b);
  text-overflow:ellipsis;
  white-space:nowrap;
}

.description--mff04{
  color:var(--sys-neutral-text-support, #6d707f);
}

.content--I1Mdm{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  box-sizing:border-box;
}
.content--I1Mdm[data-size=s] .headline--PCH9D{
  gap:var(--space-drop-list-item-s-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--I1Mdm[data-size=s] .label--rMWBT{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  display:flex;
  align-items:center;
}
.content--I1Mdm[data-size=s] .caption--b5eIK{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--I1Mdm[data-size=s] .description--mff04{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--I1Mdm[data-size=m] .headline--PCH9D{
  gap:var(--space-drop-list-item-m-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--I1Mdm[data-size=m] .label--rMWBT{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
  display:flex;
  align-items:center;
}
.content--I1Mdm[data-size=m] .caption--b5eIK{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--I1Mdm[data-size=m] .description--mff04{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.content--I1Mdm[data-size=l] .headline--PCH9D{
  gap:var(--space-drop-list-item-l-container-headline-gap, 8px);
  min-height:var(--size-drop-list-item-headline, 24px);
}
.content--I1Mdm[data-size=l] .label--rMWBT{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
  display:flex;
  align-items:center;
}
.content--I1Mdm[data-size=l] .caption--b5eIK{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--I1Mdm[data-size=l] .description--mff04{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.content--I1Mdm[data-disabled] .label--rMWBT,
.content--I1Mdm[data-disabled] .description--mff04,
.content--I1Mdm[data-disabled] .caption--b5eIK{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),r.locals={headline:"headline--PCH9D",label:"label--rMWBT",caption:"caption--b5eIK",description:"description--mff04",content:"content--I1Mdm"};const R=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/ListEmptyState/styles.module.css":((Q,K,i)=>{i.d(K,{A:()=>R});var a=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=i.n(a),y=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),N=i.n(y),r=N()(T());r.push([Q.id,`.listEmptyStateWrapper--OwKkZ{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-sizing:border-box;
  padding:var(--dimension-1m, 8px);
}`,""]),r.locals={listEmptyStateWrapper:"listEmptyStateWrapper--OwKkZ"};const R=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.7_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/Separator/styles.module.css":((Q,K,i)=>{i.d(K,{A:()=>R});var a=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),T=i.n(a),y=i("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),N=i.n(y),r=N()(T());r.push([Q.id,`.separatorWithLabel--tX9Qd{
  display:flex;
  gap:var(--dimension-1m, 8px);
  align-items:flex-end;
  box-sizing:border-box;
  width:100%;
  min-width:100%;
}
.separatorWithLabel--tX9Qd[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-s, 32px);
}
.separatorWithLabel--tX9Qd[data-size=s] .label--IACmn[data-mode=primary]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--tX9Qd[data-size=s] .label--IACmn[data-mode=secondary]{
  font-family:var(--light-label-m-font-family, SB Sans Interface);
  font-weight:var(--light-label-m-font-weight, Regular);
  line-height:var(--light-label-m-line-height, 16px);
  font-size:var(--light-label-m-font-size, 12px);
  letter-spacing:var(--light-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-m-paragraph-spacing, 6.6px);
}
.separatorWithLabel--tX9Qd[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-m, 40px);
}
.separatorWithLabel--tX9Qd[data-size=m] .label--IACmn[data-mode=primary]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--tX9Qd[data-size=m] .label--IACmn[data-mode=secondary]{
  font-family:var(--light-label-l-font-family, SB Sans Interface);
  font-weight:var(--light-label-l-font-weight, Regular);
  line-height:var(--light-label-l-line-height, 20px);
  font-size:var(--light-label-l-font-size, 14px);
  letter-spacing:var(--light-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--light-label-l-paragraph-spacing, 7.7px);
}
.separatorWithLabel--tX9Qd[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
  height:var(--size-drop-list-item-container-separator-subheader-height-l, 48px);
}
.separatorWithLabel--tX9Qd[data-size=l] .label--IACmn[data-mode=primary]{
  font-family:var(--sans-title-m-font-family, SB Sans Interface);
  font-weight:var(--sans-title-m-font-weight, Semibold);
  line-height:var(--sans-title-m-line-height, 24px);
  font-size:var(--sans-title-m-font-size, 16px);
  letter-spacing:var(--sans-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);
}
.separatorWithLabel--tX9Qd[data-size=l] .label--IACmn[data-mode=secondary]{
  font-family:var(--light-title-m-font-family, SB Sans Interface);
  font-weight:var(--light-title-m-font-weight, Regular);
  line-height:var(--light-title-m-line-height, 24px);
  font-size:var(--light-title-m-font-size, 16px);
  letter-spacing:var(--light-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--light-title-m-paragraph-spacing, 8.8px);
}

.separatorWithoutLabel--aNKHC{
  display:flex;
  align-items:flex-end;
  box-sizing:border-box;
}
.separatorWithoutLabel--aNKHC[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-separator-subheader-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
}
.separatorWithoutLabel--aNKHC[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-bottom:var(--space-drop-list-item-m-container-separator-subheader-vertical-padding, 5px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
}
.separatorWithoutLabel--aNKHC[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-bottom:var(--space-drop-list-item-l-container-separator-subheader-vertical-padding, 6px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
}

.label--IACmn{
  overflow:hidden;
  flex-shrink:1;
}
.label--IACmn[data-mode=primary]{
  color:var(--sys-neutral-text-main, #41424e);
}
.label--IACmn[data-mode=secondary]{
  color:var(--sys-neutral-text-light, #8b8e9b);
}

hr.divider--rAqqB{
  flex:1;
  width:auto;
  min-width:0;
}

.selectButton--Qf_a_{
  display:flex;
  justify-content:flex-end;
}
.selectButton--Qf_a_[data-weight=primary]{
  --divider-height:1px;
}
.selectButton--Qf_a_[data-weight=secondary]{
  --divider-height:0.5px;
}
.selectButton--Qf_a_[data-size=s]{
  transform:translateY(calc((var(--size-button-xs, 24px) - var(--sans-label-s-line-height, 14px)) / 2 - var(--divider-height, 0)));
}
.selectButton--Qf_a_[data-size=m]{
  transform:translateY(calc((var(--size-button-s, 32px) - var(--sans-label-m-line-height, 16px)) / 2 - var(--divider-height, 0)));
}
.selectButton--Qf_a_[data-size=l]{
  transform:translateY(calc((var(--size-button-m, 40px) - var(--sans-label-l-line-height, 20px)) / 2 - var(--divider-height, 0)));
}`,""]),r.locals={separatorWithLabel:"separatorWithLabel--tX9Qd",label:"label--IACmn",separatorWithoutLabel:"separatorWithoutLabel--aNKHC",divider:"divider--rAqqB",selectButton:"selectButton--Qf_a_"};const R=r})}]);})();
