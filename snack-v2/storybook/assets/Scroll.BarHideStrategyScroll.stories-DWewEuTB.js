import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BRJzdrhE.js";import{a as c,n as l,t as u}from"./src-D3AwIOHR.js";import{n as d,t as f}from"./styles.module-CrtsmC9o.js";import{n as p,t as m}from"./testIds-B4PNLEx4.js";import{a as h,i as g,n as _,r as v,t as y}from"./_shared-BIapEj5-.js";var b,x,S,C,w,T;e((()=>{u(),o(),f(),p(),g(),b=t(),{expect:x,waitFor:S}=__STORYBOOK_MODULE_TEST__,C={title:`Snack/Layout & containers/Scroll/Examples/BarHideStrategyScroll`,id:`components-scroll-examples-barhidestrategyscroll`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}}},w={tags:[`dev`,`test`],args:{barHideStrategy:c.Scroll,"data-test-id":m.root},render:e=>(0,b.jsx)(s,{children:(0,b.jsxs)(r,{width:`wide`,children:[(0,b.jsx)(a,{children:`BarHideStrategyScroll`}),(0,b.jsx)(i,{children:`Scrollbar появляется только во время прокрутки и затем исчезает.`}),(0,b.jsx)(n,{align:`center`,children:(0,b.jsx)(`div`,{className:d.scroll,children:(0,b.jsx)(l,{...e,children:h})})})]})}),play:async({canvasElement:e})=>{let t=_(e);await S(()=>x(v(t)).not.toBeNull());let n=t.querySelector(`.os-viewport`)??t;n.scrollTop=80,n.dispatchEvent(new Event(`scroll`,{bubbles:!0})),n.dispatchEvent(new WheelEvent(`wheel`,{bubbles:!0,deltaY:80})),await S(()=>{let e=v(t);x(e.classList.contains(y)).toBe(!0)})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    barHideStrategy: BAR_HIDE_STRATEGY.Scroll,
    'data-test-id': TEST_IDS.root
  },
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>BarHideStrategyScroll</DemoTitle>
        <DemoHint>{'Scrollbar появляется только во время прокрутки и затем исчезает.'}</DemoHint>
        <DemoActions align='center'>
          <div className={styles.scroll}>
            <Scroll {...args}>{longContent}</Scroll>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const host = getHost(canvasElement);
    await waitFor(() => expect(getVerticalScrollbar(host)).not.toBeNull());
    const viewport = host.querySelector<HTMLElement>('.os-viewport') ?? host;
    viewport.scrollTop = 80;
    viewport.dispatchEvent(new Event('scroll', {
      bubbles: true
    }));
    viewport.dispatchEvent(new WheelEvent('wheel', {
      bubbles: true,
      deltaY: 80
    }));
    await waitFor(() => {
      const bar = getVerticalScrollbar(host);
      expect(bar!.classList.contains(VISIBLE_CLASS)).toBe(true);
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`BarHideStrategyScroll`]}))();export{w as BarHideStrategyScroll,T as __namedExportsOrder,C as default};
//# sourceMappingURL=Scroll.BarHideStrategyScroll.stories-DWewEuTB.js.map