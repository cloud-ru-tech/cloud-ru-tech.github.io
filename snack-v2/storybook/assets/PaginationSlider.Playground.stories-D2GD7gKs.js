import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-qs8RgOhH.js";import{n as c,s as l,t as u}from"./src-Cila39hM.js";import{n as d,t as f}from"./testIds-BGF4cF_a.js";var p,m,h,g,_,v,y;e((()=>{u(),o(),d(),p=t(),{expect:m,fn:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Navigation/Pagination/PaginationSlider`,id:`components-pagination-paginationslider`,component:c,parameters:{layout:`fullscreen`},args:{total:6,page:2,size:l.Xs,onChange:h(),"data-test-id":f.paginationSlider.root},argTypes:{total:{control:{type:`number`,min:1},description:`Общее количество страниц`},page:{control:{type:`number`,min:1},description:`Текущая страница`},size:{control:`radio`,options:Object.values(l),description:`Размер: xs / s`}}},v={tags:[`dev`,`test`],render:e=>(0,p.jsx)(r,{children:(0,p.jsxs)(a,{children:[(0,p.jsx)(i,{children:`Playground`}),(0,p.jsx)(n,{children:`Компактная пагинация-слайдер для небольших списков.`}),(0,p.jsx)(s,{align:`center`,children:(0,p.jsx)(c,{...e})})]})}),play:async({canvasElement:e})=>{await m(g(e).getByTestId(f.paginationSlider.root)).toBeVisible()}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Компактная пагинация-слайдер для небольших списков.</DemoHint>
        <DemoActions align='center'>
          <PaginationSlider {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.paginationSlider.root)).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`]}))();export{v as Playground,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=PaginationSlider.Playground.stories-D2GD7gKs.js.map