import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-Coxm4alt.js";import{a as u,t as d,x as f}from"./src-NFLDNS4F.js";import{n as p,t as m}from"./testIds-DDukF6lf.js";import{n as h,t as g}from"./stories.module-Cv0zmHWk.js";function _(){let[e,t]=(0,v.useState)([`general`,`workspace-resources`]);return(0,y.jsx)(l,{children:(0,y.jsxs)(a,{width:`narrow`,children:[(0,y.jsx)(s,{children:`Collapse`}),(0,y.jsx)(o,{children:`Controlled expand: click anywhere on a group row to toggle. Includes a group → collapse branch.`}),(0,y.jsx)(i,{align:`center`,children:(0,y.jsx)(`div`,{className:h.listFrame,children:(0,y.jsx)(u,{"data-test-id":m.list.collapseScenario,items:w,size:`m`,collapse:{value:e,onChange:e=>t(e??[])}})})})]})})}var v,y,b,x,S,C,w,T,E;t((()=>{d(),v=e(n(),1),c(),p(),g(),y=r(),{expect:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Snack/Data display/List/List/Examples/Collapse`,id:`components-list-list-examples-collapse`,component:u,parameters:{layout:`fullscreen`}},w=[{id:`general`,type:`collapse`,content:{label:`General`},items:[{id:`general-overview`,content:{label:`Overview`}},{id:`general-analytics`,content:{label:`Analytics`}}]},{id:`billing`,type:`collapse`,content:{label:`Billing`},items:[{id:`billing-invoices`,content:{label:`Invoices`}},{id:`billing-methods`,type:`collapse`,content:{label:`Payment methods`},items:[{id:`billing-card`,content:{label:`Card`}},{id:`billing-wire`,content:{label:`Wire transfer`}}]}]},{type:`group`,label:`Workspace`,groupVariant:`subtitle`,items:[{id:`workspace-resources`,type:`collapse`,content:{label:`Resources`},items:[{id:`workspace-servers`,content:{label:`Servers`}},{id:`workspace-storage`,content:{label:`Storage`}}]}]},{id:`settings`,content:{label:`Settings`}}],T={tags:[`dev`,`test`],render:()=>(0,y.jsx)(_,{}),play:async({canvasElement:e,step:t})=>{let n=S(e),r=n.getByTestId(m.list.collapseScenario),i=()=>r.querySelector(`[data-test-id="${f.accordionItem}-billing"] [data-test-id="${f.baseItem}_billing"]`);await t(`row click opens the collapse branch`,async()=>{await x.click(i()),await b(n.getByTestId(`${f.baseItem}_billing-invoices`)).toBeVisible()}),await t(`row click closes it back (restores initial state)`,async()=>{await x.click(i()),await b(n.queryByTestId(`${f.baseItem}_billing-invoices`)).toBeNull()})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <CollapseScenario />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.list.collapseScenario);
    // Раскрытие переключает клик по строке группы целиком (шеврон — только индикатор).
    // Тогглим billing открыть→закрыть: проверяем триггер и возвращаем стори в исходное
    // состояние (general/workspace раскрыты, billing свёрнут) — на него опираются e2e-спеки,
    // которые грузят эту же стори (play выполняется при загрузке).
    const billingRow = () => root.querySelector(\`[data-test-id="\${INTERNAL_TEST_IDS.accordionItem}-billing"] [data-test-id="\${INTERNAL_TEST_IDS.baseItem}_billing"]\`) as HTMLElement;
    await step('row click opens the collapse branch', async () => {
      await userEvent.click(billingRow());
      await expect(canvas.getByTestId(\`\${INTERNAL_TEST_IDS.baseItem}_billing-invoices\`)).toBeVisible();
    });
    await step('row click closes it back (restores initial state)', async () => {
      await userEvent.click(billingRow());
      await expect(canvas.queryByTestId(\`\${INTERNAL_TEST_IDS.baseItem}_billing-invoices\`)).toBeNull();
    });
  }
}`,...T.parameters?.docs?.source}}},E=[`Collapse`]}))();export{T as Collapse,E as __namedExportsOrder,C as default};
//# sourceMappingURL=List.Collapse.stories-0zXMxEZ4.js.map