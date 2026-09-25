import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,i as a,p as o,t as s}from"./iframe-qs8RgOhH.js";import{a as c,c as l,n as u,t as d}from"./src-CJlc3CKH.js";import{a as f,s as p,t as m,u as h}from"./src-CHNzQsqP.js";import{a as g,i as _,n as v,r as y}from"./testIds-CjfEkxv9.js";var b,x,S,C,w,T,E;e((()=>{m(),d(),s(),_(),y(),b=t(),x=[l.Click,l.Hover,l.Focus],S=[c.Top,c.Bottom,c.Left,c.Right],C=({label:e})=>(0,b.jsx)(`div`,{className:g.popoverContent,children:e}),w={title:`Snack/Foundation & utilities/PopoverPrivate`,id:`components-popoverprivate`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0},figma:{disable:!0}}},T={tags:[`test`,`dev`],render:()=>(0,b.jsx)(r,{children:(0,b.jsxs)(o,{width:`wide`,children:[(0,b.jsx)(i,{children:`Visual matrix`}),(0,b.jsxs)(n,{children:[`Триггеры PopoverPrivate по осям `,(0,b.jsx)(`code`,{children:`trigger × placement`}),`. Контент открывается рядом со своим триггером; visual.spec кликает/наводит по очереди и собирает composite.`]}),(0,b.jsx)(a,{firstColumnHeader:`trigger \\ placement`,columnHeaders:[...S],rows:x.map(e=>({variantLabel:e,cells:S.map(t=>{let n=`${e}-${t}`,r=`${e} · ${t}`;return(0,b.jsx)(u,{trigger:e,placement:t,popoverContent:(0,b.jsx)(C,{label:r}),children:(0,b.jsx)(f,{"data-test-id":v(n),label:r,view:h.Outline,appearance:p.Neutral})},n)})}))})]})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Visual matrix</DemoTitle>
        <DemoHint>
          Триггеры PopoverPrivate по осям <code>trigger × placement</code>. Контент открывается рядом со своим
          триггером; visual.spec кликает/наводит по очереди и собирает composite.
        </DemoHint>
        <StoryTable firstColumnHeader='trigger \\ placement' columnHeaders={[...PLACEMENTS]} rows={TRIGGERS.map(trigger => ({
        variantLabel: trigger,
        cells: PLACEMENTS.map(placement => {
          const key = \`\${trigger}-\${placement}\`;
          const label = \`\${trigger} · \${placement}\`;
          return <PopoverPrivate key={key} trigger={trigger} placement={placement} popoverContent={<Content label={label} />}>
                  <Button data-test-id={VM_TRIGGER_TEST_ID(key)} label={label} view={VIEW.Outline} appearance={APPEARANCE.Neutral} />
                </PopoverPrivate>;
        })
      }))} />
      </DemoPanel>
    </DemoPage>
}`,...T.parameters?.docs?.source}}},E=[`VisualMatrix`]}))();export{T as VisualMatrix,E as __namedExportsOrder,w as default};
//# sourceMappingURL=PopoverPrivate.VisualMatrix.stories-X_IZ-uaS.js.map