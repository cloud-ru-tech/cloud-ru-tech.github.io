import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{bn as i,c as a,d as o,gn as s,l as c,m as l,nt as u,t as d,u as f}from"./iframe-BiKgHgfb.js";import{h as p,t as m}from"./src-DZr_4NAw.js";import{$t as h,pn as g,t as _}from"./system-CK__Birm.js";import{c as v,n as y,t as b}from"./src-CBxzG-QO.js";import{n as x,t as S}from"./styles.module-CBAnneDZ.js";import{n as C,t as w}from"./testIds-DSfTfDJk.js";function T({onRefresh:e,onCheck:t}){let[n,r]=(0,E.useState)(``),[u,d]=(0,E.useState)(!1);return(0,D.jsx)(f,{children:(0,D.jsxs)(o,{width:`wide`,children:[(0,D.jsx)(l,{children:`InteractionTest`}),(0,D.jsx)(c,{children:`Refresh, bulk-checkbox и кнопка фильтров вызывают соответствующие колбэки.`}),(0,D.jsx)(a,{block:!0,children:(0,D.jsx)(`div`,{className:x.containerPlayground,children:(0,D.jsx)(s,{layoutType:i.Desktop,children:(0,D.jsx)(y,{"data-test-id":w.root,search:{value:n,onChange:r,placeholder:`Поиск`},onRefresh:e,filterRow:{open:u,onOpenChange:e=>{d(e),N(e)},filters:[{id:`status`,type:`single`,label:`Статус`,options:[{value:`active`,label:`Активные`},{value:`archived`,label:`Архив`}]}],defaultValue:{}},checked:!0,selectedCount:3,totalCount:100,onCheck:t,bulkActions:[{label:`Подтвердить`,icon:g,onClick:()=>void 0},{label:`Отклонить`,icon:h,onClick:()=>void 0}]})})})})]})})}var E,D,O,k,A,j,M,N,P,F,I;t((()=>{u(),_(),m(),b(),E=e(n(),1),d(),S(),C(),D=r(),{expect:O,fn:k,userEvent:A,waitFor:j,within:M}=__STORYBOOK_MODULE_TEST__,N=k(),P={title:`Snack/Actions/Toolbar/Tests/Interaction`,id:`components-toolbar-tests-interaction`,component:y,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onRefresh:k(),onCheck:k()}},F={tags:[`test`,`dev`],render:e=>(0,D.jsx)(T,{...e}),play:async({args:e,canvasElement:t,step:n})=>{let r=M(t);await n(`click: refresh button calls onRefresh`,async()=>{await A.click(r.getByTestId(v.refreshButton)),O(e.onRefresh).toHaveBeenCalledTimes(1)}),await n(`click: bulk checkbox calls onCheck`,async()=>{await A.click(r.getByTestId(`${v.checkbox}${p}`)),O(e.onCheck).toHaveBeenCalledTimes(1)}),await n(`click: filter button toggles open state`,async()=>{N.mockClear();let e=r.getByTestId(v.filterButton);await O(e).not.toHaveAttribute(`data-filter-open`),await A.click(e,{pointerEventsCheck:0}),await j(()=>{O(N).toHaveBeenCalled(),O(N.mock.calls.at(-1)?.[0]).toBe(!0)}),await O(e).toHaveAttribute(`data-filter-open`,`true`)})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <InteractionDemo {...args} />,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click: refresh button calls onRefresh', async () => {
      await userEvent.click(canvas.getByTestId(TOOLBAR_TEST_IDS.refreshButton));
      expect(args.onRefresh).toHaveBeenCalledTimes(1);
    });
    await step('click: bulk checkbox calls onCheck', async () => {
      // data-test-id чекбокса — на корневом span, а обработчик клика — на вложенном \`<input>\`
      // (см. test-environment-pitfalls): \`userEvent.click\` по корню до input не доходит, кликаем сам input.
      await userEvent.click(canvas.getByTestId(\`\${TOOLBAR_TEST_IDS.checkbox}\${NATIVE_INPUT_SUFFIX}\`));
      expect(args.onCheck).toHaveBeenCalledTimes(1);
    });
    await step('click: filter button toggles open state', async () => {
      onFilterOpenChange.mockClear();
      const filterButton = canvas.getByTestId(TOOLBAR_TEST_IDS.filterButton);
      await expect(filterButton).not.toHaveAttribute('data-filter-open');
      await userEvent.click(filterButton, {
        pointerEventsCheck: 0
      });
      await waitFor(() => {
        expect(onFilterOpenChange).toHaveBeenCalled();
        expect(onFilterOpenChange.mock.calls.at(-1)?.[0]).toBe(true);
      });
      await expect(filterButton).toHaveAttribute('data-filter-open', 'true');
    });
  }
}`,...F.parameters?.docs?.source}}},I=[`InteractionTest`]}))();export{F as InteractionTest,I as __namedExportsOrder,P as default};
//# sourceMappingURL=Toolbar.InteractionTest.stories-CfYAewTo.js.map