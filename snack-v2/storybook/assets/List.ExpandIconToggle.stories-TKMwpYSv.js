import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BQzcd9-F.js";import{a as u,t as d,x as f}from"./src-BtX8sL-0.js";import{n as p,t as m}from"./testIds-1v137Tcu.js";import{n as h,t as g}from"./stories.module-CafaY64j.js";function _(){let[e,t]=(0,v.useState)([]),[n,r]=(0,v.useState)(`/`),c=e=>function(t){return(0,y.jsx)(`a`,{href:e,className:h.itemLink,onClick:t=>{t.defaultPrevented||(t.preventDefault(),r(e))},children:t})},d=[{id:`guides`,type:`collapse`,content:{label:`Guides`},itemWrapRender:c(`/guides`),items:[{id:`guides-start`,content:{label:`Getting started`},itemWrapRender:c(`/guides/start`)},{id:`guides-faq`,content:{label:`FAQ`},itemWrapRender:c(`/guides/faq`)}]},{id:`components`,type:`collapse`,content:{label:`Components`},itemWrapRender:c(`/components`),items:[{id:`components-button`,content:{label:`Button`},itemWrapRender:c(`/components/button`)},{id:`components-list`,content:{label:`List`},itemWrapRender:c(`/components/list`)}]},{id:`changelog`,content:{label:`Changelog`},itemWrapRender:c(`/changelog`)}];return(0,y.jsx)(l,{children:(0,y.jsxs)(a,{width:`narrow`,children:[(0,y.jsx)(s,{children:`Expand icon toggle`}),(0,y.jsx)(o,{children:`collapse.toggleOn='expandIcon': клик по строке уходит в ссылку, раскрытие переключает только шеврон.`}),(0,y.jsxs)(o,{"data-test-id":m.list.expandIconToggleRoute,children:[`Текущий роут: `,n]}),(0,y.jsx)(i,{align:`center`,children:(0,y.jsx)(`div`,{className:h.listFrame,children:(0,y.jsx)(u,{"data-test-id":m.list.expandIconToggleScenario,items:d,size:`m`,collapse:{value:e,onChange:e=>t(e??[]),toggleOn:`expandIcon`}})})})]})})}var v,y,b,x,S,C,w,T;t((()=>{d(),v=e(n(),1),c(),p(),g(),y=r(),{expect:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Snack/Data display/List/List/Examples/ExpandIconToggle`,id:`components-list-list-examples-expandicontoggle`,component:u,parameters:{layout:`fullscreen`}},w={tags:[`dev`,`test`],render:()=>(0,y.jsx)(_,{}),play:async({canvasElement:e,step:t})=>{let n=S(e),r=n.getByTestId(m.list.expandIconToggleRoute),i=e=>S(n.getByTestId(`${f.accordionItem}-${e}`)).getByTestId(f.groupIndicator);await t(`row click navigates and leaves the group collapsed`,async()=>{await x.click(n.getByTestId(`${f.baseItem}_guides`)),await b(r).toHaveTextContent(`/guides`),await b(n.queryByTestId(`${f.baseItem}_guides-start`)).toBeNull()}),await t(`expand icon click expands the group without navigating`,async()=>{await x.click(i(`components`)),await b(n.getByTestId(`${f.baseItem}_components-button`)).toBeVisible(),await b(r).toHaveTextContent(`/guides`)}),await t(`expand icon click collapses it back`,async()=>{await x.click(i(`components`)),await b(n.queryByTestId(`${f.baseItem}_components-button`)).toBeNull()})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <ExpandIconToggleScenario />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const route = canvas.getByTestId(TEST_IDS.list.expandIconToggleRoute);
    const expandIconOf = (id: string) => within(canvas.getByTestId(\`\${INTERNAL_TEST_IDS.accordionItem}-\${id}\`)).getByTestId(INTERNAL_TEST_IDS.groupIndicator);
    await step('row click navigates and leaves the group collapsed', async () => {
      await userEvent.click(canvas.getByTestId(\`\${INTERNAL_TEST_IDS.baseItem}_guides\`));
      await expect(route).toHaveTextContent('/guides');
      await expect(canvas.queryByTestId(\`\${INTERNAL_TEST_IDS.baseItem}_guides-start\`)).toBeNull();
    });
    await step('expand icon click expands the group without navigating', async () => {
      await userEvent.click(expandIconOf('components'));
      await expect(canvas.getByTestId(\`\${INTERNAL_TEST_IDS.baseItem}_components-button\`)).toBeVisible();
      // Роут прежний: клик по шеврону не всплыл до строки и не ушёл в ссылку.
      await expect(route).toHaveTextContent('/guides');
    });
    await step('expand icon click collapses it back', async () => {
      await userEvent.click(expandIconOf('components'));
      await expect(canvas.queryByTestId(\`\${INTERNAL_TEST_IDS.baseItem}_components-button\`)).toBeNull();
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`ExpandIconToggle`]}))();export{w as ExpandIconToggle,T as __namedExportsOrder,C as default};
//# sourceMappingURL=List.ExpandIconToggle.stories-TKMwpYSv.js.map