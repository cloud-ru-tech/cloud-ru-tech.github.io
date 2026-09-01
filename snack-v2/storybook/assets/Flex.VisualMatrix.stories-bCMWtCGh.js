import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-B2mzxEaG.js";import{i,n as a,o,r as s,t as c}from"./styles.module-CsZ8ZzZq.js";var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{s(),r(),c(),l=t(),u={title:`Uikit Product/Layout/Flex`,id:`uikit-product-flex`,component:i,parameters:{figma:{disable:!0}}},d=(e,t=!1)=>(0,l.jsx)(`span`,{className:t?`${a.box} ${a.boxTall}`:a.box,children:e}),f=[d(1),d(2),d(3)],p=[`flex-start`,`center`,`flex-end`,`space-between`,`space-around`,`space-evenly`],m=[`flex-start`,`center`,`flex-end`,`baseline`,`stretch`],h=[`flex-start`,`center`,`flex-end`,`space-between`,`space-around`],g=[`nowrap`,`wrap`,`wrap-reverse`],_=[`visible`,`hidden`,`scroll`,`auto`],v=[o.Gap1,o.Gap2,o.Gap3,o.Gap5],y={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,l.jsxs)(`div`,{className:a.grid,children:[(0,l.jsx)(n,{sectionTitle:`Justify (main axis)`,firstColumnHeader:`justify`,columnHeaders:[`row`],rows:p.map(e=>({variantLabel:e,cells:[(0,l.jsx)(`div`,{className:a.mainAxisFrame,children:(0,l.jsx)(i,{fullWidth:!0,gap:o.Gap1,justify:e,children:f})},e)]}))}),(0,l.jsx)(n,{sectionTitle:`Align (cross axis)`,firstColumnHeader:`align`,columnHeaders:[`fixed height`],rows:m.map(e=>({variantLabel:e,cells:[(0,l.jsx)(`div`,{className:a.crossAxisFrame,children:(0,l.jsxs)(i,{fullWidth:!0,height:`100%`,gap:o.Gap1,align:e,children:[d(`a`),d(`b`,!0),d(`c`)]})},e)]}))}),(0,l.jsx)(n,{sectionTitle:`Direction × Gap`,firstColumnHeader:`direction`,columnHeaders:v.map(e=>e.toUpperCase()),rows:[`row`,`column`].map(e=>({variantLabel:e,cells:v.map(t=>(0,l.jsxs)(i,{direction:e,gap:t,children:[d(1),d(2)]},t))}))}),(0,l.jsx)(n,{sectionTitle:`Wrap (narrow frame)`,firstColumnHeader:`wrap`,columnHeaders:[`width 140`],rows:g.map(e=>({variantLabel:e,cells:[(0,l.jsx)(`div`,{className:a.wrapFrame,children:(0,l.jsxs)(i,{gap:o.Gap1,wrap:e,children:[d(1),d(2),d(3),d(4)]})},e)]}))}),(0,l.jsx)(n,{sectionTitle:`Row / Column gap (independent)`,firstColumnHeader:`props`,columnHeaders:[`wrapped grid`],rows:[{variantLabel:`columnGap=4m, rowGap=1m`,cells:[(0,l.jsx)(`div`,{className:a.wrapFrame,children:(0,l.jsxs)(i,{wrap:!0,columnGap:o.Gap4,rowGap:o.Gap1,children:[d(1),d(2),d(3),d(4)]})},`cg`)]},{variantLabel:`columnGap=1m, rowGap=4m`,cells:[(0,l.jsx)(`div`,{className:a.wrapFrame,children:(0,l.jsxs)(i,{wrap:!0,columnGap:o.Gap1,rowGap:o.Gap4,children:[d(1),d(2),d(3),d(4)]})},`rg`)]}]}),(0,l.jsx)(n,{sectionTitle:`Align content (multiline, tall frame)`,firstColumnHeader:`alignContent`,columnHeaders:[`wrap × tall`],rows:h.map(e=>({variantLabel:e,cells:[(0,l.jsx)(`div`,{className:a.alignContentFrame,children:(0,l.jsxs)(i,{fullWidth:!0,height:`100%`,wrap:!0,alignContent:e,gap:o.Gap1,children:[d(1),d(2),d(3),d(4),d(5),d(6)]})},e)]}))}),(0,l.jsx)(n,{sectionTitle:`Overflow (content larger than box)`,firstColumnHeader:`overflow`,columnHeaders:[`120×70 box`],rows:_.map(e=>({variantLabel:e,cells:[(0,l.jsx)(i,{className:a.overflowHost,overflow:e,width:120,height:70,children:(0,l.jsx)(`span`,{className:a.overflowContent})},e)]}))})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='Justify (main axis)' firstColumnHeader='justify' columnHeaders={['row']} rows={justifyValues.map(justify => ({
      variantLabel: justify,
      cells: [<div key={justify} className={styles.mainAxisFrame}>
              <Flex fullWidth gap={GAP_SIZE.Gap1} justify={justify}>
                {threeBoxes}
              </Flex>
            </div>]
    }))} />

      <StoryTable sectionTitle='Align (cross axis)' firstColumnHeader='align' columnHeaders={['fixed height']} rows={alignValues.map(align => ({
      variantLabel: align,
      cells: [<div key={align} className={styles.crossAxisFrame}>
              <Flex fullWidth height='100%' gap={GAP_SIZE.Gap1} align={align}>
                {box('a')}
                {box('b', true)}
                {box('c')}
              </Flex>
            </div>]
    }))} />

      <StoryTable sectionTitle='Direction × Gap' firstColumnHeader='direction' columnHeaders={gapValues.map(g => g.toUpperCase())} rows={(['row', 'column'] as const).map(direction => ({
      variantLabel: direction,
      cells: gapValues.map(gap => <Flex key={gap} direction={direction} gap={gap}>
              {box(1)}
              {box(2)}
            </Flex>)
    }))} />

      <StoryTable sectionTitle='Wrap (narrow frame)' firstColumnHeader='wrap' columnHeaders={['width 140']} rows={wrapValues.map(wrap => ({
      variantLabel: wrap,
      cells: [<div key={wrap} className={styles.wrapFrame}>
              <Flex gap={GAP_SIZE.Gap1} wrap={wrap}>
                {box(1)}
                {box(2)}
                {box(3)}
                {box(4)}
              </Flex>
            </div>]
    }))} />

      <StoryTable sectionTitle='Row / Column gap (independent)' firstColumnHeader='props' columnHeaders={['wrapped grid']} rows={[{
      variantLabel: 'columnGap=4m, rowGap=1m',
      cells: [<div key='cg' className={styles.wrapFrame}>
                <Flex wrap columnGap={GAP_SIZE.Gap4} rowGap={GAP_SIZE.Gap1}>
                  {box(1)}
                  {box(2)}
                  {box(3)}
                  {box(4)}
                </Flex>
              </div>]
    }, {
      variantLabel: 'columnGap=1m, rowGap=4m',
      cells: [<div key='rg' className={styles.wrapFrame}>
                <Flex wrap columnGap={GAP_SIZE.Gap1} rowGap={GAP_SIZE.Gap4}>
                  {box(1)}
                  {box(2)}
                  {box(3)}
                  {box(4)}
                </Flex>
              </div>]
    }]} />

      <StoryTable sectionTitle='Align content (multiline, tall frame)' firstColumnHeader='alignContent' columnHeaders={['wrap × tall']} rows={alignContentValues.map(alignContent => ({
      variantLabel: alignContent,
      cells: [<div key={alignContent} className={styles.alignContentFrame}>
              <Flex fullWidth height='100%' wrap alignContent={alignContent} gap={GAP_SIZE.Gap1}>
                {box(1)}
                {box(2)}
                {box(3)}
                {box(4)}
                {box(5)}
                {box(6)}
              </Flex>
            </div>]
    }))} />

      <StoryTable sectionTitle='Overflow (content larger than box)' firstColumnHeader='overflow' columnHeaders={['120×70 box']} rows={overflowValues.map(overflow => ({
      variantLabel: overflow,
      cells: [<Flex key={overflow} className={styles.overflowHost} overflow={overflow} width={120} height={70}>
              <span className={styles.overflowContent} />
            </Flex>]
    }))} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,u as default};
//# sourceMappingURL=Flex.VisualMatrix.stories-bCMWtCGh.js.map