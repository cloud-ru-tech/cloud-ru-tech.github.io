import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{b as i,o as a,t as o,x as s}from"./src-D-src62A.js";import{i as c,n as l,r as u,t as d}from"./stories.module-CKlkLMZ-.js";function f(e){let[t,n]=(0,h.useState)(S),[r,o]=(0,h.useState)(`l3-selected`);return(0,g.jsx)(a,{data:x,expandedNodes:t,onExpand:n,selectionMode:i.Single,selected:r,onSelect:o,showToggle:!0,parentActions:C,nodeActions:C,...e})}function p(e){let[t,n]=(0,h.useState)(S),[r,o]=(0,h.useState)([`l3-selected`]);return(0,g.jsx)(a,{data:x,expandedNodes:t,onExpand:n,selectionMode:i.Multiple,selected:r,onSelect:o,parentActions:C,nodeActions:C,...e})}function m(e){let[t,n]=(0,h.useState)(S);return(0,g.jsx)(a,{data:x,expandedNodes:t,onExpand:n,parentActions:C,nodeActions:C,...e})}var h,g,_,v,y,b,x,S,C,w,T,E,D;t((()=>{o(),h=e(n(),1),d(),c(),g=r(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y=e=>({id:e,title:`Content text`}),b=(e,t=[],n)=>({id:e,title:`Content text`,disabled:n,nested:t}),x=[b(`l0-1`,[b(`l1-1`,[b(`l2-1`,[b(`l3-selected`,[b(`l4-1`,[b(`l5-1`,[b(`l6-1`,[y(`l7-1`),y(`l7-2`),y(`l7-3`),y(`l7-4`),b(`l7-5`),b(`l7-6`)])])])]),b(`l2-disabled`,[],!0)]),b(`l1-collapsed`)])]),b(`l0-disabled`,[],!0),b(`l0-last`)],S=[`l0-1`,`l1-1`,`l2-1`,`l3-selected`,`l4-1`,`l5-1`,`l6-1`],C=()=>[{id:`edit`,content:{label:`Edit`},onClick:()=>void 0},{id:`rename`,content:{label:`Rename`},onClick:()=>void 0},{id:`delete`,content:{label:`Delete`},onClick:()=>void 0}],w={title:`Snack/Data display/Tree/Examples/FigmaCompare`,id:`components-tree-examples-figmacompare`,component:a,parameters:{layout:`padded`,controls:{include:[`size`,`showLines`,`showIcons`]}},args:{showLines:!0,showIcons:!0},argTypes:{showLines:{control:`boolean`},showIcons:{control:`boolean`}}},T=Object.values(s),E={tags:[`dev`,`test`],render:({showLines:e,showIcons:t})=>(0,g.jsx)(`div`,{className:l.figmaMatrix,"data-test-id":u.tree.root,children:T.map(n=>{let r={size:n,showLines:!!e,showIcons:!!t};return(0,g.jsxs)(`div`,{className:l.figmaSizeBlock,children:[(0,g.jsxs)(`span`,{className:l.figmaSizeTitle,children:[`size = `,n]}),(0,g.jsxs)(`div`,{className:l.figmaRow,children:[(0,g.jsxs)(`div`,{className:l.figmaCell,children:[(0,g.jsx)(`span`,{className:l.figmaCellTitle,children:`Single`}),(0,g.jsx)(f,{...r})]}),(0,g.jsxs)(`div`,{className:l.figmaCell,children:[(0,g.jsx)(`span`,{className:l.figmaCellTitle,children:`Multi`}),(0,g.jsx)(p,{...r})]}),(0,g.jsxs)(`div`,{className:l.figmaCell,children:[(0,g.jsx)(`span`,{className:l.figmaCellTitle,children:`View`}),(0,g.jsx)(m,{...r})]})]})]},n)})}),play:async({canvasElement:e})=>{await _(v(e).getByTestId(u.tree.root)).toBeVisible()}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: ({
    showLines,
    showIcons
  }) => <div className={styles.figmaMatrix} data-test-id={TEST_IDS.tree.root}>
      {SIZES.map(size => {
      const shared: SharedProps = {
        size,
        showLines: Boolean(showLines),
        showIcons: Boolean(showIcons)
      };
      return <div key={size} className={styles.figmaSizeBlock}>
            <span className={styles.figmaSizeTitle}>size = {size}</span>
            <div className={styles.figmaRow}>
              <div className={styles.figmaCell}>
                <span className={styles.figmaCellTitle}>Single</span>
                <SingleTree {...shared} />
              </div>
              <div className={styles.figmaCell}>
                <span className={styles.figmaCellTitle}>Multi</span>
                <MultiTree {...shared} />
              </div>
              <div className={styles.figmaCell}>
                <span className={styles.figmaCellTitle}>View</span>
                <ViewTree {...shared} />
              </div>
            </div>
          </div>;
    })}
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.tree.root)).toBeVisible();
  }
}`,...E.parameters?.docs?.source}}},D=[`FigmaCompare`]}))();export{E as FigmaCompare,D as __namedExportsOrder,w as default};
//# sourceMappingURL=Tree.FigmaCompare.stories-BIEEj2_R.js.map