import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,gn as r,l as i,nt as a,t as o}from"./iframe-CSZ3Qkp5.js";import{b as s,t as c}from"./src-D4dK58q7.js";import{n as l,t as u}from"./TableStorySurfaceSync-Bp86YJGj.js";import{a as d,c as f,t as p}from"./fixtures-xDMBbSD4.js";import{n as m,r as h}from"./testIds-CrsErGnO.js";import{n as g,t as _}from"./styles.module-nXmJ-1ev.js";import{n as v,t as y}from"./styles.module-s2CWiWjM.js";var b,x,S,C,w,T,E;e((()=>{a(),c(),o(),u(),f(),h(),_(),y(),b=t(),{expect:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Snack/Data display/Table/Table/Examples/MobileLayout`,id:`components-table-table-examples-mobilelayout`,component:s,parameters:{layout:`fullscreen`}},w=d({withStatusColumn:!0}),T={tags:[`dev`,`test`],render:()=>(0,b.jsx)(r,{layoutType:n.Mobile,children:(0,b.jsxs)(l,{children:[(0,b.jsx)(i,{children:'`layoutType="mobile"` (из `AdaptiveProvider`) + `defaultView="cards"` — вертикальный список карточек; сортировка и настройки колонок — иконки в строке тулбара (BottomSheet). Переключите на table-вид сегментом в тулбаре — появится сетка со строками. По умолчанию `stickyControls=true`: тулбар, header (в table-view) и пагинация — sticky при скролле страницы; контент растёт по высоте. `stickyControls=false` — сплошной поток без sticky.'}),(0,b.jsx)(`div`,{className:v.pageScrollDemo,children:(0,b.jsx)(`div`,{className:g.mobileCell,children:(0,b.jsx)(s,{"data-test-id":m.table.root,data:p,columnDefinitions:w,showDataView:!0,headlineId:`name`,rowSelection:{enable:!0,multiRow:!0},columnsSettings:{enableSettingsMenu:!0},sorting:{},outline:!0})})})]})}),play:async({canvasElement:e})=>{let t=S(e).getByTestId(m.table.root);await x(t).toHaveAttribute(`data-layout-type`,`mobile`),await x(t).toHaveAttribute(`data-sticky-controls`,`true`),await x(t).toHaveAttribute(`data-view`,`cards`),await x(S(t).getAllByTestId(m.component.card)).toHaveLength(10),await x(S(t).queryByTestId(m.component.headerRow)).toBeNull()}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <AdaptiveProvider layoutType={LAYOUT_TYPE.Mobile}>
      <TableStorySurfaceSync>
        <DemoHint>
          \`layoutType=&quot;mobile&quot;\` (из \`AdaptiveProvider\`) + \`defaultView=&quot;cards&quot;\` — вертикальный
          список карточек; сортировка и настройки колонок — иконки в строке тулбара (BottomSheet). Переключите на
          table-вид сегментом в тулбаре — появится сетка со строками. По умолчанию \`stickyControls=true\`: тулбар, header
          (в table-view) и пагинация — sticky при скролле страницы; контент растёт по высоте. \`stickyControls=false\` —
          сплошной поток без sticky.
        </DemoHint>
        <div className={exampleStyles.pageScrollDemo}>
          <div className={styles.mobileCell}>
            <Table data-test-id={TEST_IDS.table.root} data={SAMPLE_USERS} columnDefinitions={columns} showDataView headlineId='name' rowSelection={{
            enable: true,
            multiRow: true
          }} columnsSettings={{
            enableSettingsMenu: true
          }} sorting={{}} outline />
          </div>
        </div>
      </TableStorySurfaceSync>
    </AdaptiveProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.table.root);
    await expect(root).toHaveAttribute('data-layout-type', 'mobile');
    await expect(root).toHaveAttribute('data-sticky-controls', 'true');
    await expect(root).toHaveAttribute('data-view', 'cards');
    await expect(within(root).getAllByTestId(TEST_IDS.component.card)).toHaveLength(DEFAULT_PAGE_SIZE);
    await expect(within(root).queryByTestId(TEST_IDS.component.headerRow)).toBeNull();
  }
}`,...T.parameters?.docs?.source}}},E=[`MobileLayout`]}))();export{T as MobileLayout,E as __namedExportsOrder,C as default};
//# sourceMappingURL=Table.MobileLayout.stories-C1CWVkH3.js.map