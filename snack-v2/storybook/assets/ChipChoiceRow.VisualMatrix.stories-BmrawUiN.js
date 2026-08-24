import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CqCwb0Nr.js";import{n as i,t as a,u as o}from"./src-CoKVgEkq.js";import{d as s,i as c,l}from"./visualMatrix.helpers-Dnu8rVzB.js";var u,d,f=e((()=>{u=`_matrix_dr4j8_4`,d={matrix:u}})),p,m,h,g,_,v,y,b;e((()=>{a(),r(),s(),f(),p=t(),m={title:`Snack/Inputs & Forms/Chips/ChipChoiceRow`,id:`components-chips-chipchoicerow`,component:i,parameters:{layout:`padded`}},h=[{id:`status`,type:o.Single,label:`Status`,pinned:!0,options:[{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`}]}],g=[{id:`cat`,type:o.Multiple,label:`Category`,options:[{value:`c1`,label:`Cat 1`},{value:`c2`,label:`Cat 2`}]},{id:`date`,type:o.Date,label:`Date`,options:[]}],_=[...h,...g],v=[{key:`empty (add button only)`,render:e=>(0,p.jsx)(i,{size:e,filters:g,visibleFilters:[]},e)},{key:`pinned + visible + add`,render:e=>(0,p.jsx)(i,{size:e,filters:_,visibleFilters:[`cat`,`date`],defaultValue:{status:`active`}},e)},{key:`no add button`,render:e=>(0,p.jsx)(i,{size:e,filters:h,showAddButton:!1},e)}],y={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsx)(`div`,{className:d.matrix,children:(0,p.jsx)(n,{sectionTitle:`State × Size`,firstColumnHeader:`State`,columnHeaders:c,rows:v.map(({key:e,render:t})=>({variantLabel:e,cells:l.map(e=>t(e))}))})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='State × Size' firstColumnHeader='State' columnHeaders={COLUMN_HEADERS} rows={stateRows.map(({
      key,
      render
    }) => ({
      variantLabel: key,
      cells: SIZES.map(size => render(size))
    }))} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,m as default};
//# sourceMappingURL=ChipChoiceRow.VisualMatrix.stories-BmrawUiN.js.map