import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BPThJ53l.js";import{a as c,c as l,n as u,t as d}from"./src-B103M2QN2.js";import{n as f,t as p}from"./styles.module-Ce4W0czD.js";var m,h,g,_,v,y,b,x,S,C;e((()=>{d(),o(),p(),m=t(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Snack/Inputs & Forms/SegmentControl/Tests/Interaction`,id:`components-segmentcontrol-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{items:[{value:`one`,label:`One`},{value:`two`,label:`Two`,disabled:!0},{value:`three`,label:`Three`},{value:`four`,label:`Four`}],defaultValue:`one`,onChange:g(),"data-test-id":c.root},render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`InteractionTest`}),(0,m.jsx)(i,{children:`Клики и стрелки навигируют по сегментам; disabled сегменты пропускаются.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(`div`,{className:f.item,children:(0,m.jsx)(u,{...e})})})]})})},b={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=v(t),i=r.getByTestId(l(`one`)),a=r.getByTestId(l(`three`)),o=r.getByTestId(l(`four`));await n(`click: select "three"`,async()=>{await _.click(a),h(e.onChange).toHaveBeenCalledWith(`three`),h(a).toHaveAttribute(`aria-checked`,`true`),h(i).toHaveAttribute(`aria-checked`,`false`)}),await n(`keyboard: focus selected segment`,async()=>{a.focus(),h(a).toHaveFocus()}),await n(`keyboard: ArrowRight auto-selects "four"`,async()=>{await _.keyboard(`{ArrowRight}`),h(o).toHaveFocus(),h(o).toHaveAttribute(`aria-checked`,`true`)}),await n(`keyboard: ArrowLeft skips disabled "two" → "one" with auto-select`,async()=>{await _.keyboard(`{ArrowLeft}`),h(a).toHaveFocus(),await _.keyboard(`{ArrowLeft}`),h(i).toHaveFocus(),h(i).toHaveAttribute(`aria-checked`,`true`)}),await n(`keyboard: Home/End jump to first/last`,async()=>{await _.keyboard(`{End}`),h(o).toHaveFocus(),h(o).toHaveAttribute(`aria-checked`,`true`),await _.keyboard(`{Home}`),h(i).toHaveFocus(),h(i).toHaveAttribute(`aria-checked`,`true`)})}},x=[{value:1,label:`One`},{value:2,label:`Two`},{value:3,label:`Three`}],S={tags:[`test`,`dev`],args:{items:x,defaultValue:1,onChange:g(),"data-test-id":c.root},play:async({args:e,canvasElement:t,step:n})=>{let r=v(t).getByTestId(l(3));await n(`click: numeric segment fires onChange with number type`,async()=>{await _.click(r),h(e.onChange).toHaveBeenCalledWith(3);let t=e.onChange.mock.calls[0][0];h(typeof t).toBe(`number`)})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const one = canvas.getByTestId(segmentTestId('one'));
    const three = canvas.getByTestId(segmentTestId('three'));
    const four = canvas.getByTestId(segmentTestId('four'));
    await step('click: select "three"', async () => {
      await userEvent.click(three);
      expect(args.onChange).toHaveBeenCalledWith('three');
      expect(three).toHaveAttribute('aria-checked', 'true');
      expect(one).toHaveAttribute('aria-checked', 'false');
    });
    await step('keyboard: focus selected segment', async () => {
      three.focus();
      expect(three).toHaveFocus();
    });
    await step('keyboard: ArrowRight auto-selects "four"', async () => {
      await userEvent.keyboard('{ArrowRight}');
      expect(four).toHaveFocus();
      expect(four).toHaveAttribute('aria-checked', 'true');
    });
    await step('keyboard: ArrowLeft skips disabled "two" → "one" with auto-select', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      expect(three).toHaveFocus();
      await userEvent.keyboard('{ArrowLeft}');
      expect(one).toHaveFocus();
      expect(one).toHaveAttribute('aria-checked', 'true');
    });
    await step('keyboard: Home/End jump to first/last', async () => {
      await userEvent.keyboard('{End}');
      expect(four).toHaveFocus();
      expect(four).toHaveAttribute('aria-checked', 'true');
      await userEvent.keyboard('{Home}');
      expect(one).toHaveFocus();
      expect(one).toHaveAttribute('aria-checked', 'true');
    });
  }
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    items: numericItems,
    defaultValue: 1,
    onChange: fn(),
    'data-test-id': TEST_IDS.root
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const three = canvas.getByTestId(segmentTestId(3));
    await step('click: numeric segment fires onChange with number type', async () => {
      await userEvent.click(three);
      expect(args.onChange).toHaveBeenCalledWith(3);
      const call = (args.onChange as ReturnType<typeof fn>).mock.calls[0][0];
      expect(typeof call).toBe('number');
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`InteractionTest`,`NumericValueCallback`]}))();export{b as InteractionTest,S as NumericValueCallback,C as __namedExportsOrder,y as default};
//# sourceMappingURL=SegmentControl.InteractionTest.stories-C1lk5MCD.js.map