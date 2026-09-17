import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,t as o,u as s}from"./iframe-Bl4CnKOH.js";import{a as c,c as l,i as u,n as d,o as f,r as p,t as m}from"./testIds-BH4kMkdh.js";function h(){let[e,t]=(0,_.useState)(!1);return(0,v.jsx)(f,{className:u.root,title:`Удалить виртуальную машину?`,content:C,open:e,onOpenChange:t,primaryAction:{label:`Подтвердить`},secondaryAction:{label:`Отмена`},"data-test-id":m.root})}function g(){let[e,t]=(0,_.useState)(!0);return(0,v.jsx)(`div`,{className:u.constrainedParent,"data-test-id":m.constrainedParent,children:(0,v.jsx)(f,{className:u.constrainedRoot,title:`Удалить виртуальную машину?`,content:C,hint:`Подсказка под панелью`,appearance:l.Primary,primaryAction:{label:`Подтвердить`},secondaryAction:{label:`Отмена`},open:e,onOpenChange:t,"data-test-id":m.root})})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A;t((()=>{c(),_=e(n(),1),o(),p(),d(),v=r(),{expect:y,fn:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,C=`Виртуальная машина будет остановлена и удалена вместе с дисками. Дополнительное описание действия занимает несколько строк и используется для проверки раскрытия длинного текста в свёрнутом и развёрнутом состояниях. Ещё один абзац с нейтральным содержимым без привязки к предметной области. Третий абзац нужен, чтобы содержимое переполняло предел по высоте и на широком экране: тогда кнопка «Показать» появляется в любой ширине карточки, а не только в узкой.`,w={title:`AI/Surfaces/AiFieldRequest/Tests/Interaction`,id:`ai-aifieldrequest-tests-interaction`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{primaryAction:{label:`Подтвердить`,onClick:b()},secondaryAction:{label:`Отмена`,onClick:b()}}},T={tags:[`test`,`dev`],render:e=>(0,v.jsx)(s,{children:(0,v.jsx)(a,{children:(0,v.jsx)(i,{align:`start`,children:(0,v.jsx)(f,{...e,className:u.root,title:`Удалить виртуальную машину?`,content:C,hint:`Подсказка под панелью`,appearance:l.Primary,"data-test-id":m.root})})})}),play:async({args:e,canvasElement:t})=>{let n=S(t),r=n.getByTestId(m.root);await y(r).toBeVisible();let i=await n.findByTestId(m.expand);await x.click(i),await y(r).toHaveAttribute(`data-open`,`true`),await x.click(i),await y(r).not.toHaveAttribute(`data-open`),await y(i).toHaveFocus(),await x.click(n.getByTestId(m.primaryAction)),y(e.primaryAction.onClick).toHaveBeenCalledTimes(1),await x.click(n.getByTestId(m.secondaryAction)),y(e.secondaryAction.onClick).toHaveBeenCalledTimes(1)}},E={tags:[`test`,`dev`],render:()=>(0,v.jsx)(s,{children:(0,v.jsx)(a,{children:(0,v.jsx)(i,{align:`start`,children:(0,v.jsx)(h,{})})})}),play:async({canvasElement:e})=>{let t=S(e),n=t.getByTestId(m.root);await x.click(await t.findByTestId(m.expand)),await y(n).toHaveAttribute(`data-open`,`true`)}},D={tags:[`test`,`dev`],render:()=>(0,v.jsx)(s,{children:(0,v.jsx)(a,{children:(0,v.jsx)(i,{align:`start`,children:(0,v.jsx)(f,{className:u.root,title:`Удалить виртуальную машину?`,content:`Диски будут удалены вместе с машиной.`,primaryAction:{label:`Подтвердить`},secondaryAction:{label:`Отмена`},"data-test-id":m.root})})})}),play:async({canvasElement:e})=>{let t=S(e);await y(t.getByTestId(m.root)).toBeVisible(),await y(t.getByTestId(m.expand)).toHaveAttribute(`aria-hidden`,`true`)}},O={tags:[`test`,`dev`],args:{title:`Удалить виртуальную машину?`,content:C,hint:`Подсказка под панелью`,primaryAction:{label:`Подтвердить`,loading:!0},secondaryAction:{label:`Отмена`}},render:e=>(0,v.jsx)(s,{children:(0,v.jsx)(a,{children:(0,v.jsx)(i,{align:`start`,children:(0,v.jsx)(f,{...e,className:u.root,"data-test-id":m.root})})})})},k={tags:[`test`,`dev`],render:()=>(0,v.jsx)(s,{children:(0,v.jsx)(a,{children:(0,v.jsx)(i,{align:`start`,children:(0,v.jsx)(g,{})})})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoActions align='start'>
          <AiFieldRequest {...args} className={styles.root} title='Удалить виртуальную машину?' content={LONG_CONTENT} hint='Подсказка под панелью' appearance={APPEARANCE.Primary} data-test-id={TEST_IDS.root} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.root);
    await expect(root).toBeVisible();
    const expand = await canvas.findByTestId(TEST_IDS.expand);
    await userEvent.click(expand);
    await expect(root).toHaveAttribute('data-open', 'true');
    await userEvent.click(expand);
    await expect(root).not.toHaveAttribute('data-open');
    await expect(expand).toHaveFocus();
    await userEvent.click(canvas.getByTestId(TEST_IDS.primaryAction));
    expect(args.primaryAction.onClick).toHaveBeenCalledTimes(1);
    await userEvent.click(canvas.getByTestId(TEST_IDS.secondaryAction));
    expect(args.secondaryAction.onClick).toHaveBeenCalledTimes(1);
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoActions align='start'>
          <ControlledOpenDemo />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.root);
    await userEvent.click(await canvas.findByTestId(TEST_IDS.expand));
    await expect(root).toHaveAttribute('data-open', 'true');
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoActions align='start'>
          <AiFieldRequest className={styles.root} title='Удалить виртуальную машину?' content='Диски будут удалены вместе с машиной.' primaryAction={{
          label: 'Подтвердить'
        }} secondaryAction={{
          label: 'Отмена'
        }} data-test-id={TEST_IDS.root} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId(TEST_IDS.root)).toBeVisible();
    await expect(canvas.getByTestId(TEST_IDS.expand)).toHaveAttribute('aria-hidden', 'true');
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    title: 'Удалить виртуальную машину?',
    content: LONG_CONTENT,
    hint: 'Подсказка под панелью',
    primaryAction: {
      label: 'Подтвердить',
      loading: true
    },
    secondaryAction: {
      label: 'Отмена'
    }
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoActions align='start'>
          <AiFieldRequest {...args} className={styles.root} data-test-id={TEST_IDS.root} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoActions align='start'>
          <ConstrainedHeightDemo />
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...k.parameters?.docs?.source}}},A=[`InteractionTest`,`ControlledOpen`,`ShortContent`,`Loading`,`ConstrainedHeight`]}))();export{k as ConstrainedHeight,E as ControlledOpen,T as InteractionTest,O as Loading,D as ShortContent,A as __namedExportsOrder,w as default};
//# sourceMappingURL=AiFieldRequest.InteractionTest.stories-Du84gTwE.js.map