"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[4085],{"./node_modules/.pnpm/@snack-uikit+progress-bar@0.1.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/progress-bar/dist/esm/components/ProgressBar/ProgressBar.js":((b,r,e)=>{e.d(r,{z:()=>T});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),l=e.n(p),o=e("./node_modules/.pnpm/@snack-uikit+utils@3.7.0_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const u={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},m={S:"s",XS:"xs"};var k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(k),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),f=e.n(E),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),C=e.n(y),L=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=e.n(L),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),P=e.n(S),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),j=e.n(H),_=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+progress-bar@0.1.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/progress-bar/dist/esm/components/ProgressBar/styles.module.css"),g={};g.styleTagTransform=j(),g.setAttributes=N(),g.insert=C().bind(null,"head"),g.domAPI=f(),g.insertStyleElement=P();var F=A()(_.A,g);const O=_.A&&_.A.locals?_.A.locals:void 0;var B=function(a,h){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&h.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,d=Object.getOwnPropertySymbols(a);t<d.length;t++)h.indexOf(d[t])<0&&Object.prototype.propertyIsEnumerable.call(a,d[t])&&(c[d[t]]=a[d[t]]);return c};function T(a){var{progress:h,size:c,className:d,appearance:t=u.Primary}=a,x=B(a,["progress","size","className","appearance"]);const v=Math.max(Math.min(h,100),0);return(0,n.jsx)("div",Object.assign({className:l()(O.progressBarContainer,d)},(0,o.z7)(x),{"data-size":c,children:(0,n.jsx)("div",{className:O.progressBarFiller,"data-test-id":"progress-bar-filler","data-appearance":t,style:{"--progress":`${v}%`}})}))}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+progress-bar@0.1.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/progress-bar/dist/esm/components/ProgressBar/styles.module.css":((b,r,e)=>{e.d(r,{A:()=>m});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(n),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(l),u=o()(p());u.push([b.id,`.progressBarContainer--ipkFu{
  overflow:hidden;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.progressBarContainer--ipkFu[data-size=s]{
  height:var(--size-progress-bar-progress-bar-height-s, 4px);
  border-radius:var(--radius-progress-bar-s, 2px);
}
.progressBarContainer--ipkFu[data-size=xs]{
  height:var(--size-progress-bar-progress-bar-height-xs, 2px);
  border-radius:var(--radius-progress-bar-xs, 2px);
}

.progressBarFiller--tZACM{
  width:var(--progress);
  height:100%;
}
.progressBarFiller--tZACM[data-appearance=neutral]{
  background-color:var(--sys-neutral-accent-default, #787b8a);
}
.progressBarFiller--tZACM[data-appearance=primary]{
  background-color:var(--sys-primary-accent-default, #794ed3);
}
.progressBarFiller--tZACM[data-appearance=red]{
  background-color:var(--sys-red-accent-default, #cb3f3e);
}
.progressBarFiller--tZACM[data-appearance=orange]{
  background-color:var(--sys-orange-accent-default, #fb8e42);
}
.progressBarFiller--tZACM[data-appearance=yellow]{
  background-color:var(--sys-yellow-accent-default, #e2b134);
}
.progressBarFiller--tZACM[data-appearance=green]{
  background-color:var(--sys-green-accent-default, #57b762);
}
.progressBarFiller--tZACM[data-appearance=blue]{
  background-color:var(--sys-blue-accent-default, #5388d1);
}
.progressBarFiller--tZACM[data-appearance=violet]{
  background-color:var(--sys-violet-accent-default, #aa6cc1);
}
.progressBarFiller--tZACM[data-appearance=pink]{
  background-color:var(--sys-pink-accent-default, #d1668e);
}`,""]),u.locals={progressBarContainer:"progressBarContainer--ipkFu",progressBarFiller:"progressBarFiller--tZACM"};const m=u}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/load-status/src/components/styles.module.scss":((b,r,e)=>{e.d(r,{A:()=>m});var n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),p=e.n(n),l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(l),u=o()(p());u.push([b.id,".loadStatus--h_NIu{display:flex;flex-direction:column;gap:4px}.header--pRCqM{display:flex;justify-content:space-between}.labelValue--_J16A{margin-left:4px;color:var(--sys-neutral-text-light, #8b8e9b)}.valueSymbol--bCVj5{color:var(--sys-neutral-text-light, #8b8e9b)}.hint--Dhvzv{color:var(--sys-neutral-text-light, #8b8e9b)}.hintWrapper--sGMsh{display:flex;align-items:center;gap:2px}",""]),u.locals={loadStatus:"loadStatus--h_NIu",header:"header--pRCqM",labelValue:"labelValue--_J16A",valueSymbol:"valueSymbol--bCVj5",hint:"hint--Dhvzv",hintWrapper:"hintWrapper--sGMsh"};const m=u}),"./packages/load-status/stories/LoadStatus.story.tsx":((b,r,e)=>{e.r(r),e.d(r,{default:()=>M,loadStatus:()=>W});var n=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const p=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.1.9 (2026-04-03)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.2.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.1.8 (2026-03-16)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.1.1]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.1.7 (2026-03-10)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.1.0]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.1.6 (2026-03-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.0.6]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@9.1.0]($PUBLIC_PROJECT_URL/blob/master/packages/utils/CHANGELOG.md)





## 1.1.5 (2026-02-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.0.5]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.1.4 (2026-02-18)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.0.4]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





## 1.1.3 (2026-02-16)


### Bug Fixes

* **FF-8052:** fix homepage link ([dffd09c](https://github.com/cloud-ru-tech/uikit-product/commit/dffd09c642edf4842eee02ccc4ec3e5894f4a29e))





## 1.1.2 (2026-02-10)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.0.2]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)





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
* **PD-3377:** replaced tokens import to snack-uikit scoped package ([dd13d3b](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/dd13d3b7134a4b0d4696830dcd78c0e790700d09))


### Dependencies

* **FF-4704:** up deps ([7da95ef](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/7da95ef6551ced9a63c75970f43b047cc564cedc))


### Features

* **HYCL-000:** provide classname to load-status ([44795d7](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/44795d7741f89863044a82f84311862911c7d6f3))
* **PDS-980:** add load status ([95f5bb3](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/95f5bb31a656743d59084722d46dfe5f1896689c))





## 0.0.64 (2026-01-29)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@16.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.63 (2025-12-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@16.1.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@8.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.62 (2025-12-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@16.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.61 (2025-12-08)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@16.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@8.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.60 (2025-11-28)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@16.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.59 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.1.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@8.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.58 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.1.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@8.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.57 (2025-11-13)


### Bug Fixes

* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))
* **PD-3377:** replaced tokens import to snack-uikit scoped package ([dd13d3b](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/dd13d3b7134a4b0d4696830dcd78c0e790700d09))





## 0.0.56 (2025-11-13)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.1.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@7.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.55 (2025-11-12)


### Bug Fixes

* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))





## 0.0.54 (2025-11-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.1.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@7.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.53 (2025-11-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.52 (2025-11-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.2.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.51 (2025-10-06)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.4](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.50 (2025-10-06)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.49 (2025-10-03)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.48 (2025-09-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.2.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.47 (2025-09-26)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.46 (2025-09-25)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.6.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.45 (2025-09-18)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.5.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.44 (2025-09-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.4.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.43 (2025-09-11)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.3.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.42 (2025-09-02)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.3.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.41 (2025-09-01)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.40 (2025-08-20)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.1.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.39 (2025-08-19)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.1.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.38 (2025-08-15)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.37 (2025-08-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.36 (2025-08-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.35 (2025-07-25)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.34 (2025-07-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@5.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.33 (2025-07-16)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@5.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.32 (2025-07-15)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.4](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.31 (2025-07-01)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.30 (2025-06-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.29 (2025-06-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@4.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.0.28 (2025-06-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.27 (2025-06-20)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@12.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.26 (2025-06-20)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@12.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.25 (2025-06-06)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.9.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.24 (2025-05-28)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.8.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.23 (2025-05-16)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.7.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.22 (2025-05-14)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.6.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.21 (2025-04-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.5.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.20 (2025-04-15)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.4.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.19 (2025-04-09)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.3.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.18 (2025-04-01)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.17 (2025-03-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.16 (2025-03-21)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.15 (2025-03-20)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.14 (2025-03-18)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.7.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.13 (2025-03-14)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.6.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.12 (2025-03-13)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.5.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.11 (2025-03-05)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.5.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.10 (2025-03-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.4.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.9 (2025-02-28)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.3.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)





## 0.0.8 (2025-02-10)


### Dependencies

* **FF-4704:** up deps ([7da95ef](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/7da95ef6551ced9a63c75970f43b047cc564cedc))





## <small>0.0.7 (2025-02-05)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.8](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.0.6 (2024-12-26)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.7](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.0.5 (2024-12-26)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.0.4 (2024-12-24)</small>

* feat(HYCL-000): provide classname to load-status ([44795d7](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/44795d7))





## <small>0.0.3 (2024-12-17)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.0.2 (2024-12-16)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-utils@3.8.4](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.0.1 (2024-12-05)</small>

* feat(PDS-980): add load status ([95f5bb3](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/95f5bb3))





## CHANGELOG

### v0.0.0

- Initial version
`,l=JSON.parse('{"UU":"@cloud-ru/uikit-product-load-status","rE":"1.1.9"}'),o=`# Load Status

## Installation
\`npm i @cloud-ru/uikit-product-load-status\`

[Changelog](./CHANGELOG.md)


`;var u=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),m=e.n(u),k=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),A=e("./packages/utils/src/utils/extractSupportProps.ts"),E=e("./node_modules/.pnpm/@snack-uikit+figma-tokens@19.0.2/node_modules/@snack-uikit/figma-tokens/build/ts/styles-theme-variables.js"),f=e("./node_modules/.pnpm/@snack-uikit+progress-bar@0.1.3_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/progress-bar/dist/esm/components/ProgressBar/ProgressBar.js"),y=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.4_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js");const C=[{appearance:"green",condition:"lte",limit:70},{appearance:"yellow",condition:"lte",limit:90},{appearance:"red",condition:"lte",limit:100}],L={none:"",percent:"%"};var N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(N),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),H=e.n(P),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),_=e.n(j),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=e.n(g),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(O),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),a=e.n(T),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/load-status/src/components/styles.module.scss"),c={};c.styleTagTransform=a(),c.setAttributes=F(),c.insert=_().bind(null,"head"),c.domAPI=H(),c.insertStyleElement=B();var d=S()(h.A,c);const t=h.A&&h.A.locals?h.A.locals:void 0,x=(i,G)=>{for(const s of G)switch(s.condition){case"eq":if(i===s.limit)return s.appearance;break;case"gt":if(i>s.limit)return s.appearance;break;case"gte":if(i>=s.limit)return s.appearance;break;case"lt":if(i<s.limit)return s.appearance;break;case"lte":if(i<=s.limit)return s.appearance;break;default:return"neutral"}return"neutral"};function v({label:i,value:G,hint:s,valueType:R="none",progress:D,size:V="s",appearanceByProgress:z=C,showErrorIcon:Z,className:K,...$}){const J=x(D,z),w=i||G||R!=="none",I=L[R];return(0,n.jsxs)("div",{className:m()(t.loadStatus,K),...(0,A.z)($),children:[w&&(0,n.jsxs)("div",{className:t.header,children:[(0,n.jsxs)(y.o.SansBodyS,{children:[i,(0,n.jsx)("span",{className:t.labelValue,children:G})]}),I&&(0,n.jsx)(y.o.SansBodyS,{className:t.valueSymbol,children:`${D} ${I}`})]}),(0,n.jsx)(f.z,{progress:D,size:V,appearance:J}),s&&(0,n.jsxs)("div",{className:t.hintWrapper,children:[Z&&(0,n.jsx)(k.A,{color:E.G.sys.red.accentDefault,size:16}),(0,n.jsx)(y.o.SansBodyS,{className:t.hint,children:s})]})]})}try{v.displayName="LoadStatus",v.__docgenInfo={description:"",displayName:"LoadStatus",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},valueType:{defaultValue:{value:"none"},description:"",name:"valueType",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"percent"'}]}},appearanceByProgress:{defaultValue:{value:`[
  { appearance: 'green', condition: 'lte', limit: 70 },
  { appearance: 'yellow', condition: 'lte', limit: 90 },
  { appearance: 'red', condition: 'lte', limit: 100 },
]`},description:"",name:"appearanceByProgress",required:!1,type:{name:"ProgressLimitList"}},showErrorIcon:{defaultValue:null,description:"",name:"showErrorIcon",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"s"},description:"\u0420\u0430\u0437\u043C\u0435\u0440",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'}]}},progress:{defaultValue:null,description:"\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043E\u0442 0 \u0434\u043E 100",name:"progress",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/load-status/src/components/LoadStatus.tsx#LoadStatus"]={docgenInfo:v.__docgenInfo,name:"LoadStatus",path:"packages/load-status/src/components/LoadStatus.tsx#LoadStatus"})}catch(i){}var M={title:"Console/Load Status",component:v};function U(i){return(0,n.jsx)(v,{...i})}const W={render:U,args:{label:"Label",value:"Value",valueType:"percent",progress:70,hint:"Hint text",showErrorIcon:!0},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${l.rE}`,o,p]},packageName:l.UU,design:{name:"Figma",type:"figma",url:"https://www.figma.com/design/nrnltwtMewvlg7Oeftg22c/PDS-980-(Load-status)?node-id=22352-131934&t=r9ui39ENLqx5ZpTB-4"}}}}),"./packages/utils/src/utils/extractSupportProps.ts":((b,r,e)=>{e.d(r,{z:()=>l});var n=e("./packages/utils/src/utils/private/constants.ts");function p(o,u){return Object.keys(o).reduce((m,k)=>(k.match(u)&&(m[k]=o[k]),m),{})}function l(o){return p(o,n.d)}}),"./packages/utils/src/utils/private/constants.ts":((b,r,e)=>{e.d(r,{d:()=>n});const n=/^(data|aria)-/})}]);})();
