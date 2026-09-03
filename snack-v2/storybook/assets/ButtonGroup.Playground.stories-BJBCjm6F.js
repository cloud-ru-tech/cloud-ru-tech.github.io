import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bl-uTAel.js";import{l as c,r as l,s as u,t as d,u as f}from"./src-DUdgzt3y.js";import{n as p,t as m}from"./testIds-BnmztHjg.js";var h,g,_,v,y,b,x,S;e((()=>{d(),o(),p(),h=t(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Actions/Button/ButtonGroup`,id:`components-button-buttongroup`,component:l,parameters:{layout:`fullscreen`},render:e=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{children:[(0,h.jsx)(a,{children:`Playground`}),(0,h.jsx)(i,{children:`Группа связанных кнопок-действий с заданным порядком и выравниванием.`}),(0,h.jsx)(n,{align:`center`,children:(0,h.jsx)(l,{...e})})]})}),args:{size:c.M,vertical:!1,centered:!1,break:!1,filled:!1,primaryAction:{label:`Сохранить`,appearance:u.Primary,view:f.Filled,"data-test-id":m.buttonGroup.primary},secondaryAction:{label:`Отмена`,appearance:u.Neutral,view:f.Outline,"data-test-id":m.buttonGroup.secondary},"data-test-id":m.buttonGroup.root},argTypes:{size:{control:`radio`,options:Object.values(c),description:`Размер всех кнопок группы`},vertical:{control:`boolean`,description:`Вертикальное расположение`},centered:{control:`boolean`,description:`Центрирование по горизонтали`},break:{control:`boolean`,description:`Перенос на новую строку при нехватке места`},filled:{control:`boolean`,description:`Заливка контейнера (кнопки тянутся)`},primaryAction:{control:`object`,description:`Основное действие`},secondaryAction:{control:`object`,description:`Вторичное действие`},tertiaryAction:{control:`object`,description:`Третичное действие`}}},y={tags:[`dev`,`test`],play:async({canvasElement:e})=>{let t=_(e);await g(t.getByTestId(m.buttonGroup.primary)).toBeVisible(),await g(t.getByTestId(m.buttonGroup.secondary)).toBeVisible()}},b={tags:[`dev`,`test`],args:{primaryAction:{label:`Сохранить`,appearance:u.Primary,view:f.Filled,disabled:!0,"data-test-id":m.buttonGroup.primary}},play:async({canvasElement:e})=>{await g(_(e).getByTestId(m.buttonGroup.primary)).toBeDisabled()}},x={tags:[`dev`,`test`],args:{primaryAction:{label:`Применить`,appearance:u.Critical,view:f.Filled,"data-test-id":m.buttonGroup.primary},secondaryAction:{label:`Отмена`,appearance:u.Neutral,view:f.Simple,"data-test-id":m.buttonGroup.secondary}},play:async({canvasElement:e})=>{let t=_(e);await g(t.getByTestId(m.buttonGroup.primary)).toHaveTextContent(`Применить`),await g(t.getByTestId(m.buttonGroup.secondary)).toHaveAttribute(`data-view`,`simple`)}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    const root = within(canvasElement);
    await expect(root.getByTestId(TEST_IDS.buttonGroup.primary)).toBeVisible();
    await expect(root.getByTestId(TEST_IDS.buttonGroup.secondary)).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    primaryAction: {
      label: 'Сохранить',
      appearance: APPEARANCE.Primary,
      view: VIEW.Filled,
      disabled: true,
      'data-test-id': TEST_IDS.buttonGroup.primary
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.buttonGroup.primary)).toBeDisabled();
  }
}`,...b.parameters?.docs?.source},description:{story:"E2E: nested `primaryAction` via URL `args` is unreliable on static iframe loads.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    primaryAction: {
      label: 'Применить',
      appearance: APPEARANCE.Critical,
      view: VIEW.Filled,
      'data-test-id': TEST_IDS.buttonGroup.primary
    },
    secondaryAction: {
      label: 'Отмена',
      appearance: APPEARANCE.Neutral,
      view: VIEW.Simple,
      'data-test-id': TEST_IDS.buttonGroup.secondary
    }
  },
  play: async ({
    canvasElement
  }) => {
    const root = within(canvasElement);
    await expect(root.getByTestId(TEST_IDS.buttonGroup.primary)).toHaveTextContent('Применить');
    await expect(root.getByTestId(TEST_IDS.buttonGroup.secondary)).toHaveAttribute('data-view', 'simple');
  }
}`,...x.parameters?.docs?.source},description:{story:"E2E: same assertions as former URL-only nested `primaryAction` / `secondaryAction` overrides.",...x.parameters?.docs?.description}}},S=[`Playground`,`PlaygroundPrimaryDisabled`,`PlaygroundCriticalPrimary`]}))();export{y as Playground,x as PlaygroundCriticalPrimary,b as PlaygroundPrimaryDisabled,S as __namedExportsOrder,v as default};
//# sourceMappingURL=ButtonGroup.Playground.stories-BJBCjm6F.js.map