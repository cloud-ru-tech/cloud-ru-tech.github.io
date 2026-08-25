import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{a as i,n as a,t as o}from"./src-DjW2V1SW.js";import{d as s,f as c,g as l,l as u,m as d,o as f,t as p}from"./src-Dv-_YCV_.js";import{i as m,n as h,r as g,t as _}from"./stories.module-CHoTShD4.js";function v(){let[e,t]=(0,y.useState)(``),n=(0,y.useMemo)(()=>{let t=s(d({tree:T,searchOptions:{query:e}}),{caseSensitive:!1}),n=[];return u(t,n,(t,n,r)=>{let i={...t,title:e&&t.id.includes(e.toLowerCase())?`★ ${t.title}`:t.title};if(`nested`in t&&t.nested)return i.nested=[],r.push(i),i.nested;r.push(i)}),n},[e]),r=(0,y.useMemo)(()=>l(n),[n]),i=(0,y.useMemo)(()=>c({tree:n,searchOptions:{id:`vm`}}),[n]);return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(a,{value:e,onChange:t,placeholder:`Filter…`,"data-test-id":g.tree.search}),(0,b.jsx)(f,{data:n,expandedNodes:r,"data-test-id":g.tree.root,showLines:!0}),(0,b.jsx)(`div`,{"data-test-id":g.tree.vmHit,children:i?`vm: hit`:`vm: miss`})]})}var y,b,x,S,C,w,T,E,D,O;t((()=>{o(),p(),y=e(n(),1),_(),m(),b=r(),{expect:x,userEvent:S,waitFor:C,within:w}=__STORYBOOK_MODULE_TEST__,T=[{id:`compute`,title:`Compute`,nested:[{id:`vm`,title:`Virtual machines`,"data-test-id":g.tree.nodes.vm},{id:`k8s`,title:`Kubernetes`,"data-test-id":g.tree.nodes.k8s}]},{id:`storage`,title:`Storage`,nested:[{id:`s3`,title:`Object storage`,"data-test-id":g.tree.nodes.s3},{id:`block`,title:`Block storage`,"data-test-id":g.tree.nodes.block}]}],E={title:`Snack/Data display/Tree/Examples/LocalSearch`,id:`components-tree-examples-localsearch`,component:f,parameters:{layout:`padded`,controls:{disable:!0}}},D={tags:[`test`,`dev`],render:()=>(0,b.jsx)(`div`,{className:h.story,children:(0,b.jsx)(v,{})}),play:async({canvasElement:e,step:t})=>{let n=w(e);await t(`type → triggers local filter + expand all matched`,async()=>{let e=n.getByTestId(i.input);await S.type(e,`storage`),await C(()=>{x(n.queryByTestId(g.tree.vmHit)).toHaveTextContent(`vm: miss`)})}),await t(`clear → restores full tree + vm hit`,async()=>{let e=n.getByTestId(i.input);await S.clear(e),await C(()=>{x(n.queryByTestId(g.tree.vmHit)).toHaveTextContent(`vm: hit`)})})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.story}>
      <LocalSearchTree />
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('type → triggers local filter + expand all matched', async () => {
      const input = canvas.getByTestId(SEARCH_TEST_IDS.input);
      await userEvent.type(input, 'storage');
      await waitFor(() => {
        expect(canvas.queryByTestId(TEST_IDS.tree.vmHit)).toHaveTextContent('vm: miss');
      });
    });
    await step('clear → restores full tree + vm hit', async () => {
      const input = canvas.getByTestId(SEARCH_TEST_IDS.input);
      await userEvent.clear(input);
      await waitFor(() => {
        expect(canvas.queryByTestId(TEST_IDS.tree.vmHit)).toHaveTextContent('vm: hit');
      });
    });
  }
}`,...D.parameters?.docs?.source}}},O=[`LocalSearch`]}))();export{D as LocalSearch,O as __namedExportsOrder,E as default};
//# sourceMappingURL=Tree.LocalSearch.stories-DznIrG9n.js.map