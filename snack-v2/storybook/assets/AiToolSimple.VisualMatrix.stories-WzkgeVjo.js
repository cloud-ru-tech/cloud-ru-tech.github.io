import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-SlIP-akt.js";import{E as i,f as a,k as o,t as s}from"./src-BkQ3QQYp.js";import{n as c,t as l}from"./testIds-Cp0scSY2.js";import{n as u,t as d}from"./styles.module-C7JKx5QE.js";import{i as f,n as p,r as m,t as h}from"./presets-BcGjxUcu.js";var g,_,v,y,b,x;e((()=>{s(),r(),d(),c(),f(),g=t(),_={title:`AI/Primitives/AiTool/AiToolSimple`,id:`ai-aitool-aitoolsimple`,component:a,parameters:{layout:`padded`}},v=[{label:`default`,suffix:`default`,name:p},{label:`длинное имя`,suffix:`long-name`,name:`request_statuses_for_users_in_all_connected_services_and_aggregate`}],y=[{label:`только description`,suffix:`description`,description:h},{label:`только badges`,suffix:`badges`,children:m}],b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsxs)(`div`,{className:u.grid,children:[(0,g.jsx)(n,{sectionTitle:`Open × Name`,firstColumnHeader:`Name`,columnHeaders:[`CLOSED`,`OPEN`],rows:v.map(({label:e,suffix:t,name:n})=>({variantLabel:e,cells:[!1,!0].map(e=>(0,g.jsx)(`div`,{className:u.cell,children:(0,g.jsx)(a,{name:n,icon:i.Search,open:e,description:h,"data-test-id":`${l.simple}-${t}-${e?`open`:`closed`}`,children:m})},String(e)))}))}),(0,g.jsx)(n,{sectionTitle:`Slots (open)`,firstColumnHeader:`Slots`,columnHeaders:[`—`],rows:y.map(({label:e,suffix:t,description:n,children:r})=>({variantLabel:e,cells:[(0,g.jsx)(`div`,{className:u.cell,children:(0,g.jsx)(a,{name:`create_instance`,icon:i.Act,open:!0,description:n,"data-test-id":`${l.simple}-slots-${t}`,children:r})},t)]}))}),(0,g.jsx)(n,{sectionTitle:`Timeline (connector + loading)`,firstColumnHeader:`—`,columnHeaders:[`—`],rows:[{variantLabel:`timeline`,cells:[(0,g.jsxs)(`div`,{className:u.timeline,children:[(0,g.jsx)(a,{name:`search_documents`,icon:i.Search,connector:!0,"data-test-id":`${l.simple}-timeline-1`}),(0,g.jsx)(a,{name:`read_document`,icon:i.Read,connector:!0,"data-test-id":`${l.simple}-timeline-2`}),(0,g.jsx)(a,{name:p,icon:i.Act,state:o.Loading,"data-test-id":`${l.simple}-timeline-3`})]},`timeline`)]}]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='Open × Name' firstColumnHeader='Name' columnHeaders={['CLOSED', 'OPEN']} rows={openCases.map(({
      label,
      suffix,
      name
    }) => ({
      variantLabel: label,
      cells: [false, true].map(open => <div key={String(open)} className={styles.cell}>
              <AiToolSimple name={name} icon={AI_TOOL_ICON_TYPE.Search} open={open} description={SIMPLE_DESCRIPTION} data-test-id={\`\${TEST_IDS.simple}-\${suffix}-\${open ? 'open' : 'closed'}\`}>
                {badgesPreset}
              </AiToolSimple>
            </div>)
    }))} />
      <StoryTable sectionTitle='Slots (open)' firstColumnHeader='Slots' columnHeaders={['—']} rows={slotCases.map(({
      label,
      suffix,
      description,
      children
    }) => ({
      variantLabel: label,
      cells: [<div key={suffix} className={styles.cell}>
              <AiToolSimple name='create_instance' icon={AI_TOOL_ICON_TYPE.Act} open description={description} data-test-id={\`\${TEST_IDS.simple}-slots-\${suffix}\`}>
                {children}
              </AiToolSimple>
            </div>]
    }))} />
      <StoryTable sectionTitle='Timeline (connector + loading)' firstColumnHeader='—' columnHeaders={['—']} rows={[{
      variantLabel: 'timeline',
      cells: [<div key='timeline' className={styles.timeline}>
                <AiToolSimple name='search_documents' icon={AI_TOOL_ICON_TYPE.Search} connector data-test-id={\`\${TEST_IDS.simple}-timeline-1\`} />
                <AiToolSimple name='read_document' icon={AI_TOOL_ICON_TYPE.Read} connector data-test-id={\`\${TEST_IDS.simple}-timeline-2\`} />
                <AiToolSimple name={SIMPLE_NAME} icon={AI_TOOL_ICON_TYPE.Act} state={AI_TOOL_STATUS_STATE.Loading} data-test-id={\`\${TEST_IDS.simple}-timeline-3\`} />
              </div>]
    }]} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,_ as default};
//# sourceMappingURL=AiToolSimple.VisualMatrix.stories-WzkgeVjo.js.map