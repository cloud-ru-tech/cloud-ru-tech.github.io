import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,l as r,m as i,t as a,u as o}from"./iframe-jFn_-H4h.js";import{i as s,n as c,t as l}from"./src-CMmIO7qM.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{l(),a(),u=t(),{expect:d,fn:f,userEvent:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g={create:`button-combo-item-create`,duplicate:`button-combo-item-duplicate`},_=[{id:`create`,label:`Создать`,onClick:f(),"data-test-id":g.create},{id:`duplicate`,label:`Дублировать`,onClick:f(),"data-test-id":g.duplicate}],v={title:`Snack/Actions/ButtonCombo/Tests/Interaction`,id:`components-buttoncombo-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{items:_,defaultValue:`create`,"data-test-id":s.root}},y={tags:[`test`,`dev`],render:e=>(0,u.jsx)(o,{children:(0,u.jsxs)(n,{children:[(0,u.jsx)(i,{children:`InteractionTest`}),(0,u.jsx)(r,{children:`Открытие списка, выбор действия меняет основную кнопку, клик по ней вызывает onClick выбранного действия.`}),(0,u.jsx)(c,{...e})]})}),play:async({canvasElement:e,step:t})=>{let n=h(e),r=h(document.body),i=n.getByTestId(s.option),a=n.getByTestId(s.dropdownTrigger);await t(`initial: основная кнопка показывает defaultValue`,async()=>{await d(i).toHaveTextContent(`Создать`)}),await t(`click: chevron раскрывает список`,async()=>{await p.click(a),await m(()=>d(r.getByTestId(g.duplicate)).toBeVisible())}),await t(`click: выбор пункта меняет label основной кнопки`,async()=>{await p.click(r.getByTestId(g.duplicate)),await m(()=>d(i).toHaveTextContent(`Дублировать`))}),await t(`click: основная кнопка вызывает onClick выбранного действия`,async()=>{await p.click(i),d(_[1].onClick).toHaveBeenCalledTimes(1)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>
          Открытие списка, выбор действия меняет основную кнопку, клик по ней вызывает onClick выбранного действия.
        </DemoHint>
        <ButtonCombo {...args} />
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    // items дроплиста — в портале вне canvasElement.
    const portal = within(document.body);
    const option = canvas.getByTestId(TEST_IDS.option);
    const trigger = canvas.getByTestId(TEST_IDS.dropdownTrigger);
    await step('initial: основная кнопка показывает defaultValue', async () => {
      await expect(option).toHaveTextContent('Создать');
    });
    await step('click: chevron раскрывает список', async () => {
      await userEvent.click(trigger);
      await waitFor(() => expect(portal.getByTestId(ITEM_TEST_IDS.duplicate)).toBeVisible());
    });
    await step('click: выбор пункта меняет label основной кнопки', async () => {
      await userEvent.click(portal.getByTestId(ITEM_TEST_IDS.duplicate));
      await waitFor(() => expect(option).toHaveTextContent('Дублировать'));
    });
    await step('click: основная кнопка вызывает onClick выбранного действия', async () => {
      await userEvent.click(option);
      expect(items[1].onClick).toHaveBeenCalledTimes(1);
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=ButtonCombo.InteractionTest.stories-CK3yxQ-W.js.map