import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BPThJ53l.js";import{i}from"./src-CpY7PPDC.js";import{a,c as o,d as s,f as c,i as l,l as u,m as d,n as f,p,r as m}from"./testIds-ChR9HnW-.js";import{n as h,t as g}from"./stories.module-C33z7nHF.js";function _(e,t){return(0,v.jsx)(`div`,{className:h.noticeCell,children:(0,v.jsx)(d,{...e,"data-test-id":t})})}var v,y,b,x,S,C;e((()=>{p(),r(),c(),g(),f(),v=t(),y={title:`AI/Surfaces/AiFieldNotice`,id:`ai-aifieldnotice`,component:d,parameters:{layout:`padded`}},b=Object.values(i),x=[{key:`password`,label:`password`,props:l},{key:`ssh`,label:`ssh`,props:o},{key:`support`,label:`support`,props:u},{key:`queue`,label:`queue`,props:a},{key:`vm-agent`,label:`vm agent`,props:s}],S={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,v.jsx)(`div`,{className:h.matrix,children:(0,v.jsx)(n,{sectionTitle:`Scenario × Size`,firstColumnHeader:`Scenario`,columnHeaders:b.map(e=>e.toUpperCase()),rows:x.map(({key:e,label:t,props:n})=>({variantLabel:t,cells:b.map(t=>_({...n,size:t},m(`scenario-size`,`${e}-size-${t}`)))}))})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Scenario × Size' firstColumnHeader='Scenario' columnHeaders={sizes.map(size => size.toUpperCase())} rows={scenarioRows.map(({
      key,
      label,
      props
    }) => ({
      variantLabel: label,
      cells: sizes.map(size => renderNoticeCell({
        ...props,
        size
      }, matrixCellTestId('scenario-size', \`\${key}-size-\${size}\`)))
    }))} />
    </div>
}`,...S.parameters?.docs?.source}}},C=[`VisualMatrixScenarioSize`]}))();export{S as VisualMatrixScenarioSize,C as __namedExportsOrder,y as default};
//# sourceMappingURL=AiFieldNotice.VisualMatrix.stories-DlL4zQ8b.js.map