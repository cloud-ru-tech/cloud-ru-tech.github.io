"use strict";(self.webpackChunksnack_uikit=self.webpackChunksnack_uikit||[]).push([[6009],{"./packages/status/stories/Status.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Status_story,status:()=>Status_story_status});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),CHANGELOG=__webpack_require__("./packages/status/CHANGELOG.md"),status_package=__webpack_require__("./packages/status/package.json"),README=__webpack_require__("./packages/status/README.md"),componentPropsProcessors=__webpack_require__("./packages/utils/src/utils/componentPropsProcessors.ts"),constants=__webpack_require__("./packages/status/src/constants.ts"),StatusIndicator=__webpack_require__("./packages/status/src/components/StatusIndicator/StatusIndicator.tsx"),StatusIndicator_constants=__webpack_require__("./packages/status/src/components/StatusIndicator/constants.ts");function cov_ck2b9qzjv(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/status/src/components/Status/constants.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"04a19d8eedd75180181d6ed9c4aa7cfe9c9152bc"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/status/src/components/Status/constants.ts",statementMap:{0:{start:{line:3,column:20},end:{line:6,column:10}},1:{start:{line:8,column:41},end:{line:11,column:1}}},fnMap:{},branchMap:{},s:{0:0,1:0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"04a19d8eedd75180181d6ed9c4aa7cfe9c9152bc"});var actualCoverage=coverage[path];return cov_ck2b9qzjv=function(){return actualCoverage},actualCoverage}cov_ck2b9qzjv();const SIZE=(cov_ck2b9qzjv().s[0]++,{Xs:"xs",S:"s"}),STATUS_INDICATOR_SIZE_MAP=(cov_ck2b9qzjv().s[1]++,{[SIZE.Xs]:StatusIndicator_constants.S.Xs,[SIZE.S]:StatusIndicator_constants.S.S});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/status/src/components/Status/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.A,options);const Status_styles_module=styles_module.A&&styles_module.A.locals?styles_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_fzm8zr4o8(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/status/src/components/Status/Status.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"0f8a28474b0da77c0cd4e8c7b475109441c12883"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/status/src/components/Status/Status.tsx",statementMap:{0:{start:{line:32,column:2},end:{line:42,column:4}}},fnMap:{0:{name:"Status",decl:{start:{line:24,column:16},end:{line:24,column:22}},loc:{start:{line:31,column:16},end:{line:43,column:1}},line:31}},branchMap:{0:{loc:{start:{line:26,column:2},end:{line:26,column:16}},type:"default-arg",locations:[{start:{line:26,column:9},end:{line:26,column:16}}],line:26},1:{loc:{start:{line:27,column:2},end:{line:27,column:33}},type:"default-arg",locations:[{start:{line:27,column:15},end:{line:27,column:33}}],line:27},2:{loc:{start:{line:37,column:27},end:{line:37,column:53}},type:"binary-expr",locations:[{start:{line:37,column:27},end:{line:37,column:40}},{start:{line:37,column:44},end:{line:37,column:53}}],line:37}},s:{0:0},f:{0:0},b:{0:[0],1:[0],2:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0f8a28474b0da77c0cd4e8c7b475109441c12883"});var actualCoverage=coverage[path];return cov_fzm8zr4o8=function(){return actualCoverage},actualCoverage}function Status(_ref){let{label,size=(cov_fzm8zr4o8().b[0][0]++,SIZE.Xs),appearance=(cov_fzm8zr4o8().b[1][0]++,constants.x.Primary),hasBackground,className,...rest}=_ref;return cov_fzm8zr4o8().f[0]++,cov_fzm8zr4o8().s[0]++,(0,jsx_runtime.jsxs)("div",{className:classnames_default()(Status_styles_module.container,className),...(0,componentPropsProcessors.z7)(rest),"data-size":size,"data-has-background":(cov_fzm8zr4o8().b[2][0]++,hasBackground||void cov_fzm8zr4o8().b[2][1]++),children:[(0,jsx_runtime.jsx)(StatusIndicator.k,{appearance,size:STATUS_INDICATOR_SIZE_MAP[size]}),(0,jsx_runtime.jsx)("span",{className:Status_styles_module.label,children:label})]})}cov_fzm8zr4o8();try{Status.displayName="Status",Status.__docgenInfo={description:"",displayName:"Status",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Текст",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"xs"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"primary"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"violet"'},{value:'"pink"'}]}},hasBackground:{defaultValue:null,description:"Наличие фона",name:"hasBackground",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/status/src/components/Status/Status.tsx#Status"]={docgenInfo:Status.__docgenInfo,name:"Status",path:"packages/status/src/components/Status/Status.tsx#Status"})}catch(__react_docgen_typescript_loader_error){}var stories_styles_module=__webpack_require__("./packages/status/stories/styles.module.scss");function cov_67tu666ek(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/status/stories/Status.story.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"30a99d8ff1ce662021710e097c4d4f267542b7f1"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/status/stories/Status.story.tsx",statementMap:{0:{start:{line:13,column:19},end:{line:16,column:1}},1:{start:{line:20,column:38},end:{line:68,column:1}},2:{start:{line:21,column:16},end:{line:21,column:35}},3:{start:{line:22,column:22},end:{line:22,column:47}},4:{start:{line:23,column:31},end:{line:23,column:65}},5:{start:{line:25,column:2},end:{line:67,column:4}},6:{start:{line:41,column:10},end:{line:43,column:16}},7:{start:{line:46,column:10},end:{line:48,column:16}},8:{start:{line:51,column:10},end:{line:63,column:21}},9:{start:{line:54,column:14},end:{line:56,column:20}},10:{start:{line:59,column:14},end:{line:61,column:20}},11:{start:{line:70,column:44},end:{line:105,column:1}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:20,column:38},end:{line:20,column:39}},loc:{start:{line:20,column:55},end:{line:68,column:1}},line:20},1:{name:"(anonymous_1)",decl:{start:{line:40,column:19},end:{line:40,column:20}},loc:{start:{line:41,column:10},end:{line:43,column:16}},line:41},2:{name:"(anonymous_2)",decl:{start:{line:45,column:19},end:{line:45,column:20}},loc:{start:{line:46,column:10},end:{line:48,column:16}},line:46},3:{name:"(anonymous_3)",decl:{start:{line:50,column:25},end:{line:50,column:26}},loc:{start:{line:51,column:10},end:{line:63,column:21}},line:51},4:{name:"(anonymous_4)",decl:{start:{line:53,column:23},end:{line:53,column:24}},loc:{start:{line:54,column:14},end:{line:56,column:20}},line:54},5:{name:"(anonymous_5)",decl:{start:{line:58,column:23},end:{line:58,column:24}},loc:{start:{line:59,column:14},end:{line:61,column:20}},line:59}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"30a99d8ff1ce662021710e097c4d4f267542b7f1"});var actualCoverage=coverage[path];return cov_67tu666ek=function(){return actualCoverage},actualCoverage}cov_67tu666ek();const Status_story=(cov_67tu666ek().s[0]++,{title:"Components/Status/Status",component:Status});cov_67tu666ek().s[1]++;const Status_story_status=(cov_67tu666ek().s[11]++,{render:({...args})=>{cov_67tu666ek().f[0]++;const sizes=(cov_67tu666ek().s[2]++,Object.values(SIZE)),appearances=(cov_67tu666ek().s[3]++,Object.values(constants.x)),headerCellClassnames=(cov_67tu666ek().s[4]++,classnames_default()(stories_styles_module.A.cell,stories_styles_module.A.headerCell));return cov_67tu666ek().s[5]++,(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:stories_styles_module.A.wrapper,children:["Controlled:",(0,jsx_runtime.jsx)(Status,{...args})]}),(0,jsx_runtime.jsxs)("div",{className:stories_styles_module.A.table,style:{"--columns":5},children:[(0,jsx_runtime.jsx)("div",{className:headerCellClassnames,style:{gridRow:"1 / 3"}}),(0,jsx_runtime.jsx)("div",{className:headerCellClassnames,style:{gridColumn:"2 / 4"},children:"No background"}),(0,jsx_runtime.jsx)("div",{className:headerCellClassnames,style:{gridColumn:"4 / 6"},children:"Background"}),sizes.map((size=>(cov_67tu666ek().f[1]++,cov_67tu666ek().s[6]++,(0,jsx_runtime.jsx)("div",{className:headerCellClassnames,children:size},size)))),sizes.map((size=>(cov_67tu666ek().f[2]++,cov_67tu666ek().s[7]++,(0,jsx_runtime.jsx)("div",{className:headerCellClassnames,children:size},size)))),appearances.map((appearance=>(cov_67tu666ek().f[3]++,cov_67tu666ek().s[8]++,(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:headerCellClassnames,children:appearance}),sizes.map((size=>(cov_67tu666ek().f[4]++,cov_67tu666ek().s[9]++,(0,jsx_runtime.jsx)("div",{className:stories_styles_module.A.cell,children:(0,jsx_runtime.jsx)(Status,{size,appearance,hasBackground:!1,label:"Label text"})},size)))),sizes.map((size=>(cov_67tu666ek().f[5]++,cov_67tu666ek().s[10]++,(0,jsx_runtime.jsx)("div",{className:stories_styles_module.A.cell,children:(0,jsx_runtime.jsx)(Status,{size,appearance,hasBackground:!0,label:"Label text"})},size))))]},appearance))))]})]})},args:{size:SIZE.S,appearance:constants.x.Primary,label:"Label text",hasBackground:!1},argTypes:{size:{options:Object.values(SIZE),control:{type:"radio"}},appearance:{control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${status_package.rE}`,README,CHANGELOG]},packageName:status_package.UU,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A21940&mode=design"}}})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/status/src/components/Status/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".container--Ssil3{display:inline-flex;align-items:center}.container--Ssil3[data-has-background]{background-color:var(--sys-neutral-decor-default, #dde0ea)}.container--Ssil3[data-has-background][data-size=xs]{height:var(--size-status-background-container-xs, 16px);padding-right:var(--spacing-status-background-container-padding-right-xs, 4px);padding-left:var(--spacing-status-background-container-padding-left-xs, 4px);gap:var(--spacing-status-container-gap-single, 2px);border-radius:var(--radius-status-xs, 6px)}.container--Ssil3[data-has-background][data-size=s]{height:var(--size-status-background-container-s, 24px);padding-right:var(--spacing-status-background-container-padding-right-s, 8px);padding-left:var(--spacing-status-background-container-padding-left-s, 4px);gap:var(--spacing-status-container-gap-single, 2px);border-radius:var(--radius-status-s, 8px)}.container--Ssil3[data-size=xs]{gap:var(--spacing-status-container-gap-single, 2px)}.container--Ssil3[data-size=xs] .label--tkANq{font-family:var(--sans-label-s-font-family, SB Sans Interface);font-weight:var(--sans-label-s-font-weight, Semibold);line-height:var(--sans-label-s-line-height, 14px);font-size:var(--sans-label-s-font-size, 11px);letter-spacing:var(--sans-label-s-letter-spacing, 0px);paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px)}.container--Ssil3[data-size=s]{gap:var(--spacing-status-container-gap-single, 2px)}.container--Ssil3[data-size=s] .label--tkANq{font-family:var(--sans-label-m-font-family, SB Sans Interface);font-weight:var(--sans-label-m-font-weight, Semibold);line-height:var(--sans-label-m-line-height, 16px);font-size:var(--sans-label-m-font-size, 12px);letter-spacing:var(--sans-label-m-letter-spacing, 0px);paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px)}.label--tkANq{color:var(--sys-neutral-text-support, #6d707f)}",""]),___CSS_LOADER_EXPORT___.locals={container:"container--Ssil3",label:"label--tkANq"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);