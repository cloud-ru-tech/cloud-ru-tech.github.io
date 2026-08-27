import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{_ as i,g as a,t as o}from"./src-BT-Q5vRn.js";import{b as s,t as c}from"./src-RbwpdxGx.js";import{a as l,c as u,i as d,o as f,r as p,t as m}from"./fixtures-C3acPEZs.js";import{n as h,r as g}from"./testIds-uj6NvpMo.js";import{n as _,t as v}from"./sharedMeta-DZxsH53w.js";function y(){let[e,t]=(0,b.useState)({}),n=(0,b.useMemo)(()=>f(m,e),[e]),r=!!e.role||!!e.status?.length;return(0,x.jsx)(s,{"data-test-id":h.table.root,data:n,columnDefinitions:O,columnFilters:{filters:A,value:e,onChange:t,initialOpen:!0},dataFiltered:r,outline:!0})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;t((()=>{o(),c(),b=e(n(),1),u(),g(),v(),x=r(),{expect:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Snack/Data display/Table/Table/Examples/Filters`,id:`components-table-table-examples-filters`,..._},D=h.component,O=l({withStatusColumn:!0}),k={role:`table-filter-role`,status:`table-filter-status`},A=p.map(e=>({...e,pinned:!0,"data-test-id":k[e.id]})),j=e=>`list__base-item_${e}`,M=d[1],N=f(m,{role:M}).length,P={tags:[`dev`,`test`],render:()=>(0,x.jsx)(y,{}),play:async({canvasElement:e,step:t})=>{let n=T(e),r=T(document.body),o=n.getByTestId(h.table.root);await t(`filters: чипы фильтров отрисованы под тулбаром`,async()=>{S(n.getByTestId(k.role)).toBeVisible(),S(n.getByTestId(k.status)).toBeVisible(),S(T(o).getAllByTestId(D.bodyRow)).toHaveLength(10)}),await t(`filter: выбор роли уменьшает количество строк`,async()=>{await C.click(n.getByTestId(k.role)),await w(()=>S(r.getByTestId(i.droplist)).toBeVisible()),await C.click(r.getByTestId(j(M))),await w(()=>{S(T(o).getAllByTestId(D.bodyRow)).toHaveLength(N)})}),await t(`clear: сброс фильтров возвращает все строки`,async()=>{await C.click(n.getByTestId(a.clearButton)),await w(()=>{S(T(o).getAllByTestId(D.bodyRow)).toHaveLength(10)})})}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <FilteredTable />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    // Droplist чипа монтируется в портал за пределами canvasElement.
    const body = within(document.body);
    const root = canvas.getByTestId(TEST_IDS.table.root);
    await step('filters: чипы фильтров отрисованы под тулбаром', async () => {
      expect(canvas.getByTestId(FILTER_CHIP_TEST_IDS.role)).toBeVisible();
      expect(canvas.getByTestId(FILTER_CHIP_TEST_IDS.status)).toBeVisible();
      // пагинация активна: на первой странице DEFAULT_PAGE_SIZE строк из 15
      expect(within(root).getAllByTestId(COMPONENT_TEST_IDS.bodyRow)).toHaveLength(DEFAULT_PAGE_SIZE);
    });
    await step('filter: выбор роли уменьшает количество строк', async () => {
      await userEvent.click(canvas.getByTestId(FILTER_CHIP_TEST_IDS.role));
      await waitFor(() => expect(body.getByTestId(CHIP_CHOICE_TEST_IDS.droplist)).toBeVisible());
      await userEvent.click(body.getByTestId(filterOptionTestId(FILTERED_ROLE)));
      await waitFor(() => {
        expect(within(root).getAllByTestId(COMPONENT_TEST_IDS.bodyRow)).toHaveLength(FILTERED_ROLE_USERS_COUNT);
      });
    });
    await step('clear: сброс фильтров возвращает все строки', async () => {
      await userEvent.click(canvas.getByTestId(CHIP_CHOICE_ROW_TEST_IDS.clearButton));
      await waitFor(() => {
        expect(within(root).getAllByTestId(COMPONENT_TEST_IDS.bodyRow)).toHaveLength(DEFAULT_PAGE_SIZE);
      });
    });
  }
}`,...P.parameters?.docs?.source}}},F=[`Filters`]}))();export{P as Filters,F as __namedExportsOrder,E as default};
//# sourceMappingURL=Table.Filters.stories-D3H1-KUY.js.map