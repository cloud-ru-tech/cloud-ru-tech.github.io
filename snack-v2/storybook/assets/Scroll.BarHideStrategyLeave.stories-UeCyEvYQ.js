import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-SlIP-akt.js";import{a as c,n as l,t as u}from"./src-Gvan12V7.js";import{n as d,t as f}from"./styles.module-CrtsmC9o.js";import{n as p,t as m}from"./testIds-B4PNLEx4.js";import{a as h,i as g,n as _,r as v,t as y}from"./_shared-BIapEj5-.js";var b,x,S,C,w,T;e((()=>{u(),o(),f(),p(),g(),b=t(),{expect:x,waitFor:S}=__STORYBOOK_MODULE_TEST__,C={title:`Snack/Layout & containers/Scroll/Examples/BarHideStrategyLeave`,id:`components-scroll-examples-barhidestrategyleave`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}}},w={tags:[`dev`,`test`],args:{barHideStrategy:c.Leave,"data-test-id":m.root},render:e=>(0,b.jsx)(s,{children:(0,b.jsxs)(r,{width:`wide`,children:[(0,b.jsx)(a,{children:`BarHideStrategyLeave`}),(0,b.jsx)(i,{children:`Scrollbar появляется на hover и скрывается при mouseleave.`}),(0,b.jsx)(n,{align:`center`,children:(0,b.jsx)(`div`,{className:d.scroll,children:(0,b.jsx)(l,{...e,children:h})})})]})}),play:async({canvasElement:e,step:t})=>{let n=_(e);await S(()=>x(v(n)).not.toBeNull()),await t(`hover: scrollbar becomes visible`,async()=>{n.dispatchEvent(new MouseEvent(`mouseenter`,{bubbles:!0})),n.dispatchEvent(new MouseEvent(`mousemove`,{bubbles:!0})),await S(()=>{let e=v(n);x(e.classList.contains(y)).toBe(!0)})}),n.dispatchEvent(new MouseEvent(`mouseleave`,{bubbles:!0}))}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    barHideStrategy: BAR_HIDE_STRATEGY.Leave,
    'data-test-id': TEST_IDS.root
  },
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>BarHideStrategyLeave</DemoTitle>
        <DemoHint>{'Scrollbar появляется на hover и скрывается при mouseleave.'}</DemoHint>
        <DemoActions align='center'>
          <div className={styles.scroll}>
            <Scroll {...args}>{longContent}</Scroll>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const host = getHost(canvasElement);
    await waitFor(() => expect(getVerticalScrollbar(host)).not.toBeNull());
    await step('hover: scrollbar becomes visible', async () => {
      host.dispatchEvent(new MouseEvent('mouseenter', {
        bubbles: true
      }));
      host.dispatchEvent(new MouseEvent('mousemove', {
        bubbles: true
      }));
      await waitFor(() => {
        const bar = getVerticalScrollbar(host);
        expect(bar!.classList.contains(VISIBLE_CLASS)).toBe(true);
      });
    });

    // TODO: leave→hide не детектится синтетическим mouseleave — OverlayScrollbars завязан
    // на нативный pointer state браузера и не снимает .os-scrollbar-visible по dispatchEvent.
    // Проверять надо через Playwright page.mouse в визуальном e2e, не через play-функцию.
    host.dispatchEvent(new MouseEvent('mouseleave', {
      bubbles: true
    }));
  }
}`,...w.parameters?.docs?.source}}},T=[`BarHideStrategyLeave`]}))();export{w as BarHideStrategyLeave,T as __namedExportsOrder,C as default};
//# sourceMappingURL=Scroll.BarHideStrategyLeave.stories-UeCyEvYQ.js.map