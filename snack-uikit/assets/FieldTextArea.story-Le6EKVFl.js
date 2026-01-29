import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as a}from"./index-CJ_LmFaV.js";import{c as u,a as b,b as C,C as s,s as r}from"./styles.module-DMDB4TSM.js";import{P as p}from"./index-C9_U387z.js";import{F as g}from"./FieldTextArea-B-VkdiNA.js";import{B as l}from"./ButtonFunction-DzSpe7i-.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-BzvC0tss.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-C-NxZ9RO.js";import"./index-Dz039XZe.js";import"./index-BY3DxMkE.js";import"./index-DtRrUciF.js";import"./index-Bx6tewuM.js";import"./index-BKaanG2n.js";import"./index-DLGJiw2b.js";import"./index-CX1lIXbQ.js";import"./index-BQAaeyfQ.js";import"./index-DLRniMSR.js";import"./index-BJ2Oj32Z.js";import"./index-0zxx_KqD.js";import"./index-NU8U5csw.js";import"./index-I1zimRE2.js";import"./index-BIeLB8C9.js";import"./index-BcKv4fI4.js";import"./index-CIcT2jya.js";import"./index-3XDw48l5.js";import"./index-6PN_JoHT.js";import"./index-CwHIobxP.js";import"./index-B9oUDl45.js";import"./index-Baw9oej9.js";import"./index-BJDjEDgt.js";import"./index-Drk0xmYR.js";import"./index-zbp_5bxn.js";import"./FieldDecorator-C88E8mRp.js";import"./index-DUmpqB7p.js";import"./constants-9uwKbtvo.js";import"./TruncateString-D54BiV_x.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-DzAF_V2U.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./index-B7wZyJkK.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useValueControl-C51frgGe.js";import"./useClearButton-CFmx5Mk4.js";import"./useCopyButton-BRHrjF_j.js";import"./index-DTH25FFD.js";import"./useButtonNavigation-CVCsehRW.js";import"./FieldContainerPrivate-BrChNQ9-.js";import"./Scroll-CyeY1SIb.js";import"./utils-Cci-L8Vb.js";import"./Counter-DXWSEFY6.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";const Nt={title:"Components/Fields/Field Text Area",component:g};function m(i){return e=>{e.stopPropagation(),e.preventDefault(),window.alert(`${i} clicked!`)}}const y=({size:i,showActionsFooter:e,...o})=>{const[v,c]=a.useState(o.value);a.useEffect(()=>{c(o.value)},[o.value]),a.useEffect(()=>{if(!o.resizable){const d=document.querySelector(".os-host");d&&(d.style.height="")}},[o.resizable]);const w=a.useMemo(()=>e?t.jsxs("div",{className:r.footer,children:[t.jsx("div",{className:r.actionsWrapper,"data-position":"left",children:t.jsx(l,{icon:t.jsx(p,{}),onClick:m("left")})}),t.jsxs("div",{className:r.actionsWrapper,"data-position":"right",children:[t.jsx(l,{icon:t.jsx(p,{}),onClick:m("right 1")}),t.jsx(l,{icon:t.jsx(p,{}),onClick:m("right 2")})]})]}):null,[e]);return t.jsx("div",{className:r.wrapper,"data-size":i,children:t.jsx(g,{...o,size:i,value:v,onChange:c,footer:w})})},n={render:y,args:{id:"textarea",value:"",placeholder:"Placeholder",maxLength:void 0,minRows:3,maxRows:1e3,readonly:!1,showCopyButton:!0,disabled:!1,autoFocus:!1,resizable:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",validationState:"default",showClearButton:!0,allowMoreThanMaxLength:!0,showActionsFooter:!1},argTypes:{validationState:s.validationState,labelTooltip:s.labelTooltip,showCopyButton:s.showCopyButton,showActionsFooter:{name:"[Story]: Control actions slots visibility",control:{type:"boolean"}}},parameters:{readme:{sidebar:[`Latest version: ${u.version}`,b,C]},packageName:u.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=402%3A202402&mode=design"}}};var f,h,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
