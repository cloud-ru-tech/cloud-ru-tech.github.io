import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,t as o,u as s}from"./iframe-n9OCAA8q.js";import{Ft as c,k as l,pt as u,t as d}from"./system-5G2b80c5.js";import{a as f,t as p,x as m}from"./src-D1CtPcgD.js";import{n as h,t as g}from"./testIds-DDukF6lf.js";import{n as _,t as v}from"./stories.module-Cv0zmHWk.js";function y({content:e}){let t=e&&typeof e==`object`&&`label`in e?e.label:``;return(0,C.jsxs)(`span`,{"data-test-id":P,children:[`Custom · `,t]})}function b(e,t){let n=`content`in e?e.content:void 0;return typeof n==`object`&&n&&`label`in n?String(n.label).toLowerCase().includes(t.toLowerCase()):!0}function x(){let[e,t]=(0,S.useState)(``),[n,r]=(0,S.useState)([]),o=j.filter(t=>b(t,e));return(0,C.jsx)(s,{children:(0,C.jsx)(a,{width:`narrow`,children:(0,C.jsxs)(i,{align:`center`,children:[(0,C.jsx)(`div`,{className:_.listFrame,children:(0,C.jsx)(f,{"data-test-id":g.list.root,items:o,pinTop:M,size:`m`,marker:!0,selection:{mode:`multiple`,value:n,onChange:r},search:{placeholder:`Search`,value:e,onChange:t}})}),(0,C.jsx)(`div`,{className:_.listFrame,children:(0,C.jsx)(f,{"data-test-id":N,items:F,size:`m`,contentRender:y})})]})})})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;t((()=>{d(),p(),S=e(n(),1),o(),h(),v(),C=r(),{expect:w,fn:T,userEvent:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Snack/Data display/List/List/Tests/Interaction`,id:`components-list-list-tests-interaction`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{"data-test-id":g.list.root}},k=T(),A=T(),j=[{id:`a`,beforeContent:(0,C.jsx)(u,{}),content:{label:`Overview`},onClick:k},{id:`b`,beforeContent:(0,C.jsx)(l,{}),content:{label:`Analytics`},onClick:A},{id:`c`,content:{label:`Billing`}},{id:`notify`,switch:!0,content:{label:`Notifications`}},{id:`dim`,inactive:!0,content:{label:`Inactive row`}},{id:`ghost`,hidden:!0,content:{label:`Hidden row`}}],M=[{id:`pinned`,beforeContent:(0,C.jsx)(c,{}),content:{label:`Pinned`}}],N=`list-content-render`,P=`list-content-render__custom`,F=[{id:`cr`,content:{label:`Original option`}}],I=e=>`${m.baseItem}_${e}`,L=`search__field-input`,R={tags:[`test`,`dev`],render:()=>(0,C.jsx)(x,{}),play:async({canvasElement:e,step:t})=>{k.mockClear(),A.mockClear();let n=D(e),r=n.getByTestId(g.list.root);await t(`renders root`,async()=>{await w(r).toBeVisible()}),await t(`click: item with onClick fires its callback and selects it (multiple mode)`,async()=>{let e=n.getByTestId(I(`a`));await E.click(e),w(k).toHaveBeenCalledTimes(1),await w(e).toHaveAttribute(`data-checked`,`true`)}),await t(`click: second item toggles independently and keeps the first checked`,async()=>{let e=n.getByTestId(I(`b`));await E.click(e),w(A).toHaveBeenCalledTimes(1),await w(e).toHaveAttribute(`data-checked`,`true`),await w(n.getByTestId(I(`a`))).toHaveAttribute(`data-checked`,`true`)}),await t(`click: clicking a selected item deselects it`,async()=>{let e=n.getByTestId(I(`a`));await E.click(e),await w(e).not.toHaveAttribute(`data-checked`,`true`)}),await t(`inactive item is non-interactive (data-non-pointer on the row, never checked)`,async()=>{let e=n.getByTestId(I(`dim`));await w(e).toHaveAttribute(`data-non-pointer`,`true`),await w(e).not.toHaveAttribute(`data-checked`,`true`)}),await t(`hidden item is absent from the DOM`,async()=>{await w(n.queryByTestId(I(`ghost`))).toBeNull()}),await t(`switch item toggles selection via its Switch input`,async()=>{let e=n.getByTestId(I(`notify`)),t=n.getByTestId(`${m.baseItemSwitch}-native-input`);await w(t).not.toBeChecked(),await E.click(e),await w(t).toBeChecked()}),await t(`contentRender replaces the default ItemContent`,async()=>{let e=n.getByTestId(N);await w(D(e).getByTestId(P)).toBeVisible(),await w(D(e).queryByTestId(m.baseItemLabel)).toBeNull()}),await t(`search: typing filters items by content option`,async()=>{let e=n.getByTestId(L);await E.click(e),await E.type(e,`Analyt`),await w(n.getByTestId(I(`b`))).toBeVisible(),await w(n.queryByTestId(I(`a`))).toBeNull(),await E.clear(e),await w(n.getByTestId(I(`a`))).toBeVisible()}),await t(`keyboard: root is focusable, ArrowDown moves focus off the root into the list`,async()=>{r.focus(),await w(r).toHaveFocus(),await E.keyboard(`{ArrowDown}`),await w(r).not.toHaveFocus()})}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <InteractionScenario />,
  play: async ({
    canvasElement,
    step
  }) => {
    onClickA.mockClear();
    onClickB.mockClear();
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.list.root);
    await step('renders root', async () => {
      await expect(root).toBeVisible();
    });
    await step('click: item with onClick fires its callback and selects it (multiple mode)', async () => {
      const overview = canvas.getByTestId(itemId('a'));
      await userEvent.click(overview);
      expect(onClickA).toHaveBeenCalledTimes(1);
      await expect(overview).toHaveAttribute('data-checked', 'true');
    });
    await step('click: second item toggles independently and keeps the first checked', async () => {
      const analytics = canvas.getByTestId(itemId('b'));
      await userEvent.click(analytics);
      expect(onClickB).toHaveBeenCalledTimes(1);
      await expect(analytics).toHaveAttribute('data-checked', 'true');
      await expect(canvas.getByTestId(itemId('a'))).toHaveAttribute('data-checked', 'true');
    });
    await step('click: clicking a selected item deselects it', async () => {
      const overview = canvas.getByTestId(itemId('a'));
      await userEvent.click(overview);
      await expect(overview).not.toHaveAttribute('data-checked', 'true');
    });
    await step('inactive item is non-interactive (data-non-pointer on the row, never checked)', async () => {
      // data-inactive стоит на внешней обёртке (itemWrapper); адресуемый <li> несёт data-non-pointer.
      const dim = canvas.getByTestId(itemId('dim'));
      await expect(dim).toHaveAttribute('data-non-pointer', 'true');
      await expect(dim).not.toHaveAttribute('data-checked', 'true');
    });
    await step('hidden item is absent from the DOM', async () => {
      await expect(canvas.queryByTestId(itemId('ghost'))).toBeNull();
    });
    await step('switch item toggles selection via its Switch input', async () => {
      // У switch-item состояние выбора несёт сам Switch (его нативный input), а не data-checked на <li>.
      const notify = canvas.getByTestId(itemId('notify'));
      const switchInput = canvas.getByTestId(\`\${INTERNAL_TEST_IDS.baseItemSwitch}-native-input\`);
      await expect(switchInput).not.toBeChecked();
      await userEvent.click(notify);
      await expect(switchInput).toBeChecked();
    });
    await step('contentRender replaces the default ItemContent', async () => {
      const crRoot = canvas.getByTestId(CONTENT_RENDER_ROOT);
      await expect(within(crRoot).getByTestId(CONTENT_RENDER_CUSTOM)).toBeVisible();
      await expect(within(crRoot).queryByTestId(INTERNAL_TEST_IDS.baseItemLabel)).toBeNull();
    });
    await step('search: typing filters items by content option', async () => {
      const input = canvas.getByTestId(SEARCH_INPUT_TEST_ID);
      await userEvent.click(input);
      await userEvent.type(input, 'Analyt');
      await expect(canvas.getByTestId(itemId('b'))).toBeVisible();
      await expect(canvas.queryByTestId(itemId('a'))).toBeNull();
      await userEvent.clear(input);
      await expect(canvas.getByTestId(itemId('a'))).toBeVisible();
    });
    await step('keyboard: root is focusable, ArrowDown moves focus off the root into the list', async () => {
      root.focus();
      await expect(root).toHaveFocus();
      await userEvent.keyboard('{ArrowDown}');
      await expect(root).not.toHaveFocus();
    });
  }
}`,...R.parameters?.docs?.source}}},z=[`InteractionTest`]}))();export{R as InteractionTest,z as __namedExportsOrder,O as default};
//# sourceMappingURL=List.InteractionTest.stories-CXlIK2uA.js.map