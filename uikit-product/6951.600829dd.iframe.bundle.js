"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[6951],{"./node_modules/.pnpm/@snack-uikit+icons@1.0.1/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/trash/index.js"(y,f,t){t.d(f,{A:()=>X});var d=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=function(_,m){var p={};for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&m.indexOf(r)<0&&(p[r]=_[r]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(_);c<r.length;c++)m.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(_,r[c])&&(p[r[c]]=_[r[c]]);return p};const i=l.forwardRef((_,m)=>{var{size:p=24}=_,r=u(_,["size"]);r.width=void 0,r.height=void 0;const c="-trash-s";return typeof p=="number"&&(r.style||(r.style={}),r.style.width=p+"px",r.style.height=p+"px"),(0,d.jsx)("svg",Object.assign({ref:m,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+c},r,{children:(0,d.jsx)("use",{href:"#snack-uikit-"+c.substring(1)})}))});var g=function(_,m){var p={};for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&m.indexOf(r)<0&&(p[r]=_[r]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(_);c<r.length;c++)m.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(_,r[c])&&(p[r[c]]=_[r[c]]);return p};const X=(0,l.forwardRef)((_,m)=>{var{size:p=24}=_,r=g(_,["size"]);return(0,d.jsx)(i,Object.assign({ref:m,size:p},r))})},"./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagRow/TagRow.js"(y,f,t){t.d(f,{L:()=>ye});var d=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=t("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=t("./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/constants.js"),b=t("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),i=t.n(b),g=t("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const k={moreButton:"tag-row__more-button",visibleTagsWrapper:"tag-row__visible-row",droplistTagsWrapper:"tag-row__droplist-contents"};var X=t("./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/Tag/Tag.js"),_=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=t.n(_),p=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),r=t.n(p),c=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),E=t.n(c),oe=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=t.n(oe),ae=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=t.n(ae),re=t("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=t.n(re),C=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/helperComponents/TagList/styles.module.css"),T={};T.styleTagTransform=D(),T.setAttributes=M(),T.insert=E().bind(null,"head"),T.domAPI=r(),T.insertStyleElement=z();var ke=m()(C.A,T);const ne=C.A&&C.A.locals?C.A.locals:void 0;function de(s,n,a){return function(o,v){var h;return(0,d.jsx)("div",{ref:a==null?void 0:a(o,v),className:ne.tagWrapper,children:(0,d.jsx)(X.v,Object.assign({size:s,onDelete:n==null?void 0:n(o)},o))},(h=o.id)!==null&&h!==void 0?h:o.label)}}function V({items:s,size:n=u.S.Xs,onItemRemove:a,setTagRef:e}){const o=a?v=>()=>a(v.label):void 0;return(0,d.jsx)(d.Fragment,{children:s.map(de(n,o,e))})}var le=t("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),_e=t("./node_modules/.pnpm/@snack-uikit+scroll@0.10.8_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),W=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/helperComponents/TagRowSimple/styles.module.css"),x={};x.styleTagTransform=D(),x.setAttributes=M(),x.insert=E().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=z();var Me=m()(W.A,x);const ie=W.A&&W.A.locals?W.A.locals:void 0;var ce=function(s,n){var a={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&n.indexOf(e)<0&&(a[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(s);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(s,e[o])&&(a[e[o]]=s[e[o]]);return a};function Q(s){var{items:n,size:a,onItemRemove:e,setTagRef:o,className:v}=s,h=ce(s,["items","size","onItemRemove","setTagRef","className"]);return(0,d.jsx)("div",Object.assign({className:i()(ie.tagRowSimpleWrapper,v)},(0,g.z7)(h),{"data-size":a,children:(0,d.jsx)(V,{items:n,size:a,onItemRemove:e,setTagRef:o})}))}var I=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/helperComponents/TagMore/styles.module.css"),j={};j.styleTagTransform=D(),j.setAttributes=M(),j.insert=E().bind(null,"head"),j.domAPI=r(),j.insertStyleElement=z();var ze=m()(I.A,j);const B=I.A&&I.A.locals?I.A.locals:void 0;function Y({items:s,text:n="",size:a=u.S.Xs,buttonRef:e,onItemRemove:o}){return(0,d.jsx)(le.m,{placement:"bottom-end",trigger:"hoverAndFocusVisible",triggerClassName:B.triggerClassName,content:(0,d.jsx)("div",{className:B.tagRowDroplistContainer,"data-size":a,children:(0,d.jsx)(_e.O,{className:B.tagRowDroplistScroll,size:"s",barHideStrategy:"move",children:(0,d.jsx)(Q,{items:s,size:a,onItemRemove:o,"data-test-id":k.droplistTagsWrapper})})}),children:(0,d.jsx)("button",{type:"button",className:B.button,ref:e,"data-size":a,"data-test-id":k.moreButton,children:`${n}${s.length}`})})}const q=s=>{const[n,a]=(0,l.useState)(0);return(0,l.useEffect)(()=>{if(!s)return;const e=new ResizeObserver(()=>{s.offsetWidth!==n&&a(s.offsetWidth)});return e.observe(s),()=>e.disconnect()},[s,n]),{width:n}};var L=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/helperComponents/TagRowTruncated/styles.module.css"),O={};O.styleTagTransform=D(),O.setAttributes=M(),O.insert=E().bind(null,"head"),O.domAPI=r(),O.insertStyleElement=z();var De=m()(L.A,O);const K=L.A&&L.A.locals?L.A.locals:void 0,pe=s=>{const n=s.current?getComputedStyle(s.current,null).getPropertyValue("gap"):"0px";return parseInt(n)};var ue=function(s,n){var a={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&n.indexOf(e)<0&&(a[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(s);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(s,e[o])&&(a[e[o]]=s[e[o]]);return a};function me(s){var{items:n,rowLimit:a,size:e,moreButtonLabel:o="",className:v,onItemRemove:h}=s,we=ue(s,["items","rowLimit","size","moreButtonLabel","className","onItemRemove"]);const[Te,xe]=(0,l.useState)([]),[ee,je]=(0,l.useState)([]),G=(0,l.useRef)(null),se=(0,l.useRef)(null),Oe=(0,l.useRef)(null),[Re,Se]=(0,l.useState)(null),H=(0,l.useRef)(new Map),{width:N}=q(G.current),{width:Ee}=q(Re);function Pe(R,S){return w=>{S===0&&w&&Se(w),w===null?H.current.delete(R):H.current.set(R,w)}}const $=pe(G);return(0,l.useEffect)(()=>{var R;if(N<1)return;const S=[],w=[],Ae=((R=se.current)===null||R===void 0?void 0:R.offsetWidth)||0;let U=0,Z=1,P=0;H.current.forEach((J,A)=>{const te=(J==null?void 0:J.offsetWidth)||0,F=U+te+$;if(Z>a){w.push(A);return}if(Z===a){if(F+Ae>N){Z++,P=0,w.push(A);return}U=F,S.push(A),P++;return}if(F>N){U=P?te+$:0,Z++,P=0,S.push(A);return}P++,U=F,S.push(A)}),xe(S),je(w)},[n,a,N,h,$,Ee]),(0,d.jsxs)("div",Object.assign({className:i()(K.wrapper,v)},(0,g.z7)(we),{"data-size":e,children:[(0,d.jsx)("div",{className:K.hiddenRow,ref:G,"data-size":e,children:(0,d.jsx)(V,{items:n,size:e,onItemRemove:h,setTagRef:Pe})}),(0,d.jsx)("div",{className:K.hiddenMoreButton,ref:Oe,children:(0,d.jsx)(Y,{items:n,text:o,size:e,buttonRef:se})}),(0,d.jsxs)("div",{className:K.visibleRow,"data-size":e,"data-test-id":k.visibleTagsWrapper,children:[(0,d.jsx)(V,{items:Te,size:e,onItemRemove:h}),ee.length>0&&(0,d.jsx)(Y,{items:ee,text:o,size:e,onItemRemove:h})]})]}))}const ge=(0,l.memo)(me);var fe=function(s,n){var a={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&n.indexOf(e)<0&&(a[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(s);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(s,e[o])&&(a[e[o]]=s[e[o]]);return a};const be=s=>{var{appearance:n=u.x.Neutral}=s,a=fe(s,["appearance"]);return Object.assign(Object.assign({},a),{appearance:n})};var ve=function(s,n){var a={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&n.indexOf(e)<0&&(a[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(s);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(s,e[o])&&(a[e[o]]=s[e[o]]);return a};function he(s){var{items:n,rowLimit:a,size:e=u.S.Xs}=s,o=ve(s,["items","rowLimit","size"]);const v=(0,l.useMemo)(()=>n.map(be),[n]);return a?(0,d.jsx)(ge,Object.assign({items:v,rowLimit:a,size:e},o)):(0,d.jsx)(Q,Object.assign({items:v,size:e},o))}const ye=(0,l.memo)(he)},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/helperComponents/TagList/styles.module.css"(y,f,t){t.d(f,{A:()=>g});var d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=t.n(d),u=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),b=t.n(u),i=b()(l());i.push([y.id,`.tagWrapper--sstto{
  max-width:100%;
}`,""]),i.locals={tagWrapper:"tagWrapper--sstto"};const g=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/helperComponents/TagMore/styles.module.css"(y,f,t){t.d(f,{A:()=>g});var d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=t.n(d),u=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),b=t.n(u),i=b()(l());i.push([y.id,`.button--d1zZT{
  cursor:pointer;
  display:inline-flex;
  align-items:center;
  box-sizing:border-box;
  color:var(--sys-neutral-text-support, #6d707f);
  white-space:nowrap;
  background:none;
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-style:solid;
}
.button--d1zZT:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--d1zZT{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.button--d1zZT[data-size=xs]{
  padding-left:var(--space-tag-more-xs-from-label, 4px);
  padding-right:var(--space-tag-more-xs-from-label, 4px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
  border-width:var(--border-width-tag-more-single, 2px);
}
.button--d1zZT{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.button--d1zZT[data-size=s]{
  padding-left:var(--space-tag-more-s-from-label, 4px);
  padding-right:var(--space-tag-more-s-from-label, 4px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 4px);
  border-width:var(--border-width-tag-more-single, 2px);
}

.tagRowDroplistContainer--Zy4dK[data-size=xs]{
  padding-right:var(--radius-drop-list-container, 4px);
  padding-left:var(--radius-drop-list-container, 4px);
  max-width:var(--size-tag-list-max-width-xs, 256px);
}
.tagRowDroplistContainer--Zy4dK[data-size=s]{
  padding-right:var(--radius-drop-list-container, 4px);
  padding-left:var(--radius-drop-list-container, 4px);
  max-width:var(--size-tag-list-max-width-s, 280px);
}

.tagRowDroplistScroll--qj5bM{
  max-height:200px;
}

.triggerClassName--oM4qp{
  --offset:var(--space-drop-list-drop-offset, 4px);
}`,""]),i.locals={button:"button--d1zZT",tagRowDroplistContainer:"tagRowDroplistContainer--Zy4dK",tagRowDroplistScroll:"tagRowDroplistScroll--qj5bM",triggerClassName:"triggerClassName--oM4qp"};const g=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/helperComponents/TagRowSimple/styles.module.css"(y,f,t){t.d(f,{A:()=>g});var d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=t.n(d),u=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),b=t.n(u),i=b()(l());i.push([y.id,`.tagRowSimpleWrapper--tvxml{
  display:flex;
  flex-wrap:wrap;
}
.tagRowSimpleWrapper--tvxml[data-size=xs]{
  gap:var(--space-tag-row-xs-gap, 4px);
}
.tagRowSimpleWrapper--tvxml[data-size=s]{
  gap:var(--space-tag-row-s-gap, 4px);
}`,""]),i.locals={tagRowSimpleWrapper:"tagRowSimpleWrapper--tvxml"};const g=i},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.18_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/helperComponents/TagRowTruncated/styles.module.css"(y,f,t){t.d(f,{A:()=>g});var d=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=t.n(d),u=t("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),b=t.n(u),i=b()(l());i.push([y.id,`.wrapper--gig4Z{
  position:relative;
  overflow:hidden;
  display:flex;
  flex-wrap:wrap;
  width:100%;
  max-width:100%;
}
.wrapper--gig4Z[data-size=xs]{
  gap:var(--space-tag-row-xs-gap, 4px);
}
.wrapper--gig4Z[data-size=s]{
  gap:var(--space-tag-row-s-gap, 4px);
}

.visibleRow--FTbPG{
  display:flex;
  flex-wrap:wrap;
  max-width:100%;
}
.visibleRow--FTbPG[data-size=xs]{
  gap:var(--space-tag-row-xs-gap, 4px);
}
.visibleRow--FTbPG[data-size=s]{
  gap:var(--space-tag-row-s-gap, 4px);
}

.hiddenRow--N4Tct{
  position:absolute;
  top:0;
  left:0;
  display:flex;
  flex-wrap:wrap;
  width:100%;
  visibility:hidden;
}
.hiddenRow--N4Tct[data-size=xs]{
  gap:var(--space-tag-row-xs-gap, 4px);
}
.hiddenRow--N4Tct[data-size=s]{
  gap:var(--space-tag-row-s-gap, 4px);
}

.hiddenMoreButton--eq99M{
  position:absolute;
  left:0;
  visibility:hidden;
}`,""]),i.locals={wrapper:"wrapper--gig4Z",visibleRow:"visibleRow--FTbPG",hiddenRow:"hiddenRow--N4Tct",hiddenMoreButton:"hiddenMoreButton--eq99M"};const g=i}}]);})();
