"use strict";(self.webpackChunksnack_uikit=self.webpackChunksnack_uikit||[]).push([[8935],{"./packages/scroll/src/components/Scroll.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Scroll});__webpack_require__("./node_modules/overlayscrollbars/styles/overlayscrollbars.css");var classnames=__webpack_require__("./packages/scroll/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),overlayscrollbars_react=__webpack_require__("./node_modules/overlayscrollbars-react/overlayscrollbars-react.mjs"),react=__webpack_require__("./node_modules/react/index.js"),useIsomorphicLayoutEffect=__webpack_require__("./packages/utils/src/hooks/useIsomorphicLayoutEffect.ts"),constants=__webpack_require__("./packages/scroll/src/constants.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/scroll/src/components/styles.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.A,options);const components_styles_module=styles_module.A&&styles_module.A.locals?styles_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_2h9gch3p3w(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/scroll/src/components/Scroll.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/scroll/src/components/Scroll.tsx",statementMap:{0:{start:{line:65,column:22},end:{line:195,column:2}},1:{start:{line:82,column:31},end:{line:82,column:81}},2:{start:{line:83,column:64},end:{line:83,column:79}},3:{start:{line:84,column:24},end:{line:87,column:3}},4:{start:{line:85,column:58},end:{line:85,column:89}},5:{start:{line:89,column:2},end:{line:92,column:4}},6:{start:{line:91,column:10},end:{line:91,column:105}},7:{start:{line:94,column:27},end:{line:94,column:100}},8:{start:{line:96,column:24},end:{line:110,column:3}},9:{start:{line:98,column:23},end:{line:98,column:48}},10:{start:{line:99,column:6},end:{line:107,column:7}},11:{start:{line:100,column:29},end:{line:100,column:48}},12:{start:{line:101,column:28},end:{line:101,column:96}},13:{start:{line:102,column:27},end:{line:102,column:94}},14:{start:{line:103,column:27},end:{line:103,column:72}},15:{start:{line:104,column:27},end:{line:104,column:70}},16:{start:{line:105,column:8},end:{line:105,column:105}},17:{start:{line:106,column:8},end:{line:106,column:103}},18:{start:{line:112,column:2},end:{line:133,column:63}},19:{start:{line:113,column:4},end:{line:116,column:5}},20:{start:{line:114,column:6},end:{line:114,column:28}},21:{start:{line:115,column:6},end:{line:115,column:13}},22:{start:{line:118,column:21},end:{line:118,column:36}},23:{start:{line:119,column:4},end:{line:126,column:5}},24:{start:{line:120,column:6},end:{line:120,column:22}},25:{start:{line:122,column:26},end:{line:122,column:45}},26:{start:{line:124,column:6},end:{line:124,column:87}},27:{start:{line:125,column:6},end:{line:125,column:85}},28:{start:{line:128,column:4},end:{line:128,column:26}},29:{start:{line:135,column:24},end:{line:137,column:8}},30:{start:{line:136,column:4},end:{line:136,column:36}},31:{start:{line:139,column:19},end:{line:150,column:3}},32:{start:{line:141,column:6},end:{line:141,column:28}},33:{start:{line:143,column:6},end:{line:145,column:7}},34:{start:{line:144,column:8},end:{line:144,column:24}},35:{start:{line:152,column:31},end:{line:165,column:35}},36:{start:{line:153,column:4},end:{line:153,column:30}},37:{start:{line:153,column:23},end:{line:153,column:30}},38:{start:{line:155,column:21},end:{line:155,column:48}},39:{start:{line:157,column:4},end:{line:164,column:5}},40:{start:{line:158,column:6},end:{line:160,column:7}},41:{start:{line:159,column:8},end:{line:159,column:68}},42:{start:{line:161,column:6},end:{line:163,column:7}},43:{start:{line:162,column:8},end:{line:162,column:67}},44:{start:{line:167,column:2},end:{line:194,column:4}},45:{start:{line:186,column:10},end:{line:186,column:26}}},fnMap:{0:{name:"Scroll",decl:{start:{line:65,column:68},end:{line:65,column:74}},loc:{start:{line:81,column:2},end:{line:195,column:1}},line:81},1:{name:"(anonymous_1)",decl:{start:{line:85,column:4},end:{line:85,column:5}},loc:{start:{line:85,column:58},end:{line:85,column:89}},line:85},2:{name:"(anonymous_2)",decl:{start:{line:91,column:4},end:{line:91,column:5}},loc:{start:{line:91,column:10},end:{line:91,column:105}},line:91},3:{name:"(anonymous_3)",decl:{start:{line:97,column:4},end:{line:97,column:5}},loc:{start:{line:97,column:59},end:{line:108,column:5}},line:97},4:{name:"(anonymous_4)",decl:{start:{line:112,column:18},end:{line:112,column:19}},loc:{start:{line:112,column:24},end:{line:133,column:3}},line:112},5:{name:"(anonymous_5)",decl:{start:{line:135,column:36},end:{line:135,column:37}},loc:{start:{line:135,column:42},end:{line:137,column:3}},line:135},6:{name:"(anonymous_6)",decl:{start:{line:140,column:4},end:{line:140,column:5}},loc:{start:{line:140,column:23},end:{line:146,column:5}},line:140},7:{name:"(anonymous_7)",decl:{start:{line:152,column:43},end:{line:152,column:44}},loc:{start:{line:152,column:49},end:{line:165,column:3}},line:152},8:{name:"(anonymous_8)",decl:{start:{line:185,column:16},end:{line:185,column:17}},loc:{start:{line:185,column:38},end:{line:187,column:9}},line:185}},branchMap:{0:{loc:{start:{line:71,column:4},end:{line:71,column:17}},type:"default-arg",locations:[{start:{line:71,column:11},end:{line:71,column:17}}],line:71},1:{loc:{start:{line:72,column:4},end:{line:72,column:24}},type:"default-arg",locations:[{start:{line:72,column:13},end:{line:72,column:24}}],line:72},2:{loc:{start:{line:73,column:4},end:{line:73,column:25}},type:"default-arg",locations:[{start:{line:73,column:21},end:{line:73,column:25}}],line:73},3:{loc:{start:{line:74,column:4},end:{line:74,column:45}},type:"default-arg",locations:[{start:{line:74,column:22},end:{line:74,column:45}}],line:74},4:{loc:{start:{line:77,column:4},end:{line:77,column:33}},type:"default-arg",locations:[{start:{line:77,column:28},end:{line:77,column:33}}],line:77},5:{loc:{start:{line:85,column:5},end:{line:85,column:53}},type:"default-arg",locations:[{start:{line:85,column:25},end:{line:85,column:53}}],line:85},6:{loc:{start:{line:91,column:11},end:{line:91,column:82}},type:"binary-expr",locations:[{start:{line:91,column:11},end:{line:91,column:74}},{start:{line:91,column:78},end:{line:91,column:82}}],line:91},7:{loc:{start:{line:99,column:6},end:{line:107,column:7}},type:"if",locations:[{start:{line:99,column:6},end:{line:107,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:99},8:{loc:{start:{line:105,column:52},end:{line:105,column:104}},type:"binary-expr",locations:[{start:{line:105,column:52},end:{line:105,column:89}},{start:{line:105,column:93},end:{line:105,column:104}}],line:105},9:{loc:{start:{line:106,column:51},end:{line:106,column:102}},type:"binary-expr",locations:[{start:{line:106,column:51},end:{line:106,column:87}},{start:{line:106,column:91},end:{line:106,column:102}}],line:106},10:{loc:{start:{line:113,column:4},end:{line:116,column:5}},type:"if",locations:[{start:{line:113,column:4},end:{line:116,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:113},11:{loc:{start:{line:119,column:4},end:{line:126,column:5}},type:"if",locations:[{start:{line:119,column:4},end:{line:126,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:119},12:{loc:{start:{line:119,column:8},end:{line:119,column:44}},type:"binary-expr",locations:[{start:{line:119,column:8},end:{line:119,column:16}},{start:{line:119,column:20},end:{line:119,column:44}}],line:119},13:{loc:{start:{line:124,column:6},end:{line:124,column:86}},type:"binary-expr",locations:[{start:{line:124,column:6},end:{line:124,column:43}},{start:{line:124,column:47},end:{line:124,column:86}}],line:124},14:{loc:{start:{line:125,column:6},end:{line:125,column:84}},type:"binary-expr",locations:[{start:{line:125,column:6},end:{line:125,column:42}},{start:{line:125,column:46},end:{line:125,column:84}}],line:125},15:{loc:{start:{line:143,column:6},end:{line:145,column:7}},type:"if",locations:[{start:{line:143,column:6},end:{line:145,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:143},16:{loc:{start:{line:153,column:4},end:{line:153,column:30}},type:"if",locations:[{start:{line:153,column:4},end:{line:153,column:30}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:153},17:{loc:{start:{line:157,column:4},end:{line:164,column:5}},type:"if",locations:[{start:{line:157,column:4},end:{line:164,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:157},18:{loc:{start:{line:158,column:6},end:{line:160,column:7}},type:"if",locations:[{start:{line:158,column:6},end:{line:160,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:158},19:{loc:{start:{line:158,column:10},end:{line:158,column:92}},type:"binary-expr",locations:[{start:{line:158,column:10},end:{line:158,column:51}},{start:{line:158,column:55},end:{line:158,column:92}}],line:158},20:{loc:{start:{line:161,column:6},end:{line:163,column:7}},type:"if",locations:[{start:{line:161,column:6},end:{line:163,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:161},21:{loc:{start:{line:161,column:10},end:{line:161,column:90}},type:"binary-expr",locations:[{start:{line:161,column:10},end:{line:161,column:50}},{start:{line:161,column:54},end:{line:161,column:90}}],line:161},22:{loc:{start:{line:172,column:35},end:{line:172,column:69}},type:"binary-expr",locations:[{start:{line:172,column:35},end:{line:172,column:56}},{start:{line:172,column:60},end:{line:172,column:69}}],line:172},23:{loc:{start:{line:192,column:7},end:{line:192,column:69}},type:"cond-expr",locations:[{start:{line:192,column:22},end:{line:192,column:58}},{start:{line:192,column:61},end:{line:192,column:69}}],line:192},24:{loc:{start:{line:192,column:22},end:{line:192,column:58}},type:"binary-expr",locations:[{start:{line:192,column:22},end:{line:192,column:46}},{start:{line:192,column:50},end:{line:192,column:58}}],line:192}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0],5:[0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0],22:[0,0],23:[0,0],24:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"48fd34415846fc0391ca641c762767015333d5b0"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"48fd34415846fc0391ca641c762767015333d5b0"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_2h9gch3p3w=function(){return actualCoverage},actualCoverage}cov_2h9gch3p3w();const Scroll=(cov_2h9gch3p3w().s[0]++,(0,react.forwardRef)((function Scroll(_ref,ref){let{children,className,onScroll:onScrollProp,onInitialized:onInitializedProp,size=(cov_2h9gch3p3w().b[0][0]++,constants.SK.M),resize=(cov_2h9gch3p3w().b[1][0]++,constants.LD.None),clickScrolling=(cov_2h9gch3p3w().b[2][0]++,!0),barHideStrategy=(cov_2h9gch3p3w().b[3][0]++,constants.Ro.Leave),autoscrollTo,paddingAbsolute,untouchableScrollbars=(cov_2h9gch3p3w().b[4][0]++,!1),...rest}=_ref;cov_2h9gch3p3w().f[0]++;const overlayScrollbarsRef=(cov_2h9gch3p3w().s[1]++,(0,react.useRef)(null)),[isOverlayScrollbarInited,setOverlayScrollbarInited]=(cov_2h9gch3p3w().s[2]++,(0,react.useState)(!1)),getOSInstance=(cov_2h9gch3p3w().s[3]++,(0,react.useCallback)((function(){let overlayScrollbars=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(cov_2h9gch3p3w().b[5][0]++,overlayScrollbarsRef.current);return cov_2h9gch3p3w().f[1]++,cov_2h9gch3p3w().s[4]++,overlayScrollbars?.osInstance()}),[overlayScrollbarsRef]));cov_2h9gch3p3w().s[5]++,(0,react.useImperativeHandle)(ref,(()=>(cov_2h9gch3p3w().f[2]++,cov_2h9gch3p3w().s[6]++,cov_2h9gch3p3w().b[6][0]++,overlayScrollbarsRef.current?.osInstance()?.elements().viewport??(cov_2h9gch3p3w().b[6][1]++,null))));const lastPositionsRef=(cov_2h9gch3p3w().s[7]++,(0,react.useRef)({scrolledToBottom:!1,scrolledToRight:!1})),syncPositions=(cov_2h9gch3p3w().s[8]++,(0,react.useCallback)((scrollbars=>{cov_2h9gch3p3w().f[3]++;const instance=(cov_2h9gch3p3w().s[9]++,getOSInstance(scrollbars));if(cov_2h9gch3p3w().s[10]++,instance){cov_2h9gch3p3w().b[7][0]++;const{viewport}=(cov_2h9gch3p3w().s[11]++,instance.elements()),gapToBottom=(cov_2h9gch3p3w().s[12]++,viewport.scrollHeight-(viewport.offsetHeight+viewport.scrollTop)),gapToRight=(cov_2h9gch3p3w().s[13]++,viewport.scrollWidth-(viewport.offsetWidth+viewport.scrollLeft)),hasYScroll=(cov_2h9gch3p3w().s[14]++,viewport.scrollHeight>viewport.offsetHeight),hasXScroll=(cov_2h9gch3p3w().s[15]++,viewport.scrollWidth>viewport.offsetWidth);cov_2h9gch3p3w().s[16]++,lastPositionsRef.current.scrolledToBottom=(cov_2h9gch3p3w().b[8][0]++,gapToBottom<constants.zu||(cov_2h9gch3p3w().b[8][1]++,!hasYScroll)),cov_2h9gch3p3w().s[17]++,lastPositionsRef.current.scrolledToRight=(cov_2h9gch3p3w().b[9][0]++,gapToRight<constants.zu||(cov_2h9gch3p3w().b[9][1]++,!hasXScroll))}else cov_2h9gch3p3w().b[7][1]++}),[getOSInstance]));cov_2h9gch3p3w().s[18]++,(0,useIsomorphicLayoutEffect.N)((()=>{if(cov_2h9gch3p3w().f[4]++,cov_2h9gch3p3w().s[19]++,!autoscrollTo)return cov_2h9gch3p3w().b[10][0]++,cov_2h9gch3p3w().s[20]++,onInitializedProp?.(),void cov_2h9gch3p3w().s[21]++;cov_2h9gch3p3w().b[10][1]++;const instance=(cov_2h9gch3p3w().s[22]++,getOSInstance());if(cov_2h9gch3p3w().s[23]++,cov_2h9gch3p3w().b[12][0]++,instance&&(cov_2h9gch3p3w().b[12][1]++,isOverlayScrollbarInited)){cov_2h9gch3p3w().b[11][0]++,cov_2h9gch3p3w().s[24]++,syncPositions();const{content}=(cov_2h9gch3p3w().s[25]++,instance.elements());cov_2h9gch3p3w().s[26]++,cov_2h9gch3p3w().b[13][0]++,autoscrollTo===constants.ti.Bottom&&(cov_2h9gch3p3w().b[13][1]++,content.scroll(0,content.scrollHeight)),cov_2h9gch3p3w().s[27]++,cov_2h9gch3p3w().b[14][0]++,autoscrollTo===constants.ti.Right&&(cov_2h9gch3p3w().b[14][1]++,content.scroll(content.scrollWidth,0))}else cov_2h9gch3p3w().b[11][1]++;cov_2h9gch3p3w().s[28]++,onInitializedProp?.()}),[getOSInstance,isOverlayScrollbarInited,syncPositions]);const onInitialized=(cov_2h9gch3p3w().s[29]++,(0,react.useCallback)((()=>{cov_2h9gch3p3w().f[5]++,cov_2h9gch3p3w().s[30]++,setOverlayScrollbarInited(!0)}),[])),onScroll=(cov_2h9gch3p3w().s[31]++,(0,react.useCallback)((event=>{cov_2h9gch3p3w().f[6]++,cov_2h9gch3p3w().s[32]++,onScrollProp?.(event),cov_2h9gch3p3w().s[33]++,autoscrollTo?(cov_2h9gch3p3w().b[15][0]++,cov_2h9gch3p3w().s[34]++,syncPositions()):cov_2h9gch3p3w().b[15][1]++}),[onScrollProp,syncPositions])),onContentSizeChanged=(cov_2h9gch3p3w().s[35]++,(0,react.useCallback)((()=>{if(cov_2h9gch3p3w().f[7]++,cov_2h9gch3p3w().s[36]++,!autoscrollTo)return cov_2h9gch3p3w().b[16][0]++,void cov_2h9gch3p3w().s[37]++;cov_2h9gch3p3w().b[16][1]++;const instance=(cov_2h9gch3p3w().s[38]++,getOSInstance()?.elements());cov_2h9gch3p3w().s[39]++,instance?.content?(cov_2h9gch3p3w().b[17][0]++,cov_2h9gch3p3w().s[40]++,cov_2h9gch3p3w().b[19][0]++,lastPositionsRef.current.scrolledToBottom&&(cov_2h9gch3p3w().b[19][1]++,autoscrollTo===constants.ti.Bottom)?(cov_2h9gch3p3w().b[18][0]++,cov_2h9gch3p3w().s[41]++,instance?.content.scroll(0,instance?.content.scrollHeight)):cov_2h9gch3p3w().b[18][1]++,cov_2h9gch3p3w().s[42]++,cov_2h9gch3p3w().b[21][0]++,lastPositionsRef.current.scrolledToRight&&(cov_2h9gch3p3w().b[21][1]++,autoscrollTo===constants.ti.Right)?(cov_2h9gch3p3w().b[20][0]++,cov_2h9gch3p3w().s[43]++,instance?.content.scroll(instance?.content.scrollWidth,0)):cov_2h9gch3p3w().b[20][1]++):cov_2h9gch3p3w().b[17][1]++}),[getOSInstance,autoscrollTo]));return cov_2h9gch3p3w().s[44]++,(0,jsx_runtime.jsx)(overlayscrollbars_react.r,{...rest,ref:overlayScrollbarsRef,"data-size":size,"data-untouchable-scrollbars":(cov_2h9gch3p3w().b[22][0]++,untouchableScrollbars||void cov_2h9gch3p3w().b[22][1]++),className:classnames_default()(className,components_styles_module.scroll,"osThemeSnack"),style:{resize},options:{paddingAbsolute,scrollbars:{autoHide:barHideStrategy,autoHideDelay:constants.AC,clickScroll:clickScrolling}},events:{initialized:onInitialized,scroll:(_instance,event)=>{cov_2h9gch3p3w().f[8]++,cov_2h9gch3p3w().s[45]++,onScroll(event)},updated:onContentSizeChanged},children:autoscrollTo?(cov_2h9gch3p3w().b[23][0]++,cov_2h9gch3p3w().b[24][0]++,isOverlayScrollbarInited&&(cov_2h9gch3p3w().b[24][1]++,children)):(cov_2h9gch3p3w().b[23][1]++,children)})})));try{Scroll.displayName="Scroll",Scroll.__docgenInfo={description:"",displayName:"Scroll",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"m"},description:"Размер скролбаров",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},clickScrolling:{defaultValue:{value:"true"},description:"Скролить ли по клику в скроллбар.",name:"clickScrolling",required:!1,type:{name:"boolean"}},autoscrollTo:{defaultValue:null,description:"Включает автоскрол при маунте и изменении размера контента:\n<br> - `bottom` - автоскрол вниз,\n<br> - `right` - автоскрол вправо,",name:"autoscrollTo",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"bottom"'}]}},barHideStrategy:{defaultValue:{value:"leave"},description:"Управление скрытием скролл баров:\n<br> - `Never` - показывать всегда\n<br> - `Leave` - скрывать когда курсор покидает компонент\n<br> - `Scroll` - показывать только когда происходит скроллинг\n<br> - `Move` - показывать при движении курсора над компонентом",name:"barHideStrategy",required:!1,type:{name:"enum",value:[{value:'"move"'},{value:'"scroll"'},{value:'"never"'},{value:'"leave"'}]}},onScroll:{defaultValue:null,description:"Колбек события скрола.",name:"onScroll",required:!1,type:{name:"((event?: Event) => void)"}},resize:{defaultValue:{value:"none"},description:"Настройка возможности регулировать Scroll-контейнер:\n<br> - `None` - нельзя изменять размер\n<br> - `Horizontal` - можно изменять размер только по горизонтали\n<br> - `Vertical` - можно изменять размер только по вертикали\n<br> - `Both` - можно изменять размер в обеих координатах",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}},untouchableScrollbars:{defaultValue:{value:"false"},description:"Отключает возможность взаимодействовать со скролбарами мышью.",name:"untouchableScrollbars",required:!1,type:{name:"boolean"}},paddingAbsolute:{defaultValue:null,description:"Должны ли паддинги быть абсолютными",name:"paddingAbsolute",required:!1,type:{name:"boolean"}},onInitialized:{defaultValue:null,description:"Коллбэк вызывающийся на инициализацию скролла",name:"onInitialized",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/scroll/src/components/Scroll.tsx#Scroll"]={docgenInfo:Scroll.__docgenInfo,name:"Scroll",path:"packages/scroll/src/components/Scroll.tsx#Scroll"})}catch(__react_docgen_typescript_loader_error){}},"./packages/scroll/src/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_1hav8tsasw(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/scroll/src/constants.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"562badcca12969451316fb3ec505631ce8c6aaa0"===coverage[path].hash||(coverage[path]={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/scroll/src/constants.ts",statementMap:{0:{start:{line:1,column:20},end:{line:4,column:10}},1:{start:{line:6,column:33},end:{line:11,column:10}},2:{start:{line:13,column:22},end:{line:18,column:10}},3:{start:{line:20,column:29},end:{line:23,column:10}},4:{start:{line:25,column:38},end:{line:25,column:41}},5:{start:{line:30,column:39},end:{line:30,column:40}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"562badcca12969451316fb3ec505631ce8c6aaa0"});var actualCoverage=coverage[path];return cov_1hav8tsasw=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{AC:()=>BAR_AUTO_HIDE_DELAY_MS,LD:()=>RESIZE,Ro:()=>BAR_HIDE_STRATEGY,SK:()=>SIZE,ti:()=>AUTOSCROLL_TO,zu:()=>AUTOSCROLL_ENABLE_LIMIT}),cov_1hav8tsasw();const SIZE=(cov_1hav8tsasw().s[0]++,{S:"s",M:"m"}),BAR_HIDE_STRATEGY=(cov_1hav8tsasw().s[1]++,{Never:"never",Leave:"leave",Scroll:"scroll",Move:"move"}),RESIZE=(cov_1hav8tsasw().s[2]++,{None:"none",Horizontal:"horizontal",Vertical:"vertical",Both:"both"}),AUTOSCROLL_TO=(cov_1hav8tsasw().s[3]++,{Bottom:"bottom",Right:"right"}),BAR_AUTO_HIDE_DELAY_MS=(cov_1hav8tsasw().s[4]++,100),AUTOSCROLL_ENABLE_LIMIT=(cov_1hav8tsasw().s[5]++,2)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!./node_modules/sass-loader/dist/cjs.js!./packages/scroll/src/components/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,`.scroll--yFJG5{position:relative;z-index:0;box-sizing:border-box;width:100%;height:100%}.osThemeSnack .os-scrollbar{padding:0}.osThemeSnack[data-untouchable-scrollbars]>.os-scrollbar-vertical{pointer-events:none}.osThemeSnack[data-untouchable-scrollbars]>.os-scrollbar-vertical>.os-scrollbar-track{pointer-events:none}.osThemeSnack[data-untouchable-scrollbars]>.os-scrollbar-vertical>.os-scrollbar-track>.os-scrollbar-handle{pointer-events:none}.osThemeSnack[data-untouchable-scrollbars]>.os-scrollbar-horizontal{pointer-events:none}.osThemeSnack[data-untouchable-scrollbars]>.os-scrollbar-horizontal>.os-scrollbar-track{pointer-events:none}.osThemeSnack[data-untouchable-scrollbars]>.os-scrollbar-horizontal>.os-scrollbar-track>.os-scrollbar-handle{pointer-events:none}.osThemeSnack[data-size=s]>.os-scrollbar-vertical{width:var(--size-scroll-track-s, 8px);pointer-events:none;overflow:hidden}.osThemeSnack[data-size=s]>.os-scrollbar-vertical>.os-scrollbar-track>.os-scrollbar-handle{width:var(--size-scroll-slider-s, 4px);border-radius:var(--radius-scroll-slider-s, 2px)}.osThemeSnack[data-size=s]>.os-scrollbar-horizontal{height:var(--size-scroll-track-s, 8px);pointer-events:none;overflow:hidden}.osThemeSnack[data-size=s]>.os-scrollbar-horizontal>.os-scrollbar-track>.os-scrollbar-handle{height:var(--size-scroll-slider-s, 4px);border-radius:var(--radius-scroll-slider-s, 2px)}.osThemeSnack[data-size=s].os-host-resize-disabled>.os-scrollbar-horizontal{right:var(--size-scroll-track-s, 8px)}.osThemeSnack[data-size=s].os-host-resize-disabled.os-host-rtl>.os-scrollbar-horizontal{right:0;left:var(--size-scroll-track-s, 8px)}.osThemeSnack[data-size=s].os-host-resize-disabled>.os-scrollbar-vertical{bottom:var(--size-scroll-track-s, 8px)}.osThemeSnack[data-size=s]>.os-scrollbar-horizontal{right:var(--size-scroll-button-resize, 16px)}.osThemeSnack[data-size=s].os-host-rtl>.os-scrollbar-horizontal{right:0;left:var(--size-scroll-button-resize, 16px)}.osThemeSnack[data-size=s]>.os-scrollbar-vertical{bottom:var(--size-scroll-button-resize, 16px)}.osThemeSnack[data-size=m]>.os-scrollbar-vertical{width:var(--size-scroll-track-m, 16px);pointer-events:none;overflow:hidden}.osThemeSnack[data-size=m]>.os-scrollbar-vertical>.os-scrollbar-track>.os-scrollbar-handle{width:var(--size-scroll-slider-m, 6px);border-radius:var(--radius-scroll-slider-m, 4px)}.osThemeSnack[data-size=m]>.os-scrollbar-horizontal{height:var(--size-scroll-track-m, 16px);pointer-events:none;overflow:hidden}.osThemeSnack[data-size=m]>.os-scrollbar-horizontal>.os-scrollbar-track>.os-scrollbar-handle{height:var(--size-scroll-slider-m, 6px);border-radius:var(--radius-scroll-slider-m, 4px)}.osThemeSnack[data-size=m].os-host-resize-disabled>.os-scrollbar-horizontal{right:var(--size-scroll-track-m, 16px)}.osThemeSnack[data-size=m].os-host-resize-disabled.os-host-rtl>.os-scrollbar-horizontal{right:0;left:var(--size-scroll-track-m, 16px)}.osThemeSnack[data-size=m].os-host-resize-disabled>.os-scrollbar-vertical{bottom:var(--size-scroll-track-m, 16px)}.osThemeSnack[data-size=m]>.os-scrollbar-horizontal{right:var(--size-scroll-button-resize, 16px)}.osThemeSnack[data-size=m].os-host-rtl>.os-scrollbar-horizontal{right:0;left:var(--size-scroll-button-resize, 16px)}.osThemeSnack[data-size=m]>.os-scrollbar-vertical{bottom:var(--size-scroll-button-resize, 16px)}.osThemeSnack>.os-scrollbar-vertical>.os-scrollbar-track>.os-scrollbar-handle{opacity:var(--opacity-a032, 0.32);background-color:var(--sys-neutral-accent-default, #787b8a)}.osThemeSnack>.os-scrollbar-vertical>.os-scrollbar-track>.os-scrollbar-handle.active,.osThemeSnack>.os-scrollbar-vertical>.os-scrollbar-track>.os-scrollbar-handle:hover{opacity:var(--opacity-a064, 0.64);background-color:var(--sys-neutral-accent-default, #787b8a)}.osThemeSnack>.os-scrollbar-horizontal>.os-scrollbar-track>.os-scrollbar-handle{opacity:var(--opacity-a032, 0.32);background-color:var(--sys-neutral-accent-default, #787b8a)}.osThemeSnack>.os-scrollbar-horizontal>.os-scrollbar-track>.os-scrollbar-handle.active,.osThemeSnack>.os-scrollbar-horizontal>.os-scrollbar-track>.os-scrollbar-handle:hover{opacity:var(--opacity-a064, 0.64);background-color:var(--sys-neutral-accent-default, #787b8a)}.osThemeSnack>.os-scrollbar-vertical>.os-scrollbar-track>.os-scrollbar-handle{left:50%;translate:-50%}.osThemeSnack>.os-scrollbar-vertical>.os-scrollbar-track>.os-scrollbar-handle::before{right:-12px;left:-12px}.osThemeSnack>.os-scrollbar-horizontal>.os-scrollbar-track>.os-scrollbar-handle{top:50%;translate:0 -50%}.osThemeSnack>.os-scrollbar-horizontal>.os-scrollbar-track>.os-scrollbar-handle::before{top:-12px;bottom:-12px}.osThemeSnack>.os-scrollbar-corner{--bg-icon-mask: url(${___CSS_LOADER_URL_REPLACEMENT_0___});width:var(--size-scroll-button-resize, 16px);height:var(--size-scroll-button-resize, 16px);z-index:0;background-color:var(--sys-neutral-text-disabled, #aaaebd);background-image:unset;-webkit-mask-image:var(--bg-icon-mask);mask-image:var(--bg-icon-mask)}.osThemeSnack>.os-scrollbar-corner:hover{background-color:var(--sys-neutral-text-support, #6d707f)}.os-dragging .osThemeSnack>.os-scrollbar-corner:hover{background-color:var(--sys-primary-accent-default, #794ed3)}.osThemeSnack.os-host-resize-disabled>.os-scrollbar-corner{display:none}`,""]),___CSS_LOADER_EXPORT___.locals={scroll:"scroll--yFJG5"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=":module=>{module.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTMwMyAzLjQ2OTY3QzEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDQuMjM3NDQgMTMuNTMwMyA0LjUzMDMzTDQuNTMwMzMgMTMuNTMwM0M0LjIzNzQ0IDEzLjgyMzIgMy43NjI1NiAxMy44MjMyIDMuNDY5NjcgMTMuNTMwM0MzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMi43NjI2IDMuNDY5NjcgMTIuNDY5N0wxMi40Njk3IDMuNDY5NjdDMTIuNzYyNiAzLjE3Njc4IDEzLjIzNzQgMy4xNzY3OCAxMy41MzAzIDMuNDY5NjdaTTEzLjUzMDMgNy40Njk2N0MxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA4LjIzNzQ0IDEzLjUzMDMgOC41MzAzM0w4LjUzMDMzIDEzLjUzMDNDOC4yMzc0NCAxMy44MjMyIDcuNzYyNTYgMTMuODIzMiA3LjQ2OTY3IDEzLjUzMDNDNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTIuNzYyNiA3LjQ2OTY3IDEyLjQ2OTdMMTIuNDY5NyA3LjQ2OTY3QzEyLjc2MjYgNy4xNzY3OCAxMy4yMzc0IDcuMTc2NzggMTMuNTMwMyA3LjQ2OTY3Wk0xMy41MzAzIDEyLjUzMDNDMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTEuNzYyNiAxMy41MzAzIDExLjQ2OTdDMTMuMjM3NCAxMS4xNzY4IDEyLjc2MjYgMTEuMTc2OCAxMi40Njk3IDExLjQ2OTdMMTEuNDY5NyAxMi40Njk3QzExLjE3NjggMTIuNzYyNiAxMS4xNzY4IDEzLjIzNzQgMTEuNDY5NyAxMy41MzAzQzExLjc2MjYgMTMuODIzMiAxMi4yMzc0IDEzLjgyMzIgMTIuNTMwMyAxMy41MzAzTDEzLjUzMDMgMTIuNTMwM1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="}}]);