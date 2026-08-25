import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BUDedHtH.js";import{U as i,t as a}from"./system-DUR-qcAO.js";import{c as o,i as s,n as c,t as l}from"./src-BBA3wjbR.js";import{n as u,t as d}from"./styles.module-BJ59gSiF.js";function f({checked:e,...t}){return(0,p.jsx)(`div`,{className:u.column,children:(0,p.jsx)(c,{defaultValue:e?t.value:void 0,children:(0,p.jsx)(s,{...t})})})}var p,m,h,g,_,v,y;e((()=>{a(),l(),r(),d(),p=t(),m=[o.S,o.M,o.L],h={title:`Uikit Product/Inputs & Forms/TogglesPredefined/ToggleCard`,id:`uikit-product-togglespredefined-togglecard`,component:s,parameters:{layout:`padded`}},g={title:`Тариф Pro`,description:`100 ГБ хранилища, приоритетная поддержка`,emblem:{icon:i}},_=[!1,!0],v={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:u.matrix,children:[(0,p.jsx)(n,{sectionTitle:`Size`,firstColumnHeader:`Size`,columnHeaders:[`CARD`],rows:m.map(e=>({variantLabel:e.toUpperCase(),cells:[(0,p.jsx)(f,{size:e,emblem:{icon:i},title:`Тариф Pro`,description:`100 ГБ хранилища`,value:`size-${e}`,checked:!0},e)]}))}),(0,p.jsx)(n,{sectionTitle:`State × Checked`,firstColumnHeader:`State`,columnHeaders:[`UNCHECKED`,`CHECKED`],rows:[{variantLabel:`default`,cells:_.map(e=>(0,p.jsx)(f,{...g,value:`default`,checked:e},String(e)))},{variantLabel:`disabled`,cells:_.map(e=>(0,p.jsx)(f,{...g,value:`disabled`,disabled:!0,checked:e},String(e)))}]}),(0,p.jsx)(n,{sectionTitle:`Content slots`,firstColumnHeader:`Variant`,columnHeaders:[`VIEW`],rows:[{variantLabel:`noIcon`,cells:[(0,p.jsx)(f,{title:`Без иконки`,description:`Только текст`,value:`noIcon`},`noIcon`)]},{variantLabel:`titleOnly`,cells:[(0,p.jsx)(f,{title:`Только заголовок`,emblem:{icon:i},value:`titleOnly`},`titleOnly`)]},{variantLabel:`truncate`,cells:[(0,p.jsx)(f,{emblem:{icon:i},title:`Очень длинный заголовок, который обрезается в одну строку по дефолту`,description:`И длинное описание, которое по умолчанию обрезается до двух строк — этого текста хватает, чтобы перекрыть лимит и показать многоточие`,value:`truncate`},`truncate`)]},{variantLabel:`promoBadge`,cells:[(0,p.jsx)(f,{emblem:{icon:i},title:`Тариф Pro`,description:`С промо-бейджем`,promoBadge:`−20%`,value:`promoBadge`},`promoBadge`)]}]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size' firstColumnHeader='Size' columnHeaders={['CARD']} rows={keySizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [<Cell key={size} size={size} emblem={{
        icon: PlaceholderSVG
      }} title='Тариф Pro' description='100 ГБ хранилища' value={\`size-\${size}\`} checked />]
    }))} />

      <StoryTable sectionTitle='State × Checked' firstColumnHeader='State' columnHeaders={['UNCHECKED', 'CHECKED']} rows={[{
      variantLabel: 'default',
      cells: checkedColumns.map(checked => <Cell key={String(checked)} {...baseProps} value='default' checked={checked} />)
    }, {
      variantLabel: 'disabled',
      cells: checkedColumns.map(checked => <Cell key={String(checked)} {...baseProps} value='disabled' disabled checked={checked} />)
    }]} />

      <StoryTable sectionTitle='Content slots' firstColumnHeader='Variant' columnHeaders={['VIEW']} rows={[{
      variantLabel: 'noIcon',
      cells: [<Cell key='noIcon' title='Без иконки' description='Только текст' value='noIcon' />]
    }, {
      variantLabel: 'titleOnly',
      cells: [<Cell key='titleOnly' title='Только заголовок' emblem={{
        icon: PlaceholderSVG
      }} value='titleOnly' />]
    }, {
      variantLabel: 'truncate',
      cells: [<Cell key='truncate' emblem={{
        icon: PlaceholderSVG
      }} title='Очень длинный заголовок, который обрезается в одну строку по дефолту' description='И длинное описание, которое по умолчанию обрезается до двух строк — этого текста хватает, чтобы перекрыть лимит и показать многоточие' value='truncate' />]
    }, {
      variantLabel: 'promoBadge',
      cells: [<Cell key='promoBadge' emblem={{
        icon: PlaceholderSVG
      }} title='Тариф Pro' description='С промо-бейджем' promoBadge='−20%' value='promoBadge' />]
    }]} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,h as default};
//# sourceMappingURL=ToggleCard.VisualMatrix.stories-CPBfb4o9.js.map