import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-XppXgSyX.js";import{a as c,t as l}from"./src-BaQeOyft.js";import{n as u,t as d}from"./src-D7eHfWfn.js";import{n as f,t as p}from"./testIds-DDukF6lf.js";var m,h,g,_,v,y,b;e((()=>{l(),d(),o(),f(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_=[{id:`overview`,content:{label:`Overview`}},{id:`analytics`,content:{label:`Analytics`}},{id:`billing`,content:{label:`Billing`}}],v={title:`Snack/Data display/List/Droplist/Examples/RenderFnTrigger`,id:`components-list-droplist-examples-renderfntrigger`,component:u,parameters:{layout:`fullscreen`}},y={tags:[`dev`,`test`],render:()=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`Render-function trigger`}),(0,m.jsx)(i,{children:`children — функция; onKeyDown прокинут в кастомный триггер для клавиатурного открытия.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(u,{items:_,size:`m`,placement:`bottom-start`,trigger:`click`,children:({onKeyDown:e})=>(0,m.jsx)(c,{"data-test-id":p.droplist.renderFnTrigger,label:`Custom trigger`,view:`outline`,appearance:`neutral`,size:`m`,onKeyDown:e})})})]})}),play:async({canvasElement:e})=>{await h(g(e).getByTestId(p.droplist.renderFnTrigger)).toBeVisible()}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>Render-function trigger</DemoTitle>
        <DemoHint>children — функция; onKeyDown прокинут в кастомный триггер для клавиатурного открытия.</DemoHint>
        <DemoActions align='center'>
          <Droplist items={items} size='m' placement='bottom-start' trigger='click'>
            {({
            onKeyDown
          }) => <Button data-test-id={TEST_IDS.droplist.renderFnTrigger} label='Custom trigger' view='outline' appearance='neutral' size='m' onKeyDown={onKeyDown} />}
          </Droplist>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.droplist.renderFnTrigger)).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}},b=[`RenderFnTrigger`]}))();export{y as RenderFnTrigger,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Droplist.RenderFnTrigger.stories-CF9ozrLX.js.map