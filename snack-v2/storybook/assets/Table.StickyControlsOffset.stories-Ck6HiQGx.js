import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,gn as r,l as i,nt as a,t as o}from"./iframe-B2mzxEaG.js";import{R as s,V as c,b as l,t as u}from"./src-QvHikSK1.js";import{n as d,t as f}from"./TableStorySurfaceSync-CgmrN1XU.js";import{a as p,c as m,l as h}from"./fixtures-D_iM02uJ.js";import{n as g,r as _}from"./testIds-B9CglIhT.js";import{n as v,t as y}from"./styles2.module-nXmJ-1ev.js";import{n as b,t as x}from"./styles.module-s2CWiWjM.js";var S,C,w,T,E,D,O,k,A,j,M;e((()=>{a(),u(),o(),f(),m(),_(),y(),x(),S=t(),{expect:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Snack/Data display/Table/Table/Examples/StickyControlsOffset`,id:`components-table-table-examples-stickycontrolsoffset`,component:l,parameters:{layout:`fullscreen`}},E=p({withStatusColumn:!0}),D=h(40),O=20,k=56,A=48,j={tags:[`dev`,`test`],render:()=>(0,S.jsx)(r,{layoutType:n.Mobile,children:(0,S.jsx)(d,{children:(0,S.jsxs)(`div`,{className:b.pageScrollDemo,children:[(0,S.jsxs)(`div`,{className:b.mockAppHeader,style:{height:k},"data-test-id":`mock-app-header`,children:[`Mock app header (`,k,`px)`]}),(0,S.jsx)(i,{children:"`layoutPresets.mobile.stickyControls`: toolbar и pagination липнут ниже mock app header и выше mock tab bar. Прокрутите страницу — chrome таблицы не перекрывает внешний UI."}),(0,S.jsx)(`div`,{className:v.mobileCell,children:(0,S.jsx)(l,{"data-test-id":g.table.root,data:D,pageSize:O,columnDefinitions:E,layoutPresets:{mobile:{defaultView:c.Table,stickyControls:{enabled:!0,offsetTop:k,offsetBottom:A}}},sorting:{},outline:!0})}),(0,S.jsxs)(`div`,{className:b.mockTabBar,style:{height:A},"data-test-id":`mock-tab-bar`,children:[`Mock tab bar (`,A,`px)`]})]})})}),play:async({canvasElement:e})=>{let t=w(e).getByTestId(g.table.root);await C(t).toHaveAttribute(`data-sticky-controls`,`true`),await C(t).toHaveStyle({[s.stickyControlsOffsetTop]:`${k}px`,[s.stickyControlsOffsetBottom]:`${A}px`})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <AdaptiveProvider layoutType={LAYOUT_TYPE.Mobile}>
      <TableStorySurfaceSync>
        <div className={exampleStyles.pageScrollDemo}>
          <div className={exampleStyles.mockAppHeader} style={{
          height: APP_HEADER_HEIGHT
        }} data-test-id='mock-app-header'>
            Mock app header ({APP_HEADER_HEIGHT}px)
          </div>
          <DemoHint>
            \`layoutPresets.mobile.stickyControls\`: toolbar и pagination липнут ниже mock app header и выше mock tab bar.
            Прокрутите страницу — chrome таблицы не перекрывает внешний UI.
          </DemoHint>
          <div className={styles.mobileCell}>
            <Table data-test-id={TEST_IDS.table.root} data={STICKY_DEMO_USERS} pageSize={STICKY_DEMO_PAGE_SIZE} columnDefinitions={columns} layoutPresets={{
            mobile: {
              // Дефолт mobile — cards; sticky-хром демонстрируется на table-view (строки + пагинация).
              defaultView: VIEW.Table,
              stickyControls: {
                enabled: true,
                offsetTop: APP_HEADER_HEIGHT,
                offsetBottom: TAB_BAR_HEIGHT
              }
            }
          }} sorting={{}} outline />
          </div>
          <div className={exampleStyles.mockTabBar} style={{
          height: TAB_BAR_HEIGHT
        }} data-test-id='mock-tab-bar'>
            Mock tab bar ({TAB_BAR_HEIGHT}px)
          </div>
        </div>
      </TableStorySurfaceSync>
    </AdaptiveProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.table.root);
    await expect(root).toHaveAttribute('data-sticky-controls', 'true');
    await expect(root).toHaveStyle({
      [TABLE_CSS_VARS.stickyControlsOffsetTop]: \`\${APP_HEADER_HEIGHT}px\`,
      [TABLE_CSS_VARS.stickyControlsOffsetBottom]: \`\${TAB_BAR_HEIGHT}px\`
    });
  }
}`,...j.parameters?.docs?.source}}},M=[`StickyControlsOffset`]}))();export{j as StickyControlsOffset,M as __namedExportsOrder,T as default};
//# sourceMappingURL=Table.StickyControlsOffset.stories-Ck6HiQGx.js.map