import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Du0zU9lI.js";import{n as c,o as l,t as u}from"./src-646ad5as.js";import{n as d,t as f}from"./styles.module-CrtsmC9o.js";import{n as p,t as m}from"./testIds-B4PNLEx4.js";import{a as h,i as g,n as _}from"./_shared-BIapEj5-.js";var v,y,b,x,S,C;e((()=>{u(),o(),f(),p(),g(),v=t(),{expect:y,waitFor:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Layout & containers/Scroll/Examples/ResizeHandlePresent`,id:`components-scroll-examples-resizehandlepresent`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}}},S={tags:[`dev`,`test`],args:{resize:l.Both,"data-test-id":m.root},render:e=>(0,v.jsx)(s,{children:(0,v.jsxs)(r,{width:`wide`,children:[(0,v.jsx)(a,{children:`ResizeHandlePresent`}),(0,v.jsx)(i,{children:`Resize handle на правом нижнем углу позволяет менять размеры контейнера.`}),(0,v.jsx)(n,{align:`center`,children:(0,v.jsx)(`div`,{className:d.scroll,children:(0,v.jsx)(c,{...e,children:h})})})]})}),play:async({canvasElement:e})=>{let t=_(e);await b(()=>{let e=t.querySelector(`.os-host`)??t,n=getComputedStyle(e).resize,r=getComputedStyle(t).resize;y([n,r]).toContain(`both`)})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    resize: RESIZE.Both,
    'data-test-id': TEST_IDS.root
  },
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>ResizeHandlePresent</DemoTitle>
        <DemoHint>{'Resize handle на правом нижнем углу позволяет менять размеры контейнера.'}</DemoHint>
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
    await waitFor(() => {
      // resize может стоять на корне host либо на внутреннем .os-host
      const inner = host.querySelector<HTMLElement>('.os-host') ?? host;
      const resizeValue = getComputedStyle(inner).resize;
      const hostResize = getComputedStyle(host).resize;
      expect([resizeValue, hostResize]).toContain('both');
    });
  }
}`,...S.parameters?.docs?.source}}},C=[`ResizeHandlePresent`]}))();export{S as ResizeHandlePresent,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Scroll.ResizeHandlePresent.stories-BGuCHmdD.js.map