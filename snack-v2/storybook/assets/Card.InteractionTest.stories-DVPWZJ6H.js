import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-Bl-uTAel.js";import{a as u,t as d}from"./src-DUdgzt3y.js";import{a as f,n as p,s as m,t as h}from"./src-DB1hTKA0.js";import{t as g}from"./testIds-Ce4tvWzB.js";function _(){let{radius:e,disabled:t}=f();return(0,y.jsx)(`span`,{"data-test-id":T,"data-context-radius":e,"data-context-disabled":t})}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;t((()=>{d(),h(),v=e(n(),1),c(),g(),y=r(),{expect:b,fn:x,userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w=`card-nested-button`,T=`card-context-probe`,E=`${m.root}-anchor`,D=`${m.root}-custom-link`,O={title:`Snack/Layout & containers/Card/Card/Tests/Interaction`,id:`components-card-card-tests-interaction`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{"data-test-id":m.root}},k={tags:[`test`,`dev`],args:{onButtonClick:x()},render:e=>(0,y.jsx)(l,{children:(0,y.jsxs)(a,{children:[(0,y.jsx)(s,{children:`InteractionTest`}),(0,y.jsx)(o,{children:`Клик по вложенной кнопке внутри Card вызывает её собственный onClick.`}),(0,y.jsx)(i,{align:`center`,children:(0,y.jsxs)(p,{"data-test-id":m.root,children:[(0,y.jsx)(u,{label:`Action`,onClick:e.onButtonClick,"data-test-id":w}),(0,y.jsx)(_,{})]})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=C(t),i=r.getByTestId(w);await n(`nested button: click fires button onClick`,async()=>{await S.click(i),b(e.onButtonClick).toHaveBeenCalledTimes(1)}),await n(`useCardContext exposes radius/disabled to children`,async()=>{let e=r.getByTestId(T);await b(e).toHaveAttribute(`data-context-radius`,`m`),await b(e).toHaveAttribute(`data-context-disabled`,`false`)})}},A={tags:[`test`,`dev`],args:{as:`a`,href:`https://example.com`,target:`_blank`,disabled:!0,onClick:x(),"data-test-id":E},render:e=>(0,y.jsx)(l,{children:(0,y.jsxs)(a,{children:[(0,y.jsx)(s,{children:`AsAnchorDisabled`}),(0,y.jsx)(o,{children:"Card как `<a>` в disabled-state: клик не переходит по href (preventDefault), но onClick всё равно вызывается — решение «глотать или нет» оставляем потребителю."}),(0,y.jsx)(i,{align:`center`,children:(0,y.jsx)(p,{...e,children:`Disabled link`})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=C(t).getByTestId(E);await n(`anchor renders with aria-disabled and tabindex=-1`,async()=>{await b(r).toHaveAttribute(`aria-disabled`,`true`),await b(r).toHaveAttribute(`tabindex`,`-1`)}),await n(`target='_blank' injects rel='noopener noreferrer'`,async()=>{await b(r).toHaveAttribute(`rel`,`noopener noreferrer`)}),await n(`click on disabled anchor: preventDefault fired (no navigation), onClick still called`,async()=>{let t=!1;document.addEventListener(`click`,e=>{t=e.defaultPrevented},{once:!0}),await S.click(r,{pointerEventsCheck:0}),b(t).toBe(!0),b(e.onClick).toHaveBeenCalledTimes(1)})}},j=(0,v.forwardRef)(({to:e,onClick:t,children:n,...r},i)=>(0,y.jsx)(`a`,{ref:i,href:e,onClick:t,...r,children:n})),j.displayName=`MockLink`,M={tags:[`test`,`dev`],args:{as:j,to:`/profile/42`,onClick:x(),"data-test-id":D},render:e=>(0,y.jsx)(l,{children:(0,y.jsxs)(a,{children:[(0,y.jsx)(s,{children:`AsCustomLink`}),(0,y.jsx)(o,{children:"Card как кастомный компонент (Link из react-router-dom): нестандартные prop'ы (например `to`) пробрасываются на целевой компонент без модификаций."}),(0,y.jsx)(i,{align:`center`,children:(0,y.jsx)(p,{...e,children:`Profile`})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=C(t).getByTestId(D);await n(`custom 'to' prop reached MockLink → href='/profile/42'`,async()=>{await b(r).toHaveAttribute(`href`,`/profile/42`),b(r.tagName.toLowerCase()).toBe(`a`)}),await n(`click fires onClick passed via args`,async()=>{let t=e=>e.preventDefault();document.addEventListener(`click`,t,{capture:!0});try{await S.click(r),b(e.onClick).toHaveBeenCalledTimes(1)}finally{document.removeEventListener(`click`,t,{capture:!0})}})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    onButtonClick: fn()
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик по вложенной кнопке внутри Card вызывает её собственный onClick.</DemoHint>
        <DemoActions align='center'>
          <Card data-test-id={TEST_IDS.root}>
            <Button label='Action' onClick={args.onButtonClick} data-test-id={NESTED_BUTTON_TEST_ID} />
            <ContextProbe />
          </Card>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId(NESTED_BUTTON_TEST_ID);
    await step('nested button: click fires button onClick', async () => {
      await userEvent.click(button);
      expect(args.onButtonClick).toHaveBeenCalledTimes(1);
    });
    await step('useCardContext exposes radius/disabled to children', async () => {
      const probe = canvas.getByTestId(CONTEXT_PROBE_TEST_ID);
      await expect(probe).toHaveAttribute('data-context-radius', 'm');
      await expect(probe).toHaveAttribute('data-context-disabled', 'false');
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    as: 'a',
    href: 'https://example.com',
    target: '_blank',
    disabled: true,
    onClick: fn(),
    'data-test-id': ANCHOR_CARD_TEST_ID
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>AsAnchorDisabled</DemoTitle>
        <DemoHint>
          Card как \`&lt;a&gt;\` в disabled-state: клик не переходит по href (preventDefault), но onClick всё равно
          вызывается — решение «глотать или нет» оставляем потребителю.
        </DemoHint>
        <DemoActions align='center'>
          <Card {...args}>Disabled link</Card>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const card = within(canvasElement).getByTestId(ANCHOR_CARD_TEST_ID);
    await step('anchor renders with aria-disabled and tabindex=-1', async () => {
      await expect(card).toHaveAttribute('aria-disabled', 'true');
      await expect(card).toHaveAttribute('tabindex', '-1');
    });
    await step("target='_blank' injects rel='noopener noreferrer'", async () => {
      await expect(card).toHaveAttribute('rel', 'noopener noreferrer');
    });
    await step('click on disabled anchor: preventDefault fired (no navigation), onClick still called', async () => {
      let defaultPrevented = false;
      // Слушаем на \`document\`: делегированный React-обработчик на корневом контейнере
      // вызовет preventDefault раньше bubble до document. Listener на самой \`card\`
      // прочитал бы defaultPrevented до React и увидел false.
      document.addEventListener('click', e => {
        defaultPrevented = e.defaultPrevented;
      }, {
        once: true
      });
      // pointer-events на disabled-anchor отключены через CSS — обходим проверку,
      // чтобы прицельно достучаться до onClick-обработчика компонента.
      await userEvent.click(card, {
        pointerEventsCheck: 0
      });
      expect(defaultPrevented).toBe(true);
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    as: MockLink,
    to: '/profile/42',
    onClick: fn(),
    'data-test-id': CUSTOM_LINK_TEST_ID
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>AsCustomLink</DemoTitle>
        <DemoHint>
          Card как кастомный компонент (Link из react-router-dom): нестандартные prop&apos;ы (например \`to\`)
          пробрасываются на целевой компонент без модификаций.
        </DemoHint>
        <DemoActions align='center'>
          <Card {...args}>Profile</Card>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const card = within(canvasElement).getByTestId(CUSTOM_LINK_TEST_ID);
    await step("custom 'to' prop reached MockLink → href='/profile/42'", async () => {
      await expect(card).toHaveAttribute('href', '/profile/42');
      expect(card.tagName.toLowerCase()).toBe('a');
    });
    await step('click fires onClick passed via args', async () => {
      // MockLink — реальный \`<a href>\`: без перехвата клик увёл бы страницу и оборвал
      // browser-сессию. Capture-listener гасит навигацию, onClick при этом отрабатывает.
      const preventNavigation = (e: Event) => e.preventDefault();
      document.addEventListener('click', preventNavigation, {
        capture: true
      });
      try {
        await userEvent.click(card);
        expect(args.onClick).toHaveBeenCalledTimes(1);
      } finally {
        document.removeEventListener('click', preventNavigation, {
          capture: true
        });
      }
    });
  }
}`,...M.parameters?.docs?.source}}},N=[`InteractionTest`,`AsAnchorDisabled`,`AsCustomLink`]}))();export{A as AsAnchorDisabled,M as AsCustomLink,k as InteractionTest,N as __namedExportsOrder,O as default};
//# sourceMappingURL=Card.InteractionTest.stories-DVPWZJ6H.js.map