import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,c as r,d as i,gn as a,nt as o,t as s,u as c}from"./iframe-BPThJ53l.js";import{a as l,i as u,n as d,t as f}from"./src-GmqRSxbl.js";import{n as p,t as m}from"./styles.module-DFYLdCyG.js";var h,g,_,v,y,b,x,S,C,w;e((()=>{o(),f(),s(),l(),m(),h=t(),{expect:g,fn:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Uikit Product/Actions/ButtonPredefined/ButtonDropdown/Tests/Interaction`,id:`uikit-product-buttonpredefined-buttondropdown-tests-interaction`,component:d,parameters:{layout:`fullscreen`,controls:{disable:!0}}},S={tags:[`test`,`dev`],render:()=>(0,h.jsx)(a,{layoutType:n.Desktop,children:(0,h.jsx)(c,{children:(0,h.jsx)(i,{children:(0,h.jsx)(r,{align:`center`,children:(0,h.jsx)(`div`,{className:p.panel,children:(0,h.jsx)(d,{label:`Period`,size:`s`,closeDroplistOnItemClick:!0,"data-test-id":u.buttonDropdown,items:[{id:`y`,content:{label:`Year`},onClick:_(),"data-test-id":u.itemYear},{id:`m`,content:{label:`Month`},onClick:_(),"data-test-id":u.itemMonth}]})})})})})}),play:async({canvasElement:e,step:t})=>{let n=b(e),r=b(document.body);await t(`opens droplist on click`,async()=>{await v.click(n.getByTestId(u.buttonDropdown)),await y(()=>g(r.getByTestId(u.droplist)).toBeVisible())}),await t(`selects item`,async()=>{await v.click(r.getByTestId(u.itemYear)),await y(()=>g(r.queryByTestId(u.itemYear)).toBeNull())})}},C={tags:[`test`,`dev`],render:()=>(0,h.jsx)(a,{layoutType:n.Mobile,children:(0,h.jsx)(c,{children:(0,h.jsx)(i,{children:(0,h.jsx)(r,{align:`center`,children:(0,h.jsx)(`div`,{className:p.panel,children:(0,h.jsx)(d,{label:`Period`,size:`s`,closeDroplistOnItemClick:!0,"data-test-id":u.buttonDropdown,items:[{id:`y`,content:{label:`Year`},onClick:_(),"data-test-id":u.itemYear},{id:`m`,content:{label:`Month`},onClick:_(),"data-test-id":u.itemMonth}]})})})})})}),play:async({canvasElement:e,step:t})=>{let n=b(e),r=b(document.body);await t(`mobile: opens bottom sheet on trigger click`,async()=>{await v.click(n.getByTestId(u.buttonDropdown)),await y(()=>g(r.getByTestId(u.itemMonth)).toBeVisible())}),await t(`mobile: selects item and closes bottom sheet`,async()=>{await v.click(r.getByTestId(u.itemMonth)),await y(()=>g(r.queryByTestId(u.itemMonth)).toBeNull())})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <AdaptiveProvider layoutType={LAYOUT_TYPE.Desktop}>
      <DemoPage>
        <DemoPanel>
          <DemoActions align='center'>
            <div className={styles.panel}>
              <ButtonDropdown label='Period' size='s' closeDroplistOnItemClick data-test-id={TEST_IDS.buttonDropdown} items={[{
              id: 'y',
              content: {
                label: 'Year'
              },
              onClick: fn(),
              'data-test-id': TEST_IDS.itemYear
            }, {
              id: 'm',
              content: {
                label: 'Month'
              },
              onClick: fn(),
              'data-test-id': TEST_IDS.itemMonth
            }]} />
            </div>
          </DemoActions>
        </DemoPanel>
      </DemoPage>
    </AdaptiveProvider>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await step('opens droplist on click', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.buttonDropdown));
      await waitFor(() => expect(body.getByTestId(TEST_IDS.droplist)).toBeVisible());
    });
    await step('selects item', async () => {
      await userEvent.click(body.getByTestId(TEST_IDS.itemYear));
      await waitFor(() => expect(body.queryByTestId(TEST_IDS.itemYear)).toBeNull());
    });
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <AdaptiveProvider layoutType={LAYOUT_TYPE.Mobile}>
      <DemoPage>
        <DemoPanel>
          <DemoActions align='center'>
            <div className={styles.panel}>
              <ButtonDropdown label='Period' size='s' closeDroplistOnItemClick data-test-id={TEST_IDS.buttonDropdown} items={[{
              id: 'y',
              content: {
                label: 'Year'
              },
              onClick: fn(),
              'data-test-id': TEST_IDS.itemYear
            }, {
              id: 'm',
              content: {
                label: 'Month'
              },
              onClick: fn(),
              'data-test-id': TEST_IDS.itemMonth
            }]} />
            </div>
          </DemoActions>
        </DemoPanel>
      </DemoPage>
    </AdaptiveProvider>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await step('mobile: opens bottom sheet on trigger click', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.buttonDropdown));
      // На mobile список рендерится в BottomSheet; видимость айтема = sheet открыт.
      await waitFor(() => expect(body.getByTestId(TEST_IDS.itemMonth)).toBeVisible());
    });
    await step('mobile: selects item and closes bottom sheet', async () => {
      await userEvent.click(body.getByTestId(TEST_IDS.itemMonth));
      await waitFor(() => expect(body.queryByTestId(TEST_IDS.itemMonth)).toBeNull());
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`InteractionTest`,`MobileInteractionTest`]}))();export{S as InteractionTest,C as MobileInteractionTest,w as __namedExportsOrder,x as default};
//# sourceMappingURL=ButtonDropdown.InteractionTest.stories-BKhD3J0q.js.map