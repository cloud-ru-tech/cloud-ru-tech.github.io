"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[690],{"./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js":((p,i,e)=>{e.d(i,{sg:()=>u,z7:()=>r});const t=/^data-test-/,o=/^(data|aria)-/;function l(a,M){return Object.keys(a).filter(c=>!c.match(M)).reduce((c,m)=>Object.assign(Object.assign({},c),{[m]:a[m]}),{})}function n(a,M){return Object.keys(a).reduce((c,m)=>(m.match(M)&&(c[m]=a[m]),c),{})}function u(a){return l(a,o)}function d(a){return n(a,t)}function r(a){return n(a,o)}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-grid/src/components/styles.module.scss":((p,i,e)=>{e.d(i,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),n=e.n(l),u=n()(o());u.push([p.id,".grid--kqbfF{box-sizing:border-box;display:grid;--gap-count: calc(var(--grid-column-count) - 1);--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));--grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));grid-template-columns:repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));grid-gap:var(--grid-layout-gap)}.grid--kqbfF[data-gap=l]{--grid-layout-gap: var(--dimension-4m, 32px)}.grid--kqbfF[data-gap=m]{--grid-layout-gap: var(--dimension-2m, 16px)}.grid--kqbfF[data-gap=s]{--grid-layout-gap: var(--dimension-1m, 8px)}.grid--kqbfF[data-gap=xs]{--grid-layout-gap: var(--dimension-025m, 2px)}.grid--kqbfF[data-layout-type=tablet][data-gap=l],.grid--kqbfF[data-layout-type=mobile][data-gap=l]{--grid-layout-gap: var(--dimension-2m, 16px)}.grid--kqbfF[data-layout-type=tablet][data-gap=m],.grid--kqbfF[data-layout-type=tablet][data-gap=s],.grid--kqbfF[data-layout-type=mobile][data-gap=m],.grid--kqbfF[data-layout-type=mobile][data-gap=s]{--grid-layout-gap: var(--dimension-1m, 8px)}",""]),u.locals={grid:"grid--kqbfF"};const d=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-grid/stories/styles.module.scss":((p,i,e)=>{e.d(i,{A:()=>d});var t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),n=e.n(l),u=n()(o());u.push([p.id,".wrapper--QVcHL{resize:both;overflow:auto}",""]),u.locals={wrapper:"wrapper--QVcHL"};const d=u}),"./packages/card-predefined/src/components/CardSuggest/CardSuggest.tsx":((p,i,e)=>{e.d(i,{n:()=>d});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js"),n=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const u={title:2,description:3};function d({title:r,description:a,truncate:M,onClick:c,className:m,disabled:A,href:T,promoBadge:E,size:D,...h}){const y={...u,...M};return(0,t.jsx)(o.Z,{...(0,n.z7)(h),size:D,promoBadge:E,href:T,disabled:A,header:(0,t.jsx)(o.Z.Header,{title:r,truncate:{title:y.title}}),onClick:c,className:m,children:(0,t.jsx)(l.m,{text:a,maxLines:y.description,"data-test-id":"card-suggest__description"})})}try{d.displayName="CardSuggest",d.__docgenInfo={description:"",displayName:"CardSuggest",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"\u041A\u043E\u043B\u0431\u0435\u043A \u043D\u0430 \u043A\u043B\u0438\u043A \u043F\u043E \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0435",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"CSS-\u043A\u043B\u0430\u0441\u0441 \u0434\u043B\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0441 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u043C",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435\u043C \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",name:"href",required:!1,type:{name:"string"}},promoBadge:{defaultValue:null,description:"PromoBadge",name:"promoBadge",required:!1,type:{name:'string | Pick<PromoTagProps, "text" | "appearance">'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},truncate:{defaultValue:null,description:"",name:"truncate",required:!1,type:{name:"{ title?: number; description?: number; } | undefined"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/card-predefined/src/components/CardSuggest/CardSuggest.tsx#CardSuggest"]={docgenInfo:d.__docgenInfo,name:"CardSuggest",path:"packages/card-predefined/src/components/CardSuggest/CardSuggest.tsx#CardSuggest"})}catch(r){}}),"./packages/site-grid/src/components/Grid.tsx":((p,i,e)=>{e.d(i,{x:()=>N});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=e.n(o),n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("./packages/utils/src/utils/extractSupportProps.ts");const d=({columnsConfig:s,layoutType:j})=>{switch(j){case"mobile":if(s.mobile)return{"--grid-column-count":s.mobile.amount,"--grid-item--min-width":`${s.mobile.minWidth}px`};break;case"tablet":if(s.tablet)return{"--grid-column-count":s.tablet.amount,"--grid-item--min-width":`${s.tablet.minWidth}px`};break;case"desktopSmall":if(s.desktopSmall)return{"--grid-column-count":s.desktopSmall.amount,"--grid-item--min-width":`${s.desktopSmall.minWidth}px`};if(s.desktop)return{"--grid-column-count":s.desktop.amount,"--grid-item--min-width":`${s.desktop.minWidth}px`};break;case"desktop":if(s.desktop)return{"--grid-column-count":s.desktop.amount,"--grid-item--min-width":`${s.desktop.minWidth}px`};break;default:return}};var r=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(r),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=e.n(M),m=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),A=e.n(m),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),E=e.n(T),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=e.n(D),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=e.n(y),b=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-grid/src/components/styles.module.scss"),g={};g.styleTagTransform=k(),g.setAttributes=E(),g.insert=A().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=h();var _=a()(b.A,g);const O=b.A&&b.A.locals?b.A.locals:void 0;function N({children:s,columnsConfig:j,gap:v="m",layoutType:z,className:S,...I}){const f=(0,n.useMemo)(()=>d({columnsConfig:j,layoutType:z}),[j,z]);return(0,t.jsx)("div",{className:l()(O.grid,S),...(0,u.z)(I),style:f,"data-gap":v,"data-layout-type":z,children:s})}try{N.displayName="Grid",N.__docgenInfo={description:"",displayName:"Grid",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435",name:"children",required:!0,type:{name:"ReactNode"}},columnsConfig:{defaultValue:null,description:"\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0434\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 layoutType",name:"columnsConfig",required:!0,type:{name:"ColumnsConfig"}},gap:{defaultValue:{value:"m"},description:"\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C\u0438 \u0438 \u0440\u044F\u0434\u0430\u043C\u0438",name:"gap",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xs"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},layoutType:{defaultValue:null,description:"",name:"layoutType",required:!0,type:{name:"enum",value:[{value:'"mobile"'},{value:'"tablet"'},{value:'"desktop"'},{value:'"desktopSmall"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/site-grid/src/components/Grid.tsx#Grid"]={docgenInfo:N.__docgenInfo,name:"Grid",path:"packages/site-grid/src/components/Grid.tsx#Grid"})}catch(s){}}),"./packages/site-grid/stories/SiteGrid.story.tsx":((p,i,e)=>{e.r(i),e.d(i,{default:()=>j,grid:()=>I});var t=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./packages/card-predefined/src/components/CardSuggest/CardSuggest.tsx");const l=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.1.3 (2026-03-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@9.1.0]($PUBLIC_PROJECT_URL/blob/master/packages/utils/CHANGELOG.md)





## 1.1.2 (2026-02-16)


### Bug Fixes

* **FF-8052:** fix homepage link ([dffd09c](https://github.com/cloud-ru-tech/uikit-product/commit/dffd09c642edf4842eee02ccc4ec3e5894f4a29e))





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
* **PDS-1377:** grid columns amount is now maxAmount ([fd90492](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/fd9049205510ab67db87e8cb385bfb44e4cc5434))


### Features

* **PDS-1110:** grid component ([d4e3c55](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d4e3c55496fa05e399740957771e296c46d09fd3))
* **SITE-9927:** add new value for grid gap ([3f1a8af](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/3f1a8af9ababe2a2952cba6eafc1d56166002386))





## 0.1.10 (2025-12-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.9 (2025-12-08)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.8 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.7 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@8.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.6 (2025-11-13)


### Bug Fixes

* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))





## 0.1.5 (2025-11-13)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.4 (2025-11-12)


### Bug Fixes

* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))





