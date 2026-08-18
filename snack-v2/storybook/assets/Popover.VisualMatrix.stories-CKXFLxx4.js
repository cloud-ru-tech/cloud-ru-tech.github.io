import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,i as r,l as i,m as a,t as o,u as s}from"./iframe-Du0zU9lI.js";import{a as c,s as l,t as u,u as d}from"./src-Bq_MVxXk.js";import{a as f,c as p}from"./src-CCyS43DU.js";import{a as m,i as h,n as g,r as _}from"./testIds-CZF9p-kA.js";import{n as v,t as y}from"./src-DLJhkVqW.js";var b,x,S,C,w,T,E;e((()=>{u(),y(),o(),h(),_(),b=t(),x=[p.Click,p.Hover,p.Focus],S=[f.Top,f.Bottom,f.Left,f.Right],C=({label:e})=>(0,b.jsx)(`div`,{className:m.popoverContent,children:e}),w={title:`Snack/Overlays/Popover`,id:`components-popover`,component:v,parameters:{layout:`fullscreen`,controls:{disable:!0}}},T={tags:[`test`,`dev`],render:()=>(0,b.jsx)(s,{children:(0,b.jsxs)(n,{width:`wide`,children:[(0,b.jsx)(a,{children:`Visual matrix`}),(0,b.jsxs)(i,{children:[`Триггеры Popover по осям `,(0,b.jsx)(`code`,{children:`trigger × placement`}),`. Контент открывается рядом со своим триггером; visual.spec кликает/наводит по очереди и собирает composite.`]}),(0,b.jsx)(r,{firstColumnHeader:`trigger \\ placement`,columnHeaders:[...S],rows:x.map(e=>({variantLabel:e,cells:S.map(t=>{let n=`${e}-${t}`,r=`${e} · ${t}`;return(0,b.jsx)(v,{trigger:e,placement:t,content:(0,b.jsx)(C,{label:r}),children:(0,b.jsx)(c,{"data-test-id":g(n),label:r,view:d.Outline,appearance:l.Neutral})},n)})}))})]})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Visual matrix</DemoTitle>
        <DemoHint>
          Триггеры Popover по осям <code>trigger × placement</code>. Контент открывается рядом со своим триггером;
          visual.spec кликает/наводит по очереди и собирает composite.
        </DemoHint>
        <StoryTable firstColumnHeader='trigger \\ placement' columnHeaders={[...PLACEMENTS]} rows={TRIGGERS.map(trigger => ({
        variantLabel: trigger,
        cells: PLACEMENTS.map(placement => {
          const key = \`\${trigger}-\${placement}\`;
          const label = \`\${trigger} · \${placement}\`;
          return <Popover key={key} trigger={trigger} placement={placement} content={<Content label={label} />}>
                  <Button data-test-id={VM_TRIGGER_TEST_ID(key)} label={label} view={VIEW.Outline} appearance={APPEARANCE.Neutral} />
                </Popover>;
        })
      }))} />
      </DemoPanel>
    </DemoPage>
}`,...T.parameters?.docs?.source}}},E=[`VisualMatrix`]}))();export{T as VisualMatrix,E as __namedExportsOrder,w as default};
//# sourceMappingURL=Popover.VisualMatrix.stories-CKXFLxx4.js.map