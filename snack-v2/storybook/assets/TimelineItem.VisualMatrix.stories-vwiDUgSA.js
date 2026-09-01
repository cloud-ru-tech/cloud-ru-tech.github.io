import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-XppXgSyX.js";import{f as i,m as a,n as o,o as s,r as c,t as l}from"./styles.module-C2FTKqZc.js";import{n as u,t as d}from"./DemoComponent-DoEBmFp6.js";function f({children:e}){return(0,m.jsx)(`div`,{className:o.matrixCell,children:e})}function p(e){return{position:`start`,content:(0,m.jsx)(d,{title:`Content title`,description:`Description`}),showLines:!0,...e}}var m,h,g,_,v,y,b;e((()=>{c(),r(),u(),l(),m=t(),h={title:`Snack/Data display/Timeline/TimelineItem`,id:`components-timeline-timelineitem`},g=Object.values(i),_=Object.values(a),v=[`neutral`,`primary`,`green`,`red`,`blue`,`orange`],y={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`section`,{className:o.matrixSection,"aria-labelledby":`track-item-matrix-position-line`,children:(0,m.jsx)(n,{sectionTitle:`Положение × стиль линии`,firstColumnHeader:`Положение`,columnHeaders:_.map(e=>e===`solid`?`Solid`:`Dashed`),rows:g.map(e=>({variantLabel:e,cells:_.map(t=>(0,m.jsx)(f,{children:(0,m.jsx)(s,{...p({position:e,lineStyle:t,dotVariant:`default`,dotAppearance:`primary`})})},`${e}-${t}`))}))})}),(0,m.jsx)(`section`,{className:o.matrixSection,"aria-labelledby":`track-item-matrix-appearance`,children:(0,m.jsx)(n,{sectionTitle:`Внешний вид точки (default)`,firstColumnHeader:`Appearance`,columnHeaders:[`Right`,`Left`],rows:v.map(e=>({variantLabel:e,cells:[(0,m.jsx)(f,{children:(0,m.jsx)(s,{...p({contentPosition:`right`,position:i.Center,lineStyle:`dashed`,dotVariant:`default`,dotAppearance:e})})},`${e}-r`),(0,m.jsx)(f,{children:(0,m.jsx)(s,{...p({contentPosition:`left`,position:i.Center,lineStyle:`dashed`,dotVariant:`default`,dotAppearance:e})})},`${e}-l`)]}))})}),(0,m.jsx)(`section`,{className:o.matrixSection,"aria-labelledby":`track-item-matrix-variant`,children:(0,m.jsx)(n,{sectionTitle:`Вариант точки`,firstColumnHeader:``,columnHeaders:[`Default`,`SubEvent`],rows:[{variantLabel:`primary`,cells:[(0,m.jsx)(f,{children:(0,m.jsx)(s,{...p({position:`start`,dotVariant:`default`,dotAppearance:`primary`})})},`def`),(0,m.jsx)(f,{children:(0,m.jsx)(s,{...p({position:`start`,dotVariant:`subEvent`,dotAppearance:`primary`})})},`sub`)]},{variantLabel:`red`,cells:[(0,m.jsx)(f,{children:(0,m.jsx)(s,{...p({position:`start`,dotVariant:`default`,dotAppearance:`red`})})},`def-r`),(0,m.jsx)(f,{children:(0,m.jsx)(s,{...p({position:`start`,dotVariant:`subEvent`,dotAppearance:`red`})})},`sub-r`)]}]})})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <section className={styles.matrixSection} aria-labelledby='track-item-matrix-position-line'>
        <StoryTable sectionTitle='Положение × стиль линии' firstColumnHeader='Положение' columnHeaders={lineStyles.map(s => s === 'solid' ? 'Solid' : 'Dashed')} rows={positions.map(position => ({
        variantLabel: position,
        cells: lineStyles.map(lineStyle => <MatrixWrap key={\`\${position}-\${lineStyle}\`}>
                <TrackItem {...itemProps({
            position,
            lineStyle,
            dotVariant: 'default',
            dotAppearance: 'primary'
          })} />
              </MatrixWrap>)
      }))} />
      </section>

      <section className={styles.matrixSection} aria-labelledby='track-item-matrix-appearance'>
        <StoryTable sectionTitle='Внешний вид точки (default)' firstColumnHeader='Appearance' columnHeaders={['Right', 'Left']} rows={appearanceSamples.map(appearance => ({
        variantLabel: appearance,
        cells: [<MatrixWrap key={\`\${appearance}-r\`}>
                <TrackItem {...itemProps({
            contentPosition: 'right',
            position: POSITION.Center,
            lineStyle: 'dashed',
            dotVariant: 'default',
            dotAppearance: appearance
          })} />
              </MatrixWrap>, <MatrixWrap key={\`\${appearance}-l\`}>
                <TrackItem {...itemProps({
            contentPosition: 'left',
            position: POSITION.Center,
            lineStyle: 'dashed',
            dotVariant: 'default',
            dotAppearance: appearance
          })} />
              </MatrixWrap>]
      }))}
      // tableMinWidthPx={700}
      />
      </section>

      <section className={styles.matrixSection} aria-labelledby='track-item-matrix-variant'>
        <StoryTable sectionTitle='Вариант точки' firstColumnHeader='' columnHeaders={['Default', 'SubEvent']} rows={[{
        variantLabel: 'primary',
        cells: [<MatrixWrap key='def'>
                  <TrackItem {...itemProps({
            position: 'start',
            dotVariant: 'default',
            dotAppearance: 'primary'
          })} />
                </MatrixWrap>, <MatrixWrap key='sub'>
                  <TrackItem {...itemProps({
            position: 'start',
            dotVariant: 'subEvent',
            dotAppearance: 'primary'
          })} />
                </MatrixWrap>]
      }, {
        variantLabel: 'red',
        cells: [<MatrixWrap key='def-r'>
                  <TrackItem {...itemProps({
            position: 'start',
            dotVariant: 'default',
            dotAppearance: 'red'
          })} />
                </MatrixWrap>, <MatrixWrap key='sub-r'>
                  <TrackItem {...itemProps({
            position: 'start',
            dotVariant: 'subEvent',
            dotAppearance: 'red'
          })} />
                </MatrixWrap>]
      }]} />
      </section>
    </>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,h as default};
//# sourceMappingURL=TimelineItem.VisualMatrix.stories-vwiDUgSA.js.map