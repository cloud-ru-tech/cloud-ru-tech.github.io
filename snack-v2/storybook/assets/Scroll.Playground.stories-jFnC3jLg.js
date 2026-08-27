import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-DCnmYW19.js";import{a as c,i as l,n as u,o as d,s as f,t as p}from"./src-BeTkKd3D.js";import{n as m,t as h}from"./styles.module-CrtsmC9o.js";import{n as g,t as _}from"./testIds-B4PNLEx4.js";var v,y,b,x,S,C;e((()=>{p(),o(),h(),g(),v=t(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Layout & containers/Scroll`,id:`components-scroll`,component:u,parameters:{layout:`fullscreen`},args:{children:(0,v.jsx)(`div`,{className:m.scrollContent,children:Array.from({length:20},(e,t)=>(0,v.jsxs)(`div`,{className:m.playgroundLine,children:[`Line of content `,String(t+1).padStart(2,`0`),`. Scroll to see the scrollbar, this is some long long long text.`]},t))}),size:f.M,barHideStrategy:c.Leave,clickScrolling:!0,untouchableScrollbars:!1,resize:d.None,paddingAbsolute:!1,"data-test-id":_.root},argTypes:{children:{table:{disable:!0}},size:{options:Object.values(f),control:`radio`},barHideStrategy:{options:Object.values(c),control:`select`},clickScrolling:{control:`boolean`},untouchableScrollbars:{control:`boolean`},resize:{options:Object.values(d),control:`select`},paddingAbsolute:{control:`boolean`},autoscrollTo:{options:Object.values(l),control:`select`},onScroll:{table:{disable:!0}},onInitialized:{table:{disable:!0}}}},S={tags:[`dev`,`test`],render:e=>(0,v.jsx)(s,{children:(0,v.jsxs)(r,{children:[(0,v.jsx)(a,{children:`Playground`}),(0,v.jsx)(i,{children:`Кастомный скроллбар вокруг прокручиваемой области.`}),(0,v.jsx)(n,{align:`start`,children:(0,v.jsx)(u,{...e,className:m.scroll})})]})}),play:async({canvasElement:e})=>{await y(b(e).getByTestId(_.root)).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Кастомный скроллбар вокруг прокручиваемой области.</DemoHint>
        <DemoActions align='start'>
          <Scroll {...args} className={styles.scroll} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Scroll.Playground.stories-jFnC3jLg.js.map