import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-DMWsC78w.js";import{a as c,s as l,t as u,u as d}from"./src-CayYsASu.js";import{a as f,c as p,n as m,t as h}from"./src-CY4I41ZU.js";import{a as g,i as _,r as v,t as y}from"./testIds-CWsliyMk.js";var b,x,S,C,w,T,E,D;e((()=>{u(),h(),o(),_(),v(),b=t(),{expect:x,userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Snack/Foundation & utilities/PopoverPrivate/Tests/Interaction`,id:`components-popoverprivate-tests-interaction`,component:m,parameters:{layout:`fullscreen`,controls:{disable:!0},figma:{disable:!0}}},T=()=>(0,b.jsx)(`div`,{"data-test-id":y.content,className:g.popoverContent,children:`Popover content`}),E={tags:[`test`,`dev`],args:{trigger:p.Click,placement:f.Top,outsideClick:!0,closeOnEscapeKey:!0,arrowElementClassName:g.popoverArrowElement,arrowContainerClassName:g.popoverArrowContainer},render:e=>(0,b.jsx)(s,{children:(0,b.jsxs)(r,{children:[(0,b.jsx)(a,{children:`InteractionTest`}),(0,b.jsx)(i,{children:`Открытие PopoverPrivate по клику и закрытие через Escape.`}),(0,b.jsx)(n,{align:`center`,children:(0,b.jsx)(m,{...e,popoverContent:(0,b.jsx)(T,{}),children:(0,b.jsx)(c,{"data-test-id":y.triggerOpen,label:`Open popover`,view:d.Outline,appearance:l.Neutral})})})]})}),play:async({canvasElement:e,step:t})=>{let n=C(e);await t(`User opens popover`,async()=>{await S.click(n.getByTestId(y.triggerOpen))}),await t(`Popover content is visible`,async()=>{x(n.getByTestId(y.content)).toBeInTheDocument()}),await t(`User closes popover with Escape`,async()=>{await S.keyboard(`{Escape}`)}),await t(`Popover is hidden`,async()=>{x(n.queryByTestId(y.content)).not.toBeInTheDocument()})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    trigger: TRIGGER.Click,
    placement: PLACEMENT.Top,
    outsideClick: true,
    closeOnEscapeKey: true,
    arrowElementClassName: styles.popoverArrowElement,
    arrowContainerClassName: styles.popoverArrowContainer
  },
  render: (args: PopoverPrivateProps) => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>{'Открытие PopoverPrivate по клику и закрытие через Escape.'}</DemoHint>
        <DemoActions align='center'>
          <PopoverPrivate {...args} popoverContent={<PopoverContent />}>
            <Button data-test-id={TEST_IDS.triggerOpen} label='Open popover' view={VIEW.Outline} appearance={APPEARANCE.Neutral} />
          </PopoverPrivate>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('User opens popover', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.triggerOpen));
    });
    await step('Popover content is visible', async () => {
      expect(canvas.getByTestId(TEST_IDS.content)).toBeInTheDocument();
    });
    await step('User closes popover with Escape', async () => {
      await userEvent.keyboard('{Escape}');
    });
    await step('Popover is hidden', async () => {
      expect(canvas.queryByTestId(TEST_IDS.content)).not.toBeInTheDocument();
    });
  }
}`,...E.parameters?.docs?.source}}},D=[`InteractionTest`]}))();export{E as InteractionTest,D as __namedExportsOrder,w as default};
//# sourceMappingURL=PopoverPrivate.InteractionTest.stories-1p3CZ75L.js.map