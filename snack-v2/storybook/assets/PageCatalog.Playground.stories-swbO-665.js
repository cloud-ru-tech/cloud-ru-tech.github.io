import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{f as n,n as r,r as i,t as a}from"./testIds-BnO-vAeE.js";import{n as o,t as s}from"./styles.module-FkmQtAFp.js";import{a as c,t as l,v as u}from"./demoData-DGgQ2JNx.js";var d,f,p,m,h,g;e((()=>{i(),u(),s(),r(),d=t(),{expect:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Uikit Product/Layout/PageLayout/PageCatalog`,id:`uikit-product-pagelayout-pagecatalog`,component:n,parameters:{layout:`fullscreen`},args:{title:`Каталог сервисов`,actions:c,maxVisibleActionsItems:1,children:(0,d.jsx)(l,{}),"data-test-id":a.pageCatalog.root,showActions:!0},argTypes:{actions:{table:{disable:!0}},children:{table:{disable:!0}},showActions:{name:`[Stories]: showActions`,control:`boolean`}}},h={tags:[`dev`,`test`],render:({showActions:e,...t})=>(0,d.jsx)(`div`,{className:o.fullPage,children:(0,d.jsx)(n,{...t,actions:e?t.actions:void 0})}),play:async({canvasElement:e})=>{await f(p(e).getByTestId(a.pageCatalog.root)).toBeVisible()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: ({
    showActions,
    ...args
  }) => <div className={styles.fullPage}>
      <PageCatalog {...args} actions={showActions ? args.actions : undefined} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.pageCatalog.root)).toBeVisible();
  }
}`,...h.parameters?.docs?.source}}},g=[`Playground`]}))();export{h as Playground,g as __namedExportsOrder,m as default};
//# sourceMappingURL=PageCatalog.Playground.stories-swbO-665.js.map