import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-XRJcG0jl.js";import{a as i,i as a,n as o,t as s}from"./src-_YVENM0H.js";var c,l,u,d,f,p,m,h=e((()=>{c=`_row_lha36_4`,l=`_stack_lha36_11`,u=`_paragraph_lha36_17`,d=`_onAccent_lha36_22`,f=`_narrow_lha36_54`,p=`_matrix_lha36_58`,m={row:c,stack:l,paragraph:u,onAccent:d,narrow:f,matrix:p}})),g,_,v,y,b,x,S;e((()=>{s(),r(),h(),g=t(),_={title:`Snack/Actions/Link`,id:`components-link`,component:o,parameters:{layout:`padded`}},v=[a.Primary,a.Neutral,a.Red,a.Orange,a.Yellow,a.Green,a.Blue,a.Violet,a.Pink],y=[!1,!0],b=[{as:`a`,href:`#`},{as:`button`,type:`button`}],x={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsxs)(`div`,{className:m.matrix,children:[(0,g.jsx)(n,{sectionTitle:`Appearance × Underlined (roleAppearance=regular)`,firstColumnHeader:`Appearance`,columnHeaders:b.flatMap(({as:e})=>y.map(t=>`as=${e}, underlined=${t}`)),rows:v.map(e=>({variantLabel:e,cells:b.flatMap(t=>y.map(n=>(0,g.jsx)(o,{...t,appearance:e,underlined:n,label:`Link text`},`${t.as}-${n}`)))}))}),(0,g.jsx)(n,{sectionTitle:`insideText (внутри <p>)`,firstColumnHeader:`insideText`,columnHeaders:[`Link`],rows:[!1,!0].map(e=>({variantLabel:String(e),cells:[(0,g.jsxs)(`p`,{className:m.paragraph,children:[`Подробнее о работе сервиса читайте`,` `,(0,g.jsx)(o,{insideText:e,label:`в документации`,href:`https://example.com`}),`, а также ознакомьтесь с условиями.`]},String(e))]}))}),(0,g.jsx)(n,{sectionTitle:`truncateVariant (container=200px)`,firstColumnHeader:`truncateVariant`,columnHeaders:[`Link`],rows:[`end`,`middle`].map(e=>({variantLabel:e,cells:[(0,g.jsx)(`div`,{className:m.narrow,children:(0,g.jsx)(o,{truncateVariant:e,label:`very-long-document-name-abc-2024.pdf`,href:`#`})},e)]}))}),(0,g.jsx)(n,{sectionTitle:`Role appearance × Appearance`,firstColumnHeader:`Role appearance`,columnHeaders:v.map(e=>e),rows:b.flatMap(e=>[i.Regular,i.OnAccent].map(t=>({variantLabel:`${t}, as=${e.as}`,cells:v.map(n=>(0,g.jsx)(`div`,{className:t===i.OnAccent?m.onAccent:void 0,"data-appearance":n,children:(0,g.jsx)(o,{...e,roleAppearance:t,appearance:n,label:`Link text`})},n))})))})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Appearance × Underlined (roleAppearance=regular)' firstColumnHeader='Appearance' columnHeaders={elementVariants.flatMap(({
      as
    }) => underlinedStates.map(u => \`as=\${as}, underlined=\${u}\`))} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: elementVariants.flatMap(elementProps => underlinedStates.map(u => <Link key={\`\${elementProps.as}-\${u}\`} {...elementProps} appearance={appearance} underlined={u} label='Link text' />))
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

      <StoryTable sectionTitle='Role appearance × Appearance' firstColumnHeader='Role appearance' columnHeaders={keyAppearances.map(a => a)} rows={elementVariants.flatMap(elementProps => [ROLE_APPEARANCE.Regular, ROLE_APPEARANCE.OnAccent].map(roleAppearance => ({
      variantLabel: \`\${roleAppearance}, as=\${elementProps.as}\`,
      cells: keyAppearances.map(appearance => <div key={appearance} className={roleAppearance === ROLE_APPEARANCE.OnAccent ? styles.onAccent : undefined} data-appearance={appearance}>
                <Link {...elementProps} roleAppearance={roleAppearance} appearance={appearance} label='Link text' />
              </div>)
    })))} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,_ as default};
//# sourceMappingURL=Link.VisualMatrix.stories-Bldk-89G.js.map