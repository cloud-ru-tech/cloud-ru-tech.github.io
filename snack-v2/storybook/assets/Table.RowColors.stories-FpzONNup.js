import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{V as n,b as r,t as i}from"./src-deLD1C5g.js";import{a,c as o,t as s}from"./fixtures-B54ugXQS.js";import{n as c,r as l}from"./testIds-HQihI3DO.js";import{n as u,t as d}from"./sharedMeta-RAg_jDnm.js";var f,p,m,h,g,_,v,y,b,x;e((()=>{i(),o(),l(),d(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Snack/Data display/Table/Table/Examples/RowColors`,id:`components-table-table-examples-rowcolors`,...u},g=a({withStatusColumn:!0}),_=[n.Red,n.Orange,n.Yellow,n.Green,n.Blue,n.Violet,n.Pink],v=new Map(s.map((e,t)=>[e.id,_[t%_.length]])),y=e=>v.get(e.id),b={tags:[`dev`,`test`],render:()=>(0,f.jsx)(r,{"data-test-id":c.table.root,data:s,columnDefinitions:g,getRowBackgroundColor:y,outline:!0}),play:async({canvasElement:e})=>{let t=m(e).getByTestId(c.table.root),r=m(t).getAllByTestId(c.component.bodyRow);p(r[0]).toHaveAttribute(`data-row-bg-appearance`,n.Red)}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=Table.RowColors.stories-FpzONNup.js.map