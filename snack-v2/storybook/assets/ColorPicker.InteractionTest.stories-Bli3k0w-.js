import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bb1kR6xz.js";import{l as c,n as l,o as u,s as d,t as f}from"./src-BBh4YhA8.js";import{t as p}from"./testIds-CF3BtmaA.js";var m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{f(),o(),p(),m=t(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y=`section-hex`,b=`section-rgb`,x=`section-hsv`,S=`${c.fieldHex}${d}`,C={title:`Snack/Inputs & Forms/ColorPicker/Tests/Interaction`,id:`components-colorpicker-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onChange:g(),value:`#389f74`,autoApply:!1,withAlpha:!0,availableModes:[u.Hex,u.Rgb,u.Hsv],"data-test-id":c.root}},w={tags:[`test`,`dev`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{width:`wide`,children:[(0,m.jsx)(a,{children:`InteractionTest`}),(0,m.jsx)(i,{children:`Переключение моделей, правка поля и клавиатура слайдера; onChange срабатывает только на Apply.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(l,{...e})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=v(t),i=r.getByTestId(c.root),a=e.onChange;await n(`renders root in hex mode by default`,async()=>{await h(i).toBeVisible(),await h(i).toHaveAttribute(`data-mode`,u.Hex),await h(r.getByTestId(c.fieldHex)).toBeVisible()}),await n(`mode switch: hex → rgb → hsv toggles data-mode and fields`,async()=>{await _.click(r.getByTestId(b)),await h(i).toHaveAttribute(`data-mode`,u.Rgb),await h(r.getByTestId(c.fieldR)).toBeVisible(),await _.click(r.getByTestId(x)),await h(i).toHaveAttribute(`data-mode`,u.Hsv),await h(r.getByTestId(c.fieldH)).toBeVisible(),await _.click(r.getByTestId(y)),await h(i).toHaveAttribute(`data-mode`,u.Hex)}),await n(`keyboard: hue slider ArrowRight increments aria-valuenow`,async()=>{let e=r.getByTestId(c.sliderH);e.focus();let t=Number(e.getAttribute(`aria-valuenow`));await _.keyboard(`{ArrowRight}`),await h(e).toHaveAttribute(`aria-valuenow`,String(t+1))}),await n(`keyboard: hue slider Home / End jump to bounds`,async()=>{let e=r.getByTestId(c.sliderH);e.focus(),await _.keyboard(`{Home}`),await h(e).toHaveAttribute(`aria-valuenow`,`0`),await _.keyboard(`{End}`),await h(e).toHaveAttribute(`aria-valuenow`,`359`)}),await n(`keyboard: hue slider ArrowLeft / ArrowDown decrement`,async()=>{let e=r.getByTestId(c.sliderH);e.focus(),await _.keyboard(`{End}`),await _.keyboard(`{ArrowLeft}`),await h(e).toHaveAttribute(`aria-valuenow`,`358`),await _.keyboard(`{ArrowDown}`),await h(e).toHaveAttribute(`aria-valuenow`,`357`)}),await n(`alpha slider and field are present and interactive (withAlpha)`,async()=>{let e=r.getByTestId(c.sliderAlpha);e.focus(),await _.keyboard(`{Home}`),await h(e).toHaveAttribute(`aria-valuenow`,`0`),await _.keyboard(`{ArrowRight}`),await h(e).toHaveAttribute(`aria-valuenow`,`1`),await h(r.getByTestId(c.fieldAlpha)).toBeVisible()}),await n(`field edit: typing a valid hex updates and Apply fires onChange`,async()=>{let e=r.getByTestId(S);await _.clear(e),await _.type(e,`00ff00`),await _.tab(),a.mockClear(),await _.click(r.getByTestId(c.apply)),h(a).toHaveBeenCalledTimes(1),h(a.mock.calls[0][0].hex).toBe(`#00ff00`)}),await n(`Cancel does not fire onChange and reverts the field`,async()=>{let e=r.getByTestId(S);await _.clear(e),await _.type(e,`ff0000`),await _.tab(),a.mockClear(),await _.click(r.getByTestId(c.cancel)),h(a).not.toHaveBeenCalled(),await h(e).toHaveValue(`389f74`)})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>
          Переключение моделей, правка поля и клавиатура слайдера; onChange срабатывает только на Apply.
        </DemoHint>
        <DemoActions align='center'>
          <ColorPicker {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.root);
    const onChange = args.onChange as ReturnType<typeof fn>;
    await step('renders root in hex mode by default', async () => {
      await expect(root).toBeVisible();
      await expect(root).toHaveAttribute('data-mode', COLOR_MODE.Hex);
      await expect(canvas.getByTestId(TEST_IDS.fieldHex)).toBeVisible();
    });
    await step('mode switch: hex → rgb → hsv toggles data-mode and fields', async () => {
      await userEvent.click(canvas.getByTestId(SEGMENT_RGB));
      await expect(root).toHaveAttribute('data-mode', COLOR_MODE.Rgb);
      await expect(canvas.getByTestId(TEST_IDS.fieldR)).toBeVisible();
      await userEvent.click(canvas.getByTestId(SEGMENT_HSV));
      await expect(root).toHaveAttribute('data-mode', COLOR_MODE.Hsv);
      await expect(canvas.getByTestId(TEST_IDS.fieldH)).toBeVisible();
      await userEvent.click(canvas.getByTestId(SEGMENT_HEX));
      await expect(root).toHaveAttribute('data-mode', COLOR_MODE.Hex);
    });
    await step('keyboard: hue slider ArrowRight increments aria-valuenow', async () => {
      const slider = canvas.getByTestId(TEST_IDS.sliderH);
      slider.focus();
      const before = Number(slider.getAttribute('aria-valuenow'));
      await userEvent.keyboard('{ArrowRight}');
      await expect(slider).toHaveAttribute('aria-valuenow', String(before + 1));
    });
    await step('keyboard: hue slider Home / End jump to bounds', async () => {
      const slider = canvas.getByTestId(TEST_IDS.sliderH);
      slider.focus();
      await userEvent.keyboard('{Home}');
      await expect(slider).toHaveAttribute('aria-valuenow', '0');
      await userEvent.keyboard('{End}');
      await expect(slider).toHaveAttribute('aria-valuenow', '359');
    });
    await step('keyboard: hue slider ArrowLeft / ArrowDown decrement', async () => {
      const slider = canvas.getByTestId(TEST_IDS.sliderH);
      slider.focus();
      await userEvent.keyboard('{End}');
      await userEvent.keyboard('{ArrowLeft}');
      await expect(slider).toHaveAttribute('aria-valuenow', '358');
      await userEvent.keyboard('{ArrowDown}');
      await expect(slider).toHaveAttribute('aria-valuenow', '357');
    });
    await step('alpha slider and field are present and interactive (withAlpha)', async () => {
      const alphaSlider = canvas.getByTestId(TEST_IDS.sliderAlpha);
      alphaSlider.focus();
      await userEvent.keyboard('{Home}');
      await expect(alphaSlider).toHaveAttribute('aria-valuenow', '0');
      await userEvent.keyboard('{ArrowRight}');
      await expect(alphaSlider).toHaveAttribute('aria-valuenow', '1');
      await expect(canvas.getByTestId(TEST_IDS.fieldAlpha)).toBeVisible();
    });
    await step('field edit: typing a valid hex updates and Apply fires onChange', async () => {
      const hexInput = canvas.getByTestId(HEX_INPUT);
      await userEvent.clear(hexInput);
      await userEvent.type(hexInput, '00ff00');
      await userEvent.tab();
      onChange.mockClear();
      await userEvent.click(canvas.getByTestId(TEST_IDS.apply));
      expect(onChange).toHaveBeenCalledTimes(1);
      expect((onChange.mock.calls[0][0] as {
        hex: string;
      }).hex).toBe('#00ff00');
    });
    await step('Cancel does not fire onChange and reverts the field', async () => {
      const hexInput = canvas.getByTestId(HEX_INPUT);
      await userEvent.clear(hexInput);
      await userEvent.type(hexInput, 'ff0000');
      await userEvent.tab();
      onChange.mockClear();
      await userEvent.click(canvas.getByTestId(TEST_IDS.cancel));
      expect(onChange).not.toHaveBeenCalled();
      await expect(hexInput).toHaveValue('389f74');
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`InteractionTest`]}))();export{w as InteractionTest,T as __namedExportsOrder,C as default};
//# sourceMappingURL=ColorPicker.InteractionTest.stories-Bli3k0w-.js.map