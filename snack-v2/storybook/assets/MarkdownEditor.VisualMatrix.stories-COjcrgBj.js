import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-jFn_-H4h.js";import{n as i,s as a,t as o}from"./src-DFQx-iMj.js";var s,c,l,u=e((()=>{s=`_matrix_qltri_4`,c=`_cell_qltri_9`,l={matrix:s,cell:c}})),d,f,p,m,h,g,_;e((()=>{o(),r(),u(),d=t(),f={title:`Snack/Inputs & Forms/Markdown/MarkdownEditor`,id:`components-markdown-markdowneditor`,component:i,parameters:{layout:`padded`}},p=`# Заголовок

Параграф с **жирным** и *курсивом*.
`,m=[{key:`full`},{key:`minimal`,toolbar:[a.Bold,a.Italic,a.Link,a.BulletList]},{key:`hidden (toolbar=false)`,toolbar:!1}],h=[{key:`filled`,defaultValue:p,placeholder:`Начните писать…`},{key:`empty`,defaultValue:``,placeholder:`Начните писать…`}],g={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:l.matrix,children:[(0,d.jsx)(n,{sectionTitle:`Toolbar × Content`,firstColumnHeader:`Toolbar`,columnHeaders:[`Editor`],rows:m.map(({key:e,...t})=>({variantLabel:e,cells:[(0,d.jsx)(`div`,{className:l.cell,children:(0,d.jsx)(i,{defaultValue:p,...t})},e)]}))}),(0,d.jsx)(n,{sectionTitle:`Header × Content`,firstColumnHeader:`Header`,columnHeaders:[`false`,`true`],rows:[{variantLabel:`hideHeader`,cells:[(0,d.jsx)(`div`,{className:l.cell,children:(0,d.jsx)(i,{defaultValue:p})},`header`),(0,d.jsx)(`div`,{className:l.cell,children:(0,d.jsx)(i,{defaultValue:p,hideHeader:!0})},`hideHeader`)]}]}),(0,d.jsx)(n,{sectionTitle:`State`,firstColumnHeader:`Value`,columnHeaders:[`Raw`,`Preview`],rows:h.map(({key:e,...t})=>({variantLabel:e,cells:[(0,d.jsx)(`div`,{className:l.cell,children:(0,d.jsx)(i,{...t})},`${e}-raw`),(0,d.jsx)(`div`,{className:l.cell,children:(0,d.jsx)(i,{defaultPreview:!0,...t})},`${e}-preview`)]}))})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Toolbar × Content' firstColumnHeader='Toolbar' columnHeaders={['Editor']} rows={toolbarVariants.map(({
      key,
      ...rest
    }) => ({
      variantLabel: key,
      cells: [<div key={key} className={styles.cell}>
              <MarkdownEditor defaultValue={SHORT} {...rest} />
            </div>]
    }))} />

      <StoryTable sectionTitle='Header × Content' firstColumnHeader='Header' columnHeaders={['false', 'true']} rows={[{
      variantLabel: 'hideHeader',
      cells: [<div key={'header'} className={styles.cell}>
                <MarkdownEditor defaultValue={SHORT} />
              </div>, <div key={'hideHeader'} className={styles.cell}>
                <MarkdownEditor defaultValue={SHORT} hideHeader />
              </div>]
    }]} />

      <StoryTable sectionTitle='State' firstColumnHeader='Value' columnHeaders={['Raw', 'Preview']} rows={stateVariants.map(({
      key,
      ...rest
    }) => ({
      variantLabel: key,
      cells: [<div key={\`\${key}-raw\`} className={styles.cell}>
              <MarkdownEditor {...rest} />
            </div>, <div key={\`\${key}-preview\`} className={styles.cell}>
              <MarkdownEditor defaultPreview {...rest} />
            </div>]
    }))} />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,f as default};
//# sourceMappingURL=MarkdownEditor.VisualMatrix.stories-COjcrgBj.js.map