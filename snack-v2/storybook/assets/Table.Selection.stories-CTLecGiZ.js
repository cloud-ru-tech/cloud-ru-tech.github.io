import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{t as i,x as a}from"./system-BZBdoYww.js";import{t as o,u as s}from"./src-B1qWSCgc.js";import{M as c,t as l,v as u}from"./src-B_ukPWz7.js";import{a as d,c as f,t as p}from"./fixtures-DN1XppDJ.js";import{n as m,r as h}from"./testIds--M1w9g6s.js";import{n as g,t as _}from"./sharedMeta-eGIQTZlI.js";function v(){let[e,t]=(0,b.useState)({"u-1":!0,"u-3":!0});return(0,x.jsx)(u,{"data-test-id":m.table.root,data:p,columnDefinitions:k,getRowId:e=>e.id,rowSelection:{enable:!0,multiRow:!0,state:e,onChange:t},bulkActions:[{label:`Удалить выбранные`,icon:a,onClick:(e,n)=>{t({}),n()}}],outline:!0})}function y(){let[e,t]=(0,b.useState)({});return(0,x.jsx)(u,{"data-test-id":m.table.root,data:p,columnDefinitions:k,getRowId:e=>e.id,pageSize:5,pagination:{options:[5,10,20]},toolbarCheckBoxMode:c.AllRows,rowSelection:{enable:!0,multiRow:!0,state:e,onChange:t},bulkActions:[{label:`Удалить выбранные`,icon:a,onClick:(e,n)=>{t({}),n()}}],outline:!0})}var b,x,S,C,w,T,E,D,O,k,A,j,M;t((()=>{i(),o(),l(),b=e(n(),1),f(),h(),_(),x=r(),{expect:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E=m.component,D=5,O={title:`Snack/Data display/Table/Table/Examples/Selection`,id:`components-table-table-examples-selection`,...g},k=d({withStatusColumn:!0}),A={tags:[`dev`,`test`],render:()=>(0,x.jsx)(v,{})},j={tags:[`dev`,`test`],render:()=>(0,x.jsx)(y,{}),play:async({canvasElement:e,step:t})=>{let n=T(e).getByTestId(m.table.root);await t(`select all: master checkbox selects rows on every page`,async()=>{await C.click(T(n).getByTestId(E.selectAll)),await w(()=>{let e=T(n).getAllByTestId(E.bodyRow).filter(e=>e.hasAttribute(`data-selected`));S(e).toHaveLength(D)}),await C.click(T(n).getByTestId(s(2))),await w(()=>{let e=T(n).getAllByTestId(E.bodyRow).filter(e=>e.hasAttribute(`data-selected`));S(e).toHaveLength(D),S(e[0]).toHaveAttribute(`data-row-id`,p[D].id)})})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <ControlledSelection />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <AllRowsSelection />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.table.root);
    await step('select all: master checkbox selects rows on every page', async () => {
      await userEvent.click(within(root).getByTestId(COMPONENT_TEST_IDS.selectAll));
      await waitFor(() => {
        const selectedOnPage1 = within(root).getAllByTestId(COMPONENT_TEST_IDS.bodyRow).filter(row => row.hasAttribute('data-selected'));
        expect(selectedOnPage1).toHaveLength(ALL_ROWS_PAGE_SIZE);
      });
      await userEvent.click(within(root).getByTestId(getPageNumberTestId(2)));
      await waitFor(() => {
        const selectedOnPage2 = within(root).getAllByTestId(COMPONENT_TEST_IDS.bodyRow).filter(row => row.hasAttribute('data-selected'));
        expect(selectedOnPage2).toHaveLength(ALL_ROWS_PAGE_SIZE);
        expect(selectedOnPage2[0]).toHaveAttribute('data-row-id', SAMPLE_USERS[ALL_ROWS_PAGE_SIZE].id);
      });
    });
  }
}`,...j.parameters?.docs?.source}}},M=[`Selection`,`SelectionAllRows`]}))();export{A as Selection,j as SelectionAllRows,M as __namedExportsOrder,O as default};
//# sourceMappingURL=Table.Selection.stories-CTLecGiZ.js.map