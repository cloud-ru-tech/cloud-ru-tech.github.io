import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{gn as n,i as r,nt as i,t as a}from"./iframe-Bl-uTAel.js";import{k as o,t as s}from"./src-B_OIgaU4.js";import{n as c,t as l}from"./styles.module-Ce2xHgbH.js";var u,d,f,p,m,h;e((()=>{i(),s(),a(),l(),u=t(),d=[`desktop`,`mobile`],f=()=>void 0,p={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldChat`,id:`uikit-product-fieldspredefined-fieldchat`,component:o,parameters:{layout:`padded`,controls:{disable:!0}}},m={tags:[`test`,`dev`,`no-a11y`],render:()=>{let e=[new File([`report`],`report.pdf`,{type:`application/pdf`})];return(0,u.jsx)(`div`,{className:c.grid,children:(0,u.jsx)(r,{sectionTitle:`layoutType × value`,firstColumnHeader:`layoutType`,columnHeaders:[`empty`,`filled`,`with files`,`disabled`],rows:d.map(t=>({variantLabel:t,cells:[(0,u.jsx)(n,{layoutType:t,children:(0,u.jsx)(`div`,{className:c.cell,children:(0,u.jsx)(o,{handleSubmit:f,attachment:{onFilesUpload:f,onFileDelete:f}})})},`${t}-empty`),(0,u.jsx)(n,{layoutType:t,children:(0,u.jsx)(`div`,{className:c.cell,children:(0,u.jsx)(o,{value:`Привет, как продвигается задача?`,handleSubmit:f})})},`${t}-filled`),(0,u.jsx)(n,{layoutType:t,children:(0,u.jsx)(`div`,{className:c.cell,children:(0,u.jsx)(o,{value:`Прикладываю отчёт`,handleSubmit:f,attachment:{files:e,onFilesUpload:f,onFileDelete:f}})})},`${t}-files`),(0,u.jsx)(n,{layoutType:t,children:(0,u.jsx)(`div`,{className:c.cell,children:(0,u.jsx)(o,{value:`Недоступно`,disabled:!0,handleSubmit:f})})},`${t}-disabled`)]}))})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => {
    const files = [new File(['report'], 'report.pdf', {
      type: 'application/pdf'
    })];
    return <div className={styles.grid}>
        <StoryTable sectionTitle='layoutType × value' firstColumnHeader='layoutType' columnHeaders={['empty', 'filled', 'with files', 'disabled']} rows={layoutTypes.map(layoutType => ({
        variantLabel: layoutType,
        cells: [<AdaptiveProvider key={\`\${layoutType}-empty\`} layoutType={layoutType}>
                <div className={styles.cell}>
                  <FieldChat handleSubmit={noop} attachment={{
              onFilesUpload: noop,
              onFileDelete: noop
            }} />
                </div>
              </AdaptiveProvider>, <AdaptiveProvider key={\`\${layoutType}-filled\`} layoutType={layoutType}>
                <div className={styles.cell}>
                  <FieldChat value='Привет, как продвигается задача?' handleSubmit={noop} />
                </div>
              </AdaptiveProvider>, <AdaptiveProvider key={\`\${layoutType}-files\`} layoutType={layoutType}>
                <div className={styles.cell}>
                  <FieldChat value='Прикладываю отчёт' handleSubmit={noop} attachment={{
              files,
              onFilesUpload: noop,
              onFileDelete: noop
            }} />
                </div>
              </AdaptiveProvider>, <AdaptiveProvider key={\`\${layoutType}-disabled\`} layoutType={layoutType}>
                <div className={styles.cell}>
                  <FieldChat value='Недоступно' disabled handleSubmit={noop} />
                </div>
              </AdaptiveProvider>]
      }))} />
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,p as default};
//# sourceMappingURL=FieldChat.VisualMatrix.stories-t84rzuEK.js.map