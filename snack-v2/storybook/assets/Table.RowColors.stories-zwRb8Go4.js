import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{b as n,t as r,z as i}from"./src-Dfx9Fb3_.js";import{a,c as o,t as s}from"./fixtures-BcVZ43fb.js";import{n as c,r as l}from"./testIds-Bopt9Yyz.js";import{n as u,t as d}from"./sharedMeta-Lg2FJlFW.js";var f,p,m,h,g,_,v,y,b,x;e((()=>{r(),o(),l(),d(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Snack/Data display/Table/Table/Examples/RowColors`,id:`components-table-table-examples-rowcolors`,...u},g=a({withStatusColumn:!0}),_=[i.Red,i.Orange,i.Yellow,i.Green,i.Blue,i.Violet,i.Pink],v=new Map(s.map((e,t)=>[e.id,_[t%_.length]])),y=e=>v.get(e.id),b={tags:[`dev`,`test`],render:()=>(0,f.jsx)(n,{"data-test-id":c.table.root,data:s,columnDefinitions:g,getRowBackgroundColor:y,outline:!0}),play:async({canvasElement:e})=>{let t=m(e).getByTestId(c.table.root),n=m(t).getAllByTestId(c.component.bodyRow);p(n[0]).toHaveAttribute(`data-row-bg-appearance`,i.Red)}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <Table data-test-id={TEST_IDS.table.root} data={SAMPLE_USERS} columnDefinitions={columns} getRowBackgroundColor={getRainbowRowColor} outline />,
  play: async ({
    canvasElement
  }) => {
    const root = within(canvasElement).getByTestId(TEST_IDS.table.root);
    const rows = within(root).getAllByTestId(TEST_IDS.component.bodyRow);
    // первая строка тонирована (data-row-bg-appearance проставлен)
    expect(rows[0]).toHaveAttribute('data-row-bg-appearance', TABLE_ROW_COLOR.Red);
  }
}`,...b.parameters?.docs?.source}}},x=[`RowColors`]}))();export{b as RowColors,x as __namedExportsOrder,h as default};
//# sourceMappingURL=Table.RowColors.stories-zwRb8Go4.js.map