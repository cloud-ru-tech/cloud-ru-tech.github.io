/*! For license information please see Status-story.6bac5e72.iframe.bundle.js.LICENSE.txt */
(self.webpackChunksnack_uikit=self.webpackChunksnack_uikit||[]).push([[6009],{"./packages/status/stories/Status.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Status_story,status:()=>Status_story_status});var classnames=__webpack_require__("./packages/status/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),CHANGELOG=__webpack_require__("./packages/status/CHANGELOG.md"),status_package=__webpack_require__("./packages/status/package.json"),README=__webpack_require__("./packages/status/README.md"),Spinner=__webpack_require__("./packages/loaders/src/components/Spinner/Spinner.tsx"),componentPropsProcessors=__webpack_require__("./packages/utils/src/utils/componentPropsProcessors.ts"),constants=__webpack_require__("./packages/status/src/constants.ts"),StatusIndicator=__webpack_require__("./packages/status/src/components/StatusIndicator/StatusIndicator.tsx"),StatusIndicator_constants=__webpack_require__("./packages/status/src/components/StatusIndicator/constants.ts");function cov_ck2b9qzjv(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/status/src/components/Status/constants.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"2e0c7f57ff227ec31e3f34bfcdaf202717d01512"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/status/src/components/Status/constants.ts",statementMap:{0:{start:{line:3,column:20},end:{line:6,column:10}},1:{start:{line:8,column:41},end:{line:11,column:1}},2:{start:{line:13,column:31},end:{line:16,column:10}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2e0c7f57ff227ec31e3f34bfcdaf202717d01512"});var actualCoverage=coverage[path];return cov_ck2b9qzjv=function(){return actualCoverage},actualCoverage}cov_ck2b9qzjv();const SIZE=(cov_ck2b9qzjv().s[0]++,{Xs:"xs",S:"s"}),STATUS_INDICATOR_SIZE_MAP=(cov_ck2b9qzjv().s[1]++,{[SIZE.Xs]:StatusIndicator_constants.S.Xs,[SIZE.S]:StatusIndicator_constants.S.S}),LOADER_SIZE_MAP=(cov_ck2b9qzjv().s[2]++,{[SIZE.Xs]:"xxs",[SIZE.S]:"xs"});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/status/src/components/Status/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.A,options);const Status_styles_module=styles_module.A&&styles_module.A.locals?styles_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_fzm8zr4o8(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/status/src/components/Status/Status.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"9141812538829c5d6759fff65d8aa39a223a2b8c"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/status/src/components/Status/Status.tsx",statementMap:{0:{start:{line:35,column:2},end:{line:50,column:4}}},fnMap:{0:{name:"Status",decl:{start:{line:26,column:16},end:{line:26,column:22}},loc:{start:{line:34,column:16},end:{line:51,column:1}},line:34}},branchMap:{0:{loc:{start:{line:28,column:2},end:{line:28,column:16}},type:"default-arg",locations:[{start:{line:28,column:9},end:{line:28,column:16}}],line:28},1:{loc:{start:{line:29,column:2},end:{line:29,column:33}},type:"default-arg",locations:[{start:{line:29,column:15},end:{line:29,column:33}}],line:29},2:{loc:{start:{line:40,column:27},end:{line:40,column:53}},type:"binary-expr",locations:[{start:{line:40,column:27},end:{line:40,column:40}},{start:{line:40,column:44},end:{line:40,column:53}}],line:40},3:{loc:{start:{line:41,column:23},end:{line:41,column:64}},type:"cond-expr",locations:[{start:{line:41,column:33},end:{line:41,column:51}},{start:{line:41,column:54},end:{line:41,column:64}}],line:41},4:{loc:{start:{line:43,column:7},end:{line:47,column:7}},type:"cond-expr",locations:[{start:{line:44,column:8},end:{line:44,column:48}},{start:{line:46,column:8},end:{line:46,column:90}}],line:43}},s:{0:0},f:{0:0},b:{0:[0],1:[0],2:[0,0],3:[0,0],4:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9141812538829c5d6759fff65d8aa39a223a2b8c"});var actualCoverage=coverage[path];return cov_fzm8zr4o8=function(){return actualCoverage},actualCoverage}function Status(_ref){let{label,size=(cov_fzm8zr4o8().b[0][0]++,SIZE.Xs),appearance=(cov_fzm8zr4o8().b[1][0]++,constants.x.Primary),hasBackground,loading,className,...rest}=_ref;return cov_fzm8zr4o8().f[0]++,cov_fzm8zr4o8().s[0]++,(0,jsx_runtime.jsxs)("div",{className:classnames_default()(Status_styles_module.container,className),...(0,componentPropsProcessors.z7)(rest),"data-size":size,"data-has-background":(cov_fzm8zr4o8().b[2][0]++,hasBackground||void cov_fzm8zr4o8().b[2][1]++),"data-appearance":loading?(cov_fzm8zr4o8().b[3][0]++,constants.x.Neutral):(cov_fzm8zr4o8().b[3][1]++,appearance),children:[loading?(cov_fzm8zr4o8().b[4][0]++,(0,jsx_runtime.jsx)(Spinner.y,{size:LOADER_SIZE_MAP[size]})):(cov_fzm8zr4o8().b[4][1]++,(0,jsx_runtime.jsx)(StatusIndicator.k,{appearance,size:STATUS_INDICATOR_SIZE_MAP[size]})),(0,jsx_runtime.jsx)("span",{className:Status_styles_module.label,children:label})]})}cov_fzm8zr4o8();try{Status.displayName="Status",Status.__docgenInfo={description:"",displayName:"Status",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Текст",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"xs"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'}]}},appearance:{defaultValue:{value:"primary"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"neutral"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"violet"'},{value:'"pink"'}]}},hasBackground:{defaultValue:null,description:"Наличие фона",name:"hasBackground",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/status/src/components/Status/Status.tsx#Status"]={docgenInfo:Status.__docgenInfo,name:"Status",path:"packages/status/src/components/Status/Status.tsx#Status"})}catch(__react_docgen_typescript_loader_error){}var stories_styles_module=__webpack_require__("./packages/status/stories/styles.module.scss");function cov_67tu666ek(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/status/stories/Status.story.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"6fbc8d96893cd4f43e8bd47dde2f105971b1ef8d"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/status/stories/Status.story.tsx",statementMap:{0:{start:{line:13,column:19},end:{line:16,column:1}},1:{start:{line:20,column:38},end:{line:68,column:1}},2:{start:{line:21,column:16},end:{line:21,column:35}},3:{start:{line:22,column:22},end:{line:22,column:47}},4:{start:{line:23,column:31},end:{line:23,column:65}},5:{start:{line:25,column:2},end:{line:67,column:4}},6:{start:{line:41,column:10},end:{line:43,column:16}},7:{start:{line:46,column:10},end:{line:48,column:16}},8:{start:{line:51,column:10},end:{line:63,column:21}},9:{start:{line:54,column:14},end:{line:56,column:20}},10:{start:{line:59,column:14},end:{line:61,column:20}},11:{start:{line:70,column:44},end:{line:106,column:1}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:20,column:38},end:{line:20,column:39}},loc:{start:{line:20,column:55},end:{line:68,column:1}},line:20},1:{name:"(anonymous_1)",decl:{start:{line:40,column:19},end:{line:40,column:20}},loc:{start:{line:41,column:10},end:{line:43,column:16}},line:41},2:{name:"(anonymous_2)",decl:{start:{line:45,column:19},end:{line:45,column:20}},loc:{start:{line:46,column:10},end:{line:48,column:16}},line:46},3:{name:"(anonymous_3)",decl:{start:{line:50,column:25},end:{line:50,column:26}},loc:{start:{line:51,column:10},end:{line:63,column:21}},line:51},4:{name:"(anonymous_4)",decl:{start:{line:53,column:23},end:{line:53,column:24}},loc:{start:{line:54,column:14},end:{line:56,column:20}},line:54},5:{name:"(anonymous_5)",decl:{start:{line:58,column:23},end:{line:58,column:24}},loc:{start:{line:59,column:14},end:{line:61,column:20}},line:59}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6fbc8d96893cd4f43e8bd47dde2f105971b1ef8d"});var actualCoverage=coverage[path];return cov_67tu666ek=function(){return actualCoverage},actualCoverage}cov_67tu666ek();const Status_story=(cov_67tu666ek().s[0]++,{title:"Components/Status/Status",component:Status});cov_67tu666ek().s[1]++;const Status_story_status=(cov_67tu666ek().s[11]++,{render:({...args})=>{cov_67tu666ek().f[0]++;const sizes=(cov_67tu666ek().s[2]++,Object.values(SIZE)),appearances=(cov_67tu666ek().s[3]++,Object.values(constants.x)),headerCellClassnames=(cov_67tu666ek().s[4]++,classnames_default()(stories_styles_module.A.cell,stories_styles_module.A.headerCell));return cov_67tu666ek().s[5]++,(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:stories_styles_module.A.wrapper,children:["Controlled:",(0,jsx_runtime.jsx)(Status,{...args})]}),(0,jsx_runtime.jsxs)("div",{className:stories_styles_module.A.table,style:{"--columns":5},children:[(0,jsx_runtime.jsx)("div",{className:headerCellClassnames,style:{gridRow:"1 / 3"}}),(0,jsx_runtime.jsx)("div",{className:headerCellClassnames,style:{gridColumn:"2 / 4"},children:"No background"}),(0,jsx_runtime.jsx)("div",{className:headerCellClassnames,style:{gridColumn:"4 / 6"},children:"Background"}),sizes.map((size=>(cov_67tu666ek().f[1]++,cov_67tu666ek().s[6]++,(0,jsx_runtime.jsx)("div",{className:headerCellClassnames,children:size},size)))),sizes.map((size=>(cov_67tu666ek().f[2]++,cov_67tu666ek().s[7]++,(0,jsx_runtime.jsx)("div",{className:headerCellClassnames,children:size},size)))),appearances.map((appearance=>(cov_67tu666ek().f[3]++,cov_67tu666ek().s[8]++,(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:headerCellClassnames,children:appearance}),sizes.map((size=>(cov_67tu666ek().f[4]++,cov_67tu666ek().s[9]++,(0,jsx_runtime.jsx)("div",{className:stories_styles_module.A.cell,children:(0,jsx_runtime.jsx)(Status,{size,appearance,hasBackground:!1,label:"Label text"})},size)))),sizes.map((size=>(cov_67tu666ek().f[5]++,cov_67tu666ek().s[10]++,(0,jsx_runtime.jsx)("div",{className:stories_styles_module.A.cell,children:(0,jsx_runtime.jsx)(Status,{size,appearance,hasBackground:!0,label:"Label text"})},size))))]},appearance))))]})]})},args:{size:SIZE.S,appearance:constants.x.Primary,label:"Label text",hasBackground:!1,loading:!1},argTypes:{size:{options:Object.values(SIZE),control:{type:"radio"}},appearance:{control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${status_package.rE}`,README,CHANGELOG]},packageName:status_package.UU,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A21940&mode=design"}}})},"./packages/loaders/src/components/Spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var classnames=__webpack_require__("./packages/loaders/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),componentPropsProcessors=__webpack_require__("./packages/utils/src/utils/componentPropsProcessors.ts"),constants=__webpack_require__("./packages/loaders/src/components/constants.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/loaders/src/components/Spinner/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.A,options);const Spinner_styles_module=styles_module.A&&styles_module.A.locals?styles_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1r2iqy0qjx(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/loaders/src/components/Spinner/Spinner.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/loaders/src/components/Spinner/Spinner.tsx",statementMap:{0:{start:{line:18,column:2},end:{line:37,column:3}},1:{start:{line:19,column:4},end:{line:36,column:6}},2:{start:{line:39,column:2},end:{line:65,column:3}},3:{start:{line:40,column:4},end:{line:64,column:6}},4:{start:{line:66,column:2},end:{line:88,column:4}}},fnMap:{0:{name:"Spinner",decl:{start:{line:17,column:16},end:{line:17,column:23}},loc:{start:{line:17,column:84},end:{line:89,column:1}},line:17}},branchMap:{0:{loc:{start:{line:17,column:26},end:{line:17,column:46}},type:"default-arg",locations:[{start:{line:17,column:33},end:{line:17,column:46}}],line:17},1:{loc:{start:{line:18,column:2},end:{line:37,column:3}},type:"if",locations:[{start:{line:18,column:2},end:{line:37,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:18},2:{loc:{start:{line:39,column:2},end:{line:65,column:3}},type:"if",locations:[{start:{line:39,column:2},end:{line:65,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:39}},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0},b:{0:[0],1:[0,0],2:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ddb13430bdc224b8eee13f222ee8fac5a8dd6dd6"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"ddb13430bdc224b8eee13f222ee8fac5a8dd6dd6"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1r2iqy0qjx=function(){return actualCoverage},actualCoverage}function Spinner(_ref){let{size=(cov_1r2iqy0qjx().b[0][0]++,constants.K.S),className,...rest}=_ref;return cov_1r2iqy0qjx().f[0]++,cov_1r2iqy0qjx().s[0]++,size===constants.K.XXS?(cov_1r2iqy0qjx().b[1][0]++,cov_1r2iqy0qjx().s[1]++,(0,jsx_runtime.jsxs)("svg",{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:classnames_default()(Spinner_styles_module.spinner,className),...(0,componentPropsProcessors.z7)(rest),"data-size":size,children:[(0,jsx_runtime.jsxs)("mask",{id:"spinnerMask",children:[(0,jsx_runtime.jsx)("circle",{opacity:"0.24",cx:"4",cy:"4",r:"3",strokeWidth:"1.5"}),(0,jsx_runtime.jsx)("path",{d:"M1 4C1 2.34315 2.34315 1 4 1",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,jsx_runtime.jsx)("g",{mask:"url(#spinnerMask)",children:(0,jsx_runtime.jsx)("path",{d:"M0 0H8V8H0V0Z"})})]})):(cov_1r2iqy0qjx().b[1][1]++,cov_1r2iqy0qjx().s[2]++,size===constants.K.XS?(cov_1r2iqy0qjx().b[2][0]++,cov_1r2iqy0qjx().s[3]++,(0,jsx_runtime.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:classnames_default()(Spinner_styles_module.spinner,className),...(0,componentPropsProcessors.z7)(rest),"data-size":size,children:[(0,jsx_runtime.jsxs)("mask",{id:"spinnerMask",children:[(0,jsx_runtime.jsx)("circle",{opacity:"0.24",cx:"8",cy:"8.7951",r:"6",strokeWidth:"1.5"}),(0,jsx_runtime.jsx)("path",{d:"M2 8.79511C2 5.4814 4.68629 2.7951 8 2.7951",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,jsx_runtime.jsx)("g",{mask:"url(#spinnerMask)",children:(0,jsx_runtime.jsx)("path",{d:"M0 0.795105H16V16.7951H0V0.795105Z"})})]})):(cov_1r2iqy0qjx().b[2][1]++,cov_1r2iqy0qjx().s[4]++,(0,jsx_runtime.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:classnames_default()(Spinner_styles_module.spinner,className),...(0,componentPropsProcessors.z7)(rest),"data-size":size,children:[(0,jsx_runtime.jsxs)("mask",{id:"spinnerMask",children:[(0,jsx_runtime.jsx)("circle",{opacity:"0.24",cx:"11.8926",cy:"12",r:"9",strokeWidth:"1.5"}),(0,jsx_runtime.jsx)("path",{d:"M2.89258 12C2.89258 7.02944 6.92202 3 11.8926 3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,jsx_runtime.jsx)("g",{mask:"url(#spinnerMask)",children:(0,jsx_runtime.jsx)("path",{d:"M0 0H24V24H0V0Z"})})]})))}cov_1r2iqy0qjx();try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"Компонент спиннер",displayName:"Spinner",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},size:{defaultValue:{value:"s"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xxs"'}]}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/loaders/src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"packages/loaders/src/components/Spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./packages/loaders/src/components/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function cov_21yzxw7d7f(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/loaders/src/components/constants.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"c75271463daa68fe593d31ac27212dbd7e76703b"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/loaders/src/components/constants.ts",statementMap:{0:{start:{line:1,column:27},end:{line:7,column:10}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c75271463daa68fe593d31ac27212dbd7e76703b"});var actualCoverage=coverage[path];return cov_21yzxw7d7f=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{K:()=>LOADER_SIZE}),cov_21yzxw7d7f();const LOADER_SIZE=(cov_21yzxw7d7f().s[0]++,{XXS:"xxs",XS:"xs",S:"s",M:"m",L:"l"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/loaders/src/components/Spinner/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".spinner--tEImX{pointer-events:none;stroke:currentColor;animation:spin--FP22R 1s ease-in-out infinite}.spinner--tEImX>g>path{fill:currentColor}.spinner--tEImX>mask{mask-type:alpha}.spinner--tEImX[data-size=xxs]{width:var(--size-loader-loader-xxs, 8px);height:var(--size-loader-loader-xxs, 8px)}.spinner--tEImX[data-size=xs]{width:var(--size-loader-loader-xs, 16px);height:var(--size-loader-loader-xs, 16px)}.spinner--tEImX[data-size=s]{width:var(--size-loader-loader-s, 24px);height:var(--size-loader-loader-s, 24px)}.spinner--tEImX[data-size=m]{width:var(--size-loader-loader-m, 48px);height:var(--size-loader-loader-m, 48px)}.spinner--tEImX[data-size=l]{width:var(--size-loader-loader-l, 72px);height:var(--size-loader-loader-l, 72px)}@keyframes spin--FP22R{to{transform:rotate(360deg)}}",""]),___CSS_LOADER_EXPORT___.locals={spinner:"spinner--tEImX",spin:"spin--FP22R"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/status/src/components/Status/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".container--Ssil3{display:inline-flex;align-items:center}.container--Ssil3[data-has-background][data-appearance=primary]{background-color:var(--sys-primary-decor-default, #ebdefd)}.container--Ssil3[data-has-background][data-appearance=primary] .label--tkANq{color:var(--sys-primary-text-support, #5b4796)}.container--Ssil3[data-has-background][data-appearance=neutral]{background-color:var(--sys-neutral-decor-default, #dde0ea)}.container--Ssil3[data-has-background][data-appearance=neutral] .label--tkANq{color:var(--sys-neutral-text-support, #6d707f)}.container--Ssil3[data-has-background][data-appearance=red]{background-color:var(--sys-red-decor-default, #fdd6cd)}.container--Ssil3[data-has-background][data-appearance=red] .label--tkANq{color:var(--sys-red-text-support, #ae514c)}.container--Ssil3[data-has-background][data-appearance=orange]{background-color:var(--sys-orange-decor-default, #fed8b8)}.container--Ssil3[data-has-background][data-appearance=orange] .label--tkANq{color:var(--sys-orange-text-support, #bb733e)}.container--Ssil3[data-has-background][data-appearance=blue]{background-color:var(--sys-blue-decor-default, #d6e2f4)}.container--Ssil3[data-has-background][data-appearance=blue] .label--tkANq{color:var(--sys-blue-text-support, #4877b0)}.container--Ssil3[data-has-background][data-appearance=violet]{background-color:var(--sys-violet-decor-default, #e6dcf3)}.container--Ssil3[data-has-background][data-appearance=violet] .label--tkANq{color:var(--sys-violet-text-support, #8c639b)}.container--Ssil3[data-has-background][data-appearance=pink]{background-color:var(--sys-pink-decor-default, #f5d9e1)}.container--Ssil3[data-has-background][data-appearance=pink] .label--tkANq{color:var(--sys-pink-text-support, #ae5e80)}.container--Ssil3[data-has-background][data-appearance=yellow]{background-color:var(--sys-yellow-decor-default, #f0dfb1)}.container--Ssil3[data-has-background][data-appearance=yellow] .label--tkANq{color:var(--sys-yellow-text-support, #b78c32)}.container--Ssil3[data-has-background][data-appearance=green]{background-color:var(--sys-green-decor-default, #d2ead0)}.container--Ssil3[data-has-background][data-appearance=green] .label--tkANq{color:var(--sys-green-text-support, #55915a)}.container--Ssil3[data-has-background][data-size=xs]{height:var(--size-status-background-container-xs, 16px);padding-right:var(--spacing-status-background-container-padding-right-xs, 4px);padding-left:var(--spacing-status-background-container-padding-left-xs, 4px);gap:var(--spacing-status-container-gap-single, 2px);border-radius:var(--radius-status-xs, 6px)}.container--Ssil3[data-has-background][data-size=s]{height:var(--size-status-background-container-s, 24px);padding-right:var(--spacing-status-background-container-padding-right-s, 8px);padding-left:var(--spacing-status-background-container-padding-left-s, 4px);gap:var(--spacing-status-container-gap-single, 2px);border-radius:var(--radius-status-s, 8px)}.container--Ssil3[data-size=xs]{gap:var(--spacing-status-container-gap-single, 2px)}.container--Ssil3[data-size=xs] .label--tkANq{font-family:var(--sans-label-s-font-family, SB Sans Interface);font-weight:var(--sans-label-s-font-weight, Semibold);line-height:var(--sans-label-s-line-height, 14px);font-size:var(--sans-label-s-font-size, 11px);letter-spacing:var(--sans-label-s-letter-spacing, 0px);paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px)}.container--Ssil3[data-size=s]{gap:var(--spacing-status-container-gap-single, 2px)}.container--Ssil3[data-size=s] .label--tkANq{font-family:var(--sans-label-m-font-family, SB Sans Interface);font-weight:var(--sans-label-m-font-weight, Semibold);line-height:var(--sans-label-m-line-height, 16px);font-size:var(--sans-label-m-font-size, 12px);letter-spacing:var(--sans-label-m-letter-spacing, 0px);paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px)}.label--tkANq{color:var(--sys-neutral-text-support, #6d707f)}",""]),___CSS_LOADER_EXPORT___.locals={container:"container--Ssil3",label:"label--tkANq"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./packages/loaders/node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);