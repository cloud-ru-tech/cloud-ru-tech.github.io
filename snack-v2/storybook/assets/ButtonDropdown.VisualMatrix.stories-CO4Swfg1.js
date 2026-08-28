import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,gn as r,i,nt as a,t as o}from"./iframe-SlIP-akt.js";import{n as s,t as c}from"./src-BIyZbdcZ.js";import{n as l,t as u}from"./styles.module-DFYLdCyG.js";var d,f,p,m,h,g;e((()=>{a(),c(),o(),u(),d=t(),f=[{id:`1`,content:{label:`Year`},onClick:()=>void 0},{id:`2`,content:{label:`Month`},onClick:()=>void 0}],p=[`s`,`m`,`l`],m={title:`Uikit Product/Actions/ButtonPredefined/ButtonDropdown`,id:`uikit-product-buttonpredefined-buttondropdown`,component:s,parameters:{layout:`padded`,controls:{disable:!0}}},h={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,d.jsxs)(`div`,{className:l.panel,children:[(0,d.jsx)(i,{sectionTitle:`desktop — closed`,firstColumnHeader:`size`,columnHeaders:[``],rows:p.map(e=>({variantLabel:e,cells:[(0,d.jsx)(r,{layoutType:n.Desktop,children:(0,d.jsx)(s,{label:`Period`,size:e,items:f})},`d-${e}-closed`)]}))}),(0,d.jsx)(i,{sectionTitle:`mobile — closed`,firstColumnHeader:`size`,columnHeaders:[``],rows:[{variantLabel:`s`,cells:[(0,d.jsx)(r,{layoutType:n.Mobile,children:(0,d.jsx)(s,{label:`Period`,size:`s`,items:f})},`m-closed`)]}]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <div className={styles.panel}>
      <StoryTable sectionTitle='desktop — closed' firstColumnHeader='size' columnHeaders={['']} rows={sizes.map(size => ({
      variantLabel: size,
      cells: [<AdaptiveProvider key={\`d-\${size}-closed\`} layoutType={LAYOUT_TYPE.Desktop}>
              <ButtonDropdown label='Period' size={size} items={items} />
            </AdaptiveProvider>]
    }))} />

      {/* Открытое состояние — отдельный снимок \`open.png\` (portal-overlay в StoryTable
          перекрывает соседние ячейки, ломая сетку). В матрице держим только closed-оси. */}
      <StoryTable sectionTitle='mobile — closed' firstColumnHeader='size' columnHeaders={['']} rows={[{
      variantLabel: 's',
      cells: [<AdaptiveProvider key='m-closed' layoutType={LAYOUT_TYPE.Mobile}>
                <ButtonDropdown label='Period' size='s' items={items} />
              </AdaptiveProvider>]
    }]} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,m as default};
//# sourceMappingURL=ButtonDropdown.VisualMatrix.stories-CO4Swfg1.js.map