import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{f as c,t as l,u}from"./src-Bo1rmC5T.js";import{n as d,r as f,t as p}from"./testIds-CS-eequk.js";var m,h,g,_,v,y;e((()=>{l(),o(),d(),p(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Feedback/Skeleton/Skeleton`,id:`components-skeleton-skeleton`,component:c,parameters:{layout:`fullscreen`},args:{loading:!0,width:200,height:24,borderRadius:4,"data-test-id":u.skeleton.root},argTypes:{loading:{control:`boolean`,description:`Флаг состояния загрузки. true — скелетон, false — children.`},width:{control:{type:`number`},description:`Ширина блока (CSS width)`},height:{control:{type:`number`},description:`Высота блока (CSS height)`},borderRadius:{control:{type:`number`},description:`Радиус скругления (CSS borderRadius)`},className:{control:`text`}}},v={tags:[`dev`,`test`],render:e=>(0,m.jsx)(r,{children:(0,m.jsxs)(a,{children:[(0,m.jsx)(i,{children:`Playground`}),(0,m.jsx)(n,{children:`Скелетон-плейсхолдер с настройкой размеров и радиуса скругления.`}),(0,m.jsx)(s,{align:`center`,children:(0,m.jsx)(`div`,{className:f.wrapper,children:(0,m.jsx)(c,{...e,children:(0,m.jsx)(`span`,{children:`Контент после загрузки`})})})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(u.skeleton.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Скелетон-плейсхолдер с настройкой размеров и радиуса скругления.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.wrapper}>
            <Skeleton {...args}>
              <span>Контент после загрузки</span>
            </Skeleton>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.skeleton.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=Skeleton.Playground.stories-BBtlUkr8.js.map