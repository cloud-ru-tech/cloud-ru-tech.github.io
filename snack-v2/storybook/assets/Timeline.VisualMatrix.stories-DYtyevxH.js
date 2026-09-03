import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Bl-uTAel.js";import{i,n as a,r as o,t as s}from"./styles.module-Do_KhmyQ.js";import{n as c,t as l}from"./DemoComponent-C4vjMjIc.js";function u(){return[{content:(0,f.jsx)(l,{title:`Start`,description:`Description`}),dotAppearance:`primary`},{content:(0,f.jsx)(l,{title:`Center`,description:`Description`}),lineStyle:`dashed`},{content:(0,f.jsx)(l,{title:`Sub Center`,description:`Long description text for wrap`}),lineStyle:`dashed`,dotVariant:`subEvent`,dotAppearance:`red`},{content:(0,f.jsx)(l,{title:`End`,description:`Description`})}]}function d({children:e}){return(0,f.jsx)(`div`,{className:a.matrixCell,children:e})}var f,p,m,h;e((()=>{o(),r(),c(),s(),f=t(),p={title:`Snack/Data display/Timeline/Timeline`,id:`components-timeline-timeline`},m={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`section`,{className:a.matrixSection,"aria-labelledby":`timeline-matrix-layout`,children:(0,f.jsx)(n,{sectionTitle:`Расположение контента и режимы`,firstColumnHeader:`Режим`,columnHeaders:[`4 шага`],rows:[{variantLabel:`Right`,cells:[(0,f.jsx)(d,{children:(0,f.jsx)(i,{contentPosition:`right`,items:u()})},`r`)]},{variantLabel:`Left`,cells:[(0,f.jsx)(d,{children:(0,f.jsx)(i,{contentPosition:`left`,items:u()})},`l`)]},{variantLabel:`Full width`,cells:[(0,f.jsx)(d,{children:(0,f.jsx)(i,{contentPosition:`right`,fullWidth:!0,items:u()})},`fw`)]},{variantLabel:`Alternate`,cells:[(0,f.jsx)(d,{children:(0,f.jsx)(i,{contentPosition:`right`,alternate:!0,items:u()})},`alt`)]}]})}),(0,f.jsx)(`section`,{className:a.matrixSection,"aria-labelledby":`timeline-matrix-count`,children:(0,f.jsx)(n,{sectionTitle:`Количество пунктов`,firstColumnHeader:`Количество`,columnHeaders:[`Превью`],rows:[{variantLabel:`1 пункт`,cells:[(0,f.jsx)(d,{children:(0,f.jsx)(i,{items:u().slice(0,1)})},`1`)]},{variantLabel:`2 пункта`,cells:[(0,f.jsx)(d,{children:(0,f.jsx)(i,{items:u().slice(0,2)})},`2`)]},{variantLabel:`3 пункта`,cells:[(0,f.jsx)(d,{children:(0,f.jsx)(i,{items:u().slice(0,3)})},`3`)]}]})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <section className={styles.matrixSection} aria-labelledby='timeline-matrix-layout'>
        <StoryTable sectionTitle='Расположение контента и режимы' firstColumnHeader='Режим' columnHeaders={['4 шага']} rows={[{
        variantLabel: 'Right',
        cells: [<MatrixWrap key='r'>
                  <Timeline contentPosition='right' items={matrixItems()} />
                </MatrixWrap>]
      }, {
        variantLabel: 'Left',
        cells: [<MatrixWrap key='l'>
                  <Timeline contentPosition='left' items={matrixItems()} />
                </MatrixWrap>]
      }, {
        variantLabel: 'Full width',
        cells: [<MatrixWrap key='fw'>
                  <Timeline contentPosition='right' fullWidth items={matrixItems()} />
                </MatrixWrap>]
      }, {
        variantLabel: 'Alternate',
        cells: [<MatrixWrap key='alt'>
                  <Timeline contentPosition='right' alternate items={matrixItems()} />
                </MatrixWrap>]
      }]} />
      </section>

      <section className={styles.matrixSection} aria-labelledby='timeline-matrix-count'>
        <StoryTable sectionTitle='Количество пунктов' firstColumnHeader='Количество' columnHeaders={['Превью']} rows={[{
        variantLabel: '1 пункт',
        cells: [<MatrixWrap key='1'>
                  <Timeline items={matrixItems().slice(0, 1)} />
                </MatrixWrap>]
      }, {
        variantLabel: '2 пункта',
        cells: [<MatrixWrap key='2'>
                  <Timeline items={matrixItems().slice(0, 2)} />
                </MatrixWrap>]
      }, {
        variantLabel: '3 пункта',
        cells: [<MatrixWrap key='3'>
                  <Timeline items={matrixItems().slice(0, 3)} />
                </MatrixWrap>]
      }]} />
      </section>
    </>
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,p as default};
//# sourceMappingURL=Timeline.VisualMatrix.stories-DYtyevxH.js.map