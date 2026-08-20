import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{t as i,u as a}from"./src-DKuu05Jj.js";import{f as o,t as s}from"./src-DUtlNpfr.js";import{r as c,t as l}from"./decorators-BCZvaWmf.js";import{n as u,r as d}from"./testIds-DT3Hz0ZA2.js";import{a as f,i as p,n as m}from"./entitiesTableFixtures-BoAqA_wB.js";function h(e){let t=(0,g.useRef)(null);return(0,_.jsx)(o,{...e,ref:t})}var g,_,v,y,b,x,S,C;t((()=>{i(),s(),g=e(n(),1),l(),p(),d(),_=r(),{expect:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Data display/Table/EntitiesTable/Tests/InteractionTest`,id:`components-table-entitiestable-tests-interactiontest`,component:h,parameters:{layout:`fullscreen`,controls:{disable:!0}},decorators:[c],args:{id:`entities-table-interaction`,columnDefinitions:m,defaultLimit:5,searchPlaceholder:`Search entities`,getRowId:e=>e.id,queryFn:f,"data-test-id":u.serverTable.root}},S={tags:[`dev`,`test`],play:async({canvasElement:e,step:t})=>{let n=b(e),r=n.getByTestId(u.toolbar.searchInput);await t(`search: filters visible rows`,async()=>{await y.clear(r),await y.type(r,`Entity 1`),await v(r).toHaveValue(`Entity 1`),await v(n.getByTestId(u.serverTable.root)).toBeVisible()}),await t(`pagination: second page is reachable`,async()=>{await y.clear(r);let e=n.getByTestId(a(2));await y.click(e),await v(e).toBeVisible()})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const searchInput = canvas.getByTestId(TEST_IDS.toolbar.searchInput);
    await step('search: filters visible rows', async () => {
      await userEvent.clear(searchInput);
      await userEvent.type(searchInput, 'Entity 1');
      await expect(searchInput).toHaveValue('Entity 1');
      await expect(canvas.getByTestId(TEST_IDS.serverTable.root)).toBeVisible();
    });
    await step('pagination: second page is reachable', async () => {
      await userEvent.clear(searchInput);
      const page2 = canvas.getByTestId(getPageNumberTestId(2));
      await userEvent.click(page2);
      await expect(page2).toBeVisible();
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`InteractionTest`]}))();export{S as InteractionTest,C as __namedExportsOrder,x as default};
//# sourceMappingURL=EntitiesTable.InteractionTest.stories-BGQJkUb-.js.map