import{j as s}from"./jsx-runtime-BTJTZTIL.js";import{r as l}from"./index-CJ_LmFaV.js";import{c as j,a as Eu,b as yu,I as k,C as gu,P as Su,s as bu}from"./styles.module-RAkVD2k5.js";import{m as hu}from"./index-B7wZyJkK.js";import{S as Bu}from"./constants-9uwKbtvo.js";import{S as Au}from"./Slider-DoTG_JtF.js";import{u as vu}from"./useValueControl-C51frgGe.js";import{u as Cu,a as Tu}from"./usePrefix-CWfsp2Rm.js";import{u as xu}from"./PopoverPrivate-CnKgsFAm.js";import{F as _u,C as Du,V as Iu}from"./FieldDecorator-Dre8Icai.js";import{e as qu}from"./componentPropsProcessors-UJEZy8aQ.js";import{F as Vu}from"./FieldContainerPrivate-CWEZnWPH.js";import{I as Mu}from"./InputPrivate-DRXelsBW.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-BtuvvjWr.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-CAfvFIBF.js";import"./index-BAKcRSlX.js";import"./index-DNCO-vcx.js";import"./index-Y3TRpJ-L.js";import"./index-DreyRvUE.js";import"./index-Ca89sW9R.js";import"./index-C3mvkShn.js";import"./index-BGTKE3tV.js";import"./index-DHAmGKAZ.js";import"./index-h0kOFyIh.js";import"./index-BfUMklLA.js";import"./index-B0xwoRpp.js";import"./index-B2h5DBoi.js";import"./index-5mF7KA5g.js";import"./index-WpT-B0mJ.js";import"./index-B_69vUNX.js";import"./index-B80hK4m0.js";import"./index-w0WAZL2A.js";import"./index-Dn6vuaYJ.js";import"./index-CTTgWa-s.js";import"./index-CF_OgQNJ.js";import"./index-DBTBMFOQ.js";import"./index-CXJdfWGn.js";import"./index-x12pshUM.js";import"./index-CGSydWJd.js";import"./index-DbF-M2Rm.js";import"./index-DUmpqB7p.js";import"./KeyCode-CHzoJbuw.js";import"./objectWithoutProperties-3ReGGzEA.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./extends-CF3RwP-h.js";import"./useSwipeable-DMbEt_5P.js";import"./Tooltip-DzAF_V2U.js";import"./index-JZGyZbA2.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./TruncateString-d_nSHKm-.js";const O=(e,a)=>a?typeof e=="number"?a(e):e.map(a).join(" – "):typeof e=="number"?String(e):e.join(" – "),P=(e,a)=>Math.abs(a-e),N=(e,a,n)=>a.reduce((t,i)=>{const o=P(e,n(i));return o<t.lowestDiff?{lowestDiff:o,mark:i}:t},{lowestDiff:P(e,n(a[0])),mark:a[0]}),ku=(e,a,n)=>{const t=[];let i=e;for(;i<=a;)t.push(parseFloat(i.toFixed(10))),i+=n;return t};function Nu(e){return!!(e&&typeof e=="object"&&"label"in e)}const wu="_sliderWrapper_1mhoy_1",Ru="_slider_1mhoy_1",ju="_fieldContainer_1mhoy_29",w={sliderWrapper:wu,slider:Ru,fieldContainer:ju},L=(e,a,n,t)=>e?t||[a,n]:t??a,C=l.forwardRef(({id:e,name:a,min:n,max:t,step:i,marks:o,showScaleBar:T=!0,value:F,range:p=!1,disabled:m=!1,readonly:E=!1,onChange:W,onFocus:z,onBlur:b,className:J,label:$,labelTooltip:Q,labelTooltipPlacement:U,required:Z,caption:uu,hint:eu,showHintIcon:tu,size:h=Bu.S,textInputFormatter:x,unbindInputFromMarks:au,postfixIcon:nu,prefix:ru,postfix:ou,autoFocus:iu,...lu},su)=>{const[B=L(p,n,t,F),_]=vu({value:F,defaultValue:L(p,n,t,F),onChange:W}),[D,S]=l.useState(O(B,x)),R=l.useRef(null),I=Cu({prefix:ru,disabled:m}),q=Tu({postfix:ou,disabled:m}),y=l.useCallback(u=>{const r=o[u];return Nu(r)?r.label:r},[o]),pu=l.useMemo(()=>Object.keys(o).every(u=>u===y(u)),[y,o]),du=u=>{const r=parseFloat(u);u&&Number.isNaN(r)||S(u)},cu=u=>{const r=c=>{S(String(y(c))),_(Number(c))},g=Object.keys(o).map(c=>({key:c,value:parseFloat(String(y(c)))})),f=g.find(c=>c.value===u);if(f){r(f.key);return}const d=parseFloat(String(y(n))),V=parseFloat(String(y(t)));if(u<d){r(n);return}if(u>V){r(t);return}const{mark:M}=N(u,g,c=>c.value);r(M.key)},mu=u=>{const r=d=>{S(String(d)),_(d)};if(u<=n){r(n);return}if(u>=t){r(t);return}if(i===null){const d=Object.keys(o).map(Number);if(d.includes(u)){S(String(u)),r(u);return}const{mark:V}=N(u,d,M=>M);r(V);return}const g=ku(n,t,i);if(g.includes(u)){r(u);return}const{mark:f}=N(u,g,d=>d);r(f)},A=xu(()=>{if(p)return;const u=parseFloat(D),r=parseFloat(String(y(n))),g=Number.isNaN(r)?n:r,f=D?u:g;Number.isNaN(f)||(pu||au?mu(f):cu(f))}),fu=u=>{b==null||b(u),A()},Fu=u=>{u.key==="Enter"&&A()};return l.useEffect(()=>{S(O(B,x))},[B,x]),l.useEffect(()=>{A()},[o,n,t,A]),s.jsxs(_u,{className:J,label:$,labelTooltip:Q,labelTooltipPlacement:U,labelFor:e,disabled:m,required:Z,caption:uu,hint:eu,showHintIcon:tu,readonly:E,size:h,...qu(lu),children:[s.jsx(Vu,{className:w.fieldContainer,size:h,validationState:Iu.Default,disabled:m,readonly:E,variant:Du.SingleLine,inputRef:R,prefix:I.show&&I.render({key:I.id}),postfix:s.jsxs(s.Fragment,{children:[q.show&&q.render({key:q.id}),nu]}),children:s.jsx(Mu,{ref:hu(su,R),"data-size":h,value:D,onChange:p?void 0:du,onFocus:z,onBlur:p?b:fu,onKeyDown:Fu,disabled:m,readonly:p?!0:E,type:"text",inputMode:"numeric",id:e,name:a,"data-test-id":"field-slider__input",autoFocus:iu})}),s.jsx("div",{className:w.sliderWrapper,children:s.jsx("div",{className:w.slider,"data-size":h,children:s.jsx(Au,{range:p,min:n,max:t,step:i,value:B,onChange:_,marks:T?o:void 0,disabled:E||m,"data-test-id":"field-slider__slider"})})})]})});try{C.displayName="FieldSlider",C.__docgenInfo={description:"",displayName:"FieldSlider",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},postfixIcon:{defaultValue:null,description:"Иконка-постфикс для поля",name:"postfixIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},showScaleBar:{defaultValue:{value:"true"},description:"Отображение линейки",name:"showScaleBar",required:!1,type:{name:"boolean"}},textInputFormatter:{defaultValue:null,description:"Функция для форматирования значений в текстовом поле",name:"textInputFormatter",required:!1,type:{name:"TextInputFormatter"}},unbindInputFromMarks:{defaultValue:null,description:"Отвязать текстовое поле от значений на линейке",name:"unbindInputFromMarks",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"Произвольный префикс для поля",name:"prefix",required:!1,type:{name:"ReactNode"}},postfix:{defaultValue:null,description:"Произвольный постфикс для поля",name:"postfix",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Является ли поле деактивированным",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Значение html-атрибута name",name:"name",required:!1,type:{name:"string"}},autoFocus:{defaultValue:{value:"false"},description:"Включен ли авто-фокус для поля",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"Значение html-атрибута id",name:"id",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Колбек обработки получения фокуса",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"Колбек обработки потери фокуса",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},readonly:{defaultValue:{value:"false"},description:"Является ли поле доступным только для чтения",name:"readonly",required:!1,type:{name:"boolean"}},tipFormatter:{defaultValue:null,description:"",name:"tipFormatter",required:!1,type:{name:"((value: string | number) => ReactNode)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"s"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},caption:{defaultValue:null,description:"Подпись справа от лейбла",name:"caption",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Лейбл",name:"label",required:!1,type:{name:"string"}},labelTooltip:{defaultValue:null,description:"Всплывающая подсказка лейбла",name:"labelTooltip",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Является ли поле обязательным",name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Подсказка внизу",name:"hint",required:!1,type:{name:"string"}},showHintIcon:{defaultValue:null,description:"Отображать иконку подсказки",name:"showHintIcon",required:!1,type:{name:"boolean"}},labelTooltipPlacement:{defaultValue:{value:"top"},description:"Расположение подсказки лейбла",name:"labelTooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}}}}}catch{}const Ge={title:"Components/Fields/Field Slider",component:C},H={10:"1gb",20:"2gb",30:"4gb",50:"16gb"},Ou={10:"10",20:"20",30:"30",40:"40",50:"50"},K={linear:"linear","non-linear":"non-linear"},Pu=({size:e,range:a,moveByMarks:n,storyMarks:t,step:i,...o})=>{const[T,F]=l.useState(o.value);l.useEffect(()=>{if(a&&typeof o.value=="number"){F([10,30]);return}F(o.value)},[o.value,a]);const p=l.useMemo(()=>{switch(t){case"non-linear":return H;case"linear":default:return Ou}},[t]),m=l.useCallback(E=>{switch(t){case"non-linear":return H[E];case"linear":default:return String(E)}},[t]);return s.jsx("div",{className:bu.wrapper,"data-size":e,children:s.jsx(C,{...o,size:e,range:a,value:T,onChange:F,marks:p,step:n?null:i,textInputFormatter:m})})},v={render:Pu,args:{id:"slider",value:10,min:10,max:50,step:1,range:!1,showScaleBar:!0,moveByMarks:!0,storyMarks:"linear",readonly:!1,disabled:!1,autoFocus:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",postfixIcon:k.PlaceholderSVG,prefix:"",postfix:""},argTypes:{...Su,labelTooltip:gu.labelTooltip,moveByMarks:{name:"[Story]: change value only by marks",type:"boolean",if:{arg:"showScaleBar",eq:!0}},storyMarks:{name:"[Story]: example marks",options:Object.keys(K),mapping:K,control:{type:"radio"},if:{arg:"showScaleBar",eq:!0}},postfixIcon:{name:"postfixIcon",options:Object.keys(k),mapping:k,control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${j.version}`,Eu,yu]},packageName:j.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var G,X,Y;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'slider',
    value: 10,
    min: 10,
    max: 50,
    step: 1,
    range: false,
    showScaleBar: true,
    moveByMarks: true,
    storyMarks: 'linear',
    readonly: false,
    disabled: false,
    autoFocus: false,
    label: 'Label text',
    labelTooltip: 'Tooltip description',
    required: false,
    caption: 'Caption',
    hint: 'Hint text',
    size: 's',
    postfixIcon: ICONS['PlaceholderSVG'],
    prefix: '',
    postfix: ''
  },
  argTypes: {
    ...PREFIX_POSTFIX_ARG_TYPES,
    labelTooltip: COMMON_ARG_TYPES.labelTooltip,
    moveByMarks: {
      name: '[Story]: change value only by marks',
      type: 'boolean',
      if: {
        arg: 'showScaleBar',
        eq: true
      }
    },
    storyMarks: {
      name: '[Story]: example marks',
      options: Object.keys(STORY_MARKS),
      mapping: STORY_MARKS,
      control: {
        type: 'radio'
      },
      if: {
        arg: 'showScaleBar',
        eq: true
      }
    },
    postfixIcon: {
      name: 'postfixIcon',
      options: Object.keys(ICONS),
      mapping: ICONS,
      control: {
        type: 'select'
      }
    }
  },
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1'
    }
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};export{Ge as default,v as fieldSlider};
