import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as f}from"./index-CJ_LmFaV.js";import{c as i,a as C,b as O,I as p,C as j,d as x}from"./Layout-BIZ7mGyr.js";import{B as m,S as E}from"./ButtonElevated-B0PwhyWH.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CkHkj8Hy.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-DbqLuSZO.js";import"./index-CysqOHM3.js";import"./index-B9R5O8r3.js";import"./index-DJKNHUMM.js";import"./index-D9kkE69R.js";import"./index-Dz7uS-ju.js";import"./index-Clv-rw5D.js";import"./index-Hxt3JBiD.js";import"./index-CzP9MZIz.js";import"./index-BEuzvn4S.js";import"./index-BBF-mQaP.js";import"./index-BjphwxxP.js";import"./index-CDbNS7dV.js";import"./index-BVwVdvrd.js";import"./index-CR9MRPhY.js";import"./index-BcIDvl5_.js";import"./index-DzgJkNAR.js";import"./index-Dz9fnX15.js";import"./index-DO2qqcLs.js";import"./index-DAce5EUV.js";import"./index-C1BBUjNh.js";import"./index-DadV-Vij.js";import"./index-CgyQooMQ.js";import"./index-CWV_8VIe.js";import"./index-BbJ9A0eL.js";import"./index-BSWI5MkI.js";import"./index-CbwBVTm2.js";import"./Counter-DXWSEFY6.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./utils-Cu-nFXfw.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";const o={...p};delete o.none;const de={title:"Components/Button/Button Elevated",component:m},k=({testMode:c,...n})=>{const[l,d]=f.useState(0),g=b=>{n.onClick&&n.onClick(b),d(S=>S+1)},u=c?1:0;return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsx(m,{...n,onClick:g})}),e.jsxs("div",{style:{opacity:u},children:[e.jsx("span",{children:"Controlled button presses: "}),e.jsx("span",{"data-test-id":"count",children:l})]})]})},t={render:k,args:{disabled:!1,loading:!1,icon:Object.entries(o)[0][0],size:"s",testMode:!1},argTypes:{...j,appearance:{table:{disable:!0}},size:{options:Object.values(E),control:{type:"radio"}},icon:{name:"[Stories]: Show icon examples",options:Object.keys(o),mapping:p,control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,C,O]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A8268&mode=design"}}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
