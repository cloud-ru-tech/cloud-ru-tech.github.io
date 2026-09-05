import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-C2bZDhP2.js";import{_ as c,c as l,f as u,g as d,m as f,n as p,o as m,r as h,t as g}from"./styles.module-Dv-kfaBY.js";import{n as _,t as v}from"./DemoComponent-BiwdHKJ5.js";import{n as y,t as b}from"./testIds-DhBpeBXv.js";var x,S,C,w,T,E;e((()=>{h(),o(),_(),g(),y(),x=t(),{expect:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Snack/Data display/Timeline/TimelineItem`,id:`components-timeline-timelineitem`,component:m,parameters:{layout:`fullscreen`},args:{contentPosition:`right`,position:`start`,lineStyle:`solid`,dotVariant:`default`,dotAppearance:`primary`,contentTitle:`Content title`,contentDescription:`Description`,showOpposite:!1,showLines:!0,"data-test-id":b.timelineItem.root},argTypes:{contentTitle:{name:`[Story]: Content title`,type:`string`},contentDescription:{name:`[Story]: Content description`,type:`string`},showOpposite:{name:`[Story]: Show opposite`,type:`boolean`},contentPosition:{control:`radio`,options:Object.values(l)},position:{control:`radio`,options:Object.values(u)},lineStyle:{control:`radio`,options:Object.values(f)},dotVariant:{control:`radio`,options:Object.values(c)},dotAppearance:{control:`select`,options:Object.values(d)},"data-test-id":{control:`text`,description:`Test ID для автотестов`,table:{category:`HTML Attributes`}}}},T={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await S(C(e).getByTestId(b.timelineItem.root)).toBeVisible()},render:({contentTitle:e,contentDescription:t,showOpposite:o,...c})=>(0,x.jsx)(s,{children:(0,x.jsxs)(r,{children:[(0,x.jsx)(a,{children:`Playground`}),(0,x.jsx)(i,{children:`Отдельный элемент таймлайна с настраиваемой точкой и линией.`}),(0,x.jsx)(n,{align:`start`,children:(0,x.jsx)(`div`,{className:p.wrapper,children:(0,x.jsx)(m,{...c,content:(0,x.jsx)(v,{title:e,description:t}),opposite:o?(0,x.jsx)(v,{title:`Opposite`,description:`Description`}):void 0})})})]})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.timelineItem.root)).toBeVisible();
  },
  render: ({
    contentTitle,
    contentDescription,
    showOpposite,
    ...args
  }) => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Отдельный элемент таймлайна с настраиваемой точкой и линией.</DemoHint>
        <DemoActions align='start'>
          <div className={styles.wrapper}>
            <TrackItem {...args} content={<DemoComponent title={contentTitle} description={contentDescription} />} opposite={showOpposite ? <DemoComponent title='Opposite' description='Description' /> : undefined} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...T.parameters?.docs?.source}}},E=[`Playground`]}))();export{T as Playground,E as __namedExportsOrder,w as default};
//# sourceMappingURL=TimelineItem.Playground.stories-B6JN16Jo.js.map