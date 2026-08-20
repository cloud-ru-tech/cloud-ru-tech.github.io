import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-CvASAC9b.js";import{D as c,Nt as l,j as u,kt as d,st as f,t as p}from"./system-DqAC22Yn.js";import{a as m,t as h,x as g}from"./src-BcV6P3zO.js";import{n as _,t as v}from"./testIds-zOjMf_tk.js";import{n as y,t as b}from"./stories.module-Cv0zmHWk.js";var x,S,C,w,T,E,D;e((()=>{p(),h(),o(),_(),b(),x=t(),{userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Snack/Data display/List/List/Examples/Submenu`,id:`components-list-list-examples-submenu`,component:m,parameters:{layout:`fullscreen`,design:{type:`figma`,url:`https://www.figma.com/design/wKxqVGm5YH01EgQMBK4a3G/list?node-id=27832-59174`}}},T=[{id:`home`,beforeContent:(0,x.jsx)(f,{}),content:{label:`Home`}},{id:`workspace`,type:`next-list`,beforeContent:(0,x.jsx)(d,{}),content:{label:`Workspace`},items:[{id:`w-overview`,content:{label:`Overview`}},{id:`w-analytics`,content:{label:`Analytics`}},{id:`w-projects`,type:`next-list`,beforeContent:(0,x.jsx)(l,{}),content:{label:`Projects`},items:[{id:`p-frontend`,content:{label:`Frontend`}},{id:`p-backend`,content:{label:`Backend`}}]}]},{id:`reports`,type:`next-list`,beforeContent:(0,x.jsx)(l,{}),content:{label:`Reports (loading)`},loading:!0,items:[{id:`r-pending`,content:{label:`Pending…`}}]},{id:`favourites`,beforeContent:(0,x.jsx)(c,{}),content:{label:`Favourites`}},{id:`settings`,beforeContent:(0,x.jsx)(u,{}),content:{label:`Settings`}}],E={tags:[`dev`,`test`],render:()=>(0,x.jsx)(s,{children:(0,x.jsxs)(r,{width:`narrow`,children:[(0,x.jsx)(a,{children:`Submenu (next-list)`}),(0,x.jsx)(i,{children:`Hover «Workspace» — открывается вложенный список (NextListItem → Dropdown).`}),(0,x.jsx)(n,{align:`center`,children:(0,x.jsx)(`div`,{className:y.listFrame,children:(0,x.jsx)(m,{"data-test-id":v.list.submenuScenario,items:T,size:`m`})})})]})}),play:async({canvasElement:e,step:t})=>{let n=C(e).getByTestId(v.list.submenuScenario);await t(`hover root item with submenu (opens NextListItem)`,async()=>{let e=n.querySelectorAll(`[data-test-id^="${g.baseItem}"]`);e[1]&&await S.hover(e[1])})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <DemoPage>
      <DemoPanel width='narrow'>
        <DemoTitle>Submenu (next-list)</DemoTitle>
        <DemoHint>Hover «Workspace» — открывается вложенный список (NextListItem → Dropdown).</DemoHint>
        <DemoActions align='center'>
          <div className={styles.listFrame}>
            <List data-test-id={TEST_IDS.list.submenuScenario} items={items} size='m' />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.list.submenuScenario);
    await step('hover root item with submenu (opens NextListItem)', async () => {
      const items = root.querySelectorAll(\`[data-test-id^="\${INTERNAL_TEST_IDS.baseItem}"]\`);
      if (items[1]) await userEvent.hover(items[1] as HTMLElement);
    });
  }
}`,...E.parameters?.docs?.source}}},D=[`Submenu`]}))();export{E as Submenu,D as __namedExportsOrder,w as default};
//# sourceMappingURL=List.Submenu.stories-BDbxV5iv.js.map