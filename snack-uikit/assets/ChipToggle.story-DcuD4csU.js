import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{c as C}from"./index-CXM-PPQz.js";import{r as l}from"./index-CJ_LmFaV.js";import{c as p,a as k,b,s as o}from"./styles.module-Bo6g5kyQ.js";import{S as x,V as v}from"./constants-BIigMBdG.js";import{C as N}from"./constants-DEeJV0G2.js";import{C as m}from"./ChipToggle-B8gyDU8q.js";import{P as S}from"./index-C1BBUjNh.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-bDUic7X-.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-DbqLuSZO.js";import"./index-CysqOHM3.js";import"./index-CeNW9I8B.js";import"./index-DJKNHUMM.js";import"./index-BRR1gMd_.js";import"./index-Dz7uS-ju.js";import"./index-Clv-rw5D.js";import"./index-CzP9MZIz.js";import"./index-BEuzvn4S.js";import"./index-BBF-mQaP.js";import"./index-BjphwxxP.js";import"./index-CDbNS7dV.js";import"./index-BVwVdvrd.js";import"./index-CR9MRPhY.js";import"./index-BcIDvl5_.js";import"./index-DzgJkNAR.js";import"./index-Dz9fnX15.js";import"./index-DO2qqcLs.js";import"./index-DAce5EUV.js";import"./index-DadV-Vij.js";import"./index-CgyQooMQ.js";import"./index-CWV_8VIe.js";import"./index-BbJ9A0eL.js";import"./index-BSWI5MkI.js";import"./index-CbwBVTm2.js";import"./Sun-CsDryrZF.js";import"./constants-BAH7I9kc.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./TruncateString-D6qo2szg.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-Bvja_9Oj.js";import"./PopoverPrivate-B3hkMTjr.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";const ve={title:"Components/Chips/ChipToggle",component:m},u=["Default","Checked","Loading","Disabled","Checked + Loading"],A=Array(u.length).fill(Object.values(v)).flatMap(t=>t),d=()=>{};function r(t){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:o.cell,children:e.jsx(m,{label:"Label text",onChange:d,...t})}),e.jsx("div",{className:o.cell,children:e.jsx(m,{label:"Label text",icon:e.jsx(S,{}),onChange:d,...t})})]})}const T=({...t})=>{const[j,c]=l.useState(t.checked);l.useEffect(()=>{c(t.checked)},[t.checked]);const s=C(o.cell,o.headerCell);return e.jsxs("div",{className:o.pageWrapper,children:[e.jsxs("div",{className:o.wrapper,children:["Controlled:",e.jsx(m,{...t,checked:j,onChange:c})]}),e.jsxs("div",{className:o.table,children:[e.jsx("div",{className:s,style:{gridRow:"1 / 3"}}),u.map((a,i)=>e.jsx("div",{className:s,style:{gridColumnStart:i*2+2,gridColumnEnd:i*2+4},children:a},a)),A.map((a,i)=>e.jsx("div",{className:s,children:a},a+i)),Object.values(x).map(a=>e.jsxs(l.Fragment,{children:[e.jsx("div",{className:s,children:a}),e.jsx(r,{size:a,checked:!1}),e.jsx(r,{size:a,checked:!0}),e.jsx(r,{size:a,checked:!1,loading:!0}),e.jsx(r,{size:a,checked:!1,disabled:!0}),e.jsx(r,{size:a,checked:!0,loading:!0})]},a))]})]})},n={render:T,args:{label:"Label text",size:x.S,disabled:!1,loading:!1,checked:!1,"data-test-id":"chip-toggle",tabIndex:void 0,className:void 0,onChange:void 0},argTypes:N,parameters:{readme:{sidebar:[`Latest version: ${p.version}`,k,b]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152239&mode=design"}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Label text',
    size: SIZE.S,
    disabled: false,
    loading: false,
    checked: false,
    'data-test-id': 'chip-toggle',
    tabIndex: undefined,
    className: undefined,
    onChange: undefined
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152239&mode=design'
    }
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};export{n as chipToggle,ve as default};
