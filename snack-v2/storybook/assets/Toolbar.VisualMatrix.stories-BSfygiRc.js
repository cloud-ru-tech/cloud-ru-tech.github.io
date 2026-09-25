import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,i as r,t as i,wn as a}from"./iframe-qs8RgOhH.js";import{U as o,Zt as s,dn as c,t as l}from"./system-BjOKAueR.js";import{a as u,t as d}from"./src-CHNzQsqP.js";import{c as f,n as p,t as m}from"./src-9ky_x1wp.js";import{n as h,t as g}from"./styles.module-BkQ9yNwB.js";function _({layoutType:e=a.Desktop,outline:t,withFilterRow:r,filterOpen:i,withBulk:s,bulkChecked:c,bulkIndeterminate:l,withAfter:d,dataViewValue:m}){return(0,y.jsx)(n,{layoutType:e,children:(0,y.jsx)(`div`,{className:e===a.Mobile?h.containerMatrixMobile:h.containerMatrix,children:(0,y.jsx)(p,{outline:t,"data-test-id":f.main,search:{value:``,onChange:b,placeholder:`Поиск`},onRefresh:b,moreActions:[{content:{label:`Экспорт`},onClick:b}],after:d?(0,y.jsx)(u,{view:`function`,appearance:`neutral`,icon:(0,y.jsx)(o,{}),size:`m`,"aria-label":`Дополнительное действие`,onClick:b}):void 0,dataView:m?{show:!0,value:m,onChange:b}:void 0,filterRow:r?{open:i??!1,onOpenChange:b,...S}:void 0,...s?{checked:c,indeterminate:l,selectedCount:c||l?5:0,totalCount:100,onCheck:b,bulkActions:C}:{}})})})}function v(e){return w.map(t=>(0,y.jsx)(_,{layoutType:t,...e},t))}var y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{d(),l(),m(),i(),g(),y=t(),b=()=>{},x={title:`Snack/Actions/Toolbar`,id:`components-toolbar`,component:p,parameters:{layout:`fullscreen`}},S={filters:[{id:`status`,type:`single`,label:`Статус`,options:[{value:`active`,label:`Активные`},{value:`archived`,label:`Архив`}]}],value:{},onChange:b},C=[{label:`Подтвердить`,icon:c,onClick:()=>void 0},{label:`Отклонить`,icon:s,onClick:()=>void 0}],w=[a.Desktop,a.Mobile],T=[{label:`filtering=not`,props:{}},{label:`filtering=closed`,props:{withFilterRow:!0}},{label:`filtering=open`,props:{withFilterRow:!0,filterOpen:!0}}],E=[{label:`default`,props:{}},{label:`no outline`,props:{outline:!1}},{label:`outline + open filters`,props:{withFilterRow:!0,filterOpen:!0}}],D=[{label:`unchecked`,props:{bulkChecked:!1}},{label:`checked`,props:{bulkChecked:!0}},{label:`indeterminate`,props:{bulkIndeterminate:!0}}],O=[{label:`list`,props:{dataViewValue:`list`}},{label:`compact`,props:{dataViewValue:`compact`}}],k=[{label:`after`,props:{withAfter:!0}}],A={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,y.jsx)(`div`,{className:h.matrixRoot,children:(0,y.jsxs)(`div`,{className:h.matrixSection,children:[(0,y.jsx)(r,{sectionTitle:`Layout × Filtering`,firstColumnHeader:`State`,columnHeaders:w.map(e=>e),rows:T.map(({label:e,props:t})=>({variantLabel:e,cells:v(t)}))}),(0,y.jsx)(r,{sectionTitle:`Outline`,firstColumnHeader:`State`,columnHeaders:[`Desktop`],rows:E.map(({label:e,props:t})=>({variantLabel:e,cells:[(0,y.jsx)(_,{...t},e)]}))}),(0,y.jsx)(r,{sectionTitle:`Bulk selection — Desktop`,firstColumnHeader:`State`,columnHeaders:[`Desktop`],rows:D.map(({label:e,props:t})=>({variantLabel:e,cells:[(0,y.jsx)(_,{withBulk:!0,...t},e)]}))}),(0,y.jsx)(r,{sectionTitle:`Bulk selection — Mobile`,firstColumnHeader:`State`,columnHeaders:[`Mobile`],rows:[{variantLabel:`unchecked`,cells:[(0,y.jsx)(_,{layoutType:a.Mobile,withBulk:!0,bulkChecked:!1},`mobile-unchecked`)]}]}),(0,y.jsx)(r,{sectionTitle:`DataView`,firstColumnHeader:`Value`,columnHeaders:w.map(e=>e),rows:O.map(({label:e,props:t})=>({variantLabel:e,cells:v(t)}))}),(0,y.jsx)(r,{sectionTitle:`After slot`,firstColumnHeader:`State`,columnHeaders:w.map(e=>e),rows:k.map(({label:e,props:t})=>({variantLabel:e,cells:v(t)}))})]})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`VisualMatrix`]}))();export{A as VisualMatrix,j as __namedExportsOrder,x as default};
//# sourceMappingURL=Toolbar.VisualMatrix.stories-BSfygiRc.js.map