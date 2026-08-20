import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Bd5xtg2w.js";import{a as i,i as a,n as o,t as s}from"./src-DAWRraTV.js";var c,l,u,d,f,p,m,h=e((()=>{c=`_row_1pqee_4`,l=`_stack_1pqee_11`,u=`_paragraph_1pqee_17`,d=`_onAccent_1pqee_22`,f=`_narrow_1pqee_28`,p=`_matrix_1pqee_32`,m={row:c,stack:l,paragraph:u,onAccent:d,narrow:f,matrix:p}})),g,_,v,y,b,x;e((()=>{s(),r(),h(),g=t(),_={title:`Snack/Actions/Link`,id:`components-link`,component:o,parameters:{layout:`padded`}},v=[a.Primary,a.Neutral,a.Red,a.Orange,a.Yellow,a.Green,a.Blue,a.Violet,a.Pink],y=[!1,!0],b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsxs)(`div`,{className:m.matrix,children:[(0,g.jsx)(n,{sectionTitle:`Appearance × Underlined (roleAppearance=regular)`,firstColumnHeader:`Appearance`,columnHeaders:[`underlined=false`,`underlined=true`],rows:v.map(e=>({variantLabel:e,cells:y.map(t=>(0,g.jsx)(o,{appearance:e,underlined:t,label:`Link text`,href:`#`},String(t)))}))}),(0,g.jsx)(n,{sectionTitle:`insideText (внутри <p>)`,firstColumnHeader:`insideText`,columnHeaders:[`Link`],rows:[!1,!0].map(e=>({variantLabel:String(e),cells:[(0,g.jsxs)(`p`,{className:m.paragraph,children:[`Подробнее о работе сервиса читайте`,` `,(0,g.jsx)(o,{insideText:e,label:`в документации`,href:`https://example.com`}),`, а также ознакомьтесь с условиями.`]},String(e))]}))}),(0,g.jsx)(n,{sectionTitle:`truncateVariant (container=200px)`,firstColumnHeader:`truncateVariant`,columnHeaders:[`Link`],rows:[`end`,`middle`].map(e=>({variantLabel:e,cells:[(0,g.jsx)(`div`,{className:m.narrow,children:(0,g.jsx)(o,{truncateVariant:e,label:`very-long-document-name-abc-2024.pdf`,href:`#`})},e)]}))}),(0,g.jsx)(n,{sectionTitle:`Role appearance × Appearance`,firstColumnHeader:`Role appearance`,columnHeaders:v.map(e=>e),rows:[i.Regular,i.OnAccent].map(e=>({variantLabel:e,cells:v.map(t=>(0,g.jsx)(`div`,{className:e===i.OnAccent?m.onAccent:void 0,children:(0,g.jsx)(o,{roleAppearance:e,appearance:t,label:`Link text`,href:`#`})},t))}))})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Appearance × Underlined (roleAppearance=regular)' firstColumnHeader='Appearance' columnHeaders={['underlined=false', 'underlined=true']} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: underlinedStates.map(u => <Link key={String(u)} appearance={appearance} underlined={u} label='Link text' href='#' />)
    }))} />

      <StoryTable sectionTitle='insideText (внутри <p>)' firstColumnHeader='insideText' columnHeaders={['Link']} rows={[false, true].map(insideText => ({
      variantLabel: String(insideText),
      cells: [<p key={String(insideText)} className={styles.paragraph}>
              Подробнее о работе сервиса читайте{' '}
              <Link insideText={insideText} label='в документации' href='https://example.com' />, а также ознакомьтесь с
              условиями.
            </p>]
    }))} />

      <StoryTable sectionTitle='truncateVariant (container=200px)' firstColumnHeader='truncateVariant' columnHeaders={['Link']} rows={(['end', 'middle'] as const).map(variant => ({
      variantLabel: variant,
      cells: [<div key={variant} className={styles.narrow}>
              <Link truncateVariant={variant} label='very-long-document-name-abc-2024.pdf' href='#' />
            </div>]
    }))} />

      <StoryTable sectionTitle='Role appearance × Appearance' firstColumnHeader='Role appearance' columnHeaders={keyAppearances.map(a => a)} rows={[ROLE_APPEARANCE.Regular, ROLE_APPEARANCE.OnAccent].map(roleAppearance => ({
      variantLabel: roleAppearance,
      cells: keyAppearances.map(appearance => <div key={appearance} className={roleAppearance === ROLE_APPEARANCE.OnAccent ? styles.onAccent : undefined}>
              <Link roleAppearance={roleAppearance} appearance={appearance} label='Link text' href='#' />
            </div>)
    }))} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,_ as default};
//# sourceMappingURL=Link.VisualMatrix.stories-BwpScQjw.js.map