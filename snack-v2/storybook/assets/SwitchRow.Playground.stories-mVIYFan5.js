import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-aHi-eIAa.js";import{a as c,i as l,n as u,t as d}from"./src-DLTqciob.js";import{n as f,t as p}from"./styles.module-Cr-FuABY.js";import{t as m}from"./testIds-BsTuCNC-.js";var h,g,_,v,y,b;e((()=>{d(),o(),p(),m(),h=t(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Uikit Product/Inputs & Forms/SwitchRow`,id:`uikit-product-switchrow`,component:u,parameters:{layout:`fullscreen`},args:{title:`Включить уведомления`,description:`Раз в сутки будет приходить дайджест событий`,defaultChecked:!1,disabled:!1,loading:!1,disableTitleTruncate:!1,type:l.Block,"data-test-id":c.root},argTypes:{title:{control:`text`,description:`Заголовок`},description:{control:`text`,description:`Описание под заголовком`},disabled:{control:`boolean`,description:`Отключено`},loading:{control:`boolean`,description:`Состояние загрузки`},disableTitleTruncate:{control:`boolean`,description:`Отключить truncation заголовка`},type:{control:`radio`,options:Object.values(l),description:`Вариант лейаута: block (карточка) / line (inline)`},tip:{control:`text`,description:`Подсказка рядом с заголовком`},disabledToggleTip:{control:`text`,description:`Тултип поверх Switch в disabled-состоянии`},name:{control:`text`,description:`name для нативного input`},checked:{table:{disable:!0}},defaultChecked:{table:{disable:!0}}}},y={tags:[`dev`,`test`],render:e=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{children:[(0,h.jsx)(a,{children:`Playground`}),(0,h.jsx)(i,{children:`Строка-переключатель с заголовком, описанием и Switch справа.`}),(0,h.jsx)(n,{align:`center`,children:(0,h.jsx)(`div`,{className:f.fullWidth,children:(0,h.jsx)(u,{...e})})})]})}),play:async({canvasElement:e})=>{await g(_(e).getByTestId(c.root)).toBeVisible()}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Строка-переключатель с заголовком, описанием и Switch справа.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.fullWidth}>
            <SwitchRow {...args} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}},b=[`Playground`]}))();export{y as Playground,b as __namedExportsOrder,v as default};
//# sourceMappingURL=SwitchRow.Playground.stories-mVIYFan5.js.map