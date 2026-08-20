import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{Dt as n,Nt as r,kt as i,t as a}from"./system-D2QEyDJQ.js";import{b as o,o as s,t as c}from"./src-DmvtJ2_a.js";import{i as l,n as u,r as d,t as f}from"./stories.module-mV0sFAJR.js";var p,m,h,g,_,v,y;e((()=>{a(),c(),f(),l(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g=[{id:`parent`,title:`Parent (custom icons)`,"data-test-id":d.tree.nodes.fruits,expandedIcon:(0,p.jsx)(n,{}),collapsedIcon:(0,p.jsx)(i,{}),nested:[{id:`leaf-custom`,title:`Leaf (custom icon)`,icon:(0,p.jsx)(r,{}),"data-test-id":d.tree.nodes.apple},{id:`leaf-star`,title:`Leaf (default icon)`,"data-test-id":d.tree.nodes.citrus}]}],_={title:`Snack/Data display/Tree/Tests/CustomIcons`,id:`components-tree-tests-customicons`,component:s,parameters:{controls:{disable:!0}}},v={tags:[`test`,`dev`],args:{data:g,selectionMode:o.Single,expandedNodes:[`parent`],"data-test-id":d.tree.root},render:e=>(0,p.jsx)(`div`,{className:u.story,children:(0,p.jsx)(s,{...e})}),play:async({canvasElement:e})=>{let t=h(e).getByTestId(d.tree.root);m(t).toBeDefined()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    data: DATA,
    selectionMode: SELECTION_MODE.Single,
    expandedNodes: ['parent'],
    'data-test-id': TEST_IDS.tree.root
  },
  render: args => <div className={styles.story}>
      <Tree {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.tree.root);
    expect(root).toBeDefined();
  }
}`,...v.parameters?.docs?.source}}},y=[`CustomIcons`]}))();export{v as CustomIcons,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Tree.CustomIcons.stories-Dw60dQ86.js.map