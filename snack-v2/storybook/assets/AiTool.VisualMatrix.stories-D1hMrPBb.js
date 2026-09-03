import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BPThJ53l.js";import{E as i,k as a,m as o,t as s}from"./src-BxiXD282.js";import{n as c,t as l}from"./testIds-BNskmH8N.js";import{a as u,i as d,n as f,r as p,t as m}from"./presets-EqDxHuUf.js";import{n as h,t as g}from"./styles.module-C7JKx5QE.js";var _,v,y,b,x,S;e((()=>{s(),r(),g(),c(),d(),_=t(),v={title:`AI/Primitives/AiTool/AiTool`,id:`ai-aitool-aitool`,component:o,parameters:{layout:`padded`}},y=[a.Pending,a.Loading,a.Success,a.Error],b=[{label:`call + result`,suffix:`both`,state:a.Success,call:p,result:u},{label:`только call`,suffix:`call`,state:a.Success,call:p},{label:`только result`,suffix:`result`,state:a.Success,result:u},{label:`без деталей`,suffix:`none`,state:a.Success},{label:`error: красный result`,suffix:`error`,state:a.Error,call:p,result:u}],x={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:h.grid,children:[(0,_.jsx)(n,{sectionTitle:`State (closed)`,firstColumnHeader:`State`,columnHeaders:[`—`],rows:y.map(e=>({variantLabel:e,cells:[(0,_.jsx)(`div`,{className:h.cell,children:(0,_.jsx)(o,{name:f,icon:i.Search,state:e,duration:m,call:p,result:u,"data-test-id":`${l.tool}-${e}-closed`})},e)]}))}),(0,_.jsx)(n,{sectionTitle:`Slots (open)`,firstColumnHeader:`Slots`,columnHeaders:[`—`],rows:b.map(({label:e,suffix:t,state:n,call:r,result:a})=>({variantLabel:e,cells:[(0,_.jsx)(`div`,{className:h.cell,children:(0,_.jsx)(o,{name:`create_instance`,icon:i.Act,state:n,open:!0,call:r,result:a,"data-test-id":`${l.tool}-slots-${t}`})},t)]}))}),(0,_.jsx)(n,{sectionTitle:`Timeline (connector)`,firstColumnHeader:`—`,columnHeaders:[`—`],rows:[{variantLabel:`timeline`,cells:[(0,_.jsxs)(`div`,{className:h.timeline,children:[(0,_.jsx)(o,{name:`search_documents`,icon:i.Search,state:a.Success,duration:3,connector:!0,"data-test-id":`${l.tool}-timeline-1`}),(0,_.jsx)(o,{name:`read_document`,icon:i.Read,state:a.Success,duration:12,connector:!0,"data-test-id":`${l.tool}-timeline-2`}),(0,_.jsx)(o,{name:f,icon:i.Act,state:a.Loading,duration:9,"data-test-id":`${l.tool}-timeline-3`})]},`timeline`)]}]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable sectionTitle='State (closed)' firstColumnHeader='State' columnHeaders={['—']} rows={keyStates.map(state => ({
      variantLabel: state,
      cells: [<div key={state} className={styles.cell}>
              <AiTool name={TOOL_NAME} icon={AI_TOOL_ICON_TYPE.Search} state={state} duration={TOOL_DURATION} call={callPreset} result={resultPreset} data-test-id={\`\${TEST_IDS.tool}-\${state}-closed\`} />
            </div>]
    }))} />
      <StoryTable sectionTitle='Slots (open)' firstColumnHeader='Slots' columnHeaders={['—']} rows={slotCases.map(({
      label,
      suffix,
      state,
      call,
      result
    }) => ({
      variantLabel: label,
      cells: [<div key={suffix} className={styles.cell}>
              <AiTool name='create_instance' icon={AI_TOOL_ICON_TYPE.Act} state={state} open call={call} result={result} data-test-id={\`\${TEST_IDS.tool}-slots-\${suffix}\`} />
            </div>]
    }))} />
      <StoryTable sectionTitle='Timeline (connector)' firstColumnHeader='—' columnHeaders={['—']} rows={[{
      variantLabel: 'timeline',
      cells: [<div key='timeline' className={styles.timeline}>
                <AiTool name='search_documents' icon={AI_TOOL_ICON_TYPE.Search} state={AI_TOOL_STATUS_STATE.Success} duration={3} connector data-test-id={\`\${TEST_IDS.tool}-timeline-1\`} />
                <AiTool name='read_document' icon={AI_TOOL_ICON_TYPE.Read} state={AI_TOOL_STATUS_STATE.Success} duration={12} connector data-test-id={\`\${TEST_IDS.tool}-timeline-2\`} />
                <AiTool name={TOOL_NAME} icon={AI_TOOL_ICON_TYPE.Act} state={AI_TOOL_STATUS_STATE.Loading} duration={9} data-test-id={\`\${TEST_IDS.tool}-timeline-3\`} />
              </div>]
    }]} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,v as default};
//# sourceMappingURL=AiTool.VisualMatrix.stories-D1hMrPBb.js.map