import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BdtyM0cx.js";import{a as c,c as l,i as u,n as d,o as f,r as p,t as m}from"./testIds-CX8Xkait.js";var h,g,_,v,y,b,x,S,C,w;e((()=>{c(),o(),p(),d(),h=t(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b=_(),x=_(),S={title:`Uikit Product/Feedback/ErrorPages/Tests/Interaction`,id:`uikit-product-errorpages-tests-interaction`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}}},C={tags:[`test`,`dev`],render:()=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{width:`wide`,children:[(0,h.jsx)(a,{children:`InteractionTest`}),(0,h.jsx)(i,{children:`Клик по кнопке поддержки и по главной кнопке вызывает соответствующие колбэки.`}),(0,h.jsx)(n,{block:!0,children:(0,h.jsx)(`div`,{className:u.frame,children:(0,h.jsx)(f,{"data-test-id":m.root,errorType:l.Custom,onSupportCenterClick:b,custom:{title:`Custom error`,description:`Something went wrong`,statusCode:500,mainButton:{label:`Retry`,onClick:x}}})})})]})}),play:async({canvasElement:e,step:t})=>{let n=y(e);await t(`click: support center button triggers callback`,async()=>{await v.click(n.getByTestId(m.supportButton)),g(b).toHaveBeenCalledTimes(1)}),await t(`click: main button triggers custom onClick`,async()=>{await v.click(n.getByTestId(m.mainButton)),g(x).toHaveBeenCalledTimes(1)})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик по кнопке поддержки и по главной кнопке вызывает соответствующие колбэки.</DemoHint>
        <DemoActions block>
          <div className={styles.frame}>
            <ErrorPage data-test-id={TEST_IDS.root} errorType={ERROR_TYPE.Custom} onSupportCenterClick={onSupportCenterClick} custom={{
            title: 'Custom error',
            description: 'Something went wrong',
            statusCode: 500,
            mainButton: {
              label: 'Retry',
              onClick: onMainButtonClick
            }
          }} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click: support center button triggers callback', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.supportButton));
      expect(onSupportCenterClick).toHaveBeenCalledTimes(1);
    });
    await step('click: main button triggers custom onClick', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.mainButton));
      expect(onMainButtonClick).toHaveBeenCalledTimes(1);
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`InteractionTest`]}))();export{C as InteractionTest,w as __namedExportsOrder,S as default};
//# sourceMappingURL=ErrorPage.InteractionTest.stories-Dl9z99Mm.js.map