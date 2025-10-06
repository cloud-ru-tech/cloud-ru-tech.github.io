import{j as m}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as l,a as f,b as x,C as T,P as b,s as v}from"./styles.module-Cw1VgCwP.js";import{F as c}from"./FieldStepper-BwnqdGDV.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-BtuvvjWr.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-CAfvFIBF.js";import"./index-BAKcRSlX.js";import"./index-DNCO-vcx.js";import"./index-Y3TRpJ-L.js";import"./index-DreyRvUE.js";import"./index-Ca89sW9R.js";import"./index-C3mvkShn.js";import"./index-BGTKE3tV.js";import"./index-DHAmGKAZ.js";import"./index-h0kOFyIh.js";import"./index-BfUMklLA.js";import"./index-B0xwoRpp.js";import"./index-B2h5DBoi.js";import"./index-5mF7KA5g.js";import"./index-WpT-B0mJ.js";import"./index-B_69vUNX.js";import"./index-B80hK4m0.js";import"./index-w0WAZL2A.js";import"./index-Dn6vuaYJ.js";import"./index-CTTgWa-s.js";import"./index-CF_OgQNJ.js";import"./index-DBTBMFOQ.js";import"./index-CXJdfWGn.js";import"./index-x12pshUM.js";import"./index-CGSydWJd.js";import"./index-DbF-M2Rm.js";import"./FieldDecorator-Dre8Icai.js";import"./index-DUmpqB7p.js";import"./constants-9uwKbtvo.js";import"./TruncateString-d_nSHKm-.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./index-B7wZyJkK.js";import"./LocaleProvider-B4VrUkyw.js";import"./useValueControl-C51frgGe.js";import"./usePrefix-CWfsp2Rm.js";import"./FieldContainerPrivate-CWEZnWPH.js";import"./InputPrivate-DT-WJMRh.js";import"./ButtonFunction-IUEJSlMa.js";import"./utils-DoFi9RcI.js";import"./Counter-DXWSEFY6.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";const Mt={title:"Components/Fields/Field Stepper",component:c},g=({size:i,...t})=>{var p,a;const[o=0,n]=r.useState(t.value);return r.useEffect(()=>{n(t.value)},[t.value]),m.jsx("div",{className:v.wrapper,"data-size":i,children:m.jsx(c,{...t,plusButtonTooltip:{...t.plusButtonTooltip,tip:(p=t.plusButtonTooltip)==null?void 0:p.tip,open:typeof t.max=="number"&&o>=t.max?void 0:!1},minusButtonTooltip:{...t.minusButtonTooltip,tip:(a=t.minusButtonTooltip)==null?void 0:a.tip,open:typeof t.min=="number"&&o<=t.min?void 0:!1},size:i,value:o,onChange:n})})},e={render:g,args:{id:"text",value:6,min:0,max:10,step:1,readonly:!1,disabled:!1,autoFocus:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",prefix:"",postfix:"",validationState:"default",allowMoreThanLimits:!0,plusButtonTooltip:{tip:"Maximum value reached"},minusButtonTooltip:{tip:"Minimum value reached",placement:"bottom"}},argTypes:{...b,...T,localeName:{table:{disable:!0}},prefixIcon:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${l.version}`,f,x]},packageName:l.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var s,u,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
