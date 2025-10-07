import{j as s}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{t as i}from"./helpers-Bho6rl5A.js";import{c as m,a as x,b as w,I as l,C as y,P as g,s as T}from"./styles.module-BHFUaQ3M.js";import{B as v}from"./FieldDecorator-DzlZXL8S.js";import{F as h}from"./FieldText-nq5uw6FG.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-DUmpqB7p.js";import"./index-Chjiymov.js";import"./index-BRR1gMd_.js";import"./index-BEuzvn4S.js";import"./ProgressBar-TiBN-Oau.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-DAce5EUV.js";import"./index-DbqLuSZO.js";import"./index-CbwBVTm2.js";import"./TruncateString-d_nSHKm-.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-JZGyZbA2.js";import"./Link-fKbAdNrg.js";import"./LocaleProvider-B4VrUkyw.js";import"./Scroll-CyeY1SIb.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./index-BNm8R02-.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-CysqOHM3.js";import"./index-B9R5O8r3.js";import"./index-DJKNHUMM.js";import"./index-Dz7uS-ju.js";import"./index-Clv-rw5D.js";import"./index-CzP9MZIz.js";import"./index-BBF-mQaP.js";import"./index-BjphwxxP.js";import"./index-CDbNS7dV.js";import"./index-BVwVdvrd.js";import"./index-CR9MRPhY.js";import"./index-BcIDvl5_.js";import"./index-DzgJkNAR.js";import"./index-Dz9fnX15.js";import"./index-DO2qqcLs.js";import"./index-C1BBUjNh.js";import"./index-DadV-Vij.js";import"./index-CgyQooMQ.js";import"./index-CWV_8VIe.js";import"./index-BbJ9A0eL.js";import"./index-BSWI5MkI.js";import"./constants-9uwKbtvo.js";import"./index-B7wZyJkK.js";import"./DropList-RDTv5EBf.js";import"./hooks-C-QfHKcH.js";import"./useValueControl-CNLw7ht-.js";import"./Checkbox-B_KgwA95.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./Switch-Sklt2bcB.js";import"./Dropdown-Dd0OUUBI.js";import"./index-D5mgDZkw.js";import"./IconPredefined-DVxQYij_.js";import"./Typography-ChgE300v.js";import"./ButtonTonal-iCs5y4Ch.js";import"./utils-CFMmSnRl.js";import"./Counter-DXWSEFY6.js";import"./ButtonFilled-_iBMQjFy.js";import"./Divider-C1X9zrkx.js";import"./Spinner-PYn9r2mo.js";import"./ButtonFunction-CHerW9fL.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-ChndVmuz.js";import"./InputPrivate-2jDCmCn-.js";import"./getArrowIcon-BmpiiXwL.js";import"./useValueControl-C51frgGe.js";import"./useCopyButton-fHCZwFW3.js";import"./index-DTH25FFD.js";import"./usePrefix-CWfsp2Rm.js";import"./FieldContainerPrivate-DXW68Do7.js";const oo={title:"Components/Fields/Field Text",component:h},O=({size:r,...t})=>{const[f,a]=o.useState(t.value),[n,b]=o.useState("");o.useEffect(()=>{a(t.value)},[t.value]);const C=o.useMemo(()=>{const p=[{id:"1",content:{option:"Option 1",caption:"Caption"},onClick:()=>{i.userAction.success({label:"Option 1 clicked"})}},{id:"2",content:{option:"Option 2",caption:"Caption"},onClick:()=>{i.userAction.success({label:"Option 2 clicked"})}},{id:"3",content:{option:"Option 3",caption:"Caption"},disabled:!0,onClick:()=>{i.userAction.success({label:"Option 2 clicked"})}}];return t.showButtonSearch?p.filter(S=>S.content.option.includes(n)):p},[n,t.showButtonSearch]);return s.jsx("div",{className:T.wrapper,"data-size":r,children:s.jsx(h,{...t,size:r,value:f,onChange:a,onCopyButtonClick:t.showCopyButton?()=>alert("Copy button clicked!"):()=>{},button:t.buttonContent?{variant:t.buttonVariant,content:t.buttonContent,search:t.showButtonSearch?{value:n,onChange:b,placeholder:"Search"}:void 0,items:t.showButtonItems?C:void 0}:void 0})})},e={render:O,args:{id:"text",value:"",placeholder:"Placeholder",maxLength:void 0,readonly:!1,showCopyButton:!0,disabled:!1,autoFocus:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",validationState:"default",prefixIcon:"none",prefix:"",postfix:"",buttonContent:"none",buttonVariant:"before",showButtonItems:!1,showClearButton:!0,showButtonSearch:!1,allowMoreThanMaxLength:!1,inputMode:"text"},argTypes:{...g,...y,localeName:{table:{disable:!0}},buttonContent:{name:"[Story]: Field button content",options:Object.keys(l),mapping:l,control:{type:"select"}},buttonVariant:{options:Object.values(v),control:{type:"radio"}},showButtonItems:{name:"[Story]: Show icon drop"},showButtonSearch:{name:"[Story]: Show search in drop"}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,x,w]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
