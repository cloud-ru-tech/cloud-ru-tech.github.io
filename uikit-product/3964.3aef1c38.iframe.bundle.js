"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[3964],{"./node_modules/.pnpm/@snack-uikit+link@0.17.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/Link.js":((_,v,e)=>{e.d(v,{N:()=>C});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(y),h=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),d=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const s={InvertNeutral:"invert-neutral",Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},P={S:"s",M:"m",L:"l"},M={Display:"display",Headline:"headline",Title:"title",Label:"label",Body:"body"},j={Self:"_self",Blank:"_blank",Parent:"_parent",Top:"_top"},X={Default:"default",Accent:"accent",OnAccent:"on-accent"};var V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),F=e.n(V),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=e.n(G),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),W=e.n(Z),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=e.n($),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),H=e.n(Y),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),N=e.n(J),S=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+link@0.17.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/styles.module.css"),g={};g.styleTagTransform=N(),g.setAttributes=L(),g.insert=W().bind(null,"head"),g.domAPI=R(),g.insertStyleElement=H();var I=F()(S.A,g);const b=S.A&&S.A.locals?S.A.locals:void 0;var te=function(p,k){var x={};for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&k.indexOf(r)<0&&(x[r]=p[r]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(p);c<r.length;c++)k.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(p,r[c])&&(x[r[c]]=p[r[c]]);return x};function C(p){var k,x,{text:r="",className:c,textMode:ne=X.Default,size:z=P.S,purpose:Q=M.Body,appearance:q=s.Primary,insideText:U=!1,truncateVariant:ee,as:ae}=p,a=te(p,["text","className","textMode","size","purpose","appearance","insideText","truncateVariant","as"]);const i=ae||"a";let l;return i==="a"?(l=Object.assign({target:(k=a==null?void 0:a.target)!==null&&k!==void 0?k:j.Blank,href:(x=a.href)!==null&&x!==void 0?x:"#",download:a.download,onClick:a.onClick},(0,d.z7)(a)),l.rel=l.target===j.Blank?"noopener noreferrer":void 0):l=a,(0,o.jsx)(i,Object.assign({className:m()(b.link,c)},l,{"data-size":z,"data-purpose":Q,"data-text-mode":ne,"data-appearance":q,"data-inside-text":U||void 0,children:U?r:(0,o.jsx)(h.m,{text:r,maxLines:1,variant:ee})}))}}),"./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js":((_,v,e)=>{e.d(v,{m:()=>ae});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),y=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(y),h=e("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),d=e.n(h),s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),P=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),M=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const j=a=>a?a.offsetHeight<a.scrollHeight||a.offsetWidth<a.scrollWidth:!1,X=[{potentialDelimiterWidth:.5,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:.5,rightHalfDelta:0},{potentialDelimiterWidth:1,leftHalfDelta:0,rightHalfDelta:.5},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:2,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:1,rightHalfDelta:0},{potentialDelimiterWidth:3,leftHalfDelta:0,rightHalfDelta:1},{potentialDelimiterWidth:4,leftHalfDelta:0,rightHalfDelta:0}],V="...",F=({text:a,element:i,truncatedElement:l})=>{if(i&&l&&j(i)){const t=i.scrollWidth/a.length;let n=a;for(const{potentialDelimiterWidth:T,leftHalfDelta:O,rightHalfDelta:E}of X){const f=Math.floor((i.offsetWidth/t-T)/2),w=a.slice(0,f-O),D=a.slice(a.length-f+E,a.length);if(n=`${w}${V}${D}`,l.innerText=n,l.scrollWidth<=i.offsetWidth-1)break}return n}return a};var G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(G),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=e.n(Z),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),L=e.n($),Y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),H=e.n(Y),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(J),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),g=e.n(S),I=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css"),b={};b.styleTagTransform=g(),b.setAttributes=H(),b.insert=L().bind(null,"head"),b.domAPI=W(),b.insertStyleElement=N();var te=R()(I.A,b);const C=I.A&&I.A.locals?I.A.locals:void 0;var p=function(a,i){var l={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&i.indexOf(t)<0&&(l[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)i.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(l[t[n]]=a[t[n]]);return l};function k(a){var{text:i,className:l,tooltipClassName:t,hideTooltip:n,placement:T}=a,O=p(a,["text","className","tooltipClassName","hideTooltip","placement"]);const[E,f]=(0,s.useState)(!1),[w,D]=(0,s.useState)(i),u=(0,s.useRef)(null),B=(0,s.useRef)(null);(0,s.useEffect)(()=>{const A=d()(()=>{D(F({element:u.current,truncatedElement:B.current,text:i})),f(j(u.current))},50);A();const ie=new ResizeObserver(A);return u.current&&ie.observe(u.current),()=>{ie.disconnect()}},[E,i,n]);const K=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{ref:u,className:C.fullText,"data-test-id":"full-text",children:i}),(0,o.jsx)("span",{ref:B,className:C.truncatedText,"data-test-id":"truncated-text",children:w})]});return(0,o.jsx)("span",Object.assign({className:m()(C.wrapper,l)},(0,M.z7)(O),{children:E&&!n?(0,o.jsx)(P.m,{tip:i,placement:T,hoverDelayOpen:500,triggerClassName:C.textContainer,className:t,children:K}):K}))}var x=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),r=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css"),c={};c.styleTagTransform=g(),c.setAttributes=H(),c.insert=L().bind(null,"head"),c.domAPI=W(),c.insertStyleElement=N();var ne=R()(r.A,c);const z=r.A&&r.A.locals?r.A.locals:void 0;var Q=function(a,i){var l={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&i.indexOf(t)<0&&(l[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)i.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(l[t[n]]=a[t[n]]);return l};function q(a){var{text:i,className:l,tooltipClassName:t,hideTooltip:n,maxLines:T=1,placement:O}=a,E=Q(a,["text","className","tooltipClassName","hideTooltip","maxLines","placement"]);const f=(0,s.useRef)(null),[w,D]=(0,s.useState)(!1),u=(0,s.useCallback)(()=>{D(j(f.current))},[]);(0,x.N)(()=>{f.current&&u()},[i,u]),(0,s.useEffect)(()=>{const K=d()(()=>{u()},50),A=new ResizeObserver(K);return f.current&&(u(),A.observe(f.current)),()=>{A.disconnect()}},[w,n,u]);const B=(0,o.jsx)("span",Object.assign({ref:f,className:m()(T>1?z.text2AndMoreLines:z.text1Line,l,{[z.ellipsis]:!f.current||w}),style:{"--max-lines":T}},(0,M.z7)(E),{children:i}));return w&&!n?(0,o.jsx)(P.m,{tip:i,placement:O,hoverDelayOpen:500,className:t,triggerClassName:z.tooltipTrigger,children:B}):B}const U={Middle:"middle",End:"end"};var ee=function(a,i){var l={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&i.indexOf(t)<0&&(l[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(a);n<t.length;n++)i.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(a,t[n])&&(l[t[n]]=a[t[n]]);return l};function ae(a){var{variant:i=U.End}=a,l=ee(a,["variant"]);switch(i){case U.Middle:return(0,o.jsx)(k,Object.assign({},l));case U.End:default:return(0,o.jsx)(q,Object.assign({},l))}}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+link@0.17.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/styles.module.css":((_,v,e)=>{e.d(v,{A:()=>s});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(o),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),h=e.n(m),d=h()(y());d.push([_.id,`.link--ji1CU{
  cursor:pointer;
  display:inline-flex;
  align-items:center;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  text-decoration:none;
  -webkit-text-decoration-skip-ink:none;
          text-decoration-skip-ink:none;
}
.link--ji1CU[data-inside-text]{
  display:inline;
}
.link--ji1CU[data-appearance=invert-neutral][data-text-mode=default]{
  color:var(--sys-invert-neutral-text-support, #b6bac7);
}
.link--ji1CU[data-appearance=invert-neutral][data-text-mode=default]:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.link--ji1CU[data-appearance=invert-neutral][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=invert-neutral][data-text-mode=accent]{
  color:var(--sys-invert-neutral-accent-default, #cfd2dc);
}
.link--ji1CU[data-appearance=invert-neutral][data-text-mode=accent]:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.link--ji1CU[data-appearance=invert-neutral][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--ji1CU[data-appearance=invert-neutral][data-text-mode=on-accent]{
  color:var(--sys-invert-neutral-on-accent, #393a46);
}
.link--ji1CU[data-appearance=invert-neutral][data-text-mode=on-accent]:hover{
  color:var(--sys-invert-neutral-on-accent, #393a46);
  opacity:var(--opacity-a080, 0.8);
}
.link--ji1CU[data-appearance=invert-neutral][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-on-accent, #393a46);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--ji1CU[data-appearance=neutral][data-text-mode=default]{
  color:var(--sys-neutral-text-support, #6d707f);
}
.link--ji1CU[data-appearance=neutral][data-text-mode=default]:hover{
  color:var(--sys-neutral-text-main, #41424e);
}
.link--ji1CU[data-appearance=neutral][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-main, #41424e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=neutral][data-text-mode=accent]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.link--ji1CU[data-appearance=neutral][data-text-mode=accent]:hover{
  color:var(--sys-neutral-text-main, #41424e);
}
.link--ji1CU[data-appearance=neutral][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-main, #41424e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=neutral][data-text-mode=on-accent]{
  color:var(--sys-neutral-on-accent, #ffffff);
}
.link--ji1CU[data-appearance=neutral][data-text-mode=on-accent]:hover{
  color:var(--sys-neutral-on-accent, #ffffff);
  opacity:var(--opacity-a080, 0.8);
}
.link--ji1CU[data-appearance=neutral][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-on-accent, #ffffff);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--ji1CU[data-appearance=primary][data-text-mode=default]{
  color:var(--sys-primary-text-support, #358561);
}
.link--ji1CU[data-appearance=primary][data-text-mode=default]:hover{
  color:var(--sys-primary-text-main, #1b5840);
}
.link--ji1CU[data-appearance=primary][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-primary-text-main, #1b5840);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=primary][data-text-mode=accent]{
  color:var(--sys-primary-accent-default, #389f74);
}
.link--ji1CU[data-appearance=primary][data-text-mode=accent]:hover{
  color:var(--sys-primary-text-main, #1b5840);
}
.link--ji1CU[data-appearance=primary][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-primary-text-main, #1b5840);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=primary][data-text-mode=on-accent]{
  color:var(--sys-primary-on-accent, #fbfffc);
}
.link--ji1CU[data-appearance=primary][data-text-mode=on-accent]:hover{
  color:var(--sys-primary-on-accent, #fbfffc);
  opacity:var(--opacity-a080, 0.8);
}
.link--ji1CU[data-appearance=primary][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-primary-on-accent, #fbfffc);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--ji1CU[data-appearance=red][data-text-mode=default]{
  color:var(--sys-red-text-support, #ae514c);
}
.link--ji1CU[data-appearance=red][data-text-mode=default]:hover{
  color:var(--sys-red-text-main, #7a2d2d);
}
.link--ji1CU[data-appearance=red][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-main, #7a2d2d);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=red][data-text-mode=accent]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.link--ji1CU[data-appearance=red][data-text-mode=accent]:hover{
  color:var(--sys-red-text-main, #7a2d2d);
}
.link--ji1CU[data-appearance=red][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-main, #7a2d2d);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=red][data-text-mode=on-accent]{
  color:var(--sys-red-on-accent, #fffbf9);
}
.link--ji1CU[data-appearance=red][data-text-mode=on-accent]:hover{
  color:var(--sys-red-on-accent, #fffbf9);
  opacity:var(--opacity-a080, 0.8);
}
.link--ji1CU[data-appearance=red][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-on-accent, #fffbf9);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--ji1CU[data-appearance=orange][data-text-mode=default]{
  color:var(--sys-orange-text-support, #bb733e);
}
.link--ji1CU[data-appearance=orange][data-text-mode=default]:hover{
  color:var(--sys-orange-text-main, #884c23);
}
.link--ji1CU[data-appearance=orange][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-orange-text-main, #884c23);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=orange][data-text-mode=accent]{
  color:var(--sys-orange-accent-default, #fb8e42);
}
.link--ji1CU[data-appearance=orange][data-text-mode=accent]:hover{
  color:var(--sys-orange-text-main, #884c23);
}
.link--ji1CU[data-appearance=orange][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-orange-text-main, #884c23);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=orange][data-text-mode=on-accent]{
  color:var(--sys-orange-on-accent, #fffcf4);
}
.link--ji1CU[data-appearance=orange][data-text-mode=on-accent]:hover{
  color:var(--sys-orange-on-accent, #fffcf4);
  opacity:var(--opacity-a080, 0.8);
}
.link--ji1CU[data-appearance=orange][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-orange-on-accent, #fffcf4);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--ji1CU[data-appearance=blue][data-text-mode=default]{
  color:var(--sys-blue-text-support, #4877b0);
}
.link--ji1CU[data-appearance=blue][data-text-mode=default]:hover{
  color:var(--sys-blue-text-main, #2b537e);
}
.link--ji1CU[data-appearance=blue][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-blue-text-main, #2b537e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=blue][data-text-mode=accent]{
  color:var(--sys-blue-accent-default, #5388d1);
}
.link--ji1CU[data-appearance=blue][data-text-mode=accent]:hover{
  color:var(--sys-blue-text-main, #2b537e);
}
.link--ji1CU[data-appearance=blue][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-blue-text-main, #2b537e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=blue][data-text-mode=on-accent]{
  color:var(--sys-blue-on-accent, #fdfeff);
}
.link--ji1CU[data-appearance=blue][data-text-mode=on-accent]:hover{
  color:var(--sys-blue-on-accent, #fdfeff);
  opacity:var(--opacity-a080, 0.8);
}
.link--ji1CU[data-appearance=blue][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-blue-on-accent, #fdfeff);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--ji1CU[data-appearance=violet][data-text-mode=default]{
  color:var(--sys-violet-text-support, #8c639b);
}
.link--ji1CU[data-appearance=violet][data-text-mode=default]:hover{
  color:var(--sys-violet-text-main, #59446a);
}
.link--ji1CU[data-appearance=violet][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-violet-text-main, #59446a);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=violet][data-text-mode=accent]{
  color:var(--sys-violet-accent-default, #aa6cc1);
}
.link--ji1CU[data-appearance=violet][data-text-mode=accent]:hover{
  color:var(--sys-violet-text-main, #59446a);
}
.link--ji1CU[data-appearance=violet][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-violet-text-main, #59446a);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=violet][data-text-mode=on-accent]{
  color:var(--sys-violet-on-accent, #fdfdfd);
}
.link--ji1CU[data-appearance=violet][data-text-mode=on-accent]:hover{
  color:var(--sys-violet-on-accent, #fdfdfd);
  opacity:var(--opacity-a080, 0.8);
}
.link--ji1CU[data-appearance=violet][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-violet-on-accent, #fdfdfd);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--ji1CU[data-appearance=pink][data-text-mode=default]{
  color:var(--sys-pink-text-support, #ae5e80);
}
.link--ji1CU[data-appearance=pink][data-text-mode=default]:hover{
  color:var(--sys-pink-text-main, #754158);
}
.link--ji1CU[data-appearance=pink][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-pink-text-main, #754158);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=pink][data-text-mode=accent]{
  color:var(--sys-pink-accent-default, #d1668e);
}
.link--ji1CU[data-appearance=pink][data-text-mode=accent]:hover{
  color:var(--sys-pink-text-main, #754158);
}
.link--ji1CU[data-appearance=pink][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-pink-text-main, #754158);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=pink][data-text-mode=on-accent]{
  color:var(--sys-pink-on-accent, #fdfcfc);
}
.link--ji1CU[data-appearance=pink][data-text-mode=on-accent]:hover{
  color:var(--sys-pink-on-accent, #fdfcfc);
  opacity:var(--opacity-a080, 0.8);
}
.link--ji1CU[data-appearance=pink][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-pink-on-accent, #fdfcfc);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--ji1CU[data-appearance=yellow][data-text-mode=default]{
  color:var(--sys-yellow-text-support, #b78c32);
}
.link--ji1CU[data-appearance=yellow][data-text-mode=default]:hover{
  color:var(--sys-yellow-text-main, #815f19);
}
.link--ji1CU[data-appearance=yellow][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-yellow-text-main, #815f19);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=yellow][data-text-mode=accent]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.link--ji1CU[data-appearance=yellow][data-text-mode=accent]:hover{
  color:var(--sys-yellow-text-main, #815f19);
}
.link--ji1CU[data-appearance=yellow][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-yellow-text-main, #815f19);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=yellow][data-text-mode=on-accent]{
  color:var(--sys-yellow-on-accent, #583f1f);
}
.link--ji1CU[data-appearance=yellow][data-text-mode=on-accent]:hover{
  color:var(--sys-yellow-on-accent, #583f1f);
  opacity:var(--opacity-a080, 0.8);
}
.link--ji1CU[data-appearance=yellow][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-yellow-on-accent, #583f1f);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--ji1CU[data-appearance=green][data-text-mode=default]{
  color:var(--sys-green-text-support, #55915a);
}
.link--ji1CU[data-appearance=green][data-text-mode=default]:hover{
  color:var(--sys-green-text-main, #3d6035);
}
.link--ji1CU[data-appearance=green][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-green-text-main, #3d6035);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=green][data-text-mode=accent]{
  color:var(--sys-green-accent-default, #57b762);
}
.link--ji1CU[data-appearance=green][data-text-mode=accent]:hover{
  color:var(--sys-green-text-main, #3d6035);
}
.link--ji1CU[data-appearance=green][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-green-text-main, #3d6035);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--ji1CU[data-appearance=green][data-text-mode=on-accent]{
  color:var(--sys-green-on-accent, #fcfefa);
}
.link--ji1CU[data-appearance=green][data-text-mode=on-accent]:hover{
  color:var(--sys-green-on-accent, #fcfefa);
  opacity:var(--opacity-a080, 0.8);
}
.link--ji1CU[data-appearance=green][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-green-on-accent, #fcfefa);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--ji1CU[data-size=s]{
  height:var(--size-link-s, 16px);
  gap:var(--space-link-gap-single, 0px);
  height:auto;
}
.link--ji1CU[data-size=s][data-purpose=display][data-text-mode=default]{
  font-family:var(--sans-display-s-font-family, SB Sans Interface);
  font-weight:var(--sans-display-s-font-weight, Semibold);
  line-height:var(--sans-display-s-line-height, 48px);
  font-size:var(--sans-display-s-font-size, 40px);
  letter-spacing:var(--sans-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-s-paragraph-spacing, 22px);
}
.link--ji1CU[data-size=s][data-purpose=display][data-text-mode=accent]{
  font-family:var(--link-display-s-font-family, SB Sans Interface);
  font-weight:var(--link-display-s-font-weight, Semibold);
  line-height:var(--link-display-s-line-height, 48px);
  font-size:var(--link-display-s-font-size, 40px);
  letter-spacing:var(--link-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-s-paragraph-spacing, 22px);
  -webkit-text-decoration:var(--link-display-s-text-decoration, underline);
          text-decoration:var(--link-display-s-text-decoration, underline);
}
.link--ji1CU[data-size=s][data-purpose=display][data-text-mode=on-accent]{
  font-family:var(--link-display-s-font-family, SB Sans Interface);
  font-weight:var(--link-display-s-font-weight, Semibold);
  line-height:var(--link-display-s-line-height, 48px);
  font-size:var(--link-display-s-font-size, 40px);
  letter-spacing:var(--link-display-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-s-paragraph-spacing, 22px);
  -webkit-text-decoration:var(--link-display-s-text-decoration, underline);
          text-decoration:var(--link-display-s-text-decoration, underline);
}
.link--ji1CU[data-size=s][data-purpose=headline][data-text-mode=default]{
  font-family:var(--sans-headline-s-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-s-font-weight, Semibold);
  line-height:var(--sans-headline-s-line-height, 32px);
  font-size:var(--sans-headline-s-font-size, 24px);
  letter-spacing:var(--sans-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-s-paragraph-spacing, 13.2px);
}
.link--ji1CU[data-size=s][data-purpose=headline][data-text-mode=accent]{
  font-family:var(--link-headline-s-font-family, SB Sans Interface);
  font-weight:var(--link-headline-s-font-weight, Semibold);
  line-height:var(--link-headline-s-line-height, 32px);
  font-size:var(--link-headline-s-font-size, 24px);
  letter-spacing:var(--link-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-s-paragraph-spacing, 13.2px);
  -webkit-text-decoration:var(--link-headline-s-text-decoration, underline);
          text-decoration:var(--link-headline-s-text-decoration, underline);
}
.link--ji1CU[data-size=s][data-purpose=headline][data-text-mode=on-accent]{
  font-family:var(--link-headline-s-font-family, SB Sans Interface);
  font-weight:var(--link-headline-s-font-weight, Semibold);
  line-height:var(--link-headline-s-line-height, 32px);
  font-size:var(--link-headline-s-font-size, 24px);
  letter-spacing:var(--link-headline-s-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-s-paragraph-spacing, 13.2px);
  -webkit-text-decoration:var(--link-headline-s-text-decoration, underline);
          text-decoration:var(--link-headline-s-text-decoration, underline);
}
.link--ji1CU[data-size=s][data-purpose=title][data-text-mode=default]{
  font-family:var(--sans-title-s-font-family, SB Sans Interface);
  font-weight:var(--sans-title-s-font-weight, Semibold);
  line-height:var(--sans-title-s-line-height, 20px);
  font-size:var(--sans-title-s-font-size, 14px);
  letter-spacing:var(--sans-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-s-paragraph-spacing, 7.7px);
}
.link--ji1CU[data-size=s][data-purpose=title][data-text-mode=accent]{
  font-family:var(--link-title-s-font-family, SB Sans Interface);
  font-weight:var(--link-title-s-font-weight, Semibold);
  line-height:var(--link-title-s-line-height, 20px);
  font-size:var(--link-title-s-font-size, 14px);
  letter-spacing:var(--link-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-s-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-title-s-text-decoration, underline);
          text-decoration:var(--link-title-s-text-decoration, underline);
}
.link--ji1CU[data-size=s][data-purpose=title][data-text-mode=on-accent]{
  font-family:var(--link-title-s-font-family, SB Sans Interface);
  font-weight:var(--link-title-s-font-weight, Semibold);
  line-height:var(--link-title-s-line-height, 20px);
  font-size:var(--link-title-s-font-size, 14px);
  letter-spacing:var(--link-title-s-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-s-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-title-s-text-decoration, underline);
          text-decoration:var(--link-title-s-text-decoration, underline);
}
.link--ji1CU[data-size=s][data-purpose=label][data-text-mode=default]{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.link--ji1CU[data-size=s][data-purpose=label][data-text-mode=accent]{
  font-family:var(--link-label-s-font-family, SB Sans Interface);
  font-weight:var(--link-label-s-font-weight, Semibold);
  line-height:var(--link-label-s-line-height, 14px);
  font-size:var(--link-label-s-font-size, 11px);
  letter-spacing:var(--link-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-s-paragraph-spacing, 6.05px);
  -webkit-text-decoration:var(--link-label-s-text-decoration, underline);
          text-decoration:var(--link-label-s-text-decoration, underline);
}
.link--ji1CU[data-size=s][data-purpose=label][data-text-mode=on-accent]{
  font-family:var(--link-label-s-font-family, SB Sans Interface);
  font-weight:var(--link-label-s-font-weight, Semibold);
  line-height:var(--link-label-s-line-height, 14px);
  font-size:var(--link-label-s-font-size, 11px);
  letter-spacing:var(--link-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-s-paragraph-spacing, 6.05px);
  -webkit-text-decoration:var(--link-label-s-text-decoration, underline);
          text-decoration:var(--link-label-s-text-decoration, underline);
}
.link--ji1CU[data-size=s][data-purpose=body][data-text-mode=default]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.link--ji1CU[data-size=s][data-purpose=body][data-text-mode=accent]{
  font-family:var(--link-body-s-font-family, SB Sans Interface);
  font-weight:var(--link-body-s-font-weight, Regular);
  line-height:var(--link-body-s-line-height, 16px);
  font-size:var(--link-body-s-font-size, 12px);
  letter-spacing:var(--link-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-s-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-body-s-text-decoration, underline);
          text-decoration:var(--link-body-s-text-decoration, underline);
}
.link--ji1CU[data-size=s][data-purpose=body][data-text-mode=on-accent]{
  font-family:var(--link-body-s-font-family, SB Sans Interface);
  font-weight:var(--link-body-s-font-weight, Regular);
  line-height:var(--link-body-s-line-height, 16px);
  font-size:var(--link-body-s-font-size, 12px);
  letter-spacing:var(--link-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-s-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-body-s-text-decoration, underline);
          text-decoration:var(--link-body-s-text-decoration, underline);
}
.link--ji1CU[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.link--ji1CU[data-size=m]{
  height:var(--size-link-m, 20px);
  gap:var(--space-link-gap-single, 0px);
  height:auto;
}
.link--ji1CU[data-size=m][data-purpose=display][data-text-mode=default]{
  font-family:var(--sans-display-m-font-family, SB Sans Interface);
  font-weight:var(--sans-display-m-font-weight, Semibold);
  line-height:var(--sans-display-m-line-height, 60px);
  font-size:var(--sans-display-m-font-size, 48px);
  letter-spacing:var(--sans-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-m-paragraph-spacing, 26.4px);
}
.link--ji1CU[data-size=m][data-purpose=display][data-text-mode=accent]{
  font-family:var(--link-display-m-font-family, SB Sans Interface);
  font-weight:var(--link-display-m-font-weight, Semibold);
  line-height:var(--link-display-m-line-height, 60px);
  font-size:var(--link-display-m-font-size, 48px);
  letter-spacing:var(--link-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-m-paragraph-spacing, 26.4px);
  -webkit-text-decoration:var(--link-display-m-text-decoration, underline);
          text-decoration:var(--link-display-m-text-decoration, underline);
}
.link--ji1CU[data-size=m][data-purpose=display][data-text-mode=on-accent]{
  font-family:var(--link-display-m-font-family, SB Sans Interface);
  font-weight:var(--link-display-m-font-weight, Semibold);
  line-height:var(--link-display-m-line-height, 60px);
  font-size:var(--link-display-m-font-size, 48px);
  letter-spacing:var(--link-display-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-m-paragraph-spacing, 26.4px);
  -webkit-text-decoration:var(--link-display-m-text-decoration, underline);
          text-decoration:var(--link-display-m-text-decoration, underline);
}
.link--ji1CU[data-size=m][data-purpose=headline][data-text-mode=default]{
  font-family:var(--sans-headline-m-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-m-font-weight, Semibold);
  line-height:var(--sans-headline-m-line-height, 36px);
  font-size:var(--sans-headline-m-font-size, 28px);
  letter-spacing:var(--sans-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-m-paragraph-spacing, 15.4px);
}
.link--ji1CU[data-size=m][data-purpose=headline][data-text-mode=accent]{
  font-family:var(--link-headline-m-font-family, SB Sans Interface);
  font-weight:var(--link-headline-m-font-weight, Semibold);
  line-height:var(--link-headline-m-line-height, 36px);
  font-size:var(--link-headline-m-font-size, 28px);
  letter-spacing:var(--link-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-m-paragraph-spacing, 15.4px);
  -webkit-text-decoration:var(--link-headline-m-text-decoration, underline);
          text-decoration:var(--link-headline-m-text-decoration, underline);
}
.link--ji1CU[data-size=m][data-purpose=headline][data-text-mode=on-accent]{
  font-family:var(--link-headline-m-font-family, SB Sans Interface);
  font-weight:var(--link-headline-m-font-weight, Semibold);
  line-height:var(--link-headline-m-line-height, 36px);
  font-size:var(--link-headline-m-font-size, 28px);
  letter-spacing:var(--link-headline-m-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-m-paragraph-spacing, 15.4px);
  -webkit-text-decoration:var(--link-headline-m-text-decoration, underline);
          text-decoration:var(--link-headline-m-text-decoration, underline);
}
.link--ji1CU[data-size=m][data-purpose=title][data-text-mode=default]{
  font-family:var(--sans-title-m-font-family, SB Sans Interface);
  font-weight:var(--sans-title-m-font-weight, Semibold);
  line-height:var(--sans-title-m-line-height, 24px);
  font-size:var(--sans-title-m-font-size, 16px);
  letter-spacing:var(--sans-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-m-paragraph-spacing, 8.8px);
}
.link--ji1CU[data-size=m][data-purpose=title][data-text-mode=accent]{
  font-family:var(--link-title-m-font-family, SB Sans Interface);
  font-weight:var(--link-title-m-font-weight, Semibold);
  line-height:var(--link-title-m-line-height, 24px);
  font-size:var(--link-title-m-font-size, 16px);
  letter-spacing:var(--link-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-m-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-title-m-text-decoration, underline);
          text-decoration:var(--link-title-m-text-decoration, underline);
}
.link--ji1CU[data-size=m][data-purpose=title][data-text-mode=on-accent]{
  font-family:var(--link-title-m-font-family, SB Sans Interface);
  font-weight:var(--link-title-m-font-weight, Semibold);
  line-height:var(--link-title-m-line-height, 24px);
  font-size:var(--link-title-m-font-size, 16px);
  letter-spacing:var(--link-title-m-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-m-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-title-m-text-decoration, underline);
          text-decoration:var(--link-title-m-text-decoration, underline);
}
.link--ji1CU[data-size=m][data-purpose=label][data-text-mode=default]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.link--ji1CU[data-size=m][data-purpose=label][data-text-mode=accent]{
  font-family:var(--link-label-m-font-family, SB Sans Interface);
  font-weight:var(--link-label-m-font-weight, Semibold);
  line-height:var(--link-label-m-line-height, 16px);
  font-size:var(--link-label-m-font-size, 12px);
  letter-spacing:var(--link-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-m-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-label-m-text-decoration, underline);
          text-decoration:var(--link-label-m-text-decoration, underline);
}
.link--ji1CU[data-size=m][data-purpose=label][data-text-mode=on-accent]{
  font-family:var(--link-label-m-font-family, SB Sans Interface);
  font-weight:var(--link-label-m-font-weight, Semibold);
  line-height:var(--link-label-m-line-height, 16px);
  font-size:var(--link-label-m-font-size, 12px);
  letter-spacing:var(--link-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-m-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-label-m-text-decoration, underline);
          text-decoration:var(--link-label-m-text-decoration, underline);
}
.link--ji1CU[data-size=m][data-purpose=body][data-text-mode=default]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.link--ji1CU[data-size=m][data-purpose=body][data-text-mode=accent]{
  font-family:var(--link-body-m-font-family, SB Sans Interface);
  font-weight:var(--link-body-m-font-weight, Regular);
  line-height:var(--link-body-m-line-height, 20px);
  font-size:var(--link-body-m-font-size, 14px);
  letter-spacing:var(--link-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-m-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-body-m-text-decoration, underline);
          text-decoration:var(--link-body-m-text-decoration, underline);
}
.link--ji1CU[data-size=m][data-purpose=body][data-text-mode=on-accent]{
  font-family:var(--link-body-m-font-family, SB Sans Interface);
  font-weight:var(--link-body-m-font-weight, Regular);
  line-height:var(--link-body-m-line-height, 20px);
  font-size:var(--link-body-m-font-size, 14px);
  letter-spacing:var(--link-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-m-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-body-m-text-decoration, underline);
          text-decoration:var(--link-body-m-text-decoration, underline);
}
.link--ji1CU[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.link--ji1CU[data-size=l]{
  height:var(--size-link-l, 24px);
  gap:var(--space-link-gap-single, 0px);
  height:auto;
}
.link--ji1CU[data-size=l][data-purpose=display][data-text-mode=default]{
  font-family:var(--sans-display-l-font-family, SB Sans Interface);
  font-weight:var(--sans-display-l-font-weight, Bold);
  line-height:var(--sans-display-l-line-height, 72px);
  font-size:var(--sans-display-l-font-size, 56px);
  letter-spacing:var(--sans-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-display-l-paragraph-spacing, 30.8px);
}
.link--ji1CU[data-size=l][data-purpose=display][data-text-mode=accent]{
  font-family:var(--link-display-l-font-family, SB Sans Interface);
  font-weight:var(--link-display-l-font-weight, Bold);
  line-height:var(--link-display-l-line-height, 72px);
  font-size:var(--link-display-l-font-size, 56px);
  letter-spacing:var(--link-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-l-paragraph-spacing, 30.8px);
  -webkit-text-decoration:var(--link-display-l-text-decoration, underline);
          text-decoration:var(--link-display-l-text-decoration, underline);
}
.link--ji1CU[data-size=l][data-purpose=display][data-text-mode=on-accent]{
  font-family:var(--link-display-l-font-family, SB Sans Interface);
  font-weight:var(--link-display-l-font-weight, Bold);
  line-height:var(--link-display-l-line-height, 72px);
  font-size:var(--link-display-l-font-size, 56px);
  letter-spacing:var(--link-display-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-display-l-paragraph-spacing, 30.8px);
  -webkit-text-decoration:var(--link-display-l-text-decoration, underline);
          text-decoration:var(--link-display-l-text-decoration, underline);
}
.link--ji1CU[data-size=l][data-purpose=headline][data-text-mode=default]{
  font-family:var(--sans-headline-l-font-family, SB Sans Interface);
  font-weight:var(--sans-headline-l-font-weight, Semibold);
  line-height:var(--sans-headline-l-line-height, 40px);
  font-size:var(--sans-headline-l-font-size, 32px);
  letter-spacing:var(--sans-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--sans-headline-l-paragraph-spacing, 17.6px);
}
.link--ji1CU[data-size=l][data-purpose=headline][data-text-mode=accent]{
  font-family:var(--link-headline-l-font-family, SB Sans Interface);
  font-weight:var(--link-headline-l-font-weight, Semibold);
  line-height:var(--link-headline-l-line-height, 40px);
  font-size:var(--link-headline-l-font-size, 32px);
  letter-spacing:var(--link-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-l-paragraph-spacing, 17.6px);
  -webkit-text-decoration:var(--link-headline-l-text-decoration, underline);
          text-decoration:var(--link-headline-l-text-decoration, underline);
}
.link--ji1CU[data-size=l][data-purpose=headline][data-text-mode=on-accent]{
  font-family:var(--link-headline-l-font-family, SB Sans Interface);
  font-weight:var(--link-headline-l-font-weight, Semibold);
  line-height:var(--link-headline-l-line-height, 40px);
  font-size:var(--link-headline-l-font-size, 32px);
  letter-spacing:var(--link-headline-l-letter-spacing, -0.5px);
  paragraph-spacing:var(--link-headline-l-paragraph-spacing, 17.6px);
  -webkit-text-decoration:var(--link-headline-l-text-decoration, underline);
          text-decoration:var(--link-headline-l-text-decoration, underline);
}
.link--ji1CU[data-size=l][data-purpose=title][data-text-mode=default]{
  font-family:var(--sans-title-l-font-family, SB Sans Interface);
  font-weight:var(--sans-title-l-font-weight, Semibold);
  line-height:var(--sans-title-l-line-height, 28px);
  font-size:var(--sans-title-l-font-size, 20px);
  letter-spacing:var(--sans-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--sans-title-l-paragraph-spacing, 11px);
}
.link--ji1CU[data-size=l][data-purpose=title][data-text-mode=accent]{
  font-family:var(--link-title-l-font-family, SB Sans Interface);
  font-weight:var(--link-title-l-font-weight, Semibold);
  line-height:var(--link-title-l-line-height, 28px);
  font-size:var(--link-title-l-font-size, 20px);
  letter-spacing:var(--link-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-l-paragraph-spacing, 11px);
  -webkit-text-decoration:var(--link-title-l-text-decoration, underline);
          text-decoration:var(--link-title-l-text-decoration, underline);
}
.link--ji1CU[data-size=l][data-purpose=title][data-text-mode=on-accent]{
  font-family:var(--link-title-l-font-family, SB Sans Interface);
  font-weight:var(--link-title-l-font-weight, Semibold);
  line-height:var(--link-title-l-line-height, 28px);
  font-size:var(--link-title-l-font-size, 20px);
  letter-spacing:var(--link-title-l-letter-spacing, 0.15px);
  paragraph-spacing:var(--link-title-l-paragraph-spacing, 11px);
  -webkit-text-decoration:var(--link-title-l-text-decoration, underline);
          text-decoration:var(--link-title-l-text-decoration, underline);
}
.link--ji1CU[data-size=l][data-purpose=label][data-text-mode=default]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.link--ji1CU[data-size=l][data-purpose=label][data-text-mode=accent]{
  font-family:var(--link-label-l-font-family, SB Sans Interface);
  font-weight:var(--link-label-l-font-weight, Semibold);
  line-height:var(--link-label-l-line-height, 20px);
  font-size:var(--link-label-l-font-size, 14px);
  letter-spacing:var(--link-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-l-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-label-l-text-decoration, underline);
          text-decoration:var(--link-label-l-text-decoration, underline);
}
.link--ji1CU[data-size=l][data-purpose=label][data-text-mode=on-accent]{
  font-family:var(--link-label-l-font-family, SB Sans Interface);
  font-weight:var(--link-label-l-font-weight, Semibold);
  line-height:var(--link-label-l-line-height, 20px);
  font-size:var(--link-label-l-font-size, 14px);
  letter-spacing:var(--link-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--link-label-l-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-label-l-text-decoration, underline);
          text-decoration:var(--link-label-l-text-decoration, underline);
}
.link--ji1CU[data-size=l][data-purpose=body][data-text-mode=default]{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.link--ji1CU[data-size=l][data-purpose=body][data-text-mode=accent]{
  font-family:var(--link-body-l-font-family, SB Sans Interface);
  font-weight:var(--link-body-l-font-weight, Regular);
  line-height:var(--link-body-l-line-height, 24px);
  font-size:var(--link-body-l-font-size, 16px);
  letter-spacing:var(--link-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-l-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-body-l-text-decoration, underline);
          text-decoration:var(--link-body-l-text-decoration, underline);
}
.link--ji1CU[data-size=l][data-purpose=body][data-text-mode=on-accent]{
  font-family:var(--link-body-l-font-family, SB Sans Interface);
  font-weight:var(--link-body-l-font-weight, Regular);
  line-height:var(--link-body-l-line-height, 24px);
  font-size:var(--link-body-l-font-size, 16px);
  letter-spacing:var(--link-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-l-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-body-l-text-decoration, underline);
          text-decoration:var(--link-body-l-text-decoration, underline);
}
.link--ji1CU[data-size=l] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.icon--lK7mr{
  flex-shrink:0;
}`,""]),d.locals={link:"link--ji1CU",icon:"icon--lK7mr"};const s=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringEnd/styles.module.css":((_,v,e)=>{e.d(v,{A:()=>s});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(o),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),h=e.n(m),d=h()(y());d.push([_.id,`.text1Line--mTWX0{
  overflow:hidden;
  display:block;
  max-width:100%;
  text-overflow:initial;
  white-space:nowrap;
}