## 0.1.3 (2025-11-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@7.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.2 (2025-11-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.1.1 (2025-09-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.1.0 (2025-09-17)


### Features

* **SITE-9927:** add new value for grid gap ([3f1a8af](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/3f1a8af9ababe2a2952cba6eafc1d56166002386))





## 0.0.12 (2025-09-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.11 (2025-08-19)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.10 (2025-08-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.9 (2025-08-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@6.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.8 (2025-07-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@5.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.7 (2025-07-16)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@5.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.6 (2025-06-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@4.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.5 (2025-03-04)


### Bug Fixes

* **PDS-1377:** grid columns amount is now maxAmount ([fd90492](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/fd9049205510ab67db87e8cb385bfb44e4cc5434))





## <small>0.0.4 (2025-02-05)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.8](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.0.3 (2024-12-26)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.7](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.0.2 (2024-12-26)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.0.1 (2024-12-19)</small>

* feat(PDS-1110): grid component ([d4e3c55](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d4e3c55))





## CHANGELOG

### v0.0.0

- Initial version
`,n=JSON.parse('{"UU":"@cloud-ru/uikit-product-site-grid","rE":"1.1.3"}'),u=`# Site Grid

## Installation
\`npm i @cloud-ru/uikit-product-site-grid\`

[//]: DOCUMENTATION_SECTION_START
[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT
## Grid
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| layoutType* | enum LayoutType: \`"mobile"\`, \`"tablet"\`, \`"desktop"\`, \`"desktopSmall"\` | - |  |
| columnsConfig* | \`ColumnsConfig\` | - | \u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0434\u043B\u044F \u0440\u0430\u0437\u043D\u044B\u0445 layoutType |
| children* | \`ReactNode\` | - | \u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 |
| gap | "xs" \\| "s" \\| "m" \\| "l" | m | \u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C\u0438 \u0438 \u0440\u044F\u0434\u0430\u043C\u0438 |
| className | \`string\` | - | CSS-\u043A\u043B\u0430\u0441\u0441 |


[//]: DOCUMENTATION_SECTION_END

[Changelog](./CHANGELOG.md)


`;var d=e("./packages/site-grid/src/components/Grid.tsx");const r={Mobile:"mobile",Tablet:"tablet",Desktop:"desktop",DesktopSmall:"desktopSmall"};var a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),M=e.n(a),c=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=e.n(c),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(A),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),D=e.n(E),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=e.n(h),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(k),g=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-grid/stories/styles.module.scss"),_={};_.styleTagTransform=b(),_.setAttributes=D(),_.insert=T().bind(null,"head"),_.domAPI=m(),_.insertStyleElement=y();var O=M()(g.A,_);const N=g.A&&g.A.locals?g.A.locals:void 0;var j={title:"Site/Grid",component:d.x};const v=["one","two","three","four","five","six","seven","eight","nine"],z={desktop:{amount:4,minWidth:300},tablet:{amount:2,minWidth:300},mobile:{amount:3,minWidth:250}},I={render:({layoutType:f,gap:L})=>(0,t.jsx)("div",{className:N.wrapper,children:(0,t.jsx)(d.x,{columnsConfig:z,gap:L,layoutType:f,children:v.map(x=>(0,t.jsx)(o.n,{title:`Card ${x} title`,description:`Card ${x} description`},x))})}),args:{layoutType:"desktop",gap:"m"},argTypes:{layoutType:{name:"[Story]: Layout type",options:Object.values(r),control:{type:"radio"}}},parameters:{readme:{sidebar:[`Latest version: ${n.rE}`,u,l]},packageName:n.UU}}}),"./packages/utils/src/utils/extractSupportProps.ts":((p,i,e)=>{e.d(i,{z:()=>l});var t=e("./packages/utils/src/utils/private/constants.ts");function o(n,u){return Object.keys(n).reduce((d,r)=>(r.match(u)&&(d[r]=n[r]),d),{})}function l(n){return o(n,t.d)}}),"./packages/utils/src/utils/private/constants.ts":((p,i,e)=>{e.d(i,{d:()=>t});const t=/^(data|aria)-/}),"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=":(p=>{p.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="})}]);})();
