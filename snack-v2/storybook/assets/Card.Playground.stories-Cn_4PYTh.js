import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-szaSCk8V.js";import{U as c,t as l}from"./system-leSQpqQe.js";import{r as u,t as d}from"./src-CCaBCq3s.js";import{c as f,n as p,s as m,t as h}from"./src-DwBeoZHC.js";import{a as g,i as _,n as v,t as y}from"./src-AlLO-7ep.js";import{c as b,n as x,o as S,s as C,t as w}from"./src-C8XjtXOr.js";import{n as T,t as E}from"./styles.module-jQ3neZrc.js";import{t as D}from"./testIds-eLbL0GA-.js";function O(){return(0,k.jsxs)(`div`,{className:T.playgroundExample,children:[(0,k.jsx)(v,{icon:c,appearance:_.Primary,size:g.M,shape:`rounded`}),(0,k.jsxs)(`div`,{className:T.playgroundExampleText,children:[(0,k.jsx)(p,{variant:f.title,size:m.s,children:`Title text`}),(0,k.jsx)(p,{variant:f.body,size:m.s,className:T.playgroundExampleSubtitle,children:`Subtitle text`}),(0,k.jsx)(p,{variant:f.body,size:m.m,children:`Description text`})]})]})}var k,A,j,M,N,P;e((()=>{w(),y(),l(),d(),h(),o(),E(),D(),k=t(),{expect:A,within:j}=__STORYBOOK_MODULE_TEST__,M={title:`Snack/Layout & containers/Card/Card`,id:`components-card-card`,component:x,parameters:{layout:`fullscreen`},args:{radius:S.M,view:b.Outline,backgroundPredefined:u.NeutralBackground1Level,disabled:!1,checked:!1,multiSelect:!1,interactive:!0,children:(0,k.jsx)(O,{}),className:``,"data-test-id":C.root},argTypes:{radius:{control:`radio`,options:Object.values(S),description:`Радиус контейнера (s / m / l)`},view:{control:`radio`,options:Object.values(b),description:`Режим: simple / outline / elevated`},backgroundPredefined:{control:`select`,options:Object.values(u),description:"Предустановленная заливка фона (`BACKGROUND_PREDEFINED_FILL`)."},disabled:{control:`boolean`},checked:{control:`boolean`},multiSelect:{control:`boolean`,description:`Показ галочки в checked состоянии`},interactive:{control:`boolean`,description:"Включает hover/press state layer и focus-ring. `false` — презентационная карточка."},children:{table:{disable:!0},description:`По умолчанию — пример с иконкой и тремя строками текста; можно переопределить через args.`}}},N={tags:[`dev`,`test`],render:e=>(0,k.jsx)(r,{children:(0,k.jsxs)(a,{children:[(0,k.jsx)(i,{children:`Playground`}),(0,k.jsx)(n,{children:`Карточка-контейнер с радиусом, фоном и опциональным selected-состоянием.`}),(0,k.jsx)(s,{align:`center`,children:(0,k.jsx)(x,{...e})})]})}),play:async({canvasElement:e})=>{await A(j(e).getByTestId(C.root)).toBeVisible()}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
//# sourceMappingURL=Card.Playground.stories-Cn_4PYTh.js.map