"use strict";(self.webpackChunksnack_uikit=self.webpackChunksnack_uikit||[]).push([[8841],{"./packages/list/src/components/Lists/Droplist/DropList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Droplist});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/list/node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),merge_refs__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./packages/list/node_modules/merge-refs/dist/esm/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_snack_uikit_dropdown__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./packages/dropdown/src/components/Dropdown.tsx"),_snack_uikit_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/utils/src/hooks/useValueControl.ts"),_constants__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/list/src/constants.ts"),_Items__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/list/src/components/Items/hooks.tsx"),_Items__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/list/src/components/Items/utils.ts"),_contexts__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/list/src/components/Lists/contexts/NewListProvider.tsx"),_contexts__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/list/src/components/Lists/contexts/SelectionProvider.tsx"),_contexts__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/list/src/components/Lists/contexts/CollapseProvider.tsx"),_contexts__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./packages/list/src/components/Lists/contexts/FocusListProvider.tsx"),_contexts__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./packages/list/src/components/Lists/contexts/OpenListProvider.tsx"),_hooks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/list/src/components/Lists/hooks.ts"),_ListPrivate__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./packages/list/src/components/Lists/ListPrivate/ListPrivate.tsx"),_styles_module_scss__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./packages/list/src/components/Lists/styles.module.scss"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_19q7t6vb9b(){var path="/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/list/src/components/Lists/Droplist/DropList.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/builds/sbercloud-ui/tokens-design-system/snack-uikit/packages/list/src/components/Lists/Droplist/DropList.tsx",statementMap:{0:{start:{line:22,column:73},end:{line:22,column:107}},1:{start:{line:49,column:20},end:{line:49,column:60}},2:{start:{line:49,column:34},end:{line:49,column:49}},3:{start:{line:51,column:58},end:{line:51,column:105}},4:{start:{line:52,column:33},end:{line:58,column:3}},5:{start:{line:54,column:6},end:{line:56,column:7}},6:{start:{line:55,column:8},end:{line:55,column:92}},7:{start:{line:55,column:51},end:{line:55,column:62}},8:{start:{line:60,column:34},end:{line:64,column:4}},9:{start:{line:66,column:38},end:{line:66,column:86}},10:{start:{line:70,column:65},end:{line:100,column:69}},11:{start:{line:71,column:19},end:{line:75,column:6}},12:{start:{line:76,column:18},end:{line:80,column:6}},13:{start:{line:81,column:22},end:{line:85,column:6}},14:{start:{line:87,column:25},end:{line:87,column:101}},15:{start:{line:88,column:30},end:{line:92,column:5}},16:{start:{line:94,column:4},end:{line:97,column:7}},17:{start:{line:95,column:6},end:{line:95,column:35}},18:{start:{line:96,column:6},end:{line:96,column:110}},19:{start:{line:99,column:4},end:{line:99,column:73}},20:{start:{line:102,column:31},end:{line:132,column:97}},21:{start:{line:103,column:41},end:{line:103,column:55}},22:{start:{line:105,column:24},end:{line:105,column:26}},23:{start:{line:106,column:32},end:{line:106,column:34}},24:{start:{line:108,column:4},end:{line:110,column:5}},25:{start:{line:109,column:6},end:{line:109,column:30}},26:{start:{line:112,column:4},end:{line:122,column:7}},27:{start:{line:113,column:26},end:{line:118,column:8}},28:{start:{line:120,column:6},end:{line:120,column:40}},29:{start:{line:121,column:6},end:{line:121,column:64}},30:{start:{line:124,column:4},end:{line:126,column:7}},31:{start:{line:125,column:6},end:{line:125,column:30}},32:{start:{line:128,column:4},end:{line:131,column:6}},33:{start:{line:134,column:25},end:{line:134,column:50}},34:{start:{line:135,column:18},end:{line:135,column:43}},35:{start:{line:136,column:22},end:{line:136,column:28}},36:{start:{line:139,column:4},end:{line:144,column:6}},37:{start:{line:146,column:28},end:{line:149,column:3}},38:{start:{line:147,column:39},end:{line:147,column:84}},39:{start:{line:151,column:27},end:{line:158,column:3}},40:{start:{line:153,column:6},end:{line:153,column:26}},41:{start:{line:155,column:6},end:{line:155,column:20}},42:{start:{line:160,column:20},end:{line:179,column:3}},43:{start:{line:162,column:6},end:{line:170,column:7}},44:{start:{line:163,column:8},end:{line:163,column:27}},45:{start:{line:164,column:8},end:{line:164,column:22}},46:{start:{line:166,column:8},end:{line:169,column:14}},47:{start:{line:167,column:10},end:{line:167,column:30}},48:{start:{line:168,column:10},end:{line:168,column:35}},49:{start:{line:172,column:6},end:{line:174,column:7}},50:{start:{line:173,column:8},end:{line:173,column:23}},51:{start:{line:176,column:6},end:{line:176,column:14}},52:{start:{line:181,column:18},end:{line:181,column:69}},53:{start:{line:181,column:32},end:{line:181,column:56}},54:{start:{line:183,column:33},end:{line:200,column:27}},55:{start:{line:184,column:4},end:{line:193,column:5}},56:{start:{line:185,column:20},end:{line:185,column:76}},57:{start:{line:187,column:6},end:{line:192,column:9}},58:{start:{line:190,column:10},end:{line:190,column:50}},59:{start:{line:195,column:4},end:{line:197,column:5}},60:{start:{line:196,column:6},end:{line:196,column:37}},61:{start:{line:199,column:4},end:{line:199,column:20}},62:{start:{line:202,column:2},end:{line:275,column:4}},63:{start:{line:229,column:18},end:{line:229,column:33}},64:{start:{line:230,column:18},end:{line:230,column:38}},65:{start:{line:231,column:18},end:{line:231,column:74}},66:{start:{line:249,column:24},end:{line:249,column:44}},67:{start:{line:251,column:24},end:{line:251,column:58}}},fnMap:{0:{name:"Droplist",decl:{start:{line:24,column:16},end:{line:24,column:24}},loc:{start:{line:48,column:18},end:{line:276,column:1}},line:48},1:{name:"(anonymous_1)",decl:{start:{line:49,column:28},end:{line:49,column:29}},loc:{start:{line:49,column:34},end:{line:49,column:49}},line:49},2:{name:"(anonymous_2)",decl:{start:{line:53,column:4},end:{line:53,column:5}},loc:{start:{line:54,column:6},end:{line:56,column:7}},line:54},3:{name:"(anonymous_3)",decl:{start:{line:54,column:28},end:{line:54,column:29}},loc:{start:{line:55,column:8},end:{line:55,column:92}},line:55},4:{name:"(anonymous_4)",decl:{start:{line:55,column:43},end:{line:55,column:44}},loc:{start:{line:55,column:51},end:{line:55,column:62}},line:55},5:{name:"(anonymous_5)",decl:{start:{line:70,column:73},end:{line:70,column:74}},loc:{start:{line:70,column:79},end:{line:100,column:3}},line:70},6:{name:"(anonymous_6)",decl:{start:{line:94,column:41},end:{line:94,column:42}},loc:{start:{line:94,column:49},end:{line:97,column:5}},line:94},7:{name:"(anonymous_7)",decl:{start:{line:102,column:39},end:{line:102,column:40}},loc:{start:{line:102,column:45},end:{line:132,column:3}},line:102},8:{name:"(anonymous_8)",decl:{start:{line:112,column:39},end:{line:112,column:40}},loc:{start:{line:112,column:86},end:{line:122,column:5}},line:112},9:{name:"(anonymous_9)",decl:{start:{line:124,column:24},end:{line:124,column:25}},loc:{start:{line:124,column:38},end:{line:126,column:5}},line:124},10:{name:"(anonymous_10)",decl:{start:{line:147,column:4},end:{line:147,column:5}},loc:{start:{line:147,column:39},end:{line:147,column:84}},line:147},11:{name:"(anonymous_11)",decl:{start:{line:152,column:4},end:{line:152,column:5}},loc:{start:{line:152,column:23},end:{line:156,column:5}},line:152},12:{name:"(anonymous_12)",decl:{start:{line:161,column:4},end:{line:161,column:5}},loc:{start:{line:161,column:85},end:{line:177,column:5}},line:161},13:{name:"(anonymous_13)",decl:{start:{line:166,column:19},end:{line:166,column:20}},loc:{start:{line:166,column:25},end:{line:169,column:9}},line:166},14:{name:"(anonymous_14)",decl:{start:{line:181,column:26},end:{line:181,column:27}},loc:{start:{line:181,column:32},end:{line:181,column:56}},line:181},15:{name:"(anonymous_15)",decl:{start:{line:183,column:41},end:{line:183,column:42}},loc:{start:{line:183,column:47},end:{line:200,column:3}},line:183},16:{name:"(anonymous_16)",decl:{start:{line:189,column:19},end:{line:189,column:20}},loc:{start:{line:189,column:54},end:{line:191,column:9}},line:189},17:{name:"(anonymous_17)",decl:{start:{line:228,column:31},end:{line:228,column:32}},loc:{start:{line:228,column:37},end:{line:232,column:17}},line:228},18:{name:"(anonymous_18)",decl:{start:{line:248,column:31},end:{line:248,column:32}},loc:{start:{line:248,column:36},end:{line:252,column:23}},line:248}},branchMap:{0:{loc:{start:{line:27,column:13},end:{line:27,column:31}},type:"default-arg",locations:[{start:{line:27,column:29},end:{line:27,column:31}}],line:27},1:{loc:{start:{line:28,column:10},end:{line:28,column:25}},type:"default-arg",locations:[{start:{line:28,column:23},end:{line:28,column:25}}],line:28},2:{loc:{start:{line:37,column:2},end:{line:37,column:15}},type:"default-arg",locations:[{start:{line:37,column:13},end:{line:37,column:15}}],line:37},3:{loc:{start:{line:41,column:2},end:{line:41,column:12}},type:"default-arg",locations:[{start:{line:41,column:9},end:{line:41,column:12}}],line:41},4:{loc:{start:{line:42,column:2},end:{line:42,column:15}},type:"default-arg",locations:[{start:{line:42,column:11},end:{line:42,column:15}}],line:42},5:{loc:{start:{line:43,column:2},end:{line:43,column:34}},type:"default-arg",locations:[{start:{line:43,column:29},end:{line:43,column:34}}],line:43},6:{loc:{start:{line:46,column:2},end:{line:46,column:31}},type:"default-arg",locations:[{start:{line:46,column:26},end:{line:46,column:31}}],line:46},7:{loc:{start:{line:51,column:9},end:{line:51,column:31}},type:"default-arg",locations:[{start:{line:51,column:29},end:{line:51,column:31}}],line:51},8:{loc:{start:{line:55,column:8},end:{line:55,column:92}},type:"cond-expr",locations:[{start:{line:55,column:30},end:{line:55,column:63}},{start:{line:55,column:66},end:{line:55,column:92}}],line:55},9:{loc:{start:{line:55,column:67},end:{line:55,column:78}},type:"binary-expr",locations:[{start:{line:55,column:67},end:{line:55,column:72}},{start:{line:55,column:76},end:{line:55,column:78}}],line:55},10:{loc:{start:{line:60,column:9},end:{line:60,column:21}},type:"default-arg",locations:[{start:{line:60,column:16},end:{line:60,column:21}}],line:60},11:{loc:{start:{line:108,column:4},end:{line:110,column:5}},type:"if",locations:[{start:{line:108,column:4},end:{line:110,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:108},12:{loc:{start:{line:140,column:15},end:{line:140,column:51}},type:"binary-expr",locations:[{start:{line:140,column:15},end:{line:140,column:33}},{start:{line:140,column:37},end:{line:140,column:51}}],line:140},13:{loc:{start:{line:162,column:6},end:{line:170,column:7}},type:"if",locations:[{start:{line:162,column:6},end:{line:170,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:162},14:{loc:{start:{line:172,column:6},end:{line:174,column:7}},type:"if",locations:[{start:{line:172,column:6},end:{line:174,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:172},15:{loc:{start:{line:184,column:4},end:{line:193,column:5}},type:"if",locations:[{start:{line:184,column:4},end:{line:193,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:184},16:{loc:{start:{line:185,column:20},end:{line:185,column:76}},type:"cond-expr",locations:[{start:{line:185,column:57},end:{line:185,column:71}},{start:{line:185,column:74},end:{line:185,column:76}}],line:185},17:{loc:{start:{line:195,column:4},end:{line:197,column:5}},type:"if",locations:[{start:{line:195,column:4},end:{line:197,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:195},18:{loc:{start:{line:231,column:19},end:{line:231,column:55}},type:"binary-expr",locations:[{start:{line:231,column:19},end:{line:231,column:37}},{start:{line:231,column:41},end:{line:231,column:55}}],line:231},19:{loc:{start:{line:264,column:28},end:{line:264,column:111}},type:"cond-expr",locations:[{start:{line:264,column:50},end:{line:264,column:64}},{start:{line:264,column:67},end:{line:264,column:111}}],line:264},20:{loc:{start:{line:264,column:67},end:{line:264,column:111}},type:"binary-expr",locations:[{start:{line:264,column:68},end:{line:264,column:75}},{start:{line:264,column:79},end:{line:264,column:97}},{start:{line:264,column:102},end:{line:264,column:111}}],line:264}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0,32:0,33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0,41:0,42:0,43:0,44:0,45:0,46:0,47:0,48:0,49:0,50:0,51:0,52:0,53:0,54:0,55:0,56:0,57:0,58:0,59:0,60:0,61:0,62:0,63:0,64:0,65:0,66:0,67:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0],5:[0],6:[0],7:[0],8:[0,0],9:[0,0],10:[0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"33d1f4106bd62d9dbdc4808d8d5b9fd90f8c26ff"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"33d1f4106bd62d9dbdc4808d8d5b9fd90f8c26ff"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_19q7t6vb9b=function(){return actualCoverage},actualCoverage}cov_19q7t6vb9b();const DEFAULT_FALLBACK_PLACEMENTS=(cov_19q7t6vb9b().s[0]++,["top","right","bottom","left"]);function Droplist(_ref){let{items:itemsProp,search,pinBottom:pinBottomProp=(cov_19q7t6vb9b().b[0][0]++,[]),pinTop:pinTopProp=(cov_19q7t6vb9b().b[1][0]++,[]),footerActiveElementsRefs,children,trigger,placement,widthStrategy,triggerElemRef:triggerElemRefProp,open:openProp,onOpenChange,collapse=(cov_19q7t6vb9b().b[2][0]++,{}),triggerClassName,selection,contentRender,size=(cov_19q7t6vb9b().b[3][0]++,"s"),marker=(cov_19q7t6vb9b().b[4][0]++,!0),closeDroplistOnItemClick=(cov_19q7t6vb9b().b[5][0]++,!1),className,listRef:listRefProp,untouchableScrollbars=(cov_19q7t6vb9b().b[6][0]++,!1),...props}=_ref;cov_19q7t6vb9b().f[0]++;const hasSearch=(cov_19q7t6vb9b().s[1]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>(cov_19q7t6vb9b().f[1]++,cov_19q7t6vb9b().s[2]++,Boolean(search))),[search])),[openCollapseItems=(cov_19q7t6vb9b().b[7][0]++,[]),setOpenCollapsedItems]=(cov_19q7t6vb9b().s[3]++,(0,_snack_uikit_utils__WEBPACK_IMPORTED_MODULE_3__.I)(collapse)),toggleOpenCollapseItem=(cov_19q7t6vb9b().s[4]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id=>(cov_19q7t6vb9b().f[2]++,cov_19q7t6vb9b().s[5]++,setOpenCollapsedItems((items=>(cov_19q7t6vb9b().f[3]++,cov_19q7t6vb9b().s[6]++,items?.includes(id)?(cov_19q7t6vb9b().b[8][0]++,items.filter((item=>(cov_19q7t6vb9b().f[4]++,cov_19q7t6vb9b().s[7]++,item!==id)))):(cov_19q7t6vb9b().b[8][1]++,(cov_19q7t6vb9b().b[9][0]++,items??(cov_19q7t6vb9b().b[9][1]++,[])).concat([id]))))))),[setOpenCollapsedItems])),[open=(cov_19q7t6vb9b().b[10][0]++,!1),setOpen]=(cov_19q7t6vb9b().s[8]++,(0,_snack_uikit_utils__WEBPACK_IMPORTED_MODULE_3__.I)({value:openProp,defaultValue:!1,onChange:onOpenChange})),{searchItem,footerItems}=(cov_19q7t6vb9b().s[9]++,(0,_Items__WEBPACK_IMPORTED_MODULE_4__.nG)({footerActiveElementsRefs})),{flattenItems,focusFlattenItems,...memorizedItems}=(cov_19q7t6vb9b().s[10]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{cov_19q7t6vb9b().f[5]++;const pinTop=(cov_19q7t6vb9b().s[11]++,(0,_Items__WEBPACK_IMPORTED_MODULE_5__.lg)({items:pinTopProp,prefix:_constants__WEBPACK_IMPORTED_MODULE_6__.$.pinTop,parentId:_constants__WEBPACK_IMPORTED_MODULE_6__.$.default})),items=(cov_19q7t6vb9b().s[12]++,(0,_Items__WEBPACK_IMPORTED_MODULE_5__.lg)({items:itemsProp,prefix:_constants__WEBPACK_IMPORTED_MODULE_6__.$.default,parentId:_constants__WEBPACK_IMPORTED_MODULE_6__.$.default})),pinBottom=(cov_19q7t6vb9b().s[13]++,(0,_Items__WEBPACK_IMPORTED_MODULE_5__.lg)({items:pinBottomProp,prefix:_constants__WEBPACK_IMPORTED_MODULE_6__.$.pinBottom,parentId:_constants__WEBPACK_IMPORTED_MODULE_6__.$.default})),flattenItems=(cov_19q7t6vb9b().s[14]++,{...pinTop.flattenItems,...pinBottom.flattenItems,...items.flattenItems}),focusFlattenItems=(cov_19q7t6vb9b().s[15]++,{...pinTop.focusFlattenItems,...pinBottom.focusFlattenItems,...items.focusFlattenItems});return cov_19q7t6vb9b().s[16]++,[...footerItems,searchItem].forEach((item=>{cov_19q7t6vb9b().f[6]++,cov_19q7t6vb9b().s[17]++,flattenItems[item.id]=item,cov_19q7t6vb9b().s[18]++,focusFlattenItems[item.id]={...item,originalId:item.id,items:[],key:item.id,allChildIds:[]}})),cov_19q7t6vb9b().s[19]++,{items,pinTop,pinBottom,flattenItems,focusFlattenItems}}),[itemsProp,pinTopProp,pinBottomProp,searchItem,footerItems])),{ids,expandedIds}=(cov_19q7t6vb9b().s[20]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{cov_19q7t6vb9b().f[7]++;const{pinTop,items,pinBottom}=(cov_19q7t6vb9b().s[21]++,memorizedItems);let ids=(cov_19q7t6vb9b().s[22]++,[]),expandedIds=(cov_19q7t6vb9b().s[23]++,[]);return cov_19q7t6vb9b().s[24]++,hasSearch?(cov_19q7t6vb9b().b[11][0]++,cov_19q7t6vb9b().s[25]++,ids.push(searchItem.id)):cov_19q7t6vb9b().b[11][1]++,cov_19q7t6vb9b().s[26]++,[pinTop,items,pinBottom].forEach((_ref2=>{let{focusFlattenItems,focusCloseChildIds}=_ref2;cov_19q7t6vb9b().f[8]++;const activeItems=(cov_19q7t6vb9b().s[27]++,(0,_Items__WEBPACK_IMPORTED_MODULE_5__.e)({focusFlattenItems,focusCloseChildIds,openCollapseItems,isSelectionMultiple:"multiple"===selection?.mode}));cov_19q7t6vb9b().s[28]++,ids=ids.concat(activeItems.ids),cov_19q7t6vb9b().s[29]++,expandedIds=expandedIds.concat(activeItems.expandedIds)})),cov_19q7t6vb9b().s[30]++,footerItems.forEach((footerItem=>{cov_19q7t6vb9b().f[9]++,cov_19q7t6vb9b().s[31]++,ids.push(footerItem.id)})),cov_19q7t6vb9b().s[32]++,{ids,expandedIds}}),[footerItems,hasSearch,memorizedItems,openCollapseItems,searchItem.id,selection?.mode])),triggerElemRef=(cov_19q7t6vb9b().s[33]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)),listRef=(cov_19q7t6vb9b().s[34]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null)),firstItemId=(cov_19q7t6vb9b().s[35]++,ids[0]),{handleListKeyDownFactory,resetActiveItemId,activeItemId,forceUpdateActiveItemId}=(cov_19q7t6vb9b().s[36]++,(0,_hooks__WEBPACK_IMPORTED_MODULE_7__.d)({mainRef:(cov_19q7t6vb9b().b[12][0]++,triggerElemRefProp??(cov_19q7t6vb9b().b[12][1]++,triggerElemRef)),focusFlattenItems,hasListInFocusChain:!0,firstItemId})),handleListKeyDown=(cov_19q7t6vb9b().s[37]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e=>(cov_19q7t6vb9b().f[10]++,cov_19q7t6vb9b().s[38]++,handleListKeyDownFactory(ids,expandedIds)(e))),[handleListKeyDownFactory,ids,expandedIds])),handleOpenChange=(cov_19q7t6vb9b().s[39]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((open=>{cov_19q7t6vb9b().f[11]++,cov_19q7t6vb9b().s[40]++,resetActiveItemId(),cov_19q7t6vb9b().s[41]++,setOpen(open)}),[resetActiveItemId,setOpen])),onKeyDown=(cov_19q7t6vb9b().s[42]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(((e,cb)=>{cov_19q7t6vb9b().f[12]++,cov_19q7t6vb9b().s[43]++,"ArrowDown"===e.key?(cov_19q7t6vb9b().b[13][0]++,cov_19q7t6vb9b().s[44]++,e.preventDefault(),cov_19q7t6vb9b().s[45]++,setOpen(!0),cov_19q7t6vb9b().s[46]++,setTimeout((()=>{cov_19q7t6vb9b().f[13]++,cov_19q7t6vb9b().s[47]++,resetActiveItemId(),cov_19q7t6vb9b().s[48]++,listRef.current?.focus()}),0)):cov_19q7t6vb9b().b[13][1]++,cov_19q7t6vb9b().s[49]++,"ArrowUp"===e.key?(cov_19q7t6vb9b().b[14][0]++,cov_19q7t6vb9b().s[50]++,setOpen(!1)):cov_19q7t6vb9b().b[14][1]++,cov_19q7t6vb9b().s[51]++,cb?.(e)}),[resetActiveItemId,setOpen])),isValid=(cov_19q7t6vb9b().s[52]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>(cov_19q7t6vb9b().f[14]++,cov_19q7t6vb9b().s[53]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(children))),[children])),triggerElem=(cov_19q7t6vb9b().s[54]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>{if(cov_19q7t6vb9b().f[15]++,cov_19q7t6vb9b().s[55]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(children)){cov_19q7t6vb9b().b[15][0]++;const props=(cov_19q7t6vb9b().s[56]++,"object"==typeof children.props?(cov_19q7t6vb9b().b[16][0]++,children.props):(cov_19q7t6vb9b().b[16][1]++,{}));return cov_19q7t6vb9b().s[57]++,(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(children,{...props,onKeyDown:e=>{cov_19q7t6vb9b().f[16]++,cov_19q7t6vb9b().s[58]++,onKeyDown(e,children.props?.onKeyDown)}})}return cov_19q7t6vb9b().b[15][1]++,cov_19q7t6vb9b().s[59]++,"function"==typeof children?(cov_19q7t6vb9b().b[17][0]++,cov_19q7t6vb9b().s[60]++,children({onKeyDown})):(cov_19q7t6vb9b().b[17][1]++,cov_19q7t6vb9b().s[61]++,children)}),[onKeyDown,children]));return cov_19q7t6vb9b().s[62]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts__WEBPACK_IMPORTED_MODULE_8__.Tr,{flattenItems,focusFlattenItems,contentRender,size,marker,firstItemId,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts__WEBPACK_IMPORTED_MODULE_9__.WM,{...selection,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts__WEBPACK_IMPORTED_MODULE_10__.bN.Provider,{value:{openCollapseItems,toggleOpenCollapseItem},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts__WEBPACK_IMPORTED_MODULE_11__.m.Provider,{value:{activeItemId,handleListKeyDownFactory,forceUpdateActiveItemId},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_contexts__WEBPACK_IMPORTED_MODULE_12__.K.Provider,{value:{closeDroplistOnItemClick,closeDroplist:()=>{cov_19q7t6vb9b().f[17]++,cov_19q7t6vb9b().s[63]++,setOpen(!1),cov_19q7t6vb9b().s[64]++,resetActiveItemId(),cov_19q7t6vb9b().s[65]++,(cov_19q7t6vb9b().b[18][0]++,triggerElemRefProp??(cov_19q7t6vb9b().b[18][1]++,triggerElemRef)).current?.focus()}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_snack_uikit_dropdown__WEBPACK_IMPORTED_MODULE_13__.m,{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_14__.A.wrapper,className),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ListPrivate__WEBPACK_IMPORTED_MODULE_15__.Q,{...props,items:memorizedItems.items.focusCloseChildIds,pinTop:memorizedItems.pinTop.focusCloseChildIds,pinBottom:memorizedItems.pinBottom.focusCloseChildIds,onKeyDown:handleListKeyDown,searchItem,tabIndex:0,ref:(0,merge_refs__WEBPACK_IMPORTED_MODULE_16__.A)(listRef,listRefProp),search,onFocus:e=>{cov_19q7t6vb9b().f[18]++,cov_19q7t6vb9b().s[66]++,e.stopPropagation(),cov_19q7t6vb9b().s[67]++,forceUpdateActiveItemId?.(ids[0])},limitedScrollHeight:!0,untouchableScrollbars})}),outsideClick:!0,triggerClassName,fallbackPlacements:DEFAULT_FALLBACK_PLACEMENTS,trigger,placement,widthStrategy,triggerRef:triggerElemRefProp?(cov_19q7t6vb9b().b[19][1]++,cov_19q7t6vb9b().b[20][0]++,isValid&&(cov_19q7t6vb9b().b[20][1]++,triggerElemRefProp)||void cov_19q7t6vb9b().b[20][2]++):(cov_19q7t6vb9b().b[19][0]++,triggerElemRef),open,onOpenChange:handleOpenChange,children:triggerElem})})})})})})}try{Droplist.displayName="Droplist",Droplist.__docgenInfo={description:"",displayName:"Droplist",props:{triggerElemRef:{defaultValue:null,description:"Ссылка на элемент-триггер для дроплиста",name:"triggerElemRef",required:!1,type:{name:"RefObject<HTMLElement>"}},listRef:{defaultValue:null,description:"Ссылка на элемент выпадающего списка",name:"listRef",required:!1,type:{name:"RefObject<HTMLElement>"}},closeDroplistOnItemClick:{defaultValue:{value:"false"},description:"Закрывать выпадающий список после клика на базовый айтем.\n\nРаботает в режимах selection: 'none' | 'single'",name:"closeDroplistOnItemClick",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Триггер для дроплиста",name:"children",required:!0,type:{name:"ReactNode | ({onKeyDown}) => ReactNode * Рендер функция принимает аргументы `onKeyDown` - хендлер ввода, для поддержки управления с клавиатуры"}},open:{defaultValue:null,description:"Управляет состоянием показан/не показан.",name:"open",required:!1,type:{name:"boolean"}},triggerClassName:{defaultValue:null,description:"CSS-класс триггера",name:"triggerClassName",required:!1,type:{name:"string"}},onOpenChange:{defaultValue:null,description:"Колбек отображения компонента. Срабатывает при изменении состояния open.",name:"onOpenChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},trigger:{defaultValue:null,description:"Условие отображения поповера:\n<br> - `click` - открывать по клику\n<br> - `hover` - открывать по ховеру\n<br> - `focusVisible` - открывать по focus-visible\n<br> - `focus` - открывать по фокусу\n<br> - `hoverAndFocusVisible` - открывать по ховеру и focus-visible\n<br> - `hoverAndFocus` - открывать по ховеру и фокусу\n<br> - `clickAndFocusVisible` - открывать по клику и focus-visible",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'},{value:'"focusVisible"'},{value:'"focus"'},{value:'"hoverAndFocusVisible"'},{value:'"hoverAndFocus"'},{value:'"clickAndFocusVisible"'}]}},placement:{defaultValue:{value:"top"},description:"Положение поповера относительно своего триггера (children).",name:"placement",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},widthStrategy:{defaultValue:{value:"auto"},description:"Стратегия управления шириной контейнера поповера\n<br> - `auto` - соответствует ширине контента,\n<br> - `gte` - Great Than or Equal, равен ширине таргета или больше ее, если контент в поповере шире,\n<br> - `eq` - Equal, строго равен ширине таргета.",name:"widthStrategy",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"gte"'},{value:'"eq"'}]}},"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"Основные элементы списка",name:"items",required:!0,type:{name:"Item[]"}},size:{defaultValue:{value:"s"},description:"Размер списка",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},loading:{defaultValue:null,description:"Флаг, отвещающий за состояние загрузки списка",name:"loading",required:!1,type:{name:"boolean"}},footer:{defaultValue:null,description:"Кастомизируемый элемент в конце списка",name:"footer",required:!1,type:{name:"ReactNode ;"}},onScroll:{defaultValue:null,description:"Колбек на скролл прокручиваемого списка",name:"onScroll",required:!1,type:{name:"((event?: Event) => void)"}},pinTop:{defaultValue:null,description:"Элементы списка, закрепленные сверху",name:"pinTop",required:!1,type:{name:"Item[]"}},pinBottom:{defaultValue:null,description:"Элементы списка, закрепленные снизу",name:"pinBottom",required:!1,type:{name:"Item[]"}},footerActiveElementsRefs:{defaultValue:null,description:"Список ссылок на кастомные элементы, помещенные в специальную секцию внизу списка",name:"footerActiveElementsRefs",required:!1,type:{name:"RefObject<HTMLElement>[]"}},search:{defaultValue:null,description:"Настройки поисковой строки",name:"search",required:!1,type:{name:"SearchState"}},collapse:{defaultValue:{value:"{}"},description:"Настройки раскрытия элементов",name:"collapse",required:!1,type:{name:"CollapseState"}},scrollToSelectedItem:{defaultValue:null,description:"Флаг, отвещающий за прокручивание до выбранного элемента",name:"scrollToSelectedItem",required:!1,type:{name:"boolean"}},selection:{defaultValue:null,description:"",name:"selection",required:!1,type:{name:"SelectionSingleState | SelectionMultipleState"}},marker:{defaultValue:{value:"true"},description:"Отображать ли маркер у выбранного жлемента списка",name:"marker",required:!1,type:{name:"boolean"}},contentRender:{defaultValue:null,description:"Рендер функция основного контента айтема",name:"contentRender",required:!1,type:{name:"((props: ContentRenderProps) => ReactNode)"}},scroll:{defaultValue:null,description:"Включить ли скролл для основной части списка",name:"scroll",required:!1,type:{name:"boolean"}},scrollRef:{defaultValue:null,description:"Ссылка на элемент, обозначающий самый конец прокручиваемого списка",name:"scrollRef",required:!1,type:{name:"RefObject<HTMLElement>"}},scrollContainerRef:{defaultValue:null,description:"Ссылка на контейнер, который скроллится",name:"scrollContainerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},untouchableScrollbars:{defaultValue:{value:"false"},description:"Отключает возможность взаимодействовать со скролбарами мышью.",name:"untouchableScrollbars",required:!1,type:{name:"boolean"}},dataFiltered:{defaultValue:null,description:"",name:"dataFiltered",required:!1,type:{name:"boolean"}},dataError:{defaultValue:null,description:"",name:"dataError",required:!1,type:{name:"boolean"}},noDataState:{defaultValue:null,description:"Экран при отстутствии данных",name:"noDataState",required:!1,type:{name:"EmptyStateProps"}},noResultsState:{defaultValue:null,description:"Экран при отстутствии результатов поиска или фильтров",name:"noResultsState",required:!1,type:{name:"EmptyStateProps"}},errorDataState:{defaultValue:null,description:"Экран при ошибке запроса",name:"errorDataState",required:!1,type:{name:"EmptyStateProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/list/src/components/Lists/Droplist/DropList.tsx#Droplist"]={docgenInfo:Droplist.__docgenInfo,name:"Droplist",path:"packages/list/src/components/Lists/Droplist/DropList.tsx#Droplist"})}catch(__react_docgen_typescript_loader_error){}}}]);