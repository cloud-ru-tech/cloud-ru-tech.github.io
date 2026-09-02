import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{A as i,D as a,E as o,I as s,L as c,R as l,c as u,d,k as f,l as p,m,t as h,u as g,z as _}from"./iframe-D4MTfTET.js";import{a as v,s as y,t as b,u as x}from"./src-DppNQVZr.js";import{n as S,t as C}from"./ThemedShowcase-DmC79C48.js";var w,T,E=t((()=>{w=`_stack_1kktk_4`,T={stack:w}})),D,O=t((()=>{D={rootRegion:`theme-providers-root-region`,childRegion:`theme-providers-child-region`,rootRefTarget:`theme-providers-rootref-target`,storeRegion:`theme-providers-store-region`,storeToggle:`theme-providers-store-toggle`}}));function k(e){return getComputedStyle(e).getPropertyValue(`--sn-brand-color-primary-55`).trim()}function A(){let{appearance:e}=c();return(0,P.jsx)(i,{value:{...e,brand:`brandA`,brandRole:`main`,density:`comfort`},children:(0,P.jsxs)(`div`,{className:T.stack,children:[(0,P.jsx)(C,{testId:D.rootRegion,caption:(0,P.jsxs)(P.Fragment,{children:[`Root — `,(0,P.jsx)(`code`,{children:`brandA · comfort`})]})}),(0,P.jsx)(a,{value:{brand:`brandC`,density:`spacious`},children:(0,P.jsx)(C,{testId:D.childRegion,caption:(0,P.jsxs)(P.Fragment,{children:[`Child — `,(0,P.jsx)(`code`,{children:`brandC · spacious`}),` (colorScheme наследуется)`]})})})]})})}function j(){let[e,t]=(0,N.useState)(null),n=(0,N.useMemo)(()=>({current:e}),[e]),{appearance:r}=c();return(0,P.jsx)(`div`,{ref:t,"data-test-id":D.rootRefTarget,children:(0,P.jsx)(i,{value:{...r,density:`comfort`},rootRef:n,children:(0,P.jsx)(C,{caption:(0,P.jsx)(P.Fragment,{children:"Классы `sn-*` навешены на внешний элемент (rootRef), без лишнего DOM-узла."})})})})}function M(){let[e]=(0,N.useState)(()=>{let e={appearance:{colorScheme:`light`,density:`compact`}},t=new Set;return{external:{subscribe:e=>(t.add(e),()=>{t.delete(e)}),getSnapshot:()=>e,getServerSnapshot:()=>e},toggle:()=>{e={appearance:e.appearance.colorScheme===`light`?{colorScheme:`dark`,density:`comfort`}:{colorScheme:`light`,density:`compact`}},t.forEach(e=>e())}}});return(0,P.jsx)(i,{store:e.external,children:(0,P.jsxs)(`div`,{className:T.stack,children:[(0,P.jsx)(C,{testId:D.storeRegion,caption:(0,P.jsx)(P.Fragment,{children:`Оформление из внешнего стора — смена реэмитит классы без перерендера провайдера.`})}),(0,P.jsx)(v,{label:`Переключить схему стора`,view:x.Outline,appearance:y.Neutral,"data-test-id":D.storeToggle,onClick:e.toggle})]})})}var N,P,F,I,L,R,z,B,V,H,U;t((()=>{b(),N=e(n(),1),h(),o(),f(),s(),_(),S(),E(),O(),P=r(),{expect:F,userEvent:I,waitFor:L,within:R}=__STORYBOOK_MODULE_TEST__,z={title:`Snack/Foundation & utilities/Theme/Providers`,id:`components-theme-providers`,parameters:{layout:`fullscreen`}},B={tags:[`dev`,`test`],render:()=>(0,P.jsx)(g,{children:(0,P.jsxs)(d,{width:`wide`,children:[(0,P.jsx)(m,{children:`Root → Child: переопределение осей`}),(0,P.jsxs)(p,{children:[(0,P.jsx)(`code`,{children:`ChildThemeProvider`}),` переопределяет оси в поддереве (здесь `,(0,P.jsx)(`code`,{children:`brand`}),` и`,` `,(0,P.jsx)(`code`,{children:`density`}),`) поверх родителя; остальные оси (`,(0,P.jsx)(`code`,{children:`colorScheme`}),` из тулбар-аддона,`,` `,(0,P.jsx)(`code`,{children:`brandRole`}),`) наследуются. У вложенного showcase другой акцент и отступы — видно, что переопределение работает.`]}),(0,P.jsx)(u,{block:!0,children:(0,P.jsx)(A,{})})]})}),play:async({canvasElement:e})=>{let t=R(e),n=t.getByTestId(D.rootRegion),r=t.getByTestId(D.childRegion);await F(n).toBeVisible(),await F(r).toBeVisible(),await L(()=>{let e=k(n),t=k(r);F(e).not.toBe(``),F(t).not.toBe(``),F(e).not.toBe(t)})}},V={tags:[`dev`,`test`],render:()=>(0,P.jsx)(g,{children:(0,P.jsxs)(d,{width:`wide`,children:[(0,P.jsx)(m,{children:`rootRef — классы на внешнем элементе`}),(0,P.jsxs)(p,{children:[(0,P.jsx)(`code`,{children:`RootThemeProvider`})," применяет полный набор к переданному элементу через эффект, не создавая обёрточный `div`. Схема — от тулбар-аддона, ",(0,P.jsx)(`code`,{children:`density`}),` переопределён на `,(0,P.jsx)(`code`,{children:`comfort`}),`.`]}),(0,P.jsx)(u,{block:!0,children:(0,P.jsx)(j,{})})]})}),play:async({canvasElement:e})=>{let t=R(e).getByTestId(D.rootRefTarget);await L(()=>{F(t.classList.contains(`sn-comfort`)).toBe(!0)})}},H={tags:[`dev`,`test`],render:()=>(0,P.jsx)(g,{children:(0,P.jsxs)(d,{width:`wide`,children:[(0,P.jsx)(m,{children:`store-режим (реактивный)`}),(0,P.jsxs)(p,{children:[(0,P.jsx)(`code`,{children:`RootThemeProvider`}),` подписан на внешний стор; смена значения реэмитит классы у всех потребителей без перерендера провайдера (так глобальный стор пробивает микрофронты — см. `,(0,P.jsx)(`code`,{children:`getGlobalThemeStore`}),`).`]}),(0,P.jsx)(u,{block:!0,children:(0,P.jsx)(M,{})})]})}),play:async({canvasElement:e})=>{let t=R(e),n=t.getByTestId(D.storeRegion),r=getComputedStyle(n).getPropertyValue(`--sn-theme-color-neutral-background2Level`).trim();await I.click(t.getByTestId(D.storeToggle)),await L(()=>{let e=getComputedStyle(n).getPropertyValue(`--sn-theme-color-neutral-background2Level`).trim();F(e).not.toBe(r)}),F(typeof l).toBe(`function`)}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Root → Child: переопределение осей</DemoTitle>
        <DemoHint>
          <code>ChildThemeProvider</code> переопределяет оси в поддереве (здесь <code>brand</code> и{' '}
          <code>density</code>) поверх родителя; остальные оси (<code>colorScheme</code> из тулбар-аддона,{' '}
          <code>brandRole</code>) наследуются. У вложенного showcase другой акцент и отступы — видно, что
          переопределение работает.
        </DemoHint>
        <DemoActions block>
          <RootChildDemo />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.rootRegion);
    const child = canvas.getByTestId(TEST_IDS.childRegion);
    await expect(root).toBeVisible();
    await expect(child).toBeVisible();

    // Разный brand → разный акцентный тон: переопределение видно на токене, унаследованном showcase'ем.
    await waitFor(() => {
      const rootAccent = accentTone(root);
      const childAccent = accentTone(child);
      expect(rootAccent).not.toBe('');
      expect(childAccent).not.toBe('');
      expect(rootAccent).not.toBe(childAccent);
    });
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>rootRef — классы на внешнем элементе</DemoTitle>
        <DemoHint>
          <code>RootThemeProvider</code> применяет полный набор к переданному элементу через эффект, не создавая
          обёрточный \`div\`. Схема — от тулбар-аддона, <code>density</code> переопределён на <code>comfort</code>.
        </DemoHint>
        <DemoActions block>
          <RootRefDemo />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const target = within(canvasElement).getByTestId(TEST_IDS.rootRefTarget);

    // Явно переопределённая ось density попадает на внешний элемент — доказывает работу rootRef.
    await waitFor(() => {
      expect(target.classList.contains('sn-comfort')).toBe(true);
    });
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>store-режим (реактивный)</DemoTitle>
        <DemoHint>
          <code>RootThemeProvider</code> подписан на внешний стор; смена значения реэмитит классы у всех потребителей
          без перерендера провайдера (так глобальный стор пробивает микрофронты — см. <code>getGlobalThemeStore</code>).
        </DemoHint>
        <DemoActions block>
          <StoreBackedDemo />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const region = canvas.getByTestId(TEST_IDS.storeRegion);
    const backgroundBefore = getComputedStyle(region).getPropertyValue('--sn-theme-color-neutral-background2Level').trim();
    await userEvent.click(canvas.getByTestId(TEST_IDS.storeToggle));

    // Смена схемы в сторе перекрашивает showcase: токен фона стал другим.
    await waitFor(() => {
      const backgroundAfter = getComputedStyle(region).getPropertyValue('--sn-theme-color-neutral-background2Level').trim();
      expect(backgroundAfter).not.toBe(backgroundBefore);
    });

    // Ссылка на getGlobalThemeStore — публичный экспорт (используется в шеллах).
    expect(typeof getGlobalThemeStore).toBe('function');
  }
}`,...H.parameters?.docs?.source}}},U=[`Playground`,`RootRef`,`StoreBacked`]}))();export{B as Playground,V as RootRef,H as StoreBacked,U as __namedExportsOrder,z as default};
//# sourceMappingURL=ThemeProviders.Playground.stories-DyeWt8u5.js.map