import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-XppXgSyX.js";import{i as c,o as l,t as u}from"./src-D6nkENOt.js";import{n as d,t as f}from"./testIds-B6XEkjp9.js";var p,m,h,g,_,v,y,b;e((()=>{u(),o(),d(),p=t(),{expect:m,fn:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Data display/Tag/Tag/Examples/Removable`,id:`components-tag-tag-examples-removable`,component:c,parameters:{layout:`fullscreen`}},y={tags:[`dev`,`test`],args:{onDelete:h()},render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`Removable`}),(0,p.jsx)(i,{children:`Тег с кнопкой удаления — onDelete срабатывает по клику на крестик.`}),(0,p.jsxs)(n,{align:`center`,children:[(0,p.jsx)(c,{label:`Удаляемый тег`,onDelete:e.onDelete,"data-test-id":f.tag.removableNeutral}),(0,p.jsx)(c,{appearance:l.Primary,label:`Primary removable`,onDelete:e.onDelete,"data-test-id":f.tag.removablePrimary})]})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=_(t);await n(`Click first remove`,async()=>{let e=_(r.getByTestId(f.tag.removableNeutral)).getByTestId(f.tag.removeButton);await g.click(e)}),await n(`onDelete fires`,async()=>{m(e.onDelete).toHaveBeenCalled()})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    onDelete: fn()
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Removable</DemoTitle>
        <DemoHint>Тег с кнопкой удаления — onDelete срабатывает по клику на крестик.</DemoHint>
        <DemoActions align='center'>
          <Tag label='Удаляемый тег' onDelete={args.onDelete} data-test-id={TEST_IDS.tag.removableNeutral} />
          <Tag appearance={APPEARANCE.Primary} label='Primary removable' onDelete={args.onDelete} data-test-id={TEST_IDS.tag.removablePrimary} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Click first remove', async () => {
      const firstRemoveButton = within(canvas.getByTestId(TEST_IDS.tag.removableNeutral)).getByTestId(TEST_IDS.tag.removeButton);
      await userEvent.click(firstRemoveButton);
    });
    await step('onDelete fires', async () => {
      expect(args.onDelete).toHaveBeenCalled();
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`Removable`]}))();export{y as Removable,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Tag.Removable.stories-K3AAqBnP.js.map