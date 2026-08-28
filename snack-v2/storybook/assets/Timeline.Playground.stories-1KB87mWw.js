import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-SlIP-akt.js";import{i as c,n as l,r as u,t as d}from"./styles.module-CuWFYSOA.js";import{n as f,t as p}from"./DemoComponent-DP7WN4No.js";import{n as m,t as h}from"./testIds-DhBpeBXv.js";var g,_,v,y,b,x,S,C,w;e((()=>{u(),o(),f(),d(),m(),g=t(),{expect:_,within:v}=__STORYBOOK_MODULE_TEST__,y={title:`Snack/Data display/Timeline/Timeline`,id:`components-timeline-timeline`,component:c,parameters:{layout:`fullscreen`},args:{alternate:!1,fullWidth:!1,showOpposite:!1,itemsCount:4,contentPosition:`right`,className:void 0,"data-test-id":h.timeline.root},argTypes:{className:{control:`text`,description:"CSS-класс на контейнере `.timeline`",table:{category:`Styling`}},showOpposite:{name:`[Story]: Show opposite content`,type:`boolean`},itemsCount:{name:`[Story]: Amount of items`,control:{type:`range`,min:1,max:4,step:1}},contentPosition:{control:`radio`,options:[`right`,`left`]},"data-test-id":{control:`text`,description:`Test ID для автотестов`,table:{category:`HTML Attributes`}}}},b=()=>(0,g.jsx)(`span`,{children:`Opposite`}),x=[{content:(0,g.jsx)(p,{title:`Start`,description:`Description`}),dotAppearance:`primary`},{content:(0,g.jsx)(p,{title:`Center`,description:`Description`}),lineStyle:`dashed`},{content:(0,g.jsx)(p,{title:`Sub Center`,description:`Some very long description compared to others`}),lineStyle:`dashed`,dotVariant:`subEvent`,dotAppearance:`red`},{content:(0,g.jsx)(p,{title:`End`,description:`Description`})}],S=x.map(e=>({...e,opposite:(0,g.jsx)(b,{})})),C={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await _(v(e).getByTestId(h.timeline.root)).toBeVisible()},render:({showOpposite:e,contentPosition:t,fullWidth:o,alternate:u,itemsCount:d,...f})=>{let p=(e?S:x).slice(0,d);return(0,g.jsx)(s,{children:(0,g.jsxs)(r,{children:[(0,g.jsx)(a,{children:`Playground`}),(0,g.jsx)(i,{children:`Вертикальный таймлайн событий с настраиваемым расположением контента.`}),(0,g.jsx)(n,{align:`start`,children:(0,g.jsx)(`div`,{className:l.wrapper,children:(0,g.jsx)(c,{...f,contentPosition:t,items:p,fullWidth:o,alternate:u})})})]})})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.timeline.root)).toBeVisible();
  },
  render: ({
    showOpposite,
    contentPosition,
    fullWidth,
    alternate,
    itemsCount,
    ...args
  }) => {
    const calculatedItems = (showOpposite ? itemsWithOpposite : items).slice(0, itemsCount);
    return <DemoPage>
        <DemoPanel>
          <DemoTitle>Playground</DemoTitle>
          <DemoHint>Вертикальный таймлайн событий с настраиваемым расположением контента.</DemoHint>
          <DemoActions align='start'>
            <div className={styles.wrapper}>
              <Timeline {...args} contentPosition={contentPosition} items={calculatedItems} fullWidth={fullWidth} alternate={alternate} />
            </div>
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Playground`]}))();export{C as Playground,w as __namedExportsOrder,y as default};
//# sourceMappingURL=Timeline.Playground.stories-1KB87mWw.js.map