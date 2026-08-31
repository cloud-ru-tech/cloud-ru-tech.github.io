import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,gn as r,i,nt as a,t as o}from"./iframe-CRw8NhXI.js";import{U as s,Zt as c,dn as l,t as u}from"./system-B_eKYAdZ.js";import{a as d,t as f}from"./src-BlBPNAvZ.js";import{c as p,n as m,t as h}from"./src-CXDw4gqD.js";import{n as g,t as _}from"./styles.module-CBAnneDZ.js";function v({layoutType:e=n.Desktop,outline:t,withFilterRow:i,filterOpen:a,withBulk:o,bulkChecked:c,bulkIndeterminate:l,withAfter:u,dataViewValue:f}){return(0,b.jsx)(r,{layoutType:e,children:(0,b.jsx)(`div`,{className:e===n.Mobile?g.containerMatrixMobile:g.containerMatrix,children:(0,b.jsx)(m,{outline:t,"data-test-id":p.main,search:{value:``,onChange:x,placeholder:`Поиск`},onRefresh:x,moreActions:[{content:{label:`Экспорт`},onClick:x}],after:u?(0,b.jsx)(d,{view:`function`,appearance:`neutral`,icon:(0,b.jsx)(s,{}),size:`m`,"aria-label":`Дополнительное действие`,onClick:x}):void 0,dataView:f?{show:!0,value:f,onChange:x}:void 0,filterRow:i?{open:a??!1,onOpenChange:x,...C}:void 0,...o?{checked:c,indeterminate:l,selectedCount:c||l?5:0,totalCount:100,onCheck:x,bulkActions:w}:{}})})})}function y(e){return T.map(t=>(0,b.jsx)(v,{layoutType:t,...e},t))}var b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{a(),f(),u(),h(),o(),_(),b=t(),x=()=>{},S={title:`Snack/Actions/Toolbar`,id:`components-toolbar`,component:m,parameters:{layout:`fullscreen`}},C={filters:[{id:`status`,type:`single`,label:`Статус`,options:[{value:`active`,label:`Активные`},{value:`archived`,label:`Архив`}]}],value:{},onChange:x},w=[{label:`Подтвердить`,icon:l,onClick:()=>void 0},{label:`Отклонить`,icon:c,onClick:()=>void 0}],T=[n.Desktop,n.Mobile],E=[{label:`filtering=not`,props:{}},{label:`filtering=closed`,props:{withFilterRow:!0}},{label:`filtering=open`,props:{withFilterRow:!0,filterOpen:!0}}],D=[{label:`default`,props:{}},{label:`no outline`,props:{outline:!1}},{label:`outline + open filters`,props:{withFilterRow:!0,filterOpen:!0}}],O=[{label:`unchecked`,props:{bulkChecked:!1}},{label:`checked`,props:{bulkChecked:!0}},{label:`indeterminate`,props:{bulkIndeterminate:!0}}],k=[{label:`list`,props:{dataViewValue:`list`}},{label:`compact`,props:{dataViewValue:`compact`}}],A=[{label:`after`,props:{withAfter:!0}}],j={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,b.jsx)(`div`,{className:g.matrixRoot,children:(0,b.jsxs)(`div`,{className:g.matrixSection,children:[(0,b.jsx)(i,{sectionTitle:`Layout × Filtering`,firstColumnHeader:`State`,columnHeaders:T.map(e=>e),rows:E.map(({label:e,props:t})=>({variantLabel:e,cells:y(t)}))}),(0,b.jsx)(i,{sectionTitle:`Outline`,firstColumnHeader:`State`,columnHeaders:[`Desktop`],rows:D.map(({label:e,props:t})=>({variantLabel:e,cells:[(0,b.jsx)(v,{...t},e)]}))}),(0,b.jsx)(i,{sectionTitle:`Bulk selection — Desktop`,firstColumnHeader:`State`,columnHeaders:[`Desktop`],rows:O.map(({label:e,props:t})=>({variantLabel:e,cells:[(0,b.jsx)(v,{withBulk:!0,...t},e)]}))}),(0,b.jsx)(i,{sectionTitle:`Bulk selection — Mobile`,firstColumnHeader:`State`,columnHeaders:[`Mobile`],rows:[{variantLabel:`unchecked`,cells:[(0,b.jsx)(v,{layoutType:n.Mobile,withBulk:!0,bulkChecked:!1},`mobile-unchecked`)]}]}),(0,b.jsx)(i,{sectionTitle:`DataView`,firstColumnHeader:`Value`,columnHeaders:T.map(e=>e),rows:k.map(({label:e,props:t})=>({variantLabel:e,cells:y(t)}))}),(0,b.jsx)(i,{sectionTitle:`After slot`,firstColumnHeader:`State`,columnHeaders:T.map(e=>e),rows:A.map(({label:e,props:t})=>({variantLabel:e,cells:y(t)}))})]})})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrixRoot}>
      <div className={styles.matrixSection}>
        <StoryTable sectionTitle='Layout × Filtering' firstColumnHeader='State' columnHeaders={layoutColumns.map(layout => layout)} rows={filteringRows.map(({
        label,
        props
      }) => ({
        variantLabel: label,
        cells: renderLayoutRow(props)
      }))} />

        <StoryTable sectionTitle='Outline' firstColumnHeader='State' columnHeaders={['Desktop']} rows={outlineRows.map(({
        label,
        props
      }) => ({
        variantLabel: label,
        cells: [<ToolbarMatrixCell key={label} {...props} />]
      }))} />

        <StoryTable sectionTitle='Bulk selection — Desktop' firstColumnHeader='State' columnHeaders={['Desktop']} rows={bulkRows.map(({
        label,
        props
      }) => ({
        variantLabel: label,
        cells: [<ToolbarMatrixCell key={label} withBulk {...props} />]
      }))} />

        <StoryTable sectionTitle='Bulk selection — Mobile' firstColumnHeader='State' columnHeaders={['Mobile']} rows={[{
        variantLabel: 'unchecked',
        cells: [<ToolbarMatrixCell key='mobile-unchecked' layoutType={LAYOUT_TYPE.Mobile} withBulk bulkChecked={false} />]
      }]} />

        <StoryTable sectionTitle='DataView' firstColumnHeader='Value' columnHeaders={layoutColumns.map(layout => layout)} rows={dataViewRows.map(({
        label,
        props
      }) => ({
        variantLabel: label,
        cells: renderLayoutRow(props)
      }))} />

        <StoryTable sectionTitle='After slot' firstColumnHeader='State' columnHeaders={layoutColumns.map(layout => layout)} rows={afterRows.map(({
        label,
        props
      }) => ({
        variantLabel: label,
        cells: renderLayoutRow(props)
      }))} />
      </div>
    </div>
}`,...j.parameters?.docs?.source}}},M=[`VisualMatrix`]}))();export{j as VisualMatrix,M as __namedExportsOrder,S as default};
//# sourceMappingURL=Toolbar.VisualMatrix.stories-B1DVk-ng.js.map