import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{i,t as a}from"./iframe-Du0zU9lI.js";import{a as o,t as s}from"./src-Bq_MVxXk.js";import{F as c,o as l,r as u,t as d}from"./src-BB54vc1d.js";import{n as f,t as p}from"./stories.module-Cv0zmHWk.js";function m({size:e}){let[t,n]=(0,g.useState)(b);return(0,_.jsx)(u,{size:e,items:t,onItemsReorder:n,children:(0,_.jsx)(o,{label:`Open (${String(e??`s`).toUpperCase()})`,size:`m`})})}function h({size:e}){let[t,n]=(0,g.useState)(b);return(0,_.jsx)(`div`,{className:f.cell,children:(0,_.jsx)(l,{size:e,items:t,onItemsReorder:n})})}var g,_,v,y,b,x,S;t((()=>{s(),d(),g=e(n(),1),a(),p(),_=r(),v={title:`Snack/Data display/List/ReorderableDroplist`,id:`components-list-reorderabledroplist`,component:u,parameters:{layout:`padded`,controls:{disable:!0}}},y=Object.values(c),b=[{id:`catalog`,content:{label:`Каталог`}},{id:`orders`,content:{label:`Заказы`}},{id:`trash`,content:{label:`Корзина`}}],x={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,_.jsxs)(`div`,{className:f.matrix,children:[(0,_.jsx)(i,{sectionTitle:`Trigger × Size (closed)`,firstColumnHeader:`Size`,columnHeaders:[`trigger`],rows:y.map(e=>({variantLabel:e.toUpperCase(),cells:[(0,_.jsx)(m,{size:e},e)]}))}),(0,_.jsx)(i,{sectionTitle:`Droplist surface — reorderable rows (rendered as ReorderableList)`,firstColumnHeader:`Size`,columnHeaders:[`surface`],rows:y.map(e=>({variantLabel:e.toUpperCase(),cells:[(0,_.jsx)(h,{size:e},e)]}))})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  // no-a11y: статичная матрица без интерактивного фокуса; a11y проверяется на Playground.
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Trigger × Size (closed)' firstColumnHeader='Size' columnHeaders={['trigger']} rows={keySizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [<TriggerCell key={size} size={size} />]
    }))} />

      <StoryTable sectionTitle='Droplist surface — reorderable rows (rendered as ReorderableList)' firstColumnHeader='Size' columnHeaders={['surface']} rows={keySizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [<SurfaceCell key={size} size={size} />]
    }))} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,v as default};
//# sourceMappingURL=ReorderableDroplist.VisualMatrix.stories-C0ndXLoM.js.map