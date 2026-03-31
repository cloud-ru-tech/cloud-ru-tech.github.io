"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[5067],{"./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/components/Calendar/Calendar.js":((z,k,e)=>{e.d(k,{V:()=>Rs});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),p=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),r=e.n(p),y=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),pe=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),Z=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),O=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),w=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/hooks.js"),f=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/utils.js"),P=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js"),oe=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),G=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Item/utils.js");function ye([t,c],d){const{viewMode:n,viewShift:i,setViewShift:h,setFocus:m,onFocusLeave:_,mode:j}=(0,l.useContext)(P.Y),{rows:N,columns:q}=a.VF[n];return(0,l.useCallback)(V=>{switch(d==null||d(V),V.key){case"ArrowLeft":c&&m((0,G.k)([t,c-1]));return;case"ArrowRight":c<q-1&&m((0,G.k)([t,c+1]));return;case"ArrowUp":t?m((0,G.k)([t-1,c])):(h(i-1),m((0,G.k)([N-1,c])));return;case"ArrowDown":t<N-1?m((0,G.k)([t+1,c])):(h(i+1),m((0,G.k)([0,c])));return;case"Tab":!V.shiftKey&&(j!==a.NB.DateTime||n!=="month")&&(_==null||_("next"));return;default:}},[c,q,j,_,d,t,N,m,h,n,i])}var he=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ee=e.n(he),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),C=e.n(v),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),X=e.n(T),fe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),F=e.n(fe),_e=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),B=e.n(_e),Me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),U=e.n(Me),ie=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Item/styles.module.css"),R={};R.styleTagTransform=U(),R.setAttributes=F(),R.insert=X().bind(null,"head"),R.domAPI=C(),R.insertStyleElement=B();var re=ee()(ie.A,R);const K=ie.A&&ie.A.locals?ie.A.locals:void 0;function Y({data:t,className:c}){const{date:d,label:n,address:i,onSelect:h,onPreselect:m,onLeave:_,inRangePosition:j,isCurrent:N,isDisabled:q,isHoliday:V,isInCurrentLevelPeriod:je,isSelected:le,tabIndex:W,onKeyDown:Ie}=t,ue=(0,l.useRef)(null),{focus:Oe,setFocus:ae,size:De,getTestId:ts,locale:Je}=(0,l.useContext)(P.Y);(0,oe.N)(()=>{var Ee;(0,G.k)(i)===Oe&&((Ee=ue.current)===null||Ee===void 0||Ee.focus())},[Oe,i]),(0,oe.N)(()=>{var Ee;W===0&&Oe===a.ck&&((Ee=ue.current)===null||Ee===void 0||Ee.focus())},[Oe,W]);const us=ye(i,Ie),Le={"data-is-in-current-level-period":je||void 0,"data-is-selected":le||void 0,"data-in-range-position":j,"data-is-current":N||void 0,"data-is-holiday":V||void 0,"data-is-disabled":q||void 0,"data-size":De},_s=j!==a.E.Out;d.toLocaleString(Je,{weekday:"short"});const Ue=Ee=>{!q&&h&&h(Ee)};return(0,s.jsx)("div",Object.assign({className:r()(c,K.item)},Le,{children:(0,s.jsxs)("button",Object.assign({type:"button","aria-disabled":q,className:K.button,onClick:()=>Ue(d),onMouseEnter:()=>m==null?void 0:m(d),onFocus:()=>{ae((0,G.k)(i)),m==null||m(d)},onMouseLeave:_,onBlur:()=>{ae(void 0),_==null||_()},onKeyDown:us,ref:ue},Le,{"data-test-id":ts("item"),tabIndex:W,children:[_s&&(0,s.jsx)("div",Object.assign({className:K.range},Le)),(0,s.jsx)("div",Object.assign({className:K.box},Le)),(0,s.jsxs)("div",Object.assign({className:K.content},Le,{children:[(0,s.jsx)("span",{className:K.label,children:n}),N&&(0,s.jsx)("div",Object.assign({className:K.marker},Le))]}))]}))}))}var M=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Grid/styles.module.css"),A={};A.styleTagTransform=U(),A.setAttributes=F(),A.insert=X().bind(null,"head"),A.domAPI=C(),A.insertStyleElement=B();var o=ee()(M.A,A);const u=M.A&&M.A.locals?M.A.locals:void 0;function x({grid:t}){return(0,s.jsx)("table",{className:u.grid,border:0,children:(0,s.jsx)("tbody",{children:t.map((c,d)=>(0,s.jsx)("tr",{children:c.map((n,i)=>(0,s.jsx)("td",{children:(0,s.jsx)(Y,{data:n,className:u.item})},`${n.label}_${i}`))},d))})})}const b=t=>{const c=[],d=t.getFullYear();let n=-1;const{rows:i,columns:h}=a.VF[a.aj.Decade];for(let m=0;m<i;m++){const _=[];for(let j=0;j<h;j++)_.push({date:new Date(d+n++,0,1),address:[m,j]});c.push(_)}return c};function H(){const{referenceDate:t,setViewMode:c,setViewShift:d,preselectedRange:n,continuePreselect:i,restartPreselect:h,mode:m,setValue:_,startPreselect:j,completePreselect:N}=(0,l.useContext)(P.Y),q=(0,w.E)({buildGrid:b,isTheSameItem:f.R3,isInPeriod:f.WV,getItemLabel:f.SA,onSelect(V){if(m===a.NB.YearRange){n?N(V):j(V);return}if(m===a.NB.Year){_([V,V]);return}d((0,f._N)(t,V)),c(a.aj.Year)},onPreselect(V){n&&i(V)},onLeave(){n&&h()}});return(0,s.jsx)(x,{grid:q})}var E=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js");const g=[1,2,3,4,5,6,0],I=[0,1,2,3,4,5,6],se=(t,c)=>{const d=[],n=(0,f.mK)(c)===0?I:g,i=n.indexOf(t.getDay());let h=new Date(t.getFullYear(),t.getMonth(),1-i);const{rows:m}=a.VF[a.aj.Month];for(let _=0;_<m;_++){const j=[];for(let N=0;N<n.length;N++)j.push({date:h,address:[_,N]}),h=new Date(h.getFullYear(),h.getMonth(),h.getDate()+1);d.push(j)}return d};function Ce(){const{mode:t,viewMode:c,dateAndTime:d,setValue:n,preselectedRange:i,startPreselect:h,continuePreselect:m,completePreselect:_,restartPreselect:j,onDateChange:N,locale:q,hoursKeyboardNavigationRef:V}=(0,l.useContext)(P.Y),je=(0,l.useCallback)(W=>{var Ie,ue;if(!(t!==a.NB.DateTime||c!=="month"))switch(W.key){case"Tab":W.shiftKey||(W.preventDefault(),W.stopPropagation(),(Ie=V.current)===null||Ie===void 0||Ie.focusItem((0,E.cE)((ue=d==null?void 0:d.hours)!==null&&ue!==void 0?ue:0)));break;case"Enter":setTimeout(()=>{var Oe,ae;return(Oe=V.current)===null||Oe===void 0?void 0:Oe.focusItem((0,E.cE)((ae=d==null?void 0:d.hours)!==null&&ae!==void 0?ae:0))},0);break;default:break}},[d==null?void 0:d.hours,V,t,c]),le=(0,w.E)({buildGrid:W=>se(W,q),isTheSameItem:f.KX,isInPeriod:f.UP,getItemLabel:f.pd,onSelect(W){if(t===a.NB.DateTime){N(W);return}if(t===a.NB.DateRange){i?_(W):h(W);return}t===a.NB.Date&&n([W,W])},onPreselect(W){i&&m(W)},onLeave(){i&&j()},onKeyDown:je});return(0,s.jsx)(x,{grid:le})}const ve=t=>{const c=[],d=t.getFullYear();let n=0;const{rows:i,columns:h}=a.VF[a.aj.Year];for(let m=0;m<i;m++){const _=[];for(let j=0;j<h;j++)_.push({date:new Date(d,n++,1),address:[m,j]});c.push(_)}return c};function xe(){const{referenceDate:t,setViewMode:c,setViewShift:d,setFocus:n,preselectedRange:i,continuePreselect:h,restartPreselect:m,locale:_,setValue:j,mode:N,startPreselect:q,completePreselect:V}=(0,l.useContext)(P.Y),je=(0,w.E)({buildGrid:ve,isTheSameItem:f.UP,isInPeriod:f.R3,getItemLabel:le=>(0,f.Ge)(le,_),onSelect(le){if(N===a.NB.Month){j([le,le]);return}if(N===a.NB.MonthRange){i?V(le):q(le);return}n(a.ck),d((0,f.Fo)(t,le)),c(a.aj.Month)},onPreselect(le){i&&h(le)},onLeave(){i&&m()}});return(0,s.jsx)(x,{grid:je})}function J(){const{viewMode:t}=(0,l.useContext)(P.Y);switch(t){case a.aj.Decade:return(0,s.jsx)(H,{});case a.aj.Year:return(0,s.jsx)(xe,{});case a.aj.Month:default:return(0,s.jsx)(Ce,{})}}var ce=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),Q=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),Se=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Button/styles.module.css"),Ae={};Ae.styleTagTransform=U(),Ae.setAttributes=F(),Ae.insert=X().bind(null,"head"),Ae.domAPI=C(),Ae.insertStyleElement=B();var He=ee()(Se.A,Ae);const Ne=Se.A&&Se.A.locals?Se.A.locals:void 0;var ne=function(t,c){var d={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&c.indexOf(n)<0&&(d[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)c.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(d[n[i]]=t[n[i]]);return d};function me(t){var{label:c,icon:d,onClick:n,focusName:i,tabIndex:h,onLeftArrowKeyDown:m,onRightArrowKeyDown:_,onDownArrowKeyDown:j,disabled:N,useNavigationStartRef:q}=t,V=ne(t,["label","icon","onClick","focusName","tabIndex","onLeftArrowKeyDown","onRightArrowKeyDown","onDownArrowKeyDown","disabled","useNavigationStartRef"]);const je=(0,l.useRef)(null),{size:le,focus:W,setFocus:Ie,onFocusLeave:ue,navigationStartRef:Oe}=(0,l.useContext)(P.Y);(0,oe.N)(()=>{var De;W&&W===i&&((De=je.current)===null||De===void 0||De.focus())},[W,i]);const ae=(0,l.useCallback)(De=>{switch(De.key){case"ArrowLeft":m==null||m();break;case"ArrowRight":_==null||_();break;case"ArrowDown":j==null||j();break;case"ArrowUp":ue==null||ue("prev");break;case"Tab":De.shiftKey&&(ue==null||ue("prev"));break;default:}},[j,ue,m,_]);return(0,l.useImperativeHandle)(q?Oe:void 0,()=>({focus:()=>{var De;(De=je.current)===null||De===void 0||De.focus()}})),(0,s.jsxs)("button",Object.assign({type:"button",tabIndex:h,className:Ne.button,onClick:n,"data-size":le,ref:je,onKeyDown:ae,onFocus:()=>Ie(i),onBlur:()=>Ie(void 0),disabled:N},(0,O.z7)(V),{children:[c,(0,s.jsx)("div",{className:Ne.icon,children:d})]}))}const L="level",D="next",S="prev";function te(){const{viewDate:t,viewMode:c,locale:d}=(0,l.useContext)(P.Y);switch(c){case a.aj.Month:{const n=t.getFullYear();return`${(0,f.Ge)(t,d)} ${n}`}case a.aj.Year:return t.getFullYear().toString();case a.aj.Decade:{const n=t.getFullYear();return`${n}-${n+9}`}default:return""}}var de=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarNavigation/styles.module.css"),$={};$.styleTagTransform=U(),$.setAttributes=F(),$.insert=X().bind(null,"head"),$.domAPI=C(),$.insertStyleElement=B();var os=ee()(de.A,$);const ds=de.A&&de.A.locals?de.A.locals:void 0,Qe=(t,c,d)=>{switch(d){case a.aj.Month:return(0,f._N)(t,c);case a.aj.Year:return(0,f.$7)(t,c);case a.aj.Decade:default:return 0}},Ke={[a.aj.Month]:a.aj.Year,[a.aj.Year]:a.aj.Decade,[a.aj.Decade]:a.aj.Decade},Ye={UP:{[a.SK.S]:(0,s.jsx)(ce.A,{size:16}),[a.SK.M]:(0,s.jsx)(ce.A,{}),[a.SK.L]:(0,s.jsx)(ce.A,{})},DOWN:{[a.SK.S]:(0,s.jsx)(Q.A,{size:16}),[a.SK.M]:(0,s.jsx)(Q.A,{}),[a.SK.L]:(0,s.jsx)(Q.A,{})}};function $e(){const{referenceDate:t,viewDate:c,viewShift:d,setViewShift:n,viewMode:i,setViewMode:h,focus:m,setFocus:_,getTestId:j,size:N,firstNotDisableCell:q}=(0,l.useContext)(P.Y),V=te(),je=i===a.aj.Decade,le=m&&[D,S].includes(m);return(0,s.jsxs)("div",{className:ds.wrapper,children:[(0,s.jsx)(me,{disabled:je,onClick:()=>{i===a.aj.Year&&_(S),n(Qe(t,c,i)),h(Ke[i])},label:V,"data-test-id":j("period-level"),focusName:L,tabIndex:le?-1:0,icon:i!==a.aj.Decade?Ye.DOWN[N]:void 0,onRightArrowKeyDown:()=>_(S),onDownArrowKeyDown:()=>{var W;return _((0,G.k)((W=q==null?void 0:q.current)!==null&&W!==void 0?W:[0,0]))},useNavigationStartRef:!0}),(0,s.jsxs)("div",{children:[(0,s.jsx)(me,{onClick:()=>n(d-1),"data-test-id":j("period-prev"),focusName:S,tabIndex:m===S||je&&m!==D?0:-1,icon:Ye.UP[N],onRightArrowKeyDown:()=>_(D),onLeftArrowKeyDown:()=>_(L),onDownArrowKeyDown:()=>{const W=i===a.aj.Month?2:1;_((0,G.k)([0,a.VF[i].columns-W]))}}),(0,s.jsx)(me,{onClick:()=>n(d+1),"data-test-id":j("period-next"),focusName:D,tabIndex:m===D?0:-1,icon:Ye.DOWN[N],onLeftArrowKeyDown:()=>_(S),onDownArrowKeyDown:()=>_((0,G.k)([0,a.VF[i].columns-1]))})]})]})}var Re=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/ColumnLabel/styles.module.css"),ze={};ze.styleTagTransform=U(),ze.setAttributes=F(),ze.insert=X().bind(null,"head"),ze.domAPI=C(),ze.insertStyleElement=B();var ls=ee()(Re.A,ze);const Ze=Re.A&&Re.A.locals?Re.A.locals:void 0;function qe({label:t,className:c}){const{size:d,getTestId:n}=(0,l.useContext)(P.Y);return(0,s.jsx)("div",{className:r()(Ze.wrapper,c),"data-test-id":n("header-item"),"data-size":d,children:t})}var Ve=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/ColumnLabels/styles.module.css"),We={};We.styleTagTransform=U(),We.setAttributes=F(),We.insert=X().bind(null,"head"),We.domAPI=C(),We.insertStyleElement=B();var es=ee()(Ve.A,We);const is=Ve.A&&Ve.A.locals?Ve.A.locals:void 0,rs=new Date(1970,1,2),cs=new Date(1970,1,1),be=t=>{const c=[],d=(0,f.mK)(t)===0?cs:rs;for(let n=0;n<7;n++){const i=new Date(d.getFullYear(),d.getMonth(),d.getDate()+n);c.push((0,f.ZH)(i.toLocaleString(t,{weekday:"short"})))}return c};function ke({className:t}){const{viewMode:c,locale:d,size:n}=(0,l.useContext)(P.Y),i=(0,l.useMemo)(()=>be(d),[d]);return c===a.aj.Month?(0,s.jsx)("div",{className:r()(is.row,t),"data-size":n,children:i.map(h=>(0,s.jsx)(qe,{label:h},h))}):null}var Be=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Footer/Footer.js"),we=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js"),Te=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/PeriodPresetsList/styles.module.css"),ge={};ge.styleTagTransform=U(),ge.setAttributes=F(),ge.insert=X().bind(null,"head"),ge.domAPI=C(),ge.insertStyleElement=B();var vs=ee()(Te.A,ge);const Ge=Te.A&&Te.A.locals?Te.A.locals:void 0;var ks=function(t,c){var d={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&c.indexOf(n)<0&&(d[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)c.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(d[n[i]]=t[n[i]]);return d};function xs(t){var{items:c,onChange:d,showTitle:n=!0,className:i}=t,h=ks(t,["items","onChange","showTitle","className"]);const{t:m}=(0,Z.Ym)("Calendar"),{size:_,getTestId:j}=(0,l.useContext)(P.Y),N=(0,l.useMemo)(()=>c.map(q=>({id:q.id,content:{option:q.label},onClick(){d(q.range)},checked:!1})),[c,d]);return(0,s.jsxs)("div",Object.assign({className:r()(Ge.wrapper,i)},(0,O.z7)(h),{children:[n&&(0,s.jsx)("div",{className:Ge.header,"data-size":_,children:(0,s.jsx)("span",{className:Ge.title,"data-test-id":j("presets-header"),children:m("presets")})}),(0,s.jsx)(we.B,{size:_,items:N,scroll:!0,selection:{mode:"single",value:void 0},hasListInFocusChain:!1})]}))}const Fe=1440*60*1e3;function js(t,c){const d=c||new Date,n=d.getTime(),i=h=>{const m=new Date(d.getTime()+h);return n>m.getTime()?[m,d]:[d,m]};return[{label:t("defaultPresets.lastWeek"),id:"week",range:i(Fe*-7)},{label:t("defaultPresets.lastTwoWeeks"),id:"twoWeeks",range:i(Fe*-14)},{label:t("defaultPresets.lastMonth"),id:"month",range:i(Fe*-30)},{label:t("defaultPresets.lastQuarter"),id:"quarter",range:i(Fe*-90)},{label:t("defaultPresets.lastThird"),id:"fourMonths",range:i(Fe*-120)},{label:t("defaultPresets.lastYear"),id:"year",range:i(Fe*-365)},{label:t("defaultPresets.lastTwoYears"),id:"twoYears",range:i(Fe*-365*2)}]}var Ds=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/TimePickerBase/TimePickerBase.js");function Es(t,c,d){switch(c){case a.aj.Decade:{const n=Math.floor(t.getFullYear()/10)*10;return new Date(n+d*10,1,1)}case a.aj.Year:return new Date(t.getFullYear()+d,1,1);case a.aj.Month:default:return new Date(t.getFullYear(),t.getMonth()+d,1)}}function Ss({setValue:t}){const[c,d]=(0,l.useState)(),n=(0,l.useCallback)(_=>{d([_,_])},[]),i=(0,l.useCallback)(_=>{d(j=>j&&[j[0],_])},[]),h=(0,l.useCallback)(()=>{d(_=>_&&[_[0],_[0]])},[]),m=(0,l.useCallback)(_=>{c&&(d(void 0),t([c[0],_]))},[c,t]);return{preselectedRange:c,startPreselect:n,continuePreselect:i,restartPreselect:h,completePreselect:m}}var ss=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarBase/styles.module.css"),Xe={};Xe.styleTagTransform=U(),Xe.setAttributes=F(),Xe.insert=X().bind(null,"head"),Xe.domAPI=C(),Xe.insertStyleElement=B();var lt=ee()(ss.A,Xe);const Pe=ss.A&&ss.A.locals?ss.A.locals:void 0;var Ps=function(t,c){var d={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&c.indexOf(n)<0&&(d[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)c.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(d[n[i]]=t[n[i]]);return d};const Cs={[a.SK.S]:Pe.dateWrapperSizeS,[a.SK.M]:Pe.dateWrapperSizeM,[a.SK.L]:Pe.dateWrapperSizeL},As={[a.SK.S]:Pe.calendarSizeS,[a.SK.M]:Pe.calendarSizeM,[a.SK.L]:Pe.calendarSizeL},Os={[a.NB.Date]:a.aj.Month,[a.NB.DateTime]:a.aj.Month,[a.NB.DateRange]:a.aj.Month,[a.NB.MonthRange]:a.aj.Year,[a.NB.Month]:a.aj.Year,[a.NB.YearRange]:a.aj.Decade,[a.NB.Year]:a.aj.Decade};function Ms(t){var{className:c,mode:d,size:n=a.SK.M,autofocus:i,fitToContainer:h=!0,value:m,defaultValue:_,onChangeValue:j,today:N,showHolidays:q=!1,showSeconds:V=!0,style:je,locale:le,onFocusLeave:W,buildCellProps:Ie,"data-test-id":ue,navigationStartRef:Oe,presets:ae}=t,De=Ps(t,["className","mode","size","autofocus","fitToContainer","value","defaultValue","onChangeValue","today","showHolidays","showSeconds","style","locale","onFocusLeave","buildCellProps","data-test-id","navigationStartRef","presets"]);const{t:ts}=(0,Z.Ym)("Calendar"),[Je,us]=(0,l.useState)(Os[d]),[Le,_s]=(0,l.useState)(0),[Ue,Ee]=(0,y.iC)(m,_,j),as=(0,l.useMemo)(()=>typeof N=="number"?new Date(N):N,[N]),[hs]=(0,l.useState)((Ue==null?void 0:Ue[0])||as||new Date),zs=Es(hs,Je,Le),[Bs,Ls]=(0,l.useState)(i?a.ck:void 0),{dateAndTime:Ns,onTimeChange:Ws,onDateChange:Ks,onDateAndTimeChange:Ys,isDateFilled:Fs,isTimeFilled:Us,isDateAndTimeFilled:Hs}=(0,w.O)({showSeconds:V,value:d===a.NB.DateTime?Ue:void 0}),Vs=(0,l.useRef)(null),Gs=(0,l.useRef)(null),Xs=(0,l.useRef)({focusItem:()=>{}}),Js=(0,l.useRef)({focusItem:()=>{}}),Zs=(0,l.useRef)({focusItem:()=>{}}),ns=(0,l.useCallback)(ms=>{const[ps,fs]=(0,f.Wv)(ms);if(d===a.NB.MonthRange){Ee([(0,f.Xc)(ps),(0,f.az)(fs)]);return}if(d===a.NB.YearRange){Ee([(0,f.OJ)(ps),(0,f.n3)(fs)]);return}Ee([ps,(0,f.iN)(fs)])},[d,Ee]),{preselectedRange:Qs,continuePreselect:$s,completePreselect:qs,restartPreselect:et,startPreselect:st}=Ss({setValue:ns}),bs=(0,l.useMemo)(()=>(0,f.D5)(ue),[ue]),{lang:ys}=(0,Z.Ym)(),tt=(0,l.useMemo)(()=>(0,f.JK)({localeProp:le,ctxLang:ys}),[ys,le]),at=(0,l.useRef)([0,0]),nt=(0,l.useMemo)(()=>ae!=null&&ae.items&&ae.items.length>0?ae.items:js(ts,as),[ae==null?void 0:ae.items,ts,as]),ot=d===a.NB.DateRange&&(ae==null?void 0:ae.enabled)&&!Ie,dt=(0,l.useCallback)(ms=>{ns(ms)},[ns]);return(0,s.jsx)("div",{className:r()(Pe.calendarWrapper,c),"data-fit-to-container":h||void 0,"data-test-id":ue,children:(0,s.jsxs)(P.Y.Provider,{value:{locale:tt,size:n,value:Ue,firstNotDisableCell:at,fitToContainer:h,today:as,showHolidays:q,viewDate:zs,referenceDate:hs,preselectedRange:Qs,mode:d,viewMode:Je,viewShift:Le,focus:Bs,setValue:ns,setViewMode:us,setViewShift:_s,startPreselect:st,continuePreselect:$s,completePreselect:qs,restartPreselect:et,setFocus:Ls,getTestId:bs,onFocusLeave:W,buildCellProps:Ie,navigationStartRef:Oe,showSeconds:V,dateAndTime:Ns,onTimeChange:Ws,onDateChange:Ks,onDateAndTimeChange:Ys,isDateAndTimeFilled:Hs,isDateFilled:Fs,isTimeFilled:Us,applyButtonRef:Vs,currentButtonRef:Gs,hoursKeyboardNavigationRef:Xs,minutesKeyboardNavigationRef:Js,secondsKeyboardNavigationRef:Zs},children:[(0,s.jsxs)("div",{className:r()(Pe.dateWrapper,Cs[n]),"data-size":n,"data-show-footer":d===a.NB.DateTime&&Je==="month"||void 0,children:[ot&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(xs,{items:nt,onChange:dt,showTitle:ae==null?void 0:ae.title,"data-test-id":bs("presets")}),(0,s.jsx)(pe.c,{className:Pe.divider,orientation:"vertical"})]}),(0,s.jsxs)("div",Object.assign({},(0,O.z7)(De),{className:r()(Pe.calendar,As[n]),style:je,"data-size":n,"data-fit-to-container":h||void 0,children:[(0,s.jsxs)("div",{className:Pe.header,"data-size":n,children:[(0,s.jsx)($e,{}),(0,s.jsx)(ke,{})]}),(0,s.jsx)("div",{className:Pe.body,children:(0,s.jsx)("div",{className:Pe.rows,"data-size":n,children:(0,s.jsx)(J,{})})})]})),d===a.NB.DateTime&&Je==="month"&&(0,s.jsx)(Ds.j,{})]}),(0,s.jsx)(Be.w,{})]})})}function Ts(t){return Array.isArray(t)&&t.length===2&&t[0]instanceof Date&&t[1]instanceof Date}function Is(t){return t instanceof Date}const gs=t=>Ts(t)?t:Is(t)?[t,t]:t;var ws=function(t,c){var d={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&c.indexOf(n)<0&&(d[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)c.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(d[n[i]]=t[n[i]]);return d};function Rs(t){const{onChangeValue:c,mode:d}=t,n=ws(t,["onChangeValue","mode"]),i=(0,l.useCallback)(h=>{if(d===a.NB.Date||d===a.NB.Month||d===a.NB.Year||d===a.NB.DateTime){const[m]=h;c==null||c(m);return}c==null||c(h)},[c,d]);return(0,s.jsx)(Ms,Object.assign({},n,{mode:d,value:gs(t.value),defaultValue:gs(t.defaultValue),onChangeValue:i}))}}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/constants.js":((z,k,e)=>{e.d(k,{Al:()=>pe,E:()=>a,NB:()=>l,SK:()=>p,VF:()=>r,Xn:()=>w,aj:()=>s,ck:()=>y,cs:()=>O,eX:()=>Z});const s={Month:"month",Year:"year",Decade:"decade"},l={Date:"date",DateTime:"date-time",DateRange:"date-range",Month:"month",MonthRange:"month-range",Year:"year",YearRange:"year-range"},a={Out:"out",Start:"start",In:"in",End:"end",StartEnd:"start-end"},p={S:"s",M:"m",L:"l"},r={[s.Month]:{rows:6,columns:7},[s.Year]:{rows:4,columns:3},[s.Decade]:{rows:4,columns:3}},y="autofocus",pe=24,Z=60,O=60,w=new Intl.Locale("ru-RU")}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js":((z,k,e)=>{e.d(k,{Y:()=>y});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),a=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/utils.js");const p=()=>{},r={current:null},y=(0,s.createContext)({locale:(0,a.JK)(),size:l.SK.M,viewDate:new Date,referenceDate:new Date,mode:l.NB.Date,viewMode:l.aj.Month,viewShift:0,setFocus:p,setValue:p,setViewMode:p,showHolidays:!1,showSeconds:!0,fitToContainer:!0,setViewShift:p,startPreselect:p,continuePreselect:p,completePreselect:p,restartPreselect:p,onDateAndTimeChange:p,onTimeChange:p,onDateChange:p,isDateAndTimeFilled:()=>!1,isDateFilled:()=>!1,isTimeFilled:()=>!1,getTestId:()=>{},applyButtonRef:r,currentButtonRef:r,hoursKeyboardNavigationRef:r,minutesKeyboardNavigationRef:r,secondsKeyboardNavigationRef:r})}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Footer/Footer.js":((z,k,e)=>{e.d(k,{w:()=>ie});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),p=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js"),r=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),y=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),pe=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"),Z=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),O=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),w=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/utils.js"),f=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js"),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),oe=e.n(P),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),ye=e.n(G),he=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),ee=e.n(he),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),C=e.n(v),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),X=e.n(T),fe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),F=e.n(fe),_e=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Footer/styles.module.css"),B={};B.styleTagTransform=F(),B.setAttributes=C(),B.insert=ee().bind(null,"head"),B.domAPI=ye(),B.insertStyleElement=X();var Me=oe()(_e.A,B);const U=_e.A&&_e.A.locals?_e.A.locals:void 0;function ie(){const{size:R,viewMode:re,mode:K,today:Y,setValue:M,dateAndTime:A,isTimeFilled:o,isDateAndTimeFilled:u,onDateAndTimeChange:x,applyButtonRef:b,currentButtonRef:H,hoursKeyboardNavigationRef:E,minutesKeyboardNavigationRef:g,secondsKeyboardNavigationRef:I,showSeconds:se,getTestId:Ce,referenceDate:ve,setViewShift:xe,onFocusLeave:J}=(0,l.useContext)(f.Y),{t:ce}=(0,Z.Ym)("Calendar");if(![O.NB.DateTime,"time"].includes(K)||re!=="month")return null;const Q=K==="time"?!o():!u(),Se=ne=>{var me,L,D,S;ne.key==="Tab"&&(ne.shiftKey?(ne.preventDefault(),se?(me=I.current)===null||me===void 0||me.focusItem((0,pe.cE)((L=A==null?void 0:A.seconds)!==null&&L!==void 0?L:0)):(D=g.current)===null||D===void 0||D.focusItem((0,pe.cE)((S=A==null?void 0:A.minutes)!==null&&S!==void 0?S:0))):Q&&(J==null||J("next")))},Ae=ne=>{ne.key==="Tab"&&!ne.shiftKey&&(J==null||J("next"))},He=()=>{var ne,me,L,D,S,te,de;const $=Y||new Date;x($),xe((0,w.Fo)(ve,$)),(ne=E.current)===null||ne===void 0||ne.focusItem((0,pe.cE)((me=$.getHours())!==null&&me!==void 0?me:0)),(L=g.current)===null||L===void 0||L.focusItem((0,pe.cE)((D=$.getMinutes())!==null&&D!==void 0?D:0)),(S=I.current)===null||S===void 0||S.focusItem((0,pe.cE)((te=$.getSeconds())!==null&&te!==void 0?te:0)),(de=b.current)===null||de===void 0||de.focus()},Ne=()=>{if(!A)return;const ne=Y||new Date,{year:me=ne.getFullYear(),month:L=ne.getMonth(),day:D=ne.getMonth(),hours:S,minutes:te,seconds:de}=A,$=new Date(me,L,D,S,te,se?de:0);M([$,$])};return(0,s.jsxs)("div",{className:U.footer,"data-size":R,children:[(0,s.jsx)(r.c,{className:U.divider}),(0,s.jsxs)("div",{className:U.currentWrapper,"data-size":R,children:[(0,s.jsx)(a.b,{label:ce("current"),size:R==="s"?"xs":"s",onClick:He,ref:H,onKeyDown:Se,"data-test-id":Ce("current-button")}),(0,s.jsx)(p.L,{icon:(0,s.jsx)(y.A,{}),size:R==="s"?"xs":"s",disabled:Q,onClick:Ne,ref:b,onKeyDown:Ae,"data-test-id":Ce("apply-button")})]})]})}}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Item/utils.js":((z,k,e)=>{e.d(k,{k:()=>s});const s=l=>l.join("-")}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/TimePickerBase/TimePickerBase.js":((z,k,e)=>{e.d(k,{j:()=>ie});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),p=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"),r=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),y=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),pe=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js"),Z=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js"),O=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),w=function(R,re){var K={};for(var Y in R)Object.prototype.hasOwnProperty.call(R,Y)&&re.indexOf(Y)<0&&(K[Y]=R[Y]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,Y=Object.getOwnPropertySymbols(R);M<Y.length;M++)re.indexOf(Y[M])<0&&Object.prototype.propertyIsEnumerable.call(R,Y[M])&&(K[Y[M]]=R[Y[M]]);return K};function f(R){var{numberOfItems:re,value:K,onChange:Y,className:M,onKeyDownGetter:A,keyboardNavigationRef:o,navigationStartRef:u,"data-test-id":x}=R,b=w(R,["numberOfItems","value","onChange","className","onKeyDownGetter","keyboardNavigationRef","navigationStartRef","data-test-id"]);const{size:H}=(0,l.useContext)(pe.Y),E=(0,l.useMemo)(()=>new Array(re).fill(null).map(()=>(0,l.createRef)()),[re]);(0,l.useImperativeHandle)(u,()=>({focus:()=>{var I;(I=o==null?void 0:o.current)===null||I===void 0||I.focusItem((0,p.cE)(K||0))}}));const g=(0,l.useMemo)(()=>new Array(re).fill(void 0).map((I,se)=>({id:se,content:{option:String(se).padStart(2,"0")},"data-test-id":x,onKeyDown:A==null?void 0:A(se),itemRef:E[se]})),[x,E,re,A]);return(0,s.jsx)(Z.B,Object.assign({},(0,O.z7)(b),{size:H,items:g,scroll:!0,keyboardNavigationRef:o,selection:{mode:"single",value:K,onChange:Y},className:M,hasListInFocusChain:!1,scrollToSelectedItem:!0}))}var P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),oe=e.n(P),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),ye=e.n(G),he=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),ee=e.n(he),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),C=e.n(v),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),X=e.n(T),fe=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),F=e.n(fe),_e=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/TimePickerBase/styles.module.css"),B={};B.styleTagTransform=F(),B.setAttributes=C(),B.insert=ee().bind(null,"head"),B.domAPI=ye(),B.insertStyleElement=X();var Me=oe()(_e.A,B);const U=_e.A&&_e.A.locals?_e.A.locals:void 0;function ie({showDivider:R=!0}){const{t:re}=(0,r.Ym)("Calendar"),{size:K,mode:Y,fitToContainer:M,showSeconds:A,dateAndTime:o,onTimeChange:u,applyButtonRef:x,currentButtonRef:b,hoursKeyboardNavigationRef:H,minutesKeyboardNavigationRef:E,secondsKeyboardNavigationRef:g,setFocus:I,getTestId:se,navigationStartRef:Ce,onFocusLeave:ve}=(0,l.useContext)(pe.Y),xe=o==null?void 0:o.hours,J=o==null?void 0:o.minutes,ce=o==null?void 0:o.seconds,Q=(0,l.useCallback)(L=>D=>{var S;const te=Object.assign({hours:0,minutes:0,seconds:0},o);u(Object.assign(Object.assign({},te),{[L]:(S=D!=null?D:o==null?void 0:o[L])!==null&&S!==void 0?S:0}))},[o,u]),Se=(0,l.useMemo)(()=>Q("hours"),[Q]),Ae=(0,l.useMemo)(()=>Q("minutes"),[Q]),He=(0,l.useMemo)(()=>Q("seconds"),[Q]),Ne=(0,l.useCallback)(L=>D=>{var S,te;switch(D.key){case"Tab":if(Y==="time"&&D.shiftKey){ve==null||ve("prev");break}D.stopPropagation(),D.preventDefault(),D.shiftKey?I(y.ck):(S=E.current)===null||S===void 0||S.focusItem((0,p.cE)(J!=null?J:0));break;case"Enter":(te=E.current)===null||te===void 0||te.focusItem((0,p.cE)(J!=null?J:0));break;case"ArrowUp":if(Y==="time"&&L===0){ve==null||ve("prev");break}break;default:break}},[J,E,Y,ve,I]),ne=(0,l.useCallback)(()=>L=>{var D,S,te,de,$;switch(L.key){case"Tab":L.stopPropagation(),L.preventDefault(),L.shiftKey?(D=H.current)===null||D===void 0||D.focusItem((0,p.cE)(xe!=null?xe:0)):A?(S=g.current)===null||S===void 0||S.focusItem((0,p.cE)(ce!=null?ce:0)):(te=b.current)===null||te===void 0||te.focus();break;case"Enter":A?(de=g.current)===null||de===void 0||de.focusItem((0,p.cE)(ce!=null?ce:0)):($=x.current)===null||$===void 0||$.focus();break;default:break}},[x,b,xe,H,ce,g,A]),me=(0,l.useCallback)(()=>L=>{var D,S,te;switch(L.key){case"Tab":L.stopPropagation(),L.preventDefault(),L.shiftKey?(D=E.current)===null||D===void 0||D.focusItem((0,p.cE)(J!=null?J:0)):(S=b.current)===null||S===void 0||S.focus();break;case"Enter":(te=x.current)===null||te===void 0||te.focus();break;default:break}},[x,b,J,E]);return(0,s.jsxs)(s.Fragment,{children:[R&&(0,s.jsx)(a.c,{orientation:"vertical",className:U.divider}),(0,s.jsxs)("div",{className:U.timePicker,"data-size":K,"data-fit-to-container":M||void 0,children:[(0,s.jsx)("div",{className:U.header,"data-size":K,children:(0,s.jsx)("span",{className:U.title,children:re("time")})}),(0,s.jsxs)("div",{className:U.timeListsWrapper,"data-size":K,"data-show-seconds":A||void 0,children:[(0,s.jsx)(f,{value:xe,onChange:Se,"data-test-id":se("hours"),numberOfItems:y.Al,onKeyDownGetter:Ne,keyboardNavigationRef:H,navigationStartRef:Y==="time"?Ce:void 0}),(0,s.jsx)(a.c,{className:U.divider,orientation:"vertical"}),(0,s.jsx)(f,{value:J,onChange:Ae,"data-test-id":se("minutes"),numberOfItems:y.eX,onKeyDownGetter:ne,keyboardNavigationRef:E}),A&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.c,{className:U.divider,orientation:"vertical"}),(0,s.jsx)(f,{value:ce,onChange:He,"data-test-id":se("seconds"),numberOfItems:y.cs,onKeyDownGetter:me,keyboardNavigationRef:g})]})]})]})]})}}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/hooks.js":((z,k,e)=>{e.d(k,{E:()=>y,O:()=>pe});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),l=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),a=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js"),p=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Item/utils.js"),r=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/utils.js");function y({onSelect:Z,onPreselect:O,onLeave:w,buildGrid:f,isTheSameItem:P,getItemLabel:oe,isInPeriod:G,onKeyDown:ye}){const{today:he,showHolidays:ee,preselectedRange:v,value:C,dateAndTime:T,mode:X,viewDate:fe,viewMode:F,focus:_e,buildCellProps:B,firstNotDisableCell:Me,isDateFilled:U}=(0,s.useContext)(a.Y);return(0,s.useMemo)(()=>{let ie=!1,R,re=!1;const K=f(fe).map(Y=>Y.map(({date:M,address:A})=>{var o,u,x,b;let H=!1,E,g={isDisabled:H,isHoliday:E};B&&(g=B(M,F),H=(o=g==null?void 0:g.isDisabled)!==null&&o!==void 0?o:!1,E=g.isHoliday),E===void 0&&(E=ee&&(0,r.cM)(M,F)),H||Me&&!re&&(Me.current=A,re=!0);const I=U()?new Date((u=T==null?void 0:T.year)!==null&&u!==void 0?u:0,(x=T==null?void 0:T.month)!==null&&x!==void 0?x:0,(b=T==null?void 0:T.day)!==null&&b!==void 0?b:0):void 0,Ce=X===l.NB.DateRange||X===l.NB.MonthRange||X===l.NB.YearRange?(0,r.Am)(M,F,v||C):l.E.Out,ve=C&&!v&&!I?P(C[0],M)||P(C[1],M):!1,xe=v?P(v[0],M):!1,J=I?P(I,M):!1,ce=_e&&(0,p.k)(A)===_e?0:-1;ie=ce===0||ie;const Q=P(he||new Date,M),Se={date:M,onLeave:w,address:A,tabIndex:ce,onSelect:Z,isCurrent:Q,isDisabled:H,isHoliday:E,onPreselect:O,inRangePosition:Ce,label:oe(M),isSelected:ve||xe||J,isInCurrentLevelPeriod:G(fe,M),onKeyDown:ye};return Q&&(R=Se),Se}));return ie||((R||K[0][0]).tabIndex=0),K},[B,f,T==null?void 0:T.day,T==null?void 0:T.month,T==null?void 0:T.year,Me,_e,oe,U,G,P,X,ye,w,O,Z,v,ee,he,C,fe,F])}function pe({showSeconds:Z,value:O}){const[w,f]=(0,s.useState)(()=>{if(Array.isArray(O)){const v=O[0];return{year:v.getFullYear(),month:v.getMonth(),day:v.getDate(),hours:v.getHours(),minutes:v.getMinutes(),seconds:v.getSeconds()}}return{year:void 0,month:void 0,day:void 0,hours:O==null?void 0:O.hours,minutes:O==null?void 0:O.minutes,seconds:O==null?void 0:O.seconds}}),P=(0,s.useCallback)(()=>{const{year:v,month:C,day:T}=w;return[v,C,T].every(X=>X!==void 0)},[w]),oe=(0,s.useCallback)(()=>{const{hours:v,minutes:C,seconds:T}=w;return[v,C,...Z?[T]:[]].every(X=>X!==void 0)},[w,Z]),G=(0,s.useCallback)(()=>oe()&&P(),[P,oe]),ye=(0,s.useCallback)(v=>{v instanceof Date?f(C=>Object.assign(Object.assign({},C),{year:v.getFullYear(),month:v.getMonth(),day:v.getDate()})):f(C=>Object.assign(Object.assign({},C),v))},[]),he=(0,s.useCallback)(v=>{v instanceof Date?f(C=>Object.assign(Object.assign({},C),{hours:v.getHours(),minutes:v.getMinutes(),seconds:v.getSeconds()})):f(C=>Object.assign(Object.assign({},C),v))},[]),ee=(0,s.useCallback)(v=>{v instanceof Date?f({year:v.getFullYear(),month:v.getMonth(),day:v.getDate(),hours:v.getHours(),minutes:v.getMinutes(),seconds:v.getSeconds()}):f(v)},[]);return(0,s.useEffect)(()=>{if(!O){f({});return}Array.isArray(O)?ee(O[0]):he(O)},[ee,he,O]),{dateAndTime:w,setDateAndTime:f,isDateAndTimeFilled:G,isTimeFilled:oe,isDateFilled:P,onDateChange:ye,onTimeChange:he,onDateAndTimeChange:ee}}}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/utils.js":((z,k,e)=>{e.d(k,{ZH:()=>ye,pd:()=>ee,$7:()=>X,iN:()=>B,az:()=>U,n3:()=>R,Am:()=>_e,JK:()=>Y,Ge:()=>he,Fo:()=>C,Xc:()=>Me,OJ:()=>ie,mK:()=>M,D5:()=>re,SA:()=>v,_N:()=>T,KX:()=>G,WV:()=>f,UP:()=>oe,R3:()=>P,cM:()=>A,Wv:()=>F});function s(o,u){var x=u[typeof o=="string"?o.toUpperCase():o];return typeof x=="number"?x:1}function l(o,u,x){if(o){var b=o.toLowerCase().split(/[-_]/),H=b[0],E=H,g;if(b[1]&&b[1].length===4?(E+="_"+b[1],g=b[2]):g=b[1],g||(g=u[E]||u[H]),g)return s(g.match(/^\d+$/)?Number(g):g,x)}return 1}var a={en:"US",hi:"IN",deva:"IN",te:"IN",mr:"IN",ta:"IN",gu:"IN",kn:"IN",or:"IN",ml:"IN",pa:"IN",bho:"IN",awa:"IN",as:"IN",mwr:"IN",mai:"IN",mag:"IN",bgc:"IN",hne:"IN",dcc:"IN",bn:"BD",beng:"BD",rkt:"BD",dz:"BT",tibt:"BT",tn:"BW",am:"ET",ethi:"ET",om:"ET",quc:"GT",id:"ID",jv:"ID",su:"ID",mad:"ID",ms_arab:"ID",he:"IL",hebr:"IL",jam:"JM",ja:"JP",jpan:"JP",km:"KH",khmr:"KH",ko:"KR",kore:"KR",lo:"LA",laoo:"LA",mh:"MH",my:"MM",mymr:"MM",mt:"MT",ne:"NP",fil:"PH",ceb:"PH",ilo:"PH",ur:"PK",pa_arab:"PK",lah:"PK",ps:"PK",sd:"PK",skr:"PK",gn:"PY",th:"TH",thai:"TH",tts:"TH",zh_hant:"TW",hant:"TW",sm:"WS",zu:"ZA",sn:"ZW",arq:"DZ",ar:"EG",arab:"EG",arz:"EG",fa:"IR",az_arab:"IR",dv:"MV",thaa:"MV"};const p=a;var r={AG:0,ATG:0,28:0,AS:0,ASM:0,16:0,BD:0,BGD:0,50:0,BR:0,BRA:0,76:0,BS:0,BHS:0,44:0,BT:0,BTN:0,64:0,BW:0,BWA:0,72:0,BZ:0,BLZ:0,84:0,CA:0,CAN:0,124:0,CO:0,COL:0,170:0,DM:0,DMA:0,212:0,DO:0,DOM:0,214:0,ET:0,ETH:0,231:0,GT:0,GTM:0,320:0,GU:0,GUM:0,316:0,HK:0,HKG:0,344:0,HN:0,HND:0,340:0,ID:0,IDN:0,360:0,IL:0,ISR:0,376:0,IN:0,IND:0,356:0,JM:0,JAM:0,388:0,JP:0,JPN:0,392:0,KE:0,KEN:0,404:0,KH:0,KHM:0,116:0,KR:0,KOR:0,410:0,LA:0,LA0:0,418:0,MH:0,MHL:0,584:0,MM:0,MMR:0,104:0,MO:0,MAC:0,446:0,MT:0,MLT:0,470:0,MX:0,MEX:0,484:0,MZ:0,MOZ:0,508:0,NI:0,NIC:0,558:0,NP:0,NPL:0,524:0,PA:0,PAN:0,591:0,PE:0,PER:0,604:0,PH:0,PHL:0,608:0,PK:0,PAK:0,586:0,PR:0,PRI:0,630:0,PT:0,PRT:0,620:0,PY:0,PRY:0,600:0,SA:0,SAU:0,682:0,SG:0,SGP:0,702:0,SV:0,SLV:0,222:0,TH:0,THA:0,764:0,TT:0,TTO:0,780:0,TW:0,TWN:0,158:0,UM:0,UMI:0,581:0,US:0,USA:0,840:0,VE:0,VEN:0,862:0,VI:0,VIR:0,850:0,WS:0,WSM:0,882:0,YE:0,YEM:0,887:0,ZA:0,ZAF:0,710:0,ZW:0,ZWE:0,716:0,AE:6,ARE:6,784:6,AF:6,AFG:6,4:6,BH:6,BHR:6,48:6,DJ:6,DJI:6,262:6,DZ:6,DZA:6,12:6,EG:6,EGY:6,818:6,IQ:6,IRQ:6,368:6,IR:6,IRN:6,364:6,JO:6,JOR:6,400:6,KW:6,KWT:6,414:6,LY:6,LBY:6,434:6,OM:6,OMN:6,512:6,QA:6,QAT:6,634:6,SD:6,SDN:6,729:6,SY:6,SYR:6,760:6,MV:5,MDV:5,462:5};const y=r;function pe(o){return getWeekStartByRegion(o,regionDayMap)}function Z(o){return l(o,p,y)}var O=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),w=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/constants.js");const f=(o,u)=>Math.floor(o.getFullYear()/10)===Math.floor(u.getFullYear()/10),P=(o,u)=>o.getFullYear()===u.getFullYear(),oe=(o,u)=>P(o,u)&&o.getMonth()===u.getMonth();function G(o,u){return oe(o,u)&&o.getDate()===u.getDate()}const ye=o=>o.substring(0,1).toUpperCase()+o.substring(1),he=(o,u)=>{const x=o.toLocaleString(u,{month:"long"});return ye(x)},ee=o=>o.getDate().toString(),v=o=>o.getFullYear().toString(),C=(o,u)=>{const x=(u.getFullYear()-o.getFullYear())*12,b=u.getMonth()-o.getMonth();return x+b},T=(o,u)=>u.getFullYear()-o.getFullYear(),X=(o,u)=>Math.trunc((u.getFullYear()-o.getFullYear())/10),fe=(o,u,x)=>{switch(o){case w.aj.Month:return G(u,x);case w.aj.Year:return oe(u,x);case w.aj.Decade:return P(u,x);default:return!1}},F=o=>[...o].sort((u,x)=>u.valueOf()-x.valueOf()),_e=(o,u,x)=>{if(!x)return w.E.Out;const[b,H]=F(x),E=fe(u,o,b),g=fe(u,o,H);if(E&&g)return w.E.StartEnd;if(E)return w.E.Start;if(g)return w.E.End;const[I,se]=x.map(Ce=>Ce.valueOf()).sort();return o.valueOf()>=I&&o.valueOf()<=se?w.E.In:w.E.Out},B=o=>new Date(new Date(o.getFullYear(),o.getMonth(),o.getDate()+1).valueOf()-1),Me=o=>new Date(new Date(o.getFullYear(),o.getMonth(),1).valueOf()),U=o=>new Date(new Date(o.getFullYear(),o.getMonth()+1,1).valueOf()-1),ie=o=>new Date(new Date(o.getFullYear(),0,1).valueOf()),R=o=>new Date(new Date(o.getFullYear()+1,0,1).valueOf()-1),re=o=>u=>o?`${u}-${o}`:void 0,K=()=>{var o;return(0,O.B)()&&(o=navigator==null?void 0:navigator.language)!==null&&o!==void 0?o:"ru-RU"},Y=({localeProp:o,ctxLang:u}={})=>o||new Intl.Locale(u?u.replace("_","-"):K()),M=o=>Z(o.language),A=(o,u)=>u==="month"?o.getDay()===0||o.getDay()===6:!1}),"./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js":((z,k,e)=>{e.d(k,{B:()=>x});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),a=e.n(l),p=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),r=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),y=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),pe=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),Z=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),O=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),w=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(w),P=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),oe=e.n(P),G=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),ye=e.n(G),he=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),ee=e.n(he),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),C=e.n(v),T=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),X=e.n(T),fe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css"),F={};F.styleTagTransform=X(),F.setAttributes=ee(),F.insert=ye().bind(null,"head"),F.domAPI=oe(),F.insertStyleElement=C();var _e=f()(fe.A,F);const B=fe.A&&fe.A.locals?fe.A.locals:void 0,Me=(0,r.forwardRef)(({listRef:b,tabIndex:H},E)=>{const g=(0,r.useCallback)(I=>{var se;I.relatedTarget!==b.current&&((se=b.current)===null||se===void 0||se.focus()),I.preventDefault(),I.stopPropagation()},[b]);return(0,s.jsx)("button",{type:"button","aria-hidden":!0,ref:E,onKeyDown:O.d,onFocus:g,className:B.hiddenBtn,tabIndex:H})});var U=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),ie=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),R=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),re=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),K=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),Y=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),M=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),A=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),o=e("./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),u=function(b,H){var E={};for(var g in b)Object.prototype.hasOwnProperty.call(b,g)&&H.indexOf(g)<0&&(E[g]=b[g]);if(b!=null&&typeof Object.getOwnPropertySymbols=="function")for(var I=0,g=Object.getOwnPropertySymbols(b);I<g.length;I++)H.indexOf(g[I])<0&&Object.prototype.propertyIsEnumerable.call(b,g[I])&&(E[g[I]]=b[g[I]]);return E};const x=(0,r.forwardRef)((b,H)=>{var{items:E=[],search:g,pinBottom:I=[],pinTop:se=[],footerActiveElementsRefs:Ce,onKeyDown:ve,tabIndex:xe=0,className:J,collapse:ce={},selection:Q,contentRender:Se,size:Ae="s",marker:He=!0,keyboardNavigationRef:Ne,hasListInFocusChain:ne=!0}=b,me=u(b,["items","search","pinBottom","pinTop","footerActiveElementsRefs","onKeyDown","tabIndex","className","collapse","selection","contentRender","size","marker","keyboardNavigationRef","hasListInFocusChain"]);const L=(0,r.useMemo)(()=>!!g,[g]),[D=[],S]=(0,y.I)(ce),te=(0,r.useCallback)(be=>S(ke=>ke!=null&&ke.includes(be)?ke.filter(Be=>Be!==be):(ke!=null?ke:[]).concat([be])),[S]),{searchItem:de,footerItems:$}=(0,U.nG)({footerActiveElementsRefs:Ce}),os=(0,r.useMemo)(()=>{const be=(0,ie.lg)({items:se,prefix:Z.$.pinTop,parentId:Z.$.default}),ke=(0,ie.lg)({items:E,prefix:Z.$.default,parentId:Z.$.default}),Be=(0,ie.lg)({items:I,prefix:Z.$.pinBottom,parentId:Z.$.default}),we=Object.assign(Object.assign(Object.assign({},be.flattenItems),Be.flattenItems),ke.flattenItems),Te=Object.assign(Object.assign(Object.assign({},be.focusFlattenItems),Be.focusFlattenItems),ke.focusFlattenItems);return[...$,de].forEach(ge=>{we[ge.id]=ge,Te[ge.id]=Object.assign(Object.assign({},ge),{originalId:ge.id,items:[],key:ge.id,allChildIds:[]})}),{items:ke,pinTop:be,pinBottom:Be,flattenItems:we,focusFlattenItems:Te}},[E,se,I,de,$]),{flattenItems:ds,focusFlattenItems:Qe}=os,Ke=u(os,["flattenItems","focusFlattenItems"]),{ids:Ye,expandedIds:$e}=(0,r.useMemo)(()=>{const{pinTop:be,items:ke,pinBottom:Be}=Ke;let we=[],Te=[];return L&&we.push(de.id),[be,ke,Be].forEach(({focusFlattenItems:ge,focusCloseChildIds:vs})=>{const Ge=(0,ie.e)({focusFlattenItems:ge,focusCloseChildIds:vs,openCollapseItems:D,isSelectionMultiple:(Q==null?void 0:Q.mode)==="multiple"});we=we.concat(Ge.ids),Te=Te.concat(Ge.expandedIds)}),$.forEach(ge=>{we.push(ge.id)}),{ids:we,expandedIds:Te}},[$,L,Ke,D,de.id,Q==null?void 0:Q.mode]),Re=(0,r.useRef)(null),ze=(0,r.useRef)(null),ls=Ye[0],{handleListKeyDownFactory:Ze,activeItemId:qe,resetActiveItemId:Ve,forceUpdateActiveItemId:We}=(0,M.d)({mainRef:Re,btnRef:ze,focusFlattenItems:Qe,keyboardNavigationRef:Ne,hasListInFocusChain:ne,firstItemId:ls}),es=(0,r.useCallback)(be=>Ze(Ye,$e)(be),[Ze,Ye,$e]),is=(0,pe.B)()&&Re.current===document.activeElement&&qe===void 0,rs=be=>{ve==null||ve(be),es==null||es(be)},cs=()=>{Ve()};return(0,s.jsx)(R.Tr,{flattenItems:ds,focusFlattenItems:Qe,contentRender:Se,size:Ae,marker:He,firstItemId:ls,virtualized:me.virtualized,children:(0,s.jsx)(re.WM,Object.assign({},Q,{children:(0,s.jsx)(K.bN.Provider,{value:{openCollapseItems:D,toggleOpenCollapseItem:te},children:(0,s.jsx)(Y.m.Provider,{value:{activeItemId:qe,handleListKeyDownFactory:Ze,forceUpdateActiveItemId:We},children:(0,s.jsxs)("div",{className:a()(o.A.wrapper,J),"data-active":is||void 0,children:[(0,s.jsx)(A.Q,Object.assign({},me,{items:Ke.items.focusCloseChildIds,pinTop:Ke.pinTop.focusCloseChildIds,pinBottom:Ke.pinBottom.focusCloseChildIds,searchItem:de,ref:(0,p.A)(H,Re),onFocus:cs,onKeyDown:rs,tabIndex:ne?xe:void 0,search:g,nested:!1})),ne&&(0,s.jsx)(Me,{ref:ze,listRef:Re,tabIndex:xe})]})})})}))})})}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Button/styles.module.css":((z,k,e)=>{e.d(k,{A:()=>y});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(a),r=p()(l());r.push([z.id,`.button--aD7Yn{
  display:inline-flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  color:var(--sys-neutral-text-main, #41424e);
  background:none;
  border:none;
}
.button--aD7Yn:not(:disabled){
  cursor:pointer;
}
.button--aD7Yn:not(:disabled):hover, .button--aD7Yn:not(:disabled):focus-visible{
  background-color:color-mix(in srgb, var(--sys-neutral-accent-default, #787b8a), var(--sys-neutral-background1-level, #fdfdfd) calc((1 - var(--opacity-a008, 0.08)) * 100%));
}
.button--aD7Yn:not(:disabled):focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--aD7Yn[data-size=s]{
  height:var(--size-calendar-button-s, 32px);
  padding-left:var(--space-calendar-button-s-horizontal-padding, 8px);
  padding-right:var(--space-calendar-button-s-horizontal-padding, 8px);
  gap:var(--space-calendar-button-s-gap, 4px);
  border-radius:var(--radius-calendar-button-s, 4px);
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.button--aD7Yn[data-size=m]{
  height:var(--size-calendar-button-m, 40px);
  padding-left:var(--space-calendar-button-m-horizontal-padding, 8px);
  padding-right:var(--space-calendar-button-m-horizontal-padding, 8px);
  gap:var(--space-calendar-button-m-gap, 4px);
  border-radius:var(--radius-calendar-button-m, 4px);
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.button--aD7Yn[data-size=l]{
  height:var(--size-calendar-button-l, 48px);
  padding-left:var(--space-calendar-button-l-horizontal-padding, 12px);
  padding-right:var(--space-calendar-button-l-horizontal-padding, 12px);
  gap:var(--space-calendar-button-l-gap, 4px);
  border-radius:var(--radius-calendar-button-l, 4px);
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}

.icon--CZCxo{
  display:inline-flex;
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),r.locals={button:"button--aD7Yn",icon:"icon--CZCxo"};const y=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarBase/styles.module.css":((z,k,e)=>{e.d(k,{A:()=>y});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(a),r=p()(l());r.push([z.id,`@charset "UTF-8";
.calendarWrapper--aySJs{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  box-sizing:border-box;
  width:-moz-fit-content;
  width:fit-content;
}
.calendarWrapper--aySJs[data-fit-to-container]{
  min-width:100%;
  height:100%;
}

.dateWrapper--e6j6E{
  display:flex;
  flex-grow:1;
}

.calendar--ASe2D{
  display:inline-flex;
  flex-direction:column;
  box-sizing:border-box;
  max-width:100%;
  max-height:100%;
}
.calendar--ASe2D[data-fit-to-container]{
  width:100%;
}
.calendarSizeS--RESaz{
  min-width:var(--size-calendar-container-min-width-s, 240px);
  min-height:var(--size-calendar-container-min-height-s, 256px);
}

.calendarSizeM--XDdZa{
  min-width:var(--size-calendar-container-min-width-m, 296px);
  min-height:var(--size-calendar-container-min-height-m, 320px);
}

.calendarSizeL--_SIZK{
  min-width:var(--size-calendar-container-min-width-l, 352px);
  min-height:var(--size-calendar-container-min-height-l, 384px);
}

.dateWrapperSizeS--ar2a_{
  min-height:var(--size-calendar-container-min-height-s, 256px);
}

.dateWrapperSizeM--tdDE2{
  min-height:var(--size-calendar-container-min-height-m, 320px);
}

.dateWrapperSizeL--wQCWw{
  min-height:var(--size-calendar-container-min-height-l, 384px);
}

.header--C6Lsz{
  flex-grow:0;
  flex-shrink:0;
}
.header--C6Lsz[data-size=s]{
  padding-left:var(--space-calendar-container-s, 8px);
  padding-right:var(--space-calendar-container-s, 8px);
}
.header--C6Lsz[data-size=m]{
  padding-left:var(--space-calendar-container-m, 8px);
  padding-right:var(--space-calendar-container-m, 8px);
}
.header--C6Lsz[data-size=l]{
  padding-left:var(--space-calendar-container-l, 8px);
  padding-right:var(--space-calendar-container-l, 8px);
}

.body--qEbgc{
  position:relative;
  flex-grow:1;
  flex-shrink:1;
}

.rows--xcN7H{
  position:absolute;
  box-sizing:border-box;
  width:100%;
  height:100%;
}
.rows--xcN7H[data-size=s]{
  padding-left:var(--space-calendar-container-s, 8px);
  padding-right:var(--space-calendar-container-s, 8px);
}
.rows--xcN7H[data-size=m]{
  padding-left:var(--space-calendar-container-m, 8px);
  padding-right:var(--space-calendar-container-m, 8px);
}
.rows--xcN7H[data-size=l]{
  padding-left:var(--space-calendar-container-l, 8px);
  padding-right:var(--space-calendar-container-l, 8px);
}

.divider--YCwW0{
  flex-shrink:0;
  height:auto;
}`,""]),r.locals={calendarWrapper:"calendarWrapper--aySJs",dateWrapper:"dateWrapper--e6j6E",calendar:"calendar--ASe2D",calendarSizeS:"calendarSizeS--RESaz",calendarSizeM:"calendarSizeM--XDdZa",calendarSizeL:"calendarSizeL--_SIZK",dateWrapperSizeS:"dateWrapperSizeS--ar2a_",dateWrapperSizeM:"dateWrapperSizeM--tdDE2",dateWrapperSizeL:"dateWrapperSizeL--wQCWw",header:"header--C6Lsz",body:"body--qEbgc",rows:"rows--xcN7H",divider:"divider--YCwW0"};const y=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarNavigation/styles.module.css":((z,k,e)=>{e.d(k,{A:()=>y});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(a),r=p()(l());r.push([z.id,`.wrapper--UW2P7{
  display:flex;
  align-items:center;
  justify-content:space-between;
}`,""]),r.locals={wrapper:"wrapper--UW2P7"};const y=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/ColumnLabel/styles.module.css":((z,k,e)=>{e.d(k,{A:()=>y});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(a),r=p()(l());r.push([z.id,`.wrapper--m8vYR{
  cursor:default;
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.wrapper--m8vYR[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.wrapper--m8vYR[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.wrapper--m8vYR[data-size=l]{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}`,""]),r.locals={wrapper:"wrapper--m8vYR"};const y=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/ColumnLabels/styles.module.css":((z,k,e)=>{e.d(k,{A:()=>y});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(a),r=p()(l());r.push([z.id,`.row--VDolQ{
  display:grid;
  grid-auto-columns:1fr;
  grid-auto-flow:column;
}
.row--VDolQ[data-size=s]{
  height:var(--size-calendar-container-header-lines-height-s, 32px);
}
.row--VDolQ[data-size=m]{
  height:var(--size-calendar-container-header-lines-height-m, 40px);
}
.row--VDolQ[data-size=l]{
  height:var(--size-calendar-container-header-lines-height-l, 48px);
}`,""]),r.locals={row:"row--VDolQ"};const y=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Footer/styles.module.css":((z,k,e)=>{e.d(k,{A:()=>y});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(a),r=p()(l());r.push([z.id,`.divider--SF9Pd{
  flex-shrink:0;
}

.footer--oEtNW{
  display:flex;
  flex-direction:column;
}
.footer--oEtNW[data-size=s]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.footer--oEtNW[data-size=m]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.footer--oEtNW[data-size=l]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}

.currentWrapper--CDORa{
  display:flex;
  justify-content:space-between;
}
.currentWrapper--CDORa[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
  gap:var(--space-calendar-footer-elements-s, 8px);
}
.currentWrapper--CDORa[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-bottom:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
  gap:var(--space-calendar-footer-elements-m, 8px);
}
.currentWrapper--CDORa[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-bottom:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
  gap:var(--space-calendar-footer-elements-l, 8px);
}`,""]),r.locals={divider:"divider--SF9Pd",footer:"footer--oEtNW",currentWrapper:"currentWrapper--CDORa"};const y=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Grid/styles.module.css":((z,k,e)=>{e.d(k,{A:()=>y});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(a),r=p()(l());r.push([z.id,`.grid--ponN_{
  border-collapse:collapse;
  width:100%;
  height:100%;
  border-width:0;
}
.grid--ponN_ tbody, .grid--ponN_ td, .grid--ponN_ tr{
  position:relative;
  padding:0;
}

.item--J5Jwi{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}`,""]),r.locals={grid:"grid--ponN_",item:"item--J5Jwi"};const y=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Item/styles.module.css":((z,k,e)=>{e.d(k,{A:()=>y});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(a),r=p()(l());r.push([z.id,`.item--pZZuL{
  display:flex;
}

.label--qIthQ{
  padding-left:var(--space-calendar-label-decorator, 2px);
  padding-right:var(--space-calendar-label-decorator, 2px);
}

.marker--xqdlf{
  height:var(--size-calendar-marker-height, 2px);
  border-radius:var(--radius-calendar-marker, 2px);
  background-color:var(--sys-primary-accent-default, #389f74);
}

.range--oaPYE,
.box--zngJH{
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
}
.range--oaPYE[data-size=s],
.box--zngJH[data-size=s]{
  border-radius:var(--radius-calendar-item-s, 4px);
}
.range--oaPYE[data-size=m],
.box--zngJH[data-size=m]{
  border-radius:var(--radius-calendar-item-m, 4px);
}
.range--oaPYE[data-size=l],
.box--zngJH[data-size=l]{
  border-radius:var(--radius-calendar-item-l, 4px);
}

.range--oaPYE:not([data-in-range-position=out]){
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.range--oaPYE[data-in-range-position=in]{
  border-radius:0;
}
.range--oaPYE[data-in-range-position=start]{
  border-top-right-radius:0;
  border-bottom-right-radius:0;
}
.range--oaPYE[data-in-range-position=end]{
  border-top-left-radius:0;
  border-bottom-left-radius:0;
}

.button--ybi5n{
  cursor:pointer;
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;
  height:100%;
  padding:0;
  color:var(--sys-neutral-text-light, #8b8e9b);
  -webkit-appearance:none;
     -moz-appearance:none;
          appearance:none;
  background-color:transparent;
  border-style:none;
  outline:none;
}
.button--ybi5n[data-is-holiday]{
  color:var(--sys-red-text-light, #e7756a);
}
.button--ybi5n:focus-visible .box--zngJH{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--ybi5n[data-is-in-current-level-period]{
  color:var(--sys-neutral-text-main, #41424e);
}
.button--ybi5n[data-is-in-current-level-period][data-is-holiday]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.button--ybi5n[data-is-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  background-color:var(--sys-neutral-background, #eeeff3);
}
.button--ybi5n[data-is-disabled] .marker--xqdlf{
  background-color:currentColor;
}
.button--ybi5n[data-is-disabled] .box--zngJH, .button--ybi5n[data-is-disabled] .range--oaPYE{
  background-color:transparent;
}
.button--ybi5n[data-is-disabled][data-is-holiday]{
  color:var(--sys-red-text-disabled, #ee9285);
}
.button--ybi5n[data-is-selected]{
  color:var(--sys-primary-on-accent, #fbfffc);
}
.button--ybi5n[data-is-selected][data-is-holiday]{
  color:var(--sys-primary-on-accent, #fbfffc);
}
.button--ybi5n[data-is-selected] .box--zngJH{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.button--ybi5n[data-is-selected] .marker--xqdlf{
  background-color:var(--sys-primary-on-accent, #fbfffc);
}
.button--ybi5n[data-is-selected]:hover, .button--ybi5n[data-is-selected]:focus-visible{
  color:var(--sys-neutral-text-main, #41424e);
}
.button--ybi5n[data-is-selected]:hover .marker--xqdlf, .button--ybi5n[data-is-selected]:focus-visible .marker--xqdlf{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.button--ybi5n[data-is-selected]:hover .box--zngJH, .button--ybi5n[data-is-selected]:focus-visible .box--zngJH{
  background-color:color-mix(in srgb, var(--sys-primary-accent-default, #389f74), var(--sys-primary-decor-default, #caeadb) calc((1 - var(--opacity-a016, 0.16)) * 100%));
}
.button--ybi5n:hover:not([data-is-selected]):not([data-is-disabled]) .box--zngJH, .button--ybi5n:focus-visible:not([data-is-selected]):not([data-is-disabled]) .box--zngJH{
  background-color:color-mix(in srgb, var(--sys-neutral-accent-default, #787b8a), var(--sys-neutral-background2-level, #ffffff) calc((1 - var(--opacity-a016, 0.16)) * 100%));
}
.button--ybi5n:hover:not([data-is-selected]):not([data-is-disabled]) .range--oaPYE + .box--zngJH, .button--ybi5n:focus-visible:not([data-is-selected]):not([data-is-disabled]) .range--oaPYE + .box--zngJH{
  background-color:color-mix(in srgb, var(--sys-primary-accent-default, #389f74), var(--sys-primary-decor-default, #caeadb) calc((1 - var(--opacity-a016, 0.16)) * 100%));
}
.button--ybi5n[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.button--ybi5n[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.button--ybi5n[data-size=l]{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}

.content--sBXfS{
  position:relative;
}`,""]),r.locals={item:"item--pZZuL",label:"label--qIthQ",marker:"marker--xqdlf",range:"range--oaPYE",box:"box--zngJH",button:"button--ybi5n",content:"content--sBXfS"};const y=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/PeriodPresetsList/styles.module.css":((z,k,e)=>{e.d(k,{A:()=>y});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(a),r=p()(l());r.push([z.id,`.wrapper--f8cFy{
  display:flex;
  flex-direction:column;
}

.title--r8xfO{
  display:flex;
  align-items:center;
}

.header--dqEWR{
  display:flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  color:var(--sys-neutral-text-main, #41424e);
}
.header--dqEWR[data-size=s]{
  padding-left:var(--space-calendar-container-s, 8px);
  padding-right:var(--space-calendar-container-s, 8px);
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--dqEWR[data-size=s] .title--r8xfO{
  height:var(--size-calendar-container-header-lines-height-s, 32px);
}
.header--dqEWR[data-size=m]{
  padding-left:var(--space-calendar-container-m, 8px);
  padding-right:var(--space-calendar-container-m, 8px);
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--dqEWR[data-size=m] .title--r8xfO{
  height:var(--size-calendar-container-header-lines-height-m, 40px);
}
.header--dqEWR[data-size=l]{
  padding-left:var(--space-calendar-container-l, 8px);
  padding-right:var(--space-calendar-container-l, 8px);
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--dqEWR[data-size=l] .title--r8xfO{
  height:var(--size-calendar-container-header-lines-height-l, 48px);
}`,""]),r.locals={wrapper:"wrapper--f8cFy",title:"title--r8xfO",header:"header--dqEWR"};const y=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.18_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_5b21746e7d94306543779d7d6e8801d2/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/TimePickerBase/styles.module.css":((z,k,e)=>{e.d(k,{A:()=>y});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(a),r=p()(l());r.push([z.id,`.divider--ddxGs{
  flex-shrink:0;
  height:auto;
}

.timePicker--mOoTc{
  overflow:hidden;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  max-width:100%;
}
.timePicker--mOoTc[data-size=s]{
  min-width:var(--size-calendar-time-min-width-s, 120px);
  max-height:var(--size-calendar-container-min-height-s, 256px);
}
.timePicker--mOoTc[data-size=s][data-fit-to-container]{
  max-height:100%;
}
.timePicker--mOoTc[data-size=m]{
  min-width:var(--size-calendar-time-min-width-m, 144px);
  max-height:var(--size-calendar-container-min-height-m, 320px);
}
.timePicker--mOoTc[data-size=m][data-fit-to-container]{
  max-height:100%;
}
.timePicker--mOoTc[data-size=l]{
  min-width:var(--size-calendar-time-min-width-l, 168px);
  max-height:var(--size-calendar-container-min-height-l, 384px);
}
.timePicker--mOoTc[data-size=l][data-fit-to-container]{
  max-height:100%;
}

.timeListsWrapper--SXYRB{
  display:grid;
  grid-template-columns:1fr 1px 1fr;
  min-height:0;
}
.timeListsWrapper--SXYRB[data-show-seconds]{
  grid-template-columns:1fr 1px 1fr 1px 1fr;
}
.timeListsWrapper--SXYRB[data-size=s]{
  max-height:calc(100% - var(--size-calendar-container-header-lines-height-s, 32px));
}
.timeListsWrapper--SXYRB[data-size=m]{
  max-height:calc(100% - var(--size-calendar-container-header-lines-height-m, 40px));
}
.timeListsWrapper--SXYRB[data-size=l]{
  max-height:calc(100% - var(--size-calendar-container-header-lines-height-l, 48px));
}

.title--DCZEq{
  display:flex;
  align-items:center;
}

.header--GQjzn{
  display:flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  color:var(--sys-neutral-text-main, #41424e);
}
.header--GQjzn[data-size=s]{
  padding-left:var(--space-calendar-container-s, 8px);
  padding-right:var(--space-calendar-container-s, 8px);
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--GQjzn[data-size=s] .title--DCZEq{
  height:var(--size-calendar-container-header-lines-height-s, 32px);
}
.header--GQjzn[data-size=m]{
  padding-left:var(--space-calendar-container-m, 8px);
  padding-right:var(--space-calendar-container-m, 8px);
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--GQjzn[data-size=m] .title--DCZEq{
  height:var(--size-calendar-container-header-lines-height-m, 40px);
}
.header--GQjzn[data-size=l]{
  padding-left:var(--space-calendar-container-l, 8px);
  padding-right:var(--space-calendar-container-l, 8px);
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--GQjzn[data-size=l] .title--DCZEq{
  height:var(--size-calendar-container-header-lines-height-l, 48px);
}`,""]),r.locals={divider:"divider--ddxGs",timePicker:"timePicker--mOoTc",timeListsWrapper:"timeListsWrapper--SXYRB",title:"title--DCZEq",header:"header--GQjzn"};const y=r}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.32.17_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css":((z,k,e)=>{e.d(k,{A:()=>y});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),l=e.n(s),a=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),p=e.n(a),r=p()(l());r.push([z.id,`.hiddenBtn--gV7Gz{
  position:absolute;
  width:0;
  height:0;
  margin:0;
  padding:0;
  border:none;
  outline:none;
}`,""]),r.locals={hiddenBtn:"hiddenBtn--gV7Gz"};const y=r})}]);})();
