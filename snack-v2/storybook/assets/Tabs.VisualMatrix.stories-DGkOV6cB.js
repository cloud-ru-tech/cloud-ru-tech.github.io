import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D0mM8I4K.js";import{a as i,s as a,t as o}from"./src-C_Cm6ZJt.js";import{a as s,i as c,n as l,t as u}from"./src-BZ50m7US.js";import{n as d,t as f}from"./styles.module-xx7oZnK-.js";function p({size:e}){return(0,g.jsx)(`div`,{className:d.wide,children:(0,g.jsx)(l,{defaultValue:`a`,children:(0,g.jsx)(l.TabBar,{size:e,children:v.map(e=>(0,g.jsx)(l.Tab,{...e},e.value))})})})}function m({size:e}){return(0,g.jsx)(`div`,{className:d.wide,children:(0,g.jsx)(l,{defaultValue:`a`,children:(0,g.jsx)(l.TabBar,{size:e,orientation:c.Vertical,children:v.map(e=>(0,g.jsx)(l.Tab,{...e},e.value))})})})}function h({size:e,orientation:t}){return(0,g.jsx)(`div`,{className:d.wide,children:(0,g.jsx)(l,{defaultValue:`a`,children:(0,g.jsx)(l.TabBar,{size:e,orientation:t,slotActionButton:(0,g.jsx)(i,{size:e,label:`Создать`,appearance:a.Primary}),children:v.map(e=>(0,g.jsx)(l.Tab,{...e},e.value))})})})}var g,_,v,y,b;e((()=>{o(),u(),r(),f(),g=t(),_={title:`Snack/Navigation/Tabs/Tabs`,id:`components-tabs-tabs`,component:l,parameters:{layout:`fullscreen`}},v=[{value:`a`,label:`Alpha`},{value:`b`,label:`Beta`},{value:`c`,label:`Gamma`}],y={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsxs)(`div`,{className:d.matrix,children:[(0,g.jsx)(n,{sectionTitle:`Size × Orientation`,firstColumnHeader:`Size`,columnHeaders:[`horizontal`,`vertical`],rows:[s.L,s.M].map(e=>({variantLabel:e,cells:[(0,g.jsx)(p,{size:e},`h-${e}`),(0,g.jsx)(m,{size:e},`v-${e}`)]}))}),(0,g.jsx)(n,{sectionTitle:`Action slot (slotActionButton) × Orientation`,firstColumnHeader:`Size`,columnHeaders:[`horizontal`,`vertical`],rows:[s.L,s.M].map(e=>({variantLabel:e,cells:[(0,g.jsx)(h,{size:e,orientation:c.Horizontal},`ha-${e}`),(0,g.jsx)(h,{size:e,orientation:c.Vertical},`va-${e}`)]}))}),(0,g.jsx)(n,{sectionTitle:`Content variations`,firstColumnHeader:`Case`,columnHeaders:[`Tabs`],rows:[{variantLabel:`with counter`,cells:[(0,g.jsx)(`div`,{className:d.wide,children:(0,g.jsx)(l,{defaultValue:`a`,children:(0,g.jsxs)(l.TabBar,{children:[(0,g.jsx)(l.Tab,{value:`a`,label:`Входящие`,counter:{label:12}}),(0,g.jsx)(l.Tab,{value:`b`,label:`Архив`})]})})},`counter`)]},{variantLabel:`with disabled`,cells:[(0,g.jsx)(`div`,{className:d.wide,children:(0,g.jsx)(l,{defaultValue:`a`,children:(0,g.jsxs)(l.TabBar,{children:[(0,g.jsx)(l.Tab,{value:`a`,label:`Активен`}),(0,g.jsx)(l.Tab,{value:`b`,label:`Выключен`,disabled:!0})]})})},`disabled`)]}]})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × Orientation' firstColumnHeader='Size' columnHeaders={['horizontal', 'vertical']} rows={([SIZE.L, SIZE.M] as const).map(size => ({
      variantLabel: size,
      cells: [<HorizontalBar key={\`h-\${size}\`} size={size} />, <VerticalBar key={\`v-\${size}\`} size={size} />]
    }))} />

      <StoryTable sectionTitle='Action slot (slotActionButton) × Orientation' firstColumnHeader='Size' columnHeaders={['horizontal', 'vertical']} rows={([SIZE.L, SIZE.M] as const).map(size => ({
      variantLabel: size,
      cells: [<BarWithAction key={\`ha-\${size}\`} size={size} orientation={ORIENTATION.Horizontal} />, <BarWithAction key={\`va-\${size}\`} size={size} orientation={ORIENTATION.Vertical} />]
    }))} />

      <StoryTable sectionTitle='Content variations' firstColumnHeader='Case' columnHeaders={['Tabs']} rows={[{
      variantLabel: 'with counter',
      cells: [<div key='counter' className={styles.wide}>
                <Tabs defaultValue='a'>
                  <Tabs.TabBar>
                    <Tabs.Tab value='a' label='Входящие' counter={{
              label: 12
            }} />
                    <Tabs.Tab value='b' label='Архив' />
                  </Tabs.TabBar>
                </Tabs>
              </div>]
    }, {
      variantLabel: 'with disabled',
      cells: [<div key='disabled' className={styles.wide}>
                <Tabs defaultValue='a'>
                  <Tabs.TabBar>
                    <Tabs.Tab value='a' label='Активен' />
                    <Tabs.Tab value='b' label='Выключен' disabled />
                  </Tabs.TabBar>
                </Tabs>
              </div>]
    }]} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,_ as default};
//# sourceMappingURL=Tabs.VisualMatrix.stories-DGkOV6cB.js.map