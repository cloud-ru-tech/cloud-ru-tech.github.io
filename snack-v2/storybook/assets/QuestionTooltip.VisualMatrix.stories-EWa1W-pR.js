import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,i as a,p as o,t as s}from"./iframe-qs8RgOhH.js";import{c,i as l,t as u}from"./src-CQRh0ypM.js";var d,f,p,m,h;e((()=>{u(),s(),d=t(),f=[c.XS,c.S],p={title:`Snack/Overlays/Tooltip/QuestionTooltip`,id:`components-tooltip-questiontooltip`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}}},m={tags:[`test`,`dev`],render:()=>(0,d.jsx)(r,{children:(0,d.jsxs)(o,{width:`wide`,children:[(0,d.jsx)(i,{children:`Visual matrix`}),(0,d.jsxs)(n,{children:[`Иконки-триггеры QuestionTooltip по оси `,(0,d.jsx)(`code`,{children:`size`}),`. QuestionTooltip сам ставит data-test-id на свой <button>, поэтому уникальный селектор для visual.spec — aria-label через `,(0,d.jsx)(`code`,{children:`triggerLabel`}),`.`]}),(0,d.jsx)(a,{firstColumnHeader:`size`,columnHeaders:[`trigger`],rows:f.map(e=>({variantLabel:e,cells:[(0,d.jsx)(l,{size:e,tip:`Подсказка ${e}`,triggerLabel:`Подсказка ${e}`},e)]}))})]})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Visual matrix</DemoTitle>
        <DemoHint>
          Иконки-триггеры QuestionTooltip по оси <code>size</code>. QuestionTooltip сам ставит data-test-id на свой
          &lt;button&gt;, поэтому уникальный селектор для visual.spec — aria-label через <code>triggerLabel</code>.
        </DemoHint>
        <StoryTable firstColumnHeader='size' columnHeaders={['trigger']} rows={SIZES.map(size => ({
        variantLabel: size,
        cells: [<QuestionTooltip key={size} size={size} tip={\`Подсказка \${size}\`} triggerLabel={\`Подсказка \${size}\`} />]
      }))} />
      </DemoPanel>
    </DemoPage>
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,p as default};
//# sourceMappingURL=QuestionTooltip.VisualMatrix.stories-EWa1W-pR.js.map