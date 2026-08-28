import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CSZ3Qkp5.js";import{a as i,n as a,t as o}from"./src-WrLdadis.js";import{n as s,t as c}from"./styles.module-BRWQeK1Q.js";var l,u,d,f,p,m,h,g,_;e((()=>{o(),r(),c(),l=t(),u={title:`Snack/Typography/TruncateString`,id:`components-truncatestring`,component:a,parameters:{layout:`padded`,figma:{disable:!0}}},d=`Короткий текст`,f=`Текст средней длины, который возможно не поместится`,p=`Очень длинный текст, который точно не поместится в узкий контейнер и должен быть обрезан`,m=[{key:`160px`,className:s.containerNarrow},{key:`220px`,className:s.container},{key:`360px`,className:s.containerWide}],h=[{key:`short`,text:d},{key:`medium`,text:f},{key:`long`,text:p}],g={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,l.jsxs)(`div`,{className:s.matrix,children:[(0,l.jsx)(n,{sectionTitle:`Variant × Width (text=long, maxLines=1)`,firstColumnHeader:`Variant`,columnHeaders:m.map(e=>e.key),rows:[{variantLabel:`end`,cells:m.map(e=>(0,l.jsx)(`div`,{className:e.className,children:(0,l.jsx)(a,{variant:i.End,text:p,maxLines:1})},e.key))},{variantLabel:`middle`,cells:m.map(e=>(0,l.jsx)(`div`,{className:e.className,children:(0,l.jsx)(a,{variant:i.Middle,text:p})},e.key))}]}),(0,l.jsx)(n,{sectionTitle:`Text length × Variant (width=220)`,firstColumnHeader:`Length`,columnHeaders:[`end`,`middle`],rows:h.map(e=>({variantLabel:e.key,cells:[(0,l.jsx)(`div`,{className:s.container,children:(0,l.jsx)(a,{variant:i.End,text:e.text,maxLines:1})},`end`),(0,l.jsx)(`div`,{className:s.container,children:(0,l.jsx)(a,{variant:i.Middle,text:e.text})},`middle`)]}))}),(0,l.jsx)(n,{sectionTitle:`maxLines (variant=end, width=220)`,firstColumnHeader:`maxLines`,columnHeaders:[`Result`],rows:[1,2,3].map(e=>({variantLabel:String(e),cells:[(0,l.jsx)(`div`,{className:s.container,children:(0,l.jsx)(a,{variant:i.End,text:`Длинное описание задачи или комментария, которое можно обрезать по числу строк`,maxLines:e})},e)]}))})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Variant × Width (text=long, maxLines=1)' firstColumnHeader='Variant' columnHeaders={widths.map(w => w.key)} rows={[{
      variantLabel: 'end',
      cells: widths.map(w => <div key={w.key} className={w.className}>
                <TruncateString variant={VARIANT.End} text={LONG} maxLines={1} />
              </div>)
    }, {
      variantLabel: 'middle',
      cells: widths.map(w => <div key={w.key} className={w.className}>
                <TruncateString variant={VARIANT.Middle} text={LONG} />
              </div>)
    }]} />

      <StoryTable sectionTitle='Text length × Variant (width=220)' firstColumnHeader='Length' columnHeaders={['end', 'middle']} rows={samples.map(s => ({
      variantLabel: s.key,
      cells: [<div key='end' className={styles.container}>
              <TruncateString variant={VARIANT.End} text={s.text} maxLines={1} />
            </div>, <div key='middle' className={styles.container}>
              <TruncateString variant={VARIANT.Middle} text={s.text} />
            </div>]
    }))} />

      <StoryTable sectionTitle='maxLines (variant=end, width=220)' firstColumnHeader='maxLines' columnHeaders={['Result']} rows={[1, 2, 3].map(n => ({
      variantLabel: String(n),
      cells: [<div key={n} className={styles.container}>
              <TruncateString variant={VARIANT.End} text='Длинное описание задачи или комментария, которое можно обрезать по числу строк' maxLines={n} />
            </div>]
    }))} />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,u as default};
//# sourceMappingURL=TruncateString.VisualMatrix.stories-CDSmeHPv.js.map