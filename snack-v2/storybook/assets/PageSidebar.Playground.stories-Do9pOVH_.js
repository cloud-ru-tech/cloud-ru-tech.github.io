import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{n,r,t as i,u as a}from"./testIds-Ms_qsIv3.js";import{n as o,t as s}from"./styles.module-C7t8kZkR.js";import{f as c,p as l,u,v as d}from"./demoData-gdn17dSv.js";import{n as f,t as p}from"./sidebarGutter--9uy9WGg.js";var m,h,g,_,v,y;e((()=>{r(),d(),p(),s(),n(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Uikit Product/Layout & containers/PageLayout/PageSidebar`,id:`uikit-product-pagelayout-pagesidebar`,component:a,parameters:{layout:`fullscreen`},args:{items:l,footerItems:u,header:c,selected:`overview`,hasSearch:!0,defaultOpen:!0,"data-test-id":i.pageSidebar.root},argTypes:{hasSearch:{control:`boolean`},defaultOpen:{control:`boolean`},items:{table:{disable:!0}},footerItems:{table:{disable:!0}},header:{table:{disable:!0}},collapse:{table:{disable:!0}},documentation:{table:{disable:!0}},open:{table:{disable:!0}}}},v={tags:[`dev`,`test`],render:e=>(0,m.jsx)(`div`,{className:f?`${o.sidebarHost} ${o.sidebarGutter}`:o.sidebarHost,children:(0,m.jsx)(a,{...e})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(i.pageSidebar.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <div className={withSidebarGutter ? \`\${styles.sidebarHost} \${styles.sidebarGutter}\` : styles.sidebarHost}>
      <PageSidebar {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.pageSidebar.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=PageSidebar.Playground.stories-Do9pOVH_.js.map