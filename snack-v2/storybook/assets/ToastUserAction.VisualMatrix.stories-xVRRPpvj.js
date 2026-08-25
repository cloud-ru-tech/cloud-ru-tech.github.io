import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BUDedHtH.js";import{g as i,k as a,m as o,t as s}from"./src-TJqvdZza.js";import{n as c,t as l}from"./styles.module-CnMb1Ut9.js";function u({width:e,children:t}){return(0,d.jsx)(`div`,{className:e===a.Full?c.widthFull:c.widthAuto,"data-width":e,children:t})}var d,f,p,m,h,g,_,v,y;e((()=>{s(),r(),l(),d=t(),f={title:`Snack/Overlays/Toaster/ToastUserAction`,id:`components-toaster-toastuseraction`,component:o,parameters:{layout:`padded`}},p=Object.values(i),m=Object.values(a),h=[{key:`default`,props:{}},{key:`loading`,props:{loading:!0}},{key:`loading+timer`,props:{loading:!0,timer:!0}}],g=()=>{},_=[{key:`none`,action:void 0},{key:`labelOnly`,action:{label:`Отменить`,onClick:g}},{key:`link (as=a)`,action:{label:`Подробнее`,as:`a`,href:`#`,onClick:e=>e.preventDefault?.()}}],v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:c.matrix,children:[(0,d.jsx)(n,{sectionTitle:`Appearance × Width`,firstColumnHeader:`Appearance`,columnHeaders:m,rows:p.map(e=>({variantLabel:e,cells:m.map(t=>(0,d.jsx)(u,{width:t,children:(0,d.jsx)(o,{appearance:e,label:`Изменения сохранены`,action:{label:`Отменить`,onClick:g}})},`${e}-${t}`))}))}),(0,d.jsx)(n,{sectionTitle:`Loading & Timer × Appearance`,firstColumnHeader:`State`,columnHeaders:p,rows:h.map(e=>({variantLabel:e.key,cells:p.map(t=>(0,d.jsx)(u,{width:`auto`,children:(0,d.jsx)(o,{appearance:t,label:`Авто-скрытие`,...e.props})},`${t}-${e.key}`))}))}),(0,d.jsx)(n,{sectionTitle:`Action slot (appearance=${i.Neutral})`,firstColumnHeader:`Preset`,columnHeaders:[`toast`],rows:_.map(e=>({variantLabel:e.key,cells:[(0,d.jsx)(u,{width:`auto`,children:(0,d.jsx)(o,{appearance:i.Neutral,label:`Изменения сохранены`,action:e.action})},e.key)]}))})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Appearance × Width' firstColumnHeader='Appearance' columnHeaders={widths} rows={appearances.map(appearance => ({
      variantLabel: appearance,
      cells: widths.map(width => <WidthCell key={\`\${appearance}-\${width}\`} width={width}>
              <ToastUserAction appearance={appearance} label='Изменения сохранены' action={{
          label: 'Отменить',
          onClick: noop
        }} />
            </WidthCell>)
    }))} />

      <StoryTable sectionTitle='Loading & Timer × Appearance' firstColumnHeader='State' columnHeaders={appearances} rows={loadingRows.map(row => ({
      variantLabel: row.key,
      cells: appearances.map(appearance => <WidthCell key={\`\${appearance}-\${row.key}\`} width='auto'>
              <ToastUserAction appearance={appearance} label='Авто-скрытие' {...row.props} />
            </WidthCell>)
    }))} />

      <StoryTable sectionTitle={\`Action slot (appearance=\${TOAST_USER_ACTION_APPEARANCE.Neutral})\`} firstColumnHeader='Preset' columnHeaders={['toast']} rows={actionPresets.map(preset => ({
      variantLabel: preset.key,
      cells: [<WidthCell key={preset.key} width='auto'>
              <ToastUserAction appearance={TOAST_USER_ACTION_APPEARANCE.Neutral} label='Изменения сохранены' action={preset.action} />
            </WidthCell>]
    }))} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,f as default};
//# sourceMappingURL=ToastUserAction.VisualMatrix.stories-xVRRPpvj.js.map