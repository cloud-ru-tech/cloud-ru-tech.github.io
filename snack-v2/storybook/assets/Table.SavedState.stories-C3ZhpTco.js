import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o}from"./iframe-BLXw10_m.js";import{b as s,t as c}from"./src-x6odyJdz.js";import{a as l,c as u,t as d}from"./fixtures-mgiOYHyB.js";import{n as f,r as p,t as m}from"./testIds-B15OMEQU.js";import{n as h,t as g}from"./sharedMeta-C2PKeQ-i.js";var _,v,y,b,x,S,C;e((()=>{c(),o(),u(),p(),g(),_=t(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Data display/Table/Table/Examples/SavedState`,id:`components-table-table-examples-savedstate`,...h,parameters:{...h.parameters,controls:{disable:!0}}},x=l({withStatusColumn:!0,withResizing:!0,withColumnSettings:!0}),S={tags:[`test`,`dev`],render:()=>(0,_.jsxs)(r,{width:`wide`,children:[(0,_.jsx)(a,{children:`SavedState`}),(0,_.jsx)(i,{children:`Ширина колонок после resize, их порядок после drag и набор видимых колонок сохраняются в localStorage и переживают перезагрузку.`}),(0,_.jsx)(n,{align:`start`,children:(0,_.jsx)(s,{outline:!0,data:d,columnDefinitions:x,columnsSettings:{enableSettingsMenu:!0,enableDrag:!0},pageSize:5,savedState:{id:m,columnSettings:!0},"data-test-id":f.table.root})})]}),play:async({canvasElement:e})=>{await v(y(e).getByTestId(f.table.root)).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPanel width='wide'>
      <DemoTitle>SavedState</DemoTitle>
      <DemoHint>
        Ширина колонок после resize, их порядок после drag и набор видимых колонок сохраняются в localStorage и
        переживают перезагрузку.
      </DemoHint>
      <DemoActions align='start'>
        <Table outline data={SAMPLE_USERS} columnDefinitions={columns} columnsSettings={{
        enableSettingsMenu: true,
        enableDrag: true
      }} pageSize={5} savedState={{
        id: SAVED_STATE_ID,
        columnSettings: true
      }} data-test-id={TEST_IDS.table.root} />
      </DemoActions>
    </DemoPanel>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.table.root)).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C=[`SavedState`]}))();export{S as SavedState,C as __namedExportsOrder,b as default};
//# sourceMappingURL=Table.SavedState.stories-C3ZhpTco.js.map