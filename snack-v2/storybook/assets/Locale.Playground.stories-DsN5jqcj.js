import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{Q as n,X as r,Y as i,d as a,f as o,g as s,it as c,nt as l,p as u,t as d,tt as f,u as p}from"./iframe-qs8RgOhH.js";var m,h,g,_,v,y=e((()=>{m=`_localeStack_2t5qk_4`,h=`_localeSurface_2t5qk_11`,g=`_row_2t5qk_22`,_=`_value_2t5qk_28`,v={localeStack:m,localeSurface:h,row:g,value:_}})),b,x=e((()=>{b={root:`locale`}}));function S(){let{t:e}=E.useTranslations(),t=f();return(0,C.jsxs)(`div`,{className:v.localeSurface,"data-test-id":b.root,children:[(0,C.jsxs)(`div`,{className:v.row,children:[(0,C.jsx)(`span`,{children:`useLang():`}),(0,C.jsx)(`span`,{className:v.value,children:t})]}),(0,C.jsxs)(`div`,{className:v.row,children:[(0,C.jsx)(`span`,{children:`t('greeting'):`}),(0,C.jsx)(`span`,{className:v.value,children:e(`greeting`,{name:`Ada`})})]}),(0,C.jsxs)(`div`,{className:v.row,children:[(0,C.jsx)(`span`,{children:`t('state.empty'):`}),(0,C.jsx)(`span`,{className:v.value,children:e(`state.empty`)})]})]})}var C,w,T,E,D,O,k;e((()=>{i(),d(),y(),x(),C=t(),{expect:w,within:T}=__STORYBOOK_MODULE_TEST__,E=n(`LocaleStoryDemo`,r({"en-GB":{greeting:`Hello, {{name}}!`,state:{empty:`Nothing found`}},"ru-RU":{greeting:`Привет, {{name}}!`,state:{empty:`Ничего не найдено`}}})),D={title:`Snack/Foundation & utilities/Locale`,id:`components-locale`,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{lang:`ru-RU`,fallbackLang:`en-GB`},argTypes:{lang:{control:`select`,options:c},fallbackLang:{control:`select`,options:c}}},O={tags:[`dev`,`test`],render:e=>(0,C.jsx)(o,{children:(0,C.jsxs)(u,{width:`wide`,children:[(0,C.jsx)(s,{children:`Locale Provider`}),(0,C.jsxs)(a,{children:[(0,C.jsx)(`code`,{children:`LocaleProvider`}),` несёт только язык и fallback — строки живут в самих пакетах (`,(0,C.jsx)(`code`,{children:`defineMessages`}),` / `,(0,C.jsx)(`code`,{children:`defineLocale`}),`). Переключите `,(0,C.jsx)(`code`,{children:`lang`}),`; консьюмер ниже читает строки через `,(0,C.jsx)(`code`,{children:`useTranslations`}),`. В приложении язык приходит пропом или из`,` `,(0,C.jsx)(`code`,{children:`getGlobalLocaleStore().store`}),` (MFE).`]}),(0,C.jsx)(p,{block:!0,children:(0,C.jsx)(`div`,{className:v.localeStack,children:(0,C.jsx)(l,{lang:e.lang,fallbackLang:e.fallbackLang,children:(0,C.jsx)(S,{})})})})]})}),play:async({canvasElement:e})=>{await w(T(e).getByTestId(b.root)).toBeVisible()}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Locale Provider</DemoTitle>
        <DemoHint>
          <code>LocaleProvider</code> несёт только язык и fallback — строки живут в самих пакетах (
          <code>defineMessages</code> / <code>defineLocale</code>). Переключите <code>lang</code>; консьюмер ниже читает
          строки через <code>useTranslations</code>. В приложении язык приходит пропом или из{' '}
          <code>getGlobalLocaleStore().store</code> (MFE).
        </DemoHint>
        <DemoActions block>
          <div className={styles.localeStack}>
            <LocaleProvider lang={args.lang} fallbackLang={args.fallbackLang}>
              <LocaleSurface />
            </LocaleProvider>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...O.parameters?.docs?.source}}},k=[`Playground`]}))();export{O as Playground,k as __namedExportsOrder,D as default};
//# sourceMappingURL=Locale.Playground.stories-DsN5jqcj.js.map