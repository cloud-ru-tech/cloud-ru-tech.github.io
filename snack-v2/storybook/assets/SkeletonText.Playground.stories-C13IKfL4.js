import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BUDedHtH.js";import{a as c,c as l,i as u,o as d,t as f,u as p}from"./src-DE3sLoIy.js";import{n as m,r as h,t as g}from"./testIds-BeIZ6fYS.js";var _,v,y,b,x,S;e((()=>{f(),o(),m(),g(),_=t(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Feedback/Skeleton/SkeletonText`,id:`components-skeleton-skeletontext`,component:l,parameters:{layout:`fullscreen`},args:{loading:!0,variant:d.Body,size:c.M,align:u.Left,lines:3,"data-test-id":p.skeletonText.root},argTypes:{loading:{control:`boolean`,description:`Флаг состояния загрузки`},lines:{control:{type:`number`,min:1,max:10},description:`Количество строк`},variant:{options:Object.values(d),control:`select`,description:`Роль типографики`},size:{options:Object.values(c),control:`radio`,description:`Масштаб: s / m / l`},align:{options:Object.values(u),control:`radio`,description:`Выравнивание`},width:{control:{type:`number`},description:`Ширина контейнера`}}},x={tags:[`dev`,`test`],render:e=>(0,_.jsx)(s,{children:(0,_.jsxs)(r,{children:[(0,_.jsx)(a,{children:`Playground`}),(0,_.jsx)(i,{children:`Многострочный текстовый скелетон с настройкой типографики и количества строк.`}),(0,_.jsx)(n,{block:!0,children:(0,_.jsx)(`div`,{className:h.wrapper,children:(0,_.jsx)(l,{...e,children:(0,_.jsx)(`span`,{children:`Контент после загрузки.`})})})})]})}),play:async({canvasElement:e})=>{await v(y(e).getByTestId(p.skeletonText.root)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Многострочный текстовый скелетон с настройкой типографики и количества строк.</DemoHint>
        <DemoActions block>
          <div className={styles.wrapper}>
            <SkeletonText {...args}>
              <span>Контент после загрузки.</span>
            </SkeletonText>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.skeletonText.root)).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};
//# sourceMappingURL=SkeletonText.Playground.stories-C13IKfL4.js.map