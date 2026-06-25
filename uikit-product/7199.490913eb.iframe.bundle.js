"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7199],{"./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/TimePicker.js"(ee,L,e){e.d(L,{A:()=>z});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=e.n(x),C=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),b=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),S=e("./node_modules/.pnpm/@snack-uikit+locale@0.16.0/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),G=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),Z=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),O=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js"),q=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Footer/Footer.js"),T=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/TimePickerBase/TimePickerBase.js"),N=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/hooks.js"),oe=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/utils.js"),de=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),F=e.n(de),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),He=e.n(X),Me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Te=e.n(Me),Ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),ve=e.n(Ke),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Pe=e.n(A),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n(J),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/styles.module.css"),M={};M.styleTagTransform=R(),M.setAttributes=ve(),M.insert=Te().bind(null,"head"),M.domAPI=He(),M.insertStyleElement=Pe();var H=F()(h.A,M);const je=h.A&&h.A.locals?h.A.locals:void 0,ke=new Date,Se=()=>{};function z({className:D,size:me=Z.SK.M,fitToContainer:se=!0,value:ce,defaultValue:be,onChangeValue:ze,onFocusLeave:ae,"data-test-id":ye,navigationStartRef:Ie,showSeconds:ie=!0,today:P,footerMode:B="current-time-and-apply"}){const[Y,I]=(0,b.iC)(ce,be,ze),W=(0,G.A)(I),[$,ge]=(0,C.useState)(),[Ae,Ee]=(0,C.useState)(void 0),Le=typeof P=="number"?new Date(P):P;(0,C.useEffect)(()=>{var ut,_t,at;if(!($!=null&&$[0]))return;const jt=(ut=$[0].getHours())!==null&&ut!==void 0?ut:0,ot=(_t=$[0].getMinutes())!==null&&_t!==void 0?_t:0,te=(at=$[0].getSeconds())!==null&&at!==void 0?at:0;W({hours:jt,minutes:ot,seconds:te})},[$,W]);const Ce=(0,C.useCallback)(ut=>{const _t=ut[0];ge([_t,_t])},[]),{dateAndTime:re,onTimeChange:V,onDateChange:le,onDateAndTimeChange:we,isDateFilled:ne,isTimeFilled:ue,isDateAndTimeFilled:nt}=(0,N.O)({showSeconds:ie,value:Y}),qe=(0,C.useRef)(null),Xe=(0,C.useRef)(null),Je=(0,C.useRef)({focusItem:()=>{}}),Re=(0,C.useRef)({focusItem:()=>{}}),et=(0,C.useRef)({focusItem:()=>{}}),ct=(0,C.useMemo)(()=>(0,oe.D5)(ye),[ye]),{lang:rt}=(0,S.Ym)(),$e=(0,C.useMemo)(()=>(0,oe.JK)({localeProp:Z.Xn,ctxLang:rt}),[rt]);return(0,l.jsx)("div",{className:d()(je.timePickerWrapper,D),"data-fit-to-container":se||void 0,"data-test-id":ye,children:(0,l.jsxs)(O.Y.Provider,{value:{mode:"time",locale:$e,size:me,value:$,fitToContainer:se,focus:Ae,setValue:Ce,setFocus:Ee,getTestId:ct,onFocusLeave:ae,navigationStartRef:Ie,showSeconds:ie,footerMode:B,dateAndTime:re,onTimeChange:V,onDateAndTimeChange:we,isTimeFilled:ue,applyButtonRef:qe,currentButtonRef:Xe,hoursKeyboardNavigationRef:Je,minutesKeyboardNavigationRef:Re,secondsKeyboardNavigationRef:et,today:Le,viewMode:"month",showHolidays:!1,viewDate:ke,referenceDate:ke,preselectedRange:void 0,viewShift:0,setViewMode:Se,setViewShift:Se,startPreselect:Se,continuePreselect:Se,completePreselect:Se,restartPreselect:Se,buildCellProps:()=>({isDisabled:!1,isHoliday:!1}),onDateChange:le,isDateAndTimeFilled:nt,isDateFilled:ne},children:[(0,l.jsx)(T.j,{showDivider:!1}),(0,l.jsx)(q.w,{})]})})}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldColor/FieldColor.js"(ee,L,e){e.d(L,{i:()=>_n});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),b=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),S=e.n(b),G,Z,O,q;function T(){return(T=Object.assign||function(a){for(var _=1;_<arguments.length;_++){var y=arguments[_];for(var w in y)Object.prototype.hasOwnProperty.call(y,w)&&(a[w]=y[w])}return a}).apply(this,arguments)}function N(a,_){if(a==null)return{};var y,w,U={},Q=Object.keys(a);for(w=0;w<Q.length;w++)_.indexOf(y=Q[w])>=0||(U[y]=a[y]);return U}function oe(a){var _=(0,d.useRef)(a),y=(0,d.useRef)(function(w){_.current&&_.current(w)});return _.current=a,y.current}var de=function(a,_,y){return _===void 0&&(_=0),y===void 0&&(y=1),a>y?y:a<_?_:a},F=function(a){return"touches"in a},X=function(a){return a&&a.ownerDocument.defaultView||self},He=function(a,_,y){var w=a.getBoundingClientRect(),U=F(_)?(function(Q,_e){for(var Be=0;Be<Q.length;Be++)if(Q[Be].identifier===_e)return Q[Be];return Q[0]})(_.touches,y):_;return{left:de((U.pageX-(w.left+X(a).pageXOffset))/w.width),top:de((U.pageY-(w.top+X(a).pageYOffset))/w.height)}},Me=function(a){!F(a)&&a.preventDefault()},Te=d.memo(function(a){var _=a.onMove,y=a.onKey,w=N(a,["onMove","onKey"]),U=(0,d.useRef)(null),Q=oe(_),_e=oe(y),Be=(0,d.useRef)(null),Ze=(0,d.useRef)(!1),fe=(0,d.useMemo)(function(){var Yt=function(Pt){Me(Pt),(F(Pt)?Pt.touches.length>0:Pt.buttons>0)&&U.current?Q(He(U.current,Pt,Be.current)):bt(!1)},ts=function(){return bt(!1)};function bt(Pt){var wt=Ze.current,Kt=X(U.current),ft=Pt?Kt.addEventListener:Kt.removeEventListener;ft(wt?"touchmove":"mousemove",Yt),ft(wt?"touchend":"mouseup",ts)}return[function(Pt){var wt=Pt.nativeEvent,Kt=U.current;if(Kt&&(Me(wt),!(function(Ut,ys){return ys&&!F(Ut)})(wt,Ze.current)&&Kt)){if(F(wt)){Ze.current=!0;var ft=wt.changedTouches||[];ft.length&&(Be.current=ft[0].identifier)}Kt.focus(),Q(He(Kt,wt,Be.current)),bt(!0)}},function(Pt){var wt=Pt.which||Pt.keyCode;wt<37||wt>40||(Pt.preventDefault(),_e({left:wt===39?.05:wt===37?-.05:0,top:wt===40?.05:wt===38?-.05:0}))},bt]},[_e,Q]),Fe=fe[0],it=fe[1],Mt=fe[2];return(0,d.useEffect)(function(){return Mt},[Mt]),d.createElement("div",T({},w,{onTouchStart:Fe,onMouseDown:Fe,className:"react-colorful__interactive",ref:U,onKeyDown:it,tabIndex:0,role:"slider"}))}),Ke=function(a){return a.filter(Boolean).join(" ")},ve=function(a){var _=a.color,y=a.left,w=a.top,U=w===void 0?.5:w,Q=Ke(["react-colorful__pointer",a.className]);return d.createElement("div",{className:Q,style:{top:100*U+"%",left:100*y+"%"}},d.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:_}}))},A=function(a,_,y){return _===void 0&&(_=0),y===void 0&&(y=Math.pow(10,_)),Math.round(y*a)/y},Pe={grad:.9,turn:360,rad:360/(2*Math.PI)},J=function(a){return Ie(R(a))},R=function(a){return a[0]==="#"&&(a=a.substring(1)),a.length<6?{r:parseInt(a[0]+a[0],16),g:parseInt(a[1]+a[1],16),b:parseInt(a[2]+a[2],16),a:a.length===4?A(parseInt(a[3]+a[3],16)/255,2):1}:{r:parseInt(a.substring(0,2),16),g:parseInt(a.substring(2,4),16),b:parseInt(a.substring(4,6),16),a:a.length===8?A(parseInt(a.substring(6,8),16)/255,2):1}},h=function(a,_){return _===void 0&&(_="deg"),Number(a)*(Pe[_]||1)},M=function(a){var _=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(a);return _?je({h:h(_[1],_[2]),s:Number(_[3]),l:Number(_[4]),a:_[5]===void 0?1:Number(_[5])/(_[6]?100:1)}):{h:0,s:0,v:0,a:1}},H=null,je=function(a){var _=a.s,y=a.l;return{h:a.h,s:(_*=(y<50?y:100-y)/100)>0?2*_/(y+_)*100:0,v:y+_,a:a.a}},ke=function(a){return ye(me(a))},Se=function(a){var _=a.s,y=a.v,w=a.a,U=(200-_)*y/100;return{h:A(a.h),s:A(U>0&&U<200?_*y/100/(U<=100?U:200-U)*100:0),l:A(U/2),a:A(w,2)}},z=function(a){var _=Se(a);return"hsl("+_.h+", "+_.s+"%, "+_.l+"%)"},D=function(a){var _=Se(a);return"hsla("+_.h+", "+_.s+"%, "+_.l+"%, "+_.a+")"},me=function(a){var _=a.h,y=a.s,w=a.v,U=a.a;_=_/360*6,y/=100,w/=100;var Q=Math.floor(_),_e=w*(1-y),Be=w*(1-(_-Q)*y),Ze=w*(1-(1-_+Q)*y),fe=Q%6;return{r:A(255*[w,Be,_e,_e,Ze,w][fe]),g:A(255*[Ze,w,w,Be,_e,_e][fe]),b:A(255*[_e,_e,Ze,w,w,Be][fe]),a:A(U,2)}},se=function(a){var _=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(a);return _?ie({h:h(_[1],_[2]),s:Number(_[3]),v:Number(_[4]),a:_[5]===void 0?1:Number(_[5])/(_[6]?100:1)}):{h:0,s:0,v:0,a:1}},ce=null,be=function(a){var _=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(a);return _?Ie({r:Number(_[1])/(_[2]?100/255:1),g:Number(_[3])/(_[4]?100/255:1),b:Number(_[5])/(_[6]?100/255:1),a:_[7]===void 0?1:Number(_[7])/(_[8]?100:1)}):{h:0,s:0,v:0,a:1}},ze=null,ae=function(a){var _=a.toString(16);return _.length<2?"0"+_:_},ye=function(a){var _=a.r,y=a.g,w=a.b,U=a.a,Q=U<1?ae(A(255*U)):"";return"#"+ae(_)+ae(y)+ae(w)+Q},Ie=function(a){var _=a.r,y=a.g,w=a.b,U=a.a,Q=Math.max(_,y,w),_e=Q-Math.min(_,y,w),Be=_e?Q===_?(y-w)/_e:Q===y?2+(w-_)/_e:4+(_-y)/_e:0;return{h:A(60*(Be<0?Be+6:Be)),s:A(Q?_e/Q*100:0),v:A(Q/255*100),a:U}},ie=function(a){return{h:A(a.h),s:A(a.s),v:A(a.v),a:A(a.a,2)}},P=d.memo(function(a){var _=a.hue,y=a.onChange,w=Ke(["react-colorful__hue",a.className]);return d.createElement("div",{className:w},d.createElement(Te,{onMove:function(U){y({h:360*U.left})},onKey:function(U){y({h:de(_+360*U.left,0,360)})},"aria-label":"Hue","aria-valuenow":A(_),"aria-valuemax":"360","aria-valuemin":"0"},d.createElement(ve,{className:"react-colorful__hue-pointer",left:_/360,color:z({h:_,s:100,v:100,a:1})})))}),B=d.memo(function(a){var _=a.hsva,y=a.onChange,w={backgroundColor:z({h:_.h,s:100,v:100,a:1})};return d.createElement("div",{className:"react-colorful__saturation",style:w},d.createElement(Te,{onMove:function(U){y({s:100*U.left,v:100-100*U.top})},onKey:function(U){y({s:de(_.s+100*U.left,0,100),v:de(_.v-100*U.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+A(_.s)+"%, Brightness "+A(_.v)+"%"},d.createElement(ve,{className:"react-colorful__saturation-pointer",top:1-_.v/100,left:_.s/100,color:z(_)})))}),Y=function(a,_){if(a===_)return!0;for(var y in a)if(a[y]!==_[y])return!1;return!0},I=function(a,_){return a.replace(/\s/g,"")===_.replace(/\s/g,"")},W=function(a,_){return a.toLowerCase()===_.toLowerCase()||Y(R(a),R(_))};function $(a,_,y){var w=oe(y),U=(0,d.useState)(function(){return a.toHsva(_)}),Q=U[0],_e=U[1],Be=(0,d.useRef)({color:_,hsva:Q});(0,d.useEffect)(function(){if(!a.equal(_,Be.current.color)){var fe=a.toHsva(_);Be.current={hsva:fe,color:_},_e(fe)}},[_,a]),(0,d.useEffect)(function(){var fe;Y(Q,Be.current.hsva)||a.equal(fe=a.fromHsva(Q),Be.current.color)||(Be.current={hsva:Q,color:fe},w(fe))},[Q,a,w]);var Ze=(0,d.useCallback)(function(fe){_e(function(Fe){return Object.assign({},Fe,fe)})},[]);return[Q,Ze]}var ge,Ae=typeof window!="undefined"?d.useLayoutEffect:d.useEffect,Ee=function(){return ge||e.nc},Le=function(a){ge=a},Ce=new Map,re=function(a){Ae(function(){var _=a.current?a.current.ownerDocument:document;if(_!==void 0&&!Ce.has(_)){var y=_.createElement("style");y.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Ce.set(_,y);var w=Ee();w&&y.setAttribute("nonce",w),_.head.appendChild(y)}},[])},V=function(a){var _=a.className,y=a.colorModel,w=a.color,U=w===void 0?y.defaultColor:w,Q=a.onChange,_e=N(a,["className","colorModel","color","onChange"]),Be=(0,d.useRef)(null);re(Be);var Ze=$(y,U,Q),fe=Ze[0],Fe=Ze[1],it=Ke(["react-colorful",_]);return d.createElement("div",T({},_e,{ref:Be,className:it}),d.createElement(B,{hsva:fe,onChange:Fe}),d.createElement(P,{hue:fe.h,onChange:Fe,className:"react-colorful__last-control"}))},le={defaultColor:"000",toHsva:J,fromHsva:function(a){return ke({h:a.h,s:a.s,v:a.v,a:1})},equal:W},we=function(a){return d.createElement(V,T({},a,{colorModel:le}))},ne=function(a){var _=a.className,y=a.hsva,w=a.onChange,U={backgroundImage:"linear-gradient(90deg, "+D(Object.assign({},y,{a:0}))+", "+D(Object.assign({},y,{a:1}))+")"},Q=Ke(["react-colorful__alpha",_]),_e=A(100*y.a);return d.createElement("div",{className:Q},d.createElement("div",{className:"react-colorful__alpha-gradient",style:U}),d.createElement(Te,{onMove:function(Be){w({a:Be.left})},onKey:function(Be){w({a:de(y.a+Be.left)})},"aria-label":"Alpha","aria-valuetext":_e+"%","aria-valuenow":_e,"aria-valuemin":"0","aria-valuemax":"100"},d.createElement(ve,{className:"react-colorful__alpha-pointer",left:y.a,color:D(y)})))},ue=function(a){var _=a.className,y=a.colorModel,w=a.color,U=w===void 0?y.defaultColor:w,Q=a.onChange,_e=N(a,["className","colorModel","color","onChange"]),Be=(0,d.useRef)(null);re(Be);var Ze=$(y,U,Q),fe=Ze[0],Fe=Ze[1],it=Ke(["react-colorful",_]);return d.createElement("div",T({},_e,{ref:Be,className:it}),d.createElement(B,{hsva:fe,onChange:Fe}),d.createElement(P,{hue:fe.h,onChange:Fe}),d.createElement(ne,{hsva:fe,onChange:Fe,className:"react-colorful__last-control"}))},nt={defaultColor:"0001",toHsva:J,fromHsva:ke,equal:W},qe=function(a){return d.createElement(ue,T({},a,{colorModel:nt}))},Xe=null,Je=function(a){return G.createElement(ue,T({},a,{colorModel:Xe}))},Re=null,et=function(a){return G.createElement(ue,T({},a,{colorModel:Re}))},ct=null,rt=function(a){return G.createElement(V,T({},a,{colorModel:ct}))},$e=null,ut=function(a){return G.createElement(V,T({},a,{colorModel:$e}))},_t={defaultColor:{h:0,s:0,v:0,a:1},toHsva:function(a){return a},fromHsva:ie,equal:Y},at=function(a){return d.createElement(ue,T({},a,{colorModel:_t}))},jt=null,ot=function(a){return G.createElement(ue,T({},a,{colorModel:jt}))},te={defaultColor:{h:0,s:0,v:0},toHsva:function(a){return{h:a.h,s:a.s,v:a.v,a:1}},fromHsva:function(a){var _=ie(a);return{h:_.h,s:_.s,v:_.v}},equal:Y},Ne=function(a){return d.createElement(V,T({},a,{colorModel:te}))},tt=null,lt=function(a){return G.createElement(V,T({},a,{colorModel:tt}))},dt={defaultColor:{r:0,g:0,b:0,a:1},toHsva:Ie,fromHsva:me,equal:Y},pt=function(a){return d.createElement(ue,T({},a,{colorModel:dt}))},yt=null,At=function(a){return G.createElement(ue,T({},a,{colorModel:yt}))},Ct={defaultColor:{r:0,g:0,b:0},toHsva:function(a){return Ie({r:a.r,g:a.g,b:a.b,a:1})},fromHsva:function(a){return{r:(_=me(a)).r,g:_.g,b:_.b};var _},equal:Y},vt=function(a){return d.createElement(V,T({},a,{colorModel:Ct}))},kt=null,Lt=function(a){return G.createElement(V,T({},a,{colorModel:kt}))},he=/^#?([0-9A-F]{3,8})$/i,Ue=function(a){var _=a.color,y=_===void 0?"":_,w=a.onChange,U=a.onBlur,Q=a.escape,_e=a.validate,Be=a.format,Ze=a.process,fe=N(a,["color","onChange","onBlur","escape","validate","format","process"]),Fe=Z(function(){return Q(y)}),it=Fe[0],Mt=Fe[1],Yt=oe(w),ts=oe(U),bt=O(function(wt){var Kt=Q(wt.target.value);Mt(Kt),_e(Kt)&&Yt(Ze?Ze(Kt):Kt)},[Q,Ze,_e,Yt]),Pt=O(function(wt){_e(wt.target.value)||Mt(Q(y)),ts(wt)},[y,Q,_e,ts]);return q(function(){Mt(Q(y))},[y,Q]),G.createElement("input",T({},fe,{value:Be?Be(it):it,spellCheck:"false",onChange:bt,onBlur:Pt}))},mt=function(a){return"#"+a},xt=function(a){var _=a.prefixed,y=a.alpha,w=N(a,["prefixed","alpha"]),U=O(function(_e){return _e.replace(/([^0-9A-F]+)/gi,"").substring(0,y?8:6)},[y]),Q=O(function(_e){return(function(Be,Ze){var fe=he.exec(Be),Fe=fe?fe[1].length:0;return Fe===3||Fe===6||!!Ze&&Fe===4||!!Ze&&Fe===8})(_e,y)},[y]);return G.createElement(Ue,T({},w,{escape:U,format:_?mt:void 0,process:mt,validate:Q}))},gt=e("./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),zt=e("./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js"),Rt=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),St=e("./node_modules/.pnpm/@snack-uikit+locale@0.16.0/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),Ft=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const Ot=null,Wt={Auto:"auto",Full:"full"};var t=e("./node_modules/.pnpm/@snack-uikit+counter@0.8.12_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"),s=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");const n=(a,_,y)=>y==="xs"?"label-only":a&&_?"icon-before":_?"label-only":"icon-only";var o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(o),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),p=e.n(i),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),k=e.n(f),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),c=e.n(g),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=e.n(u),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),j=e.n(v),E=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+segmented-control@0.6.21_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/helperComponents/Segment/styles.module.css"),K={};K.styleTagTransform=j(),K.setAttributes=c(),K.insert=k().bind(null,"head"),K.domAPI=p(),K.insertStyleElement=m();var pe=r()(E.A,K);const Ve=E.A&&E.A.locals?E.A.locals:void 0;function xe({size:a,label:_,value:y,selected:w,onClick:U,disabled:Q,icon:_e,counter:Be,focusable:Ze,onGetFocusable:fe,onSelectionUpdated:Fe,renderWrapSegment:it}){const Mt=(0,d.useRef)(null);(0,d.useEffect)(()=>{Ze&&(fe==null||fe(Mt.current))},[Ze,fe]),(0,d.useEffect)(()=>{w&&Mt.current&&Fe(Mt.current)},[w,Mt,Fe]);const Yt=(0,l.jsxs)("button",{ref:Mt,"data-test-id":`section-${y}`,"data-active":w||void 0,"data-disabled":Q||void 0,"data-layout":n(_e,_,a),className:S()(Ve.segment),onClick:U,"data-size":a,disabled:Q,tabIndex:Ze?0:-1,"aria-checked":w,role:"radio",type:"button",children:[a!=="xs"&&_e&&(0,l.jsx)("div",{className:Ve.icon,children:_e}),_&&(0,l.jsx)(s.m,{className:Ve.label,"data-size":a,text:_}),Be&&(0,l.jsx)(t.p,Object.assign({},Be,{size:"s"}))]});return it?it(Yt):Yt}function Oe({selected:a,items:_}){const[y,w]=(0,d.useState)(a),[U,Q]=(0,d.useState)(!1),{prev:_e,next:Be}=(0,d.useMemo)(()=>_.reduce((Fe,it)=>(Fe._isNextSearching&&!Fe.next&&(Fe.next=it.disabled?Fe.next:it.value),y===it.value&&(Fe._isNextSearching=!0),Fe._isNextSearching||(Fe.prev=it.disabled?Fe.prev:it.value),Fe),{_isNextSearching:!1}),[y,_]),Ze=(0,d.useCallback)(Fe=>{switch(Fe.key){case"ArrowLeft":{_e&&(Q(!0),w(_e));return}case"ArrowRight":{Be&&(Q(!0),w(Be));return}default:return}},[Be,_e]),fe=(0,d.useCallback)(Fe=>{Q(it=>(it&&(Fe==null||Fe.focus()),!1))},[]);return{onKeyDown:Ze,focusableSegmentValue:y,onGetFocusable:fe}}var De=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+segmented-control@0.6.21_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/components/styles.module.css"),Ye={};Ye.styleTagTransform=j(),Ye.setAttributes=c(),Ye.insert=k().bind(null,"head"),Ye.domAPI=p(),Ye.insertStyleElement=m();var Tt=r()(De.A,Ye);const Dt=De.A&&De.A.locals?De.A.locals:void 0;var ss=function(a,_){var y={};for(var w in a)Object.prototype.hasOwnProperty.call(a,w)&&_.indexOf(w)<0&&(y[w]=a[w]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,w=Object.getOwnPropertySymbols(a);U<w.length;U++)_.indexOf(w[U])<0&&Object.prototype.propertyIsEnumerable.call(a,w[U])&&(y[w[U]]=a[w[U]]);return y};function os(a){var{defaultValue:_,size:y="m",className:w,onChange:U,items:Q,value:_e,outline:Be,width:Ze=Wt.Auto,name:fe}=a,Fe=ss(a,["defaultValue","size","className","onChange","items","value","outline","width","name"]);const[it,Mt]=(0,C.iC)(_e,_,U),{focusableSegmentValue:Yt,onGetFocusable:ts,onKeyDown:bt}=Oe({selected:it,items:Q}),Pt=(0,d.useRef)(null),wt=(0,d.useRef)(),[Kt,ft]=(0,d.useState)(),Ut=(0,d.useCallback)((Xt=wt.current)=>{Xt&&(wt.current=Xt,setTimeout(()=>{ft({top:Xt.offsetTop,left:Xt.offsetLeft,width:Xt.offsetWidth,height:Xt.offsetHeight})}))},[]);(0,d.useEffect)(()=>{if(!Pt.current)return;const Xt=new ResizeObserver(()=>Ut());Xt.observe(Pt.current);const Qs=new MutationObserver(()=>Ut());return Qs.observe(Pt.current,{childList:!0}),()=>{Xt.disconnect(),Qs.disconnect()}},[Ut]);const ys=(0,d.useMemo)(()=>Q.map(Xt=>(0,l.jsx)("div",{className:Dt.segmentHolder,"data-width":Ze,children:(0,l.jsx)(xe,Object.assign({},Xt,{size:y,onGetFocusable:ts,selected:it===Xt.value,onClick:()=>Mt(Xt.value),focusable:Yt===Xt.value,onSelectionUpdated:Ut}))},Xt.value)),[Q,Ze,y,ts,it,Yt,Ut,Mt]);return(0,l.jsxs)("div",Object.assign({ref:Pt,"data-size":y,onKeyDown:bt,className:S()(Dt.container,w),role:"radiogroup","data-outline":Be||void 0,"data-width":Ze},(0,Ft.gn)(Fe),(0,Ft.z7)(Fe),{children:[fe&&(0,l.jsx)("input",{type:"hidden",value:it,name:fe}),(0,l.jsx)("div",{"data-size":y,style:Kt,className:Dt.selection,"aria-hidden":!0}),ys]}))}var Ht=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+color-picker@0.3.56_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/color-picker/dist/esm/components/global.css"),Jt={};Jt.styleTagTransform=j(),Jt.setAttributes=c(),Jt.insert=k().bind(null,"head"),Jt.domAPI=p(),Jt.insertStyleElement=m();var as=r()(Ht.A,Jt);const is=Ht.A&&Ht.A.locals?Ht.A.locals:void 0,We={Hex:"hex",Rbg:"rbg",Hsv:"hsv"},Qe=[{value:We.Hex,label:"HEX"},{value:We.Hsv,label:"HSV"},{value:We.Rbg,label:"RGB"}],vs={[We.Hex]:"HEX",[We.Rbg]:"RGB",[We.Hsv]:"HSV"},us={[We.Hex]:!0,[We.Rbg]:!0,[We.Hsv]:!0},Is=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i,Ts=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i,Fs=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;var ps=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),xs=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+color-picker@0.3.56_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/color-picker/dist/esm/helperComponents/FieldPrivate/styles.module.css"),ls={};ls.styleTagTransform=j(),ls.setAttributes=c(),ls.insert=k().bind(null,"head"),ls.domAPI=p(),ls.insertStyleElement=m();var Zs=r()(xs.A,ls);const rs=xs.A&&xs.A.locals?xs.A.locals:void 0;function Bt({className:a,disabled:_,focused:y,style:w,value:U="",onChange:Q,min:_e=0,max:Be=255,inputType:Ze="number",error:fe}){const Fe=(0,d.useRef)(null),it=()=>{var bt;_||(bt=Fe==null?void 0:Fe.current)===null||bt===void 0||bt.focus()},[Mt,Yt]=(0,d.useState)(""),ts=()=>{if(Ze==="number"){const bt=Number(Mt)||0,Pt=String(Math.min(Math.max(_e,bt),Math.min(Be,bt)));Yt(Pt),Q==null||Q(Pt);return}Q==null||Q(Mt)};return(0,d.useEffect)(()=>{Yt(String(U))},[U]),(0,l.jsx)("div",{className:S()(a,rs.container),style:w,"data-focused":y||void 0,"data-validation":fe?"error":void 0,"data-test-id":"field-container-private",onClick:it,"data-size":"s","data-variant":"single-line-container",role:"textbox",tabIndex:-1,children:(0,l.jsx)(ps.K,Object.assign({value:String(Mt),onChange:Yt,onBlur:ts,type:Ze,ref:Fe},Ze==="number"?{min:_e,max:Be}:{}))})}function Gt({onChange:a,rgba:_}){const y=w=>{a(Object.assign(Object.assign({},_),{a:Number(w)%100/100}))};return(0,l.jsx)(Bt,{value:_.a*100,onChange:y,inputType:"number",min:0,max:100})}const Et=(a,_=0,y=Math.pow(10,_))=>Math.round(y*a)/y;function Zt(a){return typeof a=="object"&&"r"in a&&"g"in a&&"b"in a}function Qt(a){return typeof a=="object"&&Zt(a)&&"a"in a}function Vt(a){return typeof a=="object"&&"h"in a&&"s"in a&&"l"in a}function It(a){return typeof a=="object"&&Vt(a)&&"a"in a}function Nt(a){return typeof a=="object"&&"h"in a&&"s"in a&&"v"in a}function As(a){return typeof a=="object"&&Nt(a)&&"a"in a}function ms(a){return!!Fs.exec(a)}function $t(a){return!!Ts.exec(a)}function Hs(a){return!!Is.exec(a)}const js={grad:360/400,turn:360,rad:360/(Math.PI*2)},qt=a=>hs(ds(a)),ds=a=>(a[0]==="#"&&(a=a.substring(1)),a.length<6?{r:parseInt(a[0]+a[0],16),g:parseInt(a[1]+a[1],16),b:parseInt(a[2]+a[2],16),a:a.length===4?Et(parseInt(a[3]+a[3],16)/255,2):1}:{r:parseInt(a.substring(0,2),16),g:parseInt(a.substring(2,4),16),b:parseInt(a.substring(4,6),16),a:a.length===8?Et(parseInt(a.substring(6,8),16)/255,2):1}),_s=(a,_="deg")=>Number(a)*(js[_]||1),Ss=a=>{const y=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(a);return y?Os({h:_s(y[1],y[2]),s:Number(y[3]),l:Number(y[4]),a:y[5]===void 0?1:Number(y[5])/(y[6]?100:1)}):{h:0,s:0,v:0,a:1}},Os=({h:a,s:_,l:y,a:w})=>(_*=(y<50?y:100-y)/100,{h:a,s:_>0?2*_/(y+_)*100:0,v:y+_,a:w}),gs=a=>Es(Ns(a)),Ds=({h:a,s:_,v:y,a:w})=>{const U=(200-_)*y/100;return{h:Et(a),s:Et(U>0&&U<200?_*y/100/(U<=100?U:200-U)*100:0),l:Et(U/2),a:Et(w,2)}},Ns=({h:a,s:_,v:y,a:w})=>{a=a/360*6,_=_/100,y=y/100;const U=Math.floor(a),Q=y*(1-_),_e=y*(1-(a-U)*_),Be=y*(1-(1-a+U)*_),Ze=U%6;return{r:Et([y,_e,Q,Q,Be,y][Ze]*255),g:Et([Be,y,y,_e,Q,Q][Ze]*255),b:Et([Q,Q,Be,y,y,_e][Ze]*255),a:Et(w,2)}},Bs=a=>{const y=Ts.exec(a);return y?Ms({h:_s(y[1],y[2]),s:Number(y[3]),v:Number(y[4]),a:y[5]===void 0?1:Number(y[5])/(y[6]?100:1)}):{h:0,s:0,v:0,a:1}},Ws=a=>{const y=Is.exec(a);return y?hs({r:Number(y[1])/(y[2]?100/255:1),g:Number(y[3])/(y[4]?100/255:1),b:Number(y[5])/(y[6]?100/255:1),a:y[7]===void 0?1:Number(y[7])/(y[8]?100:1)}):{h:0,s:0,v:0,a:1}},fs=a=>{const _=a.toString(16);return _.length<2?"0"+_:_},Es=({r:a,g:_,b:y,a:w})=>{const U=w<1?fs(Et(w*255)):"";return"#"+fs(a)+fs(_)+fs(y)+U},hs=({r:a,g:_,b:y,a:w})=>{const U=Math.max(a,_,y),Q=U-Math.min(a,_,y),_e=Q?U===a?(_-y)/Q:U===_?2+(y-a)/Q:4+(a-_)/Q:0;return{h:Et(60*(_e<0?_e+6:_e)),s:Et(U?Q/U*100:0),v:Et(U/255*100),a:w}},Ms=a=>({h:Et(a.h),s:Et(a.s),v:Et(a.v),a:Et(a.a,2)}),Ks=({r:a,g:_,b:y})=>({r:a,g:_,b:y}),Us=({h:a,s:_,l:y})=>({h:a,s:_,l:y}),Vs=a=>{const{h:_,s:y,v:w}=Ms(a);return{h:_,s:y,v:w}};function Gs(a){return Vt(a)||It(a)?gs(Os(Object.assign({a:1},a))):Zt(a)||Qt(a)?Es(Object.assign({a:1},a)):Nt(a)||As(a)?gs(Object.assign({a:1},a)):ms(a)?gs(Ss(a)):Hs(a)?gs(Ws(a)):$t(a)?gs(Bs(a)):a}function ws(a){const _=Gs(a);return{hex:_,rgb:Ks(ds(_)),rgba:ds(_),hsv:Vs(qt(_)),hsva:qt(_),hsl:Us(Ds(qt(_))),hsla:Ds(qt(_))}}const Ls=/^#?([0-9A-F]{3,8})$/i,cs=(a,_)=>{const y=Ls.exec(a),w=y?y[1].length:0;return w===3||w===6||!!_&&w===4||!!_&&w===8};var ns=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+color-picker@0.3.56_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/color-picker/dist/esm/components/styles.module.css"),ht={};ht.styleTagTransform=j(),ht.setAttributes=c(),ht.insert=k().bind(null,"head"),ht.domAPI=p(),ht.insertStyleElement=m();var Ge=r()(ns.A,ht);const st=ns.A&&ns.A.locals?ns.A.locals:void 0;var es=function(a,_){var y={};for(var w in a)Object.prototype.hasOwnProperty.call(a,w)&&_.indexOf(w)<0&&(y[w]=a[w]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,w=Object.getOwnPropertySymbols(a);U<w.length;U++)_.indexOf(w[U])<0&&Object.prototype.propertyIsEnumerable.call(a,w[U])&&(y[w[U]]=a[w[U]]);return y};function Cs(a){var{value:_,onChange:y,withAlpha:w=!0,autoApply:U,className:Q,colorMode:_e=us}=a,Be=es(a,["value","onChange","withAlpha","autoApply","className","colorMode"]);const Ze=(0,d.useMemo)(()=>{const ft=Object.assign(Object.assign({},us),_e);return Object.keys(ft).reduce((Ut,ys)=>(ft[ys]&&Ut.push({value:ys,label:vs[ys]}),Ut),[])},[_e]),[fe,Fe]=(0,d.useState)(ws(_||"#000")),[it,Mt]=(0,d.useState)(Ze[0].value),[Yt,ts]=(0,d.useState)(fe.hex);(0,d.useEffect)(()=>{if(_){const ft=ws(_);Fe(ft),ts(ft.hex)}},[_]);const bt=ft=>{const Ut=ws(ft);Fe(Ut),U&&(y==null||y(Ut))},Pt=()=>{y==null||y(fe)},wt=()=>{_&&Fe(ws(_))},{t:Kt}=(0,St.Ym)("ColorPicker");return(0,l.jsxs)("div",Object.assign({className:S()(st.container,"osThemeSnack",Q)},(0,Ft.z7)(Be),{children:[it===We.Hex&&(w?(0,l.jsx)(qe,{onChange:bt,color:fe.hex}):(0,l.jsx)(we,{onChange:bt,color:fe.hex})),it===We.Rbg&&(w?(0,l.jsx)(pt,{onChange:bt,color:fe.rgba}):(0,l.jsx)(vt,{onChange:bt,color:fe.rgb})),it===We.Hsv&&(w?(0,l.jsx)(at,{onChange:bt,color:fe.hsva}):(0,l.jsx)(Ne,{onChange:bt,color:fe.hsv})),(0,l.jsxs)("div",{className:st.colorModel,children:[(0,l.jsx)(os,{outline:!0,value:it,size:"s",onChange:Mt,items:Ze}),(0,l.jsxs)("div",{className:st.colorFields,"data-mode":it,"data-with-alpha":w||void 0,children:[(0,l.jsxs)(l.Fragment,{children:[it===We.Hex&&(0,l.jsx)(Bt,{value:fe.hex.replace("#","").substring(0,6),error:!cs(Yt,w),inputType:"text",onChange:(ft="")=>{ts(ft),cs(ft)&&bt(Object.assign(Object.assign({},ds(ft)),{a:fe.rgba.a}))}}),it===We.Rbg&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Bt,{value:fe.rgb.r,max:255,onChange:ft=>{bt(Object.assign(Object.assign({},fe.rgba),{r:Number(ft)}))}}),(0,l.jsx)(Bt,{value:fe.rgb.g,max:255,onChange:ft=>{bt(Object.assign(Object.assign({},fe.rgba),{g:Number(ft)}))}}),(0,l.jsx)(Bt,{value:fe.rgb.b,max:255,onChange:ft=>{bt(Object.assign(Object.assign({},fe.rgba),{b:Number(ft)}))}})]}),it===We.Hsv&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Bt,{value:fe.hsv.h,max:360,onChange:ft=>{bt(Object.assign(Object.assign({},fe.hsva),{h:Number(ft)}))}}),(0,l.jsx)(Bt,{value:fe.hsv.s,max:100,onChange:ft=>{bt(Object.assign(Object.assign({},fe.hsva),{s:Number(ft)}))}}),(0,l.jsx)(Bt,{value:fe.hsv.v,max:100,onChange:ft=>{bt(Object.assign(Object.assign({},fe.hsva),{v:Number(ft)}))}})]})]}),w&&(0,l.jsx)(Gt,{rgba:fe.rgba,onChange:bt})]})]}),!U&&(0,l.jsxs)("div",{className:st.footer,children:[(0,l.jsx)(gt.b,{label:Kt("cancel"),size:"xs",onClick:wt}),(0,l.jsx)(zt.L,{label:Kt("apply"),icon:(0,l.jsx)(Rt.A,{}),onClick:Pt,size:"xs"})]})]}))}var Ps=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),bs=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),Ys=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),rn=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),ln=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),en=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),dn=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),cn=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),un=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),pn=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),$s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldColor/styles.module.css"),zs={};zs.styleTagTransform=j(),zs.setAttributes=c(),zs.insert=k().bind(null,"head"),zs.domAPI=p(),zs.insertStyleElement=m();var An=r()($s.A,zs);const qs=$s.A&&$s.A.locals?$s.A.locals:void 0;var mn=function(a,_){var y={};for(var w in a)Object.prototype.hasOwnProperty.call(a,w)&&_.indexOf(w)<0&&(y[w]=a[w]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,w=Object.getOwnPropertySymbols(a);U<w.length;U++)_.indexOf(w[U])<0&&Object.prototype.propertyIsEnumerable.call(a,w[U])&&(y[w[U]]=a[w[U]]);return y};const _n=(0,d.forwardRef)((a,_)=>{var{id:y,name:w,value:U,disabled:Q=!1,readonly:_e=!1,showCopyButton:Be=!0,showClearButton:Ze=!0,open:fe,onChange:Fe,onOpenChange:it,className:Mt,label:Yt,labelTooltip:ts,labelTooltipPlacement:bt,required:Pt=!1,caption:wt,hint:Kt,showHintIcon:ft,size:Ut=bs.SK.S,validationState:ys=en.sv.Default,error:Xt,withAlpha:Qs,autoApply:fn,placeholder:vn,onFocus:gn,onBlur:hn,onCopyButtonClick:bn,autoFocus:yn}=a,kn=mn(a,["id","name","value","disabled","readonly","showCopyButton","showClearButton","open","onChange","onOpenChange","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","size","validationState","error","withAlpha","autoApply","placeholder","onFocus","onBlur","onCopyButtonClick","autoFocus"]);const[xn,jn]=(0,C.iC)(fe,!1,it),Xs=(0,d.useRef)(null),tn=xn&&!_e&&!Q,sn=(0,un.t)({validationState:ys,error:Xt}),[Js="",Rs]=(0,ln.I)({value:U||"",onChange:Fe}),Sn=(0,d.useRef)(null),On=(0,d.useRef)(null),nn=!!(Js&&!Q),Cn=Ze&&nn&&!_e,Pn=Be&&nn&&_e,En=()=>{var ks;Rs==null||Rs(""),Pt&&((ks=Xs.current)===null||ks===void 0||ks.focus())},on=(0,Ys.r)({clearButtonRef:Sn,showClearButton:Cn,size:Ut,onClear:En}),an=(0,cn.x)({copyButtonRef:On,showCopyButton:Pn,size:Ut,valueToCopy:Js,onCopyButtonClick:bn}),{postfixButtons:wn,inputTabIndex:In,onInputKeyDown:Tn}=(0,rn.C)({inputRef:Xs,postfixButtons:(0,d.useMemo)(()=>[on,an],[on,an]),readonly:_e,submitKeys:["Enter","Space","Tab"]});return(0,d.useEffect)(()=>{var ks;fe&&((ks=Xs.current)===null||ks===void 0||ks.focus())},[fe]),(0,l.jsx)(pn.m,Object.assign({className:Mt,label:Yt,labelTooltip:ts,labelTooltipPlacement:bt,labelFor:y,required:Pt,caption:wt,hint:Kt,disabled:Q,readonly:_e,showHintIcon:ft,size:Ut,error:Xt,validationState:sn},(0,Ft.z7)(kn),{children:(0,l.jsx)(Ps.m,Object.assign({trigger:"click",triggerClassName:qs.triggerClassName,widthStrategy:"auto"},_e||Q?{open:!1}:{open:tn,onOpenChange:jn},{content:(0,l.jsx)(Cs,{withAlpha:Qs,autoApply:fn,value:Js,onChange:({hex:ks})=>{Rs==null||Rs(ks||"")},colorMode:{hex:!1}}),children:(0,l.jsx)(dn.V,{className:qs.container,size:Ut,validationState:sn,disabled:Q,readonly:_e,variant:en.aJ.SingleLine,focused:tn,inputRef:Xs,postfix:wn,prefix:(0,l.jsx)("div",{className:qs.colorPreview,style:{"--color":Js}}),children:(0,l.jsx)(ps.K,{ref:(0,x.A)(_,Xs),"data-size":Ut,value:Js,onChange:Fe,onFocus:gn,onBlur:hn,tabIndex:In,onKeyDown:Tn,disabled:Q,readonly:_e,placeholder:vn,type:"text",id:y,name:w,autoFocus:yn,"data-test-id":"field-color__input"})})}))}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDate/FieldDate.js"(ee,L,e){e.d(L,{$:()=>ye});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/Calendar/Calendar.js"),S=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),G=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/calendar/index.js"),Z=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),O=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),q=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),T=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"),N=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),oe=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),de=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),F=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/dateFields.js"),X=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),He=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),Me=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useDateField.js"),Te=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useHandlers.js"),Ke=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useFocusHandlers.js"),ve=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),A=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),Pe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),J=e.n(Pe),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(R),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=e.n(M),je=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),ke=e.n(je),Se=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(Se),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),me=e.n(D),se=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDate/styles.module.css"),ce={};ce.styleTagTransform=me(),ce.setAttributes=ke(),ce.insert=H().bind(null,"head"),ce.domAPI=h(),ce.insertStyleElement=z();var be=J()(se.A,ce);const ze=se.A&&se.A.locals?se.A.locals:void 0;var ae=function(Ie,ie){var P={};for(var B in Ie)Object.prototype.hasOwnProperty.call(Ie,B)&&ie.indexOf(B)<0&&(P[B]=Ie[B]);if(Ie!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Y=0,B=Object.getOwnPropertySymbols(Ie);Y<B.length;Y++)ie.indexOf(B[Y])<0&&Object.prototype.propertyIsEnumerable.call(Ie,B[Y])&&(P[B[Y]]=Ie[B[Y]]);return P};const ye=(0,d.forwardRef)((Ie,ie)=>{var P,{id:B,name:Y,value:I,disabled:W=!1,readonly:$=!1,showCopyButton:ge=!0,showClearButton:Ae=!0,open:Ee,onOpenChange:Le,onChange:Ce,onFocus:re,onBlur:V,className:le,label:we,labelTooltip:ne,labelTooltipPlacement:ue,required:nt=!1,caption:qe,hint:Xe,showHintIcon:Je,size:Re=Z.SK.S,validationState:et=de.sv.Default,buildCellProps:ct,error:rt,mode:$e,onCopyButtonClick:ut,autoFocus:_t}=Ie,at=ae(Ie,["id","name","value","disabled","readonly","showCopyButton","showClearButton","open","onOpenChange","onChange","onFocus","onBlur","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","size","validationState","buildCellProps","error","mode","onCopyButtonClick","autoFocus"]);const[jt,ot]=(0,C.iC)(Ee,!1,Le),te=(0,d.useRef)(null),Ne=(0,d.useRef)(null),tt=(0,d.useRef)(null),lt=Re===Z.SK.S?Z.Ev.Xs:Z.Ev.S,dt=jt&&!$&&!W,pt=!!(I&&!W),yt=Ae&&pt&&!$,At=ge&&pt&&$,Ct=$e==="date-time"?(P=at.showSeconds)!==null&&P!==void 0?P:!0:void 0,vt=(0,ve.t)({validationState:et,error:rt}),kt=(0,d.useRef)(null),Lt=(0,d.useCallback)(E=>{E.key==="ArrowDown"&&(ot(!0),setTimeout(()=>{var K;return(K=kt.current)===null||K===void 0?void 0:K.focus()},0))},[ot]),he=(0,d.useCallback)(()=>{var E,K,pe;Ce&&Ce(void 0),!((E=te.current)===null||E===void 0)&&E.value&&(te.current.value=""),nt?((K=te.current)===null||K===void 0||K.focus(),ot(!0)):((pe=te.current)===null||pe===void 0||pe.blur(),ot(!1))},[Ce,nt,ot]),Ue=(0,d.useCallback)(E=>E?$e==="date"?E.toLocaleDateString(F.Xn):E.toLocaleString(F.Xn,{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",second:Ct?"2-digit":void 0}):"",[$e,Ct]),mt=Ue(I),xt=(0,O.r)({clearButtonRef:Ne,showClearButton:yt,size:Re,onClear:he}),gt=(0,He.x)({copyButtonRef:tt,showCopyButton:At,size:Re,valueToCopy:mt,onCopyButtonClick:ut}),zt=(0,d.useMemo)(()=>({active:!1,show:!0,id:"calendarIcon",render:E=>(0,l.jsx)(G.A,Object.assign({},E,{size:lt,className:ze.calendarIcon,"data-size":Re}))}),[lt,Re]),Rt=(0,d.useMemo)(()=>[xt,gt,zt],[xt,gt,zt]),{value:St,handleChange:Ft,handleClick:Ot,handleKeyDown:Wt,handleBlur:t,mask:s,setInputFocus:n}=(0,Me.c)({inputRef:te,onChange:Ce,readonly:$,locale:F.Xn,setIsOpen:ot,mode:$e,showSeconds:Ct}),o=(0,d.useCallback)(()=>n($e==="date"?F.Yj.Year:F.Yj.Seconds),[$e,n]),{postfixButtons:r,inputTabIndex:i,onInputKeyDown:p,setInitialTabIndices:f}=(0,q.C)({setInputFocus:o,inputRef:te,postfixButtons:Rt,onButtonKeyDown:Lt,readonly:$,submitKeys:["Enter","Space","Tab"]}),k=E=>{var K;Ce&&Ce(E),(K=te.current)===null||K===void 0||K.focus(),ot(!1),te.current&&(te.current.value=Ue(E))},g=()=>{f(),(0,T.z$)(()=>{n(F.Yj.Day),ot(!1)})},c=(0,Te.j)([Lt,Wt,p]);(0,d.useEffect)(()=>{var E;Ee&&((E=te.current)===null||E===void 0||E.focus())},[Ee]),(0,d.useEffect)(()=>{te.current&&document.activeElement!==te.current&&(te.current.value=Ue(I))},[Ue,I]);const u=(0,d.useCallback)(E=>{n(),re==null||re(E)},[re,n]),m=(0,Ke.T)({onFocusByClick:re,onFocusByKeyboard:u}),v=(0,Te.j)([t,m.onBlur,V]),j=(0,d.useCallback)(E=>{Ot(),jt&&E.stopPropagation()},[Ot,jt]);return(0,l.jsx)(A.m,Object.assign({className:le,label:we,labelTooltip:ne,labelTooltipPlacement:ue,labelFor:B,required:nt,caption:qe,hint:Xe,disabled:W,readonly:$,showHintIcon:Je,size:Re,error:rt,validationState:vt},(0,oe.z7)(at),{children:(0,l.jsx)(S.m,Object.assign({trigger:"click",triggerClassName:ze.triggerClassName,widthStrategy:"auto"},$||W?{open:!1}:{open:dt,onOpenChange:ot},{content:(0,l.jsx)("div",{className:ze.calendarWrapper,"data-size":Re,children:(0,l.jsx)(b.V,{mode:$e,size:Re,value:I,showSeconds:Ct,onChangeValue:k,buildCellProps:ct,navigationStartRef:kt,onFocusLeave:g,locale:F.Xn,"data-test-id":"field-date__calendar",fitToContainer:!1})}),children:(0,l.jsx)(X.V,{className:ze.container,size:Re,validationState:vt,disabled:W,readonly:$,variant:de.aJ.SingleLine,focused:dt,inputRef:te,postfix:r,children:(0,l.jsx)(N.K,{ref:(0,x.A)(ie,te),"data-size":Re,value:St||"",placeholder:s,onChange:Ft,onFocus:m.onFocus,onMouseDown:m.onMouseDown,onBlur:v,onKeyDown:c,onClick:j,disabled:W,readonly:$,tabIndex:i,type:"text",inputMode:"numeric",id:B,name:Y,autoFocus:_t,"data-test-id":"field-date__input"})})}))}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSecure/FieldSecure.js"(ee,L,e){e.d(L,{S:()=>P});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),b=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"),S=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),G=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),Z=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js"),O=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js");function q({children:B,skeleton:Y,loading:I}){return(0,O.v)(I)?(0,l.jsx)(Z.Q,{loading:!0,children:Y}):(0,l.jsx)(l.Fragment,{children:B})}var T=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js"),N=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),oe=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),de=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),F=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),X=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),He=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),Me=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/eye/index.js"),Te=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/eyeClosed/index.js"),Ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ve=e.n(Ke),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Pe=e.n(A),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),R=e.n(J),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(h),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),je=e.n(H),ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Se=e.n(ke),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonHideValue/styles.module.css"),D={};D.styleTagTransform=Se(),D.setAttributes=M(),D.insert=R().bind(null,"head"),D.domAPI=Pe(),D.insertStyleElement=je();var me=ve()(z.A,D);const se=z.A&&z.A.locals?z.A.locals:void 0,ce=(0,d.forwardRef)(({size:B,onClick:Y,hidden:I,disabled:W,tabIndex:$=-1,onKeyDown:ge},Ae)=>{const Ee=Le=>{W||(Le.stopPropagation(),Y(Le))};return(0,l.jsx)("button",{className:se.buttonHideValue,"data-size":B,"data-disabled":W||void 0,disabled:W,onClick:Ee,"data-test-id":"button-hide-value",ref:Ae,onKeyDown:ge,type:"button",tabIndex:W?-1:$,children:I?(0,l.jsxs)(l.Fragment,{children:[B===C.Vp.S&&(0,l.jsx)(Me.A,{size:16}),B===C.Vp.M&&(0,l.jsx)(Me.A,{})]}):(0,l.jsxs)(l.Fragment,{children:[B===C.Vp.S&&(0,l.jsx)(Te.A,{size:16}),B===C.Vp.M&&(0,l.jsx)(Te.A,{})]})})});var be=function(B,Y){var I={};for(var W in B)Object.prototype.hasOwnProperty.call(B,W)&&Y.indexOf(W)<0&&(I[W]=B[W]);if(B!=null&&typeof Object.getOwnPropertySymbols=="function")for(var $=0,W=Object.getOwnPropertySymbols(B);$<W.length;$++)Y.indexOf(W[$])<0&&Object.prototype.propertyIsEnumerable.call(B,W[$])&&(I[W[$]]=B[W[$]]);return I};function ze({hideButtonRef:B,showHideButton:Y,size:I,toggleHidden:W,hidden:$,disabled:ge}){const Ae=(0,He.A)(W);return(0,d.useMemo)(()=>({id:"hide",active:!0,ref:B,show:Y,render:Ee=>{var{key:Le}=Ee,Ce=be(Ee,["key"]);const re=V=>{Ce.onClick(V),Ae(V)};return(0,l.jsx)(ce,Object.assign({},Ce,{size:C._h[I],onClick:re,hidden:$,disabled:ge}),Le)}}),[ge,$,B,Y,I,Ae])}var ae=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),ye=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),Ie=function(B,Y,I,W){function $(ge){return ge instanceof I?ge:new I(function(Ae){Ae(ge)})}return new(I||(I=Promise))(function(ge,Ae){function Ee(re){try{Ce(W.next(re))}catch(V){Ae(V)}}function Le(re){try{Ce(W.throw(re))}catch(V){Ae(V)}}function Ce(re){re.done?ge(re.value):$(re.value).then(Ee,Le)}Ce((W=W.apply(B,Y||[])).next())})},ie=function(B,Y){var I={};for(var W in B)Object.prototype.hasOwnProperty.call(B,W)&&Y.indexOf(W)<0&&(I[W]=B[W]);if(B!=null&&typeof Object.getOwnPropertySymbols=="function")for(var $=0,W=Object.getOwnPropertySymbols(B);$<W.length;$++)Y.indexOf(W[$])<0&&Object.prototype.propertyIsEnumerable.call(B,W[$])&&(I[W[$]]=B[W[$]]);return I};const P=(0,d.forwardRef)((B,Y)=>{var{id:I,name:W,value:$,placeholder:ge,maxLength:Ae,disabled:Ee=!1,readonly:Le=!1,showCopyButton:Ce=!0,allowMoreThanMaxLength:re=!1,hidden:V,onHiddenChange:le,showHintIcon:we,onChange:ne,onFocus:ue,onBlur:nt,className:qe,label:Xe,labelTooltip:Je,labelTooltipPlacement:Re,required:et=!1,caption:ct,hint:rt,size:$e=C.SK.S,validationState:ut=oe.sv.Default,prefixIcon:_t,error:at,asyncValueGetter:jt,autoComplete:ot,autoFocus:te,onCopyButtonClick:Ne}=B,tt=ie(B,["id","name","value","placeholder","maxLength","disabled","readonly","showCopyButton","allowMoreThanMaxLength","hidden","onHiddenChange","showHintIcon","onChange","onFocus","onBlur","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","size","validationState","prefixIcon","error","asyncValueGetter","autoComplete","autoFocus","onCopyButtonClick"]);const lt=(0,d.useRef)(null),dt=(0,d.useRef)(null),pt=(0,d.useRef)(null),[yt,At]=(0,d.useState)(!1),[Ct,vt]=(0,d.useState)(!1),[kt="",Lt]=(0,F.I)({value:$,defaultValue:"",onChange:ne}),[he=!0,Ue]=(0,F.I)({value:V,defaultValue:!0,onChange:le}),mt=Ce&&!!kt&&Le&&!Ee,xt=!(Le&&!kt),gt=(0,ae.t)({validationState:ut,error:at}),zt=()=>Ie(void 0,void 0,void 0,function*(){if(!yt&&jt){vt(!0);try{const s=yield jt();return At(!0),Lt(s),{success:!0,value:s}}catch(s){return{success:!1}}finally{vt(!1)}}return{success:!0}}),Rt=()=>{zt().then(({success:s})=>{s&&(Ue(!he),Le||(0,b.z$)(()=>{var n;(n=lt.current)===null||n===void 0||n.focus(),(0,b.G8)(lt.current)}))})},St=(0,X.x)({copyButtonRef:dt,showCopyButton:mt,size:$e,valueToCopy:kt,onValueRequest:zt,disabled:Ct,onCopyButtonClick:Ne}),Ft=ze({hideButtonRef:pt,showHideButton:xt,size:$e,toggleHidden:Rt,hidden:he,disabled:Ee||Ct}),{postfixButtons:Ot,inputTabIndex:Wt,onInputKeyDown:t}=(0,S.C)({inputRef:lt,postfixButtons:(0,d.useMemo)(()=>[St,Ft],[St,Ft]),readonly:Le,submitKeys:["Enter","Space","Tab"]});return(0,l.jsx)(ye.m,Object.assign({className:qe,label:Xe,labelTooltip:Je,labelTooltipPlacement:Re,labelFor:I,required:et,caption:ct,length:Ae?{max:Ae,current:kt.length}:void 0,hint:rt,disabled:Ee,readonly:Le,showHintIcon:we,size:$e,error:at,validationState:gt},(0,N.z7)(tt),{children:(0,l.jsx)(de.V,{size:$e,validationState:gt,disabled:Ee,readonly:Le,variant:oe.aJ.SingleLine,inputRef:lt,prefix:_t,postfix:Ot,children:(0,l.jsx)(q,{skeleton:(0,l.jsx)(T.E,{width:"100%",borderRadius:2}),loading:Ct,children:(0,l.jsx)(G.K,{ref:(0,x.A)(Y,lt),"data-size":$e,value:kt,onChange:Lt,onFocus:ue,onBlur:nt,onKeyDown:t,tabIndex:Wt,placeholder:ge,disabled:Ee,readonly:Le,type:he?"password":"text",maxLength:re?void 0:Ae||void 0,id:I,name:W,autoComplete:ot,autoFocus:te,"data-test-id":"field-secure__input"})})})}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/FieldSelect.js"(ee,L,e){e.d(L,{H:()=>g});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),C=e.n(d),b=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),S=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),G=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"),Z=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/WithTooltip/WithTooltip.js"),O=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),q=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const T={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},N={Xs:"xs",S:"s"},oe={[N.Xs]:16,[N.S]:24};var de=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),F=e.n(de),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),He=e.n(X),Me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Te=e.n(Me),Ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),ve=e.n(Ke),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Pe=e.n(A),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),R=e.n(J),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.20_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"),M={};M.styleTagTransform=R(),M.setAttributes=ve(),M.insert=Te().bind(null,"head"),M.domAPI=He(),M.insertStyleElement=Pe();var H=F()(h.A,M);const je=h.A&&h.A.locals?h.A.locals:void 0;var ke=function(c,u){var m={};for(var v in c)Object.prototype.hasOwnProperty.call(c,v)&&u.indexOf(v)<0&&(m[v]=c[v]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,v=Object.getOwnPropertySymbols(c);j<v.length;j++)u.indexOf(v[j])<0&&Object.prototype.propertyIsEnumerable.call(c,v[j])&&(m[v[j]]=c[v[j]]);return m};function Se(c){return"changeRestrictTooltipState"in c&&c.changeRestrictTooltipState!==void 0}function z(c){const{label:u,size:m=N.Xs,appearance:v=T.Neutral,onDelete:j,className:E,tabIndex:K}=c,pe=ke(c,["label","size","appearance","onDelete","className","tabIndex"]),Ve=(0,x.useRef)(null),xe=!!j,Oe=Tt=>{if(xe&&Se(c)){const{changeRestrictTooltipState:Dt}=c;Dt(Tt)}},De=Tt=>{var Dt;!((Dt=Ve.current)===null||Dt===void 0)&&Dt.contains(Tt.target)&&Oe(!0)},Ye=()=>{Oe(!1)};return(0,l.jsxs)("span",Object.assign({},(0,q.z7)(pe),{className:C()(je.tag,E),"data-size":m,"data-appearance":v,"data-removable":xe,onMouseEnter:De,onMouseLeave:Ye,children:[(0,l.jsx)("span",{className:je.label,children:u}),xe&&(0,l.jsx)("button",{type:"button",className:je.tagButton,onClick:j,"data-test-id":"tag-remove-button",tabIndex:K,onMouseEnter:De,onMouseLeave:Ye,ref:Ve,children:m===N.Xs?(0,l.jsx)(O.A,{size:oe[m],className:je.icon}):(0,l.jsx)(O.A,{size:oe[m],className:je.icon})})]}))}var D=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.20_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"),me={};me.styleTagTransform=R(),me.setAttributes=ve(),me.insert=Te().bind(null,"head"),me.domAPI=He(),me.insertStyleElement=Pe();var se=F()(D.A,me);const ce=D.A&&D.A.locals?D.A.locals:void 0;var be=function(c,u){var m={};for(var v in c)Object.prototype.hasOwnProperty.call(c,v)&&u.indexOf(v)<0&&(m[v]=c[v]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,v=Object.getOwnPropertySymbols(c);j<v.length;j++)u.indexOf(v[j])<0&&Object.prototype.propertyIsEnumerable.call(c,v[j])&&(m[v[j]]=c[v[j]]);return m};function ze(c){var{label:u,size:m=N.Xs,appearance:v=T.Neutral,className:j,tabIndex:E,href:K,onClick:pe,target:Ve}=c,xe=be(c,["label","size","appearance","className","tabIndex","href","onClick","target"]);return(0,l.jsx)("a",Object.assign({},(0,q.z7)(xe),{className:C()(ce.tag,j),"data-size":m,"data-appearance":v,tabIndex:E,href:K,target:Ve,onClick:pe,children:(0,l.jsx)("span",{className:ce.label,children:u})}))}function ae(c){return"href"in c&&c.href!==void 0}function ye(c){return"tooltip"in c&&c.tooltip!==void 0}function Ie(c){const[u,m]=(0,x.useState)(!1),v=ae(c);if(!ye(c))return v?(0,l.jsx)(ze,Object.assign({},c)):(0,l.jsx)(z,Object.assign({},c));const{tooltip:j}=c,E=j&&Object.assign(Object.assign({},j),{open:u?!1:j.open}),K=Object.assign(Object.assign({},c),{changeRestrictTooltipState:m});return(0,l.jsx)(Z.k,{tooltip:E,children:v?(0,l.jsx)(ze,Object.assign({},c)):(0,l.jsx)(z,Object.assign({},K))})}var ie=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),P=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),B=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),Y=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),I=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"),W=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"),$=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),ge=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js");function Ae({error:c,required:u,readonly:m,label:v,labelTooltip:j,labelTooltipPlacement:E,labelFor:K,caption:pe,hint:Ve,disabled:xe,showHintIcon:Oe,size:De,validationState:Ye,className:Tt}){return{error:c,required:u,readonly:m,label:v,labelTooltip:j,labelTooltipPlacement:E,labelFor:K,caption:pe,hint:Ve,disabled:xe,showHintIcon:Oe,size:De,validationState:Ye,className:Tt}}var Ee=e("./node_modules/.pnpm/fuzzy-search@3.2.1/node_modules/fuzzy-search/src/FuzzySearch.js"),Le=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),Ce=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),re=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),V=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),le,we,ne,ue;function nt({items:c,openCollapsedItems:u}){let m=[],v=[],j=[],E=[];return c.forEach(K=>{var pe;if((le(K)&&!K.inactive||we(K)||ne(K))&&!K.disabled&&(v=v.concat([K]),j=j.concat([(pe=K.id)!==null&&pe!==void 0?pe:""]),K.itemRef&&(m=m.concat([K.itemRef]))),we(K)&&K.id&&!K.disabled&&(E=E.concat(K.id)),ue(K)){const{itemRefs:Ve,ids:xe}=nt({items:K.items,openCollapsedItems:u});j=j.concat(xe),m=m.concat(Ve)}if(ne(K)&&K.id&&u.includes(K.id)){const{itemRefs:Ve,ids:xe,items:Oe,expandedIds:De}=nt({items:K.items,openCollapsedItems:u});j=j.concat(xe),v=v.concat(Oe),m=m.concat(Ve),E=E.concat(De)}}),{items:c,itemRefs:m,ids:j,expandedIds:E}}function qe(c){return c.reduce((u,m)=>ue(m)?u.concat(qe(m.items)):m.id?u.concat([m.id]):u,[])}function Xe({items:c}){return c.filter(u=>(0,re.gZ)(u)||(0,re.pN)(u)||(0,re.jQ)(u)||(0,re.Xy)(u)&&!u.disabled&&!u.inactive).reduce((u,m)=>{var v;return(0,re.gZ)(m)||(0,re.pN)(m)?u.concat([(v=m.id)!==null&&v!==void 0?v:""]).concat(Xe({items:m.items})):(0,re.jQ)(m)?u.concat(Xe({items:m.items})):m.id&&!(0,re.jQ)(m)?u.concat([m.id]):u},[])}function Je({items:c}){return c.filter(u=>ne(u)||we(u)||ue(u)||le(u)&&!u.inactive).reduce((u,m)=>{var v;return ne(m)||we(m)?u.concat([(v=m.id)!==null&&v!==void 0?v:""]).concat(Je({items:m.items})):ue(m)?u.concat(Je({items:m.items})):m.id&&!ue(m)?u.concat([m.id]):u},[])}function Re(c){const u=[];function m(v){if((0,re.jQ)(v)||u.push(v),"items"in v)for(const j of v.items)m(j)}for(const v of c)m(v);return u}function et(c){return!("options"in c)}function ct(c){return"options"in c&&c.type==="collapse"}function rt(c){return"options"in c&&c.type==="next-list"}function $e(c){return"options"in c&&c.type==="group"}function ut(c){return"selection"in c&&c.selection==="multiple"}function _t(c){return"selection"in c&&c.selection==="single"||c.selection===void 0}function at(c,u){const m=u.split("."),v=m[0];if(!c[v])return"";if(m.length>1)return at(c[v],m.slice(1,m.length).join("."));if(u in c){const j=c[u];if(typeof j=="string"||typeof j=="number")return j.toString()||""}return""}const jt=c=>c.id!==void 0,ot=c=>c.type==="group";function te(c,u){const m=Array(u.length);return c.forEach(v=>{if(jt(v)&&v.id){const j=u.indexOf(v.id);if(j!==-1){m[j]=v;return}}if(ot(v)){const j=te(v.items,u);j.length&&m.push(Object.assign(Object.assign({},v),{items:j}));return}}),m.filter(Boolean)}function Ne({setOpen:c,inputKeyDownNavigationHandler:u,onInputKeyDownProp:m}){return(0,x.useCallback)(v=>j=>{j.code==="Space"?j.stopPropagation():v==null||v(j),j.code==="ArrowUp"&&c(!1),["ArrowUp","ArrowDown"].includes(j.key)&&j.preventDefault(),j.key==="Tab"&&c(!1),u(j),m==null||m(j)},[u,m,c])}function tt({readonly:c,showClearButton:u,showCopyButton:m,size:v,onClear:j,onCopyButtonClick:E,inputRef:K,valueToCopy:pe=""}){const Ve=(0,x.useRef)(null),xe=(0,x.useRef)(null),Oe=[xe.current,Ve.current],De=(0,Le.r)({clearButtonRef:Ve,showClearButton:!c&&u,size:v,onClear:j}),Ye=(0,V.x)({copyButtonRef:xe,showCopyButton:c&&m,size:v,valueToCopy:pe,onCopyButtonClick:E}),{onInputKeyDown:Tt,postfixButtons:Dt}=(0,Ce.C)({inputRef:K,postfixButtons:(0,x.useMemo)(()=>[De,Ye],[De,Ye]),onButtonKeyDown:void 0,readonly:c,submitKeys:["Enter","Space","Tab"]});return{postfixButtons:Dt,inputKeyDownNavigationHandler:Tt,buttonsRefs:Oe}}function lt({value:c,onChange:u,defaultValue:m,selectedOptionFormatter:v,resetSearchOnOptionSelection:j=!0}){const[E="",K]=(0,Y.I)({value:c,onChange:u,defaultValue:m}),pe=(0,x.useRef)(E),Ve=(0,x.useCallback)(Oe=>{const De=v(Oe);j&&(E!==De||pe.current!==De)&&(K(De),pe.current=De)},[E,j,v,K]),xe=(0,x.useCallback)(Oe=>{const De=pe.current&&Oe.includes(pe.current)?Oe.replace(pe.current,""):Oe;K(De)},[K]);return{inputValue:E,setInputValue:xe,prevInputValue:pe,onInputValueChange:xe,updateInputValue:Ve}}function dt(c){return(0,x.useCallback)(u=>m=>{var v;if(m==null||m.stopPropagation(),!!u){if((0,re.gZ)(u)||(0,re.pN)(u)){const j=Xe({items:u.items}).concat((v=u.id)!==null&&v!==void 0?v:"");c(E=>E==null?void 0:E.filter(K=>!j.includes(K!=null?K:"")));return}et(u)&&c(j=>j==null?void 0:j.filter(E=>E!==u.id))}},[c])}const pt=1,yt=["content.option","content.caption","content.description"];function At(c,u=!0){const m=(0,x.useMemo)(()=>{const{flattenItems:E}=(0,re.lg)({items:c});return Object.values(E)},[c]),v=(0,x.useCallback)(E=>u?new Ee.A(m,yt,{sort:!0}).search(E):m.filter(pe=>[...yt,"label"].some(Ve=>at(pe,Ve).toLowerCase().includes(E.toLowerCase()))),[u,m]),j=(0,x.useCallback)(E=>{const K=v(E).map(pe=>pe.id);return te(c,K)},[v,c]);return(0,x.useCallback)(E=>E.length>=pt?j(E):c,[j,c])}var Ct=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/hooks/customOption.js"),vt=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/styles.module.css"),kt={};kt.styleTagTransform=R(),kt.setAttributes=ve(),kt.insert=Te().bind(null,"head"),kt.domAPI=He(),kt.insertStyleElement=Pe();var Lt=F()(vt.A,kt);const he=vt.A&&vt.A.locals?vt.A.locals:void 0;var Ue,mt=function(c,u){var m={};for(var v in c)Object.prototype.hasOwnProperty.call(c,v)&&u.indexOf(v)<0&&(m[v]=c[v]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,v=Object.getOwnPropertySymbols(c);j<v.length;j++)u.indexOf(v[j])<0&&Object.prototype.propertyIsEnumerable.call(c,v[j])&&(m[v[j]]=c[v[j]]);return m};function xt(c){return c.map(u=>{if(ct(u)||rt(u)){const{description:xe,option:Oe,caption:De,options:Ye,value:Tt}=u,Dt=mt(u,["description","option","caption","options","value"]);return Object.assign(Object.assign({"data-test-id":"field-select__list-option-"+u.value},Dt),{id:Tt,content:{option:Oe,caption:De,description:xe},items:xt(Ye)})}if($e(u)){const{options:xe}=u,Oe=mt(u,["options"]);return Object.assign(Object.assign({},Oe),{items:xt(xe)})}const m=u,{description:v,option:j,caption:E,value:K,appearance:pe}=m,Ve=mt(m,["description","option","caption","value","appearance"]);return Object.assign(Object.assign({"data-test-id":"field-select__list-option-"+u.value},Ve),{id:K,appearance:pe,content:{option:j,caption:E,description:v}})})}function gt(c,u){const m=Ue(c);if(!u)return[void 0,void 0];const v=m.find(E=>String(E.id)===String(u)),j={id:u,content:{option:String(u)}};return[v,v?void 0:j]}function zt(c,u){const m=Ue(c);if(!u||!(u!=null&&u.length))return[void 0,void 0];let v,j;return u.forEach(E=>{if(m){const[K,pe]=gt(m,E);(K||v)&&(v=(v!=null?v:[]).concat(K!=null?K:[])),(pe||j)&&(j=(j!=null?j:[]).concat(pe!=null?pe:[]))}}),[v,j]}function Rt(c){return{id:c,content:{option:String(c)},placeholder:!0}}function St({options:c,value:u,selectedItem:m}){if(c.length<1)return{selectedItem:void 0,items:[]};const v=xt(c);if(u===void 0)return{selectedItem:void 0,items:v};let j=v,E=m;const K=Re(v).find(pe=>pe.id===u);return K?E=K:m&&(m==null?void 0:m.id)===u?j=[m,...j]:(E=Rt(u),j=[E,...j]),{selectedItem:E,items:j}}function Ft({options:c,value:u,selectedItems:m}){if(c.length<1)return{selectedItems:void 0,items:[]};const v=xt(c);if(!u||!u.length)return{selectedItems:void 0,items:v};const j=[];let E=v,K=m;const pe=Re(v),Ve=pe.filter(Oe=>{if(u.includes(Oe.id)&&!j.includes(Oe.id))return j.push(Oe.id),!0}),xe=u.filter(Oe=>!pe.find(De=>De.id===Oe));if(xe.length){const Oe=xe.map(De=>(m==null?void 0:m.find(Ye=>Ye.id===De))||Rt(De));K=[...Ve,...Oe],E=[...Oe,...E]}else K=Ve;return{selectedItems:K.sort((Oe,De)=>De.disabled&&!Oe.disabled?1:Oe.disabled&&!De.disabled?-1:0),items:E}}var Ot=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/utils/getArrowIcon.js"),Wt=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/utils/customOption.js");function t({autocomplete:c,searchable:u,isSameValue:m}){return c||!u||m}function s({dataError:c,noDataState:u,noResultsState:m,errorDataState:v,dataFiltered:j,loading:E,footer:K,widthStrategy:pe,scrollToSelectedItem:Ve,virtualized:xe,scrollRef:Oe,scrollContainerRef:De,onScroll:Ye}){return{dataError:c,noDataState:u,noResultsState:m,errorDataState:v,dataFiltered:j,loading:E,footer:K,widthStrategy:pe,scrollToSelectedItem:Ve,scrollRef:Oe,scrollContainerRef:De,onScroll:Ye,trigger:"clickAndFocusVisible",placement:"bottom","data-test-id":"field-select__list",virtualized:xe,scroll:!0,marker:!0}}var n=function(c,u){var m={};for(var v in c)Object.prototype.hasOwnProperty.call(c,v)&&u.indexOf(v)<0&&(m[v]=c[v]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,v=Object.getOwnPropertySymbols(c);j<v.length;j++)u.indexOf(v[j])<0&&Object.prototype.propertyIsEnumerable.call(c,v[j])&&(m[v[j]]=c[v[j]]);return m};const o=4,r=c=>(c==null?void 0:c.content.option)||"",i=(0,x.forwardRef)((c,u)=>{var m;const{id:v,name:j,placeholder:E,size:K="s",options:pe,value:Ve,defaultValue:xe,onChange:Oe,disabled:De=!1,readonly:Ye=!1,searchable:Tt=!0,showClearButton:Dt=!0,onKeyDown:ss,validationState:os="default",search:Ht,autocomplete:Jt=!1,prefixIcon:as,prefix:is,postfix:We,removeByBackspace:Qe=!1,addOptionByEnter:vs=!1,addCustomOptionTriggers:us,untouchableScrollbars:Is=!1,open:Ts,enableFuzzySearch:Fs=!0,resetSearchOnOptionSelection:ps=!0,onOpenChange:xs,selectedOptionFormatter:ls=r,autoFocus:Zs}=c,rs=n(c,["id","name","placeholder","size","options","value","defaultValue","onChange","disabled","readonly","searchable","showClearButton","onKeyDown","validationState","search","autocomplete","prefixIcon","prefix","postfix","removeByBackspace","addOptionByEnter","addCustomOptionTriggers","untouchableScrollbars","open","enableFuzzySearch","resetSearchOnOptionSelection","onOpenChange","selectedOptionFormatter","autoFocus"]),Bt=(0,x.useRef)(null),Gt=(0,x.useRef)(null),Et=(0,x.useRef)(null),[Zt=!1,Qt]=(0,Y.I)({value:Ts,onChange:xs}),[Vt,It]=(0,Y.I)({value:Ve,defaultValue:xe,onChange:Oe}),[{selectedItems:Nt,items:As=[]},ms]=(0,x.useState)(()=>Ft({options:pe,value:Vt,currentItems:[],selectedItems:void 0})),{inputValue:$t,setInputValue:Hs,prevInputValue:js,updateInputValue:qt}=lt(Object.assign(Object.assign({},Ht),{defaultValue:"",selectedOptionFormatter:ls,resetSearchOnOptionSelection:ps})),{resolvedAddCustomOptionTriggers:ds,tryCommitCustomOptionFromInput:_s}=(0,Ct.Q)({addCustomOptionTriggers:us,addOptionByEnter:vs,inputValue:$t,value:Vt,setValue:It,updateInputValue:qt}),Ss=(0,I.M)({prefix:is,disabled:De}),Os=(0,W.$)({postfix:We,disabled:De});(0,ie.N)(()=>{ms(({selectedItems:Ge})=>Ft({options:pe,value:Vt,selectedItems:Ge}))},[pe,Vt]);const gs=()=>{var Ge;It(Nt==null?void 0:Nt.filter(st=>st.disabled).map(st=>st.id)),(Ge=Bt.current)===null||Ge===void 0||Ge.focus(),rs.required&&Qt(!0)},{ArrowIcon:Ds,arrowIconSize:Ns}=(0,Ot.n)({size:K,open:Zt}),{postfixButtons:Bs,inputKeyDownNavigationHandler:Ws,buttonsRefs:fs}=tt({readonly:Ye,size:K,showClearButton:Dt&&!De&&!Ye&&!!(Nt!=null&&Nt.find(Ge=>!Ge.disabled)),showCopyButton:!1,inputRef:Bt,onClear:gs}),Es=Ne({inputKeyDownNavigationHandler:Ws,onInputKeyDownProp:ss,setOpen:Qt}),hs=dt(It),Ms=(0,x.useCallback)(Ge=>()=>{var st;hs(Ge)(),(st=Bt.current)===null||st===void 0||st.focus()},[hs]),Ks=Ge=>st=>{if(Qe&&st.code==="Backspace"&&$t===""&&Nt!=null&&Nt.length&&!Nt.slice(-1)[0].disabled&&hs(Nt.pop())(),st.code==="Enter")st.stopPropagation(),st.preventDefault(),_s("enter");else{const es=(0,Wt.p)(st.code);(0,Wt.O)(es,ds)&&(st.stopPropagation(),st.preventDefault(),_s(es))}!Zt&&js.current!==$t&&Qt(!0),Es(Ge)(st)},Us=Ge=>{(0,P.B)()&&!Ye&&!De&&!fs.includes(document.activeElement)&&(Qt(Ge),Ge||Gt.current&&(Gt.current.style.width=o+"px"),Ge&&Gt.current&&(Gt.current.style.width="unset"))},Vs=Ge=>{var st;!Zt&&!fs.filter(Boolean).includes(Ge.relatedTarget)&&(_s("blur"),qt(),(st=rs==null?void 0:rs.onBlur)===null||st===void 0||st.call(rs,Ge))},Gs=At(As,Fs),Ls=t({autocomplete:Jt,searchable:Tt,isSameValue:js.current===$t})?As:Gs($t),cs=(0,$.t)({validationState:os,error:rs.error}),ns=(0,x.useRef)(null),ht=(0,x.useRef)(Vt);return ht.current=Vt,(0,x.useEffect)(()=>{var Ge,st;ns.current&&((Ge=(st=ns.current).__snackApi)!==null&&Ge!==void 0||(st.__snackApi={}),ns.current.__snackApi.setSelectValue=es=>{It(es)},ns.current.__snackApi.getSelectValue=()=>ht.current)},[It]),(0,l.jsx)(ge.m,Object.assign({},(0,q.z7)(rs),Ae(c),{validationState:cs,"data-snack-api":"field-select",ref:ns,children:(0,l.jsx)(G.i,Object.assign({},s(c),{items:Ls,triggerElemRef:Bt,trigger:"click",selection:{mode:"multiple",value:Vt,onChange:Ge=>{var st;It(Ge),$t&&((st=Bt.current)===null||st===void 0||st.focus(),qt())}},dataFiltered:(m=rs.dataFiltered)!==null&&m!==void 0?m:!!$t.length,untouchableScrollbars:Is,size:K,open:!De&&!Ye&&Zt,onOpenChange:Us,children:({onKeyDown:Ge})=>{var st,es,Cs,Ps;return(0,l.jsx)(B.V,{className:C()(he.container,he.tagContainer),validationState:cs,disabled:De,readonly:Ye,focused:Zt,variant:"single-line-container",inputRef:Bt,size:K,prefix:(as||Ss.show)&&(0,l.jsxs)(l.Fragment,{children:[as,Ss.show&&Ss.render({key:Ss.id})]}),children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:he.contentWrapper,ref:Et,children:[Nt&&Nt.map(bs=>{var Ys;return(0,l.jsx)(Ie,{size:K==="l"?"s":"xs",tabIndex:-1,label:ls(bs),appearance:(Ys=bs.appearance)!==null&&Ys!==void 0?Ys:"neutral",onDelete:!bs.disabled&&!De&&!Ye?Ms(bs):void 0,className:he.tag,"data-disabled":De||void 0},bs.id)}),(0,l.jsx)("div",{className:he.inputWrapper,style:{minWidth:Vt?Math.min((es=(st=Et.current)===null||st===void 0?void 0:st.clientWidth)!==null&&es!==void 0?es:o,(Ps=(Cs=Gt.current)===null||Cs===void 0?void 0:Cs.clientWidth)!==null&&Ps!==void 0?Ps:o):"100%"},children:(0,l.jsx)(S.K,{id:v,name:j,type:"text",disabled:De,placeholder:!Nt||!Nt.length?E:void 0,ref:(0,b.A)(u,Bt),onChange:Tt?Hs:void 0,value:Tt?$t:"",readonly:!Tt||Ye,onKeyDown:Ks(Ge),onBlur:Vs,className:C()({[he.readonlyCursor]:!Tt}),autoFocus:Zs,"data-test-id":"field-select__input"})})]}),(0,l.jsxs)("div",{className:he.postfix,children:[Bs,Os.show&&Os.render({key:Os.id}),(0,l.jsx)(Ds,{size:Ns,className:he.arrowIcon})]}),(0,l.jsx)("span",{ref:Gt,className:he.inputPlug,children:$t})]})})}}))}))});var p=function(c,u){var m={};for(var v in c)Object.prototype.hasOwnProperty.call(c,v)&&u.indexOf(v)<0&&(m[v]=c[v]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,v=Object.getOwnPropertySymbols(c);j<v.length;j++)u.indexOf(v[j])<0&&Object.prototype.propertyIsEnumerable.call(c,v[j])&&(m[v[j]]=c[v[j]]);return m};const f=c=>(c==null?void 0:c.content.option)||"",k=(0,x.forwardRef)((c,u)=>{const{id:m,name:v,placeholder:j,size:E="s",options:K,value:pe,defaultValue:Ve,onChange:xe,disabled:Oe=!1,readonly:De=!1,searchable:Ye=!0,showCopyButton:Tt=!0,showClearButton:Dt=!0,onKeyDown:ss,required:os=!1,validationState:Ht="default",search:Jt,autocomplete:as=!1,prefixIcon:is,prefix:We,postfix:Qe,addOptionByEnter:vs=!1,addCustomOptionTriggers:us,untouchableScrollbars:Is=!1,open:Ts,onOpenChange:Fs,selectedOptionFormatter:ps=f,enableFuzzySearch:xs=!0,resetSearchOnOptionSelection:ls=!0,onCopyButtonClick:Zs,autoFocus:rs}=c,Bt=p(c,["id","name","placeholder","size","options","value","defaultValue","onChange","disabled","readonly","searchable","showCopyButton","showClearButton","onKeyDown","required","validationState","search","autocomplete","prefixIcon","prefix","postfix","addOptionByEnter","addCustomOptionTriggers","untouchableScrollbars","open","onOpenChange","selectedOptionFormatter","enableFuzzySearch","resetSearchOnOptionSelection","onCopyButtonClick","autoFocus"]),Gt=(0,x.useRef)(null),[Et=!1,Zt]=(0,Y.I)({value:Ts,onChange:Fs}),[Qt,Vt]=(0,Y.I)({value:pe,defaultValue:Ve,onChange:xe}),[{selectedItem:It,items:Nt=[]},As]=(0,x.useState)(()=>St({options:K,value:Qt,currentItems:[],selectedItem:void 0})),{inputValue:ms,setInputValue:$t,prevInputValue:Hs,updateInputValue:js}=lt(Object.assign(Object.assign({},Jt),{defaultValue:ps(It),resetSearchOnOptionSelection:ls,selectedOptionFormatter:ps})),qt=(0,x.useRef)(It),ds=(0,I.M)({prefix:We,disabled:Oe}),_s=(0,W.$)({postfix:Qe,disabled:Oe});(0,ie.N)(()=>{As(({selectedItem:ht})=>St({options:K,value:Qt,selectedItem:ht}))},[K,Qt]),(0,x.useEffect)(()=>{qt.current&&qt.current.id===(It==null?void 0:It.id)&&qt.current.content.option===(It==null?void 0:It.content.option)||(qt.current=It,js(It))},[It,qt]);const Ss=(0,x.useCallback)(()=>{var ht;Vt(void 0),$t(""),(ht=Gt.current)===null||ht===void 0||ht.focus(),os&&Zt(!0)},[os,$t,Zt,Vt]),{ArrowIcon:Os,arrowIconSize:gs}=(0,Ot.n)({size:E,open:Et}),{postfixButtons:Ds,inputKeyDownNavigationHandler:Ns,buttonsRefs:Bs}=tt({readonly:De,size:E,showClearButton:Dt&&!Oe&&!De&&Qt!==void 0&&It!==void 0,showCopyButton:Tt,inputRef:Gt,onClear:Ss,onCopyButtonClick:Zs,valueToCopy:ps(It)}),Ws=Ne({inputKeyDownNavigationHandler:Ns,onInputKeyDownProp:ss,setOpen:Zt}),fs=(0,x.useCallback)(ht=>{var Ge;Zt(!1),ht!==void 0&&((Ge=Gt.current)===null||Ge===void 0||Ge.focus(),Vt(ht))},[Zt,Vt]),{resolvedAddCustomOptionTriggers:Es,tryCommitCustomOptionFromInput:hs}=(0,Ct.a)({addCustomOptionTriggers:us,addOptionByEnter:vs,inputValue:ms,handleSelectionChange:fs}),Ms=ht=>{var Ge;!Et&&!Bs.filter(Boolean).includes(ht.relatedTarget)&&((0,Wt.O)("blur",Es)&&ms!==""?hs("blur"):js(It),(Ge=Bt==null?void 0:Bt.onBlur)===null||Ge===void 0||Ge.call(Bt,ht))},Ks=ht=>Ge=>{!Et&&Hs.current!==ms&&Zt(!0),Ge.code==="Enter"&&(Ge.stopPropagation(),Ge.preventDefault(),hs("enter")),Ws(ht)(Ge)},Us=ht=>{(0,P.B)()&&!De&&!Oe&&!Bs.includes(document.activeElement)&&(Zt(ht),!ht&&!(0,Wt.O)("blur",Es)&&js(It))},Vs=At(Nt,xs),ws=t({autocomplete:as,searchable:Ye,isSameValue:ps(It)===ms})?Nt:Vs(ms),Ls=(0,$.t)({validationState:Ht,error:Bt.error}),cs=(0,x.useRef)(null),ns=(0,x.useRef)(Qt);return ns.current=Qt,(0,x.useEffect)(()=>{var ht,Ge,st,es,Cs,Ps;cs.current&&((ht=(es=cs.current).__snackApi)!==null&&ht!==void 0||(es.__snackApi={}),(Ge=(Cs=cs.current.__snackApi).setSelectValue)!==null&&Ge!==void 0||(Cs.setSelectValue=bs=>{Vt(bs)}),(st=(Ps=cs.current.__snackApi).getSelectValue)!==null&&st!==void 0||(Ps.getSelectValue=()=>ns.current))},[Vt]),(0,l.jsx)(ge.m,Object.assign({},(0,q.z7)(Bt),Ae(c),{validationState:Ls,"data-snack-api":"field-select",ref:cs,children:(0,l.jsx)(G.i,Object.assign({},s(c),{items:ws,selection:{mode:"single",value:Qt,onChange:fs},size:E,open:Et,onOpenChange:Us,trigger:"click",triggerElemRef:Gt,untouchableScrollbars:Is,children:({onKeyDown:ht})=>(0,l.jsxs)(B.V,{className:he.container,validationState:Ls,disabled:Oe,readonly:De,focused:Et,variant:"single-line-container",inputRef:Gt,size:E,prefix:(is||ds.show)&&(0,l.jsxs)(l.Fragment,{children:[is,ds.show&&ds.render({key:ds.id})]}),children:[(0,l.jsx)(S.K,{id:m,name:v,type:"text",disabled:Oe,placeholder:j,ref:(0,b.A)(u,Gt),onChange:Ye?$t:void 0,value:Ye?ms:ps(It),readonly:De,"data-test-id":"field-select__input",onKeyDown:Ks(ht),onBlur:Ms,className:C()({[he.readonlyCursor]:!Ye}),autoFocus:rs}),(0,l.jsxs)("div",{className:he.postfix,children:[Ds,_s.show&&_s.render({key:_s.id}),(0,l.jsx)(Os,{size:gs,className:he.arrowIcon})]})]})}))}))}),g=(0,x.forwardRef)((c,u)=>ut(c)?(0,l.jsx)(i,Object.assign({},c,{ref:u})):_t(c)?(0,l.jsx)(k,Object.assign({},c,{ref:u})):null)},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/hooks/customOption.js"(ee,L,e){e.d(L,{Q:()=>d,a:()=>C});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function x({addCustomOptionTriggers:b,addOptionByEnter:S}){return(0,l.useMemo)(()=>b!==void 0?b:S?["enter"]:[],[b,S])}function d({addCustomOptionTriggers:b,addOptionByEnter:S,inputValue:G,value:Z,setValue:O,updateInputValue:q}){const T=x({addCustomOptionTriggers:b,addOptionByEnter:S}),N=(0,l.useCallback)(oe=>{!T.includes(oe)||G===""||(Z!=null?Z:[]).includes(G)||(O(de=>(de!=null?de:[]).concat(G)),q())},[T,G,Z,O,q]);return{resolvedAddCustomOptionTriggers:T,tryCommitCustomOptionFromInput:N}}function C({addCustomOptionTriggers:b,addOptionByEnter:S,inputValue:G,handleSelectionChange:Z}){const O=x({addCustomOptionTriggers:b,addOptionByEnter:S}),q=(0,l.useCallback)(T=>{!O.includes(T)||G===""||Z(G)},[O,G,Z]);return{resolvedAddCustomOptionTriggers:O,tryCommitCustomOptionFromInput:q}}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/utils/customOption.js"(ee,L,e){e.d(L,{O:()=>x,p:()=>l});const l=d=>{switch(d){case"Enter":return"enter";case"Space":return"space";case"Comma":return"comma";default:return}},x=(d,C)=>d?C.includes(d):!1},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/utils/getArrowIcon.js"(ee,L,e){e.d(L,{n:()=>C});var l=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),x=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js");function C({size:b,open:S}){return{ArrowIcon:S?x.A:l.A,arrowIconSize:b===d.SK.S?d.Ev.Xs:d.Ev.S}}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSlider/FieldSlider.js"(ee,L,e){e.d(L,{w:()=>ze});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),b=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),S=e("./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/Slider.js"),G=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),Z=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),O=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),q=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),T=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),N=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"),oe=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"),de=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js");const F=(ae,ye)=>ye?typeof ae=="number"?ye(ae):ae.map(ye).join(" \u2013 "):typeof ae=="number"?String(ae):ae.join(" \u2013 ");function X(ae){return!!(ae&&typeof ae=="object"&&"label"in ae)}const He=(ae,ye)=>Math.abs(ye-ae),Me=(ae,ye,Ie)=>ye.reduce((ie,P)=>{const B=He(ae,Ie(P));return B<ie.lowestDiff?{lowestDiff:B,mark:P}:ie},{lowestDiff:He(ae,Ie(ye[0])),mark:ye[0]}),Te=(ae,ye,Ie)=>{const ie=[];let P=ae;for(;P<=ye;)ie.push(parseFloat(P.toFixed(10))),P+=Ie;return ie};var Ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ve=e.n(Ke),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Pe=e.n(A),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),R=e.n(J),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(h),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),je=e.n(H),ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Se=e.n(ke),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSlider/styles.module.css"),D={};D.styleTagTransform=Se(),D.setAttributes=M(),D.insert=R().bind(null,"head"),D.domAPI=Pe(),D.insertStyleElement=je();var me=ve()(z.A,D);const se=z.A&&z.A.locals?z.A.locals:void 0;var ce=function(ae,ye){var Ie={};for(var ie in ae)Object.prototype.hasOwnProperty.call(ae,ie)&&ye.indexOf(ie)<0&&(Ie[ie]=ae[ie]);if(ae!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,ie=Object.getOwnPropertySymbols(ae);P<ie.length;P++)ye.indexOf(ie[P])<0&&Object.prototype.propertyIsEnumerable.call(ae,ie[P])&&(Ie[ie[P]]=ae[ie[P]]);return Ie};const be=(ae,ye,Ie,ie)=>ae?ie||[ye,Ie]:ie!=null?ie:ye,ze=(0,d.forwardRef)((ae,ye)=>{var{id:Ie,name:ie,min:P,max:B,step:Y,marks:I,showScaleBar:W=!0,value:$,range:ge=!1,disabled:Ae=!1,readonly:Ee=!1,onChange:Le,onFocus:Ce,onBlur:re,className:V,label:le,labelTooltip:we,labelTooltipPlacement:ne,required:ue,caption:nt,hint:qe,showHintIcon:Xe,size:Je=C.SK.S,textInputFormatter:Re,unbindInputFromMarks:et,postfixIcon:ct,prefix:rt,postfix:$e,autoFocus:ut}=ae,_t=ce(ae,["id","name","min","max","step","marks","showScaleBar","value","range","disabled","readonly","onChange","onFocus","onBlur","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","size","textInputFormatter","unbindInputFromMarks","postfixIcon","prefix","postfix","autoFocus"]);const[at=be(ge,P,B,$),jt]=(0,T.I)({value:$,defaultValue:be(ge,P,B,$),onChange:Le}),[ot,te]=(0,d.useState)(F(at,Re)),Ne=(0,d.useRef)(null),tt=(0,N.M)({prefix:rt,disabled:Ae}),lt=(0,oe.$)({postfix:$e,disabled:Ae}),dt=(0,d.useCallback)(he=>{const Ue=I[he];return X(Ue)?Ue.label:Ue},[I]),pt=(0,d.useMemo)(()=>Object.keys(I).every(he=>he===dt(he)),[dt,I]),yt=he=>{const Ue=parseFloat(he);he&&Number.isNaN(Ue)||te(he)},At=he=>{const Ue=St=>{te(String(dt(St))),jt(Number(St))},mt=Object.keys(I).map(St=>({key:St,value:parseFloat(String(dt(St)))})),xt=mt.find(St=>St.value===he);if(xt){Ue(xt.key);return}const gt=parseFloat(String(dt(P))),zt=parseFloat(String(dt(B)));if(he<gt){Ue(P);return}if(he>zt){Ue(B);return}const{mark:Rt}=Me(he,mt,St=>St.value);Ue(Rt.key)},Ct=he=>{const Ue=gt=>{te(String(gt)),jt(gt)};if(he<=P){Ue(P);return}if(he>=B){Ue(B);return}if(Y===null){const gt=Object.keys(I).map(Number);if(gt.includes(he)){te(String(he)),Ue(he);return}const{mark:zt}=Me(he,gt,Rt=>Rt);Ue(zt);return}const mt=Te(P,B,Y);if(mt.includes(he)){Ue(he);return}const{mark:xt}=Me(he,mt,gt=>gt);Ue(xt)},vt=(0,G.A)(()=>{if(ge)return;const he=parseFloat(ot),Ue=parseFloat(String(dt(P))),mt=Number.isNaN(Ue)?P:Ue,xt=ot?he:mt;Number.isNaN(xt)||(pt||et?Ct(xt):At(xt))}),kt=he=>{re==null||re(he),vt()},Lt=he=>{he.key==="Enter"&&vt()};return(0,d.useEffect)(()=>{te(F(at,Re))},[at,Re]),(0,d.useEffect)(()=>{vt()},[I,P,B,vt]),(0,l.jsxs)(de.m,Object.assign({className:V,label:le,labelTooltip:we,labelTooltipPlacement:ne,labelFor:Ie,disabled:Ae,required:ue,caption:nt,hint:qe,showHintIcon:Xe,readonly:Ee,size:Je},(0,Z.z7)(_t),{children:[(0,l.jsx)(q.V,{className:se.fieldContainer,size:Je,validationState:O.sv.Default,disabled:Ae,readonly:Ee,variant:O.aJ.SingleLine,inputRef:Ne,prefix:tt.show&&tt.render({key:tt.id}),postfix:(0,l.jsxs)(l.Fragment,{children:[lt.show&&lt.render({key:lt.id}),ct]}),children:(0,l.jsx)(b.K,{ref:(0,x.A)(ye,Ne),"data-size":Je,value:ot,onChange:ge?void 0:yt,onFocus:Ce,onBlur:ge?re:kt,onKeyDown:Lt,disabled:Ae,readonly:ge?!0:Ee,type:"text",inputMode:"numeric",id:Ie,name:ie,"data-test-id":"field-slider__input",autoFocus:ut})}),(0,l.jsx)("div",{className:se.sliderWrapper,children:(0,l.jsx)("div",{className:se.slider,"data-size":Je,children:(0,l.jsx)(S.A,{range:ge,min:P,max:B,step:Y,value:at,onChange:jt,marks:W?I:void 0,disabled:Ee||Ae,"data-test-id":"field-slider__slider"})})})]}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldStepper/FieldStepper.js"(ee,L,e){e.d(L,{m:()=>ie});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=e.n(x),C=e("./node_modules/.pnpm/decimal.js@10.6.0/node_modules/decimal.js/decimal.mjs"),b=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),S=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),G=e("./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),Z=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/minus/index.js"),O=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/plus/index.js"),q=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),T=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),N=e("./node_modules/.pnpm/@snack-uikit+locale@0.16.0/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),oe=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),de=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),F=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),X=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),He=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),Me=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"),Te=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"),Ke=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),ve=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Pe=e.n(A),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),R=e.n(J),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=e.n(h),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),je=e.n(H),ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Se=e.n(ke),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=e.n(z),me=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldStepper/styles.module.css"),se={};se.styleTagTransform=D(),se.setAttributes=je(),se.insert=M().bind(null,"head"),se.domAPI=R(),se.insertStyleElement=Se();var ce=Pe()(me.A,se);const be=me.A&&me.A.locals?me.A.locals:void 0;var ze=function(P,B){var Y={};for(var I in P)Object.prototype.hasOwnProperty.call(P,I)&&B.indexOf(I)<0&&(Y[I]=P[I]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var W=0,I=Object.getOwnPropertySymbols(P);W<I.length;W++)B.indexOf(I[W])<0&&Object.prototype.propertyIsEnumerable.call(P,I[W])&&(Y[I[W]]=P[I[W]]);return Y};const ae=2e3,ye=(P,B)=>P>0?P:B<0?B:0,Ie={s:8,m:9,l:10},ie=(0,S.forwardRef)((P,B)=>{var{id:Y,name:I,value:W,min:$=Number.NEGATIVE_INFINITY,max:ge=Number.POSITIVE_INFINITY,plusButtonTooltip:Ae,minusButtonTooltip:Ee,step:Le=1,disabled:Ce=!1,readonly:re=!1,allowMoreThanLimits:V=!0,onChange:le,onFocus:we,onBlur:ne,className:ue,label:nt,labelTooltip:qe,labelTooltipPlacement:Xe,required:Je=!1,caption:Re,hint:et,showHintIcon:ct,size:rt=q.SK.S,validationState:$e=F.sv.Default,error:ut,prefix:_t,postfix:at,autoFocus:jt}=P,ot=ze(P,["id","name","value","min","max","plusButtonTooltip","minusButtonTooltip","step","disabled","readonly","allowMoreThanLimits","onChange","onFocus","onBlur","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","size","validationState","error","prefix","postfix","autoFocus"]);const{t:te}=(0,N.Ym)("Fields"),[Ne=0,tt]=(0,He.I)({value:W,defaultValue:ye($,ge),onChange:le}),[lt,dt]=(0,S.useState)(!1),[pt,yt]=(0,S.useState)(""),At=(0,S.useRef)(),Ct=(0,S.useRef)(null),vt=typeof $=="number"&&Ne<=$||re||Ce,kt=typeof ge=="number"&&Ne>=ge||re||Ce,Lt=(0,Me.M)({prefix:_t,disabled:Ce}),he=(0,Te.$)({postfix:at,disabled:Ce}),Ue=(0,Ke.t)({validationState:$e,error:ut}),mt=t=>{tt(t),dt(!0),At.current=setTimeout(()=>{dt(!1),yt("")},ae)};(0,S.useEffect)(()=>()=>{clearTimeout(At.current)},[]);const xt=t=>{V||(ge!==void 0&&Ne>ge&&(yt(`${te("limitTooltip.max")}${ge}`),mt(ge)),$!==void 0&&Ne<$&&(yt(`${te("limitTooltip.min")}${$}`),mt($))),ne==null||ne(t)},gt=t=>{clearTimeout(At.current),dt(!1),yt(""),we==null||we(t)},zt=(t,s)=>tt(Number(t),s),Rt=()=>{},St=t=>{t.preventDefault(),t.stopPropagation();const s=new C.A(Ne).minus(Le).toNumber();tt(Math.min(Math.max($,s),ge))},Ft=t=>{t.preventDefault(),t.stopPropagation();const s=new C.A(Ne).plus(Le).toNumber();tt(Math.max(Math.min(ge,s),$))},Ot=()=>{},Wt=()=>{};return(0,l.jsx)(ve.m,Object.assign({className:ue,label:nt,labelTooltip:qe,labelTooltipPlacement:Xe,labelFor:Y,required:Je,caption:Re,hint:et,disabled:Ce,readonly:re,showHintIcon:ct,size:rt,validationState:Ue,error:ut},(0,de.z7)(ot),{children:(0,l.jsx)(oe.m,{tip:pt,open:V?!1:lt,"data-test-id":"field-stepper__limit-tooltip",triggerClassName:be.trigger,children:(0,l.jsx)(X.V,{size:rt,validationState:Ue,disabled:Ce,readonly:re,variant:F.aJ.SingleLine,inputRef:Ct,prefix:(0,l.jsx)(oe.m,Object.assign({},Ee,{open:Ee?Ee==null?void 0:Ee.open:!1,tip:Ee==null?void 0:Ee.tip,"data-test-id":"field-stepper__minus-button-tooltip",children:(0,l.jsx)(G.b,{tabIndex:-1,size:"xs",className:be.button,icon:(0,l.jsx)(Z.A,{}),onClick:St,onKeyDown:Ot,disabled:vt,"data-test-id":"field-stepper__minus-button"})})),postfix:(0,l.jsx)(oe.m,Object.assign({},Ae,{open:Ae?Ae==null?void 0:Ae.open:!1,tip:Ae==null?void 0:Ae.tip,"data-test-id":"field-stepper__plus-button-tooltip",children:(0,l.jsx)(G.b,{tabIndex:-1,size:"xs",className:be.button,icon:(0,l.jsx)(O.A,{}),onClick:Ft,onKeyDown:Wt,disabled:kt,"data-test-id":"field-stepper__plus-button"})})),children:(0,l.jsxs)("div",{className:be.wrap,children:[(0,l.jsx)("div",{className:d()({[be.prefixWrapper]:Lt.show}),children:Lt.show&&Lt.render({key:Lt.id})}),(0,l.jsx)("div",{style:{width:String(Ne).length*Ie[rt],maxWidth:"100%"},children:(0,l.jsx)(T.K,{ref:(0,b.A)(B,Ct),className:be.stepper,"data-size":rt,value:String(Ne),tabIndex:0,onKeyDown:Rt,onChange:zt,onBlur:xt,onFocus:gt,disabled:Ce,readonly:re,type:"number",id:Y,step:Le,name:I,min:$,max:ge,autoFocus:jt,"data-test-id":"field-stepper__input"})}),(0,l.jsx)("div",{className:d()({[be.postfixWrapper]:he.show}),children:he.show&&he.render({key:he.id})})]})})})}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldText/FieldText.js"(ee,L,e){e.d(L,{c:()=>re});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),b=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),S=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),G=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),Z=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),O=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),q=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),T=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),N=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),oe=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"),de=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),F=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"),X=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),He=e.n(X),Me=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.12_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),Te=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/utils/getArrowIcon.js"),Ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ve=e.n(Ke),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Pe=e.n(A),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),R=e.n(J),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(h),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),je=e.n(H),ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Se=e.n(ke),z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonField/styles.module.css"),D={};D.styleTagTransform=Se(),D.setAttributes=M(),D.insert=R().bind(null,"head"),D.domAPI=Pe(),D.insertStyleElement=je();var me=ve()(z.A,D);const se=z.A&&z.A.locals?z.A.locals:void 0,ce=(0,d.forwardRef)(({size:V,tabIndex:le=0,onClick:we,onKeyDown:ne,onFocus:ue,onBlur:nt,disabled:qe,content:Xe,hasArrow:Je=!1,arrowOpen:Re=!1,variant:et,className:ct},rt)=>{const{ArrowIcon:$e,arrowIconSize:ut}=(0,Te.n)({open:Re,size:"m"});return(0,l.jsxs)("button",{className:He()(ct,se.buttonField),"data-size":V,"data-variant":et,"data-arrow-open":Re||void 0,"data-disabled":qe||void 0,onClick:qe?void 0:we,onKeyDown:qe?void 0:ne,onFocus:qe?void 0:ue,onBlur:qe?void 0:nt,"data-test-id":"button-field",ref:rt,tabIndex:le,type:"button",disabled:qe,children:[et==="after"&&(0,l.jsx)(Me.c,{orientation:"vertical",className:se.divider}),(0,l.jsx)("div",{className:se.content,children:Xe}),Je&&(0,l.jsx)($e,{size:ut}),et==="before"&&(0,l.jsx)(Me.c,{orientation:"vertical",className:se.divider})]})});function be({variant:V}){if(V==="before")return"bottom-start";if(V==="after")return"bottom-end"}var ze=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonFieldList/styles.module.css"),ae={};ae.styleTagTransform=Se(),ae.setAttributes=M(),ae.insert=R().bind(null,"head"),ae.domAPI=Pe(),ae.insertStyleElement=je();var ye=ve()(ze.A,ae);const Ie=ze.A&&ze.A.locals?ze.A.locals:void 0;var ie=function(V,le){var we={};for(var ne in V)Object.prototype.hasOwnProperty.call(V,ne)&&le.indexOf(ne)<0&&(we[ne]=V[ne]);if(V!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ue=0,ne=Object.getOwnPropertySymbols(V);ue<ne.length;ue++)le.indexOf(ne[ue])<0&&Object.prototype.propertyIsEnumerable.call(V,ne[ue])&&(we[ne[ue]]=V[ne[ue]]);return we};const P=(0,d.forwardRef)((V,le)=>{var{items:we,selection:ne,open:ue,onOpenChange:nt,search:qe,scroll:Xe}=V,Je=ie(V,["items","selection","open","onOpenChange","search","scroll"]);const[Re,et]=(0,de.iC)(ue,!1,nt),ct=be(Je);return(0,l.jsx)(F.i,{"data-test-id":"button-field-list",items:we,selection:Object.assign({mode:"single"},ne),open:Re,onOpenChange:et,closeDroplistOnItemClick:!0,search:qe,scroll:Xe,triggerElemRef:le,size:Je.size,placement:ct,children:(0,l.jsx)(ce,Object.assign({},Je,{hasArrow:!0,arrowOpen:Re,className:Ie.triggerClassName}))})});function B({variant:V,button:le,icon:we,size:ne,disabled:ue,readonly:nt,type:qe,onFocus:Xe,onBlur:Je}){const Re=(0,d.useRef)(null),et=(0,d.useMemo)(()=>({id:`${qe}Icon`,active:!1,show:!!(we&&!le),render:()=>(0,l.jsx)(l.Fragment,{children:we})}),[le,we,qe]),ct=(0,d.useMemo)(()=>({id:`${qe}Button`,active:!1,show:!!(le&&le.variant===V),render:rt=>{const $e=Object.assign(Object.assign({},rt),{variant:V,size:ne,content:le==null?void 0:le.content,disabled:ue||nt,onFocus:Xe,onBlur:Je});if(le!=null&&le.items)return(0,l.jsx)(P,Object.assign({},$e,{ref:Re,onClick:()=>{setTimeout(()=>{var _t;return(_t=Re.current)===null||_t===void 0?void 0:_t.focus()},0)},search:le.search,items:le.items,selection:le.selection,open:le.open,scroll:le.scroll,onOpenChange:le.onOpenChange}));const ut=(0,l.jsx)(ce,Object.assign({},$e,{hasArrow:le==null?void 0:le.hasArrow,arrowOpen:le==null?void 0:le.arrowOpen}));return le!=null&&le.wrapper?le.wrapper(ut):ut}}),[qe,le,V,ne,ue,nt,Xe,Je]);return le?ct:et}var Y=function(V,le){var we={};for(var ne in V)Object.prototype.hasOwnProperty.call(V,ne)&&le.indexOf(ne)<0&&(we[ne]=V[ne]);if(V!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ue=0,ne=Object.getOwnPropertySymbols(V);ue<ne.length;ue++)le.indexOf(ne[ue])<0&&Object.prototype.propertyIsEnumerable.call(V,ne[ue])&&(we[ne[ue]]=V[ne[ue]]);return we};function I(V){var{prefixIcon:le}=V,we=Y(V,["prefixIcon"]);return B(Object.assign(Object.assign({},we),{icon:le,type:"prefix",variant:"before"}))}var W=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"),$=function(V,le){var we={};for(var ne in V)Object.prototype.hasOwnProperty.call(V,ne)&&le.indexOf(ne)<0&&(we[ne]=V[ne]);if(V!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ue=0,ne=Object.getOwnPropertySymbols(V);ue<ne.length;ue++)le.indexOf(ne[ue])<0&&Object.prototype.propertyIsEnumerable.call(V,ne[ue])&&(we[ne[ue]]=V[ne[ue]]);return we};function ge(V){var{postfixIcon:le}=V,we=$(V,["postfixIcon"]);return B(Object.assign(Object.assign({},we),{icon:le,type:"postfix",variant:"after"}))}var Ae=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),Ee=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js");function Le({button:V}){return(V==null?void 0:V.variant)==="before"?"single-line-container-button-before":(V==null?void 0:V.variant)==="after"?"single-line-container-button-after":"single-line-container"}var Ce=function(V,le){var we={};for(var ne in V)Object.prototype.hasOwnProperty.call(V,ne)&&le.indexOf(ne)<0&&(we[ne]=V[ne]);if(V!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ue=0,ne=Object.getOwnPropertySymbols(V);ue<ne.length;ue++)le.indexOf(ne[ue])<0&&Object.prototype.propertyIsEnumerable.call(V,ne[ue])&&(we[ne[ue]]=V[ne[ue]]);return we};const re=(0,d.forwardRef)((V,le)=>{var{id:we,name:ne,value:ue,placeholder:nt,maxLength:qe,disabled:Xe=!1,readonly:Je=!1,showCopyButton:Re=!0,showClearButton:et=!0,allowMoreThanMaxLength:ct=!1,onChange:rt,onFocus:$e,onBlur:ut,onCopyButtonClick:_t,onClearButtonClick:at,className:jt,label:ot,labelTooltip:te,labelTooltipPlacement:Ne,required:tt=!1,caption:lt,hint:dt,showHintIcon:pt,size:yt=C.SK.S,validationState:At=O.sv.Default,error:Ct,autoComplete:vt,autoFocus:kt,prefixIcon:Lt,prefix:he,postfix:Ue,button:mt,onPaste:xt,onKeyDown:gt,type:zt="text",inputMode:Rt,spellCheck:St}=V,Ft=Ce(V,["id","name","value","placeholder","maxLength","disabled","readonly","showCopyButton","showClearButton","allowMoreThanMaxLength","onChange","onFocus","onBlur","onCopyButtonClick","onClearButtonClick","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","size","validationState","error","autoComplete","autoFocus","prefixIcon","prefix","postfix","button","onPaste","onKeyDown","type","inputMode","spellCheck"]);const[Ot="",Wt]=(0,T.I)({value:ue,defaultValue:"",onChange:rt}),t=(0,d.useRef)(null),s=(0,d.useRef)(null),n=(0,d.useRef)(null),o=!!(Ot&&!Xe),r=et&&o&&!Je,i=Re&&o&&Je,p=(0,Ae.t)({validationState:At,error:Ct}),f=(0,d.useMemo)(()=>mt?Object.assign(Object.assign({},mt),{selection:Object.assign(Object.assign({},mt.selection),{onChange:We=>{var Qe,vs;(vs=(Qe=mt.selection)===null||Qe===void 0?void 0:Qe.onChange)===null||vs===void 0||vs.call(Qe,We),setTimeout(()=>{var us;return(us=t.current)===null||us===void 0?void 0:us.focus()},0)}})}):void 0,[mt]),k=Le({button:f}),[g,c]=(0,d.useState)(!1),u=(0,d.useRef)(!1),m=We=>{var Qe;We.preventDefault(),Wt(""),at==null||at(),u.current&&((Qe=t.current)===null||Qe===void 0||Qe.focus())},v=()=>{u.current=g},j=(0,b.r)({clearButtonRef:s,showClearButton:r,onClear:m,onDown:v,size:yt}),E=(0,N.x)({copyButtonRef:n,showCopyButton:i,size:yt,valueToCopy:Ot,prefix:typeof he=="string"?he:void 0,postfix:typeof Ue=="string"?Ue:void 0,onCopyButtonClick:_t}),[K,pe]=(0,d.useState)(!1),Ve=(0,d.useCallback)(()=>pe(!0),[]),xe=(0,d.useCallback)(()=>pe(!1),[]),Oe=(0,oe.M)({prefix:he,disabled:Xe}),De=I({button:f,prefixIcon:Lt,size:yt,disabled:Xe,readonly:Je,onFocus:Ve,onBlur:xe}),Ye=(0,W.$)({postfix:Ue,disabled:Xe}),Tt=ge({button:f,size:yt,disabled:Xe,readonly:Je,onFocus:Ve,onBlur:xe}),{postfixButtons:Dt,prefixButtons:ss,inputTabIndex:os,onInputKeyDown:Ht}=(0,S.C)({inputRef:t,postfixButtons:(0,d.useMemo)(()=>[j,E,Ye,Tt],[j,E,Ye,Tt]),prefixButtons:(0,d.useMemo)(()=>[De,Oe],[De,Oe]),readonly:Je,submitKeys:["Enter","Space","Tab"]}),Jt=We=>{Ht(We),gt==null||gt(We)},as=We=>{const Qe=We.relatedTarget;if(Qe&&Qe===s.current){c(!1);return}ut==null||ut(We),c(!1)},is=We=>{$e==null||$e(We),c(!0)};return(0,l.jsx)(Ee.m,Object.assign({className:jt,label:ot,labelTooltip:te,labelTooltipPlacement:Ne,labelFor:we,required:tt,caption:lt,length:qe?{max:qe,current:Ot.length}:void 0,hint:dt,disabled:Xe,readonly:Je,showHintIcon:pt,size:yt,validationState:p,error:Ct},(0,Z.z7)(Ft),{children:(0,l.jsx)(q.V,{size:yt,validationState:p,disabled:Xe,readonly:Je,variant:k,inputRef:t,prefix:ss,postfix:Dt,disableFocus:K,children:(0,l.jsx)(G.K,{ref:(0,x.A)(le,t),"data-size":yt,value:Ot,onChange:Wt,onFocus:is,onBlur:as,tabIndex:os,onKeyDown:Jt,onPaste:xt,placeholder:nt,disabled:Xe,readonly:Je,type:zt,inputMode:Rt,maxLength:ct?void 0:qe||void 0,id:we,name:ne,autoComplete:vt,autoFocus:kt,spellCheck:St,"data-test-id":"field-text__input"})})}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTextArea/FieldTextArea.js"(ee,L,e){e.d(L,{n:()=>ie});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),b=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),S=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),G=e("./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),Z=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),O=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),q=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),T=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),N=e.n(T),oe=e("./node_modules/.pnpm/react-textarea-autosize@8.5.3_@types+react@18.2.79_react@18.2.0/node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js"),de=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=e.n(F),He=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Me=e.n(He),Te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Ke=e.n(Te),ve=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),A=e.n(ve),Pe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),J=e.n(Pe),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=e.n(R),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/TextArea/styles.module.css"),H={};H.styleTagTransform=h(),H.setAttributes=A(),H.insert=Ke().bind(null,"head"),H.domAPI=Me(),H.insertStyleElement=J();var je=X()(M.A,H);const ke=M.A&&M.A.locals?M.A.locals:void 0;var Se=function(P,B){var Y={};for(var I in P)Object.prototype.hasOwnProperty.call(P,I)&&B.indexOf(I)<0&&(Y[I]=P[I]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var W=0,I=Object.getOwnPropertySymbols(P);W<I.length;W++)B.indexOf(I[W])<0&&Object.prototype.propertyIsEnumerable.call(P,I[W])&&(Y[I[W]]=P[I[W]]);return Y};const z=(0,d.forwardRef)((P,B)=>{var{name:Y,value:I="",onChange:W,placeholder:$,id:ge,className:Ae,disabled:Ee=!1,readonly:Le=!1,autoComplete:Ce=!1,autoFocus:re=!1,maxLength:V,onFocus:le,onBlur:we,onKeyDown:ne,tabIndex:ue,minRows:nt=3,spellCheck:qe,inputMode:Xe}=P,Je=Se(P,["name","value","onChange","placeholder","id","className","disabled","readonly","autoComplete","autoFocus","maxLength","onFocus","onBlur","onKeyDown","tabIndex","minRows","spellCheck","inputMode"]);const[,Re]=(0,d.useState)(!1);(0,de.N)(()=>Re(!0),[]);const et=rt=>W==null?void 0:W(rt.target.value,rt),ct=rt=>rt.stopPropagation();return(0,l.jsx)(oe.A,Object.assign({id:ge,name:Y,value:I,ref:B,className:N()(Ae,ke.textarea),autoComplete:Ce?"on":"off",autoFocus:re,placeholder:$,disabled:Ee,readOnly:Le,maxLength:V,onChange:et,onClick:ct,onFocus:le,onBlur:we,onKeyDown:ne,tabIndex:ue,minRows:nt,spellCheck:qe,inputMode:Xe},(0,Z.z7)(Je)))});var D=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),me=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),se=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),ce=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),be=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTextArea/styles.module.css"),ze={};ze.styleTagTransform=h(),ze.setAttributes=A(),ze.insert=Ke().bind(null,"head"),ze.domAPI=Me(),ze.insertStyleElement=J();var ae=X()(be.A,ze);const ye=be.A&&be.A.locals?be.A.locals:void 0;var Ie=function(P,B){var Y={};for(var I in P)Object.prototype.hasOwnProperty.call(P,I)&&B.indexOf(I)<0&&(Y[I]=P[I]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var W=0,I=Object.getOwnPropertySymbols(P);W<I.length;W++)B.indexOf(I[W])<0&&Object.prototype.propertyIsEnumerable.call(P,I[W])&&(Y[I[W]]=P[I[W]]);return Y};const ie=(0,d.forwardRef)((P,B)=>{var{id:Y,name:I,value:W,placeholder:$,maxLength:ge,minRows:Ae=3,maxRows:Ee=1e3,disabled:Le=!1,resizable:Ce=!1,readonly:re=!1,showCopyButton:V=re,showClearButton:le=!0,allowMoreThanMaxLength:we=!0,showHintIcon:ne,onChange:ue,onFocus:nt,onBlur:qe,onKeyDown:Xe,className:Je,label:Re,labelTooltip:et,labelTooltipPlacement:ct,required:rt=!1,caption:$e,hint:ut,error:_t,size:at=C.SK.S,validationState:jt=O.sv.Default,onCopyButtonClick:ot,footer:te,spellCheck:Ne,autoFocus:tt,inputMode:lt}=P,dt=Ie(P,["id","name","value","placeholder","maxLength","minRows","maxRows","disabled","resizable","readonly","showCopyButton","showClearButton","allowMoreThanMaxLength","showHintIcon","onChange","onFocus","onBlur","onKeyDown","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","error","size","validationState","onCopyButtonClick","footer","spellCheck","autoFocus","inputMode"]);const pt=(0,d.useRef)(null),yt=(0,d.useRef)(null),At=(0,d.useRef)(null),Ct=!re&&!Le&&Ce,[vt="",kt]=(0,D.I)({value:W,defaultValue:"",onChange:ue}),Lt=V&&!!vt&&!Le,he=le&&!!vt&&!Le&&!re,Ue=(0,se.t)({validationState:jt,error:_t}),mt=()=>{var Ot;kt(""),rt&&((Ot=pt.current)===null||Ot===void 0||Ot.focus())},xt=(0,b.r)({clearButtonRef:yt,showClearButton:he,size:at,onClear:mt}),gt=(0,me.x)({copyButtonRef:At,showCopyButton:Lt,size:at,valueToCopy:vt,onCopyButtonClick:ot}),{postfixButtons:zt,inputTabIndex:Rt,onInputKeyDown:St}=(0,S.C)({inputRef:pt,postfixButtons:(0,d.useMemo)(()=>[xt,gt],[xt,gt]),readonly:re,submitKeys:["Enter","Space","Tab"]}),Ft=Ot=>{St(Ot),Xe==null||Xe(Ot)};return(0,l.jsx)(ce.m,Object.assign({className:Je,label:Re,labelTooltip:et,labelTooltipPlacement:ct,labelFor:Y,required:rt,caption:$e,length:ge?{max:ge,current:vt.length}:void 0,hint:ut,disabled:Le,readonly:re,showHintIcon:ne,size:at,error:_t,validationState:Ue},(0,Z.z7)(dt),{children:(0,l.jsxs)(q.V,{className:ye.container,size:at,validationState:Ue,disabled:Le,readonly:re,"data-resizable":Ct||void 0,"data-actions":!!te||void 0,variant:O.aJ.MultiLine,style:{"--max-rows":Ee,"--min-rows":Ae},inputRef:pt,postfix:(0,l.jsx)("span",{className:ye.postfix,children:zt}),children:[(0,l.jsx)(G.O,{className:ye.scrollContainer,size:"s",barHideStrategy:"never",resize:Ct?"vertical":"none","data-test-id":"field-textarea__scroll-area",children:(0,l.jsx)(z,{className:ye.textarea,"data-size":at,value:vt,onChange:kt,placeholder:$,disabled:Le,readonly:re,minRows:Ae,id:Y,name:I,ref:(0,x.A)(B,pt),onFocus:nt,onBlur:qe,onKeyDown:Ft,tabIndex:Rt,spellCheck:Ne,autoFocus:tt,maxLength:we?void 0:ge||void 0,inputMode:lt,"data-test-id":"field-textarea__input"})}),te]})}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTime/FieldTime.js"(ee,L,e){e.d(L,{Q:()=>Ie});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),b=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/TimePicker.js"),S=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),G=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/watch/index.js"),Z=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),O=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),q=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),T=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"),N=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),oe=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),de=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),F=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/dateFields.js"),X=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),He=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),Me=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useDateField.js"),Te=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useHandlers.js"),Ke=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useFocusHandlers.js"),ve=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),A=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),Pe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),J=e.n(Pe),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(R),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=e.n(M),je=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),ke=e.n(je),Se=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(Se),D=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),me=e.n(D),se=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTime/styles.module.css"),ce={};ce.styleTagTransform=me(),ce.setAttributes=ke(),ce.insert=H().bind(null,"head"),ce.domAPI=h(),ce.insertStyleElement=z();var be=J()(se.A,ce);const ze=se.A&&se.A.locals?se.A.locals:void 0;var ae=function(ie,P){var B={};for(var Y in ie)Object.prototype.hasOwnProperty.call(ie,Y)&&P.indexOf(Y)<0&&(B[Y]=ie[Y]);if(ie!=null&&typeof Object.getOwnPropertySymbols=="function")for(var I=0,Y=Object.getOwnPropertySymbols(ie);I<Y.length;I++)P.indexOf(Y[I])<0&&Object.prototype.propertyIsEnumerable.call(ie,Y[I])&&(B[Y[I]]=ie[Y[I]]);return B};const ye=(ie,{showSeconds:P,locale:B})=>{var Y,I,W;if(!ie)return"";const $=new Date;return $.setHours((Y=ie.hours)!==null&&Y!==void 0?Y:0),$.setMinutes((I=ie.minutes)!==null&&I!==void 0?I:0),$.setSeconds((W=ie.seconds)!==null&&W!==void 0?W:0),$.toLocaleTimeString(B,{hour:"numeric",minute:"numeric",second:P?"numeric":void 0})},Ie=(0,d.forwardRef)((ie,P)=>{var{id:B,name:Y,value:I,disabled:W=!1,readonly:$=!1,showCopyButton:ge=!0,showClearButton:Ae=!0,open:Ee,onOpenChange:Le,onChange:Ce,onFocus:re,onBlur:V,className:le,label:we,labelTooltip:ne,labelTooltipPlacement:ue,required:nt=!1,caption:qe,hint:Xe,showHintIcon:Je,showSeconds:Re=!0,size:et=Z.SK.S,validationState:ct=de.sv.Default,error:rt,onCopyButtonClick:$e,autoFocus:ut,footerMode:_t}=ie,at=ae(ie,["id","name","value","disabled","readonly","showCopyButton","showClearButton","open","onOpenChange","onChange","onFocus","onBlur","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","showSeconds","size","validationState","error","onCopyButtonClick","autoFocus","footerMode"]);const[jt,ot]=(0,C.iC)(Ee,!1,Le),te=(0,d.useRef)(null),Ne=(0,d.useRef)(null),tt=(0,d.useRef)(null),lt=et===Z.SK.S?Z.Ev.Xs:Z.Ev.S,dt=jt&&!$&&!W,pt=!!(I&&!W),yt=Ae&&pt&&!$,At=ge&&pt&&$,Ct=(0,ve.t)({validationState:ct,error:rt}),vt=(0,d.useRef)(null),kt=(0,d.useCallback)(v=>{v.key==="ArrowDown"&&(ot(!0),setTimeout(()=>{var j;return(j=vt.current)===null||j===void 0?void 0:j.focus()},0))},[ot]),Lt=(0,d.useCallback)(()=>{var v,j,E;Ce&&Ce(void 0),!((v=te.current)===null||v===void 0)&&v.value&&(te.current.value=""),nt?((j=te.current)===null||j===void 0||j.focus(),ot(!0)):((E=te.current)===null||E===void 0||E.blur(),ot(!1))},[Ce,nt,ot]),he=ye(I,{showSeconds:Re,locale:F.Xn}),Ue=(0,O.r)({clearButtonRef:Ne,showClearButton:yt,size:et,onClear:Lt}),mt=(0,He.x)({copyButtonRef:tt,showCopyButton:At,size:et,valueToCopy:he,onCopyButtonClick:$e}),xt=(0,d.useMemo)(()=>({active:!1,show:!0,id:"watchIcon",render:v=>(0,l.jsx)(G.A,Object.assign({},v,{size:lt,className:ze.calendarIcon,"data-size":et}))}),[lt,et]),gt=(0,d.useMemo)(()=>[Ue,mt,xt],[Ue,mt,xt]),{value:zt,handleChange:Rt,handleClick:St,handleKeyDown:Ft,handleBlur:Ot,mask:Wt,setInputFocus:t}=(0,Me.c)({inputRef:te,onChange:Ce,readonly:$,locale:F.Xn,setIsOpen:ot,mode:Re?F.Tu.FullTime:F.Tu.NoSeconds,showSeconds:Re}),s=(0,d.useCallback)(()=>t(F.Yj.Seconds),[t]),{postfixButtons:n,inputTabIndex:o,onInputKeyDown:r,setInitialTabIndices:i}=(0,q.C)({setInputFocus:s,inputRef:te,postfixButtons:gt,onButtonKeyDown:kt,readonly:$,submitKeys:["Enter","Space","Tab"]}),p=v=>{var j;Ce&&Ce(v),(j=te.current)===null||j===void 0||j.focus(),ot(!1),te.current&&(te.current.value=ye(v,{showSeconds:Re,locale:F.Xn}))},f=()=>{i(),(0,T.z$)(()=>{t(F.Yj.Hours),ot(!1)})},k=(0,Te.j)([kt,Ft,r]);(0,d.useEffect)(()=>{var v;Ee&&((v=te.current)===null||v===void 0||v.focus())},[Ee]),(0,d.useEffect)(()=>{te.current&&document.activeElement!==te.current&&(te.current.value=ye(I,{showSeconds:Re,locale:F.Xn}))},[Re,I]);const g=(0,d.useCallback)(v=>{t(),re==null||re(v)},[re,t]),c=(0,Ke.T)({onFocusByClick:re,onFocusByKeyboard:g}),u=(0,Te.j)([Ot,c.onBlur,V]),m=(0,d.useCallback)(v=>{St(),jt&&v.stopPropagation()},[St,jt]);return(0,l.jsx)(A.m,Object.assign({className:le,label:we,labelTooltip:ne,labelTooltipPlacement:ue,labelFor:B,required:nt,caption:qe,hint:Xe,disabled:W,readonly:$,showHintIcon:Je,size:et,error:rt,validationState:Ct},(0,oe.z7)(at),{children:(0,l.jsx)(S.m,Object.assign({trigger:"click",triggerClassName:ze.triggerClassName,widthStrategy:"auto"},$||W?{open:!1}:{open:dt,onOpenChange:ot},{content:(0,l.jsx)(b.A,{size:et,value:I,onChangeValue:p,navigationStartRef:vt,onFocusLeave:f,"data-test-id":"field-time__timepicker",fitToContainer:!1,showSeconds:Re,footerMode:_t}),children:(0,l.jsx)(X.V,{className:ze.container,size:et,validationState:Ct,disabled:W,readonly:$,variant:de.aJ.SingleLine,focused:dt,inputRef:te,postfix:n,children:(0,l.jsx)(N.K,{ref:(0,x.A)(P,te),"data-size":et,value:zt||"",placeholder:Wt,onChange:Rt,onFocus:c.onFocus,onMouseDown:c.onMouseDown,onBlur:u,onKeyDown:k,onClick:m,disabled:W,readonly:$,tabIndex:o,type:"text",inputMode:"numeric",id:B,name:Y,autoFocus:ut,"data-test-id":"field-time__input"})})}))}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/dateFields.js"(ee,L,e){e.d(L,{FN:()=>x,Tu:()=>d,Xn:()=>S,Yj:()=>l,_f:()=>O,iF:()=>C,ks:()=>q,q0:()=>F,v5:()=>b});var l;(function(X){X.Day="D",X.Month="M",X.Year="Y",X.Hours="h",X.Minutes="m",X.Seconds="s"})(l||(l={}));const x={Date:"date",DateTime:"date-time"},d={FullTime:"full-time",NoSeconds:"no-seconds"},C="date-time-no-sec",b={[x.Date]:{"ru-RU":"\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413","en-US":"DD.MM.YYYY"},[x.DateTime]:{"ru-RU":"\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413, \u0447\u0447:\u043C\u043C:\u0441\u0441","en-US":"DD.MM.YYYY, hh:mm:ss"},[C]:{"ru-RU":"\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413, \u0447\u0447:\u043C\u043C","en-US":"DD.MM.YYYY, hh:mm"},[d.FullTime]:{"ru-RU":"\u0447\u0447:\u043C\u043C:\u0441\u0441","en-US":"hh:mm:ss"},[d.NoSeconds]:{"ru-RU":"\u0447\u0447:\u043C\u043C","en-US":"hh:mm"}},S=new Intl.Locale("ru-RU"),G={[l.Day]:{start:0,end:2,max:31,min:1},[l.Month]:{start:3,end:5,max:12,min:1},[l.Year]:{start:6,end:10,max:2100,min:1900}},Z=(X,He)=>Object.assign({[l.Hours]:{start:X,end:X+2,max:23,min:0},[l.Minutes]:{start:X+3,end:X+5,max:59,min:0}},He?{[l.Seconds]:{start:X+6,end:X+8,max:59,min:0}}:{}),O={[x.Date]:G,[x.DateTime]:Object.assign(Object.assign({},G),Z(12,!0)),[C]:Object.assign(Object.assign({},G),Z(12,!1)),[d.FullTime]:Z(0,!0),[d.NoSeconds]:Z(0,!1)},q={[x.Date]:[l.Day,l.Month,l.Year],[x.DateTime]:[l.Day,l.Month,l.Year,l.Hours,l.Minutes,l.Seconds],[C]:[l.Day,l.Month,l.Year,l.Hours,l.Minutes],[d.FullTime]:[l.Hours,l.Minutes,l.Seconds],[d.NoSeconds]:[l.Hours,l.Minutes]},T={[l.Day]:"\u0414\u0414",[l.Month]:"\u041C\u041C",[l.Year]:"\u0413\u0413\u0413\u0413"},N={[l.Hours]:"\u0447\u0447",[l.Minutes]:"\u043C\u043C",[l.Seconds]:"\u0441\u0441"},oe={[l.Day]:"DD",[l.Month]:"MM",[l.Year]:"YYYY"},de={[l.Hours]:"hh",[l.Minutes]:"mm",[l.Seconds]:"ss"},F={[x.Date]:{"ru-RU":T,"en-US":oe},[x.DateTime]:{"ru-RU":Object.assign(Object.assign({},T),N),"en-US":Object.assign(Object.assign({},oe),de)},[C]:{"ru-RU":Object.assign(Object.assign(Object.assign({},T),N),{[l.Seconds]:void 0}),"en-US":Object.assign(Object.assign(Object.assign({},oe),de),{[l.Seconds]:void 0})},[d.FullTime]:{"ru-RU":N,"en-US":de},[d.NoSeconds]:{"ru-RU":Object.assign(Object.assign({},N),{[l.Seconds]:void 0}),"en-US":Object.assign(Object.assign({},de),{[l.Seconds]:void 0})}}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"(ee,L,e){e.d(L,{V:()=>Pe});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=e.n(x),C=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),b=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(S),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=e.n(Z),q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(q),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),oe=e.n(N),de=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),F=e.n(de),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),He=e.n(X),Me=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"),Te={};Te.styleTagTransform=He(),Te.setAttributes=oe(),Te.insert=T().bind(null,"head"),Te.domAPI=O(),Te.insertStyleElement=F();var Ke=G()(Me.A,Te);const ve=Me.A&&Me.A.locals?Me.A.locals:void 0;var A=function(J,R){var h={};for(var M in J)Object.prototype.hasOwnProperty.call(J,M)&&R.indexOf(M)<0&&(h[M]=J[M]);if(J!=null&&typeof Object.getOwnPropertySymbols=="function")for(var H=0,M=Object.getOwnPropertySymbols(J);H<M.length;H++)R.indexOf(M[H])<0&&Object.prototype.propertyIsEnumerable.call(J,M[H])&&(h[M[H]]=J[M[H]]);return h};function Pe(J){var{className:R,children:h,size:M,validationState:H,variant:je,disabled:ke,readonly:Se,focused:z,disableFocus:D,selectable:me,style:se,prefix:ce,postfix:be,inputRef:ze}=J,ae=A(J,["className","children","size","validationState","variant","disabled","readonly","focused","disableFocus","selectable","style","prefix","postfix","inputRef"]);const ye=()=>{var Ie;ke||(Ie=ze.current)===null||Ie===void 0||Ie.focus()};return(0,l.jsxs)("div",Object.assign({className:d()(R,ve.container),style:se,"data-size":M,"data-validation":ke||Se?b.sv.Default:H,"data-variant":je,"data-disabled":ke||void 0,"data-readonly":Se||void 0,"data-focused":z||void 0,"data-disable-focus":D||void 0,"data-selectable":me||void 0,"data-test-id":"field-container-private",onClick:ye,role:"textbox",tabIndex:-1},(0,C.z7)(ae),{children:[ce&&(0,l.jsx)("span",{className:ve.prefix,"data-test-id":"field-container-private__prefix-icon",children:ce}),h,be&&(0,l.jsx)("span",{className:ve.postfix,children:be})]}))}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useDateField.js"(ee,L,e){e.d(L,{c:()=>q});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),d=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/dateFields.js");function C(T){return N=>{if(N!==null){for(const oe in d._f[T])if(N>=d._f[T][oe].start&&N<=d._f[T][oe].end)return oe}}}function b(T){const N=d.ks[T];return oe=>{const de=N.length-1,F=N[de],X=N.indexOf(oe);return X===-1||X===de?F:N[X+1]}}function S(T){const N=d.ks[T];return oe=>{const F=N[0],X=N.indexOf(oe);return X===-1||X===0?F:N[X-1]}}const G=new Date;function Z(T){if(!T)return;const N=T.split(", "),oe=N[0];let de=N[1],[F,X,He]=oe.split(".").map(Number);if(X-=1,oe.includes(":")&&(de=oe),de){(isNaN(He)||isNaN(X)||isNaN(F))&&(He=G.getFullYear(),X=G.getMonth(),F=G.getDay());const[Me=0,Te=0,Ke=0]=de.split(":").map(ve=>Number(ve!=null?ve:0));return new Date(He,X,F,Me,Te,Ke)}return new Date(He,X,F)}function O({inputRef:T,mode:N}){const oe=(0,l.useCallback)(J=>{if(T.current){const{start:R,end:h}=d._f[N][J];T.current.setSelectionRange(R,h)}},[N,T]),de=(0,l.useCallback)(()=>{var J,R,h;return((J=T.current)===null||J===void 0?void 0:J.value.length)===((R=T.current)===null||R===void 0?void 0:R.selectionEnd)&&((h=T.current)===null||h===void 0?void 0:h.selectionStart)===0},[T]),F=(0,l.useCallback)(J=>T.current?T.current.value.slice(d._f[N][J].start,d._f[N][J].end):"",[N,T]),X=(0,l.useCallback)(()=>T.current?Object.keys(d._f[N]).every(J=>F(J)&&Number.isInteger(Number(F(J)))):!1,[N,F,T]),He=(0,l.useCallback)(()=>{if(Object.values(d.Tu).includes(N))return!0;const R=parseInt(F(d.Yj.Day),10),h=parseInt(F(d.Yj.Month),10),M=parseInt(F(d.Yj.Year),10);return!h||!R?!0:new Date(M||2020,h-1,R).getDate()===R},[F,N]),Me=(0,l.useCallback)(()=>{var J;let R;const h=Object.keys(d._f[N]).reduce((ce,be)=>{const ze=be;return ce[ze]=parseInt(F(ze),10),ce},{}),{[d.Yj.Day]:M,[d.Yj.Month]:H,[d.Yj.Year]:je,[d.Yj.Hours]:ke,[d.Yj.Minutes]:Se,[d.Yj.Seconds]:z}=h,D=d._f[N][d.Yj.Year],me=!!(M&&H&&je>=(D==null?void 0:D.min)&&je<=(D==null?void 0:D.max)),se=[ke,Se,...N===d.FN.DateTime||N===d.Tu.FullTime?[z]:[]].every(ce=>ce!==void 0);if(N===d.FN.DateTime||N===d.iF?R=me&&se:N===d.Tu.FullTime||N===d.Tu.NoSeconds?R=se:R=me,R&&T.current){const ce=(J=T.current)===null||J===void 0?void 0:J.value.length;T.current.selectionStart=ce,T.current.selectionEnd=ce}return R},[F,T,N]),Te=(0,l.useCallback)((J,R)=>{if(T.current){const{start:h,end:M,max:H}=d._f[N][J];T.current.value=T.current.value.slice(0,h)+R.toString().padStart(H.toString().length,"0")+T.current.value.slice(M),oe(J)}},[T,oe,N]),Ke=(0,l.useMemo)(()=>b(N),[N]),ve=(0,l.useMemo)(()=>S(N),[N]),A=(0,l.useMemo)(()=>C(N),[N]),Pe=(0,l.useCallback)(J=>{const R=Z(J);return R&&(N===d.Tu.FullTime||N===d.Tu.NoSeconds)?{hours:R.getHours(),minutes:R.getMinutes(),seconds:R.getSeconds()}:R},[N]);return{isAllSelected:de,isValidInput:He,tryToCompleteInput:Me,getSlot:F,updateSlot:Te,setFocus:oe,isLikeDate:X,getNextSlotKey:Ke,getPrevSlotKey:ve,getSlotKeyFromIndex:A,parseDate:Pe}}function q({inputRef:T,onChange:N,readonly:oe,locale:de=d.Xn,setIsOpen:F,mode:X,showSeconds:He}){var Me;const Te=X===d.FN.DateTime&&!He?d.iF:X,Ke=d._f[Te],ve=d.v5[Te][de.baseName]||d.v5[Te][d.Xn.baseName],A=d.q0[Te][de.baseName]||d.q0[Te][d.Xn.baseName],Pe=d.ks[Te],{getNextSlotKey:J,getPrevSlotKey:R,getSlotKeyFromIndex:h,setFocus:M,updateSlot:H,getSlot:je,isLikeDate:ke,isAllSelected:Se,tryToCompleteInput:z,isValidInput:D,parseDate:me}=O({inputRef:T,mode:Te}),se=(0,l.useMemo)(()=>Pe[0],[Pe]),ce=(0,l.useRef)(se),be=(0,l.useCallback)(P=>{if(!T.current||oe)return;if((0,x.B)()&&document.activeElement!==T.current){ce.current=P||se,T.current.focus();return}const B=P||ce.current;if(ke()&&B===se)return;if(!T.current.value){T.current.value=ve,M(se);return}if(P!=="auto"){M(B);return}const Y=h(T.current.selectionStart);if(Y){const{start:I,end:W}=Ke[Y];T.current.setSelectionRange(I,W)}},[T,oe,ke,se,h,ve,M,Ke]),ze=(0,l.useCallback)(()=>{be("auto")},[be]),ae=()=>{var P;N&&ke()&&N(me(((P=T.current)===null||P===void 0?void 0:P.value)||""))},ye=(0,l.useCallback)(P=>{var B,Y;if(!(P===Pe[Pe.length-1]&&z())){if(D()){M(J(P));return}switch(P){case d.Yj.Day:H(d.Yj.Month,(B=A==null?void 0:A[d.Yj.Month])!==null&&B!==void 0?B:""),M(d.Yj.Month);return;case d.Yj.Year:case d.Yj.Month:H(d.Yj.Day,(Y=A==null?void 0:A[d.Yj.Day])!==null&&Y!==void 0?Y:""),M(d.Yj.Day);return;default:M(J(P))}}},[Pe,z,D,M,J,H,A]),Ie=(0,l.useCallback)(P=>{var B;if(T.current&&!oe){if(P.key!=="Tab"&&(P.preventDefault(),P.stopPropagation()),P.key!=="ArrowDown"&&F(!1),P.key==="Escape"){T.current.blur();return}P.key==="Enter"&&z();const Y=T.current.selectionStart,I=h(Y);if(I){const W=je(I),{max:$,min:ge}=Ke[I],Ae=Number(W)||0;if(P.key==="ArrowRight"){if(Se()||I===Pe[Pe.length-1]){T.current.selectionStart=T.current.value.length;return}M(J(I));return}if(P.key==="ArrowLeft"){M(R(I));return}if(P.key==="Backspace"&&(Se()?(T.current.value=ve,M(se)):H(I,(B=A[I])!==null&&B!==void 0?B:"")),/^\d+$/.test(P.key)){const Ee=Number(P.key),Le=parseInt(Ae.toString()+P.key,10)||0,Ce=Le.toString().length,re=$.toString().length,V=W.match(/^0+$/)&&re===2&&Ee===0;Ce<re?((Le||Le>=ge)&&(H(I,Le),V&&ye(I)),Le*10>$&&ye(I)):Ce>re?Ee*10>$?(H(I,P.key),ye(I)):(Ee||Ee>=ge)&&H(I,P.key):Le<=$?(H(I,Le),ye(I)):Ee*10>$?(H(I,P.key),ye(I)):(Ee||Ee>=ge)&&H(I,P.key)}N==null||N(me(ke()?T.current.value:""))}}},[T,oe,h,F,z,je,Ke,me,ke,N,Se,Pe,M,J,R,ve,se,H,A,ye]),ie=(0,l.useCallback)(()=>{var P;!oe&&((P=T.current)===null||P===void 0?void 0:P.value)===ve&&(T.current.value=""),ce.current=se},[T,ve,oe,se]);return{handleKeyDown:Ie,handleChange:ae,handleClick:ze,setInputFocus:be,value:(Me=T.current)===null||Me===void 0?void 0:Me.value,mask:ve,handleBlur:ie}}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useFocusHandlers.js"(ee,L,e){e.d(L,{T:()=>x});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function x({onFocusByKeyboard:d,onFocusByClick:C}){const b=(0,l.useRef)(!1),S=(0,l.useRef)(!1),G=(0,l.useCallback)(q=>{b.current=!0,S.current?(C==null||C(q),S.current=!1):d==null||d(q)},[S,C,d]),Z=(0,l.useCallback)(()=>{b.current=!1,S.current=!1},[]),O=(0,l.useCallback)(()=>{b.current||(S.current=!0)},[b]);return{onFocus:G,onBlur:Z,onMouseDown:O}}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useHandlers.js"(ee,L,e){e.d(L,{j:()=>x});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function x(d){return(0,l.useCallback)(C=>{d.forEach(b=>b==null?void 0:b(C))},[d])}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"(ee,L,e){e.d(L,{x:()=>M});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),C=e("./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js"),b=e.n(C),S=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),G=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/copy/index.js");function Z({size:H,isChecked:je}){switch(H){case d.Vp.S:return je?(0,l.jsx)(S.A,{size:16}):(0,l.jsx)(G.A,{size:16});case d.Vp.M:default:return je?(0,l.jsx)(S.A,{size:24}):(0,l.jsx)(G.A,{size:24})}}var O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),q=e.n(O),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),N=e.n(T),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),de=e.n(oe),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),X=e.n(F),He=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Me=e.n(He),Te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Ke=e.n(Te),ve=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonCopyValue/styles.module.css"),A={};A.styleTagTransform=Ke(),A.setAttributes=X(),A.insert=de().bind(null,"head"),A.domAPI=N(),A.insertStyleElement=Me();var Pe=q()(ve.A,A);const J=ve.A&&ve.A.locals?ve.A.locals:void 0,R=(0,x.forwardRef)(({size:H,valueToCopy:je,tabIndex:ke=-1,onKeyDown:Se,onClick:z,onValueRequest:D,disabled:me},se)=>{const[ce,be]=(0,x.useState)(!1),ze=(0,x.useRef)(),ae=()=>be(!1),ye=(ie,P)=>{const B=P||je;B&&b()(B,{format:"text/plain"}),be(!0),clearTimeout(ze.current),ze.current=setTimeout(ae,2e3),z==null||z(ie)},Ie=ie=>{ie.stopPropagation(),D?D().then(({success:P,value:B})=>{P&&ye(ie,B)}):ye(ie)};return(0,x.useEffect)(()=>()=>{ae(),clearTimeout(ze.current)},[]),(0,l.jsx)("button",{className:J.buttonCopyValue,"data-size":H,"data-disabled":me||void 0,onClick:Ie,"data-test-id":"button-copy-value",ref:se,onKeyDown:Se,tabIndex:ke,type:"button",disabled:me,children:Z({size:H,isChecked:ce})})});var h=function(H,je){var ke={};for(var Se in H)Object.prototype.hasOwnProperty.call(H,Se)&&je.indexOf(Se)<0&&(ke[Se]=H[Se]);if(H!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,Se=Object.getOwnPropertySymbols(H);z<Se.length;z++)je.indexOf(Se[z])<0&&Object.prototype.propertyIsEnumerable.call(H,Se[z])&&(ke[Se[z]]=H[Se[z]]);return ke};function M({copyButtonRef:H,showCopyButton:je,size:ke,valueToCopy:Se,onValueRequest:z,onCopyButtonClick:D,disabled:me,prefix:se="",postfix:ce=""}){return(0,x.useMemo)(()=>({id:"copy",active:!0,ref:H,show:je,render:be=>{var{key:ze}=be,ae=h(be,["key"]);return(0,l.jsx)(R,Object.assign({},ae,{size:d._h[ke],valueToCopy:(se!=null?se:"")+Se+(ce!=null?ce:""),onValueRequest:z,onClick:D,disabled:me}),ze)}}),[H,je,ke,se,Se,ce,z,D,me])}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"(ee,L,e){e.d(L,{$:()=>b});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),C=function(S,G){var Z={};for(var O in S)Object.prototype.hasOwnProperty.call(S,O)&&G.indexOf(O)<0&&(Z[O]=S[O]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var q=0,O=Object.getOwnPropertySymbols(S);q<O.length;q++)G.indexOf(O[q])<0&&Object.prototype.propertyIsEnumerable.call(S,O[q])&&(Z[O[q]]=S[O[q]]);return Z};function b({postfix:S,disabled:G}){return(0,x.useMemo)(()=>({id:"postfix",active:!1,show:!!S,render:Z=>{var{key:O}=Z,q=C(Z,["key"]);return(0,l.jsx)("div",Object.assign({},q,{className:d.A.postfix,"data-test-id":"field-postfix","data-disabled":G||void 0,children:S}),O)}}),[G,S])}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"(ee,L,e){e.d(L,{M:()=>b});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),C=function(S,G){var Z={};for(var O in S)Object.prototype.hasOwnProperty.call(S,O)&&G.indexOf(O)<0&&(Z[O]=S[O]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var q=0,O=Object.getOwnPropertySymbols(S);q<O.length;q++)G.indexOf(O[q])<0&&Object.prototype.propertyIsEnumerable.call(S,O[q])&&(Z[O[q]]=S[O[q]]);return Z};function b({prefix:S,disabled:G}){return(0,x.useMemo)(()=>({id:"prefix",active:!1,show:!!S,render:Z=>{var{key:O}=Z,q=C(Z,["key"]);return(0,l.jsx)("div",Object.assign({},q,{"data-test-id":"field-prefix",className:d.A.prefix,"data-disabled":G||void 0,children:S}),O)}}),[G,S])}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"(ee,L,e){e.d(L,{I:()=>x});var l=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function x({value:d,onChange:C,defaultValue:b}){return(0,l.iC)(d,b,S=>{const G=typeof S=="function"?S(d):S;C==null||C(G)})}},"./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"(ee,L,e){e.d(L,{i:()=>ve});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=e.n(x),C=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),b=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),G=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),Z=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),O=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),q=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),T=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),N=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),oe=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),de=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),F=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),X=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),He=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),Me=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),Te=function(A,Pe){var J={};for(var R in A)Object.prototype.hasOwnProperty.call(A,R)&&Pe.indexOf(R)<0&&(J[R]=A[R]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,R=Object.getOwnPropertySymbols(A);h<R.length;h++)Pe.indexOf(R[h])<0&&Object.prototype.propertyIsEnumerable.call(A,R[h])&&(J[R[h]]=A[R[h]]);return J};const Ke=["top","right","bottom","left"];function ve(A){var{items:Pe,search:J,pinBottom:R=[],pinTop:h=[],footerActiveElementsRefs:M,children:H,trigger:je,placement:ke,widthStrategy:Se,triggerElemRef:z,open:D,onOpenChange:me,collapse:se={},triggerClassName:ce,selection:be,contentRender:ze,size:ae="s",marker:ye=!0,closeDroplistOnItemClick:Ie=!1,className:ie,listRef:P,untouchableScrollbars:B=!1,virtualized:Y=!1,closeOnPopstate:I}=A,W=Te(A,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const $=(0,b.useMemo)(()=>!!J,[J]),[ge=[],Ae]=(0,G.I)(se),Ee=(0,b.useCallback)(te=>Ae(Ne=>Ne!=null&&Ne.includes(te)?Ne.filter(tt=>tt!==te):(Ne!=null?Ne:[]).concat([te])),[Ae]),[Le=!1,Ce]=(0,G.I)({value:D,defaultValue:!1,onChange:me}),{searchItem:re,footerItems:V}=(0,O.nG)({footerActiveElementsRefs:M}),le=(0,b.useMemo)(()=>{const te=(0,q.lg)({items:h,prefix:Z.$.pinTop,parentId:Z.$.default}),Ne=(0,q.lg)({items:Pe,prefix:Z.$.default,parentId:Z.$.default}),tt=(0,q.lg)({items:R,prefix:Z.$.pinBottom,parentId:Z.$.default}),lt=Object.assign(Object.assign(Object.assign({},te.flattenItems),tt.flattenItems),Ne.flattenItems),dt=Object.assign(Object.assign(Object.assign({},te.focusFlattenItems),tt.focusFlattenItems),Ne.focusFlattenItems);return[...V,re].forEach(pt=>{lt[pt.id]=pt,dt[pt.id]=Object.assign(Object.assign({},pt),{originalId:pt.id,items:[],key:pt.id,allChildIds:[]})}),{items:Ne,pinTop:te,pinBottom:tt,flattenItems:lt,focusFlattenItems:dt}},[Pe,h,R,re,V]),{flattenItems:we,focusFlattenItems:ne}=le,ue=Te(le,["flattenItems","focusFlattenItems"]),{ids:nt,expandedIds:qe}=(0,b.useMemo)(()=>{const{pinTop:te,items:Ne,pinBottom:tt}=ue;let lt=[],dt=[];return $&&lt.push(re.id),[te,Ne,tt].forEach(({focusFlattenItems:pt,focusCloseChildIds:yt})=>{const At=(0,q.e)({focusFlattenItems:pt,focusCloseChildIds:yt,openCollapseItems:ge,isSelectionMultiple:(be==null?void 0:be.mode)==="multiple"});lt=lt.concat(At.ids),dt=dt.concat(At.expandedIds)}),V.forEach(pt=>{lt.push(pt.id)}),{ids:lt,expandedIds:dt}},[V,$,ue,ge,re.id,be==null?void 0:be.mode]),Xe=(0,b.useRef)(null),Je=(0,b.useRef)(null),Re=nt[0],{handleListKeyDownFactory:et,resetActiveItemId:ct,activeItemId:rt,forceUpdateActiveItemId:$e}=(0,X.d)({mainRef:z!=null?z:Xe,focusFlattenItems:ne,hasListInFocusChain:!0,firstItemId:Re}),ut=(0,b.useCallback)(te=>et(nt,qe)(te),[et,nt,qe]),_t=(0,b.useCallback)(te=>{ct(),Ce(te)},[ct,Ce]),at=(0,b.useCallback)((te,Ne)=>{te.key==="ArrowDown"&&(te.preventDefault(),Ce(!0),setTimeout(()=>{var tt;ct(),(tt=Je.current)===null||tt===void 0||tt.focus()},0)),te.key==="ArrowUp"&&Ce(!1),Ne==null||Ne(te)},[ct,Ce]),jt=(0,b.useMemo)(()=>(0,b.isValidElement)(H),[H]),ot=(0,b.useMemo)(()=>{if((0,b.isValidElement)(H)){const te=typeof H.props=="object"?H.props:{};return(0,b.cloneElement)(H,Object.assign(Object.assign({},te),{onKeyDown:Ne=>{var tt;at(Ne,(tt=H.props)===null||tt===void 0?void 0:tt.onKeyDown)}}))}return typeof H=="function"?H({onKeyDown:at}):H},[at,H]);return(0,l.jsx)(oe.Tr,{flattenItems:we,focusFlattenItems:ne,contentRender:ze,size:ae,marker:ye,firstItemId:Re,virtualized:Y,children:(0,l.jsx)(T.WM,Object.assign({},be,{children:(0,l.jsx)(N.bN.Provider,{value:{openCollapseItems:ge,toggleOpenCollapseItem:Ee},children:(0,l.jsx)(de.m.Provider,{value:{activeItemId:rt,handleListKeyDownFactory:et,forceUpdateActiveItemId:$e},children:(0,l.jsx)(F.K.Provider,{value:{closeDroplistOnItemClick:Ie,closeDroplist:()=>{var te;Ce(!1),ct(),(te=(z!=null?z:Xe).current)===null||te===void 0||te.focus()}},children:(0,l.jsx)(S.m,{content:(0,l.jsx)("div",{className:d()(Me.A.wrapper,ie),children:(0,l.jsx)(He.Q,Object.assign({},W,{items:ue.items.focusCloseChildIds,pinTop:ue.pinTop.focusCloseChildIds,pinBottom:ue.pinBottom.focusCloseChildIds,virtualized:Y,onKeyDown:ut,searchItem:re,tabIndex:0,ref:(0,C.A)(Je,P),search:J,onFocus:te=>{te.stopPropagation(),$e==null||$e(nt[0])},limitedScrollHeight:!0,untouchableScrollbars:B}))}),outsideClick:!0,triggerClassName:ce,fallbackPlacements:Ke,trigger:je,placement:ke,widthStrategy:Se,triggerRef:z?jt&&z||void 0:Xe,open:Le,onOpenChange:_t,closeOnPopstate:I,children:ot})})})})}))})}},"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js"(ee,L,e){e.d(L,{E:()=>A});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=e.n(x),C=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(b),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Z=e.n(G),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),q=e.n(O),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),N=e.n(T),oe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),de=e.n(oe),F=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),X=e.n(F),He=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"),Me={};Me.styleTagTransform=X(),Me.setAttributes=N(),Me.insert=q().bind(null,"head"),Me.domAPI=Z(),Me.insertStyleElement=de();var Te=S()(He.A,Me);const Ke=He.A&&He.A.locals?He.A.locals:void 0;var ve=function(Pe,J){var R={};for(var h in Pe)Object.prototype.hasOwnProperty.call(Pe,h)&&J.indexOf(h)<0&&(R[h]=Pe[h]);if(Pe!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,h=Object.getOwnPropertySymbols(Pe);M<h.length;M++)J.indexOf(h[M])<0&&Object.prototype.propertyIsEnumerable.call(Pe,h[M])&&(R[h[M]]=Pe[h[M]]);return R};function A(Pe){var{width:J,height:R,className:h,borderRadius:M,loading:H,children:je}=Pe,ke=ve(Pe,["width","height","className","borderRadius","loading","children"]);return(0,C.v)(H)?(0,l.jsx)("div",Object.assign({},ke,{style:{width:J,height:R,borderRadius:M},className:d()(Ke.skeleton,h)})):(0,l.jsx)(l.Fragment,{children:je})}},"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js"(ee,L,e){e.d(L,{Q:()=>C,r:()=>d});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const d=(0,x.createContext)(!1);function C({loading:b,children:S}){return(0,l.jsx)(d.Provider,{value:b,children:S})}},"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"(ee,L,e){e.d(L,{v:()=>d});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js");function d(C){return(0,l.useContext)(x.r)||C}},"./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/Slider.js"(ee,L,e){e.d(L,{A:()=>Se});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(x),C=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),b=e.n(C),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),G=e.n(S),Z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),O=e.n(Z),q=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=e.n(q),N=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),oe=e.n(N),de=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/slider.css"),F={};F.styleTagTransform=oe(),F.setAttributes=O(),F.insert=G().bind(null,"head"),F.domAPI=b(),F.insertStyleElement=T();var X=d()(de.A,F);const He=de.A&&de.A.locals?de.A.locals:void 0;var Me=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),Te=e.n(Me),Ke=e("./node_modules/.pnpm/rc-slider@10.5.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-slider/es/index.js"),ve=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),A=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),Pe=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"),J=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/styles.module.css"),R={};R.styleTagTransform=oe(),R.setAttributes=O(),R.insert=G().bind(null,"head"),R.domAPI=b(),R.insertStyleElement=T();var h=d()(J.A,R);const M=J.A&&J.A.locals?J.A.locals:void 0;var H=function(z,D){var me={};for(var se in z)Object.prototype.hasOwnProperty.call(z,se)&&D.indexOf(se)<0&&(me[se]=z[se]);if(z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ce=0,se=Object.getOwnPropertySymbols(z);ce<se.length;ce++)D.indexOf(se[ce])<0&&Object.prototype.propertyIsEnumerable.call(z,se[ce])&&(me[se[ce]]=z[se[ce]]);return me};const je=z=>(0,ve.cloneElement)(z,{[Pe.a]:"Left Right"}),ke=z=>function(D,me){return(0,l.jsx)(A.m,{tip:z?z(me.value):me.value,open:me.dragging||void 0,disableSpanWrapper:!0,trigger:"hoverAndFocusVisible",className:M.tipWrapper,children:je(D)})};function Se(z){var{className:D,handleTip:me,tipFormatter:se}=z,ce=H(z,["className","handleTip","tipFormatter"]);return(0,l.jsx)(Ke.A,Object.assign({className:Te()("osThemeSnack",D,{withMarks:!!ce.marks,reverse:!!ce.reverse}),handleRender:me?ke(se):je},ce),JSON.stringify(ce.marks))}},"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/WithTooltip/WithTooltip.js"(ee,L,e){e.d(L,{k:()=>d});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),x=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function d({tooltip:C,children:b}){return C!=null&&C.tip?(0,l.jsx)(x.m,Object.assign({},C,{children:b})):(0,l.jsx)(l.Fragment,{children:b})}},"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"(ee,L,e){e.d(L,{N:()=>d});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const d=(0,x.B)()?l.useLayoutEffect:l.useEffect},"./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useSwipeable.js"(ee,L,e){e.d(L,{a:()=>C,u:()=>b});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=e("./node_modules/.pnpm/react-swipeable@7.0.2_react@18.2.0/node_modules/react-swipeable/es/index.js"),d=function(S,G){var Z={};for(var O in S)Object.prototype.hasOwnProperty.call(S,O)&&G.indexOf(O)<0&&(Z[O]=S[O]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var q=0,O=Object.getOwnPropertySymbols(S);q<O.length;q++)G.indexOf(O[q])<0&&Object.prototype.propertyIsEnumerable.call(S,O[q])&&(Z[O[q]]=S[O[q]]);return Z};const C="data-swipe-directions";function b(S){var{availableDirections:G,enabled:Z=!0}=S,O=d(S,["availableDirections","enabled"]);const q=(0,l.useRef)(!0),T=F=>{var X;if(G){if(!G.includes(F.dir)){q.current=!1;return}if(!O.onSwipeStart)return;F.event.stopPropagation()}(X=O.onSwipeStart)===null||X===void 0||X.call(O,F)},N=F=>{var X;if(G){if(!q.current)return;F.event.stopPropagation()}(X=O.onSwiping)===null||X===void 0||X.call(O,F)},oe=F=>{var X;if(G){if(!q.current){q.current=!0;return}F.event.stopPropagation()}(X=O.onSwiped)===null||X===void 0||X.call(O,F)},de=(0,x.uh)(Z?Object.assign(Object.assign({},O),{onSwipeStart:T,onSwiping:N,onSwiped:oe}):{});return Object.assign(Object.assign({},de),{[C]:Z&&G?G.join(" "):void 0})}},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.timePickerWrapper--dqK6Y{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  box-sizing:border-box;
  width:-moz-fit-content;
  width:fit-content;
}
.timePickerWrapper--dqK6Y[data-fit-to-container]{
  min-width:100%;
  height:100%;
}`,""]),b.locals={timePickerWrapper:"timePickerWrapper--dqK6Y"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+color-picker@0.3.56_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/color-picker/dist/esm/components/global.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.osThemeSnack .react-colorful{
  gap:var(--space-color-picker-color-palette-gap, 8px);
  width:100%;
  min-height:200px;
}

.osThemeSnack .react-colorful .react-colorful__saturation{
  border-bottom-width:8px;
  border-radius:0;
}

.osThemeSnack .react-colorful .react-colorful__pointer{
  width:var(--size-color-picker-color-palette-slider-track, 16px);
  height:var(--size-color-picker-color-palette-slider-track, 16px);
  border-radius:var(--radius-color-picker-color-slider, 8px);
  border-width:var(--border-width-color-picker-color-slider, 4px);
  border-color:#fff;
  box-shadow:var(--box-shadow-elevation-level3, 0px 0px 8px 0px rgba(0, 0, 0, 0.0784313725), 0px 8px 16px 0px rgba(0, 0, 0, 0.0784313725));
}

.osThemeSnack .react-colorful .react-colorful__hue,
.osThemeSnack .react-colorful .react-colorful__alpha{
  height:var(--size-color-picker-color-palette-slider-track, 16px);
  border-radius:var(--radius-color-picker-color-palette-slider-track, 8px);
}`,""]);const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+color-picker@0.3.56_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/color-picker/dist/esm/components/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.container--Fz5S8{
  padding-right:var(--space-color-picker-padding, 4px);
  padding-left:var(--space-color-picker-padding, 4px);
  gap:var(--space-color-picker-gap, 16px);
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  min-width:248px;
}

