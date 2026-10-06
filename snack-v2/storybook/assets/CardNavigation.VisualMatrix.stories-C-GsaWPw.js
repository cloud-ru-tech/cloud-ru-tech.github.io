import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Du1N818W.js";import{U as i,t as a}from"./system-DfAZoTW1.js";import{n as o,t as s}from"./src-DGbsCxZH.js";var c,l,u=e((()=>{c=`_grid_109sb_4`,l={grid:c}})),d,f,p,m,h,g,_;e((()=>{a(),s(),r(),u(),d=t(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Uikit Product/Layout & containers/CardPredefined/CardNavigation`,id:`uikit-product-cardpredefined-cardnavigation`,component:o,parameters:{layout:`padded`,controls:{disable:!0}}},m={title:`Мой сервис`,icon:(0,d.jsx)(i,{size:24})},h=[{label:`compact`,description:void 0},{label:`detailed`,description:`Краткое описание сервиса для подробного режима карточки.`}],g={tags:[`test`,`dev`],render:()=>(0,d.jsxs)(`div`,{className:l.grid,children:[(0,d.jsx)(n,{sectionTitle:`CardNavigation — favorite`,firstColumnHeader:`view`,columnHeaders:[`enabled=false`,`always`,`hover`],rows:h.map(e=>({variantLabel:e.label,cells:[(0,d.jsx)(o,{...m,description:e.description},`no-fav`),(0,d.jsx)(o,{...m,description:e.description,actionsVisibility:`always`,favorite:{enabled:!0,checked:!0,onChange:f()}},`fav-always`),(0,d.jsx)(o,{...m,description:e.description,actionsVisibility:`hover`,favorite:{enabled:!0,onChange:f()}},`fav-hover`)]}))}),(0,d.jsx)(n,{sectionTitle:`CardNavigation — promoTag, expandable, tooltip, disabled`,firstColumnHeader:`view`,columnHeaders:[`promoTag`,`expandable`,`tooltip`,`disabled`],rows:h.map(e=>({variantLabel:e.label,cells:[(0,d.jsx)(o,{...m,description:e.description,promoTag:{variant:`preview`}},`promo`),(0,d.jsx)(o,{...m,description:e.description,expandable:{value:!1,onClick:f()}},`expandable`),(0,d.jsx)(o,{...m,description:e.description,tooltip:{tip:`Подсказка (только в компактном виде)`}},`tooltip`),(0,d.jsx)(o,{...m,description:e.description,disabled:!0},`disabled`)]}))})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='CardNavigation — favorite' firstColumnHeader='view' columnHeaders={['enabled=false', 'always', 'hover']} rows={VIEWS.map(view => ({
      variantLabel: view.label,
      cells: [<CardNavigation key='no-fav' {...baseProps} description={view.description} />, <CardNavigation key='fav-always' {...baseProps} description={view.description} actionsVisibility='always' favorite={{
        enabled: true,
        checked: true,
        onChange: fn()
      }} />, <CardNavigation key='fav-hover' {...baseProps} description={view.description} actionsVisibility='hover' favorite={{
        enabled: true,
        onChange: fn()
      }} />]
    }))} />

      <StoryTable sectionTitle='CardNavigation — promoTag, expandable, tooltip, disabled' firstColumnHeader='view' columnHeaders={['promoTag', 'expandable', 'tooltip', 'disabled']} rows={VIEWS.map(view => ({
      variantLabel: view.label,
      cells: [<CardNavigation key='promo' {...baseProps} description={view.description} promoTag={{
        variant: 'preview'
      }} />, <CardNavigation key='expandable' {...baseProps} description={view.description} expandable={{
        value: false,
        onClick: fn()
      }} />, <CardNavigation key='tooltip' {...baseProps} description={view.description} tooltip={{
        tip: 'Подсказка (только в компактном виде)'
      }} />, <CardNavigation key='disabled' {...baseProps} description={view.description} disabled />]
    }))} />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,p as default};
//# sourceMappingURL=CardNavigation.VisualMatrix.stories-C-GsaWPw.js.map