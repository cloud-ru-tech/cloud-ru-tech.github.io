"use strict";(self.webpackChunksnack_uikit=self.webpackChunksnack_uikit||[]).push([[5466],{"./packages/toggles/src/components/Switch/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Switch});var cross=__webpack_require__("./packages/icons/src/components/interface-icons/cross/index.tsx"),check=__webpack_require__("./packages/icons/src/components/interface-icons/check/index.tsx"),constants=__webpack_require__("./packages/toggles/src/constants.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/toggles/src/helperComponents/Spinner/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const Spinner_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1k0et3fp3n(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/toggles/src/helperComponents/Spinner/Spinner.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"8d717f095586e1443df5ec66b4cdd361dde335ef"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/toggles/src/helperComponents/Spinner/Spinner.tsx",statementMap:{0:{start:{line:4,column:2},end:{line:8,column:4}}},fnMap:{0:{name:"Spinner",decl:{start:{line:3,column:16},end:{line:3,column:23}},loc:{start:{line:3,column:26},end:{line:9,column:1}},line:3}},branchMap:{},s:{0:0},f:{0:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"8d717f095586e1443df5ec66b4cdd361dde335ef"});var actualCoverage=coverage[path];return cov_1k0et3fp3n=function(){return actualCoverage},actualCoverage}function Spinner(){return cov_1k0et3fp3n().f[0]++,cov_1k0et3fp3n().s[0]++,(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:Spinner_styles_module.spinner,children:(0,jsx_runtime.jsx)("path",{d:"M5 8C5 6.34315 6.34315 5 8 5",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round"})})}cov_1k0et3fp3n();var utils=__webpack_require__("./packages/toggles/src/utils.ts"),TogglePrivate=__webpack_require__("./packages/toggles/src/components/TogglePrivate/TogglePrivate.tsx"),Switch_styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/toggles/src/components/Switch/styles.module.scss"),styles_module_options={};styles_module_options.styleTagTransform=styleTagTransform_default(),styles_module_options.setAttributes=setAttributesWithoutAttributes_default(),styles_module_options.insert=insertBySelector_default().bind(null,"head"),styles_module_options.domAPI=styleDomAPI_default(),styles_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Switch_styles_module.Z,styles_module_options);const components_Switch_styles_module=Switch_styles_module.Z&&Switch_styles_module.Z.locals?Switch_styles_module.Z.locals:void 0;function cov_1iabtiv274(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/toggles/src/components/Switch/Switch.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"cf41268fc884cdfc1781022694d1cf66f48314f5"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/toggles/src/components/Switch/Switch.tsx",statementMap:{0:{start:{line:24,column:2},end:{line:52,column:4}},1:{start:{line:31,column:21},end:{line:31,column:58}},2:{start:{line:32,column:8},end:{line:49,column:10}}},fnMap:{0:{name:"Switch",decl:{start:{line:16,column:16},end:{line:16,column:22}},loc:{start:{line:23,column:16},end:{line:53,column:1}},line:23},1:{name:"Switch",decl:{start:{line:30,column:23},end:{line:30,column:29}},loc:{start:{line:30,column:43},end:{line:50,column:7}},line:30}},branchMap:{0:{loc:{start:{line:21,column:2},end:{line:21,column:15}},type:"default-arg",locations:[{start:{line:21,column:9},end:{line:21,column:15}}],line:21},1:{loc:{start:{line:37,column:15},end:{line:46,column:15}},type:"binary-expr",locations:[{start:{line:37,column:16},end:{line:37,column:24}},{start:{line:37,column:28},end:{line:37,column:35}},{start:{line:38,column:16},end:{line:45,column:19}}],line:37},2:{loc:{start:{line:40,column:21},end:{line:40,column:67}},type:"cond-expr",locations:[{start:{line:40,column:31},end:{line:40,column:42}},{start:{line:40,column:45},end:{line:40,column:67}}],line:40},3:{loc:{start:{line:43,column:21},end:{line:43,column:67}},type:"cond-expr",locations:[{start:{line:43,column:31},end:{line:43,column:42}},{start:{line:43,column:45},end:{line:43,column:67}}],line:43}},s:{0:0,1:0,2:0},f:{0:0,1:0},b:{0:[0],1:[0,0,0],2:[0,0],3:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"cf41268fc884cdfc1781022694d1cf66f48314f5"});var actualCoverage=coverage[path];return cov_1iabtiv274=function(){return actualCoverage},actualCoverage}function Switch(_ref){let{inputRef,"data-test-id":dataTestId,showIcon,loading,size=(cov_1iabtiv274().b[0][0]++,constants.NO.M),...restProps}=_ref;return cov_1iabtiv274().f[0]++,cov_1iabtiv274().s[0]++,(0,jsx_runtime.jsx)(TogglePrivate.e,{...restProps,size,"data-test-id":dataTestId,ref:inputRef,render:function Switch(visualState){cov_1iabtiv274().f[1]++;const data=(cov_1iabtiv274().s[1]++,(0,utils.o)(visualState));return cov_1iabtiv274().s[2]++,(0,jsx_runtime.jsxs)("div",{className:components_Switch_styles_module.container,...data,children:[(0,jsx_runtime.jsx)("div",{className:components_Switch_styles_module.box,...data}),(0,jsx_runtime.jsxs)("div",{className:components_Switch_styles_module.containerFlag,...data,children:[(0,jsx_runtime.jsx)("div",{className:components_Switch_styles_module.flag,...data}),(cov_1iabtiv274().b[1][0]++,(showIcon||(cov_1iabtiv274().b[1][1]++,loading))&&(cov_1iabtiv274().b[1][2]++,(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:components_Switch_styles_module.flag_icon_off,...data,children:loading?(cov_1iabtiv274().b[2][0]++,(0,jsx_runtime.jsx)(Spinner,{})):(cov_1iabtiv274().b[2][1]++,(0,jsx_runtime.jsx)(cross.Z,{size:16}))}),(0,jsx_runtime.jsx)("div",{className:components_Switch_styles_module.flag_icon_on,...data,children:loading?(cov_1iabtiv274().b[3][0]++,(0,jsx_runtime.jsx)(Spinner,{})):(cov_1iabtiv274().b[3][1]++,(0,jsx_runtime.jsx)(check.Z,{size:16}))})]})))]})]})}})}cov_1iabtiv274();try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"HTML-аттрибут id",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"HTML-аттрибут name",name:"name",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Колбек клика",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},size:{defaultValue:{value:"m"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},disabled:{defaultValue:null,description:"HTML-аттрибут disabled",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"HTML-аттрибут checked",name:"checked",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"HTML-аттрибут tab-index",name:"tabIndex",required:!1,type:{name:"number"}},onFocus:{defaultValue:null,description:"Колбек приобретения фокуса",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"Колбек потери фокуса",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onChange:{defaultValue:null,description:"Колбек смены значения",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},autofocus:{defaultValue:null,description:"HTML-аттрибут autofocus",name:"autofocus",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"HTML-аттрибут value",name:"value",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:null,description:"HTML-аттрибут checked по-умолчанию",name:"defaultChecked",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},showIcon:{defaultValue:null,description:"Показывать ли иконку в переключателе",name:"showIcon",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/toggles/src/components/Switch/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"packages/toggles/src/components/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}},"./packages/toggles/src/components/TogglePrivate/TogglePrivate.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>TogglePrivate});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./packages/toggles/node_modules/uncontrollable/lib/esm/index.js"),constants=__webpack_require__("./packages/toggles/src/constants.ts"),utils=__webpack_require__("./packages/toggles/src/utils.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/toggles/src/components/TogglePrivate/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const TogglePrivate_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_nku3msmlm(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/toggles/src/components/TogglePrivate/TogglePrivate.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"57bb8f41088e78d57df8c4ce219f2791e4607b8d"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/toggles/src/components/TogglePrivate/TogglePrivate.tsx",statementMap:{0:{start:{line:10,column:29},end:{line:69,column:2}},1:{start:{line:27,column:32},end:{line:27,column:99}},2:{start:{line:28,column:42},end:{line:28,column:57}},3:{start:{line:29,column:28},end:{line:29,column:43}},4:{start:{line:31,column:22},end:{line:37,column:3}},5:{start:{line:39,column:2},end:{line:68,column:4}},6:{start:{line:44,column:26},end:{line:44,column:40}},7:{start:{line:45,column:26},end:{line:45,column:41}},8:{start:{line:57,column:23},end:{line:57,column:51}},9:{start:{line:59,column:10},end:{line:59,column:66}},10:{start:{line:60,column:10},end:{line:60,column:27}},11:{start:{line:63,column:10},end:{line:63,column:33}},12:{start:{line:64,column:10},end:{line:64,column:26}}},fnMap:{0:{name:"TogglePrivate",decl:{start:{line:10,column:87},end:{line:10,column:100}},loc:{start:{line:26,column:2},end:{line:69,column:1}},line:26},1:{name:"(anonymous_1)",decl:{start:{line:44,column:20},end:{line:44,column:21}},loc:{start:{line:44,column:26},end:{line:44,column:40}},line:44},2:{name:"(anonymous_2)",decl:{start:{line:45,column:20},end:{line:45,column:21}},loc:{start:{line:45,column:26},end:{line:45,column:41}},line:45},3:{name:"(anonymous_3)",decl:{start:{line:57,column:18},end:{line:57,column:19}},loc:{start:{line:57,column:23},end:{line:57,column:51}},line:57},4:{name:"(anonymous_4)",decl:{start:{line:58,column:17},end:{line:58,column:18}},loc:{start:{line:58,column:26},end:{line:61,column:9}},line:58},5:{name:"(anonymous_5)",decl:{start:{line:62,column:16},end:{line:62,column:17}},loc:{start:{line:62,column:25},end:{line:65,column:9}},line:62}},branchMap:{0:{loc:{start:{line:20,column:4},end:{line:20,column:17}},type:"default-arg",locations:[{start:{line:20,column:11},end:{line:20,column:17}}],line:20},1:{loc:{start:{line:21,column:4},end:{line:21,column:24}},type:"default-arg",locations:[{start:{line:21,column:11},end:{line:21,column:24}}],line:21}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{0:[0],1:[0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"57bb8f41088e78d57df8c4ce219f2791e4607b8d"});var actualCoverage=coverage[path];return cov_nku3msmlm=function(){return actualCoverage},actualCoverage}cov_nku3msmlm();const TogglePrivate=(cov_nku3msmlm().s[0]++,(0,react.forwardRef)((function TogglePrivate(_ref,ref){let{render,checked:checkedProp,defaultChecked,onChange,onBlur,onFocus,disabled,className,size=(cov_nku3msmlm().b[0][0]++,constants.NO.M),mode=(cov_nku3msmlm().b[1][0]++,constants.IK.Checkbox),"data-test-id":testId,...otherProps}=_ref;cov_nku3msmlm().f[0]++;const[checked,setChecked]=(cov_nku3msmlm().s[1]++,(0,esm.$c)(checkedProp,Boolean(defaultChecked),onChange)),[focusVisible,setFocusVisible]=(cov_nku3msmlm().s[2]++,(0,react.useState)(!1)),[hover,setHover]=(cov_nku3msmlm().s[3]++,(0,react.useState)(!1)),visualState=(cov_nku3msmlm().s[4]++,{disabled:Boolean(disabled),focusVisible,checked,hover,size});return cov_nku3msmlm().s[5]++,(0,jsx_runtime.jsxs)("span",{className:classnames_default()(className,TogglePrivate_styles_module.toggleLayout),"data-size":size,"data-test-id":testId,onMouseEnter:()=>(cov_nku3msmlm().f[1]++,cov_nku3msmlm().s[6]++,setHover(!0)),onMouseLeave:()=>(cov_nku3msmlm().f[2]++,cov_nku3msmlm().s[7]++,setHover(!1)),...(0,utils.o)(visualState),children:[render(visualState),(0,jsx_runtime.jsx)("input",{...otherProps,"data-test-id":`${testId}-native-input`,ref,type:mode,className:TogglePrivate_styles_module.togglePrivate,checked,disabled,onChange:e=>(cov_nku3msmlm().f[3]++,cov_nku3msmlm().s[8]++,setChecked(e.target.checked)),onFocus:event=>{cov_nku3msmlm().f[4]++,cov_nku3msmlm().s[9]++,setFocusVisible(event.target.matches(":focus-visible")),cov_nku3msmlm().s[10]++,onFocus?.(event)},onBlur:event=>{cov_nku3msmlm().f[5]++,cov_nku3msmlm().s[11]++,setFocusVisible(!1),cov_nku3msmlm().s[12]++,onBlur?.(event)}})]})})));try{TogglePrivate.displayName="TogglePrivate",TogglePrivate.__docgenInfo={description:"",displayName:"TogglePrivate",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"m"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},render:{defaultValue:null,description:"Колбек рендера компонента",name:"render",required:!0,type:{name:"(visualState: InputVisualState) => ReactNode"}},mode:{defaultValue:{value:"checkbox"},description:"Режим работы",name:"mode",required:!1,type:{name:"enum",value:[{value:'"radio"'},{value:'"checkbox"'}]}},id:{defaultValue:null,description:"HTML-аттрибут id",name:"id",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"HTML-аттрибут value",name:"value",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"HTML-аттрибут name",name:"name",required:!1,type:{name:"string"}},tabIndex:{defaultValue:null,description:"HTML-аттрибут tab-index",name:"tabIndex",required:!1,type:{name:"number"}},autofocus:{defaultValue:null,description:"HTML-аттрибут autofocus",name:"autofocus",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"HTML-аттрибут checked",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"HTML-аттрибут checked по-умолчанию",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"HTML-аттрибут disabled",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Колбек смены значения",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},onClick:{defaultValue:null,description:"Колбек клика",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"Колбек потери фокуса",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"Колбек приобретения фокуса",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/toggles/src/components/TogglePrivate/TogglePrivate.tsx#TogglePrivate"]={docgenInfo:TogglePrivate.__docgenInfo,name:"TogglePrivate",path:"packages/toggles/src/components/TogglePrivate/TogglePrivate.tsx#TogglePrivate"})}catch(__react_docgen_typescript_loader_error){}},"./packages/toggles/src/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_22qlf108if(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/toggles/src/constants.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"4db2f3db472f16d45205308ff971c115a47fba0f"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/toggles/src/constants.ts",statementMap:{0:{start:{line:1,column:20},end:{line:4,column:10}},1:{start:{line:6,column:20},end:{line:9,column:10}},2:{start:{line:11,column:29},end:{line:14,column:10}},3:{start:{line:16,column:30},end:{line:19,column:10}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"4db2f3db472f16d45205308ff971c115a47fba0f"});var actualCoverage=coverage[path];return cov_22qlf108if=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{As:()=>FAVORITE_ICON,IK:()=>MODE,NO:()=>SIZE,zE:()=>SELECTION_MODE}),cov_22qlf108if();const MODE=(cov_22qlf108if().s[0]++,{Checkbox:"checkbox",Radio:"radio"}),SIZE=(cov_22qlf108if().s[1]++,{S:"s",M:"m"}),FAVORITE_ICON=(cov_22qlf108if().s[2]++,{Star:"star",Heart:"heart"}),SELECTION_MODE=(cov_22qlf108if().s[3]++,{Single:"single",Multiple:"multiple"})},"./packages/toggles/src/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>getIconSize,o:()=>getVisualStateAttributes});var _constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/toggles/src/constants.ts");function cov_ltpe5l22t(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/toggles/src/utils.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"6428e771dd6946491d8abe30e571d1863961ddeb"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/toggles/src/utils.ts",statementMap:{0:{start:{line:5,column:2},end:{line:8,column:9}},1:{start:{line:6,column:4},end:{line:6,column:49}},2:{start:{line:7,column:4},end:{line:7,column:18}},3:{start:{line:12,column:2},end:{line:20,column:3}},4:{start:{line:14,column:6},end:{line:14,column:16}},5:{start:{line:18,column:6},end:{line:18,column:16}}},fnMap:{0:{name:"getVisualStateAttributes",decl:{start:{line:4,column:16},end:{line:4,column:40}},loc:{start:{line:4,column:82},end:{line:9,column:1}},line:4},1:{name:"(anonymous_1)",decl:{start:{line:5,column:54},end:{line:5,column:55}},loc:{start:{line:5,column:87},end:{line:8,column:3}},line:5},2:{name:"getIconSize",decl:{start:{line:11,column:16},end:{line:11,column:27}},loc:{start:{line:11,column:41},end:{line:21,column:1}},line:11}},branchMap:{0:{loc:{start:{line:12,column:2},end:{line:20,column:3}},type:"switch",locations:[{start:{line:13,column:4},end:{line:15,column:5}},{start:{line:16,column:4},end:{line:16,column:16}},{start:{line:17,column:4},end:{line:19,column:5}}],line:12}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{0:[0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6428e771dd6946491d8abe30e571d1863961ddeb"});var actualCoverage=coverage[path];return cov_ltpe5l22t=function(){return actualCoverage},actualCoverage}function getVisualStateAttributes(state){return cov_ltpe5l22t().f[0]++,cov_ltpe5l22t().s[0]++,Object.entries(state).reduce((function(result,_ref){let[name,value]=_ref;return cov_ltpe5l22t().f[1]++,cov_ltpe5l22t().s[1]++,result[`data-${name.toLowerCase()}`]=value,cov_ltpe5l22t().s[2]++,result}),{})}function getIconSize(size){switch(cov_ltpe5l22t().f[2]++,cov_ltpe5l22t().s[3]++,size){case _constants__WEBPACK_IMPORTED_MODULE_0__.NO.S:return cov_ltpe5l22t().b[0][0]++,cov_ltpe5l22t().s[4]++,16;case _constants__WEBPACK_IMPORTED_MODULE_0__.NO.M:cov_ltpe5l22t().b[0][1]++;default:return cov_ltpe5l22t().b[0][2]++,cov_ltpe5l22t().s[5]++,24}}cov_ltpe5l22t()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/toggles/src/components/Switch/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".container--jqmwg{display:flex;align-items:center;justify-content:center;box-sizing:border-box}.container--jqmwg[data-size=s]{width:var(--size-toggles-s-container-switch-width, 24px);height:var(--size-toggles-s-container, 16px);border-radius:var(--radius-toggles-s-box-switch, 16px)}.container--jqmwg[data-size=m]{width:var(--size-toggles-m-container-switch-width, 36px);height:var(--size-toggles-m-container, 24px);border-radius:var(--radius-toggles-m-box-switch, 16px)}.container--jqmwg[data-focusvisible=true]{outline-width:var(--border-state-focus-s-border-width, 2px);outline-style:var(--border-state-focus-s-border-style, solid);outline-color:var(--border-state-focus-s-border-color, )}.container--jqmwg[data-focusvisible=true][data-size=s]{outline-offset:var(--border-width-state-focus-s, 2px)}.box--QmeyB{position:relative;background-color:var(--sys-neutral-decor-activated, #bec2cf)}.box--QmeyB[data-size=s]{width:var(--size-toggles-s-box-switch-width, 24px);height:var(--size-toggles-s-box-switch-height, 16px);border-radius:var(--radius-toggles-s-box-switch, 16px)}.box--QmeyB[data-size=m]{width:var(--size-toggles-m-box-switch-width, 32px);height:var(--size-toggles-m-box-switch-height, 20px);border-radius:var(--radius-toggles-m-box-switch, 16px)}.box--QmeyB[data-hover=true]{background-color:var(--sys-neutral-accent-hovered, #6d707f)}.box--QmeyB[data-disabled=true]{background-color:var(--sys-neutral-decor-default, #dde0ea)}.box--QmeyB[data-checked=true]{background-color:var(--sys-primary-accent-default, #794ed3)}.box--QmeyB[data-checked=true][data-hover=true]{background-color:var(--sys-primary-accent-hovered, #6851a6)}.box--QmeyB[data-checked=true][data-disabled=true]{background-color:var(--sys-neutral-decor-default, #dde0ea)}.containerFlag--C4lND{position:absolute;left:0;display:flex;align-items:center;justify-content:center;transition-timing-function:linear;transition-duration:.1s;transition-property:left}.containerFlag--C4lND[data-size=s]{width:var(--size-toggles-s-container, 16px);height:var(--size-toggles-s-container, 16px)}.containerFlag--C4lND[data-size=s][data-checked=true]{left:calc(100% - var(--size-toggles-s-container, 16px))}.containerFlag--C4lND[data-size=m]{width:var(--size-toggles-m-container, 24px);height:var(--size-toggles-m-container, 24px)}.containerFlag--C4lND[data-size=m][data-checked=true]{left:calc(100% - var(--size-toggles-m-container, 24px))}.flag--nMpfm{background-color:var(--sys-neutral-background2-level, #ffffff)}.flag--nMpfm[data-size=s]{border-radius:var(--radius-toggles-s-box-switch, 16px);width:var(--size-toggles-s-flag-switch, 12px);height:var(--size-toggles-s-flag-switch, 12px)}.flag--nMpfm[data-size=m]{border-radius:var(--radius-toggles-m-box-switch, 16px);width:var(--size-toggles-m-flag-switch, 16px);height:var(--size-toggles-m-flag-switch, 16px)}.flag--nMpfm[data-focusvisible=true],.flag--nMpfm[data-hover=true]{background-color:var(--sys-neutral-on-accent, #ffffff)}.flag--nMpfm[data-disabled=true]{background-color:var(--sys-neutral-background2-level, #ffffff)}.flag_icon_off--jVz_A{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex;color:var(--sys-neutral-text-disabled, #aaaebd);fill:rgba(0,0,0,0);transition:opacity .1s linear;opacity:1}.flag_icon_off--jVz_A[data-hover=true]{color:var(--sys-neutral-accent-hovered, #6d707f)}.flag_icon_off--jVz_A[data-checked=true]{color:var(--sys-primary-accent-default, #794ed3)}.flag_icon_off--jVz_A[data-checked=true][data-hover=true]{color:var(--sys-primary-accent-hovered, #6851a6)}.flag_icon_off--jVz_A[data-disabled=true]{color:var(--sys-neutral-text-disabled, #aaaebd)}.flag_icon_off--jVz_A[data-disabled=true][data-hover=true]{color:var(--sys-neutral-text-disabled, #aaaebd)}.flag_icon_off--jVz_A[data-checked=true]{opacity:0}.flag_icon_on--jhT2y{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex;color:var(--sys-neutral-text-disabled, #aaaebd);fill:rgba(0,0,0,0);transition:opacity .1s linear;opacity:0}.flag_icon_on--jhT2y[data-hover=true]{color:var(--sys-neutral-accent-hovered, #6d707f)}.flag_icon_on--jhT2y[data-checked=true]{color:var(--sys-primary-accent-default, #794ed3)}.flag_icon_on--jhT2y[data-checked=true][data-hover=true]{color:var(--sys-primary-accent-hovered, #6851a6)}.flag_icon_on--jhT2y[data-disabled=true]{color:var(--sys-neutral-text-disabled, #aaaebd)}.flag_icon_on--jhT2y[data-disabled=true][data-hover=true]{color:var(--sys-neutral-text-disabled, #aaaebd)}.flag_icon_on--jhT2y[data-checked=true]{opacity:1}",""]),___CSS_LOADER_EXPORT___.locals={container:"container--jqmwg",box:"box--QmeyB",containerFlag:"containerFlag--C4lND",flag:"flag--nMpfm",flag_icon_off:"flag_icon_off--jVz_A",flag_icon_on:"flag_icon_on--jhT2y"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/toggles/src/components/TogglePrivate/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".toggleLayout--ooBy8{cursor:pointer;position:relative;display:inline-flex;flex-direction:row;flex-grow:0;flex-shrink:0;align-items:center}.toggleLayout--ooBy8[data-disabled=true]{cursor:not-allowed;color:var(--sys-neutral-text-disabled, #aaaebd)}.togglePrivate--c3NiT{cursor:pointer;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0}.togglePrivate--c3NiT:disabled{cursor:not-allowed}",""]),___CSS_LOADER_EXPORT___.locals={toggleLayout:"toggleLayout--ooBy8",togglePrivate:"togglePrivate--c3NiT"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/toggles/src/helperComponents/Spinner/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".spinner--IJ0S9{pointer-events:none;width:var(--dimension-2m, 16px);height:var(--dimension-2m, 16px);animation:spin--RMagt 1s ease-in-out infinite}.spinner--IJ0S9>path{stroke:currentColor}@keyframes spin--RMagt{to{transform:rotate(360deg)}}",""]),___CSS_LOADER_EXPORT___.locals={spinner:"spinner--IJ0S9",spin:"spin--RMagt"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);