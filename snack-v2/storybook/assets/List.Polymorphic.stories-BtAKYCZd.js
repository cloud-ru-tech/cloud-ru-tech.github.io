import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-XppXgSyX.js";import{k as c,t as l,zt as u}from"./system-D36IQX-A.js";import{a as d,t as f}from"./src-D7eHfWfn.js";import{n as p,t as m}from"./testIds-DDukF6lf.js";import{n as h,t as g}from"./stories.module-Cv0zmHWk.js";var _,v,y,b,x,S,C;e((()=>{l(),f(),o(),p(),g(),_=t(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Data display/List/List/Examples/Polymorphic`,id:`components-list-list-examples-polymorphic`,component:d,parameters:{layout:`fullscreen`}},x=[{id:`docs`,beforeContent:(0,_.jsx)(u,{}),content:{label:`Documentation`},itemWrapRender:e=>(0,_.jsx)(`a`,{href:`https://cloud.ru/docs`,children:e})},{id:`external`,beforeContent:(0,_.jsx)(c,{}),content:{label:`External link`},itemWrapRender:e=>(0,_.jsx)(`a`,{href:`https://cloud.ru/`,target:`_blank`,rel:`noopener noreferrer`,children:e})}],S={tags:[`dev`,`test`],render:()=>(0,_.jsx)(s,{children:(0,_.jsxs)(r,{width:`narrow`,children:[(0,_.jsx)(a,{children:`Polymorphic items (itemWrapRender)`}),(0,_.jsx)(i,{children:`Каждый item обёрнут в навигационную ссылку; внешняя — с target=_blank + rel.`}),(0,_.jsx)(n,{align:`center`,children:(0,_.jsx)(`div`,{className:h.listFrame,children:(0,_.jsx)(d,{"data-test-id":m.list.polymorphicScenario,items:x,size:`m`})})})]})}),play:async({canvasElement:e})=>{await v(y(e).getByTestId(m.list.polymorphicScenario)).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='narrow'>
        <DemoTitle>Polymorphic items (itemWrapRender)</DemoTitle>
        <DemoHint>Каждый item обёрнут в навигационную ссылку; внешняя — с target=_blank + rel.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.listFrame}>
            <List data-test-id={TEST_IDS.list.polymorphicScenario} items={items} size='m' />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.list.polymorphicScenario)).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C=[`Polymorphic`]}))();export{S as Polymorphic,C as __namedExportsOrder,b as default};
//# sourceMappingURL=List.Polymorphic.stories-BtAKYCZd.js.map