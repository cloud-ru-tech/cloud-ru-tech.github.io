import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BPThJ53l.js";import{n as u,p as d,t as f}from"./src-Cb21Dy5I.js";import{n as p,t as m}from"./stories.module-D3U40748.js";import{t as h}from"./testIds-nDsi2Dod.js";var g,_,v,y,b,x,S;t((()=>{f(),g=e(r(),1),c(),m(),h(),_=n(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Foundation & utilities/DragAndDrop/DropTarget`,id:`components-draganddrop-droptarget`,component:u,parameters:{layout:`fullscreen`},args:{active:!0,"data-test-id":d.dropTarget}},x={tags:[`dev`,`test`],render:e=>(0,_.jsx)(l,{children:(0,_.jsxs)(a,{children:[(0,_.jsx)(s,{children:`Playground`}),(0,_.jsx)(o,{children:"Зона приёма: подсветка включается, когда перетаскиваемая сущность над зоной (`active`). Живой перенос между зонами — в story `DropTarget/Examples/CrossZone`."}),(0,_.jsx)(i,{align:`center`,children:(0,_.jsx)(`div`,{className:p.canvas,children:(0,_.jsxs)(u,{...e,className:(0,g.default)(p.entity,e.className),children:[(0,_.jsx)(`div`,{className:p.row,children:`ListItemGroup 1`}),(0,_.jsx)(`div`,{className:p.row,children:`ListItem 1`}),(0,_.jsx)(`div`,{className:p.row,children:`ListItem 2`})]})})})]})}),play:async({canvasElement:e})=>{await v(y(e).getByTestId(d.dropTarget)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>
          Зона приёма: подсветка включается, когда перетаскиваемая сущность над зоной (\`active\`). Живой перенос между
          зонами — в story \`DropTarget/Examples/CrossZone\`.
        </DemoHint>
        <DemoActions align='center'>
          <div className={styles.canvas}>
            <DropTarget {...args} className={cn(styles.entity, args.className)}>
              <div className={styles.row}>ListItemGroup 1</div>
              <div className={styles.row}>ListItem 1</div>
              <div className={styles.row}>ListItem 2</div>
            </DropTarget>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.dropTarget)).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};
//# sourceMappingURL=DropTarget.Playground.stories-DQ1HBBvs.js.map