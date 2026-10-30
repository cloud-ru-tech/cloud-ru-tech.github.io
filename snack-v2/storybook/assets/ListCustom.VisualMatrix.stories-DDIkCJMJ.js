import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D64B0jO2.js";import{U as i,t as a}from"./system-D0v5WTV5.js";import{S as o,a as s,t as c}from"./src-CMMg7gR32.js";import{d as l,f as u,h as d,t as f}from"./src-OX7jLiPv.js";import{n as p,t as m}from"./styles.module-BG1oDCwa.js";function h({selectionMode:e,checked:t,disabled:n}){return(0,_.jsx)(`div`,{className:p.listFrame,children:(0,_.jsx)(d,{selectionMode:e,checked:t,disabled:n,beforeContent:y.beforeContent,afterContent:y.afterContent,content:y.content})})}function g({items:e}){return(0,_.jsx)(`div`,{className:p.listFrame,children:(0,_.jsx)(s,{size:`s`,marker:!0,itemRender:l,groupItemRender:u,items:e})})}var _,v,y,b,x,S;e((()=>{a(),c(),f(),r(),m(),_=t(),v={title:`Uikit Product/Layout & containers/Layout/Header/ListCustom`,id:`uikit-product-layout-header-listcustom`,id:`uikit-product-header-listcustom`,parameters:{layout:`padded`,controls:{disable:!0}}},y={beforeContent:(0,_.jsx)(i,{}),afterContent:(0,_.jsx)(i,{}),content:{label:`Content text`,caption:`Caption`,description:`Description text`}},b=[{label:`unchecked`,checked:!1,disabled:!1},{label:`checked`,checked:!0,disabled:!1},{label:`unchecked · disabled`,checked:!1,disabled:!0},{label:`checked · disabled`,checked:!0,disabled:!0}],x={tags:[`test`,`dev`],render:()=>(0,_.jsxs)(`div`,{className:p.matrix,children:[(0,_.jsx)(n,{sectionTitle:`ListItemCustom — selectionMode × checked × disabled`,firstColumnHeader:`selectionMode`,columnHeaders:b.map(e=>e.label),rows:[o.Single,o.Multiple].map(e=>({variantLabel:e,cells:b.map(t=>(0,_.jsx)(h,{selectionMode:e,checked:t.checked,disabled:t.disabled},`${e}-${t.label}`))}))}),(0,_.jsx)(n,{sectionTitle:`ListItemGroupCustom — варианты`,firstColumnHeader:`Variant`,columnHeaders:[`Preview`],rows:[{variantLabel:`subtitle`,cells:[(0,_.jsx)(g,{items:[{type:`group`,label:`Subtitle text`,groupVariant:`subtitle`,items:[{id:`s1`,content:{label:`Child`}}]}]},`subtitle`)]},{variantLabel:`subtitleTertiary`,cells:[(0,_.jsx)(g,{items:[{type:`group`,label:`Subtitle text`,groupVariant:`subtitleTertiary`,items:[{id:`t1`,content:{label:`Child`}}]}]},`tertiary`)]},{variantLabel:`divider`,cells:[(0,_.jsx)(g,{items:[{id:`above`,content:{label:`Above`}},{type:`group`,divider:!0,items:[]},{id:`below`,content:{label:`Below`}}]},`divider`)]}]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='ListItemCustom — selectionMode × checked × disabled' firstColumnHeader='selectionMode' columnHeaders={CHECKED_DISABLED_COLUMNS.map(column => column.label)} rows={[MODE.Single, MODE.Multiple].map(selectionMode => ({
      variantLabel: selectionMode,
      cells: CHECKED_DISABLED_COLUMNS.map(column => <ItemPreview key={\`\${selectionMode}-\${column.label}\`} selectionMode={selectionMode} checked={column.checked} disabled={column.disabled} />)
    }))} />

      <StoryTable sectionTitle='ListItemGroupCustom — варианты' firstColumnHeader='Variant' columnHeaders={['Preview']} rows={[{
      variantLabel: 'subtitle',
      cells: [<ShellList key='subtitle' items={[{
        type: 'group',
        label: 'Subtitle text',
        groupVariant: 'subtitle',
        items: [{
          id: 's1',
          content: {
            label: 'Child'
          }
        }]
      }]} />]
    }, {
      variantLabel: 'subtitleTertiary',
      cells: [<ShellList key='tertiary' items={[{
        type: 'group',
        label: 'Subtitle text',
        groupVariant: 'subtitleTertiary',
        items: [{
          id: 't1',
          content: {
            label: 'Child'
          }
        }]
      }]} />]
    }, {
      variantLabel: 'divider',
      cells: [<ShellList key='divider' items={[{
        id: 'above',
        content: {
          label: 'Above'
        }
      }, {
        type: 'group',
        divider: true,
        items: []
      }, {
        id: 'below',
        content: {
          label: 'Below'
        }
      }]} />]
    }]} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,v as default};
//# sourceMappingURL=ListCustom.VisualMatrix.stories-DDIkCJMJ.js.map