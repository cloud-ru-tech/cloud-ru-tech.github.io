import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DMWsC78w.js";import{V as i,t as a}from"./system-Cg9ynAJg.js";import{a as o,s,t as c,u as l}from"./src-CayYsASu.js";import{i as u,n as d,t as f}from"./src-B7_uutn4.js";var p,m,h=e((()=>{p=`_matrix_dr4j8_4`,m={matrix:p}})),g,_,v,y,b,x;e((()=>{c(),a(),f(),r(),h(),g=t(),_={title:`Snack/Foundation & utilities/SearchPrivate`,id:`components-searchprivate`,component:d,parameters:{layout:`padded`,figma:{disable:!0}}},v=Object.values(u),y=[`default`,`disabled`,`loading`],b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsxs)(`div`,{className:m.matrix,children:[(0,g.jsx)(n,{sectionTitle:`State × Size`,firstColumnHeader:`State`,columnHeaders:v.map(e=>e.toUpperCase()),rows:y.map(e=>({variantLabel:e,cells:v.map(t=>(0,g.jsx)(d,{size:t,placeholder:`Поиск`,disabled:e===`disabled`,loading:e===`loading`},`${e}-${t}`))}))}),(0,g.jsx)(n,{sectionTitle:`AfterContent × Size`,firstColumnHeader:`Слот`,columnHeaders:v.map(e=>e.toUpperCase()),rows:[{variantLabel:`без afterContent`,cells:v.map(e=>(0,g.jsx)(d,{size:e,placeholder:`Поиск`},`no-slot-${e}`))},{variantLabel:`с afterContent`,cells:v.map(e=>(0,g.jsx)(d,{size:e,placeholder:`Поиск`,afterContent:(0,g.jsx)(o,{size:e,view:l.Function,appearance:s.Neutral,icon:(0,g.jsx)(i,{}),minWidth:!1,onClick:()=>{}})},`slot-${e}`))}]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='State × Size' firstColumnHeader='State' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyStates.map(state => ({
      variantLabel: state,
      cells: keySizes.map(size => <SearchPrivate key={\`\${state}-\${size}\`} size={size} placeholder='Поиск' disabled={state === 'disabled'} loading={state === 'loading'} />)
    }))} />

      <StoryTable sectionTitle='AfterContent × Size' firstColumnHeader='Слот' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={[{
      variantLabel: 'без afterContent',
      cells: keySizes.map(size => <SearchPrivate key={\`no-slot-\${size}\`} size={size} placeholder='Поиск' />)
    }, {
      variantLabel: 'с afterContent',
      cells: keySizes.map(size => <SearchPrivate key={\`slot-\${size}\`} size={size} placeholder='Поиск' afterContent={<Button size={size} view={VIEW.Function} appearance={APPEARANCE.Neutral} icon={<PlaceholderSVG />} minWidth={false} onClick={() => {}} />} />)
    }]} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,_ as default};
//# sourceMappingURL=SearchPrivate.VisualMatrix.stories-tXBOB63z.js.map