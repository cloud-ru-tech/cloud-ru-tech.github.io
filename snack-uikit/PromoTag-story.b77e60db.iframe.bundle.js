/*! For license information please see PromoTag-story.b77e60db.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksnack_uikit=self.webpackChunksnack_uikit||[]).push([[6301],{"./packages/promo-tag/stories/PromoTag.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>PromoTag_story,promoTag:()=>promoTag});const package_namespaceObject=JSON.parse('{"u2":"@snack-uikit/promo-tag","i8":"0.4.3"}');var PromoTag=__webpack_require__("./packages/promo-tag/src/components/PromoTag.tsx"),constants=__webpack_require__("./packages/promo-tag/src/constants.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/promo-tag/stories/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const stories_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1hfcws0tdr(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/promo-tag/stories/PromoTag.story.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"0f5a2704c5d126b8f81074a43ec1f116d607c8ef"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/promo-tag/stories/PromoTag.story.tsx",statementMap:{0:{start:{line:10,column:19},end:{line:13,column:1}},1:{start:{line:17,column:2},end:{line:26,column:10}},2:{start:{line:19,column:6},end:{line:24,column:11}},3:{start:{line:29,column:41},end:{line:39,column:1}},4:{start:{line:30,column:2},end:{line:38,column:5}},5:{start:{line:41,column:49},end:{line:62,column:1}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:18,column:35},end:{line:18,column:36}},loc:{start:{line:19,column:6},end:{line:24,column:11}},line:19},1:{name:"(anonymous_1)",decl:{start:{line:29,column:41},end:{line:29,column:42}},loc:{start:{line:30,column:2},end:{line:38,column:5}},line:30}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0f5a2704c5d126b8f81074a43ec1f116d607c8ef"});var actualCoverage=coverage[path];return cov_1hfcws0tdr=function(){return actualCoverage},actualCoverage}cov_1hfcws0tdr();const PromoTag_story=(cov_1hfcws0tdr().s[0]++,{title:"Components/Promo Tag",component:PromoTag.g}),storyTable=(cov_1hfcws0tdr().s[1]++,(0,jsx_runtime.jsx)("table",{children:Object.values(constants.O).map((appearance=>(cov_1hfcws0tdr().f[0]++,cov_1hfcws0tdr().s[2]++,(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsxs)("td",{children:[appearance,":"]}),(0,jsx_runtime.jsx)("td",{children:(0,jsx_runtime.jsx)(PromoTag.g,{appearance,text:"Promo Tag"})})]},appearance))))}));cov_1hfcws0tdr().s[3]++;const promoTag=(cov_1hfcws0tdr().s[5]++,{render:({...args})=>(cov_1hfcws0tdr().f[1]++,cov_1hfcws0tdr().s[4]++,(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("div",{className:stories_styles_module.story,children:["controlled: ",(0,jsx_runtime.jsx)(PromoTag.g,{...args})]})}),(0,jsx_runtime.jsx)("div",{className:stories_styles_module.story,children:storyTable})]})),args:{text:"Promo tag",appearance:constants.O.Primary},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${package_namespaceObject.i8}`,'# Promo Tag\n\n## Installation\n`npm i @snack-uikit/promo-tag`\n\n[Changelog](./CHANGELOG.md)\n\n\n\n[//]: DOCUMENTATION_SECTION_START\n[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT\n## PromoTag\nКомпонент Promo Tag\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| text* | `string` | - | Текст компонента |\n| appearance | enum Appearance: `"primary"`, `"red"`, `"orange"`, `"yellow"`, `"green"`, `"blue"`, `"violet"`, `"pink"` | primary | Внешний вид |\n| className | `string` | - | CSS-класс |\n\n\n[//]: DOCUMENTATION_SECTION_END\n',"# Change Log\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## 0.4.3 (2024-09-23)\n\n### Only dependencies have been changed\n* [@snack-uikit/typography@0.6.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)\n* [@snack-uikit/utils@3.4.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)\n\n\n\n\n\n## 0.4.2 (2024-04-23)\n\n### Only dependencies have been changed\n* [@snack-uikit/typography@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)\n* [@snack-uikit/utils@3.3.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)\n\n\n\n\n\n## 0.4.1 (2023-12-28)\n\n### Only dependencies have been changed\n* [@snack-uikit/typography@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)\n\n\n\n\n\n# 0.4.0 (2023-12-14)\n\n\n### BREAKING CHANGES\n\n\n* **FF-3729:** replace enum with unions ([910db4a](https://github.com/cloud-ru-tech/snack-uikit/commit/910db4aa8231ccbc58e538e5c5c1f461b1dec275))\n\n\n\n\n## 0.3.1 (2023-12-06)\n\n### Only dependencies have been changed\n* [@snack-uikit/typography@0.5.1](https://git.sbercloud.tech/sbercloud-ui/tokens-design-system/snack-uikit/-/blob/master/packages/typography/CHANGELOG.md)\n* [@snack-uikit/utils@3.1.0](https://git.sbercloud.tech/sbercloud-ui/tokens-design-system/snack-uikit/-/blob/master/packages/utils/CHANGELOG.md)\n\n\n\n\n\n# 0.3.0 (2023-12-06)\n\n\n### Bug Fixes\n\n* **FF-0000:** remove extractDataProps ([9d676b9](https://github.com/cloud-ru-tech/snack-uikit/commit/9d676b9df214167bfd1b7ce9f1590891ca62f9a3))\n* **FF-3460:** change Typoghraphy to corrent ([b61e755](https://github.com/cloud-ru-tech/snack-uikit/commit/b61e755d78317c75c134e7c297c3c7b9fbc7fe5d))\n\n\n### Features\n\n* **FF-2662:** add promo-tag package ([e89ef03](https://github.com/cloud-ru-tech/snack-uikit/commit/e89ef0305172543630d53fb4da4db98151eac9af))\n* **FF-875:** add utils for dependencies graph ([53cd7be](https://github.com/cloud-ru-tech/snack-uikit/commit/53cd7be638f01e573cb52b2417a39f4df4f6089b))\n\n\n### BREAKING CHANGES\n\n\n* **FF-3823:** move to snack-uikit scope ([ac9e30d](https://github.com/cloud-ru-tech/snack-uikit/commit/ac9e30d574d529b2bf4f5184b70c511c981a6032))\n\n\n\n\n## 0.2.5 (2023-11-08)\n\n### Only dependencies have been changed\n* [@snack-uikit/typography@0.4.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)\n* [@snack-uikit/utils@2.0.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)\n\n\n\n\n\n## 0.2.4 (2023-10-31)\n\n\n### Bug Fixes\n\n* **FF-0000:** remove extractDataProps ([9d676b9](https://github.com/cloud-ru-tech/snack-uikit/commit/9d676b9df214167bfd1b7ce9f1590891ca62f9a3))\n\n\n\n\n\n## 0.2.3 (2023-10-28)\n\n\n### Bug Fixes\n\n* **FF-3460:** change Typoghraphy to corrent ([b61e755](https://github.com/cloud-ru-tech/snack-uikit/commit/b61e755d78317c75c134e7c297c3c7b9fbc7fe5d))\n\n\n\n\n\n## 0.2.2 (2023-10-25)\n\n### Only dependencies have been changed\n* [@snack-uikit/typography@0.4.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)\n* [@snack-uikit/utils@1.3.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)\n\n\n\n\n\n## 0.2.1 (2023-10-13)\n\n### Only dependencies have been changed\n* [@snack-uikit/typography@0.4.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)\n\n\n\n\n\n# 0.2.0 (2023-10-06)\n\n\n### Features\n\n* **FF-875:** add utils for dependencies graph ([53cd7be](https://github.com/cloud-ru-tech/snack-uikit/commit/53cd7be638f01e573cb52b2417a39f4df4f6089b))\n\n\n\n\n\n## 0.1.2 (2023-08-30)\n\n### Only dependencies have been changed\n* [@snack-uikit/typography@0.3.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)\n\n\n\n\n\n## 0.1.1 (2023-08-29)\n\n### Only dependencies have been changed\n* [@snack-uikit/typography@0.3.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)\n\n\n\n\n\n# 0.1.0 (2023-08-22)\n\n\n### Features\n\n* **FF-2662:** add promo-tag package ([e89ef03](https://github.com/cloud-ru-tech/snack-uikit/commit/e89ef0305172543630d53fb4da4db98151eac9af))\n\n\n\n\n\n## CHANGELOG\n\n### v0.0.0\n\n- Initial version\n"]},packageName:package_namespaceObject.u2,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A27190&mode=design"}}})},"./packages/promo-tag/src/components/PromoTag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>PromoTag});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Typography=__webpack_require__("./packages/typography/src/components/Typography.tsx"),componentPropsProcessors=__webpack_require__("./packages/utils/src/utils/componentPropsProcessors.ts"),constants=__webpack_require__("./packages/promo-tag/src/constants.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/promo-tag/src/components/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const components_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1s1y7omrs9(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/promo-tag/src/components/PromoTag.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"83f678be6c509080972b04c6ddb4ae918619b7ae"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/promo-tag/src/components/PromoTag.tsx",statementMap:{0:{start:{line:23,column:2},end:{line:27,column:4}}},fnMap:{0:{name:"PromoTag",decl:{start:{line:22,column:16},end:{line:22,column:24}},loc:{start:{line:22,column:104},end:{line:28,column:1}},line:22}},branchMap:{0:{loc:{start:{line:22,column:27},end:{line:22,column:58}},type:"default-arg",locations:[{start:{line:22,column:40},end:{line:22,column:58}}],line:22}},s:{0:0},f:{0:0},b:{0:[0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"83f678be6c509080972b04c6ddb4ae918619b7ae"});var actualCoverage=coverage[path];return cov_1s1y7omrs9=function(){return actualCoverage},actualCoverage}function PromoTag(_ref){let{appearance=(cov_1s1y7omrs9().b[0][0]++,constants.O.Primary),className,text,...props}=_ref;return cov_1s1y7omrs9().f[0]++,cov_1s1y7omrs9().s[0]++,(0,jsx_runtime.jsx)("div",{className:classnames_default()(components_styles_module.promoTag,className),...(0,componentPropsProcessors.cN)(props),"data-appearance":appearance,children:(0,jsx_runtime.jsx)(Typography.Z.SansLabelS,{tag:"span",children:text})})}cov_1s1y7omrs9();try{PromoTag.displayName="PromoTag",PromoTag.__docgenInfo={description:"Компонент Promo Tag",displayName:"PromoTag",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Текст компонента",name:"text",required:!0,type:{name:"string"}},appearance:{defaultValue:{value:"primary"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"violet"'},{value:'"pink"'}]}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/promo-tag/src/components/PromoTag.tsx#PromoTag"]={docgenInfo:PromoTag.__docgenInfo,name:"PromoTag",path:"packages/promo-tag/src/components/PromoTag.tsx#PromoTag"})}catch(__react_docgen_typescript_loader_error){}},"./packages/promo-tag/src/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function cov_2pddsu51mo(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/promo-tag/src/constants.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"4f895afc9b1a0b41381a4763f2c85f702c317571"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/promo-tag/src/constants.ts",statementMap:{0:{start:{line:1,column:26},end:{line:10,column:10}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4f895afc9b1a0b41381a4763f2c85f702c317571"});var actualCoverage=coverage[path];return cov_2pddsu51mo=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{O:()=>APPEARANCE}),cov_2pddsu51mo();const APPEARANCE=(cov_2pddsu51mo().s[0]++,{Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"})},"./packages/utils/src/utils/componentPropsProcessors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function cov_16ynw7mmmd(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/utils/src/utils/componentPropsProcessors.ts",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/utils/src/utils/componentPropsProcessors.ts",statementMap:{0:{start:{line:3,column:25},end:{line:3,column:38}},1:{start:{line:4,column:29},end:{line:4,column:44}},2:{start:{line:7,column:2},end:{line:15,column:6}},3:{start:{line:8,column:20},end:{line:8,column:39}},4:{start:{line:10,column:28},end:{line:13,column:7}},5:{start:{line:19,column:2},end:{line:23,column:36}},6:{start:{line:20,column:4},end:{line:20,column:57}},7:{start:{line:20,column:27},end:{line:20,column:57}},8:{start:{line:22,column:4},end:{line:22,column:21}},9:{start:{line:32,column:2},end:{line:32,column:51}},10:{start:{line:36,column:2},end:{line:36,column:47}},11:{start:{line:40,column:2},end:{line:40,column:51}}},fnMap:{0:{name:"excludeProps",decl:{start:{line:6,column:9},end:{line:6,column:21}},loc:{start:{line:6,column:83},end:{line:16,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:8,column:12},end:{line:8,column:13}},loc:{start:{line:8,column:20},end:{line:8,column:39}},line:8},2:{name:"(anonymous_2)",decl:{start:{line:10,column:6},end:{line:10,column:7}},loc:{start:{line:10,column:28},end:{line:13,column:7}},line:10},3:{name:"extractProps",decl:{start:{line:18,column:9},end:{line:18,column:21}},loc:{start:{line:18,column:82},end:{line:24,column:1}},line:18},4:{name:"(anonymous_4)",decl:{start:{line:19,column:35},end:{line:19,column:36}},loc:{start:{line:19,column:56},end:{line:23,column:3}},line:19},5:{name:"excludeSupportProps",decl:{start:{line:31,column:16},end:{line:31,column:35}},loc:{start:{line:31,column:81},end:{line:33,column:1}},line:31},6:{name:"extractDataTestProps",decl:{start:{line:35,column:16},end:{line:35,column:36}},loc:{start:{line:35,column:82},end:{line:37,column:1}},line:35},7:{name:"extractSupportProps",decl:{start:{line:39,column:16},end:{line:39,column:35}},loc:{start:{line:39,column:81},end:{line:41,column:1}},line:39}},branchMap:{0:{loc:{start:{line:20,column:4},end:{line:20,column:57}},type:"if",locations:[{start:{line:20,column:4},end:{line:20,column:57}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:20}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"05cc1f51d8fa470a7ff5378a148e76025f788928"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"05cc1f51d8fa470a7ff5378a148e76025f788928"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_16ynw7mmmd=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{NF:()=>extractDataTestProps,Rn:()=>excludeSupportProps,cN:()=>extractSupportProps}),cov_16ynw7mmmd();const DATA_TEST_REGEXP=(cov_16ynw7mmmd().s[0]++,/^data-test-/),DATA_AND_ARIA_REGEXP=(cov_16ynw7mmmd().s[1]++,/^(data|aria)-/);function extractProps(props,regex){return cov_16ynw7mmmd().f[3]++,cov_16ynw7mmmd().s[5]++,Object.keys(props).reduce(((nextProps,prop)=>(cov_16ynw7mmmd().f[4]++,cov_16ynw7mmmd().s[6]++,prop.match(regex)?(cov_16ynw7mmmd().b[0][0]++,cov_16ynw7mmmd().s[7]++,nextProps[prop]=props[prop]):cov_16ynw7mmmd().b[0][1]++,cov_16ynw7mmmd().s[8]++,nextProps)),{})}function excludeSupportProps(props){return cov_16ynw7mmmd().f[5]++,cov_16ynw7mmmd().s[9]++,function excludeProps(props,regexp){return cov_16ynw7mmmd().f[0]++,cov_16ynw7mmmd().s[2]++,Object.keys(props).filter((prop=>(cov_16ynw7mmmd().f[1]++,cov_16ynw7mmmd().s[3]++,!prop.match(regexp)))).reduce(((nextProps,prop)=>(cov_16ynw7mmmd().f[2]++,cov_16ynw7mmmd().s[4]++,{...nextProps,[prop]:props[prop]})),{})}(props,DATA_AND_ARIA_REGEXP)}function extractDataTestProps(props){return cov_16ynw7mmmd().f[6]++,cov_16ynw7mmmd().s[10]++,extractProps(props,DATA_TEST_REGEXP)}function extractSupportProps(props){return cov_16ynw7mmmd().f[7]++,cov_16ynw7mmmd().s[11]++,extractProps(props,DATA_AND_ARIA_REGEXP)}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/promo-tag/src/components/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".promoTag--EmRgN{padding-left:var(--space-promo-tag-horizontal-padding, 4px);padding-right:var(--space-promo-tag-horizontal-padding, 4px);border-radius:var(--radius-promo-tag-container, 4px);height:var(--size-promo-tag-container, 16px);display:inline-flex;align-items:center;white-space:nowrap}.promoTag--EmRgN[data-appearance=primary]{color:var(--sys-primary-on-accent, #fdfbff);background-color:var(--sys-primary-accent-default, #794ed3)}.promoTag--EmRgN[data-appearance=red]{color:var(--sys-red-on-accent, #fffbf9);background-color:var(--sys-red-accent-default, #cb3f3e)}.promoTag--EmRgN[data-appearance=orange]{color:var(--sys-orange-on-accent, #fffcf4);background-color:var(--sys-orange-accent-default, #fb8e42)}.promoTag--EmRgN[data-appearance=yellow]{color:var(--sys-yellow-on-accent, #583f1f);background-color:var(--sys-yellow-accent-default, #e2b134)}.promoTag--EmRgN[data-appearance=green]{color:var(--sys-green-on-accent, #fcfefa);background-color:var(--sys-green-accent-default, #57b762)}.promoTag--EmRgN[data-appearance=blue]{color:var(--sys-blue-on-accent, #fdfeff);background-color:var(--sys-blue-accent-default, #5388d1)}.promoTag--EmRgN[data-appearance=violet]{color:var(--sys-violet-on-accent, #fdfdfd);background-color:var(--sys-violet-accent-default, #aa6cc1)}.promoTag--EmRgN[data-appearance=pink]{color:var(--sys-pink-on-accent, #fdfcfc);background-color:var(--sys-pink-accent-default, #d1668e)}",""]),___CSS_LOADER_EXPORT___.locals={promoTag:"promoTag--EmRgN"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/promo-tag/stories/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".story--Dlb3E{display:inline-block;margin-bottom:1rem;padding:1rem;background-color:var(--sys-neutral-background1-level, #fdfdfd)}",""]),___CSS_LOADER_EXPORT___.locals={story:"story--Dlb3E"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);