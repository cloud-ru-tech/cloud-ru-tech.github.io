"use strict";(self.webpackChunksnack_uikit=self.webpackChunksnack_uikit||[]).push([[2742],{"./packages/drop-zone/stories/FileUpload.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>FileUpload_story,fileUpload:()=>FileUpload_story_fileUpload});var react=__webpack_require__("./node_modules/react/index.js"),ButtonOutline=__webpack_require__("./packages/button/src/components/ButtonOutline/ButtonOutline.tsx"),file=__webpack_require__("./packages/icons/src/components/interface-icons/file/index.tsx"),CHANGELOG=__webpack_require__("./packages/drop-zone/CHANGELOG.md"),drop_zone_package=__webpack_require__("./packages/drop-zone/package.json"),README=__webpack_require__("./packages/drop-zone/README.md"),componentPropsProcessors=__webpack_require__("./packages/utils/src/utils/componentPropsProcessors.ts"),constants=__webpack_require__("./packages/drop-zone/src/helperComponents/PrivateDropZone/constants.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/drop-zone/src/components/FileUpload/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const FileUpload_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1mgh3ibf0m(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/drop-zone/src/components/FileUpload/FileUpload.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/drop-zone/src/components/FileUpload/FileUpload.tsx",statementMap:{0:{start:{line:22,column:26},end:{line:22,column:56}},1:{start:{line:24,column:28},end:{line:30,column:3}},2:{start:{line:24,column:69},end:{line:30,column:3}},3:{start:{line:25,column:4},end:{line:27,column:5}},4:{start:{line:26,column:6},end:{line:26,column:38}},5:{start:{line:29,column:4},end:{line:29,column:12}},6:{start:{line:32,column:27},end:{line:37,column:3}},7:{start:{line:33,column:4},end:{line:33,column:23}},8:{start:{line:33,column:16},end:{line:33,column:23}},9:{start:{line:35,column:23},end:{line:35,column:40}},10:{start:{line:36,column:4},end:{line:36,column:30}},11:{start:{line:39,column:22},end:{line:41,column:3}},12:{start:{line:40,column:4},end:{line:40,column:46}},13:{start:{line:43,column:2},end:{line:58,column:4}}},fnMap:{0:{name:"FileUpload",decl:{start:{line:21,column:16},end:{line:21,column:26}},loc:{start:{line:21,column:119},end:{line:59,column:1}},line:21},1:{name:"(anonymous_1)",decl:{start:{line:24,column:28},end:{line:24,column:29}},loc:{start:{line:24,column:69},end:{line:30,column:3}},line:24},2:{name:"(anonymous_2)",decl:{start:{line:24,column:69},end:{line:24,column:70}},loc:{start:{line:24,column:101},end:{line:30,column:3}},line:24},3:{name:"(anonymous_3)",decl:{start:{line:32,column:27},end:{line:32,column:28}},loc:{start:{line:32,column:85},end:{line:37,column:3}},line:32},4:{name:"(anonymous_4)",decl:{start:{line:39,column:22},end:{line:39,column:23}},loc:{start:{line:39,column:59},end:{line:41,column:3}},line:39}},branchMap:{0:{loc:{start:{line:21,column:29},end:{line:21,column:56}},type:"default-arg",locations:[{start:{line:21,column:36},end:{line:21,column:56}}],line:21},1:{loc:{start:{line:25,column:4},end:{line:27,column:5}},type:"if",locations:[{start:{line:25,column:4},end:{line:27,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:25},2:{loc:{start:{line:33,column:4},end:{line:33,column:23}},type:"if",locations:[{start:{line:33,column:4},end:{line:33,column:23}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:33}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0],1:[0,0],2:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3fd9404cd79b034329c3a997c3368544f7834c5d"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"3fd9404cd79b034329c3a997c3368544f7834c5d"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1mgh3ibf0m=function(){return actualCoverage},actualCoverage}function FileUpload(_ref){let{mode=(cov_1mgh3ibf0m().b[0][0]++,constants.Q.Multiple),onFilesUpload,accept,children,...rest}=_ref;cov_1mgh3ibf0m().f[0]++;const hiddenFileInput=(cov_1mgh3ibf0m().s[0]++,(0,react.useRef)(null));cov_1mgh3ibf0m().s[1]++;cov_1mgh3ibf0m().s[6]++;cov_1mgh3ibf0m().s[11]++;return cov_1mgh3ibf0m().s[13]++,(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,react.cloneElement)(children,{onClick:(cb=children.props?.onClick,cov_1mgh3ibf0m().f[1]++,cov_1mgh3ibf0m().s[2]++,e=>{cov_1mgh3ibf0m().f[2]++,cov_1mgh3ibf0m().s[3]++,hiddenFileInput.current?(cov_1mgh3ibf0m().b[1][0]++,cov_1mgh3ibf0m().s[4]++,hiddenFileInput.current.click()):cov_1mgh3ibf0m().b[1][1]++,cov_1mgh3ibf0m().s[5]++,cb?.(e)})}),(0,jsx_runtime.jsx)("input",{onChange:_ref2=>{let{target:{files}}=_ref2;if(cov_1mgh3ibf0m().f[3]++,cov_1mgh3ibf0m().s[7]++,!files)return cov_1mgh3ibf0m().b[2][0]++,void cov_1mgh3ibf0m().s[8]++;cov_1mgh3ibf0m().b[2][1]++;const filesArray=(cov_1mgh3ibf0m().s[9]++,Array.from(files));cov_1mgh3ibf0m().s[10]++,onFilesUpload(filesArray)},multiple:mode===constants.Q.Multiple,ref:hiddenFileInput,className:FileUpload_styles_module.hiddenInput,type:"file",accept,onClick:e=>{cov_1mgh3ibf0m().f[4]++,cov_1mgh3ibf0m().s[12]++,e.target.value=""},...(0,componentPropsProcessors.cN)(rest)})]});var cb}cov_1mgh3ibf0m();try{FileUpload.displayName="FileUpload",FileUpload.__docgenInfo={description:"",displayName:"FileUpload",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},onFilesUpload:{defaultValue:null,description:"Колбек загрузки файла",name:"onFilesUpload",required:!0,type:{name:"(files: File[]) => void"}},mode:{defaultValue:{value:"multiple"},description:"Режим",name:"mode",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},accept:{defaultValue:null,description:"Показывает пользователю в открывшемся диалоговом окне файлы типов, которые вы указываете в значении атрибута",name:"accept",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/drop-zone/src/components/FileUpload/FileUpload.tsx#FileUpload"]={docgenInfo:FileUpload.__docgenInfo,name:"FileUpload",path:"packages/drop-zone/src/components/FileUpload/FileUpload.tsx#FileUpload"})}catch(__react_docgen_typescript_loader_error){}var stories_styles_module=__webpack_require__("./packages/drop-zone/stories/styles.module.scss");function cov_2dvnvgxg85(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/drop-zone/stories/FileUpload.story.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"b94b4fd597ba8e53bda5a8dea91f1341a2e88915"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/drop-zone/stories/FileUpload.story.tsx",statementMap:{0:{start:{line:14,column:19},end:{line:17,column:1}},1:{start:{line:21,column:28},end:{line:21,column:48}},2:{start:{line:23,column:2},end:{line:44,column:4}},3:{start:{line:30,column:8},end:{line:41,column:14}},4:{start:{line:47,column:53},end:{line:63,column:1}}},fnMap:{0:{name:"Template",decl:{start:{line:20,column:9},end:{line:20,column:17}},loc:{start:{line:20,column:48},end:{line:45,column:1}},line:20},1:{name:"(anonymous_1)",decl:{start:{line:29,column:17},end:{line:29,column:18}},loc:{start:{line:30,column:8},end:{line:41,column:14}},line:30}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b94b4fd597ba8e53bda5a8dea91f1341a2e88915"});var actualCoverage=coverage[path];return cov_2dvnvgxg85=function(){return actualCoverage},actualCoverage}cov_2dvnvgxg85();const FileUpload_story=(cov_2dvnvgxg85().s[0]++,{title:"Components/Drop Zone/File Upload",component:FileUpload});const FileUpload_story_fileUpload=(cov_2dvnvgxg85().s[4]++,{render:function Template({...args}){cov_2dvnvgxg85().f[0]++;const[files,setFiles]=(cov_2dvnvgxg85().s[1]++,(0,react.useState)([]));return cov_2dvnvgxg85().s[2]++,(0,jsx_runtime.jsxs)("div",{className:stories_styles_module.Z.wrapper,children:[(0,jsx_runtime.jsx)(FileUpload,{...args,onFilesUpload:setFiles,children:(0,jsx_runtime.jsx)(ButtonOutline.I,{label:"Загрузить",icon:(0,jsx_runtime.jsx)(file.Z,{})})}),files.map((file=>(cov_2dvnvgxg85().f[1]++,cov_2dvnvgxg85().s[3]++,(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"Name:"})," ",file.name]}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"Size:"})," ",file.size]}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("strong",{children:"Type:"})," ",file.type]}),(0,jsx_runtime.jsx)("br",{})]},file.name))))]})},args:{mode:constants.Q.Multiple,"data-test-id":"file-upload"},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${drop_zone_package.i8}`,README,CHANGELOG]},packageName:drop_zone_package.u2}})},"./packages/drop-zone/src/helperComponents/PrivateDropZone/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_ffog9cabv(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/drop-zone/src/helperComponents/PrivateDropZone/constants.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"74b6ac6c76e638153b8bef7045be3dd3edbcd440"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/drop-zone/src/helperComponents/PrivateDropZone/constants.ts",statementMap:{0:{start:{line:1,column:27},end:{line:4,column:10}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"74b6ac6c76e638153b8bef7045be3dd3edbcd440"});var actualCoverage=coverage[path];return cov_ffog9cabv=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{Q:()=>UPLOAD_MODE}),cov_ffog9cabv();const UPLOAD_MODE=(cov_ffog9cabv().s[0]++,{Single:"single",Multiple:"multiple"})},"./packages/icons/src/components/interface-icons/file/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>interface_icons_file});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_su3voenev(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/icons/src/components/interface-icons/file/FileS.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/icons/src/components/interface-icons/file/FileS.tsx",statementMap:{0:{start:{line:11,column:17},end:{line:35,column:2}},1:{start:{line:12,column:2},end:{line:12,column:26}},2:{start:{line:13,column:2},end:{line:13,column:27}},3:{start:{line:14,column:17},end:{line:14,column:26}},4:{start:{line:15,column:23},end:{line:15,column:47}},5:{start:{line:16,column:2},end:{line:20,column:3}},6:{start:{line:17,column:4},end:{line:17,column:39}},7:{start:{line:17,column:22},end:{line:17,column:39}},8:{start:{line:18,column:4},end:{line:18,column:36}},9:{start:{line:19,column:4},end:{line:19,column:37}},10:{start:{line:21,column:2},end:{line:34,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:34},end:{line:11,column:35}},loc:{start:{line:11,column:109},end:{line:35,column:1}},line:11}},branchMap:{0:{loc:{start:{line:11,column:37},end:{line:11,column:46}},type:"default-arg",locations:[{start:{line:11,column:44},end:{line:11,column:46}}],line:11},1:{loc:{start:{line:16,column:2},end:{line:20,column:3}},type:"if",locations:[{start:{line:16,column:2},end:{line:20,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:16},2:{loc:{start:{line:17,column:4},end:{line:17,column:39}},type:"if",locations:[{start:{line:17,column:4},end:{line:17,column:39}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:17}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0},b:{0:[0],1:[0,0],2:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8736344153f8bba20a10cf597f62b5ea96d45cc6"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"8736344153f8bba20a10cf597f62b5ea96d45cc6"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_su3voenev=function(){return actualCoverage},actualCoverage}cov_su3voenev();const file_FileS=(cov_su3voenev().s[0]++,react.forwardRef(((_ref,ref)=>{let{size=(cov_su3voenev().b[0][0]++,24),...props}=_ref;cov_su3voenev().f[0]++,cov_su3voenev().s[1]++,props.width=void 0,cov_su3voenev().s[2]++,props.height=void 0;const testId=(cov_su3voenev().s[3]++,"-file-s"),isCustomSize=(cov_su3voenev().s[4]++,"number"==typeof size);return cov_su3voenev().s[5]++,isCustomSize?(cov_su3voenev().b[1][0]++,cov_su3voenev().s[6]++,props.style?cov_su3voenev().b[2][1]++:(cov_su3voenev().b[2][0]++,cov_su3voenev().s[7]++,props.style={}),cov_su3voenev().s[8]++,props.style.width=size+"px",cov_su3voenev().s[9]++,props.style.height=size+"px"):cov_su3voenev().b[1][1]++,cov_su3voenev().s[10]++,(0,jsx_runtime.jsx)("svg",{ref,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+testId,...props,children:(0,jsx_runtime.jsx)("use",{href:"#snack-uikit-"+testId.substring(1)})})})));try{FileS.displayName="FileS",FileS.__docgenInfo={description:"",displayName:"FileS",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"string | number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons/file/FileS.tsx#FileS"]={docgenInfo:FileS.__docgenInfo,name:"FileS",path:"packages/icons/src/components/interface-icons/file/FileS.tsx#FileS"})}catch(__react_docgen_typescript_loader_error){}function cov_1b0lfan1ma(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/icons/src/components/interface-icons/file/FileXs.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/icons/src/components/interface-icons/file/FileXs.tsx",statementMap:{0:{start:{line:11,column:18},end:{line:35,column:2}},1:{start:{line:12,column:2},end:{line:12,column:26}},2:{start:{line:13,column:2},end:{line:13,column:27}},3:{start:{line:14,column:17},end:{line:14,column:27}},4:{start:{line:15,column:23},end:{line:15,column:47}},5:{start:{line:16,column:2},end:{line:20,column:3}},6:{start:{line:17,column:4},end:{line:17,column:39}},7:{start:{line:17,column:22},end:{line:17,column:39}},8:{start:{line:18,column:4},end:{line:18,column:36}},9:{start:{line:19,column:4},end:{line:19,column:37}},10:{start:{line:21,column:2},end:{line:34,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:35},end:{line:11,column:36}},loc:{start:{line:11,column:110},end:{line:35,column:1}},line:11}},branchMap:{0:{loc:{start:{line:11,column:38},end:{line:11,column:47}},type:"default-arg",locations:[{start:{line:11,column:45},end:{line:11,column:47}}],line:11},1:{loc:{start:{line:16,column:2},end:{line:20,column:3}},type:"if",locations:[{start:{line:16,column:2},end:{line:20,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:16},2:{loc:{start:{line:17,column:4},end:{line:17,column:39}},type:"if",locations:[{start:{line:17,column:4},end:{line:17,column:39}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:17}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0},b:{0:[0],1:[0,0],2:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"044f1a9c720800029864297bcacae8c7d8418147"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"044f1a9c720800029864297bcacae8c7d8418147"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1b0lfan1ma=function(){return actualCoverage},actualCoverage}cov_1b0lfan1ma();const file_FileXs=(cov_1b0lfan1ma().s[0]++,react.forwardRef(((_ref,ref)=>{let{size=(cov_1b0lfan1ma().b[0][0]++,24),...props}=_ref;cov_1b0lfan1ma().f[0]++,cov_1b0lfan1ma().s[1]++,props.width=void 0,cov_1b0lfan1ma().s[2]++,props.height=void 0;const testId=(cov_1b0lfan1ma().s[3]++,"-file-xs"),isCustomSize=(cov_1b0lfan1ma().s[4]++,"number"==typeof size);return cov_1b0lfan1ma().s[5]++,isCustomSize?(cov_1b0lfan1ma().b[1][0]++,cov_1b0lfan1ma().s[6]++,props.style?cov_1b0lfan1ma().b[2][1]++:(cov_1b0lfan1ma().b[2][0]++,cov_1b0lfan1ma().s[7]++,props.style={}),cov_1b0lfan1ma().s[8]++,props.style.width=size+"px",cov_1b0lfan1ma().s[9]++,props.style.height=size+"px"):cov_1b0lfan1ma().b[1][1]++,cov_1b0lfan1ma().s[10]++,(0,jsx_runtime.jsx)("svg",{ref,xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24","data-test-id":"icon"+testId,...props,children:(0,jsx_runtime.jsx)("use",{href:"#snack-uikit-"+testId.substring(1)})})})));try{FileXs.displayName="FileXs",FileXs.__docgenInfo={description:"",displayName:"FileXs",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"string | number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons/file/FileXs.tsx#FileXs"]={docgenInfo:FileXs.__docgenInfo,name:"FileXs",path:"packages/icons/src/components/interface-icons/file/FileXs.tsx#FileXs"})}catch(__react_docgen_typescript_loader_error){}function cov_2m5obt13zq(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/icons/src/components/interface-icons/file/index.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"6d3ebe1ed7bd9fa4ad8d5c01d667992ae5e798db"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/icons/src/components/interface-icons/file/index.tsx",statementMap:{0:{start:{line:11,column:16},end:{line:15,column:2}},1:{start:{line:14,column:2},end:{line:14,column:117}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:11,column:27},end:{line:11,column:28}},loc:{start:{line:11,column:96},end:{line:15,column:1}},line:11}},branchMap:{0:{loc:{start:{line:11,column:30},end:{line:11,column:39}},type:"default-arg",locations:[{start:{line:11,column:37},end:{line:11,column:39}}],line:11},1:{loc:{start:{line:14,column:9},end:{line:14,column:116}},type:"cond-expr",locations:[{start:{line:14,column:30},end:{line:14,column:71}},{start:{line:14,column:74},end:{line:14,column:116}}],line:14}},s:{0:0,1:0},f:{0:0},b:{0:[0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6d3ebe1ed7bd9fa4ad8d5c01d667992ae5e798db"});var actualCoverage=coverage[path];return cov_2m5obt13zq=function(){return actualCoverage},actualCoverage}cov_2m5obt13zq();const interface_icons_file=(cov_2m5obt13zq().s[0]++,(0,react.forwardRef)(((_ref,ref)=>{let{size=(cov_2m5obt13zq().b[0][0]++,24),...props}=_ref;return cov_2m5obt13zq().f[0]++,cov_2m5obt13zq().s[1]++,Number(size)>=20?(cov_2m5obt13zq().b[1][0]++,(0,jsx_runtime.jsx)(file_FileS,{ref,size,...props})):(cov_2m5obt13zq().b[1][1]++,(0,jsx_runtime.jsx)(file_FileXs,{ref,size,...props}))})));try{file.displayName="file",file.__docgenInfo={description:"",displayName:"file",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"24"},description:"",name:"size",required:!1,type:{name:"string | number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons/file/index.tsx#file"]={docgenInfo:file.__docgenInfo,name:"file",path:"packages/icons/src/components/interface-icons/file/index.tsx#file"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/drop-zone/src/components/FileUpload/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".hiddenInput--orcBn{display:none}",""]),___CSS_LOADER_EXPORT___.locals={hiddenInput:"hiddenInput--orcBn"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);