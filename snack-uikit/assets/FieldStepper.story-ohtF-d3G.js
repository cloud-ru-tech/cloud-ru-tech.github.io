import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{r as a}from"./index-CJ_LmFaV.js";import{c as n,a as c,b as f,C as u,P as g,s as x}from"./styles.module-BGmHF_V8.js";import{F as l}from"./FieldStepper-5dw8r-b4.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-BF1oV8qY.js";import"./Sprite-BKF2l_N7.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-DbqLuSZO.js";import"./index-CysqOHM3.js";import"./index-B9R5O8r3.js";import"./index-DJKNHUMM.js";import"./index-D9kkE69R.js";import"./index-Dz7uS-ju.js";import"./index-Clv-rw5D.js";import"./index-Hxt3JBiD.js";import"./index-CzP9MZIz.js";import"./index-BEuzvn4S.js";import"./index-BBF-mQaP.js";import"./index-BjphwxxP.js";import"./index-CDbNS7dV.js";import"./index-BVwVdvrd.js";import"./index-CR9MRPhY.js";import"./index-BcIDvl5_.js";import"./index-DzgJkNAR.js";import"./index-Dz9fnX15.js";import"./index-DO2qqcLs.js";import"./index-DAce5EUV.js";import"./index-C1BBUjNh.js";import"./index-DadV-Vij.js";import"./index-CgyQooMQ.js";import"./index-CWV_8VIe.js";import"./index-BbJ9A0eL.js";import"./index-BSWI5MkI.js";import"./index-CbwBVTm2.js";import"./FieldDecorator-BZBVvQyu.js";import"./index-DUmpqB7p.js";import"./constants-9uwKbtvo.js";import"./TruncateString-BGqQdUJ0.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-Bksrf_Jf.js";import"./PopoverPrivate-TrV_4kB1.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./index-B7wZyJkK.js";import"./LocaleProvider-CyhbxqE1.js";import"./useValueControl-CNLw7ht-.js";import"./usePrefix-BmEKZSSL.js";import"./FieldContainerPrivate-y-39ornN.js";import"./InputPrivate-jePr3gWJ.js";import"./ButtonFunction-C7EKoXlo.js";import"./utils-C_yiyfaQ.js";import"./Counter-dO15w468.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";const Ce={title:"Components/Fields/Field Stepper",component:l},b=({size:i,...e})=>{const[d,o]=a.useState(e.value);return a.useEffect(()=>{o(e.value)},[e.value]),r.jsx("div",{className:x.wrapper,"data-size":i,children:r.jsx(l,{...e,size:i,value:d,onChange:o})})},t={render:b,args:{id:"text",value:6,min:0,max:10,step:1,readonly:!1,disabled:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",prefix:"",postfix:"",validationState:"default",allowMoreThanLimits:!0},argTypes:{...g,...u,localeName:{table:{disable:!0}},prefixIcon:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${n.version}`,c,f]},packageName:n.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var p,m,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'text',
    value: 6,
    min: 0,
    max: 10,
    step: 1,
    readonly: false,
    disabled: false,
    label: 'Label text',
    labelTooltip: 'Tooltip description',
    required: false,
    caption: 'Caption',
    hint: 'Hint text',
    size: 's',
    prefix: '',
    postfix: '',
    validationState: 'default',
    allowMoreThanLimits: true
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
}`,...(s=(m=t.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{Ce as default,t as fieldStepper};
