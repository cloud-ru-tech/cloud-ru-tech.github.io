import{j as s}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{t as i}from"./helpers-Bb_FfY3_.js";import{c as m,a as x,b as w,I as l,C as y,P as g,s as T}from"./styles.module-BSi_6jue.js";import{B as v}from"./FieldDecorator-ik4VIVcF.js";import{F as h}from"./FieldText-COxwc_Qs.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-CXM-PPQz.js";import"./index-Chjiymov.js";import"./index-Cxdp8tlc.js";import"./index-C3gycbXm.js";import"./ProgressBar-G0ToIzOu.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-BPI37A09.js";import"./index-S9IyB2Vz.js";import"./index-BDKfaAX1.js";import"./TruncateString-DMHAWZlY.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DaeWZEms.js";import"./PopoverPrivate-BQgi56s-.js";import"./index-JZGyZbA2.js";import"./Link-cLNEphnk.js";import"./LocaleProvider-XVitSj_D.js";import"./Scroll-p7EvfiBx.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";import"./index-C8tV8B5x.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-osW-_rgC.js";import"./index-x7ArlFfL.js";import"./index-Df-dmYFR.js";import"./index-CSMTAo6Q.js";import"./index-00FjgX9j.js";import"./index-BTBTknnI.js";import"./index-CNC7znSK.js";import"./index-9-iRZIMV.js";import"./index-DRtCvpDZ.js";import"./index-C11pXQBT.js";import"./index-BkuB1v93.js";import"./index-CoXSb06U.js";import"./index-s39huXS1.js";import"./index-B6hh_CYl.js";import"./index-CP5aoo4S.js";import"./index-DW7JD-Lj.js";import"./index-BURG081a.js";import"./index-BnZREprt.js";import"./index-CsyvGLEa.js";import"./index-Bd4f5iIr.js";import"./index-OG_QCddz.js";import"./constants-9uwKbtvo.js";import"./index-B7wZyJkK.js";import"./DropList-DEhmQza7.js";import"./hooks-Cb7q2uDh.js";import"./useValueControl-CNLw7ht-.js";import"./Checkbox-BrjwspCG.js";import"./constants-BObEONKm.js";import"./TogglePrivate-D_Ey2AsU.js";import"./Switch-CnO5GMY9.js";import"./Dropdown-CJIpH82E.js";import"./index-DCrMFnLF.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-B_4XbOMz.js";import"./ButtonTonal-CmQYw77c.js";import"./utils-d0rn_W0T.js";import"./Counter-C_DywCEs.js";import"./ButtonFilled-DZiul5Ky.js";import"./Divider-CUoM6iCM.js";import"./Spinner-BJeEd4V6.js";import"./ButtonFunction-CtElqV7K.js";import"./useButtonNavigation-EjhHKyx9.js";import"./useClearButton-C6OboUMx.js";import"./InputPrivate-uCEkO2Kz.js";import"./getArrowIcon-B1qWAZNS.js";import"./useValueControl-C51frgGe.js";import"./useCopyButton-BqIt3Q0f.js";import"./index-DTH25FFD.js";import"./usePrefix-CWfsp2Rm.js";import"./FieldContainerPrivate-CZv8KltA.js";const oo={title:"Components/Fields/Field Text",component:h},O=({size:r,...t})=>{const[f,a]=o.useState(t.value),[n,b]=o.useState("");o.useEffect(()=>{a(t.value)},[t.value]);const C=o.useMemo(()=>{const p=[{id:"1",content:{option:"Option 1",caption:"Caption"},onClick:()=>{i.userAction.success({label:"Option 1 clicked"})}},{id:"2",content:{option:"Option 2",caption:"Caption"},onClick:()=>{i.userAction.success({label:"Option 2 clicked"})}},{id:"3",content:{option:"Option 3",caption:"Caption"},disabled:!0,onClick:()=>{i.userAction.success({label:"Option 2 clicked"})}}];return t.showButtonSearch?p.filter(S=>S.content.option.includes(n)):p},[n,t.showButtonSearch]);return s.jsx("div",{className:T.wrapper,"data-size":r,children:s.jsx(h,{...t,size:r,value:f,onChange:a,onCopyButtonClick:t.showCopyButton?()=>alert("Copy button clicked!"):()=>{},button:t.buttonContent?{variant:t.buttonVariant,content:t.buttonContent,search:t.showButtonSearch?{value:n,onChange:b,placeholder:"Search"}:void 0,items:t.showButtonItems?C:void 0}:void 0})})},e={render:O,args:{id:"text",value:"",placeholder:"Placeholder",maxLength:void 0,readonly:!1,showCopyButton:!0,disabled:!1,autoFocus:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",validationState:"default",prefixIcon:"none",prefix:"",postfix:"",buttonContent:"none",buttonVariant:"before",showButtonItems:!1,showClearButton:!0,showButtonSearch:!1,allowMoreThanMaxLength:!1,inputMode:"text"},argTypes:{...g,...y,localeName:{table:{disable:!0}},buttonContent:{name:"[Story]: Field button content",options:Object.keys(l),mapping:l,control:{type:"select"}},buttonVariant:{options:Object.values(v),control:{type:"radio"}},showButtonItems:{name:"[Story]: Show icon drop"},showButtonSearch:{name:"[Story]: Show search in drop"}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,x,w]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
