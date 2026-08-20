import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Bd5xtg2w.js";import{V as c,t as l}from"./system-D2QEyDJQ.js";import{r as u,t as d}from"./src-CCaBCq3s.js";import{c as f,n as p,s as m,t as h}from"./src-DESXNENb.js";import{c as g,n as _,o as v,s as y,t as b}from"./src-OqNm7KEp.js";import{a as x,i as S,n as C,t as w}from"./src-Cdpmz-S2.js";import{n as T,t as E}from"./styles.module-DAdDTfsw.js";import{t as D}from"./testIds-CaTB7Ewt.js";function O(){return(0,k.jsxs)(`div`,{className:T.playgroundExample,children:[(0,k.jsx)(C,{icon:c,appearance:S.Primary,size:x.M,shape:`rounded`}),(0,k.jsxs)(`div`,{className:T.playgroundExampleText,children:[(0,k.jsx)(p,{variant:f.title,size:m.s,children:`Title text`}),(0,k.jsx)(p,{variant:f.body,size:m.s,className:T.playgroundExampleSubtitle,children:`Subtitle text`}),(0,k.jsx)(p,{variant:f.body,size:m.m,children:`Description text`})]})]})}var k,A,j,M,N,P;e((()=>{b(),w(),l(),d(),h(),o(),E(),D(),k=t(),{expect:A,within:j}=__STORYBOOK_MODULE_TEST__,M={title:`Snack/Layout & containers/Card/Card`,id:`components-card-card`,component:_,parameters:{layout:`fullscreen`},args:{radius:v.M,view:g.Outline,backgroundPredefined:u.NeutralBackground1Level,disabled:!1,checked:!1,multiSelect:!1,interactive:!0,children:(0,k.jsx)(O,{}),className:``,"data-test-id":y.root},argTypes:{radius:{control:`radio`,options:Object.values(v),description:`Радиус контейнера (s / m / l)`},view:{control:`radio`,options:Object.values(g),description:`Режим: simple / outline / elevated`},backgroundPredefined:{control:`select`,options:Object.values(u),description:"Предустановленная заливка фона (`BACKGROUND_PREDEFINED_FILL`)."},disabled:{control:`boolean`},checked:{control:`boolean`},multiSelect:{control:`boolean`,description:`Показ галочки в checked состоянии`},interactive:{control:`boolean`,description:"Включает hover/press state layer и focus-ring. `false` — презентационная карточка."},children:{table:{disable:!0},description:`По умолчанию — пример с иконкой и тремя строками текста; можно переопределить через args.`}}},N={tags:[`dev`,`test`],render:e=>(0,k.jsx)(s,{children:(0,k.jsxs)(r,{children:[(0,k.jsx)(a,{children:`Playground`}),(0,k.jsx)(i,{children:`Карточка-контейнер с радиусом, фоном и опциональным selected-состоянием.`}),(0,k.jsx)(n,{align:`center`,children:(0,k.jsx)(_,{...e})})]})}),play:async({canvasElement:e})=>{await A(j(e).getByTestId(y.root)).toBeVisible()}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Карточка-контейнер с радиусом, фоном и опциональным selected-состоянием.</DemoHint>
        <DemoActions align='center'>
          <Card {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...N.parameters?.docs?.source}}},P=[`Playground`]}))();export{N as Playground,P as __namedExportsOrder,M as default};
//# sourceMappingURL=Card.Playground.stories-CY39y_Ms.js.map