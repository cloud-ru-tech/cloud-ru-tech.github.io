import{j as m}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as l,a as f,b as x,C as T,P as b,s as v}from"./styles.module-DnLW949H.js";import{F as c}from"./FieldStepper-CChFiWZf.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DBR3TzFE.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-COwW15wl.js";import"./index-DOUS9uWn.js";import"./index-CO8qBMZD.js";import"./index-xpeDvz-o.js";import"./index-CF-13Pl-.js";import"./index-DHfXeKe7.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-CoIthjug.js";import"./index-CAYnss5D.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-DYaIcqfi.js";import"./index-CU6E9CWM.js";import"./index-Cz4dqGWG.js";import"./index-BaJp5iwV.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./index-Dj3Kdo0x.js";import"./FieldDecorator-C5py8abe.js";import"./index-CXM-PPQz.js";import"./constants-9uwKbtvo.js";import"./TruncateString-Chrk-fjN.js";import"./lodash-DyrGR4_s.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-CeCihl4C.js";import"./PopoverPrivate-Dbj5k6oN.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";import"./index-B7wZyJkK.js";import"./LocaleProvider-7fZm_0X9.js";import"./useValueControl-C51frgGe.js";import"./usePrefix-CWfsp2Rm.js";import"./FieldContainerPrivate-BWTpfuyA.js";import"./InputPrivate-DSbAEC5z.js";import"./ButtonFunction-CsJIzq2t.js";import"./utils-nE8vb_Mt.js";import"./Counter-CVeRO6SA.js";import"./Sun-Czt8-gDg.js";import"./constants-BAH7I9kc.js";const yt={title:"Components/Fields/Field Stepper",component:c},g=({size:i,...t})=>{var p,a;const[o=0,n]=r.useState(t.value);return r.useEffect(()=>{n(t.value)},[t.value]),m.jsx("div",{className:v.wrapper,"data-size":i,children:m.jsx(c,{...t,plusButtonTooltip:{...t.plusButtonTooltip,tip:(p=t.plusButtonTooltip)==null?void 0:p.tip,open:typeof t.max=="number"&&o>=t.max?void 0:!1},minusButtonTooltip:{...t.minusButtonTooltip,tip:(a=t.minusButtonTooltip)==null?void 0:a.tip,open:typeof t.min=="number"&&o<=t.min?void 0:!1},size:i,value:o,onChange:n})})},e={render:g,args:{id:"text",value:6,min:0,max:10,step:1,readonly:!1,disabled:!1,autoFocus:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",prefix:"",postfix:"",validationState:"default",allowMoreThanLimits:!0,plusButtonTooltip:{tip:"Maximum value reached"},minusButtonTooltip:{tip:"Minimum value reached",placement:"bottom"}},argTypes:{...b,...T,localeName:{table:{disable:!0}},prefixIcon:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${l.version}`,f,x]},packageName:l.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var s,u,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};export{yt as default,e as fieldStepper};
