import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D4MTfTET.js";import{U as i,t as a}from"./system-CitpGiS9.js";import{a as o,i as s,o as c,t as l}from"./src-DN_4VIKF.js";import{c as u,t as d,w as f}from"./src-ebzcHoJz.js";var p,m,h,g=e((()=>{p=`_grid_1n57d_4`,m=`_cell_1n57d_10`,h={grid:p,cell:m}}));function _(e,t,n=S.card){return(0,v.jsx)(`div`,{className:h.cell,"data-variant":n,children:t},e)}var v,y,b,x,S,C,w;e((()=>{a(),l(),d(),r(),g(),v=t(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Uikit Product/Layout & containers/CardPredefined/CardServiceSmall`,id:`uikit-product-cardpredefined-cardservicesmall`,component:u,parameters:{layout:`padded`,controls:{disable:!0}}},x={title:`Название сервиса`,emblem:{icon:i}},S={card:`card`,promo:`promo`,truncate:`truncate`},C={tags:[`test`,`dev`],render:()=>(0,v.jsxs)(`div`,{className:h.grid,children:[(0,v.jsx)(n,{sectionTitle:`CardServiceSmall — состояния`,firstColumnHeader:`Вариант`,columnHeaders:[`Default`,`checked`,`outline`,`disabled`],rows:[{variantLabel:`states`,cells:[_(`default`,(0,v.jsx)(u,{...x})),_(`checked`,(0,v.jsx)(u,{...x,checked:!0})),_(`outline`,(0,v.jsx)(u,{...x,outline:!0})),_(`disabled`,(0,v.jsx)(u,{...x,disabled:!0}))]}]}),(0,v.jsx)(n,{sectionTitle:`CardServiceSmall — favorite`,firstColumnHeader:`state`,columnHeaders:[`enabled=false`,`always`,`hover`],rows:[{variantLabel:`unchecked`,cells:[_(`no-fav`,(0,v.jsx)(u,{...x})),_(`fav-always`,(0,v.jsx)(u,{...x,actionsVisibility:f.always,favorite:{enabled:!0,onChange:y()}})),_(`fav-hover`,(0,v.jsx)(u,{...x,actionsVisibility:f.hover,favorite:{enabled:!0,onChange:y()}}))]},{variantLabel:`checked`,cells:[_(`no-fav-checked`,(0,v.jsx)(u,{...x})),_(`fav-always-checked`,(0,v.jsx)(u,{...x,actionsVisibility:f.always,favorite:{enabled:!0,checked:!0,onChange:y()}})),_(`fav-hover-checked`,(0,v.jsx)(u,{...x,actionsVisibility:f.hover,favorite:{enabled:!0,checked:!0,onChange:y()}}))]}]}),(0,v.jsx)(n,{sectionTitle:`CardServiceSmall — promoBadge`,firstColumnHeader:`Вариант`,columnHeaders:[`without`,`with promoBadge`],rows:[{variantLabel:`promoBadge`,cells:[_(`no-promo`,(0,v.jsx)(u,{...x})),_(`with-promo`,(0,v.jsx)(u,{...x,promoBadge:{label:`Promo Tag`,appearance:s.Primary,role:o.Accent,size:c.Xs}}),S.promo)]}]}),(0,v.jsx)(n,{sectionTitle:`CardServiceSmall — truncate`,firstColumnHeader:`Вариант`,columnHeaders:[`default`,`truncate.title=1`],rows:[{variantLabel:`long title`,cells:[_(`long-default`,(0,v.jsx)(u,{title:`Очень длинное название сервиса, которое не помещается в одну строку`,emblem:{icon:i}}),S.truncate),_(`long-truncate`,(0,v.jsx)(u,{title:`Очень длинное название сервиса, которое не помещается в одну строку`,emblem:{icon:i},truncate:{title:1}}),S.truncate)]}]})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='CardServiceSmall — состояния' firstColumnHeader='Вариант' columnHeaders={['Default', 'checked', 'outline', 'disabled']} rows={[{
      variantLabel: 'states',
      cells: [matrixCell('default', <CardServiceSmall {...baseProps} />), matrixCell('checked', <CardServiceSmall {...baseProps} checked />), matrixCell('outline', <CardServiceSmall {...baseProps} outline />), matrixCell('disabled', <CardServiceSmall {...baseProps} disabled />)]
    }]} />

      <StoryTable sectionTitle='CardServiceSmall — favorite' firstColumnHeader='state' columnHeaders={['enabled=false', 'always', 'hover']} rows={[{
      variantLabel: 'unchecked',
      cells: [matrixCell('no-fav', <CardServiceSmall {...baseProps} />), matrixCell('fav-always', <CardServiceSmall {...baseProps} actionsVisibility={VISIBILITY_STRATEGY.always} favorite={{
        enabled: true,
        onChange: fn()
      }} />), matrixCell('fav-hover', <CardServiceSmall {...baseProps} actionsVisibility={VISIBILITY_STRATEGY.hover} favorite={{
        enabled: true,
        onChange: fn()
      }} />)]
    }, {
      variantLabel: 'checked',
      cells: [matrixCell('no-fav-checked', <CardServiceSmall {...baseProps} />), matrixCell('fav-always-checked', <CardServiceSmall {...baseProps} actionsVisibility={VISIBILITY_STRATEGY.always} favorite={{
        enabled: true,
        checked: true,
        onChange: fn()
      }} />), matrixCell('fav-hover-checked', <CardServiceSmall {...baseProps} actionsVisibility={VISIBILITY_STRATEGY.hover} favorite={{
        enabled: true,
        checked: true,
        onChange: fn()
      }} />)]
    }]} />

      <StoryTable sectionTitle='CardServiceSmall — promoBadge' firstColumnHeader='Вариант' columnHeaders={['without', 'with promoBadge']} rows={[{
      variantLabel: 'promoBadge',
      cells: [matrixCell('no-promo', <CardServiceSmall {...baseProps} />), matrixCell('with-promo', <CardServiceSmall {...baseProps} promoBadge={{
        label: 'Promo Tag',
        appearance: APPEARANCE.Primary,
        role: ROLE_APPEARANCE.Accent,
        size: SIZE.Xs
      }} />, CELL.promo)]
    }]} />

      <StoryTable sectionTitle='CardServiceSmall — truncate' firstColumnHeader='Вариант' columnHeaders={['default', 'truncate.title=1']} rows={[{
      variantLabel: 'long title',
      cells: [matrixCell('long-default', <CardServiceSmall title='Очень длинное название сервиса, которое не помещается в одну строку' emblem={{
        icon: PlaceholderSVG
      }} />, CELL.truncate), matrixCell('long-truncate', <CardServiceSmall title='Очень длинное название сервиса, которое не помещается в одну строку' emblem={{
        icon: PlaceholderSVG
      }} truncate={{
        title: 1
      }} />, CELL.truncate)]
    }]} />
    </div>
}`,...C.parameters?.docs?.source}}},w=[`VisualMatrix`]}))();export{C as VisualMatrix,w as __namedExportsOrder,b as default};
//# sourceMappingURL=CardServiceSmall.VisualMatrix.stories-0Fv7FE1a.js.map