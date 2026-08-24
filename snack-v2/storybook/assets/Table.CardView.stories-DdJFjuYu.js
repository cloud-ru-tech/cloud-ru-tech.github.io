import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{t as n,v as r,z as i}from"./src-xocaoH2b.js";import{a,c as o,t as s}from"./fixtures-CG2NMcTt.js";import{n as c,r as l}from"./testIds-DcmuthFL.js";import{n as u,t as d}from"./sharedMeta-DWgv1yFP.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{n(),o(),l(),d(),f=t(),{expect:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Data display/Table/Table/Examples/CardView`,id:`components-table-table-examples-cardview`,...u},v=c.component,y=`section-list`,b=a({withStatusColumn:!0}),x={tags:[`dev`,`test`],render:()=>(0,f.jsx)(r,{"data-test-id":c.table.root,data:s,columnDefinitions:b,defaultView:i.Cards,showDataView:!0,headlineId:`name`,rowSelection:{enable:!0,multiRow:!0},sorting:{},outline:!0}),play:async({canvasElement:e,step:t})=>{let n=g(e),r=g(document.body),i=n.getByTestId(c.table.root);await t(`cards: рендерится страница карточек`,async()=>{let e=g(i).getAllByTestId(v.card);p(e).toHaveLength(10)}),await t(`sort: droplist сортировки меняет порядок карточек`,async()=>{let e=g(i).getAllByTestId(v.card)[0].textContent;await m.click(g(i).getByTestId(v.viewSort.droplistTrigger)),await h(()=>p(r.getByTestId(v.viewSort.droplist)).toBeVisible());let t=r.getAllByTestId(v.viewSort.option);await m.click(t[t.length-1]),await h(()=>{let t=g(i).getAllByTestId(v.card)[0];p(t.textContent).not.toBe(e)}),await m.keyboard(`{Escape}`),await h(()=>p(r.queryByTestId(v.viewSort.droplist)).toBeNull())}),await t(`view: сегмент-контрол переключает в table-вид и обратно`,async()=>{let e=n.getByTestId(c.toolbar.dataView);await m.click(g(e).getByTestId(y)),await h(()=>p(g(i).getByTestId(v.headerRow)).toBeVisible()),await m.click(g(e).getByTestId(c.toolbar.dataViewCardsSegment)),await h(()=>p(g(i).getAllByTestId(v.card).length).toBeGreaterThan(0))})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <Table data-test-id={TEST_IDS.table.root} data={SAMPLE_USERS} columnDefinitions={columns} defaultView={VIEW.Cards} showDataView headlineId='name' rowSelection={{
    enable: true,
    multiRow: true
  }} sorting={{}} outline />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    // Droplist'ы @cloud-ru/ds-list монтируются в портал за пределами canvasElement.
    const body = within(document.body);
    const root = canvas.getByTestId(TEST_IDS.table.root);
    await step('cards: рендерится страница карточек', async () => {
      // Пагинация активна: на первой странице DEFAULT_PAGE_SIZE карточек из 15 строк.
      const cards = within(root).getAllByTestId(COMPONENT_TEST_IDS.card);
      expect(cards).toHaveLength(DEFAULT_PAGE_SIZE);
    });
    await step('sort: droplist сортировки меняет порядок карточек', async () => {
      const firstCardTextBefore = within(root).getAllByTestId(COMPONENT_TEST_IDS.card)[0].textContent;
      await userEvent.click(within(root).getByTestId(COMPONENT_TEST_IDS.viewSort.droplistTrigger));
      await waitFor(() => expect(body.getByTestId(COMPONENT_TEST_IDS.viewSort.droplist)).toBeVisible());

      // Порядок опций повторяет порядок колонок (pinned-left → unpinned):
      // последняя — «Баланс»; сортировка по сумме переставляет первую карточку
      // (данные fixtures упорядочены по имени, по балансу порядок другой).
      const options = body.getAllByTestId(COMPONENT_TEST_IDS.viewSort.option);
      await userEvent.click(options[options.length - 1]);
      await waitFor(() => {
        const firstCard = within(root).getAllByTestId(COMPONENT_TEST_IDS.card)[0];
        expect(firstCard.textContent).not.toBe(firstCardTextBefore);
      });

      // Droplist не закрывается по клику на опцию — закрываем Escape'ом,
      // чтобы следующий шаг кликал по тулбару без открытого оверлея.
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(body.queryByTestId(COMPONENT_TEST_IDS.viewSort.droplist)).toBeNull());
    });
    await step('view: сегмент-контрол переключает в table-вид и обратно', async () => {
      const dataView = canvas.getByTestId(TEST_IDS.toolbar.dataView);
      await userEvent.click(within(dataView).getByTestId(TABLE_VIEW_SEGMENT_TEST_ID));
      await waitFor(() => expect(within(root).getByTestId(COMPONENT_TEST_IDS.headerRow)).toBeVisible());

      // Возврат в cards: example демонстрирует карточный вид — story не должна
      // оставаться в table-виде после прогона play.
      await userEvent.click(within(dataView).getByTestId(TEST_IDS.toolbar.dataViewCardsSegment));
      await waitFor(() => expect(within(root).getAllByTestId(COMPONENT_TEST_IDS.card).length).toBeGreaterThan(0));
    });
  }
}`,...x.parameters?.docs?.source}}},S=[`CardView`]}))();export{x as CardView,S as __namedExportsOrder,_ as default};
//# sourceMappingURL=Table.CardView.stories-DdJFjuYu.js.map