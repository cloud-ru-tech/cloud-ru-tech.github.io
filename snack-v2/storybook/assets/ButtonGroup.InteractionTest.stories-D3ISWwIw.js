import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-XppXgSyX.js";import{l as c,r as l,s as u,t as d,u as f}from"./src-BaQeOyft.js";import{n as p,t as m}from"./testIds-BnmztHjg.js";var h,g=e((()=>{h={primary:`Сохранить`,secondary:`Отмена`,tertiary:`Помощь`,primaryCritical:`Применить`}})),_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{d(),o(),p(),g(),_=t(),{expect:v,fn:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S=(e,t)=>o=>(0,_.jsx)(s,{children:(0,_.jsxs)(r,{children:[(0,_.jsx)(a,{children:e}),(0,_.jsx)(i,{children:t}),(0,_.jsx)(n,{align:`center`,children:(0,_.jsx)(l,{...o})})]})}),C={title:`Snack/Actions/Button/ButtonGroup/Tests/Interaction`,id:`components-button-buttongroup-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{size:c.M,"data-test-id":m.buttonGroup.root}},w={tags:[`test`,`dev`],args:{primaryAction:{label:h.primary,appearance:u.Primary,view:f.Filled,onClick:y(),"data-test-id":m.buttonGroup.primary},secondaryAction:{label:h.secondary,appearance:u.Neutral,view:f.Outline,onClick:y(),"data-test-id":m.buttonGroup.secondary}},render:S(`InteractionTest`,`Проверка независимых onClick у действий группы и клавиатуры.`),play:async({args:e,canvasElement:t,step:n})=>{let r=x(t),i=r.getByTestId(m.buttonGroup.primary),a=r.getByTestId(m.buttonGroup.secondary),o=e.primaryAction?.onClick,s=e.secondaryAction?.onClick;await n(`click: primary action fires its own onClick`,async()=>{await b.click(i),v(o).toHaveBeenCalledTimes(1),v(s).not.toHaveBeenCalled()}),await n(`click: secondary action fires its own onClick (no cross-talk)`,async()=>{await b.click(a),v(s).toHaveBeenCalledTimes(1),v(o).toHaveBeenCalledTimes(1)}),await n(`keyboard: Enter on focused secondary fires onClick`,async()=>{a.focus(),await v(a).toHaveFocus(),await b.keyboard(`{Enter}`),v(s).toHaveBeenCalledTimes(2)})}},T={tags:[`test`,`dev`],render:S(`DisabledPrimaryFixture`,`Группа с заблокированным первичным действием.`),args:{primaryAction:{label:h.primary,appearance:u.Primary,view:f.Filled,disabled:!0,"data-test-id":m.buttonGroup.primary},secondaryAction:{label:h.secondary,appearance:u.Neutral,view:f.Outline,"data-test-id":m.buttonGroup.secondary}}},E={tags:[`test`,`dev`],render:S(`CriticalPrimaryFixture`,`Группа с критичным первичным действием.`),args:{primaryAction:{label:h.primaryCritical,appearance:u.Critical,view:f.Filled,"data-test-id":m.buttonGroup.primary},secondaryAction:{label:h.secondary,appearance:u.Neutral,view:f.Simple,"data-test-id":m.buttonGroup.secondary}}},D={tags:[`test`,`dev`],render:S(`ThreeActionsFixture`,`Группа из трёх действий: primary, secondary, tertiary.`),args:{primaryAction:{label:h.primary,appearance:u.Primary,view:f.Filled,"data-test-id":m.buttonGroup.primary},secondaryAction:{label:h.secondary,appearance:u.Neutral,view:f.Outline,"data-test-id":m.buttonGroup.secondary},tertiaryAction:{label:h.tertiary,appearance:u.Neutral,view:f.Simple,"data-test-id":m.buttonGroup.tertiary}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    primaryAction: {
      label: BUTTON_GROUP_LABELS.primary,
      appearance: APPEARANCE.Primary,
      view: VIEW.Filled,
      onClick: fn(),
      'data-test-id': TEST_IDS.buttonGroup.primary
    },
    secondaryAction: {
      label: BUTTON_GROUP_LABELS.secondary,
      appearance: APPEARANCE.Neutral,
      view: VIEW.Outline,
      onClick: fn(),
      'data-test-id': TEST_IDS.buttonGroup.secondary
    }
  },
  render: renderScenario('InteractionTest', 'Проверка независимых onClick у действий группы и клавиатуры.'),
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const primary = canvas.getByTestId(TEST_IDS.buttonGroup.primary);
    const secondary = canvas.getByTestId(TEST_IDS.buttonGroup.secondary);
    const primaryOnClick = args.primaryAction?.onClick;
    const secondaryOnClick = args.secondaryAction?.onClick;
    await step('click: primary action fires its own onClick', async () => {
      await userEvent.click(primary);
      expect(primaryOnClick).toHaveBeenCalledTimes(1);
      expect(secondaryOnClick).not.toHaveBeenCalled();
    });
    await step('click: secondary action fires its own onClick (no cross-talk)', async () => {
      await userEvent.click(secondary);
      expect(secondaryOnClick).toHaveBeenCalledTimes(1);
      expect(primaryOnClick).toHaveBeenCalledTimes(1);
    });
    await step('keyboard: Enter on focused secondary fires onClick', async () => {
      secondary.focus();
      await expect(secondary).toHaveFocus();
      await userEvent.keyboard('{Enter}');
      expect(secondaryOnClick).toHaveBeenCalledTimes(2);
    });
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: renderScenario('DisabledPrimaryFixture', 'Группа с заблокированным первичным действием.'),
  args: {
    primaryAction: {
      label: BUTTON_GROUP_LABELS.primary,
      appearance: APPEARANCE.Primary,
      view: VIEW.Filled,
      disabled: true,
      'data-test-id': TEST_IDS.buttonGroup.primary
    },
    secondaryAction: {
      label: BUTTON_GROUP_LABELS.secondary,
      appearance: APPEARANCE.Neutral,
      view: VIEW.Outline,
      'data-test-id': TEST_IDS.buttonGroup.secondary
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: renderScenario('CriticalPrimaryFixture', 'Группа с критичным первичным действием.'),
  args: {
    primaryAction: {
      label: BUTTON_GROUP_LABELS.primaryCritical,
      appearance: APPEARANCE.Critical,
      view: VIEW.Filled,
      'data-test-id': TEST_IDS.buttonGroup.primary
    },
    secondaryAction: {
      label: BUTTON_GROUP_LABELS.secondary,
      appearance: APPEARANCE.Neutral,
      view: VIEW.Simple,
      'data-test-id': TEST_IDS.buttonGroup.secondary
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: renderScenario('ThreeActionsFixture', 'Группа из трёх действий: primary, secondary, tertiary.'),
  args: {
    primaryAction: {
      label: BUTTON_GROUP_LABELS.primary,
      appearance: APPEARANCE.Primary,
      view: VIEW.Filled,
      'data-test-id': TEST_IDS.buttonGroup.primary
    },
    secondaryAction: {
      label: BUTTON_GROUP_LABELS.secondary,
      appearance: APPEARANCE.Neutral,
      view: VIEW.Outline,
      'data-test-id': TEST_IDS.buttonGroup.secondary
    },
    tertiaryAction: {
      label: BUTTON_GROUP_LABELS.tertiary,
      appearance: APPEARANCE.Neutral,
      view: VIEW.Simple,
      'data-test-id': TEST_IDS.buttonGroup.tertiary
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`InteractionTest`,`DisabledPrimaryFixture`,`CriticalPrimaryFixture`,`ThreeActionsFixture`]}))();export{E as CriticalPrimaryFixture,T as DisabledPrimaryFixture,w as InteractionTest,D as ThreeActionsFixture,O as __namedExportsOrder,C as default};
//# sourceMappingURL=ButtonGroup.InteractionTest.stories-D3ISWwIw.js.map