import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-s8V4E6XA.js";import{n as i,t as a,u as o}from"./src-D0wjdWXP.js";import{n as s,t as c}from"./testIds-DWf9SOGo.js";import{d as l,i as u,l as d}from"./visualMatrix.helpers-BU7i8hb-.js";var f,p,m,h=e((()=>{f=`_matrix_xzl2j_4`,p=`_dividerWrappingRow_xzl2j_9`,m={matrix:f,dividerWrappingRow:p}})),g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{a(),r(),s(),l(),h(),g=t(),_={title:`Snack/Inputs & Forms/Chips/ChipChoiceRow`,id:`components-chips-chipchoicerow`,component:i,parameters:{layout:`padded`}},v=[{id:`status`,type:o.Single,label:`Status`,pinned:!0,options:[{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`}]}],y=[{id:`cat`,type:o.Multiple,label:`Category`,options:[{value:`c1`,label:`Cat 1`},{value:`c2`,label:`Cat 2`}]},{id:`date`,type:o.Date,label:`Date`}],b=[...v,...y],x=y.map(e=>({...e,label:`Type`,"data-test-id":c.chipChoiceRow.wrappingFilter})),S={s:150,m:180,l:200},C={s:80,m:100,l:110},w=[{key:`empty (add button only)`,render:e=>(0,g.jsx)(i,{size:e,filters:y,visibleFilters:[]},e)},{key:`pinned + visible + add`,render:e=>(0,g.jsx)(i,{size:e,filters:b,visibleFilters:[`cat`,`date`],defaultValue:{status:`active`}},e)},{key:`no add button`,render:e=>(0,g.jsx)(i,{size:e,filters:v,showAddButton:!1},e)}],T=[...[`chipWrapping`,`dividerWrapping`].map(e=>({key:e===`chipWrapping`?`chip wraps after divider`:`divider wraps after pinned chip`,render:t=>(0,g.jsx)(`div`,{style:{width:e===`dividerWrapping`?S[t]:C[t]},children:(0,g.jsx)(i,{size:t,filters:[...v.map(e=>({...e,label:`Type`,"data-test-id":c.chipChoiceRow.pinnedWrappingFilter})),...x],visibleFilters:[`cat`],className:e===`dividerWrapping`?m.dividerWrappingRow:void 0,"data-test-id":`${c.chipChoiceRow[e]}-${t}`})})})),{key:`clear button wraps independently`,render:e=>(0,g.jsx)(`div`,{style:{width:S[e]},children:(0,g.jsx)(i,{size:e,filters:x,visibleFilters:[`cat`],"data-test-id":`${c.chipChoiceRow.clearButtonWrapping}-${e}`})})},{key:`add and clear buttons wrap onto separate lines`,render:e=>(0,g.jsx)(`div`,{style:{width:C[e]},children:(0,g.jsx)(i,{size:e,filters:x,visibleFilters:[`cat`],"data-test-id":`${c.chipChoiceRow.bothButtonsWrapping}-${e}`})})}],E={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsxs)(`div`,{className:m.matrix,children:[(0,g.jsx)(n,{sectionTitle:`State × Size`,firstColumnHeader:`State`,columnHeaders:u,rows:w.map(({key:e,render:t})=>({variantLabel:e,cells:d.map(e=>t(e))}))}),(0,g.jsx)(n,{sectionTitle:`Wrapping × Size`,firstColumnHeader:`Wrapping`,columnHeaders:u,rows:T.map(({key:e,render:t})=>({variantLabel:e,cells:d.map(e=>t(e))}))})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
      <StoryTable sectionTitle='Wrapping × Size' firstColumnHeader='Wrapping' columnHeaders={COLUMN_HEADERS} rows={wrappingRows.map(({
      key,
      render
    }) => ({
      variantLabel: key,
      cells: SIZES.map(size => render(size))
    }))} />
    </div>
}`,...E.parameters?.docs?.source}}},D=[`VisualMatrix`]}))();export{E as VisualMatrix,D as __namedExportsOrder,_ as default};
//# sourceMappingURL=ChipChoiceRow.VisualMatrix.stories-BesIwi78.js.map