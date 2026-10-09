import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{ft as n,ot as r}from"./iframe-9PX31bxi.js";import{i,n as a,r as o,t as s}from"./testIds-K_bmKRmh.js";import{n as c,t as l}from"./styles.module-C7t8kZkR.js";import{c as u,d,h as f,l as p,m,v as h}from"./demoData-CXoVllmU.js";import{n as g,t as _}from"./sidebarGutter--9uy9WGg.js";var v,y,b,x,S,C;e((()=>{r(),o(),h(),_(),l(),a(),v=t(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Uikit Product/Layout & containers/PageLayout/PageServices`,id:`uikit-product-pagelayout-pageservices`,component:i,parameters:{layout:`fullscreen`},args:{title:`vm-0c7afd`,slotAfterTitle:u,autoHeight:!0,limitContentMaxWidth:!1,actions:p,maxVisibleActionsItems:1,sidebar:{items:m,header:d,selected:`info`},children:(0,v.jsx)(f,{}),"data-test-id":s.pageServices.root,showActions:!0,showSidebar:!0,showSlotAfterTitle:!0},argTypes:{autoHeight:{control:`boolean`},limitContentMaxWidth:{control:`boolean`},actions:{table:{disable:!0}},sidebar:{table:{disable:!0}},children:{table:{disable:!0}},slotBeforeTitle:{table:{disable:!0}},slotAfterTitle:{table:{disable:!0}},showActions:{name:`[Stories]: showActions`,control:`boolean`},showSidebar:{name:`[Stories]: showSidebar`,control:`boolean`},showSlotAfterTitle:{name:`[Stories]: showSlotAfterTitle`,control:`boolean`}}},S={tags:[`dev`,`test`],render:({showActions:e,showSidebar:t,showSlotAfterTitle:r,...a},{globals:o})=>(0,v.jsx)(`div`,{className:g&&!n(o.layoutType)?`${c.fullPage} ${c.sidebarGutter}`:c.fullPage,children:(0,v.jsx)(i,{...a,actions:e?a.actions:void 0,sidebar:t?a.sidebar:void 0,slotAfterTitle:r?a.slotAfterTitle:void 0})}),play:async({canvasElement:e})=>{await y(b(e).getByTestId(s.pageServices.root)).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: ({
    showActions,
    showSidebar,
    showSlotAfterTitle,
    ...args
  }, {
    globals
  }) => <div className={withSidebarGutter && !isMobileLayout(globals.layoutType as LayoutType) ? \`\${styles.fullPage} \${styles.sidebarGutter}\` : styles.fullPage}>
      <PageServices {...args} actions={showActions ? args.actions : undefined} sidebar={showSidebar ? args.sidebar : undefined} slotAfterTitle={showSlotAfterTitle ? args.slotAfterTitle : undefined} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.pageServices.root)).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,x as default};
//# sourceMappingURL=PageServices.Playground.stories-DON6asXf.js.map