"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7980],{"./node_modules/.pnpm/@snack-uikit+link@0.15.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/Link.js":((y,c,e)=>{e.d(c,{N:()=>B});var i=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),u=e.n(p),v=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.6.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),l=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const f={InvertNeutral:"invert-neutral",Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},b={S:"s",M:"m",L:"l"},K={Self:"_self",Blank:"_blank",Parent:"_parent",Top:"_top"},x={Default:"default",Accent:"accent",OnAccent:"on-accent"};var k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(k),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),S=e.n(g),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(j),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_=e.n(I),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(w),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(A),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+link@0.15.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/styles.module.css"),r={};r.styleTagTransform=E(),r.setAttributes=_(),r.insert=T().bind(null,"head"),r.domAPI=S(),r.insertStyleElement=z();var U=h()(d.A,r);const P=d.A&&d.A.locals?d.A.locals:void 0;var O=function(t,n){var s={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(s[a[o]]=t[a[o]]);return s};function B(t){var{text:n="",className:s,href:a="#",target:o="_blank",download:R,onClick:D,textMode:M=x.Default,size:C=b.S,appearance:L=f.Primary,insideText:m=!1,truncateVariant:W}=t,N=O(t,["text","className","href","target","download","onClick","textMode","size","appearance","insideText","truncateVariant"]);return(0,i.jsx)("a",Object.assign({className:u()(P.link,s),href:a,target:o,download:R,onClick:D},(0,l.z7)(N),{"data-size":C,"data-text-mode":M,"data-appearance":L,"data-inside-text":m||void 0,rel:o==="_blank"?"noopener noreferrer":void 0,children:m?n:(0,i.jsx)(v.m,{text:n,maxLines:1,variant:W})}))}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+link@0.15.9_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/link/dist/esm/components/styles.module.css":((y,c,e)=>{e.d(c,{A:()=>f});var i=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(i),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),v=e.n(u),l=v()(p());l.push([y.id,`.link--STljI{
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
.link--STljI[data-inside-text]{
  display:inline;
}
.link--STljI[data-appearance=invert-neutral][data-text-mode=default]{
  color:var(--sys-invert-neutral-text-support, #bec2cf);
}
.link--STljI[data-appearance=invert-neutral][data-text-mode=default]:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.link--STljI[data-appearance=invert-neutral][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=invert-neutral][data-text-mode=accent]{
  color:var(--sys-invert-neutral-accent-default, #cfd2dc);
}
.link--STljI[data-appearance=invert-neutral][data-text-mode=accent]:hover{
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
}
.link--STljI[data-appearance=invert-neutral][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--STljI[data-appearance=invert-neutral][data-text-mode=on-accent]{
  color:var(--sys-invert-neutral-on-accent, #393a46);
}
.link--STljI[data-appearance=invert-neutral][data-text-mode=on-accent]:hover{
  color:var(--sys-invert-neutral-on-accent, #393a46);
  opacity:var(--opacity-a080, 0.8);
}
.link--STljI[data-appearance=invert-neutral][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-invert-neutral-on-accent, #393a46);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--STljI[data-appearance=neutral][data-text-mode=default]{
  color:var(--sys-neutral-text-support, #6d707f);
}
.link--STljI[data-appearance=neutral][data-text-mode=default]:hover{
  color:var(--sys-neutral-text-main, #41424e);
}
.link--STljI[data-appearance=neutral][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-main, #41424e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=neutral][data-text-mode=accent]{
  color:var(--sys-neutral-accent-default, #787b8a);
}
.link--STljI[data-appearance=neutral][data-text-mode=accent]:hover{
  color:var(--sys-neutral-text-main, #41424e);
}
.link--STljI[data-appearance=neutral][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-main, #41424e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=neutral][data-text-mode=on-accent]{
  color:var(--sys-neutral-on-accent, #ffffff);
}
.link--STljI[data-appearance=neutral][data-text-mode=on-accent]:hover{
  color:var(--sys-neutral-on-accent, #ffffff);
  opacity:var(--opacity-a080, 0.8);
}
.link--STljI[data-appearance=neutral][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-on-accent, #ffffff);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--STljI[data-appearance=primary][data-text-mode=default]{
  color:var(--sys-primary-text-support, #5b4796);
}
.link--STljI[data-appearance=primary][data-text-mode=default]:hover{
  color:var(--sys-primary-text-main, #382a62);
}
.link--STljI[data-appearance=primary][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-primary-text-main, #382a62);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=primary][data-text-mode=accent]{
  color:var(--sys-primary-accent-default, #794ed3);
}
.link--STljI[data-appearance=primary][data-text-mode=accent]:hover{
  color:var(--sys-primary-text-main, #382a62);
}
.link--STljI[data-appearance=primary][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-primary-text-main, #382a62);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=primary][data-text-mode=on-accent]{
  color:var(--sys-primary-on-accent, #fdfbff);
}
.link--STljI[data-appearance=primary][data-text-mode=on-accent]:hover{
  color:var(--sys-primary-on-accent, #fdfbff);
  opacity:var(--opacity-a080, 0.8);
}
.link--STljI[data-appearance=primary][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-primary-on-accent, #fdfbff);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--STljI[data-appearance=red][data-text-mode=default]{
  color:var(--sys-red-text-support, #ae514c);
}
.link--STljI[data-appearance=red][data-text-mode=default]:hover{
  color:var(--sys-red-text-main, #7a2d2d);
}
.link--STljI[data-appearance=red][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-main, #7a2d2d);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=red][data-text-mode=accent]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.link--STljI[data-appearance=red][data-text-mode=accent]:hover{
  color:var(--sys-red-text-main, #7a2d2d);
}
.link--STljI[data-appearance=red][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-text-main, #7a2d2d);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=red][data-text-mode=on-accent]{
  color:var(--sys-red-on-accent, #fffbf9);
}
.link--STljI[data-appearance=red][data-text-mode=on-accent]:hover{
  color:var(--sys-red-on-accent, #fffbf9);
  opacity:var(--opacity-a080, 0.8);
}
.link--STljI[data-appearance=red][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-red-on-accent, #fffbf9);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--STljI[data-appearance=orange][data-text-mode=default]{
  color:var(--sys-orange-text-support, #bb733e);
}
.link--STljI[data-appearance=orange][data-text-mode=default]:hover{
  color:var(--sys-orange-text-main, #884c23);
}
.link--STljI[data-appearance=orange][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-orange-text-main, #884c23);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=orange][data-text-mode=accent]{
  color:var(--sys-orange-accent-default, #fb8e42);
}
.link--STljI[data-appearance=orange][data-text-mode=accent]:hover{
  color:var(--sys-orange-text-main, #884c23);
}
.link--STljI[data-appearance=orange][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-orange-text-main, #884c23);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=orange][data-text-mode=on-accent]{
  color:var(--sys-orange-on-accent, #fffcf4);
}
.link--STljI[data-appearance=orange][data-text-mode=on-accent]:hover{
  color:var(--sys-orange-on-accent, #fffcf4);
  opacity:var(--opacity-a080, 0.8);
}
.link--STljI[data-appearance=orange][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-orange-on-accent, #fffcf4);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--STljI[data-appearance=blue][data-text-mode=default]{
  color:var(--sys-blue-text-support, #4877b0);
}
.link--STljI[data-appearance=blue][data-text-mode=default]:hover{
  color:var(--sys-blue-text-main, #2b537e);
}
.link--STljI[data-appearance=blue][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-blue-text-main, #2b537e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=blue][data-text-mode=accent]{
  color:var(--sys-blue-accent-default, #5388d1);
}
.link--STljI[data-appearance=blue][data-text-mode=accent]:hover{
  color:var(--sys-blue-text-main, #2b537e);
}
.link--STljI[data-appearance=blue][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-blue-text-main, #2b537e);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=blue][data-text-mode=on-accent]{
  color:var(--sys-blue-on-accent, #fdfeff);
}
.link--STljI[data-appearance=blue][data-text-mode=on-accent]:hover{
  color:var(--sys-blue-on-accent, #fdfeff);
  opacity:var(--opacity-a080, 0.8);
}
.link--STljI[data-appearance=blue][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-blue-on-accent, #fdfeff);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--STljI[data-appearance=violet][data-text-mode=default]{
  color:var(--sys-violet-text-support, #8c639b);
}
.link--STljI[data-appearance=violet][data-text-mode=default]:hover{
  color:var(--sys-violet-text-main, #59446a);
}
.link--STljI[data-appearance=violet][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-violet-text-main, #59446a);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=violet][data-text-mode=accent]{
  color:var(--sys-violet-accent-default, #aa6cc1);
}
.link--STljI[data-appearance=violet][data-text-mode=accent]:hover{
  color:var(--sys-violet-text-main, #59446a);
}
.link--STljI[data-appearance=violet][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-violet-text-main, #59446a);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=violet][data-text-mode=on-accent]{
  color:var(--sys-violet-on-accent, #fdfdfd);
}
.link--STljI[data-appearance=violet][data-text-mode=on-accent]:hover{
  color:var(--sys-violet-on-accent, #fdfdfd);
  opacity:var(--opacity-a080, 0.8);
}
.link--STljI[data-appearance=violet][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-violet-on-accent, #fdfdfd);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--STljI[data-appearance=pink][data-text-mode=default]{
  color:var(--sys-pink-text-support, #ae5e80);
}
.link--STljI[data-appearance=pink][data-text-mode=default]:hover{
  color:var(--sys-pink-text-main, #754158);
}
.link--STljI[data-appearance=pink][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-pink-text-main, #754158);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=pink][data-text-mode=accent]{
  color:var(--sys-pink-accent-default, #d1668e);
}
.link--STljI[data-appearance=pink][data-text-mode=accent]:hover{
  color:var(--sys-pink-text-main, #754158);
}
.link--STljI[data-appearance=pink][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-pink-text-main, #754158);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=pink][data-text-mode=on-accent]{
  color:var(--sys-pink-on-accent, #fdfcfc);
}
.link--STljI[data-appearance=pink][data-text-mode=on-accent]:hover{
  color:var(--sys-pink-on-accent, #fdfcfc);
  opacity:var(--opacity-a080, 0.8);
}
.link--STljI[data-appearance=pink][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-pink-on-accent, #fdfcfc);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--STljI[data-appearance=yellow][data-text-mode=default]{
  color:var(--sys-yellow-text-support, #b78c32);
}
.link--STljI[data-appearance=yellow][data-text-mode=default]:hover{
  color:var(--sys-yellow-text-main, #815f19);
}
.link--STljI[data-appearance=yellow][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-yellow-text-main, #815f19);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=yellow][data-text-mode=accent]{
  color:var(--sys-yellow-accent-default, #e2b134);
}
.link--STljI[data-appearance=yellow][data-text-mode=accent]:hover{
  color:var(--sys-yellow-text-main, #815f19);
}
.link--STljI[data-appearance=yellow][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-yellow-text-main, #815f19);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=yellow][data-text-mode=on-accent]{
  color:var(--sys-yellow-on-accent, #583f1f);
}
.link--STljI[data-appearance=yellow][data-text-mode=on-accent]:hover{
  color:var(--sys-yellow-on-accent, #583f1f);
  opacity:var(--opacity-a080, 0.8);
}
.link--STljI[data-appearance=yellow][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-yellow-on-accent, #583f1f);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--STljI[data-appearance=green][data-text-mode=default]{
  color:var(--sys-green-text-support, #55915a);
}
.link--STljI[data-appearance=green][data-text-mode=default]:hover{
  color:var(--sys-green-text-main, #3d6035);
}
.link--STljI[data-appearance=green][data-text-mode=default]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-green-text-main, #3d6035);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=green][data-text-mode=accent]{
  color:var(--sys-green-accent-default, #57b762);
}
.link--STljI[data-appearance=green][data-text-mode=accent]:hover{
  color:var(--sys-green-text-main, #3d6035);
}
.link--STljI[data-appearance=green][data-text-mode=accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-green-text-main, #3d6035);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.link--STljI[data-appearance=green][data-text-mode=on-accent]{
  color:var(--sys-green-on-accent, #fcfefa);
}
.link--STljI[data-appearance=green][data-text-mode=on-accent]:hover{
  color:var(--sys-green-on-accent, #fcfefa);
  opacity:var(--opacity-a080, 0.8);
}
.link--STljI[data-appearance=green][data-text-mode=on-accent]:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-green-on-accent, #fcfefa);
  opacity:var(--opacity-a080, 0.8);
  outline-color:var(--sys-available-on-complementary, #ffffff);
}
.link--STljI[data-size=s]{
  height:var(--size-link-s, 16px);
  gap:var(--space-link-gap-single, 0px);
}
.link--STljI[data-size=s][data-text-mode=default]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.link--STljI[data-size=s][data-text-mode=accent]{
  font-family:var(--link-body-s-font-family, SB Sans Interface);
  font-weight:var(--link-body-s-font-weight, Regular);
  line-height:var(--link-body-s-line-height, 16px);
  font-size:var(--link-body-s-font-size, 12px);
  letter-spacing:var(--link-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-s-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-body-s-text-decoration, underline);
          text-decoration:var(--link-body-s-text-decoration, underline);
}
.link--STljI[data-size=s][data-text-mode=on-accent]{
  font-family:var(--link-body-s-font-family, SB Sans Interface);
  font-weight:var(--link-body-s-font-weight, Regular);
  line-height:var(--link-body-s-line-height, 16px);
  font-size:var(--link-body-s-font-size, 12px);
  letter-spacing:var(--link-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-s-paragraph-spacing, 6.6px);
  -webkit-text-decoration:var(--link-body-s-text-decoration, underline);
          text-decoration:var(--link-body-s-text-decoration, underline);
}
.link--STljI[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.link--STljI[data-size=m]{
  height:var(--size-link-m, 20px);
  gap:var(--space-link-gap-single, 0px);
}
.link--STljI[data-size=m][data-text-mode=default]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.link--STljI[data-size=m][data-text-mode=accent]{
  font-family:var(--link-body-m-font-family, SB Sans Interface);
  font-weight:var(--link-body-m-font-weight, Regular);
  line-height:var(--link-body-m-line-height, 20px);
  font-size:var(--link-body-m-font-size, 14px);
  letter-spacing:var(--link-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-m-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-body-m-text-decoration, underline);
          text-decoration:var(--link-body-m-text-decoration, underline);
}
.link--STljI[data-size=m][data-text-mode=on-accent]{
  font-family:var(--link-body-m-font-family, SB Sans Interface);
  font-weight:var(--link-body-m-font-weight, Regular);
  line-height:var(--link-body-m-line-height, 20px);
  font-size:var(--link-body-m-font-size, 14px);
  letter-spacing:var(--link-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-m-paragraph-spacing, 7.7px);
  -webkit-text-decoration:var(--link-body-m-text-decoration, underline);
          text-decoration:var(--link-body-m-text-decoration, underline);
}
.link--STljI[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.link--STljI[data-size=l]{
  height:var(--size-link-l, 24px);
  gap:var(--space-link-gap-single, 0px);
}
.link--STljI[data-size=l][data-text-mode=default]{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.link--STljI[data-size=l][data-text-mode=accent]{
  font-family:var(--link-body-l-font-family, SB Sans Interface);
  font-weight:var(--link-body-l-font-weight, Regular);
  line-height:var(--link-body-l-line-height, 24px);
  font-size:var(--link-body-l-font-size, 16px);
  letter-spacing:var(--link-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-l-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-body-l-text-decoration, underline);
          text-decoration:var(--link-body-l-text-decoration, underline);
}
.link--STljI[data-size=l][data-text-mode=on-accent]{
  font-family:var(--link-body-l-font-family, SB Sans Interface);
  font-weight:var(--link-body-l-font-weight, Regular);
  line-height:var(--link-body-l-line-height, 24px);
  font-size:var(--link-body-l-font-size, 16px);
  letter-spacing:var(--link-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--link-body-l-paragraph-spacing, 8.8px);
  -webkit-text-decoration:var(--link-body-l-text-decoration, underline);
          text-decoration:var(--link-body-l-text-decoration, underline);
}
.link--STljI[data-size=l] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}

.icon--B6TLn{
  flex-shrink:0;
}`,""]),l.locals={link:"link--STljI",icon:"icon--B6TLn"};const f=l})}]);})();
