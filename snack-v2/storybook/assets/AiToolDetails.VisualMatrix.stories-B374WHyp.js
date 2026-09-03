import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Bl-uTAel.js";import{E as i,T as a,b as o,c as s,o as c,t as l,u}from"./src-BIyn0abJ.js";import{n as d,t as f}from"./testIds-XU3ftBCu.js";var p,m,h=e((()=>{p=`_cell_qym4t_1`,m={cell:p}})),g,_,v,y,b,x,S,C;e((()=>{l(),r(),d(),h(),g=t(),_={title:`AI/Primitives/AiTool/Atoms/AiToolDetails`,id:`ai-aitool-atoms-aitooldetails`,component:o,parameters:{layout:`padded`}},v=Object.values(i),y=Object.values(a),b=Array.from({length:18},(e,t)=>[`property_${t+1}`,`value_${t+1}`]),x=[{key:`shown`,label:`SHOWN`,copyValue:`TextBlock Text`,showCopyButton:!0},{key:`hidden`,label:`HIDDEN`,copyValue:`TextBlock Text`,showCopyButton:!1},{key:`empty`,label:`EMPTY VALUE`,copyValue:``,showCopyButton:!0}],S={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n,{sectionTitle:`State (контент наследует mono/error из контекста)`,firstColumnHeader:`—`,columnHeaders:v.map(e=>e.toUpperCase()),rows:[{variantLabel:`details`,cells:v.map(e=>(0,g.jsx)(`div`,{className:m.cell,children:(0,g.jsxs)(o,{label:`tool_name`,state:e,scroll:!1,"data-test-id":`${f.details}-${e}`,children:[(0,g.jsx)(u,{children:`TextBlock Text`}),(0,g.jsx)(s,{label:`region`,value:`ru-central1`}),(0,g.jsx)(c,{variant:`string`,name:`status`,value:`ok`})]})},e))}]}),(0,g.jsx)(n,{sectionTitle:`Copy`,firstColumnHeader:`—`,columnHeaders:x.map(({label:e})=>e),rows:[{variantLabel:`copy`,cells:x.map(({key:e,copyValue:t,showCopyButton:n})=>(0,g.jsx)(`div`,{className:m.cell,children:(0,g.jsx)(o,{label:`tool_name`,copyValue:t,showCopyButton:n,scroll:!1,"data-test-id":`${f.details}-copy-${e}`,children:(0,g.jsx)(u,{children:`TextBlock Text`})})},e))}]}),(0,g.jsx)(n,{sectionTitle:`Height`,firstColumnHeader:`Height`,columnHeaders:[`SCROLL`],rows:y.map(e=>({variantLabel:e,cells:[(0,g.jsx)(`div`,{className:m.cell,children:(0,g.jsx)(o,{label:`tool_name`,height:e,children:b.map(([e,t])=>(0,g.jsx)(s,{label:e,value:t},e))})},e)]}))})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <>
      <StoryTable sectionTitle='State (контент наследует mono/error из контекста)' firstColumnHeader='—' columnHeaders={states.map(s => s.toUpperCase())} rows={[{
      variantLabel: 'details',
      cells: states.map(state => <div key={state} className={styles.cell}>
                <AiToolDetails label='tool_name' state={state} scroll={false} data-test-id={\`\${TEST_IDS.details}-\${state}\`}>
                  <AiToolText>TextBlock Text</AiToolText>
                  <AiToolKeyValue label='region' value='ru-central1' />
                  <AiToolObject variant='string' name='status' value='ok' />
                </AiToolDetails>
              </div>)
    }]} />
      <StoryTable sectionTitle='Copy' firstColumnHeader='—' columnHeaders={copyStates.map(({
      label
    }) => label)} rows={[{
      variantLabel: 'copy',
      cells: copyStates.map(({
        key,
        copyValue,
        showCopyButton
      }) => <div key={key} className={styles.cell}>
                <AiToolDetails label='tool_name' copyValue={copyValue} showCopyButton={showCopyButton} scroll={false} data-test-id={\`\${TEST_IDS.details}-copy-\${key}\`}>
                  <AiToolText>TextBlock Text</AiToolText>
                </AiToolDetails>
              </div>)
    }]} />
      <StoryTable sectionTitle='Height' firstColumnHeader='Height' columnHeaders={['SCROLL']} rows={heights.map(height => ({
      variantLabel: height,
      cells: [<div key={height} className={styles.cell}>
              <AiToolDetails label='tool_name' height={height}>
                {heightRows.map(([label, value]) => <AiToolKeyValue key={label} label={label} value={value} />)}
              </AiToolDetails>
            </div>]
    }))} />
    </>
}`,...S.parameters?.docs?.source}}},C=[`VisualMatrix`]}))();export{S as VisualMatrix,C as __namedExportsOrder,_ as default};
//# sourceMappingURL=AiToolDetails.VisualMatrix.stories-B374WHyp.js.map