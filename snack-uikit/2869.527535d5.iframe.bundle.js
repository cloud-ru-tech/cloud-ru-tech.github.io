"use strict";(self.webpackChunksnack_uikit=self.webpackChunksnack_uikit||[]).push([[2869],{"./packages/tag/src/components/Tag/Tag.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var classnames=__webpack_require__("./packages/tag/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),cross=__webpack_require__("./packages/icons/src/components/interface-icons/cross/index.tsx"),componentPropsProcessors=__webpack_require__("./packages/utils/src/utils/componentPropsProcessors.ts"),constants=__webpack_require__("./packages/tag/src/constants.ts");function cov_1k05divxcl(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tag/src/components/TagBase/constants.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"34012b99ff01a6dc72039d9978cdbf791e9e1f73"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tag/src/components/TagBase/constants.ts",statementMap:{0:{start:{line:3,column:25},end:{line:6,column:1}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"34012b99ff01a6dc72039d9978cdbf791e9e1f73"});var actualCoverage=coverage[path];return cov_1k05divxcl=function(){return actualCoverage},actualCoverage}cov_1k05divxcl();const ICON_SIZE=(cov_1k05divxcl().s[0]++,{[constants.S.Xs]:16,[constants.S.S]:24});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/tag/src/components/TagBase/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.A,options);const TagBase_styles_module=styles_module.A&&styles_module.A.locals?styles_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1i0r92v4jb(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tag/src/components/TagBase/TagBase.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"0286a8a8648fd5c896266a28f6676b867ceea335"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tag/src/components/TagBase/TagBase.tsx",statementMap:{0:{start:{line:27,column:2},end:{line:54,column:4}}},fnMap:{0:{name:"TagBase",decl:{start:{line:18,column:16},end:{line:18,column:23}},loc:{start:{line:26,column:17},end:{line:55,column:1}},line:26}},branchMap:{0:{loc:{start:{line:20,column:2},end:{line:20,column:16}},type:"default-arg",locations:[{start:{line:20,column:9},end:{line:20,column:16}}],line:20},1:{loc:{start:{line:21,column:2},end:{line:21,column:33}},type:"default-arg",locations:[{start:{line:21,column:15},end:{line:21,column:33}}],line:21},2:{loc:{start:{line:38,column:7},end:{line:52,column:7}},type:"binary-expr",locations:[{start:{line:38,column:7},end:{line:38,column:15}},{start:{line:39,column:8},end:{line:51,column:17}}],line:38},3:{loc:{start:{line:46,column:11},end:{line:50,column:11}},type:"cond-expr",locations:[{start:{line:47,column:12},end:{line:47,column:71}},{start:{line:49,column:12},end:{line:49,column:71}}],line:46}},s:{0:0},f:{0:0},b:{0:[0],1:[0],2:[0,0],3:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0286a8a8648fd5c896266a28f6676b867ceea335"});var actualCoverage=coverage[path];return cov_1i0r92v4jb=function(){return actualCoverage},actualCoverage}function TagBase(_ref){let{label,size=(cov_1i0r92v4jb().b[0][0]++,constants.S.Xs),appearance=(cov_1i0r92v4jb().b[1][0]++,constants.x.Neutral),onDelete,className,tabIndex,...rest}=_ref;return cov_1i0r92v4jb().f[0]++,cov_1i0r92v4jb().s[0]++,(0,jsx_runtime.jsxs)("span",{...(0,componentPropsProcessors.z7)(rest),className:classnames_default()(TagBase_styles_module.tag,className),"data-size":size,"data-appearance":appearance,"data-removable":Boolean(onDelete),children:[(0,jsx_runtime.jsx)("span",{title:label,className:TagBase_styles_module.label,children:label}),(cov_1i0r92v4jb().b[2][0]++,onDelete&&(cov_1i0r92v4jb().b[2][1]++,(0,jsx_runtime.jsx)("button",{type:"button",className:TagBase_styles_module.tagButton,onClick:onDelete,"data-test-id":"tag-remove-button",tabIndex,children:size===constants.S.Xs?(cov_1i0r92v4jb().b[3][0]++,(0,jsx_runtime.jsx)(cross.A,{size:ICON_SIZE[size],className:TagBase_styles_module.icon})):(cov_1i0r92v4jb().b[3][1]++,(0,jsx_runtime.jsx)(cross.A,{size:ICON_SIZE[size],className:TagBase_styles_module.icon}))})))]})}cov_1i0r92v4jb();try{TagBase.displayName="TagBase",TagBase.__docgenInfo={description:"",displayName:"TagBase",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},onDelete:{defaultValue:null,description:"Коллбэк на удаление",name:"onDelete",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},label:{defaultValue:null,description:"Текст",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"xs"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"neutral"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"neutral"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"violet"'},{value:'"pink"'}]}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"tabIndex кнопки удаления",name:"tabIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tag/src/components/TagBase/TagBase.tsx#TagBase"]={docgenInfo:TagBase.__docgenInfo,name:"TagBase",path:"packages/tag/src/components/TagBase/TagBase.tsx#TagBase"})}catch(__react_docgen_typescript_loader_error){}var TagLink_styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/tag/src/components/TagLink/styles.module.scss"),styles_module_options={};styles_module_options.styleTagTransform=styleTagTransform_default(),styles_module_options.setAttributes=setAttributesWithoutAttributes_default(),styles_module_options.insert=insertBySelector_default().bind(null,"head"),styles_module_options.domAPI=styleDomAPI_default(),styles_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TagLink_styles_module.A,styles_module_options);const components_TagLink_styles_module=TagLink_styles_module.A&&TagLink_styles_module.A.locals?TagLink_styles_module.A.locals:void 0;function cov_m7bxxvpmu(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tag/src/components/TagLink/TagLink.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"948cf11e22d1e2afd97102838b5523107170c595"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tag/src/components/TagLink/TagLink.tsx",statementMap:{0:{start:{line:27,column:2},end:{line:42,column:4}}},fnMap:{0:{name:"TagLink",decl:{start:{line:16,column:16},end:{line:16,column:23}},loc:{start:{line:26,column:17},end:{line:43,column:1}},line:26}},branchMap:{0:{loc:{start:{line:18,column:2},end:{line:18,column:16}},type:"default-arg",locations:[{start:{line:18,column:9},end:{line:18,column:16}}],line:18},1:{loc:{start:{line:19,column:2},end:{line:19,column:33}},type:"default-arg",locations:[{start:{line:19,column:15},end:{line:19,column:33}}],line:19}},s:{0:0},f:{0:0},b:{0:[0],1:[0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"948cf11e22d1e2afd97102838b5523107170c595"});var actualCoverage=coverage[path];return cov_m7bxxvpmu=function(){return actualCoverage},actualCoverage}function TagLink(_ref){let{label,size=(cov_m7bxxvpmu().b[0][0]++,constants.S.Xs),appearance=(cov_m7bxxvpmu().b[1][0]++,constants.x.Neutral),className,tabIndex,href,onClick,target,...rest}=_ref;return cov_m7bxxvpmu().f[0]++,cov_m7bxxvpmu().s[0]++,(0,jsx_runtime.jsx)("a",{...(0,componentPropsProcessors.z7)(rest),className:classnames_default()(components_TagLink_styles_module.tag,className),"data-size":size,"data-appearance":appearance,tabIndex,href,target,onClick,children:(0,jsx_runtime.jsx)("span",{title:label,className:components_TagLink_styles_module.label,children:label})})}cov_m7bxxvpmu();try{TagLink.displayName="TagLink",TagLink.__docgenInfo={description:"",displayName:"TagLink",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Текст",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"xs"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"neutral"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"neutral"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"violet"'},{value:'"pink"'}]}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"tabIndex кнопки удаления",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void)"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tag/src/components/TagLink/TagLink.tsx#TagLink"]={docgenInfo:TagLink.__docgenInfo,name:"TagLink",path:"packages/tag/src/components/TagLink/TagLink.tsx#TagLink"})}catch(__react_docgen_typescript_loader_error){}function cov_17tqc1ezem(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tag/src/components/Tag/Tag.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tag/src/components/Tag/Tag.tsx",statementMap:{0:{start:{line:7,column:2},end:{line:7,column:53}},1:{start:{line:11,column:2},end:{line:13,column:3}},2:{start:{line:12,column:4},end:{line:12,column:34}},3:{start:{line:15,column:2},end:{line:15,column:32}}},fnMap:{0:{name:"isTagLinkProps",decl:{start:{line:6,column:16},end:{line:6,column:30}},loc:{start:{line:6,column:71},end:{line:8,column:1}},line:6},1:{name:"Tag",decl:{start:{line:10,column:16},end:{line:10,column:19}},loc:{start:{line:10,column:37},end:{line:16,column:1}},line:10}},branchMap:{0:{loc:{start:{line:7,column:9},end:{line:7,column:52}},type:"binary-expr",locations:[{start:{line:7,column:9},end:{line:7,column:24}},{start:{line:7,column:28},end:{line:7,column:52}}],line:7},1:{loc:{start:{line:11,column:2},end:{line:13,column:3}},type:"if",locations:[{start:{line:11,column:2},end:{line:13,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:11}},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4cf1c1b49d29155b2ba7fbe17dbf472b5e4b9de3"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"4cf1c1b49d29155b2ba7fbe17dbf472b5e4b9de3"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_17tqc1ezem=function(){return actualCoverage},actualCoverage}function isTagLinkProps(props){return cov_17tqc1ezem().f[0]++,cov_17tqc1ezem().s[0]++,cov_17tqc1ezem().b[0][0]++,"href"in props&&(cov_17tqc1ezem().b[0][1]++,void 0!==props.href)}function Tag(props){return cov_17tqc1ezem().f[1]++,cov_17tqc1ezem().s[1]++,isTagLinkProps(props)?(cov_17tqc1ezem().b[1][0]++,cov_17tqc1ezem().s[2]++,(0,jsx_runtime.jsx)(TagLink,{...props})):(cov_17tqc1ezem().b[1][1]++,cov_17tqc1ezem().s[3]++,(0,jsx_runtime.jsx)(TagBase,{...props}))}cov_17tqc1ezem();try{isTagLinkProps.displayName="isTagLinkProps",isTagLinkProps.__docgenInfo={description:"",displayName:"isTagLinkProps",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},onDelete:{defaultValue:null,description:"Коллбэк на удаление",name:"onDelete",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},label:{defaultValue:null,description:"Текст",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'}]}},appearance:{defaultValue:null,description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"neutral"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"violet"'},{value:'"pink"'}]}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"tabIndex кнопки удаления",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void)"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tag/src/components/Tag/Tag.tsx#isTagLinkProps"]={docgenInfo:isTagLinkProps.__docgenInfo,name:"isTagLinkProps",path:"packages/tag/src/components/Tag/Tag.tsx#isTagLinkProps"})}catch(__react_docgen_typescript_loader_error){}try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},onDelete:{defaultValue:null,description:"Коллбэк на удаление",name:"onDelete",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},label:{defaultValue:null,description:"Текст",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'}]}},appearance:{defaultValue:null,description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"neutral"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"violet"'},{value:'"pink"'}]}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"tabIndex кнопки удаления",name:"tabIndex",required:!1,type:{name:"number"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void)"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tag/src/components/Tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"packages/tag/src/components/Tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./packages/tag/src/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_edvmxwnrz(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tag/src/constants.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"9dafa2d8c1ce31488d7cbab41415ae10c0f0e5be"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tag/src/constants.ts",statementMap:{0:{start:{line:1,column:26},end:{line:11,column:10}},1:{start:{line:13,column:20},end:{line:16,column:10}}},fnMap:{},branchMap:{},s:{0:0,1:0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9dafa2d8c1ce31488d7cbab41415ae10c0f0e5be"});var actualCoverage=coverage[path];return cov_edvmxwnrz=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{S:()=>SIZE,x:()=>APPEARANCE}),cov_edvmxwnrz();const APPEARANCE=(cov_edvmxwnrz().s[0]++,{Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"}),SIZE=(cov_edvmxwnrz().s[1]++,{Xs:"xs",S:"s"})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/tag/src/components/TagBase/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".tag--A9fz3{display:inline-flex;align-items:center;box-sizing:border-box;max-width:100%}.tag--A9fz3 .tagButton--R_R8z{cursor:pointer;position:relative;box-sizing:border-box;margin:0;padding:0;background:none;border:none}.tag--A9fz3 .tagButton--R_R8z:focus{outline-width:var(--border-state-focus-s-border-width, 2px);outline-style:var(--border-state-focus-s-border-style, solid);outline-color:var(--border-state-focus-s-border-color, );outline-offset:calc(var(--border-state-focus-s-border-width, 2px)*-1)}.tag--A9fz3 .tagButton--R_R8z:active{outline:none}.tag--A9fz3 .icon--LRSMw{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.tag--A9fz3[data-size=xs]{padding-left:var(--space-tag-xs-from-label, 8px);padding-right:var(--space-tag-xs-from-label, 8px);height:var(--size-tag-xs, 24px);border-radius:var(--radius-tag-xs, 4px)}.tag--A9fz3[data-size=xs][data-removable=true]{padding-left:var(--space-tag-xs-from-label, 8px);padding-right:var(--space-tag-xs-from-button, 0px);height:var(--size-tag-xs, 24px);border-radius:var(--radius-tag-xs, 4px);gap:var(--space-tag-xs-gap, 2px)}.tag--A9fz3[data-size=xs] .label--cyLXM{font-family:var(--sans-label-s-font-family, SB Sans Interface);font-weight:var(--sans-label-s-font-weight, Semibold);line-height:var(--sans-label-s-line-height, 14px);font-size:var(--sans-label-s-font-size, 11px);letter-spacing:var(--sans-label-s-letter-spacing, 0px);paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px)}.tag--A9fz3[data-size=xs] .tagButton--R_R8z{border-radius:var(--radius-tag-xs, 4px);height:var(--size-tag-xs, 24px);width:var(--size-tag-xs, 24px)}.tag--A9fz3[data-size=s]{padding-left:var(--space-tag-s-from-label, 16px);padding-right:var(--space-tag-s-from-label, 16px);height:var(--size-tag-s, 32px);border-radius:var(--radius-tag-s, 8px)}.tag--A9fz3[data-size=s][data-removable=true]{padding-left:var(--space-tag-s-from-label, 16px);padding-right:var(--space-tag-s-from-button, 0px);height:var(--size-tag-s, 32px);border-radius:var(--radius-tag-s, 8px);gap:var(--space-tag-s-gap, 2px)}.tag--A9fz3[data-size=s] .label--cyLXM{font-family:var(--sans-label-m-font-family, SB Sans Interface);font-weight:var(--sans-label-m-font-weight, Semibold);line-height:var(--sans-label-m-line-height, 16px);font-size:var(--sans-label-m-font-size, 12px);letter-spacing:var(--sans-label-m-letter-spacing, 0px);paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px)}.tag--A9fz3[data-size=s] .tagButton--R_R8z{border-radius:var(--radius-tag-s, 8px);height:var(--size-tag-s, 32px);width:var(--size-tag-s, 32px)}.tag--A9fz3[data-appearance=neutral]{background-color:var(--sys-neutral-decor-default, #dde0ea)}.tag--A9fz3[data-appearance=neutral] .label--cyLXM{overflow:hidden;color:var(--sys-neutral-text-support, #6d707f);text-overflow:ellipsis;white-space:nowrap}.tag--A9fz3[data-appearance=neutral] .tagButton--R_R8z{color:var(--sys-neutral-text-light, #8b8e9b)}.tag--A9fz3[data-appearance=neutral] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=neutral] .tagButton--R_R8z:hover,.tag--A9fz3[data-appearance=neutral] .tagButton--R_R8z:active{color:var(--sys-neutral-text-main, #41424e)}.tag--A9fz3[data-appearance=neutral] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=neutral] .tagButton--R_R8z:hover{background-color:var(--sys-neutral-decor-hovered, #cfd2dc)}.tag--A9fz3[data-appearance=neutral] .tagButton--R_R8z:active{background-color:var(--sys-neutral-decor-activated, #bec2cf)}.tag--A9fz3[data-appearance=primary]{background-color:var(--sys-primary-decor-default, #ebdefd)}.tag--A9fz3[data-appearance=primary] .label--cyLXM{overflow:hidden;color:var(--sys-primary-text-support, #5b4796);text-overflow:ellipsis;white-space:nowrap}.tag--A9fz3[data-appearance=primary] .tagButton--R_R8z{color:var(--sys-primary-text-light, #997adc)}.tag--A9fz3[data-appearance=primary] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=primary] .tagButton--R_R8z:hover,.tag--A9fz3[data-appearance=primary] .tagButton--R_R8z:active{color:var(--sys-primary-text-main, #382a62)}.tag--A9fz3[data-appearance=primary] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=primary] .tagButton--R_R8z:hover{background-color:var(--sys-primary-decor-hovered, #decdfb)}.tag--A9fz3[data-appearance=primary] .tagButton--R_R8z:active{background-color:var(--sys-primary-decor-activated, #c5b2f1)}.tag--A9fz3[data-appearance=red]{background-color:var(--sys-red-decor-default, #fdd6cd)}.tag--A9fz3[data-appearance=red] .label--cyLXM{overflow:hidden;color:var(--sys-red-text-support, #ae514c);text-overflow:ellipsis;white-space:nowrap}.tag--A9fz3[data-appearance=red] .tagButton--R_R8z{color:var(--sys-red-text-light, #e7756a)}.tag--A9fz3[data-appearance=red] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=red] .tagButton--R_R8z:hover,.tag--A9fz3[data-appearance=red] .tagButton--R_R8z:active{color:var(--sys-red-text-main, #7a2d2d)}.tag--A9fz3[data-appearance=red] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=red] .tagButton--R_R8z:hover{background-color:var(--sys-red-decor-hovered, #fac1b3)}.tag--A9fz3[data-appearance=red] .tagButton--R_R8z:active{background-color:var(--sys-red-decor-activated, #fbab99)}.tag--A9fz3[data-appearance=orange]{background-color:var(--sys-orange-decor-default, #fed8b8)}.tag--A9fz3[data-appearance=orange] .label--cyLXM{overflow:hidden;color:var(--sys-orange-text-support, #bb733e);text-overflow:ellipsis;white-space:nowrap}.tag--A9fz3[data-appearance=orange] .tagButton--R_R8z{color:var(--sys-orange-text-light, #e78940)}.tag--A9fz3[data-appearance=orange] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=orange] .tagButton--R_R8z:hover,.tag--A9fz3[data-appearance=orange] .tagButton--R_R8z:active{color:var(--sys-orange-text-main, #884c23)}.tag--A9fz3[data-appearance=orange] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=orange] .tagButton--R_R8z:hover{background-color:var(--sys-orange-decor-hovered, #f8c699)}.tag--A9fz3[data-appearance=orange] .tagButton--R_R8z:active{background-color:var(--sys-orange-decor-activated, #f5b27b)}.tag--A9fz3[data-appearance=yellow]{background-color:var(--sys-yellow-decor-default, #f0dfb1)}.tag--A9fz3[data-appearance=yellow] .label--cyLXM{overflow:hidden;color:var(--sys-yellow-text-support, #b78c32);text-overflow:ellipsis;white-space:nowrap}.tag--A9fz3[data-appearance=yellow] .tagButton--R_R8z{color:var(--sys-yellow-text-light, #d3a736)}.tag--A9fz3[data-appearance=yellow] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=yellow] .tagButton--R_R8z:hover,.tag--A9fz3[data-appearance=yellow] .tagButton--R_R8z:active{color:var(--sys-yellow-text-main, #815f19)}.tag--A9fz3[data-appearance=yellow] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=yellow] .tagButton--R_R8z:hover{background-color:var(--sys-yellow-decor-hovered, #ead49a)}.tag--A9fz3[data-appearance=yellow] .tagButton--R_R8z:active{background-color:var(--sys-yellow-decor-activated, #e6c878)}.tag--A9fz3[data-appearance=green]{background-color:var(--sys-green-decor-default, #d2ead0)}.tag--A9fz3[data-appearance=green] .label--cyLXM{overflow:hidden;color:var(--sys-green-text-support, #55915a);text-overflow:ellipsis;white-space:nowrap}.tag--A9fz3[data-appearance=green] .tagButton--R_R8z{color:var(--sys-green-text-light, #69b56f)}.tag--A9fz3[data-appearance=green] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=green] .tagButton--R_R8z:hover,.tag--A9fz3[data-appearance=green] .tagButton--R_R8z:active{color:var(--sys-green-text-main, #3d6035)}.tag--A9fz3[data-appearance=green] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=green] .tagButton--R_R8z:hover{background-color:var(--sys-green-decor-hovered, #c0e1ba)}.tag--A9fz3[data-appearance=green] .tagButton--R_R8z:active{background-color:var(--sys-green-decor-activated, #a8d1a2)}.tag--A9fz3[data-appearance=blue]{background-color:var(--sys-blue-decor-default, #d6e2f4)}.tag--A9fz3[data-appearance=blue] .label--cyLXM{overflow:hidden;color:var(--sys-blue-text-support, #4877b0);text-overflow:ellipsis;white-space:nowrap}.tag--A9fz3[data-appearance=blue] .tagButton--R_R8z{color:var(--sys-blue-text-light, #749eda)}.tag--A9fz3[data-appearance=blue] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=blue] .tagButton--R_R8z:hover,.tag--A9fz3[data-appearance=blue] .tagButton--R_R8z:active{color:var(--sys-blue-text-main, #2b537e)}.tag--A9fz3[data-appearance=blue] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=blue] .tagButton--R_R8z:hover{background-color:var(--sys-blue-decor-hovered, #c5d9f6)}.tag--A9fz3[data-appearance=blue] .tagButton--R_R8z:active{background-color:var(--sys-blue-decor-activated, #aac4ea)}.tag--A9fz3[data-appearance=violet]{background-color:var(--sys-violet-decor-default, #e6dcf3)}.tag--A9fz3[data-appearance=violet] .label--cyLXM{overflow:hidden;color:var(--sys-violet-text-support, #8c639b);text-overflow:ellipsis;white-space:nowrap}.tag--A9fz3[data-appearance=violet] .tagButton--R_R8z{color:var(--sys-violet-text-light, #b68bd5)}.tag--A9fz3[data-appearance=violet] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=violet] .tagButton--R_R8z:hover,.tag--A9fz3[data-appearance=violet] .tagButton--R_R8z:active{color:var(--sys-violet-text-main, #59446a)}.tag--A9fz3[data-appearance=violet] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=violet] .tagButton--R_R8z:hover{background-color:var(--sys-violet-decor-hovered, #e1d0f7)}.tag--A9fz3[data-appearance=violet] .tagButton--R_R8z:active{background-color:var(--sys-violet-decor-activated, #ceb7e7)}.tag--A9fz3[data-appearance=pink]{background-color:var(--sys-pink-decor-default, #f5d9e1)}.tag--A9fz3[data-appearance=pink] .label--cyLXM{overflow:hidden;color:var(--sys-pink-text-support, #ae5e80);text-overflow:ellipsis;white-space:nowrap}.tag--A9fz3[data-appearance=pink] .tagButton--R_R8z{color:var(--sys-pink-text-light, #db85a2)}.tag--A9fz3[data-appearance=pink] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=pink] .tagButton--R_R8z:hover,.tag--A9fz3[data-appearance=pink] .tagButton--R_R8z:active{color:var(--sys-pink-text-main, #754158)}.tag--A9fz3[data-appearance=pink] .tagButton--R_R8z:focus,.tag--A9fz3[data-appearance=pink] .tagButton--R_R8z:hover{background-color:var(--sys-pink-decor-hovered, #f5c9d6)}.tag--A9fz3[data-appearance=pink] .tagButton--R_R8z:active{background-color:var(--sys-pink-decor-activated, #e8b1c1)}",""]),___CSS_LOADER_EXPORT___.locals={tag:"tag--A9fz3",tagButton:"tagButton--R_R8z",icon:"icon--LRSMw",label:"label--cyLXM"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/tag/src/components/TagLink/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".tag--vcpu9{display:inline-flex;align-items:center;box-sizing:border-box;max-width:100%;text-decoration:none}.tag--vcpu9:focus-visible{outline-width:var(--border-state-focus-s-border-width, 2px);outline-style:var(--border-state-focus-s-border-style, solid);outline-color:var(--border-state-focus-s-border-color, );outline-color:var(--sys-available-complementary, #1c1c24)}.tag--vcpu9:active{outline:none}.tag--vcpu9[data-size=xs]{padding-left:var(--space-tag-xs-from-label, 8px);padding-right:var(--space-tag-xs-from-label, 8px);height:var(--size-tag-xs, 24px);border-radius:var(--radius-tag-xs, 4px)}.tag--vcpu9[data-size=xs] .label--GAecA{font-family:var(--sans-label-s-font-family, SB Sans Interface);font-weight:var(--sans-label-s-font-weight, Semibold);line-height:var(--sans-label-s-line-height, 14px);font-size:var(--sans-label-s-font-size, 11px);letter-spacing:var(--sans-label-s-letter-spacing, 0px);paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px)}.tag--vcpu9[data-size=s]{padding-left:var(--space-tag-s-from-label, 16px);padding-right:var(--space-tag-s-from-label, 16px);height:var(--size-tag-s, 32px);border-radius:var(--radius-tag-s, 8px)}.tag--vcpu9[data-size=s] .label--GAecA{font-family:var(--sans-label-m-font-family, SB Sans Interface);font-weight:var(--sans-label-m-font-weight, Semibold);line-height:var(--sans-label-m-line-height, 16px);font-size:var(--sans-label-m-font-size, 12px);letter-spacing:var(--sans-label-m-letter-spacing, 0px);paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px)}.tag--vcpu9[data-appearance=neutral]{background-color:var(--sys-neutral-decor-default, #dde0ea)}.tag--vcpu9[data-appearance=neutral] .label--GAecA{overflow:hidden;color:var(--sys-neutral-text-support, #6d707f);text-overflow:ellipsis;white-space:nowrap}.tag--vcpu9[data-appearance=neutral]:focus-visible,.tag--vcpu9[data-appearance=neutral]:hover{background-color:var(--sys-neutral-decor-hovered, #cfd2dc)}.tag--vcpu9[data-appearance=neutral]:active{background-color:var(--sys-neutral-decor-activated, #bec2cf)}.tag--vcpu9[data-appearance=primary]{background-color:var(--sys-primary-decor-default, #ebdefd)}.tag--vcpu9[data-appearance=primary] .label--GAecA{overflow:hidden;color:var(--sys-primary-text-support, #5b4796);text-overflow:ellipsis;white-space:nowrap}.tag--vcpu9[data-appearance=primary]:focus-visible,.tag--vcpu9[data-appearance=primary]:hover{background-color:var(--sys-primary-decor-hovered, #decdfb)}.tag--vcpu9[data-appearance=primary]:active{background-color:var(--sys-primary-decor-activated, #c5b2f1)}.tag--vcpu9[data-appearance=red]{background-color:var(--sys-red-decor-default, #fdd6cd)}.tag--vcpu9[data-appearance=red] .label--GAecA{overflow:hidden;color:var(--sys-red-text-support, #ae514c);text-overflow:ellipsis;white-space:nowrap}.tag--vcpu9[data-appearance=red]:focus-visible,.tag--vcpu9[data-appearance=red]:hover{background-color:var(--sys-red-decor-hovered, #fac1b3)}.tag--vcpu9[data-appearance=red]:active{background-color:var(--sys-red-decor-activated, #fbab99)}.tag--vcpu9[data-appearance=orange]{background-color:var(--sys-orange-decor-default, #fed8b8)}.tag--vcpu9[data-appearance=orange] .label--GAecA{overflow:hidden;color:var(--sys-orange-text-support, #bb733e);text-overflow:ellipsis;white-space:nowrap}.tag--vcpu9[data-appearance=orange]:focus-visible,.tag--vcpu9[data-appearance=orange]:hover{background-color:var(--sys-orange-decor-hovered, #f8c699)}.tag--vcpu9[data-appearance=orange]:active{background-color:var(--sys-orange-decor-activated, #f5b27b)}.tag--vcpu9[data-appearance=yellow]{background-color:var(--sys-yellow-decor-default, #f0dfb1)}.tag--vcpu9[data-appearance=yellow] .label--GAecA{overflow:hidden;color:var(--sys-yellow-text-support, #b78c32);text-overflow:ellipsis;white-space:nowrap}.tag--vcpu9[data-appearance=yellow]:focus-visible,.tag--vcpu9[data-appearance=yellow]:hover{background-color:var(--sys-yellow-decor-hovered, #ead49a)}.tag--vcpu9[data-appearance=yellow]:active{background-color:var(--sys-yellow-decor-activated, #e6c878)}.tag--vcpu9[data-appearance=green]{background-color:var(--sys-green-decor-default, #d2ead0)}.tag--vcpu9[data-appearance=green] .label--GAecA{overflow:hidden;color:var(--sys-green-text-support, #55915a);text-overflow:ellipsis;white-space:nowrap}.tag--vcpu9[data-appearance=green]:focus-visible,.tag--vcpu9[data-appearance=green]:hover{background-color:var(--sys-green-decor-hovered, #c0e1ba)}.tag--vcpu9[data-appearance=green]:active{background-color:var(--sys-green-decor-activated, #a8d1a2)}.tag--vcpu9[data-appearance=blue]{background-color:var(--sys-blue-decor-default, #d6e2f4)}.tag--vcpu9[data-appearance=blue] .label--GAecA{overflow:hidden;color:var(--sys-blue-text-support, #4877b0);text-overflow:ellipsis;white-space:nowrap}.tag--vcpu9[data-appearance=blue]:focus-visible,.tag--vcpu9[data-appearance=blue]:hover{background-color:var(--sys-blue-decor-hovered, #c5d9f6)}.tag--vcpu9[data-appearance=blue]:active{background-color:var(--sys-blue-decor-activated, #aac4ea)}.tag--vcpu9[data-appearance=violet]{background-color:var(--sys-violet-decor-default, #e6dcf3)}.tag--vcpu9[data-appearance=violet] .label--GAecA{overflow:hidden;color:var(--sys-violet-text-support, #8c639b);text-overflow:ellipsis;white-space:nowrap}.tag--vcpu9[data-appearance=violet]:focus-visible,.tag--vcpu9[data-appearance=violet]:hover{background-color:var(--sys-violet-decor-hovered, #e1d0f7)}.tag--vcpu9[data-appearance=violet]:active{background-color:var(--sys-violet-decor-activated, #ceb7e7)}.tag--vcpu9[data-appearance=pink]{background-color:var(--sys-pink-decor-default, #f5d9e1)}.tag--vcpu9[data-appearance=pink] .label--GAecA{overflow:hidden;color:var(--sys-pink-text-support, #ae5e80);text-overflow:ellipsis;white-space:nowrap}.tag--vcpu9[data-appearance=pink]:focus-visible,.tag--vcpu9[data-appearance=pink]:hover{background-color:var(--sys-pink-decor-hovered, #f5c9d6)}.tag--vcpu9[data-appearance=pink]:active{background-color:var(--sys-pink-decor-activated, #e8b1c1)}",""]),___CSS_LOADER_EXPORT___.locals={tag:"tag--vcpu9",label:"label--GAecA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);