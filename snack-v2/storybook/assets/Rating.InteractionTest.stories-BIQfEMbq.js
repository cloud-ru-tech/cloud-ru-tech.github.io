import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Du0zU9lI.js";import{n as c,o as l,t as u}from"./src-DwVQwBFN.js";import{t as d}from"./testIds-BLHIDKck.js";var f,p,m,h,g,_,v,y,b,x;e((()=>{u(),o(),d(),f=t(),{expect:p,fn:m,userEvent:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Inputs & Forms/Rating/Tests/Interaction`,id:`components-rating-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{count:5,defaultValue:0,allowHalf:!1,allowClear:!1,readonly:!1,"data-test-id":l.root,onChange:m()},decorators:[(e,t)=>(0,f.jsx)(s,{children:(0,f.jsxs)(r,{children:[(0,f.jsx)(a,{children:t.name}),(0,f.jsx)(i,{children:`Проверка интеракций со звёздами рейтинга.`}),(0,f.jsx)(n,{align:`center`,children:(0,f.jsx)(e,{})})]})})]},v={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=e.onChange,i=g(t);await n(`click: 3rd star calls onChange(3)`,async()=>{let e=i.getByTestId(`${l.star}-3`),t=g(e).getByTestId(l.starHalfRight);await h.click(t),p(r).toHaveBeenCalledWith(3)}),await n(`keyboard: Tab focuses an interactive star`,async()=>{let e=i.getByTestId(l.root);document.activeElement instanceof HTMLElement&&document.activeElement.blur(),await h.tab(),p(e.contains(document.activeElement)).toBe(!0)})}},y={tags:[`test`,`dev`],args:{defaultValue:3,allowClear:!0},play:async({args:e,canvasElement:t,step:n})=>{let r=e.onChange,i=g(t);await n(`click: re-click selected star with allowClear → onChange(0)`,async()=>{let e=i.getByTestId(`${l.star}-3`),t=g(e).getByTestId(l.starHalfRight);await h.click(t),p(r).toHaveBeenLastCalledWith(0)})}},b={tags:[`test`,`dev`],args:{allowHalf:!0},play:async({args:e,canvasElement:t,step:n})=>{let r=e.onChange,i=g(t);await n(`click: left half of 1st star → onChange(0.5)`,async()=>{let e=i.getByTestId(`${l.star}-1`),t=g(e).getByTestId(l.starHalfLeft);await h.click(t),p(r).toHaveBeenCalledWith(.5)}),await n(`click: left half of 3rd star → onChange(2.5)`,async()=>{r.mockClear();let e=i.getByTestId(`${l.star}-3`),t=g(e).getByTestId(l.starHalfLeft);await h.click(t),p(r).toHaveBeenCalledWith(2.5)})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const onChange = args.onChange as ReturnType<typeof fn>;
    const canvas = within(canvasElement);
    await step('click: 3rd star calls onChange(3)', async () => {
      const star = canvas.getByTestId(\`\${TEST_IDS.star}-3\`);
      const rightHalf = within(star).getByTestId(TEST_IDS.starHalfRight);
      await userEvent.click(rightHalf);
      expect(onChange).toHaveBeenCalledWith(3);
    });
    await step('keyboard: Tab focuses an interactive star', async () => {
      const root = canvas.getByTestId(TEST_IDS.root);
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      await userEvent.tab();
      expect(root.contains(document.activeElement)).toBe(true);
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    defaultValue: 3,
    allowClear: true
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const onChange = args.onChange as ReturnType<typeof fn>;
    const canvas = within(canvasElement);
    await step('click: re-click selected star with allowClear → onChange(0)', async () => {
      const star = canvas.getByTestId(\`\${TEST_IDS.star}-3\`);
      const rightHalf = within(star).getByTestId(TEST_IDS.starHalfRight);
      await userEvent.click(rightHalf);
      expect(onChange).toHaveBeenLastCalledWith(0);
    });
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    allowHalf: true
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const onChange = args.onChange as ReturnType<typeof fn>;
    const canvas = within(canvasElement);
    await step('click: left half of 1st star → onChange(0.5)', async () => {
      const star = canvas.getByTestId(\`\${TEST_IDS.star}-1\`);
      const leftHalf = within(star).getByTestId(TEST_IDS.starHalfLeft);
      await userEvent.click(leftHalf);
      expect(onChange).toHaveBeenCalledWith(0.5);
    });
    await step('click: left half of 3rd star → onChange(2.5)', async () => {
      onChange.mockClear();
      const star = canvas.getByTestId(\`\${TEST_IDS.star}-3\`);
      const leftHalf = within(star).getByTestId(TEST_IDS.starHalfLeft);
      await userEvent.click(leftHalf);
      expect(onChange).toHaveBeenCalledWith(2.5);
    });
  }
}`,...b.parameters?.docs?.source}}},x=[`InteractionTest`,`AllowClear`,`AllowHalf`]}))();export{y as AllowClear,b as AllowHalf,v as InteractionTest,x as __namedExportsOrder,_ as default};
//# sourceMappingURL=Rating.InteractionTest.stories-BIQfEMbq.js.map