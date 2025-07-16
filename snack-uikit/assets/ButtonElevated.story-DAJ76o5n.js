import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as f}from"./index-CJ_LmFaV.js";import{c as i,a as C,b as O,I as p,C as j,d as x}from"./Layout-BNlT_ok2.js";import{B as m,S as E}from"./ButtonElevated-BmQpfOi7.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-B3PncWT3.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-DOUS9uWn.js";import"./index-CO8qBMZD.js";import"./index-jnMETbXV.js";import"./index-CF-13Pl-.js";import"./index-DhD2neKD.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-DOM9zHVr.js";import"./index-CoIthjug.js";import"./index-CAYnss5D.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-DYaIcqfi.js";import"./index-CU6E9CWM.js";import"./index-Cz4dqGWG.js";import"./index-BaJp5iwV.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./index-Dj3Kdo0x.js";import"./Counter-CRGhF3Kb.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./utils-Zzqkusky.js";import"./Sun-CYpuxeak.js";import"./constants-BAH7I9kc.js";const o={...p};delete o.none;const de={title:"Components/Button/Button Elevated",component:m},k=({testMode:c,...n})=>{const[l,d]=f.useState(0),g=b=>{n.onClick&&n.onClick(b),d(S=>S+1)},u=c?1:0;return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsx(m,{...n,onClick:g})}),e.jsxs("div",{style:{opacity:u},children:[e.jsx("span",{children:"Controlled button presses: "}),e.jsx("span",{"data-test-id":"count",children:l})]})]})},t={render:k,args:{disabled:!1,loading:!1,icon:Object.entries(o)[0][0],size:"s",testMode:!1},argTypes:{...j,appearance:{table:{disable:!0}},size:{options:Object.values(E),control:{type:"radio"}},icon:{name:"[Stories]: Show icon examples",options:Object.keys(o),mapping:p,control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,C,O]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A8268&mode=design"}}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: false,
    loading: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: Object.entries(REQUIRED_ICONS)[0][0],
    size: 's',
    testMode: false
  },
  argTypes: {
    ...COMMON_ARG_TYPES,
    appearance: {
      table: {
        disable: true
      }
    },
    size: {
      options: Object.values(SIZE),
      control: {
        type: 'radio'
      }
    },
    icon: {
      name: '[Stories]: Show icon examples',
      options: Object.keys(REQUIRED_ICONS),
      mapping: ICONS,
      control: {
        type: 'select'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A8268&mode=design'
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};export{t as buttonElevated,de as default};
