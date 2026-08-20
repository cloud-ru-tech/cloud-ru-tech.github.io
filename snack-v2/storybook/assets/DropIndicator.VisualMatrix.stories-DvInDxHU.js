import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{i,t as a}from"./iframe-Bd5xtg2w.js";import{d as o,i as s,t as c}from"./src-vYekPpRd.js";import{n as l,t as u}from"./stories.module-D3U40748.js";var d,f,p,m,h,g;t((()=>{c(),d=e(r(),1),a(),u(),f=n(),p={title:`Snack/Foundation & utilities/DragAndDrop/DropIndicator`,id:`components-draganddrop-dropindicator`,component:s,parameters:{layout:`padded`}},m=Object.values(o),h={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsx)(`div`,{className:l.grid,children:(0,f.jsx)(i,{sectionTitle:`Orientation`,firstColumnHeader:`Orientation`,columnHeaders:[`Indicator`],rows:m.map(e=>({variantLabel:e,cells:[(0,f.jsx)(`div`,{className:(0,d.default)(l.canvas,l.entity,{[l.verticalCell]:e===o.Vertical}),children:(0,f.jsx)(s,{orientation:e})},e)]}))})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='Orientation' firstColumnHeader='Orientation' columnHeaders={['Indicator']} rows={orientations.map(orientation => ({
      variantLabel: orientation,
      cells: [
      // Линия растягивается по родителю, поэтому у ячейки задан размер вдоль её оси.
      <div key={orientation} className={cn(styles.canvas, styles.entity, {
        [styles.verticalCell]: orientation === ORIENTATION.Vertical
      })}>
              <DropIndicator orientation={orientation} />
            </div>]
    }))} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,p as default};
//# sourceMappingURL=DropIndicator.VisualMatrix.stories-DvInDxHU.js.map