import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{d as i,f as a,g as o,p as s,t as c,u as l}from"./iframe-qs8RgOhH.js";import{d as u,i as d,p as f,t as p}from"./src-CMn_Zd_H.js";import{n as m,t as h}from"./stories.module-8jYz_uRV.js";import{t as g}from"./testIds-DH4zQpic.js";var _,v,y,b,x,S,C;t((()=>{p(),_=e(r(),1),c(),h(),g(),v=n(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Foundation & utilities/DragAndDrop/DropIndicator`,id:`components-draganddrop-dropindicator`,component:d,parameters:{layout:`fullscreen`},args:{orientation:u.Horizontal,"data-test-id":f.dropIndicator}},S={tags:[`dev`,`test`],render:e=>(0,v.jsx)(a,{children:(0,v.jsxs)(s,{children:[(0,v.jsx)(o,{children:`Playground`}),(0,v.jsx)(i,{children:"Линия позиции вставки: показывает, куда встанет сущность, если отпустить её сейчас. Как линия ведёт себя во время переноса — в story `DragGhost/Examples/SortableList` в статическом режиме."}),(0,v.jsx)(l,{align:`center`,children:(0,v.jsx)(`div`,{className:(0,_.default)(m.canvas,m.entity,{[m.verticalCell]:e.orientation===u.Vertical}),children:(0,v.jsx)(d,{...e})})})]})}),play:async({canvasElement:e})=>{await y(b(e).getByTestId(f.dropIndicator)).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>
          Линия позиции вставки: показывает, куда встанет сущность, если отпустить её сейчас. Как линия ведёт себя во
          время переноса — в story \`DragGhost/Examples/SortableList\` в статическом режиме.
        </DemoHint>
        <DemoActions align='center'>
          <div className={cn(styles.canvas, styles.entity, {
          [styles.verticalCell]: args.orientation === ORIENTATION.Vertical
        })}>
            <DropIndicator {...args} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.dropIndicator)).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,x as default};
//# sourceMappingURL=DropIndicator.Playground.stories-9kUmZc9A.js.map