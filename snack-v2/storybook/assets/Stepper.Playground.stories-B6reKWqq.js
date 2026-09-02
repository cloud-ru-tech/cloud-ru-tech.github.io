import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-DQTa2Tvz.js";import{a as c,t as l}from"./src-BSWo-EXU.js";import{n as u,t as d}from"./src-DWTkZ-Xu.js";import{n as f,t as p}from"./styles.module-Cu9lTr2p.js";import{n as m,t as h}from"./testIds-CX4qu5K1.js";var g,_,v,y,b,x;e((()=>{l(),d(),o(),p(),m(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Snack/Navigation/Stepper`,id:`components-stepper`,component:u,parameters:{layout:`fullscreen`},args:{steps:[{title:`Настройка`,description:`Укажите основные параметры`},{title:`Проверка`,description:`Убедитесь, что всё корректно`},{title:`Готово`,description:`Подтвердите создание`}],defaultCurrentStepIndex:0,allowFreeNavigation:!1,className:``,"data-test-id":h.root},argTypes:{steps:{control:`object`,description:`Массив шагов (title + description)`},defaultCurrentStepIndex:{control:{type:`number`,min:0,step:1},description:`Индекс шага, на котором степпер откроется изначально`},allowFreeNavigation:{control:`boolean`},className:{control:`text`,description:`CSS-класс на корне степпера`},validator:{control:!1},onChangeCurrentStep:{control:!1},onCompleteChange:{control:!1},children:{control:!1}}},b={tags:[`dev`,`test`],render:e=>(0,g.jsx)(s,{children:(0,g.jsxs)(r,{width:`wide`,children:[(0,g.jsx)(a,{children:`Playground`}),(0,g.jsx)(i,{children:`Пошаговый мастер с кнопками навигации.`}),(0,g.jsx)(n,{align:`center`,children:(0,g.jsx)(`div`,{className:f.containerPlayground,"data-test-id":h.example,children:(0,g.jsx)(u,{...e,children:({stepper:e,goNext:t,goPrev:n,currentStepIndex:r,stepCount:i,isCompleted:a})=>(0,g.jsxs)(`div`,{className:f.stack,children:[e,(0,g.jsxs)(`div`,{className:f.row,children:[(0,g.jsx)(c,{label:`Назад`,appearance:`neutral`,view:`outline`,size:`s`,onClick:()=>n(),disabled:r===0,"data-test-id":h.prev}),(0,g.jsx)(c,{label:r===i-1?`Завершить`:`Далее`,appearance:`primary`,size:`s`,onClick:()=>t(),disabled:a,"data-test-id":h.next})]})]})})})})]})}),play:async({canvasElement:e})=>{let t=v(e);await _(t.getByTestId(h.root)).toBeVisible()}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Пошаговый мастер с кнопками навигации.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.containerPlayground} data-test-id={TEST_IDS.example}>
            <Stepper {...args}>
              {({
              stepper,
              goNext,
              goPrev,
              currentStepIndex,
              stepCount,
              isCompleted
            }) => <div className={styles.stack}>
                  {stepper}
                  <div className={styles.row}>
                    <Button label='Назад' appearance='neutral' view='outline' size='s' onClick={() => goPrev()} disabled={currentStepIndex === 0} data-test-id={TEST_IDS.prev} />
                    <Button label={currentStepIndex === stepCount - 1 ? 'Завершить' : 'Далее'} appearance='primary' size='s' onClick={() => goNext()} disabled={isCompleted} data-test-id={TEST_IDS.next} />
                  </div>
                </div>}
            </Stepper>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`]}))();export{b as Playground,x as __namedExportsOrder,y as default};
//# sourceMappingURL=Stepper.Playground.stories-B6reKWqq.js.map