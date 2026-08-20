import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CvASAC9b.js";import{f as i,m as a,o,t as s}from"./src-hPmL3S2-.js";import{i as c,n as l,r as u,t as d}from"./SlotContent-ByCE-SFR.js";var f,p,m,h,g,_,v;e((()=>{r(),s(),l(),u(),f=t(),p=(0,f.jsx)(d,{}),m={title:`Snack/Inputs & Forms/Dropzone/Dropzone`,id:`components-dropzone-dropzone`,component:o},h=Object.values(i),g=Object.values(a),_={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{sectionTitle:`Mode × Size`,firstColumnHeader:`Mode`,columnHeaders:h.map(e=>e.toUpperCase()),rows:g.map(e=>({variantLabel:e,cells:h.map(t=>(0,f.jsx)(`div`,{className:c.dropzoneCell,children:(0,f.jsx)(o,{size:t,mode:e,onFilesUpload:()=>{},children:p})},`${e}-${t}`))}))}),(0,f.jsx)(n,{sectionTitle:`States`,firstColumnHeader:``,columnHeaders:[`Default`,`Disabled`],rows:[{variantLabel:``,cells:[(0,f.jsx)(`div`,{className:c.dropzoneCell,children:(0,f.jsx)(o,{mode:a.Multiple,onFilesUpload:()=>{},children:p})},`default`),(0,f.jsx)(`div`,{className:c.dropzoneCell,children:(0,f.jsx)(o,{disabled:!0,mode:a.Multiple,onFilesUpload:()=>{},children:p})},`disabled`)]}]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <StoryTable sectionTitle='Mode × Size' firstColumnHeader='Mode' columnHeaders={sizes.map(s => s.toUpperCase())} rows={modes.map(mode => ({
      variantLabel: mode,
      cells: sizes.map(size => <div key={\`\${mode}-\${size}\`} className={styles.dropzoneCell}>
              <Dropzone size={size} mode={mode} onFilesUpload={() => {}}>
                {slotContent}
              </Dropzone>
            </div>)
    }))} />

      <StoryTable sectionTitle='States' firstColumnHeader='' columnHeaders={['Default', 'Disabled']} rows={[{
      variantLabel: '',
      cells: [<div key='default' className={styles.dropzoneCell}>
                <Dropzone mode={UPLOAD_MODE.Multiple} onFilesUpload={() => {}}>
                  {slotContent}
                </Dropzone>
              </div>, <div key='disabled' className={styles.dropzoneCell}>
                <Dropzone disabled mode={UPLOAD_MODE.Multiple} onFilesUpload={() => {}}>
                  {slotContent}
                </Dropzone>
              </div>]
    }]} />
    </>
}`,..._.parameters?.docs?.source}}},v=[`VisualMatrix`]}))();export{_ as VisualMatrix,v as __namedExportsOrder,m as default};
//# sourceMappingURL=Dropzone.VisualMatrix.stories-Jja2yp5W.js.map