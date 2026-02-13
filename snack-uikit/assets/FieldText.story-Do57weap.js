import{j as s}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{t as i}from"./helpers-CgiRGsBc.js";import{c as m,a as x,b as w,I as l,C as y,P as g,s as T}from"./styles.module-BBqSjUSy.js";import{B as v}from"./FieldDecorator-B-tYKNGC.js";import{F as h}from"./FieldText-VpC1VJB1.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-DUmpqB7p.js";import"./index-Chjiymov.js";import"./index-DreyRvUE.js";import"./index-DHAmGKAZ.js";import"./ProgressBar-ngck8Lan.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-Dn6vuaYJ.js";import"./index-CAfvFIBF.js";import"./index-DbF-M2Rm.js";import"./TruncateString-DnLT93lE.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-fOEkX7i0.js";import"./PopoverPrivate-C4IEYshr.js";import"./index-JZGyZbA2.js";import"./Link-WjXiYJAK.js";import"./LocaleProvider-DhC1J63f.js";import"./Scroll-CyeY1SIb.js";import"./Sun-BLz2v2u6.js";import"./constants-BAH7I9kc.js";import"./index-JswG3_7a.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-BAKcRSlX.js";import"./index-CKE7Rdrn.js";import"./index-Y3TRpJ-L.js";import"./index-Ca89sW9R.js";import"./index-C3mvkShn.js";import"./index-BGTKE3tV.js";import"./index-h0kOFyIh.js";import"./index-BfUMklLA.js";import"./index-B0xwoRpp.js";import"./index-B2h5DBoi.js";import"./index-5mF7KA5g.js";import"./index-WpT-B0mJ.js";import"./index-B_69vUNX.js";import"./index-B80hK4m0.js";import"./index-w0WAZL2A.js";import"./index-CTTgWa-s.js";import"./index-CF_OgQNJ.js";import"./index-DBTBMFOQ.js";import"./index-CXJdfWGn.js";import"./index-x12pshUM.js";import"./index-CGSydWJd.js";import"./constants-9uwKbtvo.js";import"./index-B7wZyJkK.js";import"./DropList-tV7iwXNK.js";import"./hooks-ul0rw9Ln.js";import"./useValueControl-CNLw7ht-.js";import"./Checkbox-CSVw01DX.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./Switch-DNtPql5T.js";import"./Dropdown-DkDzFOoy.js";import"./index-DgWwr5Nb.js";import"./IconPredefined-CdsMvCqQ.js";import"./Typography-COVcnQ5F.js";import"./ButtonTonal-hMtR5mgl.js";import"./utils-BSsgJRY4.js";import"./Counter-D8sCmdvq.js";import"./ButtonFilled-Dc8QW1ok.js";import"./Divider-C1X9zrkx.js";import"./Spinner-DwtrFO2L.js";import"./ButtonFunction-EXNPkCx6.js";import"./useButtonNavigation-Cv4Ihyzs.js";import"./useClearButton-gCQy__sB.js";import"./InputPrivate-Bkfzx-YV.js";import"./getArrowIcon-Cs5vBdSw.js";import"./useValueControl-C51frgGe.js";import"./useCopyButton-BBm4LaWi.js";import"./index-DTH25FFD.js";import"./usePrefix-CWfsp2Rm.js";import"./FieldContainerPrivate-BbrqhJvv.js";const oo={title:"Components/Fields/Field Text",component:h},O=({size:r,...t})=>{const[f,a]=o.useState(t.value),[n,b]=o.useState("");o.useEffect(()=>{a(t.value)},[t.value]);const C=o.useMemo(()=>{const p=[{id:"1",content:{option:"Option 1",caption:"Caption"},onClick:()=>{i.userAction.success({label:"Option 1 clicked"})}},{id:"2",content:{option:"Option 2",caption:"Caption"},onClick:()=>{i.userAction.success({label:"Option 2 clicked"})}},{id:"3",content:{option:"Option 3",caption:"Caption"},disabled:!0,onClick:()=>{i.userAction.success({label:"Option 2 clicked"})}}];return t.showButtonSearch?p.filter(S=>S.content.option.includes(n)):p},[n,t.showButtonSearch]);return s.jsx("div",{className:T.wrapper,"data-size":r,children:s.jsx(h,{...t,size:r,value:f,onChange:a,onCopyButtonClick:t.showCopyButton?()=>alert("Copy button clicked!"):()=>{},button:t.buttonContent?{variant:t.buttonVariant,content:t.buttonContent,search:t.showButtonSearch?{value:n,onChange:b,placeholder:"Search"}:void 0,items:t.showButtonItems?C:void 0}:void 0})})},e={render:O,args:{id:"text",value:"",placeholder:"Placeholder",maxLength:void 0,readonly:!1,showCopyButton:!0,disabled:!1,autoFocus:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",validationState:"default",prefixIcon:"none",prefix:"",postfix:"",buttonContent:"none",buttonVariant:"before",showButtonItems:!1,showClearButton:!0,showButtonSearch:!1,allowMoreThanMaxLength:!1,inputMode:"text"},argTypes:{...g,...y,localeName:{table:{disable:!0}},buttonContent:{name:"[Story]: Field button content",options:Object.keys(l),mapping:l,control:{type:"select"}},buttonVariant:{options:Object.values(v),control:{type:"radio"}},showButtonItems:{name:"[Story]: Show icon drop"},showButtonSearch:{name:"[Story]: Show search in drop"}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,x,w]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
