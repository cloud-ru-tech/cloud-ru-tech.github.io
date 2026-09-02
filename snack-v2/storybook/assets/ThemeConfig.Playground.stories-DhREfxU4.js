import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{C as i,_ as a,c as o,d as s,l as c,m as l,t as u,u as d}from"./iframe-DQTa2Tvz.js";import{a as f,l as p,s as m,t as h,u as g}from"./src-BSWo-EXU.js";import{n as _,t as v}from"./ThemedShowcase-e1k8O9GG.js";var y,b,x,S,C=t((()=>{y=`_grid_19qdw_4`,b=`_scope_19qdw_11`,x=`_toggle_19qdw_22`,S={grid:y,scope:b,toggle:x}})),w,T=t((()=>{w={scopeLight:`theme-config-scope-light`,scopeDark:`theme-config-scope-dark`}}));function E({defaultTheme:e,testId:t}){let{theme:n,themeClassName:r,changeTheme:a}=i({themeMap:j,defaultTheme:e});return(0,O.jsxs)(`div`,{className:(0,D.default)(r,S.scope),"data-test-id":t,children:[(0,O.jsxs)(`div`,{className:S.toggle,children:[(0,O.jsx)(f,{label:`Светлая`,size:p.S,appearance:m.Neutral,view:n===`light`?g.Filled:g.Outline,onClick:()=>a(`light`)}),(0,O.jsx)(f,{label:`Тёмная`,size:p.S,appearance:m.Neutral,view:n===`dark`?g.Filled:g.Outline,onClick:()=>a(`dark`)})]}),(0,O.jsx)(v,{caption:(0,O.jsxs)(O.Fragment,{children:[`Локальная схема: `,(0,O.jsx)(`code`,{children:n})]})})]})}var D,O,k,A,j,M,N,P;t((()=>{h(),a(),D=e(r(),1),u(),_(),C(),T(),O=n(),{expect:k,within:A}=__STORYBOOK_MODULE_TEST__,j={light:`sn-light`,dark:`sn-dark`},M={title:`Snack/Foundation & utilities/Theme/Config`,id:`components-theme-config`,parameters:{layout:`fullscreen`}},N={tags:[`dev`,`test`],render:()=>(0,O.jsx)(d,{children:(0,O.jsxs)(s,{width:`wide`,children:[(0,O.jsx)(l,{children:`useThemeConfig — независимые области`}),(0,O.jsxs)(c,{children:[`Хук держит цветовую схему локально в поддереве и вешает класс через `,(0,O.jsx)(`code`,{children:`themeClassName`}),`. Две области ниже переключаются независимо — видно, как перекрашивается живой UI, а не строка классов.`]}),(0,O.jsx)(o,{block:!0,children:(0,O.jsxs)(`div`,{className:S.grid,children:[(0,O.jsx)(E,{defaultTheme:`light`,testId:w.scopeLight}),(0,O.jsx)(E,{defaultTheme:`dark`,testId:w.scopeDark})]})})]})}),play:async({canvasElement:e})=>{let t=A(e);await k(t.getByTestId(w.scopeLight)).toBeVisible(),await k(t.getByTestId(w.scopeDark)).toBeVisible()}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>useThemeConfig — независимые области</DemoTitle>
        <DemoHint>
          Хук держит цветовую схему локально в поддереве и вешает класс через <code>themeClassName</code>. Две области
          ниже переключаются независимо — видно, как перекрашивается живой UI, а не строка классов.
        </DemoHint>
        <DemoActions block>
          <div className={styles.grid}>
            <ThemeScope defaultTheme='light' testId={TEST_IDS.scopeLight} />
            <ThemeScope defaultTheme='dark' testId={TEST_IDS.scopeDark} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId(TEST_IDS.scopeLight)).toBeVisible();
    await expect(canvas.getByTestId(TEST_IDS.scopeDark)).toBeVisible();
  }
}`,...N.parameters?.docs?.source}}},P=[`Playground`]}))();export{N as Playground,P as __namedExportsOrder,M as default};
//# sourceMappingURL=ThemeConfig.Playground.stories-DhREfxU4.js.map