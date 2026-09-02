import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-D4MTfTET.js";import{c as i,t as a,u as o}from"./src-BW_UAl_T.js";import{i as s,n as c,o as l,r as u,t as d}from"./styles.module-CKY6EEdt.js";var f,p,m,h,g,_,v,y;e((()=>{a(),u(),r(),d(),f=t(),p=e=>[{appearance:e,condition:l.Lte,limit:100}],m={title:`Uikit Product/Feedback/LoadStatus`,id:`uikit-product-loadstatus`,component:s,parameters:{layout:`padded`}},h=[o.S,o.XS],g=[i.Primary,i.Neutral,i.Orange,i.Yellow,i.Green,i.Blue,i.Violet,i.Pink],_={label:`Label`,value:`Value`,hint:`Hint`,progress:60,valueType:`percent`},v={tags:[`test`,`dev`,`no-a11y`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsxs)(`div`,{className:c.matrix,children:[(0,f.jsx)(n,{sectionTitle:`Figma: appearance x size (showError=false)`,firstColumnHeader:`appearance`,columnHeaders:h.map(e=>e.toUpperCase()),rows:g.map(e=>({variantLabel:e,cells:h.map(t=>(0,f.jsx)(`div`,{className:c.column,children:(0,f.jsx)(s,{..._,size:t,appearanceByProgress:p(e)})},t))}))}),(0,f.jsx)(n,{sectionTitle:`Figma: showError=true (bar red + icon)`,firstColumnHeader:`showError`,columnHeaders:h.map(e=>e.toUpperCase()),rows:[{variantLabel:`showError=true`,cells:h.map(e=>(0,f.jsx)(`div`,{className:c.column,children:(0,f.jsx)(s,{..._,size:e,showError:!0,showErrorIcon:!0})},e))}]}),(0,f.jsx)(n,{sectionTitle:`Composition`,firstColumnHeader:`Scenario`,columnHeaders:[``],rows:[{variantLabel:`bar only`,cells:[(0,f.jsx)(`div`,{className:c.column,children:(0,f.jsx)(s,{progress:40,appearanceByProgress:p(i.Primary)})},`bar`)]},{variantLabel:`appearanceByProgress`,cells:[(0,f.jsxs)(`div`,{className:c.column,children:[(0,f.jsx)(s,{label:`Low`,progress:40,valueType:`percent`}),(0,f.jsx)(s,{label:`Mid`,progress:75,valueType:`percent`}),(0,f.jsx)(s,{label:`High`,progress:95,valueType:`percent`})]},`thresholds`)]}]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Figma: appearance x size (showError=false)' firstColumnHeader='appearance' columnHeaders={sizes.map(s => s.toUpperCase())} rows={figmaAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: sizes.map(size => <div key={size} className={styles.column}>
              <LoadStatus {...baseProps} size={size} appearanceByProgress={staticBarAppearance(appearance)} />
            </div>)
    }))} />

      <StoryTable sectionTitle='Figma: showError=true (bar red + icon)' firstColumnHeader='showError' columnHeaders={sizes.map(s => s.toUpperCase())} rows={[{
      variantLabel: 'showError=true',
      cells: sizes.map(size => <div key={size} className={styles.column}>
                <LoadStatus {...baseProps} size={size} showError showErrorIcon />
              </div>)
    }]} />

      <StoryTable sectionTitle='Composition' firstColumnHeader='Scenario' columnHeaders={['']} rows={[{
      variantLabel: 'bar only',
      cells: [<div key='bar' className={styles.column}>
                <LoadStatus progress={40} appearanceByProgress={staticBarAppearance(APPEARANCE.Primary)} />
              </div>]
    }, {
      variantLabel: 'appearanceByProgress',
      cells: [<div key='thresholds' className={styles.column}>
                <LoadStatus label='Low' progress={40} valueType='percent' />
                <LoadStatus label='Mid' progress={75} valueType='percent' />
                <LoadStatus label='High' progress={95} valueType='percent' />
              </div>]
    }]} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,m as default};
//# sourceMappingURL=LoadStatus.VisualMatrix.stories-DQZvRDwW.js.map