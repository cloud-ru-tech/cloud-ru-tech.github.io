import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{i,t as a}from"./iframe-DMWsC78w.js";import{n as o,t as s}from"./src-DkDQwBir.js";import{n as c,t as l}from"./stories.module-D3U40748.js";var u,d,f,p,m,h,g;t((()=>{s(),u=e(r(),1),a(),l(),d=n(),f={title:`Snack/Foundation & utilities/DragAndDrop/DropTarget`,id:`components-draganddrop-droptarget`,component:o,parameters:{layout:`padded`}},p=[{label:`default`,active:!1},{label:`active`,active:!0}],m=[{label:`Empty`,render:()=>null,className:c.emptyZone},{label:`With content`,render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{className:c.row,children:`ListItem 1`}),(0,d.jsx)(`div`,{className:c.row,children:`ListItem 2`})]}),className:c.entity}],h={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsx)(`div`,{className:c.grid,children:(0,d.jsx)(i,{sectionTitle:`State × Content`,firstColumnHeader:`State`,columnHeaders:m.map(({label:e})=>e),rows:p.map(({label:e,active:t})=>({variantLabel:e,cells:m.map(e=>(0,d.jsx)(`div`,{className:c.canvas,children:(0,d.jsx)(o,{active:t,className:(0,u.default)(e.className),children:e.render()})},e.label))}))})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='State × Content' firstColumnHeader='State' columnHeaders={contents.map(({
      label
    }) => label)} rows={states.map(({
      label,
      active
    }) => ({
      variantLabel: label,
      cells: contents.map(content => <div key={content.label} className={styles.canvas}>
              <DropTarget active={active} className={cn(content.className)}>
                {content.render()}
              </DropTarget>
            </div>)
    }))} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,f as default};
//# sourceMappingURL=DropTarget.VisualMatrix.stories-Coo2_s6C.js.map