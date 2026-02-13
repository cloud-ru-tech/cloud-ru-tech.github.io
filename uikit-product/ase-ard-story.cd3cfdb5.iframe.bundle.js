"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9120],{"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-case-card/src/components/CaseCard/styles.module.scss":((i,n,e)=>{e.d(n,{A:()=>c});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(u),t=a()(l());t.push([i.id,'.root--wDqk3{border-radius:4px}.container--fOQ6u{box-sizing:border-box;width:100%;height:216px;background:var(--sys-neutral-background2-level, #ffffff);display:flex;justify-content:space-between;flex-direction:column}.container--fOQ6u[data-layout-type=tablet]{height:232px}.container--fOQ6u[data-layout-type=mobile]{height:192px}.image--ATaUi{height:46px}.image--ATaUi[data-layout-type=mobile]{height:42px}.categoryGroup--h56r8{display:flex;flex-direction:row;gap:4px;align-items:center;flex-wrap:wrap}.category--picxc{color:var(--sys-neutral-text-support, #6d707f)}.category--picxc:not(:last-child)::after{content:"\xB7";margin-left:4px;color:var(--sys-neutral-text-support, #6d707f)}.textContainer--eo1dH{display:flex;flex-direction:column;gap:4px}.description--znP4I{color:var(--sys-neutral-text-main, #41424e)}.description--znP4I mark{color:var(--sys-primary-text-light, #6aaf90);background-color:unset}.description--znP4I span{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical}.description--znP4I span[data-layout-type=mobile]{-webkit-line-clamp:5}.skeletonIcon--dZUad{width:120px;height:40px}',""]),t.locals={root:"root--wDqk3",container:"container--fOQ6u",image:"image--ATaUi",categoryGroup:"categoryGroup--h56r8",category:"category--picxc",textContainer:"textContainer--eo1dH",description:"description--znP4I",skeletonIcon:"skeletonIcon--dZUad"};const c=t}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-case-card/src/helperComponents/styles.module.scss":((i,n,e)=>{e.d(n,{A:()=>c});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),u=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),a=e.n(u),t=a()(l());t.push([i.id,".root--VbTCR{display:flex;flex-direction:column;gap:8px}.skeletonItems--qKTF0{height:12px}.skeletonText--kJTUc{height:14px}.skeletonTitle--ZF4iL{width:100%;height:14px}",""]),t.locals={root:"root--VbTCR",skeletonItems:"skeletonItems--qKTF0",skeletonText:"skeletonText--kJTUc",skeletonTitle:"skeletonTitle--ZF4iL"};const c=t}),"./packages/site-case-card/src/components/CaseCard/CaseCard.tsx":((i,n,e)=>{e.d(n,{D:()=>g});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/@snack-uikit+card@0.20.4_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js"),a=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.10_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(t),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),N=e.n(b),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),p=e.n(T),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),j=e.n(A),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(k),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(x),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-case-card/src/helperComponents/styles.module.scss"),r={};r.styleTagTransform=E(),r.setAttributes=j(),r.insert=p().bind(null,"head"),r.domAPI=N(),r.insertStyleElement=z();var Q=c()(_.A,r);const M=_.A&&_.A.locals?_.A.locals:void 0;function C(){return(0,s.jsxs)("div",{className:M.root,children:[(0,s.jsx)(u.E,{loading:!0,width:124,className:M.skeletonItems}),(0,s.jsx)(u.E,{loading:!0,className:M.skeletonTitle}),(0,s.jsx)(u.E,{loading:!0,width:200,className:M.skeletonText})]})}var y=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.6_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-case-card/src/components/CaseCard/styles.module.scss"),m={};m.styleTagTransform=E(),m.setAttributes=j(),m.insert=p().bind(null,"head"),m.domAPI=N(),m.insertStyleElement=z();var B=c()(y.A,m);const d=y.A&&y.A.locals?y.A.locals:void 0,f={mobile:"m",tablet:"m",desktop:"l",desktopSmall:"l"};function g({layoutType:o,img:v,description:O,categories:I,href:L,visibleCategories:S=!0,onClick:Y,loading:D}){const w=o==="desktop"||o==="desktopSmall"?"m":"s",P=o==="mobile"?"s":"m";return(0,s.jsx)(l.Z,{href:L,onClick:Y,size:f[o],className:d.root,children:(0,s.jsxs)("div",{className:d.container,"data-layout-type":o,children:[(0,s.jsx)(u.E,{loading:D,className:d.skeletonIcon,children:(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:v,className:d.image,alt:"img","data-layout-type":o})})}),D?(0,s.jsx)(C,{}):(0,s.jsxs)("div",{className:d.textContainer,children:[S&&I&&(0,s.jsx)("div",{className:d.categoryGroup,children:I.map(h=>(0,s.jsx)(a.o,{family:"sans",purpose:"body",size:w,className:d.category,children:h},h))}),(0,s.jsx)(a.o,{family:"sans",purpose:"title",size:P,className:d.description,children:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:O},"data-layout-type":o})})]})]})})}try{g.displayName="CaseCard",g.__docgenInfo={description:"",displayName:"CaseCard",props:{img:{defaultValue:null,description:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 img \u043B\u043E\u0433\u043E\u0442\u0438\u043F",name:"img",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",name:"href",required:!1,type:{name:"string"}},categories:{defaultValue:null,description:"\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439",name:"categories",required:!1,type:{name:"string[]"}},visibleCategories:{defaultValue:{value:"true"},description:"\u0424\u043B\u0430\u0433 \u043F\u043E\u043A\u0430\u0437\u0430 \u0438\u043B\u0438 \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439",name:"visibleCategories",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u0433\u0434\u0435 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u043C\u0435\u0447\u0430\u044E\u0442\u0441\u044F \u0442\u0435\u0433\u043E\u043C <mark></mark>",name:"description",required:!0,type:{name:"string"}},loading:{defaultValue:null,description:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",name:"loading",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"\u0421\u043E\u0431\u044B\u0442\u0438\u0435 \u043A\u043B\u0438\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>) => void)"}},layoutType:{defaultValue:null,description:"",name:"layoutType",required:!0,type:{name:"enum",value:[{value:'"mobile"'},{value:'"tablet"'},{value:'"desktop"'},{value:'"desktopSmall"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/site-case-card/src/components/CaseCard/CaseCard.tsx#CaseCard"]={docgenInfo:g.__docgenInfo,name:"CaseCard",path:"packages/site-case-card/src/components/CaseCard/CaseCard.tsx#CaseCard"})}catch(o){}}),"./packages/site-case-card/stories/\u0421ase\u0421ard.story.tsx":((i,n,e)=>{e.r(n),e.d(n,{caseCard:()=>T,default:()=>b});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const l=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.1.1 (2026-02-02)


### Bug Fixes

* **FF-7841:** update repo links ([1893c4a](https://github.com/cloud-ru-tech/uikit-product/commit/1893c4a3e600069f98ab37c728e167937faa3440))





# 1.1.0 (2026-02-02)


### Bug Fixes

* **FF-7846:** replace tokens usage ([b690050](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b6900500e2f2c73e184f8b67f689f4a42571a154))
* **FF-7861:** massive scope update ([b93fa9f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b93fa9fed13a579f5f02efc16ea43d8bedbd5aca))
* **FF-7861:** update all 0 versions to 1 ([737c2b4](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/737c2b494d48be5132554ae9f03c960a8cbe3a34))
* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))
* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))


