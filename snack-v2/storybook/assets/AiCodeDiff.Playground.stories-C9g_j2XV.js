import{i as e}from"./preload-helper-CCSz8wUY.js";import{a as t,i as n,n as r,t as i}from"./src-C5jF4uaN.js";var a,o=e((()=>{i(),a={root:t.root,added:t.added,separator:t.separator,removed:t.removed}})),s,c,l,u,d;e((()=>{i(),o(),{expect:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`AI/Primitives/AiCodeDiff`,id:`ai-aicodediff`,component:r,parameters:{layout:`centered`},args:{added:83,removed:26,separator:`/`,size:n.M,"data-test-id":a.root},argTypes:{size:{control:`radio`,options:Object.values(n)},added:{control:{type:`number`,min:0,step:1}},removed:{control:{type:`number`,min:0,step:1}}}},u={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await s(c(e).getByTestId(a.root)).toBeVisible()}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...u.parameters?.docs?.source}}},d=[`Playground`]}))();export{u as Playground,d as __namedExportsOrder,l as default};
//# sourceMappingURL=AiCodeDiff.Playground.stories-C9g_j2XV.js.map