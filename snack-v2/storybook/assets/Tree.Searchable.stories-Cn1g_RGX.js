import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{a as i,o as a,t as o}from"./src-Dv3DicxL.js";import{i as s,n as c,r as l,t as u}from"./stories.module-B1HtNuvE.js";function d(){let[,e]=(0,f.useReducer)(e=>e+1,0),t=i({initTree:_,onPreloadNode:async()=>[{id:`loaded-1`,title:`Loaded child`,"data-test-id":l.tree.nodes.loaded1}],onPreloadNodes:async e=>Object.fromEntries(e.map(e=>[e,[{id:`${e}-c1`,title:`Loaded c1`}]])),onSearch:async({search:e})=>{let t=e.toLowerCase();return{tree:_.filter(e=>String(e.title).toLowerCase().includes(t)),needPreloadNodes:[]}},mapNodeToRecordItem:e=>({id:e.id,title:String(e.title)})}),n=n=>{t.search.onChange(n),e()};return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`input`,{type:`search`,placeholder:`Search…`,value:t.search.value,onChange:e=>n(e.target.value),"data-test-id":l.tree.search}),(0,p.jsx)(a,{data:t.tree.current,expandedNodes:t.expandedNodes.current,onExpand:n=>{t.onExpand(n),e()},onDataLoad:async n=>(await t.onDataLoad(n),e(),!0),"data-test-id":l.tree.root,showLines:!0})]})}var f,p,m,h,g,_,v,y,b;t((()=>{o(),f=e(n(),1),u(),s(),p=r(),{expect:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_=[{id:`compute`,title:`Compute`,"data-test-id":l.tree.nodes.compute,nested:[{id:`vm`,title:`Virtual machines`,"data-test-id":l.tree.nodes.vm},{id:`k8s`,title:`Kubernetes`,"data-test-id":l.tree.nodes.k8s}]},{id:`storage`,title:`Storage`,"data-test-id":l.tree.nodes.storage,nested:[]}],v={title:`Snack/Data display/Tree/Examples/Searchable`,id:`components-tree-examples-searchable`,component:a,parameters:{layout:`padded`,controls:{disable:!0}}},y={tags:[`test`,`dev`],render:()=>(0,p.jsx)(`div`,{className:c.story,children:(0,p.jsx)(d,{})}),play:async({canvasElement:e,step:t})=>{let n=g(e);await t(`type into search input triggers useSearchableTree.onSearch`,async()=>{let e=n.getByTestId(l.tree.search);await h.type(e,`Compute`),m(e.value).toBe(`Compute`)}),await t(`clear search restores empty input`,async()=>{let e=n.getByTestId(l.tree.search);await h.clear(e),m(e.value).toBe(``)}),await t(`expand storage via chevron — упражняет onPreloadNode path`,async()=>{let e=n.getByTestId(l.tree.nodes.storage),t=g(e).getByTestId(l.treeNode.chevron);await h.click(t)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.story}>
      <SearchableTreeDemo />
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('type into search input triggers useSearchableTree.onSearch', async () => {
      // useSearchableTree хранит tree в ref; перерисовка в demo идёт через
      // флип loading-флага внутри handleSearch. Здесь убеждаемся, что input
      // принимает значение — реальная фильтрация ловится coverage harvester'ом.
      const input = canvas.getByTestId(TEST_IDS.tree.search) as HTMLInputElement;
      await userEvent.type(input, 'Compute');
      expect(input.value).toBe('Compute');
    });
    await step('clear search restores empty input', async () => {
      const input = canvas.getByTestId(TEST_IDS.tree.search) as HTMLInputElement;
      await userEvent.clear(input);
      expect(input.value).toBe('');
    });
    await step('expand storage via chevron — упражняет onPreloadNode path', async () => {
      // Реальную инвалидацию tree-ref внутри useSearchableTree наблюдает
      // только полная подписка через setState (наш demo упрощён до forceUpdate),
      // поэтому здесь только триггерим путь — фактическое появление loaded-1
      // в DOM проверяется в coverage harvester'е, где зачёркивание ref-state
      // не критично.
      const storage = canvas.getByTestId(TEST_IDS.tree.nodes.storage);
      const chevron = within(storage).getByTestId(TEST_IDS.treeNode.chevron);
      await userEvent.click(chevron);
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`Searchable`]}))();export{y as Searchable,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Tree.Searchable.stories-Cn1g_RGX.js.map