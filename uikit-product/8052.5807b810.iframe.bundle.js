"use strict";(()=>{(self.webpackChunkuikit_product=self.webpackChunkuikit_product||[]).push([[8052],{"./node_modules/.pnpm/@snack-uikit+calendar@0.13.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/TimePicker.js":((G,g,a)=>{a.d(g,{A:()=>U});var u=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),t=a("./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js"),c=a.n(t),o=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),i=a("./node_modules/.pnpm/uncontrollable@8.0.4_react@18.2.0/node_modules/uncontrollable/lib/esm/index.js"),s=a("./node_modules/.pnpm/@snack-uikit+locale@0.15.5/node_modules/@snack-uikit/locale/dist/esm/components/LocaleProvider/LocaleProvider.js"),e=a("./node_modules/.pnpm/@snack-uikit+utils@3.10.1_react@18.2.0/node_modules/@snack-uikit/utils/dist/esm/hooks/useEventHandler.js"),d=a("./node_modules/.pnpm/@snack-uikit+calendar@0.13.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/constants.js"),n=a("./node_modules/.pnpm/@snack-uikit+calendar@0.13.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/CalendarContext/CalendarContext.js"),S=a("./node_modules/.pnpm/@snack-uikit+calendar@0.13.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/Footer/Footer.js"),p=a("./node_modules/.pnpm/@snack-uikit+calendar@0.13.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/helperComponents/TimePickerBase/TimePickerBase.js"),m=a("./node_modules/.pnpm/@snack-uikit+calendar@0.13.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/hooks.js"),v=a("./node_modules/.pnpm/@snack-uikit+calendar@0.13.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/utils.js"),R=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=a.n(R),N=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),B=a.n(N),M=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertBySelector.js"),P=a.n(M),K=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),D=a.n(K),z=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),F=a.n(z),H=a("./node_modules/.pnpm/style-loader@3.3.4_webpack@5.99.9_esbuild@0.25.12_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),w=a.n(H),C=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/styles.module.css"),f={};f.styleTagTransform=w(),f.setAttributes=D(),f.insert=P().bind(null,"head"),f.domAPI=B(),f.insertStyleElement=F();var pe=T()(C.A,f);const Y=C.A&&C.A.locals?C.A.locals:void 0,b=new Date,_=()=>{};function U({className:q,size:j=d.SK.M,fitToContainer:x=!0,value:W,defaultValue:Z,onChangeValue:J,onFocusLeave:Q,"data-test-id":A,navigationStartRef:X,showSeconds:L=!0,today:k}){const[$,ee]=(0,i.iC)(W,Z,J),I=(0,e.A)(ee),[V,ne]=(0,o.useState)(),[ae,oe]=(0,o.useState)(void 0),se=typeof k=="number"?new Date(k):k;(0,o.useEffect)(()=>{var O,h,Se;if(!(V!=null&&V[0]))return;const Ce=(O=V[0].getHours())!==null&&O!==void 0?O:0,he=(h=V[0].getMinutes())!==null&&h!==void 0?h:0,Ae=(Se=V[0].getSeconds())!==null&&Se!==void 0?Se:0;I({hours:Ce,minutes:he,seconds:Ae})},[V,I]);const te=(0,o.useCallback)(O=>{const h=O[0];ne([h,h])},[]),{dateAndTime:ie,onTimeChange:re,onDateChange:ce,onDateAndTimeChange:de,isDateFilled:le,isTimeFilled:l,isDateAndTimeFilled:ge}=(0,m.O)({showSeconds:L,value:$}),me=(0,o.useRef)(null),Ge=(0,o.useRef)(null),Ve=(0,o.useRef)({focusItem:()=>{}}),fe=(0,o.useRef)({focusItem:()=>{}}),_e=(0,o.useRef)({focusItem:()=>{}}),ye=(0,o.useMemo)(()=>(0,v.D5)(A),[A]),{lang:ue}=(0,s.Ym)(),ve=(0,o.useMemo)(()=>(0,v.JK)({localeProp:d.Xn,ctxLang:ue}),[ue]);return(0,u.jsx)("div",{className:c()(Y.timePickerWrapper,q),"data-fit-to-container":x||void 0,"data-test-id":A,children:(0,u.jsxs)(n.Y.Provider,{value:{mode:"time",locale:ve,size:j,value:V,fitToContainer:x,focus:ae,setValue:te,setFocus:oe,getTestId:ye,onFocusLeave:Q,navigationStartRef:X,showSeconds:L,dateAndTime:ie,onTimeChange:re,onDateAndTimeChange:de,isTimeFilled:l,applyButtonRef:me,currentButtonRef:Ge,hoursKeyboardNavigationRef:Ve,minutesKeyboardNavigationRef:fe,secondsKeyboardNavigationRef:_e,today:se,viewMode:"month",showHolidays:!1,viewDate:b,referenceDate:b,preselectedRange:void 0,viewShift:0,setViewMode:_,setViewShift:_,startPreselect:_,continuePreselect:_,completePreselect:_,restartPreselect:_,buildCellProps:()=>({isDisabled:!1,isHoliday:!1}),onDateChange:ce,isDateAndTimeFilled:ge,isDateFilled:le},children:[(0,u.jsx)(p.j,{showDivider:!1}),(0,u.jsx)(S.w,{})]})})}}),"./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/.pnpm/@snack-uikit+calendar@0.13.0_@snack-uikit+locale@0.15.5_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@snack-uikit/calendar/dist/esm/components/TimePicker/styles.module.css":((G,g,a)=>{a.d(g,{A:()=>s});var u=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=a.n(u),c=a("./node_modules/.pnpm/css-loader@6.11.0_webpack@5.99.9_esbuild@0.25.12_/node_modules/css-loader/dist/runtime/api.js"),o=a.n(c),i=o()(t());i.push([G.id,`.timePickerWrapper--hwJp7{
  display:flex;
  flex-direction:column;
  flex-grow:1;
  box-sizing:border-box;
  width:-moz-fit-content;
  width:fit-content;
}
.timePickerWrapper--hwJp7[data-fit-to-container]{
  min-width:100%;
  height:100%;
}`,""]),i.locals={timePickerWrapper:"timePickerWrapper--hwJp7"};const s=i}),"./node_modules/.pnpm/fuzzy-search@3.2.1/node_modules/fuzzy-search/src/FuzzySearch.js":((G,g,a)=>{a.d(g,{A:()=>t});class u{static getDescendantProperty(o,i,s=[]){let e,d,n,S,p,m;if(i){if(n=i.indexOf("."),n===-1?e=i:(e=i.slice(0,n),d=i.slice(n+1)),S=o[e],S!==null&&typeof S!="undefined")if(!d&&(typeof S=="string"||typeof S=="number"))s.push(S);else if(Object.prototype.toString.call(S)==="[object Array]")for(p=0,m=S.length;p<m;p++)u.getDescendantProperty(S[p],d,s);else d&&u.getDescendantProperty(S,d,s)}else s.push(o);return s}}class t{constructor(o=[],i=[],s={}){Array.isArray(i)||(s=i,i=[]),this.haystack=o,this.keys=i,this.options=Object.assign({caseSensitive:!1,sort:!1},s)}search(o=""){if(o==="")return this.haystack;const i=[];for(let s=0;s<this.haystack.length;s++){const e=this.haystack[s];if(this.keys.length===0){const d=t.isMatch(e,o,this.options.caseSensitive);d&&i.push({item:e,score:d})}else for(let d=0;d<this.keys.length;d++){const n=u.getDescendantProperty(e,this.keys[d]);let S=!1;for(let p=0;p<n.length;p++){const m=t.isMatch(n[p],o,this.options.caseSensitive);if(m){S=!0,i.push({item:e,score:m});break}}if(S)break}}return this.options.sort&&i.sort((s,e)=>s.score-e.score),i.map(s=>s.item)}static isMatch(o,i,s){o=String(o),i=String(i),s||(o=o.toLocaleLowerCase(),i=i.toLocaleLowerCase());const e=t.nearestIndexesFor(o,i);return e?o===i?1:e.length>1?2+(e[e.length-1]-e[0]):2+e[0]:!1}static nearestIndexesFor(o,i){const s=i.split("");let e=[];return t.indexesOfFirstLetter(o,i).forEach((n,S)=>{let p=n+1;e[S]=[n];for(let m=1;m<s.length;m++){const v=s[m];if(p=o.indexOf(v,p),p===-1){e[S]=!1;break}e[S].push(p),p++}}),e=e.filter(n=>n!==!1),e.length?e.sort((n,S)=>n.length===1?n[0]-S[0]:(n=n[n.length-1]-n[0],S=S[S.length-1]-S[0],n-S))[0]:!1}static indexesOfFirstLetter(o,i){const s=i[0];return o.split("").map((e,d)=>e!==s?!1:d).filter(e=>e!==!1)}}}),"./packages/icons/src/components/flag-icons/index.tsx":((G,g,a)=>{a.r(g),a.d(g,{AbkhaziaSVG:()=>u.A,AfghanistanSVG:()=>t.A,AlbaniaSVG:()=>c.A,AlgeriaSVG:()=>o.A,AndorraSVG:()=>i.A,AngolaSVG:()=>s.A,AntiguaAndBarbudaSVG:()=>e.A,ArgentinaSVG:()=>d.A,ArmeniaSVG:()=>n.A,AustraliaSVG:()=>S.A,AustriaSVG:()=>p.A,AzerbaijanSVG:()=>m.A,BahamasSVG:()=>v.A,BahrainSVG:()=>R.A,BangladeshSVG:()=>T.A,BarbadosSVG:()=>N.A,BelarusSVG:()=>B.A,BelgiumSVG:()=>M.A,BelizeSVG:()=>P.A,BeninSVG:()=>K.A,BhutanSVG:()=>D.A,BosniaAndHerzegovinaSVG:()=>z.A,BotswanaSVG:()=>F.A,BrazilSVG:()=>H.A,CambodiaSVG:()=>w.A,CameroonSVG:()=>C.A,CaymanIslandsSVG:()=>f.A,CentralAfricanRepublicSVG:()=>pe.A,ChadSVG:()=>Y.A,ChileSVG:()=>b.A,ColombiaSVG:()=>_.A,CongoSVG:()=>U.A,CostaRicaSVG:()=>q.A,CoteDIvoireSVG:()=>j.A,CroatiaSVG:()=>x.A,CyprusSVG:()=>W.A,DenmarkSVG:()=>Z.A,DjiboutiSVG:()=>J.A,DominicanRepublicSVG:()=>Q.A,EcuadorSVG:()=>A.A,EgyptSVG:()=>X.A,EstoniaSVG:()=>L.A,EthiopiaSVG:()=>k.A,FijiSVG:()=>$.A,FinlandSVG:()=>ee.A,FranceSVG:()=>I.A,FrenchPolynesiaSVG:()=>V.A,GeorgiaSVG:()=>ne.A,GermanySVG:()=>ae.A,GhanaSVG:()=>oe.A,GibraltarSVG:()=>se.A,GreeceSVG:()=>te.A,GuatemalaSVG:()=>ie.A,GuernseySVG:()=>re.A,GuineaSVG:()=>ce.A,GuyanaSVG:()=>de.A,HaitiSVG:()=>le.A,HondurasSVG:()=>l.A,HongKongSVG:()=>ge.A,HungarySVG:()=>me.A,IcelandSVG:()=>Ge.A,IndiaSVG:()=>Ve.A,IndonesiaSVG:()=>fe.A,IranSVG:()=>_e.A,IraqSVG:()=>ye.A,IrelandSVG:()=>ue.A,IsleOfManSVG:()=>ve.A,IsraelSVG:()=>O.A,ItalySVG:()=>h.A,JapanSVG:()=>Se.A,JordanSVG:()=>Ce.A,KazakhstanSVG:()=>he.A,KenyaSVG:()=>Ae.A,KiribatiSVG:()=>Oe.A,KosovoSVG:()=>Ee.A,KyrgyzstanSVG:()=>be.A,LatviaSVG:()=>xe.A,LebanonSVG:()=>Le.A,LesothoSVG:()=>Ie.A,LibyaSVG:()=>Re.A,LiechtensteinSVG:()=>Te.A,LithuaniaSVG:()=>Ne.A,LuxembourgSVG:()=>Be.A,MadagascarSVG:()=>Me.A,MalaysiaSVG:()=>Pe.A,MaldivesSVG:()=>Ke.A,MaliSVG:()=>De.A,MaltaSVG:()=>ze.A,MauritaniaSVG:()=>Fe.A,MauritiusSVG:()=>He.A,MayotteSVG:()=>we.A,MoldovaSVG:()=>Ye.A,MonacoSVG:()=>Ue.A,MontenegroSVG:()=>qe.A,MoroccoSVG:()=>je.A,MozambiqueSVG:()=>We.A,MyanmarSVG:()=>Ze.A,NamibiaSVG:()=>Je.A,NetherlandsSVG:()=>Qe.A,NewCaledoniaSVG:()=>Xe.A,NewZealandSVG:()=>$e.A,NicaraguaSVG:()=>en.A,NigerSVG:()=>nn.A,NigeriaSVG:()=>an.A,NorfolkIslandSVG:()=>on.A,NorthMacedoniaSVG:()=>sn.A,NorwaySVG:()=>tn.A,OmanSVG:()=>rn.A,PalestineSVG:()=>cn.A,ParaguaySVG:()=>dn.A,PeruSVG:()=>ln.A,PolandSVG:()=>Sn.A,PortugalSVG:()=>pn.A,QatarSVG:()=>un.A,RomaniaSVG:()=>gn.A,RussiaSVG:()=>mn.A,RwandaSVG:()=>Gn.A,SaintPierreAndMiquelonSVG:()=>Vn.A,SanMarinoSVG:()=>fn.A,SaoTomeAndPrincipeSVG:()=>_n.A,SaudiArabiaSVG:()=>yn.A,SenegalSVG:()=>vn.A,SerbiaSVG:()=>Cn.A,SierraLeoneSVG:()=>hn.A,SingaporeSVG:()=>An.A,SintMaartenSVG:()=>kn.A,SlovakiaSVG:()=>On.A,SomalilandSVG:()=>En.A,SouthAfricaSVG:()=>xn.A,SouthKoreaSVG:()=>Ln.A,SouthSudanSVG:()=>bn.A,SpainSVG:()=>In.A,SriLankaSVG:()=>Rn.A,SudanSVG:()=>Tn.A,SurinameSVG:()=>Nn.A,SwedenSVG:()=>Bn.A,SwitzerlandSVG:()=>Mn.A,SyriaSVG:()=>Pn.A,TaiwanSVG:()=>Kn.A,TajikistanSVG:()=>Dn.A,TanzaniaSVG:()=>zn.A,ThailandSVG:()=>Fn.A,TongaSVG:()=>Hn.A,TransnistriaSVG:()=>wn.A,TurkeySVG:()=>Yn.A,TurkmenistanSVG:()=>Un.A,TuvaluSVG:()=>qn.A,UgandaSVG:()=>jn.A,UkraineSVG:()=>Wn.A,UnitedArabEmiratesSVG:()=>Zn.A,UruguaySVG:()=>Jn.A,UzbekistanSVG:()=>Qn.A,VanuatuSVG:()=>Xn.A,VenezuelaSVG:()=>$n.A,VietnamSVG:()=>ea.A,WallisAndFutunaSVG:()=>na.A,YemenSVG:()=>aa.A,ZambiaSVG:()=>sa,ZimbabweSVG:()=>ta.A});var u=a("./packages/icons/src/components/flag-icons/Abkhazia.tsx"),t=a("./packages/icons/src/components/flag-icons/Afghanistan.tsx"),c=a("./packages/icons/src/components/flag-icons/Albania.tsx"),o=a("./packages/icons/src/components/flag-icons/Algeria.tsx"),i=a("./packages/icons/src/components/flag-icons/Andorra.tsx"),s=a("./packages/icons/src/components/flag-icons/Angola.tsx"),e=a("./packages/icons/src/components/flag-icons/AntiguaAndBarbuda.tsx"),d=a("./packages/icons/src/components/flag-icons/Argentina.tsx"),n=a("./packages/icons/src/components/flag-icons/Armenia.tsx"),S=a("./packages/icons/src/components/flag-icons/Australia.tsx"),p=a("./packages/icons/src/components/flag-icons/Austria.tsx"),m=a("./packages/icons/src/components/flag-icons/Azerbaijan.tsx"),v=a("./packages/icons/src/components/flag-icons/Bahamas.tsx"),R=a("./packages/icons/src/components/flag-icons/Bahrain.tsx"),T=a("./packages/icons/src/components/flag-icons/Bangladesh.tsx"),N=a("./packages/icons/src/components/flag-icons/Barbados.tsx"),B=a("./packages/icons/src/components/flag-icons/Belarus.tsx"),M=a("./packages/icons/src/components/flag-icons/Belgium.tsx"),P=a("./packages/icons/src/components/flag-icons/Belize.tsx"),K=a("./packages/icons/src/components/flag-icons/Benin.tsx"),D=a("./packages/icons/src/components/flag-icons/Bhutan.tsx"),z=a("./packages/icons/src/components/flag-icons/BosniaAndHerzegovina.tsx"),F=a("./packages/icons/src/components/flag-icons/Botswana.tsx"),H=a("./packages/icons/src/components/flag-icons/Brazil.tsx"),w=a("./packages/icons/src/components/flag-icons/Cambodia.tsx"),C=a("./packages/icons/src/components/flag-icons/Cameroon.tsx"),f=a("./packages/icons/src/components/flag-icons/CaymanIslands.tsx"),pe=a("./packages/icons/src/components/flag-icons/CentralAfricanRepublic.tsx"),Y=a("./packages/icons/src/components/flag-icons/Chad.tsx"),b=a("./packages/icons/src/components/flag-icons/Chile.tsx"),_=a("./packages/icons/src/components/flag-icons/Colombia.tsx"),U=a("./packages/icons/src/components/flag-icons/Congo.tsx"),q=a("./packages/icons/src/components/flag-icons/CostaRica.tsx"),j=a("./packages/icons/src/components/flag-icons/CoteDIvoire.tsx"),x=a("./packages/icons/src/components/flag-icons/Croatia.tsx"),W=a("./packages/icons/src/components/flag-icons/Cyprus.tsx"),Z=a("./packages/icons/src/components/flag-icons/Denmark.tsx"),J=a("./packages/icons/src/components/flag-icons/Djibouti.tsx"),Q=a("./packages/icons/src/components/flag-icons/DominicanRepublic.tsx"),A=a("./packages/icons/src/components/flag-icons/Ecuador.tsx"),X=a("./packages/icons/src/components/flag-icons/Egypt.tsx"),L=a("./packages/icons/src/components/flag-icons/Estonia.tsx"),k=a("./packages/icons/src/components/flag-icons/Ethiopia.tsx"),$=a("./packages/icons/src/components/flag-icons/Fiji.tsx"),ee=a("./packages/icons/src/components/flag-icons/Finland.tsx"),I=a("./packages/icons/src/components/flag-icons/France.tsx"),V=a("./packages/icons/src/components/flag-icons/FrenchPolynesia.tsx"),ne=a("./packages/icons/src/components/flag-icons/Georgia.tsx"),ae=a("./packages/icons/src/components/flag-icons/Germany.tsx"),oe=a("./packages/icons/src/components/flag-icons/Ghana.tsx"),se=a("./packages/icons/src/components/flag-icons/Gibraltar.tsx"),te=a("./packages/icons/src/components/flag-icons/Greece.tsx"),ie=a("./packages/icons/src/components/flag-icons/Guatemala.tsx"),re=a("./packages/icons/src/components/flag-icons/Guernsey.tsx"),ce=a("./packages/icons/src/components/flag-icons/Guinea.tsx"),de=a("./packages/icons/src/components/flag-icons/Guyana.tsx"),le=a("./packages/icons/src/components/flag-icons/Haiti.tsx"),l=a("./packages/icons/src/components/flag-icons/Honduras.tsx"),ge=a("./packages/icons/src/components/flag-icons/HongKong.tsx"),me=a("./packages/icons/src/components/flag-icons/Hungary.tsx"),Ge=a("./packages/icons/src/components/flag-icons/Iceland.tsx"),Ve=a("./packages/icons/src/components/flag-icons/India.tsx"),fe=a("./packages/icons/src/components/flag-icons/Indonesia.tsx"),_e=a("./packages/icons/src/components/flag-icons/Iran.tsx"),ye=a("./packages/icons/src/components/flag-icons/Iraq.tsx"),ue=a("./packages/icons/src/components/flag-icons/Ireland.tsx"),ve=a("./packages/icons/src/components/flag-icons/IsleOfMan.tsx"),O=a("./packages/icons/src/components/flag-icons/Israel.tsx"),h=a("./packages/icons/src/components/flag-icons/Italy.tsx"),Se=a("./packages/icons/src/components/flag-icons/Japan.tsx"),Ce=a("./packages/icons/src/components/flag-icons/Jordan.tsx"),he=a("./packages/icons/src/components/flag-icons/Kazakhstan.tsx"),Ae=a("./packages/icons/src/components/flag-icons/Kenya.tsx"),Oe=a("./packages/icons/src/components/flag-icons/Kiribati.tsx"),Ee=a("./packages/icons/src/components/flag-icons/Kosovo.tsx"),be=a("./packages/icons/src/components/flag-icons/Kyrgyzstan.tsx"),xe=a("./packages/icons/src/components/flag-icons/Latvia.tsx"),Le=a("./packages/icons/src/components/flag-icons/Lebanon.tsx"),Ie=a("./packages/icons/src/components/flag-icons/Lesotho.tsx"),Re=a("./packages/icons/src/components/flag-icons/Libya.tsx"),Te=a("./packages/icons/src/components/flag-icons/Liechtenstein.tsx"),Ne=a("./packages/icons/src/components/flag-icons/Lithuania.tsx"),Be=a("./packages/icons/src/components/flag-icons/Luxembourg.tsx"),Me=a("./packages/icons/src/components/flag-icons/Madagascar.tsx"),Pe=a("./packages/icons/src/components/flag-icons/Malaysia.tsx"),Ke=a("./packages/icons/src/components/flag-icons/Maldives.tsx"),De=a("./packages/icons/src/components/flag-icons/Mali.tsx"),ze=a("./packages/icons/src/components/flag-icons/Malta.tsx"),Fe=a("./packages/icons/src/components/flag-icons/Mauritania.tsx"),He=a("./packages/icons/src/components/flag-icons/Mauritius.tsx"),we=a("./packages/icons/src/components/flag-icons/Mayotte.tsx"),Ye=a("./packages/icons/src/components/flag-icons/Moldova.tsx"),Ue=a("./packages/icons/src/components/flag-icons/Monaco.tsx"),qe=a("./packages/icons/src/components/flag-icons/Montenegro.tsx"),je=a("./packages/icons/src/components/flag-icons/Morocco.tsx"),We=a("./packages/icons/src/components/flag-icons/Mozambique.tsx"),Ze=a("./packages/icons/src/components/flag-icons/Myanmar.tsx"),Je=a("./packages/icons/src/components/flag-icons/Namibia.tsx"),Qe=a("./packages/icons/src/components/flag-icons/Netherlands.tsx"),Xe=a("./packages/icons/src/components/flag-icons/NewCaledonia.tsx"),$e=a("./packages/icons/src/components/flag-icons/NewZealand.tsx"),en=a("./packages/icons/src/components/flag-icons/Nicaragua.tsx"),nn=a("./packages/icons/src/components/flag-icons/Niger.tsx"),an=a("./packages/icons/src/components/flag-icons/Nigeria.tsx"),on=a("./packages/icons/src/components/flag-icons/NorfolkIsland.tsx"),sn=a("./packages/icons/src/components/flag-icons/NorthMacedonia.tsx"),tn=a("./packages/icons/src/components/flag-icons/Norway.tsx"),rn=a("./packages/icons/src/components/flag-icons/Oman.tsx"),cn=a("./packages/icons/src/components/flag-icons/Palestine.tsx"),dn=a("./packages/icons/src/components/flag-icons/Paraguay.tsx"),ln=a("./packages/icons/src/components/flag-icons/Peru.tsx"),Sn=a("./packages/icons/src/components/flag-icons/Poland.tsx"),pn=a("./packages/icons/src/components/flag-icons/Portugal.tsx"),un=a("./packages/icons/src/components/flag-icons/Qatar.tsx"),gn=a("./packages/icons/src/components/flag-icons/Romania.tsx"),mn=a("./packages/icons/src/components/flag-icons/Russia.tsx"),Gn=a("./packages/icons/src/components/flag-icons/Rwanda.tsx"),Vn=a("./packages/icons/src/components/flag-icons/SaintPierreAndMiquelon.tsx"),fn=a("./packages/icons/src/components/flag-icons/SanMarino.tsx"),_n=a("./packages/icons/src/components/flag-icons/SaoTomeAndPrincipe.tsx"),yn=a("./packages/icons/src/components/flag-icons/SaudiArabia.tsx"),vn=a("./packages/icons/src/components/flag-icons/Senegal.tsx"),Cn=a("./packages/icons/src/components/flag-icons/Serbia.tsx"),hn=a("./packages/icons/src/components/flag-icons/SierraLeone.tsx"),An=a("./packages/icons/src/components/flag-icons/Singapore.tsx"),kn=a("./packages/icons/src/components/flag-icons/SintMaarten.tsx"),On=a("./packages/icons/src/components/flag-icons/Slovakia.tsx"),En=a("./packages/icons/src/components/flag-icons/Somaliland.tsx"),bn=a("./packages/icons/src/components/flag-icons/SouthSudan.tsx"),xn=a("./packages/icons/src/components/flag-icons/SouthAfrica.tsx"),Ln=a("./packages/icons/src/components/flag-icons/SouthKorea.tsx"),In=a("./packages/icons/src/components/flag-icons/Spain.tsx"),Rn=a("./packages/icons/src/components/flag-icons/SriLanka.tsx"),Tn=a("./packages/icons/src/components/flag-icons/Sudan.tsx"),Nn=a("./packages/icons/src/components/flag-icons/Suriname.tsx"),Bn=a("./packages/icons/src/components/flag-icons/Sweden.tsx"),Mn=a("./packages/icons/src/components/flag-icons/Switzerland.tsx"),Pn=a("./packages/icons/src/components/flag-icons/Syria.tsx"),Kn=a("./packages/icons/src/components/flag-icons/Taiwan.tsx"),Dn=a("./packages/icons/src/components/flag-icons/Tajikistan.tsx"),zn=a("./packages/icons/src/components/flag-icons/Tanzania.tsx"),Fn=a("./packages/icons/src/components/flag-icons/Thailand.tsx"),Hn=a("./packages/icons/src/components/flag-icons/Tonga.tsx"),wn=a("./packages/icons/src/components/flag-icons/Transnistria.tsx"),Yn=a("./packages/icons/src/components/flag-icons/Turkey.tsx"),Un=a("./packages/icons/src/components/flag-icons/Turkmenistan.tsx"),qn=a("./packages/icons/src/components/flag-icons/Tuvalu.tsx"),jn=a("./packages/icons/src/components/flag-icons/Uganda.tsx"),Wn=a("./packages/icons/src/components/flag-icons/Ukraine.tsx"),Zn=a("./packages/icons/src/components/flag-icons/UnitedArabEmirates.tsx"),Jn=a("./packages/icons/src/components/flag-icons/Uruguay.tsx"),Qn=a("./packages/icons/src/components/flag-icons/Uzbekistan.tsx"),Xn=a("./packages/icons/src/components/flag-icons/Vanuatu.tsx"),$n=a("./packages/icons/src/components/flag-icons/Venezuela.tsx"),ea=a("./packages/icons/src/components/flag-icons/Vietnam.tsx"),na=a("./packages/icons/src/components/flag-icons/WallisAndFutuna.tsx"),aa=a("./packages/icons/src/components/flag-icons/Yemen.tsx"),y=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),oa=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),sa=oa.forwardRef(({size:r,...E},ia)=>{E.width=void 0,E.height=void 0;const ra="icon-zambia",ke={};return typeof r=="number"&&(ke.width=r+"px",ke.height=r+"px",E.style||(E.style={}),E.style.width=r+"px",E.style.height=r+"px"),(0,y.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:18,fill:"none",viewBox:"0 0 24 18","data-test-id":ra,ref:ia,...E,children:[(0,y.jsxs)("g",{clipPath:"url(#Zambia_svg__a)",children:[(0,y.jsx)("path",{fill:"#198A00",d:"M0 0h24v6h-9v12H0z"}),(0,y.jsx)("path",{fill:"#EF7D00",d:"M19.09 4.33c.05.03.13.06.13.06.08-.04.23-.02.23-.03.02-.01.03-.04.03-.04l-.01-.15c-.03.04-.05.06-.07.05.05-.24-.02-.38-.2-.7-.01.19-.01.36-.03.48.03.09.02.09.03.18-.03-.01-.07-.06-.11-.1 0 0-.02.21 0 .25m.71-.45c.08.12.15.1.17.14-.08.05-.17-.08-.23-.09-.05.03.17.31.17.33 0 .01-.12-.01-.22-.08 0 .06.01.1.01.1 0 .01.01.03.13.04.11.01.12.15.09.11-.02-.04-.11-.06-.11-.06s-.07 0-.05.04c.13.05.1.16.08.23-.02.06-.1.06-.1.06s.06-.07 0-.09c-.11.02-.12-.11-.12-.11s-.02-.04-.07.01c.05.21-.08.23-.08.23s-.02.06.02.1c-.12 0-.08-.11-.1-.13-.01 0-.05-.05.01-.19-.09.14-.18.09-.18.09s-.01.04.01.1c-.07-.05-.07-.07-.07-.17-.01-.02-.01-.03-.01-.05-.01.02-.03.03-.05.04.11.15-.02.24-.02.24s-.01.07.04.11c-.1 0-.1-.09-.1-.09s-.09-.04-.1-.2c.01.17-.14.19-.14.19s-.03.04.01.08c-.11-.02-.08-.13-.08-.13s-.08-.05.06-.19c-.16.11-.26.08-.29.08 0 0-.01.02-.05.08-.01-.09.01-.1.01-.1s.02-.19.21-.18c.19 0 .22-.14.23-.21-.02.02-.04.02-.05.02-.03-.01.07-.37.04-.48.03.31-.18.44-.17.4.03-.1.03-.19.05-.28.03-.08.06-.15.07-.2-.03.05-.09.13-.1.13-.02.01.04-.13.01-.11-.05.04-.39.09-.49-.07 0-.07.33-.22.3-.21-.05.03-.68.27-.66.13-.04-.03.36-.25.35-.25-.01.01-.34.17-.35.18-.02 0-.28.08-.33.01-.01-.02.76-.4.76-.45-.05.07-.6.34-.62.36-.02.01-.34.1-.44.02-.02-.02.43-.23.41-.28-.17.15-.31.2-.44.22-.07.01-.15.01-.2 0-.11-.02-.19-.09-.19-.1s.33-.07.4-.16c-.67.21-.9.02-.89-.01.01-.01.16-.02.17-.02.01-.01.42-.14.43-.15s-.43.13-.65.12c-.26-.02-.38-.11-.37-.13.01-.01.16-.03.19-.03s.47-.13.48-.14c.03-.03-.3.08-.36.08-.48.03-.54-.1-.54-.12.01-.01.17-.03.19-.02.03 0 .33-.06.33-.06.02-.01-.28.06-.31.05-.83-.18-.97-.48-.97-.56 0-.06.08.06.21.12.29.11.88.32.87.32-.32-.11-.68-.27-.77-.31-.18-.07-.32-.31-.28-.33.04-.03.26.19.43.26.04.01.95.36.95.35.01-.02-.79-.28-.86-.32-.39-.15-.45-.51-.42-.53.05-.02.19.17.29.22.07.04.19.11 1.04.46.01-.01-.55-.24-.62-.28-.15-.1-.27-.24-.35-.36-.05-.08-.05-.16-.02-.16.05 0 .2.13.4.19.27.11.57.24.89.41.02-.01-.35-.33-.28-.35.05-.04.57.28 1.08.41.19.03.71.1.9.18a.2.2 0 0 1-.06-.04c.15-.68.76-.59.91-.44.46.05.29.24.2.27.04-.15-.15-.1-.22-.15.06.02.11.04.17.06-.05.02-.07.01-.13.02-.09.01-.24.09-.1.34 0 0 .19-.1.91-.05.08.01.49-.13.62-.17.21-.04.88-.17 1.06-.3.12-.01-.03.22-.2.27 0 0 1.19-.46 1.3-.55.05.05-.44.6-1.4.8.87-.19 1.61-.78 1.76-.76.04.01.03.57-1.95 1.07 1.37-.33 2.16-.94 2.16-.88 0 .04-.14.47-1.34.84.33-.07 1.25-.58 1.23-.48.03.04-.88 1.11-2.52.77 1.31.31 2.16-.45 2.28-.43.03 0-.24.66-1.89.7.79-.08.56-.01.56-.01s-.47.34-1.03.11c.44.11.49.12.5.15-.03.05-.4.11-.75-.06.24.09.54.13.54.17-.03.04-.2.07-.29.05-.08-.02-.22-.09-.4-.26.16.18.58.38.51.45-.18.08-.54-.12-.69-.21.21.24.4.23.33.32-.17.07-.43-.14-.5-.19 0 .02.18.12.13.17-.16 0-.32-.16-.32-.17 0 .03.02.06.03.09"}),(0,y.jsx)("path",{fill:"#EF7D00",fillRule:"evenodd",d:"M21 6h3v12h-3z",clipRule:"evenodd"}),(0,y.jsx)("path",{fill:"#DE2010",fillRule:"evenodd",d:"M15 6h3v12h-3z",clipRule:"evenodd"})]}),(0,y.jsx)("rect",{width:23.5,height:17.5,x:.25,y:.25,stroke:"#DDE0EA",strokeWidth:.5,rx:1.75,style:{fillOpacity:0}}),(0,y.jsx)("defs",{children:(0,y.jsx)("clipPath",{id:"Zambia_svg__a",children:(0,y.jsx)("rect",{width:24,height:18,fill:"#fff",rx:2})})})]})});try{Zambia.displayName="Zambia",Zambia.__docgenInfo={description:"",displayName:"Zambia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/Zambia.tsx#Zambia"]={docgenInfo:Zambia.__docgenInfo,name:"Zambia",path:"packages/icons/src/components/flag-icons/Zambia.tsx#Zambia"})}catch(r){}var ta=a("./packages/icons/src/components/flag-icons/Zimbabwe.tsx");try{SvgAbkhazia.displayName="SvgAbkhazia",SvgAbkhazia.__docgenInfo={description:"",displayName:"SvgAbkhazia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgAbkhazia"]={docgenInfo:SvgAbkhazia.__docgenInfo,name:"SvgAbkhazia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgAbkhazia"})}catch(r){}try{SvgAfghanistan.displayName="SvgAfghanistan",SvgAfghanistan.__docgenInfo={description:"",displayName:"SvgAfghanistan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgAfghanistan"]={docgenInfo:SvgAfghanistan.__docgenInfo,name:"SvgAfghanistan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgAfghanistan"})}catch(r){}try{SvgAlbania.displayName="SvgAlbania",SvgAlbania.__docgenInfo={description:"",displayName:"SvgAlbania",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgAlbania"]={docgenInfo:SvgAlbania.__docgenInfo,name:"SvgAlbania",path:"packages/icons/src/components/flag-icons/index.tsx#SvgAlbania"})}catch(r){}try{SvgAlgeria.displayName="SvgAlgeria",SvgAlgeria.__docgenInfo={description:"",displayName:"SvgAlgeria",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgAlgeria"]={docgenInfo:SvgAlgeria.__docgenInfo,name:"SvgAlgeria",path:"packages/icons/src/components/flag-icons/index.tsx#SvgAlgeria"})}catch(r){}try{SvgAndorra.displayName="SvgAndorra",SvgAndorra.__docgenInfo={description:"",displayName:"SvgAndorra",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgAndorra"]={docgenInfo:SvgAndorra.__docgenInfo,name:"SvgAndorra",path:"packages/icons/src/components/flag-icons/index.tsx#SvgAndorra"})}catch(r){}try{SvgAngola.displayName="SvgAngola",SvgAngola.__docgenInfo={description:"",displayName:"SvgAngola",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgAngola"]={docgenInfo:SvgAngola.__docgenInfo,name:"SvgAngola",path:"packages/icons/src/components/flag-icons/index.tsx#SvgAngola"})}catch(r){}try{SvgAntiguaAndBarbuda.displayName="SvgAntiguaAndBarbuda",SvgAntiguaAndBarbuda.__docgenInfo={description:"",displayName:"SvgAntiguaAndBarbuda",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgAntiguaAndBarbuda"]={docgenInfo:SvgAntiguaAndBarbuda.__docgenInfo,name:"SvgAntiguaAndBarbuda",path:"packages/icons/src/components/flag-icons/index.tsx#SvgAntiguaAndBarbuda"})}catch(r){}try{SvgArgentina.displayName="SvgArgentina",SvgArgentina.__docgenInfo={description:"",displayName:"SvgArgentina",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgArgentina"]={docgenInfo:SvgArgentina.__docgenInfo,name:"SvgArgentina",path:"packages/icons/src/components/flag-icons/index.tsx#SvgArgentina"})}catch(r){}try{SvgArmenia.displayName="SvgArmenia",SvgArmenia.__docgenInfo={description:"",displayName:"SvgArmenia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgArmenia"]={docgenInfo:SvgArmenia.__docgenInfo,name:"SvgArmenia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgArmenia"})}catch(r){}try{SvgAustralia.displayName="SvgAustralia",SvgAustralia.__docgenInfo={description:"",displayName:"SvgAustralia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgAustralia"]={docgenInfo:SvgAustralia.__docgenInfo,name:"SvgAustralia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgAustralia"})}catch(r){}try{SvgAustria.displayName="SvgAustria",SvgAustria.__docgenInfo={description:"",displayName:"SvgAustria",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgAustria"]={docgenInfo:SvgAustria.__docgenInfo,name:"SvgAustria",path:"packages/icons/src/components/flag-icons/index.tsx#SvgAustria"})}catch(r){}try{SvgAzerbaijan.displayName="SvgAzerbaijan",SvgAzerbaijan.__docgenInfo={description:"",displayName:"SvgAzerbaijan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgAzerbaijan"]={docgenInfo:SvgAzerbaijan.__docgenInfo,name:"SvgAzerbaijan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgAzerbaijan"})}catch(r){}try{SvgBahamas.displayName="SvgBahamas",SvgBahamas.__docgenInfo={description:"",displayName:"SvgBahamas",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgBahamas"]={docgenInfo:SvgBahamas.__docgenInfo,name:"SvgBahamas",path:"packages/icons/src/components/flag-icons/index.tsx#SvgBahamas"})}catch(r){}try{SvgBahrain.displayName="SvgBahrain",SvgBahrain.__docgenInfo={description:"",displayName:"SvgBahrain",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgBahrain"]={docgenInfo:SvgBahrain.__docgenInfo,name:"SvgBahrain",path:"packages/icons/src/components/flag-icons/index.tsx#SvgBahrain"})}catch(r){}try{SvgBangladesh.displayName="SvgBangladesh",SvgBangladesh.__docgenInfo={description:"",displayName:"SvgBangladesh",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgBangladesh"]={docgenInfo:SvgBangladesh.__docgenInfo,name:"SvgBangladesh",path:"packages/icons/src/components/flag-icons/index.tsx#SvgBangladesh"})}catch(r){}try{SvgBarbados.displayName="SvgBarbados",SvgBarbados.__docgenInfo={description:"",displayName:"SvgBarbados",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgBarbados"]={docgenInfo:SvgBarbados.__docgenInfo,name:"SvgBarbados",path:"packages/icons/src/components/flag-icons/index.tsx#SvgBarbados"})}catch(r){}try{SvgBelarus.displayName="SvgBelarus",SvgBelarus.__docgenInfo={description:"",displayName:"SvgBelarus",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgBelarus"]={docgenInfo:SvgBelarus.__docgenInfo,name:"SvgBelarus",path:"packages/icons/src/components/flag-icons/index.tsx#SvgBelarus"})}catch(r){}try{SvgBelgium.displayName="SvgBelgium",SvgBelgium.__docgenInfo={description:"",displayName:"SvgBelgium",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgBelgium"]={docgenInfo:SvgBelgium.__docgenInfo,name:"SvgBelgium",path:"packages/icons/src/components/flag-icons/index.tsx#SvgBelgium"})}catch(r){}try{SvgBelize.displayName="SvgBelize",SvgBelize.__docgenInfo={description:"",displayName:"SvgBelize",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgBelize"]={docgenInfo:SvgBelize.__docgenInfo,name:"SvgBelize",path:"packages/icons/src/components/flag-icons/index.tsx#SvgBelize"})}catch(r){}try{SvgBenin.displayName="SvgBenin",SvgBenin.__docgenInfo={description:"",displayName:"SvgBenin",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgBenin"]={docgenInfo:SvgBenin.__docgenInfo,name:"SvgBenin",path:"packages/icons/src/components/flag-icons/index.tsx#SvgBenin"})}catch(r){}try{SvgBhutan.displayName="SvgBhutan",SvgBhutan.__docgenInfo={description:"",displayName:"SvgBhutan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgBhutan"]={docgenInfo:SvgBhutan.__docgenInfo,name:"SvgBhutan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgBhutan"})}catch(r){}try{SvgBosniaAndHerzegovina.displayName="SvgBosniaAndHerzegovina",SvgBosniaAndHerzegovina.__docgenInfo={description:"",displayName:"SvgBosniaAndHerzegovina",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgBosniaAndHerzegovina"]={docgenInfo:SvgBosniaAndHerzegovina.__docgenInfo,name:"SvgBosniaAndHerzegovina",path:"packages/icons/src/components/flag-icons/index.tsx#SvgBosniaAndHerzegovina"})}catch(r){}try{SvgBotswana.displayName="SvgBotswana",SvgBotswana.__docgenInfo={description:"",displayName:"SvgBotswana",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgBotswana"]={docgenInfo:SvgBotswana.__docgenInfo,name:"SvgBotswana",path:"packages/icons/src/components/flag-icons/index.tsx#SvgBotswana"})}catch(r){}try{SvgBrazil.displayName="SvgBrazil",SvgBrazil.__docgenInfo={description:"",displayName:"SvgBrazil",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgBrazil"]={docgenInfo:SvgBrazil.__docgenInfo,name:"SvgBrazil",path:"packages/icons/src/components/flag-icons/index.tsx#SvgBrazil"})}catch(r){}try{SvgCambodia.displayName="SvgCambodia",SvgCambodia.__docgenInfo={description:"",displayName:"SvgCambodia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgCambodia"]={docgenInfo:SvgCambodia.__docgenInfo,name:"SvgCambodia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgCambodia"})}catch(r){}try{SvgCameroon.displayName="SvgCameroon",SvgCameroon.__docgenInfo={description:"",displayName:"SvgCameroon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgCameroon"]={docgenInfo:SvgCameroon.__docgenInfo,name:"SvgCameroon",path:"packages/icons/src/components/flag-icons/index.tsx#SvgCameroon"})}catch(r){}try{SvgCaymanIslands.displayName="SvgCaymanIslands",SvgCaymanIslands.__docgenInfo={description:"",displayName:"SvgCaymanIslands",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgCaymanIslands"]={docgenInfo:SvgCaymanIslands.__docgenInfo,name:"SvgCaymanIslands",path:"packages/icons/src/components/flag-icons/index.tsx#SvgCaymanIslands"})}catch(r){}try{SvgCentralAfricanRepublic.displayName="SvgCentralAfricanRepublic",SvgCentralAfricanRepublic.__docgenInfo={description:"",displayName:"SvgCentralAfricanRepublic",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgCentralAfricanRepublic"]={docgenInfo:SvgCentralAfricanRepublic.__docgenInfo,name:"SvgCentralAfricanRepublic",path:"packages/icons/src/components/flag-icons/index.tsx#SvgCentralAfricanRepublic"})}catch(r){}try{SvgChad.displayName="SvgChad",SvgChad.__docgenInfo={description:"",displayName:"SvgChad",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgChad"]={docgenInfo:SvgChad.__docgenInfo,name:"SvgChad",path:"packages/icons/src/components/flag-icons/index.tsx#SvgChad"})}catch(r){}try{SvgChile.displayName="SvgChile",SvgChile.__docgenInfo={description:"",displayName:"SvgChile",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgChile"]={docgenInfo:SvgChile.__docgenInfo,name:"SvgChile",path:"packages/icons/src/components/flag-icons/index.tsx#SvgChile"})}catch(r){}try{SvgColombia.displayName="SvgColombia",SvgColombia.__docgenInfo={description:"",displayName:"SvgColombia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgColombia"]={docgenInfo:SvgColombia.__docgenInfo,name:"SvgColombia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgColombia"})}catch(r){}try{SvgCongo.displayName="SvgCongo",SvgCongo.__docgenInfo={description:"",displayName:"SvgCongo",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgCongo"]={docgenInfo:SvgCongo.__docgenInfo,name:"SvgCongo",path:"packages/icons/src/components/flag-icons/index.tsx#SvgCongo"})}catch(r){}try{SvgCostaRica.displayName="SvgCostaRica",SvgCostaRica.__docgenInfo={description:"",displayName:"SvgCostaRica",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgCostaRica"]={docgenInfo:SvgCostaRica.__docgenInfo,name:"SvgCostaRica",path:"packages/icons/src/components/flag-icons/index.tsx#SvgCostaRica"})}catch(r){}try{SvgCoteDIvoire.displayName="SvgCoteDIvoire",SvgCoteDIvoire.__docgenInfo={description:"",displayName:"SvgCoteDIvoire",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgCoteDIvoire"]={docgenInfo:SvgCoteDIvoire.__docgenInfo,name:"SvgCoteDIvoire",path:"packages/icons/src/components/flag-icons/index.tsx#SvgCoteDIvoire"})}catch(r){}try{SvgCroatia.displayName="SvgCroatia",SvgCroatia.__docgenInfo={description:"",displayName:"SvgCroatia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgCroatia"]={docgenInfo:SvgCroatia.__docgenInfo,name:"SvgCroatia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgCroatia"})}catch(r){}try{SvgCyprus.displayName="SvgCyprus",SvgCyprus.__docgenInfo={description:"",displayName:"SvgCyprus",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgCyprus"]={docgenInfo:SvgCyprus.__docgenInfo,name:"SvgCyprus",path:"packages/icons/src/components/flag-icons/index.tsx#SvgCyprus"})}catch(r){}try{SvgDenmark.displayName="SvgDenmark",SvgDenmark.__docgenInfo={description:"",displayName:"SvgDenmark",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgDenmark"]={docgenInfo:SvgDenmark.__docgenInfo,name:"SvgDenmark",path:"packages/icons/src/components/flag-icons/index.tsx#SvgDenmark"})}catch(r){}try{SvgDjibouti.displayName="SvgDjibouti",SvgDjibouti.__docgenInfo={description:"",displayName:"SvgDjibouti",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgDjibouti"]={docgenInfo:SvgDjibouti.__docgenInfo,name:"SvgDjibouti",path:"packages/icons/src/components/flag-icons/index.tsx#SvgDjibouti"})}catch(r){}try{SvgDominicanRepublic.displayName="SvgDominicanRepublic",SvgDominicanRepublic.__docgenInfo={description:"",displayName:"SvgDominicanRepublic",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgDominicanRepublic"]={docgenInfo:SvgDominicanRepublic.__docgenInfo,name:"SvgDominicanRepublic",path:"packages/icons/src/components/flag-icons/index.tsx#SvgDominicanRepublic"})}catch(r){}try{SvgEcuador.displayName="SvgEcuador",SvgEcuador.__docgenInfo={description:"",displayName:"SvgEcuador",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgEcuador"]={docgenInfo:SvgEcuador.__docgenInfo,name:"SvgEcuador",path:"packages/icons/src/components/flag-icons/index.tsx#SvgEcuador"})}catch(r){}try{SvgEgypt.displayName="SvgEgypt",SvgEgypt.__docgenInfo={description:"",displayName:"SvgEgypt",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgEgypt"]={docgenInfo:SvgEgypt.__docgenInfo,name:"SvgEgypt",path:"packages/icons/src/components/flag-icons/index.tsx#SvgEgypt"})}catch(r){}try{SvgEstonia.displayName="SvgEstonia",SvgEstonia.__docgenInfo={description:"",displayName:"SvgEstonia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgEstonia"]={docgenInfo:SvgEstonia.__docgenInfo,name:"SvgEstonia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgEstonia"})}catch(r){}try{SvgEthiopia.displayName="SvgEthiopia",SvgEthiopia.__docgenInfo={description:"",displayName:"SvgEthiopia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgEthiopia"]={docgenInfo:SvgEthiopia.__docgenInfo,name:"SvgEthiopia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgEthiopia"})}catch(r){}try{SvgFiji.displayName="SvgFiji",SvgFiji.__docgenInfo={description:"",displayName:"SvgFiji",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgFiji"]={docgenInfo:SvgFiji.__docgenInfo,name:"SvgFiji",path:"packages/icons/src/components/flag-icons/index.tsx#SvgFiji"})}catch(r){}try{SvgFinland.displayName="SvgFinland",SvgFinland.__docgenInfo={description:"",displayName:"SvgFinland",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgFinland"]={docgenInfo:SvgFinland.__docgenInfo,name:"SvgFinland",path:"packages/icons/src/components/flag-icons/index.tsx#SvgFinland"})}catch(r){}try{SvgFrance.displayName="SvgFrance",SvgFrance.__docgenInfo={description:"",displayName:"SvgFrance",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgFrance"]={docgenInfo:SvgFrance.__docgenInfo,name:"SvgFrance",path:"packages/icons/src/components/flag-icons/index.tsx#SvgFrance"})}catch(r){}try{SvgFrenchPolynesia.displayName="SvgFrenchPolynesia",SvgFrenchPolynesia.__docgenInfo={description:"",displayName:"SvgFrenchPolynesia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgFrenchPolynesia"]={docgenInfo:SvgFrenchPolynesia.__docgenInfo,name:"SvgFrenchPolynesia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgFrenchPolynesia"})}catch(r){}try{SvgGeorgia.displayName="SvgGeorgia",SvgGeorgia.__docgenInfo={description:"",displayName:"SvgGeorgia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgGeorgia"]={docgenInfo:SvgGeorgia.__docgenInfo,name:"SvgGeorgia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgGeorgia"})}catch(r){}try{SvgGermany.displayName="SvgGermany",SvgGermany.__docgenInfo={description:"",displayName:"SvgGermany",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgGermany"]={docgenInfo:SvgGermany.__docgenInfo,name:"SvgGermany",path:"packages/icons/src/components/flag-icons/index.tsx#SvgGermany"})}catch(r){}try{SvgGhana.displayName="SvgGhana",SvgGhana.__docgenInfo={description:"",displayName:"SvgGhana",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgGhana"]={docgenInfo:SvgGhana.__docgenInfo,name:"SvgGhana",path:"packages/icons/src/components/flag-icons/index.tsx#SvgGhana"})}catch(r){}try{SvgGibraltar.displayName="SvgGibraltar",SvgGibraltar.__docgenInfo={description:"",displayName:"SvgGibraltar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgGibraltar"]={docgenInfo:SvgGibraltar.__docgenInfo,name:"SvgGibraltar",path:"packages/icons/src/components/flag-icons/index.tsx#SvgGibraltar"})}catch(r){}try{SvgGreece.displayName="SvgGreece",SvgGreece.__docgenInfo={description:"",displayName:"SvgGreece",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgGreece"]={docgenInfo:SvgGreece.__docgenInfo,name:"SvgGreece",path:"packages/icons/src/components/flag-icons/index.tsx#SvgGreece"})}catch(r){}try{SvgGuatemala.displayName="SvgGuatemala",SvgGuatemala.__docgenInfo={description:"",displayName:"SvgGuatemala",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgGuatemala"]={docgenInfo:SvgGuatemala.__docgenInfo,name:"SvgGuatemala",path:"packages/icons/src/components/flag-icons/index.tsx#SvgGuatemala"})}catch(r){}try{SvgGuernsey.displayName="SvgGuernsey",SvgGuernsey.__docgenInfo={description:"",displayName:"SvgGuernsey",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgGuernsey"]={docgenInfo:SvgGuernsey.__docgenInfo,name:"SvgGuernsey",path:"packages/icons/src/components/flag-icons/index.tsx#SvgGuernsey"})}catch(r){}try{SvgGuinea.displayName="SvgGuinea",SvgGuinea.__docgenInfo={description:"",displayName:"SvgGuinea",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgGuinea"]={docgenInfo:SvgGuinea.__docgenInfo,name:"SvgGuinea",path:"packages/icons/src/components/flag-icons/index.tsx#SvgGuinea"})}catch(r){}try{SvgGuyana.displayName="SvgGuyana",SvgGuyana.__docgenInfo={description:"",displayName:"SvgGuyana",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgGuyana"]={docgenInfo:SvgGuyana.__docgenInfo,name:"SvgGuyana",path:"packages/icons/src/components/flag-icons/index.tsx#SvgGuyana"})}catch(r){}try{SvgHaiti.displayName="SvgHaiti",SvgHaiti.__docgenInfo={description:"",displayName:"SvgHaiti",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgHaiti"]={docgenInfo:SvgHaiti.__docgenInfo,name:"SvgHaiti",path:"packages/icons/src/components/flag-icons/index.tsx#SvgHaiti"})}catch(r){}try{SvgHonduras.displayName="SvgHonduras",SvgHonduras.__docgenInfo={description:"",displayName:"SvgHonduras",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgHonduras"]={docgenInfo:SvgHonduras.__docgenInfo,name:"SvgHonduras",path:"packages/icons/src/components/flag-icons/index.tsx#SvgHonduras"})}catch(r){}try{SvgHongKong.displayName="SvgHongKong",SvgHongKong.__docgenInfo={description:"",displayName:"SvgHongKong",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgHongKong"]={docgenInfo:SvgHongKong.__docgenInfo,name:"SvgHongKong",path:"packages/icons/src/components/flag-icons/index.tsx#SvgHongKong"})}catch(r){}try{SvgHungary.displayName="SvgHungary",SvgHungary.__docgenInfo={description:"",displayName:"SvgHungary",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgHungary"]={docgenInfo:SvgHungary.__docgenInfo,name:"SvgHungary",path:"packages/icons/src/components/flag-icons/index.tsx#SvgHungary"})}catch(r){}try{SvgIceland.displayName="SvgIceland",SvgIceland.__docgenInfo={description:"",displayName:"SvgIceland",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgIceland"]={docgenInfo:SvgIceland.__docgenInfo,name:"SvgIceland",path:"packages/icons/src/components/flag-icons/index.tsx#SvgIceland"})}catch(r){}try{SvgIndia.displayName="SvgIndia",SvgIndia.__docgenInfo={description:"",displayName:"SvgIndia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgIndia"]={docgenInfo:SvgIndia.__docgenInfo,name:"SvgIndia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgIndia"})}catch(r){}try{SvgIndonesia.displayName="SvgIndonesia",SvgIndonesia.__docgenInfo={description:"",displayName:"SvgIndonesia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgIndonesia"]={docgenInfo:SvgIndonesia.__docgenInfo,name:"SvgIndonesia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgIndonesia"})}catch(r){}try{SvgIran.displayName="SvgIran",SvgIran.__docgenInfo={description:"",displayName:"SvgIran",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgIran"]={docgenInfo:SvgIran.__docgenInfo,name:"SvgIran",path:"packages/icons/src/components/flag-icons/index.tsx#SvgIran"})}catch(r){}try{SvgIraq.displayName="SvgIraq",SvgIraq.__docgenInfo={description:"",displayName:"SvgIraq",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgIraq"]={docgenInfo:SvgIraq.__docgenInfo,name:"SvgIraq",path:"packages/icons/src/components/flag-icons/index.tsx#SvgIraq"})}catch(r){}try{SvgIreland.displayName="SvgIreland",SvgIreland.__docgenInfo={description:"",displayName:"SvgIreland",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgIreland"]={docgenInfo:SvgIreland.__docgenInfo,name:"SvgIreland",path:"packages/icons/src/components/flag-icons/index.tsx#SvgIreland"})}catch(r){}try{SvgIsleOfMan.displayName="SvgIsleOfMan",SvgIsleOfMan.__docgenInfo={description:"",displayName:"SvgIsleOfMan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgIsleOfMan"]={docgenInfo:SvgIsleOfMan.__docgenInfo,name:"SvgIsleOfMan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgIsleOfMan"})}catch(r){}try{SvgIsrael.displayName="SvgIsrael",SvgIsrael.__docgenInfo={description:"",displayName:"SvgIsrael",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgIsrael"]={docgenInfo:SvgIsrael.__docgenInfo,name:"SvgIsrael",path:"packages/icons/src/components/flag-icons/index.tsx#SvgIsrael"})}catch(r){}try{SvgItaly.displayName="SvgItaly",SvgItaly.__docgenInfo={description:"",displayName:"SvgItaly",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgItaly"]={docgenInfo:SvgItaly.__docgenInfo,name:"SvgItaly",path:"packages/icons/src/components/flag-icons/index.tsx#SvgItaly"})}catch(r){}try{SvgJapan.displayName="SvgJapan",SvgJapan.__docgenInfo={description:"",displayName:"SvgJapan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgJapan"]={docgenInfo:SvgJapan.__docgenInfo,name:"SvgJapan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgJapan"})}catch(r){}try{SvgJordan.displayName="SvgJordan",SvgJordan.__docgenInfo={description:"",displayName:"SvgJordan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgJordan"]={docgenInfo:SvgJordan.__docgenInfo,name:"SvgJordan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgJordan"})}catch(r){}try{SvgKazakhstan.displayName="SvgKazakhstan",SvgKazakhstan.__docgenInfo={description:"",displayName:"SvgKazakhstan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgKazakhstan"]={docgenInfo:SvgKazakhstan.__docgenInfo,name:"SvgKazakhstan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgKazakhstan"})}catch(r){}try{SvgKenya.displayName="SvgKenya",SvgKenya.__docgenInfo={description:"",displayName:"SvgKenya",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgKenya"]={docgenInfo:SvgKenya.__docgenInfo,name:"SvgKenya",path:"packages/icons/src/components/flag-icons/index.tsx#SvgKenya"})}catch(r){}try{SvgKiribati.displayName="SvgKiribati",SvgKiribati.__docgenInfo={description:"",displayName:"SvgKiribati",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgKiribati"]={docgenInfo:SvgKiribati.__docgenInfo,name:"SvgKiribati",path:"packages/icons/src/components/flag-icons/index.tsx#SvgKiribati"})}catch(r){}try{SvgKosovo.displayName="SvgKosovo",SvgKosovo.__docgenInfo={description:"",displayName:"SvgKosovo",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgKosovo"]={docgenInfo:SvgKosovo.__docgenInfo,name:"SvgKosovo",path:"packages/icons/src/components/flag-icons/index.tsx#SvgKosovo"})}catch(r){}try{SvgKyrgyzstan.displayName="SvgKyrgyzstan",SvgKyrgyzstan.__docgenInfo={description:"",displayName:"SvgKyrgyzstan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgKyrgyzstan"]={docgenInfo:SvgKyrgyzstan.__docgenInfo,name:"SvgKyrgyzstan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgKyrgyzstan"})}catch(r){}try{SvgLatvia.displayName="SvgLatvia",SvgLatvia.__docgenInfo={description:"",displayName:"SvgLatvia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgLatvia"]={docgenInfo:SvgLatvia.__docgenInfo,name:"SvgLatvia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgLatvia"})}catch(r){}try{SvgLebanon.displayName="SvgLebanon",SvgLebanon.__docgenInfo={description:"",displayName:"SvgLebanon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgLebanon"]={docgenInfo:SvgLebanon.__docgenInfo,name:"SvgLebanon",path:"packages/icons/src/components/flag-icons/index.tsx#SvgLebanon"})}catch(r){}try{SvgLesotho.displayName="SvgLesotho",SvgLesotho.__docgenInfo={description:"",displayName:"SvgLesotho",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgLesotho"]={docgenInfo:SvgLesotho.__docgenInfo,name:"SvgLesotho",path:"packages/icons/src/components/flag-icons/index.tsx#SvgLesotho"})}catch(r){}try{SvgLibya.displayName="SvgLibya",SvgLibya.__docgenInfo={description:"",displayName:"SvgLibya",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgLibya"]={docgenInfo:SvgLibya.__docgenInfo,name:"SvgLibya",path:"packages/icons/src/components/flag-icons/index.tsx#SvgLibya"})}catch(r){}try{SvgLiechtenstein.displayName="SvgLiechtenstein",SvgLiechtenstein.__docgenInfo={description:"",displayName:"SvgLiechtenstein",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgLiechtenstein"]={docgenInfo:SvgLiechtenstein.__docgenInfo,name:"SvgLiechtenstein",path:"packages/icons/src/components/flag-icons/index.tsx#SvgLiechtenstein"})}catch(r){}try{SvgLithuania.displayName="SvgLithuania",SvgLithuania.__docgenInfo={description:"",displayName:"SvgLithuania",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgLithuania"]={docgenInfo:SvgLithuania.__docgenInfo,name:"SvgLithuania",path:"packages/icons/src/components/flag-icons/index.tsx#SvgLithuania"})}catch(r){}try{SvgLuxembourg.displayName="SvgLuxembourg",SvgLuxembourg.__docgenInfo={description:"",displayName:"SvgLuxembourg",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgLuxembourg"]={docgenInfo:SvgLuxembourg.__docgenInfo,name:"SvgLuxembourg",path:"packages/icons/src/components/flag-icons/index.tsx#SvgLuxembourg"})}catch(r){}try{SvgMadagascar.displayName="SvgMadagascar",SvgMadagascar.__docgenInfo={description:"",displayName:"SvgMadagascar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMadagascar"]={docgenInfo:SvgMadagascar.__docgenInfo,name:"SvgMadagascar",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMadagascar"})}catch(r){}try{SvgMalaysia.displayName="SvgMalaysia",SvgMalaysia.__docgenInfo={description:"",displayName:"SvgMalaysia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMalaysia"]={docgenInfo:SvgMalaysia.__docgenInfo,name:"SvgMalaysia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMalaysia"})}catch(r){}try{SvgMaldives.displayName="SvgMaldives",SvgMaldives.__docgenInfo={description:"",displayName:"SvgMaldives",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMaldives"]={docgenInfo:SvgMaldives.__docgenInfo,name:"SvgMaldives",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMaldives"})}catch(r){}try{SvgMali.displayName="SvgMali",SvgMali.__docgenInfo={description:"",displayName:"SvgMali",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMali"]={docgenInfo:SvgMali.__docgenInfo,name:"SvgMali",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMali"})}catch(r){}try{SvgMalta.displayName="SvgMalta",SvgMalta.__docgenInfo={description:"",displayName:"SvgMalta",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMalta"]={docgenInfo:SvgMalta.__docgenInfo,name:"SvgMalta",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMalta"})}catch(r){}try{SvgMauritania.displayName="SvgMauritania",SvgMauritania.__docgenInfo={description:"",displayName:"SvgMauritania",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMauritania"]={docgenInfo:SvgMauritania.__docgenInfo,name:"SvgMauritania",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMauritania"})}catch(r){}try{SvgMauritius.displayName="SvgMauritius",SvgMauritius.__docgenInfo={description:"",displayName:"SvgMauritius",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMauritius"]={docgenInfo:SvgMauritius.__docgenInfo,name:"SvgMauritius",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMauritius"})}catch(r){}try{SvgMayotte.displayName="SvgMayotte",SvgMayotte.__docgenInfo={description:"",displayName:"SvgMayotte",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMayotte"]={docgenInfo:SvgMayotte.__docgenInfo,name:"SvgMayotte",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMayotte"})}catch(r){}try{SvgMoldova.displayName="SvgMoldova",SvgMoldova.__docgenInfo={description:"",displayName:"SvgMoldova",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMoldova"]={docgenInfo:SvgMoldova.__docgenInfo,name:"SvgMoldova",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMoldova"})}catch(r){}try{SvgMonaco.displayName="SvgMonaco",SvgMonaco.__docgenInfo={description:"",displayName:"SvgMonaco",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMonaco"]={docgenInfo:SvgMonaco.__docgenInfo,name:"SvgMonaco",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMonaco"})}catch(r){}try{SvgMontenegro.displayName="SvgMontenegro",SvgMontenegro.__docgenInfo={description:"",displayName:"SvgMontenegro",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMontenegro"]={docgenInfo:SvgMontenegro.__docgenInfo,name:"SvgMontenegro",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMontenegro"})}catch(r){}try{SvgMorocco.displayName="SvgMorocco",SvgMorocco.__docgenInfo={description:"",displayName:"SvgMorocco",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMorocco"]={docgenInfo:SvgMorocco.__docgenInfo,name:"SvgMorocco",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMorocco"})}catch(r){}try{SvgMozambique.displayName="SvgMozambique",SvgMozambique.__docgenInfo={description:"",displayName:"SvgMozambique",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMozambique"]={docgenInfo:SvgMozambique.__docgenInfo,name:"SvgMozambique",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMozambique"})}catch(r){}try{SvgMyanmar.displayName="SvgMyanmar",SvgMyanmar.__docgenInfo={description:"",displayName:"SvgMyanmar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgMyanmar"]={docgenInfo:SvgMyanmar.__docgenInfo,name:"SvgMyanmar",path:"packages/icons/src/components/flag-icons/index.tsx#SvgMyanmar"})}catch(r){}try{SvgNamibia.displayName="SvgNamibia",SvgNamibia.__docgenInfo={description:"",displayName:"SvgNamibia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgNamibia"]={docgenInfo:SvgNamibia.__docgenInfo,name:"SvgNamibia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgNamibia"})}catch(r){}try{SvgNetherlands.displayName="SvgNetherlands",SvgNetherlands.__docgenInfo={description:"",displayName:"SvgNetherlands",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgNetherlands"]={docgenInfo:SvgNetherlands.__docgenInfo,name:"SvgNetherlands",path:"packages/icons/src/components/flag-icons/index.tsx#SvgNetherlands"})}catch(r){}try{SvgNewCaledonia.displayName="SvgNewCaledonia",SvgNewCaledonia.__docgenInfo={description:"",displayName:"SvgNewCaledonia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgNewCaledonia"]={docgenInfo:SvgNewCaledonia.__docgenInfo,name:"SvgNewCaledonia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgNewCaledonia"})}catch(r){}try{SvgNewZealand.displayName="SvgNewZealand",SvgNewZealand.__docgenInfo={description:"",displayName:"SvgNewZealand",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgNewZealand"]={docgenInfo:SvgNewZealand.__docgenInfo,name:"SvgNewZealand",path:"packages/icons/src/components/flag-icons/index.tsx#SvgNewZealand"})}catch(r){}try{SvgNicaragua.displayName="SvgNicaragua",SvgNicaragua.__docgenInfo={description:"",displayName:"SvgNicaragua",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgNicaragua"]={docgenInfo:SvgNicaragua.__docgenInfo,name:"SvgNicaragua",path:"packages/icons/src/components/flag-icons/index.tsx#SvgNicaragua"})}catch(r){}try{SvgNiger.displayName="SvgNiger",SvgNiger.__docgenInfo={description:"",displayName:"SvgNiger",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgNiger"]={docgenInfo:SvgNiger.__docgenInfo,name:"SvgNiger",path:"packages/icons/src/components/flag-icons/index.tsx#SvgNiger"})}catch(r){}try{SvgNigeria.displayName="SvgNigeria",SvgNigeria.__docgenInfo={description:"",displayName:"SvgNigeria",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgNigeria"]={docgenInfo:SvgNigeria.__docgenInfo,name:"SvgNigeria",path:"packages/icons/src/components/flag-icons/index.tsx#SvgNigeria"})}catch(r){}try{SvgNorfolkIsland.displayName="SvgNorfolkIsland",SvgNorfolkIsland.__docgenInfo={description:"",displayName:"SvgNorfolkIsland",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgNorfolkIsland"]={docgenInfo:SvgNorfolkIsland.__docgenInfo,name:"SvgNorfolkIsland",path:"packages/icons/src/components/flag-icons/index.tsx#SvgNorfolkIsland"})}catch(r){}try{SvgNorthMacedonia.displayName="SvgNorthMacedonia",SvgNorthMacedonia.__docgenInfo={description:"",displayName:"SvgNorthMacedonia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgNorthMacedonia"]={docgenInfo:SvgNorthMacedonia.__docgenInfo,name:"SvgNorthMacedonia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgNorthMacedonia"})}catch(r){}try{SvgNorway.displayName="SvgNorway",SvgNorway.__docgenInfo={description:"",displayName:"SvgNorway",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgNorway"]={docgenInfo:SvgNorway.__docgenInfo,name:"SvgNorway",path:"packages/icons/src/components/flag-icons/index.tsx#SvgNorway"})}catch(r){}try{SvgOman.displayName="SvgOman",SvgOman.__docgenInfo={description:"",displayName:"SvgOman",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgOman"]={docgenInfo:SvgOman.__docgenInfo,name:"SvgOman",path:"packages/icons/src/components/flag-icons/index.tsx#SvgOman"})}catch(r){}try{SvgPalestine.displayName="SvgPalestine",SvgPalestine.__docgenInfo={description:"",displayName:"SvgPalestine",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgPalestine"]={docgenInfo:SvgPalestine.__docgenInfo,name:"SvgPalestine",path:"packages/icons/src/components/flag-icons/index.tsx#SvgPalestine"})}catch(r){}try{SvgParaguay.displayName="SvgParaguay",SvgParaguay.__docgenInfo={description:"",displayName:"SvgParaguay",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgParaguay"]={docgenInfo:SvgParaguay.__docgenInfo,name:"SvgParaguay",path:"packages/icons/src/components/flag-icons/index.tsx#SvgParaguay"})}catch(r){}try{SvgPeru.displayName="SvgPeru",SvgPeru.__docgenInfo={description:"",displayName:"SvgPeru",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgPeru"]={docgenInfo:SvgPeru.__docgenInfo,name:"SvgPeru",path:"packages/icons/src/components/flag-icons/index.tsx#SvgPeru"})}catch(r){}try{SvgPoland.displayName="SvgPoland",SvgPoland.__docgenInfo={description:"",displayName:"SvgPoland",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgPoland"]={docgenInfo:SvgPoland.__docgenInfo,name:"SvgPoland",path:"packages/icons/src/components/flag-icons/index.tsx#SvgPoland"})}catch(r){}try{SvgPortugal.displayName="SvgPortugal",SvgPortugal.__docgenInfo={description:"",displayName:"SvgPortugal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgPortugal"]={docgenInfo:SvgPortugal.__docgenInfo,name:"SvgPortugal",path:"packages/icons/src/components/flag-icons/index.tsx#SvgPortugal"})}catch(r){}try{SvgQatar.displayName="SvgQatar",SvgQatar.__docgenInfo={description:"",displayName:"SvgQatar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgQatar"]={docgenInfo:SvgQatar.__docgenInfo,name:"SvgQatar",path:"packages/icons/src/components/flag-icons/index.tsx#SvgQatar"})}catch(r){}try{SvgRomania.displayName="SvgRomania",SvgRomania.__docgenInfo={description:"",displayName:"SvgRomania",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgRomania"]={docgenInfo:SvgRomania.__docgenInfo,name:"SvgRomania",path:"packages/icons/src/components/flag-icons/index.tsx#SvgRomania"})}catch(r){}try{SvgRussia.displayName="SvgRussia",SvgRussia.__docgenInfo={description:"",displayName:"SvgRussia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgRussia"]={docgenInfo:SvgRussia.__docgenInfo,name:"SvgRussia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgRussia"})}catch(r){}try{SvgRwanda.displayName="SvgRwanda",SvgRwanda.__docgenInfo={description:"",displayName:"SvgRwanda",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgRwanda"]={docgenInfo:SvgRwanda.__docgenInfo,name:"SvgRwanda",path:"packages/icons/src/components/flag-icons/index.tsx#SvgRwanda"})}catch(r){}try{SvgSaintPierreAndMiquelon.displayName="SvgSaintPierreAndMiquelon",SvgSaintPierreAndMiquelon.__docgenInfo={description:"",displayName:"SvgSaintPierreAndMiquelon",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSaintPierreAndMiquelon"]={docgenInfo:SvgSaintPierreAndMiquelon.__docgenInfo,name:"SvgSaintPierreAndMiquelon",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSaintPierreAndMiquelon"})}catch(r){}try{SvgSanMarino.displayName="SvgSanMarino",SvgSanMarino.__docgenInfo={description:"",displayName:"SvgSanMarino",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSanMarino"]={docgenInfo:SvgSanMarino.__docgenInfo,name:"SvgSanMarino",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSanMarino"})}catch(r){}try{SvgSaoTomeAndPrincipe.displayName="SvgSaoTomeAndPrincipe",SvgSaoTomeAndPrincipe.__docgenInfo={description:"",displayName:"SvgSaoTomeAndPrincipe",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSaoTomeAndPrincipe"]={docgenInfo:SvgSaoTomeAndPrincipe.__docgenInfo,name:"SvgSaoTomeAndPrincipe",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSaoTomeAndPrincipe"})}catch(r){}try{SvgSaudiArabia.displayName="SvgSaudiArabia",SvgSaudiArabia.__docgenInfo={description:"",displayName:"SvgSaudiArabia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSaudiArabia"]={docgenInfo:SvgSaudiArabia.__docgenInfo,name:"SvgSaudiArabia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSaudiArabia"})}catch(r){}try{SvgSenegal.displayName="SvgSenegal",SvgSenegal.__docgenInfo={description:"",displayName:"SvgSenegal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSenegal"]={docgenInfo:SvgSenegal.__docgenInfo,name:"SvgSenegal",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSenegal"})}catch(r){}try{SvgSerbia.displayName="SvgSerbia",SvgSerbia.__docgenInfo={description:"",displayName:"SvgSerbia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSerbia"]={docgenInfo:SvgSerbia.__docgenInfo,name:"SvgSerbia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSerbia"})}catch(r){}try{SvgSierraLeone.displayName="SvgSierraLeone",SvgSierraLeone.__docgenInfo={description:"",displayName:"SvgSierraLeone",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSierraLeone"]={docgenInfo:SvgSierraLeone.__docgenInfo,name:"SvgSierraLeone",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSierraLeone"})}catch(r){}try{SvgSingapore.displayName="SvgSingapore",SvgSingapore.__docgenInfo={description:"",displayName:"SvgSingapore",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSingapore"]={docgenInfo:SvgSingapore.__docgenInfo,name:"SvgSingapore",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSingapore"})}catch(r){}try{SvgSintMaarten.displayName="SvgSintMaarten",SvgSintMaarten.__docgenInfo={description:"",displayName:"SvgSintMaarten",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSintMaarten"]={docgenInfo:SvgSintMaarten.__docgenInfo,name:"SvgSintMaarten",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSintMaarten"})}catch(r){}try{SvgSlovakia.displayName="SvgSlovakia",SvgSlovakia.__docgenInfo={description:"",displayName:"SvgSlovakia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSlovakia"]={docgenInfo:SvgSlovakia.__docgenInfo,name:"SvgSlovakia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSlovakia"})}catch(r){}try{SvgSomaliland.displayName="SvgSomaliland",SvgSomaliland.__docgenInfo={description:"",displayName:"SvgSomaliland",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSomaliland"]={docgenInfo:SvgSomaliland.__docgenInfo,name:"SvgSomaliland",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSomaliland"})}catch(r){}try{SvgSouthSudan.displayName="SvgSouthSudan",SvgSouthSudan.__docgenInfo={description:"",displayName:"SvgSouthSudan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSouthSudan"]={docgenInfo:SvgSouthSudan.__docgenInfo,name:"SvgSouthSudan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSouthSudan"})}catch(r){}try{SvgSouthAfrica.displayName="SvgSouthAfrica",SvgSouthAfrica.__docgenInfo={description:"",displayName:"SvgSouthAfrica",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSouthAfrica"]={docgenInfo:SvgSouthAfrica.__docgenInfo,name:"SvgSouthAfrica",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSouthAfrica"})}catch(r){}try{SvgSouthKorea.displayName="SvgSouthKorea",SvgSouthKorea.__docgenInfo={description:"",displayName:"SvgSouthKorea",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSouthKorea"]={docgenInfo:SvgSouthKorea.__docgenInfo,name:"SvgSouthKorea",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSouthKorea"})}catch(r){}try{SvgSpain.displayName="SvgSpain",SvgSpain.__docgenInfo={description:"",displayName:"SvgSpain",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSpain"]={docgenInfo:SvgSpain.__docgenInfo,name:"SvgSpain",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSpain"})}catch(r){}try{SvgSriLanka.displayName="SvgSriLanka",SvgSriLanka.__docgenInfo={description:"",displayName:"SvgSriLanka",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSriLanka"]={docgenInfo:SvgSriLanka.__docgenInfo,name:"SvgSriLanka",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSriLanka"})}catch(r){}try{SvgSudan.displayName="SvgSudan",SvgSudan.__docgenInfo={description:"",displayName:"SvgSudan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSudan"]={docgenInfo:SvgSudan.__docgenInfo,name:"SvgSudan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSudan"})}catch(r){}try{SvgSuriname.displayName="SvgSuriname",SvgSuriname.__docgenInfo={description:"",displayName:"SvgSuriname",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSuriname"]={docgenInfo:SvgSuriname.__docgenInfo,name:"SvgSuriname",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSuriname"})}catch(r){}try{SvgSweden.displayName="SvgSweden",SvgSweden.__docgenInfo={description:"",displayName:"SvgSweden",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSweden"]={docgenInfo:SvgSweden.__docgenInfo,name:"SvgSweden",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSweden"})}catch(r){}try{SvgSwitzerland.displayName="SvgSwitzerland",SvgSwitzerland.__docgenInfo={description:"",displayName:"SvgSwitzerland",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSwitzerland"]={docgenInfo:SvgSwitzerland.__docgenInfo,name:"SvgSwitzerland",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSwitzerland"})}catch(r){}try{SvgSyria.displayName="SvgSyria",SvgSyria.__docgenInfo={description:"",displayName:"SvgSyria",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgSyria"]={docgenInfo:SvgSyria.__docgenInfo,name:"SvgSyria",path:"packages/icons/src/components/flag-icons/index.tsx#SvgSyria"})}catch(r){}try{SvgTaiwan.displayName="SvgTaiwan",SvgTaiwan.__docgenInfo={description:"",displayName:"SvgTaiwan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgTaiwan"]={docgenInfo:SvgTaiwan.__docgenInfo,name:"SvgTaiwan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgTaiwan"})}catch(r){}try{SvgTajikistan.displayName="SvgTajikistan",SvgTajikistan.__docgenInfo={description:"",displayName:"SvgTajikistan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgTajikistan"]={docgenInfo:SvgTajikistan.__docgenInfo,name:"SvgTajikistan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgTajikistan"})}catch(r){}try{SvgTanzania.displayName="SvgTanzania",SvgTanzania.__docgenInfo={description:"",displayName:"SvgTanzania",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgTanzania"]={docgenInfo:SvgTanzania.__docgenInfo,name:"SvgTanzania",path:"packages/icons/src/components/flag-icons/index.tsx#SvgTanzania"})}catch(r){}try{SvgThailand.displayName="SvgThailand",SvgThailand.__docgenInfo={description:"",displayName:"SvgThailand",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgThailand"]={docgenInfo:SvgThailand.__docgenInfo,name:"SvgThailand",path:"packages/icons/src/components/flag-icons/index.tsx#SvgThailand"})}catch(r){}try{SvgTonga.displayName="SvgTonga",SvgTonga.__docgenInfo={description:"",displayName:"SvgTonga",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgTonga"]={docgenInfo:SvgTonga.__docgenInfo,name:"SvgTonga",path:"packages/icons/src/components/flag-icons/index.tsx#SvgTonga"})}catch(r){}try{SvgTransnistria.displayName="SvgTransnistria",SvgTransnistria.__docgenInfo={description:"",displayName:"SvgTransnistria",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgTransnistria"]={docgenInfo:SvgTransnistria.__docgenInfo,name:"SvgTransnistria",path:"packages/icons/src/components/flag-icons/index.tsx#SvgTransnistria"})}catch(r){}try{SvgTurkey.displayName="SvgTurkey",SvgTurkey.__docgenInfo={description:"",displayName:"SvgTurkey",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgTurkey"]={docgenInfo:SvgTurkey.__docgenInfo,name:"SvgTurkey",path:"packages/icons/src/components/flag-icons/index.tsx#SvgTurkey"})}catch(r){}try{SvgTurkmenistan.displayName="SvgTurkmenistan",SvgTurkmenistan.__docgenInfo={description:"",displayName:"SvgTurkmenistan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgTurkmenistan"]={docgenInfo:SvgTurkmenistan.__docgenInfo,name:"SvgTurkmenistan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgTurkmenistan"})}catch(r){}try{SvgTuvalu.displayName="SvgTuvalu",SvgTuvalu.__docgenInfo={description:"",displayName:"SvgTuvalu",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgTuvalu"]={docgenInfo:SvgTuvalu.__docgenInfo,name:"SvgTuvalu",path:"packages/icons/src/components/flag-icons/index.tsx#SvgTuvalu"})}catch(r){}try{SvgUganda.displayName="SvgUganda",SvgUganda.__docgenInfo={description:"",displayName:"SvgUganda",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgUganda"]={docgenInfo:SvgUganda.__docgenInfo,name:"SvgUganda",path:"packages/icons/src/components/flag-icons/index.tsx#SvgUganda"})}catch(r){}try{SvgUkraine.displayName="SvgUkraine",SvgUkraine.__docgenInfo={description:"",displayName:"SvgUkraine",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgUkraine"]={docgenInfo:SvgUkraine.__docgenInfo,name:"SvgUkraine",path:"packages/icons/src/components/flag-icons/index.tsx#SvgUkraine"})}catch(r){}try{SvgUnitedArabEmirates.displayName="SvgUnitedArabEmirates",SvgUnitedArabEmirates.__docgenInfo={description:"",displayName:"SvgUnitedArabEmirates",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgUnitedArabEmirates"]={docgenInfo:SvgUnitedArabEmirates.__docgenInfo,name:"SvgUnitedArabEmirates",path:"packages/icons/src/components/flag-icons/index.tsx#SvgUnitedArabEmirates"})}catch(r){}try{SvgUruguay.displayName="SvgUruguay",SvgUruguay.__docgenInfo={description:"",displayName:"SvgUruguay",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgUruguay"]={docgenInfo:SvgUruguay.__docgenInfo,name:"SvgUruguay",path:"packages/icons/src/components/flag-icons/index.tsx#SvgUruguay"})}catch(r){}try{SvgUzbekistan.displayName="SvgUzbekistan",SvgUzbekistan.__docgenInfo={description:"",displayName:"SvgUzbekistan",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgUzbekistan"]={docgenInfo:SvgUzbekistan.__docgenInfo,name:"SvgUzbekistan",path:"packages/icons/src/components/flag-icons/index.tsx#SvgUzbekistan"})}catch(r){}try{SvgVanuatu.displayName="SvgVanuatu",SvgVanuatu.__docgenInfo={description:"",displayName:"SvgVanuatu",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgVanuatu"]={docgenInfo:SvgVanuatu.__docgenInfo,name:"SvgVanuatu",path:"packages/icons/src/components/flag-icons/index.tsx#SvgVanuatu"})}catch(r){}try{SvgVenezuela.displayName="SvgVenezuela",SvgVenezuela.__docgenInfo={description:"",displayName:"SvgVenezuela",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgVenezuela"]={docgenInfo:SvgVenezuela.__docgenInfo,name:"SvgVenezuela",path:"packages/icons/src/components/flag-icons/index.tsx#SvgVenezuela"})}catch(r){}try{SvgVietnam.displayName="SvgVietnam",SvgVietnam.__docgenInfo={description:"",displayName:"SvgVietnam",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgVietnam"]={docgenInfo:SvgVietnam.__docgenInfo,name:"SvgVietnam",path:"packages/icons/src/components/flag-icons/index.tsx#SvgVietnam"})}catch(r){}try{SvgWallisAndFutuna.displayName="SvgWallisAndFutuna",SvgWallisAndFutuna.__docgenInfo={description:"",displayName:"SvgWallisAndFutuna",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgWallisAndFutuna"]={docgenInfo:SvgWallisAndFutuna.__docgenInfo,name:"SvgWallisAndFutuna",path:"packages/icons/src/components/flag-icons/index.tsx#SvgWallisAndFutuna"})}catch(r){}try{SvgYemen.displayName="SvgYemen",SvgYemen.__docgenInfo={description:"",displayName:"SvgYemen",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgYemen"]={docgenInfo:SvgYemen.__docgenInfo,name:"SvgYemen",path:"packages/icons/src/components/flag-icons/index.tsx#SvgYemen"})}catch(r){}try{SvgZambia.displayName="SvgZambia",SvgZambia.__docgenInfo={description:"",displayName:"SvgZambia",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgZambia"]={docgenInfo:SvgZambia.__docgenInfo,name:"SvgZambia",path:"packages/icons/src/components/flag-icons/index.tsx#SvgZambia"})}catch(r){}try{SvgZimbabwe.displayName="SvgZimbabwe",SvgZimbabwe.__docgenInfo={description:"",displayName:"SvgZimbabwe",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/flag-icons/index.tsx#SvgZimbabwe"]={docgenInfo:SvgZimbabwe.__docgenInfo,name:"SvgZimbabwe",path:"packages/icons/src/components/flag-icons/index.tsx#SvgZimbabwe"})}catch(r){}}),"./packages/icons/src/components/interface-icons-system/index.tsx":((G,g,a)=>{a.r(g),a.d(g,{AlarmFilledSVG:()=>u.A,ArrowDownSVG:()=>t.A,ArrowLeftSVG:()=>c.A,ArrowLinksSVG:()=>o.A,ArrowRightSVG:()=>i.A,ArrowUpSVG:()=>s.A,CalendarSVG:()=>e.A,CheckFilledSVG:()=>d.A,CheckSVG:()=>n.A,ChevronDownSVG:()=>S.A,ChevronLeftSVG:()=>p.A,ChevronRightSVG:()=>m.A,ChevronUpSVG:()=>v.A,CopySVG:()=>R.A,CrossFilledSVG:()=>T.A,CrossSVG:()=>N.A,DaySVG:()=>B.A,DownloadSVG:()=>M.A,DragDropSVG:()=>P.A,EmailSVG:()=>K.A,EyeClosedSVG:()=>D.A,EyeSVG:()=>z.A,FileSVG:()=>F.A,FilterSVG:()=>H.A,FolderOpenSVG:()=>w.A,FolderSVG:()=>C.A,FunctionSettingsSVG:()=>f.A,HeartFilledSVG:()=>pe.A,HeartSVG:()=>Y.A,HomeSVG:()=>b.A,InfoFilledSVG:()=>_.A,KebabSVG:()=>U.A,LaptopPhoneSVG:()=>q.A,MinusSVG:()=>j.A,MoreSVG:()=>x.A,NightSVG:()=>W.A,PauseSVG:()=>Z.A,PinnedSVG:()=>J.A,PlaceholderSVG:()=>Q.A,PlaySVG:()=>A.A,PlusSVG:()=>X.A,QuestionSVG:()=>L.A,ResizeSVG:()=>k.A,ScalableLeftSVG:()=>$.A,ScalableRightSVG:()=>ee.A,SearchSVG:()=>I.A,SettingsSVG:()=>V.A,StarFilledSVG:()=>ne.A,StarSVG:()=>ae.A,StopSVG:()=>oe.A,ThemeContrastSVG:()=>se.A,TrashSVG:()=>te.A,UnPinnedSVG:()=>ie.A,UpdateSVG:()=>re.A,UploadSVG:()=>ce.A,WarningSVG:()=>de.A,WatchSVG:()=>le.A});var u=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/alarmFilled/index.js"),t=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/arrowDown/index.js"),c=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/arrowLeft/index.js"),o=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/arrowLinks/index.js"),i=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/arrowRight/index.js"),s=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/arrowUp/index.js"),e=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/calendar/index.js"),d=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/checkFilled/index.js"),n=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/check/index.js"),S=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronDown/index.js"),p=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronLeft/index.js"),m=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronRight/index.js"),v=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/chevronUp/index.js"),R=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/copy/index.js"),T=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/crossFilled/index.js"),N=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/cross/index.js"),B=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/day/index.js"),M=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/download/index.js"),P=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/dragDrop/index.js"),K=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/email/index.js"),D=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/eyeClosed/index.js"),z=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/eye/index.js"),F=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/file/index.js"),H=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/filter/index.js"),w=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/folderOpen/index.js"),C=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/folder/index.js"),f=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/functionSettings/index.js"),pe=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/heartFilled/index.js"),Y=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/heart/index.js"),b=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/home/index.js"),_=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/infoFilled/index.js"),U=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/kebab/index.js"),q=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/laptopPhone/index.js"),j=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/minus/index.js"),x=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/more/index.js"),W=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/night/index.js"),Z=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/pause/index.js"),J=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/pinned/index.js"),Q=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/placeholder/index.js"),A=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/play/index.js"),X=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/plus/index.js"),L=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/question/index.js"),k=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/resize/index.js"),$=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/scalableLeft/index.js"),ee=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/scalableRight/index.js"),I=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/search/index.js"),V=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/settings/index.js"),ne=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/starFilled/index.js"),ae=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/star/index.js"),oe=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/stop/index.js"),se=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/themeContrast/index.js"),te=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/trash/index.js"),ie=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/unPinned/index.js"),re=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/update/index.js"),ce=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/upload/index.js"),de=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/warning/index.js"),le=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/components/interface-icons/watch/index.js");try{AlarmFilledSVG.displayName="AlarmFilledSVG",AlarmFilledSVG.__docgenInfo={description:"",displayName:"AlarmFilledSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#AlarmFilledSVG"]={docgenInfo:AlarmFilledSVG.__docgenInfo,name:"AlarmFilledSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#AlarmFilledSVG"})}catch(l){}try{ArrowDownSVG.displayName="ArrowDownSVG",ArrowDownSVG.__docgenInfo={description:"",displayName:"ArrowDownSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ArrowDownSVG"]={docgenInfo:ArrowDownSVG.__docgenInfo,name:"ArrowDownSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ArrowDownSVG"})}catch(l){}try{ArrowLeftSVG.displayName="ArrowLeftSVG",ArrowLeftSVG.__docgenInfo={description:"",displayName:"ArrowLeftSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ArrowLeftSVG"]={docgenInfo:ArrowLeftSVG.__docgenInfo,name:"ArrowLeftSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ArrowLeftSVG"})}catch(l){}try{ArrowLinksSVG.displayName="ArrowLinksSVG",ArrowLinksSVG.__docgenInfo={description:"",displayName:"ArrowLinksSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ArrowLinksSVG"]={docgenInfo:ArrowLinksSVG.__docgenInfo,name:"ArrowLinksSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ArrowLinksSVG"})}catch(l){}try{ArrowRightSVG.displayName="ArrowRightSVG",ArrowRightSVG.__docgenInfo={description:"",displayName:"ArrowRightSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ArrowRightSVG"]={docgenInfo:ArrowRightSVG.__docgenInfo,name:"ArrowRightSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ArrowRightSVG"})}catch(l){}try{ArrowUpSVG.displayName="ArrowUpSVG",ArrowUpSVG.__docgenInfo={description:"",displayName:"ArrowUpSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ArrowUpSVG"]={docgenInfo:ArrowUpSVG.__docgenInfo,name:"ArrowUpSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ArrowUpSVG"})}catch(l){}try{CalendarSVG.displayName="CalendarSVG",CalendarSVG.__docgenInfo={description:"",displayName:"CalendarSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#CalendarSVG"]={docgenInfo:CalendarSVG.__docgenInfo,name:"CalendarSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#CalendarSVG"})}catch(l){}try{CheckFilledSVG.displayName="CheckFilledSVG",CheckFilledSVG.__docgenInfo={description:"",displayName:"CheckFilledSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#CheckFilledSVG"]={docgenInfo:CheckFilledSVG.__docgenInfo,name:"CheckFilledSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#CheckFilledSVG"})}catch(l){}try{CheckSVG.displayName="CheckSVG",CheckSVG.__docgenInfo={description:"",displayName:"CheckSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#CheckSVG"]={docgenInfo:CheckSVG.__docgenInfo,name:"CheckSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#CheckSVG"})}catch(l){}try{ChevronDownSVG.displayName="ChevronDownSVG",ChevronDownSVG.__docgenInfo={description:"",displayName:"ChevronDownSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ChevronDownSVG"]={docgenInfo:ChevronDownSVG.__docgenInfo,name:"ChevronDownSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ChevronDownSVG"})}catch(l){}try{ChevronLeftSVG.displayName="ChevronLeftSVG",ChevronLeftSVG.__docgenInfo={description:"",displayName:"ChevronLeftSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ChevronLeftSVG"]={docgenInfo:ChevronLeftSVG.__docgenInfo,name:"ChevronLeftSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ChevronLeftSVG"})}catch(l){}try{ChevronRightSVG.displayName="ChevronRightSVG",ChevronRightSVG.__docgenInfo={description:"",displayName:"ChevronRightSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ChevronRightSVG"]={docgenInfo:ChevronRightSVG.__docgenInfo,name:"ChevronRightSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ChevronRightSVG"})}catch(l){}try{ChevronUpSVG.displayName="ChevronUpSVG",ChevronUpSVG.__docgenInfo={description:"",displayName:"ChevronUpSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ChevronUpSVG"]={docgenInfo:ChevronUpSVG.__docgenInfo,name:"ChevronUpSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ChevronUpSVG"})}catch(l){}try{CopySVG.displayName="CopySVG",CopySVG.__docgenInfo={description:"",displayName:"CopySVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#CopySVG"]={docgenInfo:CopySVG.__docgenInfo,name:"CopySVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#CopySVG"})}catch(l){}try{CrossFilledSVG.displayName="CrossFilledSVG",CrossFilledSVG.__docgenInfo={description:"",displayName:"CrossFilledSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#CrossFilledSVG"]={docgenInfo:CrossFilledSVG.__docgenInfo,name:"CrossFilledSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#CrossFilledSVG"})}catch(l){}try{CrossSVG.displayName="CrossSVG",CrossSVG.__docgenInfo={description:"",displayName:"CrossSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#CrossSVG"]={docgenInfo:CrossSVG.__docgenInfo,name:"CrossSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#CrossSVG"})}catch(l){}try{DaySVG.displayName="DaySVG",DaySVG.__docgenInfo={description:"",displayName:"DaySVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#DaySVG"]={docgenInfo:DaySVG.__docgenInfo,name:"DaySVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#DaySVG"})}catch(l){}try{DownloadSVG.displayName="DownloadSVG",DownloadSVG.__docgenInfo={description:"",displayName:"DownloadSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#DownloadSVG"]={docgenInfo:DownloadSVG.__docgenInfo,name:"DownloadSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#DownloadSVG"})}catch(l){}try{DragDropSVG.displayName="DragDropSVG",DragDropSVG.__docgenInfo={description:"",displayName:"DragDropSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#DragDropSVG"]={docgenInfo:DragDropSVG.__docgenInfo,name:"DragDropSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#DragDropSVG"})}catch(l){}try{EmailSVG.displayName="EmailSVG",EmailSVG.__docgenInfo={description:"",displayName:"EmailSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#EmailSVG"]={docgenInfo:EmailSVG.__docgenInfo,name:"EmailSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#EmailSVG"})}catch(l){}try{EyeClosedSVG.displayName="EyeClosedSVG",EyeClosedSVG.__docgenInfo={description:"",displayName:"EyeClosedSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#EyeClosedSVG"]={docgenInfo:EyeClosedSVG.__docgenInfo,name:"EyeClosedSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#EyeClosedSVG"})}catch(l){}try{EyeSVG.displayName="EyeSVG",EyeSVG.__docgenInfo={description:"",displayName:"EyeSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#EyeSVG"]={docgenInfo:EyeSVG.__docgenInfo,name:"EyeSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#EyeSVG"})}catch(l){}try{FileSVG.displayName="FileSVG",FileSVG.__docgenInfo={description:"",displayName:"FileSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#FileSVG"]={docgenInfo:FileSVG.__docgenInfo,name:"FileSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#FileSVG"})}catch(l){}try{FilterSVG.displayName="FilterSVG",FilterSVG.__docgenInfo={description:"",displayName:"FilterSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#FilterSVG"]={docgenInfo:FilterSVG.__docgenInfo,name:"FilterSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#FilterSVG"})}catch(l){}try{FolderOpenSVG.displayName="FolderOpenSVG",FolderOpenSVG.__docgenInfo={description:"",displayName:"FolderOpenSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#FolderOpenSVG"]={docgenInfo:FolderOpenSVG.__docgenInfo,name:"FolderOpenSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#FolderOpenSVG"})}catch(l){}try{FolderSVG.displayName="FolderSVG",FolderSVG.__docgenInfo={description:"",displayName:"FolderSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#FolderSVG"]={docgenInfo:FolderSVG.__docgenInfo,name:"FolderSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#FolderSVG"})}catch(l){}try{FunctionSettingsSVG.displayName="FunctionSettingsSVG",FunctionSettingsSVG.__docgenInfo={description:"",displayName:"FunctionSettingsSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#FunctionSettingsSVG"]={docgenInfo:FunctionSettingsSVG.__docgenInfo,name:"FunctionSettingsSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#FunctionSettingsSVG"})}catch(l){}try{HeartFilledSVG.displayName="HeartFilledSVG",HeartFilledSVG.__docgenInfo={description:"",displayName:"HeartFilledSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#HeartFilledSVG"]={docgenInfo:HeartFilledSVG.__docgenInfo,name:"HeartFilledSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#HeartFilledSVG"})}catch(l){}try{HeartSVG.displayName="HeartSVG",HeartSVG.__docgenInfo={description:"",displayName:"HeartSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#HeartSVG"]={docgenInfo:HeartSVG.__docgenInfo,name:"HeartSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#HeartSVG"})}catch(l){}try{HomeSVG.displayName="HomeSVG",HomeSVG.__docgenInfo={description:"",displayName:"HomeSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#HomeSVG"]={docgenInfo:HomeSVG.__docgenInfo,name:"HomeSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#HomeSVG"})}catch(l){}try{InfoFilledSVG.displayName="InfoFilledSVG",InfoFilledSVG.__docgenInfo={description:"",displayName:"InfoFilledSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#InfoFilledSVG"]={docgenInfo:InfoFilledSVG.__docgenInfo,name:"InfoFilledSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#InfoFilledSVG"})}catch(l){}try{KebabSVG.displayName="KebabSVG",KebabSVG.__docgenInfo={description:"",displayName:"KebabSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#KebabSVG"]={docgenInfo:KebabSVG.__docgenInfo,name:"KebabSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#KebabSVG"})}catch(l){}try{LaptopPhoneSVG.displayName="LaptopPhoneSVG",LaptopPhoneSVG.__docgenInfo={description:"",displayName:"LaptopPhoneSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#LaptopPhoneSVG"]={docgenInfo:LaptopPhoneSVG.__docgenInfo,name:"LaptopPhoneSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#LaptopPhoneSVG"})}catch(l){}try{MinusSVG.displayName="MinusSVG",MinusSVG.__docgenInfo={description:"",displayName:"MinusSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#MinusSVG"]={docgenInfo:MinusSVG.__docgenInfo,name:"MinusSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#MinusSVG"})}catch(l){}try{MoreSVG.displayName="MoreSVG",MoreSVG.__docgenInfo={description:"",displayName:"MoreSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#MoreSVG"]={docgenInfo:MoreSVG.__docgenInfo,name:"MoreSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#MoreSVG"})}catch(l){}try{NightSVG.displayName="NightSVG",NightSVG.__docgenInfo={description:"",displayName:"NightSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#NightSVG"]={docgenInfo:NightSVG.__docgenInfo,name:"NightSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#NightSVG"})}catch(l){}try{PauseSVG.displayName="PauseSVG",PauseSVG.__docgenInfo={description:"",displayName:"PauseSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#PauseSVG"]={docgenInfo:PauseSVG.__docgenInfo,name:"PauseSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#PauseSVG"})}catch(l){}try{PinnedSVG.displayName="PinnedSVG",PinnedSVG.__docgenInfo={description:"",displayName:"PinnedSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#PinnedSVG"]={docgenInfo:PinnedSVG.__docgenInfo,name:"PinnedSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#PinnedSVG"})}catch(l){}try{PlaceholderSVG.displayName="PlaceholderSVG",PlaceholderSVG.__docgenInfo={description:"",displayName:"PlaceholderSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#PlaceholderSVG"]={docgenInfo:PlaceholderSVG.__docgenInfo,name:"PlaceholderSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#PlaceholderSVG"})}catch(l){}try{PlaySVG.displayName="PlaySVG",PlaySVG.__docgenInfo={description:"",displayName:"PlaySVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#PlaySVG"]={docgenInfo:PlaySVG.__docgenInfo,name:"PlaySVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#PlaySVG"})}catch(l){}try{PlusSVG.displayName="PlusSVG",PlusSVG.__docgenInfo={description:"",displayName:"PlusSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#PlusSVG"]={docgenInfo:PlusSVG.__docgenInfo,name:"PlusSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#PlusSVG"})}catch(l){}try{QuestionSVG.displayName="QuestionSVG",QuestionSVG.__docgenInfo={description:"",displayName:"QuestionSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#QuestionSVG"]={docgenInfo:QuestionSVG.__docgenInfo,name:"QuestionSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#QuestionSVG"})}catch(l){}try{ResizeSVG.displayName="ResizeSVG",ResizeSVG.__docgenInfo={description:"",displayName:"ResizeSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ResizeSVG"]={docgenInfo:ResizeSVG.__docgenInfo,name:"ResizeSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ResizeSVG"})}catch(l){}try{ScalableLeftSVG.displayName="ScalableLeftSVG",ScalableLeftSVG.__docgenInfo={description:"",displayName:"ScalableLeftSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ScalableLeftSVG"]={docgenInfo:ScalableLeftSVG.__docgenInfo,name:"ScalableLeftSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ScalableLeftSVG"})}catch(l){}try{ScalableRightSVG.displayName="ScalableRightSVG",ScalableRightSVG.__docgenInfo={description:"",displayName:"ScalableRightSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ScalableRightSVG"]={docgenInfo:ScalableRightSVG.__docgenInfo,name:"ScalableRightSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ScalableRightSVG"})}catch(l){}try{SearchSVG.displayName="SearchSVG",SearchSVG.__docgenInfo={description:"",displayName:"SearchSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#SearchSVG"]={docgenInfo:SearchSVG.__docgenInfo,name:"SearchSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#SearchSVG"})}catch(l){}try{SettingsSVG.displayName="SettingsSVG",SettingsSVG.__docgenInfo={description:"",displayName:"SettingsSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#SettingsSVG"]={docgenInfo:SettingsSVG.__docgenInfo,name:"SettingsSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#SettingsSVG"})}catch(l){}try{StarFilledSVG.displayName="StarFilledSVG",StarFilledSVG.__docgenInfo={description:"",displayName:"StarFilledSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#StarFilledSVG"]={docgenInfo:StarFilledSVG.__docgenInfo,name:"StarFilledSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#StarFilledSVG"})}catch(l){}try{StarSVG.displayName="StarSVG",StarSVG.__docgenInfo={description:"",displayName:"StarSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#StarSVG"]={docgenInfo:StarSVG.__docgenInfo,name:"StarSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#StarSVG"})}catch(l){}try{StopSVG.displayName="StopSVG",StopSVG.__docgenInfo={description:"",displayName:"StopSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#StopSVG"]={docgenInfo:StopSVG.__docgenInfo,name:"StopSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#StopSVG"})}catch(l){}try{ThemeContrastSVG.displayName="ThemeContrastSVG",ThemeContrastSVG.__docgenInfo={description:"",displayName:"ThemeContrastSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#ThemeContrastSVG"]={docgenInfo:ThemeContrastSVG.__docgenInfo,name:"ThemeContrastSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#ThemeContrastSVG"})}catch(l){}try{TrashSVG.displayName="TrashSVG",TrashSVG.__docgenInfo={description:"",displayName:"TrashSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#TrashSVG"]={docgenInfo:TrashSVG.__docgenInfo,name:"TrashSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#TrashSVG"})}catch(l){}try{UnPinnedSVG.displayName="UnPinnedSVG",UnPinnedSVG.__docgenInfo={description:"",displayName:"UnPinnedSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#UnPinnedSVG"]={docgenInfo:UnPinnedSVG.__docgenInfo,name:"UnPinnedSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#UnPinnedSVG"})}catch(l){}try{UpdateSVG.displayName="UpdateSVG",UpdateSVG.__docgenInfo={description:"",displayName:"UpdateSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#UpdateSVG"]={docgenInfo:UpdateSVG.__docgenInfo,name:"UpdateSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#UpdateSVG"})}catch(l){}try{UploadSVG.displayName="UploadSVG",UploadSVG.__docgenInfo={description:"",displayName:"UploadSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#UploadSVG"]={docgenInfo:UploadSVG.__docgenInfo,name:"UploadSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#UploadSVG"})}catch(l){}try{WarningSVG.displayName="WarningSVG",WarningSVG.__docgenInfo={description:"",displayName:"WarningSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#WarningSVG"]={docgenInfo:WarningSVG.__docgenInfo,name:"WarningSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#WarningSVG"})}catch(l){}try{WatchSVG.displayName="WatchSVG",WatchSVG.__docgenInfo={description:"",displayName:"WatchSVG",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["packages/icons/src/components/interface-icons-system/index.tsx#WatchSVG"]={docgenInfo:WatchSVG.__docgenInfo,name:"WatchSVG",path:"packages/icons/src/components/interface-icons-system/index.tsx#WatchSVG"})}catch(l){}}),"./packages/icons/src/index.ts":((G,g,a)=>{a.r(g),a.d(g,{AacExtensionSVG:()=>o.AacExtensionSVG,AbkhaziaSVG:()=>t.AbkhaziaSVG,AcceptSVG:()=>e.AcceptSVG,AccessibilitySVG:()=>e.AccessibilitySVG,AccidentsSVG:()=>n.AccidentsSVG,AccordionArrowRightInterfaceSVG:()=>s.AccordionArrowRightInterfaceSVG,ActionServiceSVG:()=>c.ActionServiceSVG,ActveDirectorySVG:()=>n.ActveDirectorySVG,AdminSVG:()=>e.AdminSVG,AdministrationSVG:()=>e.AdministrationSVG,AdmissionControlSVG:()=>e.AdmissionControlSVG,Advanced2ServiceSVG:()=>c.Advanced2ServiceSVG,AdvancedPlatformSVG:()=>e.AdvancedPlatformSVG,AdvancedSVG:()=>n.AdvancedSVG,AdvancedServiceSVG:()=>c.AdvancedServiceSVG,AfghanistanSVG:()=>t.AfghanistanSVG,AgentBackupSVG:()=>n.AgentBackupSVG,AgentClaudiaSVG:()=>e.AgentClaudiaSVG,AgentMemorySVG:()=>e.AgentMemorySVG,AiAssistantSVG:()=>e.AiAssistantSVG,AiCloudLogoSVG:()=>i.AiCloudLogoSVG,AiConciergeSVG:()=>e.AiConciergeSVG,AiExtensionSVG:()=>o.AiExtensionSVG,AiInConstructionSVG:()=>e.AiInConstructionSVG,AiMarketplaceServiceSVG:()=>c.AiMarketplaceServiceSVG,AiSVG:()=>e.AiSVG,AiServiceSVG:()=>c.AiServiceSVG,AiServicesSVG:()=>n.AiServicesSVG,AifExtensionSVG:()=>o.AifExtensionSVG,AirflowInterfaceSVG:()=>s.AirflowInterfaceSVG,AirflowSVG:()=>n.AirflowSVG,AirflowServiceSVG:()=>c.AirflowServiceSVG,AlarmFilledSVG:()=>d.AlarmFilledSVG,AlarmSVG:()=>e.AlarmSVG,AlbaniaSVG:()=>t.AlbaniaSVG,AlertBackupSVG:()=>e.AlertBackupSVG,AlertSquareSVG:()=>e.AlertSquareSVG,AlertsSVG:()=>n.AlertsSVG,AlgeriaSVG:()=>t.AlgeriaSVG,AllServicesSVG:()=>c.AllServicesSVG,AllocatonsSVG:()=>n.AllocatonsSVG,AlmaLinuxLogoSVG:()=>i.AlmaLinuxLogoSVG,AmazonLogoSVG:()=>i.AmazonLogoSVG,AndorraSVG:()=>t.AndorraSVG,AngolaSVG:()=>t.AngolaSVG,AnthropicSVG:()=>n.AnthropicSVG,AntiDdosFromQratorLabsSVG:()=>n.AntiDdosFromQratorLabsSVG,AntiDdosWafSVG:()=>n.AntiDdosWafSVG,AntiguaAndBarbudaSVG:()=>t.AntiguaAndBarbudaSVG,ApacheFlinkSVG:()=>n.ApacheFlinkSVG,ApacheIgnitSVG:()=>n.ApacheIgnitSVG,ApacheLogoSVG:()=>i.ApacheLogoSVG,ApiGatewaySVG:()=>n.ApiGatewaySVG,ApiGatewayServiceSVG:()=>c.ApiGatewayServiceSVG,ApiKeysSVG:()=>e.ApiKeysSVG,ApkExtensionSVG:()=>o.ApkExtensionSVG,AppExtensionSVG:()=>o.AppExtensionSVG,AppStageSVG:()=>n.AppStageSVG,ApplicationOperationManagementSVG:()=>n.ApplicationOperationManagementSVG,ApplicationOrchestrationServiceSVG:()=>n.ApplicationOrchestrationServiceSVG,ApplicationPerformanceManagementSVG:()=>n.ApplicationPerformanceManagementSVG,ApplicationSVG:()=>n.ApplicationSVG,ApplicationsForPlacementSVG:()=>n.ApplicationsForPlacementSVG,ArchiveSVG:()=>e.ArchiveSVG,ArenadataAnalyticalDbSVG:()=>n.ArenadataAnalyticalDbSVG,ArenadataDbSVG:()=>n.ArenadataDbSVG,ArenadataHadoopSVG:()=>n.ArenadataHadoopSVG,ArenadataQuickMartsSVG:()=>n.ArenadataQuickMartsSVG,ArenadataServiceSVG:()=>c.ArenadataServiceSVG,ArenadataStreamingSVG:()=>n.ArenadataStreamingSVG,ArgentinaSVG:()=>t.ArgentinaSVG,ArmeniaSVG:()=>t.ArmeniaSVG,ArrowBoldLeftInterfaceSVG:()=>s.ArrowBoldLeftInterfaceSVG,ArrowBoldRightInterfaceSVG:()=>s.ArrowBoldRightInterfaceSVG,ArrowDownSVG:()=>d.ArrowDownSVG,ArrowLeftSVG:()=>d.ArrowLeftSVG,ArrowLinkInterfaceSVG:()=>s.ArrowLinkInterfaceSVG,ArrowLinksSVG:()=>d.ArrowLinksSVG,ArrowRightSVG:()=>d.ArrowRightSVG,ArrowRoundDownSVG:()=>s.ArrowRoundDownSVG,ArrowRoundUpSVG:()=>s.ArrowRoundUpSVG,ArrowThinRightInterfaceSVG:()=>s.ArrowThinRightInterfaceSVG,ArrowUpSVG:()=>d.ArrowUpSVG,ArrowsMixSVG:()=>e.ArrowsMixSVG,ArrowsRoundSVG:()=>e.ArrowsRoundSVG,ArtefactServiceSVG:()=>c.ArtefactServiceSVG,ArtifactRegistrySVG:()=>n.ArtifactRegistrySVG,AsfExtensionSVG:()=>o.AsfExtensionSVG,AspExtensionSVG:()=>o.AspExtensionSVG,AspxExtensionSVG:()=>o.AspxExtensionSVG,AsxExtensionSVG:()=>o.AsxExtensionSVG,AsynchronousInferenceServiceSVG:()=>c.AsynchronousInferenceServiceSVG,AttachmentSVG:()=>e.AttachmentSVG,AttentionInterfaceSVG:()=>s.AttentionInterfaceSVG,AustraliaSVG:()=>t.AustraliaSVG,AustriaSVG:()=>t.AustriaSVG,AutoMlServiceSVG:()=>c.AutoMlServiceSVG,AutoMlTaskServiceSVG:()=>c.AutoMlTaskServiceSVG,AutoScalingSVG:()=>n.AutoScalingSVG,AvabilityGroupsSVG:()=>n.AvabilityGroupsSVG,AviExtensionSVG:()=>o.AviExtensionSVG,AwardSVG:()=>e.AwardSVG,AzerbaijanSVG:()=>t.AzerbaijanSVG,AzureLogoSVG:()=>i.AzureLogoSVG,BaaiLogoSVG:()=>i.BaaiLogoSVG,BackupCheckSVG:()=>e.BackupCheckSVG,BackupSVG:()=>n.BackupSVG,BackupServiceSVG:()=>c.BackupServiceSVG,BahamasSVG:()=>t.BahamasSVG,BahrainSVG:()=>t.BahrainSVG,BakExtensionSVG:()=>o.BakExtensionSVG,BallSVG:()=>e.BallSVG,BangladeshSVG:()=>t.BangladeshSVG,BankCardSVG:()=>e.BankCardSVG,BankSVG:()=>e.BankSVG,BarChartSVG:()=>e.BarChartSVG,BarbadosSVG:()=>t.BarbadosSVG,BareMetalSVG:()=>n.BareMetalSVG,BareMetalServiceSVG:()=>c.BareMetalServiceSVG,BaseAltSVG:()=>n.BaseAltSVG,BatExtensionSVG:()=>o.BatExtensionSVG,BelarusSVG:()=>t.BelarusSVG,BelgiumSVG:()=>t.BelgiumSVG,BelizeSVG:()=>t.BelizeSVG,BellSVG:()=>e.BellSVG,BeninSVG:()=>t.BeninSVG,BhutanSVG:()=>t.BhutanSVG,BiZoneTdrSVG:()=>n.BiZoneTdrSVG,BigArrowDownInterfaceSVG:()=>s.BigArrowDownInterfaceSVG,BigArrowLeftInterfaceSVG:()=>s.BigArrowLeftInterfaceSVG,BigArrowRightInterfaceSVG:()=>s.BigArrowRightInterfaceSVG,BigArrowTopInterfaceSVG:()=>s.BigArrowTopInterfaceSVG,BigQueryLogoSVG:()=>i.BigQueryLogoSVG,BillingSVG:()=>n.BillingSVG,BinExtensionSVG:()=>o.BinExtensionSVG,BlackBoxServiceSVG:()=>c.BlackBoxServiceSVG,BlogSVG:()=>e.BlogSVG,BmpExtensionSVG:()=>o.BmpExtensionSVG,BoldTextSVG:()=>e.BoldTextSVG,BookGearSVG:()=>e.BookGearSVG,BookOpenSVG:()=>e.BookOpenSVG,BookSVG:()=>e.BookSVG,BookmarkInterfaceSVG:()=>s.BookmarkInterfaceSVG,BookmarkSVG:()=>e.BookmarkSVG,BookmarksInterfaceSVG:()=>s.BookmarksInterfaceSVG,BookmarksSVG:()=>e.BookmarksSVG,BootcampLogoSVG:()=>i.BootcampLogoSVG,BosniaAndHerzegovinaSVG:()=>t.BosniaAndHerzegovinaSVG,BotswanaSVG:()=>t.BotswanaSVG,BoxSVG:()=>e.BoxSVG,BranchSVG:()=>e.BranchSVG,BrazilSVG:()=>t.BrazilSVG,BridgeSVG:()=>e.BridgeSVG,BrouserCodeSVG:()=>e.BrouserCodeSVG,BrouserGeerSVG:()=>e.BrouserGeerSVG,BrouserTestSVG:()=>e.BrouserTestSVG,BrowserListSVG:()=>e.BrowserListSVG,BrowserSVG:()=>e.BrowserSVG,BubbleLikeSVG:()=>e.BubbleLikeSVG,BubblesQuestionSVG:()=>e.BubblesQuestionSVG,BucketInterfaceSVG:()=>s.BucketInterfaceSVG,BugSVG:()=>e.BugSVG,BuildingSVG:()=>e.BuildingSVG,BulbSVG:()=>e.BulbSVG,BurgerSVG:()=>e.BurgerSVG,CSIDriverLogoSVG:()=>i.CSIDriverLogoSVG,CSIS3LogoSVG:()=>i.CSIS3LogoSVG,CabExtensionSVG:()=>o.CabExtensionSVG,CadExtensionSVG:()=>o.CadExtensionSVG,CalculatorSVG:()=>n.CalculatorSVG,CalculatorServiceSVG:()=>c.CalculatorServiceSVG,CalendarInterfaceSVG:()=>s.CalendarInterfaceSVG,CalendarSVG:()=>d.CalendarSVG,CalicoLogoSVG:()=>i.CalicoLogoSVG,CambodiaSVG:()=>t.CambodiaSVG,CameroonSVG:()=>t.CameroonSVG,CampSVG:()=>e.CampSVG,CampaignManagerLogoSVG:()=>i.CampaignManagerLogoSVG,CarSVG:()=>e.CarSVG,CaseSVG:()=>e.CaseSVG,CaseStorageSVG:()=>e.CaseStorageSVG,CatalogServiceSVG:()=>c.CatalogServiceSVG,CaymanIslandsSVG:()=>t.CaymanIslandsSVG,CdnSVG:()=>n.CdnSVG,CdrExtensionSVG:()=>o.CdrExtensionSVG,CentralAfricanRepublicSVG:()=>t.CentralAfricanRepublicSVG,CerExtensionSVG:()=>o.CerExtensionSVG,CerebroSVG:()=>n.CerebroSVG,CertificateManagerSVG:()=>n.CertificateManagerSVG,CertificatePlainSVG:()=>e.CertificatePlainSVG,CertificateStarSVG:()=>e.CertificateStarSVG,CertificationSVG:()=>n.CertificationSVG,CertmanagerLogoSVG:()=>i.CertmanagerLogoSVG,CfgExtensionSVG:()=>o.CfgExtensionSVG,CfmExtensionSVG:()=>o.CfmExtensionSVG,CgiExtensionSVG:()=>o.CgiExtensionSVG,ChadSVG:()=>t.ChadSVG,ChartPlusSVG:()=>e.ChartPlusSVG,ChatInterfaceSVG:()=>s.ChatInterfaceSVG,ChatSVG:()=>e.ChatSVG,CheckFilledSVG:()=>d.CheckFilledSVG,CheckInterfaceSVG:()=>s.CheckInterfaceSVG,CheckListSVG:()=>e.CheckListSVG,CheckSVG:()=>d.CheckSVG,CheckSmallInterfaceSVG:()=>s.CheckSmallInterfaceSVG,CheckboxCheckedSVG:()=>s.CheckboxCheckedSVG,CheckboxPartialCheckedSVG:()=>s.CheckboxPartialCheckedSVG,ChevronDownInterfaceSVG:()=>s.ChevronDownInterfaceSVG,ChevronDownSVG:()=>d.ChevronDownSVG,ChevronLeftInterfaceSVG:()=>s.ChevronLeftInterfaceSVG,ChevronLeftSVG:()=>d.ChevronLeftSVG,ChevronRightInterfaceSVG:()=>s.ChevronRightInterfaceSVG,ChevronRightSVG:()=>d.ChevronRightSVG,ChevronUpInterfaceSVG:()=>s.ChevronUpInterfaceSVG,ChevronUpSVG:()=>d.ChevronUpSVG,ChileSVG:()=>t.ChileSVG,Christofari2ServiceSVG:()=>c.Christofari2ServiceSVG,ChristofariA100Part2ServiceSVG:()=>c.ChristofariA100Part2ServiceSVG,ChristofariServiceSVG:()=>c.ChristofariServiceSVG,ChromiumBrowserLogoSVG:()=>i.ChromiumBrowserLogoSVG,CiliumLogoSVG:()=>i.CiliumLogoSVG,CircleAddInterfaceSVG:()=>s.CircleAddInterfaceSVG,CircleCancelFilledInterfaceSVG:()=>s.CircleCancelFilledInterfaceSVG,CircleCheckFilledInterfaceSVG:()=>s.CircleCheckFilledInterfaceSVG,CircleCheckOutlineInterfaceSVG:()=>s.CircleCheckOutlineInterfaceSVG,CircleDownloadInterfaceSVG:()=>s.CircleDownloadInterfaceSVG,CirclePauseInterfaceSVG:()=>s.CirclePauseInterfaceSVG,CirclePlayFilledInterfaceSVG:()=>s.CirclePlayFilledInterfaceSVG,CirclePlayOutlineInterfaceSVG:()=>s.CirclePlayOutlineInterfaceSVG,CircleStopInterfaceSVG:()=>s.CircleStopInterfaceSVG,CircleTeachInterfaceSVG:()=>s.CircleTeachInterfaceSVG,CircleUploadInterfaceSVG:()=>s.CircleUploadInterfaceSVG,ClassExtensionSVG:()=>o.ClassExtensionSVG,ClaudeSonnetLogoSVG:()=>i.ClaudeSonnetLogoSVG,CleanSVG:()=>e.CleanSVG,ClickhouseLogoSVG:()=>i.ClickhouseLogoSVG,ClientsSVG:()=>n.ClientsSVG,CloseInterfaceSVG:()=>s.CloseInterfaceSVG,CloseSVG:()=>e.CloseSVG,CloseSidebarSVG:()=>e.CloseSidebarSVG,CloseSmallInterfaceSVG:()=>s.CloseSmallInterfaceSVG,Cloud1CServiceSVG:()=>c.Cloud1CServiceSVG,CloudAdvisorSVG:()=>n.CloudAdvisorSVG,CloudArrowSVG:()=>e.CloudArrowSVG,CloudBackupAndRecoverySVG:()=>n.CloudBackupAndRecoverySVG,CloudBastionHostSVG:()=>n.CloudBastionHostSVG,CloudCertificateManagerSVG:()=>n.CloudCertificateManagerSVG,CloudChartSVG:()=>e.CloudChartSVG,CloudCheckmarkSVG:()=>e.CloudCheckmarkSVG,CloudCommandLineInterfaceSVG:()=>n.CloudCommandLineInterfaceSVG,CloudContainerEngineSVG:()=>n.CloudContainerEngineSVG,CloudContainerInstanceSVG:()=>n.CloudContainerInstanceSVG,CloudCursorSVG:()=>e.CloudCursorSVG,CloudDnsSVG:()=>n.CloudDnsSVG,CloudDownloadSVG:()=>e.CloudDownloadSVG,CloudEyeSVG:()=>n.CloudEyeSVG,CloudFirewallSVG:()=>n.CloudFirewallSVG,CloudFlashSVG:()=>e.CloudFlashSVG,CloudFolderSVG:()=>e.CloudFolderSVG,CloudFullLogoSVG:()=>i.CloudFullLogoSVG,CloudHostSVG:()=>e.CloudHostSVG,CloudInterfaceSVG:()=>s.CloudInterfaceSVG,CloudLoggingSVG:()=>n.CloudLoggingSVG,CloudLogoDevSVG:()=>i.CloudLogoDevSVG,CloudLogoHybridSVG:()=>i.CloudLogoHybridSVG,CloudLogoSVG:()=>i.CloudLogoSVG,CloudLogoStageSVG:()=>i.CloudLogoStageSVG,CloudMoveSVG:()=>e.CloudMoveSVG,CloudObjectSVG:()=>e.CloudObjectSVG,CloudPerformanceTestServiceSVG:()=>n.CloudPerformanceTestServiceSVG,CloudPuzzleSVG:()=>e.CloudPuzzleSVG,CloudRegionA100AndCpuServiceSVG:()=>c.CloudRegionA100AndCpuServiceSVG,CloudRepositorySVG:()=>e.CloudRepositorySVG,CloudRoundArrowsSVG:()=>e.CloudRoundArrowsSVG,CloudSVG:()=>e.CloudSVG,CloudSearchServiceSVG:()=>n.CloudSearchServiceSVG,CloudServiceEngineSVG:()=>n.CloudServiceEngineSVG,CloudSpannerLogoSVG:()=>i.CloudSpannerLogoSVG,CloudSqlLogoSVG:()=>i.CloudSqlLogoSVG,CloudStatusSVG:()=>e.CloudStatusSVG,CloudTableSVG:()=>n.CloudTableSVG,CloudTraceServiceSVG:()=>n.CloudTraceServiceSVG,CloudUploadSVG:()=>e.CloudUploadSVG,CloudsSVG:()=>e.CloudsSVG,ClustersSVG:()=>e.ClustersSVG,CoconutSVG:()=>e.CoconutSVG,CodeArtsArtifactSVG:()=>n.CodeArtsArtifactSVG,CodeArtsBuildSVG:()=>n.CodeArtsBuildSVG,CodeArtsCheckSVG:()=>n.CodeArtsCheckSVG,CodeArtsDeploySVG:()=>n.CodeArtsDeploySVG,CodeArtsPipelineSVG:()=>n.CodeArtsPipelineSVG,CodeArtsRepoSVG:()=>n.CodeArtsRepoSVG,CodeArtsReqSVG:()=>n.CodeArtsReqSVG,CodeArtsSVG:()=>n.CodeArtsSVG,CodeArtsTestPlanSVG:()=>n.CodeArtsTestPlanSVG,CodeSVG:()=>e.CodeSVG,CoffeeSVG:()=>e.CoffeeSVG,CoinsSVG:()=>e.CoinsSVG,CollapseInterfaceSVG:()=>s.CollapseInterfaceSVG,CollapseSVG:()=>e.CollapseSVG,ColombiaSVG:()=>t.ColombiaSVG,ComExtensionSVG:()=>o.ComExtensionSVG,ComandInterfaceSVG:()=>s.ComandInterfaceSVG,ComandSVG:()=>e.ComandSVG,ComitetSVG:()=>e.ComitetSVG,CompInterfaceSVG:()=>s.CompInterfaceSVG,CompetenceMapSVG:()=>e.CompetenceMapSVG,ConfigurationSVG:()=>e.ConfigurationSVG,CongoSVG:()=>t.CongoSVG,ConnaisseuerLogoSVG:()=>i.ConnaisseuerLogoSVG,ConnectedServicesSVG:()=>n.ConnectedServicesSVG,ConnectionHubSVG:()=>n.ConnectionHubSVG,ConnectionSVG:()=>e.ConnectionSVG,ConnectorSVG:()=>e.ConnectorSVG,ConnectorsServiceSVG:()=>c.ConnectorsServiceSVG,ContainerAppsSVG:()=>n.ContainerAppsSVG,ContainerBlocksServiceSVG:()=>c.ContainerBlocksServiceSVG,ContainerGuardServiceSVG:()=>n.ContainerGuardServiceSVG,ContainerRegistryServiceSVG:()=>c.ContainerRegistryServiceSVG,ContainerSecurityPlatformSVG:()=>n.ContainerSecurityPlatformSVG,ContainersServiceSVG:()=>c.ContainersServiceSVG,CopyInterfaceSVG:()=>s.CopyInterfaceSVG,CopySVG:()=>d.CopySVG,CoraxServiceSVG:()=>c.CoraxServiceSVG,CorporateChatWithAiSVG:()=>e.CorporateChatWithAiSVG,CostControlSVG:()=>e.CostControlSVG,CostaRicaSVG:()=>t.CostaRicaSVG,CoteDIvoireSVG:()=>t.CoteDIvoireSVG,CouchDbSVG:()=>n.CouchDbSVG,CplExtensionSVG:()=>o.CplExtensionSVG,CplusLogoSVG:()=>i.CplusLogoSVG,CppExtensionSVG:()=>o.CppExtensionSVG,Cpu1SVG:()=>e.Cpu1SVG,CpuInterfaceSVG:()=>s.CpuInterfaceSVG,CpuSVG:()=>e.CpuSVG,CreateEnviromentInterfaceSVG:()=>s.CreateEnviromentInterfaceSVG,CreateEnviromentSVG:()=>e.CreateEnviromentSVG,CreateEnviromentServiceSVG:()=>c.CreateEnviromentServiceSVG,CreatingCorporateAiAgentsSVG:()=>e.CreatingCorporateAiAgentsSVG,CroatiaSVG:()=>t.CroatiaSVG,CrossArrowsSVG:()=>e.CrossArrowsSVG,CrossFilledSVG:()=>d.CrossFilledSVG,CrossPlatformConnectionSVG:()=>n.CrossPlatformConnectionSVG,CrossSVG:()=>d.CrossSVG,CrxExtensionSVG:()=>o.CrxExtensionSVG,CsharpLogoSVG:()=>i.CsharpLogoSVG,CsrExtensionSVG:()=>o.CsrExtensionSVG,CssExtensionSVG:()=>o.CssExtensionSVG,CsvExtensionSVG:()=>o.CsvExtensionSVG,CueExtensionSVG:()=>o.CueExtensionSVG,CupSVG:()=>e.CupSVG,CurExtensionSVG:()=>o.CurExtensionSVG,CursorSVG:()=>e.CursorSVG,CutInterfaceSVG:()=>s.CutInterfaceSVG,CutSVG:()=>e.CutSVG,CyprusSVG:()=>t.CyprusSVG,DashboardServiceSVG:()=>c.DashboardServiceSVG,DashboardsSVG:()=>n.DashboardsSVG,DatExtensionSVG:()=>o.DatExtensionSVG,Data1SVG:()=>e.Data1SVG,DataAdminServiceSVG:()=>n.DataAdminServiceSVG,DataArtsInsightSVG:()=>n.DataArtsInsightSVG,DataArtsStudioSVG:()=>n.DataArtsStudioSVG,DataCatalogServiceSVG:()=>c.DataCatalogServiceSVG,DataEncryptionWorkshopSVG:()=>n.DataEncryptionWorkshopSVG,DataGridServiceSVG:()=>c.DataGridServiceSVG,DataHubSVG:()=>n.DataHubSVG,DataHubServiceSVG:()=>c.DataHubServiceSVG,DataInterfaceSVG:()=>s.DataInterfaceSVG,DataLakeInsightSVG:()=>n.DataLakeInsightSVG,DataPlatformServiceSVG:()=>c.DataPlatformServiceSVG,DataRegistryServiceSVG:()=>c.DataRegistryServiceSVG,DataReplicationServiceSVG:()=>n.DataReplicationServiceSVG,DataSVG:()=>e.DataSVG,DataStorageServiceSVG:()=>c.DataStorageServiceSVG,DataTransferServiceSVG:()=>n.DataTransferServiceSVG,DataWarehouseServiceSVG:()=>n.DataWarehouseServiceSVG,DatabaseBackupSVG:()=>e.DatabaseBackupSVG,DatabaseSVG:()=>e.DatabaseSVG,DatabaseSearchSVG:()=>e.DatabaseSearchSVG,DatabaseSecurityServiceSVG:()=>n.DatabaseSecurityServiceSVG,DatabaseServiceSVG:()=>c.DatabaseServiceSVG,DatacenterHostSVG:()=>e.DatacenterHostSVG,DatacentersTierSVG:()=>e.DatacentersTierSVG,DatalabsSVG:()=>e.DatalabsSVG,DatasetInterfaceSVG:()=>s.DatasetInterfaceSVG,DatasetPackServiceSVG:()=>c.DatasetPackServiceSVG,DatasetRegistrySVG:()=>n.DatasetRegistrySVG,DatasetServiceSVG:()=>c.DatasetServiceSVG,DatbriksSVG:()=>n.DatbriksSVG,DaySVG:()=>d.DaySVG,DbExtensionSVG:()=>o.DbExtensionSVG,DbfExtensionSVG:()=>o.DbfExtensionSVG,DdsExtensionSVG:()=>o.DdsExtensionSVG,DebianLogoSVG:()=>i.DebianLogoSVG,DecorCheckedSVG:()=>e.DecorCheckedSVG,DeepSeekSVG:()=>n.DeepSeekSVG,DeepseekLogoSVG:()=>i.DeepseekLogoSVG,DefaultEnviromentServiceSVG:()=>c.DefaultEnviromentServiceSVG,DefaultEnviroments2ServiceSVG:()=>c.DefaultEnviroments2ServiceSVG,DeleteInterfaceSVG:()=>s.DeleteInterfaceSVG,DemExtensionSVG:()=>o.DemExtensionSVG,DenmarkSVG:()=>t.DenmarkSVG,DeployImagesSVG:()=>n.DeployImagesSVG,DeploymentServiceSVG:()=>c.DeploymentServiceSVG,DeploysSVG:()=>n.DeploysSVG,DetalisationInterfaceSVG:()=>s.DetalisationInterfaceSVG,DetalisationSVG:()=>e.DetalisationSVG,DetalizationServiceSVG:()=>c.DetalizationServiceSVG,DevelopmentServiceSVG:()=>c.DevelopmentServiceSVG,DialogSVG:()=>e.DialogSVG,DialogueHeartSVG:()=>e.DialogueHeartSVG,DiamondSVG:()=>e.DiamondSVG,DigitalEnvironmentSVG:()=>e.DigitalEnvironmentSVG,DirectConnectSVG:()=>n.DirectConnectSVG,DiscountSVG:()=>e.DiscountSVG,DisksSVG:()=>n.DisksSVG,DisksServiceSVG:()=>c.DisksServiceSVG,DislikeFilledInterfaceSVG:()=>s.DislikeFilledInterfaceSVG,DislikeFilledSVG:()=>e.DislikeFilledSVG,DislikeOutlineInterfaceSVG:()=>s.DislikeOutlineInterfaceSVG,DislikeOutlineSVG:()=>e.DislikeOutlineSVG,DisplayvideoLogoSVG:()=>i.DisplayvideoLogoSVG,DistributedCacheServiceForMemcachedSVG:()=>n.DistributedCacheServiceForMemcachedSVG,DistributedCacheServiceForRedisSVG:()=>n.DistributedCacheServiceForRedisSVG,DistributedDatabaseMiddlewareSVG:()=>n.DistributedDatabaseMiddlewareSVG,DistributedMessageServiceForKafkaSVG:()=>n.DistributedMessageServiceForKafkaSVG,DistributedMessageServiceForRabbitMqSVG:()=>n.DistributedMessageServiceForRabbitMqSVG,DistributedMessageServiceForRocketMqSVG:()=>n.DistributedMessageServiceForRocketMqSVG,DjangoLogoSVG:()=>i.DjangoLogoSVG,DjiboutiSVG:()=>t.DjiboutiSVG,DllExtensionSVG:()=>o.DllExtensionSVG,DmgExtensionSVG:()=>o.DmgExtensionSVG,DmpExtensionSVG:()=>o.DmpExtensionSVG,DocExtensionSVG:()=>o.DocExtensionSVG,DockerInterfaceSVG:()=>s.DockerInterfaceSVG,DockerLogoSVG:()=>i.DockerLogoSVG,DockerRegistrySVG:()=>n.DockerRegistrySVG,DockerRegistryServiceSVG:()=>c.DockerRegistryServiceSVG,DockerSVG:()=>e.DockerSVG,DocumentCheckSVG:()=>e.DocumentCheckSVG,DocumentDatabaseServiceSVG:()=>n.DocumentDatabaseServiceSVG,DocumentLockSVG:()=>e.DocumentLockSVG,DocumentationInterfaceSVG:()=>s.DocumentationInterfaceSVG,DocxExtensionSVG:()=>o.DocxExtensionSVG,DogfoodingSVG:()=>e.DogfoodingSVG,DollarSVG:()=>e.DollarSVG,DominicanRepublicSVG:()=>t.DominicanRepublicSVG,DonationSVG:()=>e.DonationSVG,DotBigInterfaceSVG:()=>s.DotBigInterfaceSVG,DotBigLineSVG:()=>e.DotBigLineSVG,DotBigSVG:()=>e.DotBigSVG,DotSmallInterfaceSVG:()=>s.DotSmallInterfaceSVG,DotSmallSVG:()=>e.DotSmallSVG,DownloadInterfaceSVG:()=>s.DownloadInterfaceSVG,DownloadSVG:()=>d.DownloadSVG,DragDropSVG:()=>d.DragDropSVG,DragNDropSVG:()=>e.DragNDropSVG,DropSVG:()=>e.DropSVG,DropdownDownInterfaceSVG:()=>s.DropdownDownInterfaceSVG,DropdownDownSVG:()=>e.DropdownDownSVG,DropdownLeftSVG:()=>e.DropdownLeftSVG,DropdownRightSVG:()=>e.DropdownRightSVG,DropdownUpInterfaceSVG:()=>s.DropdownUpInterfaceSVG,DropdownUpSVG:()=>e.DropdownUpSVG,DrupalLogoSVG:()=>i.DrupalLogoSVG,DrvExtensionSVG:()=>o.DrvExtensionSVG,DtdExtensionSVG:()=>o.DtdExtensionSVG,DwdmSVG:()=>e.DwdmSVG,DwgExtensionSVG:()=>o.DwgExtensionSVG,DxfExtensionSVG:()=>o.DxfExtensionSVG,EcuadorSVG:()=>t.EcuadorSVG,EditInterfaceSVG:()=>s.EditInterfaceSVG,EditSVG:()=>e.EditSVG,EducationSVG:()=>e.EducationSVG,EgyptSVG:()=>t.EgyptSVG,ElasticCloudServerSVG:()=>n.ElasticCloudServerSVG,ElasticCloudServerWithGpuSVG:()=>n.ElasticCloudServerWithGpuSVG,ElasticIpSVG:()=>n.ElasticIpSVG,ElasticLoadBalanceSVG:()=>n.ElasticLoadBalanceSVG,ElasticSearchSVG:()=>n.ElasticSearchSVG,ElasticVolumeServiceSVG:()=>n.ElasticVolumeServiceSVG,ElectricalCircuitSVG:()=>e.ElectricalCircuitSVG,ElfExtensionSVG:()=>o.ElfExtensionSVG,EmailSVG:()=>d.EmailSVG,EnterSVG:()=>e.EnterSVG,EnterpriseKnowledgeBaseSVG:()=>e.EnterpriseKnowledgeBaseSVG,EnterpriseProjectManagementServiceSVG:()=>n.EnterpriseProjectManagementServiceSVG,EnterpriseRouterSVG:()=>n.EnterpriseRouterSVG,EnterpriseSystemCloudSVG:()=>e.EnterpriseSystemCloudSVG,EnvelopeOpenSVG:()=>e.EnvelopeOpenSVG,EnvelopeSVG:()=>e.EnvelopeSVG,EnviromentsServiceSVG:()=>c.EnviromentsServiceSVG,EnvironmentTaskServiceSVG:()=>c.EnvironmentTaskServiceSVG,EpsExtensionSVG:()=>o.EpsExtensionSVG,EquipmentLoadServiceSVG:()=>c.EquipmentLoadServiceSVG,EquipmentSVG:()=>e.EquipmentSVG,EraserSVG:()=>e.EraserSVG,EsoLogoSVG:()=>i.EsoLogoSVG,EstoniaSVG:()=>t.EstoniaSVG,EthiopiaSVG:()=>t.EthiopiaSVG,EventSourceSVG:()=>e.EventSourceSVG,EvoDnsSVG:()=>n.EvoDnsSVG,EvolutionAiAgentsSVG:()=>n.EvolutionAiAgentsSVG,EvolutionAiAssistantSVG:()=>n.EvolutionAiAssistantSVG,EvolutionBareMetalEnterpriseSVG:()=>n.EvolutionBareMetalEnterpriseSVG,EvolutionBiSVG:()=>n.EvolutionBiSVG,EvolutionCloudMonitoringSVG:()=>n.EvolutionCloudMonitoringSVG,EvolutionComputeSVG:()=>n.EvolutionComputeSVG,EvolutionDataPlatfromSVG:()=>n.EvolutionDataPlatfromSVG,EvolutionDisasterRecoverySVG:()=>n.EvolutionDisasterRecoverySVG,EvolutionDistributedTrainSVG:()=>n.EvolutionDistributedTrainSVG,EvolutionFoundationModelsSVG:()=>n.EvolutionFoundationModelsSVG,EvolutionHybridUsergateSVG:()=>n.EvolutionHybridUsergateSVG,EvolutionIdentityAccessManagementSVG:()=>n.EvolutionIdentityAccessManagementSVG,EvolutionMlFinetuningSVG:()=>n.EvolutionMlFinetuningSVG,EvolutionPipelineSVG:()=>n.EvolutionPipelineSVG,EvolutionRepoSVG:()=>n.EvolutionRepoSVG,EvolutionSVG:()=>n.EvolutionSVG,EvolutionServiceSVG:()=>c.EvolutionServiceSVG,EvolutionStackSVG:()=>n.EvolutionStackSVG,ExchangeSVG:()=>n.ExchangeSVG,ExeExtensionSVG:()=>o.ExeExtensionSVG,Exit1SVG:()=>e.Exit1SVG,ExitInterfaceSVG:()=>s.ExitInterfaceSVG,ExitSVG:()=>e.ExitSVG,ExpandInterfaceSVG:()=>s.ExpandInterfaceSVG,ExpandSVG:()=>e.ExpandSVG,ExpandWindowSVG:()=>e.ExpandWindowSVG,ExperimentServiceSVG:()=>c.ExperimentServiceSVG,ExperimentsSVG:()=>n.ExperimentsSVG,ExportSVG:()=>e.ExportSVG,ExternalIpSVG:()=>e.ExternalIpSVG,ExternaldnsLogoSVG:()=>i.ExternaldnsLogoSVG,EyeClosedInterfaceSVG:()=>s.EyeClosedInterfaceSVG,EyeClosedSVG:()=>d.EyeClosedSVG,EyeOpenedInterfaceSVG:()=>s.EyeOpenedInterfaceSVG,EyeSVG:()=>d.EyeSVG,FailedCrossSVG:()=>e.FailedCrossSVG,FaultTolerantCloudSVG:()=>e.FaultTolerantCloudSVG,FavouriteInterfaceSVG:()=>s.FavouriteInterfaceSVG,FavouriteServiceSVG:()=>c.FavouriteServiceSVG,FeaturedFilledSVG:()=>e.FeaturedFilledSVG,FeaturedSVG:()=>e.FeaturedSVG,FeaturedServiceSVG:()=>c.FeaturedServiceSVG,FederationSVG:()=>e.FederationSVG,FedoraLogoSVG:()=>i.FedoraLogoSVG,FeedbackInterfaceSVG:()=>s.FeedbackInterfaceSVG,FeedbackSVG:()=>e.FeedbackSVG,FijiSVG:()=>t.FijiSVG,FileAddFilledInterfaceSVG:()=>s.FileAddFilledInterfaceSVG,FileAddFilledSVG:()=>e.FileAddFilledSVG,FileAddOutlineInterfaceSVG:()=>s.FileAddOutlineInterfaceSVG,FileAddOutlineSVG:()=>e.FileAddOutlineSVG,FileInterfaceSVG:()=>s.FileInterfaceSVG,FileMedSVG:()=>e.FileMedSVG,FileSVG:()=>d.FileSVG,FileSearchSVG:()=>e.FileSearchSVG,FileStampSVG:()=>e.FileStampSVG,FileUpdateServiceSVG:()=>c.FileUpdateServiceSVG,FileUploadFilledInterfaceSVG:()=>s.FileUploadFilledInterfaceSVG,FileUploadFilledSVG:()=>e.FileUploadFilledSVG,FileUploadOutlineInterfaceSVG:()=>s.FileUploadOutlineInterfaceSVG,FileUploadOutlineSVG:()=>e.FileUploadOutlineSVG,FilterFunnelSVG:()=>e.FilterFunnelSVG,FilterInterfaceSVG:()=>s.FilterInterfaceSVG,FilterSVG:()=>d.FilterSVG,FingerprintSVG:()=>e.FingerprintSVG,FinlandSVG:()=>t.FinlandSVG,FireInterfaceSVG:()=>s.FireInterfaceSVG,FireSVG:()=>e.FireSVG,FirefoxBrowserLogoSVG:()=>i.FirefoxBrowserLogoSVG,FirewallBrickSVG:()=>e.FirewallBrickSVG,FirewallSVG:()=>n.FirewallSVG,FirewallServiceSVG:()=>c.FirewallServiceSVG,FivePlusSVG:()=>e.FivePlusSVG,FlaExtensionSVG:()=>o.FlaExtensionSVG,FlashDriveSVG:()=>e.FlashDriveSVG,FlashExtensionSVG:()=>o.FlashExtensionSVG,FluentbitLogoSVG:()=>i.FluentbitLogoSVG,FlvExtensionSVG:()=>o.FlvExtensionSVG,FntExtensionSVG:()=>o.FntExtensionSVG,FolderAddFilledInterfaceSVG:()=>s.FolderAddFilledInterfaceSVG,FolderAddFilledSVG:()=>e.FolderAddFilledSVG,FolderAddOutlineInterfaceSVG:()=>s.FolderAddOutlineInterfaceSVG,FolderAddOutlineSVG:()=>e.FolderAddOutlineSVG,FolderInterfaceSVG:()=>s.FolderInterfaceSVG,FolderOpenSVG:()=>d.FolderOpenSVG,FolderSVG:()=>d.FolderSVG,FolderUploadFilledInterfaceSVG:()=>s.FolderUploadFilledInterfaceSVG,FolderUploadFilledSVG:()=>e.FolderUploadFilledSVG,FolderUploadOutlineInterfaceSVG:()=>s.FolderUploadOutlineInterfaceSVG,FolderUploadOutlineSVG:()=>e.FolderUploadOutlineSVG,FonExtensionSVG:()=>o.FonExtensionSVG,FranceSVG:()=>t.FranceSVG,FrenchPolynesiaSVG:()=>t.FrenchPolynesiaSVG,FullScreenSVG:()=>e.FullScreenSVG,FunctionGraphSVG:()=>n.FunctionGraphSVG,FunctionServiceSVG:()=>c.FunctionServiceSVG,FunctionSettingsSVG:()=>d.FunctionSettingsSVG,GamExtensionSVG:()=>o.GamExtensionSVG,GatekeeperLogoSVG:()=>i.GatekeeperLogoSVG,GatewaySVG:()=>e.GatewaySVG,GbrExtensionSVG:()=>o.GbrExtensionSVG,GedExtensionSVG:()=>o.GedExtensionSVG,GeminiLogoSVG:()=>i.GeminiLogoSVG,GenerationCodeSVG:()=>e.GenerationCodeSVG,GeorgiaSVG:()=>t.GeorgiaSVG,GermanySVG:()=>t.GermanySVG,GhanaSVG:()=>t.GhanaSVG,GibraltarSVG:()=>t.GibraltarSVG,GifExtensionSVG:()=>o.GifExtensionSVG,GigaChatLogoSVG:()=>i.GigaChatLogoSVG,GitHubLogoSVG:()=>i.GitHubLogoSVG,GitSVG:()=>n.GitSVG,GitVerseLogoSVG:()=>i.GitVerseLogoSVG,GitVerseSVG:()=>e.GitVerseSVG,GitabSVG:()=>n.GitabSVG,GitlabCiSVG:()=>n.GitlabCiSVG,GitlabLogoSVG:()=>i.GitlabLogoSVG,GitlabServiceSVG:()=>c.GitlabServiceSVG,GlobeSVG:()=>e.GlobeSVG,GlobeShieldSVG:()=>e.GlobeShieldSVG,GoLogoSVG:()=>i.GoLogoSVG,GoSVG:()=>n.GoSVG,GolosLogoSVG:()=>i.GolosLogoSVG,GoogleAdsLogoSVG:()=>i.GoogleAdsLogoSVG,GoogleAnalyticsLogoSVG:()=>i.GoogleAnalyticsLogoSVG,GoogleChromeBrowserLogoSVG:()=>i.GoogleChromeBrowserLogoSVG,GoogleCloudPlatformLogoSVG:()=>i.GoogleCloudPlatformLogoSVG,GoogleCloudStorageLogoSVG:()=>i.GoogleCloudStorageLogoSVG,GoogleSheetsLogoSVG:()=>i.GoogleSheetsLogoSVG,GoogleadManagerLogoSVG:()=>i.GoogleadManagerLogoSVG,GpuInterfaceSVG:()=>s.GpuInterfaceSVG,GpuResourcesSVG:()=>n.GpuResourcesSVG,GpuSVG:()=>e.GpuSVG,GpxExtensionSVG:()=>o.GpxExtensionSVG,GrafanaSVG:()=>n.GrafanaSVG,GraphEngineServiceSVG:()=>n.GraphEngineServiceSVG,GreeceSVG:()=>t.GreeceSVG,GreenplumDatbaseSVG:()=>n.GreenplumDatbaseSVG,GroupServiceSVG:()=>c.GroupServiceSVG,GuatemalaSVG:()=>t.GuatemalaSVG,GuernseySVG:()=>t.GuernseySVG,GuineaSVG:()=>t.GuineaSVG,GuyanaSVG:()=>t.GuyanaSVG,GzExtensionSVG:()=>o.GzExtensionSVG,GzipExtensionSVG:()=>o.GzipExtensionSVG,HaProxySVG:()=>n.HaProxySVG,HabrSVG:()=>e.HabrSVG,HadoopMapReduceSVG:()=>n.HadoopMapReduceSVG,HaitiSVG:()=>t.HaitiSVG,HandLikeSVG:()=>e.HandLikeSVG,HandshakeSVG:()=>e.HandshakeSVG,HardDiskSVG:()=>e.HardDiskSVG,HardDriveSVG:()=>e.HardDriveSVG,HdfsLogoSVG:()=>i.HdfsLogoSVG,HeadphonesMicrophoneSVG:()=>e.HeadphonesMicrophoneSVG,HeadphonesSVG:()=>e.HeadphonesSVG,HeartFilledInterfaceSVG:()=>s.HeartFilledInterfaceSVG,HeartFilledSVG:()=>d.HeartFilledSVG,HeartOutlineInterfaceSVG:()=>s.HeartOutlineInterfaceSVG,HeartSVG:()=>d.HeartSVG,HelmChartInterfaceSVG:()=>s.HelmChartInterfaceSVG,HelmLogoSVG:()=>i.HelmLogoSVG,HighloadShopServiceSVG:()=>c.HighloadShopServiceSVG,HistoryOfPipelineLaunchesSVG:()=>n.HistoryOfPipelineLaunchesSVG,HistorySVG:()=>e.HistorySVG,HiveLogoSVG:()=>i.HiveLogoSVG,HomeFilledSVG:()=>e.HomeFilledSVG,HomeInterfaceSVG:()=>s.HomeInterfaceSVG,HomeOutlineInterfaceSVG:()=>s.HomeOutlineInterfaceSVG,HomeSVG:()=>d.HomeSVG,HondurasSVG:()=>t.HondurasSVG,HongKongSVG:()=>t.HongKongSVG,HorizontalMenuCloseInterfaceSVG:()=>s.HorizontalMenuCloseInterfaceSVG,HorizontalMenuCloseSVG:()=>e.HorizontalMenuCloseSVG,HorizontalMenuOpenInterfaceSVG:()=>s.HorizontalMenuOpenInterfaceSVG,HorizontalMenuOpenSVG:()=>e.HorizontalMenuOpenSVG,HorovodLogoSVG:()=>i.HorovodLogoSVG,HostSecurityServiceSVG:()=>n.HostSecurityServiceSVG,HqzExtensionSVG:()=>o.HqzExtensionSVG,HrSVG:()=>e.HrSVG,HtmlExtensionSVG:()=>o.HtmlExtensionSVG,HuggingFaceSVG:()=>n.HuggingFaceSVG,HuggingfaceLogoSVG:()=>i.HuggingfaceLogoSVG,HungarySVG:()=>t.HungarySVG,HybridCloudSVG:()=>e.HybridCloudSVG,HypervisorSVG:()=>e.HypervisorSVG,IaaSCloudSVG:()=>e.IaaSCloudSVG,IbooksExtensionSVG:()=>o.IbooksExtensionSVG,IcelandSVG:()=>t.IcelandSVG,IcnsExtensionSVG:()=>o.IcnsExtensionSVG,IcoExtensionSVG:()=>o.IcoExtensionSVG,IcsExtensionSVG:()=>o.IcsExtensionSVG,IdentityAndAccessManagementSVG:()=>n.IdentityAndAccessManagementSVG,IffExtensionSVG:()=>o.IffExtensionSVG,ImageManagementServiceSVG:()=>n.ImageManagementServiceSVG,ImagesSVG:()=>n.ImagesSVG,ImagesServiceSVG:()=>c.ImagesServiceSVG,ImportSVG:()=>e.ImportSVG,InddExtensionSVG:()=>o.InddExtensionSVG,IndextsLogoSVG:()=>i.IndextsLogoSVG,IndiaSVG:()=>t.IndiaSVG,IndonesiaSVG:()=>t.IndonesiaSVG,IndustrialBuildingSVG:()=>e.IndustrialBuildingSVG,InfoFilledSVG:()=>d.InfoFilledSVG,InfoInterfaceSVG:()=>s.InfoInterfaceSVG,InfoOutlineInterfaceSVG:()=>s.InfoOutlineInterfaceSVG,InfoOutlineSVG:()=>e.InfoOutlineSVG,InfrastructureServiceSVG:()=>c.InfrastructureServiceSVG,InstanceSVG:()=>e.InstanceSVG,IntegrationWithSiemSVG:()=>n.IntegrationWithSiemSVG,IntelOneApiServiceSVG:()=>c.IntelOneApiServiceSVG,InternetInterfaceSVG:()=>s.InternetInterfaceSVG,InternetSVG:()=>e.InternetSVG,IranSVG:()=>t.IranSVG,IraqSVG:()=>t.IraqSVG,IrelandSVG:()=>t.IrelandSVG,IsleOfManSVG:()=>t.IsleOfManSVG,IsoExtensionSVG:()=>o.IsoExtensionSVG,IsraelSVG:()=>t.IsraelSVG,IstioLogoSVG:()=>i.IstioLogoSVG,IstioSVG:()=>n.IstioSVG,ItalySVG:()=>t.ItalySVG,JapanSVG:()=>t.JapanSVG,JarExtensionSVG:()=>o.JarExtensionSVG,JavaLogoSVG:()=>i.JavaLogoSVG,JazzLogoSVG:()=>i.JazzLogoSVG,JenkinsLogoSVG:()=>i.JenkinsLogoSVG,JoomlaLogoSVG:()=>i.JoomlaLogoSVG,JordanSVG:()=>t.JordanSVG,JpgExtensionSVG:()=>o.JpgExtensionSVG,JsExtensionSVG:()=>o.JsExtensionSVG,JspExtensionSVG:()=>o.JspExtensionSVG,JupiterLogoSVG:()=>i.JupiterLogoSVG,JupiterServerServiceSVG:()=>c.JupiterServerServiceSVG,JupyterServersSVG:()=>n.JupyterServersSVG,K8scleanerLogoSVG:()=>i.K8scleanerLogoSVG,K8sgptLogoSVG:()=>i.K8sgptLogoSVG,KafkaSVG:()=>n.KafkaSVG,KafkaServiceSVG:()=>c.KafkaServiceSVG,KaggleLogoSVG:()=>i.KaggleLogoSVG,KatadeployLogoSVG:()=>i.KatadeployLogoSVG,KazakhstanSVG:()=>t.KazakhstanSVG,KebabSVG:()=>d.KebabSVG,KenyaSVG:()=>t.KenyaSVG,KeyExtensionSVG:()=>o.KeyExtensionSVG,KeyInterfaceSVG:()=>s.KeyInterfaceSVG,KeyManagementSVG:()=>n.KeyManagementSVG,KeySVG:()=>e.KeySVG,KibanaSVG:()=>n.KibanaSVG,KiribatiSVG:()=>t.KiribatiSVG,KiteSVG:()=>e.KiteSVG,KmlExtensionSVG:()=>o.KmlExtensionSVG,KmzExtensionSVG:()=>o.KmzExtensionSVG,KosovoSVG:()=>t.KosovoSVG,KotlinLogoSVG:()=>i.KotlinLogoSVG,KuberLogoSVG:()=>i.KuberLogoSVG,KubernetesApiSVG:()=>n.KubernetesApiSVG,KubernetesCRoleSVG:()=>n.KubernetesCRoleSVG,KubernetesCcmSVG:()=>n.KubernetesCcmSVG,KubernetesCmListSVG:()=>n.KubernetesCmListSVG,KubernetesCmSVG:()=>n.KubernetesCmSVG,KubernetesCrbSVG:()=>n.KubernetesCrbSVG,KubernetesCrdSVG:()=>n.KubernetesCrdSVG,KubernetesCronJobSVG:()=>n.KubernetesCronJobSVG,KubernetesDeploySVG:()=>n.KubernetesDeploySVG,KubernetesDeployServiceSVG:()=>c.KubernetesDeployServiceSVG,KubernetesDsSVG:()=>n.KubernetesDsSVG,KubernetesEpSVG:()=>n.KubernetesEpSVG,KubernetesEtcdSVG:()=>n.KubernetesEtcdSVG,KubernetesGroupSVG:()=>n.KubernetesGroupSVG,KubernetesHpaSVG:()=>n.KubernetesHpaSVG,KubernetesIngSVG:()=>n.KubernetesIngSVG,KubernetesJobSVG:()=>n.KubernetesJobSVG,KubernetesKproxySVG:()=>n.KubernetesKproxySVG,KubernetesKubeletSVG:()=>n.KubernetesKubeletSVG,KubernetesLimitsSVG:()=>n.KubernetesLimitsSVG,KubernetesNetpolSVG:()=>n.KubernetesNetpolSVG,KubernetesNodeSVG:()=>n.KubernetesNodeSVG,KubernetesNodeTitleSVG:()=>n.KubernetesNodeTitleSVG,KubernetesNsSVG:()=>n.KubernetesNsSVG,KubernetesPodSVG:()=>n.KubernetesPodSVG,KubernetesPspSVG:()=>n.KubernetesPspSVG,KubernetesPvSVG:()=>n.KubernetesPvSVG,KubernetesPvcSVG:()=>n.KubernetesPvcSVG,KubernetesQuotaSVG:()=>n.KubernetesQuotaSVG,KubernetesRbSVG:()=>n.KubernetesRbSVG,KubernetesRoleSVG:()=>n.KubernetesRoleSVG,KubernetesRsSVG:()=>n.KubernetesRsSVG,KubernetesSVG:()=>n.KubernetesSVG,KubernetesSaSVG:()=>n.KubernetesSaSVG,KubernetesScSVG:()=>n.KubernetesScSVG,KubernetesSchedSVG:()=>n.KubernetesSchedSVG,KubernetesSchedTitleSVG:()=>n.KubernetesSchedTitleSVG,KubernetesSecretSVG:()=>n.KubernetesSecretSVG,KubernetesStsSVG:()=>n.KubernetesStsSVG,KubernetesSvcSVG:()=>n.KubernetesSvcSVG,KubernetesUserSVG:()=>n.KubernetesUserSVG,KubestatemetricsLogoSVG:()=>i.KubestatemetricsLogoSVG,KyrgyzstanSVG:()=>t.KyrgyzstanSVG,KyvernoLogoSVG:()=>i.KyvernoLogoSVG,LabelProjectServiceSVG:()=>c.LabelProjectServiceSVG,LabelServiceSVG:()=>c.LabelServiceSVG,LaptopPhoneSVG:()=>d.LaptopPhoneSVG,LaptopPulseSVG:()=>e.LaptopPulseSVG,LaptopSVG:()=>e.LaptopSVG,LatticeSVG:()=>e.LatticeSVG,LatviaSVG:()=>t.LatviaSVG,LebanonSVG:()=>t.LebanonSVG,LempLogoSVG:()=>i.LempLogoSVG,LesothoSVG:()=>t.LesothoSVG,LibyaSVG:()=>t.LibyaSVG,LicensesOfBasaltSpoProductsSVG:()=>n.LicensesOfBasaltSpoProductsSVG,LiechtensteinSVG:()=>t.LiechtensteinSVG,LifebuoySVG:()=>e.LifebuoySVG,LikeFilledInterfaceSVG:()=>s.LikeFilledInterfaceSVG,LikeFilledSVG:()=>e.LikeFilledSVG,LikeOutlineInterfaceSVG:()=>s.LikeOutlineInterfaceSVG,LikeOutlineSVG:()=>e.LikeOutlineSVG,LineManagerSVG:()=>e.LineManagerSVG,LinkDisconnectSVG:()=>e.LinkDisconnectSVG,LinkInterfaceSVG:()=>s.LinkInterfaceSVG,LinkSVG:()=>e.LinkSVG,LinuxSVG:()=>n.LinuxSVG,ListInterfaceSVG:()=>s.ListInterfaceSVG,ListSVG:()=>e.ListSVG,LithuaniaSVG:()=>t.LithuaniaSVG,LlmSVG:()=>e.LlmSVG,LnkExtensionSVG:()=>o.LnkExtensionSVG,LoadBalancerGeneralSVG:()=>n.LoadBalancerGeneralSVG,LoadBalancerSVG:()=>n.LoadBalancerSVG,LoadBalancerServiceSVG:()=>c.LoadBalancerServiceSVG,LoadingWheelInterfaceSVG:()=>s.LoadingWheelInterfaceSVG,LocalNetworkSVG:()=>e.LocalNetworkSVG,LocalUserSVG:()=>e.LocalUserSVG,LocationSVG:()=>e.LocationSVG,LockInterfaceSVG:()=>s.LockInterfaceSVG,LockSVG:()=>e.LockSVG,LogExtensionSVG:()=>o.LogExtensionSVG,LogFileSVG:()=>e.LogFileSVG,LogGroupsSVG:()=>n.LogGroupsSVG,LogStashSVG:()=>n.LogStashSVG,LogTankServiceSVG:()=>n.LogTankServiceSVG,LoggingAuditSVG:()=>n.LoggingAuditSVG,LogsInterfaceSVG:()=>s.LogsInterfaceSVG,LogsSVG:()=>e.LogsSVG,LuaExtensionSVG:()=>o.LuaExtensionSVG,LuxembourgSVG:()=>t.LuxembourgSVG,M3UExtensionSVG:()=>o.M3UExtensionSVG,M4AExtensionSVG:()=>o.M4AExtensionSVG,M4VExtensionSVG:()=>o.M4VExtensionSVG,MachExtensionSVG:()=>o.MachExtensionSVG,MadagascarSVG:()=>t.MadagascarSVG,MagicRouterSVG:()=>n.MagicRouterSVG,MailInterfaceSVG:()=>s.MailInterfaceSVG,MainMenuInterfaceSVG:()=>s.MainMenuInterfaceSVG,MainMenuSVG:()=>e.MainMenuSVG,MalaysiaSVG:()=>t.MalaysiaSVG,MaldivesSVG:()=>t.MaldivesSVG,MaliSVG:()=>t.MaliSVG,MaltaSVG:()=>t.MaltaSVG,ManagedClickHouseSVG:()=>n.ManagedClickHouseSVG,ManagedCoraxSVG:()=>n.ManagedCoraxSVG,ManagedDataGridSVG:()=>n.ManagedDataGridSVG,ManagedDocumentDbSVG:()=>n.ManagedDocumentDbSVG,ManagedKafkaSVG:()=>n.ManagedKafkaSVG,ManagedKubernetesSVG:()=>n.ManagedKubernetesSVG,ManagedKubernetesServiceSVG:()=>c.ManagedKubernetesServiceSVG,ManagedMySqlSVG:()=>n.ManagedMySqlSVG,ManagedPangolinSVG:()=>n.ManagedPangolinSVG,ManagedPostgreSqlSVG:()=>n.ManagedPostgreSqlSVG,ManagedRabbitMqSVG:()=>n.ManagedRabbitMqSVG,ManagedRagSVG:()=>n.ManagedRagSVG,ManagedRedisSVG:()=>n.ManagedRedisSVG,ManagedSearchSVG:()=>n.ManagedSearchSVG,ManagedServiceForRedisLogoSVG:()=>i.ManagedServiceForRedisLogoSVG,ManagedServicesSVG:()=>n.ManagedServicesSVG,ManagedTimescaleDbSVG:()=>n.ManagedTimescaleDbSVG,ManagementServiceSVG:()=>c.ManagementServiceSVG,ManyServicesSVG:()=>e.ManyServicesSVG,MapPlaneSVG:()=>e.MapPlaneSVG,MapReduceServiceSVG:()=>n.MapReduceServiceSVG,MariaDbSVG:()=>n.MariaDbSVG,MarketSVG:()=>e.MarketSVG,MarketplaceSVG:()=>n.MarketplaceSVG,MattermostLogoSVG:()=>i.MattermostLogoSVG,MauritaniaSVG:()=>t.MauritaniaSVG,MauritiusSVG:()=>t.MauritiusSVG,MaxExtensionSVG:()=>o.MaxExtensionSVG,MaxLogoSVG:()=>i.MaxLogoSVG,MayotteSVG:()=>t.MayotteSVG,McpServerSVG:()=>n.McpServerSVG,MdbExtensionSVG:()=>o.MdbExtensionSVG,MdfExtensionSVG:()=>o.MdfExtensionSVG,MediaSVG:()=>e.MediaSVG,MedicalSVG:()=>e.MedicalSVG,MedicineSVG:()=>e.MedicineSVG,MentionServiceSVG:()=>c.MentionServiceSVG,MenuCloseFullInterfaceSVG:()=>s.MenuCloseFullInterfaceSVG,MenuCloseFullSVG:()=>e.MenuCloseFullSVG,MenuCloseInterfaceSVG:()=>s.MenuCloseInterfaceSVG,MenuOpenedInterfaceSVG:()=>s.MenuOpenedInterfaceSVG,MenuPinInterfaceSVG:()=>s.MenuPinInterfaceSVG,MenuUnpinInterfaceSVG:()=>s.MenuUnpinInterfaceSVG,MertricSVG:()=>e.MertricSVG,MessageBrokersServiceSVG:()=>c.MessageBrokersServiceSVG,MessagePlaySVG:()=>e.MessagePlaySVG,MetastoreSVG:()=>n.MetastoreSVG,MetastoreServiceSVG:()=>c.MetastoreServiceSVG,MicrophoneRoundSVG:()=>e.MicrophoneRoundSVG,MicrophoneSVG:()=>e.MicrophoneSVG,MicrosoftNetSVG:()=>n.MicrosoftNetSVG,MidExtensionSVG:()=>o.MidExtensionSVG,MigrationInTheCloudVMwareSVG:()=>n.MigrationInTheCloudVMwareSVG,MigrationMySqlServiceSVG:()=>c.MigrationMySqlServiceSVG,MigrationSVG:()=>n.MigrationSVG,MigrationToAdvancedSVG:()=>n.MigrationToAdvancedSVG,MilvusDbSVG:()=>n.MilvusDbSVG,MimExtensionSVG:()=>o.MimExtensionSVG,MindContollerSVG:()=>n.MindContollerSVG,MinimizeWindowSVG:()=>e.MinimizeWindowSVG,MinusSVG:()=>d.MinusSVG,MistralAiLogoSVG:()=>i.MistralAiLogoSVG,MistralSVG:()=>n.MistralSVG,MlFlowSVG:()=>n.MlFlowSVG,MlInferenceSVG:()=>n.MlInferenceSVG,MlSpaceFullLogoSVG:()=>i.MlSpaceFullLogoSVG,MlSpaceLogoSVG:()=>i.MlSpaceLogoSVG,MlSpaceSVG:()=>n.MlSpaceSVG,MlSpaceServiceSVG:()=>c.MlSpaceServiceSVG,MlflowLogoSVG:()=>i.MlflowLogoSVG,MlsCliSVG:()=>n.MlsCliSVG,MobilePhoneSVG:()=>e.MobilePhoneSVG,ModelInterfaceSVG:()=>s.ModelInterfaceSVG,ModelMonitoringSVG:()=>n.ModelMonitoringSVG,ModelRegistrySVG:()=>n.ModelRegistrySVG,ModelRegistryServiceSVG:()=>c.ModelRegistryServiceSVG,ModelSettingServiceSVG:()=>c.ModelSettingServiceSVG,ModelThinkingSVG:()=>e.ModelThinkingSVG,ModelsMonitoringServiceSVG:()=>c.ModelsMonitoringServiceSVG,ModxLogoSVG:()=>i.ModxLogoSVG,MoldovaSVG:()=>t.MoldovaSVG,MonacoSVG:()=>t.MonacoSVG,MoneyInterfaceSVG:()=>s.MoneyInterfaceSVG,MongoDbSVG:()=>n.MongoDbSVG,MongoServiceSVG:()=>c.MongoServiceSVG,MonitorCloudSVG:()=>e.MonitorCloudSVG,MonitorSVG:()=>e.MonitorSVG,MonitorTest1SVG:()=>e.MonitorTest1SVG,MonitorTestSVG:()=>e.MonitorTestSVG,MonitoringSVG:()=>e.MonitoringSVG,MonitoringServiceSVG:()=>c.MonitoringServiceSVG,MontenegroSVG:()=>t.MontenegroSVG,MoreInterfaceSVG:()=>s.MoreInterfaceSVG,MoreSVG:()=>d.MoreSVG,MoroccoSVG:()=>t.MoroccoSVG,MountainsSVG:()=>e.MountainsSVG,MovExtensionSVG:()=>o.MovExtensionSVG,MozambiqueSVG:()=>t.MozambiqueSVG,Mp3ExtensionSVG:()=>o.Mp3ExtensionSVG,Mp4ExtensionSVG:()=>o.Mp4ExtensionSVG,MpaExtensionSVG:()=>o.MpaExtensionSVG,MpgExtensionSVG:()=>o.MpgExtensionSVG,MsSqlLogoSVG:()=>i.MsSqlLogoSVG,MsgExtensionSVG:()=>o.MsgExtensionSVG,MsiExtensionSVG:()=>o.MsiExtensionSVG,MssqlSVG:()=>n.MssqlSVG,MultiCloudSVG:()=>e.MultiCloudSVG,MyCompanyProfileSVG:()=>n.MyCompanyProfileSVG,MyDeploymentsServiceSVG:()=>c.MyDeploymentsServiceSVG,MyImagesServiceSVG:()=>c.MyImagesServiceSVG,MyOfficeSVG:()=>n.MyOfficeSVG,MyRequestServiceSVG:()=>c.MyRequestServiceSVG,MyanmarSVG:()=>t.MyanmarSVG,MysqlLogoSVG:()=>i.MysqlLogoSVG,N8NSVG:()=>n.N8NSVG,N8nLogoSVG:()=>i.N8nLogoSVG,NamibiaSVG:()=>t.NamibiaSVG,NasSVG:()=>e.NasSVG,NatGatewaySVG:()=>n.NatGatewaySVG,NesExtensionSVG:()=>o.NesExtensionSVG,NetherlandsSVG:()=>t.NetherlandsSVG,NetralSVG:()=>e.NetralSVG,NetworkCardSVG:()=>e.NetworkCardSVG,NetworkServiceSVG:()=>c.NetworkServiceSVG,NewCaledoniaSVG:()=>t.NewCaledoniaSVG,NewZealandSVG:()=>t.NewZealandSVG,NginxIngressLogoSVG:()=>i.NginxIngressLogoSVG,NginxLogoSVG:()=>i.NginxLogoSVG,NicaraguaSVG:()=>t.NicaraguaSVG,NigerSVG:()=>t.NigerSVG,NigeriaSVG:()=>t.NigeriaSVG,NightSVG:()=>d.NightSVG,NoPhoneInterfaceSVG:()=>s.NoPhoneInterfaceSVG,NoPhoneSVG:()=>e.NoPhoneSVG,NodeJsSVG:()=>n.NodeJsSVG,NodeexporterLogoSVG:()=>i.NodeexporterLogoSVG,NodejsLogoSVG:()=>i.NodejsLogoSVG,NorfolkIslandSVG:()=>t.NorfolkIslandSVG,NormalScreenSVG:()=>e.NormalScreenSVG,NorthMacedoniaSVG:()=>t.NorthMacedoniaSVG,NorwaySVG:()=>t.NorwaySVG,NotificationSVG:()=>n.NotificationSVG,NotificationServiceSVG:()=>c.NotificationServiceSVG,NotifyInterfaceSVG:()=>s.NotifyInterfaceSVG,NpmLogoSVG:()=>i.NpmLogoSVG,NsxVMwareSVG:()=>n.NsxVMwareSVG,NumberOneAiSVG:()=>e.NumberOneAiSVG,NumberOneIaasPaasSVG:()=>e.NumberOneIaasPaasSVG,NumberedListSVG:()=>e.NumberedListSVG,NutnixSVG:()=>n.NutnixSVG,NvidiaLogoSVG:()=>i.NvidiaLogoSVG,NvidiaNemoLogoSVG:()=>i.NvidiaNemoLogoSVG,ObjExtensionSVG:()=>o.ObjExtensionSVG,ObjectContainerSVG:()=>n.ObjectContainerSVG,ObjectStorageSVG:()=>e.ObjectStorageSVG,ObjectStorageServiceSVG:()=>n.ObjectStorageServiceSVG,ObjectsSVG:()=>e.ObjectsSVG,OciLogoInterfaceSVG:()=>s.OciLogoInterfaceSVG,OdbExtensionSVG:()=>o.OdbExtensionSVG,OdcExtensionSVG:()=>o.OdcExtensionSVG,OdfExtensionSVG:()=>o.OdfExtensionSVG,OdgExtensionSVG:()=>o.OdgExtensionSVG,OdiExtensionSVG:()=>o.OdiExtensionSVG,OdpExtensionSVG:()=>o.OdpExtensionSVG,OdsExtensionSVG:()=>o.OdsExtensionSVG,OdtExtensionSVG:()=>o.OdtExtensionSVG,OdxExtensionSVG:()=>o.OdxExtensionSVG,OfficeTableSVG:()=>e.OfficeTableSVG,OggExtensionSVG:()=>o.OggExtensionSVG,OllamaSVG:()=>n.OllamaSVG,OmanSVG:()=>t.OmanSVG,OnPremiseSVG:()=>e.OnPremiseSVG,OnboardingServiceSVG:()=>c.OnboardingServiceSVG,OpenAiChatGptLogoSVG:()=>i.OpenAiChatGptLogoSVG,OpenAiSVG:()=>n.OpenAiSVG,OpenApiSVG:()=>n.OpenApiSVG,OpenContainerInitiativeLogoSVG:()=>i.OpenContainerInitiativeLogoSVG,OpenSearchSVG:()=>n.OpenSearchSVG,OpenSidebarSVG:()=>e.OpenSidebarSVG,OpenStackLogoSVG:()=>i.OpenStackLogoSVG,OpenSuseLogoSVG:()=>i.OpenSuseLogoSVG,OpencartLogoSVG:()=>i.OpencartLogoSVG,OperationSystemSVG:()=>e.OperationSystemSVG,OracleLinuxLogoSVG:()=>i.OracleLinuxLogoSVG,OracleLogoSVG:()=>i.OracleLogoSVG,OracleSVG:()=>n.OracleSVG,OrasLogoSVG:()=>i.OrasLogoSVG,OrganizationSVG:()=>e.OrganizationSVG,OstontrolSVG:()=>e.OstontrolSVG,OtfExtensionSVG:()=>o.OtfExtensionSVG,OverviewInterfaceSVG:()=>s.OverviewInterfaceSVG,OverviewSVG:()=>e.OverviewSVG,OverviewServiceSVG:()=>c.OverviewServiceSVG,OvirtLogoSVG:()=>i.OvirtLogoSVG,PaaSCloudSVG:()=>e.PaaSCloudSVG,PagesExtensionSVG:()=>o.PagesExtensionSVG,PalestineSVG:()=>t.PalestineSVG,PalmSVG:()=>e.PalmSVG,PangolinServiceSVG:()=>c.PangolinServiceSVG,ParaguaySVG:()=>t.ParaguaySVG,PartnerAccountSVG:()=>n.PartnerAccountSVG,PartnerMaterialsSVG:()=>n.PartnerMaterialsSVG,PasskeyFingerprintSVG:()=>e.PasskeyFingerprintSVG,PasswordLockSVG:()=>e.PasswordLockSVG,PauseInterfaceSVG:()=>s.PauseInterfaceSVG,PausePlayerSVG:()=>e.PausePlayerSVG,PauseSVG:()=>d.PauseSVG,PctExtensionSVG:()=>o.PctExtensionSVG,PdbExtensionSVG:()=>o.PdbExtensionSVG,PdfExtensionSVG:()=>o.PdfExtensionSVG,PercentSVG:()=>e.PercentSVG,PerplexityLogoSVG:()=>i.PerplexityLogoSVG,PeruSVG:()=>t.PeruSVG,PhotoInterfaceSVG:()=>s.PhotoInterfaceSVG,PhotoSVG:()=>e.PhotoSVG,PhotoshopExtensionSVG:()=>o.PhotoshopExtensionSVG,PhysicalStorageSVG:()=>e.PhysicalStorageSVG,PifExtensionSVG:()=>o.PifExtensionSVG,PinnedSVG:()=>d.PinnedSVG,Pipelines2ServiceSVG:()=>c.Pipelines2ServiceSVG,PipelinesGroupsStartsServiceSVG:()=>c.PipelinesGroupsStartsServiceSVG,PipelinesSVG:()=>n.PipelinesSVG,PkgExtensionSVG:()=>o.PkgExtensionSVG,PlExtensionSVG:()=>o.PlExtensionSVG,PlaceholderSVG:()=>d.PlaceholderSVG,PlanSVG:()=>e.PlanSVG,PlaneSVG:()=>e.PlaneSVG,PlatformServiceSVG:()=>c.PlatformServiceSVG,PlatformvLogoSVG:()=>i.PlatformvLogoSVG,PlayInterfaceSVG:()=>s.PlayInterfaceSVG,PlayPlayerSVG:()=>e.PlayPlayerSVG,PlaySVG:()=>d.PlaySVG,PlusInterfaceSVG:()=>s.PlusInterfaceSVG,PlusRoundSVG:()=>e.PlusRoundSVG,PlusSVG:()=>d.PlusSVG,PlusSquareInterfaceSVG:()=>s.PlusSquareInterfaceSVG,PlusSquareSVG:()=>e.PlusSquareSVG,PngExtensionSVG:()=>o.PngExtensionSVG,PolandSVG:()=>t.PolandSVG,PortalInterfaceSVG:()=>s.PortalInterfaceSVG,PortugalSVG:()=>t.PortugalSVG,PostgreLogoSVG:()=>i.PostgreLogoSVG,PostgreSqlServiceSVG:()=>c.PostgreSqlServiceSVG,PowerBiSVG:()=>n.PowerBiSVG,PowerOffSVG:()=>e.PowerOffSVG,PpsExtensionSVG:()=>o.PpsExtensionSVG,PptExtensionSVG:()=>o.PptExtensionSVG,PptxExtensionSVG:()=>o.PptxExtensionSVG,PresentSVG:()=>e.PresentSVG,PriorityHighSVG:()=>e.PriorityHighSVG,PriorityLowSVG:()=>e.PriorityLowSVG,PriorityMediumSVG:()=>e.PriorityMediumSVG,PrioritySharedClusterSVG:()=>e.PrioritySharedClusterSVG,PrioritySharedLowSVG:()=>e.PrioritySharedLowSVG,PrioritySharedMediumSVG:()=>e.PrioritySharedMediumSVG,ProductManagerSVG:()=>e.ProductManagerSVG,ProfileServiceSVG:()=>c.ProfileServiceSVG,ProgressWheelSVG:()=>e.ProgressWheelSVG,ProjectInterfaceSVG:()=>s.ProjectInterfaceSVG,ProjectSVG:()=>e.ProjectSVG,PrometeusSVG:()=>n.PrometeusSVG,PromptSVG:()=>e.PromptSVG,ProxmoxLogoSVG:()=>i.ProxmoxLogoSVG,PsExtensionSVG:()=>o.PsExtensionSVG,PubExtensionSVG:()=>o.PubExtensionSVG,PublicCloudSVG:()=>e.PublicCloudSVG,PublicIpSVG:()=>n.PublicIpSVG,PublicIpServiceSVG:()=>c.PublicIpServiceSVG,PurchasesSVG:()=>e.PurchasesSVG,PurchasesServiceSVG:()=>c.PurchasesServiceSVG,PuzzleSVG:()=>e.PuzzleSVG,PuzzlesSVG:()=>e.PuzzlesSVG,PyExtensionSVG:()=>o.PyExtensionSVG,PythonLogoSVG:()=>i.PythonLogoSVG,PytonSVG:()=>n.PytonSVG,PytorchLogoSVG:()=>i.PytorchLogoSVG,QCloudServiceSVG:()=>c.QCloudServiceSVG,QatarSVG:()=>t.QatarSVG,QrCodeSVG:()=>e.QrCodeSVG,QuestionBigInterfaceSVG:()=>s.QuestionBigInterfaceSVG,QuestionFilledSVG:()=>e.QuestionFilledSVG,QuestionInterfaceSVG:()=>s.QuestionInterfaceSVG,QuestionRoundSVG:()=>e.QuestionRoundSVG,QuestionSVG:()=>d.QuestionSVG,QuestionSmallOutlineInterfaceSVG:()=>s.QuestionSmallOutlineInterfaceSVG,QuotaSVG:()=>e.QuotaSVG,QuotasSVG:()=>n.QuotasSVG,QuotasServiceSVG:()=>c.QuotasServiceSVG,QwenLogoSVG:()=>i.QwenLogoSVG,QwenSVG:()=>n.QwenSVG,RPMLogoSVG:()=>i.RPMLogoSVG,RaExtensionSVG:()=>o.RaExtensionSVG,RabbitServiceSVG:()=>c.RabbitServiceSVG,RadioCheckedInterfaceSVG:()=>s.RadioCheckedInterfaceSVG,RadioUncheckedInterfaceSVG:()=>s.RadioUncheckedInterfaceSVG,RamSVG:()=>e.RamSVG,RarExtensionSVG:()=>o.RarExtensionSVG,RawExtensionSVG:()=>o.RawExtensionSVG,ReactLogoSVG:()=>i.ReactLogoSVG,RecordSVG:()=>e.RecordSVG,RedisSVG:()=>n.RedisSVG,RedisServiceSVG:()=>c.RedisServiceSVG,RedmineLogoSVG:()=>i.RedmineLogoSVG,RedshiftLogoSVG:()=>i.RedshiftLogoSVG,ReferralLinksSVG:()=>n.ReferralLinksSVG,ReferralsSVG:()=>n.ReferralsSVG,RefreshInterfaceSVG:()=>s.RefreshInterfaceSVG,RelationalDatabaseServiceSVG:()=>n.RelationalDatabaseServiceSVG,RentUsbPortsSVG:()=>n.RentUsbPortsSVG,RepeatSVG:()=>e.RepeatSVG,ReplacementSVG:()=>e.ReplacementSVG,RepositorySVG:()=>e.RepositorySVG,RequestServiceSVG:()=>c.RequestServiceSVG,ReserchTestSVG:()=>e.ReserchTestSVG,ResizeInputInterfaceSVG:()=>s.ResizeInputInterfaceSVG,ResizeSVG:()=>d.ResizeSVG,ResourceManagerSVG:()=>n.ResourceManagerSVG,RestoreSVG:()=>e.RestoreSVG,RewindAheadSVG:()=>e.RewindAheadSVG,RewindSVG:()=>e.RewindSVG,RmExtensionSVG:()=>o.RmExtensionSVG,RobotSVG:()=>e.RobotSVG,RocketInterfaceSVG:()=>s.RocketInterfaceSVG,RocketSVG:()=>e.RocketSVG,RockyLinuxLogoSVG:()=>i.RockyLinuxLogoSVG,RollupSVG:()=>e.RollupSVG,RomExtensionSVG:()=>o.RomExtensionSVG,RomaniaSVG:()=>t.RomaniaSVG,RosaOperationSystemSVG:()=>n.RosaOperationSystemSVG,RoundStarSVG:()=>e.RoundStarSVG,RoundUserGearSVG:()=>e.RoundUserGearSVG,RoundUserPlusSVG:()=>e.RoundUserPlusSVG,RoundUserSVG:()=>e.RoundUserSVG,RoundUserStarSVG:()=>e.RoundUserStarSVG,RouterSVG:()=>e.RouterSVG,RowExpandedInterfaceSVG:()=>s.RowExpandedInterfaceSVG,RowExpandedSVG:()=>e.RowExpandedSVG,RowExtendedInterfaceSVG:()=>s.RowExtendedInterfaceSVG,RowExtendedSVG:()=>e.RowExtendedSVG,RpmExtensionSVG:()=>o.RpmExtensionSVG,RssExtensionSVG:()=>o.RssExtensionSVG,RtfExtensionSVG:()=>o.RtfExtensionSVG,RuDalleLogoSVG:()=>i.RuDalleLogoSVG,RubleSVG:()=>e.RubleSVG,RubyStackLogoSVG:()=>i.RubyStackLogoSVG,RussiaSVG:()=>t.RussiaSVG,RustLogoSVG:()=>i.RustLogoSVG,RwandaSVG:()=>t.RwandaSVG,S3SVG:()=>n.S3SVG,S3StorageSVG:()=>n.S3StorageSVG,S3StorageServiceSVG:()=>c.S3StorageServiceSVG,SaaSCloudSVG:()=>e.SaaSCloudSVG,Sad2SVG:()=>e.Sad2SVG,SadSVG:()=>e.SadSVG,SafariBrowserLogoSVG:()=>i.SafariBrowserLogoSVG,SaintPierreAndMiquelonSVG:()=>t.SaintPierreAndMiquelonSVG,SanMarinoSVG:()=>t.SanMarinoSVG,SaoTomeAndPrincipeSVG:()=>t.SaoTomeAndPrincipeSVG,SapInTheCloudSVG:()=>n.SapInTheCloudSVG,SapSVG:()=>n.SapSVG,SatelliteSVG:()=>e.SatelliteSVG,SaudiArabiaSVG:()=>t.SaudiArabiaSVG,SavExtensionSVG:()=>o.SavExtensionSVG,SaveInterfaceSVG:()=>s.SaveInterfaceSVG,SaveSVG:()=>e.SaveSVG,SberBusinessLogoSVG:()=>i.SberBusinessLogoSVG,SberInterfaceSVG:()=>s.SberInterfaceSVG,SberLogoSVG:()=>i.SberLogoSVG,SberSVG:()=>e.SberSVG,SberprimeSVG:()=>e.SberprimeSVG,ScalableFileServiceSVG:()=>n.ScalableFileServiceSVG,ScalableLeftSVG:()=>d.ScalableLeftSVG,ScalableRightSVG:()=>d.ScalableRightSVG,SchoolBuildingSVG:()=>e.SchoolBuildingSVG,SdCardSVG:()=>e.SdCardSVG,SdfExtensionSVG:()=>o.SdfExtensionSVG,SearchInterfaceSVG:()=>s.SearchInterfaceSVG,SearchSVG:()=>d.SearchSVG,SecretManagementSVG:()=>n.SecretManagementSVG,SecurityGroupsSVG:()=>n.SecurityGroupsSVG,SecurityGroupsServiceSVG:()=>c.SecurityGroupsServiceSVG,SecuritySVG:()=>e.SecuritySVG,SendInterfaceSVG:()=>s.SendInterfaceSVG,SendSVG:()=>e.SendSVG,SenegalSVG:()=>t.SenegalSVG,SentosLogoSVG:()=>i.SentosLogoSVG,SerbiaSVG:()=>t.SerbiaSVG,ServeUploadSVG:()=>e.ServeUploadSVG,ServerDownloadSVG:()=>e.ServerDownloadSVG,ServerGlacierDeepSVG:()=>e.ServerGlacierDeepSVG,ServerGlacierSVG:()=>e.ServerGlacierSVG,ServerMigrationServiceSVG:()=>n.ServerMigrationServiceSVG,ServerSVG:()=>e.ServerSVG,ServerUploadSVG:()=>e.ServerUploadSVG,ServerlessContainersServiceSVG:()=>c.ServerlessContainersServiceSVG,ServerlessFunctionSVG:()=>n.ServerlessFunctionSVG,ServerlessFunctionServiceSVG:()=>c.ServerlessFunctionServiceSVG,ServerlessSVG:()=>n.ServerlessSVG,ServiceStageSVG:()=>n.ServiceStageSVG,ServicesSVG:()=>n.ServicesSVG,SettingsInterfaceSVG:()=>s.SettingsInterfaceSVG,SettingsSVG:()=>d.SettingsSVG,ShareInterfaceSVG:()=>s.ShareInterfaceSVG,ShareSVG:()=>e.ShareSVG,SharedStorageNfsSVG:()=>n.SharedStorageNfsSVG,ShieldArrowsSVG:()=>e.ShieldArrowsSVG,ShieldDataShieldSVG:()=>e.ShieldDataShieldSVG,ShieldDatacenterSVG:()=>e.ShieldDatacenterSVG,ShieldSVG:()=>e.ShieldSVG,ShopSVG:()=>e.ShopSVG,SierraLeoneSVG:()=>t.SierraLeoneSVG,SimpleMessageNotificationSVG:()=>n.SimpleMessageNotificationSVG,SingaporeSVG:()=>t.SingaporeSVG,SintMaartenSVG:()=>t.SintMaartenSVG,SiteWithDatabaseServiceSVG:()=>c.SiteWithDatabaseServiceSVG,SitxExtensionSVG:()=>o.SitxExtensionSVG,SlovakiaSVG:()=>t.SlovakiaSVG,SmartSearchBasedOnDataSVG:()=>e.SmartSearchBasedOnDataSVG,SmartwatchSVG:()=>e.SmartwatchSVG,Smile1InterfaceSVG:()=>s.Smile1InterfaceSVG,Smile2InterfaceSVG:()=>s.Smile2InterfaceSVG,Smile2SVG:()=>e.Smile2SVG,Smile3InterfaceSVG:()=>s.Smile3InterfaceSVG,Smile4InterfaceSVG:()=>s.Smile4InterfaceSVG,Smile5InterfaceSVG:()=>s.Smile5InterfaceSVG,SmileSVG:()=>e.SmileSVG,SnapshotSVG:()=>e.SnapshotSVG,SnatSVG:()=>n.SnatSVG,SnatServiceSVG:()=>c.SnatServiceSVG,SnowInterfaceSVG:()=>s.SnowInterfaceSVG,SnowSVG:()=>e.SnowSVG,SobrSVG:()=>e.SobrSVG,SoftwareRepositoryForContainersSVG:()=>n.SoftwareRepositoryForContainersSVG,SolutionsServiceSVG:()=>c.SolutionsServiceSVG,SomalilandSVG:()=>t.SomalilandSVG,SortDefaultInterfaceSVG:()=>s.SortDefaultInterfaceSVG,SortDefaultSVG:()=>e.SortDefaultSVG,SortDownInterfaceSVG:()=>s.SortDownInterfaceSVG,SortDownSVG:()=>e.SortDownSVG,SortSVG:()=>e.SortSVG,SortUpInterfaceSVG:()=>s.SortUpInterfaceSVG,SortUpSVG:()=>e.SortUpSVG,SoundOffSVG:()=>e.SoundOffSVG,SoundOnSVG:()=>e.SoundOnSVG,SoundSVG:()=>e.SoundSVG,SourceListInterfaceSVG:()=>s.SourceListInterfaceSVG,SouthAfricaSVG:()=>t.SouthAfricaSVG,SouthKoreaSVG:()=>t.SouthKoreaSVG,SouthSudanSVG:()=>t.SouthSudanSVG,SpainSVG:()=>t.SpainSVG,SparkLogoSVG:()=>i.SparkLogoSVG,SparkSVG:()=>n.SparkSVG,SparkServiceSVG:()=>c.SparkServiceSVG,SpeechBubbleSVG:()=>e.SpeechBubbleSVG,SpineSwitchSVG:()=>e.SpineSwitchSVG,Sprite:()=>u.k,SpriteSystemSVG:()=>p.a,SqlExtensionSVG:()=>o.SqlExtensionSVG,SquareDiagramSVG:()=>e.SquareDiagramSVG,SquarePointsSVG:()=>e.SquarePointsSVG,SriLankaSVG:()=>t.SriLankaSVG,SrtExtensionSVG:()=>o.SrtExtensionSVG,SsdSVG:()=>e.SsdSVG,SshSVG:()=>n.SshSVG,SshServiceSVG:()=>c.SshServiceSVG,StarFilledSVG:()=>d.StarFilledSVG,StarHalfSVG:()=>e.StarHalfSVG,StarSVG:()=>d.StarSVG,StarsMagicSVG:()=>e.StarsMagicSVG,StarsSVG:()=>e.StarsSVG,StatisticInterfaceSVG:()=>s.StatisticInterfaceSVG,Step1SVG:()=>e.Step1SVG,Step2SVG:()=>e.Step2SVG,Step3SVG:()=>e.Step3SVG,StopInterfaceSVG:()=>s.StopInterfaceSVG,StopSVG:()=>d.StopSVG,StopwatchSVG:()=>e.StopwatchSVG,StrongSwanLogoSVG:()=>i.StrongSwanLogoSVG,SubnetsSVG:()=>n.SubnetsSVG,SubnetsServiceSVG:()=>c.SubnetsServiceSVG,SudanSVG:()=>t.SudanSVG,SunSVG:()=>e.SunSVG,SupersetSVG:()=>n.SupersetSVG,SupportInterfaceSVG:()=>s.SupportInterfaceSVG,SurfSVG:()=>e.SurfSVG,SurinameSVG:()=>t.SurinameSVG,Svg1CSVG:()=>n.Svg1CSVG,Svg3DmExtensionSVG:()=>o.Svg3DmExtensionSVG,Svg3DsExtensionSVG:()=>o.Svg3DsExtensionSVG,Svg3G2ExtensionSVG:()=>o.Svg3G2ExtensionSVG,Svg3GpExtensionSVG:()=>o.Svg3GpExtensionSVG,Svg7ZExtensionSVG:()=>o.Svg7ZExtensionSVG,SvgExtensionSVG:()=>o.SvgExtensionSVG,SwedenSVG:()=>t.SwedenSVG,SwfExtensionSVG:()=>o.SwfExtensionSVG,SwitchSVG:()=>e.SwitchSVG,SwitcherSettingSVG:()=>e.SwitcherSettingSVG,SwitcherSettingsInterfaceSVG:()=>s.SwitcherSettingsInterfaceSVG,SwitzerlandSVG:()=>t.SwitzerlandSVG,SynapseservicemeshLogoSVG:()=>i.SynapseservicemeshLogoSVG,SyriaSVG:()=>t.SyriaSVG,SysExtensionSVG:()=>o.SysExtensionSVG,SystemObjectsSVG:()=>n.SystemObjectsSVG,SystemObjectsServiceSVG:()=>c.SystemObjectsServiceSVG,T5LogoSVG:()=>i.T5LogoSVG,TableSVG:()=>e.TableSVG,TableSettingsInterfaceSVG:()=>s.TableSettingsInterfaceSVG,TableSettingsSVG:()=>e.TableSettingsSVG,TagAppSVG:()=>e.TagAppSVG,TagDashSVG:()=>e.TagDashSVG,TagSVG:()=>e.TagSVG,TagSkuSVG:()=>e.TagSkuSVG,TagSvcSVG:()=>e.TagSvcSVG,TagsSVG:()=>n.TagsSVG,TagsServiceSVG:()=>c.TagsServiceSVG,TaiwanSVG:()=>t.TaiwanSVG,TajikistanSVG:()=>t.TajikistanSVG,TanzaniaSVG:()=>t.TanzaniaSVG,TapeSVG:()=>e.TapeSVG,TarExtensionSVG:()=>o.TarExtensionSVG,TargetSVG:()=>e.TargetSVG,TaskHistorySVG:()=>n.TaskHistorySVG,TaskHistoryServiceSVG:()=>c.TaskHistoryServiceSVG,TasksAndEnvironmentsSVG:()=>n.TasksAndEnvironmentsSVG,TechSupportSVG:()=>e.TechSupportSVG,TechnologyConsultingSVG:()=>n.TechnologyConsultingSVG,TelegramLogoSVG:()=>i.TelegramLogoSVG,TelegramSVG:()=>e.TelegramSVG,TelephoneSVG:()=>e.TelephoneSVG,TermideskSVG:()=>n.TermideskSVG,TexExtensionSVG:()=>o.TexExtensionSVG,TextMedia1SVG:()=>e.TextMedia1SVG,TextMediaSVG:()=>e.TextMediaSVG,TgaExtensionSVG:()=>o.TgaExtensionSVG,ThailandSVG:()=>t.ThailandSVG,ThemeContrastSVG:()=>d.ThemeContrastSVG,ThmExtensionSVG:()=>o.ThmExtensionSVG,TiffExtensionSVG:()=>o.TiffExtensionSVG,TimeInterfaceSVG:()=>s.TimeInterfaceSVG,TmpExtensionSVG:()=>o.TmpExtensionSVG,TokenSVG:()=>e.TokenSVG,TongaSVG:()=>t.TongaSVG,ToolingSVG:()=>e.ToolingSVG,TorrentExtensionSVG:()=>o.TorrentExtensionSVG,TrainingCertificateSVG:()=>e.TrainingCertificateSVG,TransactionsSVG:()=>n.TransactionsSVG,TransferHistoryServiceSVG:()=>c.TransferHistoryServiceSVG,TransferRuleServiceSVG:()=>c.TransferRuleServiceSVG,TranslateSVG:()=>e.TranslateSVG,TransnistriaSVG:()=>t.TransnistriaSVG,TrashSVG:()=>d.TrashSVG,TrinoSVG:()=>n.TrinoSVG,TrinoServiceSVG:()=>c.TrinoServiceSVG,TrivyLogoSVG:()=>i.TrivyLogoSVG,TtechLogoSVG:()=>i.TtechLogoSVG,TtfExtensionSVG:()=>o.TtfExtensionSVG,TurkeySVG:()=>t.TurkeySVG,TurkmenistanSVG:()=>t.TurkmenistanSVG,TuvaluSVG:()=>t.TuvaluSVG,TwoSupercomputersSVG:()=>e.TwoSupercomputersSVG,TxtExtensionSVG:()=>o.TxtExtensionSVG,UbuntuLogoSVG:()=>i.UbuntuLogoSVG,UgandaSVG:()=>t.UgandaSVG,UkraineSVG:()=>t.UkraineSVG,UmbrellaSVG:()=>e.UmbrellaSVG,UnPinnedSVG:()=>d.UnPinnedSVG,UnitedArabEmiratesSVG:()=>t.UnitedArabEmiratesSVG,UnlockSVG:()=>e.UnlockSVG,UnwrapSVG:()=>e.UnwrapSVG,UpdateSVG:()=>d.UpdateSVG,UploadSVG:()=>d.UploadSVG,UruguaySVG:()=>t.UruguaySVG,UserAddInterfaceSVG:()=>s.UserAddInterfaceSVG,UserAddSVG:()=>e.UserAddSVG,UserFederationSVG:()=>e.UserFederationSVG,UserFolderSVG:()=>e.UserFolderSVG,UserGateProfServiceSVG:()=>n.UserGateProfServiceSVG,UserGateVirtualNgfw1SVG:()=>n.UserGateVirtualNgfw1SVG,UserGateVirtualNgfwSVG:()=>n.UserGateVirtualNgfwSVG,UserHeartSVG:()=>e.UserHeartSVG,UserInterfaceSVG:()=>s.UserInterfaceSVG,UserInvitationSVG:()=>e.UserInvitationSVG,UserLaptopSVG:()=>e.UserLaptopSVG,UserSVG:()=>e.UserSVG,UserSearchSVG:()=>e.UserSearchSVG,UsersContainersServiceSVG:()=>c.UsersContainersServiceSVG,UsersSVG:()=>e.UsersSVG,UueExtensionSVG:()=>o.UueExtensionSVG,UzbekistanSVG:()=>t.UzbekistanSVG,VAppSVG:()=>n.VAppSVG,VMwareAriaOperatonsSVG:()=>n.VMwareAriaOperatonsSVG,VMwareAriaOperatonsforLogsSVG:()=>n.VMwareAriaOperatonsforLogsSVG,VMwareBackupServerSVG:()=>n.VMwareBackupServerSVG,VMwareCloudDirectorSVG:()=>n.VMwareCloudDirectorSVG,VMwareCloudDirectorServiceSVG:()=>n.VMwareCloudDirectorServiceSVG,VMwareCloudDirectrAppLaunchpadSVG:()=>n.VMwareCloudDirectrAppLaunchpadSVG,VMwareCloudDirectrAvailabilitySVG:()=>n.VMwareCloudDirectrAvailabilitySVG,VMwareEsxiSVG:()=>n.VMwareEsxiSVG,VMwareNsxAdvancedLoadBalancerSVG:()=>n.VMwareNsxAdvancedLoadBalancerSVG,VMwareVCentrServerSVG:()=>n.VMwareVCentrServerSVG,VMwareVShpereHypervisorSVG:()=>n.VMwareVShpereHypervisorSVG,VMwareVSphereClientSVG:()=>n.VMwareVSphereClientSVG,VMwareVSphereSVG:()=>n.VMwareVSphereSVG,VanuatuSVG:()=>t.VanuatuSVG,VbExtensionSVG:()=>o.VbExtensionSVG,VcdExtensionSVG:()=>o.VcdExtensionSVG,VcenterManagerSVG:()=>n.VcenterManagerSVG,VcfExtensionSVG:()=>o.VcfExtensionSVG,VdsSVG:()=>c.VdsSVG,VelocitySVG:()=>e.VelocitySVG,VenezuelaSVG:()=>t.VenezuelaSVG,VersioningSVG:()=>e.VersioningSVG,VerticalMenuCloseSVG:()=>e.VerticalMenuCloseSVG,VerticalMenuOpenSVG:()=>e.VerticalMenuOpenSVG,VerticalMenuRightCloseSVG:()=>e.VerticalMenuRightCloseSVG,VictriaMetricsSVG:()=>n.VictriaMetricsSVG,VietnamSVG:()=>t.VietnamSVG,ViewCardInterfaceSVG:()=>s.ViewCardInterfaceSVG,ViewCardSVG:()=>e.ViewCardSVG,ViewTableInterfaceSVG:()=>s.ViewTableInterfaceSVG,ViewTableSVG:()=>e.ViewTableSVG,ViewTileInterfaceSVG:()=>s.ViewTileInterfaceSVG,ViewTileSVG:()=>e.ViewTileSVG,VirtualDataCenterSVG:()=>n.VirtualDataCenterSVG,VirtualDataCenterWithGpuSVG:()=>n.VirtualDataCenterWithGpuSVG,VirtualDesktopInfrastructureSVG:()=>n.VirtualDesktopInfrastructureSVG,VirtualIpSVG:()=>n.VirtualIpSVG,VirtualMachinesServiceSVG:()=>c.VirtualMachinesServiceSVG,VirtualPrivateCloudSVG:()=>n.VirtualPrivateCloudSVG,VirtualSwitchSVG:()=>e.VirtualSwitchSVG,VirtualizationPlatformsSVG:()=>n.VirtualizationPlatformsSVG,VkSVG:()=>e.VkSVG,VllmSVG:()=>n.VllmSVG,VmBackupSVG:()=>n.VmBackupSVG,VmEncryptionSVG:()=>n.VmEncryptionSVG,VmIaasBasisSVG:()=>n.VmIaasBasisSVG,VmManagerSVG:()=>n.VmManagerSVG,VmSVG:()=>e.VmSVG,VmVirtualizationPlatformsSVG:()=>n.VmVirtualizationPlatformsSVG,VmagentLogoSVG:()=>i.VmagentLogoSVG,VmwareDisasterRecoverySVG:()=>n.VmwareDisasterRecoverySVG,VmwareLogoSVG:()=>i.VmwareLogoSVG,VmwareSVG:()=>n.VmwareSVG,VmwareServiceSVG:()=>c.VmwareServiceSVG,VobExtensionSVG:()=>o.VobExtensionSVG,VpcEndpointSVG:()=>n.VpcEndpointSVG,VpcPeeringSVG:()=>e.VpcPeeringSVG,VpcSVG:()=>n.VpcSVG,VpcServiceSVG:()=>c.VpcServiceSVG,VpnSVG:()=>n.VpnSVG,WallisAndFutunaSVG:()=>t.WallisAndFutunaSVG,WanSVG:()=>e.WanSVG,WarningSVG:()=>d.WarningSVG,WatchSVG:()=>d.WatchSVG,WavExtensionSVG:()=>o.WavExtensionSVG,WebApplicationCloudSVG:()=>e.WebApplicationCloudSVG,WebApplicationFirewallSVG:()=>n.WebApplicationFirewallSVG,WebCourseSVG:()=>e.WebCourseSVG,WebhookSVG:()=>n.WebhookSVG,WebinarSVG:()=>e.WebinarSVG,WeigherSVG:()=>e.WeigherSVG,WhatsAppLogoSVG:()=>i.WhatsAppLogoSVG,WhiteBoxServiceSVG:()=>c.WhiteBoxServiceSVG,WindowsServerLogoSVG:()=>i.WindowsServerLogoSVG,WmaExtensionSVG:()=>o.WmaExtensionSVG,WmvExtensionSVG:()=>o.WmvExtensionSVG,WordPressLogoSVG:()=>i.WordPressLogoSVG,WorkSafetyGuideSVG:()=>e.WorkSafetyGuideSVG,WorkspaceServiceSVG:()=>c.WorkspaceServiceSVG,WpdExtensionSVG:()=>o.WpdExtensionSVG,WpsExtensionSVG:()=>o.WpsExtensionSVG,WsfExtensionSVG:()=>o.WsfExtensionSVG,XhtmlExtensionSVG:()=>o.XhtmlExtensionSVG,XlrExtensionSVG:()=>o.XlrExtensionSVG,XlsExtensionSVG:()=>o.XlsExtensionSVG,XlsxExtensionSVG:()=>o.XlsxExtensionSVG,XmlExtensionSVG:()=>o.XmlExtensionSVG,YandexBrowserLogoSVG:()=>i.YandexBrowserLogoSVG,YemenSVG:()=>t.YemenSVG,YmlFileSVG:()=>e.YmlFileSVG,YoutubeSVG:()=>e.YoutubeSVG,YuvExtensionSVG:()=>o.YuvExtensionSVG,ZabbixSVG:()=>n.ZabbixSVG,ZambiaSVG:()=>t.ZambiaSVG,ZapFlashInterfaceSVG:()=>s.ZapFlashInterfaceSVG,ZapFlashSVG:()=>e.ZapFlashSVG,ZigmundSVG:()=>e.ZigmundSVG,ZimbabweSVG:()=>t.ZimbabweSVG,ZipExtensionSVG:()=>o.ZipExtensionSVG});var u=a("./node_modules/.pnpm/@snack-uikit+icons@0.27.4/node_modules/@snack-uikit/icons/dist/esm/Sprite.js"),t=a("./packages/icons/src/components/flag-icons/index.tsx"),c=a("./packages/icons/src/components/services-icons-old/index.tsx"),o=a("./packages/icons/src/components/extension-icons/index.tsx"),i=a("./packages/icons/src/components/logo-icons/index.ts"),s=a("./packages/icons/src/components/interface-icons-old/index.tsx"),e=a("./packages/icons/src/components/interface-icons-product/index.tsx"),d=a("./packages/icons/src/components/interface-icons-system/index.tsx"),n=a("./packages/icons/src/components/service-icons/index.tsx"),S=a("./packages/icons/src/sprite/svg/sprite-system.symbol.svg"),p=a.n(S)}),"./packages/mobile-chips/CHANGELOG.md":(G=>{G.exports=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 2.0.6 (2026-02-18)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.0.4]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@2.1.3]($PUBLIC_PROJECT_URL/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@1.1.4]($PUBLIC_PROJECT_URL/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 2.0.5 (2026-02-16)


### Bug Fixes

* **FF-8052:** fix homepage link ([dffd09c](https://github.com/cloud-ru-tech/uikit-product/commit/dffd09c642edf4842eee02ccc4ec3e5894f4a29e))





## 2.0.4 (2026-02-10)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@17.0.2]($PUBLIC_PROJECT_URL/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@2.1.1]($PUBLIC_PROJECT_URL/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@1.1.2]($PUBLIC_PROJECT_URL/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 2.0.3 (2026-02-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@2.1.0]($PUBLIC_PROJECT_URL/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 2.0.2 (2026-02-02)


### Bug Fixes

* **FF-7841:** update repo links ([1893c4a](https://github.com/cloud-ru-tech/uikit-product/commit/1893c4a3e600069f98ab37c728e167937faa3440))





## 2.0.1 (2026-02-02)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@2.0.1]($PUBLIC_PROJECT_URL/blob/master/packages/mobile-dropdown/CHANGELOG.md)





# 2.0.0 (2026-02-02)


### Bug Fixes

* **FF-4988:** stylelint deprecation warnings ([a21bc05](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/a21bc05bf1e843e58193d01aaf81b066c2e24cd7))
* **FF-5189:** add localization ([d401c7c](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d401c7c1ed3ae9c66905736179dd699430481cca))
* **FF-6290:** multi value reset ([9a1382c](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/9a1382cc3e20f58cecb690efc3a522c9ac36ed57))
* **FF-6326:** changed translation flow ([b3b6bb4](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b3b6bb4349103a63ce328f6f77d36daed0a7fc6b))
* **FF-6490:** hide modal footer in MobileChipChoiceSingle ([f3b4f14](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/f3b4f14880f73a37f8d023743ff15012e32efd2d))
* **FF-6613:** close MobileChipChoiceSingle if clicked on selected element ([0690b05](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/0690b05fea8e710e1e4c643fd1c56ab7f7aa770c))
* **FF-7560:** add searchable prop into chips ([8c30e4e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/8c30e4ef1395d4de5d2522dddb15432efc635446))
* **FF-7846:** replace tokens usage ([b690050](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b6900500e2f2c73e184f8b67f689f4a42571a154))
* **FF-7861:** massive scope update ([b93fa9f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b93fa9fed13a579f5f02efc16ea43d8bedbd5aca))
* **FF-7861:** update all 0 versions to 1 ([737c2b4](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/737c2b494d48be5132554ae9f03c960a8cbe3a34))
* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))
* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))
* **PDS-1672:** hide pinned filters divider if no elements is on the right ([d5205b9](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d5205b9f8c5eeeb2790f91df1fba89f4ef964c90))
* **PDS-2643:** up snack deps, export prop typings for adaptive components ([62193bd](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/62193bddb7eff923cae48de90206374d82dc80a3))


### Dependencies

* **FF-4704:** up deps ([7da95ef](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/7da95ef6551ced9a63c75970f43b047cc564cedc))
* **FF-5186:** up snack deps ([de10652](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/de10652ca4f8ac2a5f11dc2c0f9bb01e17f30c3c))
* **FF-5678:** up deps classnames/uncontrollable ([17b3e6e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/17b3e6e7d705fd0f013e7027c4fab244522866e4))
* **FF-6240:** update loaders ([b56f38f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b56f38f22bcacbf3d879a39eeaa0ac8ca2578d3d))
* **FF-7560:** add types deps into chips ([ff4eb37](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/ff4eb37448671e27d129441b042090f997f4b1c5))
* **PDS-559:** up snack deps ([e0a0fbd](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/e0a0fbd952420dd0031e3e4f8adef8c50375f31d))
* **PDS-611:** up deps ([c30ac4c](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/c30ac4c2adb7c00e84fbe557d85314add6b6977a))
* **PDS-955:** up snack-uikit deps ([8e7bbb9](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/8e7bbb9ae9cef8da37932e45fa76038e59ee2f98))


### Features

* **FF-5188:** hide search on fieldSelect/chips with low 5 items ([97f1533](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/97f1533dc11b9254e9928dd7a1c826f1f8bddb39))
* **FF-5189:** add footer to chip multiple ([ae0b1b3](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/ae0b1b368ea02bbdaa8a98631f394a2b4f9188a7))
* **FF-5189:** upd mobile list ([51c0092](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/51c0092f3795ab8f65774dcd0a7e42847166d49e))
* **FF-5361:** add adaptive component versions ([0e1ddce](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/0e1ddceda6085479ea8365f2b034b326da366fbb))
* **FF-5782:** dart v3 use/forward approach ([eb0c4b3](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/eb0c4b30a008aa82ad7555ecc9d8420c21b1c7a4))
* **FF-5830:** add date-time & month modes to chip-choice ([56eda07](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/56eda0764906db7e34d188f1c5fc010042fba380))
* **FF-5836:** support cjs syntax ([d44abd0](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d44abd0ddbbea0cd2bf0e1b99442cdb83b87df48))
* **PDS-1685:** add truncate to chips ([67156ba](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/67156bab207032fff6b43fabf4119fd566c3e800))
* **PDS-559:** add mobile-chips package ([3cfcca9](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/3cfcca9c9696a88e31547d5fbb5ec73600b969dc))


### BREAKING CHANGES


* **FF-6484:** up deps ([578fdbb](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/578fdbbb604085655bd316308440976db38d25ce))
* **PDS-1081:** add chip choice time, replace showClearButton with onClearButtonClick in individual chip, add autoApply & disable fuzzy search props, change chip choice row behavior ([8685e47](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/8685e474d243e22c45733d72e4ad0eb3593f4475))




## 0.8.48 (2026-01-29)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@16.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.32](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.5.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.47 (2025-12-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@16.1.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.31](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.5.4](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@8.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.46 (2025-12-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@16.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.30](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.5.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.45 (2025-12-08)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@16.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.29](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.5.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@8.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.44 (2025-11-28)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@16.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.28](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.5.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.43 (2025-11-28)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.27](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.5.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.42 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.1.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.26](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.70](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@8.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.41 (2025-11-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.1.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.25](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.69](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@8.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.40 (2025-11-23)


### Bug Fixes

* **FF-7560:** add searchable prop into chips ([8c30e4e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/8c30e4ef1395d4de5d2522dddb15432efc635446))


### Dependencies

* **FF-7560:** add types deps into chips ([ff4eb37](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/ff4eb37448671e27d129441b042090f997f4b1c5))





## 0.8.39 (2025-11-13)


### Bug Fixes

* **PD-3377:** removed contributors ([121640f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/121640f7b88b20a728a6ad2c39de8841532bb308))





## 0.8.38 (2025-11-13)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.1.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.23](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.67](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@7.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.37 (2025-11-12)


### Bug Fixes

* **PD-3377:** contributors update to publish all packages ([719fd3e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/719fd3e1249e247443b125c47ea408d92c8395c3))





## 0.8.36 (2025-11-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.1.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.21](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.65](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@7.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.35 (2025-11-12)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.20](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.64](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.34 (2025-11-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.19](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.63](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.2.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.33 (2025-10-06)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.4](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.18](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.62](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.32 (2025-10-06)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.17](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.61](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.31 (2025-10-03)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.16](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.60](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.30 (2025-09-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.15](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.59](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.2.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.29 (2025-09-26)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@15.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.14](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.58](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.28 (2025-09-25)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.6.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.13](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.57](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.27 (2025-09-18)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.5.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.12](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.56](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.26 (2025-09-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.4.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.11](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.55](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.25 (2025-09-11)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.3.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.10](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.54](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.24 (2025-09-02)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.3.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.9](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.53](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.23 (2025-09-01)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.8](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.52](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.22 (2025-08-20)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.1.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.7](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.51](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.21 (2025-08-19)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.1.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.50](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.20 (2025-08-15)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.49](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.19 (2025-08-14)


### Bug Fixes

* **PDS-2643:** up snack deps, export prop typings for adaptive components ([62193bd](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/62193bddb7eff923cae48de90206374d82dc80a3))





## 0.8.18 (2025-08-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.8.17 (2025-08-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.47](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.16 (2025-08-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.46](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@6.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.15 (2025-07-28)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.9.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.8.14 (2025-07-25)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@14.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.8.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.45](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.13 (2025-07-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.8.4](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.44](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@5.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.12 (2025-07-17)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.8.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.8.11 (2025-07-16)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.8.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.43](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@5.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.10 (2025-07-15)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.4](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.8.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.42](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.9 (2025-07-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.8.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.8.8 (2025-07-01)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.7.9](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.41](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.7 (2025-06-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.7.8](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.40](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.6 (2025-06-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.7.7](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.39](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@4.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## 0.8.5 (2025-06-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@13.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.7.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.38](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.4 (2025-06-20)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@12.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.7.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.37](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.3 (2025-06-20)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.7.4](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.36](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.2 (2025-06-20)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@12.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.7.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.35](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.8.1 (2025-06-06)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.9.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.7.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.34](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





# 0.8.0 (2025-05-29)


### BREAKING CHANGES


* **FF-6484:** up deps ([578fdbb](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/578fdbbb604085655bd316308440976db38d25ce))




## 0.7.19 (2025-05-28)


### Bug Fixes

* **FF-6613:** close MobileChipChoiceSingle if clicked on selected element ([0690b05](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/0690b05fea8e710e1e4c643fd1c56ab7f7aa770c))





## 0.7.18 (2025-05-28)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.8.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.7.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.33](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.7.17 (2025-05-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.7.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.7.16 (2025-05-16)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.7.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.41](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.32](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.7.15 (2025-05-14)


### Bug Fixes

* **FF-6490:** hide modal footer in MobileChipChoiceSingle ([f3b4f14](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/f3b4f14880f73a37f8d023743ff15012e32efd2d))





## 0.7.14 (2025-05-14)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.6.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.40](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.31](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.7.13 (2025-05-13)


### Dependencies

* **FF-6240:** update loaders ([b56f38f](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b56f38f22bcacbf3d879a39eeaa0ac8ca2578d3d))





## 0.7.12 (2025-04-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.5.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.39](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.30](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.7.11 (2025-04-24)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.38](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.7.10 (2025-04-15)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.4.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.37](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.29](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.7.9 (2025-04-09)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.3.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.36](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.28](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.7.8 (2025-04-01)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.35](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.27](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.7.7 (2025-03-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.1.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.34](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.26](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.7.6 (2025-03-21)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.33](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.25](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.7.5 (2025-03-20)


### Bug Fixes

* **FF-6326:** changed translation flow ([b3b6bb4](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/b3b6bb4349103a63ce328f6f77d36daed0a7fc6b))





## 0.7.4 (2025-03-20)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@11.0.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.32](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.24](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.7.3 (2025-03-18)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.7.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.31](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.23](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.7.2 (2025-03-14)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.6.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.30](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.22](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.7.1 (2025-03-13)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.5.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.29](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.21](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





# 0.7.0 (2025-03-05)


### Bug Fixes

* **PDS-1672:** hide pinned filters divider if no elements is on the right ([d5205b9](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d5205b9f8c5eeeb2790f91df1fba89f4ef964c90))


### Features

* **PDS-1685:** add truncate to chips ([67156ba](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/67156bab207032fff6b43fabf4119fd566c3e800))





## 0.6.29 (2025-03-05)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.5.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.28](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.20](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.6.28 (2025-03-04)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.4.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.27](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.19](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.6.27 (2025-02-28)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.3.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.26](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-tooltip@0.4.18](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-tooltip/CHANGELOG.md)





## 0.6.26 (2025-02-27)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.25](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.6.25 (2025-02-25)


### Bug Fixes

* **FF-6290:** multi value reset ([9a1382c](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/9a1382cc3e20f58cecb690efc3a522c9ac36ed57))





## 0.6.24 (2025-02-10)


### Dependencies

* **FF-4704:** up deps ([7da95ef](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/7da95ef6551ced9a63c75970f43b047cc564cedc))





## <small>0.6.23 (2025-02-05)</small>

* feat(PDS-1081)!: add chip choice time, replace showClearButton with onClearButtonClick in individual ([8685e47](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/8685e47))





## <small>0.6.22 (2025-02-05)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.14](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.22](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@3.8.8](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.6.21 (2025-02-05)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.13](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.21](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## <small>0.6.20 (2025-01-09)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.12](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.20](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## <small>0.6.19 (2024-12-27)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.11](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.19](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## <small>0.6.18 (2024-12-26)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.10](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.18](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@3.8.7](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.6.17 (2024-12-26)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.9](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.17](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@3.8.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.6.16 (2024-12-17)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.8](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.16](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@3.8.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.6.15 (2024-12-16)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.7](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.15](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@3.8.4](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.6.14 (2024-12-16)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.14](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## <small>0.6.13 (2024-12-12)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.13](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## <small>0.6.12 (2024-12-12)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.12](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## <small>0.6.11 (2024-12-11)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.11](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## <small>0.6.10 (2024-12-04)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.10](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## <small>0.6.9 (2024-11-25)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.4](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.9](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## <small>0.6.8 (2024-11-17)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.8](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## <small>0.6.7 (2024-11-14)</small>

* deps(FF-5678): up deps classnames/uncontrollable ([17b3e6e](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/17b3e6e))





## <small>0.6.6 (2024-11-12)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## <small>0.6.5 (2024-11-07)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@3.8.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





## <small>0.6.4 (2024-11-06)</small>

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.4](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## <small>0.6.3 (2024-11-06)</small>

* deps(PDS-955): up snack-uikit deps ([8e7bbb9](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/8e7bbb9))





## <small>0.6.2 (2024-11-05)</small>

* feat(FF-5830): add date-time & month modes to chip-choice ([56eda07](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/56eda07))





## 0.6.1 (2024-11-01)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.6.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





# 0.6.0 (2024-10-30)


### Features

* **FF-5836:** support cjs syntax ([d44abd0](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d44abd0ddbbea0cd2bf0e1b99442cdb83b87df48))





## 0.5.1 (2024-10-30)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@10.0.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.5.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)
* [@cloud-ru/uikit-product-utils@3.7.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/utils/CHANGELOG.md)





# 0.5.0 (2024-10-29)


### Features

* **FF-5782:** dart v3 use/forward approach ([eb0c4b3](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/eb0c4b30a008aa82ad7555ecc9d8420c21b1c7a4))





## 0.4.8 (2024-10-15)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@9.6.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.4.8](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.4.7 (2024-10-15)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@9.5.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.4.7](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.4.6 (2024-10-03)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.4.6](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.4.5 (2024-10-03)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@9.4.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.4.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.4.4 (2024-09-26)


### Bug Fixes

* **FF-4988:** stylelint deprecation warnings ([a21bc05](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/a21bc05bf1e843e58193d01aaf81b066c2e24cd7))





## 0.4.3 (2024-09-25)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@9.3.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.4.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.4.2 (2024-09-25)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.4.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.4.1 (2024-09-25)


### Dependencies

* **PDS-611:** up deps ([c30ac4c](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/c30ac4c2adb7c00e84fbe557d85314add6b6977a))





# 0.4.0 (2024-09-16)


### Features

* **FF-5361:** add adaptive component versions ([0e1ddce](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/0e1ddceda6085479ea8365f2b034b326da366fbb))





## 0.3.5 (2024-09-10)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.3.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.3.4 (2024-09-10)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.3.4](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.3.3 (2024-09-10)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.3.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.3.2 (2024-09-07)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.3.2](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.3.1 (2024-09-06)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.3.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





# 0.3.0 (2024-09-04)


### Bug Fixes

* **FF-5189:** add localization ([d401c7c](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/d401c7c1ed3ae9c66905736179dd699430481cca))


### Features

* **FF-5189:** add footer to chip multiple ([ae0b1b3](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/ae0b1b368ea02bbdaa8a98631f394a2b4f9188a7))
* **FF-5189:** upd mobile list ([51c0092](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/51c0092f3795ab8f65774dcd0a7e42847166d49e))





## 0.2.1 (2024-08-28)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@9.2.0](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.2.5](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





# 0.2.0 (2024-08-27)


### Features

* **FF-5188:** hide search on fieldSelect/chips with low 5 items ([97f1533](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/97f1533dc11b9254e9928dd7a1c826f1f8bddb39))





## 0.1.3 (2024-08-23)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-icons@9.1.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/icons/CHANGELOG.md)
* [@cloud-ru/uikit-product-mobile-dropdown@0.2.3](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





## 0.1.2 (2024-08-16)


### Dependencies

* **FF-5186:** up snack deps ([de10652](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/de10652ca4f8ac2a5f11dc2c0f9bb01e17f30c3c))





## 0.1.1 (2024-08-13)

### Only dependencies have been changed
* [@cloud-ru/uikit-product-mobile-dropdown@0.2.1](https://gitverse.ru/cloud-ru-tech/uikit-product/-/blob/master/packages/mobile-dropdown/CHANGELOG.md)





# 0.1.0 (2024-08-07)


### Dependencies

* **PDS-559:** up snack deps ([e0a0fbd](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/e0a0fbd952420dd0031e3e4f8adef8c50375f31d))


### Features

* **PDS-559:** add mobile-chips package ([3cfcca9](https://gitverse.ru/cloud-ru-tech/uikit-product/commits/3cfcca9c9696a88e31547d5fbb5ec73600b969dc))





## CHANGELOG

### v0.0.0

- Initial version
`}),"./packages/mobile-chips/README.md":(G=>{G.exports=`# Mobile Chips

## Installation
\`npm i @cloud-ru/uikit-product-mobile-chips\`

[Changelog](./CHANGELOG.md)


`}),"./packages/mobile-chips/package.json":(G=>{G.exports=JSON.parse('{"UU":"@cloud-ru/uikit-product-mobile-chips","rE":"2.0.6"}')}),"./packages/mobile-chips/stories/constants.tsx":((G,g,a)=>{a.d(g,{BI:()=>i,LP:()=>s});var u=a("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),t=a("./packages/icons/src/index.ts"),c=a("./packages/mobile-chips/src/constants.ts");const o={none:void 0,...Object.fromEntries(Object.keys(t).filter(e=>e!=="Sprite").map(e=>{const d=t[e];return[e,(0,u.jsx)(d,{},e)]}))},i={size:{options:Object.values(c.SK),control:{type:"radio"}},icon:{name:"[Stories]: Show icon examples",options:Object.keys(o),mapping:o,control:{type:"select"}}},s={multiple2:["vm-1"],date:new Date("2025-01-01"),single2:"true",dateRange:[new Date("2025-01-01"),new Date("2025-01-31")],time:{hours:12,minutes:0}}})}]);})();
