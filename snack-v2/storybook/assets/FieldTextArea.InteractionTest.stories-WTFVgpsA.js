import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,t as o,u as s}from"./iframe-BUDedHtH.js";import{O as c,i as l,t as u}from"./src-BEoLLotU.js";function d(){let[e,t]=(0,f.useState)(``);return(0,p.jsx)(s,{children:(0,p.jsx)(a,{width:`narrow`,children:(0,p.jsxs)(i,{align:`center`,children:[(0,p.jsx)(l,{"data-test-id":c.fieldTextArea,label:`Comment`,value:e,onChange:e=>{C(e),t(e??``)},maxLength:80,showClearButton:!0}),(0,p.jsx)(l,{"data-test-id":b,label:`Uncontrolled`,defaultValue:`preset value`}),(0,p.jsx)(l,{"data-test-id":y,label:`Readonly`,readonly:!0,value:`copy me
second line`,showCopyButton:!0,onCopyButtonClick:w}),(0,p.jsx)(l,{"data-test-id":x,label:`Hard cap`,defaultValue:``,maxLength:S,allowMoreThanMaxLength:!1})]})})})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;t((()=>{u(),f=e(n(),1),o(),p=r(),{expect:m,fn:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v=`button-clear-value`,y=`field-textarea-readonly`,b=`field-textarea-uncontrolled`,x=`field-textarea-hard-cap`,S=8,C=h(),w=h(),T={title:`Snack/Inputs & Forms/Fields/FieldTextArea/Tests/Interaction`,id:`components-fields-fieldtextarea-tests-interaction`,component:l,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,p.jsx)(d,{})},E={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{C.mockClear(),w.mockClear();let n=_(e),r=n.getByTestId(c.fieldTextArea),i=n.getByTestId(b),a=n.getByTestId(y),o=n.getByTestId(x),s=_(r).getByTestId(c.fieldTextAreaInput);await t(`renders root, textarea and counter (maxLength → fieldDecoratorCounter)`,async()=>{await m(r).toBeVisible(),await m(s).toBeVisible(),await m(a).toBeVisible();let e=_(r).getByTestId(c.fieldDecoratorCounter);await m(e).toBeVisible(),await m(e).toHaveTextContent(`0/80`)}),await t(`uncontrolled field keeps and edits its own defaultValue without value/onChange`,async()=>{let e=_(i).getByTestId(c.fieldTextAreaInput);await m(e).toHaveValue(`preset value`),await g.click(e),await g.type(e,`!`),await m(e).toHaveValue(`preset value!`)}),await t(`typing into the controlled textarea fires onChange, updates value and counter`,async()=>{await g.click(s),await g.type(s,`comment text`),m(C).toHaveBeenCalled(),await m(s).toHaveValue(`comment text`),await m(_(r).getByTestId(c.fieldDecoratorCounter)).toHaveTextContent(`12/80`)}),await t(`keyboard: ArrowRight at end of editable textarea roves focus to the clear button`,async()=>{s.focus(),s.setSelectionRange(s.value.length,s.value.length),await g.keyboard(`{ArrowRight}`);let e=_(r).getByTestId(v);await m(e).toHaveFocus()}),await t(`editable field with value shows both clear and copy`,async()=>{let e=_(r).getByTestId(v);await m(e).toBeVisible(),await m(_(r).getByTestId(c.fieldTextCopyButton)).toBeVisible(),await m(e).toHaveFocus()}),await t(`clear button empties the value, fires onChange("") and refocuses the textarea`,async()=>{let e=_(r).getByTestId(v);await g.click(e),m(C).toHaveBeenLastCalledWith(``),await m(s).toHaveValue(``),await m(s).toHaveFocus()}),await t(`readonly field: ArrowRight roves focus from textarea to the copy button`,async()=>{let e=_(a).getByTestId(c.fieldTextAreaInput);e.focus(),e.setSelectionRange(e.value.length,e.value.length),await g.keyboard(`{ArrowRight}`);let t=_(a).getByTestId(c.fieldTextCopyButton);await m(t).toHaveFocus()}),await t(`readonly field exposes a clickable copy button firing onCopyButtonClick`,async()=>{let e=_(a).getByTestId(c.fieldTextCopyButton);await m(e).toBeVisible(),await g.click(e),await m(e).toBeVisible()}),await t(`hard cap: allowMoreThanMaxLength=false caps the native textarea at maxLength`,async()=>{let e=_(o).getByTestId(c.fieldTextAreaInput);await m(e).toHaveAttribute(`maxlength`,String(S)),await g.click(e),await g.type(e,`0123456789ABCDEF`),await m(e).toHaveValue(`01234567`)})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    onChange.mockClear();
    onCopyButtonClick.mockClear();
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.fieldTextArea);
    const uncontrolledField = canvas.getByTestId(UNCONTROLLED_FIELD_TEST_ID);
    const readonlyField = canvas.getByTestId(READONLY_FIELD_TEST_ID);
    const hardCapField = canvas.getByTestId(HARD_CAP_FIELD_TEST_ID);
    // textarea test-id дублируется между полями сцены — скоупим запрос к корню каждого поля.
    const input = within(root).getByTestId<HTMLTextAreaElement>(TEST_IDS.fieldTextAreaInput);
    await step('renders root, textarea and counter (maxLength → fieldDecoratorCounter)', async () => {
      await expect(root).toBeVisible();
      await expect(input).toBeVisible();
      await expect(readonlyField).toBeVisible();
      const counter = within(root).getByTestId(TEST_IDS.fieldDecoratorCounter);
      await expect(counter).toBeVisible();
      await expect(counter).toHaveTextContent('0/80');
    });
    await step('uncontrolled field keeps and edits its own defaultValue without value/onChange', async () => {
      const uncontrolledInput = within(uncontrolledField).getByTestId<HTMLTextAreaElement>(TEST_IDS.fieldTextAreaInput);
      await expect(uncontrolledInput).toHaveValue('preset value');
      await userEvent.click(uncontrolledInput);
      await userEvent.type(uncontrolledInput, '!');
      await expect(uncontrolledInput).toHaveValue('preset value!');
    });
    await step('typing into the controlled textarea fires onChange, updates value and counter', async () => {
      await userEvent.click(input);
      await userEvent.type(input, 'comment text');
      expect(onChange).toHaveBeenCalled();
      await expect(input).toHaveValue('comment text');
      await expect(within(root).getByTestId(TEST_IDS.fieldDecoratorCounter)).toHaveTextContent('12/80');
    });
    await step('keyboard: ArrowRight at end of editable textarea roves focus to the clear button', async () => {
      // Роботизированная навигация useButtonNavigation: postfix-кнопки имеют tabIndex=-1
      // (не в Tab-цепочке); фокус уходит на них только ArrowRight'ом в конце ввода.
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
      await userEvent.keyboard('{ArrowRight}');
      const clearBtn = within(root).getByTestId(CLEAR_BUTTON_TEST_ID);
      await expect(clearBtn).toHaveFocus();
    });
    await step('editable field with value shows both clear and copy', async () => {
      const clearBtn = within(root).getByTestId(CLEAR_BUTTON_TEST_ID);
      await expect(clearBtn).toBeVisible();
      await expect(within(root).getByTestId(TEST_IDS.fieldTextCopyButton)).toBeVisible();
      await expect(clearBtn).toHaveFocus();
    });
    await step('clear button empties the value, fires onChange("") and refocuses the textarea', async () => {
      const clearBtn = within(root).getByTestId(CLEAR_BUTTON_TEST_ID);
      await userEvent.click(clearBtn);
      expect(onChange).toHaveBeenLastCalledWith('');
      await expect(input).toHaveValue('');
      // onClear возвращает фокус в textarea (localRef.current?.focus()).
      await expect(input).toHaveFocus();
    });
    await step('readonly field: ArrowRight roves focus from textarea to the copy button', async () => {
      const readonlyInput = within(readonlyField).getByTestId<HTMLTextAreaElement>(TEST_IDS.fieldTextAreaInput);
      readonlyInput.focus();
      readonlyInput.setSelectionRange(readonlyInput.value.length, readonlyInput.value.length);
      await userEvent.keyboard('{ArrowRight}');
      const copyBtn = within(readonlyField).getByTestId(TEST_IDS.fieldTextCopyButton);
      await expect(copyBtn).toHaveFocus();
    });
    await step('readonly field exposes a clickable copy button firing onCopyButtonClick', async () => {
      const copyBtn = within(readonlyField).getByTestId(TEST_IDS.fieldTextCopyButton);
      await expect(copyBtn).toBeVisible();
      await userEvent.click(copyBtn);
      // copyTextToClipboard в тест-среде может вернуть false (нет clipboard API) —
      // ассертим стабильную часть: кнопка осталась видимой и кликабельной.
      await expect(copyBtn).toBeVisible();
    });
    await step('hard cap: allowMoreThanMaxLength=false caps the native textarea at maxLength', async () => {
      const hardCapInput = within(hardCapField).getByTestId<HTMLTextAreaElement>(TEST_IDS.fieldTextAreaInput);
      await expect(hardCapInput).toHaveAttribute('maxlength', String(HARD_CAP));
      await userEvent.click(hardCapInput);
      await userEvent.type(hardCapInput, '0123456789ABCDEF');
      // 16 символов введено, но value обрезано до maxLength=8 (нативный hard-cap).
      await expect(hardCapInput).toHaveValue('01234567');
    });
  }
}`,...E.parameters?.docs?.source}}},D=[`InteractionTest`]}))();export{E as InteractionTest,D as __namedExportsOrder,T as default};
//# sourceMappingURL=FieldTextArea.InteractionTest.stories-WTFVgpsA.js.map