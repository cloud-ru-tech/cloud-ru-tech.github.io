import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{a as c,c as l}from"./src-CJlc3CKH.js";import{o as u,t as d}from"./src-CQRh0ypM.js";import{a as f,t as p}from"./src-CHNzQsqP.js";import{n as m,t as h}from"./testIds-B1kEjsBQ.js";var g,_,v,y,b,x,S;e((()=>{p(),d(),o(),m(),g=t(),_=`Это очень длинная подсказка, которая по умолчанию должна обрезаться по max-width контейнера тултипа и переносить строки. Она нужна для визуальной регрессии truncation-поведения.`,v={title:`Snack/Overlays/Tooltip/Tooltip/Tests/LongText`,id:`components-tooltip-tooltip-tests-longtext`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}}},y={tags:[`test`,`dev`],render:()=>(0,g.jsx)(r,{children:(0,g.jsxs)(a,{children:[(0,g.jsx)(i,{children:`LongTextDefault`}),(0,g.jsx)(n,{children:`Длинный текст подсказки с дефолтным max-width.`}),(0,g.jsx)(s,{align:`center`,children:(0,g.jsx)(u,{tip:(0,g.jsx)(`span`,{"data-test-id":h.tooltip.content,children:_}),placement:c.Bottom,trigger:l.HoverAndFocusVisible,children:(0,g.jsx)(f,{"data-test-id":h.tooltip.triggerOpen,label:`Long text (default max-width)`,view:`outline`,appearance:`neutral`})})})]})})},b={tags:[`test`,`dev`],render:()=>(0,g.jsx)(r,{children:(0,g.jsxs)(a,{children:[(0,g.jsx)(i,{children:`NoMaxWidthShort`}),(0,g.jsx)(n,{children:`Короткий текст без ограничения max-width.`}),(0,g.jsx)(s,{align:`center`,children:(0,g.jsx)(u,{tip:(0,g.jsx)(`span`,{"data-test-id":h.tooltip.content,children:`Короткий`}),placement:c.Bottom,trigger:l.HoverAndFocusVisible,disableMaxWidth:!0,children:(0,g.jsx)(f,{"data-test-id":h.tooltip.triggerOpen,label:`Short (no max-width)`,view:`outline`,appearance:`neutral`})})})]})})},x={tags:[`test`,`dev`],render:()=>(0,g.jsx)(r,{children:(0,g.jsxs)(a,{children:[(0,g.jsx)(i,{children:`LongTextNoMaxWidth`}),(0,g.jsx)(n,{children:`Длинный текст без ограничения max-width — растягивается по контенту.`}),(0,g.jsx)(s,{align:`center`,children:(0,g.jsx)(u,{tip:(0,g.jsx)(`span`,{"data-test-id":h.tooltip.content,children:_}),placement:c.Bottom,trigger:l.HoverAndFocusVisible,disableMaxWidth:!0,children:(0,g.jsx)(f,{"data-test-id":h.tooltip.triggerOpen,label:`Long text (no max-width)`,view:`outline`,appearance:`neutral`})})})]})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>LongTextDefault</DemoTitle>
        <DemoHint>{'Длинный текст подсказки с дефолтным max-width.'}</DemoHint>
        <DemoActions align='center'>
          <Tooltip tip={<span data-test-id={TEST_IDS.tooltip.content}>{LONG_TEXT}</span>} placement={PLACEMENT.Bottom} trigger={TRIGGER.HoverAndFocusVisible}>
            <Button data-test-id={TEST_IDS.tooltip.triggerOpen} label='Long text (default max-width)' view='outline' appearance='neutral' />
          </Tooltip>
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>NoMaxWidthShort</DemoTitle>
        <DemoHint>{'Короткий текст без ограничения max-width.'}</DemoHint>
        <DemoActions align='center'>
          <Tooltip tip={<span data-test-id={TEST_IDS.tooltip.content}>Короткий</span>} placement={PLACEMENT.Bottom} trigger={TRIGGER.HoverAndFocusVisible} disableMaxWidth>
            <Button data-test-id={TEST_IDS.tooltip.triggerOpen} label='Short (no max-width)' view='outline' appearance='neutral' />
          </Tooltip>
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>LongTextNoMaxWidth</DemoTitle>
        <DemoHint>{'Длинный текст без ограничения max-width — растягивается по контенту.'}</DemoHint>
        <DemoActions align='center'>
          <Tooltip tip={<span data-test-id={TEST_IDS.tooltip.content}>{LONG_TEXT}</span>} placement={PLACEMENT.Bottom} trigger={TRIGGER.HoverAndFocusVisible} disableMaxWidth>
            <Button data-test-id={TEST_IDS.tooltip.triggerOpen} label='Long text (no max-width)' view='outline' appearance='neutral' />
          </Tooltip>
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...x.parameters?.docs?.source}}},S=[`LongTextDefault`,`NoMaxWidthShort`,`LongTextNoMaxWidth`]}))();export{y as LongTextDefault,x as LongTextNoMaxWidth,b as NoMaxWidthShort,S as __namedExportsOrder,v as default};
//# sourceMappingURL=Tooltip.LongText.stories-C5nyF1Ts.js.map