import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,f as o,l as s,m as c,t as l,u}from"./iframe-SlIP-akt.js";import{U as d,t as f}from"./system-BjV8PRvn.js";import{c as p}from"./src-DtfX6Y0H.js";import{O as m,S as h,t as g}from"./src-Bmb4VJk4.js";import{n as _,r as v}from"./testIds-MGMwj5_a.js";function y(){let[e,t]=(0,x.useState)(``),[n,r]=(0,x.useState)(),[l,f]=(0,x.useState)(``),[m,g]=(0,x.useState)(),[v,y]=(0,x.useState)(``),[b,C]=(0,x.useState)([]);return(0,S.jsxs)(u,{children:[(0,S.jsxs)(a,{width:`narrow`,children:[(0,S.jsx)(c,{children:`elementBefore`}),(0,S.jsx)(s,{children:`Встроенный выпадающий список в слоте-кнопке слева.`}),(0,S.jsx)(i,{align:`center`,children:(0,S.jsx)(o,{width:`narrow`,children:(0,S.jsx)(h,{"data-test-id":_.fieldCombo.droplistBeforeRoot,size:p.S,label:`Label text`,required:!0,labelTooltip:{tip:`Подсказка`},caption:`Caption`,placeholder:`Placeholder`,value:e,onChange:t,showClearButton:!1,showCopyButton:!1,length:{current:e.length,max:20},elementBefore:{action:(0,S.jsx)(d,{}),"data-test-id":_.fieldCombo.droplistBeforeButton,droplist:{items:D,closeDroplistOnItemClick:!0,selection:{mode:`single`,value:n,onChange:e=>{r(e),t(`Content text 1`)}}}}})})})]}),(0,S.jsxs)(a,{width:`narrow`,children:[(0,S.jsx)(c,{children:`elementAfter`}),(0,S.jsx)(s,{children:`Встроенный выпадающий список в слоте-кнопке справа.`}),(0,S.jsx)(i,{align:`center`,children:(0,S.jsx)(o,{width:`narrow`,children:(0,S.jsx)(h,{"data-test-id":_.fieldCombo.droplistAfterRoot,size:p.S,label:`Label text`,required:!0,labelTooltip:{tip:`Подсказка`},caption:`Caption`,hint:`Hint text`,placeholder:`Placeholder`,value:l,onChange:f,showClearButton:!1,showCopyButton:!1,elementAfter:{action:(0,S.jsx)(d,{}),"data-test-id":_.fieldCombo.droplistAfterButton,droplist:{items:D,placement:`bottom-end`,closeDroplistOnItemClick:!0,selection:{mode:`single`,value:m,onChange:e=>{g(e),f(`Content text 2`)}}}}})})})]}),(0,S.jsxs)(a,{width:`narrow`,children:[(0,S.jsx)(c,{children:`elementAfter — множественный выбор`}),(0,S.jsx)(s,{children:"Слот с множественным выбором (`selection.mode = multiple`); список остаётся открытым."}),(0,S.jsx)(i,{align:`center`,children:(0,S.jsx)(o,{width:`narrow`,children:(0,S.jsx)(h,{"data-test-id":_.fieldCombo.droplistMultipleRoot,size:p.S,label:`Label text`,caption:`Caption`,placeholder:`Placeholder`,value:v,onChange:y,showClearButton:!1,showCopyButton:!1,elementAfter:{action:(0,S.jsx)(d,{}),"data-test-id":_.fieldCombo.droplistMultipleButton,droplist:{items:D,placement:`bottom-end`,closeDroplistOnItemClick:!1,selection:{mode:`multiple`,value:b,onChange:e=>{C(e.map(String)),y(`${e.length} выбрано`)}}}}})})})]})]})}function b(e){return document.querySelector(`[data-test-id="${e}"]`)}var x,S,C,w,T,E,D,O,k,A;t((()=>{g(),f(),x=e(n(),1),l(),v(),S=r(),{expect:C,userEvent:w,waitFor:T,within:E}=__STORYBOOK_MODULE_TEST__,D=[{id:`1`,content:{label:`Content text 1`},"data-test-id":`${_.fieldCombo.droplistItem}-1`},{id:`2`,content:{label:`Content text 2`},"data-test-id":`${_.fieldCombo.droplistItem}-2`},{id:`3`,content:{label:`Content text 3`},"data-test-id":`${_.fieldCombo.droplistItem}-3`}],O={title:`Snack/Inputs & Forms/Fields/FieldCombo/Examples/WithDroplist`,id:`components-fields-fieldcombo-examples-withdroplist`,component:h,parameters:{layout:`fullscreen`}},k={tags:[`dev`,`test`],render:()=>(0,S.jsx)(y,{}),play:async({canvasElement:e,step:t})=>{let n=E(e),r=n.getByTestId(_.fieldCombo.droplistBeforeRoot),i=n.getByTestId(_.fieldCombo.droplistAfterRoot),a=n.getByTestId(_.fieldCombo.droplistMultipleRoot);await t(`renders all droplist-bearing fields`,async()=>{await C(r).toBeVisible(),await C(i).toBeVisible(),await C(a).toBeVisible()}),await t(`elementBefore: click trigger opens portal → click item fills input and refocuses`,async()=>{await w.click(n.getByTestId(_.fieldCombo.droplistBeforeButton));let e=`${_.fieldCombo.droplistItem}-1`;await T(()=>C(b(e)).not.toBeNull());let t=b(e);t&&await w.click(t);let i=E(r).getByTestId(m.fieldComboInput);await T(()=>C(i.value).toBe(`Content text 1`)),await T(()=>C(i).toHaveFocus())}),await t(`elementAfter multiple: select two items, value reflects 2 selected, list stays open`,async()=>{await w.click(n.getByTestId(_.fieldCombo.droplistMultipleButton));let e=`${_.fieldCombo.droplistItem}-1`;await T(()=>C(b(e)).not.toBeNull());let t=b(e);t&&await w.click(t);let r=`${_.fieldCombo.droplistItem}-2`;await T(()=>C(b(r)).not.toBeNull());let i=b(r);i&&await w.click(i);let o=E(a).getByTestId(m.fieldComboInput);await T(()=>C(o.value).toBe(`2 выбрано`)),await C(b(e)).not.toBeNull(),await C(b(r)).not.toBeNull()})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <WithDroplistDemo />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const beforeRoot = canvas.getByTestId(STORY_TEST_IDS.fieldCombo.droplistBeforeRoot);
    const afterRoot = canvas.getByTestId(STORY_TEST_IDS.fieldCombo.droplistAfterRoot);
    const multipleRoot = canvas.getByTestId(STORY_TEST_IDS.fieldCombo.droplistMultipleRoot);
    await step('renders all droplist-bearing fields', async () => {
      await expect(beforeRoot).toBeVisible();
      await expect(afterRoot).toBeVisible();
      await expect(multipleRoot).toBeVisible();
    });
    await step('elementBefore: click trigger opens portal → click item fills input and refocuses', async () => {
      await userEvent.click(canvas.getByTestId(STORY_TEST_IDS.fieldCombo.droplistBeforeButton));
      const itemId = \`\${STORY_TEST_IDS.fieldCombo.droplistItem}-1\`;
      await waitFor(() => expect(queryDroplistItem(itemId)).not.toBeNull());
      const item = queryDroplistItem(itemId);
      if (item) {
        await userEvent.click(item);
      }
      const input = within(beforeRoot).getByTestId(TEST_IDS.fieldComboInput) as HTMLInputElement;
      await waitFor(() => expect(input.value).toBe('Content text 1'));
      // returnFocus возвращает фокус в input через setTimeout(0) — ждём явно.
      await waitFor(() => expect(input).toHaveFocus());
    });
    await step('elementAfter multiple: select two items, value reflects 2 selected, list stays open', async () => {
      // closeDroplistOnItemClick: false + selection.mode = 'multiple' — упражняет ветку
      // wrapSelection(multiple) + returnFocus, список не закрывается между кликами.
      await userEvent.click(canvas.getByTestId(STORY_TEST_IDS.fieldCombo.droplistMultipleButton));
      const firstId = \`\${STORY_TEST_IDS.fieldCombo.droplistItem}-1\`;
      await waitFor(() => expect(queryDroplistItem(firstId)).not.toBeNull());
      const firstItem = queryDroplistItem(firstId);
      if (firstItem) {
        await userEvent.click(firstItem);
      }
      // Список остаётся открытым — второй пункт по-прежнему в DOM.
      const secondId = \`\${STORY_TEST_IDS.fieldCombo.droplistItem}-2\`;
      await waitFor(() => expect(queryDroplistItem(secondId)).not.toBeNull());
      const secondItem = queryDroplistItem(secondId);
      if (secondItem) {
        await userEvent.click(secondItem);
      }
      const input = within(multipleRoot).getByTestId(TEST_IDS.fieldComboInput) as HTMLInputElement;
      await waitFor(() => expect(input.value).toBe('2 выбрано'));
      // closeDroplistOnItemClick: false → список не закрылся, оба пункта ещё в портале.
      await expect(queryDroplistItem(firstId)).not.toBeNull();
      await expect(queryDroplistItem(secondId)).not.toBeNull();
    });
  }
}`,...k.parameters?.docs?.source}}},A=[`WithDroplist`]}))();export{k as WithDroplist,A as __namedExportsOrder,O as default};
//# sourceMappingURL=FieldCombo.WithDroplist.stories-CZnHvoUm.js.map