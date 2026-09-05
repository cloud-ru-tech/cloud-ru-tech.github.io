import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Coxm4alt.js";import{_ as c,f as l,g as u,m as d,n as f,r as p,t as m,u as h}from"./styles.module-PDapN4t-.js";import{n as g,t as _}from"./testIds-DhBpeBXv.js";var v,y,b,x,S,C;e((()=>{p(),o(),m(),g(),v=t(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Data display/Timeline/Track`,id:`components-timeline-track`,parameters:{layout:`fullscreen`},args:{"data-test-id":_.track.root,position:`start`,lineStyle:`solid`,dotVariant:`default`,dotAppearance:`primary`,showLines:!0},argTypes:{position:{control:`radio`,options:Object.values(l)},lineStyle:{control:`radio`,options:Object.values(d)},dotVariant:{control:`radio`,options:Object.values(c)},dotAppearance:{control:`select`,options:Object.values(u)}}},S={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await y(b(e).getByTestId(_.track.root)).toBeVisible()},render:e=>(0,v.jsx)(s,{children:(0,v.jsxs)(r,{children:[(0,v.jsx)(a,{children:`Playground`}),(0,v.jsx)(i,{children:`Вертикальная дорожка таймлайна с точкой и линией.`}),(0,v.jsx)(n,{align:`center`,children:(0,v.jsx)(`div`,{className:f.trackWithContent,children:(0,v.jsx)(h,{...e})})})]})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.track.root)).toBeVisible();
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Вертикальная дорожка таймлайна с точкой и линией.</DemoHint>
        <DemoActions align='center'>
          <div className={styles.trackWithContent}>
            <Track {...args} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Track.Playground.stories-DAE_9Z4u.js.map