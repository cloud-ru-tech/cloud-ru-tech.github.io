import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-XppXgSyX.js";import{S as c,t as l}from"./src-DX3zvTpd.js";import{c as u,m as d,n as f,r as p,t as m}from"./testIds-CWkqsr88.js";import{n as h,t as g}from"./styles.module-FkmQtAFp.js";import{_,g as v,v as y}from"./demoData-DafcHm4V.js";var b,x,S,C,w,T,E,D,O,k;e((()=>{l(),p(),o(),y(),g(),f(),b=t(),{expect:x,fn:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Uikit Product/Layout & containers/PageLayout/TreeNavigation/Tests/Interaction`,id:`uikit-product-pagelayout-treenavigation-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}}},D=S(),O={tags:[`test`,`dev`],render:()=>(0,b.jsx)(s,{children:(0,b.jsxs)(r,{width:`fluid`,children:[(0,b.jsx)(a,{children:`InteractionTest`}),(0,b.jsx)(i,{children:`Выбор листового узла дерева вызывает onSelect с его id.`}),(0,b.jsx)(n,{align:`center`,children:(0,b.jsx)(`div`,{className:h.treeFrame,"data-test-id":m.treeNavigation.root,children:(0,b.jsx)(u,{mode:d.Fixed,header:{title:`Облачный проект`,description:`Управление ресурсами`},menu:{menuTitle:`Разделы`,items:v,onSelect:D},content:(0,b.jsx)(`div`,{className:h.demoBox,children:`Контентная часть страницы`})})})})]})}),play:async({canvasElement:e,step:t})=>{D.mockClear();let n=T(e),r=n.getByTestId(m.treeNavigation.root);await t(`select leaf node triggers onSelect`,async()=>{let e=T(r).getByTestId(_),t=T(e).getByTestId(c.item);await C.click(t),await w(()=>x(D).toHaveBeenCalled())}),await t(`root remains visible`,async()=>{await x(n.getByTestId(m.treeNavigation.root)).toBeVisible()})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel width='fluid'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Выбор листового узла дерева вызывает onSelect с его id.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.treeFrame} data-test-id={TEST_IDS.treeNavigation.root}>
            <TreeNavigation mode={TREE_NAVIGATION_MODE.Fixed} header={{
            title: 'Облачный проект',
            description: 'Управление ресурсами'
          }} menu={{
            menuTitle: 'Разделы',
            items: TREE_MENU_ITEMS,
            onSelect
          }} content={<div className={styles.demoBox}>Контентная часть страницы</div>} />
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
    const root = canvas.getByTestId(TEST_IDS.treeNavigation.root);
    await step('select leaf node triggers onSelect', async () => {
      const node = within(root).getByTestId(TREE_NODE_BILLING_TEST_ID);
      // Node-level data-test-id оседает на корневом wrapper'е (role=presentation),
      // а onClick/onSelect — на внутреннем treeitem. Кликаем именно его.
      const nodeItem = within(node).getByTestId(TREE_TEST_IDS.item);
      await userEvent.click(nodeItem);
      await waitFor(() => expect(onSelect).toHaveBeenCalled());
    });
    await step('root remains visible', async () => {
      await expect(canvas.getByTestId(TEST_IDS.treeNavigation.root)).toBeVisible();
    });
  }
}`,...O.parameters?.docs?.source}}},k=[`InteractionTest`]}))();export{O as InteractionTest,k as __namedExportsOrder,E as default};
//# sourceMappingURL=TreeNavigation.InteractionTest.stories-6nnbdrdP.js.map