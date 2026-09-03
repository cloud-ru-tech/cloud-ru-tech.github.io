import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{o as n,t as r}from"./src-nZhlwu6k.js";import{n as i,t as a,u as o}from"./src-A6V3ub-Y.js";import{c as s,r as c,t as l}from"./mockData-DkqJwWhB.js";import{n as u}from"./testIds-yO1pgOmp.js";var d,f,p=e((()=>{d=`_miniWidth_16cbl_3`,f={miniWidth:d}})),m,h,g=e((()=>{p(),m=t(),h=e=>(0,m.jsx)(`div`,{className:f.miniWidth,children:(0,m.jsx)(e,{})})})),_,v,y,b,x,S,C;e((()=>{r(),a(),s(),u(),g(),_=t(),{expect:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Uikit Product/Data display/Quota/QuotaWidgetMini`,id:`uikit-product-quota-quotawidgetmini`,component:i,parameters:{layout:`padded`}},S={tags:[`test`],decorators:[h],render:()=>(0,_.jsx)(i,{...l,quotas:[c],onWidgetOpen:()=>void 0}),play:async({canvasElement:e})=>{let t=b(e),r=t.getByTestId(o.quotaWidgetMini.trigger),i=`${o.quotaWidgetCard.root}--${c.name}`;await y.click(b(r).getByTestId(n.title)),await v(t.getByTestId(o.quotaWidgetMini.content)).toBeVisible(),await v(t.getByTestId(i)).toHaveAttribute(`data-exhausted`,`true`)}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test'],
  decorators: [withMiniWidth],
  render: () => <QuotaWidgetMini {...BASE_QUOTA_WIDGET_MINI_PROPS} quotas={[MOCK_QUOTA_EXHAUSTED]} onWidgetOpen={() => undefined} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByTestId(TEST_IDS.quotaWidgetMini.trigger);
    const cardTestId = \`\${TEST_IDS.quotaWidgetCard.root}--\${MOCK_QUOTA_EXHAUSTED.name}\`;

    // onClick аккордиона висит на заголовке (titleContent), а не на корневом
    // wrapper'е триггера — кликаем внутренний заголовок, чтобы раскрыть блок.
    await userEvent.click(within(trigger).getByTestId(ACCORDION_TEST_IDS.title));
    await expect(canvas.getByTestId(TEST_IDS.quotaWidgetMini.content)).toBeVisible();
    await expect(canvas.getByTestId(cardTestId)).toHaveAttribute('data-exhausted', 'true');
  }
}`,...S.parameters?.docs?.source}}},C=[`InteractionTest`]}))();export{S as InteractionTest,C as __namedExportsOrder,x as default};
//# sourceMappingURL=QuotaWidgetMini.InteractionTest.stories-BkS59l5n.js.map