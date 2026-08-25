import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-C96OK3Oq.js";import{a as i,c as a,d as o,i as s,l as c,n as l,o as u,r as d,s as f,u as p}from"./testIds-Rns5TPiv.js";var m,h,g,_,v,y,b,x;e((()=>{p(),r(),c(),s(),l(),m=t(),h={title:`Snack/Inputs & Forms/CodeEditor`,id:`components-codeeditor`,component:o,parameters:{layout:`padded`}},g=[!1,!0],_=[!1,!0],v=[`typescript`,`json`,`yaml`],y={typescript:u,json:f,yaml:a},b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{className:i.matrix,children:[(0,m.jsx)(n,{sectionTitle:`hasHeader × background (language=json)`,firstColumnHeader:`hasHeader`,columnHeaders:_.map(e=>`background=${e}`),rows:g.map(e=>({variantLabel:String(e),cells:_.map(t=>(0,m.jsx)(`div`,{className:i.frame,children:(0,m.jsx)(o,{language:`json`,value:f,hasHeader:e,background:t,"data-test-id":d(`json`,e,t)})},`${e}-${t}`))}))}),(0,m.jsx)(n,{sectionTitle:`language × hasHeader`,firstColumnHeader:`language`,columnHeaders:[`hasHeader=false`,`hasHeader=true`],rows:v.map(e=>({variantLabel:e,cells:g.map(t=>(0,m.jsx)(`div`,{className:i.frame,children:(0,m.jsx)(o,{language:e,value:y[e],hasHeader:t,"data-test-id":d(e,t)})},`${e}-${t}`))}))})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='hasHeader × background (language=json)' firstColumnHeader='hasHeader' columnHeaders={backgroundStates.map(b => \`background=\${b}\`)} rows={headerStates.map(hasHeader => ({
      variantLabel: String(hasHeader),
      cells: backgroundStates.map(background => <div key={\`\${hasHeader}-\${background}\`} className={styles.frame}>
              <CodeEditor language='json' value={CODE_JSON} hasHeader={hasHeader} background={background} data-test-id={matrixCellTestId('json', hasHeader, background)} />
            </div>)
    }))} />

      <StoryTable sectionTitle='language × hasHeader' firstColumnHeader='language' columnHeaders={['hasHeader=false', 'hasHeader=true']} rows={languages.map(language => ({
      variantLabel: language,
      cells: headerStates.map(hasHeader => <div key={\`\${language}-\${hasHeader}\`} className={styles.frame}>
              <CodeEditor language={language} value={SAMPLE_BY_LANGUAGE[language]} hasHeader={hasHeader} data-test-id={matrixCellTestId(language, hasHeader)} />
            </div>)
    }))} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,h as default};
//# sourceMappingURL=CodeEditor.VisualMatrix.stories-CiLW8EdH.js.map