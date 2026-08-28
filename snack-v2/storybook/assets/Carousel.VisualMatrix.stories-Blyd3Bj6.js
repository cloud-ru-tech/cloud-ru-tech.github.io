import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CSZ3Qkp5.js";import{i,n as a,t as o}from"./src-W9bwP_c4.js";import{n as s,t as c}from"./styles2.module-DfOMf7ik.js";function l(){return[(0,u.jsx)(`div`,{className:`${s.slide} ${s.slideIndigo}`,children:`Slide 1`},`1`),(0,u.jsx)(`div`,{className:`${s.slide} ${s.slideSky}`,children:`Slide 2`},`2`),(0,u.jsx)(`div`,{className:`${s.slide} ${s.slideEmerald}`,children:`Slide 3`},`3`)]}var u,d,f,p;e((()=>{o(),r(),c(),u=t(),d={title:`Snack/Layout & containers/Carousel`,id:`components-carousel`,component:a,parameters:{layout:`padded`}},f={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,u.jsxs)(`div`,{className:s.matrix,children:[(0,u.jsx)(n,{sectionTitle:`controlsVisibility × arrows`,firstColumnHeader:`Visibility`,columnHeaders:[`with arrows`],rows:[i.hover,i.always].map(e=>({variantLabel:e,cells:[(0,u.jsx)(`div`,{className:s.container,children:(0,u.jsx)(a,{controlsVisibility:e,children:l()})},e)]}))}),(0,u.jsx)(n,{sectionTitle:`showItems — 1 / 2 / 3`,firstColumnHeader:`showItems`,columnHeaders:[`Result`],rows:[1,2,3].map(e=>({variantLabel:String(e),cells:[(0,u.jsx)(`div`,{className:s.containerWide,children:(0,u.jsxs)(a,{showItems:e,gap:`12px`,children:[(0,u.jsx)(`div`,{className:s.card,children:`A`}),(0,u.jsx)(`div`,{className:s.card,children:`B`}),(0,u.jsx)(`div`,{className:s.card,children:`C`}),(0,u.jsx)(`div`,{className:s.card,children:`D`}),(0,u.jsx)(`div`,{className:s.card,children:`E`})]})},e)]}))})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='controlsVisibility × arrows' firstColumnHeader='Visibility' columnHeaders={['with arrows']} rows={[CONTROLS_VISIBILITY.hover, CONTROLS_VISIBILITY.always].map(v => ({
      variantLabel: v,
      cells: [<div key={v} className={styles.container}>
              <Carousel controlsVisibility={v}>{renderSlides()}</Carousel>
            </div>]
    }))} />

      <StoryTable sectionTitle='showItems — 1 / 2 / 3' firstColumnHeader='showItems' columnHeaders={['Result']} rows={[1, 2, 3].map(n => ({
      variantLabel: String(n),
      cells: [<div key={n} className={styles.containerWide}>
              <Carousel showItems={n} gap='12px'>
                <div className={styles.card}>A</div>
                <div className={styles.card}>B</div>
                <div className={styles.card}>C</div>
                <div className={styles.card}>D</div>
                <div className={styles.card}>E</div>
              </Carousel>
            </div>]
    }))} />
    </div>
}`,...f.parameters?.docs?.source}}},p=[`VisualMatrix`]}))();export{f as VisualMatrix,p as __namedExportsOrder,d as default};
//# sourceMappingURL=Carousel.VisualMatrix.stories-Blyd3Bj6.js.map