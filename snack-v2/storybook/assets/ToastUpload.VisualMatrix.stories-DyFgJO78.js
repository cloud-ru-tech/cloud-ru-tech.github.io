import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-SlIP-akt.js";import{a as i,d as a,f as o,l as s,s as c,t as l}from"./src-BMevuiWP.js";import{a as u,i as d,n as f,r as p,t as m}from"./uploadFixtures-CFwSx9RM.js";var h,g,_,v,y,b,x,S,C,w=e((()=>{h=`_matrix_6imw2_7`,g=`_progressCell_6imw2_14`,_=`_fileLineCell_6imw2_18`,v=`_fileLineDarkBg_6imw2_22`,y=`_playgroundPage_6imw2_28`,b=`_playgroundPanel_6imw2_35`,x=`_playgroundTitle_6imw2_48`,S=`_playgroundHint_6imw2_58`,C={matrix:h,progressCell:g,fileLineCell:_,fileLineDarkBg:v,playgroundPage:y,playgroundPanel:b,playgroundTitle:x,playgroundHint:S}})),T,E,D,O,k,A,j,M,N,P,F;e((()=>{l(),r(),u(),w(),T=t(),E={title:`Snack/Overlays/Toaster/ToastUpload`,id:`components-toaster-toastupload`,component:i,parameters:{layout:`padded`}},D=Object.values(o),O=Object.values(a),k={title:`Загрузка файлов`,progress:{current:2,total:4},generalActions:{}},A={loading:f,pause:p,error:m,uploaded:d,errorUploaded:m},j={loading:f,pause:p,error:m,uploaded:d},M=[`neutral`,`green`,`red`],N=[0,25,50,75,100],P={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,T.jsxs)(`div`,{className:C.matrix,children:[(0,T.jsx)(n,{sectionTitle:`Status × Collapsed`,firstColumnHeader:`Status`,columnHeaders:[`expanded`,`collapsed`],rows:D.map(e=>({variantLabel:e,cells:[!1,!0].map(t=>(0,T.jsx)(`div`,{className:C.fileLineCell,children:(0,T.jsx)(i,{...k,status:e,description:`Состояние: ${e}`,files:[A[e]],collapsed:t,closable:!0})},`${e}-${String(t)}`))}))}),(0,T.jsx)(n,{sectionTitle:`onCancelAll slot`,firstColumnHeader:`onCancelAll`,columnHeaders:[`expanded`,`collapsed`],rows:[{variantLabel:`present`,value:()=>void 0},{variantLabel:`absent`,value:void 0}].map(({variantLabel:e,value:t})=>({variantLabel:e,cells:[!1,!0].map(n=>(0,T.jsx)(`div`,{className:C.fileLineCell,children:(0,T.jsx)(i,{...k,status:o.Loading,description:`Состояние: loading`,files:[f],collapsed:n,closable:!0,onCancelAll:t})},`${e}-${String(n)}`))}))}),(0,T.jsx)(n,{sectionTitle:`File-line item status`,firstColumnHeader:`Item status`,columnHeaders:[`ToastUploadFileLine`],rows:O.map(e=>({variantLabel:e,cells:[(0,T.jsx)(`div`,{className:`${C.fileLineCell} ${C.fileLineDarkBg}`,children:(0,T.jsx)(c,{item:j[e]})},e)]}))}),(0,T.jsx)(n,{sectionTitle:`Progress appearance × percent`,firstColumnHeader:`Appearance`,columnHeaders:N.map(e=>`${e}%`),rows:M.map(e=>({variantLabel:e,cells:N.map(t=>(0,T.jsx)(`div`,{className:`${C.progressCell} ${C.fileLineDarkBg}`,children:(0,T.jsx)(s,{appearance:e,progress:t})},`${e}-${t}`))}))})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Status × Collapsed' firstColumnHeader='Status' columnHeaders={['expanded', 'collapsed']} rows={keyStatuses.map(status => ({
      variantLabel: status,
      cells: [false, true].map(collapsed => <div key={\`\${status}-\${String(collapsed)}\`} className={styles.fileLineCell}>
              <ToastUpload {...baseProps} status={status} description={\`Состояние: \${status}\`} files={[statusToFile[status]]} collapsed={collapsed} closable />
            </div>)
    }))} />

      <StoryTable sectionTitle='onCancelAll slot' firstColumnHeader='onCancelAll' columnHeaders={['expanded', 'collapsed']} rows={[{
      variantLabel: 'present',
      value: () => undefined
    }, {
      variantLabel: 'absent',
      value: undefined
    }].map(({
      variantLabel,
      value
    }) => ({
      variantLabel,
      cells: [false, true].map(collapsed => <div key={\`\${variantLabel}-\${String(collapsed)}\`} className={styles.fileLineCell}>
              <ToastUpload {...baseProps} status={TOAST_UPLOAD_STATUS.Loading} description='Состояние: loading' files={[fileLoading]} collapsed={collapsed} closable onCancelAll={value} />
            </div>)
    }))} />

      <StoryTable sectionTitle='File-line item status' firstColumnHeader='Item status' columnHeaders={['ToastUploadFileLine']} rows={itemStatuses.map(status => ({
      variantLabel: status,
      cells: [<div key={status} className={\`\${styles.fileLineCell} \${styles.fileLineDarkBg}\`}>
              <ToastUploadFileLine item={itemStatusToFile[status]} />
            </div>]
    }))} />

      <StoryTable sectionTitle='Progress appearance × percent' firstColumnHeader='Appearance' columnHeaders={progressPercents.map(p => \`\${p}%\`)} rows={progressAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: progressPercents.map(percent => <div key={\`\${appearance}-\${percent}\`} className={\`\${styles.progressCell} \${styles.fileLineDarkBg}\`}>
              <ToastUploadProgress appearance={appearance} progress={percent} />
            </div>)
    }))} />
    </div>
}`,...P.parameters?.docs?.source}}},F=[`VisualMatrix`]}))();export{P as VisualMatrix,F as __namedExportsOrder,E as default};
//# sourceMappingURL=ToastUpload.VisualMatrix.stories-DyFgJO78.js.map