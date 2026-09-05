import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-C2bZDhP2.js";import{b as i,o as a,t as o,x as s}from"./src-Bqc2RF3n.js";import{n as c,t as l}from"./stories.module-CE8gEVPA.js";import{n as u,t as d}from"./fixtures-DuyH5JY4.js";var f,p,m,h,g,_,v,y,b,x;e((()=>{o(),r(),u(),l(),f=t(),p={title:`Snack/Data display/Tree`,id:`components-tree`,component:a,parameters:{controls:{disable:!0}}},m=[`fruits`,`vegetables`,`meat`,`citrus`],h=Object.values(s),g=()=>[{id:`more`,content:{label:`Action`},onClick:()=>void 0}],_=[{id:`root`,title:`Root`,nested:[{id:`leaf-1`,title:`Leaf 1`},{id:`branch`,title:`Branch`,nested:[{id:`leaf-2`,title:`Leaf 2`}]}]}],v=[{id:`long-parent`,title:`Группа с очень длинным заголовком, который не помещается в одну строку`,nested:[{id:`long-child`,title:`TimePickerDropdownWithAVeryLongComponentName`}]}],y=[1,2,3],b={tags:[`test`,`dev`],render:()=>(0,f.jsxs)(`div`,{className:c.matrix,children:[(0,f.jsx)(n,{sectionTitle:`Selection mode × selected state`,firstColumnHeader:`Mode`,columnHeaders:[`unselected`,`selected`],rows:[{variantLabel:`single`,cells:[(0,f.jsx)(`div`,{className:c.story,children:(0,f.jsx)(a,{data:d,expandedNodes:m,selectionMode:i.Single})},`single-u`),(0,f.jsx)(`div`,{className:c.story,children:(0,f.jsx)(a,{data:d,expandedNodes:m,selectionMode:i.Single,selected:`apple`})},`single-s`)]},{variantLabel:`multiple`,cells:[(0,f.jsx)(`div`,{className:c.story,children:(0,f.jsx)(a,{data:d,expandedNodes:m,selectionMode:i.Multiple,selected:[]})},`multi-u`),(0,f.jsx)(`div`,{className:c.story,children:(0,f.jsx)(a,{data:d,expandedNodes:m,selectionMode:i.Multiple,selected:[`apple`,`orange`]})},`multi-s`)]}]}),(0,f.jsx)(n,{sectionTitle:`Size`,firstColumnHeader:`Tree`,columnHeaders:h,rows:[{variantLabel:``,cells:h.map(e=>(0,f.jsx)(`div`,{className:c.story,children:(0,f.jsx)(a,{data:d,expandedNodes:m,size:e})},e))}]}),(0,f.jsx)(n,{sectionTitle:`Container flags`,firstColumnHeader:`Tree`,columnHeaders:[`showLines: false`,`showIcons: false`],rows:[{variantLabel:``,cells:[(0,f.jsx)(`div`,{className:c.story,children:(0,f.jsx)(a,{data:d,expandedNodes:m,showLines:!1})},`nolines`),(0,f.jsx)(`div`,{className:c.story,children:(0,f.jsx)(a,{data:d,expandedNodes:m,showIcons:!1})},`noicons`)]}]}),(0,f.jsx)(n,{sectionTitle:`States`,firstColumnHeader:`Tree`,columnHeaders:[`collapsed (default)`,`expanded`,`disabled parent`],rows:[{variantLabel:``,cells:[(0,f.jsx)(`div`,{className:c.story,children:(0,f.jsx)(a,{data:d})},`collapsed`),(0,f.jsx)(`div`,{className:c.story,children:(0,f.jsx)(a,{data:d,expandedNodes:m})},`expanded`),(0,f.jsx)(`div`,{className:c.story,children:(0,f.jsx)(a,{data:d,expandedNodes:[`meat`]})},`disabled`)]}]}),(0,f.jsx)(n,{sectionTitle:`Row actions`,firstColumnHeader:`Slot`,columnHeaders:[`Tree`],rows:[{variantLabel:`parentActions + nodeActions`,cells:[(0,f.jsx)(`div`,{className:c.story,children:(0,f.jsx)(a,{data:_,expandedNodes:[`root`,`branch`],parentActions:g,nodeActions:g})},`actions`)]}]}),(0,f.jsx)(n,{sectionTitle:`Title max lines (длинный заголовок в узкой колонке)`,firstColumnHeader:`titleMaxLines`,columnHeaders:y.map(String),rows:[{variantLabel:``,cells:y.map(e=>(0,f.jsx)(`div`,{className:c.storyNarrow,children:(0,f.jsx)(a,{data:v,expandedNodes:[`long-parent`],titleMaxLines:e})},e))}]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Selection mode × selected state' firstColumnHeader='Mode' columnHeaders={['unselected', 'selected']} rows={[{
      variantLabel: 'single',
      cells: [<div key='single-u' className={styles.story}>
                <Tree data={SAMPLE_TREE} expandedNodes={EXPANDED} selectionMode={SELECTION_MODE.Single} />
              </div>, <div key='single-s' className={styles.story}>
                <Tree data={SAMPLE_TREE} expandedNodes={EXPANDED} selectionMode={SELECTION_MODE.Single} selected='apple' />
              </div>]
    }, {
      variantLabel: 'multiple',
      cells: [<div key='multi-u' className={styles.story}>
                <Tree data={SAMPLE_TREE} expandedNodes={EXPANDED} selectionMode={SELECTION_MODE.Multiple} selected={[]} />
              </div>, <div key='multi-s' className={styles.story}>
                <Tree data={SAMPLE_TREE} expandedNodes={EXPANDED} selectionMode={SELECTION_MODE.Multiple} selected={['apple', 'orange']} />
              </div>]
    }]} />

      <StoryTable sectionTitle='Size' firstColumnHeader='Tree' columnHeaders={sizes} rows={[{
      variantLabel: '',
      cells: sizes.map(size => <div key={size} className={styles.story}>
                <Tree data={SAMPLE_TREE} expandedNodes={EXPANDED} size={size} />
              </div>)
    }]} />

      <StoryTable sectionTitle='Container flags' firstColumnHeader='Tree' columnHeaders={['showLines: false', 'showIcons: false']} rows={[{
      variantLabel: '',
      cells: [<div key='nolines' className={styles.story}>
                <Tree data={SAMPLE_TREE} expandedNodes={EXPANDED} showLines={false} />
              </div>, <div key='noicons' className={styles.story}>
                <Tree data={SAMPLE_TREE} expandedNodes={EXPANDED} showIcons={false} />
              </div>]
    }]} />

      <StoryTable sectionTitle='States' firstColumnHeader='Tree' columnHeaders={['collapsed (default)', 'expanded', 'disabled parent']} rows={[{
      variantLabel: '',
      cells: [<div key='collapsed' className={styles.story}>
                <Tree data={SAMPLE_TREE} />
              </div>, <div key='expanded' className={styles.story}>
                <Tree data={SAMPLE_TREE} expandedNodes={EXPANDED} />
              </div>, <div key='disabled' className={styles.story}>
                <Tree data={SAMPLE_TREE} expandedNodes={['meat']} />
              </div>]
    }]} />

      <StoryTable sectionTitle='Row actions' firstColumnHeader='Slot' columnHeaders={['Tree']} rows={[{
      variantLabel: 'parentActions + nodeActions',
      cells: [<div key='actions' className={styles.story}>
                <Tree data={DEEP_TREE} expandedNodes={['root', 'branch']} parentActions={rowActions} nodeActions={rowActions} />
              </div>]
    }]} />

      <StoryTable sectionTitle='Title max lines (длинный заголовок в узкой колонке)' firstColumnHeader='titleMaxLines' columnHeaders={titleMaxLinesVariants.map(String)} rows={[{
      variantLabel: '',
      cells: titleMaxLinesVariants.map(lines => <div key={lines} className={styles.storyNarrow}>
                <Tree data={LONG_TITLE_TREE} expandedNodes={['long-parent']} titleMaxLines={lines} />
              </div>)
    }]} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,p as default};
//# sourceMappingURL=Tree.VisualMatrix.stories-roU_8lCd.js.map