.ellipsis--I9bny{
  text-overflow:ellipsis;
}

.text2AndMoreLines--NgqBb{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:var(--max-lines);
  max-width:100%;
  margin:0;
  text-overflow:ellipsis;
  word-break:initial;
}

.tooltipTrigger--ZD73L{
  display:grid;
}`,""]),d.locals={text1Line:"text1Line--mTWX0",ellipsis:"ellipsis--I9bny",text2AndMoreLines:"text2AndMoreLines--NgqBb",tooltipTrigger:"tooltipTrigger--ZD73L"};const s=d}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/helperComponents/TruncateStringMiddle/styles.module.css":((_,v,e)=>{e.d(v,{A:()=>s});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),y=e.n(o),m=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),h=e.n(m),d=h()(y());d.push([_.id,`.wrapper--O7epi{
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:column;
  max-width:100%;
  white-space:nowrap;
}

.truncatedText--ewHRV{
  position:absolute;
  left:0;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
}

.fullText--o7Tur{
  display:-webkit-box;
  -webkit-box-orient:vertical;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  margin:0;
  opacity:0;
}

.textContainer--tTWtT{
  display:inline-flex;
}`,""]),d.locals={wrapper:"wrapper--O7epi",truncatedText:"truncatedText--ewHRV",fullText:"fullText--o7Tur",textContainer:"textContainer--tTWtT"};const s=d})}]);})();
