import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D0mM8I4K.js";import{n as i,s as a,t as o}from"./src-D3zwBP0h.js";import{n as s,t as c}from"./styles.module-CGR4aHXH.js";var l,u,d,f,p,m,h;e((()=>{o(),r(),c(),l=t(),u={title:`Snack/Data display/Tag/TagRow`,id:`components-tag-tagrow`,component:i},d=Object.values(a),f=[{id:`1`,label:`Frontend`,appearance:`blue`},{id:`2`,label:`Backend`,appearance:`green`},{id:`3`,label:`Design`,appearance:`violet`},{id:`4`,label:`Mobile`,appearance:`orange`}],p=Array.from({length:16},(e,t)=>({id:String(t+1),label:[`Frontend infrastructure`,`Backend platform services`,`Design system foundations`,`Mobile native applications`,`Data engineering pipelines`,`Machine learning research`,`Developer experience tools`,`Internal developer platform`,`Security compliance audit`,`Site reliability engineering`,`Quality assurance automation`,`Product analytics dashboard`,`Customer success operations`,`Marketing growth campaigns`,`Finance reporting systems`,`Legal documentation review`][t],appearance:[`blue`,`green`,`violet`,`orange`,`pink`,`yellow`,`red`][t%7]})),m={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,l.jsxs)(`div`,{className:s.matrix,children:[(0,l.jsx)(n,{sectionTitle:`Size`,firstColumnHeader:`Size`,columnHeaders:[`Row`],rows:d.map(e=>({variantLabel:e,cells:[(0,l.jsx)(`div`,{className:s.rowContainer,children:(0,l.jsx)(i,{size:e,items:f})},e)]}))}),(0,l.jsx)(n,{sectionTitle:`Overflow — narrow container × rowLimit`,firstColumnHeader:`rowLimit`,columnHeaders:[`Narrow container, 16 long tags`],rows:[{variantLabel:`unset (wrap)`,cells:[(0,l.jsx)(`div`,{className:s.rowNarrow,children:(0,l.jsx)(i,{items:p})},`wrap`)]},{variantLabel:`rowLimit=1`,cells:[(0,l.jsx)(`div`,{className:s.rowNarrow,children:(0,l.jsx)(i,{items:p,rowLimit:1,moreButtonLabel:`+`})},`limit-1`)]},{variantLabel:`rowLimit=2`,cells:[(0,l.jsx)(`div`,{className:s.rowNarrow,children:(0,l.jsx)(i,{items:p,rowLimit:2,moreButtonLabel:`+`})},`limit-2`)]}]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size' firstColumnHeader='Size' columnHeaders={['Row']} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: [<div key={size} className={styles.rowContainer}>
              <TagRow size={size} items={ITEMS} />
            </div>]
    }))} />
      <StoryTable sectionTitle='Overflow — narrow container × rowLimit' firstColumnHeader='rowLimit' columnHeaders={['Narrow container, 16 long tags']} rows={[{
      variantLabel: 'unset (wrap)',
      cells: [<div key='wrap' className={styles.rowNarrow}>
                <TagRow items={LONG_ITEMS} />
              </div>]
    }, {
      variantLabel: 'rowLimit=1',
      cells: [<div key='limit-1' className={styles.rowNarrow}>
                <TagRow items={LONG_ITEMS} rowLimit={1} moreButtonLabel='+' />
              </div>]
    }, {
      variantLabel: 'rowLimit=2',
      cells: [<div key='limit-2' className={styles.rowNarrow}>
                <TagRow items={LONG_ITEMS} rowLimit={2} moreButtonLabel='+' />
              </div>]
    }]} />
    </div>
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,u as default};
//# sourceMappingURL=TagRow.VisualMatrix.stories-Bn0jkAoP.js.map