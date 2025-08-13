import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as h}from"./index-CJ_LmFaV.js";import{c as s,a as T,b as C,S,C as O,d as _,T as k,e as a,f as t,B as i}from"./Layout-Da74qIGr.js";import{B as n}from"./ButtonSimple-DU46mwYa.js";import{P as m}from"./index-CU6E9CWM.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-B3PncWT3.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-DOUS9uWn.js";import"./index-CO8qBMZD.js";import"./index-jnMETbXV.js";import"./index-CF-13Pl-.js";import"./index-DhD2neKD.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-DOM9zHVr.js";import"./index-CoIthjug.js";import"./index-CAYnss5D.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-DYaIcqfi.js";import"./index-Cz4dqGWG.js";import"./index-BaJp5iwV.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./index-Dj3Kdo0x.js";import"./Counter-CRGhF3Kb.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./utils-DzobPs8h.js";import"./Sun-WJ2YftH0.js";import"./constants-BAH7I9kc.js";const ue={title:"Components/Button/Button Simple",component:n},R=({testMode:d,...r})=>{const[x,g]=h.useState(0),u=j=>{r.onClick&&r.onClick(j),g(f=>f+1)},b=d?1:0;return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx(n,{...r,onClick:u})}),e.jsxs(k,{children:[e.jsxs(a,{children:[e.jsx(t,{children:"Icon Only"}),e.jsx(t,{children:e.jsx(n,{...i,icon:e.jsx(m,{}),label:void 0})})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Label Only"}),e.jsx(t,{children:e.jsx(n,{...i,icon:void 0,label:"Label Text"})})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Label + Icon"}),e.jsx(t,{children:e.jsx(n,{...i,icon:e.jsx(m,{}),label:"Label Text"})})]})]}),e.jsxs("div",{style:{opacity:b},children:[e.jsx("span",{children:"Controlled button presses: "}),e.jsx("span",{"data-test-id":"count",children:x})]})]})},o={render:R,args:{label:"Label text",disabled:!1,loading:!1,icon:"none",type:"button",appearance:"neutral",size:"s",fullWidth:!1,testMode:!1},argTypes:{...O,...S},parameters:{readme:{sidebar:[`Latest version: ${s.version}`,T,C]},packageName:s.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A3976&mode=design"}}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Label text',
    disabled: false,
    loading: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'none',
    type: 'button',
    appearance: 'neutral',
    size: 's',
    fullWidth: false,
    testMode: false
  },
  argTypes: {
    ...COMMON_ARG_TYPES,
    ...STORY_WITH_COUNTER_ARG_TYPES
  },
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A3976&mode=design'
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};export{o as buttonSimple,ue as default};
