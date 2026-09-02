import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{M as i,b as a,t as o}from"./src-Dxa8on6G.js";import{c as s,n as c,s as l}from"./fixtures-DfBWGfRz.js";import{n as u,r as d}from"./testIds-BH8EQRKz.js";import{n as f,t as p}from"./sharedMeta-phGg8WMo.js";function m(){let[e,t]=(0,g.useState)({"team-compute":!0,"t-compute-1":!0,"t-compute-2":!0});return(0,_.jsx)(a,{"data-test-id":u.table.root,data:c,columnDefinitions:y,getRowId:e=>e.id,expanding:{getSubRows:l,expandingColumnDefinition:{accessorKey:`name`,header:`Подразделение`,showToggle:!0},initialState:{"org-cloud":!0,"org-data":!0,"team-analytics":!0}},rowSelection:{enable:!0,multiRow:!0,state:e,onChange:t},suppressPagination:!0,outline:!0})}function h(){let[e,t]=(0,g.useState)({"t-analytics-1":!0});return(0,_.jsx)(a,{"data-test-id":u.table.root,data:c,columnDefinitions:y,getRowId:e=>e.id,expanding:{getSubRows:l,expandingColumnDefinition:{accessorKey:`name`,header:`Подразделение`,showToggle:!0},initialState:{"org-cloud":!0,"org-data":!0,"team-analytics":!0}},rowSelection:{enable:!0,multiRow:!1,state:e,onChange:t},suppressPagination:!0,outline:!0})}var g,_,v,y,b,x,S,C,w,T,E;t((()=>{o(),g=e(n(),1),s(),d(),p(),_=r(),v={title:`Snack/Data display/Table/Table/Examples/Tree`,id:`components-table-table-examples-tree`,...f,parameters:{...f.parameters,design:[{type:`figma`,url:`https://www.figma.com/design/aNPU3MHwRJiEwbk5F82zux/Snack-Ui-Kit-variables?node-id=22907-28616`}]}},y=[{accessorKey:`role`,header:`Тип`,size:160},{accessorKey:`email`,header:`Email`}],b={tags:[`dev`,`test`],render:()=>(0,_.jsx)(a,{"data-test-id":u.table.root,data:c,columnDefinitions:y,getRowId:e=>e.id,expanding:{getSubRows:l,expandingColumnDefinition:{accessorKey:`name`,header:`Подразделение`},initialState:{"org-cloud":!0}},suppressPagination:!0,outline:!0})},x={tags:[`dev`,`test`],render:()=>(0,_.jsx)(a,{"data-test-id":u.table.root,data:c,columnDefinitions:y,getRowId:e=>e.id,expanding:{getSubRows:l,expandingColumnDefinition:{accessorKey:`name`,header:`Подразделение`,showLines:!1},initialState:{"org-cloud":!0}},suppressPagination:!0,outline:!0})},S={tags:[`dev`,`test`],render:()=>(0,_.jsx)(m,{})},C={tags:[`dev`,`test`],render:()=>(0,_.jsx)(h,{})},w={tags:[`dev`,`test`],render:()=>(0,_.jsx)(a,{"data-test-id":u.table.root,data:c,columnDefinitions:y,getRowId:e=>e.id,expanding:{getSubRows:l,expandingColumnDefinition:{accessorKey:`name`,header:`Подразделение`,showToggle:!0},initialState:{"org-cloud":!0,"org-data":!0,"team-analytics":!0}},rowSelection:{enable:e=>e.original.status!==`blocked`,multiRow:!0,appearance:i.Disabled},suppressPagination:!0,outline:!0})},T={tags:[`dev`,`test`],render:()=>(0,_.jsx)(a,{"data-test-id":u.table.root,data:c,columnDefinitions:[{accessorKey:`role`,header:`Тип`,size:160},{accessorKey:`email`,header:`Описание`,cell:e=>{let t=e.row.original;return(0,_.jsxs)(`span`,{children:[t.email,!t.subRows&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`br`,{}),(0,_.jsx)(`small`,{children:t.status})]})]})}}],getRowId:e=>e.id,expanding:{getSubRows:l,expandingColumnDefinition:{accessorKey:`name`,header:`Подразделение`},initialState:{"org-cloud":!0,"org-data":!0,"team-analytics":!0}},rowAutoHeight:!0,suppressPagination:!0,outline:!0})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <Table data-test-id={TEST_IDS.table.root} data={TREE_USERS} columnDefinitions={treeColumns} getRowId={user => user.id} expanding={{
    getSubRows: getUserSubRows,
    expandingColumnDefinition: {
      accessorKey: 'name',
      header: 'Подразделение'
    },
    initialState: {
      'org-cloud': true
    }
  }} suppressPagination outline />
}`,...b.parameters?.docs?.source},description:{story:`Базовое дерево без выбора`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <Table data-test-id={TEST_IDS.table.root} data={TREE_USERS} columnDefinitions={treeColumns} getRowId={user => user.id} expanding={{
    getSubRows: getUserSubRows,
    expandingColumnDefinition: {
      accessorKey: 'name',
      header: 'Подразделение',
      showLines: false
    },
    initialState: {
      'org-cloud': true
    }
  }} suppressPagination outline />
}`,...x.parameters?.docs?.source},description:{story:`Дерево без линий-направляющих вложенности`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <TreeWithMultiSelectionRender />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <TreeWithSingleSelectionRender />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <Table data-test-id={TEST_IDS.table.root} data={TREE_USERS} columnDefinitions={treeColumns} getRowId={user => user.id} expanding={{
    getSubRows: getUserSubRows,
    expandingColumnDefinition: {
      accessorKey: 'name',
      header: 'Подразделение',
      showToggle: true
    },
    initialState: {
      'org-cloud': true,
      'org-data': true,
      'team-analytics': true
    }
  }} rowSelection={{
    enable: row => row.original.status !== 'blocked',
    multiRow: true,
    appearance: RowAppearance.Disabled
  }} suppressPagination outline />
}`,...w.parameters?.docs?.source},description:{story:`Дерево с частично отключёнными строками (disabled leaf-узлы)`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <Table data-test-id={TEST_IDS.table.root} data={TREE_USERS} columnDefinitions={[{
    accessorKey: 'role',
    header: 'Тип',
    size: 160
  }, {
    accessorKey: 'email',
    header: 'Описание',
    // size: 200,
    cell: ctx => {
      const user = ctx.row.original;
      return <span>
                {user.email}
                {!user.subRows && <>
                    <br />
                    <small>{user.status}</small>
                  </>}
              </span>;
    }
  }]} getRowId={user => user.id} expanding={{
    getSubRows: getUserSubRows,
    expandingColumnDefinition: {
      accessorKey: 'name',
      header: 'Подразделение'
    },
    initialState: {
      'org-cloud': true,
      'org-data': true,
      'team-analytics': true
    }
  }} rowAutoHeight suppressPagination outline />
}`,...T.parameters?.docs?.source},description:{story:`Дерево с автоматической высотой строк (rowAutoHeight)`,...T.parameters?.docs?.description}}},E=[`Tree`,`TreeWithoutLines`,`TreeWithMultiSelection`,`TreeWithSingleSelection`,`TreeWithDisabledRows`,`TreeWithRowAutoHeight`]}))();export{b as Tree,w as TreeWithDisabledRows,S as TreeWithMultiSelection,T as TreeWithRowAutoHeight,C as TreeWithSingleSelection,x as TreeWithoutLines,E as __namedExportsOrder,v as default};
//# sourceMappingURL=Table.Tree.stories-7HEV-5rn.js.map