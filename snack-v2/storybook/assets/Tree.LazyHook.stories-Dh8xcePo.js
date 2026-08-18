import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{b as i,o as a,r as o,t as s}from"./src-HHdaSP6w.js";import{i as c,n as l,r as u,t as d}from"./stories.module-CAXCbai2.js";function f(){let[e,t]=(0,p.useState)(y),[n,r]=(0,p.useState)([]),s=async n=>{let r=[{id:`${n.id}-1`,title:`Loaded 1`,"data-test-id":u.tree.nodes.loaded1}],i=e.map(e=>e.id===n.id&&`nested`in e?{...e,nested:r}:e);return t(i),{preloadedChildren:r,updatedTree:i}},{selected:c,onSelect:l}=o({onDataLoad:s,onSelect:({node:e,isSelected:t})=>t?{added:[],removed:[e.id]}:{added:[e.id],removed:[]}});return(0,m.jsx)(a,{data:e,selectionMode:i.Multiple,selected:c,onSelect:l,expandedNodes:n,onExpand:r,onDataLoad:s,"data-test-id":u.tree.root})}var p,m,h,g,_,v,y,b,x,S;t((()=>{s(),p=e(n(),1),d(),c(),m=r(),{expect:h,userEvent:g,waitFor:_,within:v}=__STORYBOOK_MODULE_TEST__,y=[{id:`lazy-parent`,title:`Lazy parent`,"data-test-id":u.tree.nodes.fruits,nested:[]},{id:`sibling`,title:`Sibling leaf`,"data-test-id":u.tree.nodes.apple}],b={title:`Snack/Data display/Tree/Tests/LazyHook`,id:`components-tree-tests-lazyhook`,component:a,parameters:{controls:{disable:!0}}},x={tags:[`test`,`dev`],render:()=>(0,m.jsx)(`div`,{className:l.story,children:(0,m.jsx)(f,{})}),play:async({canvasElement:e,step:t})=>{let n=v(e),r=e=>{let t=n.getByTestId(e);return v(t).getByTestId(u.treeNode.chevron)};await t(`expand lazy-parent через клик по chevron: triggers Tree.onDataLoad`,async()=>{await g.click(r(u.tree.nodes.fruits)),await _(()=>h(n.getByTestId(u.tree.nodes.loaded1)).toBeInTheDocument())}),await t(`collapse lazy-parent через ArrowLeft с фокусом на строке`,async()=>{let e=n.getByTestId(u.tree.nodes.fruits);v(e).getAllByTestId(u.treeNode.item)[0].focus(),await g.keyboard(`{ArrowLeft}`),await _(()=>h(n.queryByTestId(u.tree.nodes.loaded1)).not.toBeInTheDocument())}),await t(`expand повторно через ArrowRight: focus на chevron + click`,async()=>{await g.click(r(u.tree.nodes.fruits)),await _(()=>h(n.getByTestId(u.tree.nodes.loaded1)).toBeInTheDocument())})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.story}>
      <LazyTree />
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const getChevron = (nodeTestId: string) => {
      const nodeEl = canvas.getByTestId(nodeTestId);
      return within(nodeEl).getByTestId(TEST_IDS.treeNode.chevron);
    };
    await step('expand lazy-parent через клик по chevron: triggers Tree.onDataLoad', async () => {
      await userEvent.click(getChevron(TEST_IDS.tree.nodes.fruits));
      await waitFor(() => expect(canvas.getByTestId(TEST_IDS.tree.nodes.loaded1)).toBeInTheDocument());
    });
    await step('collapse lazy-parent через ArrowLeft с фокусом на строке', async () => {
      const nodeEl = canvas.getByTestId(TEST_IDS.tree.nodes.fruits);
      const row = within(nodeEl).getAllByTestId(TEST_IDS.treeNode.item)[0];
      row.focus();
      await userEvent.keyboard('{ArrowLeft}');
      await waitFor(() => expect(canvas.queryByTestId(TEST_IDS.tree.nodes.loaded1)).not.toBeInTheDocument());
    });
    await step('expand повторно через ArrowRight: focus на chevron + click', async () => {
      // ArrowRight на свёрнутом parent'е не разворачивает (handleKeyDown gate'ит
      // на trigger). Раскрываем тем же chevron-кликом.
      await userEvent.click(getChevron(TEST_IDS.tree.nodes.fruits));
      await waitFor(() => expect(canvas.getByTestId(TEST_IDS.tree.nodes.loaded1)).toBeInTheDocument());
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`LazyHook`]}))();export{x as LazyHook,S as __namedExportsOrder,b as default};
//# sourceMappingURL=Tree.LazyHook.stories-Dh8xcePo.js.map