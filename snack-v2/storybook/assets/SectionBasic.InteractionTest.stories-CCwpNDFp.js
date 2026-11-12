import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o}from"./iframe-BjY-Vz13.js";import{a as s,c,f as l,h as u,l as d,o as f,p,s as m,t as h}from"./fixtures-CmJfFb5q.js";var g,_,v,y,b,x,S,C,w,T;e((()=>{l(),o(),m(),d(),g=t(),{expect:_,fn:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x=v(),S=v(),C={title:`Site/SectionBasic/Tests/Interaction`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{container:u.New,title:f,tabBarItems:s.map(e=>({...e,onClick:x})),defaultTabBarValue:`data`,onTabBarChange:v(),moreButton:{onClick:S},"data-test-id":c.root}},w={tags:[`test`,`dev`],render:e=>(0,g.jsx)(r,{children:(0,g.jsxs)(a,{width:`fluid`,children:[(0,g.jsx)(i,{children:`InteractionTest`}),(0,g.jsx)(n,{children:"Изначальная вкладка из `defaultTabBarValue`; клик вызывает `onTabBarChange` и `onClick` вкладки, «Показать еще» — свой `onClick`."}),(0,g.jsx)(p,{...e,children:(0,g.jsx)(h,{})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=b(t),i=r.getByTestId(`${c.tabPrefix}-infrastructure`),a=r.getByTestId(`${c.tabPrefix}-data`);await n(`initial: defaultTabBarValue selects the tab`,async()=>{await _(a).toHaveAttribute(`aria-selected`,`true`),await _(i).toHaveAttribute(`aria-selected`,`false`)}),await n(`click: selects the tab, calls onTabBarChange and the tab onClick`,async()=>{await y.click(i),await _(i).toHaveAttribute(`aria-selected`,`true`),await _(a).toHaveAttribute(`aria-selected`,`false`),await _(e.onTabBarChange).toHaveBeenCalledWith(`infrastructure`),await _(x).toHaveBeenCalledTimes(1)}),await n(`click: more button calls onClick`,async()=>{await y.click(r.getByTestId(c.moreButton)),await _(S).toHaveBeenCalledTimes(1)})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel width='fluid'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>
          Изначальная вкладка из \`defaultTabBarValue\`; клик вызывает \`onTabBarChange\` и \`onClick\` вкладки, «Показать
          еще» — свой \`onClick\`.
        </DemoHint>
        <SectionBasic {...args}>
          <ContentPlaceholder />
        </SectionBasic>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const firstTab = canvas.getByTestId(\`\${TEST_IDS.tabPrefix}-infrastructure\`);
    const secondTab = canvas.getByTestId(\`\${TEST_IDS.tabPrefix}-data\`);
    await step('initial: defaultTabBarValue selects the tab', async () => {
      await expect(secondTab).toHaveAttribute('aria-selected', 'true');
      await expect(firstTab).toHaveAttribute('aria-selected', 'false');
    });
    await step('click: selects the tab, calls onTabBarChange and the tab onClick', async () => {
      await userEvent.click(firstTab);
      await expect(firstTab).toHaveAttribute('aria-selected', 'true');
      await expect(secondTab).toHaveAttribute('aria-selected', 'false');
      await expect(args.onTabBarChange).toHaveBeenCalledWith('infrastructure');
      await expect(onTabClick).toHaveBeenCalledTimes(1);
    });
    await step('click: more button calls onClick', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.moreButton));
      await expect(onMoreButtonClick).toHaveBeenCalledTimes(1);
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`InteractionTest`]}))();export{w as InteractionTest,T as __namedExportsOrder,C as default};
//# sourceMappingURL=SectionBasic.InteractionTest.stories-CCwpNDFp.js.map