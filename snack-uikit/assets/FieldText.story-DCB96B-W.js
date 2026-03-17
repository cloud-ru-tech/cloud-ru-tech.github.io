import{j as s}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{t as i}from"./helpers-B4UQ-_Kz.js";import{c as m,a as x,b as w,I as l,C as y,P as g,s as T}from"./styles.module-BIh4hA3y.js";import{B as v}from"./FieldDecorator-B_cQUx2K.js";import{F as h}from"./FieldText-CxMv1j8s.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-CXM-PPQz.js";import"./index-Chjiymov.js";import"./index-DHfXeKe7.js";import"./index-CAYnss5D.js";import"./ProgressBar-BNc-jdnc.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-DYaIcqfi.js";import"./index-DOUS9uWn.js";import"./index-Dj3Kdo0x.js";import"./TruncateString-8fx12mpr.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DPiNZODn.js";import"./PopoverPrivate-B95kCLoW.js";import"./index-JZGyZbA2.js";import"./Link-DmCYi7hU.js";import"./LocaleProvider-XVitSj_D.js";import"./Scroll-Dm8myf0Z.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./index-DpKFoNwX.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-CO8qBMZD.js";import"./index-xpeDvz-o.js";import"./index-CF-13Pl-.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-CoIthjug.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-CU6E9CWM.js";import"./index-Cz4dqGWG.js";import"./index-BaJp5iwV.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./constants-9uwKbtvo.js";import"./index-B7wZyJkK.js";import"./DropList-CK8X2bvD.js";import"./hooks-2EOYb2Fc.js";import"./useValueControl-CNLw7ht-.js";import"./Checkbox-EYQuXigq.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./Switch-BA2EpnNq.js";import"./Dropdown-BG-YlcBb.js";import"./index-qOHOPsM2.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-DK_av7HF.js";import"./ButtonTonal-NDiypO_-.js";import"./utils-DMpcSqHm.js";import"./Counter-BqPtvVBi.js";import"./ButtonFilled-4YTDz-tp.js";import"./Divider-Damo9_Fl.js";import"./Spinner-kGs9Wy83.js";import"./ButtonFunction-Bv8Cq_il.js";import"./useButtonNavigation-DWQsSWNs.js";import"./useClearButton-BanTqwIy.js";import"./InputPrivate-DobHWngL.js";import"./getArrowIcon-LeBkYqWW.js";import"./useValueControl-C51frgGe.js";import"./useCopyButton-BJzW5oYO.js";import"./index-DTH25FFD.js";import"./usePrefix-CWfsp2Rm.js";import"./FieldContainerPrivate-B7RqP8qm.js";const oo={title:"Components/Fields/Field Text",component:h},O=({size:r,...t})=>{const[f,a]=o.useState(t.value),[n,b]=o.useState("");o.useEffect(()=>{a(t.value)},[t.value]);const C=o.useMemo(()=>{const p=[{id:"1",content:{option:"Option 1",caption:"Caption"},onClick:()=>{i.userAction.success({label:"Option 1 clicked"})}},{id:"2",content:{option:"Option 2",caption:"Caption"},onClick:()=>{i.userAction.success({label:"Option 2 clicked"})}},{id:"3",content:{option:"Option 3",caption:"Caption"},disabled:!0,onClick:()=>{i.userAction.success({label:"Option 2 clicked"})}}];return t.showButtonSearch?p.filter(S=>S.content.option.includes(n)):p},[n,t.showButtonSearch]);return s.jsx("div",{className:T.wrapper,"data-size":r,children:s.jsx(h,{...t,size:r,value:f,onChange:a,onCopyButtonClick:t.showCopyButton?()=>alert("Copy button clicked!"):()=>{},button:t.buttonContent?{variant:t.buttonVariant,content:t.buttonContent,search:t.showButtonSearch?{value:n,onChange:b,placeholder:"Search"}:void 0,items:t.showButtonItems?C:void 0}:void 0})})},e={render:O,args:{id:"text",value:"",placeholder:"Placeholder",maxLength:void 0,readonly:!1,showCopyButton:!0,disabled:!1,autoFocus:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",validationState:"default",prefixIcon:"none",prefix:"",postfix:"",buttonContent:"none",buttonVariant:"before",showButtonItems:!1,showClearButton:!0,showButtonSearch:!1,allowMoreThanMaxLength:!1,inputMode:"text"},argTypes:{...g,...y,localeName:{table:{disable:!0}},buttonContent:{name:"[Story]: Field button content",options:Object.keys(l),mapping:l,control:{type:"select"}},buttonVariant:{options:Object.values(v),control:{type:"radio"}},showButtonItems:{name:"[Story]: Show icon drop"},showButtonSearch:{name:"[Story]: Show search in drop"}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,x,w]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
