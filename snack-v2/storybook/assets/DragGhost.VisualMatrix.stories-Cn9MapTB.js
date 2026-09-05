import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{i,t as a}from"./iframe-C2bZDhP2.js";import{c as o,t as s,u as c}from"./src-ByMIkhSf.js";import{n as l,t as u}from"./stories.module-D3U40748.js";var d,f,p,m,h,g,_;t((()=>{s(),d=e(r(),1),a(),u(),f=n(),p={title:`Snack/Foundation & utilities/DragAndDrop/DragGhost`,id:`components-draganddrop-dragghost`,component:o,parameters:{layout:`padded`}},m=[{label:`default`,dragging:!1},{label:`dragging`,dragging:!0}],h=[c.Static,c.Dynamic],g={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsx)(`div`,{className:l.grid,children:(0,f.jsx)(i,{sectionTitle:`State × Mode`,firstColumnHeader:`State`,columnHeaders:h.map(e=>e.toUpperCase()),rows:m.map(({label:e,dragging:t})=>({variantLabel:e,cells:h.map(e=>(0,f.jsxs)(`div`,{className:(0,d.default)(l.canvas,l.list),children:[(0,f.jsx)(`div`,{className:l.row,children:`ListItem 1`}),(0,f.jsx)(o,{dragging:t,mode:e,className:l.radiusRounded,children:(0,f.jsx)(`div`,{className:l.row,children:`ListItem 2`})}),(0,f.jsx)(`div`,{className:l.row,children:`ListItem 3`})]},e))}))})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      {/* Соседи в ячейке обязательны: пустой слот читается только рядом с ними. */}
      <StoryTable sectionTitle='State × Mode' firstColumnHeader='State' columnHeaders={modes.map(mode => mode.toUpperCase())} rows={states.map(({
      label,
      dragging
    }) => ({
      variantLabel: label,
      cells: modes.map(mode => <div key={mode} className={cn(styles.canvas, styles.list)}>
              <div className={styles.row}>ListItem 1</div>
              <DragGhost dragging={dragging} mode={mode} className={styles.radiusRounded}>
                <div className={styles.row}>ListItem 2</div>
              </DragGhost>
              <div className={styles.row}>ListItem 3</div>
            </div>)
    }))} />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,p as default};
//# sourceMappingURL=DragGhost.VisualMatrix.stories-Cn9MapTB.js.map