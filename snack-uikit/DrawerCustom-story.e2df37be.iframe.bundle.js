"use strict";(self.webpackChunksnack_uikit=self.webpackChunksnack_uikit||[]).push([[7031],{"./packages/drawer/stories/DrawerCustom.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,drawerCustom:()=>drawerCustom});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_snack_uikit_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/button/src/components/ButtonFilled/ButtonFilled.tsx"),_CHANGELOG_md__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/drawer/CHANGELOG.md"),_package_json__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/drawer/package.json"),_README_md__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/drawer/README.md"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/drawer/src/components/DrawerCustom/DrawerCustom.tsx"),_src_constants__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/drawer/src/constants.ts"),_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/drawer/stories/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1vlor4qrf3(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/drawer/stories/DrawerCustom.story.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"836c94fff3629d219195070794ea83933d35648f"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/drawer/stories/DrawerCustom.story.tsx",statementMap:{0:{start:{line:14,column:19},end:{line:17,column:1}},1:{start:{line:20,column:50},end:{line:52,column:1}},2:{start:{line:30,column:26},end:{line:30,column:40}},3:{start:{line:31,column:23},end:{line:31,column:49}},4:{start:{line:31,column:29},end:{line:31,column:49}},5:{start:{line:31,column:44},end:{line:31,column:48}},6:{start:{line:33,column:2},end:{line:51,column:4}},7:{start:{line:54,column:62},end:{line:100,column:1}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:20,column:50},end:{line:20,column:51}},loc:{start:{line:29,column:30},end:{line:52,column:1}},line:29},1:{name:"(anonymous_1)",decl:{start:{line:31,column:23},end:{line:31,column:24}},loc:{start:{line:31,column:29},end:{line:31,column:49}},line:31},2:{name:"(anonymous_2)",decl:{start:{line:31,column:37},end:{line:31,column:38}},loc:{start:{line:31,column:44},end:{line:31,column:48}},line:31}},branchMap:{0:{loc:{start:{line:37,column:36},end:{line:37,column:64}},type:"binary-expr",locations:[{start:{line:37,column:36},end:{line:37,column:46}},{start:{line:37,column:50},end:{line:37,column:64}}],line:37}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0,2:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"836c94fff3629d219195070794ea83933d35648f"});var actualCoverage=coverage[path];return cov_1vlor4qrf3=function(){return actualCoverage},actualCoverage}cov_1vlor4qrf3();const __WEBPACK_DEFAULT_EXPORT__=(cov_1vlor4qrf3().s[0]++,{title:"Components/Drawer",component:_src__WEBPACK_IMPORTED_MODULE_2__.p});cov_1vlor4qrf3().s[1]++;const drawerCustom=(cov_1vlor4qrf3().s[7]++,{render:({title,titleTooltip,subtitle,image,content,sizePredefined,sizeCustom,...args})=>{cov_1vlor4qrf3().f[0]++;const[open,setOpen]=(cov_1vlor4qrf3().s[2]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0));cov_1vlor4qrf3().s[3]++;const toggleDrawer=()=>(cov_1vlor4qrf3().f[1]++,cov_1vlor4qrf3().s[4]++,setOpen((val=>(cov_1vlor4qrf3().f[2]++,cov_1vlor4qrf3().s[5]++,!val))));return cov_1vlor4qrf3().s[6]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_snack_uikit_button__WEBPACK_IMPORTED_MODULE_3__.v,{label:"Toggle drawer",onClick:toggleDrawer}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_2__.p,{...args,size:(cov_1vlor4qrf3().b[0][0]++,sizeCustom||(cov_1vlor4qrf3().b[0][1]++,sizePredefined)),open,onClose:toggleDrawer,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.p.Header,{title,titleTooltip,subtitle,image}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.p.Body,{content}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.p.Footer,{actions:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_snack_uikit_button__WEBPACK_IMPORTED_MODULE_3__.v,{label:"custom button",onClick:toggleDrawer})})})]})]})},args:{..._constants__WEBPACK_IMPORTED_MODULE_4__.SQ,sizePredefined:_src_constants__WEBPACK_IMPORTED_MODULE_5__.NO.S,sizeCustom:void 0},argTypes:{..._constants__WEBPACK_IMPORTED_MODULE_4__.uC,sizePredefined:{name:"size predefined",control:{type:"radio"},options:Object.values(_src_constants__WEBPACK_IMPORTED_MODULE_5__.NO),defaultValue:_src_constants__WEBPACK_IMPORTED_MODULE_5__.NO.S,if:{arg:"sizeCustom",truthy:!1}},sizeCustom:{name:"size custom (string | number)",defaultValue:void 0,control:{type:"text"}}},parameters:{controls:{exclude:["size","nestedDrawer"]},readme:{sidebar:[`Latest version: ${_package_json__WEBPACK_IMPORTED_MODULE_6__.i8}`,_README_md__WEBPACK_IMPORTED_MODULE_7__,_CHANGELOG_md__WEBPACK_IMPORTED_MODULE_8__]},packageName:_package_json__WEBPACK_IMPORTED_MODULE_6__.u2,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A208969&mode=drawer"}}})},"./packages/tooltip/src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var PopoverPrivate=__webpack_require__("./packages/popover-private/src/components/PopoverPrivate/PopoverPrivate.tsx"),constants=__webpack_require__("./packages/popover-private/src/constants.ts");function cov_2b6ezxn42f(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tooltip/src/components/Tooltip/constants.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"e5d502cb44e81b4224e66c3959779e0c51192417"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tooltip/src/components/Tooltip/constants.ts",statementMap:{0:{start:{line:3,column:43},end:{line:3,column:109}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e5d502cb44e81b4224e66c3959779e0c51192417"});var actualCoverage=coverage[path];return cov_2b6ezxn42f=function(){return actualCoverage},actualCoverage}cov_2b6ezxn42f();const DEFAULT_FALLBACK_PLACEMENTS=(cov_2b6ezxn42f().s[0]++,[constants.r4.Top,constants.r4.Right,constants.r4.Bottom,constants.r4.Left]);var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/tooltip/src/components/Tooltip/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const Tooltip_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_20lavfobmg(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tooltip/src/components/Tooltip/Tooltip.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/tooltip/src/components/Tooltip/Tooltip.tsx",statementMap:{0:{start:{line:38,column:2},end:{line:40,column:3}},1:{start:{line:39,column:4},end:{line:39,column:16}},2:{start:{line:42,column:2},end:{line:59,column:4}}},fnMap:{0:{name:"Tooltip",decl:{start:{line:30,column:16},end:{line:30,column:23}},loc:{start:{line:37,column:17},end:{line:60,column:1}},line:37}},branchMap:{0:{loc:{start:{line:32,column:2},end:{line:32,column:34}},type:"default-arg",locations:[{start:{line:32,column:12},end:{line:32,column:34}}],line:32},1:{loc:{start:{line:33,column:2},end:{line:33,column:19}},type:"default-arg",locations:[{start:{line:33,column:14},end:{line:33,column:19}}],line:33},2:{loc:{start:{line:35,column:2},end:{line:35,column:25}},type:"default-arg",locations:[{start:{line:35,column:20},end:{line:35,column:25}}],line:35},3:{loc:{start:{line:38,column:2},end:{line:40,column:3}},type:"if",locations:[{start:{line:38,column:2},end:{line:40,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:38}},s:{0:0,1:0,2:0},f:{0:0},b:{0:[0],1:[0],2:[0],3:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"91a456d5f40f6a279d91a7a291371000475472e5"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"91a456d5f40f6a279d91a7a291371000475472e5"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_20lavfobmg=function(){return actualCoverage},actualCoverage}function Tooltip(_ref){let{tip,trigger=(cov_20lavfobmg().b[0][0]++,"hoverAndFocusVisible"),placement=(cov_20lavfobmg().b[1][0]++,"top"),children,disableMaxWidth=(cov_20lavfobmg().b[2][0]++,!1),...otherProps}=_ref;return cov_20lavfobmg().f[0]++,cov_20lavfobmg().s[0]++,children?(cov_20lavfobmg().b[3][1]++,cov_20lavfobmg().s[2]++,(0,jsx_runtime.jsx)(PopoverPrivate.l,{placement,popoverContent:(0,jsx_runtime.jsx)("div",{className:Tooltip_styles_module.tooltipContainer,"data-disable-max-width":disableMaxWidth,children:tip}),trigger,arrowContainerClassName:Tooltip_styles_module.tooltipArrowContainer,arrowElementClassName:Tooltip_styles_module.tooltipArrowElement,hasArrow:!0,fallbackPlacements:DEFAULT_FALLBACK_PLACEMENTS,...otherProps,children})):(cov_20lavfobmg().b[3][0]++,cov_20lavfobmg().s[1]++,null)}cov_20lavfobmg();try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},tip:{defaultValue:null,description:"Содержимое тултипа",name:"tip",required:!0,type:{name:"ReactNode"}},disableMaxWidth:{defaultValue:{value:"false"},description:"Отключение ограничения ширины тултипа",name:"disableMaxWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"Управляет состоянием показан/не показан.",name:"open",required:!1,type:{name:"boolean"}},triggerClassName:{defaultValue:null,description:"CSS-класс триггера",name:"triggerClassName",required:!1,type:{name:"string"}},onOpenChange:{defaultValue:null,description:"Колбек отображения компонента. Срабатывает при изменении состояния open.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},hoverDelayOpen:{defaultValue:null,description:"Задержка открытия по ховеру",name:"hoverDelayOpen",required:!1,type:{name:"number"}},hoverDelayClose:{defaultValue:null,description:"Задержка закрытия по ховеру",name:"hoverDelayClose",required:!1,type:{name:"number"}},triggerRef:{defaultValue:null,description:"Ref ссылка на триггер",name:"triggerRef",required:!1,type:{name:"ForwardedRef<HTMLElement | ReferenceType | null>"}},disableSpanWrapper:{defaultValue:null,description:"Отключает для `isValidElement` внешнюю обертку триггера\n<br>\nПригодится для элементов с `position: absolute`",name:"disableSpanWrapper",required:!1,type:{name:"boolean"}},fallbackPlacements:{defaultValue:null,description:"Цепочка расположений которая будет применяться к поповеру от первого к последнему если при текущем он не влезает.",name:"fallbackPlacements",required:!1,type:{name:"Placement[]"}},children:{defaultValue:null,description:"Триггер поповера (подробнее читайте ниже)",name:"children",required:!1,type:{name:"ReactNode | ChildrenFunction"}},trigger:{defaultValue:{value:"hoverAndFocusVisible"},description:"Условие отображения поповера:\n<br> - `click` - открывать по клику\n<br> - `hover` - открывать по ховеру\n<br> - `focusVisible` - открывать по focus-visible\n<br> - `focus` - открывать по фокусу\n<br> - `hoverAndFocusVisible` - открывать по ховеру и focus-visible\n<br> - `hoverAndFocus` - открывать по ховеру и фокусу\n<br> - `clickAndFocusVisible` - открывать по клику и focus-visible",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'},{value:'"focusVisible"'},{value:'"focus"'},{value:'"hoverAndFocusVisible"'},{value:'"hoverAndFocus"'},{value:'"clickAndFocusVisible"'}]}},placement:{defaultValue:{value:"top"},description:"Положение поповера относительно своего триггера (children).",name:"placement",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/tooltip/src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"packages/tooltip/src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/tooltip/src/components/Tooltip/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".tooltipContainer--mpiW1{padding:var(--space-tooltip-padding-single, 16px);border-radius:var(--radius-tooltip-container, 24px);min-width:var(--size-tooltip-container-min-width, 60px);max-width:var(--size-tooltip-container-max-width, 416px);font-family:var(--sans-body-s-font-family, SB Sans Interface);font-weight:var(--sans-body-s-font-weight, Regular);line-height:var(--sans-body-s-line-height, 16px);font-size:var(--sans-body-s-font-size, 12px);letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);overflow:hidden;box-sizing:border-box;color:var(--sys-invert-neutral-text-main, #e6e8ef);word-wrap:break-word;background-color:var(--sys-invert-neutral-background, #30303c)}.tooltipContainer--mpiW1[data-disable-max-width=true]{max-width:calc(100vw - var(--dimension-2m, 16px))}.tooltipArrowContainer--LFgpb{padding-left:var(--space-popover-popover-pointer-offset, 4px);padding-top:var(--space-tooltip-tooltip-pointer-padding, 24px);padding-bottom:var(--space-tooltip-tooltip-pointer-padding, 24px);position:absolute;display:flex;padding-top:0;padding-bottom:0;color:var(--sys-invert-neutral-background, #30303c)}.tooltipArrowElement--eEemS{height:var(--size-tooltip-tooltip-pointer-arrow-height, 12px);width:var(--size-tooltip-tooltip-pointer-arrow-width, 6px);fill:currentColor}",""]),___CSS_LOADER_EXPORT___.locals={tooltipContainer:"tooltipContainer--mpiW1",tooltipArrowContainer:"tooltipArrowContainer--LFgpb",tooltipArrowElement:"tooltipArrowElement--eEemS"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);