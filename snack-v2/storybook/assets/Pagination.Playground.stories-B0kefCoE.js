import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BLXw10_m.js";import{i as c,l,o as u,t as d}from"./src-BYDQx127.js";import{n as f,t as p}from"./testIds-pAKn-V6p.js";var m,h,g,_,v,y,b;e((()=>{d(),o(),f(),m=t(),{expect:h,fn:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Navigation/Pagination/Pagination`,id:`components-pagination-pagination`,component:c,parameters:{layout:`fullscreen`},args:{total:10,page:3,size:u.S,variant:l.Button,maxLength:7,onChange:g(),"data-test-id":p.pagination.root},argTypes:{total:{control:{type:`number`,min:1},description:`Общее количество страниц`},page:{control:{type:`number`,min:1},description:`Текущая страница`},size:{control:`radio`,options:Object.values(u),description:`Размер: s / m`},variant:{control:`radio`,options:Object.values(l),description:`Тип кнопок: button / link`},maxLength:{control:{type:`number`,min:5},description:`Максимальное количество элементов до свёртки`}}},y={tags:[`dev`,`test`],render:e=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{children:[(0,m.jsx)(a,{children:`Playground`}),(0,m.jsx)(i,{children:`Постраничная навигация по списку.`}),(0,m.jsx)(n,{align:`center`,children:(0,m.jsx)(c,{...e})})]})}),play:async({canvasElement:e})=>{await h(_(e).getByTestId(p.pagination.root)).toBeVisible()}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Постраничная навигация по списку.</DemoHint>
        <DemoActions align='center'>
          <Pagination {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.pagination.root)).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}},b=[`Playground`]}))();export{y as Playground,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Pagination.Playground.stories-B0kefCoE.js.map