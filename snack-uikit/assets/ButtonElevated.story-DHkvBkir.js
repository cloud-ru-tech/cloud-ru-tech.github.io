import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as f}from"./index-CJ_LmFaV.js";import{c as i,a as C,b as O,I as p,C as j,d as x}from"./Layout-B-Xw-kUi.js";import{B as m,S as E}from"./ButtonElevated-D8V0Pv7A.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DgzWz_a-.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-CAfvFIBF.js";import"./index-BAKcRSlX.js";import"./index-DNCO-vcx.js";import"./index-Y3TRpJ-L.js";import"./index-DrT0s6v0.js";import"./index-Ca89sW9R.js";import"./index-C3mvkShn.js";import"./index-CGBRtoFy.js";import"./index-BGTKE3tV.js";import"./index-DHAmGKAZ.js";import"./index-h0kOFyIh.js";import"./index-BfUMklLA.js";import"./index-B0xwoRpp.js";import"./index-B2h5DBoi.js";import"./index-5mF7KA5g.js";import"./index-WpT-B0mJ.js";import"./index-B_69vUNX.js";import"./index-B80hK4m0.js";import"./index-w0WAZL2A.js";import"./index-Dn6vuaYJ.js";import"./index-CTTgWa-s.js";import"./index-CF_OgQNJ.js";import"./index-DBTBMFOQ.js";import"./index-CXJdfWGn.js";import"./index-x12pshUM.js";import"./index-CGSydWJd.js";import"./index-DbF-M2Rm.js";import"./Counter-DVviqi6b.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./utils-w_cLTCKj.js";import"./Sun-BLz2v2u6.js";import"./constants-BAH7I9kc.js";const o={...p};delete o.none;const de={title:"Components/Button/Button Elevated",component:m},k=({testMode:c,...n})=>{const[l,d]=f.useState(0),g=b=>{n.onClick&&n.onClick(b),d(S=>S+1)},u=c?1:0;return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsx(m,{...n,onClick:g})}),e.jsxs("div",{style:{opacity:u},children:[e.jsx("span",{children:"Controlled button presses: "}),e.jsx("span",{"data-test-id":"count",children:l})]})]})},t={render:k,args:{disabled:!1,loading:!1,icon:Object.entries(o)[0][0],size:"s",testMode:!1},argTypes:{...j,appearance:{table:{disable:!0}},size:{options:Object.values(E),control:{type:"radio"}},icon:{name:"[Stories]: Show icon examples",options:Object.keys(o),mapping:p,control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,C,O]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A8268&mode=design"}}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
