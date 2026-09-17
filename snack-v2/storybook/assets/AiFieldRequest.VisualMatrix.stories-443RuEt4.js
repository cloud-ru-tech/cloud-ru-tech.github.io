import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{i,t as a}from"./iframe-3hyK0IwQ.js";import{a as o,c as s,i as c,n as l,o as u,r as d,t as f}from"./testIds-BAP88e9I.js";function p({open:e=!1,testId:t,...n}){let[r,i]=(0,h.useState)(e);return(0,g.jsx)(u,{...n,open:r,onOpenChange:i,className:c.matrixCell,"data-test-id":t})}function m(e,t){return(0,g.jsx)(p,{...e,testId:t})}var h,g,_,v,y,b,x,S;t((()=>{o(),h=e(n(),1),a(),d(),l(),g=r(),_={title:`AI/Surfaces/AiFieldRequest`,id:`ai-aifieldrequest`,component:u,parameters:{layout:`padded`}},v=`Диски будут удалены вместе с машиной.`,y=`Виртуальная машина будет остановлена и удалена вместе с дисками. Дополнительное описание действия занимает несколько строк и используется для проверки раскрытия длинного текста в свёрнутом и развёрнутом состояниях. Ещё один абзац с нейтральным содержимым без привязки к предметной области. Третий абзац нужен, чтобы содержимое переполняло предел по высоте и на широком экране: тогда кнопка «Показать» появляется в любой ширине карточки, а не только в узкой.`,b={title:`Удалить виртуальную машину?`,primaryAction:{label:`Подтвердить`},secondaryAction:{label:`Отмена`},hint:`Подсказка под панелью`},x={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i,{className:c.matrixSection,sectionTitle:`Appearance × Expanded`,firstColumnHeader:`Appearance`,columnHeaders:[`Collapsed`,`Expanded`,`Loading`],rows:Object.values(s).map(e=>({variantLabel:e,cells:[m({...b,appearance:e,content:y},`${f.root}-${e}-collapsed`),m({...b,appearance:e,content:y,open:!0},`${f.root}-${e}-expanded`),m({...b,appearance:e,content:v,primaryAction:{label:`Подтвердить`,loading:!0}},`${f.root}-${e}-loading`)]}))}),(0,g.jsx)(i,{className:c.matrixSection,sectionTitle:`Collapsed maxHeight`,firstColumnHeader:`maxHeight`,columnHeaders:[`Collapsed`],rows:[{variantLabel:`88`,cells:[m({...b,content:y,maxHeight:88},`${f.root}-max-height-88`)]},{variantLabel:`44`,cells:[m({...b,content:y,maxHeight:44},`${f.root}-max-height-44`)]}]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <StoryTable className={styles.matrixSection} sectionTitle='Appearance × Expanded' firstColumnHeader='Appearance' columnHeaders={['Collapsed', 'Expanded', 'Loading']} rows={Object.values(APPEARANCE).map(appearance => ({
      variantLabel: appearance,
      cells: [renderCell({
        ...baseProps,
        appearance,
        content: LONG_CONTENT
      }, \`\${TEST_IDS.root}-\${appearance}-collapsed\`), renderCell({
        ...baseProps,
        appearance,
        content: LONG_CONTENT,
        open: true
      }, \`\${TEST_IDS.root}-\${appearance}-expanded\`), renderCell({
        ...baseProps,
        appearance,
        content: SHORT_CONTENT,
        primaryAction: {
          label: 'Подтвердить',
          loading: true
        }
      }, \`\${TEST_IDS.root}-\${appearance}-loading\`)]
    }))} />
      <StoryTable className={styles.matrixSection} sectionTitle='Collapsed maxHeight' firstColumnHeader='maxHeight' columnHeaders={['Collapsed']} rows={[{
      variantLabel: '88',
      cells: [renderCell({
        ...baseProps,
        content: LONG_CONTENT,
        maxHeight: 88
      }, \`\${TEST_IDS.root}-max-height-88\`)]
    }, {
      variantLabel: '44',
      cells: [renderCell({
        ...baseProps,
        content: LONG_CONTENT,
        maxHeight: 44
      }, \`\${TEST_IDS.root}-max-height-44\`)]
    }]} />
    </>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,_ as default};
//# sourceMappingURL=AiFieldRequest.VisualMatrix.stories-443RuEt4.js.map