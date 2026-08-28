import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,gn as r,i,nt as a,t as o}from"./iframe-CSZ3Qkp5.js";import{V as s,t as c,v as l}from"./src-D4dK58q7.js";import{a as u,c as d,t as f}from"./fixtures-xDMBbSD4.js";import{n as p,t as m}from"./styles.module-nXmJ-1ev.js";var h,g,_,v,y,b,x,S,C,w;e((()=>{a(),c(),o(),d(),m(),h=t(),g={title:`Snack/Data display/Table/ServerTable`,id:`components-table-servertable`,component:l},_=u({withStatusColumn:!0}),v=f.slice(0,4),y=f.slice(4,8),b=f.slice(0,1),x=()=>{},S={state:``,onChange:x},C={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,h.jsxs)(`div`,{className:p.grid,children:[(0,h.jsx)(i,{sectionTitle:`ServerTable states`,firstColumnHeader:`State`,columnHeaders:[`Default`],rows:[{variantLabel:`with data`,cells:[(0,h.jsx)(`div`,{className:p.cell,children:(0,h.jsx)(l,{items:v,total:20,limit:4,offset:0,onChangePage:x,columnDefinitions:_,outline:!0})},`data`)]},{variantLabel:`loading`,cells:[(0,h.jsx)(`div`,{className:p.cell,children:(0,h.jsx)(l,{items:[],total:0,limit:4,offset:0,onChangePage:x,columnDefinitions:_,loading:!0,outline:!0})},`loading`)]},{variantLabel:`empty`,cells:[(0,h.jsx)(`div`,{className:p.cell,children:(0,h.jsx)(l,{items:[],total:0,limit:4,offset:0,onChangePage:x,columnDefinitions:_,noDataState:{title:`Нет данных`,content:`Список пуст`},outline:!0})},`empty`)]},{variantLabel:`rows-per-page options`,cells:[(0,h.jsx)(`div`,{className:p.cell,children:(0,h.jsx)(l,{items:v,total:20,limit:4,offset:0,onChangePage:x,pagination:{options:[4,8]},columnDefinitions:_,outline:!0})},`rows-per-page`)]},{variantLabel:`search loading`,cells:[(0,h.jsx)(`div`,{className:p.cell,children:(0,h.jsx)(l,{items:b,total:1,limit:4,offset:0,onChangePage:x,search:{state:`Анна`,loading:!0,onChange:x},columnDefinitions:_,outline:!0})},`search-loading`)]},{variantLabel:`page 2`,cells:[(0,h.jsx)(`div`,{className:p.cell,children:(0,h.jsx)(l,{items:y,total:20,limit:4,offset:4,onChangePage:x,columnDefinitions:_,outline:!0})},`page-2`)]}]}),(0,h.jsx)(i,{sectionTitle:`Layout type`,firstColumnHeader:`layoutType`,columnHeaders:[`table view`,`cards view`],rows:[{variantLabel:`mobile`,cells:[(0,h.jsx)(`div`,{className:p.mobileCell,children:(0,h.jsx)(r,{layoutType:n.Mobile,children:(0,h.jsx)(l,{items:v,total:20,limit:4,offset:0,onChangePage:x,columnDefinitions:_,view:s.Table,search:S,columnsSettings:{enableSettingsMenu:!0},sorting:{},outline:!0})})},`layout-mobile-table`),(0,h.jsx)(`div`,{className:p.mobileCell,children:(0,h.jsx)(r,{layoutType:n.Mobile,children:(0,h.jsx)(l,{items:v,total:20,limit:4,offset:0,onChangePage:x,columnDefinitions:_,view:s.Cards,headlineId:`name`,search:S,columnsSettings:{enableSettingsMenu:!0},sorting:{},outline:!0})})},`layout-mobile-cards`)]}]})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='ServerTable states' firstColumnHeader='State' columnHeaders={['Default']} rows={[{
      variantLabel: 'with data',
      cells: [<div key='data' className={styles.cell}>
                <ServerTable items={PAGE} total={20} limit={4} offset={0} onChangePage={noop} columnDefinitions={columns} outline />
              </div>]
    }, {
      variantLabel: 'loading',
      cells: [<div key='loading' className={styles.cell}>
                <ServerTable items={[]} total={0} limit={4} offset={0} onChangePage={noop} columnDefinitions={columns} loading outline />
              </div>]
    }, {
      variantLabel: 'empty',
      cells: [<div key='empty' className={styles.cell}>
                <ServerTable items={[]} total={0} limit={4} offset={0} onChangePage={noop} columnDefinitions={columns} noDataState={{
          title: 'Нет данных',
          content: 'Список пуст'
        }} outline />
              </div>]
    }, {
      // ChipChoice выбора числа строк рядом с пагинацией
      variantLabel: 'rows-per-page options',
      cells: [<div key='rows-per-page' className={styles.cell}>
                <ServerTable items={PAGE} total={20} limit={4} offset={0} onChangePage={noop} pagination={{
          options: [4, 8]
        }} columnDefinitions={columns} outline />
              </div>]
    }, {
      // спиннер в поле поиска при загрузке результатов
      variantLabel: 'search loading',
      cells: [<div key='search-loading' className={styles.cell}>
                <ServerTable items={SEARCH_RESULT} total={1} limit={4} offset={0} onChangePage={noop} search={{
          state: 'Анна',
          loading: true,
          onChange: noop
        }} columnDefinitions={columns} outline />
              </div>]
    }, {
      // активная вторая страница в пагинации
      variantLabel: 'page 2',
      cells: [<div key='page-2' className={styles.cell}>
                <ServerTable items={PAGE_TWO} total={20} limit={4} offset={4} onChangePage={noop} columnDefinitions={columns} outline />
              </div>]
    }]} />

      <StoryTable sectionTitle='Layout type' firstColumnHeader='layoutType' columnHeaders={['table view', 'cards view']} rows={[{
      variantLabel: 'mobile',
      cells: [<div key='layout-mobile-table' className={styles.mobileCell}>
                <AdaptiveProvider layoutType={LAYOUT_TYPE.Mobile}>
                  <ServerTable items={PAGE} total={20} limit={4} offset={0} onChangePage={noop} columnDefinitions={columns} view={VIEW.Table} search={serverSearch} columnsSettings={{
            enableSettingsMenu: true
          }} sorting={{}} outline />
                </AdaptiveProvider>
              </div>, <div key='layout-mobile-cards' className={styles.mobileCell}>
                <AdaptiveProvider layoutType={LAYOUT_TYPE.Mobile}>
                  <ServerTable items={PAGE} total={20} limit={4} offset={0} onChangePage={noop} columnDefinitions={columns} view={VIEW.Cards} headlineId='name' search={serverSearch} columnsSettings={{
            enableSettingsMenu: true
          }} sorting={{}} outline />
                </AdaptiveProvider>
              </div>]
    }]} />
    </div>
}`,...C.parameters?.docs?.source}}},w=[`VisualMatrix`]}))();export{C as VisualMatrix,w as __namedExportsOrder,g as default};
//# sourceMappingURL=ServerTable.VisualMatrix.stories-Bx-SU0HW.js.map