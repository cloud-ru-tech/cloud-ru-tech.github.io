import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-n9OCAA8q.js";import{a as c,i as l,n as u,t as d}from"./src-BDkJS_I6.js";import{n as f,t as p}from"./styles.module-BRWQeK1Q.js";import{t as m}from"./testIds-DNlOg-PK.js";var h,g,_,v,y,b,x;e((()=>{d(),o(),p(),m(),h=t(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Typography/TruncateString/Examples/MultiLine`,id:`components-truncatestring-examples-multiline`,component:u,parameters:{layout:`fullscreen`,figma:{disable:!0}}},y=`Описание задачи с несколькими предложениями. Пользователь не хочет видеть полный текст в карточке списка, но ему нужна возможность прочитать всё при наведении или переходе на страницу.`,b={tags:[`dev`],render:()=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{children:[(0,h.jsx)(a,{children:`MultiLine`}),(0,h.jsx)(i,{children:`Многострочная обрезка с лимитом числа строк.`}),(0,h.jsx)(n,{block:!0,children:(0,h.jsx)(`div`,{className:f.container,children:(0,h.jsx)(u,{variant:c.End,text:y,maxLines:3,"data-test-id":l.root})})})]})}),play:async({canvasElement:e})=>{await g(_(e).getByTestId(l.root)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>MultiLine</DemoTitle>
        <DemoHint>Многострочная обрезка с лимитом числа строк.</DemoHint>
        <DemoActions block>
          <div className={styles.container}>
            <TruncateString variant={VARIANT.End} text={LONG_TEXT} maxLines={3} data-test-id={TEST_IDS.root} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`MultiLine`]}))();export{b as MultiLine,x as __namedExportsOrder,v as default};
//# sourceMappingURL=TruncateString.MultiLine.stories-M4XZs-1h.js.map