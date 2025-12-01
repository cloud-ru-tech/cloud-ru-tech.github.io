import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as h}from"./index-CJ_LmFaV.js";import{c as s,a as y,b as C,C as O,d as k,T,e as i,f as t,B as a}from"./Layout-ta9ah1KZ.js";import{B as n}from"./ButtonOutline-NEHUWM93.js";import{P as m}from"./index-CTTgWa-s.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-JswG3_7a.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-CAfvFIBF.js";import"./index-BAKcRSlX.js";import"./index-CKE7Rdrn.js";import"./index-Y3TRpJ-L.js";import"./index-DreyRvUE.js";import"./index-Ca89sW9R.js";import"./index-C3mvkShn.js";import"./index-BGTKE3tV.js";import"./index-DHAmGKAZ.js";import"./index-h0kOFyIh.js";import"./index-BfUMklLA.js";import"./index-B0xwoRpp.js";import"./index-B2h5DBoi.js";import"./index-5mF7KA5g.js";import"./index-WpT-B0mJ.js";import"./index-B_69vUNX.js";import"./index-B80hK4m0.js";import"./index-w0WAZL2A.js";import"./index-Dn6vuaYJ.js";import"./index-CF_OgQNJ.js";import"./index-DBTBMFOQ.js";import"./index-CXJdfWGn.js";import"./index-x12pshUM.js";import"./index-CGSydWJd.js";import"./index-DbF-M2Rm.js";import"./Counter-DXWSEFY6.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./utils-DoFi9RcI.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";const xe={title:"Components/Button/Button Outline",component:n},v=({testMode:d,...r})=>{const[x,u]=h.useState(0),g=b=>{r.onClick&&r.onClick(b),u(f=>f+1)},j=d?1:0;return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx(n,{...r,onClick:g})}),e.jsxs(T,{children:[e.jsxs(i,{children:[e.jsx(t,{children:"Icon Only"}),e.jsx(t,{children:e.jsx(n,{...a,icon:e.jsx(m,{}),label:void 0})})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Label Only"}),e.jsx(t,{children:e.jsx(n,{...a,icon:void 0,label:"Label Only"})})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Label + Icon"}),e.jsx(t,{children:e.jsx(n,{...a,icon:e.jsx(m,{}),label:"IconAfter"})})]})]}),e.jsxs("div",{style:{opacity:j},children:[e.jsx("span",{children:"Controlled button presses: "}),e.jsx("span",{"data-test-id":"count",children:x})]})]})},o={render:v,args:{label:"Label text",disabled:!1,loading:!1,icon:"none",type:"button",appearance:"primary",size:"s",fullWidth:!1,testMode:!1},argTypes:O,parameters:{readme:{sidebar:[`Latest version: ${s.version}`,y,C]},packageName:s.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A1682&mode=design"}}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A1682&mode=design'
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};export{o as buttonOutline,xe as default};
