import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as h}from"./index-CJ_LmFaV.js";import{c as s,a as T,b as y,C,d as k,T as O,e as a,f as n,B as i}from"./Layout-DeVV7LeQ.js";import{P as m}from"./index-CTTgWa-s.js";import{B as t}from"./ButtonTonal-C18l8S2H.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DgzWz_a-.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-CAfvFIBF.js";import"./index-BAKcRSlX.js";import"./index-DNCO-vcx.js";import"./index-Y3TRpJ-L.js";import"./index-DrT0s6v0.js";import"./index-Ca89sW9R.js";import"./index-C3mvkShn.js";import"./index-CGBRtoFy.js";import"./index-BGTKE3tV.js";import"./index-DHAmGKAZ.js";import"./index-h0kOFyIh.js";import"./index-BfUMklLA.js";import"./index-B0xwoRpp.js";import"./index-B2h5DBoi.js";import"./index-5mF7KA5g.js";import"./index-WpT-B0mJ.js";import"./index-B_69vUNX.js";import"./index-B80hK4m0.js";import"./index-w0WAZL2A.js";import"./index-Dn6vuaYJ.js";import"./index-CF_OgQNJ.js";import"./index-DBTBMFOQ.js";import"./index-CXJdfWGn.js";import"./index-x12pshUM.js";import"./index-CGSydWJd.js";import"./index-DbF-M2Rm.js";import"./Counter-dO15w468.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./utils-D4P0b1iJ.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";const ge={title:"Components/Button/Button Tonal",component:t},v=({testMode:d,...r})=>{const[x,g]=h.useState(0),j=f=>{r.onClick&&r.onClick(f),g(u=>u+1)},b=d?1:0;return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx(t,{...r,onClick:j})}),e.jsxs(O,{children:[e.jsxs(a,{children:[e.jsx(n,{children:"Icon Only"}),e.jsx(n,{children:e.jsx(t,{...i,icon:e.jsx(m,{}),label:void 0})})]}),e.jsxs(a,{children:[e.jsx(n,{children:"Label Only"}),e.jsx(n,{children:e.jsx(t,{...i,icon:void 0,label:"Label Only"})})]}),e.jsxs(a,{children:[e.jsx(n,{children:"Label + Icon"}),e.jsx(n,{children:e.jsx(t,{...i,icon:e.jsx(m,{}),label:"IconAfter"})})]})]}),e.jsxs("div",{style:{opacity:b},children:[e.jsx("span",{children:"Controlled button presses: "}),e.jsx("span",{"data-test-id":"count",children:x})]})]})},o={render:v,args:{label:"Label text",disabled:!1,loading:!1,icon:"none",type:"button",appearance:"primary",size:"s",fullWidth:!1,testMode:!1},argTypes:C,parameters:{readme:{sidebar:[`Latest version: ${s.version}`,T,y]},packageName:s.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A2829&mode=design"}}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
