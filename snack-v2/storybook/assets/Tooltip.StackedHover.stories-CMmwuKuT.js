import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BdtyM0cx.js";import{a as c,s as l,t as u,u as d}from"./src-Bqc-Xdov.js";import{a as f,c as p}from"./src-CFQE9zRo.js";import{o as m,t as h}from"./src-DcePMoEn.js";import{n as g,t as _}from"./testIds-B1kEjsBQ.js";var v,y,b,x,S,C,w,T=e((()=>{v=`_row_11k9f_4`,y=`_stack_11k9f_11`,b=`_grid_11k9f_17`,x=`_matrix_11k9f_26`,S=`_triggerButton_11k9f_31`,C=`_stackTight_11k9f_35`,w={row:v,stack:y,grid:b,matrix:x,triggerButton:S,stackTight:C}})),E,D,O,k;e((()=>{u(),h(),o(),g(),T(),E=t(),D={title:`Snack/Overlays/Tooltip/Tooltip/Tests/StackedHover`,id:`components-tooltip-tooltip-tests-stackedhover`,component:m,parameters:{layout:`fullscreen`,controls:{disable:!0}}},O={tags:[`test`,`dev`],render:()=>(0,E.jsx)(s,{children:(0,E.jsxs)(r,{children:[(0,E.jsx)(a,{children:`StackedHover`}),(0,E.jsx)(i,{children:`Наведение на нижний триггер и переход на тело тултипа не должны задевать верхний триггер.`}),(0,E.jsx)(n,{align:`center`,children:(0,E.jsxs)(`div`,{className:w.stackTight,children:[(0,E.jsx)(m,{tip:(0,E.jsx)(`span`,{"data-test-id":_.tooltip.upperContent,children:`Тултип верхнего элемента`}),placement:f.Top,trigger:p.Hover,children:(0,E.jsx)(c,{"data-test-id":_.tooltip.upperTrigger,label:`Верхний элемент`,view:d.Outline,appearance:l.Neutral})}),(0,E.jsx)(m,{tip:(0,E.jsx)(`span`,{"data-test-id":_.tooltip.content,children:`Тултип нижнего элемента`}),placement:f.Top,trigger:p.Hover,children:(0,E.jsx)(c,{"data-test-id":_.tooltip.triggerOpen,label:`Нижний элемент`,view:d.Outline,appearance:l.Neutral})})]})})]})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>StackedHover</DemoTitle>
        <DemoHint>Наведение на нижний триггер и переход на тело тултипа не должны задевать верхний триггер.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.stackTight}>
            <Tooltip tip={<span data-test-id={TEST_IDS.tooltip.upperContent}>Тултип верхнего элемента</span>} placement={PLACEMENT.Top} trigger={TRIGGER.Hover}>
              <Button data-test-id={TEST_IDS.tooltip.upperTrigger} label='Верхний элемент' view={VIEW.Outline} appearance={APPEARANCE.Neutral} />
            </Tooltip>

            <Tooltip tip={<span data-test-id={TEST_IDS.tooltip.content}>Тултип нижнего элемента</span>} placement={PLACEMENT.Top} trigger={TRIGGER.Hover}>
              <Button data-test-id={TEST_IDS.tooltip.triggerOpen} label='Нижний элемент' view={VIEW.Outline} appearance={APPEARANCE.Neutral} />
            </Tooltip>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...O.parameters?.docs?.source},description:{story:`Два триггера друг над другом: тултип нижнего раскрывается вверх и перекрывает верхний триггер.
Путь курсора от нижнего триггера к телу тултипа не должен открывать тултип верхнего.`,...O.parameters?.docs?.description}}},k=[`StackedHover`]}))();export{O as StackedHover,k as __namedExportsOrder,D as default};
//# sourceMappingURL=Tooltip.StackedHover.stories-CMmwuKuT.js.map