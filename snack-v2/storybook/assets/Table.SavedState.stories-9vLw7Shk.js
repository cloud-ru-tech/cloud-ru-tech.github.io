import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,g as r,p as i,t as a,u as o}from"./iframe-C3AStgPu.js";import{b as s,t as c}from"./src-CQ7_GidE.js";import{a as l,c as u,t as d}from"./fixtures-DfJipFa_.js";import{n as f,r as p,t as m}from"./testIds-zCpygTcy.js";import{n as h,t as g}from"./sharedMeta-DghPOYwe.js";var _,v,y,b,x,S,C,w;e((()=>{c(),a(),u(),p(),g(),_=t(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Data display/Table/Table/Examples/SavedState`,id:`components-table-table-examples-savedstate`,...h,parameters:{...h.parameters,controls:{disable:!0}}},x=l({withStatusColumn:!0,withResizing:!0,withColumnSettings:!0}),S={tags:[`test`,`dev`],render:()=>(0,_.jsxs)(i,{width:`wide`,children:[(0,_.jsx)(r,{children:`SavedState`}),(0,_.jsx)(n,{children:`Ширина колонок после resize, их порядок после drag и набор видимых колонок сохраняются в localStorage и переживают перезагрузку.`}),(0,_.jsx)(o,{align:`start`,children:(0,_.jsx)(s,{outline:!0,data:d,columnDefinitions:x,columnsSettings:{enableSettingsMenu:!0,enableDrag:!0},pageSize:5,savedState:{id:m,columnSettings:!0},"data-test-id":f.table.root})})]}),play:async({canvasElement:e})=>{await v(y(e).getByTestId(f.table.root)).toBeVisible()}},C={tags:[`test`,`dev`],args:{suppressToolbar:!1},render:({suppressToolbar:e})=>(0,_.jsx)(s,{data:d,columnDefinitions:x,suppressToolbar:e,savedState:{id:`table-session-state`,filterQueryKey:`tableState`,storages:[`sessionStorage`],resize:!1},"data-test-id":f.table.root})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    suppressToolbar: false
  },
  render: ({
    suppressToolbar
  }) => <Table data={SAMPLE_USERS} columnDefinitions={columns} suppressToolbar={suppressToolbar} savedState={{
    id: 'table-session-state',
    filterQueryKey: 'tableState',
    storages: ['sessionStorage'],
    resize: false
  }} data-test-id={TEST_IDS.table.root} />
}`,...C.parameters?.docs?.source}}},w=[`SavedState`,`SessionState`]}))();export{S as SavedState,C as SessionState,w as __namedExportsOrder,b as default};
//# sourceMappingURL=Table.SavedState.stories-9vLw7Shk.js.map