import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BLXw10_m.js";import{a as c,s as l,t as u,u as d}from"./src-CUvFpUpw.js";import{lt as f,t as p}from"./product-BqDRoYdi.js";import{c as m,m as h,n as g,r as _,t as v}from"./testIds-DYYqjMHU.js";import{n as y,t as b}from"./styles.module-FkmQtAFp.js";import{g as x,o as S,v as C}from"./demoData-CiDiRg5h.js";var w,T,E,D,O,k,A,j;e((()=>{u(),p(),_(),o(),C(),b(),g(),w=t(),{expect:T,fn:E,within:D}=__STORYBOOK_MODULE_TEST__,O=(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c,{view:d.Outline,appearance:l.Neutral,label:`Документация`,onClick:E()}),(0,w.jsx)(c,{view:d.Filled,label:`Создать сеть`,onClick:E()})]}),k={title:`Uikit Product/Layout & containers/PageLayout/TreeNavigation`,id:`uikit-product-pagelayout-treenavigation`,component:m,parameters:{layout:`fullscreen`},args:{mode:h.Aside,header:{title:`Облачный проект`,icon:(0,w.jsx)(f,{}),description:`Управление сетевыми ресурсами проекта`,status:{label:`Активно`,appearance:`green`},actions:O},menu:{menuTitle:`Разделы`,items:x,selected:`subnets`,defaultMenuOpened:!0,withDefaultOpenedMenuList:!0},content:(0,w.jsx)(S,{})},argTypes:{mode:{control:`radio`,options:Object.values(h)},header:{table:{disable:!0}},menu:{table:{disable:!0}},content:{table:{disable:!0}},contentClassName:{table:{disable:!0}}}},A={tags:[`dev`,`test`],render:e=>(0,w.jsx)(s,{children:(0,w.jsxs)(r,{width:`fluid`,children:[(0,w.jsx)(a,{children:`Playground`}),(0,w.jsx)(i,{children:`Навигация по дереву разделов: режимы popover / aside / fixed, заголовок и меню.`}),(0,w.jsx)(n,{align:`center`,children:(0,w.jsx)(`div`,{className:y.treeFrame,"data-test-id":v.treeNavigation.root,children:(0,w.jsx)(m,{...e})})})]})}),play:async({canvasElement:e})=>{await T(D(e).getByTestId(v.treeNavigation.root)).toBeVisible()}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel width='fluid'>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Навигация по дереву разделов: режимы popover / aside / fixed, заголовок и меню.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.treeFrame} data-test-id={TEST_IDS.treeNavigation.root}>
            <TreeNavigation {...args} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.treeNavigation.root)).toBeVisible();
  }
}`,...A.parameters?.docs?.source}}},j=[`Playground`]}))();export{A as Playground,j as __namedExportsOrder,k as default};
//# sourceMappingURL=TreeNavigation.Playground.stories-85bNttxr.js.map