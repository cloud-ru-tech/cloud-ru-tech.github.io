import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{b as i,o as a,r as o,t as s,v as c}from"./src-DOUc065X.js";import{i as l,n as u,r as d,t as f}from"./stories.module-BNx9g-1s.js";function p(){let[e,t]=(0,m.useState)([`compute`,`storage`]),{selected:n,onSelect:r}=o({onDataLoad:async()=>({preloadedChildren:[],updatedTree:[],newTreeItemsRecord:{}}),onSelect:({node:e,isSelected:t})=>{let n=`nested`in e&&e.nested?c(e.nested):[],r=[e.id,...n];return t?{added:r,removed:[]}:{added:[],removed:r}}});return(0,h.jsx)(a,{data:b,selectionMode:i.Multiple,selected:n,onSelect:r,expandedNodes:e,onExpand:t,"data-test-id":d.tree.root,showLines:!0})}var m,h,g,_,v,y,b,x,S,C;t((()=>{s(),m=e(n(),1),f(),l(),h=r(),{expect:g,userEvent:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b=[{id:`compute`,title:`Compute`,"data-test-id":d.tree.nodes.compute,nested:[{id:`vm`,title:`Virtual machines`,"data-test-id":d.tree.nodes.vm},{id:`k8s`,title:`Kubernetes`,"data-test-id":d.tree.nodes.k8s}]},{id:`storage`,title:`Storage`,"data-test-id":d.tree.nodes.storage,nested:[{id:`s3`,title:`Object storage`,"data-test-id":d.tree.nodes.s3}]}],x={title:`Snack/Data display/Tree/Examples/MultiSelectCascade`,id:`components-tree-examples-multiselectcascade`,component:a,parameters:{layout:`padded`,controls:{disable:!0}}},S={tags:[`test`,`dev`],render:()=>(0,h.jsx)(`div`,{className:u.story,children:(0,h.jsx)(p,{})}),play:async({canvasElement:e,step:t})=>{let n=y(e),r=async e=>{let t=n.getByTestId(e),r=y(t).getAllByTestId(d.treeNode.item)[0];return r.focus(),await _.keyboard(` `),r};await t(`select parent compute → cascade добавляет compute+vm+k8s (allSelected branch)`,async()=>{let e=await r(d.tree.nodes.compute);await v(()=>{g(e.getAttribute(`aria-selected`)).toBe(`true`)})}),await t(`deselect parent compute → cascade удаляет всех (isSelected→remove branch)`,async()=>{let e=await r(d.tree.nodes.compute);await v(()=>{g(e.getAttribute(`aria-selected`)).toBe(`false`)})}),await t(`select только vm (child) → parent compute остаётся не выбранным (someSelected branch)`,async()=>{await r(d.tree.nodes.vm)}),await t(`select k8s → теперь оба child selected → parent compute auto-selected (allSelected→add parent branch)`,async()=>{await r(d.tree.nodes.k8s)}),await t(`deselect vm из полностью выбранного compute → parent теряет full (allSelected→remove parent branch)`,async()=>{await r(d.tree.nodes.vm)}),await t(`select storage (one child s3 only) → storage+s3 → s3 alone path`,async()=>{await r(d.tree.nodes.storage)})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.story}>
      <CascadeTree />
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const selectViaSpace = async (nodeTestId: string) => {
      const nodeEl = canvas.getByTestId(nodeTestId);
      const row = within(nodeEl).getAllByTestId(TEST_IDS.treeNode.item)[0];
      row.focus();
      await userEvent.keyboard(' ');
      return row;
    };
    await step('select parent compute → cascade добавляет compute+vm+k8s (allSelected branch)', async () => {
      const row = await selectViaSpace(TEST_IDS.tree.nodes.compute);
      await waitFor(() => {
        expect(row.getAttribute('aria-selected')).toBe('true');
      });
    });
    await step('deselect parent compute → cascade удаляет всех (isSelected→remove branch)', async () => {
      const row = await selectViaSpace(TEST_IDS.tree.nodes.compute);
      await waitFor(() => {
        expect(row.getAttribute('aria-selected')).toBe('false');
      });
    });
    await step('select только vm (child) → parent compute остаётся не выбранным (someSelected branch)', async () => {
      await selectViaSpace(TEST_IDS.tree.nodes.vm);
    });
    await step('select k8s → теперь оба child selected → parent compute auto-selected (allSelected→add parent branch)', async () => {
      await selectViaSpace(TEST_IDS.tree.nodes.k8s);
    });
    await step('deselect vm из полностью выбранного compute → parent теряет full (allSelected→remove parent branch)', async () => {
      await selectViaSpace(TEST_IDS.tree.nodes.vm);
    });
    await step('select storage (one child s3 only) → storage+s3 → s3 alone path', async () => {
      await selectViaSpace(TEST_IDS.tree.nodes.storage);
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`MultiSelectCascade`]}))();export{S as MultiSelectCascade,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Tree.MultiSelectCascade.stories-Dpv-0yQ9.js.map