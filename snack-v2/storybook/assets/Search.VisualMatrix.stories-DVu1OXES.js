import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-XppXgSyX.js";import{U as i,t as a}from"./system-D36IQX-A.js";import{a as o,s,t as c,u as l}from"./src-BaQeOyft.js";import{i as u,n as d,t as f}from"./src-Da5Dsffm.js";var p,m,h,g=e((()=>{p=`_matrix_cnvv8_4`,m=`_item_cnvv8_9`,h={matrix:p,item:m}}));function _(e){return(0,y.jsx)(o,{size:e,view:l.Function,appearance:s.Neutral,icon:(0,y.jsx)(i,{}),minWidth:!1,onClick:()=>{}})}function v({children:e}){return(0,y.jsx)(`div`,{className:h.item,children:e})}var y,b,x,S,C;e((()=>{c(),a(),f(),r(),g(),y=t(),b={title:`Snack/Inputs & Forms/Search`,id:`components-search`,component:d,parameters:{layout:`padded`}},x=[u.S,u.M,u.L],S={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,y.jsxs)(`div`,{className:h.matrix,children:[(0,y.jsx)(n,{sectionTitle:`Size × State`,firstColumnHeader:`Size`,columnHeaders:[`default`,`loading`,`disabled`],rows:x.map(e=>({variantLabel:e,cells:[(0,y.jsx)(v,{children:(0,y.jsx)(d,{size:e,placeholder:`Поиск`})},`${e}-d`),(0,y.jsx)(v,{children:(0,y.jsx)(d,{size:e,placeholder:`Поиск`,loading:!0})},`${e}-l`),(0,y.jsx)(v,{children:(0,y.jsx)(d,{size:e,placeholder:`Поиск`,disabled:!0})},`${e}-dis`)]}))}),(0,y.jsx)(n,{sectionTitle:`AfterContent × Size`,firstColumnHeader:`Слот`,columnHeaders:x.map(e=>e.toUpperCase()),rows:[{variantLabel:`без afterContent`,cells:x.map(e=>(0,y.jsx)(v,{children:(0,y.jsx)(d,{size:e,placeholder:`Поиск`})},`no-slot-${e}`))},{variantLabel:`с afterContent`,cells:x.map(e=>(0,y.jsx)(v,{children:(0,y.jsx)(d,{size:e,placeholder:`Поиск`,afterContent:_(e)})},`slot-${e}`))}]}),(0,y.jsx)(n,{sectionTitle:`Outline`,firstColumnHeader:`Вариант`,columnHeaders:[`Search`],rows:[{variantLabel:`outline=true`,cells:[(0,y.jsx)(v,{children:(0,y.jsx)(d,{placeholder:`Поиск`,outline:!0,afterContent:_(u.M)})},`outline-on`)]},{variantLabel:`outline=false`,cells:[(0,y.jsx)(v,{children:(0,y.jsx)(d,{placeholder:`Поиск`,outline:!1,afterContent:_(u.M)})},`outline-off`)]}]}),(0,y.jsx)(n,{sectionTitle:`Background`,firstColumnHeader:`Вариант`,columnHeaders:[`Search`],rows:[{variantLabel:`с фоном`,cells:[(0,y.jsx)(v,{children:(0,y.jsx)(d,{placeholder:`Поиск`,background:!0})},`bg-on`)]},{variantLabel:`без фона`,cells:[(0,y.jsx)(v,{children:(0,y.jsx)(d,{placeholder:`Поиск`,background:!1})},`bg-off`)]}]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × State' firstColumnHeader='Size' columnHeaders={['default', 'loading', 'disabled']} rows={sizes.map(size => ({
      variantLabel: size,
      cells: [<Wrap key={\`\${size}-d\`}>
              <Search size={size} placeholder='Поиск' />
            </Wrap>, <Wrap key={\`\${size}-l\`}>
              <Search size={size} placeholder='Поиск' loading />
            </Wrap>, <Wrap key={\`\${size}-dis\`}>
              <Search size={size} placeholder='Поиск' disabled />
            </Wrap>]
    }))} />

      <StoryTable sectionTitle='AfterContent × Size' firstColumnHeader='Слот' columnHeaders={sizes.map(size => size.toUpperCase())} rows={[{
      variantLabel: 'без afterContent',
      cells: sizes.map(size => <Wrap key={\`no-slot-\${size}\`}>
                <Search size={size} placeholder='Поиск' />
              </Wrap>)
    }, {
      variantLabel: 'с afterContent',
      cells: sizes.map(size => <Wrap key={\`slot-\${size}\`}>
                <Search size={size} placeholder='Поиск' afterContent={afterContentSlot(size)} />
              </Wrap>)
    }]} />

      <StoryTable sectionTitle='Outline' firstColumnHeader='Вариант' columnHeaders={['Search']} rows={[{
      variantLabel: 'outline=true',
      cells: [<Wrap key='outline-on'>
                <Search placeholder='Поиск' outline afterContent={afterContentSlot(SIZE.M)} />
              </Wrap>]
    }, {
      variantLabel: 'outline=false',
      cells: [<Wrap key='outline-off'>
                <Search placeholder='Поиск' outline={false} afterContent={afterContentSlot(SIZE.M)} />
              </Wrap>]
    }]} />

      <StoryTable sectionTitle='Background' firstColumnHeader='Вариант' columnHeaders={['Search']} rows={[{
      variantLabel: 'с фоном',
      cells: [<Wrap key='bg-on'>
                <Search placeholder='Поиск' background />
              </Wrap>]
    }, {
      variantLabel: 'без фона',
      cells: [<Wrap key='bg-off'>
                <Search placeholder='Поиск' background={false} />
              </Wrap>]
    }]} />
    </div>
}`,...S.parameters?.docs?.source}}},C=[`VisualMatrix`]}))();export{S as VisualMatrix,C as __namedExportsOrder,b as default};
//# sourceMappingURL=Search.VisualMatrix.stories-DVu1OXES.js.map