.footer--n0I7U{
  display:flex;
  justify-content:space-between;
  box-sizing:border-box;
  padding-top:var(--space-color-picker-footer-gap, 8px);
  border-top:solid 1px var(--sys-neutral-decor-default, #dde0ea);
}

.colorModel--hEc22{
  gap:var(--space-color-picker-color-model-gap, 8px);
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
}

.colorFields--H0Gru{
  gap:var(--space-color-picker-color-model-gap, 8px);
  display:grid;
  grid-template-columns:repeat(3, 1fr);
}
.colorFields--H0Gru[data-with-alpha]{
  grid-template-columns:repeat(4, 1fr);
}
.colorFields--H0Gru[data-mode=hex]{
  grid-template-columns:1fr;
}
.colorFields--H0Gru[data-mode=hex][data-with-alpha]{
  grid-template-columns:1fr min-content;
}`,""]),b.locals={container:"container--Fz5S8",footer:"footer--n0I7U",colorModel:"colorModel--hEc22",colorFields:"colorFields--H0Gru"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+color-picker@0.3.56_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/color-picker/dist/esm/helperComponents/FieldPrivate/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.container--sccPI{
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--sccPI:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-decor-hovered, #b3deca);
}
.container--sccPI:not([data-readonly]):focus-within:not([data-disabled]), .container--sccPI:not([data-readonly])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-accent-default, #389f74);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}
.container--sccPI{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-sizing:border-box;
  min-width:52px;
  border-style:solid;
}
.container--sccPI[data-validation=error]{
  background-color:var(--sys-red-background1-level, #fef6f3);
  border-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--sccPI[data-validation=error]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-decor-hovered, #fac1b3);
}
.container--sccPI[data-validation=error]:not([data-readonly]):focus-within:not([data-disabled]), .container--sccPI[data-validation=error]:not([data-readonly])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-accent-default, #cb3f3e);
  outline-color:var(--sys-red-decor-activated, #fbab99);
}
.container--sccPI[data-selectable],
.container--sccPI[data-selectable] input,
.container--sccPI[data-selectable] select,
.container--sccPI[data-selectable] textarea,
.container--sccPI[data-selectable] span{
  cursor:pointer;
}
.container--sccPI[data-readonly],
.container--sccPI[data-readonly] input,
.container--sccPI[data-readonly] select,
.container--sccPI[data-readonly] textarea,
.container--sccPI[data-readonly] span{
  cursor:default;
}
.container--sccPI[data-readonly], .container--sccPI[data-readonly]:hover{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.container--sccPI[data-readonly]:focus-within, .container--sccPI[data-readonly][data-focused]{
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}
.container--sccPI[data-disabled],
.container--sccPI[data-disabled] input,
.container--sccPI[data-disabled] select,
.container--sccPI[data-disabled] textarea,
.container--sccPI[data-disabled] span{
  cursor:not-allowed;
  background-color:var(--sys-neutral-background, #eeeff3);
}
.container--sccPI[data-disabled], .container--sccPI[data-disabled]:focus-within, .container--sccPI[data-disabled][data-focused], .container--sccPI[data-disabled]:hover{
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}
.container--sccPI[data-size=s]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--sccPI[data-size=s],
.container--sccPI[data-size=s] input,
.container--sccPI[data-size=s] select,
.container--sccPI[data-size=s] textarea,
.container--sccPI[data-size=s] span{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.container--sccPI[data-size=s][data-variant=single-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--sccPI[data-size=s][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-s-top, 7px);
  padding-bottom:var(--space-fields-multi-line-container-s-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-s-left, 7px);
  padding-right:var(--space-fields-multi-line-container-s-right, 2px);
}
.container--sccPI[data-size=m]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--sccPI[data-size=m],
.container--sccPI[data-size=m] input,
.container--sccPI[data-size=m] select,
.container--sccPI[data-size=m] textarea,
.container--sccPI[data-size=m] span{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.container--sccPI[data-size=m][data-variant=single-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--sccPI[data-size=m][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-m-top, 9px);
  padding-bottom:var(--space-fields-multi-line-container-m-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-m-left, 9px);
  padding-right:var(--space-fields-multi-line-container-m-right, 2px);
}
.container--sccPI[data-size=l]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--sccPI[data-size=l],
.container--sccPI[data-size=l] input,
.container--sccPI[data-size=l] select,
.container--sccPI[data-size=l] textarea,
.container--sccPI[data-size=l] span{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.container--sccPI[data-size=l][data-variant=single-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--sccPI[data-size=l][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-l-top, 11px);
  padding-bottom:var(--space-fields-multi-line-container-l-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-l-left, 11px);
  padding-right:var(--space-fields-multi-line-container-l-right, 2px);
}

.prefix--SBvN9{
  display:inline-flex;
  flex-shrink:0;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

.postfix--gowNm{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-postfix-gap, 4px);
}`,""]),b.locals={container:"container--sccPI",prefix:"prefix--SBvN9",postfix:"postfix--gowNm"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldColor/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.triggerClassName--_0LXt{
  --offset:var(--space-drop-list-drop-offset, 4px);
  display:block;
  width:100%;
}

.colorPreview--ySTiS{
  position:relative;
  width:var(--dimension-2m, 16px);
  height:var(--dimension-2m, 16px);
  background-color:#fff;
  border-radius:var(--dimension-050m, 4px);
}
.colorPreview--ySTiS::after{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:var(--color);
  border-radius:var(--dimension-050m, 4px);
}`,""]),b.locals={triggerClassName:"triggerClassName--_0LXt",colorPreview:"colorPreview--ySTiS"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDate/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.triggerClassName--dX_L0{
  --offset:var(--space-drop-list-drop-offset, 4px);
  display:block;
  width:100%;
}

.calendarWrapper--WIS2O{
  width:100%;
  height:100%;
}
.calendarWrapper--WIS2O[data-size=s]{
  min-width:240px;
  min-height:256px;
}
.calendarWrapper--WIS2O[data-size=m]{
  min-width:280px;
  min-height:308px;
}
.calendarWrapper--WIS2O[data-size=l]{
  min-width:304px;
  min-height:328px;
}

.container--U4PFa .calendarIcon--HnuLL{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.container--U4PFa .calendarIcon--HnuLL[data-size=s]{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.container--U4PFa .calendarIcon--HnuLL[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--U4PFa .calendarIcon--HnuLL[data-size=l]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--U4PFa:hover .calendarIcon--HnuLL, .container--U4PFa:focus-within .calendarIcon--HnuLL, .container--U4PFa[data-focused] .calendarIcon--HnuLL{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--U4PFa[data-disabled] .calendarIcon--HnuLL, .container--U4PFa[data-readonly] .calendarIcon--HnuLL{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),b.locals={triggerClassName:"triggerClassName--dX_L0",calendarWrapper:"calendarWrapper--WIS2O",container:"container--U4PFa",calendarIcon:"calendarIcon--HnuLL"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.triggerClassName--hB2LL{
  --offset:var(--space-drop-list-drop-offset, 4px);
  width:100%;
}

.contentWrapper--XjkLm{
  position:relative;
  overflow:hidden;
  display:flex;
  flex-wrap:wrap;
  width:100%;
}

.tagContainer--o23gr{
  height:auto !important;
}
.tagContainer--o23gr[data-size=s]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  min-height:var(--size-fields-s, 32px);
  padding-top:var(--space-fields-select-multiple-s-vertical-padding, 2px);
  padding-bottom:var(--space-fields-select-multiple-s-vertical-padding, 2px);
}
.tagContainer--o23gr[data-size=s] .contentWrapper--XjkLm{
  gap:var(--space-fields-single-line-container-s-gap, 4px);
}
.tagContainer--o23gr[data-size=m]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  padding-top:var(--space-fields-select-multiple-m-vertical-padding, 6px);
  padding-bottom:var(--space-fields-select-multiple-m-vertical-padding, 6px);
  min-height:var(--size-fields-m, 40px);
}
.tagContainer--o23gr[data-size=m] .contentWrapper--XjkLm{
  gap:var(--space-fields-single-line-container-m-gap, 4px);
}
.tagContainer--o23gr[data-size=l]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  min-height:var(--size-fields-l, 48px);
  padding-top:var(--space-fields-select-multiple-l-vertical-padding, 6px);
  padding-bottom:var(--space-fields-select-multiple-l-vertical-padding, 6px);
}
.tagContainer--o23gr[data-size=l] .contentWrapper--XjkLm{
  gap:var(--space-fields-single-line-container-l-gap, 8px);
}
.tagContainer--o23gr[data-disabled] .tag--E7Goa[data-disabled]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.tagContainer--o23gr[data-disabled] .tag--E7Goa[data-disabled] *{
  background-color:inherit;
}

.container--rUNZt{
  position:relative;
  flex:1 1 0;
}
.container--rUNZt[data-size=s] .inputPlug--OTA6N{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.container--rUNZt[data-size=s] .arrowIcon--JPP7t{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.container--rUNZt[data-size=s][data-variant=single-line-container] .displayValue--bO5gr{
  width:calc(100% - (var(--space-fields-single-line-container-s-right, 7px) + var(--space-fields-single-line-container-s-gap, 4px) + calc(var(--space-fields-postfix-gap, 4px) + var(--size-icon-container-xs, 16px) * 2)));
  margin-right:calc(var(--space-fields-single-line-container-s-right, 7px) + var(--space-fields-single-line-container-s-gap, 4px) + calc(var(--space-fields-postfix-gap, 4px) + var(--size-icon-container-xs, 16px) * 2));
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  border-radius:var(--radius-fields-s, 4px);
}
.container--rUNZt[data-size=m] .inputPlug--OTA6N{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.container--rUNZt[data-size=m] .arrowIcon--JPP7t{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.container--rUNZt[data-size=m][data-variant=single-line-container] .displayValue--bO5gr{
  width:calc(100% - (var(--space-fields-single-line-container-m-right, 9px) + var(--space-fields-single-line-container-m-gap, 4px) + calc(var(--space-fields-postfix-gap, 4px) + var(--size-icon-container-s, 24px) * 2)));
  margin-right:calc(var(--space-fields-single-line-container-m-right, 9px) + var(--space-fields-single-line-container-m-gap, 4px) + calc(var(--space-fields-postfix-gap, 4px) + var(--size-icon-container-s, 24px) * 2));
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  border-radius:var(--radius-fields-m, 4px);
}
.container--rUNZt[data-size=l] .inputPlug--OTA6N{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.container--rUNZt[data-size=l] .arrowIcon--JPP7t{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.container--rUNZt[data-size=l][data-variant=single-line-container] .displayValue--bO5gr{
  width:calc(100% - (var(--space-fields-single-line-container-l-right, 11px) + var(--space-fields-single-line-container-l-gap, 8px) + calc(var(--space-fields-postfix-gap, 4px) + var(--size-icon-container-s, 24px) * 2)));
  margin-right:calc(var(--space-fields-single-line-container-l-right, 11px) + var(--space-fields-single-line-container-l-gap, 8px) + calc(var(--space-fields-postfix-gap, 4px) + var(--size-icon-container-s, 24px) * 2));
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  border-radius:var(--radius-fields-l, 4px);
}
.container--rUNZt:hover .arrowIcon--JPP7t, .container--rUNZt:focus-within .arrowIcon--JPP7t, .container--rUNZt[data-focused] .arrowIcon--JPP7t{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--rUNZt[data-disabled] .arrowIcon--JPP7t, .container--rUNZt[data-readonly] .arrowIcon--JPP7t{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

.inputPlug--OTA6N{
  content:"";
  position:absolute;
  top:0;
  left:0;
  overflow:hidden;
  width:-moz-fit-content;
  width:fit-content;
  max-width:100%;
  height:0;
}

.inputWrapper--GH2qG{
  position:relative;
  display:inline-flex;
  flex:1;
  min-width:4px;
  color:transparent;
}
.inputWrapper--GH2qG[data-searchable=false]{
  width:0;
  min-width:0;
  max-width:0;
}

.postfix--AEbYi{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-postfix-gap, 4px);
}

input.readonlyCursor--EJBk8{
  cursor:pointer;
  caret-color:transparent;
}`,""]),b.locals={triggerClassName:"triggerClassName--hB2LL",contentWrapper:"contentWrapper--XjkLm",tagContainer:"tagContainer--o23gr",tag:"tag--E7Goa",container:"container--rUNZt",inputPlug:"inputPlug--OTA6N",arrowIcon:"arrowIcon--JPP7t",displayValue:"displayValue--bO5gr",inputWrapper:"inputWrapper--GH2qG",postfix:"postfix--AEbYi",readonlyCursor:"readonlyCursor--EJBk8"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSlider/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.sliderWrapper--tlyHI{
  display:flex;
  justify-content:center;
  width:100%;
  margin-top:-13px;
}
.sliderWrapper--tlyHI .slider--FzLJL{
  flex:1;
}
.sliderWrapper--tlyHI .slider--FzLJL[data-size=s]{
  height:var(--size-slider-track-line, 2px);
  padding-left:var(--space-fields-slider-padding-s, 8px);
  padding-right:var(--space-fields-slider-padding-s, 8px);
  height:inherit;
}
.sliderWrapper--tlyHI .slider--FzLJL[data-size=m]{
  height:var(--size-slider-track-line, 2px);
  padding-left:var(--space-fields-slider-padding-m, 10px);
  padding-right:var(--space-fields-slider-padding-m, 10px);
  height:inherit;
}
.sliderWrapper--tlyHI .slider--FzLJL[data-size=l]{
  height:var(--size-slider-track-line, 2px);
  padding-left:var(--space-fields-slider-padding-l, 12px);
  padding-right:var(--space-fields-slider-padding-l, 12px);
  height:inherit;
}

.fieldContainer--qNkeY svg{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),b.locals={sliderWrapper:"sliderWrapper--tlyHI",slider:"slider--FzLJL",fieldContainer:"fieldContainer--qNkeY"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldStepper/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.stepper--khpq5{
  text-align:center;
}

.button--vRnZV *{
  cursor:pointer;
}
.button--vRnZV[data-disabled] *{
  cursor:not-allowed;
}

.trigger--bC7xP{
  min-width:auto;
}

.wrap--CZW_H{
  overflow:hidden;
  display:flex;
  justify-content:center;
  max-width:100%;
}

.prefixWrapper--P0jKu{
  margin-right:var(--space-fields-stepper-content-container, 4px);
}

.postfixWrapper--FQPKQ{
  margin-left:var(--space-fields-stepper-content-container, 4px);
}`,""]),b.locals={stepper:"stepper--khpq5",button:"button--vRnZV",trigger:"trigger--bC7xP",wrap:"wrap--CZW_H",prefixWrapper:"prefixWrapper--P0jKu",postfixWrapper:"postfixWrapper--FQPKQ"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTextArea/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.container--pmsw_{
  --max-rows:1000;
  --min-rows:3;
}
.container--pmsw_[data-actions]{
  display:flex;
  flex-direction:column;
}
.container--pmsw_ .scrollContainer--iutul{
  min-height:calc(var(--min-rows) * var(--row-height) + var(--horizontal-scroll-bar-height));
  max-height:calc(var(--max-rows) * var(--row-height) + var(--horizontal-scroll-bar-height));
}
.container--pmsw_ .scrollContainer--iutul[data-resizable]{
  height:calc(var(--min-rows) * var(--row-height) + var(--horizontal-scroll-bar-height));
}
.container--pmsw_[data-size=s]{
  --row-height:var(--sans-body-s-line-height, 16px);
  --horizontal-scroll-bar-height:var(--dimension-050m, 4px);
}
.container--pmsw_[data-size=s] .textarea--LBWVR{
  overflow:hidden;
  padding-right:calc(var(--size-fields-buttons-s, 16px) + var(--size-fields-scroll-bar-width, 8px));
}
.container--pmsw_[data-size=s] .postfix--k8dds{
  position:absolute;
  top:var(--space-fields-multi-line-container-s-top, 7px);
  right:calc(var(--space-fields-multi-line-container-s-right, 2px) + var(--size-fields-scroll-bar-width, 8px));
}
.container--pmsw_[data-size=m]{
  --row-height:var(--sans-body-m-line-height, 20px);
  --horizontal-scroll-bar-height:calc(var(--dimension-025m, 2px) + var(--dimension-050m, 4px));
}
.container--pmsw_[data-size=m] .textarea--LBWVR{
  overflow:hidden;
  padding-right:calc(var(--size-fields-buttons-m, 24px) + var(--size-fields-scroll-bar-width, 8px));
}
.container--pmsw_[data-size=m] .postfix--k8dds{
  position:absolute;
  top:var(--space-fields-multi-line-container-m-top, 9px);
  right:calc(var(--space-fields-multi-line-container-m-right, 2px) + var(--size-fields-scroll-bar-width, 8px));
}
.container--pmsw_[data-size=l]{
  --row-height:var(--sans-body-l-line-height, 24px);
  --horizontal-scroll-bar-height:var(--dimension-1m, 8px);
}
.container--pmsw_[data-size=l] .textarea--LBWVR{
  overflow:hidden;
  padding-right:calc(var(--size-fields-buttons-m, 24px) + var(--size-fields-scroll-bar-width, 8px));
}
.container--pmsw_[data-size=l] .postfix--k8dds{
  position:absolute;
  top:var(--space-fields-multi-line-container-l-top, 11px);
  right:calc(var(--space-fields-multi-line-container-l-right, 2px) + var(--size-fields-scroll-bar-width, 8px));
}`,""]),b.locals={container:"container--pmsw_",scrollContainer:"scrollContainer--iutul",textarea:"textarea--LBWVR",postfix:"postfix--k8dds"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTime/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.triggerClassName--ybKXQ{
  --offset:var(--space-drop-list-drop-offset, 4px);
  display:block;
  width:100%;
}

.container--_qkzC .calendarIcon--FImRH{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.container--_qkzC .calendarIcon--FImRH[data-size=s]{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.container--_qkzC .calendarIcon--FImRH[data-size=m]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--_qkzC .calendarIcon--FImRH[data-size=l]{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.container--_qkzC:hover .calendarIcon--FImRH, .container--_qkzC:focus-within .calendarIcon--FImRH, .container--_qkzC[data-focused] .calendarIcon--FImRH{
  color:var(--sys-neutral-text-support, #6d707f);
}
.container--_qkzC[data-disabled] .calendarIcon--FImRH, .container--_qkzC[data-readonly] .calendarIcon--FImRH{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),b.locals={triggerClassName:"triggerClassName--ybKXQ",container:"container--_qkzC",calendarIcon:"calendarIcon--FImRH"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonCopyValue/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.buttonCopyValue--r9ywI{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonCopyValue--r9ywI[data-size=s]{
  width:var(--size-fields-buttons-s, 16px);
  height:var(--size-fields-buttons-s, 16px);
  border-radius:var(--radius-fields-buttons-s, 8px);
}
.buttonCopyValue--r9ywI[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.buttonCopyValue--r9ywI[data-size=m]{
  width:var(--size-fields-buttons-m, 24px);
  height:var(--size-fields-buttons-m, 24px);
  border-radius:var(--radius-fields-buttons-m, 12px);
}
.buttonCopyValue--r9ywI[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonCopyValue--r9ywI:hover{
  cursor:pointer;
  color:var(--sys-neutral-text-support, #6d707f);
}
.buttonCopyValue--r9ywI:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-support, #6d707f);
  outline-color:var(--sys-available-complementary, #1c1c24);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonCopyValue--r9ywI:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.buttonCopyValue--r9ywI[data-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),b.locals={buttonCopyValue:"buttonCopyValue--r9ywI"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonField/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.buttonField--UJcAp{
  display:flex;
  flex-shrink:0;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-support, #6d707f);
  background-color:transparent;
  border:none;
}
.buttonField--UJcAp[data-variant=before][data-size=s]{
  border-top-right-radius:var(--dimension-theme-general-0px, 0px);
  border-bottom-right-radius:var(--dimension-theme-general-0px, 0px);
  border-top-left-radius:var(--radius-fields-button-field-s, 3px);
  border-bottom-left-radius:var(--radius-fields-button-field-s, 3px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  padding-right:var(--dimension-theme-general-0px, 0px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  min-height:var(--size-fields-button-field-s, 28px);
}
.buttonField--UJcAp[data-variant=before][data-size=m]{
  border-top-right-radius:var(--dimension-theme-general-0px, 0px);
  border-bottom-right-radius:var(--dimension-theme-general-0px, 0px);
  border-top-left-radius:var(--radius-fields-button-field-m, 3px);
  border-bottom-left-radius:var(--radius-fields-button-field-m, 3px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  padding-right:var(--dimension-theme-general-0px, 0px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  min-height:var(--size-fields-button-field-m, 36px);
}
.buttonField--UJcAp[data-variant=before][data-size=l]{
  border-top-right-radius:var(--dimension-theme-general-0px, 0px);
  border-bottom-right-radius:var(--dimension-theme-general-0px, 0px);
  border-top-left-radius:var(--radius-fields-button-field-l, 3px);
  border-bottom-left-radius:var(--radius-fields-button-field-l, 3px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  padding-right:var(--dimension-theme-general-0px, 0px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  min-height:var(--size-fields-button-field-l, 44px);
}
.buttonField--UJcAp[data-variant=after][data-size=s]{
  border-top-right-radius:var(--radius-fields-button-field-s, 3px);
  border-bottom-right-radius:var(--radius-fields-button-field-s, 3px);
  border-top-left-radius:var(--dimension-theme-general-0px, 0px);
  border-bottom-left-radius:var(--dimension-theme-general-0px, 0px);
  padding-left:var(--dimension-theme-general-0px, 0px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  min-height:var(--size-fields-button-field-s, 28px);
}
.buttonField--UJcAp[data-variant=after][data-size=m]{
  border-top-right-radius:var(--radius-fields-button-field-m, 3px);
  border-bottom-right-radius:var(--radius-fields-button-field-m, 3px);
  border-top-left-radius:var(--dimension-theme-general-0px, 0px);
  border-bottom-left-radius:var(--dimension-theme-general-0px, 0px);
  padding-left:var(--dimension-theme-general-0px, 0px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  min-height:var(--size-fields-button-field-m, 36px);
}
.buttonField--UJcAp[data-variant=after][data-size=l]{
  border-top-right-radius:var(--radius-fields-button-field-l, 3px);
  border-bottom-right-radius:var(--radius-fields-button-field-l, 3px);
  border-top-left-radius:var(--dimension-theme-general-0px, 0px);
  border-bottom-left-radius:var(--dimension-theme-general-0px, 0px);
  padding-left:var(--dimension-theme-general-0px, 0px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  min-height:var(--size-fields-button-field-l, 44px);
}
.buttonField--UJcAp:hover{
  cursor:pointer;
  background:color-mix(in srgb, var(--sys-neutral-accent-default, #787b8a), var(--sys-neutral-background1-level, #fdfdfd) calc((1 - var(--opacity-a008, 0.08)) * 100%));
}
.buttonField--UJcAp:focus-visible, .buttonField--UJcAp[data-arrow-open]{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  background:color-mix(in srgb, var(--sys-neutral-accent-default, #787b8a), var(--sys-neutral-background1-level, #fdfdfd) calc((1 - var(--opacity-a008, 0.08)) * 100%));
  outline-color:var(--sys-primary-accent-default, #389f74);
}
.buttonField--UJcAp[data-disabled]{
  cursor:not-allowed;
  opacity:var(--opacity-a056, 0.56);
  background-color:transparent;
}

.divider--WcASV{
  align-self:stretch;
  height:auto;
}

.content--zzogy{
  display:inline-flex;
}`,""]),b.locals={buttonField:"buttonField--UJcAp",divider:"divider--WcASV",content:"content--zzogy"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonFieldList/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.triggerClassName--zfZyL{
  --offset:var(--space-drop-list-drop-offset, 4px);
}`,""]),b.locals={triggerClassName:"triggerClassName--zfZyL"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonHideValue/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.buttonHideValue--GXLpg{
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  background-color:transparent;
  border:none;
}
.buttonHideValue--GXLpg[data-size=s]{
  width:var(--size-fields-buttons-s, 16px);
  height:var(--size-fields-buttons-s, 16px);
  border-radius:var(--radius-fields-buttons-s, 8px);
}
.buttonHideValue--GXLpg[data-size=s] svg{
  width:var(--size-icon-container-xs, 16px) !important;
  height:var(--size-icon-container-xs, 16px) !important;
}
.buttonHideValue--GXLpg[data-size=m]{
  width:var(--size-fields-buttons-m, 24px);
  height:var(--size-fields-buttons-m, 24px);
  border-radius:var(--radius-fields-buttons-m, 12px);
}
.buttonHideValue--GXLpg[data-size=m] svg{
  width:var(--size-icon-container-s, 24px) !important;
  height:var(--size-icon-container-s, 24px) !important;
}
.buttonHideValue--GXLpg:hover{
  cursor:pointer;
  color:var(--sys-neutral-text-support, #6d707f);
}
.buttonHideValue--GXLpg:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  color:var(--sys-neutral-text-support, #6d707f);
  outline-color:var(--sys-available-complementary, #1c1c24);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.buttonHideValue--GXLpg:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.buttonHideValue--GXLpg[data-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),b.locals={buttonHideValue:"buttonHideValue--GXLpg"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.container--YBp1H[data-validation=default]{
  background-color:var(--sys-neutral-background1-level, #fdfdfd);
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--YBp1H[data-validation=default]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-decor-hovered, #b3deca);
}
.container--YBp1H[data-validation=default]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--YBp1H[data-validation=default]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-primary-accent-default, #389f74);
  outline-color:var(--sys-primary-decor-activated, #99d7ba);
}
.container--YBp1H[data-validation=error]{
  background-color:var(--sys-red-background1-level, #fef6f3);
  border-color:var(--sys-red-decor-default, #fdd6cd);
}
.container--YBp1H[data-validation=error]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-decor-hovered, #fac1b3);
}
.container--YBp1H[data-validation=error]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--YBp1H[data-validation=error]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-red-accent-default, #cb3f3e);
  outline-color:var(--sys-red-decor-activated, #fbab99);
}
.container--YBp1H[data-validation=warning]{
  background-color:var(--sys-yellow-background1-level, #fcfbef);
  border-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.container--YBp1H[data-validation=warning]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.container--YBp1H[data-validation=warning]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--YBp1H[data-validation=warning]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-yellow-accent-default, #e2b134);
  outline-color:var(--sys-yellow-decor-activated, #e6c878);
}
.container--YBp1H[data-validation=success]{
  background-color:var(--sys-green-background1-level, #f6fdf3);
  border-color:var(--sys-green-decor-default, #d2ead0);
}
.container--YBp1H[data-validation=success]:hover{
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.container--YBp1H[data-validation=success]:not([data-readonly]):not([data-disable-focus]):focus-within:not([data-disabled]), .container--YBp1H[data-validation=success]:not([data-readonly]):not([data-disable-focus])[data-focused]:not([data-disabled]){
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-background2-level, #ffffff);
  border-color:var(--sys-green-accent-default, #57b762);
  outline-color:var(--sys-green-decor-activated, #a8d1a2);
}
.container--YBp1H{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  box-sizing:border-box;
  border-style:solid;
}
.container--YBp1H[data-size=s]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--YBp1H[data-size=s],
.container--YBp1H[data-size=s] input,
.container--YBp1H[data-size=s] select,
.container--YBp1H[data-size=s] textarea,
.container--YBp1H[data-size=s] span{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.container--YBp1H[data-size=s][data-variant=single-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--YBp1H[data-size=s][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-button, 0px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-right, 7px);
  height:var(--size-fields-s, 32px);
}
.container--YBp1H[data-size=s][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-s-left, 7px);
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  padding-right:var(--space-fields-single-line-container-s-button, 0px);
  height:var(--size-fields-s, 32px);
}
.container--YBp1H[data-size=s][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-s, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-s-top, 7px);
  padding-bottom:var(--space-fields-multi-line-container-s-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-s-left, 7px);
  padding-right:var(--space-fields-multi-line-container-s-right, 2px);
}
.container--YBp1H[data-size=m]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--YBp1H[data-size=m],
.container--YBp1H[data-size=m] input,
.container--YBp1H[data-size=m] select,
.container--YBp1H[data-size=m] textarea,
.container--YBp1H[data-size=m] span{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.container--YBp1H[data-size=m][data-variant=single-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--YBp1H[data-size=m][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-button, 0px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-right, 9px);
  height:var(--size-fields-m, 40px);
}
.container--YBp1H[data-size=m][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-m-left, 9px);
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  padding-right:var(--space-fields-single-line-container-m-button, 0px);
  height:var(--size-fields-m, 40px);
}
.container--YBp1H[data-size=m][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-m, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-m-top, 9px);
  padding-bottom:var(--space-fields-multi-line-container-m-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-m-left, 9px);
  padding-right:var(--space-fields-multi-line-container-m-right, 2px);
}
.container--YBp1H[data-size=l]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
}
.container--YBp1H[data-size=l],
.container--YBp1H[data-size=l] input,
.container--YBp1H[data-size=l] select,
.container--YBp1H[data-size=l] textarea,
.container--YBp1H[data-size=l] span{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}
.container--YBp1H[data-size=l][data-variant=single-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--YBp1H[data-size=l][data-variant=single-line-container-button-before]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-button, 0px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-right, 11px);
  height:var(--size-fields-l, 48px);
}
.container--YBp1H[data-size=l][data-variant=single-line-container-button-after]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-left:var(--space-fields-single-line-container-l-left, 11px);
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  padding-right:var(--space-fields-single-line-container-l-button, 0px);
  height:var(--size-fields-l, 48px);
}
.container--YBp1H[data-size=l][data-variant=multi-line-container]{
  border-radius:var(--radius-fields-l, 4px);
  border-width:var(--border-width-fields-single, 1px);
  padding-top:var(--space-fields-multi-line-container-l-top, 11px);
  padding-bottom:var(--space-fields-multi-line-container-l-bottom, 2px);
  padding-left:var(--space-fields-multi-line-container-l-left, 11px);
  padding-right:var(--space-fields-multi-line-container-l-right, 2px);
}
.container--YBp1H[data-selectable],
.container--YBp1H[data-selectable] input,
.container--YBp1H[data-selectable] select,
.container--YBp1H[data-selectable] textarea,
.container--YBp1H[data-selectable] span{
  cursor:pointer;
}
.container--YBp1H[data-readonly],
.container--YBp1H[data-readonly] input,
.container--YBp1H[data-readonly] select,
.container--YBp1H[data-readonly] textarea,
.container--YBp1H[data-readonly] span{
  cursor:default;
}
.container--YBp1H[data-readonly], .container--YBp1H[data-readonly]:hover{
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
}
.container--YBp1H[data-readonly]:not([data-disable-focus]):focus-within, .container--YBp1H[data-readonly]:not([data-disable-focus])[data-focused]{
  outline-width:var(--border-state-focus-m-border-width, 3px);
  outline-style:var(--border-state-focus-m-border-style, solid);
  outline-color:var(--border-state-focus-m-border-color, );
  background-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}
.container--YBp1H[data-disabled],
.container--YBp1H[data-disabled] input,
.container--YBp1H[data-disabled] select,
.container--YBp1H[data-disabled] textarea,
.container--YBp1H[data-disabled] span{
  cursor:not-allowed;
  background-color:var(--sys-neutral-background, #eeeff3);
}
.container--YBp1H[data-disabled], .container--YBp1H[data-disabled]:focus-within, .container--YBp1H[data-disabled][data-focused], .container--YBp1H[data-disabled]:hover{
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-decor-disabled, #e6e8ef);
  outline:none;
}

.prefix--ncx_b{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}

[data-size=s] .prefix--ncx_b, [data-size=s] .postfix--MbtXo{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-s-gap, 4px);
  align-items:center;
}

[data-size=m] .prefix--ncx_b, [data-size=m] .postfix--MbtXo{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-m-gap, 4px);
  align-items:center;
}

[data-size=l] .prefix--ncx_b, [data-size=l] .postfix--MbtXo{
  display:inline-flex;
  flex-shrink:0;
  gap:var(--space-fields-single-line-container-l-gap, 8px);
  align-items:center;
}`,""]),b.locals={container:"container--YBp1H",prefix:"prefix--ncx_b",postfix:"postfix--MbtXo"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/TextArea/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.textarea--nTwJJ{
  resize:none;
  box-sizing:border-box;
  width:100%;
  max-width:100%;
  margin:0;
  padding:0;
  color:var(--sys-neutral-text-main, #41424e);
  background-color:transparent;
  border:none;
  border-radius:0;
  outline:0;
}
.textarea--nTwJJ::-moz-placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.textarea--nTwJJ::placeholder{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.textarea--nTwJJ::-webkit-scrollbar{
  width:0;
  max-width:0;
}
.textarea--nTwJJ:-moz-read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.textarea--nTwJJ:read-only{
  color:var(--sys-neutral-text-support, #6d707f);
}
.textarea--nTwJJ[disabled]{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}`,""]),b.locals={textarea:"textarea--nTwJJ"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.prefix--IuLW9{
  color:var(--sys-neutral-text-support, #6d707f);
}
.prefix--IuLW9[data-disabled]{
  opacity:var(--opacity-a056, 0.56);
}

.postfix--HW3Jw{
  color:var(--sys-neutral-text-support, #6d707f);
}
.postfix--HW3Jw[data-disabled]{
  opacity:var(--opacity-a056, 0.56);
}`,""]),b.locals={prefix:"prefix--IuLW9",postfix:"postfix--HW3Jw"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+segmented-control@0.6.21_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/components/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.container--wCh6o{
  padding-top:var(--space-segmented-control-container-padding, 2px);
  padding-bottom:var(--space-segmented-control-container-padding, 2px);
  padding-left:var(--space-segmented-control-container-padding, 2px);
  padding-right:var(--space-segmented-control-container-padding, 2px);
  position:relative;
  overflow:hidden;
  display:inline-flex;
  flex-direction:row;
  justify-content:stretch;
  max-width:100%;
}
.container--wCh6o::before{
  content:" ";
  position:absolute;
  top:0;
  left:0;
  box-sizing:border-box;
  width:100%;
  height:100%;
  background-color:var(--sys-neutral-background, #eeeff3);
  border-color:var(--sys-neutral-background, #eeeff3);
  border-style:solid;
}
.container--wCh6o[data-outline]::before{
  border-color:var(--sys-neutral-decor-default, #dde0ea);
}
.container--wCh6o[data-width=full]{
  display:flex;
}
.container--wCh6o[data-size=xs]::before{
  border-width:var(--border-width-segmented-control-single, 1px);
  border-radius:var(--radius-segmented-control-container-xs, 4px);
}
.container--wCh6o[data-size=s]::before{
  border-width:var(--border-width-segmented-control-single, 1px);
  border-radius:var(--radius-segmented-control-container-s, 4px);
}
.container--wCh6o[data-size=m]::before{
  border-width:var(--border-width-segmented-control-single, 1px);
  border-radius:var(--radius-segmented-control-container-m, 4px);
}
.container--wCh6o[data-size=l]::before{
  border-width:var(--border-width-segmented-control-single, 1px);
  border-radius:var(--radius-segmented-control-container-l, 4px);
}

.segmentHolder--xXMtk{
  overflow:hidden;
  flex-grow:1;
  flex-shrink:1;
  justify-content:center;
  min-width:0;
}
.segmentHolder--xXMtk[data-outline]{
  flex-basis:0;
}

.selection--oGJ5h{
  position:absolute;
  overflow:hidden;
  box-sizing:border-box;
  background-color:var(--sys-neutral-background2-level, #ffffff);
  transition:left 0.15s ease-in-out, width 0.15s ease-in-out;
}
.selection--oGJ5h[data-size=xs]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-icon-only, 2px);
  padding-right:var(--space-segmented-control-segment-s-icon-only, 2px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.selection--oGJ5h[data-size=s]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-icon-only, 2px);
  padding-right:var(--space-segmented-control-segment-s-icon-only, 2px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.selection--oGJ5h[data-size=m]{
  border-radius:var(--radius-segmented-control-segment-m, 2px);
  padding-left:var(--space-segmented-control-segment-m-icon-only, 6px);
  padding-right:var(--space-segmented-control-segment-m-icon-only, 6px);
  gap:var(--space-segmented-control-segment-m-gap, 4px);
  height:var(--size-segmented-control-segment-m, 36px);
}
.selection--oGJ5h[data-size=l]{
  border-radius:var(--radius-segmented-control-segment-l, 2px);
  padding-left:var(--space-segmented-control-segment-l-icon-only, 10px);
  padding-right:var(--space-segmented-control-segment-l-icon-only, 10px);
  gap:var(--space-segmented-control-segment-l-gap, 4px);
  height:var(--size-segmented-control-segment-l, 44px);
}`,""]),b.locals={container:"container--wCh6o",segmentHolder:"segmentHolder--xXMtk",selection:"selection--oGJ5h"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+segmented-control@0.6.21_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/helperComponents/Segment/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.segment--jDvAC{
  cursor:pointer;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  color:var(--sys-neutral-text-support, #6d707f);
  background-color:transparent;
  border-width:0;
}
.segment--jDvAC:hover{
  color:var(--sys-neutral-text-main, #41424e);
}
.segment--jDvAC[data-disabled], .segment--jDvAC[data-disabled]:hover{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.segment--jDvAC[data-active]{
  color:var(--sys-neutral-text-main, #41424e);
}
.segment--jDvAC[data-active][data-disabled], .segment--jDvAC[data-active][data-disabled]:hover{
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.segment--jDvAC:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.segment--jDvAC[data-size=xs][data-layout=label-only]{
  border-radius:var(--radius-segmented-control-segment-xs, 2px);
  padding-left:var(--space-segmented-control-segment-xs-from-label, 8px);
  padding-right:var(--space-segmented-control-segment-xs-from-label, 8px);
  gap:var(--space-segmented-control-segment-xs-gap, 2px);
  height:var(--size-segmented-control-segment-xs, 20px);
}
.segment--jDvAC[data-size=xs][data-layout=icon-before]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-from-icon, 8px);
  padding-right:var(--space-segmented-control-segment-s-from-label, 16px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.segment--jDvAC[data-size=xs][data-layout=icon-only]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-icon-only, 2px);
  padding-right:var(--space-segmented-control-segment-s-icon-only, 2px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.segment--jDvAC[data-size=s][data-layout=label-only]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-from-label, 16px);
  padding-right:var(--space-segmented-control-segment-s-from-label, 16px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.segment--jDvAC[data-size=s][data-layout=icon-before]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-from-icon, 8px);
  padding-right:var(--space-segmented-control-segment-s-from-label, 16px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.segment--jDvAC[data-size=s][data-layout=icon-only]{
  border-radius:var(--radius-segmented-control-segment-s, 2px);
  padding-left:var(--space-segmented-control-segment-s-icon-only, 2px);
  padding-right:var(--space-segmented-control-segment-s-icon-only, 2px);
  gap:var(--space-segmented-control-segment-s-gap, 4px);
  height:var(--size-segmented-control-segment-s, 28px);
}
.segment--jDvAC[data-size=m][data-layout=label-only]{
  border-radius:var(--radius-segmented-control-segment-m, 2px);
  padding-left:var(--space-segmented-control-segment-m-from-label, 16px);
  padding-right:var(--space-segmented-control-segment-m-from-label, 16px);
  gap:var(--space-segmented-control-segment-m-gap, 4px);
  height:var(--size-segmented-control-segment-m, 36px);
}
.segment--jDvAC[data-size=m][data-layout=icon-before]{
  border-radius:var(--radius-segmented-control-segment-m, 2px);
  padding-left:var(--space-segmented-control-segment-m-from-icon, 8px);
  padding-right:var(--space-segmented-control-segment-m-from-label, 16px);
  gap:var(--space-segmented-control-segment-m-gap, 4px);
  height:var(--size-segmented-control-segment-m, 36px);
}
.segment--jDvAC[data-size=m][data-layout=icon-only]{
  border-radius:var(--radius-segmented-control-segment-m, 2px);
  padding-left:var(--space-segmented-control-segment-m-icon-only, 6px);
  padding-right:var(--space-segmented-control-segment-m-icon-only, 6px);
  gap:var(--space-segmented-control-segment-m-gap, 4px);
  height:var(--size-segmented-control-segment-m, 36px);
}
.segment--jDvAC[data-size=l][data-layout=label-only]{
  border-radius:var(--radius-segmented-control-segment-l, 2px);
  padding-left:var(--space-segmented-control-segment-l-from-label, 24px);
  padding-right:var(--space-segmented-control-segment-l-from-label, 24px);
  gap:var(--space-segmented-control-segment-l-gap, 4px);
  height:var(--size-segmented-control-segment-l, 44px);
}
.segment--jDvAC[data-size=l][data-layout=icon-before]{
  border-radius:var(--radius-segmented-control-segment-l, 2px);
  padding-left:var(--space-segmented-control-segment-l-from-icon, 16px);
  padding-right:var(--space-segmented-control-segment-l-from-label, 24px);
  gap:var(--space-segmented-control-segment-l-gap, 4px);
  height:var(--size-segmented-control-segment-l, 44px);
}
.segment--jDvAC[data-size=l][data-layout=icon-only]{
  border-radius:var(--radius-segmented-control-segment-l, 2px);
  padding-left:var(--space-segmented-control-segment-l-icon-only, 10px);
  padding-right:var(--space-segmented-control-segment-l-icon-only, 10px);
  gap:var(--space-segmented-control-segment-l-gap, 4px);
  height:var(--size-segmented-control-segment-l, 44px);
}

.icon--HM2Lz{
  display:flex;
  flex-shrink:0;
  align-items:center;
}

.label--RblfV[data-size=xs]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.label--RblfV[data-size=s]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.label--RblfV[data-size=m]{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.label--RblfV[data-size=l]{
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}`,""]),b.locals={segment:"segment--jDvAC",icon:"icon--HM2Lz",label:"label--RblfV"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.skeleton--GMZZL{
  box-sizing:border-box;
  width:100%;
  height:1em;
  background:var(--gradient-skeleton, linear-gradient(115deg, rgba(36, 36, 48, 0.0784313725) 40%, rgba(36, 36, 48, 0) 50%, rgba(36, 36, 48, 0.0784313725) 60%)) 0 0/200% 100% repeat fixed;
  animation:loading--Y104V 2s infinite linear;
}
@keyframes loading--Y104V{
  to{
    background-position:-200% 0;
  }
}`,""]),b.locals={skeleton:"skeleton--GMZZL",loading:"loading--Y104V"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/slider.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.osThemeSnack.rc-slider{
  touch-action:none;
  position:relative;
  z-index:0;
  box-sizing:border-box;
  width:100%;
  height:var(--size-slider-handle, 16px);
  padding:calc((var(--size-slider-handle, 16px) - var(--size-slider-track-line, 2px)) / 2) 0;
}

.osThemeSnack.rc-slider *{
  box-sizing:border-box;
}

.osThemeSnack.rc-slider .rc-slider-rail{
  height:var(--size-slider-track-line, 2px);
  border-radius:var(--dimension-theme-general-2px, 2px);
  position:absolute;
  width:100%;
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.osThemeSnack.rc-slider .rc-slider-track,
.osThemeSnack.rc-slider .rc-slider-tracks{
  height:var(--size-slider-track-line, 2px);
  border-radius:var(--dimension-theme-general-2px, 2px);
  position:absolute;
  display:block;
  background-color:var(--sys-primary-accent-default, #389f74);
}

.osThemeSnack.rc-slider .rc-slider-track-draggable{
  box-sizing:content-box;
  background-clip:content-box;
}

.osThemeSnack.rc-slider .rc-slider-handle{
  width:var(--size-slider-handle, 16px);
  height:var(--size-slider-handle, 16px);
  border-radius:var(--radius-slider-handle, 16px);
  touch-action:pan-x;
  cursor:grab;
  position:absolute;
  z-index:1;
  margin-top:calc(0px - (var(--size-slider-handle, 16px) - var(--size-slider-track-line, 2px)) / 2);
  opacity:1;
  background-color:var(--sys-primary-accent-default, #389f74);
  border:none;
  box-shadow:none;
}
.osThemeSnack.rc-slider .rc-slider-handle::after{
  content:"";
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  width:200%;
  height:100%;
}
.osThemeSnack.rc-slider .rc-slider-handle:hover{
  background-color:var(--sys-primary-accent-hovered, #37946e);
}
.osThemeSnack.rc-slider .rc-slider-handle:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  background-color:var(--sys-primary-accent-hovered, #37946e);
  outline-color:var(--sys-primary-accent-default, #389f74);
  outline-offset:var(--spacing-state-focus-offset, 2px);
}
.osThemeSnack.rc-slider .rc-slider-handle:active{
  cursor:grabbing;
  background-color:var(--sys-primary-accent-hovered, #37946e);
}

.osThemeSnack.rc-slider .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  background-color:var(--sys-primary-accent-hovered, #37946e);
  outline-color:var(--sys-primary-accent-default, #389f74);
  outline-offset:var(--spacing-state-focus-offset, 2px);
  box-shadow:none;
}

.osThemeSnack.rc-slider .rc-slider-mark{
  position:absolute;
  top:calc(var(--size-slider-handle, 16px) + var(--size-slider-scale-bar-step-height, 4px) + var(--space-slider-scale-bar-step-gap, 4px));
  left:0;
  width:100%;
}

.osThemeSnack.rc-slider .rc-slider-mark-text{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
  cursor:pointer;
  position:absolute;
  display:inline-block;
  color:var(--sys-neutral-text-support, #6d707f);
  text-align:center;
  vertical-align:middle;
}
.osThemeSnack.rc-slider .rc-slider-mark-text::before{
  height:var(--size-slider-scale-bar-step-height, 4px);
  border-radius:var(--radius-slider-scale-bar-step-line, 2px);
  content:"";
  position:absolute;
  top:calc(0px - (var(--size-slider-scale-bar-step-height, 4px) + var(--space-slider-scale-bar-step-gap, 4px)));
  left:50%;
  transform:translateX(-50%);
  width:var(--size-slider-track-line, 2px);
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}

.osThemeSnack.rc-slider .rc-slider-mark-text:nth-child(1){
  transform:none !important;
}
.osThemeSnack.rc-slider .rc-slider-mark-text:nth-child(1)::before{
  left:0;
  transform:none;
}

.osThemeSnack.rc-slider .rc-slider-mark-text:last-child{
  transform:translateX(-100%) !important;
}
.osThemeSnack.rc-slider .rc-slider-mark-text:last-child::before{
  right:0;
  left:auto;
  transform:none;
}

.osThemeSnack.rc-slider .rc-slider-mark-text-active{
  color:var(--sys-neutral-text-support, #6d707f);
}

.osThemeSnack.rc-slider .rc-slider-step{
  position:absolute;
  width:100%;
  height:calc(var(--size-slider-track-line, 2px) * 2);
  background:transparent;
}

.osThemeSnack.rc-slider.rc-slider-disabled{
  background-color:transparent;
}
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-track,
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-handle{
  background-color:var(--sys-neutral-text-disabled, #aaaebd);
}
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-mark-text,
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-dot,
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-track,
.osThemeSnack.rc-slider.rc-slider-disabled .rc-slider-handle{
  cursor:not-allowed !important;
}

.osThemeSnack.rc-slider .rc-slider-dot{
  display:none;
}

.osThemeSnack.rc-slider.withMarks{
  height:calc(var(--size-slider-handle, 16px) + var(--size-slider-scale-bar-step-height, 4px) + var(--space-slider-scale-bar-step-gap, 4px) + var(--sans-body-s-line-height, 16px));
}

.osThemeSnack.rc-slider.reverse .rc-slider-mark-text:nth-child(1){
  transform:none !important;
}
.osThemeSnack.rc-slider.reverse .rc-slider-mark-text:nth-child(1)::before{
  right:0;
  left:auto;
  transform:none;
}

.osThemeSnack.rc-slider.reverse .rc-slider-mark-text:last-child{
  transform:translateX(100%) !important;
}
.osThemeSnack.rc-slider.reverse .rc-slider-mark-text:last-child::before{
  left:0;
  transform:none;
}`,""]);const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.tipWrapper--cDUD7{
  display:block;
  text-align:center;
}`,""]),b.locals={tipWrapper:"tipWrapper--cDUD7"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.20_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.tag--HOmL5{
  display:inline-flex;
  align-items:center;
  box-sizing:border-box;
  max-width:100%;
}
.tag--HOmL5 .tagButton--drdCb{
  cursor:pointer;
  position:relative;
  box-sizing:border-box;
  margin:0;
  padding:0;
  background:none;
  border:none;
}
.tag--HOmL5 .tagButton--drdCb:focus{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
}
.tag--HOmL5 .tagButton--drdCb:active{
  outline:none;
}
.tag--HOmL5 .icon--rRMxP{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}
.tag--HOmL5[data-size=xs]{
  padding-left:var(--space-tag-xs-from-label, 8px);
  padding-right:var(--space-tag-xs-from-label, 8px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
}
.tag--HOmL5[data-size=xs][data-removable=true]{
  padding-left:var(--space-tag-xs-from-label, 8px);
  padding-right:var(--space-tag-xs-from-button, 0px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
  gap:var(--space-tag-xs-gap, 2px);
}
.tag--HOmL5[data-size=xs] .label--mktO3{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.tag--HOmL5[data-size=xs] .tagButton--drdCb{
  border-radius:var(--radius-tag-xs, 4px);
  height:var(--size-tag-xs, 24px);
  width:var(--size-tag-xs, 24px);
}
.tag--HOmL5[data-size=s]{
  padding-left:var(--space-tag-s-from-label, 8px);
  padding-right:var(--space-tag-s-from-label, 8px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 4px);
}
.tag--HOmL5[data-size=s][data-removable=true]{
  padding-left:var(--space-tag-s-from-label, 8px);
  padding-right:var(--space-tag-s-from-button, 0px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 4px);
  gap:var(--space-tag-s-gap, 2px);
}
.tag--HOmL5[data-size=s] .label--mktO3{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.tag--HOmL5[data-size=s] .tagButton--drdCb{
  border-radius:var(--radius-tag-s, 4px);
  height:var(--size-tag-s, 32px);
  width:var(--size-tag-s, 32px);
}
.tag--HOmL5[data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.tag--HOmL5[data-appearance=neutral] .label--mktO3{
  overflow:hidden;
  color:var(--sys-neutral-text-support, #6d707f);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--HOmL5[data-appearance=neutral] .tagButton--drdCb{
  color:var(--sys-neutral-text-light, #8b8e9b);
}
.tag--HOmL5[data-appearance=neutral] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=neutral] .tagButton--drdCb:hover, .tag--HOmL5[data-appearance=neutral] .tagButton--drdCb:active{
  color:var(--sys-neutral-text-main, #41424e);
}
.tag--HOmL5[data-appearance=neutral] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=neutral] .tagButton--drdCb:hover{
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.tag--HOmL5[data-appearance=neutral] .tagButton--drdCb:active{
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.tag--HOmL5[data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.tag--HOmL5[data-appearance=primary] .label--mktO3{
  overflow:hidden;
  color:var(--sys-primary-text-support, #358561);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--HOmL5[data-appearance=primary] .tagButton--drdCb{
  color:var(--sys-primary-text-light, #6aaf90);
}
.tag--HOmL5[data-appearance=primary] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=primary] .tagButton--drdCb:hover, .tag--HOmL5[data-appearance=primary] .tagButton--drdCb:active{
  color:var(--sys-primary-text-main, #1b5840);
}
.tag--HOmL5[data-appearance=primary] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=primary] .tagButton--drdCb:hover{
  background-color:var(--sys-primary-decor-hovered, #b3deca);
}
.tag--HOmL5[data-appearance=primary] .tagButton--drdCb:active{
  background-color:var(--sys-primary-decor-activated, #99d7ba);
}
.tag--HOmL5[data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.tag--HOmL5[data-appearance=red] .label--mktO3{
  overflow:hidden;
  color:var(--sys-red-text-support, #ae514c);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--HOmL5[data-appearance=red] .tagButton--drdCb{
  color:var(--sys-red-text-light, #e7756a);
}
.tag--HOmL5[data-appearance=red] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=red] .tagButton--drdCb:hover, .tag--HOmL5[data-appearance=red] .tagButton--drdCb:active{
  color:var(--sys-red-text-main, #7a2d2d);
}
.tag--HOmL5[data-appearance=red] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=red] .tagButton--drdCb:hover{
  background-color:var(--sys-red-decor-hovered, #fac1b3);
}
.tag--HOmL5[data-appearance=red] .tagButton--drdCb:active{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.tag--HOmL5[data-appearance=orange]{
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.tag--HOmL5[data-appearance=orange] .label--mktO3{
  overflow:hidden;
  color:var(--sys-orange-text-support, #bb733e);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--HOmL5[data-appearance=orange] .tagButton--drdCb{
  color:var(--sys-orange-text-light, #e78940);
}
.tag--HOmL5[data-appearance=orange] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=orange] .tagButton--drdCb:hover, .tag--HOmL5[data-appearance=orange] .tagButton--drdCb:active{
  color:var(--sys-orange-text-main, #884c23);
}
.tag--HOmL5[data-appearance=orange] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=orange] .tagButton--drdCb:hover{
  background-color:var(--sys-orange-decor-hovered, #f8c699);
}
.tag--HOmL5[data-appearance=orange] .tagButton--drdCb:active{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.tag--HOmL5[data-appearance=yellow]{
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.tag--HOmL5[data-appearance=yellow] .label--mktO3{
  overflow:hidden;
  color:var(--sys-yellow-text-support, #b78c32);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--HOmL5[data-appearance=yellow] .tagButton--drdCb{
  color:var(--sys-yellow-text-light, #d3a736);
}
.tag--HOmL5[data-appearance=yellow] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=yellow] .tagButton--drdCb:hover, .tag--HOmL5[data-appearance=yellow] .tagButton--drdCb:active{
  color:var(--sys-yellow-text-main, #815f19);
}
.tag--HOmL5[data-appearance=yellow] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=yellow] .tagButton--drdCb:hover{
  background-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.tag--HOmL5[data-appearance=yellow] .tagButton--drdCb:active{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.tag--HOmL5[data-appearance=green]{
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.tag--HOmL5[data-appearance=green] .label--mktO3{
  overflow:hidden;
  color:var(--sys-green-text-support, #55915a);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--HOmL5[data-appearance=green] .tagButton--drdCb{
  color:var(--sys-green-text-light, #69b56f);
}
.tag--HOmL5[data-appearance=green] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=green] .tagButton--drdCb:hover, .tag--HOmL5[data-appearance=green] .tagButton--drdCb:active{
  color:var(--sys-green-text-main, #3d6035);
}
.tag--HOmL5[data-appearance=green] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=green] .tagButton--drdCb:hover{
  background-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.tag--HOmL5[data-appearance=green] .tagButton--drdCb:active{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.tag--HOmL5[data-appearance=blue]{
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.tag--HOmL5[data-appearance=blue] .label--mktO3{
  overflow:hidden;
  color:var(--sys-blue-text-support, #4877b0);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--HOmL5[data-appearance=blue] .tagButton--drdCb{
  color:var(--sys-blue-text-light, #749eda);
}
.tag--HOmL5[data-appearance=blue] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=blue] .tagButton--drdCb:hover, .tag--HOmL5[data-appearance=blue] .tagButton--drdCb:active{
  color:var(--sys-blue-text-main, #2b537e);
}
.tag--HOmL5[data-appearance=blue] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=blue] .tagButton--drdCb:hover{
  background-color:var(--sys-blue-decor-hovered, #c5d9f6);
}
.tag--HOmL5[data-appearance=blue] .tagButton--drdCb:active{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.tag--HOmL5[data-appearance=violet]{
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.tag--HOmL5[data-appearance=violet] .label--mktO3{
  overflow:hidden;
  color:var(--sys-violet-text-support, #8c639b);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--HOmL5[data-appearance=violet] .tagButton--drdCb{
  color:var(--sys-violet-text-light, #b68bd5);
}
.tag--HOmL5[data-appearance=violet] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=violet] .tagButton--drdCb:hover, .tag--HOmL5[data-appearance=violet] .tagButton--drdCb:active{
  color:var(--sys-violet-text-main, #59446a);
}
.tag--HOmL5[data-appearance=violet] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=violet] .tagButton--drdCb:hover{
  background-color:var(--sys-violet-decor-hovered, #e1d0f7);
}
.tag--HOmL5[data-appearance=violet] .tagButton--drdCb:active{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.tag--HOmL5[data-appearance=pink]{
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.tag--HOmL5[data-appearance=pink] .label--mktO3{
  overflow:hidden;
  color:var(--sys-pink-text-support, #ae5e80);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--HOmL5[data-appearance=pink] .tagButton--drdCb{
  color:var(--sys-pink-text-light, #db85a2);
}
.tag--HOmL5[data-appearance=pink] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=pink] .tagButton--drdCb:hover, .tag--HOmL5[data-appearance=pink] .tagButton--drdCb:active{
  color:var(--sys-pink-text-main, #754158);
}
.tag--HOmL5[data-appearance=pink] .tagButton--drdCb:focus, .tag--HOmL5[data-appearance=pink] .tagButton--drdCb:hover{
  background-color:var(--sys-pink-decor-hovered, #f5c9d6);
}
.tag--HOmL5[data-appearance=pink] .tagButton--drdCb:active{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}`,""]),b.locals={tag:"tag--HOmL5",tagButton:"tagButton--drdCb",icon:"icon--rRMxP",label:"label--mktO3"};const S=b},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.20_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"(ee,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),x=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),C=e.n(d),b=C()(x());b.push([ee.id,`.tag--ucsDS{
  display:inline-flex;
  align-items:center;
  box-sizing:border-box;
  max-width:100%;
  text-decoration:none;
}
.tag--ucsDS:focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.tag--ucsDS:active{
  outline:none;
}
.tag--ucsDS[data-size=xs]{
  padding-left:var(--space-tag-xs-from-label, 8px);
  padding-right:var(--space-tag-xs-from-label, 8px);
  height:var(--size-tag-xs, 24px);
  border-radius:var(--radius-tag-xs, 4px);
}
.tag--ucsDS[data-size=xs] .label--ngl2A{
  font-family:var(--sans-label-s-font-family, SB Sans Interface);
  font-weight:var(--sans-label-s-font-weight, Semibold);
  line-height:var(--sans-label-s-line-height, 14px);
  font-size:var(--sans-label-s-font-size, 11px);
  letter-spacing:var(--sans-label-s-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-s-paragraph-spacing, 6.05px);
}
.tag--ucsDS[data-size=s]{
  padding-left:var(--space-tag-s-from-label, 8px);
  padding-right:var(--space-tag-s-from-label, 8px);
  height:var(--size-tag-s, 32px);
  border-radius:var(--radius-tag-s, 4px);
}
.tag--ucsDS[data-size=s] .label--ngl2A{
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.tag--ucsDS[data-appearance=neutral]{
  background-color:var(--sys-neutral-decor-default, #dde0ea);
}
.tag--ucsDS[data-appearance=neutral] .label--ngl2A{
  overflow:hidden;
  color:var(--sys-neutral-text-support, #6d707f);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ucsDS[data-appearance=neutral]:focus-visible, .tag--ucsDS[data-appearance=neutral]:hover{
  background-color:var(--sys-neutral-decor-hovered, #cfd2dc);
}
.tag--ucsDS[data-appearance=neutral]:active{
  background-color:var(--sys-neutral-decor-activated, #b6bac7);
}
.tag--ucsDS[data-appearance=primary]{
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.tag--ucsDS[data-appearance=primary] .label--ngl2A{
  overflow:hidden;
  color:var(--sys-primary-text-support, #358561);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ucsDS[data-appearance=primary]:focus-visible, .tag--ucsDS[data-appearance=primary]:hover{
  background-color:var(--sys-primary-decor-hovered, #b3deca);
}
.tag--ucsDS[data-appearance=primary]:active{
  background-color:var(--sys-primary-decor-activated, #99d7ba);
}
.tag--ucsDS[data-appearance=red]{
  background-color:var(--sys-red-decor-default, #fdd6cd);
}
.tag--ucsDS[data-appearance=red] .label--ngl2A{
  overflow:hidden;
  color:var(--sys-red-text-support, #ae514c);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ucsDS[data-appearance=red]:focus-visible, .tag--ucsDS[data-appearance=red]:hover{
  background-color:var(--sys-red-decor-hovered, #fac1b3);
}
.tag--ucsDS[data-appearance=red]:active{
  background-color:var(--sys-red-decor-activated, #fbab99);
}
.tag--ucsDS[data-appearance=orange]{
  background-color:var(--sys-orange-decor-default, #fed8b8);
}
.tag--ucsDS[data-appearance=orange] .label--ngl2A{
  overflow:hidden;
  color:var(--sys-orange-text-support, #bb733e);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ucsDS[data-appearance=orange]:focus-visible, .tag--ucsDS[data-appearance=orange]:hover{
  background-color:var(--sys-orange-decor-hovered, #f8c699);
}
.tag--ucsDS[data-appearance=orange]:active{
  background-color:var(--sys-orange-decor-activated, #f5b27b);
}
.tag--ucsDS[data-appearance=yellow]{
  background-color:var(--sys-yellow-decor-default, #f0dfb1);
}
.tag--ucsDS[data-appearance=yellow] .label--ngl2A{
  overflow:hidden;
  color:var(--sys-yellow-text-support, #b78c32);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ucsDS[data-appearance=yellow]:focus-visible, .tag--ucsDS[data-appearance=yellow]:hover{
  background-color:var(--sys-yellow-decor-hovered, #ead49a);
}
.tag--ucsDS[data-appearance=yellow]:active{
  background-color:var(--sys-yellow-decor-activated, #e6c878);
}
.tag--ucsDS[data-appearance=green]{
  background-color:var(--sys-green-decor-default, #d2ead0);
}
.tag--ucsDS[data-appearance=green] .label--ngl2A{
  overflow:hidden;
  color:var(--sys-green-text-support, #55915a);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ucsDS[data-appearance=green]:focus-visible, .tag--ucsDS[data-appearance=green]:hover{
  background-color:var(--sys-green-decor-hovered, #c0e1ba);
}
.tag--ucsDS[data-appearance=green]:active{
  background-color:var(--sys-green-decor-activated, #a8d1a2);
}
.tag--ucsDS[data-appearance=blue]{
  background-color:var(--sys-blue-decor-default, #d6e2f4);
}
.tag--ucsDS[data-appearance=blue] .label--ngl2A{
  overflow:hidden;
  color:var(--sys-blue-text-support, #4877b0);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ucsDS[data-appearance=blue]:focus-visible, .tag--ucsDS[data-appearance=blue]:hover{
  background-color:var(--sys-blue-decor-hovered, #c5d9f6);
}
.tag--ucsDS[data-appearance=blue]:active{
  background-color:var(--sys-blue-decor-activated, #aac4ea);
}
.tag--ucsDS[data-appearance=violet]{
  background-color:var(--sys-violet-decor-default, #e6dcf3);
}
.tag--ucsDS[data-appearance=violet] .label--ngl2A{
  overflow:hidden;
  color:var(--sys-violet-text-support, #8c639b);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ucsDS[data-appearance=violet]:focus-visible, .tag--ucsDS[data-appearance=violet]:hover{
  background-color:var(--sys-violet-decor-hovered, #e1d0f7);
}
.tag--ucsDS[data-appearance=violet]:active{
  background-color:var(--sys-violet-decor-activated, #ceb7e7);
}
.tag--ucsDS[data-appearance=pink]{
  background-color:var(--sys-pink-decor-default, #f5d9e1);
}
.tag--ucsDS[data-appearance=pink] .label--ngl2A{
  overflow:hidden;
  color:var(--sys-pink-text-support, #ae5e80);
  text-overflow:ellipsis;
  white-space:nowrap;
}
.tag--ucsDS[data-appearance=pink]:focus-visible, .tag--ucsDS[data-appearance=pink]:hover{
  background-color:var(--sys-pink-decor-hovered, #f5c9d6);
}
.tag--ucsDS[data-appearance=pink]:active{
  background-color:var(--sys-pink-decor-activated, #e8b1c1);
}`,""]),b.locals={tag:"tag--ucsDS",label:"label--ngl2A"};const S=b},"./node_modules/.pnpm/decimal.js@10.6.0/node_modules/decimal.js/decimal.mjs"(ee,L,e){e.d(L,{A:()=>Wt});/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var l=9e15,x=1e9,d="0123456789abcdef",C="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",b="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",S={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-l,maxE:l,crypto:!1},G,Z,O=!0,q="[DecimalError] ",T=q+"Invalid argument: ",N=q+"Precision limit exceeded",oe=q+"crypto unavailable",de="[object Decimal]",F=Math.floor,X=Math.pow,He=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,Me=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,Te=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Ke=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,ve=1e7,A=7,Pe=9007199254740991,J=C.length-1,R=b.length-1,h={toStringTag:de};h.absoluteValue=h.abs=function(){var t=new this.constructor(this);return t.s<0&&(t.s=1),D(t)},h.ceil=function(){return D(new this.constructor(this),this.e+1,2)},h.clampedTo=h.clamp=function(t,s){var n,o=this,r=o.constructor;if(t=new r(t),s=new r(s),!t.s||!s.s)return new r(NaN);if(t.gt(s))throw Error(T+s);return n=o.cmp(t),n<0?t:o.cmp(s)>0?s:new r(o)},h.comparedTo=h.cmp=function(t){var s,n,o,r,i=this,p=i.d,f=(t=new i.constructor(t)).d,k=i.s,g=t.s;if(!p||!f)return!k||!g?NaN:k!==g?k:p===f?0:!p^k<0?1:-1;if(!p[0]||!f[0])return p[0]?k:f[0]?-g:0;if(k!==g)return k;if(i.e!==t.e)return i.e>t.e^k<0?1:-1;for(o=p.length,r=f.length,s=0,n=o<r?o:r;s<n;++s)if(p[s]!==f[s])return p[s]>f[s]^k<0?1:-1;return o===r?0:o>r^k<0?1:-1},h.cosine=h.cos=function(){var t,s,n=this,o=n.constructor;return n.d?n.d[0]?(t=o.precision,s=o.rounding,o.precision=t+Math.max(n.e,n.sd())+A,o.rounding=1,n=Se(o,Ee(o,n)),o.precision=t,o.rounding=s,D(Z==2||Z==3?n.neg():n,t,s,!0)):new o(1):new o(NaN)},h.cubeRoot=h.cbrt=function(){var t,s,n,o,r,i,p,f,k,g,c=this,u=c.constructor;if(!c.isFinite()||c.isZero())return new u(c);for(O=!1,i=c.s*X(c.s*c,1/3),!i||Math.abs(i)==1/0?(n=M(c.d),t=c.e,(i=(t-n.length+1)%3)&&(n+=i==1||i==-2?"0":"00"),i=X(n,1/3),t=F((t+1)/3)-(t%3==(t<0?-1:2)),i==1/0?n="5e"+t:(n=i.toExponential(),n=n.slice(0,n.indexOf("e")+1)+t),o=new u(n),o.s=c.s):o=new u(i.toString()),p=(t=u.precision)+3;;)if(f=o,k=f.times(f).times(f),g=k.plus(c),o=z(g.plus(c).times(f),g.plus(k),p+2,1),M(f.d).slice(0,p)===(n=M(o.d)).slice(0,p))if(n=n.slice(p-3,p+1),n=="9999"||!r&&n=="4999"){if(!r&&(D(f,t+1,0),f.times(f).times(f).eq(c))){o=f;break}p+=4,r=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(D(o,t+1,1),s=!o.times(o).times(o).eq(c));break}return O=!0,D(o,t,u.rounding,s)},h.decimalPlaces=h.dp=function(){var t,s=this.d,n=NaN;if(s){if(t=s.length-1,n=(t-F(this.e/A))*A,t=s[t],t)for(;t%10==0;t/=10)n--;n<0&&(n=0)}return n},h.dividedBy=h.div=function(t){return z(this,new this.constructor(t))},h.dividedToIntegerBy=h.divToInt=function(t){var s=this,n=s.constructor;return D(z(s,new n(t),0,1,1),n.precision,n.rounding)},h.equals=h.eq=function(t){return this.cmp(t)===0},h.floor=function(){return D(new this.constructor(this),this.e+1,3)},h.greaterThan=h.gt=function(t){return this.cmp(t)>0},h.greaterThanOrEqualTo=h.gte=function(t){var s=this.cmp(t);return s==1||s===0},h.hyperbolicCosine=h.cosh=function(){var t,s,n,o,r,i=this,p=i.constructor,f=new p(1);if(!i.isFinite())return new p(i.s?1/0:NaN);if(i.isZero())return f;n=p.precision,o=p.rounding,p.precision=n+Math.max(i.e,i.sd())+4,p.rounding=1,r=i.d.length,r<32?(t=Math.ceil(r/3),s=(1/Ae(4,t)).toString()):(t=16,s="2.3283064365386962890625e-10"),i=ge(p,1,i.times(s),new p(1),!0);for(var k,g=t,c=new p(8);g--;)k=i.times(i),i=f.minus(k.times(c.minus(k.times(c))));return D(i,p.precision=n,p.rounding=o,!0)},h.hyperbolicSine=h.sinh=function(){var t,s,n,o,r=this,i=r.constructor;if(!r.isFinite()||r.isZero())return new i(r);if(s=i.precision,n=i.rounding,i.precision=s+Math.max(r.e,r.sd())+4,i.rounding=1,o=r.d.length,o<3)r=ge(i,2,r,r,!0);else{t=1.4*Math.sqrt(o),t=t>16?16:t|0,r=r.times(1/Ae(5,t)),r=ge(i,2,r,r,!0);for(var p,f=new i(5),k=new i(16),g=new i(20);t--;)p=r.times(r),r=r.times(f.plus(p.times(k.times(p).plus(g))))}return i.precision=s,i.rounding=n,D(r,s,n,!0)},h.hyperbolicTangent=h.tanh=function(){var t,s,n=this,o=n.constructor;return n.isFinite()?n.isZero()?new o(n):(t=o.precision,s=o.rounding,o.precision=t+7,o.rounding=1,z(n.sinh(),n.cosh(),o.precision=t,o.rounding=s)):new o(n.s)},h.inverseCosine=h.acos=function(){var t=this,s=t.constructor,n=t.abs().cmp(1),o=s.precision,r=s.rounding;return n!==-1?n===0?t.isNeg()?be(s,o,r):new s(0):new s(NaN):t.isZero()?be(s,o+4,r).times(.5):(s.precision=o+6,s.rounding=1,t=new s(1).minus(t).div(t.plus(1)).sqrt().atan(),s.precision=o,s.rounding=r,t.times(2))},h.inverseHyperbolicCosine=h.acosh=function(){var t,s,n=this,o=n.constructor;return n.lte(1)?new o(n.eq(1)?0:NaN):n.isFinite()?(t=o.precision,s=o.rounding,o.precision=t+Math.max(Math.abs(n.e),n.sd())+4,o.rounding=1,O=!1,n=n.times(n).minus(1).sqrt().plus(n),O=!0,o.precision=t,o.rounding=s,n.ln()):new o(n)},h.inverseHyperbolicSine=h.asinh=function(){var t,s,n=this,o=n.constructor;return!n.isFinite()||n.isZero()?new o(n):(t=o.precision,s=o.rounding,o.precision=t+2*Math.max(Math.abs(n.e),n.sd())+6,o.rounding=1,O=!1,n=n.times(n).plus(1).sqrt().plus(n),O=!0,o.precision=t,o.rounding=s,n.ln())},h.inverseHyperbolicTangent=h.atanh=function(){var t,s,n,o,r=this,i=r.constructor;return r.isFinite()?r.e>=0?new i(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(t=i.precision,s=i.rounding,o=r.sd(),Math.max(o,t)<2*-r.e-1?D(new i(r),t,s,!0):(i.precision=n=o-r.e,r=z(r.plus(1),new i(1).minus(r),n+t,1),i.precision=t+4,i.rounding=1,r=r.ln(),i.precision=t,i.rounding=s,r.times(.5))):new i(NaN)},h.inverseSine=h.asin=function(){var t,s,n,o,r=this,i=r.constructor;return r.isZero()?new i(r):(s=r.abs().cmp(1),n=i.precision,o=i.rounding,s!==-1?s===0?(t=be(i,n+4,o).times(.5),t.s=r.s,t):new i(NaN):(i.precision=n+6,i.rounding=1,r=r.div(new i(1).minus(r.times(r)).sqrt().plus(1)).atan(),i.precision=n,i.rounding=o,r.times(2)))},h.inverseTangent=h.atan=function(){var t,s,n,o,r,i,p,f,k,g=this,c=g.constructor,u=c.precision,m=c.rounding;if(g.isFinite()){if(g.isZero())return new c(g);if(g.abs().eq(1)&&u+4<=R)return p=be(c,u+4,m).times(.25),p.s=g.s,p}else{if(!g.s)return new c(NaN);if(u+4<=R)return p=be(c,u+4,m).times(.5),p.s=g.s,p}for(c.precision=f=u+10,c.rounding=1,n=Math.min(28,f/A+2|0),t=n;t;--t)g=g.div(g.times(g).plus(1).sqrt().plus(1));for(O=!1,s=Math.ceil(f/A),o=1,k=g.times(g),p=new c(g),r=g;t!==-1;)if(r=r.times(k),i=p.minus(r.div(o+=2)),r=r.times(k),p=i.plus(r.div(o+=2)),p.d[s]!==void 0)for(t=s;p.d[t]===i.d[t]&&t--;);return n&&(p=p.times(2<<n-1)),O=!0,D(p,c.precision=u,c.rounding=m,!0)},h.isFinite=function(){return!!this.d},h.isInteger=h.isInt=function(){return!!this.d&&F(this.e/A)>this.d.length-2},h.isNaN=function(){return!this.s},h.isNegative=h.isNeg=function(){return this.s<0},h.isPositive=h.isPos=function(){return this.s>0},h.isZero=function(){return!!this.d&&this.d[0]===0},h.lessThan=h.lt=function(t){return this.cmp(t)<0},h.lessThanOrEqualTo=h.lte=function(t){return this.cmp(t)<1},h.logarithm=h.log=function(t){var s,n,o,r,i,p,f,k,g=this,c=g.constructor,u=c.precision,m=c.rounding,v=5;if(t==null)t=new c(10),s=!0;else{if(t=new c(t),n=t.d,t.s<0||!n||!n[0]||t.eq(1))return new c(NaN);s=t.eq(10)}if(n=g.d,g.s<0||!n||!n[0]||g.eq(1))return new c(n&&!n[0]?-1/0:g.s!=1?NaN:n?0:1/0);if(s)if(n.length>1)i=!0;else{for(r=n[0];r%10===0;)r/=10;i=r!==1}if(O=!1,f=u+v,p=B(g,f),o=s?ce(c,f+10):B(t,f),k=z(p,o,f,1),je(k.d,r=u,m))do if(f+=10,p=B(g,f),o=s?ce(c,f+10):B(t,f),k=z(p,o,f,1),!i){+M(k.d).slice(r+1,r+15)+1==1e14&&(k=D(k,u+1,0));break}while(je(k.d,r+=10,m));return O=!0,D(k,u,m)},h.minus=h.sub=function(t){var s,n,o,r,i,p,f,k,g,c,u,m,v=this,j=v.constructor;if(t=new j(t),!v.d||!t.d)return!v.s||!t.s?t=new j(NaN):v.d?t.s=-t.s:t=new j(t.d||v.s!==t.s?v:NaN),t;if(v.s!=t.s)return t.s=-t.s,v.plus(t);if(g=v.d,m=t.d,f=j.precision,k=j.rounding,!g[0]||!m[0]){if(m[0])t.s=-t.s;else if(g[0])t=new j(v);else return new j(k===3?-0:0);return O?D(t,f,k):t}if(n=F(t.e/A),c=F(v.e/A),g=g.slice(),i=c-n,i){for(u=i<0,u?(s=g,i=-i,p=m.length):(s=m,n=c,p=g.length),o=Math.max(Math.ceil(f/A),p)+2,i>o&&(i=o,s.length=1),s.reverse(),o=i;o--;)s.push(0);s.reverse()}else{for(o=g.length,p=m.length,u=o<p,u&&(p=o),o=0;o<p;o++)if(g[o]!=m[o]){u=g[o]<m[o];break}i=0}for(u&&(s=g,g=m,m=s,t.s=-t.s),p=g.length,o=m.length-p;o>0;--o)g[p++]=0;for(o=m.length;o>i;){if(g[--o]<m[o]){for(r=o;r&&g[--r]===0;)g[r]=ve-1;--g[r],g[o]+=ve}g[o]-=m[o]}for(;g[--p]===0;)g.pop();for(;g[0]===0;g.shift())--n;return g[0]?(t.d=g,t.e=se(g,n),O?D(t,f,k):t):new j(k===3?-0:0)},h.modulo=h.mod=function(t){var s,n=this,o=n.constructor;return t=new o(t),!n.d||!t.s||t.d&&!t.d[0]?new o(NaN):!t.d||n.d&&!n.d[0]?D(new o(n),o.precision,o.rounding):(O=!1,o.modulo==9?(s=z(n,t.abs(),0,3,1),s.s*=t.s):s=z(n,t,0,o.modulo,1),s=s.times(t),O=!0,n.minus(s))},h.naturalExponential=h.exp=function(){return P(this)},h.naturalLogarithm=h.ln=function(){return B(this)},h.negated=h.neg=function(){var t=new this.constructor(this);return t.s=-t.s,D(t)},h.plus=h.add=function(t){var s,n,o,r,i,p,f,k,g,c,u=this,m=u.constructor;if(t=new m(t),!u.d||!t.d)return!u.s||!t.s?t=new m(NaN):u.d||(t=new m(t.d||u.s===t.s?u:NaN)),t;if(u.s!=t.s)return t.s=-t.s,u.minus(t);if(g=u.d,c=t.d,f=m.precision,k=m.rounding,!g[0]||!c[0])return c[0]||(t=new m(u)),O?D(t,f,k):t;if(i=F(u.e/A),o=F(t.e/A),g=g.slice(),r=i-o,r){for(r<0?(n=g,r=-r,p=c.length):(n=c,o=i,p=g.length),i=Math.ceil(f/A),p=i>p?i+1:p+1,r>p&&(r=p,n.length=1),n.reverse();r--;)n.push(0);n.reverse()}for(p=g.length,r=c.length,p-r<0&&(r=p,n=c,c=g,g=n),s=0;r;)s=(g[--r]=g[r]+c[r]+s)/ve|0,g[r]%=ve;for(s&&(g.unshift(s),++o),p=g.length;g[--p]==0;)g.pop();return t.d=g,t.e=se(g,o),O?D(t,f,k):t},h.precision=h.sd=function(t){var s,n=this;if(t!==void 0&&t!==!!t&&t!==1&&t!==0)throw Error(T+t);return n.d?(s=ze(n.d),t&&n.e+1>s&&(s=n.e+1)):s=NaN,s},h.round=function(){var t=this,s=t.constructor;return D(new s(t),t.e+1,s.rounding)},h.sine=h.sin=function(){var t,s,n=this,o=n.constructor;return n.isFinite()?n.isZero()?new o(n):(t=o.precision,s=o.rounding,o.precision=t+Math.max(n.e,n.sd())+A,o.rounding=1,n=$(o,Ee(o,n)),o.precision=t,o.rounding=s,D(Z>2?n.neg():n,t,s,!0)):new o(NaN)},h.squareRoot=h.sqrt=function(){var t,s,n,o,r,i,p=this,f=p.d,k=p.e,g=p.s,c=p.constructor;if(g!==1||!f||!f[0])return new c(!g||g<0&&(!f||f[0])?NaN:f?p:1/0);for(O=!1,g=Math.sqrt(+p),g==0||g==1/0?(s=M(f),(s.length+k)%2==0&&(s+="0"),g=Math.sqrt(s),k=F((k+1)/2)-(k<0||k%2),g==1/0?s="5e"+k:(s=g.toExponential(),s=s.slice(0,s.indexOf("e")+1)+k),o=new c(s)):o=new c(g.toString()),n=(k=c.precision)+3;;)if(i=o,o=i.plus(z(p,i,n+2,1)).times(.5),M(i.d).slice(0,n)===(s=M(o.d)).slice(0,n))if(s=s.slice(n-3,n+1),s=="9999"||!r&&s=="4999"){if(!r&&(D(i,k+1,0),i.times(i).eq(p))){o=i;break}n+=4,r=1}else{(!+s||!+s.slice(1)&&s.charAt(0)=="5")&&(D(o,k+1,1),t=!o.times(o).eq(p));break}return O=!0,D(o,k,c.rounding,t)},h.tangent=h.tan=function(){var t,s,n=this,o=n.constructor;return n.isFinite()?n.isZero()?new o(n):(t=o.precision,s=o.rounding,o.precision=t+10,o.rounding=1,n=n.sin(),n.s=1,n=z(n,new o(1).minus(n.times(n)).sqrt(),t+10,0),o.precision=t,o.rounding=s,D(Z==2||Z==4?n.neg():n,t,s,!0)):new o(NaN)},h.times=h.mul=function(t){var s,n,o,r,i,p,f,k,g,c=this,u=c.constructor,m=c.d,v=(t=new u(t)).d;if(t.s*=c.s,!m||!m[0]||!v||!v[0])return new u(!t.s||m&&!m[0]&&!v||v&&!v[0]&&!m?NaN:!m||!v?t.s/0:t.s*0);for(n=F(c.e/A)+F(t.e/A),k=m.length,g=v.length,k<g&&(i=m,m=v,v=i,p=k,k=g,g=p),i=[],p=k+g,o=p;o--;)i.push(0);for(o=g;--o>=0;){for(s=0,r=k+o;r>o;)f=i[r]+v[o]*m[r-o-1]+s,i[r--]=f%ve|0,s=f/ve|0;i[r]=(i[r]+s)%ve|0}for(;!i[--p];)i.pop();return s?++n:i.shift(),t.d=i,t.e=se(i,n),O?D(t,u.precision,u.rounding):t},h.toBinary=function(t,s){return Le(this,2,t,s)},h.toDecimalPlaces=h.toDP=function(t,s){var n=this,o=n.constructor;return n=new o(n),t===void 0?n:(H(t,0,x),s===void 0?s=o.rounding:H(s,0,8),D(n,t+n.e+1,s))},h.toExponential=function(t,s){var n,o=this,r=o.constructor;return t===void 0?n=me(o,!0):(H(t,0,x),s===void 0?s=r.rounding:H(s,0,8),o=D(new r(o),t+1,s),n=me(o,!0,t+1)),o.isNeg()&&!o.isZero()?"-"+n:n},h.toFixed=function(t,s){var n,o,r=this,i=r.constructor;return t===void 0?n=me(r):(H(t,0,x),s===void 0?s=i.rounding:H(s,0,8),o=D(new i(r),t+r.e+1,s),n=me(o,!1,t+o.e+1)),r.isNeg()&&!r.isZero()?"-"+n:n},h.toFraction=function(t){var s,n,o,r,i,p,f,k,g,c,u,m,v=this,j=v.d,E=v.constructor;if(!j)return new E(v);if(g=n=new E(1),o=k=new E(0),s=new E(o),i=s.e=ze(j)-v.e-1,p=i%A,s.d[0]=X(10,p<0?A+p:p),t==null)t=i>0?s:g;else{if(f=new E(t),!f.isInt()||f.lt(g))throw Error(T+f);t=f.gt(s)?i>0?s:g:f}for(O=!1,f=new E(M(j)),c=E.precision,E.precision=i=j.length*A*2;u=z(f,s,0,1,1),r=n.plus(u.times(o)),r.cmp(t)!=1;)n=o,o=r,r=g,g=k.plus(u.times(r)),k=r,r=s,s=f.minus(u.times(r)),f=r;return r=z(t.minus(n),o,0,1,1),k=k.plus(r.times(g)),n=n.plus(r.times(o)),k.s=g.s=v.s,m=z(g,o,i,1).minus(v).abs().cmp(z(k,n,i,1).minus(v).abs())<1?[g,o]:[k,n],E.precision=c,O=!0,m},h.toHexadecimal=h.toHex=function(t,s){return Le(this,16,t,s)},h.toNearest=function(t,s){var n=this,o=n.constructor;if(n=new o(n),t==null){if(!n.d)return n;t=new o(1),s=o.rounding}else{if(t=new o(t),s===void 0?s=o.rounding:H(s,0,8),!n.d)return t.s?n:t;if(!t.d)return t.s&&(t.s=n.s),t}return t.d[0]?(O=!1,n=z(n,t,0,s,1).times(t),O=!0,D(n)):(t.s=n.s,n=t),n},h.toNumber=function(){return+this},h.toOctal=function(t,s){return Le(this,8,t,s)},h.toPower=h.pow=function(t){var s,n,o,r,i,p,f=this,k=f.constructor,g=+(t=new k(t));if(!f.d||!t.d||!f.d[0]||!t.d[0])return new k(X(+f,g));if(f=new k(f),f.eq(1))return f;if(o=k.precision,i=k.rounding,t.eq(1))return D(f,o,i);if(s=F(t.e/A),s>=t.d.length-1&&(n=g<0?-g:g)<=Pe)return r=ye(k,f,n,o),t.s<0?new k(1).div(r):D(r,o,i);if(p=f.s,p<0){if(s<t.d.length-1)return new k(NaN);if((t.d[s]&1)==0&&(p=1),f.e==0&&f.d[0]==1&&f.d.length==1)return f.s=p,f}return n=X(+f,g),s=n==0||!isFinite(n)?F(g*(Math.log("0."+M(f.d))/Math.LN10+f.e+1)):new k(n+"").e,s>k.maxE+1||s<k.minE-1?new k(s>0?p/0:0):(O=!1,k.rounding=f.s=1,n=Math.min(12,(s+"").length),r=P(t.times(B(f,o+n)),o),r.d&&(r=D(r,o+5,1),je(r.d,o,i)&&(s=o+10,r=D(P(t.times(B(f,s+n)),s),s+5,1),+M(r.d).slice(o+1,o+15)+1==1e14&&(r=D(r,o+1,0)))),r.s=p,O=!0,k.rounding=i,D(r,o,i))},h.toPrecision=function(t,s){var n,o=this,r=o.constructor;return t===void 0?n=me(o,o.e<=r.toExpNeg||o.e>=r.toExpPos):(H(t,1,x),s===void 0?s=r.rounding:H(s,0,8),o=D(new r(o),t,s),n=me(o,t<=o.e||o.e<=r.toExpNeg,t)),o.isNeg()&&!o.isZero()?"-"+n:n},h.toSignificantDigits=h.toSD=function(t,s){var n=this,o=n.constructor;return t===void 0?(t=o.precision,s=o.rounding):(H(t,1,x),s===void 0?s=o.rounding:H(s,0,8)),D(new o(n),t,s)},h.toString=function(){var t=this,s=t.constructor,n=me(t,t.e<=s.toExpNeg||t.e>=s.toExpPos);return t.isNeg()&&!t.isZero()?"-"+n:n},h.truncated=h.trunc=function(){return D(new this.constructor(this),this.e+1,1)},h.valueOf=h.toJSON=function(){var t=this,s=t.constructor,n=me(t,t.e<=s.toExpNeg||t.e>=s.toExpPos);return t.isNeg()?"-"+n:n};function M(t){var s,n,o,r=t.length-1,i="",p=t[0];if(r>0){for(i+=p,s=1;s<r;s++)o=t[s]+"",n=A-o.length,n&&(i+=ae(n)),i+=o;p=t[s],o=p+"",n=A-o.length,n&&(i+=ae(n))}else if(p===0)return"0";for(;p%10===0;)p/=10;return i+p}function H(t,s,n){if(t!==~~t||t<s||t>n)throw Error(T+t)}function je(t,s,n,o){var r,i,p,f;for(i=t[0];i>=10;i/=10)--s;return--s<0?(s+=A,r=0):(r=Math.ceil((s+1)/A),s%=A),i=X(10,A-s),f=t[r]%i|0,o==null?s<3?(s==0?f=f/100|0:s==1&&(f=f/10|0),p=n<4&&f==99999||n>3&&f==49999||f==5e4||f==0):p=(n<4&&f+1==i||n>3&&f+1==i/2)&&(t[r+1]/i/100|0)==X(10,s-2)-1||(f==i/2||f==0)&&(t[r+1]/i/100|0)==0:s<4?(s==0?f=f/1e3|0:s==1?f=f/100|0:s==2&&(f=f/10|0),p=(o||n<4)&&f==9999||!o&&n>3&&f==4999):p=((o||n<4)&&f+1==i||!o&&n>3&&f+1==i/2)&&(t[r+1]/i/1e3|0)==X(10,s-3)-1,p}function ke(t,s,n){for(var o,r=[0],i,p=0,f=t.length;p<f;){for(i=r.length;i--;)r[i]*=s;for(r[0]+=d.indexOf(t.charAt(p++)),o=0;o<r.length;o++)r[o]>n-1&&(r[o+1]===void 0&&(r[o+1]=0),r[o+1]+=r[o]/n|0,r[o]%=n)}return r.reverse()}function Se(t,s){var n,o,r;if(s.isZero())return s;o=s.d.length,o<32?(n=Math.ceil(o/3),r=(1/Ae(4,n)).toString()):(n=16,r="2.3283064365386962890625e-10"),t.precision+=n,s=ge(t,1,s.times(r),new t(1));for(var i=n;i--;){var p=s.times(s);s=p.times(p).minus(p).times(8).plus(1)}return t.precision-=n,s}var z=(function(){function t(o,r,i){var p,f=0,k=o.length;for(o=o.slice();k--;)p=o[k]*r+f,o[k]=p%i|0,f=p/i|0;return f&&o.unshift(f),o}function s(o,r,i,p){var f,k;if(i!=p)k=i>p?1:-1;else for(f=k=0;f<i;f++)if(o[f]!=r[f]){k=o[f]>r[f]?1:-1;break}return k}function n(o,r,i,p){for(var f=0;i--;)o[i]-=f,f=o[i]<r[i]?1:0,o[i]=f*p+o[i]-r[i];for(;!o[0]&&o.length>1;)o.shift()}return function(o,r,i,p,f,k){var g,c,u,m,v,j,E,K,pe,Ve,xe,Oe,De,Ye,Tt,Dt,ss,os,Ht,Jt,as=o.constructor,is=o.s==r.s?1:-1,We=o.d,Qe=r.d;if(!We||!We[0]||!Qe||!Qe[0])return new as(!o.s||!r.s||(We?Qe&&We[0]==Qe[0]:!Qe)?NaN:We&&We[0]==0||!Qe?is*0:is/0);for(k?(v=1,c=o.e-r.e):(k=ve,v=A,c=F(o.e/v)-F(r.e/v)),Ht=Qe.length,ss=We.length,pe=new as(is),Ve=pe.d=[],u=0;Qe[u]==(We[u]||0);u++);if(Qe[u]>(We[u]||0)&&c--,i==null?(Ye=i=as.precision,p=as.rounding):f?Ye=i+(o.e-r.e)+1:Ye=i,Ye<0)Ve.push(1),j=!0;else{if(Ye=Ye/v+2|0,u=0,Ht==1){for(m=0,Qe=Qe[0],Ye++;(u<ss||m)&&Ye--;u++)Tt=m*k+(We[u]||0),Ve[u]=Tt/Qe|0,m=Tt%Qe|0;j=m||u<ss}else{for(m=k/(Qe[0]+1)|0,m>1&&(Qe=t(Qe,m,k),We=t(We,m,k),Ht=Qe.length,ss=We.length),Dt=Ht,xe=We.slice(0,Ht),Oe=xe.length;Oe<Ht;)xe[Oe++]=0;Jt=Qe.slice(),Jt.unshift(0),os=Qe[0],Qe[1]>=k/2&&++os;do m=0,g=s(Qe,xe,Ht,Oe),g<0?(De=xe[0],Ht!=Oe&&(De=De*k+(xe[1]||0)),m=De/os|0,m>1?(m>=k&&(m=k-1),E=t(Qe,m,k),K=E.length,Oe=xe.length,g=s(E,xe,K,Oe),g==1&&(m--,n(E,Ht<K?Jt:Qe,K,k))):(m==0&&(g=m=1),E=Qe.slice()),K=E.length,K<Oe&&E.unshift(0),n(xe,E,Oe,k),g==-1&&(Oe=xe.length,g=s(Qe,xe,Ht,Oe),g<1&&(m++,n(xe,Ht<Oe?Jt:Qe,Oe,k))),Oe=xe.length):g===0&&(m++,xe=[0]),Ve[u++]=m,g&&xe[0]?xe[Oe++]=We[Dt]||0:(xe=[We[Dt]],Oe=1);while((Dt++<ss||xe[0]!==void 0)&&Ye--);j=xe[0]!==void 0}Ve[0]||Ve.shift()}if(v==1)pe.e=c,G=j;else{for(u=1,m=Ve[0];m>=10;m/=10)u++;pe.e=u+c*v-1,D(pe,f?i+pe.e+1:i,p,j)}return pe}})();function D(t,s,n,o){var r,i,p,f,k,g,c,u,m,v=t.constructor;e:if(s!=null){if(u=t.d,!u)return t;for(r=1,f=u[0];f>=10;f/=10)r++;if(i=s-r,i<0)i+=A,p=s,c=u[m=0],k=c/X(10,r-p-1)%10|0;else if(m=Math.ceil((i+1)/A),f=u.length,m>=f)if(o){for(;f++<=m;)u.push(0);c=k=0,r=1,i%=A,p=i-A+1}else break e;else{for(c=f=u[m],r=1;f>=10;f/=10)r++;i%=A,p=i-A+r,k=p<0?0:c/X(10,r-p-1)%10|0}if(o=o||s<0||u[m+1]!==void 0||(p<0?c:c%X(10,r-p-1)),g=n<4?(k||o)&&(n==0||n==(t.s<0?3:2)):k>5||k==5&&(n==4||o||n==6&&(i>0?p>0?c/X(10,r-p):0:u[m-1])%10&1||n==(t.s<0?8:7)),s<1||!u[0])return u.length=0,g?(s-=t.e+1,u[0]=X(10,(A-s%A)%A),t.e=-s||0):u[0]=t.e=0,t;if(i==0?(u.length=m,f=1,m--):(u.length=m+1,f=X(10,A-i),u[m]=p>0?(c/X(10,r-p)%X(10,p)|0)*f:0),g)for(;;)if(m==0){for(i=1,p=u[0];p>=10;p/=10)i++;for(p=u[0]+=f,f=1;p>=10;p/=10)f++;i!=f&&(t.e++,u[0]==ve&&(u[0]=1));break}else{if(u[m]+=f,u[m]!=ve)break;u[m--]=0,f=1}for(i=u.length;u[--i]===0;)u.pop()}return O&&(t.e>v.maxE?(t.d=null,t.e=NaN):t.e<v.minE&&(t.e=0,t.d=[0])),t}function me(t,s,n){if(!t.isFinite())return Y(t);var o,r=t.e,i=M(t.d),p=i.length;return s?(n&&(o=n-p)>0?i=i.charAt(0)+"."+i.slice(1)+ae(o):p>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(t.e<0?"e":"e+")+t.e):r<0?(i="0."+ae(-r-1)+i,n&&(o=n-p)>0&&(i+=ae(o))):r>=p?(i+=ae(r+1-p),n&&(o=n-r-1)>0&&(i=i+"."+ae(o))):((o=r+1)<p&&(i=i.slice(0,o)+"."+i.slice(o)),n&&(o=n-p)>0&&(r+1===p&&(i+="."),i+=ae(o))),i}function se(t,s){var n=t[0];for(s*=A;n>=10;n/=10)s++;return s}function ce(t,s,n){if(s>J)throw O=!0,n&&(t.precision=n),Error(N);return D(new t(C),s,1,!0)}function be(t,s,n){if(s>R)throw Error(N);return D(new t(b),s,n,!0)}function ze(t){var s=t.length-1,n=s*A+1;if(s=t[s],s){for(;s%10==0;s/=10)n--;for(s=t[0];s>=10;s/=10)n++}return n}function ae(t){for(var s="";t--;)s+="0";return s}function ye(t,s,n,o){var r,i=new t(1),p=Math.ceil(o/A+4);for(O=!1;;){if(n%2&&(i=i.times(s),Ce(i.d,p)&&(r=!0)),n=F(n/2),n===0){n=i.d.length-1,r&&i.d[n]===0&&++i.d[n];break}s=s.times(s),Ce(s.d,p)}return O=!0,i}function Ie(t){return t.d[t.d.length-1]&1}function ie(t,s,n){for(var o,r,i=new t(s[0]),p=0;++p<s.length;){if(r=new t(s[p]),!r.s){i=r;break}o=i.cmp(r),(o===n||o===0&&i.s===n)&&(i=r)}return i}function P(t,s){var n,o,r,i,p,f,k,g=0,c=0,u=0,m=t.constructor,v=m.rounding,j=m.precision;if(!t.d||!t.d[0]||t.e>17)return new m(t.d?t.d[0]?t.s<0?0:1/0:1:t.s?t.s<0?0:t:NaN);for(s==null?(O=!1,k=j):k=s,f=new m(.03125);t.e>-2;)t=t.times(f),u+=5;for(o=Math.log(X(2,u))/Math.LN10*2+5|0,k+=o,n=i=p=new m(1),m.precision=k;;){if(i=D(i.times(t),k,1),n=n.times(++c),f=p.plus(z(i,n,k,1)),M(f.d).slice(0,k)===M(p.d).slice(0,k)){for(r=u;r--;)p=D(p.times(p),k,1);if(s==null)if(g<3&&je(p.d,k-o,v,g))m.precision=k+=10,n=i=f=new m(1),c=0,g++;else return D(p,m.precision=j,v,O=!0);else return m.precision=j,p}p=f}}function B(t,s){var n,o,r,i,p,f,k,g,c,u,m,v=1,j=10,E=t,K=E.d,pe=E.constructor,Ve=pe.rounding,xe=pe.precision;if(E.s<0||!K||!K[0]||!E.e&&K[0]==1&&K.length==1)return new pe(K&&!K[0]?-1/0:E.s!=1?NaN:K?0:E);if(s==null?(O=!1,c=xe):c=s,pe.precision=c+=j,n=M(K),o=n.charAt(0),Math.abs(i=E.e)<15e14){for(;o<7&&o!=1||o==1&&n.charAt(1)>3;)E=E.times(t),n=M(E.d),o=n.charAt(0),v++;i=E.e,o>1?(E=new pe("0."+n),i++):E=new pe(o+"."+n.slice(1))}else return g=ce(pe,c+2,xe).times(i+""),E=B(new pe(o+"."+n.slice(1)),c-j).plus(g),pe.precision=xe,s==null?D(E,xe,Ve,O=!0):E;for(u=E,k=p=E=z(E.minus(1),E.plus(1),c,1),m=D(E.times(E),c,1),r=3;;){if(p=D(p.times(m),c,1),g=k.plus(z(p,new pe(r),c,1)),M(g.d).slice(0,c)===M(k.d).slice(0,c))if(k=k.times(2),i!==0&&(k=k.plus(ce(pe,c+2,xe).times(i+""))),k=z(k,new pe(v),c,1),s==null)if(je(k.d,c-j,Ve,f))pe.precision=c+=j,g=p=E=z(u.minus(1),u.plus(1),c,1),m=D(E.times(E),c,1),r=f=1;else return D(k,pe.precision=xe,Ve,O=!0);else return pe.precision=xe,k;k=g,r+=2}}function Y(t){return String(t.s*t.s/0)}function I(t,s){var n,o,r;for((n=s.indexOf("."))>-1&&(s=s.replace(".","")),(o=s.search(/e/i))>0?(n<0&&(n=o),n+=+s.slice(o+1),s=s.substring(0,o)):n<0&&(n=s.length),o=0;s.charCodeAt(o)===48;o++);for(r=s.length;s.charCodeAt(r-1)===48;--r);if(s=s.slice(o,r),s){if(r-=o,t.e=n=n-o-1,t.d=[],o=(n+1)%A,n<0&&(o+=A),o<r){for(o&&t.d.push(+s.slice(0,o)),r-=A;o<r;)t.d.push(+s.slice(o,o+=A));s=s.slice(o),o=A-s.length}else o-=r;for(;o--;)s+="0";t.d.push(+s),O&&(t.e>t.constructor.maxE?(t.d=null,t.e=NaN):t.e<t.constructor.minE&&(t.e=0,t.d=[0]))}else t.e=0,t.d=[0];return t}function W(t,s){var n,o,r,i,p,f,k,g,c;if(s.indexOf("_")>-1){if(s=s.replace(/(\d)_(?=\d)/g,"$1"),Ke.test(s))return I(t,s)}else if(s==="Infinity"||s==="NaN")return+s||(t.s=NaN),t.e=NaN,t.d=null,t;if(Me.test(s))n=16,s=s.toLowerCase();else if(He.test(s))n=2;else if(Te.test(s))n=8;else throw Error(T+s);for(i=s.search(/p/i),i>0?(k=+s.slice(i+1),s=s.substring(2,i)):s=s.slice(2),i=s.indexOf("."),p=i>=0,o=t.constructor,p&&(s=s.replace(".",""),f=s.length,i=f-i,r=ye(o,new o(n),i,i*2)),g=ke(s,n,ve),c=g.length-1,i=c;g[i]===0;--i)g.pop();return i<0?new o(t.s*0):(t.e=se(g,c),t.d=g,O=!1,p&&(t=z(t,r,f*4)),k&&(t=t.times(Math.abs(k)<54?X(2,k):Ot.pow(2,k))),O=!0,t)}function $(t,s){var n,o=s.d.length;if(o<3)return s.isZero()?s:ge(t,2,s,s);n=1.4*Math.sqrt(o),n=n>16?16:n|0,s=s.times(1/Ae(5,n)),s=ge(t,2,s,s);for(var r,i=new t(5),p=new t(16),f=new t(20);n--;)r=s.times(s),s=s.times(i.plus(r.times(p.times(r).minus(f))));return s}function ge(t,s,n,o,r){var i,p,f,k,g=1,c=t.precision,u=Math.ceil(c/A);for(O=!1,k=n.times(n),f=new t(o);;){if(p=z(f.times(k),new t(s++*s++),c,1),f=r?o.plus(p):o.minus(p),o=z(p.times(k),new t(s++*s++),c,1),p=f.plus(o),p.d[u]!==void 0){for(i=u;p.d[i]===f.d[i]&&i--;);if(i==-1)break}i=f,f=o,o=p,p=i,g++}return O=!0,p.d.length=u+1,p}function Ae(t,s){for(var n=t;--s;)n*=t;return n}function Ee(t,s){var n,o=s.s<0,r=be(t,t.precision,1),i=r.times(.5);if(s=s.abs(),s.lte(i))return Z=o?4:1,s;if(n=s.divToInt(r),n.isZero())Z=o?3:2;else{if(s=s.minus(n.times(r)),s.lte(i))return Z=Ie(n)?o?2:3:o?4:1,s;Z=Ie(n)?o?1:4:o?3:2}return s.minus(r).abs()}function Le(t,s,n,o){var r,i,p,f,k,g,c,u,m,v=t.constructor,j=n!==void 0;if(j?(H(n,1,x),o===void 0?o=v.rounding:H(o,0,8)):(n=v.precision,o=v.rounding),!t.isFinite())c=Y(t);else{for(c=me(t),p=c.indexOf("."),j?(r=2,s==16?n=n*4-3:s==8&&(n=n*3-2)):r=s,p>=0&&(c=c.replace(".",""),m=new v(1),m.e=c.length-p,m.d=ke(me(m),10,r),m.e=m.d.length),u=ke(c,10,r),i=k=u.length;u[--k]==0;)u.pop();if(!u[0])c=j?"0p+0":"0";else{if(p<0?i--:(t=new v(t),t.d=u,t.e=i,t=z(t,m,n,o,0,r),u=t.d,i=t.e,g=G),p=u[n],f=r/2,g=g||u[n+1]!==void 0,g=o<4?(p!==void 0||g)&&(o===0||o===(t.s<0?3:2)):p>f||p===f&&(o===4||g||o===6&&u[n-1]&1||o===(t.s<0?8:7)),u.length=n,g)for(;++u[--n]>r-1;)u[n]=0,n||(++i,u.unshift(1));for(k=u.length;!u[k-1];--k);for(p=0,c="";p<k;p++)c+=d.charAt(u[p]);if(j){if(k>1)if(s==16||s==8){for(p=s==16?4:3,--k;k%p;k++)c+="0";for(u=ke(c,r,s),k=u.length;!u[k-1];--k);for(p=1,c="1.";p<k;p++)c+=d.charAt(u[p])}else c=c.charAt(0)+"."+c.slice(1);c=c+(i<0?"p":"p+")+i}else if(i<0){for(;++i;)c="0"+c;c="0."+c}else if(++i>k)for(i-=k;i--;)c+="0";else i<k&&(c=c.slice(0,i)+"."+c.slice(i))}c=(s==16?"0x":s==2?"0b":s==8?"0o":"")+c}return t.s<0?"-"+c:c}function Ce(t,s){if(t.length>s)return t.length=s,!0}function re(t){return new this(t).abs()}function V(t){return new this(t).acos()}function le(t){return new this(t).acosh()}function we(t,s){return new this(t).plus(s)}function ne(t){return new this(t).asin()}function ue(t){return new this(t).asinh()}function nt(t){return new this(t).atan()}function qe(t){return new this(t).atanh()}function Xe(t,s){t=new this(t),s=new this(s);var n,o=this.precision,r=this.rounding,i=o+4;return!t.s||!s.s?n=new this(NaN):!t.d&&!s.d?(n=be(this,i,1).times(s.s>0?.25:.75),n.s=t.s):!s.d||t.isZero()?(n=s.s<0?be(this,o,r):new this(0),n.s=t.s):!t.d||s.isZero()?(n=be(this,i,1).times(.5),n.s=t.s):s.s<0?(this.precision=i,this.rounding=1,n=this.atan(z(t,s,i,1)),s=be(this,i,1),this.precision=o,this.rounding=r,n=t.s<0?n.minus(s):n.plus(s)):n=this.atan(z(t,s,i,1)),n}function Je(t){return new this(t).cbrt()}function Re(t){return D(t=new this(t),t.e+1,2)}function et(t,s,n){return new this(t).clamp(s,n)}function ct(t){if(!t||typeof t!="object")throw Error(q+"Object expected");var s,n,o,r=t.defaults===!0,i=["precision",1,x,"rounding",0,8,"toExpNeg",-l,0,"toExpPos",0,l,"maxE",0,l,"minE",-l,0,"modulo",0,9];for(s=0;s<i.length;s+=3)if(n=i[s],r&&(this[n]=S[n]),(o=t[n])!==void 0)if(F(o)===o&&o>=i[s+1]&&o<=i[s+2])this[n]=o;else throw Error(T+n+": "+o);if(n="crypto",r&&(this[n]=S[n]),(o=t[n])!==void 0)if(o===!0||o===!1||o===0||o===1)if(o)if(typeof crypto!="undefined"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[n]=!0;else throw Error(oe);else this[n]=!1;else throw Error(T+n+": "+o);return this}function rt(t){return new this(t).cos()}function $e(t){return new this(t).cosh()}function ut(t){var s,n,o;function r(i){var p,f,k,g=this;if(!(g instanceof r))return new r(i);if(g.constructor=r,te(i)){g.s=i.s,O?!i.d||i.e>r.maxE?(g.e=NaN,g.d=null):i.e<r.minE?(g.e=0,g.d=[0]):(g.e=i.e,g.d=i.d.slice()):(g.e=i.e,g.d=i.d?i.d.slice():i.d);return}if(k=typeof i,k==="number"){if(i===0){g.s=1/i<0?-1:1,g.e=0,g.d=[0];return}if(i<0?(i=-i,g.s=-1):g.s=1,i===~~i&&i<1e7){for(p=0,f=i;f>=10;f/=10)p++;O?p>r.maxE?(g.e=NaN,g.d=null):p<r.minE?(g.e=0,g.d=[0]):(g.e=p,g.d=[i]):(g.e=p,g.d=[i]);return}if(i*0!==0){i||(g.s=NaN),g.e=NaN,g.d=null;return}return I(g,i.toString())}if(k==="string")return(f=i.charCodeAt(0))===45?(i=i.slice(1),g.s=-1):(f===43&&(i=i.slice(1)),g.s=1),Ke.test(i)?I(g,i):W(g,i);if(k==="bigint")return i<0?(i=-i,g.s=-1):g.s=1,I(g,i.toString());throw Error(T+i)}if(r.prototype=h,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.EUCLID=9,r.config=r.set=ct,r.clone=ut,r.isDecimal=te,r.abs=re,r.acos=V,r.acosh=le,r.add=we,r.asin=ne,r.asinh=ue,r.atan=nt,r.atanh=qe,r.atan2=Xe,r.cbrt=Je,r.ceil=Re,r.clamp=et,r.cos=rt,r.cosh=$e,r.div=_t,r.exp=at,r.floor=jt,r.hypot=ot,r.ln=Ne,r.log=tt,r.log10=dt,r.log2=lt,r.max=pt,r.min=yt,r.mod=At,r.mul=Ct,r.pow=vt,r.random=kt,r.round=Lt,r.sign=he,r.sin=Ue,r.sinh=mt,r.sqrt=xt,r.sub=gt,r.sum=zt,r.tan=Rt,r.tanh=St,r.trunc=Ft,t===void 0&&(t={}),t&&t.defaults!==!0)for(o=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],s=0;s<o.length;)t.hasOwnProperty(n=o[s++])||(t[n]=this[n]);return r.config(t),r}function _t(t,s){return new this(t).div(s)}function at(t){return new this(t).exp()}function jt(t){return D(t=new this(t),t.e+1,3)}function ot(){var t,s,n=new this(0);for(O=!1,t=0;t<arguments.length;)if(s=new this(arguments[t++]),s.d)n.d&&(n=n.plus(s.times(s)));else{if(s.s)return O=!0,new this(1/0);n=s}return O=!0,n.sqrt()}function te(t){return t instanceof Ot||t&&t.toStringTag===de||!1}function Ne(t){return new this(t).ln()}function tt(t,s){return new this(t).log(s)}function lt(t){return new this(t).log(2)}function dt(t){return new this(t).log(10)}function pt(){return ie(this,arguments,-1)}function yt(){return ie(this,arguments,1)}function At(t,s){return new this(t).mod(s)}function Ct(t,s){return new this(t).mul(s)}function vt(t,s){return new this(t).pow(s)}function kt(t){var s,n,o,r,i=0,p=new this(1),f=[];if(t===void 0?t=this.precision:H(t,1,x),o=Math.ceil(t/A),this.crypto)if(crypto.getRandomValues)for(s=crypto.getRandomValues(new Uint32Array(o));i<o;)r=s[i],r>=429e7?s[i]=crypto.getRandomValues(new Uint32Array(1))[0]:f[i++]=r%1e7;else if(crypto.randomBytes){for(s=crypto.randomBytes(o*=4);i<o;)r=s[i]+(s[i+1]<<8)+(s[i+2]<<16)+((s[i+3]&127)<<24),r>=214e7?crypto.randomBytes(4).copy(s,i):(f.push(r%1e7),i+=4);i=o/4}else throw Error(oe);else for(;i<o;)f[i++]=Math.random()*1e7|0;for(o=f[--i],t%=A,o&&t&&(r=X(10,A-t),f[i]=(o/r|0)*r);f[i]===0;i--)f.pop();if(i<0)n=0,f=[0];else{for(n=-1;f[0]===0;n-=A)f.shift();for(o=1,r=f[0];r>=10;r/=10)o++;o<A&&(n-=A-o)}return p.e=n,p.d=f,p}function Lt(t){return D(t=new this(t),t.e+1,this.rounding)}function he(t){return t=new this(t),t.d?t.d[0]?t.s:0*t.s:t.s||NaN}function Ue(t){return new this(t).sin()}function mt(t){return new this(t).sinh()}function xt(t){return new this(t).sqrt()}function gt(t,s){return new this(t).sub(s)}function zt(){var t=0,s=arguments,n=new this(s[t]);for(O=!1;n.s&&++t<s.length;)n=n.plus(s[t]);return O=!0,D(n,this.precision,this.rounding)}function Rt(t){return new this(t).tan()}function St(t){return new this(t).tanh()}function Ft(t){return D(t=new this(t),t.e+1,1)}h[Symbol.for("nodejs.util.inspect.custom")]=h.toString,h[Symbol.toStringTag]="Decimal";var Ot=h.constructor=ut(S);C=new Ot(C),b=new Ot(b);const Wt=Ot},"./node_modules/.pnpm/react-textarea-autosize@8.5.3_@types+react@18.2.79_react@18.2.0/node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js"(ee,L,e){e.d(L,{A:()=>Pe});var l=e("./node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/extends.js"),x=e("./node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),C=e("./node_modules/.pnpm/use-latest@1.3.0_@types+react@18.2.79_react@18.2.0/node_modules/use-latest/dist/use-latest.esm.js"),b=e("./node_modules/.pnpm/use-composed-ref@1.4.0_@types+react@18.2.79_react@18.2.0/node_modules/use-composed-ref/dist/use-composed-ref.esm.js"),S={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},G=function(R){Object.keys(S).forEach(function(h){R.style.setProperty(h,S[h],"important")})},Z=G,O=null,q=function(R,h){var M=R.scrollHeight;return h.sizingStyle.boxSizing==="border-box"?M+h.borderSize:M-h.paddingSize};function T(J,R,h,M){h===void 0&&(h=1),M===void 0&&(M=1/0),O||(O=document.createElement("textarea"),O.setAttribute("tabindex","-1"),O.setAttribute("aria-hidden","true"),Z(O)),O.parentNode===null&&document.body.appendChild(O);var H=J.paddingSize,je=J.borderSize,ke=J.sizingStyle,Se=ke.boxSizing;Object.keys(ke).forEach(function(ce){var be=ce;O.style[be]=ke[be]}),Z(O),O.value=R;var z=q(O,J);O.value=R,z=q(O,J),O.value="x";var D=O.scrollHeight-H,me=D*h;Se==="border-box"&&(me=me+H+je),z=Math.max(me,z);var se=D*M;return Se==="border-box"&&(se=se+H+je),z=Math.min(se,z),[z,D]}var N=function(){},oe=function(R,h){return R.reduce(function(M,H){return M[H]=h[H],M},{})},de=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],F=!!document.documentElement.currentStyle,X=function(R){var h=window.getComputedStyle(R);if(h===null)return null;var M=oe(de,h),H=M.boxSizing;if(H==="")return null;F&&H==="border-box"&&(M.width=parseFloat(M.width)+parseFloat(M.borderRightWidth)+parseFloat(M.borderLeftWidth)+parseFloat(M.paddingRight)+parseFloat(M.paddingLeft)+"px");var je=parseFloat(M.paddingBottom)+parseFloat(M.paddingTop),ke=parseFloat(M.borderBottomWidth)+parseFloat(M.borderTopWidth);return{sizingStyle:M,paddingSize:je,borderSize:ke}},He=X;function Me(J,R,h){var M=(0,C.A)(h);d.useLayoutEffect(function(){var H=function(ke){return M.current(ke)};if(J)return J.addEventListener(R,H),function(){return J.removeEventListener(R,H)}},[])}var Te=function(R){Me(window,"resize",R)},Ke=function(R){Me(document.fonts,"loadingdone",R)},ve=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],A=function(R,h){var M=R.cacheMeasurements,H=R.maxRows,je=R.minRows,ke=R.onChange,Se=ke===void 0?N:ke,z=R.onHeightChange,D=z===void 0?N:z,me=(0,x.A)(R,ve),se=me.value!==void 0,ce=d.useRef(null),be=(0,b.A)(ce,h),ze=d.useRef(0),ae=d.useRef(),ye=function(){var P=ce.current,B=M&&ae.current?ae.current:He(P);if(B){ae.current=B;var Y=T(B,P.value||P.placeholder||"x",je,H),I=Y[0],W=Y[1];ze.current!==I&&(ze.current=I,P.style.setProperty("height",I+"px","important"),D(I,{rowHeight:W}))}},Ie=function(P){se||ye(),Se(P)};return d.useLayoutEffect(ye),Te(ye),Ke(ye),d.createElement("textarea",(0,l.A)({},me,{onChange:Ie,ref:be}))},Pe=d.forwardRef(A)},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"(ee,L,e){e.d(L,{A:()=>X});var l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(l),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),C=e.n(d),b=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),S=e.n(b),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Z=e.n(G),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),q=e.n(O),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),N=e.n(T),oe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),de={};de.styleTagTransform=N(),de.setAttributes=Z(),de.insert=S().bind(null,"head"),de.domAPI=C(),de.insertStyleElement=q();var F=x()(oe.A,de);const X=oe.A&&oe.A.locals?oe.A.locals:void 0},"./node_modules/.pnpm/use-composed-ref@1.4.0_@types+react@18.2.79_react@18.2.0/node_modules/use-composed-ref/dist/use-composed-ref.esm.js"(ee,L,e){e.d(L,{A:()=>d});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=function(b,S){if(typeof b=="function"){b(S);return}b.current=S},d=function(b,S){var G=l.useRef();return l.useCallback(function(Z){b.current=Z,G.current&&x(G.current,null),G.current=S,S&&x(S,Z)},[S])}},"./node_modules/.pnpm/use-latest@1.3.0_@types+react@18.2.79_react@18.2.0/node_modules/use-latest/dist/use-latest.esm.js"(ee,L,e){e.d(L,{A:()=>d});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),x=l.useLayoutEffect,d=function(b){var S=l.useRef(b);return x(function(){S.current=b}),S}}}]);})();
