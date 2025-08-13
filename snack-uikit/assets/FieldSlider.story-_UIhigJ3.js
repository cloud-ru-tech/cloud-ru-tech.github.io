import{j as s}from"./jsx-runtime-BTJTZTIL.js";import{r as l}from"./index-CJ_LmFaV.js";import{c as j,a as Eu,b as yu,I as k,C as gu,P as Su,s as bu}from"./styles.module-C6VSrpUS.js";import{m as hu}from"./index-B7wZyJkK.js";import{S as Bu}from"./constants-9uwKbtvo.js";import{S as Au}from"./Slider-C7ZnoKi5.js";import{u as vu}from"./useValueControl-CNLw7ht-.js";import{u as Cu,a as Tu}from"./usePrefix-BmEKZSSL.js";import{u as xu}from"./PopoverPrivate-CnKgsFAm.js";import{F as _u,C as Du,V as Iu}from"./FieldDecorator-DME35q0M.js";import{e as qu}from"./componentPropsProcessors-UJEZy8aQ.js";import{F as Vu}from"./FieldContainerPrivate-Bb7j8Eum.js";import{I as Mu}from"./InputPrivate-CThf6NgV.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-B3PncWT3.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-DOUS9uWn.js";import"./index-CO8qBMZD.js";import"./index-jnMETbXV.js";import"./index-CF-13Pl-.js";import"./index-DhD2neKD.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-DOM9zHVr.js";import"./index-CoIthjug.js";import"./index-CAYnss5D.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-DYaIcqfi.js";import"./index-CU6E9CWM.js";import"./index-Cz4dqGWG.js";import"./index-BaJp5iwV.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./index-Dj3Kdo0x.js";import"./index-DUmpqB7p.js";import"./KeyCode-CHzoJbuw.js";import"./objectWithoutProperties-3ReGGzEA.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./extends-CF3RwP-h.js";import"./useSwipeable-DMbEt_5P.js";import"./Tooltip-C67siN8J.js";import"./index-JZGyZbA2.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./TruncateString-NSjc3XzO.js";const O=(e,a)=>a?typeof e=="number"?a(e):e.map(a).join(" – "):typeof e=="number"?String(e):e.join(" – "),P=(e,a)=>Math.abs(a-e),N=(e,a,n)=>a.reduce((t,i)=>{const o=P(e,n(i));return o<t.lowestDiff?{lowestDiff:o,mark:i}:t},{lowestDiff:P(e,n(a[0])),mark:a[0]}),ku=(e,a,n)=>{const t=[];let i=e;for(;i<=a;)t.push(parseFloat(i.toFixed(10))),i+=n;return t};function Nu(e){return!!(e&&typeof e=="object"&&"label"in e)}const wu="_sliderWrapper_1mhoy_1",Ru="_slider_1mhoy_1",ju="_fieldContainer_1mhoy_29",w={sliderWrapper:wu,slider:Ru,fieldContainer:ju},L=(e,a,n,t)=>e?t||[a,n]:t??a,C=l.forwardRef(({id:e,name:a,min:n,max:t,step:i,marks:o,showScaleBar:T=!0,value:F,range:p=!1,disabled:c=!1,readonly:E=!1,onChange:W,onFocus:z,onBlur:b,className:J,label:$,labelTooltip:Q,labelTooltipPlacement:U,required:Z,caption:uu,hint:eu,showHintIcon:tu,size:h=Bu.S,textInputFormatter:x,unbindInputFromMarks:au,postfixIcon:nu,prefix:ru,postfix:ou,autoFocus:iu,...lu},su)=>{const[B=L(p,n,t,F),_]=vu({value:F,defaultValue:L(p,n,t,F),onChange:W}),[D,S]=l.useState(O(B,x)),R=l.useRef(null),I=Cu({prefix:ru,disabled:c}),q=Tu({postfix:ou,disabled:c}),y=l.useCallback(u=>{const r=o[u];return Nu(r)?r.label:r},[o]),pu=l.useMemo(()=>Object.keys(o).every(u=>u===y(u)),[y,o]),du=u=>{const r=parseFloat(u);u&&Number.isNaN(r)||S(u)},mu=u=>{const r=m=>{S(String(y(m))),_(Number(m))},g=Object.keys(o).map(m=>({key:m,value:parseFloat(String(y(m)))})),f=g.find(m=>m.value===u);if(f){r(f.key);return}const d=parseFloat(String(y(n))),V=parseFloat(String(y(t)));if(u<d){r(n);return}if(u>V){r(t);return}const{mark:M}=N(u,g,m=>m.value);r(M.key)},cu=u=>{const r=d=>{S(String(d)),_(d)};if(u<=n){r(n);return}if(u>=t){r(t);return}if(i===null){const d=Object.keys(o).map(Number);if(d.includes(u)){S(String(u)),r(u);return}const{mark:V}=N(u,d,M=>M);r(V);return}const g=ku(n,t,i);if(g.includes(u)){r(u);return}const{mark:f}=N(u,g,d=>d);r(f)},A=xu(()=>{if(p)return;const u=parseFloat(D),r=parseFloat(String(y(n))),g=Number.isNaN(r)?n:r,f=D?u:g;Number.isNaN(f)||(pu||au?cu(f):mu(f))}),fu=u=>{b==null||b(u),A()},Fu=u=>{u.key==="Enter"&&A()};return l.useEffect(()=>{S(O(B,x))},[B,x]),l.useEffect(()=>{A()},[o,n,t,A]),s.jsxs(_u,{className:J,label:$,labelTooltip:Q,labelTooltipPlacement:U,labelFor:e,disabled:c,required:Z,caption:uu,hint:eu,showHintIcon:tu,readonly:E,size:h,...qu(lu),children:[s.jsx(Vu,{className:w.fieldContainer,size:h,validationState:Iu.Default,disabled:c,readonly:E,variant:Du.SingleLine,inputRef:R,prefix:I.show&&I.render({key:I.id}),postfix:s.jsxs(s.Fragment,{children:[q.show&&q.render({key:q.id}),nu]}),children:s.jsx(Mu,{ref:hu(su,R),"data-size":h,value:D,onChange:p?void 0:du,onFocus:z,onBlur:p?b:fu,onKeyDown:Fu,disabled:c,readonly:p?!0:E,type:"text",inputMode:"numeric",id:e,name:a,"data-test-id":"field-slider__input",autoFocus:iu})}),s.jsx("div",{className:w.sliderWrapper,children:s.jsx("div",{className:w.slider,"data-size":h,children:s.jsx(Au,{range:p,min:n,max:t,step:i,value:B,onChange:_,marks:T?o:void 0,disabled:E||c,"data-test-id":"field-slider__slider"})})})]})});try{C.displayName="FieldSlider",C.__docgenInfo={description:"",displayName:"FieldSlider",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},postfixIcon:{defaultValue:null,description:"Иконка-постфикс для поля",name:"postfixIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},showScaleBar:{defaultValue:{value:"true"},description:"Отображение линейки",name:"showScaleBar",required:!1,type:{name:"boolean"}},textInputFormatter:{defaultValue:null,description:"Функция для форматирования значений в текстовом поле",name:"textInputFormatter",required:!1,type:{name:"TextInputFormatter"}},unbindInputFromMarks:{defaultValue:null,description:"Отвязать текстовое поле от значений на линейке",name:"unbindInputFromMarks",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"Произвольный префикс для поля",name:"prefix",required:!1,type:{name:"ReactNode"}},postfix:{defaultValue:null,description:"Произвольный постфикс для поля",name:"postfix",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Является ли поле деактивированным",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Значение html-атрибута name",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Значение html-атрибута id",name:"id",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Колбек обработки получения фокуса",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"Колбек обработки потери фокуса",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},autoFocus:{defaultValue:{value:"false"},description:"Включен ли авто-фокус для поля",name:"autoFocus",required:!1,type:{name:"boolean"}},readonly:{defaultValue:{value:"false"},description:"Является ли поле доступным только для чтения",name:"readonly",required:!1,type:{name:"boolean"}},tipFormatter:{defaultValue:null,description:"",name:"tipFormatter",required:!1,type:{name:"((value: string | number) => ReactNode)"}},size:{defaultValue:{value:"s"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Лейбл",name:"label",required:!1,type:{name:"string"}},caption:{defaultValue:null,description:"Подпись справа от лейбла",name:"caption",required:!1,type:{name:"string"}},labelTooltip:{defaultValue:null,description:"Всплывающая подсказка лейбла",name:"labelTooltip",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Является ли поле обязательным",name:"required",required:!1,type:{name:"boolean"}},labelTooltipPlacement:{defaultValue:{value:"top"},description:"Расположение подсказки лейбла",name:"labelTooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},hint:{defaultValue:null,description:"Подсказка внизу",name:"hint",required:!1,type:{name:"string"}},showHintIcon:{defaultValue:null,description:"Отображать иконку подсказки",name:"showHintIcon",required:!1,type:{name:"boolean"}}}}}catch{}const Xe={title:"Components/Fields/Field Slider",component:C},H={10:"1gb",20:"2gb",30:"4gb",50:"16gb"},Ou={10:"10",20:"20",30:"30",40:"40",50:"50"},K={linear:"linear","non-linear":"non-linear"},Pu=({size:e,range:a,moveByMarks:n,storyMarks:t,step:i,...o})=>{const[T,F]=l.useState(o.value);l.useEffect(()=>{if(a&&typeof o.value=="number"){F([10,30]);return}F(o.value)},[o.value,a]);const p=l.useMemo(()=>{switch(t){case"non-linear":return H;case"linear":default:return Ou}},[t]),c=l.useCallback(E=>{switch(t){case"non-linear":return H[E];case"linear":default:return String(E)}},[t]);return s.jsx("div",{className:bu.wrapper,"data-size":e,children:s.jsx(C,{...o,size:e,range:a,value:T,onChange:F,marks:p,step:n?null:i,textInputFormatter:c})})},v={render:Pu,args:{id:"slider",value:10,min:10,max:50,step:1,range:!1,showScaleBar:!0,moveByMarks:!0,storyMarks:"linear",readonly:!1,disabled:!1,autoFocus:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",postfixIcon:k.PlaceholderSVG,prefix:"",postfix:""},argTypes:{...Su,labelTooltip:gu.labelTooltip,moveByMarks:{name:"[Story]: change value only by marks",type:"boolean",if:{arg:"showScaleBar",eq:!0}},storyMarks:{name:"[Story]: example marks",options:Object.keys(K),mapping:K,control:{type:"radio"},if:{arg:"showScaleBar",eq:!0}},postfixIcon:{name:"postfixIcon",options:Object.keys(k),mapping:k,control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${j.version}`,Eu,yu]},packageName:j.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var G,X,Y;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};export{Xe as default,v as fieldSlider};
