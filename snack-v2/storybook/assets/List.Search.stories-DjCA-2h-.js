import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-jFn_-H4h.js";import{a as u,t as d,x as f}from"./src-C5Q0etOt.js";import{n as p,t as m}from"./testIds-zOjMf_tk.js";import{n as h,t as g}from"./stories.module-Cv0zmHWk.js";function _(){let[e,t]=(0,v.useState)(``),n=E.filter(t=>{let n=`content`in t?t.content:void 0;return typeof n==`object`&&n&&`label`in n?String(n.label).toLowerCase().includes(e.toLowerCase()):!0});return(0,y.jsx)(l,{children:(0,y.jsxs)(a,{width:`narrow`,children:[(0,y.jsx)(s,{children:`Search`}),(0,y.jsx)(o,{children:`Контролируемая фильтрация items по значению input.`}),(0,y.jsx)(i,{align:`center`,children:(0,y.jsx)(`div`,{className:h.listFrame,children:(0,y.jsx)(u,{"data-test-id":m.list.searchScenario,items:n,size:`m`,search:{placeholder:`Search`,value:e,onChange:t}})})})]})})}var v,y,b,x,S,C,w,T,E,D,O;t((()=>{d(),v=e(n(),1),c(),p(),g(),y=r(),{expect:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,C=e=>`${f.baseItem}_${e}`,w=`search__field-input`,T={title:`Snack/Data display/List/List/Examples/Search`,id:`components-list-list-examples-search`,component:u,parameters:{layout:`fullscreen`}},E=[{id:`a`,content:{label:`Overview`}},{id:`b`,content:{label:`Analytics`}},{id:`c`,content:{label:`Billing`}},{id:`d`,content:{label:`Settings`}}],D={tags:[`dev`,`test`],render:()=>(0,y.jsx)(_,{}),play:async({canvasElement:e,step:t})=>{let n=S(e),r=n.getByTestId(w);await t(`type filter value narrows the list`,async()=>{await x.click(r),await x.type(r,`an`),await b(n.getByTestId(C(`b`))).toBeVisible(),await b(n.queryByTestId(C(`a`))).toBeNull()}),await t(`clear filter restores the full list`,async()=>{await x.clear(r),await b(n.getByTestId(C(`a`))).toBeVisible()})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <SearchScenario />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId(SEARCH_INPUT_TEST_ID);
    await step('type filter value narrows the list', async () => {
      await userEvent.click(input);
      await userEvent.type(input, 'an');
      await expect(canvas.getByTestId(itemId('b'))).toBeVisible();
      await expect(canvas.queryByTestId(itemId('a'))).toBeNull();
    });
    await step('clear filter restores the full list', async () => {
      await userEvent.clear(input);
      await expect(canvas.getByTestId(itemId('a'))).toBeVisible();
    });
  }
}`,...D.parameters?.docs?.source}}},O=[`Search`]}))();export{D as Search,O as __namedExportsOrder,T as default};
//# sourceMappingURL=List.Search.stories-DjCA-2h-.js.map