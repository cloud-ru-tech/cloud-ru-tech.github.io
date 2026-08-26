import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-D1b9r8k6.js";import{i as c,n as l,t as u}from"./src-BBnHcuPV.js";import{n as d,t as f}from"./styles.module-DtHAMK3l.js";import{t as p}from"./testIds-Ct1kcT5P.js";var m,h,g,_,v,y;e((()=>{u(),o(),f(),p(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Inputs & Forms/Slider`,id:`components-slider`,component:l,parameters:{layout:`fullscreen`},args:{min:0,max:100,step:1,defaultValue:40,handleTip:!1,marksEqualSpacing:!1,disabled:!1,reverse:!1,"data-test-id":c.root},argTypes:{min:{control:`number`,description:`Минимальное значение`},max:{control:`number`,description:`Максимальное значение`},step:{control:`number`,description:`Шаг`},handleTip:{control:`boolean`,description:`Показывать tooltip со значением на ручке`},marksEqualSpacing:{control:`boolean`,description:`Равномерное распределение меток при нелинейных значениях`},disabled:{control:`boolean`,description:`Отключён`},reverse:{control:`boolean`,description:`Перевёрнутое направление`},value:{table:{disable:!0}}}},v={tags:[`dev`,`test`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{width:`wide`,children:[(0,m.jsx)(a,{children:`Playground`}),(0,m.jsx)(i,{children:`Ползунок для выбора значения из диапазона.`}),(0,m.jsx)(n,{block:!0,children:(0,m.jsx)(`div`,{className:d.item,children:(0,m.jsx)(l,{...e})})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(c.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Ползунок для выбора значения из диапазона.</DemoHint>
        <DemoActions block>
          <div className={styles.item}>
            <Slider {...args} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Slider.Playground.stories-CxY131B9.js.map