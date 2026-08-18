import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c}from"./iframe-Du0zU9lI.js";import{t as l,u}from"./src-CSuQWtyc.js";import{_ as d,t as f}from"./src-CIsSApCc.js";import{O as p,t as m,v as h,z as g}from"./src-oUtcJFPK.js";import{a as _,c as v,n as y,s as b,t as x}from"./fixtures-BnILMh_y.js";import{n as S,r as C}from"./testIds-CYUme6XQ.js";function w({onRowClick:e}){let[t,n]=(0,D.useState)([]),[r,i]=(0,D.useState)({});return(0,O.jsx)(h,{"data-test-id":S.table.root,data:y,columnDefinitions:G,getRowId:e=>e.id,onRowClick:e,sorting:{state:t,onChange:e=>{n(e),V(e)}},rowSelection:{enable:!0,multiRow:!0,state:r,onChange:e=>{i(e),H(e)}},expanding:{getSubRows:b,expandingColumnDefinition:{accessorKey:`name`,header:`Подразделение`,showToggle:!0}},suppressPagination:!0,outline:!0})}function T(){return(0,O.jsx)(h,{"data-test-id":I,data:x,columnDefinitions:K,getRowId:e=>e.id,pageSize:5,pagination:{options:[5,10]},defaultView:g.Table,showDataView:!0,headlineId:`name`,onExport:W,outline:!0})}function E(){return(0,O.jsx)(h,{"data-test-id":L,data:x,columnDefinitions:B,columnsSettings:{enableSettingsMenu:!0},outline:!0})}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;t((()=>{f(),l(),m(),D=e(n(),1),c(),v(),C(),O=r(),{expect:k,fn:A,userEvent:j,waitFor:M,within:N}=__STORYBOOK_MODULE_TEST__,P={title:`Snack/Data display/Table/Table/Tests/Interaction`,id:`components-table-table-tests-interaction`,component:h,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onRowClick:A()}},F=S.component,I=`table-client`,L=`table-columns-settings`,R=F.rowActions.option,z=e=>`list__base-item_${e}`,B=_({withColumnSettings:!0}),V=A(),H=A(),U=A(),W=A(),G=[{accessorKey:`role`,header:`Тип`,enableSorting:!0,size:160},{accessorKey:`email`,header:`Email`,enableSorting:!0,size:260},p({pinned:!0,actionsGenerator:()=>[{content:{label:`Открыть`},onClick:()=>U()}]})],K=_(),q={tags:[`test`,`dev`],render:e=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(a,{width:`wide`,children:[(0,O.jsx)(s,{children:`Tree-таблица`}),(0,O.jsx)(o,{children:`Выбор строки, сортировка по заголовку, раскрытие tree-строки, row actions и клик по строке.`}),(0,O.jsx)(i,{align:`start`,children:(0,O.jsx)(w,{onRowClick:e.onRowClick})})]}),(0,O.jsxs)(a,{width:`wide`,children:[(0,O.jsx)(s,{children:`Клиентская таблица`}),(0,O.jsx)(o,{children:`Поиск фильтрует строки, пагинация и rows-per-page меняют страницу, сегмент переключает вид в карточки.`}),(0,O.jsx)(i,{align:`start`,children:(0,O.jsx)(T,{})})]}),(0,O.jsxs)(a,{width:`wide`,children:[(0,O.jsx)(s,{children:`Настройки колонок`}),(0,O.jsx)(o,{children:`Меню тулбара: показать скрытую колонку (DefaultFalse), проверить Hidden как disabled в списке.`}),(0,O.jsx)(i,{align:`start`,children:(0,O.jsx)(E,{})})]})]}),play:async({args:e,canvasElement:t,step:n})=>{let r=N(t),i=N(t.ownerDocument.body),a=r.getByTestId(S.table.root),o=r.getByTestId(I),s=r.getByTestId(L);await n(`select: click tree node toggles selection`,async()=>{let e=N(a).getAllByTestId(F.tree.node)[0];await j.click(e),k(H).toHaveBeenCalled()}),await n(`sort: click a sortable header toggles sort indicator`,async()=>{let e=N(a).getAllByTestId(F.headerCell).find(e=>e.dataset.sortable===`true`);k(e).toBeTruthy(),await j.click(e),k(V).toHaveBeenCalled()}),await n(`expand: click tree chevron expands a parent row`,async()=>{let e=N(a).getAllByTestId(F.tree.chevron)[0];await j.click(e);let t=N(a).getAllByTestId(F.bodyRow);k(t.length).toBeGreaterThan(y.length)}),await n(`row actions: droplist option click triggers the action callback`,async()=>{let e=N(a).getAllByTestId(F.rowActions.droplistTrigger)[0];await j.click(e);let t=await M(()=>i.getByTestId(F.rowActions.droplist)),n=N(t).getAllByTestId(R)[0];await j.click(n),await M(()=>k(U).toHaveBeenCalledTimes(1))}),await n(`row click: click on a regular body cell calls onRowClick`,async()=>{let t=N(a).getAllByTestId(F.bodyRow)[0],n=N(t).getAllByTestId(F.bodyCell)[1];await j.click(n),k(e.onRowClick).toHaveBeenCalledTimes(1)});let c=N(o).getByTestId(S.toolbar.search),l=N(c).getByTestId(S.toolbar.searchInput);await n(`search: typed query filters rows to a single match`,async()=>{await j.type(l,`Борис`),await M(()=>{k(N(o).getAllByTestId(F.bodyRow)).toHaveLength(1)})}),await n(`search: no-match query empties rows (noResults), clear restores the page`,async()=>{await j.clear(l),await j.type(l,`нет-такой-строки`),await M(()=>{k(N(o).queryAllByTestId(F.bodyRow)).toHaveLength(0)}),await j.clear(l),await M(()=>{k(N(o).getAllByTestId(F.bodyRow)).toHaveLength(5)})}),await n(`paginate: page 2 click shows the next slice of rows`,async()=>{await j.click(N(o).getByTestId(u(2))),await M(()=>{let e=N(o).getAllByTestId(F.bodyRow);k(e[0].getAttribute(`data-row-id`)).toBe(x[5].id)}),await j.click(N(o).getByTestId(u(1))),await M(()=>{let e=N(o).getAllByTestId(F.bodyRow);k(e[0].getAttribute(`data-row-id`)).toBe(x[0].id)})}),await n(`rows-per-page: choosing 10 in ChipChoice grows the page`,async()=>{await j.click(N(o).getByTestId(d.value));let e=await M(()=>i.getByTestId(d.droplist)),t=N(e).getAllByTestId(R).find(e=>e.textContent?.trim()===`10`);k(t).toBeTruthy(),await j.click(t),await M(()=>{k(N(o).getAllByTestId(F.bodyRow)).toHaveLength(10)})}),await n(`view: cards segment click switches the table to card grid`,async()=>{let e=N(o).getByTestId(S.toolbar.dataView);await j.click(N(e).getByTestId(S.toolbar.dataViewCardsSegment)),await M(()=>{k(N(o).getAllByTestId(F.card)).toHaveLength(10),k(N(o).queryAllByTestId(F.bodyRow)).toHaveLength(0)})}),await n(`export: click export trigger calls onExport callback`,async()=>{let e=N(o).getByTestId(F.export.trigger);await j.click(e),k(W).toHaveBeenCalledTimes(1)}),await n(`column settings: меню настроек колонок открывается`,async()=>{await j.click(N(s).getByTestId(F.columnSettings.trigger)),await M(()=>k(i.getByTestId(F.columnSettings.droplist)).toBeVisible())}),await n(`column settings: включение колонки «Роль» добавляет header-cell`,async()=>{let e=N(s).getAllByTestId(F.headerCell).length;await j.click(i.getByTestId(z(`role`))),await M(()=>{k(N(s).getAllByTestId(F.headerCell)).toHaveLength(e+1)})}),await n(`column settings: колонка с mode=hidden в меню disabled`,async()=>{let e=i.getByTestId(z(`amount`));await k(e).toBeVisible(),await k(e.parentElement).toHaveAttribute(`data-disabled`),await k(i.getByTestId(z(`email`))).toBeVisible()})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <>
      <DemoPanel width='wide'>
        <DemoTitle>Tree-таблица</DemoTitle>
        <DemoHint>Выбор строки, сортировка по заголовку, раскрытие tree-строки, row actions и клик по строке.</DemoHint>
        <DemoActions align='start'>
          <InteractiveTreeTable onRowClick={args.onRowClick} />
        </DemoActions>
      </DemoPanel>
      <DemoPanel width='wide'>
        <DemoTitle>Клиентская таблица</DemoTitle>
        <DemoHint>
          Поиск фильтрует строки, пагинация и rows-per-page меняют страницу, сегмент переключает вид в карточки.
        </DemoHint>
        <DemoActions align='start'>
          <ClientTable />
        </DemoActions>
      </DemoPanel>
      <DemoPanel width='wide'>
        <DemoTitle>Настройки колонок</DemoTitle>
        <DemoHint>
          Меню тулбара: показать скрытую колонку (DefaultFalse), проверить Hidden как disabled в списке.
        </DemoHint>
        <DemoActions align='start'>
          <ColumnsSettingsTable />
        </DemoActions>
      </DemoPanel>
    </>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    // портальный контент (droplist'ы) монтируется в document.body, вне canvasElement
    const body = within(canvasElement.ownerDocument.body);
    const treeRoot = canvas.getByTestId(TEST_IDS.table.root);
    const clientRoot = canvas.getByTestId(CLIENT_TABLE_TEST_ID);
    const columnsSettingsRoot = canvas.getByTestId(COLUMNS_SETTINGS_TABLE_TEST_ID);
    await step('select: click tree node toggles selection', async () => {
      // Хендлер выбора висит на контейнере tree-ноды (TEST_IDS.tree.node),
      // а не на самом чекбоксе — кликаем по узлу с обработчиком.
      const treeNode = within(treeRoot).getAllByTestId(COMPONENT_TEST_IDS.tree.node)[0];
      await userEvent.click(treeNode);
      expect(onSelectionChange).toHaveBeenCalled();
    });
    await step('sort: click a sortable header toggles sort indicator', async () => {
      const headerCells = within(treeRoot).getAllByTestId(COMPONENT_TEST_IDS.headerCell);
      const sortableHeader = headerCells.find(cell => cell.dataset.sortable === 'true');
      expect(sortableHeader).toBeTruthy();
      await userEvent.click(sortableHeader as HTMLElement);
      expect(onSortingChange).toHaveBeenCalled();
    });
    await step('expand: click tree chevron expands a parent row', async () => {
      const chevron = within(treeRoot).getAllByTestId(COMPONENT_TEST_IDS.tree.chevron)[0];
      await userEvent.click(chevron);
      const rows = within(treeRoot).getAllByTestId(COMPONENT_TEST_IDS.bodyRow);
      // после раскрытия родителя в таблице появляются дочерние строки
      expect(rows.length).toBeGreaterThan(TREE_USERS.length);
    });
    await step('row actions: droplist option click triggers the action callback', async () => {
      const trigger = within(treeRoot).getAllByTestId(COMPONENT_TEST_IDS.rowActions.droplistTrigger)[0];
      await userEvent.click(trigger);

      // контент droplist'а портален — ищем по canvas, не внутри строки
      const droplist = await waitFor(() => body.getByTestId(COMPONENT_TEST_IDS.rowActions.droplist));
      const option = within(droplist).getAllByTestId(LIST_OPTION_TEST_ID)[0];
      await userEvent.click(option);
      await waitFor(() => expect(onRowAction).toHaveBeenCalledTimes(1));
    });
    await step('row click: click on a regular body cell calls onRowClick', async () => {
      // tree-нода и rowActions гасят всплытие (stopPropagation) — кликаем
      // по обычной текстовой ячейке, событие доходит до обработчика строки.
      const firstRow = within(treeRoot).getAllByTestId(COMPONENT_TEST_IDS.bodyRow)[0];
      const plainCell = within(firstRow).getAllByTestId(COMPONENT_TEST_IDS.bodyCell)[1];
      await userEvent.click(plainCell);
      expect(args.onRowClick).toHaveBeenCalledTimes(1);
    });
    const searchRoot = within(clientRoot).getByTestId(TEST_IDS.toolbar.search);
    const searchInput = within(searchRoot).getByTestId(TEST_IDS.toolbar.searchInput);
    await step('search: typed query filters rows to a single match', async () => {
      // «Борис» матчит ровно одну строку; «Анна» не годится — substring-поиск
      // по всем колонкам зацепил бы и «Жанну Волкову»
      await userEvent.type(searchInput, 'Борис');
      await waitFor(() => {
        expect(within(clientRoot).getAllByTestId(COMPONENT_TEST_IDS.bodyRow)).toHaveLength(1);
      });
    });
    await step('search: no-match query empties rows (noResults), clear restores the page', async () => {
      await userEvent.clear(searchInput);
      await userEvent.type(searchInput, 'нет-такой-строки');
      // у noResults-экрана (InfoBlock) нет публичного test-id — EmptyStateProps
      // не принимает data-test-id, поэтому ассертим через исчезновение строк.
      await waitFor(() => {
        expect(within(clientRoot).queryAllByTestId(COMPONENT_TEST_IDS.bodyRow)).toHaveLength(0);
      });
      await userEvent.clear(searchInput);
      await waitFor(() => {
        expect(within(clientRoot).getAllByTestId(COMPONENT_TEST_IDS.bodyRow)).toHaveLength(5);
      });
    });
    await step('paginate: page 2 click shows the next slice of rows', async () => {
      await userEvent.click(within(clientRoot).getByTestId(getPageNumberTestId(2)));
      await waitFor(() => {
        const rows = within(clientRoot).getAllByTestId(COMPONENT_TEST_IDS.bodyRow);
        expect(rows[0].getAttribute('data-row-id')).toBe(SAMPLE_USERS[5].id);
      });

      // возвращаемся на первую страницу — следующие шаги рассчитаны на page 1
      await userEvent.click(within(clientRoot).getByTestId(getPageNumberTestId(1)));
      await waitFor(() => {
        const rows = within(clientRoot).getAllByTestId(COMPONENT_TEST_IDS.bodyRow);
        expect(rows[0].getAttribute('data-row-id')).toBe(SAMPLE_USERS[0].id);
      });
    });
    await step('rows-per-page: choosing 10 in ChipChoice grows the page', async () => {
      await userEvent.click(within(clientRoot).getByTestId(CHIP_CHOICE_TEST_IDS.value));
      const droplist = await waitFor(() => body.getByTestId(CHIP_CHOICE_TEST_IDS.droplist));
      const option10 = within(droplist).getAllByTestId(LIST_OPTION_TEST_ID).find(option => option.textContent?.trim() === '10');
      expect(option10).toBeTruthy();
      await userEvent.click(option10 as HTMLElement);
      await waitFor(() => {
        expect(within(clientRoot).getAllByTestId(COMPONENT_TEST_IDS.bodyRow)).toHaveLength(10);
      });
    });
    await step('view: cards segment click switches the table to card grid', async () => {
      const dataView = within(clientRoot).getByTestId(TEST_IDS.toolbar.dataView);
      await userEvent.click(within(dataView).getByTestId(TEST_IDS.toolbar.dataViewCardsSegment));
      await waitFor(() => {
        expect(within(clientRoot).getAllByTestId(COMPONENT_TEST_IDS.card)).toHaveLength(10);
        expect(within(clientRoot).queryAllByTestId(COMPONENT_TEST_IDS.bodyRow)).toHaveLength(0);
      });
    });
    await step('export: click export trigger calls onExport callback', async () => {
      const exportTrigger = within(clientRoot).getByTestId(COMPONENT_TEST_IDS.export.trigger);
      await userEvent.click(exportTrigger);
      expect(onExport).toHaveBeenCalledTimes(1);
    });
    await step('column settings: меню настроек колонок открывается', async () => {
      await userEvent.click(within(columnsSettingsRoot).getByTestId(COMPONENT_TEST_IDS.columnSettings.trigger));
      await waitFor(() => expect(body.getByTestId(COMPONENT_TEST_IDS.columnSettings.droplist)).toBeVisible());
    });
    await step('column settings: включение колонки «Роль» добавляет header-cell', async () => {
      // role → DefaultFalse: изначально скрыта
      const headerCellsBefore = within(columnsSettingsRoot).getAllByTestId(COMPONENT_TEST_IDS.headerCell).length;
      await userEvent.click(body.getByTestId(settingsItemTestId('role')));
      await waitFor(() => {
        expect(within(columnsSettingsRoot).getAllByTestId(COMPONENT_TEST_IDS.headerCell)).toHaveLength(headerCellsBefore + 1);
      });
    });
    await step('column settings: колонка с mode=hidden в меню disabled', async () => {
      // amount → Hidden: всегда отрисована, в меню есть, \`Switch\` disabled
      const amountItem = body.getByTestId(settingsItemTestId('amount'));
      await expect(amountItem).toBeVisible();
      // \`data-disabled\` на обёртке BaseItem, test-id — на внутреннем \`li\`.
      await expect(amountItem.parentElement).toHaveAttribute('data-disabled');
      await expect(body.getByTestId(settingsItemTestId('email'))).toBeVisible();
    });
  }
}`,...q.parameters?.docs?.source}}},J=[`Interaction`]}))();export{q as Interaction,J as __namedExportsOrder,P as default};
//# sourceMappingURL=Table.Interaction.stories-DZT84Mfk.js.map