import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DQTa2Tvz.js";import{i,n as a,t as o}from"./src-DnTgn98n.js";import{n as s,r as c}from"./testIds-C9KumEqe.js";var l,u,d,f=e((()=>{l=`_matrix_yh23x_4`,u=`_queueCell_yh23x_9`,d={matrix:l,queueCell:u}}));function p(e,t,n=d.queueCell){return(0,m.jsx)(`div`,{className:n,children:(0,m.jsx)(a,{...e,"data-test-id":t})})}var m,h,g,_,v;e((()=>{o(),r(),f(),s(),m=t(),h={title:`AI/Surfaces/AiQueue`,id:`ai-aiqueue`,component:a,parameters:{layout:`padded`}},g=[{key:`collapsed`,label:`collapsed`,props:{open:!1,steps:[{id:`planned`,label:`Step Description`,state:i.Planned},{id:`progress`,label:`Step Description`,state:i.Progress},{id:`done`,label:`Step Description`,state:i.Done}]}},{key:`expanded`,label:`expanded`,props:{open:!0,steps:[{id:`done`,label:`Step Description`,state:i.Done},{id:`error`,label:`Step Description`,state:i.Error},{id:`done-2`,label:`Step Description`,state:i.Done},{id:`progress`,label:`Step Description`,state:i.Progress},{id:`planned`,label:`Step Description`,state:i.Planned}]}},{key:`expanded-scroll`,label:`expanded (scroll)`,props:{open:!0,steps:[{id:`step-1`,label:`Step Description`,state:i.Done},{id:`step-2`,label:`Step Description`,state:i.Error},{id:`step-3`,label:`Step Description`,state:i.Done},{id:`step-4`,label:`Step Description`,state:i.Progress},{id:`step-5`,label:`Step Description`,state:i.Planned},{id:`step-6`,label:`Step Description`,state:i.Done},{id:`step-7`,label:`Step Description`,state:i.Error},{id:`step-8`,label:`Step Description`,state:i.Done},{id:`step-9`,label:`Step Description`,state:i.Progress},{id:`step-10`,label:`Step Description`,state:i.Planned}]}}],_={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(`div`,{className:d.matrix,children:(0,m.jsx)(n,{sectionTitle:`Open state`,firstColumnHeader:`State`,columnHeaders:[`Queue`],rows:g.map(({key:e,label:t,props:n})=>({variantLabel:t,cells:[p(n,c(e,`default`))]}))})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Open state' firstColumnHeader='State' columnHeaders={['Queue']} rows={queueRows.map(({
      key,
      label,
      props
    }) => ({
      variantLabel: label,
      cells: [renderQueueCell(props, matrixCellTestId(key, 'default'))]
    }))} />
    </div>
}`,..._.parameters?.docs?.source}}},v=[`VisualMatrix`]}))();export{_ as VisualMatrix,v as __namedExportsOrder,h as default};
//# sourceMappingURL=AiQueue.VisualMatrix.stories-D7ldPp-8.js.map