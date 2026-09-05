import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Coxm4alt.js";import{i as c,n as l,o as u,r as d,t as f}from"./styles.module-B3r5-RM5.js";var p,m=e((()=>{p={root:`flex`}})),h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{d(),o(),f(),m(),h=t(),{expect:g,within:_}=__STORYBOOK_MODULE_TEST__,v=[`row`,`row-reverse`,`column`,`column-reverse`],y=[`flex-start`,`center`,`flex-end`,`space-between`,`space-around`,`space-evenly`],b=[`flex-start`,`center`,`flex-end`,`self-start`,`self-end`,`baseline`,`stretch`],x=[`flex-start`,`center`,`flex-end`,`space-between`,`space-around`,`space-evenly`,`stretch`],S=[`nowrap`,`wrap`,`wrap-reverse`],C=[`visible`,`hidden`,`clip`,`scroll`,`auto`],w={title:`Uikit Product/Layout & containers/Flex`,id:`uikit-product-flex`,component:c,parameters:{layout:`fullscreen`,figma:{disable:!0}},args:{direction:`row`,justify:`space-between`,align:`center`,gap:u.Gap2,fullWidth:!0,"data-test-id":p.root},argTypes:{direction:{control:`select`,options:v},justify:{control:`select`,options:y},align:{control:`select`,options:b},alignContent:{control:`select`,options:x},gap:{control:`select`,options:Object.values(u)},columnGap:{control:`select`,options:Object.values(u)},rowGap:{control:`select`,options:Object.values(u)},wrap:{control:`radio`,options:S},overflow:{control:`select`,options:C},overflowX:{control:`select`,options:C},overflowY:{control:`select`,options:C}}},T={tags:[`dev`,`test`],render:e=>(0,h.jsx)(s,{children:(0,h.jsxs)(r,{children:[(0,h.jsx)(a,{children:`Playground`}),(0,h.jsx)(i,{children:`Контейнер flex-раскладки: направление, выравнивание, перенос и отступы между детьми.`}),(0,h.jsx)(n,{block:!0,children:(0,h.jsxs)(c,{...e,children:[(0,h.jsx)(`span`,{className:l.box,children:`1`}),(0,h.jsx)(`span`,{className:l.box,children:`2`}),(0,h.jsx)(`span`,{className:l.box,children:`3`})]})})]})}),play:async({canvasElement:e})=>{await g(_(e).getByTestId(p.root)).toBeVisible()}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Контейнер flex-раскладки: направление, выравнивание, перенос и отступы между детьми.</DemoHint>
        <DemoActions block>
          <Flex {...args}>
            <span className={styles.box}>1</span>
            <span className={styles.box}>2</span>
            <span className={styles.box}>3</span>
          </Flex>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...T.parameters?.docs?.source}}},E=[`Playground`]}))();export{T as Playground,E as __namedExportsOrder,w as default};
//# sourceMappingURL=Flex.Playground.stories-DymDxtr4.js.map