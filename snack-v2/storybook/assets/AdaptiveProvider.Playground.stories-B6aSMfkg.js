import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,c as r,ct as i,d as a,gn as o,l as s,m as c,nt as l,t as u,u as d,yn as f}from"./iframe-D0mM8I4K.js";var p,m,h,g=e((()=>{p=`_adaptiveStack_evkwt_4`,m=`_adaptiveSurface_evkwt_11`,h={adaptiveStack:p,adaptiveSurface:m}})),_,v=e((()=>{_={adaptiveProvider:`adaptive-provider`}}));function y(){let{layoutType:e}=f(),t=i(e);return(0,b.jsxs)(`div`,{className:h.adaptiveSurface,"data-test-id":_.adaptiveProvider,children:[(0,b.jsxs)(`p`,{children:[`Из контекста (`,(0,b.jsx)(`code`,{children:`useAdaptiveLayout`}),`): `,(0,b.jsx)(`b`,{children:e})]}),(0,b.jsx)(`p`,{children:t?`Мобильная ветка (на мобиле — BottomSheet и т.п.)`:`Десктопная ветка`})]})}var b,x,S,C,w,T;e((()=>{u(),l(),g(),v(),b=t(),{expect:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Snack/Foundation & utilities/Adaptive`,id:`components-adaptive`,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{layoutType:n.Desktop},argTypes:{layoutType:{control:`radio`,options:Object.values(n)}}},w={tags:[`dev`,`test`],render:e=>(0,b.jsx)(d,{children:(0,b.jsxs)(a,{width:`wide`,children:[(0,b.jsx)(c,{children:`Adaptive Provider`}),(0,b.jsxs)(s,{children:[(0,b.jsx)(`code`,{children:`AdaptiveProvider`}),` ставится один раз в корне и раздаёт `,(0,b.jsx)(`code`,{children:`layoutType`}),` вложенным компонентам через контекст — без обёрток и проброса пропа. Переключите контрол; в приложении значение приходит из `,(0,b.jsx)(`code`,{children:`useAdaptiveBootstrap()`}),` или реактивного `,(0,b.jsx)(`code`,{children:`store`}),` хост-приложения. Явно переданный компоненту проп `,(0,b.jsx)(`code`,{children:`layoutType`}),` всегда побеждает контекст.`]}),(0,b.jsx)(r,{block:!0,children:(0,b.jsx)(`div`,{className:h.adaptiveStack,children:(0,b.jsx)(o,{layoutType:e.layoutType,children:(0,b.jsx)(y,{})})})})]})}),play:async({canvasElement:e})=>{await x(S(e).getByTestId(_.adaptiveProvider)).toBeVisible()}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=AdaptiveProvider.Playground.stories-B6aSMfkg.js.map