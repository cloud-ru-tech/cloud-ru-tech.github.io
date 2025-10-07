import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as a}from"./index-CJ_LmFaV.js";import{c as u,a as b,b as C,C as s,s as r}from"./styles.module-BHFUaQ3M.js";import{P as p}from"./index-C1BBUjNh.js";import{F as g}from"./FieldTextArea-Dlgys78-.js";import{B as l}from"./ButtonFunction-CHerW9fL.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-BNm8R02-.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-DbqLuSZO.js";import"./index-CysqOHM3.js";import"./index-B9R5O8r3.js";import"./index-DJKNHUMM.js";import"./index-BRR1gMd_.js";import"./index-Dz7uS-ju.js";import"./index-Clv-rw5D.js";import"./index-CzP9MZIz.js";import"./index-BEuzvn4S.js";import"./index-BBF-mQaP.js";import"./index-BjphwxxP.js";import"./index-CDbNS7dV.js";import"./index-BVwVdvrd.js";import"./index-CR9MRPhY.js";import"./index-BcIDvl5_.js";import"./index-DzgJkNAR.js";import"./index-Dz9fnX15.js";import"./index-DO2qqcLs.js";import"./index-DAce5EUV.js";import"./index-DadV-Vij.js";import"./index-CgyQooMQ.js";import"./index-CWV_8VIe.js";import"./index-BbJ9A0eL.js";import"./index-BSWI5MkI.js";import"./index-CbwBVTm2.js";import"./FieldDecorator-DzlZXL8S.js";import"./index-DUmpqB7p.js";import"./constants-9uwKbtvo.js";import"./TruncateString-d_nSHKm-.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./index-B7wZyJkK.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useValueControl-C51frgGe.js";import"./useClearButton-ChndVmuz.js";import"./useCopyButton-fHCZwFW3.js";import"./index-DTH25FFD.js";import"./useButtonNavigation-CVCsehRW.js";import"./FieldContainerPrivate-DXW68Do7.js";import"./Scroll-CyeY1SIb.js";import"./utils-CFMmSnRl.js";import"./Counter-DXWSEFY6.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";const Nt={title:"Components/Fields/Field Text Area",component:g};function m(i){return e=>{e.stopPropagation(),e.preventDefault(),window.alert(`${i} clicked!`)}}const y=({size:i,showActionsFooter:e,...o})=>{const[v,c]=a.useState(o.value);a.useEffect(()=>{c(o.value)},[o.value]),a.useEffect(()=>{if(!o.resizable){const d=document.querySelector(".os-host");d&&(d.style.height="")}},[o.resizable]);const w=a.useMemo(()=>e?t.jsxs("div",{className:r.footer,children:[t.jsx("div",{className:r.actionsWrapper,"data-position":"left",children:t.jsx(l,{icon:t.jsx(p,{}),onClick:m("left")})}),t.jsxs("div",{className:r.actionsWrapper,"data-position":"right",children:[t.jsx(l,{icon:t.jsx(p,{}),onClick:m("right 1")}),t.jsx(l,{icon:t.jsx(p,{}),onClick:m("right 2")})]})]}):null,[e]);return t.jsx("div",{className:r.wrapper,"data-size":i,children:t.jsx(g,{...o,size:i,value:v,onChange:c,footer:w})})},n={render:y,args:{id:"textarea",value:"",placeholder:"Placeholder",maxLength:void 0,minRows:3,maxRows:1e3,readonly:!1,showCopyButton:!0,disabled:!1,autoFocus:!1,resizable:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",validationState:"default",showClearButton:!0,allowMoreThanMaxLength:!0,showActionsFooter:!1},argTypes:{validationState:s.validationState,labelTooltip:s.labelTooltip,showCopyButton:s.showCopyButton,showActionsFooter:{name:"[Story]: Control actions slots visibility",control:{type:"boolean"}}},parameters:{readme:{sidebar:[`Latest version: ${u.version}`,b,C]},packageName:u.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=402%3A202402&mode=design"}}};var f,h,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'textarea',
    value: '',
    placeholder: 'Placeholder',
    maxLength: undefined,
    minRows: 3,
    maxRows: 1000,
    readonly: false,
    showCopyButton: true,
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
    showCopyButton: COMMON_ARG_TYPES.showCopyButton,
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
