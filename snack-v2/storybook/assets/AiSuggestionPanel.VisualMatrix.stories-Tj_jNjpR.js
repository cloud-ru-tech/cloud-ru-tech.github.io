import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,i as r,ot as i,t as a,wn as o}from"./iframe-DwFVG3U0.js";import{i as s,n as c,o as l,r as u,t as d}from"./constants-CO71BbSl.js";import{n as f,t as p}from"./styles.module-CoS9bkUz.js";var m,h,g,_,v,y,b,x,S,C;e((()=>{i(),u(),a(),c(),p(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`AI/Surfaces/AiSuggestionPanel`,id:`ai-aisuggestionpanel`,component:s,parameters:{layout:`padded`}},_=[l.S,l.M],[v]=d,y=[{label:`default`,item:v},{label:`disabled`,item:{...v,disabled:!0}},{label:`loading`,item:{...v,loading:!0}}],b=[{label:`1 вопрос`,items:d.slice(0,1),className:f.wide},{label:`2 вопроса`,items:d.slice(0,2),className:f.wide},{label:`5 вопросов, 720px`,items:d,className:f.wide},{label:`5 вопросов, 320px`,items:d,className:f.tight}],x=[o.Desktop,o.Mobile],S={tags:[`test`,`dev`,`no-a11y`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{className:f.matrix,children:[(0,m.jsx)(r,{sectionTitle:`Item state × Size`,firstColumnHeader:`State`,columnHeaders:_.map(e=>e.toUpperCase()),rows:y.map(({label:e,item:t})=>({variantLabel:e,cells:_.map(e=>(0,m.jsx)(s,{items:[t],size:e},e))}))}),(0,m.jsx)(r,{sectionTitle:`Состав и перенос в «+N» × Size`,firstColumnHeader:`Состав`,columnHeaders:_.map(e=>e.toUpperCase()),rows:b.map(({label:e,items:t,className:n})=>({variantLabel:e,cells:_.map(e=>(0,m.jsx)(`div`,{className:n,children:(0,m.jsx)(s,{items:t,size:e,onClose:h()})},e))}))}),(0,m.jsx)(r,{sectionTitle:`Layout type (size по пресету раскладки)`,firstColumnHeader:`Layout`,columnHeaders:[`3 вопроса`],rows:x.map(e=>({variantLabel:e,cells:[(0,m.jsx)(n,{layoutType:e,children:(0,m.jsx)(`div`,{className:f.wide,children:(0,m.jsx)(s,{items:d.slice(0,3),onClose:h()})})},e)]}))})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Item state × Size' firstColumnHeader='State' columnHeaders={keySizes.map(size => size.toUpperCase())} rows={itemStates.map(({
      label,
      item
    }) => ({
      variantLabel: label,
      cells: keySizes.map(size => <AiSuggestionPanel key={size} items={[item]} size={size} />)
    }))} />

      <StoryTable sectionTitle='Состав и перенос в «+N» × Size' firstColumnHeader='Состав' columnHeaders={keySizes.map(size => size.toUpperCase())} rows={compositions.map(({
      label,
      items,
      className
    }) => ({
      variantLabel: label,
      cells: keySizes.map(size => <div key={size} className={className}>
              <AiSuggestionPanel items={items} size={size} onClose={fn()} />
            </div>)
    }))} />

      <StoryTable sectionTitle='Layout type (size по пресету раскладки)' firstColumnHeader='Layout' columnHeaders={['3 вопроса']} rows={adaptiveLayouts.map(layoutType => ({
      variantLabel: layoutType,
      cells: [<LayoutScope key={layoutType} layoutType={layoutType}>
              <div className={styles.wide}>
                <AiSuggestionPanel items={QUESTIONS.slice(0, 3)} onClose={fn()} />
              </div>
            </LayoutScope>]
    }))} />
    </div>
}`,...S.parameters?.docs?.source}}},C=[`VisualMatrix`]}))();export{S as VisualMatrix,C as __namedExportsOrder,g as default};
//# sourceMappingURL=AiSuggestionPanel.VisualMatrix.stories-Tj_jNjpR.js.map