import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Du0zU9lI.js";import{r as i,t as a}from"./src-CCaBCq3s.js";import{c as o,n as s,o as c,t as l}from"./src-eX9FmPLK.js";import{n as u,t as d}from"./styles.module-DAdDTfsw.js";function f(e){return(0,p.jsx)(s,{...e,children:(0,p.jsx)(`div`,{className:u.matrixCell,children:e.children??`Content`})})}var p,m,h,g,_,v,y;e((()=>{l(),a(),r(),d(),p=t(),m={title:`Snack/Layout & containers/Card/Card`,id:`components-card-card`,component:s,parameters:{layout:`padded`}},h=[c.S,c.M,c.L],g=[o.Simple,o.Outline,o.Elevated],_=[{key:`default`,extra:{}},{key:`disabled`,extra:{disabled:!0}},{key:`checked`,extra:{checked:!0,multiSelect:!0}},{key:`checked + disabled`,extra:{checked:!0,multiSelect:!0,disabled:!0}}],v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:u.matrix,children:[h.map(e=>(0,p.jsx)(n,{sectionTitle:`radius=${e}`,firstColumnHeader:`State`,columnHeaders:g.map(e=>e),rows:_.map(({key:t,extra:n})=>({variantLabel:t,cells:g.map(t=>f({radius:e,view:t,...n,children:`${t} · ${e}`}))}))},e)),(0,p.jsx)(n,{sectionTitle:`backgroundPredefined (radius=m, view=simple)`,firstColumnHeader:`Fill`,columnHeaders:[`Card`],rows:Object.values(i).map(e=>({variantLabel:e,cells:[f({backgroundPredefined:e,radius:c.M,view:o.Simple,children:e})]}))}),(0,p.jsx)(n,{sectionTitle:`interactive=false (presentational)`,firstColumnHeader:`View`,columnHeaders:[`Card`],rows:g.map(e=>({variantLabel:e,cells:[f({view:e,radius:c.M,interactive:!1,children:`${e} · non-interactive`})]}))})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      {keyRadii.map(radius => <StoryTable key={radius} sectionTitle={\`radius=\${radius}\`} firstColumnHeader='State' columnHeaders={keyViews.map(v => v)} rows={interactionStates.map(({
      key,
      extra
    }) => ({
      variantLabel: key,
      cells: keyViews.map(view => renderCard({
        radius,
        view,
        ...extra,
        children: \`\${view} · \${radius}\`
      }))
    }))} />)}

      {/* backgroundPredefined (acrylic fills) — не отражено в Figma \`card\`-мастере, но
          часть публичного API. Снимаем отдельной секцией на radius=m / view=simple. */}
      <StoryTable sectionTitle='backgroundPredefined (radius=m, view=simple)' firstColumnHeader='Fill' columnHeaders={['Card']} rows={Object.values(BACKGROUND_PREDEFINED_FILL).map(fill => ({
      variantLabel: fill,
      cells: [renderCard({
        backgroundPredefined: fill,
        radius: RADIUS.M,
        view: VIEW.Simple,
        children: fill
      })]
    }))} />

      {/* Не-интерактивная карточка (interactive=false): нет state-layer hover/pressed, нет
          фокус-ринга. Отдельная секция, потому что это не Figma-axis, а DS-overlay поверх Card. */}
      <StoryTable sectionTitle='interactive=false (presentational)' firstColumnHeader='View' columnHeaders={['Card']} rows={keyViews.map(view => ({
      variantLabel: view,
      cells: [renderCard({
        view,
        radius: RADIUS.M,
        interactive: false,
        children: \`\${view} · non-interactive\`
      })]
    }))} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,m as default};
//# sourceMappingURL=Card.VisualMatrix.stories-Dv6TJWoN.js.map