import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DBP7c9K6.js";import{t as i,z as a}from"./system-CgfancqT.js";import{c as o,l as s,o as c,t as l,u}from"./src-CGNjoSIi.js";var d,f,p,m,h;e((()=>{l(),i(),r(),d=t(),f={title:`AI/Primitives/ButtonGiga/Outline`,id:`ai-buttongiga-outline`,component:c,parameters:{layout:`padded`,controls:{disable:!0}}},p=[{key:`icon-before`,props:{label:`Label text`,iconPosition:s.Before}},{key:`icon-after`,props:{label:`Label text`,iconPosition:s.After}},{key:`label-only`,props:{label:`Label text`,icon:null}},{key:`icon-only`,props:{"aria-label":`Создать ресурс`}}],m={tags:[`dev`,`test`],render:()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{sectionTitle:`Размер и композиция`,firstColumnHeader:`Размер`,columnHeaders:p.map(e=>e.key),rows:Object.values(u).map(e=>({variantLabel:e,cells:p.map(t=>(0,d.jsx)(c,{size:e,...t.props},t.key))}))}),(0,d.jsx)(n,{sectionTitle:`Сменная иконка`,firstColumnHeader:`Размер`,columnHeaders:[`Иконка слева`,`Иконка справа`,`Загрузка`],rows:Object.values(u).map(e=>({variantLabel:e,cells:[(0,d.jsx)(c,{size:e,label:`Label text`,icon:(0,d.jsx)(a,{})},`before`),(0,d.jsx)(c,{size:e,label:`Label text`,icon:(0,d.jsx)(a,{}),iconPosition:s.After},`after`),(0,d.jsx)(c,{size:e,label:`Label text`,icon:(0,d.jsx)(a,{}),loading:!0},`loading`)]}))}),(0,d.jsx)(n,{sectionTitle:`Загрузка сохраняет композицию и ширину`,firstColumnHeader:`Композиция`,columnHeaders:[`Обычная`,`Загрузка`],rows:p.map(e=>({variantLabel:e.key,cells:[(0,d.jsx)(c,{...e.props},`default`),(0,d.jsx)(c,{...e.props,loading:!0},`loading`)]}))}),(0,d.jsx)(n,{sectionTitle:`Оформление и состояние`,firstColumnHeader:`Оформление`,columnHeaders:[`Обычная`,`Загрузка`,`Недоступная`],rows:Object.values(o).map(e=>({variantLabel:e,cells:[(0,d.jsx)(c,{appearance:e,label:`Label text`},`default`),(0,d.jsx)(c,{appearance:e,label:`Label text`,loading:!0},`loading`),(0,d.jsx)(c,{appearance:e,label:`Label text`,disabled:!0},`disabled`)]}))})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <>
      <StoryTable sectionTitle='Размер и композиция' firstColumnHeader='Размер' columnHeaders={compositions.map(c => c.key)} rows={Object.values(SIZE).map(size => ({
      variantLabel: size,
      cells: compositions.map(c => <AiButtonGigaOutline key={c.key} size={size} {...c.props} />)
    }))} />
      <StoryTable sectionTitle='Сменная иконка' firstColumnHeader='Размер' columnHeaders={['Иконка слева', 'Иконка справа', 'Загрузка']} rows={Object.values(SIZE).map(size => ({
      variantLabel: size,
      cells: [<AiButtonGigaOutline key='before' size={size} label='Label text' icon={<PlusSVG />} />, <AiButtonGigaOutline key='after' size={size} label='Label text' icon={<PlusSVG />} iconPosition={ICON_POSITION.After} />, <AiButtonGigaOutline key='loading' size={size} label='Label text' icon={<PlusSVG />} loading />]
    }))} />
      <StoryTable sectionTitle='Загрузка сохраняет композицию и ширину' firstColumnHeader='Композиция' columnHeaders={['Обычная', 'Загрузка']} rows={compositions.map(c => ({
      variantLabel: c.key,
      cells: [<AiButtonGigaOutline key='default' {...c.props} />, <AiButtonGigaOutline key='loading' {...c.props} loading />]
    }))} />
      <StoryTable sectionTitle='Оформление и состояние' firstColumnHeader='Оформление' columnHeaders={['Обычная', 'Загрузка', 'Недоступная']} rows={Object.values(APPEARANCE).map(appearance => ({
      variantLabel: appearance,
      cells: [<AiButtonGigaOutline key='default' appearance={appearance} label='Label text' />, <AiButtonGigaOutline key='loading' appearance={appearance} label='Label text' loading />, <AiButtonGigaOutline key='disabled' appearance={appearance} label='Label text' disabled />]
    }))} />
    </>
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,f as default};
//# sourceMappingURL=AiButtonGigaOutline.VisualMatrix.stories-C0I0sFvN.js.map