import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,i as r,ot as i,t as a,wn as o}from"./iframe-qs8RgOhH.js";import{n as s,t as c}from"./src-CP5bD3pi.js";import{n as l,t as u}from"./styles.module-DFYLdCyG.js";var d,f,p,m,h,g;e((()=>{i(),c(),a(),u(),d=t(),f=[{id:`1`,content:{label:`Year`},onClick:()=>void 0},{id:`2`,content:{label:`Month`},onClick:()=>void 0}],p=[`s`,`m`,`l`],m={title:`Uikit Product/Actions/ButtonPredefined/ButtonDropdown`,id:`uikit-product-buttonpredefined-buttondropdown`,component:s,parameters:{layout:`padded`,controls:{disable:!0}}},h={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,d.jsxs)(`div`,{className:l.panel,children:[(0,d.jsx)(r,{sectionTitle:`desktop — closed`,firstColumnHeader:`size`,columnHeaders:[``],rows:p.map(e=>({variantLabel:e,cells:[(0,d.jsx)(n,{layoutType:o.Desktop,children:(0,d.jsx)(s,{label:`Period`,size:e,items:f})},`d-${e}-closed`)]}))}),(0,d.jsx)(r,{sectionTitle:`mobile — closed`,firstColumnHeader:`size`,columnHeaders:[``],rows:[{variantLabel:`s`,cells:[(0,d.jsx)(n,{layoutType:o.Mobile,children:(0,d.jsx)(s,{label:`Period`,size:`s`,items:f})},`m-closed`)]}]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <div className={styles.panel}>
      <StoryTable sectionTitle='desktop — closed' firstColumnHeader='size' columnHeaders={['']} rows={sizes.map(size => ({
      variantLabel: size,
      cells: [<LayoutScope key={\`d-\${size}-closed\`} layoutType={LAYOUT_TYPE.Desktop}>
              <ButtonDropdown label='Period' size={size} items={items} />
            </LayoutScope>]
    }))} />

      {/* Открытое состояние — отдельный снимок \`open.png\` (portal-overlay в StoryTable
          перекрывает соседние ячейки, ломая сетку). В матрице держим только closed-оси. */}
      <StoryTable sectionTitle='mobile — closed' firstColumnHeader='size' columnHeaders={['']} rows={[{
      variantLabel: 's',
      cells: [<LayoutScope key='m-closed' layoutType={LAYOUT_TYPE.Mobile}>
                <ButtonDropdown label='Period' size='s' items={items} />
              </LayoutScope>]
    }]} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,m as default};
//# sourceMappingURL=ButtonDropdown.VisualMatrix.stories-C2xfp7FS.js.map