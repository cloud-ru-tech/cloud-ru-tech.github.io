import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-Du0zU9lI.js";import{a as u,i as d,n as f,t as p}from"./src-DdsYkwm0.js";import{n as m,t as h}from"./testIds-Cf4V0tyQ.js";var g,_,v,y,b,x,S,C,w,T,E;t((()=>{p(),g=e(n(),1),c(),m(),_=r(),{expect:v,fn:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Snack/Data display/PromoTag/Examples/Polymorphic`,id:`components-promotag-examples-polymorphic`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}}},C=(0,g.forwardRef)(({to:e,onClick:t,children:n,...r},i)=>(0,_.jsx)(`a`,{ref:i,href:e,onClick:t,...r,children:n})),C.displayName=`MockLink`,w=y(e=>e.preventDefault()),T={tags:[`dev`,`test`],render:()=>(0,_.jsx)(l,{children:(0,_.jsxs)(a,{children:[(0,_.jsx)(s,{children:`Polymorphic`}),(0,_.jsxs)(o,{children:[`PromoTag как <a> с href и target='_blank' (rel добавляется автоматически). Для react-router-dom — as=`,`{Link}`,` и to.`]}),(0,_.jsxs)(i,{align:`center`,children:[(0,_.jsx)(f,{as:`a`,href:`https://example.com`,target:`_blank`,label:`External promo`,appearance:d.Blue,roleAppearance:u.Decor,"data-test-id":h.polymorphicAnchor}),(0,_.jsx)(f,{as:`a`,href:`https://example.com`,label:`Clickable anchor`,appearance:d.Green,roleAppearance:u.Decor,onClick:w,"data-test-id":h.polymorphicAnchorClick}),(0,_.jsx)(f,{as:C,to:`https://example.com`,label:`Preview link`,appearance:d.Primary,roleAppearance:u.Accent,"data-test-id":h.polymorphicLink})]})]})}),play:async({canvasElement:e,step:t})=>{let n=x(e);await t(`as='a' → href and target`,async()=>{let e=n.getByTestId(h.polymorphicAnchor);await v(e).toHaveAttribute(`href`,`https://example.com`),await v(e).toHaveAttribute(`target`,`_blank`),await v(e).toHaveAttribute(`rel`,`noopener noreferrer`)}),await t(`as={Link} → to prop reaches href`,async()=>{let e=n.getByTestId(h.polymorphicLink);await v(e).toHaveAttribute(`href`,`https://example.com`)}),await t(`as='a' onClick → handler from props, not rest`,async()=>{w.mockClear(),await b.click(n.getByTestId(h.polymorphicAnchorClick)),v(w).toHaveBeenCalledTimes(1)})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>Polymorphic</DemoTitle>
        <DemoHint>
          PromoTag как &lt;a&gt; с href и target=&apos;_blank&apos; (rel добавляется автоматически). Для
          react-router-dom — as={'{Link}'} и to.
        </DemoHint>
        <DemoActions align='center'>
          <PromoTag as='a' href='https://example.com' target='_blank' label='External promo' appearance={APPEARANCE.Blue} roleAppearance={ROLE_APPEARANCE.Decor} data-test-id={TEST_IDS.polymorphicAnchor} />
          <PromoTag as='a' href='https://example.com' label='Clickable anchor' appearance={APPEARANCE.Green} roleAppearance={ROLE_APPEARANCE.Decor} onClick={onAnchorClick} data-test-id={TEST_IDS.polymorphicAnchorClick} />
          <PromoTag as={MockLink} to='https://example.com' label='Preview link' appearance={APPEARANCE.Primary} roleAppearance={ROLE_APPEARANCE.Accent} data-test-id={TEST_IDS.polymorphicLink} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const root = within(canvasElement);
    await step("as='a' → href and target", async () => {
      const anchor = root.getByTestId(TEST_IDS.polymorphicAnchor);
      await expect(anchor).toHaveAttribute('href', 'https://example.com');
      await expect(anchor).toHaveAttribute('target', '_blank');
      await expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    });
    await step('as={Link} → to prop reaches href', async () => {
      const link = root.getByTestId(TEST_IDS.polymorphicLink);
      await expect(link).toHaveAttribute('href', 'https://example.com');
    });
    await step("as='a' onClick → handler from props, not rest", async () => {
      onAnchorClick.mockClear();
      await userEvent.click(root.getByTestId(TEST_IDS.polymorphicAnchorClick));
      expect(onAnchorClick).toHaveBeenCalledTimes(1);
    });
  }
}`,...T.parameters?.docs?.source}}},E=[`Polymorphic`]}))();export{T as Polymorphic,E as __namedExportsOrder,S as default};
//# sourceMappingURL=PromoTag.Polymorphic.stories-Lb5007jj.js.map