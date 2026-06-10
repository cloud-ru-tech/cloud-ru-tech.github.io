"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7199],{"./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/TimePicker.js"(ne,L,e){e.d(L,{A:()=>V});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=e.n(j),O=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),S=e("./node_modules/.pnpm/@snack-uikit+locale@0.16.0/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),te=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),G=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),E=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js"),ce=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Footer/Footer.js"),A=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/TimePickerBase/TimePickerBase.js"),W=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/hooks.js"),le=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/utils.js"),me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=e.n(me),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),He=e.n(ee),Le=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Ae=e.n(Le),Ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),he=e.n(Ke),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),we=e.n(T),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),H=e.n(J),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/styles.module.css"),M={};M.styleTagTransform=H(),M.setAttributes=he(),M.insert=Ae().bind(null,"head"),M.domAPI=He(),M.insertStyleElement=we();var z=X()(h.A,M);const be=h.A&&h.A.locals?h.A.locals:void 0,je=new Date,Se=()=>{};function V({className:B,size:Oe=G.SK.M,fitToContainer:_e=!0,value:$,defaultValue:oe,onChangeValue:fe,onFocusLeave:R,"data-test-id":Q,navigationStartRef:Ee,showSeconds:re=!0,today:P,footerMode:D="current-time-and-apply"}){const[F,C]=(0,y.iC)($,oe,fe),N=(0,te.A)(C),[Z,ye]=(0,O.useState)(),[De,Ie]=(0,O.useState)(void 0),ze=typeof P=="number"?new Date(P):P;(0,O.useEffect)(()=>{var ut,_t,at;if(!(Z!=null&&Z[0]))return;const jt=(ut=Z[0].getHours())!==null&&ut!==void 0?ut:0,ot=(_t=Z[0].getMinutes())!==null&&_t!==void 0?_t:0,se=(at=Z[0].getSeconds())!==null&&at!==void 0?at:0;N({hours:jt,minutes:ot,seconds:se})},[Z,N]);const Pe=(0,O.useCallback)(ut=>{const _t=ut[0];ye([_t,_t])},[]),{dateAndTime:ie,onTimeChange:Y,onDateChange:de,onDateAndTimeChange:Te,isDateFilled:ae,isTimeFilled:ue,isDateAndTimeFilled:nt}=(0,W.O)({showSeconds:re,value:F}),qe=(0,O.useRef)(null),Xe=(0,O.useRef)(null),Je=(0,O.useRef)({focusItem:()=>{}}),Re=(0,O.useRef)({focusItem:()=>{}}),et=(0,O.useRef)({focusItem:()=>{}}),ct=(0,O.useMemo)(()=>(0,le.D5)(Q),[Q]),{lang:rt}=(0,S.Ym)(),$e=(0,O.useMemo)(()=>(0,le.JK)({localeProp:G.Xn,ctxLang:rt}),[rt]);return(0,l.jsx)("div",{className:d()(be.timePickerWrapper,B),"data-fit-to-container":_e||void 0,"data-test-id":Q,children:(0,l.jsxs)(E.Y.Provider,{value:{mode:"time",locale:$e,size:Oe,value:Z,fitToContainer:_e,focus:De,setValue:Pe,setFocus:Ie,getTestId:ct,onFocusLeave:R,navigationStartRef:Ee,showSeconds:re,footerMode:D,dateAndTime:ie,onTimeChange:Y,onDateAndTimeChange:Te,isTimeFilled:ue,applyButtonRef:qe,currentButtonRef:Xe,hoursKeyboardNavigationRef:Je,minutesKeyboardNavigationRef:Re,secondsKeyboardNavigationRef:et,today:ze,viewMode:"month",showHolidays:!1,viewDate:je,referenceDate:je,preselectedRange:void 0,viewShift:0,setViewMode:Se,setViewShift:Se,startPreselect:Se,continuePreselect:Se,completePreselect:Se,restartPreselect:Se,buildCellProps:()=>({isDisabled:!1,isHoliday:!1}),onDateChange:de,isDateAndTimeFilled:nt,isDateFilled:ae},children:[(0,l.jsx)(A.j,{showDivider:!1}),(0,l.jsx)(ce.w,{})]})})}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldColor/FieldColor.js"(ne,L,e){e.d(L,{i:()=>_n});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),y=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),S=e.n(y),te,G,E,ce;function A(){return(A=Object.assign||function(a){for(var _=1;_<arguments.length;_++){var b=arguments[_];for(var I in b)Object.prototype.hasOwnProperty.call(b,I)&&(a[I]=b[I])}return a}).apply(this,arguments)}function W(a,_){if(a==null)return{};var b,I,U={},q=Object.keys(a);for(I=0;I<q.length;I++)_.indexOf(b=q[I])>=0||(U[b]=a[b]);return U}function le(a){var _=(0,d.useRef)(a),b=(0,d.useRef)(function(I){_.current&&_.current(I)});return _.current=a,b.current}var me=function(a,_,b){return _===void 0&&(_=0),b===void 0&&(b=1),a>b?b:a<_?_:a},X=function(a){return"touches"in a},ee=function(a){return a&&a.ownerDocument.defaultView||self},He=function(a,_,b){var I=a.getBoundingClientRect(),U=X(_)?(function(q,ve){for(var Me=0;Me<q.length;Me++)if(q[Me].identifier===ve)return q[Me];return q[0]})(_.touches,b):_;return{left:me((U.pageX-(I.left+ee(a).pageXOffset))/I.width),top:me((U.pageY-(I.top+ee(a).pageYOffset))/I.height)}},Le=function(a){!X(a)&&a.preventDefault()},Ae=d.memo(function(a){var _=a.onMove,b=a.onKey,I=W(a,["onMove","onKey"]),U=(0,d.useRef)(null),q=le(_),ve=le(b),Me=(0,d.useRef)(null),Ze=(0,d.useRef)(!1),ge=(0,d.useMemo)(function(){var Yt=function(Pt){Le(Pt),(X(Pt)?Pt.touches.length>0:Pt.buttons>0)&&U.current?q(He(U.current,Pt,Me.current)):bt(!1)},ts=function(){return bt(!1)};function bt(Pt){var wt=Ze.current,Kt=ee(U.current),ft=Pt?Kt.addEventListener:Kt.removeEventListener;ft(wt?"touchmove":"mousemove",Yt),ft(wt?"touchend":"mouseup",ts)}return[function(Pt){var wt=Pt.nativeEvent,Kt=U.current;if(Kt&&(Le(wt),!(function(Ut,ys){return ys&&!X(Ut)})(wt,Ze.current)&&Kt)){if(X(wt)){Ze.current=!0;var ft=wt.changedTouches||[];ft.length&&(Me.current=ft[0].identifier)}Kt.focus(),q(He(Kt,wt,Me.current)),bt(!0)}},function(Pt){var wt=Pt.which||Pt.keyCode;wt<37||wt>40||(Pt.preventDefault(),ve({left:wt===39?.05:wt===37?-.05:0,top:wt===40?.05:wt===38?-.05:0}))},bt]},[ve,q]),Fe=ge[0],it=ge[1],Mt=ge[2];return(0,d.useEffect)(function(){return Mt},[Mt]),d.createElement("div",A({},I,{onTouchStart:Fe,onMouseDown:Fe,className:"react-colorful__interactive",ref:U,onKeyDown:it,tabIndex:0,role:"slider"}))}),Ke=function(a){return a.filter(Boolean).join(" ")},he=function(a){var _=a.color,b=a.left,I=a.top,U=I===void 0?.5:I,q=Ke(["react-colorful__pointer",a.className]);return d.createElement("div",{className:q,style:{top:100*U+"%",left:100*b+"%"}},d.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:_}}))},T=function(a,_,b){return _===void 0&&(_=0),b===void 0&&(b=Math.pow(10,_)),Math.round(b*a)/b},we={grad:.9,turn:360,rad:360/(2*Math.PI)},J=function(a){return Ee(H(a))},H=function(a){return a[0]==="#"&&(a=a.substring(1)),a.length<6?{r:parseInt(a[0]+a[0],16),g:parseInt(a[1]+a[1],16),b:parseInt(a[2]+a[2],16),a:a.length===4?T(parseInt(a[3]+a[3],16)/255,2):1}:{r:parseInt(a.substring(0,2),16),g:parseInt(a.substring(2,4),16),b:parseInt(a.substring(4,6),16),a:a.length===8?T(parseInt(a.substring(6,8),16)/255,2):1}},h=function(a,_){return _===void 0&&(_="deg"),Number(a)*(we[_]||1)},M=function(a){var _=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(a);return _?be({h:h(_[1],_[2]),s:Number(_[3]),l:Number(_[4]),a:_[5]===void 0?1:Number(_[5])/(_[6]?100:1)}):{h:0,s:0,v:0,a:1}},z=null,be=function(a){var _=a.s,b=a.l;return{h:a.h,s:(_*=(b<50?b:100-b)/100)>0?2*_/(b+_)*100:0,v:b+_,a:a.a}},je=function(a){return Q(Oe(a))},Se=function(a){var _=a.s,b=a.v,I=a.a,U=(200-_)*b/100;return{h:T(a.h),s:T(U>0&&U<200?_*b/100/(U<=100?U:200-U)*100:0),l:T(U/2),a:T(I,2)}},V=function(a){var _=Se(a);return"hsl("+_.h+", "+_.s+"%, "+_.l+"%)"},B=function(a){var _=Se(a);return"hsla("+_.h+", "+_.s+"%, "+_.l+"%, "+_.a+")"},Oe=function(a){var _=a.h,b=a.s,I=a.v,U=a.a;_=_/360*6,b/=100,I/=100;var q=Math.floor(_),ve=I*(1-b),Me=I*(1-(_-q)*b),Ze=I*(1-(1-_+q)*b),ge=q%6;return{r:T(255*[I,Me,ve,ve,Ze,I][ge]),g:T(255*[Ze,I,I,Me,ve,ve][ge]),b:T(255*[ve,ve,Ze,I,I,Me][ge]),a:T(U,2)}},_e=function(a){var _=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(a);return _?re({h:h(_[1],_[2]),s:Number(_[3]),v:Number(_[4]),a:_[5]===void 0?1:Number(_[5])/(_[6]?100:1)}):{h:0,s:0,v:0,a:1}},$=null,oe=function(a){var _=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(a);return _?Ee({r:Number(_[1])/(_[2]?100/255:1),g:Number(_[3])/(_[4]?100/255:1),b:Number(_[5])/(_[6]?100/255:1),a:_[7]===void 0?1:Number(_[7])/(_[8]?100:1)}):{h:0,s:0,v:0,a:1}},fe=null,R=function(a){var _=a.toString(16);return _.length<2?"0"+_:_},Q=function(a){var _=a.r,b=a.g,I=a.b,U=a.a,q=U<1?R(T(255*U)):"";return"#"+R(_)+R(b)+R(I)+q},Ee=function(a){var _=a.r,b=a.g,I=a.b,U=a.a,q=Math.max(_,b,I),ve=q-Math.min(_,b,I),Me=ve?q===_?(b-I)/ve:q===b?2+(I-_)/ve:4+(_-b)/ve:0;return{h:T(60*(Me<0?Me+6:Me)),s:T(q?ve/q*100:0),v:T(q/255*100),a:U}},re=function(a){return{h:T(a.h),s:T(a.s),v:T(a.v),a:T(a.a,2)}},P=d.memo(function(a){var _=a.hue,b=a.onChange,I=Ke(["react-colorful__hue",a.className]);return d.createElement("div",{className:I},d.createElement(Ae,{onMove:function(U){b({h:360*U.left})},onKey:function(U){b({h:me(_+360*U.left,0,360)})},"aria-label":"Hue","aria-valuenow":T(_),"aria-valuemax":"360","aria-valuemin":"0"},d.createElement(he,{className:"react-colorful__hue-pointer",left:_/360,color:V({h:_,s:100,v:100,a:1})})))}),D=d.memo(function(a){var _=a.hsva,b=a.onChange,I={backgroundColor:V({h:_.h,s:100,v:100,a:1})};return d.createElement("div",{className:"react-colorful__saturation",style:I},d.createElement(Ae,{onMove:function(U){b({s:100*U.left,v:100-100*U.top})},onKey:function(U){b({s:me(_.s+100*U.left,0,100),v:me(_.v-100*U.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+T(_.s)+"%, Brightness "+T(_.v)+"%"},d.createElement(he,{className:"react-colorful__saturation-pointer",top:1-_.v/100,left:_.s/100,color:V(_)})))}),F=function(a,_){if(a===_)return!0;for(var b in a)if(a[b]!==_[b])return!1;return!0},C=function(a,_){return a.replace(/\s/g,"")===_.replace(/\s/g,"")},N=function(a,_){return a.toLowerCase()===_.toLowerCase()||F(H(a),H(_))};function Z(a,_,b){var I=le(b),U=(0,d.useState)(function(){return a.toHsva(_)}),q=U[0],ve=U[1],Me=(0,d.useRef)({color:_,hsva:q});(0,d.useEffect)(function(){if(!a.equal(_,Me.current.color)){var ge=a.toHsva(_);Me.current={hsva:ge,color:_},ve(ge)}},[_,a]),(0,d.useEffect)(function(){var ge;F(q,Me.current.hsva)||a.equal(ge=a.fromHsva(q),Me.current.color)||(Me.current={hsva:q,color:ge},I(ge))},[q,a,I]);var Ze=(0,d.useCallback)(function(ge){ve(function(Fe){return Object.assign({},Fe,ge)})},[]);return[q,Ze]}var ye,De=typeof window!="undefined"?d.useLayoutEffect:d.useEffect,Ie=function(){return ye||e.nc},ze=function(a){ye=a},Pe=new Map,ie=function(a){De(function(){var _=a.current?a.current.ownerDocument:document;if(_!==void 0&&!Pe.has(_)){var b=_.createElement("style");b.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Pe.set(_,b);var I=Ie();I&&b.setAttribute("nonce",I),_.head.appendChild(b)}},[])},Y=function(a){var _=a.className,b=a.colorModel,I=a.color,U=I===void 0?b.defaultColor:I,q=a.onChange,ve=W(a,["className","colorModel","color","onChange"]),Me=(0,d.useRef)(null);ie(Me);var Ze=Z(b,U,q),ge=Ze[0],Fe=Ze[1],it=Ke(["react-colorful",_]);return d.createElement("div",A({},ve,{ref:Me,className:it}),d.createElement(D,{hsva:ge,onChange:Fe}),d.createElement(P,{hue:ge.h,onChange:Fe,className:"react-colorful__last-control"}))},de={defaultColor:"000",toHsva:J,fromHsva:function(a){return je({h:a.h,s:a.s,v:a.v,a:1})},equal:N},Te=function(a){return d.createElement(Y,A({},a,{colorModel:de}))},ae=function(a){var _=a.className,b=a.hsva,I=a.onChange,U={backgroundImage:"linear-gradient(90deg, "+B(Object.assign({},b,{a:0}))+", "+B(Object.assign({},b,{a:1}))+")"},q=Ke(["react-colorful__alpha",_]),ve=T(100*b.a);return d.createElement("div",{className:q},d.createElement("div",{className:"react-colorful__alpha-gradient",style:U}),d.createElement(Ae,{onMove:function(Me){I({a:Me.left})},onKey:function(Me){I({a:me(b.a+Me.left)})},"aria-label":"Alpha","aria-valuetext":ve+"%","aria-valuenow":ve,"aria-valuemin":"0","aria-valuemax":"100"},d.createElement(he,{className:"react-colorful__alpha-pointer",left:b.a,color:B(b)})))},ue=function(a){var _=a.className,b=a.colorModel,I=a.color,U=I===void 0?b.defaultColor:I,q=a.onChange,ve=W(a,["className","colorModel","color","onChange"]),Me=(0,d.useRef)(null);ie(Me);var Ze=Z(b,U,q),ge=Ze[0],Fe=Ze[1],it=Ke(["react-colorful",_]);return d.createElement("div",A({},ve,{ref:Me,className:it}),d.createElement(D,{hsva:ge,onChange:Fe}),d.createElement(P,{hue:ge.h,onChange:Fe}),d.createElement(ae,{hsva:ge,onChange:Fe,className:"react-colorful__last-control"}))},nt={defaultColor:"0001",toHsva:J,fromHsva:je,equal:N},qe=function(a){return d.createElement(ue,A({},a,{colorModel:nt}))},Xe=null,Je=function(a){return te.createElement(ue,A({},a,{colorModel:Xe}))},Re=null,et=function(a){return te.createElement(ue,A({},a,{colorModel:Re}))},ct=null,rt=function(a){return te.createElement(Y,A({},a,{colorModel:ct}))},$e=null,ut=function(a){return te.createElement(Y,A({},a,{colorModel:$e}))},_t={defaultColor:{h:0,s:0,v:0,a:1},toHsva:function(a){return a},fromHsva:re,equal:F},at=function(a){return d.createElement(ue,A({},a,{colorModel:_t}))},jt=null,ot=function(a){return te.createElement(ue,A({},a,{colorModel:jt}))},se={defaultColor:{h:0,s:0,v:0},toHsva:function(a){return{h:a.h,s:a.s,v:a.v,a:1}},fromHsva:function(a){var _=re(a);return{h:_.h,s:_.s,v:_.v}},equal:F},Ne=function(a){return d.createElement(Y,A({},a,{colorModel:se}))},tt=null,lt=function(a){return te.createElement(Y,A({},a,{colorModel:tt}))},dt={defaultColor:{r:0,g:0,b:0,a:1},toHsva:Ee,fromHsva:Oe,equal:F},pt=function(a){return d.createElement(ue,A({},a,{colorModel:dt}))},yt=null,At=function(a){return te.createElement(ue,A({},a,{colorModel:yt}))},Ct={defaultColor:{r:0,g:0,b:0},toHsva:function(a){return Ee({r:a.r,g:a.g,b:a.b,a:1})},fromHsva:function(a){return{r:(_=Oe(a)).r,g:_.g,b:_.b};var _},equal:F},vt=function(a){return d.createElement(Y,A({},a,{colorModel:Ct}))},kt=null,Lt=function(a){return te.createElement(Y,A({},a,{colorModel:kt}))},ke=/^#?([0-9A-F]{3,8})$/i,Ue=function(a){var _=a.color,b=_===void 0?"":_,I=a.onChange,U=a.onBlur,q=a.escape,ve=a.validate,Me=a.format,Ze=a.process,ge=W(a,["color","onChange","onBlur","escape","validate","format","process"]),Fe=G(function(){return q(b)}),it=Fe[0],Mt=Fe[1],Yt=le(I),ts=le(U),bt=E(function(wt){var Kt=q(wt.target.value);Mt(Kt),ve(Kt)&&Yt(Ze?Ze(Kt):Kt)},[q,Ze,ve,Yt]),Pt=E(function(wt){ve(wt.target.value)||Mt(q(b)),ts(wt)},[b,q,ve,ts]);return ce(function(){Mt(q(b))},[b,q]),te.createElement("input",A({},ge,{value:Me?Me(it):it,spellCheck:"false",onChange:bt,onBlur:Pt}))},mt=function(a){return"#"+a},xt=function(a){var _=a.prefixed,b=a.alpha,I=W(a,["prefixed","alpha"]),U=E(function(ve){return ve.replace(/([^0-9A-F]+)/gi,"").substring(0,b?8:6)},[b]),q=E(function(ve){return(function(Me,Ze){var ge=ke.exec(Me),Fe=ge?ge[1].length:0;return Fe===3||Fe===6||!!Ze&&Fe===4||!!Ze&&Fe===8})(ve,b)},[b]);return te.createElement(Ue,A({},I,{escape:U,format:_?mt:void 0,process:mt,validate:q}))},gt=e("./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),zt=e("./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js"),Rt=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),St=e("./node_modules/.pnpm/@snack-uikit+locale@0.16.0/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),Ft=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const Ot=null,Wt={Auto:"auto",Full:"full"};var t=e("./node_modules/.pnpm/@snack-uikit+counter@0.8.12_react@18.2.0/node_modules/@snack-uikit/counter/dist/esm/components/Counter.js"),s=e("./node_modules/.pnpm/@snack-uikit+truncate-string@0.7.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/truncate-string/dist/esm/components/TruncateString.js");const n=(a,_,b)=>b==="xs"?"label-only":a&&_?"icon-before":_?"label-only":"icon-only";var o=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(o),i=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),p=e.n(i),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),k=e.n(f),g=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),c=e.n(g),u=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),m=e.n(u),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=e.n(v),w=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+segmented-control@0.6.21_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/helperComponents/Segment/styles.module.css"),K={};K.styleTagTransform=x(),K.setAttributes=c(),K.insert=k().bind(null,"head"),K.domAPI=p(),K.insertStyleElement=m();var pe=r()(w.A,K);const Ve=w.A&&w.A.locals?w.A.locals:void 0;function xe({size:a,label:_,value:b,selected:I,onClick:U,disabled:q,icon:ve,counter:Me,focusable:Ze,onGetFocusable:ge,onSelectionUpdated:Fe,renderWrapSegment:it}){const Mt=(0,d.useRef)(null);(0,d.useEffect)(()=>{Ze&&(ge==null||ge(Mt.current))},[Ze,ge]),(0,d.useEffect)(()=>{I&&Mt.current&&Fe(Mt.current)},[I,Mt,Fe]);const Yt=(0,l.jsxs)("button",{ref:Mt,"data-test-id":`section-${b}`,"data-active":I||void 0,"data-disabled":q||void 0,"data-layout":n(ve,_,a),className:S()(Ve.segment),onClick:U,"data-size":a,disabled:q,tabIndex:Ze?0:-1,"aria-checked":I,role:"radio",type:"button",children:[a!=="xs"&&ve&&(0,l.jsx)("div",{className:Ve.icon,children:ve}),_&&(0,l.jsx)(s.m,{className:Ve.label,"data-size":a,text:_}),Me&&(0,l.jsx)(t.p,Object.assign({},Me,{size:"s"}))]});return it?it(Yt):Yt}function Ce({selected:a,items:_}){const[b,I]=(0,d.useState)(a),[U,q]=(0,d.useState)(!1),{prev:ve,next:Me}=(0,d.useMemo)(()=>_.reduce((Fe,it)=>(Fe._isNextSearching&&!Fe.next&&(Fe.next=it.disabled?Fe.next:it.value),b===it.value&&(Fe._isNextSearching=!0),Fe._isNextSearching||(Fe.prev=it.disabled?Fe.prev:it.value),Fe),{_isNextSearching:!1}),[b,_]),Ze=(0,d.useCallback)(Fe=>{switch(Fe.key){case"ArrowLeft":{ve&&(q(!0),I(ve));return}case"ArrowRight":{Me&&(q(!0),I(Me));return}default:return}},[Me,ve]),ge=(0,d.useCallback)(Fe=>{q(it=>(it&&(Fe==null||Fe.focus()),!1))},[]);return{onKeyDown:Ze,focusableSegmentValue:b,onGetFocusable:ge}}var Be=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+segmented-control@0.6.21_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/components/styles.module.css"),Ye={};Ye.styleTagTransform=x(),Ye.setAttributes=c(),Ye.insert=k().bind(null,"head"),Ye.domAPI=p(),Ye.insertStyleElement=m();var Tt=r()(Be.A,Ye);const Dt=Be.A&&Be.A.locals?Be.A.locals:void 0;var ss=function(a,_){var b={};for(var I in a)Object.prototype.hasOwnProperty.call(a,I)&&_.indexOf(I)<0&&(b[I]=a[I]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,I=Object.getOwnPropertySymbols(a);U<I.length;U++)_.indexOf(I[U])<0&&Object.prototype.propertyIsEnumerable.call(a,I[U])&&(b[I[U]]=a[I[U]]);return b};function os(a){var{defaultValue:_,size:b="m",className:I,onChange:U,items:q,value:ve,outline:Me,width:Ze=Wt.Auto,name:ge}=a,Fe=ss(a,["defaultValue","size","className","onChange","items","value","outline","width","name"]);const[it,Mt]=(0,O.iC)(ve,_,U),{focusableSegmentValue:Yt,onGetFocusable:ts,onKeyDown:bt}=Ce({selected:it,items:q}),Pt=(0,d.useRef)(null),wt=(0,d.useRef)(),[Kt,ft]=(0,d.useState)(),Ut=(0,d.useCallback)((Xt=wt.current)=>{Xt&&(wt.current=Xt,setTimeout(()=>{ft({top:Xt.offsetTop,left:Xt.offsetLeft,width:Xt.offsetWidth,height:Xt.offsetHeight})}))},[]);(0,d.useEffect)(()=>{if(!Pt.current)return;const Xt=new ResizeObserver(()=>Ut());Xt.observe(Pt.current);const Qs=new MutationObserver(()=>Ut());return Qs.observe(Pt.current,{childList:!0}),()=>{Xt.disconnect(),Qs.disconnect()}},[Ut]);const ys=(0,d.useMemo)(()=>q.map(Xt=>(0,l.jsx)("div",{className:Dt.segmentHolder,"data-width":Ze,children:(0,l.jsx)(xe,Object.assign({},Xt,{size:b,onGetFocusable:ts,selected:it===Xt.value,onClick:()=>Mt(Xt.value),focusable:Yt===Xt.value,onSelectionUpdated:Ut}))},Xt.value)),[q,Ze,b,ts,it,Yt,Ut,Mt]);return(0,l.jsxs)("div",Object.assign({ref:Pt,"data-size":b,onKeyDown:bt,className:S()(Dt.container,I),role:"radiogroup","data-outline":Me||void 0,"data-width":Ze},(0,Ft.gn)(Fe),(0,Ft.z7)(Fe),{children:[ge&&(0,l.jsx)("input",{type:"hidden",value:it,name:ge}),(0,l.jsx)("div",{"data-size":b,style:Kt,className:Dt.selection,"aria-hidden":!0}),ys]}))}var Ht=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+color-picker@0.3.56_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/color-picker/dist/esm/components/global.css"),Jt={};Jt.styleTagTransform=x(),Jt.setAttributes=c(),Jt.insert=k().bind(null,"head"),Jt.domAPI=p(),Jt.insertStyleElement=m();var as=r()(Ht.A,Jt);const is=Ht.A&&Ht.A.locals?Ht.A.locals:void 0,We={Hex:"hex",Rbg:"rbg",Hsv:"hsv"},Qe=[{value:We.Hex,label:"HEX"},{value:We.Hsv,label:"HSV"},{value:We.Rbg,label:"RGB"}],vs={[We.Hex]:"HEX",[We.Rbg]:"RGB",[We.Hsv]:"HSV"},us={[We.Hex]:!0,[We.Rbg]:!0,[We.Hsv]:!0},Is=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i,Ts=/hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i,Fs=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;var ps=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),xs=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+color-picker@0.3.56_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/color-picker/dist/esm/helperComponents/FieldPrivate/styles.module.css"),ls={};ls.styleTagTransform=x(),ls.setAttributes=c(),ls.insert=k().bind(null,"head"),ls.domAPI=p(),ls.insertStyleElement=m();var Zs=r()(xs.A,ls);const rs=xs.A&&xs.A.locals?xs.A.locals:void 0;function Bt({className:a,disabled:_,focused:b,style:I,value:U="",onChange:q,min:ve=0,max:Me=255,inputType:Ze="number",error:ge}){const Fe=(0,d.useRef)(null),it=()=>{var bt;_||(bt=Fe==null?void 0:Fe.current)===null||bt===void 0||bt.focus()},[Mt,Yt]=(0,d.useState)(""),ts=()=>{if(Ze==="number"){const bt=Number(Mt)||0,Pt=String(Math.min(Math.max(ve,bt),Math.min(Me,bt)));Yt(Pt),q==null||q(Pt);return}q==null||q(Mt)};return(0,d.useEffect)(()=>{Yt(String(U))},[U]),(0,l.jsx)("div",{className:S()(a,rs.container),style:I,"data-focused":b||void 0,"data-validation":ge?"error":void 0,"data-test-id":"field-container-private",onClick:it,"data-size":"s","data-variant":"single-line-container",role:"textbox",tabIndex:-1,children:(0,l.jsx)(ps.K,Object.assign({value:String(Mt),onChange:Yt,onBlur:ts,type:Ze,ref:Fe},Ze==="number"?{min:ve,max:Me}:{}))})}function Gt({onChange:a,rgba:_}){const b=I=>{a(Object.assign(Object.assign({},_),{a:Number(I)%100/100}))};return(0,l.jsx)(Bt,{value:_.a*100,onChange:b,inputType:"number",min:0,max:100})}const Et=(a,_=0,b=Math.pow(10,_))=>Math.round(b*a)/b;function Zt(a){return typeof a=="object"&&"r"in a&&"g"in a&&"b"in a}function Qt(a){return typeof a=="object"&&Zt(a)&&"a"in a}function Vt(a){return typeof a=="object"&&"h"in a&&"s"in a&&"l"in a}function It(a){return typeof a=="object"&&Vt(a)&&"a"in a}function Nt(a){return typeof a=="object"&&"h"in a&&"s"in a&&"v"in a}function As(a){return typeof a=="object"&&Nt(a)&&"a"in a}function ms(a){return!!Fs.exec(a)}function $t(a){return!!Ts.exec(a)}function Hs(a){return!!Is.exec(a)}const js={grad:360/400,turn:360,rad:360/(Math.PI*2)},qt=a=>hs(ds(a)),ds=a=>(a[0]==="#"&&(a=a.substring(1)),a.length<6?{r:parseInt(a[0]+a[0],16),g:parseInt(a[1]+a[1],16),b:parseInt(a[2]+a[2],16),a:a.length===4?Et(parseInt(a[3]+a[3],16)/255,2):1}:{r:parseInt(a.substring(0,2),16),g:parseInt(a.substring(2,4),16),b:parseInt(a.substring(4,6),16),a:a.length===8?Et(parseInt(a.substring(6,8),16)/255,2):1}),_s=(a,_="deg")=>Number(a)*(js[_]||1),Ss=a=>{const b=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(a);return b?Os({h:_s(b[1],b[2]),s:Number(b[3]),l:Number(b[4]),a:b[5]===void 0?1:Number(b[5])/(b[6]?100:1)}):{h:0,s:0,v:0,a:1}},Os=({h:a,s:_,l:b,a:I})=>(_*=(b<50?b:100-b)/100,{h:a,s:_>0?2*_/(b+_)*100:0,v:b+_,a:I}),gs=a=>Es(Ns(a)),Ds=({h:a,s:_,v:b,a:I})=>{const U=(200-_)*b/100;return{h:Et(a),s:Et(U>0&&U<200?_*b/100/(U<=100?U:200-U)*100:0),l:Et(U/2),a:Et(I,2)}},Ns=({h:a,s:_,v:b,a:I})=>{a=a/360*6,_=_/100,b=b/100;const U=Math.floor(a),q=b*(1-_),ve=b*(1-(a-U)*_),Me=b*(1-(1-a+U)*_),Ze=U%6;return{r:Et([b,ve,q,q,Me,b][Ze]*255),g:Et([Me,b,b,ve,q,q][Ze]*255),b:Et([q,q,Me,b,b,ve][Ze]*255),a:Et(I,2)}},Bs=a=>{const b=Ts.exec(a);return b?Ms({h:_s(b[1],b[2]),s:Number(b[3]),v:Number(b[4]),a:b[5]===void 0?1:Number(b[5])/(b[6]?100:1)}):{h:0,s:0,v:0,a:1}},Ws=a=>{const b=Is.exec(a);return b?hs({r:Number(b[1])/(b[2]?100/255:1),g:Number(b[3])/(b[4]?100/255:1),b:Number(b[5])/(b[6]?100/255:1),a:b[7]===void 0?1:Number(b[7])/(b[8]?100:1)}):{h:0,s:0,v:0,a:1}},fs=a=>{const _=a.toString(16);return _.length<2?"0"+_:_},Es=({r:a,g:_,b,a:I})=>{const U=I<1?fs(Et(I*255)):"";return"#"+fs(a)+fs(_)+fs(b)+U},hs=({r:a,g:_,b,a:I})=>{const U=Math.max(a,_,b),q=U-Math.min(a,_,b),ve=q?U===a?(_-b)/q:U===_?2+(b-a)/q:4+(a-_)/q:0;return{h:Et(60*(ve<0?ve+6:ve)),s:Et(U?q/U*100:0),v:Et(U/255*100),a:I}},Ms=a=>({h:Et(a.h),s:Et(a.s),v:Et(a.v),a:Et(a.a,2)}),Ks=({r:a,g:_,b})=>({r:a,g:_,b}),Us=({h:a,s:_,l:b})=>({h:a,s:_,l:b}),Vs=a=>{const{h:_,s:b,v:I}=Ms(a);return{h:_,s:b,v:I}};function Gs(a){return Vt(a)||It(a)?gs(Os(Object.assign({a:1},a))):Zt(a)||Qt(a)?Es(Object.assign({a:1},a)):Nt(a)||As(a)?gs(Object.assign({a:1},a)):ms(a)?gs(Ss(a)):Hs(a)?gs(Ws(a)):$t(a)?gs(Bs(a)):a}function ws(a){const _=Gs(a);return{hex:_,rgb:Ks(ds(_)),rgba:ds(_),hsv:Vs(qt(_)),hsva:qt(_),hsl:Us(Ds(qt(_))),hsla:Ds(qt(_))}}const Ls=/^#?([0-9A-F]{3,8})$/i,cs=(a,_)=>{const b=Ls.exec(a),I=b?b[1].length:0;return I===3||I===6||!!_&&I===4||!!_&&I===8};var ns=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+color-picker@0.3.56_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/color-picker/dist/esm/components/styles.module.css"),ht={};ht.styleTagTransform=x(),ht.setAttributes=c(),ht.insert=k().bind(null,"head"),ht.domAPI=p(),ht.insertStyleElement=m();var Ge=r()(ns.A,ht);const st=ns.A&&ns.A.locals?ns.A.locals:void 0;var es=function(a,_){var b={};for(var I in a)Object.prototype.hasOwnProperty.call(a,I)&&_.indexOf(I)<0&&(b[I]=a[I]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,I=Object.getOwnPropertySymbols(a);U<I.length;U++)_.indexOf(I[U])<0&&Object.prototype.propertyIsEnumerable.call(a,I[U])&&(b[I[U]]=a[I[U]]);return b};function Cs(a){var{value:_,onChange:b,withAlpha:I=!0,autoApply:U,className:q,colorMode:ve=us}=a,Me=es(a,["value","onChange","withAlpha","autoApply","className","colorMode"]);const Ze=(0,d.useMemo)(()=>{const ft=Object.assign(Object.assign({},us),ve);return Object.keys(ft).reduce((Ut,ys)=>(ft[ys]&&Ut.push({value:ys,label:vs[ys]}),Ut),[])},[ve]),[ge,Fe]=(0,d.useState)(ws(_||"#000")),[it,Mt]=(0,d.useState)(Ze[0].value),[Yt,ts]=(0,d.useState)(ge.hex);(0,d.useEffect)(()=>{if(_){const ft=ws(_);Fe(ft),ts(ft.hex)}},[_]);const bt=ft=>{const Ut=ws(ft);Fe(Ut),U&&(b==null||b(Ut))},Pt=()=>{b==null||b(ge)},wt=()=>{_&&Fe(ws(_))},{t:Kt}=(0,St.Ym)("ColorPicker");return(0,l.jsxs)("div",Object.assign({className:S()(st.container,"osThemeSnack",q)},(0,Ft.z7)(Me),{children:[it===We.Hex&&(I?(0,l.jsx)(qe,{onChange:bt,color:ge.hex}):(0,l.jsx)(Te,{onChange:bt,color:ge.hex})),it===We.Rbg&&(I?(0,l.jsx)(pt,{onChange:bt,color:ge.rgba}):(0,l.jsx)(vt,{onChange:bt,color:ge.rgb})),it===We.Hsv&&(I?(0,l.jsx)(at,{onChange:bt,color:ge.hsva}):(0,l.jsx)(Ne,{onChange:bt,color:ge.hsv})),(0,l.jsxs)("div",{className:st.colorModel,children:[(0,l.jsx)(os,{outline:!0,value:it,size:"s",onChange:Mt,items:Ze}),(0,l.jsxs)("div",{className:st.colorFields,"data-mode":it,"data-with-alpha":I||void 0,children:[(0,l.jsxs)(l.Fragment,{children:[it===We.Hex&&(0,l.jsx)(Bt,{value:ge.hex.replace("#","").substring(0,6),error:!cs(Yt,I),inputType:"text",onChange:(ft="")=>{ts(ft),cs(ft)&&bt(Object.assign(Object.assign({},ds(ft)),{a:ge.rgba.a}))}}),it===We.Rbg&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Bt,{value:ge.rgb.r,max:255,onChange:ft=>{bt(Object.assign(Object.assign({},ge.rgba),{r:Number(ft)}))}}),(0,l.jsx)(Bt,{value:ge.rgb.g,max:255,onChange:ft=>{bt(Object.assign(Object.assign({},ge.rgba),{g:Number(ft)}))}}),(0,l.jsx)(Bt,{value:ge.rgb.b,max:255,onChange:ft=>{bt(Object.assign(Object.assign({},ge.rgba),{b:Number(ft)}))}})]}),it===We.Hsv&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Bt,{value:ge.hsv.h,max:360,onChange:ft=>{bt(Object.assign(Object.assign({},ge.hsva),{h:Number(ft)}))}}),(0,l.jsx)(Bt,{value:ge.hsv.s,max:100,onChange:ft=>{bt(Object.assign(Object.assign({},ge.hsva),{s:Number(ft)}))}}),(0,l.jsx)(Bt,{value:ge.hsv.v,max:100,onChange:ft=>{bt(Object.assign(Object.assign({},ge.hsva),{v:Number(ft)}))}})]})]}),I&&(0,l.jsx)(Gt,{rgba:ge.rgba,onChange:bt})]})]}),!U&&(0,l.jsxs)("div",{className:st.footer,children:[(0,l.jsx)(gt.b,{label:Kt("cancel"),size:"xs",onClick:wt}),(0,l.jsx)(zt.L,{label:Kt("apply"),icon:(0,l.jsx)(Rt.A,{}),onClick:Pt,size:"xs"})]})]}))}var Ps=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),bs=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),Ys=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),rn=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),ln=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),en=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),dn=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),cn=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),un=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),pn=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),$s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldColor/styles.module.css"),zs={};zs.styleTagTransform=x(),zs.setAttributes=c(),zs.insert=k().bind(null,"head"),zs.domAPI=p(),zs.insertStyleElement=m();var An=r()($s.A,zs);const qs=$s.A&&$s.A.locals?$s.A.locals:void 0;var mn=function(a,_){var b={};for(var I in a)Object.prototype.hasOwnProperty.call(a,I)&&_.indexOf(I)<0&&(b[I]=a[I]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,I=Object.getOwnPropertySymbols(a);U<I.length;U++)_.indexOf(I[U])<0&&Object.prototype.propertyIsEnumerable.call(a,I[U])&&(b[I[U]]=a[I[U]]);return b};const _n=(0,d.forwardRef)((a,_)=>{var{id:b,name:I,value:U,disabled:q=!1,readonly:ve=!1,showCopyButton:Me=!0,showClearButton:Ze=!0,open:ge,onChange:Fe,onOpenChange:it,className:Mt,label:Yt,labelTooltip:ts,labelTooltipPlacement:bt,required:Pt=!1,caption:wt,hint:Kt,showHintIcon:ft,size:Ut=bs.SK.S,validationState:ys=en.sv.Default,error:Xt,withAlpha:Qs,autoApply:fn,placeholder:vn,onFocus:gn,onBlur:hn,onCopyButtonClick:bn,autoFocus:yn}=a,kn=mn(a,["id","name","value","disabled","readonly","showCopyButton","showClearButton","open","onChange","onOpenChange","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","size","validationState","error","withAlpha","autoApply","placeholder","onFocus","onBlur","onCopyButtonClick","autoFocus"]);const[xn,jn]=(0,O.iC)(ge,!1,it),Xs=(0,d.useRef)(null),tn=xn&&!ve&&!q,sn=(0,un.t)({validationState:ys,error:Xt}),[Js="",Rs]=(0,ln.I)({value:U||"",onChange:Fe}),Sn=(0,d.useRef)(null),On=(0,d.useRef)(null),nn=!!(Js&&!q),Cn=Ze&&nn&&!ve,Pn=Me&&nn&&ve,En=()=>{var ks;Rs==null||Rs(""),Pt&&((ks=Xs.current)===null||ks===void 0||ks.focus())},on=(0,Ys.r)({clearButtonRef:Sn,showClearButton:Cn,size:Ut,onClear:En}),an=(0,cn.x)({copyButtonRef:On,showCopyButton:Pn,size:Ut,valueToCopy:Js,onCopyButtonClick:bn}),{postfixButtons:wn,inputTabIndex:In,onInputKeyDown:Tn}=(0,rn.C)({inputRef:Xs,postfixButtons:(0,d.useMemo)(()=>[on,an],[on,an]),readonly:ve,submitKeys:["Enter","Space","Tab"]});return(0,d.useEffect)(()=>{var ks;ge&&((ks=Xs.current)===null||ks===void 0||ks.focus())},[ge]),(0,l.jsx)(pn.m,Object.assign({className:Mt,label:Yt,labelTooltip:ts,labelTooltipPlacement:bt,labelFor:b,required:Pt,caption:wt,hint:Kt,disabled:q,readonly:ve,showHintIcon:ft,size:Ut,error:Xt,validationState:sn},(0,Ft.z7)(kn),{children:(0,l.jsx)(Ps.m,Object.assign({trigger:"click",triggerClassName:qs.triggerClassName,widthStrategy:"auto"},ve||q?{open:!1}:{open:tn,onOpenChange:jn},{content:(0,l.jsx)(Cs,{withAlpha:Qs,autoApply:fn,value:Js,onChange:({hex:ks})=>{Rs==null||Rs(ks||"")},colorMode:{hex:!1}}),children:(0,l.jsx)(dn.V,{className:qs.container,size:Ut,validationState:sn,disabled:q,readonly:ve,variant:en.aJ.SingleLine,focused:tn,inputRef:Xs,postfix:wn,prefix:(0,l.jsx)("div",{className:qs.colorPreview,style:{"--color":Js}}),children:(0,l.jsx)(ps.K,{ref:(0,j.A)(_,Xs),"data-size":Ut,value:Js,onChange:Fe,onFocus:gn,onBlur:hn,tabIndex:In,onKeyDown:Tn,disabled:q,readonly:ve,placeholder:vn,type:"text",id:b,name:I,autoFocus:yn,"data-test-id":"field-color__input"})})}))}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDate/FieldDate.js"(ne,L,e){e.d(L,{$:()=>Q});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),y=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/Calendar/Calendar.js"),S=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),te=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/calendar/index.js"),G=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),E=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),ce=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),A=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"),W=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),le=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),me=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),X=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/dateFields.js"),ee=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),He=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),Le=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useDateField.js"),Ae=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useHandlers.js"),Ke=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useFocusHandlers.js"),he=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),T=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),we=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),J=e.n(we),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(H),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),z=e.n(M),be=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),je=e.n(be),Se=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),V=e.n(Se),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Oe=e.n(B),_e=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDate/styles.module.css"),$={};$.styleTagTransform=Oe(),$.setAttributes=je(),$.insert=z().bind(null,"head"),$.domAPI=h(),$.insertStyleElement=V();var oe=J()(_e.A,$);const fe=_e.A&&_e.A.locals?_e.A.locals:void 0;var R=function(Ee,re){var P={};for(var D in Ee)Object.prototype.hasOwnProperty.call(Ee,D)&&re.indexOf(D)<0&&(P[D]=Ee[D]);if(Ee!=null&&typeof Object.getOwnPropertySymbols=="function")for(var F=0,D=Object.getOwnPropertySymbols(Ee);F<D.length;F++)re.indexOf(D[F])<0&&Object.prototype.propertyIsEnumerable.call(Ee,D[F])&&(P[D[F]]=Ee[D[F]]);return P};const Q=(0,d.forwardRef)((Ee,re)=>{var P,{id:D,name:F,value:C,disabled:N=!1,readonly:Z=!1,showCopyButton:ye=!0,showClearButton:De=!0,open:Ie,onOpenChange:ze,onChange:Pe,onFocus:ie,onBlur:Y,className:de,label:Te,labelTooltip:ae,labelTooltipPlacement:ue,required:nt=!1,caption:qe,hint:Xe,showHintIcon:Je,size:Re=G.SK.S,validationState:et=me.sv.Default,buildCellProps:ct,error:rt,mode:$e,onCopyButtonClick:ut,autoFocus:_t}=Ee,at=R(Ee,["id","name","value","disabled","readonly","showCopyButton","showClearButton","open","onOpenChange","onChange","onFocus","onBlur","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","size","validationState","buildCellProps","error","mode","onCopyButtonClick","autoFocus"]);const[jt,ot]=(0,O.iC)(Ie,!1,ze),se=(0,d.useRef)(null),Ne=(0,d.useRef)(null),tt=(0,d.useRef)(null),lt=Re===G.SK.S?G.Ev.Xs:G.Ev.S,dt=jt&&!Z&&!N,pt=!!(C&&!N),yt=De&&pt&&!Z,At=ye&&pt&&Z,Ct=$e==="date-time"?(P=at.showSeconds)!==null&&P!==void 0?P:!0:void 0,vt=(0,he.t)({validationState:et,error:rt}),kt=(0,d.useRef)(null),Lt=(0,d.useCallback)(w=>{w.key==="ArrowDown"&&(ot(!0),setTimeout(()=>{var K;return(K=kt.current)===null||K===void 0?void 0:K.focus()},0))},[ot]),ke=(0,d.useCallback)(()=>{var w,K,pe;Pe&&Pe(void 0),!((w=se.current)===null||w===void 0)&&w.value&&(se.current.value=""),nt?((K=se.current)===null||K===void 0||K.focus(),ot(!0)):((pe=se.current)===null||pe===void 0||pe.blur(),ot(!1))},[Pe,nt,ot]),Ue=(0,d.useCallback)(w=>w?$e==="date"?w.toLocaleDateString(X.Xn):w.toLocaleString(X.Xn,{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",second:Ct?"2-digit":void 0}):"",[$e,Ct]),mt=Ue(C),xt=(0,E.r)({clearButtonRef:Ne,showClearButton:yt,size:Re,onClear:ke}),gt=(0,He.x)({copyButtonRef:tt,showCopyButton:At,size:Re,valueToCopy:mt,onCopyButtonClick:ut}),zt=(0,d.useMemo)(()=>({active:!1,show:!0,id:"calendarIcon",render:w=>(0,l.jsx)(te.A,Object.assign({},w,{size:lt,className:fe.calendarIcon,"data-size":Re}))}),[lt,Re]),Rt=(0,d.useMemo)(()=>[xt,gt,zt],[xt,gt,zt]),{value:St,handleChange:Ft,handleClick:Ot,handleKeyDown:Wt,handleBlur:t,mask:s,setInputFocus:n}=(0,Le.c)({inputRef:se,onChange:Pe,readonly:Z,locale:X.Xn,setIsOpen:ot,mode:$e,showSeconds:Ct}),o=(0,d.useCallback)(()=>n($e==="date"?X.Yj.Year:X.Yj.Seconds),[$e,n]),{postfixButtons:r,inputTabIndex:i,onInputKeyDown:p,setInitialTabIndices:f}=(0,ce.C)({setInputFocus:o,inputRef:se,postfixButtons:Rt,onButtonKeyDown:Lt,readonly:Z,submitKeys:["Enter","Space","Tab"]}),k=w=>{var K;Pe&&Pe(w),(K=se.current)===null||K===void 0||K.focus(),ot(!1),se.current&&(se.current.value=Ue(w))},g=()=>{f(),(0,A.z$)(()=>{n(X.Yj.Day),ot(!1)})},c=(0,Ae.j)([Lt,Wt,p]);(0,d.useEffect)(()=>{var w;Ie&&((w=se.current)===null||w===void 0||w.focus())},[Ie]),(0,d.useEffect)(()=>{se.current&&document.activeElement!==se.current&&(se.current.value=Ue(C))},[Ue,C]);const u=(0,d.useCallback)(w=>{n(),ie==null||ie(w)},[ie,n]),m=(0,Ke.T)({onFocusByClick:ie,onFocusByKeyboard:u}),v=(0,Ae.j)([t,m.onBlur,Y]),x=(0,d.useCallback)(w=>{Ot(),jt&&w.stopPropagation()},[Ot,jt]);return(0,l.jsx)(T.m,Object.assign({className:de,label:Te,labelTooltip:ae,labelTooltipPlacement:ue,labelFor:D,required:nt,caption:qe,hint:Xe,disabled:N,readonly:Z,showHintIcon:Je,size:Re,error:rt,validationState:vt},(0,le.z7)(at),{children:(0,l.jsx)(S.m,Object.assign({trigger:"click",triggerClassName:fe.triggerClassName,widthStrategy:"auto"},Z||N?{open:!1}:{open:dt,onOpenChange:ot},{content:(0,l.jsx)("div",{className:fe.calendarWrapper,"data-size":Re,children:(0,l.jsx)(y.V,{mode:$e,size:Re,value:C,showSeconds:Ct,onChangeValue:k,buildCellProps:ct,navigationStartRef:kt,onFocusLeave:g,locale:X.Xn,"data-test-id":"field-date__calendar",fitToContainer:!1})}),children:(0,l.jsx)(ee.V,{className:fe.container,size:Re,validationState:vt,disabled:N,readonly:Z,variant:me.aJ.SingleLine,focused:dt,inputRef:se,postfix:r,children:(0,l.jsx)(W.K,{ref:(0,j.A)(re,se),"data-size":Re,value:St||"",placeholder:s,onChange:Ft,onFocus:m.onFocus,onMouseDown:m.onMouseDown,onBlur:v,onKeyDown:c,onClick:x,disabled:N,readonly:Z,tabIndex:i,type:"text",inputMode:"numeric",id:D,name:F,autoFocus:_t,"data-test-id":"field-date__input"})})}))}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSecure/FieldSecure.js"(ne,L,e){e.d(L,{S:()=>P});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),y=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"),S=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),te=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),G=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js"),E=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js");function ce({children:D,skeleton:F,loading:C}){return(0,E.v)(C)?(0,l.jsx)(G.Q,{loading:!0,children:F}):(0,l.jsx)(l.Fragment,{children:D})}var A=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js"),W=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),le=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),me=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),X=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),ee=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),He=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),Le=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/eye/index.js"),Ae=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/eyeClosed/index.js"),Ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),he=e.n(Ke),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),we=e.n(T),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=e.n(J),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(h),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),be=e.n(z),je=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Se=e.n(je),V=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonHideValue/styles.module.css"),B={};B.styleTagTransform=Se(),B.setAttributes=M(),B.insert=H().bind(null,"head"),B.domAPI=we(),B.insertStyleElement=be();var Oe=he()(V.A,B);const _e=V.A&&V.A.locals?V.A.locals:void 0,$=(0,d.forwardRef)(({size:D,onClick:F,hidden:C,disabled:N,tabIndex:Z=-1,onKeyDown:ye},De)=>{const Ie=ze=>{N||(ze.stopPropagation(),F(ze))};return(0,l.jsx)("button",{className:_e.buttonHideValue,"data-size":D,"data-disabled":N||void 0,disabled:N,onClick:Ie,"data-test-id":"button-hide-value",ref:De,onKeyDown:ye,type:"button",tabIndex:N?-1:Z,children:C?(0,l.jsxs)(l.Fragment,{children:[D===O.Vp.S&&(0,l.jsx)(Le.A,{size:16}),D===O.Vp.M&&(0,l.jsx)(Le.A,{})]}):(0,l.jsxs)(l.Fragment,{children:[D===O.Vp.S&&(0,l.jsx)(Ae.A,{size:16}),D===O.Vp.M&&(0,l.jsx)(Ae.A,{})]})})});var oe=function(D,F){var C={};for(var N in D)Object.prototype.hasOwnProperty.call(D,N)&&F.indexOf(N)<0&&(C[N]=D[N]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Z=0,N=Object.getOwnPropertySymbols(D);Z<N.length;Z++)F.indexOf(N[Z])<0&&Object.prototype.propertyIsEnumerable.call(D,N[Z])&&(C[N[Z]]=D[N[Z]]);return C};function fe({hideButtonRef:D,showHideButton:F,size:C,toggleHidden:N,hidden:Z,disabled:ye}){const De=(0,He.A)(N);return(0,d.useMemo)(()=>({id:"hide",active:!0,ref:D,show:F,render:Ie=>{var{key:ze}=Ie,Pe=oe(Ie,["key"]);const ie=Y=>{Pe.onClick(Y),De(Y)};return(0,l.jsx)($,Object.assign({},Pe,{size:O._h[C],onClick:ie,hidden:Z,disabled:ye}),ze)}}),[ye,Z,D,F,C,De])}var R=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),Q=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),Ee=function(D,F,C,N){function Z(ye){return ye instanceof C?ye:new C(function(De){De(ye)})}return new(C||(C=Promise))(function(ye,De){function Ie(ie){try{Pe(N.next(ie))}catch(Y){De(Y)}}function ze(ie){try{Pe(N.throw(ie))}catch(Y){De(Y)}}function Pe(ie){ie.done?ye(ie.value):Z(ie.value).then(Ie,ze)}Pe((N=N.apply(D,F||[])).next())})},re=function(D,F){var C={};for(var N in D)Object.prototype.hasOwnProperty.call(D,N)&&F.indexOf(N)<0&&(C[N]=D[N]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Z=0,N=Object.getOwnPropertySymbols(D);Z<N.length;Z++)F.indexOf(N[Z])<0&&Object.prototype.propertyIsEnumerable.call(D,N[Z])&&(C[N[Z]]=D[N[Z]]);return C};const P=(0,d.forwardRef)((D,F)=>{var{id:C,name:N,value:Z,placeholder:ye,maxLength:De,disabled:Ie=!1,readonly:ze=!1,showCopyButton:Pe=!0,allowMoreThanMaxLength:ie=!1,hidden:Y,onHiddenChange:de,showHintIcon:Te,onChange:ae,onFocus:ue,onBlur:nt,className:qe,label:Xe,labelTooltip:Je,labelTooltipPlacement:Re,required:et=!1,caption:ct,hint:rt,size:$e=O.SK.S,validationState:ut=le.sv.Default,prefixIcon:_t,error:at,asyncValueGetter:jt,autoComplete:ot,autoFocus:se,onCopyButtonClick:Ne}=D,tt=re(D,["id","name","value","placeholder","maxLength","disabled","readonly","showCopyButton","allowMoreThanMaxLength","hidden","onHiddenChange","showHintIcon","onChange","onFocus","onBlur","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","size","validationState","prefixIcon","error","asyncValueGetter","autoComplete","autoFocus","onCopyButtonClick"]);const lt=(0,d.useRef)(null),dt=(0,d.useRef)(null),pt=(0,d.useRef)(null),[yt,At]=(0,d.useState)(!1),[Ct,vt]=(0,d.useState)(!1),[kt="",Lt]=(0,X.I)({value:Z,defaultValue:"",onChange:ae}),[ke=!0,Ue]=(0,X.I)({value:Y,defaultValue:!0,onChange:de}),mt=Pe&&!!kt&&ze&&!Ie,xt=!(ze&&!kt),gt=(0,R.t)({validationState:ut,error:at}),zt=()=>Ee(void 0,void 0,void 0,function*(){if(!yt&&jt){vt(!0);try{const s=yield jt();return At(!0),Lt(s),{success:!0,value:s}}catch(s){return{success:!1}}finally{vt(!1)}}return{success:!0}}),Rt=()=>{zt().then(({success:s})=>{s&&(Ue(!ke),ze||(0,y.z$)(()=>{var n;(n=lt.current)===null||n===void 0||n.focus(),(0,y.G8)(lt.current)}))})},St=(0,ee.x)({copyButtonRef:dt,showCopyButton:mt,size:$e,valueToCopy:kt,onValueRequest:zt,disabled:Ct,onCopyButtonClick:Ne}),Ft=fe({hideButtonRef:pt,showHideButton:xt,size:$e,toggleHidden:Rt,hidden:ke,disabled:Ie||Ct}),{postfixButtons:Ot,inputTabIndex:Wt,onInputKeyDown:t}=(0,S.C)({inputRef:lt,postfixButtons:(0,d.useMemo)(()=>[St,Ft],[St,Ft]),readonly:ze,submitKeys:["Enter","Space","Tab"]});return(0,l.jsx)(Q.m,Object.assign({className:qe,label:Xe,labelTooltip:Je,labelTooltipPlacement:Re,labelFor:C,required:et,caption:ct,length:De?{max:De,current:kt.length}:void 0,hint:rt,disabled:Ie,readonly:ze,showHintIcon:Te,size:$e,error:at,validationState:gt},(0,W.z7)(tt),{children:(0,l.jsx)(me.V,{size:$e,validationState:gt,disabled:Ie,readonly:ze,variant:le.aJ.SingleLine,inputRef:lt,prefix:_t,postfix:Ot,children:(0,l.jsx)(ce,{skeleton:(0,l.jsx)(A.E,{width:"100%",borderRadius:2}),loading:Ct,children:(0,l.jsx)(te.K,{ref:(0,j.A)(F,lt),"data-size":$e,value:kt,onChange:Lt,onFocus:ue,onBlur:nt,onKeyDown:t,tabIndex:Wt,placeholder:ye,disabled:Ie,readonly:ze,type:ke?"password":"text",maxLength:ie?void 0:De||void 0,id:C,name:N,autoComplete:ot,autoFocus:se,"data-test-id":"field-secure__input"})})})}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/FieldSelect.js"(ne,L,e){e.d(L,{H:()=>g});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),O=e.n(d),y=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),S=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),te=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"),G=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/WithTooltip/WithTooltip.js"),E=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),ce=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js");const A={Neutral:"neutral",Primary:"primary",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink"},W={Xs:"xs",S:"s"},le={[W.Xs]:16,[W.S]:24};var me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=e.n(me),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),He=e.n(ee),Le=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Ae=e.n(Le),Ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),he=e.n(Ke),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),we=e.n(T),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),H=e.n(J),h=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.20_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"),M={};M.styleTagTransform=H(),M.setAttributes=he(),M.insert=Ae().bind(null,"head"),M.domAPI=He(),M.insertStyleElement=we();var z=X()(h.A,M);const be=h.A&&h.A.locals?h.A.locals:void 0;var je=function(c,u){var m={};for(var v in c)Object.prototype.hasOwnProperty.call(c,v)&&u.indexOf(v)<0&&(m[v]=c[v]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,v=Object.getOwnPropertySymbols(c);x<v.length;x++)u.indexOf(v[x])<0&&Object.prototype.propertyIsEnumerable.call(c,v[x])&&(m[v[x]]=c[v[x]]);return m};function Se(c){return"changeRestrictTooltipState"in c&&c.changeRestrictTooltipState!==void 0}function V(c){const{label:u,size:m=W.Xs,appearance:v=A.Neutral,onDelete:x,className:w,tabIndex:K}=c,pe=je(c,["label","size","appearance","onDelete","className","tabIndex"]),Ve=(0,j.useRef)(null),xe=!!x,Ce=Tt=>{if(xe&&Se(c)){const{changeRestrictTooltipState:Dt}=c;Dt(Tt)}},Be=Tt=>{var Dt;!((Dt=Ve.current)===null||Dt===void 0)&&Dt.contains(Tt.target)&&Ce(!0)},Ye=()=>{Ce(!1)};return(0,l.jsxs)("span",Object.assign({},(0,ce.z7)(pe),{className:O()(be.tag,w),"data-size":m,"data-appearance":v,"data-removable":xe,onMouseEnter:Be,onMouseLeave:Ye,children:[(0,l.jsx)("span",{className:be.label,children:u}),xe&&(0,l.jsx)("button",{type:"button",className:be.tagButton,onClick:x,"data-test-id":"tag-remove-button",tabIndex:K,onMouseEnter:Be,onMouseLeave:Ye,ref:Ve,children:m===W.Xs?(0,l.jsx)(E.A,{size:le[m],className:be.icon}):(0,l.jsx)(E.A,{size:le[m],className:be.icon})})]}))}var B=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.20_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"),Oe={};Oe.styleTagTransform=H(),Oe.setAttributes=he(),Oe.insert=Ae().bind(null,"head"),Oe.domAPI=He(),Oe.insertStyleElement=we();var _e=X()(B.A,Oe);const $=B.A&&B.A.locals?B.A.locals:void 0;var oe=function(c,u){var m={};for(var v in c)Object.prototype.hasOwnProperty.call(c,v)&&u.indexOf(v)<0&&(m[v]=c[v]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,v=Object.getOwnPropertySymbols(c);x<v.length;x++)u.indexOf(v[x])<0&&Object.prototype.propertyIsEnumerable.call(c,v[x])&&(m[v[x]]=c[v[x]]);return m};function fe(c){var{label:u,size:m=W.Xs,appearance:v=A.Neutral,className:x,tabIndex:w,href:K,onClick:pe,target:Ve}=c,xe=oe(c,["label","size","appearance","className","tabIndex","href","onClick","target"]);return(0,l.jsx)("a",Object.assign({},(0,ce.z7)(xe),{className:O()($.tag,x),"data-size":m,"data-appearance":v,tabIndex:w,href:K,target:Ve,onClick:pe,children:(0,l.jsx)("span",{className:$.label,children:u})}))}function R(c){return"href"in c&&c.href!==void 0}function Q(c){return"tooltip"in c&&c.tooltip!==void 0}function Ee(c){const[u,m]=(0,j.useState)(!1),v=R(c);if(!Q(c))return v?(0,l.jsx)(fe,Object.assign({},c)):(0,l.jsx)(V,Object.assign({},c));const{tooltip:x}=c,w=x&&Object.assign(Object.assign({},x),{open:u?!1:x.open}),K=Object.assign(Object.assign({},c),{changeRestrictTooltipState:m});return(0,l.jsx)(G.k,{tooltip:w,children:v?(0,l.jsx)(fe,Object.assign({},c)):(0,l.jsx)(V,Object.assign({},K))})}var re=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),P=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),D=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),F=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),C=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"),N=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"),Z=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),ye=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js");function De({error:c,required:u,readonly:m,label:v,labelTooltip:x,labelTooltipPlacement:w,labelFor:K,caption:pe,hint:Ve,disabled:xe,showHintIcon:Ce,size:Be,validationState:Ye,className:Tt}){return{error:c,required:u,readonly:m,label:v,labelTooltip:x,labelTooltipPlacement:w,labelFor:K,caption:pe,hint:Ve,disabled:xe,showHintIcon:Ce,size:Be,validationState:Ye,className:Tt}}var Ie=e("./node_modules/.pnpm/fuzzy-search@3.2.1/node_modules/fuzzy-search/src/FuzzySearch.js"),ze=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),Pe=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),ie=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),Y=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),de,Te,ae,ue;function nt({items:c,openCollapsedItems:u}){let m=[],v=[],x=[],w=[];return c.forEach(K=>{var pe;if((de(K)&&!K.inactive||Te(K)||ae(K))&&!K.disabled&&(v=v.concat([K]),x=x.concat([(pe=K.id)!==null&&pe!==void 0?pe:""]),K.itemRef&&(m=m.concat([K.itemRef]))),Te(K)&&K.id&&!K.disabled&&(w=w.concat(K.id)),ue(K)){const{itemRefs:Ve,ids:xe}=nt({items:K.items,openCollapsedItems:u});x=x.concat(xe),m=m.concat(Ve)}if(ae(K)&&K.id&&u.includes(K.id)){const{itemRefs:Ve,ids:xe,items:Ce,expandedIds:Be}=nt({items:K.items,openCollapsedItems:u});x=x.concat(xe),v=v.concat(Ce),m=m.concat(Ve),w=w.concat(Be)}}),{items:c,itemRefs:m,ids:x,expandedIds:w}}function qe(c){return c.reduce((u,m)=>ue(m)?u.concat(qe(m.items)):m.id?u.concat([m.id]):u,[])}function Xe({items:c}){return c.filter(u=>(0,ie.gZ)(u)||(0,ie.pN)(u)||(0,ie.jQ)(u)||(0,ie.Xy)(u)&&!u.disabled&&!u.inactive).reduce((u,m)=>{var v;return(0,ie.gZ)(m)||(0,ie.pN)(m)?u.concat([(v=m.id)!==null&&v!==void 0?v:""]).concat(Xe({items:m.items})):(0,ie.jQ)(m)?u.concat(Xe({items:m.items})):m.id&&!(0,ie.jQ)(m)?u.concat([m.id]):u},[])}function Je({items:c}){return c.filter(u=>ae(u)||Te(u)||ue(u)||de(u)&&!u.inactive).reduce((u,m)=>{var v;return ae(m)||Te(m)?u.concat([(v=m.id)!==null&&v!==void 0?v:""]).concat(Je({items:m.items})):ue(m)?u.concat(Je({items:m.items})):m.id&&!ue(m)?u.concat([m.id]):u},[])}function Re(c){const u=[];function m(v){if((0,ie.jQ)(v)||u.push(v),"items"in v)for(const x of v.items)m(x)}for(const v of c)m(v);return u}function et(c){return!("options"in c)}function ct(c){return"options"in c&&c.type==="collapse"}function rt(c){return"options"in c&&c.type==="next-list"}function $e(c){return"options"in c&&c.type==="group"}function ut(c){return"selection"in c&&c.selection==="multiple"}function _t(c){return"selection"in c&&c.selection==="single"||c.selection===void 0}function at(c,u){const m=u.split("."),v=m[0];if(!c[v])return"";if(m.length>1)return at(c[v],m.slice(1,m.length).join("."));if(u in c){const x=c[u];if(typeof x=="string"||typeof x=="number")return x.toString()||""}return""}const jt=c=>c.id!==void 0,ot=c=>c.type==="group";function se(c,u){const m=Array(u.length);return c.forEach(v=>{if(jt(v)&&v.id){const x=u.indexOf(v.id);if(x!==-1){m[x]=v;return}}if(ot(v)){const x=se(v.items,u);x.length&&m.push(Object.assign(Object.assign({},v),{items:x}));return}}),m.filter(Boolean)}function Ne({setOpen:c,inputKeyDownNavigationHandler:u,onInputKeyDownProp:m}){return(0,j.useCallback)(v=>x=>{x.code==="Space"?x.stopPropagation():v==null||v(x),x.code==="ArrowUp"&&c(!1),["ArrowUp","ArrowDown"].includes(x.key)&&x.preventDefault(),x.key==="Tab"&&c(!1),u(x),m==null||m(x)},[u,m,c])}function tt({readonly:c,showClearButton:u,showCopyButton:m,size:v,onClear:x,onCopyButtonClick:w,inputRef:K,valueToCopy:pe=""}){const Ve=(0,j.useRef)(null),xe=(0,j.useRef)(null),Ce=[xe.current,Ve.current],Be=(0,ze.r)({clearButtonRef:Ve,showClearButton:!c&&u,size:v,onClear:x}),Ye=(0,Y.x)({copyButtonRef:xe,showCopyButton:c&&m,size:v,valueToCopy:pe,onCopyButtonClick:w}),{onInputKeyDown:Tt,postfixButtons:Dt}=(0,Pe.C)({inputRef:K,postfixButtons:(0,j.useMemo)(()=>[Be,Ye],[Be,Ye]),onButtonKeyDown:void 0,readonly:c,submitKeys:["Enter","Space","Tab"]});return{postfixButtons:Dt,inputKeyDownNavigationHandler:Tt,buttonsRefs:Ce}}function lt({value:c,onChange:u,defaultValue:m,selectedOptionFormatter:v,resetSearchOnOptionSelection:x=!0}){const[w="",K]=(0,F.I)({value:c,onChange:u,defaultValue:m}),pe=(0,j.useRef)(w),Ve=(0,j.useCallback)(Ce=>{const Be=v(Ce);x&&(w!==Be||pe.current!==Be)&&(K(Be),pe.current=Be)},[w,x,v,K]),xe=(0,j.useCallback)(Ce=>{const Be=pe.current&&Ce.includes(pe.current)?Ce.replace(pe.current,""):Ce;K(Be)},[K]);return{inputValue:w,setInputValue:xe,prevInputValue:pe,onInputValueChange:xe,updateInputValue:Ve}}function dt(c){return(0,j.useCallback)(u=>m=>{var v;if(m==null||m.stopPropagation(),!!u){if((0,ie.gZ)(u)||(0,ie.pN)(u)){const x=Xe({items:u.items}).concat((v=u.id)!==null&&v!==void 0?v:"");c(w=>w==null?void 0:w.filter(K=>!x.includes(K!=null?K:"")));return}et(u)&&c(x=>x==null?void 0:x.filter(w=>w!==u.id))}},[c])}const pt=1,yt=["content.option","content.caption","content.description"];function At(c,u=!0){const m=(0,j.useMemo)(()=>{const{flattenItems:w}=(0,ie.lg)({items:c});return Object.values(w)},[c]),v=(0,j.useCallback)(w=>u?new Ie.A(m,yt,{sort:!0}).search(w):m.filter(pe=>[...yt,"label"].some(Ve=>at(pe,Ve).toLowerCase().includes(w.toLowerCase()))),[u,m]),x=(0,j.useCallback)(w=>{const K=v(w).map(pe=>pe.id);return se(c,K)},[v,c]);return(0,j.useCallback)(w=>w.length>=pt?x(w):c,[x,c])}var Ct=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/hooks/customOption.js"),vt=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/styles.module.css"),kt={};kt.styleTagTransform=H(),kt.setAttributes=he(),kt.insert=Ae().bind(null,"head"),kt.domAPI=He(),kt.insertStyleElement=we();var Lt=X()(vt.A,kt);const ke=vt.A&&vt.A.locals?vt.A.locals:void 0;var Ue,mt=function(c,u){var m={};for(var v in c)Object.prototype.hasOwnProperty.call(c,v)&&u.indexOf(v)<0&&(m[v]=c[v]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,v=Object.getOwnPropertySymbols(c);x<v.length;x++)u.indexOf(v[x])<0&&Object.prototype.propertyIsEnumerable.call(c,v[x])&&(m[v[x]]=c[v[x]]);return m};function xt(c){return c.map(u=>{if(ct(u)||rt(u)){const{description:xe,option:Ce,caption:Be,options:Ye,value:Tt}=u,Dt=mt(u,["description","option","caption","options","value"]);return Object.assign(Object.assign({"data-test-id":"field-select__list-option-"+u.value},Dt),{id:Tt,content:{option:Ce,caption:Be,description:xe},items:xt(Ye)})}if($e(u)){const{options:xe}=u,Ce=mt(u,["options"]);return Object.assign(Object.assign({},Ce),{items:xt(xe)})}const m=u,{description:v,option:x,caption:w,value:K,appearance:pe}=m,Ve=mt(m,["description","option","caption","value","appearance"]);return Object.assign(Object.assign({"data-test-id":"field-select__list-option-"+u.value},Ve),{id:K,appearance:pe,content:{option:x,caption:w,description:v}})})}function gt(c,u){const m=Ue(c);if(!u)return[void 0,void 0];const v=m.find(w=>String(w.id)===String(u)),x={id:u,content:{option:String(u)}};return[v,v?void 0:x]}function zt(c,u){const m=Ue(c);if(!u||!(u!=null&&u.length))return[void 0,void 0];let v,x;return u.forEach(w=>{if(m){const[K,pe]=gt(m,w);(K||v)&&(v=(v!=null?v:[]).concat(K!=null?K:[])),(pe||x)&&(x=(x!=null?x:[]).concat(pe!=null?pe:[]))}}),[v,x]}function Rt(c){return{id:c,content:{option:String(c)},placeholder:!0}}function St({options:c,value:u,selectedItem:m}){if(c.length<1)return{selectedItem:void 0,items:[]};const v=xt(c);if(u===void 0)return{selectedItem:void 0,items:v};let x=v,w=m;const K=Re(v).find(pe=>pe.id===u);return K?w=K:m&&(m==null?void 0:m.id)===u?x=[m,...x]:(w=Rt(u),x=[w,...x]),{selectedItem:w,items:x}}function Ft({options:c,value:u,selectedItems:m}){if(c.length<1)return{selectedItems:void 0,items:[]};const v=xt(c);if(!u||!u.length)return{selectedItems:void 0,items:v};const x=[];let w=v,K=m;const pe=Re(v),Ve=pe.filter(Ce=>{if(u.includes(Ce.id)&&!x.includes(Ce.id))return x.push(Ce.id),!0}),xe=u.filter(Ce=>!pe.find(Be=>Be.id===Ce));if(xe.length){const Ce=xe.map(Be=>(m==null?void 0:m.find(Ye=>Ye.id===Be))||Rt(Be));K=[...Ve,...Ce],w=[...Ce,...w]}else K=Ve;return{selectedItems:K.sort((Ce,Be)=>Be.disabled&&!Ce.disabled?1:Ce.disabled&&!Be.disabled?-1:0),items:w}}var Ot=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/utils/getArrowIcon.js"),Wt=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/utils/customOption.js");function t({autocomplete:c,searchable:u,isSameValue:m}){return c||!u||m}function s({dataError:c,noDataState:u,noResultsState:m,errorDataState:v,dataFiltered:x,loading:w,footer:K,widthStrategy:pe,scrollToSelectedItem:Ve,virtualized:xe,scrollRef:Ce,scrollContainerRef:Be,onScroll:Ye}){return{dataError:c,noDataState:u,noResultsState:m,errorDataState:v,dataFiltered:x,loading:w,footer:K,widthStrategy:pe,scrollToSelectedItem:Ve,scrollRef:Ce,scrollContainerRef:Be,onScroll:Ye,trigger:"clickAndFocusVisible",placement:"bottom","data-test-id":"field-select__list",virtualized:xe,scroll:!0,marker:!0}}var n=function(c,u){var m={};for(var v in c)Object.prototype.hasOwnProperty.call(c,v)&&u.indexOf(v)<0&&(m[v]=c[v]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,v=Object.getOwnPropertySymbols(c);x<v.length;x++)u.indexOf(v[x])<0&&Object.prototype.propertyIsEnumerable.call(c,v[x])&&(m[v[x]]=c[v[x]]);return m};const o=4,r=c=>(c==null?void 0:c.content.option)||"",i=(0,j.forwardRef)((c,u)=>{var m;const{id:v,name:x,placeholder:w,size:K="s",options:pe,value:Ve,defaultValue:xe,onChange:Ce,disabled:Be=!1,readonly:Ye=!1,searchable:Tt=!0,showClearButton:Dt=!0,onKeyDown:ss,validationState:os="default",search:Ht,autocomplete:Jt=!1,prefixIcon:as,prefix:is,postfix:We,removeByBackspace:Qe=!1,addOptionByEnter:vs=!1,addCustomOptionTriggers:us,untouchableScrollbars:Is=!1,open:Ts,enableFuzzySearch:Fs=!0,resetSearchOnOptionSelection:ps=!0,onOpenChange:xs,selectedOptionFormatter:ls=r,autoFocus:Zs}=c,rs=n(c,["id","name","placeholder","size","options","value","defaultValue","onChange","disabled","readonly","searchable","showClearButton","onKeyDown","validationState","search","autocomplete","prefixIcon","prefix","postfix","removeByBackspace","addOptionByEnter","addCustomOptionTriggers","untouchableScrollbars","open","enableFuzzySearch","resetSearchOnOptionSelection","onOpenChange","selectedOptionFormatter","autoFocus"]),Bt=(0,j.useRef)(null),Gt=(0,j.useRef)(null),Et=(0,j.useRef)(null),[Zt=!1,Qt]=(0,F.I)({value:Ts,onChange:xs}),[Vt,It]=(0,F.I)({value:Ve,defaultValue:xe,onChange:Ce}),[{selectedItems:Nt,items:As=[]},ms]=(0,j.useState)(()=>Ft({options:pe,value:Vt,currentItems:[],selectedItems:void 0})),{inputValue:$t,setInputValue:Hs,prevInputValue:js,updateInputValue:qt}=lt(Object.assign(Object.assign({},Ht),{defaultValue:"",selectedOptionFormatter:ls,resetSearchOnOptionSelection:ps})),{resolvedAddCustomOptionTriggers:ds,tryCommitCustomOptionFromInput:_s}=(0,Ct.Q)({addCustomOptionTriggers:us,addOptionByEnter:vs,inputValue:$t,value:Vt,setValue:It,updateInputValue:qt}),Ss=(0,C.M)({prefix:is,disabled:Be}),Os=(0,N.$)({postfix:We,disabled:Be});(0,re.N)(()=>{ms(({selectedItems:Ge})=>Ft({options:pe,value:Vt,selectedItems:Ge}))},[pe,Vt]);const gs=()=>{var Ge;It(Nt==null?void 0:Nt.filter(st=>st.disabled).map(st=>st.id)),(Ge=Bt.current)===null||Ge===void 0||Ge.focus(),rs.required&&Qt(!0)},{ArrowIcon:Ds,arrowIconSize:Ns}=(0,Ot.n)({size:K,open:Zt}),{postfixButtons:Bs,inputKeyDownNavigationHandler:Ws,buttonsRefs:fs}=tt({readonly:Ye,size:K,showClearButton:Dt&&!Be&&!Ye&&!!(Nt!=null&&Nt.find(Ge=>!Ge.disabled)),showCopyButton:!1,inputRef:Bt,onClear:gs}),Es=Ne({inputKeyDownNavigationHandler:Ws,onInputKeyDownProp:ss,setOpen:Qt}),hs=dt(It),Ms=(0,j.useCallback)(Ge=>()=>{var st;hs(Ge)(),(st=Bt.current)===null||st===void 0||st.focus()},[hs]),Ks=Ge=>st=>{if(Qe&&st.code==="Backspace"&&$t===""&&Nt!=null&&Nt.length&&!Nt.slice(-1)[0].disabled&&hs(Nt.pop())(),st.code==="Enter")st.stopPropagation(),st.preventDefault(),_s("enter");else{const es=(0,Wt.p)(st.code);(0,Wt.O)(es,ds)&&(st.stopPropagation(),st.preventDefault(),_s(es))}!Zt&&js.current!==$t&&Qt(!0),Es(Ge)(st)},Us=Ge=>{(0,P.B)()&&!Ye&&!Be&&!fs.includes(document.activeElement)&&(Qt(Ge),Ge||Gt.current&&(Gt.current.style.width=o+"px"),Ge&&Gt.current&&(Gt.current.style.width="unset"))},Vs=Ge=>{var st;!Zt&&!fs.filter(Boolean).includes(Ge.relatedTarget)&&(_s("blur"),qt(),(st=rs==null?void 0:rs.onBlur)===null||st===void 0||st.call(rs,Ge))},Gs=At(As,Fs),Ls=t({autocomplete:Jt,searchable:Tt,isSameValue:js.current===$t})?As:Gs($t),cs=(0,Z.t)({validationState:os,error:rs.error}),ns=(0,j.useRef)(null),ht=(0,j.useRef)(Vt);return ht.current=Vt,(0,j.useEffect)(()=>{var Ge,st;ns.current&&((Ge=(st=ns.current).__snackApi)!==null&&Ge!==void 0||(st.__snackApi={}),ns.current.__snackApi.setSelectValue=es=>{It(es)},ns.current.__snackApi.getSelectValue=()=>ht.current)},[It]),(0,l.jsx)(ye.m,Object.assign({},(0,ce.z7)(rs),De(c),{validationState:cs,"data-snack-api":"field-select",ref:ns,children:(0,l.jsx)(te.i,Object.assign({},s(c),{items:Ls,triggerElemRef:Bt,trigger:"click",selection:{mode:"multiple",value:Vt,onChange:Ge=>{var st;It(Ge),$t&&((st=Bt.current)===null||st===void 0||st.focus(),qt())}},dataFiltered:(m=rs.dataFiltered)!==null&&m!==void 0?m:!!$t.length,untouchableScrollbars:Is,size:K,open:!Be&&!Ye&&Zt,onOpenChange:Us,children:({onKeyDown:Ge})=>{var st,es,Cs,Ps;return(0,l.jsx)(D.V,{className:O()(ke.container,ke.tagContainer),validationState:cs,disabled:Be,readonly:Ye,focused:Zt,variant:"single-line-container",inputRef:Bt,size:K,prefix:(as||Ss.show)&&(0,l.jsxs)(l.Fragment,{children:[as,Ss.show&&Ss.render({key:Ss.id})]}),children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:ke.contentWrapper,ref:Et,children:[Nt&&Nt.map(bs=>{var Ys;return(0,l.jsx)(Ee,{size:K==="l"?"s":"xs",tabIndex:-1,label:ls(bs),appearance:(Ys=bs.appearance)!==null&&Ys!==void 0?Ys:"neutral",onDelete:!bs.disabled&&!Be&&!Ye?Ms(bs):void 0,className:ke.tag,"data-disabled":Be||void 0},bs.id)}),(0,l.jsx)("div",{className:ke.inputWrapper,style:{minWidth:Vt?Math.min((es=(st=Et.current)===null||st===void 0?void 0:st.clientWidth)!==null&&es!==void 0?es:o,(Ps=(Cs=Gt.current)===null||Cs===void 0?void 0:Cs.clientWidth)!==null&&Ps!==void 0?Ps:o):"100%"},children:(0,l.jsx)(S.K,{id:v,name:x,type:"text",disabled:Be,placeholder:!Nt||!Nt.length?w:void 0,ref:(0,y.A)(u,Bt),onChange:Tt?Hs:void 0,value:Tt?$t:"",readonly:!Tt||Ye,onKeyDown:Ks(Ge),onBlur:Vs,className:O()({[ke.readonlyCursor]:!Tt}),autoFocus:Zs,"data-test-id":"field-select__input"})})]}),(0,l.jsxs)("div",{className:ke.postfix,children:[Bs,Os.show&&Os.render({key:Os.id}),(0,l.jsx)(Ds,{size:Ns,className:ke.arrowIcon})]}),(0,l.jsx)("span",{ref:Gt,className:ke.inputPlug,children:$t})]})})}}))}))});var p=function(c,u){var m={};for(var v in c)Object.prototype.hasOwnProperty.call(c,v)&&u.indexOf(v)<0&&(m[v]=c[v]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,v=Object.getOwnPropertySymbols(c);x<v.length;x++)u.indexOf(v[x])<0&&Object.prototype.propertyIsEnumerable.call(c,v[x])&&(m[v[x]]=c[v[x]]);return m};const f=c=>(c==null?void 0:c.content.option)||"",k=(0,j.forwardRef)((c,u)=>{const{id:m,name:v,placeholder:x,size:w="s",options:K,value:pe,defaultValue:Ve,onChange:xe,disabled:Ce=!1,readonly:Be=!1,searchable:Ye=!0,showCopyButton:Tt=!0,showClearButton:Dt=!0,onKeyDown:ss,required:os=!1,validationState:Ht="default",search:Jt,autocomplete:as=!1,prefixIcon:is,prefix:We,postfix:Qe,addOptionByEnter:vs=!1,addCustomOptionTriggers:us,untouchableScrollbars:Is=!1,open:Ts,onOpenChange:Fs,selectedOptionFormatter:ps=f,enableFuzzySearch:xs=!0,resetSearchOnOptionSelection:ls=!0,onCopyButtonClick:Zs,autoFocus:rs}=c,Bt=p(c,["id","name","placeholder","size","options","value","defaultValue","onChange","disabled","readonly","searchable","showCopyButton","showClearButton","onKeyDown","required","validationState","search","autocomplete","prefixIcon","prefix","postfix","addOptionByEnter","addCustomOptionTriggers","untouchableScrollbars","open","onOpenChange","selectedOptionFormatter","enableFuzzySearch","resetSearchOnOptionSelection","onCopyButtonClick","autoFocus"]),Gt=(0,j.useRef)(null),[Et=!1,Zt]=(0,F.I)({value:Ts,onChange:Fs}),[Qt,Vt]=(0,F.I)({value:pe,defaultValue:Ve,onChange:xe}),[{selectedItem:It,items:Nt=[]},As]=(0,j.useState)(()=>St({options:K,value:Qt,currentItems:[],selectedItem:void 0})),{inputValue:ms,setInputValue:$t,prevInputValue:Hs,updateInputValue:js}=lt(Object.assign(Object.assign({},Jt),{defaultValue:ps(It),resetSearchOnOptionSelection:ls,selectedOptionFormatter:ps})),qt=(0,j.useRef)(It),ds=(0,C.M)({prefix:We,disabled:Ce}),_s=(0,N.$)({postfix:Qe,disabled:Ce});(0,re.N)(()=>{As(({selectedItem:ht})=>St({options:K,value:Qt,selectedItem:ht}))},[K,Qt]),(0,j.useEffect)(()=>{qt.current&&qt.current.id===(It==null?void 0:It.id)&&qt.current.content.option===(It==null?void 0:It.content.option)||(qt.current=It,js(It))},[It,qt]);const Ss=(0,j.useCallback)(()=>{var ht;Vt(void 0),$t(""),(ht=Gt.current)===null||ht===void 0||ht.focus(),os&&Zt(!0)},[os,$t,Zt,Vt]),{ArrowIcon:Os,arrowIconSize:gs}=(0,Ot.n)({size:w,open:Et}),{postfixButtons:Ds,inputKeyDownNavigationHandler:Ns,buttonsRefs:Bs}=tt({readonly:Be,size:w,showClearButton:Dt&&!Ce&&!Be&&Qt!==void 0&&It!==void 0,showCopyButton:Tt,inputRef:Gt,onClear:Ss,onCopyButtonClick:Zs,valueToCopy:ps(It)}),Ws=Ne({inputKeyDownNavigationHandler:Ns,onInputKeyDownProp:ss,setOpen:Zt}),fs=(0,j.useCallback)(ht=>{var Ge;Zt(!1),ht!==void 0&&((Ge=Gt.current)===null||Ge===void 0||Ge.focus(),Vt(ht))},[Zt,Vt]),{resolvedAddCustomOptionTriggers:Es,tryCommitCustomOptionFromInput:hs}=(0,Ct.a)({addCustomOptionTriggers:us,addOptionByEnter:vs,inputValue:ms,handleSelectionChange:fs}),Ms=ht=>{var Ge;!Et&&!Bs.filter(Boolean).includes(ht.relatedTarget)&&((0,Wt.O)("blur",Es)&&ms!==""?hs("blur"):js(It),(Ge=Bt==null?void 0:Bt.onBlur)===null||Ge===void 0||Ge.call(Bt,ht))},Ks=ht=>Ge=>{!Et&&Hs.current!==ms&&Zt(!0),Ge.code==="Enter"&&(Ge.stopPropagation(),Ge.preventDefault(),hs("enter")),Ws(ht)(Ge)},Us=ht=>{(0,P.B)()&&!Be&&!Ce&&!Bs.includes(document.activeElement)&&(Zt(ht),!ht&&!(0,Wt.O)("blur",Es)&&js(It))},Vs=At(Nt,xs),ws=t({autocomplete:as,searchable:Ye,isSameValue:ps(It)===ms})?Nt:Vs(ms),Ls=(0,Z.t)({validationState:Ht,error:Bt.error}),cs=(0,j.useRef)(null),ns=(0,j.useRef)(Qt);return ns.current=Qt,(0,j.useEffect)(()=>{var ht,Ge,st,es,Cs,Ps;cs.current&&((ht=(es=cs.current).__snackApi)!==null&&ht!==void 0||(es.__snackApi={}),(Ge=(Cs=cs.current.__snackApi).setSelectValue)!==null&&Ge!==void 0||(Cs.setSelectValue=bs=>{Vt(bs)}),(st=(Ps=cs.current.__snackApi).getSelectValue)!==null&&st!==void 0||(Ps.getSelectValue=()=>ns.current))},[Vt]),(0,l.jsx)(ye.m,Object.assign({},(0,ce.z7)(Bt),De(c),{validationState:Ls,"data-snack-api":"field-select",ref:cs,children:(0,l.jsx)(te.i,Object.assign({},s(c),{items:ws,selection:{mode:"single",value:Qt,onChange:fs},size:w,open:Et,onOpenChange:Us,trigger:"click",triggerElemRef:Gt,untouchableScrollbars:Is,children:({onKeyDown:ht})=>(0,l.jsxs)(D.V,{className:ke.container,validationState:Ls,disabled:Ce,readonly:Be,focused:Et,variant:"single-line-container",inputRef:Gt,size:w,prefix:(is||ds.show)&&(0,l.jsxs)(l.Fragment,{children:[is,ds.show&&ds.render({key:ds.id})]}),children:[(0,l.jsx)(S.K,{id:m,name:v,type:"text",disabled:Ce,placeholder:x,ref:(0,y.A)(u,Gt),onChange:Ye?$t:void 0,value:Ye?ms:ps(It),readonly:Be,"data-test-id":"field-select__input",onKeyDown:Ks(ht),onBlur:Ms,className:O()({[ke.readonlyCursor]:!Ye}),autoFocus:rs}),(0,l.jsxs)("div",{className:ke.postfix,children:[Ds,_s.show&&_s.render({key:_s.id}),(0,l.jsx)(Os,{size:gs,className:ke.arrowIcon})]})]})}))}))}),g=(0,j.forwardRef)((c,u)=>ut(c)?(0,l.jsx)(i,Object.assign({},c,{ref:u})):_t(c)?(0,l.jsx)(k,Object.assign({},c,{ref:u})):null)},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/hooks/customOption.js"(ne,L,e){e.d(L,{Q:()=>d,a:()=>O});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function j({addCustomOptionTriggers:y,addOptionByEnter:S}){return(0,l.useMemo)(()=>y!==void 0?y:S?["enter"]:[],[y,S])}function d({addCustomOptionTriggers:y,addOptionByEnter:S,inputValue:te,value:G,setValue:E,updateInputValue:ce}){const A=j({addCustomOptionTriggers:y,addOptionByEnter:S}),W=(0,l.useCallback)(le=>{!A.includes(le)||te===""||(G!=null?G:[]).includes(te)||(E(me=>(me!=null?me:[]).concat(te)),ce())},[A,te,G,E,ce]);return{resolvedAddCustomOptionTriggers:A,tryCommitCustomOptionFromInput:W}}function O({addCustomOptionTriggers:y,addOptionByEnter:S,inputValue:te,handleSelectionChange:G}){const E=j({addCustomOptionTriggers:y,addOptionByEnter:S}),ce=(0,l.useCallback)(A=>{!E.includes(A)||te===""||G(te)},[E,te,G]);return{resolvedAddCustomOptionTriggers:E,tryCommitCustomOptionFromInput:ce}}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/utils/customOption.js"(ne,L,e){e.d(L,{O:()=>j,p:()=>l});const l=d=>{switch(d){case"Enter":return"enter";case"Space":return"space";case"Comma":return"comma";default:return}},j=(d,O)=>d?O.includes(d):!1},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/utils/getArrowIcon.js"(ne,L,e){e.d(L,{n:()=>O});var l=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),j=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js");function O({size:y,open:S}){return{ArrowIcon:S?j.A:l.A,arrowIconSize:y===d.SK.S?d.Ev.Xs:d.Ev.S}}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSlider/FieldSlider.js"(ne,L,e){e.d(L,{w:()=>fe});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),y=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),S=e("./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/Slider.js"),te=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),G=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),E=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),ce=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),A=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),W=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"),le=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"),me=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js");const X=(R,Q)=>Q?typeof R=="number"?Q(R):R.map(Q).join(" \u2013 "):typeof R=="number"?String(R):R.join(" \u2013 ");function ee(R){return!!(R&&typeof R=="object"&&"label"in R)}const He=(R,Q)=>Math.abs(Q-R),Le=(R,Q,Ee)=>Q.reduce((re,P)=>{const D=He(R,Ee(P));return D<re.lowestDiff?{lowestDiff:D,mark:P}:re},{lowestDiff:He(R,Ee(Q[0])),mark:Q[0]}),Ae=(R,Q,Ee)=>{const re=[];let P=R;for(;P<=Q;)re.push(parseFloat(P.toFixed(10))),P+=Ee;return re};var Ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),he=e.n(Ke),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),we=e.n(T),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=e.n(J),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(h),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),be=e.n(z),je=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Se=e.n(je),V=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSlider/styles.module.css"),B={};B.styleTagTransform=Se(),B.setAttributes=M(),B.insert=H().bind(null,"head"),B.domAPI=we(),B.insertStyleElement=be();var Oe=he()(V.A,B);const _e=V.A&&V.A.locals?V.A.locals:void 0;var $=function(R,Q){var Ee={};for(var re in R)Object.prototype.hasOwnProperty.call(R,re)&&Q.indexOf(re)<0&&(Ee[re]=R[re]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,re=Object.getOwnPropertySymbols(R);P<re.length;P++)Q.indexOf(re[P])<0&&Object.prototype.propertyIsEnumerable.call(R,re[P])&&(Ee[re[P]]=R[re[P]]);return Ee};const oe=(R,Q,Ee,re)=>R?re||[Q,Ee]:re!=null?re:Q,fe=(0,d.forwardRef)((R,Q)=>{var{id:Ee,name:re,min:P,max:D,step:F,marks:C,showScaleBar:N=!0,value:Z,range:ye=!1,disabled:De=!1,readonly:Ie=!1,onChange:ze,onFocus:Pe,onBlur:ie,className:Y,label:de,labelTooltip:Te,labelTooltipPlacement:ae,required:ue,caption:nt,hint:qe,showHintIcon:Xe,size:Je=O.SK.S,textInputFormatter:Re,unbindInputFromMarks:et,postfixIcon:ct,prefix:rt,postfix:$e,autoFocus:ut}=R,_t=$(R,["id","name","min","max","step","marks","showScaleBar","value","range","disabled","readonly","onChange","onFocus","onBlur","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","size","textInputFormatter","unbindInputFromMarks","postfixIcon","prefix","postfix","autoFocus"]);const[at=oe(ye,P,D,Z),jt]=(0,A.I)({value:Z,defaultValue:oe(ye,P,D,Z),onChange:ze}),[ot,se]=(0,d.useState)(X(at,Re)),Ne=(0,d.useRef)(null),tt=(0,W.M)({prefix:rt,disabled:De}),lt=(0,le.$)({postfix:$e,disabled:De}),dt=(0,d.useCallback)(ke=>{const Ue=C[ke];return ee(Ue)?Ue.label:Ue},[C]),pt=(0,d.useMemo)(()=>Object.keys(C).every(ke=>ke===dt(ke)),[dt,C]),yt=ke=>{const Ue=parseFloat(ke);ke&&Number.isNaN(Ue)||se(ke)},At=ke=>{const Ue=St=>{se(String(dt(St))),jt(Number(St))},mt=Object.keys(C).map(St=>({key:St,value:parseFloat(String(dt(St)))})),xt=mt.find(St=>St.value===ke);if(xt){Ue(xt.key);return}const gt=parseFloat(String(dt(P))),zt=parseFloat(String(dt(D)));if(ke<gt){Ue(P);return}if(ke>zt){Ue(D);return}const{mark:Rt}=Le(ke,mt,St=>St.value);Ue(Rt.key)},Ct=ke=>{const Ue=gt=>{se(String(gt)),jt(gt)};if(ke<=P){Ue(P);return}if(ke>=D){Ue(D);return}if(F===null){const gt=Object.keys(C).map(Number);if(gt.includes(ke)){se(String(ke)),Ue(ke);return}const{mark:zt}=Le(ke,gt,Rt=>Rt);Ue(zt);return}const mt=Ae(P,D,F);if(mt.includes(ke)){Ue(ke);return}const{mark:xt}=Le(ke,mt,gt=>gt);Ue(xt)},vt=(0,te.A)(()=>{if(ye)return;const ke=parseFloat(ot),Ue=parseFloat(String(dt(P))),mt=Number.isNaN(Ue)?P:Ue,xt=ot?ke:mt;Number.isNaN(xt)||(pt||et?Ct(xt):At(xt))}),kt=ke=>{ie==null||ie(ke),vt()},Lt=ke=>{ke.key==="Enter"&&vt()};return(0,d.useEffect)(()=>{se(X(at,Re))},[at,Re]),(0,d.useEffect)(()=>{vt()},[C,P,D,vt]),(0,l.jsxs)(me.m,Object.assign({className:Y,label:de,labelTooltip:Te,labelTooltipPlacement:ae,labelFor:Ee,disabled:De,required:ue,caption:nt,hint:qe,showHintIcon:Xe,readonly:Ie,size:Je},(0,G.z7)(_t),{children:[(0,l.jsx)(ce.V,{className:_e.fieldContainer,size:Je,validationState:E.sv.Default,disabled:De,readonly:Ie,variant:E.aJ.SingleLine,inputRef:Ne,prefix:tt.show&&tt.render({key:tt.id}),postfix:(0,l.jsxs)(l.Fragment,{children:[lt.show&&lt.render({key:lt.id}),ct]}),children:(0,l.jsx)(y.K,{ref:(0,j.A)(Q,Ne),"data-size":Je,value:ot,onChange:ye?void 0:yt,onFocus:Pe,onBlur:ye?ie:kt,onKeyDown:Lt,disabled:De,readonly:ye?!0:Ie,type:"text",inputMode:"numeric",id:Ee,name:re,"data-test-id":"field-slider__input",autoFocus:ut})}),(0,l.jsx)("div",{className:_e.sliderWrapper,children:(0,l.jsx)("div",{className:_e.slider,"data-size":Je,children:(0,l.jsx)(S.A,{range:ye,min:P,max:D,step:F,value:at,onChange:jt,marks:N?C:void 0,disabled:Ie||De,"data-test-id":"field-slider__slider"})})})]}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldStepper/FieldStepper.js"(ne,L,e){e.d(L,{m:()=>re});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=e.n(j),O=e("./node_modules/.pnpm/decimal.js@10.6.0/node_modules/decimal.js/decimal.mjs"),y=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),S=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),te=e("./node_modules/.pnpm/@snack-uikit+button@0.19.18_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),G=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/minus/index.js"),E=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/plus/index.js"),ce=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),A=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),W=e("./node_modules/.pnpm/@snack-uikit+locale@0.16.0/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),le=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),me=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),X=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),ee=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),He=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),Le=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"),Ae=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"),Ke=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),he=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),we=e.n(T),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),H=e.n(J),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=e.n(h),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),be=e.n(z),je=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Se=e.n(je),V=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),B=e.n(V),Oe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldStepper/styles.module.css"),_e={};_e.styleTagTransform=B(),_e.setAttributes=be(),_e.insert=M().bind(null,"head"),_e.domAPI=H(),_e.insertStyleElement=Se();var $=we()(Oe.A,_e);const oe=Oe.A&&Oe.A.locals?Oe.A.locals:void 0;var fe=function(P,D){var F={};for(var C in P)Object.prototype.hasOwnProperty.call(P,C)&&D.indexOf(C)<0&&(F[C]=P[C]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var N=0,C=Object.getOwnPropertySymbols(P);N<C.length;N++)D.indexOf(C[N])<0&&Object.prototype.propertyIsEnumerable.call(P,C[N])&&(F[C[N]]=P[C[N]]);return F};const R=2e3,Q=(P,D)=>P>0?P:D<0?D:0,Ee={s:8,m:9,l:10},re=(0,S.forwardRef)((P,D)=>{var{id:F,name:C,value:N,min:Z=Number.NEGATIVE_INFINITY,max:ye=Number.POSITIVE_INFINITY,plusButtonTooltip:De,minusButtonTooltip:Ie,step:ze=1,disabled:Pe=!1,readonly:ie=!1,allowMoreThanLimits:Y=!0,onChange:de,onFocus:Te,onBlur:ae,className:ue,label:nt,labelTooltip:qe,labelTooltipPlacement:Xe,required:Je=!1,caption:Re,hint:et,showHintIcon:ct,size:rt=ce.SK.S,validationState:$e=X.sv.Default,error:ut,prefix:_t,postfix:at,autoFocus:jt}=P,ot=fe(P,["id","name","value","min","max","plusButtonTooltip","minusButtonTooltip","step","disabled","readonly","allowMoreThanLimits","onChange","onFocus","onBlur","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","size","validationState","error","prefix","postfix","autoFocus"]);const{t:se}=(0,W.Ym)("Fields"),[Ne=0,tt]=(0,He.I)({value:N,defaultValue:Q(Z,ye),onChange:de}),[lt,dt]=(0,S.useState)(!1),[pt,yt]=(0,S.useState)(""),At=(0,S.useRef)(),Ct=(0,S.useRef)(null),vt=typeof Z=="number"&&Ne<=Z||ie||Pe,kt=typeof ye=="number"&&Ne>=ye||ie||Pe,Lt=(0,Le.M)({prefix:_t,disabled:Pe}),ke=(0,Ae.$)({postfix:at,disabled:Pe}),Ue=(0,Ke.t)({validationState:$e,error:ut}),mt=t=>{tt(t),dt(!0),At.current=setTimeout(()=>{dt(!1),yt("")},R)};(0,S.useEffect)(()=>()=>{clearTimeout(At.current)},[]);const xt=t=>{Y||(ye!==void 0&&Ne>ye&&(yt(`${se("limitTooltip.max")}${ye}`),mt(ye)),Z!==void 0&&Ne<Z&&(yt(`${se("limitTooltip.min")}${Z}`),mt(Z))),ae==null||ae(t)},gt=t=>{clearTimeout(At.current),dt(!1),yt(""),Te==null||Te(t)},zt=(t,s)=>tt(Number(t),s),Rt=()=>{},St=t=>{t.preventDefault(),t.stopPropagation();const s=new O.A(Ne).minus(ze).toNumber();tt(Math.min(Math.max(Z,s),ye))},Ft=t=>{t.preventDefault(),t.stopPropagation();const s=new O.A(Ne).plus(ze).toNumber();tt(Math.max(Math.min(ye,s),Z))},Ot=()=>{},Wt=()=>{};return(0,l.jsx)(he.m,Object.assign({className:ue,label:nt,labelTooltip:qe,labelTooltipPlacement:Xe,labelFor:F,required:Je,caption:Re,hint:et,disabled:Pe,readonly:ie,showHintIcon:ct,size:rt,validationState:Ue,error:ut},(0,me.z7)(ot),{children:(0,l.jsx)(le.m,{tip:pt,open:Y?!1:lt,"data-test-id":"field-stepper__limit-tooltip",triggerClassName:oe.trigger,children:(0,l.jsx)(ee.V,{size:rt,validationState:Ue,disabled:Pe,readonly:ie,variant:X.aJ.SingleLine,inputRef:Ct,prefix:(0,l.jsx)(le.m,Object.assign({},Ie,{open:Ie?Ie==null?void 0:Ie.open:!1,tip:Ie==null?void 0:Ie.tip,"data-test-id":"field-stepper__minus-button-tooltip",children:(0,l.jsx)(te.b,{tabIndex:-1,size:"xs",className:oe.button,icon:(0,l.jsx)(G.A,{}),onClick:St,onKeyDown:Ot,disabled:vt,"data-test-id":"field-stepper__minus-button"})})),postfix:(0,l.jsx)(le.m,Object.assign({},De,{open:De?De==null?void 0:De.open:!1,tip:De==null?void 0:De.tip,"data-test-id":"field-stepper__plus-button-tooltip",children:(0,l.jsx)(te.b,{tabIndex:-1,size:"xs",className:oe.button,icon:(0,l.jsx)(E.A,{}),onClick:Ft,onKeyDown:Wt,disabled:kt,"data-test-id":"field-stepper__plus-button"})})),children:(0,l.jsxs)("div",{className:oe.wrap,children:[(0,l.jsx)("div",{className:d()({[oe.prefixWrapper]:Lt.show}),children:Lt.show&&Lt.render({key:Lt.id})}),(0,l.jsx)("div",{style:{width:String(Ne).length*Ee[rt],maxWidth:"100%"},children:(0,l.jsx)(A.K,{ref:(0,y.A)(D,Ct),className:oe.stepper,"data-size":rt,value:String(Ne),tabIndex:0,onKeyDown:Rt,onChange:zt,onBlur:xt,onFocus:gt,disabled:Pe,readonly:ie,type:"number",id:F,step:ze,name:C,min:Z,max:ye,autoFocus:jt,"data-test-id":"field-stepper__input"})}),(0,l.jsx)("div",{className:d()({[oe.postfixWrapper]:ke.show}),children:ke.show&&ke.render({key:ke.id})})]})})})}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldText/FieldText.js"(ne,L,e){e.d(L,{c:()=>ie});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),y=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),S=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),te=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),G=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),E=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),ce=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),A=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),W=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),le=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"),me=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),X=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"),ee=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),He=e.n(ee),Le=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.12_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),Ae=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/utils/getArrowIcon.js"),Ke=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),he=e.n(Ke),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),we=e.n(T),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),H=e.n(J),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(h),z=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),be=e.n(z),je=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Se=e.n(je),V=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonField/styles.module.css"),B={};B.styleTagTransform=Se(),B.setAttributes=M(),B.insert=H().bind(null,"head"),B.domAPI=we(),B.insertStyleElement=be();var Oe=he()(V.A,B);const _e=V.A&&V.A.locals?V.A.locals:void 0,$=(0,d.forwardRef)(({size:Y,tabIndex:de=0,onClick:Te,onKeyDown:ae,onFocus:ue,onBlur:nt,disabled:qe,content:Xe,hasArrow:Je=!1,arrowOpen:Re=!1,variant:et,className:ct},rt)=>{const{ArrowIcon:$e,arrowIconSize:ut}=(0,Ae.n)({open:Re,size:"m"});return(0,l.jsxs)("button",{className:He()(ct,_e.buttonField),"data-size":Y,"data-variant":et,"data-arrow-open":Re||void 0,"data-disabled":qe||void 0,onClick:qe?void 0:Te,onKeyDown:qe?void 0:ae,onFocus:qe?void 0:ue,onBlur:qe?void 0:nt,"data-test-id":"button-field",ref:rt,tabIndex:de,type:"button",disabled:qe,children:[et==="after"&&(0,l.jsx)(Le.c,{orientation:"vertical",className:_e.divider}),(0,l.jsx)("div",{className:_e.content,children:Xe}),Je&&(0,l.jsx)($e,{size:ut}),et==="before"&&(0,l.jsx)(Le.c,{orientation:"vertical",className:_e.divider})]})});function oe({variant:Y}){if(Y==="before")return"bottom-start";if(Y==="after")return"bottom-end"}var fe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonFieldList/styles.module.css"),R={};R.styleTagTransform=Se(),R.setAttributes=M(),R.insert=H().bind(null,"head"),R.domAPI=we(),R.insertStyleElement=be();var Q=he()(fe.A,R);const Ee=fe.A&&fe.A.locals?fe.A.locals:void 0;var re=function(Y,de){var Te={};for(var ae in Y)Object.prototype.hasOwnProperty.call(Y,ae)&&de.indexOf(ae)<0&&(Te[ae]=Y[ae]);if(Y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ue=0,ae=Object.getOwnPropertySymbols(Y);ue<ae.length;ue++)de.indexOf(ae[ue])<0&&Object.prototype.propertyIsEnumerable.call(Y,ae[ue])&&(Te[ae[ue]]=Y[ae[ue]]);return Te};const P=(0,d.forwardRef)((Y,de)=>{var{items:Te,selection:ae,open:ue,onOpenChange:nt,search:qe,scroll:Xe}=Y,Je=re(Y,["items","selection","open","onOpenChange","search","scroll"]);const[Re,et]=(0,me.iC)(ue,!1,nt),ct=oe(Je);return(0,l.jsx)(X.i,{"data-test-id":"button-field-list",items:Te,selection:Object.assign({mode:"single"},ae),open:Re,onOpenChange:et,closeDroplistOnItemClick:!0,search:qe,scroll:Xe,triggerElemRef:de,size:Je.size,placement:ct,children:(0,l.jsx)($,Object.assign({},Je,{hasArrow:!0,arrowOpen:Re,className:Ee.triggerClassName}))})});function D({variant:Y,button:de,icon:Te,size:ae,disabled:ue,readonly:nt,type:qe,onFocus:Xe,onBlur:Je}){const Re=(0,d.useRef)(null),et=(0,d.useMemo)(()=>({id:`${qe}Icon`,active:!1,show:!!(Te&&!de),render:()=>(0,l.jsx)(l.Fragment,{children:Te})}),[de,Te,qe]),ct=(0,d.useMemo)(()=>({id:`${qe}Button`,active:!1,show:!!(de&&de.variant===Y),render:rt=>{const $e=Object.assign(Object.assign({},rt),{variant:Y,size:ae,content:de==null?void 0:de.content,disabled:ue||nt,onFocus:Xe,onBlur:Je});if(de!=null&&de.items)return(0,l.jsx)(P,Object.assign({},$e,{ref:Re,onClick:()=>{setTimeout(()=>{var _t;return(_t=Re.current)===null||_t===void 0?void 0:_t.focus()},0)},search:de.search,items:de.items,selection:de.selection,open:de.open,scroll:de.scroll,onOpenChange:de.onOpenChange}));const ut=(0,l.jsx)($,Object.assign({},$e,{hasArrow:de==null?void 0:de.hasArrow,arrowOpen:de==null?void 0:de.arrowOpen}));return de!=null&&de.wrapper?de.wrapper(ut):ut}}),[qe,de,Y,ae,ue,nt,Xe,Je]);return de?ct:et}var F=function(Y,de){var Te={};for(var ae in Y)Object.prototype.hasOwnProperty.call(Y,ae)&&de.indexOf(ae)<0&&(Te[ae]=Y[ae]);if(Y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ue=0,ae=Object.getOwnPropertySymbols(Y);ue<ae.length;ue++)de.indexOf(ae[ue])<0&&Object.prototype.propertyIsEnumerable.call(Y,ae[ue])&&(Te[ae[ue]]=Y[ae[ue]]);return Te};function C(Y){var{prefixIcon:de}=Y,Te=F(Y,["prefixIcon"]);return D(Object.assign(Object.assign({},Te),{icon:de,type:"prefix",variant:"before"}))}var N=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"),Z=function(Y,de){var Te={};for(var ae in Y)Object.prototype.hasOwnProperty.call(Y,ae)&&de.indexOf(ae)<0&&(Te[ae]=Y[ae]);if(Y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ue=0,ae=Object.getOwnPropertySymbols(Y);ue<ae.length;ue++)de.indexOf(ae[ue])<0&&Object.prototype.propertyIsEnumerable.call(Y,ae[ue])&&(Te[ae[ue]]=Y[ae[ue]]);return Te};function ye(Y){var{postfixIcon:de}=Y,Te=Z(Y,["postfixIcon"]);return D(Object.assign(Object.assign({},Te),{icon:de,type:"postfix",variant:"after"}))}var De=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),Ie=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js");function ze({button:Y}){return(Y==null?void 0:Y.variant)==="before"?"single-line-container-button-before":(Y==null?void 0:Y.variant)==="after"?"single-line-container-button-after":"single-line-container"}var Pe=function(Y,de){var Te={};for(var ae in Y)Object.prototype.hasOwnProperty.call(Y,ae)&&de.indexOf(ae)<0&&(Te[ae]=Y[ae]);if(Y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ue=0,ae=Object.getOwnPropertySymbols(Y);ue<ae.length;ue++)de.indexOf(ae[ue])<0&&Object.prototype.propertyIsEnumerable.call(Y,ae[ue])&&(Te[ae[ue]]=Y[ae[ue]]);return Te};const ie=(0,d.forwardRef)((Y,de)=>{var{id:Te,name:ae,value:ue,placeholder:nt,maxLength:qe,disabled:Xe=!1,readonly:Je=!1,showCopyButton:Re=!0,showClearButton:et=!0,allowMoreThanMaxLength:ct=!1,onChange:rt,onFocus:$e,onBlur:ut,onCopyButtonClick:_t,onClearButtonClick:at,className:jt,label:ot,labelTooltip:se,labelTooltipPlacement:Ne,required:tt=!1,caption:lt,hint:dt,showHintIcon:pt,size:yt=O.SK.S,validationState:At=E.sv.Default,error:Ct,autoComplete:vt,autoFocus:kt,prefixIcon:Lt,prefix:ke,postfix:Ue,button:mt,onPaste:xt,onKeyDown:gt,type:zt="text",inputMode:Rt,spellCheck:St}=Y,Ft=Pe(Y,["id","name","value","placeholder","maxLength","disabled","readonly","showCopyButton","showClearButton","allowMoreThanMaxLength","onChange","onFocus","onBlur","onCopyButtonClick","onClearButtonClick","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","size","validationState","error","autoComplete","autoFocus","prefixIcon","prefix","postfix","button","onPaste","onKeyDown","type","inputMode","spellCheck"]);const[Ot="",Wt]=(0,A.I)({value:ue,defaultValue:"",onChange:rt}),t=(0,d.useRef)(null),s=(0,d.useRef)(null),n=(0,d.useRef)(null),o=!!(Ot&&!Xe),r=et&&o&&!Je,i=Re&&o&&Je,p=(0,De.t)({validationState:At,error:Ct}),f=(0,d.useMemo)(()=>mt?Object.assign(Object.assign({},mt),{selection:Object.assign(Object.assign({},mt.selection),{onChange:We=>{var Qe,vs;(vs=(Qe=mt.selection)===null||Qe===void 0?void 0:Qe.onChange)===null||vs===void 0||vs.call(Qe,We),setTimeout(()=>{var us;return(us=t.current)===null||us===void 0?void 0:us.focus()},0)}})}):void 0,[mt]),k=ze({button:f}),[g,c]=(0,d.useState)(!1),u=(0,d.useRef)(!1),m=We=>{var Qe;We.preventDefault(),Wt(""),at==null||at(),u.current&&((Qe=t.current)===null||Qe===void 0||Qe.focus())},v=()=>{u.current=g},x=(0,y.r)({clearButtonRef:s,showClearButton:r,onClear:m,onDown:v,size:yt}),w=(0,W.x)({copyButtonRef:n,showCopyButton:i,size:yt,valueToCopy:Ot,prefix:typeof ke=="string"?ke:void 0,postfix:typeof Ue=="string"?Ue:void 0,onCopyButtonClick:_t}),[K,pe]=(0,d.useState)(!1),Ve=(0,d.useCallback)(()=>pe(!0),[]),xe=(0,d.useCallback)(()=>pe(!1),[]),Ce=(0,le.M)({prefix:ke,disabled:Xe}),Be=C({button:f,prefixIcon:Lt,size:yt,disabled:Xe,readonly:Je,onFocus:Ve,onBlur:xe}),Ye=(0,N.$)({postfix:Ue,disabled:Xe}),Tt=ye({button:f,size:yt,disabled:Xe,readonly:Je,onFocus:Ve,onBlur:xe}),{postfixButtons:Dt,prefixButtons:ss,inputTabIndex:os,onInputKeyDown:Ht}=(0,S.C)({inputRef:t,postfixButtons:(0,d.useMemo)(()=>[x,w,Ye,Tt],[x,w,Ye,Tt]),prefixButtons:(0,d.useMemo)(()=>[Be,Ce],[Be,Ce]),readonly:Je,submitKeys:["Enter","Space","Tab"]}),Jt=We=>{Ht(We),gt==null||gt(We)},as=We=>{const Qe=We.relatedTarget;if(Qe&&Qe===s.current){c(!1);return}ut==null||ut(We),c(!1)},is=We=>{$e==null||$e(We),c(!0)};return(0,l.jsx)(Ie.m,Object.assign({className:jt,label:ot,labelTooltip:se,labelTooltipPlacement:Ne,labelFor:Te,required:tt,caption:lt,length:qe?{max:qe,current:Ot.length}:void 0,hint:dt,disabled:Xe,readonly:Je,showHintIcon:pt,size:yt,validationState:p,error:Ct},(0,G.z7)(Ft),{children:(0,l.jsx)(ce.V,{size:yt,validationState:p,disabled:Xe,readonly:Je,variant:k,inputRef:t,prefix:ss,postfix:Dt,disableFocus:K,children:(0,l.jsx)(te.K,{ref:(0,j.A)(de,t),"data-size":yt,value:Ot,onChange:Wt,onFocus:is,onBlur:as,tabIndex:os,onKeyDown:Jt,onPaste:xt,placeholder:nt,disabled:Xe,readonly:Je,type:zt,inputMode:Rt,maxLength:ct?void 0:qe||void 0,id:Te,name:ae,autoComplete:vt,autoFocus:kt,spellCheck:St,"data-test-id":"field-text__input"})})}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTextArea/FieldTextArea.js"(ne,L,e){e.d(L,{n:()=>re});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),y=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),S=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),te=e("./node_modules/.pnpm/@snack-uikit+scroll@0.11.0_react@18.2.0/node_modules/@snack-uikit/scroll/dist/esm/components/Scroll.js"),G=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),E=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),ce=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),A=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),W=e.n(A),le=e("./node_modules/.pnpm/react-textarea-autosize@8.5.3_@types+react@18.2.79_react@18.2.0/node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js"),me=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ee=e.n(X),He=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),Le=e.n(He),Ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Ke=e.n(Ae),he=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),T=e.n(he),we=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),J=e.n(we),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=e.n(H),M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/TextArea/styles.module.css"),z={};z.styleTagTransform=h(),z.setAttributes=T(),z.insert=Ke().bind(null,"head"),z.domAPI=Le(),z.insertStyleElement=J();var be=ee()(M.A,z);const je=M.A&&M.A.locals?M.A.locals:void 0;var Se=function(P,D){var F={};for(var C in P)Object.prototype.hasOwnProperty.call(P,C)&&D.indexOf(C)<0&&(F[C]=P[C]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var N=0,C=Object.getOwnPropertySymbols(P);N<C.length;N++)D.indexOf(C[N])<0&&Object.prototype.propertyIsEnumerable.call(P,C[N])&&(F[C[N]]=P[C[N]]);return F};const V=(0,d.forwardRef)((P,D)=>{var{name:F,value:C="",onChange:N,placeholder:Z,id:ye,className:De,disabled:Ie=!1,readonly:ze=!1,autoComplete:Pe=!1,autoFocus:ie=!1,maxLength:Y,onFocus:de,onBlur:Te,onKeyDown:ae,tabIndex:ue,minRows:nt=3,spellCheck:qe,inputMode:Xe}=P,Je=Se(P,["name","value","onChange","placeholder","id","className","disabled","readonly","autoComplete","autoFocus","maxLength","onFocus","onBlur","onKeyDown","tabIndex","minRows","spellCheck","inputMode"]);const[,Re]=(0,d.useState)(!1);(0,me.N)(()=>Re(!0),[]);const et=rt=>N==null?void 0:N(rt.target.value,rt),ct=rt=>rt.stopPropagation();return(0,l.jsx)(le.A,Object.assign({id:ye,name:F,value:C,ref:D,className:W()(De,je.textarea),autoComplete:Pe?"on":"off",autoFocus:ie,placeholder:Z,disabled:Ie,readOnly:ze,maxLength:Y,onChange:et,onClick:ct,onFocus:de,onBlur:Te,onKeyDown:ae,tabIndex:ue,minRows:nt,spellCheck:qe,inputMode:Xe},(0,G.z7)(Je)))});var B=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"),Oe=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),_e=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),$=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),oe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTextArea/styles.module.css"),fe={};fe.styleTagTransform=h(),fe.setAttributes=T(),fe.insert=Ke().bind(null,"head"),fe.domAPI=Le(),fe.insertStyleElement=J();var R=ee()(oe.A,fe);const Q=oe.A&&oe.A.locals?oe.A.locals:void 0;var Ee=function(P,D){var F={};for(var C in P)Object.prototype.hasOwnProperty.call(P,C)&&D.indexOf(C)<0&&(F[C]=P[C]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var N=0,C=Object.getOwnPropertySymbols(P);N<C.length;N++)D.indexOf(C[N])<0&&Object.prototype.propertyIsEnumerable.call(P,C[N])&&(F[C[N]]=P[C[N]]);return F};const re=(0,d.forwardRef)((P,D)=>{var{id:F,name:C,value:N,placeholder:Z,maxLength:ye,minRows:De=3,maxRows:Ie=1e3,disabled:ze=!1,resizable:Pe=!1,readonly:ie=!1,showCopyButton:Y=ie,showClearButton:de=!0,allowMoreThanMaxLength:Te=!0,showHintIcon:ae,onChange:ue,onFocus:nt,onBlur:qe,onKeyDown:Xe,className:Je,label:Re,labelTooltip:et,labelTooltipPlacement:ct,required:rt=!1,caption:$e,hint:ut,error:_t,size:at=O.SK.S,validationState:jt=E.sv.Default,onCopyButtonClick:ot,footer:se,spellCheck:Ne,autoFocus:tt,inputMode:lt}=P,dt=Ee(P,["id","name","value","placeholder","maxLength","minRows","maxRows","disabled","resizable","readonly","showCopyButton","showClearButton","allowMoreThanMaxLength","showHintIcon","onChange","onFocus","onBlur","onKeyDown","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","error","size","validationState","onCopyButtonClick","footer","spellCheck","autoFocus","inputMode"]);const pt=(0,d.useRef)(null),yt=(0,d.useRef)(null),At=(0,d.useRef)(null),Ct=!ie&&!ze&&Pe,[vt="",kt]=(0,B.I)({value:N,defaultValue:"",onChange:ue}),Lt=Y&&!!vt&&!ze,ke=de&&!!vt&&!ze&&!ie,Ue=(0,_e.t)({validationState:jt,error:_t}),mt=()=>{var Ot;kt(""),rt&&((Ot=pt.current)===null||Ot===void 0||Ot.focus())},xt=(0,y.r)({clearButtonRef:yt,showClearButton:ke,size:at,onClear:mt}),gt=(0,Oe.x)({copyButtonRef:At,showCopyButton:Lt,size:at,valueToCopy:vt,onCopyButtonClick:ot}),{postfixButtons:zt,inputTabIndex:Rt,onInputKeyDown:St}=(0,S.C)({inputRef:pt,postfixButtons:(0,d.useMemo)(()=>[xt,gt],[xt,gt]),readonly:ie,submitKeys:["Enter","Space","Tab"]}),Ft=Ot=>{St(Ot),Xe==null||Xe(Ot)};return(0,l.jsx)($.m,Object.assign({className:Je,label:Re,labelTooltip:et,labelTooltipPlacement:ct,labelFor:F,required:rt,caption:$e,length:ye?{max:ye,current:vt.length}:void 0,hint:ut,disabled:ze,readonly:ie,showHintIcon:ae,size:at,error:_t,validationState:Ue},(0,G.z7)(dt),{children:(0,l.jsxs)(ce.V,{className:Q.container,size:at,validationState:Ue,disabled:ze,readonly:ie,"data-resizable":Ct||void 0,"data-actions":!!se||void 0,variant:E.aJ.MultiLine,style:{"--max-rows":Ie,"--min-rows":De},inputRef:pt,postfix:(0,l.jsx)("span",{className:Q.postfix,children:zt}),children:[(0,l.jsx)(te.O,{className:Q.scrollContainer,size:"s",barHideStrategy:"never",resize:Ct?"vertical":"none","data-test-id":"field-textarea__scroll-area",children:(0,l.jsx)(V,{className:Q.textarea,"data-size":at,value:vt,onChange:kt,placeholder:Z,disabled:ze,readonly:ie,minRows:De,id:F,name:C,ref:(0,j.A)(D,pt),onFocus:nt,onBlur:qe,onKeyDown:Ft,tabIndex:Rt,spellCheck:Ne,autoFocus:tt,maxLength:Te?void 0:ye||void 0,inputMode:lt,"data-test-id":"field-textarea__input"})}),se]})}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTime/FieldTime.js"(ne,L,e){e.d(L,{Q:()=>Ee});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),y=e("./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/TimePicker.js"),S=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),te=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/watch/index.js"),G=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),E=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useClearButton.js"),ce=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/hooks/useButtonNavigation.js"),A=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/helpers.js"),W=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/components/InputPrivate/InputPrivate.js"),le=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),me=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),X=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/dateFields.js"),ee=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"),He=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"),Le=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useDateField.js"),Ae=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useHandlers.js"),Ke=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useFocusHandlers.js"),he=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/utils/getValidationState.js"),T=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDecorator/FieldDecorator.js"),we=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),J=e.n(we),H=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(H),M=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),z=e.n(M),be=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),je=e.n(be),Se=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),V=e.n(Se),B=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Oe=e.n(B),_e=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTime/styles.module.css"),$={};$.styleTagTransform=Oe(),$.setAttributes=je(),$.insert=z().bind(null,"head"),$.domAPI=h(),$.insertStyleElement=V();var oe=J()(_e.A,$);const fe=_e.A&&_e.A.locals?_e.A.locals:void 0;var R=function(re,P){var D={};for(var F in re)Object.prototype.hasOwnProperty.call(re,F)&&P.indexOf(F)<0&&(D[F]=re[F]);if(re!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,F=Object.getOwnPropertySymbols(re);C<F.length;C++)P.indexOf(F[C])<0&&Object.prototype.propertyIsEnumerable.call(re,F[C])&&(D[F[C]]=re[F[C]]);return D};const Q=(re,{showSeconds:P,locale:D})=>{var F,C,N;if(!re)return"";const Z=new Date;return Z.setHours((F=re.hours)!==null&&F!==void 0?F:0),Z.setMinutes((C=re.minutes)!==null&&C!==void 0?C:0),Z.setSeconds((N=re.seconds)!==null&&N!==void 0?N:0),Z.toLocaleTimeString(D,{hour:"numeric",minute:"numeric",second:P?"numeric":void 0})},Ee=(0,d.forwardRef)((re,P)=>{var{id:D,name:F,value:C,disabled:N=!1,readonly:Z=!1,showCopyButton:ye=!0,showClearButton:De=!0,open:Ie,onOpenChange:ze,onChange:Pe,onFocus:ie,onBlur:Y,className:de,label:Te,labelTooltip:ae,labelTooltipPlacement:ue,required:nt=!1,caption:qe,hint:Xe,showHintIcon:Je,showSeconds:Re=!0,size:et=G.SK.S,validationState:ct=me.sv.Default,error:rt,onCopyButtonClick:$e,autoFocus:ut,footerMode:_t}=re,at=R(re,["id","name","value","disabled","readonly","showCopyButton","showClearButton","open","onOpenChange","onChange","onFocus","onBlur","className","label","labelTooltip","labelTooltipPlacement","required","caption","hint","showHintIcon","showSeconds","size","validationState","error","onCopyButtonClick","autoFocus","footerMode"]);const[jt,ot]=(0,O.iC)(Ie,!1,ze),se=(0,d.useRef)(null),Ne=(0,d.useRef)(null),tt=(0,d.useRef)(null),lt=et===G.SK.S?G.Ev.Xs:G.Ev.S,dt=jt&&!Z&&!N,pt=!!(C&&!N),yt=De&&pt&&!Z,At=ye&&pt&&Z,Ct=(0,he.t)({validationState:ct,error:rt}),vt=(0,d.useRef)(null),kt=(0,d.useCallback)(v=>{v.key==="ArrowDown"&&(ot(!0),setTimeout(()=>{var x;return(x=vt.current)===null||x===void 0?void 0:x.focus()},0))},[ot]),Lt=(0,d.useCallback)(()=>{var v,x,w;Pe&&Pe(void 0),!((v=se.current)===null||v===void 0)&&v.value&&(se.current.value=""),nt?((x=se.current)===null||x===void 0||x.focus(),ot(!0)):((w=se.current)===null||w===void 0||w.blur(),ot(!1))},[Pe,nt,ot]),ke=Q(C,{showSeconds:Re,locale:X.Xn}),Ue=(0,E.r)({clearButtonRef:Ne,showClearButton:yt,size:et,onClear:Lt}),mt=(0,He.x)({copyButtonRef:tt,showCopyButton:At,size:et,valueToCopy:ke,onCopyButtonClick:$e}),xt=(0,d.useMemo)(()=>({active:!1,show:!0,id:"watchIcon",render:v=>(0,l.jsx)(te.A,Object.assign({},v,{size:lt,className:fe.calendarIcon,"data-size":et}))}),[lt,et]),gt=(0,d.useMemo)(()=>[Ue,mt,xt],[Ue,mt,xt]),{value:zt,handleChange:Rt,handleClick:St,handleKeyDown:Ft,handleBlur:Ot,mask:Wt,setInputFocus:t}=(0,Le.c)({inputRef:se,onChange:Pe,readonly:Z,locale:X.Xn,setIsOpen:ot,mode:Re?X.Tu.FullTime:X.Tu.NoSeconds,showSeconds:Re}),s=(0,d.useCallback)(()=>t(X.Yj.Seconds),[t]),{postfixButtons:n,inputTabIndex:o,onInputKeyDown:r,setInitialTabIndices:i}=(0,ce.C)({setInputFocus:s,inputRef:se,postfixButtons:gt,onButtonKeyDown:kt,readonly:Z,submitKeys:["Enter","Space","Tab"]}),p=v=>{var x;Pe&&Pe(v),(x=se.current)===null||x===void 0||x.focus(),ot(!1),se.current&&(se.current.value=Q(v,{showSeconds:Re,locale:X.Xn}))},f=()=>{i(),(0,A.z$)(()=>{t(X.Yj.Hours),ot(!1)})},k=(0,Ae.j)([kt,Ft,r]);(0,d.useEffect)(()=>{var v;Ie&&((v=se.current)===null||v===void 0||v.focus())},[Ie]),(0,d.useEffect)(()=>{se.current&&document.activeElement!==se.current&&(se.current.value=Q(C,{showSeconds:Re,locale:X.Xn}))},[Re,C]);const g=(0,d.useCallback)(v=>{t(),ie==null||ie(v)},[ie,t]),c=(0,Ke.T)({onFocusByClick:ie,onFocusByKeyboard:g}),u=(0,Ae.j)([Ot,c.onBlur,Y]),m=(0,d.useCallback)(v=>{St(),jt&&v.stopPropagation()},[St,jt]);return(0,l.jsx)(T.m,Object.assign({className:de,label:Te,labelTooltip:ae,labelTooltipPlacement:ue,labelFor:D,required:nt,caption:qe,hint:Xe,disabled:N,readonly:Z,showHintIcon:Je,size:et,error:rt,validationState:Ct},(0,le.z7)(at),{children:(0,l.jsx)(S.m,Object.assign({trigger:"click",triggerClassName:fe.triggerClassName,widthStrategy:"auto"},Z||N?{open:!1}:{open:dt,onOpenChange:ot},{content:(0,l.jsx)(y.A,{size:et,value:C,onChangeValue:p,navigationStartRef:vt,onFocusLeave:f,"data-test-id":"field-time__timepicker",fitToContainer:!1,showSeconds:Re,footerMode:_t}),children:(0,l.jsx)(ee.V,{className:fe.container,size:et,validationState:Ct,disabled:N,readonly:Z,variant:me.aJ.SingleLine,focused:dt,inputRef:se,postfix:n,children:(0,l.jsx)(W.K,{ref:(0,j.A)(P,se),"data-size":et,value:zt||"",placeholder:Wt,onChange:Rt,onFocus:c.onFocus,onMouseDown:c.onMouseDown,onBlur:u,onKeyDown:k,onClick:m,disabled:N,readonly:Z,tabIndex:o,type:"text",inputMode:"numeric",id:D,name:F,autoFocus:ut,"data-test-id":"field-time__input"})})}))}))})},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/dateFields.js"(ne,L,e){e.d(L,{FN:()=>j,Tu:()=>d,Xn:()=>S,Yj:()=>l,_f:()=>E,iF:()=>O,ks:()=>ce,q0:()=>X,v5:()=>y});var l;(function(ee){ee.Day="D",ee.Month="M",ee.Year="Y",ee.Hours="h",ee.Minutes="m",ee.Seconds="s"})(l||(l={}));const j={Date:"date",DateTime:"date-time"},d={FullTime:"full-time",NoSeconds:"no-seconds"},O="date-time-no-sec",y={[j.Date]:{"ru-RU":"\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413","en-US":"DD.MM.YYYY"},[j.DateTime]:{"ru-RU":"\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413, \u0447\u0447:\u043C\u043C:\u0441\u0441","en-US":"DD.MM.YYYY, hh:mm:ss"},[O]:{"ru-RU":"\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413, \u0447\u0447:\u043C\u043C","en-US":"DD.MM.YYYY, hh:mm"},[d.FullTime]:{"ru-RU":"\u0447\u0447:\u043C\u043C:\u0441\u0441","en-US":"hh:mm:ss"},[d.NoSeconds]:{"ru-RU":"\u0447\u0447:\u043C\u043C","en-US":"hh:mm"}},S=new Intl.Locale("ru-RU"),te={[l.Day]:{start:0,end:2,max:31,min:1},[l.Month]:{start:3,end:5,max:12,min:1},[l.Year]:{start:6,end:10,max:2100,min:1900}},G=(ee,He)=>Object.assign({[l.Hours]:{start:ee,end:ee+2,max:23,min:0},[l.Minutes]:{start:ee+3,end:ee+5,max:59,min:0}},He?{[l.Seconds]:{start:ee+6,end:ee+8,max:59,min:0}}:{}),E={[j.Date]:te,[j.DateTime]:Object.assign(Object.assign({},te),G(12,!0)),[O]:Object.assign(Object.assign({},te),G(12,!1)),[d.FullTime]:G(0,!0),[d.NoSeconds]:G(0,!1)},ce={[j.Date]:[l.Day,l.Month,l.Year],[j.DateTime]:[l.Day,l.Month,l.Year,l.Hours,l.Minutes,l.Seconds],[O]:[l.Day,l.Month,l.Year,l.Hours,l.Minutes],[d.FullTime]:[l.Hours,l.Minutes,l.Seconds],[d.NoSeconds]:[l.Hours,l.Minutes]},A={[l.Day]:"\u0414\u0414",[l.Month]:"\u041C\u041C",[l.Year]:"\u0413\u0413\u0413\u0413"},W={[l.Hours]:"\u0447\u0447",[l.Minutes]:"\u043C\u043C",[l.Seconds]:"\u0441\u0441"},le={[l.Day]:"DD",[l.Month]:"MM",[l.Year]:"YYYY"},me={[l.Hours]:"hh",[l.Minutes]:"mm",[l.Seconds]:"ss"},X={[j.Date]:{"ru-RU":A,"en-US":le},[j.DateTime]:{"ru-RU":Object.assign(Object.assign({},A),W),"en-US":Object.assign(Object.assign({},le),me)},[O]:{"ru-RU":Object.assign(Object.assign(Object.assign({},A),W),{[l.Seconds]:void 0}),"en-US":Object.assign(Object.assign(Object.assign({},le),me),{[l.Seconds]:void 0})},[d.FullTime]:{"ru-RU":W,"en-US":me},[d.NoSeconds]:{"ru-RU":Object.assign(Object.assign({},W),{[l.Seconds]:void 0}),"en-US":Object.assign(Object.assign({},me),{[l.Seconds]:void 0})}}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/FieldContainerPrivate.js"(ne,L,e){e.d(L,{V:()=>we});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=e.n(j),O=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),y=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/allFields.js"),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),te=e.n(S),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),E=e.n(G),ce=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),A=e.n(ce),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),le=e.n(W),me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),X=e.n(me),ee=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),He=e.n(ee),Le=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"),Ae={};Ae.styleTagTransform=He(),Ae.setAttributes=le(),Ae.insert=A().bind(null,"head"),Ae.domAPI=E(),Ae.insertStyleElement=X();var Ke=te()(Le.A,Ae);const he=Le.A&&Le.A.locals?Le.A.locals:void 0;var T=function(J,H){var h={};for(var M in J)Object.prototype.hasOwnProperty.call(J,M)&&H.indexOf(M)<0&&(h[M]=J[M]);if(J!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,M=Object.getOwnPropertySymbols(J);z<M.length;z++)H.indexOf(M[z])<0&&Object.prototype.propertyIsEnumerable.call(J,M[z])&&(h[M[z]]=J[M[z]]);return h};function we(J){var{className:H,children:h,size:M,validationState:z,variant:be,disabled:je,readonly:Se,focused:V,disableFocus:B,selectable:Oe,style:_e,prefix:$,postfix:oe,inputRef:fe}=J,R=T(J,["className","children","size","validationState","variant","disabled","readonly","focused","disableFocus","selectable","style","prefix","postfix","inputRef"]);const Q=()=>{var Ee;je||(Ee=fe.current)===null||Ee===void 0||Ee.focus()};return(0,l.jsxs)("div",Object.assign({className:d()(H,he.container),style:_e,"data-size":M,"data-validation":je||Se?y.sv.Default:z,"data-variant":be,"data-disabled":je||void 0,"data-readonly":Se||void 0,"data-focused":V||void 0,"data-disable-focus":B||void 0,"data-selectable":Oe||void 0,"data-test-id":"field-container-private",onClick:Q,role:"textbox",tabIndex:-1},(0,O.z7)(R),{children:[$&&(0,l.jsx)("span",{className:he.prefix,"data-test-id":"field-container-private__prefix-icon",children:$}),h,oe&&(0,l.jsx)("span",{className:he.postfix,children:oe})]}))}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useDateField.js"(ne,L,e){e.d(L,{c:()=>ce});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),d=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/constants/dateFields.js");function O(A){return W=>{if(W!==null){for(const le in d._f[A])if(W>=d._f[A][le].start&&W<=d._f[A][le].end)return le}}}function y(A){const W=d.ks[A];return le=>{const me=W.length-1,X=W[me],ee=W.indexOf(le);return ee===-1||ee===me?X:W[ee+1]}}function S(A){const W=d.ks[A];return le=>{const X=W[0],ee=W.indexOf(le);return ee===-1||ee===0?X:W[ee-1]}}const te=new Date;function G(A){if(!A)return;const W=A.split(", "),le=W[0];let me=W[1],[X,ee,He]=le.split(".").map(Number);if(ee-=1,le.includes(":")&&(me=le),me){(isNaN(He)||isNaN(ee)||isNaN(X))&&(He=te.getFullYear(),ee=te.getMonth(),X=te.getDay());const[Le=0,Ae=0,Ke=0]=me.split(":").map(he=>Number(he!=null?he:0));return new Date(He,ee,X,Le,Ae,Ke)}return new Date(He,ee,X)}function E({inputRef:A,mode:W}){const le=(0,l.useCallback)(J=>{if(A.current){const{start:H,end:h}=d._f[W][J];A.current.setSelectionRange(H,h)}},[W,A]),me=(0,l.useCallback)(()=>{var J,H,h;return((J=A.current)===null||J===void 0?void 0:J.value.length)===((H=A.current)===null||H===void 0?void 0:H.selectionEnd)&&((h=A.current)===null||h===void 0?void 0:h.selectionStart)===0},[A]),X=(0,l.useCallback)(J=>A.current?A.current.value.slice(d._f[W][J].start,d._f[W][J].end):"",[W,A]),ee=(0,l.useCallback)(()=>A.current?Object.keys(d._f[W]).every(J=>X(J)&&Number.isInteger(Number(X(J)))):!1,[W,X,A]),He=(0,l.useCallback)(()=>{if(Object.values(d.Tu).includes(W))return!0;const H=parseInt(X(d.Yj.Day),10),h=parseInt(X(d.Yj.Month),10),M=parseInt(X(d.Yj.Year),10);return!h||!H?!0:new Date(M||2020,h-1,H).getDate()===H},[X,W]),Le=(0,l.useCallback)(()=>{var J;let H;const h=Object.keys(d._f[W]).reduce(($,oe)=>{const fe=oe;return $[fe]=parseInt(X(fe),10),$},{}),{[d.Yj.Day]:M,[d.Yj.Month]:z,[d.Yj.Year]:be,[d.Yj.Hours]:je,[d.Yj.Minutes]:Se,[d.Yj.Seconds]:V}=h,B=d._f[W][d.Yj.Year],Oe=!!(M&&z&&be>=(B==null?void 0:B.min)&&be<=(B==null?void 0:B.max)),_e=[je,Se,...W===d.FN.DateTime||W===d.Tu.FullTime?[V]:[]].every($=>$!==void 0);if(W===d.FN.DateTime||W===d.iF?H=Oe&&_e:W===d.Tu.FullTime||W===d.Tu.NoSeconds?H=_e:H=Oe,H&&A.current){const $=(J=A.current)===null||J===void 0?void 0:J.value.length;A.current.selectionStart=$,A.current.selectionEnd=$}return H},[X,A,W]),Ae=(0,l.useCallback)((J,H)=>{if(A.current){const{start:h,end:M,max:z}=d._f[W][J];A.current.value=A.current.value.slice(0,h)+H.toString().padStart(z.toString().length,"0")+A.current.value.slice(M),le(J)}},[A,le,W]),Ke=(0,l.useMemo)(()=>y(W),[W]),he=(0,l.useMemo)(()=>S(W),[W]),T=(0,l.useMemo)(()=>O(W),[W]),we=(0,l.useCallback)(J=>{const H=G(J);return H&&(W===d.Tu.FullTime||W===d.Tu.NoSeconds)?{hours:H.getHours(),minutes:H.getMinutes(),seconds:H.getSeconds()}:H},[W]);return{isAllSelected:me,isValidInput:He,tryToCompleteInput:Le,getSlot:X,updateSlot:Ae,setFocus:le,isLikeDate:ee,getNextSlotKey:Ke,getPrevSlotKey:he,getSlotKeyFromIndex:T,parseDate:we}}function ce({inputRef:A,onChange:W,readonly:le,locale:me=d.Xn,setIsOpen:X,mode:ee,showSeconds:He}){var Le;const Ae=ee===d.FN.DateTime&&!He?d.iF:ee,Ke=d._f[Ae],he=d.v5[Ae][me.baseName]||d.v5[Ae][d.Xn.baseName],T=d.q0[Ae][me.baseName]||d.q0[Ae][d.Xn.baseName],we=d.ks[Ae],{getNextSlotKey:J,getPrevSlotKey:H,getSlotKeyFromIndex:h,setFocus:M,updateSlot:z,getSlot:be,isLikeDate:je,isAllSelected:Se,tryToCompleteInput:V,isValidInput:B,parseDate:Oe}=E({inputRef:A,mode:Ae}),_e=(0,l.useMemo)(()=>we[0],[we]),$=(0,l.useRef)(_e),oe=(0,l.useCallback)(P=>{if(!A.current||le)return;if((0,j.B)()&&document.activeElement!==A.current){$.current=P||_e,A.current.focus();return}const D=P||$.current;if(je()&&D===_e)return;if(!A.current.value){A.current.value=he,M(_e);return}if(P!=="auto"){M(D);return}const F=h(A.current.selectionStart);if(F){const{start:C,end:N}=Ke[F];A.current.setSelectionRange(C,N)}},[A,le,je,_e,h,he,M,Ke]),fe=(0,l.useCallback)(()=>{oe("auto")},[oe]),R=()=>{var P;W&&je()&&W(Oe(((P=A.current)===null||P===void 0?void 0:P.value)||""))},Q=(0,l.useCallback)(P=>{var D,F;if(!(P===we[we.length-1]&&V())){if(B()){M(J(P));return}switch(P){case d.Yj.Day:z(d.Yj.Month,(D=T==null?void 0:T[d.Yj.Month])!==null&&D!==void 0?D:""),M(d.Yj.Month);return;case d.Yj.Year:case d.Yj.Month:z(d.Yj.Day,(F=T==null?void 0:T[d.Yj.Day])!==null&&F!==void 0?F:""),M(d.Yj.Day);return;default:M(J(P))}}},[we,V,B,M,J,z,T]),Ee=(0,l.useCallback)(P=>{var D;if(A.current&&!le){if(P.key!=="Tab"&&(P.preventDefault(),P.stopPropagation()),P.key!=="ArrowDown"&&X(!1),P.key==="Escape"){A.current.blur();return}P.key==="Enter"&&V();const F=A.current.selectionStart,C=h(F);if(C){const N=be(C),{max:Z,min:ye}=Ke[C],De=Number(N)||0;if(P.key==="ArrowRight"){if(Se()||C===we[we.length-1]){A.current.selectionStart=A.current.value.length;return}M(J(C));return}if(P.key==="ArrowLeft"){M(H(C));return}if(P.key==="Backspace"&&(Se()?(A.current.value=he,M(_e)):z(C,(D=T[C])!==null&&D!==void 0?D:"")),/^\d+$/.test(P.key)){const Ie=Number(P.key),ze=parseInt(De.toString()+P.key,10)||0,Pe=ze.toString().length,ie=Z.toString().length,Y=N.match(/^0+$/)&&ie===2&&Ie===0;Pe<ie?((ze||ze>=ye)&&(z(C,ze),Y&&Q(C)),ze*10>Z&&Q(C)):Pe>ie?Ie*10>Z?(z(C,P.key),Q(C)):(Ie||Ie>=ye)&&z(C,P.key):ze<=Z?(z(C,ze),Q(C)):Ie*10>Z?(z(C,P.key),Q(C)):(Ie||Ie>=ye)&&z(C,P.key)}W==null||W(Oe(je()?A.current.value:""))}}},[A,le,h,X,V,be,Ke,Oe,je,W,Se,we,M,J,H,he,_e,z,T,Q]),re=(0,l.useCallback)(()=>{var P;!le&&((P=A.current)===null||P===void 0?void 0:P.value)===he&&(A.current.value=""),$.current=_e},[A,he,le,_e]);return{handleKeyDown:Ee,handleChange:R,handleClick:fe,setInputFocus:oe,value:(Le=A.current)===null||Le===void 0?void 0:Le.value,mask:he,handleBlur:re}}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useFocusHandlers.js"(ne,L,e){e.d(L,{T:()=>j});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function j({onFocusByKeyboard:d,onFocusByClick:O}){const y=(0,l.useRef)(!1),S=(0,l.useRef)(!1),te=(0,l.useCallback)(ce=>{y.current=!0,S.current?(O==null||O(ce),S.current=!1):d==null||d(ce)},[S,O,d]),G=(0,l.useCallback)(()=>{y.current=!1,S.current=!1},[]),E=(0,l.useCallback)(()=>{y.current||(S.current=!0)},[y]);return{onFocus:te,onBlur:G,onMouseDown:E}}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/dateHandlers/useHandlers.js"(ne,L,e){e.d(L,{j:()=>j});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function j(d){return(0,l.useCallback)(O=>{d.forEach(y=>y==null?void 0:y(O))},[d])}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useCopyButton.js"(ne,L,e){e.d(L,{x:()=>M});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+input-private@4.8.9_react@18.2.0/node_modules/@snack-uikit/input-private/dist/esm/constants.js"),O=e("./node_modules/.pnpm/copy-to-clipboard@3.3.3/node_modules/copy-to-clipboard/index.js"),y=e.n(O),S=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),te=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/copy/index.js");function G({size:z,isChecked:be}){switch(z){case d.Vp.S:return be?(0,l.jsx)(S.A,{size:16}):(0,l.jsx)(te.A,{size:16});case d.Vp.M:default:return be?(0,l.jsx)(S.A,{size:24}):(0,l.jsx)(te.A,{size:24})}}var E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ce=e.n(E),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),W=e.n(A),le=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),me=e.n(le),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),ee=e.n(X),He=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Le=e.n(He),Ae=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Ke=e.n(Ae),he=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonCopyValue/styles.module.css"),T={};T.styleTagTransform=Ke(),T.setAttributes=ee(),T.insert=me().bind(null,"head"),T.domAPI=W(),T.insertStyleElement=Le();var we=ce()(he.A,T);const J=he.A&&he.A.locals?he.A.locals:void 0,H=(0,j.forwardRef)(({size:z,valueToCopy:be,tabIndex:je=-1,onKeyDown:Se,onClick:V,onValueRequest:B,disabled:Oe},_e)=>{const[$,oe]=(0,j.useState)(!1),fe=(0,j.useRef)(),R=()=>oe(!1),Q=(re,P)=>{const D=P||be;D&&y()(D,{format:"text/plain"}),oe(!0),clearTimeout(fe.current),fe.current=setTimeout(R,2e3),V==null||V(re)},Ee=re=>{re.stopPropagation(),B?B().then(({success:P,value:D})=>{P&&Q(re,D)}):Q(re)};return(0,j.useEffect)(()=>()=>{R(),clearTimeout(fe.current)},[]),(0,l.jsx)("button",{className:J.buttonCopyValue,"data-size":z,"data-disabled":Oe||void 0,onClick:Ee,"data-test-id":"button-copy-value",ref:_e,onKeyDown:Se,tabIndex:je,type:"button",disabled:Oe,children:G({size:z,isChecked:$})})});var h=function(z,be){var je={};for(var Se in z)Object.prototype.hasOwnProperty.call(z,Se)&&be.indexOf(Se)<0&&(je[Se]=z[Se]);if(z!=null&&typeof Object.getOwnPropertySymbols=="function")for(var V=0,Se=Object.getOwnPropertySymbols(z);V<Se.length;V++)be.indexOf(Se[V])<0&&Object.prototype.propertyIsEnumerable.call(z,Se[V])&&(je[Se[V]]=z[Se[V]]);return je};function M({copyButtonRef:z,showCopyButton:be,size:je,valueToCopy:Se,onValueRequest:V,onCopyButtonClick:B,disabled:Oe,prefix:_e="",postfix:$=""}){return(0,j.useMemo)(()=>({id:"copy",active:!0,ref:z,show:be,render:oe=>{var{key:fe}=oe,R=h(oe,["key"]);return(0,l.jsx)(H,Object.assign({},R,{size:d._h[je],valueToCopy:(_e!=null?_e:"")+Se+($!=null?$:""),onValueRequest:V,onClick:B,disabled:Oe}),fe)}}),[z,be,je,_e,Se,$,V,B,Oe])}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePostfix.js"(ne,L,e){e.d(L,{$:()=>y});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),O=function(S,te){var G={};for(var E in S)Object.prototype.hasOwnProperty.call(S,E)&&te.indexOf(E)<0&&(G[E]=S[E]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ce=0,E=Object.getOwnPropertySymbols(S);ce<E.length;ce++)te.indexOf(E[ce])<0&&Object.prototype.propertyIsEnumerable.call(S,E[ce])&&(G[E[ce]]=S[E[ce]]);return G};function y({postfix:S,disabled:te}){return(0,j.useMemo)(()=>({id:"postfix",active:!1,show:!!S,render:G=>{var{key:E}=G,ce=O(G,["key"]);return(0,l.jsx)("div",Object.assign({},ce,{className:d.A.postfix,"data-test-id":"field-postfix","data-disabled":te||void 0,children:S}),E)}}),[te,S])}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/usePrefix.js"(ne,L,e){e.d(L,{M:()=>y});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),d=e("./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),O=function(S,te){var G={};for(var E in S)Object.prototype.hasOwnProperty.call(S,E)&&te.indexOf(E)<0&&(G[E]=S[E]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ce=0,E=Object.getOwnPropertySymbols(S);ce<E.length;ce++)te.indexOf(E[ce])<0&&Object.prototype.propertyIsEnumerable.call(S,E[ce])&&(G[E[ce]]=S[E[ce]]);return G};function y({prefix:S,disabled:te}){return(0,j.useMemo)(()=>({id:"prefix",active:!1,show:!!S,render:G=>{var{key:E}=G,ce=O(G,["key"]);return(0,l.jsx)("div",Object.assign({},ce,{"data-test-id":"field-prefix",className:d.A.prefix,"data-disabled":te||void 0,children:S}),E)}}),[te,S])}},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/useValueControl.js"(ne,L,e){e.d(L,{I:()=>j});var l=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function j({value:d,onChange:O,defaultValue:y}){return(0,l.iC)(d,y,S=>{const te=typeof S=="function"?S(d):S;O==null||O(te)})}},"./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/Droplist/DropList.js"(ne,L,e){e.d(L,{i:()=>he});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=e.n(j),O=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),y=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),S=e("./node_modules/.pnpm/@snack-uikit+dropdown@0.5.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/dropdown/dist/esm/components/Dropdown.js"),te=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.2_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),G=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),E=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),ce=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),A=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),W=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),le=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),me=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),X=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/OpenListProvider.js"),ee=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),He=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),Le=e("./node_modules/.pnpm/@snack-uikit+list@0.33.1_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),Ae=function(T,we){var J={};for(var H in T)Object.prototype.hasOwnProperty.call(T,H)&&we.indexOf(H)<0&&(J[H]=T[H]);if(T!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,H=Object.getOwnPropertySymbols(T);h<H.length;h++)we.indexOf(H[h])<0&&Object.prototype.propertyIsEnumerable.call(T,H[h])&&(J[H[h]]=T[H[h]]);return J};const Ke=["top","right","bottom","left"];function he(T){var{items:we,search:J,pinBottom:H=[],pinTop:h=[],footerActiveElementsRefs:M,children:z,trigger:be,placement:je,widthStrategy:Se,triggerElemRef:V,open:B,onOpenChange:Oe,collapse:_e={},triggerClassName:$,selection:oe,contentRender:fe,size:R="s",marker:Q=!0,closeDroplistOnItemClick:Ee=!1,className:re,listRef:P,untouchableScrollbars:D=!1,virtualized:F=!1,closeOnPopstate:C}=T,N=Ae(T,["items","search","pinBottom","pinTop","footerActiveElementsRefs","children","trigger","placement","widthStrategy","triggerElemRef","open","onOpenChange","collapse","triggerClassName","selection","contentRender","size","marker","closeDroplistOnItemClick","className","listRef","untouchableScrollbars","virtualized","closeOnPopstate"]);const Z=(0,y.useMemo)(()=>!!J,[J]),[ye=[],De]=(0,te.I)(_e),Ie=(0,y.useCallback)(se=>De(Ne=>Ne!=null&&Ne.includes(se)?Ne.filter(tt=>tt!==se):(Ne!=null?Ne:[]).concat([se])),[De]),[ze=!1,Pe]=(0,te.I)({value:B,defaultValue:!1,onChange:Oe}),{searchItem:ie,footerItems:Y}=(0,E.nG)({footerActiveElementsRefs:M}),de=(0,y.useMemo)(()=>{const se=(0,ce.lg)({items:h,prefix:G.$.pinTop,parentId:G.$.default}),Ne=(0,ce.lg)({items:we,prefix:G.$.default,parentId:G.$.default}),tt=(0,ce.lg)({items:H,prefix:G.$.pinBottom,parentId:G.$.default}),lt=Object.assign(Object.assign(Object.assign({},se.flattenItems),tt.flattenItems),Ne.flattenItems),dt=Object.assign(Object.assign(Object.assign({},se.focusFlattenItems),tt.focusFlattenItems),Ne.focusFlattenItems);return[...Y,ie].forEach(pt=>{lt[pt.id]=pt,dt[pt.id]=Object.assign(Object.assign({},pt),{originalId:pt.id,items:[],key:pt.id,allChildIds:[]})}),{items:Ne,pinTop:se,pinBottom:tt,flattenItems:lt,focusFlattenItems:dt}},[we,h,H,ie,Y]),{flattenItems:Te,focusFlattenItems:ae}=de,ue=Ae(de,["flattenItems","focusFlattenItems"]),{ids:nt,expandedIds:qe}=(0,y.useMemo)(()=>{const{pinTop:se,items:Ne,pinBottom:tt}=ue;let lt=[],dt=[];return Z&&lt.push(ie.id),[se,Ne,tt].forEach(({focusFlattenItems:pt,focusCloseChildIds:yt})=>{const At=(0,ce.e)({focusFlattenItems:pt,focusCloseChildIds:yt,openCollapseItems:ye,isSelectionMultiple:(oe==null?void 0:oe.mode)==="multiple"});lt=lt.concat(At.ids),dt=dt.concat(At.expandedIds)}),Y.forEach(pt=>{lt.push(pt.id)}),{ids:lt,expandedIds:dt}},[Y,Z,ue,ye,ie.id,oe==null?void 0:oe.mode]),Xe=(0,y.useRef)(null),Je=(0,y.useRef)(null),Re=nt[0],{handleListKeyDownFactory:et,resetActiveItemId:ct,activeItemId:rt,forceUpdateActiveItemId:$e}=(0,ee.d)({mainRef:V!=null?V:Xe,focusFlattenItems:ae,hasListInFocusChain:!0,firstItemId:Re}),ut=(0,y.useCallback)(se=>et(nt,qe)(se),[et,nt,qe]),_t=(0,y.useCallback)(se=>{ct(),Pe(se)},[ct,Pe]),at=(0,y.useCallback)((se,Ne)=>{se.key==="ArrowDown"&&(se.preventDefault(),Pe(!0),setTimeout(()=>{var tt;ct(),(tt=Je.current)===null||tt===void 0||tt.focus()},0)),se.key==="ArrowUp"&&Pe(!1),Ne==null||Ne(se)},[ct,Pe]),jt=(0,y.useMemo)(()=>(0,y.isValidElement)(z),[z]),ot=(0,y.useMemo)(()=>{if((0,y.isValidElement)(z)){const se=typeof z.props=="object"?z.props:{};return(0,y.cloneElement)(z,Object.assign(Object.assign({},se),{onKeyDown:Ne=>{var tt;at(Ne,(tt=z.props)===null||tt===void 0?void 0:tt.onKeyDown)}}))}return typeof z=="function"?z({onKeyDown:at}):z},[at,z]);return(0,l.jsx)(le.Tr,{flattenItems:Te,focusFlattenItems:ae,contentRender:fe,size:R,marker:Q,firstItemId:Re,virtualized:F,children:(0,l.jsx)(A.WM,Object.assign({},oe,{children:(0,l.jsx)(W.bN.Provider,{value:{openCollapseItems:ye,toggleOpenCollapseItem:Ie},children:(0,l.jsx)(me.m.Provider,{value:{activeItemId:rt,handleListKeyDownFactory:et,forceUpdateActiveItemId:$e},children:(0,l.jsx)(X.K.Provider,{value:{closeDroplistOnItemClick:Ee,closeDroplist:()=>{var se;Pe(!1),ct(),(se=(V!=null?V:Xe).current)===null||se===void 0||se.focus()}},children:(0,l.jsx)(S.m,{content:(0,l.jsx)("div",{className:d()(Le.A.wrapper,re),children:(0,l.jsx)(He.Q,Object.assign({},N,{items:ue.items.focusCloseChildIds,pinTop:ue.pinTop.focusCloseChildIds,pinBottom:ue.pinBottom.focusCloseChildIds,virtualized:F,onKeyDown:ut,searchItem:ie,tabIndex:0,ref:(0,O.A)(Je,P),search:J,onFocus:se=>{se.stopPropagation(),$e==null||$e(nt[0])},limitedScrollHeight:!0,untouchableScrollbars:D}))}),outsideClick:!0,triggerClassName:$,fallbackPlacements:Ke,trigger:be,placement:je,widthStrategy:Se,triggerRef:V?jt&&V||void 0:Xe,open:ze,onOpenChange:_t,closeOnPopstate:C,children:ot})})})})}))})}},"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js"(ne,L,e){e.d(L,{E:()=>T});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),d=e.n(j),O=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(y),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),G=e.n(te),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),ce=e.n(E),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),W=e.n(A),le=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),me=e.n(le),X=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),ee=e.n(X),He=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"),Le={};Le.styleTagTransform=ee(),Le.setAttributes=W(),Le.insert=ce().bind(null,"head"),Le.domAPI=G(),Le.insertStyleElement=me();var Ae=S()(He.A,Le);const Ke=He.A&&He.A.locals?He.A.locals:void 0;var he=function(we,J){var H={};for(var h in we)Object.prototype.hasOwnProperty.call(we,h)&&J.indexOf(h)<0&&(H[h]=we[h]);if(we!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,h=Object.getOwnPropertySymbols(we);M<h.length;M++)J.indexOf(h[M])<0&&Object.prototype.propertyIsEnumerable.call(we,h[M])&&(H[h[M]]=we[h[M]]);return H};function T(we){var{width:J,height:H,className:h,borderRadius:M,loading:z,children:be}=we,je=he(we,["width","height","className","borderRadius","loading","children"]);return(0,O.v)(z)?(0,l.jsx)("div",Object.assign({},je,{style:{width:J,height:H,borderRadius:M},className:d()(Ke.skeleton,h)})):(0,l.jsx)(l.Fragment,{children:be})}},"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js"(ne,L,e){e.d(L,{Q:()=>O,r:()=>d});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const d=(0,j.createContext)(!1);function O({loading:y,children:S}){return(0,l.jsx)(d.Provider,{value:y,children:S})}},"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"(ne,L,e){e.d(L,{v:()=>d});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js");function d(O){return(0,l.useContext)(j.r)||O}},"./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/Slider.js"(ne,L,e){e.d(L,{A:()=>_e});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),d=e.n(j),O=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),y=e.n(O),S=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),te=e.n(S),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),E=e.n(G),ce=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),A=e.n(ce),W=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),le=e.n(W),me=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/slider.css"),X={};X.styleTagTransform=le(),X.setAttributes=E(),X.insert=te().bind(null,"head"),X.domAPI=y(),X.insertStyleElement=A();var ee=d()(me.A,X);const He=me.A&&me.A.locals?me.A.locals:void 0;var Le=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),Ae=e.n(Le),Ke=e("./node_modules/.pnpm/rc-slider@10.5.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-slider/es/index.js"),he=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),T=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js"),we,J,H=function($,oe){var fe={};for(var R in $)Object.prototype.hasOwnProperty.call($,R)&&oe.indexOf(R)<0&&(fe[R]=$[R]);if($!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Q=0,R=Object.getOwnPropertySymbols($);Q<R.length;Q++)oe.indexOf(R[Q])<0&&Object.prototype.propertyIsEnumerable.call($,R[Q])&&(fe[R[Q]]=$[R[Q]]);return fe};const h="data-swipe-directions";function M($){var{availableDirections:oe,enabled:fe=!0}=$,R=H($,["availableDirections","enabled"]);const Q=we(!0),Ee=F=>{var C;if(oe){if(!oe.includes(F.dir)){Q.current=!1;return}if(!R.onSwipeStart)return;F.event.stopPropagation()}(C=R.onSwipeStart)===null||C===void 0||C.call(R,F)},re=F=>{var C;if(oe){if(!Q.current)return;F.event.stopPropagation()}(C=R.onSwiping)===null||C===void 0||C.call(R,F)},P=F=>{var C;if(oe){if(!Q.current){Q.current=!0;return}F.event.stopPropagation()}(C=R.onSwiped)===null||C===void 0||C.call(R,F)},D=J(fe?Object.assign(Object.assign({},R),{onSwipeStart:Ee,onSwiping:re,onSwiped:P}):{});return Object.assign(Object.assign({},D),{[h]:fe&&oe?oe.join(" "):void 0})}var z=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/styles.module.css"),be={};be.styleTagTransform=le(),be.setAttributes=E(),be.insert=te().bind(null,"head"),be.domAPI=y(),be.insertStyleElement=A();var je=d()(z.A,be);const Se=z.A&&z.A.locals?z.A.locals:void 0;var V=function($,oe){var fe={};for(var R in $)Object.prototype.hasOwnProperty.call($,R)&&oe.indexOf(R)<0&&(fe[R]=$[R]);if($!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Q=0,R=Object.getOwnPropertySymbols($);Q<R.length;Q++)oe.indexOf(R[Q])<0&&Object.prototype.propertyIsEnumerable.call($,R[Q])&&(fe[R[Q]]=$[R[Q]]);return fe};const B=$=>(0,he.cloneElement)($,{[h]:"Left Right"}),Oe=$=>function(oe,fe){return(0,l.jsx)(T.m,{tip:$?$(fe.value):fe.value,open:fe.dragging||void 0,disableSpanWrapper:!0,trigger:"hoverAndFocusVisible",className:Se.tipWrapper,children:B(oe)})};function _e($){var{className:oe,handleTip:fe,tipFormatter:R}=$,Q=V($,["className","handleTip","tipFormatter"]);return(0,l.jsx)(Ke.A,Object.assign({className:Ae()("osThemeSnack",oe,{withMarks:!!Q.marks,reverse:!!Q.reverse}),handleRender:fe?Oe(R):B},Q),JSON.stringify(Q.marks))}},"./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/WithTooltip/WithTooltip.js"(ne,L,e){e.d(L,{k:()=>d});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),j=e("./node_modules/.pnpm/@snack-uikit+tooltip@0.18.13_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tooltip/dist/esm/components/Tooltip/Tooltip.js");function d({tooltip:O,children:y}){return O!=null&&O.tip?(0,l.jsx)(j.m,Object.assign({},O,{children:y})):(0,l.jsx)(l.Fragment,{children:y})}},"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"(ne,L,e){e.d(L,{N:()=>d});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=e("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js");const d=(0,j.B)()?l.useLayoutEffect:l.useEffect},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.14.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.timePickerWrapper--dqK6Y{
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
}`,""]),y.locals={timePickerWrapper:"timePickerWrapper--dqK6Y"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+color-picker@0.3.56_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/color-picker/dist/esm/components/global.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.osThemeSnack .react-colorful{
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
}`,""]);const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+color-picker@0.3.56_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/color-picker/dist/esm/components/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.container--Fz5S8{
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
}`,""]),y.locals={container:"container--Fz5S8",footer:"footer--n0I7U",colorModel:"colorModel--hEc22",colorFields:"colorFields--H0Gru"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+color-picker@0.3.56_@snack-uikit+locale@0.16.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/color-picker/dist/esm/helperComponents/FieldPrivate/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.container--sccPI{
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
}`,""]),y.locals={container:"container--sccPI",prefix:"prefix--SBvN9",postfix:"postfix--gowNm"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldColor/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.triggerClassName--_0LXt{
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
}`,""]),y.locals={triggerClassName:"triggerClassName--_0LXt",colorPreview:"colorPreview--ySTiS"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldDate/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.triggerClassName--dX_L0{
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
}`,""]),y.locals={triggerClassName:"triggerClassName--dX_L0",calendarWrapper:"calendarWrapper--WIS2O",container:"container--U4PFa",calendarIcon:"calendarIcon--HnuLL"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSelect/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.triggerClassName--hB2LL{
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
}`,""]),y.locals={triggerClassName:"triggerClassName--hB2LL",contentWrapper:"contentWrapper--XjkLm",tagContainer:"tagContainer--o23gr",tag:"tag--E7Goa",container:"container--rUNZt",inputPlug:"inputPlug--OTA6N",arrowIcon:"arrowIcon--JPP7t",displayValue:"displayValue--bO5gr",inputWrapper:"inputWrapper--GH2qG",postfix:"postfix--AEbYi",readonlyCursor:"readonlyCursor--EJBk8"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldSlider/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.sliderWrapper--tlyHI{
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
}`,""]),y.locals={sliderWrapper:"sliderWrapper--tlyHI",slider:"slider--FzLJL",fieldContainer:"fieldContainer--qNkeY"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldStepper/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.stepper--khpq5{
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
}`,""]),y.locals={stepper:"stepper--khpq5",button:"button--vRnZV",trigger:"trigger--bC7xP",wrap:"wrap--CZW_H",prefixWrapper:"prefixWrapper--P0jKu",postfixWrapper:"postfixWrapper--FQPKQ"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTextArea/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.container--pmsw_{
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
}`,""]),y.locals={container:"container--pmsw_",scrollContainer:"scrollContainer--iutul",textarea:"textarea--LBWVR",postfix:"postfix--k8dds"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/components/FieldTime/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.triggerClassName--ybKXQ{
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
}`,""]),y.locals={triggerClassName:"triggerClassName--ybKXQ",container:"container--_qkzC",calendarIcon:"calendarIcon--FImRH"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonCopyValue/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.buttonCopyValue--r9ywI{
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
}`,""]),y.locals={buttonCopyValue:"buttonCopyValue--r9ywI"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonField/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.buttonField--UJcAp{
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
}`,""]),y.locals={buttonField:"buttonField--UJcAp",divider:"divider--WcASV",content:"content--zzogy"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonFieldList/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.triggerClassName--zfZyL{
  --offset:var(--space-drop-list-drop-offset, 4px);
}`,""]),y.locals={triggerClassName:"triggerClassName--zfZyL"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/ButtonHideValue/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.buttonHideValue--GXLpg{
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
}`,""]),y.locals={buttonHideValue:"buttonHideValue--GXLpg"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/FieldContainerPrivate/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.container--YBp1H[data-validation=default]{
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
}`,""]),y.locals={container:"container--YBp1H",prefix:"prefix--ncx_b",postfix:"postfix--MbtXo"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/helperComponents/TextArea/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.textarea--nTwJJ{
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
}`,""]),y.locals={textarea:"textarea--nTwJJ"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.prefix--IuLW9{
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
}`,""]),y.locals={prefix:"prefix--IuLW9",postfix:"postfix--HW3Jw"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+segmented-control@0.6.21_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/components/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.container--wCh6o{
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
}`,""]),y.locals={container:"container--wCh6o",segmentHolder:"segmentHolder--xXMtk",selection:"selection--oGJ5h"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+segmented-control@0.6.21_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/segmented-control/dist/esm/helperComponents/Segment/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.segment--jDvAC{
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
}`,""]),y.locals={segment:"segment--jDvAC",icon:"icon--HM2Lz",label:"label--RblfV"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.11_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.skeleton--GMZZL{
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
}`,""]),y.locals={skeleton:"skeleton--GMZZL",loading:"loading--Y104V"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/slider.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.osThemeSnack.rc-slider{
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
}`,""]);const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+slider@0.3.37_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/slider/dist/esm/components/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.tipWrapper--cDUD7{
  display:block;
  text-align:center;
}`,""]),y.locals={tipWrapper:"tipWrapper--cDUD7"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.20_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagBase/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.tag--HOmL5{
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
}`,""]),y.locals={tag:"tag--HOmL5",tagButton:"tagButton--drdCb",icon:"icon--rRMxP",label:"label--mktO3"};const S=y},"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+tag@0.15.20_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/tag/dist/esm/components/TagLink/styles.module.css"(ne,L,e){e.d(L,{A:()=>S});var l=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),j=e.n(l),d=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/runtime/api.js"),O=e.n(d),y=O()(j());y.push([ne.id,`.tag--ucsDS{
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
}`,""]),y.locals={tag:"tag--ucsDS",label:"label--ngl2A"};const S=y},"./node_modules/.pnpm/decimal.js@10.6.0/node_modules/decimal.js/decimal.mjs"(ne,L,e){e.d(L,{A:()=>Wt});/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var l=9e15,j=1e9,d="0123456789abcdef",O="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",y="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",S={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-l,maxE:l,crypto:!1},te,G,E=!0,ce="[DecimalError] ",A=ce+"Invalid argument: ",W=ce+"Precision limit exceeded",le=ce+"crypto unavailable",me="[object Decimal]",X=Math.floor,ee=Math.pow,He=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,Le=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,Ae=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Ke=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,he=1e7,T=7,we=9007199254740991,J=O.length-1,H=y.length-1,h={toStringTag:me};h.absoluteValue=h.abs=function(){var t=new this.constructor(this);return t.s<0&&(t.s=1),B(t)},h.ceil=function(){return B(new this.constructor(this),this.e+1,2)},h.clampedTo=h.clamp=function(t,s){var n,o=this,r=o.constructor;if(t=new r(t),s=new r(s),!t.s||!s.s)return new r(NaN);if(t.gt(s))throw Error(A+s);return n=o.cmp(t),n<0?t:o.cmp(s)>0?s:new r(o)},h.comparedTo=h.cmp=function(t){var s,n,o,r,i=this,p=i.d,f=(t=new i.constructor(t)).d,k=i.s,g=t.s;if(!p||!f)return!k||!g?NaN:k!==g?k:p===f?0:!p^k<0?1:-1;if(!p[0]||!f[0])return p[0]?k:f[0]?-g:0;if(k!==g)return k;if(i.e!==t.e)return i.e>t.e^k<0?1:-1;for(o=p.length,r=f.length,s=0,n=o<r?o:r;s<n;++s)if(p[s]!==f[s])return p[s]>f[s]^k<0?1:-1;return o===r?0:o>r^k<0?1:-1},h.cosine=h.cos=function(){var t,s,n=this,o=n.constructor;return n.d?n.d[0]?(t=o.precision,s=o.rounding,o.precision=t+Math.max(n.e,n.sd())+T,o.rounding=1,n=Se(o,Ie(o,n)),o.precision=t,o.rounding=s,B(G==2||G==3?n.neg():n,t,s,!0)):new o(1):new o(NaN)},h.cubeRoot=h.cbrt=function(){var t,s,n,o,r,i,p,f,k,g,c=this,u=c.constructor;if(!c.isFinite()||c.isZero())return new u(c);for(E=!1,i=c.s*ee(c.s*c,1/3),!i||Math.abs(i)==1/0?(n=M(c.d),t=c.e,(i=(t-n.length+1)%3)&&(n+=i==1||i==-2?"0":"00"),i=ee(n,1/3),t=X((t+1)/3)-(t%3==(t<0?-1:2)),i==1/0?n="5e"+t:(n=i.toExponential(),n=n.slice(0,n.indexOf("e")+1)+t),o=new u(n),o.s=c.s):o=new u(i.toString()),p=(t=u.precision)+3;;)if(f=o,k=f.times(f).times(f),g=k.plus(c),o=V(g.plus(c).times(f),g.plus(k),p+2,1),M(f.d).slice(0,p)===(n=M(o.d)).slice(0,p))if(n=n.slice(p-3,p+1),n=="9999"||!r&&n=="4999"){if(!r&&(B(f,t+1,0),f.times(f).times(f).eq(c))){o=f;break}p+=4,r=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(B(o,t+1,1),s=!o.times(o).times(o).eq(c));break}return E=!0,B(o,t,u.rounding,s)},h.decimalPlaces=h.dp=function(){var t,s=this.d,n=NaN;if(s){if(t=s.length-1,n=(t-X(this.e/T))*T,t=s[t],t)for(;t%10==0;t/=10)n--;n<0&&(n=0)}return n},h.dividedBy=h.div=function(t){return V(this,new this.constructor(t))},h.dividedToIntegerBy=h.divToInt=function(t){var s=this,n=s.constructor;return B(V(s,new n(t),0,1,1),n.precision,n.rounding)},h.equals=h.eq=function(t){return this.cmp(t)===0},h.floor=function(){return B(new this.constructor(this),this.e+1,3)},h.greaterThan=h.gt=function(t){return this.cmp(t)>0},h.greaterThanOrEqualTo=h.gte=function(t){var s=this.cmp(t);return s==1||s===0},h.hyperbolicCosine=h.cosh=function(){var t,s,n,o,r,i=this,p=i.constructor,f=new p(1);if(!i.isFinite())return new p(i.s?1/0:NaN);if(i.isZero())return f;n=p.precision,o=p.rounding,p.precision=n+Math.max(i.e,i.sd())+4,p.rounding=1,r=i.d.length,r<32?(t=Math.ceil(r/3),s=(1/De(4,t)).toString()):(t=16,s="2.3283064365386962890625e-10"),i=ye(p,1,i.times(s),new p(1),!0);for(var k,g=t,c=new p(8);g--;)k=i.times(i),i=f.minus(k.times(c.minus(k.times(c))));return B(i,p.precision=n,p.rounding=o,!0)},h.hyperbolicSine=h.sinh=function(){var t,s,n,o,r=this,i=r.constructor;if(!r.isFinite()||r.isZero())return new i(r);if(s=i.precision,n=i.rounding,i.precision=s+Math.max(r.e,r.sd())+4,i.rounding=1,o=r.d.length,o<3)r=ye(i,2,r,r,!0);else{t=1.4*Math.sqrt(o),t=t>16?16:t|0,r=r.times(1/De(5,t)),r=ye(i,2,r,r,!0);for(var p,f=new i(5),k=new i(16),g=new i(20);t--;)p=r.times(r),r=r.times(f.plus(p.times(k.times(p).plus(g))))}return i.precision=s,i.rounding=n,B(r,s,n,!0)},h.hyperbolicTangent=h.tanh=function(){var t,s,n=this,o=n.constructor;return n.isFinite()?n.isZero()?new o(n):(t=o.precision,s=o.rounding,o.precision=t+7,o.rounding=1,V(n.sinh(),n.cosh(),o.precision=t,o.rounding=s)):new o(n.s)},h.inverseCosine=h.acos=function(){var t=this,s=t.constructor,n=t.abs().cmp(1),o=s.precision,r=s.rounding;return n!==-1?n===0?t.isNeg()?oe(s,o,r):new s(0):new s(NaN):t.isZero()?oe(s,o+4,r).times(.5):(s.precision=o+6,s.rounding=1,t=new s(1).minus(t).div(t.plus(1)).sqrt().atan(),s.precision=o,s.rounding=r,t.times(2))},h.inverseHyperbolicCosine=h.acosh=function(){var t,s,n=this,o=n.constructor;return n.lte(1)?new o(n.eq(1)?0:NaN):n.isFinite()?(t=o.precision,s=o.rounding,o.precision=t+Math.max(Math.abs(n.e),n.sd())+4,o.rounding=1,E=!1,n=n.times(n).minus(1).sqrt().plus(n),E=!0,o.precision=t,o.rounding=s,n.ln()):new o(n)},h.inverseHyperbolicSine=h.asinh=function(){var t,s,n=this,o=n.constructor;return!n.isFinite()||n.isZero()?new o(n):(t=o.precision,s=o.rounding,o.precision=t+2*Math.max(Math.abs(n.e),n.sd())+6,o.rounding=1,E=!1,n=n.times(n).plus(1).sqrt().plus(n),E=!0,o.precision=t,o.rounding=s,n.ln())},h.inverseHyperbolicTangent=h.atanh=function(){var t,s,n,o,r=this,i=r.constructor;return r.isFinite()?r.e>=0?new i(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(t=i.precision,s=i.rounding,o=r.sd(),Math.max(o,t)<2*-r.e-1?B(new i(r),t,s,!0):(i.precision=n=o-r.e,r=V(r.plus(1),new i(1).minus(r),n+t,1),i.precision=t+4,i.rounding=1,r=r.ln(),i.precision=t,i.rounding=s,r.times(.5))):new i(NaN)},h.inverseSine=h.asin=function(){var t,s,n,o,r=this,i=r.constructor;return r.isZero()?new i(r):(s=r.abs().cmp(1),n=i.precision,o=i.rounding,s!==-1?s===0?(t=oe(i,n+4,o).times(.5),t.s=r.s,t):new i(NaN):(i.precision=n+6,i.rounding=1,r=r.div(new i(1).minus(r.times(r)).sqrt().plus(1)).atan(),i.precision=n,i.rounding=o,r.times(2)))},h.inverseTangent=h.atan=function(){var t,s,n,o,r,i,p,f,k,g=this,c=g.constructor,u=c.precision,m=c.rounding;if(g.isFinite()){if(g.isZero())return new c(g);if(g.abs().eq(1)&&u+4<=H)return p=oe(c,u+4,m).times(.25),p.s=g.s,p}else{if(!g.s)return new c(NaN);if(u+4<=H)return p=oe(c,u+4,m).times(.5),p.s=g.s,p}for(c.precision=f=u+10,c.rounding=1,n=Math.min(28,f/T+2|0),t=n;t;--t)g=g.div(g.times(g).plus(1).sqrt().plus(1));for(E=!1,s=Math.ceil(f/T),o=1,k=g.times(g),p=new c(g),r=g;t!==-1;)if(r=r.times(k),i=p.minus(r.div(o+=2)),r=r.times(k),p=i.plus(r.div(o+=2)),p.d[s]!==void 0)for(t=s;p.d[t]===i.d[t]&&t--;);return n&&(p=p.times(2<<n-1)),E=!0,B(p,c.precision=u,c.rounding=m,!0)},h.isFinite=function(){return!!this.d},h.isInteger=h.isInt=function(){return!!this.d&&X(this.e/T)>this.d.length-2},h.isNaN=function(){return!this.s},h.isNegative=h.isNeg=function(){return this.s<0},h.isPositive=h.isPos=function(){return this.s>0},h.isZero=function(){return!!this.d&&this.d[0]===0},h.lessThan=h.lt=function(t){return this.cmp(t)<0},h.lessThanOrEqualTo=h.lte=function(t){return this.cmp(t)<1},h.logarithm=h.log=function(t){var s,n,o,r,i,p,f,k,g=this,c=g.constructor,u=c.precision,m=c.rounding,v=5;if(t==null)t=new c(10),s=!0;else{if(t=new c(t),n=t.d,t.s<0||!n||!n[0]||t.eq(1))return new c(NaN);s=t.eq(10)}if(n=g.d,g.s<0||!n||!n[0]||g.eq(1))return new c(n&&!n[0]?-1/0:g.s!=1?NaN:n?0:1/0);if(s)if(n.length>1)i=!0;else{for(r=n[0];r%10===0;)r/=10;i=r!==1}if(E=!1,f=u+v,p=D(g,f),o=s?$(c,f+10):D(t,f),k=V(p,o,f,1),be(k.d,r=u,m))do if(f+=10,p=D(g,f),o=s?$(c,f+10):D(t,f),k=V(p,o,f,1),!i){+M(k.d).slice(r+1,r+15)+1==1e14&&(k=B(k,u+1,0));break}while(be(k.d,r+=10,m));return E=!0,B(k,u,m)},h.minus=h.sub=function(t){var s,n,o,r,i,p,f,k,g,c,u,m,v=this,x=v.constructor;if(t=new x(t),!v.d||!t.d)return!v.s||!t.s?t=new x(NaN):v.d?t.s=-t.s:t=new x(t.d||v.s!==t.s?v:NaN),t;if(v.s!=t.s)return t.s=-t.s,v.plus(t);if(g=v.d,m=t.d,f=x.precision,k=x.rounding,!g[0]||!m[0]){if(m[0])t.s=-t.s;else if(g[0])t=new x(v);else return new x(k===3?-0:0);return E?B(t,f,k):t}if(n=X(t.e/T),c=X(v.e/T),g=g.slice(),i=c-n,i){for(u=i<0,u?(s=g,i=-i,p=m.length):(s=m,n=c,p=g.length),o=Math.max(Math.ceil(f/T),p)+2,i>o&&(i=o,s.length=1),s.reverse(),o=i;o--;)s.push(0);s.reverse()}else{for(o=g.length,p=m.length,u=o<p,u&&(p=o),o=0;o<p;o++)if(g[o]!=m[o]){u=g[o]<m[o];break}i=0}for(u&&(s=g,g=m,m=s,t.s=-t.s),p=g.length,o=m.length-p;o>0;--o)g[p++]=0;for(o=m.length;o>i;){if(g[--o]<m[o]){for(r=o;r&&g[--r]===0;)g[r]=he-1;--g[r],g[o]+=he}g[o]-=m[o]}for(;g[--p]===0;)g.pop();for(;g[0]===0;g.shift())--n;return g[0]?(t.d=g,t.e=_e(g,n),E?B(t,f,k):t):new x(k===3?-0:0)},h.modulo=h.mod=function(t){var s,n=this,o=n.constructor;return t=new o(t),!n.d||!t.s||t.d&&!t.d[0]?new o(NaN):!t.d||n.d&&!n.d[0]?B(new o(n),o.precision,o.rounding):(E=!1,o.modulo==9?(s=V(n,t.abs(),0,3,1),s.s*=t.s):s=V(n,t,0,o.modulo,1),s=s.times(t),E=!0,n.minus(s))},h.naturalExponential=h.exp=function(){return P(this)},h.naturalLogarithm=h.ln=function(){return D(this)},h.negated=h.neg=function(){var t=new this.constructor(this);return t.s=-t.s,B(t)},h.plus=h.add=function(t){var s,n,o,r,i,p,f,k,g,c,u=this,m=u.constructor;if(t=new m(t),!u.d||!t.d)return!u.s||!t.s?t=new m(NaN):u.d||(t=new m(t.d||u.s===t.s?u:NaN)),t;if(u.s!=t.s)return t.s=-t.s,u.minus(t);if(g=u.d,c=t.d,f=m.precision,k=m.rounding,!g[0]||!c[0])return c[0]||(t=new m(u)),E?B(t,f,k):t;if(i=X(u.e/T),o=X(t.e/T),g=g.slice(),r=i-o,r){for(r<0?(n=g,r=-r,p=c.length):(n=c,o=i,p=g.length),i=Math.ceil(f/T),p=i>p?i+1:p+1,r>p&&(r=p,n.length=1),n.reverse();r--;)n.push(0);n.reverse()}for(p=g.length,r=c.length,p-r<0&&(r=p,n=c,c=g,g=n),s=0;r;)s=(g[--r]=g[r]+c[r]+s)/he|0,g[r]%=he;for(s&&(g.unshift(s),++o),p=g.length;g[--p]==0;)g.pop();return t.d=g,t.e=_e(g,o),E?B(t,f,k):t},h.precision=h.sd=function(t){var s,n=this;if(t!==void 0&&t!==!!t&&t!==1&&t!==0)throw Error(A+t);return n.d?(s=fe(n.d),t&&n.e+1>s&&(s=n.e+1)):s=NaN,s},h.round=function(){var t=this,s=t.constructor;return B(new s(t),t.e+1,s.rounding)},h.sine=h.sin=function(){var t,s,n=this,o=n.constructor;return n.isFinite()?n.isZero()?new o(n):(t=o.precision,s=o.rounding,o.precision=t+Math.max(n.e,n.sd())+T,o.rounding=1,n=Z(o,Ie(o,n)),o.precision=t,o.rounding=s,B(G>2?n.neg():n,t,s,!0)):new o(NaN)},h.squareRoot=h.sqrt=function(){var t,s,n,o,r,i,p=this,f=p.d,k=p.e,g=p.s,c=p.constructor;if(g!==1||!f||!f[0])return new c(!g||g<0&&(!f||f[0])?NaN:f?p:1/0);for(E=!1,g=Math.sqrt(+p),g==0||g==1/0?(s=M(f),(s.length+k)%2==0&&(s+="0"),g=Math.sqrt(s),k=X((k+1)/2)-(k<0||k%2),g==1/0?s="5e"+k:(s=g.toExponential(),s=s.slice(0,s.indexOf("e")+1)+k),o=new c(s)):o=new c(g.toString()),n=(k=c.precision)+3;;)if(i=o,o=i.plus(V(p,i,n+2,1)).times(.5),M(i.d).slice(0,n)===(s=M(o.d)).slice(0,n))if(s=s.slice(n-3,n+1),s=="9999"||!r&&s=="4999"){if(!r&&(B(i,k+1,0),i.times(i).eq(p))){o=i;break}n+=4,r=1}else{(!+s||!+s.slice(1)&&s.charAt(0)=="5")&&(B(o,k+1,1),t=!o.times(o).eq(p));break}return E=!0,B(o,k,c.rounding,t)},h.tangent=h.tan=function(){var t,s,n=this,o=n.constructor;return n.isFinite()?n.isZero()?new o(n):(t=o.precision,s=o.rounding,o.precision=t+10,o.rounding=1,n=n.sin(),n.s=1,n=V(n,new o(1).minus(n.times(n)).sqrt(),t+10,0),o.precision=t,o.rounding=s,B(G==2||G==4?n.neg():n,t,s,!0)):new o(NaN)},h.times=h.mul=function(t){var s,n,o,r,i,p,f,k,g,c=this,u=c.constructor,m=c.d,v=(t=new u(t)).d;if(t.s*=c.s,!m||!m[0]||!v||!v[0])return new u(!t.s||m&&!m[0]&&!v||v&&!v[0]&&!m?NaN:!m||!v?t.s/0:t.s*0);for(n=X(c.e/T)+X(t.e/T),k=m.length,g=v.length,k<g&&(i=m,m=v,v=i,p=k,k=g,g=p),i=[],p=k+g,o=p;o--;)i.push(0);for(o=g;--o>=0;){for(s=0,r=k+o;r>o;)f=i[r]+v[o]*m[r-o-1]+s,i[r--]=f%he|0,s=f/he|0;i[r]=(i[r]+s)%he|0}for(;!i[--p];)i.pop();return s?++n:i.shift(),t.d=i,t.e=_e(i,n),E?B(t,u.precision,u.rounding):t},h.toBinary=function(t,s){return ze(this,2,t,s)},h.toDecimalPlaces=h.toDP=function(t,s){var n=this,o=n.constructor;return n=new o(n),t===void 0?n:(z(t,0,j),s===void 0?s=o.rounding:z(s,0,8),B(n,t+n.e+1,s))},h.toExponential=function(t,s){var n,o=this,r=o.constructor;return t===void 0?n=Oe(o,!0):(z(t,0,j),s===void 0?s=r.rounding:z(s,0,8),o=B(new r(o),t+1,s),n=Oe(o,!0,t+1)),o.isNeg()&&!o.isZero()?"-"+n:n},h.toFixed=function(t,s){var n,o,r=this,i=r.constructor;return t===void 0?n=Oe(r):(z(t,0,j),s===void 0?s=i.rounding:z(s,0,8),o=B(new i(r),t+r.e+1,s),n=Oe(o,!1,t+o.e+1)),r.isNeg()&&!r.isZero()?"-"+n:n},h.toFraction=function(t){var s,n,o,r,i,p,f,k,g,c,u,m,v=this,x=v.d,w=v.constructor;if(!x)return new w(v);if(g=n=new w(1),o=k=new w(0),s=new w(o),i=s.e=fe(x)-v.e-1,p=i%T,s.d[0]=ee(10,p<0?T+p:p),t==null)t=i>0?s:g;else{if(f=new w(t),!f.isInt()||f.lt(g))throw Error(A+f);t=f.gt(s)?i>0?s:g:f}for(E=!1,f=new w(M(x)),c=w.precision,w.precision=i=x.length*T*2;u=V(f,s,0,1,1),r=n.plus(u.times(o)),r.cmp(t)!=1;)n=o,o=r,r=g,g=k.plus(u.times(r)),k=r,r=s,s=f.minus(u.times(r)),f=r;return r=V(t.minus(n),o,0,1,1),k=k.plus(r.times(g)),n=n.plus(r.times(o)),k.s=g.s=v.s,m=V(g,o,i,1).minus(v).abs().cmp(V(k,n,i,1).minus(v).abs())<1?[g,o]:[k,n],w.precision=c,E=!0,m},h.toHexadecimal=h.toHex=function(t,s){return ze(this,16,t,s)},h.toNearest=function(t,s){var n=this,o=n.constructor;if(n=new o(n),t==null){if(!n.d)return n;t=new o(1),s=o.rounding}else{if(t=new o(t),s===void 0?s=o.rounding:z(s,0,8),!n.d)return t.s?n:t;if(!t.d)return t.s&&(t.s=n.s),t}return t.d[0]?(E=!1,n=V(n,t,0,s,1).times(t),E=!0,B(n)):(t.s=n.s,n=t),n},h.toNumber=function(){return+this},h.toOctal=function(t,s){return ze(this,8,t,s)},h.toPower=h.pow=function(t){var s,n,o,r,i,p,f=this,k=f.constructor,g=+(t=new k(t));if(!f.d||!t.d||!f.d[0]||!t.d[0])return new k(ee(+f,g));if(f=new k(f),f.eq(1))return f;if(o=k.precision,i=k.rounding,t.eq(1))return B(f,o,i);if(s=X(t.e/T),s>=t.d.length-1&&(n=g<0?-g:g)<=we)return r=Q(k,f,n,o),t.s<0?new k(1).div(r):B(r,o,i);if(p=f.s,p<0){if(s<t.d.length-1)return new k(NaN);if((t.d[s]&1)==0&&(p=1),f.e==0&&f.d[0]==1&&f.d.length==1)return f.s=p,f}return n=ee(+f,g),s=n==0||!isFinite(n)?X(g*(Math.log("0."+M(f.d))/Math.LN10+f.e+1)):new k(n+"").e,s>k.maxE+1||s<k.minE-1?new k(s>0?p/0:0):(E=!1,k.rounding=f.s=1,n=Math.min(12,(s+"").length),r=P(t.times(D(f,o+n)),o),r.d&&(r=B(r,o+5,1),be(r.d,o,i)&&(s=o+10,r=B(P(t.times(D(f,s+n)),s),s+5,1),+M(r.d).slice(o+1,o+15)+1==1e14&&(r=B(r,o+1,0)))),r.s=p,E=!0,k.rounding=i,B(r,o,i))},h.toPrecision=function(t,s){var n,o=this,r=o.constructor;return t===void 0?n=Oe(o,o.e<=r.toExpNeg||o.e>=r.toExpPos):(z(t,1,j),s===void 0?s=r.rounding:z(s,0,8),o=B(new r(o),t,s),n=Oe(o,t<=o.e||o.e<=r.toExpNeg,t)),o.isNeg()&&!o.isZero()?"-"+n:n},h.toSignificantDigits=h.toSD=function(t,s){var n=this,o=n.constructor;return t===void 0?(t=o.precision,s=o.rounding):(z(t,1,j),s===void 0?s=o.rounding:z(s,0,8)),B(new o(n),t,s)},h.toString=function(){var t=this,s=t.constructor,n=Oe(t,t.e<=s.toExpNeg||t.e>=s.toExpPos);return t.isNeg()&&!t.isZero()?"-"+n:n},h.truncated=h.trunc=function(){return B(new this.constructor(this),this.e+1,1)},h.valueOf=h.toJSON=function(){var t=this,s=t.constructor,n=Oe(t,t.e<=s.toExpNeg||t.e>=s.toExpPos);return t.isNeg()?"-"+n:n};function M(t){var s,n,o,r=t.length-1,i="",p=t[0];if(r>0){for(i+=p,s=1;s<r;s++)o=t[s]+"",n=T-o.length,n&&(i+=R(n)),i+=o;p=t[s],o=p+"",n=T-o.length,n&&(i+=R(n))}else if(p===0)return"0";for(;p%10===0;)p/=10;return i+p}function z(t,s,n){if(t!==~~t||t<s||t>n)throw Error(A+t)}function be(t,s,n,o){var r,i,p,f;for(i=t[0];i>=10;i/=10)--s;return--s<0?(s+=T,r=0):(r=Math.ceil((s+1)/T),s%=T),i=ee(10,T-s),f=t[r]%i|0,o==null?s<3?(s==0?f=f/100|0:s==1&&(f=f/10|0),p=n<4&&f==99999||n>3&&f==49999||f==5e4||f==0):p=(n<4&&f+1==i||n>3&&f+1==i/2)&&(t[r+1]/i/100|0)==ee(10,s-2)-1||(f==i/2||f==0)&&(t[r+1]/i/100|0)==0:s<4?(s==0?f=f/1e3|0:s==1?f=f/100|0:s==2&&(f=f/10|0),p=(o||n<4)&&f==9999||!o&&n>3&&f==4999):p=((o||n<4)&&f+1==i||!o&&n>3&&f+1==i/2)&&(t[r+1]/i/1e3|0)==ee(10,s-3)-1,p}function je(t,s,n){for(var o,r=[0],i,p=0,f=t.length;p<f;){for(i=r.length;i--;)r[i]*=s;for(r[0]+=d.indexOf(t.charAt(p++)),o=0;o<r.length;o++)r[o]>n-1&&(r[o+1]===void 0&&(r[o+1]=0),r[o+1]+=r[o]/n|0,r[o]%=n)}return r.reverse()}function Se(t,s){var n,o,r;if(s.isZero())return s;o=s.d.length,o<32?(n=Math.ceil(o/3),r=(1/De(4,n)).toString()):(n=16,r="2.3283064365386962890625e-10"),t.precision+=n,s=ye(t,1,s.times(r),new t(1));for(var i=n;i--;){var p=s.times(s);s=p.times(p).minus(p).times(8).plus(1)}return t.precision-=n,s}var V=(function(){function t(o,r,i){var p,f=0,k=o.length;for(o=o.slice();k--;)p=o[k]*r+f,o[k]=p%i|0,f=p/i|0;return f&&o.unshift(f),o}function s(o,r,i,p){var f,k;if(i!=p)k=i>p?1:-1;else for(f=k=0;f<i;f++)if(o[f]!=r[f]){k=o[f]>r[f]?1:-1;break}return k}function n(o,r,i,p){for(var f=0;i--;)o[i]-=f,f=o[i]<r[i]?1:0,o[i]=f*p+o[i]-r[i];for(;!o[0]&&o.length>1;)o.shift()}return function(o,r,i,p,f,k){var g,c,u,m,v,x,w,K,pe,Ve,xe,Ce,Be,Ye,Tt,Dt,ss,os,Ht,Jt,as=o.constructor,is=o.s==r.s?1:-1,We=o.d,Qe=r.d;if(!We||!We[0]||!Qe||!Qe[0])return new as(!o.s||!r.s||(We?Qe&&We[0]==Qe[0]:!Qe)?NaN:We&&We[0]==0||!Qe?is*0:is/0);for(k?(v=1,c=o.e-r.e):(k=he,v=T,c=X(o.e/v)-X(r.e/v)),Ht=Qe.length,ss=We.length,pe=new as(is),Ve=pe.d=[],u=0;Qe[u]==(We[u]||0);u++);if(Qe[u]>(We[u]||0)&&c--,i==null?(Ye=i=as.precision,p=as.rounding):f?Ye=i+(o.e-r.e)+1:Ye=i,Ye<0)Ve.push(1),x=!0;else{if(Ye=Ye/v+2|0,u=0,Ht==1){for(m=0,Qe=Qe[0],Ye++;(u<ss||m)&&Ye--;u++)Tt=m*k+(We[u]||0),Ve[u]=Tt/Qe|0,m=Tt%Qe|0;x=m||u<ss}else{for(m=k/(Qe[0]+1)|0,m>1&&(Qe=t(Qe,m,k),We=t(We,m,k),Ht=Qe.length,ss=We.length),Dt=Ht,xe=We.slice(0,Ht),Ce=xe.length;Ce<Ht;)xe[Ce++]=0;Jt=Qe.slice(),Jt.unshift(0),os=Qe[0],Qe[1]>=k/2&&++os;do m=0,g=s(Qe,xe,Ht,Ce),g<0?(Be=xe[0],Ht!=Ce&&(Be=Be*k+(xe[1]||0)),m=Be/os|0,m>1?(m>=k&&(m=k-1),w=t(Qe,m,k),K=w.length,Ce=xe.length,g=s(w,xe,K,Ce),g==1&&(m--,n(w,Ht<K?Jt:Qe,K,k))):(m==0&&(g=m=1),w=Qe.slice()),K=w.length,K<Ce&&w.unshift(0),n(xe,w,Ce,k),g==-1&&(Ce=xe.length,g=s(Qe,xe,Ht,Ce),g<1&&(m++,n(xe,Ht<Ce?Jt:Qe,Ce,k))),Ce=xe.length):g===0&&(m++,xe=[0]),Ve[u++]=m,g&&xe[0]?xe[Ce++]=We[Dt]||0:(xe=[We[Dt]],Ce=1);while((Dt++<ss||xe[0]!==void 0)&&Ye--);x=xe[0]!==void 0}Ve[0]||Ve.shift()}if(v==1)pe.e=c,te=x;else{for(u=1,m=Ve[0];m>=10;m/=10)u++;pe.e=u+c*v-1,B(pe,f?i+pe.e+1:i,p,x)}return pe}})();function B(t,s,n,o){var r,i,p,f,k,g,c,u,m,v=t.constructor;e:if(s!=null){if(u=t.d,!u)return t;for(r=1,f=u[0];f>=10;f/=10)r++;if(i=s-r,i<0)i+=T,p=s,c=u[m=0],k=c/ee(10,r-p-1)%10|0;else if(m=Math.ceil((i+1)/T),f=u.length,m>=f)if(o){for(;f++<=m;)u.push(0);c=k=0,r=1,i%=T,p=i-T+1}else break e;else{for(c=f=u[m],r=1;f>=10;f/=10)r++;i%=T,p=i-T+r,k=p<0?0:c/ee(10,r-p-1)%10|0}if(o=o||s<0||u[m+1]!==void 0||(p<0?c:c%ee(10,r-p-1)),g=n<4?(k||o)&&(n==0||n==(t.s<0?3:2)):k>5||k==5&&(n==4||o||n==6&&(i>0?p>0?c/ee(10,r-p):0:u[m-1])%10&1||n==(t.s<0?8:7)),s<1||!u[0])return u.length=0,g?(s-=t.e+1,u[0]=ee(10,(T-s%T)%T),t.e=-s||0):u[0]=t.e=0,t;if(i==0?(u.length=m,f=1,m--):(u.length=m+1,f=ee(10,T-i),u[m]=p>0?(c/ee(10,r-p)%ee(10,p)|0)*f:0),g)for(;;)if(m==0){for(i=1,p=u[0];p>=10;p/=10)i++;for(p=u[0]+=f,f=1;p>=10;p/=10)f++;i!=f&&(t.e++,u[0]==he&&(u[0]=1));break}else{if(u[m]+=f,u[m]!=he)break;u[m--]=0,f=1}for(i=u.length;u[--i]===0;)u.pop()}return E&&(t.e>v.maxE?(t.d=null,t.e=NaN):t.e<v.minE&&(t.e=0,t.d=[0])),t}function Oe(t,s,n){if(!t.isFinite())return F(t);var o,r=t.e,i=M(t.d),p=i.length;return s?(n&&(o=n-p)>0?i=i.charAt(0)+"."+i.slice(1)+R(o):p>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(t.e<0?"e":"e+")+t.e):r<0?(i="0."+R(-r-1)+i,n&&(o=n-p)>0&&(i+=R(o))):r>=p?(i+=R(r+1-p),n&&(o=n-r-1)>0&&(i=i+"."+R(o))):((o=r+1)<p&&(i=i.slice(0,o)+"."+i.slice(o)),n&&(o=n-p)>0&&(r+1===p&&(i+="."),i+=R(o))),i}function _e(t,s){var n=t[0];for(s*=T;n>=10;n/=10)s++;return s}function $(t,s,n){if(s>J)throw E=!0,n&&(t.precision=n),Error(W);return B(new t(O),s,1,!0)}function oe(t,s,n){if(s>H)throw Error(W);return B(new t(y),s,n,!0)}function fe(t){var s=t.length-1,n=s*T+1;if(s=t[s],s){for(;s%10==0;s/=10)n--;for(s=t[0];s>=10;s/=10)n++}return n}function R(t){for(var s="";t--;)s+="0";return s}function Q(t,s,n,o){var r,i=new t(1),p=Math.ceil(o/T+4);for(E=!1;;){if(n%2&&(i=i.times(s),Pe(i.d,p)&&(r=!0)),n=X(n/2),n===0){n=i.d.length-1,r&&i.d[n]===0&&++i.d[n];break}s=s.times(s),Pe(s.d,p)}return E=!0,i}function Ee(t){return t.d[t.d.length-1]&1}function re(t,s,n){for(var o,r,i=new t(s[0]),p=0;++p<s.length;){if(r=new t(s[p]),!r.s){i=r;break}o=i.cmp(r),(o===n||o===0&&i.s===n)&&(i=r)}return i}function P(t,s){var n,o,r,i,p,f,k,g=0,c=0,u=0,m=t.constructor,v=m.rounding,x=m.precision;if(!t.d||!t.d[0]||t.e>17)return new m(t.d?t.d[0]?t.s<0?0:1/0:1:t.s?t.s<0?0:t:NaN);for(s==null?(E=!1,k=x):k=s,f=new m(.03125);t.e>-2;)t=t.times(f),u+=5;for(o=Math.log(ee(2,u))/Math.LN10*2+5|0,k+=o,n=i=p=new m(1),m.precision=k;;){if(i=B(i.times(t),k,1),n=n.times(++c),f=p.plus(V(i,n,k,1)),M(f.d).slice(0,k)===M(p.d).slice(0,k)){for(r=u;r--;)p=B(p.times(p),k,1);if(s==null)if(g<3&&be(p.d,k-o,v,g))m.precision=k+=10,n=i=f=new m(1),c=0,g++;else return B(p,m.precision=x,v,E=!0);else return m.precision=x,p}p=f}}function D(t,s){var n,o,r,i,p,f,k,g,c,u,m,v=1,x=10,w=t,K=w.d,pe=w.constructor,Ve=pe.rounding,xe=pe.precision;if(w.s<0||!K||!K[0]||!w.e&&K[0]==1&&K.length==1)return new pe(K&&!K[0]?-1/0:w.s!=1?NaN:K?0:w);if(s==null?(E=!1,c=xe):c=s,pe.precision=c+=x,n=M(K),o=n.charAt(0),Math.abs(i=w.e)<15e14){for(;o<7&&o!=1||o==1&&n.charAt(1)>3;)w=w.times(t),n=M(w.d),o=n.charAt(0),v++;i=w.e,o>1?(w=new pe("0."+n),i++):w=new pe(o+"."+n.slice(1))}else return g=$(pe,c+2,xe).times(i+""),w=D(new pe(o+"."+n.slice(1)),c-x).plus(g),pe.precision=xe,s==null?B(w,xe,Ve,E=!0):w;for(u=w,k=p=w=V(w.minus(1),w.plus(1),c,1),m=B(w.times(w),c,1),r=3;;){if(p=B(p.times(m),c,1),g=k.plus(V(p,new pe(r),c,1)),M(g.d).slice(0,c)===M(k.d).slice(0,c))if(k=k.times(2),i!==0&&(k=k.plus($(pe,c+2,xe).times(i+""))),k=V(k,new pe(v),c,1),s==null)if(be(k.d,c-x,Ve,f))pe.precision=c+=x,g=p=w=V(u.minus(1),u.plus(1),c,1),m=B(w.times(w),c,1),r=f=1;else return B(k,pe.precision=xe,Ve,E=!0);else return pe.precision=xe,k;k=g,r+=2}}function F(t){return String(t.s*t.s/0)}function C(t,s){var n,o,r;for((n=s.indexOf("."))>-1&&(s=s.replace(".","")),(o=s.search(/e/i))>0?(n<0&&(n=o),n+=+s.slice(o+1),s=s.substring(0,o)):n<0&&(n=s.length),o=0;s.charCodeAt(o)===48;o++);for(r=s.length;s.charCodeAt(r-1)===48;--r);if(s=s.slice(o,r),s){if(r-=o,t.e=n=n-o-1,t.d=[],o=(n+1)%T,n<0&&(o+=T),o<r){for(o&&t.d.push(+s.slice(0,o)),r-=T;o<r;)t.d.push(+s.slice(o,o+=T));s=s.slice(o),o=T-s.length}else o-=r;for(;o--;)s+="0";t.d.push(+s),E&&(t.e>t.constructor.maxE?(t.d=null,t.e=NaN):t.e<t.constructor.minE&&(t.e=0,t.d=[0]))}else t.e=0,t.d=[0];return t}function N(t,s){var n,o,r,i,p,f,k,g,c;if(s.indexOf("_")>-1){if(s=s.replace(/(\d)_(?=\d)/g,"$1"),Ke.test(s))return C(t,s)}else if(s==="Infinity"||s==="NaN")return+s||(t.s=NaN),t.e=NaN,t.d=null,t;if(Le.test(s))n=16,s=s.toLowerCase();else if(He.test(s))n=2;else if(Ae.test(s))n=8;else throw Error(A+s);for(i=s.search(/p/i),i>0?(k=+s.slice(i+1),s=s.substring(2,i)):s=s.slice(2),i=s.indexOf("."),p=i>=0,o=t.constructor,p&&(s=s.replace(".",""),f=s.length,i=f-i,r=Q(o,new o(n),i,i*2)),g=je(s,n,he),c=g.length-1,i=c;g[i]===0;--i)g.pop();return i<0?new o(t.s*0):(t.e=_e(g,c),t.d=g,E=!1,p&&(t=V(t,r,f*4)),k&&(t=t.times(Math.abs(k)<54?ee(2,k):Ot.pow(2,k))),E=!0,t)}function Z(t,s){var n,o=s.d.length;if(o<3)return s.isZero()?s:ye(t,2,s,s);n=1.4*Math.sqrt(o),n=n>16?16:n|0,s=s.times(1/De(5,n)),s=ye(t,2,s,s);for(var r,i=new t(5),p=new t(16),f=new t(20);n--;)r=s.times(s),s=s.times(i.plus(r.times(p.times(r).minus(f))));return s}function ye(t,s,n,o,r){var i,p,f,k,g=1,c=t.precision,u=Math.ceil(c/T);for(E=!1,k=n.times(n),f=new t(o);;){if(p=V(f.times(k),new t(s++*s++),c,1),f=r?o.plus(p):o.minus(p),o=V(p.times(k),new t(s++*s++),c,1),p=f.plus(o),p.d[u]!==void 0){for(i=u;p.d[i]===f.d[i]&&i--;);if(i==-1)break}i=f,f=o,o=p,p=i,g++}return E=!0,p.d.length=u+1,p}function De(t,s){for(var n=t;--s;)n*=t;return n}function Ie(t,s){var n,o=s.s<0,r=oe(t,t.precision,1),i=r.times(.5);if(s=s.abs(),s.lte(i))return G=o?4:1,s;if(n=s.divToInt(r),n.isZero())G=o?3:2;else{if(s=s.minus(n.times(r)),s.lte(i))return G=Ee(n)?o?2:3:o?4:1,s;G=Ee(n)?o?1:4:o?3:2}return s.minus(r).abs()}function ze(t,s,n,o){var r,i,p,f,k,g,c,u,m,v=t.constructor,x=n!==void 0;if(x?(z(n,1,j),o===void 0?o=v.rounding:z(o,0,8)):(n=v.precision,o=v.rounding),!t.isFinite())c=F(t);else{for(c=Oe(t),p=c.indexOf("."),x?(r=2,s==16?n=n*4-3:s==8&&(n=n*3-2)):r=s,p>=0&&(c=c.replace(".",""),m=new v(1),m.e=c.length-p,m.d=je(Oe(m),10,r),m.e=m.d.length),u=je(c,10,r),i=k=u.length;u[--k]==0;)u.pop();if(!u[0])c=x?"0p+0":"0";else{if(p<0?i--:(t=new v(t),t.d=u,t.e=i,t=V(t,m,n,o,0,r),u=t.d,i=t.e,g=te),p=u[n],f=r/2,g=g||u[n+1]!==void 0,g=o<4?(p!==void 0||g)&&(o===0||o===(t.s<0?3:2)):p>f||p===f&&(o===4||g||o===6&&u[n-1]&1||o===(t.s<0?8:7)),u.length=n,g)for(;++u[--n]>r-1;)u[n]=0,n||(++i,u.unshift(1));for(k=u.length;!u[k-1];--k);for(p=0,c="";p<k;p++)c+=d.charAt(u[p]);if(x){if(k>1)if(s==16||s==8){for(p=s==16?4:3,--k;k%p;k++)c+="0";for(u=je(c,r,s),k=u.length;!u[k-1];--k);for(p=1,c="1.";p<k;p++)c+=d.charAt(u[p])}else c=c.charAt(0)+"."+c.slice(1);c=c+(i<0?"p":"p+")+i}else if(i<0){for(;++i;)c="0"+c;c="0."+c}else if(++i>k)for(i-=k;i--;)c+="0";else i<k&&(c=c.slice(0,i)+"."+c.slice(i))}c=(s==16?"0x":s==2?"0b":s==8?"0o":"")+c}return t.s<0?"-"+c:c}function Pe(t,s){if(t.length>s)return t.length=s,!0}function ie(t){return new this(t).abs()}function Y(t){return new this(t).acos()}function de(t){return new this(t).acosh()}function Te(t,s){return new this(t).plus(s)}function ae(t){return new this(t).asin()}function ue(t){return new this(t).asinh()}function nt(t){return new this(t).atan()}function qe(t){return new this(t).atanh()}function Xe(t,s){t=new this(t),s=new this(s);var n,o=this.precision,r=this.rounding,i=o+4;return!t.s||!s.s?n=new this(NaN):!t.d&&!s.d?(n=oe(this,i,1).times(s.s>0?.25:.75),n.s=t.s):!s.d||t.isZero()?(n=s.s<0?oe(this,o,r):new this(0),n.s=t.s):!t.d||s.isZero()?(n=oe(this,i,1).times(.5),n.s=t.s):s.s<0?(this.precision=i,this.rounding=1,n=this.atan(V(t,s,i,1)),s=oe(this,i,1),this.precision=o,this.rounding=r,n=t.s<0?n.minus(s):n.plus(s)):n=this.atan(V(t,s,i,1)),n}function Je(t){return new this(t).cbrt()}function Re(t){return B(t=new this(t),t.e+1,2)}function et(t,s,n){return new this(t).clamp(s,n)}function ct(t){if(!t||typeof t!="object")throw Error(ce+"Object expected");var s,n,o,r=t.defaults===!0,i=["precision",1,j,"rounding",0,8,"toExpNeg",-l,0,"toExpPos",0,l,"maxE",0,l,"minE",-l,0,"modulo",0,9];for(s=0;s<i.length;s+=3)if(n=i[s],r&&(this[n]=S[n]),(o=t[n])!==void 0)if(X(o)===o&&o>=i[s+1]&&o<=i[s+2])this[n]=o;else throw Error(A+n+": "+o);if(n="crypto",r&&(this[n]=S[n]),(o=t[n])!==void 0)if(o===!0||o===!1||o===0||o===1)if(o)if(typeof crypto!="undefined"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[n]=!0;else throw Error(le);else this[n]=!1;else throw Error(A+n+": "+o);return this}function rt(t){return new this(t).cos()}function $e(t){return new this(t).cosh()}function ut(t){var s,n,o;function r(i){var p,f,k,g=this;if(!(g instanceof r))return new r(i);if(g.constructor=r,se(i)){g.s=i.s,E?!i.d||i.e>r.maxE?(g.e=NaN,g.d=null):i.e<r.minE?(g.e=0,g.d=[0]):(g.e=i.e,g.d=i.d.slice()):(g.e=i.e,g.d=i.d?i.d.slice():i.d);return}if(k=typeof i,k==="number"){if(i===0){g.s=1/i<0?-1:1,g.e=0,g.d=[0];return}if(i<0?(i=-i,g.s=-1):g.s=1,i===~~i&&i<1e7){for(p=0,f=i;f>=10;f/=10)p++;E?p>r.maxE?(g.e=NaN,g.d=null):p<r.minE?(g.e=0,g.d=[0]):(g.e=p,g.d=[i]):(g.e=p,g.d=[i]);return}if(i*0!==0){i||(g.s=NaN),g.e=NaN,g.d=null;return}return C(g,i.toString())}if(k==="string")return(f=i.charCodeAt(0))===45?(i=i.slice(1),g.s=-1):(f===43&&(i=i.slice(1)),g.s=1),Ke.test(i)?C(g,i):N(g,i);if(k==="bigint")return i<0?(i=-i,g.s=-1):g.s=1,C(g,i.toString());throw Error(A+i)}if(r.prototype=h,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.EUCLID=9,r.config=r.set=ct,r.clone=ut,r.isDecimal=se,r.abs=ie,r.acos=Y,r.acosh=de,r.add=Te,r.asin=ae,r.asinh=ue,r.atan=nt,r.atanh=qe,r.atan2=Xe,r.cbrt=Je,r.ceil=Re,r.clamp=et,r.cos=rt,r.cosh=$e,r.div=_t,r.exp=at,r.floor=jt,r.hypot=ot,r.ln=Ne,r.log=tt,r.log10=dt,r.log2=lt,r.max=pt,r.min=yt,r.mod=At,r.mul=Ct,r.pow=vt,r.random=kt,r.round=Lt,r.sign=ke,r.sin=Ue,r.sinh=mt,r.sqrt=xt,r.sub=gt,r.sum=zt,r.tan=Rt,r.tanh=St,r.trunc=Ft,t===void 0&&(t={}),t&&t.defaults!==!0)for(o=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],s=0;s<o.length;)t.hasOwnProperty(n=o[s++])||(t[n]=this[n]);return r.config(t),r}function _t(t,s){return new this(t).div(s)}function at(t){return new this(t).exp()}function jt(t){return B(t=new this(t),t.e+1,3)}function ot(){var t,s,n=new this(0);for(E=!1,t=0;t<arguments.length;)if(s=new this(arguments[t++]),s.d)n.d&&(n=n.plus(s.times(s)));else{if(s.s)return E=!0,new this(1/0);n=s}return E=!0,n.sqrt()}function se(t){return t instanceof Ot||t&&t.toStringTag===me||!1}function Ne(t){return new this(t).ln()}function tt(t,s){return new this(t).log(s)}function lt(t){return new this(t).log(2)}function dt(t){return new this(t).log(10)}function pt(){return re(this,arguments,-1)}function yt(){return re(this,arguments,1)}function At(t,s){return new this(t).mod(s)}function Ct(t,s){return new this(t).mul(s)}function vt(t,s){return new this(t).pow(s)}function kt(t){var s,n,o,r,i=0,p=new this(1),f=[];if(t===void 0?t=this.precision:z(t,1,j),o=Math.ceil(t/T),this.crypto)if(crypto.getRandomValues)for(s=crypto.getRandomValues(new Uint32Array(o));i<o;)r=s[i],r>=429e7?s[i]=crypto.getRandomValues(new Uint32Array(1))[0]:f[i++]=r%1e7;else if(crypto.randomBytes){for(s=crypto.randomBytes(o*=4);i<o;)r=s[i]+(s[i+1]<<8)+(s[i+2]<<16)+((s[i+3]&127)<<24),r>=214e7?crypto.randomBytes(4).copy(s,i):(f.push(r%1e7),i+=4);i=o/4}else throw Error(le);else for(;i<o;)f[i++]=Math.random()*1e7|0;for(o=f[--i],t%=T,o&&t&&(r=ee(10,T-t),f[i]=(o/r|0)*r);f[i]===0;i--)f.pop();if(i<0)n=0,f=[0];else{for(n=-1;f[0]===0;n-=T)f.shift();for(o=1,r=f[0];r>=10;r/=10)o++;o<T&&(n-=T-o)}return p.e=n,p.d=f,p}function Lt(t){return B(t=new this(t),t.e+1,this.rounding)}function ke(t){return t=new this(t),t.d?t.d[0]?t.s:0*t.s:t.s||NaN}function Ue(t){return new this(t).sin()}function mt(t){return new this(t).sinh()}function xt(t){return new this(t).sqrt()}function gt(t,s){return new this(t).sub(s)}function zt(){var t=0,s=arguments,n=new this(s[t]);for(E=!1;n.s&&++t<s.length;)n=n.plus(s[t]);return E=!0,B(n,this.precision,this.rounding)}function Rt(t){return new this(t).tan()}function St(t){return new this(t).tanh()}function Ft(t){return B(t=new this(t),t.e+1,1)}h[Symbol.for("nodejs.util.inspect.custom")]=h.toString,h[Symbol.toStringTag]="Decimal";var Ot=h.constructor=ut(S);O=new Ot(O),y=new Ot(y);const Wt=Ot},"./node_modules/.pnpm/react-textarea-autosize@8.5.3_@types+react@18.2.79_react@18.2.0/node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js"(ne,L,e){e.d(L,{A:()=>we});var l=e("./node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/extends.js"),j=e("./node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),d=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),O=e("./node_modules/.pnpm/use-latest@1.3.0_@types+react@18.2.79_react@18.2.0/node_modules/use-latest/dist/use-latest.esm.js"),y=e("./node_modules/.pnpm/use-composed-ref@1.4.0_@types+react@18.2.79_react@18.2.0/node_modules/use-composed-ref/dist/use-composed-ref.esm.js"),S={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},te=function(H){Object.keys(S).forEach(function(h){H.style.setProperty(h,S[h],"important")})},G=te,E=null,ce=function(H,h){var M=H.scrollHeight;return h.sizingStyle.boxSizing==="border-box"?M+h.borderSize:M-h.paddingSize};function A(J,H,h,M){h===void 0&&(h=1),M===void 0&&(M=1/0),E||(E=document.createElement("textarea"),E.setAttribute("tabindex","-1"),E.setAttribute("aria-hidden","true"),G(E)),E.parentNode===null&&document.body.appendChild(E);var z=J.paddingSize,be=J.borderSize,je=J.sizingStyle,Se=je.boxSizing;Object.keys(je).forEach(function($){var oe=$;E.style[oe]=je[oe]}),G(E),E.value=H;var V=ce(E,J);E.value=H,V=ce(E,J),E.value="x";var B=E.scrollHeight-z,Oe=B*h;Se==="border-box"&&(Oe=Oe+z+be),V=Math.max(Oe,V);var _e=B*M;return Se==="border-box"&&(_e=_e+z+be),V=Math.min(_e,V),[V,B]}var W=function(){},le=function(H,h){return H.reduce(function(M,z){return M[z]=h[z],M},{})},me=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],X=!!document.documentElement.currentStyle,ee=function(H){var h=window.getComputedStyle(H);if(h===null)return null;var M=le(me,h),z=M.boxSizing;if(z==="")return null;X&&z==="border-box"&&(M.width=parseFloat(M.width)+parseFloat(M.borderRightWidth)+parseFloat(M.borderLeftWidth)+parseFloat(M.paddingRight)+parseFloat(M.paddingLeft)+"px");var be=parseFloat(M.paddingBottom)+parseFloat(M.paddingTop),je=parseFloat(M.borderBottomWidth)+parseFloat(M.borderTopWidth);return{sizingStyle:M,paddingSize:be,borderSize:je}},He=ee;function Le(J,H,h){var M=(0,O.A)(h);d.useLayoutEffect(function(){var z=function(je){return M.current(je)};if(J)return J.addEventListener(H,z),function(){return J.removeEventListener(H,z)}},[])}var Ae=function(H){Le(window,"resize",H)},Ke=function(H){Le(document.fonts,"loadingdone",H)},he=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],T=function(H,h){var M=H.cacheMeasurements,z=H.maxRows,be=H.minRows,je=H.onChange,Se=je===void 0?W:je,V=H.onHeightChange,B=V===void 0?W:V,Oe=(0,j.A)(H,he),_e=Oe.value!==void 0,$=d.useRef(null),oe=(0,y.A)($,h),fe=d.useRef(0),R=d.useRef(),Q=function(){var P=$.current,D=M&&R.current?R.current:He(P);if(D){R.current=D;var F=A(D,P.value||P.placeholder||"x",be,z),C=F[0],N=F[1];fe.current!==C&&(fe.current=C,P.style.setProperty("height",C+"px","important"),B(C,{rowHeight:N}))}},Ee=function(P){_e||Q(),Se(P)};return d.useLayoutEffect(Q),Ae(Q),Ke(Q),d.createElement("textarea",(0,l.A)({},Oe,{onChange:Ee,ref:oe}))},we=d.forwardRef(T)},"./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"(ne,L,e){e.d(L,{A:()=>ee});var l=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(l),d=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),O=e.n(d),y=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertBySelector.js"),S=e.n(y),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),G=e.n(te),E=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),ce=e.n(E),A=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=e.n(A),le=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.107.1_esbuild@0.25.12_postcss@8.5.15_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+fields@0.57.0_@snack-uikit+locale@0.16.0_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/fields/dist/esm/hooks/styles.module.css"),me={};me.styleTagTransform=W(),me.setAttributes=G(),me.insert=S().bind(null,"head"),me.domAPI=O(),me.insertStyleElement=ce();var X=j()(le.A,me);const ee=le.A&&le.A.locals?le.A.locals:void 0},"./node_modules/.pnpm/use-composed-ref@1.4.0_@types+react@18.2.79_react@18.2.0/node_modules/use-composed-ref/dist/use-composed-ref.esm.js"(ne,L,e){e.d(L,{A:()=>d});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=function(y,S){if(typeof y=="function"){y(S);return}y.current=S},d=function(y,S){var te=l.useRef();return l.useCallback(function(G){y.current=G,te.current&&j(te.current,null),te.current=S,S&&j(S,G)},[S])}},"./node_modules/.pnpm/use-latest@1.3.0_@types+react@18.2.79_react@18.2.0/node_modules/use-latest/dist/use-latest.esm.js"(ne,L,e){e.d(L,{A:()=>d});var l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),j=l.useLayoutEffect,d=function(y){var S=l.useRef(y);return j(function(){S.current=y}),S}}}]);})();
