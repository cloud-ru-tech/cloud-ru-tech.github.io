import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bb1kR6xz.js";import{i as c,t as l,u}from"./src-DX21hCpC.js";import{n as d,t as f}from"./testIds-C8OM7gzl.js";var p,m,h,g,_,v,y,b,x,S;e((()=>{l(),o(),d(),p=t(),{expect:m,fn:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Navigation/Pagination/Pagination/Tests/Interaction`,id:`components-pagination-pagination-tests-interaction`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{total:10,page:3,maxLength:7,onChange:h(),"data-test-id":f.pagination.root},render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{width:`wide`,children:[(0,p.jsx)(a,{children:`InteractionTest`}),(0,p.jsx)(i,{children:`Клики по номерам и стрелкам вызывают onChange с целевой страницей.`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(c,{...e})})]})})},y={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=_(t);await n(`click: page number "5" calls onChange(5)`,async()=>{let t=r.getByTestId(u(5));await g.click(t),m(e.onChange).toHaveBeenCalled();let n=e.onChange.mock.calls[0][0];m(n).toBe(5)}),await n(`click: next button calls onChange(page+1)`,async()=>{e.onChange.mockClear();let t=r.getByTestId(f.pagination.next);await g.click(t);let n=e.onChange.mock.calls[0][0];m(n).toBe(4)}),await n(`click: prev button calls onChange(page-1)`,async()=>{e.onChange.mockClear();let t=r.getByTestId(f.pagination.prev);await g.click(t);let n=e.onChange.mock.calls[0][0];m(n).toBe(2)})}},b={tags:[`test`,`dev`],args:{page:10,total:10,onChange:h(),"data-test-id":f.pagination.root},play:async({args:e,canvasElement:t,step:n})=>{let r=_(t);await n(`next button on last page is disabled and does not fire`,async()=>{let t=r.getByTestId(f.pagination.next);m(t).toBeDisabled(),await g.click(t).catch(()=>void 0),m(e.onChange).not.toHaveBeenCalled()})}},x={tags:[`test`,`dev`],args:{page:1,total:10,onChange:h(),"data-test-id":f.pagination.root},play:async({args:e,canvasElement:t,step:n})=>{let r=_(t);await n(`prev button on first page is disabled and does not fire`,async()=>{let t=r.getByTestId(f.pagination.prev);m(t).toBeDisabled(),await g.click(t).catch(()=>void 0),m(e.onChange).not.toHaveBeenCalled()})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click: page number "5" calls onChange(5)', async () => {
      const pageFive = canvas.getByTestId(getPageNumberTestId(5));
      await userEvent.click(pageFive);
      expect(args.onChange).toHaveBeenCalled();
      const firstCallPage = (args.onChange as ReturnType<typeof fn>).mock.calls[0][0];
      expect(firstCallPage).toBe(5);
    });
    await step('click: next button calls onChange(page+1)', async () => {
      (args.onChange as ReturnType<typeof fn>).mockClear();
      const next = canvas.getByTestId(TEST_IDS.pagination.next);
      await userEvent.click(next);
      const callPage = (args.onChange as ReturnType<typeof fn>).mock.calls[0][0];
      expect(callPage).toBe(4);
    });
    await step('click: prev button calls onChange(page-1)', async () => {
      (args.onChange as ReturnType<typeof fn>).mockClear();
      const prev = canvas.getByTestId(TEST_IDS.pagination.prev);
      await userEvent.click(prev);
      const callPage = (args.onChange as ReturnType<typeof fn>).mock.calls[0][0];
      expect(callPage).toBe(2);
    });
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    page: 10,
    total: 10,
    onChange: fn(),
    'data-test-id': TEST_IDS.pagination.root
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('next button on last page is disabled and does not fire', async () => {
      const next = canvas.getByTestId(TEST_IDS.pagination.next);
      expect(next).toBeDisabled();
      await userEvent.click(next).catch(() => undefined);
      expect(args.onChange).not.toHaveBeenCalled();
    });
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  args: {
    page: 1,
    total: 10,
    onChange: fn(),
    'data-test-id': TEST_IDS.pagination.root
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('prev button on first page is disabled and does not fire', async () => {
      const prev = canvas.getByTestId(TEST_IDS.pagination.prev);
      expect(prev).toBeDisabled();
      await userEvent.click(prev).catch(() => undefined);
      expect(args.onChange).not.toHaveBeenCalled();
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`InteractionTest`,`EdgeAtLastPage`,`EdgeAtFirstPage`]}))();export{x as EdgeAtFirstPage,b as EdgeAtLastPage,y as InteractionTest,S as __namedExportsOrder,v as default};
//# sourceMappingURL=Pagination.InteractionTest.stories-R1VXIEe9.js.map