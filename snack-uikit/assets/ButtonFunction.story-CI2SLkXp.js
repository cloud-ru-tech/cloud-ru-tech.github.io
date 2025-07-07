import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as l}from"./index-CJ_LmFaV.js";import{c as p,a as S,b as v,S as O,C as y,d as L,T as R,e as s,f as t,B as i,g as a}from"./Layout-DeVV7LeQ.js";import{S as _}from"./utils-D4P0b1iJ.js";import{P as r}from"./index-CTTgWa-s.js";import{B as o}from"./ButtonFunction-BJzRx2eA.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DgzWz_a-.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-CAfvFIBF.js";import"./index-BAKcRSlX.js";import"./index-DNCO-vcx.js";import"./index-Y3TRpJ-L.js";import"./index-DrT0s6v0.js";import"./index-Ca89sW9R.js";import"./index-C3mvkShn.js";import"./index-CGBRtoFy.js";import"./index-BGTKE3tV.js";import"./index-DHAmGKAZ.js";import"./index-h0kOFyIh.js";import"./index-BfUMklLA.js";import"./index-B0xwoRpp.js";import"./index-B2h5DBoi.js";import"./index-5mF7KA5g.js";import"./index-WpT-B0mJ.js";import"./index-B_69vUNX.js";import"./index-B80hK4m0.js";import"./index-w0WAZL2A.js";import"./index-Dn6vuaYJ.js";import"./index-CF_OgQNJ.js";import"./index-DBTBMFOQ.js";import"./index-CXJdfWGn.js";import"./index-x12pshUM.js";import"./index-CGSydWJd.js";import"./index-DbF-M2Rm.js";import"./Counter-dO15w468.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";const Te={title:"Components/Button/Button Function",component:o},A=({testMode:x,...n})=>{const[j,b]=l.useState(0),[f,h]=l.useState(void 0),T=g=>{n.onClick&&n.onClick(g),b(C=>C+1)};l.useEffect(()=>{h(n.counter?{value:n.counterValue,appearance:n.counterAppearance,variant:n.counterVariant,plusLimit:n.counterPlusLimit}:void 0)},[n.counter,n.counterAppearance,n.counterPlusLimit,n.counterValue,n.counterVariant]);const P=x?1:0;return e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsx(o,{...n,counter:f,onClick:T})}),e.jsxs(R,{children:[e.jsxs(s,{children:[e.jsx(t,{children:"Icon Only"}),e.jsx(t,{children:e.jsx(o,{...i,icon:e.jsx(r,{}),label:void 0})}),e.jsx(t,{children:e.jsx(o,{...i,icon:e.jsx(r,{}),counter:a,label:void 0})})]}),e.jsxs(s,{children:[e.jsx(t,{children:"Label Only"}),e.jsx(t,{children:e.jsx(o,{...i,icon:void 0,label:"Label Text"})}),e.jsx(t,{children:e.jsx(o,{...i,icon:void 0,counter:a,label:"Label Text"})})]}),e.jsxs(s,{children:[e.jsx(t,{children:"Icon Before"}),e.jsx(t,{children:e.jsx(o,{...i,icon:e.jsx(r,{}),iconPosition:"before",label:"Label Text"})}),e.jsx(t,{children:e.jsx(o,{...i,icon:e.jsx(r,{}),iconPosition:"before",counter:a,label:"Label Text"})})]}),e.jsxs(s,{children:[e.jsx(t,{children:"Icon After"}),e.jsx(t,{children:e.jsx(o,{...i,icon:e.jsx(r,{}),iconPosition:"after",label:"Label Text"})}),e.jsx(t,{children:e.jsx(o,{...i,icon:e.jsx(r,{}),iconPosition:"after",counter:a,label:"Label Text"})})]})]}),e.jsxs("div",{style:{opacity:P},children:[e.jsx("span",{children:"Controlled button presses: "}),e.jsx("span",{"data-test-id":"count",children:j})]})]})},c={render:A,args:{label:"Label text",disabled:!1,loading:!1,icon:"none",iconPosition:"after",type:"button",appearance:"neutral",size:"s",fullWidth:!1,testMode:!1,counter:!0,counterValue:1},argTypes:{...y,size:{options:Object.values(_),control:{type:"radio"}},...O},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,S,v]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A5123&mode=design"}}};var m,d,u;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Label text',
    disabled: false,
    loading: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'none',
    iconPosition: 'after',
    type: 'button',
    appearance: 'neutral',
    size: 's',
    fullWidth: false,
    testMode: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    counter: true,
    counterValue: 1
  },
  argTypes: {
    ...COMMON_ARG_TYPES,
    size: {
      options: Object.values(SIZE),
      control: {
        type: 'radio'
      }
    },
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A5123&mode=design'
    }
  }
}`,...(u=(d=c.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};export{c as buttonFunction,Te as default};
