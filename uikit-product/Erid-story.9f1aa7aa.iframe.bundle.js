"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[8021],{"./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js":((s,a,e)=>{e.d(a,{m:()=>x});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/components/PopoverPrivate/PopoverPrivate.js"),n=e("./node_modules/.pnpm/@snack-uikit+popover-private@0.14.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/popover-private/dist/esm/constants.js");const l=[n.El.Top,n.El.Right,n.El.Bottom,n.El.Left];var t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(t),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),k=e.n(b),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),v=e.n(h),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),S=e.n(O),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=e.n(P),_=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),m=e.n(_),f=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css"),u={};u.styleTagTransform=m(),u.setAttributes=S(),u.insert=v().bind(null,"head"),u.domAPI=k(),u.insertStyleElement=T();var y=p()(f.A,u);const g=f.A&&f.A.locals?f.A.locals:void 0;var j=function(r,A){var E={};for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&A.indexOf(d)<0&&(E[d]=r[d]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,d=Object.getOwnPropertySymbols(r);c<d.length;c++)A.indexOf(d[c])<0&&Object.prototype.propertyIsEnumerable.call(r,d[c])&&(E[d[c]]=r[d[c]]);return E};function x(r){var{tip:A,trigger:E="hoverAndFocusVisible",placement:d="top",children:c,triggerRef:C,disableMaxWidth:D=!1}=r,L=j(r,["tip","trigger","placement","children","triggerRef","disableMaxWidth"]);return!c&&!C?null:(0,o.jsx)(i.Z,Object.assign({placement:d,popoverContent:(0,o.jsx)("div",{className:g.tooltipContainer,"data-disable-max-width":D,children:A}),trigger:E,triggerRef:C,arrowContainerClassName:g.tooltipArrowContainer,arrowElementClassName:g.tooltipArrowElement,hasArrow:!0,fallbackPlacements:l},L,{children:c}))}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/styles.module.css":((s,a,e)=>{e.d(a,{A:()=>p});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(o),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(i());t.push([s.id,`.tooltipContainer--trugl{
  padding:var(--space-tooltip-padding-single, 16px);
  border-radius:var(--radius-tooltip-container, 24px);
  min-width:var(--size-tooltip-container-min-width, 60px);
  max-width:var(--size-tooltip-container-max-width, 416px);
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  overflow:hidden;
  box-sizing:border-box;
  color:var(--sys-invert-neutral-text-main, #e6e8ef);
  word-wrap:break-word;
  background-color:var(--sys-invert-neutral-background, #30303c);
}
.tooltipContainer--trugl[data-disable-max-width=true]{
  max-width:calc(100vw - var(--dimension-2m, 16px));
}

.tooltipArrowContainer--kKMnt{
  padding-left:var(--space-popover-popover-pointer-offset, 4px);
  padding-top:var(--space-tooltip-tooltip-pointer-padding, 24px);
  padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 24px);
  position:absolute;
  display:flex;
  padding-top:0;
  padding-bottom:0;
  color:var(--sys-invert-neutral-background, #30303c);
}

.tooltipArrowElement--gHa3m{
  height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);
  width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);
  fill:currentColor;
}`,""]),t.locals={tooltipContainer:"tooltipContainer--trugl",tooltipArrowContainer:"tooltipArrowContainer--kKMnt",tooltipArrowElement:"tooltipArrowElement--gHa3m"};const p=t}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-tag/src/components/Erid/styles.module.scss":((s,a,e)=>{e.d(a,{A:()=>p});var o=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(o),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(i());t.push([s.id,".label--naX3J{font-family:var(--light-label-s-font-family, SB Sans Text);font-weight:var(--light-label-s-font-weight, Regular);line-height:var(--light-label-s-line-height, 14px);font-size:var(--light-label-s-font-size, 11px);letter-spacing:var(--light-label-s-letter-spacing, 0px);paragraph-spacing:var(--light-label-s-paragraph-spacing, 6.05px);color:var(--sys-graphite-text-main, #222222);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.root--vZ_RP{display:inline-flex;align-items:center;height:24px;background:var(--sys-graphite-decor-default, #ececec);padding:0 8px;box-sizing:border-box;max-width:100%}.root--vZ_RP:focus-visible{outline-width:var(--border-state-focus-s-border-width, 2px);outline-style:var(--border-state-focus-s-border-style, solid);outline-color:var(--border-state-focus-s-border-color, );outline-color:var(--sys-available-complementary, #15151b)}.root--vZ_RP[data-appearance=invert-neutral]{background:var(--sys-opacity-disabled, rgba(255, 255, 255, 0.0784313725))}.root--vZ_RP[data-appearance=invert-neutral] .label--naX3J{color:var(--sys-invert-neutral-text-support, #bec2cf)}",""]),t.locals={label:"label--naX3J",root:"root--vZ_RP"};const p=t}),"./packages/site-tag/CHANGELOG.md":(s=>{s.exports=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.1.0 (2026-02-02)


### Bug Fixes

* **FF-7846:** replace tokens usage ([b690050](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b6900500e2f2c73e184f8b67f689f4a42571a154))
* **FF-7861:** massive scope update ([b93fa9f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b93fa9fed13a579f5f02efc16ea43d8bedbd5aca))
* **FF-7861:** update all 0 versions to 1 ([737c2b4](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/737c2b494d48be5132554ae9f03c960a8cbe3a34))
* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))
* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))
* **PDS-1946:** replace predefined tags in HeroMain with TagSpecial ([8912e09](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/8912e099402df87b35c485c3d456e2904205f8c7))
* **PDS-2079:** remove yellow appearance from TagSpecial in site-tag ([ae9b220](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/ae9b2206d9f76891b263bea098fcf0a6096d8050))
* **PDS-2079:** yellow tag tooltip icon color ([76c9cf9](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/76c9cf9b5b1b3465816086c56323e2d6f261e86b))


