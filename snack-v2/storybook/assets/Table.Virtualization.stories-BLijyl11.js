import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{b as n,t as r}from"./src-D4dK58q7.js";import{a as i,c as a,l as o}from"./fixtures-xDMBbSD4.js";import{n as s,r as c}from"./testIds-CrsErGnO.js";import{n as l,t as u}from"./sharedMeta-CUB3iUEf.js";import{n as d,t as f}from"./styles.module-s2CWiWjM.js";function p(){let e=i({withStatusColumn:!0});return(0,g.jsx)(`div`,{className:d.scrollArea,children:(0,g.jsx)(n,{"data-test-id":s.table.root,data:b,columnDefinitions:e,enableRowVirtualization:!0,suppressPagination:!0,pageSize:b.length,outline:!0})})}function m(){return(0,g.jsx)(`div`,{className:d.scrollArea,children:(0,g.jsx)(n,{"data-test-id":s.table.root,data:b.slice(0,20),columnDefinitions:x,enableColumnVirtualization:!0,suppressPagination:!0,pageSize:20,outline:!0})})}function h(){return(0,g.jsx)(`div`,{className:d.scrollArea,children:(0,g.jsx)(n,{"data-test-id":s.table.root,data:b,columnDefinitions:x,enableRowVirtualization:!0,enableColumnVirtualization:!0,suppressPagination:!0,pageSize:b.length,outline:!0})})}var g,_,v,y,b,x,S,C,w,T;e((()=>{r(),a(),c(),u(),f(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Snack/Data display/Table/Table/Examples/Virtualization`,id:`components-table-table-examples-virtualization`,...l},b=o(500),x=i({wide:!0,withStatusColumn:!0,withDates:!0}),S={tags:[`dev`,`test`],render:()=>(0,g.jsx)(p,{}),play:async({canvasElement:e})=>{let t=v(e).getByTestId(s.table.root);await _(t).toBeVisible();let n=v(t).getAllByTestId(s.component.bodyRow);_(n.length).toBeGreaterThan(0),_(n.length).toBeLessThan(500)}},C={tags:[`dev`,`test`],render:()=>(0,g.jsx)(m,{}),play:async({canvasElement:e})=>{let t=v(e).getByTestId(s.table.root);await _(t).toBeVisible()}},w={tags:[`dev`,`test`],render:()=>(0,g.jsx)(h,{}),play:async({canvasElement:e})=>{let t=v(e).getByTestId(s.table.root);await _(t).toBeVisible();let n=v(t).getAllByTestId(s.component.bodyRow);_(n.length).toBeGreaterThan(0),_(n.length).toBeLessThan(500)}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <RowVirtualizationTable />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.table.root);
    await expect(root).toBeVisible();
    // В DOM должно быть значительно меньше строк, чем всего 500
    const renderedRows = within(root).getAllByTestId(TEST_IDS.component.bodyRow);
    expect(renderedRows.length).toBeGreaterThan(0);
    expect(renderedRows.length).toBeLessThan(500);
  }
}`,...S.parameters?.docs?.source},description:{story:`Таблица из 500 строк с виртуализацией по вертикали.
В DOM одновременно присутствует только «окно» видимых строк (overscan=10);
остальные монтируются при прокрутке.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <ColumnVirtualizationTable />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.table.root);
    await expect(root).toBeVisible();
  }
}`,...C.parameters?.docs?.source},description:{story:`Таблица с ~20 колонками и виртуализацией по горизонтали.
В DOM одновременно присутствует только «окно» видимых колонок (overscan=3);
остальные монтируются при горизонтальной прокрутке.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <FullVirtualizationTable />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.table.root);
    await expect(root).toBeVisible();
    const renderedRows = within(root).getAllByTestId(TEST_IDS.component.bodyRow);
    expect(renderedRows.length).toBeGreaterThan(0);
    expect(renderedRows.length).toBeLessThan(500);
  }
}`,...w.parameters?.docs?.source},description:{story:`Комбинация виртуализации строк и колонок: 500 строк × ~20 колонок.
DOM содержит только «окно» видимых строк и колонок одновременно.`,...w.parameters?.docs?.description}}},T=[`RowVirtualization`,`ColumnVirtualization`,`FullVirtualization`]}))();export{C as ColumnVirtualization,w as FullVirtualization,S as RowVirtualization,T as __namedExportsOrder,y as default};
//# sourceMappingURL=Table.Virtualization.stories-BLijyl11.js.map