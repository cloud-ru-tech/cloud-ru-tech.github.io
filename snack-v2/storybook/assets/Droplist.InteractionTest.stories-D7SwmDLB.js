import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BLXw10_m.js";import{a as c,t as l}from"./src-CUvFpUpw.js";import{n as u,t as d,x as f}from"./src-PAmFBZ8U.js";import{n as p,t as m}from"./testIds-DDukF6lf.js";var h,g,_,v,y,b,x,S,C,w,T;e((()=>{l(),d(),o(),p(),h=t(),{expect:g,userEvent:_,waitFor:v,within:y}=__STORYBOOK_MODULE_TEST__,b=[{id:`a`,content:{label:`Overview`}},{id:`b`,content:{label:`Analytics`}},{id:`c`,content:{label:`Billing`}}],x={title:`Snack/Data display/List/Droplist/Tests/Interaction`,id:`components-list-droplist-tests-interaction`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}},render:()=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{children:[(0,h.jsx)(a,{children:`Droplist interaction`}),(0,h.jsx)(i,{children:`Multiple-select остаётся открытым; closeDroplistOnItemClick закрывает и возвращает фокус.`}),(0,h.jsxs)(n,{align:`center`,children:[(0,h.jsx)(u,{items:b,size:`m`,placement:`bottom-start`,trigger:`click`,selection:{mode:`multiple`},children:(0,h.jsx)(c,{"data-test-id":m.droplist.triggerOpen,label:`Open (multiple)`,view:`outline`,appearance:`neutral`,size:`m`})}),(0,h.jsx)(u,{items:b,size:`m`,placement:`bottom-start`,trigger:`click`,closeDroplistOnItemClick:!0,selection:{mode:`single`},children:(0,h.jsx)(c,{"data-test-id":m.droplist.triggerCloseOnClick,label:`Open (close on click)`,view:`outline`,appearance:`neutral`,size:`m`})})]})]})})},S=()=>document.querySelectorAll(`[data-test-id^="${f.baseItem}_"]`),C=e=>`${f.baseItem}_${e}`,w={tags:[`test`,`dev`],play:async({canvasElement:e,step:t})=>{let n=y(e),r=y(document.body),i=n.getByTestId(m.droplist.triggerOpen),a=n.getByTestId(m.droplist.triggerCloseOnClick);await t(`renders both triggers`,async()=>{await g(i).toBeVisible(),await g(a).toBeVisible()}),await t(`click: trigger opens droplist with all items (portal)`,async()=>{await _.click(i),await v(()=>g(S().length).toBe(b.length))}),await t(`multiple: clicking two items checks both and keeps the droplist open`,async()=>{await _.click(r.getByTestId(C(`a`))),await _.click(r.getByTestId(C(`b`))),await v(()=>{g(r.getByTestId(C(`a`))).toHaveAttribute(`data-checked`,`true`),g(r.getByTestId(C(`b`))).toHaveAttribute(`data-checked`,`true`)}),g(S().length).toBe(b.length)}),await t(`keyboard: Escape closes the multiple droplist`,async()=>{await _.keyboard(`{Escape}`),await v(()=>g(S().length).toBe(0))}),await t(`closeDroplistOnItemClick: single-mode click closes the droplist`,async()=>{await _.click(a),await v(()=>g(S().length).toBe(b.length)),await _.click(r.getByTestId(C(`a`))),await v(()=>g(S().length).toBe(0))})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    // Портальный список монтируется в document.body — адресуем item'ы через document.
    const portal = within(document.body);
    const triggerMultiple = canvas.getByTestId(TEST_IDS.droplist.triggerOpen);
    const triggerCloseOnClick = canvas.getByTestId(TEST_IDS.droplist.triggerCloseOnClick);
    await step('renders both triggers', async () => {
      await expect(triggerMultiple).toBeVisible();
      await expect(triggerCloseOnClick).toBeVisible();
    });
    await step('click: trigger opens droplist with all items (portal)', async () => {
      await userEvent.click(triggerMultiple);
      await waitFor(() => expect(queryItems().length).toBe(items.length));
    });
    await step('multiple: clicking two items checks both and keeps the droplist open', async () => {
      await userEvent.click(portal.getByTestId(itemId('a')));
      await userEvent.click(portal.getByTestId(itemId('b')));
      await waitFor(() => {
        expect(portal.getByTestId(itemId('a'))).toHaveAttribute('data-checked', 'true');
        expect(portal.getByTestId(itemId('b'))).toHaveAttribute('data-checked', 'true');
      });
      // multiple-режим не закрывается по клику на item.
      expect(queryItems().length).toBe(items.length);
    });
    await step('keyboard: Escape closes the multiple droplist', async () => {
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(queryItems().length).toBe(0));
    });
    await step('closeDroplistOnItemClick: single-mode click closes the droplist', async () => {
      // Возврат фокуса на триггер (closeDroplist → triggerEl.focus()) ненадёжен в синтетической
      // среде storybook-test — проверяется в Playwright (Droplist/keyboard.spec).
      await userEvent.click(triggerCloseOnClick);
      await waitFor(() => expect(queryItems().length).toBe(items.length));
      await userEvent.click(portal.getByTestId(itemId('a')));
      await waitFor(() => expect(queryItems().length).toBe(0));
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`InteractionTest`]}))();export{w as InteractionTest,T as __namedExportsOrder,x as default};
//# sourceMappingURL=Droplist.InteractionTest.stories-D7SwmDLB.js.map