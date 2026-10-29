import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{f as i,p as a,t as o,u as s}from"./iframe-szaSCk8V.js";import{Ft as c,k as l,pt as u,t as d}from"./system-leSQpqQe.js";import{a as f,t as p,w as m}from"./src-BZOMo1zg2.js";import{n as h,t as g}from"./testIds-1v137Tcu.js";import{n as _,t as v}from"./stories.module-CafaY64j.js";function y({content:e}){let t=e&&typeof e==`object`&&`label`in e?e.label:``;return(0,T.jsxs)(`span`,{"data-test-id":I,children:[`Custom · `,t]})}function b({contentNode:e,"data-test-id":t,tabIndex:n,onClick:r,onKeyDown:i,onFocus:a,itemRef:o}){return(0,T.jsx)(`div`,{"data-test-id":z,children:(0,T.jsx)(`li`,{"data-test-id":t,ref:o,tabIndex:n,onClick:r,onKeyDown:i,onFocus:a,role:`menuitem`,children:e})})}function x({label:e}){return(0,T.jsx)(`div`,{"data-test-id":U,children:e})}function S(e,t){let n=`content`in e?e.content:void 0;return typeof n==`object`&&n&&`label`in n?String(n.label).toLowerCase().includes(t.toLowerCase()):!0}function C(){let[e,t]=(0,w.useState)(``),[n,r]=(0,w.useState)([]),o=N.filter(t=>S(t,e));return(0,T.jsx)(i,{children:(0,T.jsx)(a,{width:`narrow`,children:(0,T.jsxs)(s,{align:`center`,children:[(0,T.jsx)(`div`,{className:_.listFrame,children:(0,T.jsx)(f,{"data-test-id":g.list.root,items:o,pinTop:P,size:`m`,marker:!0,selection:{mode:`multiple`,value:n,onChange:r},search:{placeholder:`Search`,value:e,onChange:t}})}),(0,T.jsx)(`div`,{className:_.listFrame,children:(0,T.jsx)(f,{"data-test-id":F,items:L,size:`m`,contentRender:y})}),(0,T.jsx)(`div`,{className:_.listFrame,children:(0,T.jsx)(f,{"data-test-id":R,items:V,size:`m`,itemRender:b})}),(0,T.jsx)(`div`,{className:_.listFrame,children:(0,T.jsx)(f,{"data-test-id":H,items:W,size:`m`,groupItemRender:x})})]})})})}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;t((()=>{d(),p(),w=e(n(),1),o(),h(),v(),T=r(),{expect:E,fn:D,userEvent:O,within:k}=__STORYBOOK_MODULE_TEST__,A={title:`Snack/Data display/List/List/Tests/Interaction`,id:`components-list-list-tests-interaction`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{"data-test-id":g.list.root}},j=D(),M=D(),N=[{id:`a`,beforeContent:(0,T.jsx)(u,{}),content:{label:`Overview`},onClick:j},{id:`b`,beforeContent:(0,T.jsx)(l,{}),content:{label:`Analytics`},onClick:M},{id:`c`,content:{label:`Billing`}},{id:`notify`,switch:!0,content:{label:`Notifications`}},{id:`dim`,inactive:!0,content:{label:`Inactive row`}},{id:`ghost`,hidden:!0,content:{label:`Hidden row`}}],P=[{id:`pinned`,beforeContent:(0,T.jsx)(c,{}),content:{label:`Pinned`}}],F=`list-content-render`,I=`list-content-render__custom`,L=[{id:`cr`,content:{label:`Original option`}}],R=`list-item-render`,z=`list-item-render__shell`,B=`list-item-render__wrap`,V=[{id:`ir`,content:{label:`Shell option`},itemWrapRender:e=>(0,T.jsx)(`div`,{"data-test-id":B,children:e})}],H=`list-group-render`,U=`list-group-render__shell`,W=[{type:`group`,label:`Custom group`,items:[{id:`g1`,content:{label:`Inside group`}}]}],G=e=>`${m.baseItem}_${e}`,K=`search__field-input`,q={tags:[`test`,`dev`],render:()=>(0,T.jsx)(C,{}),play:async({canvasElement:e,step:t})=>{j.mockClear(),M.mockClear();let n=k(e),r=n.getByTestId(g.list.root);await t(`renders root`,async()=>{await E(r).toBeVisible()}),await t(`click: item with onClick fires its callback and selects it (multiple mode)`,async()=>{let e=n.getByTestId(G(`a`));await O.click(e),E(j).toHaveBeenCalledTimes(1),await E(e).toHaveAttribute(`data-checked`,`true`)}),await t(`click: second item toggles independently and keeps the first checked`,async()=>{let e=n.getByTestId(G(`b`));await O.click(e),E(M).toHaveBeenCalledTimes(1),await E(e).toHaveAttribute(`data-checked`,`true`),await E(n.getByTestId(G(`a`))).toHaveAttribute(`data-checked`,`true`)}),await t(`click: clicking a selected item deselects it`,async()=>{let e=n.getByTestId(G(`a`));await O.click(e),await E(e).not.toHaveAttribute(`data-checked`,`true`)}),await t(`inactive item is non-interactive (data-non-pointer on the row, never checked)`,async()=>{let e=n.getByTestId(G(`dim`));await E(e).toHaveAttribute(`data-non-pointer`,`true`),await E(e).not.toHaveAttribute(`data-checked`,`true`)}),await t(`hidden item is absent from the DOM`,async()=>{await E(n.queryByTestId(G(`ghost`))).toBeNull()}),await t(`switch item toggles selection via its Switch input`,async()=>{let e=n.getByTestId(G(`notify`)),t=n.getByTestId(`${m.baseItemSwitch}-native-input`);await E(t).not.toBeChecked(),await O.click(e),await E(t).toBeChecked()}),await t(`contentRender replaces the default ItemContent`,async()=>{let e=n.getByTestId(F);await E(k(e).getByTestId(I)).toBeVisible(),await E(k(e).queryByTestId(m.baseItemLabel)).toBeNull()}),await t(`itemRender replaces the default row shell; itemWrapRender still wraps it`,async()=>{let e=n.getByTestId(R),t=k(e).getByTestId(B),r=k(e).getByTestId(z);await E(r).toBeVisible(),await E(t).toBeVisible(),await E(t).toContainElement(r)}),await t(`groupItemRender replaces the default group header`,async()=>{let e=n.getByTestId(H);await E(k(e).getByTestId(U)).toBeVisible(),await E(k(e).getByTestId(U)).toHaveTextContent(`Custom group`)}),await t(`search: typing filters items by content option`,async()=>{let e=n.getByTestId(K);await O.click(e),await O.type(e,`Analyt`),await E(n.getByTestId(G(`b`))).toBeVisible(),await E(n.queryByTestId(G(`a`))).toBeNull(),await O.clear(e),await E(n.getByTestId(G(`a`))).toBeVisible()}),await t(`keyboard: root is focusable, ArrowDown moves focus off the root into the list`,async()=>{r.focus(),await E(r).toHaveFocus(),await O.keyboard(`{ArrowDown}`),await E(r).not.toHaveFocus()})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
    await step('itemRender replaces the default row shell; itemWrapRender still wraps it', async () => {
      const irRoot = canvas.getByTestId(ITEM_RENDER_ROOT);
      const wrap = within(irRoot).getByTestId(ITEM_RENDER_WRAP);
      const shell = within(irRoot).getByTestId(ITEM_RENDER_SHELL);
      await expect(shell).toBeVisible();
      await expect(wrap).toBeVisible();
      await expect(wrap).toContainElement(shell);
    });
    await step('groupItemRender replaces the default group header', async () => {
      const grRoot = canvas.getByTestId(GROUP_RENDER_ROOT);
      await expect(within(grRoot).getByTestId(GROUP_RENDER_SHELL)).toBeVisible();
      await expect(within(grRoot).getByTestId(GROUP_RENDER_SHELL)).toHaveTextContent('Custom group');
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
}`,...q.parameters?.docs?.source}}},J=[`InteractionTest`]}))();export{q as InteractionTest,J as __namedExportsOrder,A as default};
//# sourceMappingURL=List.InteractionTest.stories-DwOB5UBf.js.map