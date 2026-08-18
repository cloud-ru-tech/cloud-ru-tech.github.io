import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{f as n,t as r}from"./src-BFnLcVPc.js";import{r as i,t as a}from"./decorators-DcKbFqok.js";import{n as o,r as s}from"./testIds-zndDgWg-2.js";import{a as c,i as l,n as u,r as d}from"./entitiesTableFixtures-C_CjB1QK.js";function f({showColumnFilters:e,...t}){return(0,p.jsx)(n,{...t,queryFn:c,columnFilters:e?d:void 0})}var p,m,h,g,_,v;e((()=>{r(),a(),l(),s(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Data display/Table/EntitiesTable`,id:`components-table-entitiestable`,component:f,parameters:{layout:`fullscreen`},decorators:[i],args:{id:`entities-table-playground`,columnDefinitions:u,defaultLimit:10,defaultOffset:0,defaultSearch:``,searchPlaceholder:`Search entities`,getRowId:e=>e.id,showColumnFilters:!1,"data-test-id":o.serverTable.root},argTypes:{queryProps:{table:{disable:!0}},onQuerySuccess:{table:{disable:!0}},onPaginationOrDataChange:{table:{disable:!0}},columnDefinitions:{table:{disable:!0}},columnFilters:{table:{disable:!0}},getRowId:{table:{disable:!0}},showColumnFilters:{name:`[Stories]: showColumnFilters`,control:`boolean`}}},_={tags:[`dev`,`test`],play:async({canvasElement:e})=>{let t=h(e);await m(t.getByTestId(o.serverTable.root)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId(TEST_IDS.serverTable.root)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=EntitiesTable.Playground.stories-U_F2M0ha.js.map