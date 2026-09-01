import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-XppXgSyX.js";import{_ as i,f as a,m as o,n as s,r as c,t as l,u}from"./styles.module-C2FTKqZc.js";function d(e){return{position:`start`,lineStyle:`solid`,dotVariant:`default`,dotAppearance:`primary`,showLines:!0,...e}}function f(e){return(0,m.jsx)(`div`,{className:`${s.trackWithContent} ${s.trackWithContentAppearanceFill}`,children:(0,m.jsx)(u,{...e})})}function p(e){return(0,m.jsx)(`div`,{className:s.appearanceMatrixCell,children:(0,m.jsx)(f,{...d(e)})})}var m,h,g,_,v,y,b,x,S;e((()=>{c(),r(),l(),m=t(),h={title:`Snack/Data display/Timeline/Track`,id:`components-timeline-track`},g=Object.values(a),_=Object.values(o),v=Object.values(i),y=_.map(e=>e===`solid`?`Solid`:`Dashed`),b=[`neutral`,`primary`,`green`,`red`,`blue`,`orange`],x={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`section`,{className:s.matrixSection,"aria-labelledby":`track-matrix-position-line-default`,children:(0,m.jsx)(n,{sectionTitle:`Положение × стиль линии (точка default)`,firstColumnHeader:`Положение`,columnHeaders:y,rows:g.map(e=>({variantLabel:e,cells:_.map(t=>(0,m.jsx)(p,{position:e,lineStyle:t,dotVariant:`default`,dotAppearance:`primary`},`${e}-${t}-def`))}))})}),(0,m.jsx)(`section`,{className:s.matrixSection,"aria-labelledby":`track-matrix-position-line-sub`,children:(0,m.jsx)(n,{sectionTitle:`Положение × стиль линии (точка subEvent)`,firstColumnHeader:`Положение`,columnHeaders:y,rows:g.map(e=>({variantLabel:e,cells:_.map(t=>(0,m.jsx)(p,{position:e,lineStyle:t,dotVariant:`subEvent`,dotAppearance:`primary`},`${e}-${t}-sub`))}))})}),(0,m.jsx)(`section`,{className:s.matrixSection,"aria-labelledby":`track-matrix-appearance`,children:(0,m.jsx)(n,{sectionTitle:`Внешний вид точки (default)`,firstColumnHeader:`Appearance`,columnHeaders:y,rows:b.map(e=>({variantLabel:e,cells:_.map(t=>(0,m.jsx)(p,{position:a.Center,lineStyle:t,dotVariant:`default`,dotAppearance:e},`${e}-${t}`))}))})}),(0,m.jsx)(`section`,{className:s.matrixSection,"aria-labelledby":`track-matrix-variant`,children:(0,m.jsx)(n,{sectionTitle:`Вариант точки × appearance (center, dashed)`,firstColumnHeader:`Appearance`,columnHeaders:v.map(e=>e==="default"?`Default`:`SubEvent`),rows:b.map(e=>({variantLabel:e,cells:v.map(t=>(0,m.jsx)(p,{position:a.Center,lineStyle:`dashed`,dotVariant:t,dotAppearance:e},`${e}-${t}`))}))})})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <section className={styles.matrixSection} aria-labelledby='track-matrix-position-line-default'>
        <StoryTable sectionTitle='Положение × стиль линии (точка default)' firstColumnHeader='Положение' columnHeaders={lineColumnLabels} rows={positions.map(position => ({
        variantLabel: position,
        cells: lineStyles.map(lineStyle => <MatrixCellTrack key={\`\${position}-\${lineStyle}-def\`} position={position} lineStyle={lineStyle} dotVariant='default' dotAppearance='primary' />)
      }))} />
      </section>

      <section className={styles.matrixSection} aria-labelledby='track-matrix-position-line-sub'>
        <StoryTable sectionTitle='Положение × стиль линии (точка subEvent)' firstColumnHeader='Положение' columnHeaders={lineColumnLabels} rows={positions.map(position => ({
        variantLabel: position,
        cells: lineStyles.map(lineStyle => <MatrixCellTrack key={\`\${position}-\${lineStyle}-sub\`} position={position} lineStyle={lineStyle} dotVariant='subEvent' dotAppearance='primary' />)
      }))} />
      </section>

      <section className={styles.matrixSection} aria-labelledby='track-matrix-appearance'>
        <StoryTable sectionTitle='Внешний вид точки (default)' firstColumnHeader='Appearance' columnHeaders={lineColumnLabels} rows={appearanceSamples.map(appearance => ({
        variantLabel: appearance,
        cells: lineStyles.map(lineStyle => <MatrixCellTrack key={\`\${appearance}-\${lineStyle}\`} position={POSITION.Center} lineStyle={lineStyle} dotVariant='default' dotAppearance={appearance} />)
      }))} />
      </section>

      <section className={styles.matrixSection} aria-labelledby='track-matrix-variant'>
        <StoryTable sectionTitle='Вариант точки × appearance (center, dashed)' firstColumnHeader='Appearance' columnHeaders={dotVariants.map(v => v === 'default' ? 'Default' : 'SubEvent')} rows={appearanceSamples.map(appearance => ({
        variantLabel: appearance,
        cells: dotVariants.map(dotVariant => <MatrixCellTrack key={\`\${appearance}-\${dotVariant}\`} position={POSITION.Center} lineStyle='dashed' dotVariant={dotVariant} dotAppearance={appearance} />)
      }))} />
      </section>
    </>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,h as default};
//# sourceMappingURL=Track.VisualMatrix.stories-DwdgoNVA.js.map