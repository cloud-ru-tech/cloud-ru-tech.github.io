import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,l as r,m as i,t as a,u as o}from"./iframe-jFn_-H4h.js";import{n as s,t as c}from"./src-CPlq7Oo-.js";import{n as l,t as u}from"./styles.module-xx7oZnK-.js";import{n as d,t as f}from"./testIds-BW9nVnkf.js";var p,m,h,g,_,v;e((()=>{c(),a(),u(),d(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Navigation/Tabs/Tabs/Tests/DisabledTab`,id:`components-tabs-tabs-tests-disabledtab`,component:s,parameters:{layout:`fullscreen`}},_={tags:[`test`,`dev`],render:()=>(0,p.jsx)(o,{children:(0,p.jsxs)(n,{width:`wide`,children:[(0,p.jsx)(i,{children:`DisabledTab`}),(0,p.jsx)(r,{children:`Один из табов отключён через prop disabled — выставлен aria-disabled.`}),(0,p.jsx)(`div`,{className:l.wide,children:(0,p.jsx)(s,{defaultValue:`overview`,children:(0,p.jsxs)(s.TabBar,{"data-test-id":f.tabBar.root,children:[(0,p.jsx)(s.Tab,{"data-test-id":f.tab.overview,value:`overview`,label:`Overview`}),(0,p.jsx)(s.Tab,{"data-test-id":f.tab.settings,value:`settings`,label:`Settings`}),(0,p.jsx)(s.Tab,{"data-test-id":f.tab.billing,value:`billing`,label:`Billing`,disabled:!0})]})})})]})}),play:async({canvasElement:e})=>{await m(h(e).getByTestId(f.tab.billing)).toHaveAttribute(`aria-disabled`,`true`)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>DisabledTab</DemoTitle>
        <DemoHint>{'Один из табов отключён через prop disabled — выставлен aria-disabled.'}</DemoHint>
        <div className={styles.wide}>
          <Tabs defaultValue='overview'>
            <Tabs.TabBar data-test-id={TEST_IDS.tabBar.root}>
              <Tabs.Tab data-test-id={TEST_IDS.tab.overview} value='overview' label='Overview' />
              <Tabs.Tab data-test-id={TEST_IDS.tab.settings} value='settings' label='Settings' />
              <Tabs.Tab data-test-id={TEST_IDS.tab.billing} value='billing' label='Billing' disabled />
            </Tabs.TabBar>
          </Tabs>
        </div>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.tab.billing)).toHaveAttribute('aria-disabled', 'true');
  }
}`,..._.parameters?.docs?.source}}},v=[`DisabledTab`]}))();export{_ as DisabledTab,v as __namedExportsOrder,g as default};
//# sourceMappingURL=Tabs.DisabledTab.stories-BtnTeHWT.js.map