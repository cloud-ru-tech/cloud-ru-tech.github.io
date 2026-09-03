import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bl-uTAel.js";import{t as c,x as l}from"./src-DK-87QZX.js";import{n as u,r as d,t as f,u as p}from"./testIds-BXYTK0UR.js";import{n as m,t as h}from"./styles.module-FkmQtAFp.js";import{f as g,p as _,u as v,v as y}from"./demoData-DXltbk2p.js";var b,x,S,C,w,T,E,D,O,k;e((()=>{c(),d(),o(),y(),h(),u(),b=t(),{expect:x,fn:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Uikit Product/Layout & containers/PageLayout/PageSidebar/Tests/Interaction`,id:`uikit-product-pagelayout-pagesidebar-tests-interaction`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}}},D=S(),O={tags:[`test`,`dev`],render:()=>(0,b.jsx)(s,{children:(0,b.jsxs)(r,{children:[(0,b.jsx)(a,{children:`InteractionTest`}),(0,b.jsx)(i,{children:`Выбор пункта сайдбара вызывает onSelect с его id.`}),(0,b.jsx)(n,{align:`center`,children:(0,b.jsx)(`div`,{className:m.sidebarFrame,children:(0,b.jsx)(p,{items:_,footerItems:v,header:g,selected:`overview`,onSelect:D,defaultOpen:!0,"data-test-id":f.pageSidebar.root})})})]})}),play:async({canvasElement:e,step:t})=>{D.mockClear();let n=T(e),r=n.getByTestId(f.pageSidebar.root);await t(`select item triggers onSelect`,async()=>{let e=T(r).getByTestId(`${l.baseItem}_overview`);await C.click(e),await w(()=>x(D).toHaveBeenCalledWith(`overview`))}),await t(`root remains visible`,async()=>{await x(n.getByTestId(f.pageSidebar.root)).toBeVisible()})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Выбор пункта сайдбара вызывает onSelect с его id.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.sidebarFrame}>
            <PageSidebar items={SIDEBAR_ITEMS} footerItems={SIDEBAR_FOOTER_ITEMS} header={SIDEBAR_HEADER_TITLE} selected='overview' onSelect={onSelect} defaultOpen data-test-id={TEST_IDS.pageSidebar.root} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    onSelect.mockClear();
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.pageSidebar.root);
    await step('select item triggers onSelect', async () => {
      const item = within(root).getByTestId(\`\${LIST_TEST_IDS.baseItem}_overview\`);
      await userEvent.click(item);
      await waitFor(() => expect(onSelect).toHaveBeenCalledWith('overview'));
    });
    await step('root remains visible', async () => {
      await expect(canvas.getByTestId(TEST_IDS.pageSidebar.root)).toBeVisible();
    });
  }
}`,...O.parameters?.docs?.source}}},k=[`InteractionTest`]}))();export{O as InteractionTest,k as __namedExportsOrder,E as default};
//# sourceMappingURL=PageSidebar.InteractionTest.stories-BDxO8UcW.js.map