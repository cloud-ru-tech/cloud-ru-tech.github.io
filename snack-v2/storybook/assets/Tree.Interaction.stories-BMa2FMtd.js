import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{b as n,o as r,t as i}from"./src-nykdDW82.js";import{i as a,n as o,r as s,t as c}from"./stories.module-csRp8Wp_.js";import{n as l,t as u}from"./fixtures-LbPiLTyz.js";var d,f,p,m,h,g,_,v,y;e((()=>{i(),l(),c(),a(),d=t(),{expect:f,fn:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Data display/Tree/Tests/Interaction`,id:`components-tree-tests-interaction`,component:r,parameters:{controls:{disable:!0}}},_={tags:[`test`,`dev`],args:{data:u,selectionMode:n.Single,"data-test-id":s.tree.root,onNodeClick:p(),onSelect:p(),onExpand:p(),parentActions:()=>[{option:`Rename`,onClick:p()}],nodeActions:()=>[{option:`Copy id`,onClick:p()}]},render:e=>(0,d.jsx)(`div`,{className:o.story,children:(0,d.jsx)(r,{...e})}),play:async({args:e,canvasElement:t,step:n})=>{let r=h(t),i=r.getByTestId(s.tree.root);await n(`click chevron: parent fires onExpand + aria-expanded=true`,async()=>{let t=r.getByTestId(s.tree.nodes.fruits),n=h(t).getByTestId(s.treeNode.item),i=h(t).getByTestId(s.treeNode.chevron);f(n.getAttribute(`aria-expanded`)).toBe(`false`),await m.click(i),f(e.onExpand).toHaveBeenCalled(),f(n.getAttribute(`aria-expanded`)).toBe(`true`)}),await n(`click row: leaf fires onNodeClick + onSelect`,async()=>{let t=await r.findByTestId(s.tree.nodes.apple),n=h(t).getByTestId(s.treeNode.item);await m.click(n),f(e.onNodeClick).toHaveBeenCalled(),f(e.onSelect).toHaveBeenCalled()}),await n(`keyboard: Tab + ArrowDown navigates inside tree`,async()=>{await m.tab(),await m.keyboard(`{ArrowDown}`),f(i.contains(document.activeElement)).toBe(!0)}),await n(`keyboard: ArrowUp moves focus back up`,async()=>{await m.keyboard(`{ArrowUp}`)}),await n(`keyboard: ArrowRight on leaf with actions activates row droplist trigger`,async()=>{let e=r.getByTestId(s.tree.nodes.apple),t=h(e).getByTestId(s.treeNode.item);t.focus(),await m.keyboard(`{ArrowRight}`),f(t.dataset.droplistActive).toBe(`true`)}),await n(`keyboard: ArrowDown opens droplist when trigger focused`,async()=>{await m.keyboard(`{ArrowDown}`)}),await n(`keyboard: ArrowUp closes droplist`,async()=>{await m.keyboard(`{ArrowUp}`)}),await n(`keyboard: ArrowLeft returns focus from trigger to row`,async()=>{await m.keyboard(`{ArrowLeft}`)}),await n(`keyboard: Space triggers handleSelect`,async()=>{await m.keyboard(` `),f(e.onSelect).toHaveBeenCalled()}),await n(`keyboard: Enter — то же поведение, что Space`,async()=>{await m.keyboard(`{Enter}`)}),await n(`keyboard: Escape blur-ит focused row`,async()=>{await m.keyboard(`{Escape}`)})}},v={tags:[`test`,`dev`],args:{data:u,selectionMode:n.Single,"data-test-id":s.tree.root},render:e=>(0,d.jsx)(`div`,{className:o.story,children:(0,d.jsx)(r,{...e})}),play:async({canvasElement:e,step:t})=>{let n=h(e);await t(`keyboard: ArrowRight без actions не активирует hover-state`,async()=>{let e=n.getByTestId(s.tree.nodes.fruits),t=h(e).getByTestId(s.treeNode.item);t.focus(),await m.keyboard(`{ArrowRight}`),f(t.dataset.droplistActive).toBeUndefined()})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    data: SAMPLE_TREE,
    selectionMode: SELECTION_MODE.Single,
    'data-test-id': TEST_IDS.tree.root,
    onNodeClick: fn(),
    onSelect: fn(),
    onExpand: fn(),
    parentActions: () => [{
      option: 'Rename',
      onClick: fn()
    }],
    nodeActions: () => [{
      option: 'Copy id',
      onClick: fn()
    }]
  },
  render: args => <div className={styles.story}>
      <Tree {...args} />
    </div>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const tree = canvas.getByTestId(TEST_IDS.tree.root);
    await step('click chevron: parent fires onExpand + aria-expanded=true', async () => {
      const fruits = canvas.getByTestId(TEST_IDS.tree.nodes.fruits);
      const fruitsRow = within(fruits).getByTestId(TEST_IDS.treeNode.item);
      const chevron = within(fruits).getByTestId(TEST_IDS.treeNode.chevron);
      expect(fruitsRow.getAttribute('aria-expanded')).toBe('false');
      await userEvent.click(chevron);
      expect(args.onExpand).toHaveBeenCalled();
      expect(fruitsRow.getAttribute('aria-expanded')).toBe('true');
    });
    await step('click row: leaf fires onNodeClick + onSelect', async () => {
      const apple = await canvas.findByTestId(TEST_IDS.tree.nodes.apple);
      const appleRow = within(apple).getByTestId(TEST_IDS.treeNode.item);
      await userEvent.click(appleRow);
      expect(args.onNodeClick).toHaveBeenCalled();
      expect(args.onSelect).toHaveBeenCalled();
    });
    await step('keyboard: Tab + ArrowDown navigates inside tree', async () => {
      await userEvent.tab();
      await userEvent.keyboard('{ArrowDown}');
      expect(tree.contains(document.activeElement)).toBe(true);
    });
    await step('keyboard: ArrowUp moves focus back up', async () => {
      await userEvent.keyboard('{ArrowUp}');
    });
    await step('keyboard: ArrowRight on leaf with actions activates row droplist trigger', async () => {
      const apple = canvas.getByTestId(TEST_IDS.tree.nodes.apple);
      const appleRow = within(apple).getByTestId(TEST_IDS.treeNode.item);
      appleRow.focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(appleRow.dataset.droplistActive).toBe('true');
    });
    await step('keyboard: ArrowDown opens droplist when trigger focused', async () => {
      await userEvent.keyboard('{ArrowDown}');
    });
    await step('keyboard: ArrowUp closes droplist', async () => {
      await userEvent.keyboard('{ArrowUp}');
    });
    await step('keyboard: ArrowLeft returns focus from trigger to row', async () => {
      await userEvent.keyboard('{ArrowLeft}');
    });
    await step('keyboard: Space triggers handleSelect', async () => {
      await userEvent.keyboard(' ');
      expect(args.onSelect).toHaveBeenCalled();
    });
    await step('keyboard: Enter — то же поведение, что Space', async () => {
      await userEvent.keyboard('{Enter}');
    });
    await step('keyboard: Escape blur-ит focused row', async () => {
      await userEvent.keyboard('{Escape}');
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    data: SAMPLE_TREE,
    selectionMode: SELECTION_MODE.Single,
    'data-test-id': TEST_IDS.tree.root
  },
  render: args => <div className={styles.story}>
      <Tree {...args} />
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('keyboard: ArrowRight без actions не активирует hover-state', async () => {
      const fruits = canvas.getByTestId(TEST_IDS.tree.nodes.fruits);
      const fruitsRow = within(fruits).getByTestId(TEST_IDS.treeNode.item);
      fruitsRow.focus();
      await userEvent.keyboard('{ArrowRight}');
      expect(fruitsRow.dataset.droplistActive).toBeUndefined();
    });
  }
}`,...v.parameters?.docs?.source}}},y=[`Interaction`,`InteractionWithoutActions`]}))();export{_ as Interaction,v as InteractionWithoutActions,y as __namedExportsOrder,g as default};
//# sourceMappingURL=Tree.Interaction.stories-BMa2FMtd.js.map