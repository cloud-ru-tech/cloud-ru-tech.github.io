import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{En as n,Sn as r,Tn as i,d as a,f as o,ft as s,g as c,ot as l,p as u,t as d,u as f}from"./iframe-Gljg_cUQ.js";var p,m,h,g=e((()=>{p=`_adaptiveStack_1fj1n_4`,m=`_adaptiveSurface_1fj1n_11`,h={adaptiveStack:p,adaptiveSurface:m}})),_,v=e((()=>{_={adaptiveProvider:`adaptive-provider`}}));function y(){let{layoutType:e}=i(),t=s(e);return(0,b.jsxs)(`div`,{className:h.adaptiveSurface,"data-test-id":_.adaptiveProvider,children:[(0,b.jsxs)(`p`,{children:[`Из контекста (`,(0,b.jsx)(`code`,{children:`useAdaptiveLayout`}),`): `,(0,b.jsx)(`b`,{children:e})]}),(0,b.jsx)(`p`,{children:t?`Мобильная ветка (на мобиле — BottomSheet и т.п.)`:`Десктопная ветка`})]})}var b,x,S,C,w,T;e((()=>{d(),l(),g(),v(),b=t(),{expect:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Snack/Foundation & utilities/Adaptive`,id:`components-adaptive`,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{layoutType:n.Desktop},argTypes:{layoutType:{control:`radio`,options:Object.values(n)}}},w={tags:[`dev`,`test`],render:e=>(0,b.jsx)(o,{children:(0,b.jsxs)(u,{width:`wide`,children:[(0,b.jsx)(c,{children:`Adaptive Provider`}),(0,b.jsxs)(a,{children:[(0,b.jsx)(`code`,{children:`AdaptiveProvider`}),` ставится один раз в корне и раздаёт `,(0,b.jsx)(`code`,{children:`layoutType`}),` вложенным компонентам через контекст — без обёрток и проброса пропа. Переключите контрол; в приложении значение приходит из `,(0,b.jsx)(`code`,{children:`useAdaptiveBootstrap()`}),` или реактивного `,(0,b.jsx)(`code`,{children:`store`}),` хост-приложения. Явно переданный компоненту проп `,(0,b.jsx)(`code`,{children:`layoutType`}),` всегда побеждает контекст.`]}),(0,b.jsx)(f,{block:!0,children:(0,b.jsx)(`div`,{className:h.adaptiveStack,children:(0,b.jsx)(r,{layoutType:e.layoutType,children:(0,b.jsx)(y,{})})})})]})}),play:async({canvasElement:e})=>{await x(S(e).getByTestId(_.adaptiveProvider)).toBeVisible()}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=AdaptiveProvider.Playground.stories-UKXA5Y19.js.map