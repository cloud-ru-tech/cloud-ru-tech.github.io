import{j as s}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{t as i}from"./helpers-BaT4OY91.js";import{c as m,a as x,b as w,I as l,C as y,P as g,s as T}from"./styles.module-CG5SZ_8Y.js";import{B as v}from"./FieldDecorator-S_PpUupy.js";import{F as h}from"./FieldText-BOm-bVSj.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-CXM-PPQz.js";import"./index-Chjiymov.js";import"./index-BRR1gMd_.js";import"./index-BEuzvn4S.js";import"./ProgressBar-G0ToIzOu.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-DAce5EUV.js";import"./index-DbqLuSZO.js";import"./index-CbwBVTm2.js";import"./TruncateString-CnV2azF-.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DQsuwVbM.js";import"./PopoverPrivate-BQgi56s-.js";import"./index-JZGyZbA2.js";import"./Link-BviaQLwA.js";import"./LocaleProvider-XVitSj_D.js";import"./Scroll-Dm8myf0Z.js";import"./Sun-CsDryrZF.js";import"./constants-BAH7I9kc.js";import"./index-bDUic7X-.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-CysqOHM3.js";import"./index-CeNW9I8B.js";import"./index-DJKNHUMM.js";import"./index-Dz7uS-ju.js";import"./index-Clv-rw5D.js";import"./index-CzP9MZIz.js";import"./index-BBF-mQaP.js";import"./index-BjphwxxP.js";import"./index-CDbNS7dV.js";import"./index-BVwVdvrd.js";import"./index-CR9MRPhY.js";import"./index-BcIDvl5_.js";import"./index-DzgJkNAR.js";import"./index-Dz9fnX15.js";import"./index-DO2qqcLs.js";import"./index-C1BBUjNh.js";import"./index-DadV-Vij.js";import"./index-CgyQooMQ.js";import"./index-CWV_8VIe.js";import"./index-BbJ9A0eL.js";import"./index-BSWI5MkI.js";import"./constants-9uwKbtvo.js";import"./index-B7wZyJkK.js";import"./DropList-DxFrBtuK.js";import"./hooks-CfYIaD7Y.js";import"./useValueControl-CNLw7ht-.js";import"./Checkbox-0MSBHIxJ.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./Switch-CroE0ZcT.js";import"./Dropdown-QZJyCW3f.js";import"./index-rQ4BHT3j.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-BRWvDK8D.js";import"./ButtonTonal-CFLlDW_O.js";import"./utils-zyQx_1x7.js";import"./Counter-BqPtvVBi.js";import"./ButtonFilled-DHbuNNkW.js";import"./Divider-BbKtI3tl.js";import"./Spinner-CmWv-wEi.js";import"./ButtonFunction-CSMRw3fa.js";import"./useButtonNavigation-EjhHKyx9.js";import"./useClearButton-B1sH0xf8.js";import"./InputPrivate-AlwBMVDa.js";import"./getArrowIcon-BmpiiXwL.js";import"./useValueControl-C51frgGe.js";import"./useCopyButton-fHCZwFW3.js";import"./index-DTH25FFD.js";import"./usePrefix-CWfsp2Rm.js";import"./FieldContainerPrivate-Bb1bCPy0.js";const oo={title:"Components/Fields/Field Text",component:h},O=({size:r,...t})=>{const[f,a]=o.useState(t.value),[n,b]=o.useState("");o.useEffect(()=>{a(t.value)},[t.value]);const C=o.useMemo(()=>{const p=[{id:"1",content:{option:"Option 1",caption:"Caption"},onClick:()=>{i.userAction.success({label:"Option 1 clicked"})}},{id:"2",content:{option:"Option 2",caption:"Caption"},onClick:()=>{i.userAction.success({label:"Option 2 clicked"})}},{id:"3",content:{option:"Option 3",caption:"Caption"},disabled:!0,onClick:()=>{i.userAction.success({label:"Option 2 clicked"})}}];return t.showButtonSearch?p.filter(S=>S.content.option.includes(n)):p},[n,t.showButtonSearch]);return s.jsx("div",{className:T.wrapper,"data-size":r,children:s.jsx(h,{...t,size:r,value:f,onChange:a,onCopyButtonClick:t.showCopyButton?()=>alert("Copy button clicked!"):()=>{},button:t.buttonContent?{variant:t.buttonVariant,content:t.buttonContent,search:t.showButtonSearch?{value:n,onChange:b,placeholder:"Search"}:void 0,items:t.showButtonItems?C:void 0}:void 0})})},e={render:O,args:{id:"text",value:"",placeholder:"Placeholder",maxLength:void 0,readonly:!1,showCopyButton:!0,disabled:!1,autoFocus:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",validationState:"default",prefixIcon:"none",prefix:"",postfix:"",buttonContent:"none",buttonVariant:"before",showButtonItems:!1,showClearButton:!0,showButtonSearch:!1,allowMoreThanMaxLength:!1,inputMode:"text"},argTypes:{...g,...y,localeName:{table:{disable:!0}},buttonContent:{name:"[Story]: Field button content",options:Object.keys(l),mapping:l,control:{type:"select"}},buttonVariant:{options:Object.values(v),control:{type:"radio"}},showButtonItems:{name:"[Story]: Show icon drop"},showButtonSearch:{name:"[Story]: Show search in drop"}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,x,w]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'text',
    value: '',
    placeholder: 'Placeholder',
    maxLength: undefined,
    readonly: false,
    showCopyButton: true,
    disabled: false,
    autoFocus: false,
    label: 'Label text',
    labelTooltip: 'Tooltip description',
    required: false,
    caption: 'Caption',
    hint: 'Hint text',
    size: 's',
    validationState: 'default',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    prefixIcon: 'none',
    prefix: '',
    postfix: '',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    buttonContent: 'none',
    buttonVariant: 'before',
    showButtonItems: false,
    showClearButton: true,
    showButtonSearch: false,
    allowMoreThanMaxLength: false,
    inputMode: 'text'
  },
  argTypes: {
    ...PREFIX_POSTFIX_ARG_TYPES,
    ...COMMON_ARG_TYPES,
    localeName: {
      table: {
        disable: true
      }
    },
    buttonContent: {
      name: '[Story]: Field button content',
      options: Object.keys(ICONS),
      mapping: ICONS,
      control: {
        type: 'select'
      }
    },
    buttonVariant: {
      options: Object.values(BUTTON_VARIANT),
      control: {
        type: 'radio'
      }
    },
    showButtonItems: {
      name: '[Story]: Show icon drop'
    },
    showButtonSearch: {
      name: '[Story]: Show search in drop'
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
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};export{oo as default,e as fieldText};
