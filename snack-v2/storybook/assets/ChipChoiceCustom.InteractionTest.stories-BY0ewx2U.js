import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-d1MamqAX.js";import{_ as c,o as l,t as u,v as d}from"./src-BOtyU2en.js";import{n as f,t as p}from"./testIds-rYjH_ezV.js";import{n as m,t as h}from"./styles.module-B5TQqo6I.js";var g,_,v,y,b,x,S,C,w,T;e((()=>{u(),o(),f(),h(),g=t(),{expect:_,fn:v,userEvent:y,waitFor:b,within:x}=__STORYBOOK_MODULE_TEST__,S=[`Alpha`,`Beta`,`Gamma`],C={title:`Snack/Inputs & Forms/Chips/ChipChoice/Custom/Tests/Interaction`,id:`components-chips-chipchoice-custom-tests-interaction`,component:l.Custom,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{label:`Custom`,size:d.S,onChange:v(),"data-test-id":p.chipChoice.root}},w={tags:[`test`,`dev`],render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`InteractionTest (Custom)`}),(0,g.jsx)(i,{children:`Клик открывает кастомное выпадающее меню; выбор опции закрывает его.`}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsx)(l.Custom,{...e,content:({closeDroplist:e,value:t,onChange:n})=>(0,g.jsx)(`div`,{className:m.customContent,children:S.map(r=>(0,g.jsx)(`button`,{type:`button`,"data-test-id":`custom-option-${r.toLowerCase()}`,className:t===r?`${m.customOption} ${m.customOptionSelected}`:m.customOption,onClick:()=>{n?.(r),e()},children:r},r))}),valueRender:e=>e??null})})]})}),play:async({canvasElement:e,step:t})=>{let n=x(e),r=n.getByTestId(p.chipChoice.root);await t(`click: opens custom dropdown`,async()=>{await y.click(r),await b(()=>{_(n.getByTestId(c.droplist)).toBeVisible()})}),await t(`click option: closes dropdown`,async()=>{let e=n.getByTestId(`custom-option-alpha`);await y.click(e),await b(()=>{_(n.queryByTestId(c.droplist)).not.toBeInTheDocument()})})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest (Custom)</DemoTitle>
        <DemoHint>Клик открывает кастомное выпадающее меню; выбор опции закрывает его.</DemoHint>
        <DemoActions align='center'>
          <ChipChoice.Custom {...args} content={({
          closeDroplist,
          value,
          onChange
        }) => <div className={styles.customContent}>
                {CUSTOM_OPTIONS.map(opt => <button key={opt} type='button' data-test-id={\`custom-option-\${opt.toLowerCase()}\`} className={value === opt ? \`\${styles.customOption} \${styles.customOptionSelected}\` : styles.customOption} onClick={() => {
            onChange?.(opt);
            closeDroplist();
          }}>
                    {opt}
                  </button>)}
              </div>} valueRender={value => value ?? null} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByTestId(TEST_IDS.chipChoice.root);
    await step('click: opens custom dropdown', async () => {
      await userEvent.click(chip);
      await waitFor(() => {
        expect(canvas.getByTestId(CHIP_CHOICE_TEST_IDS.droplist)).toBeVisible();
      });
    });
    await step('click option: closes dropdown', async () => {
      const option = canvas.getByTestId('custom-option-alpha');
      await userEvent.click(option);
      await waitFor(() => {
        expect(canvas.queryByTestId(CHIP_CHOICE_TEST_IDS.droplist)).not.toBeInTheDocument();
      });
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`InteractionTest`]}))();export{w as InteractionTest,T as __namedExportsOrder,C as default};
//# sourceMappingURL=ChipChoiceCustom.InteractionTest.stories-BY0ewx2U.js.map