import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{b as n,o as r,t as i}from"./src-Dv3DicxL.js";import{i as a,n as o,r as s,t as c}from"./stories.module-B1HtNuvE.js";var l,u,d,f,p,m,h,g,_;e((()=>{i(),c(),a(),l=t(),{expect:u,fireEvent:d,fn:f,within:p}=__STORYBOOK_MODULE_TEST__,m=[{id:`docs`,title:`Docs`,"data-test-id":s.tree.nodes.fruits,nested:[{id:`readme`,title:`Readme`,href:`https://example.invalid/readme`,"data-test-id":s.tree.nodes.apple},{id:`guide`,title:`Guide`,href:`https://example.invalid/guide`,"data-test-id":s.tree.nodes.citrus}]}],h={title:`Snack/Data display/Tree/Tests/Anchor`,id:`components-tree-tests-anchor`,component:r,parameters:{controls:{disable:!0}}},g={tags:[`test`,`dev`],args:{data:m,selectionMode:n.Single,expandedNodes:[`docs`],"data-test-id":s.tree.root,onNodeClick:f(),onSelect:f()},render:e=>(0,l.jsx)(`div`,{className:o.story,children:(0,l.jsx)(r,{...e})}),play:async({args:e,canvasElement:t,step:n})=>{let r=p(t);await n(`plain click on href link: handleAnchorClick → handleClick (onSelect fires)`,async()=>{let t=r.getByTestId(s.tree.nodes.apple),n=p(t).getByTestId(s.treeNode.link);n.addEventListener(`click`,e=>e.preventDefault(),{once:!0}),d.click(n),u(e.onSelect).toHaveBeenCalled()}),await n(`cmd-click on href link: handleAnchorClick early-returns (metaKey branch)`,async()=>{let e=r.getByTestId(s.tree.nodes.citrus),t=p(e).getByTestId(s.treeNode.link);t.addEventListener(`click`,e=>e.preventDefault(),{once:!0}),d.click(t,{metaKey:!0})}),await n(`middle-click (button=1) on href link: also early-returns`,async()=>{let e=r.getByTestId(s.tree.nodes.citrus),t=p(e).getByTestId(s.treeNode.link);t.addEventListener(`click`,e=>e.preventDefault(),{once:!0}),d.click(t,{button:1})})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    data: DATA,
    selectionMode: SELECTION_MODE.Single,
    expandedNodes: ['docs'],
    'data-test-id': TEST_IDS.tree.root,
    onNodeClick: fn(),
    onSelect: fn()
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
    await step('plain click on href link: handleAnchorClick → handleClick (onSelect fires)', async () => {
      const readme = canvas.getByTestId(TEST_IDS.tree.nodes.apple);
      const link = within(readme).getByTestId(TEST_IDS.treeNode.link);
      link.addEventListener('click', e => e.preventDefault(), {
        once: true
      });
      fireEvent.click(link);
      expect(args.onSelect).toHaveBeenCalled();
    });
    await step('cmd-click on href link: handleAnchorClick early-returns (metaKey branch)', async () => {
      const guide = canvas.getByTestId(TEST_IDS.tree.nodes.citrus);
      const link = within(guide).getByTestId(TEST_IDS.treeNode.link);
      link.addEventListener('click', e => e.preventDefault(), {
        once: true
      });
      fireEvent.click(link, {
        metaKey: true
      });
    });
    await step('middle-click (button=1) on href link: also early-returns', async () => {
      const guide = canvas.getByTestId(TEST_IDS.tree.nodes.citrus);
      const link = within(guide).getByTestId(TEST_IDS.treeNode.link);
      link.addEventListener('click', e => e.preventDefault(), {
        once: true
      });
      fireEvent.click(link, {
        button: 1
      });
    });
  }
}`,...g.parameters?.docs?.source}}},_=[`Anchor`]}))();export{g as Anchor,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=Tree.Anchor.stories-C0ejFZyL.js.map