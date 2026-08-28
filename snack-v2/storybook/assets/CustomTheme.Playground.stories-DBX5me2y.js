import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{A as i,L as a,_ as o,d as s,l as c,m as l,t as u,u as d,x as f}from"./iframe-CSZ3Qkp5.js";import{a as p,l as m,s as h,t as g,u as _}from"./src-CNfhYx-4.js";import{t as v,w as y}from"./src-CYpQYQmT.js";import{n as b,t as x}from"./ThemePreview-CmYcbtj-.js";var S,C,w,T,E,D,O=t((()=>{S=`_layout_r5iyd_5`,C=`_sidebar_r5iyd_14`,w=`_field_r5iyd_26`,T=`_presets_r5iyd_30`,E=`_preview_r5iyd_36`,D={layout:S,sidebar:C,field:w,presets:T,preview:E}})),k,A=t((()=>{k={field:`custom-theme-field`,presetOrange:`custom-theme-preset-orange`,presetViolet:`custom-theme-preset-violet`,presetGreen:`custom-theme-preset-green`,preview:`custom-theme-preview`,hookField:`custom-theme-hook-field`,hookPreview:`custom-theme-hook-preview`}}));function j({color:e,onColor:t,fieldTestId:n}){return(0,I.jsxs)(`div`,{className:D.sidebar,children:[(0,I.jsx)(`div`,{className:D.field,children:(0,I.jsx)(y,{label:`Кастомный primary-цвет`,value:e,onChange:t,showClearButton:!1,"data-test-id":n,withAlpha:!1})}),(0,I.jsx)(`div`,{className:D.presets,children:H.map(e=>(0,I.jsx)(p,{appearance:h.Neutral,view:_.Outline,size:m.S,label:e.label,"data-test-id":e.testId,onClick:()=>t(e.color)},e.color))})]})}function M(){let[e,t]=(0,F.useState)(`#0077ff`),{appearance:n}=a();return(0,I.jsxs)(`div`,{className:D.layout,children:[(0,I.jsx)(j,{color:e,onColor:t,fieldTestId:k.field}),(0,I.jsx)(i,{value:n,brandColor:e,className:D.preview,children:(0,I.jsx)(x,{testId:k.preview})})]})}function N({color:e,children:t}){let[n,r]=(0,F.useState)(null),o=(0,F.useMemo)(()=>({current:n}),[n]),{appearance:s}=a();return f({color:e,scope:`#${U}`}),(0,I.jsx)(`div`,{id:U,ref:r,className:D.preview,children:(0,I.jsx)(i,{value:s,rootRef:o,children:t})})}function P(){let[e,t]=(0,F.useState)(`#e5006e`);return(0,I.jsxs)(`div`,{className:D.layout,children:[(0,I.jsx)(j,{color:e,onColor:t,fieldTestId:k.hookField}),(0,I.jsx)(N,{color:e,children:(0,I.jsx)(x,{testId:k.hookPreview})})]})}var F,I,L,R,z,B,V,H,U,W,G,K;t((()=>{g(),v(),o(),F=e(n(),1),u(),b(),O(),A(),I=r(),{expect:L,userEvent:R,waitFor:z,within:B}=__STORYBOOK_MODULE_TEST__,V={title:`Snack/Foundation & utilities/Theme/Custom Theme`,id:`components-theme-custom-theme`,parameters:{layout:`fullscreen`}},H=[{color:`#ff7a00`,label:`Оранжевый`,testId:k.presetOrange},{color:`#8a2be2`,label:`Фиолетовый`,testId:k.presetViolet},{color:`#389f74`,label:`Зелёный`,testId:k.presetGreen}],U=`custom-theme-hook-scope`,W={tags:[`dev`,`test`],render:()=>(0,I.jsx)(d,{children:(0,I.jsxs)(s,{width:`wide`,children:[(0,I.jsx)(l,{children:`Кастомная тема из seed-цвета`}),(0,I.jsx)(c,{children:"Выберите бренд-цвет полем или пресетом — палитра `--sn-brand-color-primary-*` перегенерируется, и все акцентные элементы превью перекрашиваются (семантический слой каскадит из тонов)."}),(0,I.jsx)(M,{})]})}),play:async({canvasElement:e})=>{let t=B(e),n=t.getByTestId(k.preview);await L(t.getByTestId(k.field)).toBeVisible(),await L(n).toBeVisible(),await R.click(t.getByTestId(k.presetOrange)),await z(()=>{let e=getComputedStyle(n).getPropertyValue(`--sn-brand-color-primary-55`).trim();L(e.toLowerCase()).toContain(`#ff7a00`)})}},G={tags:[`dev`,`test`],render:()=>(0,I.jsx)(d,{children:(0,I.jsxs)(s,{width:`wide`,children:[(0,I.jsx)(l,{children:`useApplyCustomTheme (императивный хук)`}),(0,I.jsxs)(c,{children:[`Тот же результат через хук: `,(0,I.jsxs)(`code`,{children:[`useApplyCustomTheme(`,`{ color, scope }`,`)`]}),`. В приложении вызывается один раз в bootstrap, без `,(0,I.jsx)(`code`,{children:`scope`}),` — глобально (перекрашивает и порталы).`]}),(0,I.jsx)(P,{})]})}),play:async({canvasElement:e})=>{let t=B(e).getByTestId(k.hookPreview);await L(t).toBeVisible(),await z(()=>{let e=getComputedStyle(t).getPropertyValue(`--sn-brand-color-primary-55`).trim();L(e.toLowerCase()).toContain(`#e5006e`)})}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Кастомная тема из seed-цвета</DemoTitle>
        <DemoHint>
          Выберите бренд-цвет полем или пресетом — палитра \`--sn-brand-color-primary-*\` перегенерируется, и все
          акцентные элементы превью перекрашиваются (семантический слой каскадит из тонов).
        </DemoHint>
        <DeclarativeDemo />
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const preview = canvas.getByTestId(TEST_IDS.preview);
    await expect(canvas.getByTestId(TEST_IDS.field)).toBeVisible();
    await expect(preview).toBeVisible();
    await userEvent.click(canvas.getByTestId(TEST_IDS.presetOrange));

    // Seed каскадит на бренд-тон 55, который наследуется вглубь превью.
    await waitFor(() => {
      const accent = getComputedStyle(preview).getPropertyValue('--sn-brand-color-primary-55').trim();
      expect(accent.toLowerCase()).toContain('#ff7a00');
    });
  }
}`,...W.parameters?.docs?.source},description:{story:"Декларативный путь: `brandColor` на `RootThemeProvider`. Панель управления слева, превью справа —\nдропдаун color-picker'а не перекрывает акцентные элементы.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>useApplyCustomTheme (императивный хук)</DemoTitle>
        <DemoHint>
          Тот же результат через хук: <code>useApplyCustomTheme({'{ color, scope }'})</code>. В приложении вызывается
          один раз в bootstrap, без <code>scope</code> — глобально (перекрашивает и порталы).
        </DemoHint>
        <ImperativeDemo />
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const preview = canvas.getByTestId(TEST_IDS.hookPreview);
    await expect(preview).toBeVisible();
    await waitFor(() => {
      const accent = getComputedStyle(preview).getPropertyValue('--sn-brand-color-primary-55').trim();
      expect(accent.toLowerCase()).toContain('#e5006e');
    });
  }
}`,...G.parameters?.docs?.source},description:{story:"Императивный путь: хук `useApplyCustomTheme` инжектит `<style>` на бренд-классы. Здесь скоуплен на\n`#id`, чтобы перекрасить только превью; в приложении вызывается без `scope` — глобально (и порталы).",...G.parameters?.docs?.description}}},K=[`Playground`,`ImperativeHook`]}))();export{G as ImperativeHook,W as Playground,K as __namedExportsOrder,V as default};
//# sourceMappingURL=CustomTheme.Playground.stories-DBX5me2y.js.map