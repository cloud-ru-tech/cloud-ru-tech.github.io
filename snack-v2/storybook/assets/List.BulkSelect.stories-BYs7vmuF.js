import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BdtyM0cx.js";import{Ft as u,t as d}from"./system-DYmc6UG6.js";import{a as f,t as p,x as m}from"./src-CpnVh2EN.js";import{n as h,t as g}from"./testIds-DDukF6lf.js";import{n as _,t as v}from"./stories.module-Cv0zmHWk.js";function y(){let[e,t]=(0,b.useState)([`p1`]);return(0,x.jsx)(l,{children:(0,x.jsxs)(a,{width:`narrow`,children:[(0,x.jsx)(s,{children:`Bulk select`}),(0,x.jsx)(o,{children:`group-select: bulk-кнопка выбирает/снимает всю группу (indeterminate → all → none).`}),(0,x.jsx)(i,{align:`center`,children:(0,x.jsx)(`div`,{className:_.listFrame,children:(0,x.jsx)(f,{"data-test-id":g.list.bulkSelectScenario,size:`m`,items:E,selection:{mode:`multiple`,value:e,onChange:t}})})})]})})}var b,x,S,C,w,T,E,D,O;t((()=>{d(),p(),b=e(n(),1),c(),h(),v(),x=r(),{expect:S,userEvent:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Snack/Data display/List/List/Examples/BulkSelect`,id:`components-list-list-examples-bulkselect`,component:f,parameters:{layout:`fullscreen`,design:{type:`figma`,url:`https://www.figma.com/design/wKxqVGm5YH01EgQMBK4a3G/list?node-id=27832-59174`}}},E=[{type:`group-select`,id:`group-projects`,label:`Projects`,beforeContent:(0,x.jsx)(u,{}),groupVariant:`subtitle`,selectButtonLabel:`Select all`,items:[{id:`p1`,content:{label:`Project alpha`}},{id:`p2`,content:{label:`Project beta`}},{id:`p3`,content:{label:`Project gamma`}},{id:`p4`,content:{label:`Project delta`}}]}],D={tags:[`dev`,`test`],render:()=>(0,x.jsx)(y,{}),play:async({canvasElement:e,step:t})=>{let n=w(e),r=n.getByTestId(g.list.bulkSelectScenario),i=n.getByTestId(m.bulkSelectButton),a=e=>`${m.baseItem}_${e}`,o=[`p1`,`p2`,`p3`,`p4`];await t(`starts partial (only p1 selected)`,async()=>{await S(r).toBeVisible(),await S(n.getByTestId(a(`p1`))).toHaveAttribute(`data-checked`,`true`),await S(n.getByTestId(a(`p2`))).not.toHaveAttribute(`data-checked`,`true`)}),await t(`bulk button from partial selects the whole group`,async()=>{await C.click(i);for(let e of o)await S(n.getByTestId(a(e))).toHaveAttribute(`data-checked`,`true`)}),await t(`bulk button from all clears the whole group`,async()=>{await C.click(i);for(let e of o)await S(n.getByTestId(a(e))).not.toHaveAttribute(`data-checked`,`true`)})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <BulkSelectScenario />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.list.bulkSelectScenario);
    const bulkButton = canvas.getByTestId(INTERNAL_TEST_IDS.bulkSelectButton);
    const itemId = (id: string) => \`\${INTERNAL_TEST_IDS.baseItem}_\${id}\`;
    const ids = ['p1', 'p2', 'p3', 'p4'];
    await step('starts partial (only p1 selected)', async () => {
      await expect(root).toBeVisible();
      await expect(canvas.getByTestId(itemId('p1'))).toHaveAttribute('data-checked', 'true');
      await expect(canvas.getByTestId(itemId('p2'))).not.toHaveAttribute('data-checked', 'true');
    });
    await step('bulk button from partial selects the whole group', async () => {
      await userEvent.click(bulkButton);
      for (const id of ids) {
        await expect(canvas.getByTestId(itemId(id))).toHaveAttribute('data-checked', 'true');
      }
    });
    await step('bulk button from all clears the whole group', async () => {
      await userEvent.click(bulkButton);
      for (const id of ids) {
        await expect(canvas.getByTestId(itemId(id))).not.toHaveAttribute('data-checked', 'true');
      }
    });
  }
}`,...D.parameters?.docs?.source}}},O=[`BulkSelect`]}))();export{D as BulkSelect,O as __namedExportsOrder,T as default};
//# sourceMappingURL=List.BulkSelect.stories-BYs7vmuF.js.map