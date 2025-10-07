import{j as m}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as l,a as f,b as x,C as T,P as b,s as v}from"./styles.module-BHFUaQ3M.js";import{F as c}from"./FieldStepper-BW7DJMVh.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-BNm8R02-.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-DbqLuSZO.js";import"./index-CysqOHM3.js";import"./index-B9R5O8r3.js";import"./index-DJKNHUMM.js";import"./index-BRR1gMd_.js";import"./index-Dz7uS-ju.js";import"./index-Clv-rw5D.js";import"./index-CzP9MZIz.js";import"./index-BEuzvn4S.js";import"./index-BBF-mQaP.js";import"./index-BjphwxxP.js";import"./index-CDbNS7dV.js";import"./index-BVwVdvrd.js";import"./index-CR9MRPhY.js";import"./index-BcIDvl5_.js";import"./index-DzgJkNAR.js";import"./index-Dz9fnX15.js";import"./index-DO2qqcLs.js";import"./index-DAce5EUV.js";import"./index-C1BBUjNh.js";import"./index-DadV-Vij.js";import"./index-CgyQooMQ.js";import"./index-CWV_8VIe.js";import"./index-BbJ9A0eL.js";import"./index-BSWI5MkI.js";import"./index-CbwBVTm2.js";import"./FieldDecorator-DzlZXL8S.js";import"./index-DUmpqB7p.js";import"./constants-9uwKbtvo.js";import"./TruncateString-d_nSHKm-.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./index-B7wZyJkK.js";import"./LocaleProvider-B4VrUkyw.js";import"./useValueControl-C51frgGe.js";import"./usePrefix-CWfsp2Rm.js";import"./FieldContainerPrivate-DXW68Do7.js";import"./InputPrivate-2jDCmCn-.js";import"./ButtonFunction-CHerW9fL.js";import"./utils-CFMmSnRl.js";import"./Counter-DXWSEFY6.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";const Mt={title:"Components/Fields/Field Stepper",component:c},g=({size:i,...t})=>{var p,a;const[o=0,n]=r.useState(t.value);return r.useEffect(()=>{n(t.value)},[t.value]),m.jsx("div",{className:v.wrapper,"data-size":i,children:m.jsx(c,{...t,plusButtonTooltip:{...t.plusButtonTooltip,tip:(p=t.plusButtonTooltip)==null?void 0:p.tip,open:typeof t.max=="number"&&o>=t.max?void 0:!1},minusButtonTooltip:{...t.minusButtonTooltip,tip:(a=t.minusButtonTooltip)==null?void 0:a.tip,open:typeof t.min=="number"&&o<=t.min?void 0:!1},size:i,value:o,onChange:n})})},e={render:g,args:{id:"text",value:6,min:0,max:10,step:1,readonly:!1,disabled:!1,autoFocus:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",prefix:"",postfix:"",validationState:"default",allowMoreThanLimits:!0,plusButtonTooltip:{tip:"Maximum value reached"},minusButtonTooltip:{tip:"Minimum value reached",placement:"bottom"}},argTypes:{...b,...T,localeName:{table:{disable:!0}},prefixIcon:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${l.version}`,f,x]},packageName:l.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var s,u,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'text',
    value: 6,
    min: 0,
    max: 10,
    step: 1,
    readonly: false,
    disabled: false,
    autoFocus: false,
    label: 'Label text',
    labelTooltip: 'Tooltip description',
    required: false,
    caption: 'Caption',
    hint: 'Hint text',
    size: 's',
    prefix: '',
    postfix: '',
    validationState: 'default',
    allowMoreThanLimits: true,
    plusButtonTooltip: {
      tip: 'Maximum value reached'
    },
    minusButtonTooltip: {
      tip: 'Minimum value reached',
      placement: 'bottom'
    }
  },
  argTypes: {
    ...PREFIX_POSTFIX_ARG_TYPES,
    ...COMMON_ARG_TYPES,
    localeName: {
      table: {
        disable: true
      }
    },
    prefixIcon: {
      table: {
        disable: true
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
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};export{Mt as default,e as fieldStepper};
