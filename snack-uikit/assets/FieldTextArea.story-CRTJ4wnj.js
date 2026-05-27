import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as a}from"./index-CJ_LmFaV.js";import{c as d,a as w,b as T,C as u,s as r}from"./styles.module-CG5SZ_8Y.js";import{P as s}from"./index-C1BBUjNh.js";import{F as g}from"./FieldTextArea-BTwrO61K.js";import{B as l}from"./ButtonFunction-CSMRw3fa.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-bDUic7X-.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-DbqLuSZO.js";import"./index-CysqOHM3.js";import"./index-CeNW9I8B.js";import"./index-DJKNHUMM.js";import"./index-BRR1gMd_.js";import"./index-Dz7uS-ju.js";import"./index-Clv-rw5D.js";import"./index-CzP9MZIz.js";import"./index-BEuzvn4S.js";import"./index-BBF-mQaP.js";import"./index-BjphwxxP.js";import"./index-CDbNS7dV.js";import"./index-BVwVdvrd.js";import"./index-CR9MRPhY.js";import"./index-BcIDvl5_.js";import"./index-DzgJkNAR.js";import"./index-Dz9fnX15.js";import"./index-DO2qqcLs.js";import"./index-DAce5EUV.js";import"./index-DadV-Vij.js";import"./index-CgyQooMQ.js";import"./index-CWV_8VIe.js";import"./index-BbJ9A0eL.js";import"./index-BSWI5MkI.js";import"./index-CbwBVTm2.js";import"./FieldDecorator-S_PpUupy.js";import"./index-CXM-PPQz.js";import"./constants-9uwKbtvo.js";import"./TruncateString-CnV2azF-.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-DQsuwVbM.js";import"./PopoverPrivate-BQgi56s-.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";import"./index-B7wZyJkK.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useValueControl-C51frgGe.js";import"./useClearButton-B1sH0xf8.js";import"./useCopyButton-fHCZwFW3.js";import"./index-DTH25FFD.js";import"./useButtonNavigation-EjhHKyx9.js";import"./FieldContainerPrivate-Bb1bCPy0.js";import"./Scroll-Dm8myf0Z.js";import"./utils-zyQx_1x7.js";import"./Counter-BqPtvVBi.js";import"./Sun-CsDryrZF.js";import"./constants-BAH7I9kc.js";const Nt={title:"Components/Fields/Field Text Area",component:g};function m(i){return o=>{o.stopPropagation(),o.preventDefault(),window.alert(`${i} clicked!`)}}const C=({size:i,showActionsFooter:o,...e})=>{const[v,p]=a.useState(e.value);a.useEffect(()=>{p(e.value)},[e.value]),a.useEffect(()=>{if(!e.resizable){const c=document.querySelector(".os-host");c&&(c.style.height="")}},[e.resizable]);const b=a.useMemo(()=>o?t.jsxs("div",{className:r.footer,children:[t.jsx("div",{className:r.actionsWrapper,"data-position":"left",children:t.jsx(l,{icon:t.jsx(s,{}),onClick:m("left")})}),t.jsxs("div",{className:r.actionsWrapper,"data-position":"right",children:[t.jsx(l,{icon:t.jsx(s,{}),onClick:m("right 1")}),t.jsx(l,{icon:t.jsx(s,{}),onClick:m("right 2")})]})]}):null,[o]);return t.jsx("div",{className:r.wrapper,"data-size":i,children:t.jsx(g,{...e,size:i,value:v,onChange:p,footer:b})})},n={render:C,args:{id:"textarea",value:"",placeholder:"Placeholder",maxLength:void 0,minRows:3,maxRows:1e3,readonly:!1,showCopyButton:void 0,disabled:!1,autoFocus:!1,resizable:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",validationState:"default",showClearButton:!0,allowMoreThanMaxLength:!0,showActionsFooter:!1},argTypes:{validationState:u.validationState,labelTooltip:u.labelTooltip,showActionsFooter:{name:"[Story]: Control actions slots visibility",control:{type:"boolean"}}},parameters:{readme:{sidebar:[`Latest version: ${d.version}`,w,T]},packageName:d.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=402%3A202402&mode=design"}}};var f,h,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'textarea',
    value: '',
    placeholder: 'Placeholder',
    maxLength: undefined,
    minRows: 3,
    maxRows: 1000,
    readonly: false,
    showCopyButton: undefined,
    disabled: false,
    autoFocus: false,
    resizable: false,
    label: 'Label text',
    labelTooltip: 'Tooltip description',
    required: false,
    caption: 'Caption',
    hint: 'Hint text',
    size: 's',
    validationState: 'default',
    showClearButton: true,
    allowMoreThanMaxLength: true,
    showActionsFooter: false
  },
  argTypes: {
    validationState: COMMON_ARG_TYPES.validationState,
    labelTooltip: COMMON_ARG_TYPES.labelTooltip,
    showActionsFooter: {
      name: '[Story]: Control actions slots visibility',
      control: {
        type: 'boolean'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=402%3A202402&mode=design'
    }
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};export{Nt as default,n as fieldTextArea};
