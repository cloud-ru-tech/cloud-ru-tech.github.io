import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DMWsC78w.js";import{E as i,t as a}from"./src-DFNI8KTd.js";var o,s,c,l=e((()=>{o=`_grid_yunu0_1`,s=`_stretchContainer_yunu0_7`,c={grid:o,stretchContainer:s}})),u,d,f,p,m,h,g;e((()=>{a(),r(),l(),u=t(),d=[`s`,`m`,`l`],f=[{label:`default`,props:{}},{label:`filled`,props:{value:`123456`}},{label:`error`,props:{value:`111111`,error:`Неверный код`}},{label:`disabled`,props:{value:`123456`,disabled:!0}}],p=[{label:`showEmptyChars`,props:{value:`12`,showEmptyChars:!0}},{label:`spacing [2]`,props:{value:`123456`,spacing:[2]}},{label:`resendCode (таймер)`,props:{resendCode:{onResend:()=>void 0,secondsToNextResend:45}}},{label:`resendCode (активна)`,props:{resendCode:{onResend:()=>void 0,secondsToNextResend:0}}}],m={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldCode`,id:`uikit-product-fieldspredefined-fieldcode`,component:i,parameters:{layout:`padded`,controls:{disable:!0}}},h={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,u.jsxs)(`div`,{className:c.grid,children:[(0,u.jsx)(n,{sectionTitle:`state × size`,firstColumnHeader:`state`,columnHeaders:d.map(e=>e.toUpperCase()),rows:f.map(({label:e,props:t})=>({variantLabel:e,cells:d.map(n=>(0,u.jsx)(i,{codeLength:6,size:n,label:`Код`,...t},`${e}-${n}`))}))}),(0,u.jsx)(n,{sectionTitle:`features`,firstColumnHeader:`feature`,columnHeaders:[`M`],rows:p.map(({label:e,props:t})=>({variantLabel:e,cells:[(0,u.jsx)(i,{codeLength:6,size:`m`,label:`Код`,...t},e)]}))}),(0,u.jsx)(n,{sectionTitle:`stretchCells (контейнер 360px)`,firstColumnHeader:`variant`,columnHeaders:[`M`],rows:[{variantLabel:`stretchCells`,cells:[(0,u.jsx)(`div`,{className:c.stretchContainer,children:(0,u.jsx)(i,{codeLength:6,size:`m`,label:`Код`,stretchCells:!0})},`stretch`)]}]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='state × size' firstColumnHeader='state' columnHeaders={sizes.map(size => size.toUpperCase())} rows={states.map(({
      label,
      props
    }) => ({
      variantLabel: label,
      cells: sizes.map(size => <FieldCode key={\`\${label}-\${size}\`} codeLength={6} size={size} label='Код' {...props} />)
    }))} />
      <StoryTable sectionTitle='features' firstColumnHeader='feature' columnHeaders={['M']} rows={features.map(({
      label,
      props
    }) => ({
      variantLabel: label,
      cells: [<FieldCode key={label} codeLength={6} size='m' label='Код' {...props} />]
    }))} />
      <StoryTable sectionTitle='stretchCells (контейнер 360px)' firstColumnHeader='variant' columnHeaders={['M']} rows={[{
      variantLabel: 'stretchCells',
      cells: [<div key='stretch' className={styles.stretchContainer}>
                <FieldCode codeLength={6} size='m' label='Код' stretchCells />
              </div>]
    }]} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,m as default};
//# sourceMappingURL=FieldCode.VisualMatrix.stories-hVVWjcde.js.map