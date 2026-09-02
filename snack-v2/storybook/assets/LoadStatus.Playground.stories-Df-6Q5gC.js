import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BLXw10_m.js";import{t as c,u as l}from"./src-gmr6DOfT.js";import{c as u,i as d,n as f,r as p,s as m,t as h}from"./styles.module-BfyPCQbD.js";var g=e((()=>{u()})),_,v,y,b,x,S;e((()=>{c(),p(),o(),h(),g(),_=t(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Uikit Product/Feedback/LoadStatus`,id:`uikit-product-loadstatus`,component:d,parameters:{layout:`fullscreen`},args:{label:`Label`,value:`Value`,hint:`Hint`,progress:60,size:l.S,valueType:`none`,showError:!1,showErrorIcon:!1,"data-test-id":m.root},argTypes:{label:{control:`text`},value:{control:`text`},hint:{control:`text`},progress:{control:{type:`range`,min:0,max:100,step:1}},size:{control:`radio`,options:Object.values(l)},valueType:{control:`radio`,options:[`none`,`percent`]},showError:{control:`boolean`},showErrorIcon:{control:`boolean`},appearanceByProgress:{table:{disable:!0}}}},x={tags:[`dev`,`test`],render:e=>(0,_.jsx)(s,{children:(0,_.jsxs)(r,{children:[(0,_.jsx)(a,{children:`Playground`}),(0,_.jsx)(i,{children:`Строка загрузки с опциональным заголовком, процентом и подсказкой.`}),(0,_.jsx)(n,{align:`center`,children:(0,_.jsx)(`div`,{className:f.panel,children:(0,_.jsx)(d,{...e})})})]})}),play:async({canvasElement:e})=>{await v(y(e).getByTestId(m.root)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Строка загрузки с опциональным заголовком, процентом и подсказкой.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.panel}>
            <LoadStatus {...args} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};
//# sourceMappingURL=LoadStatus.Playground.stories-Df-6Q5gC.js.map