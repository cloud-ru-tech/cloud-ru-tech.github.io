import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{d as i,f as a,g as o,p as s,t as c}from"./iframe-CH0ThVYh.js";import{a as l,t as u}from"./src-79bAUjxg2.js";import{O as d,S as f,a as p,o as m,r as h,s as g}from"./fixtures-DWZx4NC0.js";import{E as _,t as v}from"./src-y-fjgLhR2.js";import{n as y,t as b}from"./testIds-5yIUSd0Y.js";function x(e){let{valueTextAndSkill:t,skills:n}=m(),[r,i]=(0,S.useState)(t),[a,o]=(0,S.useState)(!1);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(f,{...e,value:r,skills:n,disabled:a,onChange:t=>{i(t),e.onChange?.(t)},footerLeftActions:(0,C.jsx)(h,{onPlusSelect:A,modelSearchable:!0})}),(0,C.jsx)(l,{label:`Toggle disabled`,"data-test-id":k,onClick:()=>o(e=>!e)})]})}var S,C,w,T,E,D,O,k,A,j,M,N;t((()=>{g(),u(),v(),S=e(n(),1),c(),p(),y(),C=r(),{expect:w,fn:T,userEvent:E,waitFor:D,within:O}=__STORYBOOK_MODULE_TEST__,k=`ai-field-input-toggle-disabled`,A=T(),j={title:`AI/Surfaces/AiFieldInput/Tests/Interaction`,id:`ai-aifieldinput-tests-interaction`,component:f,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onSubmit:T(),onChange:T(),"data-test-id":b.root}},M={tags:[`test`,`dev`],render:e=>(0,C.jsx)(a,{children:(0,C.jsxs)(s,{width:`wide`,children:[(0,C.jsx)(o,{children:`Interaction`}),(0,C.jsx)(i,{children:`Enter отправляет, Shift+Enter переносит строку, крестик удаляет чип, «/» вставляет скилл с подсказкой параметров, Backspace удаляет чип в два нажатия, кнопки футера открывают списки, disabled выключает футер.`}),(0,C.jsx)(x,{...e})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=O(t),i=await r.findByTestId(b.editor);await n(`render: chips from value`,async()=>{await w(r.getAllByTestId(b.chip)).toHaveLength(2),await w(r.getByTestId(b.send)).toHaveAttribute(`data-state`,d.Active)}),await n(`keyboard: Shift+Enter inserts a line break`,async()=>{await E.click(i),await E.keyboard(`{Shift>}{Enter}{/Shift}вторая строка`),await D(()=>w(e.onChange).toHaveBeenCalled()),w(e.onSubmit).not.toHaveBeenCalled()}),await n(`keyboard: Enter submits the value`,async()=>{await E.keyboard(`{Enter}`),w(e.onSubmit).toHaveBeenCalledTimes(1)}),await n(`chip: remove button deletes the chip`,async()=>{let[e]=r.getAllByTestId(b.chipRemove);await E.pointer({keys:`[MouseLeft>]`,target:e}),await D(()=>w(r.getAllByTestId(b.chip)).toHaveLength(1))}),await n(`menu: Plus opens the list and reports the selected item`,async()=>{A.mockClear();let e=r.getByTestId(b.plus);await E.click(e),await w(e).toHaveAttribute(`data-pressed`,`true`);let[t]=await O(document.body).findAllByTestId(b.menuItem);await E.click(t),w(A).toHaveBeenCalledWith(`files`),await D(()=>w(e).not.toHaveAttribute(`data-pressed`))}),await n(`menu: Model search filters the list, selection updates the label`,async()=>{let e=r.getByTestId(b.model),t=O(document.body);await E.click(e);let n=(await t.findByTestId(_.searchItem)).querySelector(`input`);if(!n)throw Error(`Droplist search input not found`);await E.type(n,`Lite`),await D(()=>w(t.getAllByTestId(b.menuItem)).toHaveLength(2)),await E.click(t.getAllByTestId(b.menuItem)[1]),await D(()=>w(e).toHaveTextContent(`GigaChat Lite`))}),await n(`keyboard: Enter opens the Effort list, Escape closes it`,async()=>{let e=r.getByTestId(b.effort);e.focus(),await E.keyboard(`{Enter}`),await w(await O(document.body).findByTestId(b.menu)).toBeVisible(),await E.keyboard(`{Escape}`),await D(()=>w(O(document.body).queryByTestId(b.menu)).toBeNull()),await w(e).not.toHaveAttribute(`data-pressed`)}),await n(`skill: params hint after the chip disappears on typing`,async()=>{i.focus();let e=i.ownerDocument.getSelection();e?.selectAllChildren(i),e?.collapseToEnd(),await E.keyboard(` /tr`),await w(await r.findByTestId(b.actionList)).toBeVisible(),await E.keyboard(`{Enter}`),await w(await r.findByTestId(b.chipHint)).toBeVisible(),await E.keyboard(`en`),await D(()=>w(r.queryByTestId(b.chipHint)).toBeNull()),await E.keyboard(`{Backspace}{Backspace}`),await w(await r.findByTestId(b.chipHint)).toBeVisible()}),await n(`keyboard: Backspace selects the chip first, then deletes it`,async()=>{let e=r.getAllByTestId(b.chip).length;await E.keyboard(`{Backspace}`),await D(()=>w(r.getAllByTestId(b.chip).at(-1)).toHaveAttribute(`data-pressed`,`true`)),await w(r.getAllByTestId(b.chip)).toHaveLength(e),await E.keyboard(`{Backspace}`),await D(()=>w(r.getAllByTestId(b.chip)).toHaveLength(e-1))}),await n(`search: slash before a word opens the list without the search hint`,async()=>{await E.keyboard(` word{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}/`),await w(await r.findByTestId(b.actionList)).toBeVisible(),await w(r.queryByTestId(b.searchHint)).toBeNull(),await E.keyboard(`{Escape}`),await D(()=>w(r.queryByTestId(b.actionList)).toBeNull())}),await n(`search: slash glued to a word does not open the list`,async()=>{await E.keyboard(`{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight} x/`),await w(r.queryByTestId(b.actionList)).toBeNull()}),await n(`disabled: footer buttons follow the field`,async()=>{await E.click(r.getByTestId(k)),await w(r.getByTestId(b.plus)).toBeDisabled(),await w(r.getByTestId(b.send)).toBeDisabled()})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Interaction</DemoTitle>
        <DemoHint>
          Enter отправляет, Shift+Enter переносит строку, крестик удаляет чип, «/» вставляет скилл с подсказкой
          параметров, Backspace удаляет чип в два нажатия, кнопки футера открывают списки, disabled выключает футер.
        </DemoHint>
        <Controlled {...args} />
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const editor = await canvas.findByTestId(TEST_IDS.editor);
    await step('render: chips from value', async () => {
      await expect(canvas.getAllByTestId(TEST_IDS.chip)).toHaveLength(2);
      await expect(canvas.getByTestId(TEST_IDS.send)).toHaveAttribute('data-state', SEND_STATE.Active);
    });
    await step('keyboard: Shift+Enter inserts a line break', async () => {
      await userEvent.click(editor);
      await userEvent.keyboard('{Shift>}{Enter}{/Shift}вторая строка');
      await waitFor(() => expect(args.onChange).toHaveBeenCalled());
      expect(args.onSubmit).not.toHaveBeenCalled();
    });
    await step('keyboard: Enter submits the value', async () => {
      await userEvent.keyboard('{Enter}');
      expect(args.onSubmit).toHaveBeenCalledTimes(1);
    });
    await step('chip: remove button deletes the chip', async () => {
      const [firstRemove] = canvas.getAllByTestId(TEST_IDS.chipRemove);
      await userEvent.pointer({
        keys: '[MouseLeft>]',
        target: firstRemove
      });
      await waitFor(() => expect(canvas.getAllByTestId(TEST_IDS.chip)).toHaveLength(1));
    });
    await step('menu: Plus opens the list and reports the selected item', async () => {
      handlePlusSelect.mockClear();
      const plus = canvas.getByTestId(TEST_IDS.plus);
      await userEvent.click(plus);
      await expect(plus).toHaveAttribute('data-pressed', 'true');
      const [firstItem] = await within(document.body).findAllByTestId(TEST_IDS.menuItem);
      await userEvent.click(firstItem);
      expect(handlePlusSelect).toHaveBeenCalledWith('files');
      await waitFor(() => expect(plus).not.toHaveAttribute('data-pressed'));
    });
    await step('menu: Model search filters the list, selection updates the label', async () => {
      const model = canvas.getByTestId(TEST_IDS.model);
      const body = within(document.body);
      await userEvent.click(model);
      const searchItem = await body.findByTestId(LIST_TEST_IDS.searchItem);
      // У поля поиска Droplist нет своего data-test-id, а клик по обёртке не переводит фокус в input.
      const searchInput = searchItem.querySelector('input');
      if (!searchInput) throw new Error('Droplist search input not found');
      await userEvent.type(searchInput, 'Lite');
      await waitFor(() => expect(body.getAllByTestId(TEST_IDS.menuItem)).toHaveLength(2));
      await userEvent.click(body.getAllByTestId(TEST_IDS.menuItem)[1]);
      await waitFor(() => expect(model).toHaveTextContent('GigaChat Lite'));
    });
    await step('keyboard: Enter opens the Effort list, Escape closes it', async () => {
      const effort = canvas.getByTestId(TEST_IDS.effort);
      effort.focus();
      await userEvent.keyboard('{Enter}');
      await expect(await within(document.body).findByTestId(TEST_IDS.menu)).toBeVisible();
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(within(document.body).queryByTestId(TEST_IDS.menu)).toBeNull());
      await expect(effort).not.toHaveAttribute('data-pressed');
    });
    await step('skill: params hint after the chip disappears on typing', async () => {
      // Каретка в конец поля: без этого клик ставит её в произвольную точку текста.
      editor.focus();
      const selection = editor.ownerDocument.getSelection();
      selection?.selectAllChildren(editor);
      selection?.collapseToEnd();
      await userEvent.keyboard(' /tr');
      await expect(await canvas.findByTestId(TEST_IDS.actionList)).toBeVisible();
      await userEvent.keyboard('{Enter}');
      await expect(await canvas.findByTestId(TEST_IDS.chipHint)).toBeVisible();
      await userEvent.keyboard('en');
      await waitFor(() => expect(canvas.queryByTestId(TEST_IDS.chipHint)).toBeNull());
      await userEvent.keyboard('{Backspace}{Backspace}');
      await expect(await canvas.findByTestId(TEST_IDS.chipHint)).toBeVisible();
    });
    await step('keyboard: Backspace selects the chip first, then deletes it', async () => {
      const chipsBefore = canvas.getAllByTestId(TEST_IDS.chip).length;
      await userEvent.keyboard('{Backspace}');
      await waitFor(() => expect(canvas.getAllByTestId(TEST_IDS.chip).at(-1)).toHaveAttribute('data-pressed', 'true'));
      await expect(canvas.getAllByTestId(TEST_IDS.chip)).toHaveLength(chipsBefore);
      await userEvent.keyboard('{Backspace}');
      await waitFor(() => expect(canvas.getAllByTestId(TEST_IDS.chip)).toHaveLength(chipsBefore - 1));
    });
    await step('search: slash before a word opens the list without the search hint', async () => {
      await userEvent.keyboard(' word{ArrowLeft}{ArrowLeft}{ArrowLeft}{ArrowLeft}/');
      await expect(await canvas.findByTestId(TEST_IDS.actionList)).toBeVisible();
      await expect(canvas.queryByTestId(TEST_IDS.searchHint)).toBeNull();
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(canvas.queryByTestId(TEST_IDS.actionList)).toBeNull());
    });
    await step('search: slash glued to a word does not open the list', async () => {
      // После Escape каретка стоит за «/»: четыре шага вправо — в конец слова. End в contenteditable тестовая среда не поддерживает.
      await userEvent.keyboard('{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight} x/');
      await expect(canvas.queryByTestId(TEST_IDS.actionList)).toBeNull();
    });
    await step('disabled: footer buttons follow the field', async () => {
      await userEvent.click(canvas.getByTestId(TOGGLE_TEST_ID));
      await expect(canvas.getByTestId(TEST_IDS.plus)).toBeDisabled();
      await expect(canvas.getByTestId(TEST_IDS.send)).toBeDisabled();
    });
  }
}`,...M.parameters?.docs?.source}}},N=[`InteractionTest`]}))();export{M as InteractionTest,N as __namedExportsOrder,j as default};
//# sourceMappingURL=AiFieldInput.InteractionTest.stories-CmxfbuAo.js.map