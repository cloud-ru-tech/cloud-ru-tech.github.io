"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[7641],{"./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/components/Calendar/Calendar.js":((S,b,e)=>{e.d(b,{V:()=>Rs});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),l=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),a=e.n(l),u=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),h=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),j=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),k=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/hooks.js"),p=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/utils.js"),x=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js"),se=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useIsomorphicLayoutEffect.js"),J=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Item/utils.js");function be([n,_],i){const{viewMode:d,viewShift:r,setViewShift:P,setFocus:y,onFocusLeave:g,mode:T}=(0,o.useContext)(x.Y),{rows:X,columns:de}=t.VF[d];return(0,o.useCallback)(ee=>{switch(i==null||i(ee),ee.key){case"ArrowLeft":_&&y((0,J.k)([n,_-1]));return;case"ArrowRight":_<de-1&&y((0,J.k)([n,_+1]));return;case"ArrowUp":n?y((0,J.k)([n-1,_])):(P(r-1),y((0,J.k)([X-1,_])));return;case"ArrowDown":n<X-1?y((0,J.k)([n+1,_])):(P(r+1),y((0,J.k)([0,_])));return;case"Tab":!ee.shiftKey&&(T!==t.NB.DateTime||d!=="month")&&(g==null||g("next"));return;default:}},[_,de,T,g,i,n,X,y,P,d,r])}var ue=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),V=e.n(ue),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),M=e.n(v),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),Q=e.n(R),me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),E=e.n(me),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),O=e.n(te),$=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=e.n($),c=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Item/styles.module.css"),m={};m.styleTagTransform=D(),m.setAttributes=E(),m.insert=Q().bind(null,"head"),m.domAPI=M(),m.insertStyleElement=O();var L=V()(c.A,m);const C=c.A&&c.A.locals?c.A.locals:void 0;function G({data:n,className:_}){const{date:i,label:d,address:r,onSelect:P,onPreselect:y,onLeave:g,inRangePosition:T,isCurrent:X,isDisabled:de,isHoliday:ee,isInCurrentLevelPeriod:Ce,isSelected:ve,tabIndex:H,onKeyDown:Re}=n,ge=(0,o.useRef)(null),{focus:Ie,setFocus:re,size:Ae,getTestId:os,locale:es}=(0,o.useContext)(x.Y);(0,se.N)(()=>{var Oe;(0,J.k)(r)===Ie&&((Oe=ge.current)===null||Oe===void 0||Oe.focus())},[Ie,r]),(0,se.N)(()=>{var Oe;H===0&&Ie===t.ck&&((Oe=ge.current)===null||Oe===void 0||Oe.focus())},[Ie,H]);const us=be(r,Re),We={"data-is-in-current-level-period":Ce||void 0,"data-is-selected":ve||void 0,"data-in-range-position":T,"data-is-current":X||void 0,"data-is-holiday":ee||void 0,"data-is-disabled":de||void 0,"data-size":Ae},_s=T!==t.E.Out;i.toLocaleString(es,{weekday:"short"});const He=Oe=>{!de&&P&&P(Oe)};return(0,s.jsx)("div",Object.assign({className:a()(_,C.item)},We,{children:(0,s.jsxs)("button",Object.assign({type:"button","aria-disabled":de,className:C.button,onClick:()=>He(i),onMouseEnter:()=>y==null?void 0:y(i),onFocus:()=>{re((0,J.k)(r)),y==null||y(i)},onMouseLeave:g,onBlur:()=>{re(void 0),g==null||g()},onKeyDown:us,ref:ge},We,{"data-test-id":os("item"),tabIndex:H,children:[_s&&(0,s.jsx)("div",Object.assign({className:C.range},We)),(0,s.jsx)("div",Object.assign({className:C.box},We)),(0,s.jsxs)("div",Object.assign({className:C.content},We,{children:[(0,s.jsx)("span",{className:C.label,children:d}),X&&(0,s.jsx)("div",Object.assign({className:C.marker},We))]}))]}))}))}var B=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Grid/styles.module.css"),I={};I.styleTagTransform=D(),I.setAttributes=E(),I.insert=Q().bind(null,"head"),I.domAPI=M(),I.insertStyleElement=O();var N=V()(B.A,I);const pe=B.A&&B.A.locals?B.A.locals:void 0;function le({grid:n}){return(0,s.jsx)("table",{className:pe.grid,border:0,children:(0,s.jsx)("tbody",{children:n.map((_,i)=>(0,s.jsx)("tr",{children:_.map((d,r)=>(0,s.jsx)("td",{children:(0,s.jsx)(G,{data:d,className:pe.item})},`${d.label}_${r}`))},i))})})}const Y=n=>{const _=[],i=n.getFullYear();let d=-1;const{rows:r,columns:P}=t.VF[t.aj.Decade];for(let y=0;y<r;y++){const g=[];for(let T=0;T<P;T++)g.push({date:new Date(i+d++,0,1),address:[y,T]});_.push(g)}return _};function ie(){const{referenceDate:n,setViewMode:_,setViewShift:i,preselectedRange:d,continuePreselect:r,restartPreselect:P,mode:y,setValue:g,startPreselect:T,completePreselect:X}=(0,o.useContext)(x.Y),de=(0,k.E)({buildGrid:Y,isTheSameItem:p.R3,isInPeriod:p.WV,getItemLabel:p.SA,onSelect(ee){if(y===t.NB.YearRange){d?X(ee):T(ee);return}if(y===t.NB.Year){g([ee,ee]);return}i((0,p._N)(n,ee)),_(t.aj.Year)},onPreselect(ee){d&&r(ee)},onLeave(){d&&P()}});return(0,s.jsx)(le,{grid:de})}var W=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js");const z=[1,2,3,4,5,6,0],F=[0,1,2,3,4,5,6],ae=(n,_)=>{const i=[],d=(0,p.mK)(_)===0?F:z,r=d.indexOf(n.getDay());let P=new Date(n.getFullYear(),n.getMonth(),1-r);const{rows:y}=t.VF[t.aj.Month];for(let g=0;g<y;g++){const T=[];for(let X=0;X<d.length;X++)T.push({date:P,address:[g,X]}),P=new Date(P.getFullYear(),P.getMonth(),P.getDate()+1);i.push(T)}return i};function Me(){const{mode:n,viewMode:_,dateAndTime:i,setValue:d,preselectedRange:r,startPreselect:P,continuePreselect:y,completePreselect:g,restartPreselect:T,onDateChange:X,locale:de,hoursKeyboardNavigationRef:ee}=(0,o.useContext)(x.Y),Ce=(0,o.useCallback)(H=>{var Re,ge;if(!(n!==t.NB.DateTime||_!=="month"))switch(H.key){case"Tab":H.shiftKey||(H.preventDefault(),H.stopPropagation(),(Re=ee.current)===null||Re===void 0||Re.focusItem((0,W.cE)((ge=i==null?void 0:i.hours)!==null&&ge!==void 0?ge:0)));break;case"Enter":setTimeout(()=>{var Ie,re;return(Ie=ee.current)===null||Ie===void 0?void 0:Ie.focusItem((0,W.cE)((re=i==null?void 0:i.hours)!==null&&re!==void 0?re:0))},0);break;default:break}},[i==null?void 0:i.hours,ee,n,_]),ve=(0,k.E)({buildGrid:H=>ae(H,de),isTheSameItem:p.KX,isInPeriod:p.UP,getItemLabel:p.pd,onSelect(H){if(n===t.NB.DateTime){X(H);return}if(n===t.NB.DateRange){r?g(H):P(H);return}n===t.NB.Date&&d([H,H])},onPreselect(H){r&&y(H)},onLeave(){r&&T()},onKeyDown:Ce});return(0,s.jsx)(le,{grid:ve})}const he=n=>{const _=[],i=n.getFullYear();let d=0;const{rows:r,columns:P}=t.VF[t.aj.Year];for(let y=0;y<r;y++){const g=[];for(let T=0;T<P;T++)g.push({date:new Date(i,d++,1),address:[y,T]});_.push(g)}return _};function ye(){const{referenceDate:n,setViewMode:_,setViewShift:i,setFocus:d,preselectedRange:r,continuePreselect:P,restartPreselect:y,locale:g,setValue:T,mode:X,startPreselect:de,completePreselect:ee}=(0,o.useContext)(x.Y),Ce=(0,k.E)({buildGrid:he,isTheSameItem:p.UP,isInPeriod:p.R3,getItemLabel:ve=>(0,p.Ge)(ve,g),onSelect(ve){if(X===t.NB.Month){T([ve,ve]);return}if(X===t.NB.MonthRange){r?ee(ve):de(ve);return}d(t.ck),i((0,p.Fo)(n,ve)),_(t.aj.Month)},onPreselect(ve){r&&P(ve)},onLeave(){r&&y()}});return(0,s.jsx)(le,{grid:Ce})}function K(){const{viewMode:n}=(0,o.useContext)(x.Y);switch(n){case t.aj.Decade:return(0,s.jsx)(ie,{});case t.aj.Year:return(0,s.jsx)(ye,{});case t.aj.Month:default:return(0,s.jsx)(Me,{})}}var _e=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),Z=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),De=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Button/styles.module.css"),Ee={};Ee.styleTagTransform=D(),Ee.setAttributes=E(),Ee.insert=Q().bind(null,"head"),Ee.domAPI=M(),Ee.insertStyleElement=O();var Fe=V()(De.A,Ee);const Le=De.A&&De.A.locals?De.A.locals:void 0;var oe=function(n,_){var i={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&_.indexOf(d)<0&&(i[d]=n[d]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,d=Object.getOwnPropertySymbols(n);r<d.length;r++)_.indexOf(d[r])<0&&Object.prototype.propertyIsEnumerable.call(n,d[r])&&(i[d[r]]=n[d[r]]);return i};function fe(n){var{label:_,icon:i,onClick:d,focusName:r,tabIndex:P,onLeftArrowKeyDown:y,onRightArrowKeyDown:g,onDownArrowKeyDown:T,disabled:X,useNavigationStartRef:de}=n,ee=oe(n,["label","icon","onClick","focusName","tabIndex","onLeftArrowKeyDown","onRightArrowKeyDown","onDownArrowKeyDown","disabled","useNavigationStartRef"]);const Ce=(0,o.useRef)(null),{size:ve,focus:H,setFocus:Re,onFocusLeave:ge,navigationStartRef:Ie}=(0,o.useContext)(x.Y);(0,se.N)(()=>{var Ae;H&&H===r&&((Ae=Ce.current)===null||Ae===void 0||Ae.focus())},[H,r]);const re=(0,o.useCallback)(Ae=>{switch(Ae.key){case"ArrowLeft":y==null||y();break;case"ArrowRight":g==null||g();break;case"ArrowDown":T==null||T();break;case"ArrowUp":ge==null||ge("prev");break;case"Tab":Ae.shiftKey&&(ge==null||ge("prev"));break;default:}},[T,ge,y,g]);return(0,o.useImperativeHandle)(de?Ie:void 0,()=>({focus:()=>{var Ae;(Ae=Ce.current)===null||Ae===void 0||Ae.focus()}})),(0,s.jsxs)("button",Object.assign({type:"button",tabIndex:P,className:Le.button,onClick:d,"data-size":ve,ref:Ce,onKeyDown:re,onFocus:()=>Re(r),onBlur:()=>Re(void 0),disabled:X},(0,f.z7)(ee),{children:[_,(0,s.jsx)("div",{className:Le.icon,children:i})]}))}const U="level",A="next",w="prev";function ne(){const{viewDate:n,viewMode:_,locale:i}=(0,o.useContext)(x.Y);switch(_){case t.aj.Month:{const d=n.getFullYear();return`${(0,p.Ge)(n,i)} ${d}`}case t.aj.Year:return n.getFullYear().toString();case t.aj.Decade:{const d=n.getFullYear();return`${d}-${d+9}`}default:return""}}var ce=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarNavigation/styles.module.css"),q={};q.styleTagTransform=D(),q.setAttributes=E(),q.insert=Q().bind(null,"head"),q.domAPI=M(),q.insertStyleElement=O();var ss=V()(ce.A,q);const ts=ce.A&&ce.A.locals?ce.A.locals:void 0,Qe=(n,_,i)=>{switch(i){case t.aj.Month:return(0,p._N)(n,_);case t.aj.Year:return(0,p.$7)(n,_);case t.aj.Decade:default:return 0}},Ke={[t.aj.Month]:t.aj.Year,[t.aj.Year]:t.aj.Decade,[t.aj.Decade]:t.aj.Decade},Be={UP:{[t.SK.S]:(0,s.jsx)(_e.A,{size:16}),[t.SK.M]:(0,s.jsx)(_e.A,{}),[t.SK.L]:(0,s.jsx)(_e.A,{})},DOWN:{[t.SK.S]:(0,s.jsx)(Z.A,{size:16}),[t.SK.M]:(0,s.jsx)(Z.A,{}),[t.SK.L]:(0,s.jsx)(Z.A,{})}};function $e(){const{referenceDate:n,viewDate:_,viewShift:i,setViewShift:d,viewMode:r,setViewMode:P,focus:y,setFocus:g,getTestId:T,size:X,firstNotDisableCell:de}=(0,o.useContext)(x.Y),ee=ne(),Ce=r===t.aj.Decade,ve=y&&[A,w].includes(y);return(0,s.jsxs)("div",{className:ts.wrapper,children:[(0,s.jsx)(fe,{disabled:Ce,onClick:()=>{r===t.aj.Year&&g(w),d(Qe(n,_,r)),P(Ke[r])},label:ee,"data-test-id":T("period-level"),focusName:U,tabIndex:ve?-1:0,icon:r!==t.aj.Decade?Be.DOWN[X]:void 0,onRightArrowKeyDown:()=>g(w),onDownArrowKeyDown:()=>{var H;return g((0,J.k)((H=de==null?void 0:de.current)!==null&&H!==void 0?H:[0,0]))},useNavigationStartRef:!0}),(0,s.jsxs)("div",{children:[(0,s.jsx)(fe,{onClick:()=>d(i-1),"data-test-id":T("period-prev"),focusName:w,tabIndex:y===w||Ce&&y!==A?0:-1,icon:Be.UP[X],onRightArrowKeyDown:()=>g(A),onLeftArrowKeyDown:()=>g(U),onDownArrowKeyDown:()=>{const H=r===t.aj.Month?2:1;g((0,J.k)([0,t.VF[r].columns-H]))}}),(0,s.jsx)(fe,{onClick:()=>d(i+1),"data-test-id":T("period-next"),focusName:A,tabIndex:y===A?0:-1,icon:Be.DOWN[X],onLeftArrowKeyDown:()=>g(w),onDownArrowKeyDown:()=>g((0,J.k)([0,t.VF[r].columns-1]))})]})]})}var Pe=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/ColumnLabel/styles.module.css"),je={};je.styleTagTransform=D(),je.setAttributes=E(),je.insert=Q().bind(null,"head"),je.domAPI=M(),je.insertStyleElement=O();var Ve=V()(Pe.A,je);const Ge=Pe.A&&Pe.A.locals?Pe.A.locals:void 0;function Je({label:n,className:_}){const{size:i,getTestId:d}=(0,o.useContext)(x.Y);return(0,s.jsx)("div",{className:a()(Ge.wrapper,_),"data-test-id":d("header-item"),"data-size":i,children:n})}var Ye=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/ColumnLabels/styles.module.css"),Ue={};Ue.styleTagTransform=D(),Ue.setAttributes=E(),Ue.insert=Q().bind(null,"head"),Ue.domAPI=M(),Ue.insertStyleElement=O();var as=V()(Ye.A,Ue);const is=Ye.A&&Ye.A.locals?Ye.A.locals:void 0,rs=new Date(1970,1,2),cs=new Date(1970,1,1),xe=n=>{const _=[],i=(0,p.mK)(n)===0?cs:rs;for(let d=0;d<7;d++){const r=new Date(i.getFullYear(),i.getMonth(),i.getDate()+d);_.push((0,p.ZH)(r.toLocaleString(n,{weekday:"short"})))}return _};function Se({className:n}){const{viewMode:_,locale:i,size:d}=(0,o.useContext)(x.Y),r=(0,o.useMemo)(()=>xe(i),[i]);return _===t.aj.Month?(0,s.jsx)("div",{className:a()(is.row,n),"data-size":d,children:r.map(P=>(0,s.jsx)(Je,{label:P},P))}):null}var Ne=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Footer/Footer.js"),ze=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js"),we=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/PeriodPresetsList/styles.module.css"),ke={};ke.styleTagTransform=D(),ke.setAttributes=E(),ke.insert=Q().bind(null,"head"),ke.domAPI=M(),ke.insertStyleElement=O();var vs=V()(we.A,ke);const Ze=we.A&&we.A.locals?we.A.locals:void 0;var ks=function(n,_){var i={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&_.indexOf(d)<0&&(i[d]=n[d]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,d=Object.getOwnPropertySymbols(n);r<d.length;r++)_.indexOf(d[r])<0&&Object.prototype.propertyIsEnumerable.call(n,d[r])&&(i[d[r]]=n[d[r]]);return i};function js(n){var{items:_,onChange:i,showTitle:d=!0,className:r}=n,P=ks(n,["items","onChange","showTitle","className"]);const{t:y}=(0,j.Ym)("Calendar"),{size:g,getTestId:T}=(0,o.useContext)(x.Y),X=(0,o.useMemo)(()=>_.map(de=>({id:de.id,content:{option:de.label},onClick(){i(de.range)},checked:!1})),[_,i]);return(0,s.jsxs)("div",Object.assign({className:a()(Ze.wrapper,r)},(0,f.z7)(P),{children:[d&&(0,s.jsx)("div",{className:Ze.header,"data-size":g,children:(0,s.jsx)("span",{className:Ze.title,"data-test-id":T("presets-header"),children:y("presets")})}),(0,s.jsx)(ze.B,{size:g,items:X,scroll:!0,selection:{mode:"single",value:void 0},hasListInFocusChain:!1})]}))}const Xe=1440*60*1e3;function xs(n,_){const i=_||new Date,d=i.getTime(),r=P=>{const y=new Date(i.getTime()+P);return d>y.getTime()?[y,i]:[i,y]};return[{label:n("defaultPresets.lastWeek"),id:"week",range:r(Xe*-7)},{label:n("defaultPresets.lastTwoWeeks"),id:"twoWeeks",range:r(Xe*-14)},{label:n("defaultPresets.lastMonth"),id:"month",range:r(Xe*-30)},{label:n("defaultPresets.lastQuarter"),id:"quarter",range:r(Xe*-90)},{label:n("defaultPresets.lastThird"),id:"fourMonths",range:r(Xe*-120)},{label:n("defaultPresets.lastYear"),id:"year",range:r(Xe*-365)},{label:n("defaultPresets.lastTwoYears"),id:"twoYears",range:r(Xe*-365*2)}]}var Ds=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/TimePickerBase/TimePickerBase.js");function Ps(n,_,i){switch(_){case t.aj.Decade:{const d=Math.floor(n.getFullYear()/10)*10;return new Date(d+i*10,1,1)}case t.aj.Year:return new Date(n.getFullYear()+i,1,1);case t.aj.Month:default:return new Date(n.getFullYear(),n.getMonth()+i,1)}}function Ss({setValue:n}){const[_,i]=(0,o.useState)(),d=(0,o.useCallback)(g=>{i([g,g])},[]),r=(0,o.useCallback)(g=>{i(T=>T&&[T[0],g])},[]),P=(0,o.useCallback)(()=>{i(g=>g&&[g[0],g[0]])},[]),y=(0,o.useCallback)(g=>{_&&(i(void 0),n([_[0],g]))},[_,n]);return{preselectedRange:_,startPreselect:d,continuePreselect:r,restartPreselect:P,completePreselect:y}}var ns=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarBase/styles.module.css"),qe={};qe.styleTagTransform=D(),qe.setAttributes=E(),qe.insert=Q().bind(null,"head"),qe.domAPI=M(),qe.insertStyleElement=O();var lt=V()(ns.A,qe);const Te=ns.A&&ns.A.locals?ns.A.locals:void 0;var Es=function(n,_){var i={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&_.indexOf(d)<0&&(i[d]=n[d]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,d=Object.getOwnPropertySymbols(n);r<d.length;r++)_.indexOf(d[r])<0&&Object.prototype.propertyIsEnumerable.call(n,d[r])&&(i[d[r]]=n[d[r]]);return i};const Cs={[t.SK.S]:Te.dateWrapperSizeS,[t.SK.M]:Te.dateWrapperSizeM,[t.SK.L]:Te.dateWrapperSizeL},As={[t.SK.S]:Te.calendarSizeS,[t.SK.M]:Te.calendarSizeM,[t.SK.L]:Te.calendarSizeL},Os={[t.NB.Date]:t.aj.Month,[t.NB.DateTime]:t.aj.Month,[t.NB.DateRange]:t.aj.Month,[t.NB.MonthRange]:t.aj.Year,[t.NB.Month]:t.aj.Year,[t.NB.YearRange]:t.aj.Decade,[t.NB.Year]:t.aj.Decade};function Ts(n){var{className:_,mode:i,size:d=t.SK.M,autofocus:r,fitToContainer:P=!0,value:y,defaultValue:g,onChangeValue:T,today:X,showHolidays:de=!1,showSeconds:ee=!0,style:Ce,locale:ve,onFocusLeave:H,buildCellProps:Re,"data-test-id":ge,navigationStartRef:Ie,presets:re}=n,Ae=Es(n,["className","mode","size","autofocus","fitToContainer","value","defaultValue","onChangeValue","today","showHolidays","showSeconds","style","locale","onFocusLeave","buildCellProps","data-test-id","navigationStartRef","presets"]);const{t:os}=(0,j.Ym)("Calendar"),[es,us]=(0,o.useState)(Os[i]),[We,_s]=(0,o.useState)(0),[He,Oe]=(0,u.iC)(y,g,T),ds=(0,o.useMemo)(()=>typeof X=="number"?new Date(X):X,[X]),[hs]=(0,o.useState)((He==null?void 0:He[0])||ds||new Date),Ls=Ps(hs,es,We),[Bs,zs]=(0,o.useState)(r?t.ck:void 0),{dateAndTime:Ks,onTimeChange:Ns,onDateChange:Ws,onDateAndTimeChange:Fs,isDateFilled:Ys,isTimeFilled:Us,isDateAndTimeFilled:Vs}=(0,k.O)({showSeconds:ee,value:i===t.NB.DateTime?He:void 0}),Gs=(0,o.useRef)(null),Xs=(0,o.useRef)(null),Hs=(0,o.useRef)({focusItem:()=>{}}),Qs=(0,o.useRef)({focusItem:()=>{}}),$s=(0,o.useRef)({focusItem:()=>{}}),ls=(0,o.useCallback)(ms=>{const[ps,fs]=(0,p.Wv)(ms);if(i===t.NB.MonthRange){Oe([(0,p.Xc)(ps),(0,p.az)(fs)]);return}if(i===t.NB.YearRange){Oe([(0,p.OJ)(ps),(0,p.n3)(fs)]);return}Oe([ps,(0,p.iN)(fs)])},[i,Oe]),{preselectedRange:Js,continuePreselect:Zs,completePreselect:qs,restartPreselect:et,startPreselect:st}=Ss({setValue:ls}),gs=(0,o.useMemo)(()=>(0,p.D5)(ge),[ge]),{lang:ys}=(0,j.Ym)(),tt=(0,o.useMemo)(()=>(0,p.JK)({localeProp:ve,ctxLang:ys}),[ys,ve]),at=(0,o.useRef)([0,0]),nt=(0,o.useMemo)(()=>re!=null&&re.items&&re.items.length>0?re.items:xs(os,ds),[re==null?void 0:re.items,os,ds]),ot=i===t.NB.DateRange&&(re==null?void 0:re.enabled)&&!Re,dt=(0,o.useCallback)(ms=>{ls(ms)},[ls]);return(0,s.jsx)("div",{className:a()(Te.calendarWrapper,_),"data-fit-to-container":P||void 0,"data-test-id":ge,children:(0,s.jsxs)(x.Y.Provider,{value:{locale:tt,size:d,value:He,firstNotDisableCell:at,fitToContainer:P,today:ds,showHolidays:de,viewDate:Ls,referenceDate:hs,preselectedRange:Js,mode:i,viewMode:es,viewShift:We,focus:Bs,setValue:ls,setViewMode:us,setViewShift:_s,startPreselect:st,continuePreselect:Zs,completePreselect:qs,restartPreselect:et,setFocus:zs,getTestId:gs,onFocusLeave:H,buildCellProps:Re,navigationStartRef:Ie,showSeconds:ee,dateAndTime:Ks,onTimeChange:Ns,onDateChange:Ws,onDateAndTimeChange:Fs,isDateAndTimeFilled:Vs,isDateFilled:Ys,isTimeFilled:Us,applyButtonRef:Gs,currentButtonRef:Xs,hoursKeyboardNavigationRef:Hs,minutesKeyboardNavigationRef:Qs,secondsKeyboardNavigationRef:$s},children:[(0,s.jsxs)("div",{className:a()(Te.dateWrapper,Cs[d]),"data-size":d,"data-show-footer":i===t.NB.DateTime&&es==="month"||void 0,children:[ot&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(js,{items:nt,onChange:dt,showTitle:re==null?void 0:re.title,"data-test-id":gs("presets")}),(0,s.jsx)(h.c,{className:Te.divider,orientation:"vertical"})]}),(0,s.jsxs)("div",Object.assign({},(0,f.z7)(Ae),{className:a()(Te.calendar,As[d]),style:Ce,"data-size":d,"data-fit-to-container":P||void 0,children:[(0,s.jsxs)("div",{className:Te.header,"data-size":d,children:[(0,s.jsx)($e,{}),(0,s.jsx)(Se,{})]}),(0,s.jsx)("div",{className:Te.body,children:(0,s.jsx)("div",{className:Te.rows,"data-size":d,children:(0,s.jsx)(K,{})})})]})),i===t.NB.DateTime&&es==="month"&&(0,s.jsx)(Ds.j,{})]}),(0,s.jsx)(Ne.w,{})]})})}function Ms(n){return Array.isArray(n)&&n.length===2&&n[0]instanceof Date&&n[1]instanceof Date}function Is(n){return n instanceof Date}const bs=n=>Ms(n)?n:Is(n)?[n,n]:n;var ws=function(n,_){var i={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&_.indexOf(d)<0&&(i[d]=n[d]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,d=Object.getOwnPropertySymbols(n);r<d.length;r++)_.indexOf(d[r])<0&&Object.prototype.propertyIsEnumerable.call(n,d[r])&&(i[d[r]]=n[d[r]]);return i};function Rs(n){const{onChangeValue:_,mode:i}=n,d=ws(n,["onChangeValue","mode"]),r=(0,o.useCallback)(P=>{if(i===t.NB.Date||i===t.NB.Month||i===t.NB.Year||i===t.NB.DateTime){const[y]=P;_==null||_(y);return}_==null||_(P)},[_,i]);return(0,s.jsx)(Ts,Object.assign({},d,{mode:i,value:bs(n.value),defaultValue:bs(n.defaultValue),onChangeValue:r}))}}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/TimePicker.js":((S,b,e)=>{e.d(b,{A:()=>G});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),t=e.n(o),l=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),a=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),h=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),j=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),f=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js"),k=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Footer/Footer.js"),p=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/TimePickerBase/TimePickerBase.js"),x=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/hooks.js"),se=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/utils.js"),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),be=e.n(J),ue=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),V=e.n(ue),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=e.n(v),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),Q=e.n(R),me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n(me),te=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),O=e.n(te),$=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/styles.module.css"),D={};D.styleTagTransform=O(),D.setAttributes=Q(),D.insert=M().bind(null,"head"),D.domAPI=V(),D.insertStyleElement=E();var c=be()($.A,D);const m=$.A&&$.A.locals?$.A.locals:void 0,L=new Date,C=()=>{};function G({className:B,size:I=j.SK.M,fitToContainer:N=!0,value:pe,defaultValue:le,onChangeValue:Y,onFocusLeave:ie,"data-test-id":W,navigationStartRef:z,showSeconds:F=!0,today:ae}){const[Me,he]=(0,a.iC)(pe,le,Y),ye=(0,h.A)(he),[K,_e]=(0,l.useState)(),[Z,De]=(0,l.useState)(void 0),Ee=typeof ae=="number"?new Date(ae):ae;(0,l.useEffect)(()=>{var Pe,je,Ve;if(!(K!=null&&K[0]))return;const Ge=(Pe=K[0].getHours())!==null&&Pe!==void 0?Pe:0,Je=(je=K[0].getMinutes())!==null&&je!==void 0?je:0,Ye=(Ve=K[0].getSeconds())!==null&&Ve!==void 0?Ve:0;ye({hours:Ge,minutes:Je,seconds:Ye})},[K,ye]);const Fe=(0,l.useCallback)(Pe=>{const je=Pe[0];_e([je,je])},[]),{dateAndTime:Le,onTimeChange:oe,onDateChange:fe,onDateAndTimeChange:U,isDateFilled:A,isTimeFilled:w,isDateAndTimeFilled:ne}=(0,x.O)({showSeconds:F,value:Me}),ce=(0,l.useRef)(null),q=(0,l.useRef)(null),ss=(0,l.useRef)({focusItem:()=>{}}),ts=(0,l.useRef)({focusItem:()=>{}}),Qe=(0,l.useRef)({focusItem:()=>{}}),Ke=(0,l.useMemo)(()=>(0,se.D5)(W),[W]),{lang:Be}=(0,u.Ym)(),$e=(0,l.useMemo)(()=>(0,se.JK)({localeProp:j.Xn,ctxLang:Be}),[Be]);return(0,s.jsx)("div",{className:t()(m.timePickerWrapper,B),"data-fit-to-container":N||void 0,"data-test-id":W,children:(0,s.jsxs)(f.Y.Provider,{value:{mode:"time",locale:$e,size:I,value:K,fitToContainer:N,focus:Z,setValue:Fe,setFocus:De,getTestId:Ke,onFocusLeave:ie,navigationStartRef:z,showSeconds:F,dateAndTime:Le,onTimeChange:oe,onDateAndTimeChange:U,isTimeFilled:w,applyButtonRef:ce,currentButtonRef:q,hoursKeyboardNavigationRef:ss,minutesKeyboardNavigationRef:ts,secondsKeyboardNavigationRef:Qe,today:Ee,viewMode:"month",showHolidays:!1,viewDate:L,referenceDate:L,preselectedRange:void 0,viewShift:0,setViewMode:C,setViewShift:C,startPreselect:C,continuePreselect:C,completePreselect:C,restartPreselect:C,buildCellProps:()=>({isDisabled:!1,isHoliday:!1}),onDateChange:fe,isDateAndTimeFilled:ne,isDateFilled:A},children:[(0,s.jsx)(p.j,{showDivider:!1}),(0,s.jsx)(k.w,{})]})})}}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/constants.js":((S,b,e)=>{e.d(b,{Al:()=>h,E:()=>t,NB:()=>o,SK:()=>l,VF:()=>a,Xn:()=>k,aj:()=>s,ck:()=>u,cs:()=>f,eX:()=>j});const s={Month:"month",Year:"year",Decade:"decade"},o={Date:"date",DateTime:"date-time",DateRange:"date-range",Month:"month",MonthRange:"month-range",Year:"year",YearRange:"year-range"},t={Out:"out",Start:"start",In:"in",End:"end",StartEnd:"start-end"},l={S:"s",M:"m",L:"l"},a={[s.Month]:{rows:6,columns:7},[s.Year]:{rows:4,columns:3},[s.Decade]:{rows:4,columns:3}},u="autofocus",h=24,j=60,f=60,k=new Intl.Locale("ru-RU")}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js":((S,b,e)=>{e.d(b,{Y:()=>u});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),t=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/utils.js");const l=()=>{},a={current:null},u=(0,s.createContext)({locale:(0,t.JK)(),size:o.SK.M,viewDate:new Date,referenceDate:new Date,mode:o.NB.Date,viewMode:o.aj.Month,viewShift:0,setFocus:l,setValue:l,setViewMode:l,showHolidays:!1,showSeconds:!0,fitToContainer:!0,setViewShift:l,startPreselect:l,continuePreselect:l,completePreselect:l,restartPreselect:l,onDateAndTimeChange:l,onTimeChange:l,onDateChange:l,isDateAndTimeFilled:()=>!1,isDateFilled:()=>!1,isTimeFilled:()=>!1,getTestId:()=>{},applyButtonRef:a,currentButtonRef:a,hoursKeyboardNavigationRef:a,minutesKeyboardNavigationRef:a,secondsKeyboardNavigationRef:a})}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Footer/Footer.js":((S,b,e)=>{e.d(b,{w:()=>c});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFunction/ButtonFunction.js"),l=e("./node_modules/.pnpm/@snack-uikit+button@0.19.17_react@18.2.0/node_modules/@snack-uikit/button/dist/esm/components/ButtonFilled/ButtonFilled.js"),a=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),u=e("./node_modules/.pnpm/@snack-uikit+icons@0.27.7/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),h=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"),j=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),f=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),k=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/utils.js"),p=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js"),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),se=e.n(x),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),be=e.n(J),ue=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),V=e.n(ue),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(v),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Q=e.n(R),me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(me),te=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Footer/styles.module.css"),O={};O.styleTagTransform=E(),O.setAttributes=M(),O.insert=V().bind(null,"head"),O.domAPI=be(),O.insertStyleElement=Q();var $=se()(te.A,O);const D=te.A&&te.A.locals?te.A.locals:void 0;function c(){const{size:m,viewMode:L,mode:C,today:G,setValue:B,dateAndTime:I,isTimeFilled:N,isDateAndTimeFilled:pe,onDateAndTimeChange:le,applyButtonRef:Y,currentButtonRef:ie,hoursKeyboardNavigationRef:W,minutesKeyboardNavigationRef:z,secondsKeyboardNavigationRef:F,showSeconds:ae,getTestId:Me,referenceDate:he,setViewShift:ye,onFocusLeave:K}=(0,o.useContext)(p.Y),{t:_e}=(0,j.Ym)("Calendar");if(![f.NB.DateTime,"time"].includes(C)||L!=="month")return null;const Z=C==="time"?!N():!pe(),De=oe=>{var fe,U,A,w;oe.key==="Tab"&&(oe.shiftKey?(oe.preventDefault(),ae?(fe=F.current)===null||fe===void 0||fe.focusItem((0,h.cE)((U=I==null?void 0:I.seconds)!==null&&U!==void 0?U:0)):(A=z.current)===null||A===void 0||A.focusItem((0,h.cE)((w=I==null?void 0:I.minutes)!==null&&w!==void 0?w:0))):Z&&(K==null||K("next")))},Ee=oe=>{oe.key==="Tab"&&!oe.shiftKey&&(K==null||K("next"))},Fe=()=>{var oe,fe,U,A,w,ne,ce;const q=G||new Date;le(q),ye((0,k.Fo)(he,q)),(oe=W.current)===null||oe===void 0||oe.focusItem((0,h.cE)((fe=q.getHours())!==null&&fe!==void 0?fe:0)),(U=z.current)===null||U===void 0||U.focusItem((0,h.cE)((A=q.getMinutes())!==null&&A!==void 0?A:0)),(w=F.current)===null||w===void 0||w.focusItem((0,h.cE)((ne=q.getSeconds())!==null&&ne!==void 0?ne:0)),(ce=Y.current)===null||ce===void 0||ce.focus()},Le=()=>{if(!I)return;const oe=G||new Date,{year:fe=oe.getFullYear(),month:U=oe.getMonth(),day:A=oe.getMonth(),hours:w,minutes:ne,seconds:ce}=I,q=new Date(fe,U,A,w,ne,ae?ce:0);B([q,q])};return(0,s.jsxs)("div",{className:D.footer,"data-size":m,children:[(0,s.jsx)(a.c,{className:D.divider}),(0,s.jsxs)("div",{className:D.currentWrapper,"data-size":m,children:[(0,s.jsx)(t.b,{label:_e("current"),size:m==="s"?"xs":"s",onClick:Fe,ref:ie,onKeyDown:De,"data-test-id":Me("current-button")}),(0,s.jsx)(l.L,{icon:(0,s.jsx)(u.A,{}),size:m==="s"?"xs":"s",disabled:Z,onClick:Le,ref:Y,onKeyDown:Ee,"data-test-id":Me("apply-button")})]})]})}}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Item/utils.js":((S,b,e)=>{e.d(b,{k:()=>s});const s=o=>o.join("-")}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/TimePickerBase/TimePickerBase.js":((S,b,e)=>{e.d(b,{j:()=>c});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),t=e("./node_modules/.pnpm/@snack-uikit+divider@3.2.11_react@18.2.0/node_modules/@snack-uikit/divider/dist/esm/components/Divider.js"),l=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helpers.js"),a=e("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),u=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),h=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js"),j=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js"),f=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/componentPropsProcessors.js"),k=function(m,L){var C={};for(var G in m)Object.prototype.hasOwnProperty.call(m,G)&&L.indexOf(G)<0&&(C[G]=m[G]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var B=0,G=Object.getOwnPropertySymbols(m);B<G.length;B++)L.indexOf(G[B])<0&&Object.prototype.propertyIsEnumerable.call(m,G[B])&&(C[G[B]]=m[G[B]]);return C};function p(m){var{numberOfItems:L,value:C,onChange:G,className:B,onKeyDownGetter:I,keyboardNavigationRef:N,navigationStartRef:pe,"data-test-id":le}=m,Y=k(m,["numberOfItems","value","onChange","className","onKeyDownGetter","keyboardNavigationRef","navigationStartRef","data-test-id"]);const{size:ie}=(0,o.useContext)(h.Y),W=(0,o.useMemo)(()=>new Array(L).fill(null).map(()=>(0,o.createRef)()),[L]);(0,o.useImperativeHandle)(pe,()=>({focus:()=>{var F;(F=N==null?void 0:N.current)===null||F===void 0||F.focusItem((0,l.cE)(C||0))}}));const z=(0,o.useMemo)(()=>new Array(L).fill(void 0).map((F,ae)=>({id:ae,content:{option:String(ae).padStart(2,"0")},"data-test-id":le,onKeyDown:I==null?void 0:I(ae),itemRef:W[ae]})),[le,W,L,I]);return(0,s.jsx)(j.B,Object.assign({},(0,f.z7)(Y),{size:ie,items:z,scroll:!0,keyboardNavigationRef:N,selection:{mode:"single",value:C,onChange:G},className:B,hasListInFocusChain:!1,scrollToSelectedItem:!0}))}var x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),se=e.n(x),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),be=e.n(J),ue=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),V=e.n(ue),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),M=e.n(v),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Q=e.n(R),me=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),E=e.n(me),te=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/TimePickerBase/styles.module.css"),O={};O.styleTagTransform=E(),O.setAttributes=M(),O.insert=V().bind(null,"head"),O.domAPI=be(),O.insertStyleElement=Q();var $=se()(te.A,O);const D=te.A&&te.A.locals?te.A.locals:void 0;function c({showDivider:m=!0}){const{t:L}=(0,a.Ym)("Calendar"),{size:C,mode:G,fitToContainer:B,showSeconds:I,dateAndTime:N,onTimeChange:pe,applyButtonRef:le,currentButtonRef:Y,hoursKeyboardNavigationRef:ie,minutesKeyboardNavigationRef:W,secondsKeyboardNavigationRef:z,setFocus:F,getTestId:ae,navigationStartRef:Me,onFocusLeave:he}=(0,o.useContext)(h.Y),ye=N==null?void 0:N.hours,K=N==null?void 0:N.minutes,_e=N==null?void 0:N.seconds,Z=(0,o.useCallback)(U=>A=>{var w;const ne=Object.assign({hours:0,minutes:0,seconds:0},N);pe(Object.assign(Object.assign({},ne),{[U]:(w=A!=null?A:N==null?void 0:N[U])!==null&&w!==void 0?w:0}))},[N,pe]),De=(0,o.useMemo)(()=>Z("hours"),[Z]),Ee=(0,o.useMemo)(()=>Z("minutes"),[Z]),Fe=(0,o.useMemo)(()=>Z("seconds"),[Z]),Le=(0,o.useCallback)(U=>A=>{var w,ne;switch(A.key){case"Tab":if(G==="time"&&A.shiftKey){he==null||he("prev");break}A.stopPropagation(),A.preventDefault(),A.shiftKey?F(u.ck):(w=W.current)===null||w===void 0||w.focusItem((0,l.cE)(K!=null?K:0));break;case"Enter":(ne=W.current)===null||ne===void 0||ne.focusItem((0,l.cE)(K!=null?K:0));break;case"ArrowUp":if(G==="time"&&U===0){he==null||he("prev");break}break;default:break}},[K,W,G,he,F]),oe=(0,o.useCallback)(()=>U=>{var A,w,ne,ce,q;switch(U.key){case"Tab":U.stopPropagation(),U.preventDefault(),U.shiftKey?(A=ie.current)===null||A===void 0||A.focusItem((0,l.cE)(ye!=null?ye:0)):I?(w=z.current)===null||w===void 0||w.focusItem((0,l.cE)(_e!=null?_e:0)):(ne=Y.current)===null||ne===void 0||ne.focus();break;case"Enter":I?(ce=z.current)===null||ce===void 0||ce.focusItem((0,l.cE)(_e!=null?_e:0)):(q=le.current)===null||q===void 0||q.focus();break;default:break}},[le,Y,ye,ie,_e,z,I]),fe=(0,o.useCallback)(()=>U=>{var A,w,ne;switch(U.key){case"Tab":U.stopPropagation(),U.preventDefault(),U.shiftKey?(A=W.current)===null||A===void 0||A.focusItem((0,l.cE)(K!=null?K:0)):(w=Y.current)===null||w===void 0||w.focus();break;case"Enter":(ne=le.current)===null||ne===void 0||ne.focus();break;default:break}},[le,Y,K,W]);return(0,s.jsxs)(s.Fragment,{children:[m&&(0,s.jsx)(t.c,{orientation:"vertical",className:D.divider}),(0,s.jsxs)("div",{className:D.timePicker,"data-size":C,"data-fit-to-container":B||void 0,children:[(0,s.jsx)("div",{className:D.header,"data-size":C,children:(0,s.jsx)("span",{className:D.title,children:L("time")})}),(0,s.jsxs)("div",{className:D.timeListsWrapper,"data-size":C,"data-show-seconds":I||void 0,children:[(0,s.jsx)(p,{value:ye,onChange:De,"data-test-id":ae("hours"),numberOfItems:u.Al,onKeyDownGetter:Le,keyboardNavigationRef:ie,navigationStartRef:G==="time"?Me:void 0}),(0,s.jsx)(t.c,{className:D.divider,orientation:"vertical"}),(0,s.jsx)(p,{value:K,onChange:Ee,"data-test-id":ae("minutes"),numberOfItems:u.eX,onKeyDownGetter:oe,keyboardNavigationRef:W}),I&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.c,{className:D.divider,orientation:"vertical"}),(0,s.jsx)(p,{value:_e,onChange:Fe,"data-test-id":ae("seconds"),numberOfItems:u.cs,onKeyDownGetter:fe,keyboardNavigationRef:z})]})]})]})]})}}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/hooks.js":((S,b,e)=>{e.d(b,{E:()=>u,O:()=>h});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),t=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js"),l=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Item/utils.js"),a=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/utils.js");function u({onSelect:j,onPreselect:f,onLeave:k,buildGrid:p,isTheSameItem:x,getItemLabel:se,isInPeriod:J,onKeyDown:be}){const{today:ue,showHolidays:V,preselectedRange:v,value:M,dateAndTime:R,mode:Q,viewDate:me,viewMode:E,focus:te,buildCellProps:O,firstNotDisableCell:$,isDateFilled:D}=(0,s.useContext)(t.Y);return(0,s.useMemo)(()=>{let c=!1,m,L=!1;const C=p(me).map(G=>G.map(({date:B,address:I})=>{var N,pe,le,Y;let ie=!1,W,z={isDisabled:ie,isHoliday:W};O&&(z=O(B,E),ie=(N=z==null?void 0:z.isDisabled)!==null&&N!==void 0?N:!1,W=z.isHoliday),W===void 0&&(W=V&&(0,a.cM)(B,E)),ie||$&&!L&&($.current=I,L=!0);const F=D()?new Date((pe=R==null?void 0:R.year)!==null&&pe!==void 0?pe:0,(le=R==null?void 0:R.month)!==null&&le!==void 0?le:0,(Y=R==null?void 0:R.day)!==null&&Y!==void 0?Y:0):void 0,Me=Q===o.NB.DateRange||Q===o.NB.MonthRange||Q===o.NB.YearRange?(0,a.Am)(B,E,v||M):o.E.Out,he=M&&!v&&!F?x(M[0],B)||x(M[1],B):!1,ye=v?x(v[0],B):!1,K=F?x(F,B):!1,_e=te&&(0,l.k)(I)===te?0:-1;c=_e===0||c;const Z=x(ue||new Date,B),De={date:B,onLeave:k,address:I,tabIndex:_e,onSelect:j,isCurrent:Z,isDisabled:ie,isHoliday:W,onPreselect:f,inRangePosition:Me,label:se(B),isSelected:he||ye||K,isInCurrentLevelPeriod:J(me,B),onKeyDown:be};return Z&&(m=De),De}));return c||((m||C[0][0]).tabIndex=0),C},[O,p,R==null?void 0:R.day,R==null?void 0:R.month,R==null?void 0:R.year,$,te,se,D,J,x,Q,be,k,f,j,v,V,ue,M,me,E])}function h({showSeconds:j,value:f}){const[k,p]=(0,s.useState)(()=>{if(Array.isArray(f)){const v=f[0];return{year:v.getFullYear(),month:v.getMonth(),day:v.getDate(),hours:v.getHours(),minutes:v.getMinutes(),seconds:v.getSeconds()}}return{year:void 0,month:void 0,day:void 0,hours:f==null?void 0:f.hours,minutes:f==null?void 0:f.minutes,seconds:f==null?void 0:f.seconds}}),x=(0,s.useCallback)(()=>{const{year:v,month:M,day:R}=k;return[v,M,R].every(Q=>Q!==void 0)},[k]),se=(0,s.useCallback)(()=>{const{hours:v,minutes:M,seconds:R}=k;return[v,M,...j?[R]:[]].every(Q=>Q!==void 0)},[k,j]),J=(0,s.useCallback)(()=>se()&&x(),[x,se]),be=(0,s.useCallback)(v=>{v instanceof Date?p(M=>Object.assign(Object.assign({},M),{year:v.getFullYear(),month:v.getMonth(),day:v.getDate()})):p(M=>Object.assign(Object.assign({},M),v))},[]),ue=(0,s.useCallback)(v=>{v instanceof Date?p(M=>Object.assign(Object.assign({},M),{hours:v.getHours(),minutes:v.getMinutes(),seconds:v.getSeconds()})):p(M=>Object.assign(Object.assign({},M),v))},[]),V=(0,s.useCallback)(v=>{v instanceof Date?p({year:v.getFullYear(),month:v.getMonth(),day:v.getDate(),hours:v.getHours(),minutes:v.getMinutes(),seconds:v.getSeconds()}):p(v)},[]);return(0,s.useEffect)(()=>{if(!f){p({});return}Array.isArray(f)?V(f[0]):ue(f)},[V,ue,f]),{dateAndTime:k,setDateAndTime:p,isDateAndTimeFilled:J,isTimeFilled:se,isDateFilled:x,onDateChange:be,onTimeChange:ue,onDateAndTimeChange:V}}}),"./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/utils.js":((S,b,e)=>{e.d(b,{$7:()=>J,Am:()=>V,D5:()=>E,Fo:()=>x,Ge:()=>f,JK:()=>O,KX:()=>h,OJ:()=>Q,R3:()=>a,SA:()=>p,UP:()=>u,WV:()=>l,Wv:()=>ue,Xc:()=>M,ZH:()=>j,_N:()=>se,az:()=>R,cM:()=>D,iN:()=>v,mK:()=>$,n3:()=>me,pd:()=>k});var s=e("./node_modules/.pnpm/weekstart@2.0.0/node_modules/weekstart/dist/es-module/main.js"),o=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),t=e("./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/constants.js");const l=(c,m)=>Math.floor(c.getFullYear()/10)===Math.floor(m.getFullYear()/10),a=(c,m)=>c.getFullYear()===m.getFullYear(),u=(c,m)=>a(c,m)&&c.getMonth()===m.getMonth();function h(c,m){return u(c,m)&&c.getDate()===m.getDate()}const j=c=>c.substring(0,1).toUpperCase()+c.substring(1),f=(c,m)=>{const L=c.toLocaleString(m,{month:"long"});return j(L)},k=c=>c.getDate().toString(),p=c=>c.getFullYear().toString(),x=(c,m)=>{const L=(m.getFullYear()-c.getFullYear())*12,C=m.getMonth()-c.getMonth();return L+C},se=(c,m)=>m.getFullYear()-c.getFullYear(),J=(c,m)=>Math.trunc((m.getFullYear()-c.getFullYear())/10),be=(c,m,L)=>{switch(c){case t.aj.Month:return h(m,L);case t.aj.Year:return u(m,L);case t.aj.Decade:return a(m,L);default:return!1}},ue=c=>[...c].sort((m,L)=>m.valueOf()-L.valueOf()),V=(c,m,L)=>{if(!L)return t.E.Out;const[C,G]=ue(L),B=be(m,c,C),I=be(m,c,G);if(B&&I)return t.E.StartEnd;if(B)return t.E.Start;if(I)return t.E.End;const[N,pe]=L.map(le=>le.valueOf()).sort();return c.valueOf()>=N&&c.valueOf()<=pe?t.E.In:t.E.Out},v=c=>new Date(new Date(c.getFullYear(),c.getMonth(),c.getDate()+1).valueOf()-1),M=c=>new Date(new Date(c.getFullYear(),c.getMonth(),1).valueOf()),R=c=>new Date(new Date(c.getFullYear(),c.getMonth()+1,1).valueOf()-1),Q=c=>new Date(new Date(c.getFullYear(),0,1).valueOf()),me=c=>new Date(new Date(c.getFullYear()+1,0,1).valueOf()-1),E=c=>m=>c?`${m}-${c}`:void 0,te=()=>{var c;return(0,o.B)()&&(c=navigator==null?void 0:navigator.language)!==null&&c!==void 0?c:"ru-RU"},O=({localeProp:c,ctxLang:m}={})=>c||new Intl.Locale(m?m.replace("_","-"):te()),$=c=>(0,s.S)(c.language),D=(c,m)=>m==="month"?c.getDay()===0||c.getDay()===6:!1}),"./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/List/List.js":((S,b,e)=>{e.d(b,{B:()=>le});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),t=e.n(o),l=e("./node_modules/.pnpm/merge-refs@1.3.0_@types+react@18.2.79/node_modules/merge-refs/dist/esm/index.js"),a=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),u=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js"),h=e("./node_modules/.pnpm/@snack-uikit+utils@4.0.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/utils/isBrowser.js"),j=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/constants.js"),f=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/utils.js"),k=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(k),x=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),se=e.n(x),J=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),be=e.n(J),ue=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),V=e.n(ue),v=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),M=e.n(v),R=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Q=e.n(R),me=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css"),E={};E.styleTagTransform=Q(),E.setAttributes=V(),E.insert=be().bind(null,"head"),E.domAPI=se(),E.insertStyleElement=M();var te=p()(me.A,E);const O=me.A&&me.A.locals?me.A.locals:void 0,$=(0,a.forwardRef)(({listRef:Y,tabIndex:ie},W)=>{const z=(0,a.useCallback)(F=>{var ae;F.relatedTarget!==Y.current&&((ae=Y.current)===null||ae===void 0||ae.focus()),F.preventDefault(),F.stopPropagation()},[Y]);return(0,s.jsx)("button",{type:"button","aria-hidden":!0,ref:W,onKeyDown:f.d,onFocus:z,className:O.hiddenBtn,tabIndex:ie})});var D=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/hooks.js"),c=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Items/utils.js"),m=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/NewListProvider.js"),L=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/SelectionProvider.js"),C=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/CollapseProvider.js"),G=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/contexts/FocusListProvider.js"),B=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/hooks.js"),I=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/ListPrivate/ListPrivate.js"),N=e("./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/components/Lists/styles.module.css"),pe=function(Y,ie){var W={};for(var z in Y)Object.prototype.hasOwnProperty.call(Y,z)&&ie.indexOf(z)<0&&(W[z]=Y[z]);if(Y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var F=0,z=Object.getOwnPropertySymbols(Y);F<z.length;F++)ie.indexOf(z[F])<0&&Object.prototype.propertyIsEnumerable.call(Y,z[F])&&(W[z[F]]=Y[z[F]]);return W};const le=(0,a.forwardRef)((Y,ie)=>{var{items:W=[],search:z,pinBottom:F=[],pinTop:ae=[],footerActiveElementsRefs:Me,onKeyDown:he,tabIndex:ye=0,className:K,collapse:_e={},selection:Z,contentRender:De,size:Ee="s",marker:Fe=!0,keyboardNavigationRef:Le,hasListInFocusChain:oe=!0}=Y,fe=pe(Y,["items","search","pinBottom","pinTop","footerActiveElementsRefs","onKeyDown","tabIndex","className","collapse","selection","contentRender","size","marker","keyboardNavigationRef","hasListInFocusChain"]);const U=(0,a.useMemo)(()=>!!z,[z]),[A=[],w]=(0,u.I)(_e),ne=(0,a.useCallback)(xe=>w(Se=>Se!=null&&Se.includes(xe)?Se.filter(Ne=>Ne!==xe):(Se!=null?Se:[]).concat([xe])),[w]),{searchItem:ce,footerItems:q}=(0,D.nG)({footerActiveElementsRefs:Me}),ss=(0,a.useMemo)(()=>{const xe=(0,c.lg)({items:ae,prefix:j.$.pinTop,parentId:j.$.default}),Se=(0,c.lg)({items:W,prefix:j.$.default,parentId:j.$.default}),Ne=(0,c.lg)({items:F,prefix:j.$.pinBottom,parentId:j.$.default}),ze=Object.assign(Object.assign(Object.assign({},xe.flattenItems),Ne.flattenItems),Se.flattenItems),we=Object.assign(Object.assign(Object.assign({},xe.focusFlattenItems),Ne.focusFlattenItems),Se.focusFlattenItems);return[...q,ce].forEach(ke=>{ze[ke.id]=ke,we[ke.id]=Object.assign(Object.assign({},ke),{originalId:ke.id,items:[],key:ke.id,allChildIds:[]})}),{items:Se,pinTop:xe,pinBottom:Ne,flattenItems:ze,focusFlattenItems:we}},[W,ae,F,ce,q]),{flattenItems:ts,focusFlattenItems:Qe}=ss,Ke=pe(ss,["flattenItems","focusFlattenItems"]),{ids:Be,expandedIds:$e}=(0,a.useMemo)(()=>{const{pinTop:xe,items:Se,pinBottom:Ne}=Ke;let ze=[],we=[];return U&&ze.push(ce.id),[xe,Se,Ne].forEach(({focusFlattenItems:ke,focusCloseChildIds:vs})=>{const Ze=(0,c.e)({focusFlattenItems:ke,focusCloseChildIds:vs,openCollapseItems:A,isSelectionMultiple:(Z==null?void 0:Z.mode)==="multiple"});ze=ze.concat(Ze.ids),we=we.concat(Ze.expandedIds)}),q.forEach(ke=>{ze.push(ke.id)}),{ids:ze,expandedIds:we}},[q,U,Ke,A,ce.id,Z==null?void 0:Z.mode]),Pe=(0,a.useRef)(null),je=(0,a.useRef)(null),Ve=Be[0],{handleListKeyDownFactory:Ge,activeItemId:Je,resetActiveItemId:Ye,forceUpdateActiveItemId:Ue}=(0,B.d)({mainRef:Pe,btnRef:je,focusFlattenItems:Qe,keyboardNavigationRef:Le,hasListInFocusChain:oe,firstItemId:Ve}),as=(0,a.useCallback)(xe=>Ge(Be,$e)(xe),[Ge,Be,$e]),is=(0,h.B)()&&Pe.current===document.activeElement&&Je===void 0,rs=xe=>{he==null||he(xe),as==null||as(xe)},cs=()=>{Ye()};return(0,s.jsx)(m.Tr,{flattenItems:ts,focusFlattenItems:Qe,contentRender:De,size:Ee,marker:Fe,firstItemId:Ve,virtualized:fe.virtualized,children:(0,s.jsx)(L.WM,Object.assign({},Z,{children:(0,s.jsx)(C.bN.Provider,{value:{openCollapseItems:A,toggleOpenCollapseItem:ne},children:(0,s.jsx)(G.m.Provider,{value:{activeItemId:Je,handleListKeyDownFactory:Ge,forceUpdateActiveItemId:Ue},children:(0,s.jsxs)("div",{className:t()(N.A.wrapper,K),"data-active":is||void 0,children:[(0,s.jsx)(I.Q,Object.assign({},fe,{items:Ke.items.focusCloseChildIds,pinTop:Ke.pinTop.focusCloseChildIds,pinBottom:Ke.pinBottom.focusCloseChildIds,searchItem:ce,ref:(0,l.A)(ie,Pe),onFocus:cs,onKeyDown:rs,tabIndex:oe?ye:void 0,search:z,nested:!1})),oe&&(0,s.jsx)($,{ref:je,listRef:Pe,tabIndex:ye})]})})})}))})})}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.10_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/Skeleton.js":((S,b,e)=>{e.d(b,{E:()=>me});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),t=e.n(o),l=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.10_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js"),a=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(a),h=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),j=e.n(h),f=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),k=e.n(f),p=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),x=e.n(p),se=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),J=e.n(se),be=e("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),ue=e.n(be),V=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.10_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css"),v={};v.styleTagTransform=ue(),v.setAttributes=x(),v.insert=k().bind(null,"head"),v.domAPI=j(),v.insertStyleElement=J();var M=u()(V.A,v);const R=V.A&&V.A.locals?V.A.locals:void 0;var Q=function(E,te){var O={};for(var $ in E)Object.prototype.hasOwnProperty.call(E,$)&&te.indexOf($)<0&&(O[$]=E[$]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,$=Object.getOwnPropertySymbols(E);D<$.length;D++)te.indexOf($[D])<0&&Object.prototype.propertyIsEnumerable.call(E,$[D])&&(O[$[D]]=E[$[D]]);return O};function me(E){var{width:te,height:O,className:$,borderRadius:D,loading:c,children:m}=E,L=Q(E,["width","height","className","borderRadius","loading","children"]);return(0,l.v)(c)?(0,s.jsx)("div",Object.assign({},L,{style:{width:te,height:O,borderRadius:D},className:t()(R.skeleton,$)})):(0,s.jsx)(s.Fragment,{children:m})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.10_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js":((S,b,e)=>{e.d(b,{Q:()=>l,r:()=>t});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),o=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const t=(0,o.createContext)(!1);function l({loading:a,children:u}){return(0,s.jsx)(t.Provider,{value:a,children:u})}}),"./node_modules/.pnpm/@snack-uikit+skeleton@0.6.10_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/hooks.js":((S,b,e)=>{e.d(b,{v:()=>t});var s=e("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),o=e("./node_modules/.pnpm/@snack-uikit+skeleton@0.6.10_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/context/index.js");function t(l){return(0,s.useContext)(o.r)||l}}),"./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useValueControl.js":((S,b,e)=>{e.d(b,{I:()=>o});var s=e("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js");function o({value:t,onChange:l,defaultValue:a}){return(0,s.iC)(t,a,u=>{const h=typeof u=="function"?u(t):u;l==null||l(h)})}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`.timePickerWrapper--lPsq6{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  box-sizing:border-box;
  width:-moz-fit-content;
  width:fit-content;
}
.timePickerWrapper--lPsq6[data-fit-to-container]{
  min-width:100%;
  height:100%;
}`,""]),a.locals={timePickerWrapper:"timePickerWrapper--lPsq6"};const u=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Button/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`.button--YMSSu{
  display:inline-flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  color:var(--sys-neutral-text-main, #41424e);
  background:none;
  border:none;
}
.button--YMSSu:not(:disabled){
  cursor:pointer;
}
.button--YMSSu:not(:disabled):hover, .button--YMSSu:not(:disabled):focus-visible{
  background-color:color-mix(in srgb, var(--sys-neutral-accent-default, #787b8a), var(--sys-neutral-background1-level, #fdfdfd) calc((1 - var(--opacity-a008, 0.08)) * 100%));
}
.button--YMSSu:not(:disabled):focus-visible{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--YMSSu[data-size=s]{
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
.button--YMSSu[data-size=m]{
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
.button--YMSSu[data-size=l]{
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

.icon--MibuM{
  display:inline-flex;
  color:var(--sys-neutral-text-light, #8b8e9b);
}`,""]),a.locals={button:"button--YMSSu",icon:"icon--MibuM"};const u=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarBase/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`@charset "UTF-8";
.calendarWrapper--mdzLc{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  box-sizing:border-box;
  width:-moz-fit-content;
  width:fit-content;
}
.calendarWrapper--mdzLc[data-fit-to-container]{
  min-width:100%;
  height:100%;
}

.dateWrapper--SDCcD{
  display:flex;
  flex-grow:1;
}

.calendar--EkjfG{
  display:inline-flex;
  flex-direction:column;
  box-sizing:border-box;
  max-width:100%;
  max-height:100%;
}
.calendar--EkjfG[data-fit-to-container]{
  width:100%;
}
.calendarSizeS--inIwR{
  min-width:var(--size-calendar-container-min-width-s, 240px);
  min-height:var(--size-calendar-container-min-height-s, 256px);
}

.calendarSizeM--PcrxQ{
  min-width:var(--size-calendar-container-min-width-m, 296px);
  min-height:var(--size-calendar-container-min-height-m, 320px);
}

.calendarSizeL--AVf13{
  min-width:var(--size-calendar-container-min-width-l, 352px);
  min-height:var(--size-calendar-container-min-height-l, 384px);
}

.dateWrapperSizeS--V_1GN{
  min-height:var(--size-calendar-container-min-height-s, 256px);
}

.dateWrapperSizeM--OzaK5{
  min-height:var(--size-calendar-container-min-height-m, 320px);
}

.dateWrapperSizeL--AyqfI{
  min-height:var(--size-calendar-container-min-height-l, 384px);
}

.header--di_VT{
  flex-grow:0;
  flex-shrink:0;
}
.header--di_VT[data-size=s]{
  padding-left:var(--space-calendar-container-s, 8px);
  padding-right:var(--space-calendar-container-s, 8px);
}
.header--di_VT[data-size=m]{
  padding-left:var(--space-calendar-container-m, 8px);
  padding-right:var(--space-calendar-container-m, 8px);
}
.header--di_VT[data-size=l]{
  padding-left:var(--space-calendar-container-l, 8px);
  padding-right:var(--space-calendar-container-l, 8px);
}

.body--JbBVC{
  position:relative;
  flex-grow:1;
  flex-shrink:1;
}

.rows--Airgt{
  position:absolute;
  box-sizing:border-box;
  width:100%;
  height:100%;
}
.rows--Airgt[data-size=s]{
  padding-left:var(--space-calendar-container-s, 8px);
  padding-right:var(--space-calendar-container-s, 8px);
}
.rows--Airgt[data-size=m]{
  padding-left:var(--space-calendar-container-m, 8px);
  padding-right:var(--space-calendar-container-m, 8px);
}
.rows--Airgt[data-size=l]{
  padding-left:var(--space-calendar-container-l, 8px);
  padding-right:var(--space-calendar-container-l, 8px);
}

.divider--uCnjX{
  flex-shrink:0;
  height:auto;
}`,""]),a.locals={calendarWrapper:"calendarWrapper--mdzLc",dateWrapper:"dateWrapper--SDCcD",calendar:"calendar--EkjfG",calendarSizeS:"calendarSizeS--inIwR",calendarSizeM:"calendarSizeM--PcrxQ",calendarSizeL:"calendarSizeL--AVf13",dateWrapperSizeS:"dateWrapperSizeS--V_1GN",dateWrapperSizeM:"dateWrapperSizeM--OzaK5",dateWrapperSizeL:"dateWrapperSizeL--AyqfI",header:"header--di_VT",body:"body--JbBVC",rows:"rows--Airgt",divider:"divider--uCnjX"};const u=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarNavigation/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`.wrapper--of5Uj{
  display:flex;
  align-items:center;
  justify-content:space-between;
}`,""]),a.locals={wrapper:"wrapper--of5Uj"};const u=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/ColumnLabel/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`.wrapper--odw4u{
  cursor:default;
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--sys-neutral-text-disabled, #aaaebd);
}
.wrapper--odw4u[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.wrapper--odw4u[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.wrapper--odw4u[data-size=l]{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}`,""]),a.locals={wrapper:"wrapper--odw4u"};const u=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/ColumnLabels/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`.row--S2bjl{
  display:grid;
  grid-auto-columns:1fr;
  grid-auto-flow:column;
}
.row--S2bjl[data-size=s]{
  height:var(--size-calendar-container-header-lines-height-s, 32px);
}
.row--S2bjl[data-size=m]{
  height:var(--size-calendar-container-header-lines-height-m, 40px);
}
.row--S2bjl[data-size=l]{
  height:var(--size-calendar-container-header-lines-height-l, 48px);
}`,""]),a.locals={row:"row--S2bjl"};const u=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Footer/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`.divider--Pz8Uv{
  flex-shrink:0;
}

.footer--GpvXe{
  display:flex;
  flex-direction:column;
}
.footer--GpvXe[data-size=s]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.footer--GpvXe[data-size=m]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}
.footer--GpvXe[data-size=l]{
  padding-top:var(--radius-drop-list-container, 4px);
  gap:var(--radius-drop-list-container, 4px);
}

.currentWrapper--On125{
  display:flex;
  justify-content:space-between;
}
.currentWrapper--On125[data-size=s]{
  padding-top:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-bottom:var(--space-drop-list-item-s-container-vertical-padding, 4px);
  padding-left:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  padding-right:var(--space-drop-list-item-s-container-horizontal-padding, 8px);
  gap:var(--space-drop-list-item-s-container-gap, 8px);
  gap:var(--space-calendar-footer-elements-s, 8px);
}
.currentWrapper--On125[data-size=m]{
  padding-top:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-bottom:var(--space-drop-list-item-m-container-vertical-padding, 8px);
  padding-left:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  padding-right:var(--space-drop-list-item-m-container-horizontal-padding, 10px);
  gap:var(--space-drop-list-item-m-container-gap, 8px);
  gap:var(--space-calendar-footer-elements-m, 8px);
}
.currentWrapper--On125[data-size=l]{
  padding-top:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-bottom:var(--space-drop-list-item-l-container-vertical-padding, 12px);
  padding-left:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  padding-right:var(--space-drop-list-item-l-container-horizontal-padding, 12px);
  gap:var(--space-drop-list-item-l-container-gap, 8px);
  gap:var(--space-calendar-footer-elements-l, 8px);
}`,""]),a.locals={divider:"divider--Pz8Uv",footer:"footer--GpvXe",currentWrapper:"currentWrapper--On125"};const u=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Grid/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`.grid--BrLQ_{
  border-collapse:collapse;
  width:100%;
  height:100%;
  border-width:0;
}
.grid--BrLQ_ tbody, .grid--BrLQ_ td, .grid--BrLQ_ tr{
  position:relative;
  padding:0;
}

.item--b3Pxd{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}`,""]),a.locals={grid:"grid--BrLQ_",item:"item--b3Pxd"};const u=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Item/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`.item--MQRvF{
  display:flex;
}

.label--V43jw{
  padding-left:var(--space-calendar-label-decorator, 2px);
  padding-right:var(--space-calendar-label-decorator, 2px);
}

.marker--Ihc68{
  height:var(--size-calendar-marker-height, 2px);
  border-radius:var(--radius-calendar-marker, 2px);
  background-color:var(--sys-primary-accent-default, #389f74);
}

.range--Yk4vV,
.box--x9GGX{
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
}
.range--Yk4vV[data-size=s],
.box--x9GGX[data-size=s]{
  border-radius:var(--radius-calendar-item-s, 4px);
}
.range--Yk4vV[data-size=m],
.box--x9GGX[data-size=m]{
  border-radius:var(--radius-calendar-item-m, 4px);
}
.range--Yk4vV[data-size=l],
.box--x9GGX[data-size=l]{
  border-radius:var(--radius-calendar-item-l, 4px);
}

.range--Yk4vV:not([data-in-range-position=out]){
  background-color:var(--sys-primary-decor-default, #caeadb);
}
.range--Yk4vV[data-in-range-position=in]{
  border-radius:0;
}
.range--Yk4vV[data-in-range-position=start]{
  border-top-right-radius:0;
  border-bottom-right-radius:0;
}
.range--Yk4vV[data-in-range-position=end]{
  border-top-left-radius:0;
  border-bottom-left-radius:0;
}

.button--smpY7{
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
.button--smpY7[data-is-holiday]{
  color:var(--sys-red-text-light, #e7756a);
}
.button--smpY7:focus-visible .box--x9GGX{
  outline-width:var(--border-state-focus-s-border-width, 2px);
  outline-style:var(--border-state-focus-s-border-style, solid);
  outline-color:var(--border-state-focus-s-border-color, );
  outline-offset:calc(var(--border-state-focus-s-border-width, 2px) * -1);
  outline-color:var(--sys-available-complementary, #1c1c24);
}
.button--smpY7[data-is-in-current-level-period]{
  color:var(--sys-neutral-text-main, #41424e);
}
.button--smpY7[data-is-in-current-level-period][data-is-holiday]{
  color:var(--sys-red-accent-default, #cb3f3e);
}
.button--smpY7[data-is-disabled]{
  cursor:not-allowed;
  color:var(--sys-neutral-text-disabled, #aaaebd);
  background-color:var(--sys-neutral-background, #eeeff3);
}
.button--smpY7[data-is-disabled] .marker--Ihc68{
  background-color:currentColor;
}
.button--smpY7[data-is-disabled] .box--x9GGX, .button--smpY7[data-is-disabled] .range--Yk4vV{
  background-color:transparent;
}
.button--smpY7[data-is-disabled][data-is-holiday]{
  color:var(--sys-red-text-disabled, #ee9285);
}
.button--smpY7[data-is-selected]{
  color:var(--sys-primary-on-accent, #fbfffc);
}
.button--smpY7[data-is-selected][data-is-holiday]{
  color:var(--sys-primary-on-accent, #fbfffc);
}
.button--smpY7[data-is-selected] .box--x9GGX{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.button--smpY7[data-is-selected] .marker--Ihc68{
  background-color:var(--sys-primary-on-accent, #fbfffc);
}
.button--smpY7[data-is-selected]:hover, .button--smpY7[data-is-selected]:focus-visible{
  color:var(--sys-neutral-text-main, #41424e);
}
.button--smpY7[data-is-selected]:hover .marker--Ihc68, .button--smpY7[data-is-selected]:focus-visible .marker--Ihc68{
  background-color:var(--sys-primary-accent-default, #389f74);
}
.button--smpY7[data-is-selected]:hover .box--x9GGX, .button--smpY7[data-is-selected]:focus-visible .box--x9GGX{
  background-color:color-mix(in srgb, var(--sys-primary-accent-default, #389f74), var(--sys-primary-decor-default, #caeadb) calc((1 - var(--opacity-a016, 0.16)) * 100%));
}
.button--smpY7:hover:not([data-is-selected]):not([data-is-disabled]) .box--x9GGX, .button--smpY7:focus-visible:not([data-is-selected]):not([data-is-disabled]) .box--x9GGX{
  background-color:color-mix(in srgb, var(--sys-neutral-accent-default, #787b8a), var(--sys-neutral-background2-level, #ffffff) calc((1 - var(--opacity-a016, 0.16)) * 100%));
}
.button--smpY7:hover:not([data-is-selected]):not([data-is-disabled]) .range--Yk4vV + .box--x9GGX, .button--smpY7:focus-visible:not([data-is-selected]):not([data-is-disabled]) .range--Yk4vV + .box--x9GGX{
  background-color:color-mix(in srgb, var(--sys-primary-accent-default, #389f74), var(--sys-primary-decor-default, #caeadb) calc((1 - var(--opacity-a016, 0.16)) * 100%));
}
.button--smpY7[data-size=s]{
  font-family:var(--sans-body-s-font-family, SB Sans Interface);
  font-weight:var(--sans-body-s-font-weight, Regular);
  line-height:var(--sans-body-s-line-height, 16px);
  font-size:var(--sans-body-s-font-size, 12px);
  letter-spacing:var(--sans-body-s-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-s-paragraph-spacing, 6.6px);
}
.button--smpY7[data-size=m]{
  font-family:var(--sans-body-m-font-family, SB Sans Interface);
  font-weight:var(--sans-body-m-font-weight, Regular);
  line-height:var(--sans-body-m-line-height, 20px);
  font-size:var(--sans-body-m-font-size, 14px);
  letter-spacing:var(--sans-body-m-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-m-paragraph-spacing, 7.7px);
}
.button--smpY7[data-size=l]{
  font-family:var(--sans-body-l-font-family, SB Sans Interface);
  font-weight:var(--sans-body-l-font-weight, Regular);
  line-height:var(--sans-body-l-line-height, 24px);
  font-size:var(--sans-body-l-font-size, 16px);
  letter-spacing:var(--sans-body-l-letter-spacing, 0.1px);
  paragraph-spacing:var(--sans-body-l-paragraph-spacing, 8.8px);
}

.content--PPtkm{
  position:relative;
}`,""]),a.locals={item:"item--MQRvF",label:"label--V43jw",marker:"marker--Ihc68",range:"range--Yk4vV",box:"box--x9GGX",button:"button--smpY7",content:"content--PPtkm"};const u=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/PeriodPresetsList/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`.wrapper--GhCRr{
  display:flex;
  flex-direction:column;
}

.title--hExUv{
  display:flex;
  align-items:center;
}

.header--QPyfC{
  display:flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  color:var(--sys-neutral-text-main, #41424e);
}
.header--QPyfC[data-size=s]{
  padding-left:var(--space-calendar-container-s, 8px);
  padding-right:var(--space-calendar-container-s, 8px);
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--QPyfC[data-size=s] .title--hExUv{
  height:var(--size-calendar-container-header-lines-height-s, 32px);
}
.header--QPyfC[data-size=m]{
  padding-left:var(--space-calendar-container-m, 8px);
  padding-right:var(--space-calendar-container-m, 8px);
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--QPyfC[data-size=m] .title--hExUv{
  height:var(--size-calendar-container-header-lines-height-m, 40px);
}
.header--QPyfC[data-size=l]{
  padding-left:var(--space-calendar-container-l, 8px);
  padding-right:var(--space-calendar-container-l, 8px);
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--QPyfC[data-size=l] .title--hExUv{
  height:var(--size-calendar-container-header-lines-height-l, 48px);
}`,""]),a.locals={wrapper:"wrapper--GhCRr",title:"title--hExUv",header:"header--QPyfC"};const u=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.19_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom_a0113779d36d83cbfb425c197f156846/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/TimePickerBase/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`.divider--jne25{
  flex-shrink:0;
  height:auto;
}

.timePicker--gOf8d{
  overflow:hidden;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
  max-width:100%;
}
.timePicker--gOf8d[data-size=s]{
  min-width:var(--size-calendar-time-min-width-s, 120px);
  max-height:var(--size-calendar-container-min-height-s, 256px);
}
.timePicker--gOf8d[data-size=s][data-fit-to-container]{
  max-height:100%;
}
.timePicker--gOf8d[data-size=m]{
  min-width:var(--size-calendar-time-min-width-m, 144px);
  max-height:var(--size-calendar-container-min-height-m, 320px);
}
.timePicker--gOf8d[data-size=m][data-fit-to-container]{
  max-height:100%;
}
.timePicker--gOf8d[data-size=l]{
  min-width:var(--size-calendar-time-min-width-l, 168px);
  max-height:var(--size-calendar-container-min-height-l, 384px);
}
.timePicker--gOf8d[data-size=l][data-fit-to-container]{
  max-height:100%;
}

.timeListsWrapper--wBvaT{
  display:grid;
  grid-template-columns:1fr 1px 1fr;
  min-height:0;
}
.timeListsWrapper--wBvaT[data-show-seconds]{
  grid-template-columns:1fr 1px 1fr 1px 1fr;
}
.timeListsWrapper--wBvaT[data-size=s]{
  max-height:calc(100% - var(--size-calendar-container-header-lines-height-s, 32px));
}
.timeListsWrapper--wBvaT[data-size=m]{
  max-height:calc(100% - var(--size-calendar-container-header-lines-height-m, 40px));
}
.timeListsWrapper--wBvaT[data-size=l]{
  max-height:calc(100% - var(--size-calendar-container-header-lines-height-l, 48px));
}

.title--EdiBf{
  display:flex;
  align-items:center;
}

.header--FAimC{
  display:flex;
  flex-grow:0;
  flex-shrink:0;
  align-items:center;
  color:var(--sys-neutral-text-main, #41424e);
}
.header--FAimC[data-size=s]{
  padding-left:var(--space-calendar-container-s, 8px);
  padding-right:var(--space-calendar-container-s, 8px);
  font-family:var(--sans-label-m-font-family, SB Sans Interface);
  font-weight:var(--sans-label-m-font-weight, Semibold);
  line-height:var(--sans-label-m-line-height, 16px);
  font-size:var(--sans-label-m-font-size, 12px);
  letter-spacing:var(--sans-label-m-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-m-paragraph-spacing, 6.6px);
}
.header--FAimC[data-size=s] .title--EdiBf{
  height:var(--size-calendar-container-header-lines-height-s, 32px);
}
.header--FAimC[data-size=m]{
  padding-left:var(--space-calendar-container-m, 8px);
  padding-right:var(--space-calendar-container-m, 8px);
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--FAimC[data-size=m] .title--EdiBf{
  height:var(--size-calendar-container-header-lines-height-m, 40px);
}
.header--FAimC[data-size=l]{
  padding-left:var(--space-calendar-container-l, 8px);
  padding-right:var(--space-calendar-container-l, 8px);
  font-family:var(--sans-label-l-font-family, SB Sans Interface);
  font-weight:var(--sans-label-l-font-weight, Semibold);
  line-height:var(--sans-label-l-line-height, 20px);
  font-size:var(--sans-label-l-font-size, 14px);
  letter-spacing:var(--sans-label-l-letter-spacing, 0px);
  paragraph-spacing:var(--sans-label-l-paragraph-spacing, 7.7px);
}
.header--FAimC[data-size=l] .title--EdiBf{
  height:var(--size-calendar-container-header-lines-height-l, 48px);
}`,""]),a.locals={divider:"divider--jne25",timePicker:"timePicker--gOf8d",timeListsWrapper:"timeListsWrapper--wBvaT",title:"title--EdiBf",header:"header--FAimC"};const u=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+list@0.33.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/list/dist/esm/helperComponents/HiddenTabButton/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`.hiddenBtn--uoc9C{
  position:absolute;
  width:0;
  height:0;
  margin:0;
  padding:0;
  border:none;
  outline:none;
}`,""]),a.locals={hiddenBtn:"hiddenBtn--uoc9C"};const u=a}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+skeleton@0.6.10_react@18.2.0/node_modules/@snack-uikit/skeleton/dist/esm/components/Skeleton/styles.module.css":((S,b,e)=>{e.d(b,{A:()=>u});var s=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),t=e("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),l=e.n(t),a=l()(o());a.push([S.id,`.skeleton--FCFj2{
  box-sizing:border-box;
  width:100%;
  height:1em;
  background:var(--gradient-skeleton, linear-gradient(115deg, rgba(36, 36, 48, 0.0784313725) 40%, rgba(36, 36, 48, 0) 50%, rgba(36, 36, 48, 0.0784313725) 60%)) 0 0/200% 100% repeat fixed;
  animation:loading--dWuVf 2s infinite linear;
}
@keyframes loading--dWuVf{
  to{
    background-position:-200% 0;
  }
}`,""]),a.locals={skeleton:"skeleton--FCFj2",loading:"loading--dWuVf"};const u=a}),"./node_modules/.pnpm/fuzzy-search@3.2.1/node_modules/fuzzy-search/src/FuzzySearch.js":((S,b,e)=>{e.d(b,{A:()=>o});class s{static getDescendantProperty(l,a,u=[]){let h,j,f,k,p,x;if(a){if(f=a.indexOf("."),f===-1?h=a:(h=a.slice(0,f),j=a.slice(f+1)),k=l[h],k!==null&&typeof k!="undefined")if(!j&&(typeof k=="string"||typeof k=="number"))u.push(k);else if(Object.prototype.toString.call(k)==="[object Array]")for(p=0,x=k.length;p<x;p++)s.getDescendantProperty(k[p],j,u);else j&&s.getDescendantProperty(k,j,u)}else u.push(l);return u}}class o{constructor(l=[],a=[],u={}){Array.isArray(a)||(u=a,a=[]),this.haystack=l,this.keys=a,this.options=Object.assign({caseSensitive:!1,sort:!1},u)}search(l=""){if(l==="")return this.haystack;const a=[];for(let u=0;u<this.haystack.length;u++){const h=this.haystack[u];if(this.keys.length===0){const j=o.isMatch(h,l,this.options.caseSensitive);j&&a.push({item:h,score:j})}else for(let j=0;j<this.keys.length;j++){const f=s.getDescendantProperty(h,this.keys[j]);let k=!1;for(let p=0;p<f.length;p++){const x=o.isMatch(f[p],l,this.options.caseSensitive);if(x){k=!0,a.push({item:h,score:x});break}}if(k)break}}return this.options.sort&&a.sort((u,h)=>u.score-h.score),a.map(u=>u.item)}static isMatch(l,a,u){l=String(l),a=String(a),u||(l=l.toLocaleLowerCase(),a=a.toLocaleLowerCase());const h=o.nearestIndexesFor(l,a);return h?l===a?1:h.length>1?2+(h[h.length-1]-h[0]):2+h[0]:!1}static nearestIndexesFor(l,a){const u=a.split("");let h=[];return o.indexesOfFirstLetter(l,a).forEach((f,k)=>{let p=f+1;h[k]=[f];for(let x=1;x<u.length;x++){const se=u[x];if(p=l.indexOf(se,p),p===-1){h[k]=!1;break}h[k].push(p),p++}}),h=h.filter(f=>f!==!1),h.length?h.sort((f,k)=>f.length===1?f[0]-k[0]:(f=f[f.length-1]-f[0],k=k[k.length-1]-k[0],f-k))[0]:!1}static indexesOfFirstLetter(l,a){const u=a[0];return l.split("").map((h,j)=>h!==u?!1:j).filter(h=>h!==!1)}}})}]);})();
