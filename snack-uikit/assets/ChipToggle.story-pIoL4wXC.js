import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{c as C}from"./index-DUmpqB7p.js";import{r as l}from"./index-CJ_LmFaV.js";import{c as p,a as k,b,s as o}from"./styles.module-DrSnddVW.js";import{S as x,V as v}from"./constants-BIigMBdG.js";import{C as N}from"./constants-BmtHpeNX.js";import{C as m}from"./ChipToggle-C2izIddn.js";import{P as S}from"./index-CU6E9CWM.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-B3PncWT3.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-DOUS9uWn.js";import"./index-CO8qBMZD.js";import"./index-jnMETbXV.js";import"./index-CF-13Pl-.js";import"./index-DhD2neKD.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-DOM9zHVr.js";import"./index-CoIthjug.js";import"./index-CAYnss5D.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-DYaIcqfi.js";import"./index-Cz4dqGWG.js";import"./index-BaJp5iwV.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./index-Dj3Kdo0x.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-WJ2YftH0.js";import"./constants-BAH7I9kc.js";import"./TruncateString-NSjc3XzO.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-C67siN8J.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";const Ne={title:"Components/Chips/ChipToggle",component:m},u=["Default","Checked","Loading","Disabled","Checked + Loading"],A=Array(u.length).fill(Object.values(v)).flatMap(t=>t),d=()=>{};function r(t){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:o.cell,children:e.jsx(m,{label:"Label text",onChange:d,...t})}),e.jsx("div",{className:o.cell,children:e.jsx(m,{label:"Label text",icon:e.jsx(S,{}),onChange:d,...t})})]})}const T=({...t})=>{const[j,c]=l.useState(t.checked);l.useEffect(()=>{c(t.checked)},[t.checked]);const s=C(o.cell,o.headerCell);return e.jsxs("div",{className:o.pageWrapper,children:[e.jsxs("div",{className:o.wrapper,children:["Controlled:",e.jsx(m,{...t,checked:j,onChange:c})]}),e.jsxs("div",{className:o.table,children:[e.jsx("div",{className:s,style:{gridRow:"1 / 3"}}),u.map((a,i)=>e.jsx("div",{className:s,style:{gridColumnStart:i*2+2,gridColumnEnd:i*2+4},children:a},a)),A.map((a,i)=>e.jsx("div",{className:s,children:a},a+i)),Object.values(x).map(a=>e.jsxs(l.Fragment,{children:[e.jsx("div",{className:s,children:a}),e.jsx(r,{size:a,checked:!1}),e.jsx(r,{size:a,checked:!0}),e.jsx(r,{size:a,checked:!1,loading:!0}),e.jsx(r,{size:a,checked:!1,disabled:!0}),e.jsx(r,{size:a,checked:!0,loading:!0})]},a))]})]})},n={render:T,args:{label:"Label text",size:x.S,disabled:!1,loading:!1,checked:!1,"data-test-id":"chip-toggle",tabIndex:void 0,className:void 0,onChange:void 0},argTypes:N,parameters:{readme:{sidebar:[`Latest version: ${p.version}`,k,b]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152239&mode=design"}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};export{n as chipToggle,Ne as default};
