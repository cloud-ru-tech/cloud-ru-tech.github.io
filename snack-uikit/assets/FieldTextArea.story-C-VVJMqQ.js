import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as a}from"./index-CJ_LmFaV.js";import{c as d,a as w,b as T,C as u,s as r}from"./styles.module-DnLW949H.js";import{P as s}from"./index-CU6E9CWM.js";import{F as g}from"./FieldTextArea-DaUOfgH7.js";import{B as l}from"./ButtonFunction-CsJIzq2t.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DBR3TzFE.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-COwW15wl.js";import"./index-DOUS9uWn.js";import"./index-CO8qBMZD.js";import"./index-xpeDvz-o.js";import"./index-CF-13Pl-.js";import"./index-DHfXeKe7.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-CoIthjug.js";import"./index-CAYnss5D.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-DYaIcqfi.js";import"./index-Cz4dqGWG.js";import"./index-BaJp5iwV.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./index-Dj3Kdo0x.js";import"./FieldDecorator-C5py8abe.js";import"./index-CXM-PPQz.js";import"./constants-9uwKbtvo.js";import"./TruncateString-Chrk-fjN.js";import"./lodash-DyrGR4_s.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-CeCihl4C.js";import"./PopoverPrivate-Dbj5k6oN.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";import"./index-B7wZyJkK.js";import"./extends-CF3RwP-h.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./useValueControl-C51frgGe.js";import"./useClearButton-X6xACxcY.js";import"./useCopyButton-BJzW5oYO.js";import"./index-DTH25FFD.js";import"./useButtonNavigation-DVt-5Flo.js";import"./FieldContainerPrivate-BWTpfuyA.js";import"./Scroll-Dm8myf0Z.js";import"./utils-nE8vb_Mt.js";import"./Counter-CVeRO6SA.js";import"./Sun-Czt8-gDg.js";import"./constants-BAH7I9kc.js";const Rt={title:"Components/Fields/Field Text Area",component:g};function m(i){return o=>{o.stopPropagation(),o.preventDefault(),window.alert(`${i} clicked!`)}}const C=({size:i,showActionsFooter:o,...e})=>{const[v,p]=a.useState(e.value);a.useEffect(()=>{p(e.value)},[e.value]),a.useEffect(()=>{if(!e.resizable){const c=document.querySelector(".os-host");c&&(c.style.height="")}},[e.resizable]);const b=a.useMemo(()=>o?t.jsxs("div",{className:r.footer,children:[t.jsx("div",{className:r.actionsWrapper,"data-position":"left",children:t.jsx(l,{icon:t.jsx(s,{}),onClick:m("left")})}),t.jsxs("div",{className:r.actionsWrapper,"data-position":"right",children:[t.jsx(l,{icon:t.jsx(s,{}),onClick:m("right 1")}),t.jsx(l,{icon:t.jsx(s,{}),onClick:m("right 2")})]})]}):null,[o]);return t.jsx("div",{className:r.wrapper,"data-size":i,children:t.jsx(g,{...e,size:i,value:v,onChange:p,footer:b})})},n={render:C,args:{id:"textarea",value:"",placeholder:"Placeholder",maxLength:void 0,minRows:3,maxRows:1e3,readonly:!1,showCopyButton:void 0,disabled:!1,autoFocus:!1,resizable:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",validationState:"default",showClearButton:!0,allowMoreThanMaxLength:!0,showActionsFooter:!1},argTypes:{validationState:u.validationState,labelTooltip:u.labelTooltip,showActionsFooter:{name:"[Story]: Control actions slots visibility",control:{type:"boolean"}}},parameters:{readme:{sidebar:[`Latest version: ${d.version}`,w,T]},packageName:d.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=402%3A202402&mode=design"}}};var f,h,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};export{Rt as default,n as fieldTextArea};
