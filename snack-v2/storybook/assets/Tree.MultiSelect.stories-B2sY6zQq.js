import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{b as n,o as r,t as i}from"./src-D2i7cRMe.js";import{i as a,n as o,r as s,t as c}from"./stories.module-DlPpPcSt.js";import{n as l,t as u}from"./fixtures-C30S3E8l.js";var d,f,p,m,h,g,_,v,y;e((()=>{i(),l(),c(),a(),d=t(),{expect:f,fn:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g=`-native-input`,_={title:`Snack/Data display/Tree/Tests/MultiSelect`,id:`components-tree-tests-multiselect`,component:r,parameters:{controls:{disable:!0}}},v={tags:[`test`,`dev`],args:{data:u,selectionMode:n.Multiple,expandedNodes:[`fruits`,`citrus`],"data-test-id":s.tree.root,onNodeClick:p(),onSelect:p(),onExpand:p()},render:e=>(0,d.jsx)(`div`,{className:o.story,children:(0,d.jsx)(r,{...e})}),play:async({args:e,canvasElement:t,step:n})=>{let r=h(t),i=async e=>{let t=r.getByTestId(e),n=h(t).getAllByTestId(`${s.treeNode.checkbox}${g}`)[0];await m.click(n)};await n(`click checkbox on leaf: triggers handleSelect → onSelect (uncontrolled multi)`,async()=>{await i(s.tree.nodes.apple),f(e.onSelect).toHaveBeenCalled()}),await n(`click checkbox on parent: cascade to descendants`,async()=>{await i(s.tree.nodes.fruits)}),await n(`click checkbox on nested leaf: parent demoted`,async()=>{await i(s.tree.nodes.orange)}),await n(`click row in multi mode: handleClick → onNodeClick (no auto-select)`,async()=>{let t=r.getByTestId(s.tree.nodes.citrus),n=h(t).getAllByTestId(s.treeNode.item)[0];await m.click(n),f(e.onNodeClick).toHaveBeenCalled()})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    data: SAMPLE_TREE,
    selectionMode: SELECTION_MODE.Multiple,
    expandedNodes: ['fruits', 'citrus'],
    'data-test-id': TEST_IDS.tree.root,
    onNodeClick: fn(),
    onSelect: fn(),
    onExpand: fn()
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
    const clickCheckbox = async (nodeTestId: string) => {
      const nodeEl = canvas.getByTestId(nodeTestId);
      const nativeInput = within(nodeEl).getAllByTestId(\`\${TEST_IDS.treeNode.checkbox}\${NATIVE_INPUT_SUFFIX}\`)[0];
      await userEvent.click(nativeInput);
    };
    await step('click checkbox on leaf: triggers handleSelect → onSelect (uncontrolled multi)', async () => {
      await clickCheckbox(TEST_IDS.tree.nodes.apple);
      expect(args.onSelect).toHaveBeenCalled();
    });
    await step('click checkbox on parent: cascade to descendants', async () => {
      await clickCheckbox(TEST_IDS.tree.nodes.fruits);
    });
    await step('click checkbox on nested leaf: parent demoted', async () => {
      await clickCheckbox(TEST_IDS.tree.nodes.orange);
    });
    await step('click row in multi mode: handleClick → onNodeClick (no auto-select)', async () => {
      const citrus = canvas.getByTestId(TEST_IDS.tree.nodes.citrus);
      const row = within(citrus).getAllByTestId(TEST_IDS.treeNode.item)[0];
      await userEvent.click(row);
      expect(args.onNodeClick).toHaveBeenCalled();
    });
  }
}`,...v.parameters?.docs?.source}}},y=[`MultiSelect`]}))();export{v as MultiSelect,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Tree.MultiSelect.stories-B2sY6zQq.js.map