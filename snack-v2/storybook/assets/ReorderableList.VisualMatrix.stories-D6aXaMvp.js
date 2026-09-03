import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{i,t as a}from"./iframe-BdtyM0cx.js";import{b as o,o as s,t as c}from"./src-CpnVh2EN.js";import{n as l,t as u}from"./stories.module-Cv0zmHWk.js";function d({size:e,items:t}){let[n,r]=(0,f.useState)(t);return(0,p.jsx)(`div`,{className:l.cell,children:(0,p.jsx)(s,{size:e,items:n,onItemsReorder:r})})}var f,p,m,h,g,_,v,y;t((()=>{c(),f=e(n(),1),a(),u(),p=r(),m={title:`Snack/Data display/List/ReorderableList`,id:`components-list-reorderablelist`,component:s,parameters:{layout:`padded`,controls:{disable:!0}}},h=Object.values(o),g=[{id:`inbox`,content:{label:`Входящие`,caption:`12`}},{id:`sent`,content:{label:`Отправленные`}},{id:`trash`,content:{label:`Корзина`,description:`Удаляется через 30 дней`}}],_=[{type:`group`,id:`group-1`,label:`Группа 1`,divider:!0,items:[{id:`catalog`,content:{label:`Каталог`}},{id:`orders`,content:{label:`Заказы`}}]},{type:`group`,id:`group-2`,label:`Группа 2`,divider:!0,items:[{id:`favorites`,content:{label:`Избранное`}},{id:`settings`,content:{label:`Настройки`},disabled:!0}]}],v={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,p.jsxs)(`div`,{className:l.matrix,children:[(0,p.jsx)(i,{sectionTitle:`Size × Structure`,firstColumnHeader:`Size`,columnHeaders:[`flat`,`grouped (+ disabled row)`],rows:h.map(e=>({variantLabel:e.toUpperCase(),cells:[(0,p.jsx)(d,{size:e,items:g},`flat-${e}`),(0,p.jsx)(d,{size:e,items:_},`grouped-${e}`)]}))}),(0,p.jsx)(i,{sectionTitle:`Truncate (size m)`,firstColumnHeader:`Size`,columnHeaders:[`narrow container`],rows:[{variantLabel:`M`,cells:[(0,p.jsx)(`div`,{className:l.cellNarrow,children:(0,p.jsx)(d,{size:`m`,items:[{id:`long`,content:{label:`Очень длинное название строки, которое не влезает`}},{id:`short`,content:{label:`Коротко`}}]})},`narrow`)]}]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  // no-a11y: статичная матрица без интерактивного фокуса; a11y проверяется на Playground.
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × Structure' firstColumnHeader='Size' columnHeaders={['flat', 'grouped (+ disabled row)']} rows={keySizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [<MatrixCell key={\`flat-\${size}\`} size={size} items={flatItems} />, <MatrixCell key={\`grouped-\${size}\`} size={size} items={groupedItems} />]
    }))} />

      <StoryTable sectionTitle='Truncate (size m)' firstColumnHeader='Size' columnHeaders={['narrow container']} rows={[{
      variantLabel: 'M',
      cells: [<div className={styles.cellNarrow} key='narrow'>
                <MatrixCell size='m' items={[{
          id: 'long',
          content: {
            label: 'Очень длинное название строки, которое не влезает'
          }
        }, {
          id: 'short',
          content: {
            label: 'Коротко'
          }
        }]} />
              </div>]
    }]} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,m as default};
//# sourceMappingURL=ReorderableList.VisualMatrix.stories-D6aXaMvp.js.map