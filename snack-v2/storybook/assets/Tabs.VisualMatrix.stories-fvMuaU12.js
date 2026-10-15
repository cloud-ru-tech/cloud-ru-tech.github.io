import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CvoNiqmx.js";import{a as i,s as a,t as o}from"./src-B4jCjCpl.js";import{a as s,i as c,n as l,s as u,t as d}from"./src-Cx9oP-ZN.js";import{n as f,t as p}from"./styles.module-ZJs3zRNc.js";function m({variant:e}){return(0,_.jsx)(`div`,{className:f.wide,children:(0,_.jsx)(l,{defaultValue:`a`,children:(0,_.jsx)(l.TabBar,{variant:e,children:y.map(e=>(0,_.jsx)(l.Tab,{...e},e.value))})})})}function h({variant:e}){return(0,_.jsx)(`div`,{className:f.wide,children:(0,_.jsx)(l,{defaultValue:`a`,orientation:s.Vertical,children:(0,_.jsx)(l.TabBar,{variant:e,children:y.map(e=>(0,_.jsx)(l.Tab,{...e},e.value))})})})}function g({variant:e,orientation:t}){return(0,_.jsx)(`div`,{className:f.wide,children:(0,_.jsx)(l,{defaultValue:`a`,orientation:t,children:(0,_.jsx)(l.TabBar,{variant:e,afterContent:(0,_.jsx)(i,{size:e===u.Primary?`l`:`m`,label:`Создать`,appearance:a.Primary}),children:y.map(e=>(0,_.jsx)(l.Tab,{...e},e.value))})})})}var _,v,y,b,x;e((()=>{o(),d(),r(),p(),_=t(),v={title:`Snack/Navigation/Tabs/Tabs`,id:`components-tabs-tabs`,component:l,parameters:{layout:`fullscreen`}},y=[{value:`a`,label:`Alpha`},{value:`b`,label:`Beta`},{value:`c`,label:`Gamma`}],b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:f.matrix,children:[(0,_.jsx)(n,{sectionTitle:`Variant × Orientation`,firstColumnHeader:`Variant`,columnHeaders:[`horizontal`,`vertical`],rows:[u.Primary,u.Secondary].map(e=>({variantLabel:e,cells:[(0,_.jsx)(m,{variant:e},`h-${e}`),(0,_.jsx)(h,{variant:e},`v-${e}`)]}))}),(0,_.jsx)(n,{sectionTitle:`Action slot (afterContent) × Orientation`,firstColumnHeader:`Variant`,columnHeaders:[`horizontal`,`vertical`],rows:[u.Primary,u.Secondary].map(e=>({variantLabel:e,cells:[(0,_.jsx)(g,{variant:e,orientation:s.Horizontal},`ha-${e}`),(0,_.jsx)(g,{variant:e,orientation:s.Vertical},`va-${e}`)]}))}),(0,_.jsx)(n,{sectionTitle:`Variant × Marker position × Divider × Action`,firstColumnHeader:`Variant`,columnHeaders:[`horizontal`,`vertical`],rows:Object.values(u).flatMap(e=>Object.values(c).flatMap(t=>[!0,!1].flatMap(n=>[!1,!0].map(r=>({variantLabel:`${e} / ${t} / divider ${n} / action ${r}`,cells:Object.values(s).map(a=>(0,_.jsx)(l,{defaultValue:`a`,orientation:a,children:(0,_.jsx)(l.TabBar,{variant:e,markerPosition:t,divider:n,afterContent:r?(0,_.jsx)(i,{size:e===u.Primary?`l`:`m`,label:`Создать`}):void 0,children:y.map(e=>(0,_.jsx)(l.Tab,{...e,counter:{value:12}},e.value))})},a))})))))}),(0,_.jsx)(n,{sectionTitle:`Content variations`,firstColumnHeader:`Case`,columnHeaders:[`Tabs`],rows:[{variantLabel:`with counter`,cells:[(0,_.jsx)(`div`,{className:f.wide,children:(0,_.jsx)(l,{defaultValue:`a`,children:(0,_.jsxs)(l.TabBar,{children:[(0,_.jsx)(l.Tab,{value:`a`,label:`Входящие`,counter:{value:12}}),(0,_.jsx)(l.Tab,{value:`b`,label:`Архив`})]})})},`counter`)]},{variantLabel:`with disabled`,cells:[(0,_.jsx)(`div`,{className:f.wide,children:(0,_.jsx)(l,{defaultValue:`a`,children:(0,_.jsxs)(l.TabBar,{children:[(0,_.jsx)(l.Tab,{value:`a`,label:`Активен`}),(0,_.jsx)(l.Tab,{value:`b`,label:`Выключен`,disabled:!0})]})})},`disabled`)]}]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Variant × Orientation' firstColumnHeader='Variant' columnHeaders={['horizontal', 'vertical']} rows={([VARIANT.Primary, VARIANT.Secondary] as const).map(variant => ({
      variantLabel: variant,
      cells: [<HorizontalBar key={\`h-\${variant}\`} variant={variant} />, <VerticalBar key={\`v-\${variant}\`} variant={variant} />]
    }))} />

      <StoryTable sectionTitle='Action slot (afterContent) × Orientation' firstColumnHeader='Variant' columnHeaders={['horizontal', 'vertical']} rows={([VARIANT.Primary, VARIANT.Secondary] as const).map(variant => ({
      variantLabel: variant,
      cells: [<BarWithAction key={\`ha-\${variant}\`} variant={variant} orientation={ORIENTATION.Horizontal} />, <BarWithAction key={\`va-\${variant}\`} variant={variant} orientation={ORIENTATION.Vertical} />]
    }))} />

      <StoryTable sectionTitle='Variant × Marker position × Divider × Action' firstColumnHeader='Variant' columnHeaders={['horizontal', 'vertical']} rows={Object.values(VARIANT).flatMap(variant => Object.values(MARKER_POSITION).flatMap(markerPosition => [true, false].flatMap(divider => [false, true].map(showAction => ({
      variantLabel: \`\${variant} / \${markerPosition} / divider \${divider} / action \${showAction}\`,
      cells: Object.values(ORIENTATION).map(orientation => <Tabs key={orientation} defaultValue='a' orientation={orientation}>
                    <Tabs.TabBar variant={variant} markerPosition={markerPosition} divider={divider} afterContent={showAction ? <Button size={variant === VARIANT.Primary ? 'l' : 'm'} label='Создать' /> : undefined}>
                      {items.map(item => <Tabs.Tab key={item.value} {...item} counter={{
            value: 12
          }} />)}
                    </Tabs.TabBar>
                  </Tabs>)
    })))))} />

      <StoryTable sectionTitle='Content variations' firstColumnHeader='Case' columnHeaders={['Tabs']} rows={[{
      variantLabel: 'with counter',
      cells: [<div key='counter' className={styles.wide}>
                <Tabs defaultValue='a'>
                  <Tabs.TabBar>
                    <Tabs.Tab value='a' label='Входящие' counter={{
              value: 12
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
}`,...b.parameters?.docs?.source}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,v as default};
//# sourceMappingURL=Tabs.VisualMatrix.stories-fvMuaU12.js.map