import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{n,r,t as i,u as a}from"./testIds-BQXg446j.js";import{n as o,t as s}from"./styles.module-FkmQtAFp.js";import{f as c,p as l,u,v as d}from"./demoData-d1aAWLdf.js";var f,p,m,h,g,_;e((()=>{r(),d(),s(),n(),f=t(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Uikit Product/Layout/PageLayout/PageSidebar`,id:`uikit-product-pagelayout-pagesidebar`,component:a,parameters:{layout:`fullscreen`},args:{items:l,footerItems:u,header:c,selected:`overview`,hasSearch:!0,defaultOpen:!0,"data-test-id":i.pageSidebar.root},argTypes:{hasSearch:{control:`boolean`},defaultOpen:{control:`boolean`},items:{table:{disable:!0}},footerItems:{table:{disable:!0}},header:{table:{disable:!0}},collapse:{table:{disable:!0}},documentation:{table:{disable:!0}},open:{table:{disable:!0}}}},g={tags:[`dev`,`test`],render:e=>(0,f.jsx)(`div`,{className:o.sidebarHost,children:(0,f.jsx)(a,{...e})}),play:async({canvasElement:e})=>{await p(m(e).getByTestId(i.pageSidebar.root)).toBeVisible()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <div className={styles.sidebarHost}>
      <PageSidebar {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.pageSidebar.root)).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`]}))();export{g as Playground,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=PageSidebar.Playground.stories-cSU7u8vm.js.map