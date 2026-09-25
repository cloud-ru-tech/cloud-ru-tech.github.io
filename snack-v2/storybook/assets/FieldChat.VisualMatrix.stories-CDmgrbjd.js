import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,i as r,t as i}from"./iframe-qs8RgOhH.js";import{k as a,t as o}from"./src-7Go8s995.js";import{n as s,t as c}from"./styles.module-Ce2xHgbH.js";var l,u,d,f,p,m;e((()=>{o(),i(),c(),l=t(),u=[`desktop`,`mobile`],d=()=>void 0,f={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldChat`,id:`uikit-product-fieldspredefined-fieldchat`,component:a,parameters:{layout:`padded`,controls:{disable:!0}}},p={tags:[`test`,`dev`,`no-a11y`],render:()=>{let e=[new File([`report`],`report.pdf`,{type:`application/pdf`})];return(0,l.jsx)(`div`,{className:s.grid,children:(0,l.jsx)(r,{sectionTitle:`layoutType × value`,firstColumnHeader:`layoutType`,columnHeaders:[`empty`,`filled`,`with files`,`disabled`],rows:u.map(t=>({variantLabel:t,cells:[(0,l.jsx)(n,{layoutType:t,children:(0,l.jsx)(`div`,{className:s.cell,children:(0,l.jsx)(a,{handleSubmit:d,attachment:{onFilesUpload:d,onFileDelete:d}})})},`${t}-empty`),(0,l.jsx)(n,{layoutType:t,children:(0,l.jsx)(`div`,{className:s.cell,children:(0,l.jsx)(a,{value:`Привет, как продвигается задача?`,handleSubmit:d})})},`${t}-filled`),(0,l.jsx)(n,{layoutType:t,children:(0,l.jsx)(`div`,{className:s.cell,children:(0,l.jsx)(a,{value:`Прикладываю отчёт`,handleSubmit:d,attachment:{files:e,onFilesUpload:d,onFileDelete:d}})})},`${t}-files`),(0,l.jsx)(n,{layoutType:t,children:(0,l.jsx)(`div`,{className:s.cell,children:(0,l.jsx)(a,{value:`Недоступно`,disabled:!0,handleSubmit:d})})},`${t}-disabled`)]}))})})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => {
    const files = [new File(['report'], 'report.pdf', {
      type: 'application/pdf'
    })];
    return <div className={styles.grid}>
        <StoryTable sectionTitle='layoutType × value' firstColumnHeader='layoutType' columnHeaders={['empty', 'filled', 'with files', 'disabled']} rows={layoutTypes.map(layoutType => ({
        variantLabel: layoutType,
        cells: [<LayoutScope key={\`\${layoutType}-empty\`} layoutType={layoutType}>
                <div className={styles.cell}>
                  <FieldChat handleSubmit={noop} attachment={{
              onFilesUpload: noop,
              onFileDelete: noop
            }} />
                </div>
              </LayoutScope>, <LayoutScope key={\`\${layoutType}-filled\`} layoutType={layoutType}>
                <div className={styles.cell}>
                  <FieldChat value='Привет, как продвигается задача?' handleSubmit={noop} />
                </div>
              </LayoutScope>, <LayoutScope key={\`\${layoutType}-files\`} layoutType={layoutType}>
                <div className={styles.cell}>
                  <FieldChat value='Прикладываю отчёт' handleSubmit={noop} attachment={{
              files,
              onFilesUpload: noop,
              onFileDelete: noop
            }} />
                </div>
              </LayoutScope>, <LayoutScope key={\`\${layoutType}-disabled\`} layoutType={layoutType}>
                <div className={styles.cell}>
                  <FieldChat value='Недоступно' disabled handleSubmit={noop} />
                </div>
              </LayoutScope>]
      }))} />
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m=[`VisualMatrix`]}))();export{p as VisualMatrix,m as __namedExportsOrder,f as default};
//# sourceMappingURL=FieldChat.VisualMatrix.stories-CDmgrbjd.js.map