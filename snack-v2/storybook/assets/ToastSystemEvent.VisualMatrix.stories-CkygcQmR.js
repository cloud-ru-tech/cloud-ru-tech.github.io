import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-SlIP-akt.js";import{b as i,t as a,v as o}from"./src-BMevuiWP.js";import{n as s,t as c}from"./styles.module-C_hnLPiN.js";var l,u,d,f,p,m,h,g,_;e((()=>{a(),r(),c(),l=t(),u={title:`Snack/Overlays/Toaster/ToastSystemEvent`,id:`components-toaster-toastsystemevent`,component:o,parameters:{layout:`padded`}},d=Object.values(i),f=()=>{},p=`Длинный заголовок уведомления, который должен переноситься на несколько строк`,m=`Подробное описание события — текст достаточно длинный, чтобы продемонстрировать wrap внутри узкого контейнера toaster.`,h=[{key:`plain`,props:{}},{key:`withLink`,props:{link:{label:`Подробнее`,href:`#`}}},{key:`withAction`,props:{action:[{label:`Основное`,onClick:f},{label:`Отмена`,onClick:f}]}}],g={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,l.jsxs)(`div`,{className:s.matrix,children:[(0,l.jsx)(n,{sectionTitle:`Appearance × Progress bar`,firstColumnHeader:`appearance`,columnHeaders:[`without progress`,`with progress (50%)`],rows:d.map(e=>({variantLabel:e,cells:[(0,l.jsx)(`div`,{className:s.toastCell,children:(0,l.jsx)(o,{appearance:e,closable:!0,progressBar:!1,title:`Заголовок`,description:`Короткое описание`})},`${e}-plain`),(0,l.jsx)(`div`,{className:`${s.toastCell} ${s.frozenProgressHalf}`,children:(0,l.jsx)(o,{appearance:e,closable:!0,progressBar:!0,autoClose:5e3,title:`Заголовок`,description:`Прогресс-полоса синхронизирована с autoClose`})},`${e}-progress`)]}))}),(0,l.jsx)(n,{sectionTitle:`Slots (appearance=neutral)`,firstColumnHeader:`slot`,columnHeaders:[`toast`],rows:h.map(e=>({variantLabel:e.key,cells:[(0,l.jsx)(`div`,{className:s.toastCell,children:(0,l.jsx)(o,{appearance:`neutral`,closable:!0,progressBar:!1,title:`Заголовок`,description:`Короткое описание`,...e.props})},e.key)]}))}),(0,l.jsx)(n,{sectionTitle:`Closable × Long content (appearance=neutral)`,firstColumnHeader:`closable`,columnHeaders:[`short`,`long wrap`],rows:[!0,!1].map(e=>({variantLabel:e?`true`:`false`,cells:[(0,l.jsx)(`div`,{className:s.toastCell,children:(0,l.jsx)(o,{appearance:`neutral`,closable:e,progressBar:!1,title:`Короткий заголовок`})},`${e}-short`),(0,l.jsx)(`div`,{className:s.toastCell,children:(0,l.jsx)(o,{appearance:`neutral`,closable:e,progressBar:!1,title:p,description:m})},`${e}-long`)]}))})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Appearance × Progress bar' firstColumnHeader='appearance' columnHeaders={['without progress', 'with progress (50%)']} rows={appearances.map(appearance => ({
      variantLabel: appearance,
      cells: [<div key={\`\${appearance}-plain\`} className={styles.toastCell}>
              <ToastSystemEvent appearance={appearance} closable progressBar={false} title='Заголовок' description='Короткое описание' />
            </div>, <div key={\`\${appearance}-progress\`} className={\`\${styles.toastCell} \${styles.frozenProgressHalf}\`}>
              <ToastSystemEvent appearance={appearance} closable progressBar autoClose={5000} title='Заголовок' description='Прогресс-полоса синхронизирована с autoClose' />
            </div>]
    }))} />

      <StoryTable sectionTitle='Slots (appearance=neutral)' firstColumnHeader='slot' columnHeaders={['toast']} rows={slotVariants.map(variant => ({
      variantLabel: variant.key,
      cells: [<div key={variant.key} className={styles.toastCell}>
              <ToastSystemEvent appearance='neutral' closable progressBar={false} title='Заголовок' description='Короткое описание' {...variant.props} />
            </div>]
    }))} />

      <StoryTable sectionTitle='Closable × Long content (appearance=neutral)' firstColumnHeader='closable' columnHeaders={['short', 'long wrap']} rows={[true, false].map(closable => ({
      variantLabel: closable ? 'true' : 'false',
      cells: [<div key={\`\${closable}-short\`} className={styles.toastCell}>
              <ToastSystemEvent appearance='neutral' closable={closable} progressBar={false} title='Короткий заголовок' />
            </div>, <div key={\`\${closable}-long\`} className={styles.toastCell}>
              <ToastSystemEvent appearance='neutral' closable={closable} progressBar={false} title={longTitle} description={longDescription} />
            </div>]
    }))} />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,u as default};
//# sourceMappingURL=ToastSystemEvent.VisualMatrix.stories-CkygcQmR.js.map