### Dependencies

* **FF-4704:** up deps ([7da95ef](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/7da95ef6551ced9a63c75970f43b047cc564cedc))


### Features

* **FF-6220:** added Erid tag to site-tag ([a257f70](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/a257f700ddf9e0ebd2b65da146eb8d3f84b8df2e))
* **PDS-1424:** add tag predefined ([041a976](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/041a9766fda9b0d9287d071e3d0ace5d8b48775f))
* **PDS-1424:** TagPredefined with variant instead of separate components ([5fc3200](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/5fc320012c82285636dfab0e7d4146ecd28f5a65))
* **PDS-1643:** remove sizes from site-tag ([a107b43](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/a107b432ec3cca2d55202d8e1b8b5295fe318a49))
* **PDS-2079:** remove TagPredefined and usage ([d0f8d2f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d0f8d2f590c09da1bf113b89372d0642ccf8b20d))
* **SITE-10072:** update erid background color ([41cdb61](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/41cdb61654c8d9b1c539d006fc812cc09c6b7639))





## 0.4.1 (2025-12-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.4.0 (2025-12-15)


### Features

* **SITE-10072:** update erid background color ([41cdb61](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/41cdb61654c8d9b1c539d006fc812cc09c6b7639))





## 0.3.16 (2025-12-08)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.15 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.14 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.13 (2025-11-13)


### Bug Fixes

* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))





## 0.3.12 (2025-11-13)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.11 (2025-11-12)


### Bug Fixes

* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))





## 0.3.10 (2025-11-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.9 (2025-11-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.8 (2025-09-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.7 (2025-09-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.6 (2025-08-19)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.5 (2025-08-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.4 (2025-08-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.3 (2025-07-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@5.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.2 (2025-07-16)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@5.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.3.1 (2025-06-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@4.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.3.0 (2025-04-09)


### Features

* **FF-6220:** added Erid tag to site-tag ([a257f70](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/a257f700ddf9e0ebd2b65da146eb8d3f84b8df2e))





# 0.2.0 (2025-04-03)


### Bug Fixes

* **PDS-2079:** remove yellow appearance from TagSpecial in site-tag ([ae9b220](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/ae9b2206d9f76891b263bea098fcf0a6096d8050))


### Features

* **PDS-2079:** remove TagPredefined and usage ([d0f8d2f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d0f8d2f590c09da1bf113b89372d0642ccf8b20d))





## 0.1.2 (2025-04-01)


### Bug Fixes

* **PDS-2079:** yellow tag tooltip icon color ([76c9cf9](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/76c9cf9b5b1b3465816086c56323e2d6f261e86b))





## 0.1.1 (2025-03-21)


### Bug Fixes

* **PDS-1946:** replace predefined tags in HeroMain with TagSpecial ([8912e09](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/8912e099402df87b35c485c3d456e2904205f8c7))





# 0.1.0 (2025-03-07)


### Features

* **PDS-1643:** remove sizes from site-tag ([a107b43](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/a107b432ec3cca2d55202d8e1b8b5295fe318a49))





## 0.0.4 (2025-02-10)


### Dependencies

* **FF-4704:** up deps ([7da95ef](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/7da95ef6551ced9a63c75970f43b047cc564cedc))





## <small>0.0.3 (2025-02-06)</small>

* feat(PDS-1424): TagPredefined with variant instead of separate components ([5fc3200](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/5fc3200))





## <small>0.0.2 (2025-02-05)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.8](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.0.1 (2025-02-05)</small>

* feat(PDS-1424): add tag predefined ([041a976](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/041a976))





## CHANGELOG

### v0.0.0

- Initial version
`}),"./packages/site-tag/README.md":(s=>{s.exports=`# Site Tag

## Installation
\`npm i @cloud-ru/uikit-product-site-tag\`

[Changelog](./CHANGELOG.md)

site tag predifined
`}),"./packages/site-tag/package.json":(s=>{s.exports=JSON.parse('{"UU":"@cloud-ru/uikit-product-site-tag","rE":"1.1.0"}')}),"./packages/site-tag/src/components/Erid/Erid.tsx":((s,a,e)=>{e.d(a,{d:()=>y});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.16.2_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),n=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=e.n(n),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),p=e.n(t),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),k=e.n(b),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),v=e.n(h),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=e.n(O),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),T=e.n(P),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-tag/src/components/Erid/styles.module.scss"),m={};m.styleTagTransform=T(),m.setAttributes=v(),m.insert=k().bind(null,"head"),m.domAPI=p(),m.insertStyleElement=S();var f=l()(_.A,m);const u=_.A&&_.A.locals?_.A.locals:void 0;function y({tip:g,className:j,appearance:x}){return(0,o.jsx)(i.m,{triggerClassName:j,tip:g,placement:"bottom-end",children:(0,o.jsx)("span",{"data-appearance":x,className:u.root,tabIndex:0,children:(0,o.jsx)("span",{className:u.label,children:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430"})})})}try{y.displayName="Erid",y.__docgenInfo={description:"",displayName:"Erid",props:{tip:{defaultValue:null,description:"\u0422\u0435\u043A\u0441\u0442 \u0432 tooltip",name:"tip",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"CSS-\u043A\u043B\u0430\u0441\u0441",name:"className",required:!1,type:{name:"string"}},appearance:{defaultValue:null,description:"\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434 Erid",name:"appearance",required:!0,type:{name:"enum",value:[{value:'"neutral"'},{value:'"invert-neutral"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/site-tag/src/components/Erid/Erid.tsx#Erid"]={docgenInfo:y.__docgenInfo,name:"Erid",path:"packages/site-tag/src/components/Erid/Erid.tsx#Erid"})}catch(g){}}),"./packages/site-tag/stories/Erid.story.tsx":((s,a,e)=>{e.r(a),e.d(a,{default:()=>b,erid:()=>h});var o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),i=e("./packages/site-tag/CHANGELOG.md"),n=e("./packages/site-tag/package.json"),l=e("./packages/site-tag/README.md"),t=e("./packages/site-tag/src/components/Erid/Erid.tsx"),b={title:"Site/Tag/Erid",component:t.d};const h={render:({...v})=>(0,o.jsx)(t.d,{...v}),args:{tip:"Hello world",appearance:"neutral"},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${n.rE}`,l,i]},packageName:n.UU}}})}]);})();
