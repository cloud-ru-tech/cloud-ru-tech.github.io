import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as m}from"./index-CJ_LmFaV.js";import{d as r,c as i,a as g,b as l,s as S,S as f,C as x,D as E}from"./helperComponents-T6s1aQS1.js";import{S as u}from"./constants-BqAt9wbw.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DUmpqB7p.js";import"./hooks-C5DVcyBY.js";import"./index-JZGyZbA2.js";import"./constants-BObEONKm.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-D3kvmOHM.js";import"./ButtonFunction-C7EKoXlo.js";import"./utils-C_yiyfaQ.js";import"./Counter-dO15w468.js";import"./Sun-CjKF0Bsh.js";import"./constants-BAH7I9kc.js";import"./index-D9kkE69R.js";import"./Typography-ChgE300v.js";import"./TruncateString-BGqQdUJ0.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-Bksrf_Jf.js";import"./PopoverPrivate-TrV_4kB1.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./QuestionTooltip-CXbstM_5.js";import"./index-CgyQooMQ.js";import"./Avatar-Cy6MWq_S.js";import"./StatusIndicator-DKWE1lEW.js";const W={title:"Components/Accordion/AccordionSecondary",component:r},k=({selectionMode:t})=>{const[d,n]=m.useState(void 0);return m.useEffect(()=>{n(void 0)},[t]),e.jsx("div",{className:S.wrapper,children:e.jsx(r,{expanded:d,onExpandedChange:n,selectionMode:t,children:Array.from({length:2}).map((h,a)=>e.jsx(r.CollapseBlock,{id:String(a),header:e.jsx(r.CollapseBlockHeader,{...E}),"data-test-id":f[a],children:e.jsx(x,{})},a))})})},o={render:k,args:{selectionMode:u.Single},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,g,l]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A262646&mode=design"}}};var p,s,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    selectionMode: SELECTION_MODE.Single
  },
  argTypes: {},
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A262646&mode=design'
    }
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};export{o as accordionSecondary,W as default};
