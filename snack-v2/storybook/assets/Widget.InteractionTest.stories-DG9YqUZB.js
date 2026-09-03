import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BPThJ53l.js";import{c,o as l,t as u}from"./src-B103M2QN2.js";import{a as d,i as f,n as p,o as m,t as h}from"./src-BQl70RWy.js";import{t as g}from"./testIds-BmsKENbT.js";var _,v,y,b,x,S,C,w,T,E;e((()=>{u(),h(),o(),g(),_=t(),{expect:v,fn:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C=y(),w={title:`Uikit Product/Data display/Widget/Tests/Interaction`,id:`uikit-product-widget-tests-interaction`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}}},T={tags:[`test`,`dev`],args:{header:{title:`Cloud servers`,href:`#`},children:`Widget body content.`,state:m.Default,wide:!1,segmentControl:{width:l.Full,defaultValue:`overview`,onChange:y(),items:[{value:`overview`,label:`Overview`},{value:`events`,label:`Events`}]},actions:[{label:`Create`,onClick:y()},{variant:f.Kebab,list:{items:[{content:{label:`Export`},onClick:y()},{content:{label:`Archive`},onClick:y()}]}}],"data-test-id":d.root},render:e=>(0,_.jsx)(s,{children:(0,_.jsxs)(r,{children:[(0,_.jsx)(a,{children:`InteractionTest`}),(0,_.jsx)(i,{children:`Kebab droplist, segment control и error retry.`}),(0,_.jsxs)(n,{block:!0,children:[(0,_.jsx)(p,{...e}),(0,_.jsx)(p,{header:{title:`Monitoring`,href:`#`},state:m.Error,errorState:{errorTitle:`Metrics are unavailable`,errorDescription:`Try reloading the widget.`,updateButtonLabel:`Reload`,onClickUpdate:C},"data-test-id":`widget-error`,children:`Metrics`})]})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=S(t),i=S(document.body),a=r.getByTestId(d.kebabButton);await n(`click: kebab opens droplist in portal`,async()=>{await b.click(a),await x(()=>v(i.getByTestId(d.kebabDroplist)).toBeVisible())}),await n(`keyboard: Escape closes kebab droplist`,async()=>{await b.keyboard(`{Escape}`),await x(()=>v(i.queryByTestId(d.kebabDroplist)).toBeNull())}),await n(`click: segment control fires onChange`,async()=>{await b.click(r.getByTestId(c(`events`))),v(e.segmentControl?.onChange).toHaveBeenCalledWith(`events`)}),await n(`click: error retry fires onClickUpdate`,async()=>{C.mockClear(),await b.click(S(r.getByTestId(`widget-error`)).getByTestId(d.errorRetry)),v(C).toHaveBeenCalledTimes(1)})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    header: {
      title: 'Cloud servers',
      href: '#'
    },
    children: 'Widget body content.',
    state: WIDGET_STATE.Default,
    wide: false,
    segmentControl: {
      width: WIDTH.Full,
      defaultValue: 'overview',
      onChange: fn(),
      items: [{
        value: 'overview',
        label: 'Overview'
      }, {
        value: 'events',
        label: 'Events'
      }]
    },
    actions: [{
      label: 'Create',
      onClick: fn()
    }, {
      variant: BUTTON_TYPE.Kebab,
      list: {
        items: [{
          content: {
            label: 'Export'
          },
          onClick: fn()
        }, {
          content: {
            label: 'Archive'
          },
          onClick: fn()
        }]
      }
    }],
    'data-test-id': TEST_IDS.root
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Kebab droplist, segment control и error retry.</DemoHint>
        <DemoActions block>
          <Widget {...args} />
          <Widget header={{
          title: 'Monitoring',
          href: '#'
        }} state={WIDGET_STATE.Error} errorState={{
          errorTitle: 'Metrics are unavailable',
          errorDescription: 'Try reloading the widget.',
          updateButtonLabel: 'Reload',
          onClickUpdate: onClickUpdateError
        }} data-test-id='widget-error'>
            Metrics
          </Widget>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const kebabButton = canvas.getByTestId(TEST_IDS.kebabButton);
    await step('click: kebab opens droplist in portal', async () => {
      await userEvent.click(kebabButton);
      await waitFor(() => expect(body.getByTestId(TEST_IDS.kebabDroplist)).toBeVisible());
    });
    await step('keyboard: Escape closes kebab droplist', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(body.queryByTestId(TEST_IDS.kebabDroplist)).toBeNull());
    });
    await step('click: segment control fires onChange', async () => {
      await userEvent.click(canvas.getByTestId(segmentTestId('events')));
      expect(args.segmentControl?.onChange).toHaveBeenCalledWith('events');
    });
    await step('click: error retry fires onClickUpdate', async () => {
      onClickUpdateError.mockClear();
      await userEvent.click(within(canvas.getByTestId('widget-error')).getByTestId(TEST_IDS.errorRetry));
      expect(onClickUpdateError).toHaveBeenCalledTimes(1);
    });
  }
}`,...T.parameters?.docs?.source}}},E=[`InteractionTest`]}))();export{T as InteractionTest,E as __namedExportsOrder,w as default};
//# sourceMappingURL=Widget.InteractionTest.stories-DG9YqUZB.js.map