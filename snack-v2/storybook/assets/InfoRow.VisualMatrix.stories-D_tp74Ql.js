import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{fn as n,gn as r,i,nt as a,t as o}from"./iframe-CvASAC9b.js";import{c as s,i as c,n as l,r as u,t as d}from"./testIds-DwiquVgA.js";var f,p,m,h,g,_;e((()=>{a(),o(),u(),l(),f=t(),p={title:`Uikit Product/Data display/InfoRow/InfoRow`,id:`uikit-product-inforow-inforow`,component:c,parameters:{layout:`padded`}},m=[s.First,s.Inner,s.Last],h=[r.Desktop,r.Mobile],g={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i,{sectionTitle:`LayoutType × Position`,firstColumnHeader:`layoutType`,columnHeaders:m,rows:h.map(e=>({variantLabel:e,cells:m.map(t=>(0,f.jsx)(n,{layoutType:e,children:(0,f.jsx)(c,{position:t,label:`Адаптивная метка`,content:`Значение`,topDivider:!0,bottomDivider:!0,"data-test-id":d.infoRow.layout(e,t)})},`${e}-${t}`))}))}),(0,f.jsx)(i,{sectionTitle:`Loading`,firstColumnHeader:`layoutType`,columnHeaders:[`idle`,`loading`],rows:h.map(e=>({variantLabel:e,cells:[!1,!0].map(t=>(0,f.jsx)(n,{layoutType:e,children:(0,f.jsx)(c,{position:s.Inner,label:`Метка`,content:`Значение`,loading:t,topDivider:!0,bottomDivider:!0,"data-test-id":d.infoRow.loading(e,t.toString())})},`${e}-${t}`))}))})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <StoryTable sectionTitle='LayoutType × Position' firstColumnHeader='layoutType' columnHeaders={positions as unknown as string[]} rows={layouts.map(layoutType => ({
      variantLabel: layoutType,
      cells: positions.map(position => <AdaptiveProvider key={\`\${layoutType}-\${position}\`} layoutType={layoutType}>
              <InfoRow position={position} label='Адаптивная метка' content='Значение' topDivider bottomDivider data-test-id={TEST_IDS.infoRow.layout(layoutType, position)} />
            </AdaptiveProvider>)
    }))} />
      <StoryTable sectionTitle='Loading' firstColumnHeader='layoutType' columnHeaders={['idle', 'loading']} rows={layouts.map(layoutType => ({
      variantLabel: layoutType,
      cells: [false, true].map(loading => <AdaptiveProvider key={\`\${layoutType}-\${loading}\`} layoutType={layoutType}>
              <InfoRow position={POSITION.Inner} label='Метка' content='Значение' loading={loading} topDivider bottomDivider data-test-id={TEST_IDS.infoRow.loading(layoutType, loading.toString())} />
            </AdaptiveProvider>)
    }))} />
    </>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,p as default};
//# sourceMappingURL=InfoRow.VisualMatrix.stories-D_tp74Ql.js.map