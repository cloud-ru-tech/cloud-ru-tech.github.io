import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,gn as r,i,nt as a,t as o}from"./iframe-Bl-uTAel.js";import{l as s,n as c,t as l}from"./src-BhKflFZM.js";import{n as u,t as d}from"./styles.module-CLj3_ONX.js";var f,p,m,h,g,_,v,y,b;e((()=>{a(),l(),o(),d(),f=t(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Snack/Feedback/Alert/AlertTop`,id:`components-alert-alerttop`,component:c,parameters:{layout:`padded`}},h=Object.values(s),g=[n.Desktop,n.Mobile],_=`Длинное системное уведомление, заголовок которого не помещается в одну строку`,v=`Подробное описание системного события: что произошло, кого касается и какие действия нужно предпринять. На mobile этот текст скрыт до раскрытия по клику.`,y={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(`div`,{className:u.matrix,children:[(0,f.jsx)(i,{sectionTitle:`Appearance × Icon`,firstColumnHeader:`Appearance`,columnHeaders:[`icon=true`,`icon=false`],rows:h.map(e=>({variantLabel:e,cells:[!0,!1].map(t=>(0,f.jsx)(`div`,{className:u.wide,children:(0,f.jsx)(c,{appearance:e,icon:t,title:`AlertTop ${e}`,content:`Краткое описание системного уведомления.`})},String(t)))}))}),(0,f.jsx)(i,{sectionTitle:`Appearance × Actions/onClose`,firstColumnHeader:`Appearance`,columnHeaders:[`with actions`,`with onClose`],rows:h.map(e=>({variantLabel:e,cells:[(0,f.jsx)(`div`,{className:u.wide,children:(0,f.jsx)(c,{appearance:e,title:`AlertTop ${e}`,content:`Краткое описание системного уведомления.`,actions:{primary:{label:`Принять`},secondary:{label:`Отклонить`}}})},`actions`),(0,f.jsx)(`div`,{className:u.wide,children:(0,f.jsx)(c,{appearance:e,title:`AlertTop ${e}`,content:`Краткое описание системного уведомления.`,onClose:p()})},`close`)]}))}),(0,f.jsx)(i,{sectionTitle:`Adaptive preset — collapsible (desktop плоский → mobile свёрнутый)`,firstColumnHeader:`layoutType`,columnHeaders:[`Длинный контент в узком контейнере`],rows:g.map(e=>({variantLabel:e,cells:[(0,f.jsx)(r,{layoutType:e,children:(0,f.jsx)(`div`,{className:u.adaptiveCell,children:(0,f.jsx)(c,{appearance:s.Warning,icon:!0,title:_,content:v,onClose:p()})})},e)]}))})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Appearance × Icon' firstColumnHeader='Appearance' columnHeaders={['icon=true', 'icon=false']} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: [true, false].map(icon => <div key={String(icon)} className={styles.wide}>
              <AlertTop appearance={appearance} icon={icon} title={\`AlertTop \${appearance}\`} content='Краткое описание системного уведомления.' />
            </div>)
    }))} />
      <StoryTable sectionTitle='Appearance × Actions/onClose' firstColumnHeader='Appearance' columnHeaders={['with actions', 'with onClose']} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: [<div key='actions' className={styles.wide}>
              <AlertTop appearance={appearance} title={\`AlertTop \${appearance}\`} content='Краткое описание системного уведомления.' actions={{
          primary: {
            label: 'Принять'
          },
          secondary: {
            label: 'Отклонить'
          }
        }} />
            </div>, <div key='close' className={styles.wide}>
              <AlertTop appearance={appearance} title={\`AlertTop \${appearance}\`} content='Краткое описание системного уведомления.' onClose={fn()} />
            </div>]
    }))} />

      <StoryTable sectionTitle='Adaptive preset — collapsible (desktop плоский → mobile свёрнутый)' firstColumnHeader='layoutType' columnHeaders={['Длинный контент в узком контейнере']} rows={adaptiveLayouts.map(layoutType => ({
      variantLabel: layoutType,
      cells: [<AdaptiveProvider key={layoutType} layoutType={layoutType}>
              <div className={styles.adaptiveCell}>
                <AlertTop appearance={APPEARANCE.Warning} icon title={ADAPTIVE_COLLAPSE_TITLE} content={ADAPTIVE_COLLAPSE_DESCRIPTION} onClose={fn()} />
              </div>
            </AdaptiveProvider>]
    }))} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,m as default};
//# sourceMappingURL=AlertTop.VisualMatrix.stories-B86OgEF2.js.map