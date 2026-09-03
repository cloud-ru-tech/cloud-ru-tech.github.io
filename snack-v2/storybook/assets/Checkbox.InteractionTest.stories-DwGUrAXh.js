import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BdtyM0cx.js";import{_ as c,t as l,u}from"./src-BUEtcvh1.js";import{n as d,t as f}from"./testIds-qlmU7fvP.js";var p,m,h,g,_,v,y,b;e((()=>{l(),o(),d(),p=t(),{expect:m,fn:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Inputs & Forms/Toggles/Checkbox/Tests/Interaction`,id:`components-toggles-checkbox-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{size:c.XS,defaultChecked:!1,onChange:h(),"data-test-id":f.checkbox.root},render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`InteractionTest`}),(0,p.jsx)(i,{children:`Клик переключает checked, indeterminate сбрасывается при клике.`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(u,{...e})})]})})},y={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=_(t).getByTestId(f.checkbox.nativeInput);await n(`click: triggers onChange(true)`,async()=>{await g.click(r),m(e.onChange).toHaveBeenCalledTimes(1),m(e.onChange).toHaveBeenLastCalledWith(!0)}),await n(`click again: triggers onChange(false)`,async()=>{await g.click(r),m(e.onChange).toHaveBeenCalledTimes(2),m(e.onChange).toHaveBeenLastCalledWith(!1)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId(TEST_IDS.checkbox.nativeInput);
    await step('click: triggers onChange(true)', async () => {
      await userEvent.click(input);
      expect(args.onChange).toHaveBeenCalledTimes(1);
      expect(args.onChange).toHaveBeenLastCalledWith(true);
    });
    await step('click again: triggers onChange(false)', async () => {
      await userEvent.click(input);
      expect(args.onChange).toHaveBeenCalledTimes(2);
      expect(args.onChange).toHaveBeenLastCalledWith(false);
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Checkbox.InteractionTest.stories-DwGUrAXh.js.map