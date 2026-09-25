import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{a as c,i as l,n as u,t as d}from"./src-CM7orJFB.js";import{n as f,t as p}from"./styles.module-BwOSLtSi.js";import{t as m}from"./testIds-D2wQVVX4.js";var h,g,_,v,y,b;e((()=>{d(),o(),p(),m(),h=t(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Site/CardVacancy`,component:u,parameters:{layout:`fullscreen`},args:{href:`#`,target:`_self`,title:`Frontend Developer`,description:`Remote · Full-time`,appearance:l.Neutral,mobile:!1,"data-test-id":c.root},argTypes:{href:{control:`text`},target:{control:`radio`,options:[`_self`,`_blank`,`_parent`,`_top`]},appearance:{control:`radio`,options:Object.values(l)},onClick:{action:`onClick`}}},y={tags:[`dev`,`test`],render:e=>(0,h.jsx)(r,{children:(0,h.jsxs)(a,{children:[(0,h.jsx)(i,{children:`Playground`}),(0,h.jsx)(n,{children:`Карточка вакансии-ссылка: заголовок + описание, фон по appearance, hover/pressed и фокус.`}),(0,h.jsx)(s,{align:`center`,children:(0,h.jsx)(`div`,{className:f.playgroundCard,children:(0,h.jsx)(u,{...e})})})]})}),play:async({canvasElement:e})=>{await g(_(e).getByTestId(c.root)).toBeVisible()}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Карточка вакансии-ссылка: заголовок + описание, фон по appearance, hover/pressed и фокус.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.playgroundCard}>
            <CardVacancy {...args} />
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
//# sourceMappingURL=CardVacancy.Playground.stories-Ot97PaRj.js.map