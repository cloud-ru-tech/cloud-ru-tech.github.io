import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{f as n,p as r,t as i}from"./iframe-qs8RgOhH.js";import{i as a,n as o,t as s}from"./src-DCchd65C.js";var c,l,u,d,f,p,m;e((()=>{s(),i(),c=t(),{expect:l,fn:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Snack/Actions/ButtonCombo`,id:`components-buttoncombo`,component:o,parameters:{layout:`fullscreen`},args:{items:[{id:`create`,label:`Создать`,onClick:u()},{id:`duplicate`,label:`Дублировать`,onClick:u()},{id:`archive`,label:`Архивировать`,onClick:u()}],defaultValue:`create`,defaultLabel:`Выберите действие`,view:`filled`,appearance:`primary`,size:`m`,disabled:!1,loading:!1,fullWidth:!1,"data-test-id":a.root},argTypes:{items:{table:{disable:!0}},value:{table:{disable:!0}},onChange:{table:{disable:!0}},open:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}},render:e=>(0,c.jsx)(n,{children:(0,c.jsx)(r,{children:(0,c.jsx)(o,{...e})})})},p={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await l(d(e).getByTestId(a.option)).toBeVisible()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.option)).toBeVisible();
  }
}`,...p.parameters?.docs?.source}}},m=[`Playground`]}))();export{p as Playground,m as __namedExportsOrder,f as default};
//# sourceMappingURL=ButtonCombo.Playground.stories-DGQdVtjm.js.map