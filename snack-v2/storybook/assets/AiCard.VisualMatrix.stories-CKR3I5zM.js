import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-C2bZDhP2.js";import{i,n as a,r as o,t as s}from"./testIds-DP8680ow.js";var c,l,u,d=e((()=>{c=`_matrix_2wf09_4`,l=`_cardCell_2wf09_9`,u={matrix:c,cardCell:l}}));function f(e,t){return(0,p.jsx)(`div`,{className:u.cardCell,children:(0,p.jsx)(i,{...e,"data-test-id":t})})}var p,m,h,g,_,v,y;e((()=>{o(),r(),d(),a(),p=t(),m={title:`AI/Surfaces/AiCard`,id:`ai-aicard`,component:i,parameters:{layout:`padded`}},h=[!1,!0],g=[{key:`default`,extra:{}},{key:`disabled`,extra:{disabled:!0}}],_=[{key:`title-and-content`,label:`title + content`,extra:{title:`Card title`,children:`Default content`}},{key:`title-only`,label:`title only`,extra:{title:`Card title`,children:void 0}},{key:`content-only`,label:`content only`,extra:{title:void 0,children:`Default content`}},{key:`long-title`,label:`long title (ellipsis)`,extra:{title:`A really long card title that overflows the available space`,children:`Default content`}}],v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:u.matrix,children:[(0,p.jsx)(n,{sectionTitle:`State × Checked`,firstColumnHeader:`State`,columnHeaders:h.map(e=>e?`CHECKED`:`UNCHECKED`),rows:g.map(({key:e,extra:t})=>({variantLabel:e,cells:h.map(n=>f({...t,checked:n,title:`Card title`,children:`Default content`},`${s.root}-state-${e}-${n?`checked`:`unchecked`}`))}))}),(0,p.jsx)(n,{sectionTitle:`Slots × Checked`,firstColumnHeader:`Slots`,columnHeaders:h.map(e=>e?`CHECKED`:`UNCHECKED`),rows:_.map(({key:e,label:t,extra:n})=>({variantLabel:t,cells:h.map(t=>f({...n,checked:t},`${s.root}-slots-${e}-${t?`checked`:`unchecked`}`))}))})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='State × Checked' firstColumnHeader='State' columnHeaders={checkedStates.map(c => c ? 'CHECKED' : 'UNCHECKED')} rows={enabledRows.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: checkedStates.map(checked => renderCell({
        ...extra,
        checked,
        title: 'Card title',
        children: 'Default content'
      }, \`\${TEST_IDS.root}-state-\${key}-\${checked ? 'checked' : 'unchecked'}\`))
    }))} />

      <StoryTable sectionTitle='Slots × Checked' firstColumnHeader='Slots' columnHeaders={checkedStates.map(c => c ? 'CHECKED' : 'UNCHECKED')} rows={slotRows.map(({
      key,
      label,
      extra
    }) => ({
      variantLabel: label,
      cells: checkedStates.map(checked => renderCell({
        ...extra,
        checked
      }, \`\${TEST_IDS.root}-slots-\${key}-\${checked ? 'checked' : 'unchecked'}\`))
    }))} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,m as default};
//# sourceMappingURL=AiCard.VisualMatrix.stories-CKR3I5zM.js.map