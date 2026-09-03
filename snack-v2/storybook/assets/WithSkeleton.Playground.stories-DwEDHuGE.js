import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bb1kR6xz.js";import{n as c,t as l}from"./src-DNzJ4W3g.js";import{c as u,f as d,n as f,t as p,u as m}from"./src-BwBKhRJx.js";import{n as h,r as g,t as _}from"./testIds-CSmo1yna.js";var v,y,b,x,S,C;e((()=>{p(),l(),o(),h(),_(),v=t(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Feedback/Skeleton/WithSkeleton`,id:`components-skeleton-withskeleton`,parameters:{layout:`fullscreen`},args:{loading:!0,skeletonVariant:`text`},argTypes:{loading:{control:`boolean`,description:`Флаг состояния загрузки`},skeletonVariant:{options:[`text`,`block`],control:`radio`,description:`Вариант скелетона для демонстрации`}}},S={tags:[`dev`,`test`],render:({loading:e,skeletonVariant:t=`text`})=>{let o=t===`text`?(0,v.jsx)(u,{loading:!0,lines:3,variant:`body`,size:`m`}):(0,v.jsx)(d,{loading:!0,width:200,height:120,borderRadius:8}),l=t===`text`?(0,v.jsx)(c,{variant:`body`,size:`m`,as:`div`,children:`Контент после загрузки.`}):(0,v.jsx)(`div`,{className:g.contentCard,children:`Блок контента`});return(0,v.jsx)(s,{children:(0,v.jsxs)(r,{children:[(0,v.jsx)(a,{children:`Playground`}),(0,v.jsx)(i,{children:`Обёртка WithSkeleton: подменяет children скелетоном при loading.`}),(0,v.jsx)(n,{align:`center`,children:(0,v.jsx)(`div`,{className:g.wrapper,"data-test-id":m.withSkeleton.wrapper,children:(0,v.jsx)(f,{loading:e,skeleton:o,children:l})})})]})})},play:async({canvasElement:e})=>{await y(b(e).getByTestId(m.withSkeleton.wrapper)).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: ({
    loading,
    skeletonVariant = 'text'
  }) => {
    const skeleton = skeletonVariant === 'text' ? <SkeletonText loading lines={3} variant='body' size='m' /> : <Skeleton loading width={200} height={120} borderRadius={8} />;
    const content = skeletonVariant === 'text' ? <Typography variant='body' size='m' as='div'>
          Контент после загрузки.
        </Typography> : <div className={styles.contentCard}>Блок контента</div>;
    return <DemoPage>
        <DemoPanel>
          <DemoTitle>Playground</DemoTitle>
          <DemoHint>Обёртка WithSkeleton: подменяет children скелетоном при loading.</DemoHint>
          <DemoActions align='center'>
            <div className={styles.wrapper} data-test-id={TEST_IDS.withSkeleton.wrapper}>
              <WithSkeleton loading={loading} skeleton={skeleton}>
                {content}
              </WithSkeleton>
            </div>
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.withSkeleton.wrapper)).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,x as default};
//# sourceMappingURL=WithSkeleton.Playground.stories-DwEDHuGE.js.map