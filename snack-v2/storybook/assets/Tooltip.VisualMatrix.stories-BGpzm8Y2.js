import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,i as a,p as o,t as s}from"./iframe-qs8RgOhH.js";import{a as c}from"./src-CJlc3CKH.js";import{o as l,t as u}from"./src-CQRh0ypM.js";import{a as d,s as f,t as p,u as m}from"./src-CHNzQsqP.js";import{n as h,t as g}from"./testIds-B1kEjsBQ.js";var _,v,y,b,x,S;e((()=>{p(),u(),s(),h(),_=t(),v=[c.Top,c.Right,c.Bottom,c.Left],y=[{key:`short`,label:`short`,tip:`Краткая подсказка`},{key:`long`,label:`long`,tip:`Длинная подсказка с пояснением в нескольких предложениях, которая требует переноса строки в контейнере.`}],b={title:`Snack/Overlays/Tooltip/Tooltip`,id:`components-tooltip-tooltip`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}}},x={tags:[`test`,`dev`],render:()=>(0,_.jsx)(r,{children:(0,_.jsxs)(o,{width:`wide`,children:[(0,_.jsx)(i,{children:`Visual matrix`}),(0,_.jsxs)(n,{children:[`Триггеры Tooltip по осям `,(0,_.jsx)(`code`,{children:`placement × content-length`}),`. Тултип открывается на hover/focus; visual.spec наводит по очереди и собирает composite.`]}),(0,_.jsx)(a,{firstColumnHeader:`placement \\ content`,columnHeaders:y.map(e=>e.label),rows:v.map(e=>({variantLabel:e,cells:y.map(({key:t,tip:n})=>{let r=`${e}-${t}`;return(0,_.jsx)(l,{tip:n,placement:e,children:(0,_.jsx)(d,{"data-test-id":g.tooltip.vmTrigger(r),label:`${e} · ${t}`,view:m.Outline,appearance:f.Neutral})},r)})}))})]})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Visual matrix</DemoTitle>
        <DemoHint>
          Триггеры Tooltip по осям <code>placement × content-length</code>. Тултип открывается на hover/focus;
          visual.spec наводит по очереди и собирает composite.
        </DemoHint>
        <StoryTable firstColumnHeader='placement \\ content' columnHeaders={TIPS.map(t => t.label)} rows={PLACEMENTS.map(placement => ({
        variantLabel: placement,
        cells: TIPS.map(({
          key: tKey,
          tip
        }) => {
          const key = \`\${placement}-\${tKey}\`;
          return <Tooltip key={key} tip={tip} placement={placement}>
                  <Button data-test-id={TEST_IDS.tooltip.vmTrigger(key)} label={\`\${placement} · \${tKey}\`} view={VIEW.Outline} appearance={APPEARANCE.Neutral} />
                </Tooltip>;
        })
      }))} />
      </DemoPanel>
    </DemoPage>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,b as default};
//# sourceMappingURL=Tooltip.VisualMatrix.stories-BGpzm8Y2.js.map