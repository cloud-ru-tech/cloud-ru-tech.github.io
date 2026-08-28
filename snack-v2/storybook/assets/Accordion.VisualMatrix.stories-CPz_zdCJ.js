import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CSZ3Qkp5.js";import{a as i,c as a,n as o,t as s}from"./src-Drwa-XOu.js";import{n as c,t as l}from"./styles.module-BSJOTdPD.js";function u(e){return(0,d.jsxs)(`div`,{className:c.listM,children:[(0,d.jsx)(o.CollapseBlockPrimary,{id:`${e}-1`,title:`Item 1`,subTitle:`Subtitle`,children:(0,d.jsx)(`p`,{className:c.content,children:`Содержимое первого блока.`})}),(0,d.jsx)(o.CollapseBlockPrimary,{id:`${e}-2`,title:`Item 2`,subTitle:`Subtitle`,children:(0,d.jsx)(`p`,{className:c.content,children:`Содержимое второго блока.`})}),(0,d.jsx)(o.CollapseBlockPrimary,{id:`${e}-3`,title:`Item 3`,subTitle:`Subtitle`,children:(0,d.jsx)(`p`,{className:c.content,children:`Содержимое третьего блока.`})})]})}var d,f,p,m,h;e((()=>{r(),s(),a(),l(),d=t(),f={title:`Snack/Layout & containers/Accordion/Accordion`,id:`components-accordion-accordion`,component:o,parameters:{controls:{disable:!0}}},p=Object.values(i),m={tags:[`test`,`dev`],render:()=>(0,d.jsx)(n,{sectionTitle:`Selection mode`,firstColumnHeader:`Mode`,columnHeaders:[`Accordion`],rows:p.map(e=>({variantLabel:e,cells:[e===i.Multiple?(0,d.jsx)(o,{selectionMode:e,expandedDefault:[`${e}-1`,`${e}-2`],children:u(e)},e):(0,d.jsx)(o,{selectionMode:e,expandedDefault:`${e}-1`,children:u(e)},e)]}))})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <StoryTable sectionTitle='Selection mode' firstColumnHeader='Mode' columnHeaders={['Accordion']}
  // Раскрытые по умолчанию блоки — единственный способ увидеть ось статикой:
  // \`single\` держит открытым один блок, \`multiple\` — несколько.
  rows={modes.map(mode => ({
    variantLabel: mode,
    cells: [mode === SELECTION_MODE.Multiple ? <Accordion key={mode} selectionMode={mode} expandedDefault={[\`\${mode}-1\`, \`\${mode}-2\`]}>
              {blocks(mode)}
            </Accordion> : <Accordion key={mode} selectionMode={mode} expandedDefault={\`\${mode}-1\`}>
              {blocks(mode)}
            </Accordion>]
  }))} />
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,f as default};
//# sourceMappingURL=Accordion.VisualMatrix.stories-CPz_zdCJ.js.map