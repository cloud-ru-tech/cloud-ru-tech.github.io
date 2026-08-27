import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-DCnmYW19.js";import{c as u,p as d,t as f,u as p}from"./src-Dv6RaWd5.js";import{n as m,t as h}from"./stories.module-D3U40748.js";import{t as g}from"./testIds-BP-GFzzJ.js";var _,v,y,b,x,S,C;t((()=>{f(),_=e(r(),1),c(),h(),g(),v=n(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Foundation & utilities/DragAndDrop/DragGhost`,id:`components-draganddrop-dragghost`,component:u,parameters:{layout:`fullscreen`},args:{dragging:!0,mode:p.Static,"data-test-id":d.dragGhost}},S={tags:[`dev`,`test`],render:e=>(0,v.jsx)(l,{children:(0,v.jsxs)(a,{children:[(0,v.jsx)(s,{children:`Playground`}),(0,v.jsx)(o,{children:"Исходная сущность на время переноса: в `static` остаётся на месте приглушённой, в `dynamic` — уступает место, и её слот пустеет. Компонент презентационный, поэтому Playground показывает вид состояния, а не сам перенос — живой перенос собран в story `DragGhost/Examples/SortableList`."}),(0,v.jsx)(i,{align:`center`,children:(0,v.jsxs)(`div`,{className:(0,_.default)(m.canvas,m.list),children:[(0,v.jsx)(`div`,{className:m.row,children:`ListItem 1`}),(0,v.jsx)(u,{...e,className:(0,_.default)(m.radiusRounded,e.className),children:(0,v.jsx)(`div`,{className:m.row,children:`ListItem 2`})}),(0,v.jsx)(`div`,{className:m.row,children:`ListItem 3`})]})})]})}),play:async({canvasElement:e})=>{await y(b(e).getByTestId(d.dragGhost)).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>
          Исходная сущность на время переноса: в \`static\` остаётся на месте приглушённой, в \`dynamic\` — уступает место,
          и её слот пустеет. Компонент презентационный, поэтому Playground показывает вид состояния, а не сам перенос —
          живой перенос собран в story \`DragGhost/Examples/SortableList\`.
        </DemoHint>
        <DemoActions align='center'>
          {/* Соседи вокруг: без них пустой слот не с чем сравнить. */}
          <div className={cn(styles.canvas, styles.list)}>
            <div className={styles.row}>ListItem 1</div>
            <DragGhost {...args} className={cn(styles.radiusRounded, args.className)}>
              <div className={styles.row}>ListItem 2</div>
            </DragGhost>
            <div className={styles.row}>ListItem 3</div>
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.dragGhost)).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,x as default};
//# sourceMappingURL=DragGhost.Playground.stories-DRx793Dl.js.map