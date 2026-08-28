import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-SlIP-akt.js";import{g as c,t as l}from"./src-CvOH1YIh.js";import{i as u,l as d,n as f,o as p,s as m,t as h,u as g}from"./src-B4IVwpV9.js";import{n as _,t as v}from"./styles.module-CzBJga_O.js";var y,b,x,S,C,w;e((()=>{l(),h(),o(),g(),v(),y=t(),{expect:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Uikit Product/Inputs & Forms/TogglesPredefined/ToggleGroup`,id:`uikit-product-togglespredefined-togglegroup`,component:f,parameters:{layout:`fullscreen`},args:{orientation:m.Vertical,gap:p.S,breakpoint:0,selectionMode:c.Single,defaultValue:`pro`,"data-test-id":d.group},argTypes:{orientation:{control:`radio`,options:Object.values(m)},gap:{control:`radio`,options:Object.values(p)},selectionMode:{control:`radio`,options:Object.values(c)},value:{table:{disable:!0}},onChange:{table:{disable:!0}},children:{table:{disable:!0}}}},C={tags:[`dev`,`test`],render:e=>(0,y.jsx)(s,{children:(0,y.jsxs)(r,{width:`wide`,children:[(0,y.jsx)(a,{children:`Playground`}),(0,y.jsx)(i,{children:`Группа карточек выбора. orientation / gap / breakpoint управляют раскладкой.`}),(0,y.jsx)(n,{align:`center`,children:(0,y.jsx)(`div`,{className:_.wide,children:(0,y.jsxs)(f,{...e,children:[(0,y.jsx)(u,{value:`start`,title:`Тариф Start`,description:`10 ГБ хранилища`}),(0,y.jsx)(u,{value:`pro`,title:`Тариф Pro`,description:`100 ГБ хранилища`}),(0,y.jsx)(u,{value:`enterprise`,title:`Тариф Enterprise`,description:`Безлимит`})]})})})]})}),play:async({canvasElement:e})=>{await b(x(e).getByTestId(d.group)).toBeVisible()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='wide'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Группа карточек выбора. orientation / gap / breakpoint управляют раскладкой.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.wide}>
            <ToggleGroup {...args}>
              <ToggleCard value='start' title='Тариф Start' description='10 ГБ хранилища' />
              <ToggleCard value='pro' title='Тариф Pro' description='100 ГБ хранилища' />
              <ToggleCard value='enterprise' title='Тариф Enterprise' description='Безлимит' />
            </ToggleGroup>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.group)).toBeVisible();
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`]}))();export{C as Playground,w as __namedExportsOrder,S as default};
//# sourceMappingURL=ToggleGroup.Playground.stories-DJf5FeA0.js.map