/*! For license information please see ProgressBar-story.ae22f974.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksnack_uikit=self.webpackChunksnack_uikit||[]).push([[2457],{"./packages/progress-bar/stories/ProgressBar.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ProgressBar_story,progressBar:()=>progressBar});var CHANGELOG=__webpack_require__("./packages/progress-bar/CHANGELOG.md"),progress_bar_package=__webpack_require__("./packages/progress-bar/package.json"),README=__webpack_require__("./packages/progress-bar/README.md"),classnames=__webpack_require__("./packages/progress-bar/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),componentPropsProcessors=__webpack_require__("./packages/utils/src/utils/componentPropsProcessors.ts");function cov_5obme86z2(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/progress-bar/src/components/constants.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"8b60103992e75b8de5d99e44b9d677555df3a31e"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/progress-bar/src/components/constants.ts",statementMap:{0:{start:{line:1,column:26},end:{line:11,column:10}},1:{start:{line:13,column:20},end:{line:16,column:10}}},fnMap:{},branchMap:{},s:{0:0,1:0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8b60103992e75b8de5d99e44b9d677555df3a31e"});var actualCoverage=coverage[path];return cov_5obme86z2=function(){return actualCoverage},actualCoverage}cov_5obme86z2();const APPEARANCE=(cov_5obme86z2().s[0]++,{Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"});cov_5obme86z2().s[1]++;var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/progress-bar/src/components/ProgressBar/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.A,options);const ProgressBar_styles_module=styles_module.A&&styles_module.A.locals?styles_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_26gvz7s0gz(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/progress-bar/src/components/ProgressBar/ProgressBar.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"50ff60dbcd21ee7f393b0c2f637648ee314a985a"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/progress-bar/src/components/ProgressBar/ProgressBar.tsx",statementMap:{0:{start:{line:22,column:26},end:{line:22,column:62}},1:{start:{line:24,column:2},end:{line:33,column:4}}},fnMap:{0:{name:"ProgressBar",decl:{start:{line:21,column:16},end:{line:21,column:27}},loc:{start:{line:21,column:119},end:{line:34,column:1}},line:21}},branchMap:{0:{loc:{start:{line:21,column:57},end:{line:21,column:88}},type:"default-arg",locations:[{start:{line:21,column:70},end:{line:21,column:88}}],line:21}},s:{0:0,1:0},f:{0:0},b:{0:[0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"50ff60dbcd21ee7f393b0c2f637648ee314a985a"});var actualCoverage=coverage[path];return cov_26gvz7s0gz=function(){return actualCoverage},actualCoverage}function ProgressBar(_ref){let{progress,size,className,appearance=(cov_26gvz7s0gz().b[0][0]++,APPEARANCE.Primary),...rest}=_ref;cov_26gvz7s0gz().f[0]++;const roundedProgress=(cov_26gvz7s0gz().s[0]++,Math.max(Math.min(progress,100),0));return cov_26gvz7s0gz().s[1]++,(0,jsx_runtime.jsx)("div",{className:classnames_default()(ProgressBar_styles_module.progressBarContainer,className),...(0,componentPropsProcessors.z7)(rest),"data-size":size,children:(0,jsx_runtime.jsx)("div",{className:ProgressBar_styles_module.progressBarFiller,"data-test-id":"progress-bar-filler","data-appearance":appearance,style:{"--progress":`${roundedProgress}%`}})})}cov_26gvz7s0gz();try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"Компонент индикатор загрузки",displayName:"ProgressBar",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},progress:{defaultValue:null,description:"Процент загрузки от 0 до 100",name:"progress",required:!0,type:{name:"number"}},size:{defaultValue:null,description:"Размер",name:"size",required:!0,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"primary"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"neutral"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"violet"'},{value:'"pink"'}]}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/progress-bar/src/components/ProgressBar/ProgressBar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"packages/progress-bar/src/components/ProgressBar/ProgressBar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}function cov_m8an72qc6(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/progress-bar/stories/ProgressBar.story.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"8c15cf5a57a7816d01009cde9d9b1cb871d637c5"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/progress-bar/stories/ProgressBar.story.tsx",statementMap:{0:{start:{line:8,column:19},end:{line:11,column:1}},1:{start:{line:15,column:38},end:{line:15,column:98}},2:{start:{line:15,column:73},end:{line:15,column:98}},3:{start:{line:17,column:49},end:{line:48,column:1}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:15,column:38},end:{line:15,column:39}},loc:{start:{line:15,column:73},end:{line:15,column:98}},line:15}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8c15cf5a57a7816d01009cde9d9b1cb871d637c5"});var actualCoverage=coverage[path];return cov_m8an72qc6=function(){return actualCoverage},actualCoverage}cov_m8an72qc6();const ProgressBar_story=(cov_m8an72qc6().s[0]++,{title:"Components/Progress Bar/Progress Bar",component:ProgressBar});cov_m8an72qc6().s[1]++;const progressBar=(cov_m8an72qc6().s[3]++,{render:({...args})=>(cov_m8an72qc6().f[0]++,cov_m8an72qc6().s[2]++,(0,jsx_runtime.jsx)(ProgressBar,{...args})),args:{progress:30,size:"s"},argTypes:{progress:{name:"Progress value",type:"number"},size:{control:{type:"radio"}}},parameters:{readme:{sidebar:[`Latest version: ${progress_bar_package.rE}`,README,CHANGELOG]},packageName:progress_bar_package.UU,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=2%3A2&mode=design"}}})},"./packages/utils/src/utils/componentPropsProcessors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function cov_16ynw7mmmd(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/utils/src/utils/componentPropsProcessors.ts",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/utils/src/utils/componentPropsProcessors.ts",statementMap:{0:{start:{line:3,column:25},end:{line:3,column:38}},1:{start:{line:4,column:29},end:{line:4,column:44}},2:{start:{line:7,column:2},end:{line:15,column:6}},3:{start:{line:8,column:20},end:{line:8,column:39}},4:{start:{line:10,column:28},end:{line:13,column:7}},5:{start:{line:19,column:2},end:{line:26,column:4}},6:{start:{line:21,column:6},end:{line:21,column:59}},7:{start:{line:21,column:29},end:{line:21,column:59}},8:{start:{line:23,column:6},end:{line:23,column:23}},9:{start:{line:39,column:2},end:{line:39,column:51}},10:{start:{line:47,column:2},end:{line:47,column:47}},11:{start:{line:55,column:2},end:{line:55,column:51}}},fnMap:{0:{name:"excludeProps",decl:{start:{line:6,column:9},end:{line:6,column:21}},loc:{start:{line:6,column:83},end:{line:16,column:1}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:8,column:12},end:{line:8,column:13}},loc:{start:{line:8,column:20},end:{line:8,column:39}},line:8},2:{name:"(anonymous_2)",decl:{start:{line:10,column:6},end:{line:10,column:7}},loc:{start:{line:10,column:28},end:{line:13,column:7}},line:10},3:{name:"extractProps",decl:{start:{line:18,column:9},end:{line:18,column:21}},loc:{start:{line:18,column:82},end:{line:27,column:1}},line:18},4:{name:"(anonymous_4)",decl:{start:{line:20,column:4},end:{line:20,column:5}},loc:{start:{line:20,column:25},end:{line:24,column:5}},line:20},5:{name:"excludeSupportProps",decl:{start:{line:38,column:16},end:{line:38,column:35}},loc:{start:{line:38,column:81},end:{line:40,column:1}},line:38},6:{name:"extractDataTestProps",decl:{start:{line:46,column:16},end:{line:46,column:36}},loc:{start:{line:46,column:82},end:{line:48,column:1}},line:46},7:{name:"extractSupportProps",decl:{start:{line:54,column:16},end:{line:54,column:35}},loc:{start:{line:54,column:81},end:{line:56,column:1}},line:54}},branchMap:{0:{loc:{start:{line:21,column:6},end:{line:21,column:59}},type:"if",locations:[{start:{line:21,column:6},end:{line:21,column:59}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:21}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"02ff69dac288ee474a3e47eea745a75581709361"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"02ff69dac288ee474a3e47eea745a75581709361"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_16ynw7mmmd=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{gn:()=>extractDataTestProps,sg:()=>excludeSupportProps,z7:()=>extractSupportProps}),cov_16ynw7mmmd();const DATA_TEST_REGEXP=(cov_16ynw7mmmd().s[0]++,/^data-test-/),DATA_AND_ARIA_REGEXP=(cov_16ynw7mmmd().s[1]++,/^(data|aria)-/);function extractProps(props,regex){return cov_16ynw7mmmd().f[3]++,cov_16ynw7mmmd().s[5]++,Object.keys(props).reduce(((nextProps,prop)=>(cov_16ynw7mmmd().f[4]++,cov_16ynw7mmmd().s[6]++,prop.match(regex)?(cov_16ynw7mmmd().b[0][0]++,cov_16ynw7mmmd().s[7]++,nextProps[prop]=props[prop]):cov_16ynw7mmmd().b[0][1]++,cov_16ynw7mmmd().s[8]++,nextProps)),{})}function excludeSupportProps(props){return cov_16ynw7mmmd().f[5]++,cov_16ynw7mmmd().s[9]++,function excludeProps(props,regexp){return cov_16ynw7mmmd().f[0]++,cov_16ynw7mmmd().s[2]++,Object.keys(props).filter((prop=>(cov_16ynw7mmmd().f[1]++,cov_16ynw7mmmd().s[3]++,!prop.match(regexp)))).reduce(((nextProps,prop)=>(cov_16ynw7mmmd().f[2]++,cov_16ynw7mmmd().s[4]++,{...nextProps,[prop]:props[prop]})),{})}(props,DATA_AND_ARIA_REGEXP)}function extractDataTestProps(props){return cov_16ynw7mmmd().f[6]++,cov_16ynw7mmmd().s[10]++,extractProps(props,DATA_TEST_REGEXP)}function extractSupportProps(props){return cov_16ynw7mmmd().f[7]++,cov_16ynw7mmmd().s[11]++,extractProps(props,DATA_AND_ARIA_REGEXP)}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/progress-bar/src/components/ProgressBar/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".progressBarContainer--zyq2m{overflow:hidden;background-color:var(--sys-neutral-decor-default, #dde0ea)}.progressBarContainer--zyq2m[data-size=s]{height:var(--size-progress-bar-progress-bar-height-s, 4px);border-radius:var(--radius-progress-bar-s, 2px)}.progressBarContainer--zyq2m[data-size=xs]{height:var(--size-progress-bar-progress-bar-height-xs, 2px);border-radius:var(--radius-progress-bar-xs, 2px)}.progressBarFiller--xl8o_{width:var(--progress);height:100%}.progressBarFiller--xl8o_[data-appearance=neutral]{background-color:var(--sys-neutral-accent-default, #787b8a)}.progressBarFiller--xl8o_[data-appearance=primary]{background-color:var(--sys-primary-accent-default, #794ed3)}.progressBarFiller--xl8o_[data-appearance=red]{background-color:var(--sys-red-accent-default, #cb3f3e)}.progressBarFiller--xl8o_[data-appearance=orange]{background-color:var(--sys-orange-accent-default, #fb8e42)}.progressBarFiller--xl8o_[data-appearance=yellow]{background-color:var(--sys-yellow-accent-default, #e2b134)}.progressBarFiller--xl8o_[data-appearance=green]{background-color:var(--sys-green-accent-default, #57b762)}.progressBarFiller--xl8o_[data-appearance=blue]{background-color:var(--sys-blue-accent-default, #5388d1)}.progressBarFiller--xl8o_[data-appearance=violet]{background-color:var(--sys-violet-accent-default, #aa6cc1)}.progressBarFiller--xl8o_[data-appearance=pink]{background-color:var(--sys-pink-accent-default, #d1668e)}",""]),___CSS_LOADER_EXPORT___.locals={progressBarContainer:"progressBarContainer--zyq2m",progressBarFiller:"progressBarFiller--xl8o_"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./packages/progress-bar/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./packages/progress-bar/CHANGELOG.md":module=>{"use strict";module.exports="# Change Log\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## 0.1.2 (2024-12-12)\n\n### Only dependencies have been changed\n* [@snack-uikit/utils@3.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)\n\n\n\n\n\n## 0.1.1 (2024-11-14)\n\n\n### Dependencies\n\n* **FF-5678:** up deps classnames/uncontrollable ([8f0d645](https://github.com/cloud-ru-tech/snack-uikit/commit/8f0d645fc7eb8eaf95660cd0ae7d4b550821059b))\n\n\n\n\n\n# 0.1.0 (2024-11-12)\n\n\n### BREAKING CHANGES\n\n\n* **PDS-856:** move ProgressBar and ProgressBarPage from Loader to ProgressBar ([daafed3](https://github.com/cloud-ru-tech/snack-uikit/commit/daafed3f65ee40e08daff7365ffff434f26b7aa7))\n\n\n\n\n## CHANGELOG\n\n### v0.0.0\n\n- Initial version\n"},"./packages/progress-bar/README.md":module=>{"use strict";module.exports='# Progress Bar\n\n## Installation\n\n`npm i @snack-uikit/progress-bar`\n\n[Changelog](./CHANGELOG.md)\n\n## Example\n\n```typescript jsx\nimport { ProgressBar, ProgressBarPage } from "@snack-uikit/progress-bar";\n\n<ProgressBar\n  progress={20}\n  size=\'xs\'\n/>\n\n<ProgressBarPage\n  inProgress={true}\n  animationDuration={100}\n  incrementDuration={500}\n  minimum={0.2}\n/>\n```\n\n[//]: DOCUMENTATION_SECTION_START\n[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT\n## ProgressBar\nКомпонент индикатор загрузки\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| size* | enum ValueOf<{ readonly S: "s"; readonly XS: "xs"; }>: `"s"`, `"xs"` | - | Размер |\n| progress* | `number` | - | Процент загрузки от 0 до 100 |\n| appearance | enum Appearance: `"neutral"`, `"primary"`, `"red"`, `"orange"`, `"yellow"`, `"green"`, `"blue"`, `"violet"`, `"pink"` | primary | Внешний вид |\n| className | `string` | - | CSS-класс |\n## ProgressBarPage\nКомпонент индикатор загрузки страницы\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| inProgress* | `boolean` | - | Включен/выключен |\n| animationDuration | `number` | 200 | Скорость анимации |\n| incrementDuration | `number` | 800 | Время между прогрессом |\n| minimum | `number` | - | Минимальное значение прогресс бара от 0 до 1 |\n| className | `string` | - | CSS-класс |\n\n\n[//]: DOCUMENTATION_SECTION_END\n'},"./packages/progress-bar/package.json":module=>{"use strict";module.exports=JSON.parse('{"UU":"@snack-uikit/progress-bar","rE":"0.1.2"}')}}]);