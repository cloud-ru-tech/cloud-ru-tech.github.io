"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[9120],{"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js":((_,d,e)=>{e.d(d,{E:()=>b});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),n=e.n(a),o=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(t),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),k=e.n(j),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),y=e.n(E),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),h=e.n(I),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(f),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=e.n(x),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"),c={};c.styleTagTransform=D(),c.setAttributes=h(),c.insert=y().bind(null,"head"),c.domAPI=k(),c.insertStyleElement=N();var S=r()(M.A,c);const g=M.A&&M.A.locals?M.A.locals:void 0;var A=function(u,T){var l={};for(var i in u)Object.prototype.hasOwnProperty.call(u,i)&&T.indexOf(i)<0&&(l[i]=u[i]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,i=Object.getOwnPropertySymbols(u);m<i.length;m++)T.indexOf(i[m])<0&&Object.prototype.propertyIsEnumerable.call(u,i[m])&&(l[i[m]]=u[i[m]]);return l};function b(u){var{width:T,height:l,className:i,borderRadius:m,loading:p,children:z}=u,C=A(u,["width","height","className","borderRadius","loading","children"]);return(0,o.v)(p)?(0,s.jsx)("div",Object.assign({},C,{style:{width:T,height:l,borderRadius:m},className:n()(g.skeleton,i)})):(0,s.jsx)(s.Fragment,{children:z})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js":((_,d,e)=>{e.d(d,{Q:()=>o,r:()=>n});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const n=(0,a.createContext)(!1);function o({loading:t,children:r}){return(0,s.jsx)(n.Provider,{value:t,children:r})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js":((_,d,e)=>{e.d(d,{v:()=>n});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js");function n(o){return(0,s.useContext)(a.r)||o}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css":((_,d,e)=>{e.d(d,{A:()=>r});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(s),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(n),t=o()(a());t.push([_.id,`.skeleton--PAZeY{
  box-sizing:border-box;
  width:100%;
  height:1em;
  background:var(--gradient-skeleton, linear-gradient(115deg, rgba(36, 36, 48, 0.0784313725) 40%, rgba(36, 36, 48, 0) 50%, rgba(36, 36, 48, 0.0784313725) 60%)) 0 0/200% 100% repeat fixed;
  animation:loading--tDzwE 2s infinite linear;
}
@keyframes loading--tDzwE{
  to{
    background-position:-200% 0;
  }
}`,""]),t.locals={skeleton:"skeleton--PAZeY",loading:"loading--tDzwE"};const r=t}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-case-card/src/components/CaseCard/styles.module.scss":((_,d,e)=>{e.d(d,{A:()=>r});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(s),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(n),t=o()(a());t.push([_.id,'.root--wDqk3{border-radius:4px}.container--fOQ6u{box-sizing:border-box;width:100%;height:216px;background:var(--sys-neutral-background2-level, #ffffff);display:flex;justify-content:space-between;flex-direction:column}.container--fOQ6u[data-layout-type=tablet]{height:232px}.container--fOQ6u[data-layout-type=mobile]{height:192px}.image--ATaUi{height:46px}.image--ATaUi[data-layout-type=mobile]{height:42px}.categoryGroup--h56r8{display:flex;flex-direction:row;gap:4px;align-items:center;flex-wrap:wrap}.category--picxc{color:var(--sys-neutral-text-support, #6d707f)}.category--picxc:not(:last-child)::after{content:"\xB7";margin-left:4px;color:var(--sys-neutral-text-support, #6d707f)}.textContainer--eo1dH{display:flex;flex-direction:column;gap:4px}.description--znP4I{color:var(--sys-neutral-text-main, #41424e)}.description--znP4I mark{color:var(--sys-primary-text-light, #6aaf90);background-color:unset}.description--znP4I span{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical}.description--znP4I span[data-layout-type=mobile]{-webkit-line-clamp:5}.skeletonIcon--dZUad{width:120px;height:40px}',""]),t.locals={root:"root--wDqk3",container:"container--fOQ6u",image:"image--ATaUi",categoryGroup:"categoryGroup--h56r8",category:"category--picxc",textContainer:"textContainer--eo1dH",description:"description--znP4I",skeletonIcon:"skeletonIcon--dZUad"};const r=t}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-case-card/src/helperComponents/styles.module.scss":((_,d,e)=>{e.d(d,{A:()=>r});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(s),n=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),o=e.n(n),t=o()(a());t.push([_.id,".root--VbTCR{display:flex;flex-direction:column;gap:8px}.skeletonItems--qKTF0{height:12px}.skeletonText--kJTUc{height:14px}.skeletonTitle--ZF4iL{width:100%;height:14px}",""]),t.locals={root:"root--VbTCR",skeletonItems:"skeletonItems--qKTF0",skeletonText:"skeletonText--kJTUc",skeletonTitle:"skeletonTitle--ZF4iL"};const r=t}),"./packages/site-case-card/src/components/CaseCard/CaseCard.tsx":((_,d,e)=>{e.d(d,{D:()=>m});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),a=e("./node_modules/.pnpm/@snack-uikit+card@0.20.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/card/dist/esm/components/index.js"),n=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.9_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js"),o=e("./node_modules/.pnpm/@snack-uikit+typography@0.8.10_react@18.2.0/node_modules/@snack-uikit/typography/dist/esm/components/Typography.js"),t=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(t),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),k=e.n(j),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),y=e.n(E),I=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),h=e.n(I),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(f),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=e.n(x),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-case-card/src/helperComponents/styles.module.scss"),c={};c.styleTagTransform=D(),c.setAttributes=h(),c.insert=y().bind(null,"head"),c.domAPI=k(),c.insertStyleElement=N();var S=r()(M.A,c);const g=M.A&&M.A.locals?M.A.locals:void 0;function A(){return(0,s.jsxs)("div",{className:g.root,children:[(0,s.jsx)(n.E,{loading:!0,width:124,className:g.skeletonItems}),(0,s.jsx)(n.E,{loading:!0,className:g.skeletonTitle}),(0,s.jsx)(n.E,{loading:!0,width:200,className:g.skeletonText})]})}var b=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/.pnpm/sass-loader@16.0.7_sass@1.97.3_webpack@5.99.9_esbuild@0.25.12_/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./packages/site-case-card/src/components/CaseCard/styles.module.scss"),u={};u.styleTagTransform=D(),u.setAttributes=h(),u.insert=y().bind(null,"head"),u.domAPI=k(),u.insertStyleElement=N();var T=r()(b.A,u);const l=b.A&&b.A.locals?b.A.locals:void 0,i={mobile:"m",tablet:"m",desktop:"l",desktopSmall:"l"};function m({layoutType:p,img:z,description:C,categories:v,href:P,visibleCategories:Y=!0,onClick:B,loading:O}){const w=p==="desktop"||p==="desktopSmall"?"m":"s",U=p==="mobile"?"s":"m";return(0,s.jsx)(a.Z,{href:P,onClick:B,size:i[p],className:l.root,children:(0,s.jsxs)("div",{className:l.container,"data-layout-type":p,children:[(0,s.jsx)(n.E,{loading:O,className:l.skeletonIcon,children:(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:z,className:l.image,alt:"img","data-layout-type":p})})}),O?(0,s.jsx)(A,{}):(0,s.jsxs)("div",{className:l.textContainer,children:[Y&&v&&(0,s.jsx)("div",{className:l.categoryGroup,children:v.map(L=>(0,s.jsx)(o.o,{family:"sans",purpose:"body",size:w,className:l.category,children:L},L))}),(0,s.jsx)(o.o,{family:"sans",purpose:"title",size:U,className:l.description,children:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:C},"data-layout-type":p})})]})]})})}try{m.displayName="CaseCard",m.__docgenInfo={description:"",displayName:"CaseCard",props:{img:{defaultValue:null,description:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 img \u043B\u043E\u0433\u043E\u0442\u0438\u043F",name:"img",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043F\u043E \u043D\u0430\u0436\u0430\u0442\u0438\u044E \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",name:"href",required:!1,type:{name:"string"}},categories:{defaultValue:null,description:"\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439",name:"categories",required:!1,type:{name:"string[]"}},visibleCategories:{defaultValue:{value:"true"},description:"\u0424\u043B\u0430\u0433 \u043F\u043E\u043A\u0430\u0437\u0430 \u0438\u043B\u0438 \u0441\u043A\u0440\u044B\u0442\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439",name:"visibleCategories",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u0433\u0434\u0435 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u043F\u043E\u043C\u0435\u0447\u0430\u044E\u0442\u0441\u044F \u0442\u0435\u0433\u043E\u043C <mark></mark>",name:"description",required:!0,type:{name:"string"}},loading:{defaultValue:null,description:"\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",name:"loading",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"\u0421\u043E\u0431\u044B\u0442\u0438\u0435 \u043A\u043B\u0438\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>) => void)"}},layoutType:{defaultValue:null,description:"",name:"layoutType",required:!0,type:{name:"enum",value:[{value:'"mobile"'},{value:'"tablet"'},{value:'"desktop"'},{value:'"desktopSmall"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/site-case-card/src/components/CaseCard/CaseCard.tsx#CaseCard"]={docgenInfo:m.__docgenInfo,name:"CaseCard",path:"packages/site-case-card/src/components/CaseCard/CaseCard.tsx#CaseCard"})}catch(p){}}),"./packages/site-case-card/stories/\u0421ase\u0421ard.story.tsx":((_,d,e)=>{e.r(d),e.d(d,{caseCard:()=>E,default:()=>j});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const a=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.2.2 (2026-04-14)


### Bug Fixes

* **PROFCOMM-2703:** applied scss fixes ([7cbee1b](https://github.com/cloud-ru-tech/uikit-product/commit/7cbee1bd74a48a78184db8e164a7864c7e140449))





## 1.2.1 (2026-03-31)


### Bug Fixes

* **FF-8103:** dedupe onOpenChange from Floating UI in PopoverPrivate ([3ce49f4](https://github.com/cloud-ru-tech/uikit-product/commit/3ce49f4f993d48a97b97dc7cecc1402079cb41ff))





# 1.2.0 (2026-03-16)


### Bug Fixes

* **DOCDEV-2969:** fixed next js build issues ([a9bdab5](https://github.com/cloud-ru-tech/uikit-product/commit/a9bdab58a9f9a625dc05ce5d74f431d68f6245bc))


### Features

* **DOCDEV-2969:** added mobileModalBodyClassName prop for site-selector-platform-drop-list ([515c2e4](https://github.com/cloud-ru-tech/uikit-product/commit/515c2e4100dc9825616bbd0210eeb9f520d647ff))





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
`,n=JSON.parse('{"UU":"@cloud-ru/uikit-product-site-case-card","rE":"1.2.2"}'),o=`# CaseCard

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
`;var t=e("./packages/site-case-card/src/components/CaseCard/CaseCard.tsx"),j={title:"Site/CaseCard",component:t.D};const E={render:({...y})=>(0,s.jsx)("div",{style:{width:y.layoutType==="mobile"?"328px":"364px"},children:(0,s.jsx)(t.D,{...y})}),args:{layoutType:"desktop",img:"https://cdn.cloud.ru/backend/cases/magnit_logo.webp",description:"\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u043B\u0438 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 <mark>\u0434\u0432\u0430</mark> \u0440\u0430\u0437\u0430",categories:["IT-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430","\u0423\u0441\u043B\u0443\u0433\u0438"],onClick:()=>{},visibleCategories:!0,href:"/test",loading:!1},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${n.rE}`,o,a]},packageName:n.UU,design:{name:"Figma",type:"figma",url:"https://www.figma.com/design/B2WqmDAbmTJXkRQk82ZrC7/branch/BClCz9jRFwf4Zxa7MdYoyv/Cases?node-id=4212-28912&p=f&m=dev"}}}}),"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=":(_=>{_.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="})}]);})();
