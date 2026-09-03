import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,n as r,r as i,t as a}from"./testIds-BjVpKvUp.js";import{n as o,t as s}from"./styles.module-FkmQtAFp.js";import{c,d as l,h as u,l as d,m as f,v as p}from"./demoData-B8aXP6PQ.js";var m,h,g,_,v,y;e((()=>{i(),p(),s(),r(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Layout & containers/PageLayout/PageServices`,id:`uikit-product-pagelayout-pageservices`,component:n,parameters:{layout:`fullscreen`},args:{title:`vm-0c7afd`,slotAfterTitle:c,autoHeight:!0,limitContentMaxWidth:!1,actions:d,maxVisibleActionsItems:1,sidebar:{items:f,header:l,selected:`info`},children:(0,m.jsx)(u,{}),"data-test-id":a.pageServices.root,showActions:!0,showSidebar:!0,showSlotAfterTitle:!0},argTypes:{autoHeight:{control:`boolean`},limitContentMaxWidth:{control:`boolean`},actions:{table:{disable:!0}},sidebar:{table:{disable:!0}},children:{table:{disable:!0}},slotBeforeTitle:{table:{disable:!0}},slotAfterTitle:{table:{disable:!0}},showActions:{name:`[Stories]: showActions`,control:`boolean`},showSidebar:{name:`[Stories]: showSidebar`,control:`boolean`},showSlotAfterTitle:{name:`[Stories]: showSlotAfterTitle`,control:`boolean`}}},v={tags:[`dev`,`test`],render:({showActions:e,showSidebar:t,showSlotAfterTitle:r,...i})=>(0,m.jsx)(`div`,{className:o.fullPage,children:(0,m.jsx)(n,{...i,actions:e?i.actions:void 0,sidebar:t?i.sidebar:void 0,slotAfterTitle:r?i.slotAfterTitle:void 0})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(a.pageServices.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: ({
    showActions,
    showSidebar,
    showSlotAfterTitle,
    ...args
  }) => <div className={styles.fullPage}>
      <PageServices {...args} actions={showActions ? args.actions : undefined} sidebar={showSidebar ? args.sidebar : undefined} slotAfterTitle={showSlotAfterTitle ? args.slotAfterTitle : undefined} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.pageServices.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=PageServices.Playground.stories-BTZ7ieAb.js.map