### Features

* **SITE-10016:** add skeleton for case card ([2d0049a](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/2d0049ad0517de16895a7abafbeb4334ade894db))
* **SITE-10394:** add border radius ([5e950bc](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/5e950bce806fab0a3213eef811a7ebcb411f1860))
* **SITE-9900:** add new CaseCard component ([2b6f29b](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/2b6f29bcba24166b059a8f0955901c47b3c7cd15))
* **SITE-9945:** edit styles case card ([ad500cc](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/ad500ccfe4215b245308714a003b495a8721147d))
* **SITE-9975:** update href site-case-card ([e70ad89](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/e70ad89e2eacaec632c9fb2feeaa3f20908fcc23))





## 0.5.1 (2025-12-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.5.0 (2025-12-15)


### Features

* **SITE-10394:** add border radius ([5e950bc](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/5e950bce806fab0a3213eef811a7ebcb411f1860))





## 0.4.8 (2025-12-08)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.4.7 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.4.6 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.4.5 (2025-11-13)


### Bug Fixes

* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))





## 0.4.4 (2025-11-13)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.4.3 (2025-11-12)


### Bug Fixes

* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))





## 0.4.2 (2025-11-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.4.1 (2025-11-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.4.0 (2025-10-20)


### Features

* **SITE-10016:** add skeleton for case card ([2d0049a](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/2d0049ad0517de16895a7abafbeb4334ade894db))





## 0.3.1 (2025-09-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.3.0 (2025-09-26)


### Features

* **SITE-9975:** update href site-case-card ([e70ad89](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/e70ad89e2eacaec632c9fb2feeaa3f20908fcc23))





# 0.2.0 (2025-09-22)


### Features

* **SITE-9945:** edit styles case card ([ad500cc](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/ad500ccfe4215b245308714a003b495a8721147d))





## 0.1.1 (2025-09-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.1.0 (2025-09-12)


### Features

* **SITE-9900:** add new CaseCard component ([2b6f29b](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/2b6f29bcba24166b059a8f0955901c47b3c7cd15))





## CHANGELOG

### v0.0.0

- Initial version
`,u=JSON.parse('{"UU":"@cloud-ru/uikit-product-site-case-card","rE":"1.1.1"}'),a=`# CaseCard

## Installation
\`npm i @cloud-ru/uikit-product-sitecasecard\`

[//]: DOCUMENTATION_SECTION_START
[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT
## CaseCard
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| layoutType* | enum LayoutType: \`"mobile"\`, \`"tablet"\`, \`"desktop"\`, \`"desktopSmall"\` | - |  |
| description* | \`string\` | - | \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u0433\u0434\u0435 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u043C\u0435\u0447\u0430\u044E\u0442\u0441\u044F \u0442\u0435\u0433\u043E\u043C <mark></mark> |
| img* | \`string\` | - | \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 img \u043B\u043E\u0433\u043E\u0442\u0438\u043F |
| href | \`string\` | - | \u0421\u0441\u044B\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 |
| categories | \`string[]\` | - | \u0421\u043F\u0438\u0441\u043E\u043A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 |
| visibleCategories | \`boolean\` | true | \u0424\u043B\u0430\u0433 \u043F\u043E\u043A\u0430\u0437\u0430 \u0438\u043B\u0438 \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 |
| loading | \`boolean\` | - | \u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 |
| onClick | \`(e: MouseEvent<HTMLDivElement \\| HTMLAnchorElement, MouseEvent>) => void\` | - | \u0421\u043E\u0431\u044B\u0442\u0438\u0435 \u043A\u043B\u0438\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 |


[//]: DOCUMENTATION_SECTION_END

[Changelog](./CHANGELOG.md)

CaseCard
`;var t=e("./packages/site-case-card/src/components/CaseCard/CaseCard.tsx"),b={title:"Site/CaseCard",component:t.D};const T={render:({...p})=>(0,s.jsx)("div",{style:{width:p.layoutType==="mobile"?"328px":"364px"},children:(0,s.jsx)(t.D,{...p})}),args:{layoutType:"desktop",img:"https://cdn.cloud.ru/backend/cases/magnit_logo.webp",description:"\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u043B\u0438 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 <mark>\u0434\u0432\u0430</mark> \u0440\u0430\u0437\u0430",categories:["IT-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430","\u0423\u0441\u043B\u0443\u0433\u0438"],onClick:()=>{},visibleCategories:!0,href:"/test",loading:!1},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${u.rE}`,a,l]},packageName:u.UU,design:{name:"Figma",type:"figma",url:"https://www.figma.com/design/B2WqmDAbmTJXkRQk82ZrC7/branch/BClCz9jRFwf4Zxa7MdYoyv/Cases?node-id=4212-28912&p=f&m=dev"}}}}),"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=":(i=>{i.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="})}]);})();
