import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as a}from"./index-CJ_LmFaV.js";import{c as u,a as b,b as C,C as s,s as r}from"./styles.module-C6VSrpUS.js";import{P as p}from"./index-CU6E9CWM.js";import{F as g}from"./FieldTextArea-DsVZTwjg.js";import{B as l}from"./ButtonFunction-DNxi1ZK7.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-B3PncWT3.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-DOUS9uWn.js";import"./index-CO8qBMZD.js";import"./index-jnMETbXV.js";import"./index-CF-13Pl-.js";import"./index-DhD2neKD.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-DOM9zHVr.js";import"./index-CoIthjug.js";import"./index-CAYnss5D.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-DYaIcqfi.js";import"./index-Cz4dqGWG.js";import"./index-BaJp5iwV.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./index-Dj3Kdo0x.js";import"./FieldDecorator-DME35q0M.js";import"./index-DUmpqB7p.js";import"./constants-9uwKbtvo.js";import"./TruncateString-NSjc3XzO.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-C67siN8J.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./index-B7wZyJkK.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useValueControl-CNLw7ht-.js";import"./useClearButton-B39o1uTp.js";import"./useCopyButton-7U8jQ3tg.js";import"./index-DTH25FFD.js";import"./useButtonNavigation-CVCsehRW.js";import"./FieldContainerPrivate-Bb7j8Eum.js";import"./Scroll-B3e6J9cA.js";import"./utils-DzobPs8h.js";import"./Counter-CRGhF3Kb.js";import"./Sun-WJ2YftH0.js";import"./constants-BAH7I9kc.js";const Rt={title:"Components/Fields/Field Text Area",component:g};function m(i){return e=>{e.stopPropagation(),e.preventDefault(),window.alert(`${i} clicked!`)}}const y=({size:i,showActionsFooter:e,...o})=>{const[v,c]=a.useState(o.value);a.useEffect(()=>{c(o.value)},[o.value]),a.useEffect(()=>{if(!o.resizable){const d=document.querySelector(".os-host");d&&(d.style.height="")}},[o.resizable]);const w=a.useMemo(()=>e?t.jsxs("div",{className:r.footer,children:[t.jsx("div",{className:r.actionsWrapper,"data-position":"left",children:t.jsx(l,{icon:t.jsx(p,{}),onClick:m("left")})}),t.jsxs("div",{className:r.actionsWrapper,"data-position":"right",children:[t.jsx(l,{icon:t.jsx(p,{}),onClick:m("right 1")}),t.jsx(l,{icon:t.jsx(p,{}),onClick:m("right 2")})]})]}):null,[e]);return t.jsx("div",{className:r.wrapper,"data-size":i,children:t.jsx(g,{...o,size:i,value:v,onChange:c,footer:w})})},n={render:y,args:{id:"textarea",value:"",placeholder:"Placeholder",maxLength:void 0,minRows:3,maxRows:1e3,readonly:!1,showCopyButton:!0,disabled:!1,autoFocus:!1,resizable:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",validationState:"default",showClearButton:!0,allowMoreThanMaxLength:!0,showActionsFooter:!1},argTypes:{validationState:s.validationState,labelTooltip:s.labelTooltip,showCopyButton:s.showCopyButton,showActionsFooter:{name:"[Story]: Control actions slots visibility",control:{type:"boolean"}}},parameters:{readme:{sidebar:[`Latest version: ${u.version}`,b,C]},packageName:u.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=402%3A202402&mode=design"}}};var f,h,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};export{Rt as default,n as fieldTextArea};
