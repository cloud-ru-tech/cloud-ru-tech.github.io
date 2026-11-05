import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{f as n,p as r,t as i,u as a}from"./iframe-CH0ThVYh.js";import{G as o,t as s}from"./system-YERBpVbf.js";import{n as c,t as l}from"./src-DTonsfx-.js";import{i as u,n as d,r as f,t as p}from"./testIds-eDf46PPI.js";var m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{l(),s(),i(),f(),d(),m=t(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y=g(),b=g(),x={title:`AI/Surfaces/AiFieldBanner/Tests/Interaction`,id:`ai-aifieldbanner-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}}},S={tags:[`test`,`dev`],render:()=>(0,m.jsx)(n,{children:(0,m.jsx)(r,{children:(0,m.jsx)(a,{align:`start`,children:(0,m.jsx)(c,{variant:`information`,content:`Description`,actionLabel:`Label text`,icon:(0,m.jsx)(o,{}),className:u.bannerCell,"data-test-id":p.root,onActionClick:y,onClose:b})})})}),play:async({canvasElement:e,step:t})=>{y.mockClear(),b.mockClear();let n=v(e);await t(`action: fires onActionClick only`,async()=>{await _.click(n.getByTestId(p.action)),h(y).toHaveBeenCalledTimes(1),h(b).not.toHaveBeenCalled()}),await t(`close: fires onClose only`,async()=>{await _.click(n.getByTestId(p.close)),h(b).toHaveBeenCalledTimes(1),h(y).toHaveBeenCalledTimes(1)})}},C={tags:[`test`,`dev`],render:()=>(0,m.jsx)(n,{children:(0,m.jsx)(r,{children:(0,m.jsx)(a,{align:`start`,children:(0,m.jsx)(c,{content:`Description`,actionLabel:`Label text`,className:u.bannerCell,"data-test-id":p.root})})})})},w={tags:[`test`,`dev`],render:()=>(0,m.jsx)(n,{children:(0,m.jsx)(r,{children:(0,m.jsx)(a,{align:`start`,children:(0,m.jsx)(c,{content:`Description`,icon:(0,m.jsx)(o,{}),className:u.bannerCell,"data-test-id":p.root})})})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoActions align='start'>
          <AiFieldBanner variant='information' content='Description' actionLabel='Label text' icon={<PlaceholderSVG />} className={styles.bannerCell} data-test-id={TEST_IDS.root} onActionClick={onActionClick} onClose={onClose} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    onActionClick.mockClear();
    onClose.mockClear();
    const canvas = within(canvasElement);
    await step('action: fires onActionClick only', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.action));
      expect(onActionClick).toHaveBeenCalledTimes(1);
      expect(onClose).not.toHaveBeenCalled();
    });
    await step('close: fires onClose only', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.close));
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onActionClick).toHaveBeenCalledTimes(1);
    });
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoActions align='start'>
          <AiFieldBanner content='Description' actionLabel='Label text' className={styles.bannerCell} data-test-id={TEST_IDS.root} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoActions align='start'>
          <AiFieldBanner content='Description' icon={<PlaceholderSVG />} className={styles.bannerCell} data-test-id={TEST_IDS.root} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...w.parameters?.docs?.source}}},T=[`InteractionTest`,`WithoutIcon`,`WithoutAction`]}))();export{S as InteractionTest,w as WithoutAction,C as WithoutIcon,T as __namedExportsOrder,x as default};
//# sourceMappingURL=AiFieldBanner.InteractionTest.stories-CyzpmDgJ.js.map