import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{o as i,t as a}from"./src-DOUc065X.js";import{i as o,n as s,r as c,t as l}from"./stories.module-BNx9g-1s.js";function u(){let[e,t]=(0,d.useState)(_),[n,r]=(0,d.useState)([]);return(0,f.jsx)(i,{data:e,expandedNodes:n,onExpand:r,onDataLoad:async e=>(await new Promise(e=>{setTimeout(e,0)}),t(t=>t.map(t=>t.id===e.id?{id:t.id,title:t.title,"data-test-id":t[`data-test-id`],nested:[{id:`${t.id}-vm1`,title:`vm-prod-01`,"data-test-id":`tree-node-${t.id}-vm1`},{id:`${t.id}-vm2`,title:`vm-prod-02`,"data-test-id":`tree-node-${t.id}-vm2`}]}:t)),!0),"data-test-id":c.tree.root,showLines:!0})}var d,f,p,m,h,g,_,v,y,b;t((()=>{a(),d=e(n(),1),l(),o(),f=r(),{expect:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_=[{id:`region-eu`,title:`EU region`,"data-test-id":c.tree.nodes.regionEu,nested:[]},{id:`region-ru`,title:`RU region`,"data-test-id":c.tree.nodes.regionRu,nested:[]}],v={title:`Snack/Data display/Tree/Examples/AsyncLoad`,id:`components-tree-examples-asyncload`,component:i,parameters:{layout:`padded`,controls:{disable:!0}}},y={tags:[`test`,`dev`],render:()=>(0,f.jsx)(`div`,{className:s.story,children:(0,f.jsx)(u,{})}),play:async({canvasElement:e,step:t})=>{let n=g(e);await t(`expand parent via chevron triggers onDataLoad`,async()=>{let e=n.getByTestId(c.tree.nodes.regionEu),t=g(e).getByTestId(c.treeNode.chevron);await m.click(t),await h(async()=>{await p(n.getByTestId(c.tree.nodes.regionEuVm1)).toBeInTheDocument()})})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.story}>
      <AsyncLoadTree />
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('expand parent via chevron triggers onDataLoad', async () => {
      const regionEu = canvas.getByTestId(TEST_IDS.tree.nodes.regionEu);
      const chevron = within(regionEu).getByTestId(TEST_IDS.treeNode.chevron);
      await userEvent.click(chevron);
      await waitFor(async () => {
        await expect(canvas.getByTestId(TEST_IDS.tree.nodes.regionEuVm1)).toBeInTheDocument();
      });
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`AsyncLoad`]}))();export{y as AsyncLoad,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Tree.AsyncLoad.stories-CdqAjleW.js.map