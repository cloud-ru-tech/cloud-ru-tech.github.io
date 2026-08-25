import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,gn as r,i,nt as a,t as o}from"./iframe-C96OK3Oq.js";import{c as s,i as c,l,t as u,u as d}from"./src-k1kJWTX_.js";import{n as f,t as p}from"./styles.module-CLj3_ONX.js";var m,h,g,_,v,y,b,x,S;e((()=>{a(),u(),o(),p(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Feedback/Alert/Alert`,id:`components-alert-alert`,component:c,parameters:{layout:`padded`}},_=[l.Neutral,l.Primary,l.Info,l.Success,l.Warning,l.Error],v=[d.S,d.M],y=[n.Desktop,n.Mobile],b=`Длинный заголовок уведомления, который не помещается в одну строку и усекается по-разному на desktop и mobile`,x={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{className:f.matrix,children:[(0,m.jsx)(i,{sectionTitle:`Appearance × Size (horizontal)`,firstColumnHeader:`Appearance`,columnHeaders:v.map(e=>e.toUpperCase()),rows:_.map(e=>({variantLabel:e,cells:v.map(t=>(0,m.jsx)(`div`,{className:f.container,children:(0,m.jsx)(c,{appearance:e,size:t,align:s.Horizontal,title:`Alert ${e}`,content:`Краткое описание`})},t))}))}),(0,m.jsx)(i,{sectionTitle:`Appearance × Vertical align (size=m)`,firstColumnHeader:`Appearance`,columnHeaders:[`vertical`],rows:_.map(e=>({variantLabel:e,cells:[(0,m.jsx)(`div`,{className:f.container,children:(0,m.jsx)(c,{appearance:e,size:`m`,align:s.Vertical,title:`Alert ${e}`,content:`Краткое описание уведомления, занимающее несколько строк для демонстрации vertical-выравнивания.`})},`v`)]}))}),(0,m.jsx)(i,{sectionTitle:`Slots — only content / actions / closable / collapsible (appearance=info, size=m)`,firstColumnHeader:`Slot`,columnHeaders:[`vertical`,`horizontal`],rows:[{variantLabel:`actions (primary)`,cells:[s.Vertical,s.Horizontal].map(e=>(0,m.jsx)(`div`,{className:f.container,children:(0,m.jsx)(c,{appearance:l.Info,size:`m`,align:e,title:`With primary action`,content:`Краткое описание`,actions:{primary:{label:`Принять`}}})},e))},{variantLabel:`actions (primary + secondary)`,cells:[s.Vertical,s.Horizontal].map(e=>(0,m.jsx)(`div`,{className:f.container,children:(0,m.jsx)(c,{appearance:l.Info,size:`m`,align:e,title:`With actions`,content:`Краткое описание`,actions:{primary:{label:`Принять`},secondary:{label:`Отклонить`}}})},e))},{variantLabel:`closable (onClose)`,cells:[s.Vertical,s.Horizontal].map(e=>(0,m.jsx)(`div`,{className:f.container,children:(0,m.jsx)(c,{appearance:l.Info,size:`m`,align:e,title:`Closable`,content:`Краткое описание`,onClose:h()})},e))},{variantLabel:`closable (onClose) + only content`,cells:[s.Vertical,s.Horizontal].map(e=>(0,m.jsx)(`div`,{className:f.container,children:(0,m.jsx)(c,{appearance:l.Info,size:`m`,align:e,content:`Краткое описание`,onClose:h()})},e))},{variantLabel:`collapsible`,cells:[s.Vertical,s.Horizontal].map(e=>(0,m.jsx)(`div`,{className:f.container,children:(0,m.jsx)(c,{appearance:l.Info,size:`m`,align:e,collapsible:!0,title:`Collapsible alert with a long title that requires expansion to read fully`,content:`Длинное описание уведомления, скрытое до раскрытия в режиме collapsible. Подробности раскрываются по клику на алёрт.`,onClose:h()})},e))}]}),(0,m.jsx)(i,{sectionTitle:`Appearance × Outline (size=m)`,firstColumnHeader:`Appearance`,columnHeaders:[`outline/false`,`outline/true`],rows:_.map(e=>({variantLabel:e,cells:[!1,!0].map(t=>(0,m.jsx)(`div`,{className:f.container,children:(0,m.jsx)(c,{appearance:e,outline:t,size:`m`,align:s.Horizontal,title:`Alert ${e}`,content:`Краткое описание`})},String(t)))}))}),(0,m.jsx)(i,{sectionTitle:`Adaptive preset — truncate.title (desktop 1 строка → mobile 2)`,firstColumnHeader:`layoutType`,columnHeaders:[`Длинный заголовок в узком контейнере`],rows:y.map(e=>({variantLabel:e,cells:[(0,m.jsx)(r,{layoutType:e,children:(0,m.jsx)(`div`,{className:f.adaptiveCell,children:(0,m.jsx)(c,{appearance:l.Info,size:`m`,title:b,content:`Краткое описание уведомления.`})})},e)]}))})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Appearance × Size (horizontal)' firstColumnHeader='Appearance' columnHeaders={keySizes.map(s => s.toUpperCase())} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keySizes.map(size => <div key={size} className={styles.container}>
              <Alert appearance={appearance} size={size} align={ALIGN.Horizontal} title={\`Alert \${appearance}\`} content='Краткое описание' />
            </div>)
    }))} />

      <StoryTable sectionTitle='Appearance × Vertical align (size=m)' firstColumnHeader='Appearance' columnHeaders={['vertical']} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: [<div key='v' className={styles.container}>
              <Alert appearance={appearance} size='m' align={ALIGN.Vertical} title={\`Alert \${appearance}\`} content='Краткое описание уведомления, занимающее несколько строк для демонстрации vertical-выравнивания.' />
            </div>]
    }))} />

      <StoryTable sectionTitle='Slots — only content / actions / closable / collapsible (appearance=info, size=m)' firstColumnHeader='Slot' columnHeaders={['vertical', 'horizontal']} rows={[{
      variantLabel: 'actions (primary)',
      cells: [ALIGN.Vertical, ALIGN.Horizontal].map(align => <div key={align} className={styles.container}>
                <Alert appearance={APPEARANCE.Info} size='m' align={align} title='With primary action' content='Краткое описание' actions={{
          primary: {
            label: 'Принять'
          }
        }} />
              </div>)
    }, {
      variantLabel: 'actions (primary + secondary)',
      cells: [ALIGN.Vertical, ALIGN.Horizontal].map(align => <div key={align} className={styles.container}>
                <Alert appearance={APPEARANCE.Info} size='m' align={align} title='With actions' content='Краткое описание' actions={{
          primary: {
            label: 'Принять'
          },
          secondary: {
            label: 'Отклонить'
          }
        }} />
              </div>)
    }, {
      variantLabel: 'closable (onClose)',
      cells: [ALIGN.Vertical, ALIGN.Horizontal].map(align => <div key={align} className={styles.container}>
                <Alert appearance={APPEARANCE.Info} size='m' align={align} title='Closable' content='Краткое описание' onClose={fn()} />
              </div>)
    }, {
      variantLabel: 'closable (onClose) + only content',
      cells: [ALIGN.Vertical, ALIGN.Horizontal].map(align => <div key={align} className={styles.container}>
                <Alert appearance={APPEARANCE.Info} size='m' align={align} content='Краткое описание' onClose={fn()} />
              </div>)
    }, {
      variantLabel: 'collapsible',
      cells: [ALIGN.Vertical, ALIGN.Horizontal].map(align => <div key={align} className={styles.container}>
                <Alert appearance={APPEARANCE.Info} size='m' align={align} collapsible title='Collapsible alert with a long title that requires expansion to read fully' content='Длинное описание уведомления, скрытое до раскрытия в режиме collapsible. Подробности раскрываются по клику на алёрт.' onClose={fn()} />
              </div>)
    }]} />

      <StoryTable sectionTitle='Appearance × Outline (size=m)' firstColumnHeader='Appearance' columnHeaders={['outline/false', 'outline/true']} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: [false, true].map(outline => <div key={String(outline)} className={styles.container}>
              <Alert appearance={appearance} outline={outline} size='m' align={ALIGN.Horizontal} title={\`Alert \${appearance}\`} content='Краткое описание' />
            </div>)
    }))} />

      <StoryTable sectionTitle='Adaptive preset — truncate.title (desktop 1 строка → mobile 2)' firstColumnHeader='layoutType' columnHeaders={['Длинный заголовок в узком контейнере']} rows={adaptiveLayouts.map(layoutType => ({
      variantLabel: layoutType,
      cells: [<AdaptiveProvider key={layoutType} layoutType={layoutType}>
              <div className={styles.adaptiveCell}>
                <Alert appearance={APPEARANCE.Info} size='m' title={ADAPTIVE_LONG_TITLE} content='Краткое описание уведомления.' />
              </div>
            </AdaptiveProvider>]
    }))} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,g as default};
//# sourceMappingURL=Alert.VisualMatrix.stories-C8l3jb0R.js.map