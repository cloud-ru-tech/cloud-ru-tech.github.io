import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{r as a}from"./index-CJ_LmFaV.js";import{c as n,a as c,b as f,C as u,P as g,s as x}from"./styles.module-BLRqHsxY.js";import{F as l}from"./FieldStepper-nCgBHj8z.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DyrYaBr5.js";import"./Sprite-BKF2l_N7.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-C-NxZ9RO.js";import"./index-Dz039XZe.js";import"./index-HYofs7FJ.js";import"./index-DtRrUciF.js";import"./index-BLj3vrxU.js";import"./index-BKaanG2n.js";import"./index-DLGJiw2b.js";import"./index-C7IVzcIX.js";import"./index-CX1lIXbQ.js";import"./index-BQAaeyfQ.js";import"./index-DLRniMSR.js";import"./index-BJ2Oj32Z.js";import"./index-0zxx_KqD.js";import"./index-NU8U5csw.js";import"./index-I1zimRE2.js";import"./index-BIeLB8C9.js";import"./index-BcKv4fI4.js";import"./index-CIcT2jya.js";import"./index-3XDw48l5.js";import"./index-6PN_JoHT.js";import"./index-C9_U387z.js";import"./index-CwHIobxP.js";import"./index-B9oUDl45.js";import"./index-Baw9oej9.js";import"./index-BJDjEDgt.js";import"./index-Drk0xmYR.js";import"./index-zbp_5bxn.js";import"./FieldDecorator-BxseZHg2.js";import"./index-DUmpqB7p.js";import"./constants-9uwKbtvo.js";import"./TruncateString-BGqQdUJ0.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-Bksrf_Jf.js";import"./PopoverPrivate-TrV_4kB1.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./index-B7wZyJkK.js";import"./LocaleProvider-CyhbxqE1.js";import"./useValueControl-CNLw7ht-.js";import"./usePrefix-BmEKZSSL.js";import"./FieldContainerPrivate-DJ70UCU3.js";import"./InputPrivate-CzAlmSik.js";import"./ButtonFunction-BElZbry1.js";import"./utils-BM2s5Pk-.js";import"./Counter-dO15w468.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";const Ce={title:"Components/Fields/Field Stepper",component:l},b=({size:i,...e})=>{const[d,o]=a.useState(e.value);return a.useEffect(()=>{o(e.value)},[e.value]),r.jsx("div",{className:x.wrapper,"data-size":i,children:r.jsx(l,{...e,size:i,value:d,onChange:o})})},t={render:b,args:{id:"text",value:6,min:0,max:10,step:1,readonly:!1,disabled:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",prefix:"",postfix:"",validationState:"default",allowMoreThanLimits:!0},argTypes:{...g,...u,localeName:{table:{disable:!0}},prefixIcon:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${n.version}`,c,f]},packageName:n.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var p,m,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
