import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as h}from"./index-CJ_LmFaV.js";import{c as s,a as T,b as y,C,d as k,T as O,e as a,f as n,B as i}from"./Layout-Da74qIGr.js";import{P as m}from"./index-CU6E9CWM.js";import{B as t}from"./ButtonTonal-YV7IKDPs.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-B3PncWT3.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-DOUS9uWn.js";import"./index-CO8qBMZD.js";import"./index-jnMETbXV.js";import"./index-CF-13Pl-.js";import"./index-DhD2neKD.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-DOM9zHVr.js";import"./index-CoIthjug.js";import"./index-CAYnss5D.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-DYaIcqfi.js";import"./index-Cz4dqGWG.js";import"./index-BaJp5iwV.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./index-Dj3Kdo0x.js";import"./Counter-CRGhF3Kb.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./utils-DzobPs8h.js";import"./Sun-WJ2YftH0.js";import"./constants-BAH7I9kc.js";const ge={title:"Components/Button/Button Tonal",component:t},v=({testMode:d,...r})=>{const[x,g]=h.useState(0),j=f=>{r.onClick&&r.onClick(f),g(u=>u+1)},b=d?1:0;return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx(t,{...r,onClick:j})}),e.jsxs(O,{children:[e.jsxs(a,{children:[e.jsx(n,{children:"Icon Only"}),e.jsx(n,{children:e.jsx(t,{...i,icon:e.jsx(m,{}),label:void 0})})]}),e.jsxs(a,{children:[e.jsx(n,{children:"Label Only"}),e.jsx(n,{children:e.jsx(t,{...i,icon:void 0,label:"Label Only"})})]}),e.jsxs(a,{children:[e.jsx(n,{children:"Label + Icon"}),e.jsx(n,{children:e.jsx(t,{...i,icon:e.jsx(m,{}),label:"IconAfter"})})]})]}),e.jsxs("div",{style:{opacity:b},children:[e.jsx("span",{children:"Controlled button presses: "}),e.jsx("span",{"data-test-id":"count",children:x})]})]})},o={render:v,args:{label:"Label text",disabled:!1,loading:!1,icon:"none",type:"button",appearance:"primary",size:"s",fullWidth:!1,testMode:!1},argTypes:C,parameters:{readme:{sidebar:[`Latest version: ${s.version}`,T,y]},packageName:s.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A2829&mode=design"}}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Label text',
    disabled: false,
    loading: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'none',
    type: 'button',
    appearance: 'primary',
    size: 's',
    fullWidth: false,
    testMode: false
  },
  argTypes: COMMON_ARG_TYPES,
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A2829&mode=design'
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};export{o as buttonTonal,ge as default};
