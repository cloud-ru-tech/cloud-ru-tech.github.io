import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,ct as r,d as i,fn as a,gn as o,hn as s,l as c,m as l,nt as u,t as d,u as f}from"./iframe-CvASAC9b.js";var p,m,h,g=e((()=>{p=`_adaptiveStack_evkwt_4`,m=`_adaptiveSurface_evkwt_11`,h={adaptiveStack:p,adaptiveSurface:m}})),_,v=e((()=>{_={adaptiveProvider:`adaptive-provider`}}));function y(){let{layoutType:e}=s(),t=r(e);return(0,b.jsxs)(`div`,{className:h.adaptiveSurface,"data-test-id":_.adaptiveProvider,children:[(0,b.jsxs)(`p`,{children:[`Из контекста (`,(0,b.jsx)(`code`,{children:`useAdaptiveLayout`}),`): `,(0,b.jsx)(`b`,{children:e})]}),(0,b.jsx)(`p`,{children:t?`Мобильная ветка (на мобиле — BottomSheet и т.п.)`:`Десктопная ветка`})]})}var b,x,S,C,w,T;e((()=>{d(),u(),g(),v(),b=t(),{expect:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Snack/Foundation & utilities/Adaptive`,id:`components-adaptive`,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{layoutType:o.Desktop},argTypes:{layoutType:{control:`radio`,options:Object.values(o)}}},w={tags:[`dev`,`test`],render:e=>(0,b.jsx)(f,{children:(0,b.jsxs)(i,{width:`wide`,children:[(0,b.jsx)(l,{children:`Adaptive Provider`}),(0,b.jsxs)(c,{children:[(0,b.jsx)(`code`,{children:`AdaptiveProvider`}),` ставится один раз в корне и раздаёт `,(0,b.jsx)(`code`,{children:`layoutType`}),` вложенным компонентам через контекст — без обёрток и проброса пропа. Переключите контрол; в приложении значение приходит из `,(0,b.jsx)(`code`,{children:`useAdaptiveBootstrap()`}),` или реактивного `,(0,b.jsx)(`code`,{children:`store`}),` хост-приложения. Явно переданный компоненту проп `,(0,b.jsx)(`code`,{children:`layoutType`}),` всегда побеждает контекст.`]}),(0,b.jsx)(n,{block:!0,children:(0,b.jsx)(`div`,{className:h.adaptiveStack,children:(0,b.jsx)(a,{layoutType:e.layoutType,children:(0,b.jsx)(y,{})})})})]})}),play:async({canvasElement:e})=>{await x(S(e).getByTestId(_.adaptiveProvider)).toBeVisible()}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Adaptive Provider</DemoTitle>
        <DemoHint>
          <code>AdaptiveProvider</code> ставится один раз в корне и раздаёт <code>layoutType</code> вложенным
          компонентам через контекст — без обёрток и проброса пропа. Переключите контрол; в приложении значение приходит
          из <code>useAdaptiveBootstrap()</code> или реактивного <code>store</code> хост-приложения. Явно переданный
          компоненту проп <code>layoutType</code> всегда побеждает контекст.
        </DemoHint>
        <DemoActions block>
          <div className={styles.adaptiveStack}>
            <AdaptiveProvider layoutType={args.layoutType}>
              <LayoutSurface />
            </AdaptiveProvider>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.adaptiveProvider)).toBeVisible();
  }
}`,...w.parameters?.docs?.source}}},T=[`Playground`]}))();export{w as Playground,T as __namedExportsOrder,C as default};
//# sourceMappingURL=AdaptiveProvider.Playground.stories-abcEwxW7.js.map