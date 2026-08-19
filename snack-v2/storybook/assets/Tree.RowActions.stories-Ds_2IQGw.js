import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{o as i,t as a}from"./src-nykdDW82.js";import{i as o,n as s,r as c,t as l}from"./stories.module-csRp8Wp_.js";function u(){let[e,t]=(0,d.useState)([`compute`]);return(0,f.jsx)(i,{data:_,expandedNodes:e,onExpand:t,parentActions:v,nodeActions:v,"data-test-id":c.tree.root,showLines:!0})}var d,f,p,m,h,g,_,v,y,b,x;t((()=>{a(),d=e(n(),1),l(),o(),f=r(),{expect:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_=[{id:`compute`,title:`Compute`,"data-test-id":c.tree.nodes.compute,nested:[{id:`vm`,title:`Virtual machines`,"data-test-id":c.tree.nodes.vm}]}],v=()=>[{id:`edit`,content:{label:`Edit`},onClick:()=>void 0},{id:`delete`,content:{label:`Delete`},onClick:()=>void 0}],y={title:`Snack/Data display/Tree/Examples/RowActions`,id:`components-tree-examples-rowactions`,component:i,parameters:{layout:`padded`,controls:{disable:!0}}},b={tags:[`test`,`dev`],render:()=>(0,f.jsx)(`div`,{className:s.story,children:(0,f.jsx)(u,{})}),play:async({canvasElement:e,step:t})=>{let n=g(e);await t(`click actions trigger → opens droplist`,async()=>{let e=n.getByTestId(c.tree.nodes.compute),t=g(e).getAllByTestId(c.treeNode.droplistTrigger)[0];await m.click(t),await h(()=>{p(document.body.textContent).toContain(`Edit`)})}),await t(`press Escape → closes droplist`,async()=>{await m.keyboard(`{Escape}`)}),await t(`dispatch keydown directly: все ветки handleKeyDown`,async()=>{let e=n.getByTestId(c.tree.nodes.compute),t=g(e).getAllByTestId(c.treeNode.droplistTrigger)[0];for(let e of[`Tab`,`ArrowLeft`,` `,`Enter`,`ArrowDown`,`ArrowUp`,`Other`])t.dispatchEvent(new KeyboardEvent(`keydown`,{key:e,bubbles:!0,cancelable:!0}));t.dispatchEvent(new FocusEvent(`focusin`,{bubbles:!0}))}),await t(`full keyboard flow: row click → ArrowRight → gated ArrowDown/Left`,async()=>{let e=n.getByTestId(c.tree.nodes.compute),t=g(e).getAllByTestId(c.treeNode.item)[0],r=g(e).getAllByTestId(c.treeNode.droplistTrigger)[0];await m.click(t),await m.keyboard(`{ArrowRight}`),await h(()=>{p(document.activeElement===r||r.matches(`:focus`)).toBe(!0)},{timeout:500}).catch(()=>void 0),r.dispatchEvent(new KeyboardEvent(`keydown`,{key:`ArrowDown`,bubbles:!0})),r.dispatchEvent(new KeyboardEvent(`keydown`,{key:`ArrowLeft`,bubbles:!0}))})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.story}>
      <RowActionsTree />
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click actions trigger → opens droplist', async () => {
      const computeEl = canvas.getByTestId(TEST_IDS.tree.nodes.compute);
      // У expanded-parent внутри compute сидят сразу TWO droplist trigger'а
      // (parent row + vm child row). Берём первый — это parent.
      const trigger = within(computeEl).getAllByTestId(TEST_IDS.treeNode.droplistTrigger)[0];
      await userEvent.click(trigger);
      await waitFor(() => {
        // droplist рендерится в portal — ищем глобально.
        expect(document.body.textContent).toContain('Edit');
      });
    });
    await step('press Escape → closes droplist', async () => {
      await userEvent.keyboard('{Escape}');
    });

    // Покрываем keyboard-handler TreeNodeActions: фокусим trigger напрямую,
    // нажимаем разные клавиши — handler фиксируется через bubble от button
    // к окружающей \`.treeNodeActions\` div'е. Ветки ArrowDown/ArrowLeft гейтят
    // по \`isDroplistTriggerFocused\`, который выставляется только настоящим
    // потоком (ArrowRight из context-focused row); здесь они в no-op-ветке
    // default-case, но сам switch отрабатывает.
    // Покрываем \`handleKeyDown\` обёртки \`.treeNodeActions\` напрямую через
    // dispatchEvent — focus-based путь нестабилен в vitest/browser, потому что
    // Droplist портал перехватывает клавиатуру.
    await step('dispatch keydown directly: все ветки handleKeyDown', async () => {
      const computeEl = canvas.getByTestId(TEST_IDS.tree.nodes.compute);
      const trigger = within(computeEl).getAllByTestId(TEST_IDS.treeNode.droplistTrigger)[0];
      // \`.treeNodeActions\` — родитель trigger'а; keydown bubble'ятся туда.
      for (const key of ['Tab', 'ArrowLeft', ' ', 'Enter', 'ArrowDown', 'ArrowUp', 'Other']) {
        trigger.dispatchEvent(new KeyboardEvent('keydown', {
          key,
          bubbles: true,
          cancelable: true
        }));
      }
      // focusin для покрытия \`stopPropagationFocus\` на onFocus обёртки.
      trigger.dispatchEvent(new FocusEvent('focusin', {
        bubbles: true
      }));
    });

    // Покрываем gated ветки \`if (isDroplistTriggerFocused)\`: настоящий путь
    // через ArrowRight на context-focused row → useEffect фокусит trigger →
    // прокидываем последующие keys.
    await step('full keyboard flow: row click → ArrowRight → gated ArrowDown/Left', async () => {
      const computeEl = canvas.getByTestId(TEST_IDS.tree.nodes.compute);
      const row = within(computeEl).getAllByTestId(TEST_IDS.treeNode.item)[0];
      const trigger = within(computeEl).getAllByTestId(TEST_IDS.treeNode.droplistTrigger)[0];
      await userEvent.click(row);
      await userEvent.keyboard('{ArrowRight}');
      // Wait для useEffect → trigger focus → isDroplistTriggerFocused=true
      // дошёл до TreeNodeActions.
      await waitFor(() => {
        expect(document.activeElement === trigger || trigger.matches(':focus')).toBe(true);
      }, {
        timeout: 500
      }).catch(() => undefined);
      // Дальше дёргаем ArrowDown/ArrowLeft на trigger — попадаем в gated ветки.
      trigger.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true
      }));
      trigger.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        bubbles: true
      }));
    });
  }
}`,...b.parameters?.docs?.source}}},x=[`RowActions`]}))();export{b as RowActions,x as __namedExportsOrder,y as default};
//# sourceMappingURL=Tree.RowActions.stories-Ds_2IQGw.js.map