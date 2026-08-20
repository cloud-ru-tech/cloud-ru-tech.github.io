import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-Bd5xtg2w.js";import{o as u,p as d,t as f}from"./src-vYekPpRd.js";import{n as p,t as m}from"./stories.module-D3U40748.js";import{t as h}from"./testIds-NoArYbxk.js";var g,_,v,y,b,x,S;t((()=>{f(),g=e(r(),1),c(),m(),h(),_=n(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Snack/Foundation & utilities/DragAndDrop/DragPreview`,id:`components-draganddrop-dragpreview`,component:u,parameters:{layout:`fullscreen`},args:{"data-test-id":d.dragPreview}},x={tags:[`dev`,`test`],render:e=>(0,_.jsx)(l,{children:(0,_.jsxs)(a,{children:[(0,_.jsx)(s,{children:`Playground`}),(0,_.jsx)(o,{children:"Поверхность перетаскиваемой копии. Скругление берётся у сущности внутри — обёртка повторяет её форму. Копия за курсором показана в story `DragGhost/Examples/SortableList`: там перенос запускается по-настоящему."}),(0,_.jsx)(i,{align:`center`,children:(0,_.jsx)(`div`,{className:(0,g.default)(p.canvas),children:(0,_.jsx)(u,{...e,className:(0,g.default)(p.entity,p.radiusRounded,e.className),children:(0,_.jsx)(`div`,{className:p.row,children:`ListItem 2`})})})})]})}),play:async({canvasElement:e})=>{await v(y(e).getByTestId(d.dragPreview)).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>
          Поверхность перетаскиваемой копии. Скругление берётся у сущности внутри — обёртка повторяет её форму. Копия за
          курсором показана в story \`DragGhost/Examples/SortableList\`: там перенос запускается по-настоящему.
        </DemoHint>
        <DemoActions align='center'>
          <div className={cn(styles.canvas)}>
            <DragPreview {...args} className={cn(styles.entity, styles.radiusRounded, args.className)}>
              <div className={styles.row}>ListItem 2</div>
            </DragPreview>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.dragPreview)).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};
//# sourceMappingURL=DragPreview.Playground.stories-Cr2wbsk-.js.map