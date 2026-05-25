import{j as m}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as l,a as f,b as x,C as T,P as b,s as v}from"./styles.module-BSi_6jue.js";import{F as c}from"./FieldStepper-DUByLF1g.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-C8tV8B5x.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-S9IyB2Vz.js";import"./index-osW-_rgC.js";import"./index-x7ArlFfL.js";import"./index-Df-dmYFR.js";import"./index-Cxdp8tlc.js";import"./index-CSMTAo6Q.js";import"./index-00FjgX9j.js";import"./index-BTBTknnI.js";import"./index-C3gycbXm.js";import"./index-CNC7znSK.js";import"./index-9-iRZIMV.js";import"./index-DRtCvpDZ.js";import"./index-C11pXQBT.js";import"./index-BkuB1v93.js";import"./index-CoXSb06U.js";import"./index-s39huXS1.js";import"./index-B6hh_CYl.js";import"./index-CP5aoo4S.js";import"./index-BPI37A09.js";import"./index-DW7JD-Lj.js";import"./index-BURG081a.js";import"./index-BnZREprt.js";import"./index-CsyvGLEa.js";import"./index-Bd4f5iIr.js";import"./index-OG_QCddz.js";import"./index-BDKfaAX1.js";import"./FieldDecorator-ik4VIVcF.js";import"./index-CXM-PPQz.js";import"./constants-9uwKbtvo.js";import"./TruncateString-DMHAWZlY.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-DaeWZEms.js";import"./PopoverPrivate-BQgi56s-.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";import"./index-B7wZyJkK.js";import"./LocaleProvider-XVitSj_D.js";import"./useValueControl-C51frgGe.js";import"./usePrefix-CWfsp2Rm.js";import"./FieldContainerPrivate-CZv8KltA.js";import"./InputPrivate-uCEkO2Kz.js";import"./ButtonFunction-CtElqV7K.js";import"./utils-d0rn_W0T.js";import"./Counter-C_DywCEs.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";const Mt={title:"Components/Fields/Field Stepper",component:c},g=({size:i,...t})=>{var p,a;const[o=0,n]=r.useState(t.value);return r.useEffect(()=>{n(t.value)},[t.value]),m.jsx("div",{className:v.wrapper,"data-size":i,children:m.jsx(c,{...t,plusButtonTooltip:{...t.plusButtonTooltip,tip:(p=t.plusButtonTooltip)==null?void 0:p.tip,open:typeof t.max=="number"&&o>=t.max?void 0:!1},minusButtonTooltip:{...t.minusButtonTooltip,tip:(a=t.minusButtonTooltip)==null?void 0:a.tip,open:typeof t.min=="number"&&o<=t.min?void 0:!1},size:i,value:o,onChange:n})})},e={render:g,args:{id:"text",value:6,min:0,max:10,step:1,readonly:!1,disabled:!1,autoFocus:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",prefix:"",postfix:"",validationState:"default",allowMoreThanLimits:!0,plusButtonTooltip:{tip:"Maximum value reached"},minusButtonTooltip:{tip:"Minimum value reached",placement:"bottom"}},argTypes:{...b,...T,localeName:{table:{disable:!0}},prefixIcon:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${l.version}`,f,x]},packageName:l.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var s,u,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
