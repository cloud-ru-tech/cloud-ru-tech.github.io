import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-D1b9r8k6.js";import{a as c,c as l,i as u,n as d,o as f,s as p,t as m}from"./src-CP_fkPv7.js";import{n as h,t as g}from"./styles.module-BmYlXWN8.js";var _=e((()=>{l()})),v,y,b,x,S,C;e((()=>{m(),o(),g(),_(),v=t(),{expect:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Snack/Layout & containers/Divider`,id:`components-divider`,component:d,parameters:{layout:`fullscreen`},args:{appearance:u.Neutral,variant:p.Regular,orientation:c.Horizontal,className:``,"data-test-id":f.root},argTypes:{appearance:{control:`radio`,options:Object.values(u),description:`Цвет линии: neutral — на обычном фоне, invertNeutral — на инвертированном`},variant:{control:`radio`,options:Object.values(p),description:`Толщина линии (regular: 1px, thin: 0.5px)`},orientation:{control:`radio`,options:Object.values(c),description:`Ориентация разделителя`},className:{control:`text`,table:{category:`Testing`}},"data-test-id":{control:`text`,table:{category:`Testing`}}}},S={tags:[`dev`,`test`],render:e=>(0,v.jsx)(s,{children:(0,v.jsxs)(r,{children:[(0,v.jsx)(a,{children:`Playground`}),(0,v.jsx)(i,{children:`Разделитель: горизонтальный или вертикальный, варианты по толщине линии.`}),(0,v.jsx)(n,{block:!0,children:e.orientation===c.Vertical?(0,v.jsxs)(`div`,{className:h.verticalRow,children:[(0,v.jsx)(`span`,{className:h.verticalRowLabel,children:`Left`}),(0,v.jsx)(`div`,{className:h.verticalRowDividerCell,children:(0,v.jsx)(d,{...e})}),(0,v.jsx)(`span`,{className:h.verticalRowLabel,children:`Right`})]}):(0,v.jsx)(`div`,{className:h.horizontalWrapper,children:(0,v.jsx)(d,{...e})})})]})}),play:async({canvasElement:e})=>{await y(b(e).getByTestId(f.root)).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Разделитель: горизонтальный или вертикальный, варианты по толщине линии.</DemoHint>
        <DemoActions block>
          {args.orientation === ORIENTATION.Vertical ? <div className={styles.verticalRow}>
              <span className={styles.verticalRowLabel}>Left</span>
              <div className={styles.verticalRowDividerCell}>
                <Divider {...args} />
              </div>
              <span className={styles.verticalRowLabel}>Right</span>
            </div> : <div className={styles.horizontalWrapper}>
              <Divider {...args} />
            </div>}
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.root)).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Divider.Playground.stories-CMmcj0Fj.js.map