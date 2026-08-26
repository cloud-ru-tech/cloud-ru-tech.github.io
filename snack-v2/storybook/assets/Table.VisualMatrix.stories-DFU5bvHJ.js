import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,gn as r,i,nt as a,t as o}from"./iframe-D1b9r8k6.js";import{A as s,E as c,L as l,O as u,t as d,v as f,w as p,z as m}from"./src-sZaiZ0dw.js";import{a as h,c as g,t as _}from"./fixtures-DbfcIJsL.js";import{n as v,r as y}from"./testIds-Bglm_hNi.js";import{n as b,t as x}from"./styles.module-nXmJ-1ev.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{a(),d(),o(),g(),y(),x(),S=t(),C={title:`Snack/Data display/Table/Table`,id:`components-table-table`,component:f},w=_.slice(0,4),T=_.slice(2,6),E=h({withStatusColumn:!0}),D=h(),O=()=>{},k=e=>e.id,A={noData:{title:`Нет данных`,description:`Список пуст`},noResults:{title:`Ничего не найдено`,description:`Измените запрос или фильтры`},error:{title:`Ошибка загрузки`,description:`Не удалось получить данные`}},j=Object.values(c).map((e,t)=>({id:`status-${e}`,name:`Сервис ${t+1}`,status:e})),M=[p({accessorKey:`status`,mapStatusToAppearance:e=>e,renderDescription:e=>String(e),header:`Статус`,size:160}),{accessorKey:`name`,header:`Имя`,size:200}],N=Object.values(l),P=_.slice(0,N.length),F=new Map(P.map((e,t)=>[e.id,N[t]])),I=e=>F.get(e.id),L=[...h({withStatusColumn:!0}),u({pinned:!0,actionsGenerator:()=>[{content:{label:`Открыть`},onClick:O}]})],R={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,S.jsxs)(`div`,{className:b.grid,children:[(0,S.jsx)(i,{sectionTitle:`View`,firstColumnHeader:`View`,columnHeaders:[`Default`],rows:[{variantLabel:`table`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,view:m.Table,suppressPagination:!0,outline:!0})},`view-table`)]},{variantLabel:`cards`,cells:[(0,S.jsx)(`div`,{className:b.cardCell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,view:m.Cards,headlineId:`name`,suppressPagination:!0,outline:!0})},`view-cards`)]},{variantLabel:`cards selected`,cells:[(0,S.jsx)(`div`,{className:b.cardCell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,view:m.Cards,headlineId:`name`,getRowId:k,rowSelection:{enable:!0,multiRow:!0,initialState:{"u-1":!0}},suppressPagination:!0,outline:!0})},`view-cards-selected`)]},{variantLabel:`cards single (radio)`,cells:[(0,S.jsx)(`div`,{className:b.cardCell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,view:m.Cards,headlineId:`name`,getRowId:k,rowSelection:{enable:!0,multiRow:!1,initialState:{"u-2":!0}},suppressPagination:!0,outline:!0})},`view-cards-single`)]}]}),(0,S.jsx)(i,{sectionTitle:`Status appearance`,firstColumnHeader:`Axis`,columnHeaders:[`Все значения STATUS_APPEARANCE`],rows:[{variantLabel:`status`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:j,columnDefinitions:M,getRowId:e=>e.id,suppressToolbar:!0,suppressPagination:!0,outline:!0})},`status-appearance`)]}]}),(0,S.jsx)(i,{sectionTitle:`Row color`,firstColumnHeader:`Axis`,columnHeaders:[`Все значения TABLE_ROW_COLOR`],rows:[{variantLabel:`row colors`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:P,columnDefinitions:D,getRowId:k,getRowBackgroundColor:I,suppressToolbar:!0,suppressPagination:!0,outline:!0})},`row-colors`)]}]}),(0,S.jsx)(i,{sectionTitle:`Selection & Sorting`,firstColumnHeader:`State`,columnHeaders:[`Table`],rows:[{variantLabel:`multi (checkbox)`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,getRowId:k,rowSelection:{enable:!0,multiRow:!0,initialState:{"u-1":!0}},suppressPagination:!0,outline:!0})},`selection-multi`)]},{variantLabel:`single (radio)`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,getRowId:k,rowSelection:{enable:!0,multiRow:!1,initialState:{"u-2":!0}},suppressPagination:!0,outline:!0})},`selection-single`)]},{variantLabel:`appearance: disabled`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:T,columnDefinitions:E,getRowId:k,rowSelection:{enable:e=>e.original.status!==`blocked`,multiRow:!0,appearance:s.Disabled},suppressPagination:!0,outline:!0})},`selection-disabled`)]},{variantLabel:`appearance: hide-toggler`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:T,columnDefinitions:E,getRowId:k,rowSelection:{enable:e=>e.original.status!==`blocked`,multiRow:!0,appearance:s.HideToggler},suppressPagination:!0,outline:!0})},`selection-hide-toggler`)]},{variantLabel:`sorted`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,sorting:{initialState:[{id:`name`,desc:!1}]},suppressPagination:!0,outline:!0})},`sorted`)]}]}),(0,S.jsx)(i,{sectionTitle:`Pinned columns`,firstColumnHeader:`State`,columnHeaders:[`Narrow container (overflow)`],rows:[{variantLabel:`left + right pinned`,cells:[(0,S.jsx)(`div`,{className:b.narrowCell,children:(0,S.jsx)(f,{data:w,columnDefinitions:L,getRowId:k,suppressToolbar:!0,suppressPagination:!0,outline:!0})},`pinned-columns`)]}]}),(0,S.jsx)(i,{sectionTitle:`Pinned rows`,firstColumnHeader:`State`,columnHeaders:[`Table`],rows:[{variantLabel:`top pinned`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:_.slice(0,6),columnDefinitions:E,getRowId:k,rowPinning:{top:[`u-3`,`u-5`]},keepPinnedRows:!0,suppressToolbar:!0,suppressPagination:!0,outline:!0})},`pinned-rows`)]}]}),(0,S.jsx)(i,{sectionTitle:`Toolbar & chrome`,firstColumnHeader:`State`,columnHeaders:[`Table`],rows:[{variantLabel:`full toolbar (bulk bar)`,cells:[(0,S.jsx)(`div`,{className:b.wideCell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,getRowId:k,rowSelection:{enable:!0,multiRow:!0,initialState:{"u-1":!0,"u-2":!0}},onRefresh:O,onExport:O,moreActions:[{content:{label:`Ещё`},onClick:O}],suppressPagination:!0,outline:!0})},`toolbar-full`)]},{variantLabel:`data view toggle`,cells:[(0,S.jsx)(`div`,{className:b.wideCell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,getRowId:k,showDataView:!0,suppressPagination:!0,outline:!0})},`toolbar-data-view`)]},{variantLabel:`suppress search`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,getRowId:k,rowSelection:{enable:!0,multiRow:!0},suppressSearch:!0,suppressPagination:!0,outline:!0})},`toolbar-no-search`)]},{variantLabel:`suppress toolbar`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,suppressToolbar:!0,suppressPagination:!0,outline:!0})},`toolbar-suppressed`)]},{variantLabel:`suppress header`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,suppressHeader:!0,suppressPagination:!0,outline:!0})},`header-suppressed`)]},{variantLabel:`no outline`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,suppressPagination:!0})},`no-outline`)]},{variantLabel:`rows-per-page options`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:_,columnDefinitions:E,pageSize:5,pagination:{options:[5,10]},outline:!0})},`pagination-options`)]}]}),(0,S.jsx)(i,{sectionTitle:`Layout type`,firstColumnHeader:`layoutType`,columnHeaders:[`table view`,`cards view`],rows:[{variantLabel:`mobile`,cells:[(0,S.jsx)(`div`,{className:b.mobileCell,children:(0,S.jsx)(r,{layoutType:n.Mobile,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,view:m.Table,getRowId:k,rowSelection:{enable:!0,multiRow:!0},columnsSettings:{enableSettingsMenu:!0},sorting:{},suppressPagination:!0,outline:!0})})},`layout-mobile-table`),(0,S.jsx)(`div`,{className:b.mobileCell,children:(0,S.jsx)(r,{layoutType:n.Mobile,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,view:m.Cards,headlineId:`name`,getRowId:k,rowSelection:{enable:!0,multiRow:!0},columnsSettings:{enableSettingsMenu:!0},sorting:{},suppressPagination:!0,outline:!0})})},`layout-mobile-cards`)]}]}),(0,S.jsx)(i,{sectionTitle:`Loading & Empty states`,firstColumnHeader:`State`,columnHeaders:[`Table`],rows:[{variantLabel:`loading`,cells:[(0,S.jsx)(`div`,{className:b.cell,"data-test-id":v.visualMatrix.loadingSection,children:(0,S.jsx)(f,{data:[],columnDefinitions:E,loading:!0,suppressPagination:!0,outline:!0})},`loading`)]},{variantLabel:`infinite loading`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:w,columnDefinitions:E,infiniteLoading:!0,loading:!0,outline:!0})},`infinite-loading`)]},{variantLabel:`no data`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:[],columnDefinitions:E,noDataState:A.noData,suppressPagination:!0,outline:!0})},`no-data`)]},{variantLabel:`no results`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:[],columnDefinitions:E,dataFiltered:!0,noResultsState:A.noResults,suppressPagination:!0,outline:!0})},`no-results`)]},{variantLabel:`error`,cells:[(0,S.jsx)(`div`,{className:b.cell,children:(0,S.jsx)(f,{data:[],columnDefinitions:E,dataError:!0,errorDataState:A.error,suppressPagination:!0,outline:!0})},`error`)]}]})]})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='View' firstColumnHeader='View' columnHeaders={['Default']} rows={[{
      variantLabel: 'table',
      cells: [<div key='view-table' className={styles.cell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} view={VIEW.Table} suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'cards',
      cells: [<div key='view-cards' className={styles.cardCell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} view={VIEW.Cards} headlineId='name' suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'cards selected',
      cells: [<div key='view-cards-selected' className={styles.cardCell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} view={VIEW.Cards} headlineId='name' getRowId={getUserRowId} rowSelection={{
          enable: true,
          multiRow: true,
          initialState: {
            'u-1': true
          }
        }} suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'cards single (radio)',
      cells: [<div key='view-cards-single' className={styles.cardCell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} view={VIEW.Cards} headlineId='name' getRowId={getUserRowId} rowSelection={{
          enable: true,
          multiRow: false,
          initialState: {
            'u-2': true
          }
        }} suppressPagination outline />
              </div>]
    }]} />

      <StoryTable sectionTitle='Status appearance' firstColumnHeader='Axis' columnHeaders={['Все значения STATUS_APPEARANCE']} rows={[{
      variantLabel: 'status',
      cells: [<div key='status-appearance' className={styles.cell}>
                <Table data={STATUS_DEMO_ROWS} columnDefinitions={statusDemoColumns} getRowId={row => row.id} suppressToolbar suppressPagination outline />
              </div>]
    }]} />

      <StoryTable sectionTitle='Row color' firstColumnHeader='Axis' columnHeaders={['Все значения TABLE_ROW_COLOR']} rows={[{
      variantLabel: 'row colors',
      cells: [<div key='row-colors' className={styles.cell}>
                <Table data={ROW_COLOR_DATA} columnDefinitions={plainColumns} getRowId={getUserRowId} getRowBackgroundColor={getDemoRowBackgroundColor} suppressToolbar suppressPagination outline />
              </div>]
    }]} />

      <StoryTable sectionTitle='Selection & Sorting' firstColumnHeader='State' columnHeaders={['Table']} rows={[{
      variantLabel: 'multi (checkbox)',
      cells: [<div key='selection-multi' className={styles.cell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} getRowId={getUserRowId} rowSelection={{
          enable: true,
          multiRow: true,
          initialState: {
            'u-1': true
          }
        }} suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'single (radio)',
      cells: [<div key='selection-single' className={styles.cell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} getRowId={getUserRowId} rowSelection={{
          enable: true,
          multiRow: false,
          initialState: {
            'u-2': true
          }
        }} suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'appearance: disabled',
      cells: [<div key='selection-disabled' className={styles.cell}>
                <Table data={SELECTION_DATA} columnDefinitions={columns} getRowId={getUserRowId} rowSelection={{
          enable: row => row.original.status !== 'blocked',
          multiRow: true,
          appearance: RowAppearance.Disabled
        }} suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'appearance: hide-toggler',
      cells: [<div key='selection-hide-toggler' className={styles.cell}>
                <Table data={SELECTION_DATA} columnDefinitions={columns} getRowId={getUserRowId} rowSelection={{
          enable: row => row.original.status !== 'blocked',
          multiRow: true,
          appearance: RowAppearance.HideToggler
        }} suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'sorted',
      cells: [<div key='sorted' className={styles.cell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} sorting={{
          initialState: [{
            id: 'name',
            desc: false
          }]
        }} suppressPagination outline />
              </div>]
    }]} />

      <StoryTable sectionTitle='Pinned columns' firstColumnHeader='State' columnHeaders={['Narrow container (overflow)']} rows={[{
      variantLabel: 'left + right pinned',
      cells: [<div key='pinned-columns' className={styles.narrowCell}>
                <Table data={SMALL_DATA} columnDefinitions={pinnedColumns} getRowId={getUserRowId} suppressToolbar suppressPagination outline />
              </div>]
    }]} />

      <StoryTable sectionTitle='Pinned rows' firstColumnHeader='State' columnHeaders={['Table']} rows={[{
      variantLabel: 'top pinned',
      cells: [<div key='pinned-rows' className={styles.cell}>
                <Table data={SAMPLE_USERS.slice(0, 6)} columnDefinitions={columns} getRowId={getUserRowId} rowPinning={{
          top: ['u-3', 'u-5']
        }} keepPinnedRows suppressToolbar suppressPagination outline />
              </div>]
    }]} />

      <StoryTable sectionTitle='Toolbar & chrome' firstColumnHeader='State' columnHeaders={['Table']} rows={[{
      // bulk-бар (чекбокс + счётчик выбранных) рендерится только при multiRow
      variantLabel: 'full toolbar (bulk bar)',
      cells: [<div key='toolbar-full' className={styles.wideCell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} getRowId={getUserRowId} rowSelection={{
          enable: true,
          multiRow: true,
          initialState: {
            'u-1': true,
            'u-2': true
          }
        }} onRefresh={noop} onExport={noop} moreActions={[{
          content: {
            label: 'Ещё'
          },
          onClick: noop
        }]} suppressPagination outline />
              </div>]
    }, {
      // сегмент-контрол table/cards в тулбаре
      variantLabel: 'data view toggle',
      cells: [<div key='toolbar-data-view' className={styles.wideCell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} getRowId={getUserRowId} showDataView suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'suppress search',
      cells: [<div key='toolbar-no-search' className={styles.cell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} getRowId={getUserRowId} rowSelection={{
          enable: true,
          multiRow: true
        }} suppressSearch suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'suppress toolbar',
      cells: [<div key='toolbar-suppressed' className={styles.cell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} suppressToolbar suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'suppress header',
      cells: [<div key='header-suppressed' className={styles.cell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} suppressHeader suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'no outline',
      cells: [<div key='no-outline' className={styles.cell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} suppressPagination />
              </div>]
    }, {
      variantLabel: 'rows-per-page options',
      cells: [<div key='pagination-options' className={styles.cell}>
                <Table data={SAMPLE_USERS} columnDefinitions={columns} pageSize={5} pagination={{
          options: [5, 10]
        }} outline />
              </div>]
    }]} />

      <StoryTable sectionTitle='Layout type' firstColumnHeader='layoutType' columnHeaders={['table view', 'cards view']} rows={[{
      variantLabel: 'mobile',
      cells: [<div key='layout-mobile-table' className={styles.mobileCell}>
                <AdaptiveProvider layoutType={LAYOUT_TYPE.Mobile}>
                  <Table data={SMALL_DATA} columnDefinitions={columns} view={VIEW.Table} getRowId={getUserRowId} rowSelection={{
            enable: true,
            multiRow: true
          }} columnsSettings={{
            enableSettingsMenu: true
          }} sorting={{}} suppressPagination outline />
                </AdaptiveProvider>
              </div>, <div key='layout-mobile-cards' className={styles.mobileCell}>
                <AdaptiveProvider layoutType={LAYOUT_TYPE.Mobile}>
                  <Table data={SMALL_DATA} columnDefinitions={columns} view={VIEW.Cards} headlineId='name' getRowId={getUserRowId} rowSelection={{
            enable: true,
            multiRow: true
          }} columnsSettings={{
            enableSettingsMenu: true
          }} sorting={{}} suppressPagination outline />
                </AdaptiveProvider>
              </div>]
    }]} />

      <StoryTable sectionTitle='Loading & Empty states' firstColumnHeader='State' columnHeaders={['Table']} rows={[{
      variantLabel: 'loading',
      cells: [<div key='loading' className={styles.cell} data-test-id={TEST_IDS.visualMatrix.loadingSection}>
                <Table data={[]} columnDefinitions={columns} loading suppressPagination outline />
              </div>]
    }, {
      // skeleton-строки добавляются под уже загруженные данные
      variantLabel: 'infinite loading',
      cells: [<div key='infinite-loading' className={styles.cell}>
                <Table data={SMALL_DATA} columnDefinitions={columns} infiniteLoading loading outline />
              </div>]
    }, {
      variantLabel: 'no data',
      cells: [<div key='no-data' className={styles.cell}>
                <Table data={[]} columnDefinitions={columns} noDataState={EMPTY_STATES.noData} suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'no results',
      cells: [<div key='no-results' className={styles.cell}>
                <Table data={[]} columnDefinitions={columns} dataFiltered noResultsState={EMPTY_STATES.noResults} suppressPagination outline />
              </div>]
    }, {
      variantLabel: 'error',
      cells: [<div key='error' className={styles.cell}>
                <Table data={[]} columnDefinitions={columns} dataError errorDataState={EMPTY_STATES.error} suppressPagination outline />
              </div>]
    }]} />
    </div>
}`,...R.parameters?.docs?.source}}},z=[`VisualMatrix`]}))();export{R as VisualMatrix,z as __namedExportsOrder,C as default};
//# sourceMappingURL=Table.VisualMatrix.stories-DFU5bvHJ